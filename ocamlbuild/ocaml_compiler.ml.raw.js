var Ocaml_utils=require("Ocaml_utils");
var Tools=require("Tools");
var Options=require("Options");
var Ocaml_dependencies=require("Ocaml_dependencies");
var Pervasives=require("Pervasives");
var Rule=require("Rule");
var Ocaml_arch=require("Ocaml_arch");
var Pathname=require("Pathname");
var Resource=require("Resource");
var Command=require("Command");
var My_std=require("My_std");
var Tags=require("Tags");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var
 forpack_flags=
  function(arg,tags)
   {var $js=Tags["mem"];
    var $js$1=$js("pack",tags);
    if($js$1)
     {var $js$2=Ocaml_arch["forpack_flags_of_pathname"];return $js$2(arg)}
    else
     {return 0}};
var
 ocamlc_c=
  function(tags,arg,out)
   {var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=$js$1(tags,"ocaml");
    var tags$1=$js($js$2,"byte");
    var $js$3=Tags["Operators"][1];
    var $js$4=$js$3(tags$1,"compile");
    var $js$5=[5,$js$4];
    var $js$6=Ocaml_utils["ocaml_ppflags"];
    var $js$7=$js$6(tags$1);
    var $js$8=Ocaml_utils["ocaml_include_flags"];
    var $js$9=$js$8(arg);
    var $js$10=[0,$js$9,[0,[1,"-o"],[0,[3,out],[0,[2,arg],0]]]];
    var $js$11=[0,$js$7,$js$10];
    var $js$12=[0,$js$5,$js$11];
    var $js$13=[0,[1,"-c"],$js$12];
    var $js$14=[0,Options["ocamlc"][1],$js$13];
    var $js$15=[0,$js$14];
    return [1,$js$15]};
var
 ocamlc_link=
  function(flag,tags,deps,out)
   {var $js=Command["atomize_paths"];
    var $js$1=$js(deps);
    var $js$2=[0,$js$1,[0,[1,"-o"],[0,[3,out],0]]];
    var $js$3=[0,[5,tags],$js$2];
    var $js$4=[0,flag,$js$3];
    var $js$5=[0,Options["ocamlc"][1],$js$4];
    var $js$6=[0,$js$5];
    return [1,$js$6]};
var ocamlc_link_lib=ocamlc_link([1,"-a"]);
var ocamlc_link_prog=ocamlc_link(0);
var
 ocamlmklib=
  function(tags,deps,out)
   {var $js=Command["atomize_paths"];
    var $js$1=$js(deps);
    var $js$2=Pathname["remove_extensions"];
    var $js$3=$js$2(out);
    var $js$4=[3,$js$3];
    var $js$5=[0,$js$4,0];
    var $js$6=[0,[1,"-o"],$js$5];
    var $js$7=[0,$js$1,$js$6];
    var $js$8=[0,[5,tags],$js$7];
    var $js$9=[0,Options["ocamlmklib"][1],$js$8];
    var $js$10=[0,$js$9];
    return [1,$js$10]};
var
 ocamlmktop=
  function(tags,deps,out)
   {var $js=Tags["Operators"][1];
    var $js$1=$js(tags,"mktop");
    var $js$2=[5,$js$1];
    var $js$3=Command["atomize_paths"];
    var $js$4=$js$3(deps);
    var $js$5=[0,$js$4,[0,[1,"-o"],[0,[3,out],0]]];
    var $js$6=[0,$js$2,$js$5];
    var $js$7=[0,Options["ocamlmktop"][1],$js$6];
    var $js$8=[0,$js$7];
    return [1,$js$8]};
var
 byte_lib_linker=
  function(tags)
   {var $js=Tags["mem"];
    var $js$1=$js("ocamlmklib",tags);
    if($js$1){return ocamlmklib(tags)}else{return ocamlc_link_lib(tags)}};
var
 byte_lib_linker_tags=
  function(tags)
   {var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=Tags["Operators"][1];
    var $js$3=Tags["Operators"][1];
    var $js$4=$js$3(tags,"ocaml");
    var $js$5=$js$2($js$4,"link");
    var $js$6=$js$1($js$5,"byte");
    return $js($js$6,"library")};
var
 ocamlc_p=
  function(tags,deps,out)
   {var $js=Command["atomize_paths"];
    var $js$1=$js(deps);
    var $js$2=[0,$js$1,[0,[1,"-o"],[0,[3,out],0]]];
    var $js$3=[0,[5,tags],$js$2];
    var $js$4=[0,[1,"-pack"],$js$3];
    var $js$5=[0,Options["ocamlc"][1],$js$4];
    var $js$6=[0,$js$5];
    return [1,$js$6]};
var
 ocamlopt_c=
  function(tags,arg,out)
   {var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=$js$1(tags,"ocaml");
    var tags$1=$js($js$2,"native");
    var $js$3=Ocaml_arch["forpack_flags_of_pathname"];
    var $js$4=$js$3(arg);
    var $js$5=Tags["Operators"][1];
    var $js$6=$js$5(tags$1,"compile");
    var $js$7=[5,$js$6];
    var $js$8=Ocaml_utils["ocaml_ppflags"];
    var $js$9=$js$8(tags$1);
    var $js$10=Ocaml_utils["ocaml_include_flags"];
    var $js$11=$js$10(arg);
    var $js$12=[0,$js$11,[0,[1,"-o"],[0,[3,out],[0,[2,arg],0]]]];
    var $js$13=[0,$js$9,$js$12];
    var $js$14=[0,$js$7,$js$13];
    var $js$15=[0,$js$4,$js$14];
    var $js$16=[0,[1,"-c"],$js$15];
    var $js$17=[0,Options["ocamlopt"][1],$js$16];
    var $js$18=[0,$js$17];
    return [1,$js$18]};
var
 ocamlopt_link=
  function(flag,tags,deps,out)
   {var $js=forpack_flags(out,tags);
    var $js$1=Command["atomize_paths"];
    var $js$2=$js$1(deps);
    var $js$3=[0,$js$2,[0,[1,"-o"],[0,[3,out],0]]];
    var $js$4=[0,[5,tags],$js$3];
    var $js$5=[0,$js,$js$4];
    var $js$6=[0,flag,$js$5];
    var $js$7=[0,Options["ocamlopt"][1],$js$6];
    var $js$8=[0,$js$7];
    return [1,$js$8]};
var ocamlopt_link_lib=ocamlopt_link([1,"-a"]);
var ocamlopt_link_shared_lib=ocamlopt_link([1,"-shared"]);
var ocamlopt_link_prog=ocamlopt_link(0);
var
 ocamlopt_p=
  function(tags,deps,out)
   {var $js=My_std["List"][3];
    var $js$1=My_std["List"][16];
    var $js$2=$js$1(Pathname["dirname"],deps);
    var dirnames=$js(0,$js$2);
    var $js$3=My_std["List"][20];
    var include_flags=$js$3(Ocaml_utils["ocaml_add_include_flag"],dirnames,0);
    var $js$4=Pathname["update_extensions"];
    var mli=$js$4("mli",out);
    var $js$5=forpack_flags(out,tags);
    var $js$6=Command["atomize_paths"];
    var $js$7=$js$6(deps);
    var $js$8=[0,$js$7,[0,[1,"-o"],[0,[3,out],0]]];
    var $js$9=[0,[0,include_flags],$js$8];
    var $js$10=[0,[5,tags],$js$9];
    var $js$11=[0,$js$5,$js$10];
    var $js$12=[0,[1,"-pack"],$js$11];
    var $js$13=[0,Options["ocamlopt"][1],$js$12];
    var cmd=[0,$js$13];
    var $js$14=Pathname["exists"];
    var $js$15=$js$14(mli);
    if($js$15)
     {return [1,cmd]}
    else
     {var rm=[0,[0,[1,"rm"],[0,[1,"-f"],[0,[2,mli],0]]]];
      return [1,
              [0,
               [0,
                [1,"touch"],
                [0,
                 [2,mli],
                 [0,
                  [4," ; if "],
                  [0,
                   cmd,
                   [0,
                    [4," ; then "],
                    [0,rm,[0,[4," ; else "],[0,rm,[0,[4," ; exit 1; fi"],0]]]]]]]]]]]}};
var
 native_lib_linker=
  function(tags)
   {var $js=Tags["mem"];
    var $js$1=$js("ocamlmklib",tags);
    if($js$1){return ocamlmklib(tags)}else{return ocamlopt_link_lib(tags)}};
var
 native_shared_lib_linker=
  function(tags){return ocamlopt_link_shared_lib(tags)};
var
 native_lib_linker_tags=
  function(tags)
   {var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=Tags["Operators"][1];
    var $js$3=Tags["Operators"][1];
    var $js$4=$js$3(tags,"ocaml");
    var $js$5=$js$2($js$4,"link");
    var $js$6=$js$1($js$5,"native");
    return $js($js$6,"library")};
var
 prepare_compile=
  function(build,ml)
   {var $js=Pathname["dirname"];
    var dir=$js(ml);
    var $js$1=Pathname["include_dirs_of"];
    var include_dirs=$js$1(dir);
    var $js$2=Ocaml_utils["path_dependencies_of"];
    var modules=$js$2(ml);
    var $js$3=My_std["List"][16];
    var
     $js$4=
      $js$3
       (function(param)
         {var $js$5=Ocaml_utils["expand_module"];
          return $js$5(include_dirs,param[2],[0,"cmi",0])},
        modules);
    var results=build($js$4);
    var $js$5=My_std["List"][21];
    return $js$5
            (function(param,res)
              {var $js$6=res;
               if($js$6==0)
                {return 0}
               else
                if($js$6==1)
                 {var $js$7=param[1]>=886832744;
                  if($js$7)
                   {return 0}
                  else
                   {var $js$8=!Options["ignore_auto"][1];
                    if($js$8){"unknown primitive:raise"}else{}
                    var $js$9=Log["dprintf"];
                    $js$9
                     (3,
                      [0,
                       [11,
                        "Warning: Failed to build the module ",
                        [2,0,[11," requested by ocamldep.",0]]],
                       "Warning: Failed to build the module %s requested by ocamldep."],
                      param[2]);
                    var $js$10=Options["ocamlbuild_project_heuristic"];
                    var $js$11=$js$10(0);
                    var $js$12=Options["recursive"][1]||$js$11;
                    var $js$13=!$js$12;
                    if($js$13)
                     {var $js$14=Log["at_failure"];
                      return $js$14
                              ("a module failed to build,\n           while recursive traversal was disabled by fragile heuristic;\n           hint that having a _tags or myocamlbuild.ml would maybe solve\n           the build error",
                               function(param$1)
                                {var $js$15=Log["eprintf"];
                                 return $js$15
                                         ([0,
                                           [11,
                                            "Hint:",
                                            [17,
                                             [0,"@ ",1,0],
                                             [11,
                                              "Recursive",
                                              [17,
                                               [0,"@ ",1,0],
                                               [11,
                                                "traversal",
                                                [17,
                                                 [0,"@ ",1,0],
                                                 [11,
                                                  "of",
                                                  [17,
                                                   [0,"@ ",1,0],
                                                   [11,
                                                    "subdirectories",
                                                    [17,
                                                     [0,"@ ",1,0],
                                                     [11,
                                                      "was",
                                                      [17,
                                                       [0,"@ ",1,0],
                                                       [11,
                                                        "not",
                                                        [17,
                                                         [0,"@ ",1,0],
                                                         [11,
                                                          "enabled",
                                                          [17,
                                                           [0,"@ ",1,0],
                                                           [11,
                                                            "for",
                                                            [17,
                                                             [0,"@ ",1,0],
                                                             [11,
                                                              "this",
                                                              [17,
                                                               [0,"@ ",1,0],
                                                               [11,
                                                                "build,",
                                                                [17,
                                                                 [0,"@ ",1,0],
                                                                 [11,
                                                                  "as",
                                                                  [17,
                                                                   [0,"@ ",1,0],
                                                                   [11,
                                                                    "the",
                                                                    [17,
                                                                     [0,"@ ",1,0],
                                                                     [11,
                                                                      "working",
                                                                      [17,
                                                                       [0,"@ ",1,0],
                                                                       [11,
                                                                        "directory does",
                                                                        [17,
                                                                         [0,"@ ",1,0],
                                                                         [11,
                                                                          "not",
                                                                          [17,
                                                                           [0,"@ ",1,0],
                                                                           [11,
                                                                            "look",
                                                                            [17,
                                                                             [0,"@ ",1,0],
                                                                             [11,
                                                                              "like",
                                                                              [17,
                                                                               [0,"@ ",1,0],
                                                                               [11,
                                                                                "an",
                                                                                [17,
                                                                                 [0,"@ ",1,0],
                                                                                 [11,
                                                                                  "ocamlbuild",
                                                                                  [17,
                                                                                   [0,"@ ",1,0],
                                                                                   [11,
                                                                                    "project",
                                                                                    [17,
                                                                                     [0,"@ ",1,0],
                                                                                     [11,
                                                                                      "(no",
                                                                                      [17,
                                                                                       [0,"@ ",1,0],
                                                                                       [11,
                                                                                        "'_tags'",
                                                                                        [17,
                                                                                         [0,"@ ",1,0],
                                                                                         [11,
                                                                                          "or",
                                                                                          [17,
                                                                                           [0,"@ ",1,0],
                                                                                           [11,
                                                                                            "'myocamlbuild.ml'",
                                                                                            [17,
                                                                                             [0,"@ ",1,0],
                                                                                             [11,
                                                                                              "file).",
                                                                                              [17,
                                                                                               [0,"@ ",1,0],
                                                                                               [11,
                                                                                                "If",
                                                                                                [17,
                                                                                                 [0,"@ ",1,0],
                                                                                                 [11,
                                                                                                  "you",
                                                                                                  [17,
                                                                                                   [0,"@ ",1,0],
                                                                                                   [11,
                                                                                                    "have",
                                                                                                    [17,
                                                                                                     [0,"@ ",1,0],
                                                                                                     [11,
                                                                                                      "modules",
                                                                                                      [17,
                                                                                                       [0,"@ ",1,0],
                                                                                                       [11,
                                                                                                        "in",
                                                                                                        [17,
                                                                                                         [0,"@ ",1,0],
                                                                                                         [11,
                                                                                                          "subdirectories,",
                                                                                                          [17,
                                                                                                           [0,"@ ",1,0],
                                                                                                           [11,
                                                                                                            "you",
                                                                                                            [17,
                                                                                                             [0,"@ ",1,0],
                                                                                                             [11,
                                                                                                              "should",
                                                                                                              [17,
                                                                                                               [0,"@ ",1,0],
                                                                                                               [11,
                                                                                                                "add",
                                                                                                                [17,
                                                                                                                 [0,"@ ",1,0],
                                                                                                                 [11,
                                                                                                                  "the",
                                                                                                                  [17,
                                                                                                                   [0,"@ ",1,0],
                                                                                                                   [11,
                                                                                                                    "option",
                                                                                                                    [17,
                                                                                                                     [0,"@ ",1,0],
                                                                                                                     [11,
                                                                                                                      '"-r"',
                                                                                                                      [17,
                                                                                                                       [0,"@ ",1,0],
                                                                                                                       [11,
                                                                                                                        "or",
                                                                                                                        [17,
                                                                                                                         [0,"@ ",1,0],
                                                                                                                         [11,
                                                                                                                          "create",
                                                                                                                          [17,
                                                                                                                           [0,"@ ",1,0],
                                                                                                                           [11,
                                                                                                                            "an",
                                                                                                                            [17,
                                                                                                                             [0,"@ ",1,0],
                                                                                                                             [11,
                                                                                                                              "empty",
                                                                                                                              [17,
                                                                                                                               [0,"@ ",1,0],
                                                                                                                               [11,
                                                                                                                                "'_tags'",
                                                                                                                                [17,
                                                                                                                                 [0,"@ ",1,0],
                                                                                                                                 [11,
                                                                                                                                  "file.",
                                                                                                                                  [17,
                                                                                                                                   3,
                                                                                                                                   [17,
                                                                                                                                    3,
                                                                                                                                    [11,
                                                                                                                                     "To",
                                                                                                                                     [17,
                                                                                                                                      [0,"@ ",1,0],
                                                                                                                                      [11,
                                                                                                                                       "enable",
                                                                                                                                       [17,
                                                                                                                                        [0,"@ ",1,0],
                                                                                                                                        [11,
                                                                                                                                         "recursive",
                                                                                                                                         [17,
                                                                                                                                          [0,"@ ",1,0],
                                                                                                                                          [11,
                                                                                                                                           "traversal",
                                                                                                                                           [17,
                                                                                                                                            [0,"@ ",1,0],
                                                                                                                                            [11,
                                                                                                                                             "for",
                                                                                                                                             [17,
                                                                                                                                              [0,"@ ",1,0],
                                                                                                                                              [11,
                                                                                                                                               "some",
                                                                                                                                               [17,
                                                                                                                                                [0,"@ ",1,0],
                                                                                                                                                [11,
                                                                                                                                                 "subdirectories",
                                                                                                                                                 [17,
                                                                                                                                                  [0,"@ ",1,0],
                                                                                                                                                  [11,
                                                                                                                                                   "only,",
                                                                                                                                                   [17,
                                                                                                                                                    [0,"@ ",1,0],
                                                                                                                                                    [11,
                                                                                                                                                     "you",
                                                                                                                                                     [17,
                                                                                                                                                      [0,"@ ",1,0],
                                                                                                                                                      [11,
                                                                                                                                                       "can",
                                                                                                                                                       [17,
                                                                                                                                                        [0,"@ ",1,0],
                                                                                                                                                        [11,
                                                                                                                                                         "use",
                                                                                                                                                         [17,
                                                                                                                                                          [0,"@ ",1,0],
                                                                                                                                                          [11,
                                                                                                                                                           "the",
                                                                                                                                                           [17,
                                                                                                                                                            [0,"@ ",1,0],
                                                                                                                                                            [11,
                                                                                                                                                             "following",
                                                                                                                                                             [17,
                                                                                                                                                              [0,"@ ",1,0],
                                                                                                                                                              [11,
                                                                                                                                                               "'_tags'",
                                                                                                                                                               [17,
                                                                                                                                                                [0,"@ ",1,0],
                                                                                                                                                                [11,
                                                                                                                                                                 "file:",
                                                                                                                                                                 [17,
                                                                                                                                                                  3,
                                                                                                                                                                  [18,
                                                                                                                                                                   [1,[0,[11,"<v 4>",0],"<v 4>"]],
                                                                                                                                                                   [17,
                                                                                                                                                                    [0,"@,",0,0],
                                                                                                                                                                    [11,
                                                                                                                                                                     "true: -traverse",
                                                                                                                                                                     [17,
                                                                                                                                                                      [0,"@,",0,0],
                                                                                                                                                                      [11,"<dir1> or <dir2>: traverse",[17,[0,"@,",0,0],[17,0,0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
                                           "Hint:@ Recursive@ traversal@ of@ subdirectories@ was@ not@ enabled@ for@ this@ build,@ as@ the@ working@ directory does@ not@ look@ like@ an@ ocamlbuild@ project@ (no@ '_tags'@ or@ 'myocamlbuild.ml'@ file).@ If@ you@ have@ modules@ in@ subdirectories,@ you@ should@ add@ the@ option@ \"-r\"@ or@ create@ an@ empty@ '_tags'@ file.@\n@\nTo@ enable@ recursive@ traversal@ for@ some@ subdirectories@ only,@ you@ can@ use@ the@ following@ '_tags'@ file:@\n@[<v 4>@,true: -traverse@,<dir1> or <dir2>: traverse@,@]"])})}
                    else
                     {return 0}}}},
             modules,
             results)};
var
 byte_compile_ocaml_interf=
  function(mli,cmi,env,build)
   {var mli$1=env(mli);
    var cmi$1=env(cmi);
    prepare_compile(build,mli$1);
    var $js=Tags["Operators"][1];
    var $js$1=Tools["tags_of_pathname"];
    var $js$2=$js$1(mli$1);
    var $js$3=$js($js$2,"interf");
    return ocamlc_c($js$3,mli$1,cmi$1)};
var
 compile_ocaml_interf=
  function(mli,cmi,env,build)
   {var mli$1=env(mli);
    var cmi$1=env(cmi);
    prepare_compile(build,mli$1);
    var $js=Tags["Operators"][1];
    var $js$1=Tools["tags_of_pathname"];
    var $js$2=$js$1(mli$1);
    var tags=$js($js$2,"interf");
    var $js$3=Tags["mem"];
    var $js$4=$js$3("native",tags);
    if($js$4){var comp_c=ocamlopt_c}else{var comp_c=ocamlc_c}
    return comp_c(tags,mli$1,cmi$1)};
var
 byte_compile_ocaml_implem=
  function(tag,ml,cmo,env,build)
   {var ml$1=env(ml);
    var cmo$1=env(cmo);
    prepare_compile(build,ml$1);
    var $js=Tags["Operators"][3];
    var $js$1=Tags["Operators"][1];
    var $js$2=Tags["union"];
    var $js$3=Tools["tags_of_pathname"];
    var $js$4=$js$3(ml$1);
    var $js$5=Tools["tags_of_pathname"];
    var $js$6=$js$5(cmo$1);
    var $js$7=$js$2($js$4,$js$6);
    var $js$8=$js$1($js$7,"implem");
    var $js$9=$js($js$8,tag);
    return ocamlc_c($js$9,ml$1,cmo$1)};
var $js=Hashtbl["create"];
var cache_prepare_link=$js(0,107);
var
 prepare_link=
  function(tag,cmx,extensions,build)
   {var key=[0,tag,cmx,extensions];
    var $js$1=Pathname["dirname"];
    var dir=$js$1(cmx);
    var $js$2=Pathname["include_dirs_of"];
    var include_dirs=$js$2(dir);
    var $js$3=Pathname["update_extensions"];
    var ml=$js$3("ml",cmx);
    var $js$4=Pathname["update_extensions"];
    var mli=$js$4("mli",cmx);
    var $js$5=My_std["List"][3];
    var $js$6=Pathname["exists"];
    var $js$7=Pathname["Operators"][2];
    var $js$8=$js$7(ml,"depends");
    var $js$9=$js$6($js$8);
    if($js$9)
     {var $js$10=Ocaml_utils["path_dependencies_of"];var $js$11=$js$10(ml)}
    else
     {var $js$11=0}
    var $js$12=Pathname["exists"];
    var $js$13=Pathname["Operators"][2];
    var $js$14=$js$13(mli,"depends");
    var $js$15=$js$12($js$14);
    if($js$15)
     {var $js$16=Ocaml_utils["path_dependencies_of"];var $js$17=$js$16(mli)}
    else
     {var $js$17=0}
    var modules=$js$5($js$11,$js$17);
    var $js$18=Pathname["exists"];
    var $js$19=Pervasives["^"];
    var $js$20=$js$19(ml,"pack");
    var $js$21=$js$18($js$20);
    var $js$22=(modules=0)&&$js$21;
    if($js$22)
     {var $js$23=My_std["List"][16];
      var $js$24=Ocaml_utils["string_list_of_file"];
      var $js$25=Pervasives["^"];
      var $js$26=$js$25(ml,"pack");
      var $js$27=$js$24($js$26);
      var modules$1=$js$23(function(s){return [0,-38817255,s]},$js$27)}
    else
     {var modules$1=modules}
    var $js$28=Hashtbl["mem"];
    var $js$29=$js$28(cache_prepare_link,key);
    var $js$30=!$js$29;
    var $js$31=modules$1!=0&&$js$30;
    if($js$31)
     {var $js$32=Hashtbl["add"];
      var match=$js$32(cache_prepare_link,key,1);
      var $js$33=My_std["List"][16];
      var
       modules'=
        $js$33
         (function(param)
           {var $js$34=Ocaml_utils["expand_module"];
            return $js$34(include_dirs,param[2],extensions)},
          modules$1);
      var $js$34=My_std["List"][21];
      var $js$35=build(modules');
      return $js$34
              (function(param,result)
                {var $js$36=result;
                 if($js$36==0)
                  {return prepare_link(tag,result[1],extensions,build)}
                 else
                  if($js$36==1)
                   {var $js$37=param[1]>=886832744;
                    if($js$37)
                     {return 0}
                    else
                     {var $js$38=!Options["ignore_auto"][1];
                      if($js$38){return "unknown primitive:raise"}else{return 0}}}},
               modules$1,
               $js$35)}
    else
     {return 0}};
var
 native_compile_ocaml_implem=
  function(tag,*opt*,ml,env,build)
   {var $js$1=*opt*;
    if($js$1){var cmx_ext=*opt*[1]}else{var cmx_ext="cmx"}
    var ml$1=env(ml);
    var $js$2=Pathname["update_extensions"];
    var cmi=$js$2("cmi",ml$1);
    var $js$3=Pathname["update_extensions"];
    var cmx=$js$3(cmx_ext,ml$1);
    prepare_link(cmx,cmi,[0,cmx_ext,[0,"cmi",0]],build);
    var $js$4=Tags["Operators"][3];
    var $js$5=Tags["Operators"][1];
    var $js$6=Tags["union"];
    var $js$7=Tools["tags_of_pathname"];
    var $js$8=$js$7(ml$1);
    var $js$9=Tools["tags_of_pathname"];
    var $js$10=$js$9(cmx);
    var $js$11=$js$6($js$8,$js$10);
    var $js$12=$js$5($js$11,"implem");
    var $js$13=$js$4($js$12,tag);
    return ocamlopt_c($js$13,ml$1,cmx)};
var
 libs_of_use_lib=
  function(tags)
   {var $js$1=Tags["fold"];
    return $js$1
            (function(tag,acc)
              {try
                {var $js$2=Hashtbl["find"];
                 var match=$js$2(Ocaml_utils["info_libraries"],tag);
                 var $js$3=match[2];
                 if($js$3){return acc}else{return [0,match[1],acc]}}
               catch(exn)
                {var $js$4=exn=Not_found;
                 if($js$4){return acc}else{return "unknown primitive:reraise"}}},
             tags,
             0)};
var
 prepare_libs=
  function(cma_ext,a_ext,out,build)
   {var $js$1=Pathname["remove_extension"];
    var out_no_ext=$js$1(out);
    var $js$2=My_std["List"][3];
    var $js$3=Ocaml_utils["libraries_of"];
    var $js$4=$js$3(out_no_ext);
    var $js$5=Tools["tags_of_pathname"];
    var $js$6=$js$5(out);
    var $js$7=libs_of_use_lib($js$6);
    var libs1=$js$2($js$4,$js$7);
    var $js$8=Log["dprintf"];
    var
     match=
      $js$8
       (10,
        [0,
         [11,"prepare_libs: ",[3,0,[11," -> ",[15,0]]]],
         "prepare_libs: %S -> %a"],
        out,
        Tools["pp_l"],
        libs1);
    var $js$9=My_std["List"][16];
    var
     libs=
      $js$9
       (function(x)
         {var $js$10=Pathname["Operators"][2];return $js$10(x,cma_ext)},
        libs1);
    var $js$10=My_std["List"][16];
    var
     libs2=
      $js$10
       (function(lib)
         {var $js$11=Pathname["Operators"][2];
          var $js$12=$js$11(lib,a_ext);
          return [0,$js$12,0]},
        libs1);
    var $js$11=My_std["List"][14];
    var $js$12=build(libs2);
    $js$11(My_std["Outcome"][2],$js$12);
    return libs};
var $js$1=Hashtbl["create"];
var library_index=$js$1(0,32);
var $js$2=Hashtbl["create"];
var package_index=$js$2(0,32);
var hidden_packages=[0,0];
var
 hide_package_contents=
  function(package)
   {return hidden_packages[1]=[0,package,hidden_packages[1]],0};
var fold_dependencies=Resource["Cache"][14];
var
 fold_libraries=
  function(f){var $js$3=Hashtbl["fold"];return $js$3(f,library_index)};
var
 fold_packages=
  function(f){var $js$3=Hashtbl["fold"];return $js$3(f,package_index)};
var
 Ocaml_dependencies_input=
  [0,fold_dependencies,fold_libraries,fold_packages];
var $js$3=Ocaml_dependencies["Make"];
var Ocaml_dependencies=$js$3(Ocaml_dependencies_input);
var caml_transitive_closure=Ocaml_dependencies[1];
var
 link_one_gen=
  function(linker,tagger,cmX,out,env,_build)
   {var cmX$1=env(cmX);
    var out$1=env(out);
    var $js$4=Tools["tags_of_pathname"];
    var $js$5=$js$4(out$1);
    var tags=tagger($js$5);
    return linker(tags,[0,cmX$1,0],out$1)};
var
 link_gen=
  function(cmX_ext,cma_ext,a_ext,extensions,linker,tagger,cmX,out,env,build)
   {var cmX$1=env(cmX);
    var out$1=env(out);
    var $js$4=Tools["tags_of_pathname"];
    var $js$5=$js$4(out$1);
    var tags=tagger($js$5);
    var $js$6=Rule["build_deps_of_tags"];
    var $js$7=Tags["Operators"][1];
    var $js$8=$js$7(tags,"link_with");
    var dyndeps=$js$6(build,$js$8);
    var $js$9=Pathname["update_extensions"];
    var cmi=$js$9("cmi",cmX$1);
    prepare_link(cmX$1,cmi,extensions,build);
    var libs=prepare_libs(cma_ext,a_ext,out$1,build);
    var $js$10=My_std["List"][16];
    var
     hidden_packages$1=
      $js$10
       (function(x)
         {var $js$11=Pathname["Operators"][2];return $js$11(x,cmX_ext)},
        hidden_packages[1]);
    var
     deps=
      caml_transitive_closure
       ([0,cmX_ext],
        [0,cma_ext],
        0,
        [0,libs],
        [0,hidden_packages$1],
        [0,cmX$1,dyndeps]);
    var $js$11=Pervasives["@"];
    var $js$12=My_std["List"][33];
    var
     $js$13=
      $js$12
       (function(l)
         {var $js$14=My_std["List"][30];
          var $js$15=$js$14(l,deps);
          return !$js$15},
        libs);
    var deps$1=$js$11($js$13,deps);
    var $js$14=Pathname["Operators"][2];
    var stdlib=$js$14("stdlib/stdlib",cma_ext);
    var
     is_not_stdlib=
      function(x){return "unknown primitive:caml_string_notequal"};
    var $js$15=My_std["List"][33];
    var deps$2=$js$15(is_not_stdlib,deps$1);
    var $js$16=deps$2=0;
    if($js$16)
     {var $js$17=Pervasives["failwith"];$js$17("Link list cannot be empty")}
    else
     {}
    var $js$18=Log["dprintf"];
    var
     match=
      $js$18
       (6,
        [0,[11,"link: ",[15,[11," -o ",[15,0]]]],"link: %a -o %a"],
        My_std["print_string_list"],
        deps$2,
        Pathname["print"],
        out$1);
    var $js$19=Tags["Operators"][1];
    var $js$20=$js$19(tags,"dont_link_with");
    return linker($js$20,deps$2,out$1)};
var byte_link_gen=link_gen("cmo","cma","cma",[0,"cmo",[0,"cmi",0]]);
var
 byte_link=
  byte_link_gen
   (ocamlc_link_prog,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=Tags["Operators"][1];
      var $js$8=$js$7(tags,"ocaml");
      var $js$9=$js$6($js$8,"link");
      var $js$10=$js$5($js$9,"byte");
      return $js$4($js$10,"program")});
var
 byte_output_obj=
  byte_link_gen
   (ocamlc_link_prog,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=Tags["Operators"][1];
      var $js$8=$js$7(tags,"ocaml");
      var $js$9=$js$6($js$8,"link");
      var $js$10=$js$5($js$9,"byte");
      return $js$4($js$10,"output_obj")});
var
 byte_output_shared=
  byte_link_gen
   (ocamlc_link_prog,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=Tags["Operators"][1];
      var $js$8=Tags["Operators"][1];
      var $js$9=$js$8(tags,"ocaml");
      var $js$10=$js$7($js$9,"link");
      var $js$11=$js$6($js$10,"byte");
      var $js$12=$js$5($js$11,"output_obj");
      return $js$4($js$12,"output_shared")});
var byte_library_link=byte_link_gen(byte_lib_linker,byte_lib_linker_tags);
var
 byte_debug_link_gen=
  link_gen("d.cmo","d.cma","d.cma",[0,"d.cmo",[0,"cmi",0]]);
var
 byte_debug_link=
  byte_debug_link_gen
   (ocamlc_link_prog,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=Tags["Operators"][1];
      var $js$8=Tags["Operators"][1];
      var $js$9=$js$8(tags,"ocaml");
      var $js$10=$js$7($js$9,"link");
      var $js$11=$js$6($js$10,"byte");
      var $js$12=$js$5($js$11,"debug");
      return $js$4($js$12,"program")});
var
 byte_debug_library_link=
  byte_debug_link_gen
   (byte_lib_linker,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=byte_lib_linker_tags(tags);
      return $js$4($js$5,"debug")});
var
 native_link_gen=
  function(linker)
   {return link_gen
            ("cmx",
             "cmxa",
             Options["ext_lib"][1],
             [0,Options["ext_obj"][1],[0,"cmi",0]],
             linker)};
var
 native_link=
  function(x)
   {return native_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=Tags["Operators"][1];
               var $js$6=Tags["Operators"][1];
               var $js$7=Tags["Operators"][1];
               var $js$8=$js$7(tags,"ocaml");
               var $js$9=$js$6($js$8,"link");
               var $js$10=$js$5($js$9,"native");
               return $js$4($js$10,"program")},
             x)};
var
 native_output_obj=
  function(x)
   {return native_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=Tags["Operators"][1];
               var $js$6=Tags["Operators"][1];
               var $js$7=Tags["Operators"][1];
               var $js$8=$js$7(tags,"ocaml");
               var $js$9=$js$6($js$8,"link");
               var $js$10=$js$5($js$9,"native");
               return $js$4($js$10,"output_obj")},
             x)};
var
 native_output_shared=
  function(x)
   {return native_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=Tags["Operators"][1];
               var $js$6=Tags["Operators"][1];
               var $js$7=Tags["Operators"][1];
               var $js$8=Tags["Operators"][1];
               var $js$9=$js$8(tags,"ocaml");
               var $js$10=$js$7($js$9,"link");
               var $js$11=$js$6($js$10,"native");
               var $js$12=$js$5($js$11,"output_obj");
               return $js$4($js$12,"output_shared")},
             x)};
var
 native_library_link=
  function(x)
   {return native_link_gen(native_lib_linker,native_lib_linker_tags,x)};
var
 native_profile_link_gen=
  function(linker)
   {var $js$4=Pathname["Operators"][2];
    var $js$5=$js$4("p",Options["ext_lib"][1]);
    var $js$6=Pathname["Operators"][2];
    var $js$7=$js$6("p",Options["ext_obj"][1]);
    var $js$8=[0,$js$7,[0,"cmi",0]];
    return link_gen("p.cmx","p.cmxa",$js$5,$js$8,linker)};
var
 native_profile_link=
  function(x)
   {return native_profile_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=Tags["Operators"][1];
               var $js$6=Tags["Operators"][1];
               var $js$7=Tags["Operators"][1];
               var $js$8=Tags["Operators"][1];
               var $js$9=$js$8(tags,"ocaml");
               var $js$10=$js$7($js$9,"link");
               var $js$11=$js$6($js$10,"native");
               var $js$12=$js$5($js$11,"profile");
               return $js$4($js$12,"program")},
             x)};
var
 native_profile_library_link=
  function(x)
   {return native_profile_link_gen
            (native_lib_linker,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=native_lib_linker_tags(tags);
               return $js$4($js$5,"profile")},
             x)};
var
 link_units=
  function
   (table,
    extensions,
    cmX_ext,
    cma_ext,
    a_ext,
    linker,
    tagger,
    contents_list,
    cmX,
    env,
    build)
   {var cmX$1=env(cmX);
    var $js$4=Tools["tags_of_pathname"];
    var $js$5=$js$4(cmX$1);
    var tags=tagger($js$5);
    var $js$6=Rule["build_deps_of_tags"];
    var match=$js$6(build,tags);
    var $js$7=Pathname["remove_extensions"];
    var dir1=$js$7(cmX$1);
    var $js$8=Resource["exists_in_source_dir"];
    var $js$9=$js$8(dir1);
    if($js$9)
     {var dir=dir1}
    else
     {var $js$10=Pathname["dirname"];var dir=$js$10(cmX$1)}
    var $js$11=Pathname["include_dirs_of"];
    var include_dirs=$js$11(dir);
    var $js$12=My_std["List"][16];
    var extension_keys=$js$12(function(prim){return prim[1]},extensions);
    var libs=prepare_libs(cma_ext,a_ext,cmX$1,build);
    var $js$13=My_std["List"][16];
    var
     $js$14=
      $js$13
       (function(module_name)
         {var $js$15=Ocaml_utils["expand_module"];
          return $js$15(include_dirs,module_name,extension_keys)},
        contents_list);
    var results=build($js$14);
    var $js$15=My_std["List"][16];
    var
     module_paths=
      $js$15
       (function(param)
         {var $js$16=param;
          if($js$16==0)
           {var p=param[1];
            var $js$17=My_std["List"][36];
            var $js$18=Pathname["get_extensions"];
            var $js$19=$js$18(p);
            var extension_values=$js$17($js$19,extensions);
            var $js$20=My_std["List"][14];
            $js$20
             (function(ext)
               {var $js$21=My_std["List"][14];
                var $js$22=Pathname["update_extensions"];
                var $js$23=$js$22(ext,p);
                var $js$24=[0,$js$23,0];
                var $js$25=[0,$js$24,0];
                var $js$26=build($js$25);
                return $js$21(My_std["Outcome"][2],$js$26)},
              extension_values);
            return p}
          else
           if($js$16==1){return "unknown primitive:raise"}},
        results);
    var $js$16=Hashtbl["replace"];
    $js$16(table,cmX$1,module_paths);
    var $js$17=My_std["List"][16];
    var
     hidden_packages$1=
      $js$17
       (function(x)
         {var $js$18=Pathname["Operators"][2];return $js$18(x,cmX_ext)},
        hidden_packages[1]);
    var
     deps=
      caml_transitive_closure
       ([0,cmX_ext],[0,cma_ext],[0,1],0,[0,hidden_packages$1],module_paths);
    var $js$18=Pervasives["@"];
    var full_contents=$js$18(libs,module_paths);
    var $js$19=My_std["List"][33];
    var
     deps$1=
      $js$19
       (function(x)
         {var $js$20=My_std["List"][30];return $js$20(x,full_contents)},
        deps);
    var $js$20=Pervasives["@"];
    var $js$21=My_std["List"][33];
    var
     $js$22=
      $js$21
       (function(l)
         {var $js$23=My_std["List"][30];
          var $js$24=$js$23(l,deps$1);
          return !$js$24},
        libs);
    var deps$2=$js$20($js$22,deps$1);
    var $js$23=Pathname["Operators"][2];
    var stdlib=$js$23("stdlib/stdlib",cma_ext);
    var
     is_not_stdlib=
      function(x){return "unknown primitive:caml_string_notequal"};
    var $js$24=My_std["List"][33];
    var deps$3=$js$24(is_not_stdlib,deps$2);
    return linker(tags,deps$3,cmX$1)};
var link_modules=link_units(library_index);
var pack_modules=link_units(package_index);
var
 link_from_file=
  function(link,modules_file,cmX,env,build)
   {var modules_file$1=env(modules_file);
    var $js$4=Ocaml_utils["string_list_of_file"];
    var contents_list=$js$4(modules_file$1);
    return link(contents_list,cmX,env,build)};
var
 byte_library_link_modules=
  link_modules
   ([0,[0,"cmo",0],0],"cmo","cma","cma",byte_lib_linker,byte_lib_linker_tags);
var byte_library_link_mllib=link_from_file(byte_library_link_modules);
var
 byte_toplevel_link_modules=
  link_modules
   ([0,[0,"cmo",0],0],
    "cmo",
    "cma",
    "cma",
    ocamlmktop,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=Tags["Operators"][1];
      var $js$8=$js$7(tags,"ocaml");
      var $js$9=$js$6($js$8,"link");
      var $js$10=$js$5($js$9,"byte");
      return $js$4($js$10,"toplevel")});
var byte_toplevel_link_mltop=link_from_file(byte_toplevel_link_modules);
var
 byte_debug_library_link_modules=
  link_modules
   ([0,[0,"d.cmo",0],0],
    "d.cmo",
    "d.cma",
    "d.cma",
    byte_lib_linker,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=byte_lib_linker_tags(tags);
      return $js$4($js$5,"debug")});
var
 byte_debug_library_link_mllib=
  link_from_file(byte_debug_library_link_modules);
var
 byte_pack_modules=
  pack_modules
   ([0,[0,"cmo",[0,"cmi",0]],[0,[0,"cmi",0],0]],
    "cmo",
    "cma",
    "cma",
    ocamlc_p,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=$js$6(tags,"ocaml");
      var $js$8=$js$5($js$7,"pack");
      return $js$4($js$8,"byte")});
var byte_pack_mlpack=link_from_file(byte_pack_modules);
var
 byte_debug_pack_modules=
  pack_modules
   ([0,[0,"d.cmo",[0,"cmi",0]],[0,[0,"cmi",0],0]],
    "d.cmo",
    "d.cma",
    "d.cma",
    ocamlc_p,
    function(tags)
     {var $js$4=Tags["Operators"][1];
      var $js$5=Tags["Operators"][1];
      var $js$6=Tags["Operators"][1];
      var $js$7=Tags["Operators"][1];
      var $js$8=$js$7(tags,"ocaml");
      var $js$9=$js$6($js$8,"pack");
      var $js$10=$js$5($js$9,"byte");
      return $js$4($js$10,"debug")});
var byte_debug_pack_mlpack=link_from_file(byte_debug_pack_modules);
var
 native_pack_modules=
  function(x)
   {return pack_modules
            ([0,
              [0,"cmx",[0,"cmi",[0,Options["ext_obj"][1],0]]],
              [0,[0,"cmi",0],0]],
             "cmx",
             "cmxa",
             Options["ext_lib"][1],
             ocamlopt_p,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=Tags["Operators"][1];
               var $js$6=Tags["Operators"][1];
               var $js$7=$js$6(tags,"ocaml");
               var $js$8=$js$5($js$7,"pack");
               return $js$4($js$8,"native")},
             x)};
var native_pack_mlpack=link_from_file(native_pack_modules);
var
 native_profile_pack_modules=
  function(x)
   {var $js$4=Pathname["Operators"][2];
    var $js$5=$js$4("p",Options["ext_obj"][1]);
    var $js$6=[0,$js$5,0];
    var $js$7=[0,"cmi",$js$6];
    var $js$8=[0,"p.cmx",$js$7];
    var $js$9=[0,$js$8,[0,[0,"cmi",0],0]];
    var $js$10=Pathname["Operators"][2];
    var $js$11=$js$10("p",Options["ext_lib"][1]);
    return pack_modules
            ($js$9,
             "p.cmx",
             "p.cmxa",
             $js$11,
             ocamlopt_p,
             function(tags)
              {var $js$12=Tags["Operators"][1];
               var $js$13=Tags["Operators"][1];
               var $js$14=Tags["Operators"][1];
               var $js$15=Tags["Operators"][1];
               var $js$16=$js$15(tags,"ocaml");
               var $js$17=$js$14($js$16,"pack");
               var $js$18=$js$13($js$17,"native");
               return $js$12($js$18,"profile")},
             x)};
var native_profile_pack_mlpack=link_from_file(native_profile_pack_modules);
var
 native_library_link_modules=
  function(x)
   {return link_modules
            ([0,[0,"cmx",[0,Options["ext_obj"][1],0]],0],
             "cmx",
             "cmxa",
             Options["ext_lib"][1],
             native_lib_linker,
             native_lib_linker_tags,
             x)};
var
 native_shared_library_link_modules=
  function(x)
   {return link_modules
            ([0,[0,"cmx",[0,Options["ext_obj"][1],0]],0],
             "cmx",
             "cmxa",
             Options["ext_lib"][1],
             native_shared_lib_linker,
             function(tags)
              {var $js$4=Tags["Operators"][1];
               var $js$5=native_lib_linker_tags(tags);
               return $js$4($js$5,"shared")},
             x)};
var native_library_link_mllib=link_from_file(native_library_link_modules);
var
 native_shared_library_link_mldylib=
  link_from_file(native_shared_library_link_modules);
var
 native_shared_library_tags=
  function(tags,basetags)
   {var $js$4=My_std["List"][19];
    var $js$5=Tags["Operators"][1];
    var $js$6=Tags["Operators"][1];
    var $js$7=Tags["Operators"][1];
    var $js$8=Tags["Operators"][1];
    var $js$9=Tags["Operators"][1];
    var $js$10=$js$9(basetags,"ocaml");
    var $js$11=$js$8($js$10,"link");
    var $js$12=$js$7($js$11,"native");
    var $js$13=$js$6($js$12,"shared");
    var $js$14=$js$5($js$13,"library");
    return $js$4(Tags["Operators"][1],$js$14,tags)};
var
 native_shared_library_link=
  function(*opt*,x)
   {var $js$4=*opt*;
    if($js$4){var tags=*opt*[1]}else{var tags=0}
    var $js$5=native_shared_library_tags(tags);
    return link_one_gen(native_shared_lib_linker,$js$5,x)};
var
 native_profile_library_link_modules=
  function(x)
   {var $js$4=Pathname["Operators"][2];
    var $js$5=$js$4("p",Options["ext_obj"][1]);
    var $js$6=[0,$js$5,0];
    var $js$7=[0,"p.cmx",$js$6];
    var $js$8=[0,$js$7,0];
    var $js$9=Pathname["Operators"][2];
    var $js$10=$js$9("p",Options["ext_lib"][1]);
    return link_modules
            ($js$8,
             "p.cmx",
             "p.cmxa",
             $js$10,
             native_lib_linker,
             function(tags)
              {var $js$11=Tags["Operators"][1];
               var $js$12=native_lib_linker_tags(tags);
               return $js$11($js$12,"profile")},
             x)};
var
 native_profile_shared_library_link_modules=
  function(x)
   {var $js$4=Pathname["Operators"][2];
    var $js$5=$js$4("p",Options["ext_obj"][1]);
    var $js$6=[0,$js$5,0];
    var $js$7=[0,"p.cmx",$js$6];
    var $js$8=[0,$js$7,0];
    var $js$9=Pathname["Operators"][2];
    var $js$10=$js$9("p",Options["ext_lib"][1]);
    return link_modules
            ($js$8,
             "p.cmx",
             "p.cmxa",
             $js$10,
             native_shared_lib_linker,
             function(tags)
              {var $js$11=Tags["Operators"][1];
               var $js$12=Tags["Operators"][1];
               var $js$13=native_lib_linker_tags(tags);
               var $js$14=$js$12($js$13,"shared");
               return $js$11($js$14,"profile")},
             x)};
var
 native_profile_library_link_mllib=
  link_from_file(native_profile_library_link_modules);
var
 native_profile_shared_library_link_mldylib=
  link_from_file(native_profile_shared_library_link_modules);
module["exports"]=
{"forpack_flags":forpack_flags,
 "ocamlc_c":ocamlc_c,
 "ocamlc_link_lib":ocamlc_link_lib,
 "ocamlc_link_prog":ocamlc_link_prog,
 "ocamlc_p":ocamlc_p,
 "ocamlopt_c":ocamlopt_c,
 "ocamlopt_link_lib":ocamlopt_link_lib,
 "ocamlopt_link_shared_lib":ocamlopt_link_shared_lib,
 "ocamlopt_link_prog":ocamlopt_link_prog,
 "ocamlopt_p":ocamlopt_p,
 "ocamlmklib":ocamlmklib,
 "ocamlmktop":ocamlmktop,
 "prepare_compile":prepare_compile,
 "compile_ocaml_interf":compile_ocaml_interf,
 "byte_compile_ocaml_interf":byte_compile_ocaml_interf,
 "byte_compile_ocaml_implem":byte_compile_ocaml_implem,
 "prepare_link":prepare_link,
 "native_compile_ocaml_implem":native_compile_ocaml_implem,
 "prepare_libs":prepare_libs,
 "link_gen":link_gen,
 "byte_link":byte_link,
 "byte_output_obj":byte_output_obj,
 "byte_output_shared":byte_output_shared,
 "byte_library_link":byte_library_link,
 "byte_debug_link":byte_debug_link,
 "byte_debug_library_link":byte_debug_library_link,
 "native_link":native_link,
 "native_output_obj":native_output_obj,
 "native_output_shared":native_output_shared,
 "native_library_link":native_library_link,
 "native_shared_library_link":native_shared_library_link,
 "native_profile_link":native_profile_link,
 "native_profile_library_link":native_profile_library_link,
 "link_modules":link_modules,
 "pack_modules":pack_modules,
 "byte_library_link_modules":byte_library_link_modules,
 "byte_library_link_mllib":byte_library_link_mllib,
 "byte_debug_library_link_modules":byte_debug_library_link_modules,
 "byte_debug_library_link_mllib":byte_debug_library_link_mllib,
 "byte_pack_modules":byte_pack_modules,
 "byte_pack_mlpack":byte_pack_mlpack,
 "byte_debug_pack_modules":byte_debug_pack_modules,
 "byte_debug_pack_mlpack":byte_debug_pack_mlpack,
 "byte_toplevel_link_modules":byte_toplevel_link_modules,
 "byte_toplevel_link_mltop":byte_toplevel_link_mltop,
 "native_pack_modules":native_pack_modules,
 "native_pack_mlpack":native_pack_mlpack,
 "native_library_link_modules":native_library_link_modules,
 "native_library_link_mllib":native_library_link_mllib,
 "native_shared_library_link_modules":native_shared_library_link_modules,
 "native_shared_library_link_mldylib":native_shared_library_link_mldylib,
 "native_profile_pack_modules":native_profile_pack_modules,
 "native_profile_pack_mlpack":native_profile_pack_mlpack,
 "native_profile_library_link_modules":native_profile_library_link_modules,
 "native_profile_library_link_mllib":native_profile_library_link_mllib,
 "native_profile_shared_library_link_modules":
 native_profile_shared_library_link_modules,
 "native_profile_shared_library_link_mldylib":
 native_profile_shared_library_link_mldylib,
 "hide_package_contents":hide_package_contents};
