// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var List=require("List");
var Clflags=require("Clflags");
var Emitaux=require("Emitaux");
var Debuginfo=require("Debuginfo");
var Compilenv=require("Compilenv");
var Misc=require("Misc");
var Proc=require("Proc");
var Arch=require("Arch");
var Linearize=require("Linearize");
var Config=require("Config");


var macosx="unknown primitive:caml_string_equal";

var mingw64="unknown primitive:caml_string_equal";

var cygwin="unknown primitive:caml_string_equal";

var fp=Config["with_frame_pointers"];

var fastcode_flag=[0,1];

var stack_offset=[0,0];

var
 frame_required=
  function(param)
   {return fp||
           Proc["contains_calls"][1]||
           Proc["num_stack_slots"][0]>
           0||
           Proc["num_stack_slots"][1]>
           0;
    };

var
 frame_size=
  function(param)
   {if(frame_required(0))
     {var
       sz=
        stack_offset[1]+
        8*
        (Proc["num_stack_slots"][0]+Proc["num_stack_slots"][1])+
        8+
        (fp?8:0);
      
      return Misc["align"](sz,16);
      }
    else
     {return stack_offset[1]+8;}
    };

var
 slot_offset=
  function(loc,cl)
   {switch(loc)
     {case 0:
       var n=loc[1];
       
       if(cl=0)
        {return stack_offset[1]+n*8;}
       else
        {return stack_offset[1]+(Proc["num_stack_slots"][0]+n)*8;}
       
      case 1:return frame_size(0)+loc[1];
      case 2:return loc[1];
      }
    };

var
 emit_symbol=
  function(s)
   {if(macosx){Emitaux["emit_string"]("_")}else{}
    
    return Emitaux["emit_symbol"](36,s);
    };

var
 emit_call=
  function(s)
   {if(Clflags["dlcode"][1]&&!macosx&&!mingw64&&!cygwin)
     {Emitaux["emit_string"]("call\t");
      emit_symbol(s);
      return Emitaux["emit_string"]("@PLT");
      }
    else
     {Emitaux["emit_string"]("call\t");return emit_symbol(s);}
    };

var
 emit_jump=
  function(s)
   {if(Clflags["dlcode"][1]&&!macosx&&!mingw64&&!cygwin)
     {Emitaux["emit_string"]("jmp\t");
      emit_symbol(s);
      return Emitaux["emit_string"]("@PLT");
      }
    else
     {Emitaux["emit_string"]("jmp\t");return emit_symbol(s);}
    };

var
 load_symbol_addr=
  function(s)
   {if(Clflags["dlcode"][1]&&!mingw64&&!cygwin)
     {Emitaux["emit_string"]("movq\t");
      emit_symbol(s);
      return Emitaux["emit_string"]("@GOTPCREL(%rip)");
      }
    else
     {if(Arch["pic_code"][1])
       {Emitaux["emit_string"]("leaq\t");
        emit_symbol(s);
        return Emitaux["emit_string"]("(%rip)");
        }
      else
       {Emitaux["emit_string"]("movq\t$");return emit_symbol(s);}
      }
    };

var
 emit_label=
  function(lbl){Emitaux["emit_string"](".L");return Emitaux["emit_int"](lbl);};

var
 emit_data_label=
  function(lbl)
   {Emitaux["emit_string"](".Ld");return Emitaux["emit_int"](lbl);};

var
 emit_align=
  function(n)
   {if(macosx){var n$1=Misc["log2"](n);}else{var n$1=n;}
    
    Emitaux["emit_string"]("\t.align\t");
    Emitaux["emit_int"](n$1);
    return Emitaux["emit_char"](10);
    };

var
 emit_Llabel=
  function(fallthrough,lbl)
   {if(!fallthrough&&fastcode_flag[1]){emit_align(4)}else{}
    
    return emit_label(lbl);
    };

var
 emit_reg=
  function(r)
   {var match=r[4];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:throw [0,Assert_failure,[0,"asmcomp/emit.ml",114,6]];}}
    else
     {switch(match[0])
       {case 0:return Emitaux["emit_string"](Proc["register_name"](match[1]));
        case 1:
         var ofs=slot_offset(match[1],Proc["register_class"](r));
         
         Emitaux["emit_int"](ofs);
         return Emitaux["emit_string"]("(%rsp)");
         
        }}
    };

var reg_low_8_name="unknown primitive:caml_obj_dup";

var reg_low_16_name="unknown primitive:caml_obj_dup";

var reg_low_32_name="unknown primitive:caml_obj_dup";

var
 emit_subreg=
  function(tbl,r)
   {var match=r[4];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=105;}}
    else
     {switch(match[0])
       {case 0:
         var r$1=match[1];
         
         if(r$1<13){return Emitaux["emit_string"](tbl[r$1]);}else{exit=105;}
         
        case 1:
         var ofs=slot_offset(match[1],Proc["register_class"](r));
         
         Emitaux["emit_int"](ofs);
         return Emitaux["emit_string"]("(%rsp)");
         
        }}
    
    switch(exit)
     {case 105:throw [0,Assert_failure,[0,"asmcomp/emit.ml",136,6]];}
    };

var emit_reg8=function(r){return emit_subreg(reg_low_8_name,r);};

var emit_reg16=function(r){return emit_subreg(reg_low_16_name,r);};

var emit_reg32=function(r){return emit_subreg(reg_low_32_name,r);};

var
 emit_addressing=
  function(addr,r,n)
   {switch(addr)
     {case 0:
       if(Clflags["dlcode"][1])
        {throw [0,Assert_failure,[0,"asmcomp/emit.ml",146,37]];}
       else
        {var d=addr[2];
         
         emit_symbol(addr[1]);
         if(d!=0){Emitaux["emit_string"](" + "),Emitaux["emit_int"](d)}else{}
         
         return Emitaux["emit_string"]("(%rip)");
         }
       
      case 1:
       var d$1=addr[1];
       
       if(d$1!=0){Emitaux["emit_int"](d$1)}else{}
       
       Emitaux["emit_char"](40);
       emit_reg(r[n]);
       return Emitaux["emit_char"](41);
       
      case 2:
       var d$2=addr[1];
       
       if(d$2!=0){Emitaux["emit_int"](d$2)}else{}
       
       Emitaux["emit_char"](40);
       emit_reg(r[n]);
       Emitaux["emit_string"](", ");
       emit_reg(r[n+1]);
       return Emitaux["emit_char"](41);
       
      case 3:
       var scale=addr[1];
       
       if(scale!=2)
        {var d$3=addr[2];
         
         if(d$3!=0){Emitaux["emit_int"](d$3)}else{}
         
         Emitaux["emit_string"]("(, ");
         emit_reg(r[n]);
         Emitaux["emit_string"](", ");
         Emitaux["emit_int"](scale);
         return Emitaux["emit_char"](41);
         }
       else
        {var d$4=addr[2];
         
         if(d$4!=0){Emitaux["emit_int"](d$4)}else{}
         
         Emitaux["emit_char"](40);
         emit_reg(r[n]);
         Emitaux["emit_string"](", ");
         emit_reg(r[n]);
         return Emitaux["emit_char"](41);
         }
       
      case 4:
       var d$5=addr[2];
       
       if(d$5!=0){Emitaux["emit_int"](d$5)}else{}
       
       Emitaux["emit_char"](40);
       emit_reg(r[n]);
       Emitaux["emit_string"](", ");
       emit_reg(r[n+1]);
       Emitaux["emit_string"](", ");
       Emitaux["emit_int"](addr[1]);
       return Emitaux["emit_char"](41);
       
      }
    };

var
 record_frame_label=
  function(live,dbg)
   {var lbl=Linearize["new_label"](0);
    
    var live_offset=[0,0];
    
    Reg["Set"][13]
     (function(reg)
       {var exit;
        
        if(reg[3]!=0)
         {exit=95;}
        else
         {var match=reg[4];
          
          if(typeof match=="number")
           {switch(match){case 0:exit=95;}}
          else
           {switch(match[0])
             {case 0:
               return live_offset[1]=
                      /* :: */[0,(match[1]<<1)+1,live_offset[1]],
                      0;
               
              case 1:
               return live_offset[1]=
                      /* :: */[0,
                       slot_offset(match[1],Proc["register_class"](reg)),
                       live_offset[1]],
                      0;
               
              }}
          }
        
        switch(exit){case 95:return 0;}
        },
      live);
    Emitaux["frame_descriptors"][1]=
    /* :: */[0,
     /* record */[0,lbl,frame_size(0),live_offset[1],dbg],
     Emitaux["frame_descriptors"][1]],
    0;
    return lbl;
    };

var
 record_frame=
  function(live,dbg)
   {var lbl=record_frame_label(live,dbg);
    
    emit_label(lbl);
    return Emitaux["emit_string"](":\n");
    };

var call_gc_sites=[0,0];

var
 emit_call_gc=
  function(gc)
   {emit_label(gc[1]),
    Emitaux["emit_string"](":\t"),
    emit_call("caml_call_gc"),
    Emitaux["emit_char"](10);
    emit_label(gc[3]);
    Emitaux["emit_string"](":\tjmp\t");
    emit_label(gc[2]);
    return Emitaux["emit_char"](10);
    };

var bound_error_sites=[0,0];

var bound_error_call=[0,0];

var
 bound_error_label=
  function(dbg)
   {if(Clflags["debug"][1])
     {var lbl_bound_error=Linearize["new_label"](0);
      
      var lbl_frame=record_frame_label(Reg["Set"][1],dbg);
      
      bound_error_sites[1]=
      /* :: */[0,
       /* record */[0,lbl_bound_error,lbl_frame],
       bound_error_sites[1]],
      0;
      return lbl_bound_error;
      }
    else
     {if(bound_error_call[1]=0)
       {bound_error_call[1]=Linearize["new_label"](0),0}
      else
       {}
      
      return bound_error_call[1];
      }
    };

var
 emit_call_bound_error=
  function(bd)
   {emit_label(bd[1]),
    Emitaux["emit_string"](":\t"),
    emit_call("caml_ml_array_bound_error"),
    Emitaux["emit_char"](10);
    emit_label(bd[2]);
    return Emitaux["emit_string"](":\n");
    };

var
 emit_call_bound_errors=
  function(param)
   {List["iter"](emit_call_bound_error,bound_error_sites[1]);
    if(bound_error_call[1]>0)
     {emit_label(bound_error_call[1]);
      Emitaux["emit_string"](":\t");
      emit_call("caml_ml_array_bound_error");
      return Emitaux["emit_char"](10);
      }
    else
     {return 0;}
    };

var
 instr_for_intop=
  function(param)
   {var exit;
    
    if("unknown primitive:isint")
     {switch(param[0])
       {case 0:return "addq";
        case 1:return "subq";
        case 2:return "imulq";
        case 3:exit=82;
        case 4:exit=82;
        case 5:exit=82;
        case 6:return "andq";
        case 7:return "orq";
        case 8:return "xorq";
        case 9:return "salq";
        case 10:return "shrq";
        case 11:return "sarq";
        case 12:exit=82;
        }
      }
    else
     {exit=82;}
    
    switch(exit)
     {case 82:throw [0,Assert_failure,[0,"asmcomp/emit.ml",247,9]];}
    };

var
 instr_for_floatop=
  function(param)
   {var exit;
    
    if("unknown primitive:isint")
     {switch(param[0])
       {case 0:exit=80;
        case 1:exit=80;
        case 2:exit=80;
        case 3:exit=80;
        case 4:exit=80;
        case 5:exit=80;
        case 6:exit=80;
        case 7:return "addsd";
        case 8:return "subsd";
        case 9:return "mulsd";
        case 10:return "divsd";
        case 11:exit=80;
        case 12:exit=80;
        }
      }
    else
     {exit=80;}
    
    switch(exit)
     {case 80:throw [0,Assert_failure,[0,"asmcomp/emit.ml",254,9]];}
    };

var
 instr_for_floatarithmem=
  function(param)
   {switch(param[0])
     {case 0:return "addsd";
      case 1:return "subsd";
      case 2:return "mulsd";
      case 3:return "divsd";
      }
    };

var
 name_for_cond_branch=
  function(param)
   {switch(param)
     {case 0:
       switch(param[1][0])
        {case 0:return "e";
         case 1:return "ne";
         case 2:return "l";
         case 3:return "le";
         case 4:return "g";
         case 5:return "ge";
         }
       
      case 1:
       switch(param[1][0])
        {case 0:return "e";
         case 1:return "ne";
         case 2:return "b";
         case 3:return "be";
         case 4:return "a";
         case 5:return "ae";
         }
       
      }
    };

var
 output_test_zero=
  function(arg)
   {var match=arg[4];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=76;}}
    else
     {switch(match[0])
       {case 0:
         Emitaux["emit_string"]("\ttestq\t");
         emit_reg(arg);
         Emitaux["emit_string"](", ");
         emit_reg(arg);
         return Emitaux["emit_char"](10);
         
        case 1:exit=76;
        }}
    
    switch(exit)
     {case 76:
       Emitaux["emit_string"]("\tcmpq\t$0, ");
       emit_reg(arg);
       return Emitaux["emit_char"](10);
       
      }
    };

var
 emit_float_test=
  function(cmp,neg,arg,lbl)
   {var exit;
    
    switch(cmp[0])
     {case 0:if(neg!=0){exit=74;}else{exit=73;}
      case 1:if(neg!=0){exit=73;}else{exit=74;}
      case 2:
       Emitaux["emit_string"]("\tcomisd\t"),
       emit_reg(arg[0]),
       Emitaux["emit_string"](", "),
       emit_reg(arg[1]),
       Emitaux["emit_char"](10);
       if(!neg)
        {Emitaux["emit_string"]("\tja\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       else
        {Emitaux["emit_string"]("\tjbe\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       
      case 3:
       Emitaux["emit_string"]("\tcomisd\t"),
       emit_reg(arg[0]),
       Emitaux["emit_string"](", "),
       emit_reg(arg[1]),
       Emitaux["emit_char"](10);
       if(!neg)
        {Emitaux["emit_string"]("\tjae\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       else
        {Emitaux["emit_string"]("\tjb\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       
      case 4:
       Emitaux["emit_string"]("\tcomisd\t"),
       emit_reg(arg[1]),
       Emitaux["emit_string"](", "),
       emit_reg(arg[0]),
       Emitaux["emit_char"](10);
       if(!neg)
        {Emitaux["emit_string"]("\tja\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       else
        {Emitaux["emit_string"]("\tjbe\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       
      case 5:
       Emitaux["emit_string"]("\tcomisd\t"),
       emit_reg(arg[1]),
       Emitaux["emit_string"](", "),
       emit_reg(arg[0]),
       Emitaux["emit_char"](10);
       if(!neg)
        {Emitaux["emit_string"]("\tjae\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       else
        {Emitaux["emit_string"]("\tjb\t");
         emit_label(lbl);
         return Emitaux["emit_char"](10);
         }
       
      }
    
    switch(exit)
     {case 73:
       var next=Linearize["new_label"](0);
       
       Emitaux["emit_string"]("\tucomisd\t"),
       emit_reg(arg[1]),
       Emitaux["emit_string"](", "),
       emit_reg(arg[0]),
       Emitaux["emit_char"](10);
       Emitaux["emit_string"]("\tjp\t"),
       emit_label(next),
       Emitaux["emit_char"](10);
       Emitaux["emit_string"]("\tje\t"),
       emit_label(lbl),
       Emitaux["emit_char"](10);
       emit_label(next);
       return Emitaux["emit_string"](":\n");
       
      case 74:
       Emitaux["emit_string"]("\tucomisd\t"),
       emit_reg(arg[1]),
       Emitaux["emit_string"](", "),
       emit_reg(arg[0]),
       Emitaux["emit_char"](10);
       Emitaux["emit_string"]("\tjp\t"),
       emit_label(lbl),
       Emitaux["emit_char"](10);
       Emitaux["emit_string"]("\tjne\t");
       emit_label(lbl);
       return Emitaux["emit_char"](10);
       
      }
    };

var
 output_epilogue=
  function(f)
   {if(frame_required(0))
     {var n=frame_size(0)-8-(fp?8:0);
      
      Emitaux["emit_string"]("\taddq\t$"),
      Emitaux["emit_int"](n),
      Emitaux["emit_string"](", %rsp\n");
      Emitaux["cfi_adjust_cfa_offset"](-n);
      if(fp){Emitaux["emit_string"]("\tpopq\t%rbp\n")}else{}
      
      f(0);
      return Emitaux["cfi_adjust_cfa_offset"](n);
      }
    else
     {return f(0);}
    };

var float_constants=[0,0];

var
 add_float_constant=
  function(cst)
   {var repr="unknown primitive:caml_int64_bits_of_float";
    
    try
     {return List["assoc"](repr,float_constants[1]);}
    catch(exn)
     {if(exn=Not_found)
       {var lbl=Linearize["new_label"](0);
        
        float_constants[1]=
        /* :: */[0,/* tuple */[0,repr,lbl],float_constants[1]],
        0;
        return lbl;
        }
      else
       {throw exn;}
      }
    };

var
 emit_float_constant=
  function(param)
   {emit_label(param[2]),Emitaux["emit_char"](58);
    return Emitaux["emit_float64_directive"](".quad",param[1]);
    };

var function_name=[0,""];

var tailrec_entry_point=[0,0];

var
 emit_instr=
  function(fallthrough,i)
   {Emitaux["emit_debug_info"](i[5]);
    var match=i[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match)
       {case 0:exit=60;
        case 1:exit=60;
        case 2:
         return output_epilogue
                 (function(param){return Emitaux["emit_string"]("\tret\n");});
         
        case 3:
         Emitaux["cfi_adjust_cfa_offset"](8);
         Emitaux["emit_string"]("\tpushq\t%r14\n");
         Emitaux["cfi_adjust_cfa_offset"](8);
         Emitaux["emit_string"]("\tmovq\t%rsp, %r14\n");
         return stack_offset[1]=stack_offset[1]+16,0;
         
        case 4:
         Emitaux["emit_string"]("\tpopq\t%r14\n");
         Emitaux["cfi_adjust_cfa_offset"](-8);
         Emitaux["emit_string"]("\taddq\t$8, %rsp\n");
         Emitaux["cfi_adjust_cfa_offset"](-8);
         return stack_offset[1]=stack_offset[1]-16,0;
         
        }}
    else
     {switch(match[0])
       {case 0:
         var floatop=match[1];
         
         var exit$1;
         
         if(typeof floatop=="number")
          {switch(floatop)
            {case 0:exit$1=49;
             case 1:exit$1=49;
             case 2:exit$1=49;
             case 3:
              Emitaux["emit_string"]("\tcall\t*"),
              emit_reg(i[3][0]),
              Emitaux["emit_char"](10);
              return record_frame(i[6],i[5]);
              
             case 4:
              return output_epilogue
                      (function(param)
                        {Emitaux["emit_string"]("\tjmp\t*");
                         emit_reg(i[3][0]);
                         return Emitaux["emit_char"](10);
                         });
              
             case 5:
              Emitaux["emit_string"]("\txorpd\t");
              emit_symbol("caml_negf_mask");
              Emitaux["emit_string"]("(%rip), ");
              emit_reg(i[4][0]);
              return Emitaux["emit_char"](10);
              
             case 6:
              Emitaux["emit_string"]("\tandpd\t");
              emit_symbol("caml_absf_mask");
              Emitaux["emit_string"]("(%rip), ");
              emit_reg(i[4][0]);
              return Emitaux["emit_char"](10);
              
             case 11:
              Emitaux["emit_string"]("\tcvtsi2sdq\t");
              emit_reg(i[3][0]);
              Emitaux["emit_string"](", ");
              emit_reg(i[4][0]);
              return Emitaux["emit_char"](10);
              
             case 12:
              Emitaux["emit_string"]("\tcvttsd2siq\t");
              emit_reg(i[3][0]);
              Emitaux["emit_string"](", ");
              emit_reg(i[4][0]);
              return Emitaux["emit_char"](10);
              
             }}
         else
          {switch(floatop[0])
            {case 0:exit$1=59;
             case 1:
              var f=floatop[1];
              
              var match$1="unknown primitive:caml_int64_bits_of_float";
              
              if(match$1!=0)
               {var lbl=add_float_constant(f);
                
                Emitaux["emit_string"]("\tmovsd\t");
                emit_label(lbl);
                Emitaux["emit_string"]("(%rip), ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              else
               {Emitaux["emit_string"]("\txorpd\t");
                emit_reg(i[4][0]);
                Emitaux["emit_string"](", ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              
             case 2:
              Emitaux["emit_char"](9);
              load_symbol_addr(floatop[1]);
              Emitaux["emit_string"](", ");
              emit_reg(i[4][0]);
              return Emitaux["emit_char"](10);
              
             case 3:exit$1=59;
             case 4:
              Emitaux["emit_char"](9),
              emit_call(floatop[1]),
              Emitaux["emit_char"](10);
              return record_frame(i[6],i[5]);
              
             case 5:
              var s=floatop[1];
              
              if("unknown primitive:caml_string_equal")
               {Emitaux["emit_string"]("\tjmp\t");
                emit_label(tailrec_entry_point[1]);
                return Emitaux["emit_char"](10);
                }
              else
               {return output_epilogue
                        (function(param)
                          {Emitaux["emit_char"](9);
                           emit_jump(s);
                           return Emitaux["emit_char"](10);
                           });
                }
              
             case 6:
              var s$1=floatop[1];
              
              if(floatop[2])
               {Emitaux["emit_char"](9),
                load_symbol_addr(s$1),
                Emitaux["emit_string"](", %rax\n");
                Emitaux["emit_char"](9),
                emit_call("caml_c_call"),
                Emitaux["emit_char"](10);
                record_frame(i[6],i[5]);
                Emitaux["emit_char"](9),
                load_symbol_addr("caml_young_ptr"),
                Emitaux["emit_string"](", %r11\n");
                return Emitaux["emit_string"]("\tmovq    (%r11), %r15\n");
                }
              else
               {Emitaux["emit_char"](9);
                emit_call(s$1);
                return Emitaux["emit_char"](10);
                }
              
             case 7:
              var n=floatop[1];
              
              if(n<0)
               {Emitaux["emit_string"]("\taddq\t$"),
                Emitaux["emit_int"](-n),
                Emitaux["emit_string"](", %rsp\n")}
              else
               {Emitaux["emit_string"]("\tsubq\t$"),
                Emitaux["emit_int"](n),
                Emitaux["emit_string"](", %rsp\n")}
              
              Emitaux["cfi_adjust_cfa_offset"](n);
              return stack_offset[1]=stack_offset[1]+n,0;
              
             case 8:
              var addr=floatop[2];
              
              var dest=i[4][0];
              
              var exit$2;
              
              switch(floatop[1][0])
               {case 0:
                 Emitaux["emit_string"]("\tmovzbq\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 1:
                 Emitaux["emit_string"]("\tmovsbq\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 2:
                 Emitaux["emit_string"]("\tmovzwq\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 3:
                 Emitaux["emit_string"]("\tmovswq\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 4:
                 Emitaux["emit_string"]("\tmovl\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg32(dest);
                 return Emitaux["emit_char"](10);
                 
                case 5:
                 Emitaux["emit_string"]("\tmovslq\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 6:
                 Emitaux["emit_string"]("\tmovq\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 7:
                 Emitaux["emit_string"]("\tcvtss2sd ");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                case 8:exit$2=26;
                case 9:exit$2=26;
                }
              
              switch(exit$2)
               {case 26:
                 Emitaux["emit_string"]("\tmovsd\t");
                 emit_addressing(addr,i[3],0);
                 Emitaux["emit_string"](", ");
                 emit_reg(dest);
                 return Emitaux["emit_char"](10);
                 
                }
              
             case 9:
              var addr$1=floatop[2];
              
              var exit$3;
              
              switch(floatop[1][0])
               {case 0:exit$3=28;
                case 1:exit$3=28;
                case 2:exit$3=29;
                case 3:exit$3=29;
                case 4:exit$3=30;
                case 5:exit$3=30;
                case 6:
                 Emitaux["emit_string"]("\tmovq\t");
                 emit_reg(i[3][0]);
                 Emitaux["emit_string"](", ");
                 emit_addressing(addr$1,i[3],1);
                 return Emitaux["emit_char"](10);
                 
                case 7:
                 Emitaux["emit_string"]("\tcvtsd2ss "),
                 emit_reg(i[3][0]),
                 Emitaux["emit_string"](", %xmm15\n");
                 Emitaux["emit_string"]("\tmovss\t%xmm15, ");
                 emit_addressing(addr$1,i[3],1);
                 return Emitaux["emit_char"](10);
                 
                case 8:exit$3=31;
                case 9:exit$3=31;
                }
              
              switch(exit$3)
               {case 28:
                 Emitaux["emit_string"]("\tmovb\t");
                 emit_reg8(i[3][0]);
                 Emitaux["emit_string"](", ");
                 emit_addressing(addr$1,i[3],1);
                 return Emitaux["emit_char"](10);
                 
                case 29:
                 Emitaux["emit_string"]("\tmovw\t");
                 emit_reg16(i[3][0]);
                 Emitaux["emit_string"](", ");
                 emit_addressing(addr$1,i[3],1);
                 return Emitaux["emit_char"](10);
                 
                case 30:
                 Emitaux["emit_string"]("\tmovl\t");
                 emit_reg32(i[3][0]);
                 Emitaux["emit_string"](", ");
                 emit_addressing(addr$1,i[3],1);
                 return Emitaux["emit_char"](10);
                 
                case 31:
                 Emitaux["emit_string"]("\tmovsd\t");
                 emit_reg(i[3][0]);
                 Emitaux["emit_string"](", ");
                 emit_addressing(addr$1,i[3],1);
                 return Emitaux["emit_char"](10);
                 
                }
              
             case 10:
              var n$1=floatop[1];
              
              if(fastcode_flag[1])
               {var lbl_redo=Linearize["new_label"](0);
                
                emit_label(lbl_redo),
                Emitaux["emit_string"](":\tsubq\t$"),
                Emitaux["emit_int"](n$1),
                Emitaux["emit_string"](", %r15\n");
                if(Clflags["dlcode"][1])
                 {Emitaux["emit_char"](9),
                  load_symbol_addr("caml_young_limit"),
                  Emitaux["emit_string"](", %rax\n"),
                  Emitaux["emit_string"]("\tcmpq\t(%rax), %r15\n")}
                else
                 {Emitaux["emit_string"]("\tcmpq\t"),
                  emit_symbol("caml_young_limit"),
                  Emitaux["emit_string"]("(%rip), %r15\n")}
                
                var lbl_call_gc=Linearize["new_label"](0);
                
                var lbl_frame=record_frame_label(i[6],Debuginfo["none"]);
                
                Emitaux["emit_string"]("\tjb\t"),
                emit_label(lbl_call_gc),
                Emitaux["emit_char"](10);
                Emitaux["emit_string"]("\tleaq\t8(%r15), "),
                emit_reg(i[4][0]),
                Emitaux["emit_char"](10);
                return call_gc_sites[1]=
                       /* :: */[0,
                        /* record */[0,lbl_call_gc,lbl_redo,lbl_frame],
                        call_gc_sites[1]],
                       0;
                }
              else
               {if(n$1!=16)
                 {if(n$1!=24)
                   {if(n$1!=32)
                     {Emitaux["emit_string"]("\tmovq\t$"),
                      Emitaux["emit_int"](n$1),
                      Emitaux["emit_string"](", %rax\n"),
                      Emitaux["emit_char"](9),
                      emit_call("caml_allocN"),
                      Emitaux["emit_char"](10)}
                    else
                     {Emitaux["emit_char"](9),
                      emit_call("caml_alloc3"),
                      Emitaux["emit_char"](10)}
                    }
                  else
                   {Emitaux["emit_char"](9),
                    emit_call("caml_alloc2"),
                    Emitaux["emit_char"](10)}
                  }
                else
                 {Emitaux["emit_char"](9),
                  emit_call("caml_alloc1"),
                  Emitaux["emit_char"](10)}
                
                record_frame(i[6],Debuginfo["none"]);
                Emitaux["emit_string"]("\tleaq\t8(%r15), ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              
             case 11:
              var op=floatop[1];
              
              var exit$4;
              
              if("unknown primitive:isint")
               {switch(op[0])
                 {case 0:exit$4=56;
                  case 1:exit$4=56;
                  case 2:exit$4=56;
                  case 3:
                   Emitaux["emit_string"]("\timulq\t");
                   emit_reg(i[3][1]);
                   return Emitaux["emit_char"](10);
                   
                  case 4:exit$4=54;
                  case 5:exit$4=54;
                  case 6:exit$4=56;
                  case 7:exit$4=56;
                  case 8:exit$4=56;
                  case 9:exit$4=55;
                  case 10:exit$4=55;
                  case 11:exit$4=55;
                  case 12:
                   var lbl$1=bound_error_label(i[5]);
                   
                   Emitaux["emit_string"]("\tcmpq\t"),
                   emit_reg(i[3][1]),
                   Emitaux["emit_string"](", "),
                   emit_reg(i[3][0]),
                   Emitaux["emit_char"](10);
                   Emitaux["emit_string"]("\tjbe\t");
                   emit_label(lbl$1);
                   return Emitaux["emit_char"](10);
                   
                  }
                }
              else
               {Emitaux["emit_string"]("\tcmpq\t"),
                emit_reg(i[3][1]),
                Emitaux["emit_string"](", "),
                emit_reg(i[3][0]),
                Emitaux["emit_char"](10);
                var b=name_for_cond_branch(op[1]);
                
                Emitaux["emit_string"]("\tset"),
                Emitaux["emit_string"](b),
                Emitaux["emit_string"]("\t%al\n");
                Emitaux["emit_string"]("\tmovzbq\t%al, ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              
              switch(exit$4)
               {case 56:
                 Emitaux["emit_char"](9);
                 Emitaux["emit_string"](instr_for_intop(op));
                 Emitaux["emit_char"](9);
                 emit_reg(i[3][1]);
                 Emitaux["emit_string"](", ");
                 emit_reg(i[4][0]);
                 return Emitaux["emit_char"](10);
                 
                case 54:
                 Emitaux["emit_string"]("\tcqto\n");
                 Emitaux["emit_string"]("\tidivq\t");
                 emit_reg(i[3][1]);
                 return Emitaux["emit_char"](10);
                 
                case 55:
                 Emitaux["emit_char"](9);
                 Emitaux["emit_string"](instr_for_intop(op));
                 Emitaux["emit_string"]("\t%cl, ");
                 emit_reg(i[4][0]);
                 return Emitaux["emit_char"](10);
                 
                }
              
             case 12:
              var op$1=floatop[1];
              
              var exit$5;
              
              if("unknown primitive:isint")
               {if(op$1>=2)
                 {if(op$1>=12)
                   {var lbl$2=bound_error_label(i[5]);
                    
                    Emitaux["emit_string"]("\tcmpq\t$"),
                    Emitaux["emit_int"](floatop[2]),
                    Emitaux["emit_string"](", "),
                    emit_reg(i[3][0]),
                    Emitaux["emit_char"](10);
                    Emitaux["emit_string"]("\tjbe\t");
                    emit_label(lbl$2);
                    return Emitaux["emit_char"](10);
                    }
                  else
                   {exit$5=57;}
                  }
                else
                 {if(op$1!=0)
                   {var switcher=1+floatop[2];
                    
                    if(2<switcher>>>0)
                     {exit$5=57;}
                    else
                     {switch(switcher[0])
                       {case 0:exit$1=51;case 1:exit$5=57;case 2:exit$1=52;}
                      }
                    }
                  else
                   {var n$2=floatop[2];
                    
                    if("unknown primitive:caml_notequal")
                     {Emitaux["emit_string"]("\tleaq\t");
                      Emitaux["emit_int"](n$2);
                      Emitaux["emit_char"](40);
                      emit_reg(i[3][0]);
                      Emitaux["emit_string"]("), ");
                      emit_reg(i[4][0]);
                      return Emitaux["emit_char"](10);
                      }
                    else
                     {var switcher$1=1+n$2;
                      
                      if(2<switcher$1>>>0)
                       {exit$5=57;}
                      else
                       {switch(switcher$1[0])
                         {case 0:exit$1=52;case 1:exit$5=57;case 2:exit$1=51;}
                        }
                      }
                    }
                  }
                }
              else
               {Emitaux["emit_string"]("\tcmpq\t$"),
                Emitaux["emit_int"](floatop[2]),
                Emitaux["emit_string"](", "),
                emit_reg(i[3][0]),
                Emitaux["emit_char"](10);
                var b$1=name_for_cond_branch(op$1[1]);
                
                Emitaux["emit_string"]("\tset"),
                Emitaux["emit_string"](b$1),
                Emitaux["emit_string"]("\t%al\n");
                Emitaux["emit_string"]("\tmovzbq\t%al, ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              
              switch(exit$5)
               {case 57:
                 Emitaux["emit_char"](9);
                 Emitaux["emit_string"](instr_for_intop(op$1));
                 Emitaux["emit_string"]("\t$");
                 Emitaux["emit_int"](floatop[2]);
                 Emitaux["emit_string"](", ");
                 emit_reg(i[4][0]);
                 return Emitaux["emit_char"](10);
                 
                }
              
             case 13:
              var match$2=floatop[1];
              
              if(typeof match$2=="number")
               {switch(match$2)
                 {case 0:
                   Emitaux["emit_string"]("\tsqrtsd\t");
                   emit_reg(i[3][0]);
                   Emitaux["emit_string"](", ");
                   emit_reg(i[4][0]);
                   return Emitaux["emit_char"](10);
                   
                  }}
              else
               {switch(match$2[0])
                 {case 0:
                   Emitaux["emit_string"]("\tleaq\t");
                   emit_addressing(match$2[1],i[3],0);
                   Emitaux["emit_string"](", ");
                   emit_reg(i[4][0]);
                   return Emitaux["emit_char"](10);
                   
                  case 1:
                   Emitaux["emit_string"]("\tmovq\t$");
                   Emitaux["emit_nativeint"](match$2[1]);
                   Emitaux["emit_string"](", ");
                   emit_addressing(match$2[2],i[3],0);
                   return Emitaux["emit_char"](10);
                   
                  case 2:
                   if(!Arch["pic_code"][1]&&!Clflags["dlcode"][1])
                    {}
                   else
                    {throw [0,Assert_failure,[0,"asmcomp/emit.ml",554,8]];}
                   
                   Emitaux["emit_string"]("\tmovq\t$");
                   emit_symbol(match$2[1]);
                   Emitaux["emit_string"](", ");
                   emit_addressing(match$2[2],i[3],0);
                   return Emitaux["emit_char"](10);
                   
                  case 3:
                   Emitaux["emit_string"]("\taddq\t$");
                   Emitaux["emit_int"](match$2[1]);
                   Emitaux["emit_string"](", ");
                   emit_addressing(match$2[2],i[3],0);
                   return Emitaux["emit_char"](10);
                   
                  case 4:
                   Emitaux["emit_char"](9);
                   Emitaux["emit_string"](instr_for_floatarithmem(match$2[1]));
                   Emitaux["emit_char"](9);
                   emit_addressing(match$2[2],i[3],1);
                   Emitaux["emit_string"](", ");
                   emit_reg(i[4][0]);
                   return Emitaux["emit_char"](10);
                   
                  case 5:
                   var size=match$2[1];
                   
                   if(size!=16)
                    {if(size!=32)
                      {if(size!=64)
                        {throw [0,Assert_failure,[0,"asmcomp/emit.ml",570,14]];}
                       else
                        {Emitaux["emit_string"]("\tbswap\t");
                         emit_reg(i[4][0]);
                         return Emitaux["emit_char"](10);
                         }
                       }
                     else
                      {Emitaux["emit_string"]("\tbswap\t"),
                       emit_reg32(i[4][0]),
                       Emitaux["emit_char"](10);
                       Emitaux["emit_string"]("\tmovslq\t");
                       emit_reg32(i[4][0]);
                       Emitaux["emit_string"](", ");
                       emit_reg(i[4][0]);
                       return Emitaux["emit_char"](10);
                       }
                     }
                   else
                    {Emitaux["emit_string"]("\txchg\t%ah, %al\n");
                     Emitaux["emit_string"]("\tmovzwq\t");
                     emit_reg16(i[4][0]);
                     Emitaux["emit_string"](", ");
                     emit_reg(i[4][0]);
                     return Emitaux["emit_char"](10);
                     }
                   
                  case 6:
                   Emitaux["emit_string"]("\tsqrtsd\t");
                   emit_addressing(match$2[1],i[3],0);
                   Emitaux["emit_string"](", ");
                   emit_reg(i[4][0]);
                   return Emitaux["emit_char"](10);
                   
                  }}
              
             default:
              Emitaux["emit_char"](9);
              Emitaux["emit_string"](instr_for_floatop(floatop));
              Emitaux["emit_char"](9);
              emit_reg(i[3][1]);
              Emitaux["emit_string"](", ");
              emit_reg(i[4][0]);
              return Emitaux["emit_char"](10);
              }}
         
         switch(exit$1)
          {case 59:
            var n$3=floatop[1];
            
            if(n$3=0)
             {var match$3=i[4][0][4];
              
              var exit$6;
              
              if(typeof match$3=="number")
               {switch(match$3){case 0:exit$6=23;}}
              else
               {switch(match$3[0])
                 {case 0:
                   Emitaux["emit_string"]("\txorq\t");
                   emit_reg(i[4][0]);
                   Emitaux["emit_string"](", ");
                   emit_reg(i[4][0]);
                   return Emitaux["emit_char"](10);
                   
                  case 1:exit$6=23;
                  }}
              
              switch(exit$6)
               {case 23:
                 Emitaux["emit_string"]("\tmovq\t$0, ");
                 emit_reg(i[4][0]);
                 return Emitaux["emit_char"](10);
                 
                }
              }
            else
             {if(n$3<=2147483647&&n$3>=-2147483648)
               {Emitaux["emit_string"]("\tmovq\t$");
                Emitaux["emit_nativeint"](n$3);
                Emitaux["emit_string"](", ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              else
               {Emitaux["emit_string"]("\tmovabsq\t$");
                Emitaux["emit_nativeint"](n$3);
                Emitaux["emit_string"](", ");
                emit_reg(i[4][0]);
                return Emitaux["emit_char"](10);
                }
              }
            
           case 49:
            var src=i[3][0];
            
            var dst=i[4][0];
            
            if("unknown primitive:caml_notequal")
             {var match$4=src[3];
              
              var match$5=src[4];
              
              var match$6=dst[4];
              
              if(match$4>=2)
               {var exit$7;
                
                if(typeof match$5=="number")
                 {switch(match$5){case 0:exit$7=20;}}
                else
                 {switch(match$5[0])
                   {case 0:
                     if(typeof match$6=="number")
                      {switch(match$6){case 0:exit$7=20;}}
                     else
                      {switch(match$6[0])
                        {case 0:
                          Emitaux["emit_string"]("\tmovapd\t");
                          emit_reg(src);
                          Emitaux["emit_string"](", ");
                          emit_reg(dst);
                          return Emitaux["emit_char"](10);
                          
                         case 1:exit$7=20;
                         }}
                     
                    case 1:exit$7=20;
                    }}
                
                switch(exit$7)
                 {case 20:
                   Emitaux["emit_string"]("\tmovsd\t");
                   emit_reg(src);
                   Emitaux["emit_string"](", ");
                   emit_reg(dst);
                   return Emitaux["emit_char"](10);
                   
                  }
                }
              else
               {Emitaux["emit_string"]("\tmovq\t");
                emit_reg(src);
                Emitaux["emit_string"](", ");
                emit_reg(dst);
                return Emitaux["emit_char"](10);
                }
              }
            else
             {return 0;}
            
           case 51:
            Emitaux["emit_string"]("\tincq\t");
            emit_reg(i[4][0]);
            return Emitaux["emit_char"](10);
            
           case 52:
            Emitaux["emit_string"]("\tdecq\t");
            emit_reg(i[4][0]);
            return Emitaux["emit_char"](10);
            
           }
         
        case 1:
         emit_Llabel(fallthrough,match[1]);
         return Emitaux["emit_string"](":\n");
         
        case 2:
         Emitaux["emit_string"]("\tjmp\t");
         emit_label(match[1]);
         return Emitaux["emit_char"](10);
         
        case 3:
         var lbl$3=match[2];
         
         var tst=match[1];
         
         if(typeof tst=="number")
          {switch(tst)
            {case 0:
              output_test_zero(i[3][0]);
              Emitaux["emit_string"]("\tjne\t");
              emit_label(lbl$3);
              return Emitaux["emit_char"](10);
              
             case 1:
              output_test_zero(i[3][0]);
              Emitaux["emit_string"]("\tje\t");
              emit_label(lbl$3);
              return Emitaux["emit_char"](10);
              
             case 2:
              Emitaux["emit_string"]("\ttestb\t$1, "),
              emit_reg8(i[3][0]),
              Emitaux["emit_char"](10);
              Emitaux["emit_string"]("\tjne\t");
              emit_label(lbl$3);
              return Emitaux["emit_char"](10);
              
             case 3:
              Emitaux["emit_string"]("\ttestb\t$1, "),
              emit_reg8(i[3][0]),
              Emitaux["emit_char"](10);
              Emitaux["emit_string"]("\tje\t");
              emit_label(lbl$3);
              return Emitaux["emit_char"](10);
              
             }}
         else
          {switch(tst[0])
            {case 0:
              Emitaux["emit_string"]("\tcmpq\t"),
              emit_reg(i[3][1]),
              Emitaux["emit_string"](", "),
              emit_reg(i[3][0]),
              Emitaux["emit_char"](10);
              var b$2=name_for_cond_branch(tst[1]);
              
              Emitaux["emit_string"]("\tj");
              Emitaux["emit_string"](b$2);
              Emitaux["emit_char"](9);
              emit_label(lbl$3);
              return Emitaux["emit_char"](10);
              
             case 1:
              var cmp=tst[1];
              
              var exit$8;
              
              if(cmp[1]>=2)
               {exit$8=44;}
              else
               {if(tst[2]!=0)
                 {exit$8=44;}
                else
                 {output_test_zero(i[3][0]);
                  var b$3=name_for_cond_branch(cmp);
                  
                  Emitaux["emit_string"]("\tj");
                  Emitaux["emit_string"](b$3);
                  Emitaux["emit_char"](9);
                  emit_label(lbl$3);
                  return Emitaux["emit_char"](10);
                  }
                }
              
              switch(exit$8)
               {case 44:
                 Emitaux["emit_string"]("\tcmpq\t$"),
                 Emitaux["emit_int"](tst[2]),
                 Emitaux["emit_string"](", "),
                 emit_reg(i[3][0]),
                 Emitaux["emit_char"](10);
                 var b$4=name_for_cond_branch(cmp);
                 
                 Emitaux["emit_string"]("\tj");
                 Emitaux["emit_string"](b$4);
                 Emitaux["emit_char"](9);
                 emit_label(lbl$3);
                 return Emitaux["emit_char"](10);
                 
                }
              
             case 2:return emit_float_test(tst[1],tst[2],i[3],lbl$3);
             }}
         
        case 4:
         var lbl2=match[3];
         
         var lbl1=match[2];
         
         var lbl0=match[1];
         
         Emitaux["emit_string"]("\tcmpq\t$1, "),
         emit_reg(i[3][0]),
         Emitaux["emit_char"](10);
         if(lbl0)
          {Emitaux["emit_string"]("\tjb\t"),
           emit_label(lbl0[1]),
           Emitaux["emit_char"](10)}
         else
          {}
         
         if(lbl1)
          {Emitaux["emit_string"]("\tje\t"),
           emit_label(lbl1[1]),
           Emitaux["emit_char"](10)}
         else
          {}
         
         if(lbl2)
          {Emitaux["emit_string"]("\tjg\t");
           emit_label(lbl2[1]);
           return Emitaux["emit_char"](10);
           }
         else
          {return 0;}
         
        case 5:
         var jumptbl=match[1];
         
         var lbl$4=Linearize["new_label"](0);
         
         if("unknown primitive:caml_equal")
          {var match$7=/* tuple */[0,Proc["phys_reg"](4),Proc["phys_reg"](0)];
           }
         else
          {var match$7=/* tuple */[0,Proc["phys_reg"](0),Proc["phys_reg"](4)];
           }
         
         var tmp2=match$7[2];
         
         var tmp1=match$7[1];
         
         Emitaux["emit_string"]("\tleaq\t"),
         emit_label(lbl$4),
         Emitaux["emit_string"]("(%rip), "),
         emit_reg(tmp1),
         Emitaux["emit_char"](10);
         Emitaux["emit_string"]("\tmovslq\t("),
         emit_reg(tmp1),
         Emitaux["emit_string"](", "),
         emit_reg(i[3][0]),
         Emitaux["emit_string"](", 4), "),
         emit_reg(tmp2),
         Emitaux["emit_char"](10);
         Emitaux["emit_string"]("\taddq\t"),
         emit_reg(tmp2),
         Emitaux["emit_string"](", "),
         emit_reg(tmp1),
         Emitaux["emit_char"](10);
         Emitaux["emit_string"]("\tjmp\t*"),
         emit_reg(tmp1),
         Emitaux["emit_char"](10);
         if(macosx)
          {Emitaux["emit_string"]("\t.const\n")}
         else
          {if(mingw64||cygwin)
            {Emitaux["emit_string"]('\t.section .rdata,"dr"\n')}
           else
            {Emitaux["emit_string"]("\t.section .rodata\n")}
           }
         
         emit_align(4);
         emit_label(lbl$4),Emitaux["emit_char"](58);
         for(var i$1=0;i$1<=jumptbl["length"]-1;i$1++)
          {Emitaux["emit_string"]("\t.long\t"),
           emit_label(jumptbl[i$1]),
           Emitaux["emit_string"](" - "),
           emit_label(lbl$4),
           Emitaux["emit_char"](10)}
         
         return Emitaux["emit_string"]("\t.text\n");
         
        case 6:
         Emitaux["emit_string"]("\tcall\t");
         emit_label(match[1]);
         return Emitaux["emit_char"](10);
         
        case 7:
         var match$8=Clflags["debug"][1];
         
         var exit$9;
         
         if(match$8!=0)
          {switch(match[1][0])
            {case 0:
              Emitaux["emit_char"](9),
              emit_call("caml_raise_exn"),
              Emitaux["emit_char"](10);
              return record_frame(Reg["Set"][1],i[5]);
              
             case 1:
              Emitaux["emit_char"](9),
              emit_call("caml_reraise_exn"),
              Emitaux["emit_char"](10);
              return record_frame(Reg["Set"][1],i[5]);
              
             case 2:exit$9=48;
             }
           }
         else
          {exit$9=48;}
         
         switch(exit$9)
          {case 48:
            Emitaux["emit_string"]("\tmovq\t%r14, %rsp\n");
            Emitaux["emit_string"]("\tpopq\t%r14\n");
            return Emitaux["emit_string"]("\tret\n");
            
           }
         
        }}
    
    switch(exit){case 60:return 0;}
    };

var
 emit_all=
  function(fallthrough,i)
   {var match=i[1];
    
    var exit;
    
    if("unknown primitive:isint")
     {if(match!=0){exit=18;}else{return 0;}}
    else
     {exit=18;}
    
    switch(exit)
     {case 18:
       emit_instr(fallthrough,i);
       return emit_all(Linearize["has_fallthrough"](i[1]),i[2]);
       
      }
    };

var
 emit_profile=
  function(param)
   {var match=Config["system"];
    
    var exit;
    
    switch(match){case "gnu":exit=15;case "linux":exit=15;default:exit=16;}
    
    switch(exit)
     {case 16:return 0;
      case 15:
       Emitaux["emit_string"]("\tpushq\t%r10\n");
       if(!fp){Emitaux["emit_string"]("\tmovq\t%rsp, %rbp\n")}else{}
       
       Emitaux["emit_char"](9),emit_call("mcount"),Emitaux["emit_char"](10);
       return Emitaux["emit_string"]("\tpopq\t%r10\n");
       
      }
    };

var
 fundecl=
  function(fundecl$1)
   {function_name[1]=fundecl$1[1],0;
    fastcode_flag[1]=fundecl$1[3],0;
    tailrec_entry_point[1]=Linearize["new_label"](0),0;
    stack_offset[1]=0,0;
    call_gc_sites[1]=0,0;
    bound_error_sites[1]=0,0;
    bound_error_call[1]=0,0;
    Emitaux["emit_string"]("\t.text\n");
    emit_align(16);
    if
     (macosx&&
      !Clflags["output_c_object"][1]&&
      Emitaux["is_generic_function"](fundecl$1[1]))
     {Emitaux["emit_string"]("\t.private_extern\t"),
      emit_symbol(fundecl$1[1]),
      Emitaux["emit_char"](10)}
    else
     {Emitaux["emit_string"]("\t.globl\t"),
      emit_symbol(fundecl$1[1]),
      Emitaux["emit_char"](10)}
    
    emit_symbol(fundecl$1[1]),Emitaux["emit_string"](":\n");
    Emitaux["emit_debug_info"](fundecl$1[4]);
    Emitaux["cfi_startproc"](0);
    if(fp)
     {Emitaux["emit_string"]("\tpushq\t%rbp\n"),
      Emitaux["cfi_adjust_cfa_offset"](8),
      Emitaux["emit_string"]("\tmovq\t%rsp, %rbp\n")}
    else
     {}
    
    if(Clflags["gprofile"][1]){emit_profile(0)}else{}
    
    if(frame_required(0))
     {var n=frame_size(0)-8-(fp?8:0);
      
      Emitaux["emit_string"]("\tsubq\t$"),
      Emitaux["emit_int"](n),
      Emitaux["emit_string"](", %rsp\n"),
      Emitaux["cfi_adjust_cfa_offset"](n)}
    else
     {}
    
    emit_label(tailrec_entry_point[1]),Emitaux["emit_string"](":\n");
    emit_all(1,fundecl$1[2]);
    List["iter"](emit_call_gc,call_gc_sites[1]);
    emit_call_bound_errors(0);
    Emitaux["cfi_endproc"](0);
    var match=Config["system"];
    
    var exit;
    
    switch(match){case "gnu":exit=11;case "linux":exit=11;default:exit=12;}
    
    switch(exit)
     {case 12:return 0;
      case 11:
       Emitaux["emit_string"]("\t.type\t"),
       emit_symbol(fundecl$1[1]),
       Emitaux["emit_string"](",@function\n");
       Emitaux["emit_string"]("\t.size\t");
       emit_symbol(fundecl$1[1]);
       Emitaux["emit_string"](",.-");
       emit_symbol(fundecl$1[1]);
       return Emitaux["emit_char"](10);
       
      }
    };

var
 emit_item=
  function(param)
   {switch(param)
     {case 0:emit_symbol(param[1]);return Emitaux["emit_string"](":\n");
      case 1:emit_data_label(param[1]);return Emitaux["emit_string"](":\n");
      case 2:
       Emitaux["emit_string"]("\t.globl\t");
       emit_symbol(param[1]);
       return Emitaux["emit_char"](10);
       
      case 3:
       Emitaux["emit_string"]("\t.byte\t");
       Emitaux["emit_int"](param[1]);
       return Emitaux["emit_char"](10);
       
      case 4:
       Emitaux["emit_string"]("\t.word\t");
       Emitaux["emit_int"](param[1]);
       return Emitaux["emit_char"](10);
       
      case 5:
       Emitaux["emit_string"]("\t.long\t");
       Emitaux["emit_nativeint"](param[1]);
       return Emitaux["emit_char"](10);
       
      case 6:
       Emitaux["emit_string"]("\t.quad\t");
       Emitaux["emit_nativeint"](param[1]);
       return Emitaux["emit_char"](10);
       
      case 7:
       return Emitaux["emit_float32_directive"]
               (".long","unknown primitive:caml_int32_bits_of_float");
       
      case 8:
       return Emitaux["emit_float64_directive"]
               (".quad","unknown primitive:caml_int64_bits_of_float");
       
      case 9:
       Emitaux["emit_string"]("\t.quad\t");
       emit_symbol(param[1]);
       return Emitaux["emit_char"](10);
       
      case 10:
       Emitaux["emit_string"]("\t.quad\t");
       emit_data_label(param[1]);
       return Emitaux["emit_char"](10);
       
      case 11:return Emitaux["emit_string_directive"]("\t.ascii\t",param[1]);
      case 12:
       var n=param[1];
       
       if(n>0)
        {Emitaux["emit_string"]("\t.space\t");
         Emitaux["emit_int"](n);
         return Emitaux["emit_char"](10);
         }
       else
        {return 0;}
       
      case 13:return emit_align(param[1]);
      }
    };

var
 data=
  function(l)
   {Emitaux["emit_string"]("\t.data\n");return List["iter"](emit_item,l);};

var
 begin_assembly=
  function(param)
   {Emitaux["reset_debug_info"](0);
    float_constants[1]=0,0;
    if(Clflags["dlcode"][1])
     {if(macosx)
       {Emitaux["emit_string"]("\t.literal16\n")}
      else
       {if(mingw64||cygwin)
         {Emitaux["emit_string"]('\t.section .rdata,"dr"\n')}
        else
         {Emitaux["emit_string"]('\t.section .rodata.cst8,"a",@progbits\n')}
        }
      
      emit_align(16),
      emit_symbol("caml_negf_mask"),
      Emitaux["emit_string"](":\t.quad   0x8000000000000000, 0\n"),
      emit_align(16),
      emit_symbol("caml_absf_mask"),
      Emitaux["emit_string"]
       (":\t.quad   0x7FFFFFFFFFFFFFFF, 0xFFFFFFFFFFFFFFFF\n")}
    else
     {}
    
    var lbl_begin=Compilenv["make_symbol"](0,[0,"data_begin"]);
    
    Emitaux["emit_string"]("\t.data\n");
    Emitaux["emit_string"]("\t.globl\t"),
    emit_symbol(lbl_begin),
    Emitaux["emit_char"](10);
    emit_symbol(lbl_begin),Emitaux["emit_string"](":\n");
    var lbl_begin$1=Compilenv["make_symbol"](0,[0,"code_begin"]);
    
    Emitaux["emit_string"]("\t.text\n");
    Emitaux["emit_string"]("\t.globl\t"),
    emit_symbol(lbl_begin$1),
    Emitaux["emit_char"](10);
    emit_symbol(lbl_begin$1),Emitaux["emit_string"](":\n");
    if(macosx){return Emitaux["emit_string"]("\tnop\n");}else{return 0;}
    };

var
 end_assembly=
  function(param)
   {if(float_constants[1]!=0)
     {if(macosx)
       {Emitaux["emit_string"]("\t.literal8\n")}
      else
       {if(mingw64||cygwin)
         {Emitaux["emit_string"]('\t.section .rdata,"dr"\n')}
        else
         {Emitaux["emit_string"]('\t.section .rodata.cst8,"a",@progbits\n')}
        }
      
      List["iter"](emit_float_constant,float_constants[1])}
    else
     {}
    
    var lbl_end=Compilenv["make_symbol"](0,[0,"code_end"]);
    
    Emitaux["emit_string"]("\t.text\n");
    if(macosx){Emitaux["emit_string"]("\tnop\n")}else{}
    
    Emitaux["emit_string"]("\t.globl\t"),
    emit_symbol(lbl_end),
    Emitaux["emit_char"](10);
    emit_symbol(lbl_end),Emitaux["emit_string"](":\n");
    Emitaux["emit_string"]("\t.data\n");
    var lbl_end$1=Compilenv["make_symbol"](0,[0,"data_end"]);
    
    Emitaux["emit_string"]("\t.globl\t"),
    emit_symbol(lbl_end$1),
    Emitaux["emit_char"](10);
    emit_symbol(lbl_end$1),Emitaux["emit_string"](":\n");
    Emitaux["emit_string"]("\t.long\t0\n");
    var lbl=Compilenv["make_symbol"](0,[0,"frametable"]);
    
    Emitaux["emit_string"]("\t.globl\t"),
    emit_symbol(lbl),
    Emitaux["emit_char"](10);
    emit_symbol(lbl),Emitaux["emit_string"](":\n");
    if(macosx)
     {var setcnt=[0,0];
      
      var
       $js=
        function(lbl$1,ofs)
         {setcnt[0]++;
          Emitaux["emit_string"]("\t.set\tL$set$"),
          Emitaux["emit_int"](setcnt[1]),
          Emitaux["emit_string"](", ("),
          emit_label(lbl$1),
          Emitaux["emit_string"](" - .) + "),
          Emitaux["emit_int32"](ofs),
          Emitaux["emit_char"](10);
          Emitaux["emit_string"]("\t.long L$set$");
          Emitaux["emit_int"](setcnt[1]);
          return Emitaux["emit_char"](10);
          };
      }
    else
     {var
       $js=
        function(lbl$1,ofs)
         {Emitaux["emit_string"]("\t.long\t(");
          emit_label(lbl$1);
          Emitaux["emit_string"](" - .) + ");
          Emitaux["emit_int32"](ofs);
          return Emitaux["emit_char"](10);
          };
      }
    Emitaux["emit_frames"]
     (/* record */[0,
       function(l)
        {Emitaux["emit_string"]("\t.quad\t");
         emit_label(l);
         return Emitaux["emit_char"](10);
         },
       function(n)
        {Emitaux["emit_string"]("\t.word\t");
         Emitaux["emit_int"](n);
         return Emitaux["emit_char"](10);
         },
       function(n)
        {Emitaux["emit_string"]("\t.long\t");
         Emitaux["emit_int32"](n);
         return Emitaux["emit_char"](10);
         },
       function(n)
        {Emitaux["emit_string"]("\t.quad\t");
         Emitaux["emit_int"](n);
         return Emitaux["emit_char"](10);
         },
       emit_align,
       $js,
       function(l){emit_label(l);return Emitaux["emit_string"](":\n");},
       function(s){return Emitaux["emit_string_directive"]("\t.asciz\t",s);}]);
    if("unknown primitive:caml_string_equal")
     {return Emitaux["emit_string"]
              ('\t.section .note.GNU-stack,"",%progbits\n');
      }
    else
     {return 0;}
    };

module["exports"]=
{"fundecl":fundecl,
 "data":data,
 "begin_assembly":begin_assembly,
 "end_assembly":end_assembly};

