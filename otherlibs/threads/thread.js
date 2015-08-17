// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var critical_section=[0,/* false */0];


var $$yield=function(param){return CamlPrimitive["thread_yield"](/* () */0);};

var
 sleep=
  function(param)
   {critical_section[1]=/* false */0;
    return CamlPrimitive["thread_sleep"](/* () */0);
    };

var delay=function(duration){return CamlPrimitive["thread_delay"](duration);};

var join=function(th){return CamlPrimitive["thread_join"](th);};

var wakeup=function(pid){return CamlPrimitive["thread_wakeup"](pid);};

var $$self=function(param){return CamlPrimitive["thread_self"](/* () */0);};

var kill=function(pid){return CamlPrimitive["thread_kill"](pid);};

var
 exit=
  function(param)
   {return CamlPrimitive["thread_kill"]
            (CamlPrimitive["thread_self"](/* () */0));
    };

var select_aux=function(arg){return CamlPrimitive["thread_select"](arg);};

var
 select=
  function(readfds,writefds,exceptfds,delay)
   {var match=select_aux(/* tuple */[0,readfds,writefds,exceptfds,delay]);
    
    var exit$1;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         var e=match[3];
         
         var w=match[2];
         
         var r=match[1];
         
         return /* tuple */[0,r,w,e];
         
        default:exit$1=20;}}
    
    switch(exit$1)
     {case 20:return [/* tuple */0,/* [] */0,/* [] */0,/* [] */0];}
    };

var wait_read=function(fd){return CamlPrimitive["thread_wait_read"](fd);};

var wait_write=function(fd){return CamlPrimitive["thread_wait_write"](fd);};

var
 wait_timed_read_aux=
  function(arg){return CamlPrimitive["thread_wait_timed_read"](arg);};

var
 wait_timed_write_aux=
  function(arg){return CamlPrimitive["thread_wait_timed_write"](arg);};

var
 wait_timed_read=
  function(fd,delay)
   {var match=wait_timed_read_aux(/* tuple */[0,fd,delay]);
    
    var exit$1;
    
    if(typeof match==="number")
     {if(match>=3){return /* true */1;}else{exit$1=14;}}
    else
     {exit$1=14;}
    
    switch(exit$1){case 14:return /* false */0;}
    };

var
 wait_timed_write=
  function(fd,delay)
   {var match=wait_timed_write_aux(/* tuple */[0,fd,delay]);
    
    var exit$1;
    
    if(typeof match==="number")
     {if(match>=3){return /* true */1;}else{exit$1=12;}}
    else
     {exit$1=12;}
    
    switch(exit$1){case 12:return /* false */0;}
    };

var wait_pid_aux=function(pid){return CamlPrimitive["thread_wait_pid"](pid);};

var
 wait_pid=
  function(pid)
   {var match=wait_pid_aux(pid);
    
    var exit$1;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:
         var status=match[2];
         
         var pid$1=match[1];
         
         return /* tuple */[0,pid$1,status];
         
        default:exit$1=9;}}
    
    switch(exit$1)
     {case 9:return Pervasives["invalid_arg"]("Thread.wait_pid");}
    };

var
 wait_signal=
  function(sigs)
   {var gotsig=[0,0];
    
    var $$self$1=CamlPrimitive["thread_self"](/* () */0);
    
    var sighandler=function(s){gotsig[1]=s;return wakeup($$self$1);};
    
    var
     oldhdlrs=
      List["map"]
       (function(s)
         {return CamlPrimitive["caml_install_signal_handler"]
                  (s,/* Signal_handle */[0,sighandler]);
          },
        sigs);
    
    gotsig[1]===0?sleep(/* () */0):0;
    
    List["iter2"](Sys["set_signal"],sigs,oldhdlrs);
    return gotsig[1];
    };

var
 create=
  function(fn,arg)
   {return CamlPrimitive["thread_new"]
            (function(param)
              {try
                {fn(arg);return exit(/* () */0);}
               catch(x)
                {Pervasives["flush"](Pervasives["stdout"]);
                 Pervasives["flush"](Pervasives["stderr"]);
                 CamlPrimitive["thread_uncaught_exception"](x);
                 return exit(/* () */0);
                 }
               });
    };

var
 preempt=
  function(signal)
   {return critical_section[1]
            ?/* () */0
            :CamlPrimitive["thread_request_reschedule"](/* () */0);
    };

CamlPrimitive["thread_initialize"](/* () */0);
Sys["set_signal"](Sys["sigvtalrm"],/* Signal_handle */[0,preempt]),
CamlPrimitive["thread_initialize_preemption"](/* () */0);
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

