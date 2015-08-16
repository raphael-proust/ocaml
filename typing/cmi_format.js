// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Digest=require("./digest.js");
var Format=require("./format.js");
var Location=require("./location.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Cmi_format.Error",0]);

var
 input_cmi=
  function(ic)
   {var match=Pervasives["input_value"](ic);
    
    var crcs=Pervasives["input_value"](ic);
    
    var flags=Pervasives["input_value"](ic);
    
    return /* record */[0,match[1],match[2],crcs,flags];
    };

var
 read_cmi=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    try
     {var
       buffer=
        Pervasives["really_input_string"]
         (ic,Config["cmi_magic_number"]["length"]);
      
      if
       (CamlPrimitive["caml_string_notequal"]
         (buffer,Config["cmi_magic_number"]))
       {Pervasives["close_in"](ic);
        var pre_len=Config["cmi_magic_number"]["length"]-3;
        
        if
         (CamlPrimitive["caml_string_equal"]
           ($$String["sub"](buffer,0,pre_len),
            $$String["sub"](Config["cmi_magic_number"],0,pre_len)))
         {if
           (CamlPrimitive["caml_string_lessthan"]
             (buffer,Config["cmi_magic_number"]))
           {var msg="an older";}
          else
           {var msg="a newer";}
          
          throw [0,$$Error,/* Wrong_version_interface */[1,filename,msg]];
          }
        else
         {throw [0,$$Error,/* Not_an_interface */[0,filename]];}
        }
      else
       {}
      
      var cmi=input_cmi(ic);
      
      Pervasives["close_in"](ic);
      return cmi;
      }
    catch(exn)
     {var exit;
      
      if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
       {exit=8;}
      else
       {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {exit=8;}
        else
         {if(exn[1]===$$Error)
           {Pervasives["close_in"](ic);throw [0,$$Error,exn[2]];}
          else
           {throw exn;}
          }
        }
      
      switch(exit)
       {case 8:
         Pervasives["close_in"](ic);
         throw [0,$$Error,/* Corrupted_interface */[2,filename]];
         
        }
      }
    };

var
 output_cmi=
  function(filename,oc,cmi)
   {Pervasives["output_string"](oc,Config["cmi_magic_number"]);
    Pervasives["output_value"](oc,/* tuple */[0,cmi[1],cmi[2]]);
    Pervasives["flush"](oc);
    var crc=Digest["file"](filename);
    
    var crcs=/* :: */[0,/* tuple */[0,cmi[1],/* Some */[0,crc]],cmi[3]];
    
    Pervasives["output_value"](oc,crcs);
    Pervasives["output_value"](oc,cmi[4]);
    return crc;
    };

var
 report_error=
  function(ppf,param)
   {switch(param[0])
     {case 0:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Alpha */15,
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* String_literal */11,
                    "is not a compiled interface",
                    /* End_of_format */0]]],
                 "%a@ is not a compiled interface"],
                Location["print_filename"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Alpha */15,
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* String_literal */11,
                    "is not a compiled interface for this version of OCaml.",
                    [/* Formatting_lit */17,
                     /* Flush_newline */4,
                     [/* String_literal */11,
                      "It seems to be for ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " version of OCaml.",
                        /* End_of_format */0]]]]]]],
                 "%a@ is not a compiled interface for this version of OCaml.@.It seems to be for %s version of OCaml."],
                Location["print_filename"],
                param[1],
                param[2]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Corrupted compiled interface",
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Alpha */15,/* End_of_format */0]]],
                 "Corrupted compiled interface@ %a"],
                Location["print_filename"],
                param[1]);
       
      }
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,
                Location["error_of_printer_file"](report_error,param[2])];
        }
      else
       {return /* None */0;}
      });

module["exports"]=
{"output_cmi":output_cmi,
 "input_cmi":input_cmi,
 "read_cmi":read_cmi,
 "Error":$$Error,
 "report_error":report_error};

