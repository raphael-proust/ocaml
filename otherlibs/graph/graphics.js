// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Callback=require("./callback.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 Graphic_failure=
  CamlPrimitive["caml_set_oo_id"]([248,"Graphics.Graphic_failure",0]);

Callback["register_exception"]
 ("Graphics.Graphic_failure",[0,Graphic_failure,""]);
var
 unix_open_graph=
  function(arg)
   {Sys["set_signal"]
     (CamlPrimitive["caml_gr_sigio_signal"](/* () */0),
      /* Signal_handle */[0,
       function(prim){return CamlPrimitive["caml_gr_sigio_handler"](prim)}]);
    return CamlPrimitive["caml_gr_open_graph"](arg)};

var
 unix_close_graph=
  function(param)
   {Sys["set_signal"]
     (CamlPrimitive["caml_gr_sigio_signal"](/* () */0),/* Signal_ignore */1);
    return CamlPrimitive["caml_gr_close_graph"](/* () */0)};

var match=Sys["os_type"];

var match$1;
var exit;

switch(match)
 {case "Cygwin":exit=70;break;
  case "MacOS":
   match$1=
   /* tuple */[0,
    function(prim){return CamlPrimitive["caml_gr_open_graph"](prim)},
    function(prim){return CamlPrimitive["caml_gr_close_graph"](prim)}];
   break;
  case "Unix":exit=70;break;
  case "Win32":
   match$1=
   /* tuple */[0,
    function(prim){return CamlPrimitive["caml_gr_open_graph"](prim)},
    function(prim){return CamlPrimitive["caml_gr_close_graph"](prim)}];
   break;
  default:exit=71;}

switch(exit)
 {case 71:
   match$1=
   Pervasives["invalid_arg"]
    (Pervasives["^"]("Graphics: unknown OS type: ",Sys["os_type"]));
   break;
  case 70:match$1=/* tuple */[0,unix_open_graph,unix_close_graph];break
  }

var close_graph=match$1[2];

var open_graph=match$1[1];

var
 auto_synchronize=
  function(param)
   {return param!==0
            ?(CamlPrimitive["caml_gr_display_mode"](/* true */1),
              CamlPrimitive["caml_gr_remember_mode"](/* true */1),
              CamlPrimitive["caml_gr_synchronize"](/* () */0))
            :(CamlPrimitive["caml_gr_display_mode"](/* false */0),
              CamlPrimitive["caml_gr_remember_mode"](/* true */1))};

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
   {for(var i=0;i<=/* -1 for tag */points["length"]-1-1;i++)
     {var match$2=points[i+1];
      
      CamlPrimitive["caml_gr_plot"](match$2[1],match$2[2])}
    return 0};

var
 current_point=
  function(param)
   {return /* tuple */[0,
            CamlPrimitive["caml_gr_current_x"](/* () */0),
            CamlPrimitive["caml_gr_current_y"](/* () */0)]};

var
 rlineto=
  function(x,y)
   {return CamlPrimitive["caml_gr_lineto"]
            (CamlPrimitive["caml_gr_current_x"](/* () */0)+x,
             CamlPrimitive["caml_gr_current_y"](/* () */0)+y)};

var
 rmoveto=
  function(x,y)
   {return CamlPrimitive["caml_gr_moveto"]
            (CamlPrimitive["caml_gr_current_x"](/* () */0)+x,
             CamlPrimitive["caml_gr_current_y"](/* () */0)+y)};

var
 draw_rect=
  function(x,y,w,h)
   {if(w<0||h<0)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "draw_rect"]}
    else
     {return CamlPrimitive["caml_gr_draw_rect"](x,y,w,h)}
    };

var
 dodraw=
  function(close_flag,points)
   {if(/* -1 for tag */points["length"]-1>0)
     {var match$2=current_point(/* () */0);
      
      CamlPrimitive["caml_gr_moveto"](points[1][1],points[1][2]);
      for(var i=1;i<=/* -1 for tag */points["length"]-1-1;i++)
       {var match$3=points[i+1];
        
        CamlPrimitive["caml_gr_lineto"](match$3[1],match$3[2])}
      
      if(close_flag)
       {CamlPrimitive["caml_gr_lineto"](points[1][1],points[1][2])}
      
      return CamlPrimitive["caml_gr_moveto"](match$2[1],match$2[2])}
    else
     {return 0}
    };

var
 match$2=
  /* tuple */[0,
   function(param){return dodraw(/* true */1,param)},
   function(param){return dodraw(/* false */0,param)}];

var draw_poly_line=match$2[2];

var draw_poly=match$2[1];

var
 draw_segments=
  function(segs)
   {var match$3=current_point(/* () */0);
    
    for(var i=0;i<=/* -1 for tag */segs["length"]-1-1;i++)
     {var match$4=segs[i+1];
      
      CamlPrimitive["caml_gr_moveto"](match$4[1],match$4[2]),
      CamlPrimitive["caml_gr_lineto"](match$4[3],match$4[4])}
    
    return CamlPrimitive["caml_gr_moveto"](match$3[1],match$3[2])};

var
 draw_arc=
  function(x,y,rx,ry,a1,a2)
   {if(rx<0||ry<0)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "draw_arc/ellipse/circle"]}
    else
     {return CamlPrimitive["caml_gr_draw_arc"](x,y,rx,ry,a1,a2)}
    };

var draw_ellipse=function(x,y,rx,ry){return draw_arc(x,y,rx,ry,0,360)};

var draw_circle=function(x,y,r){return draw_arc(x,y,r,r,0,360)};

var
 set_line_width=
  function(w)
   {if(w<0)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "set_line_width"]}
    else
     {return CamlPrimitive["caml_gr_set_line_width"](w)}
    };

var
 fill_rect=
  function(x,y,w,h)
   {if(w<0||h<0)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "fill_rect"]}
    else
     {return CamlPrimitive["caml_gr_fill_rect"](x,y,w,h)}
    };

var
 fill_arc=
  function(x,y,rx,ry,a1,a2)
   {if(rx<0||ry<0)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "fill_arc/ellipse/circle"]}
    else
     {return CamlPrimitive["caml_gr_fill_arc"](x,y,rx,ry,a1,a2)}
    };

var fill_ellipse=function(x,y,rx,ry){return fill_arc(x,y,rx,ry,0,360)};

var fill_circle=function(x,y,r){return fill_arc(x,y,r,r,0,360)};

var transp=-1;

var
 get_image=
  function(x,y,w,h)
   {var image=CamlPrimitive["caml_gr_create_image"](w,h);
    
    CamlPrimitive["caml_gr_blit_image"](image,x,y);
    return image};

var
 mouse_pos=
  function(param)
   {var
     e=
      CamlPrimitive["caml_gr_wait_event"]([/* :: */0,/* Poll */4,/* [] */0]);
    
    return /* tuple */[0,e[1],e[2]]};

var
 button_down=
  function(param)
   {var
     e=
      CamlPrimitive["caml_gr_wait_event"]([/* :: */0,/* Poll */4,/* [] */0]);
    
    return e[3]};

var
 read_key=
  function(param)
   {var
     e=
      CamlPrimitive["caml_gr_wait_event"]
       ([/* :: */0,/* Key_pressed */2,/* [] */0]);
    
    return e[5]};

var
 key_pressed=
  function(param)
   {var
     e=
      CamlPrimitive["caml_gr_wait_event"]([/* :: */0,/* Poll */4,/* [] */0]);
    
    return e[4]};

var
 loop_at_exit=
  function(events,handler)
   {var events$1=List["filter"](function(e){return e!==/* Poll */4},events);
    
    return Pervasives["at_exit"]
            (function(param)
              {try
                {while(/* true */1)
                  {var e=CamlPrimitive["caml_gr_wait_event"](events$1);
                   
                   handler(e)}
                 return 0}
               catch(e$1)
                {if(e$1===Pervasives["Exit"])
                  {return close_graph(/* () */0)}
                 else
                  {close_graph(/* () */0);throw e$1}
                 }
               })};

var
 add=
  function(param,param$1)
   {return /* tuple */[0,param[1]+param$1[1],param[2]+param$1[2]]};

var
 sub=
  function(param,param$1)
   {return /* tuple */[0,param[1]-param$1[1],param[2]-param$1[2]]};

var
 middle=
  function(param,param$1)
   {return /* tuple */[0,(param[1]+param$1[1])/2,(param[2]+param$1[2])/2]};

var
 area=
  function(param,param$1)
   {return Math["abs"](param[1]*param$1[2]-param$1[1]*param[2])};

var
 norm=
  function(param)
   {var y1=param[2];var x1=param[1];return Math["sqrt"](x1*x1+y1*y1)};

var
 test=
  function(a,b,c,d)
   {var v=sub(d,a);
    
    var s=norm(v);
    
    return area(v,sub(a,b))<=s&&area(v,sub(a,c))<=s};

var
 spline=
  function(a,b,c,d)
   {var
     spl=
      function(accu,a,b,c,d)
       {if(test(a,b,c,d))
         {return /* :: */[0,d,accu]}
        else
         {var a$prime=middle(a,b);
          
          var o=middle(b,c);
          
          var b$prime=middle(a$prime,o);
          
          var d$prime=middle(c,d);
          
          var c$prime=middle(o,d$prime);
          
          var i=middle(b$prime,c$prime);
          
          return spl(spl(accu,a,a$prime,b$prime,i),i,c$prime,d$prime,d)}
        };
    
    return spl(/* :: */[0,a,/* [] */0],a,b,c,d)};

var
 curveto=
  function(b,c,d)
   {var float_point=function(param){return /* tuple */[0,param[1],param[2]]};
    
    var round=function(f){return f+0.5};
    
    var
     int_point=
      function(param){return /* tuple */[0,round(param[1]),round(param[2])]};
    
    var
     points=
      spline
       (float_point(current_point(/* () */0)),
        float_point(b),
        float_point(c),
        float_point(d));
    
    draw_poly_line($$Array["of_list"](List["map"](int_point,points)));
    return CamlPrimitive["caml_gr_moveto"](d[1],d[2])};

module["exports"]=
{"Graphic_failure":Graphic_failure,
 "open_graph":open_graph,
 "close_graph":close_graph,
 "set_window_title":
 function(prim){return CamlPrimitive["caml_gr_set_window_title"](prim)},
 "resize_window":
 function(prim,prim$1)
  {return CamlPrimitive["caml_gr_resize_window"](prim,prim$1)},
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
 "set_text_size":
 function(prim){return CamlPrimitive["caml_gr_set_text_size"](prim)},
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

