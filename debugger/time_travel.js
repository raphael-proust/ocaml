// Generated CODE, PLEASE EDIT WITH CARE 

var Question=require("./question.js");
var Breakpoints=require("./breakpoints.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Trap_barrier=require("./trap_barrier.js");
var Symbols=require("./symbols.js");
var Printf=require("./printf.js");
var Events=require("./events.js");
var Checkpoints=require("./checkpoints.js");
var Program_loading=require("./program_loading.js");
var Primitives=require("./primitives.js");
var Misc=require("./misc.js");
var Debugger_config=require("./debugger_config.js");
var Exec=require("./exec.js");
var Int64ops=require("./int64ops.js");
var Input_handling=require("./input_handling.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");
var Debugcom=require("./debugcom.js");


var
 Current_checkpoint_lost=
  CamlPrimitive["caml_set_oo_id"]
   ([248,"Time_travel.Current_checkpoint_lost",0]);

var
 Current_checkpoint_lost_start_at=
  CamlPrimitive["caml_set_oo_id"]
   ([248,"Time_travel.Current_checkpoint_lost_start_at",0]);

var
 remove_1st=
  function(key,list)
   {var
     remove=
      function(param)
       {if(param)
         {var l=param[2];
          
          var a=param[1];
          
          return a===key?l:/* :: */[0,a,remove(l)];
          }
        else
         {return /* [] */0;}
        };
    
    return remove(list);
    };

var debug_time_travel=[0,/* false */0];

var
 insert_checkpoint=
  function(checkpoint)
   {var time=checkpoint[1];
    
    var
     traverse=
      function(l$prime)
       {if(l$prime)
         {var a=l$prime[1];
          
          var t=a[1];
          
          if(t>time)
           {return /* :: */[0,a,traverse(l$prime[2])];}
          else
           {if(t===time)
             {throw Pervasives["Exit"];}
            else
             {return /* :: */[0,checkpoint,l$prime];}
            }
          }
        else
         {return /* :: */[0,checkpoint,/* [] */0];}
        };
    
    return Checkpoints["checkpoints"][1]=
           traverse(Checkpoints["checkpoints"][1]),
           0;
    };

var
 remove_checkpoint=
  function(checkpoint)
   {return Checkpoints["checkpoints"][1]=
           remove_1st(checkpoint,Checkpoints["checkpoints"][1]),
           0;
    };

var
 wait_for_connection=
  function(checkpoint)
   {try
     {return Exec["unprotect"]
              (function(param)
                {var
                  old_controller=
                   Input_handling["current_controller"]
                    (Program_loading["connection"][1]);
                 
                 return Input_handling["execute_with_other_controller"]
                         (function(fd)
                           {old_controller(fd);
                            return checkpoint[4]===/* true */1
                                    ?Input_handling["exit_main_loop"](/* () */0)
                                    :0;
                            },
                          Program_loading["connection"][1],
                          Input_handling["main_loop"]);
                 });
      }
    catch(exn)
     {if(exn===Sys["Break"])
       {checkpoint[7]=Checkpoints["root"];
        remove_checkpoint(checkpoint);
        checkpoint[2]=-1;
        throw Sys["Break"];
        }
      else
       {throw exn;}
      }
    };

var
 set_current_checkpoint=
  function(checkpoint)
   {if(debug_time_travel[1])
     {Pervasives["prerr_endline"]
       (Pervasives["^"]("Select: ",Pervasives["string_of_int"](checkpoint[2])))}
    
    if(!checkpoint[4]){wait_for_connection(checkpoint)}
    
    Checkpoints["current_checkpoint"][1]=checkpoint;
    return Debugcom["set_current_connection"](checkpoint[3]);
    };

var
 kill_checkpoint=
  function(checkpoint)
   {if(debug_time_travel[1])
     {Pervasives["prerr_endline"]
       (Pervasives["^"]("Kill: ",Pervasives["string_of_int"](checkpoint[2])))}
    
    if(checkpoint[2]>0)
     {if(!checkpoint[4]){wait_for_connection(checkpoint)}
      
      Debugcom["stop"](checkpoint[3]);
      if(checkpoint[7][2]>0){Debugcom["wait_child"](checkpoint[7][3])}
      
      checkpoint[7]=
      Checkpoints["root"],
      Primitives["close_io"](checkpoint[3]),
      Input_handling["remove_file"](checkpoint[3]),
      remove_checkpoint(checkpoint)}
    else
     {}
    
    return checkpoint[2]=-1,0;
    };

var
 cut=
  function(t)
   {var
     cut_t=
      function(l$prime)
       {if(l$prime)
         {var a=l$prime[1];
          
          var t$prime=a[1];
          
          if(t$prime<=t)
           {return /* tuple */[0,/* [] */0,l$prime];}
          else
           {var match=cut_t(l$prime[2]);
            
            return /* tuple */[0,/* :: */[0,a,match[1]],match[2]];
            }
          }
        else
         {return [/* tuple */0,/* [] */0,/* [] */0];}
        };
    
    return cut_t;
    };

var
 cut2=
  function(t0,t,l)
   {var
     cut2_t0=
      function(t,l)
       {if(l)
         {var
           match=
            cut(Int64ops["--"](Int64ops["--"](t0,t),Int64ops["_1"]),l);
          
          var l$1=cut2_t0(Int64ops["++"](t,t),match[2]);
          
          return /* :: */[0,match[1],l$1];
          }
        else
         {return /* [] */0;}
        };
    
    var match=cut(Int64ops["--"](t0,Int64ops["_1"]),l);
    
    return /* :: */[0,match[1],cut2_t0(t,match[2])];
    };

var
 chk_merge2=
  function(cont)
   {var
     chk_merge2_cont=
      function(param)
       {if(param)
         {var l=param[2];
          
          var a=param[1];
          
          if(l)
           {var match=chk_merge2_cont(l);
            
            return /* tuple */[0,match[1],/* :: */[0,a,match[2]]];
            }
          else
           {return /* tuple */[0,/* :: */[0,a,cont[1]],cont[2]];}
          }
        else
         {return cont;}
        };
    
    return chk_merge2_cont;
    };

var
 chk_merge=
  function(param)
   {return param
            ?chk_merge2(chk_merge(param[2]),param[1])
            :[/* tuple */0,/* [] */0,/* [] */0];
    };

var
 new_checkpoint_list=
  function(checkpoint_count,accepted,rejected)
   {if(List["length"](accepted)>=checkpoint_count)
     {var match=Primitives["list_truncate2"](checkpoint_count,accepted);
      
      return /* tuple */[0,match[1],Pervasives["@"](match[2],rejected)];
      }
    else
     {var
       match$1=
        Primitives["list_truncate2"]
         (checkpoint_count-List["length"](accepted),rejected);
      
      return /* tuple */[0,
              List["merge"]
               (function(param,param$1)
                 {var t1=param[1];
                  
                  var t2=param$1[1];
                  
                  return CamlPrimitive["caml_int64_compare"](t2,t1);
                  },
                accepted,
                match$1[1]),
              match$1[2]];
      }
    };

var
 clean_checkpoints=
  function(time,checkpoint_count)
   {var match=cut(time,Checkpoints["checkpoints"][1]);
    
    var
     match$1=
      chk_merge
       (cut2(time,Debugger_config["checkpoint_small_step"][1],match[2]));
    
    var match$2=new_checkpoint_list(checkpoint_count,match$1[1],match[1]);
    
    List["iter"](kill_checkpoint,Pervasives["@"](match$2[2],match$1[2]));
    return Checkpoints["checkpoints"][1]=match$2[1],0;
    };

var
 find_checkpoint_before=
  function(time)
   {var
     find=
      function(param)
       {if(param)
         {var a=param[1];var t=a[1];return t>time?find(param[2]):a;}
        else
         {Pervasives["print_string"]("Can't go that far in the past !");
          Pervasives["print_newline"](/* () */0);
          if(Question["yes_or_no"]("Reload program"))
           {Program_loading["load_program"](/* () */0);
            return find(Checkpoints["checkpoints"][1]);
            }
          else
           {throw Debugger_config["Toplevel"];}
          }
        };
    
    return find(Checkpoints["checkpoints"][1]);
    };

var
 duplicate_current_checkpoint=
  function(param)
   {var checkpoint=Checkpoints["current_checkpoint"][1];
    
    if(!checkpoint[4]){wait_for_connection(checkpoint)}
    
    var
     new_checkpoint=
      /* record */[0,
       checkpoint[1],
       0,
       checkpoint[3],
       /* false */0,
       checkpoint[5],
       /* C_stopped */0,
       checkpoint,
       checkpoint[8],
       checkpoint[9],
       checkpoint[10]];
    
    Checkpoints["checkpoints"][1]=
    Primitives["list_replace"]
     (checkpoint,new_checkpoint,Checkpoints["checkpoints"][1]);
    set_current_checkpoint(checkpoint);
    clean_checkpoints
     (Int64ops["++"](checkpoint[1],Int64ops["_1"]),
      Debugger_config["checkpoint_max_count"][1]-1);
    if(new_checkpoint[2]===0)
     {var match=Debugcom["do_checkpoint"](/* () */0);
      
      if(match)
       {var pid=match[1];
        
        new_checkpoint[2]=pid;
        return debug_time_travel[1]
                ?Pervasives["prerr_endline"]
                  (Pervasives["^"]
                    ("Waiting for connection: ",
                     Pervasives["string_of_int"](pid)))
                :0;
        }
      else
       {Pervasives["prerr_endline"]
         ("A fork failed. Reducing maximum number of checkpoints.");
        Debugger_config["checkpoint_max_count"][1]=
        List["length"](Checkpoints["checkpoints"][1])-
        1;
        return remove_checkpoint(new_checkpoint);
        }
      }
    else
     {return 0;}
    };

var interrupted=[0,/* false */0];

var last_breakpoint=[0,/* None */0];

var
 stop_on_event=
  function(report)
   {var exit;
    
    var switcher=-1+report[1];
    
    if(2<switcher>>>0)
     {exit=50;}
    else
     {switch(switcher)
       {case 0:
         last_breakpoint[1]=/* Some */[0,/* tuple */[0,report[4],report[3]]];
         Symbols["update_current_event"](/* () */0);
         var match=Events["current_event"][1];
         
         return match?/* () */0:find_event(/* () */0);
         
        case 1:exit=50;
        case 2:return find_event(/* () */0);
        }
      }
    
    switch(exit){case 50:return /* () */0;}
    };

var
 find_event=
  function(param)
   {if(debug_time_travel[1])
     {Pervasives["print_string"]("Searching next event..."),
      Pervasives["print_newline"](/* () */0)}
    
    var report=Debugcom["do_go"](Int64ops["_1"]);
    
    Checkpoints["current_checkpoint"][1][5]=/* Some */[0,report];
    return stop_on_event(report);
    };

var
 internal_step=
  function(duration)
   {var match=Checkpoints["current_report"](/* () */0);
    
    var exit;
    
    if(match)
     {var match$1=match[1][1];
      
      var exit$1;
      
      if(match$1!==2)
       {if(match$1>=4){exit$1=48;}else{exit=47;}}
      else
       {exit$1=48;}
      
      switch(exit$1){case 48:return /* () */0;}
      }
    else
     {exit=47;}
    
    switch(exit)
     {case 47:
       Exec["protect"]
        (function(param)
          {Debugger_config["make_checkpoints"][1]
            ?duplicate_current_checkpoint(/* () */0)
            :remove_checkpoint(Checkpoints["current_checkpoint"][1]);
           
           Breakpoints["update_breakpoints"](/* () */0);
           Trap_barrier["update_trap_barrier"](/* () */0);
           Checkpoints["current_checkpoint"][1][6]=
           /* C_running */[0,duration];
           var report=Debugcom["do_go"](duration);
           
           Checkpoints["current_checkpoint"][1][5]=/* Some */[0,report];
           Checkpoints["current_checkpoint"][1][6]=/* C_stopped */0;
           report[1]===/* Event */0
            ?(Checkpoints["current_checkpoint"][1][1]=
              Int64ops["++"](Checkpoints["current_checkpoint"][1][1],duration),
              interrupted[1]=
              /* false */0,
              last_breakpoint[1]=
              /* None */0,
              0)
            :(Checkpoints["current_checkpoint"][1][1]=
              Int64ops["++"]
               (Int64ops["--"]
                 (Int64ops["++"]
                   (Checkpoints["current_checkpoint"][1][1],duration),
                  report[2]),
                Int64ops["_1"]),
              interrupted[1]=
              /* true */1,
              last_breakpoint[1]=
              /* None */0,
              stop_on_event(report));
           
           try
            {return insert_checkpoint(Checkpoints["current_checkpoint"][1]);}
           catch(exn)
            {if(exn===Pervasives["Exit"])
              {kill_checkpoint(Checkpoints["current_checkpoint"][1]);
               return set_current_checkpoint
                       (find_checkpoint_before
                         (Checkpoints["current_time"](/* () */0)));
               }
             else
              {throw exn;}
             }
           });
       return debug_time_travel[1]
               ?(Pervasives["print_string"]("Checkpoints: pid(time)"),
                 Pervasives["print_newline"](/* () */0),
                 List["iter"]
                  (function(param)
                    {var time=param[1];
                     
                     var pid=param[2];
                     
                     var valid=param[4];
                     
                     return Printf["printf"]
                             ([/* Format */0,
                               [/* Int */4,
                                /* Int_d */0,
                                /* No_padding */0,
                                /* No_precision */0,
                                [/* Char_literal */12,
                                 40,
                                 [/* Int64 */7,
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  [/* Char_literal */12,
                                   41,
                                   [/* String */2,
                                    /* No_padding */0,
                                    [/* Char_literal */12,32,/* End_of_format */0]]]]]],
                               "%d(%Ld)%s "],
                              pid,
                              time,
                              valid?"":"(invalid)");
                     },
                   Checkpoints["checkpoints"][1]),
                 Pervasives["print_newline"](/* () */0))
               :0;
       
      }
    };

var
 new_checkpoint=
  function(pid,fd)
   {var
     new_checkpoint$1=
      /* record */[0,
       Int64ops["_0"],
       pid,
       fd,
       /* true */1,
       /* None */0,
       /* C_stopped */0,
       Checkpoints["root"],
       0,
       /* [] */0,
       0];
    
    return insert_checkpoint(new_checkpoint$1);
    };

var
 set_file_descriptor=
  function(pid,fd)
   {var
     find=
      function(param)
       {if(param)
         {var checkpoint=param[1];
          
          var pid$prime=checkpoint[2];
          
          return pid!==pid$prime
                  ?find(param[2])
                  :(checkpoint[3]=fd,checkpoint[4]=/* true */1,/* true */1);
          }
        else
         {Pervasives["prerr_endline"]("Unexpected connection");
          Primitives["close_io"](fd);
          return /* false */0;
          }
        };
    
    if(debug_time_travel[1])
     {Pervasives["prerr_endline"]
       (Pervasives["^"]("New connection: ",Pervasives["string_of_int"](pid)))}
    
    return find
            (/* :: */[0,
              Checkpoints["current_checkpoint"][1],
              Checkpoints["checkpoints"][1]]);
    };

var
 kill_all_checkpoints=
  function(param)
   {return List["iter"]
            (kill_checkpoint,
             /* :: */[0,
              Checkpoints["current_checkpoint"][1],
              Checkpoints["checkpoints"][1]]);
    };

var
 forget_process=
  function(fd,pid)
   {var
     checkpoint=
      List["find"]
       (function(c){return c[2]===pid;},
        /* :: */[0,
         Checkpoints["current_checkpoint"][1],
         Checkpoints["checkpoints"][1]]);
    
    Printf["eprintf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Lost connection with process ",
        [/* Int */4,
         /* Int_d */0,
         /* No_padding */0,
         /* No_precision */0,
         /* End_of_format */0]],
       "Lost connection with process %d"],
      pid);
    var kont;
    if(checkpoint===Checkpoints["current_checkpoint"][1])
     {Printf["eprintf"]
       ([/* Format */0,
         [/* String_literal */11," (active process)\n",/* End_of_format */0],
         " (active process)\n"]);
      var match=Checkpoints["current_checkpoint"][1][6];
      
      if(match)
       {var duration=match[1];
        
        Printf["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "between time ",
            [/* Int64 */7,
             /* Int_d */0,
             /* No_padding */0,
             /* No_precision */0,
             [/* String_literal */11,
              " and time ",
              [/* Int64 */7,
               /* Int_d */0,
               /* No_padding */0,
               /* No_precision */0,
               /* End_of_format */0]]]],
           "between time %Ld and time %Ld"],
          Checkpoints["current_checkpoint"][1][1],
          Int64ops["++"](Checkpoints["current_checkpoint"][1][1],duration));
        kont=
        function(param)
         {throw [0,
                 Current_checkpoint_lost_start_at,
                 Checkpoints["current_checkpoint"][1][1],
                 duration];
          };
        }
      else
       {Printf["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "at time ",
            [/* Int64 */7,
             /* Int_d */0,
             /* No_padding */0,
             /* No_precision */0,
             /* End_of_format */0]],
           "at time %Ld"],
          Checkpoints["current_checkpoint"][1][1]);
        kont=function(param){throw Current_checkpoint_lost;};
        }
      }
    else
     {kont=function(prim){return prim;};}
    
    Printf["eprintf"]
     ([/* Format */0,[/* Char_literal */12,10,/* End_of_format */0],"\n"]);
    Pervasives["flush"](Pervasives["stderr"]);
    Input_handling["remove_file"](fd);
    Primitives["close_io"](checkpoint[3]);
    Input_handling["remove_file"](checkpoint[3]);
    remove_checkpoint(checkpoint);
    checkpoint[2]=-1;
    if(checkpoint[7][2]>0){Debugcom["wait_child"](checkpoint[7][3])}
    
    return kont(/* () */0);
    };

var
 recover=
  function(param)
   {return set_current_checkpoint
            (find_checkpoint_before(Checkpoints["current_time"](/* () */0)));
    };

var
 step_forward=
  function(duration)
   {if(duration>Debugger_config["checkpoint_small_step"][1])
     {var
       first_step=
        duration>Debugger_config["checkpoint_big_step"][1]
         ?Debugger_config["checkpoint_big_step"][1]
         :Debugger_config["checkpoint_small_step"][1];
      
      internal_step(first_step);
      return !interrupted[1]
              ?step_forward(Int64ops["--"](duration,first_step))
              :0;
      }
    else
     {return duration!==Int64ops["_0"]?internal_step(duration):0;}
    };

var
 internal_go_to=
  function(time)
   {var duration=Int64ops["--"](time,Checkpoints["current_time"](/* () */0));
    
    return duration>Int64ops["_0"]
            ?Breakpoints["execute_without_breakpoints"]
              (function(param){return step_forward(duration);})
            :0;
    };

var
 go_to=
  function(time)
   {var checkpoint=find_checkpoint_before(time);
    
    set_current_checkpoint(checkpoint);
    return internal_go_to(time);
    };

var
 find_last_breakpoint=
  function(max_time)
   {var
     find=
      function($$break)
       {var time=Checkpoints["current_time"](/* () */0);
        
        step_forward(Int64ops["--"](max_time,time));
        var match=last_breakpoint[1];
        
        var match$1=Breakpoints["temporary_breakpoint_position"][1];
        
        var exit;
        
        if(match)
         {if(Checkpoints["current_time"](/* () */0)<max_time)
           {return find(last_breakpoint[1]);}
          else
           {if(match$1)
             {if(match[1][1]===match$1[1])
               {return /* tuple */[0,max_time,last_breakpoint[1]];}
              else
               {exit=29;}
              }
            else
             {exit=29;}
            }
          }
        else
         {exit=29;}
        
        switch(exit){case 29:return /* tuple */[0,time,$$break];}
        };
    
    var state=Checkpoints["current_pc_sp"](/* () */0);
    
    var exit;
    
    var $js;
    if(state)
     {if(Breakpoints["breakpoint_at_pc"](state[1][1]))
       {$js=state;}
      else
       {exit=28;}
      }
    else
     {exit=28;}
    
    var $js$1;
    switch(exit){case 28:$js$1=/* None */0;}
    return find($js$1);
    };

var
 back_to=
  function(time,time_max)
   {var match=find_checkpoint_before(Int64ops["pre64"](time_max));
    
    var t=match[1];
    
    go_to(Pervasives["max"](time,t));
    var match$1=find_last_breakpoint(time_max);
    
    var $$break=match$1[2];
    
    var new_time=match$1[1];
    
    return $$break!==/* None */0||new_time<=time
            ?(go_to(new_time),
              interrupted[1]=
              $$break!==
              /* None */0,
              last_breakpoint[1]=
              $$break,
              0)
            :back_to(time,new_time);
    };

var
 step_backward=
  function(duration)
   {var time=Checkpoints["current_time"](/* () */0);
    
    return time>Int64ops["_0"]
            ?back_to
              (Pervasives["max"](Int64ops["_0"],Int64ops["--"](time,duration)),
               time)
            :0;
    };

var
 run=
  function(param)
   {internal_step(Debugger_config["checkpoint_big_step"][1]);
    return !interrupted[1]?run(/* () */0):0;
    };

var
 back_run=
  function(param)
   {return Checkpoints["current_time"](/* () */0)>Int64ops["_0"]
            ?back_to(Int64ops["_0"],Checkpoints["current_time"](/* () */0))
            :0;
    };

var
 step=
  function(duration)
   {return duration>=Int64ops["_0"]
            ?step_forward(duration)
            :step_backward(Int64ops["--"](Int64ops["_0"],duration));
    };

var
 finish=
  function(param)
   {Symbols["update_current_event"](/* () */0);
    var match=Events["current_event"][1];
    
    if(match)
     {Debugcom["set_initial_frame"](/* () */0);
      var match$1=Debugcom["up_frame"](match[1][9]);
      
      var pc=match$1[2];
      
      var frame=match$1[1];
      
      if(frame<0)
       {Pervasives["prerr_endline"]
         ("`finish' not meaningful in outermost frame.");
        throw Debugger_config["Toplevel"];
        }
      else
       {}
      
      try
       {Symbols["any_event_at_pc"](pc)}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {Pervasives["prerr_endline"]
           ("Calling function has no debugging information.");
          throw Debugger_config["Toplevel"];
          }
        else
         {throw exn;}
        }
      
      return Trap_barrier["exec_with_trap_barrier"]
              (frame,
               function(param$1)
                {return Breakpoints["exec_with_temporary_breakpoint"]
                         (pc,
                          function(param$2)
                           {run(/* () */0);
                            var match$2=last_breakpoint[1];
                            
                            var exit;
                            
                            var $js;
                            if(match$2)
                             {var match$3=match$2[1];
                              
                              if(pc===match$3[1])
                               {interrupted[1]=/* false */0;$js=frame!==match$3[2];}
                              else
                               {exit=18;}
                              }
                            else
                             {exit=18;}
                            
                            var $js$1;
                            switch(exit){case 18:$js$1=/* false */0;}
                            while($js$1){}
                            return 0;
                            });
                 });
      }
    else
     {Pervasives["prerr_endline"]
       ("`finish' not meaningful in outermost frame.");
      throw Debugger_config["Toplevel"];
      }
    };

var
 next_1=
  function(param)
   {Symbols["update_current_event"](/* () */0);
    var match=Events["current_event"][1];
    
    if(match)
     {var match$1=Debugcom["initial_frame"](/* () */0);
      
      var frame1=match$1[1];
      
      step(Int64ops["_1"]);
      if(!interrupted[1])
       {Symbols["update_current_event"](/* () */0);
        var match$2=Events["current_event"][1];
        
        if(match$2)
         {var match$3=Debugcom["initial_frame"](/* () */0);
          
          var frame2=match$3[1];
          
          return frame1>=0&&frame2>=0&&frame2-match$2[1][9]>frame1-match[1][9]
                  ?finish(/* () */0)
                  :0;
          }
        else
         {return /* () */0;}
        }
      else
       {return 0;}
      }
    else
     {return step(Int64ops["_1"]);}
    };

var
 next=
  function(n)
   {return n!==0?(next_1(/* () */0),!interrupted[1]?next(n-1):0):/* () */0;};

var
 start=
  function(param)
   {Symbols["update_current_event"](/* () */0);
    var match=Events["current_event"][1];
    
    if(match)
     {var curr_event=match[1];
      
      var match$1=Debugcom["initial_frame"](/* () */0);
      
      var frame=match$1[1];
      
      var match$2=Debugcom["up_frame"](curr_event[9]);
      
      var pc=match$2[2];
      
      if(match$2[1]<0)
       {Pervasives["prerr_endline"]
         ("`start not meaningful in outermost frame.");
        throw Debugger_config["Toplevel"];
        }
      else
       {}
      
      var match$3;
      try
       {match$3=Symbols["any_event_at_pc"](pc);}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {Pervasives["prerr_endline"]
           ("Calling function has no debugging information.");
          throw Debugger_config["Toplevel"];
          }
        else
         {throw exn;}
        }
      
      var match$4=match$3[5];
      
      var
       nargs=
        typeof match$4==="number"
         ?Misc["fatal_error"]("Time_travel.start")
         :match$4[1];
      
      var offset=nargs<4?1:2;
      
      var pc$1=pc-4*offset;
      
      Breakpoints["exec_with_temporary_breakpoint"](pc$1,back_run);
      var match$5=last_breakpoint[1];
      
      var exit;
      
      var $js;
      if(match$5)
       {var match$6=match$5[1];
        
        if(pc$1===match$6[1])
         {step(Int64ops["_minus1"]);
          $js=!interrupted[1]&&match$6[2]-nargs>frame-curr_event[9];
          }
        else
         {exit=5;}
        }
      else
       {exit=5;}
      
      var $js$1;
      switch(exit){case 5:$js$1=/* false */0;}
      while($js$1){}
      return 0;
      }
    else
     {Pervasives["prerr_endline"]("`start not meaningful in outermost frame.");
      throw Debugger_config["Toplevel"];
      }
    };

var
 previous_1=
  function(param)
   {Symbols["update_current_event"](/* () */0);
    var match=Events["current_event"][1];
    
    if(match)
     {var match$1=Debugcom["initial_frame"](/* () */0);
      
      var frame1=match$1[1];
      
      step(Int64ops["_minus1"]);
      if(!interrupted[1])
       {Symbols["update_current_event"](/* () */0);
        var match$2=Events["current_event"][1];
        
        if(match$2)
         {var match$3=Debugcom["initial_frame"](/* () */0);
          
          var frame2=match$3[1];
          
          return frame1>=0&&frame2>=0&&frame2-match$2[1][9]>frame1-match[1][9]
                  ?start(/* () */0)
                  :0;
          }
        else
         {return /* () */0;}
        }
      else
       {return 0;}
      }
    else
     {return step(Int64ops["_minus1"]);}
    };

var
 previous=
  function(n)
   {return n!==0
            ?(previous_1(/* () */0),!interrupted[1]?previous(n-1):0)
            :/* () */0;
    };

module["exports"]=
{"Current_checkpoint_lost":Current_checkpoint_lost,
 "Current_checkpoint_lost_start_at":Current_checkpoint_lost_start_at,
 "new_checkpoint":new_checkpoint,
 "set_file_descriptor":set_file_descriptor,
 "kill_all_checkpoints":kill_all_checkpoints,
 "forget_process":forget_process,
 "recover":recover,
 "go_to":go_to,
 "run":run,
 "back_run":back_run,
 "step":step,
 "finish":finish,
 "next":next,
 "start":start,
 "previous":previous};

