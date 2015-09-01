// Generated CODE, PLEASE EDIT WITH CARE 

var Resource=require("./resource.js");
var Format=require("./format.js");
var My_std=require("./my_std.js");
var Glob=require("./glob.js");


var
 sources_glob=
  Glob["parse"](/* None */0,"<*.ml> or <*.mli> or <*.c> or <*.h>");

var
 analyze=
  function(f,bt)
   {switch(bt[0])
     {case 0:
       Format["fprintf"]
        (f,
         [/* Format */0,
          [/* String_literal */11,
           "Ocamlbuild knows of no rules that apply to a target named ",
           [/* Alpha */15,
            [/* String_literal */11,
             ". This can happen if you ask Ocamlbuild to build a target with the wrong extension (e.g. .opt instead of .native) or if the source files live in directories that have not been specified as include directories.",
             /* End_of_format */0]]],
          "Ocamlbuild knows of no rules that apply to a target named %a. This can happen if you ask Ocamlbuild to build a target with the wrong extension (e.g. .opt instead of .native) or if the source files live in directories that have not been specified as include directories."],
         Resource["print"],
         bt[1]);
       return /* false */0;
      case 1:
       return My_std["List"][26]
               (function(param){return analyze(f,param)},bt[1]);
      case 2:
       var r=bt[1];
       
       return Glob["eval"](sources_glob,r)
               ?(Format["fprintf"]
                  (f,
                   [/* Format */0,
                    [/* String_literal */11,
                     "Ocamlbuild cannot find or build ",
                     [/* Alpha */15,
                      [/* String_literal */11,
                       ".  A file with such a name would usually be a source file.  I suspect you have given a wrong target name to Ocamlbuild.",
                       /* End_of_format */0]]],
                    "Ocamlbuild cannot find or build %a.  A file with such a name would usually be a source file.  I suspect you have given a wrong target name to Ocamlbuild."],
                   Resource["print"],
                   r),
                 /* false */0)
               :analyze(f,bt[2]);
      case 3:return analyze(f,bt[2])
      }
    };

var
 print_backtrace=
  function(f,param)
   {switch(param[0])
     {case 0:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* Formatting_lit */17,
                  /* Force_newline */3,
                  [/* String_literal */11,
                   "- ",
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "Building ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]]]],
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
          {return print_backtrace(f,backtraces[1])}
         }
       else
        {exit=2;}
       
       switch(exit)
        {case 2:
          Format["fprintf"]
           (f,
            [/* Format */0,
             [/* Formatting_lit */17,
              /* Force_newline */3,
              [/* String_literal */11,
               "- ",
               [/* Formatting_gen */18,
                [/* Open_box */1,
                 [/* Format */0,
                  [/* String_literal */11,"<v2>",/* End_of_format */0],
                  "<v2>"]],
                [/* String_literal */11,
                 "Failed to build all of these:",
                 /* End_of_format */0]]]],
             "@\n- @[<v2>Failed to build all of these:"]);
          My_std["List"][14]
           (function(param$1){return print_backtrace(f,param$1)},backtraces);
          return Format["fprintf"]
                  (f,
                   [/* Format */0,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     /* End_of_format */0],
                    "@]"])
         }
       break;
      case 2:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* Formatting_lit */17,
                  /* Force_newline */3,
                  [/* String_literal */11,
                   "- ",
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v2>",/* End_of_format */0],
                      "<v2>"]],
                    [/* String_literal */11,
                     "Building ",
                     [/* Alpha */15,
                      [/* Char_literal */12,
                       58,
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]]]]]]],
                 "@\n- @[<v2>Building %a:%a@]"],
                Resource["print"],
                param[1],
                print_backtrace,
                param[2]);
      case 3:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* Formatting_lit */17,
                  /* Force_newline */3,
                  [/* String_literal */11,
                   "- ",
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "Failed to build the target ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]]]],
                 "@\n- @[<2>Failed to build the target %s%a@]"],
                param[1],
                print_backtrace,
                param[2])
      }
    };

var print_backtrace_analyze=function(f,bt){return analyze(f,bt)};

module["exports"]=
{"print_backtrace_analyze":print_backtrace_analyze,
 "print_backtrace":print_backtrace};

