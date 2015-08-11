// Generated CODE, PLEASE EDIT WITH CARE 

var Compmisc=require("Compmisc");
var Asmlink=require("Asmlink");
var Asmpackager=require("Asmpackager");
var Optcompile=require("Optcompile");
var Main_args=require("Main_args");
var Printmach=require("Printmach");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var List=require("List");
var Arg=require("Arg");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Format=require("Format");
var Misc=require("Misc");
var Filename=require("Filename");
var Asmlibrarian=require("Asmlibrarian");
var Compenv=require("Compenv");
var Arch=require("Arch");
var Location=require("Location");
var Config=require("Config");


var
 process_interface_file=
  function(ppf,name)
   {return Optcompile["interface"](ppf,name,Compenv["output_prefix"](name));};

var
 process_implementation_file=
  function(ppf,name)
   {var opref=Compenv["output_prefix"](name);
    
    Optcompile["implementation"](ppf,name,opref);
    return Clflags["objfiles"][1]=
           /* :: */[0,Pervasives["^"](opref,".cmx"),Clflags["objfiles"][1]],
           0;
    };

var cmxa_present=[0,0];

var
 process_file=
  function(ppf,name)
   {if
     (Filename["check_suffix"](name,".ml")||
      Filename["check_suffix"](name,".mlt"))
     {return process_implementation_file(ppf,name);}
    else
     {if(Filename["check_suffix"](name,Config["interface_suffix"][1]))
       {var opref=Compenv["output_prefix"](name);
        
        Optcompile["interface"](ppf,name,opref);
        if(Clflags["make_package"][1])
         {return Clflags["objfiles"][1]=
                 /* :: */[0,
                  Pervasives["^"](opref,".cmi"),
                  Clflags["objfiles"][1]],
                 0;
          }
        else
         {return 0;}
        }
      else
       {if(Filename["check_suffix"](name,".cmx"))
         {return Clflags["objfiles"][1]=
                 /* :: */[0,name,Clflags["objfiles"][1]],
                 0;
          }
        else
         {if(Filename["check_suffix"](name,".cmxa"))
           {cmxa_present[1]=1,0;
            return Clflags["objfiles"][1]=
                   /* :: */[0,name,Clflags["objfiles"][1]],
                   0;
            }
          else
           {if
             (Filename["check_suffix"](name,".cmi")&&
              Clflags["make_package"][1])
             {return Clflags["objfiles"][1]=
                     /* :: */[0,name,Clflags["objfiles"][1]],
                     0;
              }
            else
             {if
               (Filename["check_suffix"](name,Config["ext_obj"])||
                Filename["check_suffix"](name,Config["ext_lib"]))
               {return Clflags["ccobjs"][1]=
                       /* :: */[0,name,Clflags["ccobjs"][1]],
                       0;
                }
              else
               {if(Filename["check_suffix"](name,".c"))
                 {Optcompile["c_file"](name);
                  return Clflags["ccobjs"][1]=
                         /* :: */[0,
                          Pervasives["^"]
                           (Filename["chop_suffix"](Filename["basename"](name),".c"),
                            Config["ext_obj"]),
                          Clflags["ccobjs"][1]],
                         0;
                  }
                else
                 {throw [0,
                         Arg["Bad"],
                         Pervasives["^"]("don't know what to do with ",name)];
                  }
                }
              }
            }
          }
        }
      }
    };

var usage="Usage: ocamlopt <options> <files>\nOptions are:";

var ppf=Format["err_formatter"];

var
 anonymous=
  function(filename)
   {Compenv["readenv"](ppf,1);return process_file(ppf,filename);};

var
 impl=
  function(filename)
   {Compenv["readenv"](ppf,1);
    return process_implementation_file(ppf,filename);
    };

var
 intf=
  function(filename)
   {Compenv["readenv"](ppf,1);return process_interface_file(ppf,filename);};

var
 show_config=
  function(param)
   {Config["print_config"](Pervasives["stdout"]);
    return Pervasives["exit"](0);
    };

var set=function(r,param){return r[1]=1,0;};

var clear=function(r,param){return r[1]=0,0;};

var _a=set(Clflags["make_archive"]);

var _absname=set(Location["absname"]);

var _annot=set(Clflags["annotations"]);

var _binannot=set(Clflags["binary_annotations"]);

var _c=set(Clflags["compile_only"]);

var _cc=function(s){return Clflags["c_compiler"][1]=/* Some */[0,s],0;};

var
 _cclib=
  function(s)
   {return Clflags["ccobjs"][1]=
           Pervasives["@"](Misc["rev_split_words"](s),Clflags["ccobjs"][1]),
           0;
    };

var
 _ccopt=
  function(s)
   {return Compenv["first_ccopts"][1]=
           /* :: */[0,s,Compenv["first_ccopts"][1]],
           0;
    };

var _compact=clear(Clflags["optimize_for_speed"]);

var _config=function(param){return show_config(0);};

var
 _for_pack=
  function(s){return Clflags["for_package"][1]=/* Some */[0,s],0;};

var _g=set(Clflags["debug"]);

var
 _i=
  function(param)
   {Clflags["print_types"][1]=1,0;return Clflags["compile_only"][1]=1,0;};

var
 _I=
  function(dir)
   {return Clflags["include_dirs"][1]=
           /* :: */[0,dir,Clflags["include_dirs"][1]],
           0;
    };

var _inline=function(n){return Clflags["inline_threshold"][1]=n*8,0;};

var _intf_suffix=function(s){return Config["interface_suffix"][1]=s,0;};

var _keep_docs=set(Clflags["keep_docs"]);

var _keep_locs=set(Clflags["keep_locs"]);

var _labels=clear(Clflags["classic"]);

var _linkall=set(Clflags["link_everything"]);

var _no_alias_deps=set(Clflags["transparent_modules"]);

var _no_app_funct=clear(Clflags["applicative_functors"]);

var _no_float_const_prop=clear(Clflags["float_const_prop"]);

var _noassert=set(Clflags["noassert"]);

var _noautolink=set(Clflags["no_auto_link"]);

var _nodynlink=clear(Clflags["dlcode"]);

var _nolabels=set(Clflags["classic"]);

var _nostdlib=set(Clflags["no_std_include"]);

var _o=function(s){return Clflags["output_name"][1]=/* Some */[0,s],0;};

var
 _open=
  function(s)
   {return Clflags["open_modules"][1]=
           /* :: */[0,s,Clflags["open_modules"][1]],
           0;
    };

var _output_obj=set(Clflags["output_c_object"]);

var
 _output_complete_obj=
  function(s)
   {set(Clflags["output_c_object"],s);
    return set(Clflags["output_complete_object"],s);
    };

var _p=set(Clflags["gprofile"]);

var _pack=set(Clflags["make_package"]);

var _pp=function(s){return Clflags["preprocessor"][1]=/* Some */[0,s],0;};

var
 _ppx=
  function(s)
   {return Compenv["first_ppx"][1]=/* :: */[0,s,Compenv["first_ppx"][1]],0;};

var _principal=set(Clflags["principal"]);

var _rectypes=set(Clflags["recursive_types"]);

var _runtime_variant=function(s){return Clflags["runtime_variant"][1]=s,0;};

var _safe_string=clear(Clflags["unsafe_string"]);

var _short_paths=clear(Clflags["real_paths"]);

var _strict_sequence=set(Clflags["strict_sequence"]);

var _strict_formats=set(Clflags["strict_formats"]);

var
 _shared=
  function(param){Clflags["shared"][1]=1,0;return Clflags["dlcode"][1]=1,0;};

var _S=set(Clflags["keep_asm_file"]);

var _thread=set(Clflags["use_threads"]);

var _unsafe=set(Clflags["fast"]);

var _unsafe_string=set(Clflags["unsafe_string"]);

var
 _v=
  function(param)
   {return Compenv["print_version_and_library"]("native-code compiler");};

var _version=function(param){return Compenv["print_version_string"](0);};

var _vnum=function(param){return Compenv["print_version_string"](0);};

var _verbose=set(Clflags["verbose"]);

var _w=function(s){return Warnings["parse_options"](0,s);};

var _warn_error=function(s){return Warnings["parse_options"](1,s);};

var _warn_help=Warnings["help_warnings"];

var _where=function(param){return Compenv["print_standard_library"](0);};

var _nopervasives=set(Clflags["nopervasives"]);

var _dsource=set(Clflags["dump_source"]);

var _dparsetree=set(Clflags["dump_parsetree"]);

var _dtypedtree=set(Clflags["dump_typedtree"]);

var _drawlambda=set(Clflags["dump_rawlambda"]);

var _dlambda=set(Clflags["dump_lambda"]);

var _dclambda=set(Clflags["dump_clambda"]);

var _dcmm=set(Clflags["dump_cmm"]);

var _dsel=set(Clflags["dump_selection"]);

var _dcombine=set(Clflags["dump_combine"]);

var _dcse=set(Clflags["dump_cse"]);

var
 _dlive=
  function(param)
   {Clflags["dump_live"][1]=1,0;return Printmach["print_live"][1]=1,0;};

var _dspill=set(Clflags["dump_spill"]);

var _dsplit=set(Clflags["dump_split"]);

var _dinterf=set(Clflags["dump_interf"]);

var _dprefer=set(Clflags["dump_prefer"]);

var _dalloc=set(Clflags["dump_regalloc"]);

var _dreload=set(Clflags["dump_reload"]);

var _dscheduling=set(Clflags["dump_scheduling"]);

var _dlinear=set(Clflags["dump_linear"]);

var _dstartup=set(Clflags["keep_startup_file"]);

var _opaque=set(Clflags["opaque"]);

var
 Options=
  Main_args["Make_optcomp_options"]
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
     _a,
     _annot,
     _binannot,
     _c,
     _cc,
     _cclib,
     _ccopt,
     _config,
     _for_pack,
     _g,
     _i,
     impl,
     intf,
     _intf_suffix,
     _keep_docs,
     _keep_locs,
     _linkall,
     _noautolink,
     _o,
     _output_obj,
     _output_complete_obj,
     _pack,
     _principal,
     _rectypes,
     _runtime_variant,
     _safe_string,
     _short_paths,
     _thread,
     _v,
     _verbose,
     _where,
     _nopervasives,
     _compact,
     _inline,
     _dclambda,
     _dcmm,
     _dsel,
     _dcombine,
     _dcse,
     _dlive,
     _dspill,
     _dsplit,
     _dinterf,
     _dprefer,
     _dalloc,
     _dreload,
     _dscheduling,
     _dlinear,
     _dstartup,
     _no_float_const_prop,
     _nodynlink,
     _p,
     _pp,
     _S,
     _shared,
     _opaque]);

var
 main=
  function(param)
   {Clflags["native_code"][1]=1,0;
    var ppf$1=Format["err_formatter"];
    
    try
     {Compenv["readenv"](ppf$1,0);
      Arg["parse"]
       (Pervasives["@"](Arch["command_line_options"],Options[1]),
        anonymous,
        usage);
      Compenv["readenv"](ppf$1,2);
      if
       (List["length"]
         (List["filter"]
           (function(x){return x[1];},
            /* :: */[0,
             Clflags["make_package"],
             /* :: */[0,
              Clflags["make_archive"],
              /* :: */[0,
               Clflags["shared"],
               /* :: */[0,
                Clflags["compile_only"],
                /* :: */[0,Clflags["output_c_object"],0]]]]]))>
        1)
       {Compenv["fatal"]
         ("Please specify at most one of -pack, -a, -shared, -c, -output-obj")}
      else
       {}
      
      if(Clflags["make_archive"][1])
       {if(cmxa_present[1])
         {Compenv["fatal"]("Option -a cannot be used with .cmxa input files.")}
        else
         {}
        
        Compmisc["init_path"](1);
        var target=Compenv["extract_output"](Clflags["output_name"][1]);
        
        Asmlibrarian["create_archive"](Compenv["get_objfiles"](0),target),
        Warnings["check_fatal"](0)}
      else
       {if(Clflags["make_package"][1])
         {Compmisc["init_path"](1);
          var target$1=Compenv["extract_output"](Clflags["output_name"][1]);
          
          Asmpackager["package_files"]
           (ppf$1,
            Compmisc["initial_env"](0),
            Compenv["get_objfiles"](0),
            target$1),
          Warnings["check_fatal"](0)}
        else
         {if(Clflags["shared"][1])
           {Compmisc["init_path"](1);
            var target$2=Compenv["extract_output"](Clflags["output_name"][1]);
            
            Asmlink["link_shared"](ppf$1,Compenv["get_objfiles"](0),target$2),
            Warnings["check_fatal"](0)}
          else
           {if(!Clflags["compile_only"][1]&&Clflags["objfiles"][1]!=0)
             {if(Clflags["output_c_object"][1])
               {var s=Compenv["extract_output"](Clflags["output_name"][1]);
                
                if
                 (Filename["check_suffix"](s,Config["ext_obj"])||
                  Filename["check_suffix"](s,Config["ext_dll"]))
                 {var target$3=s;}
                else
                 {var
                   target$3=
                    Compenv["fatal"]
                     (Printf["sprintf"]
                       ([0,
                         [11,
                          "The extension of the output file must be ",
                          [2,0,[11," or ",[2,0,0]]]],
                         "The extension of the output file must be %s or %s"],
                        Config["ext_obj"],
                        Config["ext_dll"]));
                  }
                }
              else
               {var
                 target$3=
                  Compenv["default_output"](Clflags["output_name"][1]);
                }
              
              Compmisc["init_path"](1),
              Asmlink["link"](ppf$1,Compenv["get_objfiles"](0),target$3),
              Warnings["check_fatal"](0)}
            else
             {}
            }
          }
        }
      
      return Pervasives["exit"](0);
      }
    catch(x)
     {Location["report_exception"](ppf$1,x);return Pervasives["exit"](2);}
    };

main(0);
module["exports"]={};

