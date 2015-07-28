var Pervasives=require("Pervasives");
var Obj=require("Obj");
var Misc=require("Misc");
var Primitives=require("Primitives");
var Int64ops=require("Int64ops");
var Input_handling=require("Input_handling");
var Sys=require("Sys");
var conn=[0,Primitives["std_io"]];
var fork_mode=[0,1];
var
 update_follow_fork_mode=
  function(param)
   {var match=fork_mode[1];
    var $js=match!=0;
    if($js){var a=1}else{var a=0}
    var $js$1=Pervasives["output_char"];
    $js$1(conn[1][2],75);
    var $js$2=Pervasives["output_binary_int"];
    return $js$2(conn[1][2],a)};
var
 set_current_connection=
  function(io_chan){conn[1]=io_chan,0;return update_follow_fork_mode(0)};
var
 set_event=
  function(pos)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],101);
    var $js$1=Pervasives["output_binary_int"];
    return $js$1(conn[1][2],pos)};
var
 set_breakpoint=
  function(pos)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],66);
    var $js$1=Pervasives["output_binary_int"];
    return $js$1(conn[1][2],pos)};
var
 reset_instr=
  function(pos)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],105);
    var $js$1=Pervasives["output_binary_int"];
    return $js$1(conn[1][2],pos)};
var
 do_go_smallint=
  function(n)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],103);
    var $js$1=Pervasives["output_binary_int"];
    $js$1(conn[1][2],n);
    var $js$2=Pervasives["flush"];
    $js$2(conn[1][2]);
    var $js$3=Input_handling["execute_with_other_controller"];
    return $js$3
            (Input_handling["exit_main_loop"],
             conn[1],
             function(param)
              {var $js$4=Input_handling["main_loop"];
               $js$4(0);
               var $js$5=Pervasives["input_char"];
               var match=$js$5(conn[1][1]);
               var switcher=-98+match;
               var $js$6=22<switcher>>>0;
               if($js$6)
                {var exit=50}
               else
                {var $js$7=switcher;
                 var $js$8=$js$7[0];
                 if($js$8==0)
                  {var summary=1}
                 else
                  if($js$8==1)
                   {var exit=50}
                  else
                   if($js$8==2)
                    {var exit=50}
                   else
                    if($js$8==3)
                     {var summary=0}
                    else
                     if($js$8==4)
                      {var exit=50}
                     else
                      if($js$8==5)
                       {var exit=50}
                      else
                       if($js$8==6)
                        {var exit=50}
                       else
                        if($js$8==7)
                         {var exit=50}
                        else
                         if($js$8==8)
                          {var exit=50}
                         else
                          if($js$8==9)
                           {var exit=50}
                          else
                           if($js$8==10)
                            {var exit=50}
                           else
                            if($js$8==11)
                             {var exit=50}
                            else
                             if($js$8==12)
                              {var exit=50}
                             else
                              if($js$8==13)
                               {var exit=50}
                              else
                               if($js$8==14)
                                {var exit=50}
                               else
                                if($js$8==15)
                                 {var exit=50}
                                else
                                 if($js$8==16)
                                  {var exit=50}
                                 else
                                  if($js$8==17)
                                   {var summary=3}
                                  else
                                   if($js$8==18)
                                    {var exit=50}
                                   else
                                    if($js$8==19)
                                     {var summary=4}
                                    else
                                     if($js$8==20)
                                      {var exit=50}
                                     else
                                      if($js$8==21){var exit=50}else if($js$8==22){var summary=2}}
               switch(exit)
                {case 50:
                  var $js$9=Misc["fatal_error"];
                  var summary=$js$9("Debugcom.do_go")
                 }
               var $js$10=Pervasives["input_binary_int"];
               var event_counter=$js$10(conn[1][1]);
               var $js$11=Pervasives["input_binary_int"];
               var stack_pos=$js$11(conn[1][1]);
               var $js$12=Pervasives["input_binary_int"];
               var pc=$js$12(conn[1][1]);
               return [0,summary,event_counter,stack_pos,pc]})};
var
 do_go=
  function(n)
   {var $js=n>=Int64ops["_0"];
    if($js){}else{"unknown primitive:raise"}
    var $js$1=n>Int64ops["max_small_int"];
    if($js$1)
     {var $js$2=do_go_smallint(Pervasives["max_int"]);
      0;
      var $js$3=Int64ops["--"];
      var $js$4=$js$3(n,Int64ops["max_small_int"]);
      return do_go($js$4)}
    else
     {return do_go_smallint(n)}};
var
 do_checkpoint=
  function(param)
   {var match=Sys["os_type"];
    var $js=match;
    if($js=="Win32")
     {var $js$1=Pervasives["failwith"];return $js$1("do_checkpoint")}
    else
     {var $js$2=Pervasives["output_char"];
      $js$2(conn[1][2],99);
      var $js$3=Pervasives["flush"];
      $js$3(conn[1][2]);
      var $js$4=Pervasives["input_binary_int"];
      var pid=$js$4(conn[1][1]);
      var $js$5=pid=-1;
      if($js$5){return 0}else{return [0,pid]}}};
var
 stop=
  function(chan)
   {try
     {var $js=Pervasives["output_char"];
      $js(chan[2],115);
      var $js$1=Pervasives["flush"];
      return $js$1(chan[2])}
    catch(exn)
     {var $js$2=exn[1]=Sys_error;
      if($js$2)
       {var exit=41}
      else
       {var $js$3=exn=End_of_file;
        if($js$3){var exit=41}else{return "unknown primitive:reraise"}}
      switch(exit){case 41:return 0}}};
var
 wait_child=
  function(chan)
   {try
     {var $js=Pervasives["output_char"];return $js(chan[2],119)}
    catch(exn)
     {var $js$1=exn[1]=Sys_error;
      if($js$1)
       {var exit=37}
      else
       {var $js$2=exn=End_of_file;
        if($js$2){var exit=37}else{return "unknown primitive:reraise"}}
      switch(exit){case 37:return 0}}};
var
 initial_frame=
  function(param)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],48);
    var $js$1=Pervasives["flush"];
    $js$1(conn[1][2]);
    var $js$2=Pervasives["input_binary_int"];
    var stack_pos=$js$2(conn[1][1]);
    var $js$3=Pervasives["input_binary_int"];
    var pc=$js$3(conn[1][1]);
    return [0,stack_pos,pc]};
var set_initial_frame=function(param){var $js=initial_frame(0);return 0};
var
 up_frame=
  function(stacksize)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],85);
    var $js$1=Pervasives["output_binary_int"];
    $js$1(conn[1][2],stacksize);
    var $js$2=Pervasives["flush"];
    $js$2(conn[1][2]);
    var $js$3=Pervasives["input_binary_int"];
    var stack_pos=$js$3(conn[1][1]);
    var $js$4=stack_pos=-1;
    if($js$4)
     {var pc=0}
    else
     {var $js$5=Pervasives["input_binary_int"];var pc=$js$5(conn[1][1])}
    return [0,stack_pos,pc]};
var
 get_frame=
  function(param)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],102);
    var $js$1=Pervasives["flush"];
    $js$1(conn[1][2]);
    var $js$2=Pervasives["input_binary_int"];
    var stack_pos=$js$2(conn[1][1]);
    var $js$3=Pervasives["input_binary_int"];
    var pc=$js$3(conn[1][1]);
    return [0,stack_pos,pc]};
var
 set_frame=
  function(stack_pos)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],83);
    var $js$1=Pervasives["output_binary_int"];
    return $js$1(conn[1][2],stack_pos)};
var
 set_trap_barrier=
  function(pos)
   {var $js=Pervasives["output_char"];
    $js(conn[1][2],98);
    var $js$1=Pervasives["output_binary_int"];
    return $js$1(conn[1][2],pos)};
var $js=(1<<31)=0;
if($js){var value_size=4}else{var value_size=8}
var
 input_remote_value=
  function(ic)
   {var $js$1=Pervasives["really_input_string"];return $js$1(ic,value_size)};
var
 output_remote_value=
  function(ic,v)
   {var $js$1=Pervasives["output_substring"];return $js$1(ic,v,0,value_size)};
var Marshalling_error="unknown primitive:caml_set_oo_id";
var
 obj=
  function(param)
   {var $js$1=param;
    if($js$1==0)
     {var $js$2=Pervasives["output_char"];
      $js$2(conn[1][2],77);
      output_remote_value(conn[1][2],param[1]);
      var $js$3=Pervasives["flush"];
      $js$3(conn[1][2]);
      try
       {var $js$4=Pervasives["input_value"];return $js$4(conn[1][1])}
      catch(exn)
       {var $js$5=exn=End_of_file;
        if($js$5)
         {var exit=18}
        else
         {var $js$6=exn[1]=Failure;
          if($js$6){var exit=18}else{return "unknown primitive:reraise"}}
        switch(exit){case 18:return "unknown primitive:raise"}}}
    else
     if($js$1==1){return param[1]}};
var
 is_block=
  function(param)
   {var $js$1=param;
    if($js$1==0)
     {return "unknown primitive:caml_obj_is_block"}
    else
     if($js$1==1){return "unknown primitive:caml_obj_is_block"}};
var
 tag=
  function(obj$1)
   {var $js$1=is_block(obj$1);
    var $js$2=!$js$1;
    if($js$2)
     {return Obj["int_tag"]}
    else
     {var $js$3=obj$1;
      if($js$3==0)
       {var $js$4=Pervasives["output_char"];
        $js$4(conn[1][2],72);
        output_remote_value(conn[1][2],obj$1[1]);
        var $js$5=Pervasives["flush"];
        $js$5(conn[1][2]);
        var $js$6=Pervasives["input_binary_int"];
        var header=$js$6(conn[1][1]);
        return header&255}
      else
       if($js$3==1){return "unknown primitive:caml_obj_tag"}}};
var
 size=
  function(param)
   {var $js$1=param;
    if($js$1==0)
     {var $js$2=Pervasives["output_char"];
      $js$2(conn[1][2],72);
      output_remote_value(conn[1][2],param[1]);
      var $js$3=Pervasives["flush"];
      $js$3(conn[1][2]);
      var $js$4=Pervasives["input_binary_int"];
      var header=$js$4(conn[1][1]);
      var $js$5=((header&255)=Obj["double_array_tag"])&&(Sys["word_size"]=32);
      if($js$5){return header>>>11}else{return header>>>10}}
    else
     if($js$1==1){return param[1]["length"]}};
var
 field=
  function(v,n)
   {var $js$1=v;
    if($js$1==0)
     {var $js$2=Pervasives["output_char"];
      $js$2(conn[1][2],70);
      output_remote_value(conn[1][2],v[1]);
      var $js$3=Pervasives["output_binary_int"];
      $js$3(conn[1][2],n);
      var $js$4=Pervasives["flush"];
      $js$4(conn[1][2]);
      var $js$5=Pervasives["input_byte"];
      var $js$6=$js$5(conn[1][1]);
      var $js$7=$js$6=0;
      if($js$7)
       {var $js$8=input_remote_value(conn[1][1]);return [0,$js$8]}
      else
       {var $js$9=Pervasives["really_input_string"];
        var buf=$js$9(conn[1][1],8);
        var floatbuf=n;
        "unknown primitive:caml_blit_string";
        return [1,floatbuf]}}
    else
     if($js$1==1){return [1,v[1][n]]}};
var of_int=function(n){return [1,n]};
var
 local=
  function(pos)
   {var $js$1=Pervasives["output_char"];
    $js$1(conn[1][2],76);
    var $js$2=Pervasives["output_binary_int"];
    $js$2(conn[1][2],pos);
    var $js$3=Pervasives["flush"];
    $js$3(conn[1][2]);
    var $js$4=input_remote_value(conn[1][1]);
    return [0,$js$4]};
var
 from_environment=
  function(pos)
   {var $js$1=Pervasives["output_char"];
    $js$1(conn[1][2],69);
    var $js$2=Pervasives["output_binary_int"];
    $js$2(conn[1][2],pos);
    var $js$3=Pervasives["flush"];
    $js$3(conn[1][2]);
    var $js$4=input_remote_value(conn[1][1]);
    return [0,$js$4]};
var
 global=
  function(pos)
   {var $js$1=Pervasives["output_char"];
    $js$1(conn[1][2],71);
    var $js$2=Pervasives["output_binary_int"];
    $js$2(conn[1][2],pos);
    var $js$3=Pervasives["flush"];
    $js$3(conn[1][2]);
    var $js$4=input_remote_value(conn[1][1]);
    return [0,$js$4]};
var
 accu=
  function(param)
   {var $js$1=Pervasives["output_char"];
    $js$1(conn[1][2],65);
    var $js$2=Pervasives["flush"];
    $js$2(conn[1][2]);
    var $js$3=input_remote_value(conn[1][1]);
    return [0,$js$3]};
var
 closure_code=
  function(param)
   {var $js$1=param;
    if($js$1==0)
     {var $js$2=Pervasives["output_char"];
      $js$2(conn[1][2],67);
      output_remote_value(conn[1][2],param[1]);
      var $js$3=Pervasives["flush"];
      $js$3(conn[1][2]);
      var $js$4=Pervasives["input_binary_int"];
      return $js$4(conn[1][1])}
    else
     if($js$1==1){return "unknown primitive:raise"}};
var
 same=
  function(rv1,rv2)
   {var $js$1=rv1;
    if($js$1==0)
     {var $js$2=rv2;
      if($js$2==0)
       {return "unknown primitive:caml_string_equal"}
      else
       if($js$2==1){var exit=1}}
    else
     if($js$1==1)
      {var $js$3=rv2;
       if($js$3==0){var exit=1}else if($js$3==1){return rv1[1]=rv2[1]}}
    switch(exit){case 1:return 0}};
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
 "unknown block:(makeblock 0 (field 0 Remote_value/1117) (field 1 Remote_value/1117)\n  (field 2 Remote_value/1117) (field 3 Remote_value/1117)\n  (field 4 Remote_value/1117) (field 11 Remote_value/1117)\n  (field 5 Remote_value/1117) (field 6 Remote_value/1117)\n  (field 7 Remote_value/1117) (field 8 Remote_value/1117)\n  (field 9 Remote_value/1117) (field 10 Remote_value/1117))":
 unknown block:(makeblock 0 (field 0 Remote_value/1117) (field 1 Remote_value/1117)
  (field 2 Remote_value/1117) (field 3 Remote_value/1117)
  (field 4 Remote_value/1117) (field 11 Remote_value/1117)
  (field 5 Remote_value/1117) (field 6 Remote_value/1117)
  (field 7 Remote_value/1117) (field 8 Remote_value/1117)
  (field 9 Remote_value/1117) (field 10 Remote_value/1117))};
