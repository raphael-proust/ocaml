// Generated CODE, PLEASE EDIT WITH CARE 

var $$Array=require("Array");


var default_size=32;

var
 create=
  function(x){return /* record */[0,0,"unknown primitive:caml_make_vect"];};

var reset=function(t){return t[1]=0,0;};

var
 incr_table=
  function(table,new_size)
   {var t="unknown primitive:caml_make_vect";
    
    $$Array["blit"](table[2],0,t,0,table[2]["length"]);
    return table[2]=t,0;
    };

var
 emit=
  function(table,i)
   {var size=table[2]["length"];
    
    if(table[1]>=size){incr_table(table,2*size)}else{}
    
    table[2][table[1]]=i,0;
    return table[1]=table[1]+1,0;
    };

var $$Error="unknown primitive:caml_set_oo_id";

var get=function(t,i){if(0<=i&&i<t[1]){return t[2][i];}else{throw $$Error;}};

var trim=function(t){var r=$$Array["sub"](t[2],0,t[1]);reset(t);return r;};

var
 iter=
  function(t,f)
   {var size=t[1];var data=t[2];for(var i=0;i<=size-1;i++){f(data[i])}};

var size=function(t){return t[1];};

module["exports"]=
{"create":create,
 "emit":emit,
 "iter":iter,
 "trim":trim,
 "Error":$$Error,
 "get":get,
 "size":size};

