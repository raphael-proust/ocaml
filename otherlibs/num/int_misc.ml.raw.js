var Pervasives=require("Pervasives");
var Sys=require("Sys");
var
 gcd_int=
  function(i1,i2)
   {var $js=i2=0;
    if($js)
     {var $js$1=Pervasives["abs"];return $js$1(i1)}
    else
     {return gcd_int(i2,i1%i2)}};
var
 num_bits_int_aux=
  function(n)
   {var $js=n=0;
    if($js){return 0}else{var $js$1=num_bits_int_aux(n>>>1);return 1+$js$1}};
var
 num_bits_int=
  function(n)
   {var $js=Pervasives["abs"];var $js$1=$js(n);return num_bits_int_aux($js$1)};
var
 sign_int=
  function(i)
   {var $js=i=0;
    if($js){return 0}else{var $js$1=i>0;if($js$1){return 1}else{return -1}}};
var length_of_int=Sys["word_size"]-2;
var monster_int=1<<length_of_int;
var biggest_int=monster_int-1;
var least_int=-biggest_int;
var
 compare_int=
  function(n1,n2)
   {var $js=n1=n2;
    if($js)
     {return 0}
    else
     {var $js$1="unknown primitive:caml_greaterthan";
      if($js$1){return 1}else{return -1}}};
module["exports"]=
{"gcd_int":gcd_int,
 "num_bits_int":num_bits_int,
 "compare_int":compare_int,
 "sign_int":sign_int,
 "length_of_int":length_of_int,
 "biggest_int":biggest_int,
 "least_int":least_int,
 "monster_int":monster_int};
