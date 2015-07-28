var Pervasives=require("Pervasives");
var Bytes=require("Bytes");
var
 to_buffer=
  function(buff,ofs,len,v,flags)
   {var $js=ofs<0||len<0||ofs>buff["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("Marshal.to_buffer: substring out of bounds")}
    else
     {return "unknown primitive:caml_output_value_to_buffer"}};
var header_size=20;
var
 data_size=
  function(buff,ofs)
   {var $js=ofs<0||ofs>buff["length"]-header_size;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Marshal.data_size")}
    else
     {return "unknown primitive:caml_marshal_data_size"}};
var
 total_size=
  function(buff,ofs){var $js=data_size(buff,ofs);return header_size+$js};
var
 from_bytes=
  function(buff,ofs)
   {var $js=ofs<0||ofs>buff["length"]-header_size;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Marshal.from_bytes")}
    else
     {var len="unknown primitive:caml_marshal_data_size";
      var $js$2=ofs>buff["length"]-(header_size+len);
      if($js$2)
       {var $js$3=Pervasives["invalid_arg"];
        return $js$3("Marshal.from_bytes")}
      else
       {return "unknown primitive:caml_input_value_from_string"}}};
var
 from_string=
  function(buff,ofs)
   {var $js=Bytes["unsafe_of_string"];
    var $js$1=$js(buff);
    return from_bytes($js$1,ofs)};
module["exports"]=
{"unknown block:(function prim/1041 prim/1040 prim/1039\n  (caml_output_value prim/1041 prim/1040 prim/1039))":
 unknown block:(function prim/1041 prim/1040 prim/1039
  (caml_output_value prim/1041 prim/1040 prim/1039)),
 "to_buffer":to_buffer,
 "unknown block:(function prim/1042 (caml_input_value prim/1042))":
 unknown block:(function prim/1042 (caml_input_value prim/1042)),
 "from_bytes":from_bytes,
 "from_string":from_string,
 "header_size":header_size,
 "data_size":data_size,
 "total_size":total_size};
