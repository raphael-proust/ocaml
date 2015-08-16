// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Checkpoints=require("./checkpoints.js");
var Primitives=require("./primitives.js");
var Debugger_config=require("./debugger_config.js");
var Int64ops=require("./int64ops.js");


var history=[0,/* [] */0];

var empty_history=function(param){return history[1]=/* [] */0,0;};

var
 add_current_time=
  function(param)
   {var time=Checkpoints["current_time"](/* () */0);
    
    if(history[1]===/* [] */0)
     {return history[1]=/* :: */[0,time,/* [] */0],0;}
    else
     {if(time!==List["hd"](history[1]))
       {return history[1]=
               Primitives["list_truncate"]
                (Debugger_config["history_size"][1],
                 /* :: */[0,time,history[1]]),
               0;
        }
      else
       {return 0;}
      }
    };

var
 previous_time_1=
  function(param)
   {var match=history[1];
    
    var exit;
    
    if(match)
     {var hist=match[2];
      
      if(hist){history[1]=hist;return hist[1];}else{exit=1;}
      }
    else
     {exit=1;}
    
    switch(exit)
     {case 1:
       Pervasives["prerr_endline"]("No more information.");
       throw Debugger_config["Toplevel"];
       
      }
    };

var
 previous_time=
  function(n)
   {if(n===Int64ops["_1"])
     {return previous_time_1(/* () */0);}
    else
     {previous_time_1(/* () */0);return previous_time(Int64ops["pre64"](n));}
    };

module["exports"]=
{"empty_history":empty_history,
 "add_current_time":add_current_time,
 "previous_time":previous_time};

