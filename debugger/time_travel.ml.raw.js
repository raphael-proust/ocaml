var Question=require("Question");
var Breakpoints=require("Breakpoints");
var Pervasives=require("Pervasives");
var Trap_barrier=require("Trap_barrier");
var List=require("List");
var Symbols=require("Symbols");
var Printf=require("Printf");
var Events=require("Events");
var Checkpoints=require("Checkpoints");
var Program_loading=require("Program_loading");
var Misc=require("Misc");
var Primitives=require("Primitives");
var Debugger_config=require("Debugger_config");
var Int64ops=require("Int64ops");
var Exec=require("Exec");
var Input_handling=require("Input_handling");
var Debugcom=require("Debugcom");
var Sys=require("Sys");
var Current_checkpoint_lost="unknown primitive:caml_set_oo_id";
var Current_checkpoint_lost_start_at="unknown primitive:caml_set_oo_id";
var
 remove_1st=
  function(key,list)
   {var
     remove=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[2];
          var a=param[1];
          var $js$1=a=key;
          if($js$1){return l}else{var $js$2=remove(l);return [0,a,$js$2]}}
        else
         {return 0}};
    return remove(list)};
var debug_time_travel=[0,0];
var
 insert_checkpoint=
  function(checkpoint)
   {var time=checkpoint[1];
    var
     traverse=
      function(l')
       {var $js=l';
        if($js)
         {var a=l'[1];
          var t=a[1];
          var $js$1=t>time;
          if($js$1)
           {var $js$2=traverse(l'[2]);return [0,a,$js$2]}
          else
           {var $js$3=t=time;
            if($js$3)
             {return "unknown primitive:raise"}
            else
             {return [0,checkpoint,l']}}}
        else
         {return [0,checkpoint,0]}};
    var $js=traverse(Checkpoints["checkpoints"][1]);
    return Checkpoints["checkpoints"][1]=$js,0};
var
 remove_checkpoint=
  function(checkpoint)
   {var $js=remove_1st(checkpoint,Checkpoints["checkpoints"][1]);
    return Checkpoints["checkpoints"][1]=$js,0};
var
 wait_for_connection=
  function(checkpoint)
   {try
     {var $js=Exec["unprotect"];
      return $js
              (function(param)
                {var $js$1=Input_handling["current_controller"];
                 var old_controller=$js$1(Program_loading["connection"][1]);
                 var $js$2=Input_handling["execute_with_other_controller"];
                 return $js$2
                         (function(fd)
                           {old_controller(fd);
                            var $js$3=checkpoint[4]=1;
                            if($js$3)
                             {var $js$4=Input_handling["exit_main_loop"];return $js$4(0)}
                            else
                             {return 0}},
                          Program_loading["connection"][1],
                          Input_handling["main_loop"])})}
    catch(exn)
     {var $js$1=exn=Sys["Break"];
      if($js$1)
       {checkpoint[7]=Checkpoints["root"],0;
        remove_checkpoint(checkpoint);
        checkpoint[2]=-1,0;
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 set_current_checkpoint=
  function(checkpoint)
   {var $js=debug_time_travel[1];
    if($js)
     {var $js$1=Pervasives["prerr_endline"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["string_of_int"];
      var $js$4=$js$3(checkpoint[2]);
      var $js$5=$js$2("Select: ",$js$4);
      $js$1($js$5)}
    else
     {}
    var $js$6=!checkpoint[4];
    if($js$6){wait_for_connection(checkpoint)}else{}
    Checkpoints["current_checkpoint"][1]=checkpoint,0;
    var $js$7=Debugcom["set_current_connection"];
    return $js$7(checkpoint[3])};
var
 kill_checkpoint=
  function(checkpoint)
   {var $js=debug_time_travel[1];
    if($js)
     {var $js$1=Pervasives["prerr_endline"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["string_of_int"];
      var $js$4=$js$3(checkpoint[2]);
      var $js$5=$js$2("Kill: ",$js$4);
      $js$1($js$5)}
    else
     {}
    var $js$6=checkpoint[2]>0;
    if($js$6)
     {var $js$7=!checkpoint[4];
      if($js$7){wait_for_connection(checkpoint)}else{}
      var $js$8=Debugcom["stop"];
      $js$8(checkpoint[3]);
      var $js$9=checkpoint[7][2]>0;
      if($js$9)
       {var $js$10=Debugcom["wait_child"];$js$10(checkpoint[7][3])}
      else
       {}
      checkpoint[7]=Checkpoints["root"],0;
      var $js$11=Primitives["close_io"];
      $js$11(checkpoint[3]);
      var $js$12=Input_handling["remove_file"];
      $js$12(checkpoint[3]);
      remove_checkpoint(checkpoint)}
    else
     {}
    return checkpoint[2]=-1,0};
var
 cut=
  function(t)
   {var
     cut_t=
      function(l')
       {var $js=l';
        if($js)
         {var a=l'[1];
          var t'=a[1];
          var $js$1=t'<=t;
          if($js$1)
           {return [0,0,l']}
          else
           {var match=cut_t(l'[2]);return [0,[0,a,match[1]],match[2]]}}
        else
         {return [0,0,0]}};
    return cut_t};
var
 cut2=
  function(t0,t,l)
   {var
     cut2_t0=
      function(t$1,l$1)
       {var $js=l$1;
        if($js)
         {var $js$1=Int64ops["--"];
          var $js$2=Int64ops["--"];
          var $js$3=$js$2(t0,t$1);
          var $js$4=$js$1($js$3,Int64ops["_1"]);
          var match=cut($js$4,l$1);
          var $js$5=Int64ops["++"];
          var $js$6=$js$5(t$1,t$1);
          var l$2=cut2_t0($js$6,match[2]);
          return [0,match[1],l$2]}
        else
         {return 0}};
    var $js=Int64ops["--"];
    var $js$1=$js(t0,Int64ops["_1"]);
    var match=cut($js$1,l);
    var $js$2=cut2_t0(t,match[2]);
    return [0,match[1],$js$2]};
var
 chk_merge2=
  function(cont)
   {var
     chk_merge2_cont=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[2];
          var a=param[1];
          var $js$1=l;
          if($js$1)
           {var match=chk_merge2_cont(l);return [0,match[1],[0,a,match[2]]]}
          else
           {return [0,[0,a,cont[1]],cont[2]]}}
        else
         {return cont}};
    return chk_merge2_cont};
var
 chk_merge=
  function(param)
   {var $js=param;
    if($js)
     {var $js$1=chk_merge(param[2]);return chk_merge2($js$1,param[1])}
    else
     {return [0,0,0]}};
var
 new_checkpoint_list=
  function(checkpoint_count,accepted,rejected)
   {var $js=List["length"];
    var $js$1=$js(accepted);
    var $js$2=$js$1>=checkpoint_count;
    if($js$2)
     {var $js$3=Primitives["list_truncate2"];
      var match=$js$3(checkpoint_count,accepted);
      var $js$4=Pervasives["@"];
      var $js$5=$js$4(match[2],rejected);
      return [0,match[1],$js$5]}
    else
     {var $js$6=Primitives["list_truncate2"];
      var $js$7=List["length"];
      var $js$8=$js$7(accepted);
      var $js$9=checkpoint_count-$js$8;
      var match$1=$js$6($js$9,rejected);
      var $js$10=List["merge"];
      var
       $js$11=
        $js$10
         (function(param,param$1)
           {var t1=param[1];
            var t2=param$1[1];
            return "unknown primitive:caml_int64_compare"},
          accepted,
          match$1[1]);
      return [0,$js$11,match$1[2]]}};
var
 clean_checkpoints=
  function(time,checkpoint_count)
   {var match=cut(time,Checkpoints["checkpoints"][1]);
    var $js=cut2(time,Debugger_config["checkpoint_small_step"][1],match[2]);
    var match$1=chk_merge($js);
    var match$2=new_checkpoint_list(checkpoint_count,match$1[1],match[1]);
    var $js$1=List["iter"];
    var $js$2=Pervasives["@"];
    var $js$3=$js$2(match$2[2],match$1[2]);
    $js$1(kill_checkpoint,$js$3);
    return Checkpoints["checkpoints"][1]=match$2[1],0};
var
 find_checkpoint_before=
  function(time)
   {var
     find=
      function(param)
       {var $js=param;
        if($js)
         {var a=param[1];
          var t=a[1];
          var $js$1=t>time;
          if($js$1){return find(param[2])}else{return a}}
        else
         {var $js$2=Pervasives["print_string"];
          $js$2("Can't go that far in the past !");
          var $js$3=Pervasives["print_newline"];
          $js$3(0);
          var $js$4=Question["yes_or_no"];
          var $js$5=$js$4("Reload program");
          if($js$5)
           {var $js$6=Program_loading["load_program"];
            $js$6(0);
            return find(Checkpoints["checkpoints"][1])}
          else
           {return "unknown primitive:raise"}}};
    return find(Checkpoints["checkpoints"][1])};
var
 duplicate_current_checkpoint=
  function(param)
   {var checkpoint=Checkpoints["current_checkpoint"][1];
    var $js=!checkpoint[4];
    if($js){wait_for_connection(checkpoint)}else{}
    var
     new_checkpoint=
      [0,
       checkpoint[1],
       0,
       checkpoint[3],
       0,
       checkpoint[5],
       0,
       checkpoint,
       checkpoint[8],
       checkpoint[9],
       checkpoint[10]];
    var $js$1=Primitives["list_replace"];
    var $js$2=$js$1(checkpoint,new_checkpoint,Checkpoints["checkpoints"][1]);
    Checkpoints["checkpoints"][1]=$js$2,0;
    set_current_checkpoint(checkpoint);
    var $js$3=Int64ops["++"];
    var $js$4=$js$3(checkpoint[1],Int64ops["_1"]);
    clean_checkpoints($js$4,Debugger_config["checkpoint_max_count"][1]-1);
    var $js$5=new_checkpoint[2]=0;
    if($js$5)
     {var $js$6=Debugcom["do_checkpoint"];
      var match=$js$6(0);
      var $js$7=match;
      if($js$7)
       {var pid=match[1];
        new_checkpoint[2]=pid,0;
        var $js$8=debug_time_travel[1];
        if($js$8)
         {var $js$9=Pervasives["prerr_endline"];
          var $js$10=Pervasives["^"];
          var $js$11=Pervasives["string_of_int"];
          var $js$12=$js$11(pid);
          var $js$13=$js$10("Waiting for connection: ",$js$12);
          return $js$9($js$13)}
        else
         {return 0}}
      else
       {var $js$14=Pervasives["prerr_endline"];
        $js$14("A fork failed. Reducing maximum number of checkpoints.");
        var $js$15=List["length"];
        var $js$16=$js$15(Checkpoints["checkpoints"][1]);
        var $js$17=$js$16-1;
        Debugger_config["checkpoint_max_count"][1]=$js$17,0;
        return remove_checkpoint(new_checkpoint)}}
    else
     {return 0}};
var interrupted=[0,0];
var last_breakpoint=[0,0];
var
 stop_on_event=
  function(report)
   {var switcher=-1+report[1];
    var $js=2<switcher>>>0;
    if($js)
     {var exit=50}
    else
     {var $js$1=switcher;
      var $js$2=$js$1[0];
      if($js$2==0)
       {last_breakpoint[1]=[0,[0,report[4],report[3]]],0;
        var $js$3=Symbols["update_current_event"];
        $js$3(0);
        var match=Events["current_event"][1];
        var $js$4=match;
        if($js$4){return 0}else{return find_event(0)}}
      else
       if($js$2==1){var exit=50}else if($js$2==2){return find_event(0)}}
    switch(exit){case 50:return 0}};
var
 find_event=
  function(param)
   {var $js=debug_time_travel[1];
    if($js)
     {var $js$1=Pervasives["print_string"];
      $js$1("Searching next event...");
      var $js$2=Pervasives["print_newline"];
      $js$2(0)}
    else
     {}
    var $js$3=Debugcom["do_go"];
    var report=$js$3(Int64ops["_1"]);
    Checkpoints["current_checkpoint"][1][5]=[0,report],0;
    return stop_on_event(report)};
var
 internal_step=
  function(duration)
   {var $js=Checkpoints["current_report"];
    var match=$js(0);
    var $js$1=match;
    if($js$1)
     {var match$1=match[1][1];
      var $js$2=match$1!=2;
      if($js$2)
       {var $js$3=match$1>=4;if($js$3){var exit=48}else{var exit$1=47}}
      else
       {var exit=48}
      switch(exit){case 48:return 0}}
    else
     {var exit$1=47}
    switch(exit$1)
     {case 47:
       var $js$4=Exec["protect"];
       $js$4
        (function(param)
          {var $js$5=Debugger_config["make_checkpoints"][1];
           if($js$5)
            {duplicate_current_checkpoint(0)}
           else
            {remove_checkpoint(Checkpoints["current_checkpoint"][1])}
           var $js$6=Breakpoints["update_breakpoints"];
           $js$6(0);
           var $js$7=Trap_barrier["update_trap_barrier"];
           $js$7(0);
           Checkpoints["current_checkpoint"][1][6]=[0,duration],0;
           var $js$8=Debugcom["do_go"];
           var report=$js$8(duration);
           Checkpoints["current_checkpoint"][1][5]=[0,report],0;
           Checkpoints["current_checkpoint"][1][6]=0,0;
           var $js$9=report[1]=0;
           if($js$9)
            {var $js$10=Int64ops["++"];
             var
              $js$11=
               $js$10(Checkpoints["current_checkpoint"][1][1],duration);
             Checkpoints["current_checkpoint"][1][1]=$js$11,0;
             interrupted[1]=0,0;
             last_breakpoint[1]=0,0}
           else
            {var $js$12=Int64ops["++"];
             var $js$13=Int64ops["--"];
             var $js$14=Int64ops["++"];
             var
              $js$15=
               $js$14(Checkpoints["current_checkpoint"][1][1],duration);
             var $js$16=$js$13($js$15,report[2]);
             var $js$17=$js$12($js$16,Int64ops["_1"]);
             Checkpoints["current_checkpoint"][1][1]=$js$17,0;
             interrupted[1]=1,0;
             last_breakpoint[1]=0,0;
             stop_on_event(report)}
           try
            {return insert_checkpoint(Checkpoints["current_checkpoint"][1])}
           catch(exn)
            {var $js$18=exn=Pervasives["Exit"];
             if($js$18)
              {kill_checkpoint(Checkpoints["current_checkpoint"][1]);
               var $js$19=Checkpoints["current_time"];
               var $js$20=$js$19(0);
               var $js$21=find_checkpoint_before($js$20);
               return set_current_checkpoint($js$21)}
             else
              {return "unknown primitive:reraise"}}});
       var $js$5=debug_time_travel[1];
       if($js$5)
        {var $js$6=Pervasives["print_string"];
         $js$6("Checkpoints: pid(time)");
         var $js$7=Pervasives["print_newline"];
         $js$7(0);
         var $js$8=List["iter"];
         $js$8
          (function(param)
            {var time=param[1];
             var pid=param[2];
             var valid=param[4];
             var $js$9=Printf["printf"];
             var $js$10=valid;
             if($js$10){var $js$11=""}else{var $js$11="(invalid)"}
             return $js$9
                     ([0,
                       [4,0,0,0,[12,40,[7,0,0,0,[12,41,[2,0,[12,32,0]]]]]],
                       "%d(%Ld)%s "],
                      pid,
                      time,
                      $js$11)},
           Checkpoints["checkpoints"][1]);
         var $js$9=Pervasives["print_newline"];
         return $js$9(0)}
       else
        {return 0}
      }};
var
 new_checkpoint=
  function(pid,fd)
   {var
     new_checkpoint$1=
      [0,Int64ops["_0"],pid,fd,1,0,0,Checkpoints["root"],0,0,0];
    return insert_checkpoint(new_checkpoint$1)};
var
 set_file_descriptor=
  function(pid,fd)
   {var
     find=
      function(param)
       {var $js=param;
        if($js)
         {var checkpoint=param[1];
          var pid'=checkpoint[2];
          var $js$1=pid!=pid';
          if($js$1)
           {return find(param[2])}
          else
           {checkpoint[3]=fd,0;checkpoint[4]=1,0;return 1}}
        else
         {var $js$2=Pervasives["prerr_endline"];
          $js$2("Unexpected connection");
          var $js$3=Primitives["close_io"];
          $js$3(fd);
          return 0}};
    var $js=debug_time_travel[1];
    if($js)
     {var $js$1=Pervasives["prerr_endline"];
      var $js$2=Pervasives["^"];
      var $js$3=Pervasives["string_of_int"];
      var $js$4=$js$3(pid);
      var $js$5=$js$2("New connection: ",$js$4);
      $js$1($js$5)}
    else
     {}
    return find
            ([0,
              Checkpoints["current_checkpoint"][1],
              Checkpoints["checkpoints"][1]])};
var
 kill_all_checkpoints=
  function(param)
   {var $js=List["iter"];
    return $js
            (kill_checkpoint,
             [0,
              Checkpoints["current_checkpoint"][1],
              Checkpoints["checkpoints"][1]])};
var
 forget_process=
  function(fd,pid)
   {var $js=List["find"];
    var
     checkpoint=
      $js
       (function(c){return c[2]=pid},
        [0,Checkpoints["current_checkpoint"][1],Checkpoints["checkpoints"][1]]);
    var $js$1=Printf["eprintf"];
    $js$1
     ([0,
       [11,"Lost connection with process ",[4,0,0,0,0]],
       "Lost connection with process %d"],
      pid);
    var $js$2=checkpoint=Checkpoints["current_checkpoint"][1];
    if($js$2)
     {var $js$3=Printf["eprintf"];
      $js$3([0,[11," (active process)\n",0]," (active process)\n"]);
      var match=Checkpoints["current_checkpoint"][1][6];
      var $js$4=match;
      if($js$4)
       {var duration=match[1];
        var $js$5=Printf["eprintf"];
        var $js$6=Int64ops["++"];
        var $js$7=$js$6(Checkpoints["current_checkpoint"][1][1],duration);
        $js$5
         ([0,
           [11,"between time ",[7,0,0,0,[11," and time ",[7,0,0,0,0]]]],
           "between time %Ld and time %Ld"],
          Checkpoints["current_checkpoint"][1][1],
          $js$7);
        var kont=function(param){return "unknown primitive:raise"}}
      else
       {var $js$8=Printf["eprintf"];
        $js$8
         ([0,[11,"at time ",[7,0,0,0,0]],"at time %Ld"],
          Checkpoints["current_checkpoint"][1][1]);
        var kont=function(param){return "unknown primitive:raise"}}}
    else
     {var kont=function(prim){return 0}}
    var $js$9=Printf["eprintf"];
    $js$9([0,[12,10,0],"\n"]);
    var $js$10=Pervasives["flush"];
    $js$10(Pervasives["stderr"]);
    var $js$11=Input_handling["remove_file"];
    $js$11(fd);
    var $js$12=Primitives["close_io"];
    $js$12(checkpoint[3]);
    var $js$13=Input_handling["remove_file"];
    $js$13(checkpoint[3]);
    remove_checkpoint(checkpoint);
    checkpoint[2]=-1,0;
    var $js$14=checkpoint[7][2]>0;
    if($js$14)
     {var $js$15=Debugcom["wait_child"];$js$15(checkpoint[7][3])}
    else
     {}
    return kont(0)};
var
 recover=
  function(param)
   {var $js=Checkpoints["current_time"];
    var $js$1=$js(0);
    var $js$2=find_checkpoint_before($js$1);
    return set_current_checkpoint($js$2)};
var
 step_forward=
  function(duration)
   {var $js=duration>Debugger_config["checkpoint_small_step"][1];
    if($js)
     {var $js$1=duration>Debugger_config["checkpoint_big_step"][1];
      if($js$1)
       {var first_step=Debugger_config["checkpoint_big_step"][1]}
      else
       {var first_step=Debugger_config["checkpoint_small_step"][1]}
      internal_step(first_step);
      var $js$2=!interrupted[1];
      if($js$2)
       {var $js$3=Int64ops["--"];
        var $js$4=$js$3(duration,first_step);
        return step_forward($js$4)}
      else
       {return 0}}
    else
     {var $js$5=duration!=Int64ops["_0"];
      if($js$5){return internal_step(duration)}else{return 0}}};
var
 internal_go_to=
  function(time)
   {var $js=Int64ops["--"];
    var $js$1=Checkpoints["current_time"];
    var $js$2=$js$1(0);
    var duration=$js(time,$js$2);
    var $js$3=duration>Int64ops["_0"];
    if($js$3)
     {var $js$4=Breakpoints["execute_without_breakpoints"];
      return $js$4(function(param){return step_forward(duration)})}
    else
     {return 0}};
var
 go_to=
  function(time)
   {var checkpoint=find_checkpoint_before(time);
    set_current_checkpoint(checkpoint);
    return internal_go_to(time)};
var
 find_last_breakpoint=
  function(max_time)
   {var
     find=
      function(break)
       {var $js=Checkpoints["current_time"];
        var time=$js(0);
        var $js$1=Int64ops["--"];
        var $js$2=$js$1(max_time,time);
        step_forward($js$2);
        var match=last_breakpoint[1];
        var match$1=Breakpoints["temporary_breakpoint_position"][1];
        var $js$3=match;
        if($js$3)
         {var $js$4=Checkpoints["current_time"];
          var $js$5=$js$4(0);
          var $js$6=$js$5<max_time;
          if($js$6)
           {return find(last_breakpoint[1])}
          else
           {var $js$7=match$1;
            if($js$7)
             {var $js$8=match[1][1]=match$1[1];
              if($js$8)
               {return [0,max_time,last_breakpoint[1]]}
              else
               {var exit=29}}
            else
             {var exit=29}}}
        else
         {var exit=29}
        switch(exit){case 29:return [0,time,break]}};
    var $js=Checkpoints["current_pc_sp"];
    var state=$js(0);
    var $js$1=state;
    if($js$1)
     {var $js$2=Breakpoints["breakpoint_at_pc"];
      var $js$3=$js$2(state[1][1]);
      if($js$3){var $js$4=state}else{var exit=28}}
    else
     {var exit=28}
    switch(exit){case 28:var $js$4=0}
    return find($js$4)};
var
 back_to=
  function(time,time_max)
   {var $js=Int64ops["pre64"];
    var $js$1=$js(time_max);
    var match=find_checkpoint_before($js$1);
    var t=match[1];
    var $js$2=Pervasives["max"];
    var $js$3=$js$2(time,t);
    go_to($js$3);
    var match$1=find_last_breakpoint(time_max);
    var break=match$1[2];
    var new_time=match$1[1];
    var $js$4=break!=0||new_time<=time;
    if($js$4)
     {go_to(new_time);
      interrupted[1]=break!=0,0;
      return last_breakpoint[1]=break,0}
    else
     {return back_to(time,new_time)}};
var
 step_backward=
  function(duration)
   {var $js=Checkpoints["current_time"];
    var time=$js(0);
    var $js$1=time>Int64ops["_0"];
    if($js$1)
     {var $js$2=Pervasives["max"];
      var $js$3=Int64ops["--"];
      var $js$4=$js$3(time,duration);
      var $js$5=$js$2(Int64ops["_0"],$js$4);
      return back_to($js$5,time)}
    else
     {return 0}};
var
 run=
  function(param)
   {internal_step(Debugger_config["checkpoint_big_step"][1]);
    var $js=!interrupted[1];
    if($js){return run(0)}else{return 0}};
var
 back_run=
  function(param)
   {var $js=Checkpoints["current_time"];
    var $js$1=$js(0);
    var $js$2=$js$1>Int64ops["_0"];
    if($js$2)
     {var $js$3=Checkpoints["current_time"];
      var $js$4=$js$3(0);
      return back_to(Int64ops["_0"],$js$4)}
    else
     {return 0}};
var
 step=
  function(duration)
   {var $js=duration>=Int64ops["_0"];
    if($js)
     {return step_forward(duration)}
    else
     {var $js$1=Int64ops["--"];
      var $js$2=$js$1(Int64ops["_0"],duration);
      return step_backward($js$2)}};
var
 finish=
  function(param)
   {var $js=Symbols["update_current_event"];
    $js(0);
    var match=Events["current_event"][1];
    var $js$1=match;
    if($js$1)
     {var $js$2=Debugcom["set_initial_frame"];
      $js$2(0);
      var $js$3=Debugcom["up_frame"];
      var match$1=$js$3(match[1][9]);
      var pc=match$1[2];
      var frame=match$1[1];
      var $js$4=frame<0;
      if($js$4)
       {var $js$5=Pervasives["prerr_endline"];
        $js$5("`finish' not meaningful in outermost frame.");
        "unknown primitive:raise"}
      else
       {}
      try
       {var $js$6=Symbols["any_event_at_pc"];var $js$7=$js$6(pc);0}
      catch(exn)
       {var $js$8=exn=Not_found;
        if($js$8)
         {var $js$9=Pervasives["prerr_endline"];
          $js$9("Calling function has no debugging information.");
          "unknown primitive:raise"}
        else
         {"unknown primitive:reraise"}}
      var $js$10=Trap_barrier["exec_with_trap_barrier"];
      return $js$10
              (frame,
               function(param$1)
                {var $js$11=Breakpoints["exec_with_temporary_breakpoint"];
                 return $js$11
                         (pc,
                          function(param$2)
                           {for(;;)
                             {run(0);
                              var match$2=last_breakpoint[1];
                              var $js$12=match$2;
                              if($js$12)
                               {var match$3=match$2[1];
                                var $js$13=pc=match$3[1];
                                if($js$13)
                                 {interrupted[1]=0,0;var $js$14=frame!=match$3[2]}
                                else
                                 {var exit=18}}
                              else
                               {var exit=18}
                              switch(exit){case 18:var $js$14=0}
                              if($js$14){}else break}
                            return 0})})}
    else
     {var $js$11=Pervasives["prerr_endline"];
      $js$11("`finish' not meaningful in outermost frame.");
      return "unknown primitive:raise"}};
var
 next_1=
  function(param)
   {var $js=Symbols["update_current_event"];
    $js(0);
    var match=Events["current_event"][1];
    var $js$1=match;
    if($js$1)
     {var $js$2=Debugcom["initial_frame"];
      var match$1=$js$2(0);
      var frame1=match$1[1];
      step(Int64ops["_1"]);
      var $js$3=!interrupted[1];
      if($js$3)
       {var $js$4=Symbols["update_current_event"];
        $js$4(0);
        var match$2=Events["current_event"][1];
        var $js$5=match$2;
        if($js$5)
         {var $js$6=Debugcom["initial_frame"];
          var match$3=$js$6(0);
          var frame2=match$3[1];
          var
           $js$7=
            frame1>=0&&frame2>=0&&frame2-match$2[1][9]>frame1-match[1][9];
          if($js$7){return finish(0)}else{return 0}}
        else
         {return 0}}
      else
       {return 0}}
    else
     {return step(Int64ops["_1"])}};
var
 next=
  function(n)
   {var $js=n!=0;
    if($js)
     {next_1(0);
      var $js$1=!interrupted[1];
      if($js$1){return next(n-1)}else{return 0}}
    else
     {return 0}};
var
 start=
  function(param)
   {var $js=Symbols["update_current_event"];
    $js(0);
    var match=Events["current_event"][1];
    var $js$1=match;
    if($js$1)
     {var curr_event=match[1];
      var $js$2=Debugcom["initial_frame"];
      var match$1=$js$2(0);
      var frame=match$1[1];
      var $js$3=Debugcom["up_frame"];
      var match$2=$js$3(curr_event[9]);
      var pc=match$2[2];
      var $js$4=match$2[1]<0;
      if($js$4)
       {var $js$5=Pervasives["prerr_endline"];
        $js$5("`start not meaningful in outermost frame.");
        "unknown primitive:raise"}
      else
       {}
      try
       {var $js$6=Symbols["any_event_at_pc"];var match$3=$js$6(pc)}
      catch(exn)
       {var $js$7=exn=Not_found;
        if($js$7)
         {var $js$8=Pervasives["prerr_endline"];
          $js$8("Calling function has no debugging information.");
          var match$3="unknown primitive:raise"}
        else
         {var match$3="unknown primitive:reraise"}}
      var match$4=match$3[5];
      var $js$9="unknown primitive:isint";
      if($js$9)
       {var $js$10=Misc["fatal_error"];var nargs=$js$10("Time_travel.start")}
      else
       {var nargs=match$4[1]}
      var $js$11=nargs<4;
      if($js$11){var offset=1}else{var offset=2}
      var pc$1=pc-4*offset;
      for(;;)
       {var $js$12=Breakpoints["exec_with_temporary_breakpoint"];
        $js$12(pc$1,back_run);
        var match$5=last_breakpoint[1];
        var $js$13=match$5;
        if($js$13)
         {var match$6=match$5[1];
          var $js$14=pc$1=match$6[1];
          if($js$14)
           {step(Int64ops["_minus1"]);
            var $js$15=!interrupted[1]&&match$6[2]-nargs>frame-curr_event[9]}
          else
           {var exit=5}}
        else
         {var exit=5}
        switch(exit){case 5:var $js$15=0}
        if($js$15){}else break}
      return 0}
    else
     {var $js$16=Pervasives["prerr_endline"];
      $js$16("`start not meaningful in outermost frame.");
      return "unknown primitive:raise"}};
var
 previous_1=
  function(param)
   {var $js=Symbols["update_current_event"];
    $js(0);
    var match=Events["current_event"][1];
    var $js$1=match;
    if($js$1)
     {var $js$2=Debugcom["initial_frame"];
      var match$1=$js$2(0);
      var frame1=match$1[1];
      step(Int64ops["_minus1"]);
      var $js$3=!interrupted[1];
      if($js$3)
       {var $js$4=Symbols["update_current_event"];
        $js$4(0);
        var match$2=Events["current_event"][1];
        var $js$5=match$2;
        if($js$5)
         {var $js$6=Debugcom["initial_frame"];
          var match$3=$js$6(0);
          var frame2=match$3[1];
          var
           $js$7=
            frame1>=0&&frame2>=0&&frame2-match$2[1][9]>frame1-match[1][9];
          if($js$7){return start(0)}else{return 0}}
        else
         {return 0}}
      else
       {return 0}}
    else
     {return step(Int64ops["_minus1"])}};
var
 previous=
  function(n)
   {var $js=n!=0;
    if($js)
     {previous_1(0);
      var $js$1=!interrupted[1];
      if($js$1){return previous(n-1)}else{return 0}}
    else
     {return 0}};
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
