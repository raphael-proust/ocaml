var Display=require("Display");
var Pervasives=require("Pervasives");
var Queue=require("Queue");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var mode=function(param){return 1};
var Debug=[0,mode];
var mode$1=Debug[1];
var level=[0,1];
var classic_display=[0,0];
var internal_display=[0,0];
var
 failsafe_display=
  [246,
   function(param)
    {var $js=Display["create"];
     return $js(0,[0,920812018],0,0,0,[0,level[1]],0)}];
var
 !-=
  function(r)
   {var match=r[1];
    var $js=match;
    if($js)
     {return match[1]}
    else
     {var $js$1=My_std["!*"];return $js$1(failsafe_display)}};
var
 init=
  function(log_file)
   {var $js=My_std["!*"];
    var $js$1=$js(My_unix["is_degraded"]);
    var $js$2=My_unix["stdout_isatty"];
    var $js$3=$js$2(0);
    var $js$4=!$js$3;
    var $js$5=level[1]<=0||$js$4;
    var $js$6=$js$1||$js$5;
    var $js$7=classic_display[1]||$js$6;
    if($js$7){var mode$2=920812018}else{var mode$2=-369468030}
    var $js$8=Display["create"];
    var $js$9=$js$8(0,[0,mode$2],0,0,log_file,[0,level[1]],0);
    var $js$10=[0,$js$9];
    return internal_display[1]=$js$10,0};
var
 raw_dprintf=
  function(log_level)
   {var $js=Display["dprintf"];
    var $js$1=!-(internal_display);
    return $js([0,log_level],$js$1)};
var
 dprintf=
  function(log_level,fmt)
   {var $js=Pervasives["^^"];
    var $js$1=Pervasives["^^"];
    var $js$2=$js$1(fmt,[0,[17,0,[17,4,0]],"@]@."]);
    var $js$3=$js([0,[18,[1,[0,[11,"<2>",0],"<2>"]],0],"@[<2>"],$js$2);
    return raw_dprintf(log_level,$js$3)};
var eprintf=function(fmt){return dprintf(-1,fmt)};
var
 update=
  function(param)
   {var $js=Display["update"];
    var $js$1=!-(internal_display);
    return $js($js$1)};
var
 event=
  function(pretend,x)
   {var $js=Display["event"];
    var $js$1=!-(internal_display);
    return $js($js$1,pretend,x)};
var
 display=
  function(x)
   {var $js=Display["display"];
    var $js$1=!-(internal_display);
    return $js($js$1,x)};
var $js=Queue["create"];
var do_at_end=$js(0);
var $js$1=Hashtbl["create"];
var already_asked=$js$1(0,10);
var
 at_end_always=
  function(name,thunk)
   {var $js$2=Hashtbl["mem"];
    var $js$3=$js$2(already_asked,name);
    var $js$4=!$js$3;
    if($js$4)
     {var $js$5=Hashtbl["add"];
      $js$5(already_asked,name,0);
      var $js$6=Queue["add"];
      return $js$6(thunk,do_at_end)}
    else
     {return 0}};
var
 at_end=
  function(name,thunk)
   {return at_end_always
            (name,
             function(param)
              {var $js$2=param>=94326179;
               if($js$2){return thunk(106380200)}else{return 0}})};
var
 at_failure=
  function(name,thunk)
   {return at_end_always
            (name,
             function(param)
              {var $js$2=param>=106380200;
               if($js$2){return thunk(106380200)}else{return 0}})};
var
 finish=
  function(how,param)
   {for(;;)
     {var $js$2=Queue["is_empty"];
      var $js$3=$js$2(do_at_end);
      var $js$4=!$js$3;
      if($js$4)
       {var $js$5=Queue["copy"];
        var actions=$js$5(do_at_end);
        var $js$6=Queue["clear"];
        $js$6(do_at_end);
        var $js$7=Queue["iter"];
        $js$7
         (function(thunk)
           {var $js$8=how;
            if($js$8){var $js$9=how[1]}else{var $js$9=-249890668}
            return thunk($js$9)},
          actions)}
      else
       break}
    var match=internal_display[1];
    var $js$8=match;
    if($js$8)
     {var $js$9=Display["finish"];return $js$9(how,match[1])}
    else
     {return 0}};
module["exports"]=
{"level":level,
 "dprintf":dprintf,
 "eprintf":eprintf,
 "raw_dprintf":raw_dprintf,
 "classic_display":classic_display,
 "event":event,
 "init":init,
 "finish":finish,
 "display":display,
 "update":update,
 "mode":mode$1,
 "at_end":at_end,
 "at_failure":at_failure};
