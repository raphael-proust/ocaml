// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Asmlink=require("Asmlink");
var Translmod=require("Translmod");
var Asmgen=require("Asmgen");
var Pervasives=require("Pervasives");
var List=require("List");
var Env=require("Env");
var Clflags=require("Clflags");
var Compilenv=require("Compilenv");
var Format=require("Format");
var Misc=require("Misc");
var Typemod=require("Typemod");
var Ccomp=require("Ccomp");
var Filename=require("Filename");
var Location=require("Location");
var Ident=require("Ident");
var Config=require("Config");


var $$Error="unknown primitive:caml_set_oo_id";

var
 read_member_info=
  function(pack_path,file)
   {var
     name=
      $$String["capitalize"]
       (Filename["basename"](Misc["chop_extensions"](file)));
    
    if(Filename["check_suffix"](file,".cmx"))
     {var match=Compilenv["read_unit_info"](file);
      
      var info=match[1];
      
      if("unknown primitive:caml_string_notequal")
       {throw [0,$$Error,/* Illegal_renaming */[0,name,file,info[1]]];}
      else
       {}
      
      if("unknown primitive:caml_string_notequal")
       {throw [0,$$Error,/* Wrong_for_pack */[2,file,pack_path]];}
      else
       {}
      
      Asmlink["check_consistency"](file,info,match[2]);
      Compilenv["cache_unit_info"](info);
      var kind=/* PM_impl */[0,info];
      }
    else
     {var kind=0;}
    
    return /* record */[0,file,name,kind];
    };

var
 check_units=
  function(members)
   {var
     check=
      function(forbidden,param)
       {if(param)
         {var mb=param[1];
          
          var match=mb[3];
          
          if(match)
           {List["iter"]
             (function(param$1)
               {var unit=param$1[1];
                
                if(List["mem"](unit,forbidden))
                 {throw [0,$$Error,/* Forward_reference */[1,mb[1],unit]];}
                else
                 {return 0;}
                },
              match[1][5])}
          else
           {}
          
          return check(Misc["list_remove"](mb[2],forbidden),param[2]);
          }
        else
         {return 0;}
        };
    
    return check(List["map"](function(mb){return mb[2];},members),members);
    };

var
 make_package_object=
  function(ppf,members,targetobj,targetname,coercion)
   {if(Clflags["keep_asm_file"][1])
     {var
       objtemp=
        Pervasives["^"]
         (Misc["chop_extension_if_any"](targetobj),
          Pervasives["^"](".pack",Config["ext_obj"]));
      }
    else
     {var
       objtemp=
        Filename["temp_file"]
         (0,Compilenv["make_symbol"](0,[0,""]),Config["ext_obj"]);
      }
    
    var
     components=
      List["map"]
       (function(m)
         {var match=m[3];
          
          if(match)
           {return /* Some */[0,Ident["create_persistent"](m[2])];}
          else
           {return 0;}
          },
        members);
    
    Asmgen["compile_implementation"]
     (0,
      Misc["chop_extension_if_any"](objtemp),
      ppf,
      Translmod["transl_store_package"]
       (components,Ident["create_persistent"](targetname),coercion));
    var
     objfiles=
      List["map"]
       (function(m)
         {return Pervasives["^"]
                  (Misc["chop_extension_if_any"](m[1]),Config["ext_obj"]);
          },
        List["filter"](function(m){return m[3]!=0;},members));
    
    var ok=Ccomp["call_linker"](3,targetobj,/* :: */[0,objtemp,objfiles],"");
    
    Misc["remove_file"](objtemp);
    if(!ok){throw [0,$$Error,0];}else{return 0;}
    };

var
 build_package_cmx=
  function(members,cmxfile)
   {var unit_names=List["map"](function(m){return m[2];},members);
    
    var
     filter=
      function(lst)
       {return List["filter"]
                (function(param){return !List["mem"](param[1],unit_names);},
                 lst);
        };
    
    var
     union=
      function(lst)
       {return List["fold_left"]
                (List["fold_left"]
                  (function(accu,n)
                    {if(List["mem"](n,accu))
                      {return accu;}
                     else
                      {return /* :: */[0,n,accu];}
                     }),
                 0,
                 lst);
        };
    
    var
     units=
      List["fold_right"]
       (function(m,accu)
         {var match=m[3];
          
          if(match){return /* :: */[0,match[1],accu];}else{return accu;}
          },
        members,
        0);
    
    var ui=Compilenv["current_unit_infos"](0);
    
    var
     pkg_infos=
      /* record */[0,
       ui[1],
       ui[2],
       Pervasives["@"]
        (List["flatten"](List["map"](function(info){return info[3];},units)),
         /* :: */[0,ui[2],0]),
       /* :: */[0,
        /* tuple */[0,ui[1],/* Some */[0,Env["crc_of_unit"](ui[1])]],
        filter(Asmlink["extract_crc_interfaces"](0))],
       filter(Asmlink["extract_crc_implementations"](0)),
       ui[6],
       union(List["map"](function(info){return info[7];},units)),
       union(List["map"](function(info){return info[8];},units)),
       union(List["map"](function(info){return info[9];},units)),
       List["exists"](function(info){return info[10];},units)];
    
    return Compilenv["write_unit_info"](pkg_infos,cmxfile);
    };

var
 package_object_files=
  function(ppf,files,targetcmx,targetobj,targetname,coercion)
   {var match=Clflags["for_package"][1];
    
    if(match)
     {var pack_path=Pervasives["^"](match[1],Pervasives["^"](".",targetname));
      }
    else
     {var pack_path=targetname;}
    
    var members=Misc["map_left_right"](read_member_info(pack_path),files);
    
    check_units(members);
    make_package_object(ppf,members,targetobj,targetname,coercion);
    return build_package_cmx(members,targetcmx);
    };

var
 package_files=
  function(ppf,initial_env,files,targetcmx)
   {var
     files$1=
      List["map"]
       (function(f)
         {try
           {return Misc["find_in_path"](Config["load_path"][1],f);}
          catch(exn)
           {if(exn=Not_found)
             {throw [0,$$Error,/* File_not_found */[4,f]];}
            else
             {throw exn;}
            }
          },
        files);
    
    var prefix=Misc["chop_extensions"](targetcmx);
    
    var targetcmi=Pervasives["^"](prefix,".cmi");
    
    var
     targetobj=
      Pervasives["^"]
       (Misc["chop_extension_if_any"](targetcmx),Config["ext_obj"]);
    
    var targetname=$$String["capitalize"](Filename["basename"](prefix));
    
    Location["input_name"][1]=targetcmx,0;
    Compilenv["reset"](Clflags["for_package"][1],targetname);
    try
     {var
       coercion=
        Typemod["package_units"](initial_env,files$1,targetcmi,targetname);
      
      return package_object_files
              (ppf,files$1,targetcmx,targetobj,targetname,coercion);
      }
    catch(x)
     {Misc["remove_file"](targetcmx);Misc["remove_file"](targetobj);throw x;}
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
                   [11,"Error during partial linking",0],
                   "Error during partial linking"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Wrong file naming: ",
                    [15,
                     [17,
                      [0,"@ ",1,0],
                      [11,
                       "contains the code for",
                       [17,
                        [0,"@ ",1,0],
                        [2,0,[11," when ",[2,0,[11," was expected",0]]]]]]]]],
                   "Wrong file naming: %a@ contains the code for@ %s when %s was expected"],
                  Location["print_filename"],
                  param[2],
                  param[1],
                  param[3]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Forward reference to ",[2,0,[11," in file ",[15,0]]]],
                   "Forward reference to %s in file %a"],
                  param[2],
                  Location["print_filename"],
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "File ",
                    [15,
                     [17,
                      [0,"@ ",1,0],
                      [11,
                       "was not compiled with the `-for-pack ",
                       [2,0,[11,"' option",0]]]]]],
                   "File %a@ was not compiled with the `-for-pack %s' option"],
                  Location["print_filename"],
                  param[1],
                  param[2]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Error while assembling ",[2,0,0]],
                   "Error while assembling %s"],
                  param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"File ",[2,0,[11," not found",0]]],
                   "File %s not found"],
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

module["exports"]=
{"package_files":package_files,"Error":$$Error,"report_error":report_error};

