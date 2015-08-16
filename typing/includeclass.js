// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var Printtyp=require("./printtyp.js");
var List=require("./list.js");
var Format=require("./format.js");


var
 class_types=
  function(env,cty1,cty2)
   {return Ctype["match_class_types"](/* None */0,env,cty1,cty2);};

var
 class_type_declarations=
  function(env,cty1,cty2)
   {return Ctype["match_class_declarations"]
            (env,cty1[1],cty1[2],cty2[1],cty2[2]);
    };

var
 class_declarations=
  function(env,cty1,cty2)
   {var match=cty1[4];
    
    var match$1=cty2[4];
    
    var exit;
    
    if(match)
     {exit=4;}
    else
     {if(match$1)
       {return [/* :: */0,/* CM_Virtual_class */0,/* [] */0];}
      else
       {exit=4;}
      }
    
    switch(exit)
     {case 4:
       return Ctype["match_class_declarations"]
               (env,cty1[1],cty1[2],cty2[1],cty2[2]);
       
      }
    };

var
 include_err=
  function(ppf,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "A class cannot be changed from virtual to concrete",
                    /* End_of_format */0],
                   "A class cannot be changed from virtual to concrete"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The classes do not have the same number of type parameters",
                    /* End_of_format */0],
                   "The classes do not have the same number of type parameters"]);
         
        case 1:
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[1],
                  [/* Some */0,/* false */0],
                  param[2],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "A type parameter has type",
                               /* End_of_format */0],
                              "A type parameter has type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is expected to have type",
                               /* End_of_format */0],
                              "but is expected to have type"]);
                    });
         
        case 2:
         var cty2=param[3];
         
         var cty1=param[2];
         
         return Printtyp["wrap_printing_env"]
                 (param[1],
                  function(param$1)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* Formatting_gen */18,
                               [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                               [/* String_literal */11,
                                "The class type",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;<1 2>",1,2],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* String */2,
                                    /* No_padding */0,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@;<1 2>",1,2],
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       /* Close_box */0,
                                       /* End_of_format */0]]]]]]]]],
                              "@[The class type@;<1 2>%a@ %s@;<1 2>%a@]"],
                             Printtyp["class_type"],
                             cty1,
                             "is not matched by the class type",
                             Printtyp["class_type"],
                             cty2);
                    });
         
        case 3:
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[1],
                  [/* Some */0,/* false */0],
                  param[2],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "A parameter has type",
                               /* End_of_format */0],
                              "A parameter has type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is expected to have type",
                               /* End_of_format */0],
                              "but is expected to have type"]);
                    });
         
        case 4:
         var lab=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[2],
                  [/* Some */0,/* false */0],
                  param[3],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "The instance variable ",
                               [/* String */2,
                                /* No_padding */0,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String_literal */11,"has type",/* End_of_format */0]]]],
                              "The instance variable %s@ has type"],
                             lab);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is expected to have type",
                               /* End_of_format */0],
                              "but is expected to have type"]);
                    });
         
        case 5:
         var lab$1=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[2],
                  [/* Some */0,/* false */0],
                  param[3],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "The method ",
                               [/* String */2,
                                /* No_padding */0,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String_literal */11,"has type",/* End_of_format */0]]]],
                              "The method %s@ has type"],
                             lab$1);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is expected to have type",
                               /* End_of_format */0],
                              "but is expected to have type"]);
                    });
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The non-mutable instance variable ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " cannot become mutable",
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[The non-mutable instance variable %s cannot become mutable@]"],
                  param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The virtual instance variable ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " cannot become concrete",
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[The virtual instance variable %s cannot become concrete@]"],
                  param[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The first class type has no instance variable ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]],
                   "@[The first class type has no instance variable %s@]"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The first class type has no method ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]],
                   "@[The first class type has no method %s@]"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The public method ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " cannot be hidden",
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[The public method %s cannot be hidden@]"],
                  param[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The virtual ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,
                         " cannot be hidden",
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[The virtual %s %s cannot be hidden@]"],
                  param[1],
                  param[2]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The public method ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " cannot become private",
                       /* End_of_format */0]]]],
                   "@[The public method %s cannot become private"],
                  param[1]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The private method ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " cannot become public",
                      /* End_of_format */0]]],
                   "The private method %s cannot become public"],
                  param[1]);
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The virtual method ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " cannot become concrete",
                       /* End_of_format */0]]]],
                   "@[The virtual method %s cannot become concrete"],
                  param[1]);
         
        }}
    };

var
 report_error=
  function(ppf,param)
   {if(param)
     {var
       print_errs=
        function(ppf,errs)
         {return List["iter"]
                  (function(err)
                    {return Format["fprintf"]
                             (ppf,
                              [/* Format */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,/* End_of_format */0]],
                               "@ %a"],
                              include_err,
                              err);
                     },
                   errs);
          };
      
      return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Formatting_gen */18,
                 [/* Open_box */1,
                  [/* Format */0,
                   [/* String_literal */11,"<v>",/* End_of_format */0],
                   "<v>"]],
                 [/* Alpha */15,
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0]]]],
                "@[<v>%a%a@]"],
               include_err,
               param[1],
               print_errs,
               param[2]);
      }
    else
     {return /* () */0;}
    };

module["exports"]=
{"class_types":class_types,
 "class_type_declarations":class_type_declarations,
 "class_declarations":class_declarations,
 "report_error":report_error};

