var Pervasives=require("Pervasives");
var
 Make=
  function(Ord)
   {var
     height=
      function(param)
       {var $js=param;if($js){var h=param[5];return h}else{return 0}};
    var
     create=
      function(l,x,d,r)
       {var hl=height(l);
        var hr=height(r);
        var $js=hl>=hr;
        if($js){var $js$1=hl+1}else{var $js$1=hr+1}
        return [0,l,x,d,r,$js$1]};
    var singleton=function(x,d){return [0,0,x,d,0,1]};
    var
     bal=
      function(l,x,d,r)
       {var $js=l;
        if($js){var h=l[5];var hl=h}else{var hl=0}
        var $js$1=r;
        if($js$1){var h$1=r[5];var hr=h$1}else{var hr=0}
        var $js$2=hl>hr+2;
        if($js$2)
         {var $js$3=l;
          if($js$3)
           {var lr=l[4];
            var ld=l[3];
            var lv=l[2];
            var ll=l[1];
            var $js$4=height(ll);
            var $js$5=height(lr);
            var $js$6=$js$4>=$js$5;
            if($js$6)
             {var $js$7=create(lr,x,d,r);return create(ll,lv,ld,$js$7)}
            else
             {var $js$8=lr;
              if($js$8)
               {var lrr=lr[4];
                var lrd=lr[3];
                var lrv=lr[2];
                var lrl=lr[1];
                var $js$9=create(ll,lv,ld,lrl);
                var $js$10=create(lrr,x,d,r);
                return create($js$9,lrv,lrd,$js$10)}
              else
               {var $js$11=Pervasives["invalid_arg"];return $js$11("Map.bal")}}}
          else
           {var $js$12=Pervasives["invalid_arg"];return $js$12("Map.bal")}}
        else
         {var $js$13=hr>hl+2;
          if($js$13)
           {var $js$14=r;
            if($js$14)
             {var rr=r[4];
              var rd=r[3];
              var rv=r[2];
              var rl=r[1];
              var $js$15=height(rr);
              var $js$16=height(rl);
              var $js$17=$js$15>=$js$16;
              if($js$17)
               {var $js$18=create(l,x,d,rl);return create($js$18,rv,rd,rr)}
              else
               {var $js$19=rl;
                if($js$19)
                 {var rlr=rl[4];
                  var rld=rl[3];
                  var rlv=rl[2];
                  var rll=rl[1];
                  var $js$20=create(l,x,d,rll);
                  var $js$21=create(rlr,rv,rd,rr);
                  return create($js$20,rlv,rld,$js$21)}
                else
                 {var $js$22=Pervasives["invalid_arg"];
                  return $js$22("Map.bal")}}}
            else
             {var $js$23=Pervasives["invalid_arg"];return $js$23("Map.bal")}}
          else
           {var $js$24=hl>=hr;
            if($js$24){var $js$25=hl+1}else{var $js$25=hr+1}
            return [0,l,x,d,r,$js$25]}}};
    var empty=0;
    var
     is_empty=
      function(param){var $js=param;if($js){return 0}else{return 1}};
    var
     add=
      function(x,data,param)
       {var $js=param;
        if($js)
         {var h=param[5];
          var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return [0,l,x,data,r,h]}
          else
           {var $js$3=c<0;
            if($js$3)
             {var $js$4=add(x,data,l);return bal($js$4,v,d,r)}
            else
             {var $js$5=add(x,data,r);return bal(l,v,d,$js$5)}}}
        else
         {return [0,0,x,data,0,1]}};
    var
     find=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return d}
          else
           {var $js$3=c<0;
            if($js$3){var $js$4=l}else{var $js$4=r}
            return find(x,$js$4)}}
        else
         {var $js$5=Not_found;throw $js$5}};
    var
     mem=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[4];
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
     min_binding=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[1];
          var $js$1=l;
          if($js$1)
           {return min_binding(l)}
          else
           {var d=param[3];var x=param[2];return [0,x,d]}}
        else
         {var $js$2=Not_found;throw $js$2}};
    var
     max_binding=
      function(param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var x=param[2];
          var $js$1=r;
          if($js$1){return max_binding(r)}else{return [0,x,d]}}
        else
         {var $js$2=Not_found;throw $js$2}};
    var
     remove_min_binding=
      function(param)
       {var $js=param;
        if($js)
         {var l=param[1];
          var $js$1=l;
          if($js$1)
           {var r=param[4];
            var d=param[3];
            var x=param[2];
            var $js$2=remove_min_binding(l);
            return bal($js$2,x,d,r)}
          else
           {var r$1=param[4];return r$1}}
        else
         {var $js$3=Pervasives["invalid_arg"];
          return $js$3("Map.remove_min_elt")}};
    var
     merge=
      function(t1,t2)
       {var match=t1;
        var match$1=t2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var match$2=min_binding(t2);
            var d=match$2[2];
            var x=match$2[1];
            var $js$2=remove_min_binding(t2);
            return bal(t1,x,d,$js$2)}
          else
           {var t=match;return t}}
        else
         {var t$1=match$1;return t$1}};
    var
     remove=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
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
             {var $js$4=remove(x,l);return bal($js$4,v,d,r)}
            else
             {var $js$5=remove(x,r);return bal(l,v,d,$js$5)}}}
        else
         {return 0}};
    var
     iter=
      function(f,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          iter(f,l);
          f(v,d);
          return iter(f,r)}
        else
         {return 0}};
    var
     map=
      function(f,param)
       {var $js=param;
        if($js)
         {var h=param[5];
          var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var l$prime=map(f,l);
          var d$prime=f(d);
          var r$prime=map(f,r);
          return [0,l$prime,v,d$prime,r$prime,h]}
        else
         {return 0}};
    var
     mapi=
      function(f,param)
       {var $js=param;
        if($js)
         {var h=param[5];
          var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var l$prime=mapi(f,l);
          var d$prime=f(v,d);
          var r$prime=mapi(f,r);
          return [0,l$prime,v,d$prime,r$prime,h]}
        else
         {return 0}};
    var
     fold=
      function(f,m,accu)
       {var $js=m;
        if($js)
         {var r=m[4];
          var d=m[3];
          var v=m[2];
          var l=m[1];
          var $js$1=fold(f,l,accu);
          var $js$2=f(v,d,$js$1);
          return fold(f,r,$js$2)}
        else
         {return accu}};
    var
     for_all=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=p(v,d);
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
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=p(v,d);
          var $js$2=exists(p,l);
          var $js$3=exists(p,r);
          var $js$4=$js$2||$js$3;
          return $js$1||$js$4}
        else
         {return 0}};
    var
     add_min_binding=
      function(k,v,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var x=param[2];
          var l=param[1];
          var $js$1=add_min_binding(k,v,l);
          return bal($js$1,x,d,r)}
        else
         {return singleton(k,v)}};
    var
     add_max_binding=
      function(k,v,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var x=param[2];
          var l=param[1];
          var $js$1=add_max_binding(k,v,r);
          return bal(l,x,d,$js$1)}
        else
         {return singleton(k,v)}};
    var
     join=
      function(l,v,d,r)
       {var match=l;
        var match$1=r;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var rh=match$1[5];
            var rr=match$1[4];
            var rd=match$1[3];
            var rv=match$1[2];
            var rl=match$1[1];
            var lh=match[5];
            var lr=match[4];
            var ld=match[3];
            var lv=match[2];
            var ll=match[1];
            var $js$2=lh>rh+2;
            if($js$2)
             {var $js$3=join(lr,v,d,r);return bal(ll,lv,ld,$js$3)}
            else
             {var $js$4=rh>lh+2;
              if($js$4)
               {var $js$5=join(l,v,d,rl);return bal($js$5,rv,rd,rr)}
              else
               {return create(l,v,d,r)}}}
          else
           {return add_max_binding(v,d,l)}}
        else
         {return add_min_binding(v,d,r)}};
    var
     concat=
      function(t1,t2)
       {var match=t1;
        var match$1=t2;
        var $js=match;
        if($js)
         {var $js$1=match$1;
          if($js$1)
           {var match$2=min_binding(t2);
            var d=match$2[2];
            var x=match$2[1];
            var $js$2=remove_min_binding(t2);
            return join(t1,x,d,$js$2)}
          else
           {var t=match;return t}}
        else
         {var t$1=match$1;return t$1}};
    var
     concat_or_join=
      function(t1,v,d,t2)
       {var $js=d;
        if($js)
         {var d$1=d[1];return join(t1,v,d$1,t2)}
        else
         {return concat(t1,t2)}};
    var
     split=
      function(x,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=Ord[1];
          var c=$js$1(x,v);
          var $js$2=c=0;
          if($js$2)
           {return [0,l,[0,d],r]}
          else
           {var $js$3=c<0;
            if($js$3)
             {var match=split(x,l);
              var rl=match[3];
              var pres=match[2];
              var ll=match[1];
              var $js$4=join(rl,v,d,r);
              return [0,ll,pres,$js$4]}
            else
             {var match$1=split(x,r);
              var rr=match$1[3];
              var pres$1=match$1[2];
              var lr=match$1[1];
              var $js$5=join(l,v,d,lr);
              return [0,$js$5,pres$1,rr]}}}
        else
         {return [0,0,0,0]}};
    var
     merge$1=
      function(f,s1,s2)
       {var match=s1;
        var match$1=s2;
        var $js=match;
        if($js)
         {var h1=match[5];
          var r1=match[4];
          var d1=match[3];
          var v1=match[2];
          var l1=match[1];
          var $js$1=height(s2);
          var $js$2=h1>=$js$1;
          if($js$2)
           {var match$2=split(v1,s2);
            var r2=match$2[3];
            var d2=match$2[2];
            var l2=match$2[1];
            var $js$3=merge$1(f,l1,l2);
            var $js$4=f(v1,[0,d1],d2);
            var $js$5=merge$1(f,r1,r2);
            return concat_or_join($js$3,v1,$js$4,$js$5)}
          else
           {var exit=20}}
        else
         {var $js$6=match$1;if($js$6){var exit=20}else{return 0}}
        switch(exit)
         {case 20:
           var $js$7=match$1;
           if($js$7)
            {var r2$1=match$1[4];
             var d2$1=match$1[3];
             var v2=match$1[2];
             var l2$1=match$1[1];
             var match$3=split(v2,s1);
             var r1$1=match$3[3];
             var d1$1=match$3[2];
             var l1$1=match$3[1];
             var $js$8=merge$1(f,l1$1,l2$1);
             var $js$9=f(v2,d1$1,[0,d2$1]);
             var $js$10=merge$1(f,r1$1,r2$1);
             return concat_or_join($js$8,v2,$js$9,$js$10)}
           else
            {var $js$11=[0,Assert_failure,[0,"map.ml",270,10]];throw $js$11}
          }};
    var
     filter=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var l$prime=filter(p,l);
          var pvd=p(v,d);
          var r$prime=filter(p,r);
          var $js$1=pvd;
          if($js$1)
           {return join(l$prime,v,d,r$prime)}
          else
           {return concat(l$prime,r$prime)}}
        else
         {return 0}};
    var
     partition=
      function(p,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var match=partition(p,l);
          var lf=match[2];
          var lt=match[1];
          var pvd=p(v,d);
          var match$1=partition(p,r);
          var rf=match$1[2];
          var rt=match$1[1];
          var $js$1=pvd;
          if($js$1)
           {var $js$2=join(lt,v,d,rt);
            var $js$3=concat(lf,rf);
            return [0,$js$2,$js$3]}
          else
           {var $js$4=concat(lt,rt);
            var $js$5=join(lf,v,d,rf);
            return [0,$js$4,$js$5]}}
        else
         {return [0,0,0]}};
    var
     cons_enum=
      function(m,e)
       {var $js=m;
        if($js)
         {var r=m[4];
          var d=m[3];
          var v=m[2];
          var l=m[1];
          return cons_enum(l,[0,v,d,r,e])}
        else
         {return e}};
    var
     compare=
      function(cmp,m1,m2)
       {var
         compare_aux=
          function(e1,e2)
           {var match=e1;
            var match$1=e2;
            var $js=match;
            if($js)
             {var $js$1=match$1;
              if($js$1)
               {var e2$1=match$1[4];
                var r2=match$1[3];
                var d2=match$1[2];
                var v2=match$1[1];
                var e1$1=match[4];
                var r1=match[3];
                var d1=match[2];
                var v1=match[1];
                var $js$2=Ord[1];
                var c=$js$2(v1,v2);
                var $js$3=c!=0;
                if($js$3)
                 {return c}
                else
                 {var c$1=cmp(d1,d2);
                  var $js$4=c$1!=0;
                  if($js$4)
                   {return c$1}
                  else
                   {var $js$5=cons_enum(r1,e1$1);
                    var $js$6=cons_enum(r2,e2$1);
                    return compare_aux($js$5,$js$6)}}}
              else
               {return 1}}
            else
             {var $js$7=match$1;if($js$7){return -1}else{return 0}}};
        var $js=cons_enum(m1,0);
        var $js$1=cons_enum(m2,0);
        return compare_aux($js,$js$1)};
    var
     equal=
      function(cmp,m1,m2)
       {var
         equal_aux=
          function(e1,e2)
           {var match=e1;
            var match$1=e2;
            var $js=match;
            if($js)
             {var $js$1=match$1;
              if($js$1)
               {var e2$1=match$1[4];
                var r2=match$1[3];
                var d2=match$1[2];
                var v2=match$1[1];
                var e1$1=match[4];
                var r1=match[3];
                var d1=match[2];
                var v1=match[1];
                var $js$2=Ord[1];
                var $js$3=$js$2(v1,v2);
                var $js$4=$js$3=0;
                var $js$5=cmp(d1,d2);
                var $js$6=cons_enum(r1,e1$1);
                var $js$7=cons_enum(r2,e2$1);
                var $js$8=equal_aux($js$6,$js$7);
                var $js$9=$js$5&&$js$8;
                return $js$4&&$js$9}
              else
               {return 0}}
            else
             {var $js$10=match$1;if($js$10){return 0}else{return 1}}};
        var $js=cons_enum(m1,0);
        var $js$1=cons_enum(m2,0);
        return equal_aux($js,$js$1)};
    var
     cardinal=
      function(param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var l=param[1];
          var $js$1=cardinal(l);
          var $js$2=$js$1+1;
          var $js$3=cardinal(r);
          return $js$2+$js$3}
        else
         {return 0}};
    var
     bindings_aux=
      function(accu,param)
       {var $js=param;
        if($js)
         {var r=param[4];
          var d=param[3];
          var v=param[2];
          var l=param[1];
          var $js$1=bindings_aux(accu,r);
          var $js$2=[0,[0,v,d],$js$1];
          return bindings_aux($js$2,l)}
        else
         {return accu}};
    var bindings=function(s){return bindings_aux(0,s)};
    var choose=min_binding;
    return [0,
            height,
            create,
            singleton,
            bal,
            empty,
            is_empty,
            add,
            find,
            mem,
            min_binding,
            max_binding,
            remove_min_binding,
            remove,
            iter,
            map,
            mapi,
            fold,
            for_all,
            exists,
            add_min_binding,
            add_max_binding,
            join,
            concat,
            concat_or_join,
            split,
            merge$1,
            filter,
            partition,
            cons_enum,
            compare,
            equal,
            cardinal,
            bindings_aux,
            bindings,
            choose]};
module["exports"]=
{"unknown block:(function funarg/1408\n  (let (let/1409 = (apply Make/1341 funarg/1408))\n    (makeblock 0 (field 4 let/1409) (field 5 let/1409) (field 8 let/1409)\n      (field 6 let/1409) (field 2 let/1409) (field 12 let/1409)\n      (field 25 let/1409) (field 29 let/1409) (field 30 let/1409)\n      (field 13 let/1409) (field 16 let/1409) (field 17 let/1409)\n      (field 18 let/1409) (field 26 let/1409) (field 27 let/1409)\n      (field 31 let/1409) (field 33 let/1409) (field 9 let/1409)\n      (field 10 let/1409) (field 34 let/1409) (field 24 let/1409)\n      (field 7 let/1409) (field 14 let/1409) (field 15 let/1409))))":
 unknown block:(function funarg/1408
  (let (let/1409 = (apply Make/1341 funarg/1408))
    (makeblock 0 (field 4 let/1409) (field 5 let/1409) (field 8 let/1409)
      (field 6 let/1409) (field 2 let/1409) (field 12 let/1409)
      (field 25 let/1409) (field 29 let/1409) (field 30 let/1409)
      (field 13 let/1409) (field 16 let/1409) (field 17 let/1409)
      (field 18 let/1409) (field 26 let/1409) (field 27 let/1409)
      (field 31 let/1409) (field 33 let/1409) (field 9 let/1409)
      (field 10 let/1409) (field 34 let/1409) (field 24 let/1409)
      (field 7 let/1409) (field 14 let/1409) (field 15 let/1409))))};
