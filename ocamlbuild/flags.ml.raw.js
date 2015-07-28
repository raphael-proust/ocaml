var List=require("List");
var Command=require("Command");
var Param_tags=require("Param_tags");
var Tags=require("Tags");
var Log=require("Log");
var flags_of_decl=function(param){return param[2]};
var tags_of_decl=function(param){return param[1]};
var all_decls=[0,0];
var
 of_tags=
  function(matched_tags)
   {var $js=List["fold_left"];
    var
     $js$1=
      $js
       (function(acc,param)
         {var $js$2=Tags["does_match"];
          var $js$3=$js$2(matched_tags,param[1]);
          if($js$3){return [0,param[2],acc]}else{return acc}},
        0,
        all_decls[1]);
    return [0,$js$1]};
var match=(Command["tag_handler"][1]=of_tags,0);
var
 of_tag_list=
  function(x){var $js=Tags["of_list"];var $js$1=$js(x);return of_tags($js$1)};
var add_decl=function(decl){return all_decls[1]=[0,decl,all_decls[1]],0};
var
 flag=
  function(*opt*,tags,flags)
   {var $js=*opt*;
    if($js){var deprecated=*opt*[1]}else{var deprecated=0}
    var $js$1=Tags["of_list"];
    var tags$1=$js$1(tags);
    return add_decl([0,tags$1,flags,deprecated])};
var
 pflag=
  function(tags,ptag,flags)
   {var $js=Param_tags["declare"];
    return $js
            (ptag,
             function(param)
              {var $js$1=Param_tags["make"];
               var $js$2=$js$1(ptag,param);
               var $js$3=[0,$js$2,tags];
               var $js$4=flags(param);
               return flag(0,$js$3,$js$4)})};
var add=function(x,xs){return [0,x,xs]};
var
 remove=
  function(me)
   {var $js=List["filter"];
    return $js(function(x){return "unknown primitive:caml_notequal"})};
var
 pretty_print=
  function(param)
   {var $js=Command["string_of_command_spec"];
    var sflag=$js(param[2]);
    var $js$1=param[3];
    if($js$1){var header="deprecated flag"}else{var header="flag"}
    var pp=function(fmt){var $js$2=Log["raw_dprintf"];return $js$2(-1,fmt)};
    return pp
            ([0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [2,
                0,
                [17,
                 [0,"@ ",1,0],
                 [11,
                  "{. ",
                  [15,
                   [11," .}",[17,[0,"@ ",1,0],[3,0,[17,0,[17,3,[17,3,0]]]]]]]]]]],
              "@[<2>%s@ {. %a .}@ %S@]@\n@\n"],
             header,
             Tags["print"],
             param[1],
             sflag)};
var
 show_documentation=
  function(param)
   {var $js=List["iter"];
    $js
     (function(decl)
       {var $js$1=!decl[3];if($js$1){return pretty_print(decl)}else{return 0}},
      all_decls[1]);
    var $js$1=List["iter"];
    $js$1
     (function(decl)
       {var $js$2=decl[3];if($js$2){return pretty_print(decl)}else{return 0}},
      all_decls[1]);
    var pp=function(fmt){var $js$2=Log["raw_dprintf"];return $js$2(-1,fmt)};
    return pp([0,[17,4,0],"@."])};
var used_tags=[0,Tags["empty"]];
var
 mark_tag_used=
  function(tag)
   {var $js=Tags["add"];
    var $js$1=$js(tag,used_tags[1]);
    return used_tags[1]=$js$1,0};
var
 get_used_tags=
  function(param)
   {var $js=List["fold_left"];
    return $js
            (function(acc,decl)
              {var $js$1=Tags["union"];return $js$1(acc,decl[1])},
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
