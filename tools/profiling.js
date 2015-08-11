// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");


var counters=[0,0];

var incr=function(a,i){return a[i]=a[i]+1,0;};

var Bad_profile="unknown primitive:caml_set_oo_id";

var
 dump_counters=
  function(param)
   {try
     {var dumpfile="unknown primitive:caml_sys_getenv";}
    catch(exn)
     {if(exn=Not_found){var dumpfile="ocamlprof.dump";}else{throw exn;}}
    
    try
     {var ic=Pervasives["open_in_bin"](dumpfile);
      
      var prevl=Pervasives["input_value"](ic);
      
      Pervasives["close_in"](ic),
      List["iter2"]
       (function(param$1,param$2)
         {var match=param$2[2];
          
          var match$1=param$1[2];
          
          if
           ("unknown primitive:caml_string_notequal"||
            "unknown primitive:caml_string_notequal"||
            match$1[2]["length"]!=
            match[2]["length"])
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
          
          for(var i=0;i<=curcount["length"]-1;i++)
           {curcount[i]=curcount[i]+prevcount[i],0}
          },
        counters[1],
        prevl)}
    catch(exn$1){}
    
    try
     {var oc=Pervasives["open_out_bin"](dumpfile);
      
      Pervasives["output_value"](oc,counters[1]);
      return Pervasives["close_out"](oc);
      }
    catch(exn$2){return 0;}
    };

Pervasives["at_exit"](dump_counters);
module["exports"]={"counters":counters,"incr":incr};

