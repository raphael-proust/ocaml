var Question=require("Question");
var History=require("History");
var Breakpoints=require("Breakpoints");
var Pervasives=require("Pervasives");
var Symbols=require("Symbols");
var Printf=require("Printf");
var Envaux=require("Envaux");
var Program_loading=require("Program_loading");
var Primitives=require("Primitives");
var Unix=require("Unix");
var Unix_tools=require("Unix_tools");
var Parameters=require("Parameters");
var Debugger_config=require("Debugger_config");
var Int64ops=require("Int64ops");
var Input_handling=require("Input_handling");
var Time_travel=require("Time_travel");
var Config=require("Config");
var file_name=[0,0];
var buffer="unknown primitive:caml_create_string";
var
 control_connection=
  function(pid,fd)
   {var $js=Unix["read"];
    var $js$1=$js(fd[3],buffer,0,1024);
    var $js$2=$js$1=0;
    if($js$2)
     {var $js$3=Time_travel["forget_process"];return $js$3(fd,pid)}
    else
     {var $js$4=Pervasives["prerr_string"];
      $js$4("Garbage data from process ");
      var $js$5=Pervasives["prerr_int"];
      $js$5(pid);
      var $js$6=Pervasives["prerr_endline"];
      return $js$6("")}};
var
 accept_connection=
  function(continue,fd)
   {var $js=Unix["accept"];
    var match=$js(fd[3]);
    var $js$1=Primitives["io_channel_of_descr"];
    var io_chan=$js$1(match[1]);
    var $js$2=Pervasives["input_binary_int"];
    var pid=$js$2(io_chan[1]);
    var $js$3=pid=-1;
    if($js$3)
     {var $js$4=Pervasives["input_binary_int"];
      var pid'=$js$4(io_chan[1]);
      var $js$5=Time_travel["new_checkpoint"];
      $js$5(pid',io_chan);
      var $js$6=Input_handling["add_file"];
      var $js$7=control_connection(pid');
      $js$6(io_chan,$js$7);
      return continue(0)}
    else
     {var $js$8=Time_travel["set_file_descriptor"];
      var $js$9=$js$8(pid,io_chan);
      if($js$9)
       {var $js$10=Input_handling["add_file"];
        var $js$11=control_connection(pid);
        return $js$10(io_chan,$js$11)}
      else
       {return 0}}};
var
 open_connection=
  function(address,continue)
   {try
     {var $js=Unix_tools["convert_address"];
      var match=$js(address);
      var sock_address=match[2];
      var $js$1=sock_address;
      if($js$1==0)
       {var $js$2=[0,sock_address[1]]}
      else
       if($js$1==1){var $js$2=0}
      file_name[1]=$js$2,0;
      var $js$3=Unix["socket"];
      var sock=$js$3(match[1],0,0);
      try
       {var $js$4=Unix["bind"];
        $js$4(sock,sock_address);
        var $js$5=Unix["setsockopt"];
        $js$5(sock,2,1);
        var $js$6=Unix["listen"];
        $js$6(sock,3);
        var $js$7=Primitives["io_channel_of_descr"];
        var $js$8=$js$7(sock);
        Program_loading["connection"][1]=$js$8,0;
        var $js$9=Input_handling["add_file"];
        var $js$10=accept_connection(continue);
        $js$9(Program_loading["connection"][1],$js$10);
        return Program_loading["connection_opened"][1]=1,0}
      catch(x)
       {var $js$11=Unix["close"];
        $js$11(sock);
        return "unknown primitive:reraise"}}
    catch(err)
     {var $js$12=err[1]=Failure;
      if($js$12)
       {return "unknown primitive:raise"}
      else
       {var $js$13=err[1]=Unix["Unix_error"];
        if($js$13)
         {var $js$14=Unix_tools["report_error"];
          $js$14(err);
          return "unknown primitive:raise"}
        else
         {return "unknown primitive:reraise"}}}};
var
 close_connection=
  function(param)
   {var $js=Program_loading["connection_opened"][1];
    if($js)
     {Program_loading["connection_opened"][1]=0,0;
      var $js$1=Input_handling["remove_file"];
      $js$1(Program_loading["connection"][1]);
      var $js$2=Primitives["close_io"];
      $js$2(Program_loading["connection"][1]);
      var match=file_name[1];
      var $js$3=match;
      if($js$3){var $js$4=Unix["unlink"];return $js$4(match[1])}else{return 0}}
    else
     {return 0}};
var loaded=[0,0];
var
 kill_program=
  function(param)
   {var $js=Breakpoints["remove_all_breakpoints"];
    $js(0);
    var $js$1=History["empty_history"];
    $js$1(0);
    var $js$2=Time_travel["kill_all_checkpoints"];
    $js$2(0);
    loaded[1]=0,0;
    return close_connection(0)};
var
 ask_kill_program=
  function(param)
   {var $js=!loaded[1];
    if($js)
     {return 1}
    else
     {var $js$1=Question["yes_or_no"];
      var answer=$js$1("A program is being debugged already. Kill it");
      var $js$2=answer;
      if($js$2){kill_program(0)}else{}
      return answer}};
var
 initialize_loading=
  function(param)
   {var $js=Program_loading["debug_loading"][1];
    if($js)
     {var $js$1=Pervasives["prerr_endline"];
      $js$1("Loading debugging information...");
      var $js$2=Printf["fprintf"];
      $js$2
       (Pervasives["stderr"],
        [0,[11,"\tProgram: [",[2,0,[11,"]\n",[10,0]]]],"\tProgram: [%s]\n%!"],
        Parameters["program_name"][1])}
    else
     {}
    try
     {var $js$3=Unix["access"];$js$3(Parameters["program_name"][1],[0,3,0])}
    catch(exn)
     {var $js$4=exn[1]=Unix["Unix_error"];
      if($js$4)
       {var $js$5=Pervasives["prerr_endline"];
        $js$5("Program not found.");
        "unknown primitive:raise"}
      else
       {"unknown primitive:reraise"}}
    var $js$6=Symbols["read_symbols"];
    $js$6(Parameters["program_name"][1]);
    var $js$7=Pervasives["@"];
    var $js$8=$js$7(Config["load_path"][1],Symbols["program_source_dirs"][1]);
    Config["load_path"][1]=$js$8,0;
    var $js$9=Envaux["reset_cache"];
    $js$9(0);
    var $js$10=Program_loading["debug_loading"][1];
    if($js$10)
     {var $js$11=Pervasives["prerr_endline"];$js$11("Opening a socket...")}
    else
     {}
    return open_connection
            (Parameters["socket_name"][1],
             function(param$1)
              {var $js$12=Time_travel["go_to"];
               $js$12(Int64ops["_0"]);
               var $js$13=Symbols["set_all_events"];
               $js$13(0);
               var $js$14=Input_handling["exit_main_loop"];
               return $js$14(0)})};
var
 ensure_loaded=
  function(param)
   {var $js=!loaded[1];
    if($js)
     {var $js$1=Pervasives["print_string"];
      $js$1("Loading program... ");
      var $js$2=Pervasives["flush"];
      $js$2(Pervasives["stdout"]);
      var $js$3="unknown primitive:caml_string_equal";
      if($js$3)
       {var $js$4=Pervasives["prerr_endline"];
        $js$4("No program specified.");
        "unknown primitive:raise"}
      else
       {}
      try
       {initialize_loading(0);
        var $js$5=Program_loading["launching_func"][1];
        $js$5(0);
        var $js$6=Program_loading["debug_loading"][1];
        if($js$6)
         {var $js$7=Pervasives["prerr_endline"];
          $js$7("Waiting for connection...")}
        else
         {}
        var $js$8=Input_handling["main_loop"];
        $js$8(0);
        loaded[1]=1,0;
        var $js$9=Pervasives["prerr_endline"];
        return $js$9("done.")}
      catch(x){kill_program(0);return "unknown primitive:reraise"}}
    else
     {return 0}};
module["exports"]=
{"loaded":loaded,
 "ensure_loaded":ensure_loaded,
 "kill_program":kill_program,
 "ask_kill_program":ask_kill_program};
