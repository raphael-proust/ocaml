var Ctype=require("Ctype");
var String=require("String");
var Question=require("Question");
var Parser=require("Parser");
var Frames=require("Frames");
var Show_information=require("Show_information");
var History=require("History");
var Program_management=require("Program_management");
var Breakpoints=require("Breakpoints");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Printf=require("Printf");
var Symbols=require("Symbols");
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
var Lexing=require("Lexing");
var Filename=require("Filename");
var Parameters=require("Parameters");
var Eval=require("Eval");
var Parsing=require("Parsing");
var Debugger_config=require("Debugger_config");
var Pos=require("Pos");
var Int64ops=require("Int64ops");
var Show_source=require("Show_source");
var Longident=require("Longident");
var Loadprinter=require("Loadprinter");
var Source=require("Source");
var Hashtbl=require("Hashtbl");
var Time_travel=require("Time_travel");
var Input_handling=require("Input_handling");
var Config=require("Config");
var Debugcom=require("Debugcom");
var Sys=require("Sys");
var instruction_list=[0,0];
var variable_list=[0,0];
var info_list=[0,0];
var
 error=
  function(text)
   {var $js=Format["eprintf"];
    $js([0,[2,0,[17,4,0]],"%s@."],text);
    return "unknown primitive:raise"};
var
 check_not_windows=
  function(feature)
   {var match=Sys["os_type"];
    var $js=match;
    if($js=="Win32")
     {var $js$1=Pervasives["^"];
      var $js$2=Pervasives["^"];
      var $js$3=$js$2(feature,"' feature not supported on Windows");
      var $js$4=$js$1("'",$js$3);
      return error($js$4)}
    else
     {return 0}};
var $js=Parser["end_of_line"];
var eol=$js(Lexer["lexeme"]);
var
 matching_elements=
  function(list,name,instr)
   {var $js$1=List["filter"];
    return $js$1
            (function(a)
              {var $js$2=Primitives["isprefix"];
               var $js$3=name(a);
               return $js$2(instr,$js$3)},
             list[1])};
var
 all_matching_instructions=
  matching_elements(instruction_list,function(i){return i[1]});
var
 matching_instructions=
  function(instr)
   {var all=all_matching_instructions(instr);
    var $js$1=List["filter"];
    var prio=$js$1(function(i){return i[2]},all);
    var $js$2=prio=0;
    if($js$2){return all}else{return prio}};
var
 matching_variables=
  matching_elements(variable_list,function(v){return v[1]});
var matching_infos=matching_elements(info_list,function(i){return i[1]});
var
 find_ident=
  function(name,matcher,action,alternative,ppf,lexbuf)
   {var $js$1=Parser["identifier_or_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2)
     {var match$1=matcher(match[1]);
      var $js$3=match$1;
      if($js$3)
       {var $js$4=match$1[2];
        if($js$4)
         {var $js$5=Pervasives["^"];
          var $js$6=Pervasives["^"];
          var $js$7=$js$6(name,".");
          var $js$8=$js$5("Ambiguous ",$js$7);
          return error($js$8)}
        else
         {return action(match$1[1],ppf,lexbuf)}}
      else
       {var $js$9=Pervasives["^"];
        var $js$10=Pervasives["^"];
        var $js$11=$js$10(name,".");
        var $js$12=$js$9("Unknown ",$js$11);
        return error($js$12)}}
    else
     {return alternative(ppf)}};
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
     {var $js$1=Breakpoints["new_breakpoint"];
      var $js$2=Symbols["any_event_at_pc"];
      var $js$3=$js$2(pc);
      return $js$1($js$3)}
    catch(exn)
     {var $js$4=exn=Not_found;
      if($js$4)
       {var $js$5=Format["eprintf"];
        $js$5
         ([0,
           [11,
            "Can't add breakpoint at pc ",
            [4,3,0,0,[11,": no event there.",[17,4,0]]]],
           "Can't add breakpoint at pc %i: no event there.@."],
          pc);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 add_breakpoint_after_pc=
  function(pc)
   {var
     try_add=
      function(n)
       {var $js$1=n<3;
        if($js$1)
         {try
           {var $js$2=Breakpoints["new_breakpoint"];
            var $js$3=Symbols["any_event_at_pc"];
            var $js$4=$js$3(pc+n*4);
            return $js$2($js$4)}
          catch(exn)
           {var $js$5=exn=Not_found;
            if($js$5)
             {return try_add(n+1)}
            else
             {return "unknown primitive:reraise"}}}
        else
         {return error
                  ("Can't add breakpoint at beginning of function: no event there")}};
    return try_add(0)};
var
 module_of_longident=
  function(id)
   {var $js$1=id;
    if($js$1)
     {var $js$2=String["concat"];
      var $js$3=Longident["flatten"];
      var $js$4=$js$3(id[1]);
      var $js$5=$js$2(".",$js$4);
      return [0,$js$5]}
    else
     {return 0}};
var
 convert_module=
  function(mdle)
   {var $js$1=mdle;
    if($js$1)
     {var m=mdle[1];
      var $js$2=String["capitalize"];
      var $js$3=Filename["check_suffix"];
      var $js$4=$js$3(m,".ml");
      if($js$4)
       {var $js$5=Filename["chop_suffix"];var $js$6=$js$5(m,".ml")}
      else
       {var $js$6=m}
      return $js$2($js$6)}
    else
     {try
       {var $js$7=Events["get_current_event"];
        var $js$8=$js$7(0);
        return $js$8[2]}
      catch(exn)
       {var $js$9=exn=Not_found;
        if($js$9)
         {return error("Not in a module.")}
        else
         {return "unknown primitive:reraise"}}}};
var current_line=[0,""];
var
 interprete_line=
  function(ppf,line)
   {current_line[1]=line,0;
    var $js$1=Lexing["from_string"];
    var lexbuf=$js$1(line);
    try
     {var $js$2=Parser["identifier_or_eol"];
      var match=$js$2(Lexer["lexeme"],lexbuf);
      var $js$3=match;
      if($js$3)
       {var l=matching_instructions(match[1]);
        var $js$4=l;
        if($js$4)
         {var $js$5=l[2];
          if($js$5)
           {return error("Ambiguous command.")}
          else
           {var i=l[1];
            var $js$6=i[3];
            $js$6(ppf,lexbuf);
            var $js$7=Input_handling["resume_user_input"];
            $js$7(0);
            return i[4]}}
        else
         {return error("Unknown command.")}}
      else
       {var $js$8=Input_handling["resume_user_input"];$js$8(0);return 0}}
    catch(exn)
     {var $js$9=exn=Parsing["Parse_error"];
      if($js$9)
       {return error("Syntax error.")}
      else
       {var $js$10=exn[1]=Failure;
        if($js$10)
         {var $js$11=exn[2];
          if($js$11=="int_of_string")
           {return error("Integer overflow")}
          else
           {var exit=172}}
        else
         {var exit=172}}
      switch(exit){case 172:return "unknown primitive:reraise"}}};
var
 line_loop=
  function(ppf,line_buffer)
   {var $js$1=Input_handling["resume_user_input"];
    $js$1(0);
    var previous_line="";
    try
     {for(;;)
       {var $js$2=1;
        if($js$2)
         {var $js$3=Program_management["loaded"][1];
          if($js$3){var $js$4=History["add_current_time"];$js$4(0)}else{}
          var $js$5=Primitives["string_trim"];
          var $js$6=Lexer["line"];
          var $js$7=$js$6(line_buffer);
          var new_line=$js$5($js$7);
          var $js$8="unknown primitive:caml_string_notequal";
          if($js$8){var line=new_line}else{var line=previous_line}
          var $js$9="";
          var previous_line=$js$9;
          var $js$10=interprete_line(ppf,line);
          if($js$10){var $js$11=line;var previous_line=$js$11}else{}}
        else
         break}
      return 0}
    catch(exn)
     {var $js$12=exn=Pervasives["Exit"];
      if($js$12)
       {var $js$13=Input_handling["stop_user_input"];return $js$13(0)}
      else
       {return "unknown primitive:reraise"}}};
var
 instr_cd=
  function(ppf,lexbuf)
   {var $js$1=Parser["argument_eol"];
    var dir=$js$1(Lexer["argument"],lexbuf);
    var $js$2=Program_management["ask_kill_program"];
    var $js$3=$js$2(0);
    if($js$3)
     {try
       {var $js$4=Unix_tools["expand_path"];
        var $js$5=$js$4(dir);
        return "unknown primitive:caml_sys_chdir"}
      catch(exn)
       {var $js$6=exn[1]=Sys_error;
        if($js$6)
         {return error(exn[2])}
        else
         {return "unknown primitive:reraise"}}}
    else
     {return 0}};
var
 instr_shell=
  function(ppf,lexbuf)
   {var $js$1=Parser["argument_list_eol"];
    var cmdarg=$js$1(Lexer["argument"],lexbuf);
    var $js$2=String["concat"];
    var cmd=$js$2(" ",cmdarg);
    var err="unknown primitive:caml_sys_system_command";
    var $js$3=err!=0;
    if($js$3)
     {var $js$4=Format["eprintf"];
      return $js$4
              ([0,
                [11,
                 "Shell command ",
                 [3,0,[11," failed with exit code ",[4,0,0,0,[12,10,[10,0]]]]]],
                "Shell command %S failed with exit code %d\n%!"],
               cmd,
               err)}
    else
     {return 0}};
var
 instr_env=
  function(ppf,lexbuf)
   {var $js$1=Parser["argument_list_eol"];
    var cmdarg=$js$1(Lexer["argument"],lexbuf);
    var $js$2=Primitives["string_trim"];
    var $js$3=String["concat"];
    var $js$4=$js$3(" ",cmdarg);
    var cmdarg$1=$js$2($js$4);
    var $js$5="unknown primitive:caml_string_notequal";
    if($js$5)
     {var $js$6=Program_management["ask_kill_program"];
      var $js$7=$js$6(0);
      if($js$7)
       {try
         {var $js$8=String["index"];
          var eqpos=$js$8(cmdarg$1,61);
          var $js$9=eqpos=0;
          if($js$9){"unknown primitive:raise"}else{}
          var $js$10=String["sub"];
          var name=$js$10(cmdarg$1,0,eqpos);
          var $js$11=String["sub"];
          var value=$js$11(cmdarg$1,eqpos+1,cmdarg$1["length"]-eqpos-1);
          var $js$12=List["remove_assoc"];
          var $js$13=$js$12(name,Debugger_config["environment"][1]);
          var $js$14=[0,[0,name,value],$js$13];
          return Debugger_config["environment"][1]=$js$14,0}
        catch(exn)
         {var $js$15=exn=Not_found;
          if($js$15)
           {var $js$16=Format["eprintf"];
            return $js$16
                    ([0,
                      [11,
                       "Environment variable must be in name=value format\n",
                       [10,0]],
                      "Environment variable must be in name=value format\n%!"])}
          else
           {return "unknown primitive:reraise"}}}
      else
       {var $js$17=List["iter"];
        var $js$18=List["rev"];
        var $js$19=$js$18(Debugger_config["environment"][1]);
        return $js$17
                (function(param)
                  {var $js$20=Format["printf"];
                   return $js$20
                           ([0,[2,0,[12,61,[2,0,[12,10,[10,0]]]]],"%s=%s\n%!"],
                            param[1],
                            param[2])},
                 $js$19)}}
    else
     {return 0}};
var
 instr_pwd=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=Format["fprintf"];
    return $js$1
            (ppf,
             [0,[2,0,[17,4,0]],"%s@."],
             "unknown primitive:caml_sys_getcwd")};
var
 instr_dir=
  function(ppf,lexbuf)
   {var $js$1=Parser["argument_list_eol"];
    var new_directory=$js$1(Lexer["argument"],lexbuf);
    var $js$2=new_directory=0;
    if($js$2)
     {var $js$3=Question["yes_or_no"];
      var $js$4=$js$3("Reinitialize directory list");
      if($js$4)
       {Config["load_path"][1]=Parameters["default_load_path"][1],0;
        var $js$5=Envaux["reset_cache"];
        $js$5(0);
        var $js$6=Hashtbl["clear"];
        $js$6(Debugger_config["load_path_for"]);
        var $js$7=Source["flush_buffer_list"];
        $js$7(0)}
      else
       {}}
    else
     {var $js$8=List["rev"];
      var new_directory'=$js$8(new_directory);
      var $js$9=new_directory';
      if($js$9)
       {var match=new_directory'[2];
        var $js$10=match;
        if($js$10)
         {var tl=match[2];
          var mdl=new_directory'[1];
          var $js$11=String["lowercase"];
          var $js$12=$js$11(match[1]);
          var $js$13="unknown primitive:caml_string_equal";
          var $js$14=List["length"];
          var $js$15=$js$14(tl);
          var $js$16=$js$15>0;
          var $js$17=$js$13&&$js$16;
          if($js$17)
           {var $js$18=List["iter"];
            $js$18
             (function(x)
               {var $js$19=Parameters["add_path_for"];
                var $js$20=Unix_tools["expand_path"];
                var $js$21=$js$20(x);
                return $js$19(mdl,$js$21)},
              tl)}
          else
           {var exit=148}}
        else
         {var exit=148}}
      else
       {var exit=148}
      switch(exit)
       {case 148:
         var $js$19=List["iter"];
         $js$19
          (function(x)
            {var $js$20=Parameters["add_path"];
             var $js$21=Unix_tools["expand_path"];
             var $js$22=$js$21(x);
             return $js$20($js$22)},
           new_directory')
        }}
    var
     print_dirs=
      function(ppf$1,l)
       {var $js$20=List["iter"];
        return $js$20
                (function(x)
                  {var $js$21=Format["fprintf"];
                   return $js$21(ppf$1,[0,[17,[0,"@ ",1,0],[2,0,0]],"@ %s"],x)},
                 l)};
    var $js$20=Format["fprintf"];
    $js$20
     (ppf,
      [0,
       [18,
        [1,[0,[11,"<2>",0],"<2>"]],
        [11,"Directories: ",[15,[17,0,[17,4,0]]]]],
       "@[<2>Directories: %a@]@."],
      print_dirs,
      Config["load_path"][1]);
    var $js$21=Hashtbl["iter"];
    return $js$21
            (function(mdl$1,dirs)
              {var $js$22=Format["fprintf"];
               return $js$22
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
                        dirs)},
             Debugger_config["load_path_for"])};
var
 instr_kill=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=!Program_management["loaded"][1];
    if($js$1){error("The program is not being run.")}else{}
    var $js$2=Question["yes_or_no"];
    var $js$3=$js$2("Kill the program being debugged");
    if($js$3)
     {var $js$4=Program_management["kill_program"];
      $js$4(0);
      var $js$5=Show_source["show_no_point"];
      return $js$5(0)}
    else
     {return 0}};
var
 instr_run=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=Program_management["ensure_loaded"];
    $js$1(0);
    var $js$2=Printval["reset_named_values"];
    $js$2(0);
    var $js$3=Time_travel["run"];
    $js$3(0);
    var $js$4=Show_information["show_current_event"];
    return $js$4(ppf)};
var
 instr_reverse=
  function(ppf,lexbuf)
   {eol(lexbuf);
    check_not_windows("reverse");
    var $js$1=Program_management["ensure_loaded"];
    $js$1(0);
    var $js$2=Printval["reset_named_values"];
    $js$2(0);
    var $js$3=Time_travel["back_run"];
    $js$3(0);
    var $js$4=Show_information["show_current_event"];
    return $js$4(ppf)};
var
 instr_step=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_signed_int64_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var step_count=match[1]}else{var step_count=Int64ops["_1"]}
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    var $js$4=Printval["reset_named_values"];
    $js$4(0);
    var $js$5=Time_travel["step"];
    $js$5(step_count);
    var $js$6=Show_information["show_current_event"];
    return $js$6(ppf)};
var
 instr_back=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_signed_int64_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var step_count=match[1]}else{var step_count=Int64ops["_1"]}
    check_not_windows("backstep");
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    var $js$4=Printval["reset_named_values"];
    $js$4(0);
    var $js$5=Time_travel["step"];
    var $js$6=Int64ops["--"];
    var $js$7=$js$6(Int64ops["_0"],step_count);
    $js$5($js$7);
    var $js$8=Show_information["show_current_event"];
    return $js$8(ppf)};
var
 instr_finish=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=Program_management["ensure_loaded"];
    $js$1(0);
    var $js$2=Printval["reset_named_values"];
    $js$2(0);
    var $js$3=Time_travel["finish"];
    $js$3(0);
    var $js$4=Show_information["show_current_event"];
    return $js$4(ppf)};
var
 instr_next=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_integer_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var step_count=match[1]}else{var step_count=1}
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    var $js$4=Printval["reset_named_values"];
    $js$4(0);
    var $js$5=Time_travel["next"];
    $js$5(step_count);
    var $js$6=Show_information["show_current_event"];
    return $js$6(ppf)};
var
 instr_start=
  function(ppf,lexbuf)
   {eol(lexbuf);
    check_not_windows("start");
    var $js$1=Program_management["ensure_loaded"];
    $js$1(0);
    var $js$2=Printval["reset_named_values"];
    $js$2(0);
    var $js$3=Time_travel["start"];
    $js$3(0);
    var $js$4=Show_information["show_current_event"];
    return $js$4(ppf)};
var
 instr_previous=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_integer_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var step_count=match[1]}else{var step_count=1}
    check_not_windows("previous");
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    var $js$4=Printval["reset_named_values"];
    $js$4(0);
    var $js$5=Time_travel["previous"];
    $js$5(step_count);
    var $js$6=Show_information["show_current_event"];
    return $js$6(ppf)};
var
 instr_goto=
  function(ppf,lexbuf)
   {var $js$1=Parser["int64_eol"];
    var time=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=Program_management["ensure_loaded"];
    $js$2(0);
    var $js$3=Printval["reset_named_values"];
    $js$3(0);
    var $js$4=Time_travel["go_to"];
    $js$4(time);
    var $js$5=Show_information["show_current_event"];
    return $js$5(ppf)};
var instr_quit=function(param){return "unknown primitive:raise"};
var
 print_variable_list=
  function(ppf)
   {var
     pr_vars=
      function(ppf$1)
       {var $js$1=List["iter"];
        return $js$1
                (function(v)
                  {var $js$2=Format["fprintf"];
                   return $js$2
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],v[1])})};
    var $js$1=Format["fprintf"];
    return $js$1
            (ppf,
             [0,
              [11,"List of variables: ",[15,[17,4,0]]],
              "List of variables: %a@."],
             pr_vars,
             variable_list[1])};
var
 print_info_list=
  function(ppf)
   {var
     pr_infos=
      function(ppf$1)
       {var $js$1=List["iter"];
        return $js$1
                (function(i)
                  {var $js$2=Format["fprintf"];
                   return $js$2
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],i[1])})};
    var $js$1=Format["fprintf"];
    return $js$1
            (ppf,
             [0,
              [11,"List of info commands: ",[15,[17,4,0]]],
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
          var $js$1=List["iter"];
          return $js$1
                  (function(i)
                    {var $js$2=Format["fprintf"];
                     return $js$2(ppf$1,[0,[2,0,[17,4,0]],"%s@."],i)},
                   l)}
        catch(exn)
         {var $js$2=Input_handling["remove_file"];
          return $js$2(Input_handling["user_channel"][1])}};
    var
     match_list=
      function(lexbuf$1)
       {var $js$1=Parser["identifier_or_eol"];
        var match=$js$1(Lexer["lexeme"],lexbuf$1);
        var $js$2=match;
        if($js$2)
         {var x=match[1];
          var l=matching_instructions(x);
          var $js$3=l;
          if($js$3)
           {var i=l[1];
            var i_full=i[1];
            var $js$4=i_full;
            if($js$4=="help")
             {var $js$5=l[2];
              if($js$5)
               {var exit=122}
              else
               {var $js$6="unknown primitive:caml_string_equal";
                if($js$6)
                 {return match_list(lexbuf$1)}
                else
                 {return [0,"help",0]}}}
            else
             if($js$4=="info")
              {var $js$7=l[2];
               if($js$7)
                {var exit=122}
               else
                {var $js$8="unknown primitive:caml_string_equal";
                 if($js$8)
                  {var $js$9=Parser["identifier_or_eol"];
                   var match$1=$js$9(Lexer["lexeme"],lexbuf$1);
                   var $js$10=match$1;
                   if($js$10)
                    {var ident=match$1[1];
                     var l$1=matching_infos(ident);
                     var $js$11=l$1;
                     if($js$11)
                      {var $js$12=l$1[2];
                       if($js$12)
                        {var exit$1=121}
                       else
                        {var i$1=l$1[1];
                         var $js$13="unknown primitive:caml_string_equal";
                         if($js$13){return 0}else{return [0,i$1[1],0]}}}
                     else
                      {var exit$1=121}
                     switch(exit$1)
                      {case 121:
                        var $js$14=List["map"];
                        return $js$14(function(i$2){return i$2[1]},l$1)
                       }}
                   else
                    {var $js$15=List["map"];
                     return $js$15(function(i$2){return i$2[1]},info_list[1])}}
                 else
                  {return [0,"info",0]}}}
             else
              if($js$4=="set")
               {var exit$2=123}
              else
               if($js$4=="show"){var exit$2=123}else{var exit$2=124}
            switch(exit$2)
             {case 124:
               var $js$16=l[2];
               if($js$16)
                {var exit=122}
               else
                {var $js$17="unknown primitive:caml_string_equal";
                 if($js$17){return 0}else{return [0,i[1],0]}}
              case 123:
               var $js$18=l[2];
               if($js$18)
                {var exit=122}
               else
                {var $js$19="unknown primitive:caml_string_equal";
                 if($js$19)
                  {var $js$20=Parser["identifier_or_eol"];
                   var match$2=$js$20(Lexer["lexeme"],lexbuf$1);
                   var $js$21=match$2;
                   if($js$21)
                    {var ident$1=match$2[1];
                     var l$2=matching_variables(ident$1);
                     var $js$22=l$2;
                     if($js$22)
                      {var $js$23=l$2[2];
                       if($js$23)
                        {var exit$3=120}
                       else
                        {var v=l$2[1];
                         var $js$24="unknown primitive:caml_string_equal";
                         if($js$24){return 0}else{return [0,v[1],0]}}}
                     else
                      {var exit$3=120}
                     switch(exit$3)
                      {case 120:
                        var $js$25=List["map"];
                        return $js$25(function(v$1){return v$1[1]},l$2)
                       }}
                   else
                    {var $js$26=List["map"];
                     return $js$26(function(v$1){return v$1[1]},variable_list[1])}}
                 else
                  {return [0,i_full,0]}}
              }}
          else
           {var exit=122}
          switch(exit)
           {case 122:
             var $js$27=List["map"];
             return $js$27(function(i$2){return i$2[1]},l)
            }}
        else
         {var $js$28=List["map"];
          return $js$28(function(i$2){return i$2[1]},instruction_list[1])}};
    var $js$1=match_list(lexbuf);
    return print_list($js$1)};
var
 instr_help=
  function(ppf,lexbuf)
   {var
     pr_instrs=
      function(ppf$1)
       {var $js$1=List["iter"];
        return $js$1
                (function(i)
                  {var $js$2=Format["fprintf"];
                   return $js$2
                           (ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],i[1])})};
    var $js$1=Parser["identifier_or_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2)
     {var x=match[1];
      var
       print_help=
        function(nm,hlp)
         {eol(lexbuf);
          var $js$3=Format["fprintf"];
          return $js$3
                  (ppf,[0,[2,0,[11,": ",[2,0,[17,4,0]]]],"%s: %s@."],nm,hlp)};
      var l=matching_instructions(x);
      var $js$3=l;
      if($js$3)
       {var i=l[1];
        var $js$4=i[1];
        if($js$4=="info")
         {var $js$5=l[2];
          if($js$5)
           {var exit=114}
          else
           {return find_info
                    (function(i$1,param,param$1)
                      {var $js$6=Pervasives["^"];
                       var $js$7=$js$6("info ",i$1[1]);
                       return print_help($js$7,i$1[3])},
                     function(ppf$1)
                      {print_help
                        ("info","display infos about the program being debugged.");
                       return print_info_list(ppf$1)},
                     ppf,
                     lexbuf)}}
        else
         if($js$4=="set")
          {var $js$6=l[2];
           if($js$6)
            {var exit=114}
           else
            {return find_variable
                     (function(v,param,param$1)
                       {var $js$7=Pervasives["^"];
                        var $js$8=$js$7("set ",v[1]);
                        var $js$9=Pervasives["^"];
                        var $js$10=$js$9("set ",v[3]);
                        return print_help($js$8,$js$10)},
                      function(ppf$1)
                       {print_help("set","set debugger variable.");
                        return print_variable_list(ppf$1)},
                      ppf,
                      lexbuf)}}
         else
          if($js$4=="show")
           {var $js$7=l[2];
            if($js$7)
             {var exit=114}
            else
             {return find_variable
                      (function(v,param,param$1)
                        {var $js$8=Pervasives["^"];
                         var $js$9=$js$8("show ",v[1]);
                         var $js$10=Pervasives["^"];
                         var $js$11=$js$10("show ",v[3]);
                         return print_help($js$9,$js$11)},
                       function(v)
                        {print_help("show","display debugger variable.");
                         return print_variable_list(ppf)},
                       ppf,
                       lexbuf)}}
          else
           {var exit$1=115}
        switch(exit$1)
         {case 115:
           var $js$8=l[2];
           if($js$8){var exit=114}else{return print_help(i[1],i[5])}
          }}
      else
       {eol(lexbuf);
        var $js$9=Format["fprintf"];
        return $js$9
                (ppf,
                 [0,
                  [11,"No matching command.",[17,4,0]],
                  "No matching command.@."])}
      switch(exit)
       {case 114:
         eol(lexbuf);
         var $js$10=Format["fprintf"];
         return $js$10
                 (ppf,
                  [0,
                   [11,'Ambiguous command "',[2,0,[11,'": ',[15,[17,4,0]]]]],
                   'Ambiguous command "%s": %a@.'],
                  x,
                  pr_instrs,
                  l)
        }}
    else
     {var $js$11=Format["fprintf"];
      return $js$11
              (ppf,
               [0,
                [11,"List of commands: ",[15,[17,4,0]]],
                "List of commands: %a@."],
               pr_instrs,
               instruction_list[1])}};
var
 print_expr=
  function(depth,ev,env,ppf,expr)
   {try
     {var $js$1=Eval["expression"];
      var match=$js$1(ev,env,expr);
      var $js$2=Printval["print_named_value"];
      return $js$2(depth,expr,env,match[1],ppf,match[2])}
    catch(exn)
     {var $js$3=exn[1]=Eval["Error"];
      if($js$3)
       {var $js$4=Eval["report_error"];
        $js$4(ppf,exn[2]);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 env_of_event=
  function(param)
   {var $js$1=param;
    if($js$1)
     {var ev=param[1];
      var $js$2=Envaux["env_from_summary"];
      return $js$2(ev[6],ev[7])}
    else
     {return Env["empty"]}};
var
 print_command=
  function(depth,ppf,lexbuf)
   {var $js$1=Parser["expression_list_eol"];
    var exprs=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=Program_management["ensure_loaded"];
    $js$2(0);
    try
     {var env=env_of_event(Frames["selected_event"][1])}
    catch(exn)
     {var $js$3=exn[1]=Envaux["Error"];
      if($js$3)
       {var $js$4=Envaux["report_error"];
        $js$4(ppf,exn[2]);
        var env="unknown primitive:raise"}
      else
       {var env="unknown primitive:reraise"}}
    var $js$5=List["iter"];
    var $js$6=print_expr(depth,Frames["selected_event"][1],env,ppf);
    return $js$5($js$6,exprs)};
var
 instr_print=
  function(ppf,lexbuf)
   {return print_command(Printval["max_printer_depth"][1],ppf,lexbuf)};
var instr_display=function(ppf,lexbuf){return print_command(1,ppf,lexbuf)};
var
 extract_filename=
  function(arg)
   {var l=arg["length"];
    var $js$1=l>0&&(arg[0]=34);
    if($js$1){var pos1=1}else{var pos1=0}
    var $js$2=l>0&&(arg[l-1]=34);
    if($js$2){var pos2=l-1}else{var pos2=l}
    var $js$3=String["sub"];
    return $js$3(arg,pos1,pos2-pos1)};
var
 instr_source=
  function(ppf,lexbuf)
   {var $js$1=Parser["argument_eol"];
    var $js$2=$js$1(Lexer["argument"],lexbuf);
    var file=extract_filename($js$2);
    var old_state=Input_handling["interactif"][1];
    var old_channel=Input_handling["user_channel"][1];
    try
     {var $js$3=Primitives["io_channel_of_descr"];
      var $js$4=Unix["openfile"];
      var $js$5=Misc["find_in_path"];
      var $js$6=Unix_tools["expand_path"];
      var $js$7=$js$6(file);
      var $js$8=$js$5(Config["load_path"][1],$js$7);
      var $js$9=$js$4($js$8,[0,0,0],0);
      var io_chan=$js$3($js$9)}
    catch(x)
     {var $js$10=x=Not_found;
      if($js$10)
       {var io_chan=error("Source file not found.")}
      else
       {var $js$11=x[1]=Unix["Unix_error"];
        if($js$11)
         {var $js$12=Unix_tools["report_error"];
          $js$12(x);
          var io_chan="unknown primitive:raise"}
        else
         {var io_chan="unknown primitive:reraise"}}}
    try
     {Input_handling["interactif"][1]=0,0;
      Input_handling["user_channel"][1]=io_chan,0;
      var $js$13=Lexing["from_function"];
      var $js$14=$js$13(Input_handling["read_user_input"]);
      line_loop(ppf,$js$14);
      var $js$15=Primitives["close_io"];
      $js$15(io_chan);
      Input_handling["interactif"][1]=old_state,0;
      return Input_handling["user_channel"][1]=old_channel,0}
    catch(x$1)
     {var $js$16=Input_handling["stop_user_input"];
      $js$16(0);
      var $js$17=Primitives["close_io"];
      $js$17(io_chan);
      Input_handling["interactif"][1]=old_state,0;
      Input_handling["user_channel"][1]=old_channel,0;
      return "unknown primitive:reraise"}};
var
 instr_set=
  find_variable
   (function(param,ppf,lexbuf){var $js$1=param[2][1];return $js$1(lexbuf)},
    function(ppf){return error("Argument required.")});
var
 instr_show=
  find_variable
   (function(param,ppf,lexbuf)
     {eol(lexbuf);var $js$1=param[2][2];return $js$1(ppf)},
    function(ppf)
     {var $js$1=List["iter"];
      return $js$1
              (function(param)
                {var $js$2=Format["fprintf"];
                 $js$2(ppf,[0,[2,0,[11,": ",0]],"%s: "],param[1]);
                 var $js$3=param[2][2];
                 return $js$3(ppf)},
               variable_list[1])});
var
 instr_info=
  find_info
   (function(i,ppf,lexbuf){var $js$1=i[2];return $js$1(lexbuf)},
    function(ppf)
     {return error('"info" must be followed by the name of an info command.')});
var
 instr_break=
  function(ppf,lexbuf)
   {var $js$1=Parser["break_argument_eol"];
    var argument=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=Program_management["ensure_loaded"];
    $js$2(0);
    var $js$3=argument;
    if(typeof $js$3=="number")
     {if($js$3==0)
       {var match=Frames["selected_event"][1];
        var $js$4=match;
        if($js$4)
         {var $js$5=Breakpoints["new_breakpoint"];return $js$5(match[1])}
        else
         {return error("Can't add breakpoint at this point.")}}}
    else
     {var $js$6=$js$3[0];
      if($js$6==0)
       {return add_breakpoint_at_pc(argument[1])}
      else
       if($js$6==1)
        {try
          {var env=env_of_event(Frames["selected_event"][1])}
         catch(exn)
          {var $js$7=exn[1]=Envaux["Error"];
           if($js$7)
            {var $js$8=Envaux["report_error"];
             $js$8(ppf,exn[2]);
             var env="unknown primitive:raise"}
           else
            {var env="unknown primitive:reraise"}}
         try
          {var $js$9=Eval["expression"];
           var match$1=$js$9(Frames["selected_event"][1],env,argument[1]);
           var $js$10=Ctype["repr"];
           var $js$11=$js$10(match$1[2]);
           var match$2=$js$11[1];
           var $js$12=match$2;
           if(typeof $js$12=="number")
            {"unknown block:match/1780"}
           else
            {var $js$13=$js$12[0];
             if($js$13==1)
              {var $js$14=Debugcom["Remote_value"][12];
               var $js$15=$js$14(match$1[1]);
               return add_breakpoint_after_pc($js$15)}
             else
              {var exit=75}}
           switch(exit)
            {case 75:
              var $js$16=Format["eprintf"];
              $js$16([0,[11,"Not a function.",[17,4,0]],"Not a function.@."]);
              return "unknown primitive:raise"
             }}
         catch(exn$1)
          {var $js$17=exn$1[1]=Eval["Error"];
           if($js$17)
            {var $js$18=Eval["report_error"];
             $js$18(ppf,exn$1[2]);
             return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}}
       else
        if($js$6==2)
         {var column=argument[3];
          var line=argument[2];
          var $js$19=module_of_longident(argument[1]);
          var module_name=convert_module($js$19);
          var $js$20=Breakpoints["new_breakpoint"];
          try
           {var $js$21=Symbols["event_at_pos"];
            var ev=$js$21(module_name,0);
            var init=Lexing["dummy_pos"];
            var $js$22=Events["get_pos"];
            var $js$23=$js$22(ev);
            var $js$24=$js$23[1];
            var ev_pos=[0,$js$24,init[2],init[3],init[4]];
            try
             {var $js$25=Source["get_buffer"];
              var buffer=$js$25(ev_pos,module_name)}
            catch(exn$2)
             {var $js$26=exn$2=Not_found;
              if($js$26)
               {var $js$27=Format["eprintf"];
                $js$27
                 ([0,
                   [11,"No source file for ",[2,0,[12,46,[17,4,0]]]],
                   "No source file for %s.@."],
                  module_name);
                var buffer="unknown primitive:raise"}
              else
               {var buffer="unknown primitive:reraise"}}
            var $js$28=column;
            if($js$28)
             {var $js$29=Symbols["event_near_pos"];
              var $js$30=Source["point_of_coord"];
              var $js$31=$js$30(buffer,line,column[1]);
              var $js$32=$js$29(module_name,$js$31)}
            else
             {var $js$33=Symbols["event_at_pos"];
              var $js$34=Source["pos_of_line"];
              var $js$35=$js$34(buffer,line);
              var $js$36=$js$35[1];
              var $js$32=$js$33(module_name,$js$36)}}
          catch(exn$3)
           {var $js$37=exn$3=Not_found;
            if($js$37)
             {var $js$38=Format["eprintf"];
              $js$38
               ([0,
                 [11,"Can't find any event there.",[17,4,0]],
                 "Can't find any event there.@."]);
              var $js$32="unknown primitive:raise"}
            else
             {var $js$39=exn$3=Primitives["Out_of_range"];
              if($js$39)
               {var $js$40=Format["eprintf"];
                $js$40
                 ([0,
                   [11,"Position out of range.",[17,4,0]],
                   "Position out of range.@."]);
                var $js$32="unknown primitive:raise"}
              else
               {var $js$32="unknown primitive:reraise"}}}
          return $js$20($js$32)}
        else
         if($js$6==3)
          {try
            {var $js$41=Breakpoints["new_breakpoint"];
             var $js$42=Symbols["event_near_pos"];
             var $js$43=module_of_longident(argument[1]);
             var $js$44=convert_module($js$43);
             var $js$45=$js$42($js$44,argument[2]);
             return $js$41($js$45)}
           catch(exn$4)
            {var $js$46=exn$4=Not_found;
             if($js$46)
              {var $js$47=Format["eprintf"];
               return $js$47
                       ([0,
                         [11,"Can't find any event there.",[17,4,0]],
                         "Can't find any event there.@."])}
             else
              {return "unknown primitive:reraise"}}}}};
var
 instr_delete=
  function(ppf,lexbuf)
   {var $js$1=Parser["integer_list_eol"];
    var breakpoints=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=breakpoints;
    if($js$2)
     {var $js$3=List["iter"];
      return $js$3
              (function(x)
                {try
                  {var $js$4=Breakpoints["remove_breakpoint"];return $js$4(x)}
                 catch(exn)
                  {var $js$5=exn=Not_found;
                   if($js$5){return 0}else{return "unknown primitive:reraise"}}},
               breakpoints)}
    else
     {var $js$4=Breakpoints["breakpoints_count"];
      var $js$5=$js$4(0);
      var $js$6=$js$5!=0;
      var $js$7=Question["yes_or_no"];
      var $js$8=$js$7("Delete all breakpoints");
      var $js$9=$js$6&&$js$8;
      if($js$9)
       {var $js$10=Breakpoints["remove_all_breakpoints"];return $js$10(0)}
      else
       {return 0}}};
var
 instr_frame=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_integer_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2)
     {var frame_number=match[1]}
    else
     {var frame_number=Frames["current_frame"][1]}
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    try
     {var $js$4=Frames["select_frame"];
      $js$4(frame_number);
      var $js$5=Show_information["show_current_frame"];
      return $js$5(ppf,1)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6)
       {var $js$7=Pervasives["^"];
        var $js$8=Pervasives["^"];
        var $js$9=Pervasives["string_of_int"];
        var $js$10=$js$9(frame_number);
        var $js$11=$js$8($js$10,".");
        var $js$12=$js$7("No frame number ",$js$11);
        return error($js$12)}
      else
       {return "unknown primitive:reraise"}}};
var
 instr_backtrace=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_signed_integer_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var number=match[1]}else{var number=0}
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    var $js$4=Checkpoints["current_report"];
    var match$1=$js$4(0);
    var $js$5=match$1;
    if($js$5)
     {var match$2=match$1[1][1];
      var $js$6=match$2!=2;
      if($js$6)
       {var $js$7=match$2>=4;
        if($js$7)
         {var exit=64}
        else
         {var frame_counter=[0,0];
          var
           print_frame=
            function(first_frame,last_frame,param)
             {var $js$8=param;
              if($js$8)
               {var $js$9=frame_counter[1]>=first_frame;
                if($js$9)
                 {var $js$10=Show_information["show_one_frame"];
                  $js$10(frame_counter[1],ppf,param[1])}
                else
                 {}
                frame_counter[0]++;
                var $js$11=frame_counter[1]>=last_frame;
                if($js$11)
                 {var $js$12=Format["fprintf"];
                  $js$12
                   (ppf,
                    [0,
                     [11,"(More frames follow)",[17,4,0]],
                     "(More frames follow)@."])}
                else
                 {}
                return frame_counter[1]<last_frame}
              else
               {var $js$13=Format["fprintf"];
                $js$13
                 (ppf,
                  [0,
                   [11,
                    "(Encountered a function with no debugging information)",
                    [17,4,0]],
                   "(Encountered a function with no debugging information)@."]);
                return 0}};
          var $js$8=Format["fprintf"];
          $js$8(ppf,[0,[11,"Backtrace:",[17,4,0]],"Backtrace:@."]);
          var $js$9=number=0;
          if($js$9)
           {var $js$10=Frames["do_backtrace"];
            var $js$11=print_frame(0,Pervasives["max_int"]);
            return $js$10($js$11)}
          else
           {var $js$12=number>0;
            if($js$12)
             {var $js$13=Frames["do_backtrace"];
              var $js$14=print_frame(0,number);
              return $js$13($js$14)}
            else
             {var $js$15=Frames["stack_depth"];
              var num_frames=$js$15(0);
              var $js$16=num_frames<0;
              if($js$16)
               {var $js$17=Format["fprintf"];
                return $js$17
                        (ppf,
                         [0,
                          [11,
                           "(Encountered a function with no debugging information)",
                           [17,4,0]],
                          "(Encountered a function with no debugging information)@."])}
              else
               {var $js$18=Frames["do_backtrace"];
                var
                 $js$19=
                  print_frame(num_frames+number,Pervasives["max_int"]);
                return $js$18($js$19)}}}}}
      else
       {var exit=64}
      switch(exit){case 64:var exit$1=63}}
    else
     {var exit$1=63}
    switch(exit$1){case 63:return 0}};
var
 instr_up=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_signed_integer_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var offset=match[1]}else{var offset=1}
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    try
     {var $js$4=Frames["select_frame"];
      $js$4(Frames["current_frame"][1]+offset);
      var $js$5=Show_information["show_current_frame"];
      return $js$5(ppf,1)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6)
       {return error("No such frame.")}
      else
       {return "unknown primitive:reraise"}}};
var
 instr_down=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_signed_integer_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var offset=match[1]}else{var offset=1}
    var $js$3=Program_management["ensure_loaded"];
    $js$3(0);
    try
     {var $js$4=Frames["select_frame"];
      $js$4(Frames["current_frame"][1]-offset);
      var $js$5=Show_information["show_current_frame"];
      return $js$5(ppf,1)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6)
       {return error("No such frame.")}
      else
       {return "unknown primitive:reraise"}}};
var
 instr_last=
  function(ppf,lexbuf)
   {var $js$1=Parser["opt_signed_int64_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var $js$2=match;
    if($js$2){var count=match[1]}else{var count=Int64ops["_1"]}
    check_not_windows("last");
    var $js$3=Printval["reset_named_values"];
    $js$3(0);
    var $js$4=Time_travel["go_to"];
    var $js$5=History["previous_time"];
    var $js$6=$js$5(count);
    $js$4($js$6);
    var $js$7=Show_information["show_current_event"];
    return $js$7(ppf)};
var
 instr_list=
  function(ppf,lexbuf)
   {var $js$1=Parser["list_arguments_eol"];
    var match=$js$1(Lexer["lexeme"],lexbuf);
    var e=match[3];
    var beg=match[2];
    var mo=match[1];
    try
     {var $js$2=Frames["selected_point"];var match$1=$js$2(0)}
    catch(exn)
     {var $js$3=exn=Not_found;
      if($js$3)
       {var match$1=[0,"",-1,-1]}
      else
       {var match$1="unknown primitive:reraise"}}
    var column=match$1[3];
    var line=match$1[2];
    var $js$4=module_of_longident(mo);
    var mdle=convert_module($js$4);
    var pos=Lexing["dummy_pos"];
    try
     {var $js$5=Source["get_buffer"];var buffer=$js$5(pos,mdle)}
    catch(exn$1)
     {var $js$6=exn$1=Not_found;
      if($js$6)
       {var $js$7=Pervasives["^"];
        var $js$8=Pervasives["^"];
        var $js$9=$js$8(mdle,".");
        var $js$10=$js$7("No source file for ",$js$9);
        var buffer=error($js$10)}
      else
       {var buffer="unknown primitive:reraise"}}
    var $js$11=column!=-1;
    if($js$11)
     {var $js$12=Source["point_of_coord"];
      var $js$13=$js$12(buffer,line,1);
      var point=$js$13+column}
    else
     {var point=-1}
    var $js$14=beg;
    if($js$14)
     {var beginning=beg[1]}
    else
     {var $js$15=mo!=0||(line=-1);
      if($js$15)
       {var beginning=1}
      else
       {try
         {var $js$16=Pervasives["max"];var beginning=$js$16(1,line-10)}
        catch(exn$2)
         {var $js$17=exn$2=Primitives["Out_of_range"];
          if($js$17)
           {var beginning=1}
          else
           {var beginning="unknown primitive:reraise"}}}}
    var $js$18=e;
    if($js$18){var en=e[1]}else{var en=beginning+20}
    var $js$19="unknown primitive:caml_string_equal";
    if($js$19)
     {var $js$20=Show_source["show_listing"];
      var $js$21=Events["current_event_is_before"];
      var $js$22=$js$21(0);
      return $js$20(pos,mdle,beginning,en,point,$js$22)}
    else
     {var $js$23=Show_source["show_listing"];
      return $js$23(pos,mdle,beginning,en,-1,1)}};
var
 raw_variable=
  function(kill,name)
   {return [0,
            function(lexbuf)
             {var $js$1=Parser["argument_eol"];
              var argument=$js$1(Lexer["argument"],lexbuf);
              var $js$2=Program_management["ask_kill_program"];
              var $js$3=$js$2(0);
              var $js$4=!kill||$js$3;
              if($js$4){return name[1]=argument,0}else{return 0}},
            function(ppf)
             {var $js$1=Format["fprintf"];
              return $js$1(ppf,[0,[2,0,[17,4,0]],"%s@."],name[1])}]};
var
 raw_line_variable=
  function(kill,name)
   {return [0,
            function(lexbuf)
             {var $js$1=Parser["argument_eol"];
              var argument=$js$1(Lexer["line_argument"],lexbuf);
              var $js$2=Program_management["ask_kill_program"];
              var $js$3=$js$2(0);
              var $js$4=!kill||$js$3;
              if($js$4){return name[1]=argument,0}else{return 0}},
            function(ppf)
             {var $js$1=Format["fprintf"];
              return $js$1(ppf,[0,[2,0,[17,4,0]],"%s@."],name[1])}]};
var
 integer_variable=
  function(kill,min,msg,name)
   {return [0,
            function(lexbuf)
             {var $js$1=Parser["integer_eol"];
              var argument=$js$1(Lexer["lexeme"],lexbuf);
              var $js$2=argument<min;
              if($js$2)
               {var $js$3=Pervasives["print_endline"];return $js$3(msg)}
              else
               {var $js$4=Program_management["ask_kill_program"];
                var $js$5=$js$4(0);
                var $js$6=!kill||$js$5;
                if($js$6){return name[1]=argument,0}else{return 0}}},
            function(ppf)
             {var $js$1=Format["fprintf"];
              return $js$1(ppf,[0,[4,3,0,0,[17,4,0]],"%i@."],name[1])}]};
var
 int64_variable=
  function(kill,min,msg,name)
   {return [0,
            function(lexbuf)
             {var $js$1=Parser["int64_eol"];
              var argument=$js$1(Lexer["lexeme"],lexbuf);
              var $js$2=argument<min;
              if($js$2)
               {var $js$3=Pervasives["print_endline"];return $js$3(msg)}
              else
               {var $js$4=Program_management["ask_kill_program"];
                var $js$5=$js$4(0);
                var $js$6=!kill||$js$5;
                if($js$6){return name[1]=argument,0}else{return 0}}},
            function(ppf)
             {var $js$1=Format["fprintf"];
              return $js$1(ppf,[0,[7,3,0,0,[17,4,0]],"%Li@."],name[1])}]};
var
 boolean_variable=
  function(kill,name)
   {return [0,
            function(lexbuf)
             {var $js$1=Parser["identifier_eol"];
              var match=$js$1(Lexer["lexeme"],lexbuf);
              var $js$2=match;
              if($js$2=="of")
               {var exit=28}
              else
               if($js$2=="off")
                {var exit=28}
               else
                if($js$2=="on"){var argument=1}else{var exit=29}
              switch(exit)
               {case 29:var argument=error("Syntax error.");
                case 28:var argument=0
                }
              var $js$3=Program_management["ask_kill_program"];
              var $js$4=$js$3(0);
              var $js$5=!kill||$js$4;
              if($js$5){return name[1]=argument,0}else{return 0}},
            function(ppf)
             {var $js$1=Format["fprintf"];
              var $js$2=name[1];
              if($js$2){var $js$3="on"}else{var $js$3="off"}
              return $js$1(ppf,[0,[2,0,[17,4,0]],"%s@."],$js$3)}]};
var
 path_variable=
  function(kill,name)
   {return [0,
            function(lexbuf)
             {var $js$1=Parser["argument_eol"];
              var argument=$js$1(Lexer["argument"],lexbuf);
              var $js$2=Program_management["ask_kill_program"];
              var $js$3=$js$2(0);
              var $js$4=!kill||$js$3;
              if($js$4)
               {var $js$5=Unix_tools["make_absolute"];
                var $js$6=Unix_tools["expand_path"];
                var $js$7=$js$6(argument);
                var $js$8=$js$5($js$7);
                return name[1]=$js$8,0}
              else
               {return 0}},
            function(ppf)
             {var $js$1=Format["fprintf"];
              return $js$1(ppf,[0,[2,0,[17,4,0]],"%s@."],name[1])}]};
var
 loading_mode_variable=
  function(ppf)
   {var
     $js$1=
      matching_elements
       ([0,Program_loading["loading_modes"]],function(prim){return prim[1]});
    var
     $js$2=
      find_ident
       ("loading mode",
        $js$1,
        function(param,ppf$1,lexbuf)
         {eol(lexbuf);
          var $js$3=Program_loading["set_launching_function"];
          return $js$3(param[2])},
        function(ppf$1){return error("Syntax error.")},
        ppf);
    return [0,
            $js$2,
            function(ppf$1)
             {var
               find=
                function(param)
                 {var $js$3=param;
                  if($js$3)
                   {var match=param[1];
                    var $js$4=match[2]=Program_loading["launching_func"][1];
                    if($js$4)
                     {var $js$5=Format["fprintf"];
                      return $js$5(ppf$1,[0,[2,0,0],"%s"],match[1])}
                    else
                     {return find(param[2])}}
                  else
                   {return 0}};
              find(Program_loading["loading_modes"]);
              var $js$3=Format["fprintf"];
              return $js$3(ppf$1,[0,[17,4,0],"@."])}]};
var
 follow_fork_variable=
  [0,
   function(lexbuf)
    {var $js$1=Parser["identifier_eol"];
     var match=$js$1(Lexer["lexeme"],lexbuf);
     var $js$2=match;
     if($js$2=="child")
      {var mode=0}
     else
      if($js$2=="parent"){var mode=1}else{var exit=22}
     switch(exit){case 22:var mode=error("Syntax error.")}
     Debugcom["fork_mode"][1]=mode,0;
     var $js$3=Program_management["loaded"][1];
     if($js$3)
      {var $js$4=Debugcom["update_follow_fork_mode"];return $js$4(0)}
     else
      {return 0}},
   function(ppf)
    {var $js$1=Format["fprintf"];
     var match=Debugcom["fork_mode"][1];
     var $js$2=match!=0;
     if($js$2){var $js$3="parent"}else{var $js$3="child"}
     return $js$1(ppf,[0,[2,0,[17,4,0]],"%s@."],$js$3)}];
var
 pr_modules=
  function(ppf,mods)
   {var
     pr_mods=
      function(ppf$1)
       {var $js$1=List["iter"];
        return $js$1
                (function(x)
                  {var $js$2=Format["fprintf"];
                   return $js$2(ppf$1,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],x)})};
    var $js$1=Format["fprintf"];
    return $js$1
            (ppf,
             [0,
              [11,"Used modules: ",[17,4,[15,[17,2,0]]]],
              "Used modules: @.%a@?"],
             pr_mods,
             mods)};
var
 info_modules=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=Program_management["ensure_loaded"];
    $js$1(0);
    return pr_modules(ppf,Symbols["modules"][1])};
var
 info_checkpoints=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=Checkpoints["checkpoints"][1]=0;
    if($js$1)
     {var $js$2=Format["fprintf"];
      return $js$2(ppf,[0,[11,"No checkpoint.",[17,4,0]],"No checkpoint.@."])}
    else
     {var $js$3=Breakpoints["debug_breakpoints"][1];
      if($js$3)
       {var $js$4=Pervasives["prerr_endline"];
        $js$4("               Time   Pid Version");
        var $js$5=List["iter"];
        return $js$5
                (function(param)
                  {var time=param[1];
                   var pid=param[2];
                   var version=param[8];
                   var $js$6=Printf["printf"];
                   return $js$6
                           ([0,
                             [7,
                              0,
                              [0,1,19],
                              0,
                              [12,32,[4,0,[0,1,5],0,[12,32,[4,0,0,0,[12,10,0]]]]]],
                             "%19Ld %5d %d\n"],
                            time,
                            pid,
                            version)},
                 Checkpoints["checkpoints"][1])}
      else
       {var $js$6=Pervasives["print_endline"];
        $js$6("               Time   Pid");
        var $js$7=List["iter"];
        return $js$7
                (function(param)
                  {var time=param[1];
                   var pid=param[2];
                   var $js$8=Printf["printf"];
                   return $js$8
                           ([0,
                             [7,0,[0,1,19],0,[12,32,[4,0,[0,1,5],0,[12,10,0]]]],
                             "%19Ld %5d\n"],
                            time,
                            pid)},
                 Checkpoints["checkpoints"][1])}}};
var
 info_one_breakpoint=
  function(ppf,param)
   {var ev=param[2];
    var $js$1=Format["fprintf"];
    var $js$2=Pos["get_desc"];
    var $js$3=$js$2(ev);
    return $js$1
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
             $js$3)};
var
 info_breakpoints=
  function(ppf,lexbuf)
   {eol(lexbuf);
    var $js$1=Breakpoints["breakpoints"][1]=0;
    if($js$1)
     {var $js$2=Format["fprintf"];
      return $js$2
              (ppf,[0,[11,"No breakpoints.",[17,4,0]],"No breakpoints.@."])}
    else
     {var $js$3=Format["fprintf"];
      $js$3
       (ppf,
        [0,[11,"Num    Address  Where",[17,4,0]],"Num    Address  Where@."]);
      var $js$4=List["iter"];
      var $js$5=info_one_breakpoint(ppf);
      var $js$6=List["rev"];
      var $js$7=$js$6(Breakpoints["breakpoints"][1]);
      return $js$4($js$5,$js$7)}};
var
 info_events=
  function(ppf,lexbuf)
   {var $js$1=Program_management["ensure_loaded"];
    $js$1(0);
    var $js$2=Parser["opt_longident_eol"];
    var $js$3=$js$2(Lexer["lexeme"],lexbuf);
    var $js$4=module_of_longident($js$3);
    var mdle=convert_module($js$4);
    var $js$5=Pervasives["print_endline"];
    var $js$6=Pervasives["^"];
    var $js$7=$js$6("Module: ",mdle);
    $js$5($js$7);
    var $js$8=Pervasives["print_endline"];
    $js$8("   Address  Characters        Kind      Repr.");
    var $js$9=List["iter"];
    var $js$10=Symbols["events_in_module"];
    var $js$11=$js$10(mdle);
    return $js$9
            (function(ev)
              {try
                {var $js$12=Source["get_buffer"];
                 var $js$13=Events["get_pos"];
                 var $js$14=$js$13(ev);
                 var buffer=$js$12($js$14,ev[2]);
                 var $js$15=Source["start_and_cnum"];
                 var $js$16=$js$15(buffer,ev[3][1]);
                 var $js$17=$js$16[2];
                 var $js$18=Source["start_and_cnum"];
                 var $js$19=$js$18(buffer,ev[3][2]);
                 var $js$20=$js$19[2];
                 var match=[0,$js$17,$js$20]}
               catch(exn){var match=[0,ev[3][1][4],ev[3][2][4]]}
               var $js$21=Printf["printf"];
               var $js$22=Pervasives["^"];
               var match$1=ev[4];
               var $js$23="unknown primitive:isint";
               if($js$23)
                {var $js$24=match$1!=0;
                 if($js$24){var $js$25="pseudo"}else{var $js$25="before"}}
               else
                {var $js$25="after"}
               var match$2=ev[5];
               var $js$26="unknown primitive:isint";
               if($js$26)
                {var $js$27=match$2!=0;
                 if($js$27){var $js$28=""}else{var $js$28="/fun"}}
               else
                {var $js$28="/ret"}
               var $js$29=$js$22($js$25,$js$28);
               var match$3=ev[10];
               var $js$30=match$3;
               if(typeof $js$30=="number")
                {if($js$30==0){var $js$31=""}}
               else
                {var $js$32=$js$30[0];
                 if($js$32==0)
                  {var $js$31="(repr)"}
                 else
                  if($js$32==1)
                   {var $js$33=Pervasives["string_of_int"];
                    var $js$31=$js$33(match$3[1][1])}}
               return $js$21
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
                        $js$29,
                        $js$31)},
             $js$11)};
var
 instr_load_printer=
  function(ppf,lexbuf)
   {var $js$1=Parser["argument_eol"];
    var $js$2=$js$1(Lexer["argument"],lexbuf);
    var filename=extract_filename($js$2);
    try
     {var $js$3=Loadprinter["loadfile"];return $js$3(ppf,filename)}
    catch(exn)
     {var $js$4=exn[1]=Loadprinter["Error"];
      if($js$4)
       {var $js$5=Loadprinter["report_error"];
        $js$5(ppf,exn[2]);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 instr_install_printer=
  function(ppf,lexbuf)
   {var $js$1=Parser["longident_eol"];
    var lid=$js$1(Lexer["lexeme"],lexbuf);
    try
     {var $js$2=Loadprinter["install_printer"];return $js$2(ppf,lid)}
    catch(exn)
     {var $js$3=exn[1]=Loadprinter["Error"];
      if($js$3)
       {var $js$4=Loadprinter["report_error"];
        $js$4(ppf,exn[2]);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 instr_remove_printer=
  function(ppf,lexbuf)
   {var $js$1=Parser["longident_eol"];
    var lid=$js$1(Lexer["lexeme"],lexbuf);
    try
     {var $js$2=Loadprinter["remove_printer"];return $js$2(lid)}
    catch(exn)
     {var $js$3=exn[1]=Loadprinter["Error"];
      if($js$3)
       {var $js$4=Loadprinter["report_error"];
        $js$4(ppf,exn[2]);
        return "unknown primitive:raise"}
      else
       {return "unknown primitive:reraise"}}};
var
 init=
  function(ppf)
   {instruction_list[1]=
    [0,
     [0,
      "cd",
      0,
      instr_cd,
      1,
      "set working directory to DIR for debugger and program being debugged."],
     [0,
      [0,
       "complete",
       0,
       instr_complete,
       0,
       "complete word at cursor according to context. Useful for Emacs."],
      [0,
       [0,"pwd",0,instr_pwd,1,"print working directory."],
       [0,
        [0,
         "directory",
         0,
         instr_dir,
         0,
         "add directory DIR to beginning of search path for source and\ninterface files.\nForget cached info on source file locations and line positions.\nWith no argument, reset the search path."],
        [0,
         [0,"kill",0,instr_kill,1,"kill the program being debugged."],
         [0,
          [0,"help",0,instr_help,1,"print list of commands."],
          [0,
           [0,"quit",0,instr_quit,0,"exit the debugger."],
           [0,
            [0,
             "shell",
             0,
             instr_shell,
             1,
             "Execute a given COMMAND thru the system shell."],
            [0,
             [0,
              "environment",
              0,
              instr_env,
              0,
              "environment variable to give to program being debugged when it is started."],
             [0,
              [0,"run",1,instr_run,1,"run the program from current position."],
              [0,
               [0,
                "reverse",
                0,
                instr_reverse,
                1,
                "run the program backward from current position."],
               [0,
                [0,
                 "step",
                 1,
                 instr_step,
                 1,
                 "step program until it reaches the next event.\nArgument N means do this N times (or till program stops for another reason)."],
                [0,
                 [0,
                  "backstep",
                  1,
                  instr_back,
                  1,
                  "step program backward until it reaches the previous event.\nArgument N means do this N times (or till program stops for another reason)."],
                 [0,
                  [0,"goto",0,instr_goto,1,"go to the given time."],
                  [0,
                   [0,
                    "finish",
                    1,
                    instr_finish,
                    1,
                    "execute until topmost stack frame returns."],
                   [0,
                    [0,
                     "next",
                     1,
                     instr_next,
                     1,
                     "step program until it reaches the next event.\nSkip over function calls.\nArgument N means do this N times (or till program stops for another reason)."],
                    [0,
                     [0,
                      "start",
                      0,
                      instr_start,
                      1,
                      "execute backward until the current function is exited."],
                     [0,
                      [0,
                       "previous",
                       0,
                       instr_previous,
                       1,
                       "step program until it reaches the previous event.\nSkip over function calls.\nArgument N means do this N times (or till program stops for another reason)."],
                      [0,
                       [0,
                        "print",
                        1,
                        instr_print,
                        1,
                        "print value of expressions (deep printing)."],
                       [0,
                        [0,
                         "display",
                         1,
                         instr_display,
                         1,
                         "print value of expressions (shallow printing)."],
                        [0,
                         [0,"source",0,instr_source,1,"read command from file FILE."],
                         [0,
                          [0,
                           "break",
                           0,
                           instr_break,
                           0,
                           "Set breakpoint at specified line or function.\nSyntax: break function-name\n        break @ [module] linenum\n        break @ [module] # characternum"],
                          [0,
                           [0,
                            "delete",
                            0,
                            instr_delete,
                            0,
                            "delete some breakpoints.\nArguments are breakpoint numbers with spaces in between.\nTo delete all breakpoints, give no argument."],
                           [0,
                            [0,"set",0,instr_set,0,"--unused--"],
                            [0,
                             [0,"show",0,instr_show,1,"--unused--"],
                             [0,
                              [0,"info",0,instr_info,1,"--unused--"],
                              [0,
                               [0,
                                "frame",
                                0,
                                instr_frame,
                                1,
                                "select and print a stack frame.\nWith no argument, print the selected stack frame.\nAn argument specifies the frame to select."],
                               [0,
                                [0,
                                 "backtrace",
                                 0,
                                 instr_backtrace,
                                 1,
                                 "print backtrace of all stack frames, or innermost COUNT frames.\nWith a negative argument, print outermost -COUNT frames."],
                                [0,
                                 [0,
                                  "bt",
                                  0,
                                  instr_backtrace,
                                  1,
                                  "print backtrace of all stack frames, or innermost COUNT frames.\nWith a negative argument, print outermost -COUNT frames."],
                                 [0,
                                  [0,
                                   "up",
                                   0,
                                   instr_up,
                                   1,
                                   "select and print stack frame that called this one.\nAn argument says how many frames up to go."],
                                  [0,
                                   [0,
                                    "down",
                                    0,
                                    instr_down,
                                    1,
                                    "select and print stack frame called by this one.\nAn argument says how many frames down to go."],
                                   [0,
                                    [0,"last",1,instr_last,1,"go back to previous time."],
                                    [0,
                                     [0,"list",0,instr_list,1,"list the source code."],
                                     [0,
                                      [0,
                                       "load_printer",
                                       0,
                                       instr_load_printer,
                                       0,
                                       "load in the debugger a .cmo or .cma file containing printing functions."],
                                      [0,
                                       [0,
                                        "install_printer",
                                        0,
                                        instr_install_printer,
                                        0,
                                        'use the given function for printing values of its input type.\nThe code for the function must have previously been loaded in the debugger\nusing "load_printer".'],
                                       [0,
                                        [0,
                                         "remove_printer",
                                         0,
                                         instr_remove_printer,
                                         0,
                                         "stop using the given function for printing values of its input type."],
                                        0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
    0;
    var $js$1=raw_line_variable(1,Parameters["arguments"]);
    var
     $js$2=
      [0,
       "arguments",
       $js$1,
       "arguments to give program being debugged when it is started."];
    var $js$3=path_variable(1,Parameters["program_name"]);
    var $js$4=[0,"program",$js$3,"name of program to be debugged."];
    var $js$5=loading_mode_variable(ppf);
    var
     $js$6=
      [0,
       "loadingmode",
       $js$5,
       "mode of loading.\nIt can be either:\ndirect: the program is directly called by the debugger.\nruntime: the debugger execute `ocamlrun programname arguments'.\nmanual: the program is not launched by the debugger,\nbut manually by the user."];
    var
     $js$7=
      integer_variable
       (0,1,"Must be >= 1.",Debugger_config["checkpoint_max_count"]);
    var $js$8=[0,"processcount",$js$7,"maximum number of process to keep."];
    var $js$9=boolean_variable(0,Debugger_config["make_checkpoints"]);
    var $js$10=[0,"checkpoints",$js$9,"whether to make checkpoints or not."];
    var
     $js$11=
      int64_variable
       (0,
        Int64ops["_1"],
        "Must be >= 1.",
        Debugger_config["checkpoint_big_step"]);
    var
     $js$12=
      [0,
       "bigstep",
       $js$11,
       "step between checkpoints during long displacements."];
    var
     $js$13=
      int64_variable
       (0,
        Int64ops["_1"],
        "Must be >= 1.",
        Debugger_config["checkpoint_small_step"]);
    var
     $js$14=
      [0,
       "smallstep",
       $js$13,
       "step between checkpoints during small displacements."];
    var $js$15=raw_variable(1,Parameters["socket_name"]);
    var
     $js$16=
      [0,
       "socket",
       $js$15,
       "name of the socket used by communications debugger-runtime."];
    var $js$17=integer_variable(0,0,"",Debugger_config["history_size"]);
    var $js$18=[0,"history",$js$17,"history size."];
    var
     $js$19=
      integer_variable(0,1,"Must be at least 1",Printval["max_printer_depth"]);
    var
     $js$20=
      [0,"print_depth",$js$19,"maximal depth for printing of values."];
    var
     $js$21=
      integer_variable(0,1,"Must be at least 1",Printval["max_printer_steps"]);
    var
     $js$22=
      [0,"print_length",$js$21,"maximal number of value nodes printed."];
    var
     $js$23=
      [0,
       $js$22,
       [0,
        [0,
         "follow_fork_mode",
         follow_fork_variable,
         "process to follow after forking.\nIt can be either :\n  child: the newly created process.\nparent: the process that called fork.\n"],
        0]];
    var $js$24=[0,$js$20,$js$23];
    var $js$25=[0,$js$18,$js$24];
    var $js$26=[0,$js$16,$js$25];
    var $js$27=[0,$js$14,$js$26];
    var $js$28=[0,$js$12,$js$27];
    var $js$29=[0,$js$10,$js$28];
    var $js$30=[0,$js$8,$js$29];
    var $js$31=[0,$js$6,$js$30];
    var $js$32=[0,$js$4,$js$31];
    var $js$33=[0,$js$2,$js$32];
    variable_list[1]=$js$33,0;
    var $js$34=info_modules(ppf);
    var $js$35=[0,"modules",$js$34,"list opened modules."];
    var $js$36=info_checkpoints(ppf);
    var $js$37=[0,"checkpoints",$js$36,"list checkpoints."];
    var $js$38=info_breakpoints(ppf);
    var $js$39=[0,"breakpoints",$js$38,"list breakpoints."];
    var $js$40=info_events(ppf);
    var
     $js$41=
      [0,"events",$js$40,"list events in MODULE (default is current module)."];
    var $js$42=[0,$js$41,0];
    var $js$43=[0,$js$39,$js$42];
    var $js$44=[0,$js$37,$js$43];
    var $js$45=[0,$js$35,$js$44];
    return info_list[1]=$js$45,0};
init(Format["std_formatter"]);
module["exports"]={"interprete_line":interprete_line,"line_loop":line_loop};
