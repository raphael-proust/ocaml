// Generated CODE, PLEASE EDIT WITH CARE 

var Reload=require("Reload");
var Cmmgen=require("Cmmgen");
var Reg=require("Reg");
var Translmod=require("Translmod");
var CSE=require("CSE");
var Printlinear=require("Printlinear");
var Printmach=require("Printmach");
var Spill=require("Spill");
var Interf=require("Interf");
var Pervasives=require("Pervasives");
var List=require("List");
var Clflags=require("Clflags");
var Selection=require("Selection");
var Scheduling=require("Scheduling");
var Compilenv=require("Compilenv");
var Emitaux=require("Emitaux");
var Format=require("Format");
var Liveness=require("Liveness");
var Misc=require("Misc");
var Split=require("Split");
var Printclambda=require("Printclambda");
var Emit=require("Emit");
var Filename=require("Filename");
var Proc=require("Proc");
var Printcmm=require("Printcmm");
var Deadcode=require("Deadcode");
var Location=require("Location");
var Coloring=require("Coloring");
var Comballoc=require("Comballoc");
var Linearize=require("Linearize");
var Primitive=require("Primitive");
var Config=require("Config");
var Closure=require("Closure");


var $$Error="unknown primitive:caml_set_oo_id";

var
 liveness=
  function(ppf,phrase){Liveness["fundecl"](ppf,phrase);return phrase;};

var
 dump_if=
  function(ppf,flag,message,phrase)
   {if(flag[1]){return Printmach["phase"](message,ppf,phrase);}else{return 0;}
    };

var
 pass_dump_if=
  function(ppf,flag,message,phrase)
   {dump_if(ppf,flag,message,phrase);return phrase;};

var
 pass_dump_linear_if=
  function(ppf,flag,message,phrase)
   {if(flag[1])
     {Format["fprintf"]
       (ppf,
        [0,[11,"*** ",[2,0,[17,4,[15,[17,4,0]]]]],"*** %s@.%a@."],
        message,
        Printlinear["fundecl"],
        phrase)}
    else
     {}
    
    return phrase;
    };

var
 clambda_dump_if=
  function(ppf,ulambda)
   {if(Clflags["dump_clambda"][1]){Printclambda["clambda"](ppf,ulambda)}else{}
    
    return ulambda;
    };

var
 regalloc=
  function(ppf,round,fd)
   {if(round>50)
     {Misc["fatal_error"]
       (Pervasives["^"]
         (fd[1],": function too complex, cannot complete register allocation"))}
    else
     {}
    
    dump_if(ppf,Clflags["dump_live"],"Liveness analysis",fd);
    Interf["build_graph"](fd);
    if(Clflags["dump_interf"][1]){Printmach["interferences"](ppf,0)}else{}
    
    if(Clflags["dump_prefer"][1]){Printmach["preferences"](ppf,0)}else{}
    
    Coloring["allocate_registers"](0);
    dump_if(ppf,Clflags["dump_regalloc"],"After register allocation",fd);
    var match=Reload["fundecl"](fd);
    
    var newfd=match[1];
    
    dump_if
     (ppf,Clflags["dump_reload"],"After insertion of reloading code",newfd);
    if(match[2])
     {Reg["reinit"](0);
      Liveness["fundecl"](ppf,newfd);
      return regalloc(ppf,round+1,newfd);
      }
    else
     {return newfd;}
    };

var $plus$plus=function(x,f){return f(x);};

var
 compile_fundecl=
  function(ppf,fd_cmm)
   {Proc["init"](0);
    Reg["reset"](0);
    return $plus$plus
            ($plus$plus
              ($plus$plus
                ($plus$plus
                  ($plus$plus
                    ($plus$plus
                      ($plus$plus
                        ($plus$plus
                          ($plus$plus
                            ($plus$plus
                              ($plus$plus
                                ($plus$plus
                                  ($plus$plus
                                    ($plus$plus
                                      ($plus$plus
                                        ($plus$plus
                                          ($plus$plus
                                            ($plus$plus
                                              ($plus$plus
                                                ($plus$plus
                                                  ($plus$plus(fd_cmm,Selection["fundecl"]),
                                                   pass_dump_if
                                                    (ppf,
                                                     Clflags["dump_selection"],
                                                     "After instruction selection")),
                                                 Comballoc["fundecl"]),
                                               pass_dump_if
                                                (ppf,Clflags["dump_combine"],"After allocation combining")),
                                             CSE["fundecl"]),
                                           pass_dump_if(ppf,Clflags["dump_cse"],"After CSE")),
                                         liveness(ppf)),
                                       Deadcode["fundecl"]),
                                     pass_dump_if(ppf,Clflags["dump_live"],"Liveness analysis")),
                                   Spill["fundecl"]),
                                 liveness(ppf)),
                               pass_dump_if(ppf,Clflags["dump_spill"],"After spilling")),
                             Split["fundecl"]),
                           pass_dump_if
                            (ppf,Clflags["dump_split"],"After live range splitting")),
                         liveness(ppf)),
                       regalloc(ppf,1)),
                     Linearize["fundecl"]),
                   pass_dump_linear_if
                    (ppf,Clflags["dump_linear"],"Linearized code")),
                 Scheduling["fundecl"]),
               pass_dump_linear_if
                (ppf,
                 Clflags["dump_scheduling"],
                 "After instruction scheduling")),
             Emit["fundecl"]);
    };

var
 compile_phrase=
  function(ppf,p)
   {if(Clflags["dump_cmm"][1])
     {Format["fprintf"](ppf,[0,[15,[17,4,0]],"%a@."],Printcmm["phrase"],p)}
    else
     {}
    
    switch(p)
     {case 0:return compile_fundecl(ppf,p[1]);
      case 1:return Emit["data"](p[1]);
      }
    };

var
 compile_genfuns=
  function(ppf,f)
   {return List["iter"]
            (function(ph)
              {var exit;
               
               switch(ph)
                {case 0:
                  if(f(ph[1][1])){return compile_phrase(ppf,ph);}else{exit=8;}
                 case 1:exit=8;
                 }
               
               switch(exit){case 8:return 0;}
               },
             Cmmgen["generic_functions"]
              (1,/* :: */[0,Compilenv["current_unit_infos"](0),0]));
    };

var
 compile_implementation=
  function(toplevel,prefixname,ppf,param)
   {var size=param[1];
    
    if(Clflags["keep_asm_file"][1])
     {var asmfile=Pervasives["^"](prefixname,Config["ext_asm"]);}
    else
     {var asmfile=Filename["temp_file"](0,"camlasm",Config["ext_asm"]);}
    
    var oc=Pervasives["open_out"](asmfile);
    
    try
     {Emitaux["output_channel"][1]=oc,0;
      Emit["begin_assembly"](0);
      $plus$plus
       ($plus$plus
         ($plus$plus
           ($plus$plus(Closure["intro"](size,param[2]),clambda_dump_if(ppf)),
            Cmmgen["compunit"](size)),
          List["iter"](compile_phrase(ppf))),
        function(param$1){return 0;});
      if(toplevel){compile_genfuns(ppf,toplevel[1])}else{}
      
      compile_phrase
       (ppf,
        Cmmgen["reference_symbols"]
         (List["filter"]
           (function(s)
             {return "unknown primitive:caml_string_notequal"&&s[0]!=37;},
            List["map"]
             (Primitive["native_name"],Translmod["primitive_declarations"][1])))),
      Emit["end_assembly"](0),
      Pervasives["close_out"](oc)}
    catch(x)
     {Pervasives["close_out"](oc);
      if(Clflags["keep_asm_file"][1]){}else{Misc["remove_file"](asmfile)}
      
      throw x;
      }
    
    if
     (Proc["assemble_file"]
       (asmfile,Pervasives["^"](prefixname,Config["ext_obj"]))!=
      0)
     {throw [0,$$Error,/* Assembler_error */[0,asmfile]];}
    else
     {}
    
    if(Clflags["keep_asm_file"][1])
     {return 0;}
    else
     {return Misc["remove_file"](asmfile);}
    };

var
 report_error=
  function(ppf,param)
   {return Format["fprintf"]
            (ppf,
             [0,
              [11,"Assembler error, input left in file ",[15,0]],
              "Assembler error, input left in file %a"],
             Location["print_filename"],
             param[1]);
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
{"compile_implementation":compile_implementation,
 "compile_phrase":compile_phrase,
 "Error":$$Error,
 "report_error":report_error};

