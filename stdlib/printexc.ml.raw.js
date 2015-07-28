var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Obj=require("Obj");
var Buffer=require("Buffer");
var Array=require("Array");
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
    var $js="unknown primitive:caml_obj_is_block";
    var $js$1=!$js;
    if($js$1)
     {var $js$2=Printf["sprintf"];return $js$2([0,[4,0,0,0,0],"%d"],f)}
    else
     {var $js$3="unknown primitive:caml_obj_tag";
      var $js$4=$js$3=Obj["string_tag"];
      if($js$4)
       {var $js$5=Printf["sprintf"];return $js$5([0,[3,0,0],"%S"],f)}
      else
       {var $js$6="unknown primitive:caml_obj_tag";
        var $js$7=$js$6=Obj["double_tag"];
        if($js$7)
         {var $js$8=Pervasives["string_of_float"];return $js$8(f)}
        else
         {return "_"}}}};
var
 other_fields=
  function(x,i)
   {var $js=i>=x["length"];
    if($js)
     {return ""}
    else
     {var $js$1=Printf["sprintf"];
      var $js$2=field(x,i);
      var $js$3=other_fields(x,i+1);
      return $js$1([0,[11,", ",[2,0,[2,0,0]]],", %s%s"],$js$2,$js$3)}};
var
 fields=
  function(x)
   {var n=x["length"];
    var $js=2<n>>>0;
    if($js)
     {var $js$1=Printf["sprintf"];
      var $js$2=field(x,1);
      var $js$3=other_fields(x,2);
      return $js$1([0,[12,40,[2,0,[2,0,[12,41,0]]]],"(%s%s)"],$js$2,$js$3)}
    else
     {var $js$4=n;
      var $js$5=$js$4[0];
      if($js$5==0)
       {return ""}
      else
       if($js$5==1)
        {return ""}
       else
        if($js$5==2)
         {var $js$6=Printf["sprintf"];
          var $js$7=field(x,1);
          return $js$6([0,[12,40,[2,0,[12,41,0]]],"(%s)"],$js$7)}}};
var
 to_string=
  function(x)
   {var
     conv=
      function(param)
       {var $js=param;
        if($js)
         {var tl=param[2];
          var hd=param[1];
          try {var match=hd(x)}catch(exn){var match=0}
          var $js$1=match;
          if($js$1){var s=match[1];return s}else{return conv(tl)}}
        else
         {var $js$2=x=Out_of_memory;
          if($js$2)
           {return "Out of memory"}
          else
           {var $js$3=x=Stack_overflow;
            if($js$3)
             {return "Stack overflow"}
            else
             {var tag=x[1];
              var $js$4=tag=Match_failure;
              if($js$4)
               {var match$1=x[2];
                var char=match$1[3];
                var line=match$1[2];
                var file=match$1[1];
                var $js$5=Printf["sprintf"];
                return $js$5
                        (locfmt,file,line,char,char+5,"Pattern matching failed")}
              else
               {var tag$1=x[1];
                var $js$6=tag$1=Assert_failure;
                if($js$6)
                 {var match$2=x[2];
                  var char$1=match$2[3];
                  var line$1=match$2[2];
                  var file$1=match$2[1];
                  var $js$7=Printf["sprintf"];
                  return $js$7
                          (locfmt,file$1,line$1,char$1,char$1+6,"Assertion failed")}
                else
                 {var tag$2=x[1];
                  var $js$8=tag$2=Undefined_recursive_module;
                  if($js$8)
                   {var match$3=x[2];
                    var char$2=match$3[3];
                    var line$2=match$3[2];
                    var file$2=match$3[1];
                    var $js$9=Printf["sprintf"];
                    return $js$9
                            (locfmt,
                             file$2,
                             line$2,
                             char$2,
                             char$2+6,
                             "Undefined recursive module")}
                  else
                   {var x$1=x;
                    var $js$10="unknown primitive:caml_obj_tag";
                    var $js$11=$js$10!=0;
                    if($js$11)
                     {return x$1[0]}
                    else
                     {var constructor=x$1[0][0];
                      var $js$12=Pervasives["^"];
                      var $js$13=fields(x$1);
                      return $js$12(constructor,$js$13)}}}}}}}};
    return conv(printers[1])};
var
 print=
  function(fct,arg)
   {try
     {return fct(arg)}
    catch(x)
     {var $js=Printf["eprintf"];
      var $js$1=to_string(x);
      $js
       ([0,
         [11,"Uncaught exception: ",[2,0,[12,10,0]]],
         "Uncaught exception: %s\n"],
        $js$1);
      var $js$2=Pervasives["flush"];
      $js$2(Pervasives["stderr"]);
      var $js$3=x;
      throw $js$3}};
var
 catch=
  function(fct,arg)
   {try
     {return fct(arg)}
    catch(x)
     {var $js=Pervasives["flush"];
      $js(Pervasives["stdout"]);
      var $js$1=Printf["eprintf"];
      var $js$2=to_string(x);
      $js$1
       ([0,
         [11,"Uncaught exception: ",[2,0,[12,10,0]]],
         "Uncaught exception: %s\n"],
        $js$2);
      var $js$3=Pervasives["exit"];
      return $js$3(2)}};
var
 convert_raw_backtrace=
  function(rbckt)
   {try
     {var $js=Array["map"];
      var
       $js$1=
        $js
         (function(prim)
           {return "unknown primitive:caml_convert_raw_backtrace_slot"},
          rbckt);
      return [0,$js$1]}
    catch(exn)
     {var tag=exn[1];
      var $js$2=tag=Failure;
      if($js$2){return 0}else{return "unknown primitive:reraise"}}};
var
 format_backtrace_slot=
  function(pos,slot)
   {var
     info=
      function(is_raise)
       {var $js=is_raise;
        if($js)
         {var $js$1=pos=0;
          if($js$1){return "Raised at"}else{return "Re-raised at"}}
        else
         {var $js$2=pos=0;
          if($js$2)
           {return "Raised by primitive operation at"}
          else
           {return "Called from"}}};
    var $js=slot;
    if($js==0)
     {var endchar=slot[5];
      var startchar=slot[4];
      var lineno=slot[3];
      var filename=slot[2];
      var is_raise=slot[1];
      var $js$1=Printf["sprintf"];
      var $js$2=info(is_raise);
      var
       $js$3=
        $js$1
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
          $js$2,
          filename,
          lineno,
          startchar,
          endchar);
      return [0,$js$3]}
    else
     if($js==1)
      {var match=slot[1];
       var $js$4=match!=0;
       if($js$4)
        {return 0}
       else
        {var $js$5=Printf["sprintf"];
         var $js$6=info(0);
         var
          $js$7=
           $js$5
            ([0,[2,0,[11," unknown location",0]],"%s unknown location"],$js$6);
         return [0,$js$7]}}};
var
 print_exception_backtrace=
  function(outchan,backtrace)
   {var $js=backtrace;
    if($js)
     {var a=backtrace[1];
      var $js$1=0;
      var $js$2=a["length"]-1;
      for(var i=$js$1;i<=$js$2;i++)
       {var $js$3=a[i];
        var match=format_backtrace_slot(i,$js$3);
        var $js$4=match;
        if($js$4)
         {var str=match[1];
          var $js$5=Printf["fprintf"];
          $js$5(outchan,[0,[2,0,[12,10,0]],"%s\n"],str)}
        else
         {}}}
    else
     {var $js$6=Printf["fprintf"];
      return $js$6
              (outchan,
               [0,
                [11,
                 "(Program not linked with -g, cannot print stack backtrace)\n",
                 0],
                "(Program not linked with -g, cannot print stack backtrace)\n"])}};
var
 print_raw_backtrace=
  function(outchan,raw_backtrace)
   {var $js=convert_raw_backtrace(raw_backtrace);
    return print_exception_backtrace(outchan,$js)};
var
 print_backtrace=
  function(outchan)
   {var $js="unknown primitive:caml_get_exception_raw_backtrace";
    return print_raw_backtrace(outchan,$js)};
var
 backtrace_to_string=
  function(backtrace)
   {var $js=backtrace;
    if($js)
     {var a=backtrace[1];
      var $js$1=Buffer["create"];
      var b=$js$1(1024);
      var $js$2=0;
      var $js$3=a["length"]-1;
      for(var i=$js$2;i<=$js$3;i++)
       {var $js$4=a[i];
        var match=format_backtrace_slot(i,$js$4);
        var $js$5=match;
        if($js$5)
         {var str=match[1];
          var $js$6=Printf["bprintf"];
          $js$6(b,[0,[2,0,[12,10,0]],"%s\n"],str)}
        else
         {}}
      var $js$7=Buffer["contents"];
      return $js$7(b)}
    else
     {return "(Program not linked with -g, cannot print stack backtrace)\n"}};
var
 raw_backtrace_to_string=
  function(raw_backtrace)
   {var $js=convert_raw_backtrace(raw_backtrace);
    return backtrace_to_string($js)};
var
 backtrace_slot_is_raise=
  function(param)
   {var $js=param;
    if($js==0)
     {var is_raise=param[1];return is_raise}
    else
     if($js==1){var is_raise$1=param[1];return is_raise$1}};
var
 backtrace_slot_location=
  function(param)
   {var $js=param;
    if($js==0)
     {var end_char=param[5];
      var start_char=param[4];
      var line_number=param[3];
      var filename=param[2];
      return [0,[0,filename,line_number,start_char,end_char]]}
    else
     if($js==1){return 0}};
var
 backtrace_slots=
  function(raw_backtrace)
   {var match=convert_raw_backtrace(raw_backtrace);
    var $js=match;
    if($js)
     {var backtrace=match[1];
      var
       usable_slot=
        function(param)
         {var $js$1=param;if($js$1==0){return 1}else if($js$1==1){return 0}};
      var
       exists_usable=
        function(i)
         {var $js$1=i!=-1;
          if($js$1)
           {var $js$2=backtrace[i];
            var $js$3=usable_slot($js$2);
            var $js$4=exists_usable(i-1);
            return $js$3||$js$4}
          else
           {return 0}};
      var $js$1=exists_usable(backtrace["length"]-1);
      if($js$1){return [0,backtrace]}else{return 0}}
    else
     {return 0}};
var format=format_backtrace_slot;
var is_raise=backtrace_slot_is_raise;
var location=backtrace_slot_location;
var Slot=[0,format,is_raise,location];
var raw_backtrace_length=function(bckt){return bckt["length"]};
var get_raw_backtrace_slot=function(bckt,i){return bckt[i]};
var
 get_backtrace=
  function(param)
   {var $js="unknown primitive:caml_get_exception_raw_backtrace";
    var $js$1=convert_raw_backtrace($js);
    return backtrace_to_string($js$1)};
var register_printer=function(fn){return printers[1]=[0,fn,printers[1]],0};
var
 exn_slot=
  function(x)
   {var x$1=x;
    var $js="unknown primitive:caml_obj_tag";
    var $js$1=$js=0;
    if($js$1){return x$1[0]}else{return x$1}};
var exn_slot_id=function(x){var slot=exn_slot(x);return slot[1]};
var exn_slot_name=function(x){var slot=exn_slot(x);return slot[0]};
var uncaught_exception_handler=[0,0];
var
 set_uncaught_exception_handler=
  function(fn){return uncaught_exception_handler[1]=[0,fn],0};
var $js="unknown primitive:caml_obj_block";
var empty_backtrace=$js;
var
 try_get_raw_backtrace=
  function(param)
   {try
     {return "unknown primitive:caml_get_exception_raw_backtrace"}
    catch(exn){return empty_backtrace}};
var
 handle_uncaught_exception'=
  function(exn,debugger_in_use)
   {try
     {var $js$1=debugger_in_use;
      if($js$1)
       {var raw_backtrace=empty_backtrace}
      else
       {var raw_backtrace=try_get_raw_backtrace(0)}
      try {var $js$2=Pervasives["do_at_exit"];$js$2(0)}catch(exn$1){}
      var match=uncaught_exception_handler[1];
      var $js$3=match;
      if($js$3)
       {var handler=match[1];
        try
         {return handler(exn,raw_backtrace)}
        catch(exn')
         {var raw_backtrace'=try_get_raw_backtrace(0);
          var $js$4=Printf["eprintf"];
          var $js$5=to_string(exn);
          $js$4
           ([0,
             [11,"Fatal error: exception ",[2,0,[12,10,0]]],
             "Fatal error: exception %s\n"],
            $js$5);
          print_raw_backtrace(Pervasives["stderr"],raw_backtrace);
          var $js$6=Printf["eprintf"];
          var $js$7=to_string(exn');
          $js$6
           ([0,
             [11,
              "Fatal error in uncaught exception handler: exception ",
              [2,0,[12,10,0]]],
             "Fatal error in uncaught exception handler: exception %s\n"],
            $js$7);
          print_raw_backtrace(Pervasives["stderr"],raw_backtrace');
          var $js$8=Pervasives["flush"];
          return $js$8(Pervasives["stderr"])}}
      else
       {var $js$9=Printf["eprintf"];
        var $js$10=to_string(exn);
        $js$9
         ([0,
           [11,"Fatal error: exception ",[2,0,[12,10,0]]],
           "Fatal error: exception %s\n"],
          $js$10);
        print_raw_backtrace(Pervasives["stderr"],raw_backtrace);
        var $js$11=Pervasives["flush"];
        return $js$11(Pervasives["stderr"])}}
    catch(exn$2)
     {var $js$12=exn$2=Out_of_memory;
      if($js$12)
       {var $js$13=Pervasives["prerr_endline"];
        return $js$13
                ("Fatal error: out of memory in uncaught exception handler")}
      else
       {return "unknown primitive:reraise"}}};
var
 handle_uncaught_exception=
  function(exn,debugger_in_use)
   {try
     {return handle_uncaught_exception'(exn,debugger_in_use)}
    catch(exn$1){return 0}};
var match="unknown primitive:caml_register_named_value";
module["exports"]=
{"to_string":to_string,
 "print":print,
 "catch":catch,
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
