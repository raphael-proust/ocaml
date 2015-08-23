// Generated CODE, PLEASE EDIT WITH CARE 

var CamlPrimitive=require("./camlPrimitive.js");


var
 merge=
  function(order,l1,l2)
   {if(l1)
     {var h1=l1[1];
      
      if(l2)
       {var h2=l2[1];
        
        return order(h1,h2)
                ?/* :: */[0,h1,merge(order,l1[2],l2)]
                :/* :: */[0,h2,merge(order,l1,l2[2])]}
      else
       {return l1}
      }
    else
     {return l2}
    };

var
 list=
  function(order,l)
   {var
     initlist=
      function(param)
       {if(param)
         {var match=param[2];
          
          var e=param[1];
          
          if(match)
           {var e2=match[1];
            
            return /* :: */[0,
                    order(e,e2)
                     ?/* :: */[0,e,/* :: */[0,e2,/* [] */0]]
                     :/* :: */[0,e2,/* :: */[0,e,/* [] */0]],
                    initlist(match[2])]}
          else
           {return /* :: */[0,/* :: */[0,e,/* [] */0],/* [] */0]}
          }
        else
         {return /* [] */0}
        };
    
    var
     merge2=
      function(x)
       {var exit;
        
        if(x)
         {var match=x[2];
          
          if(match)
           {return /* :: */[0,merge(order,x[1],match[1]),merge2(match[2])]}
          else
           {exit=11;}
          }
        else
         {exit=11;}
        
        switch(exit){case 11:return x}
        };
    
    var
     mergeall=
      function(llist)
       {return llist?llist[2]?mergeall(merge2(llist)):llist[1]:/* [] */0};
    
    return mergeall(initlist(l))};

var
 swap=
  function(arr,i,j){var tmp=arr[i+1];arr[i+1]=arr[j+1];return arr[j+1]=tmp,0};

var
 array=
  function(cmp,arr)
   {var
     qsort=
      function(lo,hi)
       {if(hi-lo>=6)
         {var mid=lo+hi>>>1;
          
          if(cmp(arr[mid+1],arr[lo+1])){swap(arr,mid,lo)}
          
          if(cmp(arr[hi+1],arr[mid+1]))
           {swap(arr,mid,hi),cmp(arr[mid+1],arr[lo+1])?swap(arr,mid,lo):0}
          
          var pivot=arr[mid+1];
          
          var i=lo+1;
          
          var j=hi-1;
          
          if(!cmp(pivot,arr[hi+1])||!cmp(arr[lo+1],pivot))
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Invalid_argument"],
                   "Sort.array"]}
          
          while(i<j)
           {while(!cmp(pivot,arr[i+1])){i=1+i;}
            
            while(!cmp(arr[j+1],pivot)){j=-1+j;}
            
            if(i<j){swap(arr,i,j)}
            
            i=1+i;
            
            j=-1+j;
            }
          
          return j-lo<=hi-i
                  ?(qsort(lo,j),qsort(i,hi))
                  :(qsort(i,hi),qsort(lo,j))}
        else
         {return 0}
        };
    
    qsort(0,/* -1 for tag */arr["length"]-1-1);
    for(var i=1;i<=/* -1 for tag */arr["length"]-1-1;i++)
     {var val_i=arr[i+1];
      
      if(!cmp(arr[i-1+1],val_i))
       {arr[i+1]=arr[i-1+1];
        var j=i-1;
        
        while(j>=1&&!cmp(arr[j-1+1],val_i)){arr[j+1]=arr[j-1+1];j=-1+j;}
        
        arr[j+1]=val_i}
      }
    return 0};

module["exports"]={"list":list,"array":array,"merge":merge};

