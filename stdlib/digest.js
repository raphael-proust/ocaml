// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");


var compare=$$String["compare"];

var
 string=
  function(str){return CamlPrimitive["caml_md5_string"](str,0,str["length"])};

var bytes=function(b){return string(Bytes["unsafe_to_string"](b))};

var
 substring=
  function(str,ofs,len)
   {return ofs<0||len<0||ofs>str["length"]-len
            ?Pervasives["invalid_arg"]("Digest.substring")
            :CamlPrimitive["caml_md5_string"](str,ofs,len)};

var
 subbytes=
  function(b,ofs,len){return substring(Bytes["unsafe_to_string"](b),ofs,len)};

var
 file=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    var exit;
    var d;
    
    try
     {d=CamlPrimitive["caml_md5_chan"](ic,-1);exit=-1;}
    catch(e){Pervasives["close_in"](ic);throw e}
    
    switch(exit){case -1:Pervasives["close_in"](ic);return d}
    };

var
 output=
  function(chan,digest){return Pervasives["output_string"](chan,digest)};

var input=function(chan){return Pervasives["really_input_string"](chan,16)};

var char_hex=function(n){return n+(n<10?48:97-10)};

var
 to_hex=
  function(d)
   {var result=CamlPrimitive["caml_create_string"](32);
    
    for(var i=0;i<=15;i++)
     {var x=d["charCodeAt"](i);
      
      result[i*2]=char_hex(x>>>4),result[i*2+1]=char_hex(x&15)}
    
    return Bytes["unsafe_to_string"](result)};

var
 from_hex=
  function(s)
   {if(s["length"]!==32)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "Digest.from_hex"]}
    
    var
     digit=
      function(c)
       {var exit;
        
        if(c>=65)
         {if(c>=97)
           {if(c>=103){exit=6;}else{return c-97+10}}
          else
           {if(c>=71){exit=6;}else{return c-65+10}}
          }
        else
         {if(9<-48+c>>>0){exit=6;}else{return c-48}}
        
        switch(exit)
         {case 6:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Invalid_argument"],
                  "Digest.from_hex"]
          }
        };
    
    var
     $$byte=
      function(i)
       {return (digit(s["charCodeAt"](i))<<4)+digit(s["charCodeAt"](i+1))};
    
    var result=CamlPrimitive["caml_create_string"](16);
    
    for(var i=0;i<=15;i++){result[i]=Char["chr"]($$byte(2*i))}
    
    return Bytes["unsafe_to_string"](result)};

module["exports"]=
{"compare":compare,
 "string":string,
 "bytes":bytes,
 "substring":substring,
 "subbytes":subbytes,
 "file":file,
 "output":output,
 "input":input,
 "to_hex":to_hex,
 "from_hex":from_hex};

