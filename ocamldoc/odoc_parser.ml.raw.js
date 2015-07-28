var String=require("String");
var Pervasives=require("Pervasives");
var Parsing=require("Parsing");
var Odoc_comments_global=require("Odoc_comments_global");
var Str=require("Str");
var uppercase="[A-ZÀ-ÖØ-Þ]";
var identchar="[A-Za-z_À-ÖØ-öø-ÿ'0-9]";
var blank="[ \n\r\t\f]";
var yytransl_const="unknown primitive:caml_obj_dup";
var yytransl_block="unknown primitive:caml_obj_dup";
var
 yylhs=
  "ÿÿ\x03\0\x04\0\x04\0\x04\0\x01\0\x01\0\x02\0\x05\0\x05\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x06\0\x07\0\b\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\0\0\0\0\0\0";
var
 yylen=
  "\x02\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x02\0\x01\0\x02\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x01\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0\x02\0";
var
 yydefred=
  "\0\0\0\0\0\0\0\0\0\0\x05\0\x06\0\x1e\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1f\0\0\0\0\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x12\0\x13\0\x02\0\x03\0\x04\0 \0\0\0\x14\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x07\0\t\0\x01\0";
var
 yydgoto=
  '\x04\0\x07\0\x12\0"\0#\0\x13\0\x14\0\x15\0\x16\0\x17\0\x18\0\x19\0\x1a\0\x1b\0\x1c\0\x1d\0\x1e\0';
var
 yysindex=
  "\x0b\0\x01\0ýþ\rÿ\0\0\0\0\0\0\0\0ñþ\x03ÿ\x04ÿ\x05ÿ\x06ÿ\x07ÿ\bÿ\tÿ\nÿ\x0bÿ\0\0\x1b\0ýþ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x0eÿ\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
var
 yyrindex=
  "\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x1c\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
var
 yygindex=
  "\0\0\0\0\0\0\0\0\0\0\n\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0";
var yytablesize=258;
var
 yytable=
  "$\0\x06\0\b\0\t\0\n\0\x0b\0\f\0\r\0\x0e\0\x0f\0\x10\0\x11\0\x01\0\x02\0\x03\0\x1f\0 \0!\0%\0&\0'\0(\0)\0*\0+\0,\0-\0.\0\b\x000\0/\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x05\0";
var
 yycheck=
  "\x0f\x01\0\0\x05\x01\x06\x01\x07\x01\b\x01\t\x01\n\x01\x0b\x01\f\x01\r\x01\x0e\x01\x01\0\x02\0\x03\0\x02\x01\x03\x01\x04\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\x0f\x01\0\0\0\0\x0f\x01\x14\0ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ\x01\x01";
var
 yynames_const=
  "T_PARAM\0T_AUTHOR\0T_VERSION\0T_SEE\0T_SINCE\0T_BEFORE\0T_DEPRECATED\0T_RAISES\0T_RETURN\0EOF\0";
var yynames_block="Description\0See_url\0See_file\0See_doc\0T_CUSTOM\0Desc\0";
var
 yyact=
  [function(param){var $js=Pervasives["failwith"];return $js("parser")},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return [0,_1,_2]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [1,_1]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [2,_1]},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,0);
     return [0,_1]},
   function(__caml_parser_env){return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,1);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];var _1=$js(__caml_parser_env,0);return 0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     var $js$1=Str["split"];
     var $js$2=Str["regexp"];
     var $js$3=Pervasives["^"];
     var $js$4=$js$3(blank,"+");
     var $js$5=$js$2($js$4);
     var match=$js$1($js$5,_2);
     var $js$6=match;
     if($js$6)
      {var id=match[1];
       var $js$7=match[2];
       if($js$7)
        {var $js$8=Pervasives["^"];
         var reg=$js$8(identchar,"+");
         var $js$9=Str["string_match"];
         var $js$10=Str["regexp"];
         var $js$11=$js$10(reg);
         var $js$12=$js$9($js$11,id,0);
         if($js$12)
          {var $js$13=String["sub"];
           var remain=$js$13(_2,id["length"],_2["length"]-id["length"]);
           var $js$14=Str["replace_first"];
           var $js$15=Str["regexp"];
           var $js$16=Pervasives["^"];
           var $js$17=Pervasives["^"];
           var $js$18=$js$17(blank,"+");
           var $js$19=$js$16("^",$js$18);
           var $js$20=$js$15($js$19);
           var remain2=$js$14($js$20,"",remain);
           var $js$21=Pervasives["@"];
           var
            $js$22=
             $js$21(Odoc_comments_global["params"][1],[0,[0,id,remain2],0]);
           var $js$23=(Odoc_comments_global["params"][1]=$js$22,0)}
         else
          {var $js$24=Pervasives["^"];
           var $js$25=Pervasives["^"];
           var $js$26=Pervasives["^"];
           var $js$27=$js$26(_2,'"');
           var
            $js$28=
             $js$25
              (' is not a valid parameter identificator in "@param ',$js$27);
           var $js$29=$js$24(id,$js$28);
           var $js$30=[0,Failure,$js$29];
           throw $js$30}}
       else
        {var exit=28}}
     else
      {var exit=28}
     switch(exit){case 28:var $js$23="unknown primitive:raise"}
     return $js$23},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     var $js$1=Pervasives["@"];
     var $js$2=$js$1(Odoc_comments_global["authors"][1],[0,_2,0]);
     var $js$3=(Odoc_comments_global["authors"][1]=$js$2,0);
     return $js$3},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     return Odoc_comments_global["version"][1]=[0,_2],0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     var $js$1=Pervasives["@"];
     var $js$2=$js$1(Odoc_comments_global["sees"][1],[0,_2,0]);
     var $js$3=(Odoc_comments_global["sees"][1]=$js$2,0);
     return $js$3},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     return Odoc_comments_global["since"][1]=[0,_2],0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     var $js$1=Str["split"];
     var $js$2=Str["regexp"];
     var $js$3=Pervasives["^"];
     var $js$4=$js$3(blank,"+");
     var $js$5=$js$2($js$4);
     var match=$js$1($js$5,_2);
     var $js$6=match;
     if($js$6)
      {var id=match[1];
       var $js$7=match[2];
       if($js$7)
        {var $js$8=String["sub"];
         var remain=$js$8(_2,id["length"],_2["length"]-id["length"]);
         var $js$9=Str["replace_first"];
         var $js$10=Str["regexp"];
         var $js$11=Pervasives["^"];
         var $js$12=Pervasives["^"];
         var $js$13=$js$12(blank,"+");
         var $js$14=$js$11("^",$js$13);
         var $js$15=$js$10($js$14);
         var remain2=$js$9($js$15,"",remain);
         var $js$16=Pervasives["@"];
         var
          $js$17=
           $js$16(Odoc_comments_global["before"][1],[0,[0,id,remain2],0]);
         var $js$18=(Odoc_comments_global["before"][1]=$js$17,0)}
       else
        {var exit=38}}
     else
      {var exit=38}
     switch(exit){case 38:var $js$18="unknown primitive:raise"}
     return $js$18},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     return Odoc_comments_global["deprecated"][1]=[0,_2],0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     var $js$1=Str["split"];
     var $js$2=Str["regexp"];
     var $js$3=Pervasives["^"];
     var $js$4=$js$3(blank,"+");
     var $js$5=$js$2($js$4);
     var match=$js$1($js$5,_2);
     var $js$6=match;
     if($js$6)
      {var id=match[1];
       var $js$7=match[2];
       if($js$7)
        {var $js$8=Pervasives["^"];
         var $js$9=Pervasives["^"];
         var $js$10=Pervasives["^"];
         var $js$11=Pervasives["^"];
         var $js$12=Pervasives["^"];
         var $js$13=Pervasives["^"];
         var $js$14=$js$13(identchar,"*\)*");
         var $js$15=$js$12(uppercase,$js$14);
         var $js$16=$js$11("\(\.",$js$15);
         var $js$17=$js$10("*",$js$16);
         var $js$18=$js$9(identchar,$js$17);
         var reg=$js$8(uppercase,$js$18);
         var $js$19=Str["string_match"];
         var $js$20=Str["regexp"];
         var $js$21=$js$20(reg);
         var $js$22=$js$19($js$21,id,0);
         if($js$22)
          {var $js$23=String["sub"];
           var remain=$js$23(_2,id["length"],_2["length"]-id["length"]);
           var $js$24=Str["replace_first"];
           var $js$25=Str["regexp"];
           var $js$26=Pervasives["^"];
           var $js$27=Pervasives["^"];
           var $js$28=$js$27(blank,"+");
           var $js$29=$js$26("^",$js$28);
           var $js$30=$js$25($js$29);
           var remain2=$js$24($js$30,"",remain);
           var $js$31=Pervasives["@"];
           var
            $js$32=
             $js$31
              (Odoc_comments_global["raised_exceptions"][1],
               [0,[0,id,remain2],0]);
           var $js$33=(Odoc_comments_global["raised_exceptions"][1]=$js$32,0)}
         else
          {var $js$34=Pervasives["^"];
           var $js$35=Pervasives["^"];
           var $js$36=Pervasives["^"];
           var $js$37=$js$36(_2,'"');
           var
            $js$38=
             $js$35
              (' is not a valid exception constructor in "@raise ',$js$37);
           var $js$39=$js$34(id,$js$38);
           var $js$40=[0,Failure,$js$39];
           throw $js$40}}
       else
        {var exit=46}}
     else
      {var exit=46}
     switch(exit){case 46:var $js$33="unknown primitive:raise"}
     return $js$33},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _2=$js(__caml_parser_env,0);
     return Odoc_comments_global["return_value"][1]=[0,_2],0},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var _1=$js(__caml_parser_env,1);
     var $js$1=Parsing["peek_val"];
     var _2=$js$1(__caml_parser_env,0);
     var $js$2=Pervasives["@"];
     var $js$3=$js$2(Odoc_comments_global["customs"][1],[0,[0,_1,_2],0]);
     var $js$4=(Odoc_comments_global["customs"][1]=$js$3,0);
     return $js$4},
   function(__caml_parser_env)
    {var $js=Parsing["peek_val"];
     var $js$1=$js(__caml_parser_env,0);
     var $js$2=[0,Parsing["YYexit"],$js$1];
     throw $js$2},
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
 info_part2=
  function(lexfun,lexbuf)
   {var $js=Parsing["yyparse"];return $js(yytables,2,lexfun,lexbuf)};
var
 see_info=
  function(lexfun,lexbuf)
   {var $js=Parsing["yyparse"];return $js(yytables,3,lexfun,lexbuf)};
module["exports"]={"main":main,"info_part2":info_part2,"see_info":see_info};
