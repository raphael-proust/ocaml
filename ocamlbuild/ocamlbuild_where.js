// Generated CODE, PLEASE EDIT WITH CARE 

var Filename=require("Filename");
var Ocamlbuild_config=require("Ocamlbuild_config");


var bindir=[0,Ocamlbuild_config["bindir"]];

var $js;
try
 {$js="unknown primitive:caml_sys_getenv";}
catch(exn)
 {if(exn=Not_found){$js=Ocamlbuild_config["libdir"];}else{throw exn;}}
var libdir=[0,Filename["concat"]($js,"ocamlbuild")];

module["exports"]={"bindir":bindir,"libdir":libdir};

