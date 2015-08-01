var Primitives=require("Primitives");
var Int64ops=require("Int64ops");

var root=[0,Int64ops["_0"],-2,Primitives["std_io"],0,0,0,root,0,0,0];

var checkpoints=[0,0];

var current_checkpoint=[0,root];

var current_time=function(param){return current_checkpoint[1][1];};

var current_report=function(param){return current_checkpoint[1][5];};

var
 current_pc=
  function(param)
   {var match=current_report(0);
    
    if(match)
     {var match$1=match[1];
      
      var match$2=match$1[1];
      
      if(match$2!=2)
       {if(match$2>=4){var exit=6;}else{return [0,match$1[4]];}}
      else
       {var exit=6;}
      
      switch(exit){case 6:var exit$1=5;}
      }
    else
     {var exit$1=5;}
    
    switch(exit$1){case 5:return 0;}
    };

var
 current_pc_sp=
  function(param)
   {var match=current_report(0);
    
    if(match)
     {var match$1=match[1];
      
      var match$2=match$1[1];
      
      if(match$2!=2)
       {if(match$2>=4){var exit=2;}else{return [0,[0,match$1[4],match$1[3]]];}
        }
      else
       {var exit=2;}
      
      switch(exit){case 2:var exit$1=1;}
      }
    else
     {var exit$1=1;}
    
    switch(exit$1){case 1:return 0;}
    };


module["exports"]=
{"root":root,
 "checkpoints":checkpoints,
 "current_checkpoint":current_checkpoint,
 "current_time":current_time,
 "current_report":current_report,
 "current_pc":current_pc,
 "current_pc_sp":current_pc_sp};

