// Generated CODE, PLEASE EDIT WITH CARE 

var Thread=require("./thread.js");
var Unix=require("./unix.js");
var Bytes=require("./bytes.js");


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
   {if(Thread["wait_timed_read"](fd,timeout))
     {try
       {return Unix["read"](fd,buff,ofs,len);}
      catch(exn)
       {var exit;
        
        var tag=exn[1];
        
        if(tag===Unix["Unix_error"])
         {var match=exn[2];
          
          var exit$1;
          
          if(typeof match==="number")
           {if(match!==2)
             {if(match!==37){exit=4;}else{exit$1=5;}}
            else
             {exit$1=5;}
            }
          else
           {exit=4;}
          
          switch(exit$1){case 5:return timed_read(fd,buff,ofs,len,timeout);}
          }
        else
         {exit=4;}
        
        switch(exit){case 4:throw exn;}
        }
      }
    else
     {throw [0,Unix["Unix_error"],/* ETIMEDOUT */62,"timed_read",""];}
    };

var
 timed_write=
  function(fd,buff,ofs,len,timeout)
   {if(Thread["wait_timed_write"](fd,timeout))
     {try
       {return Unix["write"](fd,buff,ofs,len);}
      catch(exn)
       {var exit;
        
        var tag=exn[1];
        
        if(tag===Unix["Unix_error"])
         {var match=exn[2];
          
          var exit$1;
          
          if(typeof match==="number")
           {if(match!==2)
             {if(match!==37){exit=2;}else{exit$1=3;}}
            else
             {exit$1=3;}
            }
          else
           {exit=2;}
          
          switch(exit$1){case 3:return timed_write(fd,buff,ofs,len,timeout);}
          }
        else
         {exit=2;}
        
        switch(exit){case 2:throw exn;}
        }
      }
    else
     {throw [0,Unix["Unix_error"],/* ETIMEDOUT */62,"timed_write",""];}
    };

var
 timed_write_substring=
  function(fd,buff,ofs,len,timeout)
   {return timed_write(fd,Bytes["unsafe_of_string"](buff),ofs,len,timeout);};

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

