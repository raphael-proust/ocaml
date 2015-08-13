// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimtivie=require("./camlPrimtivie.js");
var Obj=require("./obj.js");


var
 Undefined=
  CamlPrimtivie["caml_set_oo_id"]([248,"CamlinternalLazy.Undefined",0]);

var raise_undefined=function(param){throw Undefined;};

var
 force_lazy_block=
  function(blk)
   {var closure=blk[0];
    
    blk[0]=raise_undefined,0;
    try
     {var result=closure(/* () */0);
      
      blk[0]=result,0;
      CamlPrimtivie["caml_obj_set_tag"](blk,Obj["forward_tag"]);
      return result;
      }
    catch(e){blk[0]=function(param){throw e;},0;throw e;}
    };

var
 force_val_lazy_block=
  function(blk)
   {var closure=blk[0];
    
    blk[0]=raise_undefined,0;
    var result=closure(/* () */0);
    
    blk[0]=result,0;
    CamlPrimtivie["caml_obj_set_tag"](blk,Obj["forward_tag"]);
    return result;
    };

var
 force=
  function(lzv)
   {var x=lzv;
    
    var t=CamlPrimtivie["caml_obj_tag"](x);
    
    if(t=Obj["forward_tag"])
     {return x[0];}
    else
     {if(t!=Obj["lazy_tag"]){return x;}else{return force_lazy_block(lzv);}}
    };

var
 force_val=
  function(lzv)
   {var x=lzv;
    
    var t=CamlPrimtivie["caml_obj_tag"](x);
    
    if(t=Obj["forward_tag"])
     {return x[0];}
    else
     {if(t!=Obj["lazy_tag"]){return x;}else{return force_val_lazy_block(lzv);}
      }
    };

module["exports"]=
{"Undefined":Undefined,
 "force_lazy_block":force_lazy_block,
 "force_val_lazy_block":force_val_lazy_block,
 "force":force,
 "force_val":force_val};

