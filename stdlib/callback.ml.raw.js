var Obj=require("Obj");
var
 register=
  function(name,v){return "unknown primitive:caml_register_named_value"};
var
 register_exception=
  function(name,exn)
   {var exn$1=exn;
    var $js="unknown primitive:caml_obj_tag";
    var $js$1=$js=Obj["object_tag"];
    if($js$1){var slot=exn$1}else{var slot=exn$1[0]}
    return "unknown primitive:caml_register_named_value"};
module["exports"]=
{"register":register,"register_exception":register_exception};
