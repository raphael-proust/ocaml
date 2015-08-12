// Generated CODE, PLEASE EDIT WITH CARE 

var Const=require("Const");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Format=require("Format");
var Param_tags=require("Param_tags");
var Shell=require("Shell");
var Filename=require("Filename");
var Lexing=require("Lexing");
var Buffer=require("Buffer");
var My_std=require("My_std");
var Tags=require("Tags");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var Sys=require("Sys");


var jobs=[0,1];

var
 no_tag_handler=
  function(param){return Pervasives["failwith"]("no_tag_handler");};

var tag_handler=[0,no_tag_handler];

var
 atomize=
  function(l)
   {return /* S */[0,My_std["List"][16](function(x){return /* A */[1,x];},l)];
    };

var
 atomize_paths=
  function(l)
   {return /* S */[0,My_std["List"][16](function(x){return /* P */[2,x];},l)];
    };

var
 env_path=
  [246,
   function(param)
    {var path_var=Primtivie["caml_sys_getenv"]("PATH");
     
     if(Primtivie["caml_string_equal"](Sys["os_type"],"Win32"))
      {var parse_path=Lexers["parse_environment_path_w"];}
     else
      {var parse_path=Lexers["parse_environment_path"];}
     
     var paths=parse_path(Const["Source"][3],Lexing["from_string"](path_var));
     
     var
      norm_current_dir_name=
       function(path)
        {if(Primtivie["caml_string_equal"](path,""))
          {return Filename["current_dir_name"];}
         else
          {return path;}
         };
     
     return My_std["List"][16](norm_current_dir_name,paths);
     }];

var virtual_solvers=Hashtbl["create"](/* None */0,32);

var
 setup_virtual_command_solver=
  function(virtual_command,solver)
   {return Hashtbl["replace"](virtual_solvers,virtual_command,solver);};

var
 virtual_solver=
  function(virtual_command)
   {try
     {var solver=Hashtbl["find"](virtual_solvers,virtual_command);}
    catch(exn)
     {if(exn=Not_found)
       {var
         solver=
          Pervasives["failwith"]
           (My_std["sbprintf"]
             ([/* Format */0,
               [/* String_literal */11,
                "no solver for the virtual command ",
                [/* Caml_string */3,
                 /* No_padding */0,
                 [/* String_literal */11,
                  " (setup one with Command.setup_virtual_command_solver)",
                  /* End_of_format */0]]],
               "no solver for the virtual command %S (setup one with Command.setup_virtual_command_solver)"],
              virtual_command));
        }
      else
       {throw exn;}
      }
    
    try
     {return solver(/* () */0);}
    catch(exn$1)
     {if(exn$1=Not_found)
       {return Pervasives["failwith"]
                (Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "the solver for the virtual command ",
                     [/* Caml_string */3,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " has failed finding a valid command",
                       /* End_of_format */0]]],
                    "the solver for the virtual command %S has failed finding a valid command"],
                   virtual_command));
        }
      else
       {throw exn$1;}
      }
    };

var
 file_or_exe_exists=
  function(file)
   {return My_std["sys_file_exists"](file)||
           (Sys["win32"]||Sys["cygwin"])&&
           My_std["sys_file_exists"](Pervasives["^"](file,".exe"));
    };

var
 search_in_path=
  function(cmd)
   {var
     try_path=
      function(path)
       {if(Primtivie["caml_string_equal"](path,Filename["current_dir_name"]))
         {return file_or_exe_exists(cmd);}
        else
         {return file_or_exe_exists(My_std["filename_concat"](path,cmd));}
        };
    
    if(Filename["is_implicit"](cmd))
     {var path=My_std["List"][32](try_path,My_std["!*"](env_path));
      
      return My_std["filename_concat"](path,cmd);
      }
    else
     {return cmd;}
    };

var
 string_of_command_spec_with_calls=
  function(call_with_tags,call_with_target,resolve_virtuals,spec)
   {var
     $$self=
      string_of_command_spec_with_calls
       (call_with_tags,call_with_target,resolve_virtuals);
    
    var b=Buffer["create"](256);
    
    if(Primtivie["caml_string_equal"](Sys["os_type"],"Win32"))
     {Buffer["add_string"](b,"''")}
    else
     {}
    
    var first=[0,/* true */1];
    
    var
     put_space=
      function(param)
       {if(first[1])
         {return first[1]=/* false */0,0;}
        else
         {return Buffer["add_char"](b,32);}
        };
    
    var
     put_filename=
      function(p)
       {return Buffer["add_string"](b,Shell["quote_filename_if_needed"](p));};
    
    var
     do_spec=
      function(param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){case 0:return /* () */0;}}
        else
         {switch(param[0])
           {case 0:return My_std["List"][14](do_spec,param[1]);
            case 1:exit=61;
            case 2:exit=61;
            case 3:
             var u=param[1];
             
             put_space(/* () */0);
             put_filename(u);
             return call_with_target(u);
             
            case 4:
             put_space(/* () */0);return Buffer["add_string"](b,param[1]);
            case 5:
             var tags=param[1];
             
             call_with_tags(tags);
             return do_spec(tag_handler[1](tags));
             
            case 6:
             var v=param[1];
             
             if(resolve_virtuals)
              {return do_spec(virtual_solver(v));}
             else
              {put_space(/* () */0);
               return Printf["bprintf"]
                       (b,
                        [/* Format */0,
                         [/* String_literal */11,
                          "<virtual ",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,62,/* End_of_format */0]]],
                         "<virtual %s>"],
                        Shell["quote_filename_if_needed"](v));
               }
             
            case 7:put_space(/* () */0);return put_filename($$self(param[1]));
            }}
        
        switch(exit)
         {case 61:put_space(/* () */0);return put_filename(param[1]);}
        };
    
    do_spec(spec);
    return Buffer["contents"](b);
    };

var
 string_of_command_spec=
  function(x)
   {return string_of_command_spec_with_calls
            (function(prim){return prim;},
             function(prim){return prim;},
             /* false */0,
             x);
    };

var
 string_target_and_tags_of_command_spec=
  function(spec)
   {var rtags=[0,Tags["empty"]];
    
    var rtarget=[0,""];
    
    var
     union_rtags=
      function(tags){return rtags[1]=Tags["union"](rtags[1],tags),0;};
    
    var
     s=
      string_of_command_spec_with_calls
       (union_rtags,
        function(prim,prim){return prim$1[1]=prim,0;}(rtarget),
        /* true */1,
        spec);
    
    if(Primtivie["caml_string_equal"](rtarget[1],""))
     {var target=s;}
    else
     {var target=rtarget[1];}
    
    return /* tuple */[0,s,target,rtags[1]];
    };

var
 string_print_of_command_spec=
  function(spec,quiet,pretend)
   {var match=string_target_and_tags_of_command_spec(spec);
    
    var tags=match[3];
    
    var target=match[2];
    
    var s=match[1];
    
    return function(param)
     {if(!quiet){Log["event"](/* Some */[0,pretend],s,target,tags)}else{}
      
      return s;
      };
    };

var
 print_escaped_string=
  function(f)
   {return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
              "%S"]);
    };

var
 print=
  function(f,param)
   {if(typeof param=="number")
     {switch(param){case 0:return Format["pp_print_string"](f,"nop");}}
    else
     {switch(param[0])
       {case 0:return My_std["List"][1](print,f,param[1]);
        case 1:
         return Format["pp_print_string"](f,string_of_command_spec(param[1]));
        case 2:
         return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "Echo(",
                     [/* Alpha */15,
                      [/* Char_literal */12,
                       44,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Char_literal */12,
                          41,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[<2>Echo(%a,@ %a)@]"],
                  My_std["List"][1](print_escaped_string),
                  param[1],
                  print_escaped_string,
                  param[2]);
         
        }}
    };

var
 to_string=
  function(x)
   {return My_std["sbprintf"]
            ([/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
             print,
             x);
    };

var xmin=[0,Pervasives["max_int"]];

var xmax=[0,0];

var xsum=[0,0];

var xsumall=[0,0];

var xcount=[0,0];

var xcountall=[0,0];

var
 add_parallel_stat=
  function(x)
   {if(x>0){xcountall[0]++,xsumall[1]=x+xsumall[1],0}else{}
    
    if(x>1)
     {xcount[0]++;
      xsum[1]=x+xsum[1],0;
      xmax[1]=Pervasives["max"](xmax[1],x),0;
      return xmin[1]=Pervasives["min"](xmin[1],x),0;
      }
    else
     {return 0;}
    };

var
 dump_parallel_stats=
  function(param)
   {if(jobs[1]!=1)
     {if(xcount[1]=0)
       {return Log["dprintf"]
                (1,
                 [/* Format */0,
                  [/* String_literal */11,
                   "# No parallelism done",
                   /* End_of_format */0],
                  "# No parallelism done"]);
        }
      else
       {var xaverage=xsumall[1]/xcountall[1];
        
        var xaveragepara=xsum[1]/xcount[1];
        
        return Log["dprintf"]
                (1,
                 [/* Format */0,
                  [/* String_literal */11,
                   "# Parallel statistics: { count(total): ",
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* Char_literal */12,
                     40,
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* String_literal */11,
                       "), max: ",
                       [/* Int */4,
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* String_literal */11,
                         ", min: ",
                         [/* Int */4,
                          /* Int_d */0,
                          /* No_padding */0,
                          /* No_precision */0,
                          [/* String_literal */11,
                           ", average(total): ",
                           [/* Float */8,
                            /* Float_f */0,
                            /* No_padding */0,
                            [/* Lit_precision */0,3],
                            [/* Char_literal */12,
                             40,
                             [/* Float */8,
                              /* Float_f */0,
                              /* No_padding */0,
                              [/* Lit_precision */0,3],
                              [/* String_literal */11,") }",/* End_of_format */0]]]]]]]]]]]]],
                  "# Parallel statistics: { count(total): %d(%d), max: %d, min: %d, average(total): %.3f(%.3f) }"],
                 xcount[1],
                 xcountall[1],
                 xmax[1],
                 xmin[1],
                 xaveragepara,
                 xaverage);
        }
      }
    else
     {return 0;}
    };

var match=/* tuple */[0,add_parallel_stat,dump_parallel_stats];

var dump_parallel_stats$1=match[2];

var add_parallel_stat$1=match[1];

var
 do_echo=
  function(texts,dest_path)
   {return My_std["with_output_file"]
            (/* None */0,
             dest_path,
             function(oc)
              {return My_std["List"][14]
                       (Pervasives["output_string"](oc),texts);
               });
    };

var echo=function(x,y,param){do_echo(x,y);return "";};

var Primitives=[0,do_echo,echo];

var
 list_rev_iter=
  function(f,param)
   {if(param)
     {list_rev_iter(f,param[2]);return f(param[1]);}
    else
     {return /* () */0;}
    };

var
 flatten_commands=
  function(quiet,pretend,cmd)
   {var
     loop=
      function(acc,param)
       {if(param)
         {var match$1=param[1];
          
          if(typeof match$1=="number")
           {switch(match$1){case 0:return loop(acc,param[2]);}}
          else
           {switch(match$1[0])
             {case 0:return loop(loop(acc,match$1[1]),param[2]);
              case 1:
               return loop
                       (/* :: */[0,
                         string_print_of_command_spec(match$1[1],quiet,pretend),
                         acc],
                        param[2]);
               
              case 2:
               return loop
                       (/* :: */[0,Primitives[2](match$1[1],match$1[2]),acc],
                        param[2]);
               
              }}
          }
        else
         {return acc;}
        };
    
    return My_std["List"][9](loop(/* [] */0,/* :: */[0,cmd,/* [] */0]));
    };

var
 execute_many=
  function($staropt$star,$staropt$star,cmds)
   {if($staropt$star$1)
     {var quiet=$staropt$star$1[1];}
    else
     {var quiet=/* false */0;}
    
    if($staropt$star)
     {var pretend=$staropt$star[1];}
    else
     {var pretend=/* false */0;}
    
    add_parallel_stat$1(My_std["List"][5](cmds));
    var
     degraded=
      My_std["!*"](My_unix["is_degraded"])||
      Primtivie["caml_string_equal"](Sys["os_type"],"Win32");
    
    var jobs$1=jobs[1];
    
    if(jobs$1<0){Pervasives["invalid_arg"]("jobs < 0")}else{}
    
    if(jobs$1=0)
     {var max_jobs=/* None */0;}
    else
     {var max_jobs=/* Some */[0,jobs$1];}
    
    var ticker=Log["update"];
    
    var display=Log["display"];
    
    if(cmds=/* [] */0)
     {return /* None */0;}
    else
     {var konts=My_std["List"][16](flatten_commands(quiet,pretend),cmds);
      
      if(pretend)
       {My_std["List"][14]
         (My_std["List"][14](function(f){return f(/* () */0);}),konts);
        return /* None */0;
        }
      else
       {My_std["reset_filesys_cache"](/* () */0);
        if(degraded)
         {var
           match$1=
            My_std["List"][19]
             (function(param,cmds)
               {var acc_exn=param[2];
                
                var acc_res=param[1];
                
                if(acc_exn)
                 {return /* tuple */[0,
                          /* :: */[0,/* false */0,acc_res],
                          acc_exn];
                  }
                else
                 {try
                   {My_std["List"][14]
                     (function(action)
                       {var cmd=action(/* () */0);
                        
                        var rc=My_std["sys_command"](cmd);
                        
                        if(rc!=0)
                         {if(!quiet)
                           {Log["eprintf"]
                             ([/* Format */0,
                               [/* String_literal */11,
                                "Exit code ",
                                [/* Int */4,
                                 /* Int_d */0,
                                 /* No_padding */0,
                                 /* No_precision */0,
                                 [/* String_literal */11,
                                  " while executing this command:",
                                  [/* Formatting_lit */17,
                                   /* Force_newline */3,
                                   [/* String */2,/* No_padding */0,/* End_of_format */0]]]]],
                               "Exit code %d while executing this command:@\n%s"],
                              rc,
                              cmd)}
                          else
                           {}
                          
                          throw [0,My_std["Exit_with_code"],rc];
                          }
                        else
                         {return 0;}
                        },
                      cmds);
                    return /* tuple */[0,
                            /* :: */[0,/* true */1,acc_res],
                            /* None */0];
                    }
                  catch(e)
                   {return /* tuple */[0,
                            /* :: */[0,/* false */0,acc_res],
                            /* Some */[0,e]];
                    }
                  }
                },
              [/* tuple */0,/* [] */0,/* None */0],
              konts);
          
          var opt_exn=match$1[2];
          
          if(opt_exn)
           {return /* Some */[0,
                    /* tuple */[0,My_std["List"][9](match$1[1]),opt_exn[1]]];
            }
          else
           {return /* None */0;}
          }
        else
         {return My_unix["execute_many"]
                  (max_jobs,
                   /* Some */[0,ticker],
                   /* None */0,
                   /* Some */[0,display],
                   konts);
          }
        }
      }
    };

var
 execute=
  function(quiet,pretend,cmd)
   {var match$1=execute_many(quiet,pretend,/* :: */[0,cmd,/* [] */0]);
    
    if(match$1){throw match$1[1][2];}else{return /* () */0;}
    };

var
 iter_tags=
  function(f,x)
   {var
     spec=
      function(x)
       {var exit;
        
        if(typeof x=="number")
         {switch(x){}}
        else
         {switch(x[0])
           {case 0:return My_std["List"][14](spec,x[1]);
            case 5:return f(x[1]);
            default:exit=19;}}
        
        switch(exit){case 19:return /* () */0;}
        };
    
    var
     cmd=
      function(x)
       {var exit;
        
        if(typeof x=="number")
         {switch(x){case 0:exit=18;}}
        else
         {switch(x[0])
           {case 0:return My_std["List"][14](cmd,x[1]);
            case 1:return spec(x[1]);
            case 2:exit=18;
            }}
        
        switch(exit){case 18:return /* () */0;}
        };
    
    return cmd(x);
    };

var
 fold_pathnames=
  function(f,x)
   {var
     spec=
      function(param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){}}
        else
         {switch(param[0])
           {case 0:return My_std["List"][20](spec,param[1]);
            case 2:exit=16;
            case 3:exit=16;
            default:exit=14;}}
        
        switch(exit)
         {case 16:return f(param[1]);
          case 14:return function(acc){return acc;};
          }
        };
    
    var
     cmd=
      function(param)
       {if(typeof param=="number")
         {switch(param){case 0:return function(acc){return acc;};}}
        else
         {switch(param[0])
           {case 0:return My_std["List"][20](cmd,param[1]);
            case 1:return spec(param[1]);
            case 2:return f(param[2]);
            }}
        };
    
    return cmd(x);
    };

var
 reduce=
  function(x)
   {var
     $$self=
      function(x,acc)
       {if(typeof x=="number")
         {switch(x){case 0:return acc;}}
        else
         {switch(x[0])
           {case 0:return My_std["List"][20]($$self,x[1],acc);
            case 5:return $$self(tag_handler[1](x[1]),acc);
            case 7:return /* :: */[0,/* Quote */[7,reduce(x[1])],acc];
            default:return /* :: */[0,x,acc];}}
        };
    
    var xs=$$self(x,/* [] */0);
    
    if(xs)
     {if(xs[2]){return /* S */[0,xs];}else{return xs[1];}}
    else
     {return /* N */0;}
    };

var list=My_std["List"][20];

var text=function(x,acc){return /* :: */[0,My_std["Digest"][1](x),acc];};

var
 cmd=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:return function(acc){return acc;};}}
    else
     {switch(param[0])
       {case 0:return list(cmd,param[1]);
        case 1:
         var spec=param[1];
         
         return function(acc)
          {return /* :: */[0,string_of_command_spec(spec),acc];};
         
        case 2:return list(text,/* :: */[0,param[2],param[1]]);
        }}
    };

var
 digest=
  function(x)
   {var xs=cmd(x,/* [] */0);
    
    var exit;
    
    if(xs){if(xs[2]){exit=8;}else{return xs[1];}}else{exit=8;}
    
    switch(exit)
     {case 8:
       return My_std["Digest"][1]
               (Pervasives["^"]
                 ("[",Pervasives["^"](My_std["String"][22](";",xs),"]")));
       
      }
    };

var all_deps_of_tags=[0,/* [] */0];

var
 cons=
  function(deps,acc)
   {return My_std["&"]
            (My_std["List"][9],
             My_std["List"][19]
              (function(acc,dep)
                {if(My_std["List"][30](dep,acc))
                  {return acc;}
                 else
                  {return /* :: */[0,dep,acc];}
                 },
               acc,
               deps));
    };

var
 deps_of_tags=
  function(tags)
   {return My_std["List"][19]
            (function(acc,param)
              {if(Tags["does_match"](tags,param[1]))
                {return cons(param[2],acc);}
               else
                {return acc;}
               },
             /* [] */0,
             all_deps_of_tags[1]);
    };

var
 set_deps_of_tags=
  function(tags,deps)
   {return all_deps_of_tags[1]=
           /* :: */[0,/* tuple */[0,tags,deps],all_deps_of_tags[1]],
           0;
    };

var
 dep=
  function(tags,deps){return set_deps_of_tags(Tags["of_list"](tags),deps);};

var
 pdep=
  function(tags,ptag,deps)
   {return Param_tags["declare"]
            (ptag,
             function(param)
              {return dep
                       (/* :: */[0,Param_tags["make"](ptag,param),tags],
                        deps(param));
               });
    };

var list_all_deps=function(param){return all_deps_of_tags[1];};

module["exports"]=
{"atomize":atomize,
 "atomize_paths":atomize_paths,
 "execute":execute,
 "execute_many":execute_many,
 "setup_virtual_command_solver":setup_virtual_command_solver,
 "search_in_path":search_in_path,
 "reduce":reduce,
 "print":print,
 "to_string":to_string,
 "string_of_command_spec":string_of_command_spec,
 "string_target_and_tags_of_command_spec":
 string_target_and_tags_of_command_spec,
 "iter_tags":iter_tags,
 "fold_pathnames":fold_pathnames,
 "digest":digest,
 "jobs":jobs,
 "tag_handler":tag_handler,
 "dump_parallel_stats":dump_parallel_stats$1,
 "deps_of_tags":deps_of_tags,
 "dep":dep,
 "pdep":pdep,
 "list_all_deps":list_all_deps,
 "file_or_exe_exists":file_or_exe_exists};

