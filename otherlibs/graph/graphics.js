// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");
var Callback=require("Callback");
var $$Array=require("Array");
var Sys=require("Sys");


var Graphic_failure="unknown primitive:caml_set_oo_id";

Callback["register_exception"]
 ("Graphics.Graphic_failure",[0,Graphic_failure,""]);
var
 unix_open_graph=
  function(arg)
   {Sys["set_signal"]
     ("unknown primitive:caml_gr_sigio_signal",
      [/* Signal_handle */0,
       function(prim){return "unknown primitive:caml_gr_sigio_handler";}]);
    return "unknown primitive:caml_gr_open_graph";
    };

var
 unix_close_graph=
  function(param)
   {Sys["set_signal"]("unknown primitive:caml_gr_sigio_signal",1);
    return "unknown primitive:caml_gr_close_graph";
    };

var match=Sys["os_type"];

var exit;

switch(match)
 {case "Cygwin":exit=70;
  case "MacOS":
   var
    match$1=
     [/* tuple */0,
      function(prim){return "unknown primitive:caml_gr_open_graph";},
      function(prim){return "unknown primitive:caml_gr_close_graph";}];
   
  case "Unix":exit=70;
  case "Win32":
   var
    match$1=
     [/* tuple */0,
      function(prim){return "unknown primitive:caml_gr_open_graph";},
      function(prim){return "unknown primitive:caml_gr_close_graph";}];
   
  default:exit=71;}

switch(exit)
 {case 71:
   var
    match$1=
     Pervasives["invalid_arg"]
      (Pervasives["^"]("Graphics: unknown OS type: ",Sys["os_type"]));
   
  case 70:var match$1=[/* tuple */0,unix_open_graph,unix_close_graph];
  }

var close_graph=match$1[2];

var open_graph=match$1[1];

var
 auto_synchronize=
  function(param)
   {if(param!=0)
     {"unknown primitive:caml_gr_display_mode";
      "unknown primitive:caml_gr_remember_mode";
      return "unknown primitive:caml_gr_synchronize";
      }
    else
     {"unknown primitive:caml_gr_display_mode";
      return "unknown primitive:caml_gr_remember_mode";
      }
    };

var rgb=function(r,g,b){return (r<<16)+(g<<8)+b;};

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
   {for(var i=0;i<=points["length"]-1;i++)
     {var match$2=points[i];
      
      var y=match$2[2];
      
      var x=match$2[1];
      
      "unknown primitive:caml_gr_plot"}
    };

var
 current_point=
  function(param)
   {return [/* tuple */0,
            "unknown primitive:caml_gr_current_x",
            "unknown primitive:caml_gr_current_y"];
    };

var rlineto=function(x,y){return "unknown primitive:caml_gr_lineto";};

var rmoveto=function(x,y){return "unknown primitive:caml_gr_moveto";};

var
 draw_rect=
  function(x,y,w,h)
   {if(w<0||h<0)
     {throw [0,Invalid_argument,"draw_rect"];}
    else
     {return "unknown primitive:caml_gr_draw_rect";}
    };

var
 dodraw=
  function(close_flag,points)
   {if(points["length"]>0)
     {var match$2=current_point(0);
      
      var savey=match$2[2];
      
      var savex=match$2[1];
      
      "unknown primitive:caml_gr_moveto";
      for(var i=1;i<=points["length"]-1;i++)
       {var match$3=points[i];
        
        var y=match$3[2];
        
        var x=match$3[1];
        
        "unknown primitive:caml_gr_lineto"}
      
      if(close_flag){"unknown primitive:caml_gr_lineto"}else{}
      
      return "unknown primitive:caml_gr_moveto";
      }
    else
     {return 0;}
    };

var match$2=[/* tuple */0,dodraw(1),dodraw(0)];

var draw_poly_line=match$2[2];

var draw_poly=match$2[1];

var
 draw_segments=
  function(segs)
   {var match$3=current_point(0);
    
    var savey=match$3[2];
    
    var savex=match$3[1];
    
    for(var i=0;i<=segs["length"]-1;i++)
     {var match$4=segs[i];
      
      var y2=match$4[4];
      
      var x2=match$4[3];
      
      var y1=match$4[2];
      
      var x1=match$4[1];
      
      "unknown primitive:caml_gr_moveto","unknown primitive:caml_gr_lineto"}
    
    return "unknown primitive:caml_gr_moveto";
    };

var
 draw_arc=
  function(x,y,rx,ry,a1,a2)
   {if(rx<0||ry<0)
     {throw [0,Invalid_argument,"draw_arc/ellipse/circle"];}
    else
     {return "unknown primitive:caml_gr_draw_arc";}
    };

var draw_ellipse=function(x,y,rx,ry){return draw_arc(x,y,rx,ry,0,360);};

var draw_circle=function(x,y,r){return draw_arc(x,y,r,r,0,360);};

var
 set_line_width=
  function(w)
   {if(w<0)
     {throw [0,Invalid_argument,"set_line_width"];}
    else
     {return "unknown primitive:caml_gr_set_line_width";}
    };

var
 fill_rect=
  function(x,y,w,h)
   {if(w<0||h<0)
     {throw [0,Invalid_argument,"fill_rect"];}
    else
     {return "unknown primitive:caml_gr_fill_rect";}
    };

var
 fill_arc=
  function(x,y,rx,ry,a1,a2)
   {if(rx<0||ry<0)
     {throw [0,Invalid_argument,"fill_arc/ellipse/circle"];}
    else
     {return "unknown primitive:caml_gr_fill_arc";}
    };

var fill_ellipse=function(x,y,rx,ry){return fill_arc(x,y,rx,ry,0,360);};

var fill_circle=function(x,y,r){return fill_arc(x,y,r,r,0,360);};

var transp=-1;

var
 get_image=
  function(x,y,w,h)
   {var image="unknown primitive:caml_gr_create_image";
    
    "unknown primitive:caml_gr_blit_image";
    return image;
    };

var
 mouse_pos=
  function(param)
   {var e="unknown primitive:caml_gr_wait_event";
    
    return [/* tuple */0,e[1],e[2]];
    };

var
 button_down=
  function(param){var e="unknown primitive:caml_gr_wait_event";return e[3];};

var
 read_key=
  function(param){var e="unknown primitive:caml_gr_wait_event";return e[5];};

var
 key_pressed=
  function(param){var e="unknown primitive:caml_gr_wait_event";return e[4];};

var
 loop_at_exit=
  function(events,handler)
   {var events$1=List["filter"](function(e){return e!=4;},events);
    
    return Pervasives["at_exit"]
            (function(param)
              {try
                {while(1)
                  {var e="unknown primitive:caml_gr_wait_event";handler(e)}
                 return 0;
                 }
               catch(e$1)
                {if(e$1=Pervasives["Exit"])
                  {return close_graph(0);}
                 else
                  {close_graph(0);throw e$1;}
                 }
               });
    };

var
 add=
  function(param,param$1)
   {var y2=param$1[2];
    
    var x2=param$1[1];
    
    var y1=param[2];
    
    var x1=param[1];
    
    return [/* tuple */0,x1+x2,y1+y2];
    };

var
 sub=
  function(param,param$1)
   {var y2=param$1[2];
    
    var x2=param$1[1];
    
    var y1=param[2];
    
    var x1=param[1];
    
    return [/* tuple */0,x1-x2,y1-y2];
    };

var
 middle=
  function(param,param$1)
   {var y2=param$1[2];
    
    var x2=param$1[1];
    
    var y1=param[2];
    
    var x1=param[1];
    
    return [/* tuple */0,(x1+x2)/2,(y1+y2)/2];
    };

var
 area=
  function(param,param$1)
   {var y2=param$1[2];
    
    var x2=param$1[1];
    
    var y1=param[2];
    
    var x1=param[1];
    
    return Math["abs"](x1*y2-x2*y1);
    };

var
 norm=
  function(param)
   {var y1=param[2];
    
    var x1=param[1];
    
    return "unknown primitive:caml_sqrt_float";
    };

var
 test=
  function(a,b,c,d)
   {var v=sub(d,a);
    
    var s=norm(v);
    
    return area(v,sub(a,b))<=s&&area(v,sub(a,c))<=s;
    };

var
 spline=
  function(a,b,c,d)
   {var
     spl=
      function(accu,a$1,b$1,c$1,d$1)
       {if(test(a$1,b$1,c$1,d$1))
         {return [/* :: */0,d$1,accu];}
        else
         {var a$prime=middle(a$1,b$1);
          
          var o=middle(b$1,c$1);
          
          var b$prime=middle(a$prime,o);
          
          var d$prime=middle(c$1,d$1);
          
          var c$prime=middle(o,d$prime);
          
          var i=middle(b$prime,c$prime);
          
          return spl(spl(accu,a$1,a$prime,b$prime,i),i,c$prime,d$prime,d$1);
          }
        };
    
    return spl([/* :: */0,a,0],a,b,c,d);
    };

var
 curveto=
  function(b,c,d)
   {var y=d[2];
    
    var x=d[1];
    
    var
     float_point=
      function(param)
       {var y$1=param[2];var x$1=param[1];return [/* tuple */0,x$1,y$1];};
    
    var round=function(f){return f+0.5;};
    
    var
     int_point=
      function(param)
       {var y$1=param[2];
        
        var x$1=param[1];
        
        return [/* tuple */0,round(x$1),round(y$1)];
        };
    
    var
     points=
      spline
       (float_point(current_point(0)),
        float_point(b),
        float_point(c),
        float_point(d));
    
    draw_poly_line($$Array["of_list"](List["map"](int_point,points)));
    return "unknown primitive:caml_gr_moveto";
    };

module["exports"]=
{"Graphic_failure":Graphic_failure,
 "open_graph":open_graph,
 "close_graph":close_graph,
 "caml_gr_set_window_title":
 function(prim){return "unknown primitive:caml_gr_set_window_title";},
 "caml_gr_resize_window":
 function(prim,prim$1){return "unknown primitive:caml_gr_resize_window";},
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
 "caml_gr_set_text_size":
 function(prim){return "unknown primitive:caml_gr_set_text_size";},
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

