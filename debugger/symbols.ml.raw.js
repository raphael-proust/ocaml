var List=require("List");
var Pervasives=require("Pervasives");
var Events=require("Events");
var Checkpoints=require("Checkpoints");
var Program_loading=require("Program_loading");
var Set=require("Set");
var Bytesections=require("Bytesections");
var Debugger_config=require("Debugger_config");
var Hashtbl=require("Hashtbl");
var Array=require("Array");
var Symtable=require("Symtable");
var Debugcom=require("Debugcom");
var $js=Set["Make"];
var let=String;
var $js$1=[0,let[25]];
var StringSet=$js($js$1);
var modules=[0,0];
var program_source_dirs=[0,0];
var events=[0,0];
var $js$2=Hashtbl["create"];
var events_by_pc=$js$2(0,257);
var $js$3=Hashtbl["create"];
var events_by_module=$js$3(0,17);
var $js$4=Hashtbl["create"];
var all_events_by_module=$js$4(0,17);
var
 relocate_event=
  function(orig,ev)
   {ev[1]=orig+ev[1],0;
    var match=ev[10];
    var $js$5=match;
    if(typeof $js$5=="number")
     {if($js$5==0){var exit=44}}
    else
     {var $js$6=$js$5[0];
      if($js$6==0){return match[1][1]=ev[1],0}else if($js$6==1){var exit=44}}
    switch(exit){case 44:return 0}};
var
 read_symbols'=
  function(bytecode_file)
   {var $js$5=Pervasives["open_in_bin"];
    var ic=$js$5(bytecode_file);
    try
     {var $js$6=Bytesections["read_toc"];
      $js$6(ic);
      var $js$7=Bytesections["seek_section"];
      var $js$8=$js$7(ic,"SYMB");
      0}
    catch(exn)
     {var $js$9=exn=Bytesections["Bad_magic_number"];
      if($js$9)
       {var exit=40}
      else
       {var $js$10=exn=Not_found;
        if($js$10){var exit=40}else{"unknown primitive:reraise"}}
      switch(exit)
       {case 40:
         var $js$11=Pervasives["prerr_string"];
         $js$11(bytecode_file);
         var $js$12=Pervasives["prerr_endline"];
         $js$12(" is not a bytecode file.");
         "unknown primitive:raise"
        }}
    var $js$13=Symtable["restore_state"];
    var $js$14=Pervasives["input_value"];
    var $js$15=$js$14(ic);
    $js$13($js$15);
    try
     {var $js$16=Bytesections["seek_section"];var $js$17=$js$16(ic,"DBUG");0}
    catch(exn$1)
     {var $js$18=exn$1=Not_found;
      if($js$18)
       {var $js$19=Pervasives["prerr_string"];
        $js$19(bytecode_file);
        var $js$20=Pervasives["prerr_endline"];
        $js$20(" has no debugging info.");
        "unknown primitive:raise"}
      else
       {"unknown primitive:reraise"}}
    var $js$21=Pervasives["input_binary_int"];
    var num_eventlists=$js$21(ic);
    var dirs=StringSet[1];
    var eventlists=0;
    var $js$22=1;
    var $js$23=num_eventlists;
    for(var i=$js$22;i<=$js$23;i++)
     {var $js$24=Pervasives["input_binary_int"];
      var orig=$js$24(ic);
      var $js$25=Pervasives["input_value"];
      var evl=$js$25(ic);
      var $js$26=List["iter"];
      var $js$27=relocate_event(orig);
      $js$26($js$27,evl);
      var $js$28=[0,evl,eventlists];
      var eventlists=$js$28;
      var $js$29=List["fold_left"];
      var $js$30=Pervasives["input_value"];
      var $js$31=$js$30(ic);
      var
       $js$32=
        $js$29
         (function(s,e){var $js$33=StringSet[4];return $js$33(e,s)},
          dirs,
          $js$31);
      var dirs=$js$32}
    try
     {var $js$33=Bytesections["seek_section"];var $js$34=$js$33(ic,"CODE");0}
    catch(exn$2)
     {var $js$35=exn$2=Not_found;
      if($js$35)
       {var $js$36=Program_loading["set_launching_function"];
        var $js$37=List["assoc"];
        var $js$38=$js$37("manual",Program_loading["loading_modes"]);
        $js$36($js$38)}
      else
       {"unknown primitive:reraise"}}
    var $js$39=Pervasives["close_in_noerr"];
    $js$39(ic);
    return [0,eventlists,dirs]};
var
 read_symbols=
  function(bytecode_file)
   {var match=read_symbols'(bytecode_file);
    var all_events=match[1];
    modules[1]=0,0;
    events[1]=0,0;
    var $js$5=StringSet[20];
    var $js$6=$js$5(match[2]);
    program_source_dirs[1]=$js$6,0;
    var $js$7=Hashtbl["clear"];
    $js$7(events_by_pc);
    var $js$8=Hashtbl["clear"];
    $js$8(events_by_module);
    var $js$9=Hashtbl["clear"];
    $js$9(all_events_by_module);
    var $js$10=List["iter"];
    $js$10
     (function(evl)
       {var $js$11=List["iter"];
        return $js$11
                (function(ev)
                  {events[1]=[0,ev,events[1]],0;
                   var $js$12=Hashtbl["add"];
                   return $js$12(events_by_pc,ev[1],ev)},
                 evl)},
      all_events);
    var $js$11=List["iter"];
    return $js$11
            (function(evl)
              {var $js$12=evl;
               if($js$12)
                {var md=evl[1][2];
                 var
                  cmp=
                   function(ev1,ev2)
                    {var $js$13=Events["get_pos"];
                     var $js$14=$js$13(ev1);
                     var $js$15=$js$14[4];
                     var $js$16=Events["get_pos"];
                     var $js$17=$js$16(ev2);
                     var $js$18=$js$17[4];
                     return "unknown primitive:caml_int_compare"};
                 var $js$13=List["sort"];
                 var sorted_evl=$js$13(cmp,evl);
                 modules[1]=[0,md,modules[1]],0;
                 var $js$14=Hashtbl["add"];
                 $js$14(all_events_by_module,md,sorted_evl);
                 var $js$15=List["filter"];
                 var
                  real_evl=
                   $js$15
                    (function(param)
                      {var match$1=param[4];
                       var $js$16="unknown primitive:isint";
                       if($js$16)
                        {var $js$17=match$1!=0;
                         if($js$17){return 0}else{var exit=25}}
                       else
                        {var exit=25}
                       switch(exit){case 25:return 1}},
                     sorted_evl);
                 var $js$16=Hashtbl["add"];
                 var $js$17=Array["of_list"];
                 var $js$18=$js$17(real_evl);
                 return $js$16(events_by_module,md,$js$18)}
               else
                {return 0}},
             all_events)};
var
 any_event_at_pc=
  function(pc){var $js$5=Hashtbl["find"];return $js$5(events_by_pc,pc)};
var
 event_at_pc=
  function(pc)
   {var ev=any_event_at_pc(pc);
    var match=ev[4];
    var $js$5="unknown primitive:isint";
    if($js$5)
     {var $js$6=match!=0;
      if($js$6){return "unknown primitive:raise"}else{var exit=21}}
    else
     {var exit=21}
    switch(exit){case 21:return ev}};
var
 set_event_at_pc=
  function(pc)
   {try
     {var $js$5=event_at_pc(pc);
      0;
      var $js$6=Debugcom["set_event"];
      return $js$6(pc)}
    catch(exn)
     {var $js$7=exn=Not_found;
      if($js$7){return 0}else{return "unknown primitive:reraise"}}};
var
 events_in_module=
  function(mdle)
   {try
     {var $js$5=Hashtbl["find"];return $js$5(all_events_by_module,mdle)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6){return 0}else{return "unknown primitive:reraise"}}};
var
 find_event=
  function(ev,char)
   {var
     bsearch=
      function(lo,hi)
       {var $js$5=lo>=hi;
        if($js$5)
         {var $js$6=Events["get_pos"];
          var $js$7=$js$6(ev[hi]);
          var $js$8=$js$7[4];
          var $js$9=$js$8<char;
          if($js$9){return "unknown primitive:raise"}else{return hi}}
        else
         {var pivot=(lo+hi)/2;
          var e=ev[pivot];
          var $js$10=Events["get_pos"];
          var $js$11=$js$10(e);
          var $js$12=$js$11[4];
          var $js$13=char<=$js$12;
          if($js$13){return bsearch(lo,pivot)}else{return bsearch(pivot+1,hi)}}};
    return bsearch(0,ev["length"]-1)};
var
 event_at_pos=
  function(md,char)
   {var $js$5=Hashtbl["find"];
    var ev=$js$5(events_by_module,md);
    var $js$6=find_event(ev,char);
    return ev[$js$6]};
var
 event_near_pos=
  function(md,char)
   {var $js$5=Hashtbl["find"];
    var ev=$js$5(events_by_module,md);
    try
     {var pos=find_event(ev,char);
      var $js$6=Events["get_pos"];
      var $js$7=$js$6(ev[pos-1]);
      var $js$8=$js$7[4];
      var $js$9=char-$js$8;
      var $js$10=Events["get_pos"];
      var $js$11=$js$10(ev[pos]);
      var $js$12=$js$11[4];
      var $js$13=$js$12-char;
      var $js$14=$js$9<=$js$13;
      var $js$15=pos>0&&$js$14;
      if($js$15){return ev[pos-1]}else{return ev[pos]}}
    catch(exn)
     {var $js$16=exn=Not_found;
      if($js$16)
       {var pos$1=ev["length"]-1;
        var $js$17=pos$1<0;
        if($js$17){"unknown primitive:raise"}else{}
        return ev[pos$1]}
      else
       {return "unknown primitive:reraise"}}};
var
 set_all_events=
  function(param)
   {var $js$5=Hashtbl["iter"];
    return $js$5
            (function(pc,ev)
              {var match=ev[4];
               var $js$6="unknown primitive:isint";
               if($js$6)
                {var $js$7=match!=0;if($js$7){return 0}else{var exit=5}}
               else
                {var exit=5}
               switch(exit)
                {case 5:var $js$8=Debugcom["set_event"];return $js$8(ev[1])}},
             events_by_pc)};
var old_pc=[0,0];
var
 update_current_event=
  function(param)
   {var $js$5=Checkpoints["current_pc"];
    var opt_pc=$js$5(0);
    var $js$6=opt_pc;
    if($js$6)
     {var $js$7="unknown primitive:caml_notequal";
      if($js$7)
       {try
         {var $js$8=event_at_pc(opt_pc[1]);var $js$9=[0,$js$8]}
        catch(exn)
         {var $js$10=exn=Not_found;
          if($js$10){var $js$9=0}else{var $js$9="unknown primitive:reraise"}}
        Events["current_event"][1]=$js$9,0;
        return old_pc[1]=opt_pc,0}
      else
       {return 0}}
    else
     {Events["current_event"][1]=0,0;return old_pc[1]=0,0}};
module["exports"]=
{"modules":modules,
 "program_source_dirs":program_source_dirs,
 "read_symbols":read_symbols,
 "set_all_events":set_all_events,
 "any_event_at_pc":any_event_at_pc,
 "event_at_pc":event_at_pc,
 "set_event_at_pc":set_event_at_pc,
 "events_in_module":events_in_module,
 "event_at_pos":event_at_pos,
 "event_near_pos":event_near_pos,
 "update_current_event":update_current_event};
