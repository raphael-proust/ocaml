// Generated CODE, PLEASE EDIT WITH CARE 

var Checkpoints=require("./checkpoints.js");
var Exec=require("./exec.js");
var Debugcom=require("./debugcom.js");


var current_trap_barrier=[0,0];

var install_trap_barrier=function(pos){return current_trap_barrier[1]=pos,0};

var remove_trap_barrier=function(param){return current_trap_barrier[1]=0,0};

var
 update_trap_barrier=
  function(param)
   {return Checkpoints["current_checkpoint"][1][10]!==current_trap_barrier[1]
            ?Exec["protect"]
              (function(param$1)
                {Debugcom["set_trap_barrier"](current_trap_barrier[1]);
                 return Checkpoints["current_checkpoint"][1][10]=
                        current_trap_barrier[1],
                        0})
            :0};

var
 exec_with_trap_barrier=
  function(trap_barrier,funct)
   {try
     {install_trap_barrier(trap_barrier);
      funct(/* () */0);
      return remove_trap_barrier(/* () */0)}
    catch(x){remove_trap_barrier(/* () */0);throw x}
    };

module["exports"]=
{"install_trap_barrier":install_trap_barrier,
 "remove_trap_barrier":remove_trap_barrier,
 "update_trap_barrier":update_trap_barrier,
 "exec_with_trap_barrier":exec_with_trap_barrier};

