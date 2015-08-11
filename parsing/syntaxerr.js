// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("Printf");
var Location=require("Location");


var $$Error="unknown primitive:caml_set_oo_id";

var Escape_error="unknown primitive:caml_set_oo_id";

var
 prepare_error=
  function(param)
   {switch(param)
     {case 0:
       var closing=param[4];
       
       var opening=param[2];
       
       return Location["errorf"]
               (/* Some */[0,param[3]],
                /* Some */[0,
                 /* :: */[0,
                  Location["error"]
                   (/* Some */[0,param[1]],
                    0,
                    0,
                    Printf["sprintf"]
                     ([0,
                       [11,"Error: This '",[2,0,[11,"' might be unmatched",0]]],
                       "Error: This '%s' might be unmatched"],
                      opening)),
                  0]],
                /* Some */[0,
                 Printf["sprintf"]
                  ([0,
                    [11,
                     "Syntax error: '",
                     [2,
                      0,
                      [11,
                       "' expected, the highlighted '",
                       [2,0,[11,"' might be unmatched",0]]]]],
                    "Syntax error: '%s' expected, the highlighted '%s' might be unmatched"],
                   closing,
                   opening)],
                [0,
                 [11,"Error: Syntax error: '",[2,0,[11,"' expected",0]]],
                 "Error: Syntax error: '%s' expected"],
                closing);
       
      case 1:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                0,
                0,
                [0,
                 [11,"Error: Syntax error: ",[2,0,[11," expected.",0]]],
                 "Error: Syntax error: %s expected."],
                param[2]);
       
      case 2:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                0,
                0,
                [0,
                 [11,"Error: Syntax error: ",[2,0,[11," not expected.",0]]],
                 "Error: Syntax error: %s not expected."],
                param[2]);
       
      case 3:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                0,
                0,
                [0,
                 [11,
                  "Error: Syntax error: applicative paths of the form F(X).t are not supported when the option -no-app-func is set.",
                  0],
                 "Error: Syntax error: applicative paths of the form F(X).t are not supported when the option -no-app-func is set."]);
       
      case 4:
       var $$var=param[2];
       
       return Location["errorf"]
               (/* Some */[0,param[1]],
                0,
                0,
                [0,
                 [11,
                  "Error: In this scoped type, variable '",
                  [2,
                   0,
                   [11," is reserved for the local type ",[2,0,[12,46,0]]]]],
                 "Error: In this scoped type, variable '%s is reserved for the local type %s."],
                $$var,
                $$var);
       
      case 5:
       return Location["error"]
               (/* Some */[0,param[1]],0,0,"Error: Syntax error");
       
      case 6:
       return Location["errorf"]
               (/* Some */[0,param[1]],
                0,
                0,
                [0,
                 [11,"Error: broken invariant in parsetree: ",[2,0,0]],
                 "Error: broken invariant in parsetree: %s"],
                param[2]);
       
      }
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,prepare_error(param[2])];}
      else
       {return 0;}
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

