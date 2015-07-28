var String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
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
var debug_loading=[0,0];
var launching_func=[0,function(param){return 0}];
var
 load_program=
  function(param)
   {var $js=launching_func[1];
    $js(0);
    var $js$1=Input_handling["main_loop"];
    return $js$1(0)};
var
 get_unix_environment=
  function(param)
   {var
     f=
      function(param$1)
       {var $js=Printf["sprintf"];
        var $js$1=Filename["quote"];
        var $js$2=$js$1(param$1[2]);
        return $js
                ([0,[2,0,[12,61,[2,0,[12,32,0]]]],"%s=%s "],param$1[1],$js$2)};
    var $js=String["concat"];
    var $js$1=List["map"];
    var $js$2=$js$1(f,Debugger_config["environment"][1]);
    return $js("",$js$2)};
var
 quote_for_windows_shell=
  function(s)
   {var $js=Buffer["create"];
    var b=$js(20+s["length"]);
    var $js$1=0;
    var $js$2=s["length"]-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var match=s[i];
      var $js$3=match>=61;
      if($js$3)
       {var switcher=-62+match;
        var $js$4=!(32<switcher>>>0);
        if($js$4)
         {var $js$5=30<-1+switcher>>>0;
          if($js$5){var exit=24}else{var exit=25}}
        else
         {var $js$6=switcher!=62;if($js$6){var exit=25}else{var exit=24}}}
      else
       {var switcher$1=-35+match;
        var $js$7=24<switcher$1>>>0;
        if($js$7)
         {var $js$8=switcher$1>=-1;if($js$8){var exit=24}else{var exit=25}}
        else
         {var $js$9=switcher$1!=3;if($js$9){var exit=25}else{var exit=24}}}
      switch(exit){case 25:case 24:var $js$10=Buffer["add_char"];$js$10(b,94)}
      var $js$11=Buffer["add_char"];
      $js$11(b,s[i])}
    var $js$12=Buffer["contents"];
    return $js$12(b)};
var
 get_win32_environment=
  function(param)
   {var
     f=
      function(param$1)
       {var $js=Printf["sprintf"];
        var $js$1=quote_for_windows_shell(param$1[2]);
        return $js
                ([0,[11,"set ",[2,0,[12,61,[2,0,[12,38,0]]]]],"set %s=%s&"],
                 param$1[1],
                 $js$1)};
    var $js=String["concat"];
    var $js$1=List["map"];
    var $js$2=$js$1(f,Debugger_config["environment"][1]);
    return $js("",$js$2)};
var
 generic_exec_unix=
  function(cmdline,param)
   {var $js=debug_loading[1];
    if($js)
     {var $js$1=Pervasives["prerr_endline"];$js$1("Launching program...")}
    else
     {}
    try
     {var $js$2=Unix["fork"];var child=$js$2(0)}
    catch(x)
     {var $js$3=Unix_tools["report_error"];
      $js$3(x);
      var child="unknown primitive:raise"}
    var $js$4=child!=0;
    if($js$4)
     {var $js$5=Unix["wait"];
      var match=$js$5(0);
      var match$1=match[2];
      var $js$6=match$1;
      if($js$6==0)
       {var $js$7=match$1[1]!=0;if($js$7){var exit=17}else{return 0}}
      else
       if($js$6==1){var exit=17}else if($js$6==2){var exit=17}
      switch(exit){case 17:return "unknown primitive:raise"}}
    else
     {try
       {var $js$8=Unix["fork"];
        var match$2=$js$8(0);
        var $js$9=match$2!=0;
        if($js$9)
         {var $js$10=Pervasives["exit"];return $js$10(0)}
        else
         {try
           {var $js$11=Unix["setsid"];var $js$12=$js$11(0);0}
          catch(exn)
           {var $js$13=exn[1]=Invalid_argument;
            if($js$13){}else{"unknown primitive:reraise"}}
          var $js$14=Unix["execv"];
          var $js$15=cmdline(0);
          var $js$16=[Debugger_config["shell"],"-c",$js$15];
          return $js$14(Debugger_config["shell"],$js$16)}}
      catch(x$1)
       {var $js$17=Unix_tools["report_error"];
        $js$17(x$1);
        var $js$18=Pervasives["exit"];
        return $js$18(1)}}};
var
 generic_exec_win=
  function(cmdline,param)
   {var $js=debug_loading[1];
    if($js)
     {var $js$1=Pervasives["prerr_endline"];$js$1("Launching program...")}
    else
     {}
    try
     {var $js$2=Unix["create_process"];
      var $js$3=cmdline(0);
      var $js$4=["/C",$js$3];
      var
       $js$5=
        $js$2("cmd.exe",$js$4,Unix["stdin"],Unix["stdout"],Unix["stderr"]);
      return 0}
    catch(x)
     {var $js$6=Unix_tools["report_error"];
      $js$6(x);
      return "unknown primitive:raise"}};
var match=Sys["os_type"];
var $js=match;
if($js=="Win32")
 {var generic_exec=generic_exec_win}
else
 {var generic_exec=generic_exec_unix}
var
 exec_with_runtime=
  generic_exec
   (function(param)
     {var match$1=Sys["os_type"];
      var $js$1=match$1;
      if($js$1=="Win32")
       {var $js$2=Printf["sprintf"];
        var $js$3=get_win32_environment(0);
        return $js$2
                ([0,
                  [2,
                   0,
                   [11,
                    "set CAML_DEBUG_SOCKET=",
                    [2,0,[11,"& ",[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]],
                  "%sset CAML_DEBUG_SOCKET=%s& %s %s %s"],
                 $js$3,
                 Parameters["socket_name"][1],
                 Debugger_config["runtime_program"],
                 Parameters["program_name"][1],
                 Parameters["arguments"][1])}
      else
       {var $js$4=Printf["sprintf"];
        var $js$5=get_unix_environment(0);
        var $js$6=Filename["quote"];
        var $js$7=$js$6(Debugger_config["runtime_program"]);
        var $js$8=Filename["quote"];
        var $js$9=$js$8(Parameters["program_name"][1]);
        return $js$4
                ([0,
                  [2,
                   0,
                   [11,
                    "CAML_DEBUG_SOCKET=",
                    [2,0,[12,32,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]],
                  "%sCAML_DEBUG_SOCKET=%s %s %s %s"],
                 $js$5,
                 Parameters["socket_name"][1],
                 $js$7,
                 $js$9,
                 Parameters["arguments"][1])}});
var
 exec_direct=
  generic_exec
   (function(param)
     {var match$1=Sys["os_type"];
      var $js$1=match$1;
      if($js$1=="Win32")
       {var $js$2=Printf["sprintf"];
        var $js$3=get_win32_environment(0);
        return $js$2
                ([0,
                  [2,
                   0,
                   [11,
                    "set CAML_DEBUG_SOCKET=",
                    [2,0,[11,"& ",[2,0,[12,32,[2,0,0]]]]]]],
                  "%sset CAML_DEBUG_SOCKET=%s& %s %s"],
                 $js$3,
                 Parameters["socket_name"][1],
                 Parameters["program_name"][1],
                 Parameters["arguments"][1])}
      else
       {var $js$4=Printf["sprintf"];
        var $js$5=get_unix_environment(0);
        var $js$6=Filename["quote"];
        var $js$7=$js$6(Parameters["program_name"][1]);
        return $js$4
                ([0,
                  [2,
                   0,
                   [11,
                    "CAML_DEBUG_SOCKET=",
                    [2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]],
                  "%sCAML_DEBUG_SOCKET=%s %s %s"],
                 $js$5,
                 Parameters["socket_name"][1],
                 $js$7,
                 Parameters["arguments"][1])}});
var
 exec_manual=
  function(param)
   {var $js$1=Pervasives["print_newline"];
    $js$1(0);
    var $js$2=Pervasives["print_string"];
    $js$2("Waiting for connection...");
    var $js$3=Pervasives["print_string"];
    var $js$4=Pervasives["^"];
    var $js$5=Pervasives["^"];
    var $js$6=$js$5(Parameters["socket_name"][1],")");
    var $js$7=$js$4("(the socket is ",$js$6);
    $js$3($js$7);
    var $js$8=Pervasives["print_newline"];
    return $js$8(0)};
var
 loading_modes=
  [0,
   [0,"direct",exec_direct],
   [0,[0,"runtime",exec_with_runtime],[0,[0,"manual",exec_manual],0]]];
var set_launching_function=function(func){return launching_func[1]=func,0};
set_launching_function(exec_direct);
var connection=[0,Primitives["std_io"]];
var connection_opened=[0,0];
module["exports"]=
{"debug_loading":debug_loading,
 "launching_func":launching_func,
 "load_program":load_program,
 "loading_modes":loading_modes,
 "set_launching_function":set_launching_function,
 "connection":connection,
 "connection_opened":connection_opened};
