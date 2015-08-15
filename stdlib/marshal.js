// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 to_buffer=
  function(buff,ofs,len,v,flags)
   {if(ofs<0||len<0||ofs>buff["length"]-len)
     {return Pervasives["invalid_arg"]
              ("Marshal.to_buffer: substring out of bounds");
      }
    else
     {return CamlPrimitive["caml_output_value_to_buffer"]
              (buff,ofs,len,v,flags);
      }
    };

var header_size=20;

var
 data_size=
  function(buff,ofs)
   {if(ofs<0||ofs>buff["length"]-header_size)
     {return Pervasives["invalid_arg"]("Marshal.data_size");}
    else
     {return CamlPrimitive["caml_marshal_data_size"](buff,ofs);}
    };

var total_size=function(buff,ofs){return header_size+data_size(buff,ofs);};

var
 from_bytes=
  function(buff,ofs)
   {if(ofs<0||ofs>buff["length"]-header_size)
     {return Pervasives["invalid_arg"]("Marshal.from_bytes");}
    else
     {var len=CamlPrimitive["caml_marshal_data_size"](buff,ofs);
      
      if(ofs>buff["length"]-(header_size+len))
       {return Pervasives["invalid_arg"]("Marshal.from_bytes");}
      else
       {return CamlPrimitive["caml_input_value_from_string"](buff,ofs);}
      }
    };

var
 from_string=
  function(buff,ofs){return from_bytes(Bytes["unsafe_of_string"](buff),ofs);};

module["exports"]=
{"caml_output_value":
 function(prim,prim,prim)
  {return CamlPrimitive["caml_output_value"](prim$1,prim$2,prim);},
 "to_buffer":to_buffer,
 "caml_input_value":
 function(prim){return CamlPrimitive["caml_input_value"](prim);},
 "from_bytes":from_bytes,
 "from_string":from_string,
 "header_size":header_size,
 "data_size":data_size,
 "total_size":total_size};

