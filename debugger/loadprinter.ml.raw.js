var Ctype=require("Ctype");
var String=require("String");
var Dynlink=require("Dynlink");
var Printtyp=require("Printtyp");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Format=require("Format");
var Printval=require("Printval");
var Misc=require("Misc");
var Filename=require("Filename");
var Ident=require("Ident");
var Symtable=require("Symtable");
var Config=require("Config");
var Error="unknown primitive:caml_set_oo_id";
var debugger_symtable=[0,0];
var
 use_debugger_symtable=
  function(fn,arg)
   {var $js=Symtable["current_state"];
    var old_symtable=$js(0);
    var match=debugger_symtable[1];
    var $js$1=match;
    if($js$1)
     {var $js$2=Symtable["restore_state"];$js$2(match[1])}
    else
     {var $js$3=Dynlink["init"];
      $js$3(0);
      var $js$4=Dynlink["allow_unsafe_modules"];
      $js$4(1);
      var $js$5=Symtable["current_state"];
      var $js$6=$js$5(0);
      var $js$7=[0,$js$6];
      debugger_symtable[1]=$js$7,0}
    try
     {var result=fn(arg);
      var $js$8=Symtable["current_state"];
      var $js$9=$js$8(0);
      var $js$10=[0,$js$9];
      debugger_symtable[1]=$js$10,0;
      var $js$11=Symtable["restore_state"];
      $js$11(old_symtable);
      return result}
    catch(exn)
     {var $js$12=Symtable["restore_state"];
      $js$12(old_symtable);
      return "unknown primitive:reraise"}};
var
 loadfiles=
  function(ppf,name)
   {try
     {var $js=Misc["find_in_path"];
      var filename=$js(Config["load_path"][1],name);
      use_debugger_symtable(Dynlink["loadfile"],filename);
      var $js$1=Filename["dirname"];
      var d=$js$1(name);
      var $js$2="unknown primitive:caml_string_notequal";
      if($js$2)
       {var $js$3=List["mem"];
        var $js$4=$js$3(d,Config["load_path"][1]);
        var $js$5=!$js$4;
        if($js$5){Config["load_path"][1]=[0,d,Config["load_path"][1]],0}else{}}
      else
       {}
      var $js$6=Format["fprintf"];
      $js$6
       (ppf,
        [0,[11,"File ",[2,0,[11," loaded",[17,4,0]]]],"File %s loaded@."],
        filename);
      return 1}
    catch(exn)
     {var $js$7=exn[1]=Dynlink["Error"];
      if($js$7)
       {var match=exn[2];
        var $js$8=match;
        if(typeof $js$8=="number")
         {"unknown block:match/1207"}
        else
         {var $js$9=$js$8[0];
          if($js$9==2)
           {var $js$10=Pervasives["^"];
            var $js$11=String["uncapitalize"];
            var $js$12=$js$11(match[1]);
            var $js$13=$js$10($js$12,".cmo");
            var $js$14=loadfiles(ppf,$js$13);
            var $js$15=loadfiles(ppf,name);
            return $js$14&&$js$15}
          else
           {var exit=26}}}
      else
       {var exit=26}
      switch(exit)
       {case 26:
         var $js$16=exn=Not_found;
         if($js$16)
          {var $js$17=Format["fprintf"];
           $js$17
            (ppf,
             [0,
              [11,"Cannot find file ",[2,0,[17,4,0]]],
              "Cannot find file %s@."],
             name);
           return 0}
         else
          {var $js$18=exn[1]=Dynlink["Error"];
           if($js$18)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}
        }}};
var loadfile=function(ppf,name){var $js=loadfiles(ppf,name);return 0};
var
 eval_path=
  function(param)
   {var $js=param;
    if($js==0)
     {var $js$1=Symtable["get_global_value"];return $js$1(param[1])}
    else
     if($js==1)
      {var $js$2=eval_path(param[1]);return $js$2[param[3]]}
     else
      if($js==2)
       {var $js$3=Misc["fatal_error"];return $js$3("Loadprinter.eval_path")}};
var $js=Filename["concat"];
var compiler_libs=$js(Config["standard_library"],"compiler-libs");
var $js$1=Filename["concat"];
var topdirs=$js$1(compiler_libs,"topdirs.cmi");
var $js$2=Env["read_signature"];
var $js$3=$js$2("Topdirs",topdirs);
var match=0;
var
 match_printer_type=
  function(desc,typename)
   {try
     {var $js$4=Env["lookup_type"];
      var match$1=$js$4([1,[0,"Topdirs"],typename],Env["empty"])}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5)
       {var match$1="unknown primitive:raise"}
      else
       {var match$1="unknown primitive:reraise"}}
    var $js$6=Ctype["init_def"];
    var $js$7=Ident["current_time"];
    var $js$8=$js$7(0);
    $js$6($js$8);
    var $js$9=Ctype["begin_def"];
    $js$9(0);
    var $js$10=Ctype["newvar"];
    var ty_arg=$js$10(0,0);
    var $js$11=Ctype["unify"];
    var $js$12=Ctype["newconstr"];
    var $js$13=$js$12(match$1[1],[0,ty_arg,0]);
    var $js$14=Ctype["instance"];
    var $js$15=$js$14(0,Env["empty"],desc[1]);
    $js$11(Env["empty"],$js$13,$js$15);
    var $js$16=Ctype["end_def"];
    $js$16(0);
    var $js$17=Ctype["generalize"];
    $js$17(ty_arg);
    return ty_arg};
var
 find_printer_type=
  function(lid)
   {try
     {var $js$4=Env["lookup_value"];
      var match$1=$js$4(lid,Env["empty"]);
      var desc=match$1[2];
      try
       {var $js$5=match_printer_type(desc,"printer_type_new");
        var match$2=[0,$js$5,0]}
      catch(exn)
       {var $js$6=exn[1]=Ctype["Unify"];
        if($js$6)
         {var $js$7=match_printer_type(desc,"printer_type_old");
          var match$2=[0,$js$7,1]}
        else
         {var match$2="unknown primitive:reraise"}}
      return [0,match$2[1],match$1[1],match$2[2]]}
    catch(exn$1)
     {var $js$8=exn$1=Not_found;
      if($js$8)
       {return "unknown primitive:raise"}
      else
       {var $js$9=exn$1[1]=Ctype["Unify"];
        if($js$9)
         {return "unknown primitive:raise"}
        else
         {return "unknown primitive:reraise"}}}};
var
 install_printer=
  function(ppf,lid)
   {var match$1=find_printer_type(lid);
    var path=match$1[2];
    try
     {var v=use_debugger_symtable(eval_path,path)}
    catch(exn)
     {var $js$4=exn[1]=Symtable["Error"];
      if($js$4)
       {var match$2=exn[2];
        var $js$5=match$2;
        if($js$5==0){var v="unknown primitive:raise"}else{var exit=6}}
      else
       {var exit=6}
      switch(exit){case 6:var v="unknown primitive:reraise"}}
    var $js$6=match$1[3];
    if($js$6)
     {var
       print_function=
        function(formatter,repr){var $js$7=v;return $js$7(repr)}}
    else
     {var
       print_function=
        function(formatter,repr){var $js$7=v;return $js$7(formatter,repr)}}
    var $js$7=Printval["install_printer"];
    return $js$7(path,match$1[1],ppf,print_function)};
var
 remove_printer=
  function(lid)
   {var match$1=find_printer_type(lid);
    try
     {var $js$4=Printval["remove_printer"];return $js$4(match$1[2])}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5)
       {return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 report_error=
  function(ppf,param)
   {var $js$4=param;
    if($js$4==0)
     {var $js$5=Format["fprintf"];
      var $js$6=Dynlink["error_message"];
      var $js$7=$js$6(param[1]);
      return $js$5
              (ppf,
               [0,
                [18,
                 [1,[0,0,""]],
                 [11,"Error during code loading: ",[2,0,[17,0,[17,4,0]]]]],
                "@[Error during code loading: %s@]@."],
               $js$7)}
    else
     if($js$4==1)
      {var $js$8=Format["fprintf"];
       return $js$8
               (ppf,
                [0,
                 [18,
                  [1,[0,0,""]],
                  [11,"Unbound identifier ",[15,[17,0,[17,4,0]]]]],
                 "@[Unbound identifier %a@]@."],
                Printtyp["longident"],
                param[1])}
     else
      if($js$4==2)
       {var $js$9=Format["fprintf"];
        return $js$9
                (ppf,
                 [0,
                  [18,
                   [1,[0,0,""]],
                   [11,
                    "The debugger does not contain the code for",
                    [17,
                     [0,"@ ",1,0],
                     [15,
                      [12,
                       46,
                       [17,
                        [0,"@ ",1,0],
                        [11,
                         "Please load an implementation of ",
                         [2,0,[11," first.",[17,0,[17,4,0]]]]]]]]]]],
                  "@[The debugger does not contain the code for@ %a.@ Please load an implementation of %s first.@]@."],
                 Printtyp["longident"],
                 param[2],
                 param[1])}
      else
       if($js$4==3)
        {var $js$10=Format["fprintf"];
         return $js$10
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [15,
                     [11,
                      " has the wrong type for a printing function.",
                      [17,0,[17,4,0]]]]],
                   "@[%a has the wrong type for a printing function.@]@."],
                  Printtyp["longident"],
                  param[1])}
       else
        if($js$4==4)
         {var $js$11=Format["fprintf"];
          return $js$11
                  (ppf,
                   [0,
                    [18,
                     [1,[0,0,""]],
                     [15,
                      [11,
                       " is not currently active as a printing function.",
                       [17,0,[17,4,0]]]]],
                    "@[%a is not currently active as a printing function.@]@."],
                   Printtyp["longident"],
                   param[1])}};
module["exports"]=
{"loadfile":loadfile,
 "install_printer":install_printer,
 "remove_printer":remove_printer,
 "Error":Error,
 "report_error":report_error};
