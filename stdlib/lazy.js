// Generated CODE, PLEASE EDIT WITH CARE 

var Obj=require("Obj");
var CamlinternalLazy=require("CamlinternalLazy");


var Undefined=CamlinternalLazy["Undefined"];

var force_val=CamlinternalLazy["force_val"];

var
 from_fun=
  function(f){var x="unknown primitive:caml_obj_block";x[0]=f,0;return x;};

var
 from_val=
  function(v)
   {var t="unknown primitive:caml_obj_tag";
    
    if((t=Obj["forward_tag"])||(t=Obj["lazy_tag"])||(t=Obj["double_tag"]))
     {return "unknown primitive:caml_lazy_make_forward";}
    else
     {return v;}
    };

var
 is_val=
  function(l){return "unknown primitive:caml_obj_tag"!=Obj["lazy_tag"];};

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

