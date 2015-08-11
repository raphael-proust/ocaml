// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");
var Map=require("Map");


var share_out=function(param){return param[1];};

var Not_simple="unknown primitive:caml_set_oo_id";

var
 Store=
  function(A)
   {var
     compare=
      function(prim,prim$1){return "unknown primitive:caml_compare";};
    
    var AMap=Map["Make"]([0,compare]);
    
    var
     mk_store=
      function(param)
       {var st=/* record */[0,AMap[1],0,0];
        
        var
         add=
          function(mustshare,act)
           {var i=st[2];
            
            st[3]=/* :: */[0,/* tuple */[0,mustshare,act],st[3]],0;
            st[2]=i+1,0;
            return i;
            };
        
        var
         store=
          function(mustshare,act)
           {var match=A[1](act);
            
            if(match)
             {var key=match[1];
              
              try
               {var match$1=AMap[22](key,st[1]);
                
                var i=match$1[2];
                
                if(!match$1[1])
                 {st[1]=AMap[4](key,/* tuple */[0,1,i],st[1]),0}
                else
                 {}
                
                return i;
                }
              catch(exn)
               {if(exn=Not_found)
                 {var i$1=add(mustshare,act);
                  
                  st[1]=AMap[4](key,/* tuple */[0,mustshare,i$1],st[1]),0;
                  return i$1;
                  }
                else
                 {throw exn;}
                }
              }
            else
             {return add(mustshare,act);}
            };
        
        var
         get=
          function(param$1)
           {return $$Array["of_list"]
                    (List["rev_map"]
                      (function(param$2){return param$2[2];},st[3]));
            };
        
        var
         get_shared=
          function(param$1)
           {var
             acts=
              $$Array["of_list"]
               (List["rev_map"]
                 (function(param$2)
                   {var act=param$2[2];
                    
                    if(param$2[1])
                     {return /* Shared */[0,act];}
                    else
                     {return /* Single */[1,act];}
                    },
                  st[3]));
            
            AMap[10]
             (function(param$2,param$3)
               {if(param$3[1])
                 {var i=param$3[2];
                  
                  var match=acts[i];
                  
                  switch(match)
                   {case 0:return 0;
                    case 1:return acts[i]=/* Shared */[0,match[1]],0;
                    }
                  }
                else
                 {return 0;}
                },
              st[1]);
            return acts;
            };
        
        return /* record */[0,get,get_shared,store(0),store(1)];
        };
    
    return [0,AMap,mk_store];
    };

var
 Make=
  function(Arg)
   {var cut=[0,8];
    
    var more_cut=[0,16];
    
    var
     pint=
      function(chan,i)
       {if(i=Pervasives["min_int"])
         {return Printf["fprintf"](chan,[0,[11,"-oo",0],"-oo"]);}
        else
         {if(i=Pervasives["max_int"])
           {return Printf["fprintf"](chan,[0,[11,"oo",0],"oo"]);}
          else
           {return Printf["fprintf"](chan,[0,[4,0,0,0,0],"%d"],i);}
          }
        };
    
    var
     pcases=
      function(chan,cases)
       {for(var i=0;i<=cases["length"]-1;i++)
         {var match=cases[i];
          
          var act=match[3];
          
          var h=match[2];
          
          var l=match[1];
          
          if(l=h)
           {Printf["fprintf"]
             (chan,[0,[4,0,0,0,[12,58,[4,0,0,0,[12,32,0]]]],"%d:%d "],l,act)}
          else
           {Printf["fprintf"]
             (chan,
              [0,[15,[11,"..",[15,[12,58,[4,0,0,0,[12,32,0]]]]]],"%a..%a:%d "],
              pint,
              l,
              pint,
              h,
              act)}
          }
        };
    
    var
     prerr_inter=
      function(i)
       {return Printf["fprintf"]
                (Pervasives["stderr"],
                 [0,[11,"cases=",[15,0]],"cases=%a"],
                 pcases,
                 i[1]);
        };
    
    var get_act=function(cases,i){var match=cases[i];return match[3];};
    
    var get_low=function(cases,i){var match=cases[i];return match[1];};
    
    var too_much=/* record */[0,Pervasives["max_int"],Pervasives["max_int"]];
    
    var
     ptests=
      function(chan,param)
       {var n=param[1];
        
        var ni=param[2];
        
        return Printf["fprintf"]
                (chan,
                 [0,
                  [11,"{n=",[4,0,0,0,[11," ; ni=",[4,0,0,0,[12,125,0]]]]],
                  "{n=%d ; ni=%d}"],
                 n,
                 ni);
        };
    
    var
     pta=
      function(chan,t)
       {for(var i=0;i<=t["length"]-1;i++)
         {Printf["fprintf"]
           (chan,
            [0,[4,0,0,0,[11,": ",[15,[12,10,0]]]],"%d: %a\n"],
            i,
            ptests,
            t[i])}
        };
    
    var
     count_tests=
      function(s)
       {var
         r=
          $$Array["init"]
           (s[2]["length"],function(param){return /* record */[0,0,0];});
        
        var c=s[1];
        
        var imax=c["length"]-1;
        
        for(var i=0;i<=imax;i++)
         {var match=c[i];
          
          var x=r[match[3]];
          
          x[1]=x[1]+1,0;
          if(match[1]<match[2]&&i!=0&&i!=imax){x[2]=x[2]+1,0}else{}
          }
        
        return r;
        };
    
    var
     less_tests=
      function(c1,c2)
       {if(c1[1]<c2[1])
         {return 1;}
        else
         {if(c1[1]=c2[1])
           {if(c1[2]<c2[2]){return 1;}else{return 0;}}
          else
           {return 0;}
          }
        };
    
    var eq_tests=function(c1,c2){return (c1[1]=c2[1])&&(c1[2]=c2[2]);};
    
    var
     min_tests=
      function(c1,c2){if(less_tests(c1,c2)){return c1;}else{return c2;}};
    
    var
     less2tests=
      function(param,param$1)
       {var c2=param$1[1];
        
        var c1=param[1];
        
        if(eq_tests(c1,c2))
         {return less_tests(param[2],param$1[2]);}
        else
         {return less_tests(c1,c2);}
        };
    
    var
     add_test=
      function(t1,t2){t1[1]=t1[1]+t2[1],0;return t1[2]=t1[2]+t2[2],0;};
    
    var
     pret=
      function(chan,param)
       {if(typeof param=="number")
         {switch(param)
           {case 0:return Printf["fprintf"](chan,[0,[11,"No",0],"No"]);}}
        else
         {switch(param[0])
           {case 0:
             return Printf["fprintf"]
                     (chan,
                      [0,
                       [11,"Inter ",[4,0,0,0,[12,32,[4,0,0,0,0]]]],
                       "Inter %d %d"],
                      param[1],
                      param[2]);
             
            case 1:
             return Printf["fprintf"]
                     (chan,[0,[11,"Sep ",[4,0,0,0,0]],"Sep %d"],param[1]);
             
            }}
        };
    
    var
     coupe=
      function(cases,i)
       {var match=cases[i];
        
        return /* tuple */[0,
                match[1],
                $$Array["sub"](cases,0,i),
                $$Array["sub"](cases,i,cases["length"]-i)];
        };
    
    var
     case_append=
      function(c1,c2)
       {var len1=c1["length"];
        
        var len2=c2["length"];
        
        if(len1!=0)
         {if(len2!=0)
           {var match=c1[c1["length"]-1];
            
            var act1=match[3];
            
            var h1=match[2];
            
            var l1=match[1];
            
            var match$1=c2[0];
            
            var act2=match$1[3];
            
            var h2=match$1[2];
            
            var l2=match$1[1];
            
            if("unknown primitive:caml_equal")
             {var r="unknown primitive:caml_make_vect";
              
              for(var i=0;i<=len1-2;i++){r[i]=c1[i],0}
              
              if(len1-2>=0)
               {var match$2=r[len1-2];
                
                var h=match$2[2];
                
                if(h+1<l1){var l=h+1;}else{var l=l1;}
                }
              else
               {var l=l1;}
              
              if(1<len2-1)
               {var match$3=c2[1];
                
                var l$1=match$3[1];
                
                if(h2+1<l$1){var h$1=l$1-1;}else{var h$1=h2;}
                }
              else
               {var h$1=h2;}
              
              r[len1-1]=/* tuple */[0,l,h$1,act1],0;
              for(var i$1=1;i$1<=len2-1;i$1++){r[len1-1+i$1]=c2[i$1],0}
              
              return r;
              }
            else
             {if(h1>l1)
               {var r$1="unknown primitive:caml_make_vect";
                
                for(var i$2=0;i$2<=len1-2;i$2++){r$1[i$2]=c1[i$2],0}
                
                r$1[len1-1]=/* tuple */[0,l1,l2-1,act1],0;
                for(var i$3=0;i$3<=len2-1;i$3++){r$1[len1+i$3]=c2[i$3],0}
                
                return r$1;
                }
              else
               {if(h2>l2)
                 {var r$2="unknown primitive:caml_make_vect";
                  
                  for(var i$4=0;i$4<=len1-1;i$4++){r$2[i$4]=c1[i$4],0}
                  
                  r$2[len1]=/* tuple */[0,h1+1,h2,act2],0;
                  for(var i$5=1;i$5<=len2-1;i$5++){r$2[len1+i$5]=c2[i$5],0}
                  
                  return r$2;
                  }
                else
                 {return $$Array["append"](c1,c2);}
                }
              }
            }
          else
           {return c1;}
          }
        else
         {return c2;}
        };
    
    var
     coupe_inter=
      function(i,j,cases)
       {var lcases=cases["length"];
        
        var match=cases[i];
        
        var match$1=cases[j];
        
        return /* tuple */[0,
                match[1],
                match$1[2],
                $$Array["sub"](cases,i,j-i+1),
                case_append
                 ($$Array["sub"](cases,0,i),
                  $$Array["sub"](cases,j+1,lcases-(j+1)))];
        };
    
    var
     pkind=
      function(chan,param)
       {if(typeof param=="number")
         {switch(param)
           {case 0:return Printf["fprintf"](chan,[0,[12,69,0],"E"]);}}
        else
         {switch(param[0])
           {case 0:
             return Printf["fprintf"]
                     (chan,[0,[12,86,[4,0,0,0,0]],"V%d"],param[1]);
             
            case 1:
             return Printf["fprintf"]
                     (chan,[0,[12,73,[4,0,0,0,0]],"I%d"],param[1]);
             
            }}
        };
    
    var
     pkey=
      function(chan,param)
       {if(param)
         {var rem=param[2];
          
          var k=param[1];
          
          if(rem)
           {return Printf["fprintf"]
                    (chan,[0,[15,[12,32,[15,0]]],"%a %a"],pkey,rem,pkind,k);
            }
          else
           {return pkind(chan,k);}
          }
        else
         {return 0;}
        };
    
    var t=Hashtbl["create"](0,17);
    
    var
     make_key=
      function(cases)
       {var seen=[0,0];
        
        var count=[0,0];
        
        var
         got_it=
          function(act,param)
           {if(param)
             {var match=param[1];
              
              if("unknown primitive:caml_equal")
               {return match[2];}
              else
               {return got_it(act,param[2]);}
              }
            else
             {seen[1]=/* :: */[0,/* tuple */[0,act,count[1]],seen[1]],0;
              var r=count[1];
              
              count[0]++;
              return r;
              }
            };
        
        var
         make_one=
          function(l,h,act)
           {if("unknown primitive:caml_equal")
             {return /* Kvalue */[0,got_it(act,seen[1])];}
            else
             {return /* Kinter */[1,got_it(act,seen[1])];}
            };
        
        var
         make_rec=
          function(i,pl)
           {if(i<0)
             {return 0;}
            else
             {var match=cases[i];
              
              var act=match[3];
              
              var h=match[2];
              
              var l=match[1];
              
              if(pl=h+1)
               {return /* :: */[0,make_one(l,h,act),make_rec(i-1,l)];}
              else
               {return /* :: */[0,
                        0,
                        /* :: */[0,make_one(l,h,act),make_rec(i-1,l)]];
                }
              }
            };
        
        var match=cases[cases["length"]-1];
        
        var l=match[1];
        
        return /* :: */[0,
                make_one(l,match[2],match[3]),
                make_rec(cases["length"]-2,l)];
        };
    
    var
     same_act=
      function(t$1)
       {var len=t$1["length"];
        
        var a=get_act(t$1,len-1);
        
        var
         do_rec=
          function(i)
           {if(i<0)
             {return 1;}
            else
             {var b=get_act(t$1,i);
              
              return "unknown primitive:caml_equal"&&do_rec(i-1);
              }
            };
        
        return do_rec(len-2);
        };
    
    var inter_limit=1<<16;
    
    var ok_inter=[0,0];
    
    var
     opt_count=
      function(top,cases)
       {var key=make_key(cases);
        
        try
         {return Hashtbl["find"](t,key);}
        catch(exn)
         {if(exn=Not_found)
           {var lcases=cases["length"];
            
            if(lcases!=0)
             {if(same_act(cases))
               {var
                 r=
                  /* tuple */[0,
                   0,
                   /* tuple */[0,/* record */[0,0,0],/* record */[0,0,0]]];
                }
              else
               {if(lcases<cut[1])
                 {var r=$$enum(top,cases);}
                else
                 {if(lcases<more_cut[1])
                   {var r=heuristic(top,cases);}
                  else
                   {var r=divide(top,cases);}
                  }
                }
              }
            else
             {throw [0,Assert_failure,[0,"bytecomp/switch.ml",400,15]];}
            
            Hashtbl["add"](t,key,r);
            return r;
            }
          else
           {throw exn;}
          }
        };
    
    var
     divide=
      function(top,cases)
       {var lcases=cases["length"];
        
        var m=lcases/2;
        
        var match=coupe(cases,m);
        
        var ci=/* record */[0,1,0];
        
        var cm=/* record */[0,1,0];
        
        var match$1=opt_count(0,match[2]);
        
        var match$2=match$1[2];
        
        var cml=match$2[1];
        
        var match$3=opt_count(0,match[3]);
        
        var match$4=match$3[2];
        
        var cmr=match$4[1];
        
        add_test(ci,match$2[2]);
        add_test(ci,match$4[2]);
        if(less_tests(cml,cmr)){add_test(cm,cmr)}else{add_test(cm,cml)}
        
        return /* tuple */[0,/* Sep */[1,m],/* tuple */[0,cm,ci]];
        };
    
    var
     heuristic=
      function(top,cases)
       {var lcases=cases["length"];
        
        var match=divide(0,cases);
        
        var csep=match[2];
        
        if(ok_inter[1])
         {var match$1=cases[0];
          
          var match$2=cases[lcases-1];
          
          if("unknown primitive:caml_equal")
           {var match$3=coupe_inter(1,lcases-2,cases);
            
            var high=match$3[2];
            
            var low=match$3[1];
            
            var match$4=opt_count(0,match$3[3]);
            
            var match$5=match$4[2];
            
            var cmi=match$5[1];
            
            var match$6=opt_count(0,match$3[4]);
            
            var match$7=match$6[2];
            
            var cmo=match$7[1];
            
            var cmij=/* record */[0,1,(low=high)?0:1];
            
            var cij=/* record */[0,1,(low=high)?0:1];
            
            add_test(cij,match$5[2]);
            add_test(cij,match$7[2]);
            if(less_tests(cmi,cmo))
             {add_test(cmij,cmo)}
            else
             {add_test(cmij,cmi)}
            
            var
             match$8=
              /* tuple */[0,/* Inter */[0,1,lcases-2],/* tuple */[0,cmij,cij]];
            }
          else
           {var
             match$8=
              /* tuple */[0,[0,-1,-1],/* tuple */[0,too_much,too_much]];
            }
          }
        else
         {var
           match$8=
            /* tuple */[0,[0,-1,-1],/* tuple */[0,too_much,too_much]];
          }
        
        var cinter=match$8[2];
        
        if(less2tests(csep,cinter))
         {return /* tuple */[0,match[1],csep];}
        else
         {return /* tuple */[0,match$8[1],cinter];}
        };
    
    var
     $$enum=
      function(top,cases)
       {var lcases=cases["length"];
        
        var best=-1;
        
        var best_cost=/* tuple */[0,too_much,too_much];
        
        for(var i=1;i<=lcases-1;i++)
         {var match=coupe(cases,i);
          
          var ci=/* record */[0,1,0];
          
          var cm=/* record */[0,1,0];
          
          var match$1=opt_count(0,match[2]);
          
          var match$2=match$1[2];
          
          var cml=match$2[1];
          
          var match$3=opt_count(0,match[3]);
          
          var match$4=match$3[2];
          
          var cmr=match$4[1];
          
          add_test(ci,match$2[2]);
          add_test(ci,match$4[2]);
          if(less_tests(cml,cmr)){add_test(cm,cmr)}else{add_test(cm,cml)}
          
          if(less2tests(/* tuple */[0,cm,ci],best_cost))
           {if(top)
             {Printf["fprintf"]
               (Pervasives["stderr"],
                [0,[11,"Get it: ",[4,0,0,0,[12,10,0]]],"Get it: %d\n"],
                i)}
            else
             {}
            
            best=i;
            
            best_cost=/* tuple */[0,cm,ci];
            }
          else
           {}
          }
        
        var match$5=/* tuple */[0,best,best_cost];
        
        var with_sep=match$5[2];
        
        if(!ok_inter[1])
         {var rlow=-1;
          
          var rhigh=-1;
          
          var best_cost$1=/* tuple */[0,too_much,too_much];
          
          for(var i$1=1;i$1<=lcases-2;i$1++)
           {var match$6=coupe_inter(i$1,i$1,cases);
            
            if(match$6[1]=match$6[2])
             {var match$7=opt_count(0,match$6[3]);
              
              var match$8=match$7[2];
              
              var cmi=match$8[1];
              
              var match$9=opt_count(0,match$6[4]);
              
              var match$10=match$9[2];
              
              var cmo=match$10[1];
              
              var cmij=/* record */[0,1,0];
              
              var cij=/* record */[0,1,0];
              
              add_test(cij,match$8[2]);
              add_test(cij,match$10[2]);
              if(less_tests(cmi,cmo))
               {add_test(cmij,cmo)}
              else
               {add_test(cmij,cmi)}
              
              if(less2tests(/* tuple */[0,cmij,cij],best_cost$1))
               {rlow=i$1;rhigh=i$1;best_cost$1=/* tuple */[0,cmij,cij];}
              else
               {}
              }
            else
             {}
            }
          
          var match$11=/* tuple */[0,rlow,rhigh,best_cost$1];
          }
        else
         {var rlow$1=-1;
          
          var rhigh$1=-1;
          
          var best_cost$2=/* tuple */[0,too_much,too_much];
          
          for(var i$2=1;i$2<=lcases-2;i$2++)
           {for(var j=i$2;j<=lcases-2;j++)
             {var match$12=coupe_inter(i$2,j,cases);
              
              var high=match$12[2];
              
              var low=match$12[1];
              
              var match$13=opt_count(0,match$12[3]);
              
              var match$14=match$13[2];
              
              var cmi$1=match$14[1];
              
              var match$15=opt_count(0,match$12[4]);
              
              var match$16=match$15[2];
              
              var cmo$1=match$16[1];
              
              var cmij$1=/* record */[0,1,(low=high)?0:1];
              
              var cij$1=/* record */[0,1,(low=high)?0:1];
              
              add_test(cij$1,match$14[2]);
              add_test(cij$1,match$16[2]);
              if(less_tests(cmi$1,cmo$1))
               {add_test(cmij$1,cmo$1)}
              else
               {add_test(cmij$1,cmi$1)}
              
              if(less2tests(/* tuple */[0,cmij$1,cij$1],best_cost$2))
               {rlow$1=i$2;rhigh$1=j;best_cost$2=/* tuple */[0,cmij$1,cij$1];}
              else
               {}
              }
            }
          
          var match$11=/* tuple */[0,rlow$1,rhigh$1,best_cost$2];
          }
        
        var r=/* Inter */[0,match$11[1],match$11[2]];
        
        var rc=match$11[3];
        
        if(less2tests(with_sep,rc))
         {r=/* Sep */[1,match$5[1]];rc=with_sep;}
        else
         {}
        
        return /* tuple */[0,r,rc];
        };
    
    var
     make_if_test=
      function(test,arg,i,ifso,ifnot)
       {return Arg[13]
                (Arg[10](test,/* :: */[0,arg,/* :: */[0,Arg[8](i),0]]),
                 ifso,
                 ifnot);
        };
    
    var
     make_if_lt=
      function(arg,i,ifso,ifnot)
       {if(i!=1)
         {return make_if_test(Arg[4],arg,i,ifso,ifnot);}
        else
         {return make_if_test(Arg[3],arg,0,ifso,ifnot);}
        };
    
    var
     make_if_le=
      function(arg,i,ifso,ifnot)
       {if(i!=-1)
         {return make_if_test(Arg[3],arg,i,ifso,ifnot);}
        else
         {return make_if_test(Arg[4],arg,0,ifso,ifnot);}
        };
    
    var
     make_if_gt=
      function(arg,i,ifso,ifnot)
       {if(i!=-1)
         {return make_if_test(Arg[6],arg,i,ifso,ifnot);}
        else
         {return make_if_test(Arg[5],arg,0,ifso,ifnot);}
        };
    
    var
     make_if_ge=
      function(arg,i,ifso,ifnot)
       {if(i!=1)
         {return make_if_test(Arg[5],arg,i,ifso,ifnot);}
        else
         {return make_if_test(Arg[6],arg,0,ifso,ifnot);}
        };
    
    var
     make_if_eq=
      function(arg,i,ifso,ifnot)
       {return make_if_test(Arg[1],arg,i,ifso,ifnot);};
    
    var
     make_if_ne=
      function(arg,i,ifso,ifnot)
       {return make_if_test(Arg[2],arg,i,ifso,ifnot);};
    
    var
     do_make_if_out=
      function(h,arg,ifso,ifno){return Arg[13](Arg[11](h,arg),ifso,ifno);};
    
    var
     make_if_out=
      function(ctx,l,d,mk_ifso,mk_ifno)
       {if(l!=0)
         {return Arg[7]
                  (Arg[9](ctx[2],-l),
                   function(arg)
                    {var ctx$1=/* record */[0,-l+ctx[1],arg];
                     
                     return do_make_if_out
                             (Arg[8](d),arg,mk_ifso(ctx$1),mk_ifno(ctx$1));
                     });
          }
        else
         {return do_make_if_out(Arg[8](d),ctx[2],mk_ifso(ctx),mk_ifno(ctx));}
        };
    
    var
     do_make_if_in=
      function(h,arg,ifso,ifno){return Arg[13](Arg[12](h,arg),ifso,ifno);};
    
    var
     make_if_in=
      function(ctx,l,d,mk_ifso,mk_ifno)
       {if(l!=0)
         {return Arg[7]
                  (Arg[9](ctx[2],-l),
                   function(arg)
                    {var ctx$1=/* record */[0,-l+ctx[1],arg];
                     
                     return do_make_if_in
                             (Arg[8](d),arg,mk_ifso(ctx$1),mk_ifno(ctx$1));
                     });
          }
        else
         {return do_make_if_in(Arg[8](d),ctx[2],mk_ifso(ctx),mk_ifno(ctx));}
        };
    
    var
     c_test=
      function(ctx,s)
       {var actions=s[2];
        
        var cases=s[1];
        
        var lcases=cases["length"];
        
        if(lcases>0)
         {}
        else
         {throw [0,Assert_failure,[0,"bytecomp/switch.ml",611,6]];}
        
        if(lcases=1)
         {return actions[get_act(cases,0)](ctx);}
        else
         {var match=opt_count(0,cases);
          
          var w=match[1];
          
          if(typeof w=="number")
           {switch(w){case 0:return actions[get_act(cases,0)](ctx);}}
          else
           {switch(w[0])
             {case 0:
               var match$1=coupe_inter(w[1],w[2],cases);
               
               var outside=match$1[4];
               
               var inside=match$1[3];
               
               var high=match$1[2];
               
               var low=match$1[1];
               
               var match$2=opt_count(0,inside);
               
               var cinside=match$2[2][1];
               
               var match$3=opt_count(0,outside);
               
               var coutside=match$3[2][1];
               
               if(low=high)
                {if(less_tests(coutside,cinside))
                  {return make_if_eq
                           (ctx[2],
                            low+ctx[1],
                            c_test(ctx,/* record */[0,inside,s[2]]),
                            c_test(ctx,/* record */[0,outside,s[2]]));
                   }
                 else
                  {return make_if_ne
                           (ctx[2],
                            low+ctx[1],
                            c_test(ctx,/* record */[0,outside,s[2]]),
                            c_test(ctx,/* record */[0,inside,s[2]]));
                   }
                 }
               else
                {if(less_tests(coutside,cinside))
                  {return make_if_in
                           (ctx,
                            low+ctx[1],
                            high-low,
                            function(ctx$1)
                             {return c_test(ctx$1,/* record */[0,inside,s[2]]);},
                            function(ctx$1)
                             {return c_test(ctx$1,/* record */[0,outside,s[2]]);});
                   }
                 else
                  {return make_if_out
                           (ctx,
                            low+ctx[1],
                            high-low,
                            function(ctx$1)
                             {return c_test(ctx$1,/* record */[0,outside,s[2]]);},
                            function(ctx$1)
                             {return c_test(ctx$1,/* record */[0,inside,s[2]]);});
                   }
                 }
               
              case 1:
               var i=w[1];
               
               var match$4=coupe(cases,i);
               
               var right=match$4[3];
               
               var left=match$4[2];
               
               var lim=match$4[1];
               
               var match$5=opt_count(0,left);
               
               var match$6=opt_count(0,right);
               
               var left$1=/* record */[0,left,s[2]];
               
               var right$1=/* record */[0,right,s[2]];
               
               if((i=1)&&((lim+ctx[1])=1)&&((get_low(cases,0)+ctx[1])=0))
                {return make_if_ne
                         (ctx[2],0,c_test(ctx,right$1),c_test(ctx,left$1));
                 }
               else
                {if(less_tests(match$6[2][1],match$5[2][1]))
                  {return make_if_lt
                           (ctx[2],lim+ctx[1],c_test(ctx,left$1),c_test(ctx,right$1));
                   }
                 else
                  {return make_if_ge
                           (ctx[2],lim+ctx[1],c_test(ctx,right$1),c_test(ctx,left$1));
                   }
                 }
               
              }}
          }
        };
    
    var theta=[0,0.33333];
    
    var switch_min=[0,3];
    
    var
     particular_case=
      function(cases,i,j)
       {var match=cases[i];
        
        var match$1=cases[i+1];
        
        var l2=match$1[1];
        
        var match$2=cases[i+2];
        
        var l3=match$2[1];
        
        return ((j-i)=2)&&
               ((match[1]+1)=l2)&&
               ((l2+1)=l3)&&
               (l3=match$2[2])&&
               "unknown primitive:caml_notequal";
        };
    
    var
     approx_count=
      function(cases,i,j,n_actions)
       {var l=j-i+1;
        
        if(l<cut[1])
         {var match=opt_count(0,$$Array["sub"](cases,i,l));
          
          return match[2][2][1];
          }
        else
         {return l-1;}
        };
    
    var
     dense=
      function(param,i,j)
       {if(i=j)
         {return 1;}
        else
         {var cases=param[1];
          
          var match=cases[i];
          
          var match$1=cases[j];
          
          var ntests=approx_count(cases,i,j,param[2]["length"]);
          
          return particular_case(cases,i,j)||
                 ntests>=
                 switch_min[1]&&
                 ntests+
                 1>=
                 theta[1]*
                 (match$1[2]-match[1]+1);
          }
        };
    
    var
     comp_clusters=
      function(s)
       {var len=s[1]["length"];
        
        var min_clusters="unknown primitive:caml_make_vect";
        
        var k="unknown primitive:caml_make_vect";
        
        var
         get_min=
          function(i){if(i<0){return 0;}else{return min_clusters[i];}};
        
        for(var i=0;i<=len-1;i++)
         {for(var j=0;j<=i;j++)
           {if(dense(s,j,i)&&get_min(j-1)+1<min_clusters[i])
             {k[i]=j,0,min_clusters[i]=get_min(j-1)+1,0}
            else
             {}
            }
          }
        
        return /* tuple */[0,min_clusters[len-1],k];
        };
    
    var
     make_switch=
      function(param,i,j)
       {var actions=param[2];
        
        var cases=param[1];
        
        var match=cases[i];
        
        var ll=match[1];
        
        var match$1=cases[j];
        
        var tbl="unknown primitive:caml_make_vect";
        
        var t$1=Hashtbl["create"](0,17);
        
        var index=[0,0];
        
        var
         get_index=
          function(act)
           {try
             {return Hashtbl["find"](t$1,act);}
            catch(exn)
             {if(exn=Not_found)
               {var i$1=index[1];
                
                index[0]++;
                Hashtbl["add"](t$1,act,i$1);
                return i$1;
                }
              else
               {throw exn;}
              }
            };
        
        for(var k=i;k<=j;k++)
         {var match$2=cases[k];
          
          var index$1=get_index(match$2[3]);
          
          for(var kk=match$2[1]-ll;kk<=match$2[2]-ll;kk++){tbl[kk]=index$1,0}
          }
        
        var acts="unknown primitive:caml_make_vect";
        
        Hashtbl["iter"]
         (function(act,i$1){return acts[i$1]=actions[act],0;},t$1);
        return function(ctx)
         {var match$3=-ll-ctx[1];
          
          if(match$3!=0)
           {return Arg[7]
                    (Arg[9](ctx[2],-ll-ctx[1]),
                     function(arg){return Arg[14](arg,tbl,acts);});
            }
          else
           {return Arg[14](ctx[2],tbl,acts);}
          };
        };
    
    var
     make_clusters=
      function(s,n_clusters,k)
       {var actions=s[2];
        
        var cases=s[1];
        
        var len=cases["length"];
        
        var r="unknown primitive:caml_make_vect";
        
        var t$1=Hashtbl["create"](0,17);
        
        var index=[0,0];
        
        var bidon=[0,actions["length"]];
        
        var
         get_index=
          function(act)
           {try
             {var match=Hashtbl["find"](t$1,act);return match[1];}
            catch(exn)
             {if(exn=Not_found)
               {var i=index[1];
                
                index[0]++;
                Hashtbl["add"]
                 (t$1,
                  act,
                  /* tuple */[0,i,function(param){return actions[act];}]);
                return i;
                }
              else
               {throw exn;}
              }
            };
        
        var
         add_index=
          function(act)
           {var i=index[1];
            
            index[0]++;
            bidon[0]++;
            Hashtbl["add"](t$1,bidon[1],/* tuple */[0,i,act]);
            return i;
            };
        
        var
         zyva=
          function(j,ir)
           {var i=k[j];
            
            if(i=j)
             {var match=cases[i];
              
              r[ir]=/* tuple */[0,match[1],match[2],get_index(match[3])],0}
            else
             {var match$1=cases[i];
              
              var match$2=cases[j];
              
              r[ir]=
              /* tuple */[0,
               match$1[1],
               match$2[2],
               add_index(make_switch(s,i,j))],
              0}
            
            if(i>0){return zyva(i-1,ir-1);}else{return 0;}
            };
        
        zyva(len-1,n_clusters-1);
        var acts="unknown primitive:caml_make_vect";
        
        Hashtbl["iter"]
         (function(param,param$1){return acts[param$1[1]]=param$1[2],0;},t$1);
        return /* record */[0,r,acts];
        };
    
    var
     do_zyva=
      function(param,arg,cases,actions)
       {var old_ok=ok_inter[1];
        
        ok_inter[1]=
        Pervasives["abs"](param[1])<=
        inter_limit&&
        Pervasives["abs"](param[2])<=
        inter_limit,
        0;
        if("unknown primitive:caml_notequal"){Hashtbl["clear"](t)}else{}
        
        var s=/* record */[0,cases,actions];
        
        var match=comp_clusters(s);
        
        var clusters=make_clusters(s,match[1],match[2]);
        
        return c_test(/* record */[0,0,arg],clusters);
        };
    
    var
     abstract_shared=
      function(actions)
       {var handlers=[0,function(x){return x;}];
        
        var
         actions$1=
          $$Array["map"]
           (function(act)
             {switch(act)
               {case 0:
                 var match=Arg[15](act[1]);
                 
                 var h=match[2];
                 
                 var oh=handlers[1];
                 
                 handlers[1]=function(act$1){return h(oh(act$1));},0;
                 return Arg[16](match[1]);
                 
                case 1:return act[1];
                }
              },
            actions);
        
        return /* tuple */[0,handlers[1],actions$1];
        };
    
    var
     zyva=
      function(lh,arg,cases,actions)
       {var actions$1=actions[2](0);
        
        var match=abstract_shared(actions$1);
        
        return match[1](do_zyva(lh,arg,cases,match[2]));
        };
    
    var
     test_sequence=
      function(arg,cases,actions)
       {var actions$1=actions[2](0);
        
        var match=abstract_shared(actions$1);
        
        var old_ok=ok_inter[1];
        
        ok_inter[1]=0,0;
        if("unknown primitive:caml_notequal"){Hashtbl["clear"](t)}else{}
        
        var
         s=
          /* record */[0,
           cases,
           $$Array["map"](function(act,param){return act;},match[2])];
        
        return match[1](c_test(/* record */[0,0,arg],s));
        };
    
    return [0,
            cut,
            more_cut,
            pint,
            pcases,
            prerr_inter,
            get_act,
            get_low,
            too_much,
            ptests,
            pta,
            count_tests,
            less_tests,
            eq_tests,
            min_tests,
            less2tests,
            add_test,
            pret,
            coupe,
            case_append,
            coupe_inter,
            pkind,
            pkey,
            t,
            make_key,
            same_act,
            inter_limit,
            ok_inter,
            opt_count,
            divide,
            heuristic,
            $$enum,
            make_if_test,
            make_if_lt,
            make_if_le,
            make_if_gt,
            make_if_ge,
            make_if_eq,
            make_if_ne,
            do_make_if_out,
            make_if_out,
            do_make_if_in,
            make_if_in,
            c_test,
            theta,
            switch_min,
            particular_case,
            approx_count,
            dense,
            comp_clusters,
            make_switch,
            make_clusters,
            do_zyva,
            abstract_shared,
            zyva,
            test_sequence];
    };

module["exports"]=
{"Not_simple":Not_simple,
 "Store":function(funarg){var $$let=Store(funarg);return [0,$$let[2]];},
 "Make":
 function(funarg){var $$let=Make(funarg);return [0,$$let[54],$$let[55]];}};

