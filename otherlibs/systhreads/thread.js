var Pervasives=require("Pervasives");
var Unix=require("Unix");
var Sys=require("Sys");

var create=function(fn,arg){return "unknown primitive:caml_thread_new";};

var
 kill=
  function(th)
   {return Pervasives["invalid_arg"]("Thread.kill: not implemented");};

var preempt=function(signal){return "unknown primitive:caml_thread_yield";};

var match=Sys["os_type"];

switch(match)
 {case "Win32":var preempt_signal=Sys["sigterm"];
  default:var preempt_signal=Sys["sigvtalrm"];}

Sys["set_signal"](preempt_signal,[0,preempt]),
"unknown primitive:caml_thread_initialize",
Pervasives["at_exit"]
 (function(param)
   {"unknown primitive:caml_thread_cleanup";
    return Sys["set_signal"](preempt_signal,0);
    });
var delay=function(time){return 0;};

var wait_read=function(fd){return 0;};

var wait_write=function(fd){return 0;};

var
 wait_timed_read=
  function(fd,d)
   {var match$1=Unix["select"]([0,fd,0],0,0,d);
    
    var match$2=match$1[1];
    
    if(match$2){return 1;}else{return 0;}
    };

var
 wait_timed_write=
  function(fd,d)
   {var match$1=Unix["select"](0,[0,fd,0],0,d);
    
    var match$2=match$1[2];
    
    if(match$2){return 1;}else{return 0;}
    };

var select=Unix["select"];

var wait_pid=function(p){return Unix["waitpid"](0,p);};

[0,
 create,
 function(prim){return "unknown primitive:caml_thread_self";},
 function(prim){return "unknown primitive:caml_thread_id";},
 function(prim){return "unknown primitive:caml_thread_exit";},
 kill,
 delay,
 function(prim){return "unknown primitive:caml_thread_join";},
 wait_read,
 wait_write,
 wait_timed_read,
 wait_timed_write,
 select,
 wait_pid,
 function(prim){return "unknown primitive:caml_thread_yield";},
 function(prim,prim$1){return "unknown primitive:caml_thread_sigmask";},
 function(prim){return "unknown primitive:caml_wait_signal";}];
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

