// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var Trace=require("Trace");
var Dll=require("Dll");
var Char=require("Char");
var Opcodes=require("Opcodes");
var Printtyp=require("Printtyp");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var List=require("List");
var Btype=require("Btype");
var Env=require("Env");
var Arg=require("Arg");
var Predef=require("Predef");
var Clflags=require("Clflags");
var Toploop=require("Toploop");
var Typetexp=require("Typetexp");
var Format=require("Format");
var Obj=require("Obj");
var Misc=require("Misc");
var Path=require("Path");
var Consistbl=require("Consistbl");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Config=require("Config");
var Symtable=require("Symtable");


var std_out=Format["std_formatter"];

var dir_quit=function(param){return Pervasives["exit"](0);};

Hashtbl["add"]
 (Toploop["directive_table"],"quit",/* Directive_none */[0,dir_quit]);
var
 dir_directory=
  function(s)
   {var d=Misc["expand_directory"](Config["standard_library"],s);
    
    Config["load_path"][1]=/* :: */[0,d,Config["load_path"][1]],0;
    return Dll["add_path"](/* :: */[0,d,0]);
    };

Hashtbl["add"]
 (Toploop["directive_table"],
  "directory",
  /* Directive_string */[1,dir_directory]);
var
 dir_remove_directory=
  function(s)
   {var d=Misc["expand_directory"](Config["standard_library"],s);
    
    Config["load_path"][1]=
    List["filter"]
     (function(d$prime){return "unknown primitive:caml_string_notequal";},
      Config["load_path"][1]),
    0;
    return Dll["remove_path"](/* :: */[0,d,0]);
    };

Hashtbl["add"]
 (Toploop["directive_table"],
  "remove_directory",
  /* Directive_string */[1,dir_remove_directory]);
var dir_cd=function(s){return "unknown primitive:caml_sys_chdir";};

Hashtbl["add"]
 (Toploop["directive_table"],"cd",/* Directive_string */[1,dir_cd]);
var Load_failed="unknown primitive:caml_set_oo_id";

var
 check_consistency=
  function(ppf,filename,cu)
   {try
     {return List["iter"]
              (function(param)
                {var crco=param[2];
                 
                 var name=param[1];
                 
                 Env["add_import"](name);
                 if(crco)
                  {return Consistbl["check"]
                           (Env["crc_units"],name,crco[1],filename);
                   }
                 else
                  {return 0;}
                 },
               cu[5]);
      }
    catch(exn)
     {if(exn[1]=Consistbl["Inconsistency"])
       {Format["fprintf"]
         (ppf,
          [0,
           [18,
            [1,[0,[11,"<hv 0>",0],"<hv 0>"]],
            [11,
             "The files ",
             [2,
              0,
              [17,
               [0,"@ ",1,0],
               [11,
                "and ",
                [2,
                 0,
                 [17,
                  [0,"@ ",1,0],
                  [11,"disagree over interface ",[2,0,[17,0,[17,4,0]]]]]]]]]]],
           "@[<hv 0>The files %s@ and %s@ disagree over interface %s@]@."],
          exn[3],
          exn[4],
          exn[2]);
        throw Load_failed;
        }
      else
       {throw exn;}
      }
    };

var
 load_compunit=
  function(ic,filename,ppf,compunit)
   {check_consistency(ppf,filename,compunit);
    Pervasives["seek_in"](ic,compunit[2]);
    var code_size=compunit[3]+8;
    
    var code="unknown primitive:caml_static_alloc";
    
    Pervasives["unsafe_really_input"](ic,code,0,compunit[3]);
    code[compunit[3]]=Char["chr"](Opcodes["opRETURN"]),0;
    "unknown primitive:caml_blit_string";
    var initial_symtable=Symtable["current_state"](0);
    
    Symtable["patch_object"](code,compunit[4]);
    Symtable["update_global_table"](0);
    try
     {Toploop["may_trace"][1]=1,0;return Toploop["may_trace"][1]=0,0;}
    catch(exn)
     {Toploop["may_trace"][1]=0,0;
      Symtable["restore_state"](initial_symtable);
      Toploop["print_exception_outcome"](ppf,exn);
      throw Load_failed;
      }
    };

var
 load_file=
  function(recursive,ppf,name)
   {try
     {var
       filename=
        /* Some */[0,Misc["find_in_path"](Config["load_path"][1],name)];
      }
    catch(exn){if(exn=Not_found){var filename=0;}else{throw exn;}}
    
    if(filename)
     {var filename$1=filename[1];
      
      var ic=Pervasives["open_in_bin"](filename$1);
      
      try
       {var success=really_load_file(recursive,ppf,name,filename$1,ic);
        
        Pervasives["close_in"](ic);
        return success;
        }
      catch(exn$1){Pervasives["close_in"](ic);throw exn$1;}
      }
    else
     {Format["fprintf"]
       (ppf,
        [0,
         [11,"Cannot find file ",[2,0,[12,46,[17,4,0]]]],
         "Cannot find file %s.@."],
        name);
      return 0;
      }
    };

var
 really_load_file=
  function(recursive,ppf,name,filename,ic)
   {var ic$1=Pervasives["open_in_bin"](filename);
    
    var
     buffer=
      Pervasives["really_input_string"]
       (ic$1,Config["cmo_magic_number"]["length"]);
    
    try
     {if("unknown primitive:caml_string_equal")
       {var compunit_pos=Pervasives["input_binary_int"](ic$1);
        
        Pervasives["seek_in"](ic$1,compunit_pos);
        var cu=Pervasives["input_value"](ic$1);
        
        if(recursive)
         {List["iter"]
           (function(param)
             {var match=param[1];
              
              var exit;
              
              switch(match)
               {case 1:
                 var id=match[1];
                 
                 if(!Symtable["is_global_defined"](id))
                  {var file=Pervasives["^"](Ident["name"](id),".cmo");
                   
                   try
                    {var
                      match$1=
                       /* Some */[0,
                        Misc["find_in_path_uncap"](Config["load_path"][1],file)];
                     }
                   catch(exn)
                    {if(exn=Not_found){var match$1=0;}else{throw exn;}}
                   
                   if(match$1)
                    {if(!load_file(recursive,ppf,match$1[1]))
                      {throw Load_failed;}
                     else
                      {return 0;}
                     }
                   else
                    {return 0;}
                   }
                 else
                  {exit=102;}
                 
                default:exit=102;}
              
              switch(exit){case 102:return 0;}
              },
            cu[4])}
        else
         {}
        
        load_compunit(ic$1,filename,ppf,cu);
        return 1;
        }
      else
       {if("unknown primitive:caml_string_equal")
         {var toc_pos=Pervasives["input_binary_int"](ic$1);
          
          Pervasives["seek_in"](ic$1,toc_pos);
          var lib=Pervasives["input_value"](ic$1);
          
          List["iter"]
           (function(dllib)
             {var name$1=Dll["extract_dll_name"](dllib);
              
              try
               {return Dll["open_dlls"](1,/* :: */[0,name$1,0]);}
              catch(exn)
               {if(exn[1]=Failure)
                 {Format["fprintf"]
                   (ppf,
                    [0,
                     [11,
                      "Cannot load required shared library ",
                      [2,0,[12,46,[17,4,[11,"Reason: ",[2,0,[12,46,[17,4,0]]]]]]]],
                     "Cannot load required shared library %s.@.Reason: %s.@."],
                    name$1,
                    exn[2]);
                  throw Load_failed;
                  }
                else
                 {throw exn;}
                }
              },
            lib[5]);
          List["iter"](load_compunit(ic$1,filename,ppf),lib[1]);
          return 1;
          }
        else
         {Format["fprintf"]
           (ppf,
            [0,
             [11,
              "File ",
              [2,0,[11," is not a bytecode object file.",[17,4,0]]]],
             "File %s is not a bytecode object file.@."],
            name);
          return 0;
          }
        }
      }
    catch(exn){if(exn=Load_failed){return 0;}else{throw exn;}}
    };

var dir_load=function(ppf,name){return 0;};

Hashtbl["add"]
 (Toploop["directive_table"],
  "load",
  /* Directive_string */[1,dir_load(std_out)]);
var dir_load_rec=function(ppf,name){return 0;};

Hashtbl["add"]
 (Toploop["directive_table"],
  "load_rec",
  /* Directive_string */[1,dir_load_rec(std_out)]);
var load_file$1=load_file(0);

var dir_use=function(ppf,name){return 0;};

var dir_mod_use=function(ppf,name){return 0;};

Hashtbl["add"]
 (Toploop["directive_table"],"use",/* Directive_string */[1,dir_use(std_out)]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "mod_use",
  /* Directive_string */[1,dir_mod_use(std_out)]);
var
 filter_arrow=
  function(ty)
   {var ty$1=Ctype["expand_head"](Toploop["toplevel_env"][1],ty);
    
    var match=ty$1[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:
         if(!Btype["is_optional"](match[1]))
          {return /* Some */[0,/* tuple */[0,match[2],match[3]]];}
         else
          {exit=82;}
         
        default:exit=82;}}
    
    switch(exit){case 82:return 0;}
    };

var
 extract_last_arrow=
  function(desc)
   {var match=filter_arrow(desc);
    
    if(match)
     {var res=match[1];
      
      try
       {return extract_last_arrow(res[2]);}
      catch(exn){if(exn[1]=Ctype["Unify"]){return res;}else{throw exn;}}
      }
    else
     {throw [0,Ctype["Unify"],0];}
    };

var extract_target_type=function(ty){return extract_last_arrow(ty)[1];};

var
 extract_target_parameters=
  function(ty)
   {var
     ty$1=
      Ctype["expand_head"](Toploop["toplevel_env"][1],extract_target_type(ty));
    
    var match=ty$1[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var args=match[2];
         
         if(args)
          {if(Ctype["all_distinct_vars"](Toploop["toplevel_env"][1],args))
            {return /* Some */[0,/* tuple */[0,match[1],args]];}
           else
            {exit=77;}
           }
         else
          {exit=77;}
         
        default:exit=77;}}
    
    switch(exit){case 77:return 0;}
    };

var
 printer_type=
  function(ppf,typename)
   {try
     {var
       match=
        Env["lookup_type"]
         (/* Ldot */[1,[0,"Topdirs"],typename],Toploop["toplevel_env"][1]);
      }
    catch(exn)
     {if(exn=Not_found)
       {Format["fprintf"]
         (ppf,
          [0,
           [11,"Cannot find type Topdirs.",[2,0,[12,46,[17,4,0]]]],
           "Cannot find type Topdirs.%s.@."],
          typename);
        throw Pervasives["Exit"];
        }
      else
       {throw exn;}
      }
    
    return match[1];
    };

var
 match_simple_printer_type=
  function(ppf,desc,printer_type$1)
   {Ctype["begin_def"](0);
    var ty_arg=Ctype["newvar"](0,0);
    
    Ctype["unify"]
     (Toploop["toplevel_env"][1],
      Ctype["newconstr"](printer_type$1,/* :: */[0,ty_arg,0]),
      Ctype["instance_def"](desc[1]));
    Ctype["end_def"](0);
    Ctype["generalize"](ty_arg);
    return /* tuple */[0,ty_arg,0];
    };

var
 match_generic_printer_type=
  function(ppf,desc,path,args,printer_type$1)
   {Ctype["begin_def"](0);
    var
     args$1=
      List["map"](function(param){return Ctype["newvar"](0,0);},args);
    
    var ty_target=Ctype["newty"](/* Tconstr */[3,path,args$1,[0,0]]);
    
    var
     ty_args=
      List["map"]
       (function(ty_var)
         {return Ctype["newconstr"](printer_type$1,/* :: */[0,ty_var,0]);},
        args$1);
    
    var
     ty_expected=
      List["fold_right"]
       (function(ty_arg,ty)
         {return Ctype["newty"](/* Tarrow */[1,"",ty_arg,ty,1]);},
        ty_args,
        Ctype["newconstr"](printer_type$1,/* :: */[0,ty_target,0]));
    
    Ctype["unify"]
     (Toploop["toplevel_env"][1],ty_expected,Ctype["instance_def"](desc[1]));
    Ctype["end_def"](0);
    Ctype["generalize"](ty_expected);
    if(!Ctype["all_distinct_vars"](Toploop["toplevel_env"][1],args$1))
     {throw [0,Ctype["Unify"],0];}
    else
     {}
    
    return /* tuple */[0,
            ty_expected,
            /* Some */[0,/* tuple */[0,path,ty_args]]];
    };

var
 match_printer_type=
  function(ppf,desc)
   {var printer_type_new=printer_type(ppf,"printer_type_new");
    
    var printer_type_old=printer_type(ppf,"printer_type_old");
    
    Ctype["init_def"](Ident["current_time"](0));
    var match=extract_target_parameters(desc[1]);
    
    if(match)
     {var match$1=match[1];
      
      return /* tuple */[0,
              match_generic_printer_type
               (ppf,desc,match$1[1],match$1[2],printer_type_new),
              0];
      }
    else
     {try
       {return /* tuple */[0,
                match_simple_printer_type(ppf,desc,printer_type_new),
                0];
        }
      catch(exn)
       {if(exn[1]=Ctype["Unify"])
         {return /* tuple */[0,
                  match_simple_printer_type(ppf,desc,printer_type_old),
                  1];
          }
        else
         {throw exn;}
        }
      }
    };

var
 find_printer_type=
  function(ppf,lid)
   {try
     {var match=Env["lookup_value"](lid,Toploop["toplevel_env"][1]);
      
      var match$1=match_printer_type(ppf,match[2]);
      
      return /* tuple */[0,match$1[1],match[1],match$1[2]];
      }
    catch(exn)
     {if(exn=Not_found)
       {Format["fprintf"]
         (ppf,
          [0,
           [11,"Unbound value ",[15,[12,46,[17,4,0]]]],
           "Unbound value %a.@."],
          Printtyp["longident"],
          lid);
        throw Pervasives["Exit"];
        }
      else
       {if(exn[1]=Ctype["Unify"])
         {Format["fprintf"]
           (ppf,
            [0,
             [15,[11," has a wrong type for a printing function.",[17,4,0]]],
             "%a has a wrong type for a printing function.@."],
            Printtyp["longident"],
            lid);
          throw Pervasives["Exit"];
          }
        else
         {throw exn;}
        }
      }
    };

var
 dir_install_printer=
  function(ppf,lid)
   {try
     {var match=find_printer_type(ppf,lid);
      
      var is_old_style=match[3];
      
      var path=match[2];
      
      var match$1=match[1];
      
      var ty=match$1[2];
      
      var v=Toploop["eval_path"](Toploop["toplevel_env"][1],path);
      
      if(ty)
       {var match$2=ty[1];
        
        var
         build=
          function(v$1,param)
           {if(param)
             {var args=param[2];
              
              return /* Succ */[1,function(fn){return build(v$1(fn),args);}];
              }
            else
             {if(is_old_style)
               {var
                 print_function=
                  function(formatter,repr){return v$1(repr);};
                }
              else
               {var
                 print_function=
                  function(formatter,repr){return v$1(formatter,repr);};
                }
              
              return /* Zero */[0,print_function];
              }
            };
        
        return Toploop["install_generic_printer'"]
                (path,match$2[1],build(v,match$2[2]));
        }
      else
       {if(is_old_style)
         {var print_function=function(formatter,repr){return v(repr);};}
        else
         {var
           print_function=
            function(formatter,repr){return v(formatter,repr);};
          }
        
        return Toploop["install_printer"](path,match$1[1],print_function);
        }
      }
    catch(exn){if(exn=Pervasives["Exit"]){return 0;}else{throw exn;}}
    };

var
 dir_remove_printer=
  function(ppf,lid)
   {try
     {var match=find_printer_type(ppf,lid);
      
      try
       {return Toploop["remove_printer"](match[2]);}
      catch(exn)
       {if(exn=Not_found)
         {return Format["fprintf"]
                  (ppf,
                   [0,
                    [11,"No printer named ",[15,[12,46,[17,4,0]]]],
                    "No printer named %a.@."],
                   Printtyp["longident"],
                   lid);
          }
        else
         {throw exn;}
        }
      }
    catch(exn$1){if(exn$1=Pervasives["Exit"]){return 0;}else{throw exn$1;}}
    };

Hashtbl["add"]
 (Toploop["directive_table"],
  "install_printer",
  /* Directive_ident */[3,dir_install_printer(std_out)]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "remove_printer",
  /* Directive_ident */[3,dir_remove_printer(std_out)]);
var
 tracing_function_ptr=
  Trace["get_code_pointer"]
   (function(arg)
     {return Trace["print_trace"]
              ("unknown primitive:caml_get_current_environment",arg);
      });

var
 dir_trace=
  function(ppf,lid)
   {try
     {var match=Env["lookup_value"](lid,Toploop["toplevel_env"][1]);
      
      var desc=match[2];
      
      var path=match[1];
      
      var match$1=desc[2];
      
      var exit;
      
      if(typeof match$1=="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 0:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [15,
                      [11,
                       " is an external function and cannot be traced.",
                       [17,4,0]]],
                     "%a is an external function and cannot be traced.@."],
                    Printtyp["longident"],
                    lid);
           
          default:exit=44;}}
      
      switch(exit)
       {case 44:
         var clos=Toploop["eval_path"](Toploop["toplevel_env"][1],path);
         
         var
          match$2=
           Ctype["repr"]
            (Ctype["expand_head"](Toploop["toplevel_env"][1],desc[1]));
         
         var match$3=match$2[1];
         
         var exit$1;
         
         var $js;
         if(typeof match$3=="number")
          {switch(match$3){}}
         else
          {switch(match$3[0]){case 1:$js=1;default:exit$1=42;}}
         
         var $js$1;
         switch(exit$1){case 42:$js$1=0;}
         if
          ("unknown primitive:caml_obj_is_block"&&
           (("unknown primitive:caml_obj_tag"=Obj["closure_tag"])||
            ("unknown primitive:caml_obj_tag"=Obj["infix_tag"]))&&
           $js$1)
          {var match$4=Trace["is_traced"](clos);
           
           if(match$4)
            {return Format["fprintf"]
                     (ppf,
                      [0,
                       [15,
                        [11,
                         " is already traced (under the name ",
                         [15,[11,").",[17,4,0]]]]],
                       "%a is already traced (under the name %a).@."],
                      Printtyp["path"],
                      path,
                      Printtyp["path"],
                      match$4[1]);
             }
           else
            {Trace["traced_functions"][1]=
             /* :: */[0,
              /* record */[0,
               path,
               clos,
               Trace["get_code_pointer"](clos),
               Trace["instrument_closure"]
                (Toploop["toplevel_env"][1],lid,ppf,desc[1])],
              Trace["traced_functions"][1]],
             0;
             Trace["set_code_pointer"](clos,tracing_function_ptr);
             return Format["fprintf"]
                     (ppf,
                      [0,
                       [15,[11," is now traced.",[17,4,0]]],
                       "%a is now traced.@."],
                      Printtyp["longident"],
                      lid);
             }
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [15,[11," is not a function.",[17,4,0]]],
                     "%a is not a function.@."],
                    Printtyp["longident"],
                    lid);
           }
         
        }
      }
    catch(exn)
     {if(exn=Not_found)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [11,"Unbound value ",[15,[12,46,[17,4,0]]]],
                  "Unbound value %a.@."],
                 Printtyp["longident"],
                 lid);
        }
      else
       {throw exn;}
      }
    };

var
 dir_untrace=
  function(ppf,lid)
   {try
     {var match=Env["lookup_value"](lid,Toploop["toplevel_env"][1]);
      
      var path=match[1];
      
      var
       remove=
        function(param)
         {if(param)
           {var rem=param[2];
            
            var f=param[1];
            
            if(Path["same"](f[1],path))
             {Trace["set_code_pointer"](f[2],f[3]);
              Format["fprintf"]
               (ppf,
                [0,
                 [15,[11," is no longer traced.",[17,4,0]]],
                 "%a is no longer traced.@."],
                Printtyp["longident"],
                lid);
              return rem;
              }
            else
             {return /* :: */[0,f,remove(rem)];}
            }
          else
           {Format["fprintf"]
             (ppf,
              [0,[15,[11," was not traced.",[17,4,0]]],"%a was not traced.@."],
              Printtyp["longident"],
              lid);
            return 0;
            }
          };
      
      return Trace["traced_functions"][1]=
             remove(Trace["traced_functions"][1]),
             0;
      }
    catch(exn)
     {if(exn=Not_found)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [11,"Unbound value ",[15,[12,46,[17,4,0]]]],
                  "Unbound value %a.@."],
                 Printtyp["longident"],
                 lid);
        }
      else
       {throw exn;}
      }
    };

var
 dir_untrace_all=
  function(ppf,param)
   {List["iter"]
     (function(f)
       {Trace["set_code_pointer"](f[2],f[3]);
        return Format["fprintf"]
                (ppf,
                 [0,
                  [15,[11," is no longer traced.",[17,4,0]]],
                  "%a is no longer traced.@."],
                 Printtyp["path"],
                 f[1]);
        },
      Trace["traced_functions"][1]);
    return Trace["traced_functions"][1]=0,0;
    };

var
 parse_warnings=
  function(ppf,iserr,s)
   {try
     {return Warnings["parse_options"](iserr,s);}
    catch(exn)
     {if(exn[1]=Arg["Bad"])
       {return Format["fprintf"]
                (ppf,[0,[2,0,[12,46,[17,4,0]]],"%s.@."],exn[2]);
        }
      else
       {throw exn;}
      }
    };

var
 trim_modtype=
  function(mty)
   {var exit;
    
    switch(mty)
     {case 0:exit=34;
      case 1:return [1,0];
      case 2:return /* Mty_functor */[2,mty[1],mty[2],trim_modtype(mty[3])];
      case 3:exit=34;
      }
    
    switch(exit){case 34:return mty;}
    };

var
 trim_signature=
  function(mty)
   {switch(mty)
     {case 1:
       return /* Mty_signature */[1,
               List["map"]
                (function(item)
                  {switch(item)
                    {case 3:
                      var md=item[2];
                      
                      return /* Sig_module */[3,
                              item[1],
                              /* record */[0,trim_modtype(md[1]),md[2],md[3]],
                              item[3]];
                      
                     default:return item;}
                   },
                 mty[1])];
       
      default:return mty;}
    };

var
 show_prim=
  function(to_sig,ppf,lid)
   {var env=Toploop["toplevel_env"][1];
    
    var loc=Location["none"];
    
    try
     {switch(lid)
       {case 0:var s=lid[1];
        case 1:var s=lid[2];
        case 2:
         Format["fprintf"]
          (ppf,
           [0,[11,"Invalid path ",[15,[17,4,0]]],"Invalid path %a@."],
           Printtyp["longident"],
           lid);
         throw Pervasives["Exit"];
         
        }
      
      var id=Ident["create_persistent"](s);
      
      var sg=to_sig(env,loc,id,lid);
      
      return Printtyp["wrap_printing_env"]
              (env,
               function(param)
                {return Format["fprintf"]
                         (ppf,
                          [0,[18,[1,[0,0,""]],[15,[17,0,[17,4,0]]]],"@[%a@]@."],
                          Printtyp["signature"],
                          sg);
                 });
      }
    catch(exn)
     {if(exn=Not_found)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [18,[1,[0,0,""]],[11,"Unknown element.",[17,0,[17,4,0]]]],
                  "@[Unknown element.@]@."]);
        }
      else
       {if(exn=Pervasives["Exit"]){return 0;}else{throw exn;}}
      }
    };

var all_show_funs=[0,0];

var
 reg_show_prim=
  function(name,to_sig)
   {all_show_funs[1]=/* :: */[0,to_sig,all_show_funs[1]],0;
    return Hashtbl["add"]
            (Toploop["directive_table"],
             name,
             /* Directive_ident */[3,show_prim(to_sig,std_out)]);
    };

var
 match=
  reg_show_prim
   ("show_val",
    function(env,loc,id,lid)
     {var match$1=Typetexp["find_value"](env,loc,lid);
      
      return /* :: */[0,/* Sig_value */[0,id,match$1[2]],0];
      });

var
 match$1=
  reg_show_prim
   ("show_type",
    function(env,loc,id,lid)
     {var match$2=Typetexp["find_type"](env,loc,lid);
      
      return /* :: */[0,/* Sig_type */[1,id,match$2[2],0],0];
      });

var
 match$2=
  reg_show_prim
   ("show_exception",
    function(env,loc,id,lid)
     {var desc=Typetexp["find_constructor"](env,loc,lid);
      
      if
       (!Ctype["equal"]
         (env,1,/* :: */[0,desc[2],0],/* :: */[0,Predef["type_exn"],0]))
       {throw Not_found;}
      else
       {}
      
      if(desc[10])
       {var ret_type=/* Some */[0,Predef["type_exn"]];}
      else
       {var ret_type=0;}
      
      var
       ext=
        /* record */[0,
         Predef["path_exn"],
         0,
         desc[4],
         ret_type,
         1,
         desc[12],
         desc[13]];
      
      return /* :: */[0,/* Sig_typext */[2,id,ext,2],0];
      });

var
 match$3=
  reg_show_prim
   ("show_module",
    function(env,loc,id,lid)
     {var match$4=Typetexp["find_module"](env,loc,lid);
      
      var md=match$4[2];
      
      return /* :: */[0,
              /* Sig_module */[3,
               id,
               /* record */[0,trim_signature(md[1]),md[2],md[3]],
               0],
              0];
      });

var
 match$4=
  reg_show_prim
   ("show_module_type",
    function(env,loc,id,lid)
     {var match$5=Typetexp["find_modtype"](env,loc,lid);
      
      return /* :: */[0,/* Sig_modtype */[4,id,match$5[2]],0];
      });

var
 match$5=
  reg_show_prim
   ("show_class",
    function(env,loc,id,lid)
     {var match$6=Typetexp["find_class"](env,loc,lid);
      
      return /* :: */[0,/* Sig_class */[5,id,match$6[2],0],0];
      });

var
 match$6=
  reg_show_prim
   ("show_class_type",
    function(env,loc,id,lid)
     {var match$7=Typetexp["find_class_type"](env,loc,lid);
      
      return /* :: */[0,/* Sig_class_type */[6,id,match$7[2],0],0];
      });

var
 show=
  function(env,loc,id,lid)
   {var
     sg=
      List["fold_left"]
       (function(sg$1,f)
         {try
           {return Pervasives["@"](f(env,loc,id,lid),sg$1);}
          catch(exn){return sg$1;}
          },
        0,
        all_show_funs[1]);
    
    if(sg=0){throw Not_found;}else{return sg;}
    };

var
 match$7=
  Hashtbl["add"]
   (Toploop["directive_table"],
    "show",
    /* Directive_ident */[3,show_prim(show,std_out)]);

Hashtbl["add"]
 (Toploop["directive_table"],
  "trace",
  /* Directive_ident */[3,dir_trace(std_out)]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "untrace",
  /* Directive_ident */[3,dir_untrace(std_out)]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "untrace_all",
  /* Directive_none */[0,dir_untrace_all(std_out)]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "print_depth",
  /* Directive_int */[2,
   function(n){return Toploop["max_printer_depth"][1]=n,0;}]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "print_length",
  /* Directive_int */[2,
   function(n){return Toploop["max_printer_steps"][1]=n,0;}]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "labels",
  /* Directive_bool */[4,function(b){return Clflags["classic"][1]=!b,0;}]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "principal",
  /* Directive_bool */[4,function(b){return Clflags["principal"][1]=b,0;}]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "rectypes",
  /* Directive_none */[0,
   function(param){return Clflags["recursive_types"][1]=1,0;}]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "ppx",
  /* Directive_string */[1,
   function(s)
    {return Clflags["all_ppx"][1]=/* :: */[0,s,Clflags["all_ppx"][1]],0;}]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "warnings",
  /* Directive_string */[1,parse_warnings(std_out,0)]);
Hashtbl["add"]
 (Toploop["directive_table"],
  "warn_error",
  /* Directive_string */[1,parse_warnings(std_out,1)]);

module["exports"]=
{"dir_quit":dir_quit,
 "dir_directory":dir_directory,
 "dir_remove_directory":dir_remove_directory,
 "dir_cd":dir_cd,
 "dir_load":dir_load,
 "dir_use":dir_use,
 "dir_install_printer":dir_install_printer,
 "dir_remove_printer":dir_remove_printer,
 "dir_trace":dir_trace,
 "dir_untrace":dir_untrace,
 "dir_untrace_all":dir_untrace_all,
 "load_file":load_file$1};

