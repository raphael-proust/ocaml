var Pervasives=require("Pervasives");
var
 init=
  function(l,f)
   {var $js=l=0;
    if($js)
     {return []}
    else
     {var $js$1=l<0;
      if($js$1)
       {var $js$2=Pervasives["invalid_arg"];return $js$2("Array.init")}
      else
       {var $js$3=f(0);
        var res="unknown primitive:caml_make_vect";
        var $js$4=1;
        var $js$5=-1+l;
        for(var i=$js$4;i<=$js$5;i++){var $js$6=f(i);res[i]=$js$6,0}
        return res}}};
var
 make_matrix=
  function(sx,sy,init$1)
   {var res="unknown primitive:caml_make_vect";
    var $js=0;
    var $js$1=-1+sx;
    for(var x=$js;x<=$js$1;x++)
     {var $js$2="unknown primitive:caml_make_vect";res[x]=$js$2,0}
    return res};
var create_matrix=make_matrix;
var
 copy=
  function(a)
   {var l=a["length"];
    var $js=l=0;
    if($js){return []}else{return "unknown primitive:caml_array_sub"}};
var
 append=
  function(a1,a2)
   {var l1=a1["length"];
    var $js=l1=0;
    if($js)
     {return copy(a2)}
    else
     {var $js$1=a2["length"]=0;
      if($js$1)
       {return "unknown primitive:caml_array_sub"}
      else
       {return "unknown primitive:caml_array_append"}}};
var
 sub=
  function(a,ofs,len)
   {var $js=len<0||ofs>a["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Array.sub")}
    else
     {return "unknown primitive:caml_array_sub"}};
var
 fill=
  function(a,ofs,len,v)
   {var $js=ofs<0||len<0||ofs>a["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Array.fill")}
    else
     {var $js$2=ofs;
      var $js$3=ofs+len-1;
      for(var i=$js$2;i<=$js$3;i++){a[i]=v,0}}};
var
 blit=
  function(a1,ofs1,a2,ofs2,len)
   {var
     $js=
      len<0||ofs1<0||ofs1>a1["length"]-len||ofs2<0||ofs2>a2["length"]-len;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("Array.blit")}
    else
     {return "unknown primitive:caml_array_blit"}};
var
 iter=
  function(f,a)
   {var $js=0;var $js$1=a["length"]-1;for(var i=$js;i<=$js$1;i++){f(a[i])}};
var
 map=
  function(f,a)
   {var l=a["length"];
    var $js=l=0;
    if($js)
     {return []}
    else
     {var $js$1=f(a[0]);
      var r="unknown primitive:caml_make_vect";
      var $js$2=1;
      var $js$3=l-1;
      for(var i=$js$2;i<=$js$3;i++){var $js$4=f(a[i]);r[i]=$js$4,0}
      return r}};
var
 iteri=
  function(f,a)
   {var $js=0;var $js$1=a["length"]-1;for(var i=$js;i<=$js$1;i++){f(i,a[i])}};
var
 mapi=
  function(f,a)
   {var l=a["length"];
    var $js=l=0;
    if($js)
     {return []}
    else
     {var $js$1=f(0,a[0]);
      var r="unknown primitive:caml_make_vect";
      var $js$2=1;
      var $js$3=l-1;
      for(var i=$js$2;i<=$js$3;i++){var $js$4=f(i,a[i]);r[i]=$js$4,0}
      return r}};
var
 to_list=
  function(a)
   {var
     tolist=
      function(i,res)
       {var $js=i<0;if($js){return res}else{return tolist(i-1,[0,a[i],res])}};
    return tolist(a["length"]-1,0)};
var
 list_length=
  function(accu,param)
   {var $js=param;
    if($js){var t=param[2];return list_length(1+accu,t)}else{return accu}};
var
 of_list=
  function(l)
   {var $js=l;
    if($js)
     {var tl=l[2];
      var hd=l[1];
      var $js$1=list_length(0,l);
      var a="unknown primitive:caml_make_vect";
      var
       fill$1=
        function(i,param)
         {var $js$2=param;
          if($js$2)
           {var tl$1=param[2];
            var hd$1=param[1];
            a[i]=hd$1,0;
            return fill$1(i+1,tl$1)}
          else
           {return a}};
      return fill$1(1,tl)}
    else
     {return []}};
var
 fold_left=
  function(f,x,a)
   {var r=[0,x];
    var $js=0;
    var $js$1=a["length"]-1;
    for(var i=$js;i<=$js$1;i++){var $js$2=f(r[1],a[i]);r[1]=$js$2,0}
    return r[1]};
var
 fold_right=
  function(f,a,x)
   {var r=[0,x];
    var $js=a["length"]-1;
    var $js$1=0;
    for(var i=$js;i>=$js$1;i--){var $js$2=f(a[i],r[1]);r[1]=$js$2,0}
    return r[1]};
var Bottom="unknown primitive:caml_set_oo_id";
var
 sort=
  function(cmp,a)
   {var
     maxson=
      function(l,i)
       {var i31=i+i+i+1;
        var x=[0,i31];
        var $js=i31+2<l;
        if($js)
         {var $js$1=a[i31];
          var $js$2=a[i31+1];
          var $js$3=cmp($js$1,$js$2);
          var $js$4=$js$3<0;
          if($js$4){x[1]=i31+1,0}else{}
          var $js$5=a[x[1]];
          var $js$6=a[i31+2];
          var $js$7=cmp($js$5,$js$6);
          var $js$8=$js$7<0;
          if($js$8){x[1]=i31+2,0}else{}
          return x[1]}
        else
         {var $js$9=a[i31];
          var $js$10=a[i31+1];
          var $js$11=cmp($js$9,$js$10);
          var $js$12=$js$11<0;
          var $js$13=i31+1<l&&$js$12;
          if($js$13)
           {return i31+1}
          else
           {var $js$14=i31<l;
            if($js$14){return i31}else{var $js$15=[0,Bottom,i];throw $js$15}}}};
    var
     trickledown=
      function(l,i,e)
       {var j=maxson(l,i);
        var $js=a[j];
        var $js$1=cmp($js,e);
        var $js$2=$js$1>0;
        if($js$2)
         {var $js$3=a[j];a[i]=$js$3,0;return trickledown(l,j,e)}
        else
         {return a[i]=e,0}};
    var
     trickle=
      function(l,i,e)
       {try
         {return trickledown(l,i,e)}
        catch(exn)
         {var tag=exn[1];
          var $js=tag=Bottom;
          if($js)
           {var i$1=exn[2];return a[i$1]=e,0}
          else
           {return "unknown primitive:reraise"}}};
    var
     bubbledown=
      function(l,i)
       {var j=maxson(l,i);var $js=a[j];a[i]=$js,0;return bubbledown(l,j)};
    var
     bubble=
      function(l,i)
       {try
         {return bubbledown(l,i)}
        catch(exn)
         {var tag=exn[1];
          var $js=tag=Bottom;
          if($js)
           {var i$1=exn[2];return i$1}
          else
           {return "unknown primitive:reraise"}}};
    var
     trickleup=
      function(i,e)
       {var father=(i-1)/3;
        var $js=i!=father;
        if($js)
         {}
        else
         {var $js$1=[0,Assert_failure,[0,"array.ml",168,4]];throw $js$1}
        var $js$2=a[father];
        var $js$3=cmp($js$2,e);
        var $js$4=$js$3<0;
        if($js$4)
         {var $js$5=a[father];
          a[i]=$js$5,0;
          var $js$6=father>0;
          if($js$6){return trickleup(father,e)}else{return a[0]=e,0}}
        else
         {return a[i]=e,0}};
    var l=a["length"];
    var $js=(l+1)/3-1;
    var $js$1=0;
    for(var i=$js;i>=$js$1;i--){var $js$2=a[i];trickle(l,i,$js$2)}
    var $js$3=l-1;
    var $js$4=2;
    for(var i$1=$js$3;i$1>=$js$4;i$1--)
     {var e=a[i$1];
      var $js$5=a[0];
      a[i$1]=$js$5,0;
      var $js$6=bubble(i$1,0);
      trickleup($js$6,e)}
    var $js$7=l>1;
    if($js$7)
     {var e$1=a[1];var $js$8=a[0];a[1]=$js$8,0;return a[0]=e$1,0}
    else
     {return 0}};
var cutoff=5;
var
 stable_sort=
  function(cmp,a)
   {var
     merge=
      function(src1ofs,src1len,src2,src2ofs,src2len,dst,dstofs)
       {var src1r=src1ofs+src1len;
        var src2r=src2ofs+src2len;
        var
         loop=
          function(i1,s1,i2,s2,d)
           {var $js=cmp(s1,s2);
            var $js$1=$js<=0;
            if($js$1)
             {dst[d]=s1,0;
              var i1$1=i1+1;
              var $js$2=i1$1<src1r;
              if($js$2)
               {var $js$3=a[i1$1];return loop(i1$1,$js$3,i2,s2,d+1)}
              else
               {return blit(src2,i2,dst,d+1,src2r-i2)}}
            else
             {dst[d]=s2,0;
              var i2$1=i2+1;
              var $js$4=i2$1<src2r;
              if($js$4)
               {var $js$5=src2[i2$1];return loop(i1,s1,i2$1,$js$5,d+1)}
              else
               {return blit(a,i1,dst,d+1,src1r-i1)}}};
        var $js=a[src1ofs];
        var $js$1=src2[src2ofs];
        return loop(src1ofs,$js,src2ofs,$js$1,dstofs)};
    var
     isortto=
      function(srcofs,dst,dstofs,len)
       {var $js=0;
        var $js$1=len-1;
        for(var i=$js;i<=$js$1;i++)
         {var e=a[srcofs+i];
          var j=[0,dstofs+i-1];
          for(;;)
           {var $js$2=dst[j[1]];
            var $js$3=cmp($js$2,e);
            var $js$4=$js$3>0;
            var $js$5=j[1]>=dstofs&&$js$4;
            if($js$5)
             {var $js$6=dst[j[1]];dst[j[1]+1]=$js$6,0;j[0]--}
            else
             break}
          dst[j[1]+1]=e,0}};
    var
     sortto=
      function(srcofs,dst,dstofs,len)
       {var $js=len<=cutoff;
        if($js)
         {return isortto(srcofs,dst,dstofs,len)}
        else
         {var l1=len/2;
          var l2=len-l1;
          sortto(srcofs+l1,dst,dstofs+l1,l2);
          sortto(srcofs,a,srcofs+l2,l1);
          return merge(srcofs+l2,l1,dst,dstofs+l1,l2,dst,dstofs)}};
    var l=a["length"];
    var $js=l<=cutoff;
    if($js)
     {return isortto(0,a,0,l)}
    else
     {var l1=l/2;
      var l2=l-l1;
      var $js$1=a[0];
      var t="unknown primitive:caml_make_vect";
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}};
var fast_sort=stable_sort;
module["exports"]=
{"init":init,
 "make_matrix":make_matrix,
 "create_matrix":create_matrix,
 "append":append,
 "unknown block:(function prim/1183 (caml_array_concat prim/1183))":
 unknown block:(function prim/1183 (caml_array_concat prim/1183)),
 "sub":sub,
 "copy":copy,
 "fill":fill,
 "blit":blit,
 "to_list":to_list,
 "of_list":of_list,
 "iter":iter,
 "map":map,
 "iteri":iteri,
 "mapi":mapi,
 "fold_left":fold_left,
 "fold_right":fold_right,
 "sort":sort,
 "stable_sort":stable_sort,
 "fast_sort":fast_sort};
