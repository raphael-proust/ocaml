// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimitive=require("./camlPrimitive.js");


var zero=0;

var one=1;

var minus_one=-1;

var succ=function(n){return n+1};

var pred=function(n){return n-1};

var abs=function(n){return n>=0?n:-n};

var min_int=-2147483648;

var max_int=2147483647;

var lognot=function(n){return n^-1};

var to_string=function(n){return CamlPrimitive["caml_int32_format"]("%d",n)};

var compare=function(x,y){return CamlPrimitive["caml_int32_compare"](x,y)};

module["exports"]=
{"zero":zero,
 "one":one,
 "minus_one":minus_one,
 "succ":succ,
 "pred":pred,
 "abs":abs,
 "max_int":max_int,
 "min_int":min_int,
 "lognot":lognot,
 "to_string":to_string,
 "compare":compare};

