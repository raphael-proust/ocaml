// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Dll=require("Dll");
var Runtimedef=require("Runtimedef");
var Pervasives=require("Pervasives");
var List=require("List");
var Predef=require("Predef");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Format=require("Format");
var Obj=require("Obj");
var Misc=require("Misc");
var Lambda=require("Lambda");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Bytesections=require("Bytesections");
var Tbl=require("Tbl");
var Location=require("Location");
var Ident=require("Ident");
var Config=require("Config");
var $$Array=require("Array");
var Sys=require("Sys");


var $$Error="unknown primitive:caml_set_oo_id";

var empty_numtable=/* record */[0,0,Tbl["empty"]];

var find_numtable=function(nt,key){return Tbl["find"](key,nt[2]);};

var
 enter_numtable=
  function(nt,key)
   {var n=nt[1][1];
    
    nt[1]=/* record */[0,n+1,Tbl["add"](key,n,nt[1][2])],0;
    return n;
    };

var
 incr_numtable=
  function(nt){var n=nt[1][1];nt[1]=/* record */[0,n+1,nt[1][2]],0;return n;};

var global_table=[0,empty_numtable];

var literal_table=[0,0];

var is_global_defined=function(id){return Tbl["mem"](id,global_table[1][2]);};

var
 slot_for_getglobal=
  function(id)
   {try
     {return find_numtable(global_table[1],id);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,$$Error,/* Undefined_global */[0,Ident["name"](id)]];}
      else
       {throw exn;}
      }
    };

var slot_for_setglobal=function(id){return enter_numtable(global_table,id);};

var
 slot_for_literal=
  function(cst)
   {var n=incr_numtable(global_table);
    
    literal_table[1]=/* :: */[0,/* tuple */[0,n,cst],literal_table[1]],0;
    return n;
    };

var c_prim_table=[0,empty_numtable];

var set_prim_table=function(name){return 0;};

var
 num_of_prim=
  function(name)
   {try
     {return find_numtable(c_prim_table[1],name);}
    catch(exn)
     {if(exn=Not_found)
       {if
         (Clflags["custom_runtime"][1]||
          "unknown primitive:caml_string_notequal"||
          Clflags["no_check_prims"][1])
         {return enter_numtable(c_prim_table,name);}
        else
         {try
           {var symb=Dll["find_primitive"](name);}
          catch(exn$1)
           {if(exn$1=Not_found)
             {throw [0,$$Error,/* Unavailable_primitive */[1,name]];}
            else
             {throw exn$1;}
            }
          
          var num=enter_numtable(c_prim_table,name);
          
          Dll["synchronize_primitive"](num,symb);
          return num;
          }
        }
      else
       {throw exn;}
      }
    };

var
 require_primitive=
  function(name){if(name[0]!=37){return 0;}else{return 0;}};

var
 all_primitives=
  function(param)
   {var prim="unknown primitive:caml_make_vect";
    
    Tbl["iter"]
     (function(name,number){return prim[number]=name,0;},c_prim_table[1][2]);
    return prim;
    };

var
 data_primitive_names=
  function(param)
   {var prim=all_primitives(0);
    
    var b=Buffer["create"](512);
    
    for(var i=0;i<=prim["length"]-1;i++)
     {Buffer["add_string"](b,prim[i]),Buffer["add_char"](b,0)}
    
    return Buffer["contents"](b);
    };

var
 output_primitive_names=
  function(outchan)
   {return Pervasives["output_string"](outchan,data_primitive_names(0));};

var
 output_primitive_table=
  function(outchan)
   {var prim=all_primitives(0);
    
    for(var i=0;i<=prim["length"]-1;i++)
     {Printf["fprintf"]
       (outchan,
        [0,[11,"extern value ",[2,0,[11,"();\n",0]]],"extern value %s();\n"],
        prim[i])}
    
    Printf["fprintf"]
     (outchan,
      [0,
       [11,"typedef value (*primitive)();\n",0],
       "typedef value (*primitive)();\n"]);
    Printf["fprintf"]
     (outchan,
      [0,
       [11,"primitive caml_builtin_cprim[] = {\n",0],
       "primitive caml_builtin_cprim[] = {\n"]);
    for(var i$1=0;i$1<=prim["length"]-1;i$1++)
     {Printf["fprintf"]
       (outchan,[0,[11,"  ",[2,0,[11,",\n",0]]],"  %s,\n"],prim[i$1])}
    
    Printf["fprintf"]
     (outchan,[0,[11,"  (primitive) 0 };\n",0],"  (primitive) 0 };\n"]);
    Printf["fprintf"]
     (outchan,
      [0,
       [11,"const char * caml_names_of_builtin_cprim[] = {\n",0],
       "const char * caml_names_of_builtin_cprim[] = {\n"]);
    for(var i$2=0;i$2<=prim["length"]-1;i$2++)
     {Printf["fprintf"]
       (outchan,[0,[11,'  "',[2,0,[11,'",\n',0]]],'  "%s",\n'],prim[i$2])}
    
    return Printf["fprintf"]
            (outchan,[0,[11,"  (char *) 0 };\n",0],"  (char *) 0 };\n"]);
    };

var
 init=
  function(param)
   {$$Array["iteri"]
     (function(i,name)
       {try
         {var id=List["assoc"](name,Predef["builtin_values"]);}
        catch(exn)
         {if(exn=Not_found)
           {var id=Misc["fatal_error"]("Symtable.init");}
          else
           {throw exn;}
          }
        
        var c=slot_for_setglobal(id);
        
        var
         cst=
          /* Const_block */[2,
           Obj["object_tag"],
           Lambda["default_tag_info"],
           /* :: */[0,
            /* Const_base */[0,/* Const_string */[2,name,0]],
            /* :: */[0,/* Const_base */[0,/* Const_int */[0,-i-1]],0]]];
        
        return literal_table[1]=
               /* :: */[0,/* tuple */[0,c,cst],literal_table[1]],
               0;
        },
      Runtimedef["builtin_exceptions"]);
    if(Clflags["use_prims"][1]["length"]>0)
     {var ic=Pervasives["open_in"](Clflags["use_prims"][1]);
      
      try
       {while(1){set_prim_table(Pervasives["input_line"](ic))}return 0;}
      catch(x)
       {if(x=End_of_file)
         {return Pervasives["close_in"](ic);}
        else
         {Pervasives["close_in"](ic);throw x;}
        }
      }
    else
     {if(Clflags["use_runtime"][1]["length"]>0)
       {var primfile=Filename["temp_file"](0,"camlprims","");
        
        try
         {if("unknown primitive:caml_sys_system_command"!=0)
           {throw [0,$$Error,/* Wrong_vm */[2,Clflags["use_runtime"][1]]];}
          else
           {}
          
          var ic$1=Pervasives["open_in"](primfile);
          
          try
           {while(1){set_prim_table(Pervasives["input_line"](ic$1))}return 0;}
          catch(x$1)
           {if(x$1=End_of_file)
             {Pervasives["close_in"](ic$1);
              return Misc["remove_file"](primfile);
              }
            else
             {Pervasives["close_in"](ic$1);throw x$1;}
            }
          }
        catch(x$2){Misc["remove_file"](primfile);throw x$2;}
        }
      else
       {return $$Array["iter"]
                (set_prim_table,Runtimedef["builtin_primitives"]);
        }
      }
    };

var
 gen_patch_int=
  function(str_set,buff,pos,n)
   {str_set(buff,pos,n);
    str_set(buff,pos+1,n>>8);
    str_set(buff,pos+2,n>>16);
    return str_set(buff,pos+3,n>>24);
    };

var
 gen_patch_object=
  function(str_set,buff,patchlist)
   {return List["iter"]
            (function(param)
              {var match=param[1];
               
               switch(match)
                {case 0:
                  return gen_patch_int
                          (str_set,buff,param[2],slot_for_literal(match[1]));
                  
                 case 1:
                  return gen_patch_int
                          (str_set,buff,param[2],slot_for_getglobal(match[1]));
                  
                 case 2:
                  return gen_patch_int
                          (str_set,buff,param[2],slot_for_setglobal(match[1]));
                  
                 case 3:
                  return gen_patch_int
                          (str_set,buff,param[2],num_of_prim(match[1]));
                  
                 }
               },
             patchlist);
    };

var
 patch_object=
  gen_patch_object
   (function(prim,prim$1,prim$2){return prim[prim$1]=prim$2,0;});

var ls_patch_object=gen_patch_object(Misc["LongString"][4]);

var
 transl_const=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:
       var match=param[1];
       
       switch(match)
        {case 3:return "unknown primitive:caml_float_of_string";
         default:return match[1];}
       
      case 1:exit=45;
      case 2:
       var fields=param[3];
       
       var block="unknown primitive:caml_obj_block";
       
       var pos=[0,0];
       
       List["iter"]
        (function(c){block[pos[1]]=transl_const(c),0;return pos[0]++;},fields);
       return block;
       
      case 3:
       return $$Array["of_list"]
               (List["map"]
                 (function(f)
                   {return "unknown primitive:caml_float_of_string";},
                  param[1]));
       
      case 4:exit=45;
      }
    
    switch(exit){case 45:return param[1];}
    };

var
 initial_global_table=
  function(param)
   {var glob="unknown primitive:caml_make_vect";
    
    List["iter"]
     (function(param$1){return glob[param$1[1]]=transl_const(param$1[2]),0;},
      literal_table[1]);
    literal_table[1]=0,0;
    return glob;
    };

var
 output_global_map=
  function(oc){return Pervasives["output_value"](oc,global_table[1]);};

var data_global_map=function(param){return global_table[1];};

var
 update_global_table=
  function(param)
   {var ng=global_table[1][1];
    
    if(ng>"unknown primitive:caml_get_global_data"["length"])
     {"unknown primitive:caml_realloc_global"}
    else
     {}
    
    var glob="unknown primitive:caml_get_global_data";
    
    List["iter"]
     (function(param$1){return glob[param$1[1]]=transl_const(param$1[2]),0;},
      literal_table[1]);
    return literal_table[1]=0,0;
    };

var
 read_sections=
  function(param)
   {try
     {var sections="unknown primitive:caml_get_section_table";
      
      return /* record */[0,
              function(name){return List["assoc"](name,sections);},
              function(name){return List["assoc"](name,sections);},
              function(param$1){return 0;}];
      }
    catch(exn)
     {if(exn=Not_found)
       {var ic=Pervasives["open_in_bin"](Sys["executable_name"]);
        
        Bytesections["read_toc"](ic);
        return /* record */[0,
                Bytesections["read_section_string"](ic),
                Bytesections["read_section_struct"](ic),
                function(param$1){return Pervasives["close_in"](ic);}];
        }
      else
       {throw exn;}
      }
    };

var
 init_toplevel=
  function(param)
   {try
     {var sect=read_sections(0);
      
      global_table[1]=sect[2]("SYMB"),0;
      var prims=sect[1]("PRIM");
      
      c_prim_table[1]=empty_numtable,0;
      var pos=0;
      
      while(pos<prims["length"])
       {var i=$$String["index_from"](prims,pos,0);
        
        set_prim_table($$String["sub"](prims,pos,i-pos));
        pos=i+1;
        }
      
      try
       {var dllpath=sect[1]("DLPT");}
      catch(exn){if(exn=Not_found){var dllpath="";}else{throw exn;}}
      
      Dll["init_toplevel"](dllpath);
      try
       {var crcintfs=sect[2]("CRCS");}
      catch(exn$1){if(exn$1=Not_found){var crcintfs=0;}else{throw exn$1;}}
      
      sect[3](0);
      return crcintfs;
      }
    catch(exn$2)
     {var exit;
      
      if(exn$2=Bytesections["Bad_magic_number"])
       {exit=19;}
      else
       {if(exn$2=Not_found)
         {exit=19;}
        else
         {if(exn$2[1]=Failure){exit=19;}else{throw exn$2;}}
        }
      
      switch(exit)
       {case 19:
         return Misc["fatal_error"]
                 ("Toplevel bytecode executable is corrupted");
         
        }
      }
    };

var get_global_position=function(id){return slot_for_getglobal(id);};

var
 get_global_value=
  function(id)
   {return "unknown primitive:caml_get_global_data"[slot_for_getglobal(id)];};

var
 assign_global_value=
  function(id,v)
   {return "unknown primitive:caml_get_global_data"[slot_for_getglobal(id)]=
           v,
           0;
    };

var
 check_global_initialized=
  function(patchlist)
   {var
     defined_globals=
      List["fold_left"]
       (function(accu,rel)
         {var match=rel[1];
          
          switch(match)
           {case 2:return /* :: */[0,match[1],accu];default:return accu;}
          },
        0,
        patchlist);
    
    var
     check_reference=
      function(param)
       {var match=param[1];
        
        switch(match)
         {case 1:
           var id=match[1];
           
           if(!List["mem"](id,defined_globals)&&"unknown primitive:isint")
            {throw [0,$$Error,/* Uninitialized_global */[3,Ident["name"](id)]];
             }
           else
            {return 0;}
           
          default:return 0;}
        };
    
    return List["iter"](check_reference,patchlist);
    };

var current_state=function(param){return global_table[1];};

var restore_state=function(st){return global_table[1]=st,0;};

var
 hide_additions=
  function(st)
   {if(st[1]>global_table[1][1])
     {Misc["fatal_error"]("Symtable.hide_additions")}
    else
     {}
    
    return global_table[1]=/* record */[0,global_table[1][1],st[2]],0;
    };

var
 filter_global_map=
  function(p,gmap)
   {var newtbl=[0,Tbl["empty"]];
    
    Tbl["iter"]
     (function(id,num)
       {if(p(id))
         {return newtbl[1]=Tbl["add"](id,num,newtbl[1]),0;}
        else
         {return 0;}
        },
      gmap[2]);
    return /* record */[0,gmap[1],newtbl[1]];
    };

var
 report_error=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,"Reference to undefined global `",[2,0,[12,39,0]]],
                 "Reference to undefined global `%s'"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,
                  "The external function `",
                  [2,0,[11,"' is not available",0]]],
                 "The external function `%s' is not available"],
                param[1]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,"Cannot find or execute the runtime system ",[2,0,0]],
                 "Cannot find or execute the runtime system %s"],
                param[1]);
       
      case 3:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,
                  "The value of the global `",
                  [2,0,[11,"' is not yet computed",0]]],
                 "The value of the global `%s' is not yet computed"],
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
   {global_table[1]=empty_numtable,0;
    literal_table[1]=0,0;
    return c_prim_table[1]=empty_numtable,0;
    };

module["exports"]=
{"init":init,
 "patch_object":patch_object,
 "ls_patch_object":ls_patch_object,
 "require_primitive":require_primitive,
 "initial_global_table":initial_global_table,
 "output_global_map":output_global_map,
 "output_primitive_names":output_primitive_names,
 "output_primitive_table":output_primitive_table,
 "data_global_map":data_global_map,
 "data_primitive_names":data_primitive_names,
 "init_toplevel":init_toplevel,
 "update_global_table":update_global_table,
 "get_global_value":get_global_value,
 "is_global_defined":is_global_defined,
 "assign_global_value":assign_global_value,
 "get_global_position":get_global_position,
 "check_global_initialized":check_global_initialized,
 "current_state":current_state,
 "restore_state":restore_state,
 "hide_additions":hide_additions,
 "filter_global_map":filter_global_map,
 "Error":$$Error,
 "report_error":report_error,
 "reset":reset};

