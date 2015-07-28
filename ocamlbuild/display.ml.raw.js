var Char=require("Char");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Filename=require("Filename");
var Bytes=require("Bytes");
var My_std=require("My_std");
var Tags=require("Tags");
var My_unix=require("My_unix");
var Discard_printf=require("Discard_printf");
var Sys=require("Sys");
var fp=Printf["fprintf"];
var
 up=
  function(oc,n)
   {return fp(oc,[0,[11,"\x1b[",[4,0,0,0,[12,65,0]]],"\x1b[%dA"],n)};
var
 clear_to_eol=
  function(oc,param){return fp(oc,[0,[11,"\x1b[K",0],"\x1b[K"])};
var bol=function(oc,param){return fp(oc,[0,[12,13,0],"\r"])};
var
 get_columns=
  function(param)
   {var $js="unknown primitive:caml_string_equal";
    if($js)
     {try
       {var $js$1=My_std["String"][2];
        var $js$2=My_unix["run_and_read"];
        var $js$3=$js$2("tput cols");
        var $js$4=$js$1($js$3);
        return "unknown primitive:caml_int_of_string"}
      catch(exn)
       {var $js$5=exn[1]=Failure;
        if($js$5){return 80}else{return "unknown primitive:reraise"}}}
    else
     {return 80}};
var ANSI=[0,up,clear_to_eol,bol,get_columns];
var default_update_interval=0.05;
var
 default_tagline_description=
  [0,
   [0,"ocaml",79],
   [0,
    [0,"native",78],
    [0,
     [0,"byte",66],
     [0,
      [0,"program",80],
      [0,
       [0,"pp",82],
       [0,[0,"debug",68],[0,[0,"interf",73],[0,[0,"link",76],0]]]]]]]];
var countdown_chars=8;
var jobs_chars=3;
var jobs_cached_chars=5;
var dots="...";
var start_target="STARTING";
var finish_target="FINISHED";
var ticker_chars=3;
var ticker_period=0.25;
var ticker_animation=["\","|","/","-"];
var cached="*";
var uncached=" ";
var cache_chars=1;
var
 create_tagline=
  function(description)
   {var $js=Bytes["make"];
    var $js$1=My_std["List"][5];
    var $js$2=$js$1(description);
    return $js($js$2,45)};
var
 create=
  function(*opt*,*opt*$1,*opt*$2,*opt*$3,log_file,*opt*$4,param)
   {var $js=*opt*;
    if($js){var channel=*opt*[1]}else{var channel=Pervasives["stdout"]}
    var $js$1=*opt*$1;
    if($js$1){var mode=*opt*$1[1]}else{var mode=-369468030}
    var $js$2=*opt*$2;
    if($js$2){var _columns=*opt*$2[1]}else{var _columns=75}
    var $js$3=*opt*$3;
    if($js$3)
     {var description=*opt*$3[1]}
    else
     {var description=default_tagline_description}
    var $js$4=*opt*$4;
    if($js$4){var log_level=*opt*$4[1]}else{var log_level=1}
    var $js$5=log_file;
    if($js$5)
     {var $js$6=Pervasives["open_out_gen"];
      var oc=$js$6([0,7,[0,1,[0,3,[0,4,0]]]],438,log_file[1]);
      var $js$7=Format["formatter_of_out_channel"];
      var f=$js$7(oc);
      var $js$8=Format["fprintf"];
      $js$8(f,[0,[11,"### Starting build.\n",0],"### Starting build.\n"]);
      var log_channel=[0,[0,f,oc]]}
    else
     {var log_channel=0}
    var $js$9=mode>=920812018;
    if($js$9)
     {var display_line=0}
    else
     {var $js$10=ANSI[4];
      var n=$js$10(0);
      var $js$11=My_std["List"][5];
      var tag_chars=$js$11(description);
      var $js$12=My_unix["gettimeofday"];
      var $js$13=$js$12(0);
      var $js$14=create_tagline(description);
      var
       $js$15=
        [0,
         Pervasives["stdout"],
         $js$13,
         0,
         start_target,
         0,
         Tags["empty"],
         0,
         default_update_interval,
         n,
         0,
         0,
         $js$14,
         Tags["empty"],
         n-
         (countdown_chars+
          1+
          jobs_chars+
          1+
          jobs_cached_chars+
          1+
          cache_chars+
          1+
          tag_chars+
          1+
          ticker_chars+
          2),
         description];
      var display_line=[0,$js$15]}
    var $js$16=Format["formatter_of_out_channel"];
    var $js$17=$js$16(channel);
    return [0,log_level,log_channel,channel,$js$17,display_line,0]};
var
 print_time=
  function(oc,t)
   {var t$1=t;
    var s=t$1%60;
    var m=t$1/60%60;
    var h=t$1/3600;
    return fp
            (oc,
             [0,
              [4,
               0,
               [0,2,2],
               0,
               [12,58,[4,0,[0,2,2],0,[12,58,[4,0,[0,2,2],0,0]]]]],
              "%02d:%02d:%02d"],
             h,
             m,
             s)};
var
 print_shortened_pathname=
  function(length,oc,u)
   {var $js=length>=3;
    if($js){}else{"unknown primitive:raise"}
    var m=u["length"];
    var $js$1=m<=length;
    if($js$1)
     {var $js$2=Pervasives["output_string"];
      $js$2(oc,u);
      return fp(oc,[0,[2,[1,1],0],"%*s"],length-m,"")}
    else
     {var n=dots["length"];
      var k=length-n;
      var $js$3=Pervasives["output_string"];
      $js$3(oc,dots);
      var $js$4=Pervasives["output_substring"];
      return $js$4(oc,u,m-k,k)}};
var
 redraw_sophisticated=
  function(ds)
   {var $js=My_unix["gettimeofday"];
    var t=$js(0);
    var oc=ds[1];
    var dt=t-ds[2];
    ds[3]=t,0;
    fp(oc,[0,[15,0],"%a"],ANSI[3],0);
    var $js$1=Pervasives["abs"];
    var $js$2=$js$1("unknown primitive:caml_ceil_float");
    var ticker_phase=$js$2%ticker_animation["length"];
    var ticker=ticker_animation[ticker_phase];
    var $js$3=print_shortened_pathname(ds[14]);
    var $js$4=ds[5];
    if($js$4){var $js$5=cached}else{var $js$5=uncached}
    var $js$6=Bytes["to_string"];
    var $js$7=$js$6(ds[12]);
    fp
     (oc,
      [0,
       [15,
        [12,
         32,
         [4,
          0,
          [0,0,4],
          0,
          [11,
           " (",
           [4,
            0,
            [0,0,4],
            0,
            [11,") ",[15,[12,32,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]]]]]],
       "%a %-4d (%-4d) %a %s %s %s"],
      print_time,
      dt,
      ds[10],
      ds[11],
      $js$3,
      ds[4],
      $js$5,
      $js$7,
      ticker);
    return fp(oc,[0,[15,[10,0]],"%a%!"],ANSI[2],0)};
var
 redraw=
  function(param)
   {var $js=param;
    if($js){return redraw_sophisticated(param[1])}else{return 0}};
var
 finish_sophisticated=
  function(*opt*,ds)
   {var $js=*opt*;
    if($js){var how=*opt*[1]}else{var how=94326179}
    var $js$1=My_unix["gettimeofday"];
    var t=$js$1(0);
    var oc=ds[1];
    var dt=t-ds[2];
    var $js$2=how>=94326179;
    if($js$2)
     {fp(oc,[0,[15,0],"%a"],ANSI[3],0);
      var $js$3=how=106380200;
      if($js$3)
       {var $js$4="Compilation unsuccessful after building"}
      else
       {var $js$4="Finished,"}
      var $js$5=ds[10]=1;
      if($js$5){var $js$6=""}else{var $js$6="s"}
      fp
       (oc,
        [0,
         [2,
          0,
          [12,
           32,
           [4,
            0,
            0,
            0,
            [11,
             " target",
             [2,0,[11," (",[4,0,0,0,[11," cached) in ",[15,[12,46,0]]]]]]]]]],
         "%s %d target%s (%d cached) in %a."],
        $js$4,
        ds[10],
        $js$6,
        ds[11],
        print_time,
        dt);
      return fp(oc,[0,[15,[12,10,[10,0]]],"%a\n%!"],ANSI[2],0)}
    else
     {return fp(oc,[0,[15,[15,[10,0]]],"%a%a%!"],ANSI[3],0,ANSI[2],0)}};
var
 sophisticated_display=
  function(ds,f)
   {fp(ds[1],[0,[15,[15,[10,0]]],"%a%a%!"],ANSI[3],0,ANSI[2],0);
    return f(ds[1])};
var
 call_if=
  function(log_channel,f)
   {var $js=log_channel;if($js){return f(log_channel[1])}else{return 0}};
var
 display=
  function(di,f)
   {call_if(di[2],function(param){return f(param[2])});
    var match=di[5];
    var $js=match;
    if($js){return sophisticated_display(match[1],f)}else{return f(di[3])}};
var
 finish=
  function(*opt*,di)
   {var $js=*opt*;
    if($js){var how=*opt*[1]}else{var how=94326179}
    var $js$1=!di[6];
    if($js$1)
     {di[6]=1,0;
      call_if
       (di[2],
        function(param)
         {var $js$2=Format["fprintf"];
          var $js$3=how=106380200;
          if($js$3){var $js$4="un"}else{var $js$4=""}
          $js$2
           (param[1],
            [0,
             [11,"# Compilation ",[2,0,[11,"successful.",[17,4,0]]]],
             "# Compilation %ssuccessful.@."],
            $js$4);
          var $js$5=Pervasives["close_out"];
          $js$5(param[2]);
          return di[2]=0,0});
      var match=di[5];
      var $js$2=match;
      if($js$2){return finish_sophisticated([0,how],match[1])}else{return 0}}
    else
     {return 0}};
var
 update_tagline_from_tags=
  function(ds)
   {var tagline=ds[12];
    var tags=ds[6];
    var
     loop=
      function(i,param)
       {var $js=param;
        if($js)
         {var match=param[1];
          var c=match[2];
          var tag=match[1];
          var $js$1=Tags["mem"];
          var $js$2=$js$1(tag,tags);
          if($js$2)
           {var $js$3=Char["uppercase"];var $js$4=$js$3(c);tagline[i]=$js$4,0}
          else
           {var $js$5=Tags["mem"];
            var $js$6=$js$5(tag,ds[13]);
            if($js$6)
             {var $js$7=Char["lowercase"];
              var $js$8=$js$7(c);
              tagline[i]=$js$8,0}
            else
             {tagline[i]=45,0}}
          return loop(i+1,param[2])}
        else
         {var $js$9=i;
          var $js$10=tagline["length"]-1;
          for(var j=$js$9;j<=$js$10;j++){tagline[j]=45,0}}};
    return loop(0,ds[15])};
var
 update_sophisticated=
  function(ds)
   {var $js=My_unix["gettimeofday"];
    var t=$js(0);
    var dt=t-ds[3];
    var $js$1=dt>ds[8];
    if($js$1)
     {var $js$2=ds[7];
      if($js$2){update_tagline_from_tags(ds);ds[7]=0,0}else{}
      return redraw_sophisticated(ds)}
    else
     {return 0}};
var
 set_target_sophisticated=
  function(ds,target,tags,cached$1)
   {ds[7]=1,0;
    ds[4]=target,0;
    ds[6]=tags,0;
    ds[10]=1+ds[10],0;
    var $js=cached$1;
    if($js){ds[11]=1+ds[11],0}else{}
    ds[5]=cached$1,0;
    var $js$1=Tags["union"];
    var $js$2=$js$1(ds[13],ds[6]);
    ds[13]=$js$2,0;
    return update_sophisticated(ds)};
var
 print_tags=
  function(f,tags)
   {var first=[0,1];
    var $js=Tags["iter"];
    return $js
            (function(tag)
              {var $js$1=first[1];
               if($js$1)
                {first[1]=0,0;
                 var $js$2=Format["fprintf"];
                 return $js$2(f,[0,[2,0,0],"%s"],tag)}
               else
                {var $js$3=Format["fprintf"];
                 return $js$3(f,[0,[11,", ",[2,0,0]],", %s"],tag)}},
             tags)};
var
 update=
  function(di)
   {var match=di[5];
    var $js=match;
    if($js){return update_sophisticated(match[1])}else{return 0}};
var
 event=
  function(di,*opt*,command,target,tags)
   {var $js=*opt*;
    if($js){var pretend=*opt*[1]}else{var pretend=0}
    call_if
     (di[2],
      function(param)
       {var fmt=param[1];
        var $js$1=Format["fprintf"];
        $js$1
         (fmt,
          [0,
           [11,"# Target: ",[2,0,[11,", tags: { ",[15,[11," }\n",0]]]]],
           "# Target: %s, tags: { %a }\n"],
          target,
          print_tags,
          tags);
        var $js$2=Format["fprintf"];
        var $js$3=pretend;
        if($js$3){var $js$4=" # cached"}else{var $js$4=""}
        return $js$2(fmt,[0,[2,0,[2,0,[17,4,0]]],"%s%s@."],command,$js$4)});
    var match=di[5];
    var $js$1=match;
    if($js$1)
     {var ds=match[1];
      set_target_sophisticated(ds,target,tags,pretend);
      return update_sophisticated(ds)}
    else
     {var $js$2=pretend;
      if($js$2)
       {var $js$3=Filename["basename"];
        var command$1=$js$3(command);
        var $js$4=di[1]>=2;
        if($js$4)
         {var $js$5=Format["fprintf"];
          return $js$5
                  (di[4],
                   [0,
                    [11,"[cache hit] ",[2,0,[12,10,[10,0]]]],
                    "[cache hit] %s\n%!"],
                   command$1)}
        else
         {return 0}}
      else
       {var $js$6=di[1]>=1;
        if($js$6)
         {var $js$7=Format["fprintf"];
          return $js$7(di[4],[0,[2,0,[12,10,[10,0]]],"%s\n%!"],command)}
        else
         {return 0}}}};
var
 dprintf=
  function(*opt*,di,fmt)
   {var $js=*opt*;
    if($js){var log_level=*opt*[1]}else{var log_level=1}
    var $js$1=log_level>di[1];
    if($js$1)
     {var $js$2=Discard_printf["discard_printf"];return $js$2(fmt)}
    else
     {var match=di[5];
      var $js$3=match;
      if($js$3)
       {var $js$4=log_level<0;
        if($js$4)
         {display(di,function(prim){return 0});
          var $js$5=Format["fprintf"];
          return $js$5(di[4],fmt)}
        else
         {var match$1=di[2];
          var $js$6=match$1;
          if($js$6)
           {var $js$7=Format["fprintf"];return $js$7(match$1[1][1],fmt)}
          else
           {var $js$8=Discard_printf["discard_printf"];return $js$8(fmt)}}}
      else
       {var $js$9=Format["fprintf"];return $js$9(di[4],fmt)}}};
module["exports"]=
{"create":create,
 "finish":finish,
 "event":event,
 "display":display,
 "update":update,
 "dprintf":dprintf};
