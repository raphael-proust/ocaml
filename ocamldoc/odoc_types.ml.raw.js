var Odoc_messages=require("Odoc_messages");
var dummy_info=[0,0,0,0,0,0,0,0,0,0,0,0];
var dummy_loc=[0,0,0];
var
 all_merge_options=
  [0,0,[0,1,[0,2,[0,3,[0,4,[0,5,[0,6,[0,7,[0,8,[0,9,[0,10,0]]]]]]]]]]];
var magic=Odoc_messages["magic"];
var make_dump=function(a){return [0,magic,a]};
var
 open_dump=
  function(param)
   {var $js="unknown primitive:caml_string_equal";
    if($js){return param[2]}else{return "unknown primitive:raise"}};
module["exports"]=
{"dummy_info":dummy_info,
 "dummy_loc":dummy_loc,
 "all_merge_options":all_merge_options,
 "magic":magic,
 "make_dump":make_dump,
 "open_dump":open_dump};
