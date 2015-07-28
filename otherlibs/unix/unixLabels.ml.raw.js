var Unix=require("Unix");
var include=Unix;
var Unix_error=include[1];
var error_message=include[2];
var handle_unix_error=include[3];
var environment=include[4];
var getenv=include[5];
var putenv=include[6];
var execv=include[7];
var execve=include[8];
var execvp=include[9];
var execvpe=include[10];
var fork=include[11];
var wait=include[12];
var waitpid=include[13];
var system=include[14];
var getpid=include[15];
var getppid=include[16];
var nice=include[17];
var stdin=include[18];
var stdout=include[19];
var stderr=include[20];
var openfile=include[21];
var close=include[22];
var read=include[23];
var write=include[24];
var single_write=include[25];
var write_substring=include[26];
var single_write_substring=include[27];
var in_channel_of_descr=include[28];
var out_channel_of_descr=include[29];
var descr_of_in_channel=include[30];
var descr_of_out_channel=include[31];
var lseek=include[32];
var truncate=include[33];
var ftruncate=include[34];
var stat=include[35];
var lstat=include[36];
var fstat=include[37];
var isatty=include[38];
var unlink=include[40];
var rename=include[41];
var link=include[42];
var chmod=include[43];
var fchmod=include[44];
var chown=include[45];
var fchown=include[46];
var umask=include[47];
var access=include[48];
var dup=include[49];
var dup2=include[50];
var set_nonblock=include[51];
var clear_nonblock=include[52];
var set_close_on_exec=include[53];
var clear_close_on_exec=include[54];
var mkdir=include[55];
var rmdir=include[56];
var chdir=include[57];
var getcwd=include[58];
var chroot=include[59];
var opendir=include[60];
var readdir=include[61];
var rewinddir=include[62];
var closedir=include[63];
var pipe=include[64];
var mkfifo=include[65];
var create_process=include[66];
var create_process_env=include[67];
var open_process_in=include[68];
var open_process_out=include[69];
var open_process=include[70];
var open_process_full=include[71];
var close_process_in=include[72];
var close_process_out=include[73];
var close_process=include[74];
var close_process_full=include[75];
var symlink=include[76];
var readlink=include[77];
var select=include[78];
var lockf=include[79];
var kill=include[80];
var sigprocmask=include[81];
var sigpending=include[82];
var sigsuspend=include[83];
var pause=include[84];
var time=include[85];
var gettimeofday=include[86];
var gmtime=include[87];
var localtime=include[88];
var mktime=include[89];
var alarm=include[90];
var sleep=include[91];
var times=include[92];
var utimes=include[93];
var getitimer=include[94];
var setitimer=include[95];
var getuid=include[96];
var geteuid=include[97];
var setuid=include[98];
var getgid=include[99];
var getegid=include[100];
var setgid=include[101];
var getgroups=include[102];
var setgroups=include[103];
var initgroups=include[104];
var getlogin=include[105];
var getpwnam=include[106];
var getgrnam=include[107];
var getpwuid=include[108];
var getgrgid=include[109];
var inet_addr_of_string=include[110];
var string_of_inet_addr=include[111];
var inet_addr_any=include[112];
var inet_addr_loopback=include[113];
var inet6_addr_any=include[114];
var inet6_addr_loopback=include[115];
var socket=include[116];
var domain_of_sockaddr=include[117];
var socketpair=include[118];
var accept=include[119];
var bind=include[120];
var connect=include[121];
var listen=include[122];
var shutdown=include[123];
var getsockname=include[124];
var getpeername=include[125];
var recv=include[126];
var recvfrom=include[127];
var send=include[128];
var send_substring=include[129];
var sendto=include[130];
var sendto_substring=include[131];
var getsockopt=include[132];
var setsockopt=include[133];
var getsockopt_int=include[134];
var setsockopt_int=include[135];
var getsockopt_optint=include[136];
var setsockopt_optint=include[137];
var getsockopt_float=include[138];
var setsockopt_float=include[139];
var getsockopt_error=include[140];
var open_connection=include[141];
var shutdown_connection=include[142];
var establish_server=include[143];
var gethostname=include[144];
var gethostbyname=include[145];
var gethostbyaddr=include[146];
var getprotobyname=include[147];
var getprotobynumber=include[148];
var getservbyname=include[149];
var getservbyport=include[150];
var getaddrinfo=include[151];
var getnameinfo=include[152];
var tcgetattr=include[153];
var tcsetattr=include[154];
var tcsendbreak=include[155];
var tcdrain=include[156];
var tcflush=include[157];
var tcflow=include[158];
var setsid=include[159];
module["exports"]=
{"Unix_error":Unix_error,
 "error_message":error_message,
 "handle_unix_error":handle_unix_error,
 "environment":environment,
 "getenv":getenv,
 "putenv":putenv,
 "execv":execv,
 "execve":execve,
 "execvp":execvp,
 "execvpe":execvpe,
 "fork":fork,
 "wait":wait,
 "waitpid":waitpid,
 "system":system,
 "getpid":getpid,
 "getppid":getppid,
 "nice":nice,
 "stdin":stdin,
 "stdout":stdout,
 "stderr":stderr,
 "openfile":openfile,
 "close":close,
 "read":read,
 "write":write,
 "single_write":single_write,
 "write_substring":write_substring,
 "single_write_substring":single_write_substring,
 "in_channel_of_descr":in_channel_of_descr,
 "out_channel_of_descr":out_channel_of_descr,
 "descr_of_in_channel":descr_of_in_channel,
 "descr_of_out_channel":descr_of_out_channel,
 "lseek":lseek,
 "truncate":truncate,
 "ftruncate":ftruncate,
 "stat":stat,
 "lstat":lstat,
 "fstat":fstat,
 "isatty":isatty,
 "unknown block:(field 38 (global Unix!))":
 unknown block:(field 38 (global Unix!)),
 "unlink":unlink,
 "rename":rename,
 "link":link,
 "chmod":chmod,
 "fchmod":fchmod,
 "chown":chown,
 "fchown":fchown,
 "umask":umask,
 "access":access,
 "dup":dup,
 "dup2":dup2,
 "set_nonblock":set_nonblock,
 "clear_nonblock":clear_nonblock,
 "set_close_on_exec":set_close_on_exec,
 "clear_close_on_exec":clear_close_on_exec,
 "mkdir":mkdir,
 "rmdir":rmdir,
 "chdir":chdir,
 "getcwd":getcwd,
 "chroot":chroot,
 "opendir":opendir,
 "readdir":readdir,
 "rewinddir":rewinddir,
 "closedir":closedir,
 "pipe":pipe,
 "mkfifo":mkfifo,
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
 "symlink":symlink,
 "readlink":readlink,
 "select":select,
 "lockf":lockf,
 "kill":kill,
 "sigprocmask":sigprocmask,
 "sigpending":sigpending,
 "sigsuspend":sigsuspend,
 "pause":pause,
 "time":time,
 "gettimeofday":gettimeofday,
 "gmtime":gmtime,
 "localtime":localtime,
 "mktime":mktime,
 "alarm":alarm,
 "sleep":sleep,
 "times":times,
 "utimes":utimes,
 "getitimer":getitimer,
 "setitimer":setitimer,
 "getuid":getuid,
 "geteuid":geteuid,
 "setuid":setuid,
 "getgid":getgid,
 "getegid":getegid,
 "setgid":setgid,
 "getgroups":getgroups,
 "setgroups":setgroups,
 "initgroups":initgroups,
 "getlogin":getlogin,
 "getpwnam":getpwnam,
 "getgrnam":getgrnam,
 "getpwuid":getpwuid,
 "getgrgid":getgrgid,
 "inet_addr_of_string":inet_addr_of_string,
 "string_of_inet_addr":string_of_inet_addr,
 "inet_addr_any":inet_addr_any,
 "inet_addr_loopback":inet_addr_loopback,
 "inet6_addr_any":inet6_addr_any,
 "inet6_addr_loopback":inet6_addr_loopback,
 "socket":socket,
 "domain_of_sockaddr":domain_of_sockaddr,
 "socketpair":socketpair,
 "accept":accept,
 "bind":bind,
 "connect":connect,
 "listen":listen,
 "shutdown":shutdown,
 "getsockname":getsockname,
 "getpeername":getpeername,
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
 "gethostname":gethostname,
 "gethostbyname":gethostbyname,
 "gethostbyaddr":gethostbyaddr,
 "getprotobyname":getprotobyname,
 "getprotobynumber":getprotobynumber,
 "getservbyname":getservbyname,
 "getservbyport":getservbyport,
 "getaddrinfo":getaddrinfo,
 "getnameinfo":getnameinfo,
 "tcgetattr":tcgetattr,
 "tcsetattr":tcsetattr,
 "tcsendbreak":tcsendbreak,
 "tcdrain":tcdrain,
 "tcflush":tcflush,
 "tcflow":tcflow,
 "setsid":setsid};
