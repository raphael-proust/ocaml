// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Random=require("./random.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var hash=function(x){return CamlPrimitive["caml_hash"](10,100,0,x);};

var
 hash_param=
  function(n1,n2,x){return CamlPrimitive["caml_hash"](n1,n2,0,x);};

var
 seeded_hash=
  function(seed,x){return CamlPrimitive["caml_hash"](10,100,seed,x);};

var params;
try
 {params=CamlPrimitive["caml_sys_getenv"]("OCAMLRUNPARAM");}
catch(exn)
 {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
   {try
     {params=CamlPrimitive["caml_sys_getenv"]("CAMLRUNPARAM");}
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {params="";}
      else
       {throw exn$1;}
      }
    }
  else
   {throw exn;}
  }

var randomized_default=$$String["contains"](params,82);

var randomized=[0,randomized_default];

var randomize=function(param){return randomized[1]=/* true */1,0;};

var prng=[246,function(param){return Random["State"][2](/* () */0);}];

var
 power_2_above=
  function(x,n)
   {return x>=n?x:x*2>Sys["max_array_length"]?x:power_2_above(x*2,n);};

var
 create=
  function($staropt$star,initial_size)
   {var random=$staropt$star?$staropt$star[1]:randomized[1];
    
    var s=power_2_above(16,initial_size);
    
    var seed;
    if(random)
     {var tag=CamlPrimitive["caml_obj_tag"](prng);
      
      seed=
      Random["State"][4]
       (tag===250
         ?prng[1]
         :tag===246?CamlinternalLazy["force_lazy_block"](prng):prng);
      }
    else
     {seed=0;}
    
    return /* record */[0,
            0,
            CamlPrimitive["caml_make_vect"](s,/* Empty */0),
            seed,
            s];
    };

var
 clear=
  function(h)
   {h[1]=0;
    var len=/* -1 for tag */h[2]["length"]-1;
    
    for(var i=0;i<=len-1;i++){h[2][i+1]=/* Empty */0}
    return 0;
    };

var
 reset=
  function(h)
   {var len=/* -1 for tag */h[2]["length"]-1;
    
    return /* -1 for tag */h["length"]-1<4||len===h[4]
            ?clear(h)
            :(h[1]=
              0,
              h[2]=
              CamlPrimitive["caml_make_vect"](h[4],/* Empty */0),
              0);
    };

var
 copy=
  function(h){return /* record */[0,h[1],$$Array["copy"](h[2]),h[3],h[4]];};

var length=function(h){return h[1];};

var
 resize=
  function(indexfun,h)
   {var odata=h[2];
    
    var osize=/* -1 for tag */odata["length"]-1;
    
    var nsize=osize*2;
    
    if(nsize<Sys["max_array_length"])
     {var ndata=CamlPrimitive["caml_make_vect"](nsize,/* Empty */0);
      
      h[2]=ndata;
      var
       insert_bucket=
        function(param)
         {if(param)
           {var key=param[1];
            
            insert_bucket(param[3]);
            var nidx=indexfun(h,key);
            
            return ndata[nidx+1]=/* Cons */[0,key,param[2],ndata[nidx+1]],0;
            }
          else
           {return /* () */0;}
          };
      
      for(var i=0;i<=osize-1;i++){insert_bucket(odata[i+1])}
      return 0;
      }
    else
     {return 0;}
    };

var
 key_index=
  function(h,key)
   {return /* -1 for tag */h["length"]-1>=3
            ?CamlPrimitive["caml_hash"](10,100,h[3],key)&
             /* -1 for tag */h[2]["length"]-
             1-
             1
            :CamlPrimitive["caml_hash_univ_param"](10,100,key)%
             /* -1 for tag */(h[2]["length"]-1);
    };

var
 add=
  function(h,key,info)
   {var i=key_index(h,key);
    
    var bucket=/* Cons */[0,key,info,h[2][i+1]];
    
    h[2][i+1]=bucket;
    h[1]=h[1]+1;
    return h[1]>/* -1 for tag */h[2]["length"]-1<<1?resize(key_index,h):0;
    };

var
 remove=
  function(h,key)
   {var
     remove_bucket=
      function(param)
       {if(param)
         {var next=param[3];
          
          var k=param[1];
          
          return CamlPrimitive["caml_compare"](k,key)===0
                  ?(h[1]=h[1]-1,next)
                  :/* Cons */[0,k,param[2],remove_bucket(next)];
          }
        else
         {return /* Empty */0;}
        };
    
    var i=key_index(h,key);
    
    return h[2][i+1]=remove_bucket(h[2][i+1]),0;
    };

var
 find_rec=
  function(key,param)
   {if(param)
     {return CamlPrimitive["caml_compare"](key,param[1])===0
              ?param[2]
              :find_rec(key,param[3]);
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 find=
  function(h,key)
   {var match=h[2][key_index(h,key)+1];
    
    if(match)
     {var rest1=match[3];
      
      if(CamlPrimitive["caml_compare"](key,match[1])===0)
       {return match[2];}
      else
       {if(rest1)
         {var rest2=rest1[3];
          
          if(CamlPrimitive["caml_compare"](key,rest1[1])===0)
           {return rest1[2];}
          else
           {if(rest2)
             {return CamlPrimitive["caml_compare"](key,rest2[1])===0
                      ?rest2[2]
                      :find_rec(key,rest2[3]);
              }
            else
             {throw CamlPrimitive["caml_global_data"]["Not_found"];}
            }
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        }
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 find_all=
  function(h,key)
   {var
     find_in_bucket=
      function(param)
       {if(param)
         {var rest=param[3];
          
          return CamlPrimitive["caml_compare"](param[1],key)===0
                  ?/* :: */[0,param[2],find_in_bucket(rest)]
                  :find_in_bucket(rest);
          }
        else
         {return /* [] */0;}
        };
    
    return find_in_bucket(h[2][key_index(h,key)+1]);
    };

var
 replace=
  function(h,key,info)
   {var
     replace_bucket=
      function(param)
       {if(param)
         {var next=param[3];
          
          var k=param[1];
          
          return CamlPrimitive["caml_compare"](k,key)===0
                  ?/* Cons */[0,key,info,next]
                  :/* Cons */[0,k,param[2],replace_bucket(next)];
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var i=key_index(h,key);
    
    var l=h[2][i+1];
    
    try
     {return h[2][i+1]=replace_bucket(l),0;}
    catch(exn$2)
     {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
       {h[2][i+1]=/* Cons */[0,key,info,l];
        h[1]=h[1]+1;
        return h[1]>/* -1 for tag */h[2]["length"]-1<<1?resize(key_index,h):0;
        }
      else
       {throw exn$2;}
      }
    };

var
 mem=
  function(h,key)
   {var
     mem_in_bucket=
      function(param)
       {return param
                ?CamlPrimitive["caml_compare"](param[1],key)===
                 0||
                 mem_in_bucket(param[3])
                :/* false */0;
        };
    
    return mem_in_bucket(h[2][key_index(h,key)+1]);
    };

var
 iter=
  function(f,h)
   {var
     do_bucket=
      function(param)
       {return param?(f(param[1],param[2]),do_bucket(param[3])):/* () */0;};
    
    var d=h[2];
    
    for(var i=0;i<=/* -1 for tag */d["length"]-1-1;i++){do_bucket(d[i+1])}
    return 0;
    };

var
 fold=
  function(f,h,init)
   {var
     do_bucket=
      function(b,accu){return b?do_bucket(b[3],f(b[1],b[2],accu)):accu;};
    
    var d=h[2];
    
    for(var i=0;i<=/* -1 for tag */d["length"]-1-1;i++)
     {accu=do_bucket(d[i+1],init);}
    
    return init;
    };

var
 bucket_length=
  function(accu,param){return param?bucket_length(accu+1,param[3]):accu;};

var
 stats=
  function(h)
   {var
     mbl=
      $$Array["fold_left"]
       (function(m,b){return Pervasives["max"](m,bucket_length(0,b));},0,h[2]);
    
    var histo=CamlPrimitive["caml_make_vect"](mbl+1,0);
    
    $$Array["iter"]
     (function(b){var l=bucket_length(0,b);return histo[l+1]=histo[l+1]+1,0;},
      h[2]);
    return /* record */[0,h[1],/* -1 for tag */h[2]["length"]-1,mbl,histo];
    };

var
 MakeSeeded=
  function(H)
   {var
     key_index$1=
      function(h,key)
       {return H[2](h[3],key)&/* -1 for tag */h[2]["length"]-1-1;};
    
    var
     add$1=
      function(h,key,info)
       {var i=key_index$1(h,key);
        
        var bucket=/* Cons */[0,key,info,h[2][i+1]];
        
        h[2][i+1]=bucket;
        h[1]=h[1]+1;
        return h[1]>/* -1 for tag */h[2]["length"]-1<<1
                ?resize(key_index$1,h)
                :0;
        };
    
    var
     remove$1=
      function(h,key)
       {var
         remove_bucket=
          function(param)
           {if(param)
             {var next=param[3];
              
              var k=param[1];
              
              return H[1](k,key)
                      ?(h[1]=h[1]-1,next)
                      :/* Cons */[0,k,param[2],remove_bucket(next)];
              }
            else
             {return /* Empty */0;}
            };
        
        var i=key_index$1(h,key);
        
        return h[2][i+1]=remove_bucket(h[2][i+1]),0;
        };
    
    var
     find_rec$1=
      function(key,param)
       {if(param)
         {return H[1](key,param[1])?param[2]:find_rec$1(key,param[3]);}
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     find$1=
      function(h,key)
       {var match=h[2][key_index$1(h,key)+1];
        
        if(match)
         {var rest1=match[3];
          
          if(H[1](key,match[1]))
           {return match[2];}
          else
           {if(rest1)
             {var rest2=rest1[3];
              
              if(H[1](key,rest1[1]))
               {return rest1[2];}
              else
               {if(rest2)
                 {return H[1](key,rest2[1])?rest2[2]:find_rec$1(key,rest2[3]);
                  }
                else
                 {throw CamlPrimitive["caml_global_data"]["Not_found"];}
                }
              }
            else
             {throw CamlPrimitive["caml_global_data"]["Not_found"];}
            }
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     find_all$1=
      function(h,key)
       {var
         find_in_bucket=
          function(param)
           {if(param)
             {var rest=param[3];
              
              return H[1](param[1],key)
                      ?/* :: */[0,param[2],find_in_bucket(rest)]
                      :find_in_bucket(rest);
              }
            else
             {return /* [] */0;}
            };
        
        return find_in_bucket(h[2][key_index$1(h,key)+1]);
        };
    
    var
     replace$1=
      function(h,key,info)
       {var
         replace_bucket=
          function(param)
           {if(param)
             {var next=param[3];
              
              var k=param[1];
              
              return H[1](k,key)
                      ?/* Cons */[0,key,info,next]
                      :/* Cons */[0,k,param[2],replace_bucket(next)];
              }
            else
             {throw CamlPrimitive["caml_global_data"]["Not_found"];}
            };
        
        var i=key_index$1(h,key);
        
        var l=h[2][i+1];
        
        try
         {return h[2][i+1]=replace_bucket(l),0;}
        catch(exn$2)
         {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
           {h[2][i+1]=/* Cons */[0,key,info,l];
            h[1]=h[1]+1;
            return h[1]>/* -1 for tag */h[2]["length"]-1<<1
                    ?resize(key_index$1,h)
                    :0;
            }
          else
           {throw exn$2;}
          }
        };
    
    var
     mem$1=
      function(h,key)
       {var
         mem_in_bucket=
          function(param)
           {return param
                    ?H[1](param[1],key)||mem_in_bucket(param[3])
                    :/* false */0;
            };
        
        return mem_in_bucket(h[2][key_index$1(h,key)+1]);
        };
    
    return [0,
            create,
            clear,
            reset,
            copy,
            add$1,
            remove$1,
            find$1,
            find_all$1,
            replace$1,
            mem$1,
            iter,
            fold,
            length,
            stats];
    };

var
 Make=
  function(H)
   {var equal=H[1];
    
    var hash$1=function(seed,x){return H[2](x);};
    
    var include=MakeSeeded([0,equal,hash$1]);
    
    var create$1=include[1];
    
    var
     create$2=
      function(sz){return create$1([/* Some */0,/* false */0],sz);};
    
    return [0,
            create$2,
            include[2],
            include[3],
            include[4],
            include[5],
            include[6],
            include[7],
            include[8],
            include[9],
            include[10],
            include[11],
            include[12],
            include[13],
            include[14]];
    };

module["exports"]=
{"create":create,
 "clear":clear,
 "reset":reset,
 "copy":copy,
 "add":add,
 "find":find,
 "find_all":find_all,
 "mem":mem,
 "remove":remove,
 "replace":replace,
 "iter":iter,
 "fold":fold,
 "length":length,
 "randomize":randomize,
 "stats":stats,
 "Make":Make,
 "MakeSeeded":MakeSeeded,
 "hash":hash,
 "seeded_hash":seeded_hash,
 "hash_param":hash_param,
 "seeded_hash_param":
 function(prim,prim$1,prim$2,prim$3)
  {return CamlPrimitive["caml_hash"](prim,prim$1,prim$2,prim$3);}};

