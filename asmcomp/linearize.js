// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var List=require("List");
var Cmm=require("Cmm");
var Debuginfo=require("Debuginfo");
var Misc=require("Misc");
var Proc=require("Proc");
var $$Array=require("Array");


var label_counter=[0,99];

var new_label=function(param){label_counter[0]++;return label_counter[1];};

var
 has_fallthrough=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){case 2:exit=67;}}
    else
     {switch(param[0])
       {case 0:
         var $js=param[1];
         if(typeof $js=="number")
          {switch($js){case 4:exit=67;}}
         else
          {switch($js[0]){case 5:exit=67;default:exit=68;}}
         
        case 2:exit=67;
        case 5:exit=67;
        case 7:exit=67;
        default:exit=68;}}
    
    switch(exit){case 68:return 1;case 67:return 0;}
    };

var
 invert_integer_test=
  function(param)
   {switch(param)
     {case 0:return /* Isigned */[0,Cmm["negate_comparison"](param[1])];
      case 1:return /* Iunsigned */[1,Cmm["negate_comparison"](param[1])];
      }
    };

var
 invert_test=
  function(param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return 1;case 1:return 0;case 2:return 3;case 3:return 2;}}
    else
     {switch(param[0])
       {case 0:return /* Iinttest */[0,invert_integer_test(param[1])];
        case 1:
         return /* Iinttest_imm */[1,invert_integer_test(param[1]),param[2]];
        case 2:return /* Ifloattest */[2,param[1],!param[2]];
        }}
    };

var
 end_instr=
  /* record */[0,0,end_instr,[],[],Debuginfo["none"],Reg["Set"][1]];

var
 instr_cons=
  function(d,a,r,n)
   {return /* record */[0,d,n,a,r,Debuginfo["none"],Reg["Set"][1]];};

var
 cons_instr=
  function(d,n)
   {return /* record */[0,d,n,[],[],Debuginfo["none"],Reg["Set"][1]];};

var
 copy_instr=
  function(d,i,n){return /* record */[0,d,n,i[3],i[4],i[5],i[6]];};

var
 get_label=
  function(n)
   {var match=n[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:return /* tuple */[0,-1,n];}}
    else
     {switch(match[0]){case 1:exit=60;case 2:exit=60;default:exit=59;}}
    
    switch(exit)
     {case 60:return /* tuple */[0,match[1],n];
      case 59:
       var lbl=new_label(0);
       
       return /* tuple */[0,lbl,cons_instr(/* Llabel */[1,lbl],n)];
       
      }
    };

var
 check_label=
  function(n)
   {var match=n[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0]){case 1:exit=56;case 2:exit=56;default:exit=55;}}
    
    switch(exit){case 56:return match[1];case 55:return -1;}
    };

var
 discard_dead_code=
  function(n)
   {var match=n[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=54;case 3:exit=52;case 4:exit=52;}}
    else
     {switch(match[0])
       {case 0:
         var $js=match[1];
         if(typeof $js=="number")
          {switch($js){}}
         else
          {switch($js[0]){case 7:return n;default:exit=53;}}
         
        case 1:exit=54;
        default:exit=53;}}
    
    switch(exit)
     {case 54:return n;
      case 53:return discard_dead_code(n[2]);
      case 52:return n;
      }
    };

var
 add_branch=
  function(lbl,n)
   {if(lbl>=0)
     {var n1=discard_dead_code(n);
      
      var match=n1[1];
      
      var exit;
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 1:if(match[1]=lbl){return n1;}else{exit=49;}default:exit=49;}}
      
      switch(exit){case 49:return cons_instr(/* Lbranch */[2,lbl],n1);}
      }
    else
     {return discard_dead_code(n);}
    };

var try_depth=[0,0];

var exit_label=[0,0];

var
 find_exit_label_try_depth=
  function(k)
   {try
     {return List["assoc"](k,exit_label[1]);}
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]("Linearize.find_exit_label");}
      else
       {throw exn;}
      }
    };

var
 find_exit_label=
  function(k)
   {var match=find_exit_label_try_depth(k);
    
    if(match[2]=try_depth[1])
     {}
    else
     {throw [0,Assert_failure,[0,"asmcomp/linearize.ml",165,2]];}
    
    return match[1];
    };

var
 is_next_catch=
  function(n)
   {var match=exit_label[1];
    
    var exit;
    
    if(match)
     {var match$1=match[1];
      
      if((match$1[1]=n)&&(match$1[2][2]=try_depth[1]))
       {return 1;}
      else
       {exit=41;}
      }
    else
     {exit=41;}
    
    switch(exit){case 41:return 0;}
    };

var
 local_exit=
  function(k){return find_exit_label_try_depth(k)[2]=try_depth[1];};

var
 linear=
  function(i,n)
   {var match=i[1];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:return n;
        case 1:
         var n1=copy_instr(2,i,discard_dead_code(n));
         
         if(Proc["contains_calls"][1])
          {return cons_instr(1,n1);}
         else
          {return n1;}
         
        }}
    else
     {switch(match[0])
       {case 0:
         var op=match[1];
         
         var exit;
         
         if(typeof op=="number")
          {switch(op)
            {case 0:exit=39;case 1:exit=39;case 2:exit=39;case 4:exit=38;}}
         else
          {switch(op[0]){case 5:exit=38;default:exit=37;}}
         
         switch(exit)
          {case 38:return copy_instr(/* Lop */[0,op],i,discard_dead_code(n));
           case 39:
            if("unknown primitive:caml_equal")
             {return linear(i[2],n);}
            else
             {"unknown block:(exit 37)";}
            
           case 37:return copy_instr(/* Lop */[0,op],i,linear(i[2],n));
           }
         
        case 1:
         var ifnot=match[3];
         
         var ifso=match[2];
         
         var test=match[1];
         
         var n1$1=linear(i[2],n);
         
         var match$1=ifso[1];
         
         var match$2=ifnot[1];
         
         var match$3=n1$1[1];
         
         var exit$1;
         
         if(typeof match$1=="number")
          {switch(match$1)
            {case 0:
              if(typeof match$3=="number")
               {switch(match$3){}}
              else
               {switch(match$3[0])
                 {case 2:
                   return copy_instr
                           (/* Lcondbranch */[3,test,match$3[1]],i,linear(ifnot,n1$1));
                   
                  default:exit$1=16;}}
              
             }}
         else
          {switch(match$1[0])
            {case 5:
              if(typeof match$2=="number")
               {switch(match$2){case 0:exit$1=18;}}
              else
               {switch(match$2[0])
                 {case 5:
                   var nfail2=match$2[1];
                   
                   if(is_next_catch(match$1[1])&&local_exit(nfail2))
                    {var lbl2=find_exit_label(nfail2);
                     
                     return copy_instr
                             (/* Lcondbranch */[3,invert_test(test),lbl2],
                              i,
                              linear(ifso,n1$1));
                     }
                   else
                    {exit$1=17;}
                   
                  default:exit$1=17;}}
              
             default:exit$1=18;}}
         
         switch(exit$1)
          {case 18:
            if("unknown primitive:isint")
             {if(match$2!=0)
               {"unknown block:(exit 17)";}
              else
               {if(typeof match$3=="number")
                 {switch(match$3){}}
                else
                 {switch(match$3[0])
                   {case 2:
                     return copy_instr
                             (/* Lcondbranch */[3,invert_test(test),match$3[1]],
                              i,
                              linear(ifso,n1$1));
                     
                    default:"unknown block:(exit 17)";}}
                }
              }
            else
             {"unknown block:(exit 17)";}
            
           case 17:
            if(typeof match$1=="number")
             {switch(match$1){}}
            else
             {switch(match$1[0])
               {case 5:
                 var nfail=match$1[1];
                 
                 if(local_exit(nfail))
                  {var n2=linear(ifnot,n1$1);
                   
                   var lbl=find_exit_label(nfail);
                   
                   return copy_instr(/* Lcondbranch */[3,test,lbl],i,n2);
                   }
                 else
                  {"unknown block:(exit 16)";}
                 
                default:"unknown block:(exit 16)";}}
            
           case 16:
            if(typeof match$2=="number")
             {switch(match$2){}}
            else
             {switch(match$2[0])
               {case 5:
                 var nfail$1=match$2[1];
                 
                 if(local_exit(nfail$1))
                  {var n2$1=linear(ifso,n1$1);
                   
                   var lbl$1=find_exit_label(nfail$1);
                   
                   return copy_instr
                           (/* Lcondbranch */[3,invert_test(test),lbl$1],i,n2$1);
                   }
                 else
                  {"unknown block:(exit 15)";}
                 
                default:"unknown block:(exit 15)";}}
            
           case 15:
            if("unknown primitive:isint")
             {if(match$1!=0)
               {"unknown block:(exit 14)";}
              else
               {var match$4=get_label(n1$1);
                
                return copy_instr
                        (/* Lcondbranch */[3,test,match$4[1]],
                         i,
                         linear(ifnot,match$4[2]));
                }
              }
            else
             {"unknown block:(exit 14)";}
            
           case 14:
            if("unknown primitive:isint")
             {if(match$2!=0)
               {"unknown block:(exit 13)";}
              else
               {var match$5=get_label(n1$1);
                
                return copy_instr
                        (/* Lcondbranch */[3,invert_test(test),match$5[1]],
                         i,
                         linear(ifso,match$5[2]));
                }
              }
            else
             {"unknown block:(exit 13)";}
            
           case 13:
            var match$6=get_label(n1$1);
            
            var match$7=get_label(linear(ifnot,match$6[2]));
            
            return copy_instr
                    (/* Lcondbranch */[3,invert_test(test),match$7[1]],
                     i,
                     linear(ifso,add_branch(match$6[1],match$7[2])));
            
           }
         
        case 2:
         var cases=match[2];
         
         var index=match[1];
         
         var lbl_cases="unknown primitive:caml_make_vect";
         
         var match$8=get_label(linear(i[2],n));
         
         var lbl_end=match$8[1];
         
         var n2$2=discard_dead_code(match$8[2]);
         
         for(var i$1=cases["length"]-1;i$1>=0;i$1--)
          {var match$9=get_label(linear(cases[i$1],add_branch(lbl_end,n2$2)));
           
           lbl_cases[i$1]=match$9[1],0;
           n2$2=discard_dead_code(match$9[2]);
           }
         
         if(index["length"]=3)
          {var fallthrough_lbl=check_label(n2$2);
           
           var
            find_label=
             function(n$1)
              {var lbl$2=lbl_cases[index[n$1]];
               
               if(lbl$2=fallthrough_lbl)
                {return 0;}
               else
                {return /* Some */[0,lbl$2];}
               };
           
           return copy_instr
                   (/* Lcondbranch3 */[4,
                     find_label(0),
                     find_label(1),
                     find_label(2)],
                    i,
                    n2$2);
           }
         else
          {return copy_instr
                   (/* Lswitch */[5,
                     $$Array["map"](function(n$1){return lbl_cases[n$1];},index)],
                    i,
                    n2$2);
           }
         
        case 3:
         var lbl_head=new_label(0);
         
         var n1$2=linear(i[2],n);
         
         var n2$3=linear(match[1],cons_instr(/* Lbranch */[2,lbl_head],n1$2));
         
         return cons_instr(/* Llabel */[1,lbl_head],n2$3);
         
        case 4:
         var match$10=get_label(linear(i[2],n));
         
         var match$11=get_label(linear(match[3],match$10[2]));
         
         exit_label[1]=
         /* :: */[0,
          /* tuple */[0,match[1],/* tuple */[0,match$11[1],try_depth[1]]],
          exit_label[1]],
         0;
         var n3=linear(match[2],add_branch(match$10[1],match$11[2]));
         
         exit_label[1]=List["tl"](exit_label[1]),0;
         return n3;
         
        case 5:
         var match$12=find_exit_label_try_depth(match[1]);
         
         var t=match$12[2];
         
         var
          loop=
           function(i$2,tt)
            {if(t=tt){return i$2;}else{return loop(cons_instr(3,i$2),tt-1);}};
         
         var n1$3=loop(linear(i[2],n),try_depth[1]);
         
         var
          loop$1=
           function(i$2,tt)
            {if(t=tt){return i$2;}else{return loop$1(cons_instr(4,i$2),tt-1);}
             };
         
         return loop$1(add_branch(match$12[1],n1$3),try_depth[1]);
         
        case 6:
         var match$13=get_label(linear(i[2],n));
         
         try_depth[0]++;
         var
          match$14=
           get_label(cons_instr(3,linear(match[1],cons_instr(4,match$13[2]))));
         
         try_depth[0]--;
         return cons_instr
                 (/* Lsetuptrap */[6,match$14[1]],
                  linear(match[2],add_branch(match$13[1],match$14[2])));
         
        case 7:
         return copy_instr(/* Lraise */[7,match[1]],i,discard_dead_code(n));
        }}
    };

var reset=function(param){label_counter[1]=99,0;return exit_label[1]=0,0;};

var
 fundecl=
  function(f){return /* record */[0,f[1],linear(f[3],end_instr),f[4],f[5]];};

module["exports"]=
{"new_label":new_label,
 "has_fallthrough":has_fallthrough,
 "end_instr":end_instr,
 "instr_cons":instr_cons,
 "invert_test":invert_test,
 "reset":reset,
 "fundecl":fundecl};

