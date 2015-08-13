// Generated CODE, PLEASE EDIT WITH CARE 

var Ocamlbuild_pack=require("Ocamlbuild_pack");
var Pervasives=require("Pervasives");
var Ocamlbuild_executor=require("Ocamlbuild_executor");
var Printf=require("Printf");
var Format=require("Format");
var CamlPrimtivie=require("CamlPrimtivie");
var Unix=require("Unix");
var Filename=require("Filename");
var Sys=require("Sys");


var
 report_error=
  function(f,exn)
   {if(exn[1]=Unix["Unix_error"])
     {var arg=exn[4];
      
      Format["fprintf"]
       (f,
        [/* Format */0,
         [/* String */2,
          /* No_padding */0,
          [/* String_literal */11,
           ": ",
           [/* Caml_string */3,
            /* No_padding */0,
            [/* String_literal */11," failed",/* End_of_format */0]]]],
         "%s: %S failed"],
        Sys["argv"][0],
        exn[3]);
      if(arg["length"]>0)
       {Format["fprintf"]
         (f,
          [/* Format */0,
           [/* String_literal */11,
            " on ",
            [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
           " on %S"],
          arg)}
      else
       {}
      
      return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,
                 ": ",
                 [/* String */2,/* No_padding */0,/* End_of_format */0]],
                ": %s"],
               Unix["error_message"](exn[2]));
      }
    else
     {throw exn;}
    };

var
 mkstat=
  function(unix_stat,x)
   {try
     {var st=unix_stat(x);}
    catch(e)
     {if(e[1]=Unix["Unix_error"])
       {throw [0,
               Sys_error,
               Ocamlbuild_pack["My_std"][8]
                ([/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                 report_error,
                 e)];
        }
      else
       {throw e;}
      }
    
    var match=st[3];
    
    var exit;
    
    var $js;
    switch(match)
     {case 0:$js=/* FK_file */1;
      case 1:$js=/* FK_dir */0;
      case 2:exit=19;
      case 3:exit=19;
      case 4:$js=/* FK_link */2;
      case 5:exit=19;
      case 6:exit=19;
      }
    
    var $js$1;
    switch(exit){case 19:$js$1=/* FK_other */3;}
    return /* record */[0,
            $js$1,
            Format["sprintf"]
             ([/* Format */0,
               [/* Char_literal */12,
                40,
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 [/* Char_literal */12,
                  44,
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* Char_literal */12,41,/* End_of_format */0]]]]],
               "(%d,%d)"],
              st[1],
              st[2])];
    };

var is_link=function(s){return Unix["lstat"](s)[3]=/* S_LNK */4;};

var
 at_exit_once=
  function(callback)
   {var pid=Unix["getpid"](/* () */0);
    
    return Pervasives["at_exit"]
            (function(param)
              {if(pid=Unix["getpid"](/* () */0))
                {return callback(/* () */0);}
               else
                {return 0;}
               });
    };

var
 run_and_open=
  function(s,kont)
   {var ic=Unix["open_process_in"](s);
    
    var
     close=
      function(param)
       {var match=Unix["close_process_in"](ic);
        
        var exit;
        
        switch(match[0])
         {case 0:if(match[1]!=0){exit=11;}else{return /* () */0;}
          case 1:exit=11;
          case 2:exit=11;
          }
        
        switch(exit)
         {case 11:
           return Pervasives["failwith"]
                   (Printf["sprintf"]
                     ([/* Format */0,
                       [/* String_literal */11,
                        "Error while running: ",
                        [/* String */2,/* No_padding */0,/* End_of_format */0]],
                       "Error while running: %s"],
                      s));
           
          }
        };
    
    try {var res=kont(ic);}catch(e){close(/* () */0);throw e;}
    
    close(/* () */0);
    return res;
    };

var
 stdout_isatty=
  function(param)
   {var $js;
    try
     {$js=
      CamlPrimtivie["caml_string_notequal"](Unix["getenv"]("TERM"),"dumb");
      }
    catch(exn){if(exn=Not_found){$js=/* true */1;}else{throw exn;}}
    return Unix["isatty"](Unix["stdout"])&&$js;
    };

var exit=function(i){throw [0,Ocamlbuild_pack["My_std"][4],i];};

var
 exit$1=
  function(param)
   {switch(param)
     {case 0:return exit(Ocamlbuild_pack["Exit_codes"][12]);
      case 1:return exit(Ocamlbuild_pack["Exit_codes"][13]);
      case 2:return exit(Ocamlbuild_pack["Exit_codes"][14]);
      case 3:return exit(Ocamlbuild_pack["Exit_codes"][15]);
      }
    };

var func=Ocamlbuild_executor["execute"];

var
 execute_many=
  function(param,param$1,param$2,param$3)
   {return func(param,param$1,param$2,param$3,exit$1);};

var
 myunixreadlink=
  function(x)
   {var y=Unix["readlink"](x);
    
    if(Filename["is_relative"](y))
     {return Filename["concat"](Filename["dirname"](x),y);}
    else
     {return y;}
    };

var
 setup=
  function(param)
   {Ocamlbuild_pack["My_unix"][13][1]=/* false */0,0;
    Ocamlbuild_pack["My_unix"][13][9]=stdout_isatty,0;
    Ocamlbuild_pack["My_unix"][13][8]=Unix["gettimeofday"],0;
    Ocamlbuild_pack["My_unix"][13][6]=report_error,0;
    Ocamlbuild_pack["My_unix"][13][5]=execute_many,0;
    Ocamlbuild_pack["My_unix"][13][4]=myunixreadlink,0;
    Ocamlbuild_pack["My_unix"][13][3]=run_and_open,0;
    Ocamlbuild_pack["My_unix"][13][7]=at_exit_once,0;
    Ocamlbuild_pack["My_unix"][13][2]=is_link,0;
    Ocamlbuild_pack["My_unix"][13][10]=mkstat(Unix["stat"]),0;
    return Ocamlbuild_pack["My_unix"][13][11]=mkstat(Unix["lstat"]),0;
    };

module["exports"]={"setup":setup};

