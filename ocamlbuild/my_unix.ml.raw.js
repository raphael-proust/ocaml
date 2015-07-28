var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Buffer=require("Buffer");
var Filename=require("Filename");
var My_std=require("My_std");
var Hashtbl=require("Hashtbl");
var is_degraded=1;
var
 stat=
  function(f)
   {var $js=My_std["sys_file_exists"];
    var $js$1=$js(f);
    if($js$1)
     {var $js$2="unknown primitive:caml_sys_is_directory";
      if($js$2){var $js$3=0}else{var $js$3=1}}
    else
     {var $js$4=My_std["with_input_file"];
      var match=$js$4(0,f,Pervasives["input_char"]);
      var $js$3="unknown primitive:raise"}
    return [0,$js$3,f]};
var
 run_and_open=
  function(s,kont)
   {var $js=My_std["with_temp_file"];
    return $js
            ("ocamlbuild",
             "out",
             function(tmp)
              {var $js$1=Printf["sprintf"];
               var
                s$1=
                 $js$1
                  ([0,[2,0,[11," > '",[2,0,[12,39,0]]]],"%s > '%s'"],s,tmp);
               var $js$2=My_std["sys_command"];
               var st=$js$2(s$1);
               var $js$3=st!=0;
               if($js$3)
                {var $js$4=Pervasives["failwith"];
                 var $js$5=Printf["sprintf"];
                 var
                  $js$6=
                   $js$5
                    ([0,
                      [11,"Error while running: ",[2,0,0]],
                      "Error while running: %s"],
                     s$1);
                 $js$4($js$6)}
               else
                {}
               var $js$7=My_std["with_input_file"];
               return $js$7(0,tmp,kont)})};
var Not_a_link="unknown primitive:caml_set_oo_id";
var No_such_file="unknown primitive:caml_set_oo_id";
var Link_to_directories_not_supported="unknown primitive:caml_set_oo_id";
var $js=Hashtbl["create"];
var cache=$js(0,32);
var
 readlinkcmd=
  function(x)
   {try
     {var $js$1=Hashtbl["find"];return $js$1(cache,x)}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2)
       {var $js$3=Printf["sprintf"];
        var $js$4=Filename["quote"];
        var $js$5=$js$4(x);
        var $js$6=$js$3([0,[11,"readlink ",[2,0,0]],"readlink %s"],$js$5);
        return run_and_open
                ($js$6,
                 function(ic)
                  {var $js$7=My_std["String"][2];
                   var $js$8=Pervasives["input_line"];
                   var $js$9=$js$8(ic);
                   var y=$js$7($js$9);
                   var $js$10=Hashtbl["replace"];
                   $js$10(cache,x,y);
                   return y})}
      else
       {return "unknown primitive:reraise"}}};
var
 readlink=
  function(x)
   {var $js$1=My_std["sys_file_exists"];
    var $js$2=$js$1(x);
    if($js$2)
     {try
       {var y=readlinkcmd(x);
        var $js$3=Filename["is_relative"];
        var $js$4=$js$3(y);
        if($js$4)
         {var $js$5=Filename["concat"];
          var $js$6=Filename["dirname"];
          var $js$7=$js$6(x);
          var y$1=$js$5($js$7,y)}
        else
         {var y$1=y}
        var $js$8=lstat(y$1);
        var $js$9=$js$8[1];
        var $js$10=$js$9=0;
        if($js$10){return "unknown primitive:raise"}else{return y$1}}
      catch(exn)
       {var $js$11=exn[1]=Failure;
        if($js$11)
         {return "unknown primitive:raise"}
        else
         {return "unknown primitive:reraise"}}}
    else
     {return "unknown primitive:raise"}};
var
 is_link=
  function(x)
   {try
     {var $js$1=readlink(x);0;return 1}
    catch(exn)
     {var $js$2=exn=No_such_file;
      if($js$2)
       {var exit=22}
      else
       {var $js$3=exn=Not_a_link;
        if($js$3){var exit=22}else{return "unknown primitive:reraise"}}
      switch(exit){case 22:return 0}}};
var
 lstat=
  function(x)
   {var $js$1=is_link(x);if($js$1){return [0,2,x]}else{return stat(x)}};
var
 implem=
  [0,
   1,
   is_link,
   run_and_open,
   readlink,
   function(param,param$1,param$2,param$3,param$4)
    {return "unknown primitive:raise"},
   function(param){return function(prim){return "unknown primitive:raise"}},
   Pervasives["at_exit"],
   function(param){return "unknown primitive:raise"},
   function(param){return 0},
   stat,
   lstat];
var is_degraded$1=[246,function(param){return implem[1]}];
var stat$1=function(x){var $js$1=implem[10];return $js$1(x)};
var lstat$1=function(x){var $js$1=implem[11];return $js$1(x)};
var readlink$1=function(x){var $js$1=implem[4];return $js$1(x)};
var is_link$1=function(x){var $js$1=implem[2];return $js$1(x)};
var run_and_open$1=function(x){var $js$1=implem[3];return $js$1(x)};
var at_exit_once=function(x){var $js$1=implem[7];return $js$1(x)};
var report_error=function(x){var $js$1=implem[6];return $js$1(x)};
var gettimeofday=function(x){var $js$1=implem[8];return $js$1(x)};
var stdout_isatty=function(x){var $js$1=implem[9];return $js$1(x)};
var
 execute_many=
  function(max_jobs){var $js$1=implem[5];return $js$1(max_jobs)};
var
 run_and_read=
  function(cmd)
   {var bufsiz=2048;
    var buf="unknown primitive:caml_create_string";
    var $js$1=Buffer["create"];
    var totalbuf=$js$1(4096);
    var $js$2=implem[3];
    return $js$2
            (cmd,
             function(ic)
              {var
                loop=
                 function(pos)
                  {var $js$3=Pervasives["input"];
                   var len=$js$3(ic,buf,0,bufsiz);
                   var $js$4=len>0;
                   if($js$4)
                    {var $js$5=Buffer["add_subbytes"];
                     $js$5(totalbuf,buf,0,len);
                     return loop(pos+len)}
                   else
                    {return 0}};
               loop(0);
               var $js$3=Buffer["contents"];
               return $js$3(totalbuf)})};
module["exports"]=
{"is_degraded":is_degraded$1,
 "is_link":is_link$1,
 "run_and_open":run_and_open$1,
 "readlink":readlink$1,
 "run_and_read":run_and_read,
 "execute_many":execute_many,
 "report_error":report_error,
 "at_exit_once":at_exit_once,
 "gettimeofday":gettimeofday,
 "stdout_isatty":stdout_isatty,
 "stat":stat$1,
 "lstat":lstat$1,
 "implem":implem};
