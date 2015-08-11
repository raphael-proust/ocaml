// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Mach=require("Mach");
var List=require("List");
var Pervasives=require("Pervasives");
var Misc=require("Misc");
var Proc=require("Proc");
var $$Array=require("Array");


var spill_env=[0,Reg["Map"][1]];

var
 spill_reg=
  function(r)
   {try
     {return Reg["Map"][22](r,spill_env[1]);}
    catch(exn)
     {if(exn=Not_found)
       {var spill_r=Reg["create"](r[3]);
        
        spill_r[5]=1,0;
        if(!Reg["anonymous"](r)){spill_r[1]=r[1],0}else{}
        
        spill_env[1]=Reg["Map"][4](r,spill_r,spill_env[1]),0;
        return spill_r;
        }
      else
       {throw exn;}
      }
    };

var use_date=[0,Reg["Map"][1]];

var current_date=[0,0];

var
 record_use=
  function(regv)
   {for(var i=0;i<=regv["length"]-1;i++)
     {var r=regv[i];
      
      try
       {var prev_date=Reg["Map"][22](r,use_date[1]);}
      catch(exn){if(exn=Not_found){var prev_date=0;}else{throw exn;}}
      
      if(current_date[1]>prev_date)
       {use_date[1]=Reg["Map"][4](r,current_date[1],use_date[1]),0}
      else
       {}
      }
    };

var
 add_superpressure_regs=
  function(op,live_regs,res_regs,spilled)
   {var max_pressure=Proc["max_register_pressure"](op);
    
    var regs=Reg["add_set_array"](live_regs,res_regs);
    
    var pressure="unknown primitive:caml_make_vect";
    
    Reg["Set"][13]
     (function(r)
       {if(Reg["Set"][3](r,spilled))
         {return 0;}
        else
         {var match=r[4];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 0:exit=99;}}
          else
           {switch(match[0]){case 0:exit=99;case 1:return 0;}}
          
          switch(exit)
           {case 99:
             var c=Proc["register_class"](r);
             
             return pressure[c]=pressure[c]+1,0;
             
            }
          }
        },
      regs);
    var
     check_pressure=
      function(cl,spilled$1)
       {if(cl>=Proc["num_register_classes"])
         {return spilled$1;}
        else
         {if(pressure[cl]<=max_pressure[cl])
           {return check_pressure(cl+1,spilled$1);}
          else
           {var lru_date=[0,1e6];
            
            var lru_reg=[0,Reg["dummy"]];
            
            Reg["Set"][13]
             (function(r)
               {if
                 ((Proc["register_class"](r)=cl)&&
                  !Reg["Set"][3](r,spilled$1)&&
                  (r[4]=0))
                 {try
                   {var d=Reg["Map"][22](r,use_date[1]);
                    
                    if(d<lru_date[1])
                     {lru_date[1]=d,0;return lru_reg[1]=r,0;}
                    else
                     {return 0;}
                    }
                  catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
                  }
                else
                 {return 0;}
                },
              live_regs);
            if(lru_reg[1]!=Reg["dummy"])
             {pressure[cl]=pressure[cl]-1,0;
              return check_pressure(cl,Reg["Set"][4](lru_reg[1],spilled$1));
              }
            else
             {return check_pressure(cl+1,spilled$1);}
            }
          }
        };
    
    return check_pressure(0,spilled);
    };

var destroyed_at_fork=[0,0];

var
 add_reloads=
  function(regset,i)
   {return Reg["Set"][14]
            (function(r,i$1)
              {return Mach["instr_cons"]([0,2],[spill_reg(r)],[r],i$1);},
             regset,
             i);
    };

var reload_at_exit=[0,0];

var
 find_reload_at_exit=
  function(k)
   {try
     {return List["assoc"](k,reload_at_exit[1]);}
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]("Spill.find_reload_at_exit");}
      else
       {throw exn;}
      }
    };

var reload_at_break=Reg["Set"][1];

var
 reload=
  function(i,before)
   {current_date[0]++;
    record_use(i[3]);
    record_use(i[4]);
    var match=i[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:return /* tuple */[0,i,before];case 1:exit=85;}}
    else
     {switch(match[0])
       {case 0:
         var op=match[1];
         
         var exit$1;
         
         if(typeof op=="number")
          {switch(op){case 3:exit$1=86;case 4:exit=85;}}
         else
          {switch(op[0])
            {case 4:exit$1=86;
             case 5:exit=85;
             case 6:if(op[2]!=0){exit$1=86;}else{exit$1=87;}
             default:exit$1=87;}}
         
         switch(exit$1)
          {case 87:
            if
             (Reg["Set"][19](i[6])+
              i[4]["length"]<=
              Proc["safe_register_pressure"](op))
             {var new_before=before;}
            else
             {var new_before=add_superpressure_regs(op,i[6],i[4],before);}
            
            var
             after=
              Reg["diff_set_array"]
               (Reg["diff_set_array"](new_before,i[3]),i[4]);
            
            var match$1=reload(i[2],after);
            
            return /* tuple */[0,
                    add_reloads
                     (Reg["inter_set_array"](new_before,i[3]),
                      Mach["instr_cons_debug"](i[1],i[3],i[4],i[5],match$1[1])),
                    match$1[2]];
            
           case 86:
            var match$2=reload(i[2],i[6]);
            
            return /* tuple */[0,
                    add_reloads
                     (Reg["inter_set_array"](before,i[3]),
                      Mach["instr_cons_debug"](i[1],i[3],i[4],i[5],match$2[1])),
                    match$2[2]];
            
           }
         
        case 1:
         var at_fork=Reg["diff_set_array"](before,i[3]);
         
         var date_fork=current_date[1];
         
         var match$3=reload(match[2],at_fork);
         
         var date_ifso=current_date[1];
         
         current_date[1]=date_fork,0;
         var match$4=reload(match[3],at_fork);
         
         current_date[1]=Pervasives["max"](date_ifso,current_date[1]),0;
         var match$5=reload(i[2],Reg["Set"][7](match$3[2],match$4[2]));
         
         var
          new_i=
           Mach["instr_cons"]
            (/* Iifthenelse */[1,match[1],match$3[1],match$4[1]],
             i[3],
             i[4],
             match$5[1]);
         
         destroyed_at_fork[1]=
         /* :: */[0,/* tuple */[0,new_i,at_fork],destroyed_at_fork[1]],
         0;
         return /* tuple */[0,
                 add_reloads(Reg["inter_set_array"](before,i[3]),new_i),
                 match$5[2]];
         
        case 2:
         var at_fork$1=Reg["diff_set_array"](before,i[3]);
         
         var date_fork$1=current_date[1];
         
         var date_join=[0,0];
         
         var after_cases=[0,Reg["Set"][1]];
         
         var
          new_cases=
           $$Array["map"]
            (function(c)
              {current_date[1]=date_fork$1,0;
               var match$6=reload(c,at_fork$1);
               
               after_cases[1]=Reg["Set"][7](after_cases[1],match$6[2]),0;
               date_join[1]=Pervasives["max"](date_join[1],current_date[1]),0;
               return match$6[1];
               },
             match[2]);
         
         current_date[1]=date_join[1],0;
         var match$6=reload(i[2],after_cases[1]);
         
         return /* tuple */[0,
                 add_reloads
                  (Reg["inter_set_array"](before,i[3]),
                   Mach["instr_cons"]
                    (/* Iswitch */[2,match[1],new_cases],i[3],i[4],match$6[1])),
                 match$6[2]];
         
        case 3:
         var body=match[1];
         
         var date_start=current_date[1];
         
         var at_head=before;
         
         var final_body=body;
         
         try
          {while(1)
            {current_date[1]=date_start,0;
             var match$7=reload(body,at_head);
             
             var merged_at_head=Reg["Set"][7](at_head,match$7[2]);
             
             if(Reg["Set"][11](merged_at_head,at_head))
              {final_body=match$7[1];throw Pervasives["Exit"];}
             else
              {}
             
             at_head=merged_at_head;
             }
           }
         catch(exn){if(exn=Pervasives["Exit"]){}else{throw exn;}}
         
         var match$8=reload(i[2],Reg["Set"][1]);
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iloop */[3,final_body],i[3],i[4],match$8[1]),
                 match$8[2]];
         
        case 4:
         var nfail=match[1];
         
         var new_set=[0,Reg["Set"][1]];
         
         reload_at_exit[1]=
         /* :: */[0,/* tuple */[0,nfail,new_set],reload_at_exit[1]],
         0;
         var match$9=reload(match[2],before);
         
         var at_exit=new_set[1];
         
         reload_at_exit[1]=List["tl"](reload_at_exit[1]),0;
         var match$10=reload(match[3],at_exit);
         
         var match$11=reload(i[2],Reg["Set"][7](match$9[2],match$10[2]));
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Icatch */[4,nfail,match$9[1],match$10[1]],
                   i[3],
                   i[4],
                   match$11[1]),
                 match$11[2]];
         
        case 5:
         var set=find_reload_at_exit(match[1]);
         
         set[1]=Reg["Set"][7](set[1],before),0;
         return /* tuple */[0,i,Reg["Set"][1]];
         
        case 6:
         var handler=match[2];
         
         var match$12=reload(match[1],before);
         
         var
          before_handler=
           Reg["Set"][6]
            (Proc["loc_exn_bucket"],
             Reg["add_set_array"](handler[6],handler[3]));
         
         var match$13=reload(handler,before_handler);
         
         var match$14=reload(i[2],Reg["Set"][7](match$12[2],match$13[2]));
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Itrywith */[6,match$12[1],match$13[1]],
                   i[3],
                   i[4],
                   match$14[1]),
                 match$14[2]];
         
        case 7:
         return /* tuple */[0,
                 add_reloads(Reg["inter_set_array"](before,i[3]),i),
                 Reg["Set"][1]];
         
        }}
    
    switch(exit)
     {case 85:
       return /* tuple */[0,
               add_reloads(Reg["inter_set_array"](before,i[3]),i),
               Reg["Set"][1]];
       
      }
    };

var spill_at_exit=[0,0];

var
 find_spill_at_exit=
  function(k)
   {try
     {return List["assoc"](k,spill_at_exit[1]);}
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]("Spill.find_spill_at_exit");}
      else
       {throw exn;}
      }
    };

var spill_at_raise=[0,Reg["Set"][1]];

var inside_loop=[0,0];

var inside_arm=[0,0];

var inside_catch=[0,0];

var
 add_spills=
  function(regset,i)
   {return Reg["Set"][14]
            (function(r,i$1)
              {return Mach["instr_cons"]([0,1],[r],[spill_reg(r)],i$1);},
             regset,
             i);
    };

var
 spill=
  function(i,$$finally)
   {var match=i[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:return /* tuple */[0,i,$$finally];case 1:exit=40;}}
    else
     {switch(match[0])
       {case 0:
         var exit$1;
         
         var $js=match[1];
         if(typeof $js=="number")
          {switch($js)
            {case 2:
              var match$1=spill(i[2],$$finally);
              
              var before1=Reg["diff_set_array"](match$1[2],i[4]);
              
              return /* tuple */[0,
                      Mach["instr_cons"](i[1],i[3],i[4],match$1[1]),
                      Reg["add_set_array"](before1,i[4])];
              
             case 4:exit=40;
             }}
         else
          {switch($js[0]){case 5:exit=40;default:exit$1=41;}}
         
         switch(exit$1)
          {case 41:
            var match$2=spill(i[2],$$finally);
            
            var after=match$2[2];
            
            var before1$1=Reg["diff_set_array"](after,i[4]);
            
            var match$3=i[1];
            
            var exit$2;
            
            if(typeof match$3=="number")
             {switch(match$3){}}
            else
             {switch(match$3[0])
               {case 0:
                 var match$4=match$3[1];
                 
                 var exit$3;
                 
                 if(typeof match$4=="number")
                  {switch(match$4){case 3:exit$2=8;}}
                 else
                  {switch(match$4[0])
                    {case 4:exit$2=8;
                     case 6:exit$2=8;
                     case 11:exit$3=10;
                     case 12:exit$3=10;
                     default:exit$2=9;}}
                 
                 switch(exit$3)
                  {case 10:
                    var match$5=match$4[1];
                    
                    if("unknown primitive:isint")
                     {if(match$5>=12){exit$2=8;}else{exit$2=9;}}
                    else
                     {exit$2=9;}
                    
                   }
                 
                default:exit$2=9;}}
            
            switch(exit$2)
             {case 9:var before=before1$1;
              case 8:var before=Reg["Set"][7](before1$1,spill_at_raise[1]);
              }
            
            return /* tuple */[0,
                    Mach["instr_cons_debug"]
                     (i[1],
                      i[3],
                      i[4],
                      i[5],
                      add_spills(Reg["inter_set_array"](after,i[4]),match$2[1])),
                    before];
            
           }
         
        case 1:
         var test=match[1];
         
         var match$6=spill(i[2],$$finally);
         
         var at_join=match$6[2];
         
         var new_next=match$6[1];
         
         var match$7=spill(match[2],at_join);
         
         var before_ifso=match$7[2];
         
         var new_ifso=match$7[1];
         
         var match$8=spill(match[3],at_join);
         
         var before_ifnot=match$8[2];
         
         var new_ifnot=match$8[1];
         
         if(inside_loop[1]||inside_arm[1])
          {return /* tuple */[0,
                   Mach["instr_cons"]
                    (/* Iifthenelse */[1,test,new_ifso,new_ifnot],
                     i[3],
                     i[4],
                     new_next),
                   Reg["Set"][7](before_ifso,before_ifnot)];
           }
         else
          {var destroyed=List["assq"](i,destroyed_at_fork[1]);
           
           var
            spill_ifso_branch=
             Reg["Set"][9](Reg["Set"][9](before_ifso,before_ifnot),destroyed);
           
           var
            spill_ifnot_branch=
             Reg["Set"][9](Reg["Set"][9](before_ifnot,before_ifso),destroyed);
           
           return /* tuple */[0,
                   Mach["instr_cons"]
                    (/* Iifthenelse */[1,
                      test,
                      add_spills(spill_ifso_branch,new_ifso),
                      add_spills(spill_ifnot_branch,new_ifnot)],
                     i[3],
                     i[4],
                     new_next),
                   Reg["Set"][9]
                    (Reg["Set"][9]
                      (Reg["Set"][7](before_ifso,before_ifnot),spill_ifso_branch),
                     spill_ifnot_branch)];
           }
         
        case 2:
         var match$9=spill(i[2],$$finally);
         
         var at_join$1=match$9[2];
         
         var saved_inside_arm=inside_arm[1];
         
         inside_arm[1]=1,0;
         var before$1=[0,Reg["Set"][1]];
         
         var
          new_cases=
           $$Array["map"]
            (function(c)
              {var match$10=spill(c,at_join$1);
               
               before$1[1]=Reg["Set"][7](before$1[1],match$10[2]),0;
               return match$10[1];
               },
             match[2]);
         
         inside_arm[1]=saved_inside_arm,0;
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iswitch */[2,match[1],new_cases],i[3],i[4],match$9[1]),
                 before$1[1]];
         
        case 3:
         var body=match[1];
         
         var match$10=spill(i[2],$$finally);
         
         var saved_inside_loop=inside_loop[1];
         
         inside_loop[1]=1,0;
         var at_head=Reg["Set"][1];
         
         var final_body=body;
         
         try
          {while(1)
            {var match$11=spill(body,at_head);
             
             var new_at_head=Reg["Set"][7](at_head,match$11[2]);
             
             if(Reg["Set"][11](new_at_head,at_head))
              {final_body=match$11[1];throw Pervasives["Exit"];}
             else
              {}
             
             at_head=new_at_head;
             }
           }
         catch(exn){if(exn=Pervasives["Exit"]){}else{throw exn;}}
         
         inside_loop[1]=saved_inside_loop,0;
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iloop */[3,final_body],i[3],i[4],match$10[1]),
                 at_head];
         
        case 4:
         var nfail=match[1];
         
         var match$12=spill(i[2],$$finally);
         
         var at_join$2=match$12[2];
         
         var match$13=spill(match[3],at_join$2);
         
         var saved_inside_catch=inside_catch[1];
         
         inside_catch[1]=1,0;
         spill_at_exit[1]=
         /* :: */[0,/* tuple */[0,nfail,match$13[2]],spill_at_exit[1]],
         0;
         var match$14=spill(match[2],at_join$2);
         
         spill_at_exit[1]=List["tl"](spill_at_exit[1]),0;
         inside_catch[1]=saved_inside_catch,0;
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Icatch */[4,nfail,match$14[1],match$13[1]],
                   i[3],
                   i[4],
                   match$12[1]),
                 match$14[2]];
         
        case 5:return /* tuple */[0,i,find_spill_at_exit(match[1])];
        case 6:
         var match$15=spill(i[2],$$finally);
         
         var at_join$3=match$15[2];
         
         var match$16=spill(match[2],at_join$3);
         
         var saved_spill_at_raise=spill_at_raise[1];
         
         spill_at_raise[1]=match$16[2],0;
         var match$17=spill(match[1],at_join$3);
         
         spill_at_raise[1]=saved_spill_at_raise,0;
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Itrywith */[6,match$17[1],match$16[1]],
                   i[3],
                   i[4],
                   match$15[1]),
                 match$17[2]];
         
        case 7:return /* tuple */[0,i,spill_at_raise[1]];
        }}
    
    switch(exit){case 40:return /* tuple */[0,i,Reg["Set"][1]];}
    };

var
 reset=
  function(param)
   {spill_env[1]=Reg["Map"][1],0;
    use_date[1]=Reg["Map"][1],0;
    return current_date[1]=0,0;
    };

var
 fundecl=
  function(f)
   {reset(0);
    var match=reload(f[3],Reg["Set"][1]);
    
    var match$1=spill(match[1],Reg["Set"][1]);
    
    var
     new_body=
      add_spills(Reg["inter_set_array"](match$1[2],f[2]),match$1[1]);
    
    spill_env[1]=Reg["Map"][1],0;
    use_date[1]=Reg["Map"][1],0;
    return /* record */[0,f[1],f[2],new_body,f[4],f[5]];
    };

module["exports"]={"fundecl":fundecl,"reset":reset};

