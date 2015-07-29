var Pervasives=require("Pervasives");
var
 length_aux=
  function(len,param)
   {var $js=param;
    if($js){var l=param[2];return length_aux(len+1,l)}else{return len}};
var length=function(l){return length_aux(0,l)};
var
 hd=
  function(param)
   {var $js=param;
    if($js)
     {var a=param[1];return a}
    else
     {var $js$1=Pervasives["failwith"];return $js$1("hd")}};
var
 tl=
  function(param)
   {var $js=param;
    if($js)
     {var l=param[2];return l}
    else
     {var $js$1=Pervasives["failwith"];return $js$1("tl")}};
var
 nth=
  function(l,n)
   {var $js=n<0;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("List.nth")}
    else
     {var
       nth_aux=
        function(l$1,n$1)
         {var $js$2=l$1;
          if($js$2)
           {var l$2=l$1[2];
            var a=l$1[1];
            var $js$3=n$1=0;
            if($js$3){return a}else{return nth_aux(l$2,n$1-1)}}
          else
           {var $js$4=Pervasives["failwith"];return $js$4("nth")}};
      return nth_aux(l,n)}};
var append=Pervasives["@"];
var
 rev_append=
  function(l1,l2)
   {var $js=l1;
    if($js)
     {var l=l1[2];var a=l1[1];return rev_append(l,[0,a,l2])}
    else
     {return l2}};
var rev=function(l){return rev_append(l,0)};
var
 flatten=
  function(param)
   {var $js=param;
    if($js)
     {var r=param[2];
      var l=param[1];
      var $js$1=Pervasives["@"];
      var $js$2=flatten(r);
      return $js$1(l,$js$2)}
    else
     {return 0}};
var concat=flatten;
var
 map=
  function(f,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var a=param[1];
      var r=f(a);
      var $js$1=map(f,l);
      return [0,r,$js$1]}
    else
     {return 0}};
var
 mapi=
  function(i,f,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var a=param[1];
      var r=f(i,a);
      var $js$1=mapi(i+1,f,l);
      return [0,r,$js$1]}
    else
     {return 0}};
var mapi$1=function(f,l){return mapi(0,f,l)};
var
 rev_map=
  function(f,l)
   {var
     rmap_f=
      function(accu,param)
       {var $js=param;
        if($js)
         {var l$1=param[2];
          var a=param[1];
          var $js$1=f(a);
          var $js$2=[0,$js$1,accu];
          return rmap_f($js$2,l$1)}
        else
         {return accu}};
    return rmap_f(0,l)};
var
 iter=
  function(f,param)
   {var $js=param;
    if($js){var l=param[2];var a=param[1];f(a);return iter(f,l)}else{return 0}};
var
 iteri=
  function(i,f,param)
   {var $js=param;
    if($js)
     {var l=param[2];var a=param[1];f(i,a);return iteri(i+1,f,l)}
    else
     {return 0}};
var iteri$1=function(f,l){return iteri(0,f,l)};
var
 fold_left=
  function(f,accu,l)
   {var $js=l;
    if($js)
     {var l$1=l[2];
      var a=l[1];
      var $js$1=f(accu,a);
      return fold_left(f,$js$1,l$1)}
    else
     {return accu}};
var
 fold_right=
  function(f,l,accu)
   {var $js=l;
    if($js)
     {var l$1=l[2];
      var a=l[1];
      var $js$1=fold_right(f,l$1,accu);
      return f(a,$js$1)}
    else
     {return accu}};
var
 map2=
  function(f,l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        var r=f(a1,a2);
        var $js$2=map2(f,l1$1,l2$1);
        return [0,r,$js$2]}
      else
       {var exit=66}}
    else
     {var $js$3=match$1;if($js$3){var exit=66}else{return 0}}
    switch(exit)
     {case 66:var $js$4=Pervasives["invalid_arg"];return $js$4("List.map2")}};
var
 rev_map2=
  function(f,l1,l2)
   {var
     rmap2_f=
      function(accu,l1$1,l2$1)
       {var match=l1$1;
        var match$1=l2$1;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var l2$2=match$1[2];
            var a2=match$1[1];
            var l1$2=match[2];
            var a1=match[1];
            var $js$2=f(a1,a2);
            var $js$3=[0,$js$2,accu];
            return rmap2_f($js$3,l1$2,l2$2)}
          else
           {var exit=63}}
        else
         {var $js$4=match$1;if($js$4){var exit=63}else{return accu}}
        switch(exit)
         {case 63:
           var $js$5=Pervasives["invalid_arg"];return $js$5("List.rev_map2")
          }};
    return rmap2_f(0,l1,l2)};
var
 iter2=
  function(f,l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        f(a1,a2);
        return iter2(f,l1$1,l2$1)}
      else
       {var exit=62}}
    else
     {var $js$2=match$1;if($js$2){var exit=62}else{return 0}}
    switch(exit)
     {case 62:var $js$3=Pervasives["invalid_arg"];return $js$3("List.iter2")}};
var
 fold_left2=
  function(f,accu,l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        var $js$2=f(accu,a1,a2);
        return fold_left2(f,$js$2,l1$1,l2$1)}
      else
       {var exit=61}}
    else
     {var $js$3=match$1;if($js$3){var exit=61}else{return accu}}
    switch(exit)
     {case 61:
       var $js$4=Pervasives["invalid_arg"];return $js$4("List.fold_left2")
      }};
var
 fold_right2=
  function(f,l1,l2,accu)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        var $js$2=fold_right2(f,l1$1,l2$1,accu);
        return f(a1,a2,$js$2)}
      else
       {var exit=60}}
    else
     {var $js$3=match$1;if($js$3){var exit=60}else{return accu}}
    switch(exit)
     {case 60:
       var $js$4=Pervasives["invalid_arg"];return $js$4("List.fold_right2")
      }};
var
 for_all=
  function(p,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var a=param[1];
      var $js$1=p(a);
      var $js$2=for_all(p,l);
      return $js$1&&$js$2}
    else
     {return 1}};
var
 exists=
  function(p,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var a=param[1];
      var $js$1=p(a);
      var $js$2=exists(p,l);
      return $js$1||$js$2}
    else
     {return 0}};
var
 for_all2=
  function(p,l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        var $js$2=p(a1,a2);
        var $js$3=for_all2(p,l1$1,l2$1);
        return $js$2&&$js$3}
      else
       {var exit=59}}
    else
     {var $js$4=match$1;if($js$4){var exit=59}else{return 1}}
    switch(exit)
     {case 59:
       var $js$5=Pervasives["invalid_arg"];return $js$5("List.for_all2")
      }};
var
 exists2=
  function(p,l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        var $js$2=p(a1,a2);
        var $js$3=exists2(p,l1$1,l2$1);
        return $js$2||$js$3}
      else
       {var exit=58}}
    else
     {var $js$4=match$1;if($js$4){var exit=58}else{return 0}}
    switch(exit)
     {case 58:var $js$5=Pervasives["invalid_arg"];return $js$5("List.exists2")
      }};
var
 mem=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var a=param[1];
      var $js$1="unknown primitive:caml_compare";
      var $js$2=$js$1=0;
      var $js$3=mem(x,l);
      return $js$2||$js$3}
    else
     {return 0}};
var
 memq=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];var a=param[1];var $js$1=memq(x,l);return (a=x)||$js$1}
    else
     {return 0}};
var
 assoc=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var match=param[1];
      var b=match[2];
      var a=match[1];
      var $js$1="unknown primitive:caml_compare";
      var $js$2=$js$1=0;
      if($js$2){return b}else{return assoc(x,l)}}
    else
     {var $js$3=Not_found;throw $js$3}};
var
 assq=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var match=param[1];
      var b=match[2];
      var a=match[1];
      var $js$1=a=x;
      if($js$1){return b}else{return assq(x,l)}}
    else
     {var $js$2=Not_found;throw $js$2}};
var
 mem_assoc=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var match=param[1];
      var a=match[1];
      var $js$1="unknown primitive:caml_compare";
      var $js$2=$js$1=0;
      var $js$3=mem_assoc(x,l);
      return $js$2||$js$3}
    else
     {return 0}};
var
 mem_assq=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var match=param[1];
      var a=match[1];
      var $js$1=mem_assq(x,l);
      return (a=x)||$js$1}
    else
     {return 0}};
var
 remove_assoc=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var pair=param[1];
      var a=pair[1];
      var $js$1="unknown primitive:caml_compare";
      var $js$2=$js$1=0;
      if($js$2)
       {return l}
      else
       {var $js$3=remove_assoc(x,l);return [0,pair,$js$3]}}
    else
     {return 0}};
var
 remove_assq=
  function(x,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var pair=param[1];
      var a=pair[1];
      var $js$1=a=x;
      if($js$1)
       {return l}
      else
       {var $js$2=remove_assq(x,l);return [0,pair,$js$2]}}
    else
     {return 0}};
var
 find=
  function(p,param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var x=param[1];
      var $js$1=p(x);
      if($js$1){return x}else{return find(p,l)}}
    else
     {var $js$2=Not_found;throw $js$2}};
var
 find_all=
  function(p)
   {var
     find$1=
      function(accu,param)
       {var $js=param;
        if($js)
         {var l=param[2];
          var x=param[1];
          var $js$1=p(x);
          if($js$1){return find$1([0,x,accu],l)}else{return find$1(accu,l)}}
        else
         {return rev(accu)}};
    return find$1(0)};
var filter=find_all;
var
 partition=
  function(p,l)
   {var
     part=
      function(yes,no,param)
       {var $js=param;
        if($js)
         {var l$1=param[2];
          var x=param[1];
          var $js$1=p(x);
          if($js$1)
           {return part([0,x,yes],no,l$1)}
          else
           {return part(yes,[0,x,no],l$1)}}
        else
         {var $js$2=rev(yes);var $js$3=rev(no);return [0,$js$2,$js$3]}};
    return part(0,0,l)};
var
 split=
  function(param)
   {var $js=param;
    if($js)
     {var l=param[2];
      var match=param[1];
      var y=match[2];
      var x=match[1];
      var match$1=split(l);
      var ry=match$1[2];
      var rx=match$1[1];
      return [0,[0,x,rx],[0,y,ry]]}
    else
     {return [0,0,0]}};
var
 combine=
  function(l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var l2$1=match$1[2];
        var a2=match$1[1];
        var l1$1=match[2];
        var a1=match[1];
        var $js$2=combine(l1$1,l2$1);
        return [0,[0,a1,a2],$js$2]}
      else
       {var exit=53}}
    else
     {var $js$3=match$1;if($js$3){var exit=53}else{return 0}}
    switch(exit)
     {case 53:var $js$4=Pervasives["invalid_arg"];return $js$4("List.combine")
      }};
var
 merge=
  function(cmp,l1,l2)
   {var match=l1;
    var match$1=l2;
    var $js=match;
    if($js)
     {var $js$1=match$1;
      if($js$1)
       {var t2=match$1[2];
        var h2=match$1[1];
        var t1=match[2];
        var h1=match[1];
        var $js$2=cmp(h1,h2);
        var $js$3=$js$2<=0;
        if($js$3)
         {var $js$4=merge(cmp,t1,l2);return [0,h1,$js$4]}
        else
         {var $js$5=merge(cmp,l1,t2);return [0,h2,$js$5]}}
      else
       {var l1$1=match;return l1$1}}
    else
     {var l2$1=match$1;return l2$1}};
var
 chop=
  function(k,l)
   {var $js=k=0;
    if($js)
     {return l}
    else
     {var $js$1=l;
      if($js$1)
       {var t=l[2];return chop(k-1,t)}
      else
       {var $js$2=[0,Assert_failure,[0,"list.ml",223,11]];throw $js$2}}};
var
 stable_sort=
  function(cmp,l)
   {var
     rev_merge=
      function(l1,l2,accu)
       {var match=l1;
        var match$1=l2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1[2];
            var h2=match$1[1];
            var t1=match[2];
            var h1=match[1];
            var $js$2=cmp(h1,h2);
            var $js$3=$js$2<=0;
            if($js$3)
             {return rev_merge(t1,l2,[0,h1,accu])}
            else
             {return rev_merge(l1,t2,[0,h2,accu])}}
          else
           {var l1$1=match;return rev_append(l1$1,accu)}}
        else
         {var l2$1=match$1;return rev_append(l2$1,accu)}};
    var
     rev_merge_rev=
      function(l1,l2,accu)
       {var match=l1;
        var match$1=l2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1[2];
            var h2=match$1[1];
            var t1=match[2];
            var h1=match[1];
            var $js$2=cmp(h1,h2);
            var $js$3=$js$2>0;
            if($js$3)
             {return rev_merge_rev(t1,l2,[0,h1,accu])}
            else
             {return rev_merge_rev(l1,t2,[0,h2,accu])}}
          else
           {var l1$1=match;return rev_append(l1$1,accu)}}
        else
         {var l2$1=match$1;return rev_append(l2$1,accu)}};
    var
     sort=
      function(n,l$1)
       {var match=n;
        var match$1=l$1;
        var $js=match!=2;
        if($js)
         {var $js$1=match!=3;
          if($js$1)
           {var exit=41}
          else
           {var $js$2=match$1;
            if($js$2)
             {var match$2=match$1[2];
              var $js$3=match$2;
              if($js$3)
               {var match$3=match$2[2];
                var $js$4=match$3;
                if($js$4)
                 {var x3=match$3[1];
                  var x2=match$2[1];
                  var x1=match$1[1];
                  var $js$5=cmp(x1,x2);
                  var $js$6=$js$5<=0;
                  if($js$6)
                   {var $js$7=cmp(x2,x3);
                    var $js$8=$js$7<=0;
                    if($js$8)
                     {return [0,x1,[0,x2,[0,x3,0]]]}
                    else
                     {var $js$9=cmp(x1,x3);
                      var $js$10=$js$9<=0;
                      if($js$10)
                       {return [0,x1,[0,x3,[0,x2,0]]]}
                      else
                       {return [0,x3,[0,x1,[0,x2,0]]]}}}
                  else
                   {var $js$11=cmp(x1,x3);
                    var $js$12=$js$11<=0;
                    if($js$12)
                     {return [0,x2,[0,x1,[0,x3,0]]]}
                    else
                     {var $js$13=cmp(x2,x3);
                      var $js$14=$js$13<=0;
                      if($js$14)
                       {return [0,x2,[0,x3,[0,x1,0]]]}
                      else
                       {return [0,x3,[0,x2,[0,x1,0]]]}}}}
                else
                 {var exit=41}}
              else
               {var exit=41}}
            else
             {var exit=41}}}
        else
         {var $js$15=match$1;
          if($js$15)
           {var match$4=match$1[2];
            var $js$16=match$4;
            if($js$16)
             {var x2$1=match$4[1];
              var x1$1=match$1[1];
              var $js$17=cmp(x1$1,x2$1);
              var $js$18=$js$17<=0;
              if($js$18)
               {return [0,x1$1,[0,x2$1,0]]}
              else
               {return [0,x2$1,[0,x1$1,0]]}}
            else
             {var exit=41}}
          else
           {var exit=41}}
        switch(exit)
         {case 41:
           var l$2=match$1;
           var n$1=match;
           var n1=n$1>>1;
           var n2=n$1-n1;
           var l2=chop(n1,l$2);
           var s1=rev_sort(n1,l$2);
           var s2=rev_sort(n2,l2);
           return rev_merge_rev(s1,s2,0)
          }};
    var
     rev_sort=
      function(n,l$1)
       {var match=n;
        var match$1=l$1;
        var $js=match!=2;
        if($js)
         {var $js$1=match!=3;
          if($js$1)
           {var exit=47}
          else
           {var $js$2=match$1;
            if($js$2)
             {var match$2=match$1[2];
              var $js$3=match$2;
              if($js$3)
               {var match$3=match$2[2];
                var $js$4=match$3;
                if($js$4)
                 {var x3=match$3[1];
                  var x2=match$2[1];
                  var x1=match$1[1];
                  var $js$5=cmp(x1,x2);
                  var $js$6=$js$5>0;
                  if($js$6)
                   {var $js$7=cmp(x2,x3);
                    var $js$8=$js$7>0;
                    if($js$8)
                     {return [0,x1,[0,x2,[0,x3,0]]]}
                    else
                     {var $js$9=cmp(x1,x3);
                      var $js$10=$js$9>0;
                      if($js$10)
                       {return [0,x1,[0,x3,[0,x2,0]]]}
                      else
                       {return [0,x3,[0,x1,[0,x2,0]]]}}}
                  else
                   {var $js$11=cmp(x1,x3);
                    var $js$12=$js$11>0;
                    if($js$12)
                     {return [0,x2,[0,x1,[0,x3,0]]]}
                    else
                     {var $js$13=cmp(x2,x3);
                      var $js$14=$js$13>0;
                      if($js$14)
                       {return [0,x2,[0,x3,[0,x1,0]]]}
                      else
                       {return [0,x3,[0,x2,[0,x1,0]]]}}}}
                else
                 {var exit=47}}
              else
               {var exit=47}}
            else
             {var exit=47}}}
        else
         {var $js$15=match$1;
          if($js$15)
           {var match$4=match$1[2];
            var $js$16=match$4;
            if($js$16)
             {var x2$1=match$4[1];
              var x1$1=match$1[1];
              var $js$17=cmp(x1$1,x2$1);
              var $js$18=$js$17>0;
              if($js$18)
               {return [0,x1$1,[0,x2$1,0]]}
              else
               {return [0,x2$1,[0,x1$1,0]]}}
            else
             {var exit=47}}
          else
           {var exit=47}}
        switch(exit)
         {case 47:
           var l$2=match$1;
           var n$1=match;
           var n1=n$1>>1;
           var n2=n$1-n1;
           var l2=chop(n1,l$2);
           var s1=sort(n1,l$2);
           var s2=sort(n2,l2);
           return rev_merge(s1,s2,0)
          }};
    var len=length(l);
    var $js=len<2;
    if($js){return l}else{return sort(len,l)}};
var sort=stable_sort;
var fast_sort=stable_sort;
var
 sort_uniq=
  function(cmp,l)
   {var
     rev_merge=
      function(l1,l2,accu)
       {var match=l1;
        var match$1=l2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1[2];
            var h2=match$1[1];
            var t1=match[2];
            var h1=match[1];
            var c=cmp(h1,h2);
            var $js$2=c=0;
            if($js$2)
             {return rev_merge(t1,t2,[0,h1,accu])}
            else
             {var $js$3=c<0;
              if($js$3)
               {return rev_merge(t1,l2,[0,h1,accu])}
              else
               {return rev_merge(l1,t2,[0,h2,accu])}}}
          else
           {var l1$1=match;return rev_append(l1$1,accu)}}
        else
         {var l2$1=match$1;return rev_append(l2$1,accu)}};
    var
     rev_merge_rev=
      function(l1,l2,accu)
       {var match=l1;
        var match$1=l2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1[2];
            var h2=match$1[1];
            var t1=match[2];
            var h1=match[1];
            var c=cmp(h1,h2);
            var $js$2=c=0;
            if($js$2)
             {return rev_merge_rev(t1,t2,[0,h1,accu])}
            else
             {var $js$3=c>0;
              if($js$3)
               {return rev_merge_rev(t1,l2,[0,h1,accu])}
              else
               {return rev_merge_rev(l1,t2,[0,h2,accu])}}}
          else
           {var l1$1=match;return rev_append(l1$1,accu)}}
        else
         {var l2$1=match$1;return rev_append(l2$1,accu)}};
    var
     sort$1=
      function(n,l$1)
       {var match=n;
        var match$1=l$1;
        var $js=match!=2;
        if($js)
         {var $js$1=match!=3;
          if($js$1)
           {var exit=14}
          else
           {var $js$2=match$1;
            if($js$2)
             {var match$2=match$1[2];
              var $js$3=match$2;
              if($js$3)
               {var match$3=match$2[2];
                var $js$4=match$3;
                if($js$4)
                 {var x3=match$3[1];
                  var x2=match$2[1];
                  var x1=match$1[1];
                  var c=cmp(x1,x2);
                  var $js$5=c=0;
                  if($js$5)
                   {var c$1=cmp(x2,x3);
                    var $js$6=c$1=0;
                    if($js$6)
                     {return [0,x2,0]}
                    else
                     {var $js$7=c$1<0;
                      if($js$7)
                       {return [0,x2,[0,x3,0]]}
                      else
                       {return [0,x3,[0,x2,0]]}}}
                  else
                   {var $js$8=c<0;
                    if($js$8)
                     {var c$2=cmp(x2,x3);
                      var $js$9=c$2=0;
                      if($js$9)
                       {return [0,x1,[0,x2,0]]}
                      else
                       {var $js$10=c$2<0;
                        if($js$10)
                         {return [0,x1,[0,x2,[0,x3,0]]]}
                        else
                         {var c$3=cmp(x1,x3);
                          var $js$11=c$3=0;
                          if($js$11)
                           {return [0,x1,[0,x2,0]]}
                          else
                           {var $js$12=c$3<0;
                            if($js$12)
                             {return [0,x1,[0,x3,[0,x2,0]]]}
                            else
                             {return [0,x3,[0,x1,[0,x2,0]]]}}}}}
                    else
                     {var c$4=cmp(x1,x3);
                      var $js$13=c$4=0;
                      if($js$13)
                       {return [0,x2,[0,x1,0]]}
                      else
                       {var $js$14=c$4<0;
                        if($js$14)
                         {return [0,x2,[0,x1,[0,x3,0]]]}
                        else
                         {var c$5=cmp(x2,x3);
                          var $js$15=c$5=0;
                          if($js$15)
                           {return [0,x2,[0,x1,0]]}
                          else
                           {var $js$16=c$5<0;
                            if($js$16)
                             {return [0,x2,[0,x3,[0,x1,0]]]}
                            else
                             {return [0,x3,[0,x2,[0,x1,0]]]}}}}}}}
                else
                 {var exit=14}}
              else
               {var exit=14}}
            else
             {var exit=14}}}
        else
         {var $js$17=match$1;
          if($js$17)
           {var match$4=match$1[2];
            var $js$18=match$4;
            if($js$18)
             {var x2$1=match$4[1];
              var x1$1=match$1[1];
              var c$6=cmp(x1$1,x2$1);
              var $js$19=c$6=0;
              if($js$19)
               {return [0,x1$1,0]}
              else
               {var $js$20=c$6<0;
                if($js$20)
                 {return [0,x1$1,[0,x2$1,0]]}
                else
                 {return [0,x2$1,[0,x1$1,0]]}}}
            else
             {var exit=14}}
          else
           {var exit=14}}
        switch(exit)
         {case 14:
           var l$2=match$1;
           var n$1=match;
           var n1=n$1>>1;
           var n2=n$1-n1;
           var l2=chop(n1,l$2);
           var s1=rev_sort(n1,l$2);
           var s2=rev_sort(n2,l2);
           return rev_merge_rev(s1,s2,0)
          }};
    var
     rev_sort=
      function(n,l$1)
       {var match=n;
        var match$1=l$1;
        var $js=match!=2;
        if($js)
         {var $js$1=match!=3;
          if($js$1)
           {var exit=27}
          else
           {var $js$2=match$1;
            if($js$2)
             {var match$2=match$1[2];
              var $js$3=match$2;
              if($js$3)
               {var match$3=match$2[2];
                var $js$4=match$3;
                if($js$4)
                 {var x3=match$3[1];
                  var x2=match$2[1];
                  var x1=match$1[1];
                  var c=cmp(x1,x2);
                  var $js$5=c=0;
                  if($js$5)
                   {var c$1=cmp(x2,x3);
                    var $js$6=c$1=0;
                    if($js$6)
                     {return [0,x2,0]}
                    else
                     {var $js$7=c$1>0;
                      if($js$7)
                       {return [0,x2,[0,x3,0]]}
                      else
                       {return [0,x3,[0,x2,0]]}}}
                  else
                   {var $js$8=c>0;
                    if($js$8)
                     {var c$2=cmp(x2,x3);
                      var $js$9=c$2=0;
                      if($js$9)
                       {return [0,x1,[0,x2,0]]}
                      else
                       {var $js$10=c$2>0;
                        if($js$10)
                         {return [0,x1,[0,x2,[0,x3,0]]]}
                        else
                         {var c$3=cmp(x1,x3);
                          var $js$11=c$3=0;
                          if($js$11)
                           {return [0,x1,[0,x2,0]]}
                          else
                           {var $js$12=c$3>0;
                            if($js$12)
                             {return [0,x1,[0,x3,[0,x2,0]]]}
                            else
                             {return [0,x3,[0,x1,[0,x2,0]]]}}}}}
                    else
                     {var c$4=cmp(x1,x3);
                      var $js$13=c$4=0;
                      if($js$13)
                       {return [0,x2,[0,x1,0]]}
                      else
                       {var $js$14=c$4>0;
                        if($js$14)
                         {return [0,x2,[0,x1,[0,x3,0]]]}
                        else
                         {var c$5=cmp(x2,x3);
                          var $js$15=c$5=0;
                          if($js$15)
                           {return [0,x2,[0,x1,0]]}
                          else
                           {var $js$16=c$5>0;
                            if($js$16)
                             {return [0,x2,[0,x3,[0,x1,0]]]}
                            else
                             {return [0,x3,[0,x2,[0,x1,0]]]}}}}}}}
                else
                 {var exit=27}}
              else
               {var exit=27}}
            else
             {var exit=27}}}
        else
         {var $js$17=match$1;
          if($js$17)
           {var match$4=match$1[2];
            var $js$18=match$4;
            if($js$18)
             {var x2$1=match$4[1];
              var x1$1=match$1[1];
              var c$6=cmp(x1$1,x2$1);
              var $js$19=c$6=0;
              if($js$19)
               {return [0,x1$1,0]}
              else
               {var $js$20=c$6>0;
                if($js$20)
                 {return [0,x1$1,[0,x2$1,0]]}
                else
                 {return [0,x2$1,[0,x1$1,0]]}}}
            else
             {var exit=27}}
          else
           {var exit=27}}
        switch(exit)
         {case 27:
           var l$2=match$1;
           var n$1=match;
           var n1=n$1>>1;
           var n2=n$1-n1;
           var l2=chop(n1,l$2);
           var s1=sort$1(n1,l$2);
           var s2=sort$1(n2,l2);
           return rev_merge(s1,s2,0)
          }};
    var len=length(l);
    var $js=len<2;
    if($js){return l}else{return sort$1(len,l)}};
module["exports"]=
{"length":length,
 "hd":hd,
 "tl":tl,
 "nth":nth,
 "rev":rev,
 "append":append,
 "rev_append":rev_append,
 "concat":concat,
 "flatten":flatten,
 "iter":iter,
 "iteri":iteri$1,
 "map":map,
 "mapi":mapi$1,
 "rev_map":rev_map,
 "fold_left":fold_left,
 "fold_right":fold_right,
 "iter2":iter2,
 "map2":map2,
 "rev_map2":rev_map2,
 "fold_left2":fold_left2,
 "fold_right2":fold_right2,
 "for_all":for_all,
 "exists":exists,
 "for_all2":for_all2,
 "exists2":exists2,
 "mem":mem,
 "memq":memq,
 "find":find,
 "filter":filter,
 "find_all":find_all,
 "partition":partition,
 "assoc":assoc,
 "assq":assq,
 "mem_assoc":mem_assoc,
 "mem_assq":mem_assq,
 "remove_assoc":remove_assoc,
 "remove_assq":remove_assq,
 "split":split,
 "combine":combine,
 "sort":sort,
 "stable_sort":stable_sort,
 "fast_sort":fast_sort,
 "sort_uniq":sort_uniq,
 "merge":merge};
