// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var Lexing=require("Lexing");


var first_item=[0,0];

var command_beginning=[0,0];

var
 add_semicolon=
  function(param)
   {if(first_item[1])
     {return first_item[1]=0,0;}
    else
     {return Pervasives["print_string"]("; ");}
    };

var
 print_unescaped_string=
  function(s)
   {var l=s["length"];
    
    var i=0;
    
    while(i<l)
     {var c=s[i+1];
      
      if((s[i]=92)&&i+1<l&&((c=123)||(c=96))){i=i+1;}else{}
      
      Pervasives["print_char"](s[i]);
      i=i+1;
      }
    return 0;
    };

var
 __ocaml_lex_tables=
  [0,
   "\0\0üÿýÿ\x01\0ÿÿþÿ\x02\0\x03\0\b\0\x03\0þÿÿÿýÿ\0\0\r\0\x17\0",
   "ÿÿÿÿÿÿ\x03\0ÿÿÿÿÿÿÿÿ\x03\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "\x01\0\0\0\0\0ÿÿ\0\0\0\0\b\0ÿÿ\b\0\t\0\0\0\0\0\0\0ÿÿÿÿÿÿ",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\b\0\0\0\0\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\0\0\x07\0\b\0\x04\0\x05\0\x0b\0\b\0\x07\0\b\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\b\0\0\0\b\0\0\0\0\0\0\0\0\0\0\0\t\0\b\0\0\0\f\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\0\0\n\0ÿÿ\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\r\0ÿÿÿÿ\x07\0ÿÿÿÿ\x07\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x07\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\x06\0\x07\0\0\0\x03\0\x06\0\x07\0\b\0\x07\0ÿÿÿÿ\b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x07\0ÿÿÿÿÿÿ\x07\0ÿÿ\x07\0ÿÿÿÿÿÿÿÿÿÿ\x06\0\x07\0ÿÿ\t\0ÿÿÿÿ\b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\x06\0\t\0ÿÿÿÿÿÿÿÿ\b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
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
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:
         command_beginning[1]=Lexing["lexeme_start"](lexbuf),0;
         first_item[1]=1,0;
         Pervasives["print_char"](40);
         command(lexbuf);
         Pervasives["print_char"](41);
         return main(lexbuf);
         
        case 1:Pervasives["print_string"]("`");return main(lexbuf);
        case 2:return 0;
        case 3:
         Pervasives["print_char"](Lexing["lexeme_char"](lexbuf,0));
         return main(lexbuf);
         
        }
      }
    };

var command=function(lexbuf){return __ocaml_lex_command_rec(lexbuf,6);};

var
 __ocaml_lex_command_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_command_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:return 0;
        case 1:
         Pervasives["prerr_string"]("Unterminated `...` at character ");
         Pervasives["prerr_int"](command_beginning[1]);
         Pervasives["prerr_newline"](0);
         return Pervasives["exit"](2);
         
        case 2:
         var s=Lexing["lexeme"](lexbuf);
         
         add_semicolon(0);
         Pervasives["print_string"]($$String["sub"](s,1,s["length"]-2));
         return command(lexbuf);
         
        case 3:
         var s$1=Lexing["lexeme"](lexbuf);
         
         add_semicolon(0);
         if
          ((s$1["length"]=1)&&
           s$1[0]!=
           92&&
           s$1[0]!=
           39||
           (s$1["length"]=2)&&
           (s$1[0]=92)&&
           s$1[1]!=
           96&&
           s$1[1]!=
           123)
          {Pervasives["print_string"]("emit_char '"),
           print_unescaped_string(s$1),
           Pervasives["print_string"]("'")}
         else
          {Pervasives["print_string"]('emit_string "'),
           print_unescaped_string(s$1),
           Pervasives["print_string"]('"')}
         
         return command(lexbuf);
         
        }
      }
    };

main(Lexing["from_channel"](Pervasives["stdin"]));
Pervasives["exit"](0);
module["exports"]=
{"first_item":first_item,
 "command_beginning":command_beginning,
 "add_semicolon":add_semicolon,
 "print_unescaped_string":print_unescaped_string,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "main":main,
 "__ocaml_lex_main_rec":__ocaml_lex_main_rec,
 "command":command,
 "__ocaml_lex_command_rec":__ocaml_lex_command_rec};

