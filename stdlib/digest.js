var $$String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var Bytes=require("Bytes");
var compare=$$String["compare"];
var string=function(str){return "unknown primitive:caml_md5_string"};
var
 bytes=
  function(b)
   {var $js=Bytes["unsafe_to_string"];var $js$1=$js(b);return string($js$1)};
var
 substring=
  function(str,ofs,len)
   {var $js=ofs<0||len<0||ofs>str["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Digest.substring")}
    else
     {return "unknown primitive:caml_md5_string"}};
var
 subbytes=
  function(b,ofs,len)
   {var $js=Bytes["unsafe_to_string"];
    var $js$1=$js(b);
    return substring($js$1,ofs,len)};
var
 file=
  function(filename)
   {var $js=Pervasives["open_in_bin"];
    var ic=$js(filename);
    try
     {var d="unknown primitive:caml_md5_chan";var exit=-1}
    catch(e)
     {var $js$1=Pervasives["close_in"];$js$1(ic);var $js$2=e;throw $js$2}
    switch(exit){case -1:var $js$3=Pervasives["close_in"];$js$3(ic);return d}};
var
 output=
  function(chan,digest)
   {var $js=Pervasives["output_string"];return $js(chan,digest)};
var
 input=
  function(chan)
   {var $js=Pervasives["really_input_string"];return $js(chan,16)};
var
 char_hex=
  function(n)
   {var $js=n<10;
    if($js){var $js$1=48}else{var $js$1=97-10}
    var $js$2=n+$js$1;
    return $js$2};
var
 to_hex=
  function(d)
   {var result="unknown primitive:caml_create_string";
    var $js=0;
    var $js$1=15;
    for(var i=$js;i<=$js$1;i++)
     {var $js$2=d[i];
      var x=$js$2;
      var $js$3=char_hex(x>>>4);
      result[i*2]=$js$3,0;
      var $js$4=char_hex(x&15);
      result[i*2+1]=$js$4,0}
    var $js$5=Bytes["unsafe_to_string"];
    return $js$5(result)};
var
 from_hex=
  function(s)
   {var $js=s["length"]!=32;
    if($js)
     {var $js$1=[0,Invalid_argument,"Digest.from_hex"];throw $js$1}
    else
     {}
    var
     digit=
      function(c)
       {var $js$2=c>=65;
        if($js$2)
         {var $js$3=c>=97;
          if($js$3)
           {var $js$4=c>=103;if($js$4){var exit=6}else{return c-97+10}}
          else
           {var $js$5=c>=71;if($js$5){var exit=6}else{return c-65+10}}}
        else
         {var switcher=-48+c;
          var $js$6=9<switcher>>>0;
          if($js$6){var exit=6}else{return c-48}}
        switch(exit)
         {case 6:var $js$7=[0,Invalid_argument,"Digest.from_hex"];throw $js$7}};
    var
     $$byte=
      function(i)
       {var $js$2=s[i];
        var $js$3=digit($js$2);
        var $js$4=$js$3<<4;
        var $js$5=s[i+1];
        var $js$6=digit($js$5);
        return $js$4+$js$6};
    var result="unknown primitive:caml_create_string";
    var $js$2=0;
    var $js$3=15;
    for(var i=$js$2;i<=$js$3;i++)
     {var $js$4=Char["chr"];
      var $js$5=$$byte(2*i);
      var $js$6=$js$4($js$5);
      result[i]=$js$6,0}
    var $js$7=Bytes["unsafe_to_string"];
    return $js$7(result)};
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
