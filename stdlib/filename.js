var $$String=require("String");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Random=require("Random");
var Buffer=require("Buffer");
var CamlinternalLazy=require("CamlinternalLazy");
var Sys=require("Sys");
var
 generic_quote=
  function(quotequote,s)
   {var l=s["length"];
    var $js=Buffer["create"];
    var b=$js(l+20);
    var $js$1=Buffer["add_char"];
    $js$1(b,39);
    var $js$2=0;
    var $js$3=l-1;
    for(var i=$js$2;i<=$js$3;i++)
     {var $js$4=s[i];
      var $js$5=$js$4=39;
      if($js$5)
       {var $js$6=Buffer["add_string"];$js$6(b,quotequote)}
      else
       {var $js$7=Buffer["add_char"];var $js$8=s[i];$js$7(b,$js$8)}}
    var $js$9=Buffer["add_char"];
    $js$9(b,39);
    var $js$10=Buffer["contents"];
    return $js$10(b)};
var
 generic_basename=
  function(is_dir_sep,current_dir_name,name)
   {var
     find_end=
      function(n)
       {var $js=n<0;
        if($js)
         {var $js$1=$$String["sub"];return $js$1(name,0,1)}
        else
         {var $js$2=is_dir_sep(name,n);
          if($js$2){return find_end(n-1)}else{return find_beg(n,n+1)}}};
    var
     find_beg=
      function(n,p)
       {var $js=n<0;
        if($js)
         {var $js$1=$$String["sub"];return $js$1(name,0,p)}
        else
         {var $js$2=is_dir_sep(name,n);
          if($js$2)
           {var $js$3=$$String["sub"];return $js$3(name,n+1,p-n-1)}
          else
           {return find_beg(n-1,p)}}};
    var $js="unknown primitive:caml_string_equal";
    if($js){return current_dir_name}else{return find_end(name["length"]-1)}};
var
 generic_dirname=
  function(is_dir_sep,current_dir_name,name)
   {var
     trailing_sep=
      function(n)
       {var $js=n<0;
        if($js)
         {var $js$1=$$String["sub"];return $js$1(name,0,1)}
        else
         {var $js$2=is_dir_sep(name,n);
          if($js$2){return trailing_sep(n-1)}else{return base(n)}}};
    var
     base=
      function(n)
       {var $js=n<0;
        if($js)
         {return current_dir_name}
        else
         {var $js$1=is_dir_sep(name,n);
          if($js$1){return intermediate_sep(n)}else{return base(n-1)}}};
    var
     intermediate_sep=
      function(n)
       {var $js=n<0;
        if($js)
         {var $js$1=$$String["sub"];return $js$1(name,0,1)}
        else
         {var $js$2=is_dir_sep(name,n);
          if($js$2)
           {return intermediate_sep(n-1)}
          else
           {var $js$3=$$String["sub"];return $js$3(name,0,n+1)}}};
    var $js="unknown primitive:caml_string_equal";
    if($js)
     {return current_dir_name}
    else
     {return trailing_sep(name["length"]-1)}};
var current_dir_name=".";
var parent_dir_name="..";
var dir_sep="/";
var is_dir_sep=function(s,i){var $js=s[i];return $js=47};
var
 is_relative=
  function(n){var $js=n[0];var $js$1=$js!=47;return n["length"]<1||$js$1};
var
 is_implicit=
  function(n)
   {var $js=is_relative(n);
    var $js$1=$$String["sub"];
    var $js$2=$js$1(n,0,2);
    var $js$3="unknown primitive:caml_string_notequal";
    var $js$4=n["length"]<2||$js$3;
    var $js$5=$$String["sub"];
    var $js$6=$js$5(n,0,3);
    var $js$7="unknown primitive:caml_string_notequal";
    var $js$8=n["length"]<3||$js$7;
    var $js$9=$js$4&&$js$8;
    return $js&&$js$9};
var
 check_suffix=
  function(name,suff)
   {var $js=$$String["sub"];
    var $js$1=$js(name,name["length"]-suff["length"],suff["length"]);
    var $js$2="unknown primitive:caml_string_equal";
    return name["length"]>=suff["length"]&&$js$2};
try
 {var temp_dir_name="unknown primitive:caml_sys_getenv"}
catch(exn)
 {var $js=exn=Not_found;
  if($js)
   {var temp_dir_name="/tmp"}
  else
   {var temp_dir_name="unknown primitive:reraise"}}
var quote=generic_quote("'\''");
var basename=generic_basename(is_dir_sep,current_dir_name);
var dirname=generic_dirname(is_dir_sep,current_dir_name);
var
 Unix=
  [0,
   current_dir_name,
   parent_dir_name,
   dir_sep,
   is_dir_sep,
   is_relative,
   is_implicit,
   check_suffix,
   temp_dir_name,
   quote,
   basename,
   dirname];
var current_dir_name$1=".";
var parent_dir_name$1="..";
var dir_sep$1="\";
var is_dir_sep$1=function(s,i){var c=s[i];return (c=47)||(c=92)||(c=58)};
var
 is_relative$1=
  function(n)
   {var $js$1=n[0];
    var $js$2=$js$1!=47;
    var $js$3=n["length"]<1||$js$2;
    var $js$4=n[0];
    var $js$5=$js$4!=92;
    var $js$6=n["length"]<1||$js$5;
    var $js$7=n[1];
    var $js$8=$js$7!=58;
    var $js$9=n["length"]<2||$js$8;
    var $js$10=$js$6&&$js$9;
    return $js$3&&$js$10};
var
 is_implicit$1=
  function(n)
   {var $js$1=is_relative$1(n);
    var $js$2=$$String["sub"];
    var $js$3=$js$2(n,0,2);
    var $js$4="unknown primitive:caml_string_notequal";
    var $js$5=n["length"]<2||$js$4;
    var $js$6=$$String["sub"];
    var $js$7=$js$6(n,0,2);
    var $js$8="unknown primitive:caml_string_notequal";
    var $js$9=n["length"]<2||$js$8;
    var $js$10=$$String["sub"];
    var $js$11=$js$10(n,0,3);
    var $js$12="unknown primitive:caml_string_notequal";
    var $js$13=n["length"]<3||$js$12;
    var $js$14=$$String["sub"];
    var $js$15=$js$14(n,0,3);
    var $js$16="unknown primitive:caml_string_notequal";
    var $js$17=n["length"]<3||$js$16;
    var $js$18=$js$13&&$js$17;
    var $js$19=$js$9&&$js$18;
    var $js$20=$js$5&&$js$19;
    return $js$1&&$js$20};
var
 check_suffix$1=
  function(name,suff)
   {var $js$1=$$String["sub"];
    var s=$js$1(name,name["length"]-suff["length"],suff["length"]);
    var $js$2=$$String["lowercase"];
    var $js$3=$js$2(s);
    var $js$4=$$String["lowercase"];
    var $js$5=$js$4(suff);
    var $js$6="unknown primitive:caml_string_equal";
    return name["length"]>=suff["length"]&&$js$6};
try
 {var temp_dir_name$1="unknown primitive:caml_sys_getenv"}
catch(exn$1)
 {var $js$1=exn$1=Not_found;
  if($js$1)
   {var temp_dir_name$1="."}
  else
   {var temp_dir_name$1="unknown primitive:reraise"}}
var
 quote$1=
  function(s)
   {var l=s["length"];
    var $js$2=Buffer["create"];
    var b=$js$2(l+20);
    var $js$3=Buffer["add_char"];
    $js$3(b,34);
    var
     loop=
      function(i)
       {var $js$4=i=l;
        if($js$4)
         {var $js$5=Buffer["add_char"];return $js$5(b,34)}
        else
         {var c=s[i];
          var $js$6=c!=34;
          if($js$6)
           {var $js$7=c!=92;
            if($js$7)
             {var $js$8=Buffer["add_char"];$js$8(b,c);return loop(i+1)}
            else
             {return loop_bs(0,i)}}
          else
           {return loop_bs(0,i)}}};
    var
     loop_bs=
      function(n,i)
       {var $js$4=i=l;
        if($js$4)
         {var $js$5=Buffer["add_char"];$js$5(b,34);return add_bs(n)}
        else
         {var c=s[i];
          var $js$6=c!=34;
          if($js$6)
           {var $js$7=c!=92;
            if($js$7){add_bs(n);return loop(i)}else{return loop_bs(n+1,i+1)}}
          else
           {add_bs(2*n+1);
            var $js$8=Buffer["add_char"];
            $js$8(b,34);
            return loop(i+1)}}};
    var
     add_bs=
      function(n)
       {var $js$4=1;
        var $js$5=n;
        for(var _j=$js$4;_j<=$js$5;_j++)
         {var $js$6=Buffer["add_char"];$js$6(b,92)}};
    loop(0);
    var $js$4=Buffer["contents"];
    return $js$4(b)};
var
 has_drive=
  function(s)
   {var
     is_letter=
      function(param)
       {var $js$2=param>=91;
        if($js$2)
         {var switcher=-97+param;
          var $js$3=25<switcher>>>0;
          if($js$3){var exit=41}else{var exit=40}}
        else
         {var $js$4=param>=65;if($js$4){var exit=40}else{var exit=41}}
        switch(exit){case 41:return 0;case 40:return 1}};
    var $js$2=s[0];
    var $js$3=is_letter($js$2);
    var $js$4=s[1];
    var $js$5=$js$4=58;
    var $js$6=$js$3&&$js$5;
    return s["length"]>=2&&$js$6};
var
 drive_and_path=
  function(s)
   {var $js$2=has_drive(s);
    if($js$2)
     {var $js$3=$$String["sub"];
      var $js$4=$js$3(s,0,2);
      var $js$5=$$String["sub"];
      var $js$6=$js$5(s,2,s["length"]-2);
      return [0,$js$4,$js$6]}
    else
     {return [0,"",s]}};
var
 dirname$1=
  function(s)
   {var match=drive_and_path(s);
    var path=match[2];
    var drive=match[1];
    var dir=generic_dirname(is_dir_sep$1,current_dir_name$1,path);
    var $js$2=Pervasives["^"];
    return $js$2(drive,dir)};
var
 basename$1=
  function(s)
   {var match=drive_and_path(s);
    var path=match[2];
    return generic_basename(is_dir_sep$1,current_dir_name$1,path)};
var
 Win32=
  [0,
   current_dir_name$1,
   parent_dir_name$1,
   dir_sep$1,
   is_dir_sep$1,
   is_relative$1,
   is_implicit$1,
   check_suffix$1,
   temp_dir_name$1,
   quote$1,
   has_drive,
   drive_and_path,
   dirname$1,
   basename$1];
var current_dir_name$2=".";
var parent_dir_name$2="..";
var dir_sep$2="/";
var is_dir_sep$2=Win32[4];
var is_relative$2=Win32[5];
var is_implicit$2=Win32[6];
var check_suffix$2=Win32[7];
var temp_dir_name$2=Unix[8];
var quote$2=Unix[9];
var basename$2=generic_basename(is_dir_sep$2,current_dir_name$2);
var dirname$2=generic_dirname(is_dir_sep$2,current_dir_name$2);
var
 Cygwin=
  [0,
   current_dir_name$2,
   parent_dir_name$2,
   dir_sep$2,
   is_dir_sep$2,
   is_relative$2,
   is_implicit$2,
   check_suffix$2,
   temp_dir_name$2,
   quote$2,
   basename$2,
   dirname$2];
var match=Sys["os_type"];
var $js$2=match;
if($js$2=="Cygwin")
 {var
   match$1=
    [0,
     Cygwin[1],
     Cygwin[2],
     Cygwin[3],
     Cygwin[4],
     Cygwin[5],
     Cygwin[6],
     Cygwin[7],
     Cygwin[8],
     Cygwin[9],
     Cygwin[10],
     Cygwin[11]]}
else
 if($js$2=="Unix")
  {var
    match$1=
     [0,
      Unix[1],
      Unix[2],
      Unix[3],
      Unix[4],
      Unix[5],
      Unix[6],
      Unix[7],
      Unix[8],
      Unix[9],
      Unix[10],
      Unix[11]]}
 else
  if($js$2=="Win32")
   {var
     match$1=
      [0,
       Win32[1],
       Win32[2],
       Win32[3],
       Win32[4],
       Win32[5],
       Win32[6],
       Win32[7],
       Win32[8],
       Win32[9],
       Win32[13],
       Win32[12]]}
  else
   {var exit=21}
switch(exit)
 {case 21:var $js$3=[0,Assert_failure,[0,"filename.ml",189,9]];throw $js$3}
var dirname$3=match$1[11];
var basename$3=match$1[10];
var quote$3=match$1[9];
var temp_dir_name$3=match$1[8];
var check_suffix$3=match$1[7];
var is_implicit$3=match$1[6];
var is_relative$3=match$1[5];
var is_dir_sep$3=match$1[4];
var dir_sep$3=match$1[3];
var parent_dir_name$3=match$1[2];
var current_dir_name$3=match$1[1];
var
 concat=
  function(dirname$4,filename)
   {var l=dirname$4["length"];
    var $js$4=is_dir_sep$3(dirname$4,l-1);
    var $js$5=(l=0)||$js$4;
    if($js$5)
     {var $js$6=Pervasives["^"];return $js$6(dirname$4,filename)}
    else
     {var $js$7=Pervasives["^"];
      var $js$8=Pervasives["^"];
      var $js$9=$js$8(dir_sep$3,filename);
      return $js$7(dirname$4,$js$9)}};
var
 chop_suffix=
  function(name,suff)
   {var n=name["length"]-suff["length"];
    var $js$4=n<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];
      return $js$5("Filename.chop_suffix")}
    else
     {var $js$6=$$String["sub"];return $js$6(name,0,n)}};
var
 chop_extension=
  function(name)
   {var
     search_dot=
      function(i)
       {var $js$4=is_dir_sep$3(name,i);
        var $js$5=i<0||$js$4;
        if($js$5)
         {var $js$6=Pervasives["invalid_arg"];
          return $js$6("Filename.chop_extension")}
        else
         {var $js$7=name[i];
          var $js$8=$js$7=46;
          if($js$8)
           {var $js$9=$$String["sub"];return $js$9(name,0,i)}
          else
           {return search_dot(i-1)}}};
    return search_dot(name["length"]-1)};
var prng=[246,function(param){var $js$4=Random["State"][2];return $js$4(0)}];
var
 temp_file_name=
  function(temp_dir,prefix,suffix)
   {var $js$4=Random["State"][4];
    var lzarg=prng;
    var tag="unknown primitive:caml_obj_tag";
    var $js$5=tag=250;
    if($js$5)
     {var $js$6=lzarg[1]}
    else
     {var $js$7=tag=246;
      if($js$7)
       {var $js$8=CamlinternalLazy["force_lazy_block"];var $js$6=$js$8(lzarg)}
      else
       {var $js$6=lzarg}}
    var $js$9=$js$4($js$6);
    var rnd=$js$9&16777215;
    var $js$10=Printf["sprintf"];
    var
     $js$11=
      $js$10([0,[2,0,[4,6,[0,2,6],0,[2,0,0]]],"%s%06x%s"],prefix,rnd,suffix);
    return concat(temp_dir,$js$11)};
var current_temp_dir_name=[0,temp_dir_name$3];
var set_temp_dir_name=function(s){return current_temp_dir_name[1]=s,0};
var get_temp_dir_name=function(param){return current_temp_dir_name[1]};
var
 temp_file=
  function($staropt$star,prefix,suffix)
   {var $js$4=$staropt$star;
    if($js$4)
     {var $starsth$star=$staropt$star[1];var temp_dir=$starsth$star}
    else
     {var temp_dir=current_temp_dir_name[1]}
    var
     try_name=
      function(counter)
       {var name=temp_file_name(temp_dir,prefix,suffix);
        try
         {var $js$5="unknown primitive:caml_sys_open";
          "unknown primitive:caml_sys_close";
          return name}
        catch(e)
         {var tag=e[1];
          var $js$6=tag=Sys_error;
          if($js$6)
           {var $js$7=counter>=1e3;
            if($js$7){var $js$8=e;throw $js$8}else{return try_name(counter+1)}}
          else
           {return "unknown primitive:reraise"}}};
    return try_name(0)};
var
 open_temp_file=
  function($staropt$star,$staropt$star$1,prefix,suffix)
   {var $js$4=$staropt$star;
    if($js$4)
     {var $starsth$star=$staropt$star[1];var mode=$starsth$star}
    else
     {var mode=[0,7,0]}
    var $js$5=$staropt$star$1;
    if($js$5)
     {var $starsth$star$1=$staropt$star$1[1];var temp_dir=$starsth$star$1}
    else
     {var temp_dir=current_temp_dir_name[1]}
    var
     try_name=
      function(counter)
       {var name=temp_file_name(temp_dir,prefix,suffix);
        try
         {var $js$6=Pervasives["open_out_gen"];
          var $js$7=$js$6([0,1,[0,3,[0,5,mode]]],384,name);
          return [0,name,$js$7]}
        catch(e)
         {var tag=e[1];
          var $js$8=tag=Sys_error;
          if($js$8)
           {var $js$9=counter>=1e3;
            if($js$9)
             {var $js$10=e;throw $js$10}
            else
             {return try_name(counter+1)}}
          else
           {return "unknown primitive:reraise"}}};
    return try_name(0)};
module["exports"]=
{"current_dir_name":current_dir_name$3,
 "parent_dir_name":parent_dir_name$3,
 "dir_sep":dir_sep$3,
 "concat":concat,
 "is_relative":is_relative$3,
 "is_implicit":is_implicit$3,
 "check_suffix":check_suffix$3,
 "chop_suffix":chop_suffix,
 "chop_extension":chop_extension,
 "basename":basename$3,
 "dirname":dirname$3,
 "temp_file":temp_file,
 "open_temp_file":open_temp_file,
 "get_temp_dir_name":get_temp_dir_name,
 "set_temp_dir_name":set_temp_dir_name,
 "temp_dir_name":temp_dir_name$3,
 "quote":quote$3};
