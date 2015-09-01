// Generated CODE, PLEASE EDIT WITH CARE 

var Ocamlbuild_pack=require("./ocamlbuild_pack.js");
var Pervasives=require("./pervasives.js");
var Ocamlbuild_executor=require("./ocamlbuild_executor.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var Unix=require("./unix.js");
var Filename=require("./filename.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 report_error=
  function(f,exn)
   {if(exn[1]===Unix["Unix_error"])
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
        Sys["argv"][1],
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
      
      return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,
                 ": ",
                 [/* String */2,/* No_padding */0,/* End_of_format */0]],
                ": %s"],
               Unix["error_message"](exn[2]))}
    else
     {throw exn}
    };

var
 mkstat=
  function(unix_stat,x)
   {var st;
    try
     {st=unix_stat(x);}
    catch(e)
     {if(e[1]===Unix["Unix_error"])
       {throw [0,
               CamlPrimitive["caml_global_data"]["Sys_error"],
               Ocamlbuild_pack["My_std"][8]
                ([/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                 report_error,
                 e)]}
      else
       {throw e}
      }
    
    var match=st[3];
    
    var exit;
    
    var $js;
    switch(match)
     {case 0:$js=/* FK_file */1;break;
      case 1:$js=/* FK_dir */0;break;
      case 2:exit=19;break;
      case 3:exit=19;break;
      case 4:$js=/* FK_link */2;break;
      case 5:exit=19;break;
      case 6:exit=19;break
      }
    
    var $js$1;
    switch(exit){case 19:$js$1=/* FK_other */3;break}
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
              st[2])]};

var is_link=function(s){return Unix["lstat"](s)[3]===/* S_LNK */4};

var
 at_exit_once=
  function(callback)
   {var pid=Unix["getpid"](/* () */0);
    
    return Pervasives["at_exit"]
            (function(param)
              {return pid===Unix["getpid"](/* () */0)?callback(/* () */0):0})};

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
         {case 0:if(match[1]!==0){exit=11;}else{return /* () */0}break;
          case 1:exit=11;break;
          case 2:exit=11;break
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
                      s))
          }
        };
    
    var res;
    try {res=kont(ic);}catch(e){close(/* () */0);throw e}
    
    close(/* () */0);
    return res};

var
 stdout_isatty=
  function(param)
   {var $js;
    try
     {$js=
      CamlPrimitive["caml_string_notequal"](Unix["getenv"]("TERM"),"dumb");
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {$js=/* true */1;}
      else
       {throw exn}
      }
    return Unix["isatty"](Unix["stdout"])&&$js};

var exit=function(i){throw [0,Ocamlbuild_pack["My_std"][4],i]};

var
 exit$1=
  function(param)
   {switch(param)
     {case 0:return exit(Ocamlbuild_pack["Exit_codes"][12]);
      case 1:return exit(Ocamlbuild_pack["Exit_codes"][13]);
      case 2:return exit(Ocamlbuild_pack["Exit_codes"][14]);
      case 3:return exit(Ocamlbuild_pack["Exit_codes"][15])
      }
    };

var func=Ocamlbuild_executor["execute"];

var
 execute_many=
  function(param,param$1,param$2,param$3)
   {return func(param,param$1,param$2,param$3,exit$1)};

var
 myunixreadlink=
  function(x)
   {var y=Unix["readlink"](x);
    
    return Filename["is_relative"](y)
            ?Filename["concat"](Filename["dirname"](x),y)
            :y};

var
 setup=
  function(param)
   {Ocamlbuild_pack["My_unix"][13][1]=/* false */0;
    Ocamlbuild_pack["My_unix"][13][9]=stdout_isatty;
    Ocamlbuild_pack["My_unix"][13][8]=Unix["gettimeofday"];
    Ocamlbuild_pack["My_unix"][13][6]=report_error;
    Ocamlbuild_pack["My_unix"][13][5]=execute_many;
    Ocamlbuild_pack["My_unix"][13][4]=myunixreadlink;
    Ocamlbuild_pack["My_unix"][13][3]=run_and_open;
    Ocamlbuild_pack["My_unix"][13][7]=at_exit_once;
    Ocamlbuild_pack["My_unix"][13][2]=is_link;
    Ocamlbuild_pack["My_unix"][13][10]=
    function(param$1){return mkstat(Unix["stat"],param$1)};
    return Ocamlbuild_pack["My_unix"][13][11]=
           function(param$1){return mkstat(Unix["lstat"],param$1)},
           0};

module["exports"]={"setup":setup};

