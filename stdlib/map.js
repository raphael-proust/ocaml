// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");


var
 Make=
  function(Ord)
   {var height=function(param){return param?param[5]:0;};
    
    var
     create=
      function(l,x,d,r)
       {var hl=height(l);
        
        var hr=height(r);
        
        return /* Node */[0,l,x,d,r,hl>=hr?hl+1:hr+1];
        };
    
    var
     singleton=
      function(x,d){return /* Node */[0,/* Empty */0,x,d,/* Empty */0,1];};
    
    var
     bal=
      function(l,x,d,r)
       {var hl=l?l[5]:0;
        
        var hr=r?r[5]:0;
        
        if(hl>hr+2)
         {if(l)
           {var lr=l[4];
            
            var ld=l[3];
            
            var lv=l[2];
            
            var ll=l[1];
            
            return height(ll)>=height(lr)
                    ?create(ll,lv,ld,create(lr,x,d,r))
                    :lr
                      ?create
                        (create(ll,lv,ld,lr[1]),lr[2],lr[3],create(lr[4],x,d,r))
                      :Pervasives["invalid_arg"]("Map.bal");
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
              
              return height(rr)>=height(rl)
                      ?create(create(l,x,d,rl),rv,rd,rr)
                      :rl
                        ?create
                          (create(l,x,d,rl[1]),rl[2],rl[3],create(rl[4],rv,rd,rr))
                        :Pervasives["invalid_arg"]("Map.bal");
              }
            else
             {return Pervasives["invalid_arg"]("Map.bal");}
            }
          else
           {return /* Node */[0,l,x,d,r,hl>=hr?hl+1:hr+1];}
          }
        };
    
    var empty=/* Empty */0;
    
    var is_empty=function(param){return param?/* false */0:/* true */1;};
    
    var
     add=
      function(x,data,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          return c===0
                  ?/* Node */[0,l,x,data,r,param[5]]
                  :c<0?bal(add(x,data,l),v,d,r):bal(l,v,d,add(x,data,r));
          }
        else
         {return /* Node */[0,/* Empty */0,x,data,/* Empty */0,1];}
        };
    
    var
     find=
      function(x,param)
       {if(param)
         {var c=Ord[1](x,param[2]);
          
          return c===0?param[3]:find(x,c<0?param[1]:param[4]);
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     mem=
      function(x,param)
       {if(param)
         {var c=Ord[1](x,param[2]);
          
          return c===0||mem(x,c<0?param[1]:param[4]);
          }
        else
         {return /* false */0;}
        };
    
    var
     min_binding=
      function(param)
       {if(param)
         {var l=param[1];
          
          return l?min_binding(l):/* tuple */[0,param[2],param[3]];
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     max_binding=
      function(param)
       {if(param)
         {var r=param[4];
          
          return r?max_binding(r):/* tuple */[0,param[2],param[3]];
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     remove_min_binding=
      function(param)
       {if(param)
         {var l=param[1];
          
          return l
                  ?bal(remove_min_binding(l),param[2],param[3],param[4])
                  :param[4];
          }
        else
         {return Pervasives["invalid_arg"]("Map.remove_min_elt");}
        };
    
    var
     merge=
      function(t1,t2)
       {if(t1)
         {if(t2)
           {var match=min_binding(t2);
            
            return bal(t1,match[1],match[2],remove_min_binding(t2));
            }
          else
           {return t1;}
          }
        else
         {return t2;}
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
          
          return c===0
                  ?merge(l,r)
                  :c<0?bal(remove(x,l),v,d,r):bal(l,v,d,remove(x,r));
          }
        else
         {return /* Empty */0;}
        };
    
    var
     iter=
      function(f,param)
       {return param
                ?(iter(f,param[1]),f(param[2],param[3]),iter(f,param[4]))
                :/* () */0;
        };
    
    var
     map=
      function(f,param)
       {if(param)
         {var l$prime=map(f,param[1]);
          
          var d$prime=f(param[3]);
          
          var r$prime=map(f,param[4]);
          
          return /* Node */[0,l$prime,param[2],d$prime,r$prime,param[5]];
          }
        else
         {return /* Empty */0;}
        };
    
    var
     mapi=
      function(f,param)
       {if(param)
         {var v=param[2];
          
          var l$prime=mapi(f,param[1]);
          
          var d$prime=f(v,param[3]);
          
          var r$prime=mapi(f,param[4]);
          
          return /* Node */[0,l$prime,v,d$prime,r$prime,param[5]];
          }
        else
         {return /* Empty */0;}
        };
    
    var
     fold=
      function(f,m,accu)
       {return m?fold(f,m[4],f(m[2],m[3],fold(f,m[1],accu))):accu;};
    
    var
     for_all=
      function(p,param)
       {return param
                ?p(param[2],param[3])&&
                 for_all(p,param[1])&&
                 for_all(p,param[4])
                :/* true */1;
        };
    
    var
     exists=
      function(p,param)
       {return param
                ?p(param[2],param[3])||exists(p,param[1])||exists(p,param[4])
                :/* false */0;
        };
    
    var
     add_min_binding=
      function(k,v,param)
       {return param
                ?bal(add_min_binding(k,v,param[1]),param[2],param[3],param[4])
                :singleton(k,v);
        };
    
    var
     add_max_binding=
      function(k,v,param)
       {return param
                ?bal(param[1],param[2],param[3],add_max_binding(k,v,param[4]))
                :singleton(k,v);
        };
    
    var
     join=
      function(l,v,d,r)
       {if(l)
         {if(r)
           {var rh=r[5];
            
            var lh=l[5];
            
            return lh>rh+2
                    ?bal(l[1],l[2],l[3],join(l[4],v,d,r))
                    :rh>lh+2
                      ?bal(join(l,v,d,r[1]),r[2],r[3],r[4])
                      :create(l,v,d,r);
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
       {if(t1)
         {if(t2)
           {var match=min_binding(t2);
            
            return join(t1,match[1],match[2],remove_min_binding(t2));
            }
          else
           {return t1;}
          }
        else
         {return t2;}
        };
    
    var
     concat_or_join=
      function(t1,v,d,t2){return d?join(t1,v,d[1],t2):concat(t1,t2);};
    
    var
     split=
      function(x,param)
       {if(param)
         {var r=param[4];
          
          var d=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c===0)
           {return /* tuple */[0,l,/* Some */[0,d],r];}
          else
           {if(c<0)
             {var match=split(x,l);
              
              return /* tuple */[0,match[1],match[2],join(match[3],v,d,r)];
              }
            else
             {var match$1=split(x,r);
              
              return /* tuple */[0,
                      join(l,v,d,match$1[1]),
                      match$1[2],
                      match$1[3]];
              }
            }
          }
        else
         {return [/* tuple */0,/* Empty */0,/* None */0,/* Empty */0];}
        };
    
    var
     merge$1=
      function(f,s1,s2)
       {var exit;
        
        if(s1)
         {var v1=s1[2];
          
          if(s1[5]>=height(s2))
           {var match=split(v1,s2);
            
            return concat_or_join
                    (merge$1(f,s1[1],match[1]),
                     v1,
                     f(v1,/* Some */[0,s1[3]],match[2]),
                     merge$1(f,s1[4],match[3]));
            }
          else
           {exit=20;}
          }
        else
         {if(s2){exit=20;}else{return /* Empty */0;}}
        
        switch(exit)
         {case 20:
           if(s2)
            {var v2=s2[2];
             
             var match$1=split(v2,s1);
             
             return concat_or_join
                     (merge$1(f,match$1[1],s2[1]),
                      v2,
                      f(v2,match$1[2],/* Some */[0,s2[3]]),
                      merge$1(f,match$1[3],s2[4]));
             }
           else
            {throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"map.ml",270,10]];
             }
           
          }
        };
    
    var
     filter=
      function(p,param)
       {if(param)
         {var d=param[3];
          
          var v=param[2];
          
          var l$prime=filter(p,param[1]);
          
          var pvd=p(v,d);
          
          var r$prime=filter(p,param[4]);
          
          return pvd?join(l$prime,v,d,r$prime):concat(l$prime,r$prime);
          }
        else
         {return /* Empty */0;}
        };
    
    var
     partition=
      function(p,param)
       {if(param)
         {var d=param[3];
          
          var v=param[2];
          
          var match=partition(p,param[1]);
          
          var lf=match[2];
          
          var lt=match[1];
          
          var pvd=p(v,d);
          
          var match$1=partition(p,param[4]);
          
          var rf=match$1[2];
          
          var rt=match$1[1];
          
          return pvd
                  ?/* tuple */[0,join(lt,v,d,rt),concat(lf,rf)]
                  :/* tuple */[0,concat(lt,rt),join(lf,v,d,rf)];
          }
        else
         {return [/* tuple */0,/* Empty */0,/* Empty */0];}
        };
    
    var
     cons_enum=
      function(m,e)
       {return m?cons_enum(m[1],/* More */[0,m[2],m[3],m[4],e]):e;};
    
    var
     compare=
      function(cmp,m1,m2)
       {var
         compare_aux=
          function(e1,e2)
           {if(e1)
             {if(e2)
               {var c=Ord[1](e1[1],e2[1]);
                
                if(c!==0)
                 {return c;}
                else
                 {var c$1=cmp(e1[2],e2[2]);
                  
                  return c$1!==0
                          ?c$1
                          :compare_aux(cons_enum(e1[3],e1[4]),cons_enum(e2[3],e2[4]));
                  }
                }
              else
               {return 1;}
              }
            else
             {return e2?-1:0;}
            };
        
        return compare_aux(cons_enum(m1,/* End */0),cons_enum(m2,/* End */0));
        };
    
    var
     equal=
      function(cmp,m1,m2)
       {var
         equal_aux=
          function(e1,e2)
           {return e1
                    ?e2
                      ?Ord[1](e1[1],e2[1])===
                       0&&
                       cmp(e1[2],e2[2])&&
                       equal_aux(cons_enum(e1[3],e1[4]),cons_enum(e2[3],e2[4]))
                      :/* false */0
                    :e2?/* false */0:/* true */1;
            };
        
        return equal_aux(cons_enum(m1,/* End */0),cons_enum(m2,/* End */0));
        };
    
    var
     cardinal=
      function(param){return param?cardinal(param[1])+1+cardinal(param[4]):0;};
    
    var
     bindings_aux=
      function(accu,param)
       {return param
                ?bindings_aux
                  (/* :: */[0,
                    /* tuple */[0,param[2],param[3]],
                    bindings_aux(accu,param[4])],
                   param[1])
                :accu;
        };
    
    var bindings=function(s){return bindings_aux(/* [] */0,s);};
    
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
            min_binding];
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

