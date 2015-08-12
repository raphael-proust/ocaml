// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Int64=require("Int64");


var $plus$plus=function(prim,prim){return prim$1+prim;};

var $neg$neg=function(prim,prim){return prim$1-prim;};

var suc64=Int64["succ"];

var pre64=Int64["pred"];

var _0=Int64["zero"];

var _1=Int64["one"];

var _minus1=Int64["minus_one"];

var
 $unknown$unknown=
  function(prim){return Primtivie["caml_int64_of_string"](prim);};

var max_small_int=Pervasives["max_int"];

var to_int=function(prim){return prim;};

module["exports"]=
{"++":$plus$plus,
 "--":$neg$neg,
 "suc64":suc64,
 "pre64":pre64,
 "_0":_0,
 "_1":_1,
 "_minus1":_minus1,
 "~~":$unknown$unknown,
 "max_small_int":max_small_int,
 "to_int":to_int};

