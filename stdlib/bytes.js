var Char=require("Char");
var Pervasives=require("Pervasives");
var List=require("List");
var
 make=
  function(n,c)
   {var s="unknown primitive:caml_create_string";
    "unknown primitive:caml_fill_string";
    return s};
var
 init=
  function(n,f)
   {var s="unknown primitive:caml_create_string";
    var $js=0;
    var $js$1=n-1;
    for(var i=$js;i<=$js$1;i++){var $js$2=f(i);s[i]=$js$2,0}
    return s};
var empty="unknown primitive:caml_create_string";
var
 copy=
  function(s)
   {var len=s["length"];
    var r="unknown primitive:caml_create_string";
    "unknown primitive:caml_blit_string";
    return r};
var to_string=function(b){var $js=copy(b);return $js};
var of_string=function(s){return copy(s)};
var
 sub=
  function(s,ofs,len)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.sub / Bytes.sub")}
    else
     {var r="unknown primitive:caml_create_string";
      "unknown primitive:caml_blit_string";
      return r}};
var sub_string=function(b,ofs,len){var $js=sub(b,ofs,len);return $js};
var
 extend=
  function(s,left,right)
   {var len=s["length"]+left+right;
    var r="unknown primitive:caml_create_string";
    var $js=left<0;
    if($js){var match=[0,-left,0]}else{var match=[0,0,left]}
    var dstoff=match[2];
    var srcoff=match[1];
    var $js$1=Pervasives["min"];
    var cpylen=$js$1(s["length"]-srcoff,len-dstoff);
    var $js$2=cpylen>0;
    if($js$2){"unknown primitive:caml_blit_string"}else{}
    return r};
var
 fill=
  function(s,ofs,len,c)
   {var $js=ofs<0||len<0||ofs>s["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.fill / Bytes.fill")}
    else
     {return "unknown primitive:caml_fill_string"}};
var
 blit=
  function(s1,ofs1,s2,ofs2,len)
   {var
     $js=
      len<0||ofs1<0||ofs1>s1["length"]-len||ofs2<0||ofs2>s2["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Bytes.blit")}
    else
     {return "unknown primitive:caml_blit_string"}};
var
 blit_string=
  function(s1,ofs1,s2,ofs2,len)
   {var
     $js=
      len<0||ofs1<0||ofs1>s1["length"]-len||ofs2<0||ofs2>s2["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.blit / Bytes.blit_string")}
    else
     {return "unknown primitive:caml_blit_string"}};
var
 iter=
  function(f,a)
   {var $js=0;var $js$1=a["length"]-1;for(var i=$js;i<=$js$1;i++){f(a[i])}};
var
 iteri=
  function(f,a)
   {var $js=0;var $js$1=a["length"]-1;for(var i=$js;i<=$js$1;i++){f(i,a[i])}};
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
      return r}
    else
     {return empty}};
var
 cat=
  function(s1,s2)
   {var l1=s1["length"];
    var l2=s2["length"];
    var r="unknown primitive:caml_create_string";
    "unknown primitive:caml_blit_string";
    "unknown primitive:caml_blit_string";
    return r};
var
 is_space=
  function(param)
   {var switcher=-9+param;
    var $js=4<switcher>>>0;
    if($js)
     {var $js$1=switcher!=23;if($js$1){var exit=38}else{var exit=37}}
    else
     {var $js$2=switcher!=2;if($js$2){var exit=37}else{var exit=38}}
    switch(exit){case 38:return 0;case 37:return 1}};
var
 trim=
  function(s)
   {var len=s["length"];
    var i=[0,0];
    for(;;)
     {var $js=is_space(s[i[1]]);
      var $js$1=i[1]<len&&$js;
      if($js$1){i[0]++}else break}
    var j=[0,len-1];
    for(;;)
     {var $js$2=is_space(s[j[1]]);
      var $js$3=j[1]>=i[1]&&$js$2;
      if($js$3){j[0]--}else break}
    var $js$4=j[1]>=i[1];
    if($js$4){return sub(s,i[1],j[1]-i[1]+1)}else{return empty}};
var
 escaped=
  function(s)
   {var n=[0,0];
    var $js=0;
    var $js$1=s["length"]-1;
    for(var i=$js;i<=$js$1;i++)
     {var c=s[i];
      var $js$2=c>=14;
      if($js$2)
       {var $js$3=c!=34;
        if($js$3)
         {var $js$4=c!=92;if($js$4){var exit=30}else{var exit=29}}
        else
         {var exit=29}}
      else
       {var $js$5=c>=11;
        if($js$5)
         {var $js$6=c>=13;if($js$6){var exit=29}else{var exit=30}}
        else
         {var $js$7=c>=8;if($js$7){var exit=29}else{var exit=30}}}
      switch(exit)
       {case 30:
         var $js$8="unknown primitive:caml_is_printable";
         if($js$8){var $js$9=1}else{var $js$9=4}
        case 29:var $js$9=2
        }
      var $js$10=n[1]+$js$9;
      n[1]=$js$10,0}
    var $js$11=n[1]=s["length"];
    if($js$11)
     {return copy(s)}
    else
     {var s$prime="unknown primitive:caml_create_string";
      n[1]=0,0;
      var $js$12=0;
      var $js$13=s["length"]-1;
      for(var i$1=$js$12;i$1<=$js$13;i$1++)
       {var c$1=s[i$1];
        var switcher=-34+c$1;
        var $js$14=!(58<switcher>>>0);
        if($js$14)
         {var switcher$1=-1+switcher;
          var $js$15=56<switcher$1>>>0;
          if($js$15)
           {s$prime[n[1]]=92,0;n[0]++;s$prime[n[1]]=c$1,0}
          else
           {var exit$1=27}}
        else
         {var $js$16=switcher>=-20;
          if($js$16)
           {var exit$1=27}
          else
           {var switcher$2=34+switcher;
            var $js$17=switcher$2;
            var $js$18=$js$17[0];
            if($js$18==0)
             {var exit$1=27}
            else
             if($js$18==1)
              {var exit$1=27}
             else
              if($js$18==2)
               {var exit$1=27}
              else
               if($js$18==3)
                {var exit$1=27}
               else
                if($js$18==4)
                 {var exit$1=27}
                else
                 if($js$18==5)
                  {var exit$1=27}
                 else
                  if($js$18==6)
                   {var exit$1=27}
                  else
                   if($js$18==7)
                    {var exit$1=27}
                   else
                    if($js$18==8)
                     {s$prime[n[1]]=92,0;n[0]++;s$prime[n[1]]=98,0}
                    else
                     if($js$18==9)
                      {s$prime[n[1]]=92,0;n[0]++;s$prime[n[1]]=116,0}
                     else
                      if($js$18==10)
                       {s$prime[n[1]]=92,0;n[0]++;s$prime[n[1]]=110,0}
                      else
                       if($js$18==11)
                        {var exit$1=27}
                       else
                        if($js$18==12)
                         {var exit$1=27}
                        else
                         if($js$18==13)
                          {s$prime[n[1]]=92,0;n[0]++;s$prime[n[1]]=114,0}}}
        switch(exit$1)
         {case 27:
           var c$2=c$1;
           var $js$19="unknown primitive:caml_is_printable";
           if($js$19)
            {s$prime[n[1]]=c$2,0}
           else
            {var a=c$2;
             s$prime[n[1]]=92,0;
             n[0]++;
             s$prime[n[1]]=48+a/100,0;
             n[0]++;
             s$prime[n[1]]=48+a/10%10,0;
             n[0]++;
             s$prime[n[1]]=48+a%10,0}
          }
        n[0]++}
      return s$prime}};
var
 map=
  function(f,s)
   {var l=s["length"];
    var $js=l=0;
    if($js)
     {return s}
    else
     {var r="unknown primitive:caml_create_string";
      var $js$1=0;
      var $js$2=l-1;
      for(var i=$js$1;i<=$js$2;i++){var $js$3=f(s[i]);r[i]=$js$3,0}
      return r}};
var
 mapi=
  function(f,s)
   {var l=s["length"];
    var $js=l=0;
    if($js)
     {return s}
    else
     {var r="unknown primitive:caml_create_string";
      var $js$1=0;
      var $js$2=l-1;
      for(var i=$js$1;i<=$js$2;i++){var $js$3=f(i,s[i]);r[i]=$js$3,0}
      return r}};
var uppercase=function(s){return map(Char["uppercase"],s)};
var lowercase=function(s){return map(Char["lowercase"],s)};
var
 apply1=
  function(f,s)
   {var $js=s["length"]=0;
    if($js)
     {return s}
    else
     {var r=copy(s);var $js$1=f(s[0]);r[0]=$js$1,0;return r}};
var capitalize=function(s){return apply1(Char["uppercase"],s)};
var uncapitalize=function(s){return apply1(Char["lowercase"],s)};
var
 index_rec=
  function(s,lim,i,c)
   {var $js=i>=lim;
    if($js)
     {var $js$1=Not_found;throw $js$1}
    else
     {var $js$2=s[i]=c;if($js$2){return i}else{return index_rec(s,lim,i+1,c)}}};
var index=function(s,c){return index_rec(s,s["length"],0,c)};
var
 index_from=
  function(s,i,c)
   {var l=s["length"];
    var $js=i<0||i>l;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.index_from / Bytes.index_from")}
    else
     {return index_rec(s,l,i,c)}};
var
 rindex_rec=
  function(s,i,c)
   {var $js=i<0;
    if($js)
     {var $js$1=Not_found;throw $js$1}
    else
     {var $js$2=s[i]=c;if($js$2){return i}else{return rindex_rec(s,i-1,c)}}};
var rindex=function(s,c){return rindex_rec(s,s["length"]-1,c)};
var
 rindex_from=
  function(s,i,c)
   {var $js=i<-1||i>=s["length"];
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.rindex_from / Bytes.rindex_from")}
    else
     {return rindex_rec(s,i,c)}};
var
 contains_from=
  function(s,i,c)
   {var l=s["length"];
    var $js=i<0||i>l;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.contains_from / Bytes.contains_from")}
    else
     {try
       {var $js$2=index_rec(s,l,i,c);0;return 1}
      catch(exn)
       {var $js$3=exn=Not_found;
        if($js$3){return 0}else{return "unknown primitive:reraise"}}}};
var contains=function(s,c){return contains_from(s,0,c)};
var
 rcontains_from=
  function(s,i,c)
   {var $js=i<0||i>=s["length"];
    if($js)
     {var $js$1=Pervasives["invalid_arg"];
      return $js$1("String.rcontains_from / Bytes.rcontains_from")}
    else
     {try
       {var $js$2=rindex_rec(s,i,c);0;return 1}
      catch(exn)
       {var $js$3=exn=Not_found;
        if($js$3){return 0}else{return "unknown primitive:reraise"}}}};
var compare=function(x,y){return "unknown primitive:caml_compare"};
module["exports"]=
{"make":make,
 "init":init,
 "empty":empty,
 "copy":copy,
 "of_string":of_string,
 "to_string":to_string,
 "sub":sub,
 "sub_string":sub_string,
 "extend":extend,
 "fill":fill,
 "blit":blit,
 "blit_string":blit_string,
 "concat":concat,
 "cat":cat,
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
 "compare":compare,
 "unknown block:(function prim/1181 (id prim/1181))":
 unknown block:(function prim/1181 (id prim/1181)),
 "unknown block:(function prim/1182 (id prim/1182))":
 unknown block:(function prim/1182 (id prim/1182))};
