var Thread=require("Thread");
var Unix=require("Unix");
var Bytes=require("Bytes");
var wait=Unix["wait"];
var waitpid=Unix["waitpid"];
var system=Unix["system"];
var read=Unix["read"];
var write=Unix["write"];
var write_substring=Unix["write_substring"];
var select=Unix["select"];
var
 timed_read=
  function(fd,buff,ofs,len,timeout)
   {var $js=Thread["wait_timed_read"];
    var $js$1=$js(fd,timeout);
    if($js$1)
     {var $js$2=Unix["read"];return $js$2(fd,buff,ofs,len)}
    else
     {var $js$3=[0,Unix["Unix_error"],62,"timed_read",""];throw $js$3}};
var
 timed_write=
  function(fd,buff,ofs,len,timeout)
   {var $js=Thread["wait_timed_write"];
    var $js$1=$js(fd,timeout);
    if($js$1)
     {var $js$2=Unix["write"];return $js$2(fd,buff,ofs,len)}
    else
     {var $js$3=[0,Unix["Unix_error"],62,"timed_write",""];throw $js$3}};
var
 timed_write_substring=
  function(fd,buff,ofs,len,timeout)
   {var $js=Bytes["unsafe_of_string"];
    var $js$1=$js(buff);
    return timed_write(fd,$js$1,ofs,len,timeout)};
var pipe=Unix["pipe"];
var open_process_in=Unix["open_process_in"];
var open_process_out=Unix["open_process_out"];
var open_process=Unix["open_process"];
var socket=Unix["socket"];
var accept=Unix["accept"];
var recv=Unix["recv"];
var recvfrom=Unix["recvfrom"];
var send=Unix["send"];
var send_substring=Unix["send_substring"];
var sendto=Unix["sendto"];
var sendto_substring=Unix["sendto_substring"];
var open_connection=Unix["open_connection"];
module["exports"]=
{"unknown block:(function prim/1059 prim/1058 (unix_execv prim/1059 prim/1058))":
 unknown block:(function prim/1059 prim/1058 (unix_execv prim/1059 prim/1058)),
 "unknown block:(function prim/1062 prim/1061 prim/1060\n  (unix_execve prim/1062 prim/1061 prim/1060))":
 unknown block:(function prim/1062 prim/1061 prim/1060
  (unix_execve prim/1062 prim/1061 prim/1060)),
 "unknown block:(function prim/1064 prim/1063 (unix_execvp prim/1064 prim/1063))":
 unknown block:(function prim/1064 prim/1063 (unix_execvp prim/1064 prim/1063)),
 "wait":wait,
 "waitpid":waitpid,
 "system":system,
 "read":read,
 "write":write,
 "write_substring":write_substring,
 "timed_read":timed_read,
 "timed_write":timed_write,
 "timed_write_substring":timed_write_substring,
 "select":select,
 "pipe":pipe,
 "open_process_in":open_process_in,
 "open_process_out":open_process_out,
 "open_process":open_process,
 "unknown block:(function prim/1065 (unix_sleep prim/1065))":
 unknown block:(function prim/1065 (unix_sleep prim/1065)),
 "socket":socket,
 "accept":accept,
 "unknown block:(function prim/1067 prim/1066 (unix_connect prim/1067 prim/1066))":
 unknown block:(function prim/1067 prim/1066 (unix_connect prim/1067 prim/1066)),
 "recv":recv,
 "recvfrom":recvfrom,
 "send":send,
 "send_substring":send_substring,
 "sendto":sendto,
 "sendto_substring":sendto_substring,
 "open_connection":open_connection};
