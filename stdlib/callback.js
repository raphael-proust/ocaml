// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimtivie=require("./camlPrimtivie.js");
var Obj=require("./obj.js");


var
 register=
  function(name,v){return CamlPrimtivie["caml_register_named_value"](name,v);};

var
 register_exception=
  function(name,exn)
   {var exn$1=exn;
    
    if(CamlPrimtivie["caml_obj_tag"](exn$1)=Obj["object_tag"])
     {var slot=exn$1;}
    else
     {var slot=exn$1[0];}
    
    return CamlPrimtivie["caml_register_named_value"](name,slot);
    };

module["exports"]=
{"register":register,"register_exception":register_exception};

