// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Printf=require("Printf");


var bindir="/Users/hongbozhang/.opam/4.02.3+local-git-master/bin";

var ext_lib=".a";

var ext_dll=".so";

var supports_shared_libraries=1;

var
 mkdll=
  "gcc -bundle -flat_namespace -undefined suppress -Wl,-no_compact_unwind";

var byteccrpath="";

var nativeccrpath="";

var mksharedlibrpath="";

var toolpref="";

var syslib=function(x){return Pervasives["^"]("-l",x);};

var
 mklib=
  function(out,files,opts)
   {return Printf["sprintf"]
            ([0,
              [11,
               "ar rc ",
               [2,0,[12,32,[2,0,[12,32,[2,0,[11,"; ranlib ",[2,0,0]]]]]]]],
              "ar rc %s %s %s; ranlib %s"],
             out,
             opts,
             files,
             out);
    };

module["exports"]=
{"bindir":bindir,
 "ext_lib":ext_lib,
 "ext_dll":ext_dll,
 "supports_shared_libraries":supports_shared_libraries,
 "mkdll":mkdll,
 "byteccrpath":byteccrpath,
 "nativeccrpath":nativeccrpath,
 "mksharedlibrpath":mksharedlibrpath,
 "toolpref":toolpref,
 "syslib":syslib,
 "mklib":mklib};

