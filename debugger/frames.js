// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Symbols=require("./symbols.js");
var Events=require("./events.js");
var Misc=require("./misc.js");
var Debugcom=require("./debugcom.js");


var current_frame=[0,0];

var selected_event=[0,/* None */0];

var
 selected_point=
  function(param)
   {var match=selected_event[1];
    
    if(match)
     {var ev=match[1];
      
      return /* tuple */[0,
              ev[2],
              Events["get_pos"](ev)[2],
              Events["get_pos"](ev)[4]-Events["get_pos"](ev)[3]];
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 selected_event_is_before=
  function(param)
   {var match=selected_event[1];
    
    var exit;
    
    if(match)
     {var match$1=match[1][4];
      
      if(typeof match$1==="number")
       {if(match$1!==0){exit=17;}else{return /* true */1;}}
      else
       {exit=17;}
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    
    switch(exit){case 17:return /* false */0;}
    };

var
 move_up=
  function(frame_count,$$event)
   {if(frame_count<=0)
     {return $$event;}
    else
     {var match=Debugcom["up_frame"]($$event[9]);
      
      if(match[1]<0)
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      else
       {}
      
      return move_up(frame_count-1,Symbols["any_event_at_pc"](match[2]));
      }
    };

var
 select_frame=
  function(frame_number)
   {if(frame_number<0)
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    else
     {}
    
    var match=Debugcom["get_frame"](/* () */0);
    
    try
     {var match$1=Events["current_event"][1];
      
      if(match$1)
       {var match$2=selected_event[1];
        
        var exit;
        
        if(match$2)
         {if(frame_number>=current_frame[1])
           {selected_event[1]=
            /* Some */[0,move_up(frame_number-current_frame[1],match$2[1])];
            return current_frame[1]=frame_number,0;
            }
          else
           {exit=13;}
          }
        else
         {exit=13;}
        
        switch(exit)
         {case 13:
           Debugcom["set_initial_frame"](/* () */0);
           selected_event[1]=/* Some */[0,move_up(frame_number,match$1[1])];
           return current_frame[1]=frame_number,0;
           
          }
        }
      else
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {Debugcom["set_frame"](match[1]);
        throw CamlPrimitive["caml_global_data"]["Not_found"];
        }
      else
       {throw exn;}
      }
    };

var
 try_select_frame=
  function(frame_number)
   {try
     {return select_frame(frame_number);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* () */0;}
      else
       {throw exn;}
      }
    };

var
 reset_frame=
  function(param)
   {Debugcom["set_initial_frame"](/* () */0);
    selected_event[1]=Events["current_event"][1];
    return current_frame[1]=0,0;
    };

var
 do_backtrace=
  function(action)
   {var match=Events["current_event"][1];
    
    if(match)
     {var match$1=Debugcom["get_frame"](/* () */0);
      
      Debugcom["set_initial_frame"](/* () */0);
      var $$event=match[1];
      
      try
       {while(action(/* Some */[0,$$event]))
         {var match$2=Debugcom["up_frame"]($$event[9]);
          
          if(match$2[1]<0){throw Pervasives["Exit"];}else{}
          
          $$event=Symbols["any_event_at_pc"](match$2[2]);
          }
        }
      catch(exn)
       {if(exn===Pervasives["Exit"])
         {}
        else
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {action(/* None */0)}
          else
           {throw exn;}
          }
        }
      
      return Debugcom["set_frame"](match$1[1]);
      }
    else
     {return Misc["fatal_error"]("Frames.do_backtrace");}
    };

var
 stack_depth=
  function(param)
   {var num_frames=[0,0];
    
    do_backtrace
     (function(param$1)
       {if(param$1)
         {num_frames[0]++;return /* true */1;}
        else
         {num_frames[1]=-1;return /* false */0;}
        });
    return num_frames[1];
    };

module["exports"]=
{"current_frame":current_frame,
 "selected_event":selected_event,
 "selected_point":selected_point,
 "selected_event_is_before":selected_event_is_before,
 "select_frame":select_frame,
 "try_select_frame":try_select_frame,
 "reset_frame":reset_frame,
 "do_backtrace":do_backtrace,
 "stack_depth":stack_depth};

