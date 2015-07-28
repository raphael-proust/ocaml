var List=require("List");
var Printf=require("Printf");
var Glob_ast=require("Glob_ast");
var Buffer=require("Buffer");
var Lexing=require("Lexing");
var sf=Printf["sprintf"];
var
 concat_patterns=
  function(p1,p2)
   {var $js="unknown primitive:isint";
    if($js)
     {return p2}
    else
     {var $js$1="unknown primitive:isint";
      if($js$1){return p1}else{return [2,p1,p2]}}};
var slash=[1,[3,[0,47,47]]];
var not_slash=[1,[2,[3,[0,47,47]]]];
var any=[1,0];
var
 __ocaml_lex_tables=
  [0,
   "\0\0õÿ\x05\0÷ÿøÿùÿ\x01\0úÿ\0\0ûÿ\x01\0\x01\0üÿ\0\0\x01\0ýÿ\x03\0\x03\0þÿÿÿ\0\0\0\0\x01\0\0\0\x01\0\0\0\0\0\x04\0\x02\0S\0ôÿõÿ\0\0\x01\0\0\0þÿ¢\0ýÿ\x02\0\0\0ûÿ\x03\0ùÿ\x1d\0\x1e\0\x01\0ÿÿþÿ0\0\0\0\x06\0\x01\0\x02\0ýÿþÿ",
   "ÿÿÿÿ\t\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\b\0\t\0\x03\0ÿÿ\0\0ÿÿÿÿ\x05\0ÿÿ\x07\0ÿÿÿÿ\x02\0\x03\0ÿÿÿÿÿÿ\x03\0\x03\0\0\0ÿÿÿÿÿÿ",
   "ÿÿ\0\0ÿÿ\0\0\0\0\0\0ÿÿ\0\0ÿÿ\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0ÿÿÿÿ\0\0\0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1e\0\0\0\0\0ÿÿÿÿÿÿ\0\0ÿÿ\0\0ÿÿÿÿ\0\0ÿÿ\0\0,\0,\0ÿÿ\0\0\0\x001\0ÿÿÿÿÿÿ5\0\0\0\0\0",
   "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\x02\0\0\0\x02\0\x02\0\x02\0\x02\0\0\0\x02\0\x02\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x02\0\0\0\x12\0/\0\0\0\x02\0\x0f\0\0\0\x04\0\x03\0)\0&\0'\x004\x004\0(\0\x05\0\x07\0*\x004\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x13\0\0\0\0\0.\0ÿÿ\x10\0\0\0\0\0\x0f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\n\0\r\0\x17\0\x15\0\f\0\0\0\t\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x002\0%\0\0\0\0\0\x11\0\x1a\x006\0\x0f\0\x07\0\x06\0\x05\0\0\0\0\0\0\0\0\0\x1b\0\0\0\x0b\0\x0e\0\x16\0\x14\0\x18\0\f\0\b\0\t\0\x19\0\x1c\0\0\0-\0ÿÿ\0\0\f\0 \0\t\0\0\0$\0$\0!\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\x003\0\0\0\0\0\0\0\0\0\x1f\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\"\0\0\0\0\0\0\0$\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0#\0$\0$\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0\0\0\0\0\0\0\x01\0$\0ÿÿ$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0ÿÿÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0ÿÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0",
   "ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0ÿÿ\0\0\0\0\x02\0\x02\0ÿÿ\x02\0\x02\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿ\0\0-\0ÿÿ\x02\0\0\0ÿÿ\0\0\0\0 \0!\0&\x001\x003\0'\0\0\0\0\0)\x002\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0ÿÿÿÿ+\0,\0\0\0ÿÿÿÿ\x15\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\0\0\0\0\n\0\x10\0\r\0ÿÿ\x17\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ0\0\"\0ÿÿÿÿ\0\0\x06\x002\0\x14\0\x19\0\0\0\x1c\0ÿÿÿÿÿÿÿÿ\x1a\0ÿÿ\0\0\0\0\x0b\0\x11\0\b\0\x0e\0\0\0\x16\0\x18\0\x1b\0ÿÿ+\0,\0ÿÿ\0\0\x1d\0\0\0ÿÿ\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\x000\0ÿÿÿÿÿÿÿÿ\x1d\0ÿÿ\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0ÿÿÿÿÿÿ\x1d\0ÿÿ\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0\x1d\0$\0$\0ÿÿ$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿ$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0ÿÿÿÿÿÿ\0\0$\x004\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0$\0+\0,\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ0\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x1d\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ",
   "",
   "",
   "",
   "",
   "",
   ""];
var token=function(lexbuf){return __ocaml_lex_token_rec(lexbuf,0)};
var
 __ocaml_lex_token_rec=
  function(lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=10<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_token_rec(lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var match=parse_pattern([0,62,0],0,lexbuf);
        var $js$5=match[1];
        var $js$6=[1,$js$5];
        return [0,$js$6]}
      else
       if($js$4==1)
        {var $js$7=Buffer["create"];
         var $js$8=$js$7(32);
         var $js$9=parse_string($js$8,lexbuf);
         var $js$10=[0,$js$9];
         return [0,$js$10]}
       else
        if($js$4==2)
         {return 0}
        else
         if($js$4==3)
          {return 1}
         else
          if($js$4==4)
           {return 2}
          else
           if($js$4==5)
            {return 5}
           else
            if($js$4==6)
             {return 6}
            else
             if($js$4==7)
              {return 3}
             else
              if($js$4==8)
               {return 4}
              else
               if($js$4==9){return token(lexbuf)}else if($js$4==10){return 7}}};
var
 parse_pattern=
  function(eof_chars,p,lexbuf)
   {return __ocaml_lex_parse_pattern_rec(eof_chars,p,lexbuf,29)};
var
 __ocaml_lex_parse_pattern_rec=
  function(eof_chars,p,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=11<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_pattern_rec
              (eof_chars,p,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Lexing["sub_lexeme"];
        var u=$js$5(lexbuf,lexbuf[5],lexbuf[6]);
        var $js$6=concat_patterns(p,[4,u]);
        return parse_pattern(eof_chars,$js$6,lexbuf)}
      else
       if($js$4==1)
        {var
          loop=
           function(pl)
            {var match=parse_pattern([0,125,[0,44,0]],0,lexbuf);
             var pl$1=[0,match[1],pl];
             var $js$7=match[2]=44;
             if($js$7)
              {return loop(pl$1)}
             else
              {var $js$8=concat_patterns(p,[3,pl$1]);
               return parse_pattern(eof_chars,$js$8,lexbuf)}};
         return loop(0)}
       else
        if($js$4==2)
         {var $js$7=parse_class(0,lexbuf);
          var $js$8=[1,$js$7];
          var cl=[2,$js$8];
          var $js$9=concat_patterns(p,[1,cl]);
          return parse_pattern(eof_chars,$js$9,lexbuf)}
        else
         if($js$4==3)
          {var $js$10=parse_class(0,lexbuf);
           var cl$1=[1,$js$10];
           var $js$11=concat_patterns(p,[1,cl$1]);
           return parse_pattern(eof_chars,$js$11,lexbuf)}
         else
          if($js$4==4)
           {var q=[3,[0,slash,[0,[2,slash,[2,[0,any],slash]],0]]];
            var $js$12=concat_patterns(p,q);
            return parse_pattern(eof_chars,$js$12,lexbuf)}
          else
           if($js$4==5)
            {var q$1=[3,[0,0,[0,[2,slash,[0,any]],0]]];
             var $js$13=concat_patterns(p,q$1);
             return parse_pattern(eof_chars,$js$13,lexbuf)}
           else
            if($js$4==6)
             {var q$2=[3,[0,0,[0,[2,[0,any],slash],0]]];
              var $js$14=concat_patterns(p,q$2);
              return parse_pattern(eof_chars,$js$14,lexbuf)}
            else
             if($js$4==7)
              {return "unknown primitive:raise"}
             else
              if($js$4==8)
               {var $js$15=concat_patterns(p,[0,not_slash]);
                return parse_pattern(eof_chars,$js$15,lexbuf)}
              else
               if($js$4==9)
                {var $js$16=concat_patterns(p,slash);
                 return parse_pattern(eof_chars,$js$16,lexbuf)}
               else
                if($js$4==10)
                 {var $js$17=concat_patterns(p,not_slash);
                  return parse_pattern(eof_chars,$js$17,lexbuf)}
                else
                 if($js$4==11)
                  {var $js$18=Lexing["sub_lexeme_char"];
                   var c=$js$18(lexbuf,lexbuf[5]);
                   var $js$19=List["mem"];
                   var $js$20=$js$19(c,eof_chars);
                   if($js$20)
                    {return [0,p,c]}
                   else
                    {var
                      $js$21=
                       sf
                        ([0,
                          [11,"Unexpected character ",[1,[11," in glob pattern",0]]],
                          "Unexpected character %C in glob pattern"],
                         c);
                     var $js$22=[0,Glob_ast["Parse_error"],$js$21];
                     throw $js$22}}}};
var
 parse_string=
  function(b,lexbuf){return __ocaml_lex_parse_string_rec(b,lexbuf,43)};
var
 __ocaml_lex_parse_string_rec=
  function(b,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=3<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_string_rec(b,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Buffer["contents"];return $js$5(b)}
      else
       if($js$4==1)
        {var $js$6=Buffer["add_char"];
         $js$6(b,34);
         return parse_string(b,lexbuf)}
       else
        if($js$4==2)
         {var $js$7=Lexing["sub_lexeme"];
          var u=$js$7(lexbuf,lexbuf[5],lexbuf[6]);
          var $js$8=Buffer["add_string"];
          $js$8(b,u);
          return parse_string(b,lexbuf)}
        else
         if($js$4==3)
          {var $js$9=Lexing["sub_lexeme_char"];
           var c=$js$9(lexbuf,lexbuf[5]);
           var
            $js$10=
             sf
              ([0,
                [11,"Unexpected character ",[1,[11," in string",0]]],
                "Unexpected character %C in string"],
               c);
           var $js$11=[0,Glob_ast["Parse_error"],$js$10];
           throw $js$11}}};
var
 parse_class=
  function(cl,lexbuf){return __ocaml_lex_parse_class_rec(cl,lexbuf,48)};
var
 __ocaml_lex_parse_class_rec=
  function(cl,lexbuf,__ocaml_lex_state)
   {var $js=Lexing["engine"];
    var __ocaml_lex_state$1=$js(__ocaml_lex_tables,__ocaml_lex_state,lexbuf);
    var $js$1=3<__ocaml_lex_state$1>>>0;
    if($js$1)
     {var $js$2=lexbuf[1];
      $js$2(lexbuf);
      return __ocaml_lex_parse_class_rec(cl,lexbuf,__ocaml_lex_state$1)}
    else
     {var $js$3=__ocaml_lex_state$1;
      var $js$4=$js$3[0];
      if($js$4==0)
       {return cl}
      else
       if($js$4==1)
        {return [0,[3,[0,45,45]],cl]}
       else
        if($js$4==2)
         {var $js$5=Lexing["sub_lexeme_char"];
          var c1=$js$5(lexbuf,lexbuf[5]);
          var $js$6=Lexing["sub_lexeme_char"];
          var c2=$js$6(lexbuf,lexbuf[5]+2);
          return parse_class([0,[3,[0,c1,c2]],cl],lexbuf)}
        else
         if($js$4==3)
          {var $js$7=Lexing["sub_lexeme_char"];
           var c=$js$7(lexbuf,lexbuf[5]);
           return parse_class([0,[3,[0,c,c]],cl],lexbuf)}}};
module["exports"]={"token":token};
