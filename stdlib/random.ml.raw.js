var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var Digest=require("Digest");
var Int32=require("Int32");
var Int64=require("Int64");
var Array=require("Array");
var
 new_state=
  function(param){var $js="unknown primitive:caml_make_vect";return [0,$js,0]};
var
 assign=
  function(st1,st2)
   {var $js=Array["blit"];$js(st2[1],0,st1[1],0,55);return st1[2]=st2[2],0};
var
 full_init=
  function(s,seed)
   {var
     combine=
      function(accu,x)
       {var $js=Digest["string"];
        var $js$1=Pervasives["^"];
        var $js$2=Pervasives["string_of_int"];
        var $js$3=$js$2(x);
        var $js$4=$js$1(accu,$js$3);
        return $js($js$4)};
    var
     extract=
      function(d)
       {var $js=d[0];
        var $js$1=$js;
        var $js$2=d[1];
        var $js$3=$js$2;
        var $js$4=$js$3<<8;
        var $js$5=$js$1+$js$4;
        var $js$6=d[2];
        var $js$7=$js$6;
        var $js$8=$js$7<<16;
        var $js$9=$js$5+$js$8;
        var $js$10=d[3];
        var $js$11=$js$10;
        var $js$12=$js$11<<24;
        return $js$9+$js$12};
    var $js=seed["length"]=0;
    if($js){var seed$1=[0]}else{var seed$1=seed}
    var l=seed$1["length"];
    var $js$1=0;
    var $js$2=54;
    for(var i=$js$1;i<=$js$2;i++){s[1][i]=i,0}
    var accu=[0,"x"];
    var $js$3=0;
    var $js$4=Pervasives["max"];
    var $js$5=$js$4(55,l);
    var $js$6=54+$js$5;
    for(var i$1=$js$3;i$1<=$js$6;i$1++)
     {var j=i$1%55;
      var k=i$1%l;
      var $js$7=seed$1[k];
      var $js$8=combine(accu[1],$js$7);
      accu[1]=$js$8,0;
      var $js$9=s[1][j];
      var $js$10=extract(accu[1]);
      var $js$11=$js$9^$js$10;
      var $js$12=$js$11&1073741823;
      s[1][j]=$js$12,0}
    return s[2]=0,0};
var
 make=
  function(seed){var result=new_state(0);full_init(result,seed);return result};
var
 make_self_init=
  function(param)
   {var $js="unknown primitive:caml_sys_random_seed";return make($js)};
var copy=function(s){var result=new_state(0);assign(result,s);return result};
var
 bits=
  function(s)
   {s[2]=(s[2]+1)%55,0;
    var curval=s[1][s[2]];
    var $js=s[1][(s[2]+24)%55];
    var newval=$js+(curval^curval>>>25&31);
    var newval30=newval&1073741823;
    s[1][s[2]]=newval30,0;
    return newval30};
var
 intaux=
  function(s,n)
   {var r=bits(s);
    var v=r%n;
    var $js=r-v>1073741823-n+1;
    if($js){return intaux(s,n)}else{return v}};
var
 int=
  function(s,bound)
   {var $js=bound>1073741823||bound<=0;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Random.int")}
    else
     {return intaux(s,bound)}};
var
 int32aux=
  function(s,n)
   {var $js=bits(s);
    var b1=$js;
    var $js$1=bits(s);
    var $js$2=$js$1&1;
    var $js$3=$js$2;
    var b2=$js$3<<30;
    var r=b1|b2;
    var v=r%n;
    var $js$4=r-v>Int32["max_int"]-n+1;
    if($js$4){return int32aux(s,n)}else{return v}};
var
 int32=
  function(s,bound)
   {var $js=bound<=0;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Random.int32")}
    else
     {return int32aux(s,bound)}};
var
 int64aux=
  function(s,n)
   {var $js=bits(s);
    var b1=$js;
    var $js$1=bits(s);
    var $js$2=$js$1;
    var b2=$js$2<<30;
    var $js$3=bits(s);
    var $js$4=$js$3&7;
    var $js$5=$js$4;
    var b3=$js$5<<60;
    var r=b1|b2|b3;
    var v=r%n;
    var $js$6=r-v>Int64["max_int"]-n+1;
    if($js$6){return int64aux(s,n)}else{return v}};
var
 int64=
  function(s,bound)
   {var $js=bound<=0;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Random.int64")}
    else
     {return int64aux(s,bound)}};
var $js=Nativeint["size"]=32;
if($js)
 {var
   nativeint=
    function(s,bound)
     {var $js$1=int32(s,"unknown primitive:int32_of_nativeint");
      return "unknown primitive:nativeint_of_int32"}}
else
 {var
   nativeint=
    function(s,bound)
     {var $js$1=int64(s,"unknown primitive:int64_of_nativeint");
      return "unknown primitive:nativeint_of_int64"}}
var
 rawfloat=
  function(s)
   {var scale=1073741824;
    var $js$1=bits(s);
    var r1=$js$1;
    var $js$2=bits(s);
    var r2=$js$2;
    return (r1/scale+r2)/scale};
var float=function(s,bound){var $js$1=rawfloat(s);return $js$1*bound};
var bool=function(s){var $js$1=bits(s);var $js$2=$js$1&1;return $js$2=0};
var
 State=
  [0,
   new_state,
   assign,
   full_init,
   make,
   make_self_init,
   copy,
   bits,
   intaux,
   int,
   int32aux,
   int32,
   int64aux,
   int64,
   nativeint,
   rawfloat,
   float,
   bool];
var default=[0,"unknown primitive:caml_obj_dup",0];
var bits$1=function(param){var $js$1=State[7];return $js$1(default)};
var int$1=function(bound){var $js$1=State[9];return $js$1(default,bound)};
var int32$1=function(bound){var $js$1=State[11];return $js$1(default,bound)};
var
 nativeint$1=
  function(bound){var $js$1=State[14];return $js$1(default,bound)};
var int64$1=function(bound){var $js$1=State[13];return $js$1(default,bound)};
var float$1=function(scale){var $js$1=State[16];return $js$1(default,scale)};
var bool$1=function(param){var $js$1=State[17];return $js$1(default)};
var full_init$1=function(seed){var $js$1=State[3];return $js$1(default,seed)};
var init=function(seed){var $js$1=State[3];return $js$1(default,[seed])};
var
 self_init=
  function(param)
   {var $js$1="unknown primitive:caml_sys_random_seed";
    return full_init$1($js$1)};
var get_state=function(param){var $js$1=State[6];return $js$1(default)};
var set_state=function(s){var $js$1=State[2];return $js$1(default,s)};
module["exports"]=
{"init":init,
 "full_init":full_init$1,
 "self_init":self_init,
 "bits":bits$1,
 "int":int$1,
 "int32":int32$1,
 "nativeint":nativeint$1,
 "int64":int64$1,
 "float":float$1,
 "bool":bool$1,
 "unknown block:(makeblock 0 (field 3 State/1087) (field 4 State/1087) (field 5 State/1087)\n  (field 6 State/1087) (field 8 State/1087) (field 10 State/1087)\n  (field 13 State/1087) (field 12 State/1087) (field 15 State/1087)\n  (field 16 State/1087))":
 unknown block:(makeblock 0 (field 3 State/1087) (field 4 State/1087) (field 5 State/1087)
  (field 6 State/1087) (field 8 State/1087) (field 10 State/1087)
  (field 13 State/1087) (field 12 State/1087) (field 15 State/1087)
  (field 16 State/1087)),
 "get_state":get_state,
 "set_state":set_state};
