// Generated CODE, PLEASE EDIT WITH CARE 

var Lexers=require("./lexers.js");
var Printf=require("./printf.js");
var Loc=require("./loc.js");
var My_std=require("./my_std.js");
var Tags=require("./tags.js");
var Hashtbl=require("./hashtbl.js");
var Log=require("./log.js");


var $$let=My_std["String"];

var StringSet=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var declared_tags=Hashtbl["create"](/* None */0,17);

var acknowledged_tags=[0,/* [] */0];

var
 only_once=
  function(f)
   {var instances=[0,StringSet[1]];
    
    return function(param)
     {if(StringSet[3](param,instances[1]))
       {return /* () */0;}
      else
       {instances[1]=StringSet[4](param,instances[1]);return f(param);}
      };
    };

var
 declare=
  function(name,action)
   {return Hashtbl["add"](declared_tags,name,only_once(action));};

var
 parse=
  function(source,tag)
   {return Lexers["tag_gen"]
            (source,My_std["lexbuf_of_string"](/* None */0,tag));
    };

var
 acknowledge=
  function(source,maybe_loc,tag)
   {return acknowledged_tags[1]=
           /* :: */[0,
            /* tuple */[0,parse(source,tag),maybe_loc],
            acknowledged_tags[1]],
           0;
    };

var
 really_acknowledge=
  function($staropt$star,param)
   {var maybe_loc=param[2];
    
    var match=param[1];
    
    var param$1=match[2];
    
    var name=match[1];
    
    if($staropt$star)
     {var quiet=$staropt$star[1];}
    else
     {var quiet=/* false */0;}
    
    if(param$1)
     {var param$2=param$1[1];
      
      var actions=My_std["List"][9](Hashtbl["find_all"](declared_tags,name));
      
      if(actions===/* [] */0&&!quiet)
       {Log["eprintf"]
         ([/* Format */0,
           [/* Alpha */15,
            [/* String_literal */11,
             "Warning: tag ",
             [/* Caml_string */3,
              /* No_padding */0,
              [/* String_literal */11,
               " does not expect a parameter, but is used with parameter ",
               [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]]]],
           "%aWarning: tag %S does not expect a parameter, but is used with parameter %S"],
          Loc["print_loc_option"],
          maybe_loc,
          name,
          param$2)}
      else
       {}
      
      return My_std["List"][14](function(f){return f(param$2);},actions);
      }
    else
     {if(Hashtbl["mem"](declared_tags,name)&&!quiet)
       {return Log["eprintf"]
                ([/* Format */0,
                  [/* Alpha */15,
                   [/* String_literal */11,
                    "Warning: tag ",
                    [/* Caml_string */3,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " expects a parameter",
                      /* End_of_format */0]]]],
                  "%aWarning: tag %S expects a parameter"],
                 Loc["print_loc_option"],
                 maybe_loc,
                 name);
        }
      else
       {return 0;}
      }
    };

var
 partial_init=
  function(quiet,source,tags)
   {var
     parse_noloc=
      function(tag){return /* tuple */[0,parse(source,tag),/* None */0];};
    
    return Tags["iter"]
            (function(tag){return really_acknowledge(quiet,parse_noloc(tag));},
             tags);
    };

var
 init=
  function(param)
   {return My_std["List"][14]
            (function(eta){return really_acknowledge(/* None */0,eta);},
             My_std["List"][4](acknowledged_tags[1]));
    };

var
 make=
  Printf["sprintf"]
   ([/* Format */0,
     [/* String */2,
      /* No_padding */0,
      [/* Char_literal */12,
       40,
       [/* String */2,
        /* No_padding */0,
        [/* Char_literal */12,41,/* End_of_format */0]]]],
     "%s(%s)"]);

module["exports"]=
{"declare":declare,
 "acknowledge":acknowledge,
 "init":init,
 "partial_init":partial_init,
 "make":make};

