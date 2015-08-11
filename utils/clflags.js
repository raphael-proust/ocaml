// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Filename=require("Filename");
var Config=require("Config");


var objfiles=[0,0];

var ccobjs=[0,0];

var dllibs=[0,0];

var compile_only=[0,0];

var output_name=[0,0];

var include_dirs=[0,0];

var no_std_include=[0,0];

var print_types=[0,0];

var make_archive=[0,0];

var debug=[0,0];

var fast=[0,0];

var link_everything=[0,0];

var custom_runtime=[0,0];

var no_check_prims=[0,0];

var bytecode_compatible_32=[0,0];

var output_c_object=[0,0];

var output_complete_object=[0,0];

var all_ccopts=[0,0];

var classic=[0,0];

var nopervasives=[0,0];

var preprocessor=[0,0];

var all_ppx=[0,0];

var annotations=[0,0];

var binary_annotations=[0,0];

var use_threads=[0,0];

var use_vmthreads=[0,0];

var noassert=[0,0];

var verbose=[0,0];

var noprompt=[0,0];

var nopromptcont=[0,0];

var init_file=[0,0];

var noinit=[0,0];

var open_modules=[0,0];

var use_prims=[0,""];

var use_runtime=[0,""];

var principal=[0,0];

var real_paths=[0,1];

var recursive_types=[0,0];

var strict_sequence=[0,0];

var strict_formats=[0,0];

var applicative_functors=[0,1];

var make_runtime=[0,0];

var gprofile=[0,0];

var c_compiler=[0,0];

var no_auto_link=[0,0];

var dllpaths=[0,0];

var make_package=[0,0];

var for_package=[0,0];

var error_size=[0,500];

var float_const_prop=[0,1];

var transparent_modules=[0,0];

var dump_source=[0,0];

var dump_parsetree=[0,0];

var dump_typedtree=[0,0];

var dump_rawlambda=[0,0];

var dump_lambda=[0,0];

var dump_clambda=[0,0];

var dump_instr=[0,0];

var keep_asm_file=[0,0];

var optimize_for_speed=[0,1];

var opaque=[0,0];

var dump_cmm=[0,0];

var dump_selection=[0,0];

var dump_cse=[0,0];

var dump_live=[0,0];

var dump_spill=[0,0];

var dump_split=[0,0];

var dump_interf=[0,0];

var dump_prefer=[0,0];

var dump_regalloc=[0,0];

var dump_reload=[0,0];

var dump_scheduling=[0,0];

var dump_linear=[0,0];

var keep_startup_file=[0,0];

var dump_combine=[0,0];

var native_code=[0,0];

var inline_threshold=[0,10];

var force_slash=[0,0];

var dont_write_files=[0,0];

var
 std_include_flag=
  function(prefix)
   {if(no_std_include[1])
     {return "";}
    else
     {return Pervasives["^"]
              (prefix,Filename["quote"](Config["standard_library"]));
      }
    };

var
 std_include_dir=
  function(param)
   {if(no_std_include[1])
     {return 0;}
    else
     {return /* :: */[0,Config["standard_library"],0];}
    };

var shared=[0,0];

var dlcode=[0,1];

var runtime_variant=[0,""];

var keep_docs=[0,0];

var keep_locs=[0,0];

var unsafe_string=[0,1];

module["exports"]=
{"objfiles":objfiles,
 "ccobjs":ccobjs,
 "dllibs":dllibs,
 "compile_only":compile_only,
 "output_name":output_name,
 "include_dirs":include_dirs,
 "no_std_include":no_std_include,
 "print_types":print_types,
 "make_archive":make_archive,
 "debug":debug,
 "fast":fast,
 "link_everything":link_everything,
 "custom_runtime":custom_runtime,
 "no_check_prims":no_check_prims,
 "bytecode_compatible_32":bytecode_compatible_32,
 "output_c_object":output_c_object,
 "output_complete_object":output_complete_object,
 "all_ccopts":all_ccopts,
 "classic":classic,
 "nopervasives":nopervasives,
 "open_modules":open_modules,
 "preprocessor":preprocessor,
 "all_ppx":all_ppx,
 "annotations":annotations,
 "binary_annotations":binary_annotations,
 "use_threads":use_threads,
 "use_vmthreads":use_vmthreads,
 "noassert":noassert,
 "verbose":verbose,
 "noprompt":noprompt,
 "nopromptcont":nopromptcont,
 "init_file":init_file,
 "noinit":noinit,
 "use_prims":use_prims,
 "use_runtime":use_runtime,
 "principal":principal,
 "real_paths":real_paths,
 "recursive_types":recursive_types,
 "strict_sequence":strict_sequence,
 "strict_formats":strict_formats,
 "applicative_functors":applicative_functors,
 "make_runtime":make_runtime,
 "gprofile":gprofile,
 "c_compiler":c_compiler,
 "no_auto_link":no_auto_link,
 "dllpaths":dllpaths,
 "make_package":make_package,
 "for_package":for_package,
 "error_size":error_size,
 "float_const_prop":float_const_prop,
 "transparent_modules":transparent_modules,
 "dump_source":dump_source,
 "dump_parsetree":dump_parsetree,
 "dump_typedtree":dump_typedtree,
 "dump_rawlambda":dump_rawlambda,
 "dump_lambda":dump_lambda,
 "dump_clambda":dump_clambda,
 "dump_instr":dump_instr,
 "keep_asm_file":keep_asm_file,
 "optimize_for_speed":optimize_for_speed,
 "dump_cmm":dump_cmm,
 "dump_selection":dump_selection,
 "dump_cse":dump_cse,
 "dump_live":dump_live,
 "dump_spill":dump_spill,
 "dump_split":dump_split,
 "dump_interf":dump_interf,
 "dump_prefer":dump_prefer,
 "dump_regalloc":dump_regalloc,
 "dump_reload":dump_reload,
 "dump_scheduling":dump_scheduling,
 "dump_linear":dump_linear,
 "keep_startup_file":keep_startup_file,
 "dump_combine":dump_combine,
 "native_code":native_code,
 "inline_threshold":inline_threshold,
 "dont_write_files":dont_write_files,
 "std_include_flag":std_include_flag,
 "std_include_dir":std_include_dir,
 "shared":shared,
 "dlcode":dlcode,
 "runtime_variant":runtime_variant,
 "force_slash":force_slash,
 "keep_docs":keep_docs,
 "keep_locs":keep_locs,
 "unsafe_string":unsafe_string,
 "opaque":opaque};

