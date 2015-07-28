var String=require("String");
var Odoc_global=require("Odoc_global");
var Odoc_cross=require("Odoc_cross");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_types=require("Odoc_types");
var Printf=require("Printf");
var Odoc_merge=require("Odoc_merge");
var Odoc_see_lexer=require("Odoc_see_lexer");
var Lexing=require("Lexing");
var Odoc_comments_global=require("Odoc_comments_global");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var Odoc_lexer=require("Odoc_lexer");
var Odoc_text=require("Odoc_text");
var Odoc_parser=require("Odoc_parser");
var Odoc_messages=require("Odoc_messages");
var simple_blank="[ \r\t\f]";
var
 Info_retriever=
  function(MyTexter)
   {var
     create_see=
      function(s)
       {try
         {var $js=Lexing["from_string"];
          var lexbuf=$js(s);
          var $js$1=Odoc_parser["see_info"];
          var match=$js$1(Odoc_see_lexer["main"],lexbuf);
          var $js$2=MyTexter[1];
          var $js$3=$js$2(match[2]);
          return [0,match[1],$js$3]}
        catch(exn)
         {var $js$4=exn[1]=Odoc_text["Text_syntax"];
          if($js$4)
           {var $js$5=Odoc_messages["text_parse_error"];
            var $js$6=$js$5(exn[2],exn[3],exn[4]);
            var $js$7=[0,Failure,$js$6];
            throw $js$7}
          else
           {var $js$8=Pervasives["^"];
            var $js$9=$js$8("Unknown error while parsing @see tag: ",s);
            var $js$10=[0,Failure,$js$9];
            throw $js$10}}};
    var
     retrieve_info=
      function(fun_lex,file,s)
       {try
         {var $js=Odoc_comments_global["init"];
          var match=$js(0);
          Odoc_lexer["comments_level"][1]=0,0;
          var $js$1=Lexing["from_string"];
          var lexbuf=$js$1(s);
          var $js$2=Odoc_parser["main"];
          var match$1=$js$2(fun_lex,lexbuf);
          var $js$3=match$1;
          if($js$3)
           {var match$2=match$1[1];
            var remain_opt=match$2[2];
            var desc=match$2[1];
            var mem_nb_chars=Odoc_comments_global["nb_chars"][1];
            var $js$4=remain_opt;
            if($js$4)
             {var $js$5=Lexing["from_string"];
              var lexbuf2=$js$5(remain_opt[1]);
              var $js$6=Odoc_parser["info_part2"];
              var match$3=$js$6(Odoc_lexer["elements"],lexbuf2)}
            else
             {var match$3=0}
            var $js$7=desc;
            if($js$7=="")
             {var $js$8=0}
            else
             {var $js$9=MyTexter[1];
              var $js$10=$js$9(desc);
              var $js$8=[0,$js$10]}
            var $js$11=List["map"];
            var $js$12=$js$11(create_see,Odoc_comments_global["sees"][1]);
            var $js$13=Odoc_merge["merge_before_tags"];
            var $js$14=List["map"];
            var
             $js$15=
              $js$14
               (function(param)
                 {var $js$16=MyTexter[1];
                  var $js$17=$js$16(param[2]);
                  return [0,param[1],$js$17]},
                Odoc_comments_global["before"][1]);
            var $js$16=$js$13($js$15);
            var match$4=Odoc_comments_global["deprecated"][1];
            var $js$17=match$4;
            if($js$17)
             {var $js$18=MyTexter[1];
              var $js$19=$js$18(match$4[1]);
              var $js$20=[0,$js$19]}
            else
             {var $js$20=0}
            var $js$21=List["map"];
            var
             $js$22=
              $js$21
               (function(param)
                 {var $js$23=MyTexter[1];
                  var $js$24=$js$23(param[2]);
                  return [0,param[1],$js$24]},
                Odoc_comments_global["params"][1]);
            var $js$23=List["map"];
            var
             $js$24=
              $js$23
               (function(param)
                 {var $js$25=MyTexter[1];
                  var $js$26=$js$25(param[2]);
                  return [0,param[1],$js$26]},
                Odoc_comments_global["raised_exceptions"][1]);
            var match$5=Odoc_comments_global["return_value"][1];
            var $js$25=match$5;
            if($js$25)
             {var $js$26=MyTexter[1];
              var $js$27=$js$26(match$5[1]);
              var $js$28=[0,$js$27]}
            else
             {var $js$28=0}
            var $js$29=List["map"];
            var
             $js$30=
              $js$29
               (function(param)
                 {var $js$31=MyTexter[1];
                  var $js$32=$js$31(param[2]);
                  return [0,param[1],$js$32]},
                Odoc_comments_global["customs"][1]);
            var
             $js$31=
              [0,
               $js$8,
               Odoc_comments_global["authors"][1],
               Odoc_comments_global["version"][1],
               $js$12,
               Odoc_comments_global["since"][1],
               $js$16,
               $js$20,
               $js$22,
               $js$24,
               $js$28,
               $js$30];
            var $js$32=[0,$js$31];
            return [0,mem_nb_chars,$js$32]}
          else
           {return [0,0,0]}}
        catch(exn)
         {var $js$33=exn[1]=Failure;
          if($js$33)
           {Odoc_global["errors"][0]++;
            var $js$34=Printf["eprintf"];
            $js$34
             ([0,
               [11,
                "File ",
                [3,0,[11,", line ",[4,0,0,0,[11,":\n",[2,0,[12,10,[10,0]]]]]]]],
               "File %S, line %d:\n%s\n%!"],
              file,
              Odoc_lexer["line_number"][1]+1,
              exn[2]);
            return [0,0,0]}
          else
           {var $js$35=exn[1]=Odoc_text["Text_syntax"];
            if($js$35)
             {Odoc_global["errors"][0]++;
              var $js$36=Pervasives["prerr_endline"];
              var $js$37=Pervasives["^"];
              var $js$38=Pervasives["^"];
              var $js$39=Odoc_messages["text_parse_error"];
              var $js$40=$js$39(exn[2],exn[3],exn[4]);
              var $js$41=$js$38(" : ",$js$40);
              var $js$42=$js$37(file,$js$41);
              $js$36($js$42);
              return [0,0,0]}
            else
             {Odoc_global["errors"][0]++;
              var $js$43=Pervasives["prerr_endline"];
              var $js$44=Pervasives["^"];
              var $js$45=Pervasives["^"];
              var $js$46=Pervasives["^"];
              var $js$47=$js$46(Odoc_messages["parse_error"],"\n");
              var $js$48=$js$45(" : ",$js$47);
              var $js$49=$js$44(file,$js$48);
              $js$43($js$49);
              return [0,0,0]}}}};
    var
     nothing_before_simple_comment=
      function(s)
       {try
         {var $js=Str["search_forward"];
          var $js$1=Str["regexp"];
          var $js$2=$js$1("(\*");
          var pos=$js($js$2,s,0);
          var $js$3=s["length"]>=pos+1;
          if($js$3){var next_char=s[pos+2]}else{var next_char=95}
          var $js$4=String["sub"];
          var s2=$js$4(s,0,pos);
          try
           {var $js$5=Str["search_forward"];
            var $js$6=Str["regexp"];
            var $js$7=Pervasives["^"];
            var $js$8=Pervasives["^"];
            var $js$9=$js$8(simple_blank,"*['\n']");
            var $js$10=$js$7("['\n']",$js$9);
            var $js$11=$js$6($js$10);
            var match=$js$5($js$11,s2,0);
            var $js$12=0}
          catch(exn)
           {var $js$13=exn=Not_found;
            if($js$13)
             {var $js$12=1}
            else
             {var $js$12="unknown primitive:reraise"}}
          return next_char!=42&&$js$12}
        catch(exn$1)
         {var $js$14=exn$1=Not_found;
          if($js$14){return 0}else{return "unknown primitive:reraise"}}};
    var
     blank_line=
      function(s)
       {try
         {var $js=Str["search_forward"];
          var $js$1=Str["regexp"];
          var $js$2=Pervasives["^"];
          var $js$3=Pervasives["^"];
          var $js$4=$js$3(simple_blank,"*['\n']");
          var $js$5=$js$2("['\n']",$js$4);
          var $js$6=$js$1($js$5);
          var match=$js($js$6,s,0);
          return 1}
        catch(exn)
         {var $js$7=exn=Not_found;
          if($js$7){return 0}else{return "unknown primitive:reraise"}}};
    var
     retrieve_info_special=
      function(file,s){return retrieve_info(Odoc_lexer["main"],file,s)};
    var
     retrieve_info_simple=
      function(file,s)
       {var $js=Odoc_comments_global["init"];
        var match=$js(0);
        Odoc_lexer["comments_level"][1]=0,0;
        var $js$1=Lexing["from_string"];
        var lexbuf=$js$1(s);
        var $js$2=Odoc_parser["main"];
        var match$1=$js$2(Odoc_lexer["simple"],lexbuf);
        var $js$3=match$1;
        if($js$3)
         {return [0,
                  Odoc_comments_global["nb_chars"][1],
                  [0,Odoc_types["dummy_info"]]]}
        else
         {return [0,0,0]}};
    var
     blank_line_outside_simple=
      function(file,s)
       {var
         iter=
          function(s2)
           {var match=retrieve_info_simple(file,s2);
            var len=match[1];
            var $js=match[2];
            if($js)
             {try
               {var $js$1=Str["search_forward"];
                var $js$2=Str["regexp_string"];
                var $js$3=$js$2("(*");
                var pos=$js$1($js$3,s2,0);
                var $js$4=String["sub"];
                var s_before=$js$4(s2,0,pos);
                var $js$5=String["sub"];
                var s_after=$js$5(s2,len,s2["length"]-len);
                var $js$6=blank_line(s_before);
                var $js$7=iter(s_after);
                return $js$6||$js$7}
              catch(exn)
               {var $js$8=exn=Not_found;
                if($js$8){return 0}else{return "unknown primitive:reraise"}}}
            else
             {return blank_line(s2)}};
        return iter(s)};
    var
     retrieve_first_info_simple=
      function(*opt*,file,s)
       {var $js=*opt*;
        if($js){var strict=*opt*[1]}else{var strict=1}
        var match=retrieve_info_simple(file,s);
        var match$1=match[2];
        var $js$1=match$1;
        if($js$1)
         {var $js$2=nothing_before_simple_comment(s);
          var $js$3=!strict||$js$2;
          if($js$3){return [0,match[1],[0,match$1[1]]]}else{return [0,0,0]}}
        else
         {return [0,0,0]}};
    var
     retrieve_last_info_simple=
      function(file,s)
       {var
         f=
          function(cur_len,cur_d)
           {try
             {var $js=String["sub"];
              var s2=$js(s,cur_len,s["length"]-cur_len);
              var match=retrieve_info_simple(file,s2);
              var match$1=match[2];
              var len=match[1];
              var $js$1=match$1;
              if($js$1)
               {return f(len+cur_len,[0,match$1[1]])}
              else
               {return [0,cur_len+len,cur_d]}}
            catch(exn){return [0,cur_len,cur_d]}};
        return f(0,0)};
    var
     retrieve_last_special_no_blank_after=
      function(file,s)
       {var
         f=
          function(cur_len,cur_d)
           {try
             {var $js=String["sub"];
              var s2=$js(s,cur_len,s["length"]-cur_len);
              var match=retrieve_info_special(file,s2);
              var match$1=match[2];
              var len=match[1];
              var $js$1=match$1;
              if($js$1)
               {return f(len+cur_len,[0,match$1[1]])}
              else
               {return [0,cur_len+len,cur_d]}}
            catch(exn){return [0,cur_len,cur_d]}};
        return f(0,0)};
    var
     all_special=
      function(file,s)
       {var
         iter=
          function(acc,n,s2)
           {var match=retrieve_info_special(file,s2);
            var match$1=match[2];
            var $js=match$1;
            if($js)
             {var n2=match[1];
              var $js$1=String["sub"];
              var new_s=$js$1(s2,n2,s2["length"]-n2);
              var $js$2=Pervasives["@"];
              var $js$3=$js$2(acc,[0,match$1[1],0]);
              return iter($js$3,n+n2,new_s)}
            else
             {return [0,n,acc]}};
        return iter(0,0,s)};
    var
     just_after_special=
      function(file,s)
       {var match=retrieve_info_special(file,s);
        var match$1=match[2];
        var $js=match$1;
        if($js)
         {var d=match$1[1];
          var len=match[1];
          var $js$1=String["sub"];
          var $js$2=$js$1(s,0,len);
          var match$2=retrieve_info_simple(file,$js$2);
          var $js$3=match$2[2];
          if($js$3)
           {return [0,0,0]}
          else
           {try
             {var $js$4=Str["search_forward"];
              var $js$5=Str["regexp_string"];
              var $js$6=$js$5("(**");
              var pos=$js$4($js$6,s,0);
              var $js$7=String["sub"];
              var $js$8=$js$7(s,0,pos);
              var $js$9=blank_line($js$8);
              var $js$10=$js$9||"unknown primitive:caml_equal";
              if($js$10){return [0,0,0]}else{return [0,len,[0,d]]}}
            catch(exn)
             {var $js$11=exn=Not_found;
              if($js$11)
               {return [0,0,0]}
              else
               {return "unknown primitive:reraise"}}}}
        else
         {return [0,0,0]}};
    var first_special=function(file,s){return retrieve_info_special(file,s)};
    var
     get_comments=
      function(f_create_ele,file,s)
       {var match=all_special(file,s);
        var special_coms=match[2];
        var len=match[1];
        var $js=List["rev"];
        var match$1=$js(special_coms);
        var $js$1=match$1;
        if($js$1)
         {var h=match$1[1];
          var $js$2=String["sub"];
          var $js$3=$js$2(s,len,s["length"]-len);
          var $js$4=blank_line_outside_simple(file,$js$3);
          var $js$5=$js$4||"unknown primitive:caml_equal";
          if($js$5)
           {var match$2=[0,0,special_coms]}
          else
           {var $js$6=List["rev"];
            var $js$7=$js$6(match$1[2]);
            var match$2=[0,[0,h],$js$7]}}
        else
         {var match$2=[0,0,0]}
        var $js$8=List["fold_left"];
        var
         ele_comments=
          $js$8
           (function(acc,sc)
             {var match$3=sc[1];
              var $js$9=match$3;
              if($js$9)
               {var $js$10=Pervasives["@"];
                var $js$11=f_create_ele(match$3[1]);
                var $js$12=[0,$js$11,0];
                return $js$10(acc,$js$12)}
              else
               {return acc}},
            0,
            match$2[2]);
        return [0,match$2[1],ele_comments]};
    return [0,
            create_see,
            retrieve_info,
            nothing_before_simple_comment,
            blank_line,
            retrieve_info_special,
            retrieve_info_simple,
            blank_line_outside_simple,
            retrieve_first_info_simple,
            retrieve_last_info_simple,
            retrieve_last_special_no_blank_after,
            all_special,
            just_after_special,
            first_special,
            get_comments]};
var let=Odoc_text["Texter"];
var $js=[0,let[1]];
var Basic_info_retriever=Info_retriever($js);
var
 info_of_string=
  function(s)
   {var dummy=[0,0,0,0,0,0,0,0,0,0,0,0];
    var $js$1=Printf["sprintf"];
    var s2=$js$1([0,[11,"(** ",[2,0,[11," *)",0]]],"(** %s *)"],s);
    var $js$2=Basic_info_retriever[13];
    var match=$js$2("-",s2);
    var i_opt=match[2];
    var $js$3=i_opt;
    if($js$3){return i_opt[1]}else{return dummy}};
var
 info_of_comment_file=
  function(modlist,f)
   {try
     {var $js$1=Odoc_misc["input_file_as_string"];
      var s=$js$1(f);
      var i=info_of_string(s);
      var $js$2=Odoc_cross["assoc_comments_info"];
      return $js$2("",modlist,i)}
    catch(exn)
     {var $js$3=exn[1]=Sys_error;
      if($js$3)
       {var $js$4=Pervasives["failwith"];return $js$4(exn[2])}
      else
       {return "unknown primitive:reraise"}}};
module["exports"]=
{"simple_blank":simple_blank,
 "unknown block:(makeblock 0 (field 6 Basic_info_retriever/1151)\n  (field 10 Basic_info_retriever/1151) (field 11 Basic_info_retriever/1151)\n  (field 12 Basic_info_retriever/1151) (field 13 Basic_info_retriever/1151))":
 unknown block:(makeblock 0 (field 6 Basic_info_retriever/1151)
  (field 10 Basic_info_retriever/1151) (field 11 Basic_info_retriever/1151)
  (field 12 Basic_info_retriever/1151) (field 13 Basic_info_retriever/1151)),
 "info_of_string":info_of_string,
 "info_of_comment_file":info_of_comment_file};
