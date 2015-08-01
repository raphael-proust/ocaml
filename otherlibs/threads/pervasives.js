var CamlinternalFormatBasics=require("CamlinternalFormatBasics");

var match="unknown primitive:caml_register_named_value";

var failwith=function(s){throw [0,Failure,s];};

var invalid_arg=function(s){throw [0,Invalid_argument,s];};

var Exit="unknown primitive:caml_set_oo_id";

var
 min=
  function(x,y)
   {if("unknown primitive:caml_lessequal"){return x;}else{return y;}};

var
 max=
  function(x,y)
   {if("unknown primitive:caml_greaterequal"){return x;}else{return y;}};

var abs=function(x){if(x>=0){return x;}else{return -x;}};

var lnot=function(x){return x^-1;};

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
    return s;
    };

var
 char_of_int=
  function(n)
   {if(n<0||n>255){return invalid_arg("char_of_int");}else{return n;}};

var string_of_bool=function(b){if(b){return "true";}else{return "false";}};

var
 bool_of_string=
  function(param)
   {switch(param)
     {case "false":return 0;case "true":return 1;default:var exit=92;}
    
    switch(exit){case 92:return invalid_arg("bool_of_string");}
    };

var string_of_int=function(n){return "unknown primitive:caml_format_int";};

var
 valid_float_lexem=
  function(s)
   {var l=s["length"];
    
    var
     loop=
      function(i)
       {if(i>=l)
         {return $caret(s,".");}
        else
         {var match$1=s[i];
          
          if(match$1>=48)
           {if(match$1>=58){var exit=88;}else{var exit=87;}}
          else
           {if(match$1!=45){var exit=88;}else{var exit=87;}}
          
          switch(exit){case 88:return s;case 87:return loop(i+1);}
          }
        };
    
    return loop(0);
    };

var
 string_of_float=
  function(f)
   {return valid_float_lexem("unknown primitive:caml_format_float");};

var
 $at=
  function(l1,l2)
   {if(l1)
     {var tl=l1[2];var hd=l1[1];return [0,hd,$at(tl,l2)];}
    else
     {return l2;}
    };

var stdin="unknown primitive:caml_ml_open_descriptor_in";

var stdout="unknown primitive:caml_ml_open_descriptor_out";

var stderr="unknown primitive:caml_ml_open_descriptor_out";

var
 thread_wait_read=
  function(fd){return "unknown primitive:thread_wait_read";};

var
 thread_wait_write=
  function(fd){return "unknown primitive:thread_wait_write";};

var
 wait_inchan=
  function(ic)
   {return thread_wait_read("unknown primitive:caml_channel_descriptor");};

var
 wait_outchan=
  function(oc,len)
   {return thread_wait_write("unknown primitive:caml_channel_descriptor");};

var
 open_out_gen=
  function(mode,perm,name)
   {return "unknown primitive:caml_ml_open_descriptor_out";};

var
 open_out=
  function(name){return open_out_gen([0,1,[0,3,[0,4,[0,7,0]]]],438,name);};

var
 open_out_bin=
  function(name){return open_out_gen([0,1,[0,3,[0,4,[0,6,0]]]],438,name);};

var
 flush=
  function(oc)
   {try
     {var success="unknown primitive:caml_ml_flush_partial";}
    catch(exn)
     {if(exn=Sys_blocked_io)
       {wait_outchan(oc,-1);var success=0;}
      else
       {throw exn;}
      }
    
    if(success){return 0;}else{return flush(oc);}
    };

var
 flush_all=
  function(param)
   {var
     iter=
      function(param$1)
       {if(param$1)
         {var l=param$1[2];
          
          var a=param$1[1];
          
          try
           {flush(a)}
          catch(exn){var tag=exn[1];if(tag=Sys_error){}else{throw exn;}}
          
          return iter(l);
          }
        else
         {return 0;}
        };
    
    return iter("unknown primitive:caml_ml_out_channels_list");
    };

var
 unsafe_output=
  function(oc,buf,pos,len)
   {if(len>0)
     {try
       {var written="unknown primitive:caml_ml_output_partial";}
      catch(exn)
       {if(exn=Sys_blocked_io)
         {wait_outchan(oc,len);var written=0;}
        else
         {throw exn;}
        }
      
      return unsafe_output(oc,buf,pos+written,len-written);
      }
    else
     {return 0;}
    };

var
 output_char=
  function(oc,c)
   {try
     {return "unknown primitive:caml_ml_output_char";}
    catch(exn)
     {if(exn=Sys_blocked_io)
       {wait_outchan(oc,1);return output_char(oc,c);}
      else
       {throw exn;}
      }
    };

var output_bytes=function(oc,s){return unsafe_output(oc,s,0,s["length"]);};

var output_string=function(oc,s){return unsafe_output(oc,s,0,s["length"]);};

var
 output=
  function(oc,s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return invalid_arg("output");}
    else
     {return unsafe_output(oc,s,ofs,len);}
    };

var output_substring=function(oc,s,ofs,len){return output(oc,s,ofs,len);};

var
 output_byte=
  function(oc,b)
   {try
     {return "unknown primitive:caml_ml_output_char";}
    catch(exn)
     {if(exn=Sys_blocked_io)
       {wait_outchan(oc,1);return output_byte(oc,b);}
      else
       {throw exn;}
      }
    };

var
 output_binary_int=
  function(oc,n)
   {output_byte(oc,n>>24);
    output_byte(oc,n>>16);
    output_byte(oc,n>>8);
    return output_byte(oc,n);
    };

var
 output_value=
  function(oc,v)
   {return output_string(oc,"unknown primitive:caml_output_value_to_string");};

var
 seek_out=
  function(oc,pos){flush(oc);return "unknown primitive:caml_ml_seek_out";};

var
 close_out=
  function(oc)
   {try {flush(oc)}catch(exn){}
    
    return "unknown primitive:caml_ml_close_channel";
    };

var
 close_out_noerr=
  function(oc)
   {try {flush(oc)}catch(exn){}
    
    try
     {return "unknown primitive:caml_ml_close_channel";}
    catch(exn$1){return 0;}
    };

var
 open_in_gen=
  function(mode,perm,name)
   {return "unknown primitive:caml_ml_open_descriptor_in";};

var open_in=function(name){return open_in_gen([0,0,[0,7,0]],0,name);};

var open_in_bin=function(name){return open_in_gen([0,0,[0,6,0]],0,name);};

var
 input_char=
  function(ic)
   {try
     {return "unknown primitive:caml_ml_input_char";}
    catch(exn)
     {if(exn=Sys_blocked_io)
       {wait_inchan(ic);return input_char(ic);}
      else
       {throw exn;}
      }
    };

var
 unsafe_input=
  function(ic,s,ofs,len)
   {try
     {return "unknown primitive:caml_ml_input";}
    catch(exn)
     {if(exn=Sys_blocked_io)
       {wait_inchan(ic);return unsafe_input(ic,s,ofs,len);}
      else
       {throw exn;}
      }
    };

var
 input=
  function(ic,s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return invalid_arg("input");}
    else
     {return unsafe_input(ic,s,ofs,len);}
    };

var
 unsafe_really_input=
  function(ic,s,ofs,len)
   {if(len<=0)
     {return 0;}
    else
     {var r=unsafe_input(ic,s,ofs,len);
      
      if(r=0)
       {throw End_of_file;}
      else
       {return unsafe_really_input(ic,s,ofs+r,len-r);}
      }
    };

var
 really_input=
  function(ic,s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return invalid_arg("really_input");}
    else
     {return unsafe_really_input(ic,s,ofs,len);}
    };

var
 really_input_string=
  function(ic,len)
   {var s="unknown primitive:caml_create_string";
    
    really_input(ic,s,0,len);
    return s;
    };

var
 input_line=
  function(ic)
   {var buf=[0,"unknown primitive:caml_create_string"];
    
    var pos=[0,0];
    
    try
     {while(1)
       {if(pos[1]=buf[1]["length"])
         {var newbuf="unknown primitive:caml_create_string";
          
          "unknown primitive:caml_blit_string",buf[1]=newbuf,0}
        else
         {}
        
        var c=input_char(ic);
        
        if(c=10){throw Exit;}else{}
        
        buf[1][pos[1]]=c,0,pos[0]++}
      }
    catch(exn)
     {if(exn=Exit)
       {}
      else
       {if(exn=End_of_file)
         {if(pos[1]=0){throw End_of_file;}else{}}
        else
         {throw exn;}
        }
      }
    
    var res="unknown primitive:caml_create_string";
    
    "unknown primitive:caml_blit_string";
    return res;
    };

var
 input_byte=
  function(ic)
   {try
     {return "unknown primitive:caml_ml_input_char";}
    catch(exn)
     {if(exn=Sys_blocked_io)
       {wait_inchan(ic);return input_byte(ic);}
      else
       {throw exn;}
      }
    };

var
 input_binary_int=
  function(ic)
   {var b1=input_byte(ic);
    
    if(b1>=128){var n1=b1-256;}else{var n1=b1;}
    
    var b2=input_byte(ic);
    
    var b3=input_byte(ic);
    
    var b4=input_byte(ic);
    
    return (n1<<24)+(b2<<16)+(b3<<8)+b4;
    };

var
 input_value=
  function(ic)
   {var header="unknown primitive:caml_create_string";
    
    really_input(ic,header,0,20);
    var bsize="unknown primitive:caml_marshal_data_size";
    
    var buffer="unknown primitive:caml_create_string";
    
    "unknown primitive:caml_blit_string";
    really_input(ic,buffer,20,bsize);
    return "unknown primitive:caml_input_value_from_string";
    };

var
 close_in_noerr=
  function(ic)
   {try
     {return "unknown primitive:caml_ml_close_channel";}
    catch(exn){return 0;}
    };

var print_char=function(c){return output_char(stdout,c);};

var print_string=function(s){return output_string(stdout,s);};

var print_bytes=function(s){return output_bytes(stdout,s);};

var print_int=function(i){return output_string(stdout,string_of_int(i));};

var print_float=function(f){return output_string(stdout,string_of_float(f));};

var
 print_endline=
  function(s)
   {output_string(stdout,s);output_char(stdout,10);return flush(stdout);};

var
 print_newline=
  function(param){output_char(stdout,10);return flush(stdout);};

var prerr_char=function(c){return output_char(stderr,c);};

var prerr_string=function(s){return output_string(stderr,s);};

var prerr_bytes=function(s){return output_bytes(stderr,s);};

var prerr_int=function(i){return output_string(stderr,string_of_int(i));};

var prerr_float=function(f){return output_string(stderr,string_of_float(f));};

var
 prerr_endline=
  function(s)
   {output_string(stderr,s);output_char(stderr,10);return flush(stderr);};

var
 prerr_newline=
  function(param){output_char(stderr,10);return flush(stderr);};

var read_line=function(param){flush(stdout);return input_line(stdin);};

var read_int=function(param){return "unknown primitive:caml_int_of_string";};

var
 read_float=
  function(param){return "unknown primitive:caml_float_of_string";};

var LargeFile=[0];

var string_of_format=function(param){var str=param[2];return str;};

var
 $caret$caret=
  function(param,param$1)
   {var str2=param$1[2];
    
    var fmt2=param$1[1];
    
    var str1=param[2];
    
    var fmt1=param[1];
    
    return [0,
            CamlinternalFormatBasics["concat_fmt"](fmt1,fmt2),
            $caret(str1,$caret("%,",str2))];
    };

var exit_function=[0,flush_all];

var
 at_exit=
  function(f)
   {var g=exit_function[1];
    
    return exit_function[1]=function(param){f(0);return g(0);},0;
    };

var do_at_exit=function(param){return exit_function[1](0);};

var
 exit=
  function(retcode){do_at_exit(0);return "unknown primitive:caml_sys_exit";};

"unknown primitive:caml_register_named_value",
[0,
 invalid_arg,
 failwith,
 Exit,
 min,
 max,
 abs,
 max_int,
 min_int,
 lnot,
 infinity,
 neg_infinity,
 nan,
 max_float,
 min_float,
 epsilon_float,
 $caret,
 char_of_int,
 string_of_bool,
 bool_of_string,
 string_of_int,
 string_of_float,
 $at,
 stdin,
 stdout,
 stderr,
 print_char,
 print_string,
 print_bytes,
 print_int,
 print_float,
 print_endline,
 print_newline,
 prerr_char,
 prerr_string,
 prerr_bytes,
 prerr_int,
 prerr_float,
 prerr_endline,
 prerr_newline,
 read_line,
 read_int,
 read_float,
 open_out,
 open_out_bin,
 open_out_gen,
 flush,
 flush_all,
 output_char,
 output_string,
 output_bytes,
 output,
 output_substring,
 output_byte,
 output_binary_int,
 output_value,
 seek_out,
 function(prim){return "unknown primitive:caml_ml_pos_out";},
 function(prim){return "unknown primitive:caml_ml_channel_size";},
 close_out,
 close_out_noerr,
 function(prim,prim$1){return "unknown primitive:caml_ml_set_binary_mode";},
 open_in,
 open_in_bin,
 open_in_gen,
 input_char,
 input_line,
 input,
 really_input,
 really_input_string,
 input_byte,
 input_binary_int,
 input_value,
 function(prim,prim$1){return "unknown primitive:caml_ml_seek_in";},
 function(prim){return "unknown primitive:caml_ml_pos_in";},
 function(prim){return "unknown primitive:caml_ml_channel_size";},
 function(prim){return "unknown primitive:caml_ml_close_channel";},
 close_in_noerr,
 function(prim,prim$1){return "unknown primitive:caml_ml_set_binary_mode";},
 [0,
  function(prim,prim$1){return "unknown primitive:caml_ml_seek_out_64";},
  function(prim){return "unknown primitive:caml_ml_pos_out_64";},
  function(prim){return "unknown primitive:caml_ml_channel_size_64";},
  function(prim,prim$1){return "unknown primitive:caml_ml_seek_in_64";},
  function(prim){return "unknown primitive:caml_ml_pos_in_64";},
  function(prim){return "unknown primitive:caml_ml_channel_size_64";}],
 string_of_format,
 $caret$caret,
 exit,
 at_exit,
 valid_float_lexem,
 unsafe_really_input,
 do_at_exit];
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

