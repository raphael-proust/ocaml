// Generated CODE, PLEASE EDIT WITH CARE 

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
var Time_travel=require("Time_travel");
var Input_handling=require("Input_handling");
var Config=require("Config");


var file_name=[0,0];

var buffer="unknown primitive:caml_create_string";

var
 control_connection=
  function(pid,fd)
   {if(Unix["read"](fd[3],buffer,0,1024)=0)
     {return Time_travel["forget_process"](fd,pid);}
    else
     {Pervasives["prerr_string"]("Garbage data from process ");
      Pervasives["prerr_int"](pid);
      return Pervasives["prerr_endline"]("");
      }
    };

var
 accept_connection=
  function($$continue,fd)
   {var match=Unix["accept"](fd[3]);
    
    var io_chan=Primitives["io_channel_of_descr"](match[1]);
    
    var pid=Pervasives["input_binary_int"](io_chan[1]);
    
    if(pid=-1)
     {var pid$prime=Pervasives["input_binary_int"](io_chan[1]);
      
      Time_travel["new_checkpoint"](pid$prime,io_chan);
      Input_handling["add_file"](io_chan,control_connection(pid$prime));
      return $$continue(0);
      }
    else
     {if(Time_travel["set_file_descriptor"](pid,io_chan))
       {return Input_handling["add_file"](io_chan,control_connection(pid));}
      else
       {return 0;}
      }
    };

var
 open_connection=
  function(address,$$continue)
   {try
     {var match=Unix_tools["convert_address"](address);
      
      var sock_address=match[2];
      
      var $js;
      switch(sock_address)
       {case 0:$js=[/* Some */0,sock_address[1]];case 1:$js=0;}
      file_name[1]=$js,0;
      var sock=Unix["socket"](match[1],0,0);
      
      try
       {Unix["bind"](sock,sock_address);
        Unix["setsockopt"](sock,2,1);
        Unix["listen"](sock,3);
        Program_loading["connection"][1]=
        Primitives["io_channel_of_descr"](sock),
        0;
        Input_handling["add_file"]
         (Program_loading["connection"][1],accept_connection($$continue));
        return Program_loading["connection_opened"][1]=1,0;
        }
      catch(x){Unix["close"](sock);throw x;}
      }
    catch(err)
     {if(err[1]=Failure)
       {throw Debugger_config["Toplevel"];}
      else
       {if(err[1]=Unix["Unix_error"])
         {Unix_tools["report_error"](err);throw Debugger_config["Toplevel"];}
        else
         {throw err;}
        }
      }
    };

var
 close_connection=
  function(param)
   {if(Program_loading["connection_opened"][1])
     {Program_loading["connection_opened"][1]=0,0;
      Input_handling["remove_file"](Program_loading["connection"][1]);
      Primitives["close_io"](Program_loading["connection"][1]);
      var match=file_name[1];
      
      if(match){return Unix["unlink"](match[1]);}else{return 0;}
      }
    else
     {return 0;}
    };

var loaded=[0,0];

var
 kill_program=
  function(param)
   {Breakpoints["remove_all_breakpoints"](0);
    History["empty_history"](0);
    Time_travel["kill_all_checkpoints"](0);
    loaded[1]=0,0;
    return close_connection(0);
    };

var
 ask_kill_program=
  function(param)
   {if(!loaded[1])
     {return 1;}
    else
     {var
       answer=
        Question["yes_or_no"]("A program is being debugged already. Kill it");
      
      if(answer){kill_program(0)}else{}
      
      return answer;
      }
    };

var
 initialize_loading=
  function(param)
   {if(Program_loading["debug_loading"][1])
     {Pervasives["prerr_endline"]("Loading debugging information..."),
      Printf["fprintf"]
       (Pervasives["stderr"],
        [0,[11,"\tProgram: [",[2,0,[11,"]\n",[10,0]]]],"\tProgram: [%s]\n%!"],
        Parameters["program_name"][1])}
    else
     {}
    
    try
     {Unix["access"](Parameters["program_name"][1],[0,3,0])}
    catch(exn)
     {if(exn[1]=Unix["Unix_error"])
       {Pervasives["prerr_endline"]("Program not found.");
        throw Debugger_config["Toplevel"];
        }
      else
       {throw exn;}
      }
    
    Symbols["read_symbols"](Parameters["program_name"][1]);
    Config["load_path"][1]=
    Pervasives["@"](Config["load_path"][1],Symbols["program_source_dirs"][1]),
    0;
    Envaux["reset_cache"](0);
    if(Program_loading["debug_loading"][1])
     {Pervasives["prerr_endline"]("Opening a socket...")}
    else
     {}
    
    return open_connection
            (Parameters["socket_name"][1],
             function(param$1)
              {Time_travel["go_to"](Int64ops["_0"]);
               Symbols["set_all_events"](0);
               return Input_handling["exit_main_loop"](0);
               });
    };

var
 ensure_loaded=
  function(param)
   {if(!loaded[1])
     {Pervasives["print_string"]("Loading program... ");
      Pervasives["flush"](Pervasives["stdout"]);
      if("unknown primitive:caml_string_equal")
       {Pervasives["prerr_endline"]("No program specified.");
        throw Debugger_config["Toplevel"];
        }
      else
       {}
      
      try
       {initialize_loading(0);
        Program_loading["launching_func"][1](0);
        if(Program_loading["debug_loading"][1])
         {Pervasives["prerr_endline"]("Waiting for connection...")}
        else
         {}
        
        Input_handling["main_loop"](0);
        loaded[1]=1,0;
        return Pervasives["prerr_endline"]("done.");
        }
      catch(x){kill_program(0);throw x;}
      }
    else
     {return 0;}
    };

module["exports"]=
{"loaded":loaded,
 "ensure_loaded":ensure_loaded,
 "kill_program":kill_program,
 "ask_kill_program":ask_kill_program};

