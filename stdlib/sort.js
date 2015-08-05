// Generated CODE, PLEASE EDIT WITH CARE 



var
 merge=
  function(order,l1,l2)
   {if(l1)
     {var t1=l1[2];
      
      var h1=l1[1];
      
      if(l2)
       {var t2=l2[2];
        
        var h2=l2[1];
        
        if(order(h1,h2))
         {return [0,h1,merge(order,t1,l2)];}
        else
         {return [0,h2,merge(order,l1,t2)];}
        }
      else
       {return l1;}
      }
    else
     {return l2;}
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
           {var e1=e;
            
            var rest=match[2];
            
            var e2=match[1];
            
            return [0,
                    order(e1,e2)?[0,e1,[0,e2,0]]:[0,e2,[0,e1,0]],
                    initlist(rest)];
            }
          else
           {return [0,[0,e,0],0];}
          }
        else
         {return 0;}
        };
    
    var
     merge2=
      function(x)
       {var exit;
        
        if(x)
         {var match=x[2];
          
          if(match)
           {var rest=match[2];
            
            var l2=match[1];
            
            var l1=x[1];
            
            return [0,merge(order,l1,l2),merge2(rest)];
            }
          else
           {exit=11;}
          }
        else
         {exit=11;}
        
        switch(exit){case 11:return x;}
        };
    
    var
     mergeall=
      function(llist)
       {if(llist)
         {var match=llist[2];
          
          if(match)
           {return mergeall(merge2(llist));}
          else
           {var l$1=llist[1];return l$1;}
          }
        else
         {return 0;}
        };
    
    return mergeall(initlist(l));
    };

var
 swap=
  function(arr,i,j){var tmp=arr[i];arr[i]=arr[j],0;return arr[j]=tmp,0;};

var
 array=
  function(cmp,arr)
   {var
     qsort=
      function(lo,hi)
       {if(hi-lo>=6)
         {var mid=lo+hi>>>1;
          
          if(cmp(arr[mid],arr[lo])){swap(arr,mid,lo)}else{}
          
          if(cmp(arr[hi],arr[mid]))
           {swap(arr,mid,hi);
            if(cmp(arr[mid],arr[lo])){swap(arr,mid,lo)}else{}
            }
          else
           {}
          
          var pivot=arr[mid];
          
          var i=[0,lo+1];
          
          var j=[0,hi-1];
          
          if(!cmp(pivot,arr[hi])||!cmp(arr[lo],pivot))
           {throw [0,Invalid_argument,"Sort.array"];}
          else
           {}
          
          while(i[1]<j[1])
           {while(!cmp(pivot,arr[i[1]])){i[0]++}
            
            while(!cmp(arr[j[1]],pivot)){j[0]--}
            
            if(i[1]<j[1]){swap(arr,i[1],j[1])}else{}
            
            i[0]++,j[0]--}
          
          if(j[1]-lo<=hi-i[1])
           {qsort(lo,j[1]);return qsort(i[1],hi);}
          else
           {qsort(i[1],hi);return qsort(lo,j[1]);}
          }
        else
         {return 0;}
        };
    
    qsort(0,arr["length"]-1);
    for(var i=1;i<=arr["length"]-1;i++)
     {var val_i=arr[i];
      
      if(!cmp(arr[i-1],val_i))
       {arr[i]=arr[i-1],0;
        var j=[0,i-1];
        
        while(j[1]>=1&&!cmp(arr[j[1]-1],val_i))
         {arr[j[1]]=arr[j[1]-1],0,j[0]--}
        
        arr[j[1]]=val_i,0}
      else
       {}
      }
    };

module["exports"]={"list":list,"array":array,"merge":merge};

