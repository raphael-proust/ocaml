// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Bytegen=require("Bytegen");
var Printlambda=require("Printlambda");
var Translmod=require("Translmod");
var Bytelink=require("Bytelink");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Clflags=require("Clflags");
var Format=require("Format");
var Set=require("Set");
var Misc=require("Misc");
var Typemod=require("Typemod");
var Path=require("Path");
var Filename=require("Filename");
var Subst=require("Subst");
var Emitcode=require("Emitcode");
var Location=require("Location");
var Ident=require("Ident");
var Config=require("Config");


var $$let=$$String;

var StringSet=Set["Make"]([0,$$let[25]]);

var $$Error="unknown primitive:caml_set_oo_id";

var relocs=[0,0];

var events=[0,0];

var debug_dirs=[0,StringSet[1]];

var primitives=[0,0];

var force_link=[0,0];

var
 rename_relocation=
  function(packagename,objfile,mapping,defined,base,param)
   {var rel=param[1];
    
    var exit;
    
    switch(rel)
     {case 0:exit=54;
      case 1:
       var id=rel[1];
       
       try
        {var id$prime=List["assoc"](id,mapping);
         
         if(List["mem"](id,defined))
          {var rel$prime=/* Reloc_getglobal */[1,id$prime];}
         else
          {throw [0,$$Error,/* Forward_reference */[0,objfile,id]];}
         }
       catch(exn)
        {if(exn=Not_found)
          {var name=Ident["name"](id);
           
           if($$String["contains"](name,46))
            {var
              rel$prime=
               /* Reloc_getglobal */[1,
                Ident["create_persistent"]
                 (Pervasives["^"](packagename,Pervasives["^"](".",name)))];
             }
           else
            {var rel$prime=rel;}
           }
         else
          {throw exn;}
         }
       
      case 2:
       var id$1=rel[1];
       
       try
        {var id$prime$1=List["assoc"](id$1,mapping);
         
         if(List["mem"](id$1,defined))
          {throw [0,$$Error,/* Multiple_definition */[1,objfile,id$1]];}
         else
          {var rel$prime=/* Reloc_setglobal */[2,id$prime$1];}
         }
       catch(exn$1)
        {if(exn$1=Not_found)
          {var name$1=Ident["name"](id$1);
           
           if($$String["contains"](name$1,46))
            {var
              rel$prime=
               /* Reloc_setglobal */[2,
                Ident["create_persistent"]
                 (Pervasives["^"](packagename,Pervasives["^"](".",name$1)))];
             }
           else
            {var rel$prime=rel;}
           }
         else
          {throw exn$1;}
         }
       
      case 3:exit=54;
      }
    
    switch(exit){case 54:var rel$prime=rel;}
    
    return relocs[1]=
           /* :: */[0,/* tuple */[0,rel$prime,base+param[2]],relocs[1]],
           0;
    };

var
 relocate_debug=
  function(base,prefix,subst,ev)
   {var newrecord="unknown primitive:duprecord regular 10";
    
    newrecord[1]=base+ev[1],0;
    newrecord[2]=Pervasives["^"](prefix,Pervasives["^"](".",ev[2])),0;
    newrecord[7]=Subst["compose"](ev[7],subst),0;
    var ev$prime=newrecord;
    
    return events[1]=/* :: */[0,ev$prime,events[1]],0;
    };

var
 read_member_info=
  function(file)
   {var
     name=
      $$String["capitalize"]
       (Filename["basename"](Misc["chop_extensions"](file)));
    
    if(Filename["check_suffix"](file,".cmo"))
     {var ic=Pervasives["open_in_bin"](file);
      
      try
       {var
         buffer=
          Pervasives["really_input_string"]
           (ic,Config["cmo_magic_number"]["length"]);
        
        if("unknown primitive:caml_string_notequal")
         {throw [0,$$Error,/* Not_an_object_file */[2,file]];}
        else
         {}
        
        var compunit_pos=Pervasives["input_binary_int"](ic);
        
        Pervasives["seek_in"](ic,compunit_pos);
        var compunit=Pervasives["input_value"](ic);
        
        if("unknown primitive:caml_string_notequal")
         {throw [0,$$Error,/* Illegal_renaming */[3,name,file,compunit[1]]];}
        else
         {}
        
        Pervasives["close_in"](ic);
        var kind=/* PM_impl */[0,compunit];
        }
      catch(x){Pervasives["close_in"](ic);throw x;}
      }
    else
     {var kind=0;}
    
    return /* record */[0,file,name,kind];
    };

var
 rename_append_bytecode=
  function
   (ppf,packagename,oc,mapping,defined,ofs,prefix,subst,objfile,compunit)
   {var ic=Pervasives["open_in_bin"](objfile);
    
    try
     {Bytelink["check_consistency"](ppf,objfile,compunit);
      List["iter"]
       (rename_relocation(packagename,objfile,mapping,defined,ofs),
        compunit[4]);
      primitives[1]=Pervasives["@"](compunit[6],primitives[1]),0;
      if(compunit[7]){force_link[1]=1,0}else{}
      
      Pervasives["seek_in"](ic,compunit[2]);
      Misc["copy_file_chunk"](ic,oc,compunit[3]);
      if(Clflags["debug"][1]&&compunit[8]>0)
       {Pervasives["seek_in"](ic,compunit[8]),
        List["iter"]
         (relocate_debug(ofs,prefix,subst),Pervasives["input_value"](ic)),
        debug_dirs[1]=
        List["fold_left"]
         (function(s,e){return StringSet[4](e,s);},
          debug_dirs[1],
          Pervasives["input_value"](ic)),
        0}
      else
       {}
      
      Pervasives["close_in"](ic);
      return compunit[3];
      }
    catch(x){Pervasives["close_in"](ic);throw x;}
    };

var
 rename_append_bytecode_list=
  function(ppf,packagename,oc,mapping,defined,ofs,prefix,subst,param)
   {if(param)
     {var rem=param[2];
      
      var m=param[1];
      
      var match=m[3];
      
      if(match)
       {var
         size=
          rename_append_bytecode
           (ppf,packagename,oc,mapping,defined,ofs,prefix,subst,m[1],match[1]);
        
        var id=Ident["create_persistent"](m[2]);
        
        var root=/* Pident */[0,Ident["create_persistent"](prefix)];
        
        return rename_append_bytecode_list
                (ppf,
                 packagename,
                 oc,
                 mapping,
                 /* :: */[0,id,defined],
                 ofs+size,
                 prefix,
                 Subst["add_module"]
                  (id,
                   /* Pdot */[1,root,Ident["name"](id),Path["nopos"]],
                   subst),
                 rem);
        }
      else
       {return rename_append_bytecode_list
                (ppf,packagename,oc,mapping,defined,ofs,prefix,subst,rem);
        }
      }
    else
     {return ofs;}
    };

var
 build_global_target=
  function(oc,target_name,members,mapping,pos,coercion)
   {var
     components=
      List["map2"]
       (function(m,param)
         {var match=m[3];
          
          if(match){return /* Some */[0,param[2]];}else{return 0;}
          },
        members,
        mapping);
    
    var
     lam=
      Translmod["transl_package"]
       (components,Ident["create_persistent"](target_name),coercion);
    
    if(Clflags["dump_lambda"][1])
     {Format["printf"]([0,[15,[17,4,0]],"%a@."],Printlambda["lambda"],lam)}
    else
     {}
    
    var instrs=Bytegen["compile_implementation"](target_name,lam);
    
    var rel=Emitcode["to_packed_file"](oc,instrs);
    
    return relocs[1]=
           Pervasives["@"]
            (List["map"]
              (function(param){return /* tuple */[0,param[1],pos+param[2]];},
               rel),
             relocs[1]),
           0;
    };

var
 package_object_files=
  function(ppf,files,targetfile,targetname,coercion)
   {var members=Misc["map_left_right"](read_member_info,files);
    
    var unit_names=List["map"](function(m){return m[2];},members);
    
    var
     mapping=
      List["map"]
       (function(name)
         {return /* tuple */[0,
                  Ident["create_persistent"](name),
                  Ident["create_persistent"]
                   (Pervasives["^"](targetname,Pervasives["^"](".",name)))];
          },
        unit_names);
    
    var oc=Pervasives["open_out_bin"](targetfile);
    
    try
     {Pervasives["output_string"](oc,Config["cmo_magic_number"]);
      var pos_depl=Pervasives["pos_out"](oc);
      
      Pervasives["output_binary_int"](oc,0);
      var pos_code=Pervasives["pos_out"](oc);
      
      var
       ofs=
        rename_append_bytecode_list
         (ppf,targetname,oc,mapping,0,0,targetname,Subst["identity"],members);
      
      build_global_target(oc,targetname,members,mapping,ofs,coercion);
      var pos_debug=Pervasives["pos_out"](oc);
      
      if(Clflags["debug"][1]&&events[1]!=0)
       {Pervasives["output_value"](oc,List["rev"](events[1])),
        Pervasives["output_value"](oc,StringSet[20](debug_dirs[1]))}
      else
       {}
      
      var pos_final=Pervasives["pos_out"](oc);
      
      var
       imports=
        List["filter"]
         (function(param){return !List["mem"](param[1],unit_names);},
          Bytelink["extract_crc_interfaces"](0));
      
      var
       compunit=
        /* record */[0,
         targetname,
         pos_code,
         pos_debug-pos_code,
         List["rev"](relocs[1]),
         /* :: */[0,
          /* tuple */[0,
           targetname,
           /* Some */[0,Env["crc_of_unit"](targetname)]],
          imports],
         primitives[1],
         force_link[1],
         pos_final>pos_debug?pos_debug:0,
         pos_final-pos_debug];
      
      Pervasives["output_value"](oc,compunit);
      Pervasives["seek_out"](oc,pos_depl);
      Pervasives["output_binary_int"](oc,pos_final);
      return Pervasives["close_out"](oc);
      }
    catch(x){Pervasives["close_out"](oc);throw x;}
    };

var
 package_files=
  function(ppf,initial_env,files,targetfile)
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
    
    var prefix=Misc["chop_extensions"](targetfile);
    
    var targetcmi=Pervasives["^"](prefix,".cmi");
    
    var targetname=$$String["capitalize"](Filename["basename"](prefix));
    
    try
     {var
       coercion=
        Typemod["package_units"](initial_env,files$1,targetcmi,targetname);
      
      return package_object_files(ppf,files$1,targetfile,targetname,coercion);
      }
    catch(x){Misc["remove_file"](targetfile);throw x;}
    };

var
 report_error=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,"Forward reference to ",[2,0,[11," in file ",[15,0]]]],
                 "Forward reference to %s in file %a"],
                Ident["name"](param[2]),
                Location["print_filename"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,"File ",[15,[11," redefines ",[2,0,0]]]],
                 "File %a redefines %s"],
                Location["print_filename"],
                param[1],
                Ident["name"](param[2]));
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,
                 [15,[11," is not a bytecode object file",0]],
                 "%a is not a bytecode object file"],
                Location["print_filename"],
                param[1]);
       
      case 3:
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
       
      case 4:
       return Format["fprintf"]
               (ppf,
                [0,[11,"File ",[2,0,[11," not found",0]]],"File %s not found"],
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

var
 reset=
  function(param)
   {relocs[1]=0,0;events[1]=0,0;primitives[1]=0,0;return force_link[1]=0,0;};

module["exports"]=
{"package_files":package_files,
 "Error":$$Error,
 "report_error":report_error,
 "reset":reset};

