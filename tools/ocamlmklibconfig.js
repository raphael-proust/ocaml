// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");


var bindir="/Users/hongbozhang/.opam/4.02.3+local-git-master/bin";

var ext_lib=".a";

var ext_dll=".so";

var supports_shared_libraries=/* true */1;

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
            ([/* Format */0,
              [/* String_literal */11,
               "ar rc ",
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 32,
                 [/* String */2,
                  /* No_padding */0,
                  [/* Char_literal */12,
                   32,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     "; ranlib ",
                     [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
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

