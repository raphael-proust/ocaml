// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Odoc_global=require("Odoc_global");
var Odoc_html=require("Odoc_html");
var Odoc_latex=require("Odoc_latex");
var Odoc_man=require("Odoc_man");
var Main_args=require("Main_args");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_types=require("Odoc_types");
var Odoc_dot=require("Odoc_dot");
var Arg=require("Arg");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Odoc_texi=require("Odoc_texi");
var Misc=require("Misc");
var Filename=require("Filename");
var Compenv=require("Compenv");
var Odoc_config=require("Odoc_config");
var Str=require("Str");
var Location=require("Location");
var Odoc_gen=require("Odoc_gen");
var Config=require("Config");
var Odoc_messages=require("Odoc_messages");



var current_generator=[0,/* None */0];

var
 get_html_generator=
  function(param)
   {var match=current_generator[1];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1)
       {case 0:return match$1[1];
        default:
         return Pervasives["failwith"]
                 (Odoc_messages["current_generator_is_not"]("html"));
         }
      }
    else
     {return Odoc_html["Generator"];}
    };

var
 get_latex_generator=
  function(param)
   {var match=current_generator[1];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1)
       {case 1:return match$1[1];
        default:
         return Pervasives["failwith"]
                 (Odoc_messages["current_generator_is_not"]("latex"));
         }
      }
    else
     {return Odoc_latex["Generator"];}
    };

var
 get_texi_generator=
  function(param)
   {var match=current_generator[1];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1)
       {case 2:return match$1[1];
        default:
         return Pervasives["failwith"]
                 (Odoc_messages["current_generator_is_not"]("texi"));
         }
      }
    else
     {return Odoc_texi["Generator"];}
    };

var
 get_man_generator=
  function(param)
   {var match=current_generator[1];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1)
       {case 3:return match$1[1];
        default:
         return Pervasives["failwith"]
                 (Odoc_messages["current_generator_is_not"]("man"));
         }
      }
    else
     {return Odoc_man["Generator"];}
    };

var
 get_dot_generator=
  function(param)
   {var match=current_generator[1];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1)
       {case 4:return match$1[1];
        default:
         return Pervasives["failwith"]
                 (Odoc_messages["current_generator_is_not"]("dot"));
         }
      }
    else
     {return Odoc_dot["Generator"];}
    };

var
 get_base_generator=
  function(param)
   {var match=current_generator[1];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1)
       {case 5:return match$1[1];
        default:
         return Pervasives["failwith"]
                 (Odoc_messages["current_generator_is_not"]("base"));
         }
      }
    else
     {return Odoc_gen["Base_generator"];}
    };

var
 extend_html_generator=
  function(f)
   {var current=get_html_generator(/* () */0);
    
    var M=f(current);
    
    return current_generator[1]=/* Some */[0,/* Html */[0,M]],0;
    };

var
 extend_latex_generator=
  function(f)
   {var current=get_latex_generator(/* () */0);
    
    var M=f(current);
    
    return current_generator[1]=/* Some */[0,/* Latex */[1,M]],0;
    };

var
 extend_texi_generator=
  function(f)
   {var current=get_texi_generator(/* () */0);
    
    var M=f(current);
    
    return current_generator[1]=/* Some */[0,/* Texi */[2,M]],0;
    };

var
 extend_man_generator=
  function(f)
   {var current=get_man_generator(/* () */0);
    
    var M=f(current);
    
    return current_generator[1]=/* Some */[0,/* Man */[3,M]],0;
    };

var
 extend_dot_generator=
  function(f)
   {var current=get_dot_generator(/* () */0);
    
    var M=f(current);
    
    return current_generator[1]=/* Some */[0,/* Dot */[4,M]],0;
    };

var
 extend_base_generator=
  function(f)
   {var current=get_base_generator(/* () */0);
    
    var M=f(current);
    
    return current_generator[1]=/* Some */[0,/* Base */[5,M]],0;
    };

var
 analyse_option_string=
  function(l,s)
   {return List["fold_left"]
            (function(acc,param)
              {if($$String["contains"](s,param[1][1]))
                {return Pervasives["@"](acc,param[2]);}
               else
                {return acc;}
               },
             /* [] */0,
             l);
    };

var
 analyse_merge_options=
  function(s)
   {var
     l=
      /* :: */[0,
       /* tuple */[0,
        Odoc_messages["merge_description"],
        /* :: */[0,/* Merge_description */0,/* [] */0]],
       /* :: */[0,
        /* tuple */[0,
         Odoc_messages["merge_author"],
         /* :: */[0,/* Merge_author */1,/* [] */0]],
        /* :: */[0,
         /* tuple */[0,
          Odoc_messages["merge_version"],
          /* :: */[0,/* Merge_version */2,/* [] */0]],
         /* :: */[0,
          /* tuple */[0,
           Odoc_messages["merge_see"],
           /* :: */[0,/* Merge_see */3,/* [] */0]],
          /* :: */[0,
           /* tuple */[0,
            Odoc_messages["merge_since"],
            /* :: */[0,/* Merge_since */4,/* [] */0]],
           /* :: */[0,
            /* tuple */[0,
             Odoc_messages["merge_before"],
             /* :: */[0,/* Merge_before */5,/* [] */0]],
            /* :: */[0,
             /* tuple */[0,
              Odoc_messages["merge_deprecated"],
              /* :: */[0,/* Merge_deprecated */6,/* [] */0]],
             /* :: */[0,
              /* tuple */[0,
               Odoc_messages["merge_param"],
               /* :: */[0,/* Merge_param */7,/* [] */0]],
              /* :: */[0,
               /* tuple */[0,
                Odoc_messages["merge_raised_exception"],
                /* :: */[0,/* Merge_raised_exception */8,/* [] */0]],
               /* :: */[0,
                /* tuple */[0,
                 Odoc_messages["merge_return_value"],
                 /* :: */[0,/* Merge_return_value */9,/* [] */0]],
                /* :: */[0,
                 /* tuple */[0,
                  Odoc_messages["merge_custom"],
                  /* :: */[0,/* Merge_custom */10,/* [] */0]],
                 /* :: */[0,
                  /* tuple */[0,
                   Odoc_messages["merge_all"],
                   Odoc_types["all_merge_options"]],
                  /* [] */0]]]]]]]]]]]];
    
    return analyse_option_string(l,s);
    };

var
 f_latex_title=
  function(s)
   {try
     {var pos=$$String["index"](s,44);
      
      var n="unknown primitive:caml_int_of_string";
      
      var len=s["length"];
      
      var command=$$String["sub"](s,pos+1,len-pos-1);
      
      Odoc_latex["latex_titles"][1]=
      List["remove_assoc"](n,Odoc_latex["latex_titles"][1]),
      0;
      return Odoc_latex["latex_titles"][1]=
             /* :: */[0,
              /* tuple */[0,n,command],
              Odoc_latex["latex_titles"][1]],
             0;
      }
    catch(exn)
     {var exit;
      
      if(exn=Not_found)
       {exit=66;}
      else
       {if(exn[1]=Invalid_argument){exit=66;}else{throw exn;}}
      
      switch(exit)
       {case 66:
         Odoc_global["errors"][0]++;
         return Pervasives["prerr_endline"](Odoc_messages["wrong_format"](s));
         
        }
      }
    };

var
 add_hidden_modules=
  function(s)
   {var l=Str["split"](Str["regexp"](","),s);
    
    return List["iter"]
            (function(n)
              {var
                name=
                 Str["global_replace"](Str["regexp"]("[ \n\r\t]+"),"",n);
               
               switch(name)
                {case "":return /* () */0;
                 default:
                  var match=name[0];
                  
                  if(25<-65+match>>>0)
                   {Odoc_global["errors"][0]++;
                    return Pervasives["prerr_endline"]
                            (Odoc_messages["not_a_module_name"](name));
                    }
                  else
                   {return Odoc_global["hidden_modules"][1]=
                           /* :: */[0,name,Odoc_global["hidden_modules"][1]],
                           0;
                    }
                  }
               },
             l);
    };

var set_generator=function(g){return current_generator[1]=/* Some */[0,g],0;};

var
 anonymous=
  function(f)
   {if(Filename["check_suffix"](f,"ml"))
     {var sf=/* Impl_file */[0,f];}
    else
     {if(Filename["check_suffix"](f,Config["interface_suffix"][1]))
       {var sf=/* Intf_file */[1,f];}
      else
       {if(Filename["check_suffix"](f,"txt"))
         {var sf=/* Text_file */[2,f];}
        else
         {var
           sf=
            Pervasives["failwith"](Odoc_messages["unknown_extension"](f));
          }
        }
      }
    
    return Odoc_global["files"][1]=
           Pervasives["@"](Odoc_global["files"][1],/* :: */[0,sf,/* [] */0]),
           0;
    };

var set=function(r,param){return r[1]=/* true */1,0;};

var unset=function(r,param){return r[1]=/* false */0,0;};

var _absname=set(Location["absname"]);

var
 _I=
  function(s)
   {return Odoc_global["include_dirs"][1]=
           /* :: */[0,
            Misc["expand_directory"](Config["standard_library"],s),
            Odoc_global["include_dirs"][1]],
           0;
    };

var
 _impl=
  function(s)
   {return Odoc_global["files"][1]=
           Pervasives["@"]
            (Odoc_global["files"][1],
             /* :: */[0,/* Impl_file */[0,s],/* [] */0]),
           0;
    };

var
 _intf=
  function(s)
   {return Odoc_global["files"][1]=
           Pervasives["@"]
            (Odoc_global["files"][1],
             /* :: */[0,/* Intf_file */[1,s],/* [] */0]),
           0;
    };

var _intf_suffix=function(s){return Config["interface_suffix"][1]=s,0;};

var _labels=unset(Clflags["classic"]);

var _no_alias_deps=set(Clflags["transparent_modules"]);

var _no_app_funct=unset(Clflags["applicative_functors"]);

var _noassert=set(Clflags["noassert"]);

var _nolabels=set(Clflags["classic"]);

var _nostdlib=set(Clflags["no_std_include"]);

var
 _open=
  function(s)
   {return Clflags["open_modules"][1]=
           /* :: */[0,s,Clflags["open_modules"][1]],
           0;
    };

var _pp=function(s){return Clflags["preprocessor"][1]=/* Some */[0,s],0;};

var
 _ppx=
  function(s)
   {return Clflags["all_ppx"][1]=/* :: */[0,s,Clflags["all_ppx"][1]],0;};

var _principal=set(Clflags["principal"]);

var _rectypes=set(Clflags["recursive_types"]);

var _safe_string=unset(Clflags["unsafe_string"]);

var _short_paths=unset(Clflags["real_paths"]);

var _strict_sequence=set(Clflags["strict_sequence"]);

var _strict_formats=set(Clflags["strict_formats"]);

var _thread=set(Clflags["use_threads"]);

var _vmthread=set(Clflags["use_vmthreads"]);

var
 _unsafe=
  function(param){throw [0,Assert_failure,[0,"odoc_args.ml",216,19]];};

var _unsafe_string=set(Clflags["unsafe_string"]);

var
 _v=
  function(param)
   {return Compenv["print_version_and_library"]("documentation generator");};

var _version=Compenv["print_version_string"];

var _vnum=Compenv["print_version_string"];

var _w=Warnings["parse_options"](/* false */0);

var
 _warn_error=
  function(param){throw [0,Assert_failure,[0,"odoc_args.ml",222,22]];};

var
 _warn_help=
  function(param){throw [0,Assert_failure,[0,"odoc_args.ml",223,21]];};

var _where=Compenv["print_standard_library"];

var _verbose=set(Clflags["verbose"]);

var _nopervasives=set(Clflags["nopervasives"]);

var _dsource=set(Clflags["dump_source"]);

var _dparsetree=set(Clflags["dump_parsetree"]);

var _dtypedtree=set(Clflags["dump_typedtree"]);

var _drawlambda=set(Clflags["dump_rawlambda"]);

var _dlambda=set(Clflags["dump_lambda"]);

var _dinstr=set(Clflags["dump_instr"]);

var
 Options=
  Main_args["Make_ocamldoc_options"]
   ([0,
     _absname,
     _I,
     _labels,
     _no_alias_deps,
     _no_app_funct,
     _noassert,
     _nolabels,
     _nostdlib,
     _open,
     _ppx,
     _strict_sequence,
     _strict_formats,
     _unsafe,
     _unsafe_string,
     _version,
     _vnum,
     _w,
     _warn_error,
     _warn_help,
     _dsource,
     _dparsetree,
     _dtypedtree,
     _drawlambda,
     _dlambda,
     anonymous,
     _impl,
     _intf,
     _intf_suffix,
     _pp,
     _principal,
     _rectypes,
     _safe_string,
     _short_paths,
     _thread,
     _v,
     _verbose,
     _vmthread]);

var
 default_options=
  Pervasives["@"]
   (Options[1],
    /* :: */[0,
     /* tuple */[0,
      "-text",
      /* String */[4,
       function(s)
        {return Odoc_global["files"][1]=
                Pervasives["@"]
                 (Odoc_global["files"][1],
                  /* :: */[0,/* Text_file */[2,s],/* [] */0]),
                0;
         }],
      Odoc_messages["option_text"]],
     /* :: */[0,
      /* tuple */[0,
       "-warn-error",
       /* Set */[2,Odoc_global["warn_error"]],
       Odoc_messages["werr"]],
      /* :: */[0,
       /* tuple */[0,
        "-hide-warnings",
        /* Clear */[3,Odoc_config["print_warnings"]],
        Odoc_messages["hide_warnings"]],
       /* :: */[0,
        /* tuple */[0,
         "-o",
         /* String */[4,function(s){return Odoc_global["out_file"][1]=s,0;}],
         Odoc_messages["out_file"]],
        /* :: */[0,
         /* tuple */[0,
          "-d",
          /* String */[4,
           function(s){return Odoc_global["target_dir"][1]=s,0;}],
          Odoc_messages["target_dir"]],
         /* :: */[0,
          /* tuple */[0,
           "-sort",
           /* Unit */[0,
            function(param)
             {return Odoc_global["sort_modules"][1]=/* true */1,0;}],
           Odoc_messages["sort_modules"]],
          /* :: */[0,
           /* tuple */[0,
            "-no-stop",
            /* Set */[2,Odoc_global["no_stop"]],
            Odoc_messages["no_stop"]],
           /* :: */[0,
            /* tuple */[0,
             "-no-custom-tags",
             /* Set */[2,Odoc_global["no_custom_tags"]],
             Odoc_messages["no_custom_tags"]],
            /* :: */[0,
             /* tuple */[0,
              "-stars",
              /* Set */[2,Odoc_global["remove_stars"]],
              Odoc_messages["remove_stars"]],
             /* :: */[0,
              /* tuple */[0,
               "-inv-merge-ml-mli",
               /* Set */[2,Odoc_global["inverse_merge_ml_mli"]],
               Odoc_messages["inverse_merge_ml_mli"]],
              /* :: */[0,
               /* tuple */[0,
                "-no-module-constraint-filter",
                /* Clear */[3,Odoc_global["filter_with_module_constraints"]],
                Odoc_messages["no_filter_with_module_constraints"]],
               /* :: */[0,
                /* tuple */[0,
                 "-keep-code",
                 /* Set */[2,Odoc_global["keep_code"]],
                 Pervasives["^"](Odoc_messages["keep_code"],"\n")],
                /* :: */[0,
                 /* tuple */[0,
                  "-dump",
                  /* String */[4,
                   function(s)
                    {return Odoc_global["dump"][1]=/* Some */[0,s],0;}],
                  Odoc_messages["dump"]],
                 /* :: */[0,
                  /* tuple */[0,
                   "-load",
                   /* String */[4,
                    function(s)
                     {return Odoc_global["load"][1]=
                             Pervasives["@"]
                              (Odoc_global["load"][1],/* :: */[0,s,/* [] */0]),
                             0;
                      }],
                   Pervasives["^"](Odoc_messages["load"],"\n")],
                  /* :: */[0,
                   /* tuple */[0,
                    "-t",
                    /* String */[4,
                     function(s)
                      {return Odoc_global["title"][1]=/* Some */[0,s],0;}],
                    Odoc_messages["option_title"]],
                   /* :: */[0,
                    /* tuple */[0,
                     "-intro",
                     /* String */[4,
                      function(s)
                       {return Odoc_global["intro_file"][1]=/* Some */[0,s],0;}],
                     Odoc_messages["option_intro"]],
                    /* :: */[0,
                     /* tuple */[0,
                      "-hide",
                      /* String */[4,add_hidden_modules],
                      Odoc_messages["hide_modules"]],
                     /* :: */[0,
                      /* tuple */[0,
                       "-m",
                       /* String */[4,
                        function(s)
                         {return Odoc_global["merge_options"][1]=
                                 Pervasives["@"]
                                  (Odoc_global["merge_options"][1],analyse_merge_options(s)),
                                 0;
                          }],
                       Pervasives["^"]
                        (Odoc_messages["merge_options"],
                         "\n\n *** choosing a generator ***\n")],
                      /* :: */[0,
                       /* tuple */[0,
                        "-html",
                        /* Unit */[0,
                         function(param)
                          {return set_generator(/* Html */[0,Odoc_html["Generator"]]);
                           }],
                        Odoc_messages["generate_html"]],
                       /* :: */[0,
                        /* tuple */[0,
                         "-latex",
                         /* Unit */[0,
                          function(param)
                           {return set_generator
                                    (/* Latex */[1,Odoc_latex["Generator"]]);
                            }],
                         Odoc_messages["generate_latex"]],
                        /* :: */[0,
                         /* tuple */[0,
                          "-texi",
                          /* Unit */[0,
                           function(param)
                            {return set_generator(/* Texi */[2,Odoc_texi["Generator"]]);
                             }],
                          Odoc_messages["generate_texinfo"]],
                         /* :: */[0,
                          /* tuple */[0,
                           "-man",
                           /* Unit */[0,
                            function(param)
                             {return set_generator(/* Man */[3,Odoc_man["Generator"]]);}],
                           Odoc_messages["generate_man"]],
                          /* :: */[0,
                           /* tuple */[0,
                            "-dot",
                            /* Unit */[0,
                             function(param)
                              {return set_generator(/* Dot */[4,Odoc_dot["Generator"]]);}],
                            Odoc_messages["generate_dot"]],
                           /* :: */[0,
                            /* tuple */[0,
                             "-customdir",
                             /* Unit */[0,
                              function(param)
                               {Printf["printf"]
                                 (/* Format */[0,
                                   /* String */[2,
                                    /* No_padding */0,
                                    /* Char_literal */[12,10,/* End_of_format */0]],
                                   "%s\n"],
                                  Odoc_config["custom_generators_path"]);
                                return Pervasives["exit"](0);
                                }],
                             Odoc_messages["display_custom_generators_dir"]],
                            /* :: */[0,
                             /* tuple */[0,
                              "-i",
                              /* String */[4,function(s){return /* () */0;}],
                              Odoc_messages["add_load_dir"]],
                             /* :: */[0,
                              /* tuple */[0,
                               "-g",
                               /* String */[4,function(s){return /* () */0;}],
                               Pervasives["^"]
                                (Odoc_messages["load_file"],"\n\n *** HTML options ***\n")],
                              /* :: */[0,
                               /* tuple */[0,
                                "-all-params",
                                /* Set */[2,Odoc_html["with_parameter_list"]],
                                Odoc_messages["with_parameter_list"]],
                               /* :: */[0,
                                /* tuple */[0,
                                 "-css-style",
                                 /* String */[4,
                                  function(s)
                                   {return Odoc_html["css_style"][1]=/* Some */[0,s],0;}],
                                 Odoc_messages["css_style"]],
                                /* :: */[0,
                                 /* tuple */[0,
                                  "-index-only",
                                  /* Set */[2,Odoc_html["index_only"]],
                                  Odoc_messages["index_only"]],
                                 /* :: */[0,
                                  /* tuple */[0,
                                   "-colorize-code",
                                   /* Set */[2,Odoc_html["colorize_code"]],
                                   Odoc_messages["colorize_code"]],
                                  /* :: */[0,
                                   /* tuple */[0,
                                    "-short-functors",
                                    /* Set */[2,Odoc_html["html_short_functors"]],
                                    Odoc_messages["html_short_functors"]],
                                   /* :: */[0,
                                    /* tuple */[0,
                                     "-charset",
                                     /* Set_string */[5,Odoc_html["charset"]],
                                     Pervasives["^"]
                                      (Odoc_messages["charset"](Odoc_html["charset"][1]),
                                       "\n\n *** LaTeX options ***\n")],
                                    /* :: */[0,
                                     /* tuple */[0,
                                      "-noheader",
                                      /* Unit */[0,
                                       function(param)
                                        {return Odoc_global["with_header"][1]=/* false */0,0;}],
                                      Odoc_messages["no_header"]],
                                     /* :: */[0,
                                      /* tuple */[0,
                                       "-notrailer",
                                       /* Unit */[0,
                                        function(param)
                                         {return Odoc_global["with_trailer"][1]=/* false */0,0;}],
                                       Odoc_messages["no_trailer"]],
                                      /* :: */[0,
                                       /* tuple */[0,
                                        "-sepfiles",
                                        /* Set */[2,Odoc_latex["separate_files"]],
                                        Odoc_messages["separate_files"]],
                                       /* :: */[0,
                                        /* tuple */[0,
                                         "-latextitle",
                                         /* String */[4,f_latex_title],
                                         Odoc_messages["latex_title"](Odoc_latex["latex_titles"])],
                                        /* :: */[0,
                                         /* tuple */[0,
                                          "-latex-value-prefix",
                                          /* String */[4,
                                           function(s){return Odoc_latex["latex_value_prefix"][1]=s,0;}],
                                          Odoc_messages["latex_value_prefix"]],
                                         /* :: */[0,
                                          /* tuple */[0,
                                           "-latex-type-prefix",
                                           /* String */[4,
                                            function(s){return Odoc_latex["latex_type_prefix"][1]=s,0;}],
                                           Odoc_messages["latex_type_prefix"]],
                                          /* :: */[0,
                                           /* tuple */[0,
                                            "-latex-exception-prefix",
                                            /* String */[4,
                                             function(s)
                                              {return Odoc_latex["latex_exception_prefix"][1]=s,0;}],
                                            Odoc_messages["latex_exception_prefix"]],
                                           /* :: */[0,
                                            /* tuple */[0,
                                             "-latex-attribute-prefix",
                                             /* String */[4,
                                              function(s)
                                               {return Odoc_latex["latex_attribute_prefix"][1]=s,0;}],
                                             Odoc_messages["latex_attribute_prefix"]],
                                            /* :: */[0,
                                             /* tuple */[0,
                                              "-latex-method-prefix",
                                              /* String */[4,
                                               function(s)
                                                {return Odoc_latex["latex_method_prefix"][1]=s,0;}],
                                              Odoc_messages["latex_method_prefix"]],
                                             /* :: */[0,
                                              /* tuple */[0,
                                               "-latex-module-prefix",
                                               /* String */[4,
                                                function(s)
                                                 {return Odoc_latex["latex_module_prefix"][1]=s,0;}],
                                               Odoc_messages["latex_module_prefix"]],
                                              /* :: */[0,
                                               /* tuple */[0,
                                                "-latex-module-type-prefix",
                                                /* String */[4,
                                                 function(s)
                                                  {return Odoc_latex["latex_module_type_prefix"][1]=s,0;}],
                                                Odoc_messages["latex_module_type_prefix"]],
                                               /* :: */[0,
                                                /* tuple */[0,
                                                 "-latex-class-prefix",
                                                 /* String */[4,
                                                  function(s){return Odoc_latex["latex_class_prefix"][1]=s,0;}],
                                                 Odoc_messages["latex_class_prefix"]],
                                                /* :: */[0,
                                                 /* tuple */[0,
                                                  "-latex-class-type-prefix",
                                                  /* String */[4,
                                                   function(s)
                                                    {return Odoc_latex["latex_class_type_prefix"][1]=s,0;}],
                                                  Odoc_messages["latex_class_type_prefix"]],
                                                 /* :: */[0,
                                                  /* tuple */[0,
                                                   "-notoc",
                                                   /* Unit */[0,
                                                    function(param)
                                                     {return Odoc_global["with_toc"][1]=/* false */0,0;}],
                                                   Pervasives["^"]
                                                    (Odoc_messages["no_toc"],"\n\n *** texinfo options ***\n")],
                                                  /* :: */[0,
                                                   /* tuple */[0,
                                                    "-noindex",
                                                    /* Clear */[3,Odoc_global["with_index"]],
                                                    Odoc_messages["no_index"]],
                                                   /* :: */[0,
                                                    /* tuple */[0,
                                                     "-esc8",
                                                     /* Set */[2,Odoc_texi["esc_8bits"]],
                                                     Odoc_messages["esc_8bits"]],
                                                    /* :: */[0,
                                                     /* tuple */[0,
                                                      "-info-section",
                                                      /* String */[4,
                                                       function(prim,prim$1){return prim[1]=prim$1,0;}
                                                        (Odoc_texi["info_section"])],
                                                      Odoc_messages["info_section"]],
                                                     /* :: */[0,
                                                      /* tuple */[0,
                                                       "-info-entry",
                                                       /* String */[4,
                                                        function(s)
                                                         {return Odoc_texi["info_entry"][1]=
                                                                 Pervasives["@"]
                                                                  (Odoc_texi["info_entry"][1],/* :: */[0,s,/* [] */0]),
                                                                 0;
                                                          }],
                                                       Pervasives["^"]
                                                        (Odoc_messages["info_entry"],"\n\n *** dot options ***\n")],
                                                      /* :: */[0,
                                                       /* tuple */[0,
                                                        "-dot-colors",
                                                        /* String */[4,
                                                         function(s)
                                                          {return Odoc_dot["dot_colors"][1]=
                                                                  Str["split"](Str["regexp_string"](","),s),
                                                                  0;
                                                           }],
                                                        Odoc_messages["dot_colors"]],
                                                       /* :: */[0,
                                                        /* tuple */[0,
                                                         "-dot-include-all",
                                                         /* Set */[2,Odoc_dot["dot_include_all"]],
                                                         Odoc_messages["dot_include_all"]],
                                                        /* :: */[0,
                                                         /* tuple */[0,
                                                          "-dot-types",
                                                          /* Set */[2,Odoc_dot["dot_types"]],
                                                          Odoc_messages["dot_types"]],
                                                         /* :: */[0,
                                                          /* tuple */[0,
                                                           "-dot-reduce",
                                                           /* Set */[2,Odoc_dot["dot_reduce"]],
                                                           Pervasives["^"]
                                                            (Odoc_messages["dot_reduce"],
                                                             "\n\n *** man pages options ***\n")],
                                                          /* :: */[0,
                                                           /* tuple */[0,
                                                            "-man-mini",
                                                            /* Set */[2,Odoc_man["man_mini"]],
                                                            Odoc_messages["man_mini"]],
                                                           /* :: */[0,
                                                            /* tuple */[0,
                                                             "-man-suffix",
                                                             /* String */[4,
                                                              function(s){return Odoc_man["man_suffix"][1]=s,0;}],
                                                             Odoc_messages["man_suffix"]],
                                                            /* :: */[0,
                                                             /* tuple */[0,
                                                              "-man-section",
                                                              /* String */[4,
                                                               function(s){return Odoc_man["man_section"][1]=s,0;}],
                                                              Odoc_messages["man_section"]],
                                                             /* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]);

var options=[0,default_options];

var modified_options=function(param){return options[1]!=default_options;};

var
 append_last_doc=
  function(suffix)
   {var match=List["rev"](options[1]);
    
    if(match)
     {var match$1=match[1];
      
      return options[1]=
             List["rev"]
              (/* :: */[0,
                /* tuple */[0,
                 match$1[1],
                 match$1[2],
                 Pervasives["^"](match$1[3],suffix)],
                match[2]]),
             0;
      }
    else
     {return /* () */0;}
    };

var help_options=[0,/* [] */0];

var
 help_action=
  function(param)
   {var
     msg=
      Arg["usage_string"]
       (Pervasives["@"](options[1],help_options[1]),
        Pervasives["^"](Odoc_messages["usage"],Odoc_messages["options_are"]));
    
    return Pervasives["print_string"](msg);
    };

var
 match=
  (help_options[1]=
   /* :: */[0,
    /* tuple */[0,"-help",/* Unit */[0,help_action],Odoc_messages["help"]],
    /* :: */[0,
     /* tuple */[0,"--help",/* Unit */[0,help_action],Odoc_messages["help"]],
     /* [] */0]],
   0);

var
 add_option=
  function(o)
   {if(!modified_options(/* () */0))
     {append_last_doc("\n *** custom generator options ***\n")}
    else
     {}
    
    var s=o[1];
    
    var
     iter=
      function(param)
       {if(param)
         {var q=param[2];
          
          var match$1=param[1];
          
          var s2=match$1[1];
          
          if("unknown primitive:caml_string_equal")
           {return /* :: */[0,o,q];}
          else
           {return /* :: */[0,/* tuple */[0,s2,match$1[2],match$1[3]],iter(q)];
            }
          }
        else
         {return /* :: */[0,o,/* [] */0];}
        };
    
    return options[1]=iter(options[1]),0;
    };

var
 parse=
  function(param)
   {if(modified_options(/* () */0)){append_last_doc("\n")}else{}
    
    var options$1=Pervasives["@"](options[1],help_options[1]);
    
    var
     match$1=
      Arg["parse"]
       (Arg["align"](/* Some */[0,13],options$1),
        anonymous,
        Pervasives["^"](Odoc_messages["usage"],Odoc_messages["options_are"]));
    
    return Odoc_global["hidden_modules"][1]=
           List["sort"]
            (function(a,b){return -"unknown primitive:caml_string_compare";},
             Odoc_global["hidden_modules"][1]),
           0;
    };

module["exports"]=
{"current_generator":current_generator,
 "set_generator":set_generator,
 "extend_html_generator":extend_html_generator,
 "extend_latex_generator":extend_latex_generator,
 "extend_texi_generator":extend_texi_generator,
 "extend_man_generator":extend_man_generator,
 "extend_dot_generator":extend_dot_generator,
 "extend_base_generator":extend_base_generator,
 "add_option":add_option,
 "parse":parse};

