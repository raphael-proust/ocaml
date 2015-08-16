// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");


var
 $$eval=
  function(f,param)
   {if(typeof param==="number")
     {switch(param){case 0:return /* true */1;case 1:return /* false */0;}}
    else
     {switch(param[0])
       {case 0:return List["for_all"]($$eval(f),param[1]);
        case 1:return List["exists"]($$eval(f),param[1]);
        case 2:return !$$eval(f,param[1]);
        case 3:return f(param[1]);
        }}
    };

var
 iter=
  function(f,param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){case 0:exit=3;case 1:exit=3;}}
    else
     {switch(param[0])
       {case 0:exit=4;
        case 1:exit=4;
        case 2:return iter(f,param[1]);
        case 3:return f(param[1]);
        }}
    
    switch(exit)
     {case 4:return List["iter"](iter(f),param[1]);case 3:return /* () */0;}
    };

var
 map=
  function(f,b)
   {var exit;
    
    if(typeof b==="number")
     {switch(b){case 0:exit=1;case 1:exit=1;}}
    else
     {switch(b[0])
       {case 0:return /* And */[0,List["map"](map(f),b[1])];
        case 1:return /* Or */[1,List["map"](map(f),b[1])];
        case 2:return /* Not */[2,map(f,b[1])];
        case 3:return /* Atom */[3,f(b[1])];
        }}
    
    switch(exit){case 1:return b;}
    };

module["exports"]={"eval":$$eval,"iter":iter,"map":map};

