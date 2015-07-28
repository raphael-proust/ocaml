var Sys=require("Sys");
var interrupted=[0,0];
var is_protected=[0,0];
var
 break=
  function(signum)
   {var $js=is_protected[1];
    if($js){return interrupted[1]=1,0}else{return "unknown primitive:raise"}};
var match=Sys["os_type"];
var $js=match;
if($js=="Win32")
 {}
else
 {var $js$1=Sys["set_signal"];
  $js$1(Sys["sigint"],[0,break]);
  var $js$2=Sys["set_signal"];
  $js$2(Sys["sigpipe"],[0,function(param){return "unknown primitive:raise"}])}
var
 protect=
  function(f)
   {var $js$3=is_protected[1];
    if($js$3)
     {return f(0)}
    else
     {is_protected[1]=1,0;
      var $js$4=!interrupted[1];
      if($js$4){f(0)}else{}
      is_protected[1]=0,0;
      var $js$5=interrupted[1];
      if($js$5)
       {interrupted[1]=0,0;return "unknown primitive:raise"}
      else
       {return 0}}};
var
 unprotect=
  function(f)
   {var $js$3=!is_protected[1];
    if($js$3)
     {return f(0)}
    else
     {is_protected[1]=0,0;
      var $js$4=interrupted[1];
      if($js$4){interrupted[1]=0,0;"unknown primitive:raise"}else{}
      f(0);
      return is_protected[1]=1,0}};
module["exports"]={"protect":protect,"unprotect":unprotect};
