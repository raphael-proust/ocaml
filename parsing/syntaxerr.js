// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("./printf.js");
var Location=require("./location.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Syntaxerr.Error",0]);

var
 Escape_error=
  CamlPrimitive["caml_set_oo_id"]([248,"Syntaxerr.Escape_error",0]);

var
 prepare_error=
  function(param)
   {switch(param[0])
     {case 0:
       var closing=param[4];
       
       var opening=param[2];
       
       return Location["errorf"]
               (/* Some */[0,param[3]],
                /* Some */[0,
                 /* :: */[0,
                  Location["error"]
                   (/* Some */[0,param[1]],
                    /* None */0,
                    /* None */0,
                    Printf["sprintf"]
                     ([/* Format */0,
                       [/* String_literal */11,
                        "Error: This '",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          "' might be unmatched",
                          /* End_of_format */0]]],
                       "Error: This '%s' might be unmatched"],
                      opening)),
                  /* [] */0]],
                /* Some */[0,
                 Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Syntax error: '",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       "' expected, the highlighted '",
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,
                         "' might be unmatched",
                         /* End_of_format */0]]]]],
                    "Syntax error: '%s' expected, the highlighted '%s' might be unmatched"],
                   closing,
                   opening)],
                [/* Format */0,
                 [/* String_literal */11,
                  "Error: Syntax error: '",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,"' expected",/* End_of_format */0]]],
                 "Error: Syntax error: '%s' expected"],
                closing);
       
      case 1:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Error: Syntax error: ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11," expected.",/* End_of_format */0]]],
                 "Error: Syntax error: %s expected."],
                param[2]);
       
      case 2:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Error: Syntax error: ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    " not expected.",
                    /* End_of_format */0]]],
                 "Error: Syntax error: %s not expected."],
                param[2]);
       
      case 3:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Error: Syntax error: applicative paths of the form F(X).t are not supported when the option -no-app-func is set.",
                  /* End_of_format */0],
                 "Error: Syntax error: applicative paths of the form F(X).t are not supported when the option -no-app-func is set."]);
       
      case 4:
       var $$var=param[2];
       
       return Location["errorf"]
               (/* Some */[0,param[1]],
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Error: In this scoped type, variable '",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    " is reserved for the local type ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,46,/* End_of_format */0]]]]],
                 "Error: In this scoped type, variable '%s is reserved for the local type %s."],
                $$var,
                $$var);
       
      case 5:
       return Location["error"]
               (/* Some */[0,param[1]],
                /* None */0,
                /* None */0,
                "Error: Syntax error");
       
      case 6:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Error: broken invariant in parsetree: ",
                  [/* String */2,/* No_padding */0,/* End_of_format */0]],
                 "Error: broken invariant in parsetree: %s"],
                param[2]);
       
      }
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,prepare_error(param[2])];}
      else
       {return /* None */0;}
      });

var
 report_error=
  function(ppf,err){return Location["report_error"](ppf,prepare_error(err));};

var location_of_error=function(param){return param[1];};

var
 ill_formed_ast=
  function(loc,s){throw [0,$$Error,/* Ill_formed_ast */[6,loc,s]];};

module["exports"]=
{"Error":$$Error,
 "Escape_error":Escape_error,
 "report_error":report_error,
 "location_of_error":location_of_error,
 "ill_formed_ast":ill_formed_ast};

