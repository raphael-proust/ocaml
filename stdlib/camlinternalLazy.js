// Generated CODE, PLEASE EDIT WITH CARE 

var Obj=require("./obj.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Undefined=
  CamlPrimitive["caml_set_oo_id"]([248,"CamlinternalLazy.Undefined",0]);

var raise_undefined=function(param){throw Undefined};

var
 force_lazy_block=
  function(blk)
   {var closure=blk[1];
    
    blk[1]=raise_undefined;
    try
     {var result=closure(/* () */0);
      
      blk[1]=result;
      CamlPrimitive["caml_obj_set_tag"](blk,Obj["forward_tag"]);
      return result}
    catch(e){blk[1]=function(param){throw e};throw e}
    };

var
 force_val_lazy_block=
  function(blk)
   {var closure=blk[1];
    
    blk[1]=raise_undefined;
    var result=closure(/* () */0);
    
    blk[1]=result;
    CamlPrimitive["caml_obj_set_tag"](blk,Obj["forward_tag"]);
    return result};

var
 force=
  function(lzv)
   {var x=lzv;
    
    var t=CamlPrimitive["caml_obj_tag"](x);
    
    return t===Obj["forward_tag"]
            ?x[1]
            :t!==Obj["lazy_tag"]?x:force_lazy_block(lzv)};

var
 force_val=
  function(lzv)
   {var x=lzv;
    
    var t=CamlPrimitive["caml_obj_tag"](x);
    
    return t===Obj["forward_tag"]
            ?x[1]
            :t!==Obj["lazy_tag"]?x:force_val_lazy_block(lzv)};

module["exports"]=
{"Undefined":Undefined,
 "force_lazy_block":force_lazy_block,
 "force_val_lazy_block":force_val_lazy_block,
 "force":force,
 "force_val":force_val};

