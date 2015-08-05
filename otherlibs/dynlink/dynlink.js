// Generated CODE, PLEASE EDIT WITH CARE 

var Char=require("Char");
var Dynlinkaux=require("Dynlinkaux");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Digest=require("Digest");
var Printexc=require("Printexc");


var $$Error="unknown primitive:caml_set_oo_id";

var
 match=
  Printexc["register_printer"]
   (function(param)
     {var tag=param[1];
      
      if(tag=$$Error)
       {var err=param[2];
        
        if(typeof err=="number")
         {switch(err){case 0:var msg="Unsafe_file";}}
        else
         {switch(err[0])
           {case 0:
             var s=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,
                  [11,"Not_a_bytecode_file ",[3,0,0]],
                  "Not_a_bytecode_file %S"],
                 s);
             
            case 1:
             var s$1=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,
                  [11,"Inconsistent_import ",[3,0,0]],
                  "Inconsistent_import %S"],
                 s$1);
             
            case 2:
             var s$2=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,[11,"Unavailable_unit ",[3,0,0]],"Unavailable_unit %S"],
                 s$2);
             
            case 3:
             var match$1=err[2];
             
             var s$3=err[1];
             
             switch(match$1)
              {case 0:
                var s$prime=match$1[1];
                
                var
                 msg=
                  Printf["sprintf"]
                   ([0,
                     [11,
                      "Linking_error (",
                      [3,0,[11,", Dynlink.Undefined_global ",[3,0,[12,41,0]]]]],
                     "Linking_error (%S, Dynlink.Undefined_global %S)"],
                    s$3,
                    s$prime);
                
               case 1:
                var s$4=s$3;
                
                var s$prime$1=match$1[1];
                
                var
                 msg=
                  Printf["sprintf"]
                   ([0,
                     [11,
                      "Linking_error (",
                      [3,
                       0,
                       [11,", Dynlink.Unavailable_primitive ",[3,0,[12,41,0]]]]],
                     "Linking_error (%S, Dynlink.Unavailable_primitive %S)"],
                    s$4,
                    s$prime$1);
                
               case 2:
                var s$5=s$3;
                
                var s$prime$2=match$1[1];
                
                var
                 msg=
                  Printf["sprintf"]
                   ([0,
                     [11,
                      "Linking_error (",
                      [3,0,[11,", Dynlink.Uninitialized_global ",[3,0,[12,41,0]]]]],
                     "Linking_error (%S, Dynlink.Uninitialized_global %S)"],
                    s$5,
                    s$prime$2);
                
               }
             
            case 4:
             var s$6=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,
                  [11,"Corrupted_interface ",[3,0,0]],
                  "Corrupted_interface %S"],
                 s$6);
             
            case 5:
             var s$7=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,[11,"File_not_found ",[3,0,0]],"File_not_found %S"],s$7);
             
            case 6:
             var s$8=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,[11,"Cannot_open_dll ",[3,0,0]],"Cannot_open_dll %S"],s$8);
             
            case 7:
             var s$9=err[1];
             
             var
              msg=
               Printf["sprintf"]
                ([0,
                  [11,"Inconsistent_implementation ",[3,0,0]],
                  "Inconsistent_implementation %S"],
                 s$9);
             
            }}
        
        return [0,
                Printf["sprintf"]
                 ([0,
                   [11,"Dynlink.Error(Dynlink.",[2,0,[12,41,0]]],
                   "Dynlink.Error(Dynlink.%s)"],
                  msg)];
        }
      else
       {return 0;}
      });

var crc_interfaces=[0,Dynlinkaux["Consistbl"][1](0)];

var allow_extension=[0,1];

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
                   
                   if("unknown primitive:caml_string_equal")
                    {return Dynlinkaux["Consistbl"][5]
                             (crc_interfaces[1],name,crc,file_name);
                     }
                   else
                    {if(allow_extension[1])
                      {return Dynlinkaux["Consistbl"][3]
                               (crc_interfaces[1],name,crc,file_name);
                       }
                     else
                      {return Dynlinkaux["Consistbl"][4]
                               (crc_interfaces[1],name,crc,file_name);
                       }
                     }
                   }
                 else
                  {return 0;}
                 },
               cu[5]);
      }
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Dynlinkaux["Consistbl"][9])
       {var name=exn[2];throw [0,$$Error,[1,name]];}
      else
       {var tag$1=exn[1];
        
        if(tag$1=Dynlinkaux["Consistbl"][10])
         {var name$1=exn[2];throw [0,$$Error,[2,name$1]];}
        else
         {throw exn;}
        }
      }
    };

var
 clear_available_units=
  function(param)
   {Dynlinkaux["Consistbl"][2](crc_interfaces[1]);
    return allow_extension[1]=0,0;
    };

var
 allow_only=
  function(names)
   {Dynlinkaux["Consistbl"][8]
     (function(name){return List["mem"](name,names);},crc_interfaces[1]);
    return allow_extension[1]=0,0;
    };

var
 prohibit=
  function(names)
   {Dynlinkaux["Consistbl"][8]
     (function(name){return !List["mem"](name,names);},crc_interfaces[1]);
    return allow_extension[1]=0,0;
    };

var
 add_available_units=
  function(units)
   {return List["iter"]
            (function(param)
              {var crc=param[2];
               
               var unit=param[1];
               
               return Dynlinkaux["Consistbl"][5]
                       (crc_interfaces[1],unit,crc,"");
               },
             units);
    };

var default_crcs=[0,0];

var
 default_available_units=
  function(param)
   {clear_available_units(0);
    List["iter"]
     (function(param$1)
       {var crco=param$1[2];
        
        var unit=param$1[1];
        
        if(crco)
         {var crc=crco[1];
          
          return Dynlinkaux["Consistbl"][5](crc_interfaces[1],unit,crc,"");
          }
        else
         {return 0;}
        },
      default_crcs[1]);
    return allow_extension[1]=1,0;
    };

var inited=[0,0];

var
 init=
  function(param)
   {if(!inited[1])
     {default_crcs[1]=Dynlinkaux["Symtable"][11](0),0;
      default_available_units(0);
      return inited[1]=1,0;
      }
    else
     {return 0;}
    };

var
 clear_available_units$1=
  function(param){init(0);return clear_available_units(0);};

var allow_only$1=function(l){init(0);return allow_only(l);};

var prohibit$1=function(l){init(0);return prohibit(l);};

var add_available_units$1=function(l){init(0);return add_available_units(l);};

var
 default_available_units$1=
  function(param){init(0);return default_available_units(0);};

var
 digest_interface=
  function(unit,loadpath)
   {var shortname=Pervasives["^"](unit,".cmi");
    
    try
     {var filename=Dynlinkaux["Misc"][15](loadpath,shortname);}
    catch(exn)
     {if(exn=Not_found){throw [0,$$Error,[5,shortname]];}else{throw exn;}}
    
    var ic=Pervasives["open_in_bin"](filename);
    
    try
     {var
       buffer=
        Pervasives["really_input_string"]
         (ic,Dynlinkaux["Config"][19]["length"]);
      
      if("unknown primitive:caml_string_notequal")
       {Pervasives["close_in"](ic);throw [0,$$Error,[4,filename]];}
      else
       {}
      
      var cmi=Dynlinkaux["Cmi_format"][2](ic);
      
      Pervasives["close_in"](ic);
      var match$1=cmi[3];
      
      var exit;
      
      if(match$1)
       {var match$2=match$1[1];
        
        var match$3=match$2[2];
        
        if(match$3){var crc=match$3[1];var crc$1=crc;}else{exit=35;}
        }
      else
       {exit=35;}
      
      switch(exit){case 35:throw [0,$$Error,[4,filename]];}
      
      return crc$1;
      }
    catch(exn$1)
     {var exit$1;
      
      if(exn$1=End_of_file)
       {exit$1=33;}
      else
       {var tag=exn$1[1];if(tag=Failure){exit$1=33;}else{throw exn$1;}}
      
      switch(exit$1)
       {case 33:Pervasives["close_in"](ic);throw [0,$$Error,[4,filename]];}
      }
    };

var
 add_interfaces=
  function(units,loadpath)
   {return add_available_units$1
            (List["map"]
              (function(unit)
                {return [0,unit,digest_interface(unit,loadpath)];},
               units));
    };

var unsafe_allowed=[0,0];

var allow_unsafe_modules=function(b){return unsafe_allowed[1]=b,0;};

var
 check_unsafe_module=
  function(cu)
   {if(!unsafe_allowed[1]&&cu[6]!=0){throw [0,$$Error,0];}else{return 0;}};

var
 load_compunit=
  function(ic,file_name,file_digest,compunit)
   {check_consistency(file_name,compunit);
    check_unsafe_module(compunit);
    Pervasives["seek_in"](ic,compunit[2]);
    var code_size=compunit[3]+8;
    
    var code="unknown primitive:caml_static_alloc";
    
    Pervasives["unsafe_really_input"](ic,code,0,compunit[3]);
    code[compunit[3]]=Char["chr"](Dynlinkaux["Opcodes"][41]),0;
    code[compunit[3]+1]=0,0;
    code[compunit[3]+2]=0,0;
    code[compunit[3]+3]=0,0;
    code[compunit[3]+4]=1,0;
    code[compunit[3]+5]=0,0;
    code[compunit[3]+6]=0,0;
    code[compunit[3]+7]=0,0;
    var initial_symtable=Dynlinkaux["Symtable"][18](0);
    
    try
     {Dynlinkaux["Symtable"][2](code,compunit[4]),
      Dynlinkaux["Symtable"][17](compunit[4]),
      Dynlinkaux["Symtable"][12](0)}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Dynlinkaux["Symtable"][22])
       {var error=exn[2];
        
        switch(error)
         {case 0:var s=error[1];var new_error=[0,s];
          case 1:var s$1=error[1];var new_error=[1,s$1];
          case 2:throw [0,Assert_failure,[0,"dynlink.ml",232,13]];
          case 3:var s$2=error[1];var new_error=[2,s$2];
          }
        
        throw [0,$$Error,[3,file_name,new_error]];
        }
      else
       {throw exn;}
      }
    
    var digest=Digest["string"](Pervasives["^"](file_digest,compunit[1]));
    
    "unknown primitive:caml_register_code_fragment";
    try
     {return 0;}
    catch(exn$1){Dynlinkaux["Symtable"][19](initial_symtable);throw exn$1;}
    };

var
 loadfile=
  function(file_name)
   {init(0);
    if(!"unknown primitive:caml_sys_file_exists")
     {throw [0,$$Error,[5,file_name]];}
    else
     {}
    
    var ic=Pervasives["open_in_bin"](file_name);
    
    var file_digest="unknown primitive:caml_md5_chan";
    
    Pervasives["seek_in"](ic,0);
    try
     {try
       {var
         buffer=
          Pervasives["really_input_string"]
           (ic,Dynlinkaux["Config"][20]["length"]);
        }
      catch(exn)
       {if(exn=End_of_file){throw [0,$$Error,[0,file_name]];}else{throw exn;}}
      
      if("unknown primitive:caml_string_equal")
       {var compunit_pos=Pervasives["input_binary_int"](ic);
        
        Pervasives["seek_in"](ic,compunit_pos);
        var cu=Pervasives["input_value"](ic);
        
        load_compunit(ic,file_name,file_digest,cu)}
      else
       {if("unknown primitive:caml_string_equal")
         {var toc_pos=Pervasives["input_binary_int"](ic);
          
          Pervasives["seek_in"](ic,toc_pos);
          var lib=Pervasives["input_value"](ic);
          
          try
           {Dynlinkaux["Dll"][2](1,List["map"](Dynlinkaux["Dll"][1],lib[5]))}
          catch(exn$1)
           {var tag=exn$1[1];
            
            if(tag=Failure)
             {var reason=exn$1[2];throw [0,$$Error,[6,reason]];}
            else
             {throw exn$1;}
            }
          
          List["iter"](load_compunit(ic,file_name,file_digest),lib[1])}
        else
         {throw [0,$$Error,[0,file_name]];}
        }
      
      return Pervasives["close_in"](ic);
      }
    catch(exc){Pervasives["close_in"](ic);throw exc;}
    };

var
 loadfile_private=
  function(file_name)
   {init(0);
    var initial_symtable=Dynlinkaux["Symtable"][18](0);
    
    var initial_crc=crc_interfaces[1];
    
    try
     {loadfile(file_name);
      Dynlinkaux["Symtable"][20](initial_symtable);
      return crc_interfaces[1]=initial_crc,0;
      }
    catch(exn)
     {Dynlinkaux["Symtable"][20](initial_symtable);
      crc_interfaces[1]=initial_crc,0;
      throw exn;
      }
    };

var
 error_message=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:return "this object file uses unsafe features";}}
    else
     {switch(param[0])
       {case 0:
         var name=param[1];
         
         return Pervasives["^"](name," is not a bytecode object file");
         
        case 1:
         var name$1=param[1];
         
         return Pervasives["^"]("interface mismatch on ",name$1);
         
        case 2:
         var name$2=param[1];
         
         return Pervasives["^"]("no implementation available for ",name$2);
         
        case 3:
         var match$1=param[2];
         
         var name$3=param[1];
         
         switch(match$1)
          {case 0:
            var s=match$1[1];
            
            return Pervasives["^"]
                    ("error while linking ",
                     Pervasives["^"]
                      (name$3,
                       Pervasives["^"]
                        (".\n",
                         Pervasives["^"]
                          ("Reference to undefined global `",Pervasives["^"](s,"'")))));
            
           case 1:
            var name$4=name$3;
            
            var s$1=match$1[1];
            
            return Pervasives["^"]
                    ("error while linking ",
                     Pervasives["^"]
                      (name$4,
                       Pervasives["^"]
                        (".\n",
                         Pervasives["^"]
                          ("The external function `",
                           Pervasives["^"](s$1,"' is not available")))));
            
           case 2:
            var name$5=name$3;
            
            var s$2=match$1[1];
            
            return Pervasives["^"]
                    ("error while linking ",
                     Pervasives["^"]
                      (name$5,
                       Pervasives["^"]
                        (".\n",
                         Pervasives["^"]
                          ("The module `",
                           Pervasives["^"](s$2,"' is not yet initialized")))));
            
           }
         
        case 4:
         var name$6=param[1];
         
         return Pervasives["^"]("corrupted interface file ",name$6);
         
        case 5:
         var name$7=param[1];
         
         return Pervasives["^"]
                 ("cannot find file ",
                  Pervasives["^"](name$7," in search path"));
         
        case 6:
         var reason=param[1];
         
         return Pervasives["^"]("error loading shared library: ",reason);
         
        case 7:
         var name$8=param[1];
         
         return Pervasives["^"]("implementation mismatch on ",name$8);
         
        }}
    };

var is_native=0;

var adapt_filename=function(f){return f;};

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

