// Generated CODE, PLEASE EDIT WITH CARE 

var Envaux=require("./envaux.js");
var Primitives=require("./primitives.js");
var Filename=require("./filename.js");
var Debugger_config=require("./debugger_config.js");
var Hashtbl=require("./hashtbl.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var program_loaded=/* false */0;

var program_name=[0,""];

var socket_name=[0,""];

var $$arguments=[0,""];

var
 default_load_path=
  [0,
   /* :: */[0,
    Filename["current_dir_name"],
    /* :: */[0,Config["standard_library"],/* [] */0]]];

var
 add_path=
  function(dir)
   {Config["load_path"][1]=
    /* :: */[0,dir,Primitives["except"](dir,Config["load_path"][1])];
    return Envaux["reset_cache"](/* () */0)};

var
 add_path_for=
  function(mdl,dir)
   {var old;
    try
     {old=Hashtbl["find"](Debugger_config["load_path_for"],mdl);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {old=/* [] */0;}
      else
       {throw exn}
      }
    
    return Hashtbl["replace"]
            (Debugger_config["load_path_for"],mdl,/* :: */[0,dir,old])};

var emacs=[0,/* false */0];

var machine_readable=[0,/* false */0];

module["exports"]=
{"program_name":program_name,
 "socket_name":socket_name,
 "arguments":$$arguments,
 "default_load_path":default_load_path,
 "add_path":add_path,
 "add_path_for":add_path_for,
 "emacs":emacs,
 "machine_readable":machine_readable};

