// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var List=require("List");
var Pervasives=require("Pervasives");
var Set=require("Set");
var Proc=require("Proc");


var
 compare=
  function(r1,r2)
   {var c1=r1[10];
    
    var d1=r1[9];
    
    var c2=r2[10];
    
    var d2=r2[9];
    
    var n=c2*d1-c1*d2;
    
    if(n!=0)
     {return n;}
    else
     {var n$1=c2-c1;
      
      if(n$1!=0)
       {return n$1;}
      else
       {var n$2=d1-d2;if(n$2!=0){return n$2;}else{return r1[2]-r2[2];}}
      }
    };

var OrderedRegSet=Set["Make"]([0,compare]);

var
 allocate_registers=
  function(param)
   {var constrained=[0,OrderedRegSet[1]];
    
    var unconstrained=[0,0];
    
    var
     remove_reg=
      function(reg)
       {var cl=Proc["register_class"](reg);
        
        if(reg[5])
         {var nslots=Proc["num_stack_slots"][cl];
          
          var conflict="unknown primitive:caml_make_vect";
          
          List["iter"]
           (function(r)
             {var match=r[4];
              
              var exit;
              
              if(typeof match=="number")
               {switch(match){case 0:exit=30;}}
              else
               {switch(match[0])
                 {case 0:exit=30;
                  case 1:
                   var match$1=match[1];
                   
                   switch(match$1)
                    {case 0:
                      if(Proc["register_class"](r)=cl)
                       {return conflict[match$1[1]]=1,0;}
                      else
                       {return 0;}
                      
                     case 1:exit=30;
                     case 2:exit=30;
                     }
                   
                  }}
              
              switch(exit){case 30:return 0;}
              },
            reg[7]);
          var slot=0;
          
          while(slot<nslots&&conflict[slot]){slot=1+slot;}
          
          reg[4]=/* Stack */[1,/* Local */[0,slot]],0;
          if(slot>=nslots)
           {return Proc["num_stack_slots"][cl]=slot+1,0;}
          else
           {return 0;}
          }
        else
         {if(reg[9]<Proc["num_available_registers"][cl])
           {return unconstrained[1]=/* :: */[0,reg,unconstrained[1]],0;}
          else
           {return constrained[1]=OrderedRegSet[4](reg,constrained[1]),0;}
          }
        };
    
    var
     iter_preferred=
      function(f,reg)
       {var
         walk=
          function(r,w)
           {if(!r[11])
             {f(r,w);
              var p=r[8];
              
              if(p)
               {r[11]=1,0;
                List["iter"]
                 (function(param$1)
                   {return walk(param$1[1],Pervasives["min"](w,param$1[2]));},
                  p);
                return r[11]=0,0;
                }
              else
               {return 0;}
              }
            else
             {return 0;}
            };
        
        reg[11]=1,0;
        List["iter"]
         (function(param$1){return walk(param$1[1],param$1[2]);},reg[8]);
        return reg[11]=0,0;
        };
    
    var start_register="unknown primitive:caml_make_vect";
    
    var
     assign_location=
      function(reg)
       {var cl=Proc["register_class"](reg);
        
        var first_reg=Proc["first_available_register"][cl];
        
        var num_regs=Proc["num_available_registers"][cl];
        
        var score="unknown primitive:caml_make_vect";
        
        var best_score=-1e6;
        
        var best_reg=-1;
        
        var start=start_register[cl];
        
        if(num_regs!=0)
         {iter_preferred
           (function(r,w)
             {var match=r[4];
              
              if(typeof match=="number")
               {switch(match)
                 {case 0:
                   return List["iter"]
                           (function(neighbour)
                             {var match$1=neighbour[4];
                              
                              var exit;
                              
                              if(typeof match$1=="number")
                               {switch(match$1){case 0:exit=16;}}
                              else
                               {switch(match$1[0])
                                 {case 0:
                                   var n=match$1[1]-first_reg;
                                   
                                   if(n<num_regs){return score[n]=score[n]-w,0;}else{return 0;}
                                   
                                  case 1:exit=16;
                                  }}
                              
                              switch(exit){case 16:return 0;}
                              },
                            r[7]);
                   
                  }}
              else
               {switch(match[0])
                 {case 0:
                   var n=match[1]-first_reg;
                   
                   if(n<num_regs){return score[n]=score[n]+w,0;}else{return 0;}
                   
                  case 1:return 0;
                  }}
              },
            reg);
          List["iter"]
           (function(neighbour)
             {var match=neighbour[4];
              
              var exit;
              
              if(typeof match=="number")
               {switch(match){case 0:exit=13;}}
              else
               {switch(match[0])
                 {case 0:
                   var n=match[1]-first_reg;
                   
                   if(n<num_regs){score[n]=-1e6,0}else{}
                   
                  case 1:exit=13;
                  }}
              
              switch(exit){case 13:}
              
              return iter_preferred
                      (function(r,w)
                        {var match$1=r[4];
                         
                         var exit$1;
                         
                         if(typeof match$1=="number")
                          {switch(match$1){case 0:exit$1=11;}}
                         else
                          {switch(match$1[0])
                            {case 0:
                              var n$1=match$1[1]-first_reg;
                              
                              if(n$1<num_regs)
                               {return score[n$1]=score[n$1]-(w-1),0;}
                              else
                               {return 0;}
                              
                             case 1:exit$1=11;
                             }}
                         
                         switch(exit$1){case 11:return 0;}
                         },
                       neighbour);
              },
            reg[7]);
          for(var n=start;n<=num_regs-1;n++)
           {if(score[n]>best_score){best_score=score[n];best_reg=n;}else{}}
          
          for(var n$1=0;n$1<=start-1;n$1++)
           {if(score[n$1]>best_score)
             {best_score=score[n$1];best_reg=n$1;}
            else
             {}
            }
          }
        else
         {}
        
        if(best_reg>=0)
         {reg[4]=/* Reg */[0,first_reg+best_reg],0;
          if(Proc["rotate_registers"])
           {var start$1=start+1;
            
            start_register[cl]=start$1>=num_regs?0:start$1,0}
          else
           {}
          }
        else
         {var nslots=Proc["num_stack_slots"][cl];
          
          var score$1="unknown primitive:caml_make_vect";
          
          List["iter"]
           (function(param$1)
             {var w=param$1[2];
              
              var r=param$1[1];
              
              var match=r[4];
              
              var exit;
              
              if(typeof match=="number")
               {switch(match)
                 {case 0:
                   return List["iter"]
                           (function(neighbour)
                             {var match$1=neighbour[4];
                              
                              var exit$1;
                              
                              if(typeof match$1=="number")
                               {switch(match$1){case 0:exit$1=5;}}
                              else
                               {switch(match$1[0])
                                 {case 0:exit$1=5;
                                  case 1:
                                   var match$2=match$1[1];
                                   
                                   switch(match$2)
                                    {case 0:
                                      var n$2=match$2[1];return score$1[n$2]=score$1[n$2]-w,0;
                                     case 1:exit$1=5;
                                     case 2:exit$1=5;
                                     }
                                   
                                  }}
                              
                              switch(exit$1){case 5:return 0;}
                              },
                            r[7]);
                   
                  }}
              else
               {switch(match[0])
                 {case 0:exit=6;
                  case 1:
                   var match$1=match[1];
                   
                   switch(match$1)
                    {case 0:
                      var n$2=match$1[1];return score$1[n$2]=score$1[n$2]+w,0;
                     case 1:exit=6;
                     case 2:exit=6;
                     }
                   
                  }}
              
              switch(exit){case 6:return 0;}
              },
            reg[8]);
          List["iter"]
           (function(neighbour)
             {var match=neighbour[4];
              
              var exit;
              
              if(typeof match=="number")
               {switch(match){case 0:exit=4;}}
              else
               {switch(match[0])
                 {case 0:exit=4;
                  case 1:
                   var match$1=match[1];
                   
                   switch(match$1)
                    {case 0:score$1[match$1[1]]=-1e6,0;
                     case 1:exit=4;
                     case 2:exit=4;
                     }
                   
                  }}
              
              switch(exit){case 4:}
              
              return List["iter"]
                      (function(param$1)
                        {var match$2=param$1[1][4];
                         
                         var exit$1;
                         
                         if(typeof match$2=="number")
                          {switch(match$2){case 0:exit$1=3;}}
                         else
                          {switch(match$2[0])
                            {case 0:exit$1=3;
                             case 1:
                              var match$3=match$2[1];
                              
                              switch(match$3)
                               {case 0:
                                 var n$2=match$3[1];
                                 
                                 return score$1[n$2]=score$1[n$2]-param$1[2],0;
                                 
                                case 1:exit$1=3;
                                case 2:exit$1=3;
                                }
                              
                             }}
                         
                         switch(exit$1){case 3:return 0;}
                         },
                       neighbour[8]);
              },
            reg[7]);
          var best_score$1=-1e6;
          
          var best_slot=-1;
          
          for(var n$2=0;n$2<=nslots-1;n$2++)
           {if(score$1[n$2]>best_score$1)
             {best_score$1=score$1[n$2];best_slot=n$2;}
            else
             {}
            }
          
          if(best_slot>=0)
           {reg[4]=/* Stack */[1,/* Local */[0,best_slot]],0}
          else
           {reg[4]=
            /* Stack */[1,/* Local */[0,nslots]],
            0,
            Proc["num_stack_slots"][cl]=
            nslots+
            1,
            0}
          }
        
        return reg[8]=0,0;
        };
    
    for(var i=0;i<=Proc["num_register_classes"]-1;i++)
     {Proc["num_stack_slots"][i]=0,0}
    
    List["iter"](remove_reg,Reg["all_registers"](0));
    OrderedRegSet[13](assign_location,constrained[1]);
    return List["iter"](assign_location,unconstrained[1]);
    };

module["exports"]={"allocate_registers":allocate_registers};

