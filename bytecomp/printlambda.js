// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Printf=require("Printf");
var Format=require("Format");
var Lambda=require("Lambda");
var Ident=require("Ident");


var
 struct_const=
  function(ppf,param)
   {switch(param)
     {case 0:
       var match=param[1];
       
       switch(match)
        {case 0:return Format["fprintf"](ppf,[0,[4,3,0,0,0],"%i"],match[1]);
         case 1:return Format["fprintf"](ppf,[0,[1,0],"%C"],match[1]);
         case 2:return Format["fprintf"](ppf,[0,[3,0,0],"%S"],match[1]);
         case 3:return Format["fprintf"](ppf,[0,[2,0,0],"%s"],match[1]);
         case 4:
          return Format["fprintf"]
                  (ppf,[0,[5,3,0,0,[12,108,0]],"%lil"],match[1]);
          
         case 5:
          return Format["fprintf"]
                  (ppf,[0,[7,3,0,0,[12,76,0]],"%LiL"],match[1]);
          
         case 6:
          return Format["fprintf"]
                  (ppf,[0,[6,3,0,0,[12,110,0]],"%nin"],match[1]);
          
         }
       
      case 1:
       return Format["fprintf"](ppf,[0,[4,3,0,0,[12,97,0]],"%ia"],param[1]);
      case 2:
       var match$1=param[3];
       
       var tag=param[1];
       
       if(match$1)
        {var
          sconsts=
           function(ppf$1,scl)
            {return List["iter"]
                     (function(sc)
                       {return Format["fprintf"]
                                (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],struct_const,sc);
                        },
                      scl);
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<1>",0],"<1>"]],
                    [12,
                     91,
                     [4,
                      3,
                      0,
                      0,
                      [12,
                       58,
                       [17,
                        [0,"@ ",1,0],
                        [18,[1,[0,0,""]],[15,[15,[17,0,[12,93,[17,0,0]]]]]]]]]]],
                   "@[<1>[%i:@ @[%a%a@]]@]"],
                  tag,
                  struct_const,
                  match$1[1],
                  sconsts,
                  match$1[2]);
         }
       else
        {return Format["fprintf"]
                 (ppf,[0,[12,91,[4,3,0,0,[12,93,0]]],"[%i]"],tag);
         }
       
      case 3:
       var match$2=param[1];
       
       if(match$2)
        {var
          floats=
           function(ppf$1,fl)
            {return List["iter"]
                     (function(f)
                       {return Format["fprintf"]
                                (ppf$1,[0,[17,[0,"@ ",1,0],[2,0,0]],"@ %s"],f);
                        },
                      fl);
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<1>",0],"<1>"]],
                    [11,
                     "[|",
                     [18,[1,[0,0,""]],[2,0,[15,[17,0,[11,"|]",[17,0,0]]]]]]]],
                   "@[<1>[|@[%s%a@]|]@]"],
                  match$2[1],
                  floats,
                  match$2[2]);
         }
       else
        {return Format["fprintf"](ppf,[0,[11,"[| |]",0],"[| |]"]);}
       
      case 4:return Format["fprintf"](ppf,[0,[12,35,[3,0,0]],"#%S"],param[1]);
      }
    };

var
 boxed_integer_name=
  function(param)
   {switch(param[0])
     {case 0:return "nativeint";case 1:return "int32";case 2:return "int64";}
    };

var
 print_boxed_integer=
  function(name,ppf,bi)
   {return Format["fprintf"]
            (ppf,
             [0,[2,0,[12,95,[2,0,0]]],"%s_%s"],
             boxed_integer_name(bi),
             name);
    };

var
 print_boxed_integer_conversion=
  function(ppf,bi1,bi2)
   {return Format["fprintf"]
            (ppf,
             [0,[2,0,[11,"_of_",[2,0,0]]],"%s_of_%s"],
             boxed_integer_name(bi2),
             boxed_integer_name(bi1));
    };

var
 boxed_integer_mark=
  function(name,param)
   {switch(param[0])
     {case 0:
       return Printf["sprintf"]
               ([0,[11,"Nativeint.",[2,0,0]],"Nativeint.%s"],name);
       
      case 1:
       return Printf["sprintf"]([0,[11,"Int32.",[2,0,0]],"Int32.%s"],name);
      case 2:
       return Printf["sprintf"]([0,[11,"Int64.",[2,0,0]],"Int64.%s"],name);
      }
    };

var
 print_boxed_integer$1=
  function(name,ppf,bi)
   {return Format["fprintf"](ppf,[0,[2,0,0],"%s"],boxed_integer_mark(name,bi));
    };

var
 print_bigarray=
  function(name,unsafe,kind,ppf,layout)
   {var $js;
    switch(kind[0])
     {case 0:$js="generic";
      case 1:$js="float32";
      case 2:$js="float64";
      case 3:$js="sint8";
      case 4:$js="uint8";
      case 5:$js="sint16";
      case 6:$js="uint16";
      case 7:$js="int32";
      case 8:$js="int64";
      case 9:$js="camlint";
      case 10:$js="nativeint";
      case 11:$js="complex32";
      case 12:$js="complex64";
      }
    var $js$1;
    switch(layout[0])
     {case 0:$js$1="unknown";case 1:$js$1="C";case 2:$js$1="Fortran";}
    return Format["fprintf"]
            (ppf,
             [0,
              [11,"Bigarray.",[2,0,[12,91,[2,0,[12,44,[2,0,[12,93,0]]]]]]],
              "Bigarray.%s[%s,%s]"],
             unsafe?Pervasives["^"]("unsafe_",name):name,
             $js,
             $js$1);
    };

var
 record_rep=
  function(ppf,r)
   {if(r!=0)
     {return Format["fprintf"](ppf,[0,[11,"float",0],"float"]);}
    else
     {return Format["fprintf"](ppf,[0,[11,"regular",0],"regular"]);}
    };

var
 string_of_loc_kind=
  function(param)
   {switch(param[0])
     {case 0:return "loc_FILE";
      case 1:return "loc_LINE";
      case 2:return "loc_MODULE";
      case 3:return "loc_LOC";
      case 4:return "loc_POS";
      }
    };

var
 primitive=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return Format["fprintf"](ppf,[0,[11,"id",0],"id"]);
        case 1:return Format["fprintf"](ppf,[0,[11,"ignore",0],"ignore"]);
        case 2:return Format["fprintf"](ppf,[0,[11,"force",0],"force"]);
        case 3:return Format["fprintf"](ppf,[0,[11,"&&",0],"&&"]);
        case 4:return Format["fprintf"](ppf,[0,[11,"||",0],"||"]);
        case 5:return Format["fprintf"](ppf,[0,[11,"not",0],"not"]);
        case 6:return Format["fprintf"](ppf,[0,[12,126,0],"~"]);
        case 7:return Format["fprintf"](ppf,[0,[12,43,0],"+"]);
        case 8:return Format["fprintf"](ppf,[0,[12,45,0],"-"]);
        case 9:return Format["fprintf"](ppf,[0,[12,42,0],"*"]);
        case 10:return Format["fprintf"](ppf,[0,[12,47,0],"/"]);
        case 11:return Format["fprintf"](ppf,[0,[11,"mod",0],"mod"]);
        case 12:return Format["fprintf"](ppf,[0,[11,"and",0],"and"]);
        case 13:return Format["fprintf"](ppf,[0,[11,"or",0],"or"]);
        case 14:return Format["fprintf"](ppf,[0,[11,"xor",0],"xor"]);
        case 15:return Format["fprintf"](ppf,[0,[11,"lsl",0],"lsl"]);
        case 16:return Format["fprintf"](ppf,[0,[11,"lsr",0],"lsr"]);
        case 17:return Format["fprintf"](ppf,[0,[11,"asr",0],"asr"]);
        case 18:
         return Format["fprintf"]
                 (ppf,[0,[11,"int_of_float",0],"int_of_float"]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,[0,[11,"float_of_int",0],"float_of_int"]);
         
        case 20:return Format["fprintf"](ppf,[0,[11,"~.",0],"~."]);
        case 21:return Format["fprintf"](ppf,[0,[11,"abs.",0],"abs."]);
        case 22:return Format["fprintf"](ppf,[0,[11,"+.",0],"+."]);
        case 23:return Format["fprintf"](ppf,[0,[11,"-.",0],"-."]);
        case 24:return Format["fprintf"](ppf,[0,[11,"*.",0],"*."]);
        case 25:return Format["fprintf"](ppf,[0,[11,"/.",0],"/."]);
        case 26:
         return Format["fprintf"]
                 (ppf,[0,[11,"string.length",0],"string.length"]);
         
        case 27:
         return Format["fprintf"]
                 (ppf,[0,[11,"string.unsafe_get",0],"string.unsafe_get"]);
         
        case 28:
         return Format["fprintf"]
                 (ppf,[0,[11,"string.unsafe_set",0],"string.unsafe_set"]);
         
        case 29:
         return Format["fprintf"](ppf,[0,[11,"string.get",0],"string.get"]);
        case 30:
         return Format["fprintf"](ppf,[0,[11,"string.set",0],"string.set"]);
        case 31:return Format["fprintf"](ppf,[0,[11,"isint",0],"isint"]);
        case 32:return Format["fprintf"](ppf,[0,[11,"isout",0],"isout"]);
        case 33:return Format["fprintf"](ppf,[0,[11,"testbit",0],"testbit"]);
        case 34:return Format["fprintf"](ppf,[0,[11,"bswap16",0],"bswap16"]);
        case 35:
         return Format["fprintf"]
                 (ppf,[0,[11,"int_as_pointer",0],"int_as_pointer"]);
         
        }}
    else
     {switch(param[0])
       {case 0:return Format["fprintf"](ppf,[0,[11,"revapply",0],"revapply"]);
        case 1:return Format["fprintf"](ppf,[0,[11,"dirapply",0],"dirapply"]);
        case 2:
         return Format["fprintf"]
                 (ppf,[0,[2,0,0],"%s"],string_of_loc_kind(param[1]));
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"global ",[15,0]],"global %a"],
                  Ident["print"],
                  param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"setglobal ",[15,0]],"setglobal %a"],
                  Ident["print"],
                  param[1]);
         
        case 5:
         var tag=param[1];
         
         if(param[3]!=0)
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"makemutable ",[4,3,0,0,0]],"makemutable %i"],
                    tag);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"makeblock ",[4,3,0,0,0]],"makeblock %i"],tag);
           }
         
        case 6:
         return Format["fprintf"]
                 (ppf,[0,[11,"field ",[4,3,0,0,0]],"field %i"],param[1]);
         
        case 7:
         if(param[2])
          {var instr="setfield_ptr ";}
         else
          {var instr="setfield_imm ";}
         
         return Format["fprintf"]
                 (ppf,[0,[2,0,[4,3,0,0,0]],"%s%i"],instr,param[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"floatfield ",[4,3,0,0,0]],"floatfield %i"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"setfloatfield ",[4,3,0,0,0]],"setfloatfield %i"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"duprecord ",[15,[12,32,[4,3,0,0,0]]]],
                   "duprecord %a %i"],
                  record_rep,
                  param[1],
                  param[2]);
         
        case 11:return Format["fprintf"](ppf,[0,[2,0,0],"%s"],param[1][1]);
        case 12:
         return Format["fprintf"]
                 (ppf,[0,[2,0,0],"%s"],Lambda["raise_kind"](param[1]));
         
        case 13:
         switch(param[1][0])
          {case 0:return Format["fprintf"](ppf,[0,[11,"==",0],"=="]);
           case 1:return Format["fprintf"](ppf,[0,[11,"!=",0],"!="]);
           case 2:return Format["fprintf"](ppf,[0,[12,60,0],"<"]);
           case 3:return Format["fprintf"](ppf,[0,[12,62,0],">"]);
           case 4:return Format["fprintf"](ppf,[0,[11,"<=",0],"<="]);
           case 5:return Format["fprintf"](ppf,[0,[11,">=",0],">="]);
           }
         
        case 14:
         return Format["fprintf"](ppf,[0,[4,3,0,0,[12,43,0]],"%i+"],param[1]);
        case 15:
         return Format["fprintf"]
                 (ppf,[0,[11,"+:=",[4,3,0,0,0]],"+:=%i"],param[1]);
         
        case 16:
         switch(param[1][0])
          {case 0:return Format["fprintf"](ppf,[0,[11,"==.",0],"==."]);
           case 1:return Format["fprintf"](ppf,[0,[11,"!=.",0],"!=."]);
           case 2:return Format["fprintf"](ppf,[0,[11,"<.",0],"<."]);
           case 3:return Format["fprintf"](ppf,[0,[11,">.",0],">."]);
           case 4:return Format["fprintf"](ppf,[0,[11,"<=.",0],"<=."]);
           case 5:return Format["fprintf"](ppf,[0,[11,">=.",0],">=."]);
           }
         
        case 17:
         return Format["fprintf"](ppf,[0,[11,"makearray ",0],"makearray "]);
        case 18:
         return Format["fprintf"]
                 (ppf,[0,[11,"array.length",0],"array.length"]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,[0,[11,"array.unsafe_get",0],"array.unsafe_get"]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,[0,[11,"array.unsafe_set",0],"array.unsafe_set"]);
         
        case 21:
         return Format["fprintf"](ppf,[0,[11,"array.get",0],"array.get"]);
        case 22:
         return Format["fprintf"](ppf,[0,[11,"array.set",0],"array.set"]);
        case 23:return print_boxed_integer$1("of_int",ppf,param[1]);
        case 24:return print_boxed_integer$1("to_int",ppf,param[1]);
        case 25:return print_boxed_integer_conversion(ppf,param[1],param[2]);
        case 26:return print_boxed_integer$1("neg",ppf,param[1]);
        case 27:return print_boxed_integer$1("add",ppf,param[1]);
        case 28:return print_boxed_integer$1("sub",ppf,param[1]);
        case 29:return print_boxed_integer$1("mul",ppf,param[1]);
        case 30:return print_boxed_integer$1("div",ppf,param[1]);
        case 31:return print_boxed_integer$1("mod",ppf,param[1]);
        case 32:return print_boxed_integer$1("and",ppf,param[1]);
        case 33:return print_boxed_integer$1("or",ppf,param[1]);
        case 34:return print_boxed_integer$1("xor",ppf,param[1]);
        case 35:return print_boxed_integer$1("lsl",ppf,param[1]);
        case 36:return print_boxed_integer$1("lsr",ppf,param[1]);
        case 37:return print_boxed_integer$1("asr",ppf,param[1]);
        case 38:
         var bi=param[1];
         
         switch(param[2][0])
          {case 0:return print_boxed_integer$1("==",ppf,bi);
           case 1:return print_boxed_integer$1("!=",ppf,bi);
           case 2:return print_boxed_integer$1("<",ppf,bi);
           case 3:return print_boxed_integer$1(">",ppf,bi);
           case 4:return print_boxed_integer$1("<=",ppf,bi);
           case 5:return print_boxed_integer$1(">=",ppf,bi);
           }
         
        case 39:return print_bigarray("get",param[1],param[3],ppf,param[4]);
        case 40:return print_bigarray("set",param[1],param[3],ppf,param[4]);
        case 41:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Bigarray.dim_",[4,3,0,0,0]],"Bigarray.dim_%i"],
                  param[1]);
         
        case 42:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.unsafe_get16",0],"string.unsafe_get16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.get16",0],"string.get16"]);
           }
         
        case 43:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.unsafe_get32",0],"string.unsafe_get32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.get32",0],"string.get32"]);
           }
         
        case 44:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.unsafe_get64",0],"string.unsafe_get64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.get64",0],"string.get64"]);
           }
         
        case 45:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.unsafe_set16",0],"string.unsafe_set16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.set16",0],"string.set16"]);
           }
         
        case 46:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.unsafe_set32",0],"string.unsafe_set32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.set32",0],"string.set32"]);
           }
         
        case 47:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.unsafe_set64",0],"string.unsafe_set64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"string.set64",0],"string.set64"]);
           }
         
        case 48:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"bigarray.array1.unsafe_get16",0],
                     "bigarray.array1.unsafe_get16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"bigarray.array1.get16",0],"bigarray.array1.get16"]);
           }
         
        case 49:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"bigarray.array1.unsafe_get32",0],
                     "bigarray.array1.unsafe_get32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"bigarray.array1.get32",0],"bigarray.array1.get32"]);
           }
         
        case 50:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"bigarray.array1.unsafe_get64",0],
                     "bigarray.array1.unsafe_get64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"bigarray.array1.get64",0],"bigarray.array1.get64"]);
           }
         
        case 51:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"bigarray.array1.unsafe_set16",0],
                     "bigarray.array1.unsafe_set16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"bigarray.array1.set16",0],"bigarray.array1.set16"]);
           }
         
        case 52:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"bigarray.array1.unsafe_set32",0],
                     "bigarray.array1.unsafe_set32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"bigarray.array1.set32",0],"bigarray.array1.set32"]);
           }
         
        case 53:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"bigarray.array1.unsafe_set64",0],
                     "bigarray.array1.unsafe_set64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,[11,"bigarray.array1.set64",0],"bigarray.array1.set64"]);
           }
         
        case 54:
         switch(param[1][0])
          {case 0:var const_name="big_endian";
           case 1:var const_name="word_size";
           case 2:var const_name="ostype_unix";
           case 3:var const_name="ostype_win32";
           case 4:var const_name="ostype_cygwin";
           }
         
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"sys.constant_",[2,0,0]],"sys.constant_%s"],
                  const_name);
         
        case 55:return print_boxed_integer$1("bswap",ppf,param[1]);
        }}
    };

var
 kind=
  function(param)
   {switch(param[0])
     {case 0:return "a";
      case 1:return "";
      case 2:return "o";
      case 3:return "v";
      case 4:return "r";
      }
    };

var
 to_print_kind=
  function(k)
   {switch(k[0])
     {case 0:return 1;case 1:return 0;case 2:return 2;case 3:return 3;}
    };

var
 aux=
  function(acc,lam)
   {switch(lam)
     {case 4:
       return aux
               (/* :: */[0,
                 /* tuple */[0,to_print_kind(lam[1]),lam[2],lam[3]],
                 acc],
                lam[4]);
       
      case 5:
       return aux
               (Pervasives["@"]
                 (List["map"]
                   (function(param){return /* tuple */[0,4,param[1],param[2]];},
                    lam[1]),
                  acc),
                lam[2]);
       
      default:return /* tuple */[0,acc,lam];}
    };

var
 flatten=
  function(lam)
   {switch(lam)
     {case 4:
       return aux
               (/* :: */[0,
                 /* tuple */[0,to_print_kind(lam[1]),lam[2],lam[3]],
                 0],
                lam[4]);
       
      case 5:
       return aux
               (List["map"]
                 (function(param){return /* tuple */[0,4,param[1],param[2]];},
                  lam[1]),
                lam[2]);
       
      default:throw [0,Assert_failure,[0,"bytecomp/printlambda.ml",294,9]];}
    };

var
 get_string=
  function(param,env)
   {var match=Env["find_module"](/* Pident */[0,param[1]],env);
    
    var match$1=match[1];
    
    switch(match$1)
     {case 1:
       var
        serializable_sigs=
         List["filter"]
          (function(x)
            {var exit;
             
             switch(x)
              {case 0:
                var exit$1;
                
                var $js=x[2][2];
                if(typeof $js=="number")
                 {switch($js){}}
                else
                 {switch($js[0]){case 0:return 0;default:exit$1=42;}}
                
                switch(exit$1){case 42:return 1;}
                
               case 2:exit=40;
               case 3:exit=40;
               case 5:exit=40;
               default:return 0;}
             
             switch(exit){case 40:return 1;}
             },
           match$1[1]);
       
       var match$2=List["nth"](serializable_sigs,param[2]);
       
       var exit;
       
       var $js;
       switch(match$2){case 0:exit=38;case 3:exit=38;default:$js=match$2[1];}
       
       var $js$1;
       switch(exit){case 38:$js$1=match$2[1];}
       return $js$1[2];
       
      default:throw [0,Assert_failure,[0,"bytecomp/printlambda.ml",320,9]];}
    };

var
 lambda=
  function(use_env,env,ppf,v)
   {var
     lam=
      function(ppf$1,x)
       {var exit;
        
        switch(x)
         {case 0:return Ident["print"](ppf$1,x[1]);
          case 1:return struct_const(ppf$1,x[1]);
          case 2:
           var
            lams=
             function(ppf$2,largs)
              {return List["iter"]
                       (function(l)
                         {return Format["fprintf"]
                                  (ppf$2,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                          },
                        largs);
               };
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,"(apply",[17,[0,"@ ",1,0],[15,[15,[12,41,[17,0,0]]]]]]],
                     "@[<2>(apply@ %a%a)@]"],
                    lam,
                    x[1],
                    lams,
                    x[2]);
           
          case 3:
           var kind$1=x[1];
           
           var
            pr_params=
             function(ppf$2,params)
              {if(kind$1!=0)
                {Format["fprintf"](ppf$2,[0,[11," (",0]," ("]);
                 var first=[0,1];
                 
                 List["iter"]
                  (function(param)
                    {if(first[1])
                      {first[1]=0,0}
                     else
                      {Format["fprintf"]
                        (ppf$2,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "])}
                     
                     return Ident["print"](ppf$2,param);
                     },
                   params);
                 return Format["fprintf"](ppf$2,[0,[12,41,0],")"]);
                 }
               else
                {return List["iter"]
                         (function(param)
                           {return Format["fprintf"]
                                    (ppf$2,
                                     [0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],
                                     Ident["print"],
                                     param);
                            },
                          params);
                 }
               };
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(function",
                       [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]],
                     "@[<2>(function%a@ %a)@]"],
                    pr_params,
                    x[2],
                    lam,
                    x[3]);
           
          case 4:exit=33;
          case 5:exit=33;
          case 6:
           var prim=x[1];
           
           var exit$1;
           
           if(typeof prim=="number")
            {switch(prim){}}
           else
            {switch(prim[0])
              {case 6:
                var match=x[2];
                
                if(match)
                 {var match$1=match[1];
                  
                  switch(match$1)
                   {case 6:
                     var match$2=match$1[1];
                     
                     if(typeof match$2=="number")
                      {switch(match$2){}}
                     else
                      {switch(match$2[0])
                        {case 3:
                          if(match$1[2])
                           {exit$1=34;}
                          else
                           {if(match[2])
                             {exit$1=34;}
                            else
                             {if(use_env)
                               {var id=match$2[1];
                                
                                var n=prim[1];
                                
                                return Format["fprintf"]
                                        (ppf$1,
                                         [0,[2,0,[12,46,[2,0,[12,47,[4,0,0,0,0]]]]],"%s.%s/%d"],
                                         id[2],
                                         get_string(/* tuple */[0,id,n],env),
                                         n);
                                }
                              else
                               {exit$1=34;}
                              }
                            }
                          
                         default:exit$1=34;}}
                     
                    default:exit$1=34;}
                  }
                else
                 {exit$1=34;}
                
               case 7:
                var match$3=x[2];
                
                if(match$3)
                 {var match$4=match$3[1];
                  
                  switch(match$4)
                   {case 6:
                     var match$5=match$4[1];
                     
                     if(typeof match$5=="number")
                      {switch(match$5){}}
                     else
                      {switch(match$5[0])
                        {case 3:
                          if(match$4[2])
                           {exit$1=34;}
                          else
                           {var match$6=match$3[2];
                            
                            if(match$6)
                             {if(match$6[2])
                               {exit$1=34;}
                              else
                               {if(use_env)
                                 {var id$1=match$5[1];
                                  
                                  var n$1=prim[1];
                                  
                                  return Format["fprintf"]
                                          (ppf$1,
                                           [0,
                                            [18,
                                             [1,[0,[11,"<2>",0],"<2>"]],
                                             [12,
                                              40,
                                              [2,
                                               0,
                                               [12,
                                                46,
                                                [2,0,[12,47,[4,0,0,0,[11," <- ",[15,[12,41,[17,0,0]]]]]]]]]]],
                                            "@[<2>(%s.%s/%d <- %a)@]"],
                                           id$1[2],
                                           get_string(/* tuple */[0,id$1,n$1],env),
                                           n$1,
                                           lam,
                                           match$6[1]);
                                  }
                                else
                                 {exit$1=34;}
                                }
                              }
                            else
                             {exit$1=34;}
                            }
                          
                         default:exit$1=34;}}
                     
                    default:exit$1=34;}
                  }
                else
                 {exit$1=34;}
                
               default:exit$1=34;}}
           
           switch(exit$1)
            {case 34:
              var
               lams$1=
                function(ppf$2,largs)
                 {return List["iter"]
                          (function(l)
                            {return Format["fprintf"]
                                     (ppf$2,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                             },
                           largs);
                  };
              
              return Format["fprintf"]
                      (ppf$1,
                       [0,
                        [18,
                         [1,[0,[11,"<2>",0],"<2>"]],
                         [12,40,[15,[15,[12,41,[17,0,0]]]]]],
                        "@[<2>(%a%a)@]"],
                       primitive,
                       prim,
                       lams$1,
                       x[2]);
              
             }
           
          case 7:
           var sw=x[2];
           
           var
            $$switch=
             function(ppf$2,sw$1)
              {var spc=[0,0];
               
               List["iter"]
                (function(param)
                  {if(spc[1])
                    {Format["fprintf"](ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "])}
                   else
                    {spc[1]=1,0}
                   
                   return Format["fprintf"]
                           (ppf$2,
                            [0,
                             [18,
                              [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                              [11,
                               "case int ",
                               [4,3,0,0,[12,58,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                             "@[<hv 1>case int %i:@ %a@]"],
                            param[1],
                            lam,
                            param[2]);
                   },
                 sw$1[2]);
               List["iter"]
                (function(param)
                  {if(spc[1])
                    {Format["fprintf"](ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "])}
                   else
                    {spc[1]=1,0}
                   
                   return Format["fprintf"]
                           (ppf$2,
                            [0,
                             [18,
                              [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                              [11,
                               "case tag ",
                               [4,3,0,0,[12,58,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                             "@[<hv 1>case tag %i:@ %a@]"],
                            param[1],
                            lam,
                            param[2]);
                   },
                 sw$1[4]);
               var match$7=sw$1[5];
               
               if(match$7)
                {if(spc[1])
                  {Format["fprintf"](ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "])}
                 else
                  {spc[1]=1,0}
                 
                 return Format["fprintf"]
                         (ppf$2,
                          [0,
                           [18,
                            [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                            [11,"default:",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                           "@[<hv 1>default:@ %a@]"],
                          lam,
                          match$7[1]);
                 }
               else
                {return 0;}
               };
           
           var match$7=sw[5];
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<1>",0],"<1>"]],
                      [12,
                       40,
                       [2,
                        0,
                        [12,
                         32,
                         [15,
                          [17,
                           [0,"@ ",1,0],
                           [18,
                            [1,[0,[11,"<v 0>",0],"<v 0>"]],
                            [15,[17,0,[12,41,[17,0,0]]]]]]]]]]],
                     "@[<1>(%s %a@ @[<v 0>%a@])@]"],
                    match$7?"switch":"switch*",
                    lam,
                    x[1],
                    $$switch,
                    sw);
           
          case 8:
           var $$default=x[3];
           
           var
            $$switch$1=
             function(ppf$2,cases)
              {var spc=[0,0];
               
               List["iter"]
                (function(param)
                  {if(spc[1])
                    {Format["fprintf"](ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "])}
                   else
                    {spc[1]=1,0}
                   
                   return Format["fprintf"]
                           (ppf$2,
                            [0,
                             [18,
                              [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                              [11,
                               'case "',
                               [2,0,[11,'":',[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                             '@[<hv 1>case "%s":@ %a@]'],
                            $$String["escaped"](param[1]),
                            lam,
                            param[2]);
                   },
                 cases);
               if($$default)
                {if(spc[1])
                  {Format["fprintf"](ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "])}
                 else
                  {spc[1]=1,0}
                 
                 return Format["fprintf"]
                         (ppf$2,
                          [0,
                           [18,
                            [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                            [11,"default:",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                           "@[<hv 1>default:@ %a@]"],
                          lam,
                          $$default[1]);
                 }
               else
                {return 0;}
               };
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<1>",0],"<1>"]],
                      [11,
                       "(stringswitch ",
                       [15,
                        [17,
                         [0,"@ ",1,0],
                         [18,
                          [1,[0,[11,"<v 0>",0],"<v 0>"]],
                          [15,[17,0,[12,41,[17,0,0]]]]]]]]],
                     "@[<1>(stringswitch %a@ @[<v 0>%a@])@]"],
                    lam,
                    x[1],
                    $$switch$1,
                    x[2]);
           
          case 9:
           var
            lams$2=
             function(ppf$2,largs)
              {return List["iter"]
                       (function(l)
                         {return Format["fprintf"]
                                  (ppf$2,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                          },
                        largs);
               };
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(exit",
                       [17,[0,"@ ",1,0],[4,0,0,0,[15,[12,41,[17,0,0]]]]]]],
                     "@[<2>(exit@ %d%a)@]"],
                    x[1],
                    lams$2,
                    x[2]);
           
          case 10:
           var match$8=x[2];
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(catch",
                       [17,
                        [0,"@ ",1,0],
                        [15,
                         [17,
                          [0,"@;<1 -1>",1,-1],
                          [11,
                           "with (",
                           [4,
                            0,
                            0,
                            0,
                            [15,[12,41,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                     "@[<2>(catch@ %a@;<1 -1>with (%d%a)@ %a)@]"],
                    lam,
                    x[1],
                    match$8[1],
                    function(ppf$2,vars)
                     {if(vars)
                       {return List["iter"]
                                (function(x$1)
                                  {return Format["fprintf"]
                                           (ppf$2,[0,[12,32,[15,0]]," %a"],Ident["print"],x$1);
                                   },
                                 vars);
                        }
                      else
                       {return 0;}
                      },
                    match$8[2],
                    lam,
                    x[3]);
           
          case 11:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(try",
                       [17,
                        [0,"@ ",1,0],
                        [15,
                         [17,
                          [0,"@;<1 -1>",1,-1],
                          [11,"with ",[15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]],
                     "@[<2>(try@ %a@;<1 -1>with %a@ %a)@]"],
                    lam,
                    x[1],
                    Ident["print"],
                    x[2],
                    lam,
                    x[3]);
           
          case 12:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(if",
                       [17,
                        [0,"@ ",1,0],
                        [15,
                         [17,
                          [0,"@ ",1,0],
                          [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]],
                     "@[<2>(if@ %a@ %a@ %a)@]"],
                    lam,
                    x[1],
                    lam,
                    x[2],
                    lam,
                    x[3]);
           
          case 13:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(seq",
                       [17,
                        [0,"@ ",1,0],
                        [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                     "@[<2>(seq@ %a@ %a)@]"],
                    lam,
                    x[1],
                    sequence,
                    x[2]);
           
          case 14:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(while",
                       [17,
                        [0,"@ ",1,0],
                        [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                     "@[<2>(while@ %a@ %a)@]"],
                    lam,
                    x[1],
                    lam,
                    x[2]);
           
          case 15:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(for ",
                       [15,
                        [17,
                         [0,"@ ",1,0],
                         [15,
                          [17,
                           [0,"@ ",1,0],
                           [2,
                            0,
                            [17,
                             [0,"@ ",1,0],
                             [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                     "@[<2>(for %a@ %a@ %s@ %a@ %a)@]"],
                    Ident["print"],
                    x[1],
                    lam,
                    x[2],
                    x[4]!=0?"downto":"to",
                    lam,
                    x[3],
                    lam,
                    x[5]);
           
          case 16:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(assign",
                       [17,
                        [0,"@ ",1,0],
                        [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                     "@[<2>(assign@ %a@ %a)@]"],
                    Ident["print"],
                    x[1],
                    lam,
                    x[2]);
           
          case 17:
           var k=x[1];
           
           var
            args=
             function(ppf$2,largs)
              {return List["iter"]
                       (function(l)
                         {return Format["fprintf"]
                                  (ppf$2,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                          },
                        largs);
               };
           
           if(k=0)
            {var kind$2="self";}
           else
            {if(k=2){var kind$2="cache";}else{var kind$2="";}}
           
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(send",
                       [2,
                        0,
                        [17,
                         [0,"@ ",1,0],
                         [15,[17,[0,"@ ",1,0],[15,[15,[12,41,[17,0,0]]]]]]]]]],
                     "@[<2>(send%s@ %a@ %a%a)@]"],
                    kind$2,
                    lam,
                    x[3],
                    lam,
                    x[2],
                    args,
                    x[4]);
           
          case 18:return lam(ppf$1,x[1]);
          case 19:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(ifused",
                       [17,
                        [0,"@ ",1,0],
                        [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                     "@[<2>(ifused@ %a@ %a)@]"],
                    Ident["print"],
                    x[1],
                    lam,
                    x[2]);
           
          }
        
        switch(exit)
         {case 33:
           var match$9=flatten(x);
           
           var
            bindings=
             function(ppf$2,id_arg_list)
              {var spc=[0,0];
               
               return List["iter"]
                       (function(param)
                         {if(spc[1])
                           {Format["fprintf"](ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "])}
                          else
                           {spc[1]=1,0}
                          
                          return Format["fprintf"]
                                  (ppf$2,
                                   [0,
                                    [18,
                                     [1,[0,[11,"<2>",0],"<2>"]],
                                     [15,[11," =",[2,0,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                                    "@[<2>%a =%s@ %a@]"],
                                   Ident["print"],
                                   param[2],
                                   kind(param[1]),
                                   lam,
                                   param[3]);
                          },
                        id_arg_list);
               };
           
           Format["fprintf"]
            (ppf$1,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [11,
                "(let",
                [17,
                 [0,"@ ",1,0],
                 [12,40,[18,[1,[0,[11,"<hv 1>",0],"<hv 1>"]],[15,[17,0,0]]]]]]],
              "@[<2>(let@ (@[<hv 1>%a@]"],
             bindings,
             List["rev"](match$9[1]));
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [12,41,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]],
                     ")@ %a)@]"],
                    lam,
                    match$9[2]);
           
          }
        };
    
    var
     sequence=
      function(ppf$1,l)
       {switch(l)
         {case 13:
           return Format["fprintf"]
                   (ppf$1,
                    [0,[15,[17,[0,"@ ",1,0],[15,0]]],"%a@ %a"],
                    sequence,
                    l[1],
                    sequence,
                    l[2]);
           
          default:return lam(ppf$1,l);}
        };
    
    return lam(ppf,v);
    };

var structured_constant=struct_const;

var env_lambda=lambda(1);

var lambda$1=lambda(0,Env["empty"]);

var
 flatten_seq=
  function(acc,lam)
   {switch(lam)
     {case 13:return flatten_seq(flatten_seq(acc,lam[1]),lam[2]);
      default:return /* :: */[0,lam,acc];}
    };

var Not_a_module="unknown primitive:caml_set_oo_id";

var
 flat=
  function(acc,lam)
   {switch(lam)
     {case 4:
       return flat
               (/* :: */[0,
                 /* tuple */[0,
                  /* Id */[0,/* record */[0,to_print_kind(lam[1]),lam[2]]],
                  lam[3]],
                 acc],
                lam[4]);
       
      case 5:
       return flat
               (Pervasives["@"]
                 (List["map"]
                   (function(param)
                     {return /* tuple */[0,
                              /* Id */[0,/* record */[0,4,param[1]]],
                              param[2]];
                      },
                    lam[1]),
                  acc),
                lam[2]);
       
      case 13:return flat(flat(acc,lam[1]),lam[2]);
      default:return /* :: */[0,/* tuple */[0,0,lam],acc];}
    };

var
 lambda_as_module=
  function(env,ppf,lam)
   {try
     {var exit;
      
      switch(lam)
       {case 6:
         var $js=lam[1];
         if(typeof $js=="number")
          {switch($js){}}
         else
          {switch($js[0])
            {case 4:
              var match=lam[2];
              
              if(match)
               {if(match[2])
                 {exit=10;}
                else
                 {var match$1=flat(0,match[1]);
                  
                  var exit$1;
                  
                  if(match$1)
                   {var match$2=match$1[1];
                    
                    if(match$2[1])
                     {exit$1=9;}
                    else
                     {var match$3=match$2[2];
                      
                      switch(match$3)
                       {case 6:
                         var $js$1=match$3[1];
                         if(typeof $js$1=="number")
                          {switch($js$1){}}
                         else
                          {switch($js$1[0])
                            {case 5:
                              return List["iter"]
                                      (function(param)
                                        {var l=param[2];
                                         
                                         var left=param[1];
                                         
                                         if(left)
                                          {var match$4=left[1];
                                           
                                           return Format["fprintf"]
                                                   (ppf,
                                                    [0,
                                                     [18,
                                                      [1,[0,[11,"<2>",0],"<2>"]],
                                                      [15,[11," =",[2,0,[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]],
                                                     "@[<2>%a =%s@ %a@]@."],
                                                    Ident["print"],
                                                    match$4[2],
                                                    kind(match$4[1]),
                                                    env_lambda(env),
                                                    l);
                                           }
                                         else
                                          {return Format["fprintf"]
                                                   (ppf,
                                                    [0,
                                                     [18,[1,[0,[11,"<2>",0],"<2>"]],[15,[17,0,[17,4,0]]]],
                                                     "@[<2>%a@]@."],
                                                    env_lambda(env),
                                                    l);
                                           }
                                         },
                                       List["rev"](match$1[2]));
                              
                             default:exit$1=9;}}
                         
                        default:exit$1=9;}
                      }
                    }
                  else
                   {exit$1=9;}
                  
                  switch(exit$1){case 9:throw Not_a_module;}
                  }
                }
              else
               {exit=10;}
              
             default:exit=10;}}
         
        default:exit=10;}
      
      switch(exit){case 10:throw Not_a_module;}
      }
    catch(exn)
     {env_lambda(env,ppf,lam);
      return Format["fprintf"]
              (ppf,[0,[11,"; lambda-failure",0],"; lambda-failure"]);
      }
    };

var
 seriaize=
  function(env,filename,lam)
   {var ou=Pervasives["open_out"](filename);
    
    var old=Format["get_margin"](0);
    
    var match=Format["set_margin"](1e4);
    
    var fmt=Format["formatter_of_out_channel"](ou);
    
    lambda$1(fmt,lam);
    Format["pp_print_flush"](fmt,0);
    Pervasives["close_out"](ou);
    return Format["set_margin"](old);
    };

var serialize_raw_js=[0,function(param,param$1,param$2){return 0;}];

var serialize_js=[0,function(param,param$1,param$2){return 0;}];

module["exports"]=
{"structured_constant":structured_constant,
 "env_lambda":env_lambda,
 "lambda":lambda$1,
 "primitive":primitive,
 "lambda_as_module":lambda_as_module,
 "seriaize":seriaize,
 "serialize_raw_js":serialize_raw_js,
 "serialize_js":serialize_js};

