var
 merge=
  function(order,l1,l2)
   {var $js=l1;
    if($js)
     {var t1=l1[2];
      var h1=l1[1];
      var $js$1=l2;
      if($js$1)
       {var t2=l2[2];
        var h2=l2[1];
        var $js$2=order(h1,h2);
        if($js$2)
         {var $js$3=merge(order,t1,l2);return [0,h1,$js$3]}
        else
         {var $js$4=merge(order,l1,t2);return [0,h2,$js$4]}}
      else
       {return l1}}
    else
     {return l2}};
var
 list=
  function(order,l)
   {var
     initlist=
      function(param)
       {var $js=param;
        if($js)
         {var match=param[2];
          var e=param[1];
          var $js$1=match;
          if($js$1)
           {var e1=e;
            var rest=match[2];
            var e2=match[1];
            var $js$2=order(e1,e2);
            if($js$2)
             {var $js$3=[0,e1,[0,e2,0]]}
            else
             {var $js$3=[0,e2,[0,e1,0]]}
            var $js$4=initlist(rest);
            return [0,$js$3,$js$4]}
          else
           {return [0,[0,e,0],0]}}
        else
         {return 0}};
    var
     merge2=
      function(x)
       {var $js=x;
        if($js)
         {var match=x[2];
          var $js$1=match;
          if($js$1)
           {var rest=match[2];
            var l2=match[1];
            var l1=x[1];
            var $js$2=merge(order,l1,l2);
            var $js$3=merge2(rest);
            return [0,$js$2,$js$3]}
          else
           {var exit=11}}
        else
         {var exit=11}
        switch(exit){case 11:return x}};
    var
     mergeall=
      function(llist)
       {var $js=llist;
        if($js)
         {var match=llist[2];
          var $js$1=match;
          if($js$1)
           {var $js$2=merge2(llist);return mergeall($js$2)}
          else
           {var l$1=llist[1];return l$1}}
        else
         {return 0}};
    var $js=initlist(l);
    return mergeall($js)};
var
 swap=
  function(arr,i,j){var tmp=arr[i];arr[i]=arr[j],0;return arr[j]=tmp,0};
var
 array=
  function(cmp,arr)
   {var
     qsort=
      function(lo,hi)
       {var $js=hi-lo>=6;
        if($js)
         {var mid=lo+hi>>>1;
          var $js$1=cmp(arr[mid],arr[lo]);
          if($js$1){swap(arr,mid,lo)}else{}
          var $js$2=cmp(arr[hi],arr[mid]);
          if($js$2)
           {swap(arr,mid,hi);
            var $js$3=cmp(arr[mid],arr[lo]);
            if($js$3){swap(arr,mid,lo)}else{}}
          else
           {}
          var pivot=arr[mid];
          var i=[0,lo+1];
          var j=[0,hi-1];
          var $js$4=cmp(pivot,arr[hi]);
          var $js$5=!$js$4;
          var $js$6=cmp(arr[lo],pivot);
          var $js$7=!$js$6;
          var $js$8=$js$5||$js$7;
          if($js$8)
           {var $js$9=[0,Invalid_argument,"Sort.array"];throw $js$9}
          else
           {}
          for(;;)
           {var $js$10=i[1]<j[1];
            if($js$10)
             {for(;;)
               {var $js$11=cmp(pivot,arr[i[1]]);
                var $js$12=!$js$11;
                if($js$12){i[0]++}else break}
              for(;;)
               {var $js$13=cmp(arr[j[1]],pivot);
                var $js$14=!$js$13;
                if($js$14){j[0]--}else break}
              var $js$15=i[1]<j[1];
              if($js$15){swap(arr,i[1],j[1])}else{}
              i[0]++;
              j[0]--}
            else
             break}
          var $js$16=j[1]-lo<=hi-i[1];
          if($js$16)
           {qsort(lo,j[1]);return qsort(i[1],hi)}
          else
           {qsort(i[1],hi);return qsort(lo,j[1])}}
        else
         {return 0}};
    qsort(0,arr["length"]-1);
    var $js=1;
    var $js$1=arr["length"]-1;
    for(var i=$js;i<=$js$1;i++)
     {var val_i=arr[i];
      var $js$2=cmp(arr[i-1],val_i);
      var $js$3=!$js$2;
      if($js$3)
       {arr[i]=arr[i-1],0;
        var j=[0,i-1];
        for(;;)
         {var $js$4=cmp(arr[j[1]-1],val_i);
          var $js$5=!$js$4;
          var $js$6=j[1]>=1&&$js$5;
          if($js$6){arr[j[1]]=arr[j[1]-1],0;j[0]--}else break}
        arr[j[1]]=val_i,0}
      else
       {}}};
module["exports"]={"list":list,"array":array,"merge":merge};
