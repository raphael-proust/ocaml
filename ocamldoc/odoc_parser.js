// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Parsing=require("./parsing.js");
var Odoc_comments_global=require("./odoc_comments_global.js");
var Str=require("./str.js");
var CamlPrimitive=require("./camlPrimitive.js");


var uppercase="[A-ZÀ-ÖØ-Þ]";

var identchar="[A-Za-z_À-ÖØ-öø-ÿ'0-9]";

var blank="[ \n\r\t\f]";

var
 yytransl_const=
  CamlPrimitive["caml_obj_dup"]([0,261,262,263,264,265,266,267,268,269,0,0]);

var
 yytransl_block=
  CamlPrimitive["caml_obj_dup"]([0,257,258,259,260,270,271,0]);

var
 yylhs=
  "ÿÿ\x03\0\x04\0\x04\0\x04\0\x01\0\x01\0\x02\0\x05\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\0\0\0\0\0\0";

var
 yylen=
  "\x02\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x02\0\x01\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0";

var
 yydefred=
  "\0\0\0\0\0\0\0\0\0\0\x05\0\x06\0\x1e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\0\0\0\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x12\0\x13\0\x02\0\x03\0\x04\0 \0\0\0\x14\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x07\0\t\0\x01\0";

var
 yydgoto=
  '\x04\0\x07\0\x12\0"\0#\0\x13\0\x14\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x1e\0';

var
 yysindex=
  "\x0b\0\x01\0ýþ\rÿ\0\0\0\0\0\0\0\0ñþ\x03ÿ\x04ÿ\x05ÿ\x06ÿ\x07ÿ\bÿ\tÿ\nÿ\x0bÿ\0\0\x1b\0ýþ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0eÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";

var
 yyrindex=
  "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";

var
 yygindex=
  "\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";

var yytablesize=258;

var
 yytable=
  "$\0\x06\0\b\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x01\0\x02\0\x03\0\x1f\0 \0!\0%\0&\0'\0(\0)\0*\0+\0,\0-\0.\0\b\x000\0/\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0";

var
 yycheck=
  "\x0f\x01\0\0\x05\x01\x06\x01\x07\x01\b\x01\t\x01\n\x01\x0b\x01\f\x01\r\x01\x0e\x01\x01\0\x02\0\x03\0\x02\x01\x03\x01\x04\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\0\0\0\0\x0f\x01\x14\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x01\x01";

var
 yynames_const=
  "T_PARAM\0T_AUTHOR\0T_VERSION\0T_SEE\0T_SINCE\0T_BEFORE\0T_DEPRECATED\0T_RAISES\0T_RETURN\0EOF\0";

var yynames_block="Description\0See_url\0See_file\0See_doc\0T_CUSTOM\0Desc\0";

var
 yyact=
  [/* array */0,
   function(param){return Pervasives["failwith"]("parser");},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* tuple */[0,_1,_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* See_url */[0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* See_file */[1,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* See_doc */[2,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* Some */[0,_1];},
   function(__caml_parser_env){return /* None */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* () */0;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* () */0;},
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     var match=Str["split"](Str["regexp"](Pervasives["^"](blank,"+")),_2);
     
     var exit;
     
     if(match)
      {var id=match[1];
       
       if(match[2])
        {var reg=Pervasives["^"](identchar,"+");
         
         if(Str["string_match"](Str["regexp"](reg),id,0))
          {var
            remain=
             $$String["sub"](_2,id["length"],_2["length"]-id["length"]);
           
           var
            remain2=
             Str["replace_first"]
              (Str["regexp"](Pervasives["^"]("^",Pervasives["^"](blank,"+"))),
               "",
               remain);
           
           var
            $js=
             (Odoc_comments_global["params"][1]=
              Pervasives["@"]
               (Odoc_comments_global["params"][1],
                /* :: */[0,/* tuple */[0,id,remain2],/* [] */0]),
              0);
           }
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Failure"],
                  Pervasives["^"]
                   (id,
                    Pervasives["^"]
                     (' is not a valid parameter identificator in "@param ',
                      Pervasives["^"](_2,'"')))];
           }
         }
       else
        {exit=28;}
       }
     else
      {exit=28;}
     
     var $js$1;
     switch(exit)
      {case 28:
        throw [0,
               CamlPrimitive["caml_global_data"]["Failure"],
               "usage: @param id description"];
        
       }
     return $js$1;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["authors"][1]=
            Pervasives["@"]
             (Odoc_comments_global["authors"][1],/* :: */[0,_2,/* [] */0]),
            0;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["version"][1]=/* Some */[0,_2],0;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["sees"][1]=
            Pervasives["@"]
             (Odoc_comments_global["sees"][1],/* :: */[0,_2,/* [] */0]),
            0;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["since"][1]=/* Some */[0,_2],0;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     var match=Str["split"](Str["regexp"](Pervasives["^"](blank,"+")),_2);
     
     var exit;
     
     if(match)
      {var id=match[1];
       
       if(match[2])
        {var
          remain=
           $$String["sub"](_2,id["length"],_2["length"]-id["length"]);
         
         var
          remain2=
           Str["replace_first"]
            (Str["regexp"](Pervasives["^"]("^",Pervasives["^"](blank,"+"))),
             "",
             remain);
         
         var
          $js=
           (Odoc_comments_global["before"][1]=
            Pervasives["@"]
             (Odoc_comments_global["before"][1],
              /* :: */[0,/* tuple */[0,id,remain2],/* [] */0]),
            0);
         }
       else
        {exit=38;}
       }
     else
      {exit=38;}
     
     var $js$1;
     switch(exit)
      {case 38:
        throw [0,
               CamlPrimitive["caml_global_data"]["Failure"],
               "usage: @before version description"];
        
       }
     return $js$1;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["deprecated"][1]=/* Some */[0,_2],0;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     var match=Str["split"](Str["regexp"](Pervasives["^"](blank,"+")),_2);
     
     var exit;
     
     if(match)
      {var id=match[1];
       
       if(match[2])
        {var
          reg=
           Pervasives["^"]
            (uppercase,
             Pervasives["^"]
              (identchar,
               Pervasives["^"]
                ("*",
                 Pervasives["^"]
                  ("\(\.",
                   Pervasives["^"](uppercase,Pervasives["^"](identchar,"*\)*"))))));
         
         if(Str["string_match"](Str["regexp"](reg),id,0))
          {var
            remain=
             $$String["sub"](_2,id["length"],_2["length"]-id["length"]);
           
           var
            remain2=
             Str["replace_first"]
              (Str["regexp"](Pervasives["^"]("^",Pervasives["^"](blank,"+"))),
               "",
               remain);
           
           var
            $js=
             (Odoc_comments_global["raised_exceptions"][1]=
              Pervasives["@"]
               (Odoc_comments_global["raised_exceptions"][1],
                /* :: */[0,/* tuple */[0,id,remain2],/* [] */0]),
              0);
           }
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Failure"],
                  Pervasives["^"]
                   (id,
                    Pervasives["^"]
                     (' is not a valid exception constructor in "@raise ',
                      Pervasives["^"](_2,'"')))];
           }
         }
       else
        {exit=46;}
       }
     else
      {exit=46;}
     
     var $js$1;
     switch(exit)
      {case 46:
        throw [0,
               CamlPrimitive["caml_global_data"]["Failure"],
               "usage: @raise Exception description"];
        
       }
     return $js$1;
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["return_value"][1]=/* Some */[0,_2],0;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Odoc_comments_global["customs"][1]=
            Pervasives["@"]
             (Odoc_comments_global["customs"][1],
              /* :: */[0,/* tuple */[0,_1,_2],/* [] */0]),
            0;
     },
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];}];

var
 yytables=
  /* record */[0,
   yyact,
   yytransl_const,
   yytransl_block,
   yylhs,
   yylen,
   yydefred,
   yydgoto,
   yysindex,
   yyrindex,
   yygindex,
   yytablesize,
   yytable,
   yycheck,
   Parsing["parse_error"],
   yynames_const,
   yynames_block];

var
 main=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,1,lexfun,lexbuf);};

var
 info_part2=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,2,lexfun,lexbuf);};

var
 see_info=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,3,lexfun,lexbuf);};

module["exports"]={"main":main,"info_part2":info_part2,"see_info":see_info};

