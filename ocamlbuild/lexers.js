// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("./printf.js");
var Loc=require("./loc.js");
var Lexing=require("./lexing.js");
var Printexc=require("./printexc.js");
var My_std=require("./my_std.js");
var Glob=require("./glob.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Lexers.Error",0]);

var
 error=
  function(source,lexbuf,fmt)
   {return Printf["ksprintf"]
            (function(s)
              {throw [0,
                      $$Error,
                      /* tuple */[0,s,Loc["of_lexbuf"](source,lexbuf)]];
               },
             fmt);
    };

var empty=[/* record */0,/* [] */0,/* [] */0];

var
 locate=
  function(source,lexbuf,txt)
   {return /* tuple */[0,txt,Loc["of_lexbuf"](source,lexbuf)];};

var sublex=function(lexer,s){return lexer(Lexing["from_string"](s));};

var
 __ocaml_lex_tables=
  [/* record */0,
   "\0\0ıÿşÿ\x01\0ÿÿ\x02\0\x07\0\b\0şÿ\f\0\x11\0\x16\0!\0şÿ\r\0\x03\0&\0+\0\x12\0\x04\x006\0;\0üÿ@\0E\0K\0P\0Z\0`\0şÿ\x17\0ÿÿ\x1b\0V\0üÿıÿf\0h\0l\0ÿÿ\x1d\0p\0ıÿşÿu\0{\0‚\0Š\0‘\0—\0üÿıÿœ\0 \0¤\0ÿÿ¦\0¯\0ıÿµ\0¶\0¾\0Å\0Ë\0Ğ\0\x15\0ıÿ\x18\0-\0<\0ıÿşÿD\0'\0ıÿA\0O\0S\0ıÿşÿU\0Ú\0úÿâ\0üÿ\x1a\0ıÿë\0O\x01Ô\0û\0$\x01%\x01m\x01şÿ/\0ÿÿX\x010\x01s\x01ê\0ñ\0\x17\x01Œ\x01ü\0\x01\x01z\x01e\x01\x06\x01™\x01\x01×\x01ıÿÑ\x01æ\x01ÿ\x01©\0\n\x02\x14\x02ª\0\x1f\x024\x02ÿÿ?\x02şÿI\x02üÿıÿ4\0şÿ’\x01\r\x01´\x01\x15\x01D\x02h\x02\x1f\x01®\x01t\0ûÿ]\0\0\x1a\x03š\x01şÿıÿv\0H\0ıÿşÿ‘\0ÿÿ¦\x01şÿ)\0²\x01½\x010\0È\x01Ò\x014\0;\0J\0L\0P\0‹\0\x0f\x025\x01¤\x01Ù\x01d\0X\0j\0f\0q\0o\0t\0€\0~\0€\0¸\0v\x02\x10\x02-\x02İ\x01”\0\0œ\0°\0¯\0º\0ğ\0•\x02@\x01â\x01X\x02Á\0Ñ\0Ğ\0Ğ\0Í\0ä\0$\x01Û\0)\x01\x1a\x01\x02M\x02T\x02z\x02ô\0õ\0ü\0ú\0û\0ù\0\x0b\x01M\x01£\x02b\x02i\x02¤\x02\x19\x01/\x013\x01)\x016\x019\x01V\x01\x01ª\x02m\x02n\x02®\x02¼\x02Ã\x02Õ\x02Û\x02„\x02à\x02ä\x02şÿù\x02¼\x01ÿÿ¶\x02ıÿ\x7f\x02‰\x02Â\x01şÿ",
   "ÿÿÿÿÿÿ\x02\0ÿÿÿÿÿÿ\x01\0ÿÿ\0\0\x02\0ÿÿÿÿÿÿ\x02\0\x02\0\0\0\x02\0ÿÿÿÿÿÿÿÿÿÿ\x02\0\x02\0\x04\0\x04\0ÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿ\x01\0\x03\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x02\0\x02\0ÿÿÿÿ\0\0ÿÿÿÿÿÿ\x01\0\x03\0ÿÿÿÿÿÿÿÿÿÿ\x01\0\x03\0\x03\0ÿÿÿÿ\0\0\0\0ÿÿ\x01\0\0\0ÿÿÿÿÿÿ\0\0\0\0ÿÿ\x01\0\0\0ÿÿÿÿÿÿ\0\0ÿÿÿÿ\x05\0ÿÿ\x02\0ÿÿ\x05\0\x05\0\x04\0ÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\x04\0ÿÿ\0\0\0\0ÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\x04\0ÿÿÿÿÿÿ\x01\0\x01\0\x01\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0ÿÿ\x01\0ÿÿÿÿÿÿÿÿ\x01\0ÿÿ\0\0\x03\0\x03\0ÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿ\x03\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x01\0ÿÿÿÿÿÿ\x01\0\x01\0\x01\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0\x01\0ÿÿ",
   "\x03\0\0\0\0\0\x05\0\0\0\x05\0\t\0ÿÿ\0\0\t\0\t\0\t\0\x10\0\0\0ÿÿÿÿ\x10\0\x10\0ÿÿÿÿ\x10\0\x17\0\0\0\x17\0\x18\0\x17\0\x17\0\x17\0\x17\0\0\0ÿÿ\0\0 \0$\0\0\0\0\0$\0$\0$\0\0\0ÿÿ*\0\0\0\0\x000\0ÿÿ0\0ÿÿ0\x004\0\0\0\0\x004\x004\x004\0\0\0ÿÿ;\0\0\0;\0@\0;\0@\0;\0@\0D\0\0\0C\0D\0F\0\0\0\0\0H\0L\0\0\0K\0L\0N\0\0\0\0\0P\0S\0\0\0Z\0\0\0ÿÿ\0\0\\0Z\0ÿÿZ\0Z\0\\0Z\0\0\0ÿÿ\0\0h\0\\0ÿÿÿÿÿÿÿÿÿÿh\0h\0ÿÿÿÿÿÿÿÿZ\0q\0\0\0q\0q\0v\0t\0{\0v\0w\0y\0y\0\0\0{\0\0\0~\0\0\0\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0ÿÿ\0ÿÿ\0\0\0\0\0ÿÿ•\0\0\0\0\0ÿÿ\0\0™\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ©\0ÿÿÿÿ©\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ¸\0ÿÿÿÿ¸\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÃ\0ÿÿÿÿÃ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÑ\0ÿÿÿÿÑ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿİ\0ÿÿÿÿİ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿé\0ÿÿÿÿé\0ë\0ë\0ë\0ë\0ÿÿÿÿò\0\0\0ò\0ó\0\0\0ÿÿ\0\0ÿÿÿÿÿÿ\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0ÿÿÿÿ\x01\0ÿÿÿÿ\n\0\b\0\b\0\n\0\x07\0ÿÿÿÿ\x13\0ÿÿÿÿ\x0b\0\b\0\x13\0\x0b\0\x07\0\x0b\0\b\0\x1f\0\x0b\0\x07\0V\0\x1f\0(\0\n\0\x1e\0(\0\x11\0\x0f\0ÿÿ\x11\0\x0e\0ÿÿÿÿ\x0b\0ÿÿÿÿ\x14\0\x13\0\x0b\0\x14\0\x12\0`\0\x01\0\x04\0\x04\0(\0\0\x14\0\x13\0\x11\0\x14\0\x12\0\x19\0\x19\0ÿÿ\x19\0\x1a\0ÿÿÿÿ\x14\0ÿÿÿÿ \0\x1f\0C\0 \0\x1e\0ÿÿ\x1b\0\x1b\0\x14\0\x1b\0\x1c\0\x1b\0\x1b\0\x19\0\x1b\0\x1c\0\x18\0%\0ÿÿK\0%\0\x1b\0\x1b\0 \0\x1b\0\x1c\0ÿÿ\x1b\0\x1b\0\x1b\0\x1b\0\x1c\0\x18\0(\0\x1b\0&\0(\0\x18\0&\0&\0%\0H\0&\0-\0\x1b\0ÿÿ-\0\x18\0.\0ÿÿ\x1b\0.\0\"\0\x18\0/\0\0(\0/\0&\0ÿÿ \0.\0&\0P\0.\0ÿÿ-\0 \0ÿÿ/\0ÿÿ.\0/\0¡\0ÿÿŒ\0ÿÿ/\0,\0ÿÿ\0\x005\0ÿÿ.\x005\0–\x008\0¢\0.\x008\x006\0/\0£\x006\x006\0ÿÿ8\x006\0ÿÿ8\0¤\0ÿÿ¥\0.\x005\0=\0—\0—\0=\x008\0ÿÿÿÿ>\x006\0ÿÿ>\x002\x006\0¦\x008\0?\0ÿÿ«\0?\0¬\0ÿÿ­\0>\0=\0ÿÿ>\0|\0z\0?\0ÿÿ>\0?\0®\0ÿÿ¯\0<\0ÿÿY\0?\0°\0Y\0ÿÿÿÿX\0V\0>\0X\0U\0±\0²\0>\0?\0ÿÿ³\0´\0ÿÿÿÿÿÿµ\0f\0Y\0`\0f\0>\0_\0º\0X\0f\0ÿÿW\0g\0»\0\x02\0ÿÿÿÿ\r\0\r\0ÿÿ`\0ÿÿÿÿ_\0f\0k\0ÿÿ\r\0j\0¼\0Y\0ÿÿ\r\0m\0R\0B\0ÿÿ†\0ÿÿ½\0‡\0\x1d\0Y\0'\0¾\0†\0f\0\r\0‡\0f\0Y\0a\0ÿÿJ\0¿\0‚\0À\0\r\0‰\0ÿÿf\0`\0l\0g\0_\0Å\0Æ\0Y\0\r\0f\0Ç\0È\0d\0\x16\0G\0c\0n\0¨\0ÿÿÿÿ§\0É\0ÿÿ\x1d\0e\0b\0”\0Ê\0Â\0\x16\0Ë\0Á\0Ì\0ÿÿ\x16\0Y\0Í\0O\0Î\0ÿÿ#\0n\0]\0V\0\x16\0]\0U\0Ó\0Y\0a\0\x16\0a\0`\0Ô\0a\0_\0'\0Õ\0#\0Ö\0a\0×\0#\0Ø\0Y\0]\0+\0Y\0\\0e\0‹\0ÿÿ]\0V\0a\0]\0U\0+\0f\0d\0Ù\0f\0n\0b\0ÿÿY\0k\0Y\0Y\0Ú\0ß\0Y\0+\0f\0b\0]\0g\0ÿÿ\\0ÿÿà\0f\0á\0f\0f\x003\0f\0ª\0Y\0‚\x007\0â\0‚\0ã\x003\0Ä\0Y\0Y\x003\0Y\x007\0Y\0ä\0ÿÿÿÿ[\0f\0Y\0¨\0:\0œ\0§\0‚\0›\0i\0ÿÿÿÿ‚\0‚\0Y\0‚\0Y\0Ÿ\0†\0:\0\0†\0l\0ÿÿ‘\0å\0ÿÿY\0Ÿ\0æ\0[\0\0:\0ú\0\0\0‚\0e\0ÿÿ\0\0Ÿ\0\0\0†\0\0l\0\0\0\0\0\0\0T\0ÿÿŸ\0n\0ÿÿ\0‚\0p\0ÿÿ¨\0p\0ô\0§\0·\0e\0\0\0¶\0^\0Â\0\0\0ˆ\0Á\0ÿÿÿÿ\0\0ÿÿ\0\0l\0’\0p\0ÿÿt\0ÿÿÿÿ^\0ÿÿp\0p\0p\0^\0r\0p\0s\0\0\0ÿÿ\0\0ª\0ÿÿˆ\0u\0ÿÿÿÿt\0ÿÿ…\0p\0ÿÿ\0\0ÿÿ\0\0š\0ÿÿ¦\0¨\0·\0¦\0§\0¶\0ÿÿÿÿu\0ÿÿ\0\0\0ÿÿ^\0ÿÿt\0ÿÿÿÿÿÿÿÿÿÿ\0\0\0¦\0^\0ÿÿÿÿÿÿÿÿ\0\0ÿÿ·\0\0u\0¶\0ÿÿw\0ÿÿÿÿÿÿÿÿÿÿ\0Ä\0ÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿ†\0x\0T\0†\0\0\0„\0\0ÿÿ„\0€\0Ğ\0^\0ÿÿÏ\0ÿÿÿÿÿÿĞ\0ÿÿÿÿÏ\0Â\0\0\0†\0Á\0ÿÿÿÿÿÿ„\0\0\0ÿÿÜ\0T\0ÿÿÛ\0‚\0†\0†\0Ü\0†\0‚\0Û\0è\0è\0ÿÿç\0ç\0\0\0\0\0\0\0µ\0·\0ÿÿµ\0¶\0Ğ\0\0\0¹\0Ï\0†\0ú\0\0\0\0\0ù\0î\0î\0\0\0î\0ï\0ø\0\0\0‚\0ø\0µ\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0À\0Â\0…\0À\0Á\0¹\0î\0ƒ\0ÿÿÎ\0Ğ\0ø\0Î\0Ï\0Ú\0Ü\0Ü\0Ú\0Û\0Û\0\0\0æ\0è\0À\0æ\0ç\0è\0Ò\0\0\0ç\0ÿÿ\0\0Î\0ø\0Ò\0\0\0ø\0Ú\0…\0ì\0ì\0\0\0ì\0í\0æ\0\0\0î\0î\0Ş\0î\0ï\0ÿÿ\0\0\0\0\0\0Ş\0ø\0p\0\0\0ÿÿ\0\0\0\0ì\0ÿÿì\0ì\0\0\0ì\0í\0î\0ì\0ì\0ÿÿì\0í\0î\0î\0\0\0î\0ï\0ñ\0\0\0\0\0ñ\0\0\0\0\0\0\0ì\0\0\0\0\0\0\0\0\0\0\0ì\0\0\0\0\0\0\0ÿÿî\0\0\0\0\0ÿÿñ\0\0\0ÿÿ\0\0\0\0\0\0ÿÿñ\0ñ\0ñ\0\0\0ÿÿñ\0\0\0÷\0\0\0ÿÿ\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0ñ\0ÿÿÿÿó\0ÿÿ\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x7f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0ö\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\x03\0\x05\0\0\0\x03\0\x05\0\x06\0\x06\0\x07\0\x06\0\x06\0\t\0\t\0\x0e\0\t\0\t\0\n\0\n\0\x12\0\n\0\n\0\x0b\0\x0b\0\x1e\0\x0b\0\x0b\0U\0 \0(\0\x06\0 \0(\0\f\0\f\0\t\0\f\0\f\0\x10\0\x10\0\n\0\x10\0\x10\0\x11\0\x11\0\x0b\0\x11\0\x11\0_\0\0\0\x03\0\x05\0(\0€\0\x14\0\x14\0\f\0\x14\0\x14\0\x15\0\x15\0\x10\0\x15\0\x15\0\x17\0\x17\0\x11\0\x17\0\x17\0\x18\0\x18\0A\0\x18\0\x18\0C\0\x19\0\x19\0\x14\0\x19\0\x19\0\x1a\0\x1a\0\x15\0\x1a\0\x1a\0\x15\0!\0\x17\0I\0!\0\x1b\0\x1b\0\x18\0\x1b\0\x1b\0D\0\x1c\0\x1c\0\x19\0\x1c\0\x1c\0\x19\0$\0\x1a\0%\0$\0\x1a\0%\0&\0!\0E\0&\0)\0\x1b\0K\0)\0\x1b\0,\0H\0\x1c\0,\0!\0\x1c\0-\0Œ\0$\0-\0%\0L\0š\0.\0&\0M\0.\0P\0)\0\0$\0/\0%\0,\0/\0 \0&\0Š\x000\0-\0)\x000\0’\0’\x001\0,\0.\x001\0“\x004\0¡\0-\x004\x005\0/\0¢\x005\x006\0.\x008\x006\x000\x008\0£\0\0¤\0/\x001\x009\0–\0–\x009\x004\x000\0;\0<\x005\0;\0<\x001\x006\0¥\x008\0=\x004\0ª\0=\0«\x005\0¬\0>\x009\x006\0>\0t\0w\0?\0;\0<\0?\0­\0@\0®\x009\0@\0Y\0=\0¯\0Y\0;\0<\0Q\0Q\0>\0Q\0Q\0°\0±\0=\0?\0S\0²\0³\0S\0@\0>\0´\0d\0Y\0W\0d\0?\0W\0¹\0Q\0e\0@\0Q\0e\0º\0\0\0\x03\0\x05\0\x0f\0\x13\0Z\0h\0\x06\0Z\0h\0d\0i\0\t\0\x0e\0i\0»\0l\0\n\0\x12\0l\0Q\0A\0\x0b\0ƒ\0C\0¼\0ƒ\0 \0S\0(\0½\0…\0f\0\f\0…\0f\0d\0W\0\x10\0I\0¾\0ˆ\0¿\0\x11\0ˆ\0D\0[\0\\0Y\0[\0\\0Ä\0Å\0Z\0\x14\0f\0Æ\0Ç\0b\0\x15\0E\0b\0S\0§\0\x17\0K\0§\0È\0H\0\x18\0d\0W\0“\0É\0Á\0\x19\0Ê\0Á\0Ë\0L\0\x1a\0f\0Ì\0M\0Í\0P\0!\0Z\0X\0X\0\x1b\0X\0X\0Ò\0[\0\\0\x1c\0a\0a\0Ó\0a\0a\0$\0Ô\0%\0Õ\0b\0Ö\0&\0×\0k\0X\0)\0k\0X\0f\0Š\0,\0]\0]\0a\0]\0]\0-\0c\0c\0Ø\0c\0[\0\\0.\0j\0j\0k\0j\0Ù\0Ş\0X\0/\0n\0b\0]\0n\0\0]\x000\0ß\0c\0à\0g\0g\x001\0g\0§\0j\0‚\x004\0á\0‚\0â\x005\0Á\0m\0m\x006\0m\x008\0]\0ã\0t\0w\0X\0g\0c\0¨\x009\0˜\0¨\0‚\0˜\0a\0;\0<\0‰\0‰\0m\0‰\0n\0›\0„\0=\0›\0„\0k\0\0\0ä\0>\0g\0œ\0å\0]\0œ\0?\0ù\0ÿÿ‰\0c\0@\0ÿÿ\0ÿÿ„\0\0j\0ÿÿÿÿÿÿQ\0q\0Ÿ\0n\0q\0Ÿ\0„\0o\0S\0©\0o\0ó\0©\0¸\0g\0ÿÿ¸\0W\0Â\0ÿÿ‚\0Â\0r\0q\0ÿÿr\0ÿÿm\0\0o\0q\0q\0q\0Z\0h\0q\0o\0o\0o\0i\0o\0o\0o\0ÿÿr\0ÿÿ¨\0s\0‰\0q\0s\0r\0r\0r\0„\0o\0r\0ÿÿu\0ÿÿ˜\0u\0¦\0¦\0¶\0¦\0¦\0¶\0v\0s\0r\0v\0›\0ÿÿ[\0\\0s\0s\0s\0x\0u\0s\0x\0œ\0ÿÿ¦\0b\0u\0u\0u\0v\0ÿÿu\0·\0\0s\0·\0v\0v\0v\0y\0x\0v\0y\0Ÿ\0Â\0u\0ÿÿx\0x\0x\0{\0ÿÿx\0{\0†\0v\0X\0†\0ÿÿ}\0}\0y\0}\0}\0Ï\0a\0x\0Ï\0y\0y\0y\0Ğ\0{\0y\0Ğ\0Ã\0ÿÿ†\0Ã\0{\0{\0{\0}\0ÿÿ{\0Û\0]\0y\0Û\0†\0‡\0‡\0Ü\0‡\0}\0Ü\0ç\0è\0{\0ç\0è\0ÿÿÿÿÿÿµ\0µ\0n\0µ\0µ\0Ñ\0ÿÿ¶\0Ñ\0‡\0÷\0ÿÿÿÿ÷\0î\0î\0ÿÿî\0î\0ø\0ÿÿ‡\0ø\0µ\0ÿÿÿÿÿÿ\0ÿÿÿÿÿÿÀ\0À\0†\0À\0À\0·\0î\0}\0˜\0Î\0Î\0ø\0Î\0Î\0Ú\0Ú\0İ\0Ú\0Ú\0İ\0ÿÿæ\0æ\0À\0æ\0æ\0é\0Ï\0ÿÿé\0ó\0ÿÿÎ\0õ\0Ğ\0ÿÿõ\0Ú\0‡\0ê\0ê\0ÿÿê\0ê\0æ\0ÿÿë\0ë\0Û\0ë\0ë\0q\0ÿÿÿÿÿÿÜ\0õ\0o\0ÿÿ©\0ÿÿÿÿê\0¸\0ì\0ì\0ÿÿì\0ì\0ë\0í\0í\0r\0í\0í\0ï\0ï\0ÿÿï\0ï\0ğ\0ÿÿÿÿğ\0ÿÿÿÿÿÿì\0ÿÿÿÿÿÿÿÿÿÿí\0ÿÿÿÿÿÿs\0ï\0ÿÿÿÿò\0ğ\0ÿÿò\0ÿÿÿÿÿÿu\0ğ\0ğ\0ğ\0ÿÿ¦\0ğ\0ÿÿõ\0ÿÿv\0ÿÿÿÿÿÿÿÿò\0ÿÿÿÿÿÿÿÿğ\0x\0ò\0ò\0ò\0ÿÿÿÿò\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿò\0y\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ{\0ÿÿÿÿÿÿ\0ÿÿÿÿÿÿ\0ÿÿ}\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÃ\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿµ\0ÿÿÿÿ\0Ñ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0À\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÎ\0ÿÿÿÿÿÿÿÿÚ\0İ\0ÿÿÿÿÿÿÿÿÿÿæ\0ÿÿÿÿÿÿé\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿõ\0ÿÿÿÿÿÿÿÿÿÿê\0ÿÿÿÿÿÿÿÿÿÿÿÿë\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿì\0ÿÿÿÿÿÿÿÿÿÿí\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿğ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿò\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x06\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\b\0\f\0\0\0\0\0\0\0\x11\0!\0&\0+\0\0\0\0\0\0\0\0\0-\0\0\0\0\x001\x002\x003\0\x12\0\0\0\x14\0\0\0\0\0;\0\x16\0<\0\x17\0\0\0@\0\0\0\0\0K\0X\0Y\0\x12\0\0\0Z\0\0\0\0\0^\0g\0h\0i\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0v\0\0\0€\0\0\0\0\0\0\0\0\0\f\0‚\0‡\0\0”\0\0\0\0\0\0\0\0\0•\0\0Ÿ\0\x12\0¦\0¬\0\0\0\0\0»\0Á\0\r\0Ç\0 \0\x1f\0\0\0\0\0Ø\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0É\0\0\0\0\0\0\0\0\0\0\0K\0ã\0¶\0é\0ê\0\0\0\0\0\0\0\0\0\x01\0\0\0x\x01\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x14\0\x02\x01\0\0\0\0¸\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\x07\x01\0\0\0\0ø\0\0\0\0\0\0\0\0\0\0\0\0\0\x16\0\f\x01\0\0\0\0\r\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0\x14\x01\0\0\0\0\x12\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\x1c\x01\0\0\0\0!\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0,\x01\0\0\0\0-\x015\x01:\x01D\x01J\x01\0\0\0\0E\x01\0\0R\x01E\0!\x01\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\x1a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0O\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0~\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0~\0\0\0\0\0\0\0\x04\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0è\0è\0\0\0\x01\x01\x01\x01\x01\x01\x06\x01\x01\x01\x01\x01\0\0\0\0\x1c\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0)\0\0\0\0\0\0\0)\0\x1d\0\0\0\x1d\0\x1d\0\x1d\0)\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0—\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ÿ\0\0\0\0\0Ÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¬\0\0\0\0\0¬\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0¹\0\0\0\0\0¹\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Æ\0\0\0\0\0Æ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Ó\0\0\0\0\0Ó\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0à\0\0\0\0\0à\0\x17\0\x17\0\x17\0\x0b\x01\0\0\0\0\x19\x01\0\0\x19\x01…\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0V\0\x01\0\x01\0\x01\0\x01\0…\0\x01\0\x01\0…\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\n\0\x01\0\x01\0\n\0\0\0\n\0\n\0\0\0\n\0\n\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\n\0\x17\0\x01\0\n\0\n\0š\0§\0´\0\0\0\n\0\n\0\0\0\x01\0Á\0\0\0\x01\0\0\0Î\0\x01\0\x01\0\0\0\0\0\0\0\n\0\n\0\n\0\x01\0\n\0\n\0\x01\0\x17\x009\0Û\0\x17\0\0\0\0\0\0\0\0\0\0\0\x01\0\x17\0\x01\0\x01\0\x17\0\x01\0\0\0\0\0\n\0\n\0\x01\0\0\0\0\0\0\0\x17\0"\0\0\0\0\0"\0\0\0\0\0\0\0\x17\0\x01\0\x17\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`\0\0\0\x17\0`\0\x17\0"\0C\0\0\0\0\0C\0\0\0\0\0j\0\0\0…\0j\0\0\0…\0\0\0\0\0\0\0…\0…\0…\0…\0’\0…\0\0\0’\0C\0…\0\0\0\0\0…\0\0\0j\0…\0…\0\0\0…\0\0\0\0\x009\0V\0…\0\0\0…\0\x01\0e\0\0\0\x01\0V\0\0\0…\0V\0\0\0\0\0V\0\0\0…\0V\0V\0ˆ\0V\0V\0\x01\0V\0\0\0\x01\0\0\0V\0\0\0V\0V\0V\x000\0<\0Y\0\0\0V\0V\0\0\0\0\0\0\0\0\0V\0V\0\0\0\x01\0J\0J\0\x01\0\0\0\0\0\x01\0s\0‹\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0Y\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0¢\0\0\0\0\0¢\0\0\0¯\0\0\0\0\0¯\0\0\0¼\0\0\0\0\0¼\0\0\0\0\0\0\0\0\0É\0\0\0\0\0É\0\0\0¢\0\0\0\0\0Ö\0\0\0¯\0Ö\0\0\0\0\0\0\0¼\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0É\0ã\0\0\0\0\0ã\0\0\0\0\0\0\0Ö\0\0\0\n\0\n\0\0\0\n\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ã\0\n\0\n\0\0\0\n\0\x1d\0\0\0\n\0\n\0\n\0\n\0\x10\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x06\0\n\0\x0b\0\x06\0\n\0\x0b\0\f\0\x11\0\x14\0\f\0\x11\0\x14\0\x15\0\x15\0l\0\x15\0\x15\0\x19\0\x19\0e\0\x19\0\x19\0e\0\x06\0\n\0\x0b\0ÿÿÿÿÿÿ\f\0\x11\0\x14\0Œ\0\x1a\0\x1a\0\x15\0\x1a\0\x1a\0\x1b\0\x1b\0\x19\0\x1b\0\x1b\0\x1c\0\x1c\0!\0\x1c\0\x1c\0!\0$\0%\0&\0$\0%\0&\0)\0\x1a\0-\0/\0,\0.\0\x1b\0,\0.\x001\0o\0\x1c\x001\0!\0¥\0´\0¿\0$\0%\0&\x004\0ƒ\0Í\x004\0ƒ\0!\0Ù\0,\0.\0$\0%\0&\x001\x005\x006\x009\x005\x006\x009\0<\0Y\0å\0<\x004\x001\0ÿÿó\0ÿÿ=\0>\0?\0=\0>\0?\0ÿÿ4\x005\x006\x009\0ÿÿÿÿÿÿ<\0Q\0Q\0ÿÿQ\0Q\x005\x006\x009\0=\0>\0?\0S\0W\0Z\0S\0W\0Z\0ÿÿ[\0ÿÿ=\0[\0?\0Q\0X\0X\0\\0X\0X\0\\0]\0]\0b\0]\0]\0b\0ÿÿÿÿÿÿc\0c\0d\0c\0n\0d\0ÿÿn\0X\0f\0Q\0ÿÿf\0ÿÿ]\0g\0g\0ÿÿg\0ÿÿS\0W\0Z\0c\0ÿÿd\0…\0[\0©\0…\0j\0©\0f\0j\0X\0\\0k\0ÿÿg\0k\0]\0b\0m\0m\0}\0m\0ÿÿ}\0ÿÿc\0ÿÿd\0n\0j\0S\0W\0Z\0ÿÿf\0k\0r\0ÿÿÿÿr\0g\0m\0ÿÿ}\0X\0\\0„\0ÿÿÿÿ„\0]\0b\0†\0‡\0‡\0†\0‡\0ÿÿr\0ÿÿÿÿÿÿn\0ÿÿÿÿr\0r\0r\0¸\0„\0r\0¸\0ÿÿÿÿÿÿ†\0‡\0¦\0¦\0ÿÿ¦\0¦\0µ\0µ\0r\0µ\0µ\0À\0À\0Ã\0À\0À\0Ã\0ÿÿÑ\0Î\0Î\0Ñ\0Î\0Î\0¦\0ÿÿÿÿÚ\0Ú\0µ\0Ú\0Ú\0ÿÿİ\0À\0!\0İ\0ÿÿÿÿ$\0%\0&\0Î\0æ\0æ\0é\0æ\0æ\0é\0ÿÿÚ\0ÿÿê\0ê\x001\0ê\0ê\0ë\0ë\0ó\0ë\0ë\0ÿÿÿÿÿÿ4\0æ\0ì\0ì\0ğ\0ì\0ì\0ğ\0í\0í\0ê\0í\0í\x005\x006\0ë\0ÿÿò\0ÿÿÿÿò\0ÿÿÿÿÿÿÿÿì\0ğ\0ÿÿÿÿÿÿÿÿí\0ÿÿğ\0ğ\0ğ\0ÿÿÿÿğ\0ò\0ÿÿÿÿÿÿQ\0ÿÿÿÿò\0ò\0ò\0ÿÿÿÿò\0ğ\0S\0W\0Z\0ÿÿÿÿÿÿÿÿ[\0ÿÿÿÿÿÿÿÿò\0ÿÿX\0\\0ÿÿÿÿÿÿÿÿ]\0b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿn\0ÿÿÿÿÿÿÿÿ\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿ©\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿ\0r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿ¸\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ¦\0ÿÿÿÿÿÿÿÿµ\0ÿÿÿÿÿÿÿÿÀ\0Ã\0ÿÿÿÿÿÿÿÿÑ\0ÿÿÎ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÚ\0ÿÿÿÿÿÿÿÿİ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿæ\0é\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿê\0ÿÿÿÿÿÿÿÿë\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿì\0ğ\0ÿÿÿÿÿÿÿÿí\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿò\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "ÿ\x01ÿÿ\0\x01ÿ\x04ÿÿ\x03ÿ\x02ÿÿ\0\x03ÿ\0\x02\x01\x04ÿ\x02ÿÿ\0\x02ÿ\x05ÿ\x04ÿÿ\x06ÿ\x05ÿ\x04ÿÿ\x05ÿ\x06\x03\x04ÿÿ\x07\x04\x05ÿ\x06\x03\x04ÿÿ\x06\x03ÿ\x05ÿ\x06\x03\x07ÿÿ\x05ÿ\x04ÿ\x03ÿÿ\x07ÿ\x05ÿÿ\x02\x05\0\x03\x01\x04ÿ\x03\x06ÿ\x07\x04\x05ÿ\x04ÿÿ\x05ÿ\x06\x03ÿ\x03\x06\x04\x07ÿ\x06\x03\x05ÿ\x03ÿ\x04ÿÿ\b\x03\x03\x06\x06\b\x05ÿ\x07ÿÿ\x02\x05\0\x06\x01\x04ÿ\x05ÿÿ\x04\x07ÿ\x04\x07\x05ÿ\x07ÿÿ\x05ÿ\x04\x07ÿ\x01\x02ÿ\rÿ\fÿÿ\rÿÿ\fÿ\rÿÿ\x0fÿ\x0eÿÿ\x0fÿÿ\x0eÿ\x0fÿÿ\x11ÿ\x10ÿÿ\x11ÿÿ\x10ÿ\x11ÿÿ\x13ÿ\x12ÿÿ\x13ÿÿ\x12ÿ\x13ÿÿ\x15ÿ\x14ÿÿ\x15ÿÿ\x14ÿ\x15ÿÿ\x17ÿ\x16ÿÿ\x17ÿÿ\x16ÿ\x17ÿÿ\x04\x10\x05\x11\0\f\x01\r\b\x14\t\x15\n\x16\x0b\x17\x02\x0e\x03\x0f\x06\x12\x07\x13ÿ\0\x03\x01\x02ÿ\0\x05\x01\x04ÿ\x03\x05\x02ÿÿ\x03\x05\x02\x04\x05ÿ\x04ÿÿ\x03ÿÿ\x02ÿ\0\x03ÿ\x02\x04\x01\x05\0\x03ÿ"];

var
 ocamldep_output=
  function(source,lexbuf)
   {return __ocaml_lex_ocamldep_output_rec(source,lexbuf,0);};

var
 __ocaml_lex_ocamldep_output_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_ocamldep_output_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var k=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]+-1);
         
         var x=/* tuple */[0,k,space_sep_strings_nl(source,lexbuf)];
         
         return /* :: */[0,x,ocamldep_output(source,lexbuf)];
         
        case 1:return /* [] */0;
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting colon followed by space-separated module name list",
                    /* End_of_format */0],
                   "Expecting colon followed by space-separated module name list"]);
         
        }
      }
    };

var
 space_sep_strings_nl=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_space_sep_strings_nl_rec(source,lexbuf,6);
    };

var
 __ocaml_lex_space_sep_strings_nl_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_space_sep_strings_nl_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,word,space_sep_strings_nl(source,lexbuf)];
         
        case 1:Lexing["new_line"](lexbuf);return /* [] */0;
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting space-separated strings terminated with newline",
                    /* End_of_format */0],
                   "Expecting space-separated strings terminated with newline"]);
         
        }
      }
    };

var
 space_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_space_sep_strings_rec(source,lexbuf,12);
    };

var
 __ocaml_lex_space_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_space_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,word,space_sep_strings(source,lexbuf)];
         
        case 1:return /* [] */0;
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting space-separated strings",
                    /* End_of_format */0],
                   "Expecting space-separated strings"]);
         
        }
      }
    };

var
 blank_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_blank_sep_strings_rec(source,lexbuf,21);
    };

var
 __ocaml_lex_blank_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(4<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_blank_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return blank_sep_strings(source,lexbuf);
        case 1:exit=10;
        case 2:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,word,blank_sep_strings(source,lexbuf)];
         
        case 3:exit=10;
        case 4:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting blank-separated strings",
                    /* End_of_format */0],
                   "Expecting blank-separated strings"]);
         
        }
      }
    
    switch(exit){case 10:return /* [] */0;}
    };

var
 comma_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](5,-1);
    lexbuf[10][4]=lexbuf[6];
    lexbuf[10][3]=lexbuf[6];
    return __ocaml_lex_comma_sep_strings_rec(source,lexbuf,33);
    };

var
 __ocaml_lex_comma_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comma_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2]);
         
         return /* :: */[0,word,/* [] */0];
         
        case 1:
         var word$1=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,word$1,comma_sep_strings_aux(source,lexbuf)];
         
        case 2:return /* [] */0;
        case 3:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting comma-separated strings (1)",
                    /* End_of_format */0],
                   "Expecting comma-separated strings (1)"]);
         
        }
      }
    };

var
 comma_sep_strings_aux=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    return __ocaml_lex_comma_sep_strings_aux_rec(source,lexbuf,41);
    };

var
 __ocaml_lex_comma_sep_strings_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comma_sep_strings_aux_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,word,comma_sep_strings_aux(source,lexbuf)];
         
        case 1:return /* [] */0;
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting comma-separated strings (2)",
                    /* End_of_format */0],
                   "Expecting comma-separated strings (2)"]);
         
        }
      }
    };

var
 comma_or_blank_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](5,-1);
    lexbuf[10][4]=lexbuf[6];
    lexbuf[10][3]=lexbuf[6];
    return __ocaml_lex_comma_or_blank_sep_strings_rec(source,lexbuf,49);
    };

var
 __ocaml_lex_comma_or_blank_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comma_or_blank_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2]);
         
         return /* :: */[0,word,/* [] */0];
         
        case 1:
         var word$1=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,
                 word$1,
                 comma_or_blank_sep_strings_aux(source,lexbuf)];
         
        case 2:return /* [] */0;
        case 3:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting (comma|blank)-separated strings (1)",
                    /* End_of_format */0],
                   "Expecting (comma|blank)-separated strings (1)"]);
         
        }
      }
    };

var
 comma_or_blank_sep_strings_aux=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](3,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_comma_or_blank_sep_strings_aux_rec(source,lexbuf,57);
    };

var
 __ocaml_lex_comma_or_blank_sep_strings_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {return __ocaml_lex_state$1!==3
              ?(lexbuf[1](lexbuf),
                __ocaml_lex_comma_or_blank_sep_strings_aux_rec
                 (source,lexbuf,__ocaml_lex_state$1))
              :error
                (source,
                 lexbuf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "Expecting (comma|blank)-separated strings (2)",
                   /* End_of_format */0],
                  "Expecting (comma|blank)-separated strings (2)"]);
      }
    else
     {if(__ocaml_lex_state$1>=2)
       {return /* [] */0;}
      else
       {var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
        
        return /* :: */[0,word,comma_or_blank_sep_strings_aux(source,lexbuf)];
        }
      }
    };

var
 parse_environment_path_w=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_w_rec(source,lexbuf,65);};

var
 __ocaml_lex_parse_environment_path_w_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_w_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]);
         
         return /* :: */[0,word,parse_environment_path_aux_w(source,lexbuf)];
         
        case 1:
         var word$1=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+1,lexbuf[6]);
         
         return /* :: */[0,
                 "",
                 /* :: */[0,
                  word$1,
                  parse_environment_path_aux_w(source,lexbuf)]];
         
        case 2:return /* [] */0;
        }
      }
    };

var
 parse_environment_path_aux_w=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_aux_w_rec(source,lexbuf,69);};

var
 __ocaml_lex_parse_environment_path_aux_w_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_aux_w_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+1,lexbuf[6]);
         
         return /* :: */[0,word,parse_environment_path_aux_w(source,lexbuf)];
         
        case 1:return /* [] */0;
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Impossible: expecting colon-separated strings",
                    /* End_of_format */0],
                   "Impossible: expecting colon-separated strings"]);
         
        }
      }
    };

var
 parse_environment_path=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_rec(source,lexbuf,73);};

var
 __ocaml_lex_parse_environment_path_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]);
         
         return /* :: */[0,word,parse_environment_path_aux(source,lexbuf)];
         
        case 1:
         var word$1=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+1,lexbuf[6]);
         
         return /* :: */[0,
                 "",
                 /* :: */[0,word$1,parse_environment_path_aux(source,lexbuf)]];
         
        case 2:return /* [] */0;
        }
      }
    };

var
 parse_environment_path_aux=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_aux_rec(source,lexbuf,77);};

var
 __ocaml_lex_parse_environment_path_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_aux_rec
              (source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+1,lexbuf[6]);
         
         return /* :: */[0,word,parse_environment_path_aux(source,lexbuf)];
         
        case 1:return /* [] */0;
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Impossible: expecting colon-separated strings",
                    /* End_of_format */0],
                   "Impossible: expecting colon-separated strings"]);
         
        }
      }
    };

var
 conf_lines=
  function(dir,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](9,-1);
    lexbuf[10][4]=lexbuf[6];
    return __ocaml_lex_conf_lines_rec(dir,source,lexbuf,81);
    };

var
 __ocaml_lex_conf_lines_rec=
  function(dir,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(5<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_conf_lines_rec(dir,source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:exit=42;
        case 1:exit=43;
        case 2:exit=42;
        case 3:exit=43;
        case 4:
         var k=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2]);
         
         var s1=Lexing["sub_lexeme"](lexbuf,lexbuf[10][2],lexbuf[10][3]);
         
         var s2=Lexing["sub_lexeme"](lexbuf,lexbuf[10][3]+1,lexbuf[6]);
         
         var bexpr;
         try
          {bexpr=Glob["parse"](dir,k);}
         catch(exn)
          {bexpr=
           error
            (source,
             lexbuf,
             [/* Format */0,
              [/* String_literal */11,
               "Invalid globbing pattern ",
               [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
              "Invalid globbing pattern %S"],
             k,
             Printexc["to_string"](exn));
           }
         
         sublex(count_lines(lexbuf),s1);
         sublex(count_lines(lexbuf),s2);
         var v1=conf_value(empty,source,lexbuf);
         
         var v2=conf_values(v1,source,lexbuf);
         
         var rest=conf_lines(dir,source,lexbuf);
         
         return /* :: */[0,/* tuple */[0,bexpr,v2],rest];
         
        case 5:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Invalid line syntax",
                    /* End_of_format */0],
                   "Invalid line syntax"]);
         
        }
      }
    
    switch(exit)
     {case 42:Lexing["new_line"](lexbuf);return conf_lines(dir,source,lexbuf);
      case 43:return /* [] */0;
      }
    };

var
 conf_value=
  function(x,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](3,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_conf_value_rec(x,source,lexbuf,111);
    };

var
 __ocaml_lex_conf_value_rec=
  function(x,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_conf_value_rec(x,source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var tag=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+1,lexbuf[6]);
         
         return /* record */[0,
                 x[1],
                 /* :: */[0,locate(source,lexbuf,tag),x[2]]];
         
        case 1:
         var tag$1=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* record */[0,
                 /* :: */[0,locate(source,lexbuf,tag$1),x[1]],
                 x[2]];
         
        case 2:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Invalid tag modifier only '+ or '-' are allowed as prefix for tag",
                    /* End_of_format */0],
                   "Invalid tag modifier only '+ or '-' are allowed as prefix for tag"]);
         
        }
      }
    };

var
 conf_values=
  function(x,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_conf_values_rec(x,source,lexbuf,125);
    };

var
 __ocaml_lex_conf_values_rec=
  function(x,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_conf_values_rec(x,source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var s1=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[10][1]);
         
         var s2=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1]+1,lexbuf[6]);
         
         sublex(count_lines(lexbuf),s1);
         sublex(count_lines(lexbuf),s2);
         return conf_values(conf_value(x,source,lexbuf),source,lexbuf);
         
        case 1:Lexing["new_line"](lexbuf);return x;
        case 2:return x;
        case 3:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Only ',' separated tags are alllowed",
                    /* End_of_format */0],
                   "Only ',' separated tags are alllowed"]);
         
        }
      }
    };

var
 path_scheme=
  function(patt_allowed,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    return __ocaml_lex_path_scheme_rec(patt_allowed,source,lexbuf,138);
    };

var
 __ocaml_lex_path_scheme_rec=
  function(patt_allowed,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(5<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_path_scheme_rec
              (patt_allowed,source,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var prefix=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[6]);
         
         return /* :: */[0,
                 /* `Word */[0,970337770,prefix],
                 path_scheme(patt_allowed,source,lexbuf)];
         
        case 1:
         var $$var=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+2,lexbuf[6]+-1);
         
         return /* :: */[0,
                 /* `Var */[0,4298439,/* tuple */[0,$$var,/* True */0]],
                 path_scheme(patt_allowed,source,lexbuf)];
         
        case 2:
         var $$var$1=Lexing["sub_lexeme"](lexbuf,lexbuf[5]+2,lexbuf[10][1]);
         
         var patt=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1]+1,lexbuf[6]+-1);
         
         if(patt_allowed)
          {var
            patt$1=
             My_std["String"][14]($$unescape(Lexing["from_string"](patt)));
           
           return /* :: */[0,
                   /* `Var */[0,
                    4298439,
                    /* tuple */[0,$$var$1,Glob["parse"](/* None */0,patt$1)]],
                   path_scheme(patt_allowed,source,lexbuf)];
           }
         else
          {return error
                   (source,
                    lexbuf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "Patterns are not allowed in this pathname (",
                      [/* Char_literal */12,
                       37,
                       [/* Char_literal */12,
                        40,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          58,
                          [/* String */2,
                           /* No_padding */0,
                           [/* String_literal */11,
                            ") only in ~prod)",
                            /* End_of_format */0]]]]]]],
                     "Patterns are not allowed in this pathname (%%(%s:%s) only in ~prod)"],
                    $$var$1,
                    patt);
           }
         
        case 3:
         return /* :: */[0,
                 [/* `Var */0,4298439,[/* tuple */0,"",/* True */0]],
                 path_scheme(patt_allowed,source,lexbuf)];
         
        case 4:return /* [] */0;
        case 5:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Bad pathanme scheme",
                    /* End_of_format */0],
                   "Bad pathanme scheme"]);
         
        }
      }
    };

var $$unescape=function(lexbuf){return __ocaml_lex_unescape_rec(lexbuf,147);};

var
 __ocaml_lex_unescape_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_unescape_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+1);
         
         return /* :: */[0,c,$$unescape(lexbuf)];
         
        case 1:
         var c$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         return /* :: */[0,c$1,$$unescape(lexbuf)];
         
        case 2:return /* [] */0;
        }
      }
    };

var
 ocamlfind_query=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](24,-1);
    return __ocaml_lex_ocamlfind_query_rec(source,lexbuf,152);
    };

var
 __ocaml_lex_ocamlfind_query_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!==0)
     {return __ocaml_lex_state$1!==1
              ?(lexbuf[1](lexbuf),
                __ocaml_lex_ocamlfind_query_rec
                 (source,lexbuf,__ocaml_lex_state$1))
              :error
                (source,
                 lexbuf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "Bad ocamlfind query",
                   /* End_of_format */0],
                  "Bad ocamlfind query"]);
      }
    else
     {var n=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2]);
      
      var d=Lexing["sub_lexeme"](lexbuf,lexbuf[10][3],lexbuf[10][4]);
      
      var v=Lexing["sub_lexeme"](lexbuf,lexbuf[10][5],lexbuf[10][6]);
      
      var a=Lexing["sub_lexeme"](lexbuf,lexbuf[10][7],lexbuf[10][8]);
      
      var lo=Lexing["sub_lexeme"](lexbuf,lexbuf[10][9],lexbuf[10][10]);
      
      var l=Lexing["sub_lexeme"](lexbuf,lexbuf[10][11],lexbuf[10][12]);
      
      return /* tuple */[0,n,d,v,a,lo,l];
      }
    };

var
 trim_blanks=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](6,-1);
    lexbuf[10][4]=lexbuf[6];
    lexbuf[10][3]=lexbuf[6];
    return __ocaml_lex_trim_blanks_rec(source,lexbuf,234);
    };

var
 __ocaml_lex_trim_blanks_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    return __ocaml_lex_state$1!==0
            ?__ocaml_lex_state$1!==1
              ?(lexbuf[1](lexbuf),
                __ocaml_lex_trim_blanks_rec(source,lexbuf,__ocaml_lex_state$1))
              :error
                (source,
                 lexbuf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "Bad input for trim_blanks",
                   /* End_of_format */0],
                  "Bad input for trim_blanks"])
            :Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2]);
    };

var
 tag_gen=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](6,-1);
    return __ocaml_lex_tag_gen_rec(source,lexbuf,240);
    };

var
 __ocaml_lex_tag_gen_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!==0)
     {return __ocaml_lex_state$1!==1
              ?(lexbuf[1](lexbuf),
                __ocaml_lex_tag_gen_rec(source,lexbuf,__ocaml_lex_state$1))
              :error
                (source,
                 lexbuf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "Not a valid parametrized tag",
                   /* End_of_format */0],
                  "Not a valid parametrized tag"]);
      }
    else
     {var name=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[10][1]);
      
      var param=Lexing["sub_lexeme_opt"](lexbuf,lexbuf[10][3],lexbuf[10][2]);
      
      return /* tuple */[0,name,param];
      }
    };

var
 count_lines=
  function(lb,lexbuf){return __ocaml_lex_count_lines_rec(lb,lexbuf,245);};

var
 __ocaml_lex_count_lines_rec=
  function(lb,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_count_lines_rec(lb,lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return count_lines(lb,lexbuf);
        case 1:Lexing["new_line"](lb);return count_lines(lb,lexbuf);
        case 2:return /* () */0;
        }
      }
    };

module["exports"]=
{"Error":$$Error,
 "ocamldep_output":ocamldep_output,
 "space_sep_strings":space_sep_strings,
 "blank_sep_strings":blank_sep_strings,
 "comma_sep_strings":comma_sep_strings,
 "comma_or_blank_sep_strings":comma_or_blank_sep_strings,
 "trim_blanks":trim_blanks,
 "parse_environment_path":parse_environment_path,
 "parse_environment_path_w":parse_environment_path_w,
 "conf_lines":conf_lines,
 "path_scheme":path_scheme,
 "ocamlfind_query":ocamlfind_query,
 "tag_gen":tag_gen};

