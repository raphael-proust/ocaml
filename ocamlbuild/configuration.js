// Generated CODE, PLEASE EDIT WITH CARE 

var Const=require("./const.js");
var Lexers=require("./lexers.js");
var Printf=require("./printf.js");
var Param_tags=require("./param_tags.js");
var Loc=require("./loc.js");
var Lexing=require("./lexing.js");
var My_std=require("./my_std.js");
var Tags=require("./tags.js");
var Hashtbl=require("./hashtbl.js");
var Log=require("./log.js");
var Glob=require("./glob.js");


var
 acknowledge_config=
  function(source,config)
   {var
     ack=
      function(param)
       {return Param_tags["acknowledge"]
                (source,/* Some */[0,param[2]],param[1])};
    
    return My_std["List"][14]
            (function(param){return My_std["List"][14](ack,param[2][1])},
             config)};

var cache=Hashtbl["create"](/* None */0,107);

var configs=[0,/* [] */0];

var
 match=
  /* tuple */[0,
   function(param){return configs[1]},
   function(source,config)
    {acknowledge_config(source,config);
     configs[1]=/* :: */[0,config,configs[1]];
     return Hashtbl["clear"](cache)}];

var add_config=match[2];

var configs$1=match[1];

var
 parse_lexbuf=
  function(dir,source,lexbuf)
   {var conf=Lexers["conf_lines"](dir,source,lexbuf);
    
    return add_config(source,conf)};

var
 parse_string=
  function(source,s)
   {var source$1=source?source[1]:Const["Source"][8];
    
    return parse_lexbuf
            (/* None */0,source$1,My_std["lexbuf_of_string"](/* None */0,s))};

var
 parse_file=
  function(dir,file)
   {return My_std["with_input_file"]
            (/* None */0,
             file,
             function(ic)
              {var lexbuf=Lexing["from_channel"](ic);
               
               My_std["set_lexbuf_fname"](file,lexbuf);
               return parse_lexbuf(dir,Const["Source"][1],lexbuf)})};

var key_match=Glob["eval"];

var
 apply_config=
  function(s,config,init)
   {var add=function(param){return Tags["add"](param[1])};
    
    var remove=function(param){return Tags["remove"](param[1])};
    
    return My_std["List"][19]
            (function(tags,param)
              {var v=param[2];
               
               return key_match(param[1],s)
                       ?My_std["List"][20]
                         (add,v[1],My_std["List"][20](remove,v[2],tags))
                       :tags},
             init,
             config)};

var
 apply_configs=
  function(s)
   {return My_std["List"][20]
            (apply_config(s),configs$1(/* () */0),Tags["empty"])};

var
 tags_of_filename=
  function(s)
   {try
     {return Hashtbl["find"](cache,s)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var res=apply_configs(s);
        
        var match$1=Hashtbl["replace"](cache,s,res);
        
        return res}
      else
       {throw exn}
      }
    };

var global_tags=function(param){return tags_of_filename("")};

var has_tag=function(tag){return Tags["mem"](tag,global_tags(/* () */0))};

var
 tag_file=
  function(file,tags)
   {return tags!==/* [] */0
            ?parse_string
              (/* None */0,
               Printf["sprintf"]
                ([/* Format */0,
                  [/* Caml_string */3,
                   /* No_padding */0,
                   [/* String_literal */11,
                    ": ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                  "%S: %s"],
                 file,
                 My_std["String"][22](", ",tags)))
            :0};

var
 tag_any=
  function(tags)
   {return tags!==/* [] */0
            ?parse_string
              (/* None */0,
               Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "true: ",
                   [/* String */2,/* No_padding */0,/* End_of_format */0]],
                  "true: %s"],
                 My_std["String"][22](", ",tags)))
            :0};

var
 check_tags_usage=
  function(useful_tags)
   {var
     check_tag=
      function(param)
       {var tag=param[1];
        
        return !Tags["mem"](tag,useful_tags)
                ?Log["eprintf"]
                  ([/* Format */0,
                    [/* Alpha */15,
                     [/* String_literal */11,
                      "Warning: the tag ",
                      [/* Caml_string */3,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " is not used in any flag or dependency declaration, so it will have no effect; it may be a typo. Otherwise you can use `mark_tag_used` in your myocamlbuild.ml to disable this warning.",
                        /* End_of_format */0]]]],
                    "%aWarning: the tag %S is not used in any flag or dependency declaration, so it will have no effect; it may be a typo. Otherwise you can use `mark_tag_used` in your myocamlbuild.ml to disable this warning."],
                   Loc["print_loc"],
                   param[2],
                   tag)
                :0};
    
    var
     check_conf=
      function(param)
       {var values=param[2];
        
        My_std["List"][14](check_tag,values[1]);
        return My_std["List"][14](check_tag,values[2])};
    
    return My_std["List"][14]
            (My_std["List"][14](check_conf),configs$1(/* () */0))};

module["exports"]=
{"parse_string":parse_string,
 "parse_file":parse_file,
 "tags_of_filename":tags_of_filename,
 "has_tag":has_tag,
 "tag_file":tag_file,
 "tag_any":tag_any,
 "global_tags":global_tags,
 "check_tags_usage":check_tags_usage};

