// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimitive=require("./camlPrimitive.js");


var match=CamlPrimitive["caml_sys_get_argv"](/* () */0);

var argv=match[2];

var executable_name=match[1];

var match$1=CamlPrimitive["caml_sys_get_config"](/* () */0);

var os_type=match$1[1];

var big_endian=false;

var word_size=64;

var unix=true;

var win32=false;

var cygwin=false;

var max_array_length=(1<<word_size-10)-1;

var max_string_length=word_size/8*max_array_length-1;

var interactive=[0,/* false */0];

var
 set_signal=
  function(sig_num,sig_beh)
   {return CamlPrimitive["caml_install_signal_handler"](sig_num,sig_beh);};

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

var Break=CamlPrimitive["caml_set_oo_id"]([248,"Sys.Break",0]);

var
 catch_break=
  function(on)
   {if(on)
     {return set_signal
              (sigint,/* Signal_handle */[0,function(param){throw Break;}]);
      }
    else
     {return set_signal(sigint,/* Signal_default */0);}
    };

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

