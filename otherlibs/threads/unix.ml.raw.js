var Pervasives=require("Pervasives");
var List=require("List");
var Callback=require("Callback");
var Bytes=require("Bytes");
var Hashtbl=require("Hashtbl");
var Array=require("Array");
var Sys=require("Sys");
var wait_read=function(fd){return "unknown primitive:thread_wait_read"};
var wait_write=function(fd){return "unknown primitive:thread_wait_write"};
var select_aux=function(arg){return "unknown primitive:thread_select"};
var wait_pid_aux=function(pid){return "unknown primitive:thread_wait_pid"};
var delay=function(duration){return "unknown primitive:thread_delay"};
"unknown primitive:thread_initialize";
var Unix_error="unknown primitive:caml_set_oo_id";
var $js=Callback["register_exception"];
$js("Unix.Unix_error",[0,Unix_error,0,"",""]);
var
 handle_unix_error=
  function(f,arg)
   {try
     {return f(arg)}
    catch(exn)
     {var tag=exn[1];
      var $js$1=tag=Unix_error;
      if($js$1)
       {var arg$1=exn[4];
        var fun_name=exn[3];
        var err=exn[2];
        var $js$2=Pervasives["prerr_string"];
        var $js$3=Sys["argv"][0];
        $js$2($js$3);
        var $js$4=Pervasives["prerr_string"];
        $js$4(': "');
        var $js$5=Pervasives["prerr_string"];
        $js$5(fun_name);
        var $js$6=Pervasives["prerr_string"];
        $js$6('" failed');
        var $js$7=arg$1["length"]>0;
        if($js$7)
         {var $js$8=Pervasives["prerr_string"];
          $js$8(' on "');
          var $js$9=Pervasives["prerr_string"];
          $js$9(arg$1);
          var $js$10=Pervasives["prerr_string"];
          $js$10('"')}
        else
         {}
        var $js$11=Pervasives["prerr_string"];
        $js$11(": ");
        var $js$12=Pervasives["prerr_endline"];
        var $js$13="unknown primitive:unix_error_message";
        $js$12($js$13);
        var $js$14=Pervasives["exit"];
        return $js$14(2)}
      else
       {return "unknown primitive:reraise"}}};
var stdin=0;
var stdout=1;
var stderr=2;
var
 read=
  function(fd,buf,ofs,len)
   {try
     {var $js$1=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$1)
       {var $js$2=Pervasives["invalid_arg"];return $js$2("Unix.read")}
      else
       {return "unknown primitive:unix_read"}}
    catch(exn)
     {var tag=exn[1];
      var $js$3=tag=Unix_error;
      if($js$3)
       {var match=exn[2];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match!=2;
          if($js$5)
           {var $js$6=match!=37;if($js$6){var exit=161}else{var exit$1=162}}
          else
           {var exit$1=162}}
        else
         {var exit=161}
        switch(exit$1){case 162:wait_read(fd);return read(fd,buf,ofs,len)}}
      else
       {var exit=161}
      switch(exit){case 161:return "unknown primitive:reraise"}}};
var
 write=
  function(fd,buf,ofs,len)
   {try
     {var $js$1=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$1)
       {var $js$2=Pervasives["invalid_arg"];return $js$2("Unix.write")}
      else
       {return "unknown primitive:unix_write"}}
    catch(exn)
     {var tag=exn[1];
      var $js$3=tag=Unix_error;
      if($js$3)
       {var match=exn[2];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match!=2;
          if($js$5)
           {var $js$6=match!=37;if($js$6){var exit=159}else{var exit$1=160}}
          else
           {var exit$1=160}}
        else
         {var exit=159}
        switch(exit$1){case 160:wait_write(fd);return write(fd,buf,ofs,len)}}
      else
       {var exit=159}
      switch(exit){case 159:return "unknown primitive:reraise"}}};
var
 single_write=
  function(fd,buf,ofs,len)
   {try
     {var $js$1=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$1)
       {var $js$2=Pervasives["invalid_arg"];return $js$2("Unix.single_write")}
      else
       {return "unknown primitive:unix_single_write"}}
    catch(exn)
     {var tag=exn[1];
      var $js$3=tag=Unix_error;
      if($js$3)
       {var match=exn[2];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match!=2;
          if($js$5)
           {var $js$6=match!=37;if($js$6){var exit=157}else{var exit$1=158}}
          else
           {var exit$1=158}}
        else
         {var exit=157}
        switch(exit$1)
         {case 158:wait_write(fd);return single_write(fd,buf,ofs,len)}}
      else
       {var exit=157}
      switch(exit){case 157:return "unknown primitive:reraise"}}};
var
 write_substring=
  function(fd,buf,ofs,len)
   {var $js$1=Bytes["unsafe_of_string"];
    var $js$2=$js$1(buf);
    return write(fd,$js$2,ofs,len)};
var
 single_write_substring=
  function(fd,buf,ofs,len)
   {var $js$1=Bytes["unsafe_of_string"];
    var $js$2=$js$1(buf);
    return single_write(fd,$js$2,ofs,len)};
var LargeFile=[0];
var
 pipe=
  function(param)
   {var fd_pair="unknown primitive:unix_pipe";
    var in_fd=fd_pair[2];
    var out_fd=fd_pair[1];
    "unknown primitive:unix_set_nonblock";
    "unknown primitive:unix_set_nonblock";
    return fd_pair};
var
 select=
  function(readfds,writefds,exceptfds,delay$1)
   {var match=select_aux([0,readfds,writefds,exceptfds,delay$1]);
    var $js$1=match;
    if(typeof $js$1=="number")
     {"unknown block:match/2169"}
    else
     {var $js$2=$js$1[0];
      if($js$2==0)
       {var e=match[3];var w=match[2];var r=match[1];return [0,r,w,e]}
      else
       {var exit=151}}
    switch(exit){case 151:return [0,0,0,0]}};
var
 safe_clear_nonblock=
  function(fd)
   {try
     {return "unknown primitive:unix_clear_nonblock"}
    catch(exn)
     {var tag=exn[1];
      var $js$1=tag=Unix_error;
      if($js$1){return 0}else{return "unknown primitive:reraise"}}};
var
 safe_set_nonblock=
  function(fd)
   {try
     {return "unknown primitive:unix_set_nonblock"}
    catch(exn)
     {var tag=exn[1];
      var $js$1=tag=Unix_error;
      if($js$1){return 0}else{return "unknown primitive:reraise"}}};
var
 do_exec=
  function(fn)
   {var oldtimer="unknown primitive:unix_setitimer";
    safe_clear_nonblock(stdin);
    safe_clear_nonblock(stdout);
    safe_clear_nonblock(stderr);
    try
     {return fn(0)}
    catch(exn)
     {var tag=exn[1];
      var $js$1=tag=Unix_error;
      if($js$1)
       {var $js$2="unknown primitive:unix_setitimer";
        0;
        safe_set_nonblock(stdin);
        safe_set_nonblock(stdout);
        safe_set_nonblock(stderr);
        var $js$3=exn;
        throw $js$3}
      else
       {return "unknown primitive:reraise"}}};
var
 execv=
  function(proc,args)
   {return do_exec(function(param){return "unknown primitive:unix_execv"})};
var
 execve=
  function(proc,args,env)
   {return do_exec(function(param){return "unknown primitive:unix_execve"})};
var
 execvp=
  function(proc,args)
   {return do_exec(function(param){return "unknown primitive:unix_execvp"})};
var
 execvpe=
  function(proc,args)
   {return do_exec
            (function(param)
              {var
                $js$1=
                 function(prim,prim$1,prim$2)
                  {return "unknown primitive:unix_execvpe"};
               return $js$1(proc,args)})};
var
 wait_pid=
  function(pid)
   {var match=wait_pid_aux(pid);
    var $js$1=match;
    if(typeof $js$1=="number")
     {"unknown block:match/2145"}
    else
     {var $js$2=$js$1[0];
      if($js$2==1)
       {var status=match[2];var pid$1=match[1];return [0,pid$1,status]}
      else
       {var exit=138}}
    switch(exit)
     {case 138:
       var $js$3=Pervasives["invalid_arg"];return $js$3("Thread.wait_pid")
      }};
var wait=function(param){return wait_pid(-1)};
var
 waitpid=
  function(flags,pid)
   {var $js$1=List["mem"];
    var $js$2=$js$1(0,flags);
    if($js$2)
     {return "unknown primitive:unix_waitpid"}
    else
     {return wait_pid(pid)}};
var
 pause=
  function(param)
   {var sigs="unknown primitive:unix_sigprocmask";
    return "unknown primitive:unix_sigsuspend"};
var sleep=function(secs){return delay(secs)};
var inet_addr_any="unknown primitive:unix_inet_addr_of_string";
var inet_addr_loopback="unknown primitive:unix_inet_addr_of_string";
try
 {var inet6_addr_any="unknown primitive:unix_inet_addr_of_string"}
catch(exn)
 {var tag=exn[1];
  var $js$1=tag=Failure;
  if($js$1)
   {var inet6_addr_any=inet_addr_any}
  else
   {var inet6_addr_any="unknown primitive:reraise"}}
try
 {var inet6_addr_loopback="unknown primitive:unix_inet_addr_of_string"}
catch(exn$1)
 {var tag$1=exn$1[1];
  var $js$2=tag$1=Failure;
  if($js$2)
   {var inet6_addr_loopback=inet_addr_loopback}
  else
   {var inet6_addr_loopback="unknown primitive:reraise"}}
var is_inet6_addr=function(s){return s["length"]=16};
var
 domain_of_sockaddr=
  function(param)
   {var $js$3=param;
    if($js$3==0)
     {return 0}
    else
     if($js$3==1)
      {var a=param[1];
       var $js$4=is_inet6_addr(a);
       if($js$4){return 2}else{return 1}}};
var
 socket=
  function(dom,typ,proto)
   {var s="unknown primitive:unix_socket";
    "unknown primitive:unix_set_nonblock";
    return s};
var
 socketpair=
  function(dom,typ,proto)
   {var spair="unknown primitive:unix_socketpair";
    var s2=spair[2];
    var s1=spair[1];
    "unknown primitive:unix_set_nonblock";
    "unknown primitive:unix_set_nonblock";
    return spair};
var
 accept=
  function(req)
   {wait_read(req);
    try
     {var result="unknown primitive:unix_accept";
      var s=result[1];
      "unknown primitive:unix_set_nonblock";
      return result}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$3=tag$2=Unix_error;
      if($js$3)
       {var match=exn$2[2];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match!=2;
          if($js$5)
           {var $js$6=match!=37;if($js$6){var exit=118}else{var exit$1=119}}
          else
           {var exit$1=119}}
        else
         {var exit=118}
        switch(exit$1){case 119:return accept(req)}}
      else
       {var exit=118}
      switch(exit){case 118:return "unknown primitive:reraise"}}};
var
 connect=
  function(s,addr)
   {try
     {return "unknown primitive:unix_connect"}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$3=tag$2=Unix_error;
      if($js$3)
       {var match=exn$2[2];
        var $js$4="unknown primitive:isint";
        if($js$4)
         {var $js$5=match>=37;
          if($js$5)
           {var $js$6=match>=39;if($js$6){var exit=115}else{var exit$1=116}}
          else
           {var $js$7=match!=2;if($js$7){var exit=115}else{var exit$1=116}}}
        else
         {var exit=115}
        switch(exit$1)
         {case 116:
           wait_write(s);
           var $js$8="unknown primitive:unix_getpeername";
           return 0
          }}
      else
       {var exit=115}
      switch(exit){case 115:return "unknown primitive:reraise"}}};
var
 recv=
  function(fd,buf,ofs,len,flags)
   {try
     {var $js$3=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$3)
       {var $js$4=Pervasives["invalid_arg"];return $js$4("Unix.recv")}
      else
       {return "unknown primitive:unix_recv"}}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$5=tag$2=Unix_error;
      if($js$5)
       {var match=exn$2[2];
        var $js$6="unknown primitive:isint";
        if($js$6)
         {var $js$7=match!=2;
          if($js$7)
           {var $js$8=match!=37;if($js$8){var exit=113}else{var exit$1=114}}
          else
           {var exit$1=114}}
        else
         {var exit=113}
        switch(exit$1)
         {case 114:wait_read(fd);return recv(fd,buf,ofs,len,flags)}}
      else
       {var exit=113}
      switch(exit){case 113:return "unknown primitive:reraise"}}};
var
 recvfrom=
  function(fd,buf,ofs,len,flags)
   {try
     {var $js$3=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$3)
       {var $js$4=Pervasives["invalid_arg"];return $js$4("Unix.recvfrom")}
      else
       {return "unknown primitive:unix_recvfrom"}}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$5=tag$2=Unix_error;
      if($js$5)
       {var match=exn$2[2];
        var $js$6="unknown primitive:isint";
        if($js$6)
         {var $js$7=match!=2;
          if($js$7)
           {var $js$8=match!=37;if($js$8){var exit=111}else{var exit$1=112}}
          else
           {var exit$1=112}}
        else
         {var exit=111}
        switch(exit$1)
         {case 112:wait_read(fd);return recvfrom(fd,buf,ofs,len,flags)}}
      else
       {var exit=111}
      switch(exit){case 111:return "unknown primitive:reraise"}}};
var
 send=
  function(fd,buf,ofs,len,flags)
   {try
     {var $js$3=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$3)
       {var $js$4=Pervasives["invalid_arg"];return $js$4("Unix.send")}
      else
       {return "unknown primitive:unix_send"}}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$5=tag$2=Unix_error;
      if($js$5)
       {var match=exn$2[2];
        var $js$6="unknown primitive:isint";
        if($js$6)
         {var $js$7=match!=2;
          if($js$7)
           {var $js$8=match!=37;if($js$8){var exit=109}else{var exit$1=110}}
          else
           {var exit$1=110}}
        else
         {var exit=109}
        switch(exit$1)
         {case 110:wait_write(fd);return send(fd,buf,ofs,len,flags)}}
      else
       {var exit=109}
      switch(exit){case 109:return "unknown primitive:reraise"}}};
var
 sendto=
  function(fd,buf,ofs,len,flags,addr)
   {try
     {var $js$3=ofs<0||len<0||ofs>buf["length"]-len;
      if($js$3)
       {var $js$4=Pervasives["invalid_arg"];return $js$4("Unix.sendto")}
      else
       {return "unknown primitive:unix_sendto"}}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$5=tag$2=Unix_error;
      if($js$5)
       {var match=exn$2[2];
        var $js$6="unknown primitive:isint";
        if($js$6)
         {var $js$7=match!=2;
          if($js$7)
           {var $js$8=match!=37;if($js$8){var exit=107}else{var exit$1=108}}
          else
           {var exit$1=108}}
        else
         {var exit=107}
        switch(exit$1)
         {case 108:wait_write(fd);return sendto(fd,buf,ofs,len,flags,addr)}}
      else
       {var exit=107}
      switch(exit){case 107:return "unknown primitive:reraise"}}};
var
 send_substring=
  function(fd,buf,ofs,len,flags)
   {var $js$3=Bytes["unsafe_of_string"];
    var $js$4=$js$3(buf);
    return send(fd,$js$4,ofs,len,flags)};
var
 sendto_substring=
  function(fd,buf,ofs,len,flags,addr)
   {var $js$3=Bytes["unsafe_of_string"];
    var $js$4=$js$3(buf);
    return sendto(fd,$js$4,ofs,len,flags,addr)};
var bool=0;
var int=1;
var optint=2;
var float=3;
var error=4;
var
 SO=
  [0,
   bool,
   int,
   optint,
   float,
   error,
   function(prim,prim$1,prim$2){return "unknown primitive:unix_getsockopt"},
   function(prim,prim$1,prim$2,prim$3)
    {return "unknown primitive:unix_setsockopt"}];
var getsockopt=function(fd,opt){var $js$3=SO[6];return $js$3(SO[1],fd,opt)};
var
 setsockopt=
  function(fd,opt,v){var $js$3=SO[7];return $js$3(SO[1],fd,opt,v)};
var
 getsockopt_int=
  function(fd,opt){var $js$3=SO[6];return $js$3(SO[2],fd,opt)};
var
 setsockopt_int=
  function(fd,opt,v){var $js$3=SO[7];return $js$3(SO[2],fd,opt,v)};
var
 getsockopt_optint=
  function(fd,opt){var $js$3=SO[6];return $js$3(SO[3],fd,opt)};
var
 setsockopt_optint=
  function(fd,opt,v){var $js$3=SO[7];return $js$3(SO[3],fd,opt,v)};
var
 getsockopt_float=
  function(fd,opt){var $js$3=SO[6];return $js$3(SO[4],fd,opt)};
var
 setsockopt_float=
  function(fd,opt,v){var $js$3=SO[7];return $js$3(SO[4],fd,opt,v)};
var getsockopt_error=function(fd){var $js$3=SO[6];return $js$3(SO[5],fd,0)};
var
 getaddrinfo_emulation=
  function(node,service,opts)
   {var opt_socktype=[0,0];
    var opt_protocol=[0,0];
    var opt_passive=[0,0];
    var $js$3=List["iter"];
    $js$3
     (function(param)
       {var $js$4=param;
        if(typeof $js$4=="number")
         {if($js$4==2){return opt_passive[1]=1,0}}
        else
         {var $js$5=$js$4[0];
          if($js$5==1)
           {var s=param[1];return opt_socktype[1]=[0,s],0}
          else
           if($js$5==2)
            {var p=param[1];return opt_protocol[1]=p,0}
           else
            {var exit=86}}
        switch(exit){case 86:return 0}},
      opts);
    var
     get_port=
      function(ty,kind)
       {var $js$4="unknown primitive:caml_string_equal";
        if($js$4)
         {return [0,[0,ty,0],0]}
        else
         {try
           {var $js$5="unknown primitive:caml_int_of_string";
            var $js$6=[0,ty,$js$5];
            return [0,$js$6,0]}
          catch(exn$2)
           {var tag$2=exn$2[1];
            var $js$7=tag$2=Failure;
            if($js$7)
             {try
               {var $js$8="unknown primitive:unix_getservbyname";
                var $js$9=$js$8[3];
                var $js$10=[0,ty,$js$9];
                return [0,$js$10,0]}
              catch(exn$3)
               {var $js$11=exn$3=Not_found;
                if($js$11){return 0}else{return "unknown primitive:reraise"}}}
            else
             {return "unknown primitive:reraise"}}}};
    var match=opt_socktype[1];
    var $js$4=match;
    if($js$4)
     {var ty=match[1];
      var $js$5=ty!=1;
      if($js$5)
       {var $js$6=ty!=0;
        if($js$6)
         {var $js$7="unknown primitive:caml_string_equal";
          if($js$7){var ports=[0,[0,ty,0],0]}else{var ports=0}}
        else
         {var ports=get_port(0,"tcp")}}
      else
       {var ports=get_port(1,"udp")}}
    else
     {var $js$8=Pervasives["@"];
      var $js$9=get_port(0,"tcp");
      var $js$10=get_port(1,"udp");
      var ports=$js$8($js$9,$js$10)}
    var $js$11="unknown primitive:caml_string_equal";
    if($js$11)
     {var $js$12=List["mem"];
      var $js$13=$js$12(2,opts);
      if($js$13)
       {var addresses=[0,[0,inet_addr_any,"0.0.0.0"],0]}
      else
       {var addresses=[0,[0,inet_addr_loopback,"127.0.0.1"],0]}}
    else
     {try
       {var $js$14="unknown primitive:unix_inet_addr_of_string";
        var $js$15=[0,$js$14,node];
        var addresses=[0,$js$15,0]}
      catch(exn$2)
       {var tag$2=exn$2[1];
        var $js$16=tag$2=Failure;
        if($js$16)
         {try
           {var he="unknown primitive:unix_gethostbyname";
            var $js$17=List["map"];
            var $js$18=Array["to_list"];
            var $js$19=$js$18(he[4]);
            var addresses=$js$17(function(a){return [0,a,he[1]]},$js$19)}
          catch(exn$3)
           {var $js$20=exn$3=Not_found;
            if($js$20)
             {var addresses=0}
            else
             {var addresses="unknown primitive:reraise"}}}
        else
         {var addresses="unknown primitive:reraise"}}}
    var $js$21=List["flatten"];
    var $js$22=List["map"];
    var
     $js$23=
      $js$22
       (function(param)
         {var port=param[2];
          var ty$1=param[1];
          var $js$24=List["map"];
          return $js$24
                  (function(param$1)
                    {var name=param$1[2];
                     var addr=param$1[1];
                     return [0,1,ty$1,opt_protocol[1],[1,addr,port],name]},
                   addresses)},
        ports);
    return $js$21($js$23)};
var
 getaddrinfo=
  function(node,service,opts)
   {try
     {var $js$3=List["rev"];
      var $js$4="unknown primitive:unix_getaddrinfo";
      return $js$3($js$4)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$5=tag$2=Invalid_argument;
      if($js$5)
       {return getaddrinfo_emulation(node,service,opts)}
      else
       {return "unknown primitive:reraise"}}};
var
 getnameinfo_emulation=
  function(addr,opts)
   {var $js$3=addr;
    if($js$3==0)
     {var f=addr[1];return [0,"",f]}
    else
     if($js$3==1)
      {var p=addr[2];
       var a=addr[1];
       try
        {var $js$4=List["mem"];
         var $js$5=$js$4(1,opts);
         if($js$5){var $js$6=Not_found;throw $js$6}else{}
         var $js$7="unknown primitive:unix_gethostbyaddr";
         var hostname=$js$7[1]}
       catch(exn$2)
        {var $js$8=exn$2=Not_found;
         if($js$8)
          {var $js$9=List["mem"];
           var $js$10=$js$9(2,opts);
           if($js$10){var $js$11=Not_found;throw $js$11}else{}
           var hostname="unknown primitive:unix_string_of_inet_addr"}
         else
          {var hostname="unknown primitive:reraise"}}
       try
        {var $js$12=List["mem"];
         var $js$13=$js$12(3,opts);
         if($js$13){var $js$14=Not_found;throw $js$14}else{}
         var $js$15=List["mem"];
         var $js$16=$js$15(4,opts);
         if($js$16){var kind="udp"}else{var kind="tcp"}
         var $js$17="unknown primitive:unix_getservbyport";
         var service=$js$17[1]}
       catch(exn$3)
        {var $js$18=exn$3=Not_found;
         if($js$18)
          {var $js$19=Pervasives["string_of_int"];var service=$js$19(p)}
         else
          {var service="unknown primitive:reraise"}}
       return [0,hostname,service]}};
var
 getnameinfo=
  function(addr,opts)
   {try
     {return "unknown primitive:unix_getnameinfo"}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$3=tag$2=Invalid_argument;
      if($js$3)
       {return getnameinfo_emulation(addr,opts)}
      else
       {return "unknown primitive:reraise"}}};
var
 system=
  function(cmd)
   {var id="unknown primitive:unix_fork";
    var $js$3=id!=0;
    if($js$3)
     {var $js$4=waitpid(0,id);return $js$4[2]}
    else
     {try
       {return execv("/bin/sh",["/bin/sh","-c",cmd])}
      catch(exn$2){var $js$5=Pervasives["exit"];return $js$5(127)}}};
var
 safe_dup=
  function(fd)
   {var new_fd="unknown primitive:unix_dup";
    var $js$3=new_fd>=3;
    if($js$3)
     {return new_fd}
    else
     {var res=safe_dup(fd);"unknown primitive:unix_close";return res}};
var
 safe_close=
  function(fd)
   {try
     {return "unknown primitive:unix_close"}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$3=tag$2=Unix_error;
      if($js$3){return 0}else{return "unknown primitive:reraise"}}};
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
    return "unknown primitive:unix_close"};
var
 create_process=
  function(cmd,args,new_stdin,new_stdout,new_stderr)
   {var id="unknown primitive:unix_fork";
    var $js$3=id!=0;
    if($js$3)
     {return id}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return execvp(cmd,args)}
      catch(exn$2){var $js$4=Pervasives["exit"];return $js$4(127)}}};
var
 create_process_env=
  function(cmd,args,env,new_stdin,new_stdout,new_stderr)
   {var id="unknown primitive:unix_fork";
    var $js$3=id!=0;
    if($js$3)
     {return id}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return execvpe(cmd,args,env)}
      catch(exn$2){var $js$4=Pervasives["exit"];return $js$4(127)}}};
var $js$3=Hashtbl["create"];
var popen_processes=$js$3(0,7);
var
 open_proc=
  function(cmd,proc,input,output,toclose)
   {var id="unknown primitive:unix_fork";
    var $js$4=id!=0;
    if($js$4)
     {var $js$5=Hashtbl["add"];return $js$5(popen_processes,proc,id)}
    else
     {var $js$6=input!=stdin;
      if($js$6)
       {"unknown primitive:unix_dup2";"unknown primitive:unix_close"}
      else
       {}
      var $js$7=output!=stdout;
      if($js$7)
       {"unknown primitive:unix_dup2";"unknown primitive:unix_close"}
      else
       {}
      var $js$8=List["iter"];
      $js$8(function(prim){return "unknown primitive:unix_close"},toclose);
      try
       {return execv("/bin/sh",["/bin/sh","-c",cmd])}
      catch(exn$2){var $js$9=Pervasives["exit"];return $js$9(127)}}};
var
 open_process_in=
  function(cmd)
   {var match=pipe(0);
    var in_write=match[2];
    var in_read=match[1];
    var inchan="unknown primitive:caml_ml_open_descriptor_in";
    open_proc(cmd,[1,inchan],stdin,in_write,[0,in_read,0]);
    "unknown primitive:unix_close";
    return inchan};
var
 open_process_out=
  function(cmd)
   {var match=pipe(0);
    var out_write=match[2];
    var out_read=match[1];
    var outchan="unknown primitive:caml_ml_open_descriptor_out";
    open_proc(cmd,[2,outchan],out_read,stdout,[0,out_write,0]);
    "unknown primitive:unix_close";
    return outchan};
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
    return [0,inchan,outchan]};
var
 open_proc_full=
  function(cmd,env,proc,input,output,error$1,toclose)
   {var id="unknown primitive:unix_fork";
    var $js$4=id!=0;
    if($js$4)
     {var $js$5=Hashtbl["add"];return $js$5(popen_processes,proc,id)}
    else
     {"unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      var $js$6=List["iter"];
      $js$6(function(prim){return "unknown primitive:unix_close"},toclose);
      try
       {return execve("/bin/sh",["/bin/sh","-c",cmd],env)}
      catch(exn$2){var $js$7=Pervasives["exit"];return $js$7(127)}}};
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
    return [0,inchan,outchan,errchan]};
var
 find_proc_id=
  function(fun_name,proc)
   {try
     {var $js$4=Hashtbl["find"];
      var pid=$js$4(popen_processes,proc);
      var $js$5=Hashtbl["remove"];
      $js$5(popen_processes,proc);
      return pid}
    catch(exn$2)
     {var $js$6=exn$2=Not_found;
      if($js$6)
       {var $js$7=[0,Unix_error,3,fun_name,""];throw $js$7}
      else
       {return "unknown primitive:reraise"}}};
var
 waitpid_non_intr=
  function(pid)
   {try
     {return waitpid(0,pid)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$4=tag$2=Unix_error;
      if($js$4)
       {var match=exn$2[2];
        var $js$5="unknown primitive:isint";
        if($js$5)
         {var $js$6=match!=11;
          if($js$6){var exit=21}else{return waitpid_non_intr(pid)}}
        else
         {var exit=21}}
      else
       {var exit=21}
      switch(exit){case 21:return "unknown primitive:reraise"}}};
var
 close_process_in=
  function(inchan)
   {var pid=find_proc_id("close_process_in",[1,inchan]);
    var $js$4=Pervasives["close_in"];
    $js$4(inchan);
    var $js$5=waitpid_non_intr(pid);
    return $js$5[2]};
var
 close_process_out=
  function(outchan)
   {var pid=find_proc_id("close_process_out",[2,outchan]);
    var $js$4=Pervasives["close_out"];
    $js$4(outchan);
    var $js$5=waitpid_non_intr(pid);
    return $js$5[2]};
var
 close_process=
  function(param)
   {var outchan=param[2];
    var inchan=param[1];
    var pid=find_proc_id("close_process",[0,inchan,outchan]);
    var $js$4=Pervasives["close_in"];
    $js$4(inchan);
    try
     {var $js$5=Pervasives["close_out"];$js$5(outchan)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$6=tag$2=Sys_error;
      if($js$6){}else{"unknown primitive:reraise"}}
    var $js$7=waitpid_non_intr(pid);
    return $js$7[2]};
var
 close_process_full=
  function(param)
   {var errchan=param[3];
    var outchan=param[2];
    var inchan=param[1];
    var pid=find_proc_id("close_process_full",[3,inchan,outchan,errchan]);
    var $js$4=Pervasives["close_in"];
    $js$4(inchan);
    try
     {var $js$5=Pervasives["close_out"];$js$5(outchan)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$6=tag$2=Sys_error;
      if($js$6){}else{"unknown primitive:reraise"}}
    var $js$7=Pervasives["close_in"];
    $js$7(errchan);
    var $js$8=waitpid_non_intr(pid);
    return $js$8[2]};
var
 open_connection=
  function(sockaddr)
   {var $js$4=domain_of_sockaddr(sockaddr);
    var sock=socket($js$4,0,0);
    try
     {connect(sock,sockaddr);
      var $js$5="unknown primitive:caml_ml_open_descriptor_in";
      var $js$6="unknown primitive:caml_ml_open_descriptor_out";
      return [0,$js$5,$js$6]}
    catch(exn$2){"unknown primitive:unix_close";var $js$7=exn$2;throw $js$7}};
var
 shutdown_connection=
  function(inchan)
   {var $js$4="unknown primitive:caml_channel_descriptor";
    return "unknown primitive:unix_shutdown"};
var
 establish_server=
  function(server_fun,sockaddr)
   {var $js$4=domain_of_sockaddr(sockaddr);
    var sock=socket($js$4,0,0);
    setsockopt(sock,2,1);
    "unknown primitive:unix_bind";
    "unknown primitive:unix_listen";
    for(;;)
     {var $js$5=1;
      if($js$5)
       {var match=accept(sock);
        var s=match[1];
        var id="unknown primitive:unix_fork";
        var $js$6=id!=0;
        if($js$6)
         {"unknown primitive:unix_close";var $js$7=waitpid(0,id);0}
        else
         {var $js$8="unknown primitive:unix_fork";
          var $js$9=$js$8!=0;
          if($js$9){var $js$10=Pervasives["exit"];$js$10(0)}else{}
          var inchan="unknown primitive:caml_ml_open_descriptor_in";
          var outchan="unknown primitive:caml_ml_open_descriptor_out";
          server_fun(inchan,outchan);
          var $js$11=Pervasives["close_out"];
          $js$11(outchan);
          var $js$12=Pervasives["exit"];
          $js$12(0)}}
      else
       break}
    return 0};
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
