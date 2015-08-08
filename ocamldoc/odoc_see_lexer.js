// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Buffer=require("Buffer");
var Lexing=require("Lexing");


var buf=Buffer["create"](32);

var
 __ocaml_lex_tables=
  [0,
   "\0\0ùÿúÿûÿüÿýÿþÿ\x05\0\x01\0\x02\0ÿÿ\x04\0ÿÿ\x06\0\x03\0ÿÿ\x05\0\x07\0þÿÿÿ",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "\x01\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\t\0\t\0\0\0\x0b\0\0\0\x0b\0\x0e\0\0\0\x0e\0\x12\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\x06\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\x04\0\0\0\0\0\x07\0\f\0\x03\0\f\0\0\0\x0f\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\0\0ÿÿ\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\r\0\x10\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x13\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0\x07\0ÿÿÿÿ\x07\0\x07\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿ\x07\0\x0b\0\0\0\r\0ÿÿ\x0e\0ÿÿ\x10\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿ\b\0\t\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x0e\0\x0b\0\x10\0\r\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\b\0\t\0\x0e\0\x0b\0\x10\0\r\0\x11\0",
   "",
   "",
   "",
   "",
   "",
   ""];

var main=function(lexbuf){return __ocaml_lex_main_rec(lexbuf,0);};

var
 __ocaml_lex_main_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(6<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:exit=2;
        case 1:exit=2;
        case 2:return url(lexbuf);
        case 3:return doc(lexbuf);
        case 4:return file(lexbuf);
        case 5:return 9;
        case 6:
         Buffer["reset"](buf);
         Buffer["add_string"](buf,Lexing["lexeme"](lexbuf));
         return desc(lexbuf);
         
        }
      }
    
    switch(exit){case 2:return main(lexbuf);}
    };

var url=function(lexbuf){return __ocaml_lex_url_rec(lexbuf,8);};

var
 __ocaml_lex_url_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!=0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_url_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {var s=Lexing["lexeme"](lexbuf);
      
      return [/* See_url */1,$$String["sub"](s,0,s["length"]-1)];
      }
    };

var doc=function(lexbuf){return __ocaml_lex_doc_rec(lexbuf,11);};

var
 __ocaml_lex_doc_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!=0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_doc_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {var s=Lexing["lexeme"](lexbuf);
      
      return [/* See_doc */3,$$String["sub"](s,0,s["length"]-1)];
      }
    };

var file=function(lexbuf){return __ocaml_lex_file_rec(lexbuf,14);};

var
 __ocaml_lex_file_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!=0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_file_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {var s=Lexing["lexeme"](lexbuf);
      
      return [/* See_file */2,$$String["sub"](s,0,s["length"]-1)];
      }
    };

var desc=function(lexbuf){return __ocaml_lex_desc_rec(lexbuf,17);};

var
 __ocaml_lex_desc_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!=0)
     {if(__ocaml_lex_state$1!=1)
       {lexbuf[1](lexbuf);
        return __ocaml_lex_desc_rec(lexbuf,__ocaml_lex_state$1);
        }
      else
       {Buffer["add_string"](buf,Lexing["lexeme"](lexbuf));
        return desc(lexbuf);
        }
      }
    else
     {return [/* Desc */5,Buffer["contents"](buf)];}
    };

module["exports"]=
{"buf":buf,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "main":main,
 "__ocaml_lex_main_rec":__ocaml_lex_main_rec,
 "url":url,
 "__ocaml_lex_url_rec":__ocaml_lex_url_rec,
 "doc":doc,
 "__ocaml_lex_doc_rec":__ocaml_lex_doc_rec,
 "file":file,
 "__ocaml_lex_file_rec":__ocaml_lex_file_rec,
 "desc":desc,
 "__ocaml_lex_desc_rec":__ocaml_lex_desc_rec};

