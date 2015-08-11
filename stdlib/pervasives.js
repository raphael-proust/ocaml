// Generated CODE, PLEASE EDIT WITH CARE 

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
   {var exit;
    
    switch(param)
     {case "false":return /* false */0;
      case "true":return /* true */1;
      default:exit=66;}
    
    switch(exit){case 66:return invalid_arg("bool_of_string");}
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
          
          var exit;
          
          if(match$1>=48)
           {if(match$1>=58){exit=62;}else{exit=61;}}
          else
           {if(match$1!=45){exit=62;}else{exit=61;}}
          
          switch(exit){case 62:return s;case 61:return loop(i+1);}
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
     {var tl=l1[2];var hd=l1[1];return /* :: */[0,hd,$at(tl,l2)];}
    else
     {return l2;}
    };

var stdin="unknown primitive:caml_ml_open_descriptor_in";

var stdout="unknown primitive:caml_ml_open_descriptor_out";

var stderr="unknown primitive:caml_ml_open_descriptor_out";

var
 open_out_gen=
  function(mode,perm,name)
   {return "unknown primitive:caml_ml_open_descriptor_out";};

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
 flush_all=
  function(param)
   {var
     iter=
      function(param$1)
       {if(param$1)
         {var l=param$1[2];
          
          var a=param$1[1];
          
          try {"unknown primitive:caml_ml_flush"}catch(exn){}
          
          return iter(l);
          }
        else
         {return /* () */0;}
        };
    
    return iter("unknown primitive:caml_ml_out_channels_list");
    };

var output_bytes=function(oc,s){return "unknown primitive:caml_ml_output";};

var output_string=function(oc,s){return "unknown primitive:caml_ml_output";};

var
 output=
  function(oc,s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return invalid_arg("output");}
    else
     {return "unknown primitive:caml_ml_output";}
    };

var
 output_substring=
  function(oc,s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return invalid_arg("output_substring");}
    else
     {return "unknown primitive:caml_ml_output";}
    };

var
 output_value=
  function(chan,v){return "unknown primitive:caml_output_value";};

var
 close_out=
  function(oc)
   {"unknown primitive:caml_ml_flush";
    return "unknown primitive:caml_ml_close_channel";
    };

var
 close_out_noerr=
  function(oc)
   {try {"unknown primitive:caml_ml_flush"}catch(exn){}
    
    try
     {return "unknown primitive:caml_ml_close_channel";}
    catch(exn$1){return /* () */0;}
    };

var
 open_in_gen=
  function(mode,perm,name)
   {return "unknown primitive:caml_ml_open_descriptor_in";};

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
 input=
  function(ic,s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return invalid_arg("input");}
    else
     {return "unknown primitive:caml_ml_input";}
    };

var
 unsafe_really_input=
  function(ic,s,ofs,len)
   {if(len<=0)
     {return /* () */0;}
    else
     {var r="unknown primitive:caml_ml_input";
      
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
  function(chan)
   {var
     build_result=
      function(buf,pos,param)
       {if(param)
         {var tl=param[2];
          
          var hd=param[1];
          
          var len=hd["length"];
          
          "unknown primitive:caml_blit_string";
          return build_result(buf,pos-len,tl);
          }
        else
         {return buf;}
        };
    
    var
     scan=
      function(accu,len)
       {var n="unknown primitive:caml_ml_input_scan_line";
        
        if(n=0)
         {if(accu)
           {return build_result
                    ("unknown primitive:caml_create_string",len,accu);
            }
          else
           {throw End_of_file;}
          }
        else
         {if(n>0)
           {var res="unknown primitive:caml_create_string";
            
            "unknown primitive:caml_ml_input";
            "unknown primitive:caml_ml_input_char";
            if(accu)
             {var len$1=len+n-1;
              
              return build_result
                      ("unknown primitive:caml_create_string",
                       len$1,
                       /* :: */[0,res,accu]);
              }
            else
             {return res;}
            }
          else
           {var beg="unknown primitive:caml_create_string";
            
            "unknown primitive:caml_ml_input";
            return scan(/* :: */[0,beg,accu],len-n);
            }
          }
        };
    
    return scan(/* [] */0,0);
    };

var
 close_in_noerr=
  function(ic)
   {try
     {return "unknown primitive:caml_ml_close_channel";}
    catch(exn){return /* () */0;}
    };

var print_char=function(c){return "unknown primitive:caml_ml_output_char";};

var print_string=function(s){return output_string(stdout,s);};

var print_bytes=function(s){return output_bytes(stdout,s);};

var print_int=function(i){return output_string(stdout,string_of_int(i));};

var print_float=function(f){return output_string(stdout,string_of_float(f));};

var
 print_endline=
  function(s)
   {output_string(stdout,s);
    "unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush";
    };

var
 print_newline=
  function(param)
   {"unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush";
    };

var prerr_char=function(c){return "unknown primitive:caml_ml_output_char";};

var prerr_string=function(s){return output_string(stderr,s);};

var prerr_bytes=function(s){return output_bytes(stderr,s);};

var prerr_int=function(i){return output_string(stderr,string_of_int(i));};

var prerr_float=function(f){return output_string(stderr,string_of_float(f));};

var
 prerr_endline=
  function(s)
   {output_string(stderr,s);
    "unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush";
    };

var
 prerr_newline=
  function(param)
   {"unknown primitive:caml_ml_output_char";
    return "unknown primitive:caml_ml_flush";
    };

var
 read_line=
  function(param){"unknown primitive:caml_ml_flush";return input_line(stdin);};

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
   {do_at_exit(/* () */0);return "unknown primitive:caml_sys_exit";};

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
 "caml_ml_flush":function(prim){return "unknown primitive:caml_ml_flush";},
 "flush_all":flush_all,
 "caml_ml_output_char":
 function(prim,prim){return "unknown primitive:caml_ml_output_char";},
 "output_string":output_string,
 "output_bytes":output_bytes,
 "output":output,
 "output_substring":output_substring,
 "caml_ml_output_char":
 function(prim,prim){return "unknown primitive:caml_ml_output_char";},
 "caml_ml_output_int":
 function(prim,prim){return "unknown primitive:caml_ml_output_int";},
 "output_value":output_value,
 "caml_ml_seek_out":
 function(prim,prim){return "unknown primitive:caml_ml_seek_out";},
 "caml_ml_pos_out":function(prim){return "unknown primitive:caml_ml_pos_out";},
 "caml_ml_channel_size":
 function(prim){return "unknown primitive:caml_ml_channel_size";},
 "close_out":close_out,
 "close_out_noerr":close_out_noerr,
 "caml_ml_set_binary_mode":
 function(prim,prim){return "unknown primitive:caml_ml_set_binary_mode";},
 "open_in":open_in,
 "open_in_bin":open_in_bin,
 "open_in_gen":open_in_gen,
 "caml_ml_input_char":
 function(prim){return "unknown primitive:caml_ml_input_char";},
 "input_line":input_line,
 "input":input,
 "really_input":really_input,
 "really_input_string":really_input_string,
 "caml_ml_input_char":
 function(prim){return "unknown primitive:caml_ml_input_char";},
 "caml_ml_input_int":
 function(prim){return "unknown primitive:caml_ml_input_int";},
 "caml_input_value":
 function(prim){return "unknown primitive:caml_input_value";},
 "caml_ml_seek_in":
 function(prim,prim){return "unknown primitive:caml_ml_seek_in";},
 "caml_ml_pos_in":function(prim){return "unknown primitive:caml_ml_pos_in";},
 "caml_ml_channel_size":
 function(prim){return "unknown primitive:caml_ml_channel_size";},
 "caml_ml_close_channel":
 function(prim){return "unknown primitive:caml_ml_close_channel";},
 "close_in_noerr":close_in_noerr,
 "caml_ml_set_binary_mode":
 function(prim,prim){return "unknown primitive:caml_ml_set_binary_mode";},
 "LargeFile":
 [0,
  function(prim,prim){return "unknown primitive:caml_ml_seek_out_64";},
  function(prim){return "unknown primitive:caml_ml_pos_out_64";},
  function(prim){return "unknown primitive:caml_ml_channel_size_64";},
  function(prim,prim){return "unknown primitive:caml_ml_seek_in_64";},
  function(prim){return "unknown primitive:caml_ml_pos_in_64";},
  function(prim){return "unknown primitive:caml_ml_channel_size_64";}],
 "string_of_format":string_of_format,
 "^^":$caret$caret,
 "exit":exit,
 "at_exit":at_exit,
 "valid_float_lexem":valid_float_lexem,
 "unsafe_really_input":unsafe_really_input,
 "do_at_exit":do_at_exit};

