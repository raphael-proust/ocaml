// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Opcodes=require("./opcodes.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Arg=require("./arg.js");
var Printf=require("./printf.js");
var Obj=require("./obj.js");
var Bytesections=require("./bytesections.js");
var Opnames=require("./opnames.js");
var Tbl=require("./tbl.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var Config=require("./config.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var print_locations=[0,/* true */1];

var
 inputu=
  function(ic)
   {var b1=Pervasives["input_byte"](ic);
    
    var b2=Pervasives["input_byte"](ic);
    
    var b3=Pervasives["input_byte"](ic);
    
    var b4=Pervasives["input_byte"](ic);
    
    return (b4<<24)+(b3<<16)+(b2<<8)+b1;
    };

var
 inputs=
  function(ic)
   {var b1=Pervasives["input_byte"](ic);
    
    var b2=Pervasives["input_byte"](ic);
    
    var b3=Pervasives["input_byte"](ic);
    
    var b4=Pervasives["input_byte"](ic);
    
    if(b4>=128){var b4$prime=b4-256;}else{var b4$prime=b4;}
    
    return (b4$prime<<24)+(b3<<16)+(b2<<8)+b1;
    };

var start=[0,0];

var reloc=[0,/* [] */0];

var globals=[0,[/* array */0]];

var primitives=[0,[/* array */0]];

var objfile=[0,/* false */0];

var event_table=Hashtbl["create"](/* None */0,253);

var
 relocate_event=
  function(orig,ev)
   {ev[1]=orig+ev[1];
    var match=ev[10];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=69;}}
    else
     {switch(match[0]){case 0:return match[1][1]=ev[1],0;case 1:exit=69;}}
    
    switch(exit){case 69:return /* () */0;}
    };

var
 record_events=
  function(orig,evl)
   {return List["iter"]
            (function(ev)
              {relocate_event(orig,ev);
               return Hashtbl["add"](event_table,ev[1],ev);
               },
             evl);
    };

var
 print_float=
  function(f)
   {if($$String["contains"](f,46))
     {return Printf["printf"]
              ([/* Format */0,
                [/* String */2,/* No_padding */0,/* End_of_format */0],
                "%s"],
               f);
      }
    else
     {return Printf["printf"]
              ([/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,46,/* End_of_format */0]],
                "%s."],
               f);
      }
    };

var
 print_struct_const=
  function(param)
   {switch(param[0])
     {case 0:
       var match=param[1];
       
       switch(match[0])
        {case 0:
          return Printf["printf"]
                  ([/* Format */0,
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0],
                    "%d"],
                   match[1]);
          
         case 1:
          return Printf["printf"]
                  ([/* Format */0,
                    [/* Caml_char */1,/* End_of_format */0],
                    "%C"],
                   match[1]);
          
         case 2:
          return Printf["printf"]
                  ([/* Format */0,
                    [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                    "%S"],
                   match[1]);
          
         case 3:return print_float(match[1]);
         case 4:
          return Printf["printf"]
                  ([/* Format */0,
                    [/* Int32 */5,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,108,/* End_of_format */0]],
                    "%ldl"],
                   match[1]);
          
         case 5:
          return Printf["printf"]
                  ([/* Format */0,
                    [/* Int64 */7,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,76,/* End_of_format */0]],
                    "%LdL"],
                   match[1]);
          
         case 6:
          return Printf["printf"]
                  ([/* Format */0,
                    [/* Nativeint */6,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,110,/* End_of_format */0]],
                    "%ndn"],
                   match[1]);
          
         }
       
      case 1:
       return Printf["printf"]
               ([/* Format */0,
                 [/* Int */4,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,97,/* End_of_format */0]],
                 "%da"],
                param[1]);
       
      case 2:
       var args=param[3];
       
       Printf["printf"]
        ([/* Format */0,
          [/* Char_literal */12,
           60,
           [/* Int */4,
            /* Int_d */0,
            /* No_padding */0,
            /* No_precision */0,
            [/* Char_literal */12,62,/* End_of_format */0]]],
          "<%d>"],
         param[1]);
       if(args)
        {var al=args[2];
         
         var a1=args[1];
         
         if(al)
          {Printf["printf"]
            ([/* Format */0,
              [/* Char_literal */12,40,/* End_of_format */0],
              "("]);
           print_struct_const(a1);
           List["iter"]
            (function(a)
              {Printf["printf"]
                ([/* Format */0,
                  [/* String_literal */11,", ",/* End_of_format */0],
                  ", "]);
               return print_struct_const(a);
               },
             al);
           return Printf["printf"]
                   ([/* Format */0,
                     [/* Char_literal */12,41,/* End_of_format */0],
                     ")"]);
           }
         else
          {Printf["printf"]
            ([/* Format */0,
              [/* Char_literal */12,40,/* End_of_format */0],
              "("]);
           print_struct_const(a1);
           return Printf["printf"]
                   ([/* Format */0,
                     [/* Char_literal */12,41,/* End_of_format */0],
                     ")"]);
           }
         }
       else
        {return /* () */0;}
       
      case 3:
       Printf["printf"]
        ([/* Format */0,
          [/* String_literal */11,"[|",/* End_of_format */0],
          "[|"]);
       List["iter"]
        (function(f)
          {print_float(f);
           return Printf["printf"]
                   ([/* Format */0,
                     [/* String_literal */11,"; ",/* End_of_format */0],
                     "; "]);
           },
         param[1]);
       return Printf["printf"]
               ([/* Format */0,
                 [/* String_literal */11,"|]",/* End_of_format */0],
                 "|]"]);
       
      case 4:
       return Printf["printf"]
               ([/* Format */0,
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                 "%S"],
                param[1]);
       
      }
    };

var same_custom=function(x,y){return CamlPrimitive["caml_equal"](x[1],y[1]);};

var
 print_obj=
  function(x)
   {if(CamlPrimitive["caml_obj_is_block"](x))
     {var tag=CamlPrimitive["caml_obj_tag"](x);
      
      if(tag===Obj["string_tag"])
       {return Printf["printf"]
                ([/* Format */0,
                  [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                  "%S"],
                 x);
        }
      else
       {if(tag===Obj["double_tag"])
         {return Printf["printf"]
                  ([/* Format */0,
                    [/* Float */8,
                     /* Float_g */9,
                     /* No_padding */0,
                     [/* Lit_precision */0,12],
                     /* End_of_format */0],
                    "%.12g"],
                   x);
          }
        else
         {if(tag===Obj["double_array_tag"])
           {var a=x;
            
            Printf["printf"]
             ([/* Format */0,
               [/* String_literal */11,"[|",/* End_of_format */0],
               "[|"]);
            for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++)
             {if(i>0)
               {Printf["printf"]
                 ([/* Format */0,
                   [/* String_literal */11,", ",/* End_of_format */0],
                   ", "])}
              else
               {}
              
              Printf["printf"]
               ([/* Format */0,
                 [/* Float */8,
                  /* Float_g */9,
                  /* No_padding */0,
                  [/* Lit_precision */0,12],
                  /* End_of_format */0],
                 "%.12g"],
                a[i+1])}
            
            return Printf["printf"]
                    ([/* Format */0,
                      [/* String_literal */11,"|]",/* End_of_format */0],
                      "|]"]);
            }
          else
           {if(tag===Obj["custom_tag"]&&same_custom(x,0))
             {return Printf["printf"]
                      ([/* Format */0,
                        [/* Int32 */5,
                         /* Int_d */0,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* Char_literal */12,108,/* End_of_format */0]],
                        "%ldl"],
                       x);
              }
            else
             {if(tag===Obj["custom_tag"]&&same_custom(x,0))
               {return Printf["printf"]
                        ([/* Format */0,
                          [/* Nativeint */6,
                           /* Int_d */0,
                           /* No_padding */0,
                           /* No_precision */0,
                           [/* Char_literal */12,110,/* End_of_format */0]],
                          "%ndn"],
                         x);
                }
              else
               {if(tag===Obj["custom_tag"]&&same_custom(x,0))
                 {return Printf["printf"]
                          ([/* Format */0,
                            [/* Int64 */7,
                             /* Int_d */0,
                             /* No_padding */0,
                             /* No_precision */0,
                             [/* Char_literal */12,76,/* End_of_format */0]],
                            "%LdL"],
                           x);
                  }
                else
                 {if(tag<Obj["no_scan_tag"])
                   {Printf["printf"]
                     ([/* Format */0,
                       [/* Char_literal */12,
                        60,
                        [/* Int */4,
                         /* Int_d */0,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* Char_literal */12,62,/* End_of_format */0]]],
                       "<%d>"],
                      CamlPrimitive["caml_obj_tag"](x));
                    var n=/* -1 for tag */x["length"]-1;
                    
                    if(n!==0)
                     {if(n!==1)
                       {Printf["printf"]
                         ([/* Format */0,
                           [/* Char_literal */12,40,/* End_of_format */0],
                           "("]);
                        print_obj(x[1]);
                        for(var i$1=1;i$1<=n-1;i$1++)
                         {Printf["printf"]
                           ([/* Format */0,
                             [/* String_literal */11,", ",/* End_of_format */0],
                             ", "]),
                          print_obj(x[i$1+1])}
                        
                        return Printf["printf"]
                                ([/* Format */0,
                                  [/* Char_literal */12,41,/* End_of_format */0],
                                  ")"]);
                        }
                      else
                       {Printf["printf"]
                         ([/* Format */0,
                           [/* Char_literal */12,40,/* End_of_format */0],
                           "("]);
                        print_obj(x[1]);
                        return Printf["printf"]
                                ([/* Format */0,
                                  [/* Char_literal */12,41,/* End_of_format */0],
                                  ")"]);
                        }
                      }
                    else
                     {return /* () */0;}
                    }
                  else
                   {return Printf["printf"]
                            ([/* Format */0,
                              [/* String_literal */11,
                               "<tag ",
                               [/* Int */4,
                                /* Int_d */0,
                                /* No_padding */0,
                                /* No_precision */0,
                                [/* Char_literal */12,62,/* End_of_format */0]]],
                              "<tag %d>"],
                             tag);
                    }
                  }
                }
              }
            }
          }
        }
      }
    else
     {return Printf["printf"]
              ([/* Format */0,
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0],
                "%d"],
               x);
      }
    };

var currpos=function(ic){return Pervasives["pos_in"](ic)-start[1];};

var
 rassoc=
  function(key,param)
   {if(param)
     {var match=param[1];
      
      if(CamlPrimitive["caml_equal"](match[2],key))
       {return match[1];}
      else
       {return rassoc(key,param[2]);}
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 find_reloc=
  function(ic){return rassoc(Pervasives["pos_in"](ic)-start[1],reloc[1]);};

var
 print_getglobal_name=
  function(ic)
   {if(objfile[1])
     {try
       {var match=find_reloc(ic);
        
        var exit;
        
        switch(match[0])
         {case 0:print_struct_const(match[1]);
          case 1:Pervasives["print_string"](Ident["name"](match[1]));
          case 2:exit=58;
          case 3:exit=58;
          }
        
        switch(exit){case 58:Pervasives["print_string"]("<wrong reloc>")}
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {Pervasives["print_string"]("<no reloc>")}
        else
         {throw exn;}
        }
      
      return inputu(ic);
      }
    else
     {var n=inputu(ic);
      
      if(n>=/* -1 for tag */globals[1]["length"]-1||n<0)
       {return Pervasives["print_string"]("<global table overflow>");}
      else
       {var match$1=globals[1][n+1];
        
        if(typeof match$1==="number")
         {switch(match$1){case 0:return Pervasives["print_string"]("???");}}
        else
         {switch(match$1[0])
           {case 0:
             return Pervasives["print_string"](Ident["name"](match$1[1]));
            case 1:return print_obj(match$1[1]);
            }}
        }
      }
    };

var
 print_setglobal_name=
  function(ic)
   {if(objfile[1])
     {try
       {var match=find_reloc(ic);
        
        switch(match[0])
         {case 2:Pervasives["print_string"](Ident["name"](match[1]));
          default:Pervasives["print_string"]("<wrong reloc>")}
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {Pervasives["print_string"]("<no reloc>")}
        else
         {throw exn;}
        }
      
      return inputu(ic);
      }
    else
     {var n=inputu(ic);
      
      if(n>=/* -1 for tag */globals[1]["length"]-1||n<0)
       {return Pervasives["print_string"]("<global table overflow>");}
      else
       {var match$1=globals[1][n+1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){case 0:exit=50;}}
        else
         {switch(match$1[0])
           {case 0:
             return Pervasives["print_string"](Ident["name"](match$1[1]));
            case 1:exit=50;
            }}
        
        switch(exit){case 50:return Pervasives["print_string"]("???");}
        }
      }
    };

var
 print_primitive=
  function(ic)
   {if(objfile[1])
     {try
       {var match=find_reloc(ic);
        
        switch(match[0])
         {case 3:Pervasives["print_string"](match[1]);
          default:Pervasives["print_string"]("<wrong reloc>")}
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {Pervasives["print_string"]("<no reloc>")}
        else
         {throw exn;}
        }
      
      return inputu(ic);
      }
    else
     {var n=inputu(ic);
      
      if(n>=/* -1 for tag */primitives[1]["length"]-1||n<0)
       {return Pervasives["print_int"](n);}
      else
       {return Pervasives["print_string"](primitives[1][n+1]);}
      }
    };

var currpc=function(ic){return currpos(ic)/4;};

var
 op_shapes=
  /* :: */[0,
   /* tuple */[0,Opcodes["opACC0"],/* Nothing */0],
   /* :: */[0,
    /* tuple */[0,Opcodes["opACC1"],/* Nothing */0],
    /* :: */[0,
     /* tuple */[0,Opcodes["opACC2"],/* Nothing */0],
     /* :: */[0,
      /* tuple */[0,Opcodes["opACC3"],/* Nothing */0],
      /* :: */[0,
       /* tuple */[0,Opcodes["opACC4"],/* Nothing */0],
       /* :: */[0,
        /* tuple */[0,Opcodes["opACC5"],/* Nothing */0],
        /* :: */[0,
         /* tuple */[0,Opcodes["opACC6"],/* Nothing */0],
         /* :: */[0,
          /* tuple */[0,Opcodes["opACC7"],/* Nothing */0],
          /* :: */[0,
           /* tuple */[0,Opcodes["opACC"],/* Uint */1],
           /* :: */[0,
            /* tuple */[0,Opcodes["opPUSH"],/* Nothing */0],
            /* :: */[0,
             /* tuple */[0,Opcodes["opPUSHACC0"],/* Nothing */0],
             /* :: */[0,
              /* tuple */[0,Opcodes["opPUSHACC1"],/* Nothing */0],
              /* :: */[0,
               /* tuple */[0,Opcodes["opPUSHACC2"],/* Nothing */0],
               /* :: */[0,
                /* tuple */[0,Opcodes["opPUSHACC3"],/* Nothing */0],
                /* :: */[0,
                 /* tuple */[0,Opcodes["opPUSHACC4"],/* Nothing */0],
                 /* :: */[0,
                  /* tuple */[0,Opcodes["opPUSHACC5"],/* Nothing */0],
                  /* :: */[0,
                   /* tuple */[0,Opcodes["opPUSHACC6"],/* Nothing */0],
                   /* :: */[0,
                    /* tuple */[0,Opcodes["opPUSHACC7"],/* Nothing */0],
                    /* :: */[0,
                     /* tuple */[0,Opcodes["opPUSHACC"],/* Uint */1],
                     /* :: */[0,
                      /* tuple */[0,Opcodes["opPOP"],/* Uint */1],
                      /* :: */[0,
                       /* tuple */[0,Opcodes["opASSIGN"],/* Uint */1],
                       /* :: */[0,
                        /* tuple */[0,Opcodes["opENVACC1"],/* Nothing */0],
                        /* :: */[0,
                         /* tuple */[0,Opcodes["opENVACC2"],/* Nothing */0],
                         /* :: */[0,
                          /* tuple */[0,Opcodes["opENVACC3"],/* Nothing */0],
                          /* :: */[0,
                           /* tuple */[0,Opcodes["opENVACC4"],/* Nothing */0],
                           /* :: */[0,
                            /* tuple */[0,Opcodes["opENVACC"],/* Uint */1],
                            /* :: */[0,
                             /* tuple */[0,Opcodes["opPUSHENVACC1"],/* Nothing */0],
                             /* :: */[0,
                              /* tuple */[0,Opcodes["opPUSHENVACC2"],/* Nothing */0],
                              /* :: */[0,
                               /* tuple */[0,Opcodes["opPUSHENVACC3"],/* Nothing */0],
                               /* :: */[0,
                                /* tuple */[0,Opcodes["opPUSHENVACC4"],/* Nothing */0],
                                /* :: */[0,
                                 /* tuple */[0,Opcodes["opPUSHENVACC"],/* Uint */1],
                                 /* :: */[0,
                                  /* tuple */[0,Opcodes["opPUSH_RETADDR"],/* Disp */4],
                                  /* :: */[0,
                                   /* tuple */[0,Opcodes["opAPPLY"],/* Uint */1],
                                   /* :: */[0,
                                    /* tuple */[0,Opcodes["opAPPLY1"],/* Nothing */0],
                                    /* :: */[0,
                                     /* tuple */[0,Opcodes["opAPPLY2"],/* Nothing */0],
                                     /* :: */[0,
                                      /* tuple */[0,Opcodes["opAPPLY3"],/* Nothing */0],
                                      /* :: */[0,
                                       /* tuple */[0,Opcodes["opAPPTERM"],/* Uint_Uint */3],
                                       /* :: */[0,
                                        /* tuple */[0,Opcodes["opAPPTERM1"],/* Uint */1],
                                        /* :: */[0,
                                         /* tuple */[0,Opcodes["opAPPTERM2"],/* Uint */1],
                                         /* :: */[0,
                                          /* tuple */[0,Opcodes["opAPPTERM3"],/* Uint */1],
                                          /* :: */[0,
                                           /* tuple */[0,Opcodes["opRETURN"],/* Uint */1],
                                           /* :: */[0,
                                            /* tuple */[0,Opcodes["opRESTART"],/* Nothing */0],
                                            /* :: */[0,
                                             /* tuple */[0,Opcodes["opGRAB"],/* Uint */1],
                                             /* :: */[0,
                                              /* tuple */[0,Opcodes["opCLOSURE"],/* Uint_Disp */5],
                                              /* :: */[0,
                                               /* tuple */[0,Opcodes["opCLOSUREREC"],/* Closurerec */13],
                                               /* :: */[0,
                                                /* tuple */[0,Opcodes["opOFFSETCLOSUREM2"],/* Nothing */0],
                                                /* :: */[0,
                                                 /* tuple */[0,Opcodes["opOFFSETCLOSURE0"],/* Nothing */0],
                                                 /* :: */[0,
                                                  /* tuple */[0,Opcodes["opOFFSETCLOSURE2"],/* Nothing */0],
                                                  /* :: */[0,
                                                   /* tuple */[0,Opcodes["opOFFSETCLOSURE"],/* Sint */2],
                                                   /* :: */[0,
                                                    /* tuple */[0,
                                                     Opcodes["opPUSHOFFSETCLOSUREM2"],
                                                     /* Nothing */0],
                                                    /* :: */[0,
                                                     /* tuple */[0,
                                                      Opcodes["opPUSHOFFSETCLOSURE0"],
                                                      /* Nothing */0],
                                                     /* :: */[0,
                                                      /* tuple */[0,
                                                       Opcodes["opPUSHOFFSETCLOSURE2"],
                                                       /* Nothing */0],
                                                      /* :: */[0,
                                                       /* tuple */[0,Opcodes["opPUSHOFFSETCLOSURE"],/* Sint */2],
                                                       /* :: */[0,
                                                        /* tuple */[0,Opcodes["opGETGLOBAL"],/* Getglobal */7],
                                                        /* :: */[0,
                                                         /* tuple */[0,Opcodes["opPUSHGETGLOBAL"],/* Getglobal */7],
                                                         /* :: */[0,
                                                          /* tuple */[0,
                                                           Opcodes["opGETGLOBALFIELD"],
                                                           /* Getglobal_Uint */8],
                                                          /* :: */[0,
                                                           /* tuple */[0,
                                                            Opcodes["opPUSHGETGLOBALFIELD"],
                                                            /* Getglobal_Uint */8],
                                                           /* :: */[0,
                                                            /* tuple */[0,Opcodes["opSETGLOBAL"],/* Setglobal */9],
                                                            /* :: */[0,
                                                             /* tuple */[0,Opcodes["opATOM0"],/* Nothing */0],
                                                             /* :: */[0,
                                                              /* tuple */[0,Opcodes["opATOM"],/* Uint */1],
                                                              /* :: */[0,
                                                               /* tuple */[0,Opcodes["opPUSHATOM0"],/* Nothing */0],
                                                               /* :: */[0,
                                                                /* tuple */[0,Opcodes["opPUSHATOM"],/* Uint */1],
                                                                /* :: */[0,
                                                                 /* tuple */[0,Opcodes["opMAKEBLOCK"],/* Uint_Uint */3],
                                                                 /* :: */[0,
                                                                  /* tuple */[0,Opcodes["opMAKEBLOCK1"],/* Uint */1],
                                                                  /* :: */[0,
                                                                   /* tuple */[0,Opcodes["opMAKEBLOCK2"],/* Uint */1],
                                                                   /* :: */[0,
                                                                    /* tuple */[0,Opcodes["opMAKEBLOCK3"],/* Uint */1],
                                                                    /* :: */[0,
                                                                     /* tuple */[0,Opcodes["opMAKEFLOATBLOCK"],/* Uint */1],
                                                                     /* :: */[0,
                                                                      /* tuple */[0,Opcodes["opGETFIELD0"],/* Nothing */0],
                                                                      /* :: */[0,
                                                                       /* tuple */[0,Opcodes["opGETFIELD1"],/* Nothing */0],
                                                                       /* :: */[0,
                                                                        /* tuple */[0,Opcodes["opGETFIELD2"],/* Nothing */0],
                                                                        /* :: */[0,
                                                                         /* tuple */[0,Opcodes["opGETFIELD3"],/* Nothing */0],
                                                                         /* :: */[0,
                                                                          /* tuple */[0,Opcodes["opGETFIELD"],/* Uint */1],
                                                                          /* :: */[0,
                                                                           /* tuple */[0,Opcodes["opGETFLOATFIELD"],/* Uint */1],
                                                                           /* :: */[0,
                                                                            /* tuple */[0,Opcodes["opSETFIELD0"],/* Nothing */0],
                                                                            /* :: */[0,
                                                                             /* tuple */[0,Opcodes["opSETFIELD1"],/* Nothing */0],
                                                                             /* :: */[0,
                                                                              /* tuple */[0,Opcodes["opSETFIELD2"],/* Nothing */0],
                                                                              /* :: */[0,
                                                                               /* tuple */[0,Opcodes["opSETFIELD3"],/* Nothing */0],
                                                                               /* :: */[0,
                                                                                /* tuple */[0,Opcodes["opSETFIELD"],/* Uint */1],
                                                                                /* :: */[0,
                                                                                 /* tuple */[0,Opcodes["opSETFLOATFIELD"],/* Uint */1],
                                                                                 /* :: */[0,
                                                                                  /* tuple */[0,Opcodes["opVECTLENGTH"],/* Nothing */0],
                                                                                  /* :: */[0,
                                                                                   /* tuple */[0,Opcodes["opGETVECTITEM"],/* Nothing */0],
                                                                                   /* :: */[0,
                                                                                    /* tuple */[0,Opcodes["opSETVECTITEM"],/* Nothing */0],
                                                                                    /* :: */[0,
                                                                                     /* tuple */[0,Opcodes["opGETSTRINGCHAR"],/* Nothing */0],
                                                                                     /* :: */[0,
                                                                                      /* tuple */[0,Opcodes["opSETSTRINGCHAR"],/* Nothing */0],
                                                                                      /* :: */[0,
                                                                                       /* tuple */[0,Opcodes["opBRANCH"],/* Disp */4],
                                                                                       /* :: */[0,
                                                                                        /* tuple */[0,Opcodes["opBRANCHIF"],/* Disp */4],
                                                                                        /* :: */[0,
                                                                                         /* tuple */[0,Opcodes["opBRANCHIFNOT"],/* Disp */4],
                                                                                         /* :: */[0,
                                                                                          /* tuple */[0,Opcodes["opSWITCH"],/* Switch */12],
                                                                                          /* :: */[0,
                                                                                           /* tuple */[0,Opcodes["opBOOLNOT"],/* Nothing */0],
                                                                                           /* :: */[0,
                                                                                            /* tuple */[0,Opcodes["opPUSHTRAP"],/* Disp */4],
                                                                                            /* :: */[0,
                                                                                             /* tuple */[0,Opcodes["opPOPTRAP"],/* Nothing */0],
                                                                                             /* :: */[0,
                                                                                              /* tuple */[0,Opcodes["opRAISE"],/* Nothing */0],
                                                                                              /* :: */[0,
                                                                                               /* tuple */[0,Opcodes["opCHECK_SIGNALS"],/* Nothing */0],
                                                                                               /* :: */[0,
                                                                                                /* tuple */[0,Opcodes["opC_CALL1"],/* Primitive */10],
                                                                                                /* :: */[0,
                                                                                                 /* tuple */[0,Opcodes["opC_CALL2"],/* Primitive */10],
                                                                                                 /* :: */[0,
                                                                                                  /* tuple */[0,Opcodes["opC_CALL3"],/* Primitive */10],
                                                                                                  /* :: */[0,
                                                                                                   /* tuple */[0,Opcodes["opC_CALL4"],/* Primitive */10],
                                                                                                   /* :: */[0,
                                                                                                    /* tuple */[0,Opcodes["opC_CALL5"],/* Primitive */10],
                                                                                                    /* :: */[0,
                                                                                                     /* tuple */[0,Opcodes["opC_CALLN"],/* Uint_Primitive */11],
                                                                                                     /* :: */[0,
                                                                                                      /* tuple */[0,Opcodes["opCONST0"],/* Nothing */0],
                                                                                                      /* :: */[0,
                                                                                                       /* tuple */[0,Opcodes["opCONST1"],/* Nothing */0],
                                                                                                       /* :: */[0,
                                                                                                        /* tuple */[0,Opcodes["opCONST2"],/* Nothing */0],
                                                                                                        /* :: */[0,
                                                                                                         /* tuple */[0,Opcodes["opCONST3"],/* Nothing */0],
                                                                                                         /* :: */[0,
                                                                                                          /* tuple */[0,Opcodes["opCONSTINT"],/* Sint */2],
                                                                                                          /* :: */[0,
                                                                                                           /* tuple */[0,Opcodes["opPUSHCONST0"],/* Nothing */0],
                                                                                                           /* :: */[0,
                                                                                                            /* tuple */[0,Opcodes["opPUSHCONST1"],/* Nothing */0],
                                                                                                            /* :: */[0,
                                                                                                             /* tuple */[0,Opcodes["opPUSHCONST2"],/* Nothing */0],
                                                                                                             /* :: */[0,
                                                                                                              /* tuple */[0,Opcodes["opPUSHCONST3"],/* Nothing */0],
                                                                                                              /* :: */[0,
                                                                                                               /* tuple */[0,Opcodes["opPUSHCONSTINT"],/* Sint */2],
                                                                                                               /* :: */[0,
                                                                                                                /* tuple */[0,Opcodes["opNEGINT"],/* Nothing */0],
                                                                                                                /* :: */[0,
                                                                                                                 /* tuple */[0,Opcodes["opADDINT"],/* Nothing */0],
                                                                                                                 /* :: */[0,
                                                                                                                  /* tuple */[0,Opcodes["opSUBINT"],/* Nothing */0],
                                                                                                                  /* :: */[0,
                                                                                                                   /* tuple */[0,Opcodes["opMULINT"],/* Nothing */0],
                                                                                                                   /* :: */[0,
                                                                                                                    /* tuple */[0,Opcodes["opDIVINT"],/* Nothing */0],
                                                                                                                    /* :: */[0,
                                                                                                                     /* tuple */[0,Opcodes["opMODINT"],/* Nothing */0],
                                                                                                                     /* :: */[0,
                                                                                                                      /* tuple */[0,Opcodes["opANDINT"],/* Nothing */0],
                                                                                                                      /* :: */[0,
                                                                                                                       /* tuple */[0,Opcodes["opORINT"],/* Nothing */0],
                                                                                                                       /* :: */[0,
                                                                                                                        /* tuple */[0,Opcodes["opXORINT"],/* Nothing */0],
                                                                                                                        /* :: */[0,
                                                                                                                         /* tuple */[0,Opcodes["opLSLINT"],/* Nothing */0],
                                                                                                                         /* :: */[0,
                                                                                                                          /* tuple */[0,Opcodes["opLSRINT"],/* Nothing */0],
                                                                                                                          /* :: */[0,
                                                                                                                           /* tuple */[0,Opcodes["opASRINT"],/* Nothing */0],
                                                                                                                           /* :: */[0,
                                                                                                                            /* tuple */[0,Opcodes["opEQ"],/* Nothing */0],
                                                                                                                            /* :: */[0,
                                                                                                                             /* tuple */[0,Opcodes["opNEQ"],/* Nothing */0],
                                                                                                                             /* :: */[0,
                                                                                                                              /* tuple */[0,Opcodes["opLTINT"],/* Nothing */0],
                                                                                                                              /* :: */[0,
                                                                                                                               /* tuple */[0,Opcodes["opLEINT"],/* Nothing */0],
                                                                                                                               /* :: */[0,
                                                                                                                                /* tuple */[0,Opcodes["opGTINT"],/* Nothing */0],
                                                                                                                                /* :: */[0,
                                                                                                                                 /* tuple */[0,Opcodes["opGEINT"],/* Nothing */0],
                                                                                                                                 /* :: */[0,
                                                                                                                                  /* tuple */[0,Opcodes["opOFFSETINT"],/* Sint */2],
                                                                                                                                  /* :: */[0,
                                                                                                                                   /* tuple */[0,Opcodes["opOFFSETREF"],/* Sint */2],
                                                                                                                                   /* :: */[0,
                                                                                                                                    /* tuple */[0,Opcodes["opISINT"],/* Nothing */0],
                                                                                                                                    /* :: */[0,
                                                                                                                                     /* tuple */[0,Opcodes["opGETMETHOD"],/* Nothing */0],
                                                                                                                                     /* :: */[0,
                                                                                                                                      /* tuple */[0,Opcodes["opGETDYNMET"],/* Nothing */0],
                                                                                                                                      /* :: */[0,
                                                                                                                                       /* tuple */[0,Opcodes["opGETPUBMET"],/* Pubmet */14],
                                                                                                                                       /* :: */[0,
                                                                                                                                        /* tuple */[0,Opcodes["opBEQ"],/* Sint_Disp */6],
                                                                                                                                        /* :: */[0,
                                                                                                                                         /* tuple */[0,Opcodes["opBNEQ"],/* Sint_Disp */6],
                                                                                                                                         /* :: */[0,
                                                                                                                                          /* tuple */[0,Opcodes["opBLTINT"],/* Sint_Disp */6],
                                                                                                                                          /* :: */[0,
                                                                                                                                           /* tuple */[0,Opcodes["opBLEINT"],/* Sint_Disp */6],
                                                                                                                                           /* :: */[0,
                                                                                                                                            /* tuple */[0,Opcodes["opBGTINT"],/* Sint_Disp */6],
                                                                                                                                            /* :: */[0,
                                                                                                                                             /* tuple */[0,Opcodes["opBGEINT"],/* Sint_Disp */6],
                                                                                                                                             /* :: */[0,
                                                                                                                                              /* tuple */[0,Opcodes["opULTINT"],/* Nothing */0],
                                                                                                                                              /* :: */[0,
                                                                                                                                               /* tuple */[0,Opcodes["opUGEINT"],/* Nothing */0],
                                                                                                                                               /* :: */[0,
                                                                                                                                                /* tuple */[0,Opcodes["opBULTINT"],/* Uint_Disp */5],
                                                                                                                                                /* :: */[0,
                                                                                                                                                 /* tuple */[0,Opcodes["opBUGEINT"],/* Uint_Disp */5],
                                                                                                                                                 /* :: */[0,
                                                                                                                                                  /* tuple */[0,Opcodes["opSTOP"],/* Nothing */0],
                                                                                                                                                  /* :: */[0,
                                                                                                                                                   /* tuple */[0,Opcodes["opEVENT"],/* Nothing */0],
                                                                                                                                                   /* :: */[0,
                                                                                                                                                    /* tuple */[0,Opcodes["opBREAK"],/* Nothing */0],
                                                                                                                                                    /* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

var
 print_event=
  function(ev)
   {if(print_locations[1])
     {var ls=ev[3][1];
      
      var le=ev[3][2];
      
      return Printf["printf"]
              ([/* Format */0,
                [/* String_literal */11,
                 'File "',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '", line ',
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* String_literal */11,
                     ", characters ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* Char_literal */12,
                       45,
                       [/* Int */4,
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* String_literal */11,":\n",/* End_of_format */0]]]]]]]]],
                'File "%s", line %d, characters %d-%d:\n'],
               ls[1],
               ls[2],
               ls[4]-ls[3],
               le[4]-ls[3]);
      }
    else
     {return 0;}
    };

var
 print_instr=
  function(ic)
   {var pos=currpos(ic);
    
    List["iter"](print_event,Hashtbl["find_all"](event_table,pos));
    Printf["printf"]
     ([/* Format */0,
       [/* Int */4,
        /* Int_d */0,
        [/* Lit_padding */0,/* Right */1,8],
        /* No_precision */0,
        [/* String_literal */11,"  ",/* End_of_format */0]],
       "%8d  "],
      pos/4);
    var op=inputu(ic);
    
    if(op>=/* -1 for tag */Opnames["names_of_instructions"]["length"]-1||op<0)
     {Pervasives["print_string"]("*** unknown opcode : "),
      Pervasives["print_int"](op)}
    else
     {Pervasives["print_string"](Opnames["names_of_instructions"][op+1])}
    
    Pervasives["print_string"](" ");
    try
     {var match=List["assoc"](op,op_shapes);
      
      switch(match)
       {case 0:
        case 1:Pervasives["print_int"](inputu(ic));
        case 2:Pervasives["print_int"](inputs(ic));
        case 3:
         Pervasives["print_int"](inputu(ic)),
         Pervasives["print_string"](", "),
         Pervasives["print_int"](inputu(ic));
        case 4:var p=currpc(ic);Pervasives["print_int"](p+inputs(ic));
        case 5:
         Pervasives["print_int"](inputu(ic));
         Pervasives["print_string"](", ");
         var p$1=currpc(ic);
         
         Pervasives["print_int"](p$1+inputs(ic));
        case 6:
         Pervasives["print_int"](inputs(ic));
         Pervasives["print_string"](", ");
         var p$2=currpc(ic);
         
         Pervasives["print_int"](p$2+inputs(ic));
        case 7:print_getglobal_name(ic);
        case 8:
         print_getglobal_name(ic),
         Pervasives["print_string"](", "),
         Pervasives["print_int"](inputu(ic));
        case 9:print_setglobal_name(ic);
        case 10:print_primitive(ic);
        case 11:
         Pervasives["print_int"](inputu(ic)),
         Pervasives["print_string"](", "),
         print_primitive(ic);
        case 12:
         var n=inputu(ic);
         
         var orig=currpc(ic);
         
         for(var i=0;i<=(n&65535)-1;i++)
          {Pervasives["print_string"]("\n        int "),
           Pervasives["print_int"](i),
           Pervasives["print_string"](" -> "),
           Pervasives["print_int"](orig+inputs(ic))}
         
         for(var i$1=0;i$1<=(n>>>16)-1;i$1++)
          {Pervasives["print_string"]("\n        tag "),
           Pervasives["print_int"](i$1),
           Pervasives["print_string"](" -> "),
           Pervasives["print_int"](orig+inputs(ic))}
         
        case 13:
         var nfuncs=inputu(ic);
         
         var nvars=inputu(ic);
         
         var orig$1=currpc(ic);
         
         Pervasives["print_int"](nvars);
         for(var _i=0;_i<=nfuncs-1;_i++)
          {Pervasives["print_string"](", "),
           Pervasives["print_int"](orig$1+inputs(ic))}
         
        case 14:
         var tag=inputs(ic);var _cache=inputu(ic);Pervasives["print_int"](tag)
        }
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {Pervasives["print_string"]("(unknown arguments)")}
      else
       {throw exn;}
      }
    
    return Pervasives["print_string"]("\n");
    };

var
 print_code=
  function(ic,len)
   {start[1]=Pervasives["pos_in"](ic);
    var stop=start[1]+len;
    
    while(Pervasives["pos_in"](ic)<stop){print_instr(ic)}
    return 0;
    };

var
 print_reloc=
  function(param)
   {var pos=param[2];
    
    var info=param[1];
    
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "    ",
        [/* Int */4,
         /* Int_d */0,
         /* No_padding */0,
         /* No_precision */0,
         [/* String_literal */11,
          "    (",
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           [/* String_literal */11,")    ",/* End_of_format */0]]]]],
       "    %d    (%d)    "],
      pos,
      pos/4);
    switch(info[0])
     {case 0:
       print_struct_const(info[1]);
       return Printf["printf"]
               ([/* Format */0,
                 [/* Char_literal */12,10,/* End_of_format */0],
                 "\n"]);
       
      case 1:
       return Printf["printf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "require    ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "require    %s\n"],
                Ident["name"](info[1]));
       
      case 2:
       return Printf["printf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "provide    ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "provide    %s\n"],
                Ident["name"](info[1]));
       
      case 3:
       return Printf["printf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "prim    ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "prim    %s\n"],
                info[1]);
       
      }
    };

var
 dump_obj=
  function(ic)
   {var
     buffer=
      Pervasives["really_input_string"]
       (ic,Config["cmo_magic_number"]["length"]);
    
    if
     (CamlPrimitive["caml_string_notequal"](buffer,Config["cmo_magic_number"]))
     {Pervasives["prerr_endline"]("Not an object file"),Pervasives["exit"](2)}
    else
     {}
    
    var cu_pos=Pervasives["input_binary_int"](ic);
    
    Pervasives["seek_in"](ic,cu_pos);
    var cu=Pervasives["input_value"](ic);
    
    reloc[1]=cu[4];
    if(cu[8]>0)
     {Pervasives["seek_in"](ic,cu[8]);
      var evl=Pervasives["input_value"](ic);
      
      Pervasives["input_value"](ic),record_events(0,evl)}
    else
     {}
    
    Pervasives["seek_in"](ic,cu[2]);
    return print_code(ic,cu[3]);
    };

var
 read_primitive_table=
  function(ic,len)
   {var p=Pervasives["really_input_string"](ic,len);
    
    var
     split=
      function(beg,cur)
       {if(cur>=len)
         {return /* [] */0;}
        else
         {if(p[cur]===0)
           {return /* :: */[0,
                    $$String["sub"](p,beg,cur-beg),
                    split(cur+1,cur+1)];
            }
          else
           {return split(beg,cur+1);}
          }
        };
    
    return $$Array["of_list"](split(0,0));
    };

var
 dump_exe=
  function(ic)
   {Bytesections["read_toc"](ic);
    var prim_size=Bytesections["seek_section"](ic,"PRIM");
    
    primitives[1]=read_primitive_table(ic,prim_size);
    Bytesections["seek_section"](ic,"DATA");
    var init_data=Pervasives["input_value"](ic);
    
    globals[1]=
    CamlPrimitive["caml_make_vect"]
     (/* -1 for tag */init_data["length"]-1,/* Empty */0);
    for(var i=0;i<=/* -1 for tag */init_data["length"]-1-1;i++)
     {globals[1][i+1]=/* Constant */[1,init_data[i+1]]}
    
    Bytesections["seek_section"](ic,"SYMB");
    var match=Pervasives["input_value"](ic);
    
    Tbl["iter"]
     (function(id,pos){return globals[1][pos+1]=/* Global */[0,id],0;},
      match[2]);
    try
     {Bytesections["seek_section"](ic,"DBUG");
      var num_eventlists=Pervasives["input_binary_int"](ic);
      
      for(var _i=1;_i<=num_eventlists;_i++)
       {var orig=Pervasives["input_binary_int"](ic);
        
        var evl=Pervasives["input_value"](ic);
        
        Pervasives["input_value"](ic),record_events(orig,evl)}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {}
      else
       {throw exn;}
      }
    
    var code_size=Bytesections["seek_section"](ic,"CODE");
    
    return print_code(ic,code_size);
    };

var
 arg_list=
  /* :: */[0,
   /* tuple */[0,
    "-noloc",
    /* Clear */[3,print_locations],
    " : don't print source information"],
   /* [] */0];

var
 arg_usage=
  Printf["sprintf"]
   ([/* Format */0,
     [/* String */2,
      /* No_padding */0,
      [/* String_literal */11,
       " [OPTIONS] FILES : dump content of bytecode files",
       /* End_of_format */0]],
     "%s [OPTIONS] FILES : dump content of bytecode files"],
    Sys["argv"][1]);

var first_file=[0,/* true */1];

var
 arg_fun=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    if(!first_file[1]){Pervasives["print_newline"](/* () */0)}else{}
    
    first_file[1]=/* false */0;
    Printf["printf"]
     ([/* Format */0,
       [/* String_literal */11,
        "## start of ocaml dump of ",
        [/* Caml_string */3,
         /* No_padding */0,
         [/* Char_literal */12,10,[/* Flush */10,/* End_of_format */0]]]],
       "## start of ocaml dump of %S\n%!"],
      filename);
    try
     {objfile[1]=/* false */0,dump_exe(ic)}
    catch(exn)
     {if(exn===Bytesections["Bad_magic_number"])
       {objfile[1]=/* true */1,Pervasives["seek_in"](ic,0),dump_obj(ic)}
      else
       {throw exn;}
      }
    
    Pervasives["close_in"](ic);
    return Printf["printf"]
            ([/* Format */0,
              [/* String_literal */11,
               "## end of ocaml dump of ",
               [/* Caml_string */3,
                /* No_padding */0,
                [/* Char_literal */12,10,[/* Flush */10,/* End_of_format */0]]]],
              "## end of ocaml dump of %S\n%!"],
             filename);
    };

var
 main=
  function(param)
   {Arg["parse"](arg_list,arg_fun,arg_usage);return Pervasives["exit"](0);};

main(/* () */0);
module["exports"]=
{"print_locations":print_locations,
 "inputu":inputu,
 "inputs":inputs,
 "start":start,
 "reloc":reloc,
 "globals":globals,
 "primitives":primitives,
 "objfile":objfile,
 "event_table":event_table,
 "relocate_event":relocate_event,
 "record_events":record_events,
 "print_float":print_float,
 "print_struct_const":print_struct_const,
 "same_custom":same_custom,
 "print_obj":print_obj,
 "currpos":currpos,
 "rassoc":rassoc,
 "find_reloc":find_reloc,
 "print_getglobal_name":print_getglobal_name,
 "print_setglobal_name":print_setglobal_name,
 "print_primitive":print_primitive,
 "currpc":currpc,
 "op_shapes":op_shapes,
 "print_event":print_event,
 "print_instr":print_instr,
 "print_code":print_code,
 "print_reloc":print_reloc,
 "dump_obj":dump_obj,
 "read_primitive_table":read_primitive_table,
 "dump_exe":dump_exe,
 "arg_list":arg_list,
 "arg_usage":arg_usage,
 "first_file":first_file,
 "arg_fun":arg_fun,
 "main":main};

