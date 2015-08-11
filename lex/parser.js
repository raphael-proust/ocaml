// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");
var Cset=require("Cset");
var Printf=require("Printf");
var Parsing=require("Parsing");
var Hashtbl=require("Hashtbl");


var named_regexps=Hashtbl["create"](0,13);

var
 regexp_for_string=
  function(s)
   {var
     re_string=
      function(n)
       {if(n>=s["length"])
         {return 0;}
        else
         {if((1+n)=s["length"])
           {return /* Characters */[0,Cset["singleton"](s[n])];}
          else
           {return /* Sequence */[1,
                    /* Characters */[0,Cset["singleton"](s[n])],
                    re_string(1+n)];
            }
          }
        };
    
    return re_string(0);
    };

var
 remove_as=
  function(e)
   {var exit;
    
    if(typeof e=="number")
     {switch(e){}}
    else
     {switch(e[0])
       {case 1:return /* Sequence */[1,remove_as(e[1]),remove_as(e[2])];
        case 2:return /* Alternative */[2,remove_as(e[1]),remove_as(e[2])];
        case 3:return /* Repetition */[3,remove_as(e[1])];
        case 4:return remove_as(e[1]);
        default:exit=80;}}
    
    switch(exit){case 80:return e;}
    };

var
 as_cset=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){}}
    else
     {switch(param[0]){case 0:return param[1];default:exit=78;}}
    
    switch(exit){case 78:throw Cset["Bad"];}
    };

var yytransl_const="unknown primitive:caml_obj_dup";

var yytransl_block="unknown primitive:caml_obj_dup";

var
 yylhs=
  "ÿÿ\x01\0\x02\0\x02\0\x03\0\x03\0\x06\0\x06\0\x04\0\x04\0\x05\0\x05\0\b\0\b\0\t\0\t\0\x0b\0\x0b\0\n\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\r\0\f\0\f\0\x0e\0\x0e\0\x0e\0\0\0";

var
 yylen=
  "\x02\0\b\0\x01\0\0\0\x05\0\0\0\x03\0\0\0\x02\0\0\0\x05\0\x05\0\x02\0\0\0\x02\0\x03\0\x03\0\0\0\x02\0\x01\0\x01\0\x01\0\x01\0\x03\0\x02\0\x02\0\x02\0\x03\0\x03\0\x02\0\x03\0\x01\0\x03\0\x01\0\x02\0\x01\0\x03\0\x01\0\x02\0\x02\0";

var
 yydefred=
  "\0\0\0\0\0\0\x02\0'\0\x05\0\0\0\0\0\0\0\0\0\b\0\0\0\0\0\0\0\0\0\x07\0\x1f\0\x15\0\x16\0\x13\0\x14\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x18\0\x19\0\x1a\0\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\x17\0\0\0\x1e\0\0\0!\0 \0\0\0\0\0\0\0\x06\0\x01\0$\0\0\0\0\0\n\0\x11\0\x0b\0\x11\0\x12\0\0\0\0\0\0\0\x10\0";

var
 yydgoto=
  "\x02\0\x04\0\x05\0\x06\0\t\0\x0f\0\x1a\0&\0\x19\0;\0<\0@\0\x1d\x002\0.\0";

var
 yysindex=
  "\x02\0\x0eÿ\0\0\0\0\0\0\0\0÷þ ÿ%ÿ$ÿ\0\0(ÿ5ÿžÿ;ÿ\0\0\0\0\0\0\0\0\0\0\0\0\x03ÿžÿ@ÿ;ÿ>ÿ\x1dÿ-ÿFÿ:ÿFÿ\tÿžÿ\0\0\0\0\0\0IÿžÿTÿ\0\0\nÿ5ÿEÿNÿFÿ\0\0Fÿ\0\0Tÿ\0\0\0\0žÿÿÿ\0\0\0\0\0\0žÿ,ÿ\0\0\0\0\0\0\0\0\0\0MÿMÿžÿ\0\0";

var
 yyrindex=
  "\0\0\x1aÿ\0\0\0\0\0\0\0\0Vÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0(ÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1bÿ(ÿ\0\0Rÿÿþ\0\0\0\0Oÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0qÿ\0\0\0\0\0\0\0\0\0\0Pÿ\0\0Zÿ\0\0€ÿ\0\0\0\0_ÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0þþvÿ\0\0\0\0";

var yygindex="\0\0\0\0C\0\0\0\0\0B\0\0\0óÿT\x008\0Ëÿ5\0\0\0\0\0\x1f\0";

var yytablesize=178;

var
 yytable=
  '\x17\0%\0\x0e\0\x01\0>\0\x1b\0\x0e\0\x07\0\x0e\0\x1f\0\x10\0\x11\0\x12\0C\0%\0\b\x004\x005\0\x03\x000\0 \0\x13\0\x14\0\x15\x003\0\x1c\0!\0"\0#\0\x16\0/\0\x03\0\x04\0\x03\0$\0%\0\n\0)\0\x0b\0:\0:\0\f\0\x03\0\x04\0:\0\x10\0\x11\0\x12\0?\0\r\0\x03\0\x04\0\x1e\0:\0\x0e\0 \0\x13\0\x14\0\x15\0,\0\x18\0!\0"\0#\0\x16\0\x10\0\x11\0\x12\0+\0$\0%\0(\0\x1b\0-\x001\0 \0\x13\0\x14\0\x15\x007\x008\0!\0"\0#\0\x16\0\x10\0\x11\0\x12\0B\0$\0%\0\t\0\x03\0*\0#\0"\0\x13\0\x14\0\x15\0\x1b\0\x1b\0!\0"\0#\0\x16\0&\0\x1b\x006\0\'\0=\0%\0\x1b\0\x1b\0\x1b\0\x1b\0A\0\x1b\0\x1d\0\x1d\0\x1b\0\x1b\0\x1b\0\x0f\0\0\0\x1d\0\0\0\x0f\0\0\0\x0f\0\x1d\0\0\0\0\0\x1c\0\x1c\0\x1d\0\0\0\0\0\x1d\0\x1d\0\x1c\0\0\0\0\0\0\0\0\0\x1c\0\x10\0\x11\0\x12\0\0\0\x1c\0\0\0\0\0\x1c\0\x1c\0\0\x009\0\x13\0\x14\0\x15\0\x10\0\x11\0\x12\0\0\0\0\0\x16\0\0\0\0\0\0\0\0\0\0\0\x13\0\x14\0\x15\0\0\0\0\0\0\0\0\0\0\0\x16\0';

var
 yycheck=
  "\r\0\x02\x01\x04\x01\x01\x009\0\x02\x01\b\x01\x10\x01\n\x01\x16\0\x01\x01\x02\x01\x03\x01B\0\x0f\x01\x18\x01\x06\x01\x07\x01\x04\x01 \0\x0b\x01\f\x01\r\x01\x0e\x01%\0\x16\x01\x11\x01\x12\x01\x13\x01\x14\x01\x15\x01\x05\x01\x05\x01\x04\x01\x19\x01\x1a\x01\x04\x01\b\x01\x01\x014\x005\0\x05\x01\x10\x01\x10\x019\0\x01\x01\x02\x01\x03\x01\x04\x01\t\x01\x18\x01\x18\x01\x15\0B\0\x01\x01\x0b\x01\f\x01\r\x01\x0e\x01\x1c\0\x01\x01\x11\x01\x12\x01\x13\x01\x14\x01\x01\x01\x02\x01\x03\x01\x17\x01\x19\x01\x1a\x01\t\x01\x02\x01\x0f\x01\x01\x01\x0b\x01\f\x01\r\x01\x0e\x01\n\x01\x02\x01\x11\x01\x12\x01\x13\x01\x14\x01\x01\x01\x02\x01\x03\x01\x0b\x01\x19\x01\x1a\x01\x05\x01\n\x01\x1a\0\x0f\x01\x0f\x01\f\x01\r\x01\x0e\x01\x04\x01\x05\x01\x11\x01\x12\x01\x13\x01\x14\x01\x0f\x01\x0b\x01)\0\x18\x005\0\x1a\x01\x10\x01\x11\x01\x12\x01\x13\x01>\0\x15\x01\x04\x01\x05\x01\x18\x01\x19\x01\x1a\x01\x04\x01ÿÿ\x0b\x01ÿÿ\b\x01ÿÿ\n\x01\x10\x01ÿÿÿÿ\x04\x01\x05\x01\x15\x01ÿÿÿÿ\x18\x01\x19\x01\x0b\x01ÿÿÿÿÿÿÿÿ\x10\x01\x01\x01\x02\x01\x03\x01ÿÿ\x15\x01ÿÿÿÿ\x18\x01\x19\x01ÿÿ\x0b\x01\f\x01\r\x01\x0e\x01\x01\x01\x02\x01\x03\x01ÿÿÿÿ\x14\x01ÿÿÿÿÿÿÿÿÿÿ\f\x01\r\x01\x0e\x01ÿÿÿÿÿÿÿÿÿÿ\x14\x01";

var
 yynames_const=
  "Trule\0Tparse\0Tparse_shortest\0Tand\0Tequal\0Tend\0Tor\0Tunderscore\0Teof\0Tlbracket\0Trbracket\0Trefill\0Tstar\0Tmaybe\0Tplus\0Tlparen\0Trparen\0Tcaret\0Tdash\0Tlet\0Tas\0Tsharp\0";

var yynames_block="Tident\0Tchar\0Tstring\0Taction\0";

var
 yyact=
  [function(param){return Pervasives["failwith"]("parser");},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,7);
     
     var _2=Parsing["peek_val"](__caml_parser_env,6);
     
     var _3=Parsing["peek_val"](__caml_parser_env,5);
     
     var _5=Parsing["peek_val"](__caml_parser_env,3);
     
     var _6=Parsing["peek_val"](__caml_parser_env,2);
     
     var _7=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* record */[0,_1,/* :: */[0,_5,List["rev"](_6)],_7,_3];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env){return [0,"",0,0,1,0];},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,4);
     
     var _3=Parsing["peek_val"](__caml_parser_env,2);
     
     var _5=Parsing["peek_val"](__caml_parser_env,0);
     
     return Hashtbl["add"](named_regexps,_3,_5);
     },
   function(__caml_parser_env){return 0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_3,_1];
     },
   function(__caml_parser_env){return 0;},
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);return /* Some */[0,_2];},
   function(__caml_parser_env){return 0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,4);
     
     var _2=Parsing["peek_val"](__caml_parser_env,3);
     
     var _5=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* record */[0,_1,0,_2,_5];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,4);
     
     var _2=Parsing["peek_val"](__caml_parser_env,3);
     
     var _5=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* record */[0,_1,1,_2,_5];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_1,_2];
     },
   function(__caml_parser_env){return 0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_1,List["rev"](_2)];
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,1);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_2,List["rev"](_3)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_3,_1];
     },
   function(__caml_parser_env){return 0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* tuple */[0,_1,_2];
     },
   function(__caml_parser_env){return /* Characters */[0,Cset["all_chars"]];},
   function(__caml_parser_env){return 1;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Characters */[0,Cset["singleton"](_1)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return regexp_for_string(_1);
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* Characters */[0,_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* Repetition */[3,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* Alternative */[2,0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* Sequence */[1,/* Repetition */[3,remove_as(_1)],_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     var s1=as_cset(_1);
     
     var s2=as_cset(_3);
     
     return /* Characters */[0,Cset["diff"](s1,s2)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Alternative */[2,_1,_3];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Sequence */[1,_1,_2];
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,1);return _2;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     try
      {var $js=Hashtbl["find"](named_regexps,_1);}
     catch(exn)
      {if(exn=Not_found)
        {var p=Parsing["symbol_start_pos"](0);
         
         Printf["eprintf"]
          ([0,
            [11,
             'File "',
             [2,
              0,
              [11,
               '", line ',
               [4,
                0,
                0,
                0,
                [11,
                 ", character ",
                 [4,
                  0,
                  0,
                  0,
                  [11,
                   ":\nReference to unbound regexp name `",
                   [2,0,[11,"'.\n",0]]]]]]]]],
            'File "%s", line %d, character %d:\nReference to unbound regexp name `%s\'.\n'],
           p[1],
           p[2],
           p[4]-p[3],
           _1);
         var $js=Pervasives["exit"](2);
         }
       else
        {throw exn;}
       }
     return $js;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     var p1=Parsing["rhs_start_pos"](3);
     
     var p2=Parsing["rhs_end_pos"](3);
     
     var p=/* record */[0,p1[1],p1[4],p2[4],p1[2],p1[4]-p1[3]];
     
     return /* Bind */[4,_1,/* tuple */[0,_3,p]];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Cset["complement"](_2);
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return Cset["interval"](_1,_3);
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return Cset["singleton"](_1);
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Cset["union"](_1,_2);
     },
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
 lexer_definition=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,1,lexfun,lexbuf);};

module["exports"]={"lexer_definition":lexer_definition};

