// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Env=require("Env");
var Digest=require("Digest");
var Format=require("Format");
var Misc=require("Misc");
var Buffer=require("Buffer");
var Clambda=require("Clambda");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Map=require("Map");
var Config=require("Config");


var $$Error="unknown primitive:caml_set_oo_id";

var global_infos_table=Hashtbl["create"](0,17);

var compare=Clambda["compare_structured_constants"];

var CstMap=Map["Make"]([0,compare]);

var structured_constants_empty=/* record */[0,CstMap[1],0];

var structured_constants=[0,structured_constants_empty];

var exported_constants=Hashtbl["create"](0,17);

var current_unit=/* record */[0,"","",0,0,0,0,0,0,0,0];

var
 symbolname_for_pack=
  function(pack,name)
   {if(pack)
     {var p=pack[1];
      
      var b=Buffer["create"](64);
      
      for(var i=0;i<=p["length"]-1;i++)
       {var c=p[i];
        
        if(c!=46){Buffer["add_char"](b,c)}else{Buffer["add_string"](b,"__")}
        }
      
      Buffer["add_string"](b,"__");
      Buffer["add_string"](b,name);
      return Buffer["contents"](b);
      }
    else
     {return name;}
    };

var
 reset=
  function(packname,name)
   {Hashtbl["clear"](global_infos_table);
    var symbol=symbolname_for_pack(packname,name);
    
    current_unit[1]=name,0;
    current_unit[2]=symbol,0;
    current_unit[3]=/* :: */[0,symbol,0],0;
    current_unit[4]=0,0;
    current_unit[5]=0,0;
    current_unit[7]=0,0;
    current_unit[8]=0,0;
    current_unit[9]=0,0;
    current_unit[10]=0,0;
    Hashtbl["clear"](exported_constants);
    return structured_constants[1]=structured_constants_empty,0;
    };

var current_unit_infos=function(param){return current_unit;};

var current_unit_name=function(param){return current_unit[1];};

var
 make_symbol=
  function($staropt$star,idopt)
   {if($staropt$star)
     {var unitname=$staropt$star[1];}
    else
     {var unitname=current_unit[2];}
    
    var prefix=Pervasives["^"]("caml",unitname);
    
    if(idopt)
     {return Pervasives["^"](prefix,Pervasives["^"]("__",idopt[1]));}
    else
     {return prefix;}
    };

var
 symbol_in_current_unit=
  function(name)
   {var prefix=Pervasives["^"]("caml",current_unit[2]);
    
    var lp=prefix["length"];
    
    return "unknown primitive:caml_string_equal"||
           name["length"]>=
           2+
           lp&&
           "unknown primitive:caml_string_equal"&&
           (name[lp]=95)&&
           (name[lp+1]=95);
    };

var
 read_unit_info=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    try
     {var
       buffer=
        Pervasives["really_input_string"]
         (ic,Config["cmx_magic_number"]["length"]);
      
      if("unknown primitive:caml_string_notequal")
       {Pervasives["close_in"](ic);
        throw [0,$$Error,/* Not_a_unit_info */[0,filename]];
        }
      else
       {}
      
      var ui=Pervasives["input_value"](ic);
      
      var crc=Digest["input"](ic);
      
      Pervasives["close_in"](ic);
      return /* tuple */[0,ui,crc];
      }
    catch(exn)
     {var exit;
      
      if(exn=End_of_file)
       {exit=42;}
      else
       {if(exn[1]=Failure){exit=42;}else{throw exn;}}
      
      switch(exit)
       {case 42:
         Pervasives["close_in"](ic);
         throw [0,$$Error,/* Corrupted_unit_info */[1,filename]];
         
        }
      }
    };

var
 read_library_info=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    var
     buffer=
      Pervasives["really_input_string"]
       (ic,Config["cmxa_magic_number"]["length"]);
    
    if("unknown primitive:caml_string_notequal")
     {throw [0,$$Error,/* Not_a_unit_info */[0,filename]];}
    else
     {}
    
    var infos=Pervasives["input_value"](ic);
    
    Pervasives["close_in"](ic);
    return infos;
    };

var
 get_global_info=
  function(global_ident)
   {var modname=Ident["name"](global_ident);
    
    if("unknown primitive:caml_string_equal")
     {return /* Some */[0,current_unit];}
    else
     {try
       {return Hashtbl["find"](global_infos_table,modname);}
      catch(exn)
       {if(exn=Not_found)
         {try
           {var
             filename=
              Misc["find_in_path_uncap"]
               (Config["load_path"][1],Pervasives["^"](modname,".cmx"));
            
            var match=read_unit_info(filename);
            
            var ui=match[1];
            
            if("unknown primitive:caml_string_notequal")
             {throw [0,
                     $$Error,
                     /* Illegal_renaming */[2,modname,ui[1],filename]];
              }
            else
             {}
            
            var
             match$1=
              /* tuple */[0,/* Some */[0,ui],/* Some */[0,match[2]]];
            }
          catch(exn$1)
           {if(exn$1=Not_found){var match$1=[0,0,0];}else{throw exn$1;}}
          
          var infos=match$1[1];
          
          current_unit[5]=
          /* :: */[0,/* tuple */[0,modname,match$1[2]],current_unit[5]],
          0;
          Hashtbl["add"](global_infos_table,modname,infos);
          return infos;
          }
        else
         {throw exn;}
        }
      }
    };

var
 cache_unit_info=
  function(ui)
   {return Hashtbl["add"](global_infos_table,ui[1],/* Some */[0,ui]);};

var toplevel_approx=Hashtbl["create"](0,16);

var
 record_global_approx_toplevel=
  function(id)
   {return Hashtbl["add"](toplevel_approx,current_unit[1],current_unit[6]);};

var
 global_approx=
  function(id)
   {if(Ident["is_predef_exn"](id))
     {return 0;}
    else
     {try
       {return Hashtbl["find"](toplevel_approx,Ident["name"](id));}
      catch(exn)
       {if(exn=Not_found)
         {var match=get_global_info(id);
          
          if(match){return match[1][6];}else{return 0;}
          }
        else
         {throw exn;}
        }
      }
    };

var
 symbol_for_global=
  function(id)
   {if(Ident["is_predef_exn"](id))
     {return Pervasives["^"]("caml_exn_",Ident["name"](id));}
    else
     {var match=get_global_info(id);
      
      if(match)
       {return make_symbol(/* Some */[0,match[1][2]],0);}
      else
       {return make_symbol(/* Some */[0,Ident["name"](id)],0);}
      }
    };

var set_global_approx=function(approx){return current_unit[6]=approx,0;};

var
 need_curry_fun=
  function(n)
   {if(!List["mem"](n,current_unit[7]))
     {return current_unit[7]=/* :: */[0,n,current_unit[7]],0;}
    else
     {return 0;}
    };

var
 need_apply_fun=
  function(n)
   {if(!List["mem"](n,current_unit[8]))
     {return current_unit[8]=/* :: */[0,n,current_unit[8]],0;}
    else
     {return 0;}
    };

var
 need_send_fun=
  function(n)
   {if(!List["mem"](n,current_unit[9]))
     {return current_unit[9]=/* :: */[0,n,current_unit[9]],0;}
    else
     {return 0;}
    };

var
 write_unit_info=
  function(info,filename)
   {var oc=Pervasives["open_out_bin"](filename);
    
    Pervasives["output_string"](oc,Config["cmx_magic_number"]);
    Pervasives["output_value"](oc,info);
    Pervasives["flush"](oc);
    var crc=Digest["file"](filename);
    
    Digest["output"](oc,crc);
    return Pervasives["close_out"](oc);
    };

var
 save_unit_info=
  function(filename)
   {current_unit[4]=Env["imports"](0),0;
    return write_unit_info(current_unit,filename);
    };

var const_label=[0,0];

var new_const_label=function(param){const_label[0]++;return const_label[1];};

var
 new_const_symbol=
  function(param)
   {const_label[0]++;
    return make_symbol
            (0,/* Some */[0,Pervasives["string_of_int"](const_label[1])]);
    };

var snapshot=function(param){return structured_constants[1];};

var backtrack=function(s){return structured_constants[1]=s,0;};

var
 new_structured_constant=
  function(cst,shared)
   {var match=structured_constants[1];
    
    var strcst_all=match[2];
    
    var strcst_shared=match[1];
    
    if(shared)
     {try
       {return CstMap[22](cst,strcst_shared);}
      catch(exn)
       {if(exn=Not_found)
         {var lbl=new_const_symbol(0);
          
          structured_constants[1]=
          /* record */[0,
           CstMap[4](cst,lbl,strcst_shared),
           /* :: */[0,/* tuple */[0,lbl,cst],strcst_all]],
          0;
          return lbl;
          }
        else
         {throw exn;}
        }
      }
    else
     {var lbl$1=new_const_symbol(0);
      
      structured_constants[1]=
      /* record */[0,
       strcst_shared,
       /* :: */[0,/* tuple */[0,lbl$1,cst],strcst_all]],
      0;
      return lbl$1;
      }
    };

var
 add_exported_constant=
  function(s){return Hashtbl["replace"](exported_constants,s,0);};

var
 structured_constants$1=
  function(param)
   {return List["map"]
            (function(param$1)
              {var lbl=param$1[1];
               
               return /* tuple */[0,
                       lbl,
                       Hashtbl["mem"](exported_constants,lbl),
                       param$1[2]];
               },
             structured_constants[1][2]);
    };

var
 report_error=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [15,
                  [17,
                   [0,"@ ",1,0],
                   [11,"is not a compilation unit description.",0]]],
                 "%a@ is not a compilation unit description."],
                Location["print_filename"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,
                  "Corrupted compilation unit description",
                  [17,[0,"@ ",1,0],[15,0]]],
                 "Corrupted compilation unit description@ %a"],
                Location["print_filename"],
                param[1]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,
                 [15,
                  [17,
                   [0,"@ ",1,0],
                   [11,
                    "contains the description for unit",
                    [17,
                     [0,"@ ",1,0],
                     [2,0,[11," when ",[2,0,[11," was expected",0]]]]]]]],
                 "%a@ contains the description for unit@ %s when %s was expected"],
                Location["print_filename"],
                param[3],
                param[1],
                param[2]);
       
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
{"reset":reset,
 "current_unit_infos":current_unit_infos,
 "current_unit_name":current_unit_name,
 "make_symbol":make_symbol,
 "symbol_in_current_unit":symbol_in_current_unit,
 "symbol_for_global":symbol_for_global,
 "global_approx":global_approx,
 "set_global_approx":set_global_approx,
 "record_global_approx_toplevel":record_global_approx_toplevel,
 "need_curry_fun":need_curry_fun,
 "need_apply_fun":need_apply_fun,
 "need_send_fun":need_send_fun,
 "new_const_symbol":new_const_symbol,
 "new_const_label":new_const_label,
 "new_structured_constant":new_structured_constant,
 "structured_constants":structured_constants$1,
 "add_exported_constant":add_exported_constant,
 "snapshot":snapshot,
 "backtrack":backtrack,
 "read_unit_info":read_unit_info,
 "write_unit_info":write_unit_info,
 "save_unit_info":save_unit_info,
 "cache_unit_info":cache_unit_info,
 "read_library_info":read_library_info,
 "Error":$$Error,
 "report_error":report_error};

