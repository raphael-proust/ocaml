// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var List=require("./list.js");
var Buffer=require("./buffer.js");
var Lexing=require("./lexing.js");
var Str=require("./str.js");
var Odoc_misc=require("./odoc_misc.js");
var CamlPrimitive=require("./camlPrimitive.js");


var line_number=[0,0];

var char_number=[0,0];

var string_buffer=Buffer["create"](32);

var
 reset_string_buffer=
  function(param){return Buffer["reset"](string_buffer)};

var ajout_char_string=Buffer["add_char"](string_buffer);

var ajout_string=Buffer["add_string"](string_buffer);

var lecture_string=function(param){return Buffer["contents"](string_buffer)};

var description=[0,""];

var blank="[ \r\t\f]";

var open_brackets=[0,0];

var verb_mode=[0,/* false */0];

var target_mode=[0,/* false */0];

var shortcut_list_mode=[0,/* false */0];

var ele_ref_mode=[0,/* false */0];

var code_pre_mode=[0,/* false */0];

var
 init=
  function(param)
   {open_brackets[1]=0;
    verb_mode[1]=/* false */0;
    target_mode[1]=/* false */0;
    shortcut_list_mode[1]=/* false */0;
    ele_ref_mode[1]=/* false */0;
    code_pre_mode[1]=/* false */0;
    line_number[1]=0;
    return char_number[1]=0,0};

var
 incr_cpts=
  function(lexbuf)
   {var s=Lexing["lexeme"](lexbuf);
    
    var l=Str["split_delim"](Str["regexp_string"]("\n"),s);
    
    var match=List["rev"](l);
    
    if(match)
     {var s2=match[1];
      
      return match[2]
              ?(line_number[1]=
                line_number[1]+
                (List["length"](l)-1),
                char_number[1]=
                s2["length"],
                0)
              :(char_number[1]=char_number[1]+s2["length"],0)}
    else
     {return /* () */0}
    };

var
 __ocaml_lex_tables=
  [/* record */0,
   "\0\0\xce\xff\xd1\xff\0\0\x06\0\x01\0\x01\0\x02\0S\0\0\0\xfe\xff\x13\0\xff\xff\x01\0\x01\0\x05\0\x12\0\0\0\x01\0\x9f\0\x99\0\x94\0\x02\0\x06\0\x07\0\xbf\0\x02\0\x03\0\xdf\0\x06\0\x07\0\b\0\x03\0\x0b\0\x06\0J\0A\0\x10\0\x95\0\x12\0\xeb\xff\xee\0\xfd\xff\xfc\xff\xfb\xff\x99\0\x90\0\x8b\0\x9f\0\x94\0\x16\0\xf6\xff\xa2\0\x18\0\x1a\0\xf3\xff!\0\xf2\xff\"\0\xf1\xff\xfd\0o\x01\x8e\x01\x07\0\xec\x01\x01\x007\x02\x82\x02\xcd\x02?\x03\xb1\x03#\x04\x0b\0\x10\0\x95\x04\0\0\x07\x05y\x05\xeb\x05\xc5\x057\x06\xa9\x06\xfa\xff\xf9\xff\xf8\xff\xf7\xff\xf5\xff\xf4\xff\x1b\x07\x8d\x07\xff\x07\xef\xffM\bt\x01\xf0\xff\x05\0\xea\xff\x1f\0\0\0\x01\0\x1d\0}\0{\0\x1a\x007\0\x8a\0\x03\0\xe7\xff\xdd\0\x86\b\xa8\0\xc0\0\xbe\0\xbf\0R\x01\xce\0\xdc\0\xdd\x01\xdd\0\xde\0\xea\0\xea\0\xe5\0\xf6\0\xea\0\xf9\0\xce\0\x01\0\x89\x01\xe5\xff\xcd\0\xf8\0@\x01D\x03\xe4\xff\x1c\x01'\x01(\x01 \x01\x1e\x010\x01-\x01/\x01d\x01I\x03\xe3\xff:\x017\x01C\x01>\x01A\x01\x91\x01N\x03\xe2\xffX\x01i\x01Z\x01q\x01\x7f\x01\x87\x01\xb3\x01\xb4\x01Y\x03\xe1\xff^\x03\xd8\xff\x80\x01\x8d\x01\xba\x01\xb6\x03\xe0\xff\x92\x01\x8d\x01\x99\x01\xc4\x01\xbb\x03\xdc\xff\x91\x01\xa2\x01\x92\x01\x93\x01&\x03\x8e\x01\xc0\x03\xdf\xff\x98\x01\xa4\x01\xd0\x01\xcb\x03\xde\xff\xa4\x01\xa4\x01\xe0\x01\xd0\x03\xd9\xff\xb3\x01\xb6\x01\xc0\x01\xc8\x01\xb6\x01\xb8\x01\xe2\x01\x0e\x02(\x04\xdd\xff\xe6\x01\xd6\x01\xe3\x01\x02\x02\x04\x029\x02-\x04\xdb\xff\x11\x02\x0f\x02\r\x02\x12\x02&\x02/\x02Z\x022\x04\xda\xff1\x021\x02\x1f\x02P\x02T\x02K\x02K\x02C\x02\xd7\xff\xd6\xff\xee\xff\x05\0\xed\xff~\x02s\x02\xc4\x02\xc4\x02\x9f\x02\xe8\xff=\x04\x02\0\x03\0\xa4\x04a\x02\xd5\xff\xd4\xff\xd3\xffB\x04",
   "\xff\xff\xff\xff\xff\xff1\x001\0\x14\0\x13\x001\x000\x001\0\xff\xff1\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff/\0/\0\x19\0\x16\0\xff\xff\xff\xff/\0/\0/\0/\0/\0/\0\b\0\x07\0/\0\xff\xff/\0/\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\f\0\r\0/\0\xff\xff\xff\xff\x0f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x19\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1a\0\xff\xff\xff\xff\xff\xff\xff\xff\x1b\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1c\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1d\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\x1e\0\xff\xff'\0\xff\xff\xff\xff\xff\xff\xff\xff\x1f\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff#\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff \0\xff\xff\xff\xff\xff\xff\xff\xff!\0\xff\xff\xff\xff\xff\xff\xff\xff&\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\"\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff$\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff%\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff-\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff",
   "\x01\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\0\0\0\0\0\0\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\0\0\xff\xff",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x03\0\x04\0\0\0\x03\0\x03\0\0\0\xf4\0\xf1\0\0\0\xf4\0\xf4\0U\0U\0\0\0U\0U\0T\0T\0\0\0T\0T\0\0\0\0\0\x03\0;\0\xf8\0\xf7\0\0\0\x07\0\xf4\0\0\0\0\0\0\0\0\0U\0\0\0\0\0\0\0\x14\0T\0\xf2\0m\0\xf3\0\xeb\0\0\0\0\0\0\0\0\0\0\0R\0\x80\0\t\0\xe9\0,\0+\0\n\0\n\0\x12\0\x10\0\n\0\n\0\n\0&\0\x13\0\x11\0:\0\x1f\0\r\x008\0\n\0\x0e\0(\x006\0\x1e\0\x1d\x003\0\x0f\0\x06\0.\x007\0\"\0#\0\x06\0\x0b\0\x05\0\xea\x009\0;\0-\0\x12\0\x10\0_\0\xd5\0\xcd\0&\0\x13\0\x11\0:\0\x1f\0\r\x008\0\f\0\x0e\0\f\x006\0\x1e\0\x1d\0>\0\x0f\0\xf5\0.\0@\0\"\0#\0\b\0\xf5\0\n\0\xf0\0\xe8\0A\0-\0`\0N\0N\0N\0N\0N\0N\0N\0N\0N\0N\0\xde\0\f\0$\0\f\0\xc3\0\x87\0%\0<\0<\0G\0<\0<\0<\0<\0<\0<\0<\0<\0F\0<\0<\0<\0<\0<\0E\0<\0<\0<\0<\0<\0<\0<\0<\0?\0$\0\x82\0I\0H\0%\0<\0M\0<\0<\0J\0<\0<\0<\0L\0<\0<\0B\0<\0<\0C\0<\0<\0<\0<\0<\0D\0=\0<\0<\0<\0<\0K\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0!\0'\0\x1b\0\x15\x004\0/\x000\0\x9a\0\x19\0\x1a\0 \x001\0\x16\x002\x005\0\x17\0\xb2\0\x9b\0~\0\xb1\0y\0\x18\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0!\0'\0\x1b\0\x15\x004\0/\x000\0\x02\0\x19\0\x1a\0 \x001\0\x16\x002\x005\0\x17\0x\0w\0v\0k\0y\0\x18\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0j\0k\0k\0k\0\n\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0k\0x\0w\0v\0*\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0k\0z\0{\0\x7f\0|\0}\0\x83\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0z\0{\0k\0|\0}\0\x84\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xe7\0\xe7\0\x85\0\xe7\0\xe7\0^\0^\0\x88\0^\0^\0u\0u\0u\0u\0u\0u\0u\0u\0u\0u\0\x92\0\x8a\0\x8b\0\xe7\0\x89\0\x8c\0\x81\0\x81\0^\0\x81\0\x81\0l\0l\0\x8d\0l\0l\0\x8e\0\x8f\0\x90\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\x81\0\x93\0\x94\0\x95\0\x96\0l\0\x97\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0j\0\x98\0\xab\0\x9c\0\x9d\0\x9e\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xa6\0\x9f\0\xa0\0\xa2\0\xa4\0d\0\xa7\0e\0\xa8\0g\0\xa9\0[\0[\0a\0[\0[\0\xac\0f\0\xad\0\xae\0\xaf\0\xbe\0b\0c\0h\0\xb3\0i\0\xb4\0\xb5\0\xb9\0\xba\0\xbb\0\xbc\0k\0[\0u\0u\0u\0u\0u\0u\0u\0u\0u\0u\0\xbf\0\xc0\0\\\0\xc1\0k\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\xa1\0\xc4\0\xc5\0\xc6\0\xc7\0\xc8\0\xc9\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\xca\0\xcb\0\xce\0\xcf\0\\\0\xd0\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xd1\0\xd2\0\xd3\0\xd6\0\xd7\0\xd8\0\xd9\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xda\0\xdb\0\xdc\0\xdf\0\xe0\0\xe1\0<\0<\0<\0<\0<\0<\0<\0<\0Z\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xe2\0\xe3\0\xe4\0\xe5\0\xe6\0\xec\0\xed\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xea\0\xf6\0\0\0\0\0\xec\0\xed\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0Y\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\xee\0\xef\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xee\0\xef\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0X\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0W\0W\0\0\0W\0W\0\x86\0\x86\0\0\0\x86\0\x86\0\x91\0\x91\0\0\0\x91\0\x91\0\x99\0\x99\0\0\0\x99\0\x99\0\0\0\0\0\0\0W\0\xb7\0\0\0\xa3\0\xa3\0\x86\0\xa3\0\xa3\0\xa5\0\xa5\0\x91\0\xa5\0\xa5\0\0\0\0\0\x99\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xa3\0\0\0\0\0\0\0\0\0\xa5\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xb6\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0V\0V\0\0\0V\0V\0\xaa\0\xaa\0\0\0\xaa\0\xaa\0\xb0\0\xb0\0\0\0\xb0\0\xb0\0\xb8\0\xb8\0\0\0\xb8\0\xb8\0\0\0\0\0\0\0V\0\0\0\0\0\xbd\0\xbd\0\xaa\0\xbd\0\xbd\0\xc2\0\xc2\0\xb0\0\xc2\0\xc2\0\0\0\0\0\xb8\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xbd\0\0\0\0\0\0\0\0\0\xc2\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\x003\x003\0\0\x003\x003\0\xcc\0\xcc\0\0\0\xcc\0\xcc\0\xd4\0\xd4\0\0\0\xd4\0\xd4\0\xdd\0\xdd\0\0\0\xdd\0\xdd\0\0\0\0\0\0\x003\0\0\0\0\0\xf9\0\xf1\0\xcc\0\xf9\0\xf9\0\xf9\0\xf1\0\xd4\0\xf9\0\xf9\0\0\0\0\0\xdd\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xf9\0\0\0\0\0\0\0\0\0\xf9\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0S\0S\0\0\0S\0S\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xf4\0\xf1\0\0\0\xf4\0\xf4\0\0\0\0\0\0\0S\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\xf4\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\xf2\0\0\0\xf3\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0,\0,\0\0\0,\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0+\0+\0\0\0+\0+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0*\0*\0\0\0*\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0N\0N\0N\0N\0N\0N\0N\0N\0N\0N\0O\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0*\0*\0\0\0*\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0Q\0\0\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0*\0*\0\0\0*\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\0\0\0\0\0\0\0\0Q\0\0\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\x007\x007\0\0\x007\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\x009\x009\0\0\x009\x009\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x009\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0;\0;\0\0\0;\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0;\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\0\0\0\0\0\0\0\0\0\0\0\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0\\\0\0\0\0\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0]\0\0\0\0\0\0\0\0\0\0\0\0\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\0\0\0\0\0\0\0\0\\\0\0\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0t\0n\0\0\0\0\0\0\0\0\0r\0s\0\0\0\0\0o\0\0\0\0\0p\0\0\0\0\0\0\0\0\0\0\0q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0t\0n\0\0\0\0\0\0\0\0\0r\0s\0\0\0\0\0o\0\0\0\0\0p\0\0\0\0\0\0\0\0\0\0\0q\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   '\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\0\0\0\0\xff\xff\0\0\0\0\xff\xff\x04\0\x04\0\xff\xff\x04\0\x04\0H\0H\0\xff\xffH\0H\0I\0I\0\xff\xffI\0I\0\xff\xff\xff\xff\0\0A\0\xf2\0\xf3\0\xff\xff\0\0\x04\0\xff\xff\xff\xff\xff\xff\xff\xffH\0\xff\xff\xff\xff\xff\xff\t\0I\0\x04\0j\0\x04\0\xe9\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffK\0\x7f\0\0\0\x06\0\x11\0\x12\0\x1a\0\x1b\0\t\0\t\0\x1d\0\x1e\0\x1f\0 \0\t\0\t\0\r\0\x16\0\t\0\x0e\0%\0\t\0\'\0\x0f\0\x17\0\x18\x002\0\t\x005\0\x10\x006\0!\0"\0\0\0\0\0\0\0\x06\x008\0:\0\x10\0\t\0\t\0?\0b\0c\0 \0\t\0\t\0\r\0\x16\0\t\0\x0e\0\x0b\0\t\0\x0b\0\x0f\0\x17\0\x18\0\b\0\t\0\x03\0\x10\0\b\0!\0"\0\0\0\x04\0\0\0\x05\0\x07\0\b\0\x10\0_\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0a\0\x0b\0#\0\x0b\0d\0g\0$\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0#\0h\0\b\0\b\0$\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\b\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x13\0\x15\0&\0\x14\0\x14\0-\0.\0/\0f\0\x14\0\x14\0\x15\x000\0\x14\x001\x004\0\x14\0e\0f\0i\0e\0n\0\x14\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x19\0\x15\0&\0\x14\0\x14\0-\0.\0/\0\0\0\x14\0\x14\0\x15\x000\0\x14\x001\x004\0\x14\0o\0p\0q\0s\0n\0\x14\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0l\0t\0v\0w\0\x1c\0)\0)\0)\0)\0)\0)\0)\0)\0)\0)\0x\0o\0p\0q\0)\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0}\0y\0z\0~\0{\0|\0\x82\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0y\0z\0l\0{\0|\0\x83\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0<\0=\0=\0\x84\0=\0=\0]\0]\0\x87\0]\0]\0r\0r\0r\0r\0r\0r\0r\0r\0r\0r\0\x88\0\x89\0\x8a\0=\0\x87\0\x8b\0\x80\0\x80\0]\0\x80\0\x80\0>\0>\0\x8c\0>\0>\0\x8d\0\x8e\0\x8f\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0\x80\0\x92\0\x93\0\x94\0\x95\0>\0\x96\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0>\0\x97\0\x9a\0\x9b\0\x9c\0\x9c\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0=\0\x9d\0\x9e\0\x9f\0\xa0\0\xa1\0>\0\xa6\0>\0\xa7\0>\0\xa8\0@\0@\0>\0@\0@\0\xab\0>\0\xac\0\xad\0\xae\0\xb1\0>\0>\0>\0\xb2\0>\0\xb3\0\xb4\0\xb6\0\xb9\0\xba\0\xbb\0>\0@\0u\0u\0u\0u\0u\0u\0u\0u\0u\0u\0\xbe\0\xbf\0@\0\xc0\0u\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0\xa0\0\xc3\0\xc4\0\xc5\0\xc6\0\xc7\0\xc8\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0\xc9\0\xca\0\xcd\0\xce\0@\0\xcf\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0@\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\xd0\0\xd1\0\xd2\0\xd5\0\xd6\0\xd7\0\xd8\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0\xd9\0\xda\0\xdb\0\xde\0\xdf\0\xe0\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0B\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0\xe1\0\xe2\0\xe3\0\xe4\0\xe5\0\xeb\0\xec\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0\xef\0\xf5\0\xff\xff\xff\xff\xeb\0\xec\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0C\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0\xff\xff\xed\0\xee\0\xff\xff\xff\xff\xff\xff\xff\xffD\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0\xed\0\xee\0\xff\xff\xff\xff\xff\xff\xff\xffD\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0D\0E\0E\0\xff\xffE\0E\0\x85\0\x85\0\xff\xff\x85\0\x85\0\x90\0\x90\0\xff\xff\x90\0\x90\0\x98\0\x98\0\xff\xff\x98\0\x98\0\xff\xff\xff\xff\xff\xffE\0\xb5\0\xff\xff\xa2\0\xa2\0\x85\0\xa2\0\xa2\0\xa4\0\xa4\0\x90\0\xa4\0\xa4\0\xff\xff\xff\xff\x98\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0\xa2\0\xff\xff\xff\xff\xff\xff\xff\xff\xa4\0\xff\xffE\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0\xb5\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffE\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0E\0F\0F\0\xff\xffF\0F\0\xa9\0\xa9\0\xff\xff\xa9\0\xa9\0\xaf\0\xaf\0\xff\xff\xaf\0\xaf\0\xb7\0\xb7\0\xff\xff\xb7\0\xb7\0\xff\xff\xff\xff\xff\xffF\0\xff\xff\xff\xff\xbc\0\xbc\0\xa9\0\xbc\0\xbc\0\xc1\0\xc1\0\xaf\0\xc1\0\xc1\0\xff\xff\xff\xff\xb7\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0\xbc\0\xff\xff\xff\xff\xff\xff\xff\xff\xc1\0\xff\xffF\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffF\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0F\0G\0G\0\xff\xffG\0G\0\xcb\0\xcb\0\xff\xff\xcb\0\xcb\0\xd3\0\xd3\0\xff\xff\xd3\0\xd3\0\xdc\0\xdc\0\xff\xff\xdc\0\xdc\0\xff\xff\xff\xff\xff\xffG\0\xff\xff\xff\xff\xf1\0\xf1\0\xcb\0\xf1\0\xf1\0\xf9\0\xf9\0\xd3\0\xf9\0\xf9\0\xff\xff\xff\xff\xdc\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0\xf1\0\xff\xff\xff\xff\xff\xff\xff\xff\xf9\0\xff\xffG\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffG\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0G\0J\0J\0\xff\xffJ\0J\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf4\0\xf4\0\xff\xff\xf4\0\xf4\0\xff\xff\xff\xff\xff\xffJ\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xf4\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0\xf4\0\xff\xff\xf4\0\xff\xff\xff\xff\xff\xff\xff\xffJ\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffJ\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0J\0L\0L\0\xff\xffL\0L\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffL\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffL\0L\0L\0L\0L\0L\0L\0L\0L\0L\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffL\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffL\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0L\0M\0M\0\xff\xffM\0M\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffM\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffM\0M\0M\0M\0M\0M\0M\0M\0M\0M\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffM\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffM\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0M\0N\0N\0\xff\xffN\0N\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffN\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffN\0N\0N\0N\0N\0N\0N\0N\0N\0N\0N\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0O\0P\0P\0\xff\xffP\0P\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffP\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffP\0P\0P\0P\0P\0P\0P\0P\0P\0P\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffP\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0\xff\xff\xff\xff\xff\xff\xff\xffP\0\xff\xffP\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0P\0Q\0Q\0\xff\xffQ\0Q\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffQ\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffQ\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffQ\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0\xff\xff\xff\xff\xff\xff\xff\xffQ\0\xff\xffQ\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0Q\0X\0X\0\xff\xffX\0X\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffX\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffX\0X\0X\0X\0X\0X\0X\0X\0X\0X\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffX\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffX\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0X\0Y\0Y\0\xff\xffY\0Y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffY\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffY\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffY\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffY\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Y\0Z\0Z\0\xff\xffZ\0Z\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffZ\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffZ\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0Z\0\\\0\xff\xff\xff\xff\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\xff\xff\xff\xff\xff\xff\xff\xff\\\0\xff\xff\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0\\\0m\0m\0\xff\xff\xff\xff\xff\xff\xff\xffm\0m\0\xff\xff\xff\xffm\0\xff\xff\xff\xffm\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0m\0\xff\xff\xff\xff\xff\xff\xff\xffm\0m\0\xff\xff\xff\xffm\0\xff\xff\xff\xffm\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xffm\0\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff\xff',
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
    
    if(49<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {switch(__ocaml_lex_state$1)
       {case 0:
         incr_cpts(lexbuf);
         var s=Lexing["lexeme"](lexbuf);
         
         return /* Char */[3,$$String["sub"](s,1,1)];
        case 1:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1)
          {return /* Char */[3,Lexing["lexeme"](lexbuf)]}
         else
          {var match=ele_ref_mode[1]?(ele_ref_mode[1]=/* false */0,0):0;
           
           return /* END */0}
         break;
        case 2:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return /* Char */[3,Lexing["lexeme"](lexbuf)]}
         else
          {var s$1=Lexing["lexeme"](lexbuf);
           
           try
            {if(s$1["charCodeAt"](0)===60)
              {var match$1=/* tuple */[0,2,s$1["length"]-3];
               
               var s2=$$String["sub"](s$1,match$1[1],match$1[2]);
               
               return /* Title */[0,
                       /* tuple */[0,
                        CamlPrimitive["caml_int_of_string"](s2),
                        /* None */0]]}
             else
              {var match$2=/* tuple */[0,1,s$1["length"]-2];
               
               var l=match$2[2];
               
               var s2$1=$$String["sub"](s$1,match$2[1],l);
               
               try
                {var i=$$String["index"](s2$1,58);
                 
                 var s_n=$$String["sub"](s2$1,0,i);
                 
                 var s_label=$$String["sub"](s2$1,i+1,l-i-1);
                 
                 return /* Title */[0,
                         /* tuple */[0,
                          CamlPrimitive["caml_int_of_string"](s_n),
                          /* Some */[0,s_label]]]}
               catch(exn)
                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                  {return /* Title */[0,
                           /* tuple */[0,
                            CamlPrimitive["caml_int_of_string"](s2$1),
                            /* None */0]]}
                 else
                  {throw exn}
                 }
               }
             }
           catch(exn$1){return [/* Title */0,[/* tuple */0,1,/* None */0]]}
           }
         break;
        case 3:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* BOLD */1;
        case 4:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* ITALIC */6;
        case 5:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* LINK */10;
        case 6:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* EMP */2;
        case 7:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* SUPERSCRIPT */36;
        case 8:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* SUBSCRIPT */37;
        case 9:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* CENTER */3;
        case 10:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* LEFT */4;
        case 11:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* RIGHT */5;
        case 12:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* LIST */7;
        case 13:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* ENUM */8;
        case 14:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* ITEM */9;
        case 15:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return /* Char */[3,Lexing["lexeme"](lexbuf)]}
         else
          {var s$2=Lexing["lexeme"](lexbuf);
           
           var p1=$$String["index"](s$2,37);
           
           var p2=$$String["index"](s$2,58);
           
           var fmt=$$String["sub"](s$2,p1+1,p2-p1-1);
           
           target_mode[1]=/* true */1;
           return /* Target */[2,fmt]}
         break;
        case 16:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :(target_mode[1]=/* true */1,/* LATEX */17);
        case 17:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 open_brackets[1]>=
                 1||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :(target_mode[1]=/* false */0,/* END_TARGET */18);
        case 18:exit=21;break;
        case 19:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :open_brackets[1]<=0
                   ?(open_brackets[1]=1,/* CODE */11)
                   :(open_brackets[0]++,/* Char */[3,Lexing["lexeme"](lexbuf)]);
        case 20:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :open_brackets[1]>1
                   ?(open_brackets[0]--,[/* Char */3,"]"])
                   :(open_brackets[1]=0,/* END_CODE */12);
        case 21:exit=21;break;
        case 22:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :(code_pre_mode[1]=/* true */1,/* CODE_PRE */13);
        case 23:
         incr_cpts(lexbuf);
         if(verb_mode[1]||target_mode[1]||ele_ref_mode[1])
          {return /* Char */[3,Lexing["lexeme"](lexbuf)]}
         else
          {if(open_brackets[1]>=1)
            {lexbuf[6]=lexbuf[6]-1;
             var init$1=lexbuf[12];
             
             lexbuf[12]=
             /* record */[0,init$1[1],init$1[2],init$1[3],lexbuf[12][4]-1];
             char_number[0]--;
             return open_brackets[1]>1
                     ?(open_brackets[0]--,[/* Char */3,"]"])
                     :(open_brackets[1]=0,/* END_CODE */12)}
           else
            {return code_pre_mode[1]
                     ?(code_pre_mode[1]=/* false */0,/* END_CODE_PRE */14)
                     :/* Char */[3,Lexing["lexeme"](lexbuf)]}
           }
         break;
        case 24:exit=21;break;
        case 25:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* ELE_REF */20)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 26:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* VAL_REF */21)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 27:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* TYP_REF */22)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 28:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* EXT_REF */23)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 29:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* EXC_REF */24)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 30:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* MOD_REF */25)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 31:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* MODT_REF */26)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 32:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* CLA_REF */27)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 33:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* CLT_REF */28)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 34:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* ATT_REF */29)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 35:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* MET_REF */30)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 36:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* SEC_REF */31)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 37:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* RECF_REF */32)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 38:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* CONST_REF */33)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 39:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?(ele_ref_mode[1]=/* true */1,/* MOD_LIST_REF */34)
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 40:
         incr_cpts(lexbuf);
         return verb_mode[1]||
                 target_mode[1]||
                 code_pre_mode[1]||
                 open_brackets[1]>=
                 1
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :!ele_ref_mode[1]
                   ?/* INDEX_LIST */35
                   :/* Char */[3,Lexing["lexeme"](lexbuf)];
        case 41:
         incr_cpts(lexbuf);
         return target_mode[1]||
                 open_brackets[1]>=
                 1||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :(verb_mode[1]=/* true */1,/* VERB */15);
        case 42:
         incr_cpts(lexbuf);
         return target_mode[1]||
                 open_brackets[1]>=
                 1||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :(verb_mode[1]=/* false */0,/* END_VERB */16);
        case 43:
         incr_cpts(lexbuf);
         return target_mode[1]||
                 open_brackets[1]>=
                 1||
                 code_pre_mode[1]||
                 ele_ref_mode[1]||
                 verb_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :shortcut_list_mode[1]
                   ?/* SHORTCUT_LIST_ITEM */40
                   :(shortcut_list_mode[1]=
                     /* true */1,
                     /* BEGIN_SHORTCUT_LIST_ITEM */38);
        case 44:
         incr_cpts(lexbuf);
         return target_mode[1]||
                 open_brackets[1]>=
                 1||
                 code_pre_mode[1]||
                 ele_ref_mode[1]||
                 verb_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :shortcut_list_mode[1]
                   ?/* SHORTCUT_ENUM_ITEM */41
                   :(shortcut_list_mode[1]=
                     /* true */1,
                     /* BEGIN_SHORTCUT_ENUM_ITEM */39);
        case 45:
         incr_cpts(lexbuf);
         lexbuf[6]=lexbuf[6]-1;
         var init$2=lexbuf[12];
         
         lexbuf[12]=
         /* record */[0,init$2[1],init$2[2],init$2[3],lexbuf[12][4]-1];
         line_number[0]--;
         return shortcut_list_mode[1]
                 ?(shortcut_list_mode[1]=
                   /* false */0,
                   /* END_SHORTCUT_LIST */42)
                 :target_mode[1]||
                   open_brackets[1]>=
                   1||
                   code_pre_mode[1]||
                   ele_ref_mode[1]||
                   verb_mode[1]
                   ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                   :/* BLANK_LINE */43;
        case 46:return /* EOF */44;
        case 47:
         incr_cpts(lexbuf);
         if
          (verb_mode[1]||
           target_mode[1]||
           code_pre_mode[1]||
           open_brackets[1]>=
           1||
           ele_ref_mode[1])
          {return /* Char */[3,Lexing["lexeme"](lexbuf)]}
         else
          {var s$3=Lexing["lexeme"](lexbuf);
           
           var len=s$3["length"];
           
           var tag=Odoc_misc["no_blanks"]($$String["sub"](s$3,1,len-1));
           
           return /* CUSTOM */[1,tag]}
         break;
        case 48:
         incr_cpts(lexbuf);
         return target_mode[1]||
                 open_brackets[1]>=
                 1||
                 code_pre_mode[1]||
                 ele_ref_mode[1]
                 ?/* Char */[3,Lexing["lexeme"](lexbuf)]
                 :/* LBRACE */19;
        case 49:exit=21;break
        }
      }
    
    switch(exit)
     {case 21:incr_cpts(lexbuf);return /* Char */[3,Lexing["lexeme"](lexbuf)]}
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

