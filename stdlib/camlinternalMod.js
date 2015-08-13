// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("CamlinternalOO");
var CamlPrimtivie=require("CamlPrimtivie");
var Obj=require("Obj");
var $$Array=require("Array");


var
 init_mod=
  function(loc,shape)
   {if(typeof shape=="number")
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
         
         return function(param){throw [0,Undefined_recursive_module,loc];};
         
        case 1:
         return [246,
                 function(param){throw [0,Undefined_recursive_module,loc];}];
         
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
   {if(o["length"]>=n["length"])
     {}
    else
     {throw [0,Assert_failure,[0,"camlinternalMod.ml",40,2]];}
    
    for(var i=0;i<=n["length"]-1;i++){o[i]=n[i],0}
    };

var
 update_mod=
  function(shape,o,n)
   {if(typeof shape=="number")
     {switch(shape)
       {case 0:
         if
          ((CamlPrimtivie["caml_obj_tag"](n)=Obj["closure_tag"])&&
           n["length"]<=
           o["length"])
          {overwrite(o,n);
           return CamlPrimtivie["caml_obj_truncate"](o,n["length"]);
           }
         else
          {return overwrite(o,function(x){return n(x);});}
         
        case 1:
         if(CamlPrimtivie["caml_obj_tag"](n)=Obj["lazy_tag"])
          {return o[0]=n[0],0;}
         else
          {if(CamlPrimtivie["caml_obj_tag"](n)=Obj["forward_tag"])
            {CamlPrimtivie["caml_obj_set_tag"](o,Obj["forward_tag"]);
             return o[0]=n[0],0;
             }
           else
            {CamlPrimtivie["caml_obj_set_tag"](o,Obj["forward_tag"]);
             return o[0]=n,0;
             }
           }
         
        case 2:
         if((CamlPrimtivie["caml_obj_tag"](n)=0)&&(n["length"]=4))
          {}
         else
          {throw [0,Assert_failure,[0,"camlinternalMod.ml",63,6]];}
         
         return overwrite(o,n);
         
        }}
    else
     {switch(shape[0])
       {case 0:
         var comps=shape[1];
         
         if
          ((CamlPrimtivie["caml_obj_tag"](n)=0)&&n["length"]>=comps["length"])
          {}
         else
          {throw [0,Assert_failure,[0,"camlinternalMod.ml",66,6]];}
         
         for(var i=0;i<=comps["length"]-1;i++){update_mod(comps[i],o[i],n[i])}
         
        case 1:return /* () */0;
        }}
    };

module["exports"]={"init_mod":init_mod,"update_mod":update_mod};

