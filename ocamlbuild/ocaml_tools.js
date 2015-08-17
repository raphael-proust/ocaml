// Generated CODE, PLEASE EDIT WITH CARE 

var Ocaml_utils=require("./ocaml_utils.js");
var Tools=require("./tools.js");
var Options=require("./options.js");
var Ocaml_compiler=require("./ocaml_compiler.js");
var Rule=require("./rule.js");
var Pathname=require("./pathname.js");
var Flags=require("./flags.js");
var Command=require("./command.js");
var My_std=require("./my_std.js");
var Tags=require("./tags.js");


var
 add_suffix=
  function(s)
   {return My_std["List"][16]
            (function(x){return Pathname["Operators"][2](x,s);});
    };

var
 ocamldep_command$prime=
  function(tags)
   {var
     tags$prime=
      Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"ocamldep");
    
    return /* S */[0,
            /* :: */[0,
             Options["ocamldep"][1],
             /* :: */[0,
              /* T */[5,tags$prime],
              /* :: */[0,
               Ocaml_utils["ocaml_ppflags"]
                (Tags["Operators"][1](tags,"pp:dep")),
               [/* :: */0,[/* A */1,"-modules"],/* [] */0]]]]];
    };

var
 menhir_ocamldep_command$prime=
  function(tags,menhir_spec,out)
   {var
     menhir=
      Options["ocamlyacc"][1]===/* N */0
       ?[/* V */6,"MENHIR"]
       :Options["ocamlyacc"][1];
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              menhir,
              /* :: */[0,
               /* T */[5,tags],
               /* :: */[0,
                [/* A */1,"--raw-depend"],
                /* :: */[0,
                 [/* A */1,"--ocamldep"],
                 /* :: */[0,
                  /* Quote */[7,ocamldep_command$prime(Tags["empty"])],
                  /* :: */[0,
                   menhir_spec,
                   /* :: */[0,
                    [/* Sh */4,">"],
                    /* :: */[0,/* Px */[3,out],/* [] */0]]]]]]]]]];
    };

var
 menhir_ocamldep_command=
  function(arg,out,env,_build)
   {var arg$1=env(arg);
    
    var out$1=env(out);
    
    var
     tags=
      Tags["Operators"][1]
       (Tags["Operators"][1](Tools["tags_of_pathname"](arg$1),"ocaml"),
        "menhir_ocamldep");
    
    return menhir_ocamldep_command$prime(tags,/* P */[2,arg$1],out$1);
    };

var
 import_mlypack=
  function(build,mlypack)
   {var tags1=Tools["tags_of_pathname"](mlypack);
    
    var files=Ocaml_utils["string_list_of_file"](mlypack);
    
    var
     include_dirs=
      Pathname["include_dirs_of"](Pathname["dirname"](mlypack));
    
    var
     files_alternatives=
      My_std["List"][16]
       (function(module_name)
         {return Ocaml_utils["expand_module"]
                  (include_dirs,module_name,[/* :: */0,"mly",/* [] */0]);
          },
        files);
    
    var
     files$1=
      My_std["List"][16](My_std["Outcome"][3],build(files_alternatives));
    
    var
     tags2=
      My_std["List"][20]
       (function(file){return Tags["union"](Tools["tags_of_pathname"](file));},
        files$1,
        tags1);
    
    return /* tuple */[0,tags2,files$1];
    };

var
 menhir_modular_ocamldep_command=
  function(mlypack,out,env,build)
   {var mlypack$1=env(mlypack);
    
    var out$1=env(out);
    
    var match=import_mlypack(build,mlypack$1);
    
    var
     tags=
      Tags["Operators"][1]
       (Tags["Operators"][1](match[1],"ocaml"),"menhir_ocamldep");
    
    var menhir_base=Pathname["remove_extensions"](mlypack$1);
    
    var
     menhir_spec=
      /* S */[0,
       /* :: */[0,
        [/* A */1,"--base"],
        /* :: */[0,
         /* P */[2,menhir_base],
         /* :: */[0,Command["atomize_paths"](match[2]),/* [] */0]]]];
    
    return menhir_ocamldep_command$prime(tags,menhir_spec,out$1);
    };

var
 menhir_modular=
  function(menhir_base,mlypack,mlypack_depends,env,build)
   {var
     menhir=
      Options["ocamlyacc"][1]===/* N */0
       ?[/* V */6,"MENHIR"]
       :Options["ocamlyacc"][1];
    
    var menhir_base$1=env(menhir_base);
    
    var mlypack$1=env(mlypack);
    
    var mlypack_depends$1=env(mlypack_depends);
    
    var match=import_mlypack(build,mlypack$1);
    
    var tags=match[1];
    
    var
     match$1=
      My_std["List"][14]
       (My_std["Outcome"][2],
        build(/* :: */[0,/* :: */[0,mlypack_depends$1,/* [] */0],/* [] */0]));
    
    Ocaml_compiler["prepare_compile"](build,mlypack$1);
    var
     ocamlc_tags=
      Tags["Operators"][1]
       (Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"byte"),
        "compile");
    
    var
     tags$1=
      Tags["Operators"][1]
       (Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"parser"),
        "menhir");
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              menhir,
              /* :: */[0,
               [/* A */1,"--ocamlc"],
               /* :: */[0,
                /* Quote */[7,
                 /* S */[0,
                  /* :: */[0,
                   Options["ocamlc"][1],
                   /* :: */[0,
                    /* T */[5,ocamlc_tags],
                    /* :: */[0,
                     Ocaml_utils["ocaml_include_flags"](mlypack$1),
                     /* [] */0]]]]],
                /* :: */[0,
                 /* T */[5,tags$1],
                 /* :: */[0,
                  [/* A */1,"--base"],
                  /* :: */[0,
                   /* Px */[3,menhir_base$1],
                   /* :: */[0,Command["atomize_paths"](match[2]),/* [] */0]]]]]]]]];
    };

var
 ocamldep_command=
  function(arg,out,env,_build)
   {var arg$1=env(arg);
    
    var out$1=env(out);
    
    var tags=Tools["tags_of_pathname"](arg$1);
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              ocamldep_command$prime(tags),
              /* :: */[0,
               /* P */[2,arg$1],
               /* :: */[0,
                [/* Sh */4,">"],
                /* :: */[0,/* Px */[3,out$1],/* [] */0]]]]]];
    };

var
 ocamlyacc=
  function(mly,env,_build)
   {var mly$1=env(mly);
    
    var
     ocamlyacc$1=
      Options["ocamlyacc"][1]===/* N */0
       ?[/* V */6,"OCAMLYACC"]
       :Options["ocamlyacc"][1];
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              ocamlyacc$1,
              /* :: */[0,
               /* T */[5,
                Tags["Operators"][1]
                 (Tags["Operators"][1]
                   (Tags["Operators"][1]
                     (Tools["tags_of_pathname"](mly$1),"ocaml"),
                    "parser"),
                  "ocamlyacc")],
               /* :: */[0,/* Px */[3,mly$1],/* [] */0]]]]];
    };

var
 ocamllex=
  function(mll,env,_build)
   {var mll$1=env(mll);
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              Options["ocamllex"][1],
              /* :: */[0,
               /* T */[5,
                Tags["Operators"][1]
                 (Tags["Operators"][1]
                   (Tags["Operators"][1]
                     (Tools["tags_of_pathname"](mll$1),"ocaml"),
                    "lexer"),
                  "ocamllex")],
               /* :: */[0,/* Px */[3,mll$1],/* [] */0]]]]];
    };

var
 infer_interface=
  function(ml,mli,env,build)
   {var ml$1=env(ml);
    
    var mli$1=env(mli);
    
    var tags=Tags["Operators"][1](Tools["tags_of_pathname"](ml$1),"ocaml");
    
    Ocaml_compiler["prepare_compile"](build,ml$1);
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              Options["ocamlc"][1],
              /* :: */[0,
               Ocaml_utils["ocaml_ppflags"](tags),
               /* :: */[0,
                Ocaml_utils["ocaml_include_flags"](ml$1),
                /* :: */[0,
                 [/* A */1,"-i"],
                 /* :: */[0,
                  Tags["mem"]("thread",tags)?[/* A */1,"-thread"]:/* N */0,
                  /* :: */[0,
                   /* T */[5,Tags["Operators"][1](tags,"infer_interface")],
                   /* :: */[0,
                    /* P */[2,ml$1],
                    /* :: */[0,
                     [/* Sh */4,">"],
                     /* :: */[0,/* Px */[3,mli$1],/* [] */0]]]]]]]]]]];
    };

var
 menhir=
  function(mly,env,build)
   {var mly$1=env(mly);
    
    var ml=Pathname["update_extension"]("ml",mly$1);
    
    var
     menhir$1=
      Options["ocamlyacc"][1]===/* N */0
       ?[/* V */6,"MENHIR"]
       :Options["ocamlyacc"][1];
    
    var
     ocamlc_tags=
      Tags["Operators"][1]
       (Tags["Operators"][1]
         (Tags["Operators"][1](Tools["tags_of_pathname"](ml),"ocaml"),"byte"),
        "compile");
    
    var
     menhir_tags=
      Tags["Operators"][1]
       (Tags["Operators"][1]
         (Tags["Operators"][1](Tools["tags_of_pathname"](mly$1),"ocaml"),
          "parser"),
        "menhir");
    
    Ocaml_compiler["prepare_compile"](build,mly$1);
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              menhir$1,
              /* :: */[0,
               [/* A */1,"--ocamlc"],
               /* :: */[0,
                /* Quote */[7,
                 /* S */[0,
                  /* :: */[0,
                   Options["ocamlc"][1],
                   /* :: */[0,
                    /* T */[5,ocamlc_tags],
                    /* :: */[0,
                     Ocaml_utils["ocaml_include_flags"](mly$1),
                     /* [] */0]]]]],
                /* :: */[0,
                 /* T */[5,menhir_tags],
                 /* :: */[0,/* Px */[3,mly$1],/* [] */0]]]]]]];
    };

var
 ocamldoc_c=
  function(tags,arg,odoc)
   {var tags$1=Tags["Operators"][1](tags,"ocaml");
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              Options["ocamldoc"][1],
              /* :: */[0,
               [/* A */1,"-dump"],
               /* :: */[0,
                /* Px */[3,odoc],
                /* :: */[0,
                 /* T */[5,Tags["Operators"][1](tags$1,"doc")],
                 /* :: */[0,
                  Ocaml_utils["ocaml_ppflags"]
                   (Tags["Operators"][1](tags$1,"pp:doc")),
                  /* :: */[0,
                   Ocaml_utils["ocaml_include_flags"](arg),
                   /* :: */[0,/* P */[2,arg],/* [] */0]]]]]]]]];
    };

var
 ocamldoc_l_dir=
  function(tags,deps,_docout,docdir)
   {return /* Seq */[0,
            /* :: */[0,
             /* Cmd */[1,
              /* S */[0,
               /* :: */[0,
                [/* A */1,"rm"],
                /* :: */[0,
                 [/* A */1,"-rf"],
                 /* :: */[0,/* Px */[3,docdir],/* [] */0]]]]],
             /* :: */[0,
              /* Cmd */[1,
               /* S */[0,
                /* :: */[0,
                 [/* A */1,"mkdir"],
                 /* :: */[0,
                  [/* A */1,"-p"],
                  /* :: */[0,/* Px */[3,docdir],/* [] */0]]]]],
              /* :: */[0,
               /* Cmd */[1,
                /* S */[0,
                 /* :: */[0,
                  Options["ocamldoc"][1],
                  /* :: */[0,
                   /* S */[0,
                    My_std["List"][16]
                     (function(a)
                       {return /* S */[0,
                                /* :: */[0,
                                 [/* A */1,"-load"],
                                 /* :: */[0,/* P */[2,a],/* [] */0]]];
                        },
                      deps)],
                   /* :: */[0,
                    /* T */[5,
                     Tags["Operators"][1]
                      (Tags["Operators"][1](tags,"doc"),"docdir")],
                    /* :: */[0,
                     [/* A */1,"-d"],
                     /* :: */[0,/* Px */[3,docdir],/* [] */0]]]]]]],
               /* [] */0]]]];
    };

var
 ocamldoc_l_file=
  function(tags,deps,docout,_docdir)
   {return /* Seq */[0,
            /* :: */[0,
             /* Cmd */[1,
              /* S */[0,
               /* :: */[0,
                [/* A */1,"rm"],
                /* :: */[0,
                 [/* A */1,"-rf"],
                 /* :: */[0,/* Px */[3,docout],/* [] */0]]]]],
             /* :: */[0,
              /* Cmd */[1,
               /* S */[0,
                /* :: */[0,
                 [/* A */1,"mkdir"],
                 /* :: */[0,
                  [/* A */1,"-p"],
                  /* :: */[0,
                   /* Px */[3,Pathname["dirname"](docout)],
                   /* [] */0]]]]],
              /* :: */[0,
               /* Cmd */[1,
                /* S */[0,
                 /* :: */[0,
                  Options["ocamldoc"][1],
                  /* :: */[0,
                   /* S */[0,
                    My_std["List"][16]
                     (function(a)
                       {return /* S */[0,
                                /* :: */[0,
                                 [/* A */1,"-load"],
                                 /* :: */[0,/* P */[2,a],/* [] */0]]];
                        },
                      deps)],
                   /* :: */[0,
                    /* T */[5,
                     Tags["Operators"][1]
                      (Tags["Operators"][1](tags,"doc"),"docfile")],
                    /* :: */[0,
                     [/* A */1,"-o"],
                     /* :: */[0,/* Px */[3,docout],/* [] */0]]]]]]],
               /* [] */0]]]];
    };

var
 document_ocaml_interf=
  function(mli,odoc,env,build)
   {var mli$1=env(mli);
    
    var odoc$1=env(odoc);
    
    Ocaml_compiler["prepare_compile"](build,mli$1);
    return ocamldoc_c
            (Tags["Operators"][1](Tools["tags_of_pathname"](mli$1),"interf"),
             mli$1,
             odoc$1);
    };

var
 document_ocaml_implem=
  function(ml,odoc,env,build)
   {var ml$1=env(ml);
    
    var odoc$1=env(odoc);
    
    Ocaml_compiler["prepare_compile"](build,ml$1);
    return ocamldoc_c
            (Tags["Operators"][1](Tools["tags_of_pathname"](ml$1),"implem"),
             ml$1,
             odoc$1);
    };

var
 document_ocaml_project=
  function($staropt$star,odocl,docout,docdir,env,build)
   {var ocamldoc=$staropt$star?$staropt$star[1]:ocamldoc_l_file;
    
    var odocl$1=env(odocl);
    
    var docout$1=env(docout);
    
    var docdir$1=env(docdir);
    
    var contents=Ocaml_utils["string_list_of_file"](odocl$1);
    
    var
     include_dirs=
      Pathname["include_dirs_of"](Pathname["dirname"](odocl$1));
    
    var
     to_build=
      My_std["List"][16]
       (function(module_name)
         {return Ocaml_utils["expand_module"]
                  (include_dirs,module_name,[/* :: */0,"odoc",/* [] */0]);
          },
        contents);
    
    var module_paths=My_std["List"][16](My_std["Outcome"][3],build(to_build));
    
    var
     tags=
      Tags["Operators"][1]
       (Tags["union"]
         (Tools["tags_of_pathname"](docout$1),
          Tools["tags_of_pathname"](docdir$1)),
        "ocaml");
    
    return ocamldoc(tags,module_paths,docout$1,docdir$1);
    };

var
 camlp4=
  function($staropt$star,tag,i,o,env,build)
   {var $$default=$staropt$star?$staropt$star[1]:[/* A */1,"camlp4o"];
    
    var ml=env(i);
    
    var pp_ml=env(o);
    
    var
     tags=
      Tags["Operators"][1]
       (Tags["Operators"][1]
         (Tags["Operators"][1](Tools["tags_of_pathname"](ml),"ocaml"),"pp"),
        tag);
    
    var match=Rule["build_deps_of_tags"](build,tags);
    
    var pp=Command["reduce"](Flags["of_tags"](tags));
    
    var pp$1=typeof pp==="number"?$$default:pp;
    
    return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              pp$1,
              /* :: */[0,
               /* P */[2,ml],
               /* :: */[0,
                [/* A */1,"-printer"],
                /* :: */[0,
                 [/* A */1,"o"],
                 /* :: */[0,
                  [/* A */1,"-o"],
                  /* :: */[0,/* Px */[3,pp_ml],/* [] */0]]]]]]]];
    };

module["exports"]=
{"ocamldoc_c":ocamldoc_c,
 "ocamldoc_l_dir":ocamldoc_l_dir,
 "ocamldoc_l_file":ocamldoc_l_file,
 "ocamldep_command":ocamldep_command,
 "menhir_ocamldep_command":menhir_ocamldep_command,
 "menhir_modular_ocamldep_command":menhir_modular_ocamldep_command,
 "menhir_modular":menhir_modular,
 "ocamlyacc":ocamlyacc,
 "ocamllex":ocamllex,
 "menhir":menhir,
 "infer_interface":infer_interface,
 "document_ocaml_interf":document_ocaml_interf,
 "document_ocaml_implem":document_ocaml_implem,
 "document_ocaml_project":document_ocaml_project,
 "camlp4":camlp4};

