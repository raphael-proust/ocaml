var Obj=require("Obj");
var Undefined="unknown primitive:caml_set_oo_id";
var raise_undefined=function(param){var $js=Undefined;throw $js};
var
 force_lazy_block=
  function(blk)
   {var closure=blk[0];
    blk[0]=raise_undefined,0;
    try
     {var result=closure(0);
      blk[0]=result,0;
      "unknown primitive:caml_obj_set_tag";
      return result}
    catch(e)
     {blk[0]=function(param){var $js=e;throw $js},0;var $js=e;throw $js}};
var
 force_val_lazy_block=
  function(blk)
   {var closure=blk[0];
    blk[0]=raise_undefined,0;
    var result=closure(0);
    blk[0]=result,0;
    "unknown primitive:caml_obj_set_tag";
    return result};
var
 force=
  function(lzv)
   {var x=lzv;
    var t="unknown primitive:caml_obj_tag";
    var $js=t=Obj["forward_tag"];
    if($js)
     {return x[0]}
    else
     {var $js$1=t!=Obj["lazy_tag"];
      if($js$1){return x}else{return force_lazy_block(lzv)}}};
var
 force_val=
  function(lzv)
   {var x=lzv;
    var t="unknown primitive:caml_obj_tag";
    var $js=t=Obj["forward_tag"];
    if($js)
     {return x[0]}
    else
     {var $js$1=t!=Obj["lazy_tag"];
      if($js$1){return x}else{return force_val_lazy_block(lzv)}}};
module["exports"]=
{"Undefined":Undefined,
 "force_lazy_block":force_lazy_block,
 "force_val_lazy_block":force_val_lazy_block,
 "force":force,
 "force_val":force_val};
