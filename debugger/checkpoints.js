// Generated CODE, PLEASE EDIT WITH CARE 

var Primitives=require("./primitives.js");
var Int64ops=require("./int64ops.js");


var
 root=
  /* record */[0,
   Int64ops["_0"],
   -2,
   Primitives["std_io"],
   /* false */0,
   /* None */0,
   /* C_stopped */0,
   root,
   0,
   /* [] */0,
   0];

var checkpoints=[0,/* [] */0];

var current_checkpoint=[0,root];

var current_time=function(param){return current_checkpoint[1][1];};

var current_report=function(param){return current_checkpoint[1][5];};

var
 current_pc=
  function(param)
   {var match=current_report(/* () */0);
    
    var exit;
    
    if(match)
     {var match$1=match[1];
      
      var match$2=match$1[1];
      
      var exit$1;
      
      if(match$2!==2)
       {if(match$2>=4){exit$1=6;}else{return /* Some */[0,match$1[4]];}}
      else
       {exit$1=6;}
      
      switch(exit$1){case 6:exit=5;}
      }
    else
     {exit=5;}
    
    switch(exit){case 5:return /* None */0;}
    };

var
 current_pc_sp=
  function(param)
   {var match=current_report(/* () */0);
    
    var exit;
    
    if(match)
     {var match$1=match[1];
      
      var match$2=match$1[1];
      
      var exit$1;
      
      if(match$2!==2)
       {if(match$2>=4)
         {exit$1=2;}
        else
         {return /* Some */[0,/* tuple */[0,match$1[4],match$1[3]]];}
        }
      else
       {exit$1=2;}
      
      switch(exit$1){case 2:exit=1;}
      }
    else
     {exit=1;}
    
    switch(exit){case 1:return /* None */0;}
    };

module["exports"]=
{"root":root,
 "checkpoints":checkpoints,
 "current_checkpoint":current_checkpoint,
 "current_time":current_time,
 "current_report":current_report,
 "current_pc":current_pc,
 "current_pc_sp":current_pc_sp};

