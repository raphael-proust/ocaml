// Generated CODE, PLEASE EDIT WITH CARE 

var Frames=require("./frames.js");
var Breakpoints=require("./breakpoints.js");
var List=require("./list.js");
var Symbols=require("./symbols.js");
var Events=require("./events.js");
var Checkpoints=require("./checkpoints.js");
var Format=require("./format.js");
var Printval=require("./printval.js");
var Misc=require("./misc.js");
var Parameters=require("./parameters.js");
var Show_source=require("./show_source.js");
var Source=require("./source.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Debugcom=require("./debugcom.js");


var
 show_current_event=
  function(ppf)
   {Format["fprintf"]
     (ppf,
      [/* Format */0,
       [/* String_literal */11,
        "Time: ",
        [/* Int64 */7,
         /* Int_i */3,
         /* No_padding */0,
         /* No_precision */0,
         /* End_of_format */0]],
       "Time: %Li"],
      Checkpoints["current_time"](/* () */0));
    var match=Checkpoints["current_pc"](/* () */0);
    
    if(match)
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* String_literal */11,
          " - pc: ",
          [/* Int */4,
           /* Int_i */3,
           /* No_padding */0,
           /* No_precision */0,
           /* End_of_format */0]],
         " - pc: %i"],
        match[1])}
    
    Symbols["update_current_event"](/* () */0);
    Frames["reset_frame"](/* () */0);
    var match$1=Checkpoints["current_report"](/* () */0);
    
    if(match$1)
     {var match$2=match$1[1];
      
      var exit;
      
      switch(match$2[1])
       {case 0:exit=10;
        case 1:exit=10;
        case 2:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* Formatting_lit */17,
             /* Flush_newline */4,
             [/* String_literal */11,
              "Program exit.",
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]]],
            "@.Program exit.@."]);
         return Show_source["show_no_point"](/* () */0);
         
        case 3:
         return Misc["fatal_error"]("Show_information.show_current_event");
        case 4:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* Formatting_lit */17,
             /* Flush_newline */4,
             [/* String_literal */11,
              "Program end.",
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               [/* Formatting_gen */18,
                [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                [/* String_literal */11,
                 "Uncaught exception:",
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    [/* Formatting_lit */17,
                     /* Flush_newline */4,
                     /* End_of_format */0]]]]]]]]],
            "@.Program end.@.@[Uncaught exception:@ %a@]@."],
           Printval["print_exception"],
           Debugcom["Remote_value"][11](/* () */0));
         return Show_source["show_no_point"](/* () */0);
         
        }
      
      switch(exit)
       {case 10:
         var ev=Events["get_current_event"](/* () */0);
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             " - module ",
             [/* String */2,
              /* No_padding */0,
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]]],
            " - module %s@."],
           ev[2]);
         var breakpoints=Breakpoints["breakpoints_at_pc"](match$2[4]);
         
         if(breakpoints)
          {breakpoints[2]
            ?Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "Breakpoints: ",
                 [/* Alpha */15,
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]]],
                "Breakpoints: %a@."],
               function(ppf,l)
                {return List["iter"]
                         (function(x)
                           {return Format["fprintf"]
                                    (ppf,
                                     [/* Format */0,
                                      [/* Int */4,
                                       /* Int_i */3,
                                       /* No_padding */0,
                                       /* No_precision */0,
                                       [/* Char_literal */12,32,/* End_of_format */0]],
                                      "%i "],
                                     x);
                            },
                          l);
                 },
               List["sort"]
                (function(prim,prim$1)
                  {return CamlPrimitive["caml_compare"](prim,prim$1);},
                 breakpoints))
            :Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "Breakpoint: ",
                 [/* Int */4,
                  /* Int_i */3,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]]],
                "Breakpoint: %i@."],
               breakpoints[1])}
         
         return Show_source["show_point"](ev,/* true */1);
         
        }
      }
    else
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* Formatting_lit */17,
          /* Flush_newline */4,
          [/* String_literal */11,
           "Beginning of program.",
           [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]],
         "@.Beginning of program.@."]);
      return Show_source["show_no_point"](/* () */0);
      }
    };

var
 show_one_frame=
  function(framenum,ppf,$$event)
   {var pos=Events["get_pos"]($$event);
    
    var cnum;
    try
     {var buffer=Source["get_buffer"](pos,$$event[2]);
      
      cnum=Source["start_and_cnum"](buffer,pos)[2];
      }
    catch(exn){cnum=pos[4];}
    
    return Parameters["machine_readable"][1]
            ?Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Char_literal */12,
                 35,
                 [/* Int */4,
                  /* Int_i */3,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* String_literal */11,
                   "  Pc: ",
                   [/* Int */4,
                    /* Int_i */3,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* String_literal */11,
                     "  ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " char ",
                       [/* Int */4,
                        /* Int_i */3,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* Formatting_lit */17,
                         /* Flush_newline */4,
                         /* End_of_format */0]]]]]]]]],
                "#%i  Pc: %i  %s char %i@."],
               framenum,
               $$event[1],
               $$event[2],
               cnum)
            :Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Char_literal */12,
                 35,
                 [/* Int */4,
                  /* Int_i */3,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,
                   32,
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,
                     32,
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       58,
                       [/* Int */4,
                        /* Int_i */3,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* Char_literal */12,
                         58,
                         [/* Int */4,
                          /* Int_i */3,
                          /* No_padding */0,
                          /* No_precision */0,
                          [/* Formatting_lit */17,
                           /* Flush_newline */4,
                           /* End_of_format */0]]]]]]]]]]],
                "#%i %s %s:%i:%i@."],
               framenum,
               $$event[2],
               pos[1],
               pos[2],
               pos[4]-pos[3]+1);
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
       {breakpoints[2]
         ?Format["fprintf"]
           (ppf,
            [/* Format */0,
             [/* String_literal */11,
              "Breakpoints: ",
              [/* Alpha */15,
               [/* Formatting_lit */17,
                /* Flush_newline */4,
                /* End_of_format */0]]],
             "Breakpoints: %a@."],
            function(ppf,l)
             {return List["iter"]
                      (function(x)
                        {return Format["fprintf"]
                                 (ppf,
                                  [/* Format */0,
                                   [/* Int */4,
                                    /* Int_i */3,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    [/* Char_literal */12,32,/* End_of_format */0]],
                                   "%i "],
                                  x);
                         },
                       l);
              },
            List["sort"]
             (function(prim,prim$1)
               {return CamlPrimitive["caml_compare"](prim,prim$1);},
              breakpoints))
         :Format["fprintf"]
           (ppf,
            [/* Format */0,
             [/* String_literal */11,
              "Breakpoint: ",
              [/* Int */4,
               /* Int_i */3,
               /* No_padding */0,
               /* No_precision */0,
               [/* Formatting_lit */17,
                /* Flush_newline */4,
                /* End_of_format */0]]],
             "Breakpoint: %i@."],
            breakpoints[1])}
      
      return Show_source["show_point"](sel_ev,selected);
      }
    else
     {return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Formatting_lit */17,
                 /* Flush_newline */4,
                 [/* String_literal */11,
                  "No frame selected.",
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]]],
                "@.No frame selected.@."]);
      }
    };

module["exports"]=
{"show_current_event":show_current_event,
 "show_current_frame":show_current_frame,
 "show_one_frame":show_one_frame};

