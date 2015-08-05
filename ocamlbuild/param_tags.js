// Generated CODE, PLEASE EDIT WITH CARE 

var Lexers=require("Lexers");
var Printf=require("Printf");
var Loc=require("Loc");
var My_std=require("My_std");
var Tags=require("Tags");
var Hashtbl=require("Hashtbl");
var Log=require("Log");


var $$let=My_std["String"];

var StringSet=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var declared_tags=Hashtbl["create"](0,17);

var acknowledged_tags=[0,0];

var
 only_once=
  function(f)
   {var instances=[0,StringSet[1]];
    
    return function(param)
     {if(StringSet[3](param,instances[1]))
       {return 0;}
      else
       {instances[1]=StringSet[4](param,instances[1]),0;return f(param);}
      };
    };

var
 declare=
  function(name,action)
   {return Hashtbl["add"](declared_tags,name,only_once(action));};

var
 parse=
  function(source,tag)
   {return Lexers["tag_gen"](source,My_std["lexbuf_of_string"](0,tag));};

var
 acknowledge=
  function(source,maybe_loc,tag)
   {return acknowledged_tags[1]=
           [0,[0,parse(source,tag),maybe_loc],acknowledged_tags[1]],
           0;
    };

var
 really_acknowledge=
  function($staropt$star,param)
   {var maybe_loc=param[2];
    
    var match=param[1];
    
    var param$1=match[2];
    
    var name=match[1];
    
    if($staropt$star){var quiet=$staropt$star[1];}else{var quiet=0;}
    
    if(param$1)
     {var param$2=param$1[1];
      
      var actions=My_std["List"][9](Hashtbl["find_all"](declared_tags,name));
      
      if((actions=0)&&!quiet)
       {Log["eprintf"]
         ([0,
           [15,
            [11,
             "Warning: tag ",
             [3,
              0,
              [11,
               " does not expect a parameter, but is used with parameter ",
               [3,0,0]]]]],
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
                ([0,
                  [15,
                   [11,"Warning: tag ",[3,0,[11," expects a parameter",0]]]],
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
   {var parse_noloc=function(tag){return [0,parse(source,tag),0];};
    
    return Tags["iter"]
            (function(tag){return really_acknowledge(quiet,parse_noloc(tag));},
             tags);
    };

var
 init=
  function(param)
   {return My_std["List"][14]
            (function(eta){return really_acknowledge(0,eta);},
             My_std["List"][4](acknowledged_tags[1]));
    };

var make=Printf["sprintf"]([0,[2,0,[12,40,[2,0,[12,41,0]]]],"%s(%s)"]);

module["exports"]=
{"declare":declare,
 "acknowledge":acknowledge,
 "init":init,
 "partial_init":partial_init,
 "make":make};

