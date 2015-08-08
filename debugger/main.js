// Generated CODE, PLEASE EDIT WITH CARE 

var Question=require("Question");
var Show_information=require("Show_information");
var Frames=require("Frames");
var Program_management=require("Program_management");
var Cmi_format=require("Cmi_format");
var Command_line=require("Command_line");
var Pervasives=require("Pervasives");
var Arg=require("Arg");
var Env=require("Env");
var Clflags=require("Clflags");
var Checkpoints=require("Checkpoints");
var Callback=require("Callback");
var Format=require("Format");
var Primitives=require("Primitives");
var Misc=require("Misc");
var Unix_tools=require("Unix_tools");
var Unix=require("Unix");
var Lexing=require("Lexing");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Parameters=require("Parameters");
var Debugger_config=require("Debugger_config");
var Exec=require("Exec");
var Printexc=require("Printexc");
var Input_handling=require("Input_handling");
var Time_travel=require("Time_travel");
var Config=require("Config");
var Sys=require("Sys");


var line_buffer=Lexing["from_function"](Input_handling["read_user_input"]);

var loop=function(ppf){return Command_line["line_loop"](ppf,line_buffer);};

var current_duration=[0,-1];

var
 protect=
  function(ppf,restart,loop$1)
   {try
     {return loop$1(ppf);}
    catch(x)
     {if(x=End_of_file)
       {return protect
                (ppf,
                 restart,
                 function(ppf$1)
                  {Time_travel["forget_process"]
                    (Checkpoints["current_checkpoint"][1][3],
                     Checkpoints["current_checkpoint"][1][2]);
                   Format["pp_print_flush"](ppf$1,0);
                   Input_handling["stop_user_input"](0);
                   return restart(ppf$1);
                   });
        }
      else
       {if(x=Debugger_config["Toplevel"])
         {return protect
                  (ppf,
                   restart,
                   function(ppf$1)
                    {Format["pp_print_flush"](ppf$1,0);
                     Input_handling["stop_user_input"](0);
                     return restart(ppf$1);
                     });
          }
        else
         {if(x=Sys["Break"])
           {return protect
                    (ppf,
                     restart,
                     function(ppf$1)
                      {Format["fprintf"]
                        (ppf$1,[0,[11,"Interrupted.",[17,4,0]],"Interrupted.@."]);
                       Exec["protect"]
                        (function(param)
                          {Input_handling["stop_user_input"](0);
                           if(Program_management["loaded"][1])
                            {Frames["try_select_frame"](0);
                             return Show_information["show_current_event"](ppf$1);
                             }
                           else
                            {return 0;}
                           });
                       return restart(ppf$1);
                       });
            }
          else
           {if(x=Time_travel["Current_checkpoint_lost"])
             {return protect
                      (ppf,
                       restart,
                       function(ppf$1)
                        {Format["fprintf"]
                          (ppf$1,
                           [0,
                            [11,"Trying to recover...",[17,4,0]],
                            "Trying to recover...@."]);
                         Input_handling["stop_user_input"](0);
                         Time_travel["recover"](0);
                         Frames["try_select_frame"](0);
                         Show_information["show_current_event"](ppf$1);
                         return restart(ppf$1);
                         });
              }
            else
             {if(x[1]=Time_travel["Current_checkpoint_lost_start_at"])
               {var init_duration=x[3];
                
                var time=x[2];
                
                return protect
                        (ppf,
                         restart,
                         function(ppf$1)
                          {if(current_duration[1]=-1)
                            {var
                              msg=
                               Format["sprintf"]
                                ([0,
                                  [11,
                                   "Restart from time ",
                                   [7,0,0,0,[11," and try to get closer of the problem",0]]],
                                  "Restart from time %Ld and try to get closer of the problem"],
                                 time);
                             
                             Input_handling["stop_user_input"](0);
                             if(Question["yes_or_no"](msg))
                              {current_duration[1]=init_duration,0;var b=1;}
                             else
                              {var b=0;}
                             }
                           else
                            {var b=1;}
                           
                           if(b)
                            {Time_travel["go_to"](time);
                             current_duration[1]=current_duration[1]/10,0;
                             if(current_duration[1]>0)
                              {while(1){Time_travel["step"](current_duration[1])}
                               return 0;
                               }
                             else
                              {current_duration[1]=-1,0;
                               Input_handling["stop_user_input"](0);
                               Show_information["show_current_event"](ppf$1);
                               return restart(ppf$1);
                               }
                             }
                           else
                            {Time_travel["recover"](0);
                             Show_information["show_current_event"](ppf$1);
                             return restart(ppf$1);
                             }
                           });
                }
              else
               {Program_management["kill_program"](0);throw x;}
              }
            }
          }
        }
      }
    };

var
 execute_file_if_any=
  function(param)
   {var buffer=Buffer["create"](128);
    
    try
     {var base=".ocamldebug";
      
      if("unknown primitive:caml_sys_file_exists")
       {var file=base;}
      else
       {var file=Filename["concat"]("unknown primitive:caml_sys_getenv",base);
        }
      
      var ch=Pervasives["open_in"](file);
      
      Format["fprintf"]
       (Format["std_formatter"],
        [0,[11,"Executing file ",[2,0,[17,4,0]]],"Executing file %s@."],
        file);
      while(1)
       {var line=Primitives["string_trim"](Pervasives["input_line"](ch));
        
        if("unknown primitive:caml_string_notequal"&&line[0]!=35)
         {Buffer["add_string"](buffer,line),Buffer["add_char"](buffer,10)}
        else
         {}
        }
      }
    catch(exn){}
    
    var len=Buffer["length"](buffer);
    
    if(len>0)
     {var commands=Buffer["sub"](buffer,0,-1+len);
      
      return Command_line["line_loop"]
              (Format["std_formatter"],Lexing["from_string"](commands));
      }
    else
     {return 0;}
    };

var
 toplevel_loop=
  function(param)
   {Input_handling["interactif"][1]=0,0;
    Input_handling["current_prompt"][1]="",0;
    execute_file_if_any(0);
    Input_handling["interactif"][1]=1,0;
    Input_handling["current_prompt"][1]=Debugger_config["debugger_prompt"],0;
    return protect(Format["std_formatter"],loop,loop);
    };

var Found_program_name="unknown primitive:caml_set_oo_id";

var
 anonymous=
  function(s)
   {Parameters["program_name"][1]=Unix_tools["make_absolute"](s),0;
    throw Found_program_name;
    };

var
 add_include=
  function(d)
   {return Parameters["default_load_path"][1]=
           [/* :: */0,
            Misc["expand_directory"](Config["standard_library"],d),
            Parameters["default_load_path"][1]],
           0;
    };

var set_socket=function(s){return Parameters["socket_name"][1]=s,0;};

var
 set_checkpoints=
  function(n){return Debugger_config["checkpoint_max_count"][1]=n,0;};

var set_directory=function(dir){return "unknown primitive:caml_sys_chdir";};

var
 print_version=
  function(param)
   {Format["printf"]
     ([0,
       [11,"The OCaml debugger, version ",[2,0,[17,4,0]]],
       "The OCaml debugger, version %s@."],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Format["printf"]([0,[2,0,[17,4,0]],"%s@."],Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 speclist=
  [/* :: */0,
   [/* tuple */0,
    "-c",
    [/* Int */6,set_checkpoints],
    "<count>  Set max number of checkpoints kept"],
   [/* :: */0,
    [/* tuple */0,
     "-cd",
     [/* String */4,set_directory],
     "<dir>  Change working directory"],
    [/* :: */0,
     [/* tuple */0,
      "-emacs",
      [/* Tuple */10,
       [/* :: */0,
        [/* Set */2,Parameters["emacs"]],
        [/* :: */0,[/* Set */2,Parameters["machine_readable"]],0]]],
      "For running the debugger under emacs; implies -machine-readable"],
     [/* :: */0,
      [/* tuple */0,
       "-I",
       [/* String */4,add_include],
       "<dir>  Add <dir> to the list of include directories"],
      [/* :: */0,
       [/* tuple */0,
        "-machine-readable",
        [/* Set */2,Parameters["machine_readable"]],
        "Print information in a format more suitable for machines"],
       [/* :: */0,
        [/* tuple */0,
         "-s",
         [/* String */4,set_socket],
         "<filename>  Set the name of the communication socket"],
        [/* :: */0,
         [/* tuple */0,
          "-version",
          [/* Unit */0,print_version],
          " Print version and exit"],
         [/* :: */0,
          [/* tuple */0,
           "-vnum",
           [/* Unit */0,print_version_num],
           " Print version number and exit"],
          0]]]]]]]];

var function_placeholder=function(param){throw Not_found;};

var
 main=
  function(param)
   {Callback["register"]("Debugger.function_placeholder",function_placeholder);
    try
     {var match=Sys["os_type"];
      
      switch(match)
       {case "Win32":
         var
          $js=
           Pervasives["^"]
            (Unix["string_of_inet_addr"](Unix["inet_addr_loopback"]),
             Pervasives["^"]
              (":",Pervasives["string_of_int"](1e4+Unix["getpid"](0)%1e4)));
         
        default:
         var
          $js=
           Filename["concat"]
            (Filename["get_temp_dir_name"](0),
             Pervasives["^"]
              ("camldebug",Pervasives["string_of_int"](Unix["getpid"](0))));
         }
      Parameters["socket_name"][1]=$js,0;
      try
       {Arg["parse"](speclist,anonymous,""),
        Arg["usage"]
         (speclist,
          "No program name specified\nUsage: ocamldebug [options] <program> [arguments]\nOptions are:"),
        Pervasives["exit"](2)}
      catch(exn)
       {if(exn=Found_program_name)
         {for(var j=Arg["current"][1]+1;j<=Sys["argv"]["length"]-1;j++)
           {Parameters["arguments"][1]=
            Pervasives["^"]
             (Parameters["arguments"][1],
              Pervasives["^"](" ",Filename["quote"](Sys["argv"][j]))),
            0}
          }
        else
         {throw exn;}
        }
      
      Format["printf"]
       ([0,
         [11,"\tOCaml Debugger version ",[2,0,[17,4,[17,4,0]]]],
         "\tOCaml Debugger version %s@.@."],
        Config["version"]);
      Config["load_path"][1]=Parameters["default_load_path"][1],0;
      Clflags["recursive_types"][1]=1,0;
      toplevel_loop(0);
      Program_management["kill_program"](0);
      return Pervasives["exit"](0);
      }
    catch(exn$1)
     {if(exn$1=Debugger_config["Toplevel"])
       {return Pervasives["exit"](2);}
      else
       {if(exn$1[1]=Env["Error"])
         {Format["eprintf"]
           ([0,
             [11,
              "Debugger [version ",
              [2,
               0,
               [11,
                "] environment error:",
                [17,[0,"@ ",1,0],[18,[1,[0,0,""]],[17,[0,"@;",1,0],0]]]]]],
             "Debugger [version %s] environment error:@ @[@;"],
            Config["version"]);
          Env["report_error"](Format["err_formatter"],exn$1[2]);
          Format["eprintf"]([0,[17,0,[17,4,0]],"@]@."]);
          return Pervasives["exit"](2);
          }
        else
         {if(exn$1[1]=Cmi_format["Error"])
           {Format["eprintf"]
             ([0,
               [11,
                "Debugger [version ",
                [2,
                 0,
                 [11,
                  "] environment error:",
                  [17,[0,"@ ",1,0],[18,[1,[0,0,""]],[17,[0,"@;",1,0],0]]]]]],
               "Debugger [version %s] environment error:@ @[@;"],
              Config["version"]);
            Cmi_format["report_error"](Format["err_formatter"],exn$1[2]);
            Format["eprintf"]([0,[17,0,[17,4,0]],"@]@."]);
            return Pervasives["exit"](2);
            }
          else
           {throw exn$1;}
          }
        }
      }
    };

Printexc["catch"](Unix["handle_unix_error"](main),0);
module["exports"]=
{"line_buffer":line_buffer,
 "loop":loop,
 "current_duration":current_duration,
 "protect":protect,
 "execute_file_if_any":execute_file_if_any,
 "toplevel_loop":toplevel_loop,
 "Found_program_name":Found_program_name,
 "anonymous":anonymous,
 "add_include":add_include,
 "set_socket":set_socket,
 "set_checkpoints":set_checkpoints,
 "set_directory":set_directory,
 "print_version":print_version,
 "print_version_num":print_version_num,
 "speclist":speclist,
 "function_placeholder":function_placeholder,
 "main":main};

