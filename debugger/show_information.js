// Generated CODE, PLEASE EDIT WITH CARE 

var Frames=require("Frames");
var Breakpoints=require("Breakpoints");
var List=require("List");
var Symbols=require("Symbols");
var Events=require("Events");
var Checkpoints=require("Checkpoints");
var Format=require("Format");
var Printval=require("Printval");
var Misc=require("Misc");
var Parameters=require("Parameters");
var Show_source=require("Show_source");
var Source=require("Source");
var Debugcom=require("Debugcom");


var
 show_current_event=
  function(ppf)
   {Format["fprintf"]
     (ppf,
      [0,[11,"Time: ",[7,3,0,0,0]],"Time: %Li"],
      Checkpoints["current_time"](0));
    var match=Checkpoints["current_pc"](0);
    
    if(match)
     {Format["fprintf"]
       (ppf,[0,[11," - pc: ",[4,3,0,0,0]]," - pc: %i"],match[1])}
    else
     {}
    
    Symbols["update_current_event"](0);
    Frames["reset_frame"](0);
    var match$1=Checkpoints["current_report"](0);
    
    if(match$1)
     {var match$2=match$1[1];
      
      var exit;
      
      switch(match$2[1][0])
       {case 0:exit=10;
        case 1:exit=10;
        case 2:
         Format["fprintf"]
          (ppf,[0,[17,4,[11,"Program exit.",[17,4,0]]],"@.Program exit.@."]);
         return Show_source["show_no_point"](0);
         
        case 3:
         return Misc["fatal_error"]("Show_information.show_current_event");
        case 4:
         Format["fprintf"]
          (ppf,
           [0,
            [17,
             4,
             [11,
              "Program end.",
              [17,
               4,
               [18,
                [1,[0,0,""]],
                [11,
                 "Uncaught exception:",
                 [17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]]],
            "@.Program end.@.@[Uncaught exception:@ %a@]@."],
           Printval["print_exception"],
           Debugcom["Remote_value"][11](0));
         return Show_source["show_no_point"](0);
         
        }
      
      switch(exit)
       {case 10:
         var ev=Events["get_current_event"](0);
         
         Format["fprintf"]
          (ppf,[0,[11," - module ",[2,0,[17,4,0]]]," - module %s@."],ev[2]);
         var breakpoints=Breakpoints["breakpoints_at_pc"](match$2[4]);
         
         if(breakpoints)
          {if(breakpoints[2])
            {Format["fprintf"]
              (ppf,
               [0,[11,"Breakpoints: ",[15,[17,4,0]]],"Breakpoints: %a@."],
               function(ppf$1,l)
                {return List["iter"]
                         (function(x)
                           {return Format["fprintf"]
                                    (ppf$1,[0,[4,3,0,0,[12,32,0]],"%i "],x);
                            },
                          l);
                 },
               List["sort"]
                (function(prim,prim$1)
                  {return "unknown primitive:caml_compare";},
                 breakpoints))}
           else
            {Format["fprintf"]
              (ppf,
               [0,[11,"Breakpoint: ",[4,3,0,0,[17,4,0]]],"Breakpoint: %i@."],
               breakpoints[1])}
           }
         else
          {}
         
         return Show_source["show_point"](ev,1);
         
        }
      }
    else
     {Format["fprintf"]
       (ppf,
        [0,
         [17,4,[11,"Beginning of program.",[17,4,0]]],
         "@.Beginning of program.@."]);
      return Show_source["show_no_point"](0);
      }
    };

var
 show_one_frame=
  function(framenum,ppf,$$event)
   {var pos=Events["get_pos"]($$event);
    
    try
     {var buffer=Source["get_buffer"](pos,$$event[2]);
      
      var cnum=Source["start_and_cnum"](buffer,pos)[2];
      }
    catch(exn){var cnum=pos[4];}
    
    if(Parameters["machine_readable"][1])
     {return Format["fprintf"]
              (ppf,
               [0,
                [12,
                 35,
                 [4,
                  3,
                  0,
                  0,
                  [11,
                   "  Pc: ",
                   [4,3,0,0,[11,"  ",[2,0,[11," char ",[4,3,0,0,[17,4,0]]]]]]]]],
                "#%i  Pc: %i  %s char %i@."],
               framenum,
               $$event[1],
               $$event[2],
               cnum);
      }
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [12,
                 35,
                 [4,
                  3,
                  0,
                  0,
                  [12,
                   32,
                   [2,
                    0,
                    [12,32,[2,0,[12,58,[4,3,0,0,[12,58,[4,3,0,0,[17,4,0]]]]]]]]]]],
                "#%i %s %s:%i:%i@."],
               framenum,
               $$event[2],
               pos[1],
               pos[2],
               pos[4]-pos[3]+1);
      }
    };

var
 show_current_frame=
  function(ppf,selected)
   {var match=Frames["selected_event"][1];
    
    if(match)
     {var sel_ev=match[1];
      
      show_one_frame(Frames["current_frame"][1],ppf,sel_ev);
      var breakpoints=Breakpoints["breakpoints_at_pc"](sel_ev[1]);
      
      if(breakpoints)
       {if(breakpoints[2])
         {Format["fprintf"]
           (ppf,
            [0,[11,"Breakpoints: ",[15,[17,4,0]]],"Breakpoints: %a@."],
            function(ppf$1,l)
             {return List["iter"]
                      (function(x)
                        {return Format["fprintf"]
                                 (ppf$1,[0,[4,3,0,0,[12,32,0]],"%i "],x);
                         },
                       l);
              },
            List["sort"]
             (function(prim,prim$1){return "unknown primitive:caml_compare";},
              breakpoints))}
        else
         {Format["fprintf"]
           (ppf,
            [0,[11,"Breakpoint: ",[4,3,0,0,[17,4,0]]],"Breakpoint: %i@."],
            breakpoints[1])}
        }
      else
       {}
      
      return Show_source["show_point"](sel_ev,selected);
      }
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [17,4,[11,"No frame selected.",[17,4,0]]],
                "@.No frame selected.@."]);
      }
    };

module["exports"]=
{"show_current_event":show_current_event,
 "show_current_frame":show_current_frame,
 "show_one_frame":show_one_frame};

