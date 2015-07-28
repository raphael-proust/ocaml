var Resource=require("Resource");
var Format=require("Format");
var My_std=require("My_std");
var Glob=require("Glob");
var $js=Glob["parse"];
var sources_glob=$js(0,"<*.ml> or <*.mli> or <*.c> or <*.h>");
var
 analyze=
  function(f,bt)
   {var $js$1=bt;
    if($js$1==0)
     {var $js$2=Format["fprintf"];
      $js$2
       (f,
        [0,
         [11,
          "Ocamlbuild knows of no rules that apply to a target named ",
          [15,
           [11,
            ". This can happen if you ask Ocamlbuild to build a target with the wrong extension (e.g. .opt instead of .native) or if the source files live in directories that have not been specified as include directories.",
            0]]],
         "Ocamlbuild knows of no rules that apply to a target named %a. This can happen if you ask Ocamlbuild to build a target with the wrong extension (e.g. .opt instead of .native) or if the source files live in directories that have not been specified as include directories."],
        Resource["print"],
        bt[1]);
      return 0}
    else
     if($js$1==1)
      {var $js$3=My_std["List"][26];
       var $js$4=analyze(f);
       return $js$3($js$4,bt[1])}
     else
      if($js$1==2)
       {var r=bt[1];
        var $js$5=Glob["eval"];
        var $js$6=$js$5(sources_glob,r);
        if($js$6)
         {var $js$7=Format["fprintf"];
          $js$7
           (f,
            [0,
             [11,
              "Ocamlbuild cannot find or build ",
              [15,
               [11,
                ".  A file with such a name would usually be a source file.  I suspect you have given a wrong target name to Ocamlbuild.",
                0]]],
             "Ocamlbuild cannot find or build %a.  A file with such a name would usually be a source file.  I suspect you have given a wrong target name to Ocamlbuild."],
            Resource["print"],
            r);
          return 0}
        else
         {return analyze(f,bt[2])}}
      else
       if($js$1==3){return analyze(f,bt[2])}};
var
 print_backtrace=
  function(f,param)
   {var $js$1=param;
    if($js$1==0)
     {var $js$2=Format["fprintf"];
      return $js$2
              (f,
               [0,
                [17,
                 3,
                 [11,
                  "- ",
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [11,"Building ",[15,[17,0,0]]]]]],
                "@\n- @[<2>Building %a@]"],
               Resource["print"],
               param[1])}
    else
     if($js$1==1)
      {var backtraces=param[1];
       var $js$3=backtraces;
       if($js$3)
        {var $js$4=backtraces[2];
         if($js$4){var exit=2}else{return print_backtrace(f,backtraces[1])}}
       else
        {var exit=2}
       switch(exit)
        {case 2:
          var $js$5=Format["fprintf"];
          $js$5
           (f,
            [0,
             [17,
              3,
              [11,
               "- ",
               [18,
                [1,[0,[11,"<v2>",0],"<v2>"]],
                [11,"Failed to build all of these:",0]]]],
             "@\n- @[<v2>Failed to build all of these:"]);
          var $js$6=My_std["List"][14];
          var $js$7=print_backtrace(f);
          $js$6($js$7,backtraces);
          var $js$8=Format["fprintf"];
          return $js$8(f,[0,[17,0,0],"@]"])
         }}
     else
      if($js$1==2)
       {var $js$9=Format["fprintf"];
        return $js$9
                (f,
                 [0,
                  [17,
                   3,
                   [11,
                    "- ",
                    [18,
                     [1,[0,[11,"<v2>",0],"<v2>"]],
                     [11,"Building ",[15,[12,58,[15,[17,0,0]]]]]]]],
                  "@\n- @[<v2>Building %a:%a@]"],
                 Resource["print"],
                 param[1],
                 print_backtrace,
                 param[2])}
      else
       if($js$1==3)
        {var $js$10=Format["fprintf"];
         return $js$10
                 (f,
                  [0,
                   [17,
                    3,
                    [11,
                     "- ",
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,"Failed to build the target ",[2,0,[15,[17,0,0]]]]]]],
                   "@\n- @[<2>Failed to build the target %s%a@]"],
                  param[1],
                  print_backtrace,
                  param[2])}};
var print_backtrace_analyze=function(f,bt){var $js$1=analyze(f,bt);return 0};
module["exports"]=
{"print_backtrace_analyze":print_backtrace_analyze,
 "print_backtrace":print_backtrace};
