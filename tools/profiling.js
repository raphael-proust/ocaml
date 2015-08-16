// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var CamlPrimitive=require("./camlPrimitive.js");


var counters=[0,/* [] */0];

var incr=function(a,i){return a[i+1]=a[i+1]+1,0;};

var
 Bad_profile=
  CamlPrimitive["caml_set_oo_id"]([248,"Profiling.Bad_profile",0]);

var
 dump_counters=
  function(param)
   {try
     {var dumpfile=CamlPrimitive["caml_sys_getenv"]("OCAMLPROF_DUMP");}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var dumpfile="ocamlprof.dump";}
      else
       {throw exn;}
      }
    
    try
     {var ic=Pervasives["open_in_bin"](dumpfile);
      
      var prevl=Pervasives["input_value"](ic);
      
      Pervasives["close_in"](ic),
      List["iter2"]
       (function(param$1,param$2)
         {var match=param$2[2];
          
          var match$1=param$1[2];
          
          if
           (CamlPrimitive["caml_string_notequal"](param$1[1],param$2[1])||
            CamlPrimitive["caml_string_notequal"](match$1[1],match[1])||
            /* -1 for tag */match$1[2]["length"]-
            1!==
            /* -1 for tag */match[2]["length"]-
            1)
           {throw Bad_profile;}
          else
           {return 0;}
          },
        counters[1],
        prevl),
      List["iter2"]
       (function(param$1,param$2)
         {var prevcount=param$2[2][2];
          
          var curcount=param$1[2][2];
          
          for(var i=0;i<=/* -1 for tag */curcount["length"]-1-1;i++)
           {curcount[i+1]=curcount[i+1]+prevcount[i+1]}
          return 0;
          },
        counters[1],
        prevl)}
    catch(exn$1){}
    
    try
     {var oc=Pervasives["open_out_bin"](dumpfile);
      
      Pervasives["output_value"](oc,counters[1]);
      return Pervasives["close_out"](oc);
      }
    catch(exn$2){return /* () */0;}
    };

Pervasives["at_exit"](dump_counters);
module["exports"]={"counters":counters,"incr":incr};

