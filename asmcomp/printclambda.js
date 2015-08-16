// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Printlambda=require("./printlambda.js");
var List=require("./list.js");
var Format=require("./format.js");
var Ident=require("./ident.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 structured_constant=
  function(ppf,param)
   {switch(param[0])
     {case 0:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Float */8,
                  /* Float_F */15,
                  /* No_padding */0,
                  /* No_precision */0,
                  /* End_of_format */0],
                 "%F"],
                param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Int32 */5,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,108,/* End_of_format */0]],
                 "%ldl"],
                param[1]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Int64 */7,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,76,/* End_of_format */0]],
                 "%LdL"],
                param[1]);
       
      case 3:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Nativeint */6,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,110,/* End_of_format */0]],
                 "%ndn"],
                param[1]);
       
      case 4:
       Format["fprintf"]
        (ppf,
         [/* Format */0,
          [/* String_literal */11,
           "block(",
           [/* Int */4,
            /* Int_i */3,
            /* No_padding */0,
            /* No_precision */0,
            /* End_of_format */0]],
          "block(%i"],
         param[1]);
       List["iter"]
        (function(u)
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Char_literal */12,
                      44,
                      [/* Alpha */15,/* End_of_format */0]],
                     ",%a"],
                    uconstant,
                    u);
           },
         param[2]);
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Char_literal */12,41,/* End_of_format */0],
                 ")"]);
       
      case 5:
       var match=param[1];
       
       if(match)
        {Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "floatarray(",
             [/* Float */8,
              /* Float_F */15,
              /* No_padding */0,
              /* No_precision */0,
              /* End_of_format */0]],
            "floatarray(%F"],
           match[1]);
         List["iter"]
          (function(f)
            {return Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* Char_literal */12,
                        44,
                        [/* Float */8,
                         /* Float_F */15,
                         /* No_padding */0,
                         /* No_precision */0,
                         /* End_of_format */0]],
                       ",%F"],
                      f);
             },
           match[2]);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,41,/* End_of_format */0],
                   ")"]);
         }
       else
        {return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"floatarray()",/* End_of_format */0],
                   "floatarray()"]);
         }
       
      case 6:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                 "%S"],
                param[1]);
       
      }
    };

var
 uconstant=
  function(ppf,param)
   {switch(param[0])
     {case 0:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Caml_string */3,
                  /* No_padding */0,
                  [/* Char_literal */12,
                   61,
                   [/* Alpha */15,/* End_of_format */0]]],
                 "%S=%a"],
                param[1],
                structured_constant,
                param[2]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Int */4,
                  /* Int_i */3,
                  /* No_padding */0,
                  /* No_precision */0,
                  /* End_of_format */0],
                 "%i"],
                param[1]);
       
      case 2:
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
       
      }
    };

var
 lam=
  function(ppf,param)
   {switch(param[0])
     {case 0:return Ident["print"](ppf,param[1]);
      case 1:return uconstant(ppf,param[1]);
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
                   "(apply*",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]]]]]]],
                 "@[<2>(apply*@ %s %a)@]"],
                param[1],
                lams,
                param[2]);
       
      case 3:
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
                param[1],
                lams$1,
                param[2]);
       
      case 4:
       var
        idents=
         function(ppf)
          {return List["iter"]
                   (Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,/* End_of_format */0]],
                       "@ %a"],
                      Ident["print"]));
           };
       
       var
        one_fun=
         function(ppf,f)
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* String_literal */11,
                       "(fun",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Int */4,
                           /* Int_d */0,
                           /* No_padding */0,
                           /* No_precision */0,
                           [/* Char_literal */12,
                            32,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<2>",/* End_of_format */0],
                               "<2>"]],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Formatting_gen */18,
                                 [/* Open_box */1,
                                  [/* Format */0,
                                   [/* String_literal */11,"<2>",/* End_of_format */0],
                                   "<2>"]],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    [/* Char_literal */12,41,/* End_of_format */0]]]]]]]]]]]]]]]],
                     "@[<2>(fun@ %s@ %d @[<2>%a@]@ @[<2>%a@]@])"],
                    f[1],
                    f[2],
                    idents,
                    f[3],
                    lam,
                    f[4]);
           };
       
       var
        funs=
         function(ppf)
          {return List["iter"]
                   (Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,/* End_of_format */0]],
                       "@ %a"],
                      one_fun));
           };
       
       var
        lams$2=
         function(ppf)
          {return List["iter"]
                   (Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,/* End_of_format */0]],
                       "@ %a"],
                      lam));
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
                   "(closure",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Alpha */15,
                     [/* Char_literal */12,
                      32,
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]]]]]]],
                 "@[<2>(closure@ %a %a)@]"],
                funs,
                param[1],
                lams$2,
                param[2]);
       
      case 5:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<2>",/* End_of_format */0],
                    "<2>"]],
                  [/* String_literal */11,
                   "(offset ",
                   [/* Alpha */15,
                    [/* Char_literal */12,
                     32,
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* Char_literal */12,
                       41,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]]]],
                 "@[<2>(offset %a %d)@]"],
                lam,
                param[1],
                param[2]);
       
      case 6:
       var
        letbody=
         function(ul)
          {switch(ul[0])
            {case 6:
              Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* Formatting_gen */18,
                   [/* Open_box */1,
                    [/* Format */0,
                     [/* String_literal */11,"<2>",/* End_of_format */0],
                     "<2>"]],
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]]]],
                 "@ @[<2>%a@ %a@]"],
                Ident["print"],
                ul[1],
                lam,
                ul[2]);
              return letbody(ul[3]);
              
             default:return ul;}
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
             [/* Formatting_gen */18,
              [/* Open_box */1,
               [/* Format */0,
                [/* String_literal */11,"<hv 1>",/* End_of_format */0],
                "<hv 1>"]],
              [/* Char_literal */12,
               40,
               [/* Formatting_gen */18,
                [/* Open_box */1,
                 [/* Format */0,
                  [/* String_literal */11,"<2>",/* End_of_format */0],
                  "<2>"]],
                [/* Alpha */15,
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0]]]]]]]]]],
          "@[<2>(let@ @[<hv 1>(@[<2>%a@ %a@]"],
         Ident["print"],
         param[1],
         lam,
         param[2]);
       var expr=letbody(param[3]);
       
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Char_literal */12,
                  41,
                  [/* Formatting_lit */17,
                   /* Close_box */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Alpha */15,
                     [/* Char_literal */12,
                      41,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]]]],
                 ")@]@ %a)@]"],
                lam,
                expr);
       
      case 7:
       var
        bindings=
         function(ppf,id_arg_list)
          {var spc=[0,/* false */0];
           
           return List["iter"]
                   (function(param$1)
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
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     /* Close_box */0,
                                     /* End_of_format */0]]]]],
                                "@[<2>%a@ %a@]"],
                               Ident["print"],
                               param$1[1],
                               lam,
                               param$1[2]);
                      },
                    id_arg_list);
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
                   "(letrec",
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
                        [/* Char_literal */12,
                         41,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            41,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]]]],
                 "@[<2>(letrec@ (@[<hv 1>%a@])@ %a)@]"],
                bindings,
                param[1],
                lam,
                param[2]);
       
      case 8:
       var
        lams$3=
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
                Printlambda["primitive"],
                param[1],
                lams$3,
                param[2]);
       
      case 9:
       var
        print_case=
         function(tag,index,i,ppf)
          {for(var j=0;j<=/* -1 for tag */index["length"]-1-1;j++)
            {if(CamlPrimitive["caml_equal"](index[j+1],i))
              {Format["fprintf"]
                (ppf,
                 [/* Format */0,
                  [/* String_literal */11,
                   "case ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* Char_literal */12,
                     32,
                     [/* Int */4,
                      /* Int_i */3,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* Char_literal */12,58,/* End_of_format */0]]]]],
                  "case %s %i:"],
                 tag,
                 j)}
             else
              {}
             }
           return 0;
           };
       
       var
        print_cases=
         function(tag,index,cases,ppf)
          {for(var i=0;i<=/* -1 for tag */cases["length"]-1-1;i++)
            {Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<2>",/* End_of_format */0],
                    "<2>"]],
                  [/* Theta */16,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Alpha */15,
                     [/* Formatting_lit */17,
                      /* Close_box */0,
                      /* End_of_format */0]]]]]],
                "@ @[<2>%t@ %a@]"],
               print_case(tag,index,i),
               sequence,
               cases[i+1])}
           return 0;
           };
       
       var
        $$switch=
         function(ppf,sw)
          {print_cases("int",sw[1],sw[2],ppf);
           return print_cases("tag",sw[3],sw[4],ppf);
           };
       
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<v 0>",/* End_of_format */0],
                    "<v 0>"]],
                  [/* Formatting_gen */18,
                   [/* Open_box */1,
                    [/* Format */0,
                     [/* String_literal */11,"<2>",/* End_of_format */0],
                     "<2>"]],
                   [/* String_literal */11,
                    "(switch",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        [/* Alpha */15,
                         [/* Char_literal */12,
                          41,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]]]],
                 "@[<v 0>@[<2>(switch@ %a@ @]%a)@]"],
                lam,
                param[1],
                $$switch,
                param[2]);
       
      case 10:
       var d=param[3];
       
       var
        $$switch$1=
         function(ppf,sw)
          {var spc=[0,/* false */0];
           
           List["iter"]
            (function(param$1)
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
                        $$String["escaped"](param$1[1]),
                        lam,
                        param$1[2]);
               },
             sw);
           if(d)
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
                      d[1]);
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
                   "(switch ",
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
                 "@[<1>(switch %a@ @[<v 0>%a@])@]"],
                lam,
                param[1],
                $$switch$1,
                param[2]);
       
      case 11:
       var
        lams$4=
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
                param[1],
                lams$4,
                param[2]);
       
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
                param[3],
                param[1],
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
                param[2],
                lam,
                param[4]);
       
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
                param[1],
                Ident["print"],
                param[2],
                lam,
                param[3]);
       
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
                param[1],
                lam,
                param[2],
                lam,
                param[3]);
       
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
                param[1],
                sequence,
                param[2]);
       
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
                param[1],
                lam,
                param[2]);
       
      case 17:
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
                param[1],
                lam,
                param[2],
                param[4]!==0?"downto":"to",
                lam,
                param[3],
                lam,
                param[5]);
       
      case 18:
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
                param[1],
                lam,
                param[2]);
       
      case 19:
       var k=param[1];
       
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
        {var kind="self";}
       else
        {if(k===/* Cached */2){var kind="cache";}else{var kind="";}}
       
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
                kind,
                lam,
                param[3],
                lam,
                param[2],
                args,
                param[4]);
       
      }
    };

var
 sequence=
  function(ppf,ulam)
   {switch(ulam[0])
     {case 15:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Alpha */15,
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Alpha */15,/* End_of_format */0]]],
                 "%a@ %a"],
                sequence,
                ulam[1],
                sequence,
                ulam[2]);
       
      default:return lam(ppf,ulam);}
    };

var
 clambda=
  function(ppf,ulam)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Alpha */15,
               [/* Formatting_lit */17,
                /* Flush_newline */4,
                /* End_of_format */0]],
              "%a@."],
             lam,
             ulam);
    };

var
 approx=
  function(ppf,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,95,/* End_of_format */0],
                   "_"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         var fundesc=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,
              [/* Format */0,
               [/* String_literal */11,"<2>",/* End_of_format */0],
               "<2>"]],
             [/* String_literal */11,
              "function ",
              [/* String */2,
               /* No_padding */0,
               [/* Formatting_lit */17,
                [/* Break */0,"@ ",1,0],
                [/* String_literal */11,
                 "arity ",
                 [/* Int */4,
                  /* Int_i */3,
                  /* No_padding */0,
                  /* No_precision */0,
                  /* End_of_format */0]]]]]],
            "@[<2>function %s@ arity %i"],
           fundesc[1],
           fundesc[2]);
         if(fundesc[3])
          {Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Formatting_lit */17,
               [/* Break */0,"@ ",1,0],
               [/* String_literal */11,"(closed)",/* End_of_format */0]],
              "@ (closed)"])}
         else
          {}
         
         if(fundesc[4]!==/* None */0)
          {Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Formatting_lit */17,
               [/* Break */0,"@ ",1,0],
               [/* String_literal */11,"(inline)",/* End_of_format */0]],
              "@ (inline)"])}
         else
          {}
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String_literal */11,
                     "-> ",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@ -> @ %a@]"],
                  approx,
                  param[2]);
         
        case 1:
         var
          tuple=
           function(ppf,a)
            {for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++)
              {if(i>0)
                {Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Char_literal */12,
                     59,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      /* End_of_format */0]],
                    ";@ "])}
               else
                {}
               
               Format["fprintf"]
                (ppf,
                 [/* Format */0,
                  [/* Int */4,
                   /* Int_i */3,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* String_literal */11,
                    ": ",
                    [/* Alpha */15,/* End_of_format */0]]],
                  "%i: %a"],
                 i,
                 approx,
                 a[i+1])}
             return 0;
             };
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hov 1>",/* End_of_format */0],
                      "<hov 1>"]],
                    [/* Char_literal */12,
                     40,
                     [/* Alpha */15,
                      [/* Char_literal */12,
                       41,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[<hov 1>(%a)@]"],
                  tuple,
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "const(",
                     [/* Alpha */15,
                      [/* Char_literal */12,
                       41,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[const(%a)@]"],
                  uconstant,
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "global(",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       44,
                       [/* Int */4,
                        /* Int_i */3,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* Char_literal */12,
                         41,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[global(%s,%i)@]"],
                  param[1],
                  param[2]);
         
        }}
    };

module["exports"]=
{"clambda":clambda,"approx":approx,"structured_constant":structured_constant};

