// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("./options.js");
var Const=require("./const.js");
var Ocamlbuild_where=require("./ocamlbuild_where.js");
var Pervasives=require("./pervasives.js");
var Pathname=require("./pathname.js");
var Format=require("./format.js");
var Command=require("./command.js");
var Param_tags=require("./param_tags.js");
var Shell=require("./shell.js");
var My_std=require("./my_std.js");
var Tags=require("./tags.js");
var My_unix=require("./my_unix.js");
var Log=require("./log.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var plugin="myocamlbuild";

var plugin_file=Pervasives["^"](plugin,".ml");

var plugin_config_file=Pervasives["^"](plugin,"_config.ml");

var plugin_config_file_interface=Pervasives["^"](plugin,"_config.mli");

var
 we_need_a_plugin=
  function(param)
   {return Options["plugin"][1]&&My_std["sys_file_exists"](plugin_file)};

var
 we_have_a_plugin=
  function(param)
   {return My_std["sys_file_exists"]
            (Pervasives["^"]
              (Pathname["Operators"][1](Options["build_dir"][1],plugin),
               Options["exe"][1]))};

var
 we_have_a_config_file=
  function(param){return My_std["sys_file_exists"](plugin_config_file)};

var
 we_have_a_config_file_interface=
  function(param)
   {return My_std["sys_file_exists"](plugin_config_file_interface)};

var
 Make=
  function(U)
   {var we_need_a_plugin$1=we_need_a_plugin(/* () */0);
    
    var we_have_a_plugin$1=we_have_a_plugin(/* () */0);
    
    var we_have_a_config_file$1=we_have_a_config_file(/* () */0);
    
    var
     we_have_a_config_file_interface$1=
      we_have_a_config_file_interface(/* () */0);
    
    var
     up_to_date_or_copy=
      function(fn)
       {var fn$prime=Pathname["Operators"][1](Options["build_dir"][1],fn);
        
        return Pathname["exists"](fn)&&
               (Pathname["exists"](fn$prime)&&
                Pathname["same_contents"](fn,fn$prime)||
                (Shell["cp"](fn,fn$prime),/* false */0))};
    
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
         {return /* () */0}
        else
         {if
           (Options["native_plugin"][1]&&
            !My_std["sys_file_exists"]
             (Pathname["Operators"][1]
               (Ocamlbuild_where["libdir"][1],"ocamlbuildlib.cmxa")))
           {Options["native_plugin"][1]=
            /* false */0,
            Log["eprintf"]
             ([/* Format */0,
               [/* String_literal */11,
                "Warning: Won't be able to compile a native plugin",
                /* End_of_format */0],
               "Warning: Won't be able to compile a native plugin"])}
          
          var
           plugin_config=
            we_have_a_config_file$1
             ?we_have_a_config_file_interface$1
               ?/* S */[0,
                 /* :: */[0,
                  /* P */[2,plugin_config_file_interface],
                  /* :: */[0,/* P */[2,plugin_config_file],/* [] */0]]]
               :/* P */[2,plugin_config_file]
             :/* N */0;
          
          var
           match=
            Options["native_plugin"][1]
             ?/* tuple */[0,"cmxa","cmx",Options["ocamlopt"][1],"native"]
             :/* tuple */[0,"cma","cmo",Options["ocamlc"][1],"byte"];
          
          var cmo=match[2];
          
          var cma=match[1];
          
          var
           use_light_mode=
            !Options["native_plugin"][1]&&
            My_std["!*"](My_unix["is_degraded"]);
          
          var
           use_ocamlfind_pkgs=
            Options["use_ocamlfind"][1]&&
            Options["plugin_tags"][1]!==
            /* [] */0;
          
          var
           unix_lib=
            use_ocamlfind_pkgs
             ?[/* `Package */0,251810662,"unix"]
             :use_light_mode
               ?/* Nothing */481346541
               :[/* `Lib */0,3802917,"unix"];
          
          var
           ocamlbuild_lib=
            use_ocamlfind_pkgs
             ?[/* `Package */0,251810662,"ocamlbuild"]
             :use_light_mode
               ?[/* `Local_lib */0,945409809,"ocamlbuildlightlib"]
               :[/* `Local_lib */0,945409809,"ocamlbuildlib"];
          
          var
           ocamlbuild_module=
            use_light_mode
             ?[/* `Local_mod */0,945460878,"ocamlbuildlight"]
             :[/* `Local_mod */0,945460878,"ocamlbuild"];
          
          var dir=Ocamlbuild_where["libdir"][1];
          
          var
           dir$1=
            Pathname["is_implicit"](dir)
             ?Pathname["Operators"][1](Pathname["pwd"],dir)
             :dir;
          
          var
           in_dir=
            function(file)
             {var path=Pathname["Operators"][1](dir$1,file);
              
              if(!My_std["sys_file_exists"](path))
               {Pervasives["failwith"]
                 (Format["sprintf"]
                   ([/* Format */0,
                     [/* String_literal */11,
                      "Cannot find ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " in ocamlbuild -where directory",
                        /* End_of_format */0]]],
                     "Cannot find %S in ocamlbuild -where directory"],
                    file))}
              
              return path};
          
          var
           spec=
            function(param$1)
             {if(typeof param$1==="number")
               {return /* N */0}
              else
               {var variant=param$1[1];
                
                return variant>=945409809
                        ?variant>=945460878
                          ?/* P */[2,in_dir(Pathname["Operators"][2](param$1[2],cmo))]
                          :/* S */[0,
                            /* :: */[0,
                             [/* A */1,"-I"],
                             /* :: */[0,
                              /* A */[1,dir$1],
                              /* :: */[0,
                               /* P */[2,in_dir(Pathname["Operators"][2](param$1[2],cma))],
                               /* [] */0]]]]
                        :variant>=251810662
                          ?/* S */[0,
                            /* :: */[0,
                             [/* A */1,"-package"],
                             /* :: */[0,/* A */[1,param$1[2]],/* [] */0]]]
                          :/* P */[2,Pathname["Operators"][2](param$1[2],cma)]}
              };
          
          var
           match$1=
            /* tuple */[0,
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
          
          Param_tags["partial_init"]
           (/* None */0,Const["Source"][9],plugin_tags);
          var
           cmd=
            /* Cmd */[1,
             /* S */[0,
              /* :: */[0,
               match[3],
               /* :: */[0,
                match$1[1],
                /* :: */[0,
                 match$1[2],
                 /* :: */[0,
                  /* T */[5,plugin_tags],
                  /* :: */[0,
                   plugin_config,
                   /* :: */[0,
                    /* P */[2,plugin_file],
                    /* :: */[0,
                     match$1[3],
                     /* :: */[0,
                      [/* A */1,"-o"],
                      /* :: */[0,
                       /* Px */[3,Pervasives["^"](plugin,Options["exe"][1])],
                       /* [] */0]]]]]]]]]]];
          
          Shell["chdir"](Options["build_dir"][1]);
          Shell["rm_f"](Pervasives["^"](plugin,Options["exe"][1]));
          Command["execute"](/* None */0,/* None */0,cmd);
          if(Options["just_plugin"][1])
           {Log["finish"](/* None */0,/* () */0);throw My_std["Exit_OK"]}
          else
           {return 0}
          }
        };
    
    var
     execute_plugin_if_needed=
      function(param)
       {if(we_need_a_plugin$1)
         {rebuild_plugin_if_needed(/* () */0);
          Shell["chdir"](Pathname["pwd"]);
          var
           runner=
            Options["native_plugin"][1]?/* N */0:Options["ocamlrun"][1];
          
          var argv=My_std["List"][7]($$Array["to_list"](Sys["argv"]));
          
          var
           passed_argv=
            My_std["List"][33]
             (function(s)
               {return CamlPrimitive["caml_string_notequal"]
                        (s,"-plugin-option")},
              argv);
          
          var
           spec=
            /* S */[0,
             /* :: */[0,
              runner,
              /* :: */[0,
               /* P */[2,
                Pervasives["^"]
                 (Pathname["Operators"][1](Options["build_dir"][1],plugin),
                  Options["exe"][1])],
               /* :: */[0,
                [/* A */1,"-no-plugin"],
                /* :: */[0,Command["atomize"](passed_argv),/* [] */0]]]]];
          
          Log["finish"](/* None */0,/* () */0);
          var
           rc=
            My_std["sys_command"](Command["string_of_command_spec"](spec));
          
          throw [0,My_std["Exit_silently_with_code"],rc]}
        else
         {return !My_std["sys_file_exists"](plugin_file)&&
                  Options["plugin_tags"][1]!==
                  /* [] */0
                  ?Log["eprintf"]
                    ([/* Format */0,
                      [/* String_literal */11,
                       "Warning: option -plugin-tag(s) has no effect in absence of plugin file ",
                       [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                      "Warning: option -plugin-tag(s) has no effect in absence of plugin file %S"],
                     plugin_file)
                  :/* () */0}
        };
    
    return [0,
            we_need_a_plugin$1,
            we_have_a_plugin$1,
            we_have_a_config_file$1,
            we_have_a_config_file_interface$1,
            up_to_date_or_copy,
            rebuild_plugin_if_needed,
            execute_plugin_if_needed]};

var
 execute_plugin_if_needed=
  function(param){var P=Make([0]);return P[7](/* () */0)};

module["exports"]=
{"execute_plugin_if_needed":execute_plugin_if_needed,
 "we_need_a_plugin":we_need_a_plugin};

