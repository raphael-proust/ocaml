// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Clflags=require("./clflags.js");
var Printf=require("./printf.js");
var Misc=require("./misc.js");
var Filename=require("./filename.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 command=
  function(cmdline)
   {if(Clflags["verbose"][1])
     {Pervasives["prerr_string"]("+ "),
      Pervasives["prerr_string"](cmdline),
      Pervasives["prerr_newline"](/* () */0)}
    else
     {}
    
    return CamlPrimitive["caml_sys_system_command"](cmdline);
    };

var run_command=function(cmdline){return command(cmdline);};

var
 build_diversion=
  function(lst)
   {var
     match=
      Filename["open_temp_file"](/* None */0,/* None */0,"camlresp","");
    
    var oc=match[2];
    
    var responsefile=match[1];
    
    List["iter"]
     (function(f)
       {return Printf["fprintf"]
                (oc,
                 [/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,10,/* End_of_format */0]],
                  "%s\n"],
                 f);
        },
      lst);
    Pervasives["close_out"](oc);
    Pervasives["at_exit"]
     (function(param){return Misc["remove_file"](responsefile);});
    return Pervasives["^"]("@",responsefile);
    };

var
 quote_files=
  function(lst)
   {var
     lst$1=
      List["filter"]
       (function(f){return CamlPrimitive["caml_string_notequal"](f,"");},lst);
    
    var quoted=List["map"](Filename["quote"],lst$1);
    
    var s=$$String["concat"](" ",quoted);
    
    if
     (s["length"]>=
      4096&&
      CamlPrimitive["caml_string_equal"](Sys["os_type"],"Win32"))
     {return build_diversion(quoted);}
    else
     {return s;}
    };

var
 quote_prefixed=
  function(pr,lst)
   {var
     lst$1=
      List["filter"]
       (function(f){return CamlPrimitive["caml_string_notequal"](f,"");},lst);
    
    var lst$2=List["map"](function(f){return Pervasives["^"](pr,f);},lst$1);
    
    return quote_files(lst$2);
    };

var
 quote_optfile=
  function(param)
   {if(param){return Filename["quote"](param[1]);}else{return "";}};

var
 compile_file=
  function(name)
   {var match=Clflags["c_compiler"][1];
    
    return command
            (Printf["sprintf"]
              ([/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,
                  " -c ",
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
                          [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]]]],
                "%s -c %s %s %s %s %s"],
               match
                ?match[1]
                :Clflags["native_code"][1]
                  ?Config["native_c_compiler"]
                  :Config["bytecomp_c_compiler"],
               Clflags["debug"][1]?"-g":"",
               $$String["concat"](" ",List["rev"](Clflags["all_ccopts"][1])),
               quote_prefixed("-I",List["rev"](Clflags["include_dirs"][1])),
               Clflags["std_include_flag"]("-I"),
               Filename["quote"](name)));
    };

var
 create_archive=
  function(archive,file_list)
   {Misc["remove_file"](archive);
    var quoted_archive=Filename["quote"](archive);
    
    var match=Config["ccomp_type"];
    
    switch(match)
     {case "msvc":
       return command
               (Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "link /lib /nologo /out:",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                   "link /lib /nologo /out:%s %s"],
                  quoted_archive,
                  quote_files(file_list)));
       
      default:
       if(Config["ar"]["length"]>0)
        {}
       else
        {throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"utils/ccomp.ml",75,6]];
         }
       
       var
        r1=
         command
          (Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                " rc ",
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,
                  32,
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]]]],
              "%s rc %s %s"],
             Config["ar"],
             quoted_archive,
             quote_files(file_list)));
       
       if(r1!==0||Config["ranlib"]["length"]===0)
        {return r1;}
       else
        {return command
                 (Pervasives["^"]
                   (Config["ranlib"],Pervasives["^"](" ",quoted_archive)));
         }
       }
    };

var
 expand_libname=
  function(name)
   {if
     (name["length"]<
      2||
      CamlPrimitive["caml_string_notequal"]($$String["sub"](name,0,2),"-l"))
     {return name;}
    else
     {var
       libname=
        Pervasives["^"]
         ("lib",
          Pervasives["^"]
           ($$String["sub"](name,2,name["length"]-2),Config["ext_lib"]));
      
      try
       {return Misc["find_in_path"](Config["load_path"][1],libname);}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return libname;}
        else
         {throw exn;}
        }
      }
    };

var
 remove_Wl=
  function(cclibs)
   {return List["map"]
            (function(cclib)
              {if
                (cclib["length"]>=
                 4&&
                 CamlPrimitive["caml_string_equal"]
                  ("-Wl,",$$String["sub"](cclib,0,4)))
                {return $$String["map"]
                         (function(c){if(c!==44){return c;}else{return 32;}},
                          $$String["sub"](cclib,4,cclib["length"]-4));
                 }
               else
                {return cclib;}
               },
             cclibs);
    };

var
 call_linker=
  function(mode,output_name,files,extra)
   {if(mode===/* Partial */3)
     {var
       cmd=
        Printf["sprintf"]
         ([/* Format */0,
           [/* String */2,
            /* No_padding */0,
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
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
           "%s%s %s %s %s"],
          Config["native_pack_linker"],
          Filename["quote"](output_name),
          quote_prefixed("-L",Config["load_path"][1]),
          quote_files(remove_Wl(files)),
          extra);
      }
    else
     {var match=Clflags["c_compiler"][1];
      
      if(match)
       {var $js=match[1];}
      else
       {switch(mode)
         {case 0:var $js=Config["mkexe"];
          case 1:var $js=Config["mkdll"];
          case 2:var $js=Config["mkmaindll"];
          case 3:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"utils/ccomp.ml",125,27]];
           
          }
        }
      var
       cmd=
        Printf["sprintf"]
         ([/* Format */0,
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
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]]]]]]]]],
           "%s -o %s %s %s %s %s %s %s"],
          $js,
          Filename["quote"](output_name),
          Clflags["gprofile"][1]?Config["cc_profile"]:"",
          "",
          quote_prefixed("-L",Config["load_path"][1]),
          $$String["concat"](" ",List["rev"](Clflags["all_ccopts"][1])),
          quote_files(files),
          extra);
      }
    
    return command(cmd)===0;
    };

module["exports"]=
{"command":command,
 "run_command":run_command,
 "compile_file":compile_file,
 "create_archive":create_archive,
 "expand_libname":expand_libname,
 "quote_files":quote_files,
 "quote_optfile":quote_optfile,
 "call_linker":call_linker};

