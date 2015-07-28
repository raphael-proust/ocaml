var Filename=require("Filename");
var Ocamlbuild_config=require("Ocamlbuild_config");
var bindir=[0,Ocamlbuild_config["bindir"]];
var $js=Filename["concat"];
try
 {var $js$1="unknown primitive:caml_sys_getenv"}
catch(exn)
 {var $js$2=exn=Not_found;
  if($js$2)
   {var $js$1=Ocamlbuild_config["libdir"]}
  else
   {var $js$1="unknown primitive:reraise"}}
var $js$3=$js($js$1,"ocamlbuild");
var libdir=[0,$js$3];
module["exports"]={"bindir":bindir,"libdir":libdir};
