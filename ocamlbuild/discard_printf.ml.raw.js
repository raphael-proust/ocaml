var Format=require("Format");
var
 discard_printf=
  function(fmt)
   {var $js=Format["ifprintf"];return $js(Format["std_formatter"],fmt)};
module["exports"]={"discard_printf":discard_printf};
