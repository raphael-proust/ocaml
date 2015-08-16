// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 fmt_position=
  function(with_name,f,l)
   {if(with_name){var fname=l[1];}else{var fname="";}
    
    if(l[2]===-1)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,
                  91,
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* Char_literal */12,93,/* End_of_format */0]]]],
                "%s[%d]"],
               fname,
               l[4]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,
                  91,
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* Char_literal */12,
                    44,
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,
                      43,
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* Char_literal */12,93,/* End_of_format */0]]]]]]]],
                "%s[%d,%d+%d]"],
               fname,
               l[2],
               l[3],
               l[4]-l[3]);
      }
    };

var
 fmt_location=
  function(f,loc)
   {var p_2nd_name=CamlPrimitive["caml_string_notequal"](loc[1][1],loc[2][1]);
    
    Format["fprintf"]
     (f,
      [/* Format */0,
       [/* Char_literal */12,
        40,
        [/* Alpha */15,
         [/* String_literal */11,
          "..",
          [/* Alpha */15,[/* Char_literal */12,41,/* End_of_format */0]]]]],
       "(%a..%a)"],
      fmt_position(/* true */1),
      loc[1],
      fmt_position(p_2nd_name),
      loc[2]);
    if(loc[3])
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11," ghost",/* End_of_format */0],
                " ghost"]);
      }
    else
     {return 0;}
    };

var
 fmt_longident_aux=
  function(f,x)
   {switch(x[0])
     {case 0:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String */2,/* No_padding */0,/* End_of_format */0],
                 "%s"],
                x[1]);
       
      case 1:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* Alpha */15,
                  [/* Char_literal */12,
                   46,
                   [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                 "%a.%s"],
                fmt_longident_aux,
                x[1],
                x[2]);
       
      case 2:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* Alpha */15,
                  [/* Char_literal */12,
                   40,
                   [/* Alpha */15,
                    [/* Char_literal */12,41,/* End_of_format */0]]]],
                 "%a(%a)"],
                fmt_longident_aux,
                x[1],
                fmt_longident_aux,
                x[2]);
       
      }
    };

var
 fmt_longident=
  function(f,x)
   {return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Char_literal */12,
               34,
               [/* Alpha */15,[/* Char_literal */12,34,/* End_of_format */0]]],
              '"%a"'],
             fmt_longident_aux,
             x);
    };

var
 fmt_longident_loc=
  function(f,x)
   {return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Char_literal */12,
               34,
               [/* Alpha */15,
                [/* String_literal */11,
                 '" ',
                 [/* Alpha */15,/* End_of_format */0]]]],
              '"%a" %a'],
             fmt_longident_aux,
             x[1],
             fmt_location,
             x[2]);
    };

var
 fmt_string_loc=
  function(f,x)
   {return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Char_literal */12,
               34,
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '" ',
                 [/* Alpha */15,/* End_of_format */0]]]],
              '"%s" %a'],
             x[1],
             fmt_location,
             x[2]);
    };

var
 fmt_constant=
  function(f,x)
   {switch(x[0])
     {case 0:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String_literal */11,
                  "Const_int ",
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "Const_int %d"],
                x[1]);
       
      case 1:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String_literal */11,
                  "Const_char ",
                  [/* Int */4,
                   /* Int_x */6,
                   [/* Lit_padding */0,/* Zeros */2,2],
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "Const_char %02x"],
                x[1]);
       
      case 2:
       var match=x[2];
       
       var s=x[1];
       
       if(match)
        {return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Const_string (",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ",Some ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* Char_literal */12,41,/* End_of_format */0]]]]],
                   "Const_string (%S,Some %S)"],
                  s,
                  match[1]);
         }
       else
        {return Format["fprintf"]
                 (f,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Const_string(",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,",None)",/* End_of_format */0]]],
                   "Const_string(%S,None)"],
                  s);
         }
       
      case 3:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String_literal */11,
                  "Const_float ",
                  [/* String */2,/* No_padding */0,/* End_of_format */0]],
                 "Const_float %s"],
                x[1]);
       
      case 4:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String_literal */11,
                  "Const_int32 ",
                  [/* Int32 */5,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "Const_int32 %ld"],
                x[1]);
       
      case 5:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String_literal */11,
                  "Const_int64 ",
                  [/* Int64 */7,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "Const_int64 %Ld"],
                x[1]);
       
      case 6:
       return Format["fprintf"]
               (f,
                [/* Format */0,
                 [/* String_literal */11,
                  "Const_nativeint ",
                  [/* Nativeint */6,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "Const_nativeint %nd"],
                x[1]);
       
      }
    };

var
 fmt_mutable_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Mutable",/* End_of_format */0],
                "Mutable"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Immutable",/* End_of_format */0],
                "Immutable"]);
      }
    };

var
 fmt_virtual_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Concrete",/* End_of_format */0],
                "Concrete"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Virtual",/* End_of_format */0],
                "Virtual"]);
      }
    };

var
 fmt_override_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Fresh",/* End_of_format */0],
                "Fresh"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Override",/* End_of_format */0],
                "Override"]);
      }
    };

var
 fmt_closed_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Open",/* End_of_format */0],
                "Open"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Closed",/* End_of_format */0],
                "Closed"]);
      }
    };

var
 fmt_rec_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Rec",/* End_of_format */0],
                "Rec"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Nonrec",/* End_of_format */0],
                "Nonrec"]);
      }
    };

var
 fmt_direction_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Down",/* End_of_format */0],
                "Down"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Up",/* End_of_format */0],
                "Up"]);
      }
    };

var
 fmt_private_flag=
  function(f,x)
   {if(x!==0)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Public",/* End_of_format */0],
                "Public"]);
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,"Private",/* End_of_format */0],
                "Private"]);
      }
    };

var
 line=
  function(i,f,s)
   {Format["fprintf"]
     (f,
      [/* Format */0,
       [/* String */2,/* No_padding */0,/* End_of_format */0],
       "%s"],
      $$String["make"](2*i%72,32));
    return Format["fprintf"](f,s);
    };

var
 list=
  function(i,f,ppf,l)
   {if(l)
     {line
       (i,
        ppf,
        [/* Format */0,
         [/* String_literal */11,"[\n",/* End_of_format */0],
         "[\n"]);
      List["iter"](f(i+1,ppf),l);
      return line
              (i,
               ppf,
               [/* Format */0,
                [/* String_literal */11,"]\n",/* End_of_format */0],
                "]\n"]);
      }
    else
     {return line
              (i,
               ppf,
               [/* Format */0,
                [/* String_literal */11,"[]\n",/* End_of_format */0],
                "[]\n"]);
      }
    };

var
 option=
  function(i,f,ppf,x)
   {if(x)
     {line
       (i,
        ppf,
        [/* Format */0,
         [/* String_literal */11,"Some\n",/* End_of_format */0],
         "Some\n"]);
      return f(i+1,ppf,x[1]);
      }
    else
     {return line
              (i,
               ppf,
               [/* Format */0,
                [/* String_literal */11,"None\n",/* End_of_format */0],
                "None\n"]);
      }
    };

var
 longident_loc=
  function(i,ppf,li)
   {return line
            (i,
             ppf,
             [/* Format */0,
              [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
              "%a\n"],
             fmt_longident_loc,
             li);
    };

var
 string=
  function(i,ppf,s)
   {return line
            (i,
             ppf,
             [/* Format */0,
              [/* Char_literal */12,
               34,
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,'"\n',/* End_of_format */0]]],
              '"%s"\n'],
             s);
    };

var
 string_loc=
  function(i,ppf,s)
   {return line
            (i,
             ppf,
             [/* Format */0,
              [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
              "%a\n"],
             fmt_string_loc,
             s);
    };

var
 bool=
  function(i,ppf,x)
   {return line
            (i,
             ppf,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,10,/* End_of_format */0]],
              "%s\n"],
             Pervasives["string_of_bool"](x));
    };

var
 label=
  function(i,ppf,x)
   {return line
            (i,
             ppf,
             [/* Format */0,
              [/* String_literal */11,
               'label="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,'"\n',/* End_of_format */0]]],
              'label="%s"\n'],
             x);
    };

var
 core_type=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "core_type ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "core_type %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,"Ptyp_any\n",/* End_of_format */0],
                   "Ptyp_any\n"]);
         
        }}
    else
     {switch(match[0])
       {case 0:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ptyp_var ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Ptyp_var %s\n"],
                  match[1]);
         
        case 1:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ptyp_arrow\n",/* End_of_format */0],
            "Ptyp_arrow\n"]);
         string(i$1,ppf,match[1]);
         core_type(i$1,ppf,match[2]);
         return core_type(i$1,ppf,match[3]);
         
        case 2:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ptyp_tuple\n",/* End_of_format */0],
            "Ptyp_tuple\n"]);
         return list(i$1,core_type,ppf,match[1]);
         
        case 3:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ptyp_constr ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ptyp_constr %a\n"],
           fmt_longident_loc,
           match[1]);
         return list(i$1,core_type,ppf,match[2]);
         
        case 4:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ptyp_object ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ptyp_object %a\n"],
           fmt_closed_flag,
           match[2]);
         var i$2=i$1+1;
         
         return List["iter"]
                 (function(param)
                   {line
                     (i$2,
                      ppf,
                      [/* Format */0,
                       [/* String_literal */11,
                        "method ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,10,/* End_of_format */0]]],
                       "method %s\n"],
                      param[1]);
                    attributes(i$2,ppf,param[2]);
                    return core_type(i$2+1,ppf,param[3]);
                    },
                  match[1]);
         
        case 5:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ptyp_class ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ptyp_class %a\n"],
           fmt_longident_loc,
           match[1]);
         return list(i$1,core_type,ppf,match[2]);
         
        case 6:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             'Ptyp_alias "',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'"\n',/* End_of_format */0]]],
            'Ptyp_alias "%s"\n'],
           match[2]);
         return core_type(i$1,ppf,match[1]);
         
        case 7:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ptyp_variant closed=",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ptyp_variant closed=%a\n"],
           fmt_closed_flag,
           match[2]);
         list(i$1,label_x_bool_x_core_type_list,ppf,match[1]);
         return option(i$1,function(i){return list(i,string);},ppf,match[3]);
         
        case 8:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ptyp_poly",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ptyp_poly%a\n"],
           function(ppf)
            {return List["iter"]
                     (function(x)
                       {return Format["fprintf"]
                                (ppf,
                                 [/* Format */0,
                                  [/* String_literal */11,
                                   " '",
                                   [/* String */2,/* No_padding */0,/* End_of_format */0]],
                                  " '%s"],
                                 x);
                        });
             },
           match[1]);
         return core_type(i$1,ppf,match[2]);
         
        case 9:
         var match$1=match[1];
         
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ptyp_package ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ptyp_package %a\n"],
           fmt_longident_loc,
           match$1[1]);
         return list(i$1,package_with,ppf,match$1[2]);
         
        case 10:
         var match$2=match[1];
         
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             'Ptyp_extension "',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'"\n',/* End_of_format */0]]],
            'Ptyp_extension "%s"\n'],
           match$2[1][1]);
         return payload(i$1,ppf,match$2[2]);
         
        }}
    };

var
 package_with=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "with type ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "with type %a\n"],
      fmt_longident_loc,
      param[1]);
    return core_type(i,ppf,param[2]);
    };

var
 pattern=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pattern ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pattern %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,"Ppat_any\n",/* End_of_format */0],
                   "Ppat_any\n"]);
         
        }}
    else
     {switch(match[0])
       {case 0:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ppat_var ",
                    [/* Alpha */15,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Ppat_var %a\n"],
                  fmt_string_loc,
                  match[1]);
         
        case 1:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ppat_alias ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ppat_alias %a\n"],
           fmt_string_loc,
           match[2]);
         return pattern(i$1,ppf,match[1]);
         
        case 2:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ppat_constant ",
                    [/* Alpha */15,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Ppat_constant %a\n"],
                  fmt_constant,
                  match[1]);
         
        case 3:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ppat_interval ",
                    [/* Alpha */15,
                     [/* String_literal */11,
                      "..",
                      [/* Alpha */15,
                       [/* Char_literal */12,10,/* End_of_format */0]]]]],
                   "Ppat_interval %a..%a\n"],
                  fmt_constant,
                  match[1],
                  fmt_constant,
                  match[2]);
         
        case 4:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_tuple\n",/* End_of_format */0],
            "Ppat_tuple\n"]);
         return list(i$1,pattern,ppf,match[1]);
         
        case 5:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ppat_construct ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ppat_construct %a\n"],
           fmt_longident_loc,
           match[1]);
         return option(i$1,pattern,ppf,match[2]);
         
        case 6:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             'Ppat_variant "',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'"\n',/* End_of_format */0]]],
            'Ppat_variant "%s"\n'],
           match[1]);
         return option(i$1,pattern,ppf,match[2]);
         
        case 7:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Ppat_record ",
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
            "Ppat_record %a\n"],
           fmt_closed_flag,
           match[2]);
         return list(i$1,longident_x_pattern,ppf,match[1]);
         
        case 8:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_array\n",/* End_of_format */0],
            "Ppat_array\n"]);
         return list(i$1,pattern,ppf,match[1]);
         
        case 9:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_or\n",/* End_of_format */0],
            "Ppat_or\n"]);
         pattern(i$1,ppf,match[1]);
         return pattern(i$1,ppf,match[2]);
         
        case 10:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_constraint\n",/* End_of_format */0],
            "Ppat_constraint\n"]);
         pattern(i$1,ppf,match[1]);
         return core_type(i$1,ppf,match[2]);
         
        case 11:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_type\n",/* End_of_format */0],
            "Ppat_type\n"]);
         return longident_loc(i$1,ppf,match[1]);
         
        case 12:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_lazy\n",/* End_of_format */0],
            "Ppat_lazy\n"]);
         return pattern(i$1,ppf,match[1]);
         
        case 13:
         return line
                 (i$1,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ppat_unpack ",
                    [/* Alpha */15,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Ppat_unpack %a\n"],
                  fmt_string_loc,
                  match[1]);
         
        case 14:
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ppat_exception\n",/* End_of_format */0],
            "Ppat_exception\n"]);
         return pattern(i$1,ppf,match[1]);
         
        case 15:
         var match$1=match[1];
         
         line
          (i$1,
           ppf,
           [/* Format */0,
            [/* String_literal */11,
             'Ppat_extension "',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'"\n',/* End_of_format */0]]],
            'Ppat_extension "%s"\n'],
           match$1[1][1]);
         return payload(i$1,ppf,match$1[2]);
         
        }}
    };

var
 expression=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "expression ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "expression %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       return line
               (i$1,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pexp_ident ",
                  [/* Alpha */15,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "Pexp_ident %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 1:
       return line
               (i$1,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pexp_constant ",
                  [/* Alpha */15,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "Pexp_constant %a\n"],
                fmt_constant,
                match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pexp_let ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pexp_let %a\n"],
         fmt_rec_flag,
         match[1]);
       list(i$1,value_binding,ppf,match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 3:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_function\n",/* End_of_format */0],
          "Pexp_function\n"]);
       return list(i$1,$$case,ppf,match[1]);
       
      case 4:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pexp_fun "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pexp_fun "%s"\n'],
         match[1]);
       option(i$1,expression,ppf,match[2]);
       pattern(i$1,ppf,match[3]);
       return expression(i$1,ppf,match[4]);
       
      case 5:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_apply\n",/* End_of_format */0],
          "Pexp_apply\n"]);
       expression(i$1,ppf,match[1]);
       return list(i$1,label_x_expression,ppf,match[2]);
       
      case 6:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_match\n",/* End_of_format */0],
          "Pexp_match\n"]);
       expression(i$1,ppf,match[1]);
       return list(i$1,$$case,ppf,match[2]);
       
      case 7:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_try\n",/* End_of_format */0],
          "Pexp_try\n"]);
       expression(i$1,ppf,match[1]);
       return list(i$1,$$case,ppf,match[2]);
       
      case 8:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_tuple\n",/* End_of_format */0],
          "Pexp_tuple\n"]);
       return list(i$1,expression,ppf,match[1]);
       
      case 9:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pexp_construct ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pexp_construct %a\n"],
         fmt_longident_loc,
         match[1]);
       return option(i$1,expression,ppf,match[2]);
       
      case 10:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pexp_variant "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pexp_variant "%s"\n'],
         match[1]);
       return option(i$1,expression,ppf,match[2]);
       
      case 11:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_record\n",/* End_of_format */0],
          "Pexp_record\n"]);
       list(i$1,longident_x_expression,ppf,match[1]);
       return option(i$1,expression,ppf,match[2]);
       
      case 12:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_field\n",/* End_of_format */0],
          "Pexp_field\n"]);
       expression(i$1,ppf,match[1]);
       return longident_loc(i$1,ppf,match[2]);
       
      case 13:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_setfield\n",/* End_of_format */0],
          "Pexp_setfield\n"]);
       expression(i$1,ppf,match[1]);
       longident_loc(i$1,ppf,match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 14:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_array\n",/* End_of_format */0],
          "Pexp_array\n"]);
       return list(i$1,expression,ppf,match[1]);
       
      case 15:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_ifthenelse\n",/* End_of_format */0],
          "Pexp_ifthenelse\n"]);
       expression(i$1,ppf,match[1]);
       expression(i$1,ppf,match[2]);
       return option(i$1,expression,ppf,match[3]);
       
      case 16:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_sequence\n",/* End_of_format */0],
          "Pexp_sequence\n"]);
       expression(i$1,ppf,match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 17:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_while\n",/* End_of_format */0],
          "Pexp_while\n"]);
       expression(i$1,ppf,match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 18:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pexp_for ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pexp_for %a\n"],
         fmt_direction_flag,
         match[4]);
       pattern(i$1,ppf,match[1]);
       expression(i$1,ppf,match[2]);
       expression(i$1,ppf,match[3]);
       return expression(i$1,ppf,match[5]);
       
      case 19:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_constraint\n",/* End_of_format */0],
          "Pexp_constraint\n"]);
       expression(i$1,ppf,match[1]);
       return core_type(i$1,ppf,match[2]);
       
      case 20:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_coerce\n",/* End_of_format */0],
          "Pexp_coerce\n"]);
       expression(i$1,ppf,match[1]);
       option(i$1,core_type,ppf,match[2]);
       return core_type(i$1,ppf,match[3]);
       
      case 21:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pexp_send "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pexp_send "%s"\n'],
         match[2]);
       return expression(i$1,ppf,match[1]);
       
      case 22:
       return line
               (i$1,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pexp_new ",
                  [/* Alpha */15,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "Pexp_new %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 23:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pexp_setinstvar ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pexp_setinstvar %a\n"],
         fmt_string_loc,
         match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 24:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_override\n",/* End_of_format */0],
          "Pexp_override\n"]);
       return list(i$1,string_x_expression,ppf,match[1]);
       
      case 25:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pexp_letmodule ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pexp_letmodule %a\n"],
         fmt_string_loc,
         match[1]);
       module_expr(i$1,ppf,match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 26:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_assert\n",/* End_of_format */0],
          "Pexp_assert\n"]);
       return expression(i$1,ppf,match[1]);
       
      case 27:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_lazy\n",/* End_of_format */0],
          "Pexp_lazy\n"]);
       return expression(i$1,ppf,match[1]);
       
      case 28:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_poly\n",/* End_of_format */0],
          "Pexp_poly\n"]);
       expression(i$1,ppf,match[1]);
       return option(i$1,core_type,ppf,match[2]);
       
      case 29:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_object\n",/* End_of_format */0],
          "Pexp_object\n"]);
       return class_structure(i$1,ppf,match[1]);
       
      case 30:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pexp_newtype "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pexp_newtype "%s"\n'],
         match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 31:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pexp_pack\n",/* End_of_format */0],
          "Pexp_pack\n"]);
       return module_expr(i$1,ppf,match[1]);
       
      case 32:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pexp_open ",
           [/* Alpha */15,
            [/* String_literal */11,
             ' "',
             [/* Alpha */15,
              [/* String_literal */11,'"\n',/* End_of_format */0]]]]],
          'Pexp_open %a "%a"\n'],
         fmt_override_flag,
         match[1],
         fmt_longident_loc,
         match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 33:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pexp_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pexp_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var
 value_description=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "value_description ",
        [/* Alpha */15,
         [/* Char_literal */12,
          32,
          [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]]]],
       "value_description %a %a\n"],
      fmt_string_loc,
      x[1],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[4]);
    core_type(i+1,ppf,x[2]);
    return list(i+1,string,ppf,x[3]);
    };

var type_parameter=function(i,ppf,param){return core_type(i,ppf,param[1]);};

var
 type_declaration=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "type_declaration ",
        [/* Alpha */15,
         [/* Char_literal */12,
          32,
          [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]]]],
       "type_declaration %a %a\n"],
      fmt_string_loc,
      x[1],
      fmt_location,
      x[8]);
    attributes(i,ppf,x[7]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"ptype_params =\n",/* End_of_format */0],
       "ptype_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"ptype_cstrs =\n",/* End_of_format */0],
       "ptype_cstrs =\n"]);
    list(i$1+1,core_type_x_core_type_x_location,ppf,x[3]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"ptype_kind =\n",/* End_of_format */0],
       "ptype_kind =\n"]);
    type_kind(i$1+1,ppf,x[4]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "ptype_private = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "ptype_private = %a\n"],
      fmt_private_flag,
      x[5]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"ptype_manifest =\n",/* End_of_format */0],
       "ptype_manifest =\n"]);
    return option(i$1+1,core_type,ppf,x[6]);
    };

var
 attributes=
  function(i,ppf,l)
   {var i$1=i+1;
    
    return List["iter"]
            (function(param)
              {line
                (i$1,
                 ppf,
                 [/* Format */0,
                  [/* String_literal */11,
                   'attribute "',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,'"\n',/* End_of_format */0]]],
                  'attribute "%s"\n'],
                 param[1][1]);
               return payload(i$1+1,ppf,param[2]);
               },
             l);
    };

var
 payload=
  function(i,ppf,param)
   {switch(param[0])
     {case 0:return structure(i,ppf,param[1]);
      case 1:return core_type(i,ppf,param[1]);
      case 2:
       var match=param[2];
       
       var x=param[1];
       
       if(match)
        {pattern(i,ppf,x);
         line
          (i,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"<when>\n",/* End_of_format */0],
            "<when>\n"]);
         return expression(i+1,ppf,match[1]);
         }
       else
        {return pattern(i,ppf,x);}
       
      }
    };

var
 type_kind=
  function(i,ppf,x)
   {if(typeof x==="number")
     {switch(x)
       {case 0:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ptype_abstract\n",
                    /* End_of_format */0],
                   "Ptype_abstract\n"]);
         
        case 1:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,"Ptype_open\n",/* End_of_format */0],
                   "Ptype_open\n"]);
         
        }}
    else
     {switch(x[0])
       {case 0:
         line
          (i,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ptype_variant\n",/* End_of_format */0],
            "Ptype_variant\n"]);
         return list(i+1,constructor_decl,ppf,x[1]);
         
        case 1:
         line
          (i,
           ppf,
           [/* Format */0,
            [/* String_literal */11,"Ptype_record\n",/* End_of_format */0],
            "Ptype_record\n"]);
         return list(i+1,label_decl,ppf,x[1]);
         
        }}
    };

var
 type_extension=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"type_extension\n",/* End_of_format */0],
       "type_extension\n"]);
    attributes(i,ppf,x[5]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "ptyext_path = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "ptyext_path = %a\n"],
      fmt_longident_loc,
      x[1]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"ptyext_params =\n",/* End_of_format */0],
       "ptyext_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"ptyext_constructors =\n",/* End_of_format */0],
       "ptyext_constructors =\n"]);
    list(i$1+1,extension_constructor,ppf,x[3]);
    return line
            (i$1,
             ppf,
             [/* Format */0,
              [/* String_literal */11,
               "ptyext_private = ",
               [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
              "ptyext_private = %a\n"],
             fmt_private_flag,
             x[4]);
    };

var
 extension_constructor=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "extension_constructor ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "extension_constructor %a\n"],
      fmt_location,
      x[3]);
    attributes(i,ppf,x[4]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        'pext_name = "',
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,'"\n',/* End_of_format */0]]],
       'pext_name = "%s"\n'],
      x[1][1]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pext_kind =\n",/* End_of_format */0],
       "pext_kind =\n"]);
    return extension_constructor_kind(i$1+1,ppf,x[2]);
    };

var
 extension_constructor_kind=
  function(i,ppf,x)
   {switch(x[0])
     {case 0:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pext_decl\n",/* End_of_format */0],
          "Pext_decl\n"]);
       list(i+1,core_type,ppf,x[1]);
       return option(i+1,core_type,ppf,x[2]);
       
      case 1:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pext_rebind\n",/* End_of_format */0],
          "Pext_rebind\n"]);
       return line
               (i+1,
                ppf,
                [/* Format */0,
                 [/* Alpha */15,
                  [/* Char_literal */12,10,/* End_of_format */0]],
                 "%a\n"],
                fmt_longident_loc,
                x[1]);
       
      }
    };

var
 class_type=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_type ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_type %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pcty_constr ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pcty_constr %a\n"],
         fmt_longident_loc,
         match[1]);
       return list(i$1,core_type,ppf,match[2]);
       
      case 1:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcty_signature\n",/* End_of_format */0],
          "Pcty_signature\n"]);
       return class_signature(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pcty_arrow "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pcty_arrow "%s"\n'],
         match[1]);
       core_type(i$1,ppf,match[2]);
       return class_type(i$1,ppf,match[3]);
       
      case 3:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pcty_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pcty_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var
 class_signature=
  function(i,ppf,cs)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"class_signature\n",/* End_of_format */0],
       "class_signature\n"]);
    core_type(i+1,ppf,cs[1]);
    return list(i+1,class_type_field,ppf,cs[2]);
    };

var
 class_type_field=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_type_field ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_type_field %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    attributes(i$1,ppf,x[3]);
    var match=x[1];
    
    switch(match[0])
     {case 0:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pctf_inherit\n",/* End_of_format */0],
          "Pctf_inherit\n"]);
       return class_type(i$1,ppf,match[1]);
       
      case 1:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pctf_val "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,
             '" ',
             [/* Alpha */15,
              [/* Char_literal */12,
               32,
               [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]]]]]],
          'Pctf_val "%s" %a %a\n'],
         match$1[1],
         fmt_mutable_flag,
         match$1[2],
         fmt_virtual_flag,
         match$1[3]);
       return core_type(i$1+1,ppf,match$1[4]);
       
      case 2:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pctf_method "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,
             '" ',
             [/* Alpha */15,
              [/* Char_literal */12,
               32,
               [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]]]]]],
          'Pctf_method "%s" %a %a\n'],
         match$2[1],
         fmt_private_flag,
         match$2[2],
         fmt_virtual_flag,
         match$2[3]);
       return core_type(i$1+1,ppf,match$2[4]);
       
      case 3:
       var match$3=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pctf_constraint\n",/* End_of_format */0],
          "Pctf_constraint\n"]);
       core_type(i$1+1,ppf,match$3[1]);
       return core_type(i$1+1,ppf,match$3[2]);
       
      case 4:
       var match$4=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pctf_attribute "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pctf_attribute "%s"\n'],
         match$4[1][1]);
       return payload(i$1,ppf,match$4[2]);
       
      case 5:
       var match$5=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pctf_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pctf_extension "%s"\n'],
         match$5[1][1]);
       return payload(i$1,ppf,match$5[2]);
       
      }
    };

var
 class_description=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_description ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_description %a\n"],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[6]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pci_virt = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pci_virt = %a\n"],
      fmt_virtual_flag,
      x[1]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pci_params =\n",/* End_of_format */0],
       "pci_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pci_name = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pci_name = %a\n"],
      fmt_string_loc,
      x[3]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pci_expr =\n",/* End_of_format */0],
       "pci_expr =\n"]);
    return class_type(i$1+1,ppf,x[4]);
    };

var
 class_type_declaration=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_type_declaration ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_type_declaration %a\n"],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[6]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pci_virt = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pci_virt = %a\n"],
      fmt_virtual_flag,
      x[1]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pci_params =\n",/* End_of_format */0],
       "pci_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pci_name = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pci_name = %a\n"],
      fmt_string_loc,
      x[3]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pci_expr =\n",/* End_of_format */0],
       "pci_expr =\n"]);
    return class_type(i$1+1,ppf,x[4]);
    };

var
 class_expr=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_expr ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_expr %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pcl_constr ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pcl_constr %a\n"],
         fmt_longident_loc,
         match[1]);
       return list(i$1,core_type,ppf,match[2]);
       
      case 1:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcl_structure\n",/* End_of_format */0],
          "Pcl_structure\n"]);
       return class_structure(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcl_fun\n",/* End_of_format */0],
          "Pcl_fun\n"]);
       label(i$1,ppf,match[1]);
       option(i$1,expression,ppf,match[2]);
       pattern(i$1,ppf,match[3]);
       return class_expr(i$1,ppf,match[4]);
       
      case 3:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcl_apply\n",/* End_of_format */0],
          "Pcl_apply\n"]);
       class_expr(i$1,ppf,match[1]);
       return list(i$1,label_x_expression,ppf,match[2]);
       
      case 4:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pcl_let ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pcl_let %a\n"],
         fmt_rec_flag,
         match[1]);
       list(i$1,value_binding,ppf,match[2]);
       return class_expr(i$1,ppf,match[3]);
       
      case 5:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcl_constraint\n",/* End_of_format */0],
          "Pcl_constraint\n"]);
       class_expr(i$1,ppf,match[1]);
       return class_type(i$1,ppf,match[2]);
       
      case 6:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pcl_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pcl_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var
 class_structure=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"class_structure\n",/* End_of_format */0],
       "class_structure\n"]);
    pattern(i+1,ppf,param[1]);
    return list(i+1,class_field,ppf,param[2]);
    };

var
 class_field=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_field ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_field %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    attributes(i$1,ppf,x[3]);
    var match=x[1];
    
    switch(match[0])
     {case 0:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pcf_inherit ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pcf_inherit %a\n"],
         fmt_override_flag,
         match[1]);
       class_expr(i$1+1,ppf,match[2]);
       return option(i$1+1,string,ppf,match[3]);
       
      case 1:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pcf_val ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pcf_val %a\n"],
         fmt_mutable_flag,
         match$1[2]);
       line
        (i$1+1,
         ppf,
         [/* Format */0,
          [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
          "%a\n"],
         fmt_string_loc,
         match$1[1]);
       return class_field_kind(i$1+1,ppf,match$1[3]);
       
      case 2:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pcf_method ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pcf_method %a\n"],
         fmt_private_flag,
         match$2[2]);
       line
        (i$1+1,
         ppf,
         [/* Format */0,
          [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
          "%a\n"],
         fmt_string_loc,
         match$2[1]);
       return class_field_kind(i$1+1,ppf,match$2[3]);
       
      case 3:
       var match$3=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcf_constraint\n",/* End_of_format */0],
          "Pcf_constraint\n"]);
       core_type(i$1+1,ppf,match$3[1]);
       return core_type(i$1+1,ppf,match$3[2]);
       
      case 4:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pcf_initializer\n",/* End_of_format */0],
          "Pcf_initializer\n"]);
       return expression(i$1+1,ppf,match[1]);
       
      case 5:
       var match$4=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pcf_attribute "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pcf_attribute "%s"\n'],
         match$4[1][1]);
       return payload(i$1,ppf,match$4[2]);
       
      case 6:
       var match$5=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pcf_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pcf_extension "%s"\n'],
         match$5[1][1]);
       return payload(i$1,ppf,match$5[2]);
       
      }
    };

var
 class_field_kind=
  function(i,ppf,param)
   {switch(param[0])
     {case 0:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Virtual\n",/* End_of_format */0],
          "Virtual\n"]);
       return core_type(i,ppf,param[1]);
       
      case 1:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Concrete ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Concrete %a\n"],
         fmt_override_flag,
         param[1]);
       return expression(i,ppf,param[2]);
       
      }
    };

var
 class_declaration=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "class_declaration ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "class_declaration %a\n"],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[6]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pci_virt = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pci_virt = %a\n"],
      fmt_virtual_flag,
      x[1]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pci_params =\n",/* End_of_format */0],
       "pci_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "pci_name = ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "pci_name = %a\n"],
      fmt_string_loc,
      x[3]);
    line
     (i$1,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"pci_expr =\n",/* End_of_format */0],
       "pci_expr =\n"]);
    return class_expr(i$1+1,ppf,x[4]);
    };

var
 module_type=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "module_type ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "module_type %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       return line
               (i$1,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pmty_ident ",
                  [/* Alpha */15,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "Pmty_ident %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 1:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmty_signature\n",/* End_of_format */0],
          "Pmty_signature\n"]);
       return signature(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pmty_functor ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pmty_functor %a\n"],
         fmt_string_loc,
         match[1]);
       Misc["may"](module_type(i$1,ppf),match[2]);
       return module_type(i$1,ppf,match[3]);
       
      case 3:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmty_with\n",/* End_of_format */0],
          "Pmty_with\n"]);
       module_type(i$1,ppf,match[1]);
       return list(i$1,with_constraint,ppf,match[2]);
       
      case 4:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmty_typeof\n",/* End_of_format */0],
          "Pmty_typeof\n"]);
       return module_expr(i$1,ppf,match[1]);
       
      case 5:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pmod_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pmod_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      case 6:
       return line
               (i$1,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pmty_alias ",
                  [/* Alpha */15,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "Pmty_alias %a\n"],
                fmt_longident_loc,
                match[1]);
       
      }
    };

var signature=function(i,ppf,x){return list(i,signature_item,ppf,x);};

var
 signature_item=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "signature_item ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "signature_item %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_value\n",/* End_of_format */0],
          "Psig_value\n"]);
       return value_description(i$1,ppf,match[1]);
       
      case 1:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_type\n",/* End_of_format */0],
          "Psig_type\n"]);
       return list(i$1,type_declaration,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_typext\n",/* End_of_format */0],
          "Psig_typext\n"]);
       return type_extension(i$1,ppf,match[1]);
       
      case 3:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_exception\n",/* End_of_format */0],
          "Psig_exception\n"]);
       return extension_constructor(i$1,ppf,match[1]);
       
      case 4:
       var pmd=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Psig_module ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Psig_module %a\n"],
         fmt_string_loc,
         pmd[1]);
       attributes(i$1,ppf,pmd[3]);
       return module_type(i$1,ppf,pmd[2]);
       
      case 5:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_recmodule\n",/* End_of_format */0],
          "Psig_recmodule\n"]);
       return list(i$1,module_declaration,ppf,match[1]);
       
      case 6:
       var x$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Psig_modtype ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Psig_modtype %a\n"],
         fmt_string_loc,
         x$1[1]);
       attributes(i$1,ppf,x$1[3]);
       return modtype_declaration(i$1,ppf,x$1[2]);
       
      case 7:
       var od=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Psig_open ",
           [/* Alpha */15,
            [/* Char_literal */12,
             32,
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]]]],
          "Psig_open %a %a\n"],
         fmt_override_flag,
         od[2],
         fmt_longident_loc,
         od[1]);
       return attributes(i$1,ppf,od[4]);
       
      case 8:
       var incl=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_include\n",/* End_of_format */0],
          "Psig_include\n"]);
       module_type(i$1,ppf,incl[1]);
       return attributes(i$1,ppf,incl[3]);
       
      case 9:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_class\n",/* End_of_format */0],
          "Psig_class\n"]);
       return list(i$1,class_description,ppf,match[1]);
       
      case 10:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Psig_class_type\n",/* End_of_format */0],
          "Psig_class_type\n"]);
       return list(i$1,class_type_declaration,ppf,match[1]);
       
      case 11:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Psig_attribute "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Psig_attribute "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      case 12:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Psig_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Psig_extension "%s"\n'],
         match$2[1][1]);
       attributes(i$1,ppf,match[2]);
       return payload(i$1,ppf,match$2[2]);
       
      }
    };

var
 modtype_declaration=
  function(i,ppf,param)
   {if(param)
     {return module_type(i+1,ppf,param[1]);}
    else
     {return line
              (i,
               ppf,
               [/* Format */0,
                [/* String_literal */11,"#abstract",/* End_of_format */0],
                "#abstract"]);
      }
    };

var
 with_constraint=
  function(i,ppf,x)
   {switch(x[0])
     {case 0:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pwith_type ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pwith_type %a\n"],
         fmt_longident_loc,
         x[1]);
       return type_declaration(i+1,ppf,x[2]);
       
      case 1:
       return line
               (i,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pwith_module ",
                  [/* Alpha */15,
                   [/* String_literal */11,
                    " = ",
                    [/* Alpha */15,
                     [/* Char_literal */12,10,/* End_of_format */0]]]]],
                 "Pwith_module %a = %a\n"],
                fmt_longident_loc,
                x[1],
                fmt_longident_loc,
                x[2]);
       
      case 2:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pwith_typesubst\n",/* End_of_format */0],
          "Pwith_typesubst\n"]);
       return type_declaration(i+1,ppf,x[1]);
       
      case 3:
       return line
               (i,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pwith_modsubst ",
                  [/* Alpha */15,
                   [/* String_literal */11,
                    " = ",
                    [/* Alpha */15,
                     [/* Char_literal */12,10,/* End_of_format */0]]]]],
                 "Pwith_modsubst %a = %a\n"],
                fmt_string_loc,
                x[1],
                fmt_longident_loc,
                x[2]);
       
      }
    };

var
 module_expr=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "module_expr ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "module_expr %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       return line
               (i$1,
                ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Pmod_ident ",
                  [/* Alpha */15,
                   [/* Char_literal */12,10,/* End_of_format */0]]],
                 "Pmod_ident %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 1:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmod_structure\n",/* End_of_format */0],
          "Pmod_structure\n"]);
       return structure(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pmod_functor ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pmod_functor %a\n"],
         fmt_string_loc,
         match[1]);
       Misc["may"](module_type(i$1,ppf),match[2]);
       return module_expr(i$1,ppf,match[3]);
       
      case 3:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmod_apply\n",/* End_of_format */0],
          "Pmod_apply\n"]);
       module_expr(i$1,ppf,match[1]);
       return module_expr(i$1,ppf,match[2]);
       
      case 4:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmod_constraint\n",/* End_of_format */0],
          "Pmod_constraint\n"]);
       module_expr(i$1,ppf,match[1]);
       return module_type(i$1,ppf,match[2]);
       
      case 5:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pmod_unpack\n",/* End_of_format */0],
          "Pmod_unpack\n"]);
       return expression(i$1,ppf,match[1]);
       
      case 6:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pmod_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pmod_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var structure=function(i,ppf,x){return list(i,structure_item,ppf,x);};

var
 structure_item=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "structure_item ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "structure_item %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match[0])
     {case 0:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_eval\n",/* End_of_format */0],
          "Pstr_eval\n"]);
       attributes(i$1,ppf,match[2]);
       return expression(i$1,ppf,match[1]);
       
      case 1:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pstr_value ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pstr_value %a\n"],
         fmt_rec_flag,
         match[1]);
       return list(i$1,value_binding,ppf,match[2]);
       
      case 2:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_primitive\n",/* End_of_format */0],
          "Pstr_primitive\n"]);
       return value_description(i$1,ppf,match[1]);
       
      case 3:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_type\n",/* End_of_format */0],
          "Pstr_type\n"]);
       return list(i$1,type_declaration,ppf,match[1]);
       
      case 4:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_typext\n",/* End_of_format */0],
          "Pstr_typext\n"]);
       return type_extension(i$1,ppf,match[1]);
       
      case 5:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_exception\n",/* End_of_format */0],
          "Pstr_exception\n"]);
       return extension_constructor(i$1,ppf,match[1]);
       
      case 6:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_module\n",/* End_of_format */0],
          "Pstr_module\n"]);
       return module_binding(i$1,ppf,match[1]);
       
      case 7:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_recmodule\n",/* End_of_format */0],
          "Pstr_recmodule\n"]);
       return list(i$1,module_binding,ppf,match[1]);
       
      case 8:
       var x$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pstr_modtype ",
           [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
          "Pstr_modtype %a\n"],
         fmt_string_loc,
         x$1[1]);
       attributes(i$1,ppf,x$1[3]);
       return modtype_declaration(i$1,ppf,x$1[2]);
       
      case 9:
       var od=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           "Pstr_open ",
           [/* Alpha */15,
            [/* Char_literal */12,
             32,
             [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]]]],
          "Pstr_open %a %a\n"],
         fmt_override_flag,
         od[2],
         fmt_longident_loc,
         od[1]);
       return attributes(i$1,ppf,od[4]);
       
      case 10:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_class\n",/* End_of_format */0],
          "Pstr_class\n"]);
       return list(i$1,class_declaration,ppf,match[1]);
       
      case 11:
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_class_type\n",/* End_of_format */0],
          "Pstr_class_type\n"]);
       return list(i$1,class_type_declaration,ppf,match[1]);
       
      case 12:
       var incl=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Pstr_include",/* End_of_format */0],
          "Pstr_include"]);
       attributes(i$1,ppf,incl[3]);
       return module_expr(i$1,ppf,incl[1]);
       
      case 13:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pstr_attribute "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pstr_attribute "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      case 14:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Pstr_extension "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Pstr_extension "%s"\n'],
         match$2[1][1]);
       attributes(i$1,ppf,match[2]);
       return payload(i$1,ppf,match$2[2]);
       
      }
    };

var
 module_declaration=
  function(i,ppf,pmd)
   {string_loc(i,ppf,pmd[1]);
    attributes(i,ppf,pmd[3]);
    return module_type(i+1,ppf,pmd[2]);
    };

var
 module_binding=
  function(i,ppf,x)
   {string_loc(i,ppf,x[1]);
    attributes(i,ppf,x[3]);
    return module_expr(i+1,ppf,x[2]);
    };

var
 core_type_x_core_type_x_location=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "<constraint> ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "<constraint> %a\n"],
      fmt_location,
      param[3]);
    core_type(i+1,ppf,param[1]);
    return core_type(i+1,ppf,param[2]);
    };

var
 constructor_decl=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
       "%a\n"],
      fmt_location,
      param[4]);
    line
     (i+1,
      ppf,
      [/* Format */0,
       [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
       "%a\n"],
      fmt_string_loc,
      param[1]);
    attributes(i,ppf,param[5]);
    list(i+1,core_type,ppf,param[2]);
    return option(i+1,core_type,ppf,param[3]);
    };

var
 label_decl=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
       "%a\n"],
      fmt_location,
      param[4]);
    attributes(i,ppf,param[5]);
    line
     (i+1,
      ppf,
      [/* Format */0,
       [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
       "%a\n"],
      fmt_mutable_flag,
      param[2]);
    line
     (i+1,
      ppf,
      [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
      fmt_string_loc,
      param[1]);
    return core_type(i+1,ppf,param[3]);
    };

var
 longident_x_pattern=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
       "%a\n"],
      fmt_longident_loc,
      param[1]);
    return pattern(i+1,ppf,param[2]);
    };

var
 $$case=
  function(i,ppf,param)
   {var pc_guard=param[2];
    
    line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"<case>\n",/* End_of_format */0],
       "<case>\n"]);
    pattern(i+1,ppf,param[1]);
    if(pc_guard)
     {line
       (i+1,
        ppf,
        [/* Format */0,
         [/* String_literal */11,"<when>\n",/* End_of_format */0],
         "<when>\n"]),
      expression(i+2,ppf,pc_guard[1])}
    else
     {}
    
    return expression(i+1,ppf,param[3]);
    };

var
 value_binding=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,"<def>\n",/* End_of_format */0],
       "<def>\n"]);
    attributes(i+1,ppf,x[3]);
    pattern(i+1,ppf,x[1]);
    return expression(i+1,ppf,x[2]);
    };

var
 string_x_expression=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        "<override> ",
        [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]]],
       "<override> %a\n"],
      fmt_string_loc,
      param[1]);
    return expression(i+1,ppf,param[2]);
    };

var
 longident_x_expression=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* Alpha */15,[/* Char_literal */12,10,/* End_of_format */0]],
       "%a\n"],
      fmt_longident_loc,
      param[1]);
    return expression(i+1,ppf,param[2]);
    };

var
 label_x_expression=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [/* Format */0,
       [/* String_literal */11,
        '<label> "',
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,'"\n',/* End_of_format */0]]],
       '<label> "%s"\n'],
      param[1]);
    return expression(i+1,ppf,param[2]);
    };

var
 label_x_bool_x_core_type_list=
  function(i,ppf,x)
   {switch(x[0])
     {case 0:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Rtag "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,
             '" ',
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,10,/* End_of_format */0]]]]],
          'Rtag "%s" %s\n'],
         x[1],
         Pervasives["string_of_bool"](x[3]));
       attributes(i+1,ppf,x[2]);
       return list(i+1,core_type,ppf,x[4]);
       
      case 1:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Rinherit\n",/* End_of_format */0],
          "Rinherit\n"]);
       return core_type(i+1,ppf,x[1]);
       
      }
    };

var
 toplevel_phrase=
  function(i,ppf,x)
   {switch(x[0])
     {case 0:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,"Ptop_def\n",/* End_of_format */0],
          "Ptop_def\n"]);
       return structure(i+1,ppf,x[1]);
       
      case 1:
       line
        (i,
         ppf,
         [/* Format */0,
          [/* String_literal */11,
           'Ptop_dir "',
           [/* String */2,
            /* No_padding */0,
            [/* String_literal */11,'"\n',/* End_of_format */0]]],
          'Ptop_dir "%s"\n'],
         x[1]);
       return directive_argument(i,ppf,x[2]);
       
      }
    };

var
 directive_argument=
  function(i,ppf,x)
   {if(typeof x==="number")
     {switch(x)
       {case 0:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,"Pdir_none\n",/* End_of_format */0],
                   "Pdir_none\n"]);
         
        }}
    else
     {switch(x[0])
       {case 0:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    'Pdir_string "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,'"\n',/* End_of_format */0]]],
                   'Pdir_string "%s"\n'],
                  x[1]);
         
        case 1:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Pdir_int ",
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Pdir_int %d\n"],
                  x[1]);
         
        case 2:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Pdir_ident ",
                    [/* Alpha */15,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Pdir_ident %a\n"],
                  fmt_longident,
                  x[1]);
         
        case 3:
         return line
                 (i,
                  ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Pdir_bool ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,10,/* End_of_format */0]]],
                   "Pdir_bool %s\n"],
                  Pervasives["string_of_bool"](x[1]));
         
        }}
    };

var $$interface=function(ppf,x){return list(0,signature_item,ppf,x);};

var implementation=function(ppf,x){return list(0,structure_item,ppf,x);};

var top_phrase=function(ppf,x){return toplevel_phrase(0,ppf,x);};

module["exports"]=
{"interface":$$interface,
 "implementation":implementation,
 "top_phrase":top_phrase,
 "expression":expression,
 "structure":structure,
 "payload":payload};

