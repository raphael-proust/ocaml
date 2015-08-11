// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Mach=require("Mach");
var List=require("List");
var Misc=require("Misc");
var $$Array=require("Array");


var
 subst_reg=
  function(r,sub)
   {try
     {return Reg["Map"][22](r,sub);}
    catch(exn){if(exn=Not_found){return r;}else{throw exn;}}
    };

var
 subst_regs=
  function(rv,sub)
   {if(sub)
     {var s=sub[1];
      
      var n=rv["length"];
      
      var nv="unknown primitive:caml_make_vect";
      
      for(var i=0;i<=n-1;i++){nv[i]=subst_reg(rv[i],s),0}
      
      return nv;
      }
    else
     {return rv;}
    };

var equiv_classes=[0,Reg["Map"][1]];

var
 repres_reg=
  function(r)
   {try
     {return repres_reg(Reg["Map"][22](r,equiv_classes[1]));}
    catch(exn){if(exn=Not_found){return r;}else{throw exn;}}
    };

var
 repres_regs=
  function(rv)
   {var n=rv["length"];for(var i=0;i<=n-1;i++){rv[i]=repres_reg(rv[i]),0}};

var
 identify=
  function(r1,r2)
   {var repres1=repres_reg(r1);
    
    var repres2=repres_reg(r2);
    
    if(repres1[2]=repres2[2])
     {return 0;}
    else
     {return equiv_classes[1]=
             Reg["Map"][4](repres1,repres2,equiv_classes[1]),
             0;
      }
    };

var
 identify_sub=
  function(sub1,sub2,reg)
   {try
     {var r1=Reg["Map"][22](reg,sub1);
      
      try
       {var r2=Reg["Map"][22](reg,sub2);return identify(r1,r2);}
      catch(exn){if(exn=Not_found){return identify(r1,reg);}else{throw exn;}}
      }
    catch(exn$1)
     {if(exn$1=Not_found)
       {try
         {var r2$1=Reg["Map"][22](reg,sub2);return identify(r2$1,reg);}
        catch(exn$2){if(exn$2=Not_found){return 0;}else{throw exn$2;}}
        }
      else
       {throw exn$1;}
      }
    };

var
 merge_substs=
  function(sub1,sub2,i)
   {if(sub1)
     {if(sub2)
       {Reg["Set"][13]
         (identify_sub(sub1[1],sub2[1]),Reg["add_set_array"](i[6],i[3]));
        return sub1;
        }
      else
       {return sub1;}
      }
    else
     {if(sub2){return sub2;}else{return 0;}}
    };

var
 merge_subst_array=
  function(subv,instr)
   {var
     find_one_subst=
      function(i)
       {if(i>=subv["length"])
         {return 0;}
        else
         {var sub=subv[i];
          
          if(sub)
           {var si=sub[1];
            
            for(var j=i+1;j<=subv["length"]-1;j++)
             {var match=subv[j];
              
              if(match)
               {Reg["Set"][13]
                 (identify_sub(si,match[1]),
                  Reg["add_set_array"](instr[6],instr[3]))}
              else
               {}
              }
            
            return sub;
            }
          else
           {return find_one_subst(i+1);}
          }
        };
    
    return find_one_subst(0);
    };

var exit_subst=[0,0];

var
 find_exit_subst=
  function(k)
   {try
     {return List["assoc"](k,exit_subst[1]);}
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]("Split.find_exit_subst");}
      else
       {throw exn;}
      }
    };

var
 rename=
  function(i,sub)
   {var match=i[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:return /* tuple */[0,i,sub];case 1:exit=27;}}
    else
     {switch(match[0])
       {case 0:
         var exit$1;
         
         var $js=match[1];
         if(typeof $js=="number")
          {switch($js)
            {case 2:
              if(i[4][0][4]=0)
               {if(sub)
                 {var oldr=i[4][0];
                  
                  var newr=Reg["clone"](i[4][0]);
                  
                  var
                   match$1=
                    rename(i[2],/* Some */[0,Reg["Map"][4](oldr,newr,sub[1])]);
                  
                  return /* tuple */[0,
                          Mach["instr_cons"](i[1],i[3],[newr],match$1[1]),
                          match$1[2]];
                  }
                else
                 {return rename(i[2],sub);}
                }
              else
               {exit$1=28;}
              
             case 4:exit=27;
             }}
         else
          {switch($js[0]){case 5:exit=27;default:exit$1=28;}}
         
         switch(exit$1)
          {case 28:
            var match$2=rename(i[2],sub);
            
            return /* tuple */[0,
                    Mach["instr_cons_debug"]
                     (i[1],
                      subst_regs(i[3],sub),
                      subst_regs(i[4],sub),
                      i[5],
                      match$2[1]),
                    match$2[2]];
            
           }
         
        case 1:
         var match$3=rename(match[2],sub);
         
         var match$4=rename(match[3],sub);
         
         var match$5=rename(i[2],merge_substs(match$3[2],match$4[2],i[2]));
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iifthenelse */[1,match[1],match$3[1],match$4[1]],
                   subst_regs(i[3],sub),
                   [],
                   match$5[1]),
                 match$5[2]];
         
        case 2:
         var
          new_sub_cases=
           $$Array["map"](function(c){return rename(c,sub);},match[2]);
         
         var
          sub_merge=
           merge_subst_array
            ($$Array["map"](function(param){return param[2];},new_sub_cases),
             i[2]);
         
         var match$6=rename(i[2],sub_merge);
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iswitch */[2,
                    match[1],
                    $$Array["map"]
                     (function(param){return param[1];},new_sub_cases)],
                   subst_regs(i[3],sub),
                   [],
                   match$6[1]),
                 match$6[2]];
         
        case 3:
         var match$7=rename(match[1],sub);
         
         var match$8=rename(i[2],merge_substs(sub,match$7[2],i));
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iloop */[3,match$7[1]],[],[],match$8[1]),
                 match$8[2]];
         
        case 4:
         var nfail=match[1];
         
         var new_subst=[0,0];
         
         exit_subst[1]=
         /* :: */[0,/* tuple */[0,nfail,new_subst],exit_subst[1]],
         0;
         var match$9=rename(match[2],sub);
         
         var sub_entry_handler=new_subst[1];
         
         exit_subst[1]=List["tl"](exit_subst[1]),0;
         var match$10=rename(match[3],sub_entry_handler);
         
         var match$11=rename(i[2],merge_substs(match$9[2],match$10[2],i[2]));
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Icatch */[4,nfail,match$9[1],match$10[1]],
                   [],
                   [],
                   match$11[1]),
                 match$11[2]];
         
        case 5:
         var r=find_exit_subst(match[1]);
         
         r[1]=merge_substs(r[1],sub,i),0;
         return /* tuple */[0,i,0];
         
        case 6:
         var match$12=rename(match[1],sub);
         
         var match$13=rename(match[2],sub);
         
         var match$14=rename(i[2],merge_substs(match$12[2],match$13[2],i[2]));
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Itrywith */[6,match$12[1],match$13[1]],
                   [],
                   [],
                   match$14[1]),
                 match$14[2]];
         
        case 7:
         return /* tuple */[0,
                 Mach["instr_cons_debug"]
                  (/* Iraise */[7,match[1]],subst_regs(i[3],sub),[],i[5],i[2]),
                 0];
         
        }}
    
    switch(exit)
     {case 27:
       return /* tuple */[0,
               Mach["instr_cons"](i[1],subst_regs(i[3],sub),[],i[2]),
               0];
       
      }
    };

var
 set_repres=
  function(i)
   {return Mach["instr_iter"]
            (function(i$1){repres_regs(i$1[3]);return repres_regs(i$1[4]);},i);
    };

var
 reset=
  function(param){equiv_classes[1]=Reg["Map"][1],0;return exit_subst[1]=0,0;};

var
 fundecl=
  function(f)
   {reset(0);
    var new_args=$$Array["copy"](f[2]);
    
    var match=rename(f[3],/* Some */[0,Reg["Map"][1]]);
    
    var new_body=match[1];
    
    repres_regs(new_args);
    set_repres(new_body);
    equiv_classes[1]=Reg["Map"][1],0;
    return /* record */[0,f[1],new_args,new_body,f[4],f[5]];
    };

module["exports"]={"fundecl":fundecl,"reset":reset};

