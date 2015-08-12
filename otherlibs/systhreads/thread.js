// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Unix=require("Unix");
var Sys=require("Sys");


var
 create=
  function(fn,arg)
   {return Primtivie["caml_thread_new"]
            (function(param)
              {try
                {fn(arg);return /* () */0;}
               catch(exn)
                {Pervasives["flush"](Pervasives["stdout"]);
                 Pervasives["flush"](Pervasives["stderr"]);
                 return Primtivie["caml_thread_uncaught_exception"](exn);
                 }
               });
    };

var
 kill=
  function(th)
   {return Pervasives["invalid_arg"]("Thread.kill: not implemented");};

var
 preempt=
  function(signal){return Primtivie["caml_thread_yield"](/* () */0);};

var match=Sys["os_type"];

switch(match)
 {case "Win32":var preempt_signal=Sys["sigterm"];
  default:var preempt_signal=Sys["sigvtalrm"];}

Sys["set_signal"](preempt_signal,/* Signal_handle */[0,preempt]);
Primtivie["caml_thread_initialize"](/* () */0),
Pervasives["at_exit"]
 (function(param)
   {Primtivie["caml_thread_cleanup"](/* () */0);
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
 function(prim){return Primtivie["caml_thread_self"](prim);},
 "caml_thread_id":function(prim){return Primtivie["caml_thread_id"](prim);},
 "caml_thread_exit":
 function(prim){return Primtivie["caml_thread_exit"](prim);},
 "kill":kill,
 "delay":delay,
 "caml_thread_join":
 function(prim){return Primtivie["caml_thread_join"](prim);},
 "wait_read":wait_read,
 "wait_write":wait_write,
 "wait_timed_read":wait_timed_read,
 "wait_timed_write":wait_timed_write,
 "select":select,
 "wait_pid":wait_pid,
 "caml_thread_yield":
 function(prim){return Primtivie["caml_thread_yield"](prim);},
 "caml_thread_sigmask":
 function(prim,prim){return Primtivie["caml_thread_sigmask"](prim$1,prim);},
 "caml_wait_signal":
 function(prim){return Primtivie["caml_wait_signal"](prim);}};

