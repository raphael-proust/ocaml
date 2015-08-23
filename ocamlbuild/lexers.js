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
                      /* tuple */[0,s,Loc["of_lexbuf"](source,lexbuf)]]},
             fmt)};

var empty=[/* record */0,/* [] */0,/* [] */0];

var
 locate=
  function(source,lexbuf,txt)
   {return /* tuple */[0,txt,Loc["of_lexbuf"](source,lexbuf)]};

var sublex=function(lexer,s){return lexer(Lexing["from_string"](s))};

var
 __ocaml_lex_tables=
  [/* record */0,
   "\0\0\xfd\xff\xfe\xff\x01\0\xff\xff\x02\0\x07\0\b\0\xfe\xff\f\0\x11\0\x16\0!\0\xfe\xff\r\0\x03\0&\0+\0\x12\0\x04\x006\0;\0\xfc\xff@\0E\0K\0P\0Z\0`\0\xfe\xff\x17\0\xff\xff\x1b\0V\0\xfc\xff\xfd\xfff\0h\0l\0\xff\xff\x1d\0p\0\xfd\xff\xfe\xffu\0{\0\x82\0\x8a\0\x91\0\x97\0\xfc\xff\xfd\xff\x9c\0\xa0\0\xa4\0\xff\xff\xa6\0\xaf\0\xfd\xff\xb5\0\xb6\0\xbe\0\xc5\0\xcb\0\xd0\0\x15\0\xfd\xff\x18\0-\0<\0\xfd\xff\xfe\xffD\0'\0\xfd\xffA\0O\0S\0\xfd\xff\xfe\xffU\0\xda\0\xfa\xff\xe2\0\xfc\xff\x1a\0\xfd\xff\xeb\0O\x01\xd4\0\xfb\0$\x01%\x01m\x01\xfe\xff/\0\xff\xffX\x010\x01s\x01\xea\0\xf1\0\x17\x01\x8c\x01\xfc\0\x01\x01z\x01e\x01\x06\x01\x99\x01\x81\x01\xd7\x01\xfd\xff\xd1\x01\xe6\x01\xff\x01\xa9\0\n\x02\x14\x02\xaa\0\x1f\x024\x02\xff\xff?\x02\xfe\xffI\x02\xfc\xff\xfd\xff4\0\xfe\xff\x92\x01\r\x01\xb4\x01\x15\x01D\x02h\x02\x1f\x01\xae\x01t\0\xfb\xff]\0\x8f\0\x1a\x03\x9a\x01\xfe\xff\xfd\xffv\0H\0\xfd\xff\xfe\xff\x91\0\xff\xff\xa6\x01\xfe\xff)\0\xb2\x01\xbd\x010\0\xc8\x01\xd2\x014\0;\0J\0L\0P\0\x8b\0\x0f\x025\x01\xa4\x01\xd9\x01d\0X\0j\0f\0q\0o\0t\0\x80\0~\0\x80\0\xb8\0v\x02\x10\x02-\x02\xdd\x01\x94\0\x8d\0\x9c\0\xb0\0\xaf\0\xba\0\xf0\0\x95\x02@\x01\xe2\x01X\x02\xc1\0\xd1\0\xd0\0\xd0\0\xcd\0\xe4\0$\x01\xdb\0)\x01\x1a\x01\x9e\x02M\x02T\x02z\x02\xf4\0\xf5\0\xfc\0\xfa\0\xfb\0\xf9\0\x0b\x01M\x01\xa3\x02b\x02i\x02\xa4\x02\x19\x01/\x013\x01)\x016\x019\x01V\x01\x8e\x01\xaa\x02m\x02n\x02\xae\x02\xbc\x02\xc3\x02\xd5\x02\xdb\x02\x84\x02\xe0\x02\xe4\x02\xfe\xff\xf9\x02\xbc\x01\xff\xff\xb6\x02\xfd\xff\x7f\x02\x89\x02\xc2\x01\xfe\xff",
   "\xff\xff\xff\xff\xff\xff\x02\0\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\0\0\x02\0\xff\xff\xff\xff\xff\xff\x02\0\x02\0\0\0\x02\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\x02\0\x04\0\x04\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x02\0\x02\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\x01\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\x03\0\x03\0\xff\xff\xff\xff\0\0\0\0\xff\xff\x01\0\0\0\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\x01\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\x05\0\xff\xff\x02\0\xff\xff\x05\0\x05\0\x04\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\x04\0\xff\xff\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\x04\0\xff\xff\xff\xff\xff\xff\x01\0\x01\0\x01\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\0\0\x03\0\x03\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\x03\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\xff\xff\x01\0\x01\0\x01\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\x01\0\xff\xff",
   "\x03\0\0\0\0\0\x05\0\0\0\x05\0\t\0\xff\xff\0\0\t\0\t\0\t\0\x10\0\0\0\xff\xff\xff\xff\x10\0\x10\0\xff\xff\xff\xff\x10\0\x17\0\0\0\x17\0\x18\0\x17\0\x17\0\x17\0\x17\0\0\0\xff\xff\0\0 \0$\0\0\0\0\0$\0$\0$\0\0\0\xff\xff*\0\0\0\0\x000\0\xff\xff0\0\xff\xff0\x004\0\0\0\0\x004\x004\x004\0\0\0\xff\xff;\0\0\0;\0@\0;\0@\0;\0@\0D\0\0\0C\0D\0F\0\0\0\0\0H\0L\0\0\0K\0L\0N\0\0\0\0\0P\0S\0\0\0Z\0\0\0\xff\xff\0\0\\\0Z\0\xff\xffZ\0Z\0\\\0Z\0\0\0\xff\xff\0\0h\0\\\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffh\0h\0\xff\xff\xff\xff\xff\xff\xff\xffZ\0q\0\0\0q\0q\0v\0t\0{\0v\0w\0y\0y\0\0\0{\0\0\0~\0\0\0\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x8d\0\0\0\xff\xff\x8d\0\xff\xff\x8f\0\0\0\0\0\xff\xff\x95\0\0\0\0\0\xff\xff\0\0\x99\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xa9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xb8\0\xff\xff\xff\xff\xb8\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xc3\0\xff\xff\xff\xff\xc3\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xd1\0\xff\xff\xff\xff\xd1\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xdd\0\xff\xff\xff\xff\xdd\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xe9\0\xff\xff\xff\xff\xe9\0\xeb\0\xeb\0\xeb\0\xeb\0\xff\xff\xff\xff\xf2\0\0\0\xf2\0\xf3\0\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\xff\xff\xff\xff\x01\0\xff\xff\xff\xff\n\0\b\0\b\0\n\0\x07\0\xff\xff\xff\xff\x13\0\xff\xff\xff\xff\x0b\0\b\0\x13\0\x0b\0\x07\0\x0b\0\b\0\x1f\0\x0b\0\x07\0V\0\x1f\0(\0\n\0\x1e\0(\0\x11\0\x0f\0\xff\xff\x11\0\x0e\0\xff\xff\xff\xff\x0b\0\xff\xff\xff\xff\x14\0\x13\0\x0b\0\x14\0\x12\0`\0\x01\0\x04\0\x04\0(\0\x81\0\x14\0\x13\0\x11\0\x14\0\x12\0\x19\0\x19\0\xff\xff\x19\0\x1a\0\xff\xff\xff\xff\x14\0\xff\xff\xff\xff \0\x1f\0C\0 \0\x1e\0\xff\xff\x1b\0\x1b\0\x14\0\x1b\0\x1c\0\x1b\0\x1b\0\x19\0\x1b\0\x1c\0\x18\0%\0\xff\xffK\0%\0\x1b\0\x1b\0 \0\x1b\0\x1c\0\xff\xff\x1b\0\x1b\0\x1b\0\x1b\0\x1c\0\x18\0(\0\x1b\0&\0(\0\x18\0&\0&\0%\0H\0&\0-\0\x1b\0\xff\xff-\0\x18\0.\0\xff\xff\x1b\0.\0\"\0\x18\0/\0\x8e\0(\0/\0&\0\xff\xff\xa0\0.\0&\0P\0.\0\xff\xff-\0\xa0\0\xff\xff/\0\xff\xff.\0/\0\xa1\0\xff\xff\x8c\0\xff\xff/\0,\0\xff\xff\x8f\0\x8f\x005\0\xff\xff.\x005\0\x96\x008\0\xa2\0.\x008\x006\0/\0\xa3\x006\x006\0\xff\xff8\x006\0\xff\xff8\0\xa4\0\xff\xff\xa5\0.\x005\0=\0\x97\0\x97\0=\x008\0\xff\xff\xff\xff>\x006\0\xff\xff>\x002\x006\0\xa6\x008\0?\0\xff\xff\xab\0?\0\xac\0\xff\xff\xad\0>\0=\0\xff\xff>\0|\0z\0?\0\xff\xff>\0?\0\xae\0\xff\xff\xaf\0<\0\xff\xffY\0?\0\xb0\0Y\0\xff\xff\xff\xffX\0V\0>\0X\0U\0\xb1\0\xb2\0>\0?\0\xff\xff\xb3\0\xb4\0\xff\xff\xff\xff\xff\xff\xb5\0f\0Y\0`\0f\0>\0_\0\xba\0X\0f\0\xff\xffW\0g\0\xbb\0\x02\0\xff\xff\xff\xff\r\0\r\0\xff\xff`\0\xff\xff\xff\xff_\0f\0k\0\xff\xff\r\0j\0\xbc\0Y\0\xff\xff\r\0m\0R\0B\0\xff\xff\x86\0\xff\xff\xbd\0\x87\0\x1d\0Y\0'\0\xbe\0\x86\0f\0\r\0\x87\0f\0Y\0a\0\xff\xffJ\0\xbf\0\x82\0\xc0\0\r\0\x89\0\xff\xfff\0`\0l\0g\0_\0\xc5\0\xc6\0Y\0\r\0f\0\xc7\0\xc8\0d\0\x16\0G\0c\0n\0\xa8\0\xff\xff\xff\xff\xa7\0\xc9\0\xff\xff\x1d\0e\0b\0\x94\0\xca\0\xc2\0\x16\0\xcb\0\xc1\0\xcc\0\xff\xff\x16\0Y\0\xcd\0O\0\xce\0\xff\xff#\0n\0]\0V\0\x16\0]\0U\0\xd3\0Y\0a\0\x16\0a\0`\0\xd4\0a\0_\0'\0\xd5\0#\0\xd6\0a\0\xd7\0#\0\xd8\0Y\0]\0+\0Y\0\\\0e\0\x8b\0\xff\xff]\0V\0a\0]\0U\0+\0f\0d\0\xd9\0f\0n\0b\0\xff\xffY\0k\0Y\0Y\0\xda\0\xdf\0Y\0+\0f\0b\0]\0g\0\xff\xff\\\0\xff\xff\xe0\0f\0\xe1\0f\0f\x003\0f\0\xaa\0Y\0\x82\x007\0\xe2\0\x82\0\xe3\x003\0\xc4\0Y\0Y\x003\0Y\x007\0Y\0\xe4\0\xff\xff\xff\xff[\0f\0Y\0\xa8\0:\0\x9c\0\xa7\0\x82\0\x9b\0i\0\xff\xff\xff\xff\x82\0\x82\0Y\0\x82\0Y\0\x9f\0\x86\0:\0\x9e\0\x86\0l\0\xff\xff\x91\0\xe5\0\xff\xffY\0\x9f\0\xe6\0[\0\x9e\0:\0\xfa\0\0\0\x82\0e\0\xff\xff\0\0\x9f\0\0\0\x86\0\x9e\0l\0\0\0\0\0\0\0T\0\xff\xff\x9f\0n\0\xff\xff\x9e\0\x82\0p\0\xff\xff\xa8\0p\0\xf4\0\xa7\0\xb7\0e\0\0\0\xb6\0^\0\xc2\0\0\0\x88\0\xc1\0\xff\xff\xff\xff\0\0\xff\xff\0\0l\0\x92\0p\0\xff\xfft\0\xff\xff\xff\xff^\0\xff\xffp\0p\0p\0^\0r\0p\0s\0\0\0\xff\xff\0\0\xaa\0\xff\xff\x88\0u\0\xff\xff\xff\xfft\0\xff\xff\x85\0p\0\xff\xff\0\0\xff\xff\0\0\x9a\0\xff\xff\xa6\0\xa8\0\xb7\0\xa6\0\xa7\0\xb6\0\xff\xff\xff\xffu\0\xff\xff\x9d\0\0\0\xff\xff^\0\xff\xfft\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x9d\0\0\0\xa6\0^\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xb7\0\x9d\0u\0\xb6\0\xff\xffw\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x9d\0\xc4\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\x86\0x\0T\0\x86\0\0\0\x84\0\x81\0\xff\xff\x84\0\x80\0\xd0\0^\0\xff\xff\xcf\0\xff\xff\xff\xff\xff\xff\xd0\0\xff\xff\xff\xff\xcf\0\xc2\0\0\0\x86\0\xc1\0\xff\xff\xff\xff\xff\xff\x84\0\0\0\xff\xff\xdc\0T\0\xff\xff\xdb\0\x82\0\x86\0\x86\0\xdc\0\x86\0\x82\0\xdb\0\xe8\0\xe8\0\xff\xff\xe7\0\xe7\0\0\0\0\0\0\0\xb5\0\xb7\0\xff\xff\xb5\0\xb6\0\xd0\0\0\0\xb9\0\xcf\0\x86\0\xfa\0\0\0\0\0\xf9\0\xee\0\xee\0\0\0\xee\0\xef\0\xf8\0\0\0\x82\0\xf8\0\xb5\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\xc0\0\xc2\0\x85\0\xc0\0\xc1\0\xb9\0\xee\0\x83\0\xff\xff\xce\0\xd0\0\xf8\0\xce\0\xcf\0\xda\0\xdc\0\xdc\0\xda\0\xdb\0\xdb\0\0\0\xe6\0\xe8\0\xc0\0\xe6\0\xe7\0\xe8\0\xd2\0\0\0\xe7\0\xff\xff\0\0\xce\0\xf8\0\xd2\0\0\0\xf8\0\xda\0\x85\0\xec\0\xec\0\0\0\xec\0\xed\0\xe6\0\0\0\xee\0\xee\0\xde\0\xee\0\xef\0\xff\xff\0\0\0\0\0\0\xde\0\xf8\0p\0\0\0\xff\xff\0\0\0\0\xec\0\xff\xff\xec\0\xec\0\0\0\xec\0\xed\0\xee\0\xec\0\xec\0\xff\xff\xec\0\xed\0\xee\0\xee\0\0\0\xee\0\xef\0\xf1\0\0\0\0\0\xf1\0\0\0\0\0\0\0\xec\0\0\0\0\0\0\0\0\0\0\0\xec\0\0\0\0\0\0\0\xff\xff\xee\0\0\0\0\0\xff\xff\xf1\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff\xf1\0\xf1\0\xf1\0\0\0\xff\xff\xf1\0\0\0\xf7\0\0\0\xff\xff\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\xf1\0\xff\xff\xff\xff\xf3\0\xff\xff\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\x90\0\0\0\0\0\0\0\x8e\0\0\0\x7f\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8f\0\0\0\0\0\0\0\xff\xff\0\0\0\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\0\0\xff\xff\0\0\0\0\x8e\0\xff\xff\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xf6\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\x03\0\x05\0\0\0\x03\0\x05\0\x06\0\x06\0\x07\0\x06\0\x06\0\t\0\t\0\x0e\0\t\0\t\0\n\0\n\0\x12\0\n\0\n\0\x0b\0\x0b\0\x1e\0\x0b\0\x0b\0U\0 \0(\0\x06\0 \0(\0\f\0\f\0\t\0\f\0\f\0\x10\0\x10\0\n\0\x10\0\x10\0\x11\0\x11\0\x0b\0\x11\0\x11\0_\0\0\0\x03\0\x05\0(\0\x80\0\x14\0\x14\0\f\0\x14\0\x14\0\x15\0\x15\0\x10\0\x15\0\x15\0\x17\0\x17\0\x11\0\x17\0\x17\0\x18\0\x18\0A\0\x18\0\x18\0C\0\x19\0\x19\0\x14\0\x19\0\x19\0\x1a\0\x1a\0\x15\0\x1a\0\x1a\0\x15\0!\0\x17\0I\0!\0\x1b\0\x1b\0\x18\0\x1b\0\x1b\0D\0\x1c\0\x1c\0\x19\0\x1c\0\x1c\0\x19\0$\0\x1a\0%\0$\0\x1a\0%\0&\0!\0E\0&\0)\0\x1b\0K\0)\0\x1b\0,\0H\0\x1c\0,\0!\0\x1c\0-\0\x8c\0$\0-\0%\0L\0\x9a\0.\0&\0M\0.\0P\0)\0\x9d\0$\0/\0%\0,\0/\0\xa0\0&\0\x8a\x000\0-\0)\x000\0\x92\0\x92\x001\0,\0.\x001\0\x93\x004\0\xa1\0-\x004\x005\0/\0\xa2\x005\x006\0.\x008\x006\x000\x008\0\xa3\0\x8d\0\xa4\0/\x001\x009\0\x96\0\x96\x009\x004\x000\0;\0<\x005\0;\0<\x001\x006\0\xa5\x008\0=\x004\0\xaa\0=\0\xab\x005\0\xac\0>\x009\x006\0>\0t\0w\0?\0;\0<\0?\0\xad\0@\0\xae\x009\0@\0Y\0=\0\xaf\0Y\0;\0<\0Q\0Q\0>\0Q\0Q\0\xb0\0\xb1\0=\0?\0S\0\xb2\0\xb3\0S\0@\0>\0\xb4\0d\0Y\0W\0d\0?\0W\0\xb9\0Q\0e\0@\0Q\0e\0\xba\0\0\0\x03\0\x05\0\x0f\0\x13\0Z\0h\0\x06\0Z\0h\0d\0i\0\t\0\x0e\0i\0\xbb\0l\0\n\0\x12\0l\0Q\0A\0\x0b\0\x83\0C\0\xbc\0\x83\0 \0S\0(\0\xbd\0\x85\0f\0\f\0\x85\0f\0d\0W\0\x10\0I\0\xbe\0\x88\0\xbf\0\x11\0\x88\0D\0[\0\\\0Y\0[\0\\\0\xc4\0\xc5\0Z\0\x14\0f\0\xc6\0\xc7\0b\0\x15\0E\0b\0S\0\xa7\0\x17\0K\0\xa7\0\xc8\0H\0\x18\0d\0W\0\x93\0\xc9\0\xc1\0\x19\0\xca\0\xc1\0\xcb\0L\0\x1a\0f\0\xcc\0M\0\xcd\0P\0!\0Z\0X\0X\0\x1b\0X\0X\0\xd2\0[\0\\\0\x1c\0a\0a\0\xd3\0a\0a\0$\0\xd4\0%\0\xd5\0b\0\xd6\0&\0\xd7\0k\0X\0)\0k\0X\0f\0\x8a\0,\0]\0]\0a\0]\0]\0-\0c\0c\0\xd8\0c\0[\0\\\0.\0j\0j\0k\0j\0\xd9\0\xde\0X\0/\0n\0b\0]\0n\0\x8d\0]\x000\0\xdf\0c\0\xe0\0g\0g\x001\0g\0\xa7\0j\0\x82\x004\0\xe1\0\x82\0\xe2\x005\0\xc1\0m\0m\x006\0m\x008\0]\0\xe3\0t\0w\0X\0g\0c\0\xa8\x009\0\x98\0\xa8\0\x82\0\x98\0a\0;\0<\0\x89\0\x89\0m\0\x89\0n\0\x9b\0\x84\0=\0\x9b\0\x84\0k\0\x8f\0\x8f\0\xe4\0>\0g\0\x9c\0\xe5\0]\0\x9c\0?\0\xf9\0\xff\xff\x89\0c\0@\0\xff\xff\x9e\0\xff\xff\x84\0\x9e\0j\0\xff\xff\xff\xff\xff\xffQ\0q\0\x9f\0n\0q\0\x9f\0\x84\0o\0S\0\xa9\0o\0\xf3\0\xa9\0\xb8\0g\0\xff\xff\xb8\0W\0\xc2\0\xff\xff\x82\0\xc2\0r\0q\0\xff\xffr\0\xff\xffm\0\x8f\0o\0q\0q\0q\0Z\0h\0q\0o\0o\0o\0i\0o\0o\0o\0\xff\xffr\0\xff\xff\xa8\0s\0\x89\0q\0s\0r\0r\0r\0\x84\0o\0r\0\xff\xffu\0\xff\xff\x98\0u\0\xa6\0\xa6\0\xb6\0\xa6\0\xa6\0\xb6\0v\0s\0r\0v\0\x9b\0\xff\xff[\0\\\0s\0s\0s\0x\0u\0s\0x\0\x9c\0\xff\xff\xa6\0b\0u\0u\0u\0v\0\xff\xffu\0\xb7\0\x9e\0s\0\xb7\0v\0v\0v\0y\0x\0v\0y\0\x9f\0\xc2\0u\0\xff\xffx\0x\0x\0{\0\xff\xffx\0{\0\x86\0v\0X\0\x86\0\xff\xff}\0}\0y\0}\0}\0\xcf\0a\0x\0\xcf\0y\0y\0y\0\xd0\0{\0y\0\xd0\0\xc3\0\xff\xff\x86\0\xc3\0{\0{\0{\0}\0\xff\xff{\0\xdb\0]\0y\0\xdb\0\x86\0\x87\0\x87\0\xdc\0\x87\0}\0\xdc\0\xe7\0\xe8\0{\0\xe7\0\xe8\0\xff\xff\xff\xff\xff\xff\xb5\0\xb5\0n\0\xb5\0\xb5\0\xd1\0\xff\xff\xb6\0\xd1\0\x87\0\xf7\0\xff\xff\xff\xff\xf7\0\xee\0\xee\0\xff\xff\xee\0\xee\0\xf8\0\xff\xff\x87\0\xf8\0\xb5\0\xff\xff\xff\xff\xff\xff\x8f\0\xff\xff\xff\xff\xff\xff\xc0\0\xc0\0\x86\0\xc0\0\xc0\0\xb7\0\xee\0}\0\x98\0\xce\0\xce\0\xf8\0\xce\0\xce\0\xda\0\xda\0\xdd\0\xda\0\xda\0\xdd\0\xff\xff\xe6\0\xe6\0\xc0\0\xe6\0\xe6\0\xe9\0\xcf\0\xff\xff\xe9\0\xf3\0\xff\xff\xce\0\xf5\0\xd0\0\xff\xff\xf5\0\xda\0\x87\0\xea\0\xea\0\xff\xff\xea\0\xea\0\xe6\0\xff\xff\xeb\0\xeb\0\xdb\0\xeb\0\xeb\0q\0\xff\xff\xff\xff\xff\xff\xdc\0\xf5\0o\0\xff\xff\xa9\0\xff\xff\xff\xff\xea\0\xb8\0\xec\0\xec\0\xff\xff\xec\0\xec\0\xeb\0\xed\0\xed\0r\0\xed\0\xed\0\xef\0\xef\0\xff\xff\xef\0\xef\0\xf0\0\xff\xff\xff\xff\xf0\0\xff\xff\xff\xff\xff\xff\xec\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xed\0\xff\xff\xff\xff\xff\xffs\0\xef\0\xff\xff\xff\xff\xf2\0\xf0\0\xff\xff\xf2\0\xff\xff\xff\xff\xff\xffu\0\xf0\0\xf0\0\xf0\0\xff\xff\xa6\0\xf0\0\xff\xff\xf5\0\xff\xffv\0\xff\xff\xff\xff\xff\xff\xff\xff\xf2\0\xff\xff\xff\xff\xff\xff\xff\xff\xf0\0x\0\xf2\0\xf2\0\xf2\0\xff\xff\xff\xff\xf2\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf2\0y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff{\0\xff\xff\xff\xff\xff\xff\x8e\0\xff\xff\xff\xff\xff\xff\x8e\0\xff\xff}\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xff\xff\xff\xff\xff\xff\xc3\0\xff\xff\xff\xff\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xff\xff\xb5\0\xff\xff\xff\xff\x8e\0\xd1\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xc0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xce\0\xff\xff\xff\xff\xff\xff\xff\xff\xda\0\xdd\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xe6\0\xff\xff\xff\xff\xff\xff\xe9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf5\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xea\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xeb\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xec\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xed\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf2\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x06\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\b\0\f\0\0\0\0\0\0\0\x11\0!\0&\0+\0\0\0\0\0\0\0\0\0-\0\0\0\0\x001\x002\x003\0\x12\0\0\0\x14\0\0\0\0\0;\0\x16\0<\0\x17\0\0\0@\0\0\0\0\0K\0X\0Y\0\x12\0\0\0Z\0\0\0\0\0^\0g\0h\0i\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0v\0\0\0\x80\0\0\0\0\0\0\0\x81\0\x8e\0\f\0\x82\0\x87\0\x8f\0\x94\0\0\0\0\0\0\0\0\0\x95\0\x9d\0\x9f\0\x12\0\xa6\0\xac\0\0\0\0\0\xbb\0\xc1\0\r\0\xc7\0\xa0\0\x1f\0\0\0\0\0\xd8\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\xc9\0\0\0\0\0\0\0\0\0\0\0K\0\xe3\0\xb6\0\xe9\0\xea\0\0\0\0\0\0\0\0\0\x01\0\0\0x\x01\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x14\0\x02\x01\0\0\0\0\xb8\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\x07\x01\0\0\0\0\xf8\0\0\0\0\0\0\0\0\0\0\0\0\0\x16\0\f\x01\0\0\0\0\r\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0\x14\x01\0\0\0\0\x12\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\x1c\x01\0\0\0\0!\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0,\x01\0\0\0\0-\x015\x01:\x01D\x01J\x01\0\0\0\0E\x01\0\0R\x01E\0!\x01\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\x1a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0O\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0~\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0~\0\0\0\0\0\0\0\x04\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xe8\0\xe8\0\0\0\x01\x01\x01\x01\x01\x01\x06\x01\x01\x01\x01\x01\0\0\0\0\x1c\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0)\0\0\0\0\0\0\0)\0\x1d\0\0\0\x1d\0\x1d\0\x1d\0)\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\x97\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x9f\0\0\0\0\0\x9f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xac\0\0\0\0\0\xac\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xb9\0\0\0\0\0\xb9\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xc6\0\0\0\0\0\xc6\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xd3\0\0\0\0\0\xd3\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xe0\0\0\0\0\0\xe0\0\x17\0\x17\0\x17\0\x0b\x01\0\0\0\0\x19\x01\0\0\x19\x01\x85\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0V\0\x01\0\x01\0\x01\0\x01\0\x85\0\x01\0\x01\0\x85\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\n\0\x01\0\x01\0\n\0\0\0\n\0\n\0\0\0\n\0\n\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\n\0\x17\0\x01\0\n\0\n\0\x9a\0\xa7\0\xb4\0\0\0\n\0\n\0\0\0\x01\0\xc1\0\0\0\x01\0\0\0\xce\0\x01\0\x01\0\0\0\0\0\0\0\n\0\n\0\n\0\x01\0\n\0\n\0\x01\0\x17\x009\0\xdb\0\x17\0\0\0\0\0\0\0\0\0\0\0\x01\0\x17\0\x01\0\x01\0\x17\0\x01\0\0\0\0\0\n\0\n\0\x01\0\0\0\0\0\0\0\x17\0"\0\0\0\0\0"\0\0\0\0\0\0\0\x17\0\x01\0\x17\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`\0\0\0\x17\0`\0\x17\0"\0C\0\0\0\0\0C\0\0\0\0\0j\0\0\0\x85\0j\0\0\0\x85\0\0\0\0\0\0\0\x85\0\x85\0\x85\0\x85\0\x92\0\x85\0\0\0\x92\0C\0\x85\0\0\0\0\0\x85\0\0\0j\0\x85\0\x85\0\0\0\x85\0\0\0\0\x009\0V\0\x85\0\0\0\x85\0\x01\0e\0\0\0\x01\0V\0\0\0\x85\0V\0\0\0\0\0V\0\0\0\x85\0V\0V\0\x88\0V\0V\0\x01\0V\0\0\0\x01\0\0\0V\0\0\0V\0V\0V\x000\0<\0Y\0\0\0V\0V\0\0\0\0\0\0\0\0\0V\0V\0\0\0\x01\0J\0J\0\x01\0\0\0\0\0\x01\0s\0\x8b\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0Y\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\xa2\0\0\0\0\0\xa2\0\0\0\xaf\0\0\0\0\0\xaf\0\0\0\xbc\0\0\0\0\0\xbc\0\0\0\0\0\0\0\0\0\xc9\0\0\0\0\0\xc9\0\0\0\xa2\0\0\0\0\0\xd6\0\0\0\xaf\0\xd6\0\0\0\0\0\0\0\xbc\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xc9\0\xe3\0\0\0\0\0\xe3\0\0\0\0\0\0\0\xd6\0\0\0\n\0\n\0\0\0\n\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xe3\0\n\0\n\0\0\0\n\0\x1d\0\0\0\n\0\n\0\n\0\n\0\x10\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
   "\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x06\0\n\0\x0b\0\x06\0\n\0\x0b\0\f\0\x11\0\x14\0\f\0\x11\0\x14\0\x15\0\x15\0l\0\x15\0\x15\0\x19\0\x19\0e\0\x19\0\x19\0e\0\x06\0\n\0\x0b\0\xff\xff\xff\xff\xff\xff\f\0\x11\0\x14\0\x8c\0\x1a\0\x1a\0\x15\0\x1a\0\x1a\0\x1b\0\x1b\0\x19\0\x1b\0\x1b\0\x1c\0\x1c\0!\0\x1c\0\x1c\0!\0$\0%\0&\0$\0%\0&\0)\0\x1a\0-\0/\0,\0.\0\x1b\0,\0.\x001\0o\0\x1c\x001\0!\0\xa5\0\xb4\0\xbf\0$\0%\0&\x004\0\x83\0\xcd\x004\0\x83\0!\0\xd9\0,\0.\0$\0%\0&\x001\x005\x006\x009\x005\x006\x009\0<\0Y\0\xe5\0<\x004\x001\0\xff\xff\xf3\0\xff\xff=\0>\0?\0=\0>\0?\0\xff\xff4\x005\x006\x009\0\xff\xff\xff\xff\xff\xff<\0Q\0Q\0\xff\xffQ\0Q\x005\x006\x009\0=\0>\0?\0S\0W\0Z\0S\0W\0Z\0\xff\xff[\0\xff\xff=\0[\0?\0Q\0X\0X\0\\\0X\0X\0\\\0]\0]\0b\0]\0]\0b\0\xff\xff\xff\xff\xff\xffc\0c\0d\0c\0n\0d\0\xff\xffn\0X\0f\0Q\0\xff\xfff\0\xff\xff]\0g\0g\0\xff\xffg\0\xff\xffS\0W\0Z\0c\0\xff\xffd\0\x85\0[\0\xa9\0\x85\0j\0\xa9\0f\0j\0X\0\\\0k\0\xff\xffg\0k\0]\0b\0m\0m\0}\0m\0\xff\xff}\0\xff\xffc\0\xff\xffd\0n\0j\0S\0W\0Z\0\xff\xfff\0k\0r\0\xff\xff\xff\xffr\0g\0m\0\xff\xff}\0X\0\\\0\x84\0\xff\xff\xff\xff\x84\0]\0b\0\x86\0\x87\0\x87\0\x86\0\x87\0\xff\xffr\0\xff\xff\xff\xff\xff\xffn\0\xff\xff\xff\xffr\0r\0r\0\xb8\0\x84\0r\0\xb8\0\xff\xff\xff\xff\xff\xff\x86\0\x87\0\xa6\0\xa6\0\xff\xff\xa6\0\xa6\0\xb5\0\xb5\0r\0\xb5\0\xb5\0\xc0\0\xc0\0\xc3\0\xc0\0\xc0\0\xc3\0\xff\xff\xd1\0\xce\0\xce\0\xd1\0\xce\0\xce\0\xa6\0\xff\xff\xff\xff\xda\0\xda\0\xb5\0\xda\0\xda\0\xff\xff\xdd\0\xc0\0!\0\xdd\0\xff\xff\xff\xff$\0%\0&\0\xce\0\xe6\0\xe6\0\xe9\0\xe6\0\xe6\0\xe9\0\xff\xff\xda\0\xff\xff\xea\0\xea\x001\0\xea\0\xea\0\xeb\0\xeb\0\xf3\0\xeb\0\xeb\0\xff\xff\xff\xff\xff\xff4\0\xe6\0\xec\0\xec\0\xf0\0\xec\0\xec\0\xf0\0\xed\0\xed\0\xea\0\xed\0\xed\x005\x006\0\xeb\0\xff\xff\xf2\0\xff\xff\xff\xff\xf2\0\xff\xff\xff\xff\xff\xff\xff\xff\xec\0\xf0\0\xff\xff\xff\xff\xff\xff\xff\xff\xed\0\xff\xff\xf0\0\xf0\0\xf0\0\xff\xff\xff\xff\xf0\0\xf2\0\xff\xff\xff\xff\xff\xffQ\0\xff\xff\xff\xff\xf2\0\xf2\0\xf2\0\xff\xff\xff\xff\xf2\0\xf0\0S\0W\0Z\0\xff\xff\xff\xff\xff\xff\xff\xff[\0\xff\xff\xff\xff\xff\xff\xff\xff\xf2\0\xff\xffX\0\\\0\xff\xff\xff\xff\xff\xff\xff\xff]\0b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffn\0\xff\xff\xff\xff\xff\xff\xff\xff\x8e\0\xff\xff\xff\xff\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa9\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xff\xff\xff\xff\xff\xff\xff\xff\x8e\0r\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\x8e\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xb8\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xa6\0\xff\xff\xff\xff\xff\xff\xff\xff\xb5\0\xff\xff\xff\xff\xff\xff\xff\xff\xc0\0\xc3\0\xff\xff\xff\xff\xff\xff\xff\xff\xd1\0\xff\xff\xce\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xda\0\xff\xff\xff\xff\xff\xff\xff\xff\xdd\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xe6\0\xe9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xea\0\xff\xff\xff\xff\xff\xff\xff\xff\xeb\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xec\0\xf0\0\xff\xff\xff\xff\xff\xff\xff\xff\xed\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf2\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
   "\xff\x01\xff\xff\0\x01\xff\x04\xff\xff\x03\xff\x02\xff\xff\0\x03\xff\0\x02\x01\x04\xff\x02\xff\xff\0\x02\xff\x05\xff\x04\xff\xff\x06\xff\x05\xff\x04\xff\xff\x05\xff\x06\x03\x04\xff\xff\x07\x04\x05\xff\x06\x03\x04\xff\xff\x06\x03\xff\x05\xff\x06\x03\x07\xff\xff\x05\xff\x04\xff\x03\xff\xff\x07\xff\x05\xff\xff\x02\x05\0\x03\x01\x04\xff\x03\x06\xff\x07\x04\x05\xff\x04\xff\xff\x05\xff\x06\x03\xff\x03\x06\x04\x07\xff\x06\x03\x05\xff\x03\xff\x04\xff\xff\b\x03\x03\x06\x06\b\x05\xff\x07\xff\xff\x02\x05\0\x06\x01\x04\xff\x05\xff\xff\x04\x07\xff\x04\x07\x05\xff\x07\xff\xff\x05\xff\x04\x07\xff\x01\x02\xff\r\xff\f\xff\xff\r\xff\xff\f\xff\r\xff\xff\x0f\xff\x0e\xff\xff\x0f\xff\xff\x0e\xff\x0f\xff\xff\x11\xff\x10\xff\xff\x11\xff\xff\x10\xff\x11\xff\xff\x13\xff\x12\xff\xff\x13\xff\xff\x12\xff\x13\xff\xff\x15\xff\x14\xff\xff\x15\xff\xff\x14\xff\x15\xff\xff\x17\xff\x16\xff\xff\x17\xff\xff\x16\xff\x17\xff\xff\x04\x10\x05\x11\0\f\x01\r\b\x14\t\x15\n\x16\x0b\x17\x02\x0e\x03\x0f\x06\x12\x07\x13\xff\0\x03\x01\x02\xff\0\x05\x01\x04\xff\x03\x05\x02\xff\xff\x03\x05\x02\x04\x05\xff\x04\xff\xff\x03\xff\xff\x02\xff\0\x03\xff\x02\x04\x01\x05\0\x03\xff"];

var
 ocamldep_output=
  function(source,lexbuf)
   {return __ocaml_lex_ocamldep_output_rec(source,lexbuf,0)};

var
 __ocaml_lex_ocamldep_output_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_ocamldep_output_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Expecting colon followed by space-separated module name list"])
        }
      }
    };

var
 space_sep_strings_nl=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_space_sep_strings_nl_rec(source,lexbuf,6)};

var
 __ocaml_lex_space_sep_strings_nl_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_space_sep_strings_nl_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Expecting space-separated strings terminated with newline"])
        }
      }
    };

var
 space_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_space_sep_strings_rec(source,lexbuf,12)};

var
 __ocaml_lex_space_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_space_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Expecting space-separated strings"])
        }
      }
    };

var
 blank_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_blank_sep_strings_rec(source,lexbuf,21)};

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
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return blank_sep_strings(source,lexbuf);
        case 1:exit=10;break;
        case 2:
         var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
         
         return /* :: */[0,word,blank_sep_strings(source,lexbuf)];
        case 3:exit=10;break;
        case 4:
         return error
                 (source,
                  lexbuf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Expecting blank-separated strings",
                    /* End_of_format */0],
                   "Expecting blank-separated strings"])
        }
      }
    
    switch(exit){case 10:return /* [] */0}
    };

var
 comma_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](5,-1);
    lexbuf[10][4]=lexbuf[6];
    lexbuf[10][3]=lexbuf[6];
    return __ocaml_lex_comma_sep_strings_rec(source,lexbuf,33)};

var
 __ocaml_lex_comma_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comma_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Expecting comma-separated strings (1)"])
        }
      }
    };

var
 comma_sep_strings_aux=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    return __ocaml_lex_comma_sep_strings_aux_rec(source,lexbuf,41)};

var
 __ocaml_lex_comma_sep_strings_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comma_sep_strings_aux_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Expecting comma-separated strings (2)"])
        }
      }
    };

var
 comma_or_blank_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](5,-1);
    lexbuf[10][4]=lexbuf[6];
    lexbuf[10][3]=lexbuf[6];
    return __ocaml_lex_comma_or_blank_sep_strings_rec(source,lexbuf,49)};

var
 __ocaml_lex_comma_or_blank_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_comma_or_blank_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Expecting (comma|blank)-separated strings (1)"])
        }
      }
    };

var
 comma_or_blank_sep_strings_aux=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](3,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_comma_or_blank_sep_strings_aux_rec(source,lexbuf,57)};

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
                  "Expecting (comma|blank)-separated strings (2)"])}
    else
     {if(__ocaml_lex_state$1>=2)
       {return /* [] */0}
      else
       {var word=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[6]);
        
        return /* :: */[0,word,comma_or_blank_sep_strings_aux(source,lexbuf)]}
      }
    };

var
 parse_environment_path_w=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_w_rec(source,lexbuf,65)};

var
 __ocaml_lex_parse_environment_path_w_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_w_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
        case 2:return /* [] */0
        }
      }
    };

var
 parse_environment_path_aux_w=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_aux_w_rec(source,lexbuf,69)};

var
 __ocaml_lex_parse_environment_path_aux_w_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_aux_w_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Impossible: expecting colon-separated strings"])
        }
      }
    };

var
 parse_environment_path=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_rec(source,lexbuf,73)};

var
 __ocaml_lex_parse_environment_path_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
        case 2:return /* [] */0
        }
      }
    };

var
 parse_environment_path_aux=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_aux_rec(source,lexbuf,77)};

var
 __ocaml_lex_parse_environment_path_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_parse_environment_path_aux_rec
              (source,lexbuf,__ocaml_lex_state$1)}
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
                   "Impossible: expecting colon-separated strings"])
        }
      }
    };

var
 conf_lines=
  function(dir,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](9,-1);
    lexbuf[10][4]=lexbuf[6];
    return __ocaml_lex_conf_lines_rec(dir,source,lexbuf,81)};

var
 __ocaml_lex_conf_lines_rec=
  function(dir,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    var exit;
    
    if(5<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_conf_lines_rec(dir,source,lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:exit=42;break;
        case 1:exit=43;break;
        case 2:exit=42;break;
        case 3:exit=43;break;
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
                   "Invalid line syntax"])
        }
      }
    
    switch(exit)
     {case 42:Lexing["new_line"](lexbuf);return conf_lines(dir,source,lexbuf);
      case 43:return /* [] */0
      }
    };

var
 conf_value=
  function(x,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](3,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_conf_value_rec(x,source,lexbuf,111)};

var
 __ocaml_lex_conf_value_rec=
  function(x,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_conf_value_rec(x,source,lexbuf,__ocaml_lex_state$1)}
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
                   "Invalid tag modifier only '+ or '-' are allowed as prefix for tag"])
        }
      }
    };

var
 conf_values=
  function(x,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    lexbuf[10][2]=lexbuf[6];
    return __ocaml_lex_conf_values_rec(x,source,lexbuf,125)};

var
 __ocaml_lex_conf_values_rec=
  function(x,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_conf_values_rec(x,source,lexbuf,__ocaml_lex_state$1)}
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
                   "Only ',' separated tags are alllowed"])
        }
      }
    };

var
 path_scheme=
  function(patt_allowed,source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](2,-1);
    return __ocaml_lex_path_scheme_rec(patt_allowed,source,lexbuf,138)};

var
 __ocaml_lex_path_scheme_rec=
  function(patt_allowed,source,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(5<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_path_scheme_rec
              (patt_allowed,source,lexbuf,__ocaml_lex_state$1)}
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
                   path_scheme(patt_allowed,source,lexbuf)]}
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
                    patt)}
         break;
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
                   "Bad pathanme scheme"])
        }
      }
    };

var $$unescape=function(lexbuf){return __ocaml_lex_unescape_rec(lexbuf,147)};

var
 __ocaml_lex_unescape_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_unescape_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         var c=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]+1);
         
         return /* :: */[0,c,$$unescape(lexbuf)];
        case 1:
         var c$1=Lexing["sub_lexeme_char"](lexbuf,lexbuf[5]);
         
         return /* :: */[0,c$1,$$unescape(lexbuf)];
        case 2:return /* [] */0
        }
      }
    };

var
 ocamlfind_query=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](24,-1);
    return __ocaml_lex_ocamlfind_query_rec(source,lexbuf,152)};

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
                  "Bad ocamlfind query"])}
    else
     {var n=Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2]);
      
      var d=Lexing["sub_lexeme"](lexbuf,lexbuf[10][3],lexbuf[10][4]);
      
      var v=Lexing["sub_lexeme"](lexbuf,lexbuf[10][5],lexbuf[10][6]);
      
      var a=Lexing["sub_lexeme"](lexbuf,lexbuf[10][7],lexbuf[10][8]);
      
      var lo=Lexing["sub_lexeme"](lexbuf,lexbuf[10][9],lexbuf[10][10]);
      
      var l=Lexing["sub_lexeme"](lexbuf,lexbuf[10][11],lexbuf[10][12]);
      
      return /* tuple */[0,n,d,v,a,lo,l]}
    };

var
 trim_blanks=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](6,-1);
    lexbuf[10][4]=lexbuf[6];
    lexbuf[10][3]=lexbuf[6];
    return __ocaml_lex_trim_blanks_rec(source,lexbuf,234)};

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
            :Lexing["sub_lexeme"](lexbuf,lexbuf[10][1],lexbuf[10][2])};

var
 tag_gen=
  function(source,lexbuf)
   {lexbuf[10]=CamlPrimitive["caml_make_vect"](6,-1);
    return __ocaml_lex_tag_gen_rec(source,lexbuf,240)};

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
                  "Not a valid parametrized tag"])}
    else
     {var name=Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[10][1]);
      
      var param=Lexing["sub_lexeme_opt"](lexbuf,lexbuf[10][3],lexbuf[10][2]);
      
      return /* tuple */[0,name,param]}
    };

var
 count_lines=
  function(lb,lexbuf){return __ocaml_lex_count_lines_rec(lb,lexbuf,245)};

var
 __ocaml_lex_count_lines_rec=
  function(lb,lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_count_lines_rec(lb,lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:return count_lines(lb,lexbuf);
        case 1:Lexing["new_line"](lb);return count_lines(lb,lexbuf);
        case 2:return /* () */0
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

