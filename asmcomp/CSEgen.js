// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var CamlinternalOO=require("CamlinternalOO");
var Mach=require("Mach");
var Pervasives=require("Pervasives");
var Proc=require("Proc");
var Map=require("Map");
var $$Array=require("Array");


var
 shared=
  [0,"kill_loads","is_cheap_operation","fundecl","cse","class_of_operation"];

var compare=function(prim,prim$1){return "unknown primitive:caml_compare";};

var Equations=Map["Make"]([0,compare]);

var empty_numbering=/* record */[0,0,Equations[1],Reg["Map"][1]];

var
 fresh_valnum_reg=
  function(n,r)
   {var v=n[1];
    
    return /* tuple */[0,/* record */[0,v+1,n[2],Reg["Map"][4](r,v,n[3])],v];
    };

var
 array_fold_transf=
  function(f,n,a)
   {var l=a["length"];
    
    if(l!=0)
     {if(l!=1)
       {var b="unknown primitive:caml_make_vect";
        
        var n$1=n;
        
        for(var i=0;i<=l-1;i++)
         {var match=f(n$1,a[i]);b[i]=match[2],0;n$1=match[1];}
        
        return /* tuple */[0,n$1,b];
        }
      else
       {var match$1=f(n,a[0]);return /* tuple */[0,match$1[1],[match$1[2]]];}
      }
    else
     {return /* tuple */[0,n,[]];}
    };

var
 fresh_valnum_regs=
  function(n,rs){return array_fold_transf(fresh_valnum_reg,n,rs);};

var
 valnum_reg=
  function(n,r)
   {try
     {return /* tuple */[0,n,Reg["Map"][22](r,n[3])];}
    catch(exn)
     {if(exn=Not_found){return fresh_valnum_reg(n,r);}else{throw exn;}}
    };

var valnum_regs=function(n,rs){return array_fold_transf(valnum_reg,n,rs);};

var
 find_equation=
  function(n,rhs)
   {try
     {return /* Some */[0,Equations[22](rhs,n[2])];}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 find_reg_containing=
  function(n,v)
   {return Reg["Map"][11]
            (function(r,v$prime,res)
              {if(v$prime=v){return /* Some */[0,r];}else{return res;}},
             n[3],
             0);
    };

var
 find_regs_containing=
  function(n,vs)
   {var l=vs["length"];
    
    if(l!=0)
     {if(l!=1)
       {var rs="unknown primitive:caml_make_vect";
        
        try
         {for(var i=0;i<=l-1;i++)
           {var match=find_reg_containing(n,vs[i]);
            
            if(match){rs[i]=match[1],0}else{throw Pervasives["Exit"];}
            }
          
          return /* Some */[0,rs];
          }
        catch(exn){if(exn=Pervasives["Exit"]){return 0;}else{throw exn;}}
        }
      else
       {var match$1=find_reg_containing(n,vs[0]);
        
        if(match$1){return /* Some */[0,[match$1[1]]];}else{return 0;}
        }
      }
    else
     {return /* Some */[0,[]];}
    };

var
 set_known_reg=
  function(n,r,v){return /* record */[0,n[1],n[2],Reg["Map"][4](r,v,n[3])];};

var
 array_fold2=
  function(f,n,a1,a2)
   {var l=a1["length"];
    
    if(l=a2["length"])
     {}
    else
     {throw [0,Assert_failure,[0,"asmcomp/CSEgen.ml",123,2]];}
    
    var n$1=n;
    
    for(var i=0;i<=l-1;i++){n$1=f(n$1,a1[i],a2[i]);}
    
    return n$1;
    };

var
 set_known_regs=
  function(n,rs,vs){return array_fold2(set_known_reg,n,rs,vs);};

var
 set_move=
  function(n,src,dst)
   {var match=valnum_reg(n,src);
    
    var n1=match[1];
    
    return /* record */[0,n1[1],n1[2],Reg["Map"][4](dst,match[2],n1[3])];
    };

var
 set_fresh_regs=
  function(n,rs,rhs)
   {var match=fresh_valnum_regs(n,rs);
    
    var n1=match[1];
    
    return /* record */[0,n1[1],Equations[4](rhs,match[2],n[2]),n1[3]];
    };

var
 set_unknown_regs=
  function(n,rs)
   {return /* record */[0,
            n[1],
            n[2],
            $$Array["fold_right"](Reg["Map"][6],rs,n[3])];
    };

var
 filter_equations=
  function(pred,n)
   {return /* record */[0,
            n[1],
            Equations[14](function(param,res){return pred(param[1]);},n[2]),
            n[3]];
    };

var
 insert_single_move=
  function(i,src,dst){return Mach["instr_cons"]([0,0],[src],[dst],i);};

var
 insert_move=
  function(srcs,dsts,i)
   {var l=srcs["length"];
    
    if(l!=0)
     {if(l!=1)
       {var tmps=Reg["createv_like"](srcs);
        
        var i1=array_fold2(insert_single_move,i,tmps,dsts);
        
        return array_fold2(insert_single_move,i1,srcs,tmps);
        }
      else
       {return Mach["instr_cons"]([0,0],srcs,dsts,i);}
      }
    else
     {return i;}
    };

var
 cse_generic_init=
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared);
    
    var kill_loads=ids[1];
    
    var is_cheap_operation=ids[2];
    
    var fundecl=ids[3];
    
    var cse=ids[4];
    
    var class_of_operation=ids[5];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       class_of_operation,
       function(self$neg1,op)
        {var exit;
         
         if(typeof op=="number")
          {switch(op)
            {case 0:exit=23;
             case 1:exit=23;
             case 2:exit=23;
             case 3:exit=25;
             case 4:exit=25;
             }}
         else
          {switch(op[0])
            {case 0:exit=24;
             case 1:exit=24;
             case 2:exit=24;
             case 3:exit=24;
             case 4:exit=25;
             case 5:exit=25;
             case 6:exit=25;
             case 7:exit=29;
             case 8:return 2;
             case 9:return /* Op_store */[0,op[3]];
             case 10:throw [0,Assert_failure,[0,"asmcomp/CSEgen.ml",194,16]];
             case 11:
              var match=op[1];
              
              var exit$1;
              
              if("unknown primitive:isint")
               {if(match>=12){return 1;}else{exit$1=27;}}
              else
               {exit$1=27;}
              
              switch(exit$1){case 27:return 0;}
              
             case 12:
              var match$1=op[1];
              
              var exit$2;
              
              if("unknown primitive:isint")
               {if(match$1>=12){return 1;}else{exit$2=28;}}
              else
               {exit$2=28;}
              
              switch(exit$2){case 28:return 0;}
              
             case 13:exit=29;
             default:return 0;}}
         
         switch(exit)
          {case 29:return 3;
           case 23:throw [0,Assert_failure,[0,"asmcomp/CSEgen.ml",186,32]];
           case 24:return 0;
           case 25:throw [0,Assert_failure,[0,"asmcomp/CSEgen.ml",190,18]];
           }
         },
       is_cheap_operation,
       function(self$neg1,op)
        {var exit;
         
         if(typeof op=="number")
          {switch(op){}}
         else
          {switch(op[0]){case 0:exit=21;case 3:exit=21;default:exit=22;}}
         
         switch(exit){case 22:return 0;case 21:return 1;}
         },
       kill_loads,
       function(self$neg1,n)
        {return filter_equations
                 (function(o)
                   {"unknown block:(sendself self-1/1214 class_of_operation/1201 o/1216)";
                    return 0!=2;
                    },
                  n);
         },
       cse,
       function(self$neg1,n,i)
        {var match=i[1];
         
         var exit;
         
         if(typeof match=="number")
          {switch(match){}}
         else
          {switch(match[0])
            {case 0:
              var op=match[1];
              
              var exit$1;
              
              if(typeof op=="number")
               {switch(op)
                 {case 0:exit$1=18;
                  case 1:exit$1=18;
                  case 2:exit$1=18;
                  case 3:exit$1=19;
                  case 4:exit=17;
                  }}
              else
               {switch(op[0])
                 {case 4:exit$1=19;
                  case 5:exit=17;
                  case 6:exit$1=19;
                  case 10:
                   var newrecord="unknown primitive:duprecord regular 6";
                   
                   "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
                   newrecord[2]=0,0;
                   return newrecord;
                   
                  default:exit$1=20;}}
              
              switch(exit$1)
               {case 20:
                 "unknown block:(sendself self-1/1218 class_of_operation/1201 op/1221)";
                 
                 var exit$2;
                 
                 if("unknown primitive:isint")
                  {if(match$1>=3)
                    {exit$2=14;}
                   else
                    {var match$2=valnum_regs(n,i[3]);
                     
                     var varg=match$2[2];
                     
                     var n1=match$2[1];
                     
                     var n2=set_unknown_regs(n1,Proc["destroyed_at_oper"](i[1]));
                     
                     var match$3=find_equation(n1,/* tuple */[0,op,varg]);
                     
                     if(match$3)
                      {var vres=match$3[1];
                       
                       var match$4=find_regs_containing(n1,vres);
                       
                       var exit$3;
                       
                       if(match$4)
                        {var res=match$4[1];
                         
                         "unknown block:(sendself self-1/1218 is_cheap_operation/1202 op/1221)";
                         if(!0&&!Proc["regs_are_volatile"](res))
                          {var n3=set_known_regs(n1,i[4],vres);
                           
                           "unknown block:(sendself self-1/1218 cse/1204 n3/1239 (field 1 i/1220))";
                           return insert_move(res,i[4],0);
                           }
                         else
                          {exit$3=4;}
                         }
                       else
                        {exit$3=4;}
                       
                       switch(exit$3)
                        {case 4:
                          var n3$1=set_known_regs(n2,i[4],vres);
                          
                          var newrecord$1="unknown primitive:duprecord regular 6";
                          
                          "unknown block:(sendself self-1/1218 cse/1204 n3/1240 (field 1 i/1220))";
                          newrecord$1[2]=0,0;
                          return newrecord$1;
                          
                         }
                       }
                     else
                      {var n3$2=set_fresh_regs(n2,i[4],/* tuple */[0,op,varg]);
                       
                       var newrecord$2="unknown primitive:duprecord regular 6";
                       
                       "unknown block:(sendself self-1/1218 cse/1204 n3/1241 (field 1 i/1220))";
                       newrecord$2[2]=0,0;
                       return newrecord$2;
                       }
                     }
                   }
                 else
                  {if(match$1[1]!=0)
                    {var
                      n1$1=
                       set_unknown_regs(n,Proc["destroyed_at_oper"](i[1]));
                     
                     var n2$1=set_unknown_regs(n1$1,i[4]);
                     
                     "unknown block:(sendself self-1/1218 kill_loads/1203 n2/1245)";
                     
                     var newrecord$3="unknown primitive:duprecord regular 6";
                     
                     "unknown block:(sendself self-1/1218 cse/1204 n3/1246 (field 1 i/1220))";
                     newrecord$3[2]=0,0;
                     return newrecord$3;
                     }
                   else
                    {exit$2=14;}
                   }
                 
                 switch(exit$2)
                  {case 14:
                    var
                     n1$2=
                      set_unknown_regs(n,Proc["destroyed_at_oper"](i[1]));
                    
                    var n2$2=set_unknown_regs(n1$2,i[4]);
                    
                    var newrecord$4="unknown primitive:duprecord regular 6";
                    
                    "unknown block:(sendself self-1/1218 cse/1204 n2/1243 (field 1 i/1220))";
                    newrecord$4[2]=0,0;
                    return newrecord$4;
                    
                   }
                 
                case 18:
                 var n1$3=set_move(n,i[3][0],i[4][0]);
                 
                 var newrecord$5="unknown primitive:duprecord regular 6";
                 
                 "unknown block:(sendself self-1/1218 cse/1204 n1/1233 (field 1 i/1220))";
                 newrecord$5[2]=0,0;
                 return newrecord$5;
                 
                case 19:
                 var newrecord$6="unknown primitive:duprecord regular 6";
                 
                 "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
                 newrecord$6[2]=0,0;
                 return newrecord$6;
                 
                }
              
             case 1:
              var n1$4=set_unknown_regs(n,Proc["destroyed_at_oper"](i[1]));
              
              "unknown block:(sendself self-1/1218 cse/1204 n1/1247 (field 1 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 n1/1247 (field 2 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
              return /* record */[0,
                      /* Iifthenelse */[1,match[1],0,0],
                      0,
                      i[3],
                      i[4],
                      i[5],
                      i[6]];
              
             case 2:
              var n1$5=set_unknown_regs(n,Proc["destroyed_at_oper"](i[1]));
              
              "unknown block:(sendself self-1/1218 cse/1204 n1/1248)";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
              return /* record */[0,
                      /* Iswitch */[2,match[1],$$Array["map"](0,match[2])],
                      0,
                      i[3],
                      i[4],
                      i[5],
                      i[6]];
              
             case 3:
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 0 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
              return /* record */[0,/* Iloop */[3,0],0,i[3],i[4],i[5],i[6]];
              
             case 4:
              "unknown block:(sendself self-1/1218 cse/1204 n/1219 (field 1 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 2 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
              return /* record */[0,
                      /* Icatch */[4,match[1],0,0],
                      0,
                      i[3],
                      i[4],
                      i[5],
                      i[6]];
              
             case 6:
              "unknown block:(sendself self-1/1218 cse/1204 n/1219 (field 0 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 match/1285))";
              "unknown block:(sendself self-1/1218 cse/1204 empty_numbering/1098 (field 1 i/1220))";
              return /* record */[0,
                      /* Itrywith */[6,0,0],
                      0,
                      i[3],
                      i[4],
                      i[5],
                      i[6]];
              
             default:exit=17;}}
         
         switch(exit){case 17:return i;}
         },
       fundecl,
       function(self$neg1,f)
        {"unknown block:(sendself self-1/1250 cse/1204 empty_numbering/1098 (field 2 f/1251))";
         return /* record */[0,f[1],f[2],0,f[4],f[5]];
         }]);
    return function(env,$$self)
     {return CamlinternalOO["create_object_opt"]($$self,$$class);};
    };

var
 cse_generic=
  CamlinternalOO["make_class"]
   ([0,"is_cheap_operation","class_of_operation","fundecl"],cse_generic_init);

module["exports"]={"cse_generic":cse_generic};

