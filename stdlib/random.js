// Generated CODE, PLEASE EDIT WITH CARE 

var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var Digest=require("Digest");
var Int32=require("Int32");
var Int64=require("Int64");
var $$Array=require("Array");


var
 new_state=
  function(param)
   {return /* record */[0,"unknown primitive:caml_make_vect",0];};

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
    
    if(seed["length"]=0){var seed$1=[0];}else{var seed$1=seed;}
    
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
  function(param){return make("unknown primitive:caml_sys_random_seed");};

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

if(Nativeint["size"]=32)
 {var
   nativeint=
    function(s,bound){return "unknown primitive:nativeint_of_int32";};
  }
else
 {var
   nativeint=
    function(s,bound){return "unknown primitive:nativeint_of_int64";};
  }

var
 rawfloat=
  function(s)
   {var scale=1073741824;
    
    var r1=bits(s);
    
    var r2=bits(s);
    
    return (r1/scale+r2)/scale;
    };

var $$float=function(s,bound){return rawfloat(s)*bound;};

var bool=function(s){return (bits(s)&1)=0;};

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

var $$default=/* record */[0,"unknown primitive:caml_obj_dup",0];

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
   {return full_init$1("unknown primitive:caml_sys_random_seed");};

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

