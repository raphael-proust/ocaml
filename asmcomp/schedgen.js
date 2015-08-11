// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("CamlinternalOO");
var List=require("List");
var Pervasives=require("Pervasives");
var Proc=require("Proc");
var Arch=require("Arch");
var Linearize=require("Linearize");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");


var shared=[0,"trywith_nesting"];

var
 shared$1=
  [0,
   "schedule_fundecl",
   "reschedule",
   "reload_retaddr_latency",
   "reload_retaddr_issue_cycles",
   "ready_instruction",
   "oper_latency",
   "oper_issue_cycles",
   "oper_in_basic_block",
   "is_store",
   "is_load",
   "is_checkbound",
   "instr_latency",
   "instr_issue_cycles",
   "instr_is_store",
   "instr_is_load",
   "instr_is_checkbound",
   "instr_in_basic_block",
   "destroyed_by_instr",
   "add_instruction"];

var dummy_node=/* record */[0,Linearize["end_instr"],0,0,0,-1,0,0];

var code_results=Hashtbl["create"](0,31);

var code_uses=Hashtbl["create"](0,31);

var code_stores=[0,0];

var code_loads=[0,0];

var code_checkbounds=[0,0];

var
 clear_code_dag=
  function(param)
   {Hashtbl["clear"](code_results);
    Hashtbl["clear"](code_uses);
    code_stores[1]=0,0;
    code_loads[1]=0,0;
    return code_checkbounds[1]=0,0;
    };

var
 add_edge=
  function(ancestor,son,delay)
   {ancestor[3]=/* :: */[0,/* tuple */[0,son,delay],ancestor[3]],0;
    return son[6]=son[6]+1,0;
    };

var add_edge_after=function(son,ancestor){return add_edge(ancestor,son,0);};

var
 add_RAW_dependencies=
  function(node,arg)
   {try
     {var ancestor=Hashtbl["find"](code_results,arg[4]);
      
      return add_edge(ancestor,node,ancestor[2]);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 add_WAR_dependencies=
  function(node,res)
   {var ancestors=Hashtbl["find_all"](code_uses,res[4]);
    
    return List["iter"](add_edge_after(node),ancestors);
    };

var
 add_WAW_dependencies=
  function(node,res)
   {try
     {var ancestor=Hashtbl["find"](code_results,res[4]);
      
      return add_edge(ancestor,node,0);
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 is_critical=
  function(critical_outputs,results)
   {try
     {for(var i=0;i<=results["length"]-1;i++)
       {var r=results[i][4];
        
        for(var j=0;j<=critical_outputs["length"]-1;j++)
         {if("unknown primitive:caml_equal"){throw Pervasives["Exit"];}else{}}
        }
      
      return 0;
      }
    catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
    };

var
 longest_path=
  function(critical_outputs,node)
   {if(node[5]<0)
     {var sons=node[3];
      
      if(sons)
       {node[5]=
        List["fold_left"]
         (function(len,param)
           {return Pervasives["max"]
                    (len,longest_path(critical_outputs,param[1])+param[2]);
            },
          0,
          sons),
        0}
      else
       {node[5]=
        is_critical(critical_outputs,node[1][4])||(node[1][1]=1)?node[2]:0,
        0}
      }
    else
     {}
    
    return node[5];
    };

var
 remove_instr=
  function(node,param)
   {if(param)
     {var rem=param[2];
      
      var instr=param[1];
      
      if(instr=node)
       {return rem;}
      else
       {return /* :: */[0,instr,remove_instr(node,rem)];}
      }
    else
     {return 0;}
    };

var some_load=/* Iload */[8,6,Arch["identity_addressing"]];

var
 scheduler_generic=
  [0,
   0,
   function($$class)
    {var ids=CamlinternalOO["new_methods_variables"]($$class,shared$1,shared);
     
     var schedule_fundecl=ids[1];
     
     var reschedule=ids[2];
     
     var reload_retaddr_latency=ids[3];
     
     var reload_retaddr_issue_cycles=ids[4];
     
     var ready_instruction=ids[5];
     
     var oper_latency=ids[6];
     
     var oper_issue_cycles=ids[7];
     
     var oper_in_basic_block=ids[8];
     
     var is_store=ids[9];
     
     var is_load=ids[10];
     
     var is_checkbound=ids[11];
     
     var instr_latency=ids[12];
     
     var instr_issue_cycles=ids[13];
     
     var instr_is_store=ids[14];
     
     var instr_is_load=ids[15];
     
     var instr_is_checkbound=ids[16];
     
     var instr_in_basic_block=ids[17];
     
     var destroyed_by_instr=ids[18];
     
     var add_instruction=ids[19];
     
     var trywith_nesting=ids[20];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        oper_in_basic_block,
        function(self$neg1,param)
         {var exit;
          
          if(typeof param=="number")
           {switch(param){case 3:exit=27;case 4:exit=27;}}
          else
           {switch(param[0])
             {case 4:exit=27;
              case 5:exit=27;
              case 6:exit=27;
              case 7:exit=27;
              case 10:exit=27;
              default:exit=26;}}
          
          switch(exit){case 27:return 0;case 26:return 1;}
          },
        instr_in_basic_block,
        function(self$neg1,instr,try_nesting)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 1:return 1;}}
          else
           {switch(match[0])
             {case 0:
               var op=match[1];
               
               "unknown block:(sendself self-1/1184 oper_in_basic_block/1162 op/1187)";
               "unknown block:(sendself self-1/1184 is_checkbound/1166 op/1187)";
               return 0&&!(try_nesting>0&&0);
               
              default:exit=25;}}
          
          switch(exit){case 25:return 0;}
          },
        is_store,
        function(self$neg1,param)
         {var exit;
          
          if(typeof param=="number")
           {switch(param){}}
          else
           {switch(param[0]){case 9:return 1;default:exit=24;}}
          
          switch(exit){case 24:return 0;}
          },
        is_load,
        function(self$neg1,param)
         {var exit;
          
          if(typeof param=="number")
           {switch(param){}}
          else
           {switch(param[0]){case 8:return 1;default:exit=23;}}
          
          switch(exit){case 23:return 0;}
          },
        is_checkbound,
        function(self$neg1,param)
         {var exit;
          
          if(typeof param=="number")
           {switch(param){}}
          else
           {switch(param[0]){case 11:exit=22;case 12:exit=22;default:exit=21;}}
          
          switch(exit)
           {case 22:
             var match=param[1];
             
             if("unknown primitive:isint")
              {if(match>=12){return 1;}else{"unknown block:(exit 21)";}}
             else
              {"unknown block:(exit 21)";}
             
            case 21:return 0;
            }
          },
        instr_is_store,
        function(self$neg1,instr)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:
               "unknown block:(sendself self-1/1195 is_store/1164 (field 0 match/1318))";
               
              default:exit=20;}}
          
          switch(exit){case 20:return 0;}
          },
        instr_is_load,
        function(self$neg1,instr)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:
               "unknown block:(sendself self-1/1199 is_load/1165 (field 0 match/1315))";
               
              default:exit=19;}}
          
          switch(exit){case 19:return 0;}
          },
        instr_is_checkbound,
        function(self$neg1,instr)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:
               "unknown block:(sendself self-1/1203 is_checkbound/1166 (field 0 match/1312))";
               
              default:exit=18;}}
          
          switch(exit){case 18:return 0;}
          },
        reload_retaddr_latency,
        16,
        oper_latency,
        some_load,
        instr_latency,
        function(self$neg1,instr)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match)
             {case 1:
               "unknown block:(sendself self-1/1209 reload_retaddr_latency/1171)";
               
              }}
          else
           {switch(match[0])
             {case 0:
               "unknown block:(sendself self-1/1209 oper_latency/1170 (field 0 match/1308))";
               
              default:exit=17;}}
          
          switch(exit)
           {case 17:throw [0,Assert_failure,[0,"asmcomp/schedgen.ml",218,9]];}
          },
        reload_retaddr_issue_cycles,
        16,
        oper_issue_cycles,
        some_load,
        instr_issue_cycles,
        function(self$neg1,instr)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match)
             {case 1:
               "unknown block:(sendself self-1/1215 reload_retaddr_issue_cycles/1174)";
               
              }}
          else
           {switch(match[0])
             {case 0:
               "unknown block:(sendself self-1/1215 oper_issue_cycles/1173 (field 0 match/1304))";
               
              default:exit=16;}}
          
          switch(exit)
           {case 16:throw [0,Assert_failure,[0,"asmcomp/schedgen.ml",234,9]];}
          },
        destroyed_by_instr,
        function(self$neg1,instr)
         {var match=instr[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 1:return [];}}
          else
           {switch(match[0])
             {case 0:return Proc["destroyed_at_oper"](/* Iop */[0,match[1]]);
              default:exit=15;}}
          
          switch(exit)
           {case 15:throw [0,Assert_failure,[0,"asmcomp/schedgen.ml",242,9]];}
          },
        add_instruction,
        function(self$neg1,ready_queue,instr)
         {"unknown block:(sendself self-1/1223 instr_latency/1172 instr/1225)";
          
          "unknown block:(sendself self-1/1223 destroyed_by_instr/1176 instr/1225)";
          
          var node=/* record */[0,instr,delay,0,0,-1,0,0];
          
          $$Array["iter"](add_RAW_dependencies(node),instr[3]);
          $$Array["iter"](add_WAR_dependencies(node),instr[4]);
          $$Array["iter"](add_WAR_dependencies(node),destroyed);
          $$Array["iter"](add_WAW_dependencies(node),instr[4]);
          $$Array["iter"](add_WAW_dependencies(node),destroyed);
          "unknown block:(sendself self-1/1223 instr_is_load/1168 instr/1225)";
          if(0)
           {List["iter"](add_edge_after(node),code_stores[1]),
            code_loads[1]=
            /* :: */[0,node,code_loads[1]],
            0,
            List["iter"](add_edge_after(node),code_checkbounds[1]),
            code_checkbounds[1]=
            0,
            0}
          else
           {"unknown block:(sendself self-1/1223 instr_is_store/1167 instr/1225)";
            if(0)
             {List["iter"](add_edge_after(node),code_stores[1]),
              List["iter"](add_edge_after(node),code_loads[1]),
              List["iter"](add_edge_after(node),code_checkbounds[1]),
              code_stores[1]=
              /* :: */[0,node,0],
              0,
              code_loads[1]=
              0,
              0,
              code_checkbounds[1]=
              0,
              0}
            else
             {"unknown block:(sendself self-1/1223 instr_is_checkbound/1169 instr/1225)";
              if(0){code_checkbounds[1]=/* :: */[0,node,0],0}else{}
              }
            }
          
          for(var i=0;i<=instr[4]["length"]-1;i++)
           {Hashtbl["add"](code_results,instr[4][i][4],node)}
          
          for(var i$1=0;i$1<=destroyed["length"]-1;i$1++)
           {Hashtbl["add"](code_results,destroyed[i$1][4],node)}
          
          for(var i$2=0;i$2<=instr[3]["length"]-1;i$2++)
           {Hashtbl["add"](code_uses,instr[3][i$2][4],node)}
          
          if(node[6]=0)
           {return /* :: */[0,node,ready_queue];}
          else
           {return ready_queue;}
          },
        ready_instruction,
        function(self$neg1,date,queue)
         {var
           extract=
            function(best,param)
             {if(param)
               {var instr=param[1];
                
                if(instr[4]<=date&&instr[5]>best[5])
                 {var new_best=instr;}
                else
                 {var new_best=best;}
                
                return extract(new_best,param[2]);
                }
              else
               {if(best=dummy_node){return 0;}else{return /* Some */[0,best];}
                }
              };
          
          return extract(dummy_node,queue);
          },
        reschedule,
        function(self$neg1,ready_queue,date,cont)
         {if(ready_queue=0)
           {return cont;}
          else
           {"unknown block:(sendself self-1/1242 ready_instruction/1178 date/1244 ready_queue/1243)";
            
            if(match)
             {var node=match[1];
              
              var new_queue=[0,remove_instr(node,ready_queue)];
              
              "unknown block:(sendself self-1/1242 instr_issue_cycles/1175 (field 0 node/1246))";
              
              List["iter"]
               (function(param)
                 {var son=param[1];
                  
                  var completion_date=date+issue_cycles+param[2]-1;
                  
                  if(son[4]<completion_date){son[4]=completion_date,0}else{}
                  
                  son[7]=son[7]+1,0;
                  if(son[7]=son[6])
                   {return new_queue[1]=/* :: */[0,son,new_queue[1]],0;}
                  else
                   {return 0;}
                  },
                node[3]);
              var newrecord="unknown primitive:duprecord regular 6";
              
              "unknown block:(sendself self-1/1242 reschedule/1179 (field 0 new_queue/1247)\n  (+ date/1244 issue_cycles/1248) cont/1245)";
              newrecord[2]=0,0;
              return newrecord;
              }
            else
             {"unknown block:(sendself self-1/1242 reschedule/1179 ready_queue/1243 (+ date/1244 1)\n  cont/1245)";
              }
            }
          },
        schedule_fundecl,
        function(self$neg1,f)
         {var
           schedule=
            function(i,try_nesting)
             {var match=i[1];
              
              var exit;
              
              if("unknown primitive:isint")
               {switch(match[0])
                 {case 0:return i;
                  case 1:exit=3;
                  case 2:exit=3;
                  case 3:
                   var newrecord="unknown primitive:duprecord regular 6";
                   
                   newrecord[2]=schedule(i[2],try_nesting+1),0;
                   return newrecord;
                   
                  case 4:
                   var newrecord$1="unknown primitive:duprecord regular 6";
                   
                   newrecord$1[2]=schedule(i[2],try_nesting-1),0;
                   return newrecord$1;
                   
                  }
                }
              else
               {exit=3;}
              
              switch(exit)
               {case 3:
                 "unknown block:(sendself self-1/1253 instr_in_basic_block/1163 i/1257 try_nesting/1258)";
                 if(0)
                  {clear_code_dag(0);return schedule_block(0,i,try_nesting);}
                 else
                  {var newrecord$2="unknown primitive:duprecord regular 6";
                   
                   newrecord$2[2]=schedule(i[2],try_nesting),0;
                   return newrecord$2;
                   }
                 
                }
              };
          
          var
           schedule_block=
            function(ready_queue,i,try_nesting)
             {"unknown block:(sendself self-1/1253 instr_in_basic_block/1163 i/1260 try_nesting/1261)";
              if(0)
               {"unknown block:(sendself self-1/1253 add_instruction/1177 ready_queue/1259 i/1260)";
                return schedule_block(0,i[2],try_nesting);
                }
              else
               {var match=i[1];
                
                var exit;
                
                if(typeof match=="number")
                 {switch(match){case 2:var critical_outputs=[];}}
                else
                 {switch(match[0])
                   {case 0:
                     var exit$1;
                     
                     var $js=match[1];
                     if(typeof $js=="number")
                      {switch($js){case 3:exit$1=5;case 4:exit$1=5;}}
                     else
                      {switch($js[0])
                        {case 4:exit$1=6;
                         case 5:exit$1=6;
                         case 6:exit$1=6;
                         default:exit=4;}}
                     
                     switch(exit$1)
                      {case 5:var critical_outputs=[i[3][0]];
                       case 6:var critical_outputs=[];
                       }
                     
                    default:exit=4;}}
                
                switch(exit){case 4:var critical_outputs=i[3];}
                
                List["iter"](function(x){return 0;},ready_queue);
                "unknown block:(sendself self-1/1253 reschedule/1179 ready_queue/1259 0\n  (apply schedule/1255 i/1260 try_nesting/1261))";
                }
              };
          
          if(f[3])
           {var new_body=schedule(f[2],0);
            
            clear_code_dag(0);
            return /* record */[0,f[1],new_body,f[3],f[4]];
            }
          else
           {return f;}
          }]);
     return function(env,$$self)
      {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
       
       $$self$1[trywith_nesting]=0,0;
       return $$self$1;
       };
     },
   0,
   0];

var reset=function(param){return clear_code_dag(0);};

module["exports"]={"scheduler_generic":scheduler_generic,"reset":reset};

