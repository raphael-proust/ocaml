// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var CamlPrimtivie=require("./camlPrimtivie.js");


var
 init=
  function(l,f)
   {if(l=0)
     {return [];}
    else
     {if(l<0)
       {return Pervasives["invalid_arg"]("Array.init");}
      else
       {var res=CamlPrimtivie["caml_make_vect"](l,f(0));
        
        for(var i=1;i<=-1+l;i++){res[i]=f(i),0}
        
        return res;
        }
      }
    };

var
 make_matrix=
  function(sx,sy,init)
   {var res=CamlPrimtivie["caml_make_vect"](sx,[]);
    
    for(var x=0;x<=-1+sx;x++)
     {res[x]=CamlPrimtivie["caml_make_vect"](sy,init),0}
    
    return res;
    };

var create_matrix=make_matrix;

var
 copy=
  function(a)
   {var l=a["length"];
    
    if(l=0){return [];}else{return CamlPrimtivie["caml_array_sub"](a,0,l);}
    };

var
 append=
  function(a1,a2)
   {var l1=a1["length"];
    
    if(l1=0)
     {return copy(a2);}
    else
     {if(a2["length"]=0)
       {return CamlPrimtivie["caml_array_sub"](a1,0,l1);}
      else
       {return CamlPrimtivie["caml_array_append"](a1,a2);}
      }
    };

var
 sub=
  function(a,ofs,len)
   {if(len<0||ofs>a["length"]-len)
     {return Pervasives["invalid_arg"]("Array.sub");}
    else
     {return CamlPrimtivie["caml_array_sub"](a,ofs,len);}
    };

var
 fill=
  function(a,ofs,len,v)
   {if(ofs<0||len<0||ofs>a["length"]-len)
     {return Pervasives["invalid_arg"]("Array.fill");}
    else
     {for(var i=ofs;i<=ofs+len-1;i++){a[i]=v,0}}
    };

var
 blit=
  function(a1,ofs1,a2,ofs2,len)
   {if(len<0||ofs1<0||ofs1>a1["length"]-len||ofs2<0||ofs2>a2["length"]-len)
     {return Pervasives["invalid_arg"]("Array.blit");}
    else
     {return CamlPrimtivie["caml_array_blit"](a1,ofs1,a2,ofs2,len);}
    };

var iter=function(f,a){for(var i=0;i<=a["length"]-1;i++){f(a[i])}};

var
 map=
  function(f,a)
   {var l=a["length"];
    
    if(l=0)
     {return [];}
    else
     {var r=CamlPrimtivie["caml_make_vect"](l,f(a[0]));
      
      for(var i=1;i<=l-1;i++){r[i]=f(a[i]),0}
      
      return r;
      }
    };

var iteri=function(f,a){for(var i=0;i<=a["length"]-1;i++){f(i,a[i])}};

var
 mapi=
  function(f,a)
   {var l=a["length"];
    
    if(l=0)
     {return [];}
    else
     {var r=CamlPrimtivie["caml_make_vect"](l,f(0,a[0]));
      
      for(var i=1;i<=l-1;i++){r[i]=f(i,a[i]),0}
      
      return r;
      }
    };

var
 to_list=
  function(a)
   {var
     tolist=
      function(i,res)
       {if(i<0){return res;}else{return tolist(i-1,/* :: */[0,a[i],res]);}};
    
    return tolist(a["length"]-1,/* [] */0);
    };

var
 list_length=
  function(accu,param)
   {if(param){var t=param[2];return list_length(1+accu,t);}else{return accu;}};

var
 of_list=
  function(l)
   {if(l)
     {var tl=l[2];
      
      var hd=l[1];
      
      var a=CamlPrimtivie["caml_make_vect"](list_length(0,l),hd);
      
      var
       fill$1=
        function(i,param)
         {if(param)
           {var tl$1=param[2];
            
            var hd$1=param[1];
            
            a[i]=hd$1,0;
            return fill$1(i+1,tl$1);
            }
          else
           {return a;}
          };
      
      return fill$1(1,tl);
      }
    else
     {return [];}
    };

var
 fold_left=
  function(f,x,a)
   {var r=[0,x];
    
    for(var i=0;i<=a["length"]-1;i++){r[1]=f(r[1],a[i]),0}
    
    return r[1];
    };

var
 fold_right=
  function(f,a,x)
   {var r=[0,x];
    
    for(var i=a["length"]-1;i>=0;i--){r[1]=f(a[i],r[1]),0}
    
    return r[1];
    };

var Bottom=CamlPrimtivie["caml_set_oo_id"]([248,"Array.Bottom",0]);

var
 sort=
  function(cmp,a)
   {var
     maxson=
      function(l,i)
       {var i31=i+i+i+1;
        
        var x=[0,i31];
        
        if(i31+2<l)
         {if(cmp(a[i31],a[i31+1])<0){x[1]=i31+1,0}else{}
          
          if(cmp(a[x[1]],a[i31+2])<0){x[1]=i31+2,0}else{}
          
          return x[1];
          }
        else
         {if(i31+1<l&&cmp(a[i31],a[i31+1])<0)
           {return i31+1;}
          else
           {if(i31<l){return i31;}else{throw [0,Bottom,i];}}
          }
        };
    
    var
     trickledown=
      function(l,i,e)
       {var j=maxson(l,i);
        
        if(cmp(a[j],e)>0)
         {a[i]=a[j],0;return trickledown(l,j,e);}
        else
         {return a[i]=e,0;}
        };
    
    var
     trickle=
      function(l,i,e)
       {try
         {return trickledown(l,i,e);}
        catch(exn)
         {var tag=exn[1];
          
          if(tag=Bottom){var i$1=exn[2];return a[i$1]=e,0;}else{throw exn;}
          }
        };
    
    var
     bubbledown=
      function(l,i){var j=maxson(l,i);a[i]=a[j],0;return bubbledown(l,j);};
    
    var
     bubble=
      function(l,i)
       {try
         {return bubbledown(l,i);}
        catch(exn)
         {var tag=exn[1];
          
          if(tag=Bottom){var i$1=exn[2];return i$1;}else{throw exn;}
          }
        };
    
    var
     trickleup=
      function(i,e)
       {var father=(i-1)/3;
        
        if(i!=father){}else{throw [0,Assert_failure,[0,"array.ml",168,4]];}
        
        if(cmp(a[father],e)<0)
         {a[i]=a[father],0;
          if(father>0){return trickleup(father,e);}else{return a[0]=e,0;}
          }
        else
         {return a[i]=e,0;}
        };
    
    var l=a["length"];
    
    for(var i=(l+1)/3-1;i>=0;i--){trickle(l,i,a[i])}
    
    for(var i$1=l-1;i$1>=2;i$1--)
     {var e=a[i$1];a[i$1]=a[0],0,trickleup(bubble(i$1,0),e)}
    
    if(l>1){var e$1=a[1];a[1]=a[0],0;return a[0]=e$1,0;}else{return 0;}
    };

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
           {if(cmp(s1,s2)<=0)
             {dst[d]=s1,0;
              var i1$1=i1+1;
              
              if(i1$1<src1r)
               {return loop(i1$1,a[i1$1],i2,s2,d+1);}
              else
               {return blit(src2,i2,dst,d+1,src2r-i2);}
              }
            else
             {dst[d]=s2,0;
              var i2$1=i2+1;
              
              if(i2$1<src2r)
               {return loop(i1,s1,i2$1,src2[i2$1],d+1);}
              else
               {return blit(a,i1,dst,d+1,src1r-i1);}
              }
            };
        
        return loop(src1ofs,a[src1ofs],src2ofs,src2[src2ofs],dstofs);
        };
    
    var
     isortto=
      function(srcofs,dst,dstofs,len)
       {for(var i=0;i<=len-1;i++)
         {var e=a[srcofs+i];
          
          var j=[0,dstofs+i-1];
          
          while(j[1]>=dstofs&&cmp(dst[j[1]],e)>0)
           {dst[j[1]+1]=dst[j[1]],0,j[0]--}
          
          dst[j[1]+1]=e,0}
        };
    
    var
     sortto=
      function(srcofs,dst,dstofs,len)
       {if(len<=cutoff)
         {return isortto(srcofs,dst,dstofs,len);}
        else
         {var l1=len/2;
          
          var l2=len-l1;
          
          sortto(srcofs+l1,dst,dstofs+l1,l2);
          sortto(srcofs,a,srcofs+l2,l1);
          return merge(srcofs+l2,l1,dst,dstofs+l1,l2,dst,dstofs);
          }
        };
    
    var l=a["length"];
    
    if(l<=cutoff)
     {return isortto(0,a,0,l);}
    else
     {var l1=l/2;
      
      var l2=l-l1;
      
      var t=CamlPrimtivie["caml_make_vect"](l2,a[0]);
      
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0);
      }
    };

var fast_sort=stable_sort;

module["exports"]=
{"init":init,
 "make_matrix":make_matrix,
 "create_matrix":create_matrix,
 "append":append,
 "caml_array_concat":
 function(prim){return CamlPrimtivie["caml_array_concat"](prim);},
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

