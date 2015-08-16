// Generated CODE, PLEASE EDIT WITH CARE 

var Compmisc=require("./compmisc.js");
var Printlambda=require("./printlambda.js");
var Bytegen=require("./bytegen.js");
var Translmod=require("./translmod.js");
var Pprintast=require("./pprintast.js");
var Printast=require("./printast.js");
var Typecore=require("./typecore.js");
var Printinstr=require("./printinstr.js");
var Printtyp=require("./printtyp.js");
var Printtyped=require("./printtyped.js");
var Simplif=require("./simplif.js");
var Warnings=require("./warnings.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Clflags=require("./clflags.js");
var Format=require("./format.js");
var Typemod=require("./typemod.js");
var Misc=require("./misc.js");
var Ccomp=require("./ccomp.js");
var Compenv=require("./compenv.js");
var Emitcode=require("./emitcode.js");
var Includemod=require("./includemod.js");
var Location=require("./location.js");
var Pparse=require("./pparse.js");
var Stypes=require("./stypes.js");
var CamlPrimitive=require("./camlPrimitive.js");


var tool_name="ocamlc";

var
 $$interface=
  function(ppf,sourcefile,outputprefix)
   {Compmisc["init_path"](/* false */0);
    var modulename=Compenv["module_of_filename"](ppf,sourcefile,outputprefix);
    
    Env["set_unit_name"](modulename);
    var initial_env=Compmisc["initial_env"](/* () */0);
    
    var ast=Pparse["parse_interface"](ppf,tool_name,sourcefile);
    
    if(Clflags["dump_parsetree"][1])
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* Alpha */15,
          [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
         "%a@."],
        Printast["interface"],
        ast)}
    else
     {}
    
    if(Clflags["dump_source"][1])
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* Alpha */15,
          [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
         "%a@."],
        Pprintast["signature"],
        ast)}
    else
     {}
    
    var tsg=Typemod["type_interface"](initial_env,ast);
    
    if(Clflags["dump_typedtree"][1])
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* Alpha */15,
          [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
         "%a@."],
        Printtyped["interface"],
        tsg)}
    else
     {}
    
    var sg=tsg[2];
    
    if(Clflags["print_types"][1])
     {Printtyp["wrap_printing_env"]
       (initial_env,
        function(param)
         {return Format["fprintf"]
                  (Format["std_formatter"],
                   [/* Format */0,
                    [/* Alpha */15,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]],
                    "%a@."],
                   Printtyp["signature"],
                   Typemod["simplify_signature"](sg));
          })}
    else
     {}
    
    Includemod["signatures"](initial_env,sg,sg);
    Typecore["force_delayed_checks"](/* () */0);
    Warnings["check_fatal"](/* () */0);
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
     {Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* Alpha */15,
          [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]],
         "%a@."],
        printer,
        arg)}
    else
     {}
    
    return arg;
    };

var $plus$plus=function(x,f){return f(x);};

try
 {var prim=CamlPrimitive["caml_sys_getenv"]("OCAML_RAW_LAMBDA");
  
  
  var serialize_raw_lambda=/* true */1;
  }
catch(exn)
 {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
   {var serialize_raw_lambda=/* false */0;}
  else
   {throw exn;}
  }

try
 {var prim$1=CamlPrimitive["caml_sys_getenv"]("OCAML_LAMBDA");
  
  
  var serialize_lambda=/* true */1;
  }
catch(exn$1)
 {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
   {var serialize_lambda=/* true */1;}
  else
   {throw exn$1;}
  }

try
 {var prim$2=CamlPrimitive["caml_sys_getenv"]("OCAML_RAW_JS");
  
  
  var serialize_raw_js=/* true */1;
  }
catch(exn$2)
 {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
   {var serialize_raw_js=/* false */0;}
  else
   {throw exn$2;}
  }

try
 {var prim$3=CamlPrimitive["caml_sys_getenv"]("OCAML_JS");
  
  
  var serialize_js=/* true */1;
  }
catch(exn$3)
 {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
   {var serialize_js=/* false */0;}
  else
   {throw exn$3;}
  }

var
 implementation=
  function(ppf,sourcefile,outputprefix)
   {Compmisc["init_path"](/* false */0);
    var modulename=Compenv["module_of_filename"](ppf,sourcefile,outputprefix);
    
    Env["set_unit_name"](modulename);
    var env=Compmisc["initial_env"](/* () */0);
    
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
              
              finalenv[1]=match$1[3];
              return /* tuple */[0,match$1[1],match$1[2]];
              }),
          print_if
           (ppf,
            Clflags["dump_typedtree"],
            Printtyped["implementation_with_coercion"]));
      
      if(Clflags["print_types"][1])
       {Warnings["check_fatal"](/* () */0);
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
          Warnings["check_fatal"](/* () */0);
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
   {Location["input_name"][1]=name;
    if(Ccomp["compile_file"](name)!==0)
     {return Pervasives["exit"](2);}
    else
     {return 0;}
    };

module["exports"]=
{"interface":$$interface,"implementation":implementation,"c_file":c_file};

