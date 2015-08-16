// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Obj=require("./obj.js");
var Primitives=require("./primitives.js");
var Misc=require("./misc.js");
var Int64ops=require("./int64ops.js");
var Input_handling=require("./input_handling.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var conn=[0,Primitives["std_io"]];

var fork_mode=[0,/* Fork_parent */1];

var
 update_follow_fork_mode=
  function(param)
   {var match=fork_mode[1];
    
    if(match!==0){var a=1;}else{var a=0;}
    
    Pervasives["output_char"](conn[1][2],75);
    return Pervasives["output_binary_int"](conn[1][2],a);
    };

var
 set_current_connection=
  function(io_chan)
   {conn[1]=io_chan;return update_follow_fork_mode(/* () */0);};

var
 set_event=
  function(pos)
   {Pervasives["output_char"](conn[1][2],101);
    return Pervasives["output_binary_int"](conn[1][2],pos);
    };

var
 set_breakpoint=
  function(pos)
   {Pervasives["output_char"](conn[1][2],66);
    return Pervasives["output_binary_int"](conn[1][2],pos);
    };

var
 reset_instr=
  function(pos)
   {Pervasives["output_char"](conn[1][2],105);
    return Pervasives["output_binary_int"](conn[1][2],pos);
    };

var
 do_go_smallint=
  function(n)
   {Pervasives["output_char"](conn[1][2],103);
    Pervasives["output_binary_int"](conn[1][2],n);
    Pervasives["flush"](conn[1][2]);
    return Input_handling["execute_with_other_controller"]
            (Input_handling["exit_main_loop"],
             conn[1],
             function(param)
              {Input_handling["main_loop"](/* () */0);
               var match=Pervasives["input_char"](conn[1][1]);
               
               var exit;
               
               var switcher=-98+match;
               
               if(22<switcher>>>0)
                {exit=50;}
               else
                {switch(switcher)
                  {case 0:var summary=/* Breakpoint */1;
                   case 1:exit=50;
                   case 2:exit=50;
                   case 3:var summary=/* Event */0;
                   case 4:exit=50;
                   case 5:exit=50;
                   case 6:exit=50;
                   case 7:exit=50;
                   case 8:exit=50;
                   case 9:exit=50;
                   case 10:exit=50;
                   case 11:exit=50;
                   case 12:exit=50;
                   case 13:exit=50;
                   case 14:exit=50;
                   case 15:exit=50;
                   case 16:exit=50;
                   case 17:var summary=/* Trap_barrier */3;
                   case 18:exit=50;
                   case 19:var summary=/* Uncaught_exc */4;
                   case 20:exit=50;
                   case 21:exit=50;
                   case 22:var summary=/* Exited */2;
                   }
                 }
               
               switch(exit)
                {case 50:var summary=Misc["fatal_error"]("Debugcom.do_go");}
               
               var event_counter=Pervasives["input_binary_int"](conn[1][1]);
               
               var stack_pos=Pervasives["input_binary_int"](conn[1][1]);
               
               var pc=Pervasives["input_binary_int"](conn[1][1]);
               
               return /* record */[0,summary,event_counter,stack_pos,pc];
               });
    };

var
 do_go=
  function(n)
   {if(n>=Int64ops["_0"])
     {}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"debugcom.ml",105,2]];
      }
    
    if(n>Int64ops["max_small_int"])
     {do_go_smallint(Pervasives["max_int"]);
      return do_go(Int64ops["--"](n,Int64ops["max_small_int"]));
      }
    else
     {return do_go_smallint(n);}
    };

var
 do_checkpoint=
  function(param)
   {var match=Sys["os_type"];
    
    switch(match)
     {case "Win32":return Pervasives["failwith"]("do_checkpoint");
      default:
       Pervasives["output_char"](conn[1][2],99);
       Pervasives["flush"](conn[1][2]);
       var pid=Pervasives["input_binary_int"](conn[1][1]);
       
       if(pid===-1)
        {return /* Checkpoint_failed */0;}
       else
        {return /* Checkpoint_done */[0,pid];}
       }
    };

var
 stop=
  function(chan)
   {try
     {Pervasives["output_char"](chan[2],115);
      return Pervasives["flush"](chan[2]);
      }
    catch(exn)
     {var exit;
      
      if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {exit=41;}
      else
       {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
         {exit=41;}
        else
         {throw exn;}
        }
      
      switch(exit){case 41:return /* () */0;}
      }
    };

var
 wait_child=
  function(chan)
   {try
     {return Pervasives["output_char"](chan[2],119);}
    catch(exn)
     {var exit;
      
      if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {exit=37;}
      else
       {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
         {exit=37;}
        else
         {throw exn;}
        }
      
      switch(exit){case 37:return /* () */0;}
      }
    };

var
 initial_frame=
  function(param)
   {Pervasives["output_char"](conn[1][2],48);
    Pervasives["flush"](conn[1][2]);
    var stack_pos=Pervasives["input_binary_int"](conn[1][1]);
    
    var pc=Pervasives["input_binary_int"](conn[1][1]);
    
    return /* tuple */[0,stack_pos,pc];
    };

var set_initial_frame=function(param){return initial_frame(/* () */0);};

var
 up_frame=
  function(stacksize)
   {Pervasives["output_char"](conn[1][2],85);
    Pervasives["output_binary_int"](conn[1][2],stacksize);
    Pervasives["flush"](conn[1][2]);
    var stack_pos=Pervasives["input_binary_int"](conn[1][1]);
    
    if(stack_pos===-1)
     {var pc=0;}
    else
     {var pc=Pervasives["input_binary_int"](conn[1][1]);}
    
    return /* tuple */[0,stack_pos,pc];
    };

var
 get_frame=
  function(param)
   {Pervasives["output_char"](conn[1][2],102);
    Pervasives["flush"](conn[1][2]);
    var stack_pos=Pervasives["input_binary_int"](conn[1][1]);
    
    var pc=Pervasives["input_binary_int"](conn[1][1]);
    
    return /* tuple */[0,stack_pos,pc];
    };

var
 set_frame=
  function(stack_pos)
   {Pervasives["output_char"](conn[1][2],83);
    return Pervasives["output_binary_int"](conn[1][2],stack_pos);
    };

var
 set_trap_barrier=
  function(pos)
   {Pervasives["output_char"](conn[1][2],98);
    return Pervasives["output_binary_int"](conn[1][2],pos);
    };

if(1<<31===0){var value_size=4;}else{var value_size=8;}

var
 input_remote_value=
  function(ic){return Pervasives["really_input_string"](ic,value_size);};

var
 output_remote_value=
  function(ic,v){return Pervasives["output_substring"](ic,v,0,value_size);};

var
 Marshalling_error=
  CamlPrimitive["caml_set_oo_id"]([248,"Debugcom.Marshalling_error",0]);

var
 obj=
  function(param)
   {switch(param[0])
     {case 0:
       Pervasives["output_char"](conn[1][2],77);
       output_remote_value(conn[1][2],param[1]);
       Pervasives["flush"](conn[1][2]);
       try
        {return Pervasives["input_value"](conn[1][1]);}
       catch(exn)
        {var exit;
         
         if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
          {exit=18;}
         else
          {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
            {exit=18;}
           else
            {throw exn;}
           }
         
         switch(exit){case 18:throw Marshalling_error;}
         }
       
      case 1:return param[1];
      }
    };

var
 is_block=
  function(param)
   {switch(param[0])
     {case 0:return CamlPrimitive["caml_obj_is_block"](param[1][1]);
      case 1:return CamlPrimitive["caml_obj_is_block"](param[1]);
      }
    };

var
 tag=
  function(obj)
   {if(!is_block(obj))
     {return Obj["int_tag"];}
    else
     {switch(obj[0])
       {case 0:
         Pervasives["output_char"](conn[1][2],72);
         output_remote_value(conn[1][2],obj[1]);
         Pervasives["flush"](conn[1][2]);
         var header=Pervasives["input_binary_int"](conn[1][1]);
         
         return header&255;
         
        case 1:return CamlPrimitive["caml_obj_tag"](obj[1]);
        }
      }
    };

var
 size=
  function(param)
   {switch(param[0])
     {case 0:
       Pervasives["output_char"](conn[1][2],72);
       output_remote_value(conn[1][2],param[1]);
       Pervasives["flush"](conn[1][2]);
       var header=Pervasives["input_binary_int"](conn[1][1]);
       
       if((header&255)===Obj["double_array_tag"]&&Sys["word_size"]===32)
        {return header>>>11;}
       else
        {return header>>>10;}
       
      case 1:return /* -1 for tag */param[1]["length"]-1;
      }
    };

var
 field=
  function(v,n)
   {switch(v[0])
     {case 0:
       Pervasives["output_char"](conn[1][2],70);
       output_remote_value(conn[1][2],v[1]);
       Pervasives["output_binary_int"](conn[1][2],n);
       Pervasives["flush"](conn[1][2]);
       if(Pervasives["input_byte"](conn[1][1])===0)
        {return /* Remote */[0,input_remote_value(conn[1][1])];}
       else
        {var buf=Pervasives["really_input_string"](conn[1][1],8);
         
         var floatbuf=n;
         
         CamlPrimitive["caml_blit_string"](buf,0,floatbuf,0,8);
         return /* Local */[1,floatbuf];
         }
       
      case 1:return /* Local */[1,v[1][n+1]];
      }
    };

var of_int=function(n){return /* Local */[1,n];};

var
 local=
  function(pos)
   {Pervasives["output_char"](conn[1][2],76);
    Pervasives["output_binary_int"](conn[1][2],pos);
    Pervasives["flush"](conn[1][2]);
    return /* Remote */[0,input_remote_value(conn[1][1])];
    };

var
 from_environment=
  function(pos)
   {Pervasives["output_char"](conn[1][2],69);
    Pervasives["output_binary_int"](conn[1][2],pos);
    Pervasives["flush"](conn[1][2]);
    return /* Remote */[0,input_remote_value(conn[1][1])];
    };

var
 global=
  function(pos)
   {Pervasives["output_char"](conn[1][2],71);
    Pervasives["output_binary_int"](conn[1][2],pos);
    Pervasives["flush"](conn[1][2]);
    return /* Remote */[0,input_remote_value(conn[1][1])];
    };

var
 accu=
  function(param)
   {Pervasives["output_char"](conn[1][2],65);
    Pervasives["flush"](conn[1][2]);
    return /* Remote */[0,input_remote_value(conn[1][1])];
    };

var
 closure_code=
  function(param)
   {switch(param[0])
     {case 0:
       Pervasives["output_char"](conn[1][2],67);
       output_remote_value(conn[1][2],param[1]);
       Pervasives["flush"](conn[1][2]);
       return Pervasives["input_binary_int"](conn[1][1]);
       
      case 1:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"debugcom.ml",282,19]];
       
      }
    };

var
 same=
  function(rv1,rv2)
   {var exit;
    
    switch(rv1[0])
     {case 0:
       switch(rv2[0])
        {case 0:return CamlPrimitive["caml_string_equal"](rv1[1],rv2[1]);
         case 1:exit=1;
         }
       
      case 1:switch(rv2[0]){case 0:exit=1;case 1:return rv1[1]===rv2[1];}
      }
    
    switch(exit){case 1:return /* false */0;}
    };

var
 Remote_value=
  [0,
   obj,
   is_block,
   tag,
   size,
   field,
   of_int,
   local,
   from_environment,
   global,
   accu,
   closure_code,
   same];

module["exports"]=
{"set_current_connection":set_current_connection,
 "set_event":set_event,
 "set_breakpoint":set_breakpoint,
 "reset_instr":reset_instr,
 "do_checkpoint":do_checkpoint,
 "do_go":do_go,
 "stop":stop,
 "wait_child":wait_child,
 "initial_frame":initial_frame,
 "set_initial_frame":set_initial_frame,
 "get_frame":get_frame,
 "set_frame":set_frame,
 "up_frame":up_frame,
 "set_trap_barrier":set_trap_barrier,
 "fork_mode":fork_mode,
 "update_follow_fork_mode":update_follow_fork_mode,
 "Marshalling_error":Marshalling_error,
 "Remote_value":
 [0,
  Remote_value[1],
  Remote_value[2],
  Remote_value[3],
  Remote_value[4],
  Remote_value[5],
  Remote_value[12],
  Remote_value[6],
  Remote_value[7],
  Remote_value[8],
  Remote_value[9],
  Remote_value[10],
  Remote_value[11]]};

