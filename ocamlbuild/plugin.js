// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("Options");
var Const=require("Const");
var Ocamlbuild_where=require("Ocamlbuild_where");
var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Format=require("Format");
var Command=require("Command");
var Param_tags=require("Param_tags");
var Shell=require("Shell");
var My_std=require("My_std");
var Tags=require("Tags");
var My_unix=require("My_unix");
var Log=require("Log");
var $$Array=require("Array");
var Sys=require("Sys");


var plugin="myocamlbuild";

var plugin_file=Pervasives["^"](plugin,".ml");

var plugin_config_file=Pervasives["^"](plugin,"_config.ml");

var plugin_config_file_interface=Pervasives["^"](plugin,"_config.mli");

var
 we_need_a_plugin=
  function(param)
   {return Options["plugin"][1]&&My_std["sys_file_exists"](plugin_file);};

var
 we_have_a_plugin=
  function(param)
   {return My_std["sys_file_exists"]
            (Pervasives["^"]
              (Pathname["Operators"][1](Options["build_dir"][1],plugin),
               Options["exe"][1]));
    };

var
 we_have_a_config_file=
  function(param){return My_std["sys_file_exists"](plugin_config_file);};

var
 we_have_a_config_file_interface=
  function(param)
   {return My_std["sys_file_exists"](plugin_config_file_interface);};

var
 Make=
  function(U)
   {var we_need_a_plugin$1=we_need_a_plugin(0);
    
    var we_have_a_plugin$1=we_have_a_plugin(0);
    
    var we_have_a_config_file$1=we_have_a_config_file(0);
    
    var we_have_a_config_file_interface$1=we_have_a_config_file_interface(0);
    
    var
     up_to_date_or_copy=
      function(fn)
       {var fn$prime=Pathname["Operators"][1](Options["build_dir"][1],fn);
        
        return Pathname["exists"](fn)&&
               (Pathname["exists"](fn$prime)&&
                Pathname["same_contents"](fn,fn$prime)||
                (Shell["cp"](fn,fn$prime),0));
        };
    
    var
     rebuild_plugin_if_needed=
      function(param)
       {var a=up_to_date_or_copy(plugin_file);
        
        var
         b=
          !we_have_a_config_file$1||up_to_date_or_copy(plugin_config_file);
        
        var
         c=
          !we_have_a_config_file_interface$1||
          up_to_date_or_copy(plugin_config_file_interface);
        
        if(a&&b&&c&&we_have_a_plugin$1)
         {return 0;}
        else
         {if
           (Options["native_plugin"][1]&&
            !My_std["sys_file_exists"]
             (Pathname["Operators"][1]
               (Ocamlbuild_where["libdir"][1],"ocamlbuildlib.cmxa")))
           {Options["native_plugin"][1]=
            0,
            0,
            Log["eprintf"]
             ([0,
               [11,"Warning: Won't be able to compile a native plugin",0],
               "Warning: Won't be able to compile a native plugin"])}
          else
           {}
          
          if(we_have_a_config_file$1)
           {if(we_have_a_config_file_interface$1)
             {var
               plugin_config=
                [/* S */0,
                 [/* :: */0,
                  [/* P */2,plugin_config_file_interface],
                  [/* :: */0,[/* P */2,plugin_config_file],0]]];
              }
            else
             {var plugin_config=[/* P */2,plugin_config_file];}
            }
          else
           {var plugin_config=0;}
          
          if(Options["native_plugin"][1])
           {var
             match=
              [/* tuple */0,"cmxa","cmx",Options["ocamlopt"][1],"native"];
            }
          else
           {var match=[/* tuple */0,"cma","cmo",Options["ocamlc"][1],"byte"];}
          
          var cmo=match[2];
          
          var cma=match[1];
          
          var
           use_light_mode=
            !Options["native_plugin"][1]&&
            My_std["!*"](My_unix["is_degraded"]);
          
          var
           use_ocamlfind_pkgs=
            Options["use_ocamlfind"][1]&&Options["plugin_tags"][1]!=0;
          
          if(use_ocamlfind_pkgs)
           {var unix_lib=[0,251810662,"unix"];}
          else
           {if(use_light_mode)
             {var unix_lib=481346541;}
            else
             {var unix_lib=[0,3802917,"unix"];}
            }
          
          if(use_ocamlfind_pkgs)
           {var ocamlbuild_lib=[0,251810662,"ocamlbuild"];}
          else
           {if(use_light_mode)
             {var ocamlbuild_lib=[0,945409809,"ocamlbuildlightlib"];}
            else
             {var ocamlbuild_lib=[0,945409809,"ocamlbuildlib"];}
            }
          
          if(use_light_mode)
           {var ocamlbuild_module=[0,945460878,"ocamlbuildlight"];}
          else
           {var ocamlbuild_module=[0,945460878,"ocamlbuild"];}
          
          var dir=Ocamlbuild_where["libdir"][1];
          
          if(Pathname["is_implicit"](dir))
           {var dir$1=Pathname["Operators"][1](Pathname["pwd"],dir);}
          else
           {var dir$1=dir;}
          
          var
           in_dir=
            function(file)
             {var path=Pathname["Operators"][1](dir$1,file);
              
              if(!My_std["sys_file_exists"](path))
               {Pervasives["failwith"]
                 (Format["sprintf"]
                   ([0,
                     [11,
                      "Cannot find ",
                      [3,0,[11," in ocamlbuild -where directory",0]]],
                     "Cannot find %S in ocamlbuild -where directory"],
                    file))}
              else
               {}
              
              return path;
              };
          
          var
           spec=
            function(param$1)
             {if("unknown primitive:isint")
               {return 0;}
              else
               {var variant=param$1[1];
                
                if(variant>=945409809)
                 {if(variant>=945460878)
                   {return [/* P */2,
                            in_dir(Pathname["Operators"][2](param$1[2],cmo))];
                    }
                  else
                   {return [/* S */0,
                            [/* :: */0,
                             [1,"-I"],
                             [/* :: */0,
                              [/* A */1,dir$1],
                              [/* :: */0,
                               [/* P */2,in_dir(Pathname["Operators"][2](param$1[2],cma))],
                               0]]]];
                    }
                  }
                else
                 {if(variant>=251810662)
                   {return [/* S */0,
                            [/* :: */0,
                             [1,"-package"],
                             [/* :: */0,[/* A */1,param$1[2]],0]]];
                    }
                  else
                   {return [/* P */2,Pathname["Operators"][2](param$1[2],cma)];
                    }
                  }
                }
              };
          
          var
           match$1=
            [/* tuple */0,
             spec(unix_lib),
             spec(ocamlbuild_lib),
             spec(ocamlbuild_module)];
          
          var
           plugin_tags=
            Tags["Operators"][1]
             (Tags["Operators"][1]
               (Tags["Operators"][1]
                 (Tags["Operators"][1]
                   (Tags["of_list"](Options["plugin_tags"][1]),"ocaml"),
                  "program"),
                "link"),
              match[4]);
          
          Param_tags["partial_init"](0,Const["Source"][9],plugin_tags);
          var
           cmd=
            [/* Cmd */1,
             [/* S */0,
              [/* :: */0,
               match[3],
               [/* :: */0,
                match$1[1],
                [/* :: */0,
                 match$1[2],
                 [/* :: */0,
                  [/* T */5,plugin_tags],
                  [/* :: */0,
                   plugin_config,
                   [/* :: */0,
                    [/* P */2,plugin_file],
                    [/* :: */0,
                     match$1[3],
                     [/* :: */0,
                      [1,"-o"],
                      [/* :: */0,
                       [/* Px */3,Pervasives["^"](plugin,Options["exe"][1])],
                       0]]]]]]]]]]];
          
          Shell["chdir"](Options["build_dir"][1]);
          Shell["rm_f"](Pervasives["^"](plugin,Options["exe"][1]));
          Command["execute"](0,0,cmd);
          if(Options["just_plugin"][1])
           {Log["finish"](0,0);throw My_std["Exit_OK"];}
          else
           {return 0;}
          }
        };
    
    var
     execute_plugin_if_needed=
      function(param)
       {if(we_need_a_plugin$1)
         {rebuild_plugin_if_needed(0);
          Shell["chdir"](Pathname["pwd"]);
          if(Options["native_plugin"][1])
           {var runner=0;}
          else
           {var runner=Options["ocamlrun"][1];}
          
          var argv=My_std["List"][7]($$Array["to_list"](Sys["argv"]));
          
          var
           passed_argv=
            My_std["List"][33]
             (function(s){return "unknown primitive:caml_string_notequal";},
              argv);
          
          var
           spec=
            [/* S */0,
             [/* :: */0,
              runner,
              [/* :: */0,
               [/* P */2,
                Pervasives["^"]
                 (Pathname["Operators"][1](Options["build_dir"][1],plugin),
                  Options["exe"][1])],
               [/* :: */0,
                [1,"-no-plugin"],
                [/* :: */0,Command["atomize"](passed_argv),0]]]]];
          
          Log["finish"](0,0);
          var
           rc=
            My_std["sys_command"](Command["string_of_command_spec"](spec));
          
          throw [0,My_std["Exit_silently_with_code"],rc];
          }
        else
         {if
           (!My_std["sys_file_exists"](plugin_file)&&
            Options["plugin_tags"][1]!=
            0)
           {return Log["eprintf"]
                    ([0,
                      [11,
                       "Warning: option -plugin-tag(s) has no effect in absence of plugin file ",
                       [3,0,0]],
                      "Warning: option -plugin-tag(s) has no effect in absence of plugin file %S"],
                     plugin_file);
            }
          else
           {return 0;}
          }
        };
    
    return [0,
            we_need_a_plugin$1,
            we_have_a_plugin$1,
            we_have_a_config_file$1,
            we_have_a_config_file_interface$1,
            up_to_date_or_copy,
            rebuild_plugin_if_needed,
            execute_plugin_if_needed];
    };

var execute_plugin_if_needed=function(param){var P=Make([0]);return P[7](0);};

module["exports"]=
{"execute_plugin_if_needed":execute_plugin_if_needed,
 "we_need_a_plugin":we_need_a_plugin};

