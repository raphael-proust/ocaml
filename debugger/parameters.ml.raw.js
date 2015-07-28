var Envaux=require("Envaux");
var Primitives=require("Primitives");
var Filename=require("Filename");
var Debugger_config=require("Debugger_config");
var Hashtbl=require("Hashtbl");
var Config=require("Config");
var program_loaded=0;
var program_name=[0,""];
var socket_name=[0,""];
var arguments=[0,""];
var
 default_load_path=
  [0,[0,Filename["current_dir_name"],[0,Config["standard_library"],0]]];
var
 add_path=
  function(dir)
   {var $js=Primitives["except"];
    var $js$1=$js(dir,Config["load_path"][1]);
    var $js$2=[0,dir,$js$1];
    Config["load_path"][1]=$js$2,0;
    var $js$3=Envaux["reset_cache"];
    return $js$3(0)};
var
 add_path_for=
  function(mdl,dir)
   {try
     {var $js=Hashtbl["find"];
      var old=$js(Debugger_config["load_path_for"],mdl)}
    catch(exn)
     {var $js$1=exn=Not_found;
      if($js$1){var old=0}else{var old="unknown primitive:reraise"}}
    var $js$2=Hashtbl["replace"];
    return $js$2(Debugger_config["load_path_for"],mdl,[0,dir,old])};
var emacs=[0,0];
var machine_readable=[0,0];
module["exports"]=
{"program_name":program_name,
 "socket_name":socket_name,
 "arguments":arguments,
 "default_load_path":default_load_path,
 "add_path":add_path,
 "add_path_for":add_path_for,
 "emacs":emacs,
 "machine_readable":machine_readable};
