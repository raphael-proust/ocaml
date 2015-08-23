// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Events=require("./events.js");
var Checkpoints=require("./checkpoints.js");
var Program_loading=require("./program_loading.js");
var Set=require("./set.js");
var Bytesections=require("./bytesections.js");
var Debugger_config=require("./debugger_config.js");
var Hashtbl=require("./hashtbl.js");
var Symtable=require("./symtable.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Debugcom=require("./debugcom.js");


var $$let=$$String;

var StringSet=Set["Make"]([0,$$let[25]]);

var modules=[0,/* [] */0];

var program_source_dirs=[0,/* [] */0];

var events=[0,/* [] */0];

var events_by_pc=Hashtbl["create"](/* None */0,257);

var events_by_module=Hashtbl["create"](/* None */0,17);

var all_events_by_module=Hashtbl["create"](/* None */0,17);

var
 relocate_event=
  function(orig,ev)
   {ev[1]=orig+ev[1];
    var match=ev[10];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=44;break}}
    else
     {switch(match[0]){case 0:return match[1][1]=ev[1],0;case 1:exit=44;break}}
    
    switch(exit){case 44:return /* () */0}
    };

var
 read_symbols$prime=
  function(bytecode_file)
   {var ic=Pervasives["open_in_bin"](bytecode_file);
    
    try
     {Bytesections["read_toc"](ic),Bytesections["seek_section"](ic,"SYMB")}
    catch(exn)
     {var exit;
      
      if(exn===Bytesections["Bad_magic_number"])
       {exit=40;}
      else
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {exit=40;}
        else
         {throw exn}
        }
      
      switch(exit)
       {case 40:
         Pervasives["prerr_string"](bytecode_file);
         Pervasives["prerr_endline"](" is not a bytecode file.");
         throw Debugger_config["Toplevel"]
        }
      }
    
    Symtable["restore_state"](Pervasives["input_value"](ic));
    try
     {Bytesections["seek_section"](ic,"DBUG")}
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {Pervasives["prerr_string"](bytecode_file);
        Pervasives["prerr_endline"](" has no debugging info.");
        throw Debugger_config["Toplevel"]}
      else
       {throw exn$1}
      }
    
    var num_eventlists=Pervasives["input_binary_int"](ic);
    
    var dirs=StringSet[1];
    
    var eventlists=/* [] */0;
    
    for(var i=1;i<=num_eventlists;i++)
     {var orig=Pervasives["input_binary_int"](ic);
      
      var evl=Pervasives["input_value"](ic);
      
      List["iter"](relocate_event(orig),evl);
      eventlists=/* :: */[0,evl,eventlists];
      
      dirs=
      List["fold_left"]
       (function(s,e){return StringSet[4](e,s)},
        dirs,
        Pervasives["input_value"](ic));
      }
    
    try
     {Bytesections["seek_section"](ic,"CODE")}
    catch(exn$2)
     {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
       {Program_loading["set_launching_function"]
         (List["assoc"]("manual",Program_loading["loading_modes"]))}
      else
       {throw exn$2}
      }
    
    Pervasives["close_in_noerr"](ic);
    return /* tuple */[0,eventlists,dirs]};

var
 read_symbols=
  function(bytecode_file)
   {var match=read_symbols$prime(bytecode_file);
    
    var all_events=match[1];
    
    modules[1]=/* [] */0;
    events[1]=/* [] */0;
    program_source_dirs[1]=StringSet[20](match[2]);
    Hashtbl["clear"](events_by_pc);
    Hashtbl["clear"](events_by_module);
    Hashtbl["clear"](all_events_by_module);
    List["iter"]
     (function(evl)
       {return List["iter"]
                (function(ev)
                  {events[1]=/* :: */[0,ev,events[1]];
                   return Hashtbl["add"](events_by_pc,ev[1],ev)},
                 evl)},
      all_events);
    return List["iter"]
            (function(evl)
              {if(evl)
                {var md=evl[1][2];
                 
                 var
                  cmp=
                   function(ev1,ev2)
                    {return CamlPrimitive["caml_int_compare"]
                             (Events["get_pos"](ev1)[4],Events["get_pos"](ev2)[4])};
                 
                 var sorted_evl=List["sort"](cmp,evl);
                 
                 modules[1]=/* :: */[0,md,modules[1]];
                 Hashtbl["add"](all_events_by_module,md,sorted_evl);
                 var
                  real_evl=
                   List["filter"]
                    (function(param)
                      {var match$1=param[4];
                       
                       var exit;
                       
                       if(typeof match$1==="number")
                        {if(match$1!==0){return /* false */0}else{exit=25;}}
                       else
                        {exit=25;}
                       
                       switch(exit){case 25:return /* true */1}
                       },
                     sorted_evl);
                 
                 return Hashtbl["add"]
                         (events_by_module,md,$$Array["of_list"](real_evl))}
               else
                {return /* () */0}
               },
             all_events)};

var any_event_at_pc=function(pc){return Hashtbl["find"](events_by_pc,pc)};

var
 event_at_pc=
  function(pc)
   {var ev=any_event_at_pc(pc);
    
    var match=ev[4];
    
    var exit;
    
    if(typeof match==="number")
     {if(match!==0)
       {throw CamlPrimitive["caml_global_data"]["Not_found"]}
      else
       {exit=21;}
      }
    else
     {exit=21;}
    
    switch(exit){case 21:return ev}
    };

var
 set_event_at_pc=
  function(pc)
   {try
     {event_at_pc(pc);return Debugcom["set_event"](pc)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* () */0}
      else
       {throw exn}
      }
    };

var
 events_in_module=
  function(mdle)
   {try
     {return Hashtbl["find"](all_events_by_module,mdle)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* [] */0}
      else
       {throw exn}
      }
    };

var
 find_event=
  function(ev,$$char)
   {var
     bsearch=
      function(lo,hi)
       {if(lo>=hi)
         {if(Events["get_pos"](ev[hi+1])[4]<$$char)
           {throw CamlPrimitive["caml_global_data"]["Not_found"]}
          else
           {return hi}
          }
        else
         {var pivot=(lo+hi)/2;
          
          var e=ev[pivot+1];
          
          return $$char<=Events["get_pos"](e)[4]
                  ?bsearch(lo,pivot)
                  :bsearch(pivot+1,hi)}
        };
    
    return bsearch(0,/* -1 for tag */ev["length"]-1-1)};

var
 event_at_pos=
  function(md,$$char)
   {var ev=Hashtbl["find"](events_by_module,md);
    
    return ev[find_event(ev,$$char)+1]};

var
 event_near_pos=
  function(md,$$char)
   {var ev=Hashtbl["find"](events_by_module,md);
    
    try
     {var pos=find_event(ev,$$char);
      
      return pos>
              0&&
              $$char-
              Events["get_pos"](ev[pos-1+1])[4]<=
              Events["get_pos"](ev[pos+1])[4]-
              $$char
              ?ev[pos-1+1]
              :ev[pos+1]}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var pos$1=/* -1 for tag */ev["length"]-1-1;
        
        if(pos$1<0){throw CamlPrimitive["caml_global_data"]["Not_found"]}
        
        return ev[pos$1+1]}
      else
       {throw exn}
      }
    };

var
 set_all_events=
  function(param)
   {return Hashtbl["iter"]
            (function(pc,ev)
              {var match=ev[4];
               
               var exit;
               
               if(typeof match==="number")
                {if(match!==0){return /* () */0}else{exit=5;}}
               else
                {exit=5;}
               
               switch(exit){case 5:return Debugcom["set_event"](ev[1])}
               },
             events_by_pc)};

var old_pc=[0,/* None */0];

var
 update_current_event=
  function(param)
   {var opt_pc=Checkpoints["current_pc"](/* () */0);
    
    if(opt_pc)
     {if(CamlPrimitive["caml_notequal"](opt_pc,old_pc[1]))
       {var $js;
        try
         {$js=/* Some */[0,event_at_pc(opt_pc[1])];}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {$js=/* None */0;}
          else
           {throw exn}
          }
        Events["current_event"][1]=$js;
        return old_pc[1]=opt_pc,0}
      else
       {return /* () */0}
      }
    else
     {Events["current_event"][1]=/* None */0;return old_pc[1]=/* None */0,0}
    };

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

