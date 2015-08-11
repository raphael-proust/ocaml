// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Parsing=require("Parsing");
var Int64ops=require("Int64ops");
var Input_handling=require("Input_handling");


var yytransl_const="unknown primitive:caml_obj_dup";

var yytransl_block="unknown primitive:caml_obj_dup";

var
 yylhs=
  "ÿÿ\x01\0\x01\0\x02\0\x03\0\x03\0\x04\0\x05\0\x06\0\x07\0\x07\0\x16\0\x16\0\b\0\b\0\t\0\t\0\x17\0\x17\0\x17\0\x17\0\x17\0\x18\0\x18\0\x13\0\x14\0\x14\0\x14\0\x14\0\x15\0\n\0\n\0\x0b\0\f\0\f\0\r\0\r\0\x0e\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x0f\0\x0f\0\x10\0\x10\0\x10\0\x10\0\x10\0\x11\0\x11\0\x12\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";

var
 yylen=
  "\x02\0\x02\0\x01\0\x02\0\x02\0\x01\0\x02\0\x02\0\x01\0\x02\0\x01\0\x02\0\x01\0\x02\0\x01\0\x02\0\x01\0\x01\0\x03\0\x01\0\x03\0\x05\0\x01\0\x03\0\x02\0\x01\0\x01\0\x03\0\0\0\x02\0\x01\0\x01\0\x02\0\x01\0\x01\0\x01\0\0\0\x02\0\x01\0\x01\0\x02\0\x03\0\x05\0\x05\0\x03\0\x02\0\x03\0\x02\0\x01\0\x01\0\x01\0\x02\0\x04\0\x04\0\x03\0\x01\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0";

var
 yydefred=
  "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x008\x009\0\x02\0\0\0:\0\0\0;\0\x05\0\0\0<\0\0\0=\0\b\0>\0\0\0?\0\n\0\0\0\x0e\0@\0\0\0\0\0A\0\f\0\x10\0\x1e\0\x1f\0B\0\0\0C\0!\0D\0\"\0#\0E\0\0\0F\0\x11\0\x16\0\x13\0'\0\0\0\0\0\0\0G\x000\0&\0\0\0\0\0\0\x002\0H\x001\0\0\0\x1a\0\0\0I\0\0\x007\0\0\0J\0K\0\0\0L\0\0\0M\0\x01\0\x03\0\x04\0\x06\0\x07\0\t\0\r\0\x0b\0\x0f\0 \0%\0(\0-\0\0\0\0\0\0\0/\0\0\x003\0\0\0\x1d\0\0\0\x18\0.\0\x12\0\x17\0\x14\0\0\0,\0)\0\0\0\0\0\0\0\0\x006\0\0\0\0\0\0\0\0\x004\x005\0\x15\0+\0*\0";

var
 yydgoto=
  "\x16\0\x19\0\x1c\0\x1e\0!\0#\0%\0'\0+\0.\x009\x005\x007\0:\0<\0D\0K\0P\0(\0U\0Q\0R\x000\0F\0G\0H\0";

var
 yysindex=
  "r\0\bÿ\x04ÿ\x19ÿ\x07ÿ-ÿ0ÿ#ÿ\x13ÿ\x18ÿ:ÿ:ÿ\x10ÿ:ÿ:ÿ†ÿDÿ]ÿ4ÿfÿ]ÿ]ÿ\0\0\bÿ\0\0\0\0\0\x004ÿ\0\0\x19ÿ\0\0\0\x004ÿ\0\x004ÿ\0\0\0\0\0\x004ÿ\0\0\0\0\x07ÿ\0\0\0\x004ÿ-ÿ\0\0\0\0\0\0\0\0\0\0\0\x004ÿ\0\0\0\0\0\0\0\0\0\0\0\x004ÿ\0\0\0\0\0\0\0\0\0\0Fÿ’ÿ’ÿ\0\0\0\0\0\0LÿVÿ]ÿ\0\0\0\0\0\0\x05ÿ\0\0\0\0\0\0'ÿ\0\0\ÿ\0\0\0\x004ÿ\0\x004ÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%ÿ?ÿ!ÿ\0\x005ÿ\0\0#ÿ\0\0cÿ\0\0\0\0\0\0\0\0\0\0gÿ\0\0\0\0lÿˆÿ#ÿ\x07ÿ\0\0\0\0^ÿ}ÿ~ÿ\0\0\0\0\0\0\0\0\0\0";

var
 yyrindex=
  "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x7fÿ\0\0\0\0*ÿ\0\0\0\0™\0‰ÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Nÿ\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";

var
 yygindex=
  "\0\0„\0\0\0\x7f\0òÿs\0P\0øÿ\0\0\0\0d\0\0\0\0\0”\0\0\0[\0\0\0\0\0\x05\0\0\0ûÿ\0\0\0‘\0öÿôÿ";

var yytablesize=276;

var
 yytable=
  '*\0\x19\0J\0\x1b\0M\0\x1b\0\x1a\0S\0\x1f\0\x17\0S\0S\0 \0i\0/\0W\0X\x008\x001\x002\0E\0L\0\x18\0T\0&\0\x18\0)\0`\0\x1a\0,\0\x1d\0-\0[\0\x18\0\x1f\0v\0\x18\0]\0w\0^\0&\0\x18\0\x18\0_\0$\0i\0x\0\x1c\0y\0a\0"\0q\0\x18\0$\0f\0g\0\x18\0c\0z\0\x1c\x001\x002\0{\0S\0d\0r\0s\0t\0k\0\x18\0=\0>\0?\0 \0@\0e\0u\0E\0I\0A\0B\0C\0l\0\x1c\0h\0\x18\0n\0\x1c\0=\0>\0?\0p\0@\0n\0i\0N\0O\0A\0B\0C\0o\0|\0}\0\x18\0=\0>\0?\0~\0ƒ\0‚\x003\x004\x006\0\x7f\0\0\x01\0\x02\0\x03\0\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x12\0\x13\0\x14\0\x15\0=\0>\0?\0„\0@\0€\0…\0$\0$\0A\0B\0C\0=\0>\0?\0\x18\0@\0\x1c\0\x1c\0Z\0\\0A\0B\0C\0b\0m\0;\0j\0V\0Y\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x19\0\0\0\x1b\0\x16\0\x19\0\x17\0\x1b\0\0\0\0\0\0\0\0\0\0\0\x19\0\0\0\x1b\0';

var
 yycheck=
  '\b\0\0\0\x10\0\0\0\x10\0\x01\x01\x01\0\x11\0\x03\0\x01\x01\x14\0\x15\0\x05\x01\b\x01\t\0\x14\0\x15\0\f\0\x02\x01\x03\x01\x0f\0\x10\0\x11\x01\x12\0\x05\x01\x11\x01\x07\x01)\0\x17\0\x05\x01\x05\x01\x07\x01\x1b\0\x11\x01\x1d\0\x02\x01\x11\x01 \0\x05\x01"\0\x05\x01\x11\x01\x11\x01&\0\x05\x01\b\x01\r\x01\x05\x01\x0f\x01,\0\x05\x01\x0e\x01\x11\x01\x05\x01B\0C\0\x11\x014\0\x05\x01\x11\x01\x02\x01\x03\x01\t\x01I\0;\0\x02\x01\x03\x01\x04\x01I\0\x11\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x05\x01\r\x01H\0\n\x01\x0b\x01\f\x01\r\x01M\0\x05\x01\b\x01\x11\x01Q\0\t\x01\x02\x01\x03\x01\x04\x01V\0\x06\x01X\0\b\x01\x02\x01\x03\x01\x0b\x01\f\x01\r\x01\b\x01m\0\x03\x01\x11\x01\x02\x01\x03\x01\x04\x01\x04\x01\x0e\x01{\0\n\0\x0b\0\f\0\x05\x01z\0\x01\0\x02\0\x03\0\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x12\0\x13\0\x14\0\x15\0\x02\x01\x03\x01\x04\x01\x0e\x01\x06\x01\x05\x01\x10\x01\0\0\x11\x01\x0b\x01\f\x01\r\x01\x02\x01\x03\x01\x04\x01\x11\x01\x06\x01\0\0\x11\x01\x17\0\x1d\0\x0b\x01\f\x01\r\x01-\0Q\0\x0e\0H\0\x13\0\x15\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x05\x01ÿÿ\x05\x01\b\x01\t\x01\b\x01\t\x01ÿÿÿÿÿÿÿÿÿÿ\x11\x01ÿÿ\x11\x01';

var
 yynames_const=
  "STAR\0MINUS\0DOT\0SHARP\0AT\0DOLLAR\0BANG\0LPAREN\0RPAREN\0LBRACKET\0RBRACKET\0EOL\0";

var yynames_block="ARGUMENT\0LIDENT\0UIDENT\0OPERATOR\0INTEGER\0";

var
 yyact=
  [function(param){return Pervasives["failwith"]("parser");},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_1,_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* [] */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return _1;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,Int64ops["to_int"](_1),_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* [] */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return Int64ops["to_int"](_1);
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return _1;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return Int64ops["to_int"](_1);
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,Int64ops["to_int"](_1)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* None */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* None */0;},
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,-_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,-_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Lident */[0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Ldot */[1,_1,_3];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Lident */[0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Ldot */[1,_1,_3];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,4);
     
     var _4=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* Ldot */[1,_1,_4];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Lident */[0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Ldot */[1,_1,_3];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return _1;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,/* Lident */[0,_1]];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,/* Lident */[0,_1]];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* Some */[0,/* Ldot */[1,_1,_3]];
     },
   function(__caml_parser_env){return /* None */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return _1;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return _1;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return _1;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* Some */[0,_1];},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* None */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* Some */[0,_1];},
   function(__caml_parser_env){return /* None */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return _1;
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* E_ident */[0,_1];
     },
   function(__caml_parser_env){return /* E_result */0;},
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* E_name */[1,Int64ops["to_int"](_2)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* E_item */[2,_1,Int64ops["to_int"](_3)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,4);
     
     var _4=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* E_item */[2,_1,Int64ops["to_int"](_4)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,4);
     
     var _4=Parsing["peek_val"](__caml_parser_env,1);
     
     return /* E_item */[2,_1,Int64ops["to_int"](_4)];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* E_field */[3,_1,_3];
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* E_field */[3,_2,"contents"];
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,1);return _2;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* :: */[0,_1,_2];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* [] */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);return /* BA_none */0;},
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* BA_pc */[0,_1];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,1);
     
     var _2=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* BA_function */[1,_1];
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,2);
     
     var _3=Parsing["peek_val"](__caml_parser_env,1);
     
     var _4=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* BA_pos1 */[2,_2,Int64ops["to_int"](_3),_4];
     },
   function(__caml_parser_env)
    {var _2=Parsing["peek_val"](__caml_parser_env,2);
     
     var _4=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* BA_pos2 */[3,_2,_4];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,2);
     
     var _2=Parsing["peek_val"](__caml_parser_env,1);
     
     var _3=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* tuple */[0,_1,/* Some */[0,_2],_3];
     },
   function(__caml_parser_env)
    {var _1=Parsing["peek_val"](__caml_parser_env,0);
     
     return /* tuple */[0,_1,/* None */0,/* None */0];
     },
   function(__caml_parser_env)
    {return Input_handling["stop_user_input"](/* () */0);},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
   function(__caml_parser_env)
    {throw [0,Parsing["YYexit"],Parsing["peek_val"](__caml_parser_env,0)];},
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
 argument_list_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,1,lexfun,lexbuf);};

var
 argument_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,2,lexfun,lexbuf);};

var
 integer_list_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,3,lexfun,lexbuf);};

var
 integer_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,4,lexfun,lexbuf);};

var
 int64_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,5,lexfun,lexbuf);};

var
 integer=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,6,lexfun,lexbuf);};

var
 opt_integer_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,7,lexfun,lexbuf);};

var
 opt_signed_integer_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,8,lexfun,lexbuf);};

var
 opt_signed_int64_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,9,lexfun,lexbuf);};

var
 identifier=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,10,lexfun,lexbuf);};

var
 identifier_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,11,lexfun,lexbuf);};

var
 identifier_or_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,12,lexfun,lexbuf);};

var
 opt_identifier=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,13,lexfun,lexbuf);};

var
 opt_identifier_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,14,lexfun,lexbuf);};

var
 expression_list_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,15,lexfun,lexbuf);};

var
 break_argument_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,16,lexfun,lexbuf);};

var
 list_arguments_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,17,lexfun,lexbuf);};

var
 end_of_line=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,18,lexfun,lexbuf);};

var
 longident_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,19,lexfun,lexbuf);};

var
 opt_longident=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,20,lexfun,lexbuf);};

var
 opt_longident_eol=
  function(lexfun,lexbuf)
   {return Parsing["yyparse"](yytables,21,lexfun,lexbuf);};

module["exports"]=
{"argument_list_eol":argument_list_eol,
 "argument_eol":argument_eol,
 "integer_list_eol":integer_list_eol,
 "integer_eol":integer_eol,
 "int64_eol":int64_eol,
 "integer":integer,
 "opt_integer_eol":opt_integer_eol,
 "opt_signed_integer_eol":opt_signed_integer_eol,
 "opt_signed_int64_eol":opt_signed_int64_eol,
 "identifier":identifier,
 "identifier_eol":identifier_eol,
 "identifier_or_eol":identifier_or_eol,
 "opt_identifier":opt_identifier,
 "opt_identifier_eol":opt_identifier_eol,
 "expression_list_eol":expression_list_eol,
 "break_argument_eol":break_argument_eol,
 "list_arguments_eol":list_arguments_eol,
 "end_of_line":end_of_line,
 "longident_eol":longident_eol,
 "opt_longident":opt_longident,
 "opt_longident_eol":opt_longident_eol};

