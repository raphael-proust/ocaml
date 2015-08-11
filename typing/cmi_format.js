// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var Digest=require("Digest");
var Format=require("Format");
var Location=require("Location");
var Config=require("Config");


var $$Error="unknown primitive:caml_set_oo_id";

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
      
      if("unknown primitive:caml_string_notequal")
       {Pervasives["close_in"](ic);
        var pre_len=Config["cmi_magic_number"]["length"]-3;
        
        if("unknown primitive:caml_string_equal")
         {if("unknown primitive:caml_string_lessthan")
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
      
      if(exn=End_of_file)
       {exit=8;}
      else
       {if(exn[1]=Failure)
         {exit=8;}
        else
         {if(exn[1]=$$Error)
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
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [15,[17,[0,"@ ",1,0],[11,"is not a compiled interface",0]]],
                 "%a@ is not a compiled interface"],
                Location["print_filename"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [15,
                  [17,
                   [0,"@ ",1,0],
                   [11,
                    "is not a compiled interface for this version of OCaml.",
                    [17,
                     4,
                     [11,"It seems to be for ",[2,0,[11," version of OCaml.",0]]]]]]],
                 "%a@ is not a compiled interface for this version of OCaml.@.It seems to be for %s version of OCaml."],
                Location["print_filename"],
                param[1],
                param[2]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,
                 [11,"Corrupted compiled interface",[17,[0,"@ ",1,0],[15,0]]],
                 "Corrupted compiled interface@ %a"],
                Location["print_filename"],
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

module["exports"]=
{"output_cmi":output_cmi,
 "input_cmi":input_cmi,
 "read_cmi":read_cmi,
 "Error":$$Error,
 "report_error":report_error};

