// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Warnings=require("./warnings.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Clflags=require("./clflags.js");
var Printf=require("./printf.js");
var Misc=require("./misc.js");
var Filename=require("./filename.js");
var Location=require("./location.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 output_prefix=
  function(name)
   {var match=Clflags["output_name"][1];
    
    if(match)
     {if(Clflags["compile_only"][1])
       {Clflags["output_name"][1]=/* None */0;var oname=match[1];}
      else
       {var oname=name;}
      }
    else
     {var oname=name;}
    
    return Misc["chop_extension_if_any"](oname);
    };

var
 print_version_and_library=
  function(compiler)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "The OCaml ",
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,", version ",/* End_of_format */0]]],
       "The OCaml %s, version "],
      compiler);
    Pervasives["print_string"](Config["version"]);
    Pervasives["print_newline"](/* () */0);
    Pervasives["print_string"]("Standard library directory: ");
    Pervasives["print_string"](Config["standard_library"]);
    Pervasives["print_newline"](/* () */0);
    return Pervasives["exit"](0);
    };

var
 print_version_string=
  function(param)
   {Pervasives["print_string"](Config["version"]);
    Pervasives["print_newline"](/* () */0);
    return Pervasives["exit"](0);
    };

var
 print_standard_library=
  function(param)
   {Pervasives["print_string"](Config["standard_library"]);
    Pervasives["print_newline"](/* () */0);
    return Pervasives["exit"](0);
    };

var
 fatal=
  function(err)
   {Pervasives["prerr_endline"](err);return Pervasives["exit"](2);};

var
 extract_output=
  function(param)
   {if(param)
     {return param[1];}
    else
     {return fatal
              ("Please specify the name of the output file, using option -o");
      }
    };

var
 default_output=
  function(param)
   {if(param){return param[1];}else{return Config["default_executable_name"];}
    };

var implicit_modules=[0,/* [] */0];

var first_include_dirs=[0,/* [] */0];

var last_include_dirs=[0,/* [] */0];

var first_ccopts=[0,/* [] */0];

var last_ccopts=[0,/* [] */0];

var first_ppx=[0,/* [] */0];

var last_ppx=[0,/* [] */0];

var first_objfiles=[0,/* [] */0];

var last_objfiles=[0,/* [] */0];

var
 is_unit_name=
  function(name)
   {try
     {var match=name[0];
      
      if(25<-65+match>>>0){throw Pervasives["Exit"];}else{}
      
      for(var i=1;i<=name["length"]-1;i++)
       {var match$1=name[i];
        
        var exit;
        
        if(match$1>=65)
         {var switcher=-91+match$1;
          
          if(5<switcher>>>0)
           {if(switcher>=32){exit=42;}else{exit=41;}}
          else
           {if(switcher!==4){exit=42;}else{exit=41;}}
          }
        else
         {if(match$1>=48)
           {if(match$1>=58){exit=42;}else{exit=41;}}
          else
           {if(match$1!==39){exit=42;}else{exit=41;}}
          }
        
        switch(exit){case 42:throw Pervasives["Exit"];case 41:}
        }
      
      return /* true */1;
      }
    catch(exn)
     {if(exn===Pervasives["Exit"]){return /* false */0;}else{throw exn;}}
    };

var
 check_unit_name=
  function(ppf,filename,name)
   {if(!is_unit_name(name))
     {return Location["print_warning"]
              (Location["in_file"](filename),
               ppf,
               /* Bad_module_name */[11,name]);
      }
    else
     {return 0;}
    };

var
 module_of_filename=
  function(ppf,inputfile,outputprefix)
   {var basename=Filename["basename"](outputprefix);
    
    try
     {var pos=$$String["index"](basename,46);
      
      var name=$$String["sub"](basename,0,pos);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var name=basename;}
      else
       {throw exn;}
      }
    
    var name$1=$$String["capitalize"](name);
    
    check_unit_name(ppf,inputfile,name$1);
    return name$1;
    };

var
 $$SyntaxError=
  CamlPrimitive["caml_set_oo_id"]([248,"Compenv.SyntaxError",0]);

var
 parse_args=
  function(s)
   {var args=Misc["split"](s,44);
    
    var
     iter=
      function(is_after,args,before,after)
       {if(args)
         {var arg=args[1];
          
          switch(arg)
           {case "_":
             if(is_after)
              {throw [0,$$SyntaxError,"too many '_' separators"];}
             else
              {return iter(/* true */1,args[2],before,after);}
             
            default:
             var tail=args[2];
             
             try
              {var binding=Misc["cut_at"](arg,61);}
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {throw [0,
                        $$SyntaxError,
                        Pervasives["^"]("missing '=' in ",arg)];
                 }
               else
                {throw exn;}
               }
             
             if(is_after)
              {return iter(is_after,tail,before,/* :: */[0,binding,after]);}
             else
              {return iter(is_after,tail,/* :: */[0,binding,before],after);}
             }
          }
        else
         {if(!is_after)
           {throw [0,$$SyntaxError,"no '_' separator found"];}
          else
           {return /* tuple */[0,List["rev"](before),List["rev"](after)];}
          }
        };
    
    return iter(/* false */0,args,/* [] */0,/* [] */0);
    };

var
 setter=
  function(ppf,f,name,options,s)
   {try
     {var exit;
      
      switch(s)
       {case "0":var bool=/* false */0;
        case "1":var bool=/* true */1;
        default:exit=25;}
      
      switch(exit)
       {case 25:throw CamlPrimitive["caml_global_data"]["Not_found"];}
      
      return List["iter"](function(b){return b[1]=f(bool),0;},options);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Location["print_warning"]
                (Location["none"],
                 ppf,
                 /* Bad_env_variable */[29,
                  "OCAMLPARAM",
                  Printf["sprintf"]
                   ([/* Format */0,
                     [/* String_literal */11,
                      "bad value for ",
                      [/* String */2,/* No_padding */0,/* End_of_format */0]],
                     "bad value for %s"],
                    name)]);
        }
      else
       {throw exn;}
      }
    };

var can_discard=[0,/* [] */0];

var
 read_OCAMLPARAM=
  function(ppf,position)
   {try
     {var s=CamlPrimitive["caml_sys_getenv"]("OCAMLPARAM");
      
      try
       {var match=parse_args(s);}
      catch(exn)
       {if(exn[1]===$$SyntaxError)
         {Location["print_warning"]
           (Location["none"],
            ppf,
            /* Bad_env_variable */[29,"OCAMLPARAM",exn[2]]);
          var match=[/* tuple */0,/* [] */0,/* [] */0];
          }
        else
         {throw exn;}
        }
      
      var
       set=
        function(name,options,s)
         {return setter(ppf,function(b){return b;},name,options,s);};
      
      var
       clear=
        function(name,options,s)
         {return setter(ppf,function(b){return !b;},name,options,s);};
      
      return List["iter"]
              (function(param)
                {var v=param[2];
                 
                 var name=param[1];
                 
                 var exit;
                 
                 switch(name)
                  {case "I":
                    if(position!==0)
                     {return last_include_dirs[1]=
                             /* :: */[0,v,last_include_dirs[1]],
                             0;
                      }
                    else
                     {return first_include_dirs[1]=
                             /* :: */[0,v,first_include_dirs[1]],
                             0;
                      }
                    
                   case "S":
                    return set
                            ("S",/* :: */[0,Clflags["keep_asm_file"],/* [] */0],v);
                    
                   case "absname":
                    return set
                            ("absname",/* :: */[0,Location["absname"],/* [] */0],v);
                    
                   case "annot":
                    return set
                            ("annot",/* :: */[0,Clflags["annotations"],/* [] */0],v);
                    
                   case "bin-annot":
                    return set
                            ("bin-annot",
                             /* :: */[0,Clflags["binary_annotations"],/* [] */0],
                             v);
                    
                   case "can-discard":
                    return can_discard[1]=/* :: */[0,v,can_discard[1]],0;
                   case "cc":return Clflags["c_compiler"][1]=/* Some */[0,v],0;
                   case "cclib":
                    if(position!==1)
                     {return Clflags["ccobjs"][1]=
                             Pervasives["@"]
                              (Misc["rev_split_words"](v),Clflags["ccobjs"][1]),
                             0;
                      }
                    else
                     {return /* () */0;}
                    
                   case "ccopts":
                    if(position!==0)
                     {return last_ccopts[1]=/* :: */[0,v,last_ccopts[1]],0;}
                    else
                     {return first_ccopts[1]=/* :: */[0,v,first_ccopts[1]],0;}
                    
                   case "cma":exit=12;
                   case "cmo":exit=12;
                   case "cmx":exit=13;
                   case "cmxa":exit=13;
                   case "compact":
                    return clear
                            ("compact",
                             /* :: */[0,Clflags["optimize_for_speed"],/* [] */0],
                             v);
                    
                   case "compat-32":
                    return set
                            ("compat-32",
                             /* :: */[0,Clflags["bytecode_compatible_32"],/* [] */0],
                             v);
                    
                   case "dstartup":
                    return set
                            ("dstartup",
                             /* :: */[0,Clflags["keep_startup_file"],/* [] */0],
                             v);
                    
                   case "g":
                    return set("g",/* :: */[0,Clflags["debug"],/* [] */0],v);
                   case "inline":
                    try
                     {return Clflags["inline_threshold"][1]=
                             8*
                             CamlPrimitive["caml_int_of_string"](v),
                             0;
                      }
                    catch(exn$1)
                     {return Location["print_warning"]
                              (Location["none"],
                               ppf,
                               [/* Bad_env_variable */29,
                                "OCAMLPARAM",
                                'non-integer parameter for "inline"']);
                      }
                    
                   case "intf-suffix":return Config["interface_suffix"][1]=v,0;
                   case "keep-docs":
                    return set
                            ("keep-docs",/* :: */[0,Clflags["keep_docs"],/* [] */0],v);
                    
                   case "keep-locs":
                    return set
                            ("keep-locs",/* :: */[0,Clflags["keep_locs"],/* [] */0],v);
                    
                   case "linkall":
                    return set
                            ("linkall",
                             /* :: */[0,Clflags["link_everything"],/* [] */0],
                             v);
                    
                   case "no-app-funct":
                    return clear
                            ("no-app-funct",
                             /* :: */[0,Clflags["applicative_functors"],/* [] */0],
                             v);
                    
                   case "noassert":
                    return set
                            ("noassert",/* :: */[0,Clflags["noassert"],/* [] */0],v);
                    
                   case "noautolink":
                    return set
                            ("noautolink",
                             /* :: */[0,Clflags["no_auto_link"],/* [] */0],
                             v);
                    
                   case "nodynlink":
                    return clear
                            ("nodynlink",/* :: */[0,Clflags["dlcode"],/* [] */0],v);
                    
                   case "nolabels":
                    return set
                            ("nolabels",/* :: */[0,Clflags["classic"],/* [] */0],v);
                    
                   case "nopervasives":
                    return set
                            ("nopervasives",
                             /* :: */[0,Clflags["nopervasives"],/* [] */0],
                             v);
                    
                   case "nostdlib":
                    return set
                            ("nostdlib",
                             /* :: */[0,Clflags["no_std_include"],/* [] */0],
                             v);
                    
                   case "p":
                    return set("p",/* :: */[0,Clflags["gprofile"],/* [] */0],v);
                   case "pp":
                    return Clflags["preprocessor"][1]=/* Some */[0,v],0;
                   case "ppx":
                    if(position!==0)
                     {return last_ppx[1]=/* :: */[0,v,last_ppx[1]],0;}
                    else
                     {return first_ppx[1]=/* :: */[0,v,first_ppx[1]],0;}
                    
                   case "principal":
                    return set
                            ("principal",/* :: */[0,Clflags["principal"],/* [] */0],v);
                    
                   case "rectypes":
                    return set
                            ("rectypes",
                             /* :: */[0,Clflags["recursive_types"],/* [] */0],
                             v);
                    
                   case "runtime-variant":
                    return Clflags["runtime_variant"][1]=v,0;
                   case "s":
                    return set
                            ("s",
                             /* :: */[0,
                              Clflags["keep_asm_file"],
                              /* :: */[0,Clflags["keep_startup_file"],/* [] */0]],
                             v);
                    
                   case "safe-string":
                    return clear
                            ("safe-string",
                             /* :: */[0,Clflags["unsafe_string"],/* [] */0],
                             v);
                    
                   case "short-paths":
                    return clear
                            ("short-paths",
                             /* :: */[0,Clflags["real_paths"],/* [] */0],
                             v);
                    
                   case "slash":
                    return set
                            ("slash",/* :: */[0,Clflags["force_slash"],/* [] */0],v);
                    
                   case "strict-formats":
                    return set
                            ("strict-formats",
                             /* :: */[0,Clflags["strict_formats"],/* [] */0],
                             v);
                    
                   case "strict-sequence":
                    return set
                            ("strict-sequence",
                             /* :: */[0,Clflags["strict_sequence"],/* [] */0],
                             v);
                    
                   case "thread":
                    return set
                            ("thread",/* :: */[0,Clflags["use_threads"],/* [] */0],v);
                    
                   case "trans-mod":
                    return set
                            ("trans-mod",
                             /* :: */[0,Clflags["transparent_modules"],/* [] */0],
                             v);
                    
                   case "unsafe":
                    return set("unsafe",/* :: */[0,Clflags["fast"],/* [] */0],v);
                    
                   case "verbose":
                    return set
                            ("verbose",/* :: */[0,Clflags["verbose"],/* [] */0],v);
                    
                   case "w":exit=15;
                   case "warn-error":exit=11;
                   case "we":exit=11;
                   case "wwe":exit=15;
                   default:exit=14;}
                 
                 switch(exit)
                  {case 15:return Warnings["parse_options"](/* false */0,v);
                   case 14:
                    if(!List["mem"](name,can_discard[1]))
                     {can_discard[1]=/* :: */[0,name,can_discard[1]];
                      return Printf["eprintf"]
                              ([/* Format */0,
                                [/* String_literal */11,
                                 "Warning: discarding value of variable ",
                                 [/* Caml_string */3,
                                  /* No_padding */0,
                                  [/* String_literal */11,
                                   " in OCAMLPARAM\n",
                                   [/* Flush */10,/* End_of_format */0]]]],
                                "Warning: discarding value of variable %S in OCAMLPARAM\n%!"],
                               name);
                      }
                    else
                     {return 0;}
                    
                   case 11:return Warnings["parse_options"](/* true */1,v);
                   case 12:
                    if(!Clflags["native_code"][1])
                     {if(position!==0)
                       {return last_objfiles[1]=/* :: */[0,v,last_objfiles[1]],0;}
                      else
                       {return first_objfiles[1]=/* :: */[0,v,first_objfiles[1]],0;
                        }
                      }
                    else
                     {return 0;}
                    
                   case 13:
                    if(Clflags["native_code"][1])
                     {if(position!==0)
                       {return last_objfiles[1]=/* :: */[0,v,last_objfiles[1]],0;}
                      else
                       {return first_objfiles[1]=/* :: */[0,v,first_objfiles[1]],0;
                        }
                      }
                    else
                     {return 0;}
                    
                   }
                 },
               position!==0?match[2]:match[1]);
      }
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* () */0;}
      else
       {throw exn$1;}
      }
    };

var
 readenv=
  function(ppf,position)
   {last_include_dirs[1]=/* [] */0;
    last_ccopts[1]=/* [] */0;
    last_ppx[1]=/* [] */0;
    last_objfiles[1]=/* [] */0;
    read_OCAMLPARAM(ppf,position);
    Clflags["all_ccopts"][1]=Pervasives["@"](last_ccopts[1],first_ccopts[1]);
    return Clflags["all_ppx"][1]=Pervasives["@"](last_ppx[1],first_ppx[1]),0;
    };

var
 get_objfiles=
  function(param)
   {return List["rev"]
            (Pervasives["@"]
              (last_objfiles[1],
               Pervasives["@"](Clflags["objfiles"][1],first_objfiles[1])));
    };

module["exports"]=
{"module_of_filename":module_of_filename,
 "output_prefix":output_prefix,
 "extract_output":extract_output,
 "default_output":default_output,
 "print_version_and_library":print_version_and_library,
 "print_version_string":print_version_string,
 "print_standard_library":print_standard_library,
 "fatal":fatal,
 "first_ccopts":first_ccopts,
 "first_ppx":first_ppx,
 "first_include_dirs":first_include_dirs,
 "last_include_dirs":last_include_dirs,
 "implicit_modules":implicit_modules,
 "get_objfiles":get_objfiles,
 "readenv":readenv,
 "is_unit_name":is_unit_name,
 "check_unit_name":check_unit_name};

