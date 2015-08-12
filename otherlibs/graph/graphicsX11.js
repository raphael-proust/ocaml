// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Graphics=require("Graphics");
var Hashtbl=require("Hashtbl");


var subwindows=Hashtbl["create"](/* None */0,13);

var
 open_subwindow=
  function(x,y,width,height)
   {var wid=Primtivie["caml_gr_open_subwindow"](x,y,width,height);
    
    Hashtbl["add"](subwindows,wid,/* () */0);
    return wid;
    };

var
 close_subwindow=
  function(wid)
   {if(Hashtbl["mem"](subwindows,wid))
     {Primtivie["caml_gr_close_subwindow"](wid);
      return Hashtbl["remove"](subwindows,wid);
      }
    else
     {throw [0,
             Graphics["Graphic_failure"],
             Pervasives["^"]("close_subwindow: no such subwindow: ",wid)];
      }
    };

module["exports"]=
{"caml_gr_window_id":
 function(prim){return Primtivie["caml_gr_window_id"](prim);},
 "open_subwindow":open_subwindow,
 "close_subwindow":close_subwindow};

