// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Ocamlmklibconfig=require("./ocamlmklibconfig.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Filename=require("./filename.js");
var Bytes=require("./bytes.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 compiler_path=
  function(name)
   {if(CamlPrimitive["caml_string_equal"](Sys["os_type"],"Win32"))
     {return name;}
    else
     {return Filename["concat"](Ocamlmklibconfig["bindir"],name);}
    };

var bytecode_objs=[0,/* [] */0];

var native_objs=[0,/* [] */0];

var c_objs=[0,/* [] */0];

var caml_libs=[0,/* [] */0];

var caml_opts=[0,/* [] */0];

var dynlink=[0,Ocamlmklibconfig["supports_shared_libraries"]];

var failsafe=[0,/* false */0];

var c_libs=[0,/* [] */0];

var c_Lopts=[0,/* [] */0];

var c_opts=[0,/* [] */0];

var ld_opts=[0,/* [] */0];

var ocamlc=[0,compiler_path("ocamlc")];

var ocamlc_opts=[0,/* [] */0];

var ocamlopt=[0,compiler_path("ocamlopt")];

var ocamlopt_opts=[0,/* [] */0];

var output=[0,"a"];

var output_c=[0,""];

var rpath=[0,/* [] */0];

var debug=[0,/* false */0];

var verbose=[0,/* false */0];

var
 starts_with=
  function(s,pref)
   {return s["length"]>=
           pref["length"]&&
           CamlPrimitive["caml_string_equal"]
            ($$String["sub"](s,0,pref["length"]),pref);
    };

var ends_with=Filename["check_suffix"];

var
 chop_prefix=
  function(s,pref)
   {return $$String["sub"](s,pref["length"],s["length"]-pref["length"]);};

var chop_suffix=Filename["chop_suffix"];

var
 Bad_argument=
  CamlPrimitive["caml_set_oo_id"]([248,"Ocamlmklib.Bad_argument",0]);

var
 print_version=
  function(param)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "ocamlmklib, version ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "ocamlmklib, version %s\n"],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Printf["printf"]
     ([/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Char_literal */12,10,/* End_of_format */0]],
       "%s\n"],
      Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 parse_arguments=
  function(argv)
   {var i=[0,1];
    
    var
     next_arg=
      function(param)
       {if(i[1]+1>=/* -1 for tag */argv["length"]-1)
         {throw [0,
                 Bad_argument,
                 Pervasives["^"]
                  ("Option ",
                   Pervasives["^"](argv[i[1]+1]," expects one argument"))];
          }
        else
         {}
        
        i[0]++;
        return argv[i[1]+1];
        };
    
    while(i[1]</* -1 for tag */argv["length"]-1)
     {var s=argv[i[1]+1];
      
      if(ends_with(s,".cmo")||ends_with(s,".cma"))
       {bytecode_objs[1]=/* :: */[0,s,bytecode_objs[1]]}
      else
       {if(ends_with(s,".cmx")||ends_with(s,".cmxa"))
         {native_objs[1]=/* :: */[0,s,native_objs[1]]}
        else
         {if(ends_with(s,".ml")||ends_with(s,".mli"))
           {bytecode_objs[1]=
            /* :: */[0,s,bytecode_objs[1]],
            native_objs[1]=
            /* :: */[0,s,native_objs[1]]}
          else
           {if
             (List["exists"]
               (ends_with(s),
                [/* :: */0,
                 ".o",
                 [/* :: */0,
                  ".a",
                  [/* :: */0,
                   ".obj",
                   [/* :: */0,".lib",[/* :: */0,".dll",/* [] */0]]]]]))
             {c_objs[1]=/* :: */[0,s,c_objs[1]]}
            else
             {if(CamlPrimitive["caml_string_equal"](s,"-cclib"))
               {caml_libs[1]=
                /* :: */[0,
                 next_arg(/* () */0),
                 /* :: */[0,"-cclib",caml_libs[1]]]}
              else
               {if(CamlPrimitive["caml_string_equal"](s,"-ccopt"))
                 {caml_opts[1]=
                  /* :: */[0,
                   next_arg(/* () */0),
                   /* :: */[0,"-ccopt",caml_opts[1]]]}
                else
                 {if(CamlPrimitive["caml_string_equal"](s,"-custom"))
                   {dynlink[1]=/* false */0}
                  else
                   {if(CamlPrimitive["caml_string_equal"](s,"-I"))
                     {caml_opts[1]=
                      /* :: */[0,
                       next_arg(/* () */0),
                       /* :: */[0,"-I",caml_opts[1]]]}
                    else
                     {if(CamlPrimitive["caml_string_equal"](s,"-failsafe"))
                       {failsafe[1]=/* true */1}
                      else
                       {if(CamlPrimitive["caml_string_equal"](s,"-g"))
                         {debug[1]=/* true */1}
                        else
                         {if
                           (CamlPrimitive["caml_string_equal"](s,"-h")||
                            CamlPrimitive["caml_string_equal"](s,"-help")||
                            CamlPrimitive["caml_string_equal"](s,"--help"))
                           {throw [0,Bad_argument,""];}
                          else
                           {if(CamlPrimitive["caml_string_equal"](s,"-ldopt"))
                             {ld_opts[1]=/* :: */[0,next_arg(/* () */0),ld_opts[1]]}
                            else
                             {if(CamlPrimitive["caml_string_equal"](s,"-linkall"))
                               {caml_opts[1]=/* :: */[0,s,caml_opts[1]]}
                              else
                               {if(starts_with(s,"-l"))
                                 {c_libs[1]=/* :: */[0,s,c_libs[1]]}
                                else
                                 {if(starts_with(s,"-L"))
                                   {c_Lopts[1]=/* :: */[0,s,c_Lopts[1]];
                                    var l=chop_prefix(s,"-L");
                                    
                                    if(!Filename["is_relative"](l))
                                     {rpath[1]=/* :: */[0,l,rpath[1]]}
                                    else
                                     {}
                                    }
                                  else
                                   {if(CamlPrimitive["caml_string_equal"](s,"-ocamlcflags"))
                                     {ocamlc_opts[1]=
                                      /* :: */[0,next_arg(/* () */0),ocamlc_opts[1]]}
                                    else
                                     {if(CamlPrimitive["caml_string_equal"](s,"-ocamlc"))
                                       {ocamlc[1]=next_arg(/* () */0)}
                                      else
                                       {if(CamlPrimitive["caml_string_equal"](s,"-ocamlopt"))
                                         {ocamlopt[1]=next_arg(/* () */0)}
                                        else
                                         {if(CamlPrimitive["caml_string_equal"](s,"-ocamloptflags"))
                                           {ocamlopt_opts[1]=
                                            /* :: */[0,next_arg(/* () */0),ocamlopt_opts[1]]}
                                          else
                                           {if(CamlPrimitive["caml_string_equal"](s,"-o"))
                                             {output[1]=next_arg(/* () */0)}
                                            else
                                             {if(CamlPrimitive["caml_string_equal"](s,"-oc"))
                                               {output_c[1]=next_arg(/* () */0)}
                                              else
                                               {if
                                                 (CamlPrimitive["caml_string_equal"](s,"-dllpath")||
                                                  CamlPrimitive["caml_string_equal"](s,"-R")||
                                                  CamlPrimitive["caml_string_equal"](s,"-rpath"))
                                                 {rpath[1]=/* :: */[0,next_arg(/* () */0),rpath[1]]}
                                                else
                                                 {if(starts_with(s,"-R"))
                                                   {rpath[1]=/* :: */[0,chop_prefix(s,"-R"),rpath[1]]}
                                                  else
                                                   {if(CamlPrimitive["caml_string_equal"](s,"-Wl,-rpath"))
                                                     {var a=next_arg(/* () */0);
                                                      
                                                      if(starts_with(a,"-Wl,"))
                                                       {rpath[1]=/* :: */[0,chop_prefix(a,"-Wl,"),rpath[1]]}
                                                      else
                                                       {throw [0,
                                                               Bad_argument,
                                                               "Option -Wl,-rpath expects a -Wl, argument"];
                                                        }
                                                      }
                                                    else
                                                     {if(starts_with(s,"-Wl,-rpath,"))
                                                       {rpath[1]=/* :: */[0,chop_prefix(s,"-Wl,-rpath,"),rpath[1]]}
                                                      else
                                                       {if(starts_with(s,"-Wl,-R"))
                                                         {rpath[1]=/* :: */[0,chop_prefix(s,"-Wl,-R"),rpath[1]]}
                                                        else
                                                         {if
                                                           (CamlPrimitive["caml_string_equal"](s,"-v")||
                                                            CamlPrimitive["caml_string_equal"](s,"-verbose"))
                                                           {verbose[1]=/* true */1}
                                                          else
                                                           {if(CamlPrimitive["caml_string_equal"](s,"-version"))
                                                             {print_version(/* () */0)}
                                                            else
                                                             {if(CamlPrimitive["caml_string_equal"](s,"-vnum"))
                                                               {print_version_num(/* () */0)}
                                                              else
                                                               {if(starts_with(s,"-F"))
                                                                 {c_opts[1]=/* :: */[0,s,c_opts[1]]}
                                                                else
                                                                 {if(CamlPrimitive["caml_string_equal"](s,"-framework"))
                                                                   {var a$1=next_arg(/* () */0);
                                                                    
                                                                    c_opts[1]=/* :: */[0,a$1,/* :: */[0,s,c_opts[1]]]}
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
            /* :: */[0,c_opts,/* :: */[0,ld_opts,/* :: */[0,rpath,/* [] */0]]]]]]]]]);
    c_libs[1]=Pervasives["@"](c_Lopts[1],c_libs[1]);
    if(CamlPrimitive["caml_string_equal"](output_c[1],""))
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
      Pervasives["print_newline"](/* () */0)}
    else
     {}
    
    return CamlPrimitive["caml_sys_system_command"](cmd);
    };

var
 scommand=
  function(cmd)
   {if(command(cmd)!==0){return Pervasives["exit"](2);}else{return 0;}};

var
 safe_remove=
  function(s)
   {try
     {return CamlPrimitive["caml_sys_remove"](s);}
    catch(exn)
     {if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
       {return /* () */0;}
      else
       {throw exn;}
      }
    };

var
 make_set=
  function(l)
   {var
     merge=
      function(l,param)
       {if(param)
         {var r=param[2];
          
          var p=param[1];
          
          if(List["mem"](p,l))
           {return merge(l,r);}
          else
           {return merge(/* :: */[0,p,l],r);}
          }
        else
         {return List["rev"](l);}
        };
    
    return merge(/* [] */0,l);
    };

var
 make_rpath=
  function(flag)
   {if(rpath[1]===/* [] */0||CamlPrimitive["caml_string_equal"](flag,""))
     {return "";}
    else
     {return Pervasives["^"](flag,$$String["concat"](":",make_set(rpath[1])));
      }
    };

var
 make_rpath_ccopt=
  function(flag)
   {if(rpath[1]===/* [] */0||CamlPrimitive["caml_string_equal"](flag,""))
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
          {if(i===s$1["length"]||s$1[i]===32)
            {return s$1;}
           else
            {if(s$1[i]===47){s$1[i]=92}else{}return aux(i+1);}
           };
       
       return Bytes["to_string"](aux(0));
       
      default:return s;}
    };

var
 build_libs=
  function(param)
   {if(c_objs[1]!==/* [] */0)
     {if(dynlink[1])
       {var
         retcode=
          command
           (Printf["sprintf"]
             ([/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 32,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " -o ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,
                     32,
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,
                          /* No_padding */0,
                          [/* Char_literal */12,
                           32,
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             32,
                             [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]]]]]]]],
               "%s %s -o %s %s %s %s %s %s"],
              Ocamlmklibconfig["mkdll"],
              debug[1]?"-g":"",
              prepostfix("dll",output_c[1],Ocamlmklibconfig["ext_dll"]),
              $$String["concat"](" ",c_objs[1]),
              $$String["concat"](" ",c_opts[1]),
              $$String["concat"](" ",ld_opts[1]),
              make_rpath(Ocamlmklibconfig["mksharedlibrpath"]),
              $$String["concat"](" ",c_libs[1])));
        
        if(retcode!==0)
         {if(failsafe[1]){dynlink[1]=/* false */0}else{Pervasives["exit"](2)}}
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
    
    if(bytecode_objs[1]!==/* [] */0)
     {scommand
       (Printf["sprintf"]
         ([/* Format */0,
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,
             " -a ",
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,
               32,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 32,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " -o ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     ".cma ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,
                         " -dllib -l",
                         [/* String */2,
                          /* No_padding */0,
                          [/* String_literal */11,
                           " -cclib -l",
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             32,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               32,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,
                                 32,
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,
                                   32,
                                   [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]]]]]]]]]]]]]]]]]],
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
    
    if(native_objs[1]!==/* [] */0)
     {return scommand
              (Printf["sprintf"]
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    " -a ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " -o ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          ".cmxa ",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,
                            32,
                            [/* String */2,
                             /* No_padding */0,
                             [/* String_literal */11,
                              " -cclib -l",
                              [/* String */2,
                               /* No_padding */0,
                               [/* Char_literal */12,
                                32,
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Char_literal */12,
                                  32,
                                  [/* String */2,
                                   /* No_padding */0,
                                   [/* Char_literal */12,
                                    32,
                                    [/* String */2,
                                     /* No_padding */0,
                                     [/* Char_literal */12,
                                      32,
                                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]]]]]]]]]]]]]],
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
 {parse_arguments(Sys["argv"]),build_libs(/* () */0)}
catch(x)
 {if(x[1]===Bad_argument)
   {var s=x[2];
    
    switch(s)
     {case "":Pervasives["prerr_string"](usage),Pervasives["exit"](0);
      default:
       Pervasives["prerr_endline"](s),
       Pervasives["prerr_string"](usage),
       Pervasives["exit"](4)}
    }
  else
   {if(x[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
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

