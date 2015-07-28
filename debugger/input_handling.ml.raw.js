var Pervasives=require("Pervasives");
var List=require("List");
var Primitives=require("Primitives");
var Unix=require("Unix");
var active_files=[0,0];
var
 add_file=
  function(file,controller)
   {return active_files[1]=
           [0,[0,file[3],[0,controller,file]],active_files[1]],
           0};
var
 remove_file=
  function(file)
   {var $js=List["remove_assoc"];
    var $js$1=$js(file[3],active_files[1]);
    return active_files[1]=$js$1,0};
var
 change_controller=
  function(file,controller)
   {remove_file(file);return add_file(file,controller)};
var
 current_controller=
  function(file)
   {var $js=List["assoc"];
    var $js$1=$js(file[3],active_files[1]);
    return $js$1[1]};
var
 execute_with_other_controller=
  function(controller,file,funct)
   {var old_controller=current_controller(file);
    change_controller(file,controller);
    try
     {var result=funct(0);
      change_controller(file,old_controller);
      return result}
    catch(x)
     {change_controller(file,old_controller);
      return "unknown primitive:reraise"}};
var continue_main_loop=[0,1];
var exit_main_loop=function(param){return continue_main_loop[1]=0,0};
var
 main_loop=
  function(param)
   {var old_state=continue_main_loop[1];
    try
     {continue_main_loop[1]=1,0;
      for(;;)
       {var $js=continue_main_loop[1];
        if($js)
         {try
           {var $js$1=Unix["select"];
            var $js$2=List["map"];
            var $js$3=$js$2(function(prim){return prim[1]},active_files[1]);
            var match=$js$1($js$3,0,0,-1);
            var $js$4=List["iter"];
            $js$4
             (function(fd)
               {var $js$5=List["assoc"];
                var match$1=$js$5(fd,active_files[1]);
                var $js$6=match$1[1];
                return $js$6(match$1[2])},
              match[1])}
          catch(exn)
           {var $js$5=exn[1]=Unix["Unix_error"];
            if($js$5)
             {var match$1=exn[2];
              var $js$6="unknown primitive:isint";
              if($js$6)
               {var $js$7=match$1!=11;if($js$7){var exit=8}else{}}
              else
               {var exit=8}}
            else
             {var exit=8}
            switch(exit){case 8:"unknown primitive:reraise"}}}
        else
         break}
      return continue_main_loop[1]=old_state,0}
    catch(x)
     {continue_main_loop[1]=old_state,0;return "unknown primitive:reraise"}};
var interactif=[0,1];
var current_prompt=[0,""];
var user_channel=[0,Primitives["std_io"]];
var
 read_user_input=
  function(buffer,length)
   {main_loop(0);
    var $js=Pervasives["input"];
    return $js(user_channel[1][1],buffer,0,length)};
var stop_user_input=function(param){return remove_file(user_channel[1])};
var
 resume_user_input=
  function(param)
   {var $js=List["mem_assoc"];
    var $js$1=$js(user_channel[1][3],active_files[1]);
    var $js$2=!$js$1;
    if($js$2)
     {var $js$3=interactif[1];
      if($js$3)
       {var $js$4=Pervasives["print_string"];
        $js$4(current_prompt[1]);
        var $js$5=Pervasives["flush"];
        $js$5(Pervasives["stdout"])}
      else
       {}
      return add_file(user_channel[1],exit_main_loop)}
    else
     {return 0}};
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
