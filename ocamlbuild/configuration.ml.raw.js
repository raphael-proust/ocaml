var Const=require("Const");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Loc=require("Loc");
var Param_tags=require("Param_tags");
var Lexing=require("Lexing");
var My_std=require("My_std");
var Tags=require("Tags");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var Glob=require("Glob");
var
 acknowledge_config=
  function(source,config)
   {var
     ack=
      function(param)
       {var $js=Param_tags["acknowledge"];
        return $js(source,[0,param[2]],param[1])};
    var $js=My_std["List"][14];
    return $js
            (function(param)
              {var $js$1=My_std["List"][14];return $js$1(ack,param[2][1])},
             config)};
var $js=Hashtbl["create"];
var cache=$js(0,107);
var configs=[0,0];
var
 match=
  [0,
   function(param){return configs[1]},
   function(source,config)
    {acknowledge_config(source,config);
     configs[1]=[0,config,configs[1]],0;
     var $js$1=Hashtbl["clear"];
     return $js$1(cache)}];
var add_config=match[2];
var configs$1=match[1];
var
 parse_lexbuf=
  function(dir,source,lexbuf)
   {var $js$1=Lexers["conf_lines"];
    var conf=$js$1(dir,source,lexbuf);
    return add_config(source,conf)};
var
 parse_string=
  function(source,s)
   {var $js$1=source;
    if($js$1){var source$1=source[1]}else{var source$1=Const["Source"][8]}
    var $js$2=My_std["lexbuf_of_string"];
    var $js$3=$js$2(0,s);
    return parse_lexbuf(0,source$1,$js$3)};
var
 parse_file=
  function(dir,file)
   {var $js$1=My_std["with_input_file"];
    return $js$1
            (0,
             file,
             function(ic)
              {var $js$2=Lexing["from_channel"];
               var lexbuf=$js$2(ic);
               var $js$3=My_std["set_lexbuf_fname"];
               $js$3(file,lexbuf);
               return parse_lexbuf(dir,Const["Source"][1],lexbuf)})};
var key_match=Glob["eval"];
var
 apply_config=
  function(s,config,init)
   {var add=function(param){var $js$1=Tags["add"];return $js$1(param[1])};
    var
     remove=
      function(param){var $js$1=Tags["remove"];return $js$1(param[1])};
    var $js$1=My_std["List"][19];
    return $js$1
            (function(tags,param)
              {var v=param[2];
               var $js$2=key_match(param[1],s);
               if($js$2)
                {var $js$3=My_std["List"][20];
                 var $js$4=My_std["List"][20];
                 var $js$5=$js$4(remove,v[2],tags);
                 return $js$3(add,v[1],$js$5)}
               else
                {return tags}},
             init,
             config)};
var
 apply_configs=
  function(s)
   {var $js$1=My_std["List"][20];
    var $js$2=apply_config(s);
    var $js$3=configs$1(0);
    return $js$1($js$2,$js$3,Tags["empty"])};
var
 tags_of_filename=
  function(s)
   {try
     {var $js$1=Hashtbl["find"];return $js$1(cache,s)}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2)
       {var res=apply_configs(s);
        var $js$3=Hashtbl["replace"];
        var match$1=$js$3(cache,s,res);
        return res}
      else
       {return "unknown primitive:reraise"}}};
var global_tags=function(param){return tags_of_filename("")};
var
 has_tag=
  function(tag)
   {var $js$1=Tags["mem"];var $js$2=global_tags(0);return $js$1(tag,$js$2)};
var
 tag_file=
  function(file,tags)
   {var $js$1=tags!=0;
    if($js$1)
     {var $js$2=Printf["sprintf"];
      var $js$3=My_std["String"][22];
      var $js$4=$js$3(", ",tags);
      var $js$5=$js$2([0,[3,0,[11,": ",[2,0,0]]],"%S: %s"],file,$js$4);
      return parse_string(0,$js$5)}
    else
     {return 0}};
var
 tag_any=
  function(tags)
   {var $js$1=tags!=0;
    if($js$1)
     {var $js$2=Printf["sprintf"];
      var $js$3=My_std["String"][22];
      var $js$4=$js$3(", ",tags);
      var $js$5=$js$2([0,[11,"true: ",[2,0,0]],"true: %s"],$js$4);
      return parse_string(0,$js$5)}
    else
     {return 0}};
var
 check_tags_usage=
  function(useful_tags)
   {var
     check_tag=
      function(param)
       {var tag=param[1];
        var $js$1=Tags["mem"];
        var $js$2=$js$1(tag,useful_tags);
        var $js$3=!$js$2;
        if($js$3)
         {var $js$4=Log["eprintf"];
          return $js$4
                  ([0,
                    [15,
                     [11,
                      "Warning: the tag ",
                      [3,
                       0,
                       [11,
                        " is not used in any flag or dependency declaration, so it will have no effect; it may be a typo. Otherwise you can use `mark_tag_used` in your myocamlbuild.ml to disable this warning.",
                        0]]]],
                    "%aWarning: the tag %S is not used in any flag or dependency declaration, so it will have no effect; it may be a typo. Otherwise you can use `mark_tag_used` in your myocamlbuild.ml to disable this warning."],
                   Loc["print_loc"],
                   param[2],
                   tag)}
        else
         {return 0}};
    var
     check_conf=
      function(param)
       {var values=param[2];
        var $js$1=My_std["List"][14];
        $js$1(check_tag,values[1]);
        var $js$2=My_std["List"][14];
        return $js$2(check_tag,values[2])};
    var $js$1=My_std["List"][14];
    var $js$2=My_std["List"][14];
    var $js$3=$js$2(check_conf);
    var $js$4=configs$1(0);
    return $js$1($js$3,$js$4)};
module["exports"]=
{"parse_string":parse_string,
 "parse_file":parse_file,
 "tags_of_filename":tags_of_filename,
 "has_tag":has_tag,
 "tag_file":tag_file,
 "tag_any":tag_any,
 "global_tags":global_tags,
 "check_tags_usage":check_tags_usage};
