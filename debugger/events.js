var
 get_pos=
  function(ev)
   {var match=ev[4];
    
    if("unknown primitive:isint")
     {if(match!=0){return ev[3][1];}else{return ev[3][1];}}
    else
     {return ev[3][2];}
    };

var current_event=[0,0];

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
    
    if(match)
     {var match$1=match[1][4];
      
      if("unknown primitive:isint")
       {if(match$1!=0){var exit=1;}else{return 1;}}
      else
       {var exit=1;}
      }
    else
     {throw Not_found;}
    
    switch(exit){case 1:return 0;}
    };


module["exports"]=
{"get_pos":get_pos,
 "current_event":current_event,
 "get_current_event":get_current_event,
 "current_event_is_before":current_event_is_before};

