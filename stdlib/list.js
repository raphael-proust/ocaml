// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");


var
 length_aux=
  function(len,param)
   {if(param){var l=param[2];return length_aux(len+1,l);}else{return len;}};

var length=function(l){return length_aux(0,l);};

var
 hd=
  function(param)
   {if(param)
     {var a=param[1];return a;}
    else
     {return Pervasives["failwith"]("hd");}
    };

var
 tl=
  function(param)
   {if(param)
     {var l=param[2];return l;}
    else
     {return Pervasives["failwith"]("tl");}
    };

var
 nth=
  function(l,n)
   {if(n<0)
     {return Pervasives["invalid_arg"]("List.nth");}
    else
     {var
       nth_aux=
        function(l$1,n$1)
         {if(l$1)
           {var l$2=l$1[2];
            
            var a=l$1[1];
            
            if(n$1=0){return a;}else{return nth_aux(l$2,n$1-1);}
            }
          else
           {return Pervasives["failwith"]("nth");}
          };
      
      return nth_aux(l,n);
      }
    };

var append=Pervasives["@"];

var
 rev_append=
  function(l1,l2)
   {if(l1)
     {var l=l1[2];var a=l1[1];return rev_append(l,/* :: */[0,a,l2]);}
    else
     {return l2;}
    };

var rev=function(l){return rev_append(l,/* [] */0);};

var
 flatten=
  function(param)
   {if(param)
     {var r=param[2];var l=param[1];return Pervasives["@"](l,flatten(r));}
    else
     {return /* [] */0;}
    };

var concat=flatten;

var
 map=
  function(f,param)
   {if(param)
     {var l=param[2];var a=param[1];var r=f(a);return /* :: */[0,r,map(f,l)];}
    else
     {return /* [] */0;}
    };

var
 mapi=
  function(i,f,param)
   {if(param)
     {var l=param[2];
      
      var a=param[1];
      
      var r=f(i,a);
      
      return /* :: */[0,r,mapi(i+1,f,l)];
      }
    else
     {return /* [] */0;}
    };

var mapi$1=function(f,l){return mapi(0,f,l);};

var
 rev_map=
  function(f,l)
   {var
     rmap_f=
      function(accu,param)
       {if(param)
         {var l$1=param[2];
          
          var a=param[1];
          
          return rmap_f(/* :: */[0,f(a),accu],l$1);
          }
        else
         {return accu;}
        };
    
    return rmap_f(/* [] */0,l);
    };

var
 iter=
  function(f,param)
   {if(param)
     {var l=param[2];var a=param[1];f(a);return iter(f,l);}
    else
     {return /* () */0;}
    };

var
 iteri=
  function(i,f,param)
   {if(param)
     {var l=param[2];var a=param[1];f(i,a);return iteri(i+1,f,l);}
    else
     {return /* () */0;}
    };

var iteri$1=function(f,l){return iteri(0,f,l);};

var
 fold_left=
  function(f,accu,l)
   {if(l)
     {var l$1=l[2];var a=l[1];return fold_left(f,f(accu,a),l$1);}
    else
     {return accu;}
    };

var
 fold_right=
  function(f,l,accu)
   {if(l)
     {var l$1=l[2];var a=l[1];return f(a,fold_right(f,l$1,accu));}
    else
     {return accu;}
    };

var
 map2=
  function(f,l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        var r=f(a1,a2);
        
        return /* :: */[0,r,map2(f,l1$1,l2$1)];
        }
      else
       {exit=66;}
      }
    else
     {if(match$1){exit=66;}else{return /* [] */0;}}
    
    switch(exit){case 66:return Pervasives["invalid_arg"]("List.map2");}
    };

var
 rev_map2=
  function(f,l1,l2)
   {var
     rmap2_f=
      function(accu,l1$1,l2$1)
       {var match=l1$1;
        
        var match$1=l2$1;
        
        var exit;
        
        if(match)
         {if(match$1)
           {var l2$2=match$1[2];
            
            var a2=match$1[1];
            
            var l1$2=match[2];
            
            var a1=match[1];
            
            return rmap2_f(/* :: */[0,f(a1,a2),accu],l1$2,l2$2);
            }
          else
           {exit=63;}
          }
        else
         {if(match$1){exit=63;}else{return accu;}}
        
        switch(exit)
         {case 63:return Pervasives["invalid_arg"]("List.rev_map2");}
        };
    
    return rmap2_f(/* [] */0,l1,l2);
    };

var
 iter2=
  function(f,l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        f(a1,a2);
        return iter2(f,l1$1,l2$1);
        }
      else
       {exit=62;}
      }
    else
     {if(match$1){exit=62;}else{return /* () */0;}}
    
    switch(exit){case 62:return Pervasives["invalid_arg"]("List.iter2");}
    };

var
 fold_left2=
  function(f,accu,l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        return fold_left2(f,f(accu,a1,a2),l1$1,l2$1);
        }
      else
       {exit=61;}
      }
    else
     {if(match$1){exit=61;}else{return accu;}}
    
    switch(exit){case 61:return Pervasives["invalid_arg"]("List.fold_left2");}
    };

var
 fold_right2=
  function(f,l1,l2,accu)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        return f(a1,a2,fold_right2(f,l1$1,l2$1,accu));
        }
      else
       {exit=60;}
      }
    else
     {if(match$1){exit=60;}else{return accu;}}
    
    switch(exit)
     {case 60:return Pervasives["invalid_arg"]("List.fold_right2");}
    };

var
 for_all=
  function(p,param)
   {if(param)
     {var l=param[2];var a=param[1];return p(a)&&for_all(p,l);}
    else
     {return /* true */1;}
    };

var
 exists=
  function(p,param)
   {if(param)
     {var l=param[2];var a=param[1];return p(a)||exists(p,l);}
    else
     {return /* false */0;}
    };

var
 for_all2=
  function(p,l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        return p(a1,a2)&&for_all2(p,l1$1,l2$1);
        }
      else
       {exit=59;}
      }
    else
     {if(match$1){exit=59;}else{return /* true */1;}}
    
    switch(exit){case 59:return Pervasives["invalid_arg"]("List.for_all2");}
    };

var
 exists2=
  function(p,l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        return p(a1,a2)||exists2(p,l1$1,l2$1);
        }
      else
       {exit=58;}
      }
    else
     {if(match$1){exit=58;}else{return /* false */0;}}
    
    switch(exit){case 58:return Pervasives["invalid_arg"]("List.exists2");}
    };

var
 mem=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var a=param[1];
      
      return ("unknown primitive:caml_compare"=0)||mem(x,l);
      }
    else
     {return /* false */0;}
    };

var
 memq=
  function(x,param)
   {if(param)
     {var l=param[2];var a=param[1];return (a=x)||memq(x,l);}
    else
     {return /* false */0;}
    };

var
 assoc=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var match=param[1];
      
      var b=match[2];
      
      var a=match[1];
      
      if("unknown primitive:caml_compare"=0)
       {return b;}
      else
       {return assoc(x,l);}
      }
    else
     {throw Not_found;}
    };

var
 assq=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var match=param[1];
      
      var b=match[2];
      
      var a=match[1];
      
      if(a=x){return b;}else{return assq(x,l);}
      }
    else
     {throw Not_found;}
    };

var
 mem_assoc=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var match=param[1];
      
      var a=match[1];
      
      return ("unknown primitive:caml_compare"=0)||mem_assoc(x,l);
      }
    else
     {return /* false */0;}
    };

var
 mem_assq=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var match=param[1];
      
      var a=match[1];
      
      return (a=x)||mem_assq(x,l);
      }
    else
     {return /* false */0;}
    };

var
 remove_assoc=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var pair=param[1];
      
      var a=pair[1];
      
      if("unknown primitive:caml_compare"=0)
       {return l;}
      else
       {return /* :: */[0,pair,remove_assoc(x,l)];}
      }
    else
     {return /* [] */0;}
    };

var
 remove_assq=
  function(x,param)
   {if(param)
     {var l=param[2];
      
      var pair=param[1];
      
      var a=pair[1];
      
      if(a=x){return l;}else{return /* :: */[0,pair,remove_assq(x,l)];}
      }
    else
     {return /* [] */0;}
    };

var
 find=
  function(p,param)
   {if(param)
     {var l=param[2];
      
      var x=param[1];
      
      if(p(x)){return x;}else{return find(p,l);}
      }
    else
     {throw Not_found;}
    };

var
 find_all=
  function(p)
   {var
     find$1=
      function(accu,param)
       {if(param)
         {var l=param[2];
          
          var x=param[1];
          
          if(p(x))
           {return find$1(/* :: */[0,x,accu],l);}
          else
           {return find$1(accu,l);}
          }
        else
         {return rev(accu);}
        };
    
    return find$1(/* [] */0);
    };

var filter=find_all;

var
 partition=
  function(p,l)
   {var
     part=
      function(yes,no,param)
       {if(param)
         {var l$1=param[2];
          
          var x=param[1];
          
          if(p(x))
           {return part(/* :: */[0,x,yes],no,l$1);}
          else
           {return part(yes,/* :: */[0,x,no],l$1);}
          }
        else
         {return /* tuple */[0,rev(yes),rev(no)];}
        };
    
    return part(/* [] */0,/* [] */0,l);
    };

var
 split=
  function(param)
   {if(param)
     {var l=param[2];
      
      var match=param[1];
      
      var y=match[2];
      
      var x=match[1];
      
      var match$1=split(l);
      
      var ry=match$1[2];
      
      var rx=match$1[1];
      
      return /* tuple */[0,/* :: */[0,x,rx],/* :: */[0,y,ry]];
      }
    else
     {return /* tuple */[0,/* [] */0,/* [] */0];}
    };

var
 combine=
  function(l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    var exit;
    
    if(match)
     {if(match$1)
       {var l2$1=match$1[2];
        
        var a2=match$1[1];
        
        var l1$1=match[2];
        
        var a1=match[1];
        
        return /* :: */[0,/* tuple */[0,a1,a2],combine(l1$1,l2$1)];
        }
      else
       {exit=53;}
      }
    else
     {if(match$1){exit=53;}else{return /* [] */0;}}
    
    switch(exit){case 53:return Pervasives["invalid_arg"]("List.combine");}
    };

var
 merge=
  function(cmp,l1,l2)
   {var match=l1;
    
    var match$1=l2;
    
    if(match)
     {if(match$1)
       {var t2=match$1[2];
        
        var h2=match$1[1];
        
        var t1=match[2];
        
        var h1=match[1];
        
        if(cmp(h1,h2)<=0)
         {return /* :: */[0,h1,merge(cmp,t1,l2)];}
        else
         {return /* :: */[0,h2,merge(cmp,l1,t2)];}
        }
      else
       {var l1$1=match;return l1$1;}
      }
    else
     {var l2$1=match$1;return l2$1;}
    };

var
 chop=
  function(k,l)
   {if(k=0)
     {return l;}
    else
     {if(l)
       {var t=l[2];return chop(k-1,t);}
      else
       {throw [0,Assert_failure,[0,"list.ml",223,11]];}
      }
    };

var
 stable_sort=
  function(cmp,l)
   {var
     rev_merge=
      function(l1,l2,accu)
       {var match=l1;
        
        var match$1=l2;
        
        if(match)
         {if(match$1)
           {var t2=match$1[2];
            
            var h2=match$1[1];
            
            var t1=match[2];
            
            var h1=match[1];
            
            if(cmp(h1,h2)<=0)
             {return rev_merge(t1,l2,/* :: */[0,h1,accu]);}
            else
             {return rev_merge(l1,t2,/* :: */[0,h2,accu]);}
            }
          else
           {var l1$1=match;return rev_append(l1$1,accu);}
          }
        else
         {var l2$1=match$1;return rev_append(l2$1,accu);}
        };
    
    var
     rev_merge_rev=
      function(l1,l2,accu)
       {var match=l1;
        
        var match$1=l2;
        
        if(match)
         {if(match$1)
           {var t2=match$1[2];
            
            var h2=match$1[1];
            
            var t1=match[2];
            
            var h1=match[1];
            
            if(cmp(h1,h2)>0)
             {return rev_merge_rev(t1,l2,/* :: */[0,h1,accu]);}
            else
             {return rev_merge_rev(l1,t2,/* :: */[0,h2,accu]);}
            }
          else
           {var l1$1=match;return rev_append(l1$1,accu);}
          }
        else
         {var l2$1=match$1;return rev_append(l2$1,accu);}
        };
    
    var
     sort=
      function(n,l$1)
       {var match=n;
        
        var match$1=l$1;
        
        var exit;
        
        if(match!=2)
         {if(match!=3)
           {exit=41;}
          else
           {if(match$1)
             {var match$2=match$1[2];
              
              if(match$2)
               {var match$3=match$2[2];
                
                if(match$3)
                 {var x3=match$3[1];
                  
                  var x2=match$2[1];
                  
                  var x1=match$1[1];
                  
                  if(cmp(x1,x2)<=0)
                   {if(cmp(x2,x3)<=0)
                     {return /* :: */[0,
                              x1,
                              /* :: */[0,x2,/* :: */[0,x3,/* [] */0]]];
                      }
                    else
                     {if(cmp(x1,x3)<=0)
                       {return /* :: */[0,
                                x1,
                                /* :: */[0,x3,/* :: */[0,x2,/* [] */0]]];
                        }
                      else
                       {return /* :: */[0,
                                x3,
                                /* :: */[0,x1,/* :: */[0,x2,/* [] */0]]];
                        }
                      }
                    }
                  else
                   {if(cmp(x1,x3)<=0)
                     {return /* :: */[0,
                              x2,
                              /* :: */[0,x1,/* :: */[0,x3,/* [] */0]]];
                      }
                    else
                     {if(cmp(x2,x3)<=0)
                       {return /* :: */[0,
                                x2,
                                /* :: */[0,x3,/* :: */[0,x1,/* [] */0]]];
                        }
                      else
                       {return /* :: */[0,
                                x3,
                                /* :: */[0,x2,/* :: */[0,x1,/* [] */0]]];
                        }
                      }
                    }
                  }
                else
                 {exit=41;}
                }
              else
               {exit=41;}
              }
            else
             {exit=41;}
            }
          }
        else
         {if(match$1)
           {var match$4=match$1[2];
            
            if(match$4)
             {var x2$1=match$4[1];
              
              var x1$1=match$1[1];
              
              if(cmp(x1$1,x2$1)<=0)
               {return /* :: */[0,x1$1,/* :: */[0,x2$1,/* [] */0]];}
              else
               {return /* :: */[0,x2$1,/* :: */[0,x1$1,/* [] */0]];}
              }
            else
             {exit=41;}
            }
          else
           {exit=41;}
          }
        
        switch(exit)
         {case 41:
           var l$2=match$1;
           
           var n$1=match;
           
           var n1=n$1>>1;
           
           var n2=n$1-n1;
           
           var l2=chop(n1,l$2);
           
           var s1=rev_sort(n1,l$2);
           
           var s2=rev_sort(n2,l2);
           
           return rev_merge_rev(s1,s2,/* [] */0);
           
          }
        };
    
    var
     rev_sort=
      function(n,l$1)
       {var match=n;
        
        var match$1=l$1;
        
        var exit;
        
        if(match!=2)
         {if(match!=3)
           {exit=47;}
          else
           {if(match$1)
             {var match$2=match$1[2];
              
              if(match$2)
               {var match$3=match$2[2];
                
                if(match$3)
                 {var x3=match$3[1];
                  
                  var x2=match$2[1];
                  
                  var x1=match$1[1];
                  
                  if(cmp(x1,x2)>0)
                   {if(cmp(x2,x3)>0)
                     {return /* :: */[0,
                              x1,
                              /* :: */[0,x2,/* :: */[0,x3,/* [] */0]]];
                      }
                    else
                     {if(cmp(x1,x3)>0)
                       {return /* :: */[0,
                                x1,
                                /* :: */[0,x3,/* :: */[0,x2,/* [] */0]]];
                        }
                      else
                       {return /* :: */[0,
                                x3,
                                /* :: */[0,x1,/* :: */[0,x2,/* [] */0]]];
                        }
                      }
                    }
                  else
                   {if(cmp(x1,x3)>0)
                     {return /* :: */[0,
                              x2,
                              /* :: */[0,x1,/* :: */[0,x3,/* [] */0]]];
                      }
                    else
                     {if(cmp(x2,x3)>0)
                       {return /* :: */[0,
                                x2,
                                /* :: */[0,x3,/* :: */[0,x1,/* [] */0]]];
                        }
                      else
                       {return /* :: */[0,
                                x3,
                                /* :: */[0,x2,/* :: */[0,x1,/* [] */0]]];
                        }
                      }
                    }
                  }
                else
                 {exit=47;}
                }
              else
               {exit=47;}
              }
            else
             {exit=47;}
            }
          }
        else
         {if(match$1)
           {var match$4=match$1[2];
            
            if(match$4)
             {var x2$1=match$4[1];
              
              var x1$1=match$1[1];
              
              if(cmp(x1$1,x2$1)>0)
               {return /* :: */[0,x1$1,/* :: */[0,x2$1,/* [] */0]];}
              else
               {return /* :: */[0,x2$1,/* :: */[0,x1$1,/* [] */0]];}
              }
            else
             {exit=47;}
            }
          else
           {exit=47;}
          }
        
        switch(exit)
         {case 47:
           var l$2=match$1;
           
           var n$1=match;
           
           var n1=n$1>>1;
           
           var n2=n$1-n1;
           
           var l2=chop(n1,l$2);
           
           var s1=sort(n1,l$2);
           
           var s2=sort(n2,l2);
           
           return rev_merge(s1,s2,/* [] */0);
           
          }
        };
    
    var len=length(l);
    
    if(len<2){return l;}else{return sort(len,l);}
    };

var sort=stable_sort;

var fast_sort=stable_sort;

var
 sort_uniq=
  function(cmp,l)
   {var
     rev_merge=
      function(l1,l2,accu)
       {var match=l1;
        
        var match$1=l2;
        
        if(match)
         {if(match$1)
           {var t2=match$1[2];
            
            var h2=match$1[1];
            
            var t1=match[2];
            
            var h1=match[1];
            
            var c=cmp(h1,h2);
            
            if(c=0)
             {return rev_merge(t1,t2,/* :: */[0,h1,accu]);}
            else
             {if(c<0)
               {return rev_merge(t1,l2,/* :: */[0,h1,accu]);}
              else
               {return rev_merge(l1,t2,/* :: */[0,h2,accu]);}
              }
            }
          else
           {var l1$1=match;return rev_append(l1$1,accu);}
          }
        else
         {var l2$1=match$1;return rev_append(l2$1,accu);}
        };
    
    var
     rev_merge_rev=
      function(l1,l2,accu)
       {var match=l1;
        
        var match$1=l2;
        
        if(match)
         {if(match$1)
           {var t2=match$1[2];
            
            var h2=match$1[1];
            
            var t1=match[2];
            
            var h1=match[1];
            
            var c=cmp(h1,h2);
            
            if(c=0)
             {return rev_merge_rev(t1,t2,/* :: */[0,h1,accu]);}
            else
             {if(c>0)
               {return rev_merge_rev(t1,l2,/* :: */[0,h1,accu]);}
              else
               {return rev_merge_rev(l1,t2,/* :: */[0,h2,accu]);}
              }
            }
          else
           {var l1$1=match;return rev_append(l1$1,accu);}
          }
        else
         {var l2$1=match$1;return rev_append(l2$1,accu);}
        };
    
    var
     sort$1=
      function(n,l$1)
       {var match=n;
        
        var match$1=l$1;
        
        var exit;
        
        if(match!=2)
         {if(match!=3)
           {exit=14;}
          else
           {if(match$1)
             {var match$2=match$1[2];
              
              if(match$2)
               {var match$3=match$2[2];
                
                if(match$3)
                 {var x3=match$3[1];
                  
                  var x2=match$2[1];
                  
                  var x1=match$1[1];
                  
                  var c=cmp(x1,x2);
                  
                  if(c=0)
                   {var c$1=cmp(x2,x3);
                    
                    if(c$1=0)
                     {return /* :: */[0,x2,/* [] */0];}
                    else
                     {if(c$1<0)
                       {return /* :: */[0,x2,/* :: */[0,x3,/* [] */0]];}
                      else
                       {return /* :: */[0,x3,/* :: */[0,x2,/* [] */0]];}
                      }
                    }
                  else
                   {if(c<0)
                     {var c$2=cmp(x2,x3);
                      
                      if(c$2=0)
                       {return /* :: */[0,x1,/* :: */[0,x2,/* [] */0]];}
                      else
                       {if(c$2<0)
                         {return /* :: */[0,
                                  x1,
                                  /* :: */[0,x2,/* :: */[0,x3,/* [] */0]]];
                          }
                        else
                         {var c$3=cmp(x1,x3);
                          
                          if(c$3=0)
                           {return /* :: */[0,x1,/* :: */[0,x2,/* [] */0]];}
                          else
                           {if(c$3<0)
                             {return /* :: */[0,
                                      x1,
                                      /* :: */[0,x3,/* :: */[0,x2,/* [] */0]]];
                              }
                            else
                             {return /* :: */[0,
                                      x3,
                                      /* :: */[0,x1,/* :: */[0,x2,/* [] */0]]];
                              }
                            }
                          }
                        }
                      }
                    else
                     {var c$4=cmp(x1,x3);
                      
                      if(c$4=0)
                       {return /* :: */[0,x2,/* :: */[0,x1,/* [] */0]];}
                      else
                       {if(c$4<0)
                         {return /* :: */[0,
                                  x2,
                                  /* :: */[0,x1,/* :: */[0,x3,/* [] */0]]];
                          }
                        else
                         {var c$5=cmp(x2,x3);
                          
                          if(c$5=0)
                           {return /* :: */[0,x2,/* :: */[0,x1,/* [] */0]];}
                          else
                           {if(c$5<0)
                             {return /* :: */[0,
                                      x2,
                                      /* :: */[0,x3,/* :: */[0,x1,/* [] */0]]];
                              }
                            else
                             {return /* :: */[0,
                                      x3,
                                      /* :: */[0,x2,/* :: */[0,x1,/* [] */0]]];
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                else
                 {exit=14;}
                }
              else
               {exit=14;}
              }
            else
             {exit=14;}
            }
          }
        else
         {if(match$1)
           {var match$4=match$1[2];
            
            if(match$4)
             {var x2$1=match$4[1];
              
              var x1$1=match$1[1];
              
              var c$6=cmp(x1$1,x2$1);
              
              if(c$6=0)
               {return /* :: */[0,x1$1,/* [] */0];}
              else
               {if(c$6<0)
                 {return /* :: */[0,x1$1,/* :: */[0,x2$1,/* [] */0]];}
                else
                 {return /* :: */[0,x2$1,/* :: */[0,x1$1,/* [] */0]];}
                }
              }
            else
             {exit=14;}
            }
          else
           {exit=14;}
          }
        
        switch(exit)
         {case 14:
           var l$2=match$1;
           
           var n$1=match;
           
           var n1=n$1>>1;
           
           var n2=n$1-n1;
           
           var l2=chop(n1,l$2);
           
           var s1=rev_sort(n1,l$2);
           
           var s2=rev_sort(n2,l2);
           
           return rev_merge_rev(s1,s2,/* [] */0);
           
          }
        };
    
    var
     rev_sort=
      function(n,l$1)
       {var match=n;
        
        var match$1=l$1;
        
        var exit;
        
        if(match!=2)
         {if(match!=3)
           {exit=27;}
          else
           {if(match$1)
             {var match$2=match$1[2];
              
              if(match$2)
               {var match$3=match$2[2];
                
                if(match$3)
                 {var x3=match$3[1];
                  
                  var x2=match$2[1];
                  
                  var x1=match$1[1];
                  
                  var c=cmp(x1,x2);
                  
                  if(c=0)
                   {var c$1=cmp(x2,x3);
                    
                    if(c$1=0)
                     {return /* :: */[0,x2,/* [] */0];}
                    else
                     {if(c$1>0)
                       {return /* :: */[0,x2,/* :: */[0,x3,/* [] */0]];}
                      else
                       {return /* :: */[0,x3,/* :: */[0,x2,/* [] */0]];}
                      }
                    }
                  else
                   {if(c>0)
                     {var c$2=cmp(x2,x3);
                      
                      if(c$2=0)
                       {return /* :: */[0,x1,/* :: */[0,x2,/* [] */0]];}
                      else
                       {if(c$2>0)
                         {return /* :: */[0,
                                  x1,
                                  /* :: */[0,x2,/* :: */[0,x3,/* [] */0]]];
                          }
                        else
                         {var c$3=cmp(x1,x3);
                          
                          if(c$3=0)
                           {return /* :: */[0,x1,/* :: */[0,x2,/* [] */0]];}
                          else
                           {if(c$3>0)
                             {return /* :: */[0,
                                      x1,
                                      /* :: */[0,x3,/* :: */[0,x2,/* [] */0]]];
                              }
                            else
                             {return /* :: */[0,
                                      x3,
                                      /* :: */[0,x1,/* :: */[0,x2,/* [] */0]]];
                              }
                            }
                          }
                        }
                      }
                    else
                     {var c$4=cmp(x1,x3);
                      
                      if(c$4=0)
                       {return /* :: */[0,x2,/* :: */[0,x1,/* [] */0]];}
                      else
                       {if(c$4>0)
                         {return /* :: */[0,
                                  x2,
                                  /* :: */[0,x1,/* :: */[0,x3,/* [] */0]]];
                          }
                        else
                         {var c$5=cmp(x2,x3);
                          
                          if(c$5=0)
                           {return /* :: */[0,x2,/* :: */[0,x1,/* [] */0]];}
                          else
                           {if(c$5>0)
                             {return /* :: */[0,
                                      x2,
                                      /* :: */[0,x3,/* :: */[0,x1,/* [] */0]]];
                              }
                            else
                             {return /* :: */[0,
                                      x3,
                                      /* :: */[0,x2,/* :: */[0,x1,/* [] */0]]];
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                else
                 {exit=27;}
                }
              else
               {exit=27;}
              }
            else
             {exit=27;}
            }
          }
        else
         {if(match$1)
           {var match$4=match$1[2];
            
            if(match$4)
             {var x2$1=match$4[1];
              
              var x1$1=match$1[1];
              
              var c$6=cmp(x1$1,x2$1);
              
              if(c$6=0)
               {return /* :: */[0,x1$1,/* [] */0];}
              else
               {if(c$6>0)
                 {return /* :: */[0,x1$1,/* :: */[0,x2$1,/* [] */0]];}
                else
                 {return /* :: */[0,x2$1,/* :: */[0,x1$1,/* [] */0]];}
                }
              }
            else
             {exit=27;}
            }
          else
           {exit=27;}
          }
        
        switch(exit)
         {case 27:
           var l$2=match$1;
           
           var n$1=match;
           
           var n1=n$1>>1;
           
           var n2=n$1-n1;
           
           var l2=chop(n1,l$2);
           
           var s1=sort$1(n1,l$2);
           
           var s2=sort$1(n2,l2);
           
           return rev_merge(s1,s2,/* [] */0);
           
          }
        };
    
    var len=length(l);
    
    if(len<2){return l;}else{return sort$1(len,l);}
    };

module["exports"]=
{"length":length,
 "hd":hd,
 "tl":tl,
 "nth":nth,
 "rev":rev,
 "append":append,
 "rev_append":rev_append,
 "concat":concat,
 "flatten":flatten,
 "iter":iter,
 "iteri":iteri$1,
 "map":map,
 "mapi":mapi$1,
 "rev_map":rev_map,
 "fold_left":fold_left,
 "fold_right":fold_right,
 "iter2":iter2,
 "map2":map2,
 "rev_map2":rev_map2,
 "fold_left2":fold_left2,
 "fold_right2":fold_right2,
 "for_all":for_all,
 "exists":exists,
 "for_all2":for_all2,
 "exists2":exists2,
 "mem":mem,
 "memq":memq,
 "find":find,
 "filter":filter,
 "find_all":find_all,
 "partition":partition,
 "assoc":assoc,
 "assq":assq,
 "mem_assoc":mem_assoc,
 "mem_assq":mem_assq,
 "remove_assoc":remove_assoc,
 "remove_assq":remove_assq,
 "split":split,
 "combine":combine,
 "sort":sort,
 "stable_sort":stable_sort,
 "fast_sort":fast_sort,
 "sort_uniq":sort_uniq,
 "merge":merge};

