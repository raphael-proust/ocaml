var Lexers=require("Lexers");
var Printf=require("Printf");
var Loc=require("Loc");
var My_std=require("My_std");
var Tags=require("Tags");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var $js=My_std["Set"][1];
var let=My_std["String"];
var $js$1=[0,let[40],let[1]];
var StringSet=$js($js$1);
var $js$2=Hashtbl["create"];
var declared_tags=$js$2(0,17);
var acknowledged_tags=[0,0];
var
 only_once=
  function(f)
   {var instances=[0,StringSet[1]];
    return function(param)
     {var $js$3=StringSet[3];
      var $js$4=$js$3(param,instances[1]);
      if($js$4)
       {return 0}
      else
       {var $js$5=StringSet[4];
        var $js$6=$js$5(param,instances[1]);
        instances[1]=$js$6,0;
        return f(param)}}};
var
 declare=
  function(name,action)
   {var $js$3=Hashtbl["add"];
    var $js$4=only_once(action);
    return $js$3(declared_tags,name,$js$4)};
var
 parse=
  function(source,tag)
   {var $js$3=Lexers["tag_gen"];
    var $js$4=My_std["lexbuf_of_string"];
    var $js$5=$js$4(0,tag);
    return $js$3(source,$js$5)};
var
 acknowledge=
  function(source,maybe_loc,tag)
   {var $js$3=parse(source,tag);
    var $js$4=[0,$js$3,maybe_loc];
    var $js$5=[0,$js$4,acknowledged_tags[1]];
    return acknowledged_tags[1]=$js$5,0};
var
 really_acknowledge=
  function(*opt*,param)
   {var maybe_loc=param[2];
    var match=param[1];
    var param$1=match[2];
    var name=match[1];
    var $js$3=*opt*;
    if($js$3){var quiet=*opt*[1]}else{var quiet=0}
    var $js$4=param$1;
    if($js$4)
     {var param$2=param$1[1];
      var $js$5=My_std["List"][9];
      var $js$6=Hashtbl["find_all"];
      var $js$7=$js$6(declared_tags,name);
      var actions=$js$5($js$7);
      var $js$8=(actions=0)&&!quiet;
      if($js$8)
       {var $js$9=Log["eprintf"];
        $js$9
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
      var $js$10=My_std["List"][14];
      return $js$10(function(f){return f(param$2)},actions)}
    else
     {var $js$11=Hashtbl["mem"];
      var $js$12=$js$11(declared_tags,name);
      var $js$13=$js$12&&!quiet;
      if($js$13)
       {var $js$14=Log["eprintf"];
        return $js$14
                ([0,
                  [15,
                   [11,"Warning: tag ",[3,0,[11," expects a parameter",0]]]],
                  "%aWarning: tag %S expects a parameter"],
                 Loc["print_loc_option"],
                 maybe_loc,
                 name)}
      else
       {return 0}}};
var
 partial_init=
  function(quiet,source,tags)
   {var
     parse_noloc=
      function(tag){var $js$3=parse(source,tag);return [0,$js$3,0]};
    var $js$3=Tags["iter"];
    return $js$3
            (function(tag)
              {var $js$4=parse_noloc(tag);
               return really_acknowledge(quiet,$js$4)},
             tags)};
var
 init=
  function(param)
   {var $js$3=My_std["List"][14];
    var $js$4=My_std["List"][4];
    var $js$5=$js$4(acknowledged_tags[1]);
    return $js$3(function(eta){return really_acknowledge(0,eta)},$js$5)};
var $js$3=Printf["sprintf"];
var make=$js$3([0,[2,0,[12,40,[2,0,[12,41,0]]]],"%s(%s)"]);
module["exports"]=
{"declare":declare,
 "acknowledge":acknowledge,
 "init":init,
 "partial_init":partial_init,
 "make":make};
