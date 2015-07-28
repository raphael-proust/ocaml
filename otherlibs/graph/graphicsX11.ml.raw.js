var Pervasives=require("Pervasives");
var Graphics=require("Graphics");
var Hashtbl=require("Hashtbl");
var $js=Hashtbl["create"];
var subwindows=$js(0,13);
var
 open_subwindow=
  function(x,y,width,height)
   {var wid="unknown primitive:caml_gr_open_subwindow";
    var $js$1=Hashtbl["add"];
    $js$1(subwindows,wid,0);
    return wid};
var
 close_subwindow=
  function(wid)
   {var $js$1=Hashtbl["mem"];
    var $js$2=$js$1(subwindows,wid);
    if($js$2)
     {"unknown primitive:caml_gr_close_subwindow";
      var $js$3=Hashtbl["remove"];
      return $js$3(subwindows,wid)}
    else
     {var $js$4=Pervasives["^"];
      var $js$5=$js$4("close_subwindow: no such subwindow: ",wid);
      var $js$6=[0,Graphics["Graphic_failure"],$js$5];
      throw $js$6}};
module["exports"]=
{"unknown block:(function prim/1059 (caml_gr_window_id prim/1059))":
 unknown block:(function prim/1059 (caml_gr_window_id prim/1059)),
 "open_subwindow":open_subwindow,
 "close_subwindow":close_subwindow};
