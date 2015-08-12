// Generated CODE, PLEASE EDIT WITH CARE 



var
 get_pos=
  function(ev)
   {var match=ev[4];
    
    if(typeof match==="number")
     {if(match!=0){return ev[3][1];}else{return ev[3][1];}}
    else
     {return ev[3][2];}
    };

var current_event=[0,/* None */0];

var
 get_current_event=
  function(param)
   {var match=current_event[1];
    
    if(match){return match[1];}else{throw Not_found;}
    };

var
 current_event_is_before=
  function(param)
   {var match=current_event[1];
    
    var exit;
    
    if(match)
     {var match$1=match[1][4];
      
      if(typeof match$1==="number")
       {if(match$1!=0){exit=1;}else{return /* true */1;}}
      else
       {exit=1;}
      }
    else
     {throw Not_found;}
    
    switch(exit){case 1:return /* false */0;}
    };

module["exports"]=
{"get_pos":get_pos,
 "current_event":current_event,
 "get_current_event":get_current_event,
 "current_event_is_before":current_event_is_before};

