var String=require("String");
var Odoc_global=require("Odoc_global");
var Pervasives=require("Pervasives");
var List=require("List");
var Lexing=require("Lexing");
var Buffer=require("Buffer");
var Odoc_comments_global=require("Odoc_comments_global");
var Str=require("Str");
var Odoc_messages=require("Odoc_messages");
var line_number=[0,0];
var $js=Buffer["create"];
var string_buffer=$js(32);
var
 reset_string_buffer=
  function(param){var $js$1=Buffer["reset"];return $js$1(string_buffer)};
var $js$1=Buffer["add_char"];
var ajout_char_string=$js$1(string_buffer);
var $js$2=Buffer["add_string"];
var ajout_string=$js$2(string_buffer);
var
 lecture_string=
  function(param){var $js$3=Buffer["contents"];return $js$3(string_buffer)};
var description=[0,""];
var blank="[ \r\t\f]";
var comments_level=[0,0];
var
 remove_blanks=
  function(s)
   {var $js$3=Str["split_delim"];
    var $js$4=Str["regexp"];
    var $js$5=$js$4("\n");
    var l=$js$3($js$5,s);
    var
     iter=
      function(liste)
       {var $js$6=liste;
        if($js$6)
         {var q=liste[2];
          var $js$7=Str["global_replace"];
          var $js$8=Str["regexp"];
          var $js$9=Pervasives["^"];
          var $js$10=Pervasives["^"];
          var $js$11=$js$10(blank,"+");
          var $js$12=$js$9("^",$js$11);
          var $js$13=$js$8($js$12);
          var h2=$js$7($js$13,"",liste[1]);
          var $js$14="unknown primitive:caml_string_equal";
          if($js$14){return iter(q)}else{return [0,h2,q]}}
        else
         {return 0}};
    var l2=iter(l);
    var
     iter$1=
      function(liste)
       {var $js$6=liste;
        if($js$6)
         {var q=liste[2];
          var $js$7=Str["global_replace"];
          var $js$8=Str["regexp"];
          var $js$9=Pervasives["^"];
          var $js$10=$js$9(blank,"+$");
          var $js$11=$js$8($js$10);
          var h2=$js$7($js$11,"",liste[1]);
          var $js$12="unknown primitive:caml_string_equal";
          if($js$12){return iter$1(q)}else{return [0,h2,q]}}
        else
         {return 0}};
    var $js$6=List["rev"];
    var $js$7=List["rev"];
    var $js$8=$js$7(l2);
    var $js$9=iter$1($js$8);
    var l3=$js$6($js$9);
    var $js$10=String["concat"];
    return $js$10("\n",l3)};
var
 remove_stars=
  function(s)
   {var $js$3=Str["global_replace"];
    var $js$4=Str["regexp"];
    var $js$5=Pervasives["^"];
    var $js$6=Pervasives["^"];
    var $js$7=$js$6(blank,"*\*");
    var $js$8=$js$5("^",$js$7);
    var $js$9=$js$4($js$8);
    return $js$3($js$9,"",s)};
var
 __ocaml_lex_tables=
  [0,
   "\0\0öÿ\0\0ùÿ\x01\0þÿ\x02\0\x02\0\x04\0\x06\0ýÿüÿ\b\0øÿ\x0b\0ûÿ\t\0\0\0\n\0\r\0ÿÿþÿýÿ-\0$\0ýÿ\r\0\x0f\0ÿÿþÿ$\x01úÿ\t\0\n\0m\0m\0e\x01a\x012\0÷ÿ\x10\0ùÿ\x10\0þÿ\x07\0\x13\0\x18\0üÿ\x1a\0øÿ",
   "ÿÿÿÿ\t\0ÿÿ\t\0ÿÿ\0\0\b\0\x05\0\x04\0ÿÿÿÿÿÿÿÿÿÿÿÿ\x04\0\x04\0\x04\0\x04\0ÿÿÿÿÿÿ\x03\0ÿÿÿÿ\x02\0\x02\0ÿÿÿÿÿÿÿÿ\x04\0\x04\0\x02\0\x01\0\0\0\x03\0ÿÿÿÿ\b\0ÿÿ\b\0ÿÿ\0\0\x05\0\x04\0ÿÿ\x02\0ÿÿ",
   "\x01\0\0\0ÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\x0f\0\0\0ÿÿÿÿÿÿÿÿ\0\0\0\0\0\0ÿÿ\x19\0\0\0ÿÿÿÿ\0\0\0\0 \0\0\0 \0 \0ÿÿ \0 \0ÿÿ'\0\0\0ÿÿ\0\0ÿÿ\0\0ÿÿÿÿÿÿ\0\0ÿÿ\0\0",
   '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0,\0\0\0\0\0,\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x06\0\0\0\x06\0\0\0\0\0\0\0\0\0,\0\x04\0\r\0\x02\0\x07\0\b\0\n\0\t\0\x0b\0\f\0\x0b\0\f\0\x12\0\x15\0\x13\0\x14\0\x1d\0\x1c\x001\0-\0,\0+\0.\0,\0,\0\x16\0/\x000\0/\x000\0\0\0\0\0\0\0\0\0ÿÿ\0\0\x10\0\x1a\0\0\0\x1b\0\0\0\0\0\0\0,\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0*\0\0\0(\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0!\0\x11\0\x17\0\0\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x17\0\0\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\0\0\0\0%\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x03\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0ÿÿÿÿÿÿ\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0ÿÿ\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0$\0#\0\0\0$\0$\0)\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0"\0%\0%\0%\0%\0%\0%\0%\0%\0ÿÿ$\0\0\0\0\0$\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0!\0\0\0\0\0\0\0\0\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0!\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0%\0%\0%\0%\0%\0%\0%\0%\0\0\0\0\0\0\0\0\0ÿÿ',
   'ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\x06\0\0\0\0\0\x06\0\x06\0,\0ÿÿÿÿ,\0,\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\x06\0ÿÿÿÿÿÿÿÿ,\0\0\0\x02\0\0\0\x04\0\x07\0\b\0\b\0\t\0\t\0\f\0\f\0\x0e\0\x12\0\x0e\0\x13\0\x1a\0\x1b\0(\0*\0&\0&\0-\0&\0&\0\x11\0.\0.\x000\x000\0ÿÿÿÿÿÿÿÿ \0ÿÿ\x0e\0\x18\0ÿÿ\x18\0ÿÿÿÿÿÿ&\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ&\0ÿÿ&\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ \0!\0\x0e\0\x10\0ÿÿ\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x17\0ÿÿ\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0ÿÿÿÿÿÿÿÿÿÿ#\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ#\0ÿÿÿÿ"\0ÿÿ"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\0\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0\x10\0 \0!\0\x0e\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x18\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x17\0\x1e\0\x1e\0ÿÿ\x1e\0\x1e\0&\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1e\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0"\0\x1e\0"\0"\0"\0"\0"\0"\0"\0"\0#\0$\0ÿÿÿÿ$\0$\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1e\0ÿÿÿÿÿÿÿÿ$\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ$\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ%\0$\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1e\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0%\0ÿÿ%\0%\0%\0%\0%\0%\0%\0%\0ÿÿÿÿÿÿÿÿ$\0',
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
   {var $js$3=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$3(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$4=9<__ocaml_lex_state$1>>>0;
    if($js$4)
     {var $js$5=lexbuf[1];
      $js$5(lexbuf);
      return __ocaml_lex_main_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$6=__ocaml_lex_state$1;
      var $js$7=$js$6[0];
      if($js$7==0)
       {var exit=2}
      else
       if($js$7==1)
        {line_number[0]++;
         Odoc_comments_global["nb_chars"][0]++;
         return main(lexbuf)}
       else
        if($js$7==2)
         {var $js$8=Lexing["lexeme"];
          var $js$9=$js$8(lexbuf);
          var $js$10=$js$9["length"];
          var $js$11=Odoc_comments_global["nb_chars"][1]+$js$10;
          Odoc_comments_global["nb_chars"][1]=$js$11,0;
          return [0,[0,"",0]]}
        else
         if($js$7==3)
          {var exit=2}
         else
          if($js$7==4)
           {var exit=3}
          else
           if($js$7==5)
            {var $js$12=Lexing["lexeme"];
             var $js$13=$js$12(lexbuf);
             var $js$14=$js$13["length"];
             var $js$15=Odoc_comments_global["nb_chars"][1]+$js$14;
             Odoc_comments_global["nb_chars"][1]=$js$15,0;
             comments_level[0]++;
             var $js$16=comments_level[1]=1;
             if($js$16)
              {reset_string_buffer(0);
               description[1]="",0;
               return special_comment(lexbuf)}
             else
              {return main(lexbuf)}}
           else
            if($js$7==6)
             {return 9}
            else
             if($js$7==7)
              {var $js$17=Lexing["lexeme"];
               var $js$18=$js$17(lexbuf);
               var $js$19=$js$18["length"];
               var $js$20=Odoc_comments_global["nb_chars"][1]+$js$19;
               Odoc_comments_global["nb_chars"][1]=$js$20,0;
               comments_level[0]--;
               return main(lexbuf)}
             else
              if($js$7==8)
               {var exit=3}
              else
               if($js$7==9)
                {Odoc_comments_global["nb_chars"][0]++;return main(lexbuf)}}
    switch(exit)
     {case 2:
       var $js$21=Lexing["lexeme"];
       var $js$22=$js$21(lexbuf);
       var $js$23=$js$22["length"];
       var $js$24=Odoc_comments_global["nb_chars"][1]+$js$23;
       Odoc_comments_global["nb_chars"][1]=$js$24,0;
       return main(lexbuf);
      case 3:
       var $js$25=Lexing["lexeme"];
       var $js$26=$js$25(lexbuf);
       var $js$27=$js$26["length"];
       var $js$28=Odoc_comments_global["nb_chars"][1]+$js$27;
       Odoc_comments_global["nb_chars"][1]=$js$28,0;
       comments_level[0]++;
       return main(lexbuf)
      }};
var
 special_comment=
  function(lexbuf){return __ocaml_lex_special_comment_rec(lexbuf,14)};
var
 __ocaml_lex_special_comment_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$3=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$3(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$4=4<__ocaml_lex_state$1>>>0;
    if($js$4)
     {var $js$5=lexbuf[1];
      $js$5(lexbuf);
      return __ocaml_lex_special_comment_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$6=__ocaml_lex_state$1;
      var $js$7=$js$6[0];
      if($js$7==0)
       {var $js$8=Lexing["lexeme"];
        var s=$js$8(lexbuf);
        Odoc_comments_global["nb_chars"][1]=
        Odoc_comments_global["nb_chars"][1]+
        s["length"],
        0;
        var $js$9=comments_level[1]=1;
        if($js$9)
         {var s2=lecture_string(0);
          var s3=remove_blanks(s2);
          var $js$10=Odoc_global["remove_stars"][1];
          if($js$10){var s4=remove_stars(s3)}else{var s4=s3}
          return [0,[0,s4,0]]}
        else
         {ajout_string(s);comments_level[0]--;return special_comment(lexbuf)}}
      else
       if($js$7==1)
        {var $js$11=Lexing["lexeme"];
         var s$1=$js$11(lexbuf);
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$1["length"],
         0;
         comments_level[0]++;
         ajout_string(s$1);
         return special_comment(lexbuf)}
       else
        if($js$7==2)
         {var $js$12=Lexing["lexeme"];
          var s$2=$js$12(lexbuf);
          var $js$13=Lexing["lexeme_char"];
          var c=$js$13(lexbuf,1);
          ajout_char_string(c);
          Odoc_comments_global["nb_chars"][1]=
          Odoc_comments_global["nb_chars"][1]+
          s$2["length"],
          0;
          return special_comment(lexbuf)}
        else
         if($js$7==3)
          {var s$3=lecture_string(0);
           var $js$14=remove_blanks(s$3);
           description[1]=$js$14,0;
           reset_string_buffer(0);
           var $js$15=Lexing["lexeme"];
           var $js$16=$js$15(lexbuf);
           var len=$js$16["length"];
           lexbuf[6]=lexbuf[6]-len,0;
           var init=lexbuf[12];
           var $js$17=[0,init[1],init[2],init[3],lexbuf[12][4]-len];
           lexbuf[12]=$js$17,0;
           return special_comment_part2(lexbuf)}
         else
          if($js$7==4)
           {var $js$18=Lexing["lexeme_char"];
            var c$1=$js$18(lexbuf,0);
            ajout_char_string(c$1);
            var $js$19=c$1=10;
            if($js$19){line_number[0]++}else{}
            Odoc_comments_global["nb_chars"][0]++;
            return special_comment(lexbuf)}}};
var
 special_comment_part2=
  function(lexbuf){return __ocaml_lex_special_comment_part2_rec(lexbuf,24)};
var
 __ocaml_lex_special_comment_part2_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$3=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$3(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$4=2<__ocaml_lex_state$1>>>0;
    if($js$4)
     {var $js$5=lexbuf[1];
      $js$5(lexbuf);
      return __ocaml_lex_special_comment_part2_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$6=__ocaml_lex_state$1;
      var $js$7=$js$6[0];
      if($js$7==0)
       {var $js$8=Lexing["lexeme"];
        var s=$js$8(lexbuf);
        Odoc_comments_global["nb_chars"][1]=
        Odoc_comments_global["nb_chars"][1]+
        s["length"],
        0;
        var $js$9=comments_level[1]=1;
        if($js$9)
         {var $js$10=Odoc_global["remove_stars"][1];
          if($js$10)
           {var desc=remove_stars(description[1])}
          else
           {var desc=description[1]}
          var remain=lecture_string(0);
          var $js$11=Odoc_global["remove_stars"][1];
          if($js$11){var remain2=remove_stars(remain)}else{var remain2=remain}
          return [0,[0,desc,[0,remain2]]]}
        else
         {ajout_string(s);
          comments_level[0]--;
          return special_comment_part2(lexbuf)}}
      else
       if($js$7==1)
        {var $js$12=Lexing["lexeme"];
         var s$1=$js$12(lexbuf);
         Odoc_comments_global["nb_chars"][1]=
         Odoc_comments_global["nb_chars"][1]+
         s$1["length"],
         0;
         ajout_string(s$1);
         comments_level[0]++;
         return special_comment_part2(lexbuf)}
       else
        if($js$7==2)
         {var $js$13=Lexing["lexeme_char"];
          var c=$js$13(lexbuf,0);
          ajout_char_string(c);
          var $js$14=c=10;
          if($js$14){line_number[0]++}else{}
          Odoc_comments_global["nb_chars"][0]++;
          return special_comment_part2(lexbuf)}}};
var elements=function(lexbuf){return __ocaml_lex_elements_rec(lexbuf,30)};
var
 __ocaml_lex_elements_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$3=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$3(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$4=6<__ocaml_lex_state$1>>>0;
    if($js$4)
     {var $js$5=lexbuf[1];
      $js$5(lexbuf);
      return __ocaml_lex_elements_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$6=__ocaml_lex_state$1;
      var $js$7=$js$6[0];
      if($js$7==0)
       {var $js$8=Lexing["lexeme"];
        var $js$9=$js$8(lexbuf);
        var $js$10=$js$9["length"];
        var $js$11=Odoc_comments_global["nb_chars"][1]+$js$10;
        Odoc_comments_global["nb_chars"][1]=$js$11,0;
        return elements(lexbuf)}
      else
       if($js$7==1)
        {line_number[0]++;
         Odoc_comments_global["nb_chars"][0]++;
         return elements(lexbuf)}
       else
        if($js$7==2)
         {return "unknown primitive:raise"}
        else
         if($js$7==3)
          {var $js$12=Lexing["lexeme"];
           var s=$js$12(lexbuf);
           Odoc_comments_global["nb_chars"][1]=
           Odoc_comments_global["nb_chars"][1]+
           s["length"],
           0;
           var $js$13=String["sub"];
           var s2=$js$13(s,1,s["length"]-1);
           var $js$14=s2;
           if($js$14=="author")
            {return 1}
           else
            if($js$14=="before")
             {return 5}
            else
             if($js$14=="deprecated")
              {return 6}
             else
              if($js$14=="param")
               {return 0}
              else
               if($js$14=="raise")
                {return 7}
               else
                if($js$14=="return")
                 {return 8}
                else
                 if($js$14=="see")
                  {return 3}
                 else
                  if($js$14=="since")
                   {return 4}
                  else
                   if($js$14=="version"){return 2}else{var exit=22}
           switch(exit)
            {case 22:
              var $js$15=Odoc_global["no_custom_tags"][1];
              if($js$15)
               {var $js$16=Odoc_messages["not_a_valid_tag"];
                var $js$17=$js$16(s2);
                var $js$18=[0,Failure,$js$17];
                throw $js$18}
              else
               {return [4,s2]}
             }}
         else
          if($js$7==4)
           {var $js$19=Lexing["lexeme"];
            var $js$20=$js$19(lexbuf);
            var $js$21=$js$20["length"];
            var $js$22=Odoc_comments_global["nb_chars"][1]+$js$21;
            Odoc_comments_global["nb_chars"][1]=$js$22,0;
            var $js$23=Lexing["lexeme"];
            var s$1=$js$23(lexbuf);
            var $js$24=Str["global_replace"];
            var $js$25=Str["regexp_string"];
            var $js$26=$js$25("\@");
            var s$2=$js$24($js$26,"@",s$1);
            var s$3=remove_blanks(s$2);
            return [5,s$3]}
          else
           if($js$7==5)
            {return 9}
           else
            if($js$7==6)
             {var $js$27=Lexing["lexeme"];
              var s$4=$js$27(lexbuf);
              var $js$28=Pervasives["failwith"];
              var $js$29=Pervasives["^"];
              var $js$30=Pervasives["^"];
              var $js$31=$js$30(s$4,"'");
              var $js$32=$js$29("Unexpected character '",$js$31);
              return $js$28($js$32)}}};
var simple=function(lexbuf){return __ocaml_lex_simple_rec(lexbuf,38)};
var
 __ocaml_lex_simple_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js$3=Lexing["engine"];
    var
     __ocaml_lex_state$1=
      $js$3(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$4=8<__ocaml_lex_state$1>>>0;
    if($js$4)
     {var $js$5=lexbuf[1];
      $js$5(lexbuf);
      return __ocaml_lex_simple_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$6=__ocaml_lex_state$1;
      var $js$7=$js$6[0];
      if($js$7==0)
       {var $js$8=Lexing["lexeme"];
        var $js$9=$js$8(lexbuf);
        var $js$10=$js$9["length"];
        var $js$11=Odoc_comments_global["nb_chars"][1]+$js$10;
        Odoc_comments_global["nb_chars"][1]=$js$11,0;
        return simple(lexbuf)}
      else
       if($js$7==1)
        {line_number[0]++;
         Odoc_comments_global["nb_chars"][0]++;
         return simple(lexbuf)}
       else
        if($js$7==2)
         {var $js$12=Lexing["lexeme"];
          var $js$13=$js$12(lexbuf);
          var $js$14=$js$13["length"];
          var $js$15=Odoc_comments_global["nb_chars"][1]+$js$14;
          Odoc_comments_global["nb_chars"][1]=$js$15,0;
          comments_level[0]++;
          return simple(lexbuf)}
        else
         if($js$7==3)
          {var $js$16=Lexing["lexeme"];
           var s=$js$16(lexbuf);
           Odoc_comments_global["nb_chars"][1]=
           Odoc_comments_global["nb_chars"][1]+
           s["length"],
           0;
           return simple(lexbuf)}
         else
          if($js$7==4)
           {var $js$17=Lexing["lexeme"];
            var s$1=$js$17(lexbuf);
            Odoc_comments_global["nb_chars"][1]=
            Odoc_comments_global["nb_chars"][1]+
            s$1["length"],
            0;
            comments_level[0]++;
            return simple(lexbuf)}
          else
           if($js$7==5)
            {var $js$18=Lexing["lexeme"];
             var s$2=$js$18(lexbuf);
             Odoc_comments_global["nb_chars"][1]=
             Odoc_comments_global["nb_chars"][1]+
             s$2["length"],
             0;
             comments_level[0]++;
             var $js$19=comments_level[1]=1;
             if($js$19)
              {reset_string_buffer(0);
               description[1]="",0;
               return special_comment(lexbuf)}
             else
              {ajout_string(s$2);return simple(lexbuf)}}
           else
            if($js$7==6)
             {return 9}
            else
             if($js$7==7)
              {var $js$20=Lexing["lexeme"];
               var s$3=$js$20(lexbuf);
               Odoc_comments_global["nb_chars"][1]=
               Odoc_comments_global["nb_chars"][1]+
               s$3["length"],
               0;
               comments_level[0]--;
               return simple(lexbuf)}
             else
              if($js$7==8)
               {Odoc_comments_global["nb_chars"][0]++;return simple(lexbuf)}}};
module["exports"]=
{"line_number":line_number,
 "string_buffer":string_buffer,
 "reset_string_buffer":reset_string_buffer,
 "ajout_char_string":ajout_char_string,
 "ajout_string":ajout_string,
 "lecture_string":lecture_string,
 "description":description,
 "blank":blank,
 "comments_level":comments_level,
 "remove_blanks":remove_blanks,
 "remove_stars":remove_stars,
 "__ocaml_lex_tables":__ocaml_lex_tables,
 "main":main,
 "__ocaml_lex_main_rec":__ocaml_lex_main_rec,
 "special_comment":special_comment,
 "__ocaml_lex_special_comment_rec":__ocaml_lex_special_comment_rec,
 "special_comment_part2":special_comment_part2,
 "__ocaml_lex_special_comment_part2_rec":__ocaml_lex_special_comment_part2_rec,
 "elements":elements,
 "__ocaml_lex_elements_rec":__ocaml_lex_elements_rec,
 "simple":simple,
 "__ocaml_lex_simple_rec":__ocaml_lex_simple_rec};
