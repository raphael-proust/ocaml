var Ocaml_utils=require("Ocaml_utils");
var Tools=require("Tools");
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
var Ocaml_tools=require("Ocaml_tools");
var Tags=require("Tags");
var Configuration=require("Configuration");
var Findlib=require("Findlib");
var Ocamlbuild_config=require("Ocamlbuild_config");
var
 link_C_library=
  function(clib,a,libname,env,build)
   {var clib$1=env(clib);
    var a$1=env(a);
    var libname$1=env(libname);
    var $js=Ocaml_utils["string_list_of_file"];
    var objs=$js(clib$1);
    var $js$1=Pathname["include_dirs_of"];
    var $js$2=Pathname["dirname"];
    var $js$3=$js$2(a$1);
    var include_dirs=$js$1($js$3);
    var
     obj_of_o=
      function(x)
       {var $js$4=Filename["check_suffix"];
        var $js$5=$js$4(x,".o");
        var $js$6=$js$5&&"unknown primitive:caml_string_notequal";
        if($js$6)
         {var $js$7=Pathname["update_extension"];
          return $js$7(Options["ext_obj"][1],x)}
        else
         {return x}};
    var $js$4=My_std["List"][16];
    var
     $js$5=
      $js$4
       (function(o)
         {var $js$6=My_std["List"][16];
          return $js$6
                  (function(dir)
                    {var $js$7=Pathname["Operators"][1];
                     var $js$8=obj_of_o(o);
                     return $js$7(dir,$js$8)},
                   include_dirs)},
        objs);
    var resluts=build($js$5);
    var $js$6=My_std["List"][16];
    var
     objs$1=
      $js$6
       (function(param)
         {var $js$7=param;
          if($js$7==0)
           {return param[1]}
          else
           if($js$7==1){return "unknown primitive:raise"}},
        resluts);
    var $js$7=Tags["Operators"][1];
    var $js$8=Tags["Operators"][1];
    var $js$9=Tools["tags_of_pathname"];
    var $js$10=$js$9(a$1);
    var $js$11=$js$8($js$10,"c");
    var $js$12=$js$7($js$11,"ocamlmklib");
    var $js$13=[5,$js$12];
    var $js$14=Command["atomize"];
    var $js$15=$js$14(objs$1);
    var $js$16=[0,$js$15,0];
    var $js$17=[0,$js$13,$js$16];
    var $js$18=[0,[3,libname$1],$js$17];
    var $js$19=[0,[1,"-o"],$js$18];
    var $js$20=[0,Options["ocamlmklib"][1],$js$19];
    var $js$21=[0,$js$20];
    return [1,$js$21]};
var C_tools=[0,link_C_library];
var
 init=
  function(param)
   {var ext_lib=Options["ext_lib"][1];
    var ext_obj=Options["ext_obj"][1];
    var ext_dll=Options["ext_dll"][1];
    var $js=Pathname["Operators"][2];
    var x_o=$js("%",ext_obj);
    var $js$1=Pathname["Operators"][2];
    var x_a=$js$1("%",ext_lib);
    var $js$2=Pathname["Operators"][2];
    var x_dll=$js$2("%",ext_dll);
    var $js$3=Pathname["Operators"][2];
    var x_p_o=$js$3("%.p",ext_obj);
    var $js$4=Pathname["Operators"][2];
    var x_p_a=$js$4("%.p",ext_lib);
    var $js$5=Pathname["Operators"][2];
    var x_p_dll=$js$5("%.p",ext_dll);
    var x_byte_c="%.byte.c";
    var $js$6=Pathname["Operators"][2];
    var x_byte_o=$js$6("%.byte",ext_obj);
    var $js$7=Pathname["Operators"][2];
    var x_byte_so=$js$7("%.byte",ext_dll);
    var $js$8=Pathname["Operators"][2];
    var x_native_o=$js$8("%.native",ext_obj);
    var $js$9=Pathname["Operators"][2];
    var x_native_so=$js$9("%.native",ext_dll);
    var $js$10=Rule["rule"];
    $js$10
     ("target files",
      0,
      0,
      0,
      0,
      [0,"%.itarget"],
      [0,"%.otarget"],
      0,
      [0,
       "If foo.itarget contains a list of ocamlbuild targets, asking ocamlbuild to produce foo.otarget will build each of those targets in turn."],
      function(env,build)
       {var itarget=env("%.itarget");
        var $js$11=Pathname["dirname"];
        var dir=$js$11(itarget);
        var $js$12=Ocaml_utils["string_list_of_file"];
        var targets=$js$12(itarget);
        var $js$13=My_std["List"][14];
        var $js$14=My_std["List"][16];
        var
         $js$15=
          $js$14
           (function(x)
             {var $js$16=Pathname["Operators"][1];
              var $js$17=$js$16(dir,x);
              return [0,$js$17,0]},
            targets);
        var $js$16=build($js$15);
        $js$13(My_std["Outcome"][2],$js$16);
        var $js$17=Options["make_links"][1];
        if($js$17)
         {var
           link=
            function(x)
             {var $js$18=Pathname["Operators"][1];
              var $js$19=$js$18(Options["build_dir"][1],x);
              var $js$20=[2,$js$19];
              var $js$21=[0,$js$20,[0,[1,Pathname["parent_dir_name"]],0]];
              var $js$22=[0,[1,"-sf"],$js$21];
              var $js$23=[0,[1,"ln"],$js$22];
              var $js$24=[0,$js$23];
              return [1,$js$24]};
          var $js$18=My_std["List"][16];
          var
           $js$19=
            $js$18
             (function(x)
               {var $js$20=Pathname["Operators"][1];
                var $js$21=$js$20(dir,x);
                return link($js$21)},
              targets);
          return [0,$js$19]}
        else
         {return 0}});
    var $js$11=Rule["rule"];
    var $js$12=Ocaml_compiler["compile_ocaml_interf"];
    var $js$13=$js$12("%.mli","%.cmi");
    $js$11
     ("ocaml: mli -> cmi",
      0,
      0,
      [0,[0,"%.mli",[0,"%.mli.depends",0]]],
      [0,"%.cmi"],
      0,
      0,
      0,
      0,
      $js$13);
    var $js$14=Rule["rule"];
    var $js$15=Ocaml_compiler["byte_debug_pack_mlpack"];
    var $js$16=$js$15("%.mlpack","%.d.cmo");
    $js$14
     ("ocaml: mlpack & d.cmo* -> d.cmo & cmi",
      0,
      [0,[0,"%.d.cmo",0]],
      [0,[0,"%.mlpack",[0,"%.cmi",0]]],
      0,
      0,
      0,
      0,
      0,
      $js$16);
    var $js$17=Rule["rule"];
    var $js$18=Ocaml_compiler["byte_pack_mlpack"];
    var $js$19=$js$18("%.mlpack","%.cmo");
    $js$17
     ("ocaml: mlpack & cmo* & cmi -> cmo",
      0,
      0,
      [0,[0,"%.mli",[0,"%.cmi",[0,"%.mlpack",0]]]],
      [0,"%.cmo"],
      0,
      0,
      0,
      [0,
       "If foo.mlpack contains a list of capitalized module names, the target foo.cmo will produce a packed module containing those modules as submodules. You can also have a foo.mli file to restrict the interface of the resulting module.\n\nWarning: to produce a native foo.cmx out of a foo.mlpack, you must manually tag the included compilation units with for-pack(foo). See the documentation of the corresponding rules for more details.\n\nThe modules named in the .mlpack will be dynamic dependencies of the compilation action. You cannot give the .mlpack the same name as one of the module it contains, as this would create a circular dependency."],
      $js$19);
    var $js$20=Rule["rule"];
    var $js$21=Ocaml_compiler["byte_pack_mlpack"];
    var $js$22=$js$21("%.mlpack","%.cmo");
    $js$20
     ("ocaml: mlpack & cmo* -> cmo & cmi",
      0,
      [0,[0,"%.cmo",[0,"%.cmi",0]]],
      0,
      0,
      [0,"%.mlpack"],
      0,
      0,
      0,
      $js$22);
    var $js$23=Rule["rule"];
    var $js$24=Ocaml_compiler["byte_compile_ocaml_implem"];
    var $js$25=$js$24([0,"debug"],"%.ml","%.d.cmo");
    $js$23
     ("ocaml: ml & cmi -> d.cmo",
      0,
      0,
      [0,[0,"%.mli",[0,"%.ml",[0,"%.ml.depends",[0,"%.cmi",0]]]]],
      [0,"%.d.cmo"],
      0,
      0,
      0,
      [0,
       "The foo.d.cmo target compiles foo.ml with the 'debug' tag enabled (-g).See also foo.d.byte.\n\nFor technical reason, .d.cmx and .d.native are not yet supported, so you should explicitly add the 'debug' tag to native targets (both compilation and linking)."],
      $js$25);
    var $js$26=Rule["rule"];
    var $js$27=Ocaml_compiler["byte_compile_ocaml_implem"];
    var $js$28=$js$27(0,"%.ml","%.cmo");
    $js$26
     ("ocaml: ml & cmi -> cmo",
      0,
      0,
      [0,[0,"%.mli",[0,"%.ml",[0,"%.ml.depends",[0,"%.cmi",0]]]]],
      [0,"%.cmo"],
      0,
      0,
      0,
      0,
      $js$28);
    var $js$29=Rule["rule"];
    var $js$30=Ocaml_compiler["native_profile_pack_mlpack"];
    var $js$31=$js$30("%.mlpack","%.p.cmx");
    $js$29
     ("ocaml: mlpack & cmi & p.cmx* & p.o* -> p.cmx & p.o",
      0,
      [0,[0,"%.p.cmx",[0,x_p_o,0]]],
      [0,[0,"%.mlpack",[0,"%.cmi",0]]],
      0,
      0,
      0,
      0,
      0,
      $js$31);
    var $js$32=Rule["rule"];
    var $js$33=Ocaml_compiler["native_pack_mlpack"];
    var $js$34=$js$33("%.mlpack","%.cmx");
    $js$32
     ("ocaml: mlpack & cmi & cmx* & o* -> cmx & o",
      0,
      [0,[0,"%.cmx",[0,x_o,0]]],
      [0,[0,"%.mlpack",[0,"%.cmi",0]]],
      0,
      0,
      0,
      0,
      [0,
       'If foo.mlpack contains a list of capitalized module names, the target foo.cmx will produce a packed module containing those modules as submodules.\n\nWarning: The .cmx files that will be included must be manually tagged with the tag "for-pack(foo)". This means that you cannot include the same bar.cmx in several .mlpack files, and that you should not use an included .cmx as a separate module on its own.\n\nThis requirement comes from a technical limitation of native module packing: ocamlopt needs the -for-pack argument to be passed ahead of time, when compiling each included submodule, because there is no reliable, portable way to rewrite native object files afterwards.'],
      $js$34);
    var $js$35=Rule["rule"];
    var $js$36=Ocaml_compiler["native_compile_ocaml_implem"];
    var $js$37=$js$36([0,"profile"],[0,"p.cmx"],"%.ml");
    $js$35
     ("ocaml: ml & cmi -> p.cmx & p.o",
      0,
      [0,[0,"%.p.cmx",[0,x_p_o,0]]],
      [0,[0,"%.ml",[0,"%.ml.depends",[0,"%.cmi",0]]]],
      0,
      0,
      0,
      0,
      [0,
       "The foo.p.cmx target compiles foo.ml with the 'profile' tag enabled (-p). Note that ocamlbuild provides no support for the bytecode profiler, which works completely differently."],
      $js$37);
    var $js$38=Rule["rule"];
    var $js$39=Ocaml_compiler["native_compile_ocaml_implem"];
    var $js$40=$js$39(0,0,"%.ml");
    $js$38
     ("ocaml: ml & cmi -> cmx & o",
      0,
      [0,[0,"%.cmx",[0,x_o,0]]],
      [0,[0,"%.ml",[0,"%.ml.depends",[0,"%.cmi",0]]]],
      0,
      0,
      0,
      0,
      0,
      $js$40);
    var $js$41=Rule["rule"];
    var $js$42=Ocaml_compiler["byte_compile_ocaml_implem"];
    var $js$43=$js$42([0,"debug"],"%.ml","%.d.cmo");
    $js$41
     ("ocaml: ml -> d.cmo & cmi",
      0,
      [0,[0,"%.d.cmo",0]],
      [0,[0,"%.ml",[0,"%.ml.depends",[0,"%.cmi",0]]]],
      0,
      0,
      0,
      0,
      0,
      $js$43);
    var $js$44=Rule["rule"];
    var $js$45=Ocaml_compiler["byte_compile_ocaml_implem"];
    var $js$46=$js$45(0,"%.ml","%.cmo");
    $js$44
     ("ocaml: ml -> cmo & cmi",
      0,
      [0,[0,"%.cmo",[0,"%.cmi",0]]],
      [0,[0,"%.ml",[0,"%.ml.depends",0]]],
      0,
      0,
      0,
      0,
      [0,
       "This rule allows to produce a .cmi from a .ml file when the corresponding .mli is missing.\n\nNote: you are strongly encourage to have a .mli file for each of your .ml module, as it is a good development practice which also simplifies the way build systems work, as it avoids producing .cmi files as a silent side-effect of another compilation action."],
      $js$46);
    var $js$47=Rule["rule"];
    var $js$48=Ocaml_compiler["byte_debug_link"];
    var $js$49=$js$48("%.d.cmo","%.d.byte");
    $js$47
     ("ocaml: d.cmo* -> d.byte",
      0,
      0,
      0,
      [0,"%.d.byte"],
      [0,"%.d.cmo"],
      0,
      0,
      [0,
       "The target foo.d.byte will build a bytecode executable with debug information enabled."],
      $js$49);
    var $js$50=Rule["rule"];
    var $js$51=Ocaml_compiler["byte_link"];
    var $js$52=$js$51("%.cmo","%.byte");
    $js$50("ocaml: cmo* -> byte",0,0,0,[0,"%.byte"],[0,"%.cmo"],0,0,0,$js$52);
    var $js$53=Rule["rule"];
    var $js$54=Ocaml_compiler["byte_output_obj"];
    var $js$55=$js$54("%.cmo",x_byte_o);
    $js$53
     ("ocaml: cmo* -> byte.(o|obj)",
      0,
      0,
      0,
      [0,x_byte_o],
      [0,"%.cmo"],
      0,
      0,
      [0,
       "The foo.byte.o target, or foo.byte.obj under Windows, will produce an object file by passing the -output-obj option to the OCaml compiler. See also foo.byte.c, and foo.native.{o,obj}."],
      $js$55);
    var $js$56=Rule["rule"];
    var $js$57=Ocaml_compiler["byte_output_obj"];
    var $js$58=$js$57("%.cmo",x_byte_c);
    $js$56
     ("ocaml: cmo* -> byte.c",0,0,0,[0,x_byte_c],[0,"%.cmo"],0,0,0,$js$58);
    var $js$59=Rule["rule"];
    var $js$60=Ocaml_compiler["byte_output_shared"];
    var $js$61=$js$60("%.cmo",x_byte_so);
    $js$59
     ("ocaml: cmo* -> byte.(so|dll|dylib)",
      0,
      0,
      0,
      [0,x_byte_so],
      [0,"%.cmo"],
      0,
      0,
      [0,
       "The foo.byte.so target, or foo.byte.dll under Windows, or foo.byte.dylib under Mac OS X will produce a shared library file\n  by passing the -output-obj and -cclib -shared options to the OCaml compiler. See also foo.native.{so,dll,dylib}."],
      $js$61);
    var $js$62=Rule["rule"];
    var $js$63=Ocaml_compiler["native_profile_link"];
    var $js$64=$js$63("%.p.cmx","%.p.native");
    $js$62
     ("ocaml: p.cmx* & p.o* -> p.native",
      0,
      0,
      [0,[0,"%.p.cmx",[0,x_p_o,0]]],
      [0,"%.p.native"],
      0,
      0,
      0,
      [0,
       "The foo.p.native target builds the native executable with the 'profile' tag (-p) enabled throughout compilation and linking."],
      $js$64);
    var $js$65=Rule["rule"];
    var $js$66=Ocaml_compiler["native_link"];
    var $js$67=$js$66("%.cmx","%.native");
    $js$65
     ("ocaml: cmx* & o* -> native",
      0,
      0,
      [0,[0,"%.cmx",[0,x_o,0]]],
      [0,"%.native"],
      0,
      0,
      0,
      [0,"Builds a native executable"],
      $js$67);
    var $js$68=Rule["rule"];
    var $js$69=Ocaml_compiler["native_output_obj"];
    var $js$70=$js$69("%.cmx",x_native_o);
    $js$68
     ("ocaml: cmx* & o* -> native.(o|obj)",
      0,
      0,
      [0,[0,"%.cmx",[0,x_o,0]]],
      [0,x_native_o],
      0,
      0,
      0,
      0,
      $js$70);
    var $js$71=Rule["rule"];
    var $js$72=Ocaml_compiler["native_output_shared"];
    var $js$73=$js$72("%.cmx",x_native_so);
    $js$71
     ("ocaml: cmx* & o* -> native.(so|dll|dylib)",
      0,
      0,
      [0,[0,"%.cmx",[0,x_o,0]]],
      [0,x_native_so],
      0,
      0,
      0,
      0,
      $js$73);
    var $js$74=Rule["rule"];
    var $js$75=Ocaml_compiler["byte_debug_library_link_mllib"];
    var $js$76=$js$75("%.mllib","%.d.cma");
    $js$74
     ("ocaml: mllib & d.cmo* -> d.cma",
      0,
      0,
      0,
      [0,"%.d.cma"],
      [0,"%.mllib"],
      0,
      0,
      0,
      $js$76);
    var $js$77=Rule["rule"];
    var $js$78=Ocaml_compiler["byte_library_link_mllib"];
    var $js$79=$js$78("%.mllib","%.cma");
    $js$77
     ("ocaml: mllib & cmo* -> cma",
      0,
      0,
      0,
      [0,"%.cma"],
      [0,"%.mllib"],
      0,
      0,
      [0,
       "Build a .cma archive file (bytecode library) containing the list of modules given in the .mllib file of the same name. Note that the .cma archive will contain exactly the modules listed, so it may not be self-contained if some dependencies are missing."],
      $js$79);
    var $js$80=Rule["rule"];
    var $js$81=Ocaml_compiler["byte_debug_library_link"];
    var $js$82=$js$81("%.d.cmo","%.d.cma");
    $js$80
     ("ocaml: d.cmo* -> d.cma",0,0,0,[0,"%.d.cma"],[0,"%.d.cmo"],0,0,0,$js$82);
    var $js$83=Rule["rule"];
    var $js$84=Ocaml_compiler["byte_library_link"];
    var $js$85=$js$84("%.cmo","%.cma");
    $js$83
     ("ocaml: cmo* -> cma",
      0,
      0,
      0,
      [0,"%.cma"],
      [0,"%.cmo"],
      0,
      0,
      [0,
       "The preferred way to build a .cma archive is to create a .mllib file with a list of modules to include. It is however possible to build one from a .cmo of the same name; the archive will include this module and the local modules it depends upon, transitively."],
      $js$85);
    var $js$86=Rule["rule"];
    var $js$87=Pervasives["@"];
    var $js$88=Pathname["Operators"][2];
    var $js$89=$js$88("%(path:<**/>)lib%(libname:<*> and not <*.*>)",ext_lib);
    var $js$90=[0,$js$89,0];
    var $js$91=Ocamlbuild_config["supports_shared_libraries"];
    if($js$91)
     {var $js$92=Pathname["Operators"][2];
      var
       $js$93=
        $js$92("%(path:<**/>)dll%(libname:<*> and not <*.*>)",ext_dll);
      var $js$94=[0,$js$93,0]}
    else
     {var $js$94=0}
    var $js$95=$js$87($js$90,$js$94);
    var $js$96=[0,$js$95];
    var $js$97=C_tools[1];
    var $js$98=Pathname["Operators"][2];
    var $js$99=$js$98("%(path)lib%(libname)",ext_lib);
    var
     $js$100=
      $js$97("%(path)lib%(libname).clib",$js$99,"%(path)%(libname)");
    $js$86
     ("ocaml C stubs: clib & (o|obj)* -> (a|lib) & (so|dll)",
      0,
      $js$96,
      0,
      0,
      [0,"%(path)lib%(libname).clib"],
      0,
      0,
      0,
      $js$100);
    var $js$101=Rule["rule"];
    var $js$102=Ocaml_compiler["native_profile_library_link_mllib"];
    var $js$103=$js$102("%.mllib","%.p.cmxa");
    $js$101
     ("ocaml: mllib & p.cmx* & p.o* -> p.cmxa & p.a",
      0,
      [0,[0,"%.p.cmxa",[0,x_p_a,0]]],
      0,
      0,
      [0,"%.mllib"],
      0,
      0,
      0,
      $js$103);
    var $js$104=Rule["rule"];
    var $js$105=Ocaml_compiler["native_library_link_mllib"];
    var $js$106=$js$105("%.mllib","%.cmxa");
    $js$104
     ("ocaml: mllib & cmx* & o* -> cmxa & a",
      0,
      [0,[0,"%.cmxa",[0,x_a,0]]],
      0,
      0,
      [0,"%.mllib"],
      0,
      0,
      [0,
       "Creates a native archive file .cmxa, using the .mllib file as the .cma rule above. Note that whereas bytecode .cma can be used both for static and dynamic linking, .cmxa only support static linking. For an archive usable with Dynlink, see the rule producing a .cmxs from a .mldylib."],
      $js$106);
    var $js$107=Rule["rule"];
    var $js$108=Ocaml_compiler["native_profile_library_link"];
    var $js$109=$js$108("%.p.cmx","%.p.cmxa");
    $js$107
     ("ocaml: p.cmx & p.o -> p.cmxa & p.a",
      0,
      [0,[0,"%.p.cmxa",[0,x_p_a,0]]],
      [0,[0,"%.p.cmx",[0,x_p_o,0]]],
      0,
      0,
      0,
      0,
      0,
      $js$109);
    var $js$110=Rule["rule"];
    var $js$111=Ocaml_compiler["native_library_link"];
    var $js$112=$js$111("%.cmx","%.cmxa");
    $js$110
     ("ocaml: cmx & o -> cmxa & a",
      0,
      [0,[0,"%.cmxa",[0,x_a,0]]],
      [0,[0,"%.cmx",[0,x_o,0]]],
      0,
      0,
      0,
      0,
      [0,
       "Just as you can build a .cma from a .cmo in absence of .mllib file, you can build a .cmxa (native archive file for static linking only) from a .cmx, which will include the local modules it depends upon, transitivitely."],
      $js$112);
    var $js$113=Rule["rule"];
    var $js$114=Ocaml_compiler["native_profile_shared_library_link_mldylib"];
    var $js$115=$js$114("%.mldylib","%.p.cmxs");
    $js$113
     ("ocaml: mldylib & p.cmx* & p.o* -> p.cmxs & p.so",
      0,
      [0,[0,"%.p.cmxs",[0,x_p_dll,0]]],
      0,
      0,
      [0,"%.mldylib"],
      0,
      0,
      0,
      $js$115);
    var $js$116=Rule["rule"];
    var $js$117=Ocaml_compiler["native_shared_library_link_mldylib"];
    var $js$118=$js$117("%.mldylib","%.cmxs");
    $js$116
     ("ocaml: mldylib & cmx* & o* -> cmxs & so",
      0,
      [0,[0,"%.cmxs",[0,x_dll,0]]],
      0,
      0,
      [0,"%.mldylib"],
      0,
      0,
      [0,
       "Builds a .cmxs (native archive for dynamic linking) containing exactly the modules listed in the corresponding .mldylib file."],
      $js$118);
    var $js$119=Rule["rule"];
    var $js$120=Ocaml_compiler["native_shared_library_link"];
    var $js$121=$js$120([0,[0,"profile",0]],"%.p.cmx","%.p.cmxs");
    $js$119
     ("ocaml: p.cmx & p.o -> p.cmxs & p.so",
      0,
      [0,[0,"%.p.cmxs",[0,x_p_dll,0]]],
      [0,[0,"%.p.cmx",[0,x_p_o,0]]],
      0,
      0,
      0,
      0,
      0,
      $js$121);
    var $js$122=Rule["rule"];
    var $js$123=Ocaml_compiler["native_shared_library_link"];
    var
     $js$124=
      $js$123([0,[0,"profile",[0,"linkall",0]]],"%.p.cmxa","%.p.cmxs");
    $js$122
     ("ocaml: p.cmxa & p.a -> p.cmxs & p.so",
      0,
      [0,[0,"%.p.cmxs",[0,x_p_dll,0]]],
      [0,[0,"%.p.cmxa",[0,x_p_a,0]]],
      0,
      0,
      0,
      0,
      0,
      $js$124);
    var $js$125=Rule["rule"];
    var $js$126=Ocaml_compiler["native_shared_library_link"];
    var $js$127=$js$126(0,"%.cmx","%.cmxs");
    $js$125
     ("ocaml: cmx & o -> cmxs",
      0,
      [0,[0,"%.cmxs",0]],
      [0,[0,"%.cmx",[0,x_o,0]]],
      0,
      0,
      0,
      0,
      [0,
       "If you have not created a foo.mldylib file for a compilation unit foo.cmx, the target foo.cmxs will produce a .cmxs file containing exactly the .cmx.\n\nNote: this differs from the behavior of .cmxa targets with no .mllib, as the dependencies of the modules will not be included: generally, the modules compiled as dynamic plugins depend on library modules that will be already linked in the executable, and that the .cmxs should therefore not duplicate."],
      $js$127);
    var $js$128=Rule["rule"];
    var $js$129=Ocaml_compiler["native_shared_library_link"];
    var $js$130=$js$129(0,"%.cmx","%.cmxs");
    $js$128
     ("ocaml: cmx & o -> cmxs & so",
      0,
      [0,[0,"%.cmxs",[0,x_dll,0]]],
      [0,[0,"%.cmx",[0,x_o,0]]],
      0,
      0,
      0,
      0,
      0,
      $js$130);
    var $js$131=Rule["rule"];
    var $js$132=Ocaml_compiler["native_shared_library_link"];
    var $js$133=$js$132([0,[0,"linkall",0]],"%.cmxa","%.cmxs");
    $js$131
     ("ocaml: cmxa & a -> cmxs & so",
      0,
      [0,[0,"%.cmxs",[0,x_dll,0]]],
      [0,[0,"%.cmxa",[0,x_a,0]]],
      0,
      0,
      0,
      0,
      [0,
       "This rule allows to build a .cmxs from a .cmxa, to avoid having to duplicate a .mllib file into a .mldylib."],
      $js$133);
    var $js$134=Rule["rule"];
    var $js$135=Ocaml_tools["ocamldep_command"];
    var $js$136=$js$135("%.ml","%.ml.depends");
    $js$134
     ("ocaml dependencies ml",
      0,
      0,
      0,
      [0,"%.ml.depends"],
      [0,"%.ml"],
      0,
      0,
      [0,
       "OCamlbuild will use ocamldep to approximate dependencies of a source file. The ocamldep tool being purely syntactic, it only computes an over-approximation of the dependencies.\n\nIf you manipulate a module Foo that is in fact a submodule Bar.Foo (after 'open Bar'), ocamldep may believe that your module depends on foo.ml -- when such a file also exists in your project. This can lead to spurious circular dependencies. In that case, you can use OCamlbuild_plugin.non_dependency in your myocamlbuild.ml to manually remove the spurious dependency. See the plugins API."],
      $js$136);
    var $js$137=Rule["rule"];
    var $js$138=Ocaml_tools["ocamldep_command"];
    var $js$139=$js$138("%.mli","%.mli.depends");
    $js$137
     ("ocaml dependencies mli",
      0,
      0,
      0,
      [0,"%.mli.depends"],
      [0,"%.mli"],
      0,
      0,
      0,
      $js$139);
    var $js$140=Rule["rule"];
    var $js$141=Ocaml_tools["ocamllex"];
    var $js$142=$js$141("%.mll");
    $js$140("ocamllex",0,0,0,[0,"%.ml"],[0,"%.mll"],0,0,0,$js$142);
    var $js$143=Rule["rule"];
    var $js$144=Ocaml_tools["document_ocaml_interf"];
    var $js$145=$js$144("%.mli","%.odoc");
    $js$143
     ("ocaml: mli -> odoc",
      0,
      0,
      [0,[0,"%.mli",[0,"%.mli.depends",0]]],
      [0,"%.odoc"],
      0,
      0,
      0,
      [0,
       ".odoc are intermediate files storing the result of ocamldoc processing on a source file. See the various .docdir/... targets for ocamldoc."],
      $js$145);
    var $js$146=Rule["rule"];
    var $js$147=Ocaml_tools["document_ocaml_implem"];
    var $js$148=$js$147("%.ml","%.odoc");
    $js$146
     ("ocaml: ml -> odoc",
      0,
      0,
      [0,[0,"%.ml",[0,"%.ml.depends",0]]],
      [0,"%.odoc"],
      0,
      0,
      0,
      0,
      $js$148);
    var $js$149=Rule["rule"];
    var $js$150=Ocaml_tools["document_ocaml_project"];
    var
     $js$151=
      $js$150
       ([0,Ocaml_tools["ocamldoc_l_dir"]],
        "%.odocl",
        "%.docdir/index.html",
        "%.docdir");
    $js$149
     ("ocamldoc: document ocaml project odocl & *odoc -> docdir (html)",
      0,
      0,
      0,
      [0,"%.docdir/index.html"],
      [0,"%.odocl"],
      [0,"%.docdir/html.stamp"],
      0,
      [0,
       "If you put a list of capitalized module names in a foo.odocl file, the target foo.docdir/index.html will call ocamldoc to produce the html documentation for these modules. See also the max|latex|doc target below."],
      $js$151);
    var $js$152=Rule["rule"];
    var $js$153=Ocaml_tools["document_ocaml_project"];
    var
     $js$154=
      $js$153
       ([0,Ocaml_tools["ocamldoc_l_dir"]],"%.odocl","%.docdir/man","%.docdir");
    $js$152
     ("ocamldoc: document ocaml project odocl & *odoc -> docdir (man)",
      0,
      0,
      0,
      [0,"%.docdir/man"],
      [0,"%.odocl"],
      [0,"%.docdir/man.stamp"],
      0,
      0,
      $js$154);
    var $js$155=Rule["rule"];
    var $js$156=Ocaml_tools["document_ocaml_project"];
    var
     $js$157=
      $js$156
       ([0,Ocaml_tools["ocamldoc_l_file"]],
        "%(dir).odocl",
        "%(dir).docdir/%(file)",
        "%(dir).docdir");
    $js$155
     ("ocamldoc: document ocaml project odocl & *odoc -> man|latex|dot...",
      0,
      0,
      0,
      [0,"%(dir).docdir/%(file)"],
      [0,"%(dir).odocl"],
      0,
      0,
      0,
      $js$157);
    var $js$158=Configuration["has_tag"];
    var $js$159=$js$158("use_menhir");
    var $js$160=Options["use_menhir"][1]||$js$159;
    if($js$160)
     {var $js$161=Rule["rule"];
      var $js$162=Ocaml_tools["menhir_modular"];
      var $js$163=$js$162("%","%.mlypack","%.mlypack.depends");
      $js$161
       ("ocaml: modular menhir (mlypack)",
        0,
        [0,[0,"%.mli",[0,"%.ml",0]]],
        [0,[0,"%.mlypack",0]],
        0,
        0,
        0,
        0,
        [0,
         "Menhir supports building a parser by composing several .mly files together, containing different parts of the grammar description. To use that feature with ocamlbuild, you should create a .mlypack file with the same syntax as .mllib or .mlpack files: a whitespace-separated list of the capitalized module names of the .mly files you want to combine together."],
        $js$163);
      var $js$164=Rule["rule"];
      var $js$165=Ocaml_tools["menhir_modular_ocamldep_command"];
      var $js$166=$js$165("%.mlypack","%.mlypack.depends");
      $js$164
       ("ocaml: menhir modular dependencies",
        0,
        0,
        0,
        [0,"%.mlypack.depends"],
        [0,"%.mlypack"],
        0,
        0,
        0,
        $js$166);
      var $js$167=Rule["rule"];
      var $js$168=Ocaml_tools["menhir"];
      var $js$169=$js$168("%.mly");
      $js$167
       ("ocaml: menhir",
        0,
        [0,[0,"%.ml",[0,"%.mli",0]]],
        [0,[0,"%.mly",[0,"%.mly.depends",0]]],
        0,
        0,
        0,
        0,
        [0,
         "Invokes menhir to build the .ml and .mli files derived from a .mly grammar. If you want to use ocamlyacc instead, you must disable the -use-menhir option that was passed to ocamlbuild."],
        $js$169);
      var $js$170=Rule["rule"];
      var $js$171=Ocaml_tools["menhir_ocamldep_command"];
      var $js$172=$js$171("%.mly","%.mly.depends");
      $js$170
       ("ocaml: menhir dependencies",
        0,
        0,
        0,
        [0,"%.mly.depends"],
        [0,"%.mly"],
        0,
        0,
        0,
        $js$172)}
    else
     {var $js$173=Rule["rule"];
      var $js$174=Ocaml_tools["ocamlyacc"];
      var $js$175=$js$174("%.mly");
      $js$173
       ("ocamlyacc",
        0,
        [0,[0,"%.ml",[0,"%.mli",0]]],
        0,
        0,
        [0,"%.mly"],
        0,
        0,
        [0,
         "By default, ocamlbuild will use ocamlyacc to produce a .ml and .mly from a .mly file of the same name. You can also enable the -use-menhir option to use menhir instead. Menhir is a recommended replacement for ocamlyacc, that supports more feature, lets you write more readable grammars, and helps you understand conflicts."],
        $js$175)}
    var $js$176=Rule["rule"];
    $js$176
     ("ocaml C stubs: c -> o",
      0,
      0,
      0,
      [0,x_o],
      [0,"%.c"],
      0,
      0,
      0,
      function(env,_build)
       {var c=env("%.c");
        var o=env(x_o);
        var $js$177=Tags["mem"];
        var $js$178=Tools["tags_of_pathname"];
        var $js$179=$js$178(c);
        var $js$180=$js$177("native",$js$179);
        if($js$180)
         {var comp=Options["ocamlopt"][1]}
        else
         {var comp=Options["ocamlc"][1]}
        var $js$181=Tags["Operators"][1];
        var $js$182=Tags["Operators"][1];
        var $js$183=Tools["tags_of_pathname"];
        var $js$184=$js$183(c);
        var $js$185=$js$182($js$184,"c");
        var $js$186=$js$181($js$185,"compile");
        var $js$187=[5,$js$186];
        var $js$188=[0,$js$187,[0,[1,"-c"],[0,[3,c],0]]];
        var $js$189=[0,comp,$js$188];
        var $js$190=[0,$js$189];
        var cc=[1,$js$190];
        var $js$191=Pathname["dirname"];
        var $js$192=$js$191(o);
        var $js$193="unknown primitive:caml_string_equal";
        if($js$193)
         {return cc}
        else
         {var $js$194=Rule["Common_commands"][1];
          var $js$195=Pathname["basename"];
          var $js$196=$js$195(o);
          var $js$197=$js$194($js$196,o);
          var $js$198=[0,$js$197,0];
          var $js$199=[0,cc,$js$198];
          return [0,$js$199]}});
    var $js$177=Rule["rule"];
    var $js$178=Ocaml_tools["infer_interface"];
    var $js$179=$js$178("%.ml","%.inferred.mli");
    $js$177
     ("ocaml: ml & ml.depends & *cmi -> .inferred.mli",
      0,
      0,
      [0,[0,"%.ml",[0,"%.ml.depends",0]]],
      [0,"%.inferred.mli"],
      0,
      0,
      0,
      [0,
       "The target foo.inferred.mli will produce a .mli that exposes all the declarations in foo.ml, as obtained by direct invocation of `ocamlc -i`."],
      $js$179);
    var $js$180=Rule["rule"];
    var $js$181=Ocaml_compiler["byte_toplevel_link_mltop"];
    var $js$182=$js$181("%.mltop","%.top");
    $js$180
     ("ocaml: mltop -> top",0,0,0,[0,"%.top"],[0,"%.mltop"],0,0,0,$js$182);
    var $js$183=Rule["rule"];
    var $js$184=Ocaml_tools["camlp4"];
    var $js$185=$js$184(0,"pp.ml","%.ml","%.pp.ml");
    $js$183
     ("preprocess: ml -> pp.ml",
      0,
      0,
      0,
      [0,"%.pp.ml"],
      [0,"%.ml"],
      0,
      0,
      [0,
       "The target foo.pp.ml should generate a source file equivalent to foo.ml after syntactic preprocessors (camlp4, etc.) have been applied.\n\nWarning: This option is currently known to malfunction when used together with -use-ocamlfind (for syntax extensions coming from ocamlfind packages). Direct compilation of the corresponding file to produce a .cmx or .cmo will still work well."],
      $js$185);
    var $js$186=Flags["flag"];
    var $js$187=My_std["List"][20];
    var
     $js$188=
      $js$187
       (function(x,acc){return [0,[4,x],acc]},Options["ocaml_ppflags"][1],0);
    var $js$189=[0,$js$188];
    $js$186(0,[0,"ocaml",[0,"pp",0]],$js$189);
    var $js$190=Flags["flag"];
    var $js$191=Command["atomize"];
    var $js$192=$js$191(Options["ocaml_cflags"][1]);
    $js$190(0,[0,"ocaml",[0,"compile",0]],$js$192);
    var $js$193=Flags["flag"];
    var $js$194=Command["atomize"];
    var $js$195=$js$194(Options["ocaml_cflags"][1]);
    $js$193(0,[0,"c",[0,"compile",0]],$js$195);
    var $js$196=Flags["flag"];
    var $js$197=Command["atomize"];
    var $js$198=$js$197(Options["ocaml_lflags"][1]);
    $js$196(0,[0,"ocaml",[0,"link",0]],$js$198);
    var $js$199=Flags["flag"];
    var $js$200=Command["atomize"];
    var $js$201=$js$200(Options["ocaml_lflags"][1]);
    $js$199(0,[0,"c",[0,"link",0]],$js$201);
    var $js$202=Flags["flag"];
    var $js$203=Command["atomize"];
    var $js$204=$js$203(Options["ocaml_yaccflags"][1]);
    $js$202(0,[0,"ocaml",[0,"ocamlyacc",0]],$js$204);
    var $js$205=Flags["flag"];
    var $js$206=Command["atomize"];
    var $js$207=$js$206(Options["ocaml_yaccflags"][1]);
    $js$205(0,[0,"ocaml",[0,"menhir",0]],$js$207);
    var $js$208=Flags["flag"];
    var $js$209=Command["atomize"];
    var $js$210=$js$209(Options["ocaml_docflags"][1]);
    $js$208(0,[0,"ocaml",[0,"doc",0]],$js$210);
    var $js$211=Flags["flag"];
    var $js$212=Command["atomize"];
    var $js$213=$js$212(Options["ocaml_lexflags"][1]);
    $js$211(0,[0,"ocaml",[0,"ocamllex",0]],$js$213);
    var $js$214=Flags["flag"];
    $js$214
     (0,[0,"ocaml",[0,"menhir",[0,"explain",0]]],[0,[0,[1,"--explain"],0]]);
    var $js$215=Flags["flag"];
    $js$215(0,[0,"ocaml",[0,"menhir",[0,"infer",0]]],[0,[0,[1,"--infer"],0]]);
    var $js$216=My_std["List"][14];
    var
     match=
      $js$216
       (function(mode)
         {var $js$217=Flags["flag"];
          $js$217
           (0,[0,mode,[0,"only_tokens",0]],[0,[0,[1,"--only-tokens"],0]]);
          var $js$218=Flags["pflag"];
          return $js$218
                  ([0,mode,0],
                   "external_tokens",
                   function(name)
                    {return [0,[0,[1,"--external-tokens"],[0,[1,name],0]]]})},
        [0,"menhir",[0,"menhir_ocamldep",0]]);
    var $js$217=Flags["flag"];
    $js$217
     (0,[0,"ocaml",[0,"ocamllex",[0,"generate_ml",0]]],[0,[0,[1,"-ml"],0]]);
    var $js$218=Flags["flag"];
    var $js$219=My_std["List"][16];
    var
     $js$220=
      $js$219
       (function(x)
         {var $js$221=Pervasives["^"];
          var $js$222=$js$221(x,".cma");
          return [1,$js$222]},
        Options["ocaml_libs"][1]);
    var $js$221=[0,$js$220];
    $js$218(0,[0,"ocaml",[0,"byte",[0,"link",0]]],$js$221);
    var $js$222=Flags["flag"];
    var $js$223=My_std["List"][16];
    var
     $js$224=
      $js$223
       (function(x)
         {var $js$225=Pervasives["^"];
          var $js$226=$js$225(x,".cmxa");
          return [1,$js$226]},
        Options["ocaml_libs"][1]);
    var $js$225=[0,$js$224];
    $js$222(0,[0,"ocaml",[0,"native",[0,"link",0]]],$js$225);
    var $js$226=Flags["flag"];
    var $js$227=My_std["List"][16];
    var
     $js$228=
      $js$227
       (function(x)
         {var $js$229=Pervasives["^"];
          var $js$230=$js$229(x,".cmo");
          return [1,$js$230]},
        Options["ocaml_mods"][1]);
    var $js$229=[0,$js$228];
    $js$226(0,[0,"ocaml",[0,"byte",[0,"link",0]]],$js$229);
    var $js$230=Flags["flag"];
    var $js$231=My_std["List"][16];
    var
     $js$232=
      $js$231
       (function(x)
         {var $js$233=Pervasives["^"];
          var $js$234=$js$233(x,".cmx");
          return [1,$js$234]},
        Options["ocaml_mods"][1]);
    var $js$233=[0,$js$232];
    $js$230(0,[0,"ocaml",[0,"native",[0,"link",0]]],$js$233);
    var $js$234=Options["use_ocamlfind"][1];
    if($js$234)
     {var $js$235=My_std["&"];
      var $js$236=Flags["flag"];
      var $js$237=$js$236(0,[0,"ocaml",[0,"link",[0,"program",0]]]);
      $js$235($js$237,[1,"-linkpkg"]);
      var $js$238=My_std["&"];
      var $js$239=Flags["flag"];
      var $js$240=$js$239(0,[0,"ocaml",[0,"link",[0,"toplevel",0]]]);
      $js$238($js$240,[1,"-linkpkg"]);
      var $js$241=My_std["&"];
      var $js$242=Flags["flag"];
      var $js$243=$js$242(0,[0,"ocaml",[0,"link",[0,"output_obj",0]]]);
      $js$241($js$243,[1,"-linkpkg"]);
      var $js$244=My_std["&"];
      var $js$245=Flags["flag"];
      var $js$246=$js$245(0,[0,"ocaml",[0,"link",[0,"linkpkg",0]]]);
      $js$244($js$246,[1,"-linkpkg"]);
      var $js$247=Flags["pflag"];
      $js$247
       ([0,"ocaml",[0,"link",0]],
        "dontlink",
        function(pkg){return [0,[0,[1,"-dontlink"],[0,[1,pkg],0]]]});
      var
       all_tags=
        [0,
         [0,"ocaml",[0,"byte",[0,"compile",0]]],
         [0,
          [0,"ocaml",[0,"native",[0,"compile",0]]],
          [0,
           [0,"ocaml",[0,"byte",[0,"link",0]]],
           [0,
            [0,"ocaml",[0,"native",[0,"link",0]]],
            [0,
             [0,"ocaml",[0,"ocamldep",0]],
             [0,
              [0,"ocaml",[0,"doc",0]],
              [0,
               [0,"ocaml",[0,"mktop",0]],
               [0,[0,"ocaml",[0,"infer_interface",0]],0]]]]]]]];
      var $js$248=My_std["List"][14];
      var
       match$1=
        $js$248
         (function(tags)
           {var $js$249=Flags["pflag"];
            $js$249
             (tags,
              "package",
              function(pkg){return [0,[0,[1,"-package"],[0,[1,pkg],0]]]});
            var $js$250=My_std["List"][30];
            var $js$251=$js$250("ocamldep",tags);
            var $js$252=!$js$251;
            if($js$252)
             {var $js$253=Flags["pflag"];
              $js$253
               (tags,
                "predicate",
                function(pkg){return [0,[0,[1,"-predicates"],[0,[1,pkg],0]]]})}
            else
             {}
            var $js$254=Flags["pflag"];
            return $js$254
                    (tags,
                     "syntax",
                     function(pkg){return [0,[0,[1,"-syntax"],[0,[1,pkg],0]]]})},
          all_tags)}
    else
     {try
       {var $js$249=My_std["List"][16];
        var pkgs=$js$249(Findlib["query"],Options["ocaml_pkgs"][1]);
        var $js$250=Flags["flag"];
        var $js$251=Findlib["compile_flags_byte"];
        var $js$252=$js$251(pkgs);
        $js$250(0,[0,"ocaml",[0,"byte",[0,"compile",0]]],$js$252);
        var $js$253=Flags["flag"];
        var $js$254=Findlib["compile_flags_native"];
        var $js$255=$js$254(pkgs);
        $js$253(0,[0,"ocaml",[0,"native",[0,"compile",0]]],$js$255);
        var $js$256=Flags["flag"];
        var $js$257=Findlib["link_flags_byte"];
        var $js$258=$js$257(pkgs);
        $js$256(0,[0,"ocaml",[0,"byte",[0,"link",0]]],$js$258);
        var $js$259=Flags["flag"];
        var $js$260=Findlib["link_flags_native"];
        var $js$261=$js$260(pkgs);
        var match$1=$js$259(0,[0,"ocaml",[0,"native",[0,"link",0]]],$js$261)}
      catch(exn)
       {var $js$262=exn[1]=Findlib["Findlib_error"];
        if($js$262)
         {var $js$263=Findlib["report_error"];var match$1=$js$263(exn[2])}
        else
         {var match$1="unknown primitive:reraise"}}}
    var $js$264=Flags["pflag"];
    $js$264
     ([0,"ocaml",[0,"native",[0,"compile",0]]],
      "for-pack",
      function(param$1){return [0,[0,[1,"-for-pack"],[0,[1,param$1],0]]]});
    var $js$265=Flags["pflag"];
    $js$265
     ([0,"ocaml",[0,"native",[0,"pack",0]]],
      "for-pack",
      function(param$1){return [0,[0,[1,"-for-pack"],[0,[1,param$1],0]]]});
    var $js$266=Flags["pflag"];
    $js$266
     ([0,"ocaml",[0,"native",[0,"compile",0]]],
      "inline",
      function(param$1){return [0,[0,[1,"-inline"],[0,[1,param$1],0]]]});
    var $js$267=My_std["List"][14];
    $js$267
     (function(pp)
       {var $js$268=Flags["pflag"];
        $js$268
         ([0,"ocaml",[0,"compile",0]],
          pp,
          function(param$1)
           {var $js$269=Pervasives["^"];
            var $js$270=$js$269("-",pp);
            var $js$271=[1,$js$270];
            var $js$272=[0,$js$271,[0,[1,param$1],0]];
            return [0,$js$272]});
        var $js$269=Flags["pflag"];
        $js$269
         ([0,"ocaml",[0,"ocamldep",0]],
          pp,
          function(param$1)
           {var $js$270=Pervasives["^"];
            var $js$271=$js$270("-",pp);
            var $js$272=[1,$js$271];
            var $js$273=[0,$js$272,[0,[1,param$1],0]];
            return [0,$js$273]});
        var $js$270=Flags["pflag"];
        $js$270
         ([0,"ocaml",[0,"doc",0]],
          pp,
          function(param$1)
           {var $js$271=Pervasives["^"];
            var $js$272=$js$271("-",pp);
            var $js$273=[1,$js$272];
            var $js$274=[0,$js$273,[0,[1,param$1],0]];
            return [0,$js$274]});
        var $js$271=Flags["pflag"];
        return $js$271
                ([0,"ocaml",[0,"infer_interface",0]],
                 pp,
                 function(param$1)
                  {var $js$272=Pervasives["^"];
                   var $js$273=$js$272("-",pp);
                   var $js$274=[1,$js$273];
                   var $js$275=[0,$js$274,[0,[1,param$1],0]];
                   return [0,$js$275]})},
      [0,"pp",[0,"ppx",0]]);
    var $js$268=Flags["pflag"];
    $js$268
     ([0,"ocaml",[0,"compile",0]],
      "warn",
      function(param$1){return [0,[0,[1,"-w"],[0,[1,param$1],0]]]});
    var $js$269=Flags["pflag"];
    $js$269
     ([0,"ocaml",[0,"compile",0]],
      "warn_error",
      function(param$1){return [0,[0,[1,"-warn-error"],[0,[1,param$1],0]]]});
    var $js$270=Flags["pflag"];
    $js$270
     ([0,"ocaml",[0,"ocamldep",0]],
      "open",
      function(param$1){return [0,[0,[1,"-open"],[0,[1,param$1],0]]]});
    var $js$271=Flags["pflag"];
    $js$271
     ([0,"ocaml",[0,"compile",0]],
      "open",
      function(param$1){return [0,[0,[1,"-open"],[0,[1,param$1],0]]]});
    var $js$272=Flags["pflag"];
    $js$272
     ([0,"ocaml",[0,"link",0]],
      "runtime_variant",
      function(param$1)
       {return [0,[0,[1,"-runtime-variant"],[0,[1,param$1],0]]]});
    var match$2=0;
    var
     camlp4_flags=
      function(camlp4s)
       {var $js$273=My_std["List"][14];
        return $js$273
                (function(camlp4)
                  {var $js$274=Flags["flag"];
                   return $js$274
                           (0,[0,"ocaml",[0,"pp",[0,camlp4,0]]],[1,camlp4])},
                 camlp4s)};
    var
     p4_series=
      [0,
       "camlp4o",
       [0,
        "camlp4r",
        [0,"camlp4of",[0,"camlp4rf",[0,"camlp4orf",[0,"camlp4oof",0]]]]]];
    var $js$273=My_std["List"][16];
    var
     p4_opt_series=
      $js$273
       (function(f){var $js$274=Pervasives["^"];return $js$274(f,".opt")},
        p4_series);
    camlp4_flags(p4_series);
    camlp4_flags(p4_opt_series);
    var
     camlp4_flags'=
      function(camlp4s)
       {var $js$274=My_std["List"][14];
        return $js$274
                (function(param$1)
                  {var $js$275=Flags["flag"];
                   return $js$275
                           (0,[0,"ocaml",[0,"pp",[0,param$1[1],0]]],param$1[2])},
                 camlp4s)};
    camlp4_flags'
     ([0,
       [0,
        "camlp4orr",
        [0,[0,[1,"camlp4of"],[0,[1,"-parser"],[0,[1,"reloaded"],0]]]]],
       [0,
        [0,
         "camlp4rrr",
         [0,[0,[1,"camlp4rf"],[0,[1,"-parser"],[0,[1,"reloaded"],0]]]]],
        0]]);
    var $js$274=Flags["flag"];
    $js$274(0,[0,"ocaml",[0,"pp",[0,"camlp4:no_quot",0]]],[1,"-no_quot"]);
    var $js$275=Ocaml_utils["ocaml_lib"];
    $js$275([0,1],0,0,0,0,"dynlink");
    var $js$276=Ocaml_utils["ocaml_lib"];
    $js$276([0,1],0,0,0,0,"unix");
    var $js$277=Ocaml_utils["ocaml_lib"];
    $js$277([0,1],0,0,0,0,"str");
    var $js$278=Ocaml_utils["ocaml_lib"];
    $js$278([0,1],0,0,0,0,"bigarray");
    var $js$279=Ocaml_utils["ocaml_lib"];
    $js$279([0,1],0,0,0,0,"nums");
    var $js$280=Ocaml_utils["ocaml_lib"];
    $js$280([0,1],0,0,0,0,"dbm");
    var $js$281=Ocaml_utils["ocaml_lib"];
    $js$281([0,1],0,0,0,0,"graphics");
    var $js$282=Ocaml_utils["ocaml_lib"];
    $js$282([0,1],0,0,0,[0,"use_toplevel"],"toplevellib");
    var $js$283=Ocaml_utils["ocaml_lib"];
    $js$283([0,1],0,0,[0,"+ocamldoc"],0,"ocamldoc");
    var $js$284=Ocaml_utils["ocaml_lib"];
    $js$284([0,1],0,0,[0,"+ocamlbuild"],[0,"use_ocamlbuild"],"ocamlbuildlib");
    var $js$285=Ocaml_utils["ocaml_lib"];
    $js$285([0,1],0,0,[0,"+camlp4"],[0,"use_camlp4"],"camlp4lib");
    var $js$286=Ocaml_utils["ocaml_lib"];
    $js$286([0,1],0,0,[0,"+camlp4"],[0,"use_old_camlp4"],"camlp4");
    var $js$287=Ocaml_utils["ocaml_lib"];
    $js$287([0,1],0,0,[0,"+camlp4"],[0,"use_camlp4_full"],"camlp4fulllib");
    var $js$288=Flags["flag"];
    $js$288
     (0,
      [0,"ocaml",[0,"compile",[0,"use_camlp4_full",0]]],
      [0,
       [0,
        [1,"-I"],
        [0,
         [1,"+camlp4/Camlp4Parsers"],
         [0,
          [1,"-I"],
          [0,
           [1,"+camlp4/Camlp4Printers"],
           [0,[1,"-I"],[0,[1,"+camlp4/Camlp4Filters"],0]]]]]]]);
    var $js$289=Flags["flag"];
    $js$289
     (0,
      [0,"ocaml",[0,"use_camlp4_bin",[0,"link",[0,"byte",0]]]],
      [1,"+camlp4/Camlp4Bin.cmo"]);
    var $js$290=Flags["flag"];
    $js$290
     (0,
      [0,"ocaml",[0,"use_camlp4_bin",[0,"link",[0,"native",0]]]],
      [1,"+camlp4/Camlp4Bin.cmx"]);
    var $js$291=Flags["flag"];
    $js$291(0,[0,"ocaml",[0,"debug",[0,"compile",[0,"byte",0]]]],[1,"-g"]);
    var $js$292=Flags["flag"];
    $js$292
     (0,
      [0,"ocaml",[0,"debug",[0,"link",[0,"byte",[0,"program",0]]]]],
      [1,"-g"]);
    var $js$293=Flags["flag"];
    $js$293(0,[0,"ocaml",[0,"debug",[0,"pack",[0,"byte",0]]]],[1,"-g"]);
    var $js$294=Flags["flag"];
    $js$294(0,[0,"ocaml",[0,"debug",[0,"compile",[0,"native",0]]]],[1,"-g"]);
    var $js$295=Flags["flag"];
    $js$295
     (0,
      [0,"ocaml",[0,"debug",[0,"link",[0,"native",[0,"program",0]]]]],
      [1,"-g"]);
    var $js$296=Flags["flag"];
    $js$296(0,[0,"ocaml",[0,"debug",[0,"pack",[0,"native",0]]]],[1,"-g"]);
    var $js$297=Flags["flag"];
    $js$297(0,[0,"c",[0,"debug",[0,"compile",0]]],[1,"-g"]);
    var $js$298=Flags["flag"];
    $js$298(0,[0,"c",[0,"debug",[0,"link",0]]],[1,"-g"]);
    var $js$299=Flags["flag"];
    $js$299
     (0,
      [0,"ocaml",[0,"link",[0,"native",[0,"output_obj",0]]]],
      [1,"-output-obj"]);
    var $js$300=Flags["flag"];
    $js$300
     (0,
      [0,"ocaml",[0,"link",[0,"byte",[0,"output_obj",0]]]],
      [1,"-output-obj"]);
    var $js$301=My_std["&"];
    var $js$302=Flags["flag"];
    var $js$303=$js$302(0,[0,"ocaml",[0,"link",[0,"output_shared",0]]]);
    $js$301($js$303,[0,[0,[1,"-cclib"],[0,[1,"-shared"],0]]]);
    var $js$304=Flags["flag"];
    $js$304(0,[0,"ocaml",[0,"dtypes",[0,"compile",0]]],[1,"-dtypes"]);
    var $js$305=Flags["flag"];
    $js$305(0,[0,"ocaml",[0,"annot",[0,"compile",0]]],[1,"-annot"]);
    var $js$306=Flags["flag"];
    $js$306(0,[0,"ocaml",[0,"annot",[0,"pack",0]]],[1,"-annot"]);
    var $js$307=Flags["flag"];
    $js$307(0,[0,"ocaml",[0,"bin_annot",[0,"compile",0]]],[1,"-bin-annot"]);
    var $js$308=Flags["flag"];
    $js$308(0,[0,"ocaml",[0,"bin_annot",[0,"pack",0]]],[1,"-bin-annot"]);
    var $js$309=Flags["flag"];
    $js$309
     (0,[0,"ocaml",[0,"safe_string",[0,"compile",0]]],[1,"-safe-string"]);
    var $js$310=Flags["flag"];
    $js$310
     (0,
      [0,"ocaml",[0,"safe_string",[0,"infer_interface",0]]],
      [1,"-safe-string"]);
    var $js$311=Flags["flag"];
    $js$311
     (0,[0,"ocaml",[0,"unsafe_string",[0,"compile",0]]],[1,"-unsafe-string"]);
    var $js$312=Flags["flag"];
    $js$312
     (0,
      [0,"ocaml",[0,"unsafe_string",[0,"infer_interface",0]]],
      [1,"-unsafe-string"]);
    var $js$313=Flags["flag"];
    $js$313
     (0,[0,"ocaml",[0,"short_paths",[0,"compile",0]]],[1,"-short-paths"]);
    var $js$314=Flags["flag"];
    $js$314
     (0,
      [0,"ocaml",[0,"short_paths",[0,"infer_interface",0]]],
      [1,"-short-paths"]);
    var $js$315=Flags["flag"];
    $js$315(0,[0,"ocaml",[0,"rectypes",[0,"compile",0]]],[1,"-rectypes"]);
    var $js$316=Flags["flag"];
    $js$316
     (0,[0,"ocaml",[0,"rectypes",[0,"infer_interface",0]]],[1,"-rectypes"]);
    var $js$317=Flags["flag"];
    $js$317(0,[0,"ocaml",[0,"rectypes",[0,"doc",0]]],[1,"-rectypes"]);
    var $js$318=Flags["flag"];
    $js$318(0,[0,"ocaml",[0,"rectypes",[0,"pack",0]]],[1,"-rectypes"]);
    var $js$319=Flags["flag"];
    $js$319(0,[0,"ocaml",[0,"principal",[0,"compile",0]]],[1,"-principal"]);
    var $js$320=Flags["flag"];
    $js$320
     (0,[0,"ocaml",[0,"principal",[0,"infer_interface",0]]],[1,"-principal"]);
    var $js$321=Flags["flag"];
    $js$321(0,[0,"ocaml",[0,"linkall",[0,"link",0]]],[1,"-linkall"]);
    var $js$322=Flags["flag"];
    $js$322(0,[0,"ocaml",[0,"link",[0,"profile",[0,"native",0]]]],[1,"-p"]);
    var $js$323=Flags["flag"];
    $js$323
     (0,
      [0,"ocaml",[0,"link",[0,"program",[0,"custom",[0,"byte",0]]]]],
      [1,"-custom"]);
    var $js$324=Flags["flag"];
    $js$324
     (0,
      [0,"ocaml",[0,"link",[0,"library",[0,"custom",[0,"byte",0]]]]],
      [1,"-custom"]);
    var $js$325=Flags["flag"];
    $js$325(0,[0,"ocaml",[0,"compile",[0,"profile",[0,"native",0]]]],[1,"-p"]);
    var $js$326=Flags["flag"];
    $js$326
     (0,[0,"ocaml",[0,"compile",[0,"no_alias_deps",0]]],[1,"-no-alias-deps"]);
    var $js$327=Flags["flag"];
    $js$327
     (0,
      [0,"ocaml",[0,"compile",[0,"strict_formats",0]]],
      [1,"-strict-formats"]);
    var $js$328=Flags["flag"];
    $js$328
     (0,[0,"ocaml",[0,"native",[0,"compile",[0,"opaque",0]]]],[1,"-opaque"]);
    var $js$329=Flags["flag"];
    $js$329
     (0,
      [0,"ocaml",[0,"native",[0,"compile",[0,"no_float_const_prop",0]]]],
      [1,"-no-float-const-prop"]);
    var $js$330=Flags["flag"];
    $js$330(0,[0,"ocaml",[0,"compile",[0,"keep_docs",0]]],[1,"-keep-docs"]);
    var $js$331=Flags["flag"];
    $js$331(0,[0,"ocaml",[0,"compile",[0,"keep_locs",0]]],[1,"-keep-locs"]);
    var $js$332=Flags["flag"];
    $js$332(0,[0,"ocaml",[0,"absname",[0,"compile",0]]],[1,"-absname"]);
    var $js$333=Flags["flag"];
    $js$333
     (0,[0,"ocaml",[0,"absname",[0,"infer_interface",0]]],[1,"-absname"]);
    var $js$334=Flags["flag"];
    $js$334
     (0,
      [0,"ocaml",[0,"byte",[0,"compile",[0,"compat_32",0]]]],
      [1,"-compat-32"]);
    var $js$335=Flags["flag"];
    $js$335(0,[0,"ocaml",[0,"compile",[0,"thread",0]]],[1,"-thread"]);
    var $js$336=Flags["flag"];
    $js$336(0,[0,"ocaml",[0,"link",[0,"thread",0]]],[1,"-thread"]);
    var $js$337=!Options["use_ocamlfind"][1];
    if($js$337)
     {var $js$338=Flags["flag"];
      $js$338
       (0,
        [0,"ocaml",[0,"doc",[0,"thread",0]]],
        [0,[0,[1,"-I"],[0,[1,"+threads"],0]]]);
      var $js$339=Flags["flag"];
      $js$339
       (0,
        [0,"ocaml",[0,"link",[0,"thread",[0,"native",[0,"program",0]]]]],
        [1,"threads.cmxa"]);
      var $js$340=Flags["flag"];
      $js$340
       (0,
        [0,"ocaml",[0,"link",[0,"thread",[0,"byte",[0,"program",0]]]]],
        [1,"threads.cma"]);
      var $js$341=Flags["flag"];
      $js$341
       (0,
        [0,"ocaml",[0,"link",[0,"thread",[0,"native",[0,"toplevel",0]]]]],
        [1,"threads.cmxa"]);
      var $js$342=Flags["flag"];
      $js$342
       (0,
        [0,"ocaml",[0,"link",[0,"thread",[0,"byte",[0,"toplevel",0]]]]],
        [1,"threads.cma"])}
    else
     {}
    var $js$343=Flags["flag"];
    $js$343
     (0,[0,"ocaml",[0,"compile",[0,"nopervasives",0]]],[1,"-nopervasives"]);
    var $js$344=Flags["flag"];
    $js$344(0,[0,"ocaml",[0,"compile",[0,"nolabels",0]]],[1,"-nolabels"]);
    var $js$345=Flags["flag"];
    $js$345(0,[0,"ocaml",[0,"ocamllex",[0,"quiet",0]]],[1,"-q"]);
    var
     ocaml_warn_flag=
      function(c)
       {var $js$346=Flags["flag"];
        var $js$347=Format["sprintf"];
        var $js$348=Char["uppercase"];
        var $js$349=$js$348(c);
        var $js$350=$js$347([0,[11,"warn_",[0,0]],"warn_%c"],$js$349);
        var $js$351=[0,$js$350,0];
        var $js$352=[0,"compile",$js$351];
        var $js$353=[0,"ocaml",$js$352];
        var $js$354=Format["sprintf"];
        var $js$355=Char["uppercase"];
        var $js$356=$js$355(c);
        var $js$357=$js$354([0,[0,0],"%c"],$js$356);
        var $js$358=[1,$js$357];
        var $js$359=[0,$js$358,0];
        var $js$360=[0,[1,"-w"],$js$359];
        var $js$361=[0,$js$360];
        $js$346([0,1],$js$353,$js$361);
        var $js$362=Flags["flag"];
        var $js$363=Format["sprintf"];
        var $js$364=Char["uppercase"];
        var $js$365=$js$364(c);
        var
         $js$366=
          $js$363([0,[11,"warn_error_",[0,0]],"warn_error_%c"],$js$365);
        var $js$367=[0,$js$366,0];
        var $js$368=[0,"compile",$js$367];
        var $js$369=[0,"ocaml",$js$368];
        var $js$370=Format["sprintf"];
        var $js$371=Char["uppercase"];
        var $js$372=$js$371(c);
        var $js$373=$js$370([0,[0,0],"%c"],$js$372);
        var $js$374=[1,$js$373];
        var $js$375=[0,$js$374,0];
        var $js$376=[0,[1,"-warn-error"],$js$375];
        var $js$377=[0,$js$376];
        $js$362([0,1],$js$369,$js$377);
        var $js$378=Flags["flag"];
        var $js$379=Format["sprintf"];
        var $js$380=Char["lowercase"];
        var $js$381=$js$380(c);
        var $js$382=$js$379([0,[11,"warn_",[0,0]],"warn_%c"],$js$381);
        var $js$383=[0,$js$382,0];
        var $js$384=[0,"compile",$js$383];
        var $js$385=[0,"ocaml",$js$384];
        var $js$386=Format["sprintf"];
        var $js$387=Char["lowercase"];
        var $js$388=$js$387(c);
        var $js$389=$js$386([0,[0,0],"%c"],$js$388);
        var $js$390=[1,$js$389];
        var $js$391=[0,$js$390,0];
        var $js$392=[0,[1,"-w"],$js$391];
        var $js$393=[0,$js$392];
        $js$378([0,1],$js$385,$js$393);
        var $js$394=Flags["flag"];
        var $js$395=Format["sprintf"];
        var $js$396=Char["lowercase"];
        var $js$397=$js$396(c);
        var
         $js$398=
          $js$395([0,[11,"warn_error_",[0,0]],"warn_error_%c"],$js$397);
        var $js$399=[0,$js$398,0];
        var $js$400=[0,"compile",$js$399];
        var $js$401=[0,"ocaml",$js$400];
        var $js$402=Format["sprintf"];
        var $js$403=Char["lowercase"];
        var $js$404=$js$403(c);
        var $js$405=$js$402([0,[0,0],"%c"],$js$404);
        var $js$406=[1,$js$405];
        var $js$407=[0,$js$406,0];
        var $js$408=[0,[1,"-warn-error"],$js$407];
        var $js$409=[0,$js$408];
        return $js$394([0,1],$js$401,$js$409)};
    var $js$346=My_std["List"][14];
    $js$346
     (ocaml_warn_flag,
      [0,
       65,
       [0,
        67,
        [0,
         68,
         [0,
          69,
          [0,
           70,
           [0,
            75,
            [0,
             76,
             [0,77,[0,80,[0,82,[0,83,[0,85,[0,86,[0,88,[0,89,[0,90,0]]]]]]]]]]]]]]]]);
    var $js$347=Flags["flag"];
    $js$347
     ([0,1],
      [0,"ocaml",[0,"compile",[0,"strict-sequence",0]]],
      [1,"-strict-sequence"]);
    var $js$348=Flags["flag"];
    $js$348
     (0,
      [0,"ocaml",[0,"compile",[0,"strict_sequence",0]]],
      [1,"-strict-sequence"]);
    var $js$349=Flags["flag"];
    $js$349
     (0,[0,"ocaml",[0,"doc",[0,"docdir",[0,"extension:html",0]]]],[1,"-html"]);
    var $js$350=Flags["flag"];
    $js$350(0,[0,"ocaml",[0,"doc",[0,"docdir",[0,"manpage",0]]]],[1,"-man"]);
    var $js$351=Flags["flag"];
    $js$351
     (0,[0,"ocaml",[0,"doc",[0,"docfile",[0,"extension:dot",0]]]],[1,"-dot"]);
    var $js$352=Flags["flag"];
    $js$352
     (0,
      [0,"ocaml",[0,"doc",[0,"docfile",[0,"extension:tex",0]]]],
      [1,"-latex"]);
    var $js$353=Flags["flag"];
    $js$353
     (0,
      [0,"ocaml",[0,"doc",[0,"docfile",[0,"extension:ltx",0]]]],
      [1,"-latex"]);
    var $js$354=Flags["flag"];
    $js$354
     (0,
      [0,"ocaml",[0,"doc",[0,"docfile",[0,"extension:texi",0]]]],
      [1,"-texi"]);
    var $js$355=Ocaml_utils["ocaml_lib"];
    $js$355(0,0,0,0,0,"ocamlbuildlib");
    var $js$356=Ocaml_utils["ocaml_lib"];
    $js$356(0,0,0,0,0,"ocamlbuildlightlib");
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
       camlp4_flags',
       ocaml_warn_flag];
    return 0};
module["exports"]={"init":init};
