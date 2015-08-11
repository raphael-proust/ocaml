// Generated CODE, PLEASE EDIT WITH CARE 

var Cmmgen=require("Cmmgen");
var Runtimedef=require("Runtimedef");
var Asmgen=require("Asmgen");
var List=require("List");
var Pervasives=require("Pervasives");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Compilenv=require("Compilenv");
var Emitaux=require("Emitaux");
var Format=require("Format");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Filename=require("Filename");
var Emit=require("Emit");
var Proc=require("Proc");
var Consistbl=require("Consistbl");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Config=require("Config");
var $$Array=require("Array");


var $$Error="unknown primitive:caml_set_oo_id";

var crc_interfaces=Consistbl["create"](0);

var interfaces=[0,0];

var crc_implementations=Consistbl["create"](0);

var implementations=[0,0];

var implementations_defined=[0,0];

var cmx_required=[0,0];

var
 check_consistency=
  function(file_name,unit,crc)
   {try
     {List["iter"]
       (function(param)
         {var crco=param[2];
          
          var name=param[1];
          
          interfaces[1]=/* :: */[0,name,interfaces[1]],0;
          if(crco)
           {var crc$1=crco[1];
            
            if("unknown primitive:caml_string_equal")
             {return Consistbl["set"](crc_interfaces,name,crc$1,file_name);}
            else
             {return Consistbl["check"](crc_interfaces,name,crc$1,file_name);}
            }
          else
           {return 0;}
          },
        unit[4])}
    catch(exn)
     {if(exn[1]=Consistbl["Inconsistency"])
       {throw [0,$$Error,/* Inconsistent_interface */[3,exn[2],exn[3],exn[4]]];
        }
      else
       {throw exn;}
      }
    
    try
     {List["iter"]
       (function(param)
         {var crco=param[2];
          
          var name=param[1];
          
          implementations[1]=/* :: */[0,name,implementations[1]],0;
          if(crco)
           {return Consistbl["check"]
                    (crc_implementations,name,crco[1],file_name);
            }
          else
           {if(List["mem"](name,cmx_required[1]))
             {throw [0,$$Error,/* Missing_cmx */[7,file_name,name]];}
            else
             {return 0;}
            }
          },
        unit[5])}
    catch(exn$1)
     {if(exn$1[1]=Consistbl["Inconsistency"])
       {throw [0,
               $$Error,
               /* Inconsistent_implementation */[4,exn$1[2],exn$1[3],exn$1[4]]];
        }
      else
       {throw exn$1;}
      }
    
    try
     {var source=List["assoc"](unit[1],implementations_defined[1]);
      
      throw [0,$$Error,/* Multiple_definition */[6,unit[1],file_name,source]];
      }
    catch(exn$2){if(exn$2=Not_found){}else{throw exn$2;}}
    
    implementations[1]=/* :: */[0,unit[1],implementations[1]],0;
    Consistbl["set"](crc_implementations,unit[1],crc,file_name);
    implementations_defined[1]=
    /* :: */[0,/* tuple */[0,unit[1],file_name],implementations_defined[1]],
    0;
    if("unknown primitive:caml_string_notequal")
     {return cmx_required[1]=/* :: */[0,unit[1],cmx_required[1]],0;}
    else
     {return 0;}
    };

var
 extract_crc_interfaces=
  function(param){return Consistbl["extract"](interfaces[1],crc_interfaces);};

var
 extract_crc_implementations=
  function(param)
   {return Consistbl["extract"](implementations[1],crc_implementations);};

var lib_ccobjs=[0,0];

var lib_ccopts=[0,0];

var
 add_ccobjs=
  function(origin,l)
   {if(!Clflags["no_auto_link"][1])
     {lib_ccobjs[1]=Pervasives["@"](l[2],lib_ccobjs[1]),0;
      var replace_origin=Misc["replace_substring"]("$CAMLORIGIN",origin);
      
      return lib_ccopts[1]=
             Pervasives["@"](List["map"](replace_origin,l[3]),lib_ccopts[1]),
             0;
      }
    else
     {return 0;}
    };

var
 runtime_lib=
  function(param)
   {if(Clflags["gprofile"][1])
     {var libname=Pervasives["^"]("libasmrunp",Config["ext_lib"]);}
    else
     {var
       libname=
        Pervasives["^"]
         ("libasmrun",
          Pervasives["^"](Clflags["runtime_variant"][1],Config["ext_lib"]));
      }
    
    try
     {if(Clflags["nopervasives"][1])
       {return 0;}
      else
       {return /* :: */[0,
                Misc["find_in_path"](Config["load_path"][1],libname),
                0];
        }
      }
    catch(exn)
     {if(exn=Not_found)
       {throw [0,$$Error,/* File_not_found */[0,libname]];}
      else
       {throw exn;}
      }
    };

var
 object_file_name=
  function(name)
   {try
     {var file_name=Misc["find_in_path"](Config["load_path"][1],name);}
    catch(exn)
     {if(exn=Not_found)
       {var
         file_name=
          Misc["fatal_error"]("Asmlink.object_file_name: not found");
        }
      else
       {throw exn;}
      }
    
    if(Filename["check_suffix"](file_name,".cmx"))
     {return Pervasives["^"]
              (Filename["chop_suffix"](file_name,".cmx"),Config["ext_obj"]);
      }
    else
     {if(Filename["check_suffix"](file_name,".cmxa"))
       {return Pervasives["^"]
                (Filename["chop_suffix"](file_name,".cmxa"),Config["ext_lib"]);
        }
      else
       {return Misc["fatal_error"]("Asmlink.object_file_name: bad ext");}
      }
    };

var missing_globals=Hashtbl["create"](0,17);

var
 is_required=
  function(name)
   {try {return 1;}catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}};

var
 add_required=
  function(by,param)
   {var name=param[1];
    
    try
     {var rq=Hashtbl["find"](missing_globals,name);
      
      return rq[1]=/* :: */[0,by,rq[1]],0;
      }
    catch(exn)
     {if(exn=Not_found)
       {return Hashtbl["add"](missing_globals,name,[0,/* :: */[0,by,0]]);}
      else
       {throw exn;}
      }
    };

var
 remove_required=
  function(name){return Hashtbl["remove"](missing_globals,name);};

var
 extract_missing_globals=
  function(param)
   {var mg=[0,0];
    
    Hashtbl["iter"]
     (function(md,rq)
       {return mg[1]=/* :: */[0,/* tuple */[0,md,rq[1]],mg[1]],0;},
      missing_globals);
    return mg[1];
    };

var
 read_file=
  function(obj_name)
   {try
     {var file_name=Misc["find_in_path"](Config["load_path"][1],obj_name);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,$$Error,/* File_not_found */[0,obj_name]];}
      else
       {throw exn;}
      }
    
    if(Filename["check_suffix"](file_name,".cmx"))
     {var match=Compilenv["read_unit_info"](file_name);
      
      return /* Unit */[0,file_name,match[1],match[2]];
      }
    else
     {if(Filename["check_suffix"](file_name,".cmxa"))
       {try
         {var infos=Compilenv["read_library_info"](file_name);}
        catch(exn$1)
         {var exit;
          
          if(exn$1[1]=Compilenv["Error"])
           {switch(exn$1[2])
             {case 0:throw [0,$$Error,/* Not_an_object_file */[1,file_name]];
              case 1:exit=39;
              case 2:exit=39;
              }
            }
          else
           {exit=39;}
          
          switch(exit){case 39:throw exn$1;}
          }
        
        return /* Library */[1,file_name,infos];
        }
      else
       {throw [0,$$Error,/* Not_an_object_file */[1,file_name]];}
      }
    };

var
 scan_file=
  function(obj_name,tolink)
   {var match=read_file(obj_name);
    
    switch(match)
     {case 0:
       var info=match[2];
       
       var file_name=match[1];
       
       remove_required(info[1]);
       List["iter"](add_required(file_name),info[5]);
       return /* :: */[0,/* tuple */[0,info,file_name,match[3]],tolink];
       
      case 1:
       var infos=match[2];
       
       var file_name$1=match[1];
       
       add_ccobjs(Filename["dirname"](file_name$1),infos);
       return List["fold_right"]
               (function(param,reqd)
                 {var info$1=param[1];
                  
                  if
                   (info$1[10]||
                    Clflags["link_everything"][1]||
                    is_required(info$1[1]))
                   {remove_required(info$1[1]);
                    List["iter"]
                     (add_required
                       (Printf["sprintf"]
                         ([0,[2,0,[12,40,[2,0,[12,41,0]]]],"%s(%s)"],
                          file_name$1,
                          info$1[1])),
                      info$1[5]);
                    return /* :: */[0,
                            /* tuple */[0,info$1,file_name$1,param[2]],
                            reqd];
                    }
                  else
                   {return reqd;}
                  },
                infos[1],
                tolink);
       
      }
    };

var
 make_startup_file=
  function(ppf,filename,units_list)
   {var compile_phrase=function(p){return Asmgen["compile_phrase"](ppf,p);};
    
    var oc=Pervasives["open_out"](filename);
    
    Emitaux["output_channel"][1]=oc,0;
    Location["input_name"][1]="caml_startup",0;
    Compilenv["reset"](0,"_startup");
    Emit["begin_assembly"](0);
    var
     name_list=
      List["flatten"]
       (List["map"](function(param){return param[1][3];},units_list));
    
    compile_phrase(Cmmgen["entry_point"](name_list));
    var units=List["map"](function(param){return param[1];},units_list);
    
    List["iter"](compile_phrase,Cmmgen["generic_functions"](0,units));
    $$Array["iteri"]
     (function(i,name)
       {return compile_phrase(Cmmgen["predef_exception"](i,name));},
      Runtimedef["builtin_exceptions"]);
    compile_phrase(Cmmgen["global_table"](name_list));
    compile_phrase
     (Cmmgen["globals_map"]
       (List["map"]
         (function(param)
           {var unit=param[1];
            
            try
             {var match=List["assoc"](unit[1],unit[4]);
              
              if(match)
               {var intf_crc=match[1];}
              else
               {throw [0,Assert_failure,[0,"asmcomp/asmlink.ml",224,29]];}
              }
            catch(exn)
             {if(exn=Not_found)
               {throw [0,Assert_failure,[0,"asmcomp/asmlink.ml",226,35]];}
              else
               {throw exn;}
              }
            
            return /* tuple */[0,unit[1],intf_crc,param[3],unit[3]];
            },
          units_list)));
    compile_phrase
     (Cmmgen["data_segment_table"](/* :: */[0,"_startup",name_list]));
    compile_phrase
     (Cmmgen["code_segment_table"](/* :: */[0,"_startup",name_list]));
    compile_phrase
     (Cmmgen["frame_table"]
       (/* :: */[0,"_startup",/* :: */[0,"_system",name_list]]));
    Emit["end_assembly"](0);
    return Pervasives["close_out"](oc);
    };

var
 make_shared_startup_file=
  function(ppf,units,filename)
   {var compile_phrase=function(p){return Asmgen["compile_phrase"](ppf,p);};
    
    var oc=Pervasives["open_out"](filename);
    
    Emitaux["output_channel"][1]=oc,0;
    Location["input_name"][1]="caml_startup",0;
    Compilenv["reset"](0,"_shared_startup");
    Emit["begin_assembly"](0);
    List["iter"]
     (compile_phrase,
      Cmmgen["generic_functions"]
       (1,List["map"](function(prim){return prim[1];},units)));
    compile_phrase(Cmmgen["plugin_header"](units));
    compile_phrase
     (Cmmgen["global_table"]
       (List["map"](function(param){return param[1][2];},units)));
    Emit["end_assembly"](0);
    return Pervasives["close_out"](oc);
    };

var
 call_linker_shared=
  function(file_list,output_name)
   {if(!Ccomp["call_linker"](1,output_name,file_list,""))
     {throw [0,$$Error,0];}
    else
     {return 0;}
    };

var
 link_shared=
  function(ppf,objfiles,output_name)
   {var units_tolink=List["fold_right"](scan_file,objfiles,0);
    
    List["iter"]
     (function(param){return check_consistency(param[2],param[1],param[3]);},
      units_tolink);
    Clflags["ccobjs"][1]=
    Pervasives["@"](Clflags["ccobjs"][1],lib_ccobjs[1]),
    0;
    Clflags["all_ccopts"][1]=
    Pervasives["@"](lib_ccopts[1],Clflags["all_ccopts"][1]),
    0;
    var
     objfiles$1=
      Pervasives["@"]
       (List["rev"](List["map"](object_file_name,objfiles)),
        List["rev"](Clflags["ccobjs"][1]));
    
    if(Clflags["keep_startup_file"][1])
     {var
       startup=
        Pervasives["^"]
         (output_name,Pervasives["^"](".startup",Config["ext_asm"]));
      }
    else
     {var startup=Filename["temp_file"](0,"camlstartup",Config["ext_asm"]);}
    
    make_shared_startup_file
     (ppf,
      List["map"]
       (function(param){return /* tuple */[0,param[1],param[3]];},
        units_tolink),
      startup);
    var
     startup_obj=
      Pervasives["^"]
       (output_name,Pervasives["^"](".startup",Config["ext_obj"]));
    
    if(Proc["assemble_file"](startup,startup_obj)!=0)
     {throw [0,$$Error,/* Assembler_error */[5,startup]];}
    else
     {}
    
    if(!Clflags["keep_startup_file"][1]){Misc["remove_file"](startup)}else{}
    
    call_linker_shared(/* :: */[0,startup_obj,objfiles$1],output_name);
    return Misc["remove_file"](startup_obj);
    };

var
 call_linker=
  function(file_list,startup_file,output_name)
   {var
     main_dll=
      Clflags["output_c_object"][1]&&
      Filename["check_suffix"](output_name,Config["ext_dll"]);
    
    var main_obj_runtime=Clflags["output_complete_object"][1];
    
    var files=/* :: */[0,startup_file,List["rev"](file_list)];
    
    if(!Clflags["output_c_object"][1]||main_dll||main_obj_runtime)
     {var
       match=
        /* tuple */[0,
         Pervasives["@"]
          (files,
           Pervasives["@"](List["rev"](Clflags["ccobjs"][1]),runtime_lib(0))),
         Clflags["nopervasives"][1]||main_obj_runtime
          ?""
          :Config["native_c_libraries"]];
      }
    else
     {var match=/* tuple */[0,files,""];}
    
    if(main_dll)
     {var mode=2;}
    else
     {if(Clflags["output_c_object"][1]){var mode=3;}else{var mode=0;}}
    
    if(!Ccomp["call_linker"](mode,output_name,match[1],match[2]))
     {throw [0,$$Error,0];}
    else
     {return 0;}
    };

var
 link=
  function(ppf,objfiles,output_name)
   {if(Clflags["gprofile"][1])
     {var stdlib="stdlib.p.cmxa";}
    else
     {var stdlib="stdlib.cmxa";}
    
    if(Clflags["gprofile"][1])
     {var stdexit="std_exit.p.cmx";}
    else
     {var stdexit="std_exit.cmx";}
    
    if(Clflags["nopervasives"][1])
     {var objfiles$1=objfiles;}
    else
     {if(Clflags["output_c_object"][1])
       {var objfiles$1=/* :: */[0,stdlib,objfiles];}
      else
       {var
         objfiles$1=
          /* :: */[0,stdlib,Pervasives["@"](objfiles,/* :: */[0,stdexit,0])];
        }
      }
    
    var units_tolink=List["fold_right"](scan_file,objfiles$1,0);
    
    $$Array["iter"](remove_required,Runtimedef["builtin_exceptions"]);
    var mg=extract_missing_globals(0);
    
    if(mg){throw [0,$$Error,/* Missing_implementations */[2,mg]];}else{}
    
    List["iter"]
     (function(param){return check_consistency(param[2],param[1],param[3]);},
      units_tolink);
    Clflags["ccobjs"][1]=
    Pervasives["@"](Clflags["ccobjs"][1],lib_ccobjs[1]),
    0;
    Clflags["all_ccopts"][1]=
    Pervasives["@"](lib_ccopts[1],Clflags["all_ccopts"][1]),
    0;
    if(Clflags["keep_startup_file"][1])
     {var
       startup=
        Pervasives["^"]
         (output_name,Pervasives["^"](".startup",Config["ext_asm"]));
      }
    else
     {var startup=Filename["temp_file"](0,"camlstartup",Config["ext_asm"]);}
    
    make_startup_file(ppf,startup,units_tolink);
    var startup_obj=Filename["temp_file"](0,"camlstartup",Config["ext_obj"]);
    
    if(Proc["assemble_file"](startup,startup_obj)!=0)
     {throw [0,$$Error,/* Assembler_error */[5,startup]];}
    else
     {}
    
    try
     {call_linker
       (List["map"](object_file_name,objfiles$1),startup_obj,output_name);
      if(!Clflags["keep_startup_file"][1]){Misc["remove_file"](startup)}else{}
      
      return Misc["remove_file"](startup_obj);
      }
    catch(x){Misc["remove_file"](startup_obj);throw x;}
    };

var
 report_error=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Error during linking",0],"Error during linking"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Cannot find file ",[2,0,0]],"Cannot find file %s"],
                  param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The file ",
                    [15,[11," is not a compilation unit description",0]]],
                   "The file %a is not a compilation unit description"],
                  Location["print_filename"],
                  param[1]);
         
        case 2:
         var
          print_references=
           function(ppf$1,param$1)
            {if(param$1)
              {Format["fprintf"](ppf$1,[0,[2,0,0],"%s"],param$1[1]);
               return List["iter"]
                       (function(r)
                         {return Format["fprintf"]
                                  (ppf$1,[0,[12,44,[17,[0,"@ ",1,0],[2,0,0]]],",@ %s"],r);
                          },
                        param$1[2]);
               }
             else
              {return 0;}
             };
         
         var
          print_modules=
           function(ppf$1)
            {return List["iter"]
                     (function(param$1)
                       {return Format["fprintf"]
                                (ppf$1,
                                 [0,
                                  [17,
                                   [0,"@ ",1,0],
                                   [18,
                                    [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
                                    [2,0,[11," referenced from ",[15,[17,0,0]]]]]],
                                  "@ @[<hov 2>%s referenced from %a@]"],
                                 param$1[1],
                                 print_references,
                                 param$1[2]);
                        });
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<v 2>",0],"<v 2>"]],
                    [11,
                     "No implementations provided for the following modules:",
                     [15,[17,0,0]]]],
                   "@[<v 2>No implementations provided for the following modules:%a@]"],
                  print_modules,
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov>",0],"<hov>"]],
                    [11,
                     "Files ",
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [11,
                        "and ",
                        [15,
                         [17,
                          [0,"@ ",1,0],
                          [11,
                           "make inconsistent assumptions over interface ",
                           [2,0,[17,0,0]]]]]]]]]],
                   "@[<hov>Files %a@ and %a@ make inconsistent assumptions over interface %s@]"],
                  Location["print_filename"],
                  param[2],
                  Location["print_filename"],
                  param[3],
                  param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov>",0],"<hov>"]],
                    [11,
                     "Files ",
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [11,
                        "and ",
                        [15,
                         [17,
                          [0,"@ ",1,0],
                          [11,
                           "make inconsistent assumptions over implementation ",
                           [2,0,[17,0,0]]]]]]]]]],
                   "@[<hov>Files %a@ and %a@ make inconsistent assumptions over implementation %s@]"],
                  Location["print_filename"],
                  param[2],
                  Location["print_filename"],
                  param[3],
                  param[1]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Error while assembling ",[15,0]],
                   "Error while assembling %a"],
                  Location["print_filename"],
                  param[1]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov>",0],"<hov>"]],
                    [11,
                     "Files ",
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [11,
                        "and ",
                        [15,
                         [17,
                          [0,"@ ",1,0],
                          [11,"both define a module named ",[2,0,[17,0,0]]]]]]]]]],
                   "@[<hov>Files %a@ and %a@ both define a module named %s@]"],
                  Location["print_filename"],
                  param[2],
                  Location["print_filename"],
                  param[3],
                  param[1]);
         
        case 7:
         var name=param[2];
         
         var filename=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov>",0],"<hov>"]],
                    [11,
                     "File ",
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [11,
                        "was compiled without access",
                        [17,
                         [0,"@ ",1,0],
                         [11,
                          "to the .cmx file",
                          [17,
                           [0,"@ ",1,0],
                           [11,
                            "for module ",
                            [2,
                             0,
                             [12,
                              44,
                              [17,
                               [0,"@ ",1,0],
                               [11,
                                "which was produced by `ocamlopt -for-pack'.",
                                [17,
                                 [0,"@ ",1,0],
                                 [11,
                                  "Please recompile ",
                                  [15,
                                   [17,
                                    [0,"@ ",1,0],
                                    [11,
                                     "with the correct `-I' option",
                                     [17,
                                      [0,"@ ",1,0],
                                      [11,
                                       "so that ",
                                       [2,
                                        0,
                                        [11,".cmx",[17,[0,"@ ",1,0],[11,"is found.",[17,0,0]]]]]]]]]]]]]]]]]]]]]]]]],
                   "@[<hov>File %a@ was compiled without access@ to the .cmx file@ for module %s,@ which was produced by `ocamlopt -for-pack'.@ Please recompile %a@ with the correct `-I' option@ so that %s.cmx@ is found.@]"],
                  Location["print_filename"],
                  filename,
                  name,
                  Location["print_filename"],
                  filename,
                  name);
         
        }}
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,
                Location["error_of_printer_file"](report_error,param[2])];
        }
      else
       {return 0;}
      });

var
 reset=
  function(param)
   {Consistbl["clear"](crc_interfaces);
    Consistbl["clear"](crc_implementations);
    implementations_defined[1]=0,0;
    cmx_required[1]=0,0;
    interfaces[1]=0,0;
    return implementations[1]=0,0;
    };

module["exports"]=
{"link":link,
 "link_shared":link_shared,
 "call_linker_shared":call_linker_shared,
 "reset":reset,
 "check_consistency":check_consistency,
 "extract_crc_interfaces":extract_crc_interfaces,
 "extract_crc_implementations":extract_crc_implementations,
 "Error":$$Error,
 "report_error":report_error};

