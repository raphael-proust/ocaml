var Pervasives=require("Pervasives");
var Symbols=require("Symbols");
var Events=require("Events");
var Misc=require("Misc");
var Debugcom=require("Debugcom");
var current_frame=[0,0];
var selected_event=[0,0];
var
 selected_point=
  function(param)
   {var match=selected_event[1];
    var $js=match;
    if($js)
     {var ev=match[1];
      var $js$1=Events["get_pos"];
      var $js$2=$js$1(ev);
      var $js$3=$js$2[2];
      var $js$4=Events["get_pos"];
      var $js$5=$js$4(ev);
      var $js$6=$js$5[4];
      var $js$7=Events["get_pos"];
      var $js$8=$js$7(ev);
      var $js$9=$js$8[3];
      var $js$10=$js$6-$js$9;
      return [0,ev[2],$js$3,$js$10]}
    else
     {return "unknown primitive:raise"}};
var
 selected_event_is_before=
  function(param)
   {var match=selected_event[1];
    var $js=match;
    if($js)
     {var match$1=match[1][4];
      var $js$1="unknown primitive:isint";
      if($js$1)
       {var $js$2=match$1!=0;if($js$2){var exit=17}else{return 1}}
      else
       {var exit=17}}
    else
     {return "unknown primitive:raise"}
    switch(exit){case 17:return 0}};
var
 move_up=
  function(frame_count,event)
   {var $js=frame_count<=0;
    if($js)
     {return event}
    else
     {var $js$1=Debugcom["up_frame"];
      var match=$js$1(event[9]);
      var $js$2=match[1]<0;
      if($js$2){"unknown primitive:raise"}else{}
      var $js$3=Symbols["any_event_at_pc"];
      var $js$4=$js$3(match[2]);
      return move_up(frame_count-1,$js$4)}};
var
 select_frame=
  function(frame_number)
   {var $js=frame_number<0;
    if($js){"unknown primitive:raise"}else{}
    var $js$1=Debugcom["get_frame"];
    var match=$js$1(0);
    try
     {var match$1=Events["current_event"][1];
      var $js$2=match$1;
      if($js$2)
       {var match$2=selected_event[1];
        var $js$3=match$2;
        if($js$3)
         {var $js$4=frame_number>=current_frame[1];
          if($js$4)
           {var $js$5=move_up(frame_number-current_frame[1],match$2[1]);
            var $js$6=[0,$js$5];
            selected_event[1]=$js$6,0;
            return current_frame[1]=frame_number,0}
          else
           {var exit=13}}
        else
         {var exit=13}
        switch(exit)
         {case 13:
           var $js$7=Debugcom["set_initial_frame"];
           $js$7(0);
           var $js$8=move_up(frame_number,match$1[1]);
           var $js$9=[0,$js$8];
           selected_event[1]=$js$9,0;
           return current_frame[1]=frame_number,0
          }}
      else
       {return "unknown primitive:raise"}}
    catch(exn)
     {var $js$10=exn=Not_found;
      if($js$10)
       {var $js$11=Debugcom["set_frame"];
        $js$11(match[1]);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 try_select_frame=
  function(frame_number)
   {try
     {return select_frame(frame_number)}
    catch(exn)
     {var $js=exn=Not_found;
      if($js){return 0}else{return "unknown primitive:reraise"}}};
var
 reset_frame=
  function(param)
   {var $js=Debugcom["set_initial_frame"];
    $js(0);
    selected_event[1]=Events["current_event"][1],0;
    return current_frame[1]=0,0};
var
 do_backtrace=
  function(action)
   {var match=Events["current_event"][1];
    var $js=match;
    if($js)
     {var $js$1=Debugcom["get_frame"];
      var match$1=$js$1(0);
      var $js$2=Debugcom["set_initial_frame"];
      $js$2(0);
      var event=match[1];
      try
       {for(;;)
         {var $js$3=action([0,event]);
          if($js$3)
           {var $js$4=Debugcom["up_frame"];
            var match$2=$js$4(event[9]);
            var $js$5=match$2[1]<0;
            if($js$5){"unknown primitive:raise"}else{}
            var $js$6=Symbols["any_event_at_pc"];
            var $js$7=$js$6(match$2[2]);
            var event=$js$7}
          else
           break}}
      catch(exn)
       {var $js$8=exn=Pervasives["Exit"];
        if($js$8)
         {}
        else
         {var $js$9=exn=Not_found;
          if($js$9){var $js$10=action(0);0}else{"unknown primitive:reraise"}}}
      var $js$11=Debugcom["set_frame"];
      return $js$11(match$1[1])}
    else
     {var $js$12=Misc["fatal_error"];return $js$12("Frames.do_backtrace")}};
var
 stack_depth=
  function(param)
   {var num_frames=[0,0];
    do_backtrace
     (function(param$1)
       {var $js=param$1;
        if($js){num_frames[0]++;return 1}else{num_frames[1]=-1,0;return 0}});
    return num_frames[1]};
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
