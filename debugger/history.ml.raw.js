var Pervasives=require("Pervasives");
var List=require("List");
var Checkpoints=require("Checkpoints");
var Primitives=require("Primitives");
var Debugger_config=require("Debugger_config");
var Int64ops=require("Int64ops");
var history=[0,0];
var empty_history=function(param){return history[1]=0,0};
var
 add_current_time=
  function(param)
   {var $js=Checkpoints["current_time"];
    var time=$js(0);
    var $js$1=history[1]=0;
    if($js$1)
     {return history[1]=[0,time,0],0}
    else
     {var $js$2=List["hd"];
      var $js$3=$js$2(history[1]);
      var $js$4=time!=$js$3;
      if($js$4)
       {var $js$5=Primitives["list_truncate"];
        var
         $js$6=
          $js$5(Debugger_config["history_size"][1],[0,time,history[1]]);
        return history[1]=$js$6,0}
      else
       {return 0}}};
var
 previous_time_1=
  function(param)
   {var match=history[1];
    var $js=match;
    if($js)
     {var hist=match[2];
      var $js$1=hist;
      if($js$1){history[1]=hist,0;return hist[1]}else{var exit=1}}
    else
     {var exit=1}
    switch(exit)
     {case 1:
       var $js$2=Pervasives["prerr_endline"];
       $js$2("No more information.");
       return "unknown primitive:raise"
      }};
var
 previous_time=
  function(n)
   {var $js=n=Int64ops["_1"];
    if($js)
     {return previous_time_1(0)}
    else
     {var $js$1=previous_time_1(0);
      0;
      var $js$2=Int64ops["pre64"];
      var $js$3=$js$2(n);
      return previous_time($js$3)}};
module["exports"]=
{"empty_history":empty_history,
 "add_current_time":add_current_time,
 "previous_time":previous_time};
