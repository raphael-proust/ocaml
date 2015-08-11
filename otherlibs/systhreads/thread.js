// Generated CODE, PLEASE EDIT WITH CARE 

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

Sys["set_signal"](preempt_signal,/* Signal_handle */[0,preempt]);
"unknown primitive:caml_thread_initialize",
Pervasives["at_exit"]
 (function(param)
   {"unknown primitive:caml_thread_cleanup";
    return Sys["set_signal"](preempt_signal,/* Signal_default */0);
    });
var
 delay=
  function(time){return Unix["select"](/* [] */0,/* [] */0,/* [] */0,time);};

var wait_read=function(fd){return /* () */0;};

var wait_write=function(fd){return /* () */0;};

var
 wait_timed_read=
  function(fd,d)
   {var
     match$1=
      Unix["select"](/* :: */[0,fd,/* [] */0],/* [] */0,/* [] */0,d);
    
    var match$2=match$1[1];
    
    if(match$2){return /* true */1;}else{return /* false */0;}
    };

var
 wait_timed_write=
  function(fd,d)
   {var
     match$1=
      Unix["select"](/* [] */0,/* :: */[0,fd,/* [] */0],/* [] */0,d);
    
    var match$2=match$1[2];
    
    if(match$2){return /* true */1;}else{return /* false */0;}
    };

var select=Unix["select"];

var wait_pid=function(p){return Unix["waitpid"](/* [] */0,p);};

module["exports"]=
{"create":create,
 "caml_thread_self":
 function(prim){return "unknown primitive:caml_thread_self";},
 "caml_thread_id":function(prim){return "unknown primitive:caml_thread_id";},
 "caml_thread_exit":
 function(prim){return "unknown primitive:caml_thread_exit";},
 "kill":kill,
 "delay":delay,
 "caml_thread_join":
 function(prim){return "unknown primitive:caml_thread_join";},
 "wait_read":wait_read,
 "wait_write":wait_write,
 "wait_timed_read":wait_timed_read,
 "wait_timed_write":wait_timed_write,
 "select":select,
 "wait_pid":wait_pid,
 "caml_thread_yield":
 function(prim){return "unknown primitive:caml_thread_yield";},
 "caml_thread_sigmask":
 function(prim,prim){return "unknown primitive:caml_thread_sigmask";},
 "caml_wait_signal":
 function(prim){return "unknown primitive:caml_wait_signal";}};

