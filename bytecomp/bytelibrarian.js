// Generated CODE, PLEASE EDIT WITH CARE 

var Bytelink=require("./bytelink.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Clflags=require("./clflags.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Location=require("./location.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Bytelibrarian.Error",0]);

var
 copy_compunit=
  function(ic,oc,compunit)
   {Pervasives["seek_in"](ic,compunit[2]);
    compunit[2]=Pervasives["pos_out"](oc);
    compunit[7]=Clflags["link_everything"][1];
    Misc["copy_file_chunk"](ic,oc,compunit[3]);
    if(compunit[8]>0)
     {Pervasives["seek_in"](ic,compunit[8]);
      compunit[8]=Pervasives["pos_out"](oc);
      return Misc["copy_file_chunk"](ic,oc,compunit[9]);
      }
    else
     {return 0;}
    };

var lib_ccobjs=[0,/* [] */0];

var lib_ccopts=[0,/* [] */0];

var lib_dllibs=[0,/* [] */0];

var
 add_ccobjs=
  function(l)
   {if(!Clflags["no_auto_link"][1])
     {if(l[2]){Clflags["custom_runtime"][1]=/* true */1}else{}
      
      lib_ccobjs[1]=Pervasives["@"](lib_ccobjs[1],l[3]);
      lib_ccopts[1]=Pervasives["@"](lib_ccopts[1],l[4]);
      return lib_dllibs[1]=Pervasives["@"](lib_dllibs[1],l[5]),0;
      }
    else
     {return 0;}
    };

var
 copy_object_file=
  function(ppf,oc,name)
   {try
     {var file_name=Misc["find_in_path"](Config["load_path"][1],name);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,$$Error,/* File_not_found */[0,name]];}
      else
       {throw exn;}
      }
    
    var ic=Pervasives["open_in_bin"](file_name);
    
    try
     {var
       buffer=
        Pervasives["really_input_string"]
         (ic,Config["cmo_magic_number"]["length"]);
      
      if
       (CamlPrimitive["caml_string_equal"](buffer,Config["cmo_magic_number"]))
       {var compunit_pos=Pervasives["input_binary_int"](ic);
        
        Pervasives["seek_in"](ic,compunit_pos);
        var compunit=Pervasives["input_value"](ic);
        
        Bytelink["check_consistency"](ppf,file_name,compunit);
        copy_compunit(ic,oc,compunit);
        Pervasives["close_in"](ic);
        return /* :: */[0,compunit,/* [] */0];
        }
      else
       {if
         (CamlPrimitive["caml_string_equal"]
           (buffer,Config["cma_magic_number"]))
         {var toc_pos=Pervasives["input_binary_int"](ic);
          
          Pervasives["seek_in"](ic,toc_pos);
          var toc=Pervasives["input_value"](ic);
          
          List["iter"](Bytelink["check_consistency"](ppf,file_name),toc[1]);
          add_ccobjs(toc);
          List["iter"](copy_compunit(ic,oc),toc[1]);
          Pervasives["close_in"](ic);
          return toc[1];
          }
        else
         {throw [0,$$Error,/* Not_an_object_file */[1,file_name]];}
        }
      }
    catch(x)
     {if(x===CamlPrimitive["caml_global_data"]["End_of_file"])
       {Pervasives["close_in"](ic);
        throw [0,$$Error,/* Not_an_object_file */[1,file_name]];
        }
      else
       {Pervasives["close_in"](ic);throw x;}
      }
    };

var
 create_archive=
  function(ppf,file_list,lib_name)
   {var outchan=Pervasives["open_out_bin"](lib_name);
    
    try
     {Pervasives["output_string"](outchan,Config["cma_magic_number"]);
      var ofs_pos_toc=Pervasives["pos_out"](outchan);
      
      Pervasives["output_binary_int"](outchan,0);
      var
       units=
        List["flatten"](List["map"](copy_object_file(ppf,outchan),file_list));
      
      var
       toc=
        /* record */[0,
         units,
         Clflags["custom_runtime"][1],
         Pervasives["@"](Clflags["ccobjs"][1],lib_ccobjs[1]),
         Pervasives["@"](Clflags["all_ccopts"][1],lib_ccopts[1]),
         Pervasives["@"](Clflags["dllibs"][1],lib_dllibs[1])];
      
      var pos_toc=Pervasives["pos_out"](outchan);
      
      Pervasives["output_value"](outchan,toc);
      Pervasives["seek_out"](outchan,ofs_pos_toc);
      Pervasives["output_binary_int"](outchan,pos_toc);
      return Pervasives["close_out"](outchan);
      }
    catch(x)
     {Pervasives["close_out"](outchan);Misc["remove_file"](lib_name);throw x;}
    };

var
 report_error=
  function(ppf,param)
   {switch(param[0])
     {case 0:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Cannot find file ",
                  [/* String */2,/* No_padding */0,/* End_of_format */0]],
                 "Cannot find file %s"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "The file ",
                  [/* Alpha */15,
                   [/* String_literal */11,
                    " is not a bytecode object file",
                    /* End_of_format */0]]],
                 "The file %a is not a bytecode object file"],
                Location["print_filename"],
                param[1]);
       
      }
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,
                Location["error_of_printer_file"](report_error,param[2])];
        }
      else
       {return /* None */0;}
      });

var
 reset=
  function(param)
   {lib_ccobjs[1]=/* [] */0;
    lib_ccopts[1]=/* [] */0;
    return lib_dllibs[1]=/* [] */0,0;
    };

module["exports"]=
{"create_archive":create_archive,
 "Error":$$Error,
 "report_error":report_error,
 "reset":reset};

