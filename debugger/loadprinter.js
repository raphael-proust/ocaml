// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Ctype=require("Ctype");
var Dynlink=require("Dynlink");
var Printtyp=require("Printtyp");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Format=require("Format");
var Printval=require("Printval");
var Misc=require("Misc");
var Filename=require("Filename");
var Ident=require("Ident");
var Symtable=require("Symtable");
var Config=require("Config");


var $$Error="unknown primitive:caml_set_oo_id";

var debugger_symtable=[0,/* None */0];

var
 use_debugger_symtable=
  function(fn,arg)
   {var old_symtable=Symtable["current_state"](/* () */0);
    
    var match=debugger_symtable[1];
    
    if(match)
     {Symtable["restore_state"](match[1])}
    else
     {Dynlink["init"](/* () */0),
      Dynlink["allow_unsafe_modules"](/* true */1),
      debugger_symtable[1]=
      /* Some */[0,Symtable["current_state"](/* () */0)],
      0}
    
    try
     {var result=fn(arg);
      
      debugger_symtable[1]=
      /* Some */[0,Symtable["current_state"](/* () */0)],
      0;
      Symtable["restore_state"](old_symtable);
      return result;
      }
    catch(exn){Symtable["restore_state"](old_symtable);throw exn;}
    };

var
 loadfiles=
  function(ppf,name)
   {try
     {var filename=Misc["find_in_path"](Config["load_path"][1],name);
      
      use_debugger_symtable(Dynlink["loadfile"],filename);
      var d=Filename["dirname"](name);
      
      if("unknown primitive:caml_string_notequal")
       {if(!List["mem"](d,Config["load_path"][1]))
         {Config["load_path"][1]=/* :: */[0,d,Config["load_path"][1]],0}
        else
         {}
        }
      else
       {}
      
      Format["fprintf"]
       (ppf,
        [/* Format */0,
         [/* String_literal */11,
          "File ",
          [/* String */2,
           /* No_padding */0,
           [/* String_literal */11,
            " loaded",
            [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]]],
         "File %s loaded@."],
        filename);
      return /* true */1;
      }
    catch(exn)
     {var exit;
      
      if(exn[1]=Dynlink["Error"])
       {var match=exn[2];
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 2:
             return loadfiles
                     (ppf,
                      Pervasives["^"]($$String["uncapitalize"](match[1]),".cmo"))&&
                    loadfiles(ppf,name);
             
            default:exit=26;}}
        }
      else
       {exit=26;}
      
      switch(exit)
       {case 26:
         if(exn=Not_found)
          {Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String_literal */11,
               "Cannot find file ",
               [/* String */2,
                /* No_padding */0,
                [/* Formatting_lit */17,
                 /* Flush_newline */4,
                 /* End_of_format */0]]],
              "Cannot find file %s@."],
             name);
           return /* false */0;
           }
         else
          {if(exn[1]=Dynlink["Error"])
            {throw [0,$$Error,/* Load_failure */[0,exn[2]]];}
           else
            {throw exn;}
           }
         
        }
      }
    };

var loadfile=function(ppf,name){return loadfiles(ppf,name);};

var
 eval_path=
  function(param)
   {switch(param)
     {case 0:return Symtable["get_global_value"](param[1]);
      case 1:return eval_path(param[1])[param[3]];
      case 2:return Misc["fatal_error"]("Loadprinter.eval_path");
      }
    };

var
 compiler_libs=
  Filename["concat"](Config["standard_library"],"compiler-libs");

var topdirs=Filename["concat"](compiler_libs,"topdirs.cmi");

var match=Env["read_signature"]("Topdirs",topdirs);

var
 match_printer_type=
  function(desc,typename)
   {try
     {var
       match$1=
        Env["lookup_type"]
         (/* Ldot */[1,[/* Lident */0,"Topdirs"],typename],Env["empty"]);
      }
    catch(exn)
     {if(exn=Not_found)
       {throw [0,
               $$Error,
               /* Unbound_identifier */[1,
                /* Ldot */[1,[/* Lident */0,"Topdirs"],typename]]];
        }
      else
       {throw exn;}
      }
    
    Ctype["init_def"](Ident["current_time"](/* () */0));
    Ctype["begin_def"](/* () */0);
    var ty_arg=Ctype["newvar"](/* None */0,/* () */0);
    
    Ctype["unify"]
     (Env["empty"],
      Ctype["newconstr"](match$1[1],/* :: */[0,ty_arg,/* [] */0]),
      Ctype["instance"](/* None */0,Env["empty"],desc[1]));
    Ctype["end_def"](/* () */0);
    Ctype["generalize"](ty_arg);
    return ty_arg;
    };

var
 find_printer_type=
  function(lid)
   {try
     {var match$1=Env["lookup_value"](lid,Env["empty"]);
      
      var desc=match$1[2];
      
      try
       {var
         match$2=
          /* tuple */[0,
           match_printer_type(desc,"printer_type_new"),
           /* false */0];
        }
      catch(exn)
       {if(exn[1]=Ctype["Unify"])
         {var
           match$2=
            /* tuple */[0,
             match_printer_type(desc,"printer_type_old"),
             /* true */1];
          }
        else
         {throw exn;}
        }
      
      return /* tuple */[0,match$2[1],match$1[1],match$2[2]];
      }
    catch(exn$1)
     {if(exn$1=Not_found)
       {throw [0,$$Error,/* Unbound_identifier */[1,lid]];}
      else
       {if(exn$1[1]=Ctype["Unify"])
         {throw [0,$$Error,/* Wrong_type */[3,lid]];}
        else
         {throw exn$1;}
        }
      }
    };

var
 install_printer=
  function(ppf,lid)
   {var match$1=find_printer_type(lid);
    
    var path=match$1[2];
    
    try
     {var v=use_debugger_symtable(eval_path,path);}
    catch(exn)
     {var exit;
      
      if(exn[1]=Symtable["Error"])
       {var match$2=exn[2];
        
        switch(match$2)
         {case 0:throw [0,$$Error,/* Unavailable_module */[2,match$2[1],lid]];
          default:exit=6;}
        }
      else
       {exit=6;}
      
      switch(exit){case 6:throw exn;}
      }
    
    if(match$1[3])
     {var print_function=function(formatter,repr){return v(repr);};}
    else
     {var print_function=function(formatter,repr){return v(formatter,repr);};}
    
    return Printval["install_printer"](path,match$1[1],ppf,print_function);
    };

var
 remove_printer=
  function(lid)
   {var match$1=find_printer_type(lid);
    
    try
     {return Printval["remove_printer"](match$1[2]);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,$$Error,/* No_active_printer */[4,lid]];}
      else
       {throw exn;}
      }
    };

var
 report_error=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                  [/* String_literal */11,
                   "Error during code loading: ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]]],
                 "@[Error during code loading: %s@]@."],
                Dynlink["error_message"](param[1]));
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                  [/* String_literal */11,
                   "Unbound identifier ",
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]]],
                 "@[Unbound identifier %a@]@."],
                Printtyp["longident"],
                param[1]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                  [/* String_literal */11,
                   "The debugger does not contain the code for",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Alpha */15,
                     [/* Char_literal */12,
                      46,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "Please load an implementation of ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " first.",
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Formatting_lit */17,
                            /* Flush_newline */4,
                            /* End_of_format */0]]]]]]]]]]],
                 "@[The debugger does not contain the code for@ %a.@ Please load an implementation of %s first.@]@."],
                Printtyp["longident"],
                param[2],
                param[1]);
       
      case 3:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                  [/* Alpha */15,
                   [/* String_literal */11,
                    " has the wrong type for a printing function.",
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]]],
                 "@[%a has the wrong type for a printing function.@]@."],
                Printtyp["longident"],
                param[1]);
       
      case 4:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                  [/* Alpha */15,
                   [/* String_literal */11,
                    " is not currently active as a printing function.",
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]]]],
                 "@[%a is not currently active as a printing function.@]@."],
                Printtyp["longident"],
                param[1]);
       
      }
    };

module["exports"]=
{"loadfile":loadfile,
 "install_printer":install_printer,
 "remove_printer":remove_printer,
 "Error":$$Error,
 "report_error":report_error};

