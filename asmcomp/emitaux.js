// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Clflags=require("Clflags");
var Debuginfo=require("Debuginfo");
var Arch=require("Arch");
var Hashtbl=require("Hashtbl");
var Linearize=require("Linearize");
var Config=require("Config");


var output_channel=[0,Pervasives["stdout"]];

var
 emit_string=
  function(s){return Pervasives["output_string"](output_channel[1],s);};

var
 emit_int=
  function(n)
   {return Pervasives["output_string"]
            (output_channel[1],Pervasives["string_of_int"](n));
    };

var
 emit_char=
  function(c){return Pervasives["output_char"](output_channel[1],c);};

var
 emit_nativeint=
  function(n)
   {return Pervasives["output_string"]
            (output_channel[1],Nativeint["to_string"](n));
    };

var
 emit_printf=
  function(fmt){return Printf["fprintf"](output_channel[1],fmt);};

var
 emit_int32=
  function(n){return emit_printf([0,[11,"0x",[5,6,0,0,0]],"0x%lx"],n);};

var
 emit_symbol=
  function(esc,s)
   {for(var i=0;i<=s["length"]-1;i++)
     {var c=s[i];
      
      var exit;
      
      if(c>=91)
       {if(c>=97)
         {if(c>=123){exit=47;}else{exit=46;}}
        else
         {if(c!=95){exit=47;}else{exit=46;}}
        }
      else
       {if(c>=58)
         {if(c>=65){exit=46;}else{exit=47;}}
        else
         {if(c>=48){exit=46;}else{exit=47;}}
        }
      
      switch(exit)
       {case 47:
         Printf["fprintf"]
          (output_channel[1],[0,[0,[4,6,[0,2,2],0,0]],"%c%02x"],esc,c);
        case 46:Pervasives["output_char"](output_channel[1],c)
        }
      }
    };

var
 emit_string_literal=
  function(s)
   {var last_was_escape=0;
    
    emit_string('"');
    for(var i=0;i<=s["length"]-1;i++)
     {var c=s[i];
      
      if(c>=48&&c<=57)
       {if(last_was_escape)
         {Printf["fprintf"]
           (output_channel[1],[0,[12,92,[4,10,0,0,0]],"\%o"],c)}
        else
         {Pervasives["output_char"](output_channel[1],c)}
        }
      else
       {if(c>=32&&c<=126&&c!=34&&c!=92)
         {Pervasives["output_char"](output_channel[1],c);last_was_escape=0;}
        else
         {Printf["fprintf"]
           (output_channel[1],[0,[12,92,[4,10,0,0,0]],"\%o"],c);
          last_was_escape=1;
          }
        }
      }
    
    return emit_string('"');
    };

var
 emit_string_directive=
  function(directive,s)
   {var l=s["length"];
    
    if(l=0)
     {return 0;}
    else
     {if(l<80)
       {emit_string(directive);emit_string_literal(s);return emit_char(10);}
      else
       {var i=0;
        
        while(i<l)
         {var n=Pervasives["min"](l-i,80);
          
          emit_string(directive);
          emit_string_literal($$String["sub"](s,i,n));
          emit_char(10);
          i=i+n;
          }
        return 0;
        }
      }
    };

var
 emit_bytes_directive=
  function(directive,s)
   {var pos=0;
    
    for(var i=0;i<=s["length"]-1;i++)
     {if(pos=0){emit_string(directive)}else{emit_char(44)}
      
      emit_int(s[i]);
      pos=1+pos;
      
      if(pos>=16){emit_char(10);pos=0;}else{}
      }
    
    if(pos>0){return emit_char(10);}else{return 0;}
    };

var
 emit_float64_directive=
  function(directive,x)
   {return emit_printf
            ([0,[12,9,[2,0,[11,"\t0x",[7,6,0,0,[12,10,0]]]]],"\t%s\t0x%Lx\n"],
             directive,
             x);
    };

var
 emit_float64_split_directive=
  function(directive,x)
   {var lo=x&4294967295;
    
    var hi=x>>>32;
    
    return emit_printf
            ([0,
              [12,
               9,
               [2,0,[11,"\t0x",[7,6,0,0,[11,", 0x",[7,6,0,0,[12,10,0]]]]]]],
              "\t%s\t0x%Lx, 0x%Lx\n"],
             directive,
             Arch["big_endian"]?hi:lo,
             Arch["big_endian"]?lo:hi);
    };

var
 emit_float32_directive=
  function(directive,x)
   {return emit_printf
            ([0,[12,9,[2,0,[11,"\t0x",[5,6,0,0,[12,10,0]]]]],"\t%s\t0x%lx\n"],
             directive,
             x);
    };

var frame_descriptors=[0,0];

var
 emit_frames=
  function(a)
   {var filenames=Hashtbl["create"](0,7);
    
    var
     label_filename=
      function(name)
       {try
         {return Hashtbl["find"](filenames,name);}
        catch(exn)
         {if(exn=Not_found)
           {var lbl=Linearize["new_label"](0);
            
            Hashtbl["add"](filenames,name,lbl);
            return lbl;
            }
          else
           {throw exn;}
          }
        };
    
    var
     emit_frame=
      function(fd)
       {a[1](fd[1]);
        a[2](Debuginfo["is_none"](fd[4])?fd[2]:fd[2]+1);
        a[2](List["length"](fd[3]));
        List["iter"](a[2],fd[3]);
        a[5](Arch["size_addr"]);
        if(!Debuginfo["is_none"](fd[4]))
         {var d=fd[4];
          
          var line=Pervasives["min"](1048575,d[3]);
          
          var char_start=Pervasives["min"](255,d[4]);
          
          var char_end=Pervasives["min"](1023,d[5]);
          
          var match=d[1];
          
          if(match!=0){var kind=1;}else{var kind=0;}
          
          var info=(line<<44)+((char_start<<36)+((char_end<<26)+kind));
          
          a[6](label_filename(d[2]),"unknown primitive:int32_of_int64");
          return a[3]("unknown primitive:int32_of_int64");
          }
        else
         {return 0;}
        };
    
    var
     emit_filename=
      function(name,lbl){a[7](lbl);a[8](name);return a[5](Arch["size_addr"]);};
    
    a[4](List["length"](frame_descriptors[1]));
    List["iter"](emit_frame,frame_descriptors[1]);
    Hashtbl["iter"](emit_filename,filenames);
    return frame_descriptors[1]=0,0;
    };

var
 isprefix=
  function(s1,s2)
   {return s1["length"]<=s2["length"]&&"unknown primitive:caml_string_equal";};

var
 is_generic_function=
  function(name)
   {return List["exists"]
            (function(p){return isprefix(p,name);},
             [0,
              "caml_apply",
              [0,"caml_curry",[0,"caml_send",[0,"caml_tuplify",0]]]]);
    };

var is_cfi_enabled=function(param){return Config["asm_cfi_supported"];};

var
 cfi_startproc=
  function(param)
   {if(is_cfi_enabled(0))
     {return emit_string("\t.cfi_startproc\n");}
    else
     {return 0;}
    };

var
 cfi_endproc=
  function(param)
   {if(is_cfi_enabled(0))
     {return emit_string("\t.cfi_endproc\n");}
    else
     {return 0;}
    };

var
 cfi_adjust_cfa_offset=
  function(n)
   {if(is_cfi_enabled(0))
     {emit_string("\t.cfi_adjust_cfa_offset\t");
      emit_int(n);
      return emit_string("\n");
      }
    else
     {return 0;}
    };

var
 cfi_offset=
  function(reg,offset)
   {if(is_cfi_enabled(0))
     {emit_string("\t.cfi_offset ");
      emit_int(reg);
      emit_string(", ");
      emit_int(offset);
      return emit_string("\n");
      }
    else
     {return 0;}
    };

var file_pos_nums=[0,0];

var file_pos_num_cnt=[0,1];

var
 reset_debug_info=
  function(param){file_pos_nums[1]=0,0;return file_pos_num_cnt[1]=1,0;};

var
 emit_debug_info=
  function(dbg)
   {if
     (is_cfi_enabled(0)&&
      (Clflags["debug"][1]||Config["with_frame_pointers"])&&
      dbg[3]>
      0)
     {var line=dbg[3];
      
      var file_name=dbg[2];
      
      try
       {var file_num=List["assoc"](file_name,file_pos_nums[1]);}
      catch(exn)
       {if(exn=Not_found)
         {var file_num$1=file_pos_num_cnt[1];
          
          file_pos_num_cnt[0]++;
          emit_string("\t.file\t");
          emit_int(file_num$1);
          emit_char(9);
          emit_string_literal(file_name);
          emit_char(10);
          file_pos_nums[1]=
          /* :: */[0,/* tuple */[0,file_name,file_num$1],file_pos_nums[1]],
          0;
          var file_num=file_num$1;
          }
        else
         {throw exn;}
        }
      
      emit_string("\t.loc\t");
      emit_int(file_num);
      emit_char(9);
      emit_int(line);
      return emit_char(10);
      }
    else
     {return 0;}
    };

var
 reset=
  function(param){reset_debug_info(0);return frame_descriptors[1]=0,0;};

module["exports"]=
{"output_channel":output_channel,
 "emit_string":emit_string,
 "emit_int":emit_int,
 "emit_nativeint":emit_nativeint,
 "emit_int32":emit_int32,
 "emit_symbol":emit_symbol,
 "emit_printf":emit_printf,
 "emit_char":emit_char,
 "emit_string_literal":emit_string_literal,
 "emit_string_directive":emit_string_directive,
 "emit_bytes_directive":emit_bytes_directive,
 "emit_float64_directive":emit_float64_directive,
 "emit_float64_split_directive":emit_float64_split_directive,
 "emit_float32_directive":emit_float32_directive,
 "reset":reset,
 "reset_debug_info":reset_debug_info,
 "emit_debug_info":emit_debug_info,
 "frame_descriptors":frame_descriptors,
 "emit_frames":emit_frames,
 "is_generic_function":is_generic_function,
 "cfi_startproc":cfi_startproc,
 "cfi_endproc":cfi_endproc,
 "cfi_adjust_cfa_offset":cfi_adjust_cfa_offset,
 "cfi_offset":cfi_offset};

