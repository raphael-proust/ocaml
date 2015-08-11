// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Ocamlmklibconfig=require("Ocamlmklibconfig");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Filename=require("Filename");
var Bytes=require("Bytes");
var Sys=require("Sys");


var
 compiler_path=
  function(name)
   {if("unknown primitive:caml_string_equal")
     {return name;}
    else
     {return Filename["concat"](Ocamlmklibconfig["bindir"],name);}
    };

var bytecode_objs=[0,0];

var native_objs=[0,0];

var c_objs=[0,0];

var caml_libs=[0,0];

var caml_opts=[0,0];

var dynlink=[0,Ocamlmklibconfig["supports_shared_libraries"]];

var failsafe=[0,0];

var c_libs=[0,0];

var c_Lopts=[0,0];

var c_opts=[0,0];

var ld_opts=[0,0];

var ocamlc=[0,compiler_path("ocamlc")];

var ocamlc_opts=[0,0];

var ocamlopt=[0,compiler_path("ocamlopt")];

var ocamlopt_opts=[0,0];

var output=[0,"a"];

var output_c=[0,""];

var rpath=[0,0];

var debug=[0,0];

var verbose=[0,0];

var
 starts_with=
  function(s,pref)
   {return s["length"]>=pref["length"]&&"unknown primitive:caml_string_equal";
    };

var ends_with=Filename["check_suffix"];

var
 chop_prefix=
  function(s,pref)
   {return $$String["sub"](s,pref["length"],s["length"]-pref["length"]);};

var chop_suffix=Filename["chop_suffix"];

var Bad_argument="unknown primitive:caml_set_oo_id";

var
 print_version=
  function(param)
   {Printf["printf"]
     ([0,
       [11,"ocamlmklib, version ",[2,0,[12,10,0]]],
       "ocamlmklib, version %s\n"],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Printf["printf"]([0,[2,0,[12,10,0]],"%s\n"],Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 parse_arguments=
  function(argv)
   {var i=[0,1];
    
    var
     next_arg=
      function(param)
       {if(i[1]+1>=argv["length"])
         {throw [0,
                 Bad_argument,
                 Pervasives["^"]
                  ("Option ",
                   Pervasives["^"](argv[i[1]]," expects one argument"))];
          }
        else
         {}
        
        i[0]++;
        return argv[i[1]];
        };
    
    while(i[1]<argv["length"])
     {var s=argv[i[1]];
      
      if(ends_with(s,".cmo")||ends_with(s,".cma"))
       {bytecode_objs[1]=/* :: */[0,s,bytecode_objs[1]],0}
      else
       {if(ends_with(s,".cmx")||ends_with(s,".cmxa"))
         {native_objs[1]=/* :: */[0,s,native_objs[1]],0}
        else
         {if(ends_with(s,".ml")||ends_with(s,".mli"))
           {bytecode_objs[1]=
            /* :: */[0,s,bytecode_objs[1]],
            0,
            native_objs[1]=
            /* :: */[0,s,native_objs[1]],
            0}
          else
           {if
             (List["exists"]
               (ends_with(s),
                [0,".o",[0,".a",[0,".obj",[0,".lib",[0,".dll",0]]]]]))
             {c_objs[1]=/* :: */[0,s,c_objs[1]],0}
            else
             {if("unknown primitive:caml_string_equal")
               {caml_libs[1]=
                /* :: */[0,next_arg(0),/* :: */[0,"-cclib",caml_libs[1]]],
                0}
              else
               {if("unknown primitive:caml_string_equal")
                 {caml_opts[1]=
                  /* :: */[0,next_arg(0),/* :: */[0,"-ccopt",caml_opts[1]]],
                  0}
                else
                 {if("unknown primitive:caml_string_equal")
                   {dynlink[1]=0,0}
                  else
                   {if("unknown primitive:caml_string_equal")
                     {caml_opts[1]=
                      /* :: */[0,next_arg(0),/* :: */[0,"-I",caml_opts[1]]],
                      0}
                    else
                     {if("unknown primitive:caml_string_equal")
                       {failsafe[1]=1,0}
                      else
                       {if("unknown primitive:caml_string_equal")
                         {debug[1]=1,0}
                        else
                         {if
                           ("unknown primitive:caml_string_equal"||
                            "unknown primitive:caml_string_equal"||
                            "unknown primitive:caml_string_equal")
                           {throw [0,Bad_argument,""];}
                          else
                           {if("unknown primitive:caml_string_equal")
                             {ld_opts[1]=/* :: */[0,next_arg(0),ld_opts[1]],0}
                            else
                             {if("unknown primitive:caml_string_equal")
                               {caml_opts[1]=/* :: */[0,s,caml_opts[1]],0}
                              else
                               {if(starts_with(s,"-l"))
                                 {c_libs[1]=/* :: */[0,s,c_libs[1]],0}
                                else
                                 {if(starts_with(s,"-L"))
                                   {c_Lopts[1]=/* :: */[0,s,c_Lopts[1]],0;
                                    var l=chop_prefix(s,"-L");
                                    
                                    if(!Filename["is_relative"](l))
                                     {rpath[1]=/* :: */[0,l,rpath[1]],0}
                                    else
                                     {}
                                    }
                                  else
                                   {if("unknown primitive:caml_string_equal")
                                     {ocamlc_opts[1]=/* :: */[0,next_arg(0),ocamlc_opts[1]],0}
                                    else
                                     {if("unknown primitive:caml_string_equal")
                                       {ocamlc[1]=next_arg(0),0}
                                      else
                                       {if("unknown primitive:caml_string_equal")
                                         {ocamlopt[1]=next_arg(0),0}
                                        else
                                         {if("unknown primitive:caml_string_equal")
                                           {ocamlopt_opts[1]=/* :: */[0,next_arg(0),ocamlopt_opts[1]],0}
                                          else
                                           {if("unknown primitive:caml_string_equal")
                                             {output[1]=next_arg(0),0}
                                            else
                                             {if("unknown primitive:caml_string_equal")
                                               {output_c[1]=next_arg(0),0}
                                              else
                                               {if
                                                 ("unknown primitive:caml_string_equal"||
                                                  "unknown primitive:caml_string_equal"||
                                                  "unknown primitive:caml_string_equal")
                                                 {rpath[1]=/* :: */[0,next_arg(0),rpath[1]],0}
                                                else
                                                 {if(starts_with(s,"-R"))
                                                   {rpath[1]=/* :: */[0,chop_prefix(s,"-R"),rpath[1]],0}
                                                  else
                                                   {if("unknown primitive:caml_string_equal")
                                                     {var a=next_arg(0);
                                                      
                                                      if(starts_with(a,"-Wl,"))
                                                       {rpath[1]=/* :: */[0,chop_prefix(a,"-Wl,"),rpath[1]],0}
                                                      else
                                                       {throw [0,
                                                               Bad_argument,
                                                               "Option -Wl,-rpath expects a -Wl, argument"];
                                                        }
                                                      }
                                                    else
                                                     {if(starts_with(s,"-Wl,-rpath,"))
                                                       {rpath[1]=
                                                        /* :: */[0,chop_prefix(s,"-Wl,-rpath,"),rpath[1]],
                                                        0}
                                                      else
                                                       {if(starts_with(s,"-Wl,-R"))
                                                         {rpath[1]=/* :: */[0,chop_prefix(s,"-Wl,-R"),rpath[1]],0}
                                                        else
                                                         {if
                                                           ("unknown primitive:caml_string_equal"||
                                                            "unknown primitive:caml_string_equal")
                                                           {verbose[1]=1,0}
                                                          else
                                                           {if("unknown primitive:caml_string_equal")
                                                             {print_version(0)}
                                                            else
                                                             {if("unknown primitive:caml_string_equal")
                                                               {print_version_num(0)}
                                                              else
                                                               {if(starts_with(s,"-F"))
                                                                 {c_opts[1]=/* :: */[0,s,c_opts[1]],0}
                                                                else
                                                                 {if("unknown primitive:caml_string_equal")
                                                                   {var a$1=next_arg(0);
                                                                    
                                                                    c_opts[1]=/* :: */[0,a$1,/* :: */[0,s,c_opts[1]]],0}
                                                                  else
                                                                   {if(starts_with(s,"-"))
                                                                     {Pervasives["prerr_endline"]
                                                                       (Pervasives["^"]("Unknown option ",s))}
                                                                    else
                                                                     {throw [0,
                                                                             Bad_argument,
                                                                             Pervasives["^"]("Don't know what to do with ",s)];
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      
      i[0]++}
    
    List["iter"]
     (function(r){return r[1]=List["rev"](r[1]),0;},
      /* :: */[0,
       bytecode_objs,
       /* :: */[0,
        native_objs,
        /* :: */[0,
         caml_libs,
         /* :: */[0,
          caml_opts,
          /* :: */[0,
           c_libs,
           /* :: */[0,
            c_objs,
            /* :: */[0,c_opts,/* :: */[0,ld_opts,/* :: */[0,rpath,0]]]]]]]]]);
    c_libs[1]=Pervasives["@"](c_Lopts[1],c_libs[1]),0;
    if("unknown primitive:caml_string_equal")
     {return output_c[1]=output[1],0;}
    else
     {return 0;}
    };

var
 usage=
  'Usage: ocamlmklib [options] <.cmo|.cma|.cmx|.cmxa|.ml|.mli|.o|.a|.obj|.lib|.dll files>\nOptions are:\n  -cclib <lib>   C library passed to ocamlc -a or ocamlopt -a only\n  -ccopt <opt>   C option passed to ocamlc -a or ocamlopt -a only\n  -custom        Disable dynamic loading\n  -g             Build with debug information\n  -dllpath <dir> Add <dir> to the run-time search path for DLLs\n  -F<dir>        Specify a framework directory (MacOSX)\n  -framework <name>    Use framework <name> (MacOSX)\n  -help          Print this help message and exit\n  --help         Same as -help\n  -h             Same as -help\n  -I <dir>       Add <dir> to the path searched for OCaml object files\n  -failsafe      fall back to static linking if DLL construction failed\n  -ldopt <opt>   C option passed to the shared linker only\n  -linkall       Build OCaml archive with link-all behavior\n  -l<lib>        Specify a dependent C library\n  -L<dir>        Add <dir> to the path searched for C libraries\n  -ocamlc <cmd>  Use <cmd> in place of "ocamlc"\n  -ocamlcflags <opt>    Pass <opt> to ocamlc\n  -ocamlopt <cmd> Use <cmd> in place of "ocamlopt"\n  -ocamloptflags <opt>  Pass <opt> to ocamlopt\n  -o <name>      Generated OCaml library is named <name>.cma or <name>.cmxa\n  -oc <name>     Generated C library is named dll<name>.so or lib<name>.a\n  -rpath <dir>   Same as -dllpath <dir>\n  -R<dir>        Same as -rpath\n  -verbose       Print commands before executing them\n  -v             same as -verbose\n  -version       Print version and exit\n  -vnum          Print version number and exit\n  -Wl,-rpath,<dir>     Same as -dllpath <dir>\n  -Wl,-rpath -Wl,<dir> Same as -dllpath <dir>\n  -Wl,-R<dir>          Same as -dllpath <dir>\n';

var
 command=
  function(cmd)
   {if(verbose[1])
     {Pervasives["print_string"]("+ "),
      Pervasives["print_string"](cmd),
      Pervasives["print_newline"](0)}
    else
     {}
    
    return "unknown primitive:caml_sys_system_command";
    };

var
 scommand=
  function(cmd)
   {if(command(cmd)!=0){return Pervasives["exit"](2);}else{return 0;}};

var
 safe_remove=
  function(s)
   {try
     {return "unknown primitive:caml_sys_remove";}
    catch(exn){if(exn[1]=Sys_error){return 0;}else{throw exn;}}
    };

var
 make_set=
  function(l)
   {var
     merge=
      function(l$1,param)
       {if(param)
         {var r=param[2];
          
          var p=param[1];
          
          if(List["mem"](p,l$1))
           {return merge(l$1,r);}
          else
           {return merge(/* :: */[0,p,l$1],r);}
          }
        else
         {return List["rev"](l$1);}
        };
    
    return merge(0,l);
    };

var
 make_rpath=
  function(flag)
   {if((rpath[1]=0)||"unknown primitive:caml_string_equal")
     {return "";}
    else
     {return Pervasives["^"](flag,$$String["concat"](":",make_set(rpath[1])));
      }
    };

var
 make_rpath_ccopt=
  function(flag)
   {if((rpath[1]=0)||"unknown primitive:caml_string_equal")
     {return "";}
    else
     {return Pervasives["^"]
              ("-ccopt ",
               Pervasives["^"]
                (flag,$$String["concat"](":",make_set(rpath[1]))));
      }
    };

var
 prefix_list=
  function(pref,l)
   {return List["map"](function(s){return Pervasives["^"](pref,s);},l);};

var
 prepostfix=
  function(pre,name,post)
   {var base=Filename["basename"](name);
    
    var dir=Filename["dirname"](name);
    
    return Filename["concat"]
            (dir,Pervasives["^"](pre,Pervasives["^"](base,post)));
    };

var
 transl_path=
  function(s)
   {var match=Sys["os_type"];
    
    switch(match)
     {case "Win32":
       var s$1=Bytes["of_string"](s);
       
       var
        aux=
         function(i)
          {if((i=s$1["length"])||(s$1[i]=32))
            {return s$1;}
           else
            {if(s$1[i]=47){s$1[i]=92,0}else{}return aux(i+1);}
           };
       
       return Bytes["to_string"](aux(0));
       
      default:return s;}
    };

var
 build_libs=
  function(param)
   {if(c_objs[1]!=0)
     {if(dynlink[1])
       {var
         retcode=
          command
           (Printf["sprintf"]
             ([0,
               [2,
                0,
                [12,
                 32,
                 [2,
                  0,
                  [11,
                   " -o ",
                   [2,
                    0,
                    [12,
                     32,
                     [2,
                      0,
                      [12,32,[2,0,[12,32,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]]]]]]]],
               "%s %s -o %s %s %s %s %s %s"],
              Ocamlmklibconfig["mkdll"],
              debug[1]?"-g":"",
              prepostfix("dll",output_c[1],Ocamlmklibconfig["ext_dll"]),
              $$String["concat"](" ",c_objs[1]),
              $$String["concat"](" ",c_opts[1]),
              $$String["concat"](" ",ld_opts[1]),
              make_rpath(Ocamlmklibconfig["mksharedlibrpath"]),
              $$String["concat"](" ",c_libs[1])));
        
        if(retcode!=0)
         {if(failsafe[1]){dynlink[1]=0,0}else{Pervasives["exit"](2)}}
        else
         {}
        }
      else
       {}
      
      safe_remove(prepostfix("lib",output_c[1],Ocamlmklibconfig["ext_lib"])),
      scommand
       (Ocamlmklibconfig["mklib"]
         (prepostfix("lib",output_c[1],Ocamlmklibconfig["ext_lib"]),
          $$String["concat"](" ",c_objs[1]),
          ""))}
    else
     {}
    
    if(bytecode_objs[1]!=0)
     {scommand
       (Printf["sprintf"]
         ([0,
           [2,
            0,
            [11,
             " -a ",
             [2,
              0,
              [12,
               32,
               [2,
                0,
                [12,
                 32,
                 [2,
                  0,
                  [11,
                   " -o ",
                   [2,
                    0,
                    [11,
                     ".cma ",
                     [2,
                      0,
                      [12,
                       32,
                       [2,
                        0,
                        [11,
                         " -dllib -l",
                         [2,
                          0,
                          [11,
                           " -cclib -l",
                           [2,
                            0,
                            [12,32,[2,0,[12,32,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]]]]]]]]]]]]]]]]]],
           "%s -a %s %s %s -o %s.cma %s %s -dllib -l%s -cclib -l%s %s %s %s %s"],
          transl_path(ocamlc[1]),
          debug[1]?"-g":"",
          dynlink[1]?"":"-custom",
          $$String["concat"](" ",ocamlc_opts[1]),
          output[1],
          $$String["concat"](" ",caml_opts[1]),
          $$String["concat"](" ",bytecode_objs[1]),
          Filename["basename"](output_c[1]),
          Filename["basename"](output_c[1]),
          $$String["concat"](" ",prefix_list("-ccopt ",c_opts[1])),
          make_rpath_ccopt(Ocamlmklibconfig["byteccrpath"]),
          $$String["concat"](" ",prefix_list("-cclib ",c_libs[1])),
          $$String["concat"](" ",caml_libs[1])))}
    else
     {}
    
    if(native_objs[1]!=0)
     {return scommand
              (Printf["sprintf"]
                ([0,
                  [2,
                   0,
                   [11,
                    " -a ",
                    [2,
                     0,
                     [12,
                      32,
                      [2,
                       0,
                       [11,
                        " -o ",
                        [2,
                         0,
                         [11,
                          ".cmxa ",
                          [2,
                           0,
                           [12,
                            32,
                            [2,
                             0,
                             [11,
                              " -cclib -l",
                              [2,
                               0,
                               [12,32,[2,0,[12,32,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]]]]]]]]]]]]]]]]]],
                  "%s -a %s %s -o %s.cmxa %s %s -cclib -l%s %s %s %s %s"],
                 transl_path(ocamlopt[1]),
                 debug[1]?"-g":"",
                 $$String["concat"](" ",ocamlopt_opts[1]),
                 output[1],
                 $$String["concat"](" ",caml_opts[1]),
                 $$String["concat"](" ",native_objs[1]),
                 Filename["basename"](output_c[1]),
                 $$String["concat"](" ",prefix_list("-ccopt ",c_opts[1])),
                 make_rpath_ccopt(Ocamlmklibconfig["nativeccrpath"]),
                 $$String["concat"](" ",prefix_list("-cclib ",c_libs[1])),
                 $$String["concat"](" ",caml_libs[1])));
      }
    else
     {return 0;}
    };

try
 {parse_arguments(Sys["argv"]),build_libs(0)}
catch(x)
 {if(x[1]=Bad_argument)
   {var s=x[2];
    
    switch(s)
     {case "":Pervasives["prerr_string"](usage),Pervasives["exit"](0);
      default:
       Pervasives["prerr_endline"](s),
       Pervasives["prerr_string"](usage),
       Pervasives["exit"](4)}
    }
  else
   {if(x[1]=Sys_error)
     {Pervasives["prerr_string"]("System error: "),
      Pervasives["prerr_endline"](x[2]),
      Pervasives["exit"](4)}
    else
     {throw x;}
    }
  }

module["exports"]=
{"compiler_path":compiler_path,
 "bytecode_objs":bytecode_objs,
 "native_objs":native_objs,
 "c_objs":c_objs,
 "caml_libs":caml_libs,
 "caml_opts":caml_opts,
 "dynlink":dynlink,
 "failsafe":failsafe,
 "c_libs":c_libs,
 "c_Lopts":c_Lopts,
 "c_opts":c_opts,
 "ld_opts":ld_opts,
 "ocamlc":ocamlc,
 "ocamlc_opts":ocamlc_opts,
 "ocamlopt":ocamlopt,
 "ocamlopt_opts":ocamlopt_opts,
 "output":output,
 "output_c":output_c,
 "rpath":rpath,
 "debug":debug,
 "verbose":verbose,
 "starts_with":starts_with,
 "ends_with":ends_with,
 "chop_prefix":chop_prefix,
 "chop_suffix":chop_suffix,
 "Bad_argument":Bad_argument,
 "print_version":print_version,
 "print_version_num":print_version_num,
 "parse_arguments":parse_arguments,
 "usage":usage,
 "command":command,
 "scommand":scommand,
 "safe_remove":safe_remove,
 "make_set":make_set,
 "make_rpath":make_rpath,
 "make_rpath_ccopt":make_rpath_ccopt,
 "prefix_list":prefix_list,
 "prepostfix":prepostfix,
 "transl_path":transl_path,
 "build_libs":build_libs};

