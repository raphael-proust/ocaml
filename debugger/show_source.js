// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Events=require("Events");
var Primitives=require("Primitives");
var Parameters=require("Parameters");
var Debugger_config=require("Debugger_config");
var Source=require("Source");


var
 print_line=
  function(buffer,line_number,start,point,before)
   {var next=Source["next_linefeed"](buffer,start);
    
    var content=Source["buffer_content"](buffer);
    
    Printf["printf"]
     (/* Format */[0,
       /* Int */[4,
        /* Int_i */3,
        /* No_padding */0,
        /* No_precision */0,
        /* Char_literal */[12,32,/* End_of_format */0]],
       "%i "],
      line_number);
    if(point<=next&&point>=start)
     {Pervasives["print_string"]($$String["sub"](content,start,point-start)),
      Pervasives["print_string"]
       (before
         ?Debugger_config["event_mark_before"]
         :Debugger_config["event_mark_after"]),
      Pervasives["print_string"]($$String["sub"](content,point,next-point))}
    else
     {Pervasives["print_string"]($$String["sub"](content,start,next-start))}
    
    Pervasives["print_newline"](/* () */0);
    return next;
    };

var
 show_no_point=
  function(param)
   {if(Parameters["emacs"][1])
     {return Printf["printf"]
              (/* Format */[0,
                /* String_literal */[11,"\x1a\x1aH\n",/* End_of_format */0],
                "\x1a\x1aH\n"]);
      }
    else
     {return 0;}
    };

var
 show_point=
  function(ev,selected)
   {var mdle=ev[2];
    
    var before=ev[4]=/* Event_before */0;
    
    if(Parameters["emacs"][1]&&selected)
     {try
       {var buffer=Source["get_buffer"](Events["get_pos"](ev),mdle);
        
        var source=Source["source_of_module"](ev[3][1],mdle);
        
        Printf["printf"]
         (/* Format */[0,
           /* String_literal */[11,
            "\x1a\x1aM",
            /* String */[2,
             /* No_padding */0,
             /* Char_literal */[12,
              58,
              /* Int */[4,
               /* Int_i */3,
               /* No_padding */0,
               /* No_precision */0,
               /* Char_literal */[12,
                58,
                /* Int */[4,
                 /* Int_i */3,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0]]]]]],
           "\x1a\x1aM%s:%i:%i"],
          source,
          Source["start_and_cnum"](buffer,ev[3][1])[2],
          Source["start_and_cnum"](buffer,ev[3][2])[2]);
        return Printf["printf"]
                (/* Format */[0,
                  /* String */[2,
                   /* No_padding */0,
                   /* Char_literal */[12,10,/* End_of_format */0]],
                  "%s\n"],
                 before?":before":":after");
        }
      catch(exn)
       {if(exn=Primitives["Out_of_range"])
         {return Pervasives["prerr_endline"]("Position out of range.");}
        else
         {if(exn=Not_found)
           {Pervasives["prerr_endline"]
             (Pervasives["^"]("No source file for ",Pervasives["^"](mdle,".")));
            return show_no_point(/* () */0);
            }
          else
           {throw exn;}
          }
        }
      }
    else
     {try
       {var pos=Events["get_pos"](ev);
        
        var buffer$1=Source["get_buffer"](pos,mdle);
        
        var match=Source["start_and_cnum"](buffer$1,pos);
        
        return print_line(buffer$1,pos[2],match[1],match[2],before);
        }
      catch(exn$1)
       {if(exn$1=Primitives["Out_of_range"])
         {return Pervasives["prerr_endline"]("Position out of range.");}
        else
         {if(exn$1=Not_found)
           {return Pervasives["prerr_endline"]
                    (Pervasives["^"]
                      ("No source file for ",Pervasives["^"](mdle,".")));
            }
          else
           {throw exn$1;}
          }
        }
      }
    };

var
 show_listing=
  function(pos,mdle,start,stop,point,before)
   {try
     {var buffer=Source["get_buffer"](pos,mdle);
      
      var
       aff=
        function(param)
         {var line_number=param[2];
          
          if(line_number<=stop)
           {return aff
                    (/* tuple */[0,
                      print_line(buffer,line_number,param[1],point,before)+1,
                      line_number+1]);
            }
          else
           {return 0;}
          };
      
      return aff(Source["pos_of_line"](buffer,start));
      }
    catch(exn)
     {if(exn=Primitives["Out_of_range"])
       {return Pervasives["prerr_endline"]("Position out of range.");}
      else
       {if(exn=Not_found)
         {return Pervasives["prerr_endline"]
                  (Pervasives["^"]
                    ("No source file for ",Pervasives["^"](mdle,".")));
          }
        else
         {throw exn;}
        }
      }
    };

module["exports"]=
{"show_point":show_point,
 "show_no_point":show_no_point,
 "show_listing":show_listing};

