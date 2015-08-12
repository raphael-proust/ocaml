// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Primitives=require("Primitives");
var Unix=require("Unix");
var Unix_tools=require("Unix_tools");
var Filename=require("Filename");
var Buffer=require("Buffer");
var Parameters=require("Parameters");
var Debugger_config=require("Debugger_config");
var Input_handling=require("Input_handling");
var Sys=require("Sys");


var debug_loading=[0,/* false */0];

var launching_func=[0,function(param){return /* () */0;}];

var
 load_program=
  function(param)
   {launching_func[1](/* () */0);
    return Input_handling["main_loop"](/* () */0);
    };

var
 get_unix_environment=
  function(param)
   {var
     f=
      function(param$1)
       {return Printf["sprintf"]
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,
                    61,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,32,/* End_of_format */0]]]],
                  "%s=%s "],
                 param$1[1],
                 Filename["quote"](param$1[2]));
        };
    
    return $$String["concat"]
            ("",List["map"](f,Debugger_config["environment"][1]));
    };

var
 quote_for_windows_shell=
  function(s)
   {var b=Buffer["create"](20+s["length"]);
    
    for(var i=0;i<=s["length"]-1;i++)
     {var match=s[i];
      
      var exit;
      
      if(match>=61)
       {var switcher=-62+match;
        
        if(!(32<switcher>>>0))
         {if(30<-1+switcher>>>0){exit=24;}else{exit=25;}}
        else
         {if(switcher!=62){exit=25;}else{exit=24;}}
        }
      else
       {var switcher$1=-35+match;
        
        if(24<switcher$1>>>0)
         {if(switcher$1>=-1){exit=24;}else{exit=25;}}
        else
         {if(switcher$1!=3){exit=25;}else{exit=24;}}
        }
      
      switch(exit){case 25:case 24:Buffer["add_char"](b,94)}
      
      Buffer["add_char"](b,s[i])}
    
    return Buffer["contents"](b);
    };

var
 get_win32_environment=
  function(param)
   {var
     f=
      function(param$1)
       {return Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "set ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,
                     61,
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,38,/* End_of_format */0]]]]],
                  "set %s=%s&"],
                 param$1[1],
                 quote_for_windows_shell(param$1[2]));
        };
    
    return $$String["concat"]
            ("",List["map"](f,Debugger_config["environment"][1]));
    };

var
 generic_exec_unix=
  function(cmdline,param)
   {if(debug_loading[1])
     {Pervasives["prerr_endline"]("Launching program...")}
    else
     {}
    
    try
     {var child=Unix["fork"](/* () */0);}
    catch(x){Unix_tools["report_error"](x);throw Debugger_config["Toplevel"];}
    
    if(child!=0)
     {var match=Unix["wait"](/* () */0);
      
      var match$1=match[2];
      
      var exit;
      
      switch(match$1[0])
       {case 0:if(match$1[1]!=0){exit=17;}else{return /* () */0;}
        case 1:exit=17;
        case 2:exit=17;
        }
      
      switch(exit){case 17:throw Debugger_config["Toplevel"];}
      }
    else
     {try
       {var match$2=Unix["fork"](/* () */0);
        
        if(match$2!=0)
         {return Pervasives["exit"](0);}
        else
         {try
           {Unix["setsid"](/* () */0)}
          catch(exn){if(exn[1]=Invalid_argument){}else{throw exn;}}
          
          return Unix["execv"]
                  (Debugger_config["shell"],
                   [Debugger_config["shell"],"-c",cmdline(/* () */0)]);
          }
        }
      catch(x$1)
       {Unix_tools["report_error"](x$1);return Pervasives["exit"](1);}
      }
    };

var
 generic_exec_win=
  function(cmdline,param)
   {if(debug_loading[1])
     {Pervasives["prerr_endline"]("Launching program...")}
    else
     {}
    
    try
     {return Unix["create_process"]
              ("cmd.exe",
               ["/C",cmdline(/* () */0)],
               Unix["stdin"],
               Unix["stdout"],
               Unix["stderr"]);
      }
    catch(x){Unix_tools["report_error"](x);throw Debugger_config["Toplevel"];}
    };

var match=Sys["os_type"];

switch(match)
 {case "Win32":var generic_exec=generic_exec_win;
  default:var generic_exec=generic_exec_unix;}

var
 exec_with_runtime=
  generic_exec
   (function(param)
     {var match$1=Sys["os_type"];
      
      switch(match$1)
       {case "Win32":
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     "set CAML_DEBUG_SOCKET=",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       "& ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,
                          /* No_padding */0,
                          [/* Char_literal */12,
                           32,
                           [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]],
                   "%sset CAML_DEBUG_SOCKET=%s& %s %s %s"],
                  get_win32_environment(/* () */0),
                  Parameters["socket_name"][1],
                  Debugger_config["runtime_program"],
                  Parameters["program_name"][1],
                  Parameters["arguments"][1]);
         
        default:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     "CAML_DEBUG_SOCKET=",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,
                          /* No_padding */0,
                          [/* Char_literal */12,
                           32,
                           [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]],
                   "%sCAML_DEBUG_SOCKET=%s %s %s %s"],
                  get_unix_environment(/* () */0),
                  Parameters["socket_name"][1],
                  Filename["quote"](Debugger_config["runtime_program"]),
                  Filename["quote"](Parameters["program_name"][1]),
                  Parameters["arguments"][1]);
         }
      });

var
 exec_direct=
  generic_exec
   (function(param)
     {var match$1=Sys["os_type"];
      
      switch(match$1)
       {case "Win32":
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     "set CAML_DEBUG_SOCKET=",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       "& ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]],
                   "%sset CAML_DEBUG_SOCKET=%s& %s %s"],
                  get_win32_environment(/* () */0),
                  Parameters["socket_name"][1],
                  Parameters["program_name"][1],
                  Parameters["arguments"][1]);
         
        default:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     "CAML_DEBUG_SOCKET=",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]],
                   "%sCAML_DEBUG_SOCKET=%s %s %s"],
                  get_unix_environment(/* () */0),
                  Parameters["socket_name"][1],
                  Filename["quote"](Parameters["program_name"][1]),
                  Parameters["arguments"][1]);
         }
      });

var
 exec_manual=
  function(param)
   {Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]("Waiting for connection...");
    Pervasives["print_string"]
     (Pervasives["^"]
       ("(the socket is ",Pervasives["^"](Parameters["socket_name"][1],")")));
    return Pervasives["print_newline"](/* () */0);
    };

var
 loading_modes=
  /* :: */[0,
   /* tuple */[0,"direct",exec_direct],
   /* :: */[0,
    /* tuple */[0,"runtime",exec_with_runtime],
    /* :: */[0,/* tuple */[0,"manual",exec_manual],/* [] */0]]];

var set_launching_function=function(func){return launching_func[1]=func,0;};

set_launching_function(exec_direct);
var connection=[0,Primitives["std_io"]];

var connection_opened=[0,/* false */0];

module["exports"]=
{"debug_loading":debug_loading,
 "launching_func":launching_func,
 "load_program":load_program,
 "loading_modes":loading_modes,
 "set_launching_function":set_launching_function,
 "connection":connection,
 "connection_opened":connection_opened};

