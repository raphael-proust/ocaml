// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var Printtyp=require("Printtyp");
var List=require("List");
var Format=require("Format");


var
 class_types=
  function(env,cty1,cty2){return Ctype["match_class_types"](0,env,cty1,cty2);};

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
    
    if(match){exit=4;}else{if(match$1){return [0,0,0];}else{exit=4;}}
    
    switch(exit)
     {case 4:
       return Ctype["match_class_declarations"]
               (env,cty1[1],cty1[2],cty2[1],cty2[2]);
       
      }
    };

var
 include_err=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"A class cannot be changed from virtual to concrete",0],
                   "A class cannot be changed from virtual to concrete"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The classes do not have the same number of type parameters",
                    0],
                   "The classes do not have the same number of type parameters"]);
         
        case 1:
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[1],
                  [0,0],
                  param[2],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"A type parameter has type",0],
                              "A type parameter has type"]);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but is expected to have type",0],
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
                             [0,
                              [18,
                               [1,[0,0,""]],
                               [11,
                                "The class type",
                                [17,
                                 [0,"@;<1 2>",1,2],
                                 [15,
                                  [17,[0,"@ ",1,0],[2,0,[17,[0,"@;<1 2>",1,2],[15,[17,0,0]]]]]]]]],
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
                  [0,0],
                  param[2],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,[11,"A parameter has type",0],"A parameter has type"]);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but is expected to have type",0],
                              "but is expected to have type"]);
                    });
         
        case 4:
         var lab=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[2],
                  [0,0],
                  param[3],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "The instance variable ",
                               [2,0,[17,[0,"@ ",1,0],[11,"has type",0]]]],
                              "The instance variable %s@ has type"],
                             lab);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but is expected to have type",0],
                              "but is expected to have type"]);
                    });
         
        case 5:
         var lab$1=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[2],
                  [0,0],
                  param[3],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"The method ",[2,0,[17,[0,"@ ",1,0],[11,"has type",0]]]],
                              "The method %s@ has type"],
                             lab$1);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but is expected to have type",0],
                              "but is expected to have type"]);
                    });
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The non-mutable instance variable ",
                     [2,0,[11," cannot become mutable",[17,0,0]]]]],
                   "@[The non-mutable instance variable %s cannot become mutable@]"],
                  param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The virtual instance variable ",
                     [2,0,[11," cannot become concrete",[17,0,0]]]]],
                   "@[The virtual instance variable %s cannot become concrete@]"],
                  param[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The first class type has no instance variable ",
                     [2,0,[17,0,0]]]],
                   "@[The first class type has no instance variable %s@]"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,"The first class type has no method ",[2,0,[17,0,0]]]],
                   "@[The first class type has no method %s@]"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The public method ",
                     [2,0,[11," cannot be hidden",[17,0,0]]]]],
                   "@[The public method %s cannot be hidden@]"],
                  param[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The virtual ",
                     [2,0,[12,32,[2,0,[11," cannot be hidden",[17,0,0]]]]]]],
                   "@[The virtual %s %s cannot be hidden@]"],
                  param[1],
                  param[2]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The public method ",
                     [2,0,[11," cannot become private",0]]]],
                   "@[The public method %s cannot become private"],
                  param[1]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The private method ",
                    [2,0,[11," cannot become public",0]]],
                   "The private method %s cannot become public"],
                  param[1]);
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The virtual method ",
                     [2,0,[11," cannot become concrete",0]]]],
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
        function(ppf$1,errs)
         {return List["iter"]
                  (function(err)
                    {return Format["fprintf"]
                             (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],include_err,err);
                     },
                   errs);
          };
      
      return Format["fprintf"]
              (ppf,
               [0,
                [18,[1,[0,[11,"<v>",0],"<v>"]],[15,[15,[17,0,0]]]],
                "@[<v>%a%a@]"],
               include_err,
               param[1],
               print_errs,
               param[2]);
      }
    else
     {return 0;}
    };

module["exports"]=
{"class_types":class_types,
 "class_type_declarations":class_type_declarations,
 "class_declarations":class_declarations,
 "report_error":report_error};

