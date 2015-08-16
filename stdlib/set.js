// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");


var
 Make=
  function(Ord)
   {var
     height=
      function(param){if(param){var h=param[4];return h;}else{return 0;}};
    
    var
     create=
      function(l,v,r)
       {if(l){var h=l[4];var hl=h;}else{var hl=0;}
        
        if(r){var h$1=r[4];var hr=h$1;}else{var hr=0;}
        
        return /* Node */[0,l,v,r,hl>=hr?hl+1:hr+1];
        };
    
    var
     bal=
      function(l,v,r)
       {if(l){var h=l[4];var hl=h;}else{var hl=0;}
        
        if(r){var h$1=r[4];var hr=h$1;}else{var hr=0;}
        
        if(hl>hr+2)
         {if(l)
           {var lr=l[3];
            
            var lv=l[2];
            
            var ll=l[1];
            
            if(height(ll)>=height(lr))
             {return create(ll,lv,create(lr,v,r));}
            else
             {if(lr)
               {var lrr=lr[3];
                
                var lrv=lr[2];
                
                var lrl=lr[1];
                
                return create(create(ll,lv,lrl),lrv,create(lrr,v,r));
                }
              else
               {return Pervasives["invalid_arg"]("Set.bal");}
              }
            }
          else
           {return Pervasives["invalid_arg"]("Set.bal");}
          }
        else
         {if(hr>hl+2)
           {if(r)
             {var rr=r[3];
              
              var rv=r[2];
              
              var rl=r[1];
              
              if(height(rr)>=height(rl))
               {return create(create(l,v,rl),rv,rr);}
              else
               {if(rl)
                 {var rlr=rl[3];
                  
                  var rlv=rl[2];
                  
                  var rll=rl[1];
                  
                  return create(create(l,v,rll),rlv,create(rlr,rv,rr));
                  }
                else
                 {return Pervasives["invalid_arg"]("Set.bal");}
                }
              }
            else
             {return Pervasives["invalid_arg"]("Set.bal");}
            }
          else
           {return /* Node */[0,l,v,r,hl>=hr?hl+1:hr+1];}
          }
        };
    
    var
     add=
      function(x,t)
       {if(t)
         {var r=t[3];
          
          var v=t[2];
          
          var l=t[1];
          
          var c=Ord[1](x,v);
          
          if(c===0)
           {return t;}
          else
           {if(c<0){return bal(add(x,l),v,r);}else{return bal(l,v,add(x,r));}}
          }
        else
         {return /* Node */[0,/* Empty */0,x,/* Empty */0,1];}
        };
    
    var
     singleton=
      function(x){return /* Node */[0,/* Empty */0,x,/* Empty */0,1];};
    
    var
     add_min_element=
      function(v,param)
       {if(param)
         {var r=param[3];
          
          var x=param[2];
          
          var l=param[1];
          
          return bal(add_min_element(v,l),x,r);
          }
        else
         {return singleton(v);}
        };
    
    var
     add_max_element=
      function(v,param)
       {if(param)
         {var r=param[3];
          
          var x=param[2];
          
          var l=param[1];
          
          return bal(l,x,add_max_element(v,r));
          }
        else
         {return singleton(v);}
        };
    
    var
     join=
      function(l,v,r)
       {var match=l;
        
        var match$1=r;
        
        if(match)
         {if(match$1)
           {var rh=match$1[4];
            
            var rr=match$1[3];
            
            var rv=match$1[2];
            
            var rl=match$1[1];
            
            var lh=match[4];
            
            var lr=match[3];
            
            var lv=match[2];
            
            var ll=match[1];
            
            if(lh>rh+2)
             {return bal(ll,lv,join(lr,v,r));}
            else
             {if(rh>lh+2)
               {return bal(join(l,v,rl),rv,rr);}
              else
               {return create(l,v,r);}
              }
            }
          else
           {return add_max_element(v,l);}
          }
        else
         {return add_min_element(v,r);}
        };
    
    var
     min_elt=
      function(param)
       {if(param)
         {var l=param[1];
          
          if(l){return min_elt(l);}else{var v=param[2];return v;}
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     max_elt=
      function(param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          if(r){return max_elt(r);}else{return v;}
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     remove_min_elt=
      function(param)
       {if(param)
         {var l=param[1];
          
          if(l)
           {var r=param[3];var v=param[2];return bal(remove_min_elt(l),v,r);}
          else
           {var r$1=param[3];return r$1;}
          }
        else
         {return Pervasives["invalid_arg"]("Set.remove_min_elt");}
        };
    
    var
     merge=
      function(t1,t2)
       {var match=t1;
        
        var match$1=t2;
        
        if(match)
         {if(match$1)
           {return bal(t1,min_elt(t2),remove_min_elt(t2));}
          else
           {var t=match;return t;}
          }
        else
         {var t$1=match$1;return t$1;}
        };
    
    var
     concat=
      function(t1,t2)
       {var match=t1;
        
        var match$1=t2;
        
        if(match)
         {if(match$1)
           {return join(t1,min_elt(t2),remove_min_elt(t2));}
          else
           {var t=match;return t;}
          }
        else
         {var t$1=match$1;return t$1;}
        };
    
    var
     split=
      function(x,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c===0)
           {return /* tuple */[0,l,/* true */1,r];}
          else
           {if(c<0)
             {var match=split(x,l);
              
              var rl=match[3];
              
              var pres=match[2];
              
              var ll=match[1];
              
              return /* tuple */[0,ll,pres,join(rl,v,r)];
              }
            else
             {var match$1=split(x,r);
              
              var rr=match$1[3];
              
              var pres$1=match$1[2];
              
              var lr=match$1[1];
              
              return /* tuple */[0,join(l,v,lr),pres$1,rr];
              }
            }
          }
        else
         {return [/* tuple */0,/* Empty */0,/* false */0,/* Empty */0];}
        };
    
    var empty=/* Empty */0;
    
    var
     is_empty=
      function(param)
       {if(param){return /* false */0;}else{return /* true */1;}};
    
    var
     mem=
      function(x,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          return c===0||mem(x,c<0?l:r);
          }
        else
         {return /* false */0;}
        };
    
    var
     remove=
      function(x,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c===0)
           {return merge(l,r);}
          else
           {if(c<0)
             {return bal(remove(x,l),v,r);}
            else
             {return bal(l,v,remove(x,r));}
            }
          }
        else
         {return /* Empty */0;}
        };
    
    var
     union=
      function(s1,s2)
       {var match=s1;
        
        var match$1=s2;
        
        if(match)
         {if(match$1)
           {var h2=match$1[4];
            
            var r2=match$1[3];
            
            var v2=match$1[2];
            
            var l2=match$1[1];
            
            var h1=match[4];
            
            var r1=match[3];
            
            var v1=match[2];
            
            var l1=match[1];
            
            if(h1>=h2)
             {if(h2===1)
               {return add(v2,s1);}
              else
               {var match$2=split(v1,s2);
                
                var r2$1=match$2[3];
                
                var l2$1=match$2[1];
                
                return join(union(l1,l2$1),v1,union(r1,r2$1));
                }
              }
            else
             {if(h1===1)
               {return add(v1,s2);}
              else
               {var match$3=split(v2,s1);
                
                var r1$1=match$3[3];
                
                var l1$1=match$3[1];
                
                return join(union(l1$1,l2),v2,union(r1$1,r2));
                }
              }
            }
          else
           {var t1=match;return t1;}
          }
        else
         {var t2=match$1;return t2;}
        };
    
    var
     inter=
      function(s1,s2)
       {var match=s1;
        
        var match$1=s2;
        
        if(match)
         {if(match$1)
           {var t2=match$1;
            
            var r1=match[3];
            
            var v1=match[2];
            
            var l1=match[1];
            
            var match$2=split(v1,t2);
            
            var match$3=match$2[2];
            
            var l2=match$2[1];
            
            if(match$3!==0)
             {var l2$1=l2;
              
              var r2=match$2[3];
              
              return join(inter(l1,l2$1),v1,inter(r1,r2));
              }
            else
             {var r2$1=match$2[3];return concat(inter(l1,l2),inter(r1,r2$1));}
            }
          else
           {return /* Empty */0;}
          }
        else
         {return /* Empty */0;}
        };
    
    var
     diff=
      function(s1,s2)
       {var match=s1;
        
        var match$1=s2;
        
        if(match)
         {if(match$1)
           {var t2=match$1;
            
            var r1=match[3];
            
            var v1=match[2];
            
            var l1=match[1];
            
            var match$2=split(v1,t2);
            
            var match$3=match$2[2];
            
            var l2=match$2[1];
            
            if(match$3!==0)
             {var l2$1=l2;
              
              var r2=match$2[3];
              
              return concat(diff(l1,l2$1),diff(r1,r2));
              }
            else
             {var r2$1=match$2[3];return join(diff(l1,l2),v1,diff(r1,r2$1));}
            }
          else
           {var t1=match;return t1;}
          }
        else
         {return /* Empty */0;}
        };
    
    var
     cons_enum=
      function(s,e)
       {if(s)
         {var r=s[3];
          
          var v=s[2];
          
          var l=s[1];
          
          return cons_enum(l,/* More */[0,v,r,e]);
          }
        else
         {return e;}
        };
    
    var
     compare_aux=
      function(e1,e2)
       {var match=e1;
        
        var match$1=e2;
        
        if(match)
         {if(match$1)
           {var e2$1=match$1[3];
            
            var r2=match$1[2];
            
            var v2=match$1[1];
            
            var e1$1=match[3];
            
            var r1=match[2];
            
            var v1=match[1];
            
            var c=Ord[1](v1,v2);
            
            if(c!==0)
             {return c;}
            else
             {return compare_aux(cons_enum(r1,e1$1),cons_enum(r2,e2$1));}
            }
          else
           {return 1;}
          }
        else
         {if(match$1){return -1;}else{return 0;}}
        };
    
    var
     compare=
      function(s1,s2)
       {return compare_aux(cons_enum(s1,/* End */0),cons_enum(s2,/* End */0));
        };
    
    var equal=function(s1,s2){return compare(s1,s2)===0;};
    
    var
     subset=
      function(s1,s2)
       {var match=s1;
        
        var match$1=s2;
        
        if(match)
         {if(match$1)
           {var t2=match$1;
            
            var r2=match$1[3];
            
            var v2=match$1[2];
            
            var l2=match$1[1];
            
            var r1=match[3];
            
            var v1=match[2];
            
            var l1=match[1];
            
            var c=Ord[1](v1,v2);
            
            if(c===0)
             {return subset(l1,l2)&&subset(r1,r2);}
            else
             {if(c<0)
               {return subset(/* Node */[0,l1,v1,/* Empty */0,0],l2)&&
                       subset(r1,t2);
                }
              else
               {return subset(/* Node */[0,/* Empty */0,v1,r1,0],r2)&&
                       subset(l1,t2);
                }
              }
            }
          else
           {return /* false */0;}
          }
        else
         {return /* true */1;}
        };
    
    var
     iter=
      function(f,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          iter(f,l);
          f(v);
          return iter(f,r);
          }
        else
         {return /* () */0;}
        };
    
    var
     fold=
      function(f,s,accu)
       {if(s)
         {var r=s[3];
          
          var v=s[2];
          
          var l=s[1];
          
          return fold(f,r,f(v,fold(f,l,accu)));
          }
        else
         {return accu;}
        };
    
    var
     for_all=
      function(p,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          return p(v)&&for_all(p,l)&&for_all(p,r);
          }
        else
         {return /* true */1;}
        };
    
    var
     exists=
      function(p,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          return p(v)||exists(p,l)||exists(p,r);
          }
        else
         {return /* false */0;}
        };
    
    var
     filter=
      function(p,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var l$prime=filter(p,l);
          
          var pv=p(v);
          
          var r$prime=filter(p,r);
          
          if(pv)
           {return join(l$prime,v,r$prime);}
          else
           {return concat(l$prime,r$prime);}
          }
        else
         {return /* Empty */0;}
        };
    
    var
     partition=
      function(p,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var match=partition(p,l);
          
          var lf=match[2];
          
          var lt=match[1];
          
          var pv=p(v);
          
          var match$1=partition(p,r);
          
          var rf=match$1[2];
          
          var rt=match$1[1];
          
          if(pv)
           {return /* tuple */[0,join(lt,v,rt),concat(lf,rf)];}
          else
           {return /* tuple */[0,concat(lt,rt),join(lf,v,rf)];}
          }
        else
         {return [/* tuple */0,/* Empty */0,/* Empty */0];}
        };
    
    var
     cardinal=
      function(param)
       {if(param)
         {var r=param[3];var l=param[1];return cardinal(l)+1+cardinal(r);}
        else
         {return 0;}
        };
    
    var
     elements_aux=
      function(accu,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          return elements_aux(/* :: */[0,v,elements_aux(accu,r)],l);
          }
        else
         {return accu;}
        };
    
    var elements=function(s){return elements_aux(/* [] */0,s);};
    
    var choose=min_elt;
    
    var
     find=
      function(x,param)
       {if(param)
         {var r=param[3];
          
          var v=param[2];
          
          var l=param[1];
          
          var c=Ord[1](x,v);
          
          if(c===0){return v;}else{return find(x,c<0?l:r);}
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    var
     of_sorted_list=
      function(l)
       {var
         sub=
          function(n,l)
           {var match=n;
            
            var match$1=l;
            
            var exit;
            
            if(3<match>>>0)
             {exit=6;}
            else
             {switch(match)
               {case 0:var l$1=match$1;return /* tuple */[0,/* Empty */0,l$1];
                case 1:
                 if(match$1)
                  {var l$2=match$1[2];
                   
                   var x0=match$1[1];
                   
                   return /* tuple */[0,
                           /* Node */[0,/* Empty */0,x0,/* Empty */0,1],
                           l$2];
                   }
                 else
                  {exit=6;}
                 
                case 2:
                 if(match$1)
                  {var match$2=match$1[2];
                   
                   if(match$2)
                    {var l$3=match$2[2];
                     
                     var x1=match$2[1];
                     
                     var x0$1=match$1[1];
                     
                     return /* tuple */[0,
                             /* Node */[0,
                              /* Node */[0,/* Empty */0,x0$1,/* Empty */0,1],
                              x1,
                              /* Empty */0,
                              2],
                             l$3];
                     }
                   else
                    {exit=6;}
                   }
                 else
                  {exit=6;}
                 
                case 3:
                 if(match$1)
                  {var match$3=match$1[2];
                   
                   if(match$3)
                    {var match$4=match$3[2];
                     
                     if(match$4)
                      {var l$4=match$4[2];
                       
                       var x2=match$4[1];
                       
                       var x1$1=match$3[1];
                       
                       var x0$2=match$1[1];
                       
                       return /* tuple */[0,
                               /* Node */[0,
                                /* Node */[0,/* Empty */0,x0$2,/* Empty */0,1],
                                x1$1,
                                /* Node */[0,/* Empty */0,x2,/* Empty */0,1],
                                2],
                               l$4];
                       }
                     else
                      {exit=6;}
                     }
                   else
                    {exit=6;}
                   }
                 else
                  {exit=6;}
                 
                }
              }
            
            switch(exit)
             {case 6:
               var l$5=match$1;
               
               var n$1=match;
               
               var nl=n$1/2;
               
               var match$5=sub(nl,l$5);
               
               var l$6=match$5[2];
               
               var left=match$5[1];
               
               if(l$6)
                {var l$7=l$6[2];
                 
                 var mid=l$6[1];
                 
                 var match$6=sub(n$1-nl-1,l$7);
                 
                 var l$8=match$6[2];
                 
                 var right=match$6[1];
                 
                 return /* tuple */[0,create(left,mid,right),l$8];
                 }
               else
                {throw [0,
                        CamlPrimitive["caml_global_data"]["Assert_failure"],
                        [0,"set.ml",372,18]];
                 }
               
              }
            };
        
        return sub(List["length"](l),l)[1];
        };
    
    var
     of_list=
      function(l)
       {if(l)
         {var match=l[2];
          
          var x0=l[1];
          
          if(match)
           {var match$1=match[2];
            
            var x1=match[1];
            
            if(match$1)
             {var match$2=match$1[2];
              
              var x2=match$1[1];
              
              if(match$2)
               {var match$3=match$2[2];
                
                var x3=match$2[1];
                
                if(match$3)
                 {var match$4=match$3[2];
                  
                  if(match$4)
                   {return of_sorted_list(List["sort_uniq"](Ord[1],l));}
                  else
                   {var x3$1=x3;
                    
                    var x2$1=x2;
                    
                    var x1$1=x1;
                    
                    var x0$1=x0;
                    
                    var x4=match$3[1];
                    
                    return add(x4,add(x3$1,add(x2$1,add(x1$1,singleton(x0$1)))));
                    }
                  }
                else
                 {var x2$2=x2;
                  
                  var x1$2=x1;
                  
                  var x0$2=x0;
                  
                  return add(x3,add(x2$2,add(x1$2,singleton(x0$2))));
                  }
                }
              else
               {var x1$3=x1;
                
                var x0$3=x0;
                
                return add(x2,add(x1$3,singleton(x0$3)));
                }
              }
            else
             {var x0$4=x0;return add(x1,singleton(x0$4));}
            }
          else
           {return singleton(x0);}
          }
        else
         {return empty;}
        };
    
    return [0,
            height,
            create,
            bal,
            add,
            singleton,
            add_min_element,
            add_max_element,
            join,
            min_elt,
            max_elt,
            remove_min_elt,
            merge,
            concat,
            split,
            empty,
            is_empty,
            mem,
            remove,
            union,
            inter,
            diff,
            cons_enum,
            compare_aux,
            compare,
            equal,
            subset,
            iter,
            fold,
            for_all,
            exists,
            filter,
            partition,
            cardinal,
            elements_aux,
            elements,
            choose,
            find,
            of_sorted_list,
            of_list];
    };

module["exports"]=
{"Make":
 function(funarg)
  {var $$let=Make(funarg);
   
   return [0,
           $$let[15],
           $$let[16],
           $$let[17],
           $$let[4],
           $$let[5],
           $$let[18],
           $$let[19],
           $$let[20],
           $$let[21],
           $$let[24],
           $$let[25],
           $$let[26],
           $$let[27],
           $$let[28],
           $$let[29],
           $$let[30],
           $$let[31],
           $$let[32],
           $$let[33],
           $$let[35],
           $$let[9],
           $$let[10],
           $$let[36],
           $$let[14],
           $$let[37],
           $$let[39]];
   }};

