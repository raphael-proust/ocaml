// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Sys=require("Sys");


var version=Sys["ocaml_version"];

var
 standard_library_default=
  "/Users/hongbozhang/.opam/4.02.3+local-git-master/lib/ocaml";

try
 {var standard_library="unknown primitive:caml_sys_getenv";}
catch(exn)
 {if(exn=Not_found)
   {try
     {var standard_library="unknown primitive:caml_sys_getenv";}
    catch(exn$1)
     {if(exn$1=Not_found)
       {var standard_library=standard_library_default;}
      else
       {throw exn$1;}
      }
    }
  else
   {throw exn;}
  }

var
 standard_runtime=
  "/Users/hongbozhang/.opam/4.02.3+local-git-master/bin/ocamlrun";

var ccomp_type="cc";

var
 bytecomp_c_compiler=
  "gcc -O  -Wall -D_FILE_OFFSET_BITS=64 -D_REENTRANT -O ";

var bytecomp_c_libraries="-lcurses -lpthread";

var native_c_compiler="gcc -O  -D_FILE_OFFSET_BITS=64 -D_REENTRANT";

var native_c_libraries="";

var native_pack_linker="ld -r -arch x86_64  -o ";

var ranlib="ranlib";

var ar="ar";

var cc_profile="-pg";

var
 mkdll=
  "gcc -bundle -flat_namespace -undefined suppress -Wl,-no_compact_unwind";

var mkexe="gcc -Wl,-no_compact_unwind";

var
 mkmaindll=
  "gcc -bundle -flat_namespace -undefined suppress -Wl,-no_compact_unwind";

var exec_magic_number="Caml1999X011";

var cmi_magic_number="Caml1999I017";

var cmo_magic_number="Caml1999O010";

var cma_magic_number="Caml1999A011";

var cmx_magic_number="Caml1999Y014";

var cmxa_magic_number="Caml1999Z013";

var ast_impl_magic_number="Caml1999M016";

var ast_intf_magic_number="Caml1999N015";

var cmxs_magic_number="Caml2007D002";

var cmt_magic_number="Caml2012T004";

var load_path=[0,0];

var interface_suffix=[0,".mli"];

var max_tag=245;

var lazy_tag=246;

var max_young_wosize=256;

var stack_threshold=256;

var architecture="amd64";

var model="default";

var system="macosx";

var asm="clang -arch x86_64 -c";

var asm_cfi_supported=1;

var with_frame_pointers=0;

var ext_obj=".o";

var ext_asm=".s";

var ext_lib=".a";

var ext_dll=".so";

var host="x86_64-apple-darwin14.3.0";

var target="x86_64-apple-darwin14.3.0";

var match=Sys["os_type"];

var exit;

switch(match)
 {case "Cygwin":exit=5;
  case "Unix":var default_executable_name="a.out";
  case "Win32":exit=5;
  default:exit=6;}

switch(exit)
 {case 6:var default_executable_name="camlprog";
  case 5:var default_executable_name="camlprog.exe";
  }

var systhread_supported=1;

var
 print_config=
  function(oc)
   {var
     p=
      function(name,valu)
       {return Printf["fprintf"]
                (oc,[0,[2,0,[11,": ",[2,0,[12,10,0]]]],"%s: %s\n"],name,valu);
        };
    
    var
     p_bool=
      function(name,valu)
       {return Printf["fprintf"]
                (oc,[0,[2,0,[11,": ",[9,[12,10,0]]]],"%s: %B\n"],name,valu);
        };
    
    p("version",version);
    p("standard_library_default",standard_library_default);
    p("standard_library",standard_library);
    p("standard_runtime",standard_runtime);
    p("ccomp_type",ccomp_type);
    p("bytecomp_c_compiler",bytecomp_c_compiler);
    p("bytecomp_c_libraries",bytecomp_c_libraries);
    p("native_c_compiler",native_c_compiler);
    p("native_c_libraries",native_c_libraries);
    p("native_pack_linker",native_pack_linker);
    p("ranlib",ranlib);
    p("cc_profile",cc_profile);
    p("architecture",architecture);
    p("model",model);
    p("system",system);
    p("asm",asm);
    p_bool("asm_cfi_supported",asm_cfi_supported);
    p_bool("with_frame_pointers",with_frame_pointers);
    p("ext_obj",ext_obj);
    p("ext_asm",ext_asm);
    p("ext_lib",ext_lib);
    p("ext_dll",ext_dll);
    p("os_type",Sys["os_type"]);
    p("default_executable_name",default_executable_name);
    p_bool("systhread_supported",systhread_supported);
    p("host",host);
    p("target",target);
    p("exec_magic_number",exec_magic_number);
    p("cmi_magic_number",cmi_magic_number);
    p("cmo_magic_number",cmo_magic_number);
    p("cma_magic_number",cma_magic_number);
    p("cmx_magic_number",cmx_magic_number);
    p("cmxa_magic_number",cmxa_magic_number);
    p("ast_impl_magic_number",ast_impl_magic_number);
    p("ast_intf_magic_number",ast_intf_magic_number);
    p("cmxs_magic_number",cmxs_magic_number);
    p("cmt_magic_number",cmt_magic_number);
    return Pervasives["flush"](oc);
    };

module["exports"]=
{"version":version,
 "standard_library":standard_library,
 "standard_runtime":standard_runtime,
 "ccomp_type":ccomp_type,
 "bytecomp_c_compiler":bytecomp_c_compiler,
 "bytecomp_c_libraries":bytecomp_c_libraries,
 "native_c_compiler":native_c_compiler,
 "native_c_libraries":native_c_libraries,
 "native_pack_linker":native_pack_linker,
 "mkdll":mkdll,
 "mkexe":mkexe,
 "mkmaindll":mkmaindll,
 "ranlib":ranlib,
 "ar":ar,
 "cc_profile":cc_profile,
 "load_path":load_path,
 "interface_suffix":interface_suffix,
 "exec_magic_number":exec_magic_number,
 "cmi_magic_number":cmi_magic_number,
 "cmo_magic_number":cmo_magic_number,
 "cma_magic_number":cma_magic_number,
 "cmx_magic_number":cmx_magic_number,
 "cmxa_magic_number":cmxa_magic_number,
 "ast_intf_magic_number":ast_intf_magic_number,
 "ast_impl_magic_number":ast_impl_magic_number,
 "cmxs_magic_number":cmxs_magic_number,
 "cmt_magic_number":cmt_magic_number,
 "max_tag":max_tag,
 "lazy_tag":lazy_tag,
 "max_young_wosize":max_young_wosize,
 "stack_threshold":stack_threshold,
 "architecture":architecture,
 "model":model,
 "system":system,
 "asm":asm,
 "asm_cfi_supported":asm_cfi_supported,
 "with_frame_pointers":with_frame_pointers,
 "ext_obj":ext_obj,
 "ext_asm":ext_asm,
 "ext_lib":ext_lib,
 "ext_dll":ext_dll,
 "default_executable_name":default_executable_name,
 "systhread_supported":systhread_supported,
 "host":host,
 "target":target,
 "print_config":print_config};

