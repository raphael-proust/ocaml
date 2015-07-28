var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Callback=require("Callback");
var Bytes=require("Bytes");
var Printexc=require("Printexc");
var Hashtbl=require("Hashtbl");
var Array=require("Array");
var Sys=require("Sys");
var Unix_error="unknown primitive:caml_set_oo_id";
var $js=Callback["register_exception"];
$js("Unix.Unix_error",[0,Unix_error,0,"",""]);
var $js$1=Printexc["register_printer"];
var
 match=
  $js$1
   (function(param)
     {var tag=param[1];
      var $js$2=tag=Unix_error;
      if($js$2)
       {var s'=param[4];
        var s=param[3];
        var e=param[2];
        var $js$3="unknown primitive:isint";
        if($js$3)
         {var $js$4=e;
          var $js$5=$js$4[0];
          if($js$5==0)
           {var msg="E2BIG"}
          else
           if($js$5==1)
            {var msg="EACCES"}
           else
            if($js$5==2)
             {var msg="EAGAIN"}
            else
             if($js$5==3)
              {var msg="EBADF"}
             else
              if($js$5==4)
               {var msg="EBUSY"}
              else
               if($js$5==5)
                {var msg="ECHILD"}
               else
                if($js$5==6)
                 {var msg="EDEADLK"}
                else
                 if($js$5==7)
                  {var msg="EDOM"}
                 else
                  if($js$5==8)
                   {var msg="EEXIST"}
                  else
                   if($js$5==9)
                    {var msg="EFAULT"}
                   else
                    if($js$5==10)
                     {var msg="EFBIG"}
                    else
                     if($js$5==11)
                      {var msg="EINTR"}
                     else
                      if($js$5==12)
                       {var msg="EINVAL"}
                      else
                       if($js$5==13)
                        {var msg="EIO"}
                       else
                        if($js$5==14)
                         {var msg="EISDIR"}
                        else
                         if($js$5==15)
                          {var msg="EMFILE"}
                         else
                          if($js$5==16)
                           {var msg="EMLINK"}
                          else
                           if($js$5==17)
                            {var msg="ENAMETOOLONG"}
                           else
                            if($js$5==18)
                             {var msg="ENFILE"}
                            else
                             if($js$5==19)
                              {var msg="ENODEV"}
                             else
                              if($js$5==20)
                               {var msg="ENOENT"}
                              else
                               if($js$5==21)
                                {var msg="ENOEXEC"}
                               else
                                if($js$5==22)
                                 {var msg="ENOLCK"}
                                else
                                 if($js$5==23)
                                  {var msg="ENOMEM"}
                                 else
                                  if($js$5==24)
                                   {var msg="ENOSPC"}
                                  else
                                   if($js$5==25)
                                    {var msg="ENOSYS"}
                                   else
                                    if($js$5==26)
                                     {var msg="ENOTDIR"}
                                    else
                                     if($js$5==27)
                                      {var msg="ENOTEMPTY"}
                                     else
                                      if($js$5==28)
                                       {var msg="ENOTTY"}
                                      else
                                       if($js$5==29)
                                        {var msg="ENXIO"}
                                       else
                                        if($js$5==30)
                                         {var msg="EPERM"}
                                        else
                                         if($js$5==31)
                                          {var msg="EPIPE"}
                                         else
                                          if($js$5==32)
                                           {var msg="ERANGE"}
                                          else
                                           if($js$5==33)
                                            {var msg="EROFS"}
                                           else
                                            if($js$5==34)
                                             {var msg="ESPIPE"}
                                            else
                                             if($js$5==35)
                                              {var msg="ESRCH"}
                                             else
                                              if($js$5==36)
                                               {var msg="EXDEV"}
                                              else
                                               if($js$5==37)
                                                {var msg="EWOULDBLOCK"}
                                               else
                                                if($js$5==38)
                                                 {var msg="EINPROGRESS"}
                                                else
                                                 if($js$5==39)
                                                  {var msg="EALREADY"}
                                                 else
                                                  if($js$5==40)
                                                   {var msg="ENOTSOCK"}
                                                  else
                                                   if($js$5==41)
                                                    {var msg="EDESTADDRREQ"}
                                                   else
                                                    if($js$5==42)
                                                     {var msg="EMSGSIZE"}
                                                    else
                                                     if($js$5==43)
                                                      {var msg="EPROTOTYPE"}
                                                     else
                                                      if($js$5==44)
                                                       {var msg="ENOPROTOOPT"}
                                                      else
                                                       if($js$5==45)
                                                        {var msg="EPROTONOSUPPORT"}
                                                       else
                                                        if($js$5==46)
                                                         {var msg="ESOCKTNOSUPPORT"}
                                                        else
                                                         if($js$5==47)
                                                          {var msg="EOPNOTSUPP"}
                                                         else
                                                          if($js$5==48)
                                                           {var msg="EPFNOSUPPORT"}
                                                          else
                                                           if($js$5==49)
                                                            {var msg="EAFNOSUPPORT"}
                                                           else
                                                            if($js$5==50)
                                                             {var msg="EADDRINUSE"}
                                                            else
                                                             if($js$5==51)
                                                              {var msg="EADDRNOTAVAIL"}
                                                             else
                                                              if($js$5==52)
                                                               {var msg="ENETDOWN"}
                                                              else
                                                               if($js$5==53)
                                                                {var msg="ENETUNREACH"}
                                                               else
                                                                if($js$5==54)
                                                                 {var msg="ENETRESET"}
                                                                else
                                                                 if($js$5==55)
                                                                  {var msg="ECONNABORTED"}
                                                                 else
                                                                  if($js$5==56)
                                                                   {var msg="ECONNRESET"}
                                                                  else
                                                                   if($js$5==57)
                                                                    {var msg="ENOBUFS"}
                                                                   else
                                                                    if($js$5==58)
                                                                     {var msg="EISCONN"}
                                                                    else
                                                                     if($js$5==59)
                                                                      {var msg="ENOTCONN"}
                                                                     else
                                                                      if($js$5==60)
                                                                       {var msg="ESHUTDOWN"}
                                                                      else
                                                                       if($js$5==61)
                                                                        {var msg="ETOOMANYREFS"}
                                                                       else
                                                                        if($js$5==62)
                                                                         {var msg="ETIMEDOUT"}
                                                                        else
                                                                         if($js$5==63)
                                                                          {var msg="ECONNREFUSED"}
                                                                         else
                                                                          if($js$5==64)
                                                                           {var msg="EHOSTDOWN"}
                                                                          else
                                                                           if($js$5==65)
                                                                            {var msg="EHOSTUNREACH"}
                                                                           else
                                                                            if($js$5==66)
                                                                             {var msg="ELOOP"}
                                                                            else
                                                                             if($js$5==67){var msg="EOVERFLOW"}}
        else
         {var x=e[1];
          var $js$6=Printf["sprintf"];
          var
           msg=
            $js$6([0,[11,"EUNKNOWNERR ",[4,0,0,0,0]],"EUNKNOWNERR %d"],x)}
        var $js$7=Printf["sprintf"];
        var
         $js$8=
          $js$7
           ([0,
             [11,
              "Unix.Unix_error(Unix.",
              [2,0,[11,", ",[3,0,[11,", ",[3,0,[12,41,0]]]]]]],
             "Unix.Unix_error(Unix.%s, %S, %S)"],
            msg,
            s,
            s');
        return [0,$js$8]}
      else
       {return 0}});
var
 handle_unix_error=
  function(f,arg)
   {try
     {return f(arg)}
    catch(exn)
     {var tag=exn[1];
      var $js$2=tag=Unix_error;
      if($js$2)
       {var arg$1=exn[4];
        var fun_name=exn[3];
        var err=exn[2];
        var $js$3=Pervasives["prerr_string"];
        var $js$4=Sys["argv"][0];
        $js$3($js$4);
        var $js$5=Pervasives["prerr_string"];
        $js$5(': "');
        var $js$6=Pervasives["prerr_string"];
        $js$6(fun_name);
        var $js$7=Pervasives["prerr_string"];
        $js$7('" failed');
        var $js$8=arg$1["length"]>0;
        if($js$8)
         {var $js$9=Pervasives["prerr_string"];
          $js$9(' on "');
          var $js$10=Pervasives["prerr_string"];
          $js$10(arg$1);
          var $js$11=Pervasives["prerr_string"];
          $js$11('"')}
        else
         {}
        var $js$12=Pervasives["prerr_string"];
        $js$12(": ");
        var $js$13=Pervasives["prerr_endline"];
        var $js$14="unknown primitive:unix_error_message";
        $js$13($js$14);
        var $js$15=Pervasives["exit"];
        return $js$15(2)}
      else
       {return "unknown primitive:reraise"}}};
var stdin=0;
var stdout=1;
var stderr=2;
var
 read=
  function(fd,buf,ofs,len)
   {var $js$2=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$2)
     {var $js$3=Pervasives["invalid_arg"];return $js$3("Unix.read")}
    else
     {return "unknown primitive:unix_read"}};
var
 write=
  function(fd,buf,ofs,len)
   {var $js$2=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$2)
     {var $js$3=Pervasives["invalid_arg"];return $js$3("Unix.write")}
    else
     {return "unknown primitive:unix_write"}};
var
 single_write=
  function(fd,buf,ofs,len)
   {var $js$2=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$2)
     {var $js$3=Pervasives["invalid_arg"];return $js$3("Unix.single_write")}
    else
     {return "unknown primitive:unix_single_write"}};
var
 write_substring=
  function(fd,buf,ofs,len)
   {var $js$2=Bytes["unsafe_of_string"];
    var $js$3=$js$2(buf);
    return write(fd,$js$3,ofs,len)};
var
 single_write_substring=
  function(fd,buf,ofs,len)
   {var $js$2=Bytes["unsafe_of_string"];
    var $js$3=$js$2(buf);
    return single_write(fd,$js$3,ofs,len)};
var LargeFile=[0];
var
 try_set_close_on_exec=
  function(fd)
   {try
     {"unknown primitive:unix_set_close_on_exec";return 1}
    catch(exn)
     {var tag=exn[1];
      var $js$2=tag=Invalid_argument;
      if($js$2){return 0}else{return "unknown primitive:reraise"}}};
var
 pause=
  function(param)
   {var sigs="unknown primitive:unix_sigprocmask";
    return "unknown primitive:unix_sigsuspend"};
var is_inet6_addr=function(s){return s["length"]=16};
var inet_addr_any="unknown primitive:unix_inet_addr_of_string";
var inet_addr_loopback="unknown primitive:unix_inet_addr_of_string";
try
 {var inet6_addr_any="unknown primitive:unix_inet_addr_of_string"}
catch(exn)
 {var tag=exn[1];
  var $js$2=tag=Failure;
  if($js$2)
   {var inet6_addr_any=inet_addr_any}
  else
   {var inet6_addr_any="unknown primitive:reraise"}}
try
 {var inet6_addr_loopback="unknown primitive:unix_inet_addr_of_string"}
catch(exn$1)
 {var tag$1=exn$1[1];
  var $js$3=tag$1=Failure;
  if($js$3)
   {var inet6_addr_loopback=inet_addr_loopback}
  else
   {var inet6_addr_loopback="unknown primitive:reraise"}}
var
 domain_of_sockaddr=
  function(param)
   {var $js$4=param;
    if($js$4==0)
     {return 0}
    else
     if($js$4==1)
      {var a=param[1];
       var $js$5=is_inet6_addr(a);
       if($js$5){return 2}else{return 1}}};
var
 recv=
  function(fd,buf,ofs,len,flags)
   {var $js$4=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("Unix.recv")}
    else
     {return "unknown primitive:unix_recv"}};
var
 recvfrom=
  function(fd,buf,ofs,len,flags)
   {var $js$4=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("Unix.recvfrom")}
    else
     {return "unknown primitive:unix_recvfrom"}};
var
 send=
  function(fd,buf,ofs,len,flags)
   {var $js$4=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("Unix.send")}
    else
     {return "unknown primitive:unix_send"}};
var
 sendto=
  function(fd,buf,ofs,len,flags,addr)
   {var $js$4=ofs<0||len<0||ofs>buf["length"]-len;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("Unix.sendto")}
    else
     {return "unknown primitive:unix_sendto"}};
var
 send_substring=
  function(fd,buf,ofs,len,flags)
   {var $js$4=Bytes["unsafe_of_string"];
    var $js$5=$js$4(buf);
    return send(fd,$js$5,ofs,len,flags)};
var
 sendto_substring=
  function(fd,buf,ofs,len,flags,addr)
   {var $js$4=Bytes["unsafe_of_string"];
    var $js$5=$js$4(buf);
    return sendto(fd,$js$5,ofs,len,flags,addr)};
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
var getsockopt=function(fd,opt){var $js$4=SO[6];return $js$4(SO[1],fd,opt)};
var
 setsockopt=
  function(fd,opt,v){var $js$4=SO[7];return $js$4(SO[1],fd,opt,v)};
var
 getsockopt_int=
  function(fd,opt){var $js$4=SO[6];return $js$4(SO[2],fd,opt)};
var
 setsockopt_int=
  function(fd,opt,v){var $js$4=SO[7];return $js$4(SO[2],fd,opt,v)};
var
 getsockopt_optint=
  function(fd,opt){var $js$4=SO[6];return $js$4(SO[3],fd,opt)};
var
 setsockopt_optint=
  function(fd,opt,v){var $js$4=SO[7];return $js$4(SO[3],fd,opt,v)};
var
 getsockopt_float=
  function(fd,opt){var $js$4=SO[6];return $js$4(SO[4],fd,opt)};
var
 setsockopt_float=
  function(fd,opt,v){var $js$4=SO[7];return $js$4(SO[4],fd,opt,v)};
var getsockopt_error=function(fd){var $js$4=SO[6];return $js$4(SO[5],fd,0)};
var
 getaddrinfo_emulation=
  function(node,service,opts)
   {var opt_socktype=[0,0];
    var opt_protocol=[0,0];
    var opt_passive=[0,0];
    var $js$4=List["iter"];
    $js$4
     (function(param)
       {var $js$5=param;
        if(typeof $js$5=="number")
         {if($js$5==2){return opt_passive[1]=1,0}}
        else
         {var $js$6=$js$5[0];
          if($js$6==1)
           {var s=param[1];return opt_socktype[1]=[0,s],0}
          else
           if($js$6==2)
            {var p=param[1];return opt_protocol[1]=p,0}
           else
            {var exit=95}}
        switch(exit){case 95:return 0}},
      opts);
    var
     get_port=
      function(ty,kind)
       {var $js$5="unknown primitive:caml_string_equal";
        if($js$5)
         {return [0,[0,ty,0],0]}
        else
         {try
           {var $js$6="unknown primitive:caml_int_of_string";
            var $js$7=[0,ty,$js$6];
            return [0,$js$7,0]}
          catch(exn$2)
           {var tag$2=exn$2[1];
            var $js$8=tag$2=Failure;
            if($js$8)
             {try
               {var $js$9="unknown primitive:unix_getservbyname";
                var $js$10=$js$9[3];
                var $js$11=[0,ty,$js$10];
                return [0,$js$11,0]}
              catch(exn$3)
               {var $js$12=exn$3=Not_found;
                if($js$12){return 0}else{return "unknown primitive:reraise"}}}
            else
             {return "unknown primitive:reraise"}}}};
    var match$1=opt_socktype[1];
    var $js$5=match$1;
    if($js$5)
     {var ty=match$1[1];
      var $js$6=ty!=1;
      if($js$6)
       {var $js$7=ty!=0;
        if($js$7)
         {var $js$8="unknown primitive:caml_string_equal";
          if($js$8){var ports=[0,[0,ty,0],0]}else{var ports=0}}
        else
         {var ports=get_port(0,"tcp")}}
      else
       {var ports=get_port(1,"udp")}}
    else
     {var $js$9=Pervasives["@"];
      var $js$10=get_port(0,"tcp");
      var $js$11=get_port(1,"udp");
      var ports=$js$9($js$10,$js$11)}
    var $js$12="unknown primitive:caml_string_equal";
    if($js$12)
     {var $js$13=List["mem"];
      var $js$14=$js$13(2,opts);
      if($js$14)
       {var addresses=[0,[0,inet_addr_any,"0.0.0.0"],0]}
      else
       {var addresses=[0,[0,inet_addr_loopback,"127.0.0.1"],0]}}
    else
     {try
       {var $js$15="unknown primitive:unix_inet_addr_of_string";
        var $js$16=[0,$js$15,node];
        var addresses=[0,$js$16,0]}
      catch(exn$2)
       {var tag$2=exn$2[1];
        var $js$17=tag$2=Failure;
        if($js$17)
         {try
           {var he="unknown primitive:unix_gethostbyname";
            var $js$18=List["map"];
            var $js$19=Array["to_list"];
            var $js$20=$js$19(he[4]);
            var addresses=$js$18(function(a){return [0,a,he[1]]},$js$20)}
          catch(exn$3)
           {var $js$21=exn$3=Not_found;
            if($js$21)
             {var addresses=0}
            else
             {var addresses="unknown primitive:reraise"}}}
        else
         {var addresses="unknown primitive:reraise"}}}
    var $js$22=List["flatten"];
    var $js$23=List["map"];
    var
     $js$24=
      $js$23
       (function(param)
         {var port=param[2];
          var ty$1=param[1];
          var $js$25=List["map"];
          return $js$25
                  (function(param$1)
                    {var name=param$1[2];
                     var addr=param$1[1];
                     return [0,1,ty$1,opt_protocol[1],[1,addr,port],name]},
                   addresses)},
        ports);
    return $js$22($js$24)};
var
 getaddrinfo=
  function(node,service,opts)
   {try
     {var $js$4=List["rev"];
      var $js$5="unknown primitive:unix_getaddrinfo";
      return $js$4($js$5)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$6=tag$2=Invalid_argument;
      if($js$6)
       {return getaddrinfo_emulation(node,service,opts)}
      else
       {return "unknown primitive:reraise"}}};
var
 getnameinfo_emulation=
  function(addr,opts)
   {var $js$4=addr;
    if($js$4==0)
     {var f=addr[1];return [0,"",f]}
    else
     if($js$4==1)
      {var p=addr[2];
       var a=addr[1];
       try
        {var $js$5=List["mem"];
         var $js$6=$js$5(1,opts);
         if($js$6){var $js$7=Not_found;throw $js$7}else{}
         var $js$8="unknown primitive:unix_gethostbyaddr";
         var hostname=$js$8[1]}
       catch(exn$2)
        {var $js$9=exn$2=Not_found;
         if($js$9)
          {var $js$10=List["mem"];
           var $js$11=$js$10(2,opts);
           if($js$11){var $js$12=Not_found;throw $js$12}else{}
           var hostname="unknown primitive:unix_string_of_inet_addr"}
         else
          {var hostname="unknown primitive:reraise"}}
       try
        {var $js$13=List["mem"];
         var $js$14=$js$13(3,opts);
         if($js$14){var $js$15=Not_found;throw $js$15}else{}
         var $js$16=List["mem"];
         var $js$17=$js$16(4,opts);
         if($js$17){var kind="udp"}else{var kind="tcp"}
         var $js$18="unknown primitive:unix_getservbyport";
         var service=$js$18[1]}
       catch(exn$3)
        {var $js$19=exn$3=Not_found;
         if($js$19)
          {var $js$20=Pervasives["string_of_int"];var service=$js$20(p)}
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
      var $js$4=tag$2=Invalid_argument;
      if($js$4)
       {return getnameinfo_emulation(addr,opts)}
      else
       {return "unknown primitive:reraise"}}};
var
 waitpid_non_intr=
  function(pid)
   {try
     {return "unknown primitive:unix_waitpid"}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$4=tag$2=Unix_error;
      if($js$4)
       {var match$1=exn$2[2];
        var $js$5="unknown primitive:isint";
        if($js$5)
         {var $js$6=match$1!=11;
          if($js$6){var exit=75}else{return waitpid_non_intr(pid)}}
        else
         {var exit=75}}
      else
       {var exit=75}
      switch(exit){case 75:return "unknown primitive:reraise"}}};
var
 system=
  function(cmd)
   {var id="unknown primitive:unix_fork";
    var $js$4=id!=0;
    if($js$4)
     {var $js$5=waitpid_non_intr(id);return $js$5[2]}
    else
     {try
       {return "unknown primitive:unix_execv"}
      catch(exn$2){var $js$6=Pervasives["exit"];return $js$6(127)}}};
var
 safe_dup=
  function(fd)
   {var new_fd="unknown primitive:unix_dup";
    var $js$4=new_fd>=3;
    if($js$4)
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
      var $js$4=tag$2=Unix_error;
      if($js$4){return 0}else{return "unknown primitive:reraise"}}};
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
    var $js$4=id!=0;
    if($js$4)
     {return id}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return "unknown primitive:unix_execvp"}
      catch(exn$2){var $js$5=Pervasives["exit"];return $js$5(127)}}};
var
 create_process_env=
  function(cmd,args,env,new_stdin,new_stdout,new_stderr)
   {var id="unknown primitive:unix_fork";
    var $js$4=id!=0;
    if($js$4)
     {return id}
    else
     {try
       {perform_redirections(new_stdin,new_stdout,new_stderr);
        return "unknown primitive:unix_execvpe"}
      catch(exn$2){var $js$5=Pervasives["exit"];return $js$5(127)}}};
var $js$4=Hashtbl["create"];
var popen_processes=$js$4(0,7);
var
 open_proc=
  function(cmd,proc,input,output,toclose)
   {var $js$5=List["for_all"];
    var cloexec=$js$5(try_set_close_on_exec,toclose);
    var id="unknown primitive:unix_fork";
    var $js$6=id!=0;
    if($js$6)
     {var $js$7=Hashtbl["add"];return $js$7(popen_processes,proc,id)}
    else
     {var $js$8=input!=stdin;
      if($js$8)
       {"unknown primitive:unix_dup2";"unknown primitive:unix_close"}
      else
       {}
      var $js$9=output!=stdout;
      if($js$9)
       {"unknown primitive:unix_dup2";"unknown primitive:unix_close"}
      else
       {}
      var $js$10=!cloexec;
      if($js$10)
       {var $js$11=List["iter"];
        $js$11(function(prim){return "unknown primitive:unix_close"},toclose)}
      else
       {}
      try
       {return "unknown primitive:unix_execv"}
      catch(exn$2){var $js$12=Pervasives["exit"];return $js$12(127)}}};
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
     {var $js$5=Pervasives["close_in"];
      $js$5(inchan);
      "unknown primitive:unix_close";
      var $js$6=e;
      throw $js$6}
    "unknown primitive:unix_close";
    return inchan};
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
     {var $js$5=Pervasives["close_out"];
      $js$5(outchan);
      "unknown primitive:unix_close";
      var $js$6=e;
      throw $js$6}
    "unknown primitive:unix_close";
    return outchan};
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
      return [0,inchan,outchan]}
    catch(e)
     {var $js$5=List["iter"];
      $js$5
       (function(prim){return "unknown primitive:unix_close"},fds_to_close[1]);
      var $js$6=e;
      throw $js$6}};
var
 open_proc_full=
  function(cmd,env,proc,input,output,error$1,toclose)
   {var $js$5=List["for_all"];
    var cloexec=$js$5(try_set_close_on_exec,toclose);
    var id="unknown primitive:unix_fork";
    var $js$6=id!=0;
    if($js$6)
     {var $js$7=Hashtbl["add"];return $js$7(popen_processes,proc,id)}
    else
     {"unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      "unknown primitive:unix_dup2";
      "unknown primitive:unix_close";
      var $js$8=!cloexec;
      if($js$8)
       {var $js$9=List["iter"];
        $js$9(function(prim){return "unknown primitive:unix_close"},toclose)}
      else
       {}
      try
       {return "unknown primitive:unix_execve"}
      catch(exn$2){var $js$10=Pervasives["exit"];return $js$10(127)}}};
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
      return [0,inchan,outchan,errchan]}
    catch(e)
     {var $js$5=List["iter"];
      $js$5
       (function(prim){return "unknown primitive:unix_close"},fds_to_close[1]);
      var $js$6=e;
      throw $js$6}};
var
 find_proc_id=
  function(fun_name,proc)
   {try
     {var $js$5=Hashtbl["find"];
      var pid=$js$5(popen_processes,proc);
      var $js$6=Hashtbl["remove"];
      $js$6(popen_processes,proc);
      return pid}
    catch(exn$2)
     {var $js$7=exn$2=Not_found;
      if($js$7)
       {var $js$8=[0,Unix_error,3,fun_name,""];throw $js$8}
      else
       {return "unknown primitive:reraise"}}};
var
 close_process_in=
  function(inchan)
   {var pid=find_proc_id("close_process_in",[1,inchan]);
    var $js$5=Pervasives["close_in"];
    $js$5(inchan);
    var $js$6=waitpid_non_intr(pid);
    return $js$6[2]};
var
 close_process_out=
  function(outchan)
   {var pid=find_proc_id("close_process_out",[2,outchan]);
    var $js$5=Pervasives["close_out"];
    $js$5(outchan);
    var $js$6=waitpid_non_intr(pid);
    return $js$6[2]};
var
 close_process=
  function(param)
   {var outchan=param[2];
    var inchan=param[1];
    var pid=find_proc_id("close_process",[0,inchan,outchan]);
    var $js$5=Pervasives["close_in"];
    $js$5(inchan);
    try
     {var $js$6=Pervasives["close_out"];$js$6(outchan)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$7=tag$2=Sys_error;
      if($js$7){}else{"unknown primitive:reraise"}}
    var $js$8=waitpid_non_intr(pid);
    return $js$8[2]};
var
 close_process_full=
  function(param)
   {var errchan=param[3];
    var outchan=param[2];
    var inchan=param[1];
    var pid=find_proc_id("close_process_full",[3,inchan,outchan,errchan]);
    var $js$5=Pervasives["close_in"];
    $js$5(inchan);
    try
     {var $js$6=Pervasives["close_out"];$js$6(outchan)}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$7=tag$2=Sys_error;
      if($js$7){}else{"unknown primitive:reraise"}}
    var $js$8=Pervasives["close_in"];
    $js$8(errchan);
    var $js$9=waitpid_non_intr(pid);
    return $js$9[2]};
var
 open_connection=
  function(sockaddr)
   {var $js$5=domain_of_sockaddr(sockaddr);
    var sock="unknown primitive:unix_socket";
    try
     {"unknown primitive:unix_connect";
      var $js$6=try_set_close_on_exec(sock);
      0;
      var $js$7="unknown primitive:caml_ml_open_descriptor_in";
      var $js$8="unknown primitive:caml_ml_open_descriptor_out";
      return [0,$js$7,$js$8]}
    catch(exn$2){"unknown primitive:unix_close";var $js$9=exn$2;throw $js$9}};
var
 shutdown_connection=
  function(inchan)
   {var $js$5="unknown primitive:caml_channel_descriptor";
    return "unknown primitive:unix_shutdown"};
var
 accept_non_intr=
  function(s)
   {try
     {return "unknown primitive:unix_accept"}
    catch(exn$2)
     {var tag$2=exn$2[1];
      var $js$5=tag$2=Unix_error;
      if($js$5)
       {var match$1=exn$2[2];
        var $js$6="unknown primitive:isint";
        if($js$6)
         {var $js$7=match$1!=11;
          if($js$7){var exit=7}else{return accept_non_intr(s)}}
        else
         {var exit=7}}
      else
       {var exit=7}
      switch(exit){case 7:return "unknown primitive:reraise"}}};
var
 establish_server=
  function(server_fun,sockaddr)
   {var $js$5=domain_of_sockaddr(sockaddr);
    var sock="unknown primitive:unix_socket";
    setsockopt(sock,2,1);
    "unknown primitive:unix_bind";
    "unknown primitive:unix_listen";
    for(;;)
     {var $js$6=1;
      if($js$6)
       {var match$1=accept_non_intr(sock);
        var s=match$1[1];
        var id="unknown primitive:unix_fork";
        var $js$7=id!=0;
        if($js$7)
         {"unknown primitive:unix_close";var $js$8=waitpid_non_intr(id);0}
        else
         {var $js$9="unknown primitive:unix_fork";
          var $js$10=$js$9!=0;
          if($js$10){var $js$11=Pervasives["exit"];$js$11(0)}else{}
          "unknown primitive:unix_close";
          var $js$12=try_set_close_on_exec(s);
          0;
          var inchan="unknown primitive:caml_ml_open_descriptor_in";
          var outchan="unknown primitive:caml_ml_open_descriptor_out";
          server_fun(inchan,outchan);
          var $js$13=Pervasives["exit"];
          $js$13(0)}}
      else
       break}
    return 0};
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
