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


var Unix_error=CamlPrimtivie["caml_set_oo_id"]([248,"Unix.Unix_error",0]);

Callback["register_exception"]
 ("Unix.Unix_error",[0,Unix_error,/* E2BIG */0,"",""]);
var
 match=
  Printexc["register_printer"]
   (function(param)
     {var tag=param[1];
      
      if(tag=Unix_error)
       {var s$prime=param[4];
        
        var s=param[3];
        
        var e=param[2];
        
        if(typeof e==="number")
         {switch(e)
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
             ([/* Format */0,
               [/* String_literal */11,
                "EUNKNOWNERR ",
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0]],
               "EUNKNOWNERR %d"],
              x);
          }
        
        return /* Some */[0,
                Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Unix.Unix_error(Unix.",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ", ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* String_literal */11,
                        ", ",
                        [/* Caml_string */3,
                         /* No_padding */0,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]]]],
                   "Unix.Unix_error(Unix.%s, %S, %S)"],
                  msg,
                  s,
                  s$prime)];
        }
      else
       {return /* None */0;}
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
        Pervasives["prerr_endline"](CamlPrimtivie["unix_error_message"](err));
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
     {return CamlPrimtivie["unix_read"](fd,buf,ofs,len);}
    };

var
 write=
  function(fd,buf,ofs,len)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.write");}
    else
     {return CamlPrimtivie["unix_write"](fd,buf,ofs,len);}
    };

var
 single_write=
  function(fd,buf,ofs,len)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.single_write");}
    else
     {return CamlPrimtivie["unix_single_write"](fd,buf,ofs,len);}
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
     {CamlPrimtivie["unix_set_close_on_exec"](fd);return /* true */1;}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Invalid_argument){return /* false */0;}else{throw exn;}
      }
    };

var
 pause=
  function(param)
   {var sigs=CamlPrimtivie["unix_sigprocmask"](/* SIG_BLOCK */1,/* [] */0);
    
    return CamlPrimtivie["unix_sigsuspend"](sigs);
    };

var is_inet6_addr=function(s){return s["length"]=16;};

var inet_addr_any=CamlPrimtivie["unix_inet_addr_of_string"]("0.0.0.0");

var inet_addr_loopback=CamlPrimtivie["unix_inet_addr_of_string"]("127.0.0.1");

try
 {var inet6_addr_any=CamlPrimtivie["unix_inet_addr_of_string"]("::");}
catch(exn)
 {var tag=exn[1];
  
  if(tag=Failure){var inet6_addr_any=inet_addr_any;}else{throw exn;}
  }

try
 {var inet6_addr_loopback=CamlPrimtivie["unix_inet_addr_of_string"]("::1");}
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
   {switch(param[0])
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
 recv=
  function(fd,buf,ofs,len,flags)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.recv");}
    else
     {return CamlPrimtivie["unix_recv"](fd,buf,ofs,len,flags);}
    };

var
 recvfrom=
  function(fd,buf,ofs,len,flags)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.recvfrom");}
    else
     {return CamlPrimtivie["unix_recvfrom"](fd,buf,ofs,len,flags);}
    };

var
 send=
  function(fd,buf,ofs,len,flags)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.send");}
    else
     {return CamlPrimtivie["unix_send"](fd,buf,ofs,len,flags);}
    };

var
 sendto=
  function(fd,buf,ofs,len,flags,addr)
   {if(ofs<0||len<0||ofs>buf["length"]-len)
     {return Pervasives["invalid_arg"]("Unix.sendto");}
    else
     {return CamlPrimtivie["unix_sendto"](fd,buf,ofs,len,flags,addr);}
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
   function(prim,prim,prim)
    {return CamlPrimtivie["unix_getsockopt"](prim$1,prim$2,prim);},
   function(prim,prim,prim,prim)
    {return CamlPrimtivie["unix_setsockopt"](prim$1,prim$2,prim$3,prim);}];

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
            default:exit=95;}}
        
        switch(exit){case 95:return /* () */0;}
        },
      opts);
    var
     get_port=
      function(ty,kind)
       {if(CamlPrimtivie["caml_string_equal"](service,""))
         {return /* :: */[0,/* tuple */[0,ty,0],/* [] */0];}
        else
         {try
           {return /* :: */[0,
                    /* tuple */[0,
                     ty,
                     CamlPrimtivie["caml_int_of_string"](service)],
                    /* [] */0];
            }
          catch(exn$2)
           {var tag$2=exn$2[1];
            
            if(tag$2=Failure)
             {try
               {return /* :: */[0,
                        /* tuple */[0,
                         ty,
                         CamlPrimtivie["unix_getservbyname"](service,kind)[3]],
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
    
    var match$1=opt_socktype[1];
    
    if(match$1)
     {var ty=match$1[1];
      
      if(ty!=1)
       {if(ty!=0)
         {if(CamlPrimtivie["caml_string_equal"](service,""))
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
    
    if(CamlPrimtivie["caml_string_equal"](node,""))
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
           /* tuple */[0,CamlPrimtivie["unix_inet_addr_of_string"](node),node],
           /* [] */0];
        }
      catch(exn$2)
       {var tag$2=exn$2[1];
        
        if(tag$2=Failure)
         {try
           {var he=CamlPrimtivie["unix_gethostbyname"](node);
            
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
     {return List["rev"](CamlPrimtivie["unix_getaddrinfo"](node,service,opts));
      }
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
   {switch(addr[0])
     {case 0:var f=addr[1];return /* record */[0,"",f];
      case 1:
       var p=addr[2];
       
       var a=addr[1];
       
       try
        {if(List["mem"](/* NI_NUMERICHOST */1,opts)){throw Not_found;}else{}
         
         var hostname=CamlPrimtivie["unix_gethostbyaddr"](a)[1];
         }
       catch(exn$2)
        {if(exn$2=Not_found)
          {if(List["mem"](/* NI_NAMEREQD */2,opts)){throw Not_found;}else{}
           
           var hostname=CamlPrimtivie["unix_string_of_inet_addr"](a);
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
         
         var service=CamlPrimtivie["unix_getservbyport"](p,kind)[1];
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
     {return CamlPrimtivie["unix_getnameinfo"](addr,opts);}
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
     {return CamlPrimtivie["unix_waitpid"](/* [] */0,pid);}
    catch(exn$2)
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match$1=exn$2[2];
        
        if(typeof match$1==="number")
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
   {var id=CamlPrimtivie["unix_fork"](/* () */0);
    
    if(id!=0)
     {return waitpid_non_intr(id)[2];}
    else
     {try
       {return CamlPrimtivie["unix_execv"]("/bin/sh",["/bin/sh","-c",cmd]);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 safe_dup=
  function(fd)
   {var new_fd=CamlPrimtivie["unix_dup"](fd);
    
    if(new_fd>=3)
     {return new_fd;}
    else
     {var res=safe_dup(fd);CamlPrimtivie["unix_close"](new_fd);return res;}
    };

var
 safe_close=
  function(fd)
   {try
     {return CamlPrimtivie["unix_close"](fd);}
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
    CamlPrimtivie["unix_dup2"](newnewstdin,stdin);
    CamlPrimtivie["unix_close"](newnewstdin);
    CamlPrimtivie["unix_dup2"](newnewstdout,stdout);
    CamlPrimtivie["unix_close"](newnewstdout);
    CamlPrimtivie["unix_dup2"](newnewstderr,stderr);
    return CamlPrimtivie["unix_close"](newnewstderr);
    };

var
 create_process=
  function(cmd,args,new_stdin,new_stdout,new_stderr)
   {var id=CamlPrimtivie["unix_fork"](/* () */0);
    
    if(id!=0)
     {return id;}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return CamlPrimtivie["unix_execvp"](cmd,args);
        }
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 create_process_env=
  function(cmd,args,env,new_stdin,new_stdout,new_stderr)
   {var id=CamlPrimtivie["unix_fork"](/* () */0);
    
    if(id!=0)
     {return id;}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return CamlPrimtivie["unix_execvpe"](cmd,args,env);
        }
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var popen_processes=Hashtbl["create"](/* None */0,7);

var
 open_proc=
  function(cmd,proc,input,output,toclose)
   {var cloexec=List["for_all"](try_set_close_on_exec,toclose);
    
    var id=CamlPrimtivie["unix_fork"](/* () */0);
    
    if(id!=0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {if(input!=stdin)
       {CamlPrimtivie["unix_dup2"](input,stdin),
        CamlPrimtivie["unix_close"](input)}
      else
       {}
      
      if(output!=stdout)
       {CamlPrimtivie["unix_dup2"](output,stdout),
        CamlPrimtivie["unix_close"](output)}
      else
       {}
      
      if(!cloexec)
       {List["iter"]
         (function(prim){return CamlPrimtivie["unix_close"](prim);},toclose)}
      else
       {}
      
      try
       {return CamlPrimtivie["unix_execv"]("/bin/sh",["/bin/sh","-c",cmd]);}
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_in=
  function(cmd)
   {var match$1=CamlPrimtivie["unix_pipe"](/* () */0);
    
    var in_write=match$1[2];
    
    var in_read=match$1[1];
    
    var inchan=CamlPrimtivie["caml_ml_open_descriptor_in"](in_read);
    
    try
     {open_proc
       (cmd,
        /* Process_in */[1,inchan],
        stdin,
        in_write,
        /* :: */[0,in_read,/* [] */0])}
    catch(e)
     {Pervasives["close_in"](inchan);
      CamlPrimtivie["unix_close"](in_write);
      throw e;
      }
    
    CamlPrimtivie["unix_close"](in_write);
    return inchan;
    };

var
 open_process_out=
  function(cmd)
   {var match$1=CamlPrimtivie["unix_pipe"](/* () */0);
    
    var out_write=match$1[2];
    
    var out_read=match$1[1];
    
    var outchan=CamlPrimtivie["caml_ml_open_descriptor_out"](out_write);
    
    try
     {open_proc
       (cmd,
        /* Process_out */[2,outchan],
        out_read,
        stdout,
        /* :: */[0,out_write,/* [] */0])}
    catch(e)
     {Pervasives["close_out"](outchan);
      CamlPrimtivie["unix_close"](out_read);
      throw e;
      }
    
    CamlPrimtivie["unix_close"](out_read);
    return outchan;
    };

var
 open_process=
  function(cmd)
   {var match$1=CamlPrimtivie["unix_pipe"](/* () */0);
    
    var in_write=match$1[2];
    
    var in_read=match$1[1];
    
    var fds_to_close=[0,/* :: */[0,in_read,/* :: */[0,in_write,/* [] */0]]];
    
    try
     {var match$2=CamlPrimtivie["unix_pipe"](/* () */0);
      
      var out_write=match$2[2];
      
      var out_read=match$2[1];
      
      fds_to_close[1]=
      /* :: */[0,
       in_read,
       /* :: */[0,
        in_write,
        /* :: */[0,out_read,/* :: */[0,out_write,/* [] */0]]]],
      0;
      var inchan=CamlPrimtivie["caml_ml_open_descriptor_in"](in_read);
      
      var outchan=CamlPrimtivie["caml_ml_open_descriptor_out"](out_write);
      
      open_proc
       (cmd,
        /* Process */[0,inchan,outchan],
        out_read,
        in_write,
        /* :: */[0,in_read,/* :: */[0,out_write,/* [] */0]]);
      CamlPrimtivie["unix_close"](out_read);
      CamlPrimtivie["unix_close"](in_write);
      return /* tuple */[0,inchan,outchan];
      }
    catch(e)
     {List["iter"]
       (function(prim){return CamlPrimtivie["unix_close"](prim);},
        fds_to_close[1]);
      throw e;
      }
    };

var
 open_proc_full=
  function(cmd,env,proc,input,output,error,toclose)
   {var cloexec=List["for_all"](try_set_close_on_exec,toclose);
    
    var id=CamlPrimtivie["unix_fork"](/* () */0);
    
    if(id!=0)
     {return Hashtbl["add"](popen_processes,proc,id);}
    else
     {CamlPrimtivie["unix_dup2"](input,stdin);
      CamlPrimtivie["unix_close"](input);
      CamlPrimtivie["unix_dup2"](output,stdout);
      CamlPrimtivie["unix_close"](output);
      CamlPrimtivie["unix_dup2"](error,stderr);
      CamlPrimtivie["unix_close"](error);
      if(!cloexec)
       {List["iter"]
         (function(prim){return CamlPrimtivie["unix_close"](prim);},toclose)}
      else
       {}
      
      try
       {return CamlPrimtivie["unix_execve"]
                ("/bin/sh",["/bin/sh","-c",cmd],env);
        }
      catch(exn$2){return Pervasives["exit"](127);}
      }
    };

var
 open_process_full=
  function(cmd,env)
   {var match$1=CamlPrimtivie["unix_pipe"](/* () */0);
    
    var in_write=match$1[2];
    
    var in_read=match$1[1];
    
    var fds_to_close=[0,/* :: */[0,in_read,/* :: */[0,in_write,/* [] */0]]];
    
    try
     {var match$2=CamlPrimtivie["unix_pipe"](/* () */0);
      
      var out_write=match$2[2];
      
      var out_read=match$2[1];
      
      fds_to_close[1]=
      /* :: */[0,out_read,/* :: */[0,out_write,fds_to_close[1]]],
      0;
      var match$3=CamlPrimtivie["unix_pipe"](/* () */0);
      
      var err_write=match$3[2];
      
      var err_read=match$3[1];
      
      fds_to_close[1]=
      /* :: */[0,err_read,/* :: */[0,err_write,fds_to_close[1]]],
      0;
      var inchan=CamlPrimtivie["caml_ml_open_descriptor_in"](in_read);
      
      var outchan=CamlPrimtivie["caml_ml_open_descriptor_out"](out_write);
      
      var errchan=CamlPrimtivie["caml_ml_open_descriptor_in"](err_read);
      
      open_proc_full
       (cmd,
        env,
        /* Process_full */[3,inchan,outchan,errchan],
        out_read,
        in_write,
        err_write,
        /* :: */[0,
         in_read,
         /* :: */[0,out_write,/* :: */[0,err_read,/* [] */0]]]);
      CamlPrimtivie["unix_close"](out_read);
      CamlPrimtivie["unix_close"](in_write);
      CamlPrimtivie["unix_close"](err_write);
      return /* tuple */[0,inchan,outchan,errchan];
      }
    catch(e)
     {List["iter"]
       (function(prim){return CamlPrimtivie["unix_close"](prim);},
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
       {throw [0,Unix_error,/* EBADF */3,fun_name,""];}
      else
       {throw exn$2;}
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
   {var
     sock=
      CamlPrimtivie["unix_socket"]
       (domain_of_sockaddr(sockaddr),/* SOCK_STREAM */0,0);
    
    try
     {CamlPrimtivie["unix_connect"](sock,sockaddr);
      try_set_close_on_exec(sock);
      return /* tuple */[0,
              CamlPrimtivie["caml_ml_open_descriptor_in"](sock),
              CamlPrimtivie["caml_ml_open_descriptor_out"](sock)];
      }
    catch(exn$2){CamlPrimtivie["unix_close"](sock);throw exn$2;}
    };

var
 shutdown_connection=
  function(inchan)
   {return CamlPrimtivie["unix_shutdown"]
            (CamlPrimtivie["caml_channel_descriptor"](inchan),
             /* SHUTDOWN_SEND */1);
    };

var
 accept_non_intr=
  function(s)
   {try
     {return CamlPrimtivie["unix_accept"](s);}
    catch(exn$2)
     {var exit;
      
      var tag$2=exn$2[1];
      
      if(tag$2=Unix_error)
       {var match$1=exn$2[2];
        
        if(typeof match$1==="number")
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
   {var
     sock=
      CamlPrimtivie["unix_socket"]
       (domain_of_sockaddr(sockaddr),/* SOCK_STREAM */0,0);
    
    setsockopt(sock,/* SO_REUSEADDR */2,/* true */1);
    CamlPrimtivie["unix_bind"](sock,sockaddr);
    CamlPrimtivie["unix_listen"](sock,5);
    while(/* true */1)
     {var match$1=accept_non_intr(sock);
      
      var s=match$1[1];
      
      var id=CamlPrimtivie["unix_fork"](/* () */0);
      
      if(id!=0)
       {CamlPrimtivie["unix_close"](s),waitpid_non_intr(id)}
      else
       {if(CamlPrimtivie["unix_fork"](/* () */0)!=0)
         {Pervasives["exit"](0)}
        else
         {}
        
        CamlPrimtivie["unix_close"](sock);
        try_set_close_on_exec(s);
        var inchan=CamlPrimtivie["caml_ml_open_descriptor_in"](s);
        
        var outchan=CamlPrimtivie["caml_ml_open_descriptor_out"](s);
        
        server_fun(inchan,outchan),Pervasives["exit"](0)}
      }
    return 0;
    };

module["exports"]=
{"Unix_error":Unix_error,
 "unix_error_message":
 function(prim){return CamlPrimtivie["unix_error_message"](prim);},
 "handle_unix_error":handle_unix_error,
 "unix_environment":
 function(prim){return CamlPrimtivie["unix_environment"](prim);},
 "caml_sys_getenv":
 function(prim){return CamlPrimtivie["caml_sys_getenv"](prim);},
 "unix_putenv":
 function(prim,prim){return CamlPrimtivie["unix_putenv"](prim$1,prim);},
 "unix_execv":
 function(prim,prim){return CamlPrimtivie["unix_execv"](prim$1,prim);},
 "unix_execve":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_execve"](prim$1,prim$2,prim);},
 "unix_execvp":
 function(prim,prim){return CamlPrimtivie["unix_execvp"](prim$1,prim);},
 "unix_execvpe":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_execvpe"](prim$1,prim$2,prim);},
 "unix_fork":function(prim){return CamlPrimtivie["unix_fork"](prim);},
 "unix_wait":function(prim){return CamlPrimtivie["unix_wait"](prim);},
 "unix_waitpid":
 function(prim,prim){return CamlPrimtivie["unix_waitpid"](prim$1,prim);},
 "system":system,
 "unix_getpid":function(prim){return CamlPrimtivie["unix_getpid"](prim);},
 "unix_getppid":function(prim){return CamlPrimtivie["unix_getppid"](prim);},
 "unix_nice":function(prim){return CamlPrimtivie["unix_nice"](prim);},
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "unix_open":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_open"](prim$1,prim$2,prim);},
 "unix_close":function(prim){return CamlPrimtivie["unix_close"](prim);},
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "caml_ml_open_descriptor_in":
 function(prim){return CamlPrimtivie["caml_ml_open_descriptor_in"](prim);},
 "caml_ml_open_descriptor_out":
 function(prim){return CamlPrimtivie["caml_ml_open_descriptor_out"](prim);},
 "caml_channel_descriptor":
 function(prim){return CamlPrimtivie["caml_channel_descriptor"](prim);},
 "caml_channel_descriptor":
 function(prim){return CamlPrimtivie["caml_channel_descriptor"](prim);},
 "unix_lseek":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_lseek"](prim$1,prim$2,prim);},
 "unix_truncate":
 function(prim,prim){return CamlPrimtivie["unix_truncate"](prim$1,prim);},
 "unix_ftruncate":
 function(prim,prim){return CamlPrimtivie["unix_ftruncate"](prim$1,prim);},
 "unix_stat":function(prim){return CamlPrimtivie["unix_stat"](prim);},
 "unix_lstat":function(prim){return CamlPrimtivie["unix_lstat"](prim);},
 "unix_fstat":function(prim){return CamlPrimtivie["unix_fstat"](prim);},
 "unix_isatty":function(prim){return CamlPrimtivie["unix_isatty"](prim);},
 "LargeFile":
 [0,
  function(prim,prim,prim)
   {return CamlPrimtivie["unix_lseek_64"](prim$1,prim$2,prim);},
  function(prim,prim){return CamlPrimtivie["unix_truncate_64"](prim$1,prim);},
  function(prim,prim){return CamlPrimtivie["unix_ftruncate_64"](prim$1,prim);},
  function(prim){return CamlPrimtivie["unix_stat_64"](prim);},
  function(prim){return CamlPrimtivie["unix_lstat_64"](prim);},
  function(prim){return CamlPrimtivie["unix_fstat_64"](prim);}],
 "unix_unlink":function(prim){return CamlPrimtivie["unix_unlink"](prim);},
 "unix_rename":
 function(prim,prim){return CamlPrimtivie["unix_rename"](prim$1,prim);},
 "unix_link":
 function(prim,prim){return CamlPrimtivie["unix_link"](prim$1,prim);},
 "unix_chmod":
 function(prim,prim){return CamlPrimtivie["unix_chmod"](prim$1,prim);},
 "unix_fchmod":
 function(prim,prim){return CamlPrimtivie["unix_fchmod"](prim$1,prim);},
 "unix_chown":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_chown"](prim$1,prim$2,prim);},
 "unix_fchown":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_fchown"](prim$1,prim$2,prim);},
 "unix_umask":function(prim){return CamlPrimtivie["unix_umask"](prim);},
 "unix_access":
 function(prim,prim){return CamlPrimtivie["unix_access"](prim$1,prim);},
 "unix_dup":function(prim){return CamlPrimtivie["unix_dup"](prim);},
 "unix_dup2":
 function(prim,prim){return CamlPrimtivie["unix_dup2"](prim$1,prim);},
 "unix_set_nonblock":
 function(prim){return CamlPrimtivie["unix_set_nonblock"](prim);},
 "unix_clear_nonblock":
 function(prim){return CamlPrimtivie["unix_clear_nonblock"](prim);},
 "unix_set_close_on_exec":
 function(prim){return CamlPrimtivie["unix_set_close_on_exec"](prim);},
 "unix_clear_close_on_exec":
 function(prim){return CamlPrimtivie["unix_clear_close_on_exec"](prim);},
 "unix_mkdir":
 function(prim,prim){return CamlPrimtivie["unix_mkdir"](prim$1,prim);},
 "unix_rmdir":function(prim){return CamlPrimtivie["unix_rmdir"](prim);},
 "unix_chdir":function(prim){return CamlPrimtivie["unix_chdir"](prim);},
 "unix_getcwd":function(prim){return CamlPrimtivie["unix_getcwd"](prim);},
 "unix_chroot":function(prim){return CamlPrimtivie["unix_chroot"](prim);},
 "unix_opendir":function(prim){return CamlPrimtivie["unix_opendir"](prim);},
 "unix_readdir":function(prim){return CamlPrimtivie["unix_readdir"](prim);},
 "unix_rewinddir":
 function(prim){return CamlPrimtivie["unix_rewinddir"](prim);},
 "unix_closedir":function(prim){return CamlPrimtivie["unix_closedir"](prim);},
 "unix_pipe":function(prim){return CamlPrimtivie["unix_pipe"](prim);},
 "unix_mkfifo":
 function(prim,prim){return CamlPrimtivie["unix_mkfifo"](prim$1,prim);},
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
 function(prim,prim){return CamlPrimtivie["unix_symlink"](prim$1,prim);},
 "unix_readlink":function(prim){return CamlPrimtivie["unix_readlink"](prim);},
 "unix_select":
 function(prim,prim,prim,prim)
  {return CamlPrimtivie["unix_select"](prim$1,prim$2,prim$3,prim);},
 "unix_lockf":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_lockf"](prim$1,prim$2,prim);},
 "unix_kill":
 function(prim,prim){return CamlPrimtivie["unix_kill"](prim$1,prim);},
 "unix_sigprocmask":
 function(prim,prim){return CamlPrimtivie["unix_sigprocmask"](prim$1,prim);},
 "unix_sigpending":
 function(prim){return CamlPrimtivie["unix_sigpending"](prim);},
 "unix_sigsuspend":
 function(prim){return CamlPrimtivie["unix_sigsuspend"](prim);},
 "pause":pause,
 "unix_time":function(prim){return CamlPrimtivie["unix_time"](prim);},
 "unix_gettimeofday":
 function(prim){return CamlPrimtivie["unix_gettimeofday"](prim);},
 "unix_gmtime":function(prim){return CamlPrimtivie["unix_gmtime"](prim);},
 "unix_localtime":
 function(prim){return CamlPrimtivie["unix_localtime"](prim);},
 "unix_mktime":function(prim){return CamlPrimtivie["unix_mktime"](prim);},
 "unix_alarm":function(prim){return CamlPrimtivie["unix_alarm"](prim);},
 "unix_sleep":function(prim){return CamlPrimtivie["unix_sleep"](prim);},
 "unix_times":function(prim){return CamlPrimtivie["unix_times"](prim);},
 "unix_utimes":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_utimes"](prim$1,prim$2,prim);},
 "unix_getitimer":
 function(prim){return CamlPrimtivie["unix_getitimer"](prim);},
 "unix_setitimer":
 function(prim,prim){return CamlPrimtivie["unix_setitimer"](prim$1,prim);},
 "unix_getuid":function(prim){return CamlPrimtivie["unix_getuid"](prim);},
 "unix_geteuid":function(prim){return CamlPrimtivie["unix_geteuid"](prim);},
 "unix_setuid":function(prim){return CamlPrimtivie["unix_setuid"](prim);},
 "unix_getgid":function(prim){return CamlPrimtivie["unix_getgid"](prim);},
 "unix_getegid":function(prim){return CamlPrimtivie["unix_getegid"](prim);},
 "unix_setgid":function(prim){return CamlPrimtivie["unix_setgid"](prim);},
 "unix_getgroups":
 function(prim){return CamlPrimtivie["unix_getgroups"](prim);},
 "unix_setgroups":
 function(prim){return CamlPrimtivie["unix_setgroups"](prim);},
 "unix_initgroups":
 function(prim,prim){return CamlPrimtivie["unix_initgroups"](prim$1,prim);},
 "unix_getlogin":function(prim){return CamlPrimtivie["unix_getlogin"](prim);},
 "unix_getpwnam":function(prim){return CamlPrimtivie["unix_getpwnam"](prim);},
 "unix_getgrnam":function(prim){return CamlPrimtivie["unix_getgrnam"](prim);},
 "unix_getpwuid":function(prim){return CamlPrimtivie["unix_getpwuid"](prim);},
 "unix_getgrgid":function(prim){return CamlPrimtivie["unix_getgrgid"](prim);},
 "unix_inet_addr_of_string":
 function(prim){return CamlPrimtivie["unix_inet_addr_of_string"](prim);},
 "unix_string_of_inet_addr":
 function(prim){return CamlPrimtivie["unix_string_of_inet_addr"](prim);},
 "inet_addr_any":inet_addr_any,
 "inet_addr_loopback":inet_addr_loopback,
 "inet6_addr_any":inet6_addr_any,
 "inet6_addr_loopback":inet6_addr_loopback,
 "unix_socket":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_socket"](prim$1,prim$2,prim);},
 "domain_of_sockaddr":domain_of_sockaddr,
 "unix_socketpair":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_socketpair"](prim$1,prim$2,prim);},
 "unix_accept":function(prim){return CamlPrimtivie["unix_accept"](prim);},
 "unix_bind":
 function(prim,prim){return CamlPrimtivie["unix_bind"](prim$1,prim);},
 "unix_connect":
 function(prim,prim){return CamlPrimtivie["unix_connect"](prim$1,prim);},
 "unix_listen":
 function(prim,prim){return CamlPrimtivie["unix_listen"](prim$1,prim);},
 "unix_shutdown":
 function(prim,prim){return CamlPrimtivie["unix_shutdown"](prim$1,prim);},
 "unix_getsockname":
 function(prim){return CamlPrimtivie["unix_getsockname"](prim);},
 "unix_getpeername":
 function(prim){return CamlPrimtivie["unix_getpeername"](prim);},
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
 function(prim){return CamlPrimtivie["unix_gethostname"](prim);},
 "unix_gethostbyname":
 function(prim){return CamlPrimtivie["unix_gethostbyname"](prim);},
 "unix_gethostbyaddr":
 function(prim){return CamlPrimtivie["unix_gethostbyaddr"](prim);},
 "unix_getprotobyname":
 function(prim){return CamlPrimtivie["unix_getprotobyname"](prim);},
 "unix_getprotobynumber":
 function(prim){return CamlPrimtivie["unix_getprotobynumber"](prim);},
 "unix_getservbyname":
 function(prim,prim){return CamlPrimtivie["unix_getservbyname"](prim$1,prim);},
 "unix_getservbyport":
 function(prim,prim){return CamlPrimtivie["unix_getservbyport"](prim$1,prim);},
 "getaddrinfo":getaddrinfo,
 "getnameinfo":getnameinfo,
 "unix_tcgetattr":
 function(prim){return CamlPrimtivie["unix_tcgetattr"](prim);},
 "unix_tcsetattr":
 function(prim,prim,prim)
  {return CamlPrimtivie["unix_tcsetattr"](prim$1,prim$2,prim);},
 "unix_tcsendbreak":
 function(prim,prim){return CamlPrimtivie["unix_tcsendbreak"](prim$1,prim);},
 "unix_tcdrain":function(prim){return CamlPrimtivie["unix_tcdrain"](prim);},
 "unix_tcflush":
 function(prim,prim){return CamlPrimtivie["unix_tcflush"](prim$1,prim);},
 "unix_tcflow":
 function(prim,prim){return CamlPrimtivie["unix_tcflow"](prim$1,prim);},
 "unix_setsid":function(prim){return CamlPrimtivie["unix_setsid"](prim);}};

