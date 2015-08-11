// Generated CODE, PLEASE EDIT WITH CARE 

var Selectgen=require("Selectgen");
var CamlinternalOO=require("CamlinternalOO");
var List=require("List");
var Clflags=require("Clflags");
var Proc=require("Proc");
var Arch=require("Arch");
var $$Array=require("Array");


var shared=[0,"select_addressing","is_immediate"];

var
 shared$1=
  [0,
   "select_store",
   "select_operation",
   "select_floatarith",
   "select_addressing",
   "mark_c_tailcall",
   "is_simple_expr",
   "is_immediate_natint",
   "is_immediate",
   "insert_op_debug",
   "insert_moves",
   "insert_debug"];

var
 shared$2=
  [0,
   "emit_expr",
   "emit_extcall_args",
   "emit_fundecl",
   "emit_stores",
   "emit_tail",
   "extract",
   "insert",
   "insert_debug",
   "insert_move",
   "insert_move_args",
   "insert_move_results",
   "insert_moves",
   "insert_op",
   "insert_op_debug",
   "is_simple_expr",
   "mark_c_tailcall",
   "mark_call",
   "mark_instr",
   "mark_tailcall",
   "regs_for",
   "select_condition",
   "select_operation",
   "select_store"];

var
 select_addr=
  function(exp)
   {var exit;
    
    switch(exp)
     {case 3:
       if(!Clflags["dlcode"][1])
        {return /* tuple */[0,/* Asymbol */[0,exp[1]],0];}
       else
        {exit=49;}
       
      case 11:
       var match=exp[1];
       
       var exit$1;
       
       if("unknown primitive:isint")
        {switch(match[0])
          {case 0:exit=49;
           case 1:exit$1=50;
           case 2:exit$1=51;
           case 3:
            var match$1=exp[2];
            
            if(match$1)
             {var arg=match$1[1];
              
              var exit$2;
              
              var match$2=match$1[2];
              
              if(match$2)
               {var match$3=match$2[1];
                
                switch(match$3)
                 {case 0:
                   var mult=match$3[1];
                   
                   var exit$3;
                   
                   var switcher=-2+mult;
                   
                   if(6<switcher>>>0)
                    {exit$2=53;}
                   else
                    {switch(switcher[0])
                      {case 0:exit$3=54;
                       case 1:exit$2=53;
                       case 2:exit$3=54;
                       case 3:exit$2=53;
                       case 4:exit$2=53;
                       case 5:exit$2=53;
                       case 6:exit$3=54;
                       }
                     }
                   
                   switch(exit$3)
                    {case 54:
                      if(match$2[2])
                       {exit=49;}
                      else
                       {var match$4=select_addr(arg);
                        
                        var match$5=match$4[1];
                        
                        switch(match$5)
                         {case 1:
                           return /* tuple */[0,
                                   /* Ascale */[3,match$5[1],mult],
                                   match$4[2]*mult];
                           
                          default:return /* tuple */[0,/* Alinear */[1,exp],0];}
                        }
                      
                     }
                   
                  default:exit$2=53;}
                }
              else
               {exit=49;}
              
              switch(exit$2)
               {case 53:
                 switch(arg)
                  {case 0:
                    var mult$1=arg[1];
                    
                    var exit$4;
                    
                    var switcher$1=-2+mult$1;
                    
                    if(6<switcher$1>>>0)
                     {exit=49;}
                    else
                     {switch(switcher$1[0])
                       {case 0:exit$4=55;
                        case 1:exit=49;
                        case 2:exit$4=55;
                        case 3:exit=49;
                        case 4:exit=49;
                        case 5:exit=49;
                        case 6:exit$4=55;
                        }
                      }
                    
                    switch(exit$4)
                     {case 55:
                       var match$6=match$1[2];
                       
                       if(match$6[2])
                        {exit=49;}
                       else
                        {var match$7=select_addr(match$6[1]);
                         
                         var match$8=match$7[1];
                         
                         switch(match$8)
                          {case 1:
                            return /* tuple */[0,
                                    /* Ascale */[3,match$8[1],mult$1],
                                    match$7[2]*mult$1];
                            
                           default:return /* tuple */[0,/* Alinear */[1,exp],0];}
                         }
                       
                      }
                    
                   default:exit=49;}
                 
                }
              }
            else
             {exit=49;}
            
           case 4:exit=49;
           case 5:exit=49;
           case 6:exit=49;
           case 7:exit=49;
           case 8:exit=49;
           case 9:exit=49;
           case 10:
            var match$9=exp[2];
            
            if(match$9)
             {var match$10=match$9[2];
              
              if(match$10)
               {var match$11=match$10[1];
                
                switch(match$11)
                 {case 0:
                   var shift=match$11[1];
                   
                   if(2<-1+shift>>>0)
                    {exit=49;}
                   else
                    {if(match$10[2])
                      {exit=49;}
                     else
                      {var match$12=select_addr(match$9[1]);
                       
                       var match$13=match$12[1];
                       
                       switch(match$13)
                        {case 1:
                          return /* tuple */[0,
                                  /* Ascale */[3,match$13[1],1<<shift],
                                  match$12[2]<<shift];
                          
                         default:return /* tuple */[0,/* Alinear */[1,exp],0];}
                       }
                     }
                   
                  default:exit=49;}
                }
              else
               {exit=49;}
              }
            else
             {exit=49;}
            
           case 11:exit=49;
           case 12:exit=49;
           case 13:exit$1=50;
           case 14:exit$1=51;
           case 15:exit=49;
           case 16:exit=49;
           case 17:exit=49;
           case 18:exit=49;
           case 19:exit=49;
           case 20:exit=49;
           case 21:exit=49;
           case 22:exit=49;
           }
         }
       else
        {exit=49;}
       
       switch(exit$1)
        {case 50:
          var match$14=exp[2];
          
          if(match$14)
           {var arg$1=match$14[1];
            
            var match$15=match$14[2];
            
            if(match$15)
             {var match$16=match$15[1];
              
              switch(match$16)
               {case 0:
                 if(match$15[2])
                  {exit=49;}
                 else
                  {var match$17=select_addr(arg$1);
                   
                   return /* tuple */[0,match$17[1],match$17[2]+match$16[1]];
                   }
                 
                default:
                 switch(arg$1)
                  {case 0:
                    var match$18=match$14[2];
                    
                    if(match$18[2])
                     {exit=49;}
                    else
                     {var match$19=select_addr(match$18[1]);
                      
                      return /* tuple */[0,match$19[1],match$19[2]+arg$1[1]];
                      }
                    
                   default:
                    var match$20=match$14[2];
                    
                    if(match$20[2])
                     {exit=49;}
                    else
                     {var arg2=match$20[1];
                      
                      var match$21=select_addr(arg$1);
                      
                      var match$22=select_addr(arg2);
                      
                      var match$23=match$21[1];
                      
                      var exit$5;
                      
                      switch(match$23)
                       {case 1:
                         var match$24=match$22[1];
                         
                         var n1=match$21[2];
                         
                         var e1=match$23[1];
                         
                         switch(match$24)
                          {case 1:
                            return /* tuple */[0,
                                    /* Aadd */[2,e1,match$24[1]],
                                    n1+match$22[2]];
                            
                           case 3:
                            return /* tuple */[0,
                                    /* Ascaledadd */[4,e1,match$24[1],match$24[2]],
                                    n1+match$22[2]];
                            
                           default:exit$5=46;}
                         
                        case 3:
                         var match$25=match$22[1];
                         
                         switch(match$25)
                          {case 1:
                            return /* tuple */[0,
                                    /* Ascaledadd */[4,match$25[1],match$23[1],match$23[2]],
                                    match$21[2]+match$22[2]];
                            
                           case 3:exit$5=48;
                           default:exit$5=47;}
                         
                        default:exit$5=48;}
                      
                      switch(exit$5)
                       {case 48:
                         var match$26=match$22[1];
                         
                         switch(match$26)
                          {case 3:
                            return /* tuple */[0,
                                    /* Ascaledadd */[4,arg$1,match$26[1],match$26[2]],
                                    match$22[2]];
                            
                           default:"unknown block:(exit 47)";}
                         
                        case 47:
                         switch(match$23)
                          {case 3:
                            return /* tuple */[0,
                                    /* Ascaledadd */[4,arg2,match$23[1],match$23[2]],
                                    match$21[2]];
                            
                           default:"unknown block:(exit 46)";}
                         
                        case 46:return /* tuple */[0,/* Aadd */[2,arg$1,arg2],0];
                        }
                      }
                    }
                 }
              }
            else
             {exit=49;}
            }
          else
           {exit=49;}
          
         case 51:
          var match$27=exp[2];
          
          if(match$27)
           {var match$28=match$27[2];
            
            if(match$28)
             {var match$29=match$28[1];
              
              switch(match$29)
               {case 0:
                 if(match$28[2])
                  {exit=49;}
                 else
                  {var match$30=select_addr(match$27[1]);
                   
                   return /* tuple */[0,match$30[1],match$30[2]-match$29[1]];
                   }
                 
                default:exit=49;}
              }
            else
             {exit=49;}
            }
          else
           {exit=49;}
          
         }
       
      default:exit=49;}
    
    switch(exit){case 49:return /* tuple */[0,/* Alinear */[1,exp],0];}
    };

var Use_default="unknown primitive:caml_set_oo_id";

var rax=Proc["phys_reg"](0);

var rcx=Proc["phys_reg"](5);

var rdx=Proc["phys_reg"](4);

var
 pseudoregs_for_operation=
  function(op,arg,res)
   {var exit;
    
    if(typeof op=="number")
     {switch(op)
       {case 5:exit=30;
        case 6:exit=30;
        case 7:exit=29;
        case 8:exit=29;
        case 9:exit=29;
        case 10:exit=29;
        }}
    else
     {switch(op[0])
       {case 11:
         var match=op[1];
         
         var exit$1;
         
         if("unknown primitive:isint")
          {switch(match[0])
            {case 0:exit=29;
             case 1:exit=29;
             case 2:exit=29;
             case 3:return /* tuple */[0,[rax,arg[1]],[rdx]];
             case 4:return /* tuple */[0,[rax,rcx],[rax]];
             case 5:return /* tuple */[0,[rax,rcx],[rdx]];
             case 6:exit=29;
             case 7:exit=29;
             case 8:exit=29;
             case 9:exit$1=32;
             case 10:exit$1=32;
             case 11:exit$1=32;
             case 12:exit=31;
             }
           }
         else
          {exit=31;}
         
         switch(exit$1){case 32:return /* tuple */[0,[res[0],rcx],res];}
         
        case 12:
         var match$1=op[1];
         
         var exit$2;
         
         if("unknown primitive:isint")
          {if(match$1>=6)
            {if(match$1>=12){exit=31;}else{exit$2=34;}}
           else
            {if(match$1>=3){exit=31;}else{exit$2=34;}}
           }
         else
          {exit=31;}
         
         switch(exit$2){case 34:exit=30;}
         
        case 13:
         var match$2=op[1];
         
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 4:
              var arg$prime=$$Array["copy"](arg);
              
              arg$prime[0]=res[0],0;
              return /* tuple */[0,arg$prime,res];
              
             case 5:
              var switcher=-32+match$2[1];
              
              if(!(32<switcher>>>0))
               {if(30<-1+switcher>>>0){exit=30;}else{exit=31;}}
              else
               {if(switcher!=-16)
                 {exit=31;}
                else
                 {return /* tuple */[0,[rax],[rax]];}
                }
              
             default:exit=31;}}
         
        default:exit=31;}}
    
    switch(exit)
     {case 31:throw Use_default;
      case 29:return /* tuple */[0,[res[0],arg[1]],res];
      case 30:return /* tuple */[0,res,res];
      }
    };

var
 inline_ops=
  [0,
   "sqrt",
   [0,
    "caml_bswap16_direct",
    [0,
     "caml_int32_direct_bswap",
     [0,"caml_int64_direct_bswap",[0,"caml_nativeint_direct_bswap",0]]]]];

var
 selector_init=
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared$1);
    
    var select_store=ids[1];
    
    var select_operation=ids[2];
    
    var select_floatarith=ids[3];
    
    var select_addressing=ids[4];
    
    var mark_c_tailcall=ids[5];
    
    var is_simple_expr=ids[6];
    
    var is_immediate_natint=ids[7];
    
    var is_immediate=ids[8];
    
    var insert_op_debug=ids[9];
    
    var insert_moves=ids[10];
    
    var insert_debug=ids[11];
    
    var
     inh=
      CamlinternalOO["inherits"]
       ($$class,0,shared,shared$2,Selectgen["selector_generic"],1);
    
    var obj_init=inh[1];
    
    var insert_op_debug$1=inh[15];
    
    var is_simple_expr$1=inh[16];
    
    var select_operation$1=inh[23];
    
    var select_store$1=inh[24];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       is_immediate,
       function(self$neg1,n){return n<=2147483647&&n>=-2147483648;},
       is_immediate_natint,
       function(self$neg1,n){return n<=2147483647&&n>=-2147483648;},
       is_simple_expr,
       function(self$neg1,e)
        {var exit;
         
         switch(e)
          {case 11:
            var match=e[1];
            
            if(typeof match=="number")
             {switch(match){}}
            else
             {switch(match[0])
               {case 1:
                 if(List["mem"](match[1],inline_ops))
                  {"unknown block:(sendself self-1/1121 is_simple_expr/1107)";
                   return List["for_all"](0,e[2]);
                   }
                 else
                  {exit=26;}
                 
                default:exit=26;}}
            
           default:exit=26;}
         
         switch(exit){case 26:return is_simple_expr$1(self$neg1,e);}
         },
       select_addressing,
       function(self$neg1,chunk,exp)
        {var match=select_addr(exp);
         
         var d=match[2];
         
         if(d<-2147483648||d>2147483647)
          {return /* tuple */[0,[1,0],exp];}
         else
          {var a=match[1];
           
           switch(a)
            {case 0:return /* tuple */[0,/* Ibased */[0,a[1],d],[10,0]];
             case 1:return /* tuple */[0,/* Iindexed */[1,d],a[1]];
             case 2:
              return /* tuple */[0,
                      /* Iindexed2 */[2,d],
                      /* Ctuple */[10,/* :: */[0,a[1],/* :: */[0,a[2],0]]]];
              
             case 3:return /* tuple */[0,/* Iscaled */[3,a[2],d],a[1]];
             case 4:
              return /* tuple */[0,
                      /* Iindexed2scaled */[4,a[3],d],
                      /* Ctuple */[10,/* :: */[0,a[1],/* :: */[0,a[2],0]]]];
              
             }
           }
         },
       select_store,
       function(self$neg1,is_assign,addr,exp)
        {var exit;
         
         switch(exp)
          {case 0:exit=23;
           case 1:exit=24;
           case 3:
            if(!(Arch["pic_code"][1]||Clflags["dlcode"][1]))
             {return /* tuple */[0,
                      /* Ispecific */[13,
                       /* Istore_symbol */[2,exp[1],addr,is_assign]],
                      [10,0]];
              }
            else
             {exit=21;}
            
           case 4:exit=23;
           case 5:
            var n=exp[1];
            
            "unknown block:(sendself self-1/1141 is_immediate_natint/1106 n/1149)";
            if(0)
             {return /* tuple */[0,
                      /* Ispecific */[13,/* Istore_int */[1,n,addr,is_assign]],
                      [10,0]];
              }
            else
             {exit=21;}
            
           case 6:exit=24;
           default:exit=21;}
         
         switch(exit)
          {case 23:
            var n$1=exp[1];
            
            "unknown block:(sendself self-1/1141 is_immediate/1105 n/1145)";
            if(0)
             {return /* tuple */[0,
                      /* Ispecific */[13,/* Istore_int */[1,n$1,addr,is_assign]],
                      [10,0]];
              }
            else
             {"unknown block:(exit 21)";}
            
           case 24:
            var n$2=exp[1];
            
            "unknown block:(sendself self-1/1141 is_immediate_natint/1106 n/1292)";
            if(0)
             {return /* tuple */[0,
                      /* Ispecific */[13,/* Istore_int */[1,n$2,addr,is_assign]],
                      [10,0]];
              }
            else
             {"unknown block:(exit 21)";}
            
           case 21:return select_store$1(self$neg1,is_assign,addr,exp);
           }
         },
       select_operation,
       function(self$neg1,op,args)
        {var exit;
         
         if(typeof op=="number")
          {switch(op)
            {case 1:exit=18;
             case 2:exit=18;
             case 4:return /* tuple */[0,[11,3],args];
             case 13:exit=18;
             case 14:exit=18;
             case 17:
              "unknown block:(sendself self-1/1152 select_floatarith/1111 1a 7a 0a args/1154)";
              
             case 18:
              "unknown block:(sendself self-1/1152 select_floatarith/1111 0a 8a 1a args/1154)";
              
             case 19:
              "unknown block:(sendself self-1/1152 select_floatarith/1111 1a 9a 2a args/1154)";
              
             case 20:
              "unknown block:(sendself self-1/1152 select_floatarith/1111 0a 10a 3a args/1154)";
              
             }}
         else
          {switch(op[0])
            {case 1:
              switch(op[1])
               {case "caml_bswap16_direct":
                 return /* tuple */[0,[13,[5,16]],args];
                case "caml_int32_direct_bswap":
                 return /* tuple */[0,[13,[5,32]],args];
                case "caml_int64_direct_bswap":exit=19;
                case "caml_nativeint_direct_bswap":exit=19;
                case "sqrt":
                 if(op[3]!=0)
                  {exit=20;}
                 else
                  {var exit$1;
                   
                   if(args)
                    {var arg=args[1];
                     
                     var exit$2;
                     
                     switch(arg)
                      {case 11:
                        var match=arg[1];
                        
                        if(typeof match=="number")
                         {switch(match){}}
                        else
                         {switch(match[0])
                           {case 2:
                             var chunk=match[1];
                             
                             if(chunk>=8)
                              {var match$1=arg[2];
                               
                               if(match$1)
                                {if(match$1[2])
                                  {exit$2=14;}
                                 else
                                  {if(args[2])
                                    {exit$1=13;}
                                   else
                                    {"unknown block:(sendself self-1/1152 select_addressing/1108 chunk/1158 (field 0 match/1253))";
                                     
                                     return /* tuple */[0,
                                             /* Ispecific */[13,/* Ifloatsqrtf */[6,match$2[1]]],
                                             /* :: */[0,match$2[2],0]];
                                     }
                                   }
                                 }
                               else
                                {exit$2=14;}
                               }
                             else
                              {exit$2=14;}
                             
                            default:exit$2=14;}}
                        
                       default:exit$2=14;}
                     
                     switch(exit$2)
                      {case 14:
                        if(args[2])
                         {exit$1=13;}
                        else
                         {return /* tuple */[0,[13,0],/* :: */[0,arg,0]];}
                        
                       }
                     }
                   else
                    {exit$1=13;}
                   
                   switch(exit$1)
                    {case 13:
                      throw [0,Assert_failure,[0,"asmcomp/selection.ml",196,9]];
                     }
                   }
                 
                default:exit=20;}
              
             case 3:
              if(op[1]!=6)
               {exit=20;}
              else
               {var exit$3;
                
                if(args)
                 {var match$3=args[2];
                  
                  if(match$3)
                   {var match$4=match$3[1];
                    
                    switch(match$4)
                     {case 11:
                       var match$5=match$4[1];
                       
                       if("unknown primitive:isint")
                        {if(match$5!=1)
                          {exit$3=17;}
                         else
                          {var match$6=match$4[2];
                           
                           if(match$6)
                            {var match$7=match$6[1];
                             
                             switch(match$7)
                              {case 11:
                                var $js=match$7[1];
                                if(typeof $js=="number")
                                 {switch($js){}}
                                else
                                 {switch($js[0])
                                   {case 2:
                                     var match$8=match$7[2];
                                     
                                     if(match$8)
                                      {if(match$8[2])
                                        {exit$3=17;}
                                       else
                                        {var match$9=match$6[2];
                                         
                                         if(match$9)
                                          {var match$10=match$9[1];
                                           
                                           switch(match$10)
                                            {case 0:
                                              if(match$9[2])
                                               {exit$3=17;}
                                              else
                                               {if(match$3[2])
                                                 {exit$3=17;}
                                                else
                                                 {var n=match$10[1];
                                                  
                                                  var loc=args[1];
                                                  
                                                  "unknown block:(sendself self-1/1152 is_immediate/1105 n/1165)";
                                                  if("unknown primitive:caml_equal"&&0)
                                                   {"unknown block:(sendself self-1/1152 select_addressing/1108 6a loc/1163)";
                                                    
                                                    return /* tuple */[0,
                                                            /* Ispecific */[13,/* Ioffset_loc */[3,n,match$11[1]]],
                                                            /* :: */[0,match$11[2],0]];
                                                    }
                                                  else
                                                   {exit$3=17;}
                                                  }
                                                }
                                              
                                             default:exit$3=17;}
                                           }
                                         else
                                          {exit$3=17;}
                                         }
                                       }
                                     else
                                      {exit$3=17;}
                                     
                                    default:exit$3=17;}}
                                
                               default:exit$3=17;}
                             }
                           else
                            {exit$3=17;}
                           }
                         }
                       else
                        {exit$3=17;}
                       
                      default:exit$3=17;}
                    }
                  else
                   {exit$3=17;}
                  }
                else
                 {exit$3=17;}
                
                switch(exit$3)
                 {case 17:return select_operation$1(self$neg1,op,args);}
                }
              
             default:exit=20;}}
         
         switch(exit)
          {case 20:return select_operation$1(self$neg1,op,args);
           case 18:
            "unknown block:(sendself self-1/1152 select_addressing/1108 6a\n  (makeblock 11 op/1153 args/1154))";
            
            var addr=match$12[1];
            
            var exit$4;
            
            switch(addr)
             {case 1:return select_operation$1(self$neg1,op,args);
              case 2:
               if(addr[1]!=0)
                {exit$4=11;}
               else
                {return select_operation$1(self$neg1,op,args);}
               
              default:exit$4=11;}
            
            switch(exit$4)
             {case 11:
               return /* tuple */[0,
                       /* Ispecific */[13,/* Ilea */[0,addr]],
                       /* :: */[0,match$12[2],0]];
               
              }
            
           case 19:return /* tuple */[0,[13,[5,64]],args];
           }
         },
       select_floatarith,
       function(self$neg1,commutative,regular_op,mem_op,args)
        {var exit;
         
         if(args)
          {var arg1=args[1];
           
           var exit$1;
           
           var match=args[2];
           
           if(match)
            {var match$1=match[1];
             
             switch(match$1)
              {case 11:
                var match$2=match$1[1];
                
                if(typeof match$2=="number")
                 {switch(match$2){}}
                else
                 {switch(match$2[0])
                   {case 2:
                     var chunk=match$2[1];
                     
                     if(chunk>=8)
                      {var match$3=match$1[2];
                       
                       if(match$3)
                        {if(match$3[2])
                          {exit$1=8;}
                         else
                          {if(match[2])
                            {exit=6;}
                           else
                            {"unknown block:(sendself self-1/1169 select_addressing/1108 chunk/1175 (field 0 match/1225))";
                             
                             return /* tuple */[0,
                                     /* Ispecific */[13,
                                      /* Ifloatarithmem */[4,mem_op,match$4[1]]],
                                     /* :: */[0,arg1,/* :: */[0,match$4[2],0]]];
                             }
                           }
                         }
                       else
                        {exit$1=8;}
                       }
                     else
                      {exit$1=8;}
                     
                    default:exit$1=8;}}
                
               default:exit$1=8;}
             }
           else
            {exit=6;}
           
           switch(exit$1)
            {case 8:
              switch(arg1)
               {case 11:
                 var match$5=arg1[1];
                 
                 if(typeof match$5=="number")
                  {switch(match$5){}}
                 else
                  {switch(match$5[0])
                    {case 2:
                      var chunk$1=match$5[1];
                      
                      if(chunk$1>=8)
                       {var match$6=arg1[2];
                        
                        if(match$6)
                         {if(match$6[2])
                           {"unknown block:(exit 7)";}
                          else
                           {var match$7=args[2];
                            
                            if(match$7[2])
                             {exit=6;}
                            else
                             {if(commutative)
                               {"unknown block:(sendself self-1/1169 select_addressing/1108 chunk/1177 (field 0 match/1233))";
                                
                                return /* tuple */[0,
                                        /* Ispecific */[13,
                                         /* Ifloatarithmem */[4,mem_op,match$8[1]]],
                                        /* :: */[0,match$7[1],/* :: */[0,match$8[2],0]]];
                                }
                              else
                               {"unknown block:(exit 7)";}
                              }
                            }
                          }
                        else
                         {"unknown block:(exit 7)";}
                        }
                      else
                       {"unknown block:(exit 7)";}
                      
                     default:"unknown block:(exit 7)";}}
                 
                default:"unknown block:(exit 7)";}
              
             case 7:
              var match$9=args[2];
              
              if(match$9[2])
               {exit=6;}
              else
               {return /* tuple */[0,
                        regular_op,
                        /* :: */[0,arg1,/* :: */[0,match$9[1],0]]];
                }
              
             }
           }
         else
          {exit=6;}
         
         switch(exit)
          {case 6:throw [0,Assert_failure,[0,"asmcomp/selection.ml",235,6]];}
         },
       mark_c_tailcall,
       function(self$neg1){return Proc["contains_calls"][1]=1,0;},
       insert_op_debug,
       function(self$neg1,op,dbg,rs,rd)
        {try
          {var match=pseudoregs_for_operation(op,rs,rd);
           
           var rdst=match[2];
           
           var rsrc=match[1];
           
           "unknown block:(sendself self-1/1189 insert_moves/1196 rs/1192 rsrc/1194)";
           
           "unknown block:(sendself self-1/1189 insert_debug/1197 (makeblock 0 op/1190) dbg/1191\n  rsrc/1194 rdst/1195)";
           
           "unknown block:(sendself self-1/1189 insert_moves/1196 rdst/1195 rd/1193)";
           
           return rd;
           }
         catch(exn)
          {if(exn=Use_default)
            {return insert_op_debug$1(self$neg1,op,dbg,rs,rd);}
           else
            {throw exn;}
           }
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 selector=
  CamlinternalOO["make_class"]
   ([0,
     "insert_moves",
     "mark_c_tailcall",
     "insert_move_args",
     "select_floatarith",
     "mark_instr",
     "emit_fundecl",
     "extract",
     "emit_expr",
     "emit_tail",
     "regs_for",
     "is_immediate",
     "is_simple_expr",
     "select_condition",
     "emit_extcall_args",
     "insert_debug",
     "is_immediate_natint",
     "insert_op",
     "insert",
     "emit_stores",
     "insert_op_debug",
     "select_addressing",
     "select_store",
     "insert_move",
     "insert_move_results",
     "select_operation",
     "mark_call",
     "mark_tailcall"],
    selector_init);

var
 fundecl=
  function(f)
   {"unknown block:(send (apply (field 0 selector/1077) 0a) -290870531 f/1199)";
    };

module["exports"]={"fundecl":fundecl};

