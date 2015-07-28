var Const=require("Const");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Lexing=require("Lexing");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Findlib_error="unknown primitive:caml_set_oo_id";
var error=function(x){return "unknown primitive:raise"};
var
 string_of_error=
  function(param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){return "Cannot run Ocamlfind."}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=Printf["sprintf"];
        return $js$2
                ([0,
                  [11,
                   'Ocamlfind returned "',
                   [2,
                    0,
                    [11,
                     '" as a dependency for package "',
                     [2,0,[11,'" but does not know this dependency.',0]]]]],
                  'Ocamlfind returned "%s" as a dependency for package "%s" but does not know this dependency.'],
                 param[2],
                 param[1])}
      else
       if($js$1==1)
        {var $js$3=Printf["sprintf"];
         return $js$3
                 ([0,
                   [11,'Findlib package not found: "',[2,0,[11,'".',0]]],
                   'Findlib package not found: "%s".'],
                  param[1])}
       else
        if($js$1==2)
         {var $js$4=Printf["sprintf"];
          return $js$4
                  ([0,
                    [11,
                     'Cannot parse Ocamlfind query for package "',
                     [2,0,[11,'": ',[2,0,0]]]],
                    'Cannot parse Ocamlfind query for package "%s": %s'],
                   param[1],
                   param[2])}}};
var
 report_error=
  function(e)
   {var $js=Pervasives["prerr_endline"];
    var $js$1=string_of_error(e);
    $js($js$1);
    var $js$2=Pervasives["exit"];
    return $js$2(2)};
var ocamlfind="ocamlfind";
var $js=Hashtbl["create"];
var packages=$js(0,42);
var
 run_and_parse=
  function(lexer,command)
   {var $js$1=Printf["ksprintf"];
    return $js$1
            (function(command$1)
              {var $js$2=My_std["&"];
               var $js$3=My_std["&"];
               var $js$4=My_unix["run_and_read"];
               var $js$5=$js$4(command$1);
               var $js$6=$js$3(Lexing["from_string"],$js$5);
               return $js$2(lexer,$js$6)},
             command)};
var
 run_and_read=
  function(command)
   {var $js$1=Printf["ksprintf"];
    return $js$1(My_unix["run_and_read"],command)};
var
 query=
  function(name)
   {try
     {var $js$1=Hashtbl["find"];return $js$1(packages,name)}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2)
       {try
         {var $js$3=Lexers["ocamlfind_query"];
          var $js$4=$js$3(Const["Source"][4]);
          var
           match=
            run_and_parse
             ($js$4,
              [0,
               [2,0,[11," query -l -predicates byte ",[2,0,0]]],
               "%s query -l -predicates byte %s"],
              ocamlfind,
              name);
          var n=match[1];
          var $js$5=Lexers["trim_blanks"];
          var $js$6=$js$5(Const["Source"][4]);
          var
           a_native=
            run_and_parse
             ($js$6,
              [0,
               [2,0,[11," query -a-format -predicates native ",[2,0,0]]],
               "%s query -a-format -predicates native %s"],
              ocamlfind,
              name);
          var $js$7=Lexers["blank_sep_strings"];
          var $js$8=$js$7(Const["Source"][4]);
          var
           deps=
            run_and_parse
             ($js$8,
              [0,
               [2,0,[11," query -r -p-format ",[2,0,0]]],
               "%s query -r -p-format %s"],
              ocamlfind,
              name);
          var $js$9=My_std["List"][33];
          var
           $js$10=
            function(prim,prim$1){return "unknown primitive:caml_notequal"};
          var $js$11=$js$10(n);
          var deps$1=$js$9($js$11,deps);
          try
           {var $js$12=My_std["List"][16];var deps$2=$js$12(query,deps$1)}
          catch(exn$1)
           {var $js$13=exn$1[1]=Findlib_error;
            if($js$13)
             {var match$1=exn$1[2];
              var $js$14=match$1;
              if(typeof $js$14=="number")
               {"unknown block:match/1868"}
              else
               {var $js$15=$js$14[0];
                if($js$15==1)
                 {var deps$2=error([0,name,match$1[1]])}
                else
                 {var exit=32}}}
            else
             {var exit=32}
            switch(exit){case 32:var deps$2="unknown primitive:reraise"}}
          var
           package=
            [0,n,match[2],match[3],match[4],a_native,match[5],match[6],deps$2];
          var $js$16=Hashtbl["add"];
          $js$16(packages,n,package);
          return package}
        catch(exn$2)
         {var $js$17=exn$2[1]=Failure;
          if($js$17)
           {return error(0)}
          else
           {var $js$18=exn$2[1]=Lexers["Error"];
            if($js$18)
             {return error([2,name,exn$2[2][1]])}
            else
             {return "unknown primitive:reraise"}}}}
      else
       {return "unknown primitive:reraise"}}};
var
 split_nl=
  function(s)
   {var x=[0,0];
    var
     go=
      function(s$1)
       {var $js$1=My_std["String"][29];
        var pos=$js$1(s$1,10);
        var $js$2=My_std["String"][3];
        var $js$3=$js$2(s$1,pos);
        var $js$4=[0,$js$3,x[1]];
        x[1]=$js$4,0;
        var $js$5=My_std["String"][4];
        var $js$6=$js$5(s$1,pos+1);
        return go($js$6)};
    try
     {return go(s)}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){return x[1]}else{return "unknown primitive:reraise"}}};
var
 before_space=
  function(s)
   {try
     {var $js$1=My_std["String"][3];
      var $js$2=My_std["String"][29];
      var $js$3=$js$2(s,32);
      return $js$1(s,$js$3)}
    catch(exn)
     {var $js$4=exn=Not_found;
      if($js$4){return s}else{return "unknown primitive:reraise"}}};
var
 list=
  function(param)
   {var $js$1=My_std["List"][16];
    var $js$2=My_std["&"];
    var $js$3=run_and_read([0,[2,0,[11," list",0]],"%s list"],ocamlfind);
    var $js$4=$js$2(split_nl,$js$3);
    return $js$1(before_space,$js$4)};
var
 topological_closure=
  function(l)
   {var
     add=
      function(l$1,x)
       {var $js$1=My_std["List"][30];
        var $js$2=$js$1(x,l$1);
        if($js$2){return l$1}else{return [0,x,l$1]}};
    var $js$1=My_std["List"][19];
    var
     l$1=
      $js$1
       (function(acc,p)
         {var $js$2=My_std["List"][19];
          var $js$3=$js$2(add,acc,p[8]);
          return add($js$3,p)},
        0,
        l);
    var $js$2=My_std["List"][9];
    return $js$2(l$1)};
var $js$1=My_std["Set"][1];
var let=My_std["String"];
var $js$2=[0,let[40],let[1]];
var SSet=$js$1($js$2);
var
 add_atom=
  function(a,l)
   {var $js$3=a;
    if(typeof $js$3=="number")
     {"unknown block:a/1750"}
    else
     {var $js$4=$js$3[0];
      if($js$4==1)
       {var $js$5=a[1];if($js$5==""){return l}else{var exit=17}}
      else
       {var exit=17}}
    switch(exit){case 17:return [0,a,l]}};
var
 compile_flags=
  function(l)
   {var pkgs=topological_closure(l);
    var $js$3=My_std["List"][19];
    var
     locations=
      $js$3
       (function(acc,p){var $js$4=SSet[4];return $js$4(p[7],acc)},
        SSet[1],
        pkgs);
    var flags=0;
    var $js$4=My_std["List"][19];
    var $js$5=SSet[20];
    var $js$6=$js$5(locations);
    var
     flags$1=
      $js$4
       (function(acc,l$1)
         {var $js$7=add_atom([1,"-I"],acc);return add_atom([2,l$1],$js$7)},
        flags,
        $js$6);
    var $js$7=My_std["List"][9];
    var $js$8=$js$7(flags$1);
    return [0,$js$8]};
var compile_flags_byte=compile_flags;
var compile_flags_native=compile_flags;
var
 link_flags=
  function(f,l)
   {var pkgs=topological_closure(l);
    var $js$3=My_std["List"][19];
    var
     locations=
      $js$3
       (function(acc,p){var $js$4=SSet[4];return $js$4(p[7],acc)},
        SSet[1],
        pkgs);
    var flags=0;
    var $js$4=My_std["List"][19];
    var $js$5=SSet[20];
    var $js$6=$js$5(locations);
    var
     flags$1=
      $js$4
       (function(acc,l$1)
         {var $js$7=add_atom([1,"-I"],acc);return add_atom([2,l$1],$js$7)},
        flags,
        $js$6);
    var $js$7=My_std["List"][19];
    var
     flags$2=
      $js$7(function(acc,x){return add_atom([1,x[6]],acc)},flags$1,pkgs);
    var $js$8=My_std["List"][19];
    var
     flags$3=
      $js$8
       (function(acc,x)
         {var $js$9=f(x);var $js$10=[1,$js$9];return add_atom($js$10,acc)},
        flags$2,
        pkgs);
    var $js$9=My_std["List"][9];
    var $js$10=$js$9(flags$3);
    return [0,$js$10]};
var link_flags_byte=link_flags(function(x){return x[4]});
var link_flags_native=link_flags(function(x){return x[5]});
module["exports"]=
{"Findlib_error":Findlib_error,
 "string_of_error":string_of_error,
 "report_error":report_error,
 "query":query,
 "list":list,
 "topological_closure":topological_closure,
 "compile_flags_byte":compile_flags_byte,
 "compile_flags_native":compile_flags_native,
 "link_flags_byte":link_flags_byte,
 "link_flags_native":link_flags_native};
