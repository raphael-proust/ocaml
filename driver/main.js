// Generated CODE, PLEASE EDIT WITH CARE 

var Compmisc=require("Compmisc");
var Compile=require("Compile");
var Main_args=require("Main_args");
var Warnings=require("Warnings");
var Bytelink=require("Bytelink");
var Pervasives=require("Pervasives");
var List=require("List");
var Arg=require("Arg");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Format=require("Format");
var Misc=require("Misc");
var Filename=require("Filename");
var Bytelibrarian=require("Bytelibrarian");
var Compenv=require("Compenv");
var Location=require("Location");
var Bytepackager=require("Bytepackager");
var Config=require("Config");


var
 process_interface_file=
  function(ppf,name)
   {return Compile["interface"](ppf,name,Compenv["output_prefix"](name));};

var
 process_implementation_file=
  function(ppf,name)
   {var opref=Compenv["output_prefix"](name);
    
    Compile["implementation"](ppf,name,opref);
    return Clflags["objfiles"][1]=
           /* :: */[0,Pervasives["^"](opref,".cmo"),Clflags["objfiles"][1]],
           0;
    };

var
 process_file=
  function(ppf,name)
   {if
     (Filename["check_suffix"](name,".ml")||
      Filename["check_suffix"](name,".mlt"))
     {var opref=Compenv["output_prefix"](name);
      
      Compile["implementation"](ppf,name,opref);
      return Clflags["objfiles"][1]=
             /* :: */[0,Pervasives["^"](opref,".cmo"),Clflags["objfiles"][1]],
             0;
      }
    else
     {if(Filename["check_suffix"](name,Config["interface_suffix"][1]))
       {var opref$1=Compenv["output_prefix"](name);
        
        Compile["interface"](ppf,name,opref$1);
        if(Clflags["make_package"][1])
         {return Clflags["objfiles"][1]=
                 /* :: */[0,
                  Pervasives["^"](opref$1,".cmi"),
                  Clflags["objfiles"][1]],
                 0;
          }
        else
         {return 0;}
        }
      else
       {if
         (Filename["check_suffix"](name,".cmo")||
          Filename["check_suffix"](name,".cma"))
         {return Clflags["objfiles"][1]=
                 /* :: */[0,name,Clflags["objfiles"][1]],
                 0;
          }
        else
         {if
           (Filename["check_suffix"](name,".cmi")&&Clflags["make_package"][1])
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
             {if(Filename["check_suffix"](name,Config["ext_dll"]))
               {return Clflags["dllibs"][1]=
                       /* :: */[0,name,Clflags["dllibs"][1]],
                       0;
                }
              else
               {if(Filename["check_suffix"](name,".c"))
                 {Compile["c_file"](name);
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

var usage="Usage: ocamlc <options> <files>\nOptions are:";

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

var unset=function(r,param){return r[1]=0,0;};

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

var _compat_32=set(Clflags["bytecode_compatible_32"]);

var _custom=set(Clflags["custom_runtime"]);

var _no_check_prims=set(Clflags["no_check_prims"]);

var
 _dllib=
  function(s)
   {return Clflags["dllibs"][1]=
           Pervasives["@"](Misc["rev_split_words"](s),Clflags["dllibs"][1]),
           0;
    };

var
 _dllpath=
  function(s)
   {return Clflags["dllpaths"][1]=
           Pervasives["@"](Clflags["dllpaths"][1],/* :: */[0,s,0]),
           0;
    };

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
  function(s)
   {return Clflags["include_dirs"][1]=
           /* :: */[0,s,Clflags["include_dirs"][1]],
           0;
    };

var _intf_suffix=function(s){return Config["interface_suffix"][1]=s,0;};

var _keep_docs=set(Clflags["keep_docs"]);

var _keep_locs=set(Clflags["keep_locs"]);

var _labels=unset(Clflags["classic"]);

var _linkall=set(Clflags["link_everything"]);

var
 _make_runtime=
  function(param)
   {Clflags["custom_runtime"][1]=1,0;
    Clflags["make_runtime"][1]=1,0;
    return Clflags["link_everything"][1]=1,0;
    };

var _no_alias_deps=set(Clflags["transparent_modules"]);

var _no_app_funct=unset(Clflags["applicative_functors"]);

var _noassert=set(Clflags["noassert"]);

var _nolabels=set(Clflags["classic"]);

var _noautolink=set(Clflags["no_auto_link"]);

var _nostdlib=set(Clflags["no_std_include"]);

var _o=function(s){return Clflags["output_name"][1]=/* Some */[0,s],0;};

var
 _open=
  function(s)
   {return Clflags["open_modules"][1]=
           /* :: */[0,s,Clflags["open_modules"][1]],
           0;
    };

var
 _output_obj=
  function(param)
   {Clflags["output_c_object"][1]=1,0;
    return Clflags["custom_runtime"][1]=1,0;
    };

var
 _output_complete_obj=
  function(param)
   {Clflags["output_c_object"][1]=1,0;
    Clflags["output_complete_object"][1]=1,0;
    return Clflags["custom_runtime"][1]=1,0;
    };

var _pack=set(Clflags["make_package"]);

var _pp=function(s){return Clflags["preprocessor"][1]=/* Some */[0,s],0;};

var
 _ppx=
  function(s)
   {return Compenv["first_ppx"][1]=/* :: */[0,s,Compenv["first_ppx"][1]],0;};

var _principal=set(Clflags["principal"]);

var _rectypes=set(Clflags["recursive_types"]);

var _runtime_variant=function(s){return Clflags["runtime_variant"][1]=s,0;};

var _safe_string=unset(Clflags["unsafe_string"]);

var _short_paths=unset(Clflags["real_paths"]);

var _strict_sequence=set(Clflags["strict_sequence"]);

var _strict_formats=set(Clflags["strict_formats"]);

var _thread=set(Clflags["use_threads"]);

var _vmthread=set(Clflags["use_vmthreads"]);

var _unsafe=set(Clflags["fast"]);

var _unsafe_string=set(Clflags["unsafe_string"]);

var _use_prims=function(s){return Clflags["use_prims"][1]=s,0;};

var _use_runtime=function(s){return Clflags["use_runtime"][1]=s,0;};

var
 _v=
  function(param){return Compenv["print_version_and_library"]("compiler");};

var _version=Compenv["print_version_string"];

var _vnum=Compenv["print_version_string"];

var _w=Warnings["parse_options"](0);

var _warn_error=Warnings["parse_options"](1);

var _warn_help=Warnings["help_warnings"];

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
  Main_args["Make_bytecomp_options"]
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
     show_config,
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
     _pp,
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
     _compat_32,
     _custom,
     _no_check_prims,
     _dllib,
     _dllpath,
     _make_runtime,
     _vmthread,
     _use_runtime,
     _dinstr,
     _use_prims]);

var
 main=
  function(param)
   {try
     {Compenv["readenv"](ppf,0);
      Arg["parse"](Options[1],anonymous,usage);
      Compenv["readenv"](ppf,2);
      if
       (List["length"]
         (List["filter"]
           (function(x){return x[1];},
            /* :: */[0,
             Clflags["make_archive"],
             /* :: */[0,
              Clflags["make_package"],
              /* :: */[0,
               Clflags["compile_only"],
               /* :: */[0,Clflags["output_c_object"],0]]]]))>
        1)
       {if(Clflags["print_types"][1])
         {Compenv["fatal"]
           ("Option -i is incompatible with -pack, -a, -output-obj")}
        else
         {Compenv["fatal"]
           ("Please specify at most one of -pack, -a, -c, -output-obj")}
        }
      else
       {}
      
      if(Clflags["make_archive"][1])
       {Compmisc["init_path"](0),
        Bytelibrarian["create_archive"]
         (ppf,
          Compenv["get_objfiles"](0),
          Compenv["extract_output"](Clflags["output_name"][1])),
        Warnings["check_fatal"](0)}
      else
       {if(Clflags["make_package"][1])
         {Compmisc["init_path"](0);
          var
           extracted_output=
            Compenv["extract_output"](Clflags["output_name"][1]);
          
          var revd=Compenv["get_objfiles"](0);
          
          Bytepackager["package_files"]
           (ppf,Compmisc["initial_env"](0),revd,extracted_output),
          Warnings["check_fatal"](0)}
        else
         {if(!Clflags["compile_only"][1]&&Clflags["objfiles"][1]!=0)
           {if(Clflags["output_c_object"][1])
             {var s=Compenv["extract_output"](Clflags["output_name"][1]);
              
              if
               (Filename["check_suffix"](s,Config["ext_obj"])||
                Filename["check_suffix"](s,Config["ext_dll"])||
                Filename["check_suffix"](s,".c"))
               {var target=s;}
              else
               {var
                 target=
                  Compenv["fatal"]
                   (Printf["sprintf"]
                     ([0,
                       [11,
                        "The extension of the output file must be .c, ",
                        [2,0,[11," or ",[2,0,0]]]],
                       "The extension of the output file must be .c, %s or %s"],
                      Config["ext_obj"],
                      Config["ext_dll"]));
                }
              }
            else
             {var target=Compenv["default_output"](Clflags["output_name"][1]);
              }
            
            Compmisc["init_path"](0),
            Bytelink["link"](ppf,Compenv["get_objfiles"](0),target),
            Warnings["check_fatal"](0)}
          else
           {}
          }
        }
      
      return Pervasives["exit"](0);
      }
    catch(x)
     {Location["report_exception"](ppf,x);return Pervasives["exit"](2);}
    };

main(0);
module["exports"]={};

