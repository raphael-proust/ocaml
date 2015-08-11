// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var CamlinternalOO=require("CamlinternalOO");
var Mach=require("Mach");
var Simplif=require("Simplif");
var Pervasives=require("Pervasives");
var List=require("List");
var Clflags=require("Clflags");
var Cmm=require("Cmm");
var Debuginfo=require("Debuginfo");
var Misc=require("Misc");
var Proc=require("Proc");
var Arch=require("Arch");
var Tbl=require("Tbl");
var Ident=require("Ident");
var $$Array=require("Array");


var shared=[0,"instr_seq"];

var
 shared$1=
  [0,
   "select_store",
   "select_shift",
   "select_operation",
   "select_condition",
   "select_arith_comp",
   "select_arith_comm",
   "select_arith",
   "select_addressing",
   "regs_for",
   "mark_tailcall",
   "mark_instr",
   "mark_call",
   "mark_c_tailcall",
   "is_simple_expr",
   "is_immediate",
   "insert_op_debug",
   "insert_op",
   "insert_moves",
   "insert_move_results",
   "insert_move_args",
   "insert_move",
   "insert_debug",
   "insert",
   "extract",
   "emit_tuple",
   "emit_tail_sequence",
   "emit_tail",
   "emit_stores",
   "emit_sequence",
   "emit_return",
   "emit_parts_list",
   "emit_parts",
   "emit_fundecl",
   "emit_extcall_args",
   "emit_expr",
   "bind_let"];

var
 oper_result_type=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param)
       {case 0:return Cmm["typ_addr"];
        case 13:exit=168;
        case 14:exit=168;
        case 15:exit=169;
        case 16:exit=169;
        case 17:exit=169;
        case 18:exit=169;
        case 19:exit=169;
        case 20:exit=169;
        case 21:return Cmm["typ_float"];
        case 22:return Cmm["typ_int"];
        }}
    else
     {switch(param[0])
       {case 0:return param[1];
        case 1:return param[2];
        case 2:
         var c=param[1];
         
         if(c!=6)
          {if(c>=7){return Cmm["typ_float"];}else{return Cmm["typ_int"];}}
         else
          {return Cmm["typ_addr"];}
         
        case 3:exit=170;
        case 7:exit=170;
        case 8:exit=170;
        default:exit=167;}}
    
    switch(exit)
     {case 170:return Cmm["typ_void"];
      case 167:return Cmm["typ_int"];
      case 168:return Cmm["typ_addr"];
      case 169:return Cmm["typ_float"];
      }
    };

var
 size_expr=
  function(env,exp)
   {var
     size=
      function(localenv,param)
       {var exit;
        
        switch(param)
         {case 0:exit=161;
          case 1:exit=161;
          case 2:return Arch["size_float"];
          case 3:exit=162;
          case 4:exit=162;
          case 5:exit=162;
          case 6:exit=161;
          case 7:
           var id=param[1];
           
           try
            {return Tbl["find"](id,localenv);}
           catch(exn)
            {if(exn=Not_found)
              {try
                {var regs=Tbl["find"](id,env);
                 
                 return Cmm["size_machtype"]
                         ($$Array["map"](function(r){return r[3];},regs));
                 }
               catch(exn$1)
                {if(exn$1=Not_found)
                  {return Misc["fatal_error"]
                           (Pervasives["^"]
                             ("Selection.size_expr: unbound var ",
                              Ident["unique_name"](id)));
                   }
                 else
                  {throw exn$1;}
                 }
               }
             else
              {throw exn;}
             }
           
          case 8:
           return size
                   (Tbl["add"](param[1],size(localenv,param[2]),localenv),
                    param[3]);
           
          case 10:
           return List["fold_right"]
                   (function(e,sz){return size(localenv,e)+sz;},param[1],0);
           
          case 11:return Cmm["size_machtype"](oper_result_type(param[1]));
          case 12:return size(localenv,param[2]);
          default:return Misc["fatal_error"]("Selection.size_expr");}
        
        switch(exit)
         {case 161:return Arch["size_int"];case 162:return Arch["size_addr"];}
        };
    
    return size(Tbl["empty"],exp);
    };

var
 swap_intcomp=
  function(param)
   {switch(param)
     {case 0:return /* Isigned */[0,Cmm["swap_comparison"](param[1])];
      case 1:return /* Iunsigned */[1,Cmm["swap_comparison"](param[1])];
      }
    };

var
 all_regs_anonymous=
  function(rv)
   {try
     {for(var i=0;i<=rv["length"]-1;i++)
       {if(!Reg["anonymous"](rv[i])){throw Pervasives["Exit"];}else{}}
      
      return 1;
      }
    catch(exn){if(exn=Pervasives["Exit"]){return 0;}else{throw exn;}}
    };

var
 name_regs=
  function(id,rv)
   {if(rv["length"]=1)
     {return rv[0][1]=Reg["Raw_name"][1](id),0;}
    else
     {for(var i=0;i<=rv["length"]-1;i++)
       {rv[i][1]=Reg["Raw_name"][1](id),0,rv[i][6]=/* Some */[0,i],0}
      }
    };

var
 join=
  function(opt_r1,seq1,opt_r2,seq2)
   {if(opt_r1)
     {if(opt_r2)
       {var r2=opt_r2[1];
        
        var r1=opt_r1[1];
        
        var l1=r1["length"];
        
        if(l1=r2["length"])
         {}
        else
         {throw [0,Assert_failure,[0,"asmcomp/selectgen.ml",113,6]];}
        
        var r="unknown primitive:caml_make_vect";
        
        for(var i=0;i<=l1-1;i++)
         {if(Reg["anonymous"](r1[i]))
           {r[i]=r1[i],0;
            "unknown block:(send seq2/1115 804875543 (array.get r2/1117 i/1120)\n  (array.get r1/1116 i/1120))";
            }
          else
           {if(Reg["anonymous"](r2[i]))
             {r[i]=r2[i],0;
              "unknown block:(send seq1/1113 804875543 (array.get r1/1116 i/1120)\n  (array.get r2/1117 i/1120))";
              }
            else
             {r[i]=Reg["create"](r1[i][3]),0;
              "unknown block:(send seq1/1113 804875543 (array.get r1/1116 i/1120)\n  (array.get r/1119 i/1120))";
              
              "unknown block:(send seq2/1115 804875543 (array.get r2/1117 i/1120)\n  (array.get r/1119 i/1120))";
              }
            }
          }
        
        return /* Some */[0,r];
        }
      else
       {return opt_r1;}
      }
    else
     {return opt_r2;}
    };

var
 join_array=
  function(rs)
   {var some_res=0;
    
    for(var i=0;i<=rs["length"]-1;i++)
     {var match=rs[i];var r=match[1];if(r!=0){some_res=r;}else{}}
    
    var match$1=some_res;
    
    if(match$1)
     {var template=match$1[1];
      
      var size_res=template["length"];
      
      var res="unknown primitive:caml_make_vect";
      
      for(var i$1=0;i$1<=size_res-1;i$1++)
       {res[i$1]=Reg["create"](template[i$1][3]),0}
      
      for(var i$2=0;i$2<=rs["length"]-1;i$2++)
       {var match$2=rs[i$2];
        
        var r$1=match$2[1];
        
        if(r$1)
         {"unknown block:(send (field 1 match/1879) -901380228 (field 0 r/1132) res/1129)";
          }
        else
         {}
        }
      
      return /* Some */[0,res];
      }
    else
     {return 0;}
    };

var
 debuginfo_op=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 0:exit=142;
        case 1:return param[4];
        case 7:exit=142;
        case 8:return param[1];
        default:exit=141;}}
    
    switch(exit){case 142:return param[2];case 141:return Debuginfo["none"];}
    };

var catch_regs=[0,0];

var current_function_name=[0,""];

var
 selector_generic=
  [0,
   0,
   function($$class)
    {var ids=CamlinternalOO["new_methods_variables"]($$class,shared$1,shared);
     
     var select_store=ids[1];
     
     var select_shift=ids[2];
     
     var select_operation=ids[3];
     
     var select_condition=ids[4];
     
     var select_arith_comp=ids[5];
     
     var select_arith_comm=ids[6];
     
     var select_arith=ids[7];
     
     var select_addressing=ids[8];
     
     var regs_for=ids[9];
     
     var mark_tailcall=ids[10];
     
     var mark_instr=ids[11];
     
     var mark_call=ids[12];
     
     var mark_c_tailcall=ids[13];
     
     var is_simple_expr=ids[14];
     
     var is_immediate=ids[15];
     
     var insert_op_debug=ids[16];
     
     var insert_op=ids[17];
     
     var insert_moves=ids[18];
     
     var insert_move_results=ids[19];
     
     var insert_move_args=ids[20];
     
     var insert_move=ids[21];
     
     var insert_debug=ids[22];
     
     var insert=ids[23];
     
     var extract=ids[24];
     
     var emit_tuple=ids[25];
     
     var emit_tail_sequence=ids[26];
     
     var emit_tail=ids[27];
     
     var emit_stores=ids[28];
     
     var emit_sequence=ids[29];
     
     var emit_return=ids[30];
     
     var emit_parts_list=ids[31];
     
     var emit_parts=ids[32];
     
     var emit_fundecl=ids[33];
     
     var emit_extcall_args=ids[34];
     
     var emit_expr=ids[35];
     
     var bind_let=ids[36];
     
     var instr_seq=ids[37];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        is_simple_expr,
        function(self$neg1,param)
         {var exit;
          
          switch(param)
           {case 8:
             "unknown block:(sendself self-1/1187 is_simple_expr/1149 (field 1 param/1844))";
             "unknown block:(sendself self-1/1187 is_simple_expr/1149 (field 2 param/1844))";
             return 0&&0;
             
            case 9:exit=137;
            case 10:
             "unknown block:(sendself self-1/1187 is_simple_expr/1149)";
             return List["for_all"](0,param[1]);
             
            case 11:
             var exit$1;
             
             var $js=param[1];
             if(typeof $js=="number")
              {switch($js){case 0:exit$1=135;}}
             else
              {switch($js[0])
                {case 0:exit$1=135;
                 case 1:exit$1=135;
                 case 3:exit$1=135;
                 case 7:exit$1=135;
                 default:exit$1=136;}}
             
             switch(exit$1)
              {case 136:
                "unknown block:(sendself self-1/1187 is_simple_expr/1149)";
                return List["for_all"](0,param[2]);
                
               case 135:return 0;
               }
             
            case 12:
             "unknown block:(sendself self-1/1187 is_simple_expr/1149 (field 0 param/1844))";
             "unknown block:(sendself self-1/1187 is_simple_expr/1149 (field 1 param/1844))";
             return 0&&0;
             
            case 13:exit=137;
            case 14:exit=137;
            case 15:exit=137;
            case 16:exit=137;
            case 17:exit=137;
            case 18:exit=137;
            default:return 1;}
          
          switch(exit){case 137:return 0;}
          },
        select_store,
        function(self$neg1,is_assign,addr,arg)
         {return /* tuple */[0,/* Istore */[9,6,addr,is_assign],arg];},
        mark_call,
        function(self$neg1){return Proc["contains_calls"][1]=1,0;},
        mark_tailcall,
        0,
        0,
        mark_c_tailcall,
        0,
        0,
        mark_instr,
        function(self$neg1,param)
         {var exit;
          
          if(typeof param=="number")
           {switch(param){}}
          else
           {switch(param[0])
             {case 0:
               var match=param[1];
               
               var exit$1;
               
               if(typeof match=="number")
                {switch(match){case 3:exit$1=131;case 4:exit$1=132;}}
               else
                {switch(match[0])
                  {case 4:exit$1=131;
                   case 5:exit$1=132;
                   case 6:exit$1=131;
                   case 10:
                    "unknown block:(sendself self-1/1208 mark_call/1153)";
                   case 11:exit$1=134;
                   case 12:exit$1=134;
                   default:exit=130;}}
               
               switch(exit$1)
                {case 134:
                  var match$1=match[1];
                  
                  if("unknown primitive:isint")
                   {if(match$1>=12)
                     {"unknown block:(sendself self-1/1208 mark_c_tailcall/1155)";
                      }
                    else
                     {exit=130;}
                    }
                  else
                   {exit=130;}
                  
                 case 131:
                  "unknown block:(sendself self-1/1208 mark_call/1153)";
                 case 132:
                  "unknown block:(sendself self-1/1208 mark_tailcall/1154)";
                 }
               
              case 6:"unknown block:(sendself self-1/1208 mark_call/1153)";
              case 7:
               if(param[1]>=2)
                {return 0;}
               else
                {if(Clflags["debug"][1])
                  {"unknown block:(sendself self-1/1208 mark_call/1153)";}
                 else
                  {return 0;}
                 }
               
              default:exit=130;}}
          
          switch(exit){case 130:return 0;}
          },
        select_operation,
        function(self$neg1,op,args)
         {var exit;
          
          if(typeof op=="number")
           {switch(op)
             {case 0:return /* tuple */[0,[10,0],args];
              case 1:exit=127;
              case 2:exit=128;
              case 3:
               "unknown block:(sendself self-1/1211 select_arith_comm/1158 2a args/1213)";
               
              case 4:
               "unknown block:(sendself self-1/1211 select_arith_comm/1158 3a args/1213)";
               
              case 5:return /* tuple */[0,[11,4],args];
              case 6:return /* tuple */[0,[11,5],args];
              case 7:
               "unknown block:(sendself self-1/1211 select_arith_comm/1158 6a args/1213)";
               
              case 8:
               "unknown block:(sendself self-1/1211 select_arith_comm/1158 7a args/1213)";
               
              case 9:
               "unknown block:(sendself self-1/1211 select_arith_comm/1158 8a args/1213)";
               
              case 10:
               "unknown block:(sendself self-1/1211 select_shift/1160 9a args/1213)";
               
              case 11:
               "unknown block:(sendself self-1/1211 select_shift/1160 10a args/1213)";
               
              case 12:
               "unknown block:(sendself self-1/1211 select_shift/1160 11a args/1213)";
               
              case 13:exit=127;
              case 14:exit=128;
              case 15:return /* tuple */[0,5,args];
              case 16:return /* tuple */[0,6,args];
              case 17:return /* tuple */[0,7,args];
              case 18:return /* tuple */[0,8,args];
              case 19:return /* tuple */[0,9,args];
              case 20:return /* tuple */[0,10,args];
              case 21:return /* tuple */[0,11,args];
              case 22:return /* tuple */[0,12,args];
              }}
          else
           {switch(op[0])
             {case 0:
               var exit$1;
               
               if(args)
                {var match=args[1];
                 
                 switch(match)
                  {case 3:
                    return /* tuple */[0,/* Icall_imm */[4,match[1]],args[2]];
                   default:exit$1=126;}
                 }
               else
                {exit$1=126;}
               
               switch(exit$1){case 126:return /* tuple */[0,3,args];}
               
              case 1:return /* tuple */[0,/* Iextcall */[6,op[1],op[3]],args];
              case 2:
               if(args)
                {if(args[2])
                  {exit=125;}
                 else
                  {var chunk=op[1];
                   
                   "unknown block:(sendself self-1/1211 select_addressing/1151 chunk/1224 (field 0 args/1213))";
                   
                   return /* tuple */[0,
                           /* Iload */[8,chunk,match$1[1]],
                           /* :: */[0,match$1[2],0]];
                   }
                 }
               else
                {exit=125;}
               
              case 3:
               if(args)
                {var match$2=args[2];
                 
                 if(match$2)
                  {if(match$2[2])
                    {exit=125;}
                   else
                    {var arg2=match$2[1];
                     
                     var chunk$1=op[1];
                     
                     "unknown block:(sendself self-1/1211 select_addressing/1151 chunk/1226 (field 0 args/1213))";
                     
                     var eloc=match$3[2];
                     
                     var addr=match$3[1];
                     
                     if(chunk$1=6)
                      {"unknown block:(sendself self-1/1211 select_store/1152 1a addr/1233 arg2/1228)";
                       
                       return /* tuple */[0,
                               match$4[1],
                               /* :: */[0,match$4[2],/* :: */[0,eloc,0]]];
                       }
                     else
                      {return /* tuple */[0,
                               /* Istore */[9,chunk$1,addr,1],
                               /* :: */[0,arg2,/* :: */[0,eloc,0]]];
                       }
                     }
                   }
                 else
                  {exit=125;}
                 }
               else
                {exit=125;}
               
              case 4:
               "unknown block:(sendself self-1/1211 select_arith_comp/1161 (makeblock 0 (field 0 op/1212))\n  args/1213)";
               
              case 5:
               "unknown block:(sendself self-1/1211 select_arith_comp/1161 (makeblock 1 (field 0 op/1212))\n  args/1213)";
               
              case 6:exit=125;
              case 7:exit=125;
              case 8:
               "unknown block:(sendself self-1/1211 select_arith/1159 12a args/1213)";
               
              }}
          
          switch(exit)
           {case 127:
             "unknown block:(sendself self-1/1211 select_arith_comm/1158 0a args/1213)";
             
            case 128:
             "unknown block:(sendself self-1/1211 select_arith/1159 1a args/1213)";
             
            case 125:return Misc["fatal_error"]("Selection.select_oper");
            }
          },
        select_arith_comm,
        function(self$neg1,op,args)
         {var exit;
          
          if(args)
           {var arg=args[1];
            
            var exit$1;
            
            var match=args[2];
            
            if(match)
             {var match$1=match[1];
              
              var exit$2;
              
              switch(match$1)
               {case 0:exit$2=120;case 4:exit$2=120;default:exit$1=119;}
              
              switch(exit$2)
               {case 120:
                 if(match[2])
                  {exit=118;}
                 else
                  {var n=match$1[1];
                   
                   "unknown block:(sendself self-1/1238 is_immediate/1150 n/1241)";
                   if(0)
                    {return /* tuple */[0,
                             /* Iintop_imm */[12,op,n],
                             /* :: */[0,arg,0]];
                     }
                   else
                    {exit$1=119;}
                   }
                 
                }
              }
            else
             {exit=118;}
            
            switch(exit$1)
             {case 119:
               var exit$3;
               
               switch(arg)
                {case 0:exit$3=121;case 4:exit$3=121;default:exit=118;}
               
               switch(exit$3)
                {case 121:
                  var match$2=args[2];
                  
                  if(match$2[2])
                   {exit=118;}
                  else
                   {var n$1=arg[1];
                    
                    "unknown block:(sendself self-1/1238 is_immediate/1150 n/1244)";
                    if(0)
                     {return /* tuple */[0,
                              /* Iintop_imm */[12,op,n$1],
                              /* :: */[0,match$2[1],0]];
                      }
                    else
                     {exit=118;}
                    }
                  
                 }
               
              }
            }
          else
           {exit=118;}
          
          switch(exit)
           {case 118:return /* tuple */[0,/* Iintop */[11,op],args];}
          },
        select_arith,
        function(self$neg1,op,args)
         {var exit;
          
          if(args)
           {var match=args[2];
            
            if(match)
             {var match$1=match[1];
              
              var exit$1;
              
              switch(match$1)
               {case 0:exit$1=117;case 4:exit$1=117;default:exit=116;}
              
              switch(exit$1)
               {case 117:
                 if(match[2])
                  {exit=116;}
                 else
                  {var n=match$1[1];
                   
                   "unknown block:(sendself self-1/1250 is_immediate/1150 n/1253)";
                   if(0)
                    {return /* tuple */[0,
                             /* Iintop_imm */[12,op,n],
                             /* :: */[0,args[1],0]];
                     }
                   else
                    {exit=116;}
                   }
                 
                }
              }
            else
             {exit=116;}
            }
          else
           {exit=116;}
          
          switch(exit)
           {case 116:return /* tuple */[0,/* Iintop */[11,op],args];}
          },
        select_shift,
        function(self$neg1,op,args)
         {var exit;
          
          if(args)
           {var match=args[2];
            
            if(match)
             {var match$1=match[1];
              
              switch(match$1)
               {case 0:
                 if(match[2])
                  {exit=115;}
                 else
                  {var n=match$1[1];
                   
                   if(n>=0&&n<Arch["size_int"]*8)
                    {return /* tuple */[0,
                             /* Iintop_imm */[12,op,n],
                             /* :: */[0,args[1],0]];
                     }
                   else
                    {exit=115;}
                   }
                 
                default:exit=115;}
              }
            else
             {exit=115;}
            }
          else
           {exit=115;}
          
          switch(exit)
           {case 115:return /* tuple */[0,/* Iintop */[11,op],args];}
          },
        select_arith_comp,
        function(self$neg1,cmp,args)
         {var exit;
          
          if(args)
           {var arg=args[1];
            
            var exit$1;
            
            var match=args[2];
            
            if(match)
             {var match$1=match[1];
              
              var exit$2;
              
              switch(match$1)
               {case 0:exit$2=113;case 4:exit$2=113;default:exit$1=112;}
              
              switch(exit$2)
               {case 113:
                 if(match[2])
                  {exit=111;}
                 else
                  {var n=match$1[1];
                   
                   "unknown block:(sendself self-1/1264 is_immediate/1150 n/1267)";
                   if(0)
                    {return /* tuple */[0,
                             /* Iintop_imm */[12,/* Icomp */[0,cmp],n],
                             /* :: */[0,arg,0]];
                     }
                   else
                    {exit$1=112;}
                   }
                 
                }
              }
            else
             {exit=111;}
            
            switch(exit$1)
             {case 112:
               var exit$3;
               
               switch(arg)
                {case 0:exit$3=114;case 4:exit$3=114;default:exit=111;}
               
               switch(exit$3)
                {case 114:
                  var match$2=args[2];
                  
                  if(match$2[2])
                   {exit=111;}
                  else
                   {var n$1=arg[1];
                    
                    "unknown block:(sendself self-1/1264 is_immediate/1150 n/1270)";
                    if(0)
                     {return /* tuple */[0,
                              /* Iintop_imm */[12,/* Icomp */[0,swap_intcomp(cmp)],n$1],
                              /* :: */[0,match$2[1],0]];
                      }
                    else
                     {exit=111;}
                    }
                  
                 }
               
              }
            }
          else
           {exit=111;}
          
          switch(exit)
           {case 111:
             return /* tuple */[0,/* Iintop */[11,/* Icomp */[0,cmp]],args];
            }
          },
        select_condition,
        function(self$neg1,arg)
         {var exit;
          
          switch(arg)
           {case 11:
             var match=arg[1];
             
             if(typeof match=="number")
              {switch(match)
                {case 7:
                  var match$1=arg[2];
                  
                  if(match$1)
                   {var match$2=match$1[2];
                    
                    if(match$2)
                     {var match$3=match$2[1];
                      
                      switch(match$3)
                       {case 0:
                         if(match$3[1]!=1)
                          {exit=102;}
                         else
                          {if(match$2[2])
                            {exit=102;}
                           else
                            {return /* tuple */[0,2,match$1[1]];}
                           }
                         
                        default:exit=102;}
                      }
                    else
                     {exit=102;}
                    }
                  else
                   {exit=102;}
                  
                 }}
             else
              {switch(match[0])
                {case 4:
                  var args=arg[2];
                  
                  var cmp=match[1];
                  
                  var exit$1;
                  
                  if(args)
                   {var arg1=args[1];
                    
                    var exit$2;
                    
                    var match$4=args[2];
                    
                    if(match$4)
                     {var match$5=match$4[1];
                      
                      switch(match$5)
                       {case 0:
                         if(match$4[2])
                          {exit$1=103;}
                         else
                          {var n=match$5[1];
                           
                           "unknown block:(sendself self-1/1276 is_immediate/1150 n/1279)";
                           if(0)
                            {return /* tuple */[0,
                                     /* Iinttest_imm */[1,/* Isigned */[0,cmp],n],
                                     arg1];
                             }
                           else
                            {exit$2=106;}
                           }
                         
                        default:exit$2=106;}
                      }
                    else
                     {exit$1=103;}
                    
                    switch(exit$2)
                     {case 106:
                       switch(arg1)
                        {case 0:
                          var match$6=args[2];
                          
                          if(match$6[2])
                           {exit$1=103;}
                          else
                           {var n$1=arg1[1];
                            
                            "unknown block:(sendself self-1/1276 is_immediate/1150 n/1281)";
                            if(0)
                             {return /* tuple */[0,
                                      /* Iinttest_imm */[1,
                                       /* Isigned */[0,Cmm["swap_comparison"](cmp)],
                                       n$1],
                                      match$6[1]];
                              }
                            else
                             {"unknown block:(exit 105)";}
                            }
                          
                         default:"unknown block:(exit 105)";}
                       
                      case 105:
                       var match$7=args[2];
                       
                       var match$8=match$7[1];
                       
                       switch(match$8)
                        {case 4:
                          if(match$7[2])
                           {exit$1=103;}
                          else
                           {var n$2=match$8[1];
                            
                            "unknown block:(sendself self-1/1276 is_immediate/1150 n/1285)";
                            if(0)
                             {return /* tuple */[0,
                                      /* Iinttest_imm */[1,/* Isigned */[0,cmp],n$2],
                                      arg1];
                              }
                            else
                             {"unknown block:(exit 104)";}
                            }
                          
                         default:"unknown block:(exit 104)";}
                       
                      case 104:
                       switch(arg1)
                        {case 4:
                          var match$9=args[2];
                          
                          if(match$9[2])
                           {exit$1=103;}
                          else
                           {var n$3=arg1[1];
                            
                            "unknown block:(sendself self-1/1276 is_immediate/1150 n/1287)";
                            if(0)
                             {return /* tuple */[0,
                                      /* Iinttest_imm */[1,
                                       /* Isigned */[0,Cmm["swap_comparison"](cmp)],
                                       n$3],
                                      match$9[1]];
                              }
                            else
                             {exit$1=103;}
                            }
                          
                         default:exit$1=103;}
                       
                      }
                    }
                  else
                   {exit$1=103;}
                  
                  switch(exit$1)
                   {case 103:
                     return /* tuple */[0,
                             /* Iinttest */[0,/* Isigned */[0,cmp]],
                             /* Ctuple */[10,args]];
                     
                    }
                  
                 case 5:
                  var args$1=arg[2];
                  
                  var cmp$1=match[1];
                  
                  var exit$3;
                  
                  if(args$1)
                   {var arg1$1=args$1[1];
                    
                    var exit$4;
                    
                    var match$10=args$1[2];
                    
                    if(match$10)
                     {var match$11=match$10[1];
                      
                      var exit$5;
                      
                      switch(match$11)
                       {case 0:exit$5=109;case 4:exit$5=109;default:exit$4=108;}
                      
                      switch(exit$5)
                       {case 109:
                         if(match$10[2])
                          {exit$3=107;}
                         else
                          {var n$4=match$11[1];
                           
                           "unknown block:(sendself self-1/1276 is_immediate/1150 n/1296)";
                           if(0)
                            {return /* tuple */[0,
                                     /* Iinttest_imm */[1,/* Iunsigned */[1,cmp$1],n$4],
                                     arg1$1];
                             }
                           else
                            {exit$4=108;}
                           }
                         
                        }
                      }
                    else
                     {exit$3=107;}
                    
                    switch(exit$4)
                     {case 108:
                       var exit$6;
                       
                       switch(arg1$1)
                        {case 0:exit$6=110;case 4:exit$6=110;default:exit$3=107;}
                       
                       switch(exit$6)
                        {case 110:
                          var match$12=args$1[2];
                          
                          if(match$12[2])
                           {exit$3=107;}
                          else
                           {var n$5=arg1$1[1];
                            
                            "unknown block:(sendself self-1/1276 is_immediate/1150 n/1301)";
                            if(0)
                             {return /* tuple */[0,
                                      /* Iinttest_imm */[1,
                                       /* Iunsigned */[1,Cmm["swap_comparison"](cmp$1)],
                                       n$5],
                                      match$12[1]];
                              }
                            else
                             {exit$3=107;}
                            }
                          
                         }
                       
                      }
                    }
                  else
                   {exit$3=107;}
                  
                  switch(exit$3)
                   {case 107:
                     return /* tuple */[0,
                             /* Iinttest */[0,/* Iunsigned */[1,cmp$1]],
                             /* Ctuple */[10,args$1]];
                     
                    }
                  
                 case 6:
                  return /* tuple */[0,
                          /* Ifloattest */[2,match[1],0],
                          /* Ctuple */[10,arg[2]]];
                  
                 default:exit=102;}}
             
            default:exit=102;}
          
          switch(exit){case 102:return /* tuple */[0,0,arg];}
          },
        regs_for,
        function(self$neg1,tys){return Reg["createv"](tys);},
        insert_debug,
        function(self$neg1,desc,dbg,arg,res)
         {return self$neg1[instr_seq]=
                 Mach["instr_cons_debug"]
                  (desc,arg,res,dbg,self$neg1[instr_seq]),
                 0;
          },
        insert,
        function(self$neg1,desc,arg,res)
         {return self$neg1[instr_seq]=
                 Mach["instr_cons"](desc,arg,res,self$neg1[instr_seq]),
                 0;
          },
        extract,
        function(self$neg1)
         {var
           extract$1=
            function(res,i)
             {if(i=Mach["dummy_instr"])
               {return res;}
              else
               {var newrecord="unknown primitive:duprecord regular 6";
                
                return extract$1((newrecord[2]=res,0,newrecord),i[2]);
                }
              };
          
          return extract$1(Mach["end_instr"](0),self$neg1[instr_seq]);
          },
        insert_move,
        function(self$neg1,src,dst)
         {if(src[2]!=dst[2])
           {"unknown block:(sendself self-1/1329 insert/1166 [0: 0a] (makearray  src/1330)\n  (makearray  dst/1331))";
            }
          else
           {return 0;}
          },
        insert_moves,
        function(self$neg1,src,dst)
         {for(var i=0;i<=Pervasives["min"](src["length"],dst["length"])-1;i++)
           {"unknown block:(sendself self-1/1333 insert_move/1168 (array.get src/1334 i/1336)\n  (array.get dst/1335 i/1336))";
            }
          },
        insert_move_args,
        function(self$neg1,arg,loc,stacksize)
         {if(stacksize!=0)
           {"unknown block:(sendself self-1/1338 insert/1166 (makeblock 0 (makeblock 7 stacksize/1341))\n  (makearray ) (makearray ))";
            }
          else
           {}
          
          "unknown block:(sendself self-1/1338 insert_moves/1169 arg/1339 loc/1340)";
          },
        insert_move_results,
        function(self$neg1,loc,res,stacksize)
         {if(stacksize!=0)
           {"unknown block:(sendself self-1/1343 insert/1166\n  (makeblock 0 (makeblock 7 (~ stacksize/1346))) (makearray ) (makearray ))";
            }
          else
           {}
          
          "unknown block:(sendself self-1/1343 insert_moves/1169 loc/1344 res/1345)";
          },
        insert_op_debug,
        function(self$neg1,op,dbg,rs,rd)
         {"unknown block:(sendself self-1/1348 insert_debug/1165 (makeblock 0 op/1349) dbg/1350\n  rs/1351 rd/1352)";
          
          return rd;
          },
        insert_op,
        function(self$neg1,op,rs,rd)
         {"unknown block:(sendself self-1/1354 insert_op_debug/1172 op/1355\n  (field 0 (global Debuginfo!)) rs/1356 rd/1357)";
          },
        emit_expr,
        function(self$neg1,env,exp)
         {switch(exp)
           {case 0:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 2 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173\n  (makeblock 0 (Nativeint.of_int (field 0 exp/1361))) (makearray ) r/1401)";
             return /* Some */[0,0];
             
            case 1:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 2 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173 (makeblock 0 (field 0 exp/1361))\n  (makearray ) r/1402)";
             return /* Some */[0,0];
             
            case 2:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 3 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173 (makeblock 1 (field 0 exp/1361))\n  (makearray ) r/1404)";
             return /* Some */[0,0];
             
            case 3:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 1 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173 (makeblock 2 (field 0 exp/1361))\n  (makearray ) r/1405)";
             return /* Some */[0,0];
             
            case 4:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 1 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173\n  (makeblock 0 (Nativeint.of_int (field 0 exp/1361))) (makearray ) r/1406)";
             return /* Some */[0,0];
             
            case 5:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 1 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173 (makeblock 0 (field 0 exp/1361))\n  (makearray ) r/1407)";
             return /* Some */[0,0];
             
            case 6:
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 2 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 insert_op/1173 (makeblock 3 (field 0 exp/1361))\n  (makearray ) r/1403)";
             return /* Some */[0,0];
             
            case 7:
             var v=exp[1];
             
             try
              {return /* Some */[0,Tbl["find"](v,env)];}
             catch(exn)
              {if(exn=Not_found)
                {return Misc["fatal_error"]
                         (Pervasives["^"]
                           ("Selection.emit_expr: unbound var ",
                            Ident["unique_name"](v)));
                 }
               else
                {throw exn;}
               }
             
            case 8:
             "unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 1 exp/1361))";
             
             if(match)
              {"unknown block:(sendself self-1/1359 emit_expr/1174\n  (sendself self-1/1359 bind_let/1176 env/1360 (field 0 exp/1361)\n    (field 0 match/1710))\n  (field 2 exp/1361))";
               }
             else
              {return 0;}
             
            case 9:
             var v$1=exp[1];
             
             try
              {var rv=Tbl["find"](v$1,env);}
             catch(exn$1)
              {if(exn$1=Not_found)
                {var
                  rv=
                   Misc["fatal_error"]
                    (Pervasives["^"]
                      ("Selection.emit_expr: unbound var ",Ident["name"](v$1)));
                 }
               else
                {throw exn$1;}
               }
             
             "unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 1 exp/1361))";
             
             if(match$1)
              {"unknown block:(sendself self-1/1359 insert_moves/1169 (field 0 match/1712) rv/1409)";
               
               return /* Some */[0,[]];
               }
             else
              {return 0;}
             
            case 10:
             var exp_list=exp[1];
             
             if(exp_list)
              {"unknown block:(sendself self-1/1359 emit_parts_list/1178 env/1360 exp_list/1375)";
               
               if(match$2)
                {var match$3=match$2[1];
                 
                 "unknown block:(sendself self-1/1359 emit_tuple/1179 (field 1 match/1716)\n  (field 0 match/1716))";
                 return /* Some */[0,0];
                 }
               else
                {return 0;}
               }
             else
              {return /* Some */[0,[]];}
             
            case 11:
             var op=exp[1];
             
             var exit;
             
             if(typeof op=="number")
              {switch(op){}}
             else
              {switch(op[0])
                {case 6:
                  "unknown block:(sendself self-1/1359 emit_expr/1174 env/1360\n  (makeblock 13 exp/1361 [0: 1] [0: 0]))";
                  
                 case 7:
                  var match$4=exp[2];
                  
                  if(match$4)
                   {if(match$4[2])
                     {exit=101;}
                    else
                     {"unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 0 match/1748))";
                      
                      if(match$5)
                       {var rd=[Proc["loc_exn_bucket"]];
                        
                        "unknown block:(sendself self-1/1359 insert/1166 [0: 0a] (field 0 match/1718) rd/1414)";
                        
                        "unknown block:(sendself self-1/1359 insert_debug/1165 (makeblock 7 (field 0 op/1381))\n  (field 1 op/1381) rd/1414 (makearray ))";
                        
                        return 0;
                        }
                      else
                       {return 0;}
                      }
                    }
                  else
                   {exit=101;}
                  
                 default:exit=101;}}
             
             switch(exit)
              {case 101:
                "unknown block:(sendself self-1/1359 emit_parts_list/1178 env/1360 (field 1 exp/1361))";
                
                if(match$6)
                 {var match$7=match$6[1];
                  
                  var env$1=match$7[2];
                  
                  var ty=oper_result_type(op);
                  
                  "unknown block:(sendself self-1/1359 select_operation/1157 op/1381 (field 0 match/1727))";
                  
                  var new_args=match$8[2];
                  
                  var new_op=match$8[1];
                  
                  var dbg=debuginfo_op(op);
                  
                  var exit$1;
                  
                  if(typeof new_op=="number")
                   {switch(new_op)
                     {case 3:
                       "unknown block:(sendself self-1/1359 emit_tuple/1179 env/1416 new_args/1419)";
                       
                       var rarg=$$Array["sub"](r1,1,r1["length"]-1);
                       
                       "unknown block:(sendself self-1/1359 regs_for/1163 ty/1417)";
                       
                       var match$9=Proc["loc_arguments"](rarg);
                       
                       var stack_ofs=match$9[2];
                       
                       var loc_arg=match$9[1];
                       
                       var loc_res=Proc["loc_results"](rd$1);
                       
                       "unknown block:(sendself self-1/1359 insert_move_args/1170 rarg/1426 loc_arg/1428\n  stack_ofs/1429)";
                       
                       "unknown block:(sendself self-1/1359 insert_debug/1165 [0: 3a] dbg/1420\n  (apply (field 3 (global Array!)) (makearray  (array.get r1/1425 0))\n    loc_arg/1428)\n  loc_res/1430)";
                       
                       "unknown block:(sendself self-1/1359 insert_move_results/1171 loc_res/1430 rd/1427\n  stack_ofs/1429)";
                       
                       return /* Some */[0,rd$1];
                       
                      }}
                  else
                   {switch(new_op[0])
                     {case 4:
                       "unknown block:(sendself self-1/1359 emit_tuple/1179 env/1416 new_args/1419)";
                       
                       "unknown block:(sendself self-1/1359 regs_for/1163 ty/1417)";
                       
                       var match$10=Proc["loc_arguments"](r1$1);
                       
                       var stack_ofs$1=match$10[2];
                       
                       var loc_arg$1=match$10[1];
                       
                       var loc_res$1=Proc["loc_results"](rd$2);
                       
                       "unknown block:(sendself self-1/1359 insert_move_args/1170 r1/1431 loc_arg/1433\n  stack_ofs/1434)";
                       
                       "unknown block:(sendself self-1/1359 insert_debug/1165\n  (makeblock 0 (makeblock 4 (field 0 new_op/1418))) dbg/1420 loc_arg/1433\n  loc_res/1435)";
                       
                       "unknown block:(sendself self-1/1359 insert_move_results/1171 loc_res/1435 rd/1432\n  stack_ofs/1434)";
                       
                       return /* Some */[0,rd$2];
                       
                      case 6:
                       "unknown block:(sendself self-1/1359 emit_extcall_args/1180 env/1416 new_args/1419)";
                       
                       "unknown block:(sendself self-1/1359 regs_for/1163 ty/1417)";
                       
                       "unknown block:(sendself self-1/1359 insert_op_debug/1172\n  (makeblock 6 (field 0 new_op/1418) (field 1 new_op/1418)) dbg/1420\n  (field 0 match/1723) (apply (field 12 (global Proc!)) rd/1438))";
                       
                       "unknown block:(sendself self-1/1359 insert_move_results/1171 loc_res/1439 rd/1438\n  (field 1 match/1723))";
                       
                       return /* Some */[0,rd$3];
                       
                      case 10:
                       "unknown block:(sendself self-1/1359 regs_for/1163 (field 1 (global Cmm!)))";
                       
                       var size=size_expr(env$1,/* Ctuple */[10,new_args]);
                       
                       "unknown block:(sendself self-1/1359 insert/1166 (makeblock 0 (makeblock 10 size/1441))\n  (makearray ) rd/1440)";
                       
                       "unknown block:(sendself self-1/1359 emit_stores/1181 env/1416 new_args/1419 rd/1440)";
                       
                       return /* Some */[0,rd$4];
                       
                      default:exit$1=76;}}
                  
                  switch(exit$1)
                   {case 76:
                     "unknown block:(sendself self-1/1359 emit_tuple/1179 env/1416 new_args/1419)";
                     
                     "unknown block:(sendself self-1/1359 regs_for/1163 ty/1417)";
                     
                     "unknown block:(sendself self-1/1359 insert_op_debug/1172 new_op/1418 dbg/1420 r1/1442\n  rd/1443)";
                     return /* Some */[0,0];
                     
                    }
                  }
                else
                 {return 0;}
                
               }
             
            case 12:
             "unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 0 exp/1361))";
             
             if(match$11)
              {"unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 1 exp/1361))";
               }
             else
              {return 0;}
             
            case 13:
             "unknown block:(sendself self-1/1359 select_condition/1162 (field 0 exp/1361))";
             
             "unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 1 match/1734))";
             
             if(match$12)
              {"unknown block:(sendself self-1/1359 emit_sequence/1175 env/1360 (field 1 exp/1361))";
               
               var sif=match$13[2];
               
               "unknown block:(sendself self-1/1359 emit_sequence/1175 env/1360 (field 2 exp/1361))";
               
               var selse=match$14[2];
               
               var r=join(match$13[1],sif,match$14[1],selse);
               
               "unknown block:(sendself self-1/1359 insert/1166\n  (makeblock 1 (field 0 match/1734) (send sif/1449 -118835903)\n    (send selse/1451 -118835903))\n  (field 0 match/1733) (makearray ))";
               
               return r;
               }
             else
              {return 0;}
             
            case 14:
             "unknown block:(sendself self-1/1359 emit_expr/1174 env/1360 (field 0 exp/1361))";
             
             if(match$15)
              {"unknown block:(sendself self-1/1359 emit_sequence/1175 env/1360)";
               var rscases=$$Array["map"](0,exp[3]);
               
               var r$1=join_array(rscases);
               
               "unknown block:(sendself self-1/1359 insert/1166\n  (makeblock 2 (field 1 exp/1361)\n    (apply (field 12 (global Array!))\n      (function param/1736 (send (field 1 param/1736) -118835903))\n      rscases/1454))\n  (field 0 match/1737) (makearray ))";
               
               return r$1;
               }
             else
              {return 0;}
             
            case 15:
             "unknown block:(sendself self-1/1359 emit_sequence/1175 env/1360 (field 0 exp/1361))";
             
             "unknown block:(sendself self-1/1359 insert/1166\n  (makeblock 3 (send (field 1 match/1738) -118835903)) (makearray )\n  (makearray ))";
             
             return /* Some */[0,[]];
             
            case 16:
             var ids$1=exp[2];
             
             var nfail=exp[1];
             
             var
              rs=
               List["map"]
                (function(id)
                  {"unknown block:(sendself self-1/1359 regs_for/1163 (field 1 (global Cmm!)))";
                   
                   name_regs(id,r$2);
                   return r$2;
                   },
                 ids$1);
             
             catch_regs[1]=
             /* :: */[0,
              /* tuple */[0,nfail,$$Array["concat"](rs)],
              catch_regs[1]],
             0;
             "unknown block:(sendself self-1/1359 emit_sequence/1175 env/1360 (field 2 exp/1361))";
             
             var s1=match$16[2];
             
             catch_regs[1]=List["tl"](catch_regs[1]),0;
             var
              new_env=
               List["fold_left"]
                (function(env$2,param)
                  {return Tbl["add"](param[1],param[2],env$2);},
                 env,
                 List["combine"](ids$1,rs));
             
             "unknown block:(sendself self-1/1359 emit_sequence/1175 new_env/1465 (field 3 exp/1361))";
             
             var s2=match$17[2];
             
             var r$2=join(match$16[1],s1,match$17[1],s2);
             
             "unknown block:(sendself self-1/1359 insert/1166\n  (makeblock 4 nfail/1392 (send s1/1464 -118835903)\n    (send s2/1470 -118835903))\n  (makearray ) (makearray ))";
             
             return r$2;
             
            case 17:
             var nfail$1=exp[1];
             
             "unknown block:(sendself self-1/1359 emit_parts_list/1178 env/1360 (field 1 exp/1361))";
             
             if(match$18)
              {var match$19=match$18[1];
               
               "unknown block:(sendself self-1/1359 emit_tuple/1179 (field 1 match/1745)\n  (field 0 match/1745))";
               
               try
                {var dest=List["assoc"](nfail$1,catch_regs[1]);}
               catch(exn$2)
                {if(exn$2=Not_found)
                  {var
                    dest=
                     Misc["fatal_error"]
                      (Pervasives["^"]
                        ("Selectgen.emit_expr, on exit(",
                         Pervasives["^"](Pervasives["string_of_int"](nfail$1),")")));
                   }
                 else
                  {throw exn$2;}
                 }
               
               "unknown block:(sendself self-1/1359 insert_moves/1169 src/1474 dest/1475)";
               
               "unknown block:(sendself self-1/1359 insert/1166 (makeblock 5 nfail/1396) (makearray )\n  (makearray ))";
               
               return 0;
               }
             else
              {return 0;}
             
            case 18:
             "unknown block:(sendself self-1/1359 emit_sequence/1175 env/1360 (field 0 exp/1361))";
             
             var s1$1=match$20[2];
             
             "unknown block:(sendself self-1/1359 regs_for/1163 (field 1 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1359 emit_sequence/1175\n  (apply (field 1 (global Tbl!)) (field 1 exp/1361) rv/1478 env/1360)\n  (field 2 exp/1361))";
             
             var s2$1=match$21[2];
             
             var r$3=join(match$20[1],s1$1,match$21[1],s2$1);
             
             "unknown block:(sendself self-1/1359 insert/1166\n  (makeblock 6 (send s1/1477 -118835903)\n    (apply (field 2 (global Mach!)) [0: 0a]\n      (makearray  (field 13 (global Proc!))) rv/1478\n      (send s2/1480 -118835903)))\n  (makearray ) (makearray ))";
             
             return r$3;
             
            }
          },
        emit_sequence,
        function(self$neg1,env,exp)
         {var copy=CamlinternalOO["copy"](self$neg1);
          
          copy[instr_seq]=Mach["dummy_instr"],0;
          var s=copy;
          
          "unknown block:(send s/1486 -107237919 env/1484 exp/1485)";
          
          return /* tuple */[0,r,s];
          },
        bind_let,
        function(self$neg1,env,v,r1)
         {if(all_regs_anonymous(r1))
           {name_regs(v,r1);return Tbl["add"](v,r1,env);}
          else
           {var rv=Reg["createv_like"](r1);
            
            name_regs(v,rv);
            "unknown block:(sendself self-1/1489 insert_moves/1169 r1/1492 rv/1493)";
            
            return Tbl["add"](v,rv,env);
            }
          },
        emit_parts,
        function(self$neg1,env,exp)
         {"unknown block:(sendself self-1/1495 is_simple_expr/1149 exp/1497)";
          if(0)
           {return /* Some */[0,/* tuple */[0,exp,env]];}
          else
           {"unknown block:(sendself self-1/1495 emit_expr/1174 env/1496 exp/1497)";
            
            if(match)
             {var r=match[1];
              
              if(r["length"]=0)
               {return /* Some */[0,/* tuple */[0,[10,0],env]];}
              else
               {var id=Ident["create"]("bind");
                
                if(all_regs_anonymous(r))
                 {return /* Some */[0,
                          /* tuple */[0,/* Cvar */[7,id],Tbl["add"](id,r,env)]];
                  }
                else
                 {var tmp=Reg["createv_like"](r);
                  
                  "unknown block:(sendself self-1/1495 insert_moves/1169 r/1498 tmp/1500)";
                  
                  return /* Some */[0,
                          /* tuple */[0,/* Cvar */[7,id],Tbl["add"](id,tmp,env)]];
                  }
                }
              }
            else
             {return 0;}
            }
          },
        emit_parts_list,
        function(self$neg1,env,exp_list)
         {if(exp_list)
           {"unknown block:(sendself self-1/1502 emit_parts_list/1178 env/1503 (field 1 exp_list/1504))";
            
            if(match)
             {var match$1=match[1];
              
              "unknown block:(sendself self-1/1502 emit_parts/1177 (field 1 match/1699)\n  (field 0 exp_list/1504))";
              
              if(match$2)
               {var match$3=match$2[1];
                
                return /* Some */[0,
                        /* tuple */[0,/* :: */[0,match$3[1],match$1[1]],match$3[2]]];
                }
              else
               {return 0;}
              }
            else
             {return 0;}
            }
          else
           {return /* Some */[0,/* tuple */[0,0,env]];}
          },
        emit_tuple,
        function(self$neg1,env,exp_list)
         {var
           emit_list=
            function(param)
             {if(param)
               {var loc_rem=emit_list(param[2]);
                
                "unknown block:(sendself self-1/1512 emit_expr/1174 env/1513 (field 0 param/1689))";
                
                if(match)
                 {return /* :: */[0,match[1],loc_rem];}
                else
                 {throw [0,Assert_failure,[0,"asmcomp/selectgen.ml",665,16]];}
                }
              else
               {return 0;}
              };
          
          return $$Array["concat"](emit_list(exp_list));
          },
        emit_extcall_args,
        function(self$neg1,env,args)
         {"unknown block:(sendself self-1/1521 emit_tuple/1179 env/1522 args/1523)";
          
          var arg_stack=Proc["loc_external_arguments"](r1);
          
          "unknown block:(sendself self-1/1521 insert_move_args/1170 r1/1524 (field 0 arg_stack/1527)\n  (field 1 arg_stack/1527))";
          
          return arg_stack;
          },
        emit_stores,
        function(self$neg1,env,data,regs_addr)
         {var
           a=
            [0,
             Arch["offset_addressing"]
              (Arch["identity_addressing"],-Arch["size_int"])];
          
          return List["iter"]
                  (function(e)
                    {"unknown block:(sendself self-1/1529 select_store/1152 0a (field 0 a/1533) e/1534)";
                     
                     var op=match[1];
                     
                     "unknown block:(sendself self-1/1529 emit_expr/1174 env/1530 (field 1 match/1686))";
                     
                     if(match$1)
                      {var regs=match$1[1];
                       
                       var exit;
                       
                       if(typeof op=="number")
                        {switch(op){}}
                       else
                        {switch(op[0])
                          {case 9:
                            for(var i=0;i<=regs["length"]-1;i++)
                             {var r=regs[i];
                              
                              if(r[3]=2){var kind=9;}else{var kind=6;}
                              
                              "unknown block:(sendself self-1/1529 insert/1166\n  (makeblock 0 (makeblock 9 kind/1540 (field 0 a/1533) 0a))\n  (apply (field 3 (global Array!)) (makearray  r/1539) regs_addr/1532)\n  (makearray ))";
                              
                              a[1]=
                              Arch["offset_addressing"](a[1],Cmm["size_component"](r[3])),
                              0}
                            
                           default:exit=38;}}
                       
                       switch(exit)
                        {case 38:
                          "unknown block:(sendself self-1/1529 insert/1166 (makeblock 0 op/1535)\n  (apply (field 3 (global Array!)) regs/1537 regs_addr/1532) (makearray ))";
                          
                          return a[1]=
                                 Arch["offset_addressing"](a[1],size_expr(env,e)),
                                 0;
                          
                         }
                       }
                     else
                      {throw [0,Assert_failure,[0,"asmcomp/selectgen.ml",682,16]];
                       }
                     },
                   data);
          },
        emit_return,
        function(self$neg1,env,exp)
         {"unknown block:(sendself self-1/1542 emit_expr/1174 env/1543 exp/1544)";
          
          if(match)
           {var r=match[1];
            
            var loc=Proc["loc_results"](r);
            
            "unknown block:(sendself self-1/1542 insert_moves/1169 r/1545 loc/1546)";
            
            "unknown block:(sendself self-1/1542 insert/1166 1a loc/1546 (makearray ))";
            }
          else
           {return 0;}
          },
        emit_tail,
        function(self$neg1,env,exp)
         {var exit;
          
          switch(exp)
           {case 8:
             "unknown block:(sendself self-1/1548 emit_expr/1174 env/1549 (field 1 exp/1550))";
             
             if(match)
              {"unknown block:(sendself self-1/1548 emit_tail/1183\n  (sendself self-1/1548 bind_let/1176 env/1549 (field 0 exp/1550)\n    (field 0 match/1658))\n  (field 2 exp/1550))";
               }
             else
              {return 0;}
             
            case 11:
             var op=exp[1];
             
             if(typeof op=="number")
              {switch(op){}}
             else
              {switch(op[0])
                {case 0:
                  var dbg=op[2];
                  
                  var ty=op[1];
                  
                  "unknown block:(sendself self-1/1548 emit_parts_list/1178 env/1549 (field 1 exp/1550))";
                  
                  if(match$1)
                   {var match$2=match$1[1];
                    
                    var env$1=match$2[2];
                    
                    "unknown block:(sendself self-1/1548 select_operation/1157 op/1556 (field 0 match/1665))";
                    
                    var new_args=match$3[2];
                    
                    var new_op=match$3[1];
                    
                    var exit$1;
                    
                    if(typeof new_op=="number")
                     {switch(new_op)
                       {case 3:
                         "unknown block:(sendself self-1/1548 emit_tuple/1179 env/1575 new_args/1577)";
                         
                         var rarg=$$Array["sub"](r1,1,r1["length"]-1);
                         
                         var match$4=Proc["loc_arguments"](rarg);
                         
                         var stack_ofs=match$4[2];
                         
                         var loc_arg=match$4[1];
                         
                         if(stack_ofs=0)
                          {"unknown block:(sendself self-1/1548 insert_moves/1169 rarg/1580 loc_arg/1581)";
                           
                           "unknown block:(sendself self-1/1548 insert/1166 [0: 4a]\n  (apply (field 3 (global Array!)) (makearray  (array.get r1/1579 0))\n    loc_arg/1581)\n  (makearray ))";
                           }
                         else
                          {"unknown block:(sendself self-1/1548 regs_for/1163 ty/1554)";
                           
                           var loc_res=Proc["loc_results"](rd);
                           
                           "unknown block:(sendself self-1/1548 insert_move_args/1170 rarg/1580 loc_arg/1581\n  stack_ofs/1582)";
                           
                           "unknown block:(sendself self-1/1548 insert_debug/1165 [0: 3a] dbg/1555\n  (apply (field 3 (global Array!)) (makearray  (array.get r1/1579 0))\n    loc_arg/1581)\n  loc_res/1584)";
                           
                           "unknown block:(sendself self-1/1548 insert/1166\n  (makeblock 0 (makeblock 7 (~ stack_ofs/1582))) (makearray ) (makearray ))";
                           
                           "unknown block:(sendself self-1/1548 insert/1166 1a loc_res/1584 (makearray ))";
                           }
                         
                        }}
                    else
                     {switch(new_op[0])
                       {case 4:
                         var lbl=new_op[1];
                         
                         "unknown block:(sendself self-1/1548 emit_tuple/1179 env/1575 new_args/1577)";
                         
                         var match$5=Proc["loc_arguments"](r1$1);
                         
                         var stack_ofs$1=match$5[2];
                         
                         var loc_arg$1=match$5[1];
                         
                         if(stack_ofs$1=0)
                          {"unknown block:(sendself self-1/1548 insert_moves/1169 r1/1585 loc_arg/1586)";
                           
                           "unknown block:(sendself self-1/1548 insert/1166 (makeblock 0 (makeblock 5 lbl/1578))\n  loc_arg/1586 (makearray ))";
                           }
                         else
                          {if("unknown primitive:caml_string_equal")
                            {var loc_arg$prime=Proc["loc_parameters"](r1$1);
                             
                             "unknown block:(sendself self-1/1548 insert_moves/1169 r1/1585 loc_arg'/1588)";
                             
                             "unknown block:(sendself self-1/1548 insert/1166 (makeblock 0 (makeblock 5 lbl/1578))\n  loc_arg'/1588 (makearray ))";
                             }
                           else
                            {"unknown block:(sendself self-1/1548 regs_for/1163 ty/1554)";
                             
                             var loc_res$1=Proc["loc_results"](rd$1);
                             
                             "unknown block:(sendself self-1/1548 insert_move_args/1170 r1/1585 loc_arg/1586\n  stack_ofs/1587)";
                             
                             "unknown block:(sendself self-1/1548 insert_debug/1165 (makeblock 0 (makeblock 4 lbl/1578))\n  dbg/1555 loc_arg/1586 loc_res/1590)";
                             
                             "unknown block:(sendself self-1/1548 insert/1166\n  (makeblock 0 (makeblock 7 (~ stack_ofs/1587))) (makearray ) (makearray ))";
                             
                             "unknown block:(sendself self-1/1548 insert/1166 1a loc_res/1590 (makearray ))";
                             }
                           }
                         
                        default:exit$1=22;}}
                    
                    switch(exit$1)
                     {case 22:return Misc["fatal_error"]("Selection.emit_tail");}
                    }
                  else
                   {return 0;}
                  
                 default:exit=34;}}
             
            case 12:
             "unknown block:(sendself self-1/1548 emit_expr/1174 env/1549 (field 0 exp/1550))";
             
             if(match$6)
              {"unknown block:(sendself self-1/1548 emit_tail/1183 env/1549 (field 1 exp/1550))";
               }
             else
              {return 0;}
             
            case 13:
             "unknown block:(sendself self-1/1548 select_condition/1162 (field 0 exp/1550))";
             
             "unknown block:(sendself self-1/1548 emit_expr/1174 env/1549 (field 1 match/1670))";
             
             if(match$7)
              {"unknown block:(sendself self-1/1548 insert/1166\n  (makeblock 1 (field 0 match/1670)\n    (sendself self-1/1548 emit_tail_sequence/1184 env/1549\n      (field 1 exp/1550))\n    (sendself self-1/1548 emit_tail_sequence/1184 env/1549\n      (field 2 exp/1550)))\n  (field 0 match/1669) (makearray ))";
               }
             else
              {return 0;}
             
            case 14:
             "unknown block:(sendself self-1/1548 emit_expr/1174 env/1549 (field 0 exp/1550))";
             
             if(match$8)
              {"unknown block:(sendself self-1/1548 insert/1166\n  (makeblock 2 (field 1 exp/1550)\n    (apply (field 12 (global Array!))\n      (sendself self-1/1548 emit_tail_sequence/1184 env/1549)\n      (field 2 exp/1550)))\n  (field 0 match/1672) (makearray ))";
               }
             else
              {return 0;}
             
            case 16:
             var ids$1=exp[2];
             
             var nfail=exp[1];
             
             var
              rs=
               List["map"]
                (function(id)
                  {"unknown block:(sendself self-1/1548 regs_for/1163 (field 1 (global Cmm!)))";
                   
                   name_regs(id,r);
                   return r;
                   },
                 ids$1);
             
             catch_regs[1]=
             /* :: */[0,
              /* tuple */[0,nfail,$$Array["concat"](rs)],
              catch_regs[1]],
             0;
             "unknown block:(sendself self-1/1548 emit_tail_sequence/1184 env/1549 (field 2 exp/1550))";
             
             catch_regs[1]=List["tl"](catch_regs[1]),0;
             var
              new_env=
               List["fold_left"]
                (function(env$2,param)
                  {return Tbl["add"](param[1],param[2],env$2);},
                 env,
                 List["combine"](ids$1,rs));
             
             "unknown block:(sendself self-1/1548 emit_tail_sequence/1184 new_env/1600\n  (field 3 exp/1550))";
             
             "unknown block:(sendself self-1/1548 insert/1166 (makeblock 4 nfail/1566 s1/1599 s2/1604)\n  (makearray ) (makearray ))";
             
            case 18:
             "unknown block:(sendself self-1/1548 emit_sequence/1175 env/1549 (field 0 exp/1550))";
             
             var opt_r1=match$9[1];
             
             "unknown block:(sendself self-1/1548 regs_for/1163 (field 1 (global Cmm!)))";
             
             "unknown block:(sendself self-1/1548 emit_tail_sequence/1184\n  (apply (field 1 (global Tbl!)) (field 1 exp/1550) rv/1607 env/1549)\n  (field 2 exp/1550))";
             
             "unknown block:(sendself self-1/1548 insert/1166\n  (makeblock 6 (send (field 1 match/1675) -118835903)\n    (apply (field 2 (global Mach!)) [0: 0a]\n      (makearray  (field 13 (global Proc!))) rv/1607 s2/1608))\n  (makearray ) (makearray ))";
             
             if(opt_r1)
              {var r1$2=opt_r1[1];
               
               var loc=Proc["loc_results"](r1$2);
               
               "unknown block:(sendself self-1/1548 insert_moves/1169 r1/1609 loc/1610)";
               
               "unknown block:(sendself self-1/1548 insert/1166 1a loc/1610 (makearray ))";
               }
             else
              {return 0;}
             
            default:exit=34;}
          
          switch(exit)
           {case 34:
             "unknown block:(sendself self-1/1548 emit_return/1182 env/1549 exp/1550)";
             
            }
          },
        emit_tail_sequence,
        function(self$neg1,env,exp)
         {var copy=CamlinternalOO["copy"](self$neg1);
          
          copy[instr_seq]=Mach["dummy_instr"],0;
          var s=copy;
          
          "unknown block:(send s/1615 57960252 env/1613 exp/1614)";
          
          "unknown block:(send s/1615 -118835903)";
          },
        emit_fundecl,
        function(self$neg1,f)
         {Proc["contains_calls"][1]=0,0;
          current_function_name[1]=f[1],0;
          var
           rargs=
            List["map"]
             (function(param)
               {"unknown block:(sendself self-1/1617 regs_for/1163 (field 1 param/1652))";
                
                name_regs(param[1],r);
                return r;
                },
              f[2]);
          
          var rarg=$$Array["concat"](rargs);
          
          var loc_arg=Proc["loc_parameters"](rarg);
          
          var
           env=
            List["fold_right2"]
             (function(param,r,env$1){return Tbl["add"](param[1],r,env$1);},
              f[2],
              rargs,
              Tbl["empty"]);
          
          "unknown block:(sendself self-1/1617 insert_moves/1169 loc_arg/1624 rarg/1623)";
          
          "unknown block:(sendself self-1/1617 emit_tail/1183 env/1625 (field 2 f/1618))";
          
          "unknown block:(sendself self-1/1617 extract/1167)";
          
          Mach["instr_iter"]
           (function(instr)
             {"unknown block:(sendself self-1/1617 mark_instr/1156 (field 0 instr/1631))";
              },
            body);
          return /* record */[0,f[1],loc_arg,body,f[4],f[5]];
          }]);
     return function(env,$$self)
      {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
       
       $$self$1[instr_seq]=Mach["dummy_instr"],0;
       return $$self$1;
       };
     },
   0,
   0];

var
 is_tail_call=
  function(nargs)
   {if(Reg["dummy"][3]=1)
     {}
    else
     {throw [0,Assert_failure,[0,"asmcomp/selectgen.ml",853,2]];}
    
    var args="unknown primitive:caml_make_vect";
    
    var match=Proc["loc_arguments"](args);
    
    return match[2]=0;
    };

Simplif["is_tail_native_heuristic"][1]=is_tail_call,0;
var
 reset=
  function(param){catch_regs[1]=0,0;return current_function_name[1]="",0;};

module["exports"]=
{"size_expr":size_expr,"selector_generic":selector_generic,"reset":reset};

