// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Odoc_global=require("./odoc_global.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Buffer=require("./buffer.js");
var Lexing=require("./lexing.js");
var Odoc_comments_global=require("./odoc_comments_global.js");
var Str=require("./str.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Odoc_messages=require("./odoc_messages.js");


var line_number=[0,0];

var string_buffer=Buffer["create"](32);

var
 reset_string_buffer=
  function(param){return Buffer["reset"](string_buffer)};

var ajout_char_string=Buffer["add_char"](string_buffer);

var ajout_string=Buffer["add_string"](string_buffer);

var lecture_string=function(param){return Buffer["contents"](string_buffer)};

var description=[0,""];

var blank="[ \r\t\f]";

var comments_level=[0,0];

var
 remove_blanks=
  function(s)
   {var l=Str["split_delim"](Str["regexp"]("\n"),s);
    
    var
     iter=
      function(liste)
       {if(liste)
         {var q=liste[2];
          
          var
           h2=
            Str["global_replace"]
             (Str["regexp"](Pervasives["^"]("^",Pervasives["^"](blank,"+"))),
              "",
              liste[1]);
          
          return CamlPrimitive["caml_string_equal"](h2,"")
                  ?iter(q)
                  :/* :: */[0,h2,q]}
        else
         {return /* [] */0}
        };
    
    var l2=iter(l);
    
    var
     iter$1=
      function(liste)
       {if(liste)
         {var q=liste[2];
          
          var
           h2=
            Str["global_replace"]
             (Str["regexp"](Pervasives["^"](blank,"+$")),"",liste[1]);
          
          return CamlPrimitive["caml_string_equal"](h2,"")
                  ?iter$1(q)
                  :/* :: */[0,h2,q]}
        else
         {return /* [] */0}
        };
    
    var l3=List["rev"](iter$1(List["rev"](l2)));
    
    return $$String["concat"]("\n",l3)};

var
 remove_stars=
  function(s)
   {return Str["global_replace"]
            (Str["regexp"](Pervasives["^"]("^",Pervasives["^"](blank,"*\\*"))),
             "",
             s)};

var
 __ocaml_lex_tables=
  [/* record */0,
   "\0\0\xf6\xff\0\0\xf9\xff\x01\0\xfe\xff\x02\0\x02\0\x04\0\x06\0\xfd\xff\xfc\xff\b\0\xf8\xff\x0b\0\xfb\xff\t\0\0\0\n\0\r\0\xff\xff\xfe\xff\xfd\xff-\0$\0\xfd\xff\r\0\x0f\0\xff\xff\xfe\xff$\x01\xfa\xff\t\0\n\0m\0m\0e\x01a\x012\0\xf7\xff\x10\0\xf9\xff\x10\0\xfe\xff\x07\0\x13\0\x18\0\xfc\xff\x1a\0\xf8\xff",
   "\xff\xff\xff\xff\t\0\xff\xff\t\0\xff\xff\0\0\b\0\x05\0\x04\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x04\0\x04\0\x04\0\x04\0\xff\xff\xff\xff\xff\xff\x03\0\xff\xff\xff\xff\x02\0\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\x04\0\x04\0\x02\0\x01\0\0\0\x03\0\xff\xff\xff\xff\b\0\xff\xff\b\0\xff\xff\0\0\x05\0\x04\0\xff\xff\x02\0\xff\xff",
   "\x01\0\0\0\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\x0f\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\x19\0\0\0\xff\xff\xff\xff\0\0\0\0 \0\0\0 \0 \0\xff\xff \0 \0\xff\xff'\0\0\0\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0",
   '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0,\0\0\0\0\0,\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0\0\0\0\0\0\0\0\0,\0\x04\0\r\0\x02\0\x07\0\b\0\n\0\t\0\x0b\0\f\0\x0b\0\f\0\x12\0\x15\0\x13\0\x14\0\x1d\0\x1c\x001\0-\0,\0+\0.\0,\0,\0\x16\0/\x000\0/\x000\0\0\0\0\0\0\0\0\0\xff\xff\0\0\x10\0\x1a\0\0\0\x1b\0\0\0\0\0\0\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0(\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0!\0\x11\0\x17\0\0\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x17\0\0\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\0\0\0\0%\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x03\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\xff\xff\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0$\0#\0\0\0$\0$\0)\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0"\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff$\0\0\0\0\0$\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0!\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0\xff\xff',
   '\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0,\0\xff\xff\xff\xff,\0,\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x06\0\xff\xff\xff\xff\xff\xff\xff\xff,\0\0\0\x02\0\0\0\x04\0\x07\0\b\0\b\0\t\0\t\0\f\0\f\0\x0e\0\x12\0\x0e\0\x13\0\x1a\0\x1b\0(\0*\0&\0&\0-\0&\0&\0\x11\0.\0.\x000\x000\0\xff\xff\xff\xff\xff\xff\xff\xff \0\xff\xff\x0e\0\x18\0\xff\xff\x18\0\xff\xff\xff\xff\xff\xff&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0\xff\xff&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0!\0\x0e\0\x10\0\xff\xff\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x17\0\xff\xff\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff"\0\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0 \0!\0\x0e\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x18\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x1e\0\x1e\0\xff\xff\x1e\0\x1e\0&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\x1e\0"\0"\0"\0"\0"\0"\0"\0"\0#\0$\0\xff\xff\xff\xff$\0$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0$\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff%\0%\0%\0%\0%\0%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff$\0',
   "",
   "",
   "",
   "",
   "",
   ""];

var main=function(lexbuf){return __ocaml_lex_main_rec(lexbuf,0)};

var
 __ocaml_lex_main_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(9<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:exit=2;break;
        case 1:
         line_number[0]++;
         Odoc_comments_global["nb_chars"][0]++;
         return main(lexbuf);
        case 2:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         return [/* Description */0,[/* tuple */0,"",/* None */0]];
        case 3:exit=2;break;
        case 4:exit=3;break;
        case 5:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         comments_level[0]++;
         return comments_level[1]===1
                 ?(reset_string_buffer(/* () */0),
                   description[1]=
                   "",
                   special_comment(lexbuf))
                 :main(lexbuf);
        case 6:return /* EOF */9;
        case 7:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         comments_level[0]--;
         return main(lexbuf);
        case 8:exit=3;break;
        case 9:Odoc_comments_global["nb_chars"][0]++;return main(lexbuf)
        }
      }
    
    switch(exit)
     {case 2:
       Odoc_comments_global["nb_chars"][1]=
       Odoc_comments_global["nb_chars"][1]+
       Lexing["lexeme"](lexbuf)["length"];
       return main(lexbuf);
      case 3:
       Odoc_comments_global["nb_chars"][1]=
       Odoc_comments_global["nb_chars"][1]+
       Lexing["lexeme"](lexbuf)["length"];
       comments_level[0]++;
       return main(lexbuf)
      }
    };

var
 special_comment=
  function(lexbuf){return __ocaml_lex_special_comment_rec(lexbuf,14)};

var
 __ocaml_lex_special_comment_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(4<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_special_comment_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var s=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s["length"];
         if(comments_level[1]===1)
          {var s2=lecture_string(/* () */0);
           
           var s3=remove_blanks(s2);
           
           var s4=Odoc_global["remove_stars"][1]?remove_stars(s3):s3;
           
           return /* Description */[0,/* tuple */[0,s4,/* None */0]]}
         else
          {ajout_string(s);comments_level[0]--;return special_comment(lexbuf)}
         break;
        case 1:
         var s$1=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$1["length"];
         comments_level[0]++;
         ajout_string(s$1);
         return special_comment(lexbuf);
        case 2:
         var s$2=Lexing["lexeme"](lexbuf);
         
         var c=Lexing["lexeme_char"](lexbuf,1);
         
         ajout_char_string(c);
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$2["length"];
         return special_comment(lexbuf);
        case 3:
         var s$3=lecture_string(/* () */0);
         
         description[1]=remove_blanks(s$3);
         reset_string_buffer(/* () */0);
         var len=Lexing["lexeme"](lexbuf)["length"];
         
         lexbuf[6]=lexbuf[6]-len;
         var init=lexbuf[12];
         
         lexbuf[12]=/* record */[0,init[1],init[2],init[3],lexbuf[12][4]-len];
         return special_comment_part2(lexbuf);
        case 4:
         var c$1=Lexing["lexeme_char"](lexbuf,0);
         
         ajout_char_string(c$1);
         if(c$1===10){line_number[0]++}
         
         Odoc_comments_global["nb_chars"][0]++;
         return special_comment(lexbuf)
        }
      }
    };

var
 special_comment_part2=
  function(lexbuf){return __ocaml_lex_special_comment_part2_rec(lexbuf,24)};

var
 __ocaml_lex_special_comment_part2_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_special_comment_part2_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var s=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s["length"];
         if(comments_level[1]===1)
          {var
            desc=
             Odoc_global["remove_stars"][1]
              ?remove_stars(description[1])
              :description[1];
           
           var remain=lecture_string(/* () */0);
           
           var
            remain2=
             Odoc_global["remove_stars"][1]?remove_stars(remain):remain;
           
           return /* Description */[0,
                   /* tuple */[0,desc,/* Some */[0,remain2]]]}
         else
          {ajout_string(s);
           comments_level[0]--;
           return special_comment_part2(lexbuf)}
         break;
        case 1:
         var s$1=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$1["length"];
         ajout_string(s$1);
         comments_level[0]++;
         return special_comment_part2(lexbuf);
        case 2:
         var c=Lexing["lexeme_char"](lexbuf,0);
         
         ajout_char_string(c);
         if(c===10){line_number[0]++}
         
         Odoc_comments_global["nb_chars"][0]++;
         return special_comment_part2(lexbuf)
        }
      }
    };

var elements=function(lexbuf){return __ocaml_lex_elements_rec(lexbuf,30)};

var
 __ocaml_lex_elements_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(6<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_elements_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         return elements(lexbuf);
        case 1:
         line_number[0]++;
         Odoc_comments_global["nb_chars"][0]++;
         return elements(lexbuf);
        case 2:
         throw [0,
                CamlPrimitive["caml_global_data"]["Failure"],
                Odoc_messages["should_escape_at_sign"]];
        case 3:
         var s=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s["length"];
         var s2=$$String["sub"](s,1,s["length"]-1);
         
         var exit;
         
         switch(s2)
          {case "author":return /* T_AUTHOR */1;
           case "before":return /* T_BEFORE */5;
           case "deprecated":return /* T_DEPRECATED */6;
           case "param":return /* T_PARAM */0;
           case "raise":return /* T_RAISES */7;
           case "return":return /* T_RETURN */8;
           case "see":return /* T_SEE */3;
           case "since":return /* T_SINCE */4;
           case "version":return /* T_VERSION */2;
           default:exit=22;}
         
         switch(exit)
          {case 22:
            if(Odoc_global["no_custom_tags"][1])
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Failure"],
                     Odoc_messages["not_a_valid_tag"](s2)]}
            else
             {return /* T_CUSTOM */[4,s2]}
            break
           }
         break;
        case 4:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         var s$1=Lexing["lexeme"](lexbuf);
         
         var s$2=Str["global_replace"](Str["regexp_string"]("\\@"),"@",s$1);
         
         var s$3=remove_blanks(s$2);
         
         return /* Desc */[5,s$3];
        case 5:return /* EOF */9;
        case 6:
         var s$4=Lexing["lexeme"](lexbuf);
         
         return Pervasives["failwith"]
                 (Pervasives["^"]
                   ("Unexpected character '",Pervasives["^"](s$4,"'")))
        }
      }
    };

var simple=function(lexbuf){return __ocaml_lex_simple_rec(lexbuf,38)};

var
 __ocaml_lex_simple_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(8<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_simple_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         return simple(lexbuf);
        case 1:
         line_number[0]++;
         Odoc_comments_global["nb_chars"][0]++;
         return simple(lexbuf);
        case 2:
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         Lexing["lexeme"](lexbuf)["length"];
         comments_level[0]++;
         return simple(lexbuf);
        case 3:
         var s=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s["length"];
         return simple(lexbuf);
        case 4:
         var s$1=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$1["length"];
         comments_level[0]++;
         return simple(lexbuf);
        case 5:
         var s$2=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$2["length"];
         comments_level[0]++;
         return comments_level[1]===1
                 ?(reset_string_buffer(/* () */0),
                   description[1]=
                   "",
                   special_comment(lexbuf))
                 :(ajout_string(s$2),simple(lexbuf));
        case 6:return /* EOF */9;
        case 7:
         var s$3=Lexing["lexeme"](lexbuf);
         
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$3["length"];
         comments_level[0]--;
         return simple(lexbuf);
        case 8:Odoc_comments_global["nb_chars"][0]++;return simple(lexbuf)
        }
      }
    };

module["exports"]=
{"line_number":line_number,
 "string_buffer":string_buffer,
 "reset_string_buffer":reset_string_buffer,
 "ajout_char_string":ajout_char_string,
 "ajout_string":ajout_string,
 "lecture_string":lecture_string,
 "description":description,
 "blank":blank,
 "comments_level":comments_level,
 "remove_blanks":remove_blanks,
 "remove_stars":remove_stars,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "main":main,
 "__ocaml_lex_main_rec":__ocaml_lex_main_rec,
 "special_comment":special_comment,
 "__ocaml_lex_special_comment_rec":__ocaml_lex_special_comment_rec,
 "special_comment_part2":special_comment_part2,
 "__ocaml_lex_special_comment_part2_rec":__ocaml_lex_special_comment_part2_rec,
 "elements":elements,
 "__ocaml_lex_elements_rec":__ocaml_lex_elements_rec,
 "simple":simple,
 "__ocaml_lex_simple_rec":__ocaml_lex_simple_rec};

