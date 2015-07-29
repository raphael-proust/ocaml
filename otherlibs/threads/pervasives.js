var CamlinternalFormatBasics=require("CamlinternalFormatBasics");
var match="unknown primitive:caml_register_named_value";
var failwith=function(s){var $js=[0,Failure,s];throw $js};
var invalid_arg=function(s){var $js=[0,Invalid_argument,s];throw $js};
var Exit="unknown primitive:caml_set_oo_id";
var
 min=
  function(x,y)
   {var $js="unknown primitive:caml_lessequal";
    if($js){return x}else{return y}};
var
 max=
  function(x,y)
   {var $js="unknown primitive:caml_greaterequal";
    if($js){return x}else{return y}};
var abs=function(x){var $js=x>=0;if($js){return x}else{return -x}};
var lnot=function(x){return x^-1};
var max_int=-1>>>1;
var min_int=max_int+1;
var infinity="unknown primitive:caml_int64_float_of_bits";
var neg_infinity="unknown primitive:caml_int64_float_of_bits";
var nan="unknown primitive:caml_int64_float_of_bits";
var max_float="unknown primitive:caml_int64_float_of_bits";
var min_float="unknown primitive:caml_int64_float_of_bits";
var epsilon_float="unknown primitive:caml_int64_float_of_bits";
var
 $caret=
  function(s1,s2)
   {var l1=s1["length"];
    var l2=s2["length"];
    var s="unknown primitive:caml_create_string";
    "unknown primitive:caml_blit_string";
    "unknown primitive:caml_blit_string";
    return s};
var
 char_of_int=
  function(n)
   {var $js=n<0||n>255;
    if($js){return invalid_arg("char_of_int")}else{return n}};
var
 string_of_bool=
  function(b){var $js=b;if($js){return "true"}else{return "false"}};
var
 bool_of_string=
  function(param)
   {var $js=param;
    if($js=="false"){return 0}else if($js=="true"){return 1}else{var exit=92}
    switch(exit){case 92:return invalid_arg("bool_of_string")}};
var string_of_int=function(n){return "unknown primitive:caml_format_int"};
var
 valid_float_lexem=
  function(s)
   {var l=s["length"];
    var
     loop=
      function(i)
       {var $js=i>=l;
        if($js)
         {return $caret(s,".")}
        else
         {var match$1=s[i];
          var $js$1=match$1>=48;
          if($js$1)
           {var $js$2=match$1>=58;if($js$2){var exit=88}else{var exit=87}}
          else
           {var $js$3=match$1!=45;if($js$3){var exit=88}else{var exit=87}}
          switch(exit){case 88:return s;case 87:return loop(i+1)}}};
    return loop(0)};
var
 string_of_float=
  function(f)
   {var $js="unknown primitive:caml_format_float";
    return valid_float_lexem($js)};
var
 $at=
  function(l1,l2)
   {var $js=l1;
    if($js)
     {var tl=l1[2];var hd=l1[1];var $js$1=$at(tl,l2);return [0,hd,$js$1]}
    else
     {return l2}};
var stdin="unknown primitive:caml_ml_open_descriptor_in";
var stdout="unknown primitive:caml_ml_open_descriptor_out";
var stderr="unknown primitive:caml_ml_open_descriptor_out";
var
 thread_wait_read=
  function(fd){return "unknown primitive:thread_wait_read"};
var
 thread_wait_write=
  function(fd){return "unknown primitive:thread_wait_write"};
var
 wait_inchan=
  function(ic)
   {var $js="unknown primitive:caml_channel_descriptor";
    return thread_wait_read($js)};
var
 wait_outchan=
  function(oc,len)
   {var $js="unknown primitive:caml_channel_descriptor";
    return thread_wait_write($js)};
var
 open_out_gen=
  function(mode,perm,name)
   {var $js="unknown primitive:caml_sys_open";
    return "unknown primitive:caml_ml_open_descriptor_out"};
var
 open_out=
  function(name){return open_out_gen([0,1,[0,3,[0,4,[0,7,0]]]],438,name)};
var
 open_out_bin=
  function(name){return open_out_gen([0,1,[0,3,[0,4,[0,6,0]]]],438,name)};
var
 flush=
  function(oc)
   {try
     {var success="unknown primitive:caml_ml_flush_partial"}
    catch(exn)
     {var $js=exn=Sys_blocked_io;
      if($js)
       {wait_outchan(oc,-1);var success=0}
      else
       {var success="unknown primitive:reraise"}}
    var $js$1=success;
    if($js$1){return 0}else{return flush(oc)}};
var
 flush_all=
  function(param)
   {var
     iter=
      function(param$1)
       {var $js=param$1;
        if($js)
         {var l=param$1[2];
          var a=param$1[1];
          try
           {flush(a)}
          catch(exn)
           {var tag=exn[1];
            var $js$1=tag=Sys_error;
            if($js$1){}else{"unknown primitive:reraise"}}
          return iter(l)}
        else
         {return 0}};
    var $js="unknown primitive:caml_ml_out_channels_list";
    return iter($js)};
var
 unsafe_output=
  function(oc,buf,pos,len)
   {var $js=len>0;
    if($js)
     {try
       {var written="unknown primitive:caml_ml_output_partial"}
      catch(exn)
       {var $js$1=exn=Sys_blocked_io;
        if($js$1)
         {wait_outchan(oc,len);var written=0}
        else
         {var written="unknown primitive:reraise"}}
      return unsafe_output(oc,buf,pos+written,len-written)}
    else
     {return 0}};
var
 output_char=
  function(oc,c)
   {try
     {return "unknown primitive:caml_ml_output_char"}
    catch(exn)
     {var $js=exn=Sys_blocked_io;
      if($js)
       {wait_outchan(oc,1);return output_char(oc,c)}
      else
       {return "unknown primitive:reraise"}}};
var output_bytes=function(oc,s){return unsafe_output(oc,s,0,s["length"])};
var output_string=function(oc,s){return unsafe_output(oc,s,0,s["length"])};
var
 output=
  function(oc,s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {return invalid_arg("output")}
    else
     {return unsafe_output(oc,s,ofs,len)}};
var output_substring=function(oc,s,ofs,len){return output(oc,s,ofs,len)};
var
 output_byte=
  function(oc,b)
   {try
     {return "unknown primitive:caml_ml_output_char"}
    catch(exn)
     {var $js=exn=Sys_blocked_io;
      if($js)
       {wait_outchan(oc,1);return output_byte(oc,b)}
      else
       {return "unknown primitive:reraise"}}};
var
 output_binary_int=
  function(oc,n)
   {output_byte(oc,n>>24);
    output_byte(oc,n>>16);
    output_byte(oc,n>>8);
    return output_byte(oc,n)};
var
 output_value=
  function(oc,v)
   {var $js="unknown primitive:caml_output_value_to_string";
    return output_string(oc,$js)};
var
 seek_out=
  function(oc,pos){flush(oc);return "unknown primitive:caml_ml_seek_out"};
var
 close_out=
  function(oc)
   {try {flush(oc)}catch(exn){}
    return "unknown primitive:caml_ml_close_channel"};
var
 close_out_noerr=
  function(oc)
   {try {flush(oc)}catch(exn){}
    try
     {return "unknown primitive:caml_ml_close_channel"}
    catch(exn$1){return 0}};
var
 open_in_gen=
  function(mode,perm,name)
   {var $js="unknown primitive:caml_sys_open";
    return "unknown primitive:caml_ml_open_descriptor_in"};
var open_in=function(name){return open_in_gen([0,0,[0,7,0]],0,name)};
var open_in_bin=function(name){return open_in_gen([0,0,[0,6,0]],0,name)};
var
 input_char=
  function(ic)
   {try
     {return "unknown primitive:caml_ml_input_char"}
    catch(exn)
     {var $js=exn=Sys_blocked_io;
      if($js)
       {wait_inchan(ic);return input_char(ic)}
      else
       {return "unknown primitive:reraise"}}};
var
 unsafe_input=
  function(ic,s,ofs,len)
   {try
     {return "unknown primitive:caml_ml_input"}
    catch(exn)
     {var $js=exn=Sys_blocked_io;
      if($js)
       {wait_inchan(ic);return unsafe_input(ic,s,ofs,len)}
      else
       {return "unknown primitive:reraise"}}};
var
 input=
  function(ic,s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {return invalid_arg("input")}
    else
     {return unsafe_input(ic,s,ofs,len)}};
var
 unsafe_really_input=
  function(ic,s,ofs,len)
   {var $js=len<=0;
    if($js)
     {return 0}
    else
     {var r=unsafe_input(ic,s,ofs,len);
      var $js$1=r=0;
      if($js$1)
       {var $js$2=End_of_file;throw $js$2}
      else
       {return unsafe_really_input(ic,s,ofs+r,len-r)}}};
var
 really_input=
  function(ic,s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {return invalid_arg("really_input")}
    else
     {return unsafe_really_input(ic,s,ofs,len)}};
var
 really_input_string=
  function(ic,len)
   {var s="unknown primitive:caml_create_string";
    really_input(ic,s,0,len);
    return s};
var
 input_line=
  function(ic)
   {var $js="unknown primitive:caml_create_string";
    var buf=[0,$js];
    var pos=[0,0];
    try
     {for(;;)
       {var $js$1=1;
        if($js$1)
         {var $js$2=pos[1]=buf[1]["length"];
          if($js$2)
           {var newbuf="unknown primitive:caml_create_string";
            "unknown primitive:caml_blit_string";
            buf[1]=newbuf,0}
          else
           {}
          var c=input_char(ic);
          var $js$3=c=10;
          if($js$3){var $js$4=Exit;throw $js$4}else{}
          buf[1][pos[1]]=c,0;
          pos[0]++}
        else
         break}}
    catch(exn)
     {var $js$5=exn=Exit;
      if($js$5)
       {}
      else
       {var $js$6=exn=End_of_file;
        if($js$6)
         {var $js$7=pos[1]=0;
          if($js$7){var $js$8=End_of_file;throw $js$8}else{}}
        else
         {"unknown primitive:reraise"}}}
    var res="unknown primitive:caml_create_string";
    "unknown primitive:caml_blit_string";
    return res};
var
 input_byte=
  function(ic)
   {try
     {return "unknown primitive:caml_ml_input_char"}
    catch(exn)
     {var $js=exn=Sys_blocked_io;
      if($js)
       {wait_inchan(ic);return input_byte(ic)}
      else
       {return "unknown primitive:reraise"}}};
var
 input_binary_int=
  function(ic)
   {var b1=input_byte(ic);
    var $js=b1>=128;
    if($js){var n1=b1-256}else{var n1=b1}
    var b2=input_byte(ic);
    var b3=input_byte(ic);
    var b4=input_byte(ic);
    return (n1<<24)+(b2<<16)+(b3<<8)+b4};
var
 input_value=
  function(ic)
   {var header="unknown primitive:caml_create_string";
    really_input(ic,header,0,20);
    var bsize="unknown primitive:caml_marshal_data_size";
    var buffer="unknown primitive:caml_create_string";
    "unknown primitive:caml_blit_string";
    really_input(ic,buffer,20,bsize);
    return "unknown primitive:caml_input_value_from_string"};
var
 close_in_noerr=
  function(ic)
   {try {return "unknown primitive:caml_ml_close_channel"}catch(exn){return 0}};
var print_char=function(c){return output_char(stdout,c)};
var print_string=function(s){return output_string(stdout,s)};
var print_bytes=function(s){return output_bytes(stdout,s)};
var
 print_int=
  function(i){var $js=string_of_int(i);return output_string(stdout,$js)};
var
 print_float=
  function(f){var $js=string_of_float(f);return output_string(stdout,$js)};
var
 print_endline=
  function(s)
   {output_string(stdout,s);output_char(stdout,10);return flush(stdout)};
var
 print_newline=
  function(param){output_char(stdout,10);return flush(stdout)};
var prerr_char=function(c){return output_char(stderr,c)};
var prerr_string=function(s){return output_string(stderr,s)};
var prerr_bytes=function(s){return output_bytes(stderr,s)};
var
 prerr_int=
  function(i){var $js=string_of_int(i);return output_string(stderr,$js)};
var
 prerr_float=
  function(f){var $js=string_of_float(f);return output_string(stderr,$js)};
var
 prerr_endline=
  function(s)
   {output_string(stderr,s);output_char(stderr,10);return flush(stderr)};
var
 prerr_newline=
  function(param){output_char(stderr,10);return flush(stderr)};
var read_line=function(param){flush(stdout);return input_line(stdin)};
var
 read_int=
  function(param)
   {var $js=read_line(0);return "unknown primitive:caml_int_of_string"};
var
 read_float=
  function(param)
   {var $js=read_line(0);return "unknown primitive:caml_float_of_string"};
var LargeFile=[0];
var string_of_format=function(param){var str=param[2];return str};
var
 $caret$caret=
  function(param,param$1)
   {var str2=param$1[2];
    var fmt2=param$1[1];
    var str1=param[2];
    var fmt1=param[1];
    var $js=CamlinternalFormatBasics["concat_fmt"];
    var $js$1=$js(fmt1,fmt2);
    var $js$2=$caret("%,",str2);
    var $js$3=$caret(str1,$js$2);
    return [0,$js$1,$js$3]};
var exit_function=[0,flush_all];
var
 at_exit=
  function(f)
   {var g=exit_function[1];
    return exit_function[1]=function(param){f(0);return g(0)},0};
var do_at_exit=function(param){var $js=exit_function[1];return $js(0)};
var
 exit=
  function(retcode){do_at_exit(0);return "unknown primitive:caml_sys_exit"};
"unknown primitive:caml_register_named_value";
module["exports"]=
{"invalid_arg":invalid_arg,
 "failwith":failwith,
 "Exit":Exit,
 "min":min,
 "max":max,
 "abs":abs,
 "max_int":max_int,
 "min_int":min_int,
 "lnot":lnot,
 "infinity":infinity,
 "neg_infinity":neg_infinity,
 "nan":nan,
 "max_float":max_float,
 "min_float":min_float,
 "epsilon_float":epsilon_float,
 "^":$caret,
 "char_of_int":char_of_int,
 "string_of_bool":string_of_bool,
 "bool_of_string":bool_of_string,
 "string_of_int":string_of_int,
 "string_of_float":string_of_float,
 "@":$at,
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "print_char":print_char,
 "print_string":print_string,
 "print_bytes":print_bytes,
 "print_int":print_int,
 "print_float":print_float,
 "print_endline":print_endline,
 "print_newline":print_newline,
 "prerr_char":prerr_char,
 "prerr_string":prerr_string,
 "prerr_bytes":prerr_bytes,
 "prerr_int":prerr_int,
 "prerr_float":prerr_float,
 "prerr_endline":prerr_endline,
 "prerr_newline":prerr_newline,
 "read_line":read_line,
 "read_int":read_int,
 "read_float":read_float,
 "open_out":open_out,
 "open_out_bin":open_out_bin,
 "open_out_gen":open_out_gen,
 "flush":flush,
 "flush_all":flush_all,
 "output_char":output_char,
 "output_string":output_string,
 "output_bytes":output_bytes,
 "output":output,
 "output_substring":output_substring,
 "output_byte":output_byte,
 "output_binary_int":output_binary_int,
 "output_value":output_value,
 "seek_out":seek_out,
 "unknown block:(function prim/1384 (caml_ml_pos_out prim/1384))":
 unknown block:(function prim/1384 (caml_ml_pos_out prim/1384)),
 "unknown block:(function prim/1385 (caml_ml_channel_size prim/1385))":
 unknown block:(function prim/1385 (caml_ml_channel_size prim/1385)),
 "close_out":close_out,
 "close_out_noerr":close_out_noerr,
 "unknown block:(function prim/1387 prim/1386 (caml_ml_set_binary_mode prim/1387 prim/1386))":
 unknown block:(function prim/1387 prim/1386 (caml_ml_set_binary_mode prim/1387 prim/1386)),
 "open_in":open_in,
 "open_in_bin":open_in_bin,
 "open_in_gen":open_in_gen,
 "input_char":input_char,
 "input_line":input_line,
 "input":input,
 "really_input":really_input,
 "really_input_string":really_input_string,
 "input_byte":input_byte,
 "input_binary_int":input_binary_int,
 "input_value":input_value,
 "unknown block:(function prim/1389 prim/1388 (caml_ml_seek_in prim/1389 prim/1388))":
 unknown block:(function prim/1389 prim/1388 (caml_ml_seek_in prim/1389 prim/1388)),
 "unknown block:(function prim/1390 (caml_ml_pos_in prim/1390))":
 unknown block:(function prim/1390 (caml_ml_pos_in prim/1390)),
 "unknown block:(function prim/1391 (caml_ml_channel_size prim/1391))":
 unknown block:(function prim/1391 (caml_ml_channel_size prim/1391)),
 "unknown block:(function prim/1392 (caml_ml_close_channel prim/1392))":
 unknown block:(function prim/1392 (caml_ml_close_channel prim/1392)),
 "close_in_noerr":close_in_noerr,
 "unknown block:(function prim/1394 prim/1393 (caml_ml_set_binary_mode prim/1394 prim/1393))":
 unknown block:(function prim/1394 prim/1393 (caml_ml_set_binary_mode prim/1394 prim/1393)),
 "unknown block:(makeblock 0\n  (function prim/1396 prim/1395 (caml_ml_seek_out_64 prim/1396 prim/1395))\n  (function prim/1397 (caml_ml_pos_out_64 prim/1397))\n  (function prim/1398 (caml_ml_channel_size_64 prim/1398))\n  (function prim/1400 prim/1399 (caml_ml_seek_in_64 prim/1400 prim/1399))\n  (function prim/1401 (caml_ml_pos_in_64 prim/1401))\n  (function prim/1402 (caml_ml_channel_size_64 prim/1402)))":
 unknown block:(makeblock 0
  (function prim/1396 prim/1395 (caml_ml_seek_out_64 prim/1396 prim/1395))
  (function prim/1397 (caml_ml_pos_out_64 prim/1397))
  (function prim/1398 (caml_ml_channel_size_64 prim/1398))
  (function prim/1400 prim/1399 (caml_ml_seek_in_64 prim/1400 prim/1399))
  (function prim/1401 (caml_ml_pos_in_64 prim/1401))
  (function prim/1402 (caml_ml_channel_size_64 prim/1402))),
 "string_of_format":string_of_format,
 "^^":$caret$caret,
 "exit":exit,
 "at_exit":at_exit,
 "valid_float_lexem":valid_float_lexem,
 "unsafe_really_input":unsafe_really_input,
 "do_at_exit":do_at_exit};
