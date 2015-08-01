var Pervasives=require("Pervasives");
var List=require("List");
var Sys=require("Sys");

var critical_section=[0,0];

var $$yield=function(param){return "unknown primitive:thread_yield";};

var
 sleep=
  function(param)
   {critical_section[1]=0,0;return "unknown primitive:thread_sleep";};

var delay=function(duration){return "unknown primitive:thread_delay";};

var join=function(th){return "unknown primitive:thread_join";};

var wakeup=function(pid){return "unknown primitive:thread_wakeup";};

var $$self=function(param){return "unknown primitive:thread_self";};

var kill=function(pid){return "unknown primitive:thread_kill";};

var exit=function(param){return "unknown primitive:thread_kill";};

var select_aux=function(arg){return "unknown primitive:thread_select";};

var
 select=
  function(readfds,writefds,exceptfds,delay$1)
   {var match=select_aux([0,readfds,writefds,exceptfds,delay$1]);
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:var e=match[3];var w=match[2];var r=match[1];return [0,r,w,e];
        default:var exit$1=20;}}
    
    switch(exit$1){case 20:return [0,0,0,0];}
    };

var wait_read=function(fd){return "unknown primitive:thread_wait_read";};

var wait_write=function(fd){return "unknown primitive:thread_wait_write";};

var
 wait_timed_read_aux=
  function(arg){return "unknown primitive:thread_wait_timed_read";};

var
 wait_timed_write_aux=
  function(arg){return "unknown primitive:thread_wait_timed_write";};

var
 wait_timed_read=
  function(fd,delay$1)
   {var match=wait_timed_read_aux([0,fd,delay$1]);
    
    if("unknown primitive:isint")
     {if(match>=3){return 1;}else{var exit$1=14;}}
    else
     {var exit$1=14;}
    
    switch(exit$1){case 14:return 0;}
    };

var
 wait_timed_write=
  function(fd,delay$1)
   {var match=wait_timed_write_aux([0,fd,delay$1]);
    
    if("unknown primitive:isint")
     {if(match>=3){return 1;}else{var exit$1=12;}}
    else
     {var exit$1=12;}
    
    switch(exit$1){case 12:return 0;}
    };

var wait_pid_aux=function(pid){return "unknown primitive:thread_wait_pid";};

var
 wait_pid=
  function(pid)
   {var match=wait_pid_aux(pid);
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:var status=match[2];var pid$1=match[1];return [0,pid$1,status];
        default:var exit$1=9;}}
    
    switch(exit$1)
     {case 9:return Pervasives["invalid_arg"]("Thread.wait_pid");}
    };

var
 wait_signal=
  function(sigs)
   {var gotsig=[0,0];
    
    var $$self$1="unknown primitive:thread_self";
    
    var sighandler=function(s){gotsig[1]=s,0;return wakeup($$self$1);};
    
    var
     oldhdlrs=
      List["map"]
       (function(s){return "unknown primitive:caml_install_signal_handler";},
        sigs);
    
    if(gotsig[1]=0){sleep(0)}else{}
    
    List["iter2"](Sys["set_signal"],sigs,oldhdlrs);
    return gotsig[1];
    };

var create=function(fn,arg){return "unknown primitive:thread_new";};

var
 preempt=
  function(signal)
   {if(critical_section[1])
     {return 0;}
    else
     {return "unknown primitive:thread_request_reschedule";}
    };

"unknown primitive:thread_initialize",
Sys["set_signal"](Sys["sigvtalrm"],[0,preempt]),
"unknown primitive:thread_initialize_preemption",
[0,
 create,
 $$self,
 exit,
 kill,
 delay,
 join,
 wait_read,
 wait_write,
 wait_timed_read,
 wait_timed_write,
 select,
 wait_pid,
 wait_signal,
 $$yield,
 critical_section,
 sleep,
 wakeup];
module["exports"]=
{"create":create,
 "self":$$self,
 "exit":exit,
 "kill":kill,
 "delay":delay,
 "join":join,
 "wait_read":wait_read,
 "wait_write":wait_write,
 "wait_timed_read":wait_timed_read,
 "wait_timed_write":wait_timed_write,
 "select":select,
 "wait_pid":wait_pid,
 "wait_signal":wait_signal,
 "yield":$$yield,
 "critical_section":critical_section,
 "sleep":sleep,
 "wakeup":wakeup};

