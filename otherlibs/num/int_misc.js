var Pervasives=require("Pervasives");
var Sys=require("Sys");

var
 gcd_int=
  function(i1,i2)
   {if(i2=0){return Pervasives["abs"](i1);}else{return gcd_int(i2,i1%i2);}};

var
 num_bits_int_aux=
  function(n){if(n=0){return 0;}else{return 1+num_bits_int_aux(n>>>1);}};

var num_bits_int=function(n){return num_bits_int_aux(Pervasives["abs"](n));};

var
 sign_int=
  function(i){if(i=0){return 0;}else{if(i>0){return 1;}else{return -1;}}};

var length_of_int=Sys["word_size"]-2;

var monster_int=1<<length_of_int;

var biggest_int=monster_int-1;

var least_int=-biggest_int;

var
 compare_int=
  function(n1,n2)
   {if(n1=n2)
     {return 0;}
    else
     {if("unknown primitive:caml_greaterthan"){return 1;}else{return -1;}}
    };


module["exports"]=
{"gcd_int":gcd_int,
 "num_bits_int":num_bits_int,
 "compare_int":compare_int,
 "sign_int":sign_int,
 "length_of_int":length_of_int,
 "biggest_int":biggest_int,
 "least_int":least_int,
 "monster_int":monster_int};

