var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Callback=require("Callback");
var Bytes=require("Bytes");
var Printexc=require("Printexc");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");
var Sys=require("Sys");

var Unix_error="unknown primitive:caml_set_oo_id";

Callback["register_exception"]("Unix.Unix_error",[0,Unix_error,0,"",""]);
var
 match=
  Printexc["register_printer"]
   (function(param)
     {var tag=param[1];
      
      if(tag=Unix_error)
       {var s$prime=param[4];
        
        var s=param[3];
        
        var e=param[2];
        
        if("unknown primitive:isint")
         {switch(e[0])
           {case 0:var msg="E2BIG";
            case 1:var msg="EACCES";
            case 2:var msg="EAGAIN";
            case 3:var msg="EBADF";
            case 4:var msg="EBUSY";
            case 5:var msg="ECHILD";
            case 6:var msg="EDEADLK";
            case 7:var msg="EDOM";
            case 8:var msg="EEXIST";
            case 9:var msg="EFAULT";
            case 10:var msg="EFBIG";
            case 11:var msg="EINTR";
            case 12:var msg="EINVAL";
            case 13:var msg="EIO";
            case 14:var msg="EISDIR";
            case 15:var msg="EMFILE";
            case 16:var msg="EMLINK";
            case 17:var msg="ENAMETOOLONG";
            case 18:var msg="ENFILE";
            case 19:var msg="ENODEV";
            case 20:var msg="ENOENT";
            case 21:var msg="ENOEXEC";
            case 22:var msg="ENOLCK";
            case 23:var msg="ENOMEM";
            case 24:var msg="ENOSPC";
            case 25:var msg="ENOSYS";
            case 26:var msg="ENOTDIR";
            case 27:var msg="ENOTEMPTY";
            case 28:var msg="ENOTTY";
            case 29:var msg="ENXIO";
            case 30:var msg="EPERM";
            case 31:var msg="EPIPE";
            case 32:var msg="ERANGE";
            case 33:var msg="EROFS";
            case 34:var msg="ESPIPE";
            case 35:var msg="ESRCH";
            case 36:var msg="EXDEV";
            case 37:var msg="EWOULDBLOCK";
            case 38:var msg="EINPROGRESS";
            case 39:var msg="EALREADY";
            case 40:var msg="ENOTSOCK";
            case 41:var msg="EDESTADDRREQ";
            case 42:var msg="EMSGSIZE";
            case 43:var msg="EPROTOTYPE";
            case 44:var msg="ENOPROTOOPT";
            case 45:var msg="EPROTONOSUPPORT";
            case 46:var msg="ESOCKTNOSUPPORT";
            case 47:var msg="EOPNOTSUPP";
            case 48:var msg="EPFNOSUPPORT";
            case 49:var msg="EAFNOSUPPORT";
            case 50:var msg="EADDRINUSE";
            case 51:var msg="EADDRNOTAVAIL";
            case 52:var msg="ENETDOWN";
            case 53:var msg="ENETUNREACH";
            case 54:var msg="ENETRESET";
            case 55:var msg="ECONNABORTED";
            case 56:var msg="ECONNRESET";
            case 57:var msg="ENOBUFS";
            case 58:var msg="EISCONN";
            case 59:var msg="ENOTCONN";
            case 60:var msg="ESHUTDOWN";
            case 61:var msg="ETOOMANYREFS";
            case 62:var msg="ETIMEDOUT";
            case 63:var msg="ECONNREFUSED";
            case 64:var msg="EHOSTDOWN";
            case 65:var msg="EHOSTUNREACH";
            case 66:var msg="ELOOP";
            case 67:var msg="EOVERFLOW";
            }
          }
        else
         {var x=e[1];
          
          var
           msg=
            Printf["sprintf"]
             ([0,[11,"EUNKNOWNERR ",[4,0,0,0,0]],"EUNKNOWNERR %d"],x);
          }
        
        return [0,
                Printf["sprintf"]
                 ([0,
                   [11,
                    "Unix.Unix_error(Unix.",
                    [2,0,[11,", ",[3,0,[11,", ",[3,0,[12,41,0]]]]]]],
                   "Unix.Unix_error(Unix.%s, %S, %S)"],
                  msg,
                  s,
                  s$prime)];
        }
      else
       {return 0;}
      });

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
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.read");}
    else
     {return "unknown primitive:unix_read";}
    };

var
 write=
  function(fd,buf,ofs,len)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.write");}
    else
     {return "unknown primitive:unix_write";}
    };

var
 single_write=
  function(fd,buf,ofs,len)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.single_write");}
    else
     {return "unknown primitive:unix_single_write";}
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
 try_set_close_on_exec=
  function(fd)
   {try
     {"unknown primitive:unix_set_close_on_exec";return 1;}
    catch(exn)
     {var tag=exn[1];if(tag=Invalid_argument){return 0;}else{throw exn;}}
    };

var
 pause=
  function(param)
   {var sigs="unknown primitive:unix_sigprocmask";
    
    return "unknown primitive:unix_sigsuspend";
    };

var is_inet6_addr=function(s){return s["length"]=16;};

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

var
 domain_of_sockaddr=
  function(param)
   {switch(param)
     {case 0:return 0;
      case 1:var a=param[1];if(is_inet6_addr(a)){return 2;}else{return 1;}
      }
    };

var
 recv=
  function(fd,buf,ofs,len,flags)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.recv");}
    else
     {return "unknown primitive:unix_recv";}
    };

var
 recvfrom=
  function(fd,buf,ofs,len,flags)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.recvfrom");}
    else
     {return "unknown primitive:unix_recvfrom";}
    };

var
 send=
  function(fd,buf,ofs,len,flags)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.send");}
    else
     {return "unknown primitive:unix_send";}
    };

var
 sendto=
  function(fd,buf,ofs,len,flags,addr)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.sendto");}
    else
     {return "unknown primitive:unix_sendto";}
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
            default:var exit=95;}}
        
        switch(exit){case 95:return 0;}
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
    
    var match$1=opt_socktype[1];
    
    if(match$1)
     {var ty=match$1[1];
      
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
 waitpid_non_intr=
  function(pid)
   {try
     {return "unknown primitive:unix_waitpid";}
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match$1=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match$1!=11){var exit=75;}else{return waitpid_non_intr(pid);}}
        else
         {var exit=75;}
        }
      else
       {var exit=75;}
      
      switch(exit){case 75:throw exn$2;}
      }
    };

var
 system=
  function(cmd)
   {var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return waitpid_non_intr(id)[2];}
    else
     {try
       {return "unknown primitive:unix_execv";}
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
        return "unknown primitive:unix_execvp";
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
        return "unknown primitive:unix_execvpe";
        }
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var popen_processes=Hashtbl["create"](0,7);

var
 open_proc=
  function(cmd,proc,input,output,toclose)
   {var cloexec=List["for_all"](try_set_close_on_exec,toclose);
    
    var id="unknown primitive:unix_fork";
    
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
      
      if(!cloexec)
       {List["iter"]
         (function(prim){return "unknown primitive:unix_close";},toclose)}
      else
       {}
      
      try
       {return "unknown primitive:unix_execv";}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_in=
  function(cmd)
   {var match$1="unknown primitive:unix_pipe";
    
    var in_write=match$1[2];
    
    var in_read=match$1[1];
    
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    
    try
     {open_proc(cmd,[1,inchan],stdin,in_write,[0,in_read,0])}
    catch(e)
     {Pervasives["close_in"](inchan);"unknown primitive:unix_close";throw e;}
    
    "unknown primitive:unix_close";
    return inchan;
    };

var
 open_process_out=
  function(cmd)
   {var match$1="unknown primitive:unix_pipe";
    
    var out_write=match$1[2];
    
    var out_read=match$1[1];
    
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    
    try
     {open_proc(cmd,[2,outchan],out_read,stdout,[0,out_write,0])}
    catch(e)
     {Pervasives["close_out"](outchan);
      "unknown primitive:unix_close";
      throw e;
      }
    
    "unknown primitive:unix_close";
    return outchan;
    };

var
 open_process=
  function(cmd)
   {var match$1="unknown primitive:unix_pipe";
    
    var in_write=match$1[2];
    
    var in_read=match$1[1];
    
    var fds_to_close=[0,[0,in_read,[0,in_write,0]]];
    
    try
     {var match$2="unknown primitive:unix_pipe";
      
      var out_write=match$2[2];
      
      var out_read=match$2[1];
      
      fds_to_close[1]=[0,in_read,[0,in_write,[0,out_read,[0,out_write,0]]]],0;
      var inchan="unknown primitive:caml_ml_open_descriptor_in";
      
      var outchan="unknown primitive:caml_ml_open_descriptor_out";
      
      open_proc
       (cmd,[0,inchan,outchan],out_read,in_write,[0,in_read,[0,out_write,0]]);
      "unknown primitive:unix_close";
      "unknown primitive:unix_close";
      return [0,inchan,outchan];
      }
    catch(e)
     {List["iter"]
       (function(prim){return "unknown primitive:unix_close";},
        fds_to_close[1]);
      throw e;
      }
    };

var
 open_proc_full=
  function(cmd,env,proc,input,output,error$1,toclose)
   {var cloexec=List["for_all"](try_set_close_on_exec,toclose);
    
    var id="unknown primitive:unix_fork";
    
    if(id!=0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {"unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      if(!cloexec)
       {List["iter"]
         (function(prim){return "unknown primitive:unix_close";},toclose)}
      else
       {}
      
      try
       {return "unknown primitive:unix_execve";}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_full=
  function(cmd,env)
   {var match$1="unknown primitive:unix_pipe";
    
    var in_write=match$1[2];
    
    var in_read=match$1[1];
    
    var fds_to_close=[0,[0,in_read,[0,in_write,0]]];
    
    try
     {var match$2="unknown primitive:unix_pipe";
      
      var out_write=match$2[2];
      
      var out_read=match$2[1];
      
      fds_to_close[1]=[0,out_read,[0,out_write,fds_to_close[1]]],0;
      var match$3="unknown primitive:unix_pipe";
      
      var err_write=match$3[2];
      
      var err_read=match$3[1];
      
      fds_to_close[1]=[0,err_read,[0,err_write,fds_to_close[1]]],0;
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
      }
    catch(e)
     {List["iter"]
       (function(prim){return "unknown primitive:unix_close";},
        fds_to_close[1]);
      throw e;
      }
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
   {var sock="unknown primitive:unix_socket";
    
    try
     {"unknown primitive:unix_connect";
      
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
 accept_non_intr=
  function(s)
   {try
     {return "unknown primitive:unix_accept";}
    catch(exn$2)
     {var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match$1=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match$1!=11){var exit=7;}else{return accept_non_intr(s);}}
        else
         {var exit=7;}
        }
      else
       {var exit=7;}
      
      switch(exit){case 7:throw exn$2;}
      }
    };

var
 establish_server=
  function(server_fun,sockaddr)
   {var sock="unknown primitive:unix_socket";
    
    setsockopt(sock,2,1);
    "unknown primitive:unix_bind";
    "unknown primitive:unix_listen";
    while(1)
     {var match$1=accept_non_intr(sock);
      
      var s=match$1[1];
      
      var id="unknown primitive:unix_fork";
      
      if(id!=0)
       {"unknown primitive:unix_close",0}
      else
       {if("unknown primitive:unix_fork"!=0){Pervasives["exit"](0)}else{}
        
        "unknown primitive:unix_close";
        
        var inchan="unknown primitive:caml_ml_open_descriptor_in";
        
        var outchan="unknown primitive:caml_ml_open_descriptor_out";
        
        server_fun(inchan,outchan),Pervasives["exit"](0)}
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
 function(prim,prim$1){return "unknown primitive:unix_execv";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_execve";},
 function(prim,prim$1){return "unknown primitive:unix_execvp";},
 function(prim,prim$1,prim$2){return "unknown primitive:unix_execvpe";},
 function(prim){return "unknown primitive:unix_fork";},
 function(prim){return "unknown primitive:unix_wait";},
 function(prim,prim$1){return "unknown primitive:unix_waitpid";},
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
 function(prim){return "unknown primitive:unix_pipe";},
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
 function(prim,prim$1,prim$2,prim$3){return "unknown primitive:unix_select";},
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
 function(prim){return "unknown primitive:unix_sleep";},
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
 function(prim,prim$1,prim$2){return "unknown primitive:unix_socket";},
 domain_of_sockaddr,
 function(prim,prim$1,prim$2){return "unknown primitive:unix_socketpair";},
 function(prim){return "unknown primitive:unix_accept";},
 function(prim,prim$1){return "unknown primitive:unix_bind";},
 function(prim,prim$1){return "unknown primitive:unix_connect";},
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
 "unknown block:(function prim/1793 (unix_error_message prim/1793))":
 unknown block:(function prim/1793 (unix_error_message prim/1793)),
 "handle_unix_error":handle_unix_error,
 "unknown block:(function prim/1794 (unix_environment prim/1794))":
 unknown block:(function prim/1794 (unix_environment prim/1794)),
 "unknown block:(function prim/1795 (caml_sys_getenv prim/1795))":
 unknown block:(function prim/1795 (caml_sys_getenv prim/1795)),
 "unknown block:(function prim/1797 prim/1796 (unix_putenv prim/1797 prim/1796))":
 unknown block:(function prim/1797 prim/1796 (unix_putenv prim/1797 prim/1796)),
 "unknown block:(function prim/1799 prim/1798 (unix_execv prim/1799 prim/1798))":
 unknown block:(function prim/1799 prim/1798 (unix_execv prim/1799 prim/1798)),
 "unknown block:(function prim/1802 prim/1801 prim/1800\n  (unix_execve prim/1802 prim/1801 prim/1800))":
 unknown block:(function prim/1802 prim/1801 prim/1800
  (unix_execve prim/1802 prim/1801 prim/1800)),
 "unknown block:(function prim/1804 prim/1803 (unix_execvp prim/1804 prim/1803))":
 unknown block:(function prim/1804 prim/1803 (unix_execvp prim/1804 prim/1803)),
 "unknown block:(function prim/1807 prim/1806 prim/1805\n  (unix_execvpe prim/1807 prim/1806 prim/1805))":
 unknown block:(function prim/1807 prim/1806 prim/1805
  (unix_execvpe prim/1807 prim/1806 prim/1805)),
 "unknown block:(function prim/1808 (unix_fork prim/1808))":
 unknown block:(function prim/1808 (unix_fork prim/1808)),
 "unknown block:(function prim/1809 (unix_wait prim/1809))":
 unknown block:(function prim/1809 (unix_wait prim/1809)),
 "unknown block:(function prim/1811 prim/1810 (unix_waitpid prim/1811 prim/1810))":
 unknown block:(function prim/1811 prim/1810 (unix_waitpid prim/1811 prim/1810)),
 "system":system,
 "unknown block:(function prim/1812 (unix_getpid prim/1812))":
 unknown block:(function prim/1812 (unix_getpid prim/1812)),
 "unknown block:(function prim/1813 (unix_getppid prim/1813))":
 unknown block:(function prim/1813 (unix_getppid prim/1813)),
 "unknown block:(function prim/1814 (unix_nice prim/1814))":
 unknown block:(function prim/1814 (unix_nice prim/1814)),
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "unknown block:(function prim/1817 prim/1816 prim/1815\n  (unix_open prim/1817 prim/1816 prim/1815))":
 unknown block:(function prim/1817 prim/1816 prim/1815
  (unix_open prim/1817 prim/1816 prim/1815)),
 "unknown block:(function prim/1818 (unix_close prim/1818))":
 unknown block:(function prim/1818 (unix_close prim/1818)),
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "unknown block:(function prim/1819 (caml_ml_open_descriptor_in prim/1819))":
 unknown block:(function prim/1819 (caml_ml_open_descriptor_in prim/1819)),
 "unknown block:(function prim/1820 (caml_ml_open_descriptor_out prim/1820))":
 unknown block:(function prim/1820 (caml_ml_open_descriptor_out prim/1820)),
 "unknown block:(function prim/1821 (caml_channel_descriptor prim/1821))":
 unknown block:(function prim/1821 (caml_channel_descriptor prim/1821)),
 "unknown block:(function prim/1822 (caml_channel_descriptor prim/1822))":
 unknown block:(function prim/1822 (caml_channel_descriptor prim/1822)),
 "unknown block:(function prim/1825 prim/1824 prim/1823\n  (unix_lseek prim/1825 prim/1824 prim/1823))":
 unknown block:(function prim/1825 prim/1824 prim/1823
  (unix_lseek prim/1825 prim/1824 prim/1823)),
 "unknown block:(function prim/1827 prim/1826 (unix_truncate prim/1827 prim/1826))":
 unknown block:(function prim/1827 prim/1826 (unix_truncate prim/1827 prim/1826)),
 "unknown block:(function prim/1829 prim/1828 (unix_ftruncate prim/1829 prim/1828))":
 unknown block:(function prim/1829 prim/1828 (unix_ftruncate prim/1829 prim/1828)),
 "unknown block:(function prim/1830 (unix_stat prim/1830))":
 unknown block:(function prim/1830 (unix_stat prim/1830)),
 "unknown block:(function prim/1831 (unix_lstat prim/1831))":
 unknown block:(function prim/1831 (unix_lstat prim/1831)),
 "unknown block:(function prim/1832 (unix_fstat prim/1832))":
 unknown block:(function prim/1832 (unix_fstat prim/1832)),
 "unknown block:(function prim/1833 (unix_isatty prim/1833))":
 unknown block:(function prim/1833 (unix_isatty prim/1833)),
 "unknown block:(makeblock 0\n  (function prim/1836 prim/1835 prim/1834\n    (unix_lseek_64 prim/1836 prim/1835 prim/1834))\n  (function prim/1838 prim/1837 (unix_truncate_64 prim/1838 prim/1837))\n  (function prim/1840 prim/1839 (unix_ftruncate_64 prim/1840 prim/1839))\n  (function prim/1841 (unix_stat_64 prim/1841))\n  (function prim/1842 (unix_lstat_64 prim/1842))\n  (function prim/1843 (unix_fstat_64 prim/1843)))":
 unknown block:(makeblock 0
  (function prim/1836 prim/1835 prim/1834
    (unix_lseek_64 prim/1836 prim/1835 prim/1834))
  (function prim/1838 prim/1837 (unix_truncate_64 prim/1838 prim/1837))
  (function prim/1840 prim/1839 (unix_ftruncate_64 prim/1840 prim/1839))
  (function prim/1841 (unix_stat_64 prim/1841))
  (function prim/1842 (unix_lstat_64 prim/1842))
  (function prim/1843 (unix_fstat_64 prim/1843))),
 "unknown block:(function prim/1844 (unix_unlink prim/1844))":
 unknown block:(function prim/1844 (unix_unlink prim/1844)),
 "unknown block:(function prim/1846 prim/1845 (unix_rename prim/1846 prim/1845))":
 unknown block:(function prim/1846 prim/1845 (unix_rename prim/1846 prim/1845)),
 "unknown block:(function prim/1848 prim/1847 (unix_link prim/1848 prim/1847))":
 unknown block:(function prim/1848 prim/1847 (unix_link prim/1848 prim/1847)),
 "unknown block:(function prim/1850 prim/1849 (unix_chmod prim/1850 prim/1849))":
 unknown block:(function prim/1850 prim/1849 (unix_chmod prim/1850 prim/1849)),
 "unknown block:(function prim/1852 prim/1851 (unix_fchmod prim/1852 prim/1851))":
 unknown block:(function prim/1852 prim/1851 (unix_fchmod prim/1852 prim/1851)),
 "unknown block:(function prim/1855 prim/1854 prim/1853\n  (unix_chown prim/1855 prim/1854 prim/1853))":
 unknown block:(function prim/1855 prim/1854 prim/1853
  (unix_chown prim/1855 prim/1854 prim/1853)),
 "unknown block:(function prim/1858 prim/1857 prim/1856\n  (unix_fchown prim/1858 prim/1857 prim/1856))":
 unknown block:(function prim/1858 prim/1857 prim/1856
  (unix_fchown prim/1858 prim/1857 prim/1856)),
 "unknown block:(function prim/1859 (unix_umask prim/1859))":
 unknown block:(function prim/1859 (unix_umask prim/1859)),
 "unknown block:(function prim/1861 prim/1860 (unix_access prim/1861 prim/1860))":
 unknown block:(function prim/1861 prim/1860 (unix_access prim/1861 prim/1860)),
 "unknown block:(function prim/1862 (unix_dup prim/1862))":
 unknown block:(function prim/1862 (unix_dup prim/1862)),
 "unknown block:(function prim/1864 prim/1863 (unix_dup2 prim/1864 prim/1863))":
 unknown block:(function prim/1864 prim/1863 (unix_dup2 prim/1864 prim/1863)),
 "unknown block:(function prim/1865 (unix_set_nonblock prim/1865))":
 unknown block:(function prim/1865 (unix_set_nonblock prim/1865)),
 "unknown block:(function prim/1866 (unix_clear_nonblock prim/1866))":
 unknown block:(function prim/1866 (unix_clear_nonblock prim/1866)),
 "unknown block:(function prim/1867 (unix_set_close_on_exec prim/1867))":
 unknown block:(function prim/1867 (unix_set_close_on_exec prim/1867)),
 "unknown block:(function prim/1868 (unix_clear_close_on_exec prim/1868))":
 unknown block:(function prim/1868 (unix_clear_close_on_exec prim/1868)),
 "unknown block:(function prim/1870 prim/1869 (unix_mkdir prim/1870 prim/1869))":
 unknown block:(function prim/1870 prim/1869 (unix_mkdir prim/1870 prim/1869)),
 "unknown block:(function prim/1871 (unix_rmdir prim/1871))":
 unknown block:(function prim/1871 (unix_rmdir prim/1871)),
 "unknown block:(function prim/1872 (unix_chdir prim/1872))":
 unknown block:(function prim/1872 (unix_chdir prim/1872)),
 "unknown block:(function prim/1873 (unix_getcwd prim/1873))":
 unknown block:(function prim/1873 (unix_getcwd prim/1873)),
 "unknown block:(function prim/1874 (unix_chroot prim/1874))":
 unknown block:(function prim/1874 (unix_chroot prim/1874)),
 "unknown block:(function prim/1875 (unix_opendir prim/1875))":
 unknown block:(function prim/1875 (unix_opendir prim/1875)),
 "unknown block:(function prim/1876 (unix_readdir prim/1876))":
 unknown block:(function prim/1876 (unix_readdir prim/1876)),
 "unknown block:(function prim/1877 (unix_rewinddir prim/1877))":
 unknown block:(function prim/1877 (unix_rewinddir prim/1877)),
 "unknown block:(function prim/1878 (unix_closedir prim/1878))":
 unknown block:(function prim/1878 (unix_closedir prim/1878)),
 "unknown block:(function prim/1879 (unix_pipe prim/1879))":
 unknown block:(function prim/1879 (unix_pipe prim/1879)),
 "unknown block:(function prim/1881 prim/1880 (unix_mkfifo prim/1881 prim/1880))":
 unknown block:(function prim/1881 prim/1880 (unix_mkfifo prim/1881 prim/1880)),
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
 "unknown block:(function prim/1883 prim/1882 (unix_symlink prim/1883 prim/1882))":
 unknown block:(function prim/1883 prim/1882 (unix_symlink prim/1883 prim/1882)),
 "unknown block:(function prim/1884 (unix_readlink prim/1884))":
 unknown block:(function prim/1884 (unix_readlink prim/1884)),
 "unknown block:(function prim/1888 prim/1887 prim/1886 prim/1885\n  (unix_select prim/1888 prim/1887 prim/1886 prim/1885))":
 unknown block:(function prim/1888 prim/1887 prim/1886 prim/1885
  (unix_select prim/1888 prim/1887 prim/1886 prim/1885)),
 "unknown block:(function prim/1891 prim/1890 prim/1889\n  (unix_lockf prim/1891 prim/1890 prim/1889))":
 unknown block:(function prim/1891 prim/1890 prim/1889
  (unix_lockf prim/1891 prim/1890 prim/1889)),
 "unknown block:(function prim/1893 prim/1892 (unix_kill prim/1893 prim/1892))":
 unknown block:(function prim/1893 prim/1892 (unix_kill prim/1893 prim/1892)),
 "unknown block:(function prim/1895 prim/1894 (unix_sigprocmask prim/1895 prim/1894))":
 unknown block:(function prim/1895 prim/1894 (unix_sigprocmask prim/1895 prim/1894)),
 "unknown block:(function prim/1896 (unix_sigpending prim/1896))":
 unknown block:(function prim/1896 (unix_sigpending prim/1896)),
 "unknown block:(function prim/1897 (unix_sigsuspend prim/1897))":
 unknown block:(function prim/1897 (unix_sigsuspend prim/1897)),
 "pause":pause,
 "unknown block:(function prim/1898 (unix_time prim/1898))":
 unknown block:(function prim/1898 (unix_time prim/1898)),
 "unknown block:(function prim/1899 (unix_gettimeofday prim/1899))":
 unknown block:(function prim/1899 (unix_gettimeofday prim/1899)),
 "unknown block:(function prim/1900 (unix_gmtime prim/1900))":
 unknown block:(function prim/1900 (unix_gmtime prim/1900)),
 "unknown block:(function prim/1901 (unix_localtime prim/1901))":
 unknown block:(function prim/1901 (unix_localtime prim/1901)),
 "unknown block:(function prim/1902 (unix_mktime prim/1902))":
 unknown block:(function prim/1902 (unix_mktime prim/1902)),
 "unknown block:(function prim/1903 (unix_alarm prim/1903))":
 unknown block:(function prim/1903 (unix_alarm prim/1903)),
 "unknown block:(function prim/1904 (unix_sleep prim/1904))":
 unknown block:(function prim/1904 (unix_sleep prim/1904)),
 "unknown block:(function prim/1905 (unix_times prim/1905))":
 unknown block:(function prim/1905 (unix_times prim/1905)),
 "unknown block:(function prim/1908 prim/1907 prim/1906\n  (unix_utimes prim/1908 prim/1907 prim/1906))":
 unknown block:(function prim/1908 prim/1907 prim/1906
  (unix_utimes prim/1908 prim/1907 prim/1906)),
 "unknown block:(function prim/1909 (unix_getitimer prim/1909))":
 unknown block:(function prim/1909 (unix_getitimer prim/1909)),
 "unknown block:(function prim/1911 prim/1910 (unix_setitimer prim/1911 prim/1910))":
 unknown block:(function prim/1911 prim/1910 (unix_setitimer prim/1911 prim/1910)),
 "unknown block:(function prim/1912 (unix_getuid prim/1912))":
 unknown block:(function prim/1912 (unix_getuid prim/1912)),
 "unknown block:(function prim/1913 (unix_geteuid prim/1913))":
 unknown block:(function prim/1913 (unix_geteuid prim/1913)),
 "unknown block:(function prim/1914 (unix_setuid prim/1914))":
 unknown block:(function prim/1914 (unix_setuid prim/1914)),
 "unknown block:(function prim/1915 (unix_getgid prim/1915))":
 unknown block:(function prim/1915 (unix_getgid prim/1915)),
 "unknown block:(function prim/1916 (unix_getegid prim/1916))":
 unknown block:(function prim/1916 (unix_getegid prim/1916)),
 "unknown block:(function prim/1917 (unix_setgid prim/1917))":
 unknown block:(function prim/1917 (unix_setgid prim/1917)),
 "unknown block:(function prim/1918 (unix_getgroups prim/1918))":
 unknown block:(function prim/1918 (unix_getgroups prim/1918)),
 "unknown block:(function prim/1919 (unix_setgroups prim/1919))":
 unknown block:(function prim/1919 (unix_setgroups prim/1919)),
 "unknown block:(function prim/1921 prim/1920 (unix_initgroups prim/1921 prim/1920))":
 unknown block:(function prim/1921 prim/1920 (unix_initgroups prim/1921 prim/1920)),
 "unknown block:(function prim/1922 (unix_getlogin prim/1922))":
 unknown block:(function prim/1922 (unix_getlogin prim/1922)),
 "unknown block:(function prim/1923 (unix_getpwnam prim/1923))":
 unknown block:(function prim/1923 (unix_getpwnam prim/1923)),
 "unknown block:(function prim/1924 (unix_getgrnam prim/1924))":
 unknown block:(function prim/1924 (unix_getgrnam prim/1924)),
 "unknown block:(function prim/1925 (unix_getpwuid prim/1925))":
 unknown block:(function prim/1925 (unix_getpwuid prim/1925)),
 "unknown block:(function prim/1926 (unix_getgrgid prim/1926))":
 unknown block:(function prim/1926 (unix_getgrgid prim/1926)),
 "unknown block:(function prim/1927 (unix_inet_addr_of_string prim/1927))":
 unknown block:(function prim/1927 (unix_inet_addr_of_string prim/1927)),
 "unknown block:(function prim/1928 (unix_string_of_inet_addr prim/1928))":
 unknown block:(function prim/1928 (unix_string_of_inet_addr prim/1928)),
 "inet_addr_any":inet_addr_any,
 "inet_addr_loopback":inet_addr_loopback,
 "inet6_addr_any":inet6_addr_any,
 "inet6_addr_loopback":inet6_addr_loopback,
 "unknown block:(function prim/1931 prim/1930 prim/1929\n  (unix_socket prim/1931 prim/1930 prim/1929))":
 unknown block:(function prim/1931 prim/1930 prim/1929
  (unix_socket prim/1931 prim/1930 prim/1929)),
 "domain_of_sockaddr":domain_of_sockaddr,
 "unknown block:(function prim/1934 prim/1933 prim/1932\n  (unix_socketpair prim/1934 prim/1933 prim/1932))":
 unknown block:(function prim/1934 prim/1933 prim/1932
  (unix_socketpair prim/1934 prim/1933 prim/1932)),
 "unknown block:(function prim/1935 (unix_accept prim/1935))":
 unknown block:(function prim/1935 (unix_accept prim/1935)),
 "unknown block:(function prim/1937 prim/1936 (unix_bind prim/1937 prim/1936))":
 unknown block:(function prim/1937 prim/1936 (unix_bind prim/1937 prim/1936)),
 "unknown block:(function prim/1939 prim/1938 (unix_connect prim/1939 prim/1938))":
 unknown block:(function prim/1939 prim/1938 (unix_connect prim/1939 prim/1938)),
 "unknown block:(function prim/1941 prim/1940 (unix_listen prim/1941 prim/1940))":
 unknown block:(function prim/1941 prim/1940 (unix_listen prim/1941 prim/1940)),
 "unknown block:(function prim/1943 prim/1942 (unix_shutdown prim/1943 prim/1942))":
 unknown block:(function prim/1943 prim/1942 (unix_shutdown prim/1943 prim/1942)),
 "unknown block:(function prim/1944 (unix_getsockname prim/1944))":
 unknown block:(function prim/1944 (unix_getsockname prim/1944)),
 "unknown block:(function prim/1945 (unix_getpeername prim/1945))":
 unknown block:(function prim/1945 (unix_getpeername prim/1945)),
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
 "unknown block:(function prim/1946 (unix_gethostname prim/1946))":
 unknown block:(function prim/1946 (unix_gethostname prim/1946)),
 "unknown block:(function prim/1947 (unix_gethostbyname prim/1947))":
 unknown block:(function prim/1947 (unix_gethostbyname prim/1947)),
 "unknown block:(function prim/1948 (unix_gethostbyaddr prim/1948))":
 unknown block:(function prim/1948 (unix_gethostbyaddr prim/1948)),
 "unknown block:(function prim/1949 (unix_getprotobyname prim/1949))":
 unknown block:(function prim/1949 (unix_getprotobyname prim/1949)),
 "unknown block:(function prim/1950 (unix_getprotobynumber prim/1950))":
 unknown block:(function prim/1950 (unix_getprotobynumber prim/1950)),
 "unknown block:(function prim/1952 prim/1951 (unix_getservbyname prim/1952 prim/1951))":
 unknown block:(function prim/1952 prim/1951 (unix_getservbyname prim/1952 prim/1951)),
 "unknown block:(function prim/1954 prim/1953 (unix_getservbyport prim/1954 prim/1953))":
 unknown block:(function prim/1954 prim/1953 (unix_getservbyport prim/1954 prim/1953)),
 "getaddrinfo":getaddrinfo,
 "getnameinfo":getnameinfo,
 "unknown block:(function prim/1955 (unix_tcgetattr prim/1955))":
 unknown block:(function prim/1955 (unix_tcgetattr prim/1955)),
 "unknown block:(function prim/1958 prim/1957 prim/1956\n  (unix_tcsetattr prim/1958 prim/1957 prim/1956))":
 unknown block:(function prim/1958 prim/1957 prim/1956
  (unix_tcsetattr prim/1958 prim/1957 prim/1956)),
 "unknown block:(function prim/1960 prim/1959 (unix_tcsendbreak prim/1960 prim/1959))":
 unknown block:(function prim/1960 prim/1959 (unix_tcsendbreak prim/1960 prim/1959)),
 "unknown block:(function prim/1961 (unix_tcdrain prim/1961))":
 unknown block:(function prim/1961 (unix_tcdrain prim/1961)),
 "unknown block:(function prim/1963 prim/1962 (unix_tcflush prim/1963 prim/1962))":
 unknown block:(function prim/1963 prim/1962 (unix_tcflush prim/1963 prim/1962)),
 "unknown block:(function prim/1965 prim/1964 (unix_tcflow prim/1965 prim/1964))":
 unknown block:(function prim/1965 prim/1964 (unix_tcflow prim/1965 prim/1964)),
 "unknown block:(function prim/1966 (unix_setsid prim/1966))":
 unknown block:(function prim/1966 (unix_setsid prim/1966))};

