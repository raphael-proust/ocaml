// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");


var
 Make=
  function(Ord)
   {var
     height=
      function(param){if(param){var h=param[5];return h;}else{return 0;}};
    
    var
     create=
      function(l,x,d,r)
       {var hl=height(l);
        
        var hr=height(r);
        
        return /* Node */[0,l,x,d,r,hl>=hr?hl+1:hr+1];
        };
    
    var singleton=function(x,d){return /* Node */[0,0,x,d,0,1];};
    
    var
     bal=
      function(l,x,d,r)
       {if(l){var h=l[5];var hl=h;}else{var hl=0;}
        
        if(r){var h$1=r[5];var hr=h$1;}else{var hr=0;}
        
        if(hl>hr+2)
         {if(l)
           {var lr=l[4];
            
            var ld=l[3];
            
            var lv=l[2];
            
            var ll=l[1];
            
            if(height(ll)>=height(lr))
             {return create(ll,lv,ld,create(lr,x,d,r));}
            else
             {if(lr)
               {var lrr=lr[4];
                
                var lrd=lr[3];
                
                var lrv=lr[2];
                
                var lrl=lr[1];
                
                return create(create(ll,lv,ld,lrl),lrv,lrd,create(lrr,x,d,r));
                }
              else
               {return Pervasives["invalid_arg"]("Map.bal");}
              }
            }
          else
           {return Pervasives["invalid_arg"]("Map.bal");}
          }
        else
         {if(hr>hl+2)
           {if(r)
             {var rr=r[4];
              
              var rd=r[3];
              
              var rv=r[2];
              
              var rl=r[1];
              
              if(height(rr)>=height(rl))
               {return create(create(l,x,d,rl),rv,rd,rr);}
              else
               {if(rl)
                 {var rlr=rl[4];
                  
                  var rld=rl[3];
                  
                  var rlv=rl[2];
                  
                  var rll=rl[1];
                  
                  return create
                          (create(l,x,d,rll),rlv,rld,create(rlr,rv,rd,rr));
                  }
                else
                 {return Pervasives["invalid_arg"]("Map.bal");}
                }
              }
            else
             {return Pervasives["invalid_arg"]("Map.bal");}
            }
          else
           {return /* Node */[0,l,x,d,r,hl>=hr?hl+1:hr+1];}
          }
        };
    
    var empty=0;
    
    var is_empty=function(param){if(param){return 0;}else{return 1;}};
    
    var
     add=
      function(x,data,param)
       {if(param)
         {var h=param[5];
          
          var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c=0)
           {return /* Node */[0,l,x,data,r,h];}
          else
           {if(c<0)
             {return bal(add(x,data,l),v,d,r);}
            else
             {return bal(l,v,d,add(x,data,r));}
            }
          }
        else
         {return /* Node */[0,0,x,data,0,1];}
        };
    
    var
     find=
      function(x,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c=0){return d;}else{return find(x,c<0?l:r);}
          }
        else
         {throw Not_found;}
        };
    
    var
     mem=
      function(x,param)
       {if(param)
         {var r=param[4];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          return (c=0)||mem(x,c<0?l:r);
          }
        else
         {return 0;}
        };
    
    var
     min_binding=
      function(param)
       {if(param)
         {var l=param[1];
          
          if(l)
           {return min_binding(l);}
          else
           {var d=param[3];var x=param[2];return /* tuple */[0,x,d];}
          }
        else
         {throw Not_found;}
        };
    
    var
     max_binding=
      function(param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var x=param[2];
          
          if(r){return max_binding(r);}else{return /* tuple */[0,x,d];}
          }
        else
         {throw Not_found;}
        };
    
    var
     remove_min_binding=
      function(param)
       {if(param)
         {var l=param[1];
          
          if(l)
           {var r=param[4];
            
            var d=param[3];
            
            var x=param[2];
            
            return bal(remove_min_binding(l),x,d,r);
            }
          else
           {var r$1=param[4];return r$1;}
          }
        else
         {return Pervasives["invalid_arg"]("Map.remove_min_elt");}
        };
    
    var
     merge=
      function(t1,t2)
       {var match=t1;
        
        var match$1=t2;
        
        if(match)
         {if(match$1)
           {var match$2=min_binding(t2);
            
            var d=match$2[2];
            
            var x=match$2[1];
            
            return bal(t1,x,d,remove_min_binding(t2));
            }
          else
           {var t=match;return t;}
          }
        else
         {var t$1=match$1;return t$1;}
        };
    
    var
     remove=
      function(x,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c=0)
           {return merge(l,r);}
          else
           {if(c<0)
             {return bal(remove(x,l),v,d,r);}
            else
             {return bal(l,v,d,remove(x,r));}
            }
          }
        else
         {return 0;}
        };
    
    var
     iter=
      function(f,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          iter(f,l);
          f(v,d);
          return iter(f,r);
          }
        else
         {return 0;}
        };
    
    var
     map=
      function(f,param)
       {if(param)
         {var h=param[5];
          
          var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var l$prime=map(f,l);
          
          var d$prime=f(d);
          
          var r$prime=map(f,r);
          
          return /* Node */[0,l$prime,v,d$prime,r$prime,h];
          }
        else
         {return 0;}
        };
    
    var
     mapi=
      function(f,param)
       {if(param)
         {var h=param[5];
          
          var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var l$prime=mapi(f,l);
          
          var d$prime=f(v,d);
          
          var r$prime=mapi(f,r);
          
          return /* Node */[0,l$prime,v,d$prime,r$prime,h];
          }
        else
         {return 0;}
        };
    
    var
     fold=
      function(f,m,accu)
       {if(m)
         {var r=m[4];
          
          var d=m[3];
          
          var v=m[2];
          
          var l=m[1];
          
          return fold(f,r,f(v,d,fold(f,l,accu)));
          }
        else
         {return accu;}
        };
    
    var
     for_all=
      function(p,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          return p(v,d)&&for_all(p,l)&&for_all(p,r);
          }
        else
         {return 1;}
        };
    
    var
     exists=
      function(p,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          return p(v,d)||exists(p,l)||exists(p,r);
          }
        else
         {return 0;}
        };
    
    var
     add_min_binding=
      function(k,v,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var x=param[2];
          
          var l=param[1];
          
          return bal(add_min_binding(k,v,l),x,d,r);
          }
        else
         {return singleton(k,v);}
        };
    
    var
     add_max_binding=
      function(k,v,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var x=param[2];
          
          var l=param[1];
          
          return bal(l,x,d,add_max_binding(k,v,r));
          }
        else
         {return singleton(k,v);}
        };
    
    var
     join=
      function(l,v,d,r)
       {var match=l;
        
        var match$1=r;
        
        if(match)
         {if(match$1)
           {var rh=match$1[5];
            
            var rr=match$1[4];
            
            var rd=match$1[3];
            
            var rv=match$1[2];
            
            var rl=match$1[1];
            
            var lh=match[5];
            
            var lr=match[4];
            
            var ld=match[3];
            
            var lv=match[2];
            
            var ll=match[1];
            
            if(lh>rh+2)
             {return bal(ll,lv,ld,join(lr,v,d,r));}
            else
             {if(rh>lh+2)
               {return bal(join(l,v,d,rl),rv,rd,rr);}
              else
               {return create(l,v,d,r);}
              }
            }
          else
           {return add_max_binding(v,d,l);}
          }
        else
         {return add_min_binding(v,d,r);}
        };
    
    var
     concat=
      function(t1,t2)
       {var match=t1;
        
        var match$1=t2;
        
        if(match)
         {if(match$1)
           {var match$2=min_binding(t2);
            
            var d=match$2[2];
            
            var x=match$2[1];
            
            return join(t1,x,d,remove_min_binding(t2));
            }
          else
           {var t=match;return t;}
          }
        else
         {var t$1=match$1;return t$1;}
        };
    
    var
     concat_or_join=
      function(t1,v,d,t2)
       {if(d)
         {var d$1=d[1];return join(t1,v,d$1,t2);}
        else
         {return concat(t1,t2);}
        };
    
    var
     split=
      function(x,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c=0)
           {return /* tuple */[0,l,/* Some */[0,d],r];}
          else
           {if(c<0)
             {var match=split(x,l);
              
              var rl=match[3];
              
              var pres=match[2];
              
              var ll=match[1];
              
              return /* tuple */[0,ll,pres,join(rl,v,d,r)];
              }
            else
             {var match$1=split(x,r);
              
              var rr=match$1[3];
              
              var pres$1=match$1[2];
              
              var lr=match$1[1];
              
              return /* tuple */[0,join(l,v,d,lr),pres$1,rr];
              }
            }
          }
        else
         {return [0,0,0,0];}
        };
    
    var
     merge$1=
      function(f,s1,s2)
       {var match=s1;
        
        var match$1=s2;
        
        var exit;
        
        if(match)
         {var h1=match[5];
          
          var r1=match[4];
          
          var d1=match[3];
          
          var v1=match[2];
          
          var l1=match[1];
          
          if(h1>=height(s2))
           {var match$2=split(v1,s2);
            
            var r2=match$2[3];
            
            var d2=match$2[2];
            
            var l2=match$2[1];
            
            return concat_or_join
                    (merge$1(f,l1,l2),
                     v1,
                     f(v1,/* Some */[0,d1],d2),
                     merge$1(f,r1,r2));
            }
          else
           {exit=20;}
          }
        else
         {if(match$1){exit=20;}else{return 0;}}
        
        switch(exit)
         {case 20:
           if(match$1)
            {var r2$1=match$1[4];
             
             var d2$1=match$1[3];
             
             var v2=match$1[2];
             
             var l2$1=match$1[1];
             
             var match$3=split(v2,s1);
             
             var r1$1=match$3[3];
             
             var d1$1=match$3[2];
             
             var l1$1=match$3[1];
             
             return concat_or_join
                     (merge$1(f,l1$1,l2$1),
                      v2,
                      f(v2,d1$1,/* Some */[0,d2$1]),
                      merge$1(f,r1$1,r2$1));
             }
           else
            {throw [0,Assert_failure,[0,"map.ml",270,10]];}
           
          }
        };
    
    var
     filter=
      function(p,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var l$prime=filter(p,l);
          
          var pvd=p(v,d);
          
          var r$prime=filter(p,r);
          
          if(pvd)
           {return join(l$prime,v,d,r$prime);}
          else
           {return concat(l$prime,r$prime);}
          }
        else
         {return 0;}
        };
    
    var
     partition=
      function(p,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var match=partition(p,l);
          
          var lf=match[2];
          
          var lt=match[1];
          
          var pvd=p(v,d);
          
          var match$1=partition(p,r);
          
          var rf=match$1[2];
          
          var rt=match$1[1];
          
          if(pvd)
           {return /* tuple */[0,join(lt,v,d,rt),concat(lf,rf)];}
          else
           {return /* tuple */[0,concat(lt,rt),join(lf,v,d,rf)];}
          }
        else
         {return [0,0,0];}
        };
    
    var
     cons_enum=
      function(m,e)
       {if(m)
         {var r=m[4];
          
          var d=m[3];
          
          var v=m[2];
          
          var l=m[1];
          
          return cons_enum(l,/* More */[0,v,d,r,e]);
          }
        else
         {return e;}
        };
    
    var
     compare=
      function(cmp,m1,m2)
       {var
         compare_aux=
          function(e1,e2)
           {var match=e1;
            
            var match$1=e2;
            
            if(match)
             {if(match$1)
               {var e2$1=match$1[4];
                
                var r2=match$1[3];
                
                var d2=match$1[2];
                
                var v2=match$1[1];
                
                var e1$1=match[4];
                
                var r1=match[3];
                
                var d1=match[2];
                
                var v1=match[1];
                
                var c=Ord[1](v1,v2);
                
                if(c!=0)
                 {return c;}
                else
                 {var c$1=cmp(d1,d2);
                  
                  if(c$1!=0)
                   {return c$1;}
                  else
                   {return compare_aux(cons_enum(r1,e1$1),cons_enum(r2,e2$1));}
                  }
                }
              else
               {return 1;}
              }
            else
             {if(match$1){return -1;}else{return 0;}}
            };
        
        return compare_aux(cons_enum(m1,0),cons_enum(m2,0));
        };
    
    var
     equal=
      function(cmp,m1,m2)
       {var
         equal_aux=
          function(e1,e2)
           {var match=e1;
            
            var match$1=e2;
            
            if(match)
             {if(match$1)
               {var e2$1=match$1[4];
                
                var r2=match$1[3];
                
                var d2=match$1[2];
                
                var v2=match$1[1];
                
                var e1$1=match[4];
                
                var r1=match[3];
                
                var d1=match[2];
                
                var v1=match[1];
                
                return (Ord[1](v1,v2)=0)&&
                       cmp(d1,d2)&&
                       equal_aux(cons_enum(r1,e1$1),cons_enum(r2,e2$1));
                }
              else
               {return 0;}
              }
            else
             {if(match$1){return 0;}else{return 1;}}
            };
        
        return equal_aux(cons_enum(m1,0),cons_enum(m2,0));
        };
    
    var
     cardinal=
      function(param)
       {if(param)
         {var r=param[4];var l=param[1];return cardinal(l)+1+cardinal(r);}
        else
         {return 0;}
        };
    
    var
     bindings_aux=
      function(accu,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          return bindings_aux
                  (/* :: */[0,/* tuple */[0,v,d],bindings_aux(accu,r)],l);
          }
        else
         {return accu;}
        };
    
    var bindings=function(s){return bindings_aux(0,s);};
    
    var choose=min_binding;
    
    return [0,
            height,
            create,
            singleton,
            bal,
            empty,
            is_empty,
            add,
            find,
            mem,
            min_binding,
            max_binding,
            remove_min_binding,
            remove,
            iter,
            map,
            mapi,
            fold,
            for_all,
            exists,
            add_min_binding,
            add_max_binding,
            join,
            concat,
            concat_or_join,
            split,
            merge$1,
            filter,
            partition,
            cons_enum,
            compare,
            equal,
            cardinal,
            bindings_aux,
            bindings,
            choose];
    };

module["exports"]=
{"Make":
 function(funarg)
  {var $$let=Make(funarg);
   
   return [0,
           $$let[5],
           $$let[6],
           $$let[9],
           $$let[7],
           $$let[3],
           $$let[13],
           $$let[26],
           $$let[30],
           $$let[31],
           $$let[14],
           $$let[17],
           $$let[18],
           $$let[19],
           $$let[27],
           $$let[28],
           $$let[32],
           $$let[34],
           $$let[10],
           $$let[11],
           $$let[35],
           $$let[25],
           $$let[8],
           $$let[15],
           $$let[16]];
   }};

