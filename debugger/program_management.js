// Generated CODE, PLEASE EDIT WITH CARE 

var Question=require("./question.js");
var History=require("./history.js");
var Breakpoints=require("./breakpoints.js");
var Pervasives=require("./pervasives.js");
var Symbols=require("./symbols.js");
var Printf=require("./printf.js");
var Envaux=require("./envaux.js");
var Program_loading=require("./program_loading.js");
var Primitives=require("./primitives.js");
var Unix=require("./unix.js");
var Unix_tools=require("./unix_tools.js");
var Parameters=require("./parameters.js");
var Debugger_config=require("./debugger_config.js");
var Int64ops=require("./int64ops.js");
var Time_travel=require("./time_travel.js");
var Input_handling=require("./input_handling.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var file_name=[0,/* None */0];

var buffer=CamlPrimitive["caml_create_string"](1024);

var
 control_connection=
  function(pid,fd)
   {return Unix["read"](fd[3],buffer,0,1024)===0
            ?Time_travel["forget_process"](fd,pid)
            :(Pervasives["prerr_string"]("Garbage data from process "),
              Pervasives["prerr_int"](pid),
              Pervasives["prerr_endline"](""));
    };

var
 accept_connection=
  function($$continue,fd)
   {var match=Unix["accept"](fd[3]);
    
    var io_chan=Primitives["io_channel_of_descr"](match[1]);
    
    var pid=Pervasives["input_binary_int"](io_chan[1]);
    
    if(pid===-1)
     {var pid$prime=Pervasives["input_binary_int"](io_chan[1]);
      
      Time_travel["new_checkpoint"](pid$prime,io_chan);
      Input_handling["add_file"](io_chan,control_connection(pid$prime));
      return $$continue(/* () */0);
      }
    else
     {return Time_travel["set_file_descriptor"](pid,io_chan)
              ?Input_handling["add_file"](io_chan,control_connection(pid))
              :0;
      }
    };

var
 open_connection=
  function(address,$$continue)
   {try
     {var match=Unix_tools["convert_address"](address);
      
      var sock_address=match[2];
      
      var $js;
      switch(sock_address[0])
       {case 0:$js=/* Some */[0,sock_address[1]];case 1:$js=/* None */0;}
      file_name[1]=$js;
      var sock=Unix["socket"](match[1],/* SOCK_STREAM */0,0);
      
      try
       {Unix["bind"](sock,sock_address);
        Unix["setsockopt"](sock,/* SO_REUSEADDR */2,/* true */1);
        Unix["listen"](sock,3);
        Program_loading["connection"][1]=
        Primitives["io_channel_of_descr"](sock);
        Input_handling["add_file"]
         (Program_loading["connection"][1],accept_connection($$continue));
        return Program_loading["connection_opened"][1]=/* true */1,0;
        }
      catch(x){Unix["close"](sock);throw x;}
      }
    catch(err)
     {if(err[1]===CamlPrimitive["caml_global_data"]["Failure"])
       {throw Debugger_config["Toplevel"];}
      else
       {if(err[1]===Unix["Unix_error"])
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
     {Program_loading["connection_opened"][1]=/* false */0;
      Input_handling["remove_file"](Program_loading["connection"][1]);
      Primitives["close_io"](Program_loading["connection"][1]);
      var match=file_name[1];
      
      return match?Unix["unlink"](match[1]):/* () */0;
      }
    else
     {return 0;}
    };

var loaded=[0,/* false */0];

var
 kill_program=
  function(param)
   {Breakpoints["remove_all_breakpoints"](/* () */0);
    History["empty_history"](/* () */0);
    Time_travel["kill_all_checkpoints"](/* () */0);
    loaded[1]=/* false */0;
    return close_connection(/* () */0);
    };

var
 ask_kill_program=
  function(param)
   {if(!loaded[1])
     {return /* true */1;}
    else
     {var
       answer=
        Question["yes_or_no"]("A program is being debugged already. Kill it");
      
      if(answer){kill_program(/* () */0)}
      
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
        [/* Format */0,
         [/* String_literal */11,
          "\tProgram: [",
          [/* String */2,
           /* No_padding */0,
           [/* String_literal */11,"]\n",[/* Flush */10,/* End_of_format */0]]]],
         "\tProgram: [%s]\n%!"],
        Parameters["program_name"][1])}
    
    try
     {Unix["access"]
       (Parameters["program_name"][1],[/* :: */0,/* F_OK */3,/* [] */0])}
    catch(exn)
     {if(exn[1]===Unix["Unix_error"])
       {Pervasives["prerr_endline"]("Program not found.");
        throw Debugger_config["Toplevel"];
        }
      else
       {throw exn;}
      }
    
    Symbols["read_symbols"](Parameters["program_name"][1]);
    Config["load_path"][1]=
    Pervasives["@"](Config["load_path"][1],Symbols["program_source_dirs"][1]);
    Envaux["reset_cache"](/* () */0);
    if(Program_loading["debug_loading"][1])
     {Pervasives["prerr_endline"]("Opening a socket...")}
    
    return open_connection
            (Parameters["socket_name"][1],
             function(param$1)
              {Time_travel["go_to"](Int64ops["_0"]);
               Symbols["set_all_events"](/* () */0);
               return Input_handling["exit_main_loop"](/* () */0);
               });
    };

var
 ensure_loaded=
  function(param)
   {if(!loaded[1])
     {Pervasives["print_string"]("Loading program... ");
      Pervasives["flush"](Pervasives["stdout"]);
      if(CamlPrimitive["caml_string_equal"](Parameters["program_name"][1],""))
       {Pervasives["prerr_endline"]("No program specified.");
        throw Debugger_config["Toplevel"];
        }
      else
       {}
      
      try
       {initialize_loading(/* () */0);
        Program_loading["launching_func"][1](/* () */0);
        if(Program_loading["debug_loading"][1])
         {Pervasives["prerr_endline"]("Waiting for connection...")}
        
        Input_handling["main_loop"](/* () */0);
        loaded[1]=/* true */1;
        return Pervasives["prerr_endline"]("done.");
        }
      catch(x){kill_program(/* () */0);throw x;}
      }
    else
     {return 0;}
    };

module["exports"]=
{"loaded":loaded,
 "ensure_loaded":ensure_loaded,
 "kill_program":kill_program,
 "ask_kill_program":ask_kill_program};

