// Generated CODE, PLEASE EDIT WITH CARE 

var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var default_size=32;

var
 create=
  function(x)
   {return /* record */[0,0,CamlPrimitive["caml_make_vect"](default_size,x)];};

var reset=function(t){return t[1]=0,0;};

var
 incr_table=
  function(table,new_size)
   {var t=CamlPrimitive["caml_make_vect"](new_size,table[2][1]);
    
    $$Array["blit"](table[2],0,t,0,/* -1 for tag */table[2]["length"]-1);
    return table[2]=t,0;
    };

var
 emit=
  function(table,i)
   {var size=/* -1 for tag */table[2]["length"]-1;
    
    if(table[1]>=size){incr_table(table,2*size)}else{}
    
    table[2][table[1]+1]=i;
    return table[1]=table[1]+1,0;
    };

var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Table.Error",0]);

var
 get=
  function(t,i){if(0<=i&&i<t[1]){return t[2][i+1];}else{throw $$Error;}};

var trim=function(t){var r=$$Array["sub"](t[2],0,t[1]);reset(t);return r;};

var
 iter=
  function(t,f)
   {var size=t[1];
    
    var data=t[2];
    
    for(var i=0;i<=size-1;i++){f(data[i+1])}
    return 0;
    };

var size=function(t){return t[1];};

module["exports"]=
{"create":create,
 "emit":emit,
 "iter":iter,
 "trim":trim,
 "Error":$$Error,
 "get":get,
 "size":size};

