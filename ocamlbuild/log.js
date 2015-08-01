var Display=require("Display");
var Pervasives=require("Pervasives");
var Queue=require("Queue");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");

var mode=function(param){return 1;};

var Debug=[0,mode];

var mode$1=Debug[1];

var level=[0,1];

var classic_display=[0,0];

var internal_display=[0,0];

var
 failsafe_display=
  [246,
   function(param)
    {return Display["create"](0,[0,920812018],0,0,0,[0,level[1]],0);}];

var
 $unknown$neg=
  function(r)
   {var match=r[1];
    
    if(match){return match[1];}else{return My_std["!*"](failsafe_display);}
    };

var
 init=
  function(log_file)
   {if
     (classic_display[1]||
      My_std["!*"](My_unix["is_degraded"])||
      level[1]<=
      0||
      !My_unix["stdout_isatty"](0))
     {var mode$2=920812018;}
    else
     {var mode$2=-369468030;}
    
    return internal_display[1]=
           [0,Display["create"](0,[0,mode$2],0,0,log_file,[0,level[1]],0)],
           0;
    };

var
 raw_dprintf=
  function(log_level)
   {return Display["dprintf"]([0,log_level],$unknown$neg(internal_display));};

var
 dprintf=
  function(log_level,fmt)
   {return raw_dprintf
            (log_level,
             Pervasives["^^"]
              ([0,[18,[1,[0,[11,"<2>",0],"<2>"]],0],"@[<2>"],
               Pervasives["^^"](fmt,[0,[17,0,[17,4,0]],"@]@."])));
    };

var eprintf=function(fmt){return dprintf(-1,fmt);};

var
 update=
  function(param){return Display["update"]($unknown$neg(internal_display));};

var
 $$event=
  function(pretend,x)
   {return Display["event"]($unknown$neg(internal_display),pretend,x);};

var
 display=
  function(x){return Display["display"]($unknown$neg(internal_display),x);};

var do_at_end=Queue["create"](0);

var already_asked=Hashtbl["create"](0,10);

var
 at_end_always=
  function(name,thunk)
   {if(!Hashtbl["mem"](already_asked,name))
     {Hashtbl["add"](already_asked,name,0);
      return Queue["add"](thunk,do_at_end);
      }
    else
     {return 0;}
    };

var
 at_end=
  function(name,thunk)
   {return at_end_always
            (name,
             function(param)
              {if(param>=94326179){return thunk(106380200);}else{return 0;}});
    };

var
 at_failure=
  function(name,thunk)
   {return at_end_always
            (name,
             function(param)
              {if(param>=106380200){return thunk(106380200);}else{return 0;}});
    };

var
 finish=
  function(how,param)
   {while(!Queue["is_empty"](do_at_end))
     {var actions=Queue["copy"](do_at_end);
      
      Queue["clear"](do_at_end),
      Queue["iter"]
       (function(thunk){return thunk(how?how[1]:-249890668);},actions)}
    
    var match=internal_display[1];
    
    if(match){return Display["finish"](how,match[1]);}else{return 0;}
    };


module["exports"]=
{"level":level,
 "dprintf":dprintf,
 "eprintf":eprintf,
 "raw_dprintf":raw_dprintf,
 "classic_display":classic_display,
 "event":$$event,
 "init":init,
 "finish":finish,
 "display":display,
 "update":update,
 "mode":mode$1,
 "at_end":at_end,
 "at_failure":at_failure};

