// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Unix=require("./unix.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 create=
  function(fn,arg)
   {return CamlPrimitive["caml_thread_new"]
            (function(param)
              {try
                {fn(arg);return /* () */0}
               catch(exn)
                {Pervasives["flush"](Pervasives["stdout"]);
                 Pervasives["flush"](Pervasives["stderr"]);
                 return CamlPrimitive["caml_thread_uncaught_exception"](exn)}
               })};

var
 kill=
  function(th)
   {return Pervasives["invalid_arg"]("Thread.kill: not implemented")};

var
 preempt=
  function(signal){return CamlPrimitive["caml_thread_yield"](/* () */0)};

var match=Sys["os_type"];

switch(match)
 {case "Win32":var preempt_signal=Sys["sigterm"];break;
  default:var preempt_signal=Sys["sigvtalrm"];}

Sys["set_signal"](preempt_signal,/* Signal_handle */[0,preempt]);
CamlPrimitive["caml_thread_initialize"](/* () */0),
Pervasives["at_exit"]
 (function(param)
   {CamlPrimitive["caml_thread_cleanup"](/* () */0);
    return Sys["set_signal"](preempt_signal,/* Signal_default */0)});
var
 delay=
  function(time){return Unix["select"](/* [] */0,/* [] */0,/* [] */0,time)};

var wait_read=function(fd){return /* () */0};

var wait_write=function(fd){return /* () */0};

var
 wait_timed_read=
  function(fd,d)
   {var
     match$1=
      Unix["select"](/* :: */[0,fd,/* [] */0],/* [] */0,/* [] */0,d);
    
    return match$1[1]?/* true */1:/* false */0};

var
 wait_timed_write=
  function(fd,d)
   {var
     match$1=
      Unix["select"](/* [] */0,/* :: */[0,fd,/* [] */0],/* [] */0,d);
    
    return match$1[2]?/* true */1:/* false */0};

var select=Unix["select"];

var wait_pid=function(p){return Unix["waitpid"](/* [] */0,p)};

module["exports"]=
{"create":create,
 "self":function(prim){return CamlPrimitive["caml_thread_self"](prim)},
 "id":function(prim){return CamlPrimitive["caml_thread_id"](prim)},
 "exit":function(prim){return CamlPrimitive["caml_thread_exit"](prim)},
 "kill":kill,
 "delay":delay,
 "join":function(prim){return CamlPrimitive["caml_thread_join"](prim)},
 "wait_read":wait_read,
 "wait_write":wait_write,
 "wait_timed_read":wait_timed_read,
 "wait_timed_write":wait_timed_write,
 "select":select,
 "wait_pid":wait_pid,
 "yield":function(prim){return CamlPrimitive["caml_thread_yield"](prim)},
 "sigmask":
 function(prim,prim$1)
  {return CamlPrimitive["caml_thread_sigmask"](prim,prim$1)},
 "wait_signal":function(prim){return CamlPrimitive["caml_wait_signal"](prim)}};

