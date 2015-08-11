// Generated CODE, PLEASE EDIT WITH CARE 

var Asmlink=require("Asmlink");
var Pervasives=require("Pervasives");
var List=require("List");
var Clflags=require("Clflags");
var Compilenv=require("Compilenv");
var Format=require("Format");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Filename=require("Filename");
var Location=require("Location");
var Config=require("Config");


var $$Error="unknown primitive:caml_set_oo_id";

var
 read_info=
  function(name)
   {try
     {var filename=Misc["find_in_path"](Config["load_path"][1],name);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,$$Error,/* File_not_found */[0,name]];}
      else
       {throw exn;}
      }
    
    var match=Compilenv["read_unit_info"](filename);
    
    var info=match[1];
    
    info[10]=Clflags["link_everything"][1],0;
    info[6]=0,0;
    return /* tuple */[0,
            Pervasives["^"]
             (Filename["chop_suffix"](filename,".cmx"),Config["ext_obj"]),
            /* tuple */[0,info,match[2]]];
    };

var
 create_archive=
  function(file_list,lib_name)
   {var
     archive_name=
      Pervasives["^"]
       (Misc["chop_extension_if_any"](lib_name),Config["ext_lib"]);
    
    var outchan=Pervasives["open_out_bin"](lib_name);
    
    try
     {Pervasives["output_string"](outchan,Config["cmxa_magic_number"]);
      var match=List["split"](List["map"](read_info,file_list));
      
      var descr_list=match[2];
      
      List["iter2"]
       (function(file_name,param)
         {return Asmlink["check_consistency"](file_name,param[1],param[2]);},
        file_list,
        descr_list);
      var
       infos=
        /* record */[0,
         descr_list,
         Clflags["ccobjs"][1],
         Clflags["all_ccopts"][1]];
      
      Pervasives["output_value"](outchan,infos);
      if(Ccomp["create_archive"](archive_name,match[1])!=0)
       {throw [0,$$Error,/* Archiver_error */[1,archive_name]];}
      else
       {}
      
      return Pervasives["close_out"](outchan);
      }
    catch(x)
     {Pervasives["close_out"](outchan);
      Misc["remove_file"](lib_name);
      Misc["remove_file"](archive_name);
      throw x;
      }
    };

var
 report_error=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,[11,"Cannot find file ",[2,0,0]],"Cannot find file %s"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,"Error while creating the library ",[2,0,0]],
                 "Error while creating the library %s"],
                param[1]);
       
      }
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

module["exports"]=
{"create_archive":create_archive,"Error":$$Error,"report_error":report_error};

