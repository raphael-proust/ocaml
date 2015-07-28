var Printtyp=require("Printtyp");
var Pervasives=require("Pervasives");
var Format=require("Format");
var Oprint=require("Oprint");
var Genprintval=require("Genprintval");
var Hashtbl=require("Hashtbl");
var Symtable=require("Symtable");
var Debugcom=require("Debugcom");
var $js=Hashtbl["create"];
var named_values=$js(0,29);
var next_name=[0,1];
var
 reset_named_values=
  function(param)
   {var $js$1=Hashtbl["clear"];$js$1(named_values);return next_name[1]=1,0};
var
 name_value=
  function(v,ty)
   {var name=next_name[1];
    next_name[0]++;
    var $js$1=Hashtbl["add"];
    $js$1(named_values,name,[0,v,ty]);
    return name};
var
 find_named_value=
  function(name){var $js$1=Hashtbl["find"];return $js$1(named_values,name)};
var
 check_depth=
  function(ppf,depth,obj,ty)
   {var $js$1=depth<=0;
    if($js$1)
     {var n=name_value(obj,ty);
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["string_of_int"];
      var $js$4=$js$3(n);
      var $js$5=$js$2("$",$js$4);
      var $js$6=[12,$js$5];
      return [0,$js$6]}
    else
     {return 0}};
var Error="unknown primitive:caml_set_oo_id";
var
 eval_path=
  function(env,param)
   {var $js$1=param;
    if($js$1==0)
     {try
       {var $js$2=Debugcom["Remote_value"][10];
        var $js$3=Symtable["get_global_position"];
        var $js$4=$js$3(param[1]);
        return $js$2($js$4)}
      catch(exn)
       {var $js$5=exn[1]=Symtable["Error"];
        if($js$5)
         {return "unknown primitive:raise"}
        else
         {return "unknown primitive:reraise"}}}
    else
     if($js$1==1)
      {var v=eval_path(env,param[1]);
       var $js$6=Debugcom["Remote_value"][2];
       var $js$7=$js$6(v);
       var $js$8=!$js$7;
       if($js$8)
        {return "unknown primitive:raise"}
       else
        {var $js$9=Debugcom["Remote_value"][5];return $js$9(v,param[3])}}
     else
      if($js$1==2){return "unknown primitive:raise"}};
var same_value=Debugcom["Remote_value"][6];
var EvalPath=[0,Error,eval_path,same_value];
var $js$1=Genprintval["Make"];
var let=Debugcom["Remote_value"];
var $js$2=[0,let[1],let[2],let[3],let[4],let[5]];
var $js$3=$js$1($js$2);
var Printer=$js$3([0,EvalPath[2],EvalPath[1],EvalPath[3]]);
var
 install_printer=
  function(path,ty,ppf,fn)
   {var $js$4=Printer[1];
    return $js$4
            (path,
             ty,
             function(ppf$1,remote_val)
              {try
                {var $js$5=Debugcom["Remote_value"][1];
                 var $js$6=$js$5(remote_val);
                 var $js$7=$js$6;
                 return fn(ppf$1,$js$7)}
               catch(exn)
                {var $js$8=exn=Debugcom["Marshalling_error"];
                 if($js$8)
                  {var $js$9=Format["fprintf"];
                   return $js$9
                           (ppf$1,
                            [0,
                             [11,"<cannot fetch remote object>",0],
                             "<cannot fetch remote object>"])}
                 else
                  {return "unknown primitive:reraise"}}})};
var remove_printer=Printer[4];
var max_printer_depth=[0,20];
var max_printer_steps=[0,300];
var
 print_exception=
  function(ppf,obj)
   {var $js$4=Printer[5];
    var t=$js$4(obj);
    var $js$5=Oprint["out_value"][1];
    return $js$5(ppf,t)};
var
 print_value=
  function(max_depth,env,obj,ppf,ty)
   {var $js$4=Printer[6];
    var $js$5=check_depth(ppf);
    var t=$js$4(max_printer_steps[1],max_depth,$js$5,env,obj,ty);
    var $js$6=Oprint["out_value"][1];
    return $js$6(ppf,t)};
var
 print_named_value=
  function(max_depth,exp,env,obj,ppf,ty)
   {var
     print_value_name=
      function(ppf$1,param)
       {var $js$4=param;
        if(typeof $js$4=="number")
         {"unknown block:param/1268"}
        else
         {var $js$5=$js$4[0];
          if($js$5==0)
           {var $js$6=Printtyp["longident"];return $js$6(ppf$1,param[1])}
          else
           if($js$5==1)
            {var $js$7=Format["fprintf"];
             return $js$7(ppf$1,[0,[12,36,[4,3,0,0,0]],"$%i"],param[1])}
           else
            {var exit=2}}
        switch(exit)
         {case 2:
           var n=name_value(obj,ty);
           var $js$8=Format["fprintf"];
           return $js$8(ppf$1,[0,[12,36,[4,3,0,0,0]],"$%i"],n)
          }};
    var $js$4=Printtyp["reset_and_mark_loops"];
    $js$4(ty);
    var $js$5=Format["fprintf"];
    var $js$6=print_value(max_depth,env,obj);
    return $js$5
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [15,
                [12,
                 58,
                 [17,
                  [0,"@ ",1,0],
                  [15,
                   [17,
                    [0,"@ ",1,0],
                    [12,61,[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]]]]],
              "@[<2>%a:@ %a@ =@ %a@]@."],
             print_value_name,
             exp,
             Printtyp["type_expr"],
             ty,
             $js$6,
             ty)};
module["exports"]=
{"max_printer_depth":max_printer_depth,
 "max_printer_steps":max_printer_steps,
 "print_exception":print_exception,
 "print_named_value":print_named_value,
 "reset_named_values":reset_named_values,
 "find_named_value":find_named_value,
 "install_printer":install_printer,
 "remove_printer":remove_printer};
