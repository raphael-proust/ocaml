// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var CamlPrimitive=require("./camlPrimitive.js");


var Empty=CamlPrimitive["caml_set_oo_id"]([248,"Stack.Empty",0]);

var create=function(param){return /* record */[0,/* [] */0];};

var clear=function(s){return s[1]=/* [] */0;};

var copy=function(s){return /* record */[0,s[1]];};

var push=function(x,s){return s[1]=/* :: */[0,x,s[1]];};

var
 pop=
  function(s)
   {var match=s[1];
    
    if(match)
     {var tl=match[2];var hd=match[1];s[1]=tl;return hd;}
    else
     {throw Empty;}
    };

var
 top=
  function(s)
   {var match=s[1];if(match){var hd=match[1];return hd;}else{throw Empty;}};

var is_empty=function(s){return s[1]===/* [] */0;};

var length=function(s){return List["length"](s[1]);};

var iter=function(f,s){return List["iter"](f,s[1]);};

module["exports"]=
{"Empty":Empty,
 "create":create,
 "push":push,
 "pop":pop,
 "top":top,
 "clear":clear,
 "copy":copy,
 "is_empty":is_empty,
 "length":length,
 "iter":iter};

