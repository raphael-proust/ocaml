// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Set=require("Set");
var Map=require("Map");


var compare=function(t1,t2){return t1[3]-t2[3];};

var hash=function(t){return t[3];};

var equal=function(t1,t2){return t1=t2;};

var TypeOps=[0,compare,hash,equal];

var compare$1=function(x,y){return "unknown primitive:caml_string_compare";};

var OrderedString=[0,compare$1];

var Meths=Map["Make"](OrderedString);

var
 single=
  function(param)
   {switch(param[0])
     {case 0:return 1;
      case 1:return 2;
      case 2:return 4;
      case 3:return 8;
      case 4:return 16;
      case 5:return 32;
      case 6:return 64;
      }
    };

var union=function(v1,v2){return v1|v2;};

var inter=function(v1,v2){return v1&v2;};

var subset=function(v1,v2){return (v1&v2)=v1;};

var
 set=
  function(x,b,v)
   {if(b){return v|single(x);}else{return v&Pervasives["lnot"](single(x));}};

var mem=function(x){return subset(single(x));};

var $$null=0;

var may_inv=7;

var full=127;

var covariant=single(0)|single(4)|single(3);

var
 swap=
  function(f1,f2,v)
   {var v$prime=set(f1,mem(f2,v),v);return set(f2,mem(f1,v),v$prime);};

var conjugate=function(v){return swap(0,1,swap(4,5,v));};

var get_upper=function(v){return /* tuple */[0,mem(0,v),mem(1,v)];};

var
 get_lower=
  function(v){return /* tuple */[0,mem(4,v),mem(5,v),mem(6,v),mem(3,v)];};

var
 Variance=
  [0,
   single,
   union,
   inter,
   subset,
   set,
   mem,
   $$null,
   may_inv,
   full,
   covariant,
   swap,
   conjugate,
   get_upper,
   get_lower];

var Concr=Set["Make"](OrderedString);

module["exports"]=
{"TypeOps":[0,TypeOps[1],TypeOps[3],TypeOps[2]],
 "Meths":Meths,
 "Vars":Meths,
 "Variance":
 [0,
  Variance[7],
  Variance[9],
  Variance[10],
  Variance[8],
  Variance[2],
  Variance[3],
  Variance[4],
  Variance[5],
  Variance[6],
  Variance[12],
  Variance[13],
  Variance[14]],
 "Concr":Concr};

