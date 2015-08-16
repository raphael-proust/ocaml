// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Thread=require("./thread.js");


var create=function(param){return /* record */[0,/* false */0,/* [] */0];};

var
 lock=
  function(m)
   {if(m[1])
     {Thread["critical_section"][1]=/* true */1;
      m[2]=/* :: */[0,Thread["self"](/* () */0),m[2]];
      Thread["sleep"](/* () */0);
      return lock(m);
      }
    else
     {return m[1]=/* true */1,0;}
    };

var
 try_lock=
  function(m)
   {if(m[1]){return /* false */0;}else{m[1]=/* true */1;return /* true */1;}};

var
 unlock=
  function(m)
   {var w=m[2];
    
    m[2]=/* [] */0;
    m[1]=/* false */0;
    return List["iter"](Thread["wakeup"],w);
    };

module["exports"]=
{"create":create,"lock":lock,"try_lock":try_lock,"unlock":unlock};

