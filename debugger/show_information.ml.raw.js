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
   {var $js=Format["fprintf"];
    var $js$1=Checkpoints["current_time"];
    var $js$2=$js$1(0);
    $js(ppf,[0,[11,"Time: ",[7,3,0,0,0]],"Time: %Li"],$js$2);
    var $js$3=Checkpoints["current_pc"];
    var match=$js$3(0);
    var $js$4=match;
    if($js$4)
     {var $js$5=Format["fprintf"];
      $js$5(ppf,[0,[11," - pc: ",[4,3,0,0,0]]," - pc: %i"],match[1])}
    else
     {}
    var $js$6=Symbols["update_current_event"];
    $js$6(0);
    var $js$7=Frames["reset_frame"];
    $js$7(0);
    var $js$8=Checkpoints["current_report"];
    var match$1=$js$8(0);
    var $js$9=match$1;
    if($js$9)
     {var match$2=match$1[1];
      var $js$10=match$2[1];
      var $js$11=$js$10[0];
      if($js$11==0)
       {var exit=10}
      else
       if($js$11==1)
        {var exit=10}
       else
        if($js$11==2)
         {var $js$12=Format["fprintf"];
          $js$12
           (ppf,[0,[17,4,[11,"Program exit.",[17,4,0]]],"@.Program exit.@."]);
          var $js$13=Show_source["show_no_point"];
          return $js$13(0)}
        else
         if($js$11==3)
          {var $js$14=Misc["fatal_error"];
           return $js$14("Show_information.show_current_event")}
         else
          if($js$11==4)
           {var $js$15=Format["fprintf"];
            var $js$16=Debugcom["Remote_value"][11];
            var $js$17=$js$16(0);
            $js$15
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
              $js$17);
            var $js$18=Show_source["show_no_point"];
            return $js$18(0)}
      switch(exit)
       {case 10:
         var $js$19=Events["get_current_event"];
         var ev=$js$19(0);
         var $js$20=Format["fprintf"];
         $js$20
          (ppf,[0,[11," - module ",[2,0,[17,4,0]]]," - module %s@."],ev[2]);
         var $js$21=Breakpoints["breakpoints_at_pc"];
         var breakpoints=$js$21(match$2[4]);
         var $js$22=breakpoints;
         if($js$22)
          {var $js$23=breakpoints[2];
           if($js$23)
            {var $js$24=Format["fprintf"];
             var $js$25=List["sort"];
             var
              $js$26=
               $js$25
                (function(prim,prim$1)
                  {return "unknown primitive:caml_compare"},
                 breakpoints);
             $js$24
              (ppf,
               [0,[11,"Breakpoints: ",[15,[17,4,0]]],"Breakpoints: %a@."],
               function(ppf$1,l)
                {var $js$27=List["iter"];
                 return $js$27
                         (function(x)
                           {var $js$28=Format["fprintf"];
                            return $js$28(ppf$1,[0,[4,3,0,0,[12,32,0]],"%i "],x)},
                          l)},
               $js$26)}
           else
            {var $js$27=Format["fprintf"];
             $js$27
              (ppf,
               [0,[11,"Breakpoint: ",[4,3,0,0,[17,4,0]]],"Breakpoint: %i@."],
               breakpoints[1])}}
         else
          {}
         var $js$28=Show_source["show_point"];
         return $js$28(ev,1)
        }}
    else
     {var $js$29=Format["fprintf"];
      $js$29
       (ppf,
        [0,
         [17,4,[11,"Beginning of program.",[17,4,0]]],
         "@.Beginning of program.@."]);
      var $js$30=Show_source["show_no_point"];
      return $js$30(0)}};
var
 show_one_frame=
  function(framenum,ppf,event)
   {var $js=Events["get_pos"];
    var pos=$js(event);
    try
     {var $js$1=Source["get_buffer"];
      var buffer=$js$1(pos,event[2]);
      var $js$2=Source["start_and_cnum"];
      var $js$3=$js$2(buffer,pos);
      var cnum=$js$3[2]}
    catch(exn){var cnum=pos[4]}
    var $js$4=Parameters["machine_readable"][1];
    if($js$4)
     {var $js$5=Format["fprintf"];
      return $js$5
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
               event[1],
               event[2],
               cnum)}
    else
     {var $js$6=Format["fprintf"];
      return $js$6
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
               event[2],
               pos[1],
               pos[2],
               pos[4]-pos[3]+1)}};
var
 show_current_frame=
  function(ppf,selected)
   {var match=Frames["selected_event"][1];
    var $js=match;
    if($js)
     {var sel_ev=match[1];
      show_one_frame(Frames["current_frame"][1],ppf,sel_ev);
      var $js$1=Breakpoints["breakpoints_at_pc"];
      var breakpoints=$js$1(sel_ev[1]);
      var $js$2=breakpoints;
      if($js$2)
       {var $js$3=breakpoints[2];
        if($js$3)
         {var $js$4=Format["fprintf"];
          var $js$5=List["sort"];
          var
           $js$6=
            $js$5
             (function(prim,prim$1){return "unknown primitive:caml_compare"},
              breakpoints);
          $js$4
           (ppf,
            [0,[11,"Breakpoints: ",[15,[17,4,0]]],"Breakpoints: %a@."],
            function(ppf$1,l)
             {var $js$7=List["iter"];
              return $js$7
                      (function(x)
                        {var $js$8=Format["fprintf"];
                         return $js$8(ppf$1,[0,[4,3,0,0,[12,32,0]],"%i "],x)},
                       l)},
            $js$6)}
        else
         {var $js$7=Format["fprintf"];
          $js$7
           (ppf,
            [0,[11,"Breakpoint: ",[4,3,0,0,[17,4,0]]],"Breakpoint: %i@."],
            breakpoints[1])}}
      else
       {}
      var $js$8=Show_source["show_point"];
      return $js$8(sel_ev,selected)}
    else
     {var $js$9=Format["fprintf"];
      return $js$9
              (ppf,
               [0,
                [17,4,[11,"No frame selected.",[17,4,0]]],
                "@.No frame selected.@."])}};
module["exports"]=
{"show_current_event":show_current_event,
 "show_current_frame":show_current_frame,
 "show_one_frame":show_one_frame};
