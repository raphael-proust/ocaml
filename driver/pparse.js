// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Parse=require("Parse");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Clflags=require("Clflags");
var Format=require("Format");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Filename=require("Filename");
var Lexing=require("Lexing");
var Location=require("Location");
var Ast_mapper=require("Ast_mapper");
var Config=require("Config");


var $$Error="unknown primitive:caml_set_oo_id";

var
 call_external_preprocessor=
  function(sourcefile,pp)
   {var tmpfile=Filename["temp_file"](0,"ocamlpp","");
    
    var
     comm=
      Printf["sprintf"]
       ([0,[2,0,[12,32,[2,0,[11," > ",[2,0,0]]]]],"%s %s > %s"],
        pp,
        Filename["quote"](sourcefile),
        tmpfile);
    
    if(Ccomp["command"](comm)!=0)
     {Misc["remove_file"](tmpfile);throw [0,$$Error,/* CannotRun */[0,comm]];}
    else
     {}
    
    return tmpfile;
    };

var
 preprocess=
  function(sourcefile)
   {var match=Clflags["preprocessor"][1];
    
    if(match)
     {return call_external_preprocessor(sourcefile,match[1]);}
    else
     {return sourcefile;}
    };

var
 remove_preprocessed=
  function(inputfile)
   {var match=Clflags["preprocessor"][1];
    
    if(match){return Misc["remove_file"](inputfile);}else{return 0;}
    };

var
 write_ast=
  function(magic,ast)
   {var fn=Filename["temp_file"](0,"camlppx","");
    
    var oc=Pervasives["open_out_bin"](fn);
    
    Pervasives["output_string"](oc,magic);
    Pervasives["output_value"](oc,Location["input_name"][1]);
    Pervasives["output_value"](oc,ast);
    Pervasives["close_out"](oc);
    return fn;
    };

var
 apply_rewriter=
  function(magic,fn_in,ppx)
   {var fn_out=Filename["temp_file"](0,"camlppx","");
    
    var
     comm=
      Printf["sprintf"]
       ([0,[2,0,[12,32,[2,0,[12,32,[2,0,0]]]]],"%s %s %s"],
        ppx,
        Filename["quote"](fn_in),
        Filename["quote"](fn_out));
    
    var ok=Ccomp["command"](comm)=0;
    
    Misc["remove_file"](fn_in);
    if(!ok)
     {Misc["remove_file"](fn_out);throw [0,$$Error,/* CannotRun */[0,comm]];}
    else
     {}
    
    if(!"unknown primitive:caml_sys_file_exists")
     {throw [0,$$Error,/* WrongMagic */[1,comm]];}
    else
     {}
    
    var ic=Pervasives["open_in_bin"](fn_out);
    
    try
     {var buffer=Pervasives["really_input_string"](ic,magic["length"]);}
    catch(exn){if(exn=End_of_file){var buffer="";}else{throw exn;}}
    
    Pervasives["close_in"](ic);
    if("unknown primitive:caml_string_notequal")
     {Misc["remove_file"](fn_out);throw [0,$$Error,/* WrongMagic */[1,comm]];}
    else
     {}
    
    return fn_out;
    };

var
 read_ast=
  function(magic,fn)
   {var ic=Pervasives["open_in_bin"](fn);
    
    try
     {var buffer=Pervasives["really_input_string"](ic,magic["length"]);
      
      if("unknown primitive:caml_string_equal")
       {}
      else
       {throw [0,Assert_failure,[0,"driver/pparse.ml",86,4]];}
      
      Location["input_name"][1]=Pervasives["input_value"](ic),0;
      var ast=Pervasives["input_value"](ic);
      
      Pervasives["close_in"](ic);
      Misc["remove_file"](fn);
      return ast;
      }
    catch(exn){Pervasives["close_in"](ic);Misc["remove_file"](fn);throw exn;}
    };

var
 rewrite=
  function(magic,ast,ppxs)
   {return read_ast
            (magic,
             List["fold_left"]
              (apply_rewriter(magic),write_ast(magic,ast),List["rev"](ppxs)));
    };

var
 apply_rewriters_str=
  function($staropt$star,tool_name,ast)
   {if($staropt$star){var restore=$staropt$star[1];}else{var restore=1;}
    
    var ppxs=Clflags["all_ppx"][1];
    
    if(ppxs)
     {var ast$1=Ast_mapper["add_ppx_context_str"](tool_name,ast);
      
      var ast$2=rewrite(Config["ast_impl_magic_number"],ast$1,ppxs);
      
      return Ast_mapper["drop_ppx_context_str"](restore,ast$2);
      }
    else
     {return ast;}
    };

var
 apply_rewriters_sig=
  function($staropt$star,tool_name,ast)
   {if($staropt$star){var restore=$staropt$star[1];}else{var restore=1;}
    
    var ppxs=Clflags["all_ppx"][1];
    
    if(ppxs)
     {var ast$1=Ast_mapper["add_ppx_context_sig"](tool_name,ast);
      
      var ast$2=rewrite(Config["ast_intf_magic_number"],ast$1,ppxs);
      
      return Ast_mapper["drop_ppx_context_sig"](restore,ast$2);
      }
    else
     {return ast;}
    };

var
 apply_rewriters=
  function(restore,tool_name,magic,ast)
   {if("unknown primitive:caml_string_equal")
     {return apply_rewriters_str(restore,tool_name,ast);}
    else
     {if("unknown primitive:caml_string_equal")
       {return apply_rewriters_sig(restore,tool_name,ast);}
      else
       {throw [0,Assert_failure,[0,"driver/pparse.ml",124,4]];}
      }
    };

var Outdated_version="unknown primitive:caml_set_oo_id";

var
 open_and_check_magic=
  function(inputfile,ast_magic)
   {var ic=Pervasives["open_in_bin"](inputfile);
    
    try
     {var buffer=Pervasives["really_input_string"](ic,ast_magic["length"]);
      
      if("unknown primitive:caml_string_equal")
       {var is_ast_file=1;}
      else
       {if("unknown primitive:caml_string_equal")
         {throw Outdated_version;}
        else
         {var is_ast_file=0;}
        }
      }
    catch(exn)
     {if(exn=Outdated_version)
       {var
         is_ast_file=
          Misc["fatal_error"]
           ("OCaml and preprocessor have incompatible versions");
        }
      else
       {var is_ast_file=0;}
      }
    
    return /* tuple */[0,ic,is_ast_file];
    };

var
 file=
  function(ppf,tool_name,inputfile,parse_fun,ast_magic)
   {var match=open_and_check_magic(inputfile,ast_magic);
    
    var ic=match[1];
    
    try
     {if(match[2])
       {if(Clflags["fast"][1])
         {Format["fprintf"]
           (ppf,
            [0,
             [18,[1,[0,0,""]],[11,"Warning: ",[2,0,[17,0,[17,4,0]]]]],
             "@[Warning: %s@]@."],
            "option -unsafe used with a preprocessor returning a syntax tree")}
        else
         {}
        
        Location["input_name"][1]=Pervasives["input_value"](ic),0;
        var ast=Pervasives["input_value"](ic);
        }
      else
       {Pervasives["seek_in"](ic,0);
        Location["input_name"][1]=inputfile,0;
        var lexbuf=Lexing["from_channel"](ic);
        
        Location["init"](lexbuf,inputfile);
        var ast=parse_fun(lexbuf);
        }
      }
    catch(x){Pervasives["close_in"](ic);throw x;}
    
    Pervasives["close_in"](ic);
    return apply_rewriters([0,0],tool_name,ast_magic,ast);
    };

var
 report_error=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,
                  "Error while running external preprocessor",
                  [17,4,[11,"Command line: ",[2,0,[17,4,0]]]]],
                 "Error while running external preprocessor@.Command line: %s@."],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,
                  "External preprocessor does not produce a valid file",
                  [17,4,[11,"Command line: ",[2,0,[17,4,0]]]]],
                 "External preprocessor does not produce a valid file@.Command line: %s@."],
                param[1]);
       
      }
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

var
 parse_all=
  function(tool_name,parse_fun,magic,ppf,sourcefile)
   {Location["input_name"][1]=sourcefile,0;
    var inputfile=preprocess(sourcefile);
    
    try
     {var ast=file(ppf,tool_name,inputfile,parse_fun,magic);}
    catch(exn){remove_preprocessed(inputfile);throw exn;}
    
    remove_preprocessed(inputfile);
    return ast;
    };

var
 parse_implementation=
  function(ppf,tool_name,sourcefile)
   {return parse_all
            (tool_name,
             Parse["implementation"],
             Config["ast_impl_magic_number"],
             ppf,
             sourcefile);
    };

var
 parse_interface=
  function(ppf,tool_name,sourcefile)
   {return parse_all
            (tool_name,
             Parse["interface"],
             Config["ast_intf_magic_number"],
             ppf,
             sourcefile);
    };

module["exports"]=
{"Error":$$Error,
 "preprocess":preprocess,
 "remove_preprocessed":remove_preprocessed,
 "file":file,
 "apply_rewriters":apply_rewriters,
 "apply_rewriters_str":apply_rewriters_str,
 "apply_rewriters_sig":apply_rewriters_sig,
 "report_error":report_error,
 "parse_implementation":parse_implementation,
 "parse_interface":parse_interface,
 "call_external_preprocessor":call_external_preprocessor,
 "open_and_check_magic":open_and_check_magic,
 "read_ast":read_ast};

