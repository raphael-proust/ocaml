var List=require("List");
var Pervasives=require("Pervasives");
var
 Make=
  function(Ord)
   {var
     height=
      function(param)
       {var $js=param;if($js){var h=param[4];return h}else{return 0}};
    var
     create=
      function(l,v,r)
       {var $js=l;
        if($js){var h=l[4];var hl=h}else{var hl=0}
        var $js$1=r;
        if($js$1){var h$1=r[4];var hr=h$1}else{var hr=0}
        var $js$2=hl>=hr;
        if($js$2){var $js$3=hl+1}else{var $js$3=hr+1}
        return [0,l,v,r,$js$3]};
    var
     bal=
      function(l,v,r)
       {var $js=l;
        if($js){var h=l[4];var hl=h}else{var hl=0}
        var $js$1=r;
        if($js$1){var h$1=r[4];var hr=h$1}else{var hr=0}
        var $js$2=hl>hr+2;
        if($js$2)
         {var $js$3=l;
          if($js$3)
           {var lr=l[3];
            var lv=l[2];
            var ll=l[1];
            var $js$4=height(ll);
            var $js$5=height(lr);
            var $js$6=$js$4>=$js$5;
            if($js$6)
             {var $js$7=create(lr,v,r);return create(ll,lv,$js$7)}
            else
             {var $js$8=lr;
              if($js$8)
               {var lrr=lr[3];
                var lrv=lr[2];
                var lrl=lr[1];
                var $js$9=create(ll,lv,lrl);
                var $js$10=create(lrr,v,r);
                return create($js$9,lrv,$js$10)}
              else
               {var $js$11=Pervasives["invalid_arg"];return $js$11("Set.bal")}}}
          else
           {var $js$12=Pervasives["invalid_arg"];return $js$12("Set.bal")}}
        else
         {var $js$13=hr>hl+2;
          if($js$13)
           {var $js$14=r;
            if($js$14)
             {var rr=r[3];
              var rv=r[2];
              var rl=r[1];
              var $js$15=height(rr);
              var $js$16=height(rl);
              var $js$17=$js$15>=$js$16;
              if($js$17)
               {var $js$18=create(l,v,rl);return create($js$18,rv,rr)}
              else
               {var $js$19=rl;
                if($js$19)
                 {var rlr=rl[3];
                  var rlv=rl[2];
                  var rll=rl[1];
                  var $js$20=create(l,v,rll);
                  var $js$21=create(rlr,rv,rr);
                  return create($js$20,rlv,$js$21)}
                else
                 {var $js$22=Pervasives["invalid_arg"];
                  return $js$22("Set.bal")}}}
            else
             {var $js$23=Pervasives["invalid_arg"];return $js$23("Set.bal")}}
          else
           {var $js$24=hl>=hr;
            if($js$24){var $js$25=hl+1}else{var $js$25=hr+1}
            return [0,l,v,r,$js$25]}}};
    var
     add=
      function(x,t)
       {var $js=t;
        if($js)
         {var r=t[3];
          var v=t[2];
          var l=t[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return t}
          else
           {var $js$3=c<0;
            if($js$3)
             {var $js$4=add(x,l);return bal($js$4,v,r)}
            else
             {var $js$5=add(x,r);return bal(l,v,$js$5)}}}
        else
         {return [0,0,x,0,1]}};
    var singleton=function(x){return [0,0,x,0,1]};
    var
     add_min_element=
      function(v,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var x=param[2];
          var l=param[1];
          var $js$1=add_min_element(v,l);
          return bal($js$1,x,r)}
        else
         {return singleton(v)}};
    var
     add_max_element=
      function(v,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var x=param[2];
          var l=param[1];
          var $js$1=add_max_element(v,r);
          return bal(l,x,$js$1)}
        else
         {return singleton(v)}};
    var
     join=
      function(l,v,r)
       {var match=l;
        var match$1=r;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var rh=match$1[4];
            var rr=match$1[3];
            var rv=match$1[2];
            var rl=match$1[1];
            var lh=match[4];
            var lr=match[3];
            var lv=match[2];
            var ll=match[1];
            var $js$2=lh>rh+2;
            if($js$2)
             {var $js$3=join(lr,v,r);return bal(ll,lv,$js$3)}
            else
             {var $js$4=rh>lh+2;
              if($js$4)
               {var $js$5=join(l,v,rl);return bal($js$5,rv,rr)}
              else
               {return create(l,v,r)}}}
          else
           {return add_max_element(v,l)}}
        else
         {return add_min_element(v,r)}};
    var
     min_elt=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[1];
          var $js$1=l;
          if($js$1){return min_elt(l)}else{var v=param[2];return v}}
        else
         {var $js$2=Not_found;throw $js$2}};
    var
     max_elt=
      function(param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var $js$1=r;
          if($js$1){return max_elt(r)}else{return v}}
        else
         {var $js$2=Not_found;throw $js$2}};
    var
     remove_min_elt=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[1];
          var $js$1=l;
          if($js$1)
           {var r=param[3];
            var v=param[2];
            var $js$2=remove_min_elt(l);
            return bal($js$2,v,r)}
          else
           {var r$1=param[3];return r$1}}
        else
         {var $js$3=Pervasives["invalid_arg"];
          return $js$3("Set.remove_min_elt")}};
    var
     merge=
      function(t1,t2)
       {var match=t1;
        var match$1=t2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var $js$2=min_elt(t2);
            var $js$3=remove_min_elt(t2);
            return bal(t1,$js$2,$js$3)}
          else
           {var t=match;return t}}
        else
         {var t$1=match$1;return t$1}};
    var
     concat=
      function(t1,t2)
       {var match=t1;
        var match$1=t2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var $js$2=min_elt(t2);
            var $js$3=remove_min_elt(t2);
            return join(t1,$js$2,$js$3)}
          else
           {var t=match;return t}}
        else
         {var t$1=match$1;return t$1}};
    var
     split=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return [0,l,1,r]}
          else
           {var $js$3=c<0;
            if($js$3)
             {var match=split(x,l);
              var rl=match[3];
              var pres=match[2];
              var ll=match[1];
              var $js$4=join(rl,v,r);
              return [0,ll,pres,$js$4]}
            else
             {var match$1=split(x,r);
              var rr=match$1[3];
              var pres$1=match$1[2];
              var lr=match$1[1];
              var $js$5=join(l,v,lr);
              return [0,$js$5,pres$1,rr]}}}
        else
         {return [0,0,0,0]}};
    var empty=0;
    var
     is_empty=
      function(param){var $js=param;if($js){return 0}else{return 1}};
    var
     mem=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c<0;
          if($js$2){var $js$3=l}else{var $js$3=r}
          var $js$4=mem(x,$js$3);
          return (c=0)||$js$4}
        else
         {return 0}};
    var
     remove=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return merge(l,r)}
          else
           {var $js$3=c<0;
            if($js$3)
             {var $js$4=remove(x,l);return bal($js$4,v,r)}
            else
             {var $js$5=remove(x,r);return bal(l,v,$js$5)}}}
        else
         {return 0}};
    var
     union=
      function(s1,s2)
       {var match=s1;
        var match$1=s2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var h2=match$1[4];
            var r2=match$1[3];
            var v2=match$1[2];
            var l2=match$1[1];
            var h1=match[4];
            var r1=match[3];
            var v1=match[2];
            var l1=match[1];
            var $js$2=h1>=h2;
            if($js$2)
             {var $js$3=h2=1;
              if($js$3)
               {return add(v2,s1)}
              else
               {var match$2=split(v1,s2);
                var r2$1=match$2[3];
                var l2$1=match$2[1];
                var $js$4=union(l1,l2$1);
                var $js$5=union(r1,r2$1);
                return join($js$4,v1,$js$5)}}
            else
             {var $js$6=h1=1;
              if($js$6)
               {return add(v1,s2)}
              else
               {var match$3=split(v2,s1);
                var r1$1=match$3[3];
                var l1$1=match$3[1];
                var $js$7=union(l1$1,l2);
                var $js$8=union(r1$1,r2);
                return join($js$7,v2,$js$8)}}}
          else
           {var t1=match;return t1}}
        else
         {var t2=match$1;return t2}};
    var
     inter=
      function(s1,s2)
       {var match=s1;
        var match$1=s2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1;
            var r1=match[3];
            var v1=match[2];
            var l1=match[1];
            var match$2=split(v1,t2);
            var match$3=match$2[2];
            var l2=match$2[1];
            var $js$2=match$3!=0;
            if($js$2)
             {var l2$1=l2;
              var r2=match$2[3];
              var $js$3=inter(l1,l2$1);
              var $js$4=inter(r1,r2);
              return join($js$3,v1,$js$4)}
            else
             {var r2$1=match$2[3];
              var $js$5=inter(l1,l2);
              var $js$6=inter(r1,r2$1);
              return concat($js$5,$js$6)}}
          else
           {return 0}}
        else
         {return 0}};
    var
     diff=
      function(s1,s2)
       {var match=s1;
        var match$1=s2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1;
            var r1=match[3];
            var v1=match[2];
            var l1=match[1];
            var match$2=split(v1,t2);
            var match$3=match$2[2];
            var l2=match$2[1];
            var $js$2=match$3!=0;
            if($js$2)
             {var l2$1=l2;
              var r2=match$2[3];
              var $js$3=diff(l1,l2$1);
              var $js$4=diff(r1,r2);
              return concat($js$3,$js$4)}
            else
             {var r2$1=match$2[3];
              var $js$5=diff(l1,l2);
              var $js$6=diff(r1,r2$1);
              return join($js$5,v1,$js$6)}}
          else
           {var t1=match;return t1}}
        else
         {return 0}};
    var
     cons_enum=
      function(s,e)
       {var $js=s;
        if($js)
         {var r=s[3];var v=s[2];var l=s[1];return cons_enum(l,[0,v,r,e])}
        else
         {return e}};
    var
     compare_aux=
      function(e1,e2)
       {var match=e1;
        var match$1=e2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var e2$1=match$1[3];
            var r2=match$1[2];
            var v2=match$1[1];
            var e1$1=match[3];
            var r1=match[2];
            var v1=match[1];
            var $js$2=Ord[1];
            var c=$js$2(v1,v2);
            var $js$3=c!=0;
            if($js$3)
             {return c}
            else
             {var $js$4=cons_enum(r1,e1$1);
              var $js$5=cons_enum(r2,e2$1);
              return compare_aux($js$4,$js$5)}}
          else
           {return 1}}
        else
         {var $js$6=match$1;if($js$6){return -1}else{return 0}}};
    var
     compare=
      function(s1,s2)
       {var $js=cons_enum(s1,0);
        var $js$1=cons_enum(s2,0);
        return compare_aux($js,$js$1)};
    var equal=function(s1,s2){var $js=compare(s1,s2);return $js=0};
    var
     subset=
      function(s1,s2)
       {var match=s1;
        var match$1=s2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var t2=match$1;
            var r2=match$1[3];
            var v2=match$1[2];
            var l2=match$1[1];
            var r1=match[3];
            var v1=match[2];
            var l1=match[1];
            var $js$2=Ord[1];
            var c=$js$2(v1,v2);
            var $js$3=c=0;
            if($js$3)
             {var $js$4=subset(l1,l2);
              var $js$5=subset(r1,r2);
              return $js$4&&$js$5}
            else
             {var $js$6=c<0;
              if($js$6)
               {var $js$7=subset([0,l1,v1,0,0],l2);
                var $js$8=subset(r1,t2);
                return $js$7&&$js$8}
              else
               {var $js$9=subset([0,0,v1,r1,0],r2);
                var $js$10=subset(l1,t2);
                return $js$9&&$js$10}}}
          else
           {return 0}}
        else
         {return 1}};
    var
     iter=
      function(f,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          iter(f,l);
          f(v);
          return iter(f,r)}
        else
         {return 0}};
    var
     fold=
      function(f,s,accu)
       {var $js=s;
        if($js)
         {var r=s[3];
          var v=s[2];
          var l=s[1];
          var $js$1=fold(f,l,accu);
          var $js$2=f(v,$js$1);
          return fold(f,r,$js$2)}
        else
         {return accu}};
    var
     for_all=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=p(v);
          var $js$2=for_all(p,l);
          var $js$3=for_all(p,r);
          var $js$4=$js$2&&$js$3;
          return $js$1&&$js$4}
        else
         {return 1}};
    var
     exists=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=p(v);
          var $js$2=exists(p,l);
          var $js$3=exists(p,r);
          var $js$4=$js$2||$js$3;
          return $js$1||$js$4}
        else
         {return 0}};
    var
     filter=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var l'=filter(p,l);
          var pv=p(v);
          var r'=filter(p,r);
          var $js$1=pv;
          if($js$1){return join(l',v,r')}else{return concat(l',r')}}
        else
         {return 0}};
    var
     partition=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var match=partition(p,l);
          var lf=match[2];
          var lt=match[1];
          var pv=p(v);
          var match$1=partition(p,r);
          var rf=match$1[2];
          var rt=match$1[1];
          var $js$1=pv;
          if($js$1)
           {var $js$2=join(lt,v,rt);
            var $js$3=concat(lf,rf);
            return [0,$js$2,$js$3]}
          else
           {var $js$4=concat(lt,rt);
            var $js$5=join(lf,v,rf);
            return [0,$js$4,$js$5]}}
        else
         {return [0,0,0]}};
    var
     cardinal=
      function(param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var l=param[1];
          var $js$1=cardinal(l);
          var $js$2=$js$1+1;
          var $js$3=cardinal(r);
          return $js$2+$js$3}
        else
         {return 0}};
    var
     elements_aux=
      function(accu,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=elements_aux(accu,r);
          var $js$2=[0,v,$js$1];
          return elements_aux($js$2,l)}
        else
         {return accu}};
    var elements=function(s){return elements_aux(0,s)};
    var choose=min_elt;
    var
     find=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return v}
          else
           {var $js$3=c<0;
            if($js$3){var $js$4=l}else{var $js$4=r}
            return find(x,$js$4)}}
        else
         {var $js$5=Not_found;throw $js$5}};
    var
     of_sorted_list=
      function(l)
       {var
         sub=
          function(n,l$1)
           {var match=n;
            var match$1=l$1;
            var $js=3<match>>>0;
            if($js)
             {var exit=6}
            else
             {var $js$1=match;
              var $js$2=$js$1[0];
              if($js$2==0)
               {var l$2=match$1;return [0,0,l$2]}
              else
               if($js$2==1)
                {var $js$3=match$1;
                 if($js$3)
                  {var l$3=match$1[2];
                   var x0=match$1[1];
                   return [0,[0,0,x0,0,1],l$3]}
                 else
                  {var exit=6}}
               else
                if($js$2==2)
                 {var $js$4=match$1;
                  if($js$4)
                   {var match$2=match$1[2];
                    var $js$5=match$2;
                    if($js$5)
                     {var l$4=match$2[2];
                      var x1=match$2[1];
                      var x0$1=match$1[1];
                      return [0,[0,[0,0,x0$1,0,1],x1,0,2],l$4]}
                    else
                     {var exit=6}}
                  else
                   {var exit=6}}
                else
                 if($js$2==3)
                  {var $js$6=match$1;
                   if($js$6)
                    {var match$3=match$1[2];
                     var $js$7=match$3;
                     if($js$7)
                      {var match$4=match$3[2];
                       var $js$8=match$4;
                       if($js$8)
                        {var l$5=match$4[2];
                         var x2=match$4[1];
                         var x1$1=match$3[1];
                         var x0$2=match$1[1];
                         return [0,[0,[0,0,x0$2,0,1],x1$1,[0,0,x2,0,1],2],l$5]}
                       else
                        {var exit=6}}
                     else
                      {var exit=6}}
                   else
                    {var exit=6}}}
            switch(exit)
             {case 6:
               var l$6=match$1;
               var n$1=match;
               var nl=n$1/2;
               var match$5=sub(nl,l$6);
               var l$7=match$5[2];
               var left=match$5[1];
               var $js$9=l$7;
               if($js$9)
                {var l$8=l$7[2];
                 var mid=l$7[1];
                 var match$6=sub(n$1-nl-1,l$8);
                 var l$9=match$6[2];
                 var right=match$6[1];
                 var $js$10=create(left,mid,right);
                 return [0,$js$10,l$9]}
               else
                {var $js$11=[0,Assert_failure,[0,"set.ml",372,18]];
                 throw $js$11}
              }};
        var $js=List["length"];
        var $js$1=$js(l);
        var $js$2=sub($js$1,l);
        return $js$2[1]};
    var
     of_list=
      function(l)
       {var $js=l;
        if($js)
         {var match=l[2];
          var x0=l[1];
          var $js$1=match;
          if($js$1)
           {var match$1=match[2];
            var x1=match[1];
            var $js$2=match$1;
            if($js$2)
             {var match$2=match$1[2];
              var x2=match$1[1];
              var $js$3=match$2;
              if($js$3)
               {var match$3=match$2[2];
                var x3=match$2[1];
                var $js$4=match$3;
                if($js$4)
                 {var match$4=match$3[2];
                  var $js$5=match$4;
                  if($js$5)
                   {var $js$6=List["sort_uniq"];
                    var $js$7=$js$6(Ord[1],l);
                    return of_sorted_list($js$7)}
                  else
                   {var x3$1=x3;
                    var x2$1=x2;
                    var x1$1=x1;
                    var x0$1=x0;
                    var x4=match$3[1];
                    var $js$8=singleton(x0$1);
                    var $js$9=add(x1$1,$js$8);
                    var $js$10=add(x2$1,$js$9);
                    var $js$11=add(x3$1,$js$10);
                    return add(x4,$js$11)}}
                else
                 {var x2$2=x2;
                  var x1$2=x1;
                  var x0$2=x0;
                  var $js$12=singleton(x0$2);
                  var $js$13=add(x1$2,$js$12);
                  var $js$14=add(x2$2,$js$13);
                  return add(x3,$js$14)}}
              else
               {var x1$3=x1;
                var x0$3=x0;
                var $js$15=singleton(x0$3);
                var $js$16=add(x1$3,$js$15);
                return add(x2,$js$16)}}
            else
             {var x0$4=x0;var $js$17=singleton(x0$4);return add(x1,$js$17)}}
          else
           {return singleton(x0)}}
        else
         {return empty}};
    return [0,
            height,
            create,
            bal,
            add,
            singleton,
            add_min_element,
            add_max_element,
            join,
            min_elt,
            max_elt,
            remove_min_elt,
            merge,
            concat,
            split,
            empty,
            is_empty,
            mem,
            remove,
            union,
            inter,
            diff,
            cons_enum,
            compare_aux,
            compare,
            equal,
            subset,
            iter,
            fold,
            for_all,
            exists,
            filter,
            partition,
            cardinal,
            elements_aux,
            elements,
            choose,
            find,
            of_sorted_list,
            of_list]};
module["exports"]=
{"unknown block:(function funarg/1371\n  (let (let/1372 = (apply Make/1340 funarg/1371))\n    (makeblock 0 (field 14 let/1372) (field 15 let/1372) (field 16 let/1372)\n      (field 3 let/1372) (field 4 let/1372) (field 17 let/1372)\n      (field 18 let/1372) (field 19 let/1372) (field 20 let/1372)\n      (field 23 let/1372) (field 24 let/1372) (field 25 let/1372)\n      (field 26 let/1372) (field 27 let/1372) (field 28 let/1372)\n      (field 29 let/1372) (field 30 let/1372) (field 31 let/1372)\n      (field 32 let/1372) (field 34 let/1372) (field 8 let/1372)\n      (field 9 let/1372) (field 35 let/1372) (field 13 let/1372)\n      (field 36 let/1372) (field 38 let/1372))))":
 unknown block:(function funarg/1371
  (let (let/1372 = (apply Make/1340 funarg/1371))
    (makeblock 0 (field 14 let/1372) (field 15 let/1372) (field 16 let/1372)
      (field 3 let/1372) (field 4 let/1372) (field 17 let/1372)
      (field 18 let/1372) (field 19 let/1372) (field 20 let/1372)
      (field 23 let/1372) (field 24 let/1372) (field 25 let/1372)
      (field 26 let/1372) (field 27 let/1372) (field 28 let/1372)
      (field 29 let/1372) (field 30 let/1372) (field 31 let/1372)
      (field 32 let/1372) (field 34 let/1372) (field 8 let/1372)
      (field 9 let/1372) (field 35 let/1372) (field 13 let/1372)
      (field 36 let/1372) (field 38 let/1372))))};
