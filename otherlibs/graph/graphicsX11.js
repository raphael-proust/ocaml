// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Graphics=require("Graphics");
var Hashtbl=require("Hashtbl");


var subwindows=Hashtbl["create"](0,13);

var
 open_subwindow=
  function(x,y,width,height)
   {var wid="unknown primitive:caml_gr_open_subwindow";
    
    Hashtbl["add"](subwindows,wid,0);
    return wid;
    };

var
 close_subwindow=
  function(wid)
   {if(Hashtbl["mem"](subwindows,wid))
     {"unknown primitive:caml_gr_close_subwindow";
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
 function(prim){return "unknown primitive:caml_gr_window_id";},
 "open_subwindow":open_subwindow,
 "close_subwindow":close_subwindow};

