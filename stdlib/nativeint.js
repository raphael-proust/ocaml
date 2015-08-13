// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimtivie=require("CamlPrimtivie");
var Sys=require("Sys");


var zero=0;

var one=1;

var minus_one=-1;

var succ=function(n){return n+1;};

var pred=function(n){return n-1;};

var abs=function(n){if(n>=0){return n;}else{return -n;}};

var size=Sys["word_size"];

var min_int=1<<size-1;

var max_int=min_int-1;

var lognot=function(n){return n^-1;};

var
 to_string=
  function(n){return CamlPrimtivie["caml_nativeint_format"]("%d",n);};

var
 compare=
  function(x,y){return CamlPrimtivie["caml_nativeint_compare"](x,y);};

module["exports"]=
{"zero":zero,
 "one":one,
 "minus_one":minus_one,
 "succ":succ,
 "pred":pred,
 "abs":abs,
 "size":size,
 "max_int":max_int,
 "min_int":min_int,
 "lognot":lognot,
 "to_string":to_string,
 "compare":compare};

