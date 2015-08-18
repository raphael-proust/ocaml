// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var length=function(x){return /* -1 for tag */x["length"]-1-1;};

var
 fill=
  function(ar,ofs,len,x)
   {if(ofs<0||len<0||ofs+len>length(ar))
     {throw [0,
             CamlPrimitive["caml_global_data"]["Invalid_argument"],
             "Weak.fill"];
      }
    else
     {for(var i=ofs;i<=ofs+len-1;i++){CamlPrimitive["caml_weak_set"](ar,i,x)}
      return 0;
      }
    };

var
 Make=
  function(H)
   {var
     weak_create=
      function(prim){return CamlPrimitive["caml_weak_create"](prim);};
    
    var emptybucket=weak_create(0);
    
    var
     get_index=
      function(t,h)
       {return (h&Pervasives["max_int"])%/* -1 for tag */(t[1]["length"]-1);};
    
    var limit=7;
    
    var over_limit=2;
    
    var
     create=
      function(sz)
       {var sz$1=sz<7?7:sz;
        
        var sz$2=sz$1>Sys["max_array_length"]?Sys["max_array_length"]:sz$1;
        
        return /* record */[0,
                CamlPrimitive["caml_make_vect"](sz$2,emptybucket),
                CamlPrimitive["caml_make_vect"](sz$2,[/* array */0]),
                limit,
                0,
                0];
        };
    
    var
     clear=
      function(t)
       {for(var i=0;i<=/* -1 for tag */t[1]["length"]-1-1;i++)
         {t[1][i+1]=emptybucket,t[2][i+1]=[/* array */0]}
        
        t[3]=limit;
        return t[4]=0,0;
        };
    
    var
     fold=
      function(f,t,init)
       {var
         fold_bucket=
          function(i,b,accu)
           {if(i>=length(b))
             {return accu;}
            else
             {var match=CamlPrimitive["caml_weak_get"](b,i);
              
              return match
                      ?fold_bucket(i+1,b,f(match[1],accu))
                      :fold_bucket(i+1,b,accu);
              }
            };
        
        return $$Array["fold_right"](fold_bucket(0),t[1],init);
        };
    
    var
     iter=
      function(f,t)
       {var
         iter_bucket=
          function(i,b)
           {if(i>=length(b))
             {return /* () */0;}
            else
             {var match=CamlPrimitive["caml_weak_get"](b,i);
              
              return match?(f(match[1]),iter_bucket(i+1,b)):iter_bucket(i+1,b);
              }
            };
        
        return $$Array["iter"](iter_bucket(0),t[1]);
        };
    
    var
     iter_weak=
      function(f,t)
       {var
         iter_bucket=
          function(i,j,b)
           {if(i>=length(b))
             {return /* () */0;}
            else
             {var match=CamlPrimitive["caml_weak_check"](b,i);
              
              return match!==0
                      ?(f(b,t[2][j+1],i),iter_bucket(i+1,j,b))
                      :iter_bucket(i+1,j,b);
              }
            };
        
        return $$Array["iteri"](iter_bucket(0),t[1]);
        };
    
    var
     count_bucket=
      function(i,b,accu)
       {return i>=length(b)
                ?accu
                :count_bucket
                  (i+1,b,accu+(CamlPrimitive["caml_weak_check"](b,i)?1:0));
        };
    
    var
     count=
      function(t){return $$Array["fold_right"](count_bucket(0),t[1],0);};
    
    var
     next_sz=
      function(n){return Pervasives["min"](3*n/2+3,Sys["max_array_length"]);};
    
    var prev_sz=function(n){return ((n-3)*2+2)/3;};
    
    var
     test_shrink_bucket=
      function(t)
       {var bucket=t[1][t[5]+1];
        
        var hbucket=t[2][t[5]+1];
        
        var len=length(bucket);
        
        var prev_len=prev_sz(len);
        
        var live=count_bucket(0,bucket,0);
        
        if(live<=prev_len)
         {var
           loop=
            function(i,j)
             {return j>=prev_len
                      ?CamlPrimitive["caml_weak_check"](bucket,i)
                        ?loop(i+1,j)
                        :CamlPrimitive["caml_weak_check"](bucket,j)
                          ?(CamlPrimitive["caml_weak_blit"](bucket,j,bucket,i,1),
                            hbucket[i+1]=
                            hbucket[j+1],
                            loop(i+1,j-1))
                          :loop(i,j-1)
                      :0;
              };
          
          loop(0,length(bucket)-1);
          prev_len===0
           ?(t[1][t[5]+1]=emptybucket,t[2][t[5]+1]=[/* array */0],0)
           :(CamlPrimitive["caml_obj_truncate"](bucket,prev_len+1),
             CamlPrimitive["caml_obj_truncate"](hbucket,prev_len));
          
          if(len>t[3]&&prev_len<=t[3]){len>t[3]&&prev_len<=t[3]}
          }
        else
         {}
        
        return t[5]=(t[5]+1)%/* -1 for tag */(t[1]["length"]-1),0;
        };
    
    var
     resize=
      function(t)
       {var oldlen=/* -1 for tag */t[1]["length"]-1;
        
        var newlen=next_sz(oldlen);
        
        if(newlen>oldlen)
         {var newt=create(newlen);
          
          var
           add_weak=
            function(ob,oh,oi)
             {var
               setter=
                function(nb,ni,param)
                 {return CamlPrimitive["caml_weak_blit"](ob,oi,nb,ni,1);};
              
              var h=oh[oi+1];
              
              return add_aux(newt,setter,/* None */0,h,get_index(newt,h));
              };
          
          iter_weak(add_weak,t);
          t[1]=newt[1];
          t[2]=newt[2];
          t[3]=newt[3];
          t[4]=newt[4];
          return t[5]=t[5]%/* -1 for tag */(newt[1]["length"]-1),0;
          }
        else
         {t[3]=Pervasives["max_int"];return t[4]=0,0;}
        };
    
    var
     add_aux=
      function(t,setter,d,h,index)
       {var bucket=t[1][index+1];
        
        var hashes=t[2][index+1];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i)
           {if(i>=sz)
             {var newsz=Pervasives["min"](3*sz/2+3,Sys["max_array_length"]-1);
              
              if(newsz<=sz){newsz<=sz}
              
              var newbucket=weak_create(newsz);
              
              var newhashes=CamlPrimitive["caml_make_vect"](newsz,0);
              
              CamlPrimitive["caml_weak_blit"](bucket,0,newbucket,0,sz);
              $$Array["blit"](hashes,0,newhashes,0,sz);
              setter(newbucket,sz,d);
              newhashes[sz+1]=h;
              t[1][index+1]=newbucket;
              t[2][index+1]=newhashes;
              if(sz<=t[3]&&newsz>t[3])
               {t[4]=t[4]+1;
                for(var _i=0;_i<=over_limit;_i++){test_shrink_bucket(t)}
                }
              else
               {}
              
              return t[4]>/* -1 for tag */(t[1]["length"]-1)/over_limit
                      ?resize(t)
                      :0;
              }
            else
             {return CamlPrimitive["caml_weak_check"](bucket,i)
                      ?loop(i+1)
                      :(setter(bucket,i,d),hashes[i+1]=h,0);
              }
            };
        
        return loop(0);
        };
    
    var
     add=
      function(t,d)
       {var h=H[2](d);
        
        return add_aux
                (t,
                 function(prim,prim$1,prim$2)
                  {return CamlPrimitive["caml_weak_set"](prim,prim$1,prim$2);},
                 /* Some */[0,d],
                 h,
                 get_index(t,h));
        };
    
    var
     find_or=
      function(t,d,ifnotfound)
       {var h=H[2](d);
        
        var index=get_index(t,h);
        
        var bucket=t[1][index+1];
        
        var hashes=t[2][index+1];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i)
           {if(i>=sz)
             {return ifnotfound(h,index);}
            else
             {if(h===hashes[i+1])
               {var match=CamlPrimitive["caml_weak_get_copy"](bucket,i);
                
                var exit;
                
                if(match)
                 {if(H[1](match[1],d))
                   {var match$1=CamlPrimitive["caml_weak_get"](bucket,i);
                    
                    return match$1?match$1[1]:loop(i+1);
                    }
                  else
                   {exit=23;}
                  }
                else
                 {exit=23;}
                
                switch(exit){case 23:return loop(i+1);}
                }
              else
               {return loop(i+1);}
              }
            };
        
        return loop(0);
        };
    
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
                      {return CamlPrimitive["caml_weak_set"](prim,prim$1,prim$2);},
                     /* Some */[0,d],
                     h,
                     index);
                   return d;
                   });
        };
    
    var
     find=
      function(t,d)
       {return find_or
                (t,
                 d,
                 function(h,index)
                  {throw CamlPrimitive["caml_global_data"]["Not_found"];});
        };
    
    var
     find_shadow=
      function(t,d,iffound,ifnotfound)
       {var h=H[2](d);
        
        var index=get_index(t,h);
        
        var bucket=t[1][index+1];
        
        var hashes=t[2][index+1];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i)
           {if(i>=sz)
             {return ifnotfound;}
            else
             {if(h===hashes[i+1])
               {var match=CamlPrimitive["caml_weak_get_copy"](bucket,i);
                
                var exit;
                
                if(match)
                 {if(H[1](match[1],d))
                   {return iffound(bucket,i);}
                  else
                   {exit=14;}
                  }
                else
                 {exit=14;}
                
                switch(exit){case 14:return loop(i+1);}
                }
              else
               {return loop(i+1);}
              }
            };
        
        return loop(0);
        };
    
    var
     remove=
      function(t,d)
       {return find_shadow
                (t,
                 d,
                 function(w,i)
                  {return CamlPrimitive["caml_weak_set"](w,i,/* None */0);},
                 /* () */0);
        };
    
    var
     mem=
      function(t,d)
       {return find_shadow
                (t,d,function(w,i){return /* true */1;},/* false */0);
        };
    
    var
     find_all=
      function(t,d)
       {var h=H[2](d);
        
        var index=get_index(t,h);
        
        var bucket=t[1][index+1];
        
        var hashes=t[2][index+1];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i,accu)
           {if(i>=sz)
             {return accu;}
            else
             {if(h===hashes[i+1])
               {var match=CamlPrimitive["caml_weak_get_copy"](bucket,i);
                
                var exit;
                
                if(match)
                 {if(H[1](match[1],d))
                   {var match$1=CamlPrimitive["caml_weak_get"](bucket,i);
                    
                    return match$1
                            ?loop(i+1,/* :: */[0,match$1[1],accu])
                            :loop(i+1,accu);
                    }
                  else
                   {exit=5;}
                  }
                else
                 {exit=5;}
                
                switch(exit){case 5:return loop(i+1,accu);}
                }
              else
               {return loop(i+1,accu);}
              }
            };
        
        return loop(0,/* [] */0);
        };
    
    var
     stats=
      function(t)
       {var len=/* -1 for tag */t[1]["length"]-1;
        
        var lens=$$Array["map"](length,t[1]);
        
        $$Array["sort"]
         (function(prim,prim$1)
           {return CamlPrimitive["caml_compare"](prim,prim$1);},
          lens);
        var
         totlen=
          $$Array["fold_left"]
           (function(prim,prim$1){return prim+prim$1;},0,lens);
        
        return /* tuple */[0,
                len,
                count(t),
                totlen,
                lens[1],
                lens[len/2+1],
                lens[len-1+1]];
        };
    
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
            stats];
    };

module["exports"]=
{"create":function(prim){return CamlPrimitive["caml_weak_create"](prim);},
 "length":length,
 "set":
 function(prim,prim$1,prim$2)
  {return CamlPrimitive["caml_weak_set"](prim,prim$1,prim$2);},
 "get":
 function(prim,prim$1){return CamlPrimitive["caml_weak_get"](prim,prim$1);},
 "get_copy":
 function(prim,prim$1)
  {return CamlPrimitive["caml_weak_get_copy"](prim,prim$1);},
 "check":
 function(prim,prim$1){return CamlPrimitive["caml_weak_check"](prim,prim$1);},
 "fill":fill,
 "blit":
 function(prim,prim$1,prim$2,prim$3,prim$4)
  {return CamlPrimitive["caml_weak_blit"](prim,prim$1,prim$2,prim$3,prim$4);},
 "Make":Make};

