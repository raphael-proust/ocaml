// Generated CODE, PLEASE EDIT WITH CARE 

var Compmisc=require("Compmisc");
var Printlambda=require("Printlambda");
var Bytegen=require("Bytegen");
var Translmod=require("Translmod");
var Pprintast=require("Pprintast");
var Printast=require("Printast");
var Typecore=require("Typecore");
var Printinstr=require("Printinstr");
var Printtyp=require("Printtyp");
var Printtyped=require("Printtyped");
var Simplif=require("Simplif");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Clflags=require("Clflags");
var Format=require("Format");
var Typemod=require("Typemod");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Compenv=require("Compenv");
var Emitcode=require("Emitcode");
var Includemod=require("Includemod");
var Location=require("Location");
var Pparse=require("Pparse");
var Stypes=require("Stypes");


var tool_name="ocamlc";

var
 $$interface=
  function(ppf,sourcefile,outputprefix)
   {Compmisc["init_path"](0);
    var modulename=Compenv["module_of_filename"](ppf,sourcefile,outputprefix);
    
    Env["set_unit_name"](modulename);
    var initial_env=Compmisc["initial_env"](0);
    
    var ast=Pparse["parse_interface"](ppf,tool_name,sourcefile);
    
    if(Clflags["dump_parsetree"][1])
     {Format["fprintf"]
       (ppf,[0,[15,[17,4,0]],"%a@."],Printast["interface"],ast)}
    else
     {}
    
    if(Clflags["dump_source"][1])
     {Format["fprintf"]
       (ppf,[0,[15,[17,4,0]],"%a@."],Pprintast["signature"],ast)}
    else
     {}
    
    var tsg=Typemod["type_interface"](initial_env,ast);
    
    if(Clflags["dump_typedtree"][1])
     {Format["fprintf"]
       (ppf,[0,[15,[17,4,0]],"%a@."],Printtyped["interface"],tsg)}
    else
     {}
    
    var sg=tsg[2];
    
    if(Clflags["print_types"][1])
     {Printtyp["wrap_printing_env"]
       (initial_env,
        function(param)
         {return Format["fprintf"]
                  (Format["std_formatter"],
                   [0,[15,[17,4,0]],"%a@."],
                   Printtyp["signature"],
                   Typemod["simplify_signature"](sg));
          })}
    else
     {}
    
    
    Typecore["force_delayed_checks"](0);
    Warnings["check_fatal"](0);
    if(!Clflags["print_types"][1])
     {var
       sg$1=
        Env["save_signature"]
         (sg,modulename,Pervasives["^"](outputprefix,".cmi"));
      
      return Typemod["save_signature"]
              (modulename,tsg,outputprefix,sourcefile,initial_env,sg$1);
      }
    else
     {return 0;}
    };

var
 print_if=
  function(ppf,flag,printer,arg)
   {if(flag[1])
     {Format["fprintf"](ppf,[0,[15,[17,4,0]],"%a@."],printer,arg)}
    else
     {}
    
    return arg;
    };

var $plus$plus=function(x,f){return f(x);};

try
 {var prim="unknown primitive:caml_sys_getenv";var serialize_raw_lambda=1;}
catch(exn){if(exn=Not_found){var serialize_raw_lambda=0;}else{throw exn;}}

try
 {var prim$1="unknown primitive:caml_sys_getenv";var serialize_lambda=1;}
catch(exn$1){if(exn$1=Not_found){var serialize_lambda=1;}else{throw exn$1;}}

try
 {var prim$2="unknown primitive:caml_sys_getenv";var serialize_raw_js=1;}
catch(exn$2){if(exn$2=Not_found){var serialize_raw_js=0;}else{throw exn$2;}}

try
 {var prim$3="unknown primitive:caml_sys_getenv";var serialize_js=1;}
catch(exn$3){if(exn$3=Not_found){var serialize_js=0;}else{throw exn$3;}}

var
 implementation=
  function(ppf,sourcefile,outputprefix)
   {Compmisc["init_path"](0);
    var modulename=Compenv["module_of_filename"](ppf,sourcefile,outputprefix);
    
    Env["set_unit_name"](modulename);
    var env=Compmisc["initial_env"](0);
    
    var finalenv=[0,Env["empty"]];
    
    try
     {var
       match=
        $plus$plus
         ($plus$plus
           ($plus$plus
             ($plus$plus
               (Pparse["parse_implementation"](ppf,tool_name,sourcefile),
                print_if
                 (ppf,Clflags["dump_parsetree"],Printast["implementation"])),
              print_if(ppf,Clflags["dump_source"],Pprintast["structure"])),
            function(x)
             {var
               match$1=
                Typemod["type_implementation_more"]
                 (sourcefile,outputprefix,modulename,env,x);
              
              finalenv[1]=match$1[3],0;
              return /* tuple */[0,match$1[1],match$1[2]];
              }),
          print_if
           (ppf,
            Clflags["dump_typedtree"],
            Printtyped["implementation_with_coercion"]));
      
      if(Clflags["print_types"][1])
       {Warnings["check_fatal"](0);
        return Stypes["dump"]
                (/* Some */[0,Pervasives["^"](outputprefix,".annot")]);
        }
      else
       {var
         bytecode=
          $plus$plus
           ($plus$plus
             ($plus$plus
               ($plus$plus
                 ($plus$plus
                   ($plus$plus
                     ($plus$plus
                       ($plus$plus
                         (/* tuple */[0,match[1],match[2]],
                          Translmod["transl_implementation"](modulename)),
                        print_if
                         (ppf,Clflags["dump_rawlambda"],Printlambda["lambda"])),
                      function(lambda)
                       {if(serialize_raw_lambda)
                         {Printlambda["seriaize"]
                           (finalenv[1],
                            Pervasives["^"](sourcefile,".rawlambda"),
                            lambda)}
                        else
                         {}
                        
                        if(serialize_raw_js)
                         {Printlambda["serialize_raw_js"][1]
                           (finalenv[1],sourcefile,lambda)}
                        else
                         {}
                        
                        return lambda;
                        }),
                    Simplif["simplify_lambda"]),
                  function(lambda)
                   {if(serialize_lambda)
                     {Printlambda["seriaize"]
                       (finalenv[1],Pervasives["^"](sourcefile,".lambda"),lambda)}
                    else
                     {}
                    
                    if(serialize_js)
                     {Printlambda["serialize_js"][1]
                       (finalenv[1],sourcefile,lambda)}
                    else
                     {}
                    
                    return lambda;
                    }),
                print_if(ppf,Clflags["dump_lambda"],Printlambda["lambda"])),
              Bytegen["compile_implementation"](modulename)),
            print_if(ppf,Clflags["dump_instr"],Printinstr["instrlist"]));
        
        var objfile=Pervasives["^"](outputprefix,".cmo");
        
        var oc=Pervasives["open_out_bin"](objfile);
        
        try
         {$plus$plus(bytecode,Emitcode["to_file"](oc,modulename,objfile));
          Warnings["check_fatal"](0);
          Pervasives["close_out"](oc);
          return Stypes["dump"]
                  (/* Some */[0,Pervasives["^"](outputprefix,".annot")]);
          }
        catch(x)
         {Pervasives["close_out"](oc);Misc["remove_file"](objfile);throw x;}
        }
      }
    catch(x$1)
     {Stypes["dump"](/* Some */[0,Pervasives["^"](outputprefix,".annot")]);
      throw x$1;
      }
    };

var
 c_file=
  function(name)
   {Location["input_name"][1]=name,0;
    if(Ccomp["compile_file"](name)!=0)
     {return Pervasives["exit"](2);}
    else
     {return 0;}
    };

module["exports"]=
{"interface":$$interface,"implementation":implementation,"c_file":c_file};

