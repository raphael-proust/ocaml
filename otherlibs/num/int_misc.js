// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 gcd_int=
  function(i1,i2){return i2===0?Pervasives["abs"](i1):gcd_int(i2,i1%i2);};

var num_bits_int_aux=function(n){return n===0?0:1+num_bits_int_aux(n>>>1);};

var num_bits_int=function(n){return num_bits_int_aux(Pervasives["abs"](n));};

var sign_int=function(i){return i===0?0:i>0?1:-1;};

var length_of_int=Sys["word_size"]-2;

var monster_int=1<<length_of_int;

var biggest_int=monster_int-1;

var least_int=-biggest_int;

var
 compare_int=
  function(n1,n2)
   {return n1===n2?0:CamlPrimitive["caml_greaterthan"](n1,n2)?1:-1;};

module["exports"]=
{"gcd_int":gcd_int,
 "num_bits_int":num_bits_int,
 "compare_int":compare_int,
 "sign_int":sign_int,
 "length_of_int":length_of_int,
 "biggest_int":biggest_int,
 "least_int":least_int,
 "monster_int":monster_int};

