// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Main_args=require("./main_args.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Arg=require("./arg.js");
var Printf=require("./printf.js");
var Filename=require("./filename.js");
var CamlPrimitive=require("./camlPrimitive.js");


var compargs=[0,/* [] */0];

var profargs=[0,/* [] */0];

var toremove=[0,/* [] */0];

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

var make_archive=[0,/* false */0];

var with_impl=[0,/* false */0];

var with_intf=[0,/* false */0];

var with_mli=[0,/* false */0];

var with_ml=[0,/* false */0];

var
 process_file=
  function(filename)
   {if(Filename["check_suffix"](filename,".ml")){with_ml[1]=/* true */1}else{}
    
    if(Filename["check_suffix"](filename,".mli"))
     {with_mli[1]=/* true */1}
    else
     {}
    
    return compargs[1]=/* :: */[0,Filename["quote"](filename),compargs[1]],0;
    };

var usage="Usage: ocamlcp <options> <files>\noptions are:";

var
 incompatible=
  function(o)
   {Printf["fprintf"]
     (Pervasives["stderr"],
      [/* Format */0,
       [/* String_literal */11,
        "ocamlcp: profiling is incompatible with the ",
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11," option\n",/* End_of_format */0]]],
       "ocamlcp: profiling is incompatible with the %s option\n"],
      o);
    return Pervasives["exit"](2);
    };

var
 _a=
  function(param){make_archive[1]=/* true */1;return option("-a",/* () */0);};

var _absname=option("-absname");

var _annot=option("-annot");

var _binannot=option("-bin-annot");

var _c=option("-c");

var _cc=function(s){return option_with_arg("-cc",s);};

var _cclib=function(s){return option_with_arg("-cclib",s);};

var _ccopt=function(s){return option_with_arg("-ccopt",s);};

var _config=option("-config");

var _compat_32=option("-compat-32");

var _custom=option("-custom");

var _dllib=option_with_arg("-dllib");

var _dllpath=option_with_arg("-dllpath");

var _dtypes=option("-dtypes");

var _for_pack=option_with_arg("-for-pack");

var _g=option("-g");

var _i=option("-i");

var _I=function(s){return option_with_arg("-I",s);};

var
 _impl=
  function(s){with_impl[1]=/* true */1;return option_with_arg("-impl",s);};

var
 _intf=
  function(s){with_intf[1]=/* true */1;return option_with_arg("-intf",s);};

var _intf_suffix=function(s){return option_with_arg("-intf-suffix",s);};

var _keep_docs=option("-keep-docs");

var _keep_locs=option("-keep-locs");

var _labels=option("-labels");

var _linkall=option("-linkall");

var _make_runtime=option("-make-runtime");

var _no_alias_deps=option("-no-alias-deps");

var _no_app_funct=option("-no-app-funct");

var _no_check_prims=option("-no-check-prims");

var _noassert=option("-noassert");

var _nolabels=option("-nolabels");

var _noautolink=option("-noautolink");

var _nostdlib=option("-nostdlib");

var _o=function(s){return option_with_arg("-o",s);};

var _open=function(s){return option_with_arg("-open",s);};

var _output_obj=option("-output-obj");

var _output_complete_obj=option("-output-complete-obj");

var _pack=option("-pack");

var _pp=function(_s){return incompatible("-pp");};

var _ppx=function(_s){return incompatible("-ppx");};

var _principal=option("-principal");

var _rectypes=option("-rectypes");

var
 _runtime_variant=
  function(s){return option_with_arg("-runtime-variant",s);};

var _safe_string=option("-safe-string");

var _short_paths=option("-short-paths");

var _strict_sequence=option("-strict-sequence");

var _strict_formats=option("-strict-formats");

var _thread=function(param){return option("-thread",/* () */0);};

var _vmthread=function(param){return option("-vmthread",/* () */0);};

var _unsafe=option("-unsafe");

var _unsafe_string=option("-unsafe-string");

var _use_prims=function(s){return option_with_arg("-use-prims",s);};

var _use_runtime=function(s){return option_with_arg("-use-runtime",s);};

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

var _dinstr=option("-dinstr");

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
   /* :: */[0,
    /* tuple */[0,
     "-p",
     /* String */[4,add_profarg],
     "[afilmt]  Same as option -P"],
    Options[1]]];

Arg["parse"](optlist,process_file,usage);
if(with_impl[1]&&with_intf[1])
 {Printf["fprintf"]
   (Pervasives["stderr"],
    [/* Format */0,
     [/* String_literal */11,
      'ocamlcp cannot deal with both "-impl" and "-intf"\n',
      /* End_of_format */0],
     'ocamlcp cannot deal with both "-impl" and "-intf"\n']),
  Printf["fprintf"]
   (Pervasives["stderr"],
    [/* Format */0,
     [/* String_literal */11,
      "please compile interfaces and implementations separately\n",
      /* End_of_format */0],
     "please compile interfaces and implementations separately\n"]),
  Pervasives["exit"](2)}
else
 {if(with_impl[1]&&with_mli[1])
   {Printf["fprintf"]
     (Pervasives["stderr"],
      [/* Format */0,
       [/* String_literal */11,
        'ocamlcp cannot deal with both "-impl" and .mli files\n',
        /* End_of_format */0],
       'ocamlcp cannot deal with both "-impl" and .mli files\n']),
    Printf["fprintf"]
     (Pervasives["stderr"],
      [/* Format */0,
       [/* String_literal */11,
        "please compile interfaces and implementations separately\n",
        /* End_of_format */0],
       "please compile interfaces and implementations separately\n"]),
    Pervasives["exit"](2)}
  else
   {if(with_intf[1]&&with_ml[1])
     {Printf["fprintf"]
       (Pervasives["stderr"],
        [/* Format */0,
         [/* String_literal */11,
          'ocamlcp cannot deal with both "-intf" and .ml files\n',
          /* End_of_format */0],
         'ocamlcp cannot deal with both "-intf" and .ml files\n']),
      Printf["fprintf"]
       (Pervasives["stderr"],
        [/* Format */0,
         [/* String_literal */11,
          "please compile interfaces and implementations separately\n",
          /* End_of_format */0],
         "please compile interfaces and implementations separately\n"]),
      Pervasives["exit"](2)}
    else
     {}
    }
  }

if(with_impl[1]){profargs[1]=/* :: */[0,"-impl",profargs[1]]}else{}

if(with_intf[1]){profargs[1]=/* :: */[0,"-intf",profargs[1]]}else{}

var
 status=
  CamlPrimitive["caml_sys_system_command"]
   (Printf["sprintf"]
     ([/* Format */0,
       [/* String_literal */11,
        'ocamlc -pp "ocamlprof -instrument ',
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,
          '" ',
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,
            32,
            [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
       'ocamlc -pp "ocamlprof -instrument %s" %s %s'],
      $$String["concat"](" ",List["rev"](profargs[1])),
      make_archive[1]?"":"profiling.cmo",
      $$String["concat"](" ",List["rev"](compargs[1]))));

Pervasives["exit"](status);
module["exports"]=
{"compargs":compargs,
 "profargs":profargs,
 "toremove":toremove,
 "option":option,
 "option_with_arg":option_with_arg,
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

