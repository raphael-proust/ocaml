// Generated CODE, PLEASE EDIT WITH CARE 

var Ocaml_utils=require("Ocaml_utils");
var Tools=require("Tools");
var Options=require("Options");
var Ocaml_dependencies=require("Ocaml_dependencies");
var Ocaml_arch=require("Ocaml_arch");
var Pervasives=require("Pervasives");
var Rule=require("Rule");
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
   {if(Tags["mem"]("pack",tags))
     {return Ocaml_arch["forpack_flags_of_pathname"](arg);}
    else
     {return 0;}
    };

var
 ocamlc_c=
  function(tags,arg,out)
   {var
     tags$1=
      Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"byte");
    
    return [1,
            [0,
             [0,
              Options["ocamlc"][1],
              [0,
               [1,"-c"],
               [0,
                [5,Tags["Operators"][1](tags$1,"compile")],
                [0,
                 Ocaml_utils["ocaml_ppflags"](tags$1),
                 [0,
                  Ocaml_utils["ocaml_include_flags"](arg),
                  [0,[1,"-o"],[0,[3,out],[0,[2,arg],0]]]]]]]]]];
    };

var
 ocamlc_link=
  function(flag,tags,deps,out)
   {return [1,
            [0,
             [0,
              Options["ocamlc"][1],
              [0,
               flag,
               [0,
                [5,tags],
                [0,Command["atomize_paths"](deps),[0,[1,"-o"],[0,[3,out],0]]]]]]]];
    };

var ocamlc_link_lib=ocamlc_link([1,"-a"]);

var ocamlc_link_prog=ocamlc_link(0);

var
 ocamlmklib=
  function(tags,deps,out)
   {return [1,
            [0,
             [0,
              Options["ocamlmklib"][1],
              [0,
               [5,tags],
               [0,
                Command["atomize_paths"](deps),
                [0,[1,"-o"],[0,[3,Pathname["remove_extensions"](out)],0]]]]]]];
    };

var
 ocamlmktop=
  function(tags,deps,out)
   {return [1,
            [0,
             [0,
              Options["ocamlmktop"][1],
              [0,
               [5,Tags["Operators"][1](tags,"mktop")],
               [0,Command["atomize_paths"](deps),[0,[1,"-o"],[0,[3,out],0]]]]]]];
    };

var
 byte_lib_linker=
  function(tags)
   {if(Tags["mem"]("ocamlmklib",tags))
     {return ocamlmklib(tags);}
    else
     {return ocamlc_link_lib(tags);}
    };

var
 byte_lib_linker_tags=
  function(tags)
   {return Tags["Operators"][1]
            (Tags["Operators"][1]
              (Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"link"),
               "byte"),
             "library");
    };

var
 ocamlc_p=
  function(tags,deps,out)
   {return [1,
            [0,
             [0,
              Options["ocamlc"][1],
              [0,
               [1,"-pack"],
               [0,
                [5,tags],
                [0,Command["atomize_paths"](deps),[0,[1,"-o"],[0,[3,out],0]]]]]]]];
    };

var
 ocamlopt_c=
  function(tags,arg,out)
   {var
     tags$1=
      Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"native");
    
    return [1,
            [0,
             [0,
              Options["ocamlopt"][1],
              [0,
               [1,"-c"],
               [0,
                Ocaml_arch["forpack_flags_of_pathname"](arg),
                [0,
                 [5,Tags["Operators"][1](tags$1,"compile")],
                 [0,
                  Ocaml_utils["ocaml_ppflags"](tags$1),
                  [0,
                   Ocaml_utils["ocaml_include_flags"](arg),
                   [0,[1,"-o"],[0,[3,out],[0,[2,arg],0]]]]]]]]]]];
    };

var
 ocamlopt_link=
  function(flag,tags,deps,out)
   {return [1,
            [0,
             [0,
              Options["ocamlopt"][1],
              [0,
               flag,
               [0,
                forpack_flags(out,tags),
                [0,
                 [5,tags],
                 [0,Command["atomize_paths"](deps),[0,[1,"-o"],[0,[3,out],0]]]]]]]]];
    };

var ocamlopt_link_lib=ocamlopt_link([1,"-a"]);

var ocamlopt_link_shared_lib=ocamlopt_link([1,"-shared"]);

var ocamlopt_link_prog=ocamlopt_link(0);

var
 ocamlopt_p=
  function(tags,deps,out)
   {var
     dirnames=
      My_std["List"][3](0,My_std["List"][16](Pathname["dirname"],deps));
    
    var
     include_flags=
      My_std["List"][20](Ocaml_utils["ocaml_add_include_flag"],dirnames,0);
    
    var mli=Pathname["update_extensions"]("mli",out);
    
    var
     cmd=
      [0,
       [0,
        Options["ocamlopt"][1],
        [0,
         [1,"-pack"],
         [0,
          forpack_flags(out,tags),
          [0,
           [5,tags],
           [0,
            [0,include_flags],
            [0,Command["atomize_paths"](deps),[0,[1,"-o"],[0,[3,out],0]]]]]]]]];
    
    if(Pathname["exists"](mli))
     {return [1,cmd];}
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
                    [0,rm,[0,[4," ; else "],[0,rm,[0,[4," ; exit 1; fi"],0]]]]]]]]]]];
      }
    };

var
 native_lib_linker=
  function(tags)
   {if(Tags["mem"]("ocamlmklib",tags))
     {return ocamlmklib(tags);}
    else
     {return ocamlopt_link_lib(tags);}
    };

var
 native_shared_lib_linker=
  function(tags){return ocamlopt_link_shared_lib(tags);};

var
 native_lib_linker_tags=
  function(tags)
   {return Tags["Operators"][1]
            (Tags["Operators"][1]
              (Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"link"),
               "native"),
             "library");
    };

var
 prepare_compile=
  function(build,ml)
   {var dir=Pathname["dirname"](ml);
    
    var include_dirs=Pathname["include_dirs_of"](dir);
    
    var modules=Ocaml_utils["path_dependencies_of"](ml);
    
    var
     results=
      build
       (My_std["List"][16]
         (function(param)
           {return Ocaml_utils["expand_module"]
                    (include_dirs,param[2],[0,"cmi",0]);
            },
          modules));
    
    return My_std["List"][21]
            (function(param,res)
              {switch(res)
                {case 0:return 0;
                 case 1:
                  if(param[1]>=886832744)
                   {return 0;}
                  else
                   {if(!Options["ignore_auto"][1]){throw res[1];}else{}
                    
                    Log["dprintf"]
                     (3,
                      [0,
                       [11,
                        "Warning: Failed to build the module ",
                        [2,0,[11," requested by ocamldep.",0]]],
                       "Warning: Failed to build the module %s requested by ocamldep."],
                      param[2]);
                    if
                     (!(Options["recursive"][1]||
                       Options["ocamlbuild_project_heuristic"](0)))
                     {return Log["at_failure"]
                              ("a module failed to build,\n           while recursive traversal was disabled by fragile heuristic;\n           hint that having a _tags or myocamlbuild.ml would maybe solve\n           the build error",
                               function(param$1)
                                {return Log["eprintf"]
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
                                           "Hint:@ Recursive@ traversal@ of@ subdirectories@ was@ not@ enabled@ for@ this@ build,@ as@ the@ working@ directory does@ not@ look@ like@ an@ ocamlbuild@ project@ (no@ '_tags'@ or@ 'myocamlbuild.ml'@ file).@ If@ you@ have@ modules@ in@ subdirectories,@ you@ should@ add@ the@ option@ \"-r\"@ or@ create@ an@ empty@ '_tags'@ file.@\n@\nTo@ enable@ recursive@ traversal@ for@ some@ subdirectories@ only,@ you@ can@ use@ the@ following@ '_tags'@ file:@\n@[<v 4>@,true: -traverse@,<dir1> or <dir2>: traverse@,@]"]);
                                 });
                      }
                    else
                     {return 0;}
                    }
                  
                 }
               },
             modules,
             results);
    };

var
 byte_compile_ocaml_interf=
  function(mli,cmi,env,build)
   {var mli$1=env(mli);
    
    var cmi$1=env(cmi);
    
    prepare_compile(build,mli$1);
    return ocamlc_c
            (Tags["Operators"][1](Tools["tags_of_pathname"](mli$1),"interf"),
             mli$1,
             cmi$1);
    };

var
 compile_ocaml_interf=
  function(mli,cmi,env,build)
   {var mli$1=env(mli);
    
    var cmi$1=env(cmi);
    
    prepare_compile(build,mli$1);
    var tags=Tags["Operators"][1](Tools["tags_of_pathname"](mli$1),"interf");
    
    if(Tags["mem"]("native",tags))
     {var comp_c=ocamlopt_c;}
    else
     {var comp_c=ocamlc_c;}
    
    return comp_c(tags,mli$1,cmi$1);
    };

var
 byte_compile_ocaml_implem=
  function(tag,ml,cmo,env,build)
   {var ml$1=env(ml);
    
    var cmo$1=env(cmo);
    
    prepare_compile(build,ml$1);
    return ocamlc_c
            (Tags["Operators"][3]
              (Tags["Operators"][1]
                (Tags["union"]
                  (Tools["tags_of_pathname"](ml$1),
                   Tools["tags_of_pathname"](cmo$1)),
                 "implem"),
               tag),
             ml$1,
             cmo$1);
    };

var cache_prepare_link=Hashtbl["create"](0,107);

var
 prepare_link=
  function(tag,cmx,extensions,build)
   {var key=[0,tag,cmx,extensions];
    
    var dir=Pathname["dirname"](cmx);
    
    var include_dirs=Pathname["include_dirs_of"](dir);
    
    var ml=Pathname["update_extensions"]("ml",cmx);
    
    var mli=Pathname["update_extensions"]("mli",cmx);
    
    var
     modules=
      My_std["List"][3]
       (Pathname["exists"](Pathname["Operators"][2](ml,"depends"))
         ?Ocaml_utils["path_dependencies_of"](ml)
         :0,
        Pathname["exists"](Pathname["Operators"][2](mli,"depends"))
         ?Ocaml_utils["path_dependencies_of"](mli)
         :0);
    
    if((modules=0)&&Pathname["exists"](Pervasives["^"](ml,"pack")))
     {var
       modules$1=
        My_std["List"][16]
         (function(s){return [0,-38817255,s];},
          Ocaml_utils["string_list_of_file"](Pervasives["^"](ml,"pack")));
      }
    else
     {var modules$1=modules;}
    
    if(modules$1!=0&&!Hashtbl["mem"](cache_prepare_link,key))
     {var match=Hashtbl["add"](cache_prepare_link,key,1);
      
      var
       modules$prime=
        My_std["List"][16]
         (function(param)
           {return Ocaml_utils["expand_module"]
                    (include_dirs,param[2],extensions);
            },
          modules$1);
      
      return My_std["List"][21]
              (function(param,result)
                {switch(result)
                  {case 0:return prepare_link(tag,result[1],extensions,build);
                   case 1:
                    if(param[1]>=886832744)
                     {return 0;}
                    else
                     {if(!Options["ignore_auto"][1])
                       {throw result[1];}
                      else
                       {return 0;}
                      }
                    
                   }
                 },
               modules$1,
               build(modules$prime));
      }
    else
     {return 0;}
    };

var
 native_compile_ocaml_implem=
  function(tag,$staropt$star,ml,env,build)
   {if($staropt$star){var cmx_ext=$staropt$star[1];}else{var cmx_ext="cmx";}
    
    var ml$1=env(ml);
    
    var cmi=Pathname["update_extensions"]("cmi",ml$1);
    
    var cmx=Pathname["update_extensions"](cmx_ext,ml$1);
    
    prepare_link(cmx,cmi,[0,cmx_ext,[0,"cmi",0]],build);
    return ocamlopt_c
            (Tags["Operators"][3]
              (Tags["Operators"][1]
                (Tags["union"]
                  (Tools["tags_of_pathname"](ml$1),
                   Tools["tags_of_pathname"](cmx)),
                 "implem"),
               tag),
             ml$1,
             cmx);
    };

var
 libs_of_use_lib=
  function(tags)
   {return Tags["fold"]
            (function(tag,acc)
              {try
                {var match=Hashtbl["find"](Ocaml_utils["info_libraries"],tag);
                 
                 if(match[2]){return acc;}else{return [0,match[1],acc];}
                 }
               catch(exn){if(exn=Not_found){return acc;}else{throw exn;}}
               },
             tags,
             0);
    };

var
 prepare_libs=
  function(cma_ext,a_ext,out,build)
   {var out_no_ext=Pathname["remove_extension"](out);
    
    var
     libs1=
      My_std["List"][3]
       (Ocaml_utils["libraries_of"](out_no_ext),
        libs_of_use_lib(Tools["tags_of_pathname"](out)));
    
    var
     match=
      Log["dprintf"]
       (10,
        [0,
         [11,"prepare_libs: ",[3,0,[11," -> ",[15,0]]]],
         "prepare_libs: %S -> %a"],
        out,
        Tools["pp_l"],
        libs1);
    
    var
     libs=
      My_std["List"][16]
       (function(x){return Pathname["Operators"][2](x,cma_ext);},libs1);
    
    var
     libs2=
      My_std["List"][16]
       (function(lib){return [0,Pathname["Operators"][2](lib,a_ext),0];},
        libs1);
    
    My_std["List"][14](My_std["Outcome"][2],build(libs2));
    return libs;
    };

var library_index=Hashtbl["create"](0,32);

var package_index=Hashtbl["create"](0,32);

var hidden_packages=[0,0];

var
 hide_package_contents=
  function($$package)
   {return hidden_packages[1]=[0,$$package,hidden_packages[1]],0;};

var fold_dependencies=Resource["Cache"][14];

var fold_libraries=function(f){return Hashtbl["fold"](f,library_index);};

var fold_packages=function(f){return Hashtbl["fold"](f,package_index);};

var
 Ocaml_dependencies_input=
  [0,fold_dependencies,fold_libraries,fold_packages];

var Ocaml_dependencies=Ocaml_dependencies["Make"](Ocaml_dependencies_input);

var caml_transitive_closure=Ocaml_dependencies[1];

var
 link_one_gen=
  function(linker,tagger,cmX,out,env,_build)
   {var cmX$1=env(cmX);
    
    var out$1=env(out);
    
    var tags=tagger(Tools["tags_of_pathname"](out$1));
    
    return linker(tags,[0,cmX$1,0],out$1);
    };

var
 link_gen=
  function(cmX_ext,cma_ext,a_ext,extensions,linker,tagger,cmX,out,env,build)
   {var cmX$1=env(cmX);
    
    var out$1=env(out);
    
    var tags=tagger(Tools["tags_of_pathname"](out$1));
    
    var
     dyndeps=
      Rule["build_deps_of_tags"](build,Tags["Operators"][1](tags,"link_with"));
    
    var cmi=Pathname["update_extensions"]("cmi",cmX$1);
    
    prepare_link(cmX$1,cmi,extensions,build);
    var libs=prepare_libs(cma_ext,a_ext,out$1,build);
    
    var
     hidden_packages$1=
      My_std["List"][16]
       (function(x){return Pathname["Operators"][2](x,cmX_ext);},
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
    
    var
     deps$1=
      Pervasives["@"]
       (My_std["List"][33]
         (function(l){return !My_std["List"][30](l,deps);},libs),
        deps);
    
    var stdlib=Pathname["Operators"][2]("stdlib/stdlib",cma_ext);
    
    var
     is_not_stdlib=
      function(x){return "unknown primitive:caml_string_notequal";};
    
    var deps$2=My_std["List"][33](is_not_stdlib,deps$1);
    
    if(deps$2=0){Pervasives["failwith"]("Link list cannot be empty")}else{}
    
    var
     match=
      Log["dprintf"]
       (6,
        [0,[11,"link: ",[15,[11," -o ",[15,0]]]],"link: %a -o %a"],
        My_std["print_string_list"],
        deps$2,
        Pathname["print"],
        out$1);
    
    return linker(Tags["Operators"][1](tags,"dont_link_with"),deps$2,out$1);
    };

var byte_link_gen=link_gen("cmo","cma","cma",[0,"cmo",[0,"cmi",0]]);

var
 byte_link=
  byte_link_gen
   (ocamlc_link_prog,
    function(tags)
     {return Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1](tags,"ocaml"),"link"),
                 "byte"),
               "program");
      });

var
 byte_output_obj=
  byte_link_gen
   (ocamlc_link_prog,
    function(tags)
     {return Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1](tags,"ocaml"),"link"),
                 "byte"),
               "output_obj");
      });

var
 byte_output_shared=
  byte_link_gen
   (ocamlc_link_prog,
    function(tags)
     {return Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1]
                    (Tags["Operators"][1](tags,"ocaml"),"link"),
                   "byte"),
                 "output_obj"),
               "output_shared");
      });

var byte_library_link=byte_link_gen(byte_lib_linker,byte_lib_linker_tags);

var
 byte_debug_link_gen=
  link_gen("d.cmo","d.cma","d.cma",[0,"d.cmo",[0,"cmi",0]]);

var
 byte_debug_link=
  byte_debug_link_gen
   (ocamlc_link_prog,
    function(tags)
     {return Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1]
                    (Tags["Operators"][1](tags,"ocaml"),"link"),
                   "byte"),
                 "debug"),
               "program");
      });

var
 byte_debug_library_link=
  byte_debug_link_gen
   (byte_lib_linker,
    function(tags)
     {return Tags["Operators"][1](byte_lib_linker_tags(tags),"debug");});

var
 native_link_gen=
  function(linker)
   {return link_gen
            ("cmx",
             "cmxa",
             Options["ext_lib"][1],
             [0,Options["ext_obj"][1],[0,"cmi",0]],
             linker);
    };

var
 native_link=
  function(x)
   {return native_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {return Tags["Operators"][1]
                       (Tags["Operators"][1]
                         (Tags["Operators"][1]
                           (Tags["Operators"][1](tags,"ocaml"),"link"),
                          "native"),
                        "program");
               },
             x);
    };

var
 native_output_obj=
  function(x)
   {return native_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {return Tags["Operators"][1]
                       (Tags["Operators"][1]
                         (Tags["Operators"][1]
                           (Tags["Operators"][1](tags,"ocaml"),"link"),
                          "native"),
                        "output_obj");
               },
             x);
    };

var
 native_output_shared=
  function(x)
   {return native_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {return Tags["Operators"][1]
                       (Tags["Operators"][1]
                         (Tags["Operators"][1]
                           (Tags["Operators"][1]
                             (Tags["Operators"][1](tags,"ocaml"),"link"),
                            "native"),
                          "output_obj"),
                        "output_shared");
               },
             x);
    };

var
 native_library_link=
  function(x)
   {return native_link_gen(native_lib_linker,native_lib_linker_tags,x);};

var
 native_profile_link_gen=
  function(linker)
   {return link_gen
            ("p.cmx",
             "p.cmxa",
             Pathname["Operators"][2]("p",Options["ext_lib"][1]),
             [0,
              Pathname["Operators"][2]("p",Options["ext_obj"][1]),
              [0,"cmi",0]],
             linker);
    };

var
 native_profile_link=
  function(x)
   {return native_profile_link_gen
            (ocamlopt_link_prog,
             function(tags)
              {return Tags["Operators"][1]
                       (Tags["Operators"][1]
                         (Tags["Operators"][1]
                           (Tags["Operators"][1]
                             (Tags["Operators"][1](tags,"ocaml"),"link"),
                            "native"),
                          "profile"),
                        "program");
               },
             x);
    };

var
 native_profile_library_link=
  function(x)
   {return native_profile_link_gen
            (native_lib_linker,
             function(tags)
              {return Tags["Operators"][1]
                       (native_lib_linker_tags(tags),"profile");
               },
             x);
    };

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
    
    var tags=tagger(Tools["tags_of_pathname"](cmX$1));
    
    var match=Rule["build_deps_of_tags"](build,tags);
    
    var dir1=Pathname["remove_extensions"](cmX$1);
    
    if(Resource["exists_in_source_dir"](dir1))
     {var dir=dir1;}
    else
     {var dir=Pathname["dirname"](cmX$1);}
    
    var include_dirs=Pathname["include_dirs_of"](dir);
    
    var
     extension_keys=
      My_std["List"][16](function(prim){return prim[1];},extensions);
    
    var libs=prepare_libs(cma_ext,a_ext,cmX$1,build);
    
    var
     results=
      build
       (My_std["List"][16]
         (function(module_name)
           {return Ocaml_utils["expand_module"]
                    (include_dirs,module_name,extension_keys);
            },
          contents_list));
    
    var
     module_paths=
      My_std["List"][16]
       (function(param)
         {switch(param)
           {case 0:
             var p=param[1];
             
             var
              extension_values=
               My_std["List"][36](Pathname["get_extensions"](p),extensions);
             
             My_std["List"][14]
              (function(ext)
                {return My_std["List"][14]
                         (My_std["Outcome"][2],
                          build([0,[0,Pathname["update_extensions"](ext,p),0],0]));
                 },
               extension_values);
             return p;
             
            case 1:throw param[1];
            }
          },
        results);
    
    Hashtbl["replace"](table,cmX$1,module_paths);
    var
     hidden_packages$1=
      My_std["List"][16]
       (function(x){return Pathname["Operators"][2](x,cmX_ext);},
        hidden_packages[1]);
    
    var
     deps=
      caml_transitive_closure
       ([0,cmX_ext],[0,cma_ext],[0,1],0,[0,hidden_packages$1],module_paths);
    
    var full_contents=Pervasives["@"](libs,module_paths);
    
    var
     deps$1=
      My_std["List"][33]
       (function(x){return My_std["List"][30](x,full_contents);},deps);
    
    var
     deps$2=
      Pervasives["@"]
       (My_std["List"][33]
         (function(l){return !My_std["List"][30](l,deps$1);},libs),
        deps$1);
    
    var stdlib=Pathname["Operators"][2]("stdlib/stdlib",cma_ext);
    
    var
     is_not_stdlib=
      function(x){return "unknown primitive:caml_string_notequal";};
    
    var deps$3=My_std["List"][33](is_not_stdlib,deps$2);
    
    return linker(tags,deps$3,cmX$1);
    };

var link_modules=link_units(library_index);

var pack_modules=link_units(package_index);

var
 link_from_file=
  function(link,modules_file,cmX,env,build)
   {var modules_file$1=env(modules_file);
    
    var contents_list=Ocaml_utils["string_list_of_file"](modules_file$1);
    
    return link(contents_list,cmX,env,build);
    };

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
     {return Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1](tags,"ocaml"),"link"),
                 "byte"),
               "toplevel");
      });

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
     {return Tags["Operators"][1](byte_lib_linker_tags(tags),"debug");});

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
     {return Tags["Operators"][1]
              (Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"pack"),
               "byte");
      });

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
     {return Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1](tags,"ocaml"),"pack"),
                 "byte"),
               "debug");
      });

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
              {return Tags["Operators"][1]
                       (Tags["Operators"][1]
                         (Tags["Operators"][1](tags,"ocaml"),"pack"),
                        "native");
               },
             x);
    };

var native_pack_mlpack=link_from_file(native_pack_modules);

var
 native_profile_pack_modules=
  function(x)
   {return pack_modules
            ([0,
              [0,
               "p.cmx",
               [0,
                "cmi",
                [0,Pathname["Operators"][2]("p",Options["ext_obj"][1]),0]]],
              [0,[0,"cmi",0],0]],
             "p.cmx",
             "p.cmxa",
             Pathname["Operators"][2]("p",Options["ext_lib"][1]),
             ocamlopt_p,
             function(tags)
              {return Tags["Operators"][1]
                       (Tags["Operators"][1]
                         (Tags["Operators"][1]
                           (Tags["Operators"][1](tags,"ocaml"),"pack"),
                          "native"),
                        "profile");
               },
             x);
    };

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
             x);
    };

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
              {return Tags["Operators"][1]
                       (native_lib_linker_tags(tags),"shared");
               },
             x);
    };

var native_library_link_mllib=link_from_file(native_library_link_modules);

var
 native_shared_library_link_mldylib=
  link_from_file(native_shared_library_link_modules);

var
 native_shared_library_tags=
  function(tags,basetags)
   {return My_std["List"][19]
            (Tags["Operators"][1],
             Tags["Operators"][1]
              (Tags["Operators"][1]
                (Tags["Operators"][1]
                  (Tags["Operators"][1]
                    (Tags["Operators"][1](basetags,"ocaml"),"link"),
                   "native"),
                 "shared"),
               "library"),
             tags);
    };

var
 native_shared_library_link=
  function($staropt$star,x)
   {if($staropt$star){var tags=$staropt$star[1];}else{var tags=0;}
    
    return link_one_gen
            (native_shared_lib_linker,native_shared_library_tags(tags),x);
    };

var
 native_profile_library_link_modules=
  function(x)
   {return link_modules
            ([0,
              [0,
               "p.cmx",
               [0,Pathname["Operators"][2]("p",Options["ext_obj"][1]),0]],
              0],
             "p.cmx",
             "p.cmxa",
             Pathname["Operators"][2]("p",Options["ext_lib"][1]),
             native_lib_linker,
             function(tags)
              {return Tags["Operators"][1]
                       (native_lib_linker_tags(tags),"profile");
               },
             x);
    };

var
 native_profile_shared_library_link_modules=
  function(x)
   {return link_modules
            ([0,
              [0,
               "p.cmx",
               [0,Pathname["Operators"][2]("p",Options["ext_obj"][1]),0]],
              0],
             "p.cmx",
             "p.cmxa",
             Pathname["Operators"][2]("p",Options["ext_lib"][1]),
             native_shared_lib_linker,
             function(tags)
              {return Tags["Operators"][1]
                       (Tags["Operators"][1](native_lib_linker_tags(tags),"shared"),
                        "profile");
               },
             x);
    };

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

