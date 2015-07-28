var String=require("String");
var Pervasives=require("Pervasives");
var Unix=require("Unix");
var Out_of_range="unknown primitive:caml_set_oo_id";
var nothing=function(param){return 0};
var
 except=
  function(e,l)
   {var
     except_e=
      function(param)
       {var $js=param;
        if($js)
         {var l$1=param[2];
          var elem=param[1];
          var $js$1="unknown primitive:caml_equal";
          if($js$1)
           {return l$1}
          else
           {var $js$2=except_e(l$1);return [0,elem,$js$2]}}
        else
         {return 0}};
    return except_e(l)};
var
 index=
  function(a,l)
   {var
     index_rec=
      function(i,param)
       {var $js=param;
        if($js)
         {var $js$1="unknown primitive:caml_equal";
          if($js$1){return i}else{return index_rec(i+1,param[2])}}
        else
         {return "unknown primitive:raise"}};
    return index_rec(0,l)};
var
 list_truncate=
  function(p0,p1)
   {var $js=p0!=0;
    if($js)
     {var $js$1=p1;
      if($js$1)
       {var $js$2=list_truncate(p0-1,p1[2]);return [0,p1[1],$js$2]}
      else
       {return 0}}
    else
     {return 0}};
var
 list_truncate2=
  function(p0,p1)
   {var $js=p0!=0;
    if($js)
     {var $js$1=p1;
      if($js$1)
       {var match=list_truncate2(p0-1,p1[2]);
        return [0,[0,p1[1],match[1]],match[2]]}
      else
       {return [0,0,0]}}
    else
     {return [0,0,p1]}};
var
 list_replace=
  function(x,y)
   {var
     repl=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[2];
          var a=param[1];
          var $js$1=a=x;
          if($js$1){return [0,y,l]}else{var $js$2=repl(l);return [0,a,$js$2]}}
        else
         {return 0}};
    return repl};
var
 is_space=
  function(param)
   {var $js=param!=9;
    if($js)
     {var $js$1=param!=32;if($js$1){return 0}else{var exit=12}}
    else
     {var exit=12}
    switch(exit){case 12:return 1}};
var
 string_trim=
  function(s)
   {var l=s["length"];
    var i=0;
    for(;;)
     {var $js=is_space(s[i]);
      var $js$1=i<l&&$js;
      if($js$1){var $js$2=1+i;var i=$js$2}else break}
    var j=l-1;
    for(;;)
     {var $js$3=is_space(s[j]);
      var $js$4=j>=i&&$js$3;
      if($js$4){var $js$5=-1+j;var j=$js$5}else break}
    var $js$6=String["sub"];
    return $js$6(s,i,j-i+1)};
var
 isprefix=
  function(s1,s2)
   {var l1=s1["length"];
    var l2=s2["length"];
    var $js=String["sub"];
    var $js$1=$js(s2,0,l1);
    var $js$2="unknown primitive:caml_string_equal";
    var $js$3=l1<l2&&$js$2;
    return (l1=l2)&&"unknown primitive:caml_string_equal"||$js$3};
var
 split_string=
  function(sep,str)
   {var
     split=
      function(i,j)
       {var $js=j>=str["length"];
        if($js)
         {var $js$1=i>=j;
          if($js$1)
           {return 0}
          else
           {var $js$2=String["sub"];
            var $js$3=$js$2(str,i,j-i);
            return [0,$js$3,0]}}
        else
         {var $js$4=str[j]=sep;
          if($js$4)
           {var $js$5=i>=j;
            if($js$5)
             {return skip_sep(j+1)}
            else
             {var $js$6=String["sub"];
              var $js$7=$js$6(str,i,j-i);
              var $js$8=skip_sep(j+1);
              return [0,$js$7,$js$8]}}
          else
           {return split(i,j+1)}}};
    var
     skip_sep=
      function(j)
       {var $js=j<str["length"]&&(str[j]=sep);
        if($js){return skip_sep(j+1)}else{return split(j,j)}};
    return split(0,0)};
var
 io_channel_of_descr=
  function(fd)
   {var $js=Unix["in_channel_of_descr"];
    var $js$1=$js(fd);
    var $js$2=Unix["out_channel_of_descr"];
    var $js$3=$js$2(fd);
    return [0,$js$1,$js$3,fd]};
var
 close_io=
  function(io_channel)
   {var $js=Pervasives["close_out_noerr"];
    $js(io_channel[2]);
    var $js$1=Pervasives["close_in_noerr"];
    return $js$1(io_channel[1])};
var std_io=[0,Pervasives["stdin"],Pervasives["stdout"],Unix["stdin"]];
module["exports"]=
{"nothing":nothing,
 "Out_of_range":Out_of_range,
 "except":except,
 "index":index,
 "list_truncate":list_truncate,
 "list_truncate2":list_truncate2,
 "list_replace":list_replace,
 "string_trim":string_trim,
 "isprefix":isprefix,
 "split_string":split_string,
 "io_channel_of_descr":io_channel_of_descr,
 "close_io":close_io,
 "std_io":std_io};
