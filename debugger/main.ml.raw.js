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
var Misc=require("Misc");
var Primitives=require("Primitives");
var Unix=require("Unix");
var Unix_tools=require("Unix_tools");
var Filename=require("Filename");
var Lexing=require("Lexing");
var Buffer=require("Buffer");
var Parameters=require("Parameters");
var Debugger_config=require("Debugger_config");
var Exec=require("Exec");
var Printexc=require("Printexc");
var Input_handling=require("Input_handling");
var Time_travel=require("Time_travel");
var Config=require("Config");
var Sys=require("Sys");
var $js=Lexing["from_function"];
var line_buffer=$js(Input_handling["read_user_input"]);
var
 loop=
  function(ppf)
   {var $js$1=Command_line["line_loop"];return $js$1(ppf,line_buffer)};
var current_duration=[0,-1];
var
 protect=
  function(ppf,restart,loop$1)
   {try
     {return loop$1(ppf)}
    catch(x)
     {var $js$1=x=End_of_file;
      if($js$1)
       {return protect
                (ppf,
                 restart,
                 function(ppf$1)
                  {var $js$2=Time_travel["forget_process"];
                   $js$2
                    (Checkpoints["current_checkpoint"][1][3],
                     Checkpoints["current_checkpoint"][1][2]);
                   var $js$3=Format["pp_print_flush"];
                   $js$3(ppf$1,0);
                   var $js$4=Input_handling["stop_user_input"];
                   $js$4(0);
                   return restart(ppf$1)})}
      else
       {var $js$2=x=Debugger_config["Toplevel"];
        if($js$2)
         {return protect
                  (ppf,
                   restart,
                   function(ppf$1)
                    {var $js$3=Format["pp_print_flush"];
                     $js$3(ppf$1,0);
                     var $js$4=Input_handling["stop_user_input"];
                     $js$4(0);
                     return restart(ppf$1)})}
        else
         {var $js$3=x=Sys["Break"];
          if($js$3)
           {return protect
                    (ppf,
                     restart,
                     function(ppf$1)
                      {var $js$4=Format["fprintf"];
                       $js$4
                        (ppf$1,[0,[11,"Interrupted.",[17,4,0]],"Interrupted.@."]);
                       var $js$5=Exec["protect"];
                       $js$5
                        (function(param)
                          {var $js$6=Input_handling["stop_user_input"];
                           $js$6(0);
                           var $js$7=Program_management["loaded"][1];
                           if($js$7)
                            {var $js$8=Frames["try_select_frame"];
                             $js$8(0);
                             var $js$9=Show_information["show_current_event"];
                             return $js$9(ppf$1)}
                           else
                            {return 0}});
                       return restart(ppf$1)})}
          else
           {var $js$4=x=Time_travel["Current_checkpoint_lost"];
            if($js$4)
             {return protect
                      (ppf,
                       restart,
                       function(ppf$1)
                        {var $js$5=Format["fprintf"];
                         $js$5
                          (ppf$1,
                           [0,
                            [11,"Trying to recover...",[17,4,0]],
                            "Trying to recover...@."]);
                         var $js$6=Input_handling["stop_user_input"];
                         $js$6(0);
                         var $js$7=Time_travel["recover"];
                         $js$7(0);
                         var $js$8=Frames["try_select_frame"];
                         $js$8(0);
                         var $js$9=Show_information["show_current_event"];
                         $js$9(ppf$1);
                         return restart(ppf$1)})}
            else
             {var $js$5=x[1]=Time_travel["Current_checkpoint_lost_start_at"];
              if($js$5)
               {var init_duration=x[3];
                var time=x[2];
                return protect
                        (ppf,
                         restart,
                         function(ppf$1)
                          {var $js$6=current_duration[1]=-1;
                           if($js$6)
                            {var $js$7=Format["sprintf"];
                             var
                              msg=
                               $js$7
                                ([0,
                                  [11,
                                   "Restart from time ",
                                   [7,0,0,0,[11," and try to get closer of the problem",0]]],
                                  "Restart from time %Ld and try to get closer of the problem"],
                                 time);
                             var $js$8=Input_handling["stop_user_input"];
                             $js$8(0);
                             var $js$9=Question["yes_or_no"];
                             var $js$10=$js$9(msg);
                             if($js$10)
                              {current_duration[1]=init_duration,0;var b=1}
                             else
                              {var b=0}}
                           else
                            {var b=1}
                           var $js$11=b;
                           if($js$11)
                            {var $js$12=Time_travel["go_to"];
                             $js$12(time);
                             current_duration[1]=current_duration[1]/10,0;
                             var $js$13=current_duration[1]>0;
                             if($js$13)
                              {for(;;)
                                {var $js$14=1;
                                 if($js$14)
                                  {var $js$15=Time_travel["step"];$js$15(current_duration[1])}
                                 else
                                  break}
                               return 0}
                             else
                              {current_duration[1]=-1,0;
                               var $js$16=Input_handling["stop_user_input"];
                               $js$16(0);
                               var $js$17=Show_information["show_current_event"];
                               $js$17(ppf$1);
                               return restart(ppf$1)}}
                           else
                            {var $js$18=Time_travel["recover"];
                             $js$18(0);
                             var $js$19=Show_information["show_current_event"];
                             $js$19(ppf$1);
                             return restart(ppf$1)}})}
              else
               {var $js$6=Program_management["kill_program"];
                $js$6(0);
                return "unknown primitive:reraise"}}}}}}};
var
 execute_file_if_any=
  function(param)
   {var $js$1=Buffer["create"];
    var buffer=$js$1(128);
    try
     {var base=".ocamldebug";
      var $js$2="unknown primitive:caml_sys_file_exists";
      if($js$2)
       {var file=base}
      else
       {var $js$3=Filename["concat"];
        var file=$js$3("unknown primitive:caml_sys_getenv",base)}
      var $js$4=Pervasives["open_in"];
      var ch=$js$4(file);
      var $js$5=Format["fprintf"];
      $js$5
       (Format["std_formatter"],
        [0,[11,"Executing file ",[2,0,[17,4,0]]],"Executing file %s@."],
        file);
      for(;;)
       {var $js$6=1;
        if($js$6)
         {var $js$7=Primitives["string_trim"];
          var $js$8=Pervasives["input_line"];
          var $js$9=$js$8(ch);
          var line=$js$7($js$9);
          var $js$10="unknown primitive:caml_string_notequal"&&line[0]!=35;
          if($js$10)
           {var $js$11=Buffer["add_string"];
            $js$11(buffer,line);
            var $js$12=Buffer["add_char"];
            $js$12(buffer,10)}
          else
           {}}
        else
         break}}
    catch(exn){}
    var $js$13=Buffer["length"];
    var len=$js$13(buffer);
    var $js$14=len>0;
    if($js$14)
     {var $js$15=Buffer["sub"];
      var commands=$js$15(buffer,0,-1+len);
      var $js$16=Command_line["line_loop"];
      var $js$17=Lexing["from_string"];
      var $js$18=$js$17(commands);
      return $js$16(Format["std_formatter"],$js$18)}
    else
     {return 0}};
var
 toplevel_loop=
  function(param)
   {Input_handling["interactif"][1]=0,0;
    Input_handling["current_prompt"][1]="",0;
    execute_file_if_any(0);
    Input_handling["interactif"][1]=1,0;
    Input_handling["current_prompt"][1]=Debugger_config["debugger_prompt"],0;
    return protect(Format["std_formatter"],loop,loop)};
var Found_program_name="unknown primitive:caml_set_oo_id";
var
 anonymous=
  function(s)
   {var $js$1=Unix_tools["make_absolute"];
    var $js$2=$js$1(s);
    Parameters["program_name"][1]=$js$2,0;
    return "unknown primitive:raise"};
var
 add_include=
  function(d)
   {var $js$1=Misc["expand_directory"];
    var $js$2=$js$1(Config["standard_library"],d);
    var $js$3=[0,$js$2,Parameters["default_load_path"][1]];
    return Parameters["default_load_path"][1]=$js$3,0};
var set_socket=function(s){return Parameters["socket_name"][1]=s,0};
var
 set_checkpoints=
  function(n){return Debugger_config["checkpoint_max_count"][1]=n,0};
var set_directory=function(dir){return "unknown primitive:caml_sys_chdir"};
var
 print_version=
  function(param)
   {var $js$1=Format["printf"];
    $js$1
     ([0,
       [11,"The OCaml debugger, version ",[2,0,[17,4,0]]],
       "The OCaml debugger, version %s@."],
      Sys["ocaml_version"]);
    var $js$2=Pervasives["exit"];
    return $js$2(0)};
var
 print_version_num=
  function(param)
   {var $js$1=Format["printf"];
    $js$1([0,[2,0,[17,4,0]],"%s@."],Sys["ocaml_version"]);
    var $js$2=Pervasives["exit"];
    return $js$2(0)};
var
 speclist=
  [0,
   [0,"-c",[6,set_checkpoints],"<count>  Set max number of checkpoints kept"],
   [0,
    [0,"-cd",[4,set_directory],"<dir>  Change working directory"],
    [0,
     [0,
      "-emacs",
      [10,
       [0,[2,Parameters["emacs"]],[0,[2,Parameters["machine_readable"]],0]]],
      "For running the debugger under emacs; implies -machine-readable"],
     [0,
      [0,
       "-I",
       [4,add_include],
       "<dir>  Add <dir> to the list of include directories"],
      [0,
       [0,
        "-machine-readable",
        [2,Parameters["machine_readable"]],
        "Print information in a format more suitable for machines"],
       [0,
        [0,
         "-s",
         [4,set_socket],
         "<filename>  Set the name of the communication socket"],
        [0,
         [0,"-version",[0,print_version]," Print version and exit"],
         [0,
          [0,"-vnum",[0,print_version_num]," Print version number and exit"],
          0]]]]]]]];
var function_placeholder=function(param){return "unknown primitive:raise"};
var
 main=
  function(param)
   {var $js$1=Callback["register"];
    $js$1("Debugger.function_placeholder",function_placeholder);
    try
     {var match=Sys["os_type"];
      var $js$2=match;
      if($js$2=="Win32")
       {var $js$3=Pervasives["^"];
        var $js$4=Unix["string_of_inet_addr"];
        var $js$5=$js$4(Unix["inet_addr_loopback"]);
        var $js$6=Pervasives["^"];
        var $js$7=Pervasives["string_of_int"];
        var $js$8=Unix["getpid"];
        var $js$9=$js$8(0);
        var $js$10=$js$9%1e4;
        var $js$11=1e4+$js$10;
        var $js$12=$js$7($js$11);
        var $js$13=$js$6(":",$js$12);
        var $js$14=$js$3($js$5,$js$13)}
      else
       {var $js$15=Filename["concat"];
        var $js$16=Filename["get_temp_dir_name"];
        var $js$17=$js$16(0);
        var $js$18=Pervasives["^"];
        var $js$19=Pervasives["string_of_int"];
        var $js$20=Unix["getpid"];
        var $js$21=$js$20(0);
        var $js$22=$js$19($js$21);
        var $js$23=$js$18("camldebug",$js$22);
        var $js$14=$js$15($js$17,$js$23)}
      Parameters["socket_name"][1]=$js$14,0;
      try
       {var $js$24=Arg["parse"];
        $js$24(speclist,anonymous,"");
        var $js$25=Arg["usage"];
        $js$25
         (speclist,
          "No program name specified\nUsage: ocamldebug [options] <program> [arguments]\nOptions are:");
        var $js$26=Pervasives["exit"];
        $js$26(2)}
      catch(exn)
       {var $js$27=exn=Found_program_name;
        if($js$27)
         {var $js$28=Arg["current"][1]+1;
          var $js$29=Sys["argv"]["length"]-1;
          for(var j=$js$28;j<=$js$29;j++)
           {var $js$30=Pervasives["^"];
            var $js$31=Pervasives["^"];
            var $js$32=Filename["quote"];
            var $js$33=$js$32(Sys["argv"][j]);
            var $js$34=$js$31(" ",$js$33);
            var $js$35=$js$30(Parameters["arguments"][1],$js$34);
            Parameters["arguments"][1]=$js$35,0}}
        else
         {"unknown primitive:reraise"}}
      var $js$36=Format["printf"];
      $js$36
       ([0,
         [11,"\tOCaml Debugger version ",[2,0,[17,4,[17,4,0]]]],
         "\tOCaml Debugger version %s@.@."],
        Config["version"]);
      Config["load_path"][1]=Parameters["default_load_path"][1],0;
      Clflags["recursive_types"][1]=1,0;
      toplevel_loop(0);
      var $js$37=Program_management["kill_program"];
      $js$37(0);
      var $js$38=Pervasives["exit"];
      return $js$38(0)}
    catch(exn$1)
     {var $js$39=exn$1=Debugger_config["Toplevel"];
      if($js$39)
       {var $js$40=Pervasives["exit"];return $js$40(2)}
      else
       {var $js$41=exn$1[1]=Env["Error"];
        if($js$41)
         {var $js$42=Format["eprintf"];
          $js$42
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
          var $js$43=Env["report_error"];
          $js$43(Format["err_formatter"],exn$1[2]);
          var $js$44=Format["eprintf"];
          $js$44([0,[17,0,[17,4,0]],"@]@."]);
          var $js$45=Pervasives["exit"];
          return $js$45(2)}
        else
         {var $js$46=exn$1[1]=Cmi_format["Error"];
          if($js$46)
           {var $js$47=Format["eprintf"];
            $js$47
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
            var $js$48=Cmi_format["report_error"];
            $js$48(Format["err_formatter"],exn$1[2]);
            var $js$49=Format["eprintf"];
            $js$49([0,[17,0,[17,4,0]],"@]@."]);
            var $js$50=Pervasives["exit"];
            return $js$50(2)}
          else
           {return "unknown primitive:reraise"}}}}};
var $js$1=Printexc["catch"];
var $js$2=Unix["handle_unix_error"];
var $js$3=$js$2(main);
$js$1($js$3,0);
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
