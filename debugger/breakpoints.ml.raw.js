var List=require("List");
var Pervasives=require("Pervasives");
var Symbols=require("Symbols");
var Printf=require("Printf");
var Checkpoints=require("Checkpoints");
var Pos=require("Pos");
var Exec=require("Exec");
var Debugcom=require("Debugcom");
var debug_breakpoints=[0,0];
var breakpoint_number=[0,0];
var breakpoints=[0,0];
var positions=[0,0];
var current_version=[0,0];
var max_version=[0,0];
var
 copy_breakpoints=
  function(param)
   {Checkpoints["current_checkpoint"][1][9]=positions[1],0;
    return Checkpoints["current_checkpoint"][1][8]=current_version[1],0};
var
 new_version=
  function(param){max_version[0]++;return current_version[1]=max_version[1],0};
var
 breakpoints_count=
  function(param){var $js=List["length"];return $js(breakpoints[1])};
var
 breakpoints_at_pc=
  function(pc)
   {var $js=Pervasives["@"];
    try
     {var $js$1=Symbols["event_at_pc"];
      var ev=$js$1(pc);
      var match=ev[10];
      var $js$2=match;
      if(typeof $js$2=="number")
       {if($js$2==0){var exit=27}}
      else
       {var $js$3=$js$2[0];
        if($js$3==0)
         {var exit=27}
        else
         if($js$3==1){var pc'=match[1][1];var $js$4=breakpoints_at_pc(pc')}}
      switch(exit){case 27:var $js$4=0}}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5){var $js$4=0}else{var $js$4="unknown primitive:reraise"}}
    var $js$6=List["map"];
    var $js$7=List["filter"];
    var
     $js$8=
      $js$7(function(param){var pos=param[2][1];return pos=pc},breakpoints[1]);
    var $js$9=$js$6(function(prim){return prim[1]},$js$8);
    return $js($js$4,$js$9)};
var
 breakpoint_at_pc=
  function(pc){var $js=breakpoints_at_pc(pc);return $js!=0};
var
 remove_breakpoints=
  function(pos)
   {var $js=debug_breakpoints[1];
    if($js)
     {var $js$1=Pervasives["print_string"];
      $js$1("Removing breakpoints...");
      var $js$2=Pervasives["print_newline"];
      $js$2(0)}
    else
     {}
    var $js$3=List["iter"];
    return $js$3
            (function(param)
              {var pos$1=param[1];
               var $js$4=debug_breakpoints[1];
               if($js$4)
                {var $js$5=Pervasives["print_int"];
                 $js$5(pos$1);
                 var $js$6=Pervasives["print_newline"];
                 $js$6(0)}
               else
                {}
               var $js$7=Debugcom["reset_instr"];
               $js$7(pos$1);
               var $js$8=Symbols["set_event_at_pc"];
               return $js$8(pos$1)},
             pos)};
var
 set_breakpoints=
  function(pos)
   {var $js=debug_breakpoints[1];
    if($js)
     {var $js$1=Pervasives["print_string"];
      $js$1("Setting breakpoints...");
      var $js$2=Pervasives["print_newline"];
      $js$2(0)}
    else
     {}
    var $js$3=List["iter"];
    return $js$3
            (function(param)
              {var pos$1=param[1];
               var $js$4=debug_breakpoints[1];
               if($js$4)
                {var $js$5=Pervasives["print_int"];
                 $js$5(pos$1);
                 var $js$6=Pervasives["print_newline"];
                 $js$6(0)}
               else
                {}
               var $js$7=Debugcom["set_breakpoint"];
               return $js$7(pos$1)},
             pos)};
var
 update_breakpoints=
  function(param)
   {var $js=debug_breakpoints[1];
    if($js)
     {var $js$1=Pervasives["prerr_string"];
      $js$1("Updating breakpoints... ");
      var $js$2=Pervasives["prerr_int"];
      $js$2(Checkpoints["current_checkpoint"][1][8]);
      var $js$3=Pervasives["prerr_string"];
      $js$3(" ");
      var $js$4=Pervasives["prerr_int"];
      $js$4(current_version[1]);
      var $js$5=Pervasives["prerr_endline"];
      $js$5("")}
    else
     {}
    var $js$6=Checkpoints["current_checkpoint"][1][8]!=current_version[1];
    if($js$6)
     {var $js$7=Exec["protect"];
      return $js$7
              (function(param$1)
                {remove_breakpoints(Checkpoints["current_checkpoint"][1][9]);
                 set_breakpoints(positions[1]);
                 return copy_breakpoints(0)})}
    else
     {return 0}};
var
 change_version=
  function(version,pos)
   {var $js=Exec["protect"];
    return $js
            (function(param)
              {current_version[1]=version,0;return positions[1]=pos,0})};
var
 execute_without_breakpoints=
  function(f)
   {var version=current_version[1];
    var pos=positions[1];
    change_version(0,0);
    try
     {f(0);return change_version(version,pos)}
    catch(x){return change_version(version,pos)}};
var
 insert_position=
  function(pos)
   {try
     {var $js=List["assoc"];var $js$1=$js(pos,positions[1]);return $js$1[0]++}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2)
       {positions[1]=[0,[0,pos,[0,1]],positions[1]],0;return new_version(0)}
      else
       {return "unknown primitive:reraise"}}};
var
 remove_position=
  function(pos)
   {var $js=List["assoc"];
    var count=$js(pos,positions[1]);
    count[0]--;
    var $js$1=count[1]=0;
    if($js$1)
     {var $js$2=List["remove_assoc"];
      var $js$3=$js$2(pos,positions[1]);
      positions[1]=$js$3,0;
      return new_version(0)}
    else
     {return 0}};
var
 new_breakpoint=
  function(event)
   {var match=event[10];
    var $js=match;
    if(typeof $js=="number")
     {if($js==0){var exit=12}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var exit=12}
      else
       if($js$1==1)
        {var $js$2=Symbols["any_event_at_pc"];
         var $js$3=$js$2(match[1][1]);
         return new_breakpoint($js$3)}}
    switch(exit)
     {case 12:
       var $js$4=Exec["protect"];
       $js$4
        (function(param)
          {breakpoint_number[0]++;
           insert_position(event[1]);
           return breakpoints[1]=
                  [0,[0,breakpoint_number[1],event],breakpoints[1]],
                  0});
       var $js$5=Printf["printf"];
       var $js$6=Pos["get_desc"];
       var $js$7=$js$6(event);
       $js$5
        ([0,
          [11,"Breakpoint ",[4,0,0,0,[11," at ",[4,0,0,0,[11,": ",[2,0,0]]]]]],
          "Breakpoint %d at %d: %s"],
         breakpoint_number[1],
         event[1],
         $js$7);
       var $js$8=Pervasives["print_newline"];
       return $js$8(0)
      }};
var
 remove_breakpoint=
  function(number)
   {try
     {var $js=List["assoc"];
      var ev=$js(number,breakpoints[1]);
      var pos=ev[1];
      var $js$1=Exec["protect"];
      return $js$1
              (function(param)
                {var $js$2=List["remove_assoc"];
                 var $js$3=$js$2(number,breakpoints[1]);
                 breakpoints[1]=$js$3,0;
                 remove_position(pos);
                 var $js$4=Printf["printf"];
                 var $js$5=Pos["get_desc"];
                 var $js$6=$js$5(ev);
                 $js$4
                  ([0,
                    [11,
                     "Removed breakpoint ",
                     [4,0,0,0,[11," at ",[4,0,0,0,[11,": ",[2,0,0]]]]]],
                    "Removed breakpoint %d at %d: %s"],
                   number,
                   ev[1],
                   $js$6);
                 var $js$7=Pervasives["print_newline"];
                 return $js$7(0)})}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2)
       {var $js$3=Pervasives["prerr_endline"];
        var $js$4=Pervasives["^"];
        var $js$5=Pervasives["^"];
        var $js$6=Pervasives["string_of_int"];
        var $js$7=$js$6(number);
        var $js$8=$js$5($js$7,".");
        var $js$9=$js$4("No breakpoint number ",$js$8);
        $js$3($js$9);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 remove_all_breakpoints=
  function(param)
   {var $js=List["iter"];
    return $js
            (function(param$1){return remove_breakpoint(param$1[1])},
             breakpoints[1])};
var temporary_breakpoint_position=[0,0];
var
 exec_with_temporary_breakpoint=
  function(pc,funct)
   {var previous_version=current_version[1];
    var
     remove=
      function(param)
       {temporary_breakpoint_position[1]=0,0;
        current_version[1]=previous_version,0;
        var $js=List["assoc"];
        var count=$js(pc,positions[1]);
        count[0]--;
        var $js$1=count[1]=0;
        if($js$1)
         {var $js$2=List["remove_assoc"];
          var $js$3=$js$2(pc,positions[1]);
          positions[1]=$js$3,0;
          var $js$4=Debugcom["reset_instr"];
          $js$4(pc);
          var $js$5=Symbols["set_event_at_pc"];
          return $js$5(pc)}
        else
         {return 0}};
    var $js=Exec["protect"];
    $js(function(param){return insert_position(pc)});
    temporary_breakpoint_position[1]=[0,pc],0;
    try
     {funct(0);var $js$1=Exec["protect"];return $js$1(remove)}
    catch(x)
     {var $js$2=Exec["protect"];
      $js$2(remove);
      return "unknown primitive:reraise"}};
module["exports"]=
{"debug_breakpoints":debug_breakpoints,
 "breakpoints_count":breakpoints_count,
 "breakpoints":breakpoints,
 "breakpoint_at_pc":breakpoint_at_pc,
 "breakpoints_at_pc":breakpoints_at_pc,
 "update_breakpoints":update_breakpoints,
 "execute_without_breakpoints":execute_without_breakpoints,
 "new_breakpoint":new_breakpoint,
 "remove_breakpoint":remove_breakpoint,
 "remove_all_breakpoints":remove_all_breakpoints,
 "temporary_breakpoint_position":temporary_breakpoint_position,
 "exec_with_temporary_breakpoint":exec_with_temporary_breakpoint};
