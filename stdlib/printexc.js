var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Obj=require("Obj");
var Buffer=require("Buffer");
var $$Array=require("Array");

var printers=[0,0];

var
 locfmt=
  [0,
   [11,
    'File "',
    [2,
     0,
     [11,
      '", line ',
      [4,
       0,
       0,
       0,
       [11,", characters ",[4,0,0,0,[12,45,[4,0,0,0,[11,": ",[2,0,0]]]]]]]]]],
   'File "%s", line %d, characters %d-%d: %s'];

var
 field=
  function(x,i)
   {var f=x[i];
    
    if(!"unknown primitive:caml_obj_is_block")
     {return Printf["sprintf"]([0,[4,0,0,0,0],"%d"],f);}
    else
     {if("unknown primitive:caml_obj_tag"=Obj["string_tag"])
       {return Printf["sprintf"]([0,[3,0,0],"%S"],f);}
      else
       {if("unknown primitive:caml_obj_tag"=Obj["double_tag"])
         {return Pervasives["string_of_float"](f);}
        else
         {return "_";}
        }
      }
    };

var
 other_fields=
  function(x,i)
   {if(i>=x["length"])
     {return "";}
    else
     {return Printf["sprintf"]
              ([0,[11,", ",[2,0,[2,0,0]]],", %s%s"],
               field(x,i),
               other_fields(x,i+1));
      }
    };

var
 fields=
  function(x)
   {var n=x["length"];
    
    if(2<n>>>0)
     {return Printf["sprintf"]
              ([0,[12,40,[2,0,[2,0,[12,41,0]]]],"(%s%s)"],
               field(x,1),
               other_fields(x,2));
      }
    else
     {switch(n[0])
       {case 0:return "";
        case 1:return "";
        case 2:
         return Printf["sprintf"]
                 ([0,[12,40,[2,0,[12,41,0]]],"(%s)"],field(x,1));
         
        }
      }
    };

var
 to_string=
  function(x)
   {var
     conv=
      function(param)
       {if(param)
         {var tl=param[2];
          
          var hd=param[1];
          
          try {var match=hd(x);}catch(exn){var match=0;}
          
          if(match){var s=match[1];return s;}else{return conv(tl);}
          }
        else
         {if(x=Out_of_memory)
           {return "Out of memory";}
          else
           {if(x=Stack_overflow)
             {return "Stack overflow";}
            else
             {var tag=x[1];
              
              if(tag=Match_failure)
               {var match$1=x[2];
                
                var $$char=match$1[3];
                
                var line=match$1[2];
                
                var file=match$1[1];
                
                return Printf["sprintf"]
                        (locfmt,file,line,$$char,$$char+5,"Pattern matching failed");
                }
              else
               {var tag$1=x[1];
                
                if(tag$1=Assert_failure)
                 {var match$2=x[2];
                  
                  var $$char$1=match$2[3];
                  
                  var line$1=match$2[2];
                  
                  var file$1=match$2[1];
                  
                  return Printf["sprintf"]
                          (locfmt,
                           file$1,
                           line$1,
                           $$char$1,
                           $$char$1+6,
                           "Assertion failed");
                  }
                else
                 {var tag$2=x[1];
                  
                  if(tag$2=Undefined_recursive_module)
                   {var match$3=x[2];
                    
                    var $$char$2=match$3[3];
                    
                    var line$2=match$3[2];
                    
                    var file$2=match$3[1];
                    
                    return Printf["sprintf"]
                            (locfmt,
                             file$2,
                             line$2,
                             $$char$2,
                             $$char$2+6,
                             "Undefined recursive module");
                    }
                  else
                   {var x$1=x;
                    
                    if("unknown primitive:caml_obj_tag"!=0)
                     {return x$1[0];}
                    else
                     {var constructor=x$1[0][0];
                      
                      return Pervasives["^"](constructor,fields(x$1));
                      }
                    }
                  }
                }
              }
            }
          }
        };
    
    return conv(printers[1]);
    };

var
 print=
  function(fct,arg)
   {try
     {return fct(arg);}
    catch(x)
     {Printf["eprintf"]
       ([0,
         [11,"Uncaught exception: ",[2,0,[12,10,0]]],
         "Uncaught exception: %s\n"],
        to_string(x));
      Pervasives["flush"](Pervasives["stderr"]);
      throw x;
      }
    };

var
 $$catch=
  function(fct,arg)
   {try
     {return fct(arg);}
    catch(x)
     {Pervasives["flush"](Pervasives["stdout"]);
      Printf["eprintf"]
       ([0,
         [11,"Uncaught exception: ",[2,0,[12,10,0]]],
         "Uncaught exception: %s\n"],
        to_string(x));
      return Pervasives["exit"](2);
      }
    };

var
 convert_raw_backtrace=
  function(rbckt)
   {try
     {return [0,
              $$Array["map"]
               (function(prim)
                 {return "unknown primitive:caml_convert_raw_backtrace_slot";},
                rbckt)];
      }
    catch(exn){var tag=exn[1];if(tag=Failure){return 0;}else{throw exn;}}
    };

var
 format_backtrace_slot=
  function(pos,slot)
   {var
     info=
      function(is_raise)
       {if(is_raise)
         {if(pos=0){return "Raised at";}else{return "Re-raised at";}}
        else
         {if(pos=0)
           {return "Raised by primitive operation at";}
          else
           {return "Called from";}
          }
        };
    
    switch(slot)
     {case 0:
       var endchar=slot[5];
       
       var startchar=slot[4];
       
       var lineno=slot[3];
       
       var filename=slot[2];
       
       var is_raise=slot[1];
       
       return [0,
               Printf["sprintf"]
                ([0,
                  [2,
                   0,
                   [11,
                    ' file "',
                    [2,
                     0,
                     [11,
                      '", line ',
                      [4,0,0,0,[11,", characters ",[4,0,0,0,[12,45,[4,0,0,0,0]]]]]]]]],
                  '%s file "%s", line %d, characters %d-%d'],
                 info(is_raise),
                 filename,
                 lineno,
                 startchar,
                 endchar)];
       
      case 1:
       var match=slot[1];
       
       if(match!=0)
        {return 0;}
       else
        {return [0,
                 Printf["sprintf"]
                  ([0,[2,0,[11," unknown location",0]],"%s unknown location"],
                   info(0))];
         }
       
      }
    };

var
 print_exception_backtrace=
  function(outchan,backtrace)
   {if(backtrace)
     {var a=backtrace[1];
      
      for(var i=0;i<=a["length"]-1;i++)
       {var match=format_backtrace_slot(i,a[i]);
        
        if(match)
         {var str=match[1];
          
          Printf["fprintf"](outchan,[0,[2,0,[12,10,0]],"%s\n"],str)}
        else
         {}
        }
      }
    else
     {return Printf["fprintf"]
              (outchan,
               [0,
                [11,
                 "(Program not linked with -g, cannot print stack backtrace)\n",
                 0],
                "(Program not linked with -g, cannot print stack backtrace)\n"]);
      }
    };

var
 print_raw_backtrace=
  function(outchan,raw_backtrace)
   {return print_exception_backtrace
            (outchan,convert_raw_backtrace(raw_backtrace));
    };

var
 print_backtrace=
  function(outchan)
   {return print_raw_backtrace
            (outchan,"unknown primitive:caml_get_exception_raw_backtrace");
    };

var
 backtrace_to_string=
  function(backtrace)
   {if(backtrace)
     {var a=backtrace[1];
      
      var b=Buffer["create"](1024);
      
      for(var i=0;i<=a["length"]-1;i++)
       {var match=format_backtrace_slot(i,a[i]);
        
        if(match)
         {var str=match[1];
          
          Printf["bprintf"](b,[0,[2,0,[12,10,0]],"%s\n"],str)}
        else
         {}
        }
      
      return Buffer["contents"](b);
      }
    else
     {return "(Program not linked with -g, cannot print stack backtrace)\n";}
    };

var
 raw_backtrace_to_string=
  function(raw_backtrace)
   {return backtrace_to_string(convert_raw_backtrace(raw_backtrace));};

var
 backtrace_slot_is_raise=
  function(param)
   {switch(param)
     {case 0:var is_raise=param[1];return is_raise;
      case 1:var is_raise$1=param[1];return is_raise$1;
      }
    };

var
 backtrace_slot_location=
  function(param)
   {switch(param)
     {case 0:
       var end_char=param[5];
       
       var start_char=param[4];
       
       var line_number=param[3];
       
       var filename=param[2];
       
       return [0,[0,filename,line_number,start_char,end_char]];
       
      case 1:return 0;
      }
    };

var
 backtrace_slots=
  function(raw_backtrace)
   {var match=convert_raw_backtrace(raw_backtrace);
    
    if(match)
     {var backtrace=match[1];
      
      var
       usable_slot=
        function(param){switch(param){case 0:return 1;case 1:return 0;}};
      
      var
       exists_usable=
        function(i)
         {if(i!=-1)
           {return usable_slot(backtrace[i])||exists_usable(i-1);}
          else
           {return 0;}
          };
      
      if(exists_usable(backtrace["length"]-1))
       {return [0,backtrace];}
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var format=format_backtrace_slot;

var is_raise=backtrace_slot_is_raise;

var $$location=backtrace_slot_location;

var Slot=[0,format,is_raise,$$location];

var raw_backtrace_length=function(bckt){return bckt["length"];};

var get_raw_backtrace_slot=function(bckt,i){return bckt[i];};

var
 get_backtrace=
  function(param)
   {return backtrace_to_string
            (convert_raw_backtrace
              ("unknown primitive:caml_get_exception_raw_backtrace"));
    };

var register_printer=function(fn){return printers[1]=[0,fn,printers[1]],0;};

var
 exn_slot=
  function(x)
   {var x$1=x;
    
    if("unknown primitive:caml_obj_tag"=0){return x$1[0];}else{return x$1;}
    };

var exn_slot_id=function(x){var slot=exn_slot(x);return slot[1];};

var exn_slot_name=function(x){var slot=exn_slot(x);return slot[0];};

var uncaught_exception_handler=[0,0];

var
 set_uncaught_exception_handler=
  function(fn){return uncaught_exception_handler[1]=[0,fn],0;};

var empty_backtrace="unknown primitive:caml_obj_block";

var
 try_get_raw_backtrace=
  function(param)
   {try
     {return "unknown primitive:caml_get_exception_raw_backtrace";}
    catch(exn){return empty_backtrace;}
    };

var
 handle_uncaught_exception$prime=
  function(exn,debugger_in_use)
   {try
     {if(debugger_in_use)
       {var raw_backtrace=empty_backtrace;}
      else
       {var raw_backtrace=try_get_raw_backtrace(0);}
      
      try {Pervasives["do_at_exit"](0)}catch(exn$1){}
      
      var match=uncaught_exception_handler[1];
      
      if(match)
       {var handler=match[1];
        
        try
         {return handler(exn,raw_backtrace);}
        catch(exn$prime)
         {var raw_backtrace$prime=try_get_raw_backtrace(0);
          
          Printf["eprintf"]
           ([0,
             [11,"Fatal error: exception ",[2,0,[12,10,0]]],
             "Fatal error: exception %s\n"],
            to_string(exn));
          print_raw_backtrace(Pervasives["stderr"],raw_backtrace);
          Printf["eprintf"]
           ([0,
             [11,
              "Fatal error in uncaught exception handler: exception ",
              [2,0,[12,10,0]]],
             "Fatal error in uncaught exception handler: exception %s\n"],
            to_string(exn$prime));
          print_raw_backtrace(Pervasives["stderr"],raw_backtrace$prime);
          return Pervasives["flush"](Pervasives["stderr"]);
          }
        }
      else
       {Printf["eprintf"]
         ([0,
           [11,"Fatal error: exception ",[2,0,[12,10,0]]],
           "Fatal error: exception %s\n"],
          to_string(exn));
        print_raw_backtrace(Pervasives["stderr"],raw_backtrace);
        return Pervasives["flush"](Pervasives["stderr"]);
        }
      }
    catch(exn$2)
     {if(exn$2=Out_of_memory)
       {return Pervasives["prerr_endline"]
                ("Fatal error: out of memory in uncaught exception handler");
        }
      else
       {throw exn$2;}
      }
    };

var
 handle_uncaught_exception=
  function(exn,debugger_in_use)
   {try
     {return handle_uncaught_exception$prime(exn,debugger_in_use);}
    catch(exn$1){return 0;}
    };

var match="unknown primitive:caml_register_named_value";

[0,
 to_string,
 print,
 $$catch,
 print_backtrace,
 get_backtrace,
 function(prim){return "unknown primitive:caml_record_backtrace";},
 function(prim){return "unknown primitive:caml_backtrace_status";},
 register_printer,
 function(prim){return "unknown primitive:caml_get_exception_raw_backtrace";},
 print_raw_backtrace,
 raw_backtrace_to_string,
 function(prim){return "unknown primitive:caml_get_current_callstack";},
 set_uncaught_exception_handler,
 backtrace_slots,
 [0,Slot[2],Slot[3],Slot[1]],
 raw_backtrace_length,
 get_raw_backtrace_slot,
 function(prim){return "unknown primitive:caml_convert_raw_backtrace_slot";},
 exn_slot_id,
 exn_slot_name];
module["exports"]=
{"to_string":to_string,
 "print":print,
 "catch":$$catch,
 "print_backtrace":print_backtrace,
 "get_backtrace":get_backtrace,
 "unknown block:(function prim/1144 (caml_record_backtrace prim/1144))":
 unknown block:(function prim/1144 (caml_record_backtrace prim/1144)),
 "unknown block:(function prim/1145 (caml_backtrace_status prim/1145))":
 unknown block:(function prim/1145 (caml_backtrace_status prim/1145)),
 "register_printer":register_printer,
 "unknown block:(function prim/1146 (caml_get_exception_raw_backtrace prim/1146))":
 unknown block:(function prim/1146 (caml_get_exception_raw_backtrace prim/1146)),
 "print_raw_backtrace":print_raw_backtrace,
 "raw_backtrace_to_string":raw_backtrace_to_string,
 "unknown block:(function prim/1147 (caml_get_current_callstack prim/1147))":
 unknown block:(function prim/1147 (caml_get_current_callstack prim/1147)),
 "set_uncaught_exception_handler":set_uncaught_exception_handler,
 "backtrace_slots":backtrace_slots,
 "unknown block:(makeblock 0 (field 1 Slot/1107) (field 2 Slot/1107) (field 0 Slot/1107))":
 unknown block:(makeblock 0 (field 1 Slot/1107) (field 2 Slot/1107) (field 0 Slot/1107)),
 "raw_backtrace_length":raw_backtrace_length,
 "get_raw_backtrace_slot":get_raw_backtrace_slot,
 "unknown block:(function prim/1148 (caml_convert_raw_backtrace_slot prim/1148))":
 unknown block:(function prim/1148 (caml_convert_raw_backtrace_slot prim/1148)),
 "exn_slot_id":exn_slot_id,
 "exn_slot_name":exn_slot_name};

