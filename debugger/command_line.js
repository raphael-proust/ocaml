// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Ctype=require("./ctype.js");
var Question=require("./question.js");
var Parser=require("./parser.js");
var Show_information=require("./show_information.js");
var Frames=require("./frames.js");
var History=require("./history.js");
var Program_management=require("./program_management.js");
var Breakpoints=require("./breakpoints.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Env=require("./env.js");
var Symbols=require("./symbols.js");
var Printf=require("./printf.js");
var Events=require("./events.js");
var Checkpoints=require("./checkpoints.js");
var Envaux=require("./envaux.js");
var Format=require("./format.js");
var Program_loading=require("./program_loading.js");
var Printval=require("./printval.js");
var Primitives=require("./primitives.js");
var Misc=require("./misc.js");
var Lexer=require("./lexer.js");
var Unix_tools=require("./unix_tools.js");
var Unix=require("./unix.js");
var Filename=require("./filename.js");
var Lexing=require("./lexing.js");
var Parsing=require("./parsing.js");
var Parameters=require("./parameters.js");
var Eval=require("./eval.js");
var Debugger_config=require("./debugger_config.js");
var Pos=require("./pos.js");
var Longident=require("./longident.js");
var Show_source=require("./show_source.js");
var Int64ops=require("./int64ops.js");
var Source=require("./source.js");
var Loadprinter=require("./loadprinter.js");
var Hashtbl=require("./hashtbl.js");
var Input_handling=require("./input_handling.js");
var Time_travel=require("./time_travel.js");
var Config=require("./config.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Debugcom=require("./debugcom.js");


var instruction_list=[0,/* [] */0];

var variable_list=[0,/* [] */0];

var info_list=[0,/* [] */0];

var
 error=
  function(text)
   {Format["eprintf"]
     ([/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
       "%s@."],
      text);
    throw Debugger_config["Toplevel"]};

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
      default:return /* () */0}
    };

var eol=Parser["end_of_line"](Lexer["lexeme"]);

var
 matching_elements=
  function(list,name,instr)
   {return List["filter"]
            (function(a){return Primitives["isprefix"](instr,name(a))},
             list[1])};

var
 all_matching_instructions=
  function(param)
   {return matching_elements(instruction_list,function(i){return i[1]},param)};

var
 matching_instructions=
  function(instr)
   {var all=all_matching_instructions(instr);
    
    var prio=List["filter"](function(i){return i[2]},all);
    
    return prio===/* [] */0?all:prio};

var
 matching_variables=
  function(param)
   {return matching_elements(variable_list,function(v){return v[1]},param)};

var
 matching_infos=
  function(param)
   {return matching_elements(info_list,function(i){return i[1]},param)};

var
 find_ident=
  function(name,matcher,action,alternative,ppf,lexbuf)
   {var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
    
    if(match)
     {var match$1=matcher(match[1]);
      
      return match$1
              ?match$1[2]
                ?error
                  (Pervasives["^"]("Ambiguous ",Pervasives["^"](name,".")))
                :action(match$1[1],ppf,lexbuf)
              :error(Pervasives["^"]("Unknown ",Pervasives["^"](name,".")))}
    else
     {return alternative(ppf)}
    };

var
 find_variable=
  function(action,alternative,ppf,lexbuf)
   {return find_ident
            ("variable name",matching_variables,action,alternative,ppf,lexbuf)};

var
 find_info=
  function(action,alternative,ppf,lexbuf)
   {return find_ident
            ("info command",matching_infos,action,alternative,ppf,lexbuf)};

var
 add_breakpoint_at_pc=
  function(pc)
   {try
     {return Breakpoints["new_breakpoint"](Symbols["any_event_at_pc"](pc))}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {Format["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "Can't add breakpoint at pc ",
            [/* Int */4,
             /* Int_i */3,
             /* No_padding */0,
             /* No_precision */0,
             [/* String_literal */11,
              ": no event there.",
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]]]],
           "Can't add breakpoint at pc %i: no event there.@."],
          pc);
        throw Debugger_config["Toplevel"]}
      else
       {throw exn}
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
                    (Symbols["any_event_at_pc"](pc+n*4))}
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return try_add(n+1)}
            else
             {throw exn}
            }
          }
        else
         {return error
                  ("Can't add breakpoint at beginning of function: no event there")}
        };
    
    return try_add(0)};

var
 module_of_longident=
  function(id)
   {return id
            ?/* Some */[0,$$String["concat"](".",Longident["flatten"](id[1]))]
            :/* None */0};

var
 convert_module=
  function(mdle)
   {if(mdle)
     {var m=mdle[1];
      
      return $$String["capitalize"]
              (Filename["check_suffix"](m,".ml")
                ?Filename["chop_suffix"](m,".ml")
                :m)}
    else
     {try
       {return Events["get_current_event"](/* () */0)[2]}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return error("Not in a module.")}
        else
         {throw exn}
        }
      }
    };

var current_line=[0,""];

var
 interprete_line=
  function(ppf,line)
   {current_line[1]=line;
    var lexbuf=Lexing["from_string"](line);
    
    try
     {var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
      
      if(match)
       {var l=matching_instructions(match[1]);
        
        if(l)
         {if(l[2])
           {return error("Ambiguous command.")}
          else
           {var i=l[1];
            
            i[3](ppf,lexbuf);
            Input_handling["resume_user_input"](/* () */0);
            return i[4]}
          }
        else
         {return error("Unknown command.")}
        }
      else
       {Input_handling["resume_user_input"](/* () */0);return /* false */0}
      }
    catch(exn)
     {var exit;
      
      if(exn===Parsing["Parse_error"])
       {return error("Syntax error.")}
      else
       {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {switch(exn[2])
           {case "int_of_string":return error("Integer overflow");
            default:exit=172;}
          }
        else
         {exit=172;}
        }
      
      switch(exit){case 172:throw exn}
      }
    };

var
 line_loop=
  function(ppf,line_buffer)
   {Input_handling["resume_user_input"](/* () */0);
    var previous_line="";
    
    try
     {while(/* true */1)
       {if(Program_management["loaded"][1])
         {History["add_current_time"](/* () */0)}
        
        var new_line=Primitives["string_trim"](Lexer["line"](line_buffer));
        
        var
         line=
          CamlPrimitive["caml_string_notequal"](new_line,"")
           ?new_line
           :previous_line;
        
        previous_line="";
        
        if(interprete_line(ppf,line)){previous_line=line;}
        }
      return 0}
    catch(exn)
     {if(exn===Pervasives["Exit"])
       {return Input_handling["stop_user_input"](/* () */0)}
      else
       {throw exn}
      }
    };

var
 instr_cd=
  function(ppf,lexbuf)
   {var dir=Parser["argument_eol"](Lexer["argument"],lexbuf);
    
    if(Program_management["ask_kill_program"](/* () */0))
     {try
       {return CamlPrimitive["caml_sys_chdir"](Unix_tools["expand_path"](dir))}
      catch(exn)
       {if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
         {return error(exn[2])}
        else
         {throw exn}
        }
      }
    else
     {return 0}
    };

var
 instr_shell=
  function(ppf,lexbuf)
   {var cmdarg=Parser["argument_list_eol"](Lexer["argument"],lexbuf);
    
    var cmd=$$String["concat"](" ",cmdarg);
    
    var err=CamlPrimitive["caml_sys_system_command"](cmd);
    
    return err!==0
            ?Format["eprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Shell command ",
                 [/* Caml_string */3,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " failed with exit code ",
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* Char_literal */12,
                     10,
                     [/* Flush */10,/* End_of_format */0]]]]]],
                "Shell command %S failed with exit code %d\n%!"],
               cmd,
               err)
            :0};

var
 instr_env=
  function(ppf,lexbuf)
   {var cmdarg=Parser["argument_list_eol"](Lexer["argument"],lexbuf);
    
    var cmdarg$1=Primitives["string_trim"]($$String["concat"](" ",cmdarg));
    
    if(CamlPrimitive["caml_string_notequal"](cmdarg$1,""))
     {if(Program_management["ask_kill_program"](/* () */0))
       {try
         {var eqpos=$$String["index"](cmdarg$1,61);
          
          if(eqpos===0){throw CamlPrimitive["caml_global_data"]["Not_found"]}
          
          var name=$$String["sub"](cmdarg$1,0,eqpos);
          
          var
           value=
            $$String["sub"](cmdarg$1,eqpos+1,cmdarg$1["length"]-eqpos-1);
          
          return Debugger_config["environment"][1]=
                 /* :: */[0,
                  /* tuple */[0,name,value],
                  List["remove_assoc"](name,Debugger_config["environment"][1])],
                 0}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return Format["eprintf"]
                    ([/* Format */0,
                      [/* String_literal */11,
                       "Environment variable must be in name=value format\n",
                       [/* Flush */10,/* End_of_format */0]],
                      "Environment variable must be in name=value format\n%!"])}
          else
           {throw exn}
          }
        }
      else
       {return List["iter"]
                (function(param)
                  {return Format["printf"]
                           ([/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               61,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,
                                 10,
                                 [/* Flush */10,/* End_of_format */0]]]]],
                             "%s=%s\n%!"],
                            param[1],
                            param[2])},
                 List["rev"](Debugger_config["environment"][1]))}
      }
    else
     {return 0}
    };

var
 instr_pwd=
  function(ppf,lexbuf)
   {eol(lexbuf);
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Formatting_lit */17,
                /* Flush_newline */4,
                /* End_of_format */0]],
              "%s@."],
             CamlPrimitive["caml_sys_getcwd"](/* () */0))};

var
 instr_dir=
  function(ppf,lexbuf)
   {var new_directory=Parser["argument_list_eol"](Lexer["argument"],lexbuf);
    
    if(new_directory===/* [] */0)
     {if(Question["yes_or_no"]("Reinitialize directory list"))
       {Config["load_path"][1]=
        Parameters["default_load_path"][1],
        Envaux["reset_cache"](/* () */0),
        Hashtbl["clear"](Debugger_config["load_path_for"]),
        Source["flush_buffer_list"](/* () */0)}
      }
    else
     {var new_directory$prime=List["rev"](new_directory);
      
      var exit;
      
      if(new_directory$prime)
       {var match=new_directory$prime[2];
        
        if(match)
         {var tl=match[2];
          
          var mdl=new_directory$prime[1];
          
          if
           (CamlPrimitive["caml_string_equal"]
             ($$String["lowercase"](match[1]),"for")&&
            List["length"](tl)>
            0)
           {List["iter"]
             (function(x)
               {return Parameters["add_path_for"]
                        (mdl,Unix_tools["expand_path"](x))},
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
            {return Parameters["add_path"](Unix_tools["expand_path"](x))},
           new_directory$prime);
         break
        }
      }
    
    var
     print_dirs=
      function(ppf,l)
       {return List["iter"]
                (function(x)
                  {return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String */2,/* No_padding */0,/* End_of_format */0]],
                             "@ %s"],
                            x)},
                 l)};
    
    Format["fprintf"]
     (ppf,
      [/* Format */0,
       [/* Formatting_gen */18,
        [/* Open_box */1,
         [/* Format */0,
          [/* String_literal */11,"<2>",/* End_of_format */0],
          "<2>"]],
        [/* String_literal */11,
         "Directories: ",
         [/* Alpha */15,
          [/* Formatting_lit */17,
           /* Close_box */0,
           [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]]]],
       "@[<2>Directories: %a@]@."],
      print_dirs,
      Config["load_path"][1]);
    return Hashtbl["iter"]
            (function(mdl,dirs)
              {return Format["fprintf"]
                       (ppf,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "Source directories for ",
                           [/* String */2,
                            /* No_padding */0,
                            [/* String_literal */11,
                             ": ",
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Formatting_lit */17,
                                /* Flush_newline */4,
                                /* End_of_format */0]]]]]]],
                         "@[<2>Source directories for %s: %a@]@."],
                        mdl,
                        print_dirs,
                        dirs)},
             Debugger_config["load_path_for"])};

var
 instr_kill=
  function(ppf,lexbuf)
   {eol(lexbuf);
    if(!Program_management["loaded"][1])
     {error("The program is not being run.")}
    
    return Question["yes_or_no"]("Kill the program being debugged")
            ?(Program_management["kill_program"](/* () */0),
              Show_source["show_no_point"](/* () */0))
            :0};

var
 instr_run=
  function(ppf,lexbuf)
   {eol(lexbuf);
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["run"](/* () */0);
    return Show_information["show_current_event"](ppf)};

var
 instr_reverse=
  function(ppf,lexbuf)
   {eol(lexbuf);
    check_not_windows("reverse");
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["back_run"](/* () */0);
    return Show_information["show_current_event"](ppf)};

var
 instr_step=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_int64_eol"](Lexer["lexeme"],lexbuf);
    
    var step_count=match?match[1]:Int64ops["_1"];
    
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["step"](step_count);
    return Show_information["show_current_event"](ppf)};

var
 instr_back=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_int64_eol"](Lexer["lexeme"],lexbuf);
    
    var step_count=match?match[1]:Int64ops["_1"];
    
    check_not_windows("backstep");
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["step"](Int64ops["--"](Int64ops["_0"],step_count));
    return Show_information["show_current_event"](ppf)};

var
 instr_finish=
  function(ppf,lexbuf)
   {eol(lexbuf);
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["finish"](/* () */0);
    return Show_information["show_current_event"](ppf)};

var
 instr_next=
  function(ppf,lexbuf)
   {var match=Parser["opt_integer_eol"](Lexer["lexeme"],lexbuf);
    
    var step_count=match?match[1]:1;
    
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["next"](step_count);
    return Show_information["show_current_event"](ppf)};

var
 instr_start=
  function(ppf,lexbuf)
   {eol(lexbuf);
    check_not_windows("start");
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["start"](/* () */0);
    return Show_information["show_current_event"](ppf)};

var
 instr_previous=
  function(ppf,lexbuf)
   {var match=Parser["opt_integer_eol"](Lexer["lexeme"],lexbuf);
    
    var step_count=match?match[1]:1;
    
    check_not_windows("previous");
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["previous"](step_count);
    return Show_information["show_current_event"](ppf)};

var
 instr_goto=
  function(ppf,lexbuf)
   {var time=Parser["int64_eol"](Lexer["lexeme"],lexbuf);
    
    Program_management["ensure_loaded"](/* () */0);
    Printval["reset_named_values"](/* () */0);
    Time_travel["go_to"](time);
    return Show_information["show_current_event"](ppf)};

var instr_quit=function(param){throw Pervasives["Exit"]};

var
 print_variable_list=
  function(ppf)
   {var
     pr_vars=
      function(ppf)
       {return List["iter"]
                (function(v)
                  {return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               /* End_of_format */0]],
                             "%s@ "],
                            v[1])})};
    
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String_literal */11,
               "List of variables: ",
               [/* Alpha */15,
                [/* Formatting_lit */17,
                 /* Flush_newline */4,
                 /* End_of_format */0]]],
              "List of variables: %a@."],
             pr_vars,
             variable_list[1])};

var
 print_info_list=
  function(ppf)
   {var
     pr_infos=
      function(ppf)
       {return List["iter"]
                (function(i)
                  {return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               /* End_of_format */0]],
                             "%s@ "],
                            i[1])})};
    
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String_literal */11,
               "List of info commands: ",
               [/* Alpha */15,
                [/* Formatting_lit */17,
                 /* Flush_newline */4,
                 /* End_of_format */0]]],
              "List of info commands: %a@."],
             pr_infos,
             info_list[1])};

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
                    {return Format["fprintf"]
                             (ppf$1,
                              [/* Format */0,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Formatting_lit */17,
                                 /* Flush_newline */4,
                                 /* End_of_format */0]],
                               "%s@."],
                              i)},
                   l)}
        catch(exn)
         {return Input_handling["remove_file"]
                  (Input_handling["user_channel"][1])}
        };
    
    var
     match_list=
      function(lexbuf)
       {var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
        
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
                {return CamlPrimitive["caml_string_equal"](x,"help")
                         ?match_list(lexbuf)
                         :[/* :: */0,"help",/* [] */0]}
               break;
              case "info":
               if(l[2])
                {exit=122;}
               else
                {if(CamlPrimitive["caml_string_equal"](x,"info"))
                  {var
                    match$1=
                     Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
                   
                   if(match$1)
                    {var ident=match$1[1];
                     
                     var l$1=matching_infos(ident);
                     
                     var exit$2;
                     
                     if(l$1)
                      {if(l$1[2])
                        {exit$2=121;}
                       else
                        {var i$1=l$1[1];
                         
                         return CamlPrimitive["caml_string_equal"](i$1[1],ident)
                                 ?/* [] */0
                                 :/* :: */[0,i$1[1],/* [] */0]}
                       }
                     else
                      {exit$2=121;}
                     
                     switch(exit$2)
                      {case 121:return List["map"](function(i){return i[1]},l$1)}
                     }
                   else
                    {return List["map"](function(i){return i[1]},info_list[1])}
                   }
                 else
                  {return [/* :: */0,"info",/* [] */0]}
                 }
               break;
              case "set":exit$1=123;break;
              case "show":exit$1=123;break;
              default:exit$1=124;}
            
            switch(exit$1)
             {case 124:
               if(l[2])
                {exit=122;}
               else
                {return CamlPrimitive["caml_string_equal"](x,i[1])
                         ?/* [] */0
                         :/* :: */[0,i[1],/* [] */0]}
               break;
              case 123:
               if(l[2])
                {exit=122;}
               else
                {if(CamlPrimitive["caml_string_equal"](x,i_full))
                  {var
                    match$2=
                     Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
                   
                   if(match$2)
                    {var ident$1=match$2[1];
                     
                     var l$2=matching_variables(ident$1);
                     
                     var exit$3;
                     
                     if(l$2)
                      {if(l$2[2])
                        {exit$3=120;}
                       else
                        {var v=l$2[1];
                         
                         return CamlPrimitive["caml_string_equal"](v[1],ident$1)
                                 ?/* [] */0
                                 :/* :: */[0,v[1],/* [] */0]}
                       }
                     else
                      {exit$3=120;}
                     
                     switch(exit$3)
                      {case 120:return List["map"](function(v){return v[1]},l$2)}
                     }
                   else
                    {return List["map"]
                             (function(v){return v[1]},variable_list[1])}
                   }
                 else
                  {return /* :: */[0,i_full,/* [] */0]}
                 }
               break
              }
            }
          else
           {exit=122;}
          
          switch(exit)
           {case 122:return List["map"](function(i){return i[1]},l)}
          }
        else
         {return List["map"](function(i){return i[1]},instruction_list[1])}
        };
    
    return print_list(match_list(lexbuf))};

var
 instr_help=
  function(ppf,lexbuf)
   {var
     pr_instrs=
      function(ppf)
       {return List["iter"]
                (function(i)
                  {return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               /* End_of_format */0]],
                             "%s@ "],
                            i[1])})};
    
    var match=Parser["identifier_or_eol"](Lexer["lexeme"],lexbuf);
    
    if(match)
     {var x=match[1];
      
      var
       print_help=
        function(nm,hlp)
         {eol(lexbuf);
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ": ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* Formatting_lit */17,
                        /* Flush_newline */4,
                        /* End_of_format */0]]]],
                    "%s: %s@."],
                   nm,
                   hlp)};
      
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
                     (function(i,param,param$1)
                       {return print_help(Pervasives["^"]("info ",i[1]),i[3])},
                      function(ppf)
                       {print_help
                         ("info","display infos about the program being debugged.");
                        return print_info_list(ppf)},
                      ppf,
                      lexbuf)}
           break;
          case "set":
           if(l[2])
            {exit=114;}
           else
            {return find_variable
                     (function(v,param,param$1)
                       {return print_help
                                (Pervasives["^"]("set ",v[1]),Pervasives["^"]("set ",v[3]))},
                      function(ppf)
                       {print_help("set","set debugger variable.");
                        return print_variable_list(ppf)},
                      ppf,
                      lexbuf)}
           break;
          case "show":
           if(l[2])
            {exit=114;}
           else
            {return find_variable
                     (function(v,param,param$1)
                       {return print_help
                                (Pervasives["^"]("show ",v[1]),
                                 Pervasives["^"]("show ",v[3]))},
                      function(v)
                       {print_help("show","display debugger variable.");
                        return print_variable_list(ppf)},
                      ppf,
                      lexbuf)}
           break;
          default:exit$1=115;}
        
        switch(exit$1)
         {case 115:if(l[2]){exit=114;}else{return print_help(i[1],i[5])}break}
        }
      else
       {eol(lexbuf);
        return Format["fprintf"]
                (ppf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "No matching command.",
                   [/* Formatting_lit */17,
                    /* Flush_newline */4,
                    /* End_of_format */0]],
                  "No matching command.@."])}
      
      switch(exit)
       {case 114:
         eol(lexbuf);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    'Ambiguous command "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '": ',
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Flush_newline */4,
                        /* End_of_format */0]]]]],
                   'Ambiguous command "%s": %a@.'],
                  x,
                  pr_instrs,
                  l)
        }
      }
    else
     {return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "List of commands: ",
                 [/* Alpha */15,
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]]],
                "List of commands: %a@."],
               pr_instrs,
               instruction_list[1])}
    };

var
 print_expr=
  function(depth,ev,env,ppf,expr)
   {try
     {var match=Eval["expression"](ev,env,expr);
      
      return Printval["print_named_value"]
              (depth,expr,env,match[1],ppf,match[2])}
    catch(exn)
     {if(exn[1]===Eval["Error"])
       {Eval["report_error"](ppf,exn[2]);throw Debugger_config["Toplevel"]}
      else
       {throw exn}
      }
    };

var
 env_of_event=
  function(param)
   {if(param)
     {var ev=param[1];return Envaux["env_from_summary"](ev[6],ev[7])}
    else
     {return Env["empty"]}
    };

var
 print_command=
  function(depth,ppf,lexbuf)
   {var exprs=Parser["expression_list_eol"](Lexer["lexeme"],lexbuf);
    
    Program_management["ensure_loaded"](/* () */0);
    var env;
    try
     {env=env_of_event(Frames["selected_event"][1]);}
    catch(exn)
     {if(exn[1]===Envaux["Error"])
       {Envaux["report_error"](ppf,exn[2]);throw Debugger_config["Toplevel"]}
      else
       {throw exn}
      }
    
    return List["iter"]
            (function(param)
              {return print_expr
                       (depth,Frames["selected_event"][1],env,ppf,param)},
             exprs)};

var
 instr_print=
  function(ppf,lexbuf)
   {return print_command(Printval["max_printer_depth"][1],ppf,lexbuf)};

var instr_display=function(ppf,lexbuf){return print_command(1,ppf,lexbuf)};

var
 extract_filename=
  function(arg)
   {var l=arg["length"];
    
    var pos1=l>0&&arg["charCodeAt"](0)===34?1:0;
    
    var pos2=l>0&&arg["charCodeAt"](l-1)===34?l-1:l;
    
    return $$String["sub"](arg,pos1,pos2-pos1)};

var
 instr_source=
  function(ppf,lexbuf)
   {var
     file=
      extract_filename(Parser["argument_eol"](Lexer["argument"],lexbuf));
    
    var old_state=Input_handling["interactif"][1];
    
    var old_channel=Input_handling["user_channel"][1];
    
    var io_chan;
    try
     {io_chan=
      Primitives["io_channel_of_descr"]
       (Unix["openfile"]
         (Misc["find_in_path"]
           (Config["load_path"][1],Unix_tools["expand_path"](file)),
          [/* :: */0,/* O_RDONLY */0,/* [] */0],
          0));
      }
    catch(x)
     {if(x===CamlPrimitive["caml_global_data"]["Not_found"])
       {io_chan=error("Source file not found.");}
      else
       {if(x[1]===Unix["Unix_error"])
         {Unix_tools["report_error"](x);throw Debugger_config["Toplevel"]}
        else
         {throw x}
        }
      }
    
    try
     {Input_handling["interactif"][1]=/* false */0;
      Input_handling["user_channel"][1]=io_chan;
      line_loop
       (ppf,Lexing["from_function"](Input_handling["read_user_input"]));
      Primitives["close_io"](io_chan);
      Input_handling["interactif"][1]=old_state;
      return Input_handling["user_channel"][1]=old_channel,0}
    catch(x$1)
     {Input_handling["stop_user_input"](/* () */0);
      Primitives["close_io"](io_chan);
      Input_handling["interactif"][1]=old_state;
      Input_handling["user_channel"][1]=old_channel;
      throw x$1}
    };

var
 instr_set=
  function(param,param$1)
   {return find_variable
            (function(param$2,ppf,lexbuf){return param$2[2][1](lexbuf)},
             function(ppf){return error("Argument required.")},
             param,
             param$1)};

var
 instr_show=
  function(param,param$1)
   {return find_variable
            (function(param$2,ppf,lexbuf)
              {eol(lexbuf);return param$2[2][2](ppf)},
             function(ppf)
              {return List["iter"]
                       (function(param$2)
                         {Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,": ",/* End_of_format */0]],
                             "%s: "],
                            param$2[1]);
                          return param$2[2][2](ppf)},
                        variable_list[1])},
             param,
             param$1)};

var
 instr_info=
  function(param,param$1)
   {return find_info
            (function(i,ppf,lexbuf){return i[2](lexbuf)},
             function(ppf)
              {return error
                       ('"info" must be followed by the name of an info command.')},
             param,
             param$1)};

var
 instr_break=
  function(ppf,lexbuf)
   {var argument=Parser["break_argument_eol"](Lexer["lexeme"],lexbuf);
    
    Program_management["ensure_loaded"](/* () */0);
    if(typeof argument==="number")
     {switch(argument)
       {case 0:
         var match=Frames["selected_event"][1];
         
         return match
                 ?Breakpoints["new_breakpoint"](match[1])
                 :error("Can't add breakpoint at this point.")
        }}
    else
     {switch(argument[0])
       {case 0:return add_breakpoint_at_pc(argument[1]);
        case 1:
         var env;
         try
          {env=env_of_event(Frames["selected_event"][1]);}
         catch(exn)
          {if(exn[1]===Envaux["Error"])
            {Envaux["report_error"](ppf,exn[2]);
             throw Debugger_config["Toplevel"]}
           else
            {throw exn}
           }
         
         try
          {var
            match$1=
             Eval["expression"](Frames["selected_event"][1],env,argument[1]);
           
           var match$2=Ctype["repr"](match$1[2])[1];
           
           var exit;
           
           if(typeof match$2==="number")
            {switch(match$2){default:exit=75;}}
           else
            {switch(match$2[0])
              {case 1:
                return add_breakpoint_after_pc
                        (Debugcom["Remote_value"][12](match$1[1]));
               default:exit=75;}}
           
           switch(exit)
            {case 75:
              Format["eprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "Not a function.",
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]],
                 "Not a function.@."]);
              throw Debugger_config["Toplevel"]
             }
           }
         catch(exn$1)
          {if(exn$1[1]===Eval["Error"])
            {Eval["report_error"](ppf,exn$1[2]);
             throw Debugger_config["Toplevel"]}
           else
            {throw exn$1}
           }
         break;
        case 2:
         var column=argument[3];
         
         var line=argument[2];
         
         var module_name=convert_module(module_of_longident(argument[1]));
         
         var $js;
         try
          {var ev=Symbols["event_at_pos"](module_name,0);
           
           var init=Lexing["dummy_pos"];
           
           var
            ev_pos=
             /* record */[0,Events["get_pos"](ev)[1],init[2],init[3],init[4]];
           
           var buffer;
           try
            {buffer=Source["get_buffer"](ev_pos,module_name);}
           catch(exn$2)
            {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
              {Format["eprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "No source file for ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,
                     46,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]],
                  "No source file for %s.@."],
                 module_name);
               throw Debugger_config["Toplevel"]}
             else
              {throw exn$2}
             }
           
           $js=
           column
            ?Symbols["event_near_pos"]
              (module_name,Source["point_of_coord"](buffer,line,column[1]))
            :Symbols["event_at_pos"]
              (module_name,Source["pos_of_line"](buffer,line)[1]);
           }
         catch(exn$3)
          {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
            {Format["eprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Can't find any event there.",
                 [/* Formatting_lit */17,
                  /* Flush_newline */4,
                  /* End_of_format */0]],
                "Can't find any event there.@."]);
             throw Debugger_config["Toplevel"]}
           else
            {if(exn$3===Primitives["Out_of_range"])
              {Format["eprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "Position out of range.",
                   [/* Formatting_lit */17,
                    /* Flush_newline */4,
                    /* End_of_format */0]],
                  "Position out of range.@."]);
               throw Debugger_config["Toplevel"]}
             else
              {throw exn$3}
             }
           }
         return Breakpoints["new_breakpoint"]($js);
        case 3:
         try
          {return Breakpoints["new_breakpoint"]
                   (Symbols["event_near_pos"]
                     (convert_module(module_of_longident(argument[1])),
                      argument[2]))}
         catch(exn$4)
          {if(exn$4===CamlPrimitive["caml_global_data"]["Not_found"])
            {return Format["eprintf"]
                     ([/* Format */0,
                       [/* String_literal */11,
                        "Can't find any event there.",
                        [/* Formatting_lit */17,
                         /* Flush_newline */4,
                         /* End_of_format */0]],
                       "Can't find any event there.@."])}
           else
            {throw exn$4}
           }
         break
        }}
    };

var
 instr_delete=
  function(ppf,lexbuf)
   {var breakpoints=Parser["integer_list_eol"](Lexer["lexeme"],lexbuf);
    
    return breakpoints
            ?List["iter"]
              (function(x)
                {try
                  {return Breakpoints["remove_breakpoint"](x)}
                 catch(exn)
                  {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                    {return /* () */0}
                   else
                    {throw exn}
                   }
                 },
               breakpoints)
            :Breakpoints["breakpoints_count"](/* () */0)!==
              0&&
              Question["yes_or_no"]("Delete all breakpoints")
              ?Breakpoints["remove_all_breakpoints"](/* () */0)
              :0};

var
 instr_frame=
  function(ppf,lexbuf)
   {var match=Parser["opt_integer_eol"](Lexer["lexeme"],lexbuf);
    
    var frame_number=match?match[1]:Frames["current_frame"][1];
    
    Program_management["ensure_loaded"](/* () */0);
    try
     {Frames["select_frame"](frame_number);
      return Show_information["show_current_frame"](ppf,/* true */1)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return error
                (Pervasives["^"]
                  ("No frame number ",
                   Pervasives["^"]
                    (Pervasives["string_of_int"](frame_number),".")))}
      else
       {throw exn}
      }
    };

var
 instr_backtrace=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_integer_eol"](Lexer["lexeme"],lexbuf);
    
    var number=match?match[1]:0;
    
    Program_management["ensure_loaded"](/* () */0);
    var match$1=Checkpoints["current_report"](/* () */0);
    
    var exit;
    
    if(match$1)
     {var match$2=match$1[1][1];
      
      var exit$1;
      
      if(match$2!==2)
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
                
                frame_counter[0]++;
                if(frame_counter[1]>=last_frame)
                 {Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "(More frames follow)",
                      [/* Formatting_lit */17,
                       /* Flush_newline */4,
                       /* End_of_format */0]],
                     "(More frames follow)@."])}
                
                return frame_counter[1]<last_frame}
              else
               {Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "(Encountered a function with no debugging information)",
                    [/* Formatting_lit */17,
                     /* Flush_newline */4,
                     /* End_of_format */0]],
                   "(Encountered a function with no debugging information)@."]);
                return /* false */0}
              };
          
          Format["fprintf"]
           (ppf,
            [/* Format */0,
             [/* String_literal */11,
              "Backtrace:",
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]],
             "Backtrace:@."]);
          if(number===0)
           {return Frames["do_backtrace"]
                    (function(param)
                      {return print_frame(0,Pervasives["max_int"],param)})}
          else
           {if(number>0)
             {return Frames["do_backtrace"]
                      (function(param){return print_frame(0,number,param)})}
            else
             {var num_frames=Frames["stack_depth"](/* () */0);
              
              return num_frames<0
                      ?Format["fprintf"]
                        (ppf,
                         [/* Format */0,
                          [/* String_literal */11,
                           "(Encountered a function with no debugging information)",
                           [/* Formatting_lit */17,
                            /* Flush_newline */4,
                            /* End_of_format */0]],
                          "(Encountered a function with no debugging information)@."])
                      :Frames["do_backtrace"]
                        (function(param)
                          {return print_frame
                                   (num_frames+number,Pervasives["max_int"],param)})}
            }
          }
        }
      else
       {exit$1=64;}
      
      switch(exit$1){case 64:exit=63;break}
      }
    else
     {exit=63;}
    
    switch(exit){case 63:return /* () */0}
    };

var
 instr_up=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_integer_eol"](Lexer["lexeme"],lexbuf);
    
    var offset=match?match[1]:1;
    
    Program_management["ensure_loaded"](/* () */0);
    try
     {Frames["select_frame"](Frames["current_frame"][1]+offset);
      return Show_information["show_current_frame"](ppf,/* true */1)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return error("No such frame.")}
      else
       {throw exn}
      }
    };

var
 instr_down=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_integer_eol"](Lexer["lexeme"],lexbuf);
    
    var offset=match?match[1]:1;
    
    Program_management["ensure_loaded"](/* () */0);
    try
     {Frames["select_frame"](Frames["current_frame"][1]-offset);
      return Show_information["show_current_frame"](ppf,/* true */1)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return error("No such frame.")}
      else
       {throw exn}
      }
    };

var
 instr_last=
  function(ppf,lexbuf)
   {var match=Parser["opt_signed_int64_eol"](Lexer["lexeme"],lexbuf);
    
    var count=match?match[1]:Int64ops["_1"];
    
    check_not_windows("last");
    Printval["reset_named_values"](/* () */0);
    Time_travel["go_to"](History["previous_time"](count));
    return Show_information["show_current_event"](ppf)};

var
 instr_list=
  function(ppf,lexbuf)
   {var match=Parser["list_arguments_eol"](Lexer["lexeme"],lexbuf);
    
    var e=match[3];
    
    var beg=match[2];
    
    var mo=match[1];
    
    var match$1;
    try
     {match$1=Frames["selected_point"](/* () */0);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {match$1=[/* tuple */0,"",-1,-1];}
      else
       {throw exn}
      }
    
    var column=match$1[3];
    
    var line=match$1[2];
    
    var mdle=convert_module(module_of_longident(mo));
    
    var pos=Lexing["dummy_pos"];
    
    var buffer;
    try
     {buffer=Source["get_buffer"](pos,mdle);}
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {buffer=
        error
         (Pervasives["^"]("No source file for ",Pervasives["^"](mdle,".")));
        }
      else
       {throw exn$1}
      }
    
    var point=column!==-1?Source["point_of_coord"](buffer,line,1)+column:-1;
    
    var beginning;
    if(beg)
     {beginning=beg[1];}
    else
     {if(mo!==/* None */0||line===-1)
       {beginning=1;}
      else
       {try
         {beginning=Pervasives["max"](1,line-10);}
        catch(exn$2)
         {if(exn$2===Primitives["Out_of_range"])
           {beginning=1;}
          else
           {throw exn$2}
          }
        }
      }
    
    var en=e?e[1]:beginning+20;
    
    return CamlPrimitive["caml_string_equal"](mdle,match$1[1])
            ?Show_source["show_listing"]
              (pos,
               mdle,
               beginning,
               en,
               point,
               Events["current_event_is_before"](/* () */0))
            :Show_source["show_listing"](pos,mdle,beginning,en,-1,/* true */1)};

var
 raw_variable=
  function(kill,name)
   {return /* tuple */[0,
            function(lexbuf)
             {var argument=Parser["argument_eol"](Lexer["argument"],lexbuf);
              
              return !kill||Program_management["ask_kill_program"](/* () */0)
                      ?(name[1]=argument,0)
                      :0},
            function(ppf)
             {return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]],
                        "%s@."],
                       name[1])}]};

var
 raw_line_variable=
  function(kill,name)
   {return /* tuple */[0,
            function(lexbuf)
             {var
               argument=
                Parser["argument_eol"](Lexer["line_argument"],lexbuf);
              
              return !kill||Program_management["ask_kill_program"](/* () */0)
                      ?(name[1]=argument,0)
                      :0},
            function(ppf)
             {return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]],
                        "%s@."],
                       name[1])}]};

var
 integer_variable=
  function(kill,min,msg,name)
   {return /* tuple */[0,
            function(lexbuf)
             {var argument=Parser["integer_eol"](Lexer["lexeme"],lexbuf);
              
              return argument<min
                      ?Pervasives["print_endline"](msg)
                      :!kill||Program_management["ask_kill_program"](/* () */0)
                        ?(name[1]=argument,0)
                        :0},
            function(ppf)
             {return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Int */4,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]],
                        "%i@."],
                       name[1])}]};

var
 int64_variable=
  function(kill,min,msg,name)
   {return /* tuple */[0,
            function(lexbuf)
             {var argument=Parser["int64_eol"](Lexer["lexeme"],lexbuf);
              
              return argument<min
                      ?Pervasives["print_endline"](msg)
                      :!kill||Program_management["ask_kill_program"](/* () */0)
                        ?(name[1]=argument,0)
                        :0},
            function(ppf)
             {return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Int64 */7,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]],
                        "%Li@."],
                       name[1])}]};

var
 boolean_variable=
  function(kill,name)
   {return /* tuple */[0,
            function(lexbuf)
             {var match=Parser["identifier_eol"](Lexer["lexeme"],lexbuf);
              
              var argument;
              var exit;
              
              switch(match)
               {case "of":exit=28;break;
                case "off":exit=28;break;
                case "on":argument=/* true */1;break;
                default:exit=29;}
              
              switch(exit)
               {case 29:argument=error("Syntax error.");break;
                case 28:argument=/* false */0;break
                }
              
              return !kill||Program_management["ask_kill_program"](/* () */0)
                      ?(name[1]=argument,0)
                      :0},
            function(ppf)
             {return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]],
                        "%s@."],
                       name[1]?"on":"off")}]};

var
 path_variable=
  function(kill,name)
   {return /* tuple */[0,
            function(lexbuf)
             {var argument=Parser["argument_eol"](Lexer["argument"],lexbuf);
              
              return !kill||Program_management["ask_kill_program"](/* () */0)
                      ?(name[1]=
                        Unix_tools["make_absolute"]
                         (Unix_tools["expand_path"](argument)),
                        0)
                      :0},
            function(ppf)
             {return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Flush_newline */4,
                          /* End_of_format */0]],
                        "%s@."],
                       name[1])}]};

var
 loading_mode_variable=
  function(ppf)
   {return /* tuple */[0,
            function(param)
             {return find_ident
                      ("loading mode",
                       function(param$1)
                        {return matching_elements
                                 ([0,Program_loading["loading_modes"]],
                                  function(prim){return prim[1]},
                                  param$1)},
                       function(param$1,ppf,lexbuf)
                        {eol(lexbuf);
                         return Program_loading["set_launching_function"](param$1[2])},
                       function(ppf){return error("Syntax error.")},
                       ppf,
                       param)},
            function(ppf)
             {var
               find=
                function(param)
                 {if(param)
                   {var match=param[1];
                    
                    return match[2]===Program_loading["launching_func"][1]
                            ?Format["fprintf"]
                              (ppf,
                               [/* Format */0,
                                [/* String */2,/* No_padding */0,/* End_of_format */0],
                                "%s"],
                               match[1])
                            :find(param[2])}
                  else
                   {return /* () */0}
                  };
              
              find(Program_loading["loading_modes"]);
              return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         /* Flush_newline */4,
                         /* End_of_format */0],
                        "@."])}]};

var
 follow_fork_variable=
  /* tuple */[0,
   function(lexbuf)
    {var match=Parser["identifier_eol"](Lexer["lexeme"],lexbuf);
     
     var mode;
     var exit;
     
     switch(match)
      {case "child":mode=/* Fork_child */0;break;
       case "parent":mode=/* Fork_parent */1;break;
       default:exit=22;}
     
     switch(exit){case 22:mode=error("Syntax error.");break}
     
     Debugcom["fork_mode"][1]=mode;
     return Program_management["loaded"][1]
             ?Debugcom["update_follow_fork_mode"](/* () */0)
             :0},
   function(ppf)
    {var match=Debugcom["fork_mode"][1];
     
     return Format["fprintf"]
             (ppf,
              [/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* Formatting_lit */17,
                 /* Flush_newline */4,
                 /* End_of_format */0]],
               "%s@."],
              match!==0?"parent":"child")}];

var
 pr_modules=
  function(ppf,mods)
   {var
     pr_mods=
      function(ppf)
       {return List["iter"]
                (function(x)
                  {return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               /* End_of_format */0]],
                             "%s@ "],
                            x)})};
    
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String_literal */11,
               "Used modules: ",
               [/* Formatting_lit */17,
                /* Flush_newline */4,
                [/* Alpha */15,
                 [/* Formatting_lit */17,/* FFlush */2,/* End_of_format */0]]]],
              "Used modules: @.%a@?"],
             pr_mods,
             mods)};

var
 info_modules=
  function(ppf,lexbuf)
   {eol(lexbuf);
    Program_management["ensure_loaded"](/* () */0);
    return pr_modules(ppf,Symbols["modules"][1])};

var
 info_checkpoints=
  function(ppf,lexbuf)
   {eol(lexbuf);
    return Checkpoints["checkpoints"][1]===/* [] */0
            ?Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "No checkpoint.",
                 [/* Formatting_lit */17,
                  /* Flush_newline */4,
                  /* End_of_format */0]],
                "No checkpoint.@."])
            :Breakpoints["debug_breakpoints"][1]
              ?(Pervasives["prerr_endline"]
                 ("               Time   Pid Version"),
                List["iter"]
                 (function(param)
                   {var time=param[1];
                    
                    var pid=param[2];
                    
                    var version=param[8];
                    
                    return Printf["printf"]
                            ([/* Format */0,
                              [/* Int64 */7,
                               /* Int_d */0,
                               [/* Lit_padding */0,/* Right */1,19],
                               /* No_precision */0,
                               [/* Char_literal */12,
                                32,
                                [/* Int */4,
                                 /* Int_d */0,
                                 [/* Lit_padding */0,/* Right */1,5],
                                 /* No_precision */0,
                                 [/* Char_literal */12,
                                  32,
                                  [/* Int */4,
                                   /* Int_d */0,
                                   /* No_padding */0,
                                   /* No_precision */0,
                                   [/* Char_literal */12,10,/* End_of_format */0]]]]]],
                              "%19Ld %5d %d\n"],
                             time,
                             pid,
                             version)},
                  Checkpoints["checkpoints"][1]))
              :(Pervasives["print_endline"]("               Time   Pid"),
                List["iter"]
                 (function(param)
                   {var time=param[1];
                    
                    var pid=param[2];
                    
                    return Printf["printf"]
                            ([/* Format */0,
                              [/* Int64 */7,
                               /* Int_d */0,
                               [/* Lit_padding */0,/* Right */1,19],
                               /* No_precision */0,
                               [/* Char_literal */12,
                                32,
                                [/* Int */4,
                                 /* Int_d */0,
                                 [/* Lit_padding */0,/* Right */1,5],
                                 /* No_precision */0,
                                 [/* Char_literal */12,10,/* End_of_format */0]]]],
                              "%19Ld %5d\n"],
                             time,
                             pid)},
                  Checkpoints["checkpoints"][1]))};

var
 info_one_breakpoint=
  function(ppf,param)
   {var ev=param[2];
    
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Int */4,
               /* Int_d */0,
               [/* Lit_padding */0,/* Right */1,3],
               /* No_precision */0,
               [/* Char_literal */12,
                32,
                [/* Int */4,
                 /* Int_d */0,
                 [/* Lit_padding */0,/* Right */1,10],
                 /* No_precision */0,
                 [/* String_literal */11,
                  "  ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* Formatting_lit */17,
                    /* Flush_newline */4,
                    /* End_of_format */0]]]]]],
              "%3d %10d  %s@."],
             param[1],
             ev[1],
             Pos["get_desc"](ev))};

var
 info_breakpoints=
  function(ppf,lexbuf)
   {eol(lexbuf);
    return Breakpoints["breakpoints"][1]===/* [] */0
            ?Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "No breakpoints.",
                 [/* Formatting_lit */17,
                  /* Flush_newline */4,
                  /* End_of_format */0]],
                "No breakpoints.@."])
            :(Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Num    Address  Where",
                  [/* Formatting_lit */17,
                   /* Flush_newline */4,
                   /* End_of_format */0]],
                 "Num    Address  Where@."]),
              List["iter"]
               (function(param){return info_one_breakpoint(ppf,param)},
                List["rev"](Breakpoints["breakpoints"][1])))};

var
 info_events=
  function(ppf,lexbuf)
   {Program_management["ensure_loaded"](/* () */0);
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
              {var match;
               try
                {var buffer=Source["get_buffer"](Events["get_pos"](ev),ev[2]);
                 
                 match=
                 /* tuple */[0,
                  Source["start_and_cnum"](buffer,ev[3][1])[2],
                  Source["start_and_cnum"](buffer,ev[3][2])[2]];
                 }
               catch(exn){match=/* tuple */[0,ev[3][1][4],ev[3][2][4]];}
               
               var match$1=ev[4];
               
               var match$2=ev[5];
               
               var match$3=ev[10];
               
               var $js;
               if(typeof match$3==="number")
                {switch(match$3){case 0:$js="";break}}
               else
                {switch(match$3[0])
                  {case 0:$js="(repr)";break;
                   case 1:$js=Pervasives["string_of_int"](match$3[1][1]);break
                   }}
               return Printf["printf"]
                       ([/* Format */0,
                         [/* Int */4,
                          /* Int_d */0,
                          [/* Lit_padding */0,/* Right */1,10],
                          /* No_precision */0,
                          [/* Char_literal */12,
                           32,
                           [/* Int */4,
                            /* Int_d */0,
                            [/* Lit_padding */0,/* Right */1,6],
                            /* No_precision */0,
                            [/* Char_literal */12,
                             45,
                             [/* Int */4,
                              /* Int_d */0,
                              [/* Lit_padding */0,/* Left */0,6],
                              /* No_precision */0,
                              [/* String_literal */11,
                               "  ",
                               [/* String */2,
                                [/* Lit_padding */0,/* Right */1,10],
                                [/* Char_literal */12,
                                 32,
                                 [/* String */2,
                                  [/* Lit_padding */0,/* Right */1,10],
                                  [/* Char_literal */12,10,/* End_of_format */0]]]]]]]]]],
                         "%10d %6d-%-6d  %10s %10s\n"],
                        ev[1],
                        match[1],
                        match[2],
                        Pervasives["^"]
                         (typeof match$1==="number"
                           ?match$1!==0?"pseudo":"before"
                           :"after",
                          typeof match$2==="number"?match$2!==0?"":"/fun":"/ret"),
                        $js)},
             Symbols["events_in_module"](mdle))};

var
 instr_load_printer=
  function(ppf,lexbuf)
   {var
     filename=
      extract_filename(Parser["argument_eol"](Lexer["argument"],lexbuf));
    
    try
     {return Loadprinter["loadfile"](ppf,filename)}
    catch(exn)
     {if(exn[1]===Loadprinter["Error"])
       {Loadprinter["report_error"](ppf,exn[2]);
        throw Debugger_config["Toplevel"]}
      else
       {throw exn}
      }
    };

var
 instr_install_printer=
  function(ppf,lexbuf)
   {var lid=Parser["longident_eol"](Lexer["lexeme"],lexbuf);
    
    try
     {return Loadprinter["install_printer"](ppf,lid)}
    catch(exn)
     {if(exn[1]===Loadprinter["Error"])
       {Loadprinter["report_error"](ppf,exn[2]);
        throw Debugger_config["Toplevel"]}
      else
       {throw exn}
      }
    };

var
 instr_remove_printer=
  function(ppf,lexbuf)
   {var lid=Parser["longident_eol"](Lexer["lexeme"],lexbuf);
    
    try
     {return Loadprinter["remove_printer"](lid)}
    catch(exn)
     {if(exn[1]===Loadprinter["Error"])
       {Loadprinter["report_error"](ppf,exn[2]);
        throw Debugger_config["Toplevel"]}
      else
       {throw exn}
      }
    };

var
 init=
  function(ppf)
   {instruction_list[1]=
    /* :: */[0,
     /* record */[0,
      "cd",
      /* false */0,
      instr_cd,
      /* true */1,
      "set working directory to DIR for debugger and program being debugged."],
     /* :: */[0,
      /* record */[0,
       "complete",
       /* false */0,
       instr_complete,
       /* false */0,
       "complete word at cursor according to context. Useful for Emacs."],
      /* :: */[0,
       /* record */[0,
        "pwd",
        /* false */0,
        instr_pwd,
        /* true */1,
        "print working directory."],
       /* :: */[0,
        /* record */[0,
         "directory",
         /* false */0,
         instr_dir,
         /* false */0,
         "add directory DIR to beginning of search path for source and\ninterface files.\nForget cached info on source file locations and line positions.\nWith no argument, reset the search path."],
        /* :: */[0,
         /* record */[0,
          "kill",
          /* false */0,
          instr_kill,
          /* true */1,
          "kill the program being debugged."],
         /* :: */[0,
          /* record */[0,
           "help",
           /* false */0,
           instr_help,
           /* true */1,
           "print list of commands."],
          /* :: */[0,
           /* record */[0,
            "quit",
            /* false */0,
            instr_quit,
            /* false */0,
            "exit the debugger."],
           /* :: */[0,
            /* record */[0,
             "shell",
             /* false */0,
             instr_shell,
             /* true */1,
             "Execute a given COMMAND thru the system shell."],
            /* :: */[0,
             /* record */[0,
              "environment",
              /* false */0,
              instr_env,
              /* false */0,
              "environment variable to give to program being debugged when it is started."],
             /* :: */[0,
              /* record */[0,
               "run",
               /* true */1,
               instr_run,
               /* true */1,
               "run the program from current position."],
              /* :: */[0,
               /* record */[0,
                "reverse",
                /* false */0,
                instr_reverse,
                /* true */1,
                "run the program backward from current position."],
               /* :: */[0,
                /* record */[0,
                 "step",
                 /* true */1,
                 instr_step,
                 /* true */1,
                 "step program until it reaches the next event.\nArgument N means do this N times (or till program stops for another reason)."],
                /* :: */[0,
                 /* record */[0,
                  "backstep",
                  /* true */1,
                  instr_back,
                  /* true */1,
                  "step program backward until it reaches the previous event.\nArgument N means do this N times (or till program stops for another reason)."],
                 /* :: */[0,
                  /* record */[0,
                   "goto",
                   /* false */0,
                   instr_goto,
                   /* true */1,
                   "go to the given time."],
                  /* :: */[0,
                   /* record */[0,
                    "finish",
                    /* true */1,
                    instr_finish,
                    /* true */1,
                    "execute until topmost stack frame returns."],
                   /* :: */[0,
                    /* record */[0,
                     "next",
                     /* true */1,
                     instr_next,
                     /* true */1,
                     "step program until it reaches the next event.\nSkip over function calls.\nArgument N means do this N times (or till program stops for another reason)."],
                    /* :: */[0,
                     /* record */[0,
                      "start",
                      /* false */0,
                      instr_start,
                      /* true */1,
                      "execute backward until the current function is exited."],
                     /* :: */[0,
                      /* record */[0,
                       "previous",
                       /* false */0,
                       instr_previous,
                       /* true */1,
                       "step program until it reaches the previous event.\nSkip over function calls.\nArgument N means do this N times (or till program stops for another reason)."],
                      /* :: */[0,
                       /* record */[0,
                        "print",
                        /* true */1,
                        instr_print,
                        /* true */1,
                        "print value of expressions (deep printing)."],
                       /* :: */[0,
                        /* record */[0,
                         "display",
                         /* true */1,
                         instr_display,
                         /* true */1,
                         "print value of expressions (shallow printing)."],
                        /* :: */[0,
                         /* record */[0,
                          "source",
                          /* false */0,
                          instr_source,
                          /* true */1,
                          "read command from file FILE."],
                         /* :: */[0,
                          /* record */[0,
                           "break",
                           /* false */0,
                           instr_break,
                           /* false */0,
                           "Set breakpoint at specified line or function.\nSyntax: break function-name\n        break @ [module] linenum\n        break @ [module] # characternum"],
                          /* :: */[0,
                           /* record */[0,
                            "delete",
                            /* false */0,
                            instr_delete,
                            /* false */0,
                            "delete some breakpoints.\nArguments are breakpoint numbers with spaces in between.\nTo delete all breakpoints, give no argument."],
                           /* :: */[0,
                            /* record */[0,
                             "set",
                             /* false */0,
                             instr_set,
                             /* false */0,
                             "--unused--"],
                            /* :: */[0,
                             /* record */[0,
                              "show",
                              /* false */0,
                              instr_show,
                              /* true */1,
                              "--unused--"],
                             /* :: */[0,
                              /* record */[0,
                               "info",
                               /* false */0,
                               instr_info,
                               /* true */1,
                               "--unused--"],
                              /* :: */[0,
                               /* record */[0,
                                "frame",
                                /* false */0,
                                instr_frame,
                                /* true */1,
                                "select and print a stack frame.\nWith no argument, print the selected stack frame.\nAn argument specifies the frame to select."],
                               /* :: */[0,
                                /* record */[0,
                                 "backtrace",
                                 /* false */0,
                                 instr_backtrace,
                                 /* true */1,
                                 "print backtrace of all stack frames, or innermost COUNT frames.\nWith a negative argument, print outermost -COUNT frames."],
                                /* :: */[0,
                                 /* record */[0,
                                  "bt",
                                  /* false */0,
                                  instr_backtrace,
                                  /* true */1,
                                  "print backtrace of all stack frames, or innermost COUNT frames.\nWith a negative argument, print outermost -COUNT frames."],
                                 /* :: */[0,
                                  /* record */[0,
                                   "up",
                                   /* false */0,
                                   instr_up,
                                   /* true */1,
                                   "select and print stack frame that called this one.\nAn argument says how many frames up to go."],
                                  /* :: */[0,
                                   /* record */[0,
                                    "down",
                                    /* false */0,
                                    instr_down,
                                    /* true */1,
                                    "select and print stack frame called by this one.\nAn argument says how many frames down to go."],
                                   /* :: */[0,
                                    /* record */[0,
                                     "last",
                                     /* true */1,
                                     instr_last,
                                     /* true */1,
                                     "go back to previous time."],
                                    /* :: */[0,
                                     /* record */[0,
                                      "list",
                                      /* false */0,
                                      instr_list,
                                      /* true */1,
                                      "list the source code."],
                                     /* :: */[0,
                                      /* record */[0,
                                       "load_printer",
                                       /* false */0,
                                       instr_load_printer,
                                       /* false */0,
                                       "load in the debugger a .cmo or .cma file containing printing functions."],
                                      /* :: */[0,
                                       /* record */[0,
                                        "install_printer",
                                        /* false */0,
                                        instr_install_printer,
                                        /* false */0,
                                        'use the given function for printing values of its input type.\nThe code for the function must have previously been loaded in the debugger\nusing "load_printer".'],
                                       /* :: */[0,
                                        /* record */[0,
                                         "remove_printer",
                                         /* false */0,
                                         instr_remove_printer,
                                         /* false */0,
                                         "stop using the given function for printing values of its input type."],
                                        /* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];
    variable_list[1]=
    /* :: */[0,
     /* record */[0,
      "arguments",
      raw_line_variable(/* true */1,Parameters["arguments"]),
      "arguments to give program being debugged when it is started."],
     /* :: */[0,
      /* record */[0,
       "program",
       path_variable(/* true */1,Parameters["program_name"]),
       "name of program to be debugged."],
      /* :: */[0,
       /* record */[0,
        "loadingmode",
        loading_mode_variable(ppf),
        "mode of loading.\nIt can be either:\ndirect: the program is directly called by the debugger.\nruntime: the debugger execute `ocamlrun programname arguments'.\nmanual: the program is not launched by the debugger,\nbut manually by the user."],
       /* :: */[0,
        /* record */[0,
         "processcount",
         integer_variable
          (/* false */0,
           1,
           "Must be >= 1.",
           Debugger_config["checkpoint_max_count"]),
         "maximum number of process to keep."],
        /* :: */[0,
         /* record */[0,
          "checkpoints",
          boolean_variable(/* false */0,Debugger_config["make_checkpoints"]),
          "whether to make checkpoints or not."],
         /* :: */[0,
          /* record */[0,
           "bigstep",
           int64_variable
            (/* false */0,
             Int64ops["_1"],
             "Must be >= 1.",
             Debugger_config["checkpoint_big_step"]),
           "step between checkpoints during long displacements."],
          /* :: */[0,
           /* record */[0,
            "smallstep",
            int64_variable
             (/* false */0,
              Int64ops["_1"],
              "Must be >= 1.",
              Debugger_config["checkpoint_small_step"]),
            "step between checkpoints during small displacements."],
           /* :: */[0,
            /* record */[0,
             "socket",
             raw_variable(/* true */1,Parameters["socket_name"]),
             "name of the socket used by communications debugger-runtime."],
            /* :: */[0,
             /* record */[0,
              "history",
              integer_variable
               (/* false */0,0,"",Debugger_config["history_size"]),
              "history size."],
             /* :: */[0,
              /* record */[0,
               "print_depth",
               integer_variable
                (/* false */0,
                 1,
                 "Must be at least 1",
                 Printval["max_printer_depth"]),
               "maximal depth for printing of values."],
              /* :: */[0,
               /* record */[0,
                "print_length",
                integer_variable
                 (/* false */0,
                  1,
                  "Must be at least 1",
                  Printval["max_printer_steps"]),
                "maximal number of value nodes printed."],
               /* :: */[0,
                /* record */[0,
                 "follow_fork_mode",
                 follow_fork_variable,
                 "process to follow after forking.\nIt can be either :\n  child: the newly created process.\nparent: the process that called fork.\n"],
                /* [] */0]]]]]]]]]]]];
    return info_list[1]=
           /* :: */[0,
            /* record */[0,
             "modules",
             function(param){return info_modules(ppf,param)},
             "list opened modules."],
            /* :: */[0,
             /* record */[0,
              "checkpoints",
              function(param){return info_checkpoints(ppf,param)},
              "list checkpoints."],
             /* :: */[0,
              /* record */[0,
               "breakpoints",
               function(param){return info_breakpoints(ppf,param)},
               "list breakpoints."],
              /* :: */[0,
               /* record */[0,
                "events",
                function(param){return info_events(ppf,param)},
                "list events in MODULE (default is current module)."],
               /* [] */0]]]],
           0};

init(Format["std_formatter"]);
module["exports"]={"interprete_line":interprete_line,"line_loop":line_loop};

