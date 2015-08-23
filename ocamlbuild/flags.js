// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Command=require("./command.js");
var Param_tags=require("./param_tags.js");
var Tags=require("./tags.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");


var flags_of_decl=function(param){return param[2]};

var tags_of_decl=function(param){return param[1]};

var all_decls=[0,/* [] */0];

var
 of_tags=
  function(matched_tags)
   {return /* S */[0,
            List["fold_left"]
             (function(acc,param)
               {return Tags["does_match"](matched_tags,param[1])
                        ?/* :: */[0,param[2],acc]
                        :acc},
              /* [] */0,
              all_decls[1])]};

var match=(Command["tag_handler"][1]=of_tags,0);

var of_tag_list=function(x){return of_tags(Tags["of_list"](x))};

var
 add_decl=
  function(decl){return all_decls[1]=/* :: */[0,decl,all_decls[1]],0};

var
 flag=
  function($staropt$star,tags,flags)
   {var deprecated=$staropt$star?$staropt$star[1]:/* false */0;
    
    var tags$1=Tags["of_list"](tags);
    
    return add_decl(/* record */[0,tags$1,flags,deprecated])};

var
 pflag=
  function(tags,ptag,flags)
   {return Param_tags["declare"]
            (ptag,
             function(param)
              {return flag
                       (/* None */0,
                        /* :: */[0,Param_tags["make"](ptag,param),tags],
                        flags(param))})};

var add=function(x,xs){return /* :: */[0,x,xs]};

var
 remove=
  function(me)
   {return List["filter"]
            (function(x){return CamlPrimitive["caml_notequal"](me,x)})};

var
 pretty_print=
  function(param)
   {var sflag=Command["string_of_command_spec"](param[2]);
    
    var header=param[3]?"deprecated flag":"flag";
    
    var pp=function(fmt){return Log["raw_dprintf"](-1,fmt)};
    
    return pp
            ([/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,
                [/* Format */0,
                 [/* String_literal */11,"<2>",/* End_of_format */0],
                 "<2>"]],
               [/* String */2,
                /* No_padding */0,
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* String_literal */11,
                  "{. ",
                  [/* Alpha */15,
                   [/* String_literal */11,
                    " .}",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Caml_string */3,
                      /* No_padding */0,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       [/* Formatting_lit */17,
                        /* Force_newline */3,
                        [/* Formatting_lit */17,
                         /* Force_newline */3,
                         /* End_of_format */0]]]]]]]]]]],
              "@[<2>%s@ {. %a .}@ %S@]@\n@\n"],
             header,
             Tags["print"],
             param[1],
             sflag)};

var
 show_documentation=
  function(param)
   {List["iter"]
     (function(decl){return !decl[3]?pretty_print(decl):0},all_decls[1]);
    List["iter"]
     (function(decl){return decl[3]?pretty_print(decl):0},all_decls[1]);
    var pp=function(fmt){return Log["raw_dprintf"](-1,fmt)};
    
    return pp
            ([/* Format */0,
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0],
              "@."])};

var used_tags=[0,Tags["empty"]];

var
 mark_tag_used=
  function(tag){return used_tags[1]=Tags["add"](tag,used_tags[1]),0};

var
 get_used_tags=
  function(param)
   {return List["fold_left"]
            (function(acc,decl){return Tags["union"](acc,decl[1])},
             used_tags[1],
             all_decls[1])};

module["exports"]=
{"of_tags":of_tags,
 "of_tag_list":of_tag_list,
 "flag":flag,
 "pflag":pflag,
 "add":add,
 "remove":remove,
 "show_documentation":show_documentation,
 "get_used_tags":get_used_tags,
 "mark_tag_used":mark_tag_used};

