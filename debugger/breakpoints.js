// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Symbols=require("./symbols.js");
var Printf=require("./printf.js");
var Checkpoints=require("./checkpoints.js");
var Pos=require("./pos.js");
var Exec=require("./exec.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Debugcom=require("./debugcom.js");


var debug_breakpoints=[0,/* false */0];

var breakpoint_number=[0,0];

var breakpoints=[0,/* [] */0];

var positions=[0,/* [] */0];

var current_version=[0,0];

var max_version=[0,0];

var
 copy_breakpoints=
  function(param)
   {Checkpoints["current_checkpoint"][1][9]=positions[1];
    return Checkpoints["current_checkpoint"][1][8]=current_version[1],0};

var
 new_version=
  function(param){max_version[0]++;return current_version[1]=max_version[1],0};

var breakpoints_count=function(param){return List["length"](breakpoints[1])};

var
 breakpoints_at_pc=
  function(pc)
   {var $js;
    try
     {var ev=Symbols["event_at_pc"](pc);
      
      var match=ev[10];
      
      var exit;
      
      if(typeof match==="number")
       {switch(match){case 0:exit=27;break}}
      else
       {switch(match[0])
         {case 0:exit=27;break;
          case 1:
           var pc$prime=match[1][1];$js=breakpoints_at_pc(pc$prime);break
          }}
      
      switch(exit){case 27:$js=/* [] */0;break}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {$js=/* [] */0;}
      else
       {throw exn}
      }
    return Pervasives["@"]
            ($js,
             List["map"]
              (function(prim){return prim[1]},
               List["filter"]
                (function(param){var pos=param[2][1];return pos===pc},
                 breakpoints[1])))};

var breakpoint_at_pc=function(pc){return breakpoints_at_pc(pc)!==/* [] */0};

var
 remove_breakpoints=
  function(pos)
   {if(debug_breakpoints[1])
     {Pervasives["print_string"]("Removing breakpoints..."),
      Pervasives["print_newline"](/* () */0)}
    
    return List["iter"]
            (function(param)
              {var pos$1=param[1];
               
               if(debug_breakpoints[1])
                {Pervasives["print_int"](pos$1),
                 Pervasives["print_newline"](/* () */0)}
               
               Debugcom["reset_instr"](pos$1);
               return Symbols["set_event_at_pc"](pos$1)},
             pos)};

var
 set_breakpoints=
  function(pos)
   {if(debug_breakpoints[1])
     {Pervasives["print_string"]("Setting breakpoints..."),
      Pervasives["print_newline"](/* () */0)}
    
    return List["iter"]
            (function(param)
              {var pos$1=param[1];
               
               if(debug_breakpoints[1])
                {Pervasives["print_int"](pos$1),
                 Pervasives["print_newline"](/* () */0)}
               
               return Debugcom["set_breakpoint"](pos$1)},
             pos)};

var
 update_breakpoints=
  function(param)
   {if(debug_breakpoints[1])
     {Pervasives["prerr_string"]("Updating breakpoints... "),
      Pervasives["prerr_int"](Checkpoints["current_checkpoint"][1][8]),
      Pervasives["prerr_string"](" "),
      Pervasives["prerr_int"](current_version[1]),
      Pervasives["prerr_endline"]("")}
    
    return Checkpoints["current_checkpoint"][1][8]!==current_version[1]
            ?Exec["protect"]
              (function(param$1)
                {remove_breakpoints(Checkpoints["current_checkpoint"][1][9]);
                 set_breakpoints(positions[1]);
                 return copy_breakpoints(/* () */0)})
            :0};

var
 change_version=
  function(version,pos)
   {return Exec["protect"]
            (function(param)
              {current_version[1]=version;return positions[1]=pos,0})};

var
 execute_without_breakpoints=
  function(f)
   {var version=current_version[1];
    
    var pos=positions[1];
    
    change_version(0,/* [] */0);
    try
     {f(/* () */0);return change_version(version,pos)}
    catch(x){return change_version(version,pos)}
    };

var
 insert_position=
  function(pos)
   {try
     {return List["assoc"](pos,positions[1])[0]++}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {positions[1]=/* :: */[0,/* tuple */[0,pos,[0,1]],positions[1]];
        return new_version(/* () */0)}
      else
       {throw exn}
      }
    };

var
 remove_position=
  function(pos)
   {var count=List["assoc"](pos,positions[1]);
    
    count[0]--;
    return count[1]===0
            ?(positions[1]=
              List["remove_assoc"](pos,positions[1]),
              new_version(/* () */0))
            :0};

var
 new_breakpoint=
  function($$event)
   {var match=$$event[10];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=12;break}}
    else
     {switch(match[0])
       {case 0:exit=12;break;
        case 1:return new_breakpoint(Symbols["any_event_at_pc"](match[1][1]))
        }}
    
    switch(exit)
     {case 12:
       Exec["protect"]
        (function(param)
          {breakpoint_number[0]++;
           insert_position($$event[1]);
           return breakpoints[1]=
                  /* :: */[0,
                   /* tuple */[0,breakpoint_number[1],$$event],
                   breakpoints[1]],
                  0});
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,
           "Breakpoint ",
           [/* Int */4,
            /* Int_d */0,
            /* No_padding */0,
            /* No_precision */0,
            [/* String_literal */11,
             " at ",
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* String_literal */11,
               ": ",
               [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
          "Breakpoint %d at %d: %s"],
         breakpoint_number[1],
         $$event[1],
         Pos["get_desc"]($$event));
       return Pervasives["print_newline"](/* () */0)
      }
    };

var
 remove_breakpoint=
  function(number)
   {try
     {var ev=List["assoc"](number,breakpoints[1]);
      
      var pos=ev[1];
      
      return Exec["protect"]
              (function(param)
                {breakpoints[1]=List["remove_assoc"](number,breakpoints[1]);
                 remove_position(pos);
                 Printf["printf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Removed breakpoint ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11,
                       " at ",
                       [/* Int */4,
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* String_literal */11,
                         ": ",
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                    "Removed breakpoint %d at %d: %s"],
                   number,
                   ev[1],
                   Pos["get_desc"](ev));
                 return Pervasives["print_newline"](/* () */0)})}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {Pervasives["prerr_endline"]
         (Pervasives["^"]
           ("No breakpoint number ",
            Pervasives["^"](Pervasives["string_of_int"](number),".")));
        throw CamlPrimitive["caml_global_data"]["Not_found"]}
      else
       {throw exn}
      }
    };

var
 remove_all_breakpoints=
  function(param)
   {return List["iter"]
            (function(param$1){return remove_breakpoint(param$1[1])},
             breakpoints[1])};

var temporary_breakpoint_position=[0,/* None */0];

var
 exec_with_temporary_breakpoint=
  function(pc,funct)
   {var previous_version=current_version[1];
    
    var
     remove=
      function(param)
       {temporary_breakpoint_position[1]=/* None */0;
        current_version[1]=previous_version;
        var count=List["assoc"](pc,positions[1]);
        
        count[0]--;
        return count[1]===0
                ?(positions[1]=
                  List["remove_assoc"](pc,positions[1]),
                  Debugcom["reset_instr"](pc),
                  Symbols["set_event_at_pc"](pc))
                :0};
    
    Exec["protect"](function(param){return insert_position(pc)});
    temporary_breakpoint_position[1]=/* Some */[0,pc];
    try
     {funct(/* () */0);return Exec["protect"](remove)}
    catch(x){Exec["protect"](remove);throw x}
    };

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

