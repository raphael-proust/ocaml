var List=require("List");
var Thread=require("Thread");
var Mutex=require("Mutex");
var create=function(param){return [0,0]};
var
 wait=
  function(cond,mut)
   {Thread["critical_section"][1]=1,0;
    var $js=Mutex["unlock"];
    $js(mut);
    var $js$1=Thread["self"];
    var $js$2=$js$1(0);
    var $js$3=[0,$js$2,cond[1]];
    cond[1]=$js$3,0;
    var $js$4=Thread["sleep"];
    $js$4(0);
    var $js$5=Mutex["lock"];
    return $js$5(mut)};
var
 signal=
  function(cond)
   {var match=cond[1];
    var $js=match;
    if($js)
     {var rem=match[2];
      var th=match[1];
      cond[1]=rem,0;
      var $js$1=Thread["wakeup"];
      return $js$1(th)}
    else
     {return 0}};
var
 broadcast=
  function(cond)
   {var w=cond[1];
    cond[1]=0,0;
    var $js=List["iter"];
    return $js(Thread["wakeup"],w)};
module["exports"]=
{"create":create,"wait":wait,"signal":signal,"broadcast":broadcast};
