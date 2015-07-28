var Pervasives=require("Pervasives");
var Unix=require("Unix");
var Sys=require("Sys");
var create=function(fn,arg){return "unknown primitive:caml_thread_new"};
var
 kill=
  function(th)
   {var $js=Pervasives["invalid_arg"];
    return $js("Thread.kill: not implemented")};
var preempt=function(signal){return "unknown primitive:caml_thread_yield"};
var match=Sys["os_type"];
var $js=match;
if($js=="Win32")
 {var preempt_signal=Sys["sigterm"]}
else
 {var preempt_signal=Sys["sigvtalrm"]}
var $js$1=Sys["set_signal"];
$js$1(preempt_signal,[0,preempt]);
"unknown primitive:caml_thread_initialize";
var $js$2=Pervasives["at_exit"];
$js$2
 (function(param)
   {"unknown primitive:caml_thread_cleanup";
    var $js$3=Sys["set_signal"];
    return $js$3(preempt_signal,0)});
var
 delay=
  function(time)
   {var $js$3=Unix["select"];var $js$4=$js$3(0,0,0,time);return 0};
var wait_read=function(fd){return 0};
var wait_write=function(fd){return 0};
var
 wait_timed_read=
  function(fd,d)
   {var $js$3=Unix["select"];
    var match$1=$js$3([0,fd,0],0,0,d);
    var match$2=match$1[1];
    var $js$4=match$2;
    if($js$4){return 1}else{return 0}};
var
 wait_timed_write=
  function(fd,d)
   {var $js$3=Unix["select"];
    var match$1=$js$3(0,[0,fd,0],0,d);
    var match$2=match$1[2];
    var $js$4=match$2;
    if($js$4){return 1}else{return 0}};
var select=Unix["select"];
var wait_pid=function(p){var $js$3=Unix["waitpid"];return $js$3(0,p)};
module["exports"]=
{"create":create,
 "unknown block:(function prim/1044 (caml_thread_self prim/1044))":
 unknown block:(function prim/1044 (caml_thread_self prim/1044)),
 "unknown block:(function prim/1045 (caml_thread_id prim/1045))":
 unknown block:(function prim/1045 (caml_thread_id prim/1045)),
 "unknown block:(function prim/1046 (caml_thread_exit prim/1046))":
 unknown block:(function prim/1046 (caml_thread_exit prim/1046)),
 "kill":kill,
 "delay":delay,
 "unknown block:(function prim/1047 (caml_thread_join prim/1047))":
 unknown block:(function prim/1047 (caml_thread_join prim/1047)),
 "wait_read":wait_read,
 "wait_write":wait_write,
 "wait_timed_read":wait_timed_read,
 "wait_timed_write":wait_timed_write,
 "select":select,
 "wait_pid":wait_pid,
 "unknown block:(function prim/1048 (caml_thread_yield prim/1048))":
 unknown block:(function prim/1048 (caml_thread_yield prim/1048)),
 "unknown block:(function prim/1050 prim/1049 (caml_thread_sigmask prim/1050 prim/1049))":
 unknown block:(function prim/1050 prim/1049 (caml_thread_sigmask prim/1050 prim/1049)),
 "unknown block:(function prim/1051 (caml_wait_signal prim/1051))":
 unknown block:(function prim/1051 (caml_wait_signal prim/1051))};
