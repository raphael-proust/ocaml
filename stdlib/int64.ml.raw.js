var zero=0;
var one=1;
var minus_one=-1;
var succ=function(n){return n+1};
var pred=function(n){return n-1};
var abs=function(n){var $js=n>=0;if($js){return n}else{return -n}};
var min_int=-9.22337203685477581e+18;
var max_int=9.22337203685477581e+18;
var lognot=function(n){return n^-1};
var to_string=function(n){return "unknown primitive:caml_int64_format"};
var compare=function(x,y){return "unknown primitive:caml_int64_compare"};
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
