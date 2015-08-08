// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Ctype=require("Ctype");
var Question=require("Question");
var Parser=require("Parser");
var Show_information=require("Show_information");
var Frames=require("Frames");
var History=require("History");
var Program_management=require("Program_management");
var Breakpoints=require("Breakpoints");
var Pervasives=require("Pervasives");
var List=require("List");
var Env=require("Env");
var Symbols=require("Symbols");
var Printf=require("Printf");
var Events=require("Events");
var Checkpoints=require("Checkpoints");
var Envaux=require("Envaux");
var Format=require("Format");
var Program_loading=require("Program_loading");
var Printval=require("Printval");
var Primitives=require("Primitives");
var Misc=require("Misc");
var Lexer=require("Lexer");
var Unix_tools=require("Unix_tools");
var Unix=require("Unix");
var Filename=require("Filename");
var Lexing=require("Lexing");
var Parsing=require("Parsing");
var Parameters=require("Parameters");
var Eval=require("Eval");
var Debugger_config=require("Debugger_config");
var Pos=require("Pos");
var Longident=require("Longident");
var Show_source=require("Show_source");
var Int64ops=require("Int64ops");
var Source=require("Source");
var Loadprinter=require("Loadprinter");
var Hashtbl=require("Hashtbl");
var Input_handling=require("Input_handling");
var Time_travel=require("Time_travel");
var Config=require("Config");
var Sys=require("Sys");
var Debugcom=require("Debugcom");


var instruction_list=[0,0];

var variable_list=[0,0];

var info_list=[0,0];

var
 error=
  function(text)
   {Format["eprintf"]([0,[2,0,[17,4,0]],"%s@."],text);
    throw Debugger_config["Toplevel"];
    };

var
 check_not_windows=
  function(feature)
   {var match=Sys["os_type"];
    
    switch(match)
     {case "Win32":
       return error
               (Pervasives["^"]
                 ("'",
                  Pervasives["^"]
                   (feature,"' feature not supported on Windows")));
       
      default:return 0;}
    };

var eol=Parser["end_of_line"](Lexer["lexeme"]);

var
 matching_elements=
  function(list,name,instr)
   {return List["filter"]
            (function(a){return Primitives["isprefix"](instr,name(a));},
             list[1]);
    };

var
 all_matching_instructions=
  matching_elements(instruction_list,function(i){return i[1];});

var
 matching_instructions=
  function(instr)
   {var all=all_matching_instructions(instr);
    
    var prio=List["filter"](function(i){return i[2];},all);
    
    if(prio=0){return all;}else{return prio;}
    };

var
 matching_variables=
  matching_elements(variable_list,function(v){return v[1];});

var matching_infos=matching_elements(info_list,function(i){return i[1];});

var
 find_ident=
  function(name,matcher,action,alternative,ppf,lexbuf)
   {var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
    
    if(match)
     {var match$1=matcher(match[1]);
      
      if(match$1)
       {if(match$1[2])
         {return error
                  (Pervasives["^"]("Ambiguous ",Pervasives["^"](name,".")));
          }
        else
         {return action(match$1[1],ppf,lexbuf);}
        }
      else
       {return error(Pervasives["^"]("Unknown ",Pervasives["^"](name,".")));}
      }
    else
     {return alternative(ppf);}
    };

var
 find_variable=
  function(action,alternative,ppf,lexbuf)
   {return find_ident
            ("variable name",matching_variables,action,alternative,ppf,lexbuf);
    };

var
 find_info=
  function(action,alternative,ppf,lexbuf)
   {return find_ident
            ("info command",matching_infos,action,alternative,ppf,lexbuf);
    };

var
 add_breakpoint_at_pc=
  function(pc)
   {try
     {return Breakpoints["new_breakpoint"](Symbols["any_event_at_pc"](pc));}
    catch(exn)
     {if(exn=Not_found)
       {Format["eprintf"]
         ([0,
           [11,
            "Can't add breakpoint at pc ",
            [4,3,0,0,[11,": no event there.",[17,4,0]]]],
           "Can't add breakpoint at pc %i: no event there.@."],
          pc);
        throw Debugger_config["Toplevel"];
        }
      else
       {throw exn;}
      }
    };

var
 add_breakpoint_after_pc=
  function(pc)
   {var
     try_add=
      function(n)
       {if(n<3)
         {try
           {return Breakpoints["new_breakpoint"]
                    (Symbols["any_event_at_pc"](pc+n*4));
            }
          catch(exn){if(exn=Not_found){return try_add(n+1);}else{throw exn;}}
          }
        else
         {return error
                  ("Can't add breakpoint at beginning of function: no event there");
          }
        };
    
    return try_add(0);
    };

var
 module_of_longident=
  function(id)
   {if(id)
     {return [/* Some */0,$$String["concat"](".",Longident["flatten"](id[1]))];
      }
    else
     {return 0;}
    };

var
 convert_module=
  function(mdle)
   {if(mdle)
     {var m=mdle[1];
      
      return $$String["capitalize"]
              (Filename["check_suffix"](m,".ml")
                ?Filename["chop_suffix"](m,".ml")
                :m);
      }
    else
     {try
       {return Events["get_current_event"](0)[2];}
      catch(exn)
       {if(exn=Not_found){return error("Not in a module.");}else{throw exn;}}
      }
    };

var current_line=[0,""];

var
 interprete_line=
  function(ppf,line)
   {current_line[1]=line,0;
    var lexbuf=Lexing["from_string"](line);
    
    try
     {var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
      
      if(match)
       {var l=matching_instructions(match[1]);
        
        if(l)
         {if(l[2])
           {return error("Ambiguous command.");}
          else
           {var i=l[1];
            
            i[3](ppf,lexbuf);
            Input_handling["resume_user_input"](0);
            return i[4];
            }
          }
        else
         {return error("Unknown command.");}
        }
      else
       {Input_handling["resume_user_input"](0);return 0;}
      }
    catch(exn)
     {var exit;
      
      if(exn=Parsing["Parse_error"])
       {return error("Syntax error.");}
      else
       {if(exn[1]=Failure)
         {switch(exn[2])
           {case "int_of_string":return error("Integer overflow");
            default:exit=172;}
          }
        else
         {exit=172;}
        }
      
      switch(exit){case 172:throw exn;}
      }
    };

var
 line_loop=
  function(ppf,line_buffer)
   {Input_handling["resume_user_input"](0);
    var previous_line="";
    
    try
     {while(1)
       {if(Program_management["loaded"][1])
         {History["add_current_time"](0)}
        else
         {}
        
        var new_line=Primitives["string_trim"](Lexer["line"](line_buffer));
        
        if("unknown primitive:caml_string_notequal")
         {var line=new_line;}
        else
         {var line=previous_line;}
        
        previous_line="";
        
        if(interprete_line(ppf,line)){previous_line=line;}else{}
        }
      return 0;
      }
    catch(exn)
     {if(exn=Pervasives["Exit"])
       {return Input_handling["stop_user_input"](0);}
      else
       {throw exn;}
      }
    };

var
 instr_cd=
  function(ppf,lexbuf)
   {var dir=Parser["argument_eol"](Lexer["argument"],lexbuf);
    
    if(Program_management["ask_kill_program"](0))
     {try
       {return "unknown primitive:caml_sys_chdir";}
      catch(exn){if(exn[1]=Sys_error){return error(exn[2]);}else{throw exn;}}
      }
    else
     {return 0;}
    };

var
 instr_shell=
  function(ppf,lexbuf)
   {var cmdarg=Parser["argument_list_eol"](Lexer["argument"],lexbuf);
    
    var cmd=$$String["concat"](" ",cmdarg);
    
    var err="unknown primitive:caml_sys_system_command";
    
    if(err!=0)
     {return Format["eprintf"]
              ([0,
                [11,
                 "Shell command ",
                 [3,0,[11," failed with exit code ",[4,0,0,0,[12,10,[10,0]]]]]],
                "Shell command %S failed with exit code %d\n%!"],
               cmd,
               err);
      }
    else
     {return 0;}
    };

var
 instr_env=
  function(ppf,lexbuf)
   {var cmdarg=Parser["argument_list_eol"](Lexer["argument"],lexbuf);
    
    var cmdarg$1=Primitives["string_trim"]($$String["concat"](" ",cmdarg));
    
    if("unknown primitive:caml_string_notequal")
     {if(Program_management["ask_kill_program"](0))
       {try
         {var eqpos=$$String["index"](cmdarg$1,61);
          
          if(eqpos=0){throw Not_found;}else{}
          
          var name=$$String["sub"](cmdarg$1,0,eqpos);
          
          var
           value=
            $$String["sub"](cmdarg$1,eqpos+1,cmdarg$1["length"]-eqpos-1);
          
          return Debugger_config["environment"][1]=
                 [/* :: */0,
                  [/* tuple */0,name,value],
                  List["remove_assoc"](name,Debugger_config["environment"][1])],
                 0;
          }
        catch(exn)
         {if(exn=Not_found)
           {return Format["eprintf"]
                    ([0,
                      [11,
                       "Environment variable must be in name=value format\n",
                       [10,0]],
                      "Environment variable must be in name=value format\n%!"]);
            }
          else
           {throw exn;}
          }
        }
      else
       {return List["iter"]
                (function(param)
                  {return Format["printf"]
                           ([0,[2,0,[12,61,[2,0,[12,10,[10,0]]]]],"%s=%s\n%!"],
                            param[1],
                            param[2]);
                   },
                 List["rev"](Debugger_config["environment"][1]));
        }
      }
    else
     {return 0;}
    };

var
 instr_pwd=
  function(ppf,lexbuf)
   {eol(lexbuf);
    return Format["fprintf"]
            (ppf,
             [0,[2,0,[17,4,0]],"%s@."],
             "unknown primitive:caml_sys_getcwd");
    };

var
 instr_dir=
  function(ppf,lexbuf)
   {var new_directory=Parser["argument_list_eol"](Lexer["argument"],lexbuf);
    
    if(new_directory=0)
     {if(Question["yes_or_no"]("Reinitialize directory list"))
       {Config["load_path"][1]=
        Parameters["default_load_path"][1],
        0,
        Envaux["reset_cache"](0),
        Hashtbl["clear"](Debugger_config["load_path_for"]),
        Source["flush_buffer_list"](0)}
      else
       {}
      }
    else
     {var new_directory$prime=List["rev"](new_directory);
      
      var exit;
      
      if(new_directory$prime)
       {var match=new_directory$prime[2];
        
        if(match)
         {var tl=match[2];
          
          var mdl=new_directory$prime[1];
          
          if("unknown primitive:caml_string_equal"&&List["length"](tl)>0)
           {List["iter"]
             (function(x)
               {return Parameters["add_path_for"]
                        (mdl,Unix_tools["expand_path"](x));
                },
              tl)}
          else
           {exit=148;}
          }
        else
         {exit=148;}
        }
      else
       {exit=148;}
      
      switch(exit)
       {case 148:
         List["iter"]
          (function(x)
            {return Parameters["add_path"](Unix_tools["expand_path"](x));},
           new_directory$prime)
        }
      }
    
    var
     print_dirs=
      function(ppf$1,l)
       {return List["iter"]
                (function(x)
                  {return Format["fprintf"]
                           (ppf$1,[0,[17,[0,"@ ",1,0],[2,0,0]],"@ %s"],x);
                   },
                 l);
        };
    
    Format["fprintf"]
     (ppf,
      [0,
       [18,
        [1,[0,[11,"<2>",0],"<2>"]],
        [11,"Directories: ",[15,[17,0,[17,4,0]]]]],
       "@[<2>Directories: %a@]@."],
      print_dirs,
      Config["load_path"][1]);
    return Hashtbl["iter"]
            (function(mdl$1,dirs)
              {return Format["fprintf"]
                       (ppf,
                        [0,
                         [18,
                          [1,[0,[11,"<2>",0],"<2>"]],
                          [11,
                           "Source directories for ",
                           [2,0,[11,": ",[15,[17,0,[17,4,0]]]]]]],
                         "@[<2>Source directories for %s: %a@]@."],
                        mdl$1,
                        print_dirs,
                        dirs);
               },
             Debugger_config["load_path_for"]);
    };

var
 instr_kill=
  function(ppf,lexbuf)
   {eol(lexbuf);
    if(!Program_management["loaded"][1])
     {error("The program is not being run.")}
    else
     {}
    
    if(Question["yes_or_no"]("Kill the program being debugged"))
     {Program_management["kill_program"](0);
      return Show_source["show_no_point"](0);
      }
    else
     {return 0;}
    };

var
 instr_run=
  function(ppf,lexbuf)
   {eol(lexbuf);
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["run"](0);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_reverse=
  function(ppf,lexbuf)
   {eol(lexbuf);
    check_not_windows("reverse");
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["back_run"](0);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_step=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_int64_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var step_count=match[1];}else{var step_count=Int64ops["_1"];}
    
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["step"](step_count);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_back=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_int64_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var step_count=match[1];}else{var step_count=Int64ops["_1"];}
    
    check_not_windows("backstep");
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["step"](Int64ops["--"](Int64ops["_0"],step_count));
    return Show_information["show_current_event"](ppf);
    };

var
 instr_finish=
  function(ppf,lexbuf)
   {eol(lexbuf);
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["finish"](0);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_next=
  function(ppf,lexbuf)
   {var match=Parser["opt_integer_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var step_count=match[1];}else{var step_count=1;}
    
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["next"](step_count);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_start=
  function(ppf,lexbuf)
   {eol(lexbuf);
    check_not_windows("start");
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["start"](0);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_previous=
  function(ppf,lexbuf)
   {var match=Parser["opt_integer_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var step_count=match[1];}else{var step_count=1;}
    
    check_not_windows("previous");
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["previous"](step_count);
    return Show_information["show_current_event"](ppf);
    };

var
 instr_goto=
  function(ppf,lexbuf)
   {var time=Parser["int64_eol"](Lexer["lexeme"],lexbuf);
    
    Program_management["ensure_loaded"](0);
    Printval["reset_named_values"](0);
    Time_travel["go_to"](time);
    return Show_information["show_current_event"](ppf);
    };

var instr_quit=function(param){throw Pervasives["Exit"];};

var
 print_variable_list=
  function(ppf)
   {var
     pr_vars=
      function(ppf$1)
       {return List["iter"]
                (function(v)
                  {return Format["fprintf"]
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],v[1]);
                   });
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [11,"List of variables: ",[15,[17,4,0]]],
              "List of variables: %a@."],
             pr_vars,
             variable_list[1]);
    };

var
 print_info_list=
  function(ppf)
   {var
     pr_infos=
      function(ppf$1)
       {return List["iter"]
                (function(i)
                  {return Format["fprintf"]
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],i[1]);
                   });
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [11,"List of info commands: ",[15,[17,4,0]]],
              "List of info commands: %a@."],
             pr_infos,
             info_list[1]);
    };

var
 instr_complete=
  function(ppf,lexbuf)
   {var ppf$1=Format["err_formatter"];
    
    var
     print_list=
      function(l)
       {try
         {eol(lexbuf);
          return List["iter"]
                  (function(i)
                    {return Format["fprintf"](ppf$1,[0,[2,0,[17,4,0]],"%s@."],i);
                     },
                   l);
          }
        catch(exn)
         {return Input_handling["remove_file"]
                  (Input_handling["user_channel"][1]);
          }
        };
    
    var
     match_list=
      function(lexbuf$1)
       {var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf$1);
        
        if(match)
         {var x=match[1];
          
          var l=matching_instructions(x);
          
          var exit;
          
          if(l)
           {var i=l[1];
            
            var i_full=i[1];
            
            var exit$1;
            
            switch(i_full)
             {case "help":
               if(l[2])
                {exit=122;}
               else
                {if("unknown primitive:caml_string_equal")
                  {return match_list(lexbuf$1);}
                 else
                  {return [0,"help",0];}
                 }
               
              case "info":
               if(l[2])
                {exit=122;}
               else
                {if("unknown primitive:caml_string_equal")
                  {var
                    match$1=
                     Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf$1);
                   
                   if(match$1)
                    {var ident=match$1[1];
                     
                     var l$1=matching_infos(ident);
                     
                     var exit$2;
                     
                     if(l$1)
                      {if(l$1[2])
                        {exit$2=121;}
                       else
                        {var i$1=l$1[1];
                         
                         if("unknown primitive:caml_string_equal")
                          {return 0;}
                         else
                          {return [/* :: */0,i$1[1],0];}
                         }
                       }
                     else
                      {exit$2=121;}
                     
                     switch(exit$2)
                      {case 121:
                        return List["map"](function(i$2){return i$2[1];},l$1);
                       }
                     }
                   else
                    {return List["map"]
                             (function(i$2){return i$2[1];},info_list[1]);
                     }
                   }
                 else
                  {return [0,"info",0];}
                 }
               
              case "set":exit$1=123;
              case "show":exit$1=123;
              default:exit$1=124;}
            
            switch(exit$1)
             {case 124:
               if(l[2])
                {exit=122;}
               else
                {if("unknown primitive:caml_string_equal")
                  {return 0;}
                 else
                  {return [/* :: */0,i[1],0];}
                 }
               
              case 123:
               if(l[2])
                {exit=122;}
               else
                {if("unknown primitive:caml_string_equal")
                  {var
                    match$2=
                     Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf$1);
                   
                   if(match$2)
                    {var ident$1=match$2[1];
                     
                     var l$2=matching_variables(ident$1);
                     
                     var exit$3;
                     
                     if(l$2)
                      {if(l$2[2])
                        {exit$3=120;}
                       else
                        {var v=l$2[1];
                         
                         if("unknown primitive:caml_string_equal")
                          {return 0;}
                         else
                          {return [/* :: */0,v[1],0];}
                         }
                       }
                     else
                      {exit$3=120;}
                     
                     switch(exit$3)
                      {case 120:
                        return List["map"](function(v$1){return v$1[1];},l$2);
                       }
                     }
                   else
                    {return List["map"]
                             (function(v$1){return v$1[1];},variable_list[1]);
                     }
                   }
                 else
                  {return [/* :: */0,i_full,0];}
                 }
               
              }
            }
          else
           {exit=122;}
          
          switch(exit)
           {case 122:return List["map"](function(i$2){return i$2[1];},l);}
          }
        else
         {return List["map"]
                  (function(i$2){return i$2[1];},instruction_list[1]);
          }
        };
    
    return print_list(match_list(lexbuf));
    };

var
 instr_help=
  function(ppf,lexbuf)
   {var
     pr_instrs=
      function(ppf$1)
       {return List["iter"]
                (function(i)
                  {return Format["fprintf"]
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],i[1]);
                   });
        };
    
    var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
    
    if(match)
     {var x=match[1];
      
      var
       print_help=
        function(nm,hlp)
         {eol(lexbuf);
          return Format["fprintf"]
                  (ppf,[0,[2,0,[11,": ",[2,0,[17,4,0]]]],"%s: %s@."],nm,hlp);
          };
      
      var l=matching_instructions(x);
      
      var exit;
      
      if(l)
       {var i=l[1];
        
        var exit$1;
        
        switch(i[1])
         {case "info":
           if(l[2])
            {exit=114;}
           else
            {return find_info
                     (function(i$1,param,param$1)
                       {return print_help(Pervasives["^"]("info ",i$1[1]),i$1[3]);},
                      function(ppf$1)
                       {print_help
                         ("info","display infos about the program being debugged.");
                        return print_info_list(ppf$1);
                        },
                      ppf,
                      lexbuf);
             }
           
          case "set":
           if(l[2])
            {exit=114;}
           else
            {return find_variable
                     (function(v,param,param$1)
                       {return print_help
                                (Pervasives["^"]("set ",v[1]),Pervasives["^"]("set ",v[3]));
                        },
                      function(ppf$1)
                       {print_help("set","set debugger variable.");
                        return print_variable_list(ppf$1);
                        },
                      ppf,
                      lexbuf);
             }
           
          case "show":
           if(l[2])
            {exit=114;}
           else
            {return find_variable
                     (function(v,param,param$1)
                       {return print_help
                                (Pervasives["^"]("show ",v[1]),
                                 Pervasives["^"]("show ",v[3]));
                        },
                      function(v)
                       {print_help("show","display debugger variable.");
                        return print_variable_list(ppf);
                        },
                      ppf,
                      lexbuf);
             }
           
          default:exit$1=115;}
        
        switch(exit$1)
         {case 115:if(l[2]){exit=114;}else{return print_help(i[1],i[5]);}}
        }
      else
       {eol(lexbuf);
        return Format["fprintf"]
                (ppf,
                 [0,
                  [11,"No matching command.",[17,4,0]],
                  "No matching command.@."]);
        }
      
      switch(exit)
       {case 114:
         eol(lexbuf);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,'Ambiguous command "',[2,0,[11,'": ',[15,[17,4,0]]]]],
                   'Ambiguous command "%s": %a@.'],
                  x,
                  pr_instrs,
                  l);
         
        }
      }
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [11,"List of commands: ",[15,[17,4,0]]],
                "List of commands: %a@."],
               pr_instrs,
               instruction_list[1]);
      }
    };

var
 print_expr=
  function(depth,ev,env,ppf,expr)
   {try
     {var match=Eval["expression"](ev,env,expr);
      
      return Printval["print_named_value"]
              (depth,expr,env,match[1],ppf,match[2]);
      }
    catch(exn)
     {if(exn[1]=Eval["Error"])
       {Eval["report_error"](ppf,exn[2]);throw Debugger_config["Toplevel"];}
      else
       {throw exn;}
      }
    };

var
 env_of_event=
  function(param)
   {if(param)
     {var ev=param[1];return Envaux["env_from_summary"](ev[6],ev[7]);}
    else
     {return Env["empty"];}
    };

var
 print_command=
  function(depth,ppf,lexbuf)
   {var exprs=Parser["expression_list_eol"](Lexer["lexeme"],lexbuf);
    
    Program_management["ensure_loaded"](0);
    try
     {var env=env_of_event(Frames["selected_event"][1]);}
    catch(exn)
     {if(exn[1]=Envaux["Error"])
       {Envaux["report_error"](ppf,exn[2]);throw Debugger_config["Toplevel"];}
      else
       {throw exn;}
      }
    
    return List["iter"]
            (print_expr(depth,Frames["selected_event"][1],env,ppf),exprs);
    };

var
 instr_print=
  function(ppf,lexbuf)
   {return print_command(Printval["max_printer_depth"][1],ppf,lexbuf);};

var instr_display=function(ppf,lexbuf){return print_command(1,ppf,lexbuf);};

var
 extract_filename=
  function(arg)
   {var l=arg["length"];
    
    if(l>0&&(arg[0]=34)){var pos1=1;}else{var pos1=0;}
    
    if(l>0&&(arg[l-1]=34)){var pos2=l-1;}else{var pos2=l;}
    
    return $$String["sub"](arg,pos1,pos2-pos1);
    };

var
 instr_source=
  function(ppf,lexbuf)
   {var
     file=
      extract_filename(Parser["argument_eol"](Lexer["argument"],lexbuf));
    
    var old_state=Input_handling["interactif"][1];
    
    var old_channel=Input_handling["user_channel"][1];
    
    try
     {var
       io_chan=
        Primitives["io_channel_of_descr"]
         (Unix["openfile"]
           (Misc["find_in_path"]
             (Config["load_path"][1],Unix_tools["expand_path"](file)),
            [0,0,0],
            0));
      }
    catch(x)
     {if(x=Not_found)
       {var io_chan=error("Source file not found.");}
      else
       {if(x[1]=Unix["Unix_error"])
         {Unix_tools["report_error"](x);throw Debugger_config["Toplevel"];}
        else
         {throw x;}
        }
      }
    
    try
     {Input_handling["interactif"][1]=0,0;
      Input_handling["user_channel"][1]=io_chan,0;
      line_loop
       (ppf,Lexing["from_function"](Input_handling["read_user_input"]));
      Primitives["close_io"](io_chan);
      Input_handling["interactif"][1]=old_state,0;
      return Input_handling["user_channel"][1]=old_channel,0;
      }
    catch(x$1)
     {Input_handling["stop_user_input"](0);
      Primitives["close_io"](io_chan);
      Input_handling["interactif"][1]=old_state,0;
      Input_handling["user_channel"][1]=old_channel,0;
      throw x$1;
      }
    };

var
 instr_set=
  find_variable
   (function(param,ppf,lexbuf){return param[2][1](lexbuf);},
    function(ppf){return error("Argument required.");});

var
 instr_show=
  find_variable
   (function(param,ppf,lexbuf){eol(lexbuf);return param[2][2](ppf);},
    function(ppf)
     {return List["iter"]
              (function(param)
                {Format["fprintf"](ppf,[0,[2,0,[11,": ",0]],"%s: "],param[1]);
                 return param[2][2](ppf);
                 },
               variable_list[1]);
      });

var
 instr_info=
  find_info
   (function(i,ppf,lexbuf){return i[2](lexbuf);},
    function(ppf)
     {return error('"info" must be followed by the name of an info command.');
      });

var
 instr_break=
  function(ppf,lexbuf)
   {var argument=Parser["break_argument_eol"](Lexer["lexeme"],lexbuf);
    
    Program_management["ensure_loaded"](0);
    if(typeof argument=="number")
     {switch(argument)
       {case 0:
         var match=Frames["selected_event"][1];
         
         if(match)
          {return Breakpoints["new_breakpoint"](match[1]);}
         else
          {return error("Can't add breakpoint at this point.");}
         
        }}
    else
     {switch(argument[0])
       {case 0:return add_breakpoint_at_pc(argument[1]);
        case 1:
         try
          {var env=env_of_event(Frames["selected_event"][1]);}
         catch(exn)
          {if(exn[1]=Envaux["Error"])
            {Envaux["report_error"](ppf,exn[2]);
             throw Debugger_config["Toplevel"];
             }
           else
            {throw exn;}
           }
         
         try
          {var
            match$1=
             Eval["expression"](Frames["selected_event"][1],env,argument[1]);
           
           var match$2=Ctype["repr"](match$1[2])[1];
           
           var exit;
           
           if(typeof match$2=="number")
            {switch(match$2){}}
           else
            {switch(match$2[0])
              {case 1:
                return add_breakpoint_after_pc
                        (Debugcom["Remote_value"][12](match$1[1]));
                
               default:exit=75;}}
           
           switch(exit)
            {case 75:
              Format["eprintf"]
               ([0,[11,"Not a function.",[17,4,0]],"Not a function.@."]);
              throw Debugger_config["Toplevel"];
              
             }
           }
         catch(exn$1)
          {if(exn$1[1]=Eval["Error"])
            {Eval["report_error"](ppf,exn$1[2]);
             throw Debugger_config["Toplevel"];
             }
           else
            {throw exn$1;}
           }
         
        case 2:
         var column=argument[3];
         
         var line=argument[2];
         
         var module_name=convert_module(module_of_longident(argument[1]));
         
         try
          {var ev=Symbols["event_at_pos"](module_name,0);
           
           var init=Lexing["dummy_pos"];
           
           var
            ev_pos=
             [/* record */0,Events["get_pos"](ev)[1],init[2],init[3],init[4]];
           
           try
            {var buffer=Source["get_buffer"](ev_pos,module_name);}
           catch(exn$2)
            {if(exn$2=Not_found)
              {Format["eprintf"]
                ([0,
                  [11,"No source file for ",[2,0,[12,46,[17,4,0]]]],
                  "No source file for %s.@."],
                 module_name);
               throw Debugger_config["Toplevel"];
               }
             else
              {throw exn$2;}
             }
           
           if(column)
            {var
              $js=
               Symbols["event_near_pos"]
                (module_name,Source["point_of_coord"](buffer,line,column[1]));
             }
           else
            {var
              $js=
               Symbols["event_at_pos"]
                (module_name,Source["pos_of_line"](buffer,line)[1]);
             }
           }
         catch(exn$3)
          {if(exn$3=Not_found)
            {Format["eprintf"]
              ([0,
                [11,"Can't find any event there.",[17,4,0]],
                "Can't find any event there.@."]);
             throw Debugger_config["Toplevel"];
             }
           else
            {if(exn$3=Primitives["Out_of_range"])
              {Format["eprintf"]
                ([0,
                  [11,"Position out of range.",[17,4,0]],
                  "Position out of range.@."]);
               throw Debugger_config["Toplevel"];
               }
             else
              {throw exn$3;}
             }
           }
         return Breakpoints["new_breakpoint"]($js);
         
        case 3:
         try
          {return Breakpoints["new_breakpoint"]
                   (Symbols["event_near_pos"]
                     (convert_module(module_of_longident(argument[1])),
                      argument[2]));
           }
         catch(exn$4)
          {if(exn$4=Not_found)
            {return Format["eprintf"]
                     ([0,
                       [11,"Can't find any event there.",[17,4,0]],
                       "Can't find any event there.@."]);
             }
           else
            {throw exn$4;}
           }
         
        }}
    };

var
 instr_delete=
  function(ppf,lexbuf)
   {var breakpoints=Parser["integer_list_eol"](Lexer["lexeme"],lexbuf);
    
    if(breakpoints)
     {return List["iter"]
              (function(x)
                {try
                  {return Breakpoints["remove_breakpoint"](x);}
                 catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
                 },
               breakpoints);
      }
    else
     {if
       (Breakpoints["breakpoints_count"](0)!=
        0&&
        Question["yes_or_no"]("Delete all breakpoints"))
       {return Breakpoints["remove_all_breakpoints"](0);}
      else
       {return 0;}
      }
    };

var
 instr_frame=
  function(ppf,lexbuf)
   {var match=Parser["opt_integer_eol"](Lexer["lexeme"],lexbuf);
    
    if(match)
     {var frame_number=match[1];}
    else
     {var frame_number=Frames["current_frame"][1];}
    
    Program_management["ensure_loaded"](0);
    try
     {Frames["select_frame"](frame_number);
      return Show_information["show_current_frame"](ppf,1);
      }
    catch(exn)
     {if(exn=Not_found)
       {return error
                (Pervasives["^"]
                  ("No frame number ",
                   Pervasives["^"]
                    (Pervasives["string_of_int"](frame_number),".")));
        }
      else
       {throw exn;}
      }
    };

var
 instr_backtrace=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_integer_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var number=match[1];}else{var number=0;}
    
    Program_management["ensure_loaded"](0);
    var match$1=Checkpoints["current_report"](0);
    
    var exit;
    
    if(match$1)
     {var match$2=match$1[1][1];
      
      var exit$1;
      
      if(match$2!=2)
       {if(match$2>=4)
         {exit$1=64;}
        else
         {var frame_counter=[0,0];
          
          var
           print_frame=
            function(first_frame,last_frame,param)
             {if(param)
               {if(frame_counter[1]>=first_frame)
                 {Show_information["show_one_frame"]
                   (frame_counter[1],ppf,param[1])}
                else
                 {}
                
                frame_counter[0]++;
                if(frame_counter[1]>=last_frame)
                 {Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"(More frames follow)",[17,4,0]],
                     "(More frames follow)@."])}
                else
                 {}
                
                return frame_counter[1]<last_frame;
                }
              else
               {Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "(Encountered a function with no debugging information)",
                    [17,4,0]],
                   "(Encountered a function with no debugging information)@."]);
                return 0;
                }
              };
          
          Format["fprintf"](ppf,[0,[11,"Backtrace:",[17,4,0]],"Backtrace:@."]);
          if(number=0)
           {return Frames["do_backtrace"]
                    (print_frame(0,Pervasives["max_int"]));
            }
          else
           {if(number>0)
             {return Frames["do_backtrace"](print_frame(0,number));}
            else
             {var num_frames=Frames["stack_depth"](0);
              
              if(num_frames<0)
               {return Format["fprintf"]
                        (ppf,
                         [0,
                          [11,
                           "(Encountered a function with no debugging information)",
                           [17,4,0]],
                          "(Encountered a function with no debugging information)@."]);
                }
              else
               {return Frames["do_backtrace"]
                        (print_frame(num_frames+number,Pervasives["max_int"]));
                }
              }
            }
          }
        }
      else
       {exit$1=64;}
      
      switch(exit$1){case 64:exit=63;}
      }
    else
     {exit=63;}
    
    switch(exit){case 63:return 0;}
    };

var
 instr_up=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_integer_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var offset=match[1];}else{var offset=1;}
    
    Program_management["ensure_loaded"](0);
    try
     {Frames["select_frame"](Frames["current_frame"][1]+offset);
      return Show_information["show_current_frame"](ppf,1);
      }
    catch(exn)
     {if(exn=Not_found){return error("No such frame.");}else{throw exn;}}
    };

var
 instr_down=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_integer_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var offset=match[1];}else{var offset=1;}
    
    Program_management["ensure_loaded"](0);
    try
     {Frames["select_frame"](Frames["current_frame"][1]-offset);
      return Show_information["show_current_frame"](ppf,1);
      }
    catch(exn)
     {if(exn=Not_found){return error("No such frame.");}else{throw exn;}}
    };

var
 instr_last=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_int64_eol"](Lexer["lexeme"],lexbuf);
    
    if(match){var count=match[1];}else{var count=Int64ops["_1"];}
    
    check_not_windows("last");
    Printval["reset_named_values"](0);
    Time_travel["go_to"](History["previous_time"](count));
    return Show_information["show_current_event"](ppf);
    };

var
 instr_list=
  function(ppf,lexbuf)
   {var match=Parser["list_arguments_eol"](Lexer["lexeme"],lexbuf);
    
    var e=match[3];
    
    var beg=match[2];
    
    var mo=match[1];
    
    try
     {var match$1=Frames["selected_point"](0);}
    catch(exn){if(exn=Not_found){var match$1=[0,"",-1,-1];}else{throw exn;}}
    
    var column=match$1[3];
    
    var line=match$1[2];
    
    var mdle=convert_module(module_of_longident(mo));
    
    var pos=Lexing["dummy_pos"];
    
    try
     {var buffer=Source["get_buffer"](pos,mdle);}
    catch(exn$1)
     {if(exn$1=Not_found)
       {var
         buffer=
          error
           (Pervasives["^"]("No source file for ",Pervasives["^"](mdle,".")));
        }
      else
       {throw exn$1;}
      }
    
    if(column!=-1)
     {var point=Source["point_of_coord"](buffer,line,1)+column;}
    else
     {var point=-1;}
    
    if(beg)
     {var beginning=beg[1];}
    else
     {if(mo!=0||(line=-1))
       {var beginning=1;}
      else
       {try
         {var beginning=Pervasives["max"](1,line-10);}
        catch(exn$2)
         {if(exn$2=Primitives["Out_of_range"])
           {var beginning=1;}
          else
           {throw exn$2;}
          }
        }
      }
    
    if(e){var en=e[1];}else{var en=beginning+20;}
    
    if("unknown primitive:caml_string_equal")
     {return Show_source["show_listing"]
              (pos,
               mdle,
               beginning,
               en,
               point,
               Events["current_event_is_before"](0));
      }
    else
     {return Show_source["show_listing"](pos,mdle,beginning,en,-1,1);}
    };

var
 raw_variable=
  function(kill,name)
   {return [/* tuple */0,
            function(lexbuf)
             {var argument=Parser["argument_eol"](Lexer["argument"],lexbuf);
              
              if(!kill||Program_management["ask_kill_program"](0))
               {return name[1]=argument,0;}
              else
               {return 0;}
              },
            function(ppf)
             {return Format["fprintf"](ppf,[0,[2,0,[17,4,0]],"%s@."],name[1]);
              }];
    };

var
 raw_line_variable=
  function(kill,name)
   {return [/* tuple */0,
            function(lexbuf)
             {var
               argument=
                Parser["argument_eol"](Lexer["line_argument"],lexbuf);
              
              if(!kill||Program_management["ask_kill_program"](0))
               {return name[1]=argument,0;}
              else
               {return 0;}
              },
            function(ppf)
             {return Format["fprintf"](ppf,[0,[2,0,[17,4,0]],"%s@."],name[1]);
              }];
    };

var
 integer_variable=
  function(kill,min,msg,name)
   {return [/* tuple */0,
            function(lexbuf)
             {var argument=Parser["integer_eol"](Lexer["lexeme"],lexbuf);
              
              if(argument<min)
               {return Pervasives["print_endline"](msg);}
              else
               {if(!kill||Program_management["ask_kill_program"](0))
                 {return name[1]=argument,0;}
                else
                 {return 0;}
                }
              },
            function(ppf)
             {return Format["fprintf"]
                      (ppf,[0,[4,3,0,0,[17,4,0]],"%i@."],name[1]);
              }];
    };

var
 int64_variable=
  function(kill,min,msg,name)
   {return [/* tuple */0,
            function(lexbuf)
             {var argument=Parser["int64_eol"](Lexer["lexeme"],lexbuf);
              
              if(argument<min)
               {return Pervasives["print_endline"](msg);}
              else
               {if(!kill||Program_management["ask_kill_program"](0))
                 {return name[1]=argument,0;}
                else
                 {return 0;}
                }
              },
            function(ppf)
             {return Format["fprintf"]
                      (ppf,[0,[7,3,0,0,[17,4,0]],"%Li@."],name[1]);
              }];
    };

var
 boolean_variable=
  function(kill,name)
   {return [/* tuple */0,
            function(lexbuf)
             {var match=Parser["identifier_eol"](Lexer["lexeme"],lexbuf);
              
              var exit;
              
              switch(match)
               {case "of":exit=28;
                case "off":exit=28;
                case "on":var argument=1;
                default:exit=29;}
              
              switch(exit)
               {case 29:var argument=error("Syntax error.");
                case 28:var argument=0;
                }
              
              if(!kill||Program_management["ask_kill_program"](0))
               {return name[1]=argument,0;}
              else
               {return 0;}
              },
            function(ppf)
             {return Format["fprintf"]
                      (ppf,[0,[2,0,[17,4,0]],"%s@."],name[1]?"on":"off");
              }];
    };

var
 path_variable=
  function(kill,name)
   {return [/* tuple */0,
            function(lexbuf)
             {var argument=Parser["argument_eol"](Lexer["argument"],lexbuf);
              
              if(!kill||Program_management["ask_kill_program"](0))
               {return name[1]=
                       Unix_tools["make_absolute"]
                        (Unix_tools["expand_path"](argument)),
                       0;
                }
              else
               {return 0;}
              },
            function(ppf)
             {return Format["fprintf"](ppf,[0,[2,0,[17,4,0]],"%s@."],name[1]);
              }];
    };

var
 loading_mode_variable=
  function(ppf)
   {return [/* tuple */0,
            find_ident
             ("loading mode",
              matching_elements
               ([0,Program_loading["loading_modes"]],
                function(prim){return prim[1];}),
              function(param,ppf$1,lexbuf)
               {eol(lexbuf);
                return Program_loading["set_launching_function"](param[2]);
                },
              function(ppf$1){return error("Syntax error.");},
              ppf),
            function(ppf$1)
             {var
               find=
                function(param)
                 {if(param)
                   {var match=param[1];
                    
                    if(match[2]=Program_loading["launching_func"][1])
                     {return Format["fprintf"](ppf$1,[0,[2,0,0],"%s"],match[1]);}
                    else
                     {return find(param[2]);}
                    }
                  else
                   {return 0;}
                  };
              
              find(Program_loading["loading_modes"]);
              return Format["fprintf"](ppf$1,[0,[17,4,0],"@."]);
              }];
    };

var
 follow_fork_variable=
  [/* tuple */0,
   function(lexbuf)
    {var match=Parser["identifier_eol"](Lexer["lexeme"],lexbuf);
     
     var exit;
     
     switch(match)
      {case "child":var mode=0;case "parent":var mode=1;default:exit=22;}
     
     switch(exit){case 22:var mode=error("Syntax error.");}
     
     Debugcom["fork_mode"][1]=mode,0;
     if(Program_management["loaded"][1])
      {return Debugcom["update_follow_fork_mode"](0);}
     else
      {return 0;}
     },
   function(ppf)
    {var match=Debugcom["fork_mode"][1];
     
     return Format["fprintf"]
             (ppf,[0,[2,0,[17,4,0]],"%s@."],match!=0?"parent":"child");
     }];

var
 pr_modules=
  function(ppf,mods)
   {var
     pr_mods=
      function(ppf$1)
       {return List["iter"]
                (function(x)
                  {return Format["fprintf"]
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],x);
                   });
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [11,"Used modules: ",[17,4,[15,[17,2,0]]]],
              "Used modules: @.%a@?"],
             pr_mods,
             mods);
    };

var
 info_modules=
  function(ppf,lexbuf)
   {eol(lexbuf);
    Program_management["ensure_loaded"](0);
    return pr_modules(ppf,Symbols["modules"][1]);
    };

var
 info_checkpoints=
  function(ppf,lexbuf)
   {eol(lexbuf);
    if(Checkpoints["checkpoints"][1]=0)
     {return Format["fprintf"]
              (ppf,[0,[11,"No checkpoint.",[17,4,0]],"No checkpoint.@."]);
      }
    else
     {if(Breakpoints["debug_breakpoints"][1])
       {Pervasives["prerr_endline"]("               Time   Pid Version");
        return List["iter"]
                (function(param)
                  {var time=param[1];
                   
                   var pid=param[2];
                   
                   var version=param[8];
                   
                   return Printf["printf"]
                           ([0,
                             [7,
                              0,
                              [0,1,19],
                              0,
                              [12,32,[4,0,[0,1,5],0,[12,32,[4,0,0,0,[12,10,0]]]]]],
                             "%19Ld %5d %d\n"],
                            time,
                            pid,
                            version);
                   },
                 Checkpoints["checkpoints"][1]);
        }
      else
       {Pervasives["print_endline"]("               Time   Pid");
        return List["iter"]
                (function(param)
                  {var time=param[1];
                   
                   var pid=param[2];
                   
                   return Printf["printf"]
                           ([0,
                             [7,0,[0,1,19],0,[12,32,[4,0,[0,1,5],0,[12,10,0]]]],
                             "%19Ld %5d\n"],
                            time,
                            pid);
                   },
                 Checkpoints["checkpoints"][1]);
        }
      }
    };

var
 info_one_breakpoint=
  function(ppf,param)
   {var ev=param[2];
    
    return Format["fprintf"]
            (ppf,
             [0,
              [4,
               0,
               [0,1,3],
               0,
               [12,32,[4,0,[0,1,10],0,[11,"  ",[2,0,[17,4,0]]]]]],
              "%3d %10d  %s@."],
             param[1],
             ev[1],
             Pos["get_desc"](ev));
    };

var
 info_breakpoints=
  function(ppf,lexbuf)
   {eol(lexbuf);
    if(Breakpoints["breakpoints"][1]=0)
     {return Format["fprintf"]
              (ppf,[0,[11,"No breakpoints.",[17,4,0]],"No breakpoints.@."]);
      }
    else
     {Format["fprintf"]
       (ppf,
        [0,[11,"Num    Address  Where",[17,4,0]],"Num    Address  Where@."]);
      return List["iter"]
              (info_one_breakpoint(ppf),
               List["rev"](Breakpoints["breakpoints"][1]));
      }
    };

var
 info_events=
  function(ppf,lexbuf)
   {Program_management["ensure_loaded"](0);
    var
     mdle=
      convert_module
       (module_of_longident
         (Parser["opt_longident_eol"](Lexer["lexeme"],lexbuf)));
    
    Pervasives["print_endline"](Pervasives["^"]("Module: ",mdle));
    Pervasives["print_endline"]
     ("   Address  Characters        Kind      Repr.");
    return List["iter"]
            (function(ev)
              {try
                {var buffer=Source["get_buffer"](Events["get_pos"](ev),ev[2]);
                 
                 var
                  match=
                   [/* tuple */0,
                    Source["start_and_cnum"](buffer,ev[3][1])[2],
                    Source["start_and_cnum"](buffer,ev[3][2])[2]];
                 }
               catch(exn){var match=[/* tuple */0,ev[3][1][4],ev[3][2][4]];}
               
               var match$1=ev[4];
               
               var match$2=ev[5];
               
               var match$3=ev[10];
               
               var $js;
               if(typeof match$3=="number")
                {switch(match$3){case 0:$js="";}}
               else
                {switch(match$3[0])
                  {case 0:$js="(repr)";
                   case 1:$js=Pervasives["string_of_int"](match$3[1][1]);
                   }}
               return Printf["printf"]
                       ([0,
                         [4,
                          0,
                          [0,1,10],
                          0,
                          [12,
                           32,
                           [4,
                            0,
                            [0,1,6],
                            0,
                            [12,
                             45,
                             [4,
                              0,
                              [0,0,6],
                              0,
                              [11,"  ",[2,[0,1,10],[12,32,[2,[0,1,10],[12,10,0]]]]]]]]]],
                         "%10d %6d-%-6d  %10s %10s\n"],
                        ev[1],
                        match[1],
                        match[2],
                        Pervasives["^"]
                         ("unknown primitive:isint"
                           ?match$1!=0?"pseudo":"before"
                           :"after",
                          "unknown primitive:isint"?match$2!=0?"":"/fun":"/ret"),
                        $js);
               },
             Symbols["events_in_module"](mdle));
    };

var
 instr_load_printer=
  function(ppf,lexbuf)
   {var
     filename=
      extract_filename(Parser["argument_eol"](Lexer["argument"],lexbuf));
    
    try
     {return Loadprinter["loadfile"](ppf,filename);}
    catch(exn)
     {if(exn[1]=Loadprinter["Error"])
       {Loadprinter["report_error"](ppf,exn[2]);
        throw Debugger_config["Toplevel"];
        }
      else
       {throw exn;}
      }
    };

var
 instr_install_printer=
  function(ppf,lexbuf)
   {var lid=Parser["longident_eol"](Lexer["lexeme"],lexbuf);
    
    try
     {return Loadprinter["install_printer"](ppf,lid);}
    catch(exn)
     {if(exn[1]=Loadprinter["Error"])
       {Loadprinter["report_error"](ppf,exn[2]);
        throw Debugger_config["Toplevel"];
        }
      else
       {throw exn;}
      }
    };

var
 instr_remove_printer=
  function(ppf,lexbuf)
   {var lid=Parser["longident_eol"](Lexer["lexeme"],lexbuf);
    
    try
     {return Loadprinter["remove_printer"](lid);}
    catch(exn)
     {if(exn[1]=Loadprinter["Error"])
       {Loadprinter["report_error"](ppf,exn[2]);
        throw Debugger_config["Toplevel"];
        }
      else
       {throw exn;}
      }
    };

var
 init=
  function(ppf)
   {instruction_list[1]=
    [/* :: */0,
     [/* record */0,
      "cd",
      0,
      instr_cd,
      1,
      "set working directory to DIR for debugger and program being debugged."],
     [/* :: */0,
      [/* record */0,
       "complete",
       0,
       instr_complete,
       0,
       "complete word at cursor according to context. Useful for Emacs."],
      [/* :: */0,
       [/* record */0,"pwd",0,instr_pwd,1,"print working directory."],
       [/* :: */0,
        [/* record */0,
         "directory",
         0,
         instr_dir,
         0,
         "add directory DIR to beginning of search path for source and\ninterface files.\nForget cached info on source file locations and line positions.\nWith no argument, reset the search path."],
        [/* :: */0,
         [/* record */0,
          "kill",
          0,
          instr_kill,
          1,
          "kill the program being debugged."],
         [/* :: */0,
          [/* record */0,"help",0,instr_help,1,"print list of commands."],
          [/* :: */0,
           [/* record */0,"quit",0,instr_quit,0,"exit the debugger."],
           [/* :: */0,
            [/* record */0,
             "shell",
             0,
             instr_shell,
             1,
             "Execute a given COMMAND thru the system shell."],
            [/* :: */0,
             [/* record */0,
              "environment",
              0,
              instr_env,
              0,
              "environment variable to give to program being debugged when it is started."],
             [/* :: */0,
              [/* record */0,
               "run",
               1,
               instr_run,
               1,
               "run the program from current position."],
              [/* :: */0,
               [/* record */0,
                "reverse",
                0,
                instr_reverse,
                1,
                "run the program backward from current position."],
               [/* :: */0,
                [/* record */0,
                 "step",
                 1,
                 instr_step,
                 1,
                 "step program until it reaches the next event.\nArgument N means do this N times (or till program stops for another reason)."],
                [/* :: */0,
                 [/* record */0,
                  "backstep",
                  1,
                  instr_back,
                  1,
                  "step program backward until it reaches the previous event.\nArgument N means do this N times (or till program stops for another reason)."],
                 [/* :: */0,
                  [/* record */0,
                   "goto",
                   0,
                   instr_goto,
                   1,
                   "go to the given time."],
                  [/* :: */0,
                   [/* record */0,
                    "finish",
                    1,
                    instr_finish,
                    1,
                    "execute until topmost stack frame returns."],
                   [/* :: */0,
                    [/* record */0,
                     "next",
                     1,
                     instr_next,
                     1,
                     "step program until it reaches the next event.\nSkip over function calls.\nArgument N means do this N times (or till program stops for another reason)."],
                    [/* :: */0,
                     [/* record */0,
                      "start",
                      0,
                      instr_start,
                      1,
                      "execute backward until the current function is exited."],
                     [/* :: */0,
                      [/* record */0,
                       "previous",
                       0,
                       instr_previous,
                       1,
                       "step program until it reaches the previous event.\nSkip over function calls.\nArgument N means do this N times (or till program stops for another reason)."],
                      [/* :: */0,
                       [/* record */0,
                        "print",
                        1,
                        instr_print,
                        1,
                        "print value of expressions (deep printing)."],
                       [/* :: */0,
                        [/* record */0,
                         "display",
                         1,
                         instr_display,
                         1,
                         "print value of expressions (shallow printing)."],
                        [/* :: */0,
                         [/* record */0,
                          "source",
                          0,
                          instr_source,
                          1,
                          "read command from file FILE."],
                         [/* :: */0,
                          [/* record */0,
                           "break",
                           0,
                           instr_break,
                           0,
                           "Set breakpoint at specified line or function.\nSyntax: break function-name\n        break @ [module] linenum\n        break @ [module] # characternum"],
                          [/* :: */0,
                           [/* record */0,
                            "delete",
                            0,
                            instr_delete,
                            0,
                            "delete some breakpoints.\nArguments are breakpoint numbers with spaces in between.\nTo delete all breakpoints, give no argument."],
                           [/* :: */0,
                            [/* record */0,"set",0,instr_set,0,"--unused--"],
                            [/* :: */0,
                             [/* record */0,"show",0,instr_show,1,"--unused--"],
                             [/* :: */0,
                              [/* record */0,"info",0,instr_info,1,"--unused--"],
                              [/* :: */0,
                               [/* record */0,
                                "frame",
                                0,
                                instr_frame,
                                1,
                                "select and print a stack frame.\nWith no argument, print the selected stack frame.\nAn argument specifies the frame to select."],
                               [/* :: */0,
                                [/* record */0,
                                 "backtrace",
                                 0,
                                 instr_backtrace,
                                 1,
                                 "print backtrace of all stack frames, or innermost COUNT frames.\nWith a negative argument, print outermost -COUNT frames."],
                                [/* :: */0,
                                 [/* record */0,
                                  "bt",
                                  0,
                                  instr_backtrace,
                                  1,
                                  "print backtrace of all stack frames, or innermost COUNT frames.\nWith a negative argument, print outermost -COUNT frames."],
                                 [/* :: */0,
                                  [/* record */0,
                                   "up",
                                   0,
                                   instr_up,
                                   1,
                                   "select and print stack frame that called this one.\nAn argument says how many frames up to go."],
                                  [/* :: */0,
                                   [/* record */0,
                                    "down",
                                    0,
                                    instr_down,
                                    1,
                                    "select and print stack frame called by this one.\nAn argument says how many frames down to go."],
                                   [/* :: */0,
                                    [/* record */0,
                                     "last",
                                     1,
                                     instr_last,
                                     1,
                                     "go back to previous time."],
                                    [/* :: */0,
                                     [/* record */0,
                                      "list",
                                      0,
                                      instr_list,
                                      1,
                                      "list the source code."],
                                     [/* :: */0,
                                      [/* record */0,
                                       "load_printer",
                                       0,
                                       instr_load_printer,
                                       0,
                                       "load in the debugger a .cmo or .cma file containing printing functions."],
                                      [/* :: */0,
                                       [/* record */0,
                                        "install_printer",
                                        0,
                                        instr_install_printer,
                                        0,
                                        'use the given function for printing values of its input type.\nThe code for the function must have previously been loaded in the debugger\nusing "load_printer".'],
                                       [/* :: */0,
                                        [/* record */0,
                                         "remove_printer",
                                         0,
                                         instr_remove_printer,
                                         0,
                                         "stop using the given function for printing values of its input type."],
                                        0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
    0;
    variable_list[1]=
    [/* :: */0,
     [/* record */0,
      "arguments",
      raw_line_variable(1,Parameters["arguments"]),
      "arguments to give program being debugged when it is started."],
     [/* :: */0,
      [/* record */0,
       "program",
       path_variable(1,Parameters["program_name"]),
       "name of program to be debugged."],
      [/* :: */0,
       [/* record */0,
        "loadingmode",
        loading_mode_variable(ppf),
        "mode of loading.\nIt can be either:\ndirect: the program is directly called by the debugger.\nruntime: the debugger execute `ocamlrun programname arguments'.\nmanual: the program is not launched by the debugger,\nbut manually by the user."],
       [/* :: */0,
        [/* record */0,
         "processcount",
         integer_variable
          (0,1,"Must be >= 1.",Debugger_config["checkpoint_max_count"]),
         "maximum number of process to keep."],
        [/* :: */0,
         [/* record */0,
          "checkpoints",
          boolean_variable(0,Debugger_config["make_checkpoints"]),
          "whether to make checkpoints or not."],
         [/* :: */0,
          [/* record */0,
           "bigstep",
           int64_variable
            (0,
             Int64ops["_1"],
             "Must be >= 1.",
             Debugger_config["checkpoint_big_step"]),
           "step between checkpoints during long displacements."],
          [/* :: */0,
           [/* record */0,
            "smallstep",
            int64_variable
             (0,
              Int64ops["_1"],
              "Must be >= 1.",
              Debugger_config["checkpoint_small_step"]),
            "step between checkpoints during small displacements."],
           [/* :: */0,
            [/* record */0,
             "socket",
             raw_variable(1,Parameters["socket_name"]),
             "name of the socket used by communications debugger-runtime."],
            [/* :: */0,
             [/* record */0,
              "history",
              integer_variable(0,0,"",Debugger_config["history_size"]),
              "history size."],
             [/* :: */0,
              [/* record */0,
               "print_depth",
               integer_variable
                (0,1,"Must be at least 1",Printval["max_printer_depth"]),
               "maximal depth for printing of values."],
              [/* :: */0,
               [/* record */0,
                "print_length",
                integer_variable
                 (0,1,"Must be at least 1",Printval["max_printer_steps"]),
                "maximal number of value nodes printed."],
               [/* :: */0,
                [/* record */0,
                 "follow_fork_mode",
                 follow_fork_variable,
                 "process to follow after forking.\nIt can be either :\n  child: the newly created process.\nparent: the process that called fork.\n"],
                0]]]]]]]]]]]],
    0;
    return info_list[1]=
           [/* :: */0,
            [/* record */0,"modules",info_modules(ppf),"list opened modules."],
            [/* :: */0,
             [/* record */0,
              "checkpoints",
              info_checkpoints(ppf),
              "list checkpoints."],
             [/* :: */0,
              [/* record */0,
               "breakpoints",
               info_breakpoints(ppf),
               "list breakpoints."],
              [/* :: */0,
               [/* record */0,
                "events",
                info_events(ppf),
                "list events in MODULE (default is current module)."],
               0]]]],
           0;
    };

init(Format["std_formatter"]);
module["exports"]={"interprete_line":interprete_line,"line_loop":line_loop};

