var CamlinternalOO=require("CamlinternalOO");
var
 generator_init=
  function(class)
   {var $js=CamlinternalOO["get_method_label"];
    var generate=$js(class,"generate");
    var $js$1=CamlinternalOO["set_method"];
    $js$1(class,generate,function(self-1,l){return 0});
    return function(env,self)
     {var $js$2=CamlinternalOO["create_object_opt"];return $js$2(self,class)}};
var $js=CamlinternalOO["make_class"];
var generator=$js([0,"generate"],generator_init);
var Base_generator=[0,generator];
var
 get_minimal_generator=
  function(param){var $js$1=param[1][1][1];return $js$1(0)};
module["exports"]=
{"Base_generator":Base_generator,
 "get_minimal_generator":get_minimal_generator};
