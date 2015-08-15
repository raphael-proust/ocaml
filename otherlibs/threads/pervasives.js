// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalFormatBasics=require("./camlinternalFormatBasics.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 match=
  CamlPrimitive["caml_register_named_value"]
   ("Pervasives.array_bound_error",[0,Invalid_argument,"index out of bounds"]);

var failwith=function(s){throw [0,Failure,s];};

var invalid_arg=function(s){throw [0,Invalid_argument,s];};

var Exit=CamlPrimitive["caml_set_oo_id"]([248,"Pervasives.Exit",0]);

var
 min=
  function(x,y)
   {if(CamlPrimitive["caml_lessequal"](x,y)){return x;}else{return y;}};

var
 max=
  function(x,y)
   {if(CamlPrimitive["caml_greaterequal"](x,y)){return x;}else{return y;}};

var abs=function(x){if(x>=0){return x;}else{return -x;}};

var lnot=function(x){return x^-1;};

var max_int=-1>>>1;

var min_int=max_int+1;

var
 infinity=
  CamlPrimitive["caml_int64_float_of_bits"](9.21886843722740531e+18);

var neg_infinity=CamlPrimitive["caml_int64_float_of_bits"](-4503599627370496);

var nan=CamlPrimitive["caml_int64_float_of_bits"](9.21886843722740531e+18);

var
 max_float=
  CamlPrimitive["caml_int64_float_of_bits"](9.21886843722740531e+18);

var min_float=CamlPrimitive["caml_int64_float_of_bits"](4503599627370496);

var
 epsilon_float=
  CamlPrimitive["caml_int64_float_of_bits"](4372995238176751616);

var
 $caret=
  function(s1,s2)
   {var l1=s1["length"];
    
    var l2=s2["length"];
    
    var s=CamlPrimitive["caml_create_string"](l1+l2);
    
    CamlPrimitive["caml_blit_string"](s1,0,s,0,l1);
    CamlPrimitive["caml_blit_string"](s2,0,s,l1,l2);
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
   {var exit;
    
    switch(param)
     {case "false":return /* false */0;
      case "true":return /* true */1;
      default:exit=92;}
    
    switch(exit){case 92:return invalid_arg("bool_of_string");}
    };

var
 string_of_int=
  function(n){return CamlPrimitive["caml_format_int"]("%d",n);};

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
          
          var exit;
          
          if(match$1>=48)
           {if(match$1>=58){exit=88;}else{exit=87;}}
          else
           {if(match$1!==45){exit=88;}else{exit=87;}}
          
          switch(exit){case 88:return s;case 87:return loop(i+1);}
          }
        };
    
    return loop(0);
    };

var
 string_of_float=
  function(f)
   {return valid_float_lexem(CamlPrimitive["caml_format_float"]("%.12g",f));};

var
 $at=
  function(l1,l2)
   {if(l1)
     {var tl=l1[2];var hd=l1[1];return /* :: */[0,hd,$at(tl,l2)];}
    else
     {return l2;}
    };

var stdin=CamlPrimitive["caml_ml_open_descriptor_in"](0);

var stdout=CamlPrimitive["caml_ml_open_descriptor_out"](1);

var stderr=CamlPrimitive["caml_ml_open_descriptor_out"](2);

var
 thread_wait_read=
  function(fd){return CamlPrimitive["thread_wait_read"](fd);};

var
 thread_wait_write=
  function(fd){return CamlPrimitive["thread_wait_write"](fd);};

var
 wait_inchan=
  function(ic)
   {return thread_wait_read(CamlPrimitive["caml_channel_descriptor"](ic));};

var
 wait_outchan=
  function(oc,len)
   {return thread_wait_write(CamlPrimitive["caml_channel_descriptor"](oc));};

var
 open_out_gen=
  function(mode,perm,name)
   {return CamlPrimitive["caml_ml_open_descriptor_out"]
            (CamlPrimitive["caml_sys_open"](name,mode,perm));
    };

var
 open_out=
  function(name)
   {return open_out_gen
            ([/* :: */0,
              /* Open_wronly */1,
              [/* :: */0,
               /* Open_creat */3,
               [/* :: */0,
                /* Open_trunc */4,
                [/* :: */0,/* Open_text */7,/* [] */0]]]],
             438,
             name);
    };

var
 open_out_bin=
  function(name)
   {return open_out_gen
            ([/* :: */0,
              /* Open_wronly */1,
              [/* :: */0,
               /* Open_creat */3,
               [/* :: */0,
                /* Open_trunc */4,
                [/* :: */0,/* Open_binary */6,/* [] */0]]]],
             438,
             name);
    };

var
 flush=
  function(oc)
   {try
     {var success=CamlPrimitive["caml_ml_flush_partial"](oc);}
    catch(exn)
     {if(exn===Sys_blocked_io)
       {wait_outchan(oc,-1);var success=/* false */0;}
      else
       {throw exn;}
      }
    
    if(success){return /* () */0;}else{return flush(oc);}
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
          catch(exn){var tag=exn[1];if(tag===Sys_error){}else{throw exn;}}
          
          return iter(l);
          }
        else
         {return /* () */0;}
        };
    
    return iter(CamlPrimitive["caml_ml_out_channels_list"](/* () */0));
    };

var
 unsafe_output=
  function(oc,buf,pos,len)
   {if(len>0)
     {try
       {var written=CamlPrimitive["caml_ml_output_partial"](oc,buf,pos,len);}
      catch(exn)
       {if(exn===Sys_blocked_io)
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
     {return CamlPrimitive["caml_ml_output_char"](oc,c);}
    catch(exn)
     {if(exn===Sys_blocked_io)
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
     {return CamlPrimitive["caml_ml_output_char"](oc,b);}
    catch(exn)
     {if(exn===Sys_blocked_io)
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
   {return output_string
            (oc,CamlPrimitive["caml_output_value_to_string"](v,/* [] */0));
    };

var
 seek_out=
  function(oc,pos)
   {flush(oc);return CamlPrimitive["caml_ml_seek_out"](oc,pos);};

var
 close_out=
  function(oc)
   {try {flush(oc)}catch(exn){}
    
    return CamlPrimitive["caml_ml_close_channel"](oc);
    };

var
 close_out_noerr=
  function(oc)
   {try {flush(oc)}catch(exn){}
    
    try
     {return CamlPrimitive["caml_ml_close_channel"](oc);}
    catch(exn$1){return /* () */0;}
    };

var
 open_in_gen=
  function(mode,perm,name)
   {return CamlPrimitive["caml_ml_open_descriptor_in"]
            (CamlPrimitive["caml_sys_open"](name,mode,perm));
    };

var
 open_in=
  function(name)
   {return open_in_gen
            ([/* :: */0,
              /* Open_rdonly */0,
              [/* :: */0,/* Open_text */7,/* [] */0]],
             0,
             name);
    };

var
 open_in_bin=
  function(name)
   {return open_in_gen
            ([/* :: */0,
              /* Open_rdonly */0,
              [/* :: */0,/* Open_binary */6,/* [] */0]],
             0,
             name);
    };

var
 input_char=
  function(ic)
   {try
     {return CamlPrimitive["caml_ml_input_char"](ic);}
    catch(exn)
     {if(exn===Sys_blocked_io)
       {wait_inchan(ic);return input_char(ic);}
      else
       {throw exn;}
      }
    };

var
 unsafe_input=
  function(ic,s,ofs,len)
   {try
     {return CamlPrimitive["caml_ml_input"](ic,s,ofs,len);}
    catch(exn)
     {if(exn===Sys_blocked_io)
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
     {return /* () */0;}
    else
     {var r=unsafe_input(ic,s,ofs,len);
      
      if(r===0)
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
   {var s=CamlPrimitive["caml_create_string"](len);
    
    really_input(ic,s,0,len);
    return s;
    };

var
 input_line=
  function(ic)
   {var buf=[0,CamlPrimitive["caml_create_string"](128)];
    
    var pos=[0,0];
    
    try
     {while(/* true */1)
       {if(pos[1]===buf[1]["length"])
         {var newbuf=CamlPrimitive["caml_create_string"](2*pos[1]);
          
          CamlPrimitive["caml_blit_string"](buf[1],0,newbuf,0,pos[1]),
          buf[1]=
          newbuf,
          0}
        else
         {}
        
        var c=input_char(ic);
        
        if(c===10){throw Exit;}else{}
        
        buf[1][pos[1]]=c,0,pos[0]++}
      }
    catch(exn)
     {if(exn===Exit)
       {}
      else
       {if(exn===End_of_file)
         {if(pos[1]===0){throw End_of_file;}else{}}
        else
         {throw exn;}
        }
      }
    
    var res=CamlPrimitive["caml_create_string"](pos[1]);
    
    CamlPrimitive["caml_blit_string"](buf[1],0,res,0,pos[1]);
    return res;
    };

var
 input_byte=
  function(ic)
   {try
     {return CamlPrimitive["caml_ml_input_char"](ic);}
    catch(exn)
     {if(exn===Sys_blocked_io)
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
   {var header=CamlPrimitive["caml_create_string"](20);
    
    really_input(ic,header,0,20);
    var bsize=CamlPrimitive["caml_marshal_data_size"](header,0);
    
    var buffer=CamlPrimitive["caml_create_string"](20+bsize);
    
    CamlPrimitive["caml_blit_string"](header,0,buffer,0,20);
    really_input(ic,buffer,20,bsize);
    return CamlPrimitive["caml_input_value_from_string"](buffer,0);
    };

var
 close_in_noerr=
  function(ic)
   {try
     {return CamlPrimitive["caml_ml_close_channel"](ic);}
    catch(exn){return /* () */0;}
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

var
 read_int=
  function(param)
   {return CamlPrimitive["caml_int_of_string"](read_line(/* () */0));};

var
 read_float=
  function(param)
   {return CamlPrimitive["caml_float_of_string"](read_line(/* () */0));};

var LargeFile=[0];

var string_of_format=function(param){var str=param[2];return str;};

var
 $caret$caret=
  function(param,param$1)
   {var str2=param$1[2];
    
    var fmt2=param$1[1];
    
    var str1=param[2];
    
    var fmt1=param[1];
    
    return /* Format */[0,
            CamlinternalFormatBasics["concat_fmt"](fmt1,fmt2),
            $caret(str1,$caret("%,",str2))];
    };

var exit_function=[0,flush_all];

var
 at_exit=
  function(f)
   {var g=exit_function[1];
    
    return exit_function[1]=
           function(param){f(/* () */0);return g(/* () */0);},
           0;
    };

var do_at_exit=function(param){return exit_function[1](/* () */0);};

var
 exit=
  function(retcode)
   {do_at_exit(/* () */0);return CamlPrimitive["caml_sys_exit"](retcode);};

CamlPrimitive["caml_register_named_value"]("Pervasives.do_at_exit",do_at_exit);
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
 "caml_ml_pos_out":
 function(prim){return CamlPrimitive["caml_ml_pos_out"](prim);},
 "caml_ml_channel_size":
 function(prim){return CamlPrimitive["caml_ml_channel_size"](prim);},
 "close_out":close_out,
 "close_out_noerr":close_out_noerr,
 "caml_ml_set_binary_mode":
 function(prim,prim)
  {return CamlPrimitive["caml_ml_set_binary_mode"](prim$1,prim);},
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
 "caml_ml_seek_in":
 function(prim,prim){return CamlPrimitive["caml_ml_seek_in"](prim$1,prim);},
 "caml_ml_pos_in":
 function(prim){return CamlPrimitive["caml_ml_pos_in"](prim);},
 "caml_ml_channel_size":
 function(prim){return CamlPrimitive["caml_ml_channel_size"](prim);},
 "caml_ml_close_channel":
 function(prim){return CamlPrimitive["caml_ml_close_channel"](prim);},
 "close_in_noerr":close_in_noerr,
 "caml_ml_set_binary_mode":
 function(prim,prim)
  {return CamlPrimitive["caml_ml_set_binary_mode"](prim$1,prim);},
 "LargeFile":
 [0,
  function(prim,prim)
   {return CamlPrimitive["caml_ml_seek_out_64"](prim$1,prim);},
  function(prim){return CamlPrimitive["caml_ml_pos_out_64"](prim);},
  function(prim){return CamlPrimitive["caml_ml_channel_size_64"](prim);},
  function(prim,prim)
   {return CamlPrimitive["caml_ml_seek_in_64"](prim$1,prim);},
  function(prim){return CamlPrimitive["caml_ml_pos_in_64"](prim);},
  function(prim){return CamlPrimitive["caml_ml_channel_size_64"](prim);}],
 "string_of_format":string_of_format,
 "^^":$caret$caret,
 "exit":exit,
 "at_exit":at_exit,
 "valid_float_lexem":valid_float_lexem,
 "unsafe_really_input":unsafe_really_input,
 "do_at_exit":do_at_exit};

