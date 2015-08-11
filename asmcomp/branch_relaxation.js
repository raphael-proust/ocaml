// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Misc=require("Misc");
var Linearize=require("Linearize");
var Hashtbl=require("Hashtbl");


var
 Make=
  function(T)
   {var
     label_map=
      function(code)
       {var map=Hashtbl["create"](0,37);
        
        var
         fill_map=
          function(pc,instr)
           {var op=instr[1];
            
            var exit;
            
            if(typeof op=="number")
             {switch(op){case 0:return /* tuple */[0,pc,map];}}
            else
             {switch(op[0])
               {case 1:
                 Hashtbl["add"](map,op[1],pc);return fill_map(pc,instr[2]);
                default:exit=20;}}
            
            switch(exit){case 20:return fill_map(pc+T[3](op),instr[2]);}
            };
        
        return fill_map(0,code);
        };
    
    var
     branch_overflows=
      function(map,pc_branch,lbl_dest,max_branch_offset)
       {var pc_dest=Hashtbl["find"](map,lbl_dest);
        
        var delta=pc_dest-(pc_branch+T[2]);
        
        return delta<=-max_branch_offset||delta>=max_branch_offset;
        };
    
    var
     opt_branch_overflows=
      function(map,pc_branch,opt_lbl_dest,max_branch_offset)
       {if(opt_lbl_dest)
         {return branch_overflows
                  (map,pc_branch,opt_lbl_dest[1],max_branch_offset);
          }
        else
         {return 0;}
        };
    
    var
     instr_overflows=
      function(code_size,max_out_of_line_code_offset,instr,map,pc)
       {var match=T[1][3](instr[1]);
        
        if(match)
         {var max_branch_offset=T[1][2](match[1])-12;
          
          var match$1=instr[1];
          
          var exit;
          
          if(typeof match$1=="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 0:
               var match$2=match$1[1];
               
               var exit$1;
               
               if(typeof match$2=="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 10:exit=11;
                   case 11:exit$1=13;
                   case 12:exit$1=13;
                   case 13:exit=11;
                   default:exit=12;}}
               
               switch(exit$1)
                {case 13:
                  var match$3=match$2[1];
                  
                  if("unknown primitive:isint")
                   {if(match$3>=12){exit=11;}else{exit=12;}}
                  else
                   {exit=12;}
                  
                 }
               
              case 3:
               return branch_overflows(map,pc,match$1[2],max_branch_offset);
              case 4:
               return opt_branch_overflows
                       (map,pc,match$1[1],max_branch_offset)||
                      opt_branch_overflows(map,pc,match$1[2],max_branch_offset)||
                      opt_branch_overflows(map,pc,match$1[3],max_branch_offset);
               
              default:exit=12;}}
          
          switch(exit)
           {case 12:
             return Misc["fatal_error"]
                     ("Unsupported instruction for branch relaxation");
             
            case 11:
             return code_size+
                    max_out_of_line_code_offset-
                    pc>=
                    max_branch_offset;
             
            }
          }
        else
         {return 0;}
        };
    
    var
     fixup_branches=
      function(code_size,max_out_of_line_code_offset,map,code)
       {var
         expand_optbranch=
          function(lbl,n,arg,next)
           {if(lbl)
             {return Linearize["instr_cons"]
                      (/* Lcondbranch */[3,/* Iinttest_imm */[1,[0,0],n],lbl[1]],
                       arg,
                       [],
                       next);
              }
            else
             {return next;}
            };
        
        var
         fixup=
          function(did_fix,pc,instr)
           {var match=instr[1];
            
            var exit;
            
            if("unknown primitive:isint")
             {if(match!=0){exit=8;}else{return did_fix;}}
            else
             {exit=8;}
            
            switch(exit)
             {case 8:
               var
                overflows=
                 instr_overflows
                  (code_size,max_out_of_line_code_offset,instr,map,pc);
               
               if(!overflows)
                {return fixup(did_fix,pc+T[3](instr[1]),instr[2]);}
               else
                {var match$1=instr[1];
                 
                 var exit$1;
                 
                 if(typeof match$1=="number")
                  {switch(match$1){}}
                 else
                  {switch(match$1[0])
                    {case 0:
                      var match$2=match$1[1];
                      
                      if(typeof match$2=="number")
                       {switch(match$2){}}
                      else
                       {switch(match$2[0])
                         {case 10:
                           instr[1]=T[4](match$2[1]),0;
                           return fixup(1,pc+T[3](instr[1]),instr[2]);
                           
                          case 11:
                           var match$3=match$2[1];
                           
                           if("unknown primitive:isint")
                            {if(match$3>=12)
                              {instr[1]=T[5](0),0;
                               return fixup(1,pc+T[3](instr[1]),instr[2]);
                               }
                             else
                              {exit$1=6;}
                             }
                           else
                            {exit$1=6;}
                           
                          case 12:
                           var match$4=match$2[1];
                           
                           if("unknown primitive:isint")
                            {if(match$4>=12)
                              {instr[1]=T[6](match$2[2]),0;
                               return fixup(1,pc+T[3](instr[1]),instr[2]);
                               }
                             else
                              {exit$1=6;}
                             }
                           else
                            {exit$1=6;}
                           
                          case 13:
                           instr[1]=T[7](match$2[1]),0;
                           return fixup(1,pc+T[3](instr[1]),instr[2]);
                           
                          default:exit$1=6;}}
                      
                     case 3:
                      var lbl2=Linearize["new_label"](0);
                      
                      var
                       cont=
                        Linearize["instr_cons"]
                         (/* Lbranch */[2,match$1[2]],
                          [],
                          [],
                          Linearize["instr_cons"](/* Llabel */[1,lbl2],[],[],instr[2]));
                      
                      instr[1]=
                      /* Lcondbranch */[3,
                       Linearize["invert_test"](match$1[1]),
                       lbl2],
                      0;
                      instr[2]=cont,0;
                      return fixup(1,pc+T[3](instr[1]),instr[2]);
                      
                     case 4:
                      var
                       cont$1=
                        expand_optbranch
                         (match$1[1],
                          0,
                          instr[3],
                          expand_optbranch
                           (match$1[2],
                            1,
                            instr[3],
                            expand_optbranch(match$1[3],2,instr[3],instr[2])));
                      
                      instr[1]=cont$1[1],0;
                      instr[2]=cont$1[2],0;
                      return fixup(1,pc,instr);
                      
                     default:exit$1=6;}}
                 
                 switch(exit$1)
                  {case 6:
                    throw [0,
                           Assert_failure,
                           [0,"asmcomp/branch_relaxation.ml",120,12]];
                    
                   }
                 }
               
              }
            };
        
        return fixup(0,0,code);
        };
    
    var
     relax=
      function(code,max_out_of_line_code_offset)
       {var
         min_of_max_branch_offsets=
          List["fold_left"]
           (function(min_of_max_branch_offsets$1,branch)
             {return Pervasives["min"]
                      (min_of_max_branch_offsets$1,T[1][2](branch));
              },
            Pervasives["max_int"],
            T[1][1]);
        
        var match=label_map(code);
        
        var code_size=match[1];
        
        if
         (code_size>=
          min_of_max_branch_offsets&&
          fixup_branches(code_size,max_out_of_line_code_offset,match[2],code))
         {return relax(code,max_out_of_line_code_offset);}
        else
         {return 0;}
        };
    
    return [0,
            label_map,
            branch_overflows,
            opt_branch_overflows,
            instr_overflows,
            fixup_branches,
            relax];
    };

module["exports"]=
{"Make":function(funarg){var $$let=Make(funarg);return [0,$$let[6]];}};

