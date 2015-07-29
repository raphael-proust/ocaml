var Pervasives=require("Pervasives");
var $$Array=require("Array");
var Sys=require("Sys");
var length=function(x){return x["length"]-1};
var
 fill=
  function(ar,ofs,len,x)
   {var $js=length(ar);
    var $js$1=ofs+len>$js;
    var $js$2=len<0||$js$1;
    var $js$3=ofs<0||$js$2;
    if($js$3)
     {var $js$4=[0,Invalid_argument,"Weak.fill"];throw $js$4}
    else
     {var $js$5=ofs;
      var $js$6=ofs+len-1;
      for(var i=$js$5;i<=$js$6;i++){"unknown primitive:caml_weak_set"}}};
var
 Make=
  function(H)
   {var
     weak_create=
      function(prim){return "unknown primitive:caml_weak_create"};
    var emptybucket=weak_create(0);
    var
     get_index=
      function(t,h){return (h&Pervasives["max_int"])%t[1]["length"]};
    var limit=7;
    var over_limit=2;
    var
     create=
      function(sz)
       {var $js=sz<7;
        if($js){var sz$1=7}else{var sz$1=sz}
        var $js$1=sz$1>Sys["max_array_length"];
        if($js$1){var sz$2=Sys["max_array_length"]}else{var sz$2=sz$1}
        var $js$2="unknown primitive:caml_make_vect";
        var $js$3="unknown primitive:caml_make_vect";
        return [0,$js$2,$js$3,limit,0,0]};
    var
     clear=
      function(t)
       {var $js=0;
        var $js$1=t[1]["length"]-1;
        for(var i=$js;i<=$js$1;i++){t[1][i]=emptybucket,0;t[2][i]=[],0}
        t[3]=limit,0;
        return t[4]=0,0};
    var
     fold=
      function(f,t,init)
       {var
         fold_bucket=
          function(i,b,accu)
           {var $js=length(b);
            var $js$1=i>=$js;
            if($js$1)
             {return accu}
            else
             {var match="unknown primitive:caml_weak_get";
              var $js$2=match;
              if($js$2)
               {var v=match[1];
                var $js$3=f(v,accu);
                return fold_bucket(i+1,b,$js$3)}
              else
               {return fold_bucket(i+1,b,accu)}}};
        var $js=$$Array["fold_right"];
        var $js$1=fold_bucket(0);
        return $js($js$1,t[1],init)};
    var
     iter=
      function(f,t)
       {var
         iter_bucket=
          function(i,b)
           {var $js=length(b);
            var $js$1=i>=$js;
            if($js$1)
             {return 0}
            else
             {var match="unknown primitive:caml_weak_get";
              var $js$2=match;
              if($js$2)
               {var v=match[1];f(v);return iter_bucket(i+1,b)}
              else
               {return iter_bucket(i+1,b)}}};
        var $js=$$Array["iter"];
        var $js$1=iter_bucket(0);
        return $js($js$1,t[1])};
    var
     iter_weak=
      function(f,t)
       {var
         iter_bucket=
          function(i,j,b)
           {var $js=length(b);
            var $js$1=i>=$js;
            if($js$1)
             {return 0}
            else
             {var match="unknown primitive:caml_weak_check";
              var $js$2=match!=0;
              if($js$2)
               {var $js$3=t[2][j];f(b,$js$3,i);return iter_bucket(i+1,j,b)}
              else
               {return iter_bucket(i+1,j,b)}}};
        var $js=$$Array["iteri"];
        var $js$1=iter_bucket(0);
        return $js($js$1,t[1])};
    var
     count_bucket=
      function(i,b,accu)
       {var $js=length(b);
        var $js$1=i>=$js;
        if($js$1)
         {return accu}
        else
         {var $js$2="unknown primitive:caml_weak_check";
          if($js$2){var $js$3=1}else{var $js$3=0}
          var $js$4=accu+$js$3;
          return count_bucket(i+1,b,$js$4)}};
    var
     count=
      function(t)
       {var $js=$$Array["fold_right"];
        var $js$1=count_bucket(0);
        return $js($js$1,t[1],0)};
    var
     next_sz=
      function(n)
       {var $js=Pervasives["min"];return $js(3*n/2+3,Sys["max_array_length"])};
    var prev_sz=function(n){return ((n-3)*2+2)/3};
    var
     test_shrink_bucket=
      function(t)
       {var bucket=t[1][t[5]];
        var hbucket=t[2][t[5]];
        var len=length(bucket);
        var prev_len=prev_sz(len);
        var live=count_bucket(0,bucket,0);
        var $js=live<=prev_len;
        if($js)
         {var
           loop=
            function(i,j)
             {var $js$1=j>=prev_len;
              if($js$1)
               {var $js$2="unknown primitive:caml_weak_check";
                if($js$2)
                 {return loop(i+1,j)}
                else
                 {var $js$3="unknown primitive:caml_weak_check";
                  if($js$3)
                   {"unknown primitive:caml_weak_blit";
                    var $js$4=hbucket[j];
                    hbucket[i]=$js$4,0;
                    return loop(i+1,j-1)}
                  else
                   {return loop(i,j-1)}}}
              else
               {return 0}};
          var $js$1=length(bucket);
          var $js$2=$js$1-1;
          loop(0,$js$2);
          var $js$3=prev_len=0;
          if($js$3)
           {t[1][t[5]]=emptybucket,0;t[2][t[5]]=[],0}
          else
           {"unknown primitive:caml_obj_truncate";
            "unknown primitive:caml_obj_truncate"}
          var $js$4=len>t[3]&&prev_len<=t[3];
          if($js$4){t[4]=t[4]-1,0}else{}}
        else
         {}
        return t[5]=(t[5]+1)%t[1]["length"],0};
    var
     resize=
      function(t)
       {var oldlen=t[1]["length"];
        var newlen=next_sz(oldlen);
        var $js=newlen>oldlen;
        if($js)
         {var newt=create(newlen);
          var
           add_weak=
            function(ob,oh,oi)
             {var
               setter=
                function(nb,ni,param)
                 {return "unknown primitive:caml_weak_blit"};
              var h=oh[oi];
              var $js$1=get_index(newt,h);
              return add_aux(newt,setter,0,h,$js$1)};
          iter_weak(add_weak,t);
          t[1]=newt[1],0;
          t[2]=newt[2],0;
          t[3]=newt[3],0;
          t[4]=newt[4],0;
          return t[5]=t[5]%newt[1]["length"],0}
        else
         {t[3]=Pervasives["max_int"],0;return t[4]=0,0}};
    var
     add_aux=
      function(t,setter,d,h,index)
       {var bucket=t[1][index];
        var hashes=t[2][index];
        var sz=length(bucket);
        var
         loop=
          function(i)
           {var $js=i>=sz;
            if($js)
             {var $js$1=Pervasives["min"];
              var newsz=$js$1(3*sz/2+3,Sys["max_array_length"]-1);
              var $js$2=newsz<=sz;
              if($js$2)
               {var $js$3=Pervasives["failwith"];
                $js$3("Weak.Make: hash bucket cannot grow more")}
              else
               {}
              var newbucket=weak_create(newsz);
              var newhashes="unknown primitive:caml_make_vect";
              "unknown primitive:caml_weak_blit";
              var $js$4=$$Array["blit"];
              $js$4(hashes,0,newhashes,0,sz);
              setter(newbucket,sz,d);
              newhashes[sz]=h,0;
              t[1][index]=newbucket,0;
              t[2][index]=newhashes,0;
              var $js$5=sz<=t[3]&&newsz>t[3];
              if($js$5)
               {t[4]=t[4]+1,0;
                var $js$6=0;
                var $js$7=over_limit;
                for(var _i=$js$6;_i<=$js$7;_i++){test_shrink_bucket(t)}}
              else
               {}
              var $js$8=t[4]>t[1]["length"]/over_limit;
              if($js$8){return resize(t)}else{return 0}}
            else
             {var $js$9="unknown primitive:caml_weak_check";
              if($js$9)
               {return loop(i+1)}
              else
               {setter(bucket,i,d);return hashes[i]=h,0}}};
        return loop(0)};
    var
     add=
      function(t,d)
       {var $js=H[2];
        var h=$js(d);
        var $js$1=get_index(t,h);
        return add_aux
                (t,
                 function(prim,prim$1,prim$2)
                  {return "unknown primitive:caml_weak_set"},
                 [0,d],
                 h,
                 $js$1)};
    var
     find_or=
      function(t,d,ifnotfound)
       {var $js=H[2];
        var h=$js(d);
        var index=get_index(t,h);
        var bucket=t[1][index];
        var hashes=t[2][index];
        var sz=length(bucket);
        var
         loop=
          function(i)
           {var $js$1=i>=sz;
            if($js$1)
             {return ifnotfound(h,index)}
            else
             {var $js$2=hashes[i];
              var $js$3=h=$js$2;
              if($js$3)
               {var match="unknown primitive:caml_weak_get_copy";
                var $js$4=match;
                if($js$4)
                 {var v=match[1];
                  var $js$5=H[1];
                  var $js$6=$js$5(v,d);
                  if($js$6)
                   {var match$1="unknown primitive:caml_weak_get";
                    var $js$7=match$1;
                    if($js$7)
                     {var v$1=match$1[1];return v$1}
                    else
                     {return loop(i+1)}}
                  else
                   {var exit=23}}
                else
                 {var exit=23}
                switch(exit){case 23:return loop(i+1)}}
              else
               {return loop(i+1)}}};
        return loop(0)};
    var
     merge=
      function(t,d)
       {return find_or
                (t,
                 d,
                 function(h,index)
                  {add_aux
                    (t,
                     function(prim,prim$1,prim$2)
                      {return "unknown primitive:caml_weak_set"},
                     [0,d],
                     h,
                     index);
                   return d})};
    var
     find=
      function(t,d)
       {return find_or(t,d,function(h,index){var $js=Not_found;throw $js})};
    var
     find_shadow=
      function(t,d,iffound,ifnotfound)
       {var $js=H[2];
        var h=$js(d);
        var index=get_index(t,h);
        var bucket=t[1][index];
        var hashes=t[2][index];
        var sz=length(bucket);
        var
         loop=
          function(i)
           {var $js$1=i>=sz;
            if($js$1)
             {return ifnotfound}
            else
             {var $js$2=hashes[i];
              var $js$3=h=$js$2;
              if($js$3)
               {var match="unknown primitive:caml_weak_get_copy";
                var $js$4=match;
                if($js$4)
                 {var v=match[1];
                  var $js$5=H[1];
                  var $js$6=$js$5(v,d);
                  if($js$6){return iffound(bucket,i)}else{var exit=14}}
                else
                 {var exit=14}
                switch(exit){case 14:return loop(i+1)}}
              else
               {return loop(i+1)}}};
        return loop(0)};
    var
     remove=
      function(t,d)
       {return find_shadow
                (t,
                 d,
                 function(w,i){return "unknown primitive:caml_weak_set"},
                 0)};
    var mem=function(t,d){return find_shadow(t,d,function(w,i){return 1},0)};
    var
     find_all=
      function(t,d)
       {var $js=H[2];
        var h=$js(d);
        var index=get_index(t,h);
        var bucket=t[1][index];
        var hashes=t[2][index];
        var sz=length(bucket);
        var
         loop=
          function(i,accu)
           {var $js$1=i>=sz;
            if($js$1)
             {return accu}
            else
             {var $js$2=hashes[i];
              var $js$3=h=$js$2;
              if($js$3)
               {var match="unknown primitive:caml_weak_get_copy";
                var $js$4=match;
                if($js$4)
                 {var v=match[1];
                  var $js$5=H[1];
                  var $js$6=$js$5(v,d);
                  if($js$6)
                   {var match$1="unknown primitive:caml_weak_get";
                    var $js$7=match$1;
                    if($js$7)
                     {var v$1=match$1[1];return loop(i+1,[0,v$1,accu])}
                    else
                     {return loop(i+1,accu)}}
                  else
                   {var exit=5}}
                else
                 {var exit=5}
                switch(exit){case 5:return loop(i+1,accu)}}
              else
               {return loop(i+1,accu)}}};
        return loop(0,0)};
    var
     stats=
      function(t)
       {var len=t[1]["length"];
        var $js=$$Array["map"];
        var lens=$js(length,t[1]);
        var $js$1=$$Array["sort"];
        $js$1
         (function(prim,prim$1){return "unknown primitive:caml_compare"},lens);
        var $js$2=$$Array["fold_left"];
        var totlen=$js$2(function(prim,prim$1){return prim+prim$1},0,lens);
        var $js$3=count(t);
        var $js$4=lens[0];
        var $js$5=lens[len/2];
        var $js$6=lens[len-1];
        return [0,len,$js$3,totlen,$js$4,$js$5,$js$6]};
    return [0,
            create,
            clear,
            merge,
            add,
            remove,
            find,
            find_all,
            mem,
            iter,
            fold,
            count,
            stats]};
module["exports"]=
{"unknown block:(function prim/1267 (caml_weak_create prim/1267))":
 unknown block:(function prim/1267 (caml_weak_create prim/1267)),
 "length":length,
 "unknown block:(function prim/1270 prim/1269 prim/1268\n  (caml_weak_set prim/1270 prim/1269 prim/1268))":
 unknown block:(function prim/1270 prim/1269 prim/1268
  (caml_weak_set prim/1270 prim/1269 prim/1268)),
 "unknown block:(function prim/1272 prim/1271 (caml_weak_get prim/1272 prim/1271))":
 unknown block:(function prim/1272 prim/1271 (caml_weak_get prim/1272 prim/1271)),
 "unknown block:(function prim/1274 prim/1273 (caml_weak_get_copy prim/1274 prim/1273))":
 unknown block:(function prim/1274 prim/1273 (caml_weak_get_copy prim/1274 prim/1273)),
 "unknown block:(function prim/1276 prim/1275 (caml_weak_check prim/1276 prim/1275))":
 unknown block:(function prim/1276 prim/1275 (caml_weak_check prim/1276 prim/1275)),
 "fill":fill,
 "unknown block:(function prim/1281 prim/1280 prim/1279 prim/1278 prim/1277\n  (caml_weak_blit prim/1281 prim/1280 prim/1279 prim/1278 prim/1277))":
 unknown block:(function prim/1281 prim/1280 prim/1279 prim/1278 prim/1277
  (caml_weak_blit prim/1281 prim/1280 prim/1279 prim/1278 prim/1277)),
 "Make":Make};
