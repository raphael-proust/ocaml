// Generated CODE, PLEASE EDIT WITH CARE 

var Format=require("Format");


var empty=0;

var height=function(param){if(param){return param[5];}else{return 0;}};

var
 create=
  function(l,x,d,r)
   {var hl=height(l);
    
    var hr=height(r);
    
    return /* Node */[0,l,x,d,r,hl>=hr?hl+1:hr+1];
    };

var
 bal=
  function(l,x,d,r)
   {var hl=height(l);
    
    var hr=height(r);
    
    if(hl>hr+1)
     {var exit;
      
      if(l)
       {var lr=l[4];
        
        var ld=l[3];
        
        var lv=l[2];
        
        var ll=l[1];
        
        if(height(ll)>=height(lr))
         {return create(ll,lv,ld,create(lr,x,d,r));}
        else
         {if(lr)
           {return create
                    (create(ll,lv,ld,lr[1]),lr[2],lr[3],create(lr[4],x,d,r));
            }
          else
           {exit=10;}
          }
        }
      else
       {exit=10;}
      
      switch(exit){case 10:throw [0,Assert_failure,[0,"utils/tbl.ml",35,11]];}
      }
    else
     {if(hr>hl+1)
       {var exit$1;
        
        if(r)
         {var rl=r[1];
          
          var rr=r[4];
          
          if(height(rr)>=height(rl))
           {return create(create(l,x,d,rl),r[2],r[3],rr);}
          else
           {if(rl)
             {return create
                      (create(l,x,d,rl[1]),
                       rl[2],
                       rl[3],
                       create(rl[4],r[2],r[3],r[4]));
              }
            else
             {exit$1=8;}
            }
          }
        else
         {exit$1=8;}
        
        switch(exit$1)
         {case 8:throw [0,Assert_failure,[0,"utils/tbl.ml",42,11]];}
        }
      else
       {return create(l,x,d,r);}
      }
    };

var
 add=
  function(x,data,param)
   {if(param)
     {var r=param[4];
      
      var d=param[3];
      
      var v=param[2];
      
      var l=param[1];
      
      var c="unknown primitive:caml_compare";
      
      if(c=0)
       {return /* Node */[0,l,x,data,r,param[5]];}
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
     {var c="unknown primitive:caml_compare";
      
      if(c=0){return param[3];}else{return find(x,c<0?param[1]:param[4]);}
      }
    else
     {throw Not_found;}
    };

var
 mem=
  function(x,param)
   {if(param)
     {var c="unknown primitive:caml_compare";
      
      return (c=0)||mem(x,c<0?param[1]:param[4]);
      }
    else
     {return 0;}
    };

var
 merge=
  function(t1,t2)
   {if(t1)
     {if(t2)
       {return bal
                (t1[1],t1[2],t1[3],bal(merge(t1[4],t2[1]),t2[2],t2[3],t2[4]));
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
      
      var c="unknown primitive:caml_compare";
      
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
     {iter(f,param[1]);f(param[2],param[3]);return iter(f,param[4]);}
    else
     {return 0;}
    };

var
 map=
  function(f,param)
   {if(param)
     {var v=param[2];
      
      return /* Node */[0,
              map(f,param[1]),
              v,
              f(v,param[3]),
              map(f,param[4]),
              param[5]];
      }
    else
     {return 0;}
    };

var
 fold=
  function(f,m,accu)
   {if(m)
     {return fold(f,m[4],f(m[2],m[3],fold(f,m[1],accu)));}
    else
     {return accu;}
    };

var
 print=
  function(print_key,print_data,ppf,tbl)
   {var
     print_tbl=
      function(ppf$1,tbl$1)
       {return iter
                (function(k,d)
                  {return Format["fprintf"]
                           (ppf$1,
                            [0,
                             [18,
                              [1,[0,[11,"<2>",0],"<2>"]],
                              [15,
                               [11,
                                " ->",
                                [17,[0,"@ ",1,0],[15,[12,59,[17,0,[17,[0,"@ ",1,0],0]]]]]]]],
                             "@[<2>%a ->@ %a;@]@ "],
                            print_key,
                            k,
                            print_data,
                            d);
                   },
                 tbl$1);
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
               [11,"[[",[15,[11,"]]",[17,0,0]]]]],
              "@[<hv 2>[[%a]]@]"],
             print_tbl,
             tbl);
    };

module["exports"]=
{"empty":empty,
 "add":add,
 "find":find,
 "mem":mem,
 "remove":remove,
 "iter":iter,
 "map":map,
 "fold":fold,
 "print":print};

