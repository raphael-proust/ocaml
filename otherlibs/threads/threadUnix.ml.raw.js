var Thread=require("Thread");
var Unix=require("Unix");
var Bytes=require("Bytes");
var execv=Unix["execv"];
var execve=Unix["execve"];
var execvp=Unix["execvp"];
var wait=Unix["wait"];
var waitpid=Unix["waitpid"];
var system=Unix["system"];
var read=Unix["read"];
var write=Unix["write"];
var single_write=Unix["single_write"];
var write_substring=Unix["write_substring"];
var single_write_substring=Unix["single_write_substring"];
var select=Unix["select"];
var pipe=Unix["pipe"];
var open_process_in=Unix["open_process_in"];
var open_process_out=Unix["open_process_out"];
var open_process=Unix["open_process"];
var open_process_full=Unix["open_process_full"];
var sleep=Unix["sleep"];
var socket=Unix["socket"];
var socketpair=Unix["socketpair"];
var accept=Unix["accept"];
var connect=Unix["connect"];
var recv=Unix["recv"];
var recvfrom=Unix["recvfrom"];
var send=Unix["send"];
var send_substring=Unix["send_substring"];
var sendto=Unix["sendto"];
var sendto_substring=Unix["sendto_substring"];
var open_connection=Unix["open_connection"];
var establish_server=Unix["establish_server"];
var
 timed_read=
  function(fd,buff,ofs,len,timeout)
   {var $js=Thread["wait_timed_read"];
    var $js$1=$js(fd,timeout);
    if($js$1)
     {try
       {var $js$2=Unix["read"];return $js$2(fd,buff,ofs,len)}
      catch(exn)
       {var tag=exn[1];
        var $js$3=tag=Unix["Unix_error"];
        if($js$3)
         {var match=exn[2];
          var $js$4="unknown primitive:isint";
          if($js$4)
           {var $js$5=match!=2;
            if($js$5)
             {var $js$6=match!=37;if($js$6){var exit=4}else{var exit$1=5}}
            else
             {var exit$1=5}}
          else
           {var exit=4}
          switch(exit$1){case 5:return timed_read(fd,buff,ofs,len,timeout)}}
        else
         {var exit=4}
        switch(exit){case 4:return "unknown primitive:reraise"}}}
    else
     {var $js$7=[0,Unix["Unix_error"],62,"timed_read",""];throw $js$7}};
var
 timed_write=
  function(fd,buff,ofs,len,timeout)
   {var $js=Thread["wait_timed_write"];
    var $js$1=$js(fd,timeout);
    if($js$1)
     {try
       {var $js$2=Unix["write"];return $js$2(fd,buff,ofs,len)}
      catch(exn)
       {var tag=exn[1];
        var $js$3=tag=Unix["Unix_error"];
        if($js$3)
         {var match=exn[2];
          var $js$4="unknown primitive:isint";
          if($js$4)
           {var $js$5=match!=2;
            if($js$5)
             {var $js$6=match!=37;if($js$6){var exit=2}else{var exit$1=3}}
            else
             {var exit$1=3}}
          else
           {var exit=2}
          switch(exit$1){case 3:return timed_write(fd,buff,ofs,len,timeout)}}
        else
         {var exit=2}
        switch(exit){case 2:return "unknown primitive:reraise"}}}
    else
     {var $js$7=[0,Unix["Unix_error"],62,"timed_write",""];throw $js$7}};
var
 timed_write_substring=
  function(fd,buff,ofs,len,timeout)
   {var $js=Bytes["unsafe_of_string"];
    var $js$1=$js(buff);
    return timed_write(fd,$js$1,ofs,len,timeout)};
module["exports"]=
{"execv":execv,
 "execve":execve,
 "execvp":execvp,
 "wait":wait,
 "waitpid":waitpid,
 "system":system,
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "timed_read":timed_read,
 "timed_write":timed_write,
 "timed_write_substring":timed_write_substring,
 "select":select,
 "pipe":pipe,
 "open_process_in":open_process_in,
 "open_process_out":open_process_out,
 "open_process":open_process,
 "open_process_full":open_process_full,
 "sleep":sleep,
 "socket":socket,
 "socketpair":socketpair,
 "accept":accept,
 "connect":connect,
 "recv":recv,
 "recvfrom":recvfrom,
 "send":send,
 "send_substring":send_substring,
 "sendto":sendto,
 "sendto_substring":sendto_substring,
 "open_connection":open_connection,
 "establish_server":establish_server};
