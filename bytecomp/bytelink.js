// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Dll=require("Dll");
var Opcodes=require("Opcodes");
var Pervasives=require("Pervasives");
var List=require("List");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Marshal=require("Marshal");
var Format=require("Format");
var Set=require("Set");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Filename=require("Filename");
var Bytesections=require("Bytesections");
var Consistbl=require("Consistbl");
var Location=require("Location");
var Config=require("Config");
var Symtable=require("Symtable");
var $$Array=require("Array");
var Sys=require("Sys");


var $$Error="unknown primitive:caml_set_oo_id";

var lib_ccobjs=[0,0];

var lib_ccopts=[0,0];

var lib_dllibs=[0,0];

var
 add_ccobjs=
  function(origin,l)
   {if(!Clflags["no_auto_link"][1])
     {if
       ((Clflags["use_runtime"][1]["length"]=0)&&
        (Clflags["use_prims"][1]["length"]=0))
       {if(l[2]){Clflags["custom_runtime"][1]=1,0}else{}
        
        lib_ccobjs[1]=Pervasives["@"](l[3],lib_ccobjs[1]),0;
        var replace_origin=Misc["replace_substring"]("$CAMLORIGIN",origin);
        
        lib_ccopts[1]=
        Pervasives["@"](List["map"](replace_origin,l[4]),lib_ccopts[1]),
        0}
      else
       {}
      
      return lib_dllibs[1]=Pervasives["@"](l[5],lib_dllibs[1]),0;
      }
    else
     {return 0;}
    };

var compare=function(prim,prim$1){return "unknown primitive:caml_compare";};

var IdentSet=Set["Make"]([0,compare]);

var missing_globals=[0,IdentSet[1]];

var
 is_required=
  function(param)
   {var rel=param[1];
    
    switch(rel)
     {case 2:return IdentSet[3](rel[1],missing_globals[1]);default:return 0;}
    };

var
 add_required=
  function(param)
   {var rel=param[1];
    
    switch(rel)
     {case 1:
       return missing_globals[1]=IdentSet[4](rel[1],missing_globals[1]),0;
      default:return 0;}
    };

var
 remove_required=
  function(param)
   {var rel=param[1];
    
    switch(rel)
     {case 2:
       return missing_globals[1]=IdentSet[6](rel[1],missing_globals[1]),0;
      default:return 0;}
    };

var
 scan_file=
  function(obj_name,tolink)
   {try
     {var file_name=Misc["find_in_path"](Config["load_path"][1],obj_name);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,$$Error,/* File_not_found */[0,obj_name]];}
      else
       {throw exn;}
      }
    
    var ic=Pervasives["open_in_bin"](file_name);
    
    try
     {var
       buffer=
        Pervasives["really_input_string"]
         (ic,Config["cmo_magic_number"]["length"]);
      
      if("unknown primitive:caml_string_equal")
       {var compunit_pos=Pervasives["input_binary_int"](ic);
        
        Pervasives["seek_in"](ic,compunit_pos);
        var compunit=Pervasives["input_value"](ic);
        
        Pervasives["close_in"](ic);
        List["iter"](add_required,compunit[4]);
        return /* :: */[0,/* Link_object */[0,file_name,compunit],tolink];
        }
      else
       {if("unknown primitive:caml_string_equal")
         {var pos_toc=Pervasives["input_binary_int"](ic);
          
          Pervasives["seek_in"](ic,pos_toc);
          var toc=Pervasives["input_value"](ic);
          
          Pervasives["close_in"](ic);
          add_ccobjs(Filename["dirname"](file_name),toc);
          var
           required=
            List["fold_right"]
             (function(compunit$1,reqd)
               {if
                 (compunit$1[7]||
                  Clflags["link_everything"][1]||
                  List["exists"](is_required,compunit$1[4]))
                 {List["iter"](remove_required,compunit$1[4]);
                  List["iter"](add_required,compunit$1[4]);
                  return /* :: */[0,compunit$1,reqd];
                  }
                else
                 {return reqd;}
                },
              toc[1],
              0);
          
          return /* :: */[0,/* Link_archive */[1,file_name,required],tolink];
          }
        else
         {throw [0,$$Error,/* Not_an_object_file */[1,file_name]];}
        }
      }
    catch(x)
     {if(x=End_of_file)
       {Pervasives["close_in"](ic);
        throw [0,$$Error,/* Not_an_object_file */[1,file_name]];
        }
      else
       {Pervasives["close_in"](ic);throw x;}
      }
    };

var crc_interfaces=Consistbl["create"](0);

var interfaces=[0,0];

var implementations_defined=[0,0];

var
 check_consistency=
  function(ppf,file_name,cu)
   {try
     {List["iter"]
       (function(param)
         {var crco=param[2];
          
          var name=param[1];
          
          interfaces[1]=/* :: */[0,name,interfaces[1]],0;
          if(crco)
           {var crc=crco[1];
            
            if("unknown primitive:caml_string_equal")
             {return Consistbl["set"](crc_interfaces,name,crc,file_name);}
            else
             {return Consistbl["check"](crc_interfaces,name,crc,file_name);}
            }
          else
           {return 0;}
          },
        cu[5])}
    catch(exn)
     {if(exn[1]=Consistbl["Inconsistency"])
       {throw [0,$$Error,/* Inconsistent_import */[4,exn[2],exn[3],exn[4]]];}
      else
       {throw exn;}
      }
    
    try
     {var source=List["assoc"](cu[1],implementations_defined[1]);
      
      Location["print_warning"]
       (Location["in_file"](file_name),
        ppf,
        /* Multiple_definition */[15,
         cu[1],
         Location["show_filename"](file_name),
         Location["show_filename"](source)])}
    catch(exn$1){if(exn$1=Not_found){}else{throw exn$1;}}
    
    return implementations_defined[1]=
           /* :: */[0,
            /* tuple */[0,cu[1],file_name],
            implementations_defined[1]],
           0;
    };

var
 extract_crc_interfaces=
  function(param){return Consistbl["extract"](interfaces[1],crc_interfaces);};

var
 clear_crc_interfaces=
  function(param)
   {Consistbl["clear"](crc_interfaces);return interfaces[1]=0,0;};

var debug_info=[0,0];

var
 link_compunit=
  function(ppf,output_fun,currpos_fun,inchan,file_name,compunit)
   {check_consistency(ppf,file_name,compunit);
    Pervasives["seek_in"](inchan,compunit[2]);
    var code_block=Misc["LongString"][8](inchan,compunit[3]);
    
    Symtable["ls_patch_object"](code_block,compunit[4]);
    if(Clflags["debug"][1]&&compunit[8]>0)
     {Pervasives["seek_in"](inchan,compunit[8]);
      var debug_event_list=Pervasives["input_value"](inchan);
      
      var debug_dirs=Pervasives["input_value"](inchan);
      
      var file_path=Filename["dirname"](Location["absolute_path"](file_name));
      
      if(List["mem"](file_path,debug_dirs))
       {var debug_dirs$1=debug_dirs;}
      else
       {var debug_dirs$1=/* :: */[0,file_path,debug_dirs];}
      
      debug_info[1]=
      /* :: */[0,
       /* tuple */[0,currpos_fun(0),debug_event_list,debug_dirs$1],
       debug_info[1]],
      0}
    else
     {}
    
    $$Array["iter"](output_fun,code_block);
    if(Clflags["link_everything"][1])
     {return List["iter"](Symtable["require_primitive"],compunit[6]);}
    else
     {return 0;}
    };

var
 link_object=
  function(ppf,output_fun,currpos_fun,file_name,compunit)
   {var inchan=Pervasives["open_in_bin"](file_name);
    
    try
     {link_compunit(ppf,output_fun,currpos_fun,inchan,file_name,compunit);
      return Pervasives["close_in"](inchan);
      }
    catch(x)
     {if(x[1]=Symtable["Error"])
       {Pervasives["close_in"](inchan);
        throw [0,$$Error,/* Symbol_error */[3,file_name,x[2]]];
        }
      else
       {Pervasives["close_in"](inchan);throw x;}
      }
    };

var
 link_archive=
  function(ppf,output_fun,currpos_fun,file_name,units_required)
   {var inchan=Pervasives["open_in_bin"](file_name);
    
    try
     {List["iter"]
       (function(cu)
         {var
           name=
            Pervasives["^"]
             (file_name,Pervasives["^"]("(",Pervasives["^"](cu[1],")")));
          
          try
           {return link_compunit(ppf,output_fun,currpos_fun,inchan,name,cu);}
          catch(exn)
           {if(exn[1]=Symtable["Error"])
             {throw [0,$$Error,/* Symbol_error */[3,name,exn[2]]];}
            else
             {throw exn;}
            }
          },
        units_required);
      return Pervasives["close_in"](inchan);
      }
    catch(x){Pervasives["close_in"](inchan);throw x;}
    };

var
 link_file=
  function(ppf,output_fun,currpos_fun,param)
   {switch(param)
     {case 0:return link_object(ppf,output_fun,currpos_fun,param[1],param[2]);
      case 1:
       return link_archive(ppf,output_fun,currpos_fun,param[1],param[2]);
      }
    };

var
 output_debug_info=
  function(oc)
   {Pervasives["output_binary_int"](oc,List["length"](debug_info[1]));
    List["iter"]
     (function(param)
       {Pervasives["output_binary_int"](oc,param[1]);
        Pervasives["output_value"](oc,param[2]);
        return Pervasives["output_value"](oc,param[3]);
        },
      debug_info[1]);
    return debug_info[1]=0,0;
    };

var
 output_stringlist=
  function(oc,l)
   {return List["iter"]
            (function(s)
              {Pervasives["output_string"](oc,s);
               return Pervasives["output_byte"](oc,0);
               },
             l);
    };

var
 make_absolute=
  function(file)
   {if(Filename["is_relative"](file))
     {return Filename["concat"]("unknown primitive:caml_sys_getcwd",file);}
    else
     {return file;}
    };

var
 link_bytecode=
  function(ppf,tolink,exec_name,standalone)
   {List["iter"]
     (function(param)
       {var exit;
        
        switch(param)
         {case 0:
           if("unknown primitive:caml_string_equal")
            {throw [0,$$Error,/* Wrong_object_name */[2,exec_name]];}
           else
            {exit=62;}
           
          case 1:exit=62;
          }
        
        switch(exit){case 62:return 0;}
        },
      tolink);
    Misc["remove_file"](exec_name);
    var
     outchan=
      Pervasives["open_out_gen"]([0,1,[0,4,[0,3,[0,6,0]]]],511,exec_name);
    
    try
     {if(standalone)
       {try
         {if(Clflags["use_runtime"][1]["length"]>0)
           {var header="camlheader_ur";}
          else
           {var
             header=
              Pervasives["^"]("camlheader",Clflags["runtime_variant"][1]);
            }
          
          var
           inchan=
            Pervasives["open_in_bin"]
             (Misc["find_in_path"](Config["load_path"][1],header));
          
          Misc["copy_file"](inchan,outchan),Pervasives["close_in"](inchan)}
        catch(exn)
         {var exit;
          
          if(exn=Not_found)
           {exit=57;}
          else
           {if(exn[1]=Sys_error){exit=57;}else{throw exn;}}
          
          switch(exit){case 57:}
          }
        }
      else
       {}
      
      Bytesections["init_record"](outchan);
      if(Clflags["use_runtime"][1]["length"]>0)
       {Pervasives["output_string"]
         (outchan,
          Pervasives["^"]("#!",make_absolute(Clflags["use_runtime"][1]))),
        Pervasives["output_char"](outchan,10),
        Bytesections["record"](outchan,"RNTM")}
      else
       {}
      
      var start_code=Pervasives["pos_out"](outchan);
      
      Symtable["init"](0);
      clear_crc_interfaces(0);
      var
       sharedobjs=
        List["map"](Dll["extract_dll_name"],Clflags["dllibs"][1]);
      
      var check_dlls=standalone&&"unknown primitive:caml_string_equal";
      
      if(check_dlls)
       {Dll["init_compile"](Clflags["no_std_include"][1]);
        Dll["add_path"](Config["load_path"][1]);
        try
         {Dll["open_dlls"](0,sharedobjs)}
        catch(exn$1)
         {if(exn$1[1]=Failure)
           {throw [0,$$Error,/* Cannot_open_dll */[6,exn$1[2]]];}
          else
           {throw exn$1;}
          }
        }
      else
       {}
      
      var output_fun=Pervasives["output_bytes"](outchan);
      
      var
       currpos_fun=
        function(param){return Pervasives["pos_out"](outchan)-start_code;};
      
      List["iter"](link_file(ppf,output_fun,currpos_fun),tolink);
      if(check_dlls){Dll["close_all_dlls"](0)}else{}
      
      Pervasives["output_byte"](outchan,Opcodes["opSTOP"]);
      Pervasives["output_byte"](outchan,0);
      Pervasives["output_byte"](outchan,0);
      Pervasives["output_byte"](outchan,0);
      Bytesections["record"](outchan,"CODE");
      if(standalone)
       {output_stringlist(outchan,Clflags["dllpaths"][1]),
        Bytesections["record"](outchan,"DLPT"),
        output_stringlist(outchan,sharedobjs),
        Bytesections["record"](outchan,"DLLS")}
      else
       {}
      
      Symtable["output_primitive_names"](outchan);
      Bytesections["record"](outchan,"PRIM");
      try
       {Marshal["to_channel"]
         (outchan,
          Symtable["initial_global_table"](0),
          Clflags["bytecode_compatible_32"][1]?[0,2,0]:0)}
      catch(exn$2)
       {if(exn$2[1]=Failure){throw [0,$$Error,1];}else{throw exn$2;}}
      
      Bytesections["record"](outchan,"DATA");
      Symtable["output_global_map"](outchan);
      Bytesections["record"](outchan,"SYMB");
      Pervasives["output_value"](outchan,extract_crc_interfaces(0));
      Bytesections["record"](outchan,"CRCS");
      if(Clflags["debug"][1])
       {output_debug_info(outchan),Bytesections["record"](outchan,"DBUG")}
      else
       {}
      
      Bytesections["write_toc_and_trailer"](outchan);
      return Pervasives["close_out"](outchan);
      }
    catch(x)
     {Pervasives["close_out"](outchan);
      Misc["remove_file"](exec_name);
      throw x;
      }
    };

var output_code_string_counter=[0,0];

var
 output_code_string=
  function(outchan,code)
   {var pos=0;
    
    var len=code["length"];
    
    while(pos<len)
     {var c1=code[pos];
      
      var c2=code[pos+1];
      
      var c3=code[pos+2];
      
      var c4=code[pos+3];
      
      pos=pos+4;
      
      Printf["fprintf"]
       (outchan,
        [0,
         [11,
          "0x",
          [4,
           6,
           [0,2,2],
           0,
           [4,6,[0,2,2],0,[4,6,[0,2,2],0,[4,6,[0,2,2],0,[11,", ",0]]]]]],
         "0x%02x%02x%02x%02x, "],
        c4,
        c3,
        c2,
        c1);
      output_code_string_counter[0]++;
      if(output_code_string_counter[1]>=6)
       {Pervasives["output_char"](outchan,10),
        output_code_string_counter[1]=
        0,
        0}
      else
       {}
      }
    return 0;
    };

var
 output_data_string=
  function(outchan,data)
   {var counter=0;
    
    for(var i=0;i<=data["length"]-1;i++)
     {Printf["fprintf"](outchan,[0,[4,0,0,0,[11,", ",0]],"%d, "],data[i]);
      counter=1+counter;
      
      if(counter>=12)
       {Pervasives["output_string"](outchan,"\n");counter=0;}
      else
       {}
      }
    };

var
 output_cds_file=
  function(outfile)
   {Misc["remove_file"](outfile);
    var
     outchan=
      Pervasives["open_out_gen"]([0,1,[0,4,[0,3,[0,6,0]]]],511,outfile);
    
    try
     {Bytesections["init_record"](outchan);
      Symtable["output_global_map"](outchan);
      Bytesections["record"](outchan,"SYMB");
      output_debug_info(outchan);
      Bytesections["record"](outchan,"DBUG");
      Bytesections["write_toc_and_trailer"](outchan);
      return Pervasives["close_out"](outchan);
      }
    catch(x)
     {Pervasives["close_out"](outchan);Misc["remove_file"](outfile);throw x;}
    };

var
 link_bytecode_as_c=
  function(ppf,tolink,outfile)
   {var outchan=Pervasives["open_out"](outfile);
    
    try
     {Pervasives["output_string"]
       (outchan,
        '#ifdef __cplusplus\nextern "C" {\n#endif\n#include <caml/mlvalues.h>\nCAMLextern void caml_startup_code(\n           code_t code, asize_t code_size,\n           char *data, asize_t data_size,\n           char *section_table, asize_t section_table_size,\n           char **argv);\n');
      Pervasives["output_string"](outchan,"static int caml_code[] = {\n");
      Symtable["init"](0);
      clear_crc_interfaces(0);
      var currpos=[0,0];
      
      var
       output_fun=
        function(code)
         {output_code_string(outchan,code);
          return currpos[1]=currpos[1]+code["length"],0;
          };
      
      var currpos_fun=function(param){return currpos[1];};
      
      List["iter"](link_file(ppf,output_fun,currpos_fun),tolink);
      Printf["fprintf"]
       (outchan,
        [0,[11,"\n0x",[4,6,0,0,[11,"};\n\n",0]]],"\n0x%x};\n\n"],
        Opcodes["opSTOP"]);
      Pervasives["output_string"](outchan,"static char caml_data[] = {\n");
      output_data_string
       (outchan,"unknown primitive:caml_output_value_to_string");
      Pervasives["output_string"](outchan,"\n};\n\n");
      var
       sections=
        /* :: */[0,
         /* tuple */[0,"SYMB",Symtable["data_global_map"](0)],
         /* :: */[0,
          /* tuple */[0,"PRIM",Symtable["data_primitive_names"](0)],
          /* :: */[0,/* tuple */[0,"CRCS",extract_crc_interfaces(0)],0]]];
      
      Pervasives["output_string"](outchan,"static char caml_sections[] = {\n"),
      output_data_string
       (outchan,"unknown primitive:caml_output_value_to_string"),
      Pervasives["output_string"](outchan,"\n};\n\n"),
      Symtable["output_primitive_table"](outchan),
      Pervasives["output_string"]
       (outchan,
        "\nvoid caml_startup(char ** argv)\n{\n  caml_startup_code(caml_code, sizeof(caml_code),\n                    caml_data, sizeof(caml_data),\n                    caml_sections, sizeof(caml_sections),\n                    argv);\n}\n#ifdef __cplusplus\n}\n#endif\n"),
      Pervasives["close_out"](outchan)}
    catch(x)
     {Pervasives["close_out"](outchan);Misc["remove_file"](outfile);throw x;}
    
    if(Clflags["debug"][1])
     {return output_cds_file
              (Pervasives["^"](Filename["chop_extension"](outfile),".cds"));
      }
    else
     {return 0;}
    };

var
 build_custom_runtime=
  function(prim_name,exec_name)
   {var
     runtime_lib=
      Pervasives["^"]("-lcamlrun",Clflags["runtime_variant"][1]);
    
    return Ccomp["call_linker"]
            (0,
             exec_name,
             Pervasives["@"]
              (/* :: */[0,prim_name,0],
               Pervasives["@"]
                (List["rev"](Clflags["ccobjs"][1]),/* :: */[0,runtime_lib,0])),
             Pervasives["^"]
              (Clflags["std_include_flag"]("-I"),
               Pervasives["^"](" ",Config["bytecomp_c_libraries"])));
    };

var
 append_bytecode_and_cleanup=
  function(bytecode_name,exec_name,prim_name)
   {var oc=Pervasives["open_out_gen"]([0,1,[0,2,[0,6,0]]],0,exec_name);
    
    var ic=Pervasives["open_in_bin"](bytecode_name);
    
    Misc["copy_file"](ic,oc);
    Pervasives["close_in"](ic);
    Pervasives["close_out"](oc);
    Misc["remove_file"](bytecode_name);
    return Misc["remove_file"](prim_name);
    };

var
 fix_exec_name=
  function(name)
   {var match=Sys["os_type"];
    
    var exit;
    
    switch(match){case "Cygwin":exit=20;case "Win32":exit=20;default:exit=21;}
    
    switch(exit)
     {case 21:return name;
      case 20:
       if($$String["contains"](name,46))
        {return name;}
       else
        {return Pervasives["^"](name,".exe");}
       
      }
    };

var
 link=
  function(ppf,objfiles,output_name)
   {if(Clflags["nopervasives"][1])
     {var objfiles$1=objfiles;}
    else
     {if(Clflags["output_c_object"][1])
       {var objfiles$1=/* :: */[0,"stdlib.cma",objfiles];}
      else
       {var
         objfiles$1=
          /* :: */[0,
           "stdlib.cma",
           Pervasives["@"](objfiles,[0,"std_exit.cmo",0])];
        }
      }
    
    var tolink=List["fold_right"](scan_file,objfiles$1,0);
    
    Clflags["ccobjs"][1]=
    Pervasives["@"](Clflags["ccobjs"][1],lib_ccobjs[1]),
    0;
    Clflags["all_ccopts"][1]=
    Pervasives["@"](lib_ccopts[1],Clflags["all_ccopts"][1]),
    0;
    Clflags["dllibs"][1]=
    Pervasives["@"](lib_dllibs[1],Clflags["dllibs"][1]),
    0;
    if(!Clflags["custom_runtime"][1])
     {return link_bytecode(ppf,tolink,output_name,1);}
    else
     {if(!Clflags["output_c_object"][1])
       {var bytecode_name=Filename["temp_file"](0,"camlcode","");
        
        var prim_name=Filename["temp_file"](0,"camlprim",".c");
        
        try
         {link_bytecode(ppf,tolink,bytecode_name,0);
          var poc=Pervasives["open_out"](prim_name);
          
          Pervasives["output_string"]
           (poc,
            '#ifdef __cplusplus\nextern "C" {\n#endif\n#ifdef _WIN64\n#ifdef __MINGW32__\ntypedef long long value;\n#else\ntypedef __int64 value;\n#endif\n#else\ntypedef long value;\n#endif\n');
          Symtable["output_primitive_table"](poc);
          Pervasives["output_string"](poc,"#ifdef __cplusplus\n}\n#endif\n");
          Pervasives["close_out"](poc);
          var exec_name=fix_exec_name(output_name);
          
          if(!build_custom_runtime(prim_name,exec_name))
           {throw [0,$$Error,0];}
          else
           {}
          
          if(Clflags["make_runtime"][1])
           {Misc["remove_file"](bytecode_name);
            return Misc["remove_file"](prim_name);
            }
          else
           {return append_bytecode_and_cleanup
                    (bytecode_name,exec_name,prim_name);
            }
          }
        catch(x)
         {Misc["remove_file"](bytecode_name);
          Misc["remove_file"](prim_name);
          throw x;
          }
        }
      else
       {var basename=Filename["chop_extension"](output_name);
        
        if(Clflags["output_complete_object"][1])
         {var c_file=Filename["temp_file"](0,"camlobj",".c");}
        else
         {var c_file=Pervasives["^"](basename,".c");}
        
        if(Clflags["output_complete_object"][1])
         {var obj_file=Filename["temp_file"](0,"camlobj",Config["ext_obj"]);}
        else
         {var obj_file=Pervasives["^"](basename,Config["ext_obj"]);}
        
        if("unknown primitive:caml_sys_file_exists")
         {throw [0,$$Error,/* File_exists */[5,c_file]];}
        else
         {}
        
        var temps=0;
        
        try
         {link_bytecode_as_c(ppf,tolink,c_file);
          if(!Filename["check_suffix"](output_name,".c"))
           {temps=/* :: */[0,c_file,temps];
            
            if(Ccomp["compile_file"](c_file)!=0){throw [0,$$Error,0];}else{}
            
            if
             (!Filename["check_suffix"](output_name,Config["ext_obj"])||
              Clflags["output_complete_object"][1])
             {temps=/* :: */[0,obj_file,temps];
              
              if(Filename["check_suffix"](output_name,Config["ext_obj"]))
               {var match=[0,3,""];}
              else
               {var match=/* tuple */[0,2,Config["bytecomp_c_libraries"]];}
              
              var
               runtime_lib=
                Pervasives["^"]("-lcamlrun",Clflags["runtime_variant"][1]);
              
              if
               (!Ccomp["call_linker"]
                 (match[1],
                  output_name,
                  Pervasives["@"]
                   (/* :: */[0,obj_file,0],
                    Pervasives["@"]
                     (List["rev"](Clflags["ccobjs"][1]),
                      /* :: */[0,runtime_lib,0])),
                  match[2]))
               {throw [0,$$Error,0];}
              else
               {}
              }
            else
             {}
            }
          else
           {}
          
          return List["iter"](Misc["remove_file"],temps);
          }
        catch(x$1){List["iter"](Misc["remove_file"],temps);throw x$1;}
        }
      }
    };

var
 report_error=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Error while building custom runtime system",0],
                   "Error while building custom runtime system"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Generated bytecode executable cannot be run on a 32-bit platform",
                    0],
                   "Generated bytecode executable cannot be run on a 32-bit platform"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Cannot find file ",[15,0]],"Cannot find file %a"],
                  Location["print_filename"],
                  param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The file ",
                    [15,[11," is not a bytecode object file",0]]],
                   "The file %a is not a bytecode object file"],
                  Location["print_filename"],
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The output file ",
                    [2,
                     0,
                     [11,
                      " has the wrong name. The extension implies an object file but the link step was requested",
                      0]]],
                   "The output file %s has the wrong name. The extension implies an object file but the link step was requested"],
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Error while linking ",
                    [15,[12,58,[17,[0,"@ ",1,0],[15,0]]]]],
                   "Error while linking %a:@ %a"],
                  Location["print_filename"],
                  param[1],
                  Symtable["report_error"],
                  param[2]);
         
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
                           "make inconsistent assumptions over interface ",
                           [2,0,[17,0,0]]]]]]]]]],
                   "@[<hov>Files %a@ and %a@ make inconsistent assumptions over interface %s@]"],
                  Location["print_filename"],
                  param[2],
                  Location["print_filename"],
                  param[3],
                  param[1]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Cannot overwrite existing file ",[15,0]],
                   "Cannot overwrite existing file %a"],
                  Location["print_filename"],
                  param[1]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Error on dynamically loaded library: ",[15,0]],
                   "Error on dynamically loaded library: %a"],
                  Location["print_filename"],
                  param[1]);
         
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
   {lib_ccobjs[1]=0,0;
    lib_ccopts[1]=0,0;
    lib_dllibs[1]=0,0;
    missing_globals[1]=IdentSet[1],0;
    Consistbl["clear"](crc_interfaces);
    implementations_defined[1]=0,0;
    debug_info[1]=0,0;
    return output_code_string_counter[1]=0,0;
    };

module["exports"]=
{"link":link,
 "reset":reset,
 "check_consistency":check_consistency,
 "extract_crc_interfaces":extract_crc_interfaces,
 "Error":$$Error,
 "report_error":report_error};

