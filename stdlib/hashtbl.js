var $$String=require("String");
var Pervasives=require("Pervasives");
var Random=require("Random");
var CamlinternalLazy=require("CamlinternalLazy");
var $$Array=require("Array");
var Sys=require("Sys");
var hash=function(x){return "unknown primitive:caml_hash"};
var hash_param=function(n1,n2,x){return "unknown primitive:caml_hash"};
var seeded_hash=function(seed,x){return "unknown primitive:caml_hash"};
try
 {var params="unknown primitive:caml_sys_getenv"}
catch(exn)
 {var $js=exn=Not_found;
  if($js)
   {try
     {var params="unknown primitive:caml_sys_getenv"}
    catch(exn$1)
     {var $js$1=exn$1=Not_found;
      if($js$1){var params=""}else{var params="unknown primitive:reraise"}}}
  else
   {var params="unknown primitive:reraise"}}
var $js$2=$$String["contains"];
var randomized_default=$js$2(params,82);
var randomized=[0,randomized_default];
var randomize=function(param){return randomized[1]=1,0};
var prng=[246,function(param){var $js$3=Random["State"][2];return $js$3(0)}];
var
 power_2_above=
  function(x,n)
   {var $js$3=x>=n;
    if($js$3)
     {return x}
    else
     {var $js$4=x*2>Sys["max_array_length"];
      if($js$4){return x}else{return power_2_above(x*2,n)}}};
var
 create=
  function($staropt$star,initial_size)
   {var $js$3=$staropt$star;
    if($js$3)
     {var $starsth$star=$staropt$star[1];var random=$starsth$star}
    else
     {var random=randomized[1]}
    var s=power_2_above(16,initial_size);
    var $js$4=random;
    if($js$4)
     {var $js$5=Random["State"][4];
      var lzarg=prng;
      var tag="unknown primitive:caml_obj_tag";
      var $js$6=tag=250;
      if($js$6)
       {var $js$7=lzarg[1]}
      else
       {var $js$8=tag=246;
        if($js$8)
         {var $js$9=CamlinternalLazy["force_lazy_block"];
          var $js$7=$js$9(lzarg)}
        else
         {var $js$7=lzarg}}
      var seed=$js$5($js$7)}
    else
     {var seed=0}
    var $js$10="unknown primitive:caml_make_vect";
    return [0,0,$js$10,seed,s]};
var
 clear=
  function(h)
   {h[1]=0,0;
    var len=h[2]["length"];
    var $js$3=0;
    var $js$4=len-1;
    for(var i=$js$3;i<=$js$4;i++){h[2][i]=0,0}};
var
 reset=
  function(h)
   {var len=h[2]["length"];
    var $js$3=h["length"]<4||(len=h[4]);
    if($js$3)
     {return clear(h)}
    else
     {h[1]=0,0;
      var $js$4="unknown primitive:caml_make_vect";
      return h[2]=$js$4,0}};
var
 copy=
  function(h)
   {var init=h;
    var $js$3=$$Array["copy"];
    var $js$4=$js$3(h[2]);
    return [0,init[1],$js$4,init[3],init[4]]};
var length=function(h){return h[1]};
var
 resize=
  function(indexfun,h)
   {var odata=h[2];
    var osize=odata["length"];
    var nsize=osize*2;
    var $js$3=nsize<Sys["max_array_length"];
    if($js$3)
     {var ndata="unknown primitive:caml_make_vect";
      h[2]=ndata,0;
      var
       insert_bucket=
        function(param)
         {var $js$4=param;
          if($js$4)
           {var rest=param[3];
            var data=param[2];
            var key=param[1];
            insert_bucket(rest);
            var nidx=indexfun(h,key);
            var $js$5=ndata[nidx];
            var $js$6=[0,key,data,$js$5];
            return ndata[nidx]=$js$6,0}
          else
           {return 0}};
      var $js$4=0;
      var $js$5=osize-1;
      for(var i=$js$4;i<=$js$5;i++){var $js$6=odata[i];insert_bucket($js$6)}}
    else
     {return 0}};
var
 key_index=
  function(h,key)
   {var $js$3=h["length"]>=3;
    if($js$3)
     {var $js$4="unknown primitive:caml_hash";return $js$4&h[2]["length"]-1}
    else
     {var $js$5="unknown primitive:caml_hash_univ_param";
      return $js$5%h[2]["length"]}};
var
 add=
  function(h,key,info)
   {var i=key_index(h,key);
    var $js$3=h[2][i];
    var bucket=[0,key,info,$js$3];
    h[2][i]=bucket,0;
    h[1]=h[1]+1,0;
    var $js$4=h[1]>h[2]["length"]<<1;
    if($js$4){return resize(key_index,h)}else{return 0}};
var
 remove=
  function(h,key)
   {var
     remove_bucket=
      function(param)
       {var $js$3=param;
        if($js$3)
         {var next=param[3];
          var i=param[2];
          var k=param[1];
          var $js$4="unknown primitive:caml_compare";
          var $js$5=$js$4=0;
          if($js$5)
           {h[1]=h[1]-1,0;return next}
          else
           {var $js$6=remove_bucket(next);return [0,k,i,$js$6]}}
        else
         {return 0}};
    var i=key_index(h,key);
    var $js$3=h[2][i];
    var $js$4=remove_bucket($js$3);
    return h[2][i]=$js$4,0};
var
 find_rec=
  function(key,param)
   {var $js$3=param;
    if($js$3)
     {var rest=param[3];
      var d=param[2];
      var k=param[1];
      var $js$4="unknown primitive:caml_compare";
      var $js$5=$js$4=0;
      if($js$5){return d}else{return find_rec(key,rest)}}
    else
     {var $js$6=Not_found;throw $js$6}};
var
 find=
  function(h,key)
   {var $js$3=key_index(h,key);
    var match=h[2][$js$3];
    var $js$4=match;
    if($js$4)
     {var rest1=match[3];
      var d1=match[2];
      var k1=match[1];
      var $js$5="unknown primitive:caml_compare";
      var $js$6=$js$5=0;
      if($js$6)
       {return d1}
      else
       {var $js$7=rest1;
        if($js$7)
         {var rest2=rest1[3];
          var d2=rest1[2];
          var k2=rest1[1];
          var $js$8="unknown primitive:caml_compare";
          var $js$9=$js$8=0;
          if($js$9)
           {return d2}
          else
           {var $js$10=rest2;
            if($js$10)
             {var rest3=rest2[3];
              var d3=rest2[2];
              var k3=rest2[1];
              var $js$11="unknown primitive:caml_compare";
              var $js$12=$js$11=0;
              if($js$12){return d3}else{return find_rec(key,rest3)}}
            else
             {var $js$13=Not_found;throw $js$13}}}
        else
         {var $js$14=Not_found;throw $js$14}}}
    else
     {var $js$15=Not_found;throw $js$15}};
var
 find_all=
  function(h,key)
   {var
     find_in_bucket=
      function(param)
       {var $js$3=param;
        if($js$3)
         {var rest=param[3];
          var d=param[2];
          var k=param[1];
          var $js$4="unknown primitive:caml_compare";
          var $js$5=$js$4=0;
          if($js$5)
           {var $js$6=find_in_bucket(rest);return [0,d,$js$6]}
          else
           {return find_in_bucket(rest)}}
        else
         {return 0}};
    var $js$3=key_index(h,key);
    var $js$4=h[2][$js$3];
    return find_in_bucket($js$4)};
var
 replace=
  function(h,key,info)
   {var
     replace_bucket=
      function(param)
       {var $js$3=param;
        if($js$3)
         {var next=param[3];
          var i=param[2];
          var k=param[1];
          var $js$4="unknown primitive:caml_compare";
          var $js$5=$js$4=0;
          if($js$5)
           {return [0,key,info,next]}
          else
           {var $js$6=replace_bucket(next);return [0,k,i,$js$6]}}
        else
         {var $js$7=Not_found;throw $js$7}};
    var i=key_index(h,key);
    var l=h[2][i];
    try
     {var $js$3=replace_bucket(l);return h[2][i]=$js$3,0}
    catch(exn$2)
     {var $js$4=exn$2=Not_found;
      if($js$4)
       {h[2][i]=[0,key,info,l],0;
        h[1]=h[1]+1,0;
        var $js$5=h[1]>h[2]["length"]<<1;
        if($js$5){return resize(key_index,h)}else{return 0}}
      else
       {return "unknown primitive:reraise"}}};
var
 mem=
  function(h,key)
   {var
     mem_in_bucket=
      function(param)
       {var $js$3=param;
        if($js$3)
         {var rest=param[3];
          var k=param[1];
          var $js$4="unknown primitive:caml_compare";
          var $js$5=$js$4=0;
          var $js$6=mem_in_bucket(rest);
          return $js$5||$js$6}
        else
         {return 0}};
    var $js$3=key_index(h,key);
    var $js$4=h[2][$js$3];
    return mem_in_bucket($js$4)};
var
 iter=
  function(f,h)
   {var
     do_bucket=
      function(param)
       {var $js$3=param;
        if($js$3)
         {var rest=param[3];
          var d=param[2];
          var k=param[1];
          f(k,d);
          return do_bucket(rest)}
        else
         {return 0}};
    var d=h[2];
    var $js$3=0;
    var $js$4=d["length"]-1;
    for(var i=$js$3;i<=$js$4;i++){var $js$5=d[i];do_bucket($js$5)}};
var
 fold=
  function(f,h,init)
   {var
     do_bucket=
      function(b,accu)
       {var $js$3=b;
        if($js$3)
         {var rest=b[3];
          var d=b[2];
          var k=b[1];
          var $js$4=f(k,d,accu);
          return do_bucket(rest,$js$4)}
        else
         {return accu}};
    var d=h[2];
    var accu=[0,init];
    var $js$3=0;
    var $js$4=d["length"]-1;
    for(var i=$js$3;i<=$js$4;i++)
     {var $js$5=d[i];var $js$6=do_bucket($js$5,accu[1]);accu[1]=$js$6,0}
    return accu[1]};
var
 bucket_length=
  function(accu,param)
   {var $js$3=param;
    if($js$3)
     {var rest=param[3];return bucket_length(accu+1,rest)}
    else
     {return accu}};
var
 stats=
  function(h)
   {var $js$3=$$Array["fold_left"];
    var
     mbl=
      $js$3
       (function(m,b)
         {var $js$4=Pervasives["max"];
          var $js$5=bucket_length(0,b);
          return $js$4(m,$js$5)},
        0,
        h[2]);
    var histo="unknown primitive:caml_make_vect";
    var $js$4=$$Array["iter"];
    $js$4
     (function(b)
       {var l=bucket_length(0,b);
        var $js$5=histo[l];
        var $js$6=$js$5+1;
        return histo[l]=$js$6,0},
      h[2]);
    return [0,h[1],h[2]["length"],mbl,histo]};
var
 MakeSeeded=
  function(H)
   {var create$1=create;
    var clear$1=clear;
    var reset$1=reset;
    var copy$1=copy;
    var
     key_index$1=
      function(h,key)
       {var $js$3=H[2];
        var $js$4=$js$3(h[3],key);
        return $js$4&h[2]["length"]-1};
    var
     add$1=
      function(h,key,info)
       {var i=key_index$1(h,key);
        var $js$3=h[2][i];
        var bucket=[0,key,info,$js$3];
        h[2][i]=bucket,0;
        h[1]=h[1]+1,0;
        var $js$4=h[1]>h[2]["length"]<<1;
        if($js$4){return resize(key_index$1,h)}else{return 0}};
    var
     remove$1=
      function(h,key)
       {var
         remove_bucket=
          function(param)
           {var $js$3=param;
            if($js$3)
             {var next=param[3];
              var i=param[2];
              var k=param[1];
              var $js$4=H[1];
              var $js$5=$js$4(k,key);
              if($js$5)
               {h[1]=h[1]-1,0;return next}
              else
               {var $js$6=remove_bucket(next);return [0,k,i,$js$6]}}
            else
             {return 0}};
        var i=key_index$1(h,key);
        var $js$3=h[2][i];
        var $js$4=remove_bucket($js$3);
        return h[2][i]=$js$4,0};
    var
     find_rec$1=
      function(key,param)
       {var $js$3=param;
        if($js$3)
         {var rest=param[3];
          var d=param[2];
          var k=param[1];
          var $js$4=H[1];
          var $js$5=$js$4(key,k);
          if($js$5){return d}else{return find_rec$1(key,rest)}}
        else
         {var $js$6=Not_found;throw $js$6}};
    var
     find$1=
      function(h,key)
       {var $js$3=key_index$1(h,key);
        var match=h[2][$js$3];
        var $js$4=match;
        if($js$4)
         {var rest1=match[3];
          var d1=match[2];
          var k1=match[1];
          var $js$5=H[1];
          var $js$6=$js$5(key,k1);
          if($js$6)
           {return d1}
          else
           {var $js$7=rest1;
            if($js$7)
             {var rest2=rest1[3];
              var d2=rest1[2];
              var k2=rest1[1];
              var $js$8=H[1];
              var $js$9=$js$8(key,k2);
              if($js$9)
               {return d2}
              else
               {var $js$10=rest2;
                if($js$10)
                 {var rest3=rest2[3];
                  var d3=rest2[2];
                  var k3=rest2[1];
                  var $js$11=H[1];
                  var $js$12=$js$11(key,k3);
                  if($js$12){return d3}else{return find_rec$1(key,rest3)}}
                else
                 {var $js$13=Not_found;throw $js$13}}}
            else
             {var $js$14=Not_found;throw $js$14}}}
        else
         {var $js$15=Not_found;throw $js$15}};
    var
     find_all$1=
      function(h,key)
       {var
         find_in_bucket=
          function(param)
           {var $js$3=param;
            if($js$3)
             {var rest=param[3];
              var d=param[2];
              var k=param[1];
              var $js$4=H[1];
              var $js$5=$js$4(k,key);
              if($js$5)
               {var $js$6=find_in_bucket(rest);return [0,d,$js$6]}
              else
               {return find_in_bucket(rest)}}
            else
             {return 0}};
        var $js$3=key_index$1(h,key);
        var $js$4=h[2][$js$3];
        return find_in_bucket($js$4)};
    var
     replace$1=
      function(h,key,info)
       {var
         replace_bucket=
          function(param)
           {var $js$3=param;
            if($js$3)
             {var next=param[3];
              var i=param[2];
              var k=param[1];
              var $js$4=H[1];
              var $js$5=$js$4(k,key);
              if($js$5)
               {return [0,key,info,next]}
              else
               {var $js$6=replace_bucket(next);return [0,k,i,$js$6]}}
            else
             {var $js$7=Not_found;throw $js$7}};
        var i=key_index$1(h,key);
        var l=h[2][i];
        try
         {var $js$3=replace_bucket(l);return h[2][i]=$js$3,0}
        catch(exn$2)
         {var $js$4=exn$2=Not_found;
          if($js$4)
           {h[2][i]=[0,key,info,l],0;
            h[1]=h[1]+1,0;
            var $js$5=h[1]>h[2]["length"]<<1;
            if($js$5){return resize(key_index$1,h)}else{return 0}}
          else
           {return "unknown primitive:reraise"}}};
    var
     mem$1=
      function(h,key)
       {var
         mem_in_bucket=
          function(param)
           {var $js$3=param;
            if($js$3)
             {var rest=param[3];
              var k=param[1];
              var $js$4=H[1];
              var $js$5=$js$4(k,key);
              var $js$6=mem_in_bucket(rest);
              return $js$5||$js$6}
            else
             {return 0}};
        var $js$3=key_index$1(h,key);
        var $js$4=h[2][$js$3];
        return mem_in_bucket($js$4)};
    var iter$1=iter;
    var fold$1=fold;
    var length$1=length;
    var stats$1=stats;
    return [0,
            create$1,
            clear$1,
            reset$1,
            copy$1,
            add$1,
            remove$1,
            find$1,
            find_all$1,
            replace$1,
            mem$1,
            iter$1,
            fold$1,
            length$1,
            stats$1]};
var
 Make=
  function(H)
   {var equal=H[1];
    var hash$1=function(seed,x){var $js$3=H[2];return $js$3(x)};
    var $js$3=[0,equal,hash$1];
    var include=MakeSeeded($js$3);
    var create$1=include[1];
    var clear$1=include[2];
    var reset$1=include[3];
    var copy$1=include[4];
    var add$1=include[5];
    var remove$1=include[6];
    var find$1=include[7];
    var find_all$1=include[8];
    var replace$1=include[9];
    var mem$1=include[10];
    var iter$1=include[11];
    var fold$1=include[12];
    var length$1=include[13];
    var stats$1=include[14];
    var create$2=function(sz){return create$1([0,0],sz)};
    return [0,
            create$2,
            clear$1,
            reset$1,
            copy$1,
            add$1,
            remove$1,
            find$1,
            find_all$1,
            replace$1,
            mem$1,
            iter$1,
            fold$1,
            length$1,
            stats$1]};
module["exports"]=
{"create":create,
 "clear":clear,
 "reset":reset,
 "copy":copy,
 "add":add,
 "find":find,
 "find_all":find_all,
 "mem":mem,
 "remove":remove,
 "replace":replace,
 "iter":iter,
 "fold":fold,
 "length":length,
 "randomize":randomize,
 "stats":stats,
 "Make":Make,
 "MakeSeeded":MakeSeeded,
 "hash":hash,
 "seeded_hash":seeded_hash,
 "hash_param":hash_param,
 "unknown block:(function prim/1416 prim/1415 prim/1414 prim/1413\n  (caml_hash prim/1416 prim/1415 prim/1414 prim/1413))":
 unknown block:(function prim/1416 prim/1415 prim/1414 prim/1413
  (caml_hash prim/1416 prim/1415 prim/1414 prim/1413))};
