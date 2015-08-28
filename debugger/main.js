// Generated CODE, PLEASE EDIT WITH CARE 

var Question=require("./question.js");
var Show_information=require("./show_information.js");
var Frames=require("./frames.js");
var Program_management=require("./program_management.js");
var Cmi_format=require("./cmi_format.js");
var Command_line=require("./command_line.js");
var Pervasives=require("./pervasives.js");
var Arg=require("./arg.js");
var Env=require("./env.js");
var Clflags=require("./clflags.js");
var Checkpoints=require("./checkpoints.js");
var Callback=require("./callback.js");
var Format=require("./format.js");
var Primitives=require("./primitives.js");
var Misc=require("./misc.js");
var Unix_tools=require("./unix_tools.js");
var Unix=require("./unix.js");
var Lexing=require("./lexing.js");
var Buffer=require("./buffer.js");
var Filename=require("./filename.js");
var Parameters=require("./parameters.js");
var Debugger_config=require("./debugger_config.js");
var Exec=require("./exec.js");
var Printexc=require("./printexc.js");
var Input_handling=require("./input_handling.js");
var Time_travel=require("./time_travel.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var line_buffer=Lexing["from_function"](Input_handling["read_user_input"]);

var loop=function(ppf){return Command_line["line_loop"](ppf,line_buffer)};

var current_duration=[0,-1];

var
 protect=
  function(ppf,restart,loop)
   {try
     {return loop(ppf)}
    catch(x)
     {if(x===CamlPrimitive["caml_global_data"]["End_of_file"])
       {return protect
                (ppf,
                 restart,
                 function(ppf)
                  {Time_travel["forget_process"]
                    (Checkpoints["current_checkpoint"][1][3],
                     Checkpoints["current_checkpoint"][1][2]);
                   Format["pp_print_flush"](ppf,/* () */0);
                   Input_handling["stop_user_input"](/* () */0);
                   return restart(ppf)})}
      else
       {if(x===Debugger_config["Toplevel"])
         {return protect
                  (ppf,
                   restart,
                   function(ppf)
                    {Format["pp_print_flush"](ppf,/* () */0);
                     Input_handling["stop_user_input"](/* () */0);
                     return restart(ppf)})}
        else
         {if(x===Sys["Break"])
           {return protect
                    (ppf,
                     restart,
                     function(ppf)
                      {Format["fprintf"]
                        (ppf,
                         [/* Format */0,
                          [/* String_literal */11,
                           "Interrupted.",
                           [/* Formatting_lit */17,
                            /* Flush_newline */4,
                            /* End_of_format */0]],
                          "Interrupted.@."]);
                       Exec["protect"]
                        (function(param)
                          {Input_handling["stop_user_input"](/* () */0);
                           return Program_management["loaded"][1]
                                   ?(Frames["try_select_frame"](0),
                                     Show_information["show_current_event"](ppf))
                                   :0});
                       return restart(ppf)})}
          else
           {if(x===Time_travel["Current_checkpoint_lost"])
             {return protect
                      (ppf,
                       restart,
                       function(ppf)
                        {Format["fprintf"]
                          (ppf,
                           [/* Format */0,
                            [/* String_literal */11,
                             "Trying to recover...",
                             [/* Formatting_lit */17,
                              /* Flush_newline */4,
                              /* End_of_format */0]],
                            "Trying to recover...@."]);
                         Input_handling["stop_user_input"](/* () */0);
                         Time_travel["recover"](/* () */0);
                         Frames["try_select_frame"](0);
                         Show_information["show_current_event"](ppf);
                         return restart(ppf)})}
            else
             {if(x[1]===Time_travel["Current_checkpoint_lost_start_at"])
               {var init_duration=x[3];
                
                var time=x[2];
                
                return protect
                        (ppf,
                         restart,
                         function(ppf)
                          {var b;
                           if(current_duration[1]===-1)
                            {var
                              msg=
                               Format["sprintf"]
                                ([/* Format */0,
                                  [/* String_literal */11,
                                   "Restart from time ",
                                   [/* Int64 */7,
                                    /* Int_d */0,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    [/* String_literal */11,
                                     " and try to get closer of the problem",
                                     /* End_of_format */0]]],
                                  "Restart from time %Ld and try to get closer of the problem"],
                                 time);
                             
                             Input_handling["stop_user_input"](/* () */0);
                             b=
                             Question["yes_or_no"](msg)
                              ?(current_duration[1]=init_duration,/* true */1)
                              :/* false */0;
                             }
                           else
                            {b=/* true */1;}
                           
                           if(b)
                            {Time_travel["go_to"](time);
                             current_duration[1]=current_duration[1]/10;
                             if(current_duration[1]>0)
                              {while(/* true */1)
                                {Time_travel["step"](current_duration[1])}
                               return 0}
                             else
                              {current_duration[1]=-1;
                               Input_handling["stop_user_input"](/* () */0);
                               Show_information["show_current_event"](ppf);
                               return restart(ppf)}
                             }
                           else
                            {Time_travel["recover"](/* () */0);
                             Show_information["show_current_event"](ppf);
                             return restart(ppf)}
                           })}
              else
               {Program_management["kill_program"](/* () */0);throw x}
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
      
      var
       file=
        CamlPrimitive["caml_sys_file_exists"](base)
         ?base
         :Filename["concat"](CamlPrimitive["caml_sys_getenv"]("HOME"),base);
      
      var ch=Pervasives["open_in"](file);
      
      Format["fprintf"]
       (Format["std_formatter"],
        [/* Format */0,
         [/* String_literal */11,
          "Executing file ",
          [/* String */2,
           /* No_padding */0,
           [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]],
         "Executing file %s@."],
        file);
      while(/* true */1)
       {var line=Primitives["string_trim"](Pervasives["input_line"](ch));
        
        if
         (CamlPrimitive["caml_string_notequal"](line,"")&&
          line["charCodeAt"](0)!==
          35)
         {Buffer["add_string"](buffer,line),Buffer["add_char"](buffer,10)}
        }
      }
    catch(exn){}
    
    var len=Buffer["length"](buffer);
    
    if(len>0)
     {var commands=Buffer["sub"](buffer,0,-1+len);
      
      return Command_line["line_loop"]
              (Format["std_formatter"],Lexing["from_string"](commands))}
    else
     {return 0}
    };

var
 toplevel_loop=
  function(param)
   {Input_handling["interactif"][1]=/* false */0;
    Input_handling["current_prompt"][1]="";
    execute_file_if_any(/* () */0);
    Input_handling["interactif"][1]=/* true */1;
    Input_handling["current_prompt"][1]=Debugger_config["debugger_prompt"];
    return protect(Format["std_formatter"],loop,loop)};

var
 Found_program_name=
  CamlPrimitive["caml_set_oo_id"]([248,"Main.Found_program_name",0]);

var
 anonymous=
  function(s)
   {Parameters["program_name"][1]=Unix_tools["make_absolute"](s);
    throw Found_program_name};

var
 add_include=
  function(d)
   {return Parameters["default_load_path"][1]=
           /* :: */[0,
            Misc["expand_directory"](Config["standard_library"],d),
            Parameters["default_load_path"][1]],
           0};

var set_socket=function(s){return Parameters["socket_name"][1]=s,0};

var
 set_checkpoints=
  function(n){return Debugger_config["checkpoint_max_count"][1]=n,0};

var set_directory=function(dir){return CamlPrimitive["caml_sys_chdir"](dir)};

var
 print_version=
  function(param)
   {Format["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "The OCaml debugger, version ",
        [/* String */2,
         /* No_padding */0,
         [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]],
       "The OCaml debugger, version %s@."],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0)};

var
 print_version_num=
  function(param)
   {Format["printf"]
     ([/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
       "%s@."],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0)};

var
 speclist=
  /* :: */[0,
   /* tuple */[0,
    "-c",
    /* Int */[6,set_checkpoints],
    "<count>  Set max number of checkpoints kept"],
   /* :: */[0,
    /* tuple */[0,
     "-cd",
     /* String */[4,set_directory],
     "<dir>  Change working directory"],
    /* :: */[0,
     /* tuple */[0,
      "-emacs",
      /* Tuple */[10,
       /* :: */[0,
        /* Set */[2,Parameters["emacs"]],
        /* :: */[0,/* Set */[2,Parameters["machine_readable"]],/* [] */0]]],
      "For running the debugger under emacs; implies -machine-readable"],
     /* :: */[0,
      /* tuple */[0,
       "-I",
       /* String */[4,add_include],
       "<dir>  Add <dir> to the list of include directories"],
      /* :: */[0,
       /* tuple */[0,
        "-machine-readable",
        /* Set */[2,Parameters["machine_readable"]],
        "Print information in a format more suitable for machines"],
       /* :: */[0,
        /* tuple */[0,
         "-s",
         /* String */[4,set_socket],
         "<filename>  Set the name of the communication socket"],
        /* :: */[0,
         /* tuple */[0,
          "-version",
          /* Unit */[0,print_version],
          " Print version and exit"],
         /* :: */[0,
          /* tuple */[0,
           "-vnum",
           /* Unit */[0,print_version_num],
           " Print version number and exit"],
          /* [] */0]]]]]]]];

var
 function_placeholder=
  function(param){throw CamlPrimitive["caml_global_data"]["Not_found"]};

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
              (":",
               Pervasives["string_of_int"](1e4+Unix["getpid"](/* () */0)%1e4)));
         break;
        default:
         var
          $js=
           Filename["concat"]
            (Filename["get_temp_dir_name"](/* () */0),
             Pervasives["^"]
              ("camldebug",
               Pervasives["string_of_int"](Unix["getpid"](/* () */0))));
         }
      Parameters["socket_name"][1]=$js;
      try
       {Arg["parse"](speclist,anonymous,""),
        Arg["usage"]
         (speclist,
          "No program name specified\nUsage: ocamldebug [options] <program> [arguments]\nOptions are:"),
        Pervasives["exit"](2)}
      catch(exn)
       {if(exn===Found_program_name)
         {for
           (var j=Arg["current"][1]+1;
            j<=
            /* -1 for tag */Sys["argv"]["length"]-
            1-
            1;
            j++)
           {Parameters["arguments"][1]=
            Pervasives["^"]
             (Parameters["arguments"][1],
              Pervasives["^"](" ",Filename["quote"](Sys["argv"][j+1])))}
          }
        else
         {throw exn}
        }
      
      Format["printf"]
       ([/* Format */0,
         [/* String_literal */11,
          "\tOCaml Debugger version ",
          [/* String */2,
           /* No_padding */0,
           [/* Formatting_lit */17,
            /* Flush_newline */4,
            [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]]],
         "\tOCaml Debugger version %s@.@."],
        Config["version"]);
      Config["load_path"][1]=Parameters["default_load_path"][1];
      Clflags["recursive_types"][1]=/* true */1;
      toplevel_loop(/* () */0);
      Program_management["kill_program"](/* () */0);
      return Pervasives["exit"](0)}
    catch(exn$1)
     {if(exn$1===Debugger_config["Toplevel"])
       {return Pervasives["exit"](2)}
      else
       {if(exn$1[1]===Env["Error"])
         {Format["eprintf"]
           ([/* Format */0,
             [/* String_literal */11,
              "Debugger [version ",
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                "] environment error:",
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* Formatting_gen */18,
                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                  [/* Formatting_lit */17,
                   [/* Break */0,"@;",1,0],
                   /* End_of_format */0]]]]]],
             "Debugger [version %s] environment error:@ @[@;"],
            Config["version"]);
          Env["report_error"](Format["err_formatter"],exn$1[2]);
          Format["eprintf"]
           ([/* Format */0,
             [/* Formatting_lit */17,
              /* Close_box */0,
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]],
             "@]@."]);
          return Pervasives["exit"](2)}
        else
         {if(exn$1[1]===Cmi_format["Error"])
           {Format["eprintf"]
             ([/* Format */0,
               [/* String_literal */11,
                "Debugger [version ",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,
                  "] environment error:",
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* Formatting_lit */17,
                     [/* Break */0,"@;",1,0],
                     /* End_of_format */0]]]]]],
               "Debugger [version %s] environment error:@ @[@;"],
              Config["version"]);
            Cmi_format["report_error"](Format["err_formatter"],exn$1[2]);
            Format["eprintf"]
             ([/* Format */0,
               [/* Formatting_lit */17,
                /* Close_box */0,
                [/* Formatting_lit */17,
                 /* Flush_newline */4,
                 /* End_of_format */0]],
               "@]@."]);
            return Pervasives["exit"](2)}
          else
           {throw exn$1}
          }
        }
      }
    };

Printexc["catch"](Unix["handle_unix_error"](main),/* () */0);
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

