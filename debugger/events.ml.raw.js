var
 get_pos=
  function(ev)
   {var match=ev[4];
    var $js="unknown primitive:isint";
    if($js)
     {var $js$1=match!=0;if($js$1){return ev[3][1]}else{return ev[3][1]}}
    else
     {return ev[3][2]}};
var current_event=[0,0];
var
 get_current_event=
  function(param)
   {var match=current_event[1];
    var $js=match;
    if($js){return match[1]}else{return "unknown primitive:raise"}};
var
 current_event_is_before=
  function(param)
   {var match=current_event[1];
    var $js=match;
    if($js)
     {var match$1=match[1][4];
      var $js$1="unknown primitive:isint";
      if($js$1)
       {var $js$2=match$1!=0;if($js$2){var exit=1}else{return 1}}
      else
       {var exit=1}}
    else
     {return "unknown primitive:raise"}
    switch(exit){case 1:return 0}};
module["exports"]=
{"get_pos":get_pos,
 "current_event":current_event,
 "get_current_event":get_current_event,
 "current_event_is_before":current_event_is_before};
