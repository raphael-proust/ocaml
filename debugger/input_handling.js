var List=require("List");
var Pervasives=require("Pervasives");
var Primitives=require("Primitives");
var Unix=require("Unix");

var active_files=[0,0];

var
 add_file=
  function(file,controller)
   {return active_files[1]=
           [0,[0,file[3],[0,controller,file]],active_files[1]],
           0;
    };

var
 remove_file=
  function(file)
   {return active_files[1]=List["remove_assoc"](file[3],active_files[1]),0;};

var
 change_controller=
  function(file,controller)
   {remove_file(file);return add_file(file,controller);};

var
 current_controller=
  function(file){return List["assoc"](file[3],active_files[1])[1];};

var
 execute_with_other_controller=
  function(controller,file,funct)
   {var old_controller=current_controller(file);
    
    change_controller(file,controller);
    try
     {var result=funct(0);
      
      change_controller(file,old_controller);
      return result;
      }
    catch(x){change_controller(file,old_controller);throw x;}
    };

var continue_main_loop=[0,1];

var exit_main_loop=function(param){return continue_main_loop[1]=0,0;};

var
 main_loop=
  function(param)
   {var old_state=continue_main_loop[1];
    
    try
     {continue_main_loop[1]=1,0;
      while(continue_main_loop[1])
       {try
         {var
           match=
            Unix["select"]
             (List["map"](function(prim){return prim[1];},active_files[1]),
              0,
              0,
              -1);
          
          List["iter"]
           (function(fd)
             {var match$1=List["assoc"](fd,active_files[1]);
              
              return match$1[1](match$1[2]);
              },
            match[1])}
        catch(exn)
         {if(exn[1]=Unix["Unix_error"])
           {var match$1=exn[2];
            
            if("unknown primitive:isint")
             {if(match$1!=11){var exit=8;}else{}}
            else
             {var exit=8;}
            }
          else
           {var exit=8;}
          
          switch(exit){case 8:throw exn;}
          }
        }
      
      return continue_main_loop[1]=old_state,0;
      }
    catch(x){continue_main_loop[1]=old_state,0;throw x;}
    };

var interactif=[0,1];

var current_prompt=[0,""];

var user_channel=[0,Primitives["std_io"]];

var
 read_user_input=
  function(buffer,length)
   {main_loop(0);
    return Pervasives["input"](user_channel[1][1],buffer,0,length);
    };

var stop_user_input=function(param){return remove_file(user_channel[1]);};

var
 resume_user_input=
  function(param)
   {if(!List["mem_assoc"](user_channel[1][3],active_files[1]))
     {if(interactif[1])
       {Pervasives["print_string"](current_prompt[1]),
        Pervasives["flush"](Pervasives["stdout"])}
      else
       {}
      
      return add_file(user_channel[1],exit_main_loop);
      }
    else
     {return 0;}
    };


module["exports"]=
{"add_file":add_file,
 "remove_file":remove_file,
 "current_controller":current_controller,
 "execute_with_other_controller":execute_with_other_controller,
 "exit_main_loop":exit_main_loop,
 "main_loop":main_loop,
 "interactif":interactif,
 "current_prompt":current_prompt,
 "user_channel":user_channel,
 "read_user_input":read_user_input,
 "stop_user_input":stop_user_input,
 "resume_user_input":resume_user_input};

