// Generated CODE, PLEASE EDIT WITH CARE 

var Char=require("./char.js");
var Dynlinkaux=require("./dynlinkaux.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Digest=require("./digest.js");
var Printexc=require("./printexc.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Dynlink.Error",0]);

var
 match=
  Printexc["register_printer"]
   (function(param)
     {if(param[1]===$$Error)
       {var err=param[2];
        
        var msg;
        if(typeof err==="number")
         {switch(err){case 0:msg="Unsafe_file";break}}
        else
         {switch(err[0])
           {case 0:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Not_a_bytecode_file ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "Not_a_bytecode_file %S"],
               err[1]);
             break;
            case 1:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Inconsistent_import ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "Inconsistent_import %S"],
               err[1]);
             break;
            case 2:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Unavailable_unit ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "Unavailable_unit %S"],
               err[1]);
             break;
            case 3:
             var match$1=err[2];
             
             var s=err[1];
             
             switch(match$1[0])
              {case 0:
                msg=
                Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Linking_error (",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ", Dynlink.Undefined_global ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* Char_literal */12,41,/* End_of_format */0]]]]],
                   "Linking_error (%S, Dynlink.Undefined_global %S)"],
                  s,
                  match$1[1]);
                break;
               case 1:
                msg=
                Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Linking_error (",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ", Dynlink.Unavailable_primitive ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* Char_literal */12,41,/* End_of_format */0]]]]],
                   "Linking_error (%S, Dynlink.Unavailable_primitive %S)"],
                  s,
                  match$1[1]);
                break;
               case 2:
                msg=
                Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Linking_error (",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ", Dynlink.Uninitialized_global ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* Char_literal */12,41,/* End_of_format */0]]]]],
                   "Linking_error (%S, Dynlink.Uninitialized_global %S)"],
                  s,
                  match$1[1]);
                break
               }
             break;
            case 4:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Corrupted_interface ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "Corrupted_interface %S"],
               err[1]);
             break;
            case 5:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "File_not_found ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "File_not_found %S"],
               err[1]);
             break;
            case 6:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Cannot_open_dll ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "Cannot_open_dll %S"],
               err[1]);
             break;
            case 7:
             msg=
             Printf["sprintf"]
              ([/* Format */0,
                [/* String_literal */11,
                 "Inconsistent_implementation ",
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                "Inconsistent_implementation %S"],
               err[1]);
             break
            }}
        
        return /* Some */[0,
                Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Dynlink.Error(Dynlink.",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,41,/* End_of_format */0]]],
                   "Dynlink.Error(Dynlink.%s)"],
                  msg)]}
      else
       {return /* None */0}
      });

var crc_interfaces=[0,Dynlinkaux["Consistbl"][1](/* () */0)];

var allow_extension=[0,/* true */1];

var
 check_consistency=
  function(file_name,cu)
   {try
     {return List["iter"]
              (function(param)
                {var crco=param[2];
                 
                 var name=param[1];
                 
                 if(crco)
                  {var crc=crco[1];
                   
                   return CamlPrimitive["caml_string_equal"](name,cu[1])
                           ?Dynlinkaux["Consistbl"][5]
                             (crc_interfaces[1],name,crc,file_name)
                           :allow_extension[1]
                             ?Dynlinkaux["Consistbl"][3]
                               (crc_interfaces[1],name,crc,file_name)
                             :Dynlinkaux["Consistbl"][4]
                               (crc_interfaces[1],name,crc,file_name)}
                 else
                  {return /* () */0}
                 },
               cu[5])}
    catch(exn)
     {if(exn[1]===Dynlinkaux["Consistbl"][9])
       {throw [0,$$Error,/* Inconsistent_import */[1,exn[2]]]}
      else
       {if(exn[1]===Dynlinkaux["Consistbl"][10])
         {throw [0,$$Error,/* Unavailable_unit */[2,exn[2]]]}
        else
         {throw exn}
        }
      }
    };

var
 clear_available_units=
  function(param)
   {Dynlinkaux["Consistbl"][2](crc_interfaces[1]);
    return allow_extension[1]=/* false */0,0};

var
 allow_only=
  function(names)
   {Dynlinkaux["Consistbl"][8]
     (function(name){return List["mem"](name,names)},crc_interfaces[1]);
    return allow_extension[1]=/* false */0,0};

var
 prohibit=
  function(names)
   {Dynlinkaux["Consistbl"][8]
     (function(name){return !List["mem"](name,names)},crc_interfaces[1]);
    return allow_extension[1]=/* false */0,0};

var
 add_available_units=
  function(units)
   {return List["iter"]
            (function(param)
              {return Dynlinkaux["Consistbl"][5]
                       (crc_interfaces[1],param[1],param[2],"")},
             units)};

var default_crcs=[0,/* [] */0];

var
 default_available_units=
  function(param)
   {clear_available_units(/* () */0);
    List["iter"]
     (function(param$1)
       {var crco=param$1[2];
        
        return crco
                ?Dynlinkaux["Consistbl"][5]
                  (crc_interfaces[1],param$1[1],crco[1],"")
                :/* () */0},
      default_crcs[1]);
    return allow_extension[1]=/* true */1,0};

var inited=[0,/* false */0];

var
 init=
  function(param)
   {return !inited[1]
            ?(default_crcs[1]=
              Dynlinkaux["Symtable"][11](/* () */0),
              default_available_units(/* () */0),
              inited[1]=
              /* true */1,
              0)
            :0};

var
 clear_available_units$1=
  function(param){init(/* () */0);return clear_available_units(/* () */0)};

var allow_only$1=function(l){init(/* () */0);return allow_only(l)};

var prohibit$1=function(l){init(/* () */0);return prohibit(l)};

var
 add_available_units$1=
  function(l){init(/* () */0);return add_available_units(l)};

var
 default_available_units$1=
  function(param){init(/* () */0);return default_available_units(/* () */0)};

var
 digest_interface=
  function(unit,loadpath)
   {var shortname=Pervasives["^"](unit,".cmi");
    
    var filename;
    try
     {filename=Dynlinkaux["Misc"][15](loadpath,shortname);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,$$Error,/* File_not_found */[5,shortname]]}
      else
       {throw exn}
      }
    
    var ic=Pervasives["open_in_bin"](filename);
    
    try
     {var
       buffer=
        Pervasives["really_input_string"]
         (ic,Dynlinkaux["Config"][19]["length"]);
      
      if
       (CamlPrimitive["caml_string_notequal"](buffer,Dynlinkaux["Config"][19]))
       {Pervasives["close_in"](ic);
        throw [0,$$Error,/* Corrupted_interface */[4,filename]]}
      
      var cmi=Dynlinkaux["Cmi_format"][2](ic);
      
      Pervasives["close_in"](ic);
      var match$1=cmi[3];
      
      var crc;
      var exit;
      
      if(match$1)
       {var match$2=match$1[1][2];if(match$2){crc=match$2[1];}else{exit=35;}}
      else
       {exit=35;}
      
      switch(exit)
       {case 35:throw [0,$$Error,/* Corrupted_interface */[4,filename]]}
      
      return crc}
    catch(exn$1)
     {var exit$1;
      
      if(exn$1===CamlPrimitive["caml_global_data"]["End_of_file"])
       {exit$1=33;}
      else
       {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Failure"])
         {exit$1=33;}
        else
         {throw exn$1}
        }
      
      switch(exit$1)
       {case 33:
         Pervasives["close_in"](ic);
         throw [0,$$Error,/* Corrupted_interface */[4,filename]]
        }
      }
    };

var
 add_interfaces=
  function(units,loadpath)
   {return add_available_units$1
            (List["map"]
              (function(unit)
                {return /* tuple */[0,unit,digest_interface(unit,loadpath)]},
               units))};

var unsafe_allowed=[0,/* false */0];

var allow_unsafe_modules=function(b){return unsafe_allowed[1]=b,0};

var
 check_unsafe_module=
  function(cu)
   {if(!unsafe_allowed[1]&&cu[6]!==/* [] */0)
     {throw [0,$$Error,/* Unsafe_file */0]}
    else
     {return 0}
    };

var
 load_compunit=
  function(ic,file_name,file_digest,compunit)
   {check_consistency(file_name,compunit);
    check_unsafe_module(compunit);
    Pervasives["seek_in"](ic,compunit[2]);
    var code_size=compunit[3]+8;
    
    var code=CamlPrimitive["caml_static_alloc"](code_size);
    
    Pervasives["unsafe_really_input"](ic,code,0,compunit[3]);
    code[compunit[3]]=Char["chr"](Dynlinkaux["Opcodes"][41]);
    code[compunit[3]+1]=0;
    code[compunit[3]+2]=0;
    code[compunit[3]+3]=0;
    code[compunit[3]+4]=1;
    code[compunit[3]+5]=0;
    code[compunit[3]+6]=0;
    code[compunit[3]+7]=0;
    var initial_symtable=Dynlinkaux["Symtable"][18](/* () */0);
    
    try
     {Dynlinkaux["Symtable"][2](code,compunit[4]),
      Dynlinkaux["Symtable"][17](compunit[4]),
      Dynlinkaux["Symtable"][12](/* () */0)}
    catch(exn)
     {if(exn[1]===Dynlinkaux["Symtable"][22])
       {var error=exn[2];
        
        var new_error;
        switch(error[0])
         {case 0:new_error=/* Undefined_global */[0,error[1]];break;
          case 1:new_error=/* Unavailable_primitive */[1,error[1]];break;
          case 2:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"dynlink.ml",232,13]];
          case 3:new_error=/* Uninitialized_global */[2,error[1]];break
          }
        
        throw [0,$$Error,/* Linking_error */[3,file_name,new_error]]}
      else
       {throw exn}
      }
    
    var digest=Digest["string"](Pervasives["^"](file_digest,compunit[1]));
    
    CamlPrimitive["caml_register_code_fragment"](code,code_size,digest);
    try
     {return CamlPrimitive["caml_reify_bytecode"](code,code_size)(/* () */0)}
    catch(exn$1){Dynlinkaux["Symtable"][19](initial_symtable);throw exn$1}
    };

var
 loadfile=
  function(file_name)
   {init(/* () */0);
    if(!CamlPrimitive["caml_sys_file_exists"](file_name))
     {throw [0,$$Error,/* File_not_found */[5,file_name]]}
    
    var ic=Pervasives["open_in_bin"](file_name);
    
    var file_digest=CamlPrimitive["caml_md5_chan"](ic,-1);
    
    Pervasives["seek_in"](ic,0);
    try
     {var buffer;
      try
       {buffer=
        Pervasives["really_input_string"]
         (ic,Dynlinkaux["Config"][20]["length"]);
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
         {throw [0,$$Error,/* Not_a_bytecode_file */[0,file_name]]}
        else
         {throw exn}
        }
      
      if(CamlPrimitive["caml_string_equal"](buffer,Dynlinkaux["Config"][20]))
       {var compunit_pos=Pervasives["input_binary_int"](ic);
        
        Pervasives["seek_in"](ic,compunit_pos);
        var cu=Pervasives["input_value"](ic);
        
        load_compunit(ic,file_name,file_digest,cu)}
      else
       {if
         (CamlPrimitive["caml_string_equal"](buffer,Dynlinkaux["Config"][21]))
         {var toc_pos=Pervasives["input_binary_int"](ic);
          
          Pervasives["seek_in"](ic,toc_pos);
          var lib=Pervasives["input_value"](ic);
          
          try
           {Dynlinkaux["Dll"][2]
             (/* For_execution */1,List["map"](Dynlinkaux["Dll"][1],lib[5]))}
          catch(exn$1)
           {if(exn$1[1]===CamlPrimitive["caml_global_data"]["Failure"])
             {throw [0,$$Error,/* Cannot_open_dll */[6,exn$1[2]]]}
            else
             {throw exn$1}
            }
          
          List["iter"]
           (function(param)
             {return load_compunit(ic,file_name,file_digest,param)},
            lib[1])}
        else
         {throw [0,$$Error,/* Not_a_bytecode_file */[0,file_name]]}
        }
      
      return Pervasives["close_in"](ic)}
    catch(exc){Pervasives["close_in"](ic);throw exc}
    };

var
 loadfile_private=
  function(file_name)
   {init(/* () */0);
    var initial_symtable=Dynlinkaux["Symtable"][18](/* () */0);
    
    var initial_crc=crc_interfaces[1];
    
    try
     {loadfile(file_name);
      Dynlinkaux["Symtable"][20](initial_symtable);
      return crc_interfaces[1]=initial_crc,0}
    catch(exn)
     {Dynlinkaux["Symtable"][20](initial_symtable);
      crc_interfaces[1]=initial_crc;
      throw exn}
    };

var
 error_message=
  function(param)
   {if(typeof param==="number")
     {switch(param){case 0:return "this object file uses unsafe features"}}
    else
     {switch(param[0])
       {case 0:
         return Pervasives["^"](param[1]," is not a bytecode object file");
        case 1:return Pervasives["^"]("interface mismatch on ",param[1]);
        case 2:
         return Pervasives["^"]("no implementation available for ",param[1]);
        case 3:
         var match$1=param[2];
         
         var name=param[1];
         
         switch(match$1[0])
          {case 0:
            return Pervasives["^"]
                    ("error while linking ",
                     Pervasives["^"]
                      (name,
                       Pervasives["^"]
                        (".\n",
                         Pervasives["^"]
                          ("Reference to undefined global `",
                           Pervasives["^"](match$1[1],"'")))));
           case 1:
            return Pervasives["^"]
                    ("error while linking ",
                     Pervasives["^"]
                      (name,
                       Pervasives["^"]
                        (".\n",
                         Pervasives["^"]
                          ("The external function `",
                           Pervasives["^"](match$1[1],"' is not available")))));
           case 2:
            return Pervasives["^"]
                    ("error while linking ",
                     Pervasives["^"]
                      (name,
                       Pervasives["^"]
                        (".\n",
                         Pervasives["^"]
                          ("The module `",
                           Pervasives["^"](match$1[1],"' is not yet initialized")))))
           }
         break;
        case 4:return Pervasives["^"]("corrupted interface file ",param[1]);
        case 5:
         return Pervasives["^"]
                 ("cannot find file ",
                  Pervasives["^"](param[1]," in search path"));
        case 6:
         return Pervasives["^"]("error loading shared library: ",param[1]);
        case 7:return Pervasives["^"]("implementation mismatch on ",param[1])
        }}
    };

var is_native=/* false */0;

var adapt_filename=function(f){return f};

module["exports"]=
{"is_native":is_native,
 "loadfile":loadfile,
 "loadfile_private":loadfile_private,
 "adapt_filename":adapt_filename,
 "allow_only":allow_only$1,
 "prohibit":prohibit$1,
 "default_available_units":default_available_units$1,
 "allow_unsafe_modules":allow_unsafe_modules,
 "add_interfaces":add_interfaces,
 "add_available_units":add_available_units$1,
 "clear_available_units":clear_available_units$1,
 "init":init,
 "Error":$$Error,
 "error_message":error_message,
 "digest_interface":digest_interface};

