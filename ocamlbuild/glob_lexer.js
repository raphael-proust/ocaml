// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Printf=require("./printf.js");
var Glob_ast=require("./glob_ast.js");
var Buffer=require("./buffer.js");
var Lexing=require("./lexing.js");


var sf=Printf["sprintf"];

var
 concat_patterns=
  function(p1,p2)
   {return typeof p1==="number"
            ?p2
            :typeof p2==="number"?p1:/* Concat */[2,p1,p2];
    };

var slash=[/* Class */1,[/* Atom */3,[/* tuple */0,47,47]]];

var not_slash=[/* Class */1,[/* Not */2,[/* Atom */3,[/* tuple */0,47,47]]]];

var any=[/* Class */1,/* True */0];

var
 __ocaml_lex_tables=
  [/* record */0,
   "\0\0õÿ\x05\0÷ÿøÿùÿ\x01\0úÿ\0\0ûÿ\x01\0\x01\0üÿ\0\0\x01\0ýÿ\x03\0\x03\0þÿÿÿ\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\x04\0\x02\0S\0ôÿõÿ\0\0\x01\0\0\0þÿ¢\0ýÿ\x02\0\0\0ûÿ\x03\0ùÿ\x1d\0\x1e\0\x01\0ÿÿþÿ0\0\0\0\x06\0\x01\0\x02\0ýÿþÿ",
   "ÿÿÿÿ\t\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\b\0\t\0\x03\0ÿÿ\0\0ÿÿÿÿ\x05\0ÿÿ\x07\0ÿÿÿÿ\x02\0\x03\0ÿÿÿÿÿÿ\x03\0\x03\0\0\0ÿÿÿÿÿÿ",
   "ÿÿ\0\0ÿÿ\0\0\0\0\0\0ÿÿ\0\0ÿÿ\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1e\0\0\0\0\0ÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿ\0\0ÿÿ\0\0,\0,\0ÿÿ\0\0\0\x001\0ÿÿÿÿÿÿ5\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\0\0\x02\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\0\0\x12\0/\0\0\0\x02\0\x0f\0\0\0\x04\0\x03\0)\0&\0'\x004\x004\0(\0\x05\0\x07\0*\x004\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0\0\0.\0ÿÿ\x10\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\r\0\x17\0\x15\0\f\0\0\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x002\0%\0\0\0\0\0\x11\0\x1a\x006\0\x0f\0\x07\0\x06\0\x05\0\0\0\0\0\0\0\0\0\x1b\0\0\0\x0b\0\x0e\0\x16\0\x14\0\x18\0\f\0\b\0\t\0\x19\0\x1c\0\0\0-\0ÿÿ\0\0\f\0 \0\t\0\0\0$\0$\0!\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\x003\0\0\0\0\0\0\0\0\0\x1f\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\"\0\0\0\0\0\0\0$\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0#\0$\0$\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\0\0\0\0\0\x01\0$\0ÿÿ$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0\x02\0\x02\0ÿÿ\x02\0\x02\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0-\0ÿÿ\x02\0\0\0ÿÿ\0\0\0\0 \0!\0&\x001\x003\0'\0\0\0\0\0)\x002\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿ+\0,\0\0\0ÿÿÿÿ\x15\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\n\0\x10\0\r\0ÿÿ\x17\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ0\0\"\0ÿÿÿÿ\0\0\x06\x002\0\x14\0\x19\0\0\0\x1c\0ÿÿÿÿÿÿÿÿ\x1a\0ÿÿ\0\0\0\0\x0b\0\x11\0\b\0\x0e\0\0\0\x16\0\x18\0\x1b\0ÿÿ+\0,\0ÿÿ\0\0\x1d\0\0\0ÿÿ\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\x000\0ÿÿÿÿÿÿÿÿ\x1d\0ÿÿ\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0ÿÿÿÿÿÿ\x1d\0ÿÿ\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0$\0$\0ÿÿ$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0ÿÿÿÿÿÿ\0\0$\x004\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0+\0,\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1d\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "",
   "",
   "",
   "",
   "",
   ""];

var token=function(lexbuf){return __ocaml_lex_token_rec(lexbuf,0);};

var
 __ocaml_lex_token_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(10<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_token_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var
          match=
           parse_pattern([/* :: */0,62,/* [] */0],/* Epsilon */0,lexbuf);
         
         return /* ATOM */[0,/* Pattern */[1,match[1]]];
         
        case 1:
         return /* ATOM */[0,
                 /* Constant */[0,parse_string(Buffer["create"](32),lexbuf)]];
         
        case 2:return /* AND */0;
        case 3:return /* OR */1;
        case 4:return /* NOT */2;
        case 5:return /* TRUE */5;
        case 6:return /* FALSE */6;
        case 7:return /* LPAR */3;
        case 8:return /* RPAR */4;
        case 9:return token(lexbuf);
        case 10:return /* EOF */7;
        }
      }
    };

var
 parse_pattern=
  function(eof_chars,p,lexbuf)
   {return __ocaml_lex_parse_pattern_rec(eof_chars,p,lexbuf,29);};

var
 __ocaml_lex_parse_pattern_rec=
  function(eof_chars,p,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(11<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_pattern_rec
              (eof_chars,p,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var u=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]);
         
         return parse_pattern
                 (eof_chars,concat_patterns(p,/* Word */[4,u]),lexbuf);
         
        case 1:
         var
          loop=
           function(pl)
            {var
              match=
               parse_pattern
                ([/* :: */0,125,[/* :: */0,44,/* [] */0]],
                 /* Epsilon */0,
                 lexbuf);
             
             var pl$1=/* :: */[0,match[1],pl];
             
             return match[2]===44
                     ?loop(pl$1)
                     :parse_pattern
                       (eof_chars,concat_patterns(p,/* Union */[3,pl$1]),lexbuf);
             };
         
         return loop(/* [] */0);
         
        case 2:
         var cl=/* Not */[2,/* Or */[1,parse_class(/* [] */0,lexbuf)]];
         
         return parse_pattern
                 (eof_chars,concat_patterns(p,/* Class */[1,cl]),lexbuf);
         
        case 3:
         var cl$1=/* Or */[1,parse_class(/* [] */0,lexbuf)];
         
         return parse_pattern
                 (eof_chars,concat_patterns(p,/* Class */[1,cl$1]),lexbuf);
         
        case 4:
         var
          q=
           /* Union */[3,
            /* :: */[0,
             slash,
             /* :: */[0,
              /* Concat */[2,slash,/* Concat */[2,/* Star */[0,any],slash]],
              /* [] */0]]];
         
         return parse_pattern(eof_chars,concat_patterns(p,q),lexbuf);
         
        case 5:
         var
          q$1=
           /* Union */[3,
            /* :: */[0,
             /* Epsilon */0,
             /* :: */[0,/* Concat */[2,slash,/* Star */[0,any]],/* [] */0]]];
         
         return parse_pattern(eof_chars,concat_patterns(p,q$1),lexbuf);
         
        case 6:
         var
          q$2=
           /* Union */[3,
            /* :: */[0,
             /* Epsilon */0,
             /* :: */[0,/* Concat */[2,/* Star */[0,any],slash],/* [] */0]]];
         
         return parse_pattern(eof_chars,concat_patterns(p,q$2),lexbuf);
         
        case 7:
         throw [0,
                Glob_ast["Parse_error"],
                "Ambiguous ** pattern not allowed unless surrounded by one or more slashes"];
         
        case 8:
         return parse_pattern
                 (eof_chars,concat_patterns(p,/* Star */[0,not_slash]),lexbuf);
         
        case 9:
         return parse_pattern(eof_chars,concat_patterns(p,slash),lexbuf);
        case 10:
         return parse_pattern(eof_chars,concat_patterns(p,not_slash),lexbuf);
        case 11:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         if(List["mem"](c,eof_chars))
          {return /* tuple */[0,p,c];}
         else
          {throw [0,
                  Glob_ast["Parse_error"],
                  sf
                   ([/* Format */0,
                     [/* String_literal */11,
                      "Unexpected character ",
                      [/* Caml_char */1,
                       [/* String_literal */11,
                        " in glob pattern",
                        /* End_of_format */0]]],
                     "Unexpected character %C in glob pattern"],
                    c)];
           }
         
        }
      }
    };

var
 parse_string=
  function(b,lexbuf){return __ocaml_lex_parse_string_rec(b,lexbuf,43);};

var
 __ocaml_lex_parse_string_rec=
  function(b,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_string_rec(b,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return Buffer["contents"](b);
        case 1:Buffer["add_char"](b,34);return parse_string(b,lexbuf);
        case 2:
         var u=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]);
         
         Buffer["add_string"](b,u);
         return parse_string(b,lexbuf);
         
        case 3:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         throw [0,
                Glob_ast["Parse_error"],
                sf
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Unexpected character ",
                    [/* Caml_char */1,
                     [/* String_literal */11," in string",/* End_of_format */0]]],
                   "Unexpected character %C in string"],
                  c)];
         
        }
      }
    };

var
 parse_class=
  function(cl,lexbuf){return __ocaml_lex_parse_class_rec(cl,lexbuf,48);};

var
 __ocaml_lex_parse_class_rec=
  function(cl,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_class_rec(cl,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return cl;
        case 1:return /* :: */[0,[/* Atom */3,[/* tuple */0,45,45]],cl];
        case 2:
         var c1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         var c2=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+2);
         
         return parse_class
                 (/* :: */[0,/* Atom */[3,/* tuple */[0,c1,c2]],cl],lexbuf);
         
        case 3:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         return parse_class
                 (/* :: */[0,/* Atom */[3,/* tuple */[0,c,c]],cl],lexbuf);
         
        }
      }
    };

module["exports"]={"token":token};

