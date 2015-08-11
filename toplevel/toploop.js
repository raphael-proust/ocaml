// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Compmisc=require("Compmisc");
var Bytegen=require("Bytegen");
var Printlambda=require("Printlambda");
var Parse=require("Parse");
var Translmod=require("Translmod");
var Dll=require("Dll");
var Pprintast=require("Pprintast");
var Printast=require("Printast");
var Printinstr=require("Printinstr");
var Typecore=require("Typecore");
var Simplif=require("Simplif");
var Printtyp=require("Printtyp");
var Printtyped=require("Printtyped");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var List=require("List");
var Btype=require("Btype");
var Env=require("Env");
var Predef=require("Predef");
var Arg=require("Arg");
var Clflags=require("Clflags");
var Format=require("Format");
var Misc=require("Misc");
var Typemod=require("Typemod");
var Lexer=require("Lexer");
var Oprint=require("Oprint");
var Genprintval=require("Genprintval");
var Filename=require("Filename");
var Lexing=require("Lexing");
var Emitcode=require("Emitcode");
var Consistbl=require("Consistbl");
var Location=require("Location");
var Includemod=require("Includemod");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Pparse=require("Pparse");
var Map=require("Map");
var Symtable=require("Symtable");
var Ast_helper=require("Ast_helper");
var Config=require("Config");
var $$Array=require("Array");
var Sys=require("Sys");


var $$let=$$String;

var StringMap=Map["Make"]([0,$$let[25]]);

var toplevel_value_bindings=[0,StringMap[1]];

var
 getvalue=
  function(name)
   {try
     {return StringMap[22](name,toplevel_value_bindings[1]);}
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]
                (Pervasives["^"](name," unbound at toplevel"));
        }
      else
       {throw exn;}
      }
    };

var
 setvalue=
  function(name,v)
   {return toplevel_value_bindings[1]=
           StringMap[4](name,v,toplevel_value_bindings[1]),
           0;
    };

var
 eval_path=
  function(param)
   {switch(param)
     {case 0:
       var id=param[1];
       
       if(Ident["persistent"](id)||Ident["global"](id))
        {return Symtable["get_global_value"](id);}
       else
        {var name=Translmod["toplevel_name"](id);
         
         try
          {return StringMap[22](name,toplevel_value_bindings[1]);}
         catch(exn)
          {if(exn=Not_found)
            {throw [0,Symtable["Error"],/* Undefined_global */[0,name]];}
           else
            {throw exn;}
           }
         }
       
      case 1:return eval_path(param[1])[param[3]];
      case 2:return Misc["fatal_error"]("Toploop.eval_path");
      }
    };

var
 eval_path$1=
  function(env,path)
   {return eval_path
            (Env["normalize_path"](/* Some */[0,Location["none"]],env,path));
    };

var $$Error="unknown primitive:caml_set_oo_id";

var
 eval_path$2=
  function(env,p)
   {try
     {return eval_path$1(env,p);}
    catch(exn){if(exn[1]=Symtable["Error"]){throw $$Error;}else{throw exn;}}
    };

var same_value=function(v1,v2){return v1=v2;};

var EvalPath=[0,$$Error,eval_path$2,same_value];

var $$let$1=Obj;

var
 Printer=
  Genprintval["Make"]
    ([0,
      function(prim){return prim;},
      function(prim){return "unknown primitive:caml_obj_is_block";},
      function(prim){return "unknown primitive:caml_obj_tag";},
      function(prim){return prim["length"];},
      function(prim,prim$1){return prim[prim$1];}])
   ([0,EvalPath[2],EvalPath[1],EvalPath[3]]);

var max_printer_depth=[0,100];

var max_printer_steps=[0,300];

var print_out_value=Oprint["out_value"];

var print_out_type=Oprint["out_type"];

var print_out_class_type=Oprint["out_class_type"];

var print_out_module_type=Oprint["out_module_type"];

var print_out_type_extension=Oprint["out_type_extension"];

var print_out_sig_item=Oprint["out_sig_item"];

var print_out_signature=Oprint["out_signature"];

var print_out_phrase=Oprint["out_phrase"];

var
 print_untyped_exception=
  function(ppf,obj){return print_out_value[1](ppf,Printer[5](obj));};

var
 outval_of_value=
  function(env,obj,ty)
   {return Printer[6]
            (max_printer_steps[1],
             max_printer_depth[1],
             function(param,param$1,param$2){return 0;},
             env,
             obj,
             ty);
    };

var
 print_value=
  function(env,obj,ppf,ty)
   {return print_out_value[1](ppf,outval_of_value(env,obj,ty));};

var install_printer=Printer[1];

var install_generic_printer=Printer[2];

var install_generic_printer$prime=Printer[3];

var remove_printer=Printer[4];

var parse_toplevel_phrase=[0,Parse["toplevel_phrase"]];

var parse_use_file=[0,Parse["use_file"]];

var print_location=Location["print_error"];

var print_error=Location["print_error"];

var print_warning=Location["print_warning"];

var input_name=Location["input_name"];

var
 parse_mod_use_file=
  function(name,lb)
   {var
     modname=
      $$String["capitalize"]
       (Filename["chop_extension"](Filename["basename"](name)));
    
    var
     items=
      List["concat"]
       (List["map"]
         (function(param)
           {switch(param){case 0:return param[1];case 1:return 0;}},
          parse_use_file[1](lb)));
    
    return /* :: */[0,
            /* Ptop_def */[0,
             /* :: */[0,
              Ast_helper["Str"][8]
               (0,
                Ast_helper["Mb"][1]
                 (0,
                  0,
                  0,
                  0,
                  Location["mknoloc"](modname),
                  Ast_helper["Mod"][4](0,0,items))),
              0]],
            0];
    };

var toplevel_startup_hook=[0,function(param){return 0;}];

var may_trace=[0,0];

var
 load_lambda=
  function(ppf,lam)
   {if(Clflags["dump_rawlambda"][1])
     {Format["fprintf"]
       (ppf,[0,[15,[17,4,0]],"%a@."],Printlambda["lambda"],lam)}
    else
     {}
    
    var slam=Simplif["simplify_lambda"](lam);
    
    if(Clflags["dump_lambda"][1])
     {Format["fprintf"]
       (ppf,[0,[15,[17,4,0]],"%a@."],Printlambda["lambda"],slam)}
    else
     {}
    
    var match=Bytegen["compile_phrase"](slam);
    
    var fun_code=match[2];
    
    var init_code=match[1];
    
    if(Clflags["dump_instr"][1])
     {Format["fprintf"]
       (ppf,
        [0,[15,[15,[17,4,0]]],"%a%a@."],
        Printinstr["instrlist"],
        init_code,
        Printinstr["instrlist"],
        fun_code)}
    else
     {}
    
    var match$1=Emitcode["to_memory"](init_code,fun_code);
    
    var reloc=match$1[3];
    
    var code_size=match$1[2];
    
    var code=match$1[1];
    
    var can_free=fun_code=0;
    
    var initial_symtable=Symtable["current_state"](0);
    
    Symtable["patch_object"](code,reloc);
    Symtable["check_global_initialized"](reloc);
    Symtable["update_global_table"](0);
    var initial_bindings=toplevel_value_bindings[1];
    
    try
     {may_trace[1]=1,0;
      var retval="unknown primitive:caml_reify_bytecode"(0);
      
      may_trace[1]=0,0;
      if(can_free)
       {"unknown primitive:caml_static_release_bytecode",
        "unknown primitive:caml_static_free"}
      else
       {}
      
      return /* Result */[0,retval];
      }
    catch(x)
     {may_trace[1]=0,0;
      if(can_free)
       {"unknown primitive:caml_static_release_bytecode",
        "unknown primitive:caml_static_free"}
      else
       {}
      
      toplevel_value_bindings[1]=initial_bindings,0;
      Symtable["restore_state"](initial_symtable);
      return /* Exception */[1,x];
      }
    };

var
 pr_item=
  function(env,items)
   {Printtyp["hide_rec_items"](items);
    var exit;
    
    if(items)
     {var match=items[1];
      
      switch(match)
       {case 0:
         var decl=match[2];
         
         var id=match[1];
         
         var tree=Printtyp["tree_of_value_description"](id,decl);
         
         var match$1=decl[2];
         
         var exit$1;
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0]){case 0:var valopt=0;default:exit$1=76;}}
         
         switch(exit$1)
          {case 76:
            var
             v=
              outval_of_value
               (env,getvalue(Translmod["toplevel_name"](id)),decl[1]);
            
            var valopt=/* Some */[0,v];
            
           }
         
         return /* Some */[0,/* tuple */[0,tree,valopt,items[2]]];
         
        case 1:
         var rem=items[2];
         
         var id$1=match[1];
         
         if(Btype["is_row_name"](Ident["name"](id$1)))
          {return pr_item(env,rem);}
         else
          {var
            tree$1=
             Printtyp["tree_of_type_declaration"](id$1,match[2],match[3]);
           
           return /* Some */[0,/* tuple */[0,tree$1,0,rem]];
           }
         
        case 2:
         var
          tree$2=
           Printtyp["tree_of_extension_constructor"]
            (match[1],match[2],match[3]);
         
         return /* Some */[0,/* tuple */[0,tree$2,0,items[2]]];
         
        case 3:
         var tree$3=Printtyp["tree_of_module"](match[1],match[2][1],match[3]);
         
         return /* Some */[0,/* tuple */[0,tree$3,0,items[2]]];
         
        case 4:
         var
          tree$4=
           Printtyp["tree_of_modtype_declaration"](match[1],match[2]);
         
         return /* Some */[0,/* tuple */[0,tree$4,0,items[2]]];
         
        case 5:
         var match$2=items[2];
         
         if(match$2)
          {var match$3=match$2[2];
           
           if(match$3)
            {var match$4=match$3[2];
             
             if(match$4)
              {var
                tree$5=
                 Printtyp["tree_of_class_declaration"]
                  (match[1],match[2],match[3]);
               
               return /* Some */[0,/* tuple */[0,tree$5,0,match$4[2]]];
               }
             else
              {exit=85;}
             }
           else
            {exit=85;}
           }
         else
          {exit=85;}
         
        case 6:
         var match$5=items[2];
         
         if(match$5)
          {var match$6=match$5[2];
           
           if(match$6)
            {var
              tree$6=
               Printtyp["tree_of_cltype_declaration"]
                (match[1],match[2],match[3]);
             
             return /* Some */[0,/* tuple */[0,tree$6,0,match$6[2]]];
             }
           else
            {exit=85;}
           }
         else
          {exit=85;}
         
        }
      }
    else
     {exit=85;}
    
    switch(exit){case 85:return 0;}
    };

var
 item_list=
  function(env,items)
   {if(items)
     {var match=pr_item(env,items);
      
      if(match)
       {var match$1=match[1];
        
        return /* :: */[0,
                /* tuple */[0,match$1[1],match$1[2]],
                item_list(env,match$1[3])];
        }
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var toplevel_env=[0,Env["empty"]];

var
 print_out_exception=
  function(ppf,exn,outv)
   {return print_out_phrase[1]
            (ppf,/* Ophr_exception */[2,/* tuple */[0,exn,outv]]);
    };

var
 print_exception_outcome=
  function(ppf,exn)
   {if("unknown primitive:caml_equal")
     {"unknown primitive:caml_gc_full_major"}
    else
     {}
    
    var outv=outval_of_value(toplevel_env[1],exn,Predef["type_exn"]);
    
    return print_out_exception(ppf,exn,outv);
    };

var directive_table=Hashtbl["create"](0,13);

var
 execute_phrase=
  function(print_outcome,ppf,phr)
   {switch(phr)
     {case 0:
       var oldenv=toplevel_env[1];
       
       Typecore["reset_delayed_checks"](0);
       var match=Typemod["type_toplevel_phrase"](oldenv,phr[1]);
       
       var newenv=match[3];
       
       var sg=match[2];
       
       var str=match[1];
       
       if(Clflags["dump_typedtree"][1])
        {Printtyped["implementation"](ppf,str)}
       else
        {}
       
       var sg$prime=Typemod["simplify_signature"](sg);
       
       
       Typecore["force_delayed_checks"](0);
       var lam=Translmod["transl_toplevel_definition"](str);
       
       Warnings["check_fatal"](0);
       try
        {toplevel_env[1]=newenv,0;
         var res=load_lambda(ppf,lam);
         
         switch(res)
          {case 0:
            if(print_outcome)
             {var v=res[1];
              
              var
               out_phr=
                Printtyp["wrap_printing_env"]
                 (oldenv,
                  function(param)
                   {var match$1=str[1];
                    
                    var exit;
                    
                    if(match$1)
                     {var match$2=match$1[1][1];
                      
                      switch(match$2)
                       {case 0:
                         if(match$1[2])
                          {exit=57;}
                         else
                          {var exp=match$2[1];
                           
                           var outv=outval_of_value(newenv,v,exp[4]);
                           
                           var ty=Printtyp["tree_of_type_scheme"](exp[4]);
                           
                           return /* Ophr_eval */[0,outv,ty];
                           }
                         
                        default:exit=57;}
                      }
                    else
                     {return [1,0];}
                    
                    switch(exit)
                     {case 57:
                       return /* Ophr_signature */[1,item_list(newenv,sg$prime)];
                      }
                    });
              }
            else
             {var out_phr=[1,0];}
            
           case 1:
            var exn=res[1];
            
            toplevel_env[1]=oldenv,0;
            if("unknown primitive:caml_equal")
             {"unknown primitive:caml_gc_full_major"}
            else
             {}
            
            var outv=outval_of_value(toplevel_env[1],exn,Predef["type_exn"]);
            
            var out_phr=/* Ophr_exception */[2,/* tuple */[0,exn,outv]];
            
           }
         
         print_out_phrase[1](ppf,out_phr);
         var exit;
         
         switch(out_phr){case 0:exit=54;case 1:exit=54;case 2:return 0;}
         
         switch(exit){case 54:return 1;}
         }
       catch(x){toplevel_env[1]=oldenv,0;throw x;}
       
      case 1:
       var dir_arg=phr[2];
       
       var dir_name=phr[1];
       
       try
        {var d=/* Some */[0,Hashtbl["find"](directive_table,dir_name)];}
       catch(exn$1){if(exn$1=Not_found){var d=0;}else{throw exn$1;}}
       
       if(d)
        {var d$1=d[1];
         
         var exit$1;
         
         switch(d$1)
          {case 0:
            if("unknown primitive:isint"){d$1[1](0);return 1;}else{exit$1=65;}
           case 1:
            if(typeof dir_arg=="number")
             {switch(dir_arg){}}
            else
             {switch(dir_arg[0])
               {case 0:d$1[1](dir_arg[1]);return 1;default:exit$1=65;}}
            
           case 2:
            if(typeof dir_arg=="number")
             {switch(dir_arg){}}
            else
             {switch(dir_arg[0])
               {case 1:d$1[1](dir_arg[1]);return 1;default:exit$1=65;}}
            
           case 3:
            if(typeof dir_arg=="number")
             {switch(dir_arg){}}
            else
             {switch(dir_arg[0])
               {case 2:d$1[1](dir_arg[1]);return 1;default:exit$1=65;}}
            
           case 4:
            if(typeof dir_arg=="number")
             {switch(dir_arg){}}
            else
             {switch(dir_arg[0])
               {case 3:d$1[1](dir_arg[1]);return 1;default:exit$1=65;}}
            
           }
         
         switch(exit$1)
          {case 65:
            Format["fprintf"]
             (ppf,
              [0,
               [11,
                "Wrong type of argument for directive `",
                [2,0,[11,"'.",[17,4,0]]]],
               "Wrong type of argument for directive `%s'.@."],
              dir_name);
            return 0;
            
           }
         }
       else
        {Format["fprintf"]
          (ppf,
           [0,
            [11,"Unknown directive `",[2,0,[11,"'.",[17,4,0]]]],
            "Unknown directive `%s'.@."],
           dir_name);
         return 0;
         }
       
      }
    };

var
 protect=
  function(r,newval,body)
   {var oldval=r[1];
    
    try
     {r[1]=newval,0;var res=body(0);r[1]=oldval,0;return res;}
    catch(x){r[1]=oldval,0;throw x;}
    };

var use_print_results=[0,1];

var
 preprocess_phrase=
  function(ppf,phr)
   {switch(phr)
     {case 0:
       var str=Pparse["apply_rewriters_str"]([0,1],"ocaml",phr[1]);
       
       var phr$1=/* Ptop_def */[0,str];
       
      case 1:var phr$1=phr;
      }
    
    if(Clflags["dump_parsetree"][1]){Printast["top_phrase"](ppf,phr$1)}else{}
    
    if(Clflags["dump_source"][1]){Pprintast["top_phrase"](ppf,phr$1)}else{}
    
    return phr$1;
    };

var
 use_file=
  function(ppf,wrap_mod,name)
   {try
     {if("unknown primitive:caml_string_equal")
       {var match=/* tuple */[0,"(stdin)",Pervasives["stdin"],0];}
      else
       {var filename=Misc["find_in_path"](Config["load_path"][1],name);
        
        var ic=Pervasives["open_in_bin"](filename);
        
        var match=/* tuple */[0,filename,ic,1];
        }
      
      var ic$1=match[2];
      
      var filename$1=match[1];
      
      var lb=Lexing["from_channel"](ic$1);
      
      Location["init"](lb,filename$1);
      Lexer["skip_sharp_bang"](lb);
      var
       success=
        protect
         (Location["input_name"],
          filename$1,
          function(param)
           {try
             {List["iter"]
               (function(ph)
                 {var ph$1=preprocess_phrase(ppf,ph);
                  
                  if(!execute_phrase(use_print_results[1],ppf,ph$1))
                   {throw Pervasives["Exit"];}
                  else
                   {return 0;}
                  },
                wrap_mod?parse_mod_use_file(name,lb):parse_use_file[1](lb));
              return 1;
              }
            catch(x)
             {if(x=Pervasives["Exit"])
               {return 0;}
              else
               {if(x=Sys["Break"])
                 {Format["fprintf"]
                   (ppf,[0,[11,"Interrupted.",[17,4,0]],"Interrupted.@."]);
                  return 0;
                  }
                else
                 {Location["report_exception"](ppf,x);return 0;}
                }
              }
            });
      
      if(match[3]){Pervasives["close_in"](ic$1)}else{}
      
      return success;
      }
    catch(exn)
     {if(exn=Not_found)
       {Format["fprintf"]
         (ppf,
          [0,
           [11,"Cannot find file ",[2,0,[12,46,[17,4,0]]]],
           "Cannot find file %s.@."],
          name);
        return 0;
        }
      else
       {throw exn;}
      }
    };

var mod_use_file=function(ppf,name){return use_file(ppf,1,name);};

var use_file$1=function(ppf,name){return use_file(ppf,0,name);};

var
 use_silently=
  function(ppf,name)
   {return protect
            (use_print_results,
             0,
             function(param){return use_file$1(ppf,name);});
    };

var first_line=[0,1];

var got_eof=[0,0];

var
 read_input_default=
  function(prompt,buffer,len)
   {Pervasives["output_string"](Pervasives["stdout"],prompt);
    Pervasives["flush"](Pervasives["stdout"]);
    var i=0;
    
    try
     {while(1)
       {if(i>=len){throw Pervasives["Exit"];}else{}
        
        var c=Pervasives["input_char"](Pervasives["stdin"]);
        
        buffer[i]=c,0;
        i=1+i;
        
        if(c=10){throw Pervasives["Exit"];}else{}
        }
      
      return /* tuple */[0,i,0];
      }
    catch(exn)
     {if(exn=End_of_file)
       {return /* tuple */[0,i,1];}
      else
       {if(exn=Pervasives["Exit"]){return /* tuple */[0,i,0];}else{throw exn;}
        }
      }
    };

var read_interactive_input=[0,read_input_default];

var
 refill_lexbuf=
  function(buffer,len)
   {if(got_eof[1])
     {got_eof[1]=0,0;return 0;}
    else
     {if(Clflags["noprompt"][1])
       {var prompt="";}
      else
       {if(first_line[1])
         {var prompt="# ";}
        else
         {if(Clflags["nopromptcont"][1])
           {var prompt="";}
          else
           {if(Lexer["in_comment"](0)){var prompt="* ";}else{var prompt="  ";}
            }
          }
        }
      
      first_line[1]=0,0;
      var match=read_interactive_input[1](prompt,buffer,len);
      
      var len$1=match[1];
      
      if(match[2])
       {Location["echo_eof"](0);
        if(len$1>0){got_eof[1]=1,0}else{}
        
        return len$1;
        }
      else
       {return len$1;}
      }
    };

Sys["interactive"][1]=1,0;
var crc_intfs=Symtable["init_toplevel"](0);

Compmisc["init_path"](0);
List["iter"]
 (function(param)
   {var crco=param[2];
    
    var name=param[1];
    
    Env["add_import"](name);
    if(crco)
     {return Consistbl["set"]
              (Env["crc_units"],name,crco[1],Sys["executable_name"]);
      }
    else
     {return 0;}
    },
  crc_intfs);
var
 load_ocamlinit=
  function(ppf)
   {if(Clflags["noinit"][1])
     {return 0;}
    else
     {var match=Clflags["init_file"][1];
      
      if(match)
       {var f=match[1];
        
        if("unknown primitive:caml_sys_file_exists")
         {return 0;}
        else
         {return Format["fprintf"]
                  (ppf,
                   [0,
                    [11,'Init file not found: "',[2,0,[11,'".',[17,4,0]]]],
                    'Init file not found: "%s".@.'],
                   f);
          }
        }
      else
       {if("unknown primitive:caml_sys_file_exists")
         {return 0;}
        else
         {try
           {var
             home_init=
              Filename["concat"]
               ("unknown primitive:caml_sys_getenv",".ocamlinit");
            
            if("unknown primitive:caml_sys_file_exists")
             {return 0;}
            else
             {return 0;}
            }
          catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
          }
        }
      }
    };

var
 set_paths=
  function(param)
   {Config["load_path"][1]=
    Pervasives["@"]
     (Config["load_path"][1],
      /* :: */[0,Filename["concat"](Config["standard_library"],"camlp4"),0]),
    0;
    Config["load_path"][1]=
    /* :: */[0,
     "",
     Pervasives["@"]
      (List["rev"](Clflags["include_dirs"][1]),Config["load_path"][1])],
    0;
    return Dll["add_path"](Config["load_path"][1]);
    };

var
 initialize_toplevel_env=
  function(param){return toplevel_env[1]=Compmisc["initial_env"](0),0;};

var PPerror="unknown primitive:caml_set_oo_id";

var
 loop=
  function(ppf)
   {Location["formatter_for_warnings"][1]=ppf,0;
    Format["fprintf"]
     (ppf,
      [0,
       [11,"        OCaml version ",[2,0,[17,4,[17,4,0]]]],
       "        OCaml version %s@.@."],
      Config["version"]);
    initialize_toplevel_env(0);
    var lb=Lexing["from_function"](refill_lexbuf);
    
    Location["init"](lb,"//toplevel//");
    Location["input_name"][1]="//toplevel//",0;
    Location["input_lexbuf"][1]=/* Some */[0,lb],0;
    Sys["catch_break"](1);
    load_ocamlinit(ppf);
    while(1)
     {var snap=Btype["snapshot"](0);
      
      try
       {Lexing["flush_input"](lb);
        Location["reset"](0);
        first_line[1]=1,0;
        try
         {var phr=parse_toplevel_phrase[1](lb);}
        catch(exn){if(exn=Pervasives["Exit"]){throw PPerror;}else{throw exn;}}
        
        var phr$1=preprocess_phrase(ppf,phr);
        
        Env["reset_cache_toplevel"](0),0}
      catch(x)
       {if(x=End_of_file)
         {Pervasives["exit"](0)}
        else
         {if(x=Sys["Break"])
           {Format["fprintf"]
             (ppf,[0,[11,"Interrupted.",[17,4,0]],"Interrupted.@."]),
            Btype["backtrack"](snap)}
          else
           {if(x=PPerror)
             {}
            else
             {Location["report_exception"](ppf,x),Btype["backtrack"](snap)}
            }
          }
        }
      }
    return 0;
    };

var
 run_script=
  function(ppf,name,args)
   {var len=args["length"];
    
    if(Sys["argv"]["length"]<len)
     {Pervasives["invalid_arg"]("Toploop.run_script")}
    else
     {}
    
    $$Array["blit"](args,0,Sys["argv"],0,len);
    "unknown primitive:caml_obj_truncate";
    Arg["current"][1]=0,0;
    Compmisc["init_path"](0);
    toplevel_env[1]=Compmisc["initial_env"](0),0;
    Sys["interactive"][1]=0,0;
    return use_silently(ppf,name);
    };

module["exports"]=
{"getvalue":getvalue,
 "setvalue":setvalue,
 "set_paths":set_paths,
 "loop":loop,
 "run_script":run_script,
 "directive_table":directive_table,
 "toplevel_env":toplevel_env,
 "initialize_toplevel_env":initialize_toplevel_env,
 "print_exception_outcome":print_exception_outcome,
 "execute_phrase":execute_phrase,
 "preprocess_phrase":preprocess_phrase,
 "use_file":use_file$1,
 "use_silently":use_silently,
 "mod_use_file":mod_use_file,
 "eval_path":eval_path$1,
 "print_value":print_value,
 "print_untyped_exception":print_untyped_exception,
 "install_printer":install_printer,
 "install_generic_printer":install_generic_printer,
 "install_generic_printer'":install_generic_printer$prime,
 "remove_printer":remove_printer,
 "max_printer_depth":max_printer_depth,
 "max_printer_steps":max_printer_steps,
 "parse_toplevel_phrase":parse_toplevel_phrase,
 "parse_use_file":parse_use_file,
 "print_location":print_location,
 "print_error":print_error,
 "print_warning":print_warning,
 "input_name":input_name,
 "print_out_value":print_out_value,
 "print_out_type":print_out_type,
 "print_out_class_type":print_out_class_type,
 "print_out_module_type":print_out_module_type,
 "print_out_type_extension":print_out_type_extension,
 "print_out_sig_item":print_out_sig_item,
 "print_out_signature":print_out_signature,
 "print_out_phrase":print_out_phrase,
 "read_interactive_input":read_interactive_input,
 "toplevel_startup_hook":toplevel_startup_hook,
 "may_trace":may_trace};

