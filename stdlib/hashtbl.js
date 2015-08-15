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

try
 {var params=CamlPrimitive["caml_sys_getenv"]("OCAMLRUNPARAM");}
catch(exn)
 {if(exn===Not_found)
   {try
     {var params=CamlPrimitive["caml_sys_getenv"]("CAMLRUNPARAM");}
    catch(exn$1){if(exn$1===Not_found){var params="";}else{throw exn$1;}}
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
   {if(x>=n)
     {return x;}
    else
     {if(x*2>Sys["max_array_length"])
       {return x;}
      else
       {return power_2_above(x*2,n);}
      }
    };

var
 create=
  function($staropt$star,initial_size)
   {if($staropt$star)
     {var $starsth$star=$staropt$star[1];var random=$starsth$star;}
    else
     {var random=randomized[1];}
    
    var s=power_2_above(16,initial_size);
    
    if(random)
     {var lzarg=prng;
      
      var tag=CamlPrimitive["caml_obj_tag"](lzarg);
      
      var
       seed=
        Random["State"][4]
         (tag===250
           ?lzarg[1]
           :tag===246?CamlinternalLazy["force_lazy_block"](lzarg):lzarg);
      }
    else
     {var seed=0;}
    
    return /* record */[0,
            0,
            CamlPrimitive["caml_make_vect"](s,/* Empty */0),
            seed,
            s];
    };

var
 clear=
  function(h)
   {h[1]=0,0;
    var len=h[2]["length"];
    
    for(var i=0;i<=len-1;i++){h[2][i]=/* Empty */0,0}
    };

var
 reset=
  function(h)
   {var len=h[2]["length"];
    
    if(h["length"]<4||len===h[4])
     {return clear(h);}
    else
     {h[1]=0,0;
      return h[2]=CamlPrimitive["caml_make_vect"](h[4],/* Empty */0),0;
      }
    };

var
 copy=
  function(h)
   {var init=h;
    
    return /* record */[0,init[1],$$Array["copy"](h[2]),init[3],init[4]];
    };

var length=function(h){return h[1];};

var
 resize=
  function(indexfun,h)
   {var odata=h[2];
    
    var osize=odata["length"];
    
    var nsize=osize*2;
    
    if(nsize<Sys["max_array_length"])
     {var ndata=CamlPrimitive["caml_make_vect"](nsize,/* Empty */0);
      
      h[2]=ndata,0;
      var
       insert_bucket=
        function(param)
         {if(param)
           {var rest=param[3];
            
            var data=param[2];
            
            var key=param[1];
            
            insert_bucket(rest);
            var nidx=indexfun(h,key);
            
            return ndata[nidx]=/* Cons */[0,key,data,ndata[nidx]],0;
            }
          else
           {return /* () */0;}
          };
      
      for(var i=0;i<=osize-1;i++){insert_bucket(odata[i])}
      }
    else
     {return 0;}
    };

var
 key_index=
  function(h,key)
   {if(h["length"]>=3)
     {return CamlPrimitive["caml_hash"](10,100,h[3],key)&h[2]["length"]-1;}
    else
     {return CamlPrimitive["caml_hash_univ_param"](10,100,key)%h[2]["length"];
      }
    };

var
 add=
  function(h,key,info)
   {var i=key_index(h,key);
    
    var bucket=/* Cons */[0,key,info,h[2][i]];
    
    h[2][i]=bucket,0;
    h[1]=h[1]+1,0;
    if(h[1]>h[2]["length"]<<1){return resize(key_index,h);}else{return 0;}
    };

var
 remove=
  function(h,key)
   {var
     remove_bucket=
      function(param)
       {if(param)
         {var next=param[3];
          
          var i=param[2];
          
          var k=param[1];
          
          if(CamlPrimitive["caml_compare"](k,key)===0)
           {h[1]=h[1]-1,0;return next;}
          else
           {return /* Cons */[0,k,i,remove_bucket(next)];}
          }
        else
         {return /* Empty */0;}
        };
    
    var i=key_index(h,key);
    
    return h[2][i]=remove_bucket(h[2][i]),0;
    };

var
 find_rec=
  function(key,param)
   {if(param)
     {var rest=param[3];
      
      var d=param[2];
      
      var k=param[1];
      
      if(CamlPrimitive["caml_compare"](key,k)===0)
       {return d;}
      else
       {return find_rec(key,rest);}
      }
    else
     {throw Not_found;}
    };

var
 find=
  function(h,key)
   {var match=h[2][key_index(h,key)];
    
    if(match)
     {var rest1=match[3];
      
      var d1=match[2];
      
      var k1=match[1];
      
      if(CamlPrimitive["caml_compare"](key,k1)===0)
       {return d1;}
      else
       {if(rest1)
         {var rest2=rest1[3];
          
          var d2=rest1[2];
          
          var k2=rest1[1];
          
          if(CamlPrimitive["caml_compare"](key,k2)===0)
           {return d2;}
          else
           {if(rest2)
             {var rest3=rest2[3];
              
              var d3=rest2[2];
              
              var k3=rest2[1];
              
              if(CamlPrimitive["caml_compare"](key,k3)===0)
               {return d3;}
              else
               {return find_rec(key,rest3);}
              }
            else
             {throw Not_found;}
            }
          }
        else
         {throw Not_found;}
        }
      }
    else
     {throw Not_found;}
    };

var
 find_all=
  function(h,key)
   {var
     find_in_bucket=
      function(param)
       {if(param)
         {var rest=param[3];
          
          var d=param[2];
          
          var k=param[1];
          
          if(CamlPrimitive["caml_compare"](k,key)===0)
           {return /* :: */[0,d,find_in_bucket(rest)];}
          else
           {return find_in_bucket(rest);}
          }
        else
         {return /* [] */0;}
        };
    
    return find_in_bucket(h[2][key_index(h,key)]);
    };

var
 replace=
  function(h,key,info)
   {var
     replace_bucket=
      function(param)
       {if(param)
         {var next=param[3];
          
          var i=param[2];
          
          var k=param[1];
          
          if(CamlPrimitive["caml_compare"](k,key)===0)
           {return /* Cons */[0,key,info,next];}
          else
           {return /* Cons */[0,k,i,replace_bucket(next)];}
          }
        else
         {throw Not_found;}
        };
    
    var i=key_index(h,key);
    
    var l=h[2][i];
    
    try
     {return h[2][i]=replace_bucket(l),0;}
    catch(exn$2)
     {if(exn$2===Not_found)
       {h[2][i]=/* Cons */[0,key,info,l],0;
        h[1]=h[1]+1,0;
        if(h[1]>h[2]["length"]<<1){return resize(key_index,h);}else{return 0;}
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
       {if(param)
         {var rest=param[3];
          
          var k=param[1];
          
          return CamlPrimitive["caml_compare"](k,key)===
                 0||
                 mem_in_bucket(rest);
          }
        else
         {return /* false */0;}
        };
    
    return mem_in_bucket(h[2][key_index(h,key)]);
    };

var
 iter=
  function(f,h)
   {var
     do_bucket=
      function(param)
       {if(param)
         {var rest=param[3];
          
          var d=param[2];
          
          var k=param[1];
          
          f(k,d);
          return do_bucket(rest);
          }
        else
         {return /* () */0;}
        };
    
    var d=h[2];
    
    for(var i=0;i<=d["length"]-1;i++){do_bucket(d[i])}
    };

var
 fold=
  function(f,h,init)
   {var
     do_bucket=
      function(b,accu)
       {if(b)
         {var rest=b[3];
          
          var d=b[2];
          
          var k=b[1];
          
          return do_bucket(rest,f(k,d,accu));
          }
        else
         {return accu;}
        };
    
    var d=h[2];
    
    var accu=[0,init];
    
    for(var i=0;i<=d["length"]-1;i++){accu[1]=do_bucket(d[i],accu[1]),0}
    
    return accu[1];
    };

var
 bucket_length=
  function(accu,param)
   {if(param)
     {var rest=param[3];return bucket_length(accu+1,rest);}
    else
     {return accu;}
    };

var
 stats=
  function(h)
   {var
     mbl=
      $$Array["fold_left"]
       (function(m,b){return Pervasives["max"](m,bucket_length(0,b));},0,h[2]);
    
    var histo=CamlPrimitive["caml_make_vect"](mbl+1,0);
    
    $$Array["iter"]
     (function(b){var l=bucket_length(0,b);return histo[l]=histo[l]+1,0;},
      h[2]);
    return /* record */[0,h[1],h[2]["length"],mbl,histo];
    };

var
 MakeSeeded=
  function(H)
   {var create$1=create;
    
    var clear$1=clear;
    
    var reset$1=reset;
    
    var copy$1=copy;
    
    var key_index$1=function(h,key){return H[2](h[3],key)&h[2]["length"]-1;};
    
    var
     add$1=
      function(h,key,info)
       {var i=key_index$1(h,key);
        
        var bucket=/* Cons */[0,key,info,h[2][i]];
        
        h[2][i]=bucket,0;
        h[1]=h[1]+1,0;
        if(h[1]>h[2]["length"]<<1)
         {return resize(key_index$1,h);}
        else
         {return 0;}
        };
    
    var
     remove$1=
      function(h,key)
       {var
         remove_bucket=
          function(param)
           {if(param)
             {var next=param[3];
              
              var i=param[2];
              
              var k=param[1];
              
              if(H[1](k,key))
               {h[1]=h[1]-1,0;return next;}
              else
               {return /* Cons */[0,k,i,remove_bucket(next)];}
              }
            else
             {return /* Empty */0;}
            };
        
        var i=key_index$1(h,key);
        
        return h[2][i]=remove_bucket(h[2][i]),0;
        };
    
    var
     find_rec$1=
      function(key,param)
       {if(param)
         {var rest=param[3];
          
          var d=param[2];
          
          var k=param[1];
          
          if(H[1](key,k)){return d;}else{return find_rec$1(key,rest);}
          }
        else
         {throw Not_found;}
        };
    
    var
     find$1=
      function(h,key)
       {var match=h[2][key_index$1(h,key)];
        
        if(match)
         {var rest1=match[3];
          
          var d1=match[2];
          
          var k1=match[1];
          
          if(H[1](key,k1))
           {return d1;}
          else
           {if(rest1)
             {var rest2=rest1[3];
              
              var d2=rest1[2];
              
              var k2=rest1[1];
              
              if(H[1](key,k2))
               {return d2;}
              else
               {if(rest2)
                 {var rest3=rest2[3];
                  
                  var d3=rest2[2];
                  
                  var k3=rest2[1];
                  
                  if(H[1](key,k3))
                   {return d3;}
                  else
                   {return find_rec$1(key,rest3);}
                  }
                else
                 {throw Not_found;}
                }
              }
            else
             {throw Not_found;}
            }
          }
        else
         {throw Not_found;}
        };
    
    var
     find_all$1=
      function(h,key)
       {var
         find_in_bucket=
          function(param)
           {if(param)
             {var rest=param[3];
              
              var d=param[2];
              
              var k=param[1];
              
              if(H[1](k,key))
               {return /* :: */[0,d,find_in_bucket(rest)];}
              else
               {return find_in_bucket(rest);}
              }
            else
             {return /* [] */0;}
            };
        
        return find_in_bucket(h[2][key_index$1(h,key)]);
        };
    
    var
     replace$1=
      function(h,key,info)
       {var
         replace_bucket=
          function(param)
           {if(param)
             {var next=param[3];
              
              var i=param[2];
              
              var k=param[1];
              
              if(H[1](k,key))
               {return /* Cons */[0,key,info,next];}
              else
               {return /* Cons */[0,k,i,replace_bucket(next)];}
              }
            else
             {throw Not_found;}
            };
        
        var i=key_index$1(h,key);
        
        var l=h[2][i];
        
        try
         {return h[2][i]=replace_bucket(l),0;}
        catch(exn$2)
         {if(exn$2===Not_found)
           {h[2][i]=/* Cons */[0,key,info,l],0;
            h[1]=h[1]+1,0;
            if(h[1]>h[2]["length"]<<1)
             {return resize(key_index$1,h);}
            else
             {return 0;}
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
           {if(param)
             {var rest=param[3];
              
              var k=param[1];
              
              return H[1](k,key)||mem_in_bucket(rest);
              }
            else
             {return /* false */0;}
            };
        
        return mem_in_bucket(h[2][key_index$1(h,key)]);
        };
    
    var iter$1=iter;
    
    var fold$1=fold;
    
    var length$1=length;
    
    var stats$1=stats;
    
    return [0,
            create$1,
            clear$1,
            reset$1,
            copy$1,
            add$1,
            remove$1,
            find$1,
            find_all$1,
            replace$1,
            mem$1,
            iter$1,
            fold$1,
            length$1,
            stats$1];
    };

var
 Make=
  function(H)
   {var equal=H[1];
    
    var hash$1=function(seed,x){return H[2](x);};
    
    var include=MakeSeeded([0,equal,hash$1]);
    
    var create$1=include[1];
    
    var clear$1=include[2];
    
    var reset$1=include[3];
    
    var copy$1=include[4];
    
    var add$1=include[5];
    
    var remove$1=include[6];
    
    var find$1=include[7];
    
    var find_all$1=include[8];
    
    var replace$1=include[9];
    
    var mem$1=include[10];
    
    var iter$1=include[11];
    
    var fold$1=include[12];
    
    var length$1=include[13];
    
    var stats$1=include[14];
    
    var
     create$2=
      function(sz){return create$1([/* Some */0,/* false */0],sz);};
    
    return [0,
            create$2,
            clear$1,
            reset$1,
            copy$1,
            add$1,
            remove$1,
            find$1,
            find_all$1,
            replace$1,
            mem$1,
            iter$1,
            fold$1,
            length$1,
            stats$1];
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
 "caml_hash":
 function(prim,prim,prim,prim)
  {return CamlPrimitive["caml_hash"](prim$1,prim$2,prim$3,prim);}};

