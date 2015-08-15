// Generated CODE, PLEASE EDIT WITH CARE 

var Nativeint=require("./nativeint.js");
var Pervasives=require("./pervasives.js");
var Digest=require("./digest.js");
var Int32=require("./int32.js");
var Int64=require("./int64.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 new_state=
  function(param)
   {return /* record */[0,CamlPrimitive["caml_make_vect"](55,0),0];};

var
 assign=
  function(st1,st2)
   {$$Array["blit"](st2[1],0,st1[1],0,55);return st1[2]=st2[2],0;};

var
 full_init=
  function(s,seed)
   {var
     combine=
      function(accu,x)
       {return Digest["string"]
                (Pervasives["^"](accu,Pervasives["string_of_int"](x)));
        };
    
    var extract=function(d){return d[0]+(d[1]<<8)+(d[2]<<16)+(d[3]<<24);};
    
    if(seed["length"]===0){var seed$1=[0];}else{var seed$1=seed;}
    
    var l=seed$1["length"];
    
    for(var i=0;i<=54;i++){s[1][i]=i,0}
    
    var accu=[0,"x"];
    
    for(var i$1=0;i$1<=54+Pervasives["max"](55,l);i$1++)
     {var j=i$1%55;
      
      var k=i$1%l;
      
      accu[1]=
      combine(accu[1],seed$1[k]),
      0,
      s[1][j]=
      (s[1][j]^extract(accu[1]))&
      1073741823,
      0}
    
    return s[2]=0,0;
    };

var
 make=
  function(seed)
   {var result=new_state(/* () */0);full_init(result,seed);return result;};

var
 make_self_init=
  function(param)
   {return make(CamlPrimitive["caml_sys_random_seed"](/* () */0));};

var
 copy=
  function(s){var result=new_state(/* () */0);assign(result,s);return result;};

var
 bits=
  function(s)
   {s[2]=(s[2]+1)%55,0;
    var curval=s[1][s[2]];
    
    var newval=s[1][(s[2]+24)%55]+(curval^curval>>>25&31);
    
    var newval30=newval&1073741823;
    
    s[1][s[2]]=newval30,0;
    return newval30;
    };

var
 intaux=
  function(s,n)
   {var r=bits(s);
    
    var v=r%n;
    
    if(r-v>1073741823-n+1){return intaux(s,n);}else{return v;}
    };

var
 $$int=
  function(s,bound)
   {if(bound>1073741823||bound<=0)
     {return Pervasives["invalid_arg"]("Random.int");}
    else
     {return intaux(s,bound);}
    };

var
 int32aux=
  function(s,n)
   {var b1=bits(s);
    
    var b2=(bits(s)&1)<<30;
    
    var r=b1|b2;
    
    var v=r%n;
    
    if(r-v>Int32["max_int"]-n+1){return int32aux(s,n);}else{return v;}
    };

var
 int32=
  function(s,bound)
   {if(bound<=0)
     {return Pervasives["invalid_arg"]("Random.int32");}
    else
     {return int32aux(s,bound);}
    };

var
 int64aux=
  function(s,n)
   {var b1=bits(s);
    
    var b2=bits(s)<<30;
    
    var b3=(bits(s)&7)<<60;
    
    var r=b1|b2|b3;
    
    var v=r%n;
    
    if(r-v>Int64["max_int"]-n+1){return int64aux(s,n);}else{return v;}
    };

var
 int64=
  function(s,bound)
   {if(bound<=0)
     {return Pervasives["invalid_arg"]("Random.int64");}
    else
     {return int64aux(s,bound);}
    };

if(Nativeint["size"]===32)
 {var nativeint=function(s,bound){return int32(s,bound);};}
else
 {var nativeint=function(s,bound){return int64(s,bound);};}

var
 rawfloat=
  function(s)
   {var scale=1073741824;
    
    var r1=bits(s);
    
    var r2=bits(s);
    
    return (r1/scale+r2)/scale;
    };

var $$float=function(s,bound){return rawfloat(s)*bound;};

var bool=function(s){return (bits(s)&1)===0;};

var
 State=
  [0,
   new_state,
   assign,
   full_init,
   make,
   make_self_init,
   copy,
   bits,
   intaux,
   $$int,
   int32aux,
   int32,
   int64aux,
   int64,
   nativeint,
   rawfloat,
   $$float,
   bool];

var
 $$default=
  /* record */[0,
   CamlPrimitive["caml_obj_dup"]
    ([0,
      987910699,
      495797812,
      364182224,
      414272206,
      318284740,
      990407751,
      383018966,
      270373319,
      840823159,
      24560019,
      536292337,
      512266505,
      189156120,
      730249596,
      143776328,
      51606627,
      140166561,
      366354223,
      1003410265,
      700563762,
      981890670,
      913149062,
      526082594,
      1021425055,
      784300257,
      667753350,
      630144451,
      949649812,
      48546892,
      415514493,
      258888527,
      511570777,
      89983870,
      283659902,
      308386020,
      242688715,
      482270760,
      865188196,
      1027664170,
      207196989,
      193777847,
      619708188,
      671350186,
      149669678,
      257044018,
      87658204,
      558145612,
      183450813,
      28133145,
      901332182,
      710253903,
      510646120,
      652377910,
      409934019,
      801085050]),
   0];

var bits$1=function(param){return State[7]($$default);};

var $$int$1=function(bound){return State[9]($$default,bound);};

var int32$1=function(bound){return State[11]($$default,bound);};

var nativeint$1=function(bound){return State[14]($$default,bound);};

var int64$1=function(bound){return State[13]($$default,bound);};

var $$float$1=function(scale){return State[16]($$default,scale);};

var bool$1=function(param){return State[17]($$default);};

var full_init$1=function(seed){return State[3]($$default,seed);};

var init=function(seed){return State[3]($$default,[seed]);};

var
 self_init=
  function(param)
   {return full_init$1(CamlPrimitive["caml_sys_random_seed"](/* () */0));};

var get_state=function(param){return State[6]($$default);};

var set_state=function(s){return State[2]($$default,s);};

module["exports"]=
{"init":init,
 "full_init":full_init$1,
 "self_init":self_init,
 "bits":bits$1,
 "int":$$int$1,
 "int32":int32$1,
 "nativeint":nativeint$1,
 "int64":int64$1,
 "float":$$float$1,
 "bool":bool$1,
 "State":
 [0,
  State[4],
  State[5],
  State[6],
  State[7],
  State[9],
  State[11],
  State[14],
  State[13],
  State[16],
  State[17]],
 "get_state":get_state,
 "set_state":set_state};

