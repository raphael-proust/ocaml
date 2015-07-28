var Pervasives=require("Pervasives");
var Parsing=require("Parsing");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var identchar="[A-Z a-z_�-��-��-�'0-9]";
var blank="[ \n\r\t\f]";
var
 remove_beginning_blanks=
  function(s)
   {var $js=Str["global_replace"];
    var $js$1=Str["regexp"];
    var $js$2=Pervasives["^"];
    var $js$3=Pervasives["^"];
    var $js$4=$js$3(blank,"+");
    var $js$5=$js$2("^",$js$4);
    var $js$6=$js$1($js$5);
    return $js($js$6,"",s)};
var
 remove_trailing_blanks=
  function(s)
   {var $js=Str["global_replace"];
    var $js$1=Str["regexp"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2(blank,"+$");
    var $js$4=$js$1($js$3);
    return $js($js$4,"",s)};
var yytransl_const="unknown primitive:caml_obj_dup";
var yytransl_block="unknown primitive:caml_obj_dup";
var
 yylhs=
  "��\x01\0\x01\0\x03\0\x04\0\x04\0\x02\0\x02\0\x06\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x07\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\x05\0\b\0\b\0\b\0\b\0\b\0\f\0\n\0\n\0\r\0\x0b\0\x0b\0\x0e\0\t\0\t\0\0\0\0\0";
var
 yylen=
  "\x02\0\x02\0\x01\0\x01\0\x01\0\x02\0\x01\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x03\0\x06\0\x03\0\x01\0\x03\0\x03\0\x03\0\x05\0\x01\0\x03\0\x03\0\x03\0\x03\0\x01\0\x01\0\x02\0\x02\0\x01\0\x02\0\x03\0\x02\0\x01\0\x02\0\x02\0\x01\0\x02\0\x01\0\x02\0\x02\0\x02\0";
var
 yydefred=
  "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x12\0\x13\0\x14\0\x15\0\x16\0\0\0(\0\0\0\0\0\0\0\0\0-\0\x02\0\0\0A\0\0\0\x03\0\0\0\0\x002\0B\0\b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0@\0\x01\0\x05\0\0\0\x07\0\x17\0\x18\0\x1b\0\x1e\0\x1f\0 \0\x19\0\x1a\0\0\0!\x005\0\0\0\0\0\"\0\0\0#\0$\0)\0*\0+\0\0\0'\0\x1c\0\x1d\0\0\x009\0.\0/\0\0\0<\x000\x001\0%\x008\0\0\0\0\0;\0>\0,\0\0\0&\0";
var yydgoto="\x03\0,\x002\0L\0.\0/\x004\x000\0>\x001\0M\0O\0@\0n\0r\0";
var
 yysindex=
  '\x17\0\x01\0d�\0\0d�d�d�d�d�d�d�d�\x02�\x02�������������4�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0��\0\0d�d�d�d�\0\0\0\0��\0\0\x1a\0\0\0d���\0\0\0\0\0\0d�\x1a�\x1b�\x1c�\x1d�\x1e�\x1f� �!�d�\x0b�\x02�\x02�\x16�"�\x19�\x18�\x17�\x15�#���+�,�.�\x04�4\0\r�5\0\0\0\0\0\0\x007�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0?�\0\0\0\0����\0\0d�\0\0\0\0\0\0\0\0\0\0D�\0\0\0\0\0\0d�\0\0\0\0\0\0d�\0\0\0\0\0\0\0\0\0\0F�d�\0\0\0\0\0\0G�\0\0';
var
 yyrindex=
  "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x001\0\0\0\0\0\0\0`\0\0\0\0\0\0\0\0\0I\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0I�Y�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x006\0\0\x007\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0Z�[�\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
var yygindex="\0\0\0\0)\0��/\0\x0b\0\0\0K\0��\x03\0��\x02\0\0\0\0\0\0\0";
var yytablesize=398;
var
 yytable=
  '-\0*\0+\x005\x006\x007\x008\x009\0:\0;\0<\0A\0^\x003\0=\0?\0?\0B\0C\0D\0E\0F\0G\0b\0\x01\0\x02\0Q\0U\0V\0W\0X\0Y\0Z\0[\0\\0c\0J\0K\0I\0N\0d\0e\0f\0g\0j\0k\0P\0l\0m\0?\0+\0S\0p\0t\0:\0=\0u\0h\0q\0+\0]\0`\0a\x003\0v\0_\0?\0?\0_\0x\0+\0{\0}\0\x06\x003\0i\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x1e\0\x1f\0 \0!\0"\x006\x004\x007\0T\0R\0H\0\x04\0y\0w\0_\0_\0\0\0\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\r\0N\0\x0e\0\x0f\0z\0\x10\0\0\0\x11\0|\0\x12\0\x13\0\0\0\x14\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x1e\0\x1f\0 \0!\0"\0#\0$\0%\0&\0\'\0(\0\0\0\0\0\0\0)\0+\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\r\0\0\0\x0e\0\x0f\0\0\0\x10\0\0\0\x11\0\0\0\x12\0\x13\0\0\0\x14\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x1e\0\x1f\0 \0!\0"\0#\0$\0%\0&\0\'\0(\0\0\0\0\0\0\0)\0+\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0?\0\x04\0o\0s\0:\0=\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x04\0\x04\0\x04\0';
var
 yycheck=
  '\x01\0\0\x000\x01\x04\0\x05\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\r\0\x01\x01\x02\0\f\x01\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x12\0\x13\0\x01\x01\x01\0\x02\0\0\0\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01%\0&\0#\0(\0\x0f\x01\x11\x01\x13\x01\x16\x01\x01\x01\x01\x01+\0\x01\x01,\x01\0\x000\x010\0\0\0\0\0\0\0\0\0\x01\x01\x16\x01-\x010\x01=\0?\0@\x004\0\x01\x01>\0?\0@\0A\0\x01\x010\x01\x01\x01\x01\x01\0\0\x01\x01H\0\x18\x01\x19\x01\x1a\x01\x1b\x01\x1c\x01\x1d\x01\x1e\x01\x1f\x01 \x01!\x01"\x01#\x01$\x01%\x01\x01\x01\x01\x01\x01\x014\0/\0\x14\0\0\0m\0c\0`\0a\0��\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\t\x01\n\x01\x0b\x01q\0\r\x01\x0e\x01q\0\x10\x01��\x12\x01x\0\x14\x01\x15\x01��\x17\x01\x18\x01\x19\x01\x1a\x01\x1b\x01\x1c\x01\x1d\x01\x1e\x01\x1f\x01 \x01!\x01"\x01#\x01$\x01%\x01&\x01\'\x01(\x01)\x01*\x01+\x01������/\x010\x01����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\t\x01\n\x01\x0b\x01��\r\x01\x0e\x01��\x10\x01��\x12\x01��\x14\x01\x15\x01��\x17\x01\x18\x01\x19\x01\x1a\x01\x1b\x01\x1c\x01\x1d\x01\x1e\x01\x1f\x01 \x01!\x01"\x01#\x01$\x01%\x01&\x01\'\x01(\x01)\x01*\x01+\x01������/\x010\x01\x01\x01\x02\x01\x03\x01\x04\x01\x05\x01\x06\x01\x07\x01\b\x01\t\x01\n\x01\x0b\x01\f\x01\r\x01\x0e\x01\x0f\x01\x10\x01\x11\x01\x12\x01\x13\x01\x14\x01\x15\x01\x16\x01\x17\x01\x18\x01\x19\x01\x1a\x01\x1b\x01\x1c\x01\x1d\x01\x1e\x01\x1f\x01 \x01!\x01"\x01#\x01$\x01%\x01&\x01\'\x01(\x01)\x01*\x01+\x01,\x01-\x01.\x01/\x01\x01\x01.\x01.\x01.\x01.\x01����������������������������������������������������������������������������,\x01-\x01.\x01';
var
 yynames_const=
  "END\0BOLD\0EMP\0CENTER\0LEFT\0RIGHT\0ITALIC\0LIST\0ENUM\0ITEM\0LINK\0CODE\0END_CODE\0CODE_PRE\0END_CODE_PRE\0VERB\0END_VERB\0LATEX\0END_TARGET\0LBRACE\0ELE_REF\0VAL_REF\0TYP_REF\0EXT_REF\0EXC_REF\0MOD_REF\0MODT_REF\0CLA_REF\0CLT_REF\0ATT_REF\0MET_REF\0SEC_REF\0RECF_REF\0CONST_REF\0MOD_LIST_REF\0INDEX_LIST\0SUPERSCRIPT\0SUBSCRIPT\0BEGIN_SHORTCUT_LIST_ITEM\0BEGIN_SHORTCUT_ENUM_ITEM\0SHORTCUT_LIST_ITEM\0SHORTCUT_ENUM_ITEM\0END_SHORTCUT_LIST\0BLANK_LINE\0EOF\0";
var yynames_block="Title\0CUSTOM\0Target\0Char\0";
var
 yyact=
  [function(param){var $js=Pervasives["failwith"];return $js("parser")},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,1);return _1},
   function(__caml_parser_env){return [0,[0,""],0]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return _1},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1,0]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return [0,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1,0]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return [0,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     var $js$1=Parsing["symbol_start"];
     var $js$2=$js$1(0);
     var $js$3=Parsing["symbol_end"];
     var $js$4=$js$3(0);
     var $js$5=[0,$js$2,$js$4,_1];
     return $js$5},
   function(__caml_parser_env){return 0},
   function(__caml_parser_env){return [0,4]},
   function(__caml_parser_env){return [0,5]},
   function(__caml_parser_env){return [0,6]},
   function(__caml_parser_env){return [0,7]},
   function(__caml_parser_env){return [0,0]},
   function(__caml_parser_env){return [0,1]},
   function(__caml_parser_env){return [0,2]},
   function(__caml_parser_env){return [0,3]},
   function(__caml_parser_env){return [0,8]},
   function(__caml_parser_env){return [0,9]},
   function(__caml_parser_env){return [0,[0,0]]},
   function(__caml_parser_env){return [0,10]},
   function(__caml_parser_env){return [0,11]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,2);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,1);
     return [13,_1[1],_1[2],_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [4,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [5,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,2);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,1);
     return [20,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [6,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [17,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [18,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [7,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [8,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [9,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [10,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [11,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [2,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,2);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,1);
     var s2=remove_beginning_blanks(_2);
     var s3=remove_trailing_blanks(s2);
     var $js$2=[16,s3,_1,0];
     return $js$2},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,4);
     var $js$1=Parsing["peek_val"];
     var _3=$js$1(__caml_parser_env,3);
     var $js$2=Parsing["peek_val"];
     var _5=$js$2(__caml_parser_env,1);
     var s2=remove_beginning_blanks(_3);
     var s3=remove_trailing_blanks(s2);
     var $js$3=[16,s3,_2,[0,_5]];
     return $js$3},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     var s2=remove_beginning_blanks(_2);
     var s3=remove_trailing_blanks(s2);
     var $js$1=Odoc_misc["split_with_blanks"];
     var l=$js$1(s3);
     var $js$2=[19,l];
     return $js$2},
   function(__caml_parser_env){return 1},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [3,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [14,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,2);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,1);
     return [21,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,3);
     var $js$1=Parsing["peek_val"];
     var _4=$js$1(__caml_parser_env,1);
     return [15,_2,_4]},
   function(__caml_parser_env){return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [10,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [10,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [11,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,1);
     return [11,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return _2},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return _1},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1,0]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return [0,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _2=$js(__caml_parser_env,1);return _2},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return [0,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1,0]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _2=$js(__caml_parser_env,0);return _2},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return [0,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1,0]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _2=$js(__caml_parser_env,0);return _2},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return _1},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     var $js$2=Pervasives["^"];
     var $js$3=$js$2(_1,_2);
     return $js$3},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var $js$1=$js(__caml_parser_env,0);
     var $js$2=[0,Parsing["YYexit"],$js$1];
     throw $js$2},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var $js$1=$js(__caml_parser_env,0);
     var $js$2=[0,Parsing["YYexit"],$js$1];
     throw $js$2}];
var
 yytables=
  [0,
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
   {var $js=Parsing["yyparse"];return $js(yytables,1,lexfun,lexbuf)};
var
 located_element_list=
  function(lexfun,lexbuf)
   {var $js=Parsing["yyparse"];return $js(yytables,2,lexfun,lexbuf)};
module["exports"]={"main":main,"located_element_list":located_element_list};
