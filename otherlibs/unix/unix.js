// Generated CODE, PLEASE EDIT WITH CARE 

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
       {var exit;
        
        if(typeof param=="number")
         {switch(param){case 2:return opt_passive[1]=1,0;}}
        else
         {switch(param[0])
           {case 1:var s=param[1];return opt_socktype[1]=[0,s],0;
            case 2:var p=param[1];return opt_protocol[1]=p,0;
            default:exit=95;}}
        
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match$1=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match$1!=11){exit=75;}else{return waitpid_non_intr(pid);}}
        else
         {exit=75;}
        }
      else
       {exit=75;}
      
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
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match$1=exn$2[2];
        
        if("unknown primitive:isint")
         {if(match$1!=11){exit=7;}else{return accept_non_intr(s);}}
        else
         {exit=7;}
        }
      else
       {exit=7;}
      
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

module["exports"]=
{"Unix_error":Unix_error,
 "unix_error_message":
 function(prim){return "unknown primitive:unix_error_message";},
 "handle_unix_error":handle_unix_error,
 "unix_environment":
 function(prim){return "unknown primitive:unix_environment";},
 "caml_sys_getenv":function(prim){return "unknown primitive:caml_sys_getenv";},
 "unix_putenv":function(prim,prim$1){return "unknown primitive:unix_putenv";},
 "unix_execv":function(prim,prim$1){return "unknown primitive:unix_execv";},
 "unix_execve":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_execve";},
 "unix_execvp":function(prim,prim$1){return "unknown primitive:unix_execvp";},
 "unix_execvpe":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_execvpe";},
 "unix_fork":function(prim){return "unknown primitive:unix_fork";},
 "unix_wait":function(prim){return "unknown primitive:unix_wait";},
 "unix_waitpid":
 function(prim,prim$1){return "unknown primitive:unix_waitpid";},
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
 "unix_pipe":function(prim){return "unknown primitive:unix_pipe";},
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
 "unix_select":
 function(prim,prim$1,prim$2,prim$3){return "unknown primitive:unix_select";},
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
 "unix_sleep":function(prim){return "unknown primitive:unix_sleep";},
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
 "unix_socket":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_socket";},
 "domain_of_sockaddr":domain_of_sockaddr,
 "unix_socketpair":
 function(prim,prim$1,prim$2){return "unknown primitive:unix_socketpair";},
 "unix_accept":function(prim){return "unknown primitive:unix_accept";},
 "unix_bind":function(prim,prim$1){return "unknown primitive:unix_bind";},
 "unix_connect":
 function(prim,prim$1){return "unknown primitive:unix_connect";},
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

