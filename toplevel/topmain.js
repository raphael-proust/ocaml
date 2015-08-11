// Generated CODE, PLEASE EDIT WITH CARE 

var Main_args=require("Main_args");
var Topdirs=require("Topdirs");
var Warnings=require("Warnings");
var List=require("List");
var Pervasives=require("Pervasives");
var Arg=require("Arg");
var Printf=require("Printf");
var Clflags=require("Clflags");
var Toploop=require("Toploop");
var Format=require("Format");
var Misc=require("Misc");
var Filename=require("Filename");
var Compenv=require("Compenv");
var Printexc=require("Printexc");
var Location=require("Location");
var $$Array=require("Array");
var Config=require("Config");
var Sys=require("Sys");


var
 usage=
  "Usage: ocaml <options> <object-files> [script-file [arguments]]\noptions are:";

var preload_objects=[0,0];

var
 prepare=
  function(ppf)
   {Toploop["set_paths"](0);
    try
     {var
       res=
        List["for_all"]
         (Topdirs["load_file"](ppf),List["rev"](preload_objects[1]));
      
      Toploop["toplevel_startup_hook"][1](0);
      return res;
      }
    catch(x)
     {try
       {Location["report_exception"](ppf,x);return 0;}
      catch(x$1)
       {Format["fprintf"]
         (ppf,
          [0,
           [11,"Uncaught exception: ",[2,0,[12,10,0]]],
           "Uncaught exception: %s\n"],
          Printexc["to_string"](x$1));
        return 0;
        }
      }
    };

var
 file_argument=
  function(name)
   {var ppf=Format["err_formatter"];
    
    if
     (Filename["check_suffix"](name,".cmo")||
      Filename["check_suffix"](name,".cma"))
     {return preload_objects[1]=/* :: */[0,name,preload_objects[1]],0;}
    else
     {var
       newargs=
        $$Array["sub"]
         (Sys["argv"],
          Arg["current"][1],
          Sys["argv"]["length"]-Arg["current"][1]);
      
      Compenv["readenv"](ppf,2);
      if(prepare(ppf)&&Toploop["run_script"](ppf,name,newargs))
       {return Pervasives["exit"](0);}
      else
       {return Pervasives["exit"](2);}
      }
    };

var
 print_version=
  function(param)
   {Printf["printf"]
     ([0,
       [11,"The OCaml toplevel, version ",[2,0,[12,10,0]]],
       "The OCaml toplevel, version %s\n"],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Printf["printf"]([0,[2,0,[12,10,0]],"%s\n"],Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var set=function(r,param){return r[1]=1,0;};

var clear=function(r,param){return r[1]=0,0;};

var _absname=set(Location["absname"]);

var
 _I=
  function(dir)
   {var dir$1=Misc["expand_directory"](Config["standard_library"],dir);
    
    return Clflags["include_dirs"][1]=
           /* :: */[0,dir$1,Clflags["include_dirs"][1]],
           0;
    };

var _init=function(s){return Clflags["init_file"][1]=/* Some */[0,s],0;};

var _noinit=set(Clflags["noinit"]);

var _labels=clear(Clflags["classic"]);

var _no_alias_deps=set(Clflags["transparent_modules"]);

var _no_app_funct=clear(Clflags["applicative_functors"]);

var _noassert=set(Clflags["noassert"]);

var _nolabels=set(Clflags["classic"]);

var _noprompt=set(Clflags["noprompt"]);

var _nopromptcont=set(Clflags["nopromptcont"]);

var _nostdlib=set(Clflags["no_std_include"]);

var
 _open=
  function(s)
   {return Clflags["open_modules"][1]=
           /* :: */[0,s,Clflags["open_modules"][1]],
           0;
    };

var
 _ppx=
  function(s)
   {return Compenv["first_ppx"][1]=/* :: */[0,s,Compenv["first_ppx"][1]],0;};

var _principal=set(Clflags["principal"]);

var _rectypes=set(Clflags["recursive_types"]);

var _safe_string=clear(Clflags["unsafe_string"]);

var _short_paths=clear(Clflags["real_paths"]);

var _stdin=function(param){return file_argument("");};

var _strict_sequence=set(Clflags["strict_sequence"]);

var _strict_formats=set(Clflags["strict_formats"]);

var _unsafe=set(Clflags["fast"]);

var _unsafe_string=set(Clflags["unsafe_string"]);

var _version=function(param){return print_version(0);};

var _vnum=function(param){return print_version_num(0);};

var _w=function(s){return Warnings["parse_options"](0,s);};

var _warn_error=function(s){return Warnings["parse_options"](1,s);};

var _warn_help=Warnings["help_warnings"];

var _dparsetree=set(Clflags["dump_parsetree"]);

var _dtypedtree=set(Clflags["dump_typedtree"]);

var _dsource=set(Clflags["dump_source"]);

var _drawlambda=set(Clflags["dump_rawlambda"]);

var _dlambda=set(Clflags["dump_lambda"]);

var _dinstr=set(Clflags["dump_instr"]);

var anonymous=function(s){return file_argument(s);};

var
 Options=
  Main_args["Make_bytetop_options"]
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
     _principal,
     _rectypes,
     _safe_string,
     _short_paths,
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
     _init,
     _noinit,
     _noprompt,
     _nopromptcont,
     _stdin,
     _dinstr]);

var
 main=
  function(param)
   {var ppf=Format["err_formatter"];
    
    Compenv["readenv"](ppf,0);
    Arg["parse"](Options[1],file_argument,usage);
    Compenv["readenv"](ppf,2);
    if(!prepare(ppf)){Pervasives["exit"](2)}else{}
    
    return Toploop["loop"](Format["std_formatter"]);
    };

module["exports"]={"main":main};

