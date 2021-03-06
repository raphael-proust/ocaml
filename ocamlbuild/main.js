// Generated CODE, PLEASE EDIT WITH CARE 

var Tools=require("./tools.js");
var Ocaml_utils=require("./ocaml_utils.js");
var Options=require("./options.js");
var Ocaml_dependencies=require("./ocaml_dependencies.js");
var Const=require("./const.js");
var Slurp=require("./slurp.js");
var Plugin=require("./plugin.js");
var Exit_codes=require("./exit_codes.js");
var Ocaml_specific=require("./ocaml_specific.js");
var Rule=require("./rule.js");
var Pervasives=require("./pervasives.js");
var Lexers=require("./lexers.js");
var Arg=require("./arg.js");
var Fda=require("./fda.js");
var Pathname=require("./pathname.js");
var Resource=require("./resource.js");
var Flags=require("./flags.js");
var Format=require("./format.js");
var Digest_cache=require("./digest_cache.js");
var Solver=require("./solver.js");
var Command=require("./command.js");
var Param_tags=require("./param_tags.js");
var Loc=require("./loc.js");
var Shell=require("./shell.js");
var Hooks=require("./hooks.js");
var Filename=require("./filename.js");
var Report=require("./report.js");
var My_std=require("./my_std.js");
var Printexc=require("./printexc.js");
var Tags=require("./tags.js");
var Configuration=require("./configuration.js");
var My_unix=require("./my_unix.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 Exit_build_error=
  CamlPrimitive["caml_set_oo_id"]([248,"Main.Exit_build_error",0]);

var
 Exit_silently=
  CamlPrimitive["caml_set_oo_id"]([248,"Main.Exit_silently",0]);

var
 clean=
  function(param)
   {Shell["rm_rf"](Options["build_dir"][1]);
    if(Options["make_links"][1])
     {var
       entry=
        Slurp["map"]
         (function(param$1,param$2,param$3){return /* true */1},
          Slurp["slurp"](Filename["current_dir_name"]));
      
      Slurp["force"](Resource["clean_up_links"](entry))}
    
    Log["finish"](/* None */0,/* () */0);
    throw Exit_silently};

var
 show_tags=
  function(param)
   {if(My_std["List"][5](Options["show_tags"][1])>0)
     {Log["eprintf"]
       ([/* Format */0,
         [/* String_literal */11,
          "Warning: the following tags do not include dynamically-generated tags, such as link, compile, pack, byte, native, c, pdf... (this list is by no means exhaustive).\n",
          /* End_of_format */0],
         "Warning: the following tags do not include dynamically-generated tags, such as link, compile, pack, byte, native, c, pdf... (this list is by no means exhaustive).\n"])}
    
    return My_std["List"][14]
            (function(path)
              {return Log["eprintf"]
                       ([/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "Tags for ",
                           [/* Caml_string */3,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             58,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String_literal */11,
                               "{. ",
                               [/* Alpha */15,
                                [/* String_literal */11,
                                 " .}",
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]]],
                         "@[<2>Tags for %S:@ {. %a .}@]"],
                        path,
                        Tags["print"],
                        Tools["tags_of_pathname"](path))},
             Options["show_tags"][1])};

var
 show_documentation=
  function(param)
   {Rule["show_documentation"](/* () */0);
    return Flags["show_documentation"](/* () */0)};

var
 builtin_useful_tags=
  Tags["of_list"]
   ([/* :: */0,
     "include",
     [/* :: */0,
      "traverse",
      [/* :: */0,
       "not_hygienic",
       [/* :: */0,
        "precious",
        [/* :: */0,
         "pack",
         [/* :: */0,
          "ocamlmklib",
          [/* :: */0,
           "native",
           [/* :: */0,
            "thread",
            [/* :: */0,
             "nopervasives",
             [/* :: */0,
              "use_menhir",
              [/* :: */0,"ocamldep",[/* :: */0,"thread",/* [] */0]]]]]]]]]]]]);

var
 proceed=
  function(param)
   {Hooks["call_hook"](/* Before_options */2);
    Options["init"](/* () */0);
    Options["include_dirs"][1]=
    My_std["List"][16](Pathname["normalize"],Options["include_dirs"][1]);
    Options["exclude_dirs"][1]=
    My_std["List"][16](Pathname["normalize"],Options["exclude_dirs"][1]);
    if(Options["must_clean"][1]){clean(/* () */0)}
    
    Hooks["call_hook"](/* After_options */3);
    var options_wd=CamlPrimitive["caml_sys_getcwd"](/* () */0);
    
    var
     first_run_for_plugin=
      Plugin["we_need_a_plugin"](/* () */0)&&!Options["just_plugin"][1];
    
    var
     target_dirs=
      My_std["List"][3]
       (/* [] */0,
        My_std["List"][16](Pathname["dirname"],Options["targets"][1]));
    
    Configuration["parse_string"]
     (/* Some */[0,Const["Source"][7]],
      '<**/*.ml> or <**/*.mli> or <**/*.mlpack> or <**/*.ml.depends>: ocaml\n<**/*.byte>: ocaml, byte, program\n<**/*.odoc>: ocaml, doc\n<**/*.native>: ocaml, native, program\n<**/*.cma>: ocaml, byte, library\n<**/*.cmxa>: ocaml, native, library\n<**/*.cmo>: ocaml, byte\n<**/*.cmi>: ocaml, byte, native\n<**/*.cmx>: ocaml, native\n<**/*.mly>: infer\n<**/.svn>|".bzr"|".hg"|".git"|"_darcs": -traverse\n');
    My_std["List"][14]
     (Configuration["parse_string"](/* Some */[0,Const["Source"][2]]),
      Options["tag_lines"][1]);
    Configuration["tag_any"](Options["tags"][1]);
    if
     (Options["recursive"][1]||
      Options["ocamlbuild_project_heuristic"](/* () */0))
     {Configuration["tag_any"]([/* :: */0,"traverse",/* [] */0])}
    
    if(Options["use_ocamlfind"][1])
     {My_std["List"][14]
       (function(pkg)
         {var tag=Param_tags["make"]("package",pkg);
          
          return Configuration["tag_any"](/* :: */[0,tag,/* [] */0])},
        Options["ocaml_pkgs"][1])}
    
    var match=Options["ocaml_syntax"][1];
    
    if(match)
     {Configuration["tag_any"]
       (/* :: */[0,Param_tags["make"]("syntax",match[1]),/* [] */0])}
    
    var newpwd=CamlPrimitive["caml_sys_getcwd"](/* () */0);
    
    CamlPrimitive["caml_sys_chdir"](Pathname["pwd"]);
    var entry_include_dirs=[0,/* [] */0];
    
    var
     entry=
      Slurp["filter"]
       (function(path,name,param$1)
         {var
           dir=
            CamlPrimitive["caml_string_equal"]
              (path,Filename["current_dir_name"])
             ?/* None */0
             :/* Some */[0,path];
          
          var path_name=Pathname["Operators"][1](path,name);
          
          if(CamlPrimitive["caml_string_equal"](name,"_tags"))
           {var
             tags_path=
              CamlPrimitive["caml_string_equal"]
                (CamlPrimitive["caml_sys_getcwd"](/* () */0),Pathname["pwd"])
               ?path_name
               :Pathname["Operators"][1](Pathname["pwd"],path_name);
            
            Configuration["parse_file"](dir,tags_path)}
          
          var tags=Tools["tags_of_pathname"](path_name);
          
          return (My_std["List"][30](name,[/* :: */0,"_oasis",/* [] */0])||
                  name["length"]>
                  0&&
                  name["charCodeAt"](0)!==
                  95)&&
                 CamlPrimitive["caml_string_notequal"]
                  (name,Options["build_dir"][1])&&
                 !My_std["List"][30](name,Options["exclude_dirs"][1])&&
                 (!(CamlPrimitive["caml_string_notequal"]
                    (path_name,Filename["current_dir_name"])&&
                   Pathname["is_directory"](path_name))||
                  (Tags["mem"]("include",tags)||
                    My_std["List"][30](path_name,Options["include_dirs"][1])
                    ?(entry_include_dirs[1]=
                      /* :: */[0,path_name,entry_include_dirs[1]],
                      /* true */1)
                    :Tags["mem"]("traverse",tags)||
                     My_std["List"][27]
                      (Pathname["is_prefix"](path_name),
                       Options["include_dirs"][1])||
                     My_std["List"][27]
                      (Pathname["is_prefix"](path_name),target_dirs))&&
                  CamlPrimitive["caml_string_notequal"]
                   (Pathname["normalize"](Options["build_dir"][1]),
                    Pathname["normalize"]
                     (Pathname["Operators"][1](Pathname["pwd"],path_name))))},
        Slurp["slurp"](Filename["current_dir_name"]));
    
    Hooks["call_hook"](/* Before_hygiene */0);
    var
     hygiene_entry=
      Slurp["map"]
       (function(path,name,param$1)
         {var
           tags=
            Tools["tags_of_pathname"](Pathname["Operators"][1](path,name));
          
          return !Tags["mem"]("not_hygienic",tags)&&
                 !Tags["mem"]("precious",tags)},
        entry);
    
    Slurp["force"](hygiene_entry);
    if(Options["hygiene"][1]&&!first_run_for_plugin)
     {Fda["inspect"](hygiene_entry)}
    
    Hooks["call_hook"](/* After_hygiene */1);
    Options["include_dirs"][1]=
    /* :: */[0,
     Pathname["current_dir_name"],
     My_std["List"][9](entry_include_dirs[1])];
    Log["dprintf"]
     (3,
      [/* Format */0,
       [/* String_literal */11,
        "include directories are:",
        [/* Formatting_lit */17,
         [/* Break */0,"@ ",1,0],
         [/* Alpha */15,/* End_of_format */0]]],
       "include directories are:@ %a"],
      My_std["print_string_list"],
      Options["include_dirs"][1]);
    Options["entry"][1]=/* Some */[0,hygiene_entry];
    Hooks["call_hook"](/* Before_rules */4);
    Ocaml_specific["init"](/* () */0);
    Hooks["call_hook"](/* After_rules */5);
    CamlPrimitive["caml_sys_chdir"](options_wd);
    Plugin["execute_plugin_if_needed"](/* () */0);
    Param_tags["init"](/* () */0);
    CamlPrimitive["caml_sys_chdir"](newpwd);
    if(Options["show_documentation"][1])
     {show_documentation(/* () */0);throw Exit_silently}
    
    var used_in_flags=Flags["get_used_tags"](/* () */0);
    
    var
     used_in_deps=
      My_std["List"][19]
       (function(acc,param$1){return Tags["union"](acc,param$1[1])},
        Tags["empty"],
        Command["list_all_deps"](/* () */0));
    
    var
     all_tags=
      Tags["union"]
       (builtin_useful_tags,Tags["union"](used_in_flags,used_in_deps));
    
    Configuration["check_tags_usage"](all_tags);
    Digest_cache["init"](/* () */0);
    Sys["catch_break"](/* true */1);
    show_tags(/* () */0);
    var
     targets=
      My_std["List"][16]
       (function(starget)
         {var starget$1=Resource["import"](starget);
          
          var target=Tools["path_and_context_of_string"](starget$1);
          
          var ext=Pathname["get_extension"](starget$1);
          
          return /* tuple */[0,target,starget$1,ext]},
        Options["targets"][1]);
    
    try
     {var
       targets$1=
        My_std["List"][16]
         (function(param$1)
           {var starget=param$1[2];
            
            Shell["mkdir_p"](Pathname["dirname"](starget));
            var target=Solver["solve_target"](starget,param$1[1]);
            
            return /* tuple */[0,target,param$1[3]]},
          targets);
      
      Command["dump_parallel_stats"](/* () */0);
      Log["finish"](/* None */0,/* () */0);
      Shell["chdir"](Pathname["pwd"]);
      var
       call=
        function(spec)
         {return My_std["sys_command"]
                  (Command["string_of_command_spec"](spec))};
      
      var
       cmds=
        My_std["List"][20]
         (function(param$1,acc)
           {var
             cmd=
              Pathname["Operators"][1](Options["build_dir"][1],param$1[1]);
            
            var
             link=
              function(x)
               {return Options["make_links"][1]
                        ?call
                          (/* S */[0,
                            /* :: */[0,
                             [/* A */1,"ln"],
                             /* :: */[0,
                              [/* A */1,"-sf"],
                              /* :: */[0,
                               /* P */[2,x],
                               /* :: */[0,
                                /* A */[1,Pathname["current_dir_name"]],
                                /* [] */0]]]]])
                        :0};
            
            var exit;
            
            switch(param$1[2])
             {case "byte":exit=24;break;
              case "html":link(Pathname["dirname"](cmd));return acc;
              case "native":exit=24;break;
              case "top":exit=24;break;
              default:exit=25;}
            
            switch(exit)
             {case 25:
               if(Options["program_to_execute"][1])
                {Format["eprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Warning: Won't execute ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " whose extension is neither .byte nor .native",
                       /* End_of_format */0]]],
                    "Warning: Won't execute %s whose extension is neither .byte nor .native"],
                   cmd)}
               
               return acc;
              case 24:link(cmd);return /* :: */[0,cmd,acc]
              }
            },
          targets$1,
          /* [] */0);
      
      if(Options["program_to_execute"][1])
       {var match$1=My_std["List"][9](cmds);
        
        if(match$1)
         {var cmd=match$1[1];
          
          if(match$1[2]!==/* [] */0)
           {Log["dprintf"]
             (0,
              [/* Format */0,
               [/* String_literal */11,
                "Warning: Using -- only run the last target",
                /* End_of_format */0],
               "Warning: Using -- only run the last target"])}
          
          var
           cmd_spec=
            /* S */[0,
             /* :: */[0,
              /* P */[2,cmd],
              /* :: */[0,
               Command["atomize"](Options["program_args"][1]),
               /* [] */0]]];
          
          Log["dprintf"]
           (3,
            [/* Format */0,
             [/* String_literal */11,
              "Running the user command:",
              [/* Formatting_lit */17,
               [/* Break */0,"@ ",1,0],
               [/* Alpha */15,/* End_of_format */0]]],
             "Running the user command:@ %a"],
            Pathname["print"],
            cmd);
          throw [0,My_std["Exit_with_code"],call(cmd_spec)]}
        else
         {throw [0,My_std["Exit_usage"],"Using -- requires one target"]}
        }
      else
       {return /* () */0}
      }
    catch(exn)
     {if(exn[1]===Ocaml_dependencies["Circular_dependencies"])
       {throw [0,
               Exit_build_error,
               My_std["sbprintf"]
                ([/* Format */0,
                  [/* Formatting_gen */18,
                   [/* Open_box */1,
                    [/* Format */0,
                     [/* String_literal */11,"<2>",/* End_of_format */0],
                     "<2>"]],
                   [/* String_literal */11,
                    "Circular dependencies: ",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " already seen in",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]]]]]]]],
                  "@[<2>Circular dependencies: %S already seen in@ %a@]@."],
                 exn[3],
                 Tools["pp_l"],
                 exn[2])]}
      else
       {throw exn}
      }
    };

var
 main=
  function(param)
   {var
     exit=
      function(rc)
       {Log["finish"]
         (/* Some */[0,rc!==0?/* Error */106380200:/* Success */94326179],
          /* () */0);
        return Pervasives["exit"](rc)};
    
    try
     {return proceed(/* () */0)}
    catch(e)
     {if(Options["catch_errors"][1])
       {try
         {throw e}
        catch(e$1)
         {if(e$1===My_std["Exit_OK"])
           {return exit(Exit_codes["rc_ok"])}
          else
           {if(e$1===Fda["Exit_hygiene_failed"])
             {Log["eprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "Exiting due to hygiene violations.",
                  /* End_of_format */0],
                 "Exiting due to hygiene violations."]);
              return exit(Exit_codes["rc_hygiene"])}
            else
             {if(e$1[1]===My_std["Exit_usage"])
               {Log["eprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Usage:",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,46,/* End_of_format */0]]]],
                   "Usage:@ %s."],
                  e$1[2]);
                return exit(Exit_codes["rc_usage"])}
              else
               {if(e$1[1]===My_std["Exit_system_error"])
                 {Log["eprintf"]
                   ([/* Format */0,
                     [/* String_literal */11,
                      "System error:",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,46,/* End_of_format */0]]]],
                     "System error:@ %s."],
                    e$1[2]);
                  return exit(Exit_codes["rc_system_error"])}
                else
                 {if(e$1[1]===My_std["Exit_with_code"])
                   {return exit(e$1[2])}
                  else
                   {if(e$1===Exit_silently)
                     {Log["finish"]
                       ([/* Some */0,/* Quiet */-249890668],/* () */0);
                      return Pervasives["exit"](Exit_codes["rc_ok"])}
                    else
                     {if(e$1[1]===My_std["Exit_silently_with_code"])
                       {Log["finish"]
                         ([/* Some */0,/* Quiet */-249890668],/* () */0);
                        return Pervasives["exit"](e$1[2])}
                      else
                       {if(e$1[1]===Solver["Failed"])
                         {var backtrace=e$1[2];
                          
                          Log["raw_dprintf"]
                           (-1,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<v0>",/* End_of_format */0],
                                "<v0>"]],
                              [/* Formatting_gen */18,
                               [/* Open_box */1,
                                [/* Format */0,
                                 [/* String_literal */11,"<2>",/* End_of_format */0],
                                 "<2>"]],
                               [/* String_literal */11,
                                "Solver failed:",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   [/* Formatting_lit */17,
                                    /* Flush_newline */4,
                                    /* End_of_format */0]]]]]]],
                             "@[<v0>@[<2>Solver failed:@ %a@]@."],
                            Report["print_backtrace_analyze"],
                            backtrace);
                          Log["raw_dprintf"]
                           (1,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<v2>",/* End_of_format */0],
                                "<v2>"]],
                              [/* String_literal */11,
                               "Backtrace:",
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  [/* Formatting_lit */17,
                                   /* Flush_newline */4,
                                   /* End_of_format */0]]]]]],
                             "@[<v2>Backtrace:%a@]@]@."],
                            Report["print_backtrace"],
                            backtrace);
                          return exit(Exit_codes["rc_solver_failed"])}
                        else
                         {if(e$1[1]===CamlPrimitive["caml_global_data"]["Failure"])
                           {Log["eprintf"]
                             ([/* Format */0,
                               [/* String_literal */11,
                                "Failure:",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,46,/* End_of_format */0]]]],
                               "Failure:@ %s."],
                              e$1[2]);
                            return exit(Exit_codes["rc_failure"])}
                          else
                           {if(e$1[1]===Solver["Circular"])
                             {Log["eprintf"]
                               ([/* Format */0,
                                 [/* String_literal */11,
                                  "Circular build detected",
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Char_literal */12,
                                    40,
                                    [/* Alpha */15,
                                     [/* String_literal */11,
                                      " already seen in ",
                                      [/* Alpha */15,
                                       [/* Char_literal */12,41,/* End_of_format */0]]]]]]],
                                 "Circular build detected@ (%a already seen in %a)"],
                                Resource["print"],
                                e$1[2],
                                My_std["List"][1](Resource["print"]),
                                e$1[3]);
                              return exit(Exit_codes["rc_circularity"])}
                            else
                             {if
                               (e$1[1]===
                                CamlPrimitive["caml_global_data"]["Invalid_argument"])
                               {Log["eprintf"]
                                 ([/* Format */0,
                                   [/* String_literal */11,
                                    "INTERNAL ERROR: Invalid argument ",
                                    [/* String */2,
                                     /* No_padding */0,
                                     [/* String_literal */11,
                                      "\nThis is likely to be a bug, please report this to the ocamlbuild\ndevelopers.",
                                      /* End_of_format */0]]],
                                   "INTERNAL ERROR: Invalid argument %s\nThis is likely to be a bug, please report this to the ocamlbuild\ndevelopers."],
                                  e$1[2]);
                                return exit(Exit_codes["rc_invalid_argument"])}
                              else
                               {if(e$1[1]===Ocaml_utils["Ocamldep_error"])
                                 {Log["eprintf"]
                                   ([/* Format */0,
                                     [/* String_literal */11,
                                      "Ocamldep error: ",
                                      [/* String */2,/* No_padding */0,/* End_of_format */0]],
                                     "Ocamldep error: %s"],
                                    e$1[2]);
                                  return exit(Exit_codes["rc_ocamldep_error"])}
                                else
                                 {if(e$1[1]===Lexers["Error"])
                                   {var match=e$1[2];
                                    
                                    Log["eprintf"]
                                     ([/* Format */0,
                                       [/* Alpha */15,
                                        [/* String_literal */11,
                                         "Lexing error: ",
                                         [/* String */2,
                                          /* No_padding */0,
                                          [/* Char_literal */12,46,/* End_of_format */0]]]],
                                       "%aLexing error: %s."],
                                      Loc["print_loc"],
                                      match[2],
                                      match[1]);
                                    return exit(Exit_codes["rc_lexing_error"])}
                                  else
                                   {if(e$1[1]===Arg["Bad"])
                                     {Log["eprintf"]
                                       ([/* Format */0,
                                         [/* String */2,/* No_padding */0,/* End_of_format */0],
                                         "%s"],
                                        e$1[2]);
                                      return exit(Exit_codes["rc_usage"])}
                                    else
                                     {if(e$1[1]===Exit_build_error)
                                       {Log["eprintf"]
                                         ([/* Format */0,
                                           [/* String */2,/* No_padding */0,/* End_of_format */0],
                                           "%s"],
                                          e$1[2]);
                                        return exit(Exit_codes["rc_build_error"])}
                                      else
                                       {if(e$1[1]===Arg["Help"])
                                         {Log["eprintf"]
                                           ([/* Format */0,
                                             [/* String */2,/* No_padding */0,/* End_of_format */0],
                                             "%s"],
                                            e$1[2]);
                                          return exit(Exit_codes["rc_ok"])}
                                        else
                                         {try
                                           {Log["eprintf"]
                                             ([/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                                              My_unix["report_error"],
                                              e$1);
                                            return exit(100)}
                                          catch(e$2)
                                           {Log["eprintf"]
                                             ([/* Format */0,
                                               [/* String_literal */11,
                                                "Exception",
                                                [/* Formatting_lit */17,
                                                 [/* Break */0,"@ ",1,0],
                                                 [/* String */2,
                                                  /* No_padding */0,
                                                  [/* Char_literal */12,46,/* End_of_format */0]]]],
                                               "Exception@ %s."],
                                              Printexc["to_string"](e$2));
                                            return exit(100)}
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      else
       {throw e}
      }
    };

module["exports"]={"main":main};

