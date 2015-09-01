// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_text_lexer=require("./odoc_text_lexer.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Odoc_text_parser=require("./odoc_text_parser.js");
var Printf=require("./printf.js");
var Buffer=require("./buffer.js");
var Lexing=require("./lexing.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Text_syntax=
  CamlPrimitive["caml_set_oo_id"]([248,"Odoc_text.Text_syntax",0]);

var
 text_of_string=
  function(s)
   {var lexbuf=Lexing["from_string"](s);
    
    try
     {Odoc_text_lexer["init"](/* () */0);
      return Odoc_text_parser["main"](Odoc_text_lexer["main"],lexbuf)}
    catch(exn)
     {throw [0,
             Text_syntax,
             Odoc_text_lexer["line_number"][1],
             Odoc_text_lexer["char_number"][1],
             s]}
    };

var
 count=
  function(s,c)
   {var count$1=0;
    
    for(var i=0;i<=s["length"]-1;i++)
     {if(s["charCodeAt"](i)===c){count$1=1+count$1;}}
    
    return count$1};

var
 escape_n=
  function(s,c,n)
   {var remain=n;
    
    var len=s["length"];
    
    var b=Buffer["create"](len+n);
    
    for(var i=0;i<=len-1;i++)
     {if(s["charCodeAt"](i)===c&&remain>0)
       {Printf["bprintf"]
         (b,
          [/* Format */0,
           [/* Char_literal */12,92,[/* Char */0,/* End_of_format */0]],
           "\\%c"],
          c);
        remain=-1+remain;
        }
      else
       {Buffer["add_char"](b,s["charCodeAt"](i))}
      }
    
    return Buffer["contents"](b)};

var
 escape_code=
  function(s)
   {var open_brackets=count(s,91);
    
    var close_brackets=count(s,93);
    
    return open_brackets>close_brackets
            ?escape_n(s,91,open_brackets-close_brackets)
            :close_brackets>open_brackets
              ?escape_n(s,93,close_brackets-open_brackets)
              :s};

var
 escape_raw=
  function(s)
   {var len=s["length"];
    
    var b=Buffer["create"](len);
    
    for(var i=0;i<=len-1;i++)
     {var c=s["charCodeAt"](i);
      
      var exit;
      
      if(c>=94)
       {if(c!==123){if(c!==125){exit=6;}else{exit=5;}}else{exit=5;}}
      else
       {if(c!==91){if(c>=93){exit=5;}else{exit=6;}}else{exit=5;}}
      
      switch(exit)
       {case 6:Buffer["add_char"](b,c);break;
        case 5:
         Printf["bprintf"]
          (b,
           [/* Format */0,
            [/* Char_literal */12,92,[/* Char */0,/* End_of_format */0]],
            "\\%c"],
           s["charCodeAt"](i));
         break
        }
      }
    
    return Buffer["contents"](b)};

var p=Printf["bprintf"];

var
 p_text=
  function(b,t)
   {return List["iter"](function(param){return p_text_element(b,param)},t)};

var
 p_list=
  function(b,l)
   {return List["iter"]
            (function(t)
              {p
                (b,
                 [/* Format */0,
                  [/* String_literal */11,"{- ",/* End_of_format */0],
                  "{- "]);
               p_text(b,t);
               return p
                       (b,
                        [/* Format */0,
                         [/* String_literal */11,"}\n",/* End_of_format */0],
                         "}\n"])},
             l)};

var
 p_text_element=
  function(b,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,10,/* End_of_format */0],
                   "\n"]);
        case 1:
         return p
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,"{!indexlist}",/* End_of_format */0],
                   "{!indexlist}"])
        }}
    else
     {switch(param[0])
       {case 0:
         return p
                 (b,
                  [/* Format */0,
                   [/* String */2,/* No_padding */0,/* End_of_format */0],
                   "%s"],
                  escape_raw(param[1]));
        case 1:
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,
                    91,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,93,/* End_of_format */0]]],
                   "[%s]"],
                  escape_code(param[1]));
        case 2:
         return p
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,
                    "{[",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,"]}",/* End_of_format */0]]],
                   "{[%s]}"],
                  param[1]);
        case 3:
         return p
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,
                    "{v ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11," v}",/* End_of_format */0]]],
                   "{v %s v}"],
                  param[1]);
        case 4:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{b ",/* End_of_format */0],
            "{b "]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 5:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{i ",/* End_of_format */0],
            "{i "]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 6:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{e ",/* End_of_format */0],
            "{e "]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 7:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{C ",/* End_of_format */0],
            "{C "]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 8:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{L ",/* End_of_format */0],
            "{L "]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 9:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{R ",/* End_of_format */0],
            "{R "]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 10:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{ul\n",/* End_of_format */0],
            "{ul\n"]);
         p_list(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 11:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{ol\n",/* End_of_format */0],
            "{ol\n"]);
         p_list(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 12:return p_text(b,param[1]);
        case 13:
         var l_opt=param[2];
         
         p
          (b,
           [/* Format */0,
            [/* Char_literal */12,
             123,
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,32,/* End_of_format */0]]]],
            "{%d%s "],
           param[1],
           l_opt?Pervasives["^"](":",l_opt[1]):"");
         p_text(b,param[3]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 14:
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,
                    123,
                    [/* Char_literal */12,
                     37,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,
                        37,
                        [/* Char_literal */12,125,/* End_of_format */0]]]]]],
                   "{%% %s%%}"],
                  param[1]);
        case 15:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,
             "{{:",
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,125,/* End_of_format */0]]],
            "{{:%s}"],
           param[1]);
         p_text(b,param[2]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 16:
         var text_opt=param[3];
         
         var kind_opt=param[2];
         
         var $js;
         if(kind_opt)
          {var k=kind_opt[1];
           
           var s;
           if(typeof k==="number")
            {switch(k)
              {case 0:s="module";break;
               case 1:s="modtype";break;
               case 2:s="class";break;
               case 3:s="classtype";break;
               case 4:s="val";break;
               case 5:s="type";break;
               case 6:s="extension";break;
               case 7:s="exception";break;
               case 8:s="attribute";break;
               case 9:s="method";break;
               case 10:s="recfield";break;
               case 11:s="const";break
               }
             }
           else
            {s="section";}
           
           $js=Pervasives["^"](s,":");
           }
         else
          {$js="";}
         p
          (b,
           [/* Format */0,
            [/* String */2,
             /* No_padding */0,
             [/* String_literal */11,
              "{!",
              [/* String */2,
               /* No_padding */0,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,125,/* End_of_format */0]]]]],
            "%s{!%s%s}"],
           text_opt?"{":"",
           $js,
           param[1]);
         return text_opt
                 ?(p_text(b,text_opt[1]),
                   p
                    (b,
                     [/* Format */0,
                      [/* Char_literal */12,125,/* End_of_format */0],
                      "}"]))
                 :/* () */0;
        case 17:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{^",/* End_of_format */0],
            "{^"]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 18:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{_",/* End_of_format */0],
            "{_"]);
         p_text(b,param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 19:
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,"{!modules:",/* End_of_format */0],
            "{!modules:"]);
         List["iter"]
          (function(s)
            {return p
                     (b,
                      [/* Format */0,
                       [/* Char_literal */12,
                        32,
                        [/* String */2,/* No_padding */0,/* End_of_format */0]],
                       " %s"],
                      s)},
           param[1]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 20:
         p
          (b,
           [/* Format */0,
            [/* Char_literal */12,
             123,
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,32,/* End_of_format */0]]],
            "{%s "],
           param[1]);
         p_text(b,param[2]);
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,125,/* End_of_format */0],
                   "}"]);
        case 21:
         return p
                 (b,
                  [/* Format */0,
                   [/* Char_literal */12,
                    123,
                    [/* Char_literal */12,
                     37,
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       ": ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,125,/* End_of_format */0]]]]]],
                   "{%%%s: %s}"],
                  param[1],
                  escape_raw(param[2]))
        }}
    };

var
 string_of_text=
  function(s)
   {var b=Buffer["create"](256);p_text(b,s);return Buffer["contents"](b)};

var
 Texter=
  [0,
   text_of_string,
   count,
   escape_n,
   escape_code,
   escape_raw,
   p,
   p_text,
   p_list,
   p_text_element,
   string_of_text];

module["exports"]=
{"Text_syntax":Text_syntax,"Texter":[0,Texter[1],Texter[10]]};

