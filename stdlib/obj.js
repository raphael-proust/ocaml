// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Marshal=require("./marshal.js");
var CamlPrimitive=require("./camlPrimitive.js");


var double_field=function(x,i){return x[i+1]};

var set_double_field=function(x,i,v){return x[i+1]=v,0};

var
 marshal=
  function(obj)
   {return CamlPrimitive["caml_output_value_to_string"](obj,/* [] */0)};

var
 unmarshal=
  function(str,pos)
   {return /* tuple */[0,
            Marshal["from_bytes"](str,pos),
            pos+Marshal["total_size"](str,pos)]};

var first_non_constant_constructor_tag=0;

var last_non_constant_constructor_tag=245;

var lazy_tag=246;

var closure_tag=247;

var object_tag=248;

var infix_tag=249;

var forward_tag=250;

var no_scan_tag=251;

var abstract_tag=251;

var string_tag=252;

var double_tag=253;

var double_array_tag=254;

var custom_tag=255;

var final_tag=custom_tag;

var int_tag=1e3;

var out_of_heap_tag=1001;

var unaligned_tag=1002;

var
 extension_slot=
  function(x)
   {var x$1=x;
    
    var
     slot=
      CamlPrimitive["caml_obj_is_block"](x$1)&&
       CamlPrimitive["caml_obj_tag"](x$1)!==
       object_tag&&
       /* -1 for tag */x$1["length"]-
       1>=
       1
       ?x$1[1]
       :x$1;
    
    var name;
    if
     (CamlPrimitive["caml_obj_is_block"](slot)&&
      CamlPrimitive["caml_obj_tag"](slot)===
      object_tag)
     {name=slot[1];}
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"]}
    
    if(CamlPrimitive["caml_obj_tag"](name)===string_tag)
     {return slot}
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"]}
    };

var
 extension_name=
  function(x)
   {try
     {var slot=extension_slot(x);return slot[1]}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Pervasives["invalid_arg"]("Obj.extension_name")}
      else
       {throw exn}
      }
    };

var
 extension_id=
  function(x)
   {try
     {var slot=extension_slot(x);return slot[2]}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Pervasives["invalid_arg"]("Obj.extension_id")}
      else
       {throw exn}
      }
    };

var
 extension_slot$1=
  function(x)
   {try
     {return extension_slot(x)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Pervasives["invalid_arg"]("Obj.extension_slot")}
      else
       {throw exn}
      }
    };

module["exports"]=
{"double_field":double_field,
 "set_double_field":set_double_field,
 "first_non_constant_constructor_tag":first_non_constant_constructor_tag,
 "last_non_constant_constructor_tag":last_non_constant_constructor_tag,
 "lazy_tag":lazy_tag,
 "closure_tag":closure_tag,
 "object_tag":object_tag,
 "infix_tag":infix_tag,
 "forward_tag":forward_tag,
 "no_scan_tag":no_scan_tag,
 "abstract_tag":abstract_tag,
 "string_tag":string_tag,
 "double_tag":double_tag,
 "double_array_tag":double_array_tag,
 "custom_tag":custom_tag,
 "final_tag":final_tag,
 "int_tag":int_tag,
 "out_of_heap_tag":out_of_heap_tag,
 "unaligned_tag":unaligned_tag,
 "extension_name":extension_name,
 "extension_id":extension_id,
 "extension_slot":extension_slot$1,
 "marshal":marshal,
 "unmarshal":unmarshal};

