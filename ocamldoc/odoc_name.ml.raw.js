var String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Set=require("Set");
var Path=require("Path");
var Buffer=require("Buffer");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var Ident=require("Ident");
var
 infix_chars=
  [0,
   124,
   [0,
    60,
    [0,
     62,
     [0,
      64,
      [0,
       94,
       [0,
        38,
        [0,
         43,
         [0,
          45,
          [0,42,[0,47,[0,36,[0,37,[0,61,[0,58,[0,126,[0,33,[0,35,0]]]]]]]]]]]]]]]]];
var
 strip_string=
  function(s)
   {var len=s["length"];
    var
     iter_first=
      function(n)
       {var $js=n>=len;
        if($js)
         {return 0}
        else
         {var match=s[n];
          var switcher=-9+match;
          var $js$1=!(4<switcher>>>0);
          if($js$1)
           {var $js$2=1<-2+switcher>>>0;
            if($js$2){var exit=50}else{var exit=51}}
          else
           {var $js$3=switcher!=23;if($js$3){var exit=51}else{var exit=50}}
          switch(exit){case 51:return [0,n];case 50:return iter_first(n+1)}}};
    var match=iter_first(0);
    var $js=match;
    if($js)
     {var first=match[1];
      var
       iter_last=
        function(n)
         {var $js$1=n<=first;
          if($js$1)
           {return 0}
          else
           {var match$1=s[n];
            var switcher=-9+match$1;
            var $js$2=!(4<switcher>>>0);
            if($js$2)
             {var $js$3=1<-2+switcher>>>0;
              if($js$3){var exit=48}else{var exit=49}}
            else
             {var $js$4=switcher!=23;if($js$4){var exit=49}else{var exit=48}}
            switch(exit){case 49:return [0,n];case 48:return iter_last(n-1)}}};
      var match$1=iter_last(len-1);
      var $js$1=match$1;
      if($js$1)
       {var $js$2=String["sub"];return $js$2(s,first,match$1[1]-first+1)}
      else
       {var $js$3=String["sub"];return $js$3(s,first,1)}}
    else
     {return ""}};
var
 parens_if_infix=
  function(name)
   {var s=strip_string(name);
    var $js=s;
    if($js=="")
     {return ""}
    else
     {var $js$1=(s[0]=42)||(s[s["length"]-1]=42);
      if($js$1)
       {var $js$2=Pervasives["^"];
        var $js$3=Pervasives["^"];
        var $js$4=$js$3(s," )");
        return $js$2("( ",$js$4)}
      else
       {var $js$5=List["mem"];
        var $js$6=$js$5(s[0],infix_chars);
        if($js$6)
         {var $js$7=Pervasives["^"];
          var $js$8=Pervasives["^"];
          var $js$9=$js$8(s,")");
          return $js$7("(",$js$9)}
        else
         {var $js$10=s;
          if($js$10=="asr")
           {var exit=43}
          else
           if($js$10=="land")
            {var exit=43}
           else
            if($js$10=="lor")
             {var exit=43}
            else
             if($js$10=="lsl")
              {var exit=43}
             else
              if($js$10=="lsr")
               {var exit=43}
              else
               if($js$10=="lxor")
                {var exit=43}
               else
                if($js$10=="mod")
                 {var exit=43}
                else
                 if($js$10=="or"){var exit=43}else{var exit=44}}}}
    switch(exit)
     {case 44:return s;
      case 43:
       var $js$11=Pervasives["^"];
       var $js$12=Pervasives["^"];
       var $js$13=$js$12(name,")");
       return $js$11("(",$js$13)
      }};
var
 cut=
  function(name)
   {var $js=name;
    if($js=="")
     {return [0,"",""]}
    else
     {var len=name["length"];
      var match=name[len-1];
      var $js$1=match!=41;
      if($js$1)
       {var $js$2=List["rev"];
        var $js$3=Str["split"];
        var $js$4=Str["regexp_string"];
        var $js$5=$js$4(".");
        var $js$6=$js$3($js$5,name);
        var match$1=$js$2($js$6);
        var $js$7=match$1;
        if($js$7)
         {var $js$8=String["concat"];
          var $js$9=List["rev"];
          var $js$10=$js$9(match$1[2]);
          var $js$11=$js$8(".",$js$10);
          return [0,$js$11,match$1[1]]}
        else
         {return [0,"",""]}}
      else
       {var j=0;
        var $js$12=Buffer["create"];
        var $js$13=$js$12(len);
        var $js$14=Buffer["create"];
        var $js$15=$js$14(len);
        var buf=[$js$13,$js$15];
        var $js$16=0;
        var $js$17=len-1;
        for(var i=$js$16;i<=$js$17;i++)
         {var c=name[i];
          var $js$18=c!=46;
          if($js$18)
           {var exit=36}
          else
           {var $js$19=j=0;
            if($js$19)
             {var $js$20=i<len-1;
              if($js$20)
               {var match$2=name[i+1];
                var $js$21=match$2!=40;
                if($js$21)
                 {var $js$22=Buffer["add_char"];$js$22(buf[j],46)}
                else
                 {var $js$23=1;var j=$js$23}}
              else
               {var $js$24=Buffer["add_char"];$js$24(buf[j],name[i])}}
            else
             {var exit=36}}
          switch(exit){case 36:var $js$25=Buffer["add_char"];$js$25(buf[j],c)}}
        var $js$26=Buffer["contents"];
        var $js$27=$js$26(buf[0]);
        var $js$28=Buffer["contents"];
        var $js$29=$js$28(buf[1]);
        return [0,$js$27,$js$29]}}};
var simple=function(name){var $js=cut(name);return $js[2]};
var father=function(name){var $js=cut(name);return $js[1]};
var
 concat=
  function(n1,n2)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=$js$1(".",n2);
    return $js(n1,$js$2)};
var
 normalize_name=
  function(name)
   {var match=cut(name);
    var s=match[2];
    var p=match[1];
    var len=s["length"];
    var $js=len>=2&&(s[0]=40)&&(s[len-1]=41);
    if($js)
     {var $js$1=String["sub"];
      var $js$2=$js$1(s,1,len-2);
      var $js$3=strip_string($js$2);
      var s$1=parens_if_infix($js$3)}
    else
     {var s$1=s}
    var $js$4=p;
    if($js$4==""){return s$1}else{return concat(p,s$1)}};
var
 head_and_tail=
  function(n)
   {try
     {var $js=String["index"];
      var pos=$js(n,46);
      var $js$1=pos>0;
      if($js$1)
       {var $js$2=String["sub"];
        var h=$js$2(n,0,pos);
        try
         {var $js$3=String["index"];var $js$4=$js$3(h,40);0;return [0,n,""]}
        catch(exn)
         {var $js$5=exn=Not_found;
          if($js$5)
           {var len=n["length"];
            var $js$6=pos>=len-1;
            if($js$6)
             {return [0,h,""]}
            else
             {var $js$7=String["sub"];
              var $js$8=$js$7(n,pos+1,len-pos-1);
              return [0,h,$js$8]}}
          else
           {return "unknown primitive:reraise"}}}
      else
       {return [0,n,""]}}
    catch(exn$1)
     {var $js$9=exn$1=Not_found;
      if($js$9){return [0,n,""]}else{return "unknown primitive:reraise"}}};
var head=function(n){var $js=head_and_tail(n);return $js[1]};
var tail=function(n){var $js=head_and_tail(n);return $js[2]};
var
 depth=
  function(name)
   {try
     {var $js=List["length"];
      var $js$1=Str["split"];
      var $js$2=Str["regexp"];
      var $js$3=$js$2("\.");
      var $js$4=$js$1($js$3,name);
      return $js($js$4)}
    catch(exn){return 1}};
var
 prefix=
  function(n1,n2)
   {try
     {var len1=n1["length"];
      var $js=String["sub"];
      var $js$1=$js(n2,0,len1);
      var $js$2="unknown primitive:caml_string_equal";
      var $js$3=$js$2&&(n2[len1]=46)}
    catch(exn){var $js$3=0}
    return "unknown primitive:caml_string_notequal"&&$js$3};
var
 get_relative_raw=
  function(n1,n2)
   {var match=head_and_tail(n1);
    var s1=match[2];
    var f1=match[1];
    var match$1=head_and_tail(n2);
    var f2=match$1[1];
    var $js="unknown primitive:caml_string_equal";
    if($js)
     {var s2=match$1[2];
      var
       $js$1=
        "unknown primitive:caml_string_equal"||
        "unknown primitive:caml_string_equal";
      if($js$1)
       {return s2}
      else
       {var
         $js$2=
          "unknown primitive:caml_string_equal"||
          "unknown primitive:caml_string_equal";
        if($js$2){return s2}else{return get_relative_raw(s1,s2)}}}
    else
     {return n2}};
var
 get_relative=
  function(n1,n2)
   {var $js=prefix(n1,n2);
    if($js)
     {var len1=n1["length"];
      try
       {var $js$1=String["sub"];return $js$1(n2,len1+1,n2["length"]-len1-1)}
      catch(exn){return n2}}
    else
     {return n2}};
var
 hide_given_modules=
  function(l,s)
   {var
     iter=
      function(param)
       {var $js=param;
        if($js)
         {var s2=get_relative(param[1],s);
          var $js$1="unknown primitive:caml_string_equal";
          if($js$1){return iter(param[2])}else{return s2}}
        else
         {return s}};
    return iter(l)};
var qualified=function(name){var $js=String["contains"];return $js(name,46)};
var from_ident=function(ident){var $js=Ident["name"];return $js(ident)};
var from_path=function(path){var $js=Path["name"];return $js(0,path)};
var
 to_path=
  function(n)
   {var $js=List["fold_left"];
    var $js$1=Str["split"];
    var $js$2=Str["regexp"];
    var $js$3=$js$2("\.");
    var $js$4=$js$1($js$3,n);
    var
     match=
      $js
       (function(acc_opt,s)
         {var $js$5=acc_opt;
          if($js$5)
           {return [0,[1,acc_opt[1],s,0]]}
          else
           {var $js$6=Ident["create"];
            var $js$7=$js$6(s);
            var $js$8=[0,$js$7];
            return [0,$js$8]}},
        0,
        $js$4);
    var $js$5=match;
    if($js$5){return match[1]}else{return "unknown primitive:raise"}};
var from_longident=Odoc_misc["string_of_longident"];
var $js=Set["Make"];
var compare=String["compare"];
var $js$1=[0,compare];
var Set=$js($js$1);
module["exports"]=
{"parens_if_infix":parens_if_infix,
 "simple":simple,
 "father":father,
 "concat":concat,
 "normalize_name":normalize_name,
 "head":head,
 "depth":depth,
 "prefix":prefix,
 "get_relative":get_relative,
 "get_relative_raw":get_relative_raw,
 "hide_given_modules":hide_given_modules,
 "qualified":qualified,
 "from_ident":from_ident,
 "from_path":from_path,
 "to_path":to_path,
 "from_longident":from_longident,
 "Set":Set};
