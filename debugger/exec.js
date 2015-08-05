// Generated CODE, PLEASE EDIT WITH CARE 

var Sys=require("Sys");


var interrupted=[0,0];

var is_protected=[0,0];

var
 $$break=
  function(signum)
   {if(is_protected[1]){return interrupted[1]=1,0;}else{throw Sys["Break"];}};

var match=Sys["os_type"];

switch(match)
 {case "Win32":
  default:
   Sys["set_signal"](Sys["sigint"],[0,$$break]),
   Sys["set_signal"](Sys["sigpipe"],[0,function(param){throw End_of_file;}])}

var
 protect=
  function(f)
   {if(is_protected[1])
     {return f(0);}
    else
     {is_protected[1]=1,0;
      if(!interrupted[1]){f(0)}else{}
      
      is_protected[1]=0,0;
      if(interrupted[1])
       {interrupted[1]=0,0;throw Sys["Break"];}
      else
       {return 0;}
      }
    };

var
 unprotect=
  function(f)
   {if(!is_protected[1])
     {return f(0);}
    else
     {is_protected[1]=0,0;
      if(interrupted[1]){interrupted[1]=0,0;throw Sys["Break"];}else{}
      
      f(0);
      return is_protected[1]=1,0;
      }
    };

module["exports"]={"protect":protect,"unprotect":unprotect};

