// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var Lexing=require("Lexing");
var Parsing=require("Parsing");


var
 __ocaml_lex_tables=
  /* record */[0,
   '\0\0��\x01\0��\x02\0\x05\0��\0\0\x07\0\x01\0��\x03\0H\0����(\x01��������K\x01n\x01�\x01�����\x01�\x01\0\0�\x01\x04\x001\x02\x01\x03\b\0��\x1f\0\n\0\x12\0�\0|\x02"\0\f\0',
   "\x01\0��\0\0��\x01\0����\x01\0\0\0\0\0��\0\0������\x10\0��������\x0b\0\n\0\t\0����\x06\0\x05\0\x04\0\x04\0\x12\0\x02\0\x01\0\0\0����������\x04\0\x04\0\x04\0",
   '\x04\0\0\0��\0\0\x04\0\b\0\0\0��\b\0\x0b\0\0\0\x0b\0\r\0\0\0\0\0��\0\0\0\0\0\0\0\0������\0\0\0\0��������"\0������\0\0"\0������������',
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\x03\0\x03\0\x03\0\x02\0\x07\0\x02\0�� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\0\0\0\0\0\0\x07\0!\0�� \0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0(\0(\0(\0(\0\0\0\0\0\0\0!\0'\0'\0'\0'\0'\0'\0'\0'\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0'\0'\0'\0'\0'\0'\0'\0'\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0 \0\x14\0\x1d\0\x17\0\x15\0\x0f\0\x0f\0\0\0\x13\0\x12\0\x1a\0\x0f\0\0\0\x19\0\x18\0\x0f\0\x1c\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x16\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x11\0\0\0\x10\0\x0f\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\x0f\0\0\0\x0f\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0\0\0\0\0\x01\0\n\0������\x06\0\0\0��\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0��\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x0e\0\x0f\0\0\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\0\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\0\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\0\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\0\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\0\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\x0f\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\0\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\0\0\0\0\x0f\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0#\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0f\0\0\0\x0f\0\0\0$\0\x1e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\0\0\0\0\0\0\0\0\x1e\0\0\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0&\0&\0&\0&\0&\0&\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\0\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\0\0\0\0\0\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\0\0",
   "������������������\x07\0\0\0\x02\0\x04\0\0\0\x05\0\x04\0\b\0 \0����������������������������\x07\0��������\x05\0\x1d\0\b\0 \0��������������\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0\x1b\0#\0#\0(\0(\0������\"\0$\0$\0$\0$\0$\0$\0$\0$\0��������������\f\0'\0'\0'\0'\0'\0'\0'\0'\0����������������������������\f\0\f\0\f\0\f\0\f\0\f\0\f\0��\f\0\f\0\f\0\f\0��\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0����\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0��\f\0\f\0\f\0��\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0��\f\0��\f\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0��������������%\0%\0%\0%\0%\0%\0����������������������������������������������������%\0%\0%\0%\0%\0%\0����\0\0\t\0\x04\0\x0b\0\x1d\0\x05\0��\b\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\"\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0��\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\f\0\x0f\0����\x0f\0\x0f\0\x0f\0������\x0f\0\x0f\0��\x0f\0\x0f\0\x0f\0��������������������\x0f\0��\x0f\0\x0f\0\x0f\0\x0f\0\x0f\0������\x14\0����\x14\0\x14\0\x14\0������\x14\0\x14\0��\x14\0\x14\0\x14\0��������������������\x14\0\x0f\0\x14\0\x14\0\x14\0\x14\0\x14\0������\x15\0����\x15\0\x15\0\x15\0������\x15\0\x15\0��\x15\0\x15\0\x15\0������������\x0f\0��\x0f\0��\x15\0\x14\0\x15\0\x15\0\x15\0\x15\0\x15\0������\x16\0����\x16\0\x16\0\x16\0������\x16\0\x16\0��\x16\0\x16\0\x16\0������������\x14\0��\x14\0��\x16\0\x15\0\x16\0\x16\0\x16\0\x16\0\x16\0������\x19\0����\x19\0\x19\0\x19\0������\x19\0\x19\0��\x19\0\x19\0\x19\0������������\x15\0��\x15\0��\x19\0\x16\0\x19\0\x19\0\x19\0\x19\0\x19\0������\x1a\0����\x1a\0\x1a\0\x1a\0������\x1a\0\x1a\0��\x1a\0\x1a\0\x1a\0������������\x16\0��\x16\0��\x1a\0\x19\0\x1a\0\x1a\0\x1a\0\x1a\0\x1a\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0\x1c\0����������������\x1c\0����������\x19\0��\x19\0����\x1a\0��\x1c\0����������������\x1c\0������������������\x1c\0����������������\x1a\0��\x1a\0��\x1c\0\x1e\0��������������\x1c\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0��������������\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0��������\x1e\0��\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0&\0&\0&\0&\0&\0&\0&\0&\0&\0&\0��������������&\0&\0&\0&\0&\0&\0����������������������������������������������������&\0&\0&\0&\0&\0&\0����������������������������\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0��\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1e\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0��������������\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0��������\x1f\0��\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0������������������������������������������������������������������������������������������������������������������������������������������\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0��\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0��\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0\x1f\0��",
   "\0\0\0\0\0\0\x04\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\x04\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\x01\0\0\0\0\0\0\0\x01\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "��������������������\0\0\x04\0��\0\0\x04\0��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������\0\0\x04\0",
   "�\x01��\0\x01�"];

var
 line=
  function(lexbuf)
   {lexbuf[10]="unknown primitive:caml_make_vect",0;
    lexbuf[10][1]=lexbuf[6],0;
    return __ocaml_lex_line_rec(lexbuf,0);
    };

var
 __ocaml_lex_line_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["new_engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(2<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_line_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:return Lexing["sub_lexeme"](lexbuf,lexbuf[5],lexbuf[10][0]);
        case 1:return Lexing["lexeme"](lexbuf);
        case 2:throw Pervasives["Exit"];
        }
      }
    };

var argument=function(lexbuf){return __ocaml_lex_argument_rec(lexbuf,5);};

var
 __ocaml_lex_argument_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(3<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_argument_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:return /* ARGUMENT */[0,Lexing["lexeme"](lexbuf)];
        case 1:return argument(lexbuf);
        case 2:return /* EOL */11;
        case 3:throw Parsing["Parse_error"];
        }
      }
    };

var
 line_argument=
  function(lexbuf){return __ocaml_lex_line_argument_rec(lexbuf,9);};

var
 __ocaml_lex_line_argument_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(__ocaml_lex_state$1!=0)
     {if(__ocaml_lex_state$1!=1)
       {lexbuf[1](lexbuf);
        return __ocaml_lex_line_argument_rec(lexbuf,__ocaml_lex_state$1);
        }
      else
       {return /* EOL */11;}
      }
    else
     {return /* ARGUMENT */[0,Lexing["lexeme"](lexbuf)];}
    };

var lexeme=function(lexbuf){return __ocaml_lex_lexeme_rec(lexbuf,12);};

var
 __ocaml_lex_lexeme_rec=
  function(lexbuf,__ocaml_lex_state)
   {var
     __ocaml_lex_state$1=
      Lexing["engine"](__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    
    if(18<__ocaml_lex_state$1>>>0)
     {lexbuf[1](lexbuf);
      return __ocaml_lex_lexeme_rec(lexbuf,__ocaml_lex_state$1);
      }
    else
     {switch(__ocaml_lex_state$1[0])
       {case 0:return lexeme(lexbuf);
        case 1:return /* LIDENT */[1,Lexing["lexeme"](lexbuf)];
        case 2:return /* UIDENT */[2,Lexing["lexeme"](lexbuf)];
        case 3:
         var s=Lexing["lexeme"](lexbuf);
         
         return /* LIDENT */[1,$$String["sub"](s,1,s["length"]-2)];
         
        case 4:
         return /* INTEGER */[4,"unknown primitive:caml_int64_of_string"];
        case 5:return /* STAR */0;
        case 6:return /* MINUS */1;
        case 7:return /* DOT */2;
        case 8:return /* SHARP */3;
        case 9:return /* AT */4;
        case 10:return /* DOLLAR */5;
        case 11:return /* BANG */6;
        case 12:return /* LPAREN */7;
        case 13:return /* RPAREN */8;
        case 14:return /* LBRACKET */9;
        case 15:return /* RBRACKET */10;
        case 16:return /* OPERATOR */[3,Lexing["lexeme"](lexbuf)];
        case 17:return /* EOL */11;
        case 18:throw Parsing["Parse_error"];
        }
      }
    };

module["exports"]=
{"line":line,
 "lexeme":lexeme,
 "argument":argument,
 "line_argument":line_argument};

