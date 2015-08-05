// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Thread=require("Thread");
var Mutex=require("Mutex");


var create=function(param){return [0,0];};

var
 wait=
  function(cond,mut)
   {Thread["critical_section"][1]=1,0;
    Mutex["unlock"](mut);
    cond[1]=[0,Thread["self"](0),cond[1]],0;
    Thread["sleep"](0);
    return Mutex["lock"](mut);
    };

var
 signal=
  function(cond)
   {var match=cond[1];
    
    if(match)
     {var rem=match[2];
      
      var th=match[1];
      
      cond[1]=rem,0;
      return Thread["wakeup"](th);
      }
    else
     {return 0;}
    };

var
 broadcast=
  function(cond)
   {var w=cond[1];cond[1]=0,0;return List["iter"](Thread["wakeup"],w);};

module["exports"]=
{"create":create,"wait":wait,"signal":signal,"broadcast":broadcast};

