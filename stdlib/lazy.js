// Generated CODE, PLEASE EDIT WITH CARE 

var Obj=require("./obj.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var CamlPrimitive=require("./camlPrimitive.js");


var Undefined=CamlinternalLazy["Undefined"];

var force_val=CamlinternalLazy["force_val"];

var
 from_fun=
  function(f)
   {var x=CamlPrimitive["caml_obj_block"](Obj["lazy_tag"],1);x[1]=f;return x};

var
 from_val=
  function(v)
   {var t=CamlPrimitive["caml_obj_tag"](v);
    
    return t===Obj["forward_tag"]||t===Obj["lazy_tag"]||t===Obj["double_tag"]
            ?CamlPrimitive["caml_lazy_make_forward"](v)
            :v};

var
 is_val=
  function(l){return CamlPrimitive["caml_obj_tag"](l)!==Obj["lazy_tag"]};

var lazy_from_fun=from_fun;

var lazy_from_val=from_val;

var lazy_is_val=is_val;

module["exports"]=
{"Undefined":Undefined,
 "force_val":force_val,
 "from_fun":from_fun,
 "from_val":from_val,
 "is_val":is_val,
 "lazy_from_fun":lazy_from_fun,
 "lazy_from_val":lazy_from_val,
 "lazy_is_val":lazy_is_val};

