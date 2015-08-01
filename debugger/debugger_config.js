var Int64ops=require("Int64ops");
var Hashtbl=require("Hashtbl");
var Sys=require("Sys");

var Toplevel="unknown primitive:caml_set_oo_id";

var debugger_prompt="(ocd) ";

var event_mark_before="<|b|>";

var event_mark_after="<|a|>";

var match=Sys["os_type"];

switch(match){case "Win32":var shell="cmd";default:var shell="/bin/sh";}

var runtime_program="ocamlrun";

var history_size=[0,30];

var load_path_for=Hashtbl["create"](0,7);

var checkpoint_big_step=[0,Int64ops["~~"]("10000")];

var checkpoint_small_step=[0,Int64ops["~~"]("1000")];

var checkpoint_max_count=[0,15];

var match$1=Sys["os_type"];

switch(match$1){case "Win32":var $js=0;default:var $js=1;}
var make_checkpoints=[0,$js];

var environment=[0,0];


module["exports"]=
{"Toplevel":Toplevel,
 "debugger_prompt":debugger_prompt,
 "event_mark_before":event_mark_before,
 "event_mark_after":event_mark_after,
 "shell":shell,
 "runtime_program":runtime_program,
 "history_size":history_size,
 "load_path_for":load_path_for,
 "checkpoint_big_step":checkpoint_big_step,
 "checkpoint_small_step":checkpoint_small_step,
 "checkpoint_max_count":checkpoint_max_count,
 "make_checkpoints":make_checkpoints,
 "environment":environment};

