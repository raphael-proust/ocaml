// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimitive=require("./camlPrimitive.js");



module["exports"]=
{"create":function(prim){return CamlPrimitive["caml_condition_new"](prim);},
 "wait":
 function(prim,prim$1)
  {return CamlPrimitive["caml_condition_wait"](prim,prim$1);},
 "signal":function(prim){return CamlPrimitive["caml_condition_signal"](prim);},
 "broadcast":
 function(prim){return CamlPrimitive["caml_condition_broadcast"](prim);}};

