// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Opcodes=require("Opcodes");
var Pervasives=require("Pervasives");
var List=require("List");
var Arg=require("Arg");
var Printf=require("Printf");
var Obj=require("Obj");
var Bytesections=require("Bytesections");
var Opnames=require("Opnames");
var Tbl=require("Tbl");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Config=require("Config");
var $$Array=require("Array");
var Sys=require("Sys");


var print_locations=[0,1];

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

var reloc=[0,0];

var globals=[0,[]];

var primitives=[0,[]];

var objfile=[0,0];

var event_table=Hashtbl["create"](0,253);

var
 relocate_event=
  function(orig,ev)
   {ev[1]=orig+ev[1],0;
    var match=ev[10];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=69;}}
    else
     {switch(match[0]){case 0:return match[1][1]=ev[1],0;case 1:exit=69;}}
    
    switch(exit){case 69:return 0;}
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
     {return Printf["printf"]([0,[2,0,0],"%s"],f);}
    else
     {return Printf["printf"]([0,[2,0,[12,46,0]],"%s."],f);}
    };

var
 print_struct_const=
  function(param)
   {switch(param)
     {case 0:
       var match=param[1];
       
       switch(match)
        {case 0:return Printf["printf"]([0,[4,0,0,0,0],"%d"],match[1]);
         case 1:return Printf["printf"]([0,[1,0],"%C"],match[1]);
         case 2:return Printf["printf"]([0,[3,0,0],"%S"],match[1]);
         case 3:return print_float(match[1]);
         case 4:
          return Printf["printf"]([0,[5,0,0,0,[12,108,0]],"%ldl"],match[1]);
         case 5:
          return Printf["printf"]([0,[7,0,0,0,[12,76,0]],"%LdL"],match[1]);
         case 6:
          return Printf["printf"]([0,[6,0,0,0,[12,110,0]],"%ndn"],match[1]);
         }
       
      case 1:return Printf["printf"]([0,[4,0,0,0,[12,97,0]],"%da"],param[1]);
      case 2:
       var args=param[3];
       
       Printf["printf"]([0,[12,60,[4,0,0,0,[12,62,0]]],"<%d>"],param[1]);
       if(args)
        {var al=args[2];
         
         var a1=args[1];
         
         if(al)
          {Printf["printf"]([0,[12,40,0],"("]);
           print_struct_const(a1);
           List["iter"]
            (function(a)
              {Printf["printf"]([0,[11,", ",0],", "]);
               return print_struct_const(a);
               },
             al);
           return Printf["printf"]([0,[12,41,0],")"]);
           }
         else
          {Printf["printf"]([0,[12,40,0],"("]);
           print_struct_const(a1);
           return Printf["printf"]([0,[12,41,0],")"]);
           }
         }
       else
        {return 0;}
       
      case 3:
       Printf["printf"]([0,[11,"[|",0],"[|"]);
       List["iter"]
        (function(f)
          {print_float(f);return Printf["printf"]([0,[11,"; ",0],"; "]);},
         param[1]);
       return Printf["printf"]([0,[11,"|]",0],"|]"]);
       
      case 4:return Printf["printf"]([0,[3,0,0],"%S"],param[1]);
      }
    };

var same_custom=function(x,y){return "unknown primitive:caml_equal";};

var
 print_obj=
  function(x)
   {if("unknown primitive:caml_obj_is_block")
     {var tag="unknown primitive:caml_obj_tag";
      
      if(tag=Obj["string_tag"])
       {return Printf["printf"]([0,[3,0,0],"%S"],x);}
      else
       {if(tag=Obj["double_tag"])
         {return Printf["printf"]([0,[8,9,0,[0,12],0],"%.12g"],x);}
        else
         {if(tag=Obj["double_array_tag"])
           {var a=x;
            
            Printf["printf"]([0,[11,"[|",0],"[|"]);
            for(var i=0;i<=a["length"]-1;i++)
             {if(i>0){Printf["printf"]([0,[11,", ",0],", "])}else{}
              
              Printf["printf"]([0,[8,9,0,[0,12],0],"%.12g"],a[i])}
            
            return Printf["printf"]([0,[11,"|]",0],"|]"]);
            }
          else
           {if((tag=Obj["custom_tag"])&&same_custom(x,0))
             {return Printf["printf"]([0,[5,0,0,0,[12,108,0]],"%ldl"],x);}
            else
             {if((tag=Obj["custom_tag"])&&same_custom(x,0))
               {return Printf["printf"]([0,[6,0,0,0,[12,110,0]],"%ndn"],x);}
              else
               {if((tag=Obj["custom_tag"])&&same_custom(x,0))
                 {return Printf["printf"]([0,[7,0,0,0,[12,76,0]],"%LdL"],x);}
                else
                 {if(tag<Obj["no_scan_tag"])
                   {Printf["printf"]
                     ([0,[12,60,[4,0,0,0,[12,62,0]]],"<%d>"],
                      "unknown primitive:caml_obj_tag");
                    var n=x["length"];
                    
                    if(n!=0)
                     {if(n!=1)
                       {Printf["printf"]([0,[12,40,0],"("]);
                        print_obj(x[0]);
                        for(var i$1=1;i$1<=n-1;i$1++)
                         {Printf["printf"]([0,[11,", ",0],", "]),print_obj(x[i$1])}
                        
                        return Printf["printf"]([0,[12,41,0],")"]);
                        }
                      else
                       {Printf["printf"]([0,[12,40,0],"("]);
                        print_obj(x[0]);
                        return Printf["printf"]([0,[12,41,0],")"]);
                        }
                      }
                    else
                     {return 0;}
                    }
                  else
                   {return Printf["printf"]
                            ([0,[11,"<tag ",[4,0,0,0,[12,62,0]]],"<tag %d>"],tag);
                    }
                  }
                }
              }
            }
          }
        }
      }
    else
     {return Printf["printf"]([0,[4,0,0,0,0],"%d"],x);}
    };

var currpos=function(ic){return Pervasives["pos_in"](ic)-start[1];};

var
 rassoc=
  function(key,param)
   {if(param)
     {var match=param[1];
      
      if("unknown primitive:caml_equal")
       {return match[1];}
      else
       {return rassoc(key,param[2]);}
      }
    else
     {throw Not_found;}
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
        
        switch(match)
         {case 0:print_struct_const(match[1]);
          case 1:Pervasives["print_string"](Ident["name"](match[1]));
          case 2:exit=58;
          case 3:exit=58;
          }
        
        switch(exit){case 58:Pervasives["print_string"]("<wrong reloc>")}
        }
      catch(exn)
       {if(exn=Not_found)
         {Pervasives["print_string"]("<no reloc>")}
        else
         {throw exn;}
        }
      
      return 0;
      }
    else
     {var n=inputu(ic);
      
      if(n>=globals[1]["length"]||n<0)
       {return Pervasives["print_string"]("<global table overflow>");}
      else
       {var match$1=globals[1][n];
        
        if(typeof match$1=="number")
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
        
        switch(match)
         {case 2:Pervasives["print_string"](Ident["name"](match[1]));
          default:Pervasives["print_string"]("<wrong reloc>")}
        }
      catch(exn)
       {if(exn=Not_found)
         {Pervasives["print_string"]("<no reloc>")}
        else
         {throw exn;}
        }
      
      return 0;
      }
    else
     {var n=inputu(ic);
      
      if(n>=globals[1]["length"]||n<0)
       {return Pervasives["print_string"]("<global table overflow>");}
      else
       {var match$1=globals[1][n];
        
        var exit;
        
        if(typeof match$1=="number")
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
        
        switch(match)
         {case 3:Pervasives["print_string"](match[1]);
          default:Pervasives["print_string"]("<wrong reloc>")}
        }
      catch(exn)
       {if(exn=Not_found)
         {Pervasives["print_string"]("<no reloc>")}
        else
         {throw exn;}
        }
      
      return 0;
      }
    else
     {var n=inputu(ic);
      
      if(n>=primitives[1]["length"]||n<0)
       {return Pervasives["print_int"](n);}
      else
       {return Pervasives["print_string"](primitives[1][n]);}
      }
    };

var currpc=function(ic){return currpos(ic)/4;};

var
 op_shapes=
  /* :: */[0,
   /* tuple */[0,Opcodes["opACC0"],0],
   /* :: */[0,
    /* tuple */[0,Opcodes["opACC1"],0],
    /* :: */[0,
     /* tuple */[0,Opcodes["opACC2"],0],
     /* :: */[0,
      /* tuple */[0,Opcodes["opACC3"],0],
      /* :: */[0,
       /* tuple */[0,Opcodes["opACC4"],0],
       /* :: */[0,
        /* tuple */[0,Opcodes["opACC5"],0],
        /* :: */[0,
         /* tuple */[0,Opcodes["opACC6"],0],
         /* :: */[0,
          /* tuple */[0,Opcodes["opACC7"],0],
          /* :: */[0,
           /* tuple */[0,Opcodes["opACC"],1],
           /* :: */[0,
            /* tuple */[0,Opcodes["opPUSH"],0],
            /* :: */[0,
             /* tuple */[0,Opcodes["opPUSHACC0"],0],
             /* :: */[0,
              /* tuple */[0,Opcodes["opPUSHACC1"],0],
              /* :: */[0,
               /* tuple */[0,Opcodes["opPUSHACC2"],0],
               /* :: */[0,
                /* tuple */[0,Opcodes["opPUSHACC3"],0],
                /* :: */[0,
                 /* tuple */[0,Opcodes["opPUSHACC4"],0],
                 /* :: */[0,
                  /* tuple */[0,Opcodes["opPUSHACC5"],0],
                  /* :: */[0,
                   /* tuple */[0,Opcodes["opPUSHACC6"],0],
                   /* :: */[0,
                    /* tuple */[0,Opcodes["opPUSHACC7"],0],
                    /* :: */[0,
                     /* tuple */[0,Opcodes["opPUSHACC"],1],
                     /* :: */[0,
                      /* tuple */[0,Opcodes["opPOP"],1],
                      /* :: */[0,
                       /* tuple */[0,Opcodes["opASSIGN"],1],
                       /* :: */[0,
                        /* tuple */[0,Opcodes["opENVACC1"],0],
                        /* :: */[0,
                         /* tuple */[0,Opcodes["opENVACC2"],0],
                         /* :: */[0,
                          /* tuple */[0,Opcodes["opENVACC3"],0],
                          /* :: */[0,
                           /* tuple */[0,Opcodes["opENVACC4"],0],
                           /* :: */[0,
                            /* tuple */[0,Opcodes["opENVACC"],1],
                            /* :: */[0,
                             /* tuple */[0,Opcodes["opPUSHENVACC1"],0],
                             /* :: */[0,
                              /* tuple */[0,Opcodes["opPUSHENVACC2"],0],
                              /* :: */[0,
                               /* tuple */[0,Opcodes["opPUSHENVACC3"],0],
                               /* :: */[0,
                                /* tuple */[0,Opcodes["opPUSHENVACC4"],0],
                                /* :: */[0,
                                 /* tuple */[0,Opcodes["opPUSHENVACC"],1],
                                 /* :: */[0,
                                  /* tuple */[0,Opcodes["opPUSH_RETADDR"],4],
                                  /* :: */[0,
                                   /* tuple */[0,Opcodes["opAPPLY"],1],
                                   /* :: */[0,
                                    /* tuple */[0,Opcodes["opAPPLY1"],0],
                                    /* :: */[0,
                                     /* tuple */[0,Opcodes["opAPPLY2"],0],
                                     /* :: */[0,
                                      /* tuple */[0,Opcodes["opAPPLY3"],0],
                                      /* :: */[0,
                                       /* tuple */[0,Opcodes["opAPPTERM"],3],
                                       /* :: */[0,
                                        /* tuple */[0,Opcodes["opAPPTERM1"],1],
                                        /* :: */[0,
                                         /* tuple */[0,Opcodes["opAPPTERM2"],1],
                                         /* :: */[0,
                                          /* tuple */[0,Opcodes["opAPPTERM3"],1],
                                          /* :: */[0,
                                           /* tuple */[0,Opcodes["opRETURN"],1],
                                           /* :: */[0,
                                            /* tuple */[0,Opcodes["opRESTART"],0],
                                            /* :: */[0,
                                             /* tuple */[0,Opcodes["opGRAB"],1],
                                             /* :: */[0,
                                              /* tuple */[0,Opcodes["opCLOSURE"],5],
                                              /* :: */[0,
                                               /* tuple */[0,Opcodes["opCLOSUREREC"],13],
                                               /* :: */[0,
                                                /* tuple */[0,Opcodes["opOFFSETCLOSUREM2"],0],
                                                /* :: */[0,
                                                 /* tuple */[0,Opcodes["opOFFSETCLOSURE0"],0],
                                                 /* :: */[0,
                                                  /* tuple */[0,Opcodes["opOFFSETCLOSURE2"],0],
                                                  /* :: */[0,
                                                   /* tuple */[0,Opcodes["opOFFSETCLOSURE"],2],
                                                   /* :: */[0,
                                                    /* tuple */[0,Opcodes["opPUSHOFFSETCLOSUREM2"],0],
                                                    /* :: */[0,
                                                     /* tuple */[0,Opcodes["opPUSHOFFSETCLOSURE0"],0],
                                                     /* :: */[0,
                                                      /* tuple */[0,Opcodes["opPUSHOFFSETCLOSURE2"],0],
                                                      /* :: */[0,
                                                       /* tuple */[0,Opcodes["opPUSHOFFSETCLOSURE"],2],
                                                       /* :: */[0,
                                                        /* tuple */[0,Opcodes["opGETGLOBAL"],7],
                                                        /* :: */[0,
                                                         /* tuple */[0,Opcodes["opPUSHGETGLOBAL"],7],
                                                         /* :: */[0,
                                                          /* tuple */[0,Opcodes["opGETGLOBALFIELD"],8],
                                                          /* :: */[0,
                                                           /* tuple */[0,Opcodes["opPUSHGETGLOBALFIELD"],8],
                                                           /* :: */[0,
                                                            /* tuple */[0,Opcodes["opSETGLOBAL"],9],
                                                            /* :: */[0,
                                                             /* tuple */[0,Opcodes["opATOM0"],0],
                                                             /* :: */[0,
                                                              /* tuple */[0,Opcodes["opATOM"],1],
                                                              /* :: */[0,
                                                               /* tuple */[0,Opcodes["opPUSHATOM0"],0],
                                                               /* :: */[0,
                                                                /* tuple */[0,Opcodes["opPUSHATOM"],1],
                                                                /* :: */[0,
                                                                 /* tuple */[0,Opcodes["opMAKEBLOCK"],3],
                                                                 /* :: */[0,
                                                                  /* tuple */[0,Opcodes["opMAKEBLOCK1"],1],
                                                                  /* :: */[0,
                                                                   /* tuple */[0,Opcodes["opMAKEBLOCK2"],1],
                                                                   /* :: */[0,
                                                                    /* tuple */[0,Opcodes["opMAKEBLOCK3"],1],
                                                                    /* :: */[0,
                                                                     /* tuple */[0,Opcodes["opMAKEFLOATBLOCK"],1],
                                                                     /* :: */[0,
                                                                      /* tuple */[0,Opcodes["opGETFIELD0"],0],
                                                                      /* :: */[0,
                                                                       /* tuple */[0,Opcodes["opGETFIELD1"],0],
                                                                       /* :: */[0,
                                                                        /* tuple */[0,Opcodes["opGETFIELD2"],0],
                                                                        /* :: */[0,
                                                                         /* tuple */[0,Opcodes["opGETFIELD3"],0],
                                                                         /* :: */[0,
                                                                          /* tuple */[0,Opcodes["opGETFIELD"],1],
                                                                          /* :: */[0,
                                                                           /* tuple */[0,Opcodes["opGETFLOATFIELD"],1],
                                                                           /* :: */[0,
                                                                            /* tuple */[0,Opcodes["opSETFIELD0"],0],
                                                                            /* :: */[0,
                                                                             /* tuple */[0,Opcodes["opSETFIELD1"],0],
                                                                             /* :: */[0,
                                                                              /* tuple */[0,Opcodes["opSETFIELD2"],0],
                                                                              /* :: */[0,
                                                                               /* tuple */[0,Opcodes["opSETFIELD3"],0],
                                                                               /* :: */[0,
                                                                                /* tuple */[0,Opcodes["opSETFIELD"],1],
                                                                                /* :: */[0,
                                                                                 /* tuple */[0,Opcodes["opSETFLOATFIELD"],1],
                                                                                 /* :: */[0,
                                                                                  /* tuple */[0,Opcodes["opVECTLENGTH"],0],
                                                                                  /* :: */[0,
                                                                                   /* tuple */[0,Opcodes["opGETVECTITEM"],0],
                                                                                   /* :: */[0,
                                                                                    /* tuple */[0,Opcodes["opSETVECTITEM"],0],
                                                                                    /* :: */[0,
                                                                                     /* tuple */[0,Opcodes["opGETSTRINGCHAR"],0],
                                                                                     /* :: */[0,
                                                                                      /* tuple */[0,Opcodes["opSETSTRINGCHAR"],0],
                                                                                      /* :: */[0,
                                                                                       /* tuple */[0,Opcodes["opBRANCH"],4],
                                                                                       /* :: */[0,
                                                                                        /* tuple */[0,Opcodes["opBRANCHIF"],4],
                                                                                        /* :: */[0,
                                                                                         /* tuple */[0,Opcodes["opBRANCHIFNOT"],4],
                                                                                         /* :: */[0,
                                                                                          /* tuple */[0,Opcodes["opSWITCH"],12],
                                                                                          /* :: */[0,
                                                                                           /* tuple */[0,Opcodes["opBOOLNOT"],0],
                                                                                           /* :: */[0,
                                                                                            /* tuple */[0,Opcodes["opPUSHTRAP"],4],
                                                                                            /* :: */[0,
                                                                                             /* tuple */[0,Opcodes["opPOPTRAP"],0],
                                                                                             /* :: */[0,
                                                                                              /* tuple */[0,Opcodes["opRAISE"],0],
                                                                                              /* :: */[0,
                                                                                               /* tuple */[0,Opcodes["opCHECK_SIGNALS"],0],
                                                                                               /* :: */[0,
                                                                                                /* tuple */[0,Opcodes["opC_CALL1"],10],
                                                                                                /* :: */[0,
                                                                                                 /* tuple */[0,Opcodes["opC_CALL2"],10],
                                                                                                 /* :: */[0,
                                                                                                  /* tuple */[0,Opcodes["opC_CALL3"],10],
                                                                                                  /* :: */[0,
                                                                                                   /* tuple */[0,Opcodes["opC_CALL4"],10],
                                                                                                   /* :: */[0,
                                                                                                    /* tuple */[0,Opcodes["opC_CALL5"],10],
                                                                                                    /* :: */[0,
                                                                                                     /* tuple */[0,Opcodes["opC_CALLN"],11],
                                                                                                     /* :: */[0,
                                                                                                      /* tuple */[0,Opcodes["opCONST0"],0],
                                                                                                      /* :: */[0,
                                                                                                       /* tuple */[0,Opcodes["opCONST1"],0],
                                                                                                       /* :: */[0,
                                                                                                        /* tuple */[0,Opcodes["opCONST2"],0],
                                                                                                        /* :: */[0,
                                                                                                         /* tuple */[0,Opcodes["opCONST3"],0],
                                                                                                         /* :: */[0,
                                                                                                          /* tuple */[0,Opcodes["opCONSTINT"],2],
                                                                                                          /* :: */[0,
                                                                                                           /* tuple */[0,Opcodes["opPUSHCONST0"],0],
                                                                                                           /* :: */[0,
                                                                                                            /* tuple */[0,Opcodes["opPUSHCONST1"],0],
                                                                                                            /* :: */[0,
                                                                                                             /* tuple */[0,Opcodes["opPUSHCONST2"],0],
                                                                                                             /* :: */[0,
                                                                                                              /* tuple */[0,Opcodes["opPUSHCONST3"],0],
                                                                                                              /* :: */[0,
                                                                                                               /* tuple */[0,Opcodes["opPUSHCONSTINT"],2],
                                                                                                               /* :: */[0,
                                                                                                                /* tuple */[0,Opcodes["opNEGINT"],0],
                                                                                                                /* :: */[0,
                                                                                                                 /* tuple */[0,Opcodes["opADDINT"],0],
                                                                                                                 /* :: */[0,
                                                                                                                  /* tuple */[0,Opcodes["opSUBINT"],0],
                                                                                                                  /* :: */[0,
                                                                                                                   /* tuple */[0,Opcodes["opMULINT"],0],
                                                                                                                   /* :: */[0,
                                                                                                                    /* tuple */[0,Opcodes["opDIVINT"],0],
                                                                                                                    /* :: */[0,
                                                                                                                     /* tuple */[0,Opcodes["opMODINT"],0],
                                                                                                                     /* :: */[0,
                                                                                                                      /* tuple */[0,Opcodes["opANDINT"],0],
                                                                                                                      /* :: */[0,
                                                                                                                       /* tuple */[0,Opcodes["opORINT"],0],
                                                                                                                       /* :: */[0,
                                                                                                                        /* tuple */[0,Opcodes["opXORINT"],0],
                                                                                                                        /* :: */[0,
                                                                                                                         /* tuple */[0,Opcodes["opLSLINT"],0],
                                                                                                                         /* :: */[0,
                                                                                                                          /* tuple */[0,Opcodes["opLSRINT"],0],
                                                                                                                          /* :: */[0,
                                                                                                                           /* tuple */[0,Opcodes["opASRINT"],0],
                                                                                                                           /* :: */[0,
                                                                                                                            /* tuple */[0,Opcodes["opEQ"],0],
                                                                                                                            /* :: */[0,
                                                                                                                             /* tuple */[0,Opcodes["opNEQ"],0],
                                                                                                                             /* :: */[0,
                                                                                                                              /* tuple */[0,Opcodes["opLTINT"],0],
                                                                                                                              /* :: */[0,
                                                                                                                               /* tuple */[0,Opcodes["opLEINT"],0],
                                                                                                                               /* :: */[0,
                                                                                                                                /* tuple */[0,Opcodes["opGTINT"],0],
                                                                                                                                /* :: */[0,
                                                                                                                                 /* tuple */[0,Opcodes["opGEINT"],0],
                                                                                                                                 /* :: */[0,
                                                                                                                                  /* tuple */[0,Opcodes["opOFFSETINT"],2],
                                                                                                                                  /* :: */[0,
                                                                                                                                   /* tuple */[0,Opcodes["opOFFSETREF"],2],
                                                                                                                                   /* :: */[0,
                                                                                                                                    /* tuple */[0,Opcodes["opISINT"],0],
                                                                                                                                    /* :: */[0,
                                                                                                                                     /* tuple */[0,Opcodes["opGETMETHOD"],0],
                                                                                                                                     /* :: */[0,
                                                                                                                                      /* tuple */[0,Opcodes["opGETDYNMET"],0],
                                                                                                                                      /* :: */[0,
                                                                                                                                       /* tuple */[0,Opcodes["opGETPUBMET"],14],
                                                                                                                                       /* :: */[0,
                                                                                                                                        /* tuple */[0,Opcodes["opBEQ"],6],
                                                                                                                                        /* :: */[0,
                                                                                                                                         /* tuple */[0,Opcodes["opBNEQ"],6],
                                                                                                                                         /* :: */[0,
                                                                                                                                          /* tuple */[0,Opcodes["opBLTINT"],6],
                                                                                                                                          /* :: */[0,
                                                                                                                                           /* tuple */[0,Opcodes["opBLEINT"],6],
                                                                                                                                           /* :: */[0,
                                                                                                                                            /* tuple */[0,Opcodes["opBGTINT"],6],
                                                                                                                                            /* :: */[0,
                                                                                                                                             /* tuple */[0,Opcodes["opBGEINT"],6],
                                                                                                                                             /* :: */[0,
                                                                                                                                              /* tuple */[0,Opcodes["opULTINT"],0],
                                                                                                                                              /* :: */[0,
                                                                                                                                               /* tuple */[0,Opcodes["opUGEINT"],0],
                                                                                                                                               /* :: */[0,
                                                                                                                                                /* tuple */[0,Opcodes["opBULTINT"],5],
                                                                                                                                                /* :: */[0,
                                                                                                                                                 /* tuple */[0,Opcodes["opBUGEINT"],5],
                                                                                                                                                 /* :: */[0,
                                                                                                                                                  /* tuple */[0,Opcodes["opSTOP"],0],
                                                                                                                                                  /* :: */[0,
                                                                                                                                                   /* tuple */[0,Opcodes["opEVENT"],0],
                                                                                                                                                   /* :: */[0,/* tuple */[0,Opcodes["opBREAK"],0],0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

var
 print_event=
  function(ev)
   {if(print_locations[1])
     {var ls=ev[3][1];
      
      var le=ev[3][2];
      
      return Printf["printf"]
              ([0,
                [11,
                 'File "',
                 [2,
                  0,
                  [11,
                   '", line ',
                   [4,
                    0,
                    0,
                    0,
                    [11,
                     ", characters ",
                     [4,0,0,0,[12,45,[4,0,0,0,[11,":\n",0]]]]]]]]],
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
    Printf["printf"]([0,[4,0,[0,1,8],0,[11,"  ",0]],"%8d  "],pos/4);
    var op=inputu(ic);
    
    if(op>=Opnames["names_of_instructions"]["length"]||op<0)
     {Pervasives["print_string"]("*** unknown opcode : "),
      Pervasives["print_int"](op)}
    else
     {Pervasives["print_string"](Opnames["names_of_instructions"][op])}
    
    Pervasives["print_string"](" ");
    try
     {var match=List["assoc"](op,op_shapes);
      
      switch(match[0])
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
     {if(exn=Not_found)
       {Pervasives["print_string"]("(unknown arguments)")}
      else
       {throw exn;}
      }
    
    return Pervasives["print_string"]("\n");
    };

var
 print_code=
  function(ic,len)
   {start[1]=Pervasives["pos_in"](ic),0;
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
     ([0,
       [11,"    ",[4,0,0,0,[11,"    (",[4,0,0,0,[11,")    ",0]]]]],
       "    %d    (%d)    "],
      pos,
      pos/4);
    switch(info)
     {case 0:
       print_struct_const(info[1]);
       return Printf["printf"]([0,[12,10,0],"\n"]);
       
      case 1:
       return Printf["printf"]
               ([0,[11,"require    ",[2,0,[12,10,0]]],"require    %s\n"],
                Ident["name"](info[1]));
       
      case 2:
       return Printf["printf"]
               ([0,[11,"provide    ",[2,0,[12,10,0]]],"provide    %s\n"],
                Ident["name"](info[1]));
       
      case 3:
       return Printf["printf"]
               ([0,[11,"prim    ",[2,0,[12,10,0]]],"prim    %s\n"],info[1]);
       
      }
    };

var
 dump_obj=
  function(ic)
   {var
     buffer=
      Pervasives["really_input_string"]
       (ic,Config["cmo_magic_number"]["length"]);
    
    if("unknown primitive:caml_string_notequal")
     {Pervasives["prerr_endline"]("Not an object file"),Pervasives["exit"](2)}
    else
     {}
    
    var cu_pos=Pervasives["input_binary_int"](ic);
    
    Pervasives["seek_in"](ic,cu_pos);
    var cu=Pervasives["input_value"](ic);
    
    reloc[1]=cu[4],0;
    if(cu[8]>0)
     {Pervasives["seek_in"](ic,cu[8]);
      var evl=Pervasives["input_value"](ic);
      
      0,record_events(0,evl)}
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
         {return 0;}
        else
         {if(p[cur]=0)
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
    
    primitives[1]=read_primitive_table(ic,prim_size),0;
    
    var init_data=Pervasives["input_value"](ic);
    
    globals[1]="unknown primitive:caml_make_vect",0;
    for(var i=0;i<=init_data["length"]-1;i++)
     {globals[1][i]=/* Constant */[1,init_data[i]],0}
    
    
    var match=Pervasives["input_value"](ic);
    
    Tbl["iter"]
     (function(id,pos){return globals[1][pos]=/* Global */[0,id],0;},match[2]);
    try
     {
      var num_eventlists=Pervasives["input_binary_int"](ic);
      
      for(var _i=1;_i<=num_eventlists;_i++)
       {var orig=Pervasives["input_binary_int"](ic);
        
        var evl=Pervasives["input_value"](ic);
        
        0,record_events(orig,evl)}
      }
    catch(exn){if(exn=Not_found){}else{throw exn;}}
    
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
   0];

var
 arg_usage=
  Printf["sprintf"]
   ([0,
     [2,0,[11," [OPTIONS] FILES : dump content of bytecode files",0]],
     "%s [OPTIONS] FILES : dump content of bytecode files"],
    Sys["argv"][0]);

var first_file=[0,1];

var
 arg_fun=
  function(filename)
   {var ic=Pervasives["open_in_bin"](filename);
    
    if(!first_file[1]){Pervasives["print_newline"](0)}else{}
    
    first_file[1]=0,0;
    Printf["printf"]
     ([0,
       [11,"## start of ocaml dump of ",[3,0,[12,10,[10,0]]]],
       "## start of ocaml dump of %S\n%!"],
      filename);
    try
     {objfile[1]=0,0,dump_exe(ic)}
    catch(exn)
     {if(exn=Bytesections["Bad_magic_number"])
       {objfile[1]=1,0,Pervasives["seek_in"](ic,0),dump_obj(ic)}
      else
       {throw exn;}
      }
    
    Pervasives["close_in"](ic);
    return Printf["printf"]
            ([0,
              [11,"## end of ocaml dump of ",[3,0,[12,10,[10,0]]]],
              "## end of ocaml dump of %S\n%!"],
             filename);
    };

var
 main=
  function(param)
   {Arg["parse"](arg_list,arg_fun,arg_usage);return Pervasives["exit"](0);};

main(0);
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

