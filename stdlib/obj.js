// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Marshal=require("Marshal");


var double_field=function(x,i){return x[i];};

var set_double_field=function(x,i,v){return x[i]=v,0;};

var
 marshal=
  function(obj){return "unknown primitive:caml_output_value_to_string";};

var
 unmarshal=
  function(str,pos)
   {return /* tuple */[0,
            Marshal["from_bytes"](str,pos),
            pos+Marshal["total_size"](str,pos)];
    };

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
    
    if
     ("unknown primitive:caml_obj_is_block"&&
      "unknown primitive:caml_obj_tag"!=
      object_tag&&
      x$1["length"]>=
      1)
     {var slot=x$1[0];}
    else
     {var slot=x$1;}
    
    if
     ("unknown primitive:caml_obj_is_block"&&
      ("unknown primitive:caml_obj_tag"=object_tag))
     {var name=slot[0];}
    else
     {throw Not_found;}
    
    if("unknown primitive:caml_obj_tag"=string_tag)
     {return slot;}
    else
     {throw Not_found;}
    };

var
 extension_name=
  function(x)
   {try
     {var slot=extension_slot(x);return slot[0];}
    catch(exn)
     {if(exn=Not_found)
       {return Pervasives["invalid_arg"]("Obj.extension_name");}
      else
       {throw exn;}
      }
    };

var
 extension_id=
  function(x)
   {try
     {var slot=extension_slot(x);return slot[1];}
    catch(exn)
     {if(exn=Not_found)
       {return Pervasives["invalid_arg"]("Obj.extension_id");}
      else
       {throw exn;}
      }
    };

var
 extension_slot$1=
  function(x)
   {try
     {return extension_slot(x);}
    catch(exn)
     {if(exn=Not_found)
       {return Pervasives["invalid_arg"]("Obj.extension_slot");}
      else
       {throw exn;}
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

