var List=require("List");
var Empty="unknown primitive:caml_set_oo_id";
var create=function(param){return [0,0]};
var clear=function(s){return s[1]=0,0};
var copy=function(s){return [0,s[1]]};
var push=function(x,s){return s[1]=[0,x,s[1]],0};
var
 pop=
  function(s)
   {var match=s[1];
    var $js=match;
    if($js)
     {var tl=match[2];var hd=match[1];s[1]=tl,0;return hd}
    else
     {var $js$1=Empty;throw $js$1}};
var
 top=
  function(s)
   {var match=s[1];
    var $js=match;
    if($js){var hd=match[1];return hd}else{var $js$1=Empty;throw $js$1}};
var is_empty=function(s){return s[1]=0};
var length=function(s){var $js=List["length"];return $js(s[1])};
var iter=function(f,s){var $js=List["iter"];return $js(f,s[1])};
module["exports"]=
{"Empty":Empty,
 "create":create,
 "push":push,
 "pop":pop,
 "top":top,
 "clear":clear,
 "copy":copy,
 "is_empty":is_empty,
 "length":length,
 "iter":iter};
