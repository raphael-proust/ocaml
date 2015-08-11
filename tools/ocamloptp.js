// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Main_args=require("Main_args");
var Pervasives=require("Pervasives");
var List=require("List");
var Arg=require("Arg");
var Printf=require("Printf");
var Filename=require("Filename");


var compargs=[0,0];

var profargs=[0,0];

var toremove=[0,0];

var
 option=
  function(opt,param){return compargs[1]=/* :: */[0,opt,compargs[1]],0;};

var
 option_with_arg=
  function(opt,arg)
   {return compargs[1]=
           /* :: */[0,Filename["quote"](arg),/* :: */[0,opt,compargs[1]]],
           0;
    };

var
 option_with_int=
  function(opt,arg)
   {return compargs[1]=
           /* :: */[0,
            Pervasives["string_of_int"](arg),
            /* :: */[0,opt,compargs[1]]],
           0;
    };

var make_archive=[0,0];

var with_impl=[0,0];

var with_intf=[0,0];

var with_mli=[0,0];

var with_ml=[0,0];

var
 process_file=
  function(filename)
   {if(Filename["check_suffix"](filename,".ml")){with_ml[1]=1,0}else{}
    
    if(Filename["check_suffix"](filename,".mli")){with_mli[1]=1,0}else{}
    
    return compargs[1]=/* :: */[0,Filename["quote"](filename),compargs[1]],0;
    };

var usage="Usage: ocamloptp <options> <files>\noptions are:";

var
 incompatible=
  function(o)
   {Printf["fprintf"]
     (Pervasives["stderr"],
      [0,
       [11,
        "ocamloptp: profiling is incompatible with the ",
        [2,0,[11," option\n",0]]],
       "ocamloptp: profiling is incompatible with the %s option\n"],
      o);
    return Pervasives["exit"](2);
    };

var _a=function(param){make_archive[1]=1,0;return option("-a",0);};

var _absname=option("-absname");

var _annot=option("-annot");

var _binannot=option("-bin-annot");

var _c=option("-c");

var _cc=function(s){return option_with_arg("-cc",s);};

var _cclib=function(s){return option_with_arg("-cclib",s);};

var _ccopt=function(s){return option_with_arg("-ccopt",s);};

var _compact=option("-compact");

var _config=option("-config");

var _for_pack=function(s){return option_with_arg("-for-pack",s);};

var _g=option("-g");

var _i=option("-i");

var _I=function(s){return option_with_arg("-I",s);};

var _impl=function(s){with_impl[1]=1,0;return option_with_arg("-impl",s);};

var _inline=function(n){return option_with_int("-inline",n);};

var _intf=function(s){with_intf[1]=1,0;return option_with_arg("-intf",s);};

var _intf_suffix=function(s){return option_with_arg("-intf-suffix",s);};

var _keep_docs=option("-keep-docs");

var _keep_locs=option("-keep-locs");

var _labels=option("-labels");

var _linkall=option("-linkall");

var _no_alias_deps=option("-no-alias-deps");

var _no_app_funct=option("-no-app-funct");

var _no_float_const_prop=option("-no-float-const-prop");

var _noassert=option("-noassert");

var _noautolink=option("-noautolink");

var _nodynlink=option("-nodynlink");

var _nolabels=option("-nolabels");

var _nostdlib=option("-nostdlib");

var _o=function(s){return option_with_arg("-o",s);};

var _open=function(s){return option_with_arg("-open",s);};

var _output_obj=option("-output-obj");

var _output_complete_obj=option("-output-complete-obj");

var _p=option("-p");

var _pack=option("-pack");

var _pp=function(_s){return incompatible("-pp");};

var _ppx=function(_s){return incompatible("-ppx");};

var _principal=option("-principal");

var _rectypes=option("-rectypes");

var
 _runtime_variant=
  function(s){return option_with_arg("-runtime-variant",s);};

var _S=option("-S");

var _safe_string=option("-safe-string");

var _short_paths=option("-short-paths");

var _strict_sequence=option("-strict-sequence");

var _strict_formats=option("-strict-formats");

var _shared=option("-shared");

var _thread=option("-thread");

var _unsafe=option("-unsafe");

var _unsafe_string=option("-unsafe-string");

var _v=option("-v");

var _version=option("-version");

var _vnum=option("-vnum");

var _verbose=option("-verbose");

var _w=option_with_arg("-w");

var _warn_error=option_with_arg("-warn-error");

var _warn_help=option("-warn-help");

var _where=option("-where");

var _nopervasives=option("-nopervasives");

var _dsource=option("-dsource");

var _dparsetree=option("-dparsetree");

var _dtypedtree=option("-dtypedtree");

var _drawlambda=option("-drawlambda");

var _dlambda=option("-dlambda");

var _dclambda=option("-dclambda");

var _dcmm=option("-dcmm");

var _dsel=option("-dsel");

var _dcombine=option("-dcombine");

var _dcse=option("-dcse");

var _dlive=option("-dlive");

var _dspill=option("-dspill");

var _dsplit=option("-dsplit");

var _dinterf=option("-dinterf");

var _dprefer=option("-dprefer");

var _dalloc=option("-dalloc");

var _dreload=option("-dreload");

var _dscheduling=option("-dscheduling");

var _dlinear=option("-dlinear");

var _dstartup=option("-dstartup");

var _opaque=option("-opaque");

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
     process_file,
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
     _impl,
     _intf,
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
 add_profarg=
  function(s)
   {return profargs[1]=
           /* :: */[0,Filename["quote"](s),/* :: */[0,"-m",profargs[1]]],
           0;
    };

var
 optlist=
  /* :: */[0,
   /* tuple */[0,
    "-P",
    /* String */[4,add_profarg],
    "[afilmt]  Profile constructs specified by argument (default fm):\n      a  Everything\n      f  Function calls and method calls\n      i  if ... then ... else\n      l  while and for loops\n      m  match ... with\n      t  try ... with"],
   Options[1]];

Arg["parse"](optlist,process_file,usage);
if(with_impl[1]&&with_intf[1])
 {Printf["fprintf"]
   (Pervasives["stderr"],
    [0,
     [11,'ocamloptp cannot deal with both "-impl" and "-intf"\n',0],
     'ocamloptp cannot deal with both "-impl" and "-intf"\n']),
  Printf["fprintf"]
   (Pervasives["stderr"],
    [0,
     [11,"please compile interfaces and implementations separately\n",0],
     "please compile interfaces and implementations separately\n"]),
  Pervasives["exit"](2)}
else
 {if(with_impl[1]&&with_mli[1])
   {Printf["fprintf"]
     (Pervasives["stderr"],
      [0,
       [11,'ocamloptp cannot deal with both "-impl" and .mli files\n',0],
       'ocamloptp cannot deal with both "-impl" and .mli files\n']),
    Printf["fprintf"]
     (Pervasives["stderr"],
      [0,
       [11,"please compile interfaces and implementations separately\n",0],
       "please compile interfaces and implementations separately\n"]),
    Pervasives["exit"](2)}
  else
   {if(with_intf[1]&&with_ml[1])
     {Printf["fprintf"]
       (Pervasives["stderr"],
        [0,
         [11,'ocamloptp cannot deal with both "-intf" and .ml files\n',0],
         'ocamloptp cannot deal with both "-intf" and .ml files\n']),
      Printf["fprintf"]
       (Pervasives["stderr"],
        [0,
         [11,"please compile interfaces and implementations separately\n",0],
         "please compile interfaces and implementations separately\n"]),
      Pervasives["exit"](2)}
    else
     {}
    }
  }

if(with_impl[1]){profargs[1]=/* :: */[0,"-impl",profargs[1]],0}else{}

if(with_intf[1]){profargs[1]=/* :: */[0,"-intf",profargs[1]],0}else{}

var status="unknown primitive:caml_sys_system_command";

Pervasives["exit"](status);
module["exports"]=
{"compargs":compargs,
 "profargs":profargs,
 "toremove":toremove,
 "option":option,
 "option_with_arg":option_with_arg,
 "option_with_int":option_with_int,
 "make_archive":make_archive,
 "with_impl":with_impl,
 "with_intf":with_intf,
 "with_mli":with_mli,
 "with_ml":with_ml,
 "process_file":process_file,
 "usage":usage,
 "incompatible":incompatible,
 "Options":Options,
 "add_profarg":add_profarg};

