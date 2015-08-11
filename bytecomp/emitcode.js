// Generated CODE, PLEASE EDIT WITH CARE 

var Translmod=require("Translmod");
var Opcodes=require("Opcodes");
var Instruct=require("Instruct");
var List=require("List");
var Pervasives=require("Pervasives");
var Btype=require("Btype");
var Env=require("Env");
var Clflags=require("Clflags");
var Set=require("Set");
var Misc=require("Misc");
var Lambda=require("Lambda");
var Filename=require("Filename");
var Location=require("Location");
var Primitive=require("Primitive");
var $$Array=require("Array");
var Config=require("Config");


var $$let=$$String;

var StringSet=Set["Make"]([0,$$let[25]]);

var out_buffer=[0,Misc["LongString"][1](1024)];

var out_position=[0,0];

var
 out_word=
  function(b1,b2,b3,b4)
   {var p=out_position[1];
    
    if(p>=Misc["LongString"][2](out_buffer[1]))
     {var len=Misc["LongString"][2](out_buffer[1]);
      
      var new_buffer=Misc["LongString"][1](2*len);
      
      Misc["LongString"][5](out_buffer[1],0,new_buffer,0,len),
      out_buffer[1]=
      new_buffer,
      0}
    else
     {}
    
    Misc["LongString"][4](out_buffer[1],p,b1);
    Misc["LongString"][4](out_buffer[1],p+1,b2);
    Misc["LongString"][4](out_buffer[1],p+2,b3);
    Misc["LongString"][4](out_buffer[1],p+3,b4);
    return out_position[1]=p+4,0;
    };

var out=function(opcode){return out_word(opcode,0,0,0);};

var AsInt="unknown primitive:caml_set_oo_id";

var
 const_as_int=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:
       var match=param[1];
       
       switch(match)
        {case 0:return match[1];case 1:return match[1];default:exit=57;}
       
      case 1:return param[1];
      default:exit=57;}
    
    switch(exit){case 57:throw AsInt;}
    };

var
 is_immed=
  function(i){return Instruct["immed_min"]<=i&&i<=Instruct["immed_max"];};

var
 is_immed_const=
  function(k)
   {try
     {return is_immed(const_as_int(k));}
    catch(exn){if(exn=AsInt){return 0;}else{throw exn;}}
    };

var out_int=function(n){return out_word(n,n>>8,n>>16,n>>24);};

var
 out_const=
  function(c)
   {try
     {return out_int(const_as_int(c));}
    catch(exn)
     {if(exn=AsInt)
       {return Misc["fatal_error"]("Emitcode.const_as_int");}
      else
       {throw exn;}
      }
    };

var label_table=[0,[]];

var
 extend_label_table=
  function(needed)
   {var new_size=label_table[1]["length"];
    
    while(needed>=new_size){new_size=2*new_size;}
    
    var new_table="unknown primitive:caml_make_vect";
    
    $$Array["blit"](label_table[1],0,new_table,0,label_table[1]["length"]);
    return label_table[1]=new_table,0;
    };

var
 backpatch=
  function(param)
   {var pos=param[1];
    
    var displ=out_position[1]-param[2]>>2;
    
    Misc["LongString"][4](out_buffer[1],pos,displ);
    Misc["LongString"][4](out_buffer[1],pos+1,displ>>8);
    Misc["LongString"][4](out_buffer[1],pos+2,displ>>16);
    return Misc["LongString"][4](out_buffer[1],pos+3,displ>>24);
    };

var
 define_label=
  function(lbl)
   {if(lbl>=label_table[1]["length"]){extend_label_table(lbl)}else{}
    
    var match=label_table[1][lbl];
    
    switch(match)
     {case 0:return Misc["fatal_error"]("Emitcode.define_label");
      case 1:
       List["iter"](backpatch,match[1]);
       return label_table[1][lbl]=/* Label_defined */[0,out_position[1]],0;
       
      }
    };

var
 out_label_with_orig=
  function(orig,lbl)
   {if(lbl>=label_table[1]["length"]){extend_label_table(lbl)}else{}
    
    var match=label_table[1][lbl];
    
    switch(match)
     {case 0:return out_int(match[1]-orig>>2);
      case 1:
       label_table[1][lbl]=
       /* Label_undefined */[1,
        /* :: */[0,/* tuple */[0,out_position[1],orig],match[1]]],
       0;
       return out_int(0);
       
      }
    };

var out_label=function(l){return out_label_with_orig(out_position[1],l);};

var reloc_info=[0,0];

var
 enter=
  function(info)
   {return reloc_info[1]=
           /* :: */[0,/* tuple */[0,info,out_position[1]],reloc_info[1]],
           0;
    };

var
 slot_for_literal=
  function(sc){enter(/* Reloc_literal */[0,sc]);return out_int(0);};

var
 slot_for_getglobal=
  function(id){enter(/* Reloc_getglobal */[1,id]);return out_int(0);};

var
 slot_for_setglobal=
  function(id){enter(/* Reloc_setglobal */[2,id]);return out_int(0);};

var
 slot_for_c_prim=
  function(name){enter(/* Reloc_primitive */[3,name]);return out_int(0);};

var events=[0,0];

var debug_dirs=[0,StringSet[1]];

var
 record_event=
  function(ev)
   {var path=ev[3][1][1];
    
    var abspath=Location["absolute_path"](path);
    
    debug_dirs[1]=StringSet[4](Filename["dirname"](abspath),debug_dirs[1]),0;
    if(Filename["is_relative"](path))
     {debug_dirs[1]=
      StringSet[4]("unknown primitive:caml_sys_getcwd",debug_dirs[1]),
      0}
    else
     {}
    
    ev[1]=out_position[1],0;
    return events[1]=/* :: */[0,ev,events[1]],0;
    };

var
 init=
  function(param)
   {out_position[1]=0,0;
    label_table[1]="unknown primitive:caml_make_vect",0;
    reloc_info[1]=0,0;
    debug_dirs[1]=StringSet[1],0;
    return events[1]=0,0;
    };

var
 emit_comp=
  function(param)
   {switch(param[0])
     {case 0:return out(Opcodes["opEQ"]);
      case 1:return out(Opcodes["opNEQ"]);
      case 2:return out(Opcodes["opLTINT"]);
      case 3:return out(Opcodes["opGTINT"]);
      case 4:return out(Opcodes["opLEINT"]);
      case 5:return out(Opcodes["opGEINT"]);
      }
    };

var
 emit_branch_comp=
  function(param)
   {switch(param[0])
     {case 0:return out(Opcodes["opBEQ"]);
      case 1:return out(Opcodes["opBNEQ"]);
      case 2:return out(Opcodes["opBLTINT"]);
      case 3:return out(Opcodes["opBGTINT"]);
      case 4:return out(Opcodes["opBLEINT"]);
      case 5:return out(Opcodes["opBGEINT"]);
      }
    };

var
 emit_instr=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param)
       {case 0:return out(Opcodes["opPUSH"]);
        case 1:return out(Opcodes["opRESTART"]);
        case 2:return out(Opcodes["opVECTLENGTH"]);
        case 3:return out(Opcodes["opGETVECTITEM"]);
        case 4:return out(Opcodes["opSETVECTITEM"]);
        case 5:return out(Opcodes["opGETSTRINGCHAR"]);
        case 6:return out(Opcodes["opSETSTRINGCHAR"]);
        case 7:return out(Opcodes["opBOOLNOT"]);
        case 8:return out(Opcodes["opPOPTRAP"]);
        case 9:return out(Opcodes["opCHECK_SIGNALS"]);
        case 10:return out(Opcodes["opNEGINT"]);
        case 11:return out(Opcodes["opADDINT"]);
        case 12:return out(Opcodes["opSUBINT"]);
        case 13:return out(Opcodes["opMULINT"]);
        case 14:return out(Opcodes["opDIVINT"]);
        case 15:return out(Opcodes["opMODINT"]);
        case 16:return out(Opcodes["opANDINT"]);
        case 17:return out(Opcodes["opORINT"]);
        case 18:return out(Opcodes["opXORINT"]);
        case 19:return out(Opcodes["opLSLINT"]);
        case 20:return out(Opcodes["opLSRINT"]);
        case 21:return out(Opcodes["opASRINT"]);
        case 22:return out(Opcodes["opISINT"]);
        case 23:return out(Opcodes["opULTINT"]);
        case 24:return out(Opcodes["opGETMETHOD"]);
        case 25:return out(Opcodes["opGETDYNMET"]);
        case 26:return out(Opcodes["opSTOP"]);
        }}
    else
     {switch(param[0])
       {case 0:return define_label(param[1]);
        case 1:
         var n=param[1];
         
         if(n<8)
          {return out(Opcodes["opACC0"]+n);}
         else
          {out(Opcodes["opACC"]);return out_int(n);}
         
        case 2:
         var n$1=param[1];
         
         if(n$1>=1&&n$1<=4)
          {return out(Opcodes["opENVACC1"]+n$1-1);}
         else
          {out(Opcodes["opENVACC"]);return out_int(n$1);}
         
        case 3:out(Opcodes["opPOP"]);return out_int(param[1]);
        case 4:out(Opcodes["opASSIGN"]);return out_int(param[1]);
        case 5:out(Opcodes["opPUSH_RETADDR"]);return out_label(param[1]);
        case 6:
         var n$2=param[1];
         
         if(n$2<4)
          {return out(Opcodes["opAPPLY1"]+n$2-1);}
         else
          {out(Opcodes["opAPPLY"]);return out_int(n$2);}
         
        case 7:
         var sz=param[2];
         
         var n$3=param[1];
         
         if(n$3<4)
          {out(Opcodes["opAPPTERM1"]+n$3-1);return out_int(sz);}
         else
          {out(Opcodes["opAPPTERM"]);out_int(n$3);return out_int(sz);}
         
        case 8:out(Opcodes["opRETURN"]);return out_int(param[1]);
        case 9:out(Opcodes["opGRAB"]);return out_int(param[1]);
        case 10:
         out(Opcodes["opCLOSURE"]);
         out_int(param[2]);
         return out_label(param[1]);
         
        case 11:
         var lbls=param[1];
         
         out(Opcodes["opCLOSUREREC"]);
         out_int(List["length"](lbls));
         out_int(param[2]);
         var org=out_position[1];
         
         return List["iter"](out_label_with_orig(org),lbls);
         
        case 12:
         var ofs=param[1];
         
         if((ofs=-2)||(ofs=0)||(ofs=2))
          {return out(Opcodes["opOFFSETCLOSURE0"]+ofs/2);}
         else
          {out(Opcodes["opOFFSETCLOSURE"]);return out_int(ofs);}
         
        case 13:
         out(Opcodes["opGETGLOBAL"]);return slot_for_getglobal(param[1]);
        case 14:
         out(Opcodes["opSETGLOBAL"]);return slot_for_setglobal(param[1]);
        case 15:
         var sc=param[1];
         
         var exit$1;
         
         switch(sc)
          {case 0:
            var match=sc[1];
            
            switch(match)
             {case 0:
               var i=match[1];
               
               if(is_immed(i))
                {if(i>=0&&i<=3)
                  {return out(Opcodes["opCONST0"]+i);}
                 else
                  {out(Opcodes["opCONSTINT"]);return out_int(i);}
                 }
               else
                {exit$1=23;}
               
              case 1:out(Opcodes["opCONSTINT"]);return out_int(match[1]);
              default:exit$1=23;}
            
           case 1:
            var i$1=sc[1];
            
            if(i$1>=0&&i$1<=3)
             {return out(Opcodes["opCONST0"]+i$1);}
            else
             {out(Opcodes["opCONSTINT"]);return out_int(i$1);}
            
           case 2:
            if(sc[3])
             {exit$1=23;}
            else
             {var t=sc[1];
              
              if(t=0)
               {return out(Opcodes["opATOM0"]);}
              else
               {out(Opcodes["opATOM"]);return out_int(t);}
              }
            
           case 3:exit$1=23;
           case 4:exit$1=23;
           }
         
         switch(exit$1)
          {case 23:out(Opcodes["opGETGLOBAL"]);return slot_for_literal(sc);}
         
        case 16:
         var t$1=param[2];
         
         var n$4=param[1];
         
         if(n$4=0)
          {if(t$1=0)
            {return out(Opcodes["opATOM0"]);}
           else
            {out(Opcodes["opATOM"]);return out_int(t$1);}
           }
         else
          {if(n$4<4)
            {out(Opcodes["opMAKEBLOCK1"]+n$4-1);return out_int(t$1);}
           else
            {out(Opcodes["opMAKEBLOCK"]);out_int(n$4);return out_int(t$1);}
           }
         
        case 17:
         var n$5=param[1];
         
         if(n$5=0)
          {return out(Opcodes["opATOM0"]);}
         else
          {out(Opcodes["opMAKEFLOATBLOCK"]);return out_int(n$5);}
         
        case 18:
         var n$6=param[1];
         
         if(n$6<4)
          {return out(Opcodes["opGETFIELD0"]+n$6);}
         else
          {out(Opcodes["opGETFIELD"]);return out_int(n$6);}
         
        case 19:
         var n$7=param[1];
         
         if(n$7<4)
          {return out(Opcodes["opSETFIELD0"]+n$7);}
         else
          {out(Opcodes["opSETFIELD"]);return out_int(n$7);}
         
        case 20:out(Opcodes["opGETFLOATFIELD"]);return out_int(param[1]);
        case 21:out(Opcodes["opSETFLOATFIELD"]);return out_int(param[1]);
        case 22:out(Opcodes["opBRANCH"]);return out_label(param[1]);
        case 23:exit=25;
        case 24:exit=26;
        case 25:exit=25;
        case 26:exit=26;
        case 27:
         var tbl_block=param[2];
         
         var tbl_const=param[1];
         
         out(Opcodes["opSWITCH"]);
         out_int(tbl_const["length"]+(tbl_block["length"]<<16));
         var org$1=out_position[1];
         
         $$Array["iter"](out_label_with_orig(org$1),tbl_const);
         return $$Array["iter"](out_label_with_orig(org$1),tbl_block);
         
        case 28:out(Opcodes["opPUSHTRAP"]);return out_label(param[1]);
        case 29:
         switch(param[1][0])
          {case 0:return out(Opcodes["opRAISE"]);
           case 1:return out(Opcodes["opRERAISE"]);
           case 2:return out(Opcodes["opRAISE_NOTRACE"]);
           }
         
        case 30:
         var n$8=param[2];
         
         var name=param[1];
         
         if(n$8<=5)
          {out(Opcodes["opC_CALL1"]+n$8-1);return slot_for_c_prim(name);}
         else
          {out(Opcodes["opC_CALLN"]);
           out_int(n$8);
           return slot_for_c_prim(name);
           }
         
        case 31:return emit_comp(param[1]);
        case 32:out(Opcodes["opOFFSETINT"]);return out_int(param[1]);
        case 33:out(Opcodes["opOFFSETREF"]);return out_int(param[1]);
        case 34:
         out(Opcodes["opGETPUBMET"]);out_int(param[1]);return out_int(0);
        case 35:return record_event(param[1]);
        }}
    
    switch(exit)
     {case 25:out(Opcodes["opBRANCHIF"]);return out_label(param[1]);
      case 26:out(Opcodes["opBRANCHIFNOT"]);return out_label(param[1]);
      }
    };

var
 emit=
  function(param)
   {if(param)
     {var instr=param[1];
      
      var exit;
      
      if(typeof instr=="number")
       {switch(instr)
         {case 0:
           var match=param[2];
           
           if(match)
            {var ev=match[1];
             
             if(typeof ev=="number")
              {switch(ev){}}
             else
              {switch(ev[0])
                {case 1:
                  var n=ev[1];
                  
                  var exit$1;
                  
                  if(n!=0)
                   {exit$1=17;}
                  else
                   {var match$1=match[2];
                    
                    if(match$1)
                     {var match$2=match$1[1];
                      
                      if(typeof match$2=="number")
                       {switch(match$2){}}
                      else
                       {switch(match$2[0])
                         {case 8:
                           return emit
                                   (/* :: */[0,/* Kreturn */[8,match$2[1]-1],match$1[2]]);
                           
                          default:exit$1=17;}}
                      }
                    else
                     {exit$1=17;}
                    }
                  
                  switch(exit$1)
                   {case 17:
                     if(n<8)
                      {out(Opcodes["opPUSHACC0"]+n)}
                     else
                      {out(Opcodes["opPUSHACC"]),out_int(n)}
                     
                     return emit(match[2]);
                     
                    }
                  
                 case 2:
                  var n$1=ev[1];
                  
                  if(n$1>=1&&n$1<4)
                   {out(Opcodes["opPUSHENVACC1"]+n$1-1)}
                  else
                   {out(Opcodes["opPUSHENVACC"]),out_int(n$1)}
                  
                  return emit(match[2]);
                  
                 case 12:
                  var ofs=ev[1];
                  
                  if((ofs=-2)||(ofs=0)||(ofs=2))
                   {out(Opcodes["opPUSHOFFSETCLOSURE0"]+ofs/2)}
                  else
                   {out(Opcodes["opPUSHOFFSETCLOSURE"]),out_int(ofs)}
                  
                  return emit(match[2]);
                  
                 case 13:
                  var c=match[2];
                  
                  var id=ev[1];
                  
                  var exit$2;
                  
                  if(c)
                   {var match$3=c[1];
                    
                    if(typeof match$3=="number")
                     {switch(match$3){}}
                    else
                     {switch(match$3[0])
                       {case 18:
                         out(Opcodes["opPUSHGETGLOBALFIELD"]);
                         slot_for_getglobal(id);
                         out_int(match$3[1]);
                         return emit(c[2]);
                         
                        default:exit$2=18;}}
                    }
                  else
                   {exit$2=18;}
                  
                  switch(exit$2)
                   {case 18:
                     out(Opcodes["opPUSHGETGLOBAL"]);
                     slot_for_getglobal(id);
                     return emit(c);
                     
                    }
                  
                 case 15:
                  var c$1=match[2];
                  
                  var k=ev[1];
                  
                  var exit$3;
                  
                  if(c$1)
                   {var match$4=c$1[1];
                    
                    if(typeof match$4=="number")
                     {switch(match$4)
                       {case 23:
                         var match$5=c$1[2];
                         
                         if(match$5)
                          {var match$6=match$5[1];
                           
                           if(typeof match$6=="number")
                            {switch(match$6){}}
                           else
                            {switch(match$6[0])
                              {case 23:
                                if(is_immed_const(k))
                                 {out(Opcodes["opBULTINT"]);
                                  out_const(k);
                                  out_label(match$6[1]);
                                  return emit(match$5[2]);
                                  }
                                else
                                 {exit$3=19;}
                                
                               case 24:
                                if(is_immed_const(k))
                                 {out(Opcodes["opBUGEINT"]);
                                  out_const(k);
                                  out_label(match$6[1]);
                                  return emit(match$5[2]);
                                  }
                                else
                                 {exit$3=19;}
                                
                               default:exit$3=19;}}
                           }
                         else
                          {exit$3=19;}
                         
                        }}
                    else
                     {switch(match$4[0])
                       {case 31:
                         var match$7=c$1[2];
                         
                         if(match$7)
                          {var match$8=match$7[1];
                           
                           var c$2=match$4[1];
                           
                           if(typeof match$8=="number")
                            {switch(match$8){}}
                           else
                            {switch(match$8[0])
                              {case 23:
                                if(is_immed_const(k))
                                 {emit_branch_comp(c$2);
                                  out_const(k);
                                  out_label(match$8[1]);
                                  return emit(match$7[2]);
                                  }
                                else
                                 {exit$3=19;}
                                
                               case 24:
                                if(is_immed_const(k))
                                 {emit_branch_comp(Lambda["negate_comparison"](c$2));
                                  out_const(k);
                                  out_label(match$8[1]);
                                  return emit(match$7[2]);
                                  }
                                else
                                 {exit$3=19;}
                                
                               default:exit$3=19;}}
                           }
                         else
                          {exit$3=19;}
                         
                        default:exit$3=19;}}
                    }
                  else
                   {exit$3=19;}
                  
                  switch(exit$3)
                   {case 19:
                     var exit$4;
                     
                     switch(k)
                      {case 0:
                        var match$9=k[1];
                        
                        switch(match$9)
                         {case 0:
                           var i=match$9[1];
                           
                           if(is_immed(i))
                            {if(i>=0&&i<=3)
                              {out(Opcodes["opPUSHCONST0"]+i)}
                             else
                              {out(Opcodes["opPUSHCONSTINT"]),out_int(i)}
                             }
                           else
                            {exit$4=15;}
                           
                          case 1:out(Opcodes["opPUSHCONSTINT"]),out_int(match$9[1]);
                          default:exit$4=15;}
                        
                       case 1:
                        var i$1=k[1];
                        
                        if(i$1>=0&&i$1<=3)
                         {out(Opcodes["opPUSHCONST0"]+i$1)}
                        else
                         {out(Opcodes["opPUSHCONSTINT"]),out_int(i$1)}
                        
                       case 2:
                        if(k[3])
                         {exit$4=15;}
                        else
                         {var t=k[1];
                          
                          if(t=0)
                           {out(Opcodes["opPUSHATOM0"])}
                          else
                           {out(Opcodes["opPUSHATOM"]),out_int(t)}
                          }
                        
                       case 3:exit$4=15;
                       case 4:exit$4=15;
                       }
                     
                     switch(exit$4)
                      {case 15:out(Opcodes["opPUSHGETGLOBAL"]),slot_for_literal(k)
                       }
                     
                     return emit(c$1);
                     
                    }
                  
                 case 35:
                  var match$10=ev[1][4];
                  
                  if("unknown primitive:isint")
                   {if(match$10!=0)
                     {exit=16;}
                    else
                     {var match$11=match[2];
                      
                      if(match$11)
                       {var instr1=match$11[1];
                        
                        var exit$5;
                        
                        if(typeof instr1=="number")
                         {switch(instr1){}}
                        else
                         {switch(instr1[0])
                           {case 1:exit$5=20;
                            case 2:exit$5=20;
                            case 12:exit$5=20;
                            case 13:
                             var match$12=match$11[2];
                             
                             if(match$12)
                              {var instr2=match$12[1];
                               
                               if(typeof instr2=="number")
                                {switch(instr2){}}
                               else
                                {switch(instr2[0])
                                  {case 18:
                                    return emit
                                            (/* :: */[0,
                                              0,
                                              /* :: */[0,
                                               instr1,
                                               /* :: */[0,instr2,/* :: */[0,ev,match$12[2]]]]]);
                                    
                                   default:exit$5=20;}}
                               }
                             else
                              {exit$5=20;}
                             
                            case 15:exit$5=20;
                            default:exit=16;}}
                        
                        switch(exit$5)
                         {case 20:
                           return emit
                                   (/* :: */[0,0,/* :: */[0,instr1,/* :: */[0,ev,match$11[2]]]]);
                           
                          }
                        }
                      else
                       {exit=16;}
                      }
                    }
                  else
                   {exit=16;}
                  
                 default:exit=16;}}
             }
           else
            {exit=16;}
           
          }}
      else
       {switch(instr[0])
         {case 13:
           var match$13=param[2];
           
           if(match$13)
            {var match$14=match$13[1];
             
             if(typeof match$14=="number")
              {switch(match$14){}}
             else
              {switch(match$14[0])
                {case 18:
                  out(Opcodes["opGETGLOBALFIELD"]);
                  slot_for_getglobal(instr[1]);
                  out_int(match$14[1]);
                  return emit(match$13[2]);
                  
                 default:exit=16;}}
             }
           else
            {exit=16;}
           
          default:exit=16;}}
      
      switch(exit){case 16:emit_instr(instr);return emit(param[2]);}
      }
    else
     {return 0;}
    };

var
 to_file=
  function(outchan,unit_name,objfile,code)
   {init(0);
    Pervasives["output_string"](outchan,Config["cmo_magic_number"]);
    var pos_depl=Pervasives["pos_out"](outchan);
    
    Pervasives["output_binary_int"](outchan,0);
    var pos_code=Pervasives["pos_out"](outchan);
    
    emit(code);
    Misc["LongString"][6](outchan,out_buffer[1],0,out_position[1]);
    if(Clflags["debug"][1])
     {debug_dirs[1]=
      StringSet[4]
       (Filename["dirname"](Location["absolute_path"](objfile)),debug_dirs[1]),
      0;
      var p=Pervasives["pos_out"](outchan);
      
      Pervasives["output_value"](outchan,events[1]);
      Pervasives["output_value"](outchan,StringSet[20](debug_dirs[1]));
      var match=/* tuple */[0,p,Pervasives["pos_out"](outchan)-p];
      }
    else
     {var match=[0,0,0];}
    
    var
     compunit=
      /* record */[0,
       unit_name,
       pos_code,
       out_position[1],
       List["rev"](reloc_info[1]),
       Env["imports"](0),
       List["map"]
        (Primitive["byte_name"],Translmod["primitive_declarations"][1]),
       0,
       match[1],
       match[2]];
    
    init(0);
    Btype["cleanup_abbrev"](0);
    var pos_compunit=Pervasives["pos_out"](outchan);
    
    Pervasives["output_value"](outchan,compunit);
    Pervasives["seek_out"](outchan,pos_depl);
    return Pervasives["output_binary_int"](outchan,pos_compunit);
    };

var
 to_memory=
  function(init_code,fun_code)
   {init(0);
    emit(init_code);
    emit(fun_code);
    var code="unknown primitive:caml_static_alloc";
    
    Misc["LongString"][7](out_buffer[1],0,code,0,out_position[1]);
    var reloc=List["rev"](reloc_info[1]);
    
    var code_size=out_position[1];
    
    init(0);
    return /* tuple */[0,code,code_size,reloc];
    };

var
 to_packed_file=
  function(outchan,code)
   {init(0);
    emit(code);
    Misc["LongString"][6](outchan,out_buffer[1],0,out_position[1]);
    var reloc=reloc_info[1];
    
    init(0);
    return reloc;
    };

var
 reset=
  function(param)
   {out_buffer[1]=Misc["LongString"][1](1024),0;
    out_position[1]=0,0;
    label_table[1]=[],0;
    return reloc_info[1]=0,0;
    };

module["exports"]=
{"to_file":to_file,
 "to_memory":to_memory,
 "to_packed_file":to_packed_file,
 "reset":reset};

