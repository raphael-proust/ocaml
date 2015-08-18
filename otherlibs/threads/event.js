// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Random=require("./random.js");
var Queue=require("./queue.js");
var Condition=require("./condition.js");
var $$Array=require("./array.js");
var Mutex=require("./mutex.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 new_channel=
  function(param)
   {return /* record */[0,
            Queue["create"](/* () */0),
            Queue["create"](/* () */0)];
    };

var masterlock=Mutex["create"](/* () */0);

var
 do_aborts=
  function(abort_env,genev,performed)
   {if(abort_env!==/* [] */0)
     {if(performed>=0)
       {var ids_done=genev[performed+1][2];
        
        return List["iter"]
                (function(param)
                  {return !List["mem"](param[1],ids_done)
                           ?param[2](/* () */0)
                           :0;
                   },
                 abort_env);
        }
      else
       {return List["iter"]
                (function(param){return param[2](/* () */0);},abort_env);
        }
      }
    else
     {return 0;}
    };

var
 basic_sync=
  function(abort_env,genev)
   {var performed=[0,-1];
    
    var condition=Condition["create"](/* () */0);
    
    var
     bev=
      CamlPrimitive["caml_make_vect"]
       (/* -1 for tag */genev["length"]-1,genev[1][1](performed,condition,0));
    
    for(var i=1;i<=/* -1 for tag */genev["length"]-1-1;i++)
     {bev[i+1]=genev[i+1][1](performed,condition,i)}
    
    var
     poll_events=
      function(i)
       {return i>=/* -1 for tag */bev["length"]-1
                ?/* false */0
                :bev[i+1][1](/* () */0)||poll_events(i+1);
        };
    
    Mutex["lock"](masterlock);
    if(!poll_events(0))
     {for(var i$1=0;i$1<=/* -1 for tag */bev["length"]-1-1;i$1++)
       {bev[i$1+1][2](/* () */0)}
      
      Condition["wait"](condition,masterlock)}
    else
     {}
    
    Mutex["unlock"](masterlock);
    if(abort_env===/* [] */0)
     {return bev[performed[1]+1][3](/* () */0);}
    else
     {var num=performed[1];
      
      var result=bev[num+1][3](/* () */0);
      
      do_aborts(abort_env,genev,num);
      return result;
      }
    };

var
 scramble_array=
  function(a)
   {var len=/* -1 for tag */a["length"]-1;
    
    if(len===0){Pervasives["invalid_arg"]("Event.choose")}
    
    for(var i=len-1;i>=1;i--)
     {var j=Random["int"](i+1);var temp=a[i+1];a[i+1]=a[j+1],a[j+1]=temp}
    
    return a;
    };

var count=[0,0];

var gensym=function(param){count[0]++;return count[1];};

var
 flatten_event=
  function(abort_list,accu,accu_abort,ev)
   {switch(ev[0])
     {case 0:
       return /* tuple */[0,
               /* :: */[0,/* tuple */[0,ev[1],abort_list],accu],
               accu_abort];
       
      case 1:
       var
        flatten_list=
         function(accu$prime,accu_abort$prime,param)
          {if(param)
            {var
              match=
               flatten_event(abort_list,accu$prime,accu_abort$prime,param[1]);
             
             return flatten_list(match[1],match[2],param[2]);
             }
           else
            {return /* tuple */[0,accu$prime,accu_abort$prime];}
           };
       
       return flatten_list(accu,accu_abort,ev[1]);
       
      case 2:
       var id=gensym(/* () */0);
       
       return flatten_event
               (/* :: */[0,id,abort_list],
                accu,
                /* :: */[0,/* tuple */[0,id,ev[2]],accu_abort],
                ev[1]);
       
      case 3:
       return flatten_event(abort_list,accu,accu_abort,ev[1](/* () */0));
      }
    };

var
 sync=
  function(ev)
   {var match=flatten_event(/* [] */0,/* [] */0,/* [] */0,ev);
    
    return basic_sync(match[2],scramble_array($$Array["of_list"](match[1])));
    };

var
 basic_poll=
  function(abort_env,genev)
   {var performed=[0,-1];
    
    var condition=Condition["create"](/* () */0);
    
    var
     bev=
      CamlPrimitive["caml_make_vect"]
       (/* -1 for tag */genev["length"]-1,genev[1][1](performed,condition,0));
    
    for(var i=1;i<=/* -1 for tag */genev["length"]-1-1;i++)
     {bev[i+1]=genev[i+1][1](performed,condition,i)}
    
    var
     poll_events=
      function(i)
       {return i>=/* -1 for tag */bev["length"]-1
                ?/* false */0
                :bev[i+1][1](/* () */0)||poll_events(i+1);
        };
    
    Mutex["lock"](masterlock);
    var ready=poll_events(0);
    
    if(ready)
     {Mutex["unlock"](masterlock);
      var result=/* Some */[0,bev[performed[1]+1][3](/* () */0)];
      
      do_aborts(abort_env,genev,performed[1]);
      return result;
      }
    else
     {performed[1]=0;
      Mutex["unlock"](masterlock);
      do_aborts(abort_env,genev,-1);
      return /* None */0;
      }
    };

var
 poll=
  function(ev)
   {var match=flatten_event(/* [] */0,/* [] */0,/* [] */0,ev);
    
    return basic_poll(match[2],scramble_array($$Array["of_list"](match[1])));
    };

var
 cleanup_queue=
  function(q)
   {var q$prime=Queue["create"](/* () */0);
    
    Queue["iter"]
     (function(c){return c[1][1]===-1?Queue["add"](c,q$prime):0;},q);
    return q$prime;
    };

var
 always=
  function(data)
   {return /* Communication */[0,
            function(performed,condition,evnum)
             {return /* record */[0,
                      function(param){performed[1]=evnum;return /* true */1;},
                      function(param){return /* () */0;},
                      function(param){return data;}];
              }];
    };

var
 send=
  function(channel,data)
   {return /* Communication */[0,
            function(performed,condition,evnum)
             {var
               wcomm=
                /* record */[0,performed,condition,/* Some */[0,data],evnum];
              
              return /* record */[0,
                      function(param)
                       {var
                         poll$1=
                          function(param$1)
                           {var rcomm=Queue["take"](channel[2]);
                            
                            return rcomm[1][1]>=0
                                    ?poll$1(/* () */0)
                                    :(rcomm[3]=
                                      wcomm[3],
                                      performed[1]=
                                      evnum,
                                      rcomm[1][1]=
                                      rcomm[4],
                                      Condition["signal"](rcomm[2]));
                            };
                        
                        try
                         {poll$1(/* () */0);return /* true */1;}
                        catch(exn)
                         {if(exn===Queue["Empty"])
                           {return /* false */0;}
                          else
                           {throw exn;}
                          }
                        },
                      function(param)
                       {channel[1]=cleanup_queue(channel[1]);
                        return Queue["add"](wcomm,channel[1]);
                        },
                      function(param){return /* () */0;}];
              }];
    };

var
 receive=
  function(channel)
   {return /* Communication */[0,
            function(performed,condition,evnum)
             {var rcomm=/* record */[0,performed,condition,/* None */0,evnum];
              
              return /* record */[0,
                      function(param)
                       {var
                         poll$1=
                          function(param$1)
                           {var wcomm=Queue["take"](channel[1]);
                            
                            return wcomm[1][1]>=0
                                    ?poll$1(/* () */0)
                                    :(rcomm[3]=
                                      wcomm[3],
                                      performed[1]=
                                      evnum,
                                      wcomm[1][1]=
                                      wcomm[4],
                                      Condition["signal"](wcomm[2]));
                            };
                        
                        try
                         {poll$1(/* () */0);return /* true */1;}
                        catch(exn)
                         {if(exn===Queue["Empty"])
                           {return /* false */0;}
                          else
                           {throw exn;}
                          }
                        },
                      function(param)
                       {channel[2]=cleanup_queue(channel[2]);
                        return Queue["add"](rcomm,channel[2]);
                        },
                      function(param)
                       {var match=rcomm[3];
                        
                        return match
                                ?match[1]
                                :Pervasives["invalid_arg"]("Event.receive");
                        }];
              }];
    };

var choose=function(evl){return /* Choose */[1,evl];};

var wrap_abort=function(ev,fn){return /* WrapAbort */[2,ev,fn];};

var guard=function(fn){return /* Guard */[3,fn];};

var
 wrap=
  function(ev,fn)
   {switch(ev[0])
     {case 0:
       var genev=ev[1];
       
       return /* Communication */[0,
               function(performed,condition,evnum)
                {var bev=genev(performed,condition,evnum);
                 
                 return /* record */[0,
                         bev[1],
                         bev[2],
                         function(param){return fn(bev[3](/* () */0));}];
                 }];
       
      case 1:
       return /* Choose */[1,
               List["map"](function(ev){return wrap(ev,fn);},ev[1])];
       
      case 2:return /* WrapAbort */[2,wrap(ev[1],fn),ev[2]];
      case 3:
       var gu=ev[1];
       
       return /* Guard */[3,function(param){return wrap(gu(/* () */0),fn);}];
       
      }
    };

var select=function(evl){return sync(/* Choose */[1,evl]);};

module["exports"]=
{"new_channel":new_channel,
 "send":send,
 "receive":receive,
 "always":always,
 "choose":choose,
 "wrap":wrap,
 "wrap_abort":wrap_abort,
 "guard":guard,
 "sync":sync,
 "select":select,
 "poll":poll};

