// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 init=
  function(l,f)
   {if(l===0)
     {return [/* array */0]}
    else
     {if(l<0)
       {return Pervasives["invalid_arg"]("Array.init")}
      else
       {var res=CamlPrimitive["caml_make_vect"](l,f(0));
        
        for(var i=1;i<=-1+l;i++){res[i+1]=f(i)}
        
        return res}
      }
    };

var
 make_matrix=
  function(sx,sy,init)
   {var res=CamlPrimitive["caml_make_vect"](sx,[/* array */0]);
    
    for(var x=0;x<=-1+sx;x++)
     {res[x+1]=CamlPrimitive["caml_make_vect"](sy,init)}
    
    return res};

var create_matrix=make_matrix;

var
 copy=
  function(a)
   {var l=/* -1 for tag */a["length"]-1;
    
    return l===0?[/* array */0]:CamlPrimitive["caml_array_sub"](a,0,l)};

var
 append=
  function(a1,a2)
   {var l1=/* -1 for tag */a1["length"]-1;
    
    return l1===0
            ?copy(a2)
            :/* -1 for tag */a2["length"]-1===0
              ?CamlPrimitive["caml_array_sub"](a1,0,l1)
              :a1["concat"](a2)};

var
 sub=
  function(a,ofs,len)
   {return len<0||ofs>/* -1 for tag */a["length"]-1-len
            ?Pervasives["invalid_arg"]("Array.sub")
            :CamlPrimitive["caml_array_sub"](a,ofs,len)};

var
 fill=
  function(a,ofs,len,v)
   {if(ofs<0||len<0||ofs>/* -1 for tag */a["length"]-1-len)
     {return Pervasives["invalid_arg"]("Array.fill")}
    else
     {for(var i=ofs;i<=ofs+len-1;i++){a[i+1]=v}return 0;}
    };

var
 blit=
  function(a1,ofs1,a2,ofs2,len)
   {return len<
            0||
            ofs1<
            0||
            ofs1>
            /* -1 for tag */a1["length"]-
            1-
            len||
            ofs2<
            0||
            ofs2>
            /* -1 for tag */a2["length"]-
            1-
            len
            ?Pervasives["invalid_arg"]("Array.blit")
            :CamlPrimitive["caml_array_blit"](a1,ofs1,a2,ofs2,len)};

var
 iter=
  function(f,a)
   {for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++){f(a[i+1])}return 0;};

var
 map=
  function(f,a)
   {var l=/* -1 for tag */a["length"]-1;
    
    if(l===0)
     {return [/* array */0]}
    else
     {var r=CamlPrimitive["caml_make_vect"](l,f(a[1]));
      
      for(var i=1;i<=l-1;i++){r[i+1]=f(a[i+1])}
      
      return r}
    };

var
 iteri=
  function(f,a)
   {for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++){f(i,a[i+1])}return 0;};

var
 mapi=
  function(f,a)
   {var l=/* -1 for tag */a["length"]-1;
    
    if(l===0)
     {return [/* array */0]}
    else
     {var r=CamlPrimitive["caml_make_vect"](l,f(0,a[1]));
      
      for(var i=1;i<=l-1;i++){r[i+1]=f(i,a[i+1])}
      
      return r}
    };

var
 to_list=
  function(a)
   {var
     tolist=
      function(i,res){return i<0?res:tolist(i-1,/* :: */[0,a[i+1],res])};
    
    return tolist(/* -1 for tag */a["length"]-1-1,/* [] */0)};

var
 list_length=
  function(accu,param){return param?list_length(1+accu,param[2]):accu};

var
 of_list=
  function(l)
   {if(l)
     {var a=CamlPrimitive["caml_make_vect"](list_length(0,l),l[1]);
      
      var
       fill$1=
        function(i,param)
         {return param?(a[i+1]=param[1],fill$1(i+1,param[2])):a};
      
      return fill$1(1,l[2])}
    else
     {return [/* array */0]}
    };

var
 fold_left=
  function(f,x,a)
   {var r=x;
    
    for(var i=0;i<=/* -1 for tag */a["length"]-1-1;i++){r=f(r,a[i+1]);}
    
    return r};

var
 fold_right=
  function(f,a,x)
   {var r=x;
    
    for(var i=/* -1 for tag */a["length"]-1-1;i>=0;i--){r=f(a[i+1],r);}
    
    return r};

var Bottom=CamlPrimitive["caml_set_oo_id"]([248,"Array.Bottom",0]);

var
 sort=
  function(cmp,a)
   {var
     maxson=
      function(l,i)
       {var i31=i+i+i+1;
        
        var x=i31;
        
        if(i31+2<l)
         {if(cmp(a[i31+1],a[i31+1+1])<0){x=i31+1;}else{}
          
          if(cmp(a[x+1],a[i31+2+1])<0){x=i31+2;}else{}
          
          return x}
        else
         {if(i31+1<l&&cmp(a[i31+1],a[i31+1+1])<0)
           {return i31+1}
          else
           {if(i31<l){return i31}else{throw [0,Bottom,i]}}
          }
        };
    
    var
     trickledown=
      function(l,i,e)
       {var j=maxson(l,i);
        
        return cmp(a[j+1],e)>0?(a[i+1]=a[j+1],trickledown(l,j,e)):(a[i+1]=e,0)};
    
    var
     trickle=
      function(l,i,e)
       {try
         {return trickledown(l,i,e)}
        catch(exn){if(exn[1]===Bottom){return a[exn[2]+1]=e,0}else{throw exn}}
        };
    
    var
     bubbledown=
      function(l,i){var j=maxson(l,i);a[i+1]=a[j+1];return bubbledown(l,j)};
    
    var
     bubble=
      function(l,i)
       {try
         {return bubbledown(l,i)}
        catch(exn){if(exn[1]===Bottom){return exn[2]}else{throw exn}}
        };
    
    var
     trickleup=
      function(i,e)
       {var father=(i-1)/3;
        
        if(i!==father)
         {}
        else
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"array.ml",168,4]]}
        
        return cmp(a[father+1],e)<0
                ?(a[i+1]=a[father+1],father>0?trickleup(father,e):(a[1]=e,0))
                :(a[i+1]=e,0)};
    
    var l=/* -1 for tag */a["length"]-1;
    
    for(var i=(l+1)/3-1;i>=0;i--){trickle(l,i,a[i+1])}
    
    for(var i$1=l-1;i$1>=2;i$1--)
     {var e=a[i$1+1];a[i$1+1]=a[1],trickleup(bubble(i$1,0),e)}
    
    if(l>1){var e$1=a[2];a[2]=a[1];return a[1]=e$1,0}else{return 0}
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
             {dst[d+1]=s1;
              var i1$1=i1+1;
              
              return i1$1<src1r
                      ?loop(i1$1,a[i1$1+1],i2,s2,d+1)
                      :blit(src2,i2,dst,d+1,src2r-i2)}
            else
             {dst[d+1]=s2;
              var i2$1=i2+1;
              
              return i2$1<src2r
                      ?loop(i1,s1,i2$1,src2[i2$1+1],d+1)
                      :blit(a,i1,dst,d+1,src1r-i1)}
            };
        
        return loop(src1ofs,a[src1ofs+1],src2ofs,src2[src2ofs+1],dstofs)};
    
    var
     isortto=
      function(srcofs,dst,dstofs,len)
       {for(var i=0;i<=len-1;i++)
         {var e=a[srcofs+i+1];
          
          var j=dstofs+i-1;
          
          while(j>=dstofs&&cmp(dst[j+1],e)>0){dst[j+1+1]=dst[j+1];j=-1+j;}
          
          dst[j+1+1]=e}
        return 0;
        };
    
    var
     sortto=
      function(srcofs,dst,dstofs,len)
       {if(len<=cutoff)
         {return isortto(srcofs,dst,dstofs,len)}
        else
         {var l1=len/2;
          
          var l2=len-l1;
          
          sortto(srcofs+l1,dst,dstofs+l1,l2);
          sortto(srcofs,a,srcofs+l2,l1);
          return merge(srcofs+l2,l1,dst,dstofs+l1,l2,dst,dstofs)}
        };
    
    var l=/* -1 for tag */a["length"]-1;
    
    if(l<=cutoff)
     {return isortto(0,a,0,l)}
    else
     {var l1=l/2;
      
      var l2=l-l1;
      
      var t=CamlPrimitive["caml_make_vect"](l2,a[1]);
      
      sortto(l1,t,0,l2);
      sortto(0,a,l2,l1);
      return merge(l2,l1,t,0,l2,a,0)}
    };

var fast_sort=stable_sort;

module["exports"]=
{"init":init,
 "make_matrix":make_matrix,
 "create_matrix":create_matrix,
 "append":append,
 "concat":function(prim){return CamlPrimitive["caml_array_concat"](prim)},
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

