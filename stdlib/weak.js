// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var $$Array=require("Array");
var Sys=require("Sys");


var length=function(x){return x["length"]-1;};

var
 fill=
  function(ar,ofs,len,x)
   {if(ofs<0||len<0||ofs+len>length(ar))
     {throw [0,Invalid_argument,"Weak.fill"];}
    else
     {for(var i=ofs;i<=ofs+len-1;i++){"unknown primitive:caml_weak_set"}}
    };

var
 Make=
  function(H)
   {var
     weak_create=
      function(prim){return "unknown primitive:caml_weak_create";};
    
    var emptybucket=weak_create(0);
    
    var
     get_index=
      function(t,h){return (h&Pervasives["max_int"])%t[1]["length"];};
    
    var limit=7;
    
    var over_limit=2;
    
    var
     create=
      function(sz)
       {if(sz<7){var sz$1=7;}else{var sz$1=sz;}
        
        if(sz$1>Sys["max_array_length"])
         {var sz$2=Sys["max_array_length"];}
        else
         {var sz$2=sz$1;}
        
        return /* record */[0,
                "unknown primitive:caml_make_vect",
                "unknown primitive:caml_make_vect",
                limit,
                0,
                0];
        };
    
    var
     clear=
      function(t)
       {for(var i=0;i<=t[1]["length"]-1;i++)
         {t[1][i]=emptybucket,0,t[2][i]=[],0}
        
        t[3]=limit,0;
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
             {var match="unknown primitive:caml_weak_get";
              
              if(match)
               {var v=match[1];return fold_bucket(i+1,b,f(v,accu));}
              else
               {return fold_bucket(i+1,b,accu);}
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
             {return 0;}
            else
             {var match="unknown primitive:caml_weak_get";
              
              if(match)
               {var v=match[1];f(v);return iter_bucket(i+1,b);}
              else
               {return iter_bucket(i+1,b);}
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
             {return 0;}
            else
             {var match="unknown primitive:caml_weak_check";
              
              if(match!=0)
               {f(b,t[2][j],i);return iter_bucket(i+1,j,b);}
              else
               {return iter_bucket(i+1,j,b);}
              }
            };
        
        return $$Array["iteri"](iter_bucket(0),t[1]);
        };
    
    var
     count_bucket=
      function(i,b,accu)
       {if(i>=length(b))
         {return accu;}
        else
         {return count_bucket
                  (i+1,b,accu+("unknown primitive:caml_weak_check"?1:0));
          }
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
       {var bucket=t[1][t[5]];
        
        var hbucket=t[2][t[5]];
        
        var len=length(bucket);
        
        var prev_len=prev_sz(len);
        
        var live=count_bucket(0,bucket,0);
        
        if(live<=prev_len)
         {var
           loop=
            function(i,j)
             {if(j>=prev_len)
               {if("unknown primitive:caml_weak_check")
                 {return loop(i+1,j);}
                else
                 {if("unknown primitive:caml_weak_check")
                   {"unknown primitive:caml_weak_blit";
                    hbucket[i]=hbucket[j],0;
                    return loop(i+1,j-1);
                    }
                  else
                   {return loop(i,j-1);}
                  }
                }
              else
               {return 0;}
              };
          
          loop(0,length(bucket)-1);
          if(prev_len=0)
           {t[1][t[5]]=emptybucket,0,t[2][t[5]]=[],0}
          else
           {"unknown primitive:caml_obj_truncate",
            "unknown primitive:caml_obj_truncate"}
          
          if(len>t[3]&&prev_len<=t[3]){t[4]=t[4]-1,0}else{}
          }
        else
         {}
        
        return t[5]=(t[5]+1)%t[1]["length"],0;
        };
    
    var
     resize=
      function(t)
       {var oldlen=t[1]["length"];
        
        var newlen=next_sz(oldlen);
        
        if(newlen>oldlen)
         {var newt=create(newlen);
          
          var
           add_weak=
            function(ob,oh,oi)
             {var
               setter=
                function(nb,ni,param)
                 {return "unknown primitive:caml_weak_blit";};
              
              var h=oh[oi];
              
              return add_aux(newt,setter,0,h,get_index(newt,h));
              };
          
          iter_weak(add_weak,t);
          t[1]=newt[1],0;
          t[2]=newt[2],0;
          t[3]=newt[3],0;
          t[4]=newt[4],0;
          return t[5]=t[5]%newt[1]["length"],0;
          }
        else
         {t[3]=Pervasives["max_int"],0;return t[4]=0,0;}
        };
    
    var
     add_aux=
      function(t,setter,d,h,index)
       {var bucket=t[1][index];
        
        var hashes=t[2][index];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i)
           {if(i>=sz)
             {var newsz=Pervasives["min"](3*sz/2+3,Sys["max_array_length"]-1);
              
              if(newsz<=sz)
               {Pervasives["failwith"]
                 ("Weak.Make: hash bucket cannot grow more")}
              else
               {}
              
              var newbucket=weak_create(newsz);
              
              var newhashes="unknown primitive:caml_make_vect";
              
              "unknown primitive:caml_weak_blit";
              $$Array["blit"](hashes,0,newhashes,0,sz);
              setter(newbucket,sz,d);
              newhashes[sz]=h,0;
              t[1][index]=newbucket,0;
              t[2][index]=newhashes,0;
              if(sz<=t[3]&&newsz>t[3])
               {t[4]=t[4]+1,0;
                for(var _i=0;_i<=over_limit;_i++){test_shrink_bucket(t)}
                }
              else
               {}
              
              if(t[4]>t[1]["length"]/over_limit)
               {return resize(t);}
              else
               {return 0;}
              }
            else
             {if("unknown primitive:caml_weak_check")
               {return loop(i+1);}
              else
               {setter(bucket,i,d);return hashes[i]=h,0;}
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
                  {return "unknown primitive:caml_weak_set";},
                 /* Some */[0,d],
                 h,
                 get_index(t,h));
        };
    
    var
     find_or=
      function(t,d,ifnotfound)
       {var h=H[2](d);
        
        var index=get_index(t,h);
        
        var bucket=t[1][index];
        
        var hashes=t[2][index];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i)
           {if(i>=sz)
             {return ifnotfound(h,index);}
            else
             {if(h=hashes[i])
               {var match="unknown primitive:caml_weak_get_copy";
                
                var exit;
                
                if(match)
                 {var v=match[1];
                  
                  if(H[1](v,d))
                   {var match$1="unknown primitive:caml_weak_get";
                    
                    if(match$1)
                     {var v$1=match$1[1];return v$1;}
                    else
                     {return loop(i+1);}
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
                      {return "unknown primitive:caml_weak_set";},
                     /* Some */[0,d],
                     h,
                     index);
                   return d;
                   });
        };
    
    var
     find=
      function(t,d){return find_or(t,d,function(h,index){throw Not_found;});};
    
    var
     find_shadow=
      function(t,d,iffound,ifnotfound)
       {var h=H[2](d);
        
        var index=get_index(t,h);
        
        var bucket=t[1][index];
        
        var hashes=t[2][index];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i)
           {if(i>=sz)
             {return ifnotfound;}
            else
             {if(h=hashes[i])
               {var match="unknown primitive:caml_weak_get_copy";
                
                var exit;
                
                if(match)
                 {var v=match[1];
                  
                  if(H[1](v,d)){return iffound(bucket,i);}else{exit=14;}
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
                 function(w,i){return "unknown primitive:caml_weak_set";},
                 0);
        };
    
    var
     mem=
      function(t,d){return find_shadow(t,d,function(w,i){return 1;},0);};
    
    var
     find_all=
      function(t,d)
       {var h=H[2](d);
        
        var index=get_index(t,h);
        
        var bucket=t[1][index];
        
        var hashes=t[2][index];
        
        var sz=length(bucket);
        
        var
         loop=
          function(i,accu)
           {if(i>=sz)
             {return accu;}
            else
             {if(h=hashes[i])
               {var match="unknown primitive:caml_weak_get_copy";
                
                var exit;
                
                if(match)
                 {var v=match[1];
                  
                  if(H[1](v,d))
                   {var match$1="unknown primitive:caml_weak_get";
                    
                    if(match$1)
                     {var v$1=match$1[1];return loop(i+1,/* :: */[0,v$1,accu]);}
                    else
                     {return loop(i+1,accu);}
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
        
        return loop(0,0);
        };
    
    var
     stats=
      function(t)
       {var len=t[1]["length"];
        
        var lens=$$Array["map"](length,t[1]);
        
        $$Array["sort"]
         (function(prim,prim$1){return "unknown primitive:caml_compare";},
          lens);
        var
         totlen=
          $$Array["fold_left"]
           (function(prim,prim$1){return prim+prim$1;},0,lens);
        
        return /* tuple */[0,
                len,
                count(t),
                totlen,
                lens[0],
                lens[len/2],
                lens[len-1]];
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
{"caml_weak_create":
 function(prim){return "unknown primitive:caml_weak_create";},
 "length":length,
 "caml_weak_set":
 function(prim,prim$1,prim$2){return "unknown primitive:caml_weak_set";},
 "caml_weak_get":
 function(prim,prim$1){return "unknown primitive:caml_weak_get";},
 "caml_weak_get_copy":
 function(prim,prim$1){return "unknown primitive:caml_weak_get_copy";},
 "caml_weak_check":
 function(prim,prim$1){return "unknown primitive:caml_weak_check";},
 "fill":fill,
 "caml_weak_blit":
 function(prim,prim$1,prim$2,prim$3,prim$4)
  {return "unknown primitive:caml_weak_blit";},
 "Make":Make};

