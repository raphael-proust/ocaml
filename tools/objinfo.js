// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Scanf=require("./scanf.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Arg=require("./arg.js");
var Printf=require("./printf.js");
var Cmt_format=require("./cmt_format.js");
var Digest=require("./digest.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Printclambda=require("./printclambda.js");
var Bytesections=require("./bytesections.js");
var Filename=require("./filename.js");
var $$Array=require("./array.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var
 input_stringlist=
  function(ic,len)
   {var
     get_string_list=
      function(sect,len)
       {var
         fold=
          function(s,e,acc)
           {if(e!==len)
             {if(sect[e]===0)
               {return fold
                        (e+1,e+1,/* :: */[0,$$String["sub"](sect,s,e-s),acc]);
                }
              else
               {return fold(s,e+1,acc);}
              }
            else
             {return acc;}
            };
        
        return fold(0,0,/* [] */0);
        };
    
    var sect=Pervasives["really_input_string"](ic,len);
    
    return get_string_list(sect,len);
    };

var dummy_crc=$$String["make"](32,45);

var
 print_name_crc=
  function(param)
   {var crco=param[2];
    
    if(crco){var crc=Digest["to_hex"](crco[1]);}else{var crc=dummy_crc;}
    
    return Printf["printf"]
            ([/* Format */0,
              [/* Char_literal */12,
               9,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 9,
                 [/* String */2,
                  /* No_padding */0,
                  [/* Char_literal */12,10,/* End_of_format */0]]]]],
              "\t%s\t%s\n"],
             crc,
             param[1]);
    };

var
 print_line=
  function(name)
   {return Printf["printf"]
            ([/* Format */0,
              [/* Char_literal */12,
               9,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,10,/* End_of_format */0]]],
              "\t%s\n"],
             name);
    };

var
 print_cmo_infos=
  function(cu)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Unit name: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "Unit name: %s\n"],
      cu[1]);
    Pervasives["print_string"]("Interfaces imported:\n");
    List["iter"](print_name_crc,cu[5]);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Uses unsafe features: ",/* End_of_format */0],
       "Uses unsafe features: "]);
    var l=cu[6];
    
    if(l)
     {Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,"YES\n",/* End_of_format */0],
         "YES\n"]),
      Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,
          "Primitives declared in this module:\n",
          /* End_of_format */0],
         "Primitives declared in this module:\n"]),
      List["iter"](print_line,l)}
    else
     {Printf["printf"]
       ([/* Format */0,
         [/* String_literal */11,"no\n",/* End_of_format */0],
         "no\n"])}
    
    return Printf["printf"]
            ([/* Format */0,
              [/* String_literal */11,
               "Force link: ",
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,10,/* End_of_format */0]]],
              "Force link: %s\n"],
             cu[7]?"YES":"no");
    };

var
 print_spaced_string=
  function(s)
   {return Printf["printf"]
            ([/* Format */0,
              [/* Char_literal */12,
               32,
               [/* String */2,/* No_padding */0,/* End_of_format */0]],
              " %s"],
             s);
    };

var
 print_cma_infos=
  function(lib)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Force custom: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "Force custom: %s\n"],
      lib[2]?"YES":"no");
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Extra C object files:",/* End_of_format */0],
       "Extra C object files:"]);
    List["iter"](print_spaced_string,List["rev"](lib[3]));
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"\nExtra C options:",/* End_of_format */0],
       "\nExtra C options:"]);
    List["iter"](print_spaced_string,lib[4]);
    Printf["printf"]
     ([/* Format */0,[/* Char_literal */12,10,/* End_of_format */0],"\n"]);
    Pervasives["print_string"]("Extra dynamically-loaded libraries:");
    List["iter"](print_spaced_string,lib[5]);
    Printf["printf"]
     ([/* Format */0,[/* Char_literal */12,10,/* End_of_format */0],"\n"]);
    return List["iter"](print_cmo_infos,lib[1]);
    };

var
 print_cmi_infos=
  function(name,crcs)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Unit name: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "Unit name: %s\n"],
      name);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Interfaces imported:\n",/* End_of_format */0],
       "Interfaces imported:\n"]);
    return List["iter"](print_name_crc,crcs);
    };

var
 print_cmt_infos=
  function(cmt)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Cmt unit name: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "Cmt unit name: %s\n"],
      cmt[1]);
    Pervasives["print_string"]("Cmt interfaces imported:\n");
    List["iter"](print_name_crc,cmt[11]);
    var match=cmt[6];
    
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Source file: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "Source file: %s\n"],
      match?match[1]:"(none)");
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Compilation flags:",/* End_of_format */0],
       "Compilation flags:"]);
    $$Array["iter"](print_spaced_string,cmt[5]);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"\nLoad path:",/* End_of_format */0],
       "\nLoad path:"]);
    List["iter"](print_spaced_string,cmt[8]);
    Printf["printf"]
     ([/* Format */0,[/* Char_literal */12,10,/* End_of_format */0],"\n"]);
    var match$1=cmt[12];
    
    return Printf["printf"]
            ([/* Format */0,
              [/* String_literal */11,
               "cmt interface digest: ",
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,10,/* End_of_format */0]]],
              "cmt interface digest: %s\n"],
             match$1?Digest["to_hex"](match$1[1]):"");
    };

var
 print_general_infos=
  function(name,crc,defines,cmi,cmx)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Name: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "Name: %s\n"],
      name);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "CRC of implementation: ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "CRC of implementation: %s\n"],
      Digest["to_hex"](crc));
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Globals defined:\n",/* End_of_format */0],
       "Globals defined:\n"]);
    List["iter"](print_line,defines);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Interfaces imported:\n",/* End_of_format */0],
       "Interfaces imported:\n"]);
    List["iter"](print_name_crc,cmi);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Implementations imported:\n",
        /* End_of_format */0],
       "Implementations imported:\n"]);
    return List["iter"](print_name_crc,cmx);
    };

var
 print_cmx_infos=
  function(param)
   {var ui=param[1];
    
    print_general_infos(ui[1],param[2],ui[3],ui[4],ui[5]);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Approximation:\n",/* End_of_format */0],
       "Approximation:\n"]);
    Format["fprintf"]
     (Format["std_formatter"],
      [/* Format */0,
       [/* String_literal */11,
        "  ",
        [/* Alpha */15,
         [/* Formatting_lit */17,/* Flush_newline */4,/* End_of_format */0]]],
       "  %a@."],
      Printclambda["approx"],
      ui[6]);
    var
     pr_funs=
      function(param$1,fns)
       {return List["iter"]
                (function(arity)
                  {return Printf["printf"]
                           ([/* Format */0,
                             [/* Char_literal */12,
                              32,
                              [/* Int */4,
                               /* Int_d */0,
                               /* No_padding */0,
                               /* No_precision */0,
                               /* End_of_format */0]],
                             " %d"],
                            arity);
                   },
                 fns);
        };
    
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Currying functions:",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "Currying functions:%a\n"],
      pr_funs,
      ui[7]);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Apply functions:",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "Apply functions:%a\n"],
      pr_funs,
      ui[8]);
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "Send functions:",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "Send functions:%a\n"],
      pr_funs,
      ui[9]);
    return Printf["printf"]
            ([/* Format */0,
              [/* String_literal */11,
               "Force link: ",
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,10,/* End_of_format */0]]],
              "Force link: %s\n"],
             ui[10]?"YES":"no");
    };

var
 print_cmxa_infos=
  function(lib)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"Extra C object files:",/* End_of_format */0],
       "Extra C object files:"]);
    List["iter"](print_spaced_string,List["rev"](lib[2]));
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,"\nExtra C options:",/* End_of_format */0],
       "\nExtra C options:"]);
    List["iter"](print_spaced_string,lib[3]);
    Printf["printf"]
     ([/* Format */0,[/* Char_literal */12,10,/* End_of_format */0],"\n"]);
    return List["iter"](print_cmx_infos,lib[1]);
    };

var
 print_cmxs_infos=
  function(header)
   {return List["iter"]
            (function(ui)
              {return print_general_infos(ui[1],ui[2],ui[5],ui[3],ui[4]);},
             header[2]);
    };

var
 p_title=
  function(title)
   {return Printf["printf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,":\n",/* End_of_format */0]],
              "%s:\n"],
             title);
    };

var
 p_section=
  function(title,l)
   {if(l)
     {p_title(title);return List["iter"](print_name_crc,l);}
    else
     {return /* () */0;}
    };

var
 p_list=
  function(title,print,l)
   {if(l){p_title(title);return List["iter"](print,l);}else{return /* () */0;}
    };

var
 dump_byte=
  function(ic)
   {Bytesections["read_toc"](ic);
    var toc=Bytesections["toc"](/* () */0);
    
    var
     toc$1=
      List["sort"]
       (function(prim,prim$1)
         {return CamlPrimitive["caml_compare"](prim,prim$1);},
        toc);
    
    return List["iter"]
            (function(param)
              {var section=param[1];
               
               try
                {var len=Bytesections["seek_section"](ic,section);
                 
                 if(len>0)
                  {var exit;
                   
                   switch(section)
                    {case "CRCS":
                      return p_section
                              ("Imported units",Pervasives["input_value"](ic));
                      
                     case "DLLS":
                      return p_list
                              ("Used DLLs",print_line,input_stringlist(ic,len));
                      
                     case "DLPT":
                      return p_list
                              ("Additional DLL paths",print_line,input_stringlist(ic,len));
                      
                     case "PRIM":
                      return p_list
                              ("Primitives used",print_line,input_stringlist(ic,len));
                      
                     default:exit=29;}
                   
                   switch(exit){case 29:return /* () */0;}
                   }
                 else
                  {return 0;}
                 }
               catch(exn){return /* () */0;}
               },
             toc$1);
    };

var
 read_dyn_header=
  function(filename,ic)
   {var tempfile=Filename["temp_file"](/* None */0,"objinfo",".out");
    
    var
     helper=
      Filename["concat"](Config["standard_library"],"objinfo_helper");
    
    try
     {return Misc["try_finally"]
              (function(param)
                {var
                  rc=
                   CamlPrimitive["caml_sys_system_command"]
                    (Printf["sprintf"]
                      ([/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          32,
                          [/* String */2,
                           /* No_padding */0,
                           [/* String_literal */11,
                            " > ",
                            [/* String */2,/* No_padding */0,/* End_of_format */0]]]]],
                        "%s %s > %s"],
                       Filename["quote"](helper),
                       Filename["quote"](filename),
                       tempfile));
                 
                 if(rc!==0){Pervasives["failwith"]("cannot read")}else{}
                 
                 var tc=Pervasives["open_in"](tempfile);
                 
                 return Misc["try_finally"]
                         (function(param$1)
                           {var
                             ofs=
                              Scanf["fscanf"]
                               (tc,
                                [/* Format */0,
                                 [/* Int64 */7,
                                  /* Int_d */0,
                                  /* No_padding */0,
                                  /* No_precision */0,
                                  /* End_of_format */0],
                                 "%Ld"],
                                function(x){return x;});
                            
                            Pervasives["LargeFile"][4](ic,ofs);
                            return /* Some */[0,Pervasives["input_value"](ic)];
                            },
                          function(param$1){return Pervasives["close_in"](tc);});
                 },
               function(param){return Misc["remove_file"](tempfile);});
      }
    catch(exn)
     {var exit;
      
      if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
       {exit=20;}
      else
       {if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
         {exit=20;}
        else
         {throw exn;}
        }
      
      switch(exit){case 20:return /* None */0;}
      }
    };

var
 dump_obj=
  function(filename)
   {Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "File ",
        [/* String */2,
         /* No_padding */0,
         [/* Char_literal */12,10,/* End_of_format */0]]],
       "File %s\n"],
      filename);
    var ic=Pervasives["open_in_bin"](filename);
    
    var len_magic_number=Config["cmo_magic_number"]["length"];
    
    var magic_number=Pervasives["really_input_string"](ic,len_magic_number);
    
    if
     (CamlPrimitive["caml_string_equal"]
       (magic_number,Config["cmo_magic_number"]))
     {var cu_pos=Pervasives["input_binary_int"](ic);
      
      Pervasives["seek_in"](ic,cu_pos);
      var cu=Pervasives["input_value"](ic);
      
      Pervasives["close_in"](ic);
      return print_cmo_infos(cu);
      }
    else
     {if
       (CamlPrimitive["caml_string_equal"]
         (magic_number,Config["cma_magic_number"]))
       {var toc_pos=Pervasives["input_binary_int"](ic);
        
        Pervasives["seek_in"](ic,toc_pos);
        var toc=Pervasives["input_value"](ic);
        
        Pervasives["close_in"](ic);
        return print_cma_infos(toc);
        }
      else
       {if
         (CamlPrimitive["caml_string_equal"]
           (magic_number,Config["cmi_magic_number"])||
          CamlPrimitive["caml_string_equal"]
           (magic_number,Config["cmt_magic_number"]))
         {Pervasives["close_in"](ic);
          var match=Cmt_format["read"](filename);
          
          var cmt=match[2];
          
          var cmi=match[1];
          
          if(cmi){var cmi$1=cmi[1];print_cmi_infos(cmi$1[1],cmi$1[3])}else{}
          
          if(cmt){return print_cmt_infos(cmt[1]);}else{return /* () */0;}
          }
        else
         {if
           (CamlPrimitive["caml_string_equal"]
             (magic_number,Config["cmx_magic_number"]))
           {var ui=Pervasives["input_value"](ic);
            
            var crc=Digest["input"](ic);
            
            Pervasives["close_in"](ic);
            return print_cmx_infos(/* tuple */[0,ui,crc]);
            }
          else
           {if
             (CamlPrimitive["caml_string_equal"]
               (magic_number,Config["cmxa_magic_number"]))
             {var li=Pervasives["input_value"](ic);
              
              Pervasives["close_in"](ic);
              return print_cmxa_infos(li);
              }
            else
             {var
               pos_trailer=
                Pervasives["in_channel_length"](ic)-len_magic_number;
              
              var match$1=Pervasives["seek_in"](ic,pos_trailer);
              
              var
               magic_number$1=
                Pervasives["really_input_string"](ic,len_magic_number);
              
              if
               (CamlPrimitive["caml_string_equal"]
                 (magic_number$1,Config["exec_magic_number"]))
               {dump_byte(ic);return Pervasives["close_in"](ic);}
              else
               {if(Filename["check_suffix"](filename,".cmxs"))
                 {Pervasives["flush"](Pervasives["stdout"]);
                  var match$2=read_dyn_header(filename,ic);
                  
                  if(match$2)
                   {var header=match$2[1];
                    
                    if
                     (CamlPrimitive["caml_string_equal"]
                       (header[1],Config["cmxs_magic_number"]))
                     {print_cmxs_infos(header)}
                    else
                     {Printf["printf"]
                       ([/* Format */0,
                         [/* String_literal */11,
                          "Wrong magic number\n",
                          /* End_of_format */0],
                         "Wrong magic number\n"]),
                      Pervasives["exit"](2)}
                    
                    return Pervasives["close_in"](ic);
                    }
                  else
                   {Printf["printf"]
                     ([/* Format */0,
                       [/* String_literal */11,
                        "Unable to read info on file ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,10,/* End_of_format */0]]],
                       "Unable to read info on file %s\n"],
                      filename);
                    return Pervasives["exit"](2);
                    }
                  }
                else
                 {Printf["printf"]
                   ([/* Format */0,
                     [/* String_literal */11,
                      "Not an OCaml object file\n",
                      /* End_of_format */0],
                     "Not an OCaml object file\n"]);
                  return Pervasives["exit"](2);
                  }
                }
              }
            }
          }
        }
      }
    };

var arg_list=/* [] */0;

var
 arg_usage=
  Printf["sprintf"]
   ([/* Format */0,
     [/* String */2,
      /* No_padding */0,
      [/* String_literal */11,
       " [OPTIONS] FILES : give information on files",
       /* End_of_format */0]],
     "%s [OPTIONS] FILES : give information on files"],
    Sys["argv"][1]);

var
 main=
  function(param)
   {Arg["parse"](arg_list,dump_obj,arg_usage);return Pervasives["exit"](0);};

main(/* () */0);
module["exports"]=
{"input_stringlist":input_stringlist,
 "dummy_crc":dummy_crc,
 "print_name_crc":print_name_crc,
 "print_line":print_line,
 "print_cmo_infos":print_cmo_infos,
 "print_spaced_string":print_spaced_string,
 "print_cma_infos":print_cma_infos,
 "print_cmi_infos":print_cmi_infos,
 "print_cmt_infos":print_cmt_infos,
 "print_general_infos":print_general_infos,
 "print_cmx_infos":print_cmx_infos,
 "print_cmxa_infos":print_cmxa_infos,
 "print_cmxs_infos":print_cmxs_infos,
 "p_title":p_title,
 "p_section":p_section,
 "p_list":p_list,
 "dump_byte":dump_byte,
 "read_dyn_header":read_dyn_header,
 "dump_obj":dump_obj,
 "arg_list":arg_list,
 "arg_usage":arg_usage,
 "main":main};

