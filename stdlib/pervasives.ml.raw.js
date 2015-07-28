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
 ^=
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
    if($js=="false"){return 0}else if($js=="true"){return 1}else{var exit=66}
    switch(exit){case 66:return invalid_arg("bool_of_string")}};
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
         {return ^(s,".")}
        else
         {var match$1=s[i];
          var $js$1=match$1>=48;
          if($js$1)
           {var $js$2=match$1>=58;if($js$2){var exit=62}else{var exit=61}}
          else
           {var $js$3=match$1!=45;if($js$3){var exit=62}else{var exit=61}}
          switch(exit){case 62:return s;case 61:return loop(i+1)}}};
    return loop(0)};
var
 string_of_float=
  function(f)
   {var $js="unknown primitive:caml_format_float";
    return valid_float_lexem($js)};
var
 @=
  function(l1,l2)
   {var $js=l1;
    if($js)
     {var tl=l1[2];var hd=l1[1];var $js$1=@(tl,l2);return [0,hd,$js$1]}
    else
     {return l2}};
var stdin="unknown primitive:caml_ml_open_descriptor_in";
var stdout="unknown primitive:caml_ml_open_descriptor_out";
var stderr="unknown primitive:caml_ml_open_descriptor_out";
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
 flush_all=
  function(param)
   {var
     iter=
      function(param$1)
       {var $js=param$1;
        if($js)
         {var l=param$1[2];
          var a=param$1[1];
          try {"unknown primitive:caml_ml_flush"}catch(exn){}
          return iter(l)}
        else
         {return 0}};
    var $js="unknown primitive:caml_ml_out_channels_list";
    return iter($js)};
var output_bytes=function(oc,s){return "unknown primitive:caml_ml_output"};
var output_string=function(oc,s){return "unknown primitive:caml_ml_output"};
var
 output=
  function(oc,s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {return invalid_arg("output")}
    else
     {return "unknown primitive:caml_ml_output"}};
var
 output_substring=
  function(oc,s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {return invalid_arg("output_substring")}
    else
     {return "unknown primitive:caml_ml_output"}};
var
 output_value=
  function(chan,v){return "unknown primitive:caml_output_value"};
var
 close_out=
  function(oc)
   {"unknown primitive:caml_ml_flush";
    return "unknown primitive:caml_ml_close_channel"};
var
 close_out_noerr=
  function(oc)
   {try {"unknown primitive:caml_ml_flush"}catch(exn){}
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
 input=
  function(ic,s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {return invalid_arg("input")}
    else
     {return "unknown primitive:caml_ml_input"}};
var
 unsafe_really_input=
  function(ic,s,ofs,len)
   {var $js=len<=0;
    if($js)
     {return 0}
    else
     {var r="unknown primitive:caml_ml_input";
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
  function(chan)
   {var
     build_result=
      function(buf,pos,param)
       {var $js=param;
        if($js)
         {var tl=param[2];
          var hd=param[1];
          var len=hd["length"];
          "unknown primitive:caml_blit_string";
          return build_result(buf,pos-len,tl)}
        else
         {return buf}};
    var
     scan=
      function(accu,len)
       {var n="unknown primitive:caml_ml_input_scan_line";
        var $js=n=0;
        if($js)
         {var $js$1=accu;
          if($js$1)
           {var $js$2="unknown primitive:caml_create_string";
            return build_result($js$2,len,accu)}
          else
           {var $js$3=End_of_file;throw $js$3}}
        else
         {var $js$4=n>0;
          if($js$4)
           {var res="unknown primitive:caml_create_string";
            var $js$5="unknown primitive:caml_ml_input";
            0;
            var $js$6="unknown primitive:caml_ml_input_char";
            0;
            var $js$7=accu;
            if($js$7)
             {var len$1=len+n-1;
              var $js$8="unknown primitive:caml_create_string";
              return build_result($js$8,len$1,[0,res,accu])}
            else
             {return res}}
          else
           {var beg="unknown primitive:caml_create_string";
            var $js$9="unknown primitive:caml_ml_input";
            0;
            return scan([0,beg,accu],len-n)}}};
    var $js=scan(0,0);
    return $js};
var
 close_in_noerr=
  function(ic)
   {try {return "unknown primitive:caml_ml_close_channel"}catch(exn){return 0}};
var print_char=function(c){return "unknown primitive:caml_ml_output_char"};
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
   {output_string(stdout,s);
    "unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush"};
var
 print_newline=
  function(param)
   {"unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush"};
var prerr_char=function(c){return "unknown primitive:caml_ml_output_char"};
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
   {output_string(stderr,s);
    "unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush"};
var
 prerr_newline=
  function(param)
   {"unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush"};
var
 read_line=
  function(param){"unknown primitive:caml_ml_flush";return input_line(stdin)};
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
 ^^=
  function(param,param$1)
   {var str2=param$1[2];
    var fmt2=param$1[1];
    var str1=param[2];
    var fmt1=param[1];
    var $js=CamlinternalFormatBasics["concat_fmt"];
    var $js$1=$js(fmt1,fmt2);
    var $js$2=^("%,",str2);
    var $js$3=^(str1,$js$2);
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
 "^":^,
 "char_of_int":char_of_int,
 "string_of_bool":string_of_bool,
 "bool_of_string":bool_of_string,
 "string_of_int":string_of_int,
 "string_of_float":string_of_float,
 "@":@,
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
 "unknown block:(function prim/1339 (caml_ml_flush prim/1339))":
 unknown block:(function prim/1339 (caml_ml_flush prim/1339)),
 "flush_all":flush_all,
 "unknown block:(function prim/1341 prim/1340 (caml_ml_output_char prim/1341 prim/1340))":
 unknown block:(function prim/1341 prim/1340 (caml_ml_output_char prim/1341 prim/1340)),
 "output_string":output_string,
 "output_bytes":output_bytes,
 "output":output,
 "output_substring":output_substring,
 "unknown block:(function prim/1343 prim/1342 (caml_ml_output_char prim/1343 prim/1342))":
 unknown block:(function prim/1343 prim/1342 (caml_ml_output_char prim/1343 prim/1342)),
 "unknown block:(function prim/1345 prim/1344 (caml_ml_output_int prim/1345 prim/1344))":
 unknown block:(function prim/1345 prim/1344 (caml_ml_output_int prim/1345 prim/1344)),
 "output_value":output_value,
 "unknown block:(function prim/1347 prim/1346 (caml_ml_seek_out prim/1347 prim/1346))":
 unknown block:(function prim/1347 prim/1346 (caml_ml_seek_out prim/1347 prim/1346)),
 "unknown block:(function prim/1348 (caml_ml_pos_out prim/1348))":
 unknown block:(function prim/1348 (caml_ml_pos_out prim/1348)),
 "unknown block:(function prim/1349 (caml_ml_channel_size prim/1349))":
 unknown block:(function prim/1349 (caml_ml_channel_size prim/1349)),
 "close_out":close_out,
 "close_out_noerr":close_out_noerr,
 "unknown block:(function prim/1351 prim/1350 (caml_ml_set_binary_mode prim/1351 prim/1350))":
 unknown block:(function prim/1351 prim/1350 (caml_ml_set_binary_mode prim/1351 prim/1350)),
 "open_in":open_in,
 "open_in_bin":open_in_bin,
 "open_in_gen":open_in_gen,
 "unknown block:(function prim/1352 (caml_ml_input_char prim/1352))":
 unknown block:(function prim/1352 (caml_ml_input_char prim/1352)),
 "input_line":input_line,
 "input":input,
 "really_input":really_input,
 "really_input_string":really_input_string,
 "unknown block:(function prim/1353 (caml_ml_input_char prim/1353))":
 unknown block:(function prim/1353 (caml_ml_input_char prim/1353)),
 "unknown block:(function prim/1354 (caml_ml_input_int prim/1354))":
 unknown block:(function prim/1354 (caml_ml_input_int prim/1354)),
 "unknown block:(function prim/1355 (caml_input_value prim/1355))":
 unknown block:(function prim/1355 (caml_input_value prim/1355)),
 "unknown block:(function prim/1357 prim/1356 (caml_ml_seek_in prim/1357 prim/1356))":
 unknown block:(function prim/1357 prim/1356 (caml_ml_seek_in prim/1357 prim/1356)),
 "unknown block:(function prim/1358 (caml_ml_pos_in prim/1358))":
 unknown block:(function prim/1358 (caml_ml_pos_in prim/1358)),
 "unknown block:(function prim/1359 (caml_ml_channel_size prim/1359))":
 unknown block:(function prim/1359 (caml_ml_channel_size prim/1359)),
 "unknown block:(function prim/1360 (caml_ml_close_channel prim/1360))":
 unknown block:(function prim/1360 (caml_ml_close_channel prim/1360)),
 "close_in_noerr":close_in_noerr,
 "unknown block:(function prim/1362 prim/1361 (caml_ml_set_binary_mode prim/1362 prim/1361))":
 unknown block:(function prim/1362 prim/1361 (caml_ml_set_binary_mode prim/1362 prim/1361)),
 "unknown block:(makeblock 0\n  (function prim/1364 prim/1363 (caml_ml_seek_out_64 prim/1364 prim/1363))\n  (function prim/1365 (caml_ml_pos_out_64 prim/1365))\n  (function prim/1366 (caml_ml_channel_size_64 prim/1366))\n  (function prim/1368 prim/1367 (caml_ml_seek_in_64 prim/1368 prim/1367))\n  (function prim/1369 (caml_ml_pos_in_64 prim/1369))\n  (function prim/1370 (caml_ml_channel_size_64 prim/1370)))":
 unknown block:(makeblock 0
  (function prim/1364 prim/1363 (caml_ml_seek_out_64 prim/1364 prim/1363))
  (function prim/1365 (caml_ml_pos_out_64 prim/1365))
  (function prim/1366 (caml_ml_channel_size_64 prim/1366))
  (function prim/1368 prim/1367 (caml_ml_seek_in_64 prim/1368 prim/1367))
  (function prim/1369 (caml_ml_pos_in_64 prim/1369))
  (function prim/1370 (caml_ml_channel_size_64 prim/1370))),
 "string_of_format":string_of_format,
 "^^":^^,
 "exit":exit,
 "at_exit":at_exit,
 "valid_float_lexem":valid_float_lexem,
 "unsafe_really_input":unsafe_really_input,
 "do_at_exit":do_at_exit};
