var Format=require("Format");

var
 discard_printf=
  function(fmt){return Format["ifprintf"](Format["std_formatter"],fmt);};


module["exports"]={"discard_printf":discard_printf};

