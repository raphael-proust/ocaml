// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Thread=require("Thread");


var create=function(param){return [/* record */0,0,0];};

var
 lock=
  function(m)
   {if(m[1])
     {Thread["critical_section"][1]=1,0;
      m[2]=[/* :: */0,Thread["self"](0),m[2]],0;
      Thread["sleep"](0);
      return lock(m);
      }
    else
     {return m[1]=1,0;}
    };

var try_lock=function(m){if(m[1]){return 0;}else{m[1]=1,0;return 1;}};

var
 unlock=
  function(m)
   {var w=m[2];m[2]=0,0;m[1]=0,0;return List["iter"](Thread["wakeup"],w);};

module["exports"]=
{"create":create,"lock":lock,"try_lock":try_lock,"unlock":unlock};

