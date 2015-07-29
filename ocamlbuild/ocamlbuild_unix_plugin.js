var Ocamlbuild_pack=require("Ocamlbuild_pack");
var Pervasives=require("Pervasives");
var Ocamlbuild_executor=require("Ocamlbuild_executor");
var Printf=require("Printf");
var Format=require("Format");
var Unix=require("Unix");
var Filename=require("Filename");
var Sys=require("Sys");
var
 report_error=
  function(f,exn)
   {var $js=exn[1]=Unix["Unix_error"];
    if($js)
     {var arg=exn[4];
      var $js$1=Format["fprintf"];
      $js$1
       (f,
        [0,[2,0,[11,": ",[3,0,[11," failed",0]]]],"%s: %S failed"],
        Sys["argv"][0],
        exn[3]);
      var $js$2=arg["length"]>0;
      if($js$2)
       {var $js$3=Format["fprintf"];
        $js$3(f,[0,[11," on ",[3,0,0]]," on %S"],arg)}
      else
       {}
      var $js$4=Format["fprintf"];
      var $js$5=Unix["error_message"];
      var $js$6=$js$5(exn[2]);
      return $js$4(f,[0,[11,": ",[2,0,0]],": %s"],$js$6)}
    else
     {return "unknown primitive:raise"}};
var
 mkstat=
  function(unix_stat,x)
   {try
     {var st=unix_stat(x)}
    catch(e)
     {var $js=e[1]=Unix["Unix_error"];
      if($js)
       {var $js$1=Ocamlbuild_pack["My_std"][8];
        var $js$2=$js$1([0,[15,0],"%a"],report_error,e);
        var $js$3=[0,Sys_error,$js$2];
        throw $js$3}
      else
       {var st="unknown primitive:reraise"}}
    var match=st[3];
    var $js$4=match;
    var $js$5=$js$4[0];
    if($js$5==0)
     {var $js$6=1}
    else
     if($js$5==1)
      {var $js$6=0}
     else
      if($js$5==2)
       {var exit=19}
      else
       if($js$5==3)
        {var exit=19}
       else
        if($js$5==4)
         {var $js$6=2}
        else
         if($js$5==5){var exit=19}else if($js$5==6){var exit=19}
    switch(exit){case 19:var $js$6=3}
    var $js$7=Format["sprintf"];
    var
     $js$8=
      $js$7
       ([0,[12,40,[4,0,0,0,[12,44,[4,0,0,0,[12,41,0]]]]],"(%d,%d)"],
        st[1],
        st[2]);
    return [0,$js$6,$js$8]};
var
 is_link=
  function(s)
   {var $js=Unix["lstat"];var $js$1=$js(s);var $js$2=$js$1[3];return $js$2=4};
var
 at_exit_once=
  function(callback)
   {var $js=Unix["getpid"];
    var pid=$js(0);
    var $js$1=Pervasives["at_exit"];
    return $js$1
            (function(param)
              {var $js$2=Unix["getpid"];
               var $js$3=$js$2(0);
               var $js$4=pid=$js$3;
               if($js$4){return callback(0)}else{return 0}})};
var
 run_and_open=
  function(s,kont)
   {var $js=Unix["open_process_in"];
    var ic=$js(s);
    var
     close=
      function(param)
       {var $js$1=Unix["close_process_in"];
        var match=$js$1(ic);
        var $js$2=match;
        if($js$2==0)
         {var $js$3=match[1]!=0;if($js$3){var exit=11}else{return 0}}
        else
         if($js$2==1){var exit=11}else if($js$2==2){var exit=11}
        switch(exit)
         {case 11:
           var $js$4=Pervasives["failwith"];
           var $js$5=Printf["sprintf"];
           var
            $js$6=
             $js$5
              ([0,
                [11,"Error while running: ",[2,0,0]],
                "Error while running: %s"],
               s);
           return $js$4($js$6)
          }};
    try
     {var res=kont(ic)}
    catch(e){close(0);var res="unknown primitive:reraise"}
    close(0);
    return res};
var
 stdout_isatty=
  function(param)
   {var $js=Unix["isatty"];
    var $js$1=$js(Unix["stdout"]);
    try
     {var $js$2=Unix["getenv"];
      var $js$3=$js$2("TERM");
      var $js$4="unknown primitive:caml_string_notequal"}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5){var $js$4=1}else{var $js$4="unknown primitive:reraise"}}
    return $js$1&&$js$4};
var exit=function(i){return "unknown primitive:raise"};
var
 exit$1=
  function(param)
   {var $js=param;
    var $js$1=$js[0];
    if($js$1==0)
     {return exit(Ocamlbuild_pack["Exit_codes"][12])}
    else
     if($js$1==1)
      {return exit(Ocamlbuild_pack["Exit_codes"][13])}
     else
      if($js$1==2)
       {return exit(Ocamlbuild_pack["Exit_codes"][14])}
      else
       if($js$1==3){return exit(Ocamlbuild_pack["Exit_codes"][15])}};
var func=Ocamlbuild_executor["execute"];
var
 execute_many=
  function(param,param$1,param$2,param$3)
   {return func(param,param$1,param$2,param$3,exit$1)};
var
 myunixreadlink=
  function(x)
   {var $js=Unix["readlink"];
    var y=$js(x);
    var $js$1=Filename["is_relative"];
    var $js$2=$js$1(y);
    if($js$2)
     {var $js$3=Filename["concat"];
      var $js$4=Filename["dirname"];
      var $js$5=$js$4(x);
      return $js$3($js$5,y)}
    else
     {return y}};
var
 setup=
  function(param)
   {Ocamlbuild_pack["My_unix"][13][1]=0,0;
    Ocamlbuild_pack["My_unix"][13][9]=stdout_isatty,0;
    Ocamlbuild_pack["My_unix"][13][8]=Unix["gettimeofday"],0;
    Ocamlbuild_pack["My_unix"][13][6]=report_error,0;
    Ocamlbuild_pack["My_unix"][13][5]=execute_many,0;
    Ocamlbuild_pack["My_unix"][13][4]=myunixreadlink,0;
    Ocamlbuild_pack["My_unix"][13][3]=run_and_open,0;
    Ocamlbuild_pack["My_unix"][13][7]=at_exit_once,0;
    Ocamlbuild_pack["My_unix"][13][2]=is_link,0;
    var $js=mkstat(Unix["stat"]);
    Ocamlbuild_pack["My_unix"][13][10]=$js,0;
    var $js$1=mkstat(Unix["lstat"]);
    return Ocamlbuild_pack["My_unix"][13][11]=$js$1,0};
module["exports"]={"setup":setup};
