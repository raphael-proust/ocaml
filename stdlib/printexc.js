// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Obj=require("Obj");
var Buffer=require("Buffer");
var $$Array=require("Array");


var printers=[0,/* [] */0];

var
 locfmt=
  [/* Format */0,
   [/* String_literal */11,
    'File "',
    [/* String */2,
     /* No_padding */0,
     [/* String_literal */11,
      '", line ',
      [/* Int */4,
       /* Int_d */0,
       /* No_padding */0,
       /* No_precision */0,
       [/* String_literal */11,
        ", characters ",
        [/* Int */4,
         /* Int_d */0,
         /* No_padding */0,
         /* No_precision */0,
         [/* Char_literal */12,
          45,
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           [/* String_literal */11,
            ": ",
            [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]]],
   'File "%s", line %d, characters %d-%d: %s'];

var
 field=
  function(x,i)
   {var f=x[i];
    
    if(!CamlPrimtivie["caml_obj_is_block"](f))
     {return Printf["sprintf"]
              ([/* Format */0,
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0],
                "%d"],
               f);
      }
    else
     {if(CamlPrimtivie["caml_obj_tag"](f)=Obj["string_tag"])
       {return Printf["sprintf"]
                ([/* Format */0,
                  [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                  "%S"],
                 f);
        }
      else
       {if(CamlPrimtivie["caml_obj_tag"](f)=Obj["double_tag"])
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
              ([/* Format */0,
                [/* String_literal */11,
                 ", ",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                ", %s%s"],
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
              ([/* Format */0,
                [/* Char_literal */12,
                 40,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,41,/* End_of_format */0]]]],
                "(%s%s)"],
               field(x,1),
               other_fields(x,2));
      }
    else
     {switch(n[0])
       {case 0:return "";
        case 1:return "";
        case 2:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* Char_literal */12,
                    40,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,41,/* End_of_format */0]]],
                   "(%s)"],
                  field(x,1));
         
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
          
          try {var match=hd(x);}catch(exn){var match=/* None */0;}
          
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
                    
                    if(CamlPrimtivie["caml_obj_tag"](x$1)!=0)
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
       ([/* Format */0,
         [/* String_literal */11,
          "Uncaught exception: ",
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,10,/* End_of_format */0]]],
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
       ([/* Format */0,
         [/* String_literal */11,
          "Uncaught exception: ",
          [/* String */2,
           /* No_padding */0,
           [/* Char_literal */12,10,/* End_of_format */0]]],
         "Uncaught exception: %s\n"],
        to_string(x));
      return Pervasives["exit"](2);
      }
    };


var
 convert_raw_backtrace=
  function(rbckt)
   {try
     {return /* Some */[0,
              $$Array["map"]
               (function(prim)
                 {return CamlPrimtivie["caml_convert_raw_backtrace_slot"]
                          (prim);
                  },
                rbckt)];
      }
    catch(exn)
     {var tag=exn[1];if(tag=Failure){return /* None */0;}else{throw exn;}}
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
       
       return /* Some */[0,
               Printf["sprintf"]
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    ' file "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '", line ',
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* String_literal */11,
                        ", characters ",
                        [/* Int */4,
                         /* Int_d */0,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* Char_literal */12,
                          45,
                          [/* Int */4,
                           /* Int_d */0,
                           /* No_padding */0,
                           /* No_precision */0,
                           /* End_of_format */0]]]]]]]]],
                  '%s file "%s", line %d, characters %d-%d'],
                 info(is_raise),
                 filename,
                 lineno,
                 startchar,
                 endchar)];
       
      case 1:
       var match=slot[1];
       
       if(match!=0)
        {return /* None */0;}
       else
        {return /* Some */[0,
                 Printf["sprintf"]
                  ([/* Format */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " unknown location",
                      /* End_of_format */0]],
                    "%s unknown location"],
                   info(/* false */0))];
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
          
          Printf["fprintf"]
           (outchan,
            [/* Format */0,
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,10,/* End_of_format */0]],
             "%s\n"],
            str)}
        else
         {}
        }
      }
    else
     {return Printf["fprintf"]
              (outchan,
               [/* Format */0,
                [/* String_literal */11,
                 "(Program not linked with -g, cannot print stack backtrace)\n",
                 /* End_of_format */0],
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
            (outchan,
             CamlPrimtivie["caml_get_exception_raw_backtrace"](/* () */0));
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
          
          Printf["bprintf"]
           (b,
            [/* Format */0,
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,10,/* End_of_format */0]],
             "%s\n"],
            str)}
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
       
       return /* Some */[0,
               /* record */[0,filename,line_number,start_char,end_char]];
       
      case 1:return /* None */0;
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
        function(param)
         {switch(param){case 0:return /* true */1;case 1:return /* false */0;}
          };
      
      var
       exists_usable=
        function(i)
         {if(i!=-1)
           {return usable_slot(backtrace[i])||exists_usable(i-1);}
          else
           {return /* false */0;}
          };
      
      if(exists_usable(backtrace["length"]-1))
       {return /* Some */[0,backtrace];}
      else
       {return /* None */0;}
      }
    else
     {return /* None */0;}
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
              (CamlPrimtivie["caml_get_exception_raw_backtrace"](/* () */0)));
    };

var
 register_printer=
  function(fn){return printers[1]=/* :: */[0,fn,printers[1]],0;};

var
 exn_slot=
  function(x)
   {var x$1=x;
    
    if(CamlPrimtivie["caml_obj_tag"](x$1)=0){return x$1[0];}else{return x$1;}
    };

var exn_slot_id=function(x){var slot=exn_slot(x);return slot[1];};

var exn_slot_name=function(x){var slot=exn_slot(x);return slot[0];};

var uncaught_exception_handler=[0,/* None */0];

var
 set_uncaught_exception_handler=
  function(fn){return uncaught_exception_handler[1]=/* Some */[0,fn],0;};

var empty_backtrace=CamlPrimtivie["caml_obj_block"](Obj["abstract_tag"],0);

var
 try_get_raw_backtrace=
  function(param)
   {try
     {return CamlPrimtivie["caml_get_exception_raw_backtrace"](/* () */0);}
    catch(exn){return empty_backtrace;}
    };

var
 handle_uncaught_exception$prime=
  function(exn,debugger_in_use)
   {try
     {if(debugger_in_use)
       {var raw_backtrace=empty_backtrace;}
      else
       {var raw_backtrace=try_get_raw_backtrace(/* () */0);}
      
      try {Pervasives["do_at_exit"](/* () */0)}catch(exn$1){}
      
      var match=uncaught_exception_handler[1];
      
      if(match)
       {var handler=match[1];
        
        try
         {return handler(exn,raw_backtrace);}
        catch(exn$prime)
         {var raw_backtrace$prime=try_get_raw_backtrace(/* () */0);
          
          Printf["eprintf"]
           ([/* Format */0,
             [/* String_literal */11,
              "Fatal error: exception ",
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,10,/* End_of_format */0]]],
             "Fatal error: exception %s\n"],
            to_string(exn));
          print_raw_backtrace(Pervasives["stderr"],raw_backtrace);
          Printf["eprintf"]
           ([/* Format */0,
             [/* String_literal */11,
              "Fatal error in uncaught exception handler: exception ",
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,10,/* End_of_format */0]]],
             "Fatal error in uncaught exception handler: exception %s\n"],
            to_string(exn$prime));
          print_raw_backtrace(Pervasives["stderr"],raw_backtrace$prime);
          return Pervasives["flush"](Pervasives["stderr"]);
          }
        }
      else
       {Printf["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "Fatal error: exception ",
            [/* String */2,
             /* No_padding */0,
             [/* Char_literal */12,10,/* End_of_format */0]]],
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
    catch(exn$1){return /* () */0;}
    };

var
 match=
  CamlPrimtivie["caml_register_named_value"]
   ("Printexc.handle_uncaught_exception",handle_uncaught_exception);

module["exports"]=
{"to_string":to_string,
 "print":print,
 "catch":$$catch,
 "print_backtrace":print_backtrace,
 "get_backtrace":get_backtrace,
 "caml_record_backtrace":
 function(prim){return CamlPrimtivie["caml_record_backtrace"](prim);},
 "caml_backtrace_status":
 function(prim){return CamlPrimtivie["caml_backtrace_status"](prim);},
 "register_printer":register_printer,
 "caml_get_exception_raw_backtrace":
 function(prim)
  {return CamlPrimtivie["caml_get_exception_raw_backtrace"](prim);},
 "print_raw_backtrace":print_raw_backtrace,
 "raw_backtrace_to_string":raw_backtrace_to_string,
 "caml_get_current_callstack":
 function(prim){return CamlPrimtivie["caml_get_current_callstack"](prim);},
 "set_uncaught_exception_handler":set_uncaught_exception_handler,
 "backtrace_slots":backtrace_slots,
 "Slot":[0,Slot[2],Slot[3],Slot[1]],
 "raw_backtrace_length":raw_backtrace_length,
 "get_raw_backtrace_slot":get_raw_backtrace_slot,
 "caml_convert_raw_backtrace_slot":
 function(prim)
  {return CamlPrimtivie["caml_convert_raw_backtrace_slot"](prim);},
 "exn_slot_id":exn_slot_id,
 "exn_slot_name":exn_slot_name};

