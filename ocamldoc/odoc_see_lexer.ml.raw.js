var String=require("String");
var Buffer=require("Buffer");
var Lexing=require("Lexing");
var $js=Buffer["create"];
var buf=$js(32);
var
 __ocaml_lex_tables=
  [0,
   "\0\0ùÿúÿûÿüÿýÿþÿ\x05\0\x01\0\x02\0ÿÿ\x04\0ÿÿ\x06\0\x03\0ÿÿ\x05\0\x07\0þÿÿÿ",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "\x01\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\t\0\t\0\0\0\x0b\0\0\0\x0b\0\x0e\0\0\0\x0e\0\x12\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\x06\0\0\0\x07\0\x07\0\x07\0\0\0\0\0\x07\0\x07\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x07\0\0\0\x04\0\0\0\0\0\x07\0\f\0\x03\0\f\0\0\0\x0f\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0\0\0\0\0ÿÿ\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x10\0\r\0\x10\0\r\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x13\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0\x07\0ÿÿÿÿ\x07\0\x07\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿ\x07\0\x0b\0\0\0\r\0ÿÿ\x0e\0ÿÿ\x10\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿ\b\0\t\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x0e\0\x0b\0\x10\0\r\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\b\0\t\0\x0e\0\x0b\0\x10\0\r\0\x11\0",
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
   {var $js$1=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$1(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$2=6<__ocaml_lex_state$1>>>0;
    if($js$2)
     {var $js$3=lexbuf[1];
      $js$3(lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$4=__ocaml_lex_state$1;
      var $js$5=$js$4[0];
      if($js$5==0)
       {var exit=2}
      else
       if($js$5==1)
        {var exit=2}
       else
        if($js$5==2)
         {return url(lexbuf)}
        else
         if($js$5==3)
          {return doc(lexbuf)}
         else
          if($js$5==4)
           {return file(lexbuf)}
          else
           if($js$5==5)
            {return 9}
           else
            if($js$5==6)
             {var $js$6=Buffer["reset"];
              $js$6(buf);
              var $js$7=Buffer["add_string"];
              var $js$8=Lexing["lexeme"];
              var $js$9=$js$8(lexbuf);
              $js$7(buf,$js$9);
              return desc(lexbuf)}}
    switch(exit){case 2:return main(lexbuf)}};
var url=function(lexbuf){return __ocaml_lex_url_rec(lexbuf,8)};
var
 __ocaml_lex_url_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$1=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$1(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$2=__ocaml_lex_state$1!=0;
    if($js$2)
     {var $js$3=lexbuf[1];
      $js$3(lexbuf);
      return __ocaml_lex_url_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$4=Lexing["lexeme"];
      var s=$js$4(lexbuf);
      var $js$5=String["sub"];
      var $js$6=$js$5(s,0,s["length"]-1);
      return [1,$js$6]}};
var doc=function(lexbuf){return __ocaml_lex_doc_rec(lexbuf,11)};
var
 __ocaml_lex_doc_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$1=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$1(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$2=__ocaml_lex_state$1!=0;
    if($js$2)
     {var $js$3=lexbuf[1];
      $js$3(lexbuf);
      return __ocaml_lex_doc_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$4=Lexing["lexeme"];
      var s=$js$4(lexbuf);
      var $js$5=String["sub"];
      var $js$6=$js$5(s,0,s["length"]-1);
      return [3,$js$6]}};
var file=function(lexbuf){return __ocaml_lex_file_rec(lexbuf,14)};
var
 __ocaml_lex_file_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$1=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$1(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$2=__ocaml_lex_state$1!=0;
    if($js$2)
     {var $js$3=lexbuf[1];
      $js$3(lexbuf);
      return __ocaml_lex_file_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$4=Lexing["lexeme"];
      var s=$js$4(lexbuf);
      var $js$5=String["sub"];
      var $js$6=$js$5(s,0,s["length"]-1);
      return [2,$js$6]}};
var desc=function(lexbuf){return __ocaml_lex_desc_rec(lexbuf,17)};
var
 __ocaml_lex_desc_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$1=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$1(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$2=__ocaml_lex_state$1!=0;
    if($js$2)
     {var $js$3=__ocaml_lex_state$1!=1;
      if($js$3)
       {var $js$4=lexbuf[1];
        $js$4(lexbuf);
        return __ocaml_lex_desc_rec(lexbuf,__ocaml_lex_state$1)}
      else
       {var $js$5=Buffer["add_string"];
        var $js$6=Lexing["lexeme"];
        var $js$7=$js$6(lexbuf);
        $js$5(buf,$js$7);
        return desc(lexbuf)}}
    else
     {var $js$8=Buffer["contents"];var $js$9=$js$8(buf);return [5,$js$9]}};
module["exports"]=
{"buf":buf,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "main":main,
 "__ocaml_lex_main_rec":__ocaml_lex_main_rec,
 "url":url,
 "__ocaml_lex_url_rec":__ocaml_lex_url_rec,
 "doc":doc,
 "__ocaml_lex_doc_rec":__ocaml_lex_doc_rec,
 "file":file,
 "__ocaml_lex_file_rec":__ocaml_lex_file_rec,
 "desc":desc,
 "__ocaml_lex_desc_rec":__ocaml_lex_desc_rec};
