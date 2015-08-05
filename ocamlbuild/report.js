// Generated CODE, PLEASE EDIT WITH CARE 

var Resource=require("Resource");
var Format=require("Format");
var My_std=require("My_std");
var Glob=require("Glob");


var sources_glob=Glob["parse"](0,"<*.ml> or <*.mli> or <*.c> or <*.h>");

var
 analyze=
  function(f,bt)
   {switch(bt)
     {case 0:
       Format["fprintf"]
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
       return 0;
       
      case 1:return My_std["List"][26](analyze(f),bt[1]);
      case 2:
       var r=bt[1];
       
       if(Glob["eval"](sources_glob,r))
        {Format["fprintf"]
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
         return 0;
         }
       else
        {return analyze(f,bt[2]);}
       
      case 3:return analyze(f,bt[2]);
      }
    };

var
 print_backtrace=
  function(f,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
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
                param[1]);
       
      case 1:
       var backtraces=param[1];
       
       var exit;
       
       if(backtraces)
        {if(backtraces[2])
          {exit=2;}
         else
          {return print_backtrace(f,backtraces[1]);}
         }
       else
        {exit=2;}
       
       switch(exit)
        {case 2:
          Format["fprintf"]
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
          My_std["List"][14](print_backtrace(f),backtraces);
          return Format["fprintf"](f,[0,[17,0,0],"@]"]);
          
         }
       
      case 2:
       return Format["fprintf"]
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
                param[2]);
       
      case 3:
       return Format["fprintf"]
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
                param[2]);
       
      }
    };

var print_backtrace_analyze=function(f,bt){return 0;};

module["exports"]=
{"print_backtrace_analyze":print_backtrace_analyze,
 "print_backtrace":print_backtrace};

