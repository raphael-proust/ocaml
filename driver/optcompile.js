// Generated CODE, PLEASE EDIT WITH CARE 

var Compmisc=require("Compmisc");
var Printlambda=require("Printlambda");
var Translmod=require("Translmod");
var Pprintast=require("Pprintast");
var Printast=require("Printast");
var Typecore=require("Typecore");
var Printtyp=require("Printtyp");
var Printtyped=require("Printtyped");
var Simplif=require("Simplif");
var Asmgen=require("Asmgen");
var Warnings=require("Warnings");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Clflags=require("Clflags");
var Compilenv=require("Compilenv");
var Format=require("Format");
var Typemod=require("Typemod");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Compenv=require("Compenv");
var Includemod=require("Includemod");
var Pparse=require("Pparse");
var Stypes=require("Stypes");
var Config=require("Config");


var tool_name="ocamlopt";

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

var
 $plus$plus$plus=
  function(param,f){return /* tuple */[0,param[1],f(param[2])];};

var
 implementation=
  function(ppf,sourcefile,outputprefix)
   {Compmisc["init_path"](1);
    var modulename=Compenv["module_of_filename"](ppf,sourcefile,outputprefix);
    
    Env["set_unit_name"](modulename);
    var env=Compmisc["initial_env"](0);
    
    Compilenv["reset"](Clflags["for_package"][1],modulename);
    var cmxfile=Pervasives["^"](outputprefix,".cmx");
    
    var objfile=Pervasives["^"](outputprefix,Config["ext_obj"]);
    
    var
     comp=
      function(ast)
       {var
         match=
          $plus$plus
           ($plus$plus
             ($plus$plus
               ($plus$plus
                 (ast,
                  print_if
                   (ppf,Clflags["dump_parsetree"],Printast["implementation"])),
                print_if(ppf,Clflags["dump_source"],Pprintast["structure"])),
              function(x)
               {var
                 match$1=
                  Typemod["type_implementation_more"]
                   (sourcefile,outputprefix,modulename,env,x);
                
                return /* tuple */[0,match$1[1],match$1[2]];
                }),
            print_if
             (ppf,
              Clflags["dump_typedtree"],
              Printtyped["implementation_with_coercion"]));
        
        if(!Clflags["print_types"][1])
         {$plus$plus
           ($plus$plus$plus
             ($plus$plus$plus
               ($plus$plus$plus
                 ($plus$plus
                   (/* tuple */[0,match[1],match[2]],
                    Translmod["transl_store_implementation"](modulename)),
                  print_if
                   (ppf,Clflags["dump_rawlambda"],Printlambda["lambda"])),
                Simplif["simplify_lambda"]),
              print_if(ppf,Clflags["dump_lambda"],Printlambda["lambda"])),
            Asmgen["compile_implementation"](0,outputprefix,ppf)),
          Compilenv["save_unit_info"](cmxfile)}
        else
         {}
        
        Warnings["check_fatal"](0);
        return Stypes["dump"]
                (/* Some */[0,Pervasives["^"](outputprefix,".annot")]);
        };
    
    try
     {return comp(Pparse["parse_implementation"](ppf,tool_name,sourcefile));}
    catch(x)
     {Stypes["dump"](/* Some */[0,Pervasives["^"](outputprefix,".annot")]);
      Misc["remove_file"](objfile);
      Misc["remove_file"](cmxfile);
      throw x;
      }
    };

var
 c_file=
  function(name)
   {if(Ccomp["compile_file"](name)!=0)
     {return Pervasives["exit"](2);}
    else
     {return 0;}
    };

module["exports"]=
{"interface":$$interface,"implementation":implementation,"c_file":c_file};

