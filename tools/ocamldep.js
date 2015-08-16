// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Parse=require("./parse.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Arg=require("./arg.js");
var Clflags=require("./clflags.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Filename=require("./filename.js");
var Depend=require("./depend.js");
var Compenv=require("./compenv.js");
var Location=require("./location.js");
var Hashtbl=require("./hashtbl.js");
var Pparse=require("./pparse.js");
var Map=require("./map.js");
var Config=require("./config.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var ppf=Format["err_formatter"];

var load_path=[0,/* [] */0];

var ml_synonyms=[0,[/* :: */0,".ml",/* [] */0]];

var mli_synonyms=[0,[/* :: */0,".mli",/* [] */0]];

var native_only=[0,/* false */0];

var error_occurred=[0,/* false */0];

var raw_dependencies=[0,/* false */0];

var sort_files=[0,/* false */0];

var all_dependencies=[0,/* false */0];

var one_line=[0,/* false */0];

var files=[0,/* [] */0];

var
 fix_slash=
  function(s)
   {if(CamlPrimitive["caml_string_equal"](Sys["os_type"],"Unix"))
     {return s;}
    else
     {return $$String["map"]
              (function(c){if(c!==92){return c;}else{return 47;}},s);
      }
    };

var $$let=$$String;

var StringMap=Map["Make"]([0,$$let[25]]);

var dirs=[0,StringMap[1]];

var
 readdir=
  function(dir)
   {try
     {return StringMap[22](dir,dirs[1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {try
         {var contents=CamlPrimitive["caml_sys_read_directory"](dir);}
        catch(exn$1)
         {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
           {Format["fprintf"]
             (Format["err_formatter"],
              [/* Format */0,
               [/* Formatting_gen */18,
                [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                [/* String_literal */11,
                 "Bad -I option: ",
                 [/* String */2,
                  /* No_padding */0,
                  [/* Formatting_lit */17,
                   /* Close_box */0,
                   [/* Formatting_lit */17,
                    /* Flush_newline */4,
                    /* End_of_format */0]]]]],
               "@[Bad -I option: %s@]@."],
              exn$1[2]);
            error_occurred[1]=/* true */1;
            var contents=[/* array */0];
            }
          else
           {throw exn$1;}
          }
        
        dirs[1]=StringMap[4](dir,contents,dirs[1]);
        return contents;
        }
      else
       {throw exn;}
      }
    };

var add_to_list=function(li,s){return li[1]=/* :: */[0,s,li[1]],0;};

var
 add_to_load_path=
  function(dir)
   {try
     {var dir$1=Misc["expand_directory"](Config["standard_library"],dir);
      
      var contents=readdir(dir$1);
      
      return add_to_list(load_path,/* tuple */[0,dir$1,contents]);
      }
    catch(exn)
     {if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {Format["fprintf"]
         (Format["err_formatter"],
          [/* Format */0,
           [/* Formatting_gen */18,
            [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
            [/* String_literal */11,
             "Bad -I option: ",
             [/* String */2,
              /* No_padding */0,
              [/* Formatting_lit */17,
               /* Close_box */0,
               [/* Formatting_lit */17,
                /* Flush_newline */4,
                /* End_of_format */0]]]]],
           "@[Bad -I option: %s@]@."],
          exn[2]);
        return error_occurred[1]=/* true */1,0;
        }
      else
       {throw exn;}
      }
    };

var
 add_to_synonym_list=
  function(synonyms,suffix)
   {if(suffix["length"]>1&&suffix[0]===46)
     {return add_to_list(synonyms,suffix);}
    else
     {Format["fprintf"]
       (Format["err_formatter"],
        [/* Format */0,
         [/* Formatting_gen */18,
          [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
          [/* String_literal */11,
           "Bad suffix: '",
           [/* String */2,
            /* No_padding */0,
            [/* Char_literal */12,
             39,
             [/* Formatting_lit */17,
              /* Close_box */0,
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]]]]]],
         "@[Bad suffix: '%s'@]@."],
        suffix);
      return error_occurred[1]=/* true */1,0;
      }
    };

var
 find_file=
  function(name)
   {var uname=$$String["uncapitalize"](name);
    
    var
     find_in_array=
      function(a,pos)
       {if(pos>=/* -1 for tag */a["length"]-1)
         {return /* None */0;}
        else
         {var s=a[pos+1];
          
          if
           (CamlPrimitive["caml_string_equal"](s,name)||
            CamlPrimitive["caml_string_equal"](s,uname))
           {return /* Some */[0,s];}
          else
           {return find_in_array(a,pos+1);}
          }
        };
    
    var
     find_in_path=
      function(param)
       {if(param)
         {var match=param[1];
          
          var dir=match[1];
          
          var match$1=find_in_array(match[2],0);
          
          if(match$1)
           {var truename=match$1[1];
            
            if(CamlPrimitive["caml_string_equal"](dir,"."))
             {return truename;}
            else
             {return Filename["concat"](dir,truename);}
            }
          else
           {return find_in_path(param[2]);}
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    return find_in_path(load_path[1]);
    };

var
 find_file_in_list=
  function(param)
   {if(param)
     {try
       {return find_file(param[1]);}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return find_file_in_list(param[2]);}
        else
         {throw exn;}
        }
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 find_dependency=
  function(target_kind,modname,param)
   {var opt_deps=param[2];
    
    var byt_deps=param[1];
    
    try
     {var candidates=List["map"](Pervasives["^"](modname),mli_synonyms[1]);
      
      var filename=find_file_in_list(candidates);
      
      var basename=Filename["chop_extension"](filename);
      
      var cmi_file=Pervasives["^"](basename,".cmi");
      
      var
       ml_exists=
        List["exists"]
         (function(ext)
           {return CamlPrimitive["caml_sys_file_exists"]
                    (Pervasives["^"](basename,ext));
            },
          ml_synonyms[1]);
      
      if(all_dependencies[1])
       {if(target_kind!==0)
         {var new_opt_dep=/* :: */[0,cmi_file,/* [] */0];}
        else
         {var
           new_opt_dep=
            /* :: */[0,
             cmi_file,
             ml_exists
              ?/* :: */[0,Pervasives["^"](basename,".cmx"),/* [] */0]
              :/* [] */0];
          }
        }
      else
       {if(ml_exists)
         {var
           new_opt_dep=
            /* :: */[0,Pervasives["^"](basename,".cmx"),/* [] */0];
          }
        else
         {var new_opt_dep=/* :: */[0,cmi_file,/* [] */0];}
        }
      
      return /* tuple */[0,
              /* :: */[0,cmi_file,byt_deps],
              Pervasives["@"](new_opt_dep,opt_deps)];
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {try
         {var
           candidates$1=
            List["map"](Pervasives["^"](modname),ml_synonyms[1]);
          
          var filename$1=find_file_in_list(candidates$1);
          
          var basename$1=Filename["chop_extension"](filename$1);
          
          if(all_dependencies[1])
           {if(target_kind!==0)
             {var
               bytenames=
                /* :: */[0,Pervasives["^"](basename$1,".cmi"),/* [] */0];
              }
            else
             {var
               bytenames=
                /* :: */[0,Pervasives["^"](basename$1,".cmi"),/* [] */0];
              }
            }
          else
           {var
             bytenames=
              /* :: */[0,
               Pervasives["^"](basename$1,native_only[1]?".cmx":".cmo"),
               /* [] */0];
            }
          
          if(all_dependencies[1])
           {if(target_kind!==0)
             {var
               optnames=
                /* :: */[0,Pervasives["^"](basename$1,".cmi"),/* [] */0];
              }
            else
             {var
               optnames=
                /* :: */[0,
                 Pervasives["^"](basename$1,".cmi"),
                 /* :: */[0,Pervasives["^"](basename$1,".cmx"),/* [] */0]];
              }
            }
          else
           {var
             optnames=
              /* :: */[0,Pervasives["^"](basename$1,".cmx"),/* [] */0];
            }
          
          return /* tuple */[0,
                  Pervasives["@"](bytenames,byt_deps),
                  Pervasives["@"](optnames,opt_deps)];
          }
        catch(exn$1)
         {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
           {return /* tuple */[0,byt_deps,opt_deps];}
          else
           {throw exn$1;}
          }
        }
      else
       {throw exn;}
      }
    };

var match=[/* tuple */0,":"," \\n    "];

var escaped_eol=match[2];

var depends_on=match[1];

var
 print_filename=
  function(s)
   {if(Clflags["force_slash"][1]){var s$1=fix_slash(s);}else{var s$1=s;}
    
    if(!$$String["contains"](s$1,32))
     {return Pervasives["print_string"](s$1);}
    else
     {var
       count=
        function(n,i)
         {if(i>=s$1["length"])
           {return n;}
          else
           {if(s$1[i]===32){return count(n+1,i+1);}else{return count(n,i+1);}}
          };
      
      var spaces=count(0,0);
      
      var result=CamlPrimitive["caml_create_string"](s$1["length"]+spaces);
      
      var
       loop=
        function(i,j)
         {if(i>=s$1["length"])
           {return /* () */0;}
          else
           {if(s$1[i]===32)
             {result[j]=92;result[j+1]=32;return loop(i+1,j+2);}
            else
             {result[j]=s$1[i];return loop(i+1,j+1);}
            }
          };
      
      loop(0,0);
      return Pervasives["print_bytes"](result);
      }
    };

var
 print_dependencies=
  function(target_files,deps)
   {var
     print_items=
      function(pos,param)
       {if(param)
         {var rem=param[2];
          
          var dep=param[1];
          
          if(one_line[1]||pos+1+dep["length"]<=77)
           {if(pos!==0){Pervasives["print_string"](" ")}else{}
            
            print_filename(dep);
            return print_items(pos+dep["length"]+1,rem);
            }
          else
           {Pervasives["print_string"](escaped_eol);
            print_filename(dep);
            return print_items(dep["length"]+4,rem);
            }
          }
        else
         {return Pervasives["print_string"]("\n");}
        };
    
    return print_items
            (0,
             Pervasives["@"]
              (target_files,
               Pervasives["@"](/* :: */[0,depends_on,/* [] */0],deps)));
    };

var
 print_raw_dependencies=
  function(source_file,deps)
   {print_filename(source_file);
    Pervasives["print_string"](depends_on);
    Depend["StringSet"][13]
     (function(dep)
       {var match$1=dep[0];
        
        if(dep["length"]>0&&(25<-65+match$1>>>0?/* false */0:/* true */1))
         {Pervasives["print_char"](32);
          return Pervasives["print_string"](dep);
          }
        else
         {return 0;}
        },
      deps);
    return Pervasives["print_char"](10);
    };

var
 report_err=
  function(exn)
   {error_occurred[1]=/* true */1;
    if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
     {return Format["fprintf"]
              (Format["err_formatter"],
               [/* Format */0,
                [/* Formatting_gen */18,
                 [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                 [/* String_literal */11,
                  "I/O error:",
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* String */2,
                    /* No_padding */0,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]]]],
                "@[I/O error:@ %s@]@."],
               exn[2]);
      }
    else
     {var match$1=Location["error_of_exn"](exn);
      
      if(match$1)
       {return Format["fprintf"]
                (Format["err_formatter"],
                 [/* Format */0,
                  [/* Formatting_gen */18,
                   [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]],
                  "@[%a@]@."],
                 Location["report_error"],
                 match$1[1]);
        }
      else
       {throw exn;}
      }
    };

var tool_name="ocamldep";

var
 read_parse_and_extract=
  function(parse_function,extract_function,magic,source_file)
   {Depend["free_structure_names"][1]=Depend["StringSet"][1];
    try
     {var input_file=Pparse["preprocess"](source_file);
      
      try
       {var
         ast=
          Pparse["file"]
           (Format["err_formatter"],tool_name,input_file,parse_function,magic);
        
        var bound_vars=Depend["StringSet"][1];
        
        List["iter"]
         (function(modname)
           {return Depend["open_module"](bound_vars,/* Lident */[0,modname]);},
          Clflags["open_modules"][1]);
        extract_function(bound_vars,ast);
        Pparse["remove_preprocessed"](input_file);
        return Depend["free_structure_names"][1];
        }
      catch(x){Pparse["remove_preprocessed"](input_file);throw x;}
      }
    catch(x$1){report_err(x$1);return Depend["StringSet"][1];}
    };

var
 ml_file_dependencies=
  function(source_file)
   {var
     parse_use_file_as_impl=
      function(lexbuf)
       {var
         f=
          function(x)
           {switch(x[0]){case 0:return x[1];case 1:return /* [] */0;}};
        
        return List["flatten"](List["map"](f,Parse["use_file"](lexbuf)));
        };
    
    var
     extracted_deps=
      read_parse_and_extract
       (parse_use_file_as_impl,
        Depend["add_implementation"],
        Config["ast_impl_magic_number"],
        source_file);
    
    if(sort_files[1])
     {return files[1]=
             /* :: */[0,
              /* tuple */[0,
               source_file,
               /* ML */0,
               Depend["free_structure_names"][1]],
              files[1]],
             0;
      }
    else
     {if(raw_dependencies[1])
       {return print_raw_dependencies(source_file,extracted_deps);}
      else
       {var basename=Filename["chop_extension"](source_file);
        
        var
         byte_targets=
          /* :: */[0,Pervasives["^"](basename,".cmo"),/* [] */0];
        
        if(all_dependencies[1])
         {var
           native_targets=
            /* :: */[0,
             Pervasives["^"](basename,".cmx"),
             /* :: */[0,Pervasives["^"](basename,".o"),/* [] */0]];
          }
        else
         {var
           native_targets=
            /* :: */[0,Pervasives["^"](basename,".cmx"),/* [] */0];
          }
        
        if(all_dependencies[1])
         {var init_deps=/* :: */[0,source_file,/* [] */0];}
        else
         {var init_deps=/* [] */0;}
        
        var cmi_name=Pervasives["^"](basename,".cmi");
        
        if
         (List["exists"]
           (function(ext)
             {return CamlPrimitive["caml_sys_file_exists"]
                      (Pervasives["^"](basename,ext));
              },
            mli_synonyms[1]))
         {var
           match$1=
            /* tuple */[0,
             /* tuple */[0,
              /* :: */[0,cmi_name,init_deps],
              /* :: */[0,cmi_name,init_deps]],
             /* [] */0];
          }
        else
         {var
           match$1=
            /* tuple */[0,
             /* tuple */[0,init_deps,init_deps],
             all_dependencies[1]?/* :: */[0,cmi_name,/* [] */0]:/* [] */0];
          }
        
        var extra_targets=match$1[2];
        
        var
         match$2=
          Depend["StringSet"][14]
           (find_dependency(/* ML */0),extracted_deps,match$1[1]);
        
        print_dependencies
         (Pervasives["@"](byte_targets,extra_targets),match$2[1]);
        return print_dependencies
                (Pervasives["@"](native_targets,extra_targets),match$2[2]);
        }
      }
    };

var
 mli_file_dependencies=
  function(source_file)
   {var
     extracted_deps=
      read_parse_and_extract
       (Parse["interface"],
        Depend["add_signature"],
        Config["ast_intf_magic_number"],
        source_file);
    
    if(sort_files[1])
     {return files[1]=
             /* :: */[0,
              /* tuple */[0,source_file,/* MLI */1,extracted_deps],
              files[1]],
             0;
      }
    else
     {if(raw_dependencies[1])
       {return print_raw_dependencies(source_file,extracted_deps);}
      else
       {var basename=Filename["chop_extension"](source_file);
        
        var
         match$1=
          Depend["StringSet"][14]
           (find_dependency(/* MLI */1),
            extracted_deps,
            [/* tuple */0,/* [] */0,/* [] */0]);
        
        return print_dependencies
                (/* :: */[0,Pervasives["^"](basename,".cmi"),/* [] */0],
                 match$1[1]);
        }
      }
    };

var
 file_dependencies_as=
  function(kind,source_file)
   {Compenv["readenv"](ppf,/* Before_compile */1);
    load_path[1]=/* [] */0;
    List["iter"]
     (add_to_load_path,
      Pervasives["@"]
       (Compenv["last_include_dirs"][1],
        Pervasives["@"]
         (Clflags["include_dirs"][1],Compenv["first_include_dirs"][1])));
    Location["input_name"][1]=source_file;
    try
     {if(CamlPrimitive["caml_sys_file_exists"](source_file))
       {if(kind!==0)
         {return mli_file_dependencies(source_file);}
        else
         {return ml_file_dependencies(source_file);}
        }
      else
       {return 0;}
      }
    catch(x){return report_err(x);}
    };

var
 file_dependencies=
  function(source_file)
   {if(List["exists"](Filename["check_suffix"](source_file),ml_synonyms[1]))
     {return file_dependencies_as(/* ML */0,source_file);}
    else
     {if
       (List["exists"](Filename["check_suffix"](source_file),mli_synonyms[1]))
       {return file_dependencies_as(/* MLI */1,source_file);}
      else
       {return /* () */0;}
      }
    };

var
 sort_files_by_dependencies=
  function(files)
   {var h=Hashtbl["create"](/* None */0,31);
    
    var worklist=[0,/* [] */0];
    
    var
     files$1=
      List["map"]
       (function(param)
         {var file_kind=param[2];
          
          var file=param[1];
          
          var
           modname=
            $$String["capitalize"]
             (Filename["chop_extension"](Filename["basename"](file)));
          
          var key=/* tuple */[0,modname,file_kind];
          
          var new_deps=[0,/* [] */0];
          
          Hashtbl["add"](h,key,/* tuple */[0,file,new_deps]);
          worklist[1]=/* :: */[0,key,worklist[1]];
          return /* tuple */[0,modname,file_kind,param[3],new_deps];
          },
        files);
    
    List["iter"]
     (function(param)
       {var new_deps=param[4];
        
        var file_kind=param[2];
        
        var modname=param[1];
        
        var
         add_dep=
          function(modname,kind)
           {return new_deps[1]=
                   /* :: */[0,/* tuple */[0,modname,kind],new_deps[1]],
                   0;
            };
        
        Depend["StringSet"][13]
         (function(modname)
           {if(file_kind!==0)
             {if(Hashtbl["mem"](h,/* tuple */[0,modname,/* MLI */1]))
               {return add_dep(modname,/* MLI */1);}
              else
               {if(Hashtbl["mem"](h,/* tuple */[0,modname,/* ML */0]))
                 {return add_dep(modname,/* ML */0);}
                else
                 {return 0;}
                }
              }
            else
             {if(Hashtbl["mem"](h,/* tuple */[0,modname,/* MLI */1]))
               {add_dep(modname,/* MLI */1)}
              else
               {}
              
              if(Hashtbl["mem"](h,/* tuple */[0,modname,/* ML */0]))
               {return add_dep(modname,/* ML */0);}
              else
               {return 0;}
              }
            },
          param[3]);
        if(file_kind===/* ML */0)
         {if(Hashtbl["mem"](h,/* tuple */[0,modname,/* MLI */1]))
           {return add_dep(modname,/* MLI */1);}
          else
           {return 0;}
          }
        else
         {return 0;}
        },
      files$1);
    var printed=[0,/* true */1];
    
    while(printed[1]&&worklist[1]!==/* [] */0)
     {var files$2=worklist[1];
      
      worklist[1]=
      /* [] */0,
      printed[1]=
      /* false */0,
      List["iter"]
       (function(key)
         {var match$1=Hashtbl["find"](h,key);
          
          var deps=match$1[2];
          
          var set=deps[1];
          
          deps[1]=/* [] */0;
          List["iter"]
           (function(key)
             {if(Hashtbl["mem"](h,key))
               {return deps[1]=/* :: */[0,key,deps[1]],0;}
              else
               {return 0;}
              },
            set);
          if(deps[1]===/* [] */0)
           {printed[1]=/* true */1;
            Printf["printf"]
             ([/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,32,/* End_of_format */0]],
               "%s "],
              match$1[1]);
            return Hashtbl["remove"](h,key);
            }
          else
           {return worklist[1]=/* :: */[0,key,worklist[1]],0;}
          },
        files$2)}
    
    if(worklist[1]!==/* [] */0)
     {Format["fprintf"]
       (Format["err_formatter"],
        [/* Format */0,
         [/* Formatting_gen */18,
          [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
          [/* String_literal */11,
           "Warning: cycle in dependencies. End of list is not sorted.",
           [/* Formatting_lit */17,
            /* Close_box */0,
            [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]]],
         "@[Warning: cycle in dependencies. End of list is not sorted.@]@."]),
      Hashtbl["iter"]
       (function(param,param$1)
         {var file=param$1[1];
          
          Format["fprintf"]
           (Format["err_formatter"],
            [/* Format */0,
             [/* Char_literal */12,
              9,
              [/* Formatting_gen */18,
               [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,": ",/* End_of_format */0]]]],
             "\t@[%s: "],
            file);
          List["iter"]
           (function(param$2)
             {return Format["fprintf"]
                      (Format["err_formatter"],
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          46,
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,32,/* End_of_format */0]]]],
                        "%s.%s "],
                       param$2[1],
                       param$2[2]===/* ML */0?"ml":"mli");
              },
            param$1[2][1]);
          Format["fprintf"]
           (Format["err_formatter"],
            [/* Format */0,
             [/* Formatting_lit */17,
              /* Close_box */0,
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0]],
             "@]@."]);
          return Printf["printf"]
                  ([/* Format */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,32,/* End_of_format */0]],
                    "%s "],
                   file);
          },
        h)}
    else
     {}
    
    Printf["printf"]
     ([/* Format */0,
       [/* Char_literal */12,10,[/* Flush */10,/* End_of_format */0]],
       "\n%!"]);
    return /* () */0;
    };

var usage="Usage: ocamldep [options] <source files>\nOptions are:";

var
 print_version=
  function(param)
   {Format["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "ocamldep, version ",
        [/* String */2,
         /* No_padding */0,
         [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]],
       "ocamldep, version %s@."],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Format["printf"]
     ([/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
       "%s@."],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

Clflags["classic"][1]=/* false */0;
add_to_list(Compenv["first_include_dirs"],Filename["current_dir_name"]);
Compenv["readenv"](ppf,/* Before_args */0);
Arg["parse"]
 (/* :: */[0,
   /* tuple */[0,
    "-absname",
    /* Set */[2,Location["absname"]],
    " Show absolute filenames in error messages"],
   /* :: */[0,
    /* tuple */[0,
     "-all",
     /* Set */[2,all_dependencies],
     " Generate dependencies on all files"],
    /* :: */[0,
     /* tuple */[0,
      "-I",
      /* String */[4,add_to_list(Clflags["include_dirs"])],
      "<dir>  Add <dir> to the list of include directories"],
     /* :: */[0,
      /* tuple */[0,
       "-impl",
       /* String */[4,file_dependencies_as(/* ML */0)],
       "<f>  Process <f> as a .ml file"],
      /* :: */[0,
       /* tuple */[0,
        "-intf",
        /* String */[4,file_dependencies_as(/* MLI */1)],
        "<f>  Process <f> as a .mli file"],
       /* :: */[0,
        /* tuple */[0,
         "-ml-synonym",
         /* String */[4,add_to_synonym_list(ml_synonyms)],
         "<e>  Consider <e> as a synonym of the .ml extension"],
        /* :: */[0,
         /* tuple */[0,
          "-mli-synonym",
          /* String */[4,add_to_synonym_list(mli_synonyms)],
          "<e>  Consider <e> as a synonym of the .mli extension"],
         /* :: */[0,
          /* tuple */[0,
           "-modules",
           /* Set */[2,raw_dependencies],
           " Print module dependencies in raw form (not suitable for make)"],
          /* :: */[0,
           /* tuple */[0,
            "-native",
            /* Set */[2,native_only],
            " Generate dependencies for native-code only (no .cmo files)"],
           /* :: */[0,
            /* tuple */[0,
             "-one-line",
             /* Set */[2,one_line],
             " Output one line per file, regardless of the length"],
            /* :: */[0,
             /* tuple */[0,
              "-open",
              /* String */[4,add_to_list(Clflags["open_modules"])],
              "<module>  Opens the module <module> before typing"],
             /* :: */[0,
              /* tuple */[0,
               "-pp",
               /* String */[4,
                function(s)
                 {return Clflags["preprocessor"][1]=/* Some */[0,s],0;}],
               "<cmd>  Pipe sources through preprocessor <cmd>"],
              /* :: */[0,
               /* tuple */[0,
                "-ppx",
                /* String */[4,add_to_list(Compenv["first_ppx"])],
                "<cmd>  Pipe abstract syntax trees through preprocessor <cmd>"],
               /* :: */[0,
                /* tuple */[0,
                 "-slash",
                 /* Set */[2,Clflags["force_slash"]],
                 " (Windows) Use forward slash / instead of backslash \ in file paths"],
                /* :: */[0,
                 /* tuple */[0,
                  "-sort",
                  /* Set */[2,sort_files],
                  " Sort files according to their dependencies"],
                 /* :: */[0,
                  /* tuple */[0,
                   "-version",
                   /* Unit */[0,print_version],
                   " Print version and exit"],
                  /* :: */[0,
                   /* tuple */[0,
                    "-vnum",
                    /* Unit */[0,print_version_num],
                    " Print version number and exit"],
                   /* [] */0]]]]]]]]]]]]]]]]],
  file_dependencies,
  usage);
Compenv["readenv"](ppf,/* Before_link */2);
if(sort_files[1]){sort_files_by_dependencies(files[1])}else{}

Pervasives["exit"](error_occurred[1]?2:0);
module["exports"]=
{"ppf":ppf,
 "load_path":load_path,
 "ml_synonyms":ml_synonyms,
 "mli_synonyms":mli_synonyms,
 "native_only":native_only,
 "error_occurred":error_occurred,
 "raw_dependencies":raw_dependencies,
 "sort_files":sort_files,
 "all_dependencies":all_dependencies,
 "one_line":one_line,
 "files":files,
 "fix_slash":fix_slash,
 "StringMap":StringMap,
 "dirs":dirs,
 "readdir":readdir,
 "add_to_list":add_to_list,
 "add_to_load_path":add_to_load_path,
 "add_to_synonym_list":add_to_synonym_list,
 "find_file":find_file,
 "find_file_in_list":find_file_in_list,
 "find_dependency":find_dependency,
 "depends_on":depends_on,
 "escaped_eol":escaped_eol,
 "print_filename":print_filename,
 "print_dependencies":print_dependencies,
 "print_raw_dependencies":print_raw_dependencies,
 "report_err":report_err,
 "tool_name":tool_name,
 "read_parse_and_extract":read_parse_and_extract,
 "ml_file_dependencies":ml_file_dependencies,
 "mli_file_dependencies":mli_file_dependencies,
 "file_dependencies_as":file_dependencies_as,
 "file_dependencies":file_dependencies,
 "sort_files_by_dependencies":sort_files_by_dependencies,
 "usage":usage,
 "print_version":print_version,
 "print_version_num":print_version_num};

