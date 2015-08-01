var Pervasives=require("Pervasives");
var List=require("List");
var Callback=require("Callback");
var Bytes=require("Bytes");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");
var Sys=require("Sys");

var wait_read=function(fd){return "unknown primitive:thread_wait_read";};

var wait_write=function(fd){return "unknown primitive:thread_wait_write";};

var select_aux=function(arg){return "unknown primitive:thread_select";};

var wait_pid_aux=function(pid){return "unknown primitive:thread_wait_pid";};

var delay=function(duration){return "unknown primitive:thread_delay";};

"unknown primitive:thread_initialize";
var Unix_error="unknown primitive:caml_set_oo_id";

Callback["register_exception"]("Unix.Unix_error",[0,Unix_error,0,"",""]);
var
 handle_unix_error=
  function(f,arg)
   {try
     {return f(arg);}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Unix_error)
       {var arg$1=exn[4];
        
        var fun_name=exn[3];
        
        var err=exn[2];
        
        Pervasives["prerr_string"](Sys["argv"][0]);
        Pervasives["prerr_string"](': "');
        Pervasives["prerr_string"](fun_name);
        Pervasives["prerr_string"]('" failed');
        if(arg$1["length"]>0)
         {Pervasives["prerr_string"](' on "'),
          Pervasives["prerr_string"](arg$1),
          Pervasives["prerr_string"]('"')}
        else
         {}
        
        Pervasives["prerr_string"](": ");
        Pervasives["prerr_endline"]("unknown primitive:unix_error_message");
        return Pervasives["exit"](2);
        }
      else
       {throw exn;}
      }
    };

var stdin=0;

var stdout=1;

var stderr=2;

var
 read=
  function(fd,buf,ofs,len)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.read");}
      else
       {return "unknown primitive:unix_read";}
      }
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Unix_error)
       {var match=exn[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=161;}else{var exit$1=162;}}
          else
           {var exit$1=162;}
          }
        else
         {var exit=161;}
        
        switch(exit$1){case 162:wait_read(fd);return read(fd,buf,ofs,len);}
        }
      else
       {var exit=161;}
      
      switch(exit){case 161:throw exn;}
      }
    };

var
 write=
  function(fd,buf,ofs,len)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.write");}
      else
       {return "unknown primitive:unix_write";}
      }
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Unix_error)
       {var match=exn[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=159;}else{var exit$1=160;}}
          else
           {var exit$1=160;}
          }
        else
         {var exit=159;}
        
        switch(exit$1){case 160:wait_write(fd);return write(fd,buf,ofs,len);}
        }
      else
       {var exit=159;}
      
      switch(exit){case 159:throw exn;}
      }
    };

var
 single_write=
  function(fd,buf,ofs,len)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.single_write");}
      else
       {return "unknown primitive:unix_single_write";}
      }
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Unix_error)
       {var match=exn[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=157;}else{var exit$1=158;}}
          else
           {var exit$1=158;}
          }
        else
         {var exit=157;}
        
        switch(exit$1)
         {case 158:wait_write(fd);return single_write(fd,buf,ofs,len);}
        }
      else
       {var exit=157;}
      
      switch(exit){case 157:throw exn;}
      }
    };

var
 write_substring=
  function(fd,buf,ofs,len)
   {return write(fd,Bytes["unsafe_of_string"](buf),ofs,len);};

var
 single_write_substring=
  function(fd,buf,ofs,len)
   {return single_write(fd,Bytes["unsafe_of_string"](buf),ofs,len);};

var LargeFile=[0];

var
 pipe=
  function(param)
   {var fd_pair="unknown primitive:unix_pipe";
    
    var in_fd=fd_pair[2];
    
    var out_fd=fd_pair[1];
    
    "unknown primitive:unix_set_nonblock";
    "unknown primitive:unix_set_nonblock";
    return fd_pair;
    };

var
 select=
  function(readfds,writefds,exceptfds,delay$1)
   {var match=select_aux([0,readfds,writefds,exceptfds,delay$1]);
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:var e=match[3];var w=match[2];var r=match[1];return [0,r,w,e];
        default:var exit=151;}}
    
    switch(exit){case 151:return [0,0,0,0];}
    };

var
 safe_clear_nonblock=
  function(fd)
   {try
     {return "unknown primitive:unix_clear_nonblock";}
    catch(exn){var tag=exn[1];if(tag=Unix_error){return 0;}else{throw exn;}}
    };

var
 safe_set_nonblock=
  function(fd)
   {try
     {return "unknown primitive:unix_set_nonblock";}
    catch(exn){var tag=exn[1];if(tag=Unix_error){return 0;}else{throw exn;}}
    };

var
 do_exec=
  function(fn)
   {var oldtimer="unknown primitive:unix_setitimer";
    
    safe_clear_nonblock(stdin);
    safe_clear_nonblock(stdout);
    safe_clear_nonblock(stderr);
    try
     {return fn(0);}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Unix_error)
       {
        safe_set_nonblock(stdin);
        safe_set_nonblock(stdout);
        safe_set_nonblock(stderr);
        throw exn;
        }
      else
       {throw exn;}
      }
    };

var
 execv=
  function(proc,args)
   {return do_exec(function(param){return "unknown primitive:unix_execv";});};

var
 execve=
  function(proc,args,env)
   {return do_exec(function(param){return "unknown primitive:unix_execve";});};

var
 execvp=
  function(proc,args)
   {return do_exec(function(param){return "unknown primitive:unix_execvp";});};

var
 execvpe=
  function(proc,args)
   {return do_exec
            (function(param)
              {return function(prim,prim$1,prim$2)
                        {return "unknown primitive:unix_execvpe";}
                       (proc,args);
               });
    };

var
 wait_pid=
  function(pid)
   {var match=wait_pid_aux(pid);
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:var status=match[2];var pid$1=match[1];return [0,pid$1,status];
        default:var exit=138;}}
    
    switch(exit)
     {case 138:return Pervasives["invalid_arg"]("Thread.wait_pid");}
    };

var wait=function(param){return wait_pid(-1);};

var
 waitpid=
  function(flags,pid)
   {if(List["mem"](0,flags))
     {return "unknown primitive:unix_waitpid";}
    else
     {return wait_pid(pid);}
    };

var
 pause=
  function(param)
   {var sigs="unknown primitive:unix_sigprocmask";
    
    return "unknown primitive:unix_sigsuspend";
    };

var sleep=function(secs){return delay(secs);};

var inet_addr_any="unknown primitive:unix_inet_addr_of_string";

var inet_addr_loopback="unknown primitive:unix_inet_addr_of_string";

try
 {var inet6_addr_any="unknown primitive:unix_inet_addr_of_string";}
catch(exn)
 {var tag=exn[1];
  
  if(tag=Failure){var inet6_addr_any=inet_addr_any;}else{throw exn;}
  }

try
 {var inet6_addr_loopback="unknown primitive:unix_inet_addr_of_string";}
catch(exn$1)
 {var tag$1=exn$1[1];
  
  if(tag$1=Failure)
   {var inet6_addr_loopback=inet_addr_loopback;}
  else
   {throw exn$1;}
  }

var is_inet6_addr=function(s){return s["length"]=16;};

var
 domain_of_sockaddr=
  function(param)
   {switch(param)
     {case 0:return 0;
      case 1:var a=param[1];if(is_inet6_addr(a)){return 2;}else{return 1;}
      }
    };

var
 socket=
  function(dom,typ,proto)
   {var s="unknown primitive:unix_socket";
    
    "unknown primitive:unix_set_nonblock";
    return s;
    };

var
 socketpair=
  function(dom,typ,proto)
   {var spair="unknown primitive:unix_socketpair";
    
    var s2=spair[2];
    
    var s1=spair[1];
    
    "unknown primitive:unix_set_nonblock";
    "unknown primitive:unix_set_nonblock";
    return spair;
    };

var
 accept=
  function(req)
   {wait_read(req);
    try
     {var result="unknown primitive:unix_accept";
      
      var s=result[1];
      
      "unknown primitive:unix_set_nonblock";
      return result;
      }
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=118;}else{var exit$1=119;}}
          else
           {var exit$1=119;}
          }
        else
         {var exit=118;}
        
        switch(exit$1){case 119:return accept(req);}
        }
      else
       {var exit=118;}
      
      switch(exit){case 118:throw exn$2;}
      }
    };

var
 connect=
  function(s,addr)
   {try
     {return "unknown primitive:unix_connect";}
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match>=37)
           {if(match>=39){var exit=115;}else{var exit$1=116;}}
          else
           {if(match!=2){var exit=115;}else{var exit$1=116;}}
          }
        else
         {var exit=115;}
        
        switch(exit$1){case 116:wait_write(s);return 0;}
        }
      else
       {var exit=115;}
      
      switch(exit){case 115:throw exn$2;}
      }
    };

var
 recv=
  function(fd,buf,ofs,len,flags)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.recv");}
      else
       {return "unknown primitive:unix_recv";}
      }
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=113;}else{var exit$1=114;}}
          else
           {var exit$1=114;}
          }
        else
         {var exit=113;}
        
        switch(exit$1)
         {case 114:wait_read(fd);return recv(fd,buf,ofs,len,flags);}
        }
      else
       {var exit=113;}
      
      switch(exit){case 113:throw exn$2;}
      }
    };

var
 recvfrom=
  function(fd,buf,ofs,len,flags)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.recvfrom");}
      else
       {return "unknown primitive:unix_recvfrom";}
      }
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=111;}else{var exit$1=112;}}
          else
           {var exit$1=112;}
          }
        else
         {var exit=111;}
        
        switch(exit$1)
         {case 112:wait_read(fd);return recvfrom(fd,buf,ofs,len,flags);}
        }
      else
       {var exit=111;}
      
      switch(exit){case 111:throw exn$2;}
      }
    };

var
 send=
  function(fd,buf,ofs,len,flags)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.send");}
      else
       {return "unknown primitive:unix_send";}
      }
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=109;}else{var exit$1=110;}}
          else
           {var exit$1=110;}
          }
        else
         {var exit=109;}
        
        switch(exit$1)
         {case 110:wait_write(fd);return send(fd,buf,ofs,len,flags);}
        }
      else
       {var exit=109;}
      
      switch(exit){case 109:throw exn$2;}
      }
    };

var
 sendto=
  function(fd,buf,ofs,len,flags,addr)
   {try
     {if(ofs<0||len<0||ofs>buf["length"]-len)
       {return Pervasives["invalid_arg"]("Unix.sendto");}
      else
       {return "unknown primitive:unix_sendto";}
      }
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){var exit=107;}else{var exit$1=108;}}
          else
           {var exit$1=108;}
          }
        else
         {var exit=107;}
        
        switch(exit$1)
         {case 108:wait_write(fd);return sendto(fd,buf,ofs,len,flags,addr);}
        }
      else
       {var exit=107;}
      
      switch(exit){case 107:throw exn$2;}
      }
    };

var
 send_substring=
  function(fd,buf,ofs,len,flags)
   {return send(fd,Bytes["unsafe_of_string"](buf),ofs,len,flags);};

var
 sendto_substring=
  function(fd,buf,ofs,len,flags,addr)
   {return sendto(fd,Bytes["unsafe_of_string"](buf),ofs,len,flags,addr);};

var bool=0;

var $$int=1;

var optint=2;

var $$float=3;

var error=4;

var
 SO=
  [0,
   bool,
   $$int,
   optint,
   $$float,
   error,
   function(prim,prim$1,prim$2){return "unknown primitive:unix_getsockopt";},
   function(prim,prim$1,prim$2,prim$3)
    {return "unknown primitive:unix_setsockopt";}];

var getsockopt=function(fd,opt){return SO[6](SO[1],fd,opt);};

var setsockopt=function(fd,opt,v){return SO[7](SO[1],fd,opt,v);};

var getsockopt_int=function(fd,opt){return SO[6](SO[2],fd,opt);};

var setsockopt_int=function(fd,opt,v){return SO[7](SO[2],fd,opt,v);};

var getsockopt_optint=function(fd,opt){return SO[6](SO[3],fd,opt);};

var setsockopt_optint=function(fd,opt,v){return SO[7](SO[3],fd,opt,v);};

var getsockopt_float=function(fd,opt){return SO[6](SO[4],fd,opt);};

var setsockopt_float=function(fd,opt,v){return SO[7](SO[4],fd,opt,v);};

var getsockopt_error=function(fd){return SO[6](SO[5],fd,0);};

var
 getaddrinfo_emulation=
  function(node,service,opts)
   {var opt_socktype=[0,0];
    
    var opt_protocol=[0,0];
    
    var opt_passive=[0,0];
    
    List["iter"]
     (function(param)
       {if(typeof param=="number")
         {switch(param){case 2:return opt_passive[1]=1,0;}}
        else
         {switch(param[0])
           {case 1:var s=param[1];return opt_socktype[1]=[0,s],0;
            case 2:var p=param[1];return opt_protocol[1]=p,0;
            default:var exit=86;}}
        
        switch(exit){case 86:return 0;}
        },
      opts);
    var
     get_port=
      function(ty,kind)
       {if("unknown primitive:caml_string_equal")
         {return [0,[0,ty,0],0];}
        else
         {try
           {return [0,[0,ty,"unknown primitive:caml_int_of_string"],0];}
          catch(exn$2)
           {var tag$2=exn$2[1];
            
            if(tag$2=Failure)
             {try
               {return [0,[0,ty,"unknown primitive:unix_getservbyname"[3]],0];
                }
              catch(exn$3){if(exn$3=Not_found){return 0;}else{throw exn$3;}}
              }
            else
             {throw exn$2;}
            }
          }
        };
    
    var match=opt_socktype[1];
    
    if(match)
     {var ty=match[1];
      
      if(ty!=1)
       {if(ty!=0)
         {if("unknown primitive:caml_string_equal")
           {var ports=[0,[0,ty,0],0];}
          else
           {var ports=0;}
          }
        else
         {var ports=get_port(0,"tcp");}
        }
      else
       {var ports=get_port(1,"udp");}
      }
    else
     {var ports=Pervasives["@"](get_port(0,"tcp"),get_port(1,"udp"));}
    
    if("unknown primitive:caml_string_equal")
     {if(List["mem"](2,opts))
       {var addresses=[0,[0,inet_addr_any,"0.0.0.0"],0];}
      else
       {var addresses=[0,[0,inet_addr_loopback,"127.0.0.1"],0];}
      }
    else
     {try
       {var
         addresses=
          [0,[0,"unknown primitive:unix_inet_addr_of_string",node],0];
        }
      catch(exn$2)
       {var tag$2=exn$2[1];
        
        if(tag$2=Failure)
         {try
           {var he="unknown primitive:unix_gethostbyname";
            
            var
             addresses=
              List["map"]
               (function(a){return [0,a,he[1]];},$$Array["to_list"](he[4]));
            }
          catch(exn$3)
           {if(exn$3=Not_found){var addresses=0;}else{throw exn$3;}}
          }
        else
         {throw exn$2;}
        }
      }
    
    return List["flatten"]
            (List["map"]
              (function(param)
                {var port=param[2];
                 
                 var ty$1=param[1];
                 
                 return List["map"]
                         (function(param$1)
                           {var name=param$1[2];
                            
                            var addr=param$1[1];
                            
                            return [0,1,ty$1,opt_protocol[1],[1,addr,port],name];
                            },
                          addresses);
                 },
               ports));
    };

var
 getaddrinfo=
  function(node,service,opts)
   {try
     {return List["rev"]("unknown primitive:unix_getaddrinfo");}
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Invalid_argument)
       {return getaddrinfo_emulation(node,service,opts);}
      else
       {throw exn$2;}
      }
    };

var
 getnameinfo_emulation=
  function(addr,opts)
   {switch(addr)
     {case 0:var f=addr[1];return [0,"",f];
      case 1:
       var p=addr[2];
       
       var a=addr[1];
       
       try
        {if(List["mem"](1,opts)){throw Not_found;}else{}
         
         var hostname="unknown primitive:unix_gethostbyaddr"[1];
         }
       catch(exn$2)
        {if(exn$2=Not_found)
          {if(List["mem"](2,opts)){throw Not_found;}else{}
           
           var hostname="unknown primitive:unix_string_of_inet_addr";
           }
         else
          {throw exn$2;}
         }
       
       try
        {if(List["mem"](3,opts)){throw Not_found;}else{}
         
         if(List["mem"](4,opts)){var kind="udp";}else{var kind="tcp";}
         
         var service="unknown primitive:unix_getservbyport"[1];
         }
       catch(exn$3)
        {if(exn$3=Not_found)
          {var service=Pervasives["string_of_int"](p);}
         else
          {throw exn$3;}
         }
       
       return [0,hostname,service];
       
      }
    };

var
 getnameinfo=
  function(addr,opts)
   {try
     {return "unknown primitive:unix_getnameinfo";}
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Invalid_argument)
       {return getnameinfo_emulation(addr,opts);}
      else
       {throw exn$2;}
      }
    };

var
 system=
  function(cmd)
   {var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return waitpid(0,id)[2];}
    else
     {try
       {return execv("/bin/sh",["/bin/sh","-c",cmd]);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 safe_dup=
  function(fd)
   {var new_fd="unknown primitive:unix_dup";
    
    if(new_fd>=3)
     {return new_fd;}
    else
     {var res=safe_dup(fd);"unknown primitive:unix_close";return res;}
    };

var
 safe_close=
  function(fd)
   {try
     {return "unknown primitive:unix_close";}
    catch(exn$2)
     {var tag$2=exn$2[1];if(tag$2=Unix_error){return 0;}else{throw exn$2;}}
    };

var
 perform_redirections=
  function(new_stdin,new_stdout,new_stderr)
   {var newnewstdin=safe_dup(new_stdin);
    
    var newnewstdout=safe_dup(new_stdout);
    
    var newnewstderr=safe_dup(new_stderr);
    
    safe_close(new_stdin);
    safe_close(new_stdout);
    safe_close(new_stderr);
    "unknown primitive:unix_dup2";
    "unknown primitive:unix_close";
    "unknown primitive:unix_dup2";
    "unknown primitive:unix_close";
    "unknown primitive:unix_dup2";
    return "unknown primitive:unix_close";
    };

var
 create_process=
  function(cmd,args,new_stdin,new_stdout,new_stderr)
   {var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return id;}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return execvp(cmd,args);
        }
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 create_process_env=
  function(cmd,args,env,new_stdin,new_stdout,new_stderr)
   {var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return id;}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return execvpe(cmd,args,env);
        }
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var popen_processes=Hashtbl["create"](0,7);

var
 open_proc=
  function(cmd,proc,input,output,toclose)
   {var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {if(input!=stdin)
       {"unknown primitive:unix_dup2","unknown primitive:unix_close"}
      else
       {}
      
      if(output!=stdout)
       {"unknown primitive:unix_dup2","unknown primitive:unix_close"}
      else
       {}
      
      List["iter"]
       (function(prim){return "unknown primitive:unix_close";},toclose);
      try
       {return execv("/bin/sh",["/bin/sh","-c",cmd]);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_in=
  function(cmd)
   {var match=pipe(0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    open_proc(cmd,[1,inchan],stdin,in_write,[0,in_read,0]);
    "unknown primitive:unix_close";
    return inchan;
    };

var
 open_process_out=
  function(cmd)
   {var match=pipe(0);
    
    var out_write=match[2];
    
    var out_read=match[1];
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    open_proc(cmd,[2,outchan],out_read,stdout,[0,out_write,0]);
    "unknown primitive:unix_close";
    return outchan;
    };

var
 open_process=
  function(cmd)
   {var match=pipe(0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var match$1=pipe(0);
    
    var out_write=match$1[2];
    
    var out_read=match$1[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    open_proc
     (cmd,[0,inchan,outchan],out_read,in_write,[0,in_read,[0,out_write,0]]);
    "unknown primitive:unix_close";
    "unknown primitive:unix_close";
    return [0,inchan,outchan];
    };

var
 open_proc_full=
  function(cmd,env,proc,input,output,error$1,toclose)
   {var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {"unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      List["iter"]
       (function(prim){return "unknown primitive:unix_close";},toclose);
      try
       {return execve("/bin/sh",["/bin/sh","-c",cmd],env);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_full=
  function(cmd,env)
   {var match=pipe(0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var match$1=pipe(0);
    
    var out_write=match$1[2];
    
    var out_read=match$1[1];
    
    var match$2=pipe(0);
    
    var err_write=match$2[2];
    
    var err_read=match$2[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    var errchan="unknown primitive:caml_ml_open_descriptor_in";
    
    open_proc_full
     (cmd,
      env,
      [3,inchan,outchan,errchan],
      out_read,
      in_write,
      err_write,
      [0,in_read,[0,out_write,[0,err_read,0]]]);
    "unknown primitive:unix_close";
    "unknown primitive:unix_close";
    "unknown primitive:unix_close";
    return [0,inchan,outchan,errchan];
    };

var
 find_proc_id=
  function(fun_name,proc)
   {try
     {var pid=Hashtbl["find"](popen_processes,proc);
      
      Hashtbl["remove"](popen_processes,proc);
      return pid;
      }
    catch(exn$2)
     {if(exn$2=Not_found)
       {throw [0,Unix_error,3,fun_name,""];}
      else
       {throw exn$2;}
      }
    };

var
 waitpid_non_intr=
  function(pid)
   {try
     {return waitpid(0,pid);}
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=11){var exit=21;}else{return waitpid_non_intr(pid);}}
        else
         {var exit=21;}
        }
      else
       {var exit=21;}
      
      switch(exit){case 21:throw exn$2;}
      }
    };

var
 close_process_in=
  function(inchan)
   {var pid=find_proc_id("close_process_in",[1,inchan]);
    
    Pervasives["close_in"](inchan);
    return waitpid_non_intr(pid)[2];
    };

var
 close_process_out=
  function(outchan)
   {var pid=find_proc_id("close_process_out",[2,outchan]);
    
    Pervasives["close_out"](outchan);
    return waitpid_non_intr(pid)[2];
    };

var
 close_process=
  function(param)
   {var outchan=param[2];
    
    var inchan=param[1];
    
    var pid=find_proc_id("close_process",[0,inchan,outchan]);
    
    Pervasives["close_in"](inchan);
    try
     {Pervasives["close_out"](outchan)}
    catch(exn$2){var tag$2=exn$2[1];if(tag$2=Sys_error){}else{throw exn$2;}}
    
    return waitpid_non_intr(pid)[2];
    };

var
 close_process_full=
  function(param)
   {var errchan=param[3];
    
    var outchan=param[2];
    
    var inchan=param[1];
    
    var pid=find_proc_id("close_process_full",[3,inchan,outchan,errchan]);
    
    Pervasives["close_in"](inchan);
    try
     {Pervasives["close_out"](outchan)}
    catch(exn$2){var tag$2=exn$2[1];if(tag$2=Sys_error){}else{throw exn$2;}}
    
    Pervasives["close_in"](errchan);
    return waitpid_non_intr(pid)[2];
    };

var
 open_connection=
  function(sockaddr)
   {var sock=socket(domain_of_sockaddr(sockaddr),0,0);
    
    try
     {connect(sock,sockaddr);
      return [0,
              "unknown primitive:caml_ml_open_descriptor_in",
              "unknown primitive:caml_ml_open_descriptor_out"];
      }
    catch(exn$2){"unknown primitive:unix_close";throw exn$2;}
    };

var
 shutdown_connection=
  function(inchan){return "unknown primitive:unix_shutdown";};

var
 establish_server=
  function(server_fun,sockaddr)
   {var sock=socket(domain_of_sockaddr(sockaddr),0,0);
    
    setsockopt(sock,2,1);
    "unknown primitive:unix_bind";
    "unknown primitive:unix_listen";
    while(1)
     {var match=accept(sock);
      
      var s=match[1];
      
      var id="unknown primitive:unix_fork";
      
      if(id!=0)
       {"unknown primitive:unix_close",0}
      else
       {if("unknown primitive:unix_fork"!=0){Pervasives["exit"](0)}else{}
        
        var inchan="unknown primitive:caml_ml_open_descriptor_in";
        
        var outchan="unknown primitive:caml_ml_open_descriptor_out";
        
        server_fun(inchan,outchan),
        Pervasives["close_out"](outchan),
        Pervasives["exit"](0)}
      }
    return 0;
    };

[0,
 Unix_error,
 function(prim){return "unknown primitive:unix_error_message";},
 handle_unix_error,
 function(prim){return "unknown primitive:unix_environment";},
 function(prim){return "unknown primitive:caml_sys_getenv";},
 function(prim,prim$1){return "unknown primitive:unix_putenv";},
 execv,
 execve,
 execvp,
 execvpe,
 function(prim){return "unknown primitive:unix_fork";},
 wait,
 waitpid,
 system,
 function(prim){return "unknown primitive:unix_getpid";},
 function(prim){return "unknown primitive:unix_getppid";},
 function(prim){return "unknown primitive:unix_nice";},
 stdin,
 stdout,
 stderr,
 function(prim,prim$1,prim$2){return "unknown primitive:unix_open";},
 function(prim){return "unknown primitive:unix_close";},
 read,
 write,
 single_write,
 write_substring,
 single_write_substring,
 function(prim){return "unknown primitive:caml_ml_open_descriptor_in";},
 function(prim){return "unknown primitive:caml_ml_open_descriptor_out";},
 function(prim){return "unknown primitive:caml_channel_descriptor";},
 function(prim){return "unknown primitive:caml_channel_descriptor";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_lseek";},
 function(prim,prim$1){return "unknown primitive:unix_truncate";},
 function(prim,prim$1){return "unknown primitive:unix_ftruncate";},
 function(prim){return "unknown primitive:unix_stat";},
 function(prim){return "unknown primitive:unix_lstat";},
 function(prim){return "unknown primitive:unix_fstat";},
 function(prim){return "unknown primitive:unix_isatty";},
 [0,
  function(prim,prim$1,prim$2){return "unknown primitive:unix_lseek_64";},
  function(prim,prim$1){return "unknown primitive:unix_truncate_64";},
  function(prim,prim$1){return "unknown primitive:unix_ftruncate_64";},
  function(prim){return "unknown primitive:unix_stat_64";},
  function(prim){return "unknown primitive:unix_lstat_64";},
  function(prim){return "unknown primitive:unix_fstat_64";}],
 function(prim){return "unknown primitive:unix_unlink";},
 function(prim,prim$1){return "unknown primitive:unix_rename";},
 function(prim,prim$1){return "unknown primitive:unix_link";},
 function(prim,prim$1){return "unknown primitive:unix_chmod";},
 function(prim,prim$1){return "unknown primitive:unix_fchmod";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_chown";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_fchown";},
 function(prim){return "unknown primitive:unix_umask";},
 function(prim,prim$1){return "unknown primitive:unix_access";},
 function(prim){return "unknown primitive:unix_dup";},
 function(prim,prim$1){return "unknown primitive:unix_dup2";},
 function(prim){return "unknown primitive:unix_set_nonblock";},
 function(prim){return "unknown primitive:unix_clear_nonblock";},
 function(prim){return "unknown primitive:unix_set_close_on_exec";},
 function(prim){return "unknown primitive:unix_clear_close_on_exec";},
 function(prim,prim$1){return "unknown primitive:unix_mkdir";},
 function(prim){return "unknown primitive:unix_rmdir";},
 function(prim){return "unknown primitive:unix_chdir";},
 function(prim){return "unknown primitive:unix_getcwd";},
 function(prim){return "unknown primitive:unix_chroot";},
 function(prim){return "unknown primitive:unix_opendir";},
 function(prim){return "unknown primitive:unix_readdir";},
 function(prim){return "unknown primitive:unix_rewinddir";},
 function(prim){return "unknown primitive:unix_closedir";},
 pipe,
 function(prim,prim$1){return "unknown primitive:unix_mkfifo";},
 create_process,
 create_process_env,
 open_process_in,
 open_process_out,
 open_process,
 open_process_full,
 close_process_in,
 close_process_out,
 close_process,
 close_process_full,
 function(prim,prim$1){return "unknown primitive:unix_symlink";},
 function(prim){return "unknown primitive:unix_readlink";},
 select,
 function(prim,prim$1,prim$2){return "unknown primitive:unix_lockf";},
 function(prim,prim$1){return "unknown primitive:unix_kill";},
 function(prim,prim$1){return "unknown primitive:unix_sigprocmask";},
 function(prim){return "unknown primitive:unix_sigpending";},
 function(prim){return "unknown primitive:unix_sigsuspend";},
 pause,
 function(prim){return "unknown primitive:unix_time";},
 function(prim){return "unknown primitive:unix_gettimeofday";},
 function(prim){return "unknown primitive:unix_gmtime";},
 function(prim){return "unknown primitive:unix_localtime";},
 function(prim){return "unknown primitive:unix_mktime";},
 function(prim){return "unknown primitive:unix_alarm";},
 sleep,
 function(prim){return "unknown primitive:unix_times";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_utimes";},
 function(prim){return "unknown primitive:unix_getitimer";},
 function(prim,prim$1){return "unknown primitive:unix_setitimer";},
 function(prim){return "unknown primitive:unix_getuid";},
 function(prim){return "unknown primitive:unix_geteuid";},
 function(prim){return "unknown primitive:unix_setuid";},
 function(prim){return "unknown primitive:unix_getgid";},
 function(prim){return "unknown primitive:unix_getegid";},
 function(prim){return "unknown primitive:unix_setgid";},
 function(prim){return "unknown primitive:unix_getgroups";},
 function(prim){return "unknown primitive:unix_setgroups";},
 function(prim,prim$1){return "unknown primitive:unix_initgroups";},
 function(prim){return "unknown primitive:unix_getlogin";},
 function(prim){return "unknown primitive:unix_getpwnam";},
 function(prim){return "unknown primitive:unix_getgrnam";},
 function(prim){return "unknown primitive:unix_getpwuid";},
 function(prim){return "unknown primitive:unix_getgrgid";},
 function(prim){return "unknown primitive:unix_inet_addr_of_string";},
 function(prim){return "unknown primitive:unix_string_of_inet_addr";},
 inet_addr_any,
 inet_addr_loopback,
 inet6_addr_any,
 inet6_addr_loopback,
 socket,
 domain_of_sockaddr,
 socketpair,
 accept,
 function(prim,prim$1){return "unknown primitive:unix_bind";},
 connect,
 function(prim,prim$1){return "unknown primitive:unix_listen";},
 function(prim,prim$1){return "unknown primitive:unix_shutdown";},
 function(prim){return "unknown primitive:unix_getsockname";},
 function(prim){return "unknown primitive:unix_getpeername";},
 recv,
 recvfrom,
 send,
 send_substring,
 sendto,
 sendto_substring,
 getsockopt,
 setsockopt,
 getsockopt_int,
 setsockopt_int,
 getsockopt_optint,
 setsockopt_optint,
 getsockopt_float,
 setsockopt_float,
 getsockopt_error,
 open_connection,
 shutdown_connection,
 establish_server,
 function(prim){return "unknown primitive:unix_gethostname";},
 function(prim){return "unknown primitive:unix_gethostbyname";},
 function(prim){return "unknown primitive:unix_gethostbyaddr";},
 function(prim){return "unknown primitive:unix_getprotobyname";},
 function(prim){return "unknown primitive:unix_getprotobynumber";},
 function(prim,prim$1){return "unknown primitive:unix_getservbyname";},
 function(prim,prim$1){return "unknown primitive:unix_getservbyport";},
 getaddrinfo,
 getnameinfo,
 function(prim){return "unknown primitive:unix_tcgetattr";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_tcsetattr";},
 function(prim,prim$1){return "unknown primitive:unix_tcsendbreak";},
 function(prim){return "unknown primitive:unix_tcdrain";},
 function(prim,prim$1){return "unknown primitive:unix_tcflush";},
 function(prim,prim$1){return "unknown primitive:unix_tcflow";},
 function(prim){return "unknown primitive:unix_setsid";}];
module["exports"]=
{"Unix_error":Unix_error,
 "unknown block:(function prim/1859 (unix_error_message prim/1859))":
 unknown block:(function prim/1859 (unix_error_message prim/1859)),
 "handle_unix_error":handle_unix_error,
 "unknown block:(function prim/1860 (unix_environment prim/1860))":
 unknown block:(function prim/1860 (unix_environment prim/1860)),
 "unknown block:(function prim/1861 (caml_sys_getenv prim/1861))":
 unknown block:(function prim/1861 (caml_sys_getenv prim/1861)),
 "unknown block:(function prim/1863 prim/1862 (unix_putenv prim/1863 prim/1862))":
 unknown block:(function prim/1863 prim/1862 (unix_putenv prim/1863 prim/1862)),
 "execv":execv,
 "execve":execve,
 "execvp":execvp,
 "execvpe":execvpe,
 "unknown block:(function prim/1864 (unix_fork prim/1864))":
 unknown block:(function prim/1864 (unix_fork prim/1864)),
 "wait":wait,
 "waitpid":waitpid,
 "system":system,
 "unknown block:(function prim/1865 (unix_getpid prim/1865))":
 unknown block:(function prim/1865 (unix_getpid prim/1865)),
 "unknown block:(function prim/1866 (unix_getppid prim/1866))":
 unknown block:(function prim/1866 (unix_getppid prim/1866)),
 "unknown block:(function prim/1867 (unix_nice prim/1867))":
 unknown block:(function prim/1867 (unix_nice prim/1867)),
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "unknown block:(function prim/1870 prim/1869 prim/1868\n  (unix_open prim/1870 prim/1869 prim/1868))":
 unknown block:(function prim/1870 prim/1869 prim/1868
  (unix_open prim/1870 prim/1869 prim/1868)),
 "unknown block:(function prim/1871 (unix_close prim/1871))":
 unknown block:(function prim/1871 (unix_close prim/1871)),
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "unknown block:(function prim/1872 (caml_ml_open_descriptor_in prim/1872))":
 unknown block:(function prim/1872 (caml_ml_open_descriptor_in prim/1872)),
 "unknown block:(function prim/1873 (caml_ml_open_descriptor_out prim/1873))":
 unknown block:(function prim/1873 (caml_ml_open_descriptor_out prim/1873)),
 "unknown block:(function prim/1874 (caml_channel_descriptor prim/1874))":
 unknown block:(function prim/1874 (caml_channel_descriptor prim/1874)),
 "unknown block:(function prim/1875 (caml_channel_descriptor prim/1875))":
 unknown block:(function prim/1875 (caml_channel_descriptor prim/1875)),
 "unknown block:(function prim/1878 prim/1877 prim/1876\n  (unix_lseek prim/1878 prim/1877 prim/1876))":
 unknown block:(function prim/1878 prim/1877 prim/1876
  (unix_lseek prim/1878 prim/1877 prim/1876)),
 "unknown block:(function prim/1880 prim/1879 (unix_truncate prim/1880 prim/1879))":
 unknown block:(function prim/1880 prim/1879 (unix_truncate prim/1880 prim/1879)),
 "unknown block:(function prim/1882 prim/1881 (unix_ftruncate prim/1882 prim/1881))":
 unknown block:(function prim/1882 prim/1881 (unix_ftruncate prim/1882 prim/1881)),
 "unknown block:(function prim/1883 (unix_stat prim/1883))":
 unknown block:(function prim/1883 (unix_stat prim/1883)),
 "unknown block:(function prim/1884 (unix_lstat prim/1884))":
 unknown block:(function prim/1884 (unix_lstat prim/1884)),
 "unknown block:(function prim/1885 (unix_fstat prim/1885))":
 unknown block:(function prim/1885 (unix_fstat prim/1885)),
 "unknown block:(function prim/1886 (unix_isatty prim/1886))":
 unknown block:(function prim/1886 (unix_isatty prim/1886)),
 "unknown block:(makeblock 0\n  (function prim/1889 prim/1888 prim/1887\n    (unix_lseek_64 prim/1889 prim/1888 prim/1887))\n  (function prim/1891 prim/1890 (unix_truncate_64 prim/1891 prim/1890))\n  (function prim/1893 prim/1892 (unix_ftruncate_64 prim/1893 prim/1892))\n  (function prim/1894 (unix_stat_64 prim/1894))\n  (function prim/1895 (unix_lstat_64 prim/1895))\n  (function prim/1896 (unix_fstat_64 prim/1896)))":
 unknown block:(makeblock 0
  (function prim/1889 prim/1888 prim/1887
    (unix_lseek_64 prim/1889 prim/1888 prim/1887))
  (function prim/1891 prim/1890 (unix_truncate_64 prim/1891 prim/1890))
  (function prim/1893 prim/1892 (unix_ftruncate_64 prim/1893 prim/1892))
  (function prim/1894 (unix_stat_64 prim/1894))
  (function prim/1895 (unix_lstat_64 prim/1895))
  (function prim/1896 (unix_fstat_64 prim/1896))),
 "unknown block:(function prim/1897 (unix_unlink prim/1897))":
 unknown block:(function prim/1897 (unix_unlink prim/1897)),
 "unknown block:(function prim/1899 prim/1898 (unix_rename prim/1899 prim/1898))":
 unknown block:(function prim/1899 prim/1898 (unix_rename prim/1899 prim/1898)),
 "unknown block:(function prim/1901 prim/1900 (unix_link prim/1901 prim/1900))":
 unknown block:(function prim/1901 prim/1900 (unix_link prim/1901 prim/1900)),
 "unknown block:(function prim/1903 prim/1902 (unix_chmod prim/1903 prim/1902))":
 unknown block:(function prim/1903 prim/1902 (unix_chmod prim/1903 prim/1902)),
 "unknown block:(function prim/1905 prim/1904 (unix_fchmod prim/1905 prim/1904))":
 unknown block:(function prim/1905 prim/1904 (unix_fchmod prim/1905 prim/1904)),
 "unknown block:(function prim/1908 prim/1907 prim/1906\n  (unix_chown prim/1908 prim/1907 prim/1906))":
 unknown block:(function prim/1908 prim/1907 prim/1906
  (unix_chown prim/1908 prim/1907 prim/1906)),
 "unknown block:(function prim/1911 prim/1910 prim/1909\n  (unix_fchown prim/1911 prim/1910 prim/1909))":
 unknown block:(function prim/1911 prim/1910 prim/1909
  (unix_fchown prim/1911 prim/1910 prim/1909)),
 "unknown block:(function prim/1912 (unix_umask prim/1912))":
 unknown block:(function prim/1912 (unix_umask prim/1912)),
 "unknown block:(function prim/1914 prim/1913 (unix_access prim/1914 prim/1913))":
 unknown block:(function prim/1914 prim/1913 (unix_access prim/1914 prim/1913)),
 "unknown block:(function prim/1915 (unix_dup prim/1915))":
 unknown block:(function prim/1915 (unix_dup prim/1915)),
 "unknown block:(function prim/1917 prim/1916 (unix_dup2 prim/1917 prim/1916))":
 unknown block:(function prim/1917 prim/1916 (unix_dup2 prim/1917 prim/1916)),
 "unknown block:(function prim/1918 (unix_set_nonblock prim/1918))":
 unknown block:(function prim/1918 (unix_set_nonblock prim/1918)),
 "unknown block:(function prim/1919 (unix_clear_nonblock prim/1919))":
 unknown block:(function prim/1919 (unix_clear_nonblock prim/1919)),
 "unknown block:(function prim/1920 (unix_set_close_on_exec prim/1920))":
 unknown block:(function prim/1920 (unix_set_close_on_exec prim/1920)),
 "unknown block:(function prim/1921 (unix_clear_close_on_exec prim/1921))":
 unknown block:(function prim/1921 (unix_clear_close_on_exec prim/1921)),
 "unknown block:(function prim/1923 prim/1922 (unix_mkdir prim/1923 prim/1922))":
 unknown block:(function prim/1923 prim/1922 (unix_mkdir prim/1923 prim/1922)),
 "unknown block:(function prim/1924 (unix_rmdir prim/1924))":
 unknown block:(function prim/1924 (unix_rmdir prim/1924)),
 "unknown block:(function prim/1925 (unix_chdir prim/1925))":
 unknown block:(function prim/1925 (unix_chdir prim/1925)),
 "unknown block:(function prim/1926 (unix_getcwd prim/1926))":
 unknown block:(function prim/1926 (unix_getcwd prim/1926)),
 "unknown block:(function prim/1927 (unix_chroot prim/1927))":
 unknown block:(function prim/1927 (unix_chroot prim/1927)),
 "unknown block:(function prim/1928 (unix_opendir prim/1928))":
 unknown block:(function prim/1928 (unix_opendir prim/1928)),
 "unknown block:(function prim/1929 (unix_readdir prim/1929))":
 unknown block:(function prim/1929 (unix_readdir prim/1929)),
 "unknown block:(function prim/1930 (unix_rewinddir prim/1930))":
 unknown block:(function prim/1930 (unix_rewinddir prim/1930)),
 "unknown block:(function prim/1931 (unix_closedir prim/1931))":
 unknown block:(function prim/1931 (unix_closedir prim/1931)),
 "pipe":pipe,
 "unknown block:(function prim/1933 prim/1932 (unix_mkfifo prim/1933 prim/1932))":
 unknown block:(function prim/1933 prim/1932 (unix_mkfifo prim/1933 prim/1932)),
 "create_process":create_process,
 "create_process_env":create_process_env,
 "open_process_in":open_process_in,
 "open_process_out":open_process_out,
 "open_process":open_process,
 "open_process_full":open_process_full,
 "close_process_in":close_process_in,
 "close_process_out":close_process_out,
 "close_process":close_process,
 "close_process_full":close_process_full,
 "unknown block:(function prim/1935 prim/1934 (unix_symlink prim/1935 prim/1934))":
 unknown block:(function prim/1935 prim/1934 (unix_symlink prim/1935 prim/1934)),
 "unknown block:(function prim/1936 (unix_readlink prim/1936))":
 unknown block:(function prim/1936 (unix_readlink prim/1936)),
 "select":select,
 "unknown block:(function prim/1939 prim/1938 prim/1937\n  (unix_lockf prim/1939 prim/1938 prim/1937))":
 unknown block:(function prim/1939 prim/1938 prim/1937
  (unix_lockf prim/1939 prim/1938 prim/1937)),
 "unknown block:(function prim/1941 prim/1940 (unix_kill prim/1941 prim/1940))":
 unknown block:(function prim/1941 prim/1940 (unix_kill prim/1941 prim/1940)),
 "unknown block:(function prim/1943 prim/1942 (unix_sigprocmask prim/1943 prim/1942))":
 unknown block:(function prim/1943 prim/1942 (unix_sigprocmask prim/1943 prim/1942)),
 "unknown block:(function prim/1944 (unix_sigpending prim/1944))":
 unknown block:(function prim/1944 (unix_sigpending prim/1944)),
 "unknown block:(function prim/1945 (unix_sigsuspend prim/1945))":
 unknown block:(function prim/1945 (unix_sigsuspend prim/1945)),
 "pause":pause,
 "unknown block:(function prim/1946 (unix_time prim/1946))":
 unknown block:(function prim/1946 (unix_time prim/1946)),
 "unknown block:(function prim/1947 (unix_gettimeofday prim/1947))":
 unknown block:(function prim/1947 (unix_gettimeofday prim/1947)),
 "unknown block:(function prim/1948 (unix_gmtime prim/1948))":
 unknown block:(function prim/1948 (unix_gmtime prim/1948)),
 "unknown block:(function prim/1949 (unix_localtime prim/1949))":
 unknown block:(function prim/1949 (unix_localtime prim/1949)),
 "unknown block:(function prim/1950 (unix_mktime prim/1950))":
 unknown block:(function prim/1950 (unix_mktime prim/1950)),
 "unknown block:(function prim/1951 (unix_alarm prim/1951))":
 unknown block:(function prim/1951 (unix_alarm prim/1951)),
 "sleep":sleep,
 "unknown block:(function prim/1952 (unix_times prim/1952))":
 unknown block:(function prim/1952 (unix_times prim/1952)),
 "unknown block:(function prim/1955 prim/1954 prim/1953\n  (unix_utimes prim/1955 prim/1954 prim/1953))":
 unknown block:(function prim/1955 prim/1954 prim/1953
  (unix_utimes prim/1955 prim/1954 prim/1953)),
 "unknown block:(function prim/1956 (unix_getitimer prim/1956))":
 unknown block:(function prim/1956 (unix_getitimer prim/1956)),
 "unknown block:(function prim/1958 prim/1957 (unix_setitimer prim/1958 prim/1957))":
 unknown block:(function prim/1958 prim/1957 (unix_setitimer prim/1958 prim/1957)),
 "unknown block:(function prim/1959 (unix_getuid prim/1959))":
 unknown block:(function prim/1959 (unix_getuid prim/1959)),
 "unknown block:(function prim/1960 (unix_geteuid prim/1960))":
 unknown block:(function prim/1960 (unix_geteuid prim/1960)),
 "unknown block:(function prim/1961 (unix_setuid prim/1961))":
 unknown block:(function prim/1961 (unix_setuid prim/1961)),
 "unknown block:(function prim/1962 (unix_getgid prim/1962))":
 unknown block:(function prim/1962 (unix_getgid prim/1962)),
 "unknown block:(function prim/1963 (unix_getegid prim/1963))":
 unknown block:(function prim/1963 (unix_getegid prim/1963)),
 "unknown block:(function prim/1964 (unix_setgid prim/1964))":
 unknown block:(function prim/1964 (unix_setgid prim/1964)),
 "unknown block:(function prim/1965 (unix_getgroups prim/1965))":
 unknown block:(function prim/1965 (unix_getgroups prim/1965)),
 "unknown block:(function prim/1966 (unix_setgroups prim/1966))":
 unknown block:(function prim/1966 (unix_setgroups prim/1966)),
 "unknown block:(function prim/1968 prim/1967 (unix_initgroups prim/1968 prim/1967))":
 unknown block:(function prim/1968 prim/1967 (unix_initgroups prim/1968 prim/1967)),
 "unknown block:(function prim/1969 (unix_getlogin prim/1969))":
 unknown block:(function prim/1969 (unix_getlogin prim/1969)),
 "unknown block:(function prim/1970 (unix_getpwnam prim/1970))":
 unknown block:(function prim/1970 (unix_getpwnam prim/1970)),
 "unknown block:(function prim/1971 (unix_getgrnam prim/1971))":
 unknown block:(function prim/1971 (unix_getgrnam prim/1971)),
 "unknown block:(function prim/1972 (unix_getpwuid prim/1972))":
 unknown block:(function prim/1972 (unix_getpwuid prim/1972)),
 "unknown block:(function prim/1973 (unix_getgrgid prim/1973))":
 unknown block:(function prim/1973 (unix_getgrgid prim/1973)),
 "unknown block:(function prim/1974 (unix_inet_addr_of_string prim/1974))":
 unknown block:(function prim/1974 (unix_inet_addr_of_string prim/1974)),
 "unknown block:(function prim/1975 (unix_string_of_inet_addr prim/1975))":
 unknown block:(function prim/1975 (unix_string_of_inet_addr prim/1975)),
 "inet_addr_any":inet_addr_any,
 "inet_addr_loopback":inet_addr_loopback,
 "inet6_addr_any":inet6_addr_any,
 "inet6_addr_loopback":inet6_addr_loopback,
 "socket":socket,
 "domain_of_sockaddr":domain_of_sockaddr,
 "socketpair":socketpair,
 "accept":accept,
 "unknown block:(function prim/1977 prim/1976 (unix_bind prim/1977 prim/1976))":
 unknown block:(function prim/1977 prim/1976 (unix_bind prim/1977 prim/1976)),
 "connect":connect,
 "unknown block:(function prim/1979 prim/1978 (unix_listen prim/1979 prim/1978))":
 unknown block:(function prim/1979 prim/1978 (unix_listen prim/1979 prim/1978)),
 "unknown block:(function prim/1981 prim/1980 (unix_shutdown prim/1981 prim/1980))":
 unknown block:(function prim/1981 prim/1980 (unix_shutdown prim/1981 prim/1980)),
 "unknown block:(function prim/1982 (unix_getsockname prim/1982))":
 unknown block:(function prim/1982 (unix_getsockname prim/1982)),
 "unknown block:(function prim/1983 (unix_getpeername prim/1983))":
 unknown block:(function prim/1983 (unix_getpeername prim/1983)),
 "recv":recv,
 "recvfrom":recvfrom,
 "send":send,
 "send_substring":send_substring,
 "sendto":sendto,
 "sendto_substring":sendto_substring,
 "getsockopt":getsockopt,
 "setsockopt":setsockopt,
 "getsockopt_int":getsockopt_int,
 "setsockopt_int":setsockopt_int,
 "getsockopt_optint":getsockopt_optint,
 "setsockopt_optint":setsockopt_optint,
 "getsockopt_float":getsockopt_float,
 "setsockopt_float":setsockopt_float,
 "getsockopt_error":getsockopt_error,
 "open_connection":open_connection,
 "shutdown_connection":shutdown_connection,
 "establish_server":establish_server,
 "unknown block:(function prim/1984 (unix_gethostname prim/1984))":
 unknown block:(function prim/1984 (unix_gethostname prim/1984)),
 "unknown block:(function prim/1985 (unix_gethostbyname prim/1985))":
 unknown block:(function prim/1985 (unix_gethostbyname prim/1985)),
 "unknown block:(function prim/1986 (unix_gethostbyaddr prim/1986))":
 unknown block:(function prim/1986 (unix_gethostbyaddr prim/1986)),
 "unknown block:(function prim/1987 (unix_getprotobyname prim/1987))":
 unknown block:(function prim/1987 (unix_getprotobyname prim/1987)),
 "unknown block:(function prim/1988 (unix_getprotobynumber prim/1988))":
 unknown block:(function prim/1988 (unix_getprotobynumber prim/1988)),
 "unknown block:(function prim/1990 prim/1989 (unix_getservbyname prim/1990 prim/1989))":
 unknown block:(function prim/1990 prim/1989 (unix_getservbyname prim/1990 prim/1989)),
 "unknown block:(function prim/1992 prim/1991 (unix_getservbyport prim/1992 prim/1991))":
 unknown block:(function prim/1992 prim/1991 (unix_getservbyport prim/1992 prim/1991)),
 "getaddrinfo":getaddrinfo,
 "getnameinfo":getnameinfo,
 "unknown block:(function prim/1993 (unix_tcgetattr prim/1993))":
 unknown block:(function prim/1993 (unix_tcgetattr prim/1993)),
 "unknown block:(function prim/1996 prim/1995 prim/1994\n  (unix_tcsetattr prim/1996 prim/1995 prim/1994))":
 unknown block:(function prim/1996 prim/1995 prim/1994
  (unix_tcsetattr prim/1996 prim/1995 prim/1994)),
 "unknown block:(function prim/1998 prim/1997 (unix_tcsendbreak prim/1998 prim/1997))":
 unknown block:(function prim/1998 prim/1997 (unix_tcsendbreak prim/1998 prim/1997)),
 "unknown block:(function prim/1999 (unix_tcdrain prim/1999))":
 unknown block:(function prim/1999 (unix_tcdrain prim/1999)),
 "unknown block:(function prim/2001 prim/2000 (unix_tcflush prim/2001 prim/2000))":
 unknown block:(function prim/2001 prim/2000 (unix_tcflush prim/2001 prim/2000)),
 "unknown block:(function prim/2003 prim/2002 (unix_tcflow prim/2003 prim/2002))":
 unknown block:(function prim/2003 prim/2002 (unix_tcflow prim/2003 prim/2002)),
 "unknown block:(function prim/2004 (unix_setsid prim/2004))":
 unknown block:(function prim/2004 (unix_setsid prim/2004))};

