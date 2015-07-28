var List=require("List");
var Pervasives=require("Pervasives");
var Callback=require("Callback");
var Array=require("Array");
var Sys=require("Sys");
var Graphic_failure="unknown primitive:caml_set_oo_id";
var $js=Callback["register_exception"];
$js("Graphics.Graphic_failure",[0,Graphic_failure,""]);
var
 unix_open_graph=
  function(arg)
   {var $js$1=Sys["set_signal"];
    var $js$2="unknown primitive:caml_gr_sigio_signal";
    $js$1
     ($js$2,
      [0,function(prim){return "unknown primitive:caml_gr_sigio_handler"}]);
    return "unknown primitive:caml_gr_open_graph"};
var
 unix_close_graph=
  function(param)
   {var $js$1=Sys["set_signal"];
    var $js$2="unknown primitive:caml_gr_sigio_signal";
    $js$1($js$2,1);
    return "unknown primitive:caml_gr_close_graph"};
var match=Sys["os_type"];
var $js$1=match;
if($js$1=="Cygwin")
 {var exit=70}
else
 if($js$1=="MacOS")
  {var
    match$1=
     [0,
      function(prim){return "unknown primitive:caml_gr_open_graph"},
      function(prim){return "unknown primitive:caml_gr_close_graph"}]}
 else
  if($js$1=="Unix")
   {var exit=70}
  else
   if($js$1=="Win32")
    {var
      match$1=
       [0,
        function(prim){return "unknown primitive:caml_gr_open_graph"},
        function(prim){return "unknown primitive:caml_gr_close_graph"}]}
   else
    {var exit=71}
switch(exit)
 {case 71:
   var $js$2=Pervasives["invalid_arg"];
   var $js$3=Pervasives["^"];
   var $js$4=$js$3("Graphics: unknown OS type: ",Sys["os_type"]);
   var match$1=$js$2($js$4);
  case 70:var match$1=[0,unix_open_graph,unix_close_graph]
  }
var close_graph=match$1[2];
var open_graph=match$1[1];
var
 auto_synchronize=
  function(param)
   {var $js$5=param!=0;
    if($js$5)
     {"unknown primitive:caml_gr_display_mode";
      "unknown primitive:caml_gr_remember_mode";
      return "unknown primitive:caml_gr_synchronize"}
    else
     {"unknown primitive:caml_gr_display_mode";
      return "unknown primitive:caml_gr_remember_mode"}};
var rgb=function(r,g,b){return (r<<16)+(g<<8)+b};
var black=0;
var white=16777215;
var red=16711680;
var green=65280;
var blue=255;
var yellow=16776960;
var cyan=65535;
var magenta=16711935;
var background=white;
var foreground=black;
var
 plots=
  function(points)
   {var $js$5=0;
    var $js$6=points["length"]-1;
    for(var i=$js$5;i<=$js$6;i++)
     {var match$2=points[i];
      var y=match$2[2];
      var x=match$2[1];
      "unknown primitive:caml_gr_plot"}};
var
 current_point=
  function(param)
   {var $js$5="unknown primitive:caml_gr_current_x";
    var $js$6="unknown primitive:caml_gr_current_y";
    return [0,$js$5,$js$6]};
var
 rlineto=
  function(x,y)
   {var $js$5="unknown primitive:caml_gr_current_x";
    var $js$6=$js$5+x;
    var $js$7="unknown primitive:caml_gr_current_y";
    var $js$8=$js$7+y;
    return "unknown primitive:caml_gr_lineto"};
var
 rmoveto=
  function(x,y)
   {var $js$5="unknown primitive:caml_gr_current_x";
    var $js$6=$js$5+x;
    var $js$7="unknown primitive:caml_gr_current_y";
    var $js$8=$js$7+y;
    return "unknown primitive:caml_gr_moveto"};
var
 draw_rect=
  function(x,y,w,h)
   {var $js$5=w<0||h<0;
    if($js$5)
     {var $js$6=[0,Invalid_argument,"draw_rect"];throw $js$6}
    else
     {return "unknown primitive:caml_gr_draw_rect"}};
var
 dodraw=
  function(close_flag,points)
   {var $js$5=points["length"]>0;
    if($js$5)
     {var match$2=current_point(0);
      var savey=match$2[2];
      var savex=match$2[1];
      var $js$6=points[0];
      var $js$7=$js$6[1];
      var $js$8=points[0];
      var $js$9=$js$8[2];
      "unknown primitive:caml_gr_moveto";
      var $js$10=1;
      var $js$11=points["length"]-1;
      for(var i=$js$10;i<=$js$11;i++)
       {var match$3=points[i];
        var y=match$3[2];
        var x=match$3[1];
        "unknown primitive:caml_gr_lineto"}
      var $js$12=close_flag;
      if($js$12)
       {var $js$13=points[0];
        var $js$14=$js$13[1];
        var $js$15=points[0];
        var $js$16=$js$15[2];
        "unknown primitive:caml_gr_lineto"}
      else
       {}
      return "unknown primitive:caml_gr_moveto"}
    else
     {return 0}};
var $js$5=dodraw(1);
var $js$6=dodraw(0);
var match$2=[0,$js$5,$js$6];
var draw_poly_line=match$2[2];
var draw_poly=match$2[1];
var
 draw_segments=
  function(segs)
   {var match$3=current_point(0);
    var savey=match$3[2];
    var savex=match$3[1];
    var $js$7=0;
    var $js$8=segs["length"]-1;
    for(var i=$js$7;i<=$js$8;i++)
     {var match$4=segs[i];
      var y2=match$4[4];
      var x2=match$4[3];
      var y1=match$4[2];
      var x1=match$4[1];
      "unknown primitive:caml_gr_moveto";
      "unknown primitive:caml_gr_lineto"}
    return "unknown primitive:caml_gr_moveto"};
var
 draw_arc=
  function(x,y,rx,ry,a1,a2)
   {var $js$7=rx<0||ry<0;
    if($js$7)
     {var $js$8=[0,Invalid_argument,"draw_arc/ellipse/circle"];throw $js$8}
    else
     {return "unknown primitive:caml_gr_draw_arc"}};
var draw_ellipse=function(x,y,rx,ry){return draw_arc(x,y,rx,ry,0,360)};
var draw_circle=function(x,y,r){return draw_arc(x,y,r,r,0,360)};
var
 set_line_width=
  function(w)
   {var $js$7=w<0;
    if($js$7)
     {var $js$8=[0,Invalid_argument,"set_line_width"];throw $js$8}
    else
     {return "unknown primitive:caml_gr_set_line_width"}};
var
 fill_rect=
  function(x,y,w,h)
   {var $js$7=w<0||h<0;
    if($js$7)
     {var $js$8=[0,Invalid_argument,"fill_rect"];throw $js$8}
    else
     {return "unknown primitive:caml_gr_fill_rect"}};
var
 fill_arc=
  function(x,y,rx,ry,a1,a2)
   {var $js$7=rx<0||ry<0;
    if($js$7)
     {var $js$8=[0,Invalid_argument,"fill_arc/ellipse/circle"];throw $js$8}
    else
     {return "unknown primitive:caml_gr_fill_arc"}};
var fill_ellipse=function(x,y,rx,ry){return fill_arc(x,y,rx,ry,0,360)};
var fill_circle=function(x,y,r){return fill_arc(x,y,r,r,0,360)};
var transp=-1;
var
 get_image=
  function(x,y,w,h)
   {var image="unknown primitive:caml_gr_create_image";
    "unknown primitive:caml_gr_blit_image";
    return image};
var
 mouse_pos=
  function(param)
   {var e="unknown primitive:caml_gr_wait_event";return [0,e[1],e[2]]};
var
 button_down=
  function(param){var e="unknown primitive:caml_gr_wait_event";return e[3]};
var
 read_key=
  function(param){var e="unknown primitive:caml_gr_wait_event";return e[5]};
var
 key_pressed=
  function(param){var e="unknown primitive:caml_gr_wait_event";return e[4]};
var
 loop_at_exit=
  function(events,handler)
   {var $js$7=List["filter"];
    var events$1=$js$7(function(e){return e!=4},events);
    var $js$8=Pervasives["at_exit"];
    return $js$8
            (function(param)
              {try
                {for(;;)
                  {var $js$9=1;
                   if($js$9)
                    {var e="unknown primitive:caml_gr_wait_event";handler(e)}
                   else
                    break}
                 return 0}
               catch(e$1)
                {var $js$10=e$1=Pervasives["Exit"];
                 if($js$10)
                  {return close_graph(0)}
                 else
                  {close_graph(0);var $js$11=e$1;throw $js$11}}})};
var
 add=
  function(param,param$1)
   {var y2=param$1[2];
    var x2=param$1[1];
    var y1=param[2];
    var x1=param[1];
    return [0,x1+x2,y1+y2]};
var
 sub=
  function(param,param$1)
   {var y2=param$1[2];
    var x2=param$1[1];
    var y1=param[2];
    var x1=param[1];
    return [0,x1-x2,y1-y2]};
var
 middle=
  function(param,param$1)
   {var y2=param$1[2];
    var x2=param$1[1];
    var y1=param[2];
    var x1=param[1];
    return [0,(x1+x2)/2,(y1+y2)/2]};
var
 area=
  function(param,param$1)
   {var y2=param$1[2];
    var x2=param$1[1];
    var y1=param[2];
    var x1=param[1];
    return Math["abs"](x1*y2-x2*y1)};
var
 norm=
  function(param)
   {var y1=param[2];
    var x1=param[1];
    return "unknown primitive:caml_sqrt_float"};
var
 test=
  function(a,b,c,d)
   {var v=sub(d,a);
    var s=norm(v);
    var $js$7=sub(a,b);
    var $js$8=area(v,$js$7);
    var $js$9=$js$8<=s;
    var $js$10=sub(a,c);
    var $js$11=area(v,$js$10);
    var $js$12=$js$11<=s;
    return $js$9&&$js$12};
var
 spline=
  function(a,b,c,d)
   {var
     spl=
      function(accu,a$1,b$1,c$1,d$1)
       {var $js$7=test(a$1,b$1,c$1,d$1);
        if($js$7)
         {return [0,d$1,accu]}
        else
         {var a'=middle(a$1,b$1);
          var o=middle(b$1,c$1);
          var b'=middle(a',o);
          var d'=middle(c$1,d$1);
          var c'=middle(o,d');
          var i=middle(b',c');
          var $js$8=spl(accu,a$1,a',b',i);
          return spl($js$8,i,c',d',d$1)}};
    return spl([0,a,0],a,b,c,d)};
var
 curveto=
  function(b,c,d)
   {var y=d[2];
    var x=d[1];
    var
     float_point=
      function(param){var y$1=param[2];var x$1=param[1];return [0,x$1,y$1]};
    var round=function(f){return f+0.5};
    var
     int_point=
      function(param)
       {var y$1=param[2];
        var x$1=param[1];
        var $js$7=round(x$1);
        var $js$8=round(y$1);
        return [0,$js$7,$js$8]};
    var $js$7=current_point(0);
    var $js$8=float_point($js$7);
    var $js$9=float_point(b);
    var $js$10=float_point(c);
    var $js$11=float_point(d);
    var points=spline($js$8,$js$9,$js$10,$js$11);
    var $js$12=Array["of_list"];
    var $js$13=List["map"];
    var $js$14=$js$13(int_point,points);
    var $js$15=$js$12($js$14);
    draw_poly_line($js$15);
    return "unknown primitive:caml_gr_moveto"};
module["exports"]=
{"Graphic_failure":Graphic_failure,
 "open_graph":open_graph,
 "close_graph":close_graph,
 "unknown block:(function prim/1239 (caml_gr_set_window_title prim/1239))":
 unknown block:(function prim/1239 (caml_gr_set_window_title prim/1239)),
 "unknown block:(function prim/1241 prim/1240 (caml_gr_resize_window prim/1241 prim/1240))":
 unknown block:(function prim/1241 prim/1240 (caml_gr_resize_window prim/1241 prim/1240)),
 "rgb":rgb,
 "background":background,
 "foreground":foreground,
 "black":black,
 "white":white,
 "red":red,
 "green":green,
 "blue":blue,
 "yellow":yellow,
 "cyan":cyan,
 "magenta":magenta,
 "plots":plots,
 "rmoveto":rmoveto,
 "current_point":current_point,
 "rlineto":rlineto,
 "curveto":curveto,
 "draw_rect":draw_rect,
 "draw_poly_line":draw_poly_line,
 "draw_poly":draw_poly,
 "draw_segments":draw_segments,
 "draw_arc":draw_arc,
 "draw_ellipse":draw_ellipse,
 "draw_circle":draw_circle,
 "set_line_width":set_line_width,
 "unknown block:(function prim/1242 (caml_gr_set_text_size prim/1242))":
 unknown block:(function prim/1242 (caml_gr_set_text_size prim/1242)),
 "fill_rect":fill_rect,
 "fill_arc":fill_arc,
 "fill_ellipse":fill_ellipse,
 "fill_circle":fill_circle,
 "transp":transp,
 "get_image":get_image,
 "loop_at_exit":loop_at_exit,
 "mouse_pos":mouse_pos,
 "button_down":button_down,
 "read_key":read_key,
 "key_pressed":key_pressed,
 "auto_synchronize":auto_synchronize};
