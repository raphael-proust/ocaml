var List=require("List");
var Bytes=require("Bytes");
var bts=Bytes["unsafe_to_string"];
var bos=Bytes["unsafe_of_string"];
var
 make=
  function(n,c){var $js=Bytes["make"];var $js$1=$js(n,c);return bts($js$1)};
var
 init=
  function(n,f){var $js=Bytes["init"];var $js$1=$js(n,f);return bts($js$1)};
var
 copy=
  function(s)
   {var $js=Bytes["copy"];
    var $js$1=bos(s);
    var $js$2=$js($js$1);
    return bts($js$2)};
var
 sub=
  function(s,ofs,len)
   {var $js=Bytes["sub"];
    var $js$1=bos(s);
    var $js$2=$js($js$1,ofs,len);
    return bts($js$2)};
var fill=Bytes["fill"];
var blit=Bytes["blit_string"];
var
 concat=
  function(sep,l)
   {var $js=l;
    if($js)
     {var tl=l[2];
      var hd=l[1];
      var num=[0,0];
      var len=[0,0];
      var $js$1=List["iter"];
      $js$1(function(s){num[0]++;return len[1]=len[1]+s["length"],0},l);
      var r="unknown primitive:caml_create_string";
      "unknown primitive:caml_blit_string";
      var pos=[0,hd["length"]];
      var $js$2=List["iter"];
      $js$2
       (function(s)
         {"unknown primitive:caml_blit_string";
          pos[1]=pos[1]+sep["length"],0;
          "unknown primitive:caml_blit_string";
          return pos[1]=pos[1]+s["length"],0},
        tl);
      var $js$3=Bytes["unsafe_to_string"];
      return $js$3(r)}
    else
     {return ""}};
var
 iter=
  function(f,s){var $js=Bytes["iter"];var $js$1=bos(s);return $js(f,$js$1)};
var
 iteri=
  function(f,s){var $js=Bytes["iteri"];var $js$1=bos(s);return $js(f,$js$1)};
var
 map=
  function(f,s)
   {var $js=Bytes["map"];
    var $js$1=bos(s);
    var $js$2=$js(f,$js$1);
    return bts($js$2)};
var
 mapi=
  function(f,s)
   {var $js=Bytes["mapi"];
    var $js$1=bos(s);
    var $js$2=$js(f,$js$1);
    return bts($js$2)};
var
 is_space=
  function(param)
   {var switcher=-9+param;
    var $js=4<switcher>>>0;
    if($js)
     {var $js$1=switcher!=23;if($js$1){var exit=19}else{var exit=18}}
    else
     {var $js$2=switcher!=2;if($js$2){var exit=18}else{var exit=19}}
    switch(exit){case 19:return 0;case 18:return 1}};
var
 trim=
  function(s)
   {var $js="unknown primitive:caml_string_equal";
    if($js)
     {return s}
    else
     {var $js$1=is_space(s[0]);
      var $js$2=is_space(s[s["length"]-1]);
      var $js$3=$js$1||$js$2;
      if($js$3)
       {var $js$4=Bytes["trim"];
        var $js$5=bos(s);
        var $js$6=$js$4($js$5);
        return bts($js$6)}
      else
       {return s}}};
var
 escaped=
  function(s)
   {var
     needs_escape=
      function(i)
       {var $js=i>=s["length"];
        if($js)
         {return 0}
        else
         {var c=s[i];
          var $js$1=c>=14;
          if($js$1)
           {var $js$2=c!=34;
            if($js$2)
             {var $js$3=c!=92;if($js$3){var exit=15}else{var exit=13}}
            else
             {var exit=13}}
          else
           {var $js$4=c>=11;
            if($js$4)
             {var $js$5=c>=13;if($js$5){var exit=13}else{var exit=15}}
            else
             {var $js$6=c>=8;if($js$6){var exit=13}else{var exit=15}}}
          switch(exit)
           {case 15:
             var $js$7="unknown primitive:caml_is_printable";
             if($js$7){return needs_escape(i+1)}else{return 1}
            case 13:return 1
            }}};
    var $js=needs_escape(0);
    if($js)
     {var $js$1=Bytes["escaped"];
      var $js$2=bos(s);
      var $js$3=$js$1($js$2);
      return bts($js$3)}
    else
     {return s}};
var
 index=
  function(s,c){var $js=Bytes["index"];var $js$1=bos(s);return $js($js$1,c)};
var
 rindex=
  function(s,c){var $js=Bytes["rindex"];var $js$1=bos(s);return $js($js$1,c)};
var
 index_from=
  function(s,i,c)
   {var $js=Bytes["index_from"];var $js$1=bos(s);return $js($js$1,i,c)};
var
 rindex_from=
  function(s,i,c)
   {var $js=Bytes["rindex_from"];var $js$1=bos(s);return $js($js$1,i,c)};
var
 contains=
  function(s,c)
   {var $js=Bytes["contains"];var $js$1=bos(s);return $js($js$1,c)};
var
 contains_from=
  function(s,i,c)
   {var $js=Bytes["contains_from"];var $js$1=bos(s);return $js($js$1,i,c)};
var
 rcontains_from=
  function(s,i,c)
   {var $js=Bytes["rcontains_from"];var $js$1=bos(s);return $js($js$1,i,c)};
var
 uppercase=
  function(s)
   {var $js=Bytes["uppercase"];
    var $js$1=bos(s);
    var $js$2=$js($js$1);
    return bts($js$2)};
var
 lowercase=
  function(s)
   {var $js=Bytes["lowercase"];
    var $js$1=bos(s);
    var $js$2=$js($js$1);
    return bts($js$2)};
var
 capitalize=
  function(s)
   {var $js=Bytes["capitalize"];
    var $js$1=bos(s);
    var $js$2=$js($js$1);
    return bts($js$2)};
var
 uncapitalize=
  function(s)
   {var $js=Bytes["uncapitalize"];
    var $js$1=bos(s);
    var $js$2=$js($js$1);
    return bts($js$2)};
var compare=function(x,y){return "unknown primitive:caml_string_compare"};
module["exports"]=
{"make":make,
 "init":init,
 "copy":copy,
 "sub":sub,
 "fill":fill,
 "blit":blit,
 "concat":concat,
 "iter":iter,
 "iteri":iteri,
 "map":map,
 "mapi":mapi,
 "trim":trim,
 "escaped":escaped,
 "index":index,
 "rindex":rindex,
 "index_from":index_from,
 "rindex_from":rindex_from,
 "contains":contains,
 "contains_from":contains_from,
 "rcontains_from":rcontains_from,
 "uppercase":uppercase,
 "lowercase":lowercase,
 "capitalize":capitalize,
 "uncapitalize":uncapitalize,
 "compare":compare};
