// Generated CODE, PLEASE EDIT WITH CARE 

var Filename=require("./filename.js");
var Ocamlbuild_config=require("./ocamlbuild_config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var bindir=[0,Ocamlbuild_config["bindir"]];

var $js;
try
 {$js=CamlPrimitive["caml_sys_getenv"]("OCAMLLIB");}
catch(exn)
 {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
   {$js=Ocamlbuild_config["libdir"];}
  else
   {throw exn;}
  }
var libdir=[0,Filename["concat"]($js,"ocamlbuild")];

module["exports"]={"bindir":bindir,"libdir":libdir};

