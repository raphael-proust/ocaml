// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Clflags=require("./clflags.js");
var Filename=require("./filename.js");
var Odoc_config=require("./odoc_config.js");
var Odoc_messages=require("./odoc_messages.js");


Clflags["dont_write_files"][1]=/* true */1;
var include_dirs=Clflags["include_dirs"];

var errors=[0,0];

var warn_error=[0,/* false */0];

var
 pwarning=
  function(s)
   {if(Odoc_config["print_warnings"][1])
     {Pervasives["prerr_endline"]
       (Pervasives["^"](Odoc_messages["warning"],Pervasives["^"](": ",s)))}
    
    return warn_error[1]?errors[0]++:0};

var merge_options=[0,/* [] */0];

var classic=Clflags["classic"];

var dump=[0,/* None */0];

var load=[0,/* [] */0];

var sort_modules=[0,/* false */0];

var no_custom_tags=[0,/* false */0];

var no_stop=[0,/* false */0];

var remove_stars=[0,/* false */0];

var keep_code=[0,/* false */0];

var inverse_merge_ml_mli=[0,/* false */0];

var filter_with_module_constraints=[0,/* true */1];

var hidden_modules=[0,/* [] */0];

var files=[0,/* [] */0];

var out_file=[0,Odoc_messages["default_out_file"]];

var verbose=Clflags["verbose"];

var target_dir=[0,Filename["current_dir_name"]];

var title=[0,/* None */0];

var intro_file=[0,/* None */0];

var with_header=[0,/* true */1];

var with_trailer=[0,/* true */1];

var with_toc=[0,/* true */1];

var with_index=[0,/* true */1];

module["exports"]=
{"include_dirs":include_dirs,
 "merge_options":merge_options,
 "classic":classic,
 "dump":dump,
 "load":load,
 "sort_modules":sort_modules,
 "no_stop":no_stop,
 "no_custom_tags":no_custom_tags,
 "remove_stars":remove_stars,
 "keep_code":keep_code,
 "inverse_merge_ml_mli":inverse_merge_ml_mli,
 "filter_with_module_constraints":filter_with_module_constraints,
 "hidden_modules":hidden_modules,
 "files":files,
 "errors":errors,
 "warn_error":warn_error,
 "pwarning":pwarning,
 "out_file":out_file,
 "verbose":verbose,
 "intro_file":intro_file,
 "title":title,
 "target_dir":target_dir,
 "with_toc":with_toc,
 "with_index":with_index,
 "with_header":with_header,
 "with_trailer":with_trailer};

