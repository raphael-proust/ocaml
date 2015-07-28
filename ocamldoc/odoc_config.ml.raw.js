var Filename=require("Filename");
var Config=require("Config");
var $js=Filename["concat"];
var $js$1=Filename["concat"];
var $js$2=$js$1("ocamldoc","custom");
var custom_generators_path=$js(Config["standard_library"],$js$2);
var print_warnings=[0,1];
module["exports"]=
{"custom_generators_path":custom_generators_path,
 "print_warnings":print_warnings};
