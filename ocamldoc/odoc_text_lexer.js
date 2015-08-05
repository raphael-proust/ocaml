// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Buffer=require("Buffer");
var Lexing=require("Lexing");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");


var line_number=[0,0];

var char_number=[0,0];

var string_buffer=Buffer["create"](32);

var
 reset_string_buffer=
  function(param){return Buffer["reset"](string_buffer);};

var ajout_char_string=Buffer["add_char"](string_buffer);

var ajout_string=Buffer["add_string"](string_buffer);

var lecture_string=function(param){return Buffer["contents"](string_buffer);};

var description=[0,""];

var blank="[ \r\t\f]";

var open_brackets=[0,0];

var verb_mode=[0,0];

var target_mode=[0,0];

var shortcut_list_mode=[0,0];

var ele_ref_mode=[0,0];

var code_pre_mode=[0,0];

var
 init=
  function(param)
   {open_brackets[1]=0,0;
    verb_mode[1]=0,0;
    target_mode[1]=0,0;
    shortcut_list_mode[1]=0,0;
    ele_ref_mode[1]=0,0;
    code_pre_mode[1]=0,0;
    line_number[1]=0,0;
    return char_number[1]=0,0;
    };

var
 incr_cpts=
  function(lexbuf)
   {var s=Lexing["lexeme"](lexbuf);
    
    var l=Str["split_delim"](Str["regexp_string"]("\n"),s);
    
    var match=List["rev"](l);
    
    if(match)
     {var s2=match[1];
      
      if(match[2])
       {line_number[1]=line_number[1]+(List["length"](l)-1),0;
        return char_number[1]=s2["length"],0;
        }
      else
       {return char_number[1]=char_number[1]+s2["length"],0;}
      }
    else
     {return 0;}
    };

var
 __ocaml_lex_tables=
  [0,
   "\0\0ÎÿÑÿ\0\0\x06\0\x01\0\x01\0\x02\0S\0\0\0şÿ\x13\0ÿÿ\x01\0\x01\0\x05\0\x12\0\0\0\x01\0Ÿ\0™\0”\0\x02\0\x06\0\x07\0¿\0\x02\0\x03\0ß\0\x06\0\x07\0\b\0\x03\0\x0b\0\x06\0J\0A\0\x10\0•\0\x12\0ëÿî\0ıÿüÿûÿ™\0\0‹\0Ÿ\0”\0\x16\0öÿ¢\0\x18\0\x1a\0óÿ!\0òÿ\"\0ñÿı\0o\x01\x01\x07\0ì\x01\x01\x007\x02‚\x02Í\x02?\x03±\x03#\x04\x0b\0\x10\0•\x04\0\0\x07\x05y\x05ë\x05Å\x057\x06©\x06úÿùÿøÿ÷ÿõÿôÿ\x1b\x07\x07ÿ\x07ïÿM\bt\x01ğÿ\x05\0êÿ\x1f\0\0\0\x01\0\x1d\0}\0{\0\x1a\x007\0Š\0\x03\0çÿİ\0†\b¨\0À\0¾\0¿\0R\x01Î\0Ü\0İ\x01İ\0Ş\0ê\0ê\0å\0ö\0ê\0ù\0Î\0\x01\0‰\x01åÿÍ\0ø\0@\x01D\x03äÿ\x1c\x01'\x01(\x01 \x01\x1e\x010\x01-\x01/\x01d\x01I\x03ãÿ:\x017\x01C\x01>\x01A\x01‘\x01N\x03âÿX\x01i\x01Z\x01q\x01\x7f\x01‡\x01³\x01´\x01Y\x03áÿ^\x03Øÿ€\x01\x01º\x01¶\x03àÿ’\x01\x01™\x01Ä\x01»\x03Üÿ‘\x01¢\x01’\x01“\x01&\x03\x01À\x03ßÿ˜\x01¤\x01Ğ\x01Ë\x03Şÿ¤\x01¤\x01à\x01Ğ\x03Ùÿ³\x01¶\x01À\x01È\x01¶\x01¸\x01â\x01\x0e\x02(\x04İÿæ\x01Ö\x01ã\x01\x02\x02\x04\x029\x02-\x04Ûÿ\x11\x02\x0f\x02\r\x02\x12\x02&\x02/\x02Z\x022\x04Úÿ1\x021\x02\x1f\x02P\x02T\x02K\x02K\x02C\x02×ÿÖÿîÿ\x05\0íÿ~\x02s\x02Ä\x02Ä\x02Ÿ\x02èÿ=\x04\x02\0\x03\0¤\x04a\x02ÕÿÔÿÓÿB\x04",
   "ÿÿÿÿÿÿ1\x001\0\x14\0\x13\x001\x000\x001\0ÿÿ1\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ/\0/\0\x19\0\x16\0ÿÿÿÿ/\0/\0/\0/\0/\0/\0\b\0\x07\0/\0ÿÿ/\0/\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\f\0\r\0/\0ÿÿÿÿ\x0f\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x19\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1a\0ÿÿÿÿÿÿÿÿ\x1b\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1c\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1d\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1e\0ÿÿ'\0ÿÿÿÿÿÿÿÿ\x1f\0ÿÿÿÿÿÿÿÿÿÿ#\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ \0ÿÿÿÿÿÿÿÿ!\0ÿÿÿÿÿÿÿÿ&\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\"\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ$\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ%\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ-\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "\x01\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0ÿÿÿÿÿÿ\0\0ÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\0\0ÿÿ",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\x04\0\0\0\x03\0\x03\0\0\0ô\0ñ\0\0\0ô\0ô\0U\0U\0\0\0U\0U\0T\0T\0\0\0T\0T\0\0\0\0\0\x03\0;\0ø\0÷\0\0\0\x07\0ô\0\0\0\0\0\0\0\0\0U\0\0\0\0\0\0\0\x14\0T\0ò\0m\0ó\0ë\0\0\0\0\0\0\0\0\0\0\0R\0€\0\t\0é\0,\0+\0\n\0\n\0\x12\0\x10\0\n\0\n\0\n\0&\0\x13\0\x11\0:\0\x1f\0\r\x008\0\n\0\x0e\0(\x006\0\x1e\0\x1d\x003\0\x0f\0\x06\0.\x007\0\"\0#\0\x06\0\x0b\0\x05\0ê\x009\0;\0-\0\x12\0\x10\0_\0Õ\0Í\0&\0\x13\0\x11\0:\0\x1f\0\r\x008\0\f\0\x0e\0\f\x006\0\x1e\0\x1d\0>\0\x0f\0õ\0.\0@\0\"\0#\0\b\0õ\0\n\0ğ\0è\0A\0-\0`\0N\0N\0N\0N\0N\0N\0N\0N\0N\0N\0Ş\0\f\0$\0\f\0Ã\0‡\0%\0<\0<\0G\0<\0<\0<\0<\0<\0<\0<\0<\0F\0<\0<\0<\0<\0<\0E\0<\0<\0<\0<\0<\0<\0<\0<\0?\0$\0‚\0I\0H\0%\0<\0M\0<\0<\0J\0<\0<\0<\0L\0<\0<\0B\0<\0<\0C\0<\0<\0<\0<\0<\0D\0=\0<\0<\0<\0<\0K\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0!\0'\0\x1b\0\x15\x004\0/\x000\0š\0\x19\0\x1a\0 \x001\0\x16\x002\x005\0\x17\0²\0›\0~\0±\0y\0\x18\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0!\0'\0\x1b\0\x15\x004\0/\x000\0\x02\0\x19\0\x1a\0 \x001\0\x16\x002\x005\0\x17\0x\0w\0v\0k\0y\0\x18\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0j\0k\0k\0k\0\n\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0k\0x\0w\0v\0*\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0k\0z\0{\0\x7f\0|\0}\0ƒ\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0z\0{\0k\0|\0}\0„\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0ç\0ç\0…\0ç\0ç\0^\0^\0ˆ\0^\0^\0u\0u\0u\0u\0u\0u\0u\0u\0u\0u\0’\0Š\0‹\0ç\0‰\0Œ\0\0\0^\0\0\0l\0l\0\0l\0l\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0“\0”\0•\0–\0l\0—\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0j\0˜\0«\0œ\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0¦\0Ÿ\0 \0¢\0¤\0d\0§\0e\0¨\0g\0©\0[\0[\0a\0[\0[\0¬\0f\0­\0®\0¯\0¾\0b\0c\0h\0³\0i\0´\0µ\0¹\0º\0»\0¼\0k\0[\0u\0u\0u\0u\0u\0u\0u\0u\0u\0u\0¿\0À\0\\0Á\0k\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0¡\0Ä\0Å\0Æ\0Ç\0È\0É\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0Ê\0Ë\0Î\0Ï\0\\0Ğ\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0Ñ\0Ò\0Ó\0Ö\0×\0Ø\0Ù\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0Ú\0Û\0Ü\0ß\0à\0á\0<\0<\0<\0<\0<\0<\0<\0<\0Z\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0â\0ã\0ä\0å\0æ\0ì\0í\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0ê\0ö\0\0\0\0\0ì\0í\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0Y\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0î\0ï\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0î\0ï\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0X\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0W\0W\0\0\0W\0W\0†\0†\0\0\0†\0†\0‘\0‘\0\0\0‘\0‘\0™\0™\0\0\0™\0™\0\0\0\0\0\0\0W\0·\0\0\0£\0£\0†\0£\0£\0¥\0¥\0‘\0¥\0¥\0\0\0\0\0™\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0£\0\0\0\0\0\0\0\0\0¥\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0¶\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0V\0V\0\0\0V\0V\0ª\0ª\0\0\0ª\0ª\0°\0°\0\0\0°\0°\0¸\0¸\0\0\0¸\0¸\0\0\0\0\0\0\0V\0\0\0\0\0½\0½\0ª\0½\0½\0Â\0Â\0°\0Â\0Â\0\0\0\0\0¸\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0½\0\0\0\0\0\0\0\0\0Â\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\x003\x003\0\0\x003\x003\0Ì\0Ì\0\0\0Ì\0Ì\0Ô\0Ô\0\0\0Ô\0Ô\0İ\0İ\0\0\0İ\0İ\0\0\0\0\0\0\x003\0\0\0\0\0ù\0ñ\0Ì\0ù\0ù\0ù\0ñ\0Ô\0ù\0ù\0\0\0\0\0İ\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0ù\0\0\0\0\0\0\0\0\0ù\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0S\0S\0\0\0S\0S\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ô\0ñ\0\0\0ô\0ô\0\0\0\0\0\0\0S\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ô\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0ò\0\0\0ó\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0,\0,\0\0\0,\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0+\0+\0\0\0+\0+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0*\0*\0\0\0*\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0N\0N\0N\0N\0N\0N\0N\0N\0N\0N\0O\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0*\0*\0\0\0*\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0Q\0\0\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0*\0*\0\0\0*\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0Q\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\x007\x007\0\0\x007\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\x009\x009\0\0\x009\x009\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x009\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0;\0;\0\0\0;\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\\0\0\0\0\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\0\0\0\0\0\0\0\0\\0\0\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0t\0n\0\0\0\0\0\0\0\0\0r\0s\0\0\0\0\0o\0\0\0\0\0p\0\0\0\0\0\0\0\0\0\0\0q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0t\0n\0\0\0\0\0\0\0\0\0r\0s\0\0\0\0\0o\0\0\0\0\0p\0\0\0\0\0\0\0\0\0\0\0q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   'ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0ÿÿ\x04\0\x04\0ÿÿ\x04\0\x04\0H\0H\0ÿÿH\0H\0I\0I\0ÿÿI\0I\0ÿÿÿÿ\0\0A\0ò\0ó\0ÿÿ\0\0\x04\0ÿÿÿÿÿÿÿÿH\0ÿÿÿÿÿÿ\t\0I\0\x04\0j\0\x04\0é\0ÿÿÿÿÿÿÿÿÿÿK\0\x7f\0\0\0\x06\0\x11\0\x12\0\x1a\0\x1b\0\t\0\t\0\x1d\0\x1e\0\x1f\0 \0\t\0\t\0\r\0\x16\0\t\0\x0e\0%\0\t\0\'\0\x0f\0\x17\0\x18\x002\0\t\x005\0\x10\x006\0!\0"\0\0\0\0\0\0\0\x06\x008\0:\0\x10\0\t\0\t\0?\0b\0c\0 \0\t\0\t\0\r\0\x16\0\t\0\x0e\0\x0b\0\t\0\x0b\0\x0f\0\x17\0\x18\0\b\0\t\0\x03\0\x10\0\b\0!\0"\0\0\0\x04\0\0\0\x05\0\x07\0\b\0\x10\0_\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0a\0\x0b\0#\0\x0b\0d\0g\0$\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0#\0h\0\b\0\b\0$\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x15\0&\0\x14\0\x14\0-\0.\0/\0f\0\x14\0\x14\0\x15\x000\0\x14\x001\x004\0\x14\0e\0f\0i\0e\0n\0\x14\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x15\0&\0\x14\0\x14\0-\0.\0/\0\0\0\x14\0\x14\0\x15\x000\0\x14\x001\x004\0\x14\0o\0p\0q\0s\0n\0\x14\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0l\0t\0v\0w\0\x1c\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0x\0o\0p\0q\0)\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0}\0y\0z\0~\0{\0|\0‚\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0y\0z\0l\0{\0|\0ƒ\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0=\0=\0„\0=\0=\0]\0]\0‡\0]\0]\0r\0r\0r\0r\0r\0r\0r\0r\0r\0r\0ˆ\0‰\0Š\0=\0‡\0‹\0€\0€\0]\0€\0€\0>\0>\0Œ\0>\0>\0\0\0\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0€\0’\0“\0”\0•\0>\0–\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0>\0—\0š\0›\0œ\0œ\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0\0\0Ÿ\0 \0¡\0>\0¦\0>\0§\0>\0¨\0@\0@\0>\0@\0@\0«\0>\0¬\0­\0®\0±\0>\0>\0>\0²\0>\0³\0´\0¶\0¹\0º\0»\0>\0@\0u\0u\0u\0u\0u\0u\0u\0u\0u\0u\0¾\0¿\0@\0À\0u\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0 \0Ã\0Ä\0Å\0Æ\0Ç\0È\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0É\0Ê\0Í\0Î\0@\0Ï\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0Ğ\0Ñ\0Ò\0Õ\0Ö\0×\0Ø\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0Ù\0Ú\0Û\0Ş\0ß\0à\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0á\0â\0ã\0ä\0å\0ë\0ì\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0ï\0õ\0ÿÿÿÿë\0ì\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0ÿÿí\0î\0ÿÿÿÿÿÿÿÿD\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0í\0î\0ÿÿÿÿÿÿÿÿD\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0E\0E\0ÿÿE\0E\0…\0…\0ÿÿ…\0…\0\0\0ÿÿ\0\0˜\0˜\0ÿÿ˜\0˜\0ÿÿÿÿÿÿE\0µ\0ÿÿ¢\0¢\0…\0¢\0¢\0¤\0¤\0\0¤\0¤\0ÿÿÿÿ˜\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0¢\0ÿÿÿÿÿÿÿÿ¤\0ÿÿE\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0µ\0ÿÿÿÿÿÿÿÿÿÿE\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0F\0F\0ÿÿF\0F\0©\0©\0ÿÿ©\0©\0¯\0¯\0ÿÿ¯\0¯\0·\0·\0ÿÿ·\0·\0ÿÿÿÿÿÿF\0ÿÿÿÿ¼\0¼\0©\0¼\0¼\0Á\0Á\0¯\0Á\0Á\0ÿÿÿÿ·\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0¼\0ÿÿÿÿÿÿÿÿÁ\0ÿÿF\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0ÿÿÿÿÿÿÿÿÿÿÿÿF\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0G\0G\0ÿÿG\0G\0Ë\0Ë\0ÿÿË\0Ë\0Ó\0Ó\0ÿÿÓ\0Ó\0Ü\0Ü\0ÿÿÜ\0Ü\0ÿÿÿÿÿÿG\0ÿÿÿÿñ\0ñ\0Ë\0ñ\0ñ\0ù\0ù\0Ó\0ù\0ù\0ÿÿÿÿÜ\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0ñ\0ÿÿÿÿÿÿÿÿù\0ÿÿG\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0ÿÿÿÿÿÿÿÿÿÿÿÿG\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0J\0J\0ÿÿJ\0J\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿô\0ô\0ÿÿô\0ô\0ÿÿÿÿÿÿJ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿô\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0ô\0ÿÿô\0ÿÿÿÿÿÿÿÿJ\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0ÿÿÿÿÿÿÿÿÿÿÿÿJ\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0L\0L\0ÿÿL\0L\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿL\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿL\0L\0L\0L\0L\0L\0L\0L\0L\0L\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿL\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0ÿÿÿÿÿÿÿÿÿÿÿÿL\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0M\0M\0ÿÿM\0M\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿM\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿM\0M\0M\0M\0M\0M\0M\0M\0M\0M\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿM\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0ÿÿÿÿÿÿÿÿÿÿÿÿM\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0N\0N\0ÿÿN\0N\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿN\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿN\0N\0N\0N\0N\0N\0N\0N\0N\0N\0N\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0P\0P\0ÿÿP\0P\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿP\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿP\0P\0P\0P\0P\0P\0P\0P\0P\0P\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿP\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0ÿÿÿÿÿÿÿÿP\0ÿÿP\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0Q\0Q\0ÿÿQ\0Q\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿQ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿQ\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿQ\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0ÿÿÿÿÿÿÿÿQ\0ÿÿQ\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0X\0X\0ÿÿX\0X\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿX\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿX\0X\0X\0X\0X\0X\0X\0X\0X\0X\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿX\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0ÿÿÿÿÿÿÿÿÿÿÿÿX\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0Y\0Y\0ÿÿY\0Y\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿY\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿY\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿY\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0ÿÿÿÿÿÿÿÿÿÿÿÿY\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Z\0Z\0ÿÿZ\0Z\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿZ\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0ÿÿÿÿÿÿÿÿÿÿÿÿZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0\\0ÿÿÿÿ\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0ÿÿÿÿÿÿÿÿÿÿÿÿ\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0ÿÿÿÿÿÿÿÿ\\0ÿÿ\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0m\0m\0ÿÿÿÿÿÿÿÿm\0m\0ÿÿÿÿm\0ÿÿÿÿm\0ÿÿÿÿÿÿÿÿÿÿm\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿm\0m\0ÿÿÿÿÿÿÿÿm\0m\0ÿÿÿÿm\0ÿÿÿÿm\0ÿÿÿÿÿÿÿÿÿÿm\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ',
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
    
    if(49<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:
         incr_cpts(lexbuf);
         var s=Lexing["lexeme"](lexbuf);
         
         return [3,$$String["sub"](s,1,1)];
         
        case 1:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(ele_ref_mode[1])
            {var match=(ele_ref_mode[1]=0,0);}
           else
            {var match=0;}
           
           return 0;
           }
         
        case 2:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {var s$1=Lexing["lexeme"](lexbuf);
           
           try
            {if(s$1[0]=60)
              {var match$1=[0,2,s$1["length"]-3];
               
               var s2=$$String["sub"](s$1,match$1[1],match$1[2]);
               
               return [0,[0,"unknown primitive:caml_int_of_string",0]];
               }
             else
              {var match$2=[0,1,s$1["length"]-2];
               
               var l=match$2[2];
               
               var s2$1=$$String["sub"](s$1,match$2[1],l);
               
               try
                {var i=$$String["index"](s2$1,58);
                 
                 var s_n=$$String["sub"](s2$1,0,i);
                 
                 var s_label=$$String["sub"](s2$1,i+1,l-i-1);
                 
                 return [0,
                         [0,"unknown primitive:caml_int_of_string",[0,s_label]]];
                 }
               catch(exn)
                {if(exn=Not_found)
                  {return [0,[0,"unknown primitive:caml_int_of_string",0]];}
                 else
                  {throw exn;}
                 }
               }
             }
           catch(exn$1){return [0,[0,1,0]];}
           }
         
        case 3:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 1;}
         
        case 4:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 6;}
         
        case 5:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 10;}
         
        case 6:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 2;}
         
        case 7:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 36;}
         
        case 8:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 37;}
         
        case 9:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 3;}
         
        case 10:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 4;}
         
        case 11:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 5;}
         
        case 12:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 7;}
         
        case 13:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 8;}
         
        case 14:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 9;}
         
        case 15:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {var s$2=Lexing["lexeme"](lexbuf);
           
           var p1=$$String["index"](s$2,37);
           
           var p2=$$String["index"](s$2,58);
           
           var fmt=$$String["sub"](s$2,p1+1,p2-p1-1);
           
           target_mode[1]=1,0;
           return [2,fmt];
           }
         
        case 16:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {target_mode[1]=1,0;return 17;}
         
        case 17:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           open_brackets[1]>=
           1||
           code_pre_mode[1]||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {target_mode[1]=0,0;return 18;}
         
        case 18:exit=21;
        case 19:
         incr_cpts(lexbuf);
         if(verb_mode[1]||target_mode[1]||code_pre_mode[1]||ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(open_brackets[1]<=0)
            {open_brackets[1]=1,0;return 11;}
           else
            {open_brackets[0]++;return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 20:
         incr_cpts(lexbuf);
         if(verb_mode[1]||target_mode[1]||code_pre_mode[1]||ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(open_brackets[1]>1)
            {open_brackets[0]--;return [3,"]"];}
           else
            {open_brackets[1]=0,0;return 12;}
           }
         
        case 21:exit=21;
        case 22:
         incr_cpts(lexbuf);
         if(verb_mode[1]||target_mode[1]||code_pre_mode[1]||ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {code_pre_mode[1]=1,0;return 13;}
         
        case 23:
         incr_cpts(lexbuf);
         if(verb_mode[1]||target_mode[1]||ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(open_brackets[1]>=1)
            {lexbuf[6]=lexbuf[6]-1,0;
             var init$1=lexbuf[12];
             
             lexbuf[12]=[0,init$1[1],init$1[2],init$1[3],lexbuf[12][4]-1],0;
             char_number[0]--;
             if(open_brackets[1]>1)
              {open_brackets[0]--;return [3,"]"];}
             else
              {open_brackets[1]=0,0;return 12;}
             }
           else
            {if(code_pre_mode[1])
              {code_pre_mode[1]=0,0;return 14;}
             else
              {return [3,Lexing["lexeme"](lexbuf)];}
             }
           }
         
        case 24:exit=21;
        case 25:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 20;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 26:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 21;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 27:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 22;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 28:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 23;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 29:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 24;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 30:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 25;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 31:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 26;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 32:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 27;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 33:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 28;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 34:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 29;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 35:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 30;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 36:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 31;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 37:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 32;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 38:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 33;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 39:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {ele_ref_mode[1]=1,0;return 34;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 40:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(!ele_ref_mode[1])
            {return 35;}
           else
            {return [3,Lexing["lexeme"](lexbuf)];}
           }
         
        case 41:
         incr_cpts(lexbuf);
         if
          (target_mode[1]||
           open_brackets[1]>=
           1||
           code_pre_mode[1]||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {verb_mode[1]=1,0;return 15;}
         
        case 42:
         incr_cpts(lexbuf);
         if
          (target_mode[1]||
           open_brackets[1]>=
           1||
           code_pre_mode[1]||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {verb_mode[1]=0,0;return 16;}
         
        case 43:
         incr_cpts(lexbuf);
         if
          (target_mode[1]||
           open_brackets[1]>=
           1||
           code_pre_mode[1]||
           ele_ref_mode[1]||
           verb_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(shortcut_list_mode[1])
            {return 40;}
           else
            {shortcut_list_mode[1]=1,0;return 38;}
           }
         
        case 44:
         incr_cpts(lexbuf);
         if
          (target_mode[1]||
           open_brackets[1]>=
           1||
           code_pre_mode[1]||
           ele_ref_mode[1]||
           verb_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {if(shortcut_list_mode[1])
            {return 41;}
           else
            {shortcut_list_mode[1]=1,0;return 39;}
           }
         
        case 45:
         incr_cpts(lexbuf);
         lexbuf[6]=lexbuf[6]-1,0;
         var init$2=lexbuf[12];
         
         lexbuf[12]=[0,init$2[1],init$2[2],init$2[3],lexbuf[12][4]-1],0;
         line_number[0]--;
         if(shortcut_list_mode[1])
          {shortcut_list_mode[1]=0,0;return 42;}
         else
          {if
            (target_mode[1]||
             open_brackets[1]>=
             1||
             code_pre_mode[1]||
             ele_ref_mode[1]||
             verb_mode[1])
            {return [3,Lexing["lexeme"](lexbuf)];}
           else
            {return 43;}
           }
         
        case 46:return 44;
        case 47:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {var s$3=Lexing["lexeme"](lexbuf);
           
           var len=s$3["length"];
           
           var tag=Odoc_misc["no_blanks"]($$String["sub"](s$3,1,len-1));
           
           return [1,tag];
           }
         
        case 48:
         incr_cpts(lexbuf);
         if
          (target_mode[1]||
           open_brackets[1]>=
           1||
           code_pre_mode[1]||
           ele_ref_mode[1])
          {return [3,Lexing["lexeme"](lexbuf)];}
         else
          {return 19;}
         
        case 49:exit=21;
        }
      }
    
    switch(exit)
     {case 21:incr_cpts(lexbuf);return [3,Lexing["lexeme"](lexbuf)];}
    };

module["exports"]=
{"line_number":line_number,
 "char_number":char_number,
 "string_buffer":string_buffer,
 "reset_string_buffer":reset_string_buffer,
 "ajout_char_string":ajout_char_string,
 "ajout_string":ajout_string,
 "lecture_string":lecture_string,
 "description":description,
 "blank":blank,
 "open_brackets":open_brackets,
 "verb_mode":verb_mode,
 "target_mode":target_mode,
 "shortcut_list_mode":shortcut_list_mode,
 "ele_ref_mode":ele_ref_mode,
 "code_pre_mode":code_pre_mode,
 "init":init,
 "incr_cpts":incr_cpts,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "main":main,
 "__ocaml_lex_main_rec":__ocaml_lex_main_rec};

