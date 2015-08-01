var Ocaml_utils=require("Ocaml_utils");
var Tools=require("Tools");
var Options=require("Options");
var Ocaml_dependencies=require("Ocaml_dependencies");
var Const=require("Const");
var Slurp=require("Slurp");
var Plugin=require("Plugin");
var Exit_codes=require("Exit_codes");
var Ocaml_specific=require("Ocaml_specific");
var Pervasives=require("Pervasives");
var Rule=require("Rule");
var Lexers=require("Lexers");
var Arg=require("Arg");
var Fda=require("Fda");
var Pathname=require("Pathname");
var Resource=require("Resource");
var Format=require("Format");
var Digest_cache=require("Digest_cache");
var Flags=require("Flags");
var Solver=require("Solver");
var Loc=require("Loc");
var Command=require("Command");
var Param_tags=require("Param_tags");
var Shell=require("Shell");
var Hooks=require("Hooks");
var Filename=require("Filename");
var Report=require("Report");
var My_std=require("My_std");
var Printexc=require("Printexc");
var My_unix=require("My_unix");
var Configuration=require("Configuration");
var Tags=require("Tags");
var Log=require("Log");
var Sys=require("Sys");

var Exit_build_error="unknown primitive:caml_set_oo_id";

var Exit_silently="unknown primitive:caml_set_oo_id";

var
 clean=
  function(param)
   {Shell["rm_rf"](Options["build_dir"][1]);
    if(Options["make_links"][1])
     {var
       entry=
        Slurp["map"]
         (function(param$1,param$2,param$3){return 1;},
          Slurp["slurp"](Filename["current_dir_name"]));
      
      Slurp["force"](Resource["clean_up_links"](entry))}
    else
     {}
    
    Log["finish"](0,0);
    throw Exit_silently;
    };

var
 show_tags=
  function(param)
   {if(My_std["List"][5](Options["show_tags"][1])>0)
     {Log["eprintf"]
       ([0,
         [11,
          "Warning: the following tags do not include dynamically-generated tags, such as link, compile, pack, byte, native, c, pdf... (this list is by no means exhaustive).\n",
          0],
         "Warning: the following tags do not include dynamically-generated tags, such as link, compile, pack, byte, native, c, pdf... (this list is by no means exhaustive).\n"])}
    else
     {}
    
    return My_std["List"][14]
            (function(path)
              {return Log["eprintf"]
                       ([0,
                         [18,
                          [1,[0,[11,"<2>",0],"<2>"]],
                          [11,
                           "Tags for ",
                           [3,
                            0,
                            [12,
                             58,
                             [17,[0,"@ ",1,0],[11,"{. ",[15,[11," .}",[17,0,0]]]]]]]]],
                         "@[<2>Tags for %S:@ {. %a .}@]"],
                        path,
                        Tags["print"],
                        Tools["tags_of_pathname"](path));
               },
             Options["show_tags"][1]);
    };

var
 show_documentation=
  function(param)
   {Rule["show_documentation"](0);return Flags["show_documentation"](0);};

var
 builtin_useful_tags=
  Tags["of_list"]
   ([0,
     "include",
     [0,
      "traverse",
      [0,
       "not_hygienic",
       [0,
        "precious",
        [0,
         "pack",
         [0,
          "ocamlmklib",
          [0,
           "native",
           [0,
            "thread",
            [0,"nopervasives",[0,"use_menhir",[0,"ocamldep",[0,"thread",0]]]]]]]]]]]]);

var
 proceed=
  function(param)
   {Hooks["call_hook"](2);
    Options["init"](0);
    Options["include_dirs"][1]=
    My_std["List"][16](Pathname["normalize"],Options["include_dirs"][1]),
    0;
    Options["exclude_dirs"][1]=
    My_std["List"][16](Pathname["normalize"],Options["exclude_dirs"][1]),
    0;
    if(Options["must_clean"][1]){clean(0)}else{}
    
    Hooks["call_hook"](3);
    var options_wd="unknown primitive:caml_sys_getcwd";
    
    var
     first_run_for_plugin=
      Plugin["we_need_a_plugin"](0)&&!Options["just_plugin"][1];
    
    var
     target_dirs=
      My_std["List"][3]
       (0,My_std["List"][16](Pathname["dirname"],Options["targets"][1]));
    
    Configuration["parse_string"]
     ([0,Const["Source"][7]],
      '<**/*.ml> or <**/*.mli> or <**/*.mlpack> or <**/*.ml.depends>: ocaml\n<**/*.byte>: ocaml, byte, program\n<**/*.odoc>: ocaml, doc\n<**/*.native>: ocaml, native, program\n<**/*.cma>: ocaml, byte, library\n<**/*.cmxa>: ocaml, native, library\n<**/*.cmo>: ocaml, byte\n<**/*.cmi>: ocaml, byte, native\n<**/*.cmx>: ocaml, native\n<**/*.mly>: infer\n<**/.svn>|".bzr"|".hg"|".git"|"_darcs": -traverse\n');
    My_std["List"][14]
     (Configuration["parse_string"]([0,Const["Source"][2]]),
      Options["tag_lines"][1]);
    Configuration["tag_any"](Options["tags"][1]);
    if(Options["recursive"][1]||Options["ocamlbuild_project_heuristic"](0))
     {Configuration["tag_any"]([0,"traverse",0])}
    else
     {}
    
    if(Options["use_ocamlfind"][1])
     {My_std["List"][14]
       (function(pkg)
         {var tag=Param_tags["make"]("package",pkg);
          
          return Configuration["tag_any"]([0,tag,0]);
          },
        Options["ocaml_pkgs"][1])}
    else
     {}
    
    var match=Options["ocaml_syntax"][1];
    
    if(match)
     {Configuration["tag_any"]([0,Param_tags["make"]("syntax",match[1]),0])}
    else
     {}
    
    var newpwd="unknown primitive:caml_sys_getcwd";
    
    "unknown primitive:caml_sys_chdir";
    var entry_include_dirs=[0,0];
    
    var
     entry=
      Slurp["filter"]
       (function(path,name,param$1)
         {if("unknown primitive:caml_string_equal")
           {var dir=0;}
          else
           {var dir=[0,path];}
          
          var path_name=Pathname["Operators"][1](path,name);
          
          if("unknown primitive:caml_string_equal")
           {if("unknown primitive:caml_string_equal")
             {var tags_path=path_name;}
            else
             {var
               tags_path=
                Pathname["Operators"][1](Pathname["pwd"],path_name);
              }
            
            }
          else
           {}
          
          var tags=Tools["tags_of_pathname"](path_name);
          
          return (My_std["List"][30](name,[0,"_oasis",0])||
                  name["length"]>
                  0&&
                  name[0]!=
                  95)&&
                 "unknown primitive:caml_string_notequal"&&
                 !My_std["List"][30](name,Options["exclude_dirs"][1])&&
                 (!("unknown primitive:caml_string_notequal"&&
                   Pathname["is_directory"](path_name))||
                  (Tags["mem"]("include",tags)||
                    My_std["List"][30](path_name,Options["include_dirs"][1])
                    ?(entry_include_dirs[1]=
                      [0,path_name,entry_include_dirs[1]],
                      0,
                      1)
                    :Tags["mem"]("traverse",tags)||
                     My_std["List"][27]
                      (Pathname["is_prefix"](path_name),
                       Options["include_dirs"][1])||
                     My_std["List"][27]
                      (Pathname["is_prefix"](path_name),target_dirs))&&
                  "unknown primitive:caml_string_notequal");
          },
        Slurp["slurp"](Filename["current_dir_name"]));
    
    Hooks["call_hook"](0);
    var
     hygiene_entry=
      Slurp["map"]
       (function(path,name,param$1)
         {var
           tags=
            Tools["tags_of_pathname"](Pathname["Operators"][1](path,name));
          
          return !Tags["mem"]("not_hygienic",tags)&&
                 !Tags["mem"]("precious",tags);
          },
        entry);
    
    Slurp["force"](hygiene_entry);
    if(Options["hygiene"][1]&&!first_run_for_plugin)
     {Fda["inspect"](hygiene_entry)}
    else
     {}
    
    Hooks["call_hook"](1);
    Options["include_dirs"][1]=
    [0,Pathname["current_dir_name"],My_std["List"][9](entry_include_dirs[1])],
    0;
    Log["dprintf"]
     (3,
      [0,
       [11,"include directories are:",[17,[0,"@ ",1,0],[15,0]]],
       "include directories are:@ %a"],
      My_std["print_string_list"],
      Options["include_dirs"][1]);
    Options["entry"][1]=[0,hygiene_entry],0;
    Hooks["call_hook"](4);
    Ocaml_specific["init"](0);
    Hooks["call_hook"](5);
    "unknown primitive:caml_sys_chdir";
    Plugin["execute_plugin_if_needed"](0);
    Param_tags["init"](0);
    "unknown primitive:caml_sys_chdir";
    if(Options["show_documentation"][1])
     {show_documentation(0);throw Exit_silently;}
    else
     {}
    
    var used_in_flags=Flags["get_used_tags"](0);
    
    var
     used_in_deps=
      My_std["List"][19]
       (function(acc,param$1){return Tags["union"](acc,param$1[1]);},
        Tags["empty"],
        Command["list_all_deps"](0));
    
    var
     all_tags=
      Tags["union"]
       (builtin_useful_tags,Tags["union"](used_in_flags,used_in_deps));
    
    Configuration["check_tags_usage"](all_tags);
    Digest_cache["init"](0);
    Sys["catch_break"](1);
    show_tags(0);
    var
     targets=
      My_std["List"][16]
       (function(starget)
         {var starget$1=Resource["import"](starget);
          
          var target=Tools["path_and_context_of_string"](starget$1);
          
          var ext=Pathname["get_extension"](starget$1);
          
          return [0,target,starget$1,ext];
          },
        Options["targets"][1]);
    
    try
     {var
       targets$1=
        My_std["List"][16]
         (function(param$1)
           {var starget=param$1[2];
            
            Shell["mkdir_p"](Pathname["dirname"](starget));
            var target=Solver["solve_target"](starget,param$1[1]);
            
            return [0,target,param$1[3]];
            },
          targets);
      
      Command["dump_parallel_stats"](0);
      Log["finish"](0,0);
      Shell["chdir"](Pathname["pwd"]);
      var
       call=
        function(spec)
         {return My_std["sys_command"]
                  (Command["string_of_command_spec"](spec));
          };
      
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
               {if(Options["make_links"][1]){return 0;}else{return 0;}};
            
            switch(param$1[2])
             {case "byte":var exit=24;
              case "html":link(Pathname["dirname"](cmd));return acc;
              case "native":var exit=24;
              case "top":var exit=24;
              default:var exit=25;}
            
            switch(exit)
             {case 25:
               if(Options["program_to_execute"][1])
                {Format["eprintf"]
                  ([0,
                    [11,
                     "Warning: Won't execute ",
                     [2,0,[11," whose extension is neither .byte nor .native",0]]],
                    "Warning: Won't execute %s whose extension is neither .byte nor .native"],
                   cmd)}
               else
                {}
               
               return acc;
               
              case 24:link(cmd);return [0,cmd,acc];
              }
            },
          targets$1,
          0);
      
      if(Options["program_to_execute"][1])
       {var match$1=My_std["List"][9](cmds);
        
        if(match$1)
         {var cmd=match$1[1];
          
          if(match$1[2]!=0)
           {Log["dprintf"]
             (0,
              [0,
               [11,"Warning: Using -- only run the last target",0],
               "Warning: Using -- only run the last target"])}
          else
           {}
          
          var
           cmd_spec=
            [0,
             [0,[2,cmd],[0,Command["atomize"](Options["program_args"][1]),0]]];
          
          Log["dprintf"]
           (3,
            [0,
             [11,"Running the user command:",[17,[0,"@ ",1,0],[15,0]]],
             "Running the user command:@ %a"],
            Pathname["print"],
            cmd);
          throw [0,My_std["Exit_with_code"],call(cmd_spec)];
          }
        else
         {throw [0,My_std["Exit_usage"],"Using -- requires one target"];}
        }
      else
       {return 0;}
      }
    catch(exn)
     {if(exn[1]=Ocaml_dependencies["Circular_dependencies"])
       {throw [0,
               Exit_build_error,
               My_std["sbprintf"]
                ([0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [11,
                    "Circular dependencies: ",
                    [3,
                     0,
                     [11,
                      " already seen in",
                      [17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]],
                  "@[<2>Circular dependencies: %S already seen in@ %a@]@."],
                 exn[3],
                 Tools["pp_l"],
                 exn[2])];
        }
      else
       {throw exn;}
      }
    };

var
 main=
  function(param)
   {var
     exit=
      function(rc)
       {Log["finish"]([0,rc!=0?106380200:94326179],0);
        return Pervasives["exit"](rc);
        };
    
    try
     {return proceed(0);}
    catch(e)
     {if(Options["catch_errors"][1])
       {try
         {throw e;}
        catch(e$1)
         {if(e$1=My_std["Exit_OK"])
           {return exit(Exit_codes["rc_ok"]);}
          else
           {if(e$1=Fda["Exit_hygiene_failed"])
             {Log["eprintf"]
               ([0,
                 [11,"Exiting due to hygiene violations.",0],
                 "Exiting due to hygiene violations."]);
              return exit(Exit_codes["rc_hygiene"]);
              }
            else
             {if(e$1[1]=My_std["Exit_usage"])
               {Log["eprintf"]
                 ([0,
                   [11,"Usage:",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                   "Usage:@ %s."],
                  e$1[2]);
                return exit(Exit_codes["rc_usage"]);
                }
              else
               {if(e$1[1]=My_std["Exit_system_error"])
                 {Log["eprintf"]
                   ([0,
                     [11,"System error:",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                     "System error:@ %s."],
                    e$1[2]);
                  return exit(Exit_codes["rc_system_error"]);
                  }
                else
                 {if(e$1[1]=My_std["Exit_with_code"])
                   {return exit(e$1[2]);}
                  else
                   {if(e$1=Exit_silently)
                     {Log["finish"]([0,-249890668],0);
                      return Pervasives["exit"](Exit_codes["rc_ok"]);
                      }
                    else
                     {if(e$1[1]=My_std["Exit_silently_with_code"])
                       {Log["finish"]([0,-249890668],0);
                        return Pervasives["exit"](e$1[2]);
                        }
                      else
                       {if(e$1[1]=Solver["Failed"])
                         {var backtrace=e$1[2];
                          
                          Log["raw_dprintf"]
                           (-1,
                            [0,
                             [18,
                              [1,[0,[11,"<v0>",0],"<v0>"]],
                              [18,
                               [1,[0,[11,"<2>",0],"<2>"]],
                               [11,"Solver failed:",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]],
                             "@[<v0>@[<2>Solver failed:@ %a@]@."],
                            Report["print_backtrace_analyze"],
                            backtrace);
                          Log["raw_dprintf"]
                           (1,
                            [0,
                             [18,
                              [1,[0,[11,"<v2>",0],"<v2>"]],
                              [11,"Backtrace:",[15,[17,0,[17,0,[17,4,0]]]]]],
                             "@[<v2>Backtrace:%a@]@]@."],
                            Report["print_backtrace"],
                            backtrace);
                          return exit(Exit_codes["rc_solver_failed"]);
                          }
                        else
                         {if(e$1[1]=Failure)
                           {Log["eprintf"]
                             ([0,
                               [11,"Failure:",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                               "Failure:@ %s."],
                              e$1[2]);
                            return exit(Exit_codes["rc_failure"]);
                            }
                          else
                           {if(e$1[1]=Solver["Circular"])
                             {Log["eprintf"]
                               ([0,
                                 [11,
                                  "Circular build detected",
                                  [17,
                                   [0,"@ ",1,0],
                                   [12,40,[15,[11," already seen in ",[15,[12,41,0]]]]]]],
                                 "Circular build detected@ (%a already seen in %a)"],
                                Resource["print"],
                                e$1[2],
                                My_std["List"][1](Resource["print"]),
                                e$1[3]);
                              return exit(Exit_codes["rc_circularity"]);
                              }
                            else
                             {if(e$1[1]=Invalid_argument)
                               {Log["eprintf"]
                                 ([0,
                                   [11,
                                    "INTERNAL ERROR: Invalid argument ",
                                    [2,
                                     0,
                                     [11,
                                      "\nThis is likely to be a bug, please report this to the ocamlbuild\ndevelopers.",
                                      0]]],
                                   "INTERNAL ERROR: Invalid argument %s\nThis is likely to be a bug, please report this to the ocamlbuild\ndevelopers."],
                                  e$1[2]);
                                return exit(Exit_codes["rc_invalid_argument"]);
                                }
                              else
                               {if(e$1[1]=Ocaml_utils["Ocamldep_error"])
                                 {Log["eprintf"]
                                   ([0,[11,"Ocamldep error: ",[2,0,0]],"Ocamldep error: %s"],
                                    e$1[2]);
                                  return exit(Exit_codes["rc_ocamldep_error"]);
                                  }
                                else
                                 {if(e$1[1]=Lexers["Error"])
                                   {var match=e$1[2];
                                    
                                    Log["eprintf"]
                                     ([0,
                                       [15,[11,"Lexing error: ",[2,0,[12,46,0]]]],
                                       "%aLexing error: %s."],
                                      Loc["print_loc"],
                                      match[2],
                                      match[1]);
                                    return exit(Exit_codes["rc_lexing_error"]);
                                    }
                                  else
                                   {if(e$1[1]=Arg["Bad"])
                                     {Log["eprintf"]([0,[2,0,0],"%s"],e$1[2]);
                                      return exit(Exit_codes["rc_usage"]);
                                      }
                                    else
                                     {if(e$1[1]=Exit_build_error)
                                       {Log["eprintf"]([0,[2,0,0],"%s"],e$1[2]);
                                        return exit(Exit_codes["rc_build_error"]);
                                        }
                                      else
                                       {if(e$1[1]=Arg["Help"])
                                         {Log["eprintf"]([0,[2,0,0],"%s"],e$1[2]);
                                          return exit(Exit_codes["rc_ok"]);
                                          }
                                        else
                                         {try
                                           {Log["eprintf"]([0,[15,0],"%a"],My_unix["report_error"],e$1);
                                            return exit(100);
                                            }
                                          catch(e$2)
                                           {Log["eprintf"]
                                             ([0,
                                               [11,"Exception",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                                               "Exception@ %s."],
                                              Printexc["to_string"](e$2));
                                            return exit(100);
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
        }
      else
       {throw e;}
      }
    };


module["exports"]={"main":main};

