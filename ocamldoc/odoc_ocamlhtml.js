// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Format=require("./format.js");
var Buffer=require("./buffer.js");
var Lexing=require("./lexing.js");
var Str=require("./str.js");
var Printexc=require("./printexc.js");
var Hashtbl=require("./hashtbl.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Fatal_error=
  CamlPrimitive["caml_set_oo_id"]([248,"Odoc_ocamlhtml.Fatal_error",0]);

var
 fatal_error=
  function(msg)
   {Pervasives["prerr_string"](">> Fatal error: ");
    Pervasives["prerr_endline"](msg);
    throw Fatal_error};

var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Odoc_ocamlhtml.Error",0]);

var
 base_escape_strings=
  [/* :: */0,
   [/* tuple */0,"&","&amp;"],
   [/* :: */0,
    [/* tuple */0,"<","&lt;"],
    [/* :: */0,[/* tuple */0,">","&gt;"],/* [] */0]]];

var
 pre_escape_strings=
  [/* :: */0,
   [/* tuple */0," ","&nbsp;"],
   [/* :: */0,
    [/* tuple */0,"\n","<br>\n"],
    [/* :: */0,
     [/* tuple */0,"\t","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"],
     /* [] */0]]];

var pre=[0,/* false */0];

var fmt=[0,Format["str_formatter"]];

var
 $$escape=
  function(s)
   {return List["fold_left"]
            (function(acc,param)
              {return Str["global_replace"]
                       (Str["regexp"](param[1]),param[2],acc)},
             s,
             pre[1]
              ?Pervasives["@"](base_escape_strings,pre_escape_strings)
              :base_escape_strings)};

var
 escape_base=
  function(s)
   {return List["fold_left"]
            (function(acc,param)
              {return Str["global_replace"]
                       (Str["regexp"](param[1]),param[2],acc)},
             s,
             base_escape_strings)};

var
 print=
  function($staropt$star,s)
   {var esc=$staropt$star?$staropt$star[1]:/* true */1;
    
    return Format["pp_print_string"](fmt[1],esc?$$escape(s):s)};

var
 print_class=
  function($staropt$star,cl,s)
   {var esc=$staropt$star?$staropt$star[1]:/* true */1;
    
    return print
            ([/* Some */0,/* false */0],
             Pervasives["^"]
              ('<span class="',
               Pervasives["^"]
                (cl,
                 Pervasives["^"]
                  ('">',Pervasives["^"](esc?$$escape(s):s,"</span>")))))};

var
 create_hashtable=
  function(size,init)
   {var tbl=Hashtbl["create"](/* None */0,size);
    
    List["iter"]
     (function(param){return Hashtbl["add"](tbl,param[1],param[2])},init);
    return tbl};

var
 html_of_comment=
  [0,
   function(s){return "<b>Odoc_ocamlhtml.html_of_comment not initialized</b>"}];

var
 keyword_table=
  create_hashtable
   (149,
    [/* :: */0,
     [/* tuple */0,"and","keyword"],
     [/* :: */0,
      [/* tuple */0,"as","keyword"],
      [/* :: */0,
       [/* tuple */0,"assert","keyword"],
       [/* :: */0,
        [/* tuple */0,"begin","keyword"],
        [/* :: */0,
         [/* tuple */0,"class","keyword"],
         [/* :: */0,
          [/* tuple */0,"constraint","keyword"],
          [/* :: */0,
           [/* tuple */0,"do","keyword"],
           [/* :: */0,
            [/* tuple */0,"done","keyword"],
            [/* :: */0,
             [/* tuple */0,"downto","keyword"],
             [/* :: */0,
              [/* tuple */0,"else","keyword"],
              [/* :: */0,
               [/* tuple */0,"end","keyword"],
               [/* :: */0,
                [/* tuple */0,"exception","keyword"],
                [/* :: */0,
                 [/* tuple */0,"external","keyword"],
                 [/* :: */0,
                  [/* tuple */0,"false","keyword"],
                  [/* :: */0,
                   [/* tuple */0,"for","keyword"],
                   [/* :: */0,
                    [/* tuple */0,"fun","keyword"],
                    [/* :: */0,
                     [/* tuple */0,"function","keyword"],
                     [/* :: */0,
                      [/* tuple */0,"functor","keyword"],
                      [/* :: */0,
                       [/* tuple */0,"if","keyword"],
                       [/* :: */0,
                        [/* tuple */0,"in","keyword"],
                        [/* :: */0,
                         [/* tuple */0,"include","keyword"],
                         [/* :: */0,
                          [/* tuple */0,"inherit","keyword"],
                          [/* :: */0,
                           [/* tuple */0,"initializer","keyword"],
                           [/* :: */0,
                            [/* tuple */0,"lazy","keyword"],
                            [/* :: */0,
                             [/* tuple */0,"let","keyword"],
                             [/* :: */0,
                              [/* tuple */0,"match","keyword"],
                              [/* :: */0,
                               [/* tuple */0,"method","keyword"],
                               [/* :: */0,
                                [/* tuple */0,"module","keyword"],
                                [/* :: */0,
                                 [/* tuple */0,"mutable","keyword"],
                                 [/* :: */0,
                                  [/* tuple */0,"new","keyword"],
                                  [/* :: */0,
                                   [/* tuple */0,"object","keyword"],
                                   [/* :: */0,
                                    [/* tuple */0,"of","keyword"],
                                    [/* :: */0,
                                     [/* tuple */0,"open","keyword"],
                                     [/* :: */0,
                                      [/* tuple */0,"or","keyword"],
                                      [/* :: */0,
                                       [/* tuple */0,"parser","keyword"],
                                       [/* :: */0,
                                        [/* tuple */0,"private","keyword"],
                                        [/* :: */0,
                                         [/* tuple */0,"rec","keyword"],
                                         [/* :: */0,
                                          [/* tuple */0,"sig","keyword"],
                                          [/* :: */0,
                                           [/* tuple */0,"struct","keyword"],
                                           [/* :: */0,
                                            [/* tuple */0,"then","keyword"],
                                            [/* :: */0,
                                             [/* tuple */0,"to","keyword"],
                                             [/* :: */0,
                                              [/* tuple */0,"true","keyword"],
                                              [/* :: */0,
                                               [/* tuple */0,"try","keyword"],
                                               [/* :: */0,
                                                [/* tuple */0,"type","keyword"],
                                                [/* :: */0,
                                                 [/* tuple */0,"val","keyword"],
                                                 [/* :: */0,
                                                  [/* tuple */0,"virtual","keyword"],
                                                  [/* :: */0,
                                                   [/* tuple */0,"when","keyword"],
                                                   [/* :: */0,
                                                    [/* tuple */0,"while","keyword"],
                                                    [/* :: */0,
                                                     [/* tuple */0,"with","keyword"],
                                                     [/* :: */0,
                                                      [/* tuple */0,"mod","keyword"],
                                                      [/* :: */0,
                                                       [/* tuple */0,"land","keyword"],
                                                       [/* :: */0,
                                                        [/* tuple */0,"lor","keyword"],
                                                        [/* :: */0,
                                                         [/* tuple */0,"lxor","keyword"],
                                                         [/* :: */0,
                                                          [/* tuple */0,"lsl","keyword"],
                                                          [/* :: */0,
                                                           [/* tuple */0,"lsr","keyword"],
                                                           [/* :: */0,[/* tuple */0,"asr","keyword"],/* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]);

var kwsign_class="keywordsign";

var constructor_class="constructor";

var comment_class="comment";

var string_class="string";

var code_class="code";

var margin=[0,0];

var comment_buffer=Buffer["create"](32);

var
 reset_comment_buffer=
  function(param){return Buffer["reset"](comment_buffer)};

var store_comment_char=Buffer["add_char"](comment_buffer);

var add_comment_string=Buffer["add_string"](comment_buffer);

var
 make_margin=
  function(param)
   {var iter=function(n){return n<=0?"":Pervasives["^"]("&nbsp;",iter(n-1))};
    
    return iter(margin[1])};

var
 print_comment=
  function(param)
   {var s=Buffer["contents"](comment_buffer);
    
    var len=s["length"];
    
    var code;
    if(len<1)
     {code=
      Pervasives["^"]
       ('<span class="',
        Pervasives["^"]
         (comment_class,
          Pervasives["^"]('">(*',Pervasives["^"]($$escape(s),"*)</span>"))));
      }
    else
     {var match=s["charCodeAt"](0);
      
      if(match!==42)
       {code=
        Pervasives["^"]
         ('<span class="',
          Pervasives["^"]
           (comment_class,
            Pervasives["^"]('">(*',Pervasives["^"]($$escape(s),"*)</span>"))));
        }
      else
       {try
         {var html=html_of_comment[1]($$String["sub"](s,1,len-1));
          
          code=
          Pervasives["^"]
           ("</code><table><tr><td>",
            Pervasives["^"]
             (make_margin(/* () */0),
              Pervasives["^"]
               ("</td><td>",
                Pervasives["^"]
                 ('<span class="',
                  Pervasives["^"]
                   (comment_class,
                    Pervasives["^"]
                     ('">',
                      Pervasives["^"]
                       ("(**",
                        Pervasives["^"]
                         (html,
                          Pervasives["^"]
                           ("*)",
                            Pervasives["^"]
                             ('</span></td></tr></table><code class="',
                              Pervasives["^"](code_class,'">')))))))))));
          }
        catch(e)
         {Pervasives["prerr_endline"](Printexc["to_string"](e));
          code=
          Pervasives["^"]
           ('<span class="',
            Pervasives["^"]
             (comment_class,
              Pervasives["^"]('">(*',Pervasives["^"]($$escape(s),"*)</span>"))));
          }
        }
      }
    
    return print([/* Some */0,/* false */0],code)};

var string_buffer=Buffer["create"](32);

var
 reset_string_buffer=
  function(param){return Buffer["reset"](string_buffer)};

var store_string_char=Buffer["add_char"](string_buffer);

var
 get_stored_string=
  function(param){return Buffer["contents"](string_buffer)};

var
 char_for_backslash=
  function(c)
   {var exit;
    
    if(c>=110)
     {if(c>=117)
       {exit=44;}
      else
       {switch(-110+c)
         {case 0:return 10;
          case 1:exit=44;break;
          case 2:exit=44;break;
          case 3:exit=44;break;
          case 4:return 13;
          case 5:exit=44;break;
          case 6:return 9
          }
        }
      }
    else
     {if(c!==98){exit=44;}else{return 8}}
    
    switch(exit){case 44:return c}
    };

var
 char_for_decimal_code=
  function(lexbuf,i)
   {var
     c=
      100*
      (Lexing["lexeme_char"](lexbuf,i)-48)+
      10*
      (Lexing["lexeme_char"](lexbuf,i+1)-48)+
      (Lexing["lexeme_char"](lexbuf,i+2)-48);
    
    return Char["chr"](c&255)};

var
 char_for_hexa_code=
  function(lexbuf,i)
   {var
     c=
      16*
      (Lexing["lexeme_char"](lexbuf,i)-48)+
      (Lexing["lexeme_char"](lexbuf,i+1)-48);
    
    return Char["chr"](c&255)};

var string_start_pos=[0,0];

var comment_start_pos=[0,/* [] */0];

var in_comment=function(param){return comment_start_pos[1]!==/* [] */0};

var
 report_error=
  function(ppf,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Comment not terminated",
                    /* End_of_format */0],
                   "Comment not terminated"]);
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "String literal not terminated",
                    /* End_of_format */0],
                   "String literal not terminated"]);
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This comment contains an unterminated string literal",
                    /* End_of_format */0],
                   "This comment contains an unterminated string literal"])
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Illegal character (",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,41,/* End_of_format */0]]],
                   "Illegal character (%s)"],
                  Char["escaped"](param[1]));
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,
                    96,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      "' is a keyword, it cannot be used as label name",
                      /* End_of_format */0]]],
                   "`%s' is a keyword, it cannot be used as label name"],
                  param[1])
        }}
    };

var
 __ocaml_lex_tables=
  [/* record */0,
   "\0\0\xbe\xff\xbf\xff\xe0\0\x03\x01&\x01I\x01l\x01\xcc\xff\x8f\x01\xb4\x01 \0\xd4\xffC\0\xd9\x01\xfc\x01E\0G\0T\0\x1f\x02\xe5\xff\xe7\xff\xea\xffB\x02z\0e\x02\\\0{\0\xf5\xffY\0x\x02\xc1\x02\x91\x03p\x04\xcc\x04\x9c\x05\xff\xff{\x06\x99\x06\xfc\xffx\x07\x96\x07\xfa\xff\x11\x03\xe0\0c\0\x84\0\xdc\x03@\x05\x03\x01e\0\x1b\x03%\x03\x93\x04a\0\xf4\xff/\x03p\0\xf3\xff9\x03q\0\xf2\xffp\0\xf0\xffu\b\xef\xff\x14\x06\x13\x04\x01\0\xee\xff\x07\0\x98\b\xbb\b\xde\b\x01\t\xe1\xff\xdd\xff\xde\xff\xdf\xff\xdb\xff$\t\xd5\xff\xd6\xff\xd2\xff\xcf\xffG\t\xcb\xff\xcd\xffj\t\x8d\tu\0\xfc\xff\xfd\xffr\0r\0\xff\xff\xfe\xff\xe0\0\xf9\xff\xfa\xff\xa2\t\xff\xff\xeb\tC\x03\xfd\xff\x9c\0\x03\x01\xf3\x03\xfc\xff6\n\xfb\xff",
   "\xff\xff\xff\xff\xff\xff?\0<\0;\x006\x009\0\xff\xff1\0.\0,\0\xff\xff(\0'\0%\0#\0\x1f\0\x1d\x007\0\xff\xff\xff\xff\xff\xff\x13\0\x12\0\x19\0\x17\0\x16\0\xff\xff\b\0\b\0\x07\0\x06\0\x04\0\x02\0\x01\0\xff\xff:\0\xff\xff\xff\xff\x1b\0\xff\xff\xff\xff\xff\xff\t\0\xff\xff\xff\xff\xff\xff\b\0\b\0\b\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff>\0\xff\xff\xff\xff\xff\xff\x11\0\xff\xff\xff\xff\x14\0=\x008\0\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0\xff\xff\xff\xff\xff\xff\xff\xff/\0\xff\xff\xff\xff9\x005\0\xff\xff\xff\xff\xff\xff\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x06\0\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x01\0\xff\xff\xff\xff\xff\xff\xff\xff",
   "\x01\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff6\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\0\0F\0\xff\xff\xff\xff\0\0F\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\xff\xff\xff\xff[\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0b\0\0\0\0\0\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0$\0E\0$\0$\0\0\0\0\0\0\0E\0\0\0\0\0D\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0\x07\0\x1c\0\x18\0\x05\0\x03\0\x17\0\x1b\0\x1a\0\x15\0\x19\0\x06\0\x14\0\x13\0\x12\0\x03\0\x1e\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x11\0\x10\0\x0f\0\x0e\0\t\0!\0\x04\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\r\0S\0\f\0\x04\0#\0\x16\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\x0b\0\n\0\b\0\"\0Q\0O\0N\0K\0C\0M\0L\0>\0,\x007\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\x002\x002\x002\x002\0:\0=\0?\0C\0`\0_\0^\0+\0]\0\0\0\0\0\xff\xff\0\0\0\0j\0j\0\0\0\0\0\0\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\x001\x001\x001\x001\x001\x001\x001\x001\0j\0\0\0+\0R\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\x005\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0\x02\0\x03\0e\0\0\0\x03\0\x03\0\x03\0\xff\xff\0\0\0\0\x03\0\x03\0j\0\x03\0\x03\0\x03\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\x03\0\0\0\x03\0\x03\0\x03\0\x03\0\x03\0\0\0\0\0j\0\x04\0+\0\0\0\x04\0\x04\0\x04\0\0\0\0\0\0\0\x04\0\x04\0\0\0\x04\0\x04\0\x04\x001\x001\x001\x001\x001\x001\x001\x001\0\0\0d\0\x04\0\x03\0\x04\0\x04\0\x04\0\x04\0\x04\0\0\0+\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\0\0\x03\0\0\0\x05\0\x04\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0H\0\0\0\0\0H\0H\0H\0\0\0\0\0\0\0H\0H\0\\\0H\0H\0H\0\0\0\0\0\xff\xff\0\0\0\0\0\0\x04\0\0\0\x04\0\0\0H\0\x05\0H\0H\0H\0H\0H\0\0\0\0\0\0\0X\0\0\0\0\0X\0X\0X\0\0\0\0\0\0\0X\0X\0\0\0X\0X\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0X\0H\0X\0Y\0X\0X\0X\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0H\0\0\0H\0\0\0\x05\0X\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0c\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0X\0\0\0X\0\0\0W\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\x05\0V\0\x05\0\0\0\0\0\0\0T\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0P\0\x05\0\x05\0\0\0\0\0\0\0\0\0U\0\0\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0H\0\0\0\0\0H\0H\0H\0\0\0\0\0\0\0H\0H\0\0\0H\0I\0H\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0H\0\x05\0H\0H\0J\0H\0H\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0G\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0\x05\0H\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x03\0\0\0\0\0\x03\0\x03\0\x03\0\0\0\0\0A\0@\0\x03\0\0\0\x03\0\x03\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0H\0\0\0H\0\0\0\x03\0\x05\0\x03\0\x03\0\x03\0\x03\0\x03\0,\0\0\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0-\0\0\0\0\0+\0\x05\0\0\0\x05\0\0\0\0\0\x03\0\0\0\0\0\0\0.\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0-\0\0\0\0\0+\0\0\0\0\0\0\0\x03\0\0\0\x03\0\0\0\0\0\0\0.\0\x1f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\0\0\0\0\0\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\x004\0\0\x004\0\0\0\0\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\0;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0k\0k\0k\0k\0k\0k\0k\0k\0k\0k\0\0\0\0\0\0\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\0\0\0\0\0\0\0\0\0\0\0\0C\x000\x000\x000\x000\x000\x000\0l\0l\0l\0l\0l\0l\0l\0l\0l\0l\0\0\0\0\0\0\0\0\0\0\0\0\0C\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000\x000\x000\x000\x000\x000\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\0\0\0\0\0\0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0%\0\0\0\0\0%\0%\0%\0\0\0\0\0\0\0%\0%\0\0\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0\0\0%\0%\0%\0(\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x009\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x008\x008\x008\x008\x008\x008\x008\x008\x008\x008\0\0\0%\0)\0\0\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\0\0%\0%\0%\x009\0%\0%\0%\0\0\0\0\x009\0%\0%\0\0\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\x009\0\0\0\0\0\0\x009\0%\x009\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0&\0\0\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0%\0\0\0%\0\0\0\0\0\0\0\0\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\0\0)\0)\0)\0)\0)\0)\0)\0)\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000\x000\x000\x000\x000\x000\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x000\x000\x000\x000\x000\x000\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0 \0&\0&\0&\0&\0&\0&\0&\0&\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0E\0\0\0\0\0D\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\0\0 \0 \0 \0 \0 \0 \0 \0 \0%\0\0\0\0\0%\0%\0%\0\0\0\0\0\0\0%\0%\0\0\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0\0\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0&\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0'\0\0\0\0\0\0\0\0\0\0\0%\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0\0\0\0\0%\0&\0%\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0&\0&\0&\0&\0&\0&\0&\0&\0%\0\0\0\0\0%\0%\0%\0\0\0\0\0\0\0%\0%\0\0\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0\0\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0)\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0*\0\0\0\0\0\0\0\0\0\0\0%\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\0\0\0\0\0\0%\0)\0%\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\0\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\0\0)\0)\0)\0)\0)\0)\0)\0)\0@\0\0\0\0\0@\0@\0@\0\0\0\0\0\0\0@\0@\0\0\0@\0@\0@\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0@\0@\0@\0@\0@\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0@\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0H\0\0\0\0\0H\0H\0H\0\0\0\0\0\0\0H\0H\0\0\0H\0H\0H\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\0\0@\0\0\0H\0\x05\0H\0H\0H\0H\0H\0\0\0\0\0\0\0H\0\0\0\0\0H\0H\0H\0\0\0\0\0\0\0H\0H\0\0\0H\0H\0H\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0H\0H\0H\0H\0H\0H\0H\0\0\0\0\0\0\0H\0\0\0\0\0H\0H\0H\0\0\0\0\0\0\0H\0H\0\0\0H\0H\0H\0\0\0\0\0\0\0\0\0\0\0\0\0H\0\0\0H\0\0\0H\0H\0H\0H\0H\0H\0H\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0H\0\0\0H\0\0\0\x05\0H\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\0\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\x05\0\x05\0\0\0\x05\0\x05\0\x05\0\0\0\0\0\0\0\0\0\0\0\0\0H\0\0\0H\0\0\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\0\0\0\0\0\0X\0\0\0\0\0X\0X\0X\0\0\0\0\0\0\0X\0X\0\0\0X\0X\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\x05\0\0\0X\0\x05\0X\0X\0X\0X\0X\0\0\0j\0\0\0X\0i\0\0\0X\0X\0X\0\0\0\0\0\0\0X\0X\0\0\0X\0X\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0h\0\x05\0\0\0X\0X\0X\0X\0X\0X\0X\0\0\0\0\0\0\0\0\0g\0g\0g\0g\0g\0g\0g\0g\0g\0g\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0X\0\0\0X\0\0\0\0\0X\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0h\0\0\0\0\0\0\0\0\0\0\0h\0\0\0\0\0\0\0\0\0X\0\0\0X\0\0\0\0\0\0\0\0\0h\0\0\0\0\0\0\0h\0\0\0h\0\0\0\0\0\0\0f\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0\0\0\0\0\0\0\0\0\0\0\0\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0\0\0\0\0\0\0\0\0\0\0\0\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   '\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0D\0\0\0\0\0\xff\xff\xff\xff\xff\xffF\0\xff\xff\xff\xffF\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\r\0\x10\0\x11\0\x12\0\x18\0\x11\0\x11\0\x1a\0\x1d\x006\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0-\0-\x002\x002\x009\0<\0>\0\x18\0]\0^\0Z\0\x1d\0Z\0\xff\xff\xff\xff\x1b\0\xff\xff\xff\xffi\0i\0\xff\xff\xff\xff\xff\xff\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0\x18\0.\0.\0.\0.\0.\0.\0.\0.\0i\0\xff\xff\x1d\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0a\0\xff\xff\x03\0\x03\0\x03\0F\0\xff\xff\xff\xff\x03\0\x03\0j\0\x03\0\x03\0\x03\0,\0,\0,\0,\0,\0,\0,\0,\0,\0,\0\x03\0\xff\xff\x03\0\x03\0\x03\0\x03\0\x03\0\xff\xff\xff\xffj\0\x04\0,\0\xff\xff\x04\0\x04\0\x04\0\xff\xff\xff\xff\xff\xff\x04\0\x04\0\xff\xff\x04\0\x04\0\x04\x001\x001\x001\x001\x001\x001\x001\x001\0\xff\xffa\0\x04\0\x03\0\x04\0\x04\0\x04\0\x04\0\x04\0\xff\xff,\0\xff\xff\x05\0\xff\xff\xff\xff\x05\0\x05\0\x05\0\xff\xff\xff\xff\xff\xff\x05\0\x05\0\xff\xff\x05\0\x05\0\x05\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x03\0\xff\xff\x03\0\xff\xff\x05\0\x04\0\x05\0\x05\0\x05\0\x05\0\x05\0\xff\xff\xff\xff\xff\xff\x06\0\xff\xff\xff\xff\x06\0\x06\0\x06\0\xff\xff\xff\xff\xff\xff\x06\0\x06\0Z\0\x06\0\x06\0\x06\0\xff\xff\xff\xff\x1b\0\xff\xff\xff\xff\xff\xff\x04\0\xff\xff\x04\0\xff\xff\x06\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0\xff\xff\xff\xff\xff\xff\x07\0\xff\xff\xff\xff\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\x07\0\x07\0\xff\xff\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x05\0\xff\xff\x05\0\xff\xff\x07\0\x06\0\x07\0\x07\0\x07\0\x07\0\x07\0\xff\xff\xff\xff\xff\xff\t\0\xff\xff\xff\xff\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\t\0\t\0\xff\xff\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x06\0\xff\xff\x06\0\xff\xff\t\0\x07\0\t\0\t\0\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\n\0\xff\xff\xff\xff\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\n\0\n\0a\0\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\x07\0\xff\xff\x07\0\xff\xff\t\0\t\0\n\0\xff\xff\n\0\n\0\n\0\n\0\n\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\xff\xff\x0e\0\x0e\0\x0e\0\xff\xff\xff\xff\xff\xff\x0e\0\x0e\0\xff\xff\x0e\0\x0e\0\x0e\0\xff\xff\xff\xff\t\0\t\0\t\0\xff\xff\xff\xff\xff\xff\n\0\n\0\x0e\0\xff\xff\x0e\0\x0e\0\x0e\0\x0e\0\x0e\0\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\xff\xff\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\x0f\0\x0f\0\xff\xff\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\n\0\xff\xff\n\0\xff\xff\xff\xff\xff\xff\x0f\0\x0e\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\xff\xff\xff\xff\xff\xff\x13\0\xff\xff\xff\xff\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\x13\0\x13\0\xff\xff\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0e\0\xff\xff\x0e\0\xff\xff\x13\0\x0f\0\x13\0\x13\0\x13\0\x13\0\x13\0\xff\xff\xff\xff\xff\xff\x17\0\xff\xff\xff\xff\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\x17\0\x17\0\xff\xff\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x0f\0\xff\xff\x0f\0\xff\xff\x17\0\x13\0\x17\0\x17\0\x17\0\x17\0\x17\0\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\xff\xff\x19\0\x19\0\x19\0\xff\xff\xff\xff\x19\0\x19\0\x19\0\xff\xff\x19\0\x19\0\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x13\0\xff\xff\x13\0\xff\xff\x19\0\x17\0\x19\0\x19\0\x19\0\x19\0\x19\0\x1e\0\xff\xff\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\x1e\0\x17\0\xff\xff\x17\0\xff\xff\xff\xff\x19\0\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\x1e\0\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\x19\0\xff\xff\xff\xff\xff\xff\x1e\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0+\0\xff\xff+\0\xff\xff\xff\xff+\0+\0+\0+\0+\0+\0+\0+\0+\0+\x003\x003\x003\x003\x003\x003\x003\x003\x003\x003\x004\x004\x004\x004\x004\x004\x004\x004\x004\x004\x008\x008\x008\x008\x008\x008\x008\x008\x008\x008\0;\0;\0;\0;\0;\0;\0;\0;\0;\0;\0g\0g\0g\0g\0g\0g\0g\0g\0g\0g\0\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\xff\xff\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff\xff\xff\xff\xff\xff\xff \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0/\0/\0/\0/\0/\0/\0/\0/\0/\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffC\0/\0/\0/\0/\0/\0/\0k\0k\0k\0k\0k\0k\0k\0k\0k\0k\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffC\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0/\0/\0/\0/\0/\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0\xff\xff\xff\xff\xff\xff\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0 \0\xff\xff \0 \0 \0 \0 \0 \0 \0 \0!\0\xff\xff\xff\xff!\0!\0!\0\xff\xff\xff\xff\xff\xff!\0!\0\xff\xff!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff!\0!\0!\0!\0!\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff5\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff5\x005\x005\x005\x005\x005\x005\x005\x005\x005\0\xff\xff!\0!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff!\0"\0!\x005\0"\0"\0"\0\xff\xff\xff\xff5\0"\0"\0\xff\xff"\0"\0"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff5\0\xff\xff\xff\xff\xff\xff5\0"\x005\0"\0"\0"\0"\0"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff"\0"\0\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\xff\xff"\0\xff\xff"\0\xff\xff\xff\xff\xff\xff\xff\xff!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0!\0\xff\xff!\0!\0!\0!\0!\0!\0!\0!\x000\x000\x000\x000\x000\x000\x000\x000\x000\x000\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff0\x000\x000\x000\x000\x000\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff0\x000\x000\x000\x000\x000\0\xff\xff\xff\xff\xff\xff\xff\xff"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0#\0"\0"\0"\0"\0"\0"\0"\0"\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffB\0\xff\xff\xff\xffB\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffB\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0#\0\xff\xff#\0#\0#\0#\0#\0#\0#\0#\0%\0\xff\xff\xff\xff%\0%\0%\0\xff\xff\xff\xff\xff\xff%\0%\0\xff\xff%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0\xff\xff%\0%\0%\0%\0%\0\xff\xff\xff\xff\xff\xff\xff\xff&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff\xff\xff\xff\xff%\0&\0%\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0B\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\xff\xff&\0&\0&\0&\0&\0&\0&\0&\0(\0\xff\xff\xff\xff(\0(\0(\0\xff\xff\xff\xff\xff\xff(\0(\0\xff\xff(\0(\0(\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff(\0\xff\xff(\0(\0(\0(\0(\0\xff\xff\xff\xff\xff\xff\xff\xff)\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff(\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\xff\xff\xff\xff\xff\xff(\0)\0(\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\xff\xff)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0\xff\xff)\0)\0)\0)\0)\0)\0)\0)\0@\0\xff\xff\xff\xff@\0@\0@\0\xff\xff\xff\xff\xff\xff@\0@\0\xff\xff@\0@\0@\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff@\0\xff\xff@\0@\0@\0@\0@\0\xff\xff\xff\xff\xff\xffG\0\xff\xff\xff\xffG\0G\0G\0\xff\xff\xff\xff\xff\xffG\0G\0\xff\xffG\0G\0G\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffG\0@\0G\0G\0G\0G\0G\0\xff\xff\xff\xff\xff\xffH\0\xff\xff\xff\xffH\0H\0H\0\xff\xff\xff\xff\xff\xffH\0H\0\xff\xffH\0H\0H\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff@\0\xff\xff@\0\xff\xffH\0G\0H\0H\0H\0H\0H\0\xff\xff\xff\xff\xff\xffI\0\xff\xff\xff\xffI\0I\0I\0\xff\xff\xff\xff\xff\xffI\0I\0\xff\xffI\0I\0I\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffG\0\xff\xffG\0\xff\xffI\0H\0I\0I\0I\0I\0I\0\xff\xff\xff\xff\xff\xffJ\0\xff\xff\xff\xffJ\0J\0J\0\xff\xff\xff\xff\xff\xffJ\0J\0\xff\xffJ\0J\0J\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffH\0\xff\xffH\0\xff\xffJ\0I\0J\0J\0J\0J\0J\0\xff\xff\xff\xff\xff\xffP\0\xff\xff\xff\xffP\0P\0P\0\xff\xff\xff\xff\xff\xffP\0P\0\xff\xffP\0P\0P\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffI\0\xff\xffI\0\xff\xffP\0J\0P\0P\0P\0P\0P\0\xff\xff\xff\xff\xff\xffU\0\xff\xff\xff\xffU\0U\0U\0\xff\xff\xff\xff\xff\xffU\0U\0\xff\xffU\0U\0U\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffJ\0\xff\xffJ\0\xff\xffU\0P\0U\0U\0U\0U\0U\0\xff\xff\xff\xff\xff\xffX\0\xff\xff\xff\xffX\0X\0X\0\xff\xff\xff\xff\xff\xffX\0X\0\xff\xffX\0X\0X\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffP\0\xff\xffP\0\xff\xffX\0U\0X\0X\0X\0X\0X\0\xff\xffd\0\xff\xffY\0d\0\xff\xffY\0Y\0Y\0\xff\xff\xff\xff\xff\xffY\0Y\0\xff\xffY\0Y\0Y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffU\0d\0U\0\xff\xffY\0X\0Y\0Y\0Y\0Y\0Y\0\xff\xff\xff\xff\xff\xff\xff\xffd\0d\0d\0d\0d\0d\0d\0d\0d\0d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffX\0\xff\xffX\0\xff\xff\xff\xffY\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffd\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffd\0\xff\xff\xff\xff\xff\xff\xff\xffY\0\xff\xffY\0\xff\xff\xff\xff\xff\xff\xff\xffd\0\xff\xff\xff\xff\xff\xffd\0\xff\xffd\0\xff\xff\xff\xff\xff\xffd\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfff\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xfff\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0f\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0m\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff',
   "",
   "",
   "",
   "",
   "",
   ""];

var token=function(lexbuf){return __ocaml_lex_token_rec(lexbuf,0)};

var
 __ocaml_lex_token_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(65<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_token_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var s=Lexing["lexeme"](lexbuf);
         
         var exit$1;
         
         switch(s)
          {case "\t":margin[1]=margin[1]+8;break;
           case "\n":margin[1]=0;break;
           case " ":margin[0]++;break;
           default:exit$1=15;}
         
         switch(exit$1){case 15:break}
         
         print(/* None */0,s);
         return token(lexbuf);
        case 1:print(/* None */0,"_");return token(lexbuf);
        case 2:print(/* None */0,"~");return token(lexbuf);
        case 3:
         var s$1=Lexing["lexeme"](lexbuf);
         
         var name=$$String["sub"](s$1,1,s$1["length"]-2);
         
         if(Hashtbl["mem"](keyword_table,name))
          {throw [0,
                  $$Error,
                  /* Keyword_as_label */[1,name],
                  Lexing["lexeme_start"](lexbuf),
                  Lexing["lexeme_end"](lexbuf)]}
         
         print(/* None */0,s$1);
         return token(lexbuf);
        case 4:print(/* None */0,"?");return token(lexbuf);
        case 5:
         var s$2=Lexing["lexeme"](lexbuf);
         
         var name$1=$$String["sub"](s$2,1,s$2["length"]-2);
         
         if(Hashtbl["mem"](keyword_table,name$1))
          {throw [0,
                  $$Error,
                  /* Keyword_as_label */[1,name$1],
                  Lexing["lexeme_start"](lexbuf),
                  Lexing["lexeme_end"](lexbuf)]}
         
         print(/* None */0,s$2);
         return token(lexbuf);
        case 6:
         var s$3=Lexing["lexeme"](lexbuf);
         
         try
          {var cl=Hashtbl["find"](keyword_table,s$3);
           
           print_class(/* None */0,cl,s$3);
           return token(lexbuf)}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {print(/* None */0,s$3);return token(lexbuf)}
           else
            {throw exn}
           }
         break;
        case 7:
         print_class(/* None */0,constructor_class,Lexing["lexeme"](lexbuf));
         return token(lexbuf);
        case 8:exit=26;break;
        case 9:exit=26;break;
        case 10:
         reset_string_buffer(/* () */0);
         var string_start=Lexing["lexeme_start"](lexbuf);
         
         string_start_pos[1]=string_start;
         string(lexbuf);
         lexbuf[5]=string_start-lexbuf[4];
         print_class
          (/* None */0,
           string_class,
           Pervasives["^"]
            ('"',Pervasives["^"](get_stored_string(/* () */0),'"')));
         return token(lexbuf);
        case 11:exit=27;break;
        case 12:exit=27;break;
        case 13:exit=27;break;
        case 14:exit=28;break;
        case 15:exit=28;break;
        case 16:
         lexbuf[6]=lexbuf[6]-1;
         var init=lexbuf[12];
         
         lexbuf[12]=/* record */[0,init[1],init[2],init[3],lexbuf[12][4]-1];
         print(/* None */0,Lexing["lexeme"](lexbuf));
         return token(lexbuf);
        case 17:exit=26;break;
        case 18:exit=29;break;
        case 19:exit=29;break;
        case 20:exit=29;break;
        case 21:exit=29;break;
        case 22:exit=29;break;
        case 23:exit=26;break;
        case 24:exit=26;break;
        case 25:exit=26;break;
        case 26:exit=26;break;
        case 27:exit=29;break;
        case 28:exit=29;break;
        case 29:exit=26;break;
        case 30:exit=26;break;
        case 31:exit=26;break;
        case 32:exit=26;break;
        case 33:exit=26;break;
        case 34:exit=26;break;
        case 35:exit=26;break;
        case 36:exit=26;break;
        case 37:exit=26;break;
        case 38:exit=26;break;
        case 39:exit=26;break;
        case 40:exit=26;break;
        case 41:exit=26;break;
        case 42:exit=26;break;
        case 43:exit=26;break;
        case 44:exit=26;break;
        case 45:exit=26;break;
        case 46:exit=29;break;
        case 47:exit=29;break;
        case 48:exit=26;break;
        case 49:exit=26;break;
        case 50:exit=26;break;
        case 51:exit=26;break;
        case 52:exit=26;break;
        case 53:exit=26;break;
        case 54:exit=26;break;
        case 55:exit=26;break;
        case 56:exit=26;break;
        case 57:exit=26;break;
        case 58:exit=29;break;
        case 59:exit=26;break;
        case 60:exit=26;break;
        case 61:exit=26;break;
        case 62:exit=26;break;
        case 63:exit=26;break;
        case 64:return /* () */0;
        case 65:
         throw [0,
                $$Error,
                /* Illegal_character */[0,
                 Lexing["lexeme"](lexbuf)["charCodeAt"](0)],
                Lexing["lexeme_start"](lexbuf),
                Lexing["lexeme_end"](lexbuf)]
        }
      }
    
    switch(exit)
     {case 26:
       print(/* None */0,Lexing["lexeme"](lexbuf));return token(lexbuf);
      case 27:
       print_class(/* None */0,string_class,Lexing["lexeme"](lexbuf));
       return token(lexbuf);
      case 28:
       reset_comment_buffer(/* () */0);
       comment_start_pos[1]=
       /* :: */[0,Lexing["lexeme_start"](lexbuf),/* [] */0];
       comment(lexbuf);
       print_comment(/* () */0);
       return token(lexbuf);
      case 29:
       print_class(/* None */0,kwsign_class,Lexing["lexeme"](lexbuf));
       return token(lexbuf)
      }
    };

var comment=function(lexbuf){return __ocaml_lex_comment_rec(lexbuf,90)};

var
 __ocaml_lex_comment_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comment_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         comment_start_pos[1]=
         /* :: */[0,Lexing["lexeme_start"](lexbuf),comment_start_pos[1]];
         store_comment_char(40);
         store_comment_char(42);
         return comment(lexbuf);
        case 1:
         var match=comment_start_pos[1];
         
         if(match)
          {var l=match[2];
           
           return l
                   ?(store_comment_char(42),
                     store_comment_char(41),
                     comment_start_pos[1]=
                     l,
                     comment(lexbuf))
                   :(comment_start_pos[1]=/* [] */0,0)}
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"odoc_ocamlhtml.mll",424,16]]}
         break;
        case 2:
         var st=List["hd"](comment_start_pos[1]);
         
         throw [0,$$Error,/* Unterminated_comment */0,st,st+2];
        case 3:
         store_comment_char(Lexing["lexeme_char"](lexbuf,0));
         return comment(lexbuf)
        }
      }
    };

var string=function(lexbuf){return __ocaml_lex_string_rec(lexbuf,97)};

var
 __ocaml_lex_string_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(6<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_string_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return /* () */0;
        case 1:return string(lexbuf);
        case 2:exit=34;break;
        case 3:exit=34;break;
        case 4:exit=34;break;
        case 5:
         throw [0,
                $$Error,
                /* Unterminated_string */1,
                string_start_pos[1],
                string_start_pos[1]+1];
        case 6:
         store_string_char(Lexing["lexeme_char"](lexbuf,0));
         return string(lexbuf)
        }
      }
    
    switch(exit)
     {case 34:
       Buffer["add_string"](string_buffer,Lexing["lexeme"](lexbuf));
       return string(lexbuf)
      }
    };

var
 html_of_code=
  function(b,$staropt$star,code)
   {var with_pre=$staropt$star?$staropt$star[1]:/* true */1;
    
    var old_pre=pre[1];
    
    var old_margin=margin[1];
    
    var old_comment_buffer=Buffer["contents"](comment_buffer);
    
    var old_string_buffer=Buffer["contents"](string_buffer);
    
    var buf=Buffer["create"](256);
    
    var old_fmt=fmt[1];
    
    fmt[1]=Format["formatter_of_buffer"](buf);
    pre[1]=with_pre;
    margin[1]=0;
    var
     start=
      Pervasives["^"]('<code class="',Pervasives["^"](code_class,'">'));
    
    var ending="</code>";
    
    var html;
    try
     {print([/* Some */0,/* false */0],start);
      var lexbuf=Lexing["from_string"](code);
      
      var match=token(lexbuf);
      
      print([/* Some */0,/* false */0],ending);
      Format["pp_print_flush"](fmt[1],/* () */0);
      html=Buffer["contents"](buf);
      }
    catch(exn)
     {Format["pp_print_flush"](fmt[1],/* () */0);
      html=Pervasives["^"](start,Pervasives["^"](code,ending));
      }
    
    pre[1]=old_pre;
    margin[1]=old_margin;
    Buffer["reset"](comment_buffer);
    Buffer["add_string"](comment_buffer,old_comment_buffer);
    Buffer["reset"](string_buffer);
    Buffer["add_string"](string_buffer,old_string_buffer);
    fmt[1]=old_fmt;
    return Buffer["add_string"](b,html)};

module["exports"]=
{"Fatal_error":Fatal_error,
 "fatal_error":fatal_error,
 "Error":$$Error,
 "base_escape_strings":base_escape_strings,
 "pre_escape_strings":pre_escape_strings,
 "pre":pre,
 "fmt":fmt,
 "escape":$$escape,
 "escape_base":escape_base,
 "print":print,
 "print_class":print_class,
 "create_hashtable":create_hashtable,
 "html_of_comment":html_of_comment,
 "keyword_table":keyword_table,
 "kwsign_class":kwsign_class,
 "constructor_class":constructor_class,
 "comment_class":comment_class,
 "string_class":string_class,
 "code_class":code_class,
 "margin":margin,
 "comment_buffer":comment_buffer,
 "reset_comment_buffer":reset_comment_buffer,
 "store_comment_char":store_comment_char,
 "add_comment_string":add_comment_string,
 "make_margin":make_margin,
 "print_comment":print_comment,
 "string_buffer":string_buffer,
 "reset_string_buffer":reset_string_buffer,
 "store_string_char":store_string_char,
 "get_stored_string":get_stored_string,
 "char_for_backslash":char_for_backslash,
 "char_for_decimal_code":char_for_decimal_code,
 "char_for_hexa_code":char_for_hexa_code,
 "string_start_pos":string_start_pos,
 "comment_start_pos":comment_start_pos,
 "in_comment":in_comment,
 "report_error":report_error,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "token":token,
 "__ocaml_lex_token_rec":__ocaml_lex_token_rec,
 "comment":comment,
 "__ocaml_lex_comment_rec":__ocaml_lex_comment_rec,
 "string":string,
 "__ocaml_lex_string_rec":__ocaml_lex_string_rec,
 "html_of_code":html_of_code};

