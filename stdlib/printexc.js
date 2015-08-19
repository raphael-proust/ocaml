// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Obj=require("./obj.js");
var Buffer=require("./buffer.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


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
   {var f=x[i+1];
    
    return !CamlPrimitive["caml_obj_is_block"](f)
            ?Printf["sprintf"]
              ([/* Format */0,
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0],
                "%d"],
               f)
            :CamlPrimitive["caml_obj_tag"](f)===Obj["string_tag"]
              ?Printf["sprintf"]
                ([/* Format */0,
                  [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                  "%S"],
                 f)
              :CamlPrimitive["caml_obj_tag"](f)===Obj["double_tag"]
                ?Pervasives["string_of_float"](f)
                :"_"};

var
 other_fields=
  function(x,i)
   {return i>=/* -1 for tag */x["length"]-1
            ?""
            :Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 ", ",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                ", %s%s"],
               field(x,i),
               other_fields(x,i+1))};

var
 fields=
  function(x)
   {var n=/* -1 for tag */x["length"]-1;
    
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
               other_fields(x,2))}
    else
     {switch(n)
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
                  field(x,1))
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
         {var match;
          try {match=param[1](x);}catch(exn){match=/* None */0;}
          
          return match?match[1]:conv(param[2])}
        else
         {if(x===CamlPrimitive["caml_global_data"]["Out_of_memory"])
           {return "Out of memory"}
          else
           {if(x===CamlPrimitive["caml_global_data"]["Stack_overflow"])
             {return "Stack overflow"}
            else
             {if(x[1]===CamlPrimitive["caml_global_data"]["Match_failure"])
               {var match$1=x[2];
                
                var $$char=match$1[3];
                
                return Printf["sprintf"]
                        (locfmt,
                         match$1[1],
                         match$1[2],
                         $$char,
                         $$char+5,
                         "Pattern matching failed")}
              else
               {if(x[1]===CamlPrimitive["caml_global_data"]["Assert_failure"])
                 {var match$2=x[2];
                  
                  var $$char$1=match$2[3];
                  
                  return Printf["sprintf"]
                          (locfmt,
                           match$2[1],
                           match$2[2],
                           $$char$1,
                           $$char$1+6,
                           "Assertion failed")}
                else
                 {if
                   (x[1]===
                    CamlPrimitive["caml_global_data"]
                     ["Undefined_recursive_module"])
                   {var match$3=x[2];
                    
                    var $$char$2=match$3[3];
                    
                    return Printf["sprintf"]
                            (locfmt,
                             match$3[1],
                             match$3[2],
                             $$char$2,
                             $$char$2+6,
                             "Undefined recursive module")}
                  else
                   {var x$1=x;
                    
                    if(CamlPrimitive["caml_obj_tag"](x$1)!==0)
                     {return x$1[1]}
                    else
                     {var constructor=x$1[1][1];
                      
                      return Pervasives["^"](constructor,fields(x$1))}
                    }
                  }
                }
              }
            }
          }
        };
    
    return conv(printers[1])};

var
 print=
  function(fct,arg)
   {try
     {return fct(arg)}
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
      throw x}
    };

var
 $$catch=
  function(fct,arg)
   {try
     {return fct(arg)}
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
      return Pervasives["exit"](2)}
    };


var
 convert_raw_backtrace=
  function(rbckt)
   {try
     {return /* Some */[0,
              $$Array["map"]
               (function(prim)
                 {return CamlPrimitive["caml_convert_raw_backtrace_slot"]
                          (prim)},
                rbckt)]}
    catch(exn)
     {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
       {return /* None */0}
      else
       {throw exn}
      }
    };

var
 format_backtrace_slot=
  function(pos,slot)
   {var
     info=
      function(is_raise)
       {return is_raise
                ?pos===0?"Raised at":"Re-raised at"
                :pos===0?"Raised by primitive operation at":"Called from"};
    
    switch(slot[0])
     {case 0:
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
                 info(slot[1]),
                 slot[2],
                 slot[3],
                 slot[4],
                 slot[5])];
      case 1:
       return slot[1]!==0
               ?/* None */0
               :/* Some */[0,
                 Printf["sprintf"]
                  ([/* Format */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " unknown location",
                      /* End_of_format */0]],
                    "%s unknown location"],
                   info(/* false */0))]
      }
    };

var
 print_exception_backtrace=
  function(outchan,backtrace)
   {if(backtrace)
     {var a=backtrace[1];
      
      for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++)
       {var match=format_backtrace_slot(i,a[i+1]);
        
        if(match)
         {Printf["fprintf"]
           (outchan,
            [/* Format */0,
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,10,/* End_of_format */0]],
             "%s\n"],
            match[1])}
        }
      return 0;
      }
    else
     {return Printf["fprintf"]
              (outchan,
               [/* Format */0,
                [/* String_literal */11,
                 "(Program not linked with -g, cannot print stack backtrace)\n",
                 /* End_of_format */0],
                "(Program not linked with -g, cannot print stack backtrace)\n"])}
    };

var
 print_raw_backtrace=
  function(outchan,raw_backtrace)
   {return print_exception_backtrace
            (outchan,convert_raw_backtrace(raw_backtrace))};

var
 print_backtrace=
  function(outchan)
   {return print_raw_backtrace
            (outchan,
             CamlPrimitive["caml_get_exception_raw_backtrace"](/* () */0))};

var
 backtrace_to_string=
  function(backtrace)
   {if(backtrace)
     {var a=backtrace[1];
      
      var b=Buffer["create"](1024);
      
      for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++)
       {var match=format_backtrace_slot(i,a[i+1]);
        
        if(match)
         {Printf["bprintf"]
           (b,
            [/* Format */0,
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,10,/* End_of_format */0]],
             "%s\n"],
            match[1])}
        }
      
      return Buffer["contents"](b)}
    else
     {return "(Program not linked with -g, cannot print stack backtrace)\n"}
    };

var
 raw_backtrace_to_string=
  function(raw_backtrace)
   {return backtrace_to_string(convert_raw_backtrace(raw_backtrace))};

var
 backtrace_slot_is_raise=
  function(param)
   {switch(param[0]){case 0:return param[1];case 1:return param[1]}};

var
 backtrace_slot_location=
  function(param)
   {switch(param[0])
     {case 0:
       return /* Some */[0,
               /* record */[0,param[2],param[3],param[4],param[5]]];
      case 1:return /* None */0
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
         {switch(param[0])
           {case 0:return /* true */1;case 1:return /* false */0}
          };
      
      var
       exists_usable=
        function(i)
         {return i!==-1
                  ?usable_slot(backtrace[i+1])||exists_usable(i-1)
                  :/* false */0};
      
      return exists_usable(/* -1 for tag */backtrace["length"]-1-1)
              ?/* Some */[0,backtrace]
              :/* None */0}
    else
     {return /* None */0}
    };

var
 Slot=
  [0,format_backtrace_slot,backtrace_slot_is_raise,backtrace_slot_location];

var
 raw_backtrace_length=
  function(bckt){return /* -1 for tag */bckt["length"]-1};

var get_raw_backtrace_slot=function(bckt,i){return bckt[i+1]};

var
 get_backtrace=
  function(param)
   {return backtrace_to_string
            (convert_raw_backtrace
              (CamlPrimitive["caml_get_exception_raw_backtrace"](/* () */0)))};

var
 register_printer=
  function(fn){return printers[1]=/* :: */[0,fn,printers[1]],0};

var
 exn_slot=
  function(x)
   {var x$1=x;return CamlPrimitive["caml_obj_tag"](x$1)===0?x$1[1]:x$1};

var exn_slot_id=function(x){var slot=exn_slot(x);return slot[2]};

var exn_slot_name=function(x){var slot=exn_slot(x);return slot[1]};

var uncaught_exception_handler=[0,/* None */0];

var
 set_uncaught_exception_handler=
  function(fn){return uncaught_exception_handler[1]=/* Some */[0,fn],0};

var empty_backtrace=CamlPrimitive["caml_obj_block"](Obj["abstract_tag"],0);

var
 try_get_raw_backtrace=
  function(param)
   {try
     {return CamlPrimitive["caml_get_exception_raw_backtrace"](/* () */0)}
    catch(exn){return empty_backtrace}
    };

var
 handle_uncaught_exception$prime=
  function(exn,debugger_in_use)
   {try
     {var
       raw_backtrace=
        debugger_in_use?empty_backtrace:try_get_raw_backtrace(/* () */0);
      
      try {Pervasives["do_at_exit"](/* () */0)}catch(exn$1){}
      
      var match=uncaught_exception_handler[1];
      
      if(match)
       {try
         {return match[1](exn,raw_backtrace)}
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
          return Pervasives["flush"](Pervasives["stderr"])}
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
        return Pervasives["flush"](Pervasives["stderr"])}
      }
    catch(exn$2)
     {if(exn$2===CamlPrimitive["caml_global_data"]["Out_of_memory"])
       {return Pervasives["prerr_endline"]
                ("Fatal error: out of memory in uncaught exception handler")}
      else
       {throw exn$2}
      }
    };

var
 handle_uncaught_exception=
  function(exn,debugger_in_use)
   {try
     {return handle_uncaught_exception$prime(exn,debugger_in_use)}
    catch(exn$1){return /* () */0}
    };

var
 match=
  CamlPrimitive["caml_register_named_value"]
   ("Printexc.handle_uncaught_exception",handle_uncaught_exception);

module["exports"]=
{"to_string":to_string,
 "print":print,
 "catch":$$catch,
 "print_backtrace":print_backtrace,
 "get_backtrace":get_backtrace,
 "record_backtrace":
 function(prim){return CamlPrimitive["caml_record_backtrace"](prim)},
 "backtrace_status":
 function(prim){return CamlPrimitive["caml_backtrace_status"](prim)},
 "register_printer":register_printer,
 "get_raw_backtrace":
 function(prim)
  {return CamlPrimitive["caml_get_exception_raw_backtrace"](prim)},
 "print_raw_backtrace":print_raw_backtrace,
 "raw_backtrace_to_string":raw_backtrace_to_string,
 "get_callstack":
 function(prim){return CamlPrimitive["caml_get_current_callstack"](prim)},
 "set_uncaught_exception_handler":set_uncaught_exception_handler,
 "backtrace_slots":backtrace_slots,
 "Slot":[0,Slot[2],Slot[3],Slot[1]],
 "raw_backtrace_length":raw_backtrace_length,
 "get_raw_backtrace_slot":get_raw_backtrace_slot,
 "convert_raw_backtrace_slot":
 function(prim){return CamlPrimitive["caml_convert_raw_backtrace_slot"](prim)},
 "exn_slot_id":exn_slot_id,
 "exn_slot_name":exn_slot_name};

