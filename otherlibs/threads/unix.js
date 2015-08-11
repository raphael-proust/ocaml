// Generated CODE, PLEASE EDIT WITH CARE 

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

Callback["register_exception"]
 ("Unix.Unix_error",[0,Unix_error,/* E2BIG */0,"",""]);
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
     {var exit;
      
      var tag=exn[1];
      
      if(tag=Unix_error)
       {var match=exn[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=161;}else{exit$1=162;}}
          else
           {exit$1=162;}
          }
        else
         {exit=161;}
        
        switch(exit$1){case 162:wait_read(fd);return read(fd,buf,ofs,len);}
        }
      else
       {exit=161;}
      
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
     {var exit;
      
      var tag=exn[1];
      
      if(tag=Unix_error)
       {var match=exn[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=159;}else{exit$1=160;}}
          else
           {exit$1=160;}
          }
        else
         {exit=159;}
        
        switch(exit$1){case 160:wait_write(fd);return write(fd,buf,ofs,len);}
        }
      else
       {exit=159;}
      
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
     {var exit;
      
      var tag=exn[1];
      
      if(tag=Unix_error)
       {var match=exn[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=157;}else{exit$1=158;}}
          else
           {exit$1=158;}
          }
        else
         {exit=157;}
        
        switch(exit$1)
         {case 158:wait_write(fd);return single_write(fd,buf,ofs,len);}
        }
      else
       {exit=157;}
      
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
   {var match=select_aux(/* tuple */[0,readfds,writefds,exceptfds,delay$1]);
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         var e=match[3];
         
         var w=match[2];
         
         var r=match[1];
         
         return /* tuple */[0,r,w,e];
         
        default:exit=151;}}
    
    switch(exit)
     {case 151:return /* tuple */[0,/* [] */0,/* [] */0,/* [] */0];}
    };

var
 safe_clear_nonblock=
  function(fd)
   {try
     {return "unknown primitive:unix_clear_nonblock";}
    catch(exn)
     {var tag=exn[1];if(tag=Unix_error){return /* () */0;}else{throw exn;}}
    };

var
 safe_set_nonblock=
  function(fd)
   {try
     {return "unknown primitive:unix_set_nonblock";}
    catch(exn)
     {var tag=exn[1];if(tag=Unix_error){return /* () */0;}else{throw exn;}}
    };

var
 do_exec=
  function(fn)
   {var oldtimer="unknown primitive:unix_setitimer";
    
    safe_clear_nonblock(stdin);
    safe_clear_nonblock(stdout);
    safe_clear_nonblock(stderr);
    try
     {return fn(/* () */0);}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Unix_error)
       {"unknown primitive:unix_setitimer";
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
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:
         var status=match[2];
         
         var pid$1=match[1];
         
         return /* tuple */[0,pid$1,status];
         
        default:exit=138;}}
    
    switch(exit)
     {case 138:return Pervasives["invalid_arg"]("Thread.wait_pid");}
    };

var wait=function(param){return wait_pid(-1);};

var
 waitpid=
  function(flags,pid)
   {if(List["mem"](/* WNOHANG */0,flags))
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
     {case 0:return /* PF_UNIX */0;
      case 1:
       var a=param[1];
       
       if(is_inet6_addr(a))
        {return /* PF_INET6 */2;}
       else
        {return /* PF_INET */1;}
       
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=118;}else{exit$1=119;}}
          else
           {exit$1=119;}
          }
        else
         {exit=118;}
        
        switch(exit$1){case 119:return accept(req);}
        }
      else
       {exit=118;}
      
      switch(exit){case 118:throw exn$2;}
      }
    };

var
 connect=
  function(s,addr)
   {try
     {return "unknown primitive:unix_connect";}
    catch(exn$2)
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match>=37)
           {if(match>=39){exit=115;}else{exit$1=116;}}
          else
           {if(match!=2){exit=115;}else{exit$1=116;}}
          }
        else
         {exit=115;}
        
        switch(exit$1)
         {case 116:wait_write(s);return "unknown primitive:unix_getpeername";}
        }
      else
       {exit=115;}
      
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=113;}else{exit$1=114;}}
          else
           {exit$1=114;}
          }
        else
         {exit=113;}
        
        switch(exit$1)
         {case 114:wait_read(fd);return recv(fd,buf,ofs,len,flags);}
        }
      else
       {exit=113;}
      
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=111;}else{exit$1=112;}}
          else
           {exit$1=112;}
          }
        else
         {exit=111;}
        
        switch(exit$1)
         {case 112:wait_read(fd);return recvfrom(fd,buf,ofs,len,flags);}
        }
      else
       {exit=111;}
      
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=109;}else{exit$1=110;}}
          else
           {exit$1=110;}
          }
        else
         {exit=109;}
        
        switch(exit$1)
         {case 110:wait_write(fd);return send(fd,buf,ofs,len,flags);}
        }
      else
       {exit=109;}
      
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if("unknown primitive:isint")
         {if(match!=2)
           {if(match!=37){exit=107;}else{exit$1=108;}}
          else
           {exit$1=108;}
          }
        else
         {exit=107;}
        
        switch(exit$1)
         {case 108:wait_write(fd);return sendto(fd,buf,ofs,len,flags,addr);}
        }
      else
       {exit=107;}
      
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

var getsockopt_error=function(fd){return SO[6](SO[5],fd,/* SO_ERROR */0);};

var
 getaddrinfo_emulation=
  function(node,service,opts)
   {var opt_socktype=[0,/* None */0];
    
    var opt_protocol=[0,0];
    
    var opt_passive=[0,/* false */0];
    
    List["iter"]
     (function(param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){case 2:return opt_passive[1]=/* true */1,0;}}
        else
         {switch(param[0])
           {case 1:var s=param[1];return opt_socktype[1]=/* Some */[0,s],0;
            case 2:var p=param[1];return opt_protocol[1]=p,0;
            default:exit=86;}}
        
        switch(exit){case 86:return /* () */0;}
        },
      opts);
    var
     get_port=
      function(ty,kind)
       {if("unknown primitive:caml_string_equal")
         {return /* :: */[0,/* tuple */[0,ty,0],/* [] */0];}
        else
         {try
           {return /* :: */[0,
                    /* tuple */[0,ty,"unknown primitive:caml_int_of_string"],
                    /* [] */0];
            }
          catch(exn$2)
           {var tag$2=exn$2[1];
            
            if(tag$2=Failure)
             {try
               {return /* :: */[0,
                        /* tuple */[0,ty,"unknown primitive:unix_getservbyname"[3]],
                        /* [] */0];
                }
              catch(exn$3)
               {if(exn$3=Not_found){return /* [] */0;}else{throw exn$3;}}
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
           {var ports=/* :: */[0,/* tuple */[0,ty,0],/* [] */0];}
          else
           {var ports=/* [] */0;}
          }
        else
         {var ports=get_port(/* SOCK_STREAM */0,"tcp");}
        }
      else
       {var ports=get_port(/* SOCK_DGRAM */1,"udp");}
      }
    else
     {var
       ports=
        Pervasives["@"]
         (get_port(/* SOCK_STREAM */0,"tcp"),
          get_port(/* SOCK_DGRAM */1,"udp"));
      }
    
    if("unknown primitive:caml_string_equal")
     {if(List["mem"](/* AI_PASSIVE */2,opts))
       {var
         addresses=
          /* :: */[0,/* tuple */[0,inet_addr_any,"0.0.0.0"],/* [] */0];
        }
      else
       {var
         addresses=
          /* :: */[0,/* tuple */[0,inet_addr_loopback,"127.0.0.1"],/* [] */0];
        }
      }
    else
     {try
       {var
         addresses=
          /* :: */[0,
           /* tuple */[0,"unknown primitive:unix_inet_addr_of_string",node],
           /* [] */0];
        }
      catch(exn$2)
       {var tag$2=exn$2[1];
        
        if(tag$2=Failure)
         {try
           {var he="unknown primitive:unix_gethostbyname";
            
            var
             addresses=
              List["map"]
               (function(a){return /* tuple */[0,a,he[1]];},
                $$Array["to_list"](he[4]));
            }
          catch(exn$3)
           {if(exn$3=Not_found){var addresses=/* [] */0;}else{throw exn$3;}}
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
                            
                            return /* record */[0,
                                    /* PF_INET */1,
                                    ty$1,
                                    opt_protocol[1],
                                    /* ADDR_INET */[1,addr,port],
                                    name];
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
     {case 0:var f=addr[1];return /* record */[0,"",f];
      case 1:
       var p=addr[2];
       
       var a=addr[1];
       
       try
        {if(List["mem"](/* NI_NUMERICHOST */1,opts)){throw Not_found;}else{}
         
         var hostname="unknown primitive:unix_gethostbyaddr"[1];
         }
       catch(exn$2)
        {if(exn$2=Not_found)
          {if(List["mem"](/* NI_NAMEREQD */2,opts)){throw Not_found;}else{}
           
           var hostname="unknown primitive:unix_string_of_inet_addr";
           }
         else
          {throw exn$2;}
         }
       
       try
        {if(List["mem"](/* NI_NUMERICSERV */3,opts)){throw Not_found;}else{}
         
         if(List["mem"](/* NI_DGRAM */4,opts))
          {var kind="udp";}
         else
          {var kind="tcp";}
         
         var service="unknown primitive:unix_getservbyport"[1];
         }
       catch(exn$3)
        {if(exn$3=Not_found)
          {var service=Pervasives["string_of_int"](p);}
         else
          {throw exn$3;}
         }
       
       return /* record */[0,hostname,service];
       
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
     {return waitpid(/* [] */0,id)[2];}
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
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error){return /* () */0;}else{throw exn$2;}
      }
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

var popen_processes=Hashtbl["create"](/* None */0,7);

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
   {var match=pipe(/* () */0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    open_proc
     (cmd,
      /* Process_in */[1,inchan],
      stdin,
      in_write,
      /* :: */[0,in_read,/* [] */0]);
    "unknown primitive:unix_close";
    return inchan;
    };

var
 open_process_out=
  function(cmd)
   {var match=pipe(/* () */0);
    
    var out_write=match[2];
    
    var out_read=match[1];
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    open_proc
     (cmd,
      /* Process_out */[2,outchan],
      out_read,
      stdout,
      /* :: */[0,out_write,/* [] */0]);
    "unknown primitive:unix_close";
    return outchan;
    };

var
 open_process=
  function(cmd)
   {var match=pipe(/* () */0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var match$1=pipe(/* () */0);
    
    var out_write=match$1[2];
    
    var out_read=match$1[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    open_proc
     (cmd,
      /* Process */[0,inchan,outchan],
      out_read,
      in_write,
      /* :: */[0,in_read,/* :: */[0,out_write,/* [] */0]]);
    "unknown primitive:unix_close";
    "unknown primitive:unix_close";
    return /* tuple */[0,inchan,outchan];
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
   {var match=pipe(/* () */0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var match$1=pipe(/* () */0);
    
    var out_write=match$1[2];
    
    var out_read=match$1[1];
    
    var match$2=pipe(/* () */0);
    
    var err_write=match$2[2];
    
    var err_read=match$2[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    var errchan="unknown primitive:caml_ml_open_descriptor_in";
    
    open_proc_full
     (cmd,
      env,
      /* Process_full */[3,inchan,outchan,errchan],
      out_read,
      in_write,
      err_write,
      /* :: */[0,in_read,/* :: */[0,out_write,/* :: */[0,err_read,/* [] */0]]]);
    "unknown primitive:unix_close";
    "unknown primitive:unix_close";
    "unknown primitive:unix_close";
    return /* tuple */[0,inchan,outchan,errchan];
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
       {throw [0,Unix_error,/* EBADF */3,fun_name,""];}
      else
       {throw exn$2;}
      }
    };

var
 waitpid_non_intr=
  function(pid)
   {try
     {return waitpid(/* [] */0,pid);}
    catch(exn$2)
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match!=11){exit=21;}else{return waitpid_non_intr(pid);}}
        else
         {exit=21;}
        }
      else
       {exit=21;}
      
      switch(exit){case 21:throw exn$2;}
      }
    };

var
 close_process_in=
  function(inchan)
   {var pid=find_proc_id("close_process_in",/* Process_in */[1,inchan]);
    
    Pervasives["close_in"](inchan);
    return waitpid_non_intr(pid)[2];
    };

var
 close_process_out=
  function(outchan)
   {var pid=find_proc_id("close_process_out",/* Process_out */[2,outchan]);
    
    Pervasives["close_out"](outchan);
    return waitpid_non_intr(pid)[2];
    };

var
 close_process=
  function(param)
   {var outchan=param[2];
    
    var inchan=param[1];
    
    var pid=find_proc_id("close_process",/* Process */[0,inchan,outchan]);
    
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
    
    var
     pid=
      find_proc_id
       ("close_process_full",/* Process_full */[3,inchan,outchan,errchan]);
    
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
   {var sock=socket(domain_of_sockaddr(sockaddr),/* SOCK_STREAM */0,0);
    
    try
     {connect(sock,sockaddr);
      return /* tuple */[0,
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
   {var sock=socket(domain_of_sockaddr(sockaddr),/* SOCK_STREAM */0,0);
    
    setsockopt(sock,/* SO_REUSEADDR */2,/* true */1);
    "unknown primitive:unix_bind";
    "unknown primitive:unix_listen";
    while(/* true */1)
     {var match=accept(sock);
      
      var s=match[1];
      
      var id="unknown primitive:unix_fork";
      
      if(id!=0)
       {"unknown primitive:unix_close",waitpid(/* [] */0,id)}
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

module["exports"]=
{"Unix_error":Unix_error,
 "unix_error_message":
 function(prim){return "unknown primitive:unix_error_message";},
 "handle_unix_error":handle_unix_error,
 "unix_environment":
 function(prim){return "unknown primitive:unix_environment";},
 "caml_sys_getenv":function(prim){return "unknown primitive:caml_sys_getenv";},
 "unix_putenv":function(prim,prim$1){return "unknown primitive:unix_putenv";},
 "execv":execv,
 "execve":execve,
 "execvp":execvp,
 "execvpe":execvpe,
 "unix_fork":function(prim){return "unknown primitive:unix_fork";},
 "wait":wait,
 "waitpid":waitpid,
 "system":system,
 "unix_getpid":function(prim){return "unknown primitive:unix_getpid";},
 "unix_getppid":function(prim){return "unknown primitive:unix_getppid";},
 "unix_nice":function(prim){return "unknown primitive:unix_nice";},
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "unix_open":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_open";},
 "unix_close":function(prim){return "unknown primitive:unix_close";},
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "caml_ml_open_descriptor_in":
 function(prim){return "unknown primitive:caml_ml_open_descriptor_in";},
 "caml_ml_open_descriptor_out":
 function(prim){return "unknown primitive:caml_ml_open_descriptor_out";},
 "caml_channel_descriptor":
 function(prim){return "unknown primitive:caml_channel_descriptor";},
 "caml_channel_descriptor":
 function(prim){return "unknown primitive:caml_channel_descriptor";},
 "unix_lseek":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_lseek";},
 "unix_truncate":
 function(prim,prim$1){return "unknown primitive:unix_truncate";},
 "unix_ftruncate":
 function(prim,prim$1){return "unknown primitive:unix_ftruncate";},
 "unix_stat":function(prim){return "unknown primitive:unix_stat";},
 "unix_lstat":function(prim){return "unknown primitive:unix_lstat";},
 "unix_fstat":function(prim){return "unknown primitive:unix_fstat";},
 "unix_isatty":function(prim){return "unknown primitive:unix_isatty";},
 "LargeFile":
 [0,
  function(prim,prim$1,prim$2){return "unknown primitive:unix_lseek_64";},
  function(prim,prim$1){return "unknown primitive:unix_truncate_64";},
  function(prim,prim$1){return "unknown primitive:unix_ftruncate_64";},
  function(prim){return "unknown primitive:unix_stat_64";},
  function(prim){return "unknown primitive:unix_lstat_64";},
  function(prim){return "unknown primitive:unix_fstat_64";}],
 "unix_unlink":function(prim){return "unknown primitive:unix_unlink";},
 "unix_rename":function(prim,prim$1){return "unknown primitive:unix_rename";},
 "unix_link":function(prim,prim$1){return "unknown primitive:unix_link";},
 "unix_chmod":function(prim,prim$1){return "unknown primitive:unix_chmod";},
 "unix_fchmod":function(prim,prim$1){return "unknown primitive:unix_fchmod";},
 "unix_chown":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_chown";},
 "unix_fchown":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_fchown";},
 "unix_umask":function(prim){return "unknown primitive:unix_umask";},
 "unix_access":function(prim,prim$1){return "unknown primitive:unix_access";},
 "unix_dup":function(prim){return "unknown primitive:unix_dup";},
 "unix_dup2":function(prim,prim$1){return "unknown primitive:unix_dup2";},
 "unix_set_nonblock":
 function(prim){return "unknown primitive:unix_set_nonblock";},
 "unix_clear_nonblock":
 function(prim){return "unknown primitive:unix_clear_nonblock";},
 "unix_set_close_on_exec":
 function(prim){return "unknown primitive:unix_set_close_on_exec";},
 "unix_clear_close_on_exec":
 function(prim){return "unknown primitive:unix_clear_close_on_exec";},
 "unix_mkdir":function(prim,prim$1){return "unknown primitive:unix_mkdir";},
 "unix_rmdir":function(prim){return "unknown primitive:unix_rmdir";},
 "unix_chdir":function(prim){return "unknown primitive:unix_chdir";},
 "unix_getcwd":function(prim){return "unknown primitive:unix_getcwd";},
 "unix_chroot":function(prim){return "unknown primitive:unix_chroot";},
 "unix_opendir":function(prim){return "unknown primitive:unix_opendir";},
 "unix_readdir":function(prim){return "unknown primitive:unix_readdir";},
 "unix_rewinddir":function(prim){return "unknown primitive:unix_rewinddir";},
 "unix_closedir":function(prim){return "unknown primitive:unix_closedir";},
 "pipe":pipe,
 "unix_mkfifo":function(prim,prim$1){return "unknown primitive:unix_mkfifo";},
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
 "unix_symlink":
 function(prim,prim$1){return "unknown primitive:unix_symlink";},
 "unix_readlink":function(prim){return "unknown primitive:unix_readlink";},
 "select":select,
 "unix_lockf":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_lockf";},
 "unix_kill":function(prim,prim$1){return "unknown primitive:unix_kill";},
 "unix_sigprocmask":
 function(prim,prim$1){return "unknown primitive:unix_sigprocmask";},
 "unix_sigpending":function(prim){return "unknown primitive:unix_sigpending";},
 "unix_sigsuspend":function(prim){return "unknown primitive:unix_sigsuspend";},
 "pause":pause,
 "unix_time":function(prim){return "unknown primitive:unix_time";},
 "unix_gettimeofday":
 function(prim){return "unknown primitive:unix_gettimeofday";},
 "unix_gmtime":function(prim){return "unknown primitive:unix_gmtime";},
 "unix_localtime":function(prim){return "unknown primitive:unix_localtime";},
 "unix_mktime":function(prim){return "unknown primitive:unix_mktime";},
 "unix_alarm":function(prim){return "unknown primitive:unix_alarm";},
 "sleep":sleep,
 "unix_times":function(prim){return "unknown primitive:unix_times";},
 "unix_utimes":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_utimes";},
 "unix_getitimer":function(prim){return "unknown primitive:unix_getitimer";},
 "unix_setitimer":
 function(prim,prim$1){return "unknown primitive:unix_setitimer";},
 "unix_getuid":function(prim){return "unknown primitive:unix_getuid";},
 "unix_geteuid":function(prim){return "unknown primitive:unix_geteuid";},
 "unix_setuid":function(prim){return "unknown primitive:unix_setuid";},
 "unix_getgid":function(prim){return "unknown primitive:unix_getgid";},
 "unix_getegid":function(prim){return "unknown primitive:unix_getegid";},
 "unix_setgid":function(prim){return "unknown primitive:unix_setgid";},
 "unix_getgroups":function(prim){return "unknown primitive:unix_getgroups";},
 "unix_setgroups":function(prim){return "unknown primitive:unix_setgroups";},
 "unix_initgroups":
 function(prim,prim$1){return "unknown primitive:unix_initgroups";},
 "unix_getlogin":function(prim){return "unknown primitive:unix_getlogin";},
 "unix_getpwnam":function(prim){return "unknown primitive:unix_getpwnam";},
 "unix_getgrnam":function(prim){return "unknown primitive:unix_getgrnam";},
 "unix_getpwuid":function(prim){return "unknown primitive:unix_getpwuid";},
 "unix_getgrgid":function(prim){return "unknown primitive:unix_getgrgid";},
 "unix_inet_addr_of_string":
 function(prim){return "unknown primitive:unix_inet_addr_of_string";},
 "unix_string_of_inet_addr":
 function(prim){return "unknown primitive:unix_string_of_inet_addr";},
 "inet_addr_any":inet_addr_any,
 "inet_addr_loopback":inet_addr_loopback,
 "inet6_addr_any":inet6_addr_any,
 "inet6_addr_loopback":inet6_addr_loopback,
 "socket":socket,
 "domain_of_sockaddr":domain_of_sockaddr,
 "socketpair":socketpair,
 "accept":accept,
 "unix_bind":function(prim,prim$1){return "unknown primitive:unix_bind";},
 "connect":connect,
 "unix_listen":function(prim,prim$1){return "unknown primitive:unix_listen";},
 "unix_shutdown":
 function(prim,prim$1){return "unknown primitive:unix_shutdown";},
 "unix_getsockname":
 function(prim){return "unknown primitive:unix_getsockname";},
 "unix_getpeername":
 function(prim){return "unknown primitive:unix_getpeername";},
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
 "unix_gethostname":
 function(prim){return "unknown primitive:unix_gethostname";},
 "unix_gethostbyname":
 function(prim){return "unknown primitive:unix_gethostbyname";},
 "unix_gethostbyaddr":
 function(prim){return "unknown primitive:unix_gethostbyaddr";},
 "unix_getprotobyname":
 function(prim){return "unknown primitive:unix_getprotobyname";},
 "unix_getprotobynumber":
 function(prim){return "unknown primitive:unix_getprotobynumber";},
 "unix_getservbyname":
 function(prim,prim$1){return "unknown primitive:unix_getservbyname";},
 "unix_getservbyport":
 function(prim,prim$1){return "unknown primitive:unix_getservbyport";},
 "getaddrinfo":getaddrinfo,
 "getnameinfo":getnameinfo,
 "unix_tcgetattr":function(prim){return "unknown primitive:unix_tcgetattr";},
 "unix_tcsetattr":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_tcsetattr";},
 "unix_tcsendbreak":
 function(prim,prim$1){return "unknown primitive:unix_tcsendbreak";},
 "unix_tcdrain":function(prim){return "unknown primitive:unix_tcdrain";},
 "unix_tcflush":
 function(prim,prim$1){return "unknown primitive:unix_tcflush";},
 "unix_tcflow":function(prim,prim$1){return "unknown primitive:unix_tcflow";},
 "unix_setsid":function(prim){return "unknown primitive:unix_setsid";}};

