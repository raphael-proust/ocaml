// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Parse=require("Parse");
var Odoc_global=require("Odoc_global");
var Odoc_dep=require("Odoc_dep");
var Warnings=require("Warnings");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_cross=require("Odoc_cross");
var Odoc_types=require("Odoc_types");
var Env=require("Env");
var Odoc_comments=require("Odoc_comments");
var Clflags=require("Clflags");
var Odoc_sig=require("Odoc_sig");
var Format=require("Format");
var Syntaxerr=require("Syntaxerr");
var Misc=require("Misc");
var Typemod=require("Typemod");
var Odoc_merge=require("Odoc_merge");
var Filename=require("Filename");
var Odoc_misc=require("Odoc_misc");
var Odoc_module=require("Odoc_module");
var Printexc=require("Printexc");
var Odoc_text=require("Odoc_text");
var Location=require("Location");
var Pparse=require("Pparse");
var Config=require("Config");
var Odoc_ast=require("Odoc_ast");
var Odoc_messages=require("Odoc_messages");


var
 init_path=
  function(param)
   {Config["load_path"][1]=
    [/* :: */0,
     "",
     List["rev"]
      ([/* :: */0,Config["standard_library"],Clflags["include_dirs"][1]])],
    0;
    return Env["reset_cache"](0);
    };

var
 initial_env=
  function(param)
   {if(Clflags["unsafe_string"][1])
     {var initial=Env["initial_unsafe_string"];}
    else
     {var initial=Env["initial_safe_string"];}
    
    try
     {if(Clflags["nopervasives"][1])
       {return initial;}
      else
       {return Env["open_pers_signature"]("Pervasives",initial);}
      }
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]("cannot open pervasives.cmi");}
      else
       {throw exn;}
      }
    };

var
 preprocess=
  function(sourcefile)
   {try
     {return Pparse["preprocess"](sourcefile);}
    catch(exn)
     {if(exn[1]=Pparse["Error"])
       {Format["eprintf"]
         ([0,
           [11,"Preprocessing error",[17,4,[15,[17,4,0]]]],
           "Preprocessing error@.%a@."],
          Pparse["report_error"],
          exn[2]);
        return Pervasives["exit"](2);
        }
      else
       {throw exn;}
      }
    };

var $plus$plus=function(x,f){return f(x);};

var tool_name="ocamldoc";

var
 process_implementation_file=
  function(ppf,sourcefile)
   {init_path(0);
    var prefixname=Filename["chop_extension"](sourcefile);
    
    var modulename=$$String["capitalize"](Filename["basename"](prefixname));
    
    Env["set_unit_name"](modulename);
    var inputfile=preprocess(sourcefile);
    
    var env=initial_env(0);
    
    try
     {var
       parsetree=
        Pparse["file"]
         (Format["err_formatter"],
          tool_name,
          inputfile,
          Parse["implementation"],
          Config["ast_impl_magic_number"]);
      
      var
       typedtree=
        Typemod["type_implementation"]
         (sourcefile,prefixname,modulename,env,parsetree);
      
      return [/* tuple */0,
              [/* Some */0,[/* tuple */0,parsetree,typedtree]],
              inputfile];
      }
    catch(e)
     {if(e[1]=Syntaxerr["Error"])
       {Format["fprintf"]
         (Format["err_formatter"],
          [0,[18,[1,[0,0,""]],[15,[17,0,[17,4,0]]]],"@[%a@]@."],
          Syntaxerr["report_error"],
          e[2]);
        return [/* tuple */0,0,inputfile];
        }
      else
       {if(e[1]=Failure)
         {Pervasives["prerr_endline"](e[2]);
          Odoc_global["errors"][0]++;
          return [/* tuple */0,0,inputfile];
          }
        else
         {throw e;}
        }
      }
    };

var
 process_interface_file=
  function(ppf,sourcefile)
   {init_path(0);
    var prefixname=Filename["chop_extension"](sourcefile);
    
    var modulename=$$String["capitalize"](Filename["basename"](prefixname));
    
    Env["set_unit_name"](modulename);
    var inputfile=preprocess(sourcefile);
    
    var
     ast=
      Pparse["file"]
       (Format["err_formatter"],
        tool_name,
        inputfile,
        Parse["interface"],
        Config["ast_intf_magic_number"]);
    
    var sg=Typemod["type_interface"](initial_env(0),ast);
    
    Warnings["check_fatal"](0);
    return [/* tuple */0,ast,sg,inputfile];
    };

var $$let=Odoc_comments["Basic_info_retriever"];

var
 Ast_analyser=
  Odoc_ast["Analyser"]([0,$$let[2],$$let[1],$$let[3],$$let[4],$$let[5]]);

var $$let$1=Odoc_comments["Basic_info_retriever"];

var
 Sig_analyser=
  Odoc_sig["Analyser"]
   ([0,$$let$1[2],$$let$1[1],$$let$1[3],$$let$1[4],$$let$1[5]]);

var
 process_error=
  function(exn)
   {var match=Location["error_of_exn"](exn);
    
    if(match)
     {return Format["fprintf"]
              (Format["err_formatter"],
               [0,[18,[1,[0,0,""]],[15,[17,0,[17,4,0]]]],"@[%a@]@."],
               Location["report_error"],
               match[1]);
      }
    else
     {return Format["fprintf"]
              (Format["err_formatter"],
               [0,
                [11,
                 "Compilation error(",
                 [2,
                  0,
                  [11,
                   "). Use the OCaml compiler to get more details.",
                   [17,4,0]]]],
                "Compilation error(%s). Use the OCaml compiler to get more details.@."],
               Printexc["to_string"](exn));
      }
    };

var
 process_file=
  function(ppf,sourcefile)
   {if(Odoc_global["verbose"][1])
     {var exit;
      
      switch(sourcefile)
       {case 0:exit=50;case 1:exit=50;case 2:var f=sourcefile[1];}
      
      switch(exit){case 50:var f=sourcefile[1];}
      
      Format["print_string"](Odoc_messages["analysing"](f)),
      Format["print_newline"](0)}
    else
     {}
    
    switch(sourcefile)
     {case 0:
       var file=sourcefile[1];
       
       Location["input_name"][1]=file,0;
       try
        {var match=process_implementation_file(ppf,file);
         
         var parsetree_typedtree_opt=match[1];
         
         if(parsetree_typedtree_opt)
          {var match$1=parsetree_typedtree_opt[1];
           
           var parsetree=match$1[1];
           
           var
            file_module=
             Ast_analyser[1]
              (file,Location["input_name"][1],parsetree,match$1[2]);
           
           file_module[8]=Odoc_dep["impl_dependencies"](parsetree),0;
           if(Odoc_global["verbose"][1])
            {Format["print_string"](Odoc_messages["ok"]),
             Format["print_newline"](0)}
           else
            {}
           
           Pparse["remove_preprocessed"](match[2]);
           return [/* Some */0,file_module];
           }
         else
          {return 0;}
         }
       catch(e)
        {var exit$1;
         
         if(e[1]=Sys_error)
          {var s=e[2];exit$1=28;}
         else
          {if(e[1]=Failure)
            {var s=e[2];exit$1=28;}
           else
            {process_error(e);Odoc_global["errors"][0]++;return 0;}
           }
         
         switch(exit$1)
          {case 28:
            Pervasives["prerr_endline"](s);
            Odoc_global["errors"][0]++;
            return 0;
            
           }
         }
       
      case 1:
       var file$1=sourcefile[1];
       
       Location["input_name"][1]=file$1,0;
       try
        {var match$2=process_interface_file(ppf,file$1);
         
         var ast=match$2[1];
         
         var
          file_module$1=
           Sig_analyser[13]
            (file$1,Location["input_name"][1],ast,match$2[2][2]);
         
         file_module$1[8]=Odoc_dep["intf_dependencies"](ast),0;
         if(Odoc_global["verbose"][1])
          {Format["print_string"](Odoc_messages["ok"]),
           Format["print_newline"](0)}
         else
          {}
         
         Pparse["remove_preprocessed"](match$2[3]);
         return [/* Some */0,file_module$1];
         }
       catch(e$1)
        {var exit$2;
         
         if(e$1[1]=Sys_error)
          {var s$1=e$1[2];exit$2=34;}
         else
          {if(e$1[1]=Failure)
            {var s$1=e$1[2];exit$2=34;}
           else
            {process_error(e$1);Odoc_global["errors"][0]++;return 0;}
           }
         
         switch(exit$2)
          {case 34:
            Pervasives["prerr_endline"](s$1);
            Odoc_global["errors"][0]++;
            return 0;
            
           }
         }
       
      case 2:
       var file$2=sourcefile[1];
       
       Location["input_name"][1]=file$2,0;
       try
        {try
          {var s$2=Filename["chop_extension"](file$2);}
         catch(exn){var s$2=file$2;}
         
         var mod_name=$$String["capitalize"](Filename["basename"](s$2));
         
         try
          {var
            txt=
             Odoc_text["Texter"][1](Odoc_misc["input_file_as_string"](file$2));
           }
         catch(exn$1)
          {if(exn$1[1]=Odoc_text["Text_syntax"])
            {throw [0,
                    Failure,
                    Odoc_messages["text_parse_error"]
                     (exn$1[2],exn$1[3],exn$1[4])];
             }
           else
            {throw exn$1;}
           }
         
         var
          m=
           [/* record */0,
            mod_name,
            [1,0],
            0,
            1,
            file$2,
            [/* Module_struct */0,
             [/* :: */0,[/* Element_module_comment */9,txt],0]],
            [/* record */0,0,[/* Some */0,Location["in_file"](file$2)]],
            0,
            0,
            0,
            1];
         
         return [/* Some */0,m];
         }
       catch(e$2)
        {var exit$3;
         
         if(e$2[1]=Sys_error)
          {var s$3=e$2[2];exit$3=40;}
         else
          {if(e$2[1]=Failure)
            {var s$3=e$2[2];exit$3=40;}
           else
            {process_error(e$2);Odoc_global["errors"][0]++;return 0;}
           }
         
         switch(exit$3)
          {case 40:
            Pervasives["prerr_endline"](s$3);
            Odoc_global["errors"][0]++;
            return 0;
            
           }
         }
       
      }
    };

var
 remove_class_elements_between_stop=
  function(keep,eles)
   {if(eles)
     {var q=eles[2];
      
      var ele=eles[1];
      
      var exit;
      
      switch(ele)
       {case 0:exit=25;
        case 1:exit=25;
        case 2:
         var match=ele[1];
         
         if(match)
          {var match$1=match[1];
           
           if(typeof match$1=="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 0:
                switch(match$1[1])
                 {case "/*":
                   if(match[2])
                    {exit=25;}
                   else
                    {return remove_class_elements_between_stop(!keep,q);}
                   
                  default:exit=25;}
                
               default:exit=25;}}
           }
         else
          {exit=25;}
         
        }
      
      switch(exit)
       {case 25:
         if(keep)
          {return [/* :: */0,ele,remove_class_elements_between_stop(keep,q)];}
         else
          {return remove_class_elements_between_stop(keep,q);}
         
        }
      }
    else
     {return 0;}
    };

var
 remove_class_elements_between_stop_in_class_kind=
  function(k)
   {var exit;
    
    switch(k)
     {case 0:
       return [/* Class_structure */0,
               k[1],
               remove_class_elements_between_stop(1,k[2])];
       
      case 1:exit=24;
      case 2:exit=24;
      case 3:
       return [/* Class_constraint */3,
               remove_class_elements_between_stop_in_class_kind(k[1]),
               remove_class_elements_between_stop_in_class_type_kind(k[2])];
       
      }
    
    switch(exit){case 24:return k;}
    };

var
 remove_class_elements_between_stop_in_class_type_kind=
  function(tk)
   {switch(tk)
     {case 0:
       return [/* Class_signature */0,
               tk[1],
               remove_class_elements_between_stop(1,tk[2])];
       
      case 1:return tk;
      }
    };

var
 remove_module_elements_between_stop=
  function(keep,eles)
   {if(eles)
     {var q=eles[2];
      
      var ele=eles[1];
      
      switch(ele)
       {case 0:
         var m=ele[1];
         
         if(keep)
          {m[6]=remove_module_elements_between_stop_in_module_kind(m[6]),0;
           return [/* :: */0,
                   [/* Element_module */0,m],
                   remove_module_elements_between_stop(keep,q)];
           }
         else
          {return remove_module_elements_between_stop(keep,q);}
         
        case 1:
         var mt=ele[1];
         
         if(keep)
          {mt[6]=
           Odoc_misc["apply_opt"]
            (remove_module_elements_between_stop_in_module_type_kind,mt[6]),
           0;
           return [/* :: */0,
                   [/* Element_module_type */1,mt],
                   remove_module_elements_between_stop(keep,q)];
           }
         else
          {return remove_module_elements_between_stop(keep,q);}
         
        case 2:
         if(keep)
          {return [/* :: */0,ele,remove_module_elements_between_stop(keep,q)];
           }
         else
          {return remove_module_elements_between_stop(keep,q);}
         
        case 3:
         var c=ele[1];
         
         if(keep)
          {c[6]=remove_class_elements_between_stop_in_class_kind(c[6]),0;
           return [/* :: */0,
                   [/* Element_class */3,c],
                   remove_module_elements_between_stop(keep,q)];
           }
         else
          {return remove_module_elements_between_stop(keep,q);}
         
        case 4:
         var ct=ele[1];
         
         if(keep)
          {ct[6]=
           remove_class_elements_between_stop_in_class_type_kind(ct[6]),
           0;
           return [/* :: */0,
                   [/* Element_class_type */4,ct],
                   remove_module_elements_between_stop(keep,q)];
           }
         else
          {return remove_module_elements_between_stop(keep,q);}
         
        case 9:
         var match=ele[1];
         
         var exit;
         
         if(match)
          {var match$1=match[1];
           
           if(typeof match$1=="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 0:
                switch(match$1[1])
                 {case "/*":
                   if(match[2])
                    {exit=20;}
                   else
                    {return remove_module_elements_between_stop(!keep,q);}
                   
                  default:exit=20;}
                
               default:exit=20;}}
           }
         else
          {exit=20;}
         
         switch(exit)
          {case 20:
            if(keep)
             {return [/* :: */0,
                      ele,
                      remove_module_elements_between_stop(keep,q)];
              }
            else
             {return remove_module_elements_between_stop(keep,q);}
            
           }
         
        default:
         if(keep)
          {return [/* :: */0,ele,remove_module_elements_between_stop(keep,q)];
           }
         else
          {return remove_module_elements_between_stop(keep,q);}
         }
      }
    else
     {return 0;}
    };

var
 remove_module_elements_between_stop_in_module_kind=
  function(k)
   {switch(k)
     {case 0:
       return [/* Module_struct */0,
               remove_module_elements_between_stop(1,k[1])];
       
      case 2:
       return [/* Module_functor */2,
               k[1],
               remove_module_elements_between_stop_in_module_kind(k[2])];
       
      case 3:
       return [/* Module_apply */3,
               remove_module_elements_between_stop_in_module_kind(k[1]),
               remove_module_elements_between_stop_in_module_kind(k[2])];
       
      case 4:
       return [/* Module_with */4,
               remove_module_elements_between_stop_in_module_type_kind(k[1]),
               k[2]];
       
      case 5:
       return [/* Module_constraint */5,
               remove_module_elements_between_stop_in_module_kind(k[1]),
               remove_module_elements_between_stop_in_module_type_kind(k[2])];
       
      default:return k;}
    };

var
 remove_module_elements_between_stop_in_module_type_kind=
  function(tk)
   {var exit;
    
    switch(tk)
     {case 0:
       return [/* Module_type_struct */0,
               remove_module_elements_between_stop(1,tk[1])];
       
      case 1:
       return [/* Module_type_functor */1,
               tk[1],
               remove_module_elements_between_stop_in_module_type_kind(tk[2])];
       
      case 2:exit=23;
      case 3:
       return [/* Module_type_with */3,
               remove_module_elements_between_stop_in_module_type_kind(tk[1]),
               tk[2]];
       
      case 4:exit=23;
      }
    
    switch(exit){case 23:return tk;}
    };

var
 remove_elements_between_stop=
  function(module_list)
   {return List["map"]
            (function(m)
              {m[6]=
               remove_module_elements_between_stop_in_module_kind(m[6]),
               0;
               return m;
               },
             module_list);
    };

var
 analyse_files=
  function($staropt$star,files)
   {if($staropt$star){var init=$staropt$star[1];}else{var init=0;}
    
    var
     modules_pre=
      Pervasives["@"]
       (init,
        List["fold_left"]
         (function(acc,file)
           {try
             {var match=process_file(Format["err_formatter"],file);
              
              if(match)
               {return Pervasives["@"](acc,[/* :: */0,match[1],0]);}
              else
               {return acc;}
              }
            catch(exn)
             {if(exn[1]=Failure)
               {Pervasives["prerr_endline"](exn[2]);
                Odoc_global["errors"][0]++;
                return acc;
                }
              else
               {throw exn;}
              }
            },
          0,
          files));
    
    if(Odoc_global["no_stop"][1])
     {var modules=modules_pre;}
    else
     {var modules=remove_elements_between_stop(modules_pre);}
    
    if(Odoc_global["verbose"][1])
     {Format["print_string"](Odoc_messages["merging"]),
      Format["print_newline"](0)}
    else
     {}
    
    var
     merged_modules=
      Odoc_merge["merge"](Odoc_global["merge_options"][1],modules);
    
    if(Odoc_global["verbose"][1])
     {Format["print_string"](Odoc_messages["ok"]),Format["print_newline"](0)}
    else
     {}
    
    var
     modules_list=
      List["fold_left"]
       (function(acc,m)
         {return Pervasives["@"]
                  (acc,Odoc_module["module_all_submodules"]([0,0],m));
          },
        merged_modules,
        merged_modules);
    
    if(Odoc_global["verbose"][1])
     {Format["print_string"](Odoc_messages["cross_referencing"]),
      Format["print_newline"](0)}
    else
     {}
    
    var match=Odoc_cross["associate"](modules_list);
    
    if(Odoc_global["verbose"][1])
     {Format["print_string"](Odoc_messages["ok"]),Format["print_newline"](0)}
    else
     {}
    
    if(Odoc_global["sort_modules"][1])
     {return List["sort"]
              (function(m1,m2)
                {return "unknown primitive:caml_string_compare";},
               merged_modules);
      }
    else
     {return merged_modules;}
    };

var
 dump_modules=
  function(file,modules)
   {try
     {var chanout=Pervasives["open_out_bin"](file);
      
      var dump=Odoc_types["make_dump"](modules);
      
      Pervasives["output_value"](chanout,dump);
      return Pervasives["close_out"](chanout);
      }
    catch(exn)
     {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
    };

var
 load_modules=
  function(file)
   {try
     {var chanin=Pervasives["open_in_bin"](file);
      
      var dump=Pervasives["input_value"](chanin);
      
      Pervasives["close_in"](chanin);
      return Odoc_types["open_dump"](dump);
      }
    catch(exn)
     {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
    };

module["exports"]=
{"analyse_files":analyse_files,
 "dump_modules":dump_modules,
 "load_modules":load_modules};

