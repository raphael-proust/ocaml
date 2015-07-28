var Printf=require("Printf");
var Loc=require("Loc");
var Lexing=require("Lexing");
var Printexc=require("Printexc");
var My_std=require("My_std");
var Glob=require("Glob");
var Error="unknown primitive:caml_set_oo_id";
var
 error=
  function(source,lexbuf,fmt)
   {var $js=Printf["ksprintf"];
    return $js
            (function(s)
              {var $js$1=Loc["of_lexbuf"];
               var $js$2=$js$1(source,lexbuf);
               var $js$3=[0,s,$js$2];
               var $js$4=[0,Error,$js$3];
               throw $js$4},
             fmt)};
var empty=[0,0,0];
var
 locate=
  function(source,lexbuf,txt)
   {var $js=Loc["of_lexbuf"];
    var $js$1=$js(source,lexbuf);
    return [0,txt,$js$1]};
var
 sublex=
  function(lexer,s)
   {var $js=Lexing["from_string"];var $js$1=$js(s);return lexer($js$1)};
var
 __ocaml_lex_tables=
  [0,
   "\0\0����\x01\0��\x02\0\x07\0\b\0��\f\0\x11\0\x16\0!\0��\r\0\x03\0&\0+\0\x12\0\x04\x006\0;\0��@\0E\0K\0P\0Z\0`\0��\x17\0��\x1b\0V\0����f\0h\0l\0��\x1d\0p\0����u\0{\0�\0�\0�\0�\0�����\0�\0�\0���\0�\0���\0�\0�\0�\0�\0�\0\x15\0��\x18\0-\0<\0����D\0'\0��A\0O\0S\0����U\0�\0���\0��\x1a\0���\0O\x01�\0�\0$\x01%\x01m\x01��/\0��X\x010\x01s\x01�\0�\0\x17\x01�\x01�\0\x01\x01z\x01e\x01\x06\x01�\x01�\x01�\x01���\x01�\x01�\x01�\0\n\x02\x14\x02�\0\x1f\x024\x02��?\x02��I\x02����4\0���\x01\r\x01�\x01\x15\x01D\x02h\x02\x1f\x01�\x01t\0��]\0�\0\x1a\x03�\x01����v\0H\0�����\0���\x01��)\0�\x01�\x010\0�\x01�\x014\0;\0J\0L\0P\0�\0\x0f\x025\x01�\x01�\x01d\0X\0j\0f\0q\0o\0t\0�\0~\0�\0�\0v\x02\x10\x02-\x02�\x01�\0�\0�\0�\0�\0�\0�\0�\x02@\x01�\x01X\x02�\0�\0�\0�\0�\0�\0$\x01�\0)\x01\x1a\x01�\x02M\x02T\x02z\x02�\0�\0�\0�\0�\0�\0\x0b\x01M\x01�\x02b\x02i\x02�\x02\x19\x01/\x013\x01)\x016\x019\x01V\x01�\x01�\x02m\x02n\x02�\x02�\x02�\x02�\x02�\x02�\x02�\x02�\x02���\x02�\x01���\x02��\x7f\x02�\x02�\x01��",
   "������\x02\0������\x01\0��\0\0\x02\0������\x02\0\x02\0\0\0\x02\0����������\x02\0\x02\0\x04\0\x04\0������\0\0����������\x01\0\x03\0������������\x02\0\x02\0����\0\0������\x01\0\x03\0����������\x01\0\x03\0\x03\0����\0\0\0\0��\x01\0\0\0������\0\0\0\0��\x01\0\0\0������\0\0����\x05\0��\x02\0��\x05\0\x05\0\x04\0����������\0\0��\x04\0��\0\0\0\0����������\0\0\0\0��\x04\0������\x01\0\x01\0\x01\0����\0\0����\0\0��\x01\0��������\x01\0��\0\0\x03\0\x03\0��������\0\0����\x03\0\0\0����������������\x01\0������\x01\0\x01\0\x01\0����������������������������������������������������������������������������������������������������������������������������������������������������\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0����\0\0����\0\0����\0\0\x01\0��",
   "\x03\0\0\0\0\0\x05\0\0\0\x05\0\t\0��\0\0\t\0\t\0\t\0\x10\0\0\0����\x10\0\x10\0����\x10\0\x17\0\0\0\x17\0\x18\0\x17\0\x17\0\x17\0\x17\0\0\0��\0\0 \0$\0\0\0\0\0$\0$\0$\0\0\0��*\0\0\0\0\x000\0��0\0��0\x004\0\0\0\0\x004\x004\x004\0\0\0��;\0\0\0;\0@\0;\0@\0;\0@\0D\0\0\0C\0D\0F\0\0\0\0\0H\0L\0\0\0K\0L\0N\0\0\0\0\0P\0S\0\0\0Z\0\0\0��\0\0\\0Z\0��Z\0Z\0\\0Z\0\0\0��\0\0h\0\\0����������h\0h\0��������Z\0q\0\0\0q\0q\0v\0t\0{\0v\0w\0y\0y\0\0\0{\0\0\0~\0\0\0\0\0��\0\0�����������������\0\0\0���\0���\0\0\0\0\0���\0\0\0\0\0��\0\0�\0\0\0�������������������������\0�����\0�����������������������\0�����\0���������������\0�����\0���������������������\0�����\0�����������������\0�����\0�����������������\0�����\0�\0�\0�\0�\0�����\0\0\0�\0�\0\0\0��\0\0������\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0����\x01\0����\n\0\b\0\b\0\n\0\x07\0����\x13\0����\x0b\0\b\0\x13\0\x0b\0\x07\0\x0b\0\b\0\x1f\0\x0b\0\x07\0V\0\x1f\0(\0\n\0\x1e\0(\0\x11\0\x0f\0��\x11\0\x0e\0����\x0b\0����\x14\0\x13\0\x0b\0\x14\0\x12\0`\0\x01\0\x04\0\x04\0(\0�\0\x14\0\x13\0\x11\0\x14\0\x12\0\x19\0\x19\0��\x19\0\x1a\0����\x14\0���� \0\x1f\0C\0 \0\x1e\0��\x1b\0\x1b\0\x14\0\x1b\0\x1c\0\x1b\0\x1b\0\x19\0\x1b\0\x1c\0\x18\0%\0��K\0%\0\x1b\0\x1b\0 \0\x1b\0\x1c\0��\x1b\0\x1b\0\x1b\0\x1b\0\x1c\0\x18\0(\0\x1b\0&\0(\0\x18\0&\0&\0%\0H\0&\0-\0\x1b\0��-\0\x18\0.\0��\x1b\0.\0\"\0\x18\0/\0�\0(\0/\0&\0���\0.\0&\0P\0.\0��-\0�\0��/\0��.\0/\0�\0���\0��/\0,\0���\0�\x005\0��.\x005\0�\x008\0�\0.\x008\x006\0/\0�\x006\x006\0��8\x006\0��8\0�\0���\0.\x005\0=\0�\0�\0=\x008\0����>\x006\0��>\x002\x006\0�\x008\0?\0���\0?\0�\0���\0>\0=\0��>\0|\0z\0?\0��>\0?\0�\0���\0<\0��Y\0?\0�\0Y\0����X\0V\0>\0X\0U\0�\0�\0>\0?\0���\0�\0�������\0f\0Y\0`\0f\0>\0_\0�\0X\0f\0��W\0g\0�\0\x02\0����\r\0\r\0��`\0����_\0f\0k\0��\r\0j\0�\0Y\0��\r\0m\0R\0B\0���\0���\0�\0\x1d\0Y\0'\0�\0�\0f\0\r\0�\0f\0Y\0a\0��J\0�\0�\0�\0\r\0�\0��f\0`\0l\0g\0_\0�\0�\0Y\0\r\0f\0�\0�\0d\0\x16\0G\0c\0n\0�\0�����\0�\0��\x1d\0e\0b\0�\0�\0�\0\x16\0�\0�\0�\0��\x16\0Y\0�\0O\0�\0��#\0n\0]\0V\0\x16\0]\0U\0�\0Y\0a\0\x16\0a\0`\0�\0a\0_\0'\0�\0#\0�\0a\0�\0#\0�\0Y\0]\0+\0Y\0\\0e\0�\0��]\0V\0a\0]\0U\0+\0f\0d\0�\0f\0n\0b\0��Y\0k\0Y\0Y\0�\0�\0Y\0+\0f\0b\0]\0g\0��\\0���\0f\0�\0f\0f\x003\0f\0�\0Y\0�\x007\0�\0�\0�\x003\0�\0Y\0Y\x003\0Y\x007\0Y\0�\0����[\0f\0Y\0�\0:\0�\0�\0�\0�\0i\0�����\0�\0Y\0�\0Y\0�\0�\0:\0�\0�\0l\0���\0�\0��Y\0�\0�\0[\0�\0:\0�\0\0\0�\0e\0��\0\0�\0\0\0�\0�\0l\0\0\0\0\0\0\0T\0���\0n\0���\0�\0p\0���\0p\0�\0�\0�\0e\0\0\0�\0^\0�\0\0\0�\0�\0����\0\0��\0\0l\0�\0p\0��t\0����^\0��p\0p\0p\0^\0r\0p\0s\0\0\0��\0\0�\0���\0u\0����t\0���\0p\0��\0\0��\0\0�\0���\0�\0�\0�\0�\0�\0����u\0���\0\0\0��^\0��t\0�����������\0\0\0�\0^\0��������\0\0���\0�\0u\0�\0��w\0�����������\0�\0��\0\0��������\0\0�����\0x\0T\0�\0\0\0�\0�\0���\0�\0�\0^\0���\0�������\0�����\0�\0\0\0�\0�\0�������\0\0\0���\0T\0���\0�\0�\0�\0�\0�\0�\0�\0�\0�\0���\0�\0\0\0\0\0\0\0�\0�\0���\0�\0�\0\0\0�\0�\0�\0�\0\0\0\0\0�\0�\0�\0\0\0�\0�\0�\0\0\0�\0�\0�\0\0\0\0\0\0\0��\0\0\0\0\0\0�\0�\0�\0�\0�\0�\0�\0�\0���\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0\0\0�\0�\0�\0�\0�\0�\0�\0\0\0�\0��\0\0�\0�\0�\0\0\0�\0�\0�\0�\0�\0\0\0�\0�\0�\0\0\0�\0�\0�\0�\0�\0��\0\0\0\0\0\0�\0�\0p\0\0\0��\0\0\0\0�\0���\0�\0\0\0�\0�\0�\0�\0�\0���\0�\0�\0�\0\0\0�\0�\0�\0\0\0\0\0�\0\0\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0\0\0���\0\0\0\0\0���\0\0\0��\0\0\0\0\0\0���\0�\0�\0\0\0���\0\0\0�\0\0\0��\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0�\0�����\0��\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0����\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0�\0\0\0\0\0\0\0�\0\0\0\x7f\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0\0\0\0\0\0\0��\0\0\0\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0\0\0��\0\0\0\0�\0���\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0����\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "��������������������\0\0\x03\0\x05\0\0\0\x03\0\x05\0\x06\0\x06\0\x07\0\x06\0\x06\0\t\0\t\0\x0e\0\t\0\t\0\n\0\n\0\x12\0\n\0\n\0\x0b\0\x0b\0\x1e\0\x0b\0\x0b\0U\0 \0(\0\x06\0 \0(\0\f\0\f\0\t\0\f\0\f\0\x10\0\x10\0\n\0\x10\0\x10\0\x11\0\x11\0\x0b\0\x11\0\x11\0_\0\0\0\x03\0\x05\0(\0�\0\x14\0\x14\0\f\0\x14\0\x14\0\x15\0\x15\0\x10\0\x15\0\x15\0\x17\0\x17\0\x11\0\x17\0\x17\0\x18\0\x18\0A\0\x18\0\x18\0C\0\x19\0\x19\0\x14\0\x19\0\x19\0\x1a\0\x1a\0\x15\0\x1a\0\x1a\0\x15\0!\0\x17\0I\0!\0\x1b\0\x1b\0\x18\0\x1b\0\x1b\0D\0\x1c\0\x1c\0\x19\0\x1c\0\x1c\0\x19\0$\0\x1a\0%\0$\0\x1a\0%\0&\0!\0E\0&\0)\0\x1b\0K\0)\0\x1b\0,\0H\0\x1c\0,\0!\0\x1c\0-\0�\0$\0-\0%\0L\0�\0.\0&\0M\0.\0P\0)\0�\0$\0/\0%\0,\0/\0�\0&\0�\x000\0-\0)\x000\0�\0�\x001\0,\0.\x001\0�\x004\0�\0-\x004\x005\0/\0�\x005\x006\0.\x008\x006\x000\x008\0�\0�\0�\0/\x001\x009\0�\0�\x009\x004\x000\0;\0<\x005\0;\0<\x001\x006\0�\x008\0=\x004\0�\0=\0�\x005\0�\0>\x009\x006\0>\0t\0w\0?\0;\0<\0?\0�\0@\0�\x009\0@\0Y\0=\0�\0Y\0;\0<\0Q\0Q\0>\0Q\0Q\0�\0�\0=\0?\0S\0�\0�\0S\0@\0>\0�\0d\0Y\0W\0d\0?\0W\0�\0Q\0e\0@\0Q\0e\0�\0\0\0\x03\0\x05\0\x0f\0\x13\0Z\0h\0\x06\0Z\0h\0d\0i\0\t\0\x0e\0i\0�\0l\0\n\0\x12\0l\0Q\0A\0\x0b\0�\0C\0�\0�\0 \0S\0(\0�\0�\0f\0\f\0�\0f\0d\0W\0\x10\0I\0�\0�\0�\0\x11\0�\0D\0[\0\\0Y\0[\0\\0�\0�\0Z\0\x14\0f\0�\0�\0b\0\x15\0E\0b\0S\0�\0\x17\0K\0�\0�\0H\0\x18\0d\0W\0�\0�\0�\0\x19\0�\0�\0�\0L\0\x1a\0f\0�\0M\0�\0P\0!\0Z\0X\0X\0\x1b\0X\0X\0�\0[\0\\0\x1c\0a\0a\0�\0a\0a\0$\0�\0%\0�\0b\0�\0&\0�\0k\0X\0)\0k\0X\0f\0�\0,\0]\0]\0a\0]\0]\0-\0c\0c\0�\0c\0[\0\\0.\0j\0j\0k\0j\0�\0�\0X\0/\0n\0b\0]\0n\0�\0]\x000\0�\0c\0�\0g\0g\x001\0g\0�\0j\0�\x004\0�\0�\0�\x005\0�\0m\0m\x006\0m\x008\0]\0�\0t\0w\0X\0g\0c\0�\x009\0�\0�\0�\0�\0a\0;\0<\0�\0�\0m\0�\0n\0�\0�\0=\0�\0�\0k\0�\0�\0�\0>\0g\0�\0�\0]\0�\0?\0�\0���\0c\0@\0���\0���\0�\0j\0������Q\0q\0�\0n\0q\0�\0�\0o\0S\0�\0o\0�\0�\0�\0g\0���\0W\0�\0���\0�\0r\0q\0��r\0��m\0�\0o\0q\0q\0q\0Z\0h\0q\0o\0o\0o\0i\0o\0o\0o\0��r\0���\0s\0�\0q\0s\0r\0r\0r\0�\0o\0r\0��u\0���\0u\0�\0�\0�\0�\0�\0�\0v\0s\0r\0v\0�\0��[\0\\0s\0s\0s\0x\0u\0s\0x\0�\0���\0b\0u\0u\0u\0v\0��u\0�\0�\0s\0�\0v\0v\0v\0y\0x\0v\0y\0�\0�\0u\0��x\0x\0x\0{\0��x\0{\0�\0v\0X\0�\0��}\0}\0y\0}\0}\0�\0a\0x\0�\0y\0y\0y\0�\0{\0y\0�\0�\0���\0�\0{\0{\0{\0}\0��{\0�\0]\0y\0�\0�\0�\0�\0�\0�\0}\0�\0�\0�\0{\0�\0�\0�������\0�\0n\0�\0�\0�\0���\0�\0�\0�\0�����\0�\0�\0���\0�\0�\0���\0�\0�\0�������\0�������\0�\0�\0�\0�\0�\0�\0}\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0���\0�\0�\0�\0�\0�\0�\0���\0�\0���\0�\0�\0���\0�\0�\0�\0�\0���\0�\0�\0���\0�\0�\0�\0�\0q\0�������\0�\0o\0���\0�����\0�\0�\0�\0���\0�\0�\0�\0�\0r\0�\0�\0�\0�\0���\0�\0�\0�����\0�������\0�����������\0������s\0�\0�����\0�\0���\0������u\0�\0�\0�\0���\0�\0���\0��v\0���������\0���������\0x\0�\0�\0�\0�����\0���������������������������\0y\0��������������������{\0�������\0�������\0��}\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�������\0�����\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0���\0�����\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�����������������\0���������\0�\0�����������\0�������\0���������������\0�����������\0�������������\0�����������������������������������\0�����������\0�����������������\0�����������������������������������������\0������������������������������������������������������������������",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x02\0\x06\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\b\0\f\0\0\0\0\0\0\0\x11\0!\0&\0+\0\0\0\0\0\0\0\0\0-\0\0\0\0\x001\x002\x003\0\x12\0\0\0\x14\0\0\0\0\0;\0\x16\0<\0\x17\0\0\0@\0\0\0\0\0K\0X\0Y\0\x12\0\0\0Z\0\0\0\0\0^\0g\0h\0i\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0v\0\0\0�\0\0\0\0\0\0\0�\0�\0\f\0�\0�\0�\0�\0\0\0\0\0\0\0\0\0�\0�\0�\0\x12\0�\0�\0\0\0\0\0�\0�\0\r\0�\0�\0\x1f\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0�\0\0\0\0\0\0\0\0\0\0\0K\0�\0�\0�\0�\0\0\0\0\0\0\0\0\0\x01\0\0\0x\x01\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x14\0\x02\x01\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x15\0\x07\x01\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\x16\0\f\x01\0\0\0\0\r\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0\x14\x01\0\0\0\0\x12\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\x1c\x01\0\0\0\0!\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0/\0,\x01\0\0\0\0-\x015\x01:\x01D\x01J\x01\0\0\0\0E\x01\0\0R\x01E\0!\x01\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\x1a\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0O\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0~\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0~\0\0\0\0\0\0\0\x04\0\x04\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0�\0\0\0\x01\x01\x01\x01\x01\x01\x06\x01\x01\x01\x01\x01\0\0\0\0\x1c\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0)\0\0\0\0\0\0\0)\0\x1d\0\0\0\x1d\0\x1d\0\x1d\0)\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\x17\0\x17\0\x17\0\x0b\x01\0\0\0\0\x19\x01\0\0\x19\x01�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0V\0\x01\0\x01\0\x01\0\x01\0�\0\x01\0\x01\0�\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\n\0\x01\0\x01\0\n\0\0\0\n\0\n\0\0\0\n\0\n\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\n\0\x17\0\x01\0\n\0\n\0�\0�\0�\0\0\0\n\0\n\0\0\0\x01\0�\0\0\0\x01\0\0\0�\0\x01\0\x01\0\0\0\0\0\0\0\n\0\n\0\n\0\x01\0\n\0\n\0\x01\0\x17\x009\0�\0\x17\0\0\0\0\0\0\0\0\0\0\0\x01\0\x17\0\x01\0\x01\0\x17\0\x01\0\0\0\0\0\n\0\n\0\x01\0\0\0\0\0\0\0\x17\0"\0\0\0\0\0"\0\0\0\0\0\0\0\x17\0\x01\0\x17\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0`\0\0\0\x17\0`\0\x17\0"\0C\0\0\0\0\0C\0\0\0\0\0j\0\0\0�\0j\0\0\0�\0\0\0\0\0\0\0�\0�\0�\0�\0�\0�\0\0\0�\0C\0�\0\0\0\0\0�\0\0\0j\0�\0�\0\0\0�\0\0\0\0\x009\0V\0�\0\0\0�\0\x01\0e\0\0\0\x01\0V\0\0\0�\0V\0\0\0\0\0V\0\0\0�\0V\0V\0�\0V\0V\0\x01\0V\0\0\0\x01\0\0\0V\0\0\0V\0V\0V\x000\0<\0Y\0\0\0V\0V\0\0\0\0\0\0\0\0\0V\0V\0\0\0\x01\0J\0J\0\x01\0\0\0\0\0\x01\0s\0�\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0Y\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0�\0\0\0\0\0�\0\0\0�\0\0\0\0\0�\0\0\0�\0\0\0\0\0�\0\0\0\0\0\0\0\0\0�\0\0\0\0\0�\0\0\0�\0\0\0\0\0�\0\0\0�\0�\0\0\0\0\0\0\0�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0�\0\0\0\0\0�\0\0\0\0\0\0\0�\0\0\0\n\0\n\0\0\0\n\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0�\0\n\0\n\0\0\0\n\0\x1d\0\0\0\n\0\n\0\n\0\n\0\x10\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1d\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\x01\0\0\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
   "������������������\x06\0\n\0\x0b\0\x06\0\n\0\x0b\0\f\0\x11\0\x14\0\f\0\x11\0\x14\0\x15\0\x15\0l\0\x15\0\x15\0\x19\0\x19\0e\0\x19\0\x19\0e\0\x06\0\n\0\x0b\0������\f\0\x11\0\x14\0�\0\x1a\0\x1a\0\x15\0\x1a\0\x1a\0\x1b\0\x1b\0\x19\0\x1b\0\x1b\0\x1c\0\x1c\0!\0\x1c\0\x1c\0!\0$\0%\0&\0$\0%\0&\0)\0\x1a\0-\0/\0,\0.\0\x1b\0,\0.\x001\0o\0\x1c\x001\0!\0�\0�\0�\0$\0%\0&\x004\0�\0�\x004\0�\0!\0�\0,\0.\0$\0%\0&\x001\x005\x006\x009\x005\x006\x009\0<\0Y\0�\0<\x004\x001\0���\0��=\0>\0?\0=\0>\0?\0��4\x005\x006\x009\0������<\0Q\0Q\0��Q\0Q\x005\x006\x009\0=\0>\0?\0S\0W\0Z\0S\0W\0Z\0��[\0��=\0[\0?\0Q\0X\0X\0\\0X\0X\0\\0]\0]\0b\0]\0]\0b\0������c\0c\0d\0c\0n\0d\0��n\0X\0f\0Q\0��f\0��]\0g\0g\0��g\0��S\0W\0Z\0c\0��d\0�\0[\0�\0�\0j\0�\0f\0j\0X\0\\0k\0��g\0k\0]\0b\0m\0m\0}\0m\0��}\0��c\0��d\0n\0j\0S\0W\0Z\0��f\0k\0r\0����r\0g\0m\0��}\0X\0\\0�\0�����\0]\0b\0�\0�\0�\0�\0�\0��r\0������n\0����r\0r\0r\0�\0�\0r\0�\0�������\0�\0�\0�\0���\0�\0�\0�\0r\0�\0�\0�\0�\0�\0�\0�\0�\0���\0�\0�\0�\0�\0�\0�\0�����\0�\0�\0�\0�\0���\0�\0!\0�\0����$\0%\0&\0�\0�\0�\0�\0�\0�\0�\0���\0���\0�\x001\0�\0�\0�\0�\0�\0�\0�\0������4\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\x005\x006\0�\0���\0�����\0���������\0�\0���������\0���\0�\0�\0�����\0�\0������Q\0�����\0�\0�\0�����\0�\0S\0W\0Z\0��������[\0���������\0��X\0\\0��������]\0b\0��������������������n\0���������\0�����\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�������������\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0���������\0r\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�\0�����������\0�������������������\0���������\0���������\0�\0���������\0���\0���������������\0���������\0���������������������\0�\0���������������\0���������\0�������������������\0�\0���������\0���������������\0����������������������������������������������������������������������������",
   "�\x01��\0\x01�\x04��\x03�\x02��\0\x03�\0\x02\x01\x04�\x02��\0\x02�\x05�\x04��\x06�\x05�\x04��\x05�\x06\x03\x04��\x07\x04\x05�\x06\x03\x04��\x06\x03�\x05�\x06\x03\x07��\x05�\x04�\x03��\x07�\x05��\x02\x05\0\x03\x01\x04�\x03\x06�\x07\x04\x05�\x04��\x05�\x06\x03�\x03\x06\x04\x07�\x06\x03\x05�\x03�\x04��\b\x03\x03\x06\x06\b\x05�\x07��\x02\x05\0\x06\x01\x04�\x05��\x04\x07�\x04\x07\x05�\x07��\x05�\x04\x07�\x01\x02�\r�\f��\r��\f�\r��\x0f�\x0e��\x0f��\x0e�\x0f��\x11�\x10��\x11��\x10�\x11��\x13�\x12��\x13��\x12�\x13��\x15�\x14��\x15��\x14�\x15��\x17�\x16��\x17��\x16�\x17��\x04\x10\x05\x11\0\f\x01\r\b\x14\t\x15\n\x16\x0b\x17\x02\x0e\x03\x0f\x06\x12\x07\x13�\0\x03\x01\x02�\0\x05\x01\x04�\x03\x05\x02��\x03\x05\x02\x04\x05�\x04��\x03��\x02�\0\x03�\x02\x04\x01\x05\0\x03�"];
var
 ocamldep_output=
  function(source,lexbuf)
   {return __ocaml_lex_ocamldep_output_rec(source,lexbuf,0)};
var
 __ocaml_lex_ocamldep_output_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_ocamldep_output_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var k=$js$5(lexbuf,lexbuf[5],lexbuf[6]+-1);
        var $js$6=space_sep_strings_nl(source,lexbuf);
        var x=[0,k,$js$6];
        var $js$7=ocamldep_output(source,lexbuf);
        return [0,x,$js$7]}
      else
       if($js$4==1)
        {return 0}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,
                     "Expecting colon followed by space-separated module name list",
                     0],
                    "Expecting colon followed by space-separated module name list"])}}};
var
 space_sep_strings_nl=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_space_sep_strings_nl_rec(source,lexbuf,6)};
var
 __ocaml_lex_space_sep_strings_nl_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_space_sep_strings_nl_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[6]);
        var $js$6=space_sep_strings_nl(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {var $js$7=Lexing["new_line"];$js$7(lexbuf);return 0}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,
                     "Expecting space-separated strings terminated with newline",
                     0],
                    "Expecting space-separated strings terminated with newline"])}}};
var
 space_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_space_sep_strings_rec(source,lexbuf,12)};
var
 __ocaml_lex_space_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_space_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[6]);
        var $js$6=space_sep_strings(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {return 0}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,"Expecting space-separated strings",0],
                    "Expecting space-separated strings"])}}};
var
 blank_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_blank_sep_strings_rec(source,lexbuf,21)};
var
 __ocaml_lex_blank_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=4<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_blank_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {return blank_sep_strings(source,lexbuf)}
      else
       if($js$4==1)
        {var exit=10}
       else
        if($js$4==2)
         {var $js$5=Lexing["sub_lexeme"];
          var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[6]);
          var $js$6=blank_sep_strings(source,lexbuf);
          return [0,word,$js$6]}
        else
         if($js$4==3)
          {var exit=10}
         else
          if($js$4==4)
           {return error
                    (source,
                     lexbuf,
                     [0,
                      [11,"Expecting blank-separated strings",0],
                      "Expecting blank-separated strings"])}}
    switch(exit){case 10:return 0}};
var
 comma_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][3]=lexbuf[6],0;
    lexbuf[10][2]=lexbuf[6],0;
    return __ocaml_lex_comma_sep_strings_rec(source,lexbuf,33)};
var
 __ocaml_lex_comma_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=3<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_comma_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[10][1]);
        return [0,word,0]}
      else
       if($js$4==1)
        {var $js$6=Lexing["sub_lexeme"];
         var word$1=$js$6(lexbuf,lexbuf[10][0],lexbuf[6]);
         var $js$7=comma_sep_strings_aux(source,lexbuf);
         return [0,word$1,$js$7]}
       else
        if($js$4==2)
         {return 0}
        else
         if($js$4==3)
          {return error
                   (source,
                    lexbuf,
                    [0,
                     [11,"Expecting comma-separated strings (1)",0],
                     "Expecting comma-separated strings (1)"])}}};
var
 comma_sep_strings_aux=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    return __ocaml_lex_comma_sep_strings_aux_rec(source,lexbuf,41)};
var
 __ocaml_lex_comma_sep_strings_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_comma_sep_strings_aux_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[6]);
        var $js$6=comma_sep_strings_aux(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {return 0}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,"Expecting comma-separated strings (2)",0],
                    "Expecting comma-separated strings (2)"])}}};
var
 comma_or_blank_sep_strings=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][3]=lexbuf[6],0;
    lexbuf[10][2]=lexbuf[6],0;
    return __ocaml_lex_comma_or_blank_sep_strings_rec(source,lexbuf,49)};
var
 __ocaml_lex_comma_or_blank_sep_strings_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=3<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_comma_or_blank_sep_strings_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[10][1]);
        return [0,word,0]}
      else
       if($js$4==1)
        {var $js$6=Lexing["sub_lexeme"];
         var word$1=$js$6(lexbuf,lexbuf[10][0],lexbuf[6]);
         var $js$7=comma_or_blank_sep_strings_aux(source,lexbuf);
         return [0,word$1,$js$7]}
       else
        if($js$4==2)
         {return 0}
        else
         if($js$4==3)
          {return error
                   (source,
                    lexbuf,
                    [0,
                     [11,"Expecting (comma|blank)-separated strings (1)",0],
                     "Expecting (comma|blank)-separated strings (1)"])}}};
var
 comma_or_blank_sep_strings_aux=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_comma_or_blank_sep_strings_aux_rec(source,lexbuf,57)};
var
 __ocaml_lex_comma_or_blank_sep_strings_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=__ocaml_lex_state$1!=3;
      if($js$2)
       {var $js$3=lexbuf[1];
        $js$3(lexbuf);
        return __ocaml_lex_comma_or_blank_sep_strings_aux_rec
                (source,lexbuf,__ocaml_lex_state$1)}
      else
       {return error
                (source,
                 lexbuf,
                 [0,
                  [11,"Expecting (comma|blank)-separated strings (2)",0],
                  "Expecting (comma|blank)-separated strings (2)"])}}
    else
     {var $js$4=__ocaml_lex_state$1>=2;
      if($js$4)
       {return 0}
      else
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[10][0],lexbuf[6]);
        var $js$6=comma_or_blank_sep_strings_aux(source,lexbuf);
        return [0,word,$js$6]}}};
var
 parse_environment_path_w=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_w_rec(source,lexbuf,65)};
var
 __ocaml_lex_parse_environment_path_w_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_environment_path_w_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[5],lexbuf[6]);
        var $js$6=parse_environment_path_aux_w(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {var $js$7=Lexing["sub_lexeme"];
         var word$1=$js$7(lexbuf,lexbuf[5]+1,lexbuf[6]);
         var $js$8=parse_environment_path_aux_w(source,lexbuf);
         var $js$9=[0,word$1,$js$8];
         return [0,"",$js$9]}
       else
        if($js$4==2){return 0}}};
var
 parse_environment_path_aux_w=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_aux_w_rec(source,lexbuf,69)};
var
 __ocaml_lex_parse_environment_path_aux_w_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_environment_path_aux_w_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[5]+1,lexbuf[6]);
        var $js$6=parse_environment_path_aux_w(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {return 0}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,"Impossible: expecting colon-separated strings",0],
                    "Impossible: expecting colon-separated strings"])}}};
var
 parse_environment_path=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_rec(source,lexbuf,73)};
var
 __ocaml_lex_parse_environment_path_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_environment_path_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[5],lexbuf[6]);
        var $js$6=parse_environment_path_aux(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {var $js$7=Lexing["sub_lexeme"];
         var word$1=$js$7(lexbuf,lexbuf[5]+1,lexbuf[6]);
         var $js$8=parse_environment_path_aux(source,lexbuf);
         var $js$9=[0,word$1,$js$8];
         return [0,"",$js$9]}
       else
        if($js$4==2){return 0}}};
var
 parse_environment_path_aux=
  function(source,lexbuf)
   {return __ocaml_lex_parse_environment_path_aux_rec(source,lexbuf,77)};
var
 __ocaml_lex_parse_environment_path_aux_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_environment_path_aux_rec
              (source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var word=$js$5(lexbuf,lexbuf[5]+1,lexbuf[6]);
        var $js$6=parse_environment_path_aux(source,lexbuf);
        return [0,word,$js$6]}
      else
       if($js$4==1)
        {return 0}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,"Impossible: expecting colon-separated strings",0],
                    "Impossible: expecting colon-separated strings"])}}};
var
 conf_lines=
  function(dir,source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][3]=lexbuf[6],0;
    return __ocaml_lex_conf_lines_rec(dir,source,lexbuf,81)};
var
 __ocaml_lex_conf_lines_rec=
  function(dir,source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=5<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_conf_lines_rec(dir,source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var exit=42}
      else
       if($js$4==1)
        {var exit=43}
       else
        if($js$4==2)
         {var exit=42}
        else
         if($js$4==3)
          {var exit=43}
         else
          if($js$4==4)
           {var $js$5=Lexing["sub_lexeme"];
            var k=$js$5(lexbuf,lexbuf[10][0],lexbuf[10][1]);
            var $js$6=Lexing["sub_lexeme"];
            var s1=$js$6(lexbuf,lexbuf[10][1],lexbuf[10][2]);
            var $js$7=Lexing["sub_lexeme"];
            var s2=$js$7(lexbuf,lexbuf[10][2]+1,lexbuf[6]);
            try
             {var $js$8=Glob["parse"];var bexpr=$js$8(dir,k)}
            catch(exn)
             {var $js$9=Printexc["to_string"];
              var $js$10=$js$9(exn);
              var
               bexpr=
                error
                 (source,
                  lexbuf,
                  [0,
                   [11,"Invalid globbing pattern ",[3,0,0]],
                   "Invalid globbing pattern %S"],
                  k,
                  $js$10)}
            var $js$11=count_lines(lexbuf);
            sublex($js$11,s1);
            var $js$12=count_lines(lexbuf);
            sublex($js$12,s2);
            var v1=conf_value(empty,source,lexbuf);
            var v2=conf_values(v1,source,lexbuf);
            var rest=conf_lines(dir,source,lexbuf);
            return [0,[0,bexpr,v2],rest]}
          else
           if($js$4==5)
            {return error
                     (source,
                      lexbuf,
                      [0,[11,"Invalid line syntax",0],"Invalid line syntax"])}}
    switch(exit)
     {case 42:
       var $js$13=Lexing["new_line"];
       $js$13(lexbuf);
       return conf_lines(dir,source,lexbuf);
      case 43:return 0
      }};
var
 conf_value=
  function(x,source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_conf_value_rec(x,source,lexbuf,111)};
var
 __ocaml_lex_conf_value_rec=
  function(x,source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_conf_value_rec(x,source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var tag=$js$5(lexbuf,lexbuf[5]+1,lexbuf[6]);
        var $js$6=locate(source,lexbuf,tag);
        var $js$7=[0,$js$6,x[2]];
        return [0,x[1],$js$7]}
      else
       if($js$4==1)
        {var $js$8=Lexing["sub_lexeme"];
         var tag$1=$js$8(lexbuf,lexbuf[10][0],lexbuf[6]);
         var $js$9=locate(source,lexbuf,tag$1);
         var $js$10=[0,$js$9,x[1]];
         return [0,$js$10,x[2]]}
       else
        if($js$4==2)
         {return error
                  (source,
                   lexbuf,
                   [0,
                    [11,
                     "Invalid tag modifier only '+ or '-' are allowed as prefix for tag",
                     0],
                    "Invalid tag modifier only '+ or '-' are allowed as prefix for tag"])}}};
var
 conf_values=
  function(x,source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_conf_values_rec(x,source,lexbuf,125)};
var
 __ocaml_lex_conf_values_rec=
  function(x,source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=3<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_conf_values_rec(x,source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var s1=$js$5(lexbuf,lexbuf[5],lexbuf[10][0]);
        var $js$6=Lexing["sub_lexeme"];
        var s2=$js$6(lexbuf,lexbuf[10][0]+1,lexbuf[6]);
        var $js$7=count_lines(lexbuf);
        sublex($js$7,s1);
        var $js$8=count_lines(lexbuf);
        sublex($js$8,s2);
        var $js$9=conf_value(x,source,lexbuf);
        return conf_values($js$9,source,lexbuf)}
      else
       if($js$4==1)
        {var $js$10=Lexing["new_line"];$js$10(lexbuf);return x}
       else
        if($js$4==2)
         {return x}
        else
         if($js$4==3)
          {return error
                   (source,
                    lexbuf,
                    [0,
                     [11,"Only ',' separated tags are alllowed",0],
                     "Only ',' separated tags are alllowed"])}}};
var
 path_scheme=
  function(patt_allowed,source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    return __ocaml_lex_path_scheme_rec(patt_allowed,source,lexbuf,138)};
var
 __ocaml_lex_path_scheme_rec=
  function(patt_allowed,source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=5<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_path_scheme_rec
              (patt_allowed,source,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var prefix=$js$5(lexbuf,lexbuf[5],lexbuf[6]);
        var $js$6=path_scheme(patt_allowed,source,lexbuf);
        return [0,[0,970337770,prefix],$js$6]}
      else
       if($js$4==1)
        {var $js$7=Lexing["sub_lexeme"];
         var var=$js$7(lexbuf,lexbuf[5]+2,lexbuf[6]+-1);
         var $js$8=path_scheme(patt_allowed,source,lexbuf);
         return [0,[0,4298439,[0,var,0]],$js$8]}
       else
        if($js$4==2)
         {var $js$9=Lexing["sub_lexeme"];
          var var$1=$js$9(lexbuf,lexbuf[5]+2,lexbuf[10][0]);
          var $js$10=Lexing["sub_lexeme"];
          var patt=$js$10(lexbuf,lexbuf[10][0]+1,lexbuf[6]+-1);
          var $js$11=patt_allowed;
          if($js$11)
           {var $js$12=My_std["String"][14];
            var $js$13=Lexing["from_string"];
            var $js$14=$js$13(patt);
            var $js$15=unescape($js$14);
            var patt$1=$js$12($js$15);
            var $js$16=Glob["parse"];
            var $js$17=$js$16(0,patt$1);
            var $js$18=[0,var$1,$js$17];
            var $js$19=[0,4298439,$js$18];
            var $js$20=path_scheme(patt_allowed,source,lexbuf);
            return [0,$js$19,$js$20]}
          else
           {return error
                    (source,
                     lexbuf,
                     [0,
                      [11,
                       "Patterns are not allowed in this pathname (",
                       [12,
                        37,
                        [12,40,[2,0,[12,58,[2,0,[11,") only in ~prod)",0]]]]]]],
                      "Patterns are not allowed in this pathname (%%(%s:%s) only in ~prod)"],
                     var$1,
                     patt)}}
        else
         if($js$4==3)
          {var $js$21=path_scheme(patt_allowed,source,lexbuf);
           return [0,[0,4298439,[0,"",0]],$js$21]}
         else
          if($js$4==4)
           {return 0}
          else
           if($js$4==5)
            {return error
                     (source,
                      lexbuf,
                      [0,[11,"Bad pathanme scheme",0],"Bad pathanme scheme"])}}};
var unescape=function(lexbuf){return __ocaml_lex_unescape_rec(lexbuf,147)};
var
 __ocaml_lex_unescape_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_unescape_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme_char"];
        var c=$js$5(lexbuf,lexbuf[5]+1);
        var $js$6=unescape(lexbuf);
        return [0,c,$js$6]}
      else
       if($js$4==1)
        {var $js$7=Lexing["sub_lexeme_char"];
         var c$1=$js$7(lexbuf,lexbuf[5]);
         var $js$8=unescape(lexbuf);
         return [0,c$1,$js$8]}
       else
        if($js$4==2){return 0}}};
var
 ocamlfind_query=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    return __ocaml_lex_ocamlfind_query_rec(source,lexbuf,152)};
var
 __ocaml_lex_ocamlfind_query_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=__ocaml_lex_state$1!=0;
    if($js$1)
     {var $js$2=__ocaml_lex_state$1!=1;
      if($js$2)
       {var $js$3=lexbuf[1];
        $js$3(lexbuf);
        return __ocaml_lex_ocamlfind_query_rec
                (source,lexbuf,__ocaml_lex_state$1)}
      else
       {return error
                (source,
                 lexbuf,
                 [0,[11,"Bad ocamlfind query",0],"Bad ocamlfind query"])}}
    else
     {var $js$4=Lexing["sub_lexeme"];
      var n=$js$4(lexbuf,lexbuf[10][0],lexbuf[10][1]);
      var $js$5=Lexing["sub_lexeme"];
      var d=$js$5(lexbuf,lexbuf[10][2],lexbuf[10][3]);
      var $js$6=Lexing["sub_lexeme"];
      var v=$js$6(lexbuf,lexbuf[10][4],lexbuf[10][5]);
      var $js$7=Lexing["sub_lexeme"];
      var a=$js$7(lexbuf,lexbuf[10][6],lexbuf[10][7]);
      var $js$8=Lexing["sub_lexeme"];
      var lo=$js$8(lexbuf,lexbuf[10][8],lexbuf[10][9]);
      var $js$9=Lexing["sub_lexeme"];
      var l=$js$9(lexbuf,lexbuf[10][10],lexbuf[10][11]);
      return [0,n,d,v,a,lo,l]}};
var
 trim_blanks=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][3]=lexbuf[6],0;
    lexbuf[10][2]=lexbuf[6],0;
    return __ocaml_lex_trim_blanks_rec(source,lexbuf,234)};
var
 __ocaml_lex_trim_blanks_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=__ocaml_lex_state$1!=0;
    if($js$1)
     {var $js$2=__ocaml_lex_state$1!=1;
      if($js$2)
       {var $js$3=lexbuf[1];
        $js$3(lexbuf);
        return __ocaml_lex_trim_blanks_rec(source,lexbuf,__ocaml_lex_state$1)}
      else
       {return error
                (source,
                 lexbuf,
                 [0,
                  [11,"Bad input for trim_blanks",0],
                  "Bad input for trim_blanks"])}}
    else
     {var $js$4=Lexing["sub_lexeme"];
      return $js$4(lexbuf,lexbuf[10][0],lexbuf[10][1])}};
var
 tag_gen=
  function(source,lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    return __ocaml_lex_tag_gen_rec(source,lexbuf,240)};
var
 __ocaml_lex_tag_gen_rec=
  function(source,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["new_engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=__ocaml_lex_state$1!=0;
    if($js$1)
     {var $js$2=__ocaml_lex_state$1!=1;
      if($js$2)
       {var $js$3=lexbuf[1];
        $js$3(lexbuf);
        return __ocaml_lex_tag_gen_rec(source,lexbuf,__ocaml_lex_state$1)}
      else
       {return error
                (source,
                 lexbuf,
                 [0,
                  [11,"Not a valid parametrized tag",0],
                  "Not a valid parametrized tag"])}}
    else
     {var $js$4=Lexing["sub_lexeme"];
      var name=$js$4(lexbuf,lexbuf[5],lexbuf[10][0]);
      var $js$5=Lexing["sub_lexeme_opt"];
      var param=$js$5(lexbuf,lexbuf[10][2],lexbuf[10][1]);
      return [0,name,param]}};
var
 count_lines=
  function(lb,lexbuf){return __ocaml_lex_count_lines_rec(lb,lexbuf,245)};
var
 __ocaml_lex_count_lines_rec=
  function(lb,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=2<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_count_lines_rec(lb,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {return count_lines(lb,lexbuf)}
      else
       if($js$4==1)
        {var $js$5=Lexing["new_line"];$js$5(lb);return count_lines(lb,lexbuf)}
       else
        if($js$4==2){return 0}}};
module["exports"]=
{"Error":Error,
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
