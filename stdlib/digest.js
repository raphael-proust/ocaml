// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var Bytes=require("Bytes");


var compare=$$String["compare"];

var string=function(str){return "unknown primitive:caml_md5_string";};

var bytes=function(b){return string(Bytes["unsafe_to_string"](b));};

var
 substring=
  function(str,ofs,len)
   {if(ofs<0||len<0||ofs>str["length"]-len)
     {return Pervasives["invalid_arg"]("Digest.substring");}
    else
     {return "unknown primitive:caml_md5_string";}
    };

var
 subbytes=
  function(b,ofs,len){return substring(Bytes["unsafe_to_string"](b),ofs,len);};

var
 file=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    var exit;
    
    try
     {var d="unknown primitive:caml_md5_chan";exit=-1;}
    catch(e){Pervasives["close_in"](ic);throw e;}
    
    switch(exit){case -1:Pervasives["close_in"](ic);return d;}
    };

var
 output=
  function(chan,digest){return Pervasives["output_string"](chan,digest);};

var input=function(chan){return Pervasives["really_input_string"](chan,16);};

var char_hex=function(n){return n+(n<10?48:97-10);};

var
 to_hex=
  function(d)
   {var result="unknown primitive:caml_create_string";
    
    for(var i=0;i<=15;i++)
     {var x=d[i];result[i*2]=char_hex(x>>>4),0,result[i*2+1]=char_hex(x&15),0}
    
    return Bytes["unsafe_to_string"](result);
    };

var
 from_hex=
  function(s)
   {if(s["length"]!=32){throw [0,Invalid_argument,"Digest.from_hex"];}else{}
    
    var
     digit=
      function(c)
       {var exit;
        
        if(c>=65)
         {if(c>=97)
           {if(c>=103){exit=6;}else{return c-97+10;}}
          else
           {if(c>=71){exit=6;}else{return c-65+10;}}
          }
        else
         {var switcher=-48+c;if(9<switcher>>>0){exit=6;}else{return c-48;}}
        
        switch(exit){case 6:throw [0,Invalid_argument,"Digest.from_hex"];}
        };
    
    var $$byte=function(i){return (digit(s[i])<<4)+digit(s[i+1]);};
    
    var result="unknown primitive:caml_create_string";
    
    for(var i=0;i<=15;i++){result[i]=Char["chr"]($$byte(2*i)),0}
    
    return Bytes["unsafe_to_string"](result);
    };

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

