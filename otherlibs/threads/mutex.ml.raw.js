var List=require("List");
var Thread=require("Thread");
var create=function(param){return [0,0,0]};
var
 lock=
  function(m)
   {var $js=m[1];
    if($js)
     {Thread["critical_section"][1]=1,0;
      var $js$1=Thread["self"];
      var $js$2=$js$1(0);
      var $js$3=[0,$js$2,m[2]];
      m[2]=$js$3,0;
      var $js$4=Thread["sleep"];
      $js$4(0);
      return lock(m)}
    else
     {return m[1]=1,0}};
var
 try_lock=
  function(m){var $js=m[1];if($js){return 0}else{m[1]=1,0;return 1}};
var
 unlock=
  function(m)
   {var w=m[2];
    m[2]=0,0;
    m[1]=0,0;
    var $js=List["iter"];
    return $js(Thread["wakeup"],w)};
module["exports"]=
{"create":create,"lock":lock,"try_lock":try_lock,"unlock":unlock};
