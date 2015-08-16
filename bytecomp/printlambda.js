// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var Lambda=require("./lambda.js");
var Ident=require("./ident.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 struct_const=
  function(ppf,param)
   {switch(param[0])
     {case 0:
       var match=param[1];
       
       switch(match[0])
        {case 0:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0],
                    "%i"],
                   match[1]);
          
         case 1:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,[/* Caml_char */1,/* End_of_format */0],"%C"],
                   match[1]);
          
         case 2:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                    "%S"],
                   match[1]);
          
         case 3:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* String */2,/* No_padding */0,/* End_of_format */0],
                    "%s"],
                   match[1]);
          
         case 4:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Int32 */5,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,108,/* End_of_format */0]],
                    "%lil"],
                   match[1]);
          
         case 5:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Int64 */7,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,76,/* End_of_format */0]],
                    "%LiL"],
                   match[1]);
          
         case 6:
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Nativeint */6,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,110,/* End_of_format */0]],
                    "%nin"],
                   match[1]);
          
         }
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Int */4,
                  /* Int_i */3,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,97,/* End_of_format */0]],
                 "%ia"],
                param[1]);
       
      case 2:
       var match$1=param[3];
       
       var tag=param[1];
       
       if(match$1)
        {var
          sconsts=
           function(ppf,scl)
            {return List["iter"]
                     (function(sc)
                       {return Format["fprintf"]
                                (ppf,
                                 [/* Format */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,/* End_of_format */0]],
                                  "@ %a"],
                                 struct_const,
                                 sc);
                        },
                      scl);
             };
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<1>",/* End_of_format */0],
                      "<1>"]],
                    [/* Char_literal */12,
                     91,
                     [/* Int */4,
                      /* Int_i */3,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* Char_literal */12,
                       58,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Formatting_gen */18,
                         [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                         [/* Alpha */15,
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Char_literal */12,
                             93,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]]]]]]]]],
                   "@[<1>[%i:@ @[%a%a@]]@]"],
                  tag,
                  struct_const,
                  match$1[1],
                  sconsts,
                  match$1[2]);
         }
       else
        {return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,
                    91,
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,93,/* End_of_format */0]]],
                   "[%i]"],
                  tag);
         }
       
      case 3:
       var match$2=param[1];
       
       if(match$2)
        {var
          floats=
           function(ppf,fl)
            {return List["iter"]
                     (function(f)
                       {return Format["fprintf"]
                                (ppf,
                                 [/* Format */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* String */2,/* No_padding */0,/* End_of_format */0]],
                                  "@ %s"],
                                 f);
                        },
                      fl);
             };
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<1>",/* End_of_format */0],
                      "<1>"]],
                    [/* String_literal */11,
                     "[|",
                     [/* Formatting_gen */18,
                      [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                      [/* String */2,
                       /* No_padding */0,
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         [/* String_literal */11,
                          "|]",
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[<1>[|@[%s%a@]|]@]"],
                  match$2[1],
                  floats,
                  match$2[2]);
         }
       else
        {return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"[| |]",/* End_of_format */0],
                   "[| |]"]);
         }
       
      case 4:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Char_literal */12,
                  35,
                  [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                 "#%S"],
                param[1]);
       
      }
    };

var
 boxed_integer_name=
  function(param)
   {switch(param)
     {case 0:return "nativeint";case 1:return "int32";case 2:return "int64";}
    };

var
 print_boxed_integer=
  function(name,ppf,bi)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,
                95,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s_%s"],
             boxed_integer_name(bi),
             name);
    };

var
 print_boxed_integer_conversion=
  function(ppf,bi1,bi2)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                "_of_",
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s_of_%s"],
             boxed_integer_name(bi2),
             boxed_integer_name(bi1));
    };

var
 boxed_integer_mark=
  function(name,param)
   {switch(param)
     {case 0:
       return Printf["sprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "Nativeint.",
                  [/* String */2,/* No_padding */0,/* End_of_format */0]],
                 "Nativeint.%s"],
                name);
       
      case 1:
       return Printf["sprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "Int32.",
                  [/* String */2,/* No_padding */0,/* End_of_format */0]],
                 "Int32.%s"],
                name);
       
      case 2:
       return Printf["sprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "Int64.",
                  [/* String */2,/* No_padding */0,/* End_of_format */0]],
                 "Int64.%s"],
                name);
       
      }
    };

var
 print_boxed_integer$1=
  function(name,ppf,bi)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String */2,/* No_padding */0,/* End_of_format */0],
              "%s"],
             boxed_integer_mark(name,bi));
    };

var
 print_bigarray=
  function(name,unsafe,kind,ppf,layout)
   {var $js;
    switch(kind)
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
    switch(layout)
     {case 0:$js$1="unknown";case 1:$js$1="C";case 2:$js$1="Fortran";}
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String_literal */11,
               "Bigarray.",
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 91,
                 [/* String */2,
                  /* No_padding */0,
                  [/* Char_literal */12,
                   44,
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,93,/* End_of_format */0]]]]]]],
              "Bigarray.%s[%s,%s]"],
             unsafe?Pervasives["^"]("unsafe_",name):name,
             $js,
             $js$1);
    };

var
 record_rep=
  function(ppf,r)
   {if(r!==0)
     {return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,"float",/* End_of_format */0],
                "float"]);
      }
    else
     {return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* String_literal */11,"regular",/* End_of_format */0],
                "regular"]);
      }
    };

var
 string_of_loc_kind=
  function(param)
   {switch(param)
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
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"id",/* End_of_format */0],
                   "id"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "bytes_to_string",
                    /* End_of_format */0],
                   "bytes_to_string"]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "bytes_of_string",
                    /* End_of_format */0],
                   "bytes_of_string"]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"ignore",/* End_of_format */0],
                   "ignore"]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"force",/* End_of_format */0],
                   "force"]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"&&",/* End_of_format */0],
                   "&&"]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"||",/* End_of_format */0],
                   "||"]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"not",/* End_of_format */0],
                   "not"]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,126,/* End_of_format */0],
                   "~"]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,43,/* End_of_format */0],
                   "+"]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,45,/* End_of_format */0],
                   "-"]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,42,/* End_of_format */0],
                   "*"]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,47,/* End_of_format */0],
                   "/"]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"mod",/* End_of_format */0],
                   "mod"]);
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"and",/* End_of_format */0],
                   "and"]);
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"or",/* End_of_format */0],
                   "or"]);
         
        case 16:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"xor",/* End_of_format */0],
                   "xor"]);
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"lsl",/* End_of_format */0],
                   "lsl"]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"lsr",/* End_of_format */0],
                   "lsr"]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"asr",/* End_of_format */0],
                   "asr"]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"int_of_float",/* End_of_format */0],
                   "int_of_float"]);
         
        case 21:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"float_of_int",/* End_of_format */0],
                   "float_of_int"]);
         
        case 22:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"~.",/* End_of_format */0],
                   "~."]);
         
        case 23:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"abs.",/* End_of_format */0],
                   "abs."]);
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"+.",/* End_of_format */0],
                   "+."]);
         
        case 25:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"-.",/* End_of_format */0],
                   "-."]);
         
        case 26:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"*.",/* End_of_format */0],
                   "*."]);
         
        case 27:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"/.",/* End_of_format */0],
                   "/."]);
         
        case 28:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "string.length",
                    /* End_of_format */0],
                   "string.length"]);
         
        case 29:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "string.unsafe_get",
                    /* End_of_format */0],
                   "string.unsafe_get"]);
         
        case 30:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "string.unsafe_set",
                    /* End_of_format */0],
                   "string.unsafe_set"]);
         
        case 31:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"string.get",/* End_of_format */0],
                   "string.get"]);
         
        case 32:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"string.set",/* End_of_format */0],
                   "string.set"]);
         
        case 33:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"bytes.length",/* End_of_format */0],
                   "bytes.length"]);
         
        case 34:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "bytes.unsafe_get",
                    /* End_of_format */0],
                   "bytes.unsafe_get"]);
         
        case 35:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "bytes.unsafe_set",
                    /* End_of_format */0],
                   "bytes.unsafe_set"]);
         
        case 36:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"bytes.get",/* End_of_format */0],
                   "bytes.get"]);
         
        case 37:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"bytes.set",/* End_of_format */0],
                   "bytes.set"]);
         
        case 38:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"isint",/* End_of_format */0],
                   "isint"]);
         
        case 39:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"isout",/* End_of_format */0],
                   "isout"]);
         
        case 40:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"testbit",/* End_of_format */0],
                   "testbit"]);
         
        case 41:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"bswap16",/* End_of_format */0],
                   "bswap16"]);
         
        case 42:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "int_as_pointer",
                    /* End_of_format */0],
                   "int_as_pointer"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"revapply",/* End_of_format */0],
                   "revapply"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"dirapply",/* End_of_format */0],
                   "dirapply"]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String */2,/* No_padding */0,/* End_of_format */0],
                   "%s"],
                  string_of_loc_kind(param[1]));
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "global ",
                    [/* Alpha */15,/* End_of_format */0]],
                   "global %a"],
                  Ident["print"],
                  param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "setglobal ",
                    [/* Alpha */15,/* End_of_format */0]],
                   "setglobal %a"],
                  Ident["print"],
                  param[1]);
         
        case 5:
         var tag=param[1];
         
         if(param[3]!==0)
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "makemutable ",
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]],
                     "makemutable %i"],
                    tag);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "makeblock ",
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]],
                     "makeblock %i"],
                    tag);
           }
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "field ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "field %i"],
                  param[1]);
         
        case 7:
         if(param[2])
          {var instr="setfield_ptr ";}
         else
          {var instr="setfield_imm ";}
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "%s%i"],
                  instr,
                  param[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "floatfield ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "floatfield %i"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "setfloatfield ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "setfloatfield %i"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "duprecord ",
                    [/* Alpha */15,
                     [/* Char_literal */12,
                      32,
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]]]],
                   "duprecord %a %i"],
                  record_rep,
                  param[1],
                  param[2]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String */2,/* No_padding */0,/* End_of_format */0],
                   "%s"],
                  param[1][1]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String */2,/* No_padding */0,/* End_of_format */0],
                   "%s"],
                  Lambda["raise_kind"](param[1]));
         
        case 13:
         switch(param[1])
          {case 0:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"==",/* End_of_format */0],
                      "=="]);
            
           case 1:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"!=",/* End_of_format */0],
                      "!="]);
            
           case 2:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* Char_literal */12,60,/* End_of_format */0],
                      "<"]);
            
           case 3:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* Char_literal */12,62,/* End_of_format */0],
                      ">"]);
            
           case 4:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"<=",/* End_of_format */0],
                      "<="]);
            
           case 5:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,">=",/* End_of_format */0],
                      ">="]);
            
           }
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Int */4,
                    /* Int_i */3,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* Char_literal */12,43,/* End_of_format */0]],
                   "%i+"],
                  param[1]);
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "+:=",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "+:=%i"],
                  param[1]);
         
        case 16:
         switch(param[1])
          {case 0:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"==.",/* End_of_format */0],
                      "==."]);
            
           case 1:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"!=.",/* End_of_format */0],
                      "!=."]);
            
           case 2:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"<.",/* End_of_format */0],
                      "<."]);
            
           case 3:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,">.",/* End_of_format */0],
                      ">."]);
            
           case 4:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"<=.",/* End_of_format */0],
                      "<=."]);
            
           case 5:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,">=.",/* End_of_format */0],
                      ">=."]);
            
           }
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"makearray ",/* End_of_format */0],
                   "makearray "]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"array.length",/* End_of_format */0],
                   "array.length"]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "array.unsafe_get",
                    /* End_of_format */0],
                   "array.unsafe_get"]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "array.unsafe_set",
                    /* End_of_format */0],
                   "array.unsafe_set"]);
         
        case 21:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"array.get",/* End_of_format */0],
                   "array.get"]);
         
        case 22:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"array.set",/* End_of_format */0],
                   "array.set"]);
         
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
         
         switch(param[2])
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
                  [/* Format */0,
                   [/* String_literal */11,
                    "Bigarray.dim_",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "Bigarray.dim_%i"],
                  param[1]);
         
        case 42:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "string.unsafe_get16",
                      /* End_of_format */0],
                     "string.unsafe_get16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,"string.get16",/* End_of_format */0],
                     "string.get16"]);
           }
         
        case 43:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "string.unsafe_get32",
                      /* End_of_format */0],
                     "string.unsafe_get32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,"string.get32",/* End_of_format */0],
                     "string.get32"]);
           }
         
        case 44:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "string.unsafe_get64",
                      /* End_of_format */0],
                     "string.unsafe_get64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,"string.get64",/* End_of_format */0],
                     "string.get64"]);
           }
         
        case 45:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "string.unsafe_set16",
                      /* End_of_format */0],
                     "string.unsafe_set16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,"string.set16",/* End_of_format */0],
                     "string.set16"]);
           }
         
        case 46:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "string.unsafe_set32",
                      /* End_of_format */0],
                     "string.unsafe_set32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,"string.set32",/* End_of_format */0],
                     "string.set32"]);
           }
         
        case 47:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "string.unsafe_set64",
                      /* End_of_format */0],
                     "string.unsafe_set64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,"string.set64",/* End_of_format */0],
                     "string.set64"]);
           }
         
        case 48:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.unsafe_get16",
                      /* End_of_format */0],
                     "bigarray.array1.unsafe_get16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.get16",
                      /* End_of_format */0],
                     "bigarray.array1.get16"]);
           }
         
        case 49:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.unsafe_get32",
                      /* End_of_format */0],
                     "bigarray.array1.unsafe_get32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.get32",
                      /* End_of_format */0],
                     "bigarray.array1.get32"]);
           }
         
        case 50:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.unsafe_get64",
                      /* End_of_format */0],
                     "bigarray.array1.unsafe_get64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.get64",
                      /* End_of_format */0],
                     "bigarray.array1.get64"]);
           }
         
        case 51:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.unsafe_set16",
                      /* End_of_format */0],
                     "bigarray.array1.unsafe_set16"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.set16",
                      /* End_of_format */0],
                     "bigarray.array1.set16"]);
           }
         
        case 52:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.unsafe_set32",
                      /* End_of_format */0],
                     "bigarray.array1.unsafe_set32"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.set32",
                      /* End_of_format */0],
                     "bigarray.array1.set32"]);
           }
         
        case 53:
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.unsafe_set64",
                      /* End_of_format */0],
                     "bigarray.array1.unsafe_set64"]);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      "bigarray.array1.set64",
                      /* End_of_format */0],
                     "bigarray.array1.set64"]);
           }
         
        case 54:
         switch(param[1])
          {case 0:var const_name="big_endian";
           case 1:var const_name="word_size";
           case 2:var const_name="ostype_unix";
           case 3:var const_name="ostype_win32";
           case 4:var const_name="ostype_cygwin";
           }
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "sys.constant_",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "sys.constant_%s"],
                  const_name);
         
        case 55:return print_boxed_integer$1("bswap",ppf,param[1]);
        }}
    };

var
 kind=
  function(param)
   {switch(param)
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
   {switch(k)
     {case 0:return /* Strict */1;
      case 1:return /* Alias */0;
      case 2:return /* StrictOpt */2;
      case 3:return /* Variable */3;
      }
    };

var
 aux=
  function(acc,lam)
   {switch(lam[0])
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
                   (function(param)
                     {return /* tuple */[0,/* Recursive */4,param[1],param[2]];},
                    lam[1]),
                  acc),
                lam[2]);
       
      default:return /* tuple */[0,acc,lam];}
    };

var
 flatten=
  function(lam)
   {switch(lam[0])
     {case 4:
       return aux
               (/* :: */[0,
                 /* tuple */[0,to_print_kind(lam[1]),lam[2],lam[3]],
                 /* [] */0],
                lam[4]);
       
      case 5:
       return aux
               (List["map"]
                 (function(param)
                   {return /* tuple */[0,/* Recursive */4,param[1],param[2]];},
                  lam[1]),
                lam[2]);
       
      default:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/printlambda.ml",302,9]];
       }
    };

var
 get_string=
  function(param,env)
   {var match=Env["find_module"](/* Pident */[0,param[1]],env);
    
    var match$1=match[1];
    
    switch(match$1[0])
     {case 1:
       var
        serializable_sigs=
         List["filter"]
          (function(x)
            {var exit;
             
             switch(x[0])
              {case 0:
                var exit$1;
                
                var $js=x[2][2];
                if(typeof $js==="number")
                 {switch($js){}}
                else
                 {switch($js[0])
                   {case 0:return /* false */0;default:exit$1=42;}}
                
                switch(exit$1){case 42:return /* true */1;}
                
               case 2:exit=40;
               case 3:exit=40;
               case 5:exit=40;
               default:return /* false */0;}
             
             switch(exit){case 40:return /* true */1;}
             },
           match$1[1]);
       
       var match$2=List["nth"](serializable_sigs,param[2]);
       
       var exit;
       
       var $js;
       switch(match$2[0])
        {case 0:exit=38;case 3:exit=38;default:$js=match$2[1];}
       
       var $js$1;
       switch(exit){case 38:$js$1=match$2[1];}
       return $js$1[2];
       
      default:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/printlambda.ml",328,9]];
       }
    };

var
 lambda=
  function(use_env,env,ppf,v)
   {var
     lam=
      function(ppf,x)
       {var exit;
        
        switch(x[0])
         {case 0:return Ident["print"](ppf,x[1]);
          case 1:return struct_const(ppf,x[1]);
          case 2:
           var
            lams=
             function(ppf,largs)
              {return List["iter"]
                       (function(l)
                         {return Format["fprintf"]
                                  (ppf,
                                   [/* Format */0,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Alpha */15,/* End_of_format */0]],
                                    "@ %a"],
                                   lam,
                                   l);
                          },
                        largs);
               };
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(apply",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           41,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]],
                     "@[<2>(apply@ %a%a)@]"],
                    lam,
                    x[1],
                    lams,
                    x[2]);
           
          case 3:
           var kind$1=x[1];
           
           var
            pr_params=
             function(ppf,params)
              {if(kind$1!==0)
                {Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* String_literal */11," (",/* End_of_format */0],
                    " ("]);
                 var first=[0,/* true */1];
                 
                 List["iter"]
                  (function(param)
                    {if(first[1])
                      {first[1]=/* false */0}
                     else
                      {Format["fprintf"]
                        (ppf,
                         [/* Format */0,
                          [/* Char_literal */12,
                           44,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            /* End_of_format */0]],
                          ",@ "])}
                     
                     return Ident["print"](ppf,param);
                     },
                   params);
                 return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* Char_literal */12,41,/* End_of_format */0],
                           ")"]);
                 }
               else
                {return List["iter"]
                         (function(param)
                           {return Format["fprintf"]
                                    (ppf,
                                     [/* Format */0,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@ ",1,0],
                                       [/* Alpha */15,/* End_of_format */0]],
                                      "@ %a"],
                                     Ident["print"],
                                     param);
                            },
                          params);
                 }
               };
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(function",
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           41,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]],
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
           
           if(typeof prim==="number")
            {switch(prim){}}
           else
            {switch(prim[0])
              {case 6:
                var match=x[2];
                
                if(match)
                 {var match$1=match[1];
                  
                  switch(match$1[0])
                   {case 6:
                     var match$2=match$1[1];
                     
                     if(typeof match$2==="number")
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
                                        (ppf,
                                         [/* Format */0,
                                          [/* String */2,
                                           /* No_padding */0,
                                           [/* Char_literal */12,
                                            46,
                                            [/* String */2,
                                             /* No_padding */0,
                                             [/* Char_literal */12,
                                              47,
                                              [/* Int */4,
                                               /* Int_d */0,
                                               /* No_padding */0,
                                               /* No_precision */0,
                                               /* End_of_format */0]]]]],
                                          "%s.%s/%d"],
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
                  
                  switch(match$4[0])
                   {case 6:
                     var match$5=match$4[1];
                     
                     if(typeof match$5==="number")
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
                                          (ppf,
                                           [/* Format */0,
                                            [/* Formatting_gen */18,
                                             [/* Open_box */1,
                                              [/* Format */0,
                                               [/* String_literal */11,"<2>",/* End_of_format */0],
                                               "<2>"]],
                                             [/* Char_literal */12,
                                              40,
                                              [/* String */2,
                                               /* No_padding */0,
                                               [/* Char_literal */12,
                                                46,
                                                [/* String */2,
                                                 /* No_padding */0,
                                                 [/* Char_literal */12,
                                                  47,
                                                  [/* Int */4,
                                                   /* Int_d */0,
                                                   /* No_padding */0,
                                                   /* No_precision */0,
                                                   [/* String_literal */11,
                                                    " <- ",
                                                    [/* Alpha */15,
                                                     [/* Char_literal */12,
                                                      41,
                                                      [/* Formatting_lit */17,
                                                       /* Close_box */0,
                                                       /* End_of_format */0]]]]]]]]]]],
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
                function(ppf,largs)
                 {return List["iter"]
                          (function(l)
                            {return Format["fprintf"]
                                     (ppf,
                                      [/* Format */0,
                                       [/* Formatting_lit */17,
                                        [/* Break */0,"@ ",1,0],
                                        [/* Alpha */15,/* End_of_format */0]],
                                       "@ %a"],
                                      lam,
                                      l);
                             },
                           largs);
                  };
              
              return Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<2>",/* End_of_format */0],
                           "<2>"]],
                         [/* Char_literal */12,
                          40,
                          [/* Alpha */15,
                           [/* Alpha */15,
                            [/* Char_literal */12,
                             41,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]]]],
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
             function(ppf,sw)
              {var spc=[0,/* false */0];
               
               List["iter"]
                (function(param)
                  {if(spc[1])
                    {Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         /* End_of_format */0],
                        "@ "])}
                   else
                    {spc[1]=/* true */1}
                   
                   return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                                "<hv 1>"]],
                              [/* String_literal */11,
                               "case int ",
                               [/* Int */4,
                                /* Int_i */3,
                                /* No_padding */0,
                                /* No_precision */0,
                                [/* Char_literal */12,
                                 58,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    /* End_of_format */0]]]]]]],
                             "@[<hv 1>case int %i:@ %a@]"],
                            param[1],
                            lam,
                            param[2]);
                   },
                 sw[2]);
               List["iter"]
                (function(param)
                  {if(spc[1])
                    {Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         /* End_of_format */0],
                        "@ "])}
                   else
                    {spc[1]=/* true */1}
                   
                   return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                                "<hv 1>"]],
                              [/* String_literal */11,
                               "case tag ",
                               [/* Int */4,
                                /* Int_i */3,
                                /* No_padding */0,
                                /* No_precision */0,
                                [/* Char_literal */12,
                                 58,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    /* End_of_format */0]]]]]]],
                             "@[<hv 1>case tag %i:@ %a@]"],
                            param[1],
                            lam,
                            param[2]);
                   },
                 sw[4]);
               var match$7=sw[5];
               
               if(match$7)
                {if(spc[1])
                  {Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       /* End_of_format */0],
                      "@ "])}
                 else
                  {spc[1]=/* true */1}
                 
                 return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                              "<hv 1>"]],
                            [/* String_literal */11,
                             "default:",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]],
                           "@[<hv 1>default:@ %a@]"],
                          lam,
                          match$7[1]);
                 }
               else
                {return /* () */0;}
               };
           
           var match$7=sw[5];
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<1>",/* End_of_format */0],
                        "<1>"]],
                      [/* Char_literal */12,
                       40,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<v 0>",/* End_of_format */0],
                              "<v 0>"]],
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Char_literal */12,
                               41,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]]]]]]],
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
             function(ppf,cases)
              {var spc=[0,/* false */0];
               
               List["iter"]
                (function(param)
                  {if(spc[1])
                    {Format["fprintf"]
                      (ppf,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         /* End_of_format */0],
                        "@ "])}
                   else
                    {spc[1]=/* true */1}
                   
                   return Format["fprintf"]
                           (ppf,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                                "<hv 1>"]],
                              [/* String_literal */11,
                               'case "',
                               [/* String */2,
                                /* No_padding */0,
                                [/* String_literal */11,
                                 '":',
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    /* End_of_format */0]]]]]]],
                             '@[<hv 1>case "%s":@ %a@]'],
                            $$String["escaped"](param[1]),
                            lam,
                            param[2]);
                   },
                 cases);
               if($$default)
                {if(spc[1])
                  {Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       /* End_of_format */0],
                      "@ "])}
                 else
                  {spc[1]=/* true */1}
                 
                 return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                              "<hv 1>"]],
                            [/* String_literal */11,
                             "default:",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]],
                           "@[<hv 1>default:@ %a@]"],
                          lam,
                          $$default[1]);
                 }
               else
                {return /* () */0;}
               };
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<1>",/* End_of_format */0],
                        "<1>"]],
                      [/* String_literal */11,
                       "(stringswitch ",
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<v 0>",/* End_of_format */0],
                            "<v 0>"]],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Char_literal */12,
                             41,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]]]]]]],
                     "@[<1>(stringswitch %a@ @[<v 0>%a@])@]"],
                    lam,
                    x[1],
                    $$switch$1,
                    x[2]);
           
          case 9:
           var
            lams$2=
             function(ppf,largs)
              {return List["iter"]
                       (function(l)
                         {return Format["fprintf"]
                                  (ppf,
                                   [/* Format */0,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Alpha */15,/* End_of_format */0]],
                                    "@ %a"],
                                   lam,
                                   l);
                          },
                        largs);
               };
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(exit",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Int */4,
                         /* Int_d */0,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           41,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]],
                     "@[<2>(exit@ %d%a)@]"],
                    x[1],
                    lams$2,
                    x[2]);
           
          case 10:
           var match$8=x[2];
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(catch",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;<1 -1>",1,-1],
                          [/* String_literal */11,
                           "with (",
                           [/* Int */4,
                            /* Int_d */0,
                            /* No_padding */0,
                            /* No_precision */0,
                            [/* Alpha */15,
                             [/* Char_literal */12,
                              41,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Char_literal */12,
                                 41,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]]]]]]],
                     "@[<2>(catch@ %a@;<1 -1>with (%d%a)@ %a)@]"],
                    lam,
                    x[1],
                    match$8[1],
                    function(ppf,vars)
                     {if(vars)
                       {return List["iter"]
                                (function(x)
                                  {return Format["fprintf"]
                                           (ppf,
                                            [/* Format */0,
                                             [/* Char_literal */12,
                                              32,
                                              [/* Alpha */15,/* End_of_format */0]],
                                             " %a"],
                                            Ident["print"],
                                            x);
                                   },
                                 vars);
                        }
                      else
                       {return /* () */0;}
                      },
                    match$8[2],
                    lam,
                    x[3]);
           
          case 11:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(try",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;<1 -1>",1,-1],
                          [/* String_literal */11,
                           "with ",
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Char_literal */12,
                               41,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]]]]]]],
                     "@[<2>(try@ %a@;<1 -1>with %a@ %a)@]"],
                    lam,
                    x[1],
                    Ident["print"],
                    x[2],
                    lam,
                    x[3]);
           
          case 12:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(if",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Alpha */15,
                             [/* Char_literal */12,
                              41,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]],
                     "@[<2>(if@ %a@ %a@ %a)@]"],
                    lam,
                    x[1],
                    lam,
                    x[2],
                    lam,
                    x[3]);
           
          case 13:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(seq",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            41,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]],
                     "@[<2>(seq@ %a@ %a)@]"],
                    lam,
                    x[1],
                    sequence,
                    x[2]);
           
          case 14:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(while",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            41,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]],
                     "@[<2>(while@ %a@ %a)@]"],
                    lam,
                    x[1],
                    lam,
                    x[2]);
           
          case 15:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(for ",
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Char_literal */12,
                                 41,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]]]]]]],
                     "@[<2>(for %a@ %a@ %s@ %a@ %a)@]"],
                    Ident["print"],
                    x[1],
                    lam,
                    x[2],
                    x[4]!==0?"downto":"to",
                    lam,
                    x[3],
                    lam,
                    x[5]);
           
          case 16:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(assign",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            41,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]],
                     "@[<2>(assign@ %a@ %a)@]"],
                    Ident["print"],
                    x[1],
                    lam,
                    x[2]);
           
          case 17:
           var k=x[1];
           
           var
            args=
             function(ppf,largs)
              {return List["iter"]
                       (function(l)
                         {return Format["fprintf"]
                                  (ppf,
                                   [/* Format */0,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Alpha */15,/* End_of_format */0]],
                                    "@ %a"],
                                   lam,
                                   l);
                          },
                        largs);
               };
           
           if(k===/* Self */0)
            {var kind$2="self";}
           else
            {if(k===/* Cached */2){var kind$2="cache";}else{var kind$2="";}}
           
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(send",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Alpha */15,
                             [/* Char_literal */12,
                              41,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]],
                     "@[<2>(send%s@ %a@ %a%a)@]"],
                    kind$2,
                    lam,
                    x[3],
                    lam,
                    x[2],
                    args,
                    x[4]);
           
          case 18:return lam(ppf,x[1]);
          case 19:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(ifused",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            41,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]],
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
             function(ppf,id_arg_list)
              {var spc=[0,/* false */0];
               
               return List["iter"]
                       (function(param)
                         {if(spc[1])
                           {Format["fprintf"]
                             (ppf,
                              [/* Format */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                /* End_of_format */0],
                               "@ "])}
                          else
                           {spc[1]=/* true */1}
                          
                          return Format["fprintf"]
                                  (ppf,
                                   [/* Format */0,
                                    [/* Formatting_gen */18,
                                     [/* Open_box */1,
                                      [/* Format */0,
                                       [/* String_literal */11,"<2>",/* End_of_format */0],
                                       "<2>"]],
                                     [/* Alpha */15,
                                      [/* String_literal */11,
                                       " =",
                                       [/* String */2,
                                        /* No_padding */0,
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@ ",1,0],
                                         [/* Alpha */15,
                                          [/* Formatting_lit */17,
                                           /* Close_box */0,
                                           /* End_of_format */0]]]]]]],
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
            (ppf,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,
                [/* Format */0,
                 [/* String_literal */11,"<2>",/* End_of_format */0],
                 "<2>"]],
               [/* String_literal */11,
                "(let",
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* Char_literal */12,
                  40,
                  [/* Formatting_gen */18,
                   [/* Open_box */1,
                    [/* Format */0,
                     [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                     "<hv 1>"]],
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     /* End_of_format */0]]]]]]],
              "@[<2>(let@ (@[<hv 1>%a@]"],
             bindings,
             List["rev"](match$9[1]));
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Char_literal */12,
                      41,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Alpha */15,
                        [/* Char_literal */12,
                         41,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]],
                     ")@ %a)@]"],
                    lam,
                    match$9[2]);
           
          }
        };
    
    var
     sequence=
      function(ppf,l)
       {switch(l[0])
         {case 13:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Alpha */15,/* End_of_format */0]]],
                     "%a@ %a"],
                    sequence,
                    l[1],
                    sequence,
                    l[2]);
           
          default:return lam(ppf,l);}
        };
    
    return lam(ppf,v);
    };

var structured_constant=struct_const;

var env_lambda=lambda(/* true */1);

var lambda$1=lambda(/* false */0,Env["empty"]);

var
 flatten_seq=
  function(acc,lam)
   {switch(lam[0])
     {case 13:return flatten_seq(flatten_seq(acc,lam[1]),lam[2]);
      default:return /* :: */[0,lam,acc];}
    };

var
 Not_a_module=
  CamlPrimitive["caml_set_oo_id"]([248,"Printlambda.Not_a_module",0]);

var
 flat=
  function(acc,lam)
   {switch(lam[0])
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
                              /* Id */[0,/* record */[0,/* Recursive */4,param[1]]],
                              param[2]];
                      },
                    lam[1]),
                  acc),
                lam[2]);
       
      case 13:return flat(flat(acc,lam[1]),lam[2]);
      default:return /* :: */[0,/* tuple */[0,/* Nop */0,lam],acc];}
    };

var
 lambda_as_module=
  function(env,ppf,lam)
   {try
     {var exit;
      
      switch(lam[0])
       {case 6:
         var $js=lam[1];
         if(typeof $js==="number")
          {switch($js){}}
         else
          {switch($js[0])
            {case 4:
              var match=lam[2];
              
              if(match)
               {if(match[2])
                 {exit=10;}
                else
                 {var match$1=flat(/* [] */0,match[1]);
                  
                  var exit$1;
                  
                  if(match$1)
                   {var match$2=match$1[1];
                    
                    if(match$2[1])
                     {exit$1=9;}
                    else
                     {var match$3=match$2[2];
                      
                      switch(match$3[0])
                       {case 6:
                         var $js$1=match$3[1];
                         if(typeof $js$1==="number")
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
                                                    [/* Format */0,
                                                     [/* Formatting_gen */18,
                                                      [/* Open_box */1,
                                                       [/* Format */0,
                                                        [/* String_literal */11,"<2>",/* End_of_format */0],
                                                        "<2>"]],
                                                      [/* Alpha */15,
                                                       [/* String_literal */11,
                                                        " =",
                                                        [/* String */2,
                                                         /* No_padding */0,
                                                         [/* Formatting_lit */17,
                                                          [/* Break */0,"@ ",1,0],
                                                          [/* Alpha */15,
                                                           [/* Formatting_lit */17,
                                                            /* Close_box */0,
                                                            [/* Formatting_lit */17,
                                                             /* Flush_newline */4,
                                                             /* End_of_format */0]]]]]]]],
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
                                                    [/* Format */0,
                                                     [/* Formatting_gen */18,
                                                      [/* Open_box */1,
                                                       [/* Format */0,
                                                        [/* String_literal */11,"<2>",/* End_of_format */0],
                                                        "<2>"]],
                                                      [/* Alpha */15,
                                                       [/* Formatting_lit */17,
                                                        /* Close_box */0,
                                                        [/* Formatting_lit */17,
                                                         /* Flush_newline */4,
                                                         /* End_of_format */0]]]],
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
              (ppf,
               [/* Format */0,
                [/* String_literal */11,
                 "; lambda-failure",
                 /* End_of_format */0],
                "; lambda-failure"]);
      }
    };

var
 seriaize=
  function(env,filename,lam)
   {var ou=Pervasives["open_out"](filename);
    
    var old=Format["get_margin"](/* () */0);
    
    var match=Format["set_margin"](1e4);
    
    var fmt=Format["formatter_of_out_channel"](ou);
    
    lambda$1(fmt,lam);
    Format["pp_print_flush"](fmt,/* () */0);
    Pervasives["close_out"](ou);
    return Format["set_margin"](old);
    };

var serialize_raw_js=[0,function(param,param$1,param$2){return /* () */0;}];

var serialize_js=[0,function(param,param$1,param$2){return /* () */0;}];

module["exports"]=
{"structured_constant":structured_constant,
 "env_lambda":env_lambda,
 "lambda":lambda$1,
 "primitive":primitive,
 "lambda_as_module":lambda_as_module,
 "seriaize":seriaize,
 "serialize_raw_js":serialize_raw_js,
 "serialize_js":serialize_js};

