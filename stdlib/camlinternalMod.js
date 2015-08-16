// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("./camlinternalOO.js");
var Obj=require("./obj.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 init_mod=
  function(loc,shape)
   {if(typeof shape==="number")
     {switch(shape)
       {case 0:
         var pad1=1;
         
         var pad2=2;
         
         var pad3=3;
         
         var pad4=4;
         
         var pad5=5;
         
         var pad6=6;
         
         var pad7=7;
         
         var pad8=8;
         
         return function(param)
          {
           
           
           
           
           
           
           
           throw [0,
                  CamlPrimitive["caml_global_data"]
                   ["Undefined_recursive_module"],
                  loc];
           };
         
        case 1:
         return [246,
                 function(param)
                  {throw [0,
                          CamlPrimitive["caml_global_data"]
                           ["Undefined_recursive_module"],
                          loc];
                   }];
         
        case 2:return CamlinternalOO["dummy_class"](loc);
        }}
    else
     {switch(shape[0])
       {case 0:var comps=shape[1];return $$Array["map"](init_mod(loc),comps);
        case 1:var v=shape[1];return v;
        }}
    };

var
 overwrite=
  function(o,n)
   {if(/* -1 for tag */o["length"]-1>=/* -1 for tag */n["length"]-1)
     {}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"camlinternalMod.ml",40,2]];
      }
    
    for(var i=0;i<=/* -1 for tag */n["length"]-1-1;i++){o[i+1]=n[i+1]}
    return 0;
    };

var
 update_mod=
  function(shape,o,n)
   {if(typeof shape==="number")
     {switch(shape)
       {case 0:
         if
          (CamlPrimitive["caml_obj_tag"](n)===
           Obj["closure_tag"]&&
           /* -1 for tag */n["length"]-
           1<=
           /* -1 for tag */o["length"]-
           1)
          {overwrite(o,n);
           return CamlPrimitive["caml_obj_truncate"]
                   (o,/* -1 for tag */n["length"]-1);
           }
         else
          {return overwrite(o,function(x){return n(x);});}
         
        case 1:
         if(CamlPrimitive["caml_obj_tag"](n)===Obj["lazy_tag"])
          {return o[1]=n[1],0;}
         else
          {if(CamlPrimitive["caml_obj_tag"](n)===Obj["forward_tag"])
            {CamlPrimitive["caml_obj_set_tag"](o,Obj["forward_tag"]);
             return o[1]=n[1],0;
             }
           else
            {CamlPrimitive["caml_obj_set_tag"](o,Obj["forward_tag"]);
             return o[1]=n,0;
             }
           }
         
        case 2:
         if
          (CamlPrimitive["caml_obj_tag"](n)===
           0&&
           /* -1 for tag */n["length"]-
           1===
           4)
          {}
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"camlinternalMod.ml",63,6]];
           }
         
         return overwrite(o,n);
         
        }}
    else
     {switch(shape[0])
       {case 0:
         var comps=shape[1];
         
         if
          (CamlPrimitive["caml_obj_tag"](n)===
           0&&
           /* -1 for tag */n["length"]-
           1>=
           /* -1 for tag */comps["length"]-
           1)
          {}
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"camlinternalMod.ml",66,6]];
           }
         
         for(var i=0;i<=/* -1 for tag */comps["length"]-1-1;i++)
          {update_mod(comps[i+1],o[i+1],n[i+1])}
         return 0;
         
        case 1:return /* () */0;
        }}
    };

module["exports"]={"init_mod":init_mod,"update_mod":update_mod};

