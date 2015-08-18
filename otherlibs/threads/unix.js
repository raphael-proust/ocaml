// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Callback=require("./callback.js");
var Bytes=require("./bytes.js");
var Hashtbl=require("./hashtbl.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var wait_read=function(fd){return CamlPrimitive["thread_wait_read"](fd);};

var wait_write=function(fd){return CamlPrimitive["thread_wait_write"](fd);};

var select_aux=function(arg){return CamlPrimitive["thread_select"](arg);};

var wait_pid_aux=function(pid){return CamlPrimitive["thread_wait_pid"](pid);};

var delay=function(duration){return CamlPrimitive["thread_delay"](duration);};

CamlPrimitive["thread_initialize"](/* () */0);
var Unix_error=CamlPrimitive["caml_set_oo_id"]([248,"Unix.Unix_error",0]);

Callback["register_exception"]
 ("Unix.Unix_error",[0,Unix_error,/* E2BIG */0,"",""]);
var
 handle_unix_error=
  function(f,arg)
   {try
     {return f(arg);}
    catch(exn)
     {if(exn[1]===Unix_error)
       {var arg$1=exn[4];
        
        Pervasives["prerr_string"](Sys["argv"][1]);
        Pervasives["prerr_string"](': "');
        Pervasives["prerr_string"](exn[3]);
        Pervasives["prerr_string"]('" failed');
        if(arg$1["length"]>0)
         {Pervasives["prerr_string"](' on "'),
          Pervasives["prerr_string"](arg$1),
          Pervasives["prerr_string"]('"')}
        
        Pervasives["prerr_string"](": ");
        Pervasives["prerr_endline"]
         (CamlPrimitive["unix_error_message"](exn[2]));
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.read")
              :CamlPrimitive["unix_read"](fd,buf,ofs,len);
      }
    catch(exn)
     {var exit;
      
      if(exn[1]===Unix_error)
       {var match=exn[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=161;}else{exit$1=162;}}
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.write")
              :CamlPrimitive["unix_write"](fd,buf,ofs,len);
      }
    catch(exn)
     {var exit;
      
      if(exn[1]===Unix_error)
       {var match=exn[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=159;}else{exit$1=160;}}
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.single_write")
              :CamlPrimitive["unix_single_write"](fd,buf,ofs,len);
      }
    catch(exn)
     {var exit;
      
      if(exn[1]===Unix_error)
       {var match=exn[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=157;}else{exit$1=158;}}
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
   {var fd_pair=CamlPrimitive["unix_pipe"](/* () */0);
    
    CamlPrimitive["unix_set_nonblock"](fd_pair[2]);
    CamlPrimitive["unix_set_nonblock"](fd_pair[1]);
    return fd_pair;
    };

var
 select=
  function(readfds,writefds,exceptfds,delay)
   {var match=select_aux(/* tuple */[0,readfds,writefds,exceptfds,delay]);
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:return /* tuple */[0,match[1],match[2],match[3]];
        default:exit=151;}}
    
    switch(exit)
     {case 151:return [/* tuple */0,/* [] */0,/* [] */0,/* [] */0];}
    };

var
 safe_clear_nonblock=
  function(fd)
   {try
     {return CamlPrimitive["unix_clear_nonblock"](fd);}
    catch(exn){if(exn[1]===Unix_error){return /* () */0;}else{throw exn;}}
    };

var
 safe_set_nonblock=
  function(fd)
   {try
     {return CamlPrimitive["unix_set_nonblock"](fd);}
    catch(exn){if(exn[1]===Unix_error){return /* () */0;}else{throw exn;}}
    };

var
 do_exec=
  function(fn)
   {var oldtimer=CamlPrimitive["unix_setitimer"](/* ITIMER_VIRTUAL */1,[0,0]);
    
    safe_clear_nonblock(stdin);
    safe_clear_nonblock(stdout);
    safe_clear_nonblock(stderr);
    try
     {return fn(/* () */0);}
    catch(exn)
     {if(exn[1]===Unix_error)
       {CamlPrimitive["unix_setitimer"](/* ITIMER_VIRTUAL */1,oldtimer);
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
   {return do_exec
            (function(param){return CamlPrimitive["unix_execv"](proc,args);});
    };

var
 execve=
  function(proc,args,env)
   {return do_exec
            (function(param)
              {return CamlPrimitive["unix_execve"](proc,args,env);});
    };

var
 execvp=
  function(proc,args)
   {return do_exec
            (function(param){return CamlPrimitive["unix_execvp"](proc,args);});
    };

var
 execvpe=
  function(proc,args)
   {return do_exec
            (function(param)
              {return function(prim,prim$1,prim$2)
                        {return CamlPrimitive["unix_execvpe"](prim,prim$1,prim$2);}
                       (proc,args);
               });
    };

var
 wait_pid=
  function(pid)
   {var match=wait_pid_aux(pid);
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return /* tuple */[0,match[1],match[2]];default:exit=138;}}
    
    switch(exit)
     {case 138:return Pervasives["invalid_arg"]("Thread.wait_pid");}
    };

var wait=function(param){return wait_pid(-1);};

var
 waitpid=
  function(flags,pid)
   {return List["mem"](/* WNOHANG */0,flags)
            ?CamlPrimitive["unix_waitpid"](flags,pid)
            :wait_pid(pid);
    };

var
 pause=
  function(param)
   {var sigs=CamlPrimitive["unix_sigprocmask"](/* SIG_BLOCK */1,/* [] */0);
    
    return CamlPrimitive["unix_sigsuspend"](sigs);
    };

var sleep=function(secs){return delay(secs);};

var inet_addr_any=CamlPrimitive["unix_inet_addr_of_string"]("0.0.0.0");

var inet_addr_loopback=CamlPrimitive["unix_inet_addr_of_string"]("127.0.0.1");

var inet6_addr_any;
try
 {inet6_addr_any=CamlPrimitive["unix_inet_addr_of_string"]("::");}
catch(exn)
 {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
   {inet6_addr_any=inet_addr_any;}
  else
   {throw exn;}
  }

var inet6_addr_loopback;
try
 {inet6_addr_loopback=CamlPrimitive["unix_inet_addr_of_string"]("::1");}
catch(exn$1)
 {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Failure"])
   {inet6_addr_loopback=inet_addr_loopback;}
  else
   {throw exn$1;}
  }

var is_inet6_addr=function(s){return s["length"]===16;};

var
 domain_of_sockaddr=
  function(param)
   {switch(param[0])
     {case 0:return /* PF_UNIX */0;
      case 1:return is_inet6_addr(param[1])?/* PF_INET6 */2:/* PF_INET */1;
      }
    };

var
 socket=
  function(dom,typ,proto)
   {var s=CamlPrimitive["unix_socket"](dom,typ,proto);
    
    CamlPrimitive["unix_set_nonblock"](s);
    return s;
    };

var
 socketpair=
  function(dom,typ,proto)
   {var spair=CamlPrimitive["unix_socketpair"](dom,typ,proto);
    
    CamlPrimitive["unix_set_nonblock"](spair[1]);
    CamlPrimitive["unix_set_nonblock"](spair[2]);
    return spair;
    };

var
 accept=
  function(req)
   {wait_read(req);
    try
     {var result=CamlPrimitive["unix_accept"](req);
      
      CamlPrimitive["unix_set_nonblock"](result[1]);
      return result;
      }
    catch(exn$2)
     {var exit;
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=118;}else{exit$1=119;}}
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
     {return CamlPrimitive["unix_connect"](s,addr);}
    catch(exn$2)
     {var exit;
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match>=37)
           {if(match>=39){exit=115;}else{exit$1=116;}}
          else
           {if(match!==2){exit=115;}else{exit$1=116;}}
          }
        else
         {exit=115;}
        
        switch(exit$1)
         {case 116:wait_write(s);return CamlPrimitive["unix_getpeername"](s);}
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.recv")
              :CamlPrimitive["unix_recv"](fd,buf,ofs,len,flags);
      }
    catch(exn$2)
     {var exit;
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=113;}else{exit$1=114;}}
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.recvfrom")
              :CamlPrimitive["unix_recvfrom"](fd,buf,ofs,len,flags);
      }
    catch(exn$2)
     {var exit;
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=111;}else{exit$1=112;}}
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.send")
              :CamlPrimitive["unix_send"](fd,buf,ofs,len,flags);
      }
    catch(exn$2)
     {var exit;
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=109;}else{exit$1=110;}}
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
     {return ofs<0||len<0||ofs>buf["length"]-len
              ?Pervasives["invalid_arg"]("Unix.sendto")
              :CamlPrimitive["unix_sendto"](fd,buf,ofs,len,flags,addr);
      }
    catch(exn$2)
     {var exit;
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        var exit$1;
        
        if(typeof match==="number")
         {if(match!==2)
           {if(match!==37){exit=107;}else{exit$1=108;}}
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
   function(prim,prim$1,prim$2)
    {return CamlPrimitive["unix_getsockopt"](prim,prim$1,prim$2);},
   function(prim,prim$1,prim$2,prim$3)
    {return CamlPrimitive["unix_setsockopt"](prim,prim$1,prim$2,prim$3);}];

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
        
        if(typeof param==="number")
         {switch(param){case 2:return opt_passive[1]=/* true */1,0;}}
        else
         {switch(param[0])
           {case 1:return opt_socktype[1]=/* Some */[0,param[1]],0;
            case 2:return opt_protocol[1]=param[1],0;
            default:exit=86;}}
        
        switch(exit){case 86:return /* () */0;}
        },
      opts);
    var
     get_port=
      function(ty,kind)
       {if(CamlPrimitive["caml_string_equal"](service,""))
         {return /* :: */[0,/* tuple */[0,ty,0],/* [] */0];}
        else
         {try
           {return /* :: */[0,
                    /* tuple */[0,
                     ty,
                     CamlPrimitive["caml_int_of_string"](service)],
                    /* [] */0];
            }
          catch(exn$2)
           {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Failure"])
             {try
               {return /* :: */[0,
                        /* tuple */[0,
                         ty,
                         CamlPrimitive["unix_getservbyname"](service,kind)[3]],
                        /* [] */0];
                }
              catch(exn$3)
               {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
                 {return /* [] */0;}
                else
                 {throw exn$3;}
                }
              }
            else
             {throw exn$2;}
            }
          }
        };
    
    var match=opt_socktype[1];
    
    var ports;
    if(match)
     {var ty=match[1];
      
      ports=
      ty!==1
       ?ty!==0
         ?CamlPrimitive["caml_string_equal"](service,"")
           ?/* :: */[0,/* tuple */[0,ty,0],/* [] */0]
           :/* [] */0
         :get_port(/* SOCK_STREAM */0,"tcp")
       :get_port(/* SOCK_DGRAM */1,"udp");
      }
    else
     {ports=
      Pervasives["@"]
       (get_port(/* SOCK_STREAM */0,"tcp"),get_port(/* SOCK_DGRAM */1,"udp"));
      }
    
    var addresses;
    if(CamlPrimitive["caml_string_equal"](node,""))
     {addresses=
      List["mem"](/* AI_PASSIVE */2,opts)
       ?/* :: */[0,/* tuple */[0,inet_addr_any,"0.0.0.0"],/* [] */0]
       :/* :: */[0,/* tuple */[0,inet_addr_loopback,"127.0.0.1"],/* [] */0];
      }
    else
     {try
       {addresses=
        /* :: */[0,
         /* tuple */[0,CamlPrimitive["unix_inet_addr_of_string"](node),node],
         /* [] */0];
        }
      catch(exn$2)
       {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {try
           {var he=CamlPrimitive["unix_gethostbyname"](node);
            
            addresses=
            List["map"]
             (function(a){return /* tuple */[0,a,he[1]];},
              $$Array["to_list"](he[4]));
            }
          catch(exn$3)
           {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
             {addresses=/* [] */0;}
            else
             {throw exn$3;}
            }
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
                           {return /* record */[0,
                                    /* PF_INET */1,
                                    ty$1,
                                    opt_protocol[1],
                                    /* ADDR_INET */[1,param$1[1],port],
                                    param$1[2]];
                            },
                          addresses);
                 },
               ports));
    };

var
 getaddrinfo=
  function(node,service,opts)
   {try
     {return List["rev"](CamlPrimitive["unix_getaddrinfo"](node,service,opts));
      }
    catch(exn$2)
     {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Invalid_argument"])
       {return getaddrinfo_emulation(node,service,opts);}
      else
       {throw exn$2;}
      }
    };

var
 getnameinfo_emulation=
  function(addr,opts)
   {switch(addr[0])
     {case 0:return /* record */[0,"",addr[1]];
      case 1:
       var p=addr[2];
       
       var a=addr[1];
       
       var hostname;
       try
        {if(List["mem"](/* NI_NUMERICHOST */1,opts))
          {throw CamlPrimitive["caml_global_data"]["Not_found"];}
         else
          {}
         
         hostname=CamlPrimitive["unix_gethostbyaddr"](a)[1];
         }
       catch(exn$2)
        {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
          {if(List["mem"](/* NI_NAMEREQD */2,opts))
            {throw CamlPrimitive["caml_global_data"]["Not_found"];}
           else
            {}
           
           hostname=CamlPrimitive["unix_string_of_inet_addr"](a);
           }
         else
          {throw exn$2;}
         }
       
       var service;
       try
        {if(List["mem"](/* NI_NUMERICSERV */3,opts))
          {throw CamlPrimitive["caml_global_data"]["Not_found"];}
         else
          {}
         
         var kind=List["mem"](/* NI_DGRAM */4,opts)?"udp":"tcp";
         
         service=CamlPrimitive["unix_getservbyport"](p,kind)[1];
         }
       catch(exn$3)
        {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
          {service=Pervasives["string_of_int"](p);}
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
     {return CamlPrimitive["unix_getnameinfo"](addr,opts);}
    catch(exn$2)
     {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Invalid_argument"])
       {return getnameinfo_emulation(addr,opts);}
      else
       {throw exn$2;}
      }
    };

var
 system=
  function(cmd)
   {var id=CamlPrimitive["unix_fork"](/* () */0);
    
    if(id!==0)
     {return waitpid(/* [] */0,id)[2];}
    else
     {try
       {return execv("/bin/sh",[/* array */0,"/bin/sh","-c",cmd]);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 safe_dup=
  function(fd)
   {var new_fd=CamlPrimitive["unix_dup"](fd);
    
    if(new_fd>=3)
     {return new_fd;}
    else
     {var res=safe_dup(fd);CamlPrimitive["unix_close"](new_fd);return res;}
    };

var
 safe_close=
  function(fd)
   {try
     {return CamlPrimitive["unix_close"](fd);}
    catch(exn$2)
     {if(exn$2[1]===Unix_error){return /* () */0;}else{throw exn$2;}}
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
    CamlPrimitive["unix_dup2"](newnewstdin,stdin);
    CamlPrimitive["unix_close"](newnewstdin);
    CamlPrimitive["unix_dup2"](newnewstdout,stdout);
    CamlPrimitive["unix_close"](newnewstdout);
    CamlPrimitive["unix_dup2"](newnewstderr,stderr);
    return CamlPrimitive["unix_close"](newnewstderr);
    };

var
 create_process=
  function(cmd,args,new_stdin,new_stdout,new_stderr)
   {var id=CamlPrimitive["unix_fork"](/* () */0);
    
    if(id!==0)
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
   {var id=CamlPrimitive["unix_fork"](/* () */0);
    
    if(id!==0)
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
   {var id=CamlPrimitive["unix_fork"](/* () */0);
    
    if(id!==0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {if(input!==stdin)
       {CamlPrimitive["unix_dup2"](input,stdin),
        CamlPrimitive["unix_close"](input)}
      
      if(output!==stdout)
       {CamlPrimitive["unix_dup2"](output,stdout),
        CamlPrimitive["unix_close"](output)}
      
      List["iter"]
       (function(prim){return CamlPrimitive["unix_close"](prim);},toclose);
      try
       {return execv("/bin/sh",[/* array */0,"/bin/sh","-c",cmd]);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_in=
  function(cmd)
   {var match=pipe(/* () */0);
    
    var in_write=match[2];
    
    var in_read=match[1];
    
    var inchan=CamlPrimitive["caml_ml_open_descriptor_in"](in_read);
    
    open_proc
     (cmd,
      /* Process_in */[1,inchan],
      stdin,
      in_write,
      /* :: */[0,in_read,/* [] */0]);
    CamlPrimitive["unix_close"](in_write);
    return inchan;
    };

var
 open_process_out=
  function(cmd)
   {var match=pipe(/* () */0);
    
    var out_write=match[2];
    
    var out_read=match[1];
    
    var outchan=CamlPrimitive["caml_ml_open_descriptor_out"](out_write);
    
    open_proc
     (cmd,
      /* Process_out */[2,outchan],
      out_read,
      stdout,
      /* :: */[0,out_write,/* [] */0]);
    CamlPrimitive["unix_close"](out_read);
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
    
    var inchan=CamlPrimitive["caml_ml_open_descriptor_in"](in_read);
    
    var outchan=CamlPrimitive["caml_ml_open_descriptor_out"](out_write);
    
    open_proc
     (cmd,
      /* Process */[0,inchan,outchan],
      out_read,
      in_write,
      /* :: */[0,in_read,/* :: */[0,out_write,/* [] */0]]);
    CamlPrimitive["unix_close"](out_read);
    CamlPrimitive["unix_close"](in_write);
    return /* tuple */[0,inchan,outchan];
    };

var
 open_proc_full=
  function(cmd,env,proc,input,output,error,toclose)
   {var id=CamlPrimitive["unix_fork"](/* () */0);
    
    if(id!==0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {CamlPrimitive["unix_dup2"](input,stdin);
      CamlPrimitive["unix_close"](input);
      CamlPrimitive["unix_dup2"](output,stdout);
      CamlPrimitive["unix_close"](output);
      CamlPrimitive["unix_dup2"](error,stderr);
      CamlPrimitive["unix_close"](error);
      List["iter"]
       (function(prim){return CamlPrimitive["unix_close"](prim);},toclose);
      try
       {return execve("/bin/sh",[/* array */0,"/bin/sh","-c",cmd],env);}
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
    
    var inchan=CamlPrimitive["caml_ml_open_descriptor_in"](in_read);
    
    var outchan=CamlPrimitive["caml_ml_open_descriptor_out"](out_write);
    
    var errchan=CamlPrimitive["caml_ml_open_descriptor_in"](err_read);
    
    open_proc_full
     (cmd,
      env,
      /* Process_full */[3,inchan,outchan,errchan],
      out_read,
      in_write,
      err_write,
      /* :: */[0,in_read,/* :: */[0,out_write,/* :: */[0,err_read,/* [] */0]]]);
    CamlPrimitive["unix_close"](out_read);
    CamlPrimitive["unix_close"](in_write);
    CamlPrimitive["unix_close"](err_write);
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
     {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
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
      
      if(exn$2[1]===Unix_error)
       {var match=exn$2[2];
        
        if(typeof match==="number")
         {if(match!==11){exit=21;}else{return waitpid_non_intr(pid);}}
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
    catch(exn$2)
     {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {}
      else
       {throw exn$2;}
      }
    
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
    catch(exn$2)
     {if(exn$2[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {}
      else
       {throw exn$2;}
      }
    
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
              CamlPrimitive["caml_ml_open_descriptor_in"](sock),
              CamlPrimitive["caml_ml_open_descriptor_out"](sock)];
      }
    catch(exn$2){CamlPrimitive["unix_close"](sock);throw exn$2;}
    };

var
 shutdown_connection=
  function(inchan)
   {return CamlPrimitive["unix_shutdown"]
            (CamlPrimitive["caml_channel_descriptor"](inchan),
             /* SHUTDOWN_SEND */1);
    };

var
 establish_server=
  function(server_fun,sockaddr)
   {var sock=socket(domain_of_sockaddr(sockaddr),/* SOCK_STREAM */0,0);
    
    setsockopt(sock,/* SO_REUSEADDR */2,/* true */1);
    CamlPrimitive["unix_bind"](sock,sockaddr);
    CamlPrimitive["unix_listen"](sock,5);
    while(/* true */1)
     {var match=accept(sock);
      
      var s=match[1];
      
      var id=CamlPrimitive["unix_fork"](/* () */0);
      
      if(id!==0)
       {CamlPrimitive["unix_close"](s),waitpid(/* [] */0,id)}
      else
       {if(CamlPrimitive["unix_fork"](/* () */0)!==0){Pervasives["exit"](0)}
        
        var inchan=CamlPrimitive["caml_ml_open_descriptor_in"](s);
        
        var outchan=CamlPrimitive["caml_ml_open_descriptor_out"](s);
        
        server_fun(inchan,outchan),
        Pervasives["close_out"](outchan),
        Pervasives["exit"](0)}
      }
    return 0;
    };

module["exports"]=
{"Unix_error":Unix_error,
 "error_message":
 function(prim){return CamlPrimitive["unix_error_message"](prim);},
 "handle_unix_error":handle_unix_error,
 "environment":function(prim){return CamlPrimitive["unix_environment"](prim);},
 "getenv":function(prim){return CamlPrimitive["caml_sys_getenv"](prim);},
 "putenv":
 function(prim,prim$1){return CamlPrimitive["unix_putenv"](prim,prim$1);},
 "execv":execv,
 "execve":execve,
 "execvp":execvp,
 "execvpe":execvpe,
 "fork":function(prim){return CamlPrimitive["unix_fork"](prim);},
 "wait":wait,
 "waitpid":waitpid,
 "system":system,
 "getpid":function(prim){return CamlPrimitive["unix_getpid"](prim);},
 "getppid":function(prim){return CamlPrimitive["unix_getppid"](prim);},
 "nice":function(prim){return CamlPrimitive["unix_nice"](prim);},
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "openfile":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_open"](prim,prim$1,prim$2);},
 "close":function(prim){return CamlPrimitive["unix_close"](prim);},
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "in_channel_of_descr":
 function(prim){return CamlPrimitive["caml_ml_open_descriptor_in"](prim);},
 "out_channel_of_descr":
 function(prim){return CamlPrimitive["caml_ml_open_descriptor_out"](prim);},
 "descr_of_in_channel":
 function(prim){return CamlPrimitive["caml_channel_descriptor"](prim);},
 "descr_of_out_channel":
 function(prim){return CamlPrimitive["caml_channel_descriptor"](prim);},
 "lseek":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_lseek"](prim,prim$1,prim$2);},
 "truncate":
 function(prim,prim$1){return CamlPrimitive["unix_truncate"](prim,prim$1);},
 "ftruncate":
 function(prim,prim$1){return CamlPrimitive["unix_ftruncate"](prim,prim$1);},
 "stat":function(prim){return CamlPrimitive["unix_stat"](prim);},
 "lstat":function(prim){return CamlPrimitive["unix_lstat"](prim);},
 "fstat":function(prim){return CamlPrimitive["unix_fstat"](prim);},
 "isatty":function(prim){return CamlPrimitive["unix_isatty"](prim);},
 "LargeFile":
 [0,
  function(prim,prim$1,prim$2)
   {return CamlPrimitive["unix_lseek_64"](prim,prim$1,prim$2);},
  function(prim,prim$1)
   {return CamlPrimitive["unix_truncate_64"](prim,prim$1);},
  function(prim,prim$1)
   {return CamlPrimitive["unix_ftruncate_64"](prim,prim$1);},
  function(prim){return CamlPrimitive["unix_stat_64"](prim);},
  function(prim){return CamlPrimitive["unix_lstat_64"](prim);},
  function(prim){return CamlPrimitive["unix_fstat_64"](prim);}],
 "unlink":function(prim){return CamlPrimitive["unix_unlink"](prim);},
 "rename":
 function(prim,prim$1){return CamlPrimitive["unix_rename"](prim,prim$1);},
 "link":function(prim,prim$1){return CamlPrimitive["unix_link"](prim,prim$1);},
 "chmod":
 function(prim,prim$1){return CamlPrimitive["unix_chmod"](prim,prim$1);},
 "fchmod":
 function(prim,prim$1){return CamlPrimitive["unix_fchmod"](prim,prim$1);},
 "chown":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_chown"](prim,prim$1,prim$2);},
 "fchown":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_fchown"](prim,prim$1,prim$2);},
 "umask":function(prim){return CamlPrimitive["unix_umask"](prim);},
 "access":
 function(prim,prim$1){return CamlPrimitive["unix_access"](prim,prim$1);},
 "dup":function(prim){return CamlPrimitive["unix_dup"](prim);},
 "dup2":function(prim,prim$1){return CamlPrimitive["unix_dup2"](prim,prim$1);},
 "set_nonblock":
 function(prim){return CamlPrimitive["unix_set_nonblock"](prim);},
 "clear_nonblock":
 function(prim){return CamlPrimitive["unix_clear_nonblock"](prim);},
 "set_close_on_exec":
 function(prim){return CamlPrimitive["unix_set_close_on_exec"](prim);},
 "clear_close_on_exec":
 function(prim){return CamlPrimitive["unix_clear_close_on_exec"](prim);},
 "mkdir":
 function(prim,prim$1){return CamlPrimitive["unix_mkdir"](prim,prim$1);},
 "rmdir":function(prim){return CamlPrimitive["unix_rmdir"](prim);},
 "chdir":function(prim){return CamlPrimitive["unix_chdir"](prim);},
 "getcwd":function(prim){return CamlPrimitive["unix_getcwd"](prim);},
 "chroot":function(prim){return CamlPrimitive["unix_chroot"](prim);},
 "opendir":function(prim){return CamlPrimitive["unix_opendir"](prim);},
 "readdir":function(prim){return CamlPrimitive["unix_readdir"](prim);},
 "rewinddir":function(prim){return CamlPrimitive["unix_rewinddir"](prim);},
 "closedir":function(prim){return CamlPrimitive["unix_closedir"](prim);},
 "pipe":pipe,
 "mkfifo":
 function(prim,prim$1){return CamlPrimitive["unix_mkfifo"](prim,prim$1);},
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
 "symlink":
 function(prim,prim$1){return CamlPrimitive["unix_symlink"](prim,prim$1);},
 "readlink":function(prim){return CamlPrimitive["unix_readlink"](prim);},
 "select":select,
 "lockf":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_lockf"](prim,prim$1,prim$2);},
 "kill":function(prim,prim$1){return CamlPrimitive["unix_kill"](prim,prim$1);},
 "sigprocmask":
 function(prim,prim$1){return CamlPrimitive["unix_sigprocmask"](prim,prim$1);},
 "sigpending":function(prim){return CamlPrimitive["unix_sigpending"](prim);},
 "sigsuspend":function(prim){return CamlPrimitive["unix_sigsuspend"](prim);},
 "pause":pause,
 "time":function(prim){return CamlPrimitive["unix_time"](prim);},
 "gettimeofday":
 function(prim){return CamlPrimitive["unix_gettimeofday"](prim);},
 "gmtime":function(prim){return CamlPrimitive["unix_gmtime"](prim);},
 "localtime":function(prim){return CamlPrimitive["unix_localtime"](prim);},
 "mktime":function(prim){return CamlPrimitive["unix_mktime"](prim);},
 "alarm":function(prim){return CamlPrimitive["unix_alarm"](prim);},
 "sleep":sleep,
 "times":function(prim){return CamlPrimitive["unix_times"](prim);},
 "utimes":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_utimes"](prim,prim$1,prim$2);},
 "getitimer":function(prim){return CamlPrimitive["unix_getitimer"](prim);},
 "setitimer":
 function(prim,prim$1){return CamlPrimitive["unix_setitimer"](prim,prim$1);},
 "getuid":function(prim){return CamlPrimitive["unix_getuid"](prim);},
 "geteuid":function(prim){return CamlPrimitive["unix_geteuid"](prim);},
 "setuid":function(prim){return CamlPrimitive["unix_setuid"](prim);},
 "getgid":function(prim){return CamlPrimitive["unix_getgid"](prim);},
 "getegid":function(prim){return CamlPrimitive["unix_getegid"](prim);},
 "setgid":function(prim){return CamlPrimitive["unix_setgid"](prim);},
 "getgroups":function(prim){return CamlPrimitive["unix_getgroups"](prim);},
 "setgroups":function(prim){return CamlPrimitive["unix_setgroups"](prim);},
 "initgroups":
 function(prim,prim$1){return CamlPrimitive["unix_initgroups"](prim,prim$1);},
 "getlogin":function(prim){return CamlPrimitive["unix_getlogin"](prim);},
 "getpwnam":function(prim){return CamlPrimitive["unix_getpwnam"](prim);},
 "getgrnam":function(prim){return CamlPrimitive["unix_getgrnam"](prim);},
 "getpwuid":function(prim){return CamlPrimitive["unix_getpwuid"](prim);},
 "getgrgid":function(prim){return CamlPrimitive["unix_getgrgid"](prim);},
 "inet_addr_of_string":
 function(prim){return CamlPrimitive["unix_inet_addr_of_string"](prim);},
 "string_of_inet_addr":
 function(prim){return CamlPrimitive["unix_string_of_inet_addr"](prim);},
 "inet_addr_any":inet_addr_any,
 "inet_addr_loopback":inet_addr_loopback,
 "inet6_addr_any":inet6_addr_any,
 "inet6_addr_loopback":inet6_addr_loopback,
 "socket":socket,
 "domain_of_sockaddr":domain_of_sockaddr,
 "socketpair":socketpair,
 "accept":accept,
 "bind":function(prim,prim$1){return CamlPrimitive["unix_bind"](prim,prim$1);},
 "connect":connect,
 "listen":
 function(prim,prim$1){return CamlPrimitive["unix_listen"](prim,prim$1);},
 "shutdown":
 function(prim,prim$1){return CamlPrimitive["unix_shutdown"](prim,prim$1);},
 "getsockname":function(prim){return CamlPrimitive["unix_getsockname"](prim);},
 "getpeername":function(prim){return CamlPrimitive["unix_getpeername"](prim);},
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
 "gethostname":function(prim){return CamlPrimitive["unix_gethostname"](prim);},
 "gethostbyname":
 function(prim){return CamlPrimitive["unix_gethostbyname"](prim);},
 "gethostbyaddr":
 function(prim){return CamlPrimitive["unix_gethostbyaddr"](prim);},
 "getprotobyname":
 function(prim){return CamlPrimitive["unix_getprotobyname"](prim);},
 "getprotobynumber":
 function(prim){return CamlPrimitive["unix_getprotobynumber"](prim);},
 "getservbyname":
 function(prim,prim$1)
  {return CamlPrimitive["unix_getservbyname"](prim,prim$1);},
 "getservbyport":
 function(prim,prim$1)
  {return CamlPrimitive["unix_getservbyport"](prim,prim$1);},
 "getaddrinfo":getaddrinfo,
 "getnameinfo":getnameinfo,
 "tcgetattr":function(prim){return CamlPrimitive["unix_tcgetattr"](prim);},
 "tcsetattr":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["unix_tcsetattr"](prim,prim$1,prim$2);},
 "tcsendbreak":
 function(prim,prim$1){return CamlPrimitive["unix_tcsendbreak"](prim,prim$1);},
 "tcdrain":function(prim){return CamlPrimitive["unix_tcdrain"](prim);},
 "tcflush":
 function(prim,prim$1){return CamlPrimitive["unix_tcflush"](prim,prim$1);},
 "tcflow":
 function(prim,prim$1){return CamlPrimitive["unix_tcflow"](prim,prim$1);},
 "setsid":function(prim){return CamlPrimitive["unix_setsid"](prim);}};

