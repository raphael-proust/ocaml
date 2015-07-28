var match="unknown primitive:caml_sys_get_argv";
var argv=match[2];
var executable_name=match[1];
var match$1="unknown primitive:caml_sys_get_config";
var os_type=match$1[1];
var big_endian="unknown primitive:sys.constant_big_endian";
var word_size="unknown primitive:sys.constant_word_size";
var unix="unknown primitive:sys.constant_ostype_unix";
var win32="unknown primitive:sys.constant_ostype_win32";
var cygwin="unknown primitive:sys.constant_ostype_cygwin";
var max_array_length=(1<<word_size-10)-1;
var max_string_length=word_size/8*max_array_length-1;
var interactive=[0,0];
var
 set_signal=
  function(sig_num,sig_beh)
   {var $js="unknown primitive:caml_install_signal_handler";return 0};
var sigabrt=-1;
var sigalrm=-2;
var sigfpe=-3;
var sighup=-4;
var sigill=-5;
var sigint=-6;
var sigkill=-7;
var sigpipe=-8;
var sigquit=-9;
var sigsegv=-10;
var sigterm=-11;
var sigusr1=-12;
var sigusr2=-13;
var sigchld=-14;
var sigcont=-15;
var sigstop=-16;
var sigtstp=-17;
var sigttin=-18;
var sigttou=-19;
var sigvtalrm=-20;
var sigprof=-21;
var Break="unknown primitive:caml_set_oo_id";
var
 catch_break=
  function(on)
   {var $js=on;
    if($js)
     {return set_signal
              (sigint,[0,function(param){var $js$1=Break;throw $js$1}])}
    else
     {return set_signal(sigint,0)}};
var ocaml_version="4.02.3+dev1-2015-07-10";
module["exports"]=
{"argv":argv,
 "executable_name":executable_name,
 "interactive":interactive,
 "os_type":os_type,
 "unix":unix,
 "win32":win32,
 "cygwin":cygwin,
 "word_size":word_size,
 "big_endian":big_endian,
 "max_string_length":max_string_length,
 "max_array_length":max_array_length,
 "set_signal":set_signal,
 "sigabrt":sigabrt,
 "sigalrm":sigalrm,
 "sigfpe":sigfpe,
 "sighup":sighup,
 "sigill":sigill,
 "sigint":sigint,
 "sigkill":sigkill,
 "sigpipe":sigpipe,
 "sigquit":sigquit,
 "sigsegv":sigsegv,
 "sigterm":sigterm,
 "sigusr1":sigusr1,
 "sigusr2":sigusr2,
 "sigchld":sigchld,
 "sigcont":sigcont,
 "sigstop":sigstop,
 "sigtstp":sigtstp,
 "sigttin":sigttin,
 "sigttou":sigttou,
 "sigvtalrm":sigvtalrm,
 "sigprof":sigprof,
 "Break":Break,
 "catch_break":catch_break,
 "ocaml_version":ocaml_version};
