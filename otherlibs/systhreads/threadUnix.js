// Generated CODE, PLEASE EDIT WITH CARE 

var Thread=require("./thread.js");
var Unix=require("./unix.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");


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
   {if(Thread["wait_timed_read"](fd,timeout))
     {return Unix["read"](fd,buff,ofs,len)}
    else
     {throw [0,Unix["Unix_error"],/* ETIMEDOUT */62,"timed_read",""]}
    };

var
 timed_write=
  function(fd,buff,ofs,len,timeout)
   {if(Thread["wait_timed_write"](fd,timeout))
     {return Unix["write"](fd,buff,ofs,len)}
    else
     {throw [0,Unix["Unix_error"],/* ETIMEDOUT */62,"timed_write",""]}
    };

var
 timed_write_substring=
  function(fd,buff,ofs,len,timeout)
   {return timed_write(fd,Bytes["unsafe_of_string"](buff),ofs,len,timeout)};

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
{"execv":
 function(prim,prim$1){return CamlPrimitive["unix_execv"](prim,prim$1)},
 "execve":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_execve"](prim,prim$1,prim$2)},
 "execvp":
 function(prim,prim$1){return CamlPrimitive["unix_execvp"](prim,prim$1)},
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
 "sleep":function(prim){return CamlPrimitive["unix_sleep"](prim)},
 "socket":socket,
 "accept":accept,
 "connect":
 function(prim,prim$1){return CamlPrimitive["unix_connect"](prim,prim$1)},
 "recv":recv,
 "recvfrom":recvfrom,
 "send":send,
 "send_substring":send_substring,
 "sendto":sendto,
 "sendto_substring":sendto_substring,
 "open_connection":open_connection};

