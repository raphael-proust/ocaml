var Pervasives=require("Pervasives");
var Bytes=require("Bytes");

var
 to_buffer=
  function(buff,ofs,len,v,flags)
   {if(ofs<0||len<0||ofs>buff["length"]-len)
     {return Pervasives["invalid_arg"]
              ("Marshal.to_buffer: substring out of bounds");
      }
    else
     {return "unknown primitive:caml_output_value_to_buffer";}
    };

var header_size=20;

var
 data_size=
  function(buff,ofs)
   {if(ofs<0||ofs>buff["length"]-header_size)
     {return Pervasives["invalid_arg"]("Marshal.data_size");}
    else
     {return "unknown primitive:caml_marshal_data_size";}
    };

var total_size=function(buff,ofs){return header_size+data_size(buff,ofs);};

var
 from_bytes=
  function(buff,ofs)
   {if(ofs<0||ofs>buff["length"]-header_size)
     {return Pervasives["invalid_arg"]("Marshal.from_bytes");}
    else
     {var len="unknown primitive:caml_marshal_data_size";
      
      if(ofs>buff["length"]-(header_size+len))
       {return Pervasives["invalid_arg"]("Marshal.from_bytes");}
      else
       {return "unknown primitive:caml_input_value_from_string";}
      }
    };

var
 from_string=
  function(buff,ofs){return from_bytes(Bytes["unsafe_of_string"](buff),ofs);};

[0,
 function(prim,prim$1,prim$2){return "unknown primitive:caml_output_value";},
 to_buffer,
 function(prim){return "unknown primitive:caml_input_value";},
 from_bytes,
 from_string,
 header_size,
 data_size,
 total_size];
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

