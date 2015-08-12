// Generated CODE, PLEASE EDIT WITH CARE 

var Tools=require("Tools");
var Ocaml_utils=require("Ocaml_utils");
var Options=require("Options");
var Ocaml_compiler=require("Ocaml_compiler");
var Char=require("Char");
var Pervasives=require("Pervasives");
var Rule=require("Rule");
var Pathname=require("Pathname");
var Flags=require("Flags");
var Format=require("Format");
var Command=require("Command");
var Filename=require("Filename");
var My_std=require("My_std");
var Tags=require("Tags");
var Ocaml_tools=require("Ocaml_tools");
var Configuration=require("Configuration");
var Findlib=require("Findlib");
var Ocamlbuild_config=require("Ocamlbuild_config");


var
 link_C_library=
  function(clib,a,libname,env,build)
   {var clib$1=env(clib);
    
    var a$1=env(a);
    
    var libname$1=env(libname);
    
    var objs=Ocaml_utils["string_list_of_file"](clib$1);
    
    var include_dirs=Pathname["include_dirs_of"](Pathname["dirname"](a$1));
    
    var
     obj_of_o=
      function(x)
       {if
         (Filename["check_suffix"](x,".o")&&
          CamlPrimtivie["caml_string_notequal"](Options["ext_obj"][1],"o"))
         {return Pathname["update_extension"](Options["ext_obj"][1],x);}
        else
         {return x;}
        };
    
    var
     resluts=
      build
       (My_std["List"][16]
         (function(o)
           {return My_std["List"][16]
                    (function(dir)
                      {return Pathname["Operators"][1](dir,obj_of_o(o));},
                     include_dirs);
            },
          objs));
    
    var
     objs$1=
      My_std["List"][16]
       (function(param)
         {switch(param[0]){case 0:return param[1];case 1:throw param[1];}},
        resluts);
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              Options["ocamlmklib"][1],
              /* :: */[0,
               [/* A */1,"-o"],
               /* :: */[0,
                /* Px */[3,libname$1],
                /* :: */[0,
                 /* T */[5,
                  Tags["Operators"][1]
                   (Tags["Operators"][1](Tools["tags_of_pathname"](a$1),"c"),
                    "ocamlmklib")],
                 /* :: */[0,Command["atomize"](objs$1),/* [] */0]]]]]]];
    };

var C_tools=[0,link_C_library];

var
 init=
  function(param)
   {var ext_lib=Options["ext_lib"][1];
    
    var ext_obj=Options["ext_obj"][1];
    
    var ext_dll=Options["ext_dll"][1];
    
    var x_o=Pathname["Operators"][2]("%",ext_obj);
    
    var x_a=Pathname["Operators"][2]("%",ext_lib);
    
    var x_dll=Pathname["Operators"][2]("%",ext_dll);
    
    var x_p_o=Pathname["Operators"][2]("%.p",ext_obj);
    
    var x_p_a=Pathname["Operators"][2]("%.p",ext_lib);
    
    var x_p_dll=Pathname["Operators"][2]("%.p",ext_dll);
    
    var x_byte_c="%.byte.c";
    
    var x_byte_o=Pathname["Operators"][2]("%.byte",ext_obj);
    
    var x_byte_so=Pathname["Operators"][2]("%.byte",ext_dll);
    
    var x_native_o=Pathname["Operators"][2]("%.native",ext_obj);
    
    var x_native_so=Pathname["Operators"][2]("%.native",ext_dll);
    
    Rule["rule"]
     ("target files",
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.itarget"],
      [/* Some */0,"%.otarget"],
      /* None */0,
      [/* Some */0,
       "If foo.itarget contains a list of ocamlbuild targets, asking ocamlbuild to produce foo.otarget will build each of those targets in turn."],
      function(env,build)
       {var itarget=env("%.itarget");
        
        var dir=Pathname["dirname"](itarget);
        
        var targets=Ocaml_utils["string_list_of_file"](itarget);
        
        My_std["List"][14]
         (My_std["Outcome"][2],
          build
           (My_std["List"][16]
             (function(x)
               {return /* :: */[0,Pathname["Operators"][1](dir,x),/* [] */0];},
              targets)));
        if(Options["make_links"][1])
         {var
           link=
            function(x)
             {return /* Cmd */[1,
                      /* S */[0,
                       /* :: */[0,
                        [/* A */1,"ln"],
                        /* :: */[0,
                         [/* A */1,"-sf"],
                         /* :: */[0,
                          /* P */[2,
                           Pathname["Operators"][1](Options["build_dir"][1],x)],
                          /* :: */[0,/* A */[1,Pathname["parent_dir_name"]],/* [] */0]]]]]];
              };
          
          return /* Seq */[0,
                  My_std["List"][16]
                   (function(x){return link(Pathname["Operators"][1](dir,x));},
                    targets)];
          }
        else
         {return /* Nop */0;}
        });
    Rule["rule"]
     ("ocaml: mli -> cmi",
      /* None */0,
      /* None */0,
      [/* Some */0,[/* :: */0,"%.mli",[/* :: */0,"%.mli.depends",/* [] */0]]],
      [/* Some */0,"%.cmi"],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["compile_ocaml_interf"]("%.mli","%.cmi"));
    Rule["rule"]
     ("ocaml: mlpack & d.cmo* -> d.cmo & cmi",
      /* None */0,
      [/* Some */0,[/* :: */0,"%.d.cmo",/* [] */0]],
      [/* Some */0,[/* :: */0,"%.mlpack",[/* :: */0,"%.cmi",/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_debug_pack_mlpack"]("%.mlpack","%.d.cmo"));
    Rule["rule"]
     ("ocaml: mlpack & cmo* & cmi -> cmo",
      /* None */0,
      /* None */0,
      [/* Some */0,
       [/* :: */0,
        "%.mli",
        [/* :: */0,"%.cmi",[/* :: */0,"%.mlpack",/* [] */0]]]],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "If foo.mlpack contains a list of capitalized module names, the target foo.cmo will produce a packed module containing those modules as submodules. You can also have a foo.mli file to restrict the interface of the resulting module.\n\nWarning: to produce a native foo.cmx out of a foo.mlpack, you must manually tag the included compilation units with for-pack(foo). See the documentation of the corresponding rules for more details.\n\nThe modules named in the .mlpack will be dynamic dependencies of the compilation action. You cannot give the .mlpack the same name as one of the module it contains, as this would create a circular dependency."],
      Ocaml_compiler["byte_pack_mlpack"]("%.mlpack","%.cmo"));
    Rule["rule"]
     ("ocaml: mlpack & cmo* -> cmo & cmi",
      /* None */0,
      [/* Some */0,[/* :: */0,"%.cmo",[/* :: */0,"%.cmi",/* [] */0]]],
      /* None */0,
      /* None */0,
      [/* Some */0,"%.mlpack"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_pack_mlpack"]("%.mlpack","%.cmo"));
    Rule["rule"]
     ("ocaml: ml & cmi -> d.cmo",
      /* None */0,
      /* None */0,
      [/* Some */0,
       [/* :: */0,
        "%.mli",
        [/* :: */0,
         "%.ml",
         [/* :: */0,"%.ml.depends",[/* :: */0,"%.cmi",/* [] */0]]]]],
      [/* Some */0,"%.d.cmo"],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The foo.d.cmo target compiles foo.ml with the 'debug' tag enabled (-g).See also foo.d.byte.\n\nFor technical reason, .d.cmx and .d.native are not yet supported, so you should explicitly add the 'debug' tag to native targets (both compilation and linking)."],
      Ocaml_compiler["byte_compile_ocaml_implem"]
       ([/* Some */0,"debug"],"%.ml","%.d.cmo"));
    Rule["rule"]
     ("ocaml: ml & cmi -> cmo",
      /* None */0,
      /* None */0,
      [/* Some */0,
       [/* :: */0,
        "%.mli",
        [/* :: */0,
         "%.ml",
         [/* :: */0,"%.ml.depends",[/* :: */0,"%.cmi",/* [] */0]]]]],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_compile_ocaml_implem"](/* None */0,"%.ml","%.cmo"));
    Rule["rule"]
     ("ocaml: mlpack & cmi & p.cmx* & p.o* -> p.cmx & p.o",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmx",/* :: */[0,x_p_o,/* [] */0]]],
      [/* Some */0,[/* :: */0,"%.mlpack",[/* :: */0,"%.cmi",/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_profile_pack_mlpack"]("%.mlpack","%.p.cmx"));
    Rule["rule"]
     ("ocaml: mlpack & cmi & cmx* & o* -> cmx & o",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      [/* Some */0,[/* :: */0,"%.mlpack",[/* :: */0,"%.cmi",/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       'If foo.mlpack contains a list of capitalized module names, the target foo.cmx will produce a packed module containing those modules as submodules.\n\nWarning: The .cmx files that will be included must be manually tagged with the tag "for-pack(foo)". This means that you cannot include the same bar.cmx in several .mlpack files, and that you should not use an included .cmx as a separate module on its own.\n\nThis requirement comes from a technical limitation of native module packing: ocamlopt needs the -for-pack argument to be passed ahead of time, when compiling each included submodule, because there is no reliable, portable way to rewrite native object files afterwards.'],
      Ocaml_compiler["native_pack_mlpack"]("%.mlpack","%.cmx"));
    Rule["rule"]
     ("ocaml: ml & cmi -> p.cmx & p.o",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmx",/* :: */[0,x_p_o,/* [] */0]]],
      [/* Some */0,
       [/* :: */0,
        "%.ml",
        [/* :: */0,"%.ml.depends",[/* :: */0,"%.cmi",/* [] */0]]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The foo.p.cmx target compiles foo.ml with the 'profile' tag enabled (-p). Note that ocamlbuild provides no support for the bytecode profiler, which works completely differently."],
      Ocaml_compiler["native_compile_ocaml_implem"]
       ([/* Some */0,"profile"],[/* Some */0,"p.cmx"],"%.ml"));
    Rule["rule"]
     ("ocaml: ml & cmi -> cmx & o",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      [/* Some */0,
       [/* :: */0,
        "%.ml",
        [/* :: */0,"%.ml.depends",[/* :: */0,"%.cmi",/* [] */0]]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_compile_ocaml_implem"]
       (/* None */0,/* None */0,"%.ml"));
    Rule["rule"]
     ("ocaml: ml -> d.cmo & cmi",
      /* None */0,
      [/* Some */0,[/* :: */0,"%.d.cmo",/* [] */0]],
      [/* Some */0,
       [/* :: */0,
        "%.ml",
        [/* :: */0,"%.ml.depends",[/* :: */0,"%.cmi",/* [] */0]]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_compile_ocaml_implem"]
       ([/* Some */0,"debug"],"%.ml","%.d.cmo"));
    Rule["rule"]
     ("ocaml: ml -> cmo & cmi",
      /* None */0,
      [/* Some */0,[/* :: */0,"%.cmo",[/* :: */0,"%.cmi",/* [] */0]]],
      [/* Some */0,[/* :: */0,"%.ml",[/* :: */0,"%.ml.depends",/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "This rule allows to produce a .cmi from a .ml file when the corresponding .mli is missing.\n\nNote: you are strongly encourage to have a .mli file for each of your .ml module, as it is a good development practice which also simplifies the way build systems work, as it avoids producing .cmi files as a silent side-effect of another compilation action."],
      Ocaml_compiler["byte_compile_ocaml_implem"](/* None */0,"%.ml","%.cmo"));
    Rule["rule"]
     ("ocaml: d.cmo* -> d.byte",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.d.byte"],
      [/* Some */0,"%.d.cmo"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The target foo.d.byte will build a bytecode executable with debug information enabled."],
      Ocaml_compiler["byte_debug_link"]("%.d.cmo","%.d.byte"));
    Rule["rule"]
     ("ocaml: cmo* -> byte",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.byte"],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_link"]("%.cmo","%.byte"));
    Rule["rule"]
     ("ocaml: cmo* -> byte.(o|obj)",
      /* None */0,
      /* None */0,
      /* None */0,
      /* Some */[0,x_byte_o],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The foo.byte.o target, or foo.byte.obj under Windows, will produce an object file by passing the -output-obj option to the OCaml compiler. See also foo.byte.c, and foo.native.{o,obj}."],
      Ocaml_compiler["byte_output_obj"]("%.cmo",x_byte_o));
    Rule["rule"]
     ("ocaml: cmo* -> byte.c",
      /* None */0,
      /* None */0,
      /* None */0,
      /* Some */[0,x_byte_c],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_output_obj"]("%.cmo",x_byte_c));
    Rule["rule"]
     ("ocaml: cmo* -> byte.(so|dll|dylib)",
      /* None */0,
      /* None */0,
      /* None */0,
      /* Some */[0,x_byte_so],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The foo.byte.so target, or foo.byte.dll under Windows, or foo.byte.dylib under Mac OS X will produce a shared library file\n  by passing the -output-obj and -cclib -shared options to the OCaml compiler. See also foo.native.{so,dll,dylib}."],
      Ocaml_compiler["byte_output_shared"]("%.cmo",x_byte_so));
    Rule["rule"]
     ("ocaml: p.cmx* & p.o* -> p.native",
      /* None */0,
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmx",/* :: */[0,x_p_o,/* [] */0]]],
      [/* Some */0,"%.p.native"],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The foo.p.native target builds the native executable with the 'profile' tag (-p) enabled throughout compilation and linking."],
      Ocaml_compiler["native_profile_link"]("%.p.cmx","%.p.native"));
    Rule["rule"]
     ("ocaml: cmx* & o* -> native",
      /* None */0,
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      [/* Some */0,"%.native"],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"Builds a native executable"],
      Ocaml_compiler["native_link"]("%.cmx","%.native"));
    Rule["rule"]
     ("ocaml: cmx* & o* -> native.(o|obj)",
      /* None */0,
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      /* Some */[0,x_native_o],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_output_obj"]("%.cmx",x_native_o));
    Rule["rule"]
     ("ocaml: cmx* & o* -> native.(so|dll|dylib)",
      /* None */0,
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      /* Some */[0,x_native_so],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_output_shared"]("%.cmx",x_native_so));
    Rule["rule"]
     ("ocaml: mllib & d.cmo* -> d.cma",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.d.cma"],
      [/* Some */0,"%.mllib"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_debug_library_link_mllib"]("%.mllib","%.d.cma"));
    Rule["rule"]
     ("ocaml: mllib & cmo* -> cma",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.cma"],
      [/* Some */0,"%.mllib"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "Build a .cma archive file (bytecode library) containing the list of modules given in the .mllib file of the same name. Note that the .cma archive will contain exactly the modules listed, so it may not be self-contained if some dependencies are missing."],
      Ocaml_compiler["byte_library_link_mllib"]("%.mllib","%.cma"));
    Rule["rule"]
     ("ocaml: d.cmo* -> d.cma",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.d.cma"],
      [/* Some */0,"%.d.cmo"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_debug_library_link"]("%.d.cmo","%.d.cma"));
    Rule["rule"]
     ("ocaml: cmo* -> cma",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.cma"],
      [/* Some */0,"%.cmo"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The preferred way to build a .cma archive is to create a .mllib file with a list of modules to include. It is however possible to build one from a .cmo of the same name; the archive will include this module and the local modules it depends upon, transitively."],
      Ocaml_compiler["byte_library_link"]("%.cmo","%.cma"));
    Rule["rule"]
     ("ocaml C stubs: clib & (o|obj)* -> (a|lib) & (so|dll)",
      /* None */0,
      /* Some */[0,
       Pervasives["@"]
        (/* :: */[0,
          Pathname["Operators"][2]
           ("%(path:<**/>)lib%(libname:<*> and not <*.*>)",ext_lib),
          /* [] */0],
         Ocamlbuild_config["supports_shared_libraries"]
          ?/* :: */[0,
            Pathname["Operators"][2]
             ("%(path:<**/>)dll%(libname:<*> and not <*.*>)",ext_dll),
            /* [] */0]
          :/* [] */0)],
      /* None */0,
      /* None */0,
      [/* Some */0,"%(path)lib%(libname).clib"],
      /* None */0,
      /* None */0,
      /* None */0,
      C_tools[1]
       ("%(path)lib%(libname).clib",
        Pathname["Operators"][2]("%(path)lib%(libname)",ext_lib),
        "%(path)%(libname)"));
    Rule["rule"]
     ("ocaml: mllib & p.cmx* & p.o* -> p.cmxa & p.a",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmxa",/* :: */[0,x_p_a,/* [] */0]]],
      /* None */0,
      /* None */0,
      [/* Some */0,"%.mllib"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_profile_library_link_mllib"]
       ("%.mllib","%.p.cmxa"));
    Rule["rule"]
     ("ocaml: mllib & cmx* & o* -> cmxa & a",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmxa",/* :: */[0,x_a,/* [] */0]]],
      /* None */0,
      /* None */0,
      [/* Some */0,"%.mllib"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "Creates a native archive file .cmxa, using the .mllib file as the .cma rule above. Note that whereas bytecode .cma can be used both for static and dynamic linking, .cmxa only support static linking. For an archive usable with Dynlink, see the rule producing a .cmxs from a .mldylib."],
      Ocaml_compiler["native_library_link_mllib"]("%.mllib","%.cmxa"));
    Rule["rule"]
     ("ocaml: p.cmx & p.o -> p.cmxa & p.a",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmxa",/* :: */[0,x_p_a,/* [] */0]]],
      /* Some */[0,/* :: */[0,"%.p.cmx",/* :: */[0,x_p_o,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_profile_library_link"]("%.p.cmx","%.p.cmxa"));
    Rule["rule"]
     ("ocaml: cmx & o -> cmxa & a",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmxa",/* :: */[0,x_a,/* [] */0]]],
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "Just as you can build a .cma from a .cmo in absence of .mllib file, you can build a .cmxa (native archive file for static linking only) from a .cmx, which will include the local modules it depends upon, transitivitely."],
      Ocaml_compiler["native_library_link"]("%.cmx","%.cmxa"));
    Rule["rule"]
     ("ocaml: mldylib & p.cmx* & p.o* -> p.cmxs & p.so",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmxs",/* :: */[0,x_p_dll,/* [] */0]]],
      /* None */0,
      /* None */0,
      [/* Some */0,"%.mldylib"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_profile_shared_library_link_mldylib"]
       ("%.mldylib","%.p.cmxs"));
    Rule["rule"]
     ("ocaml: mldylib & cmx* & o* -> cmxs & so",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmxs",/* :: */[0,x_dll,/* [] */0]]],
      /* None */0,
      /* None */0,
      [/* Some */0,"%.mldylib"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "Builds a .cmxs (native archive for dynamic linking) containing exactly the modules listed in the corresponding .mldylib file."],
      Ocaml_compiler["native_shared_library_link_mldylib"]
       ("%.mldylib","%.cmxs"));
    Rule["rule"]
     ("ocaml: p.cmx & p.o -> p.cmxs & p.so",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmxs",/* :: */[0,x_p_dll,/* [] */0]]],
      /* Some */[0,/* :: */[0,"%.p.cmx",/* :: */[0,x_p_o,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_shared_library_link"]
       ([/* Some */0,[/* :: */0,"profile",/* [] */0]],"%.p.cmx","%.p.cmxs"));
    Rule["rule"]
     ("ocaml: p.cmxa & p.a -> p.cmxs & p.so",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.p.cmxs",/* :: */[0,x_p_dll,/* [] */0]]],
      /* Some */[0,/* :: */[0,"%.p.cmxa",/* :: */[0,x_p_a,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_shared_library_link"]
       ([/* Some */0,[/* :: */0,"profile",[/* :: */0,"linkall",/* [] */0]]],
        "%.p.cmxa",
        "%.p.cmxs"));
    Rule["rule"]
     ("ocaml: cmx & o -> cmxs",
      /* None */0,
      [/* Some */0,[/* :: */0,"%.cmxs",/* [] */0]],
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "If you have not created a foo.mldylib file for a compilation unit foo.cmx, the target foo.cmxs will produce a .cmxs file containing exactly the .cmx.\n\nNote: this differs from the behavior of .cmxa targets with no .mllib, as the dependencies of the modules will not be included: generally, the modules compiled as dynamic plugins depend on library modules that will be already linked in the executable, and that the .cmxs should therefore not duplicate."],
      Ocaml_compiler["native_shared_library_link"]
       (/* None */0,"%.cmx","%.cmxs"));
    Rule["rule"]
     ("ocaml: cmx & o -> cmxs & so",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmxs",/* :: */[0,x_dll,/* [] */0]]],
      /* Some */[0,/* :: */[0,"%.cmx",/* :: */[0,x_o,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["native_shared_library_link"]
       (/* None */0,"%.cmx","%.cmxs"));
    Rule["rule"]
     ("ocaml: cmxa & a -> cmxs & so",
      /* None */0,
      /* Some */[0,/* :: */[0,"%.cmxs",/* :: */[0,x_dll,/* [] */0]]],
      /* Some */[0,/* :: */[0,"%.cmxa",/* :: */[0,x_a,/* [] */0]]],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "This rule allows to build a .cmxs from a .cmxa, to avoid having to duplicate a .mllib file into a .mldylib."],
      Ocaml_compiler["native_shared_library_link"]
       ([/* Some */0,[/* :: */0,"linkall",/* [] */0]],"%.cmxa","%.cmxs"));
    Rule["rule"]
     ("ocaml dependencies ml",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.ml.depends"],
      [/* Some */0,"%.ml"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "OCamlbuild will use ocamldep to approximate dependencies of a source file. The ocamldep tool being purely syntactic, it only computes an over-approximation of the dependencies.\n\nIf you manipulate a module Foo that is in fact a submodule Bar.Foo (after 'open Bar'), ocamldep may believe that your module depends on foo.ml -- when such a file also exists in your project. This can lead to spurious circular dependencies. In that case, you can use OCamlbuild_plugin.non_dependency in your myocamlbuild.ml to manually remove the spurious dependency. See the plugins API."],
      Ocaml_tools["ocamldep_command"]("%.ml","%.ml.depends"));
    Rule["rule"]
     ("ocaml dependencies mli",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.mli.depends"],
      [/* Some */0,"%.mli"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_tools["ocamldep_command"]("%.mli","%.mli.depends"));
    Rule["rule"]
     ("ocamllex",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.ml"],
      [/* Some */0,"%.mll"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_tools["ocamllex"]("%.mll"));
    Rule["rule"]
     ("ocaml: mli -> odoc",
      /* None */0,
      /* None */0,
      [/* Some */0,[/* :: */0,"%.mli",[/* :: */0,"%.mli.depends",/* [] */0]]],
      [/* Some */0,"%.odoc"],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       ".odoc are intermediate files storing the result of ocamldoc processing on a source file. See the various .docdir/... targets for ocamldoc."],
      Ocaml_tools["document_ocaml_interf"]("%.mli","%.odoc"));
    Rule["rule"]
     ("ocaml: ml -> odoc",
      /* None */0,
      /* None */0,
      [/* Some */0,[/* :: */0,"%.ml",[/* :: */0,"%.ml.depends",/* [] */0]]],
      [/* Some */0,"%.odoc"],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_tools["document_ocaml_implem"]("%.ml","%.odoc"));
    Rule["rule"]
     ("ocamldoc: document ocaml project odocl & *odoc -> docdir (html)",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.docdir/index.html"],
      [/* Some */0,"%.odocl"],
      [/* Some */0,"%.docdir/html.stamp"],
      /* None */0,
      [/* Some */0,
       "If you put a list of capitalized module names in a foo.odocl file, the target foo.docdir/index.html will call ocamldoc to produce the html documentation for these modules. See also the max|latex|doc target below."],
      Ocaml_tools["document_ocaml_project"]
       (/* Some */[0,Ocaml_tools["ocamldoc_l_dir"]],
        "%.odocl",
        "%.docdir/index.html",
        "%.docdir"));
    Rule["rule"]
     ("ocamldoc: document ocaml project odocl & *odoc -> docdir (man)",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.docdir/man"],
      [/* Some */0,"%.odocl"],
      [/* Some */0,"%.docdir/man.stamp"],
      /* None */0,
      /* None */0,
      Ocaml_tools["document_ocaml_project"]
       (/* Some */[0,Ocaml_tools["ocamldoc_l_dir"]],
        "%.odocl",
        "%.docdir/man",
        "%.docdir"));
    Rule["rule"]
     ("ocamldoc: document ocaml project odocl & *odoc -> man|latex|dot...",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%(dir).docdir/%(file)"],
      [/* Some */0,"%(dir).odocl"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_tools["document_ocaml_project"]
       (/* Some */[0,Ocaml_tools["ocamldoc_l_file"]],
        "%(dir).odocl",
        "%(dir).docdir/%(file)",
        "%(dir).docdir"));
    if(Options["use_menhir"][1]||Configuration["has_tag"]("use_menhir"))
     {Rule["rule"]
       ("ocaml: modular menhir (mlypack)",
        /* None */0,
        [/* Some */0,[/* :: */0,"%.mli",[/* :: */0,"%.ml",/* [] */0]]],
        [/* Some */0,[/* :: */0,"%.mlypack",/* [] */0]],
        /* None */0,
        /* None */0,
        /* None */0,
        /* None */0,
        [/* Some */0,
         "Menhir supports building a parser by composing several .mly files together, containing different parts of the grammar description. To use that feature with ocamlbuild, you should create a .mlypack file with the same syntax as .mllib or .mlpack files: a whitespace-separated list of the capitalized module names of the .mly files you want to combine together."],
        Ocaml_tools["menhir_modular"]("%","%.mlypack","%.mlypack.depends")),
      Rule["rule"]
       ("ocaml: menhir modular dependencies",
        /* None */0,
        /* None */0,
        /* None */0,
        [/* Some */0,"%.mlypack.depends"],
        [/* Some */0,"%.mlypack"],
        /* None */0,
        /* None */0,
        /* None */0,
        Ocaml_tools["menhir_modular_ocamldep_command"]
         ("%.mlypack","%.mlypack.depends")),
      Rule["rule"]
       ("ocaml: menhir",
        /* None */0,
        [/* Some */0,[/* :: */0,"%.ml",[/* :: */0,"%.mli",/* [] */0]]],
        [/* Some */0,
         [/* :: */0,"%.mly",[/* :: */0,"%.mly.depends",/* [] */0]]],
        /* None */0,
        /* None */0,
        /* None */0,
        /* None */0,
        [/* Some */0,
         "Invokes menhir to build the .ml and .mli files derived from a .mly grammar. If you want to use ocamlyacc instead, you must disable the -use-menhir option that was passed to ocamlbuild."],
        Ocaml_tools["menhir"]("%.mly")),
      Rule["rule"]
       ("ocaml: menhir dependencies",
        /* None */0,
        /* None */0,
        /* None */0,
        [/* Some */0,"%.mly.depends"],
        [/* Some */0,"%.mly"],
        /* None */0,
        /* None */0,
        /* None */0,
        Ocaml_tools["menhir_ocamldep_command"]("%.mly","%.mly.depends"))}
    else
     {Rule["rule"]
       ("ocamlyacc",
        /* None */0,
        [/* Some */0,[/* :: */0,"%.ml",[/* :: */0,"%.mli",/* [] */0]]],
        /* None */0,
        /* None */0,
        [/* Some */0,"%.mly"],
        /* None */0,
        /* None */0,
        [/* Some */0,
         "By default, ocamlbuild will use ocamlyacc to produce a .ml and .mly from a .mly file of the same name. You can also enable the -use-menhir option to use menhir instead. Menhir is a recommended replacement for ocamlyacc, that supports more feature, lets you write more readable grammars, and helps you understand conflicts."],
        Ocaml_tools["ocamlyacc"]("%.mly"))}
    
    Rule["rule"]
     ("ocaml C stubs: c -> o",
      /* None */0,
      /* None */0,
      /* None */0,
      /* Some */[0,x_o],
      [/* Some */0,"%.c"],
      /* None */0,
      /* None */0,
      /* None */0,
      function(env,_build)
       {var c=env("%.c");
        
        var o=env(x_o);
        
        if(Tags["mem"]("native",Tools["tags_of_pathname"](c)))
         {var comp=Options["ocamlopt"][1];}
        else
         {var comp=Options["ocamlc"][1];}
        
        var
         cc=
          /* Cmd */[1,
           /* S */[0,
            /* :: */[0,
             comp,
             /* :: */[0,
              /* T */[5,
               Tags["Operators"][1]
                (Tags["Operators"][1](Tools["tags_of_pathname"](c),"c"),
                 "compile")],
              /* :: */[0,[/* A */1,"-c"],/* :: */[0,/* Px */[3,c],/* [] */0]]]]]];
        
        if
         (CamlPrimtivie["caml_string_equal"]
           (Pathname["dirname"](o),Pathname["current_dir_name"]))
         {return cc;}
        else
         {return /* Seq */[0,
                  /* :: */[0,
                   cc,
                   /* :: */[0,
                    Rule["Common_commands"][1](Pathname["basename"](o),o),
                    /* [] */0]]];
          }
        });
    Rule["rule"]
     ("ocaml: ml & ml.depends & *cmi -> .inferred.mli",
      /* None */0,
      /* None */0,
      [/* Some */0,[/* :: */0,"%.ml",[/* :: */0,"%.ml.depends",/* [] */0]]],
      [/* Some */0,"%.inferred.mli"],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The target foo.inferred.mli will produce a .mli that exposes all the declarations in foo.ml, as obtained by direct invocation of `ocamlc -i`."],
      Ocaml_tools["infer_interface"]("%.ml","%.inferred.mli"));
    Rule["rule"]
     ("ocaml: mltop -> top",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.top"],
      [/* Some */0,"%.mltop"],
      /* None */0,
      /* None */0,
      /* None */0,
      Ocaml_compiler["byte_toplevel_link_mltop"]("%.mltop","%.top"));
    Rule["rule"]
     ("preprocess: ml -> pp.ml",
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"%.pp.ml"],
      [/* Some */0,"%.ml"],
      /* None */0,
      /* None */0,
      [/* Some */0,
       "The target foo.pp.ml should generate a source file equivalent to foo.ml after syntactic preprocessors (camlp4, etc.) have been applied.\n\nWarning: This option is currently known to malfunction when used together with -use-ocamlfind (for syntax extensions coming from ocamlfind packages). Direct compilation of the corresponding file to produce a .cmx or .cmo will still work well."],
      Ocaml_tools["camlp4"](/* None */0,"pp.ml","%.ml","%.pp.ml"));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"pp",/* [] */0]],
      /* S */[0,
       My_std["List"][20]
        (function(x,acc){return /* :: */[0,/* Sh */[4,x],acc];},
         Options["ocaml_ppflags"][1],
         /* [] */0)]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"compile",/* [] */0]],
      Command["atomize"](Options["ocaml_cflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"c",[/* :: */0,"compile",/* [] */0]],
      Command["atomize"](Options["ocaml_cflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"link",/* [] */0]],
      Command["atomize"](Options["ocaml_lflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"c",[/* :: */0,"link",/* [] */0]],
      Command["atomize"](Options["ocaml_lflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"ocamlyacc",/* [] */0]],
      Command["atomize"](Options["ocaml_yaccflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"menhir",/* [] */0]],
      Command["atomize"](Options["ocaml_yaccflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"doc",/* [] */0]],
      Command["atomize"](Options["ocaml_docflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"ocamllex",/* [] */0]],
      Command["atomize"](Options["ocaml_lexflags"][1]));
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"menhir",[/* :: */0,"explain",/* [] */0]]],
      [/* S */0,[/* :: */0,[/* A */1,"--explain"],/* [] */0]]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"menhir",[/* :: */0,"infer",/* [] */0]]],
      [/* S */0,[/* :: */0,[/* A */1,"--infer"],/* [] */0]]);
    var
     match=
      My_std["List"][14]
       (function(mode)
         {Flags["flag"]
           (/* None */0,
            /* :: */[0,mode,[/* :: */0,"only_tokens",/* [] */0]],
            [/* S */0,[/* :: */0,[/* A */1,"--only-tokens"],/* [] */0]]);
          return Flags["pflag"]
                  (/* :: */[0,mode,/* [] */0],
                   "external_tokens",
                   function(name)
                    {return /* S */[0,
                             /* :: */[0,
                              [/* A */1,"--external-tokens"],
                              /* :: */[0,/* A */[1,name],/* [] */0]]];
                     });
          },
        [/* :: */0,"menhir",[/* :: */0,"menhir_ocamldep",/* [] */0]]);
    
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"ocamllex",[/* :: */0,"generate_ml",/* [] */0]]],
      [/* S */0,[/* :: */0,[/* A */1,"-ml"],/* [] */0]]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"byte",[/* :: */0,"link",/* [] */0]]],
      /* S */[0,
       My_std["List"][16]
        (function(x){return /* A */[1,Pervasives["^"](x,".cma")];},
         Options["ocaml_libs"][1])]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"native",[/* :: */0,"link",/* [] */0]]],
      /* S */[0,
       My_std["List"][16]
        (function(x){return /* A */[1,Pervasives["^"](x,".cmxa")];},
         Options["ocaml_libs"][1])]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"byte",[/* :: */0,"link",/* [] */0]]],
      /* S */[0,
       My_std["List"][16]
        (function(x){return /* A */[1,Pervasives["^"](x,".cmo")];},
         Options["ocaml_mods"][1])]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"native",[/* :: */0,"link",/* [] */0]]],
      /* S */[0,
       My_std["List"][16]
        (function(x){return /* A */[1,Pervasives["^"](x,".cmx")];},
         Options["ocaml_mods"][1])]);
    if(Options["use_ocamlfind"][1])
     {My_std["&"]
       (Flags["flag"]
         (/* None */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"link",[/* :: */0,"program",/* [] */0]]]),
        [/* A */1,"-linkpkg"]);
      My_std["&"]
       (Flags["flag"]
         (/* None */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"link",[/* :: */0,"toplevel",/* [] */0]]]),
        [/* A */1,"-linkpkg"]);
      My_std["&"]
       (Flags["flag"]
         (/* None */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"link",[/* :: */0,"output_obj",/* [] */0]]]),
        [/* A */1,"-linkpkg"]);
      My_std["&"]
       (Flags["flag"]
         (/* None */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"link",[/* :: */0,"linkpkg",/* [] */0]]]),
        [/* A */1,"-linkpkg"]);
      Flags["pflag"]
       ([/* :: */0,"ocaml",[/* :: */0,"link",/* [] */0]],
        "dontlink",
        function(pkg)
         {return /* S */[0,
                  /* :: */[0,
                   [/* A */1,"-dontlink"],
                   /* :: */[0,/* A */[1,pkg],/* [] */0]]];
          });
      var
       all_tags=
        [/* :: */0,
         [/* :: */0,
          "ocaml",
          [/* :: */0,"byte",[/* :: */0,"compile",/* [] */0]]],
         [/* :: */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"native",[/* :: */0,"compile",/* [] */0]]],
          [/* :: */0,
           [/* :: */0,"ocaml",[/* :: */0,"byte",[/* :: */0,"link",/* [] */0]]],
           [/* :: */0,
            [/* :: */0,
             "ocaml",
             [/* :: */0,"native",[/* :: */0,"link",/* [] */0]]],
            [/* :: */0,
             [/* :: */0,"ocaml",[/* :: */0,"ocamldep",/* [] */0]],
             [/* :: */0,
              [/* :: */0,"ocaml",[/* :: */0,"doc",/* [] */0]],
              [/* :: */0,
               [/* :: */0,"ocaml",[/* :: */0,"mktop",/* [] */0]],
               [/* :: */0,
                [/* :: */0,"ocaml",[/* :: */0,"infer_interface",/* [] */0]],
                /* [] */0]]]]]]]];
      
      var
       match$1=
        My_std["List"][14]
         (function(tags)
           {Flags["pflag"]
             (tags,
              "package",
              function(pkg)
               {return /* S */[0,
                        /* :: */[0,
                         [/* A */1,"-package"],
                         /* :: */[0,/* A */[1,pkg],/* [] */0]]];
                });
            if(!My_std["List"][30]("ocamldep",tags))
             {Flags["pflag"]
               (tags,
                "predicate",
                function(pkg)
                 {return /* S */[0,
                          /* :: */[0,
                           [/* A */1,"-predicates"],
                           /* :: */[0,/* A */[1,pkg],/* [] */0]]];
                  })}
            else
             {}
            
            return Flags["pflag"]
                    (tags,
                     "syntax",
                     function(pkg)
                      {return /* S */[0,
                               /* :: */[0,
                                [/* A */1,"-syntax"],
                                /* :: */[0,/* A */[1,pkg],/* [] */0]]];
                       });
            },
          all_tags);
      }
    else
     {try
       {var
         pkgs=
          My_std["List"][16](Findlib["query"],Options["ocaml_pkgs"][1]);
        
        Flags["flag"]
         (/* None */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"byte",[/* :: */0,"compile",/* [] */0]]],
          Findlib["compile_flags_byte"](pkgs));
        Flags["flag"]
         (/* None */0,
          [/* :: */0,
           "ocaml",
           [/* :: */0,"native",[/* :: */0,"compile",/* [] */0]]],
          Findlib["compile_flags_native"](pkgs));
        Flags["flag"]
         (/* None */0,
          [/* :: */0,"ocaml",[/* :: */0,"byte",[/* :: */0,"link",/* [] */0]]],
          Findlib["link_flags_byte"](pkgs));
        var
         match$1=
          Flags["flag"]
           (/* None */0,
            [/* :: */0,
             "ocaml",
             [/* :: */0,"native",[/* :: */0,"link",/* [] */0]]],
            Findlib["link_flags_native"](pkgs));
        }
      catch(exn)
       {if(exn[1]=Findlib["Findlib_error"])
         {var match$1=Findlib["report_error"](exn[2]);}
        else
         {throw exn;}
        }
      }
    
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"native",[/* :: */0,"compile",/* [] */0]]],
      "for-pack",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-for-pack"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"native",[/* :: */0,"pack",/* [] */0]]],
      "for-pack",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-for-pack"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"native",[/* :: */0,"compile",/* [] */0]]],
      "inline",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-inline"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    My_std["List"][14]
     (function(pp)
       {Flags["pflag"]
         ([/* :: */0,"ocaml",[/* :: */0,"compile",/* [] */0]],
          pp,
          function(param$1)
           {return /* S */[0,
                    /* :: */[0,
                     /* A */[1,Pervasives["^"]("-",pp)],
                     /* :: */[0,/* A */[1,param$1],/* [] */0]]];
            });
        Flags["pflag"]
         ([/* :: */0,"ocaml",[/* :: */0,"ocamldep",/* [] */0]],
          pp,
          function(param$1)
           {return /* S */[0,
                    /* :: */[0,
                     /* A */[1,Pervasives["^"]("-",pp)],
                     /* :: */[0,/* A */[1,param$1],/* [] */0]]];
            });
        Flags["pflag"]
         ([/* :: */0,"ocaml",[/* :: */0,"doc",/* [] */0]],
          pp,
          function(param$1)
           {return /* S */[0,
                    /* :: */[0,
                     /* A */[1,Pervasives["^"]("-",pp)],
                     /* :: */[0,/* A */[1,param$1],/* [] */0]]];
            });
        return Flags["pflag"]
                ([/* :: */0,"ocaml",[/* :: */0,"infer_interface",/* [] */0]],
                 pp,
                 function(param$1)
                  {return /* S */[0,
                           /* :: */[0,
                            /* A */[1,Pervasives["^"]("-",pp)],
                            /* :: */[0,/* A */[1,param$1],/* [] */0]]];
                   });
        },
      [/* :: */0,"pp",[/* :: */0,"ppx",/* [] */0]]);
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"compile",/* [] */0]],
      "warn",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-w"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"compile",/* [] */0]],
      "warn_error",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-warn-error"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"ocamldep",/* [] */0]],
      "open",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-open"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"compile",/* [] */0]],
      "open",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-open"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    Flags["pflag"]
     ([/* :: */0,"ocaml",[/* :: */0,"link",/* [] */0]],
      "runtime_variant",
      function(param$1)
       {return /* S */[0,
                /* :: */[0,
                 [/* A */1,"-runtime-variant"],
                 /* :: */[0,/* A */[1,param$1],/* [] */0]]];
        });
    var match$2=/* () */0;
    
    var
     camlp4_flags=
      function(camlp4s)
       {return My_std["List"][14]
                (function(camlp4)
                  {return Flags["flag"]
                           (/* None */0,
                            /* :: */[0,
                             "ocaml",
                             /* :: */[0,"pp",/* :: */[0,camlp4,/* [] */0]]],
                            /* A */[1,camlp4]);
                   },
                 camlp4s);
        };
    
    var
     p4_series=
      [/* :: */0,
       "camlp4o",
       [/* :: */0,
        "camlp4r",
        [/* :: */0,
         "camlp4of",
         [/* :: */0,
          "camlp4rf",
          [/* :: */0,"camlp4orf",[/* :: */0,"camlp4oof",/* [] */0]]]]]];
    
    var
     p4_opt_series=
      My_std["List"][16]
       (function(f){return Pervasives["^"](f,".opt");},p4_series);
    
    camlp4_flags(p4_series);
    camlp4_flags(p4_opt_series);
    var
     camlp4_flags$prime=
      function(camlp4s)
       {return My_std["List"][14]
                (function(param$1)
                  {return Flags["flag"]
                           (/* None */0,
                            /* :: */[0,
                             "ocaml",
                             /* :: */[0,"pp",/* :: */[0,param$1[1],/* [] */0]]],
                            param$1[2]);
                   },
                 camlp4s);
        };
    
    camlp4_flags$prime
     ([/* :: */0,
       [/* tuple */0,
        "camlp4orr",
        [/* S */0,
         [/* :: */0,
          [/* A */1,"camlp4of"],
          [/* :: */0,
           [/* A */1,"-parser"],
           [/* :: */0,[/* A */1,"reloaded"],/* [] */0]]]]],
       [/* :: */0,
        [/* tuple */0,
         "camlp4rrr",
         [/* S */0,
          [/* :: */0,
           [/* A */1,"camlp4rf"],
           [/* :: */0,
            [/* A */1,"-parser"],
            [/* :: */0,[/* A */1,"reloaded"],/* [] */0]]]]],
        /* [] */0]]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"pp",[/* :: */0,"camlp4:no_quot",/* [] */0]]],
      [/* A */1,"-no_quot"]);
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "dynlink");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "unix");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "str");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "bigarray");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "nums");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "dbm");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "graphics");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      /* None */0,
      [/* Some */0,"use_toplevel"],
      "toplevellib");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      [/* Some */0,"+ocamldoc"],
      /* None */0,
      "ocamldoc");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      [/* Some */0,"+ocamlbuild"],
      [/* Some */0,"use_ocamlbuild"],
      "ocamlbuildlib");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      [/* Some */0,"+camlp4"],
      [/* Some */0,"use_camlp4"],
      "camlp4lib");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      [/* Some */0,"+camlp4"],
      [/* Some */0,"use_old_camlp4"],
      "camlp4");
    Ocaml_utils["ocaml_lib"]
     ([/* Some */0,/* true */1],
      /* None */0,
      /* None */0,
      [/* Some */0,"+camlp4"],
      [/* Some */0,"use_camlp4_full"],
      "camlp4fulllib");
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"use_camlp4_full",/* [] */0]]],
      [/* S */0,
       [/* :: */0,
        [/* A */1,"-I"],
        [/* :: */0,
         [/* A */1,"+camlp4/Camlp4Parsers"],
         [/* :: */0,
          [/* A */1,"-I"],
          [/* :: */0,
           [/* A */1,"+camlp4/Camlp4Printers"],
           [/* :: */0,
            [/* A */1,"-I"],
            [/* :: */0,[/* A */1,"+camlp4/Camlp4Filters"],/* [] */0]]]]]]]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "use_camlp4_bin",
        [/* :: */0,"link",[/* :: */0,"byte",/* [] */0]]]],
      [/* A */1,"+camlp4/Camlp4Bin.cmo"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "use_camlp4_bin",
        [/* :: */0,"link",[/* :: */0,"native",/* [] */0]]]],
      [/* A */1,"+camlp4/Camlp4Bin.cmx"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"debug",[/* :: */0,"compile",[/* :: */0,"byte",/* [] */0]]]],
      [/* A */1,"-g"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "debug",
        [/* :: */0,"link",[/* :: */0,"byte",[/* :: */0,"program",/* [] */0]]]]],
      [/* A */1,"-g"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"debug",[/* :: */0,"pack",[/* :: */0,"byte",/* [] */0]]]],
      [/* A */1,"-g"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "debug",
        [/* :: */0,"compile",[/* :: */0,"native",/* [] */0]]]],
      [/* A */1,"-g"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "debug",
        [/* :: */0,
         "link",
         [/* :: */0,"native",[/* :: */0,"program",/* [] */0]]]]],
      [/* A */1,"-g"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"debug",[/* :: */0,"pack",[/* :: */0,"native",/* [] */0]]]],
      [/* A */1,"-g"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"c",[/* :: */0,"debug",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-g"]),
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"c",[/* :: */0,"debug",[/* :: */0,"link",/* [] */0]]],
      [/* A */1,"-g"]),
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "link",
        [/* :: */0,"native",[/* :: */0,"output_obj",/* [] */0]]]],
      [/* A */1,"-output-obj"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "link",
        [/* :: */0,"byte",[/* :: */0,"output_obj",/* [] */0]]]],
      [/* A */1,"-output-obj"]);
    My_std["&"]
     (Flags["flag"]
       (/* None */0,
        [/* :: */0,
         "ocaml",
         [/* :: */0,"link",[/* :: */0,"output_shared",/* [] */0]]]),
      [/* S */0,
       [/* :: */0,
        [/* A */1,"-cclib"],
        [/* :: */0,[/* A */1,"-shared"],/* [] */0]]]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"dtypes",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-dtypes"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"annot",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-annot"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"annot",[/* :: */0,"pack",/* [] */0]]],
      [/* A */1,"-annot"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"bin_annot",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-bin-annot"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"bin_annot",[/* :: */0,"pack",/* [] */0]]],
      [/* A */1,"-bin-annot"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"safe_string",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-safe-string"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"safe_string",[/* :: */0,"infer_interface",/* [] */0]]],
      [/* A */1,"-safe-string"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"unsafe_string",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-unsafe-string"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"unsafe_string",[/* :: */0,"infer_interface",/* [] */0]]],
      [/* A */1,"-unsafe-string"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"short_paths",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-short-paths"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"short_paths",[/* :: */0,"infer_interface",/* [] */0]]],
      [/* A */1,"-short-paths"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"rectypes",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-rectypes"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"rectypes",[/* :: */0,"infer_interface",/* [] */0]]],
      [/* A */1,"-rectypes"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"rectypes",[/* :: */0,"doc",/* [] */0]]],
      [/* A */1,"-rectypes"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"rectypes",[/* :: */0,"pack",/* [] */0]]],
      [/* A */1,"-rectypes"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"principal",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-principal"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"principal",[/* :: */0,"infer_interface",/* [] */0]]],
      [/* A */1,"-principal"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"linkall",[/* :: */0,"link",/* [] */0]]],
      [/* A */1,"-linkall"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"link",[/* :: */0,"profile",[/* :: */0,"native",/* [] */0]]]],
      [/* A */1,"-p"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "link",
        [/* :: */0,
         "program",
         [/* :: */0,"custom",[/* :: */0,"byte",/* [] */0]]]]],
      [/* A */1,"-custom"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "link",
        [/* :: */0,
         "library",
         [/* :: */0,"custom",[/* :: */0,"byte",/* [] */0]]]]],
      [/* A */1,"-custom"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "compile",
        [/* :: */0,"profile",[/* :: */0,"native",/* [] */0]]]],
      [/* A */1,"-p"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"no_alias_deps",/* [] */0]]],
      [/* A */1,"-no-alias-deps"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"strict_formats",/* [] */0]]],
      [/* A */1,"-strict-formats"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "native",
        [/* :: */0,"compile",[/* :: */0,"opaque",/* [] */0]]]],
      [/* A */1,"-opaque"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "native",
        [/* :: */0,"compile",[/* :: */0,"no_float_const_prop",/* [] */0]]]],
      [/* A */1,"-no-float-const-prop"]),
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"keep_docs",/* [] */0]]],
      [/* A */1,"-keep-docs"]),
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"keep_locs",/* [] */0]]],
      [/* A */1,"-keep-locs"]),
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"absname",[/* :: */0,"compile",/* [] */0]]],
      [/* A */1,"-absname"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"absname",[/* :: */0,"infer_interface",/* [] */0]]],
      [/* A */1,"-absname"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "byte",
        [/* :: */0,"compile",[/* :: */0,"compat_32",/* [] */0]]]],
      [/* A */1,"-compat-32"]),
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"compile",[/* :: */0,"thread",/* [] */0]]],
      [/* A */1,"-thread"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"link",[/* :: */0,"thread",/* [] */0]]],
      [/* A */1,"-thread"]);
    if(!Options["use_ocamlfind"][1])
     {Flags["flag"]
       (/* None */0,
        [/* :: */0,"ocaml",[/* :: */0,"doc",[/* :: */0,"thread",/* [] */0]]],
        [/* S */0,
         [/* :: */0,
          [/* A */1,"-I"],
          [/* :: */0,[/* A */1,"+threads"],/* [] */0]]]),
      Flags["flag"]
       (/* None */0,
        [/* :: */0,
         "ocaml",
         [/* :: */0,
          "link",
          [/* :: */0,
           "thread",
           [/* :: */0,"native",[/* :: */0,"program",/* [] */0]]]]],
        [/* A */1,"threads.cmxa"]),
      Flags["flag"]
       (/* None */0,
        [/* :: */0,
         "ocaml",
         [/* :: */0,
          "link",
          [/* :: */0,
           "thread",
           [/* :: */0,"byte",[/* :: */0,"program",/* [] */0]]]]],
        [/* A */1,"threads.cma"]),
      Flags["flag"]
       (/* None */0,
        [/* :: */0,
         "ocaml",
         [/* :: */0,
          "link",
          [/* :: */0,
           "thread",
           [/* :: */0,"native",[/* :: */0,"toplevel",/* [] */0]]]]],
        [/* A */1,"threads.cmxa"]),
      Flags["flag"]
       (/* None */0,
        [/* :: */0,
         "ocaml",
         [/* :: */0,
          "link",
          [/* :: */0,
           "thread",
           [/* :: */0,"byte",[/* :: */0,"toplevel",/* [] */0]]]]],
        [/* A */1,"threads.cma"])}
    else
     {}
    
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"nopervasives",/* [] */0]]],
      [/* A */1,"-nopervasives"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"nolabels",/* [] */0]]],
      [/* A */1,"-nolabels"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,"ocaml",[/* :: */0,"ocamllex",[/* :: */0,"quiet",/* [] */0]]],
      [/* A */1,"-q"]);
    var
     ocaml_warn_flag=
      function(c)
       {Flags["flag"]
         ([/* Some */0,/* true */1],
          /* :: */[0,
           "ocaml",
           /* :: */[0,
            "compile",
            /* :: */[0,
             Format["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "warn_",
                 [/* Char */0,/* End_of_format */0]],
                "warn_%c"],
               Char["uppercase"](c)),
             /* [] */0]]],
          /* S */[0,
           /* :: */[0,
            [/* A */1,"-w"],
            /* :: */[0,
             /* A */[1,
              Format["sprintf"]
               ([/* Format */0,[/* Char */0,/* End_of_format */0],"%c"],
                Char["uppercase"](c))],
             /* [] */0]]]);
        Flags["flag"]
         ([/* Some */0,/* true */1],
          /* :: */[0,
           "ocaml",
           /* :: */[0,
            "compile",
            /* :: */[0,
             Format["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "warn_error_",
                 [/* Char */0,/* End_of_format */0]],
                "warn_error_%c"],
               Char["uppercase"](c)),
             /* [] */0]]],
          /* S */[0,
           /* :: */[0,
            [/* A */1,"-warn-error"],
            /* :: */[0,
             /* A */[1,
              Format["sprintf"]
               ([/* Format */0,[/* Char */0,/* End_of_format */0],"%c"],
                Char["uppercase"](c))],
             /* [] */0]]]);
        Flags["flag"]
         ([/* Some */0,/* true */1],
          /* :: */[0,
           "ocaml",
           /* :: */[0,
            "compile",
            /* :: */[0,
             Format["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "warn_",
                 [/* Char */0,/* End_of_format */0]],
                "warn_%c"],
               Char["lowercase"](c)),
             /* [] */0]]],
          /* S */[0,
           /* :: */[0,
            [/* A */1,"-w"],
            /* :: */[0,
             /* A */[1,
              Format["sprintf"]
               ([/* Format */0,[/* Char */0,/* End_of_format */0],"%c"],
                Char["lowercase"](c))],
             /* [] */0]]]);
        return Flags["flag"]
                ([/* Some */0,/* true */1],
                 /* :: */[0,
                  "ocaml",
                  /* :: */[0,
                   "compile",
                   /* :: */[0,
                    Format["sprintf"]
                     ([/* Format */0,
                       [/* String_literal */11,
                        "warn_error_",
                        [/* Char */0,/* End_of_format */0]],
                       "warn_error_%c"],
                      Char["lowercase"](c)),
                    /* [] */0]]],
                 /* S */[0,
                  /* :: */[0,
                   [/* A */1,"-warn-error"],
                   /* :: */[0,
                    /* A */[1,
                     Format["sprintf"]
                      ([/* Format */0,[/* Char */0,/* End_of_format */0],"%c"],
                       Char["lowercase"](c))],
                    /* [] */0]]]);
        };
    
    My_std["List"][14]
     (ocaml_warn_flag,
      [/* :: */0,
       65,
       [/* :: */0,
        67,
        [/* :: */0,
         68,
         [/* :: */0,
          69,
          [/* :: */0,
           70,
           [/* :: */0,
            75,
            [/* :: */0,
             76,
             [/* :: */0,
              77,
              [/* :: */0,
               80,
               [/* :: */0,
                82,
                [/* :: */0,
                 83,
                 [/* :: */0,
                  85,
                  [/* :: */0,
                   86,
                   [/* :: */0,88,[/* :: */0,89,[/* :: */0,90,/* [] */0]]]]]]]]]]]]]]]]);
    Flags["flag"]
     ([/* Some */0,/* true */1],
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"strict-sequence",/* [] */0]]],
      [/* A */1,"-strict-sequence"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"compile",[/* :: */0,"strict_sequence",/* [] */0]]],
      [/* A */1,"-strict-sequence"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "doc",
        [/* :: */0,"docdir",[/* :: */0,"extension:html",/* [] */0]]]],
      [/* A */1,"-html"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,"doc",[/* :: */0,"docdir",[/* :: */0,"manpage",/* [] */0]]]],
      [/* A */1,"-man"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "doc",
        [/* :: */0,"docfile",[/* :: */0,"extension:dot",/* [] */0]]]],
      [/* A */1,"-dot"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "doc",
        [/* :: */0,"docfile",[/* :: */0,"extension:tex",/* [] */0]]]],
      [/* A */1,"-latex"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "doc",
        [/* :: */0,"docfile",[/* :: */0,"extension:ltx",/* [] */0]]]],
      [/* A */1,"-latex"]);
    Flags["flag"]
     (/* None */0,
      [/* :: */0,
       "ocaml",
       [/* :: */0,
        "doc",
        [/* :: */0,"docfile",[/* :: */0,"extension:texi",/* [] */0]]]],
      [/* A */1,"-texi"]);
    Ocaml_utils["ocaml_lib"]
     (/* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "ocamlbuildlib");
    Ocaml_utils["ocaml_lib"]
     (/* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      /* None */0,
      "ocamlbuildlightlib");
    var
     M=
      [0,
       ext_lib,
       ext_obj,
       ext_dll,
       x_o,
       x_a,
       x_dll,
       x_p_o,
       x_p_a,
       x_p_dll,
       x_byte_c,
       x_byte_o,
       x_byte_so,
       x_native_o,
       x_native_so,
       camlp4_flags,
       p4_series,
       p4_opt_series,
       camlp4_flags$prime,
       ocaml_warn_flag];
    
    return /* () */0;
    };

module["exports"]={"init":init};

