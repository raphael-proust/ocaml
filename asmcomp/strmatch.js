// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Nativeint=require("Nativeint");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Set=require("Set");
var Lambda=require("Lambda");
var Arch=require("Arch");
var Ident=require("Ident");
var Map=require("Map");


var
 Make=
  function(I)
   {var dbg=0;
    
    var mask=(Nativeint["one"]<<8)-Nativeint["one"];
    
    var
     pat_as_string=
      function(p)
       {var
         digits=
          function(k,n,p$1)
           {if(n<=0)
             {return k;}
            else
             {var d=mask&p$1;
              
              var d$1=Char["escaped"](Char["chr"](d));
              
              return digits(/* :: */[0,d$1,k],n-1,p$1>>>8);
              }
            };
        
        var ds=digits(0,Arch["size_addr"],p);
        
        if(Arch["big_endian"]){var ds$1=ds;}else{var ds$1=List["rev"](ds);}
        
        return $$String["concat"]("",ds$1);
        };
    
    var
     do_pp_cases=
      function(chan,cases)
       {return List["iter"]
                (function(param)
                  {return Printf["fprintf"]
                           (chan,
                            [0,[11,"  [",[2,0,[11,"]\n",0]]],"  [%s]\n"],
                            $$String["concat"]("; ",List["map"](pat_as_string,param[1])));
                   },
                 cases);
        };
    
    var
     pp_cases=
      function(chan,tag,cases)
       {Printf["eprintf"]([0,[2,0,[11,":\n",0]],"%s:\n"],tag);
        return do_pp_cases(chan,cases);
        };
    
    var
     pp_match=
      function(chan,tag,idxs,cases)
       {Printf["eprintf"]
         ([0,[2,0,[11,": idx=[",[2,0,[11,"]\n",0]]]],"%s: idx=[%s]\n"],
          tag,
          $$String["concat"]
           ("; ",List["map"](Pervasives["string_of_int"],idxs)));
        return do_pp_cases(chan,cases);
        };
    
    var gen_cell_id=function(param){return Ident["create"]("cell");};
    
    var gen_size_id=function(param){return Ident["create"]("size");};
    
    var
     mk_let_cell=
      function(id,str,ind,body)
       {var
         cell=
          /* Cop */[11,
           [2,6],
           /* :: */[0,
            /* Cop */[11,
             13,
             /* :: */[0,
              str,
              /* :: */[0,/* Cconst_int */[0,Arch["size_int"]*ind],0]]],
            0]];
        
        return /* Clet */[8,id,cell,body];
        };
    
    var
     mk_let_size=
      function(id,str,body)
       {var size=I[1](str);return /* Clet */[8,id,size,body];};
    
    var
     mk_cmp_gen=
      function(cmp_op,id,nat,ifso,ifnot)
       {var
         test=
          /* Cop */[11,
           /* Ccmpi */[4,cmp_op],
           /* :: */[0,
            /* Cvar */[7,id],
            /* :: */[0,/* Cconst_natpointer */[5,nat],0]]];
        
        return /* Cifthenelse */[13,test,ifso,ifnot];
        };
    
    var mk_lt=mk_cmp_gen(2);
    
    var mk_eq=mk_cmp_gen(0);
    
    var
     compare=
      function(x,y)
       {if(x<y){return -1;}else{if(x>y){return 1;}else{return 0;}}};
    
    var IntArg=[0,compare];
    
    var
     interval=
      function(m0,n)
       {var
         do_rec=
          function(m)
           {if(m>=n){return 0;}else{return /* :: */[0,m,do_rec(m+1)];}};
        
        return do_rec(m0);
        };
    
    var
     pat_of_string=
      function(str)
       {var len=str["length"];
        
        var n=len/Arch["size_addr"]+1;
        
        var
         get_byte=
          function(i)
           {if(i<len)
             {return str[i];}
            else
             {if(i<n*Arch["size_addr"]-1)
               {return 0;}
              else
               {return n*Arch["size_addr"]-1-len;}
              }
            };
        
        var
         mk_word=
          function(ind)
           {var w=0;
            
            var imin=ind*Arch["size_addr"];
            
            var imax=(ind+1)*Arch["size_addr"]-1;
            
            if(Arch["big_endian"])
             {for(var i=imin;i<=imax;i++){w=w<<8|get_byte(i);}}
            else
             {for(var i$1=imax;i$1>=imin;i$1--){w=w<<8|get_byte(i$1);}}
            
            return w;
            };
        
        var
         mk_words=
          function(ind)
           {if(ind>=n)
             {return 0;}
            else
             {return /* :: */[0,mk_word(ind),mk_words(ind+1)];}
            };
        
        return mk_words(0);
        };
    
    var IntSet=Set["Make"](IntArg);
    
    var $$let=Nativeint;
    
    var NativeSet=Set["Make"]([0,$$let[12]]);
    
    var
     add_one=
      function(sets,ps)
       {var exit;
        
        if(sets)
         {if(ps)
           {var sets$1=add_one(sets[2],ps[2]);
            
            return /* :: */[0,NativeSet[4](ps[1],sets[1]),sets$1];
            }
          else
           {exit=56;}
          }
        else
         {if(ps){exit=56;}else{return 0;}}
        
        switch(exit)
         {case 56:throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",145,11]];}
        };
    
    var
     count_arities=
      function(cases)
       {if(cases)
         {var
           sets=
            List["fold_left"]
             (function(sets$1,param){return add_one(sets$1,param[1]);},
              List["map"](function(param){return NativeSet[1];},cases[1][1]),
              cases);
          
          return List["map"](NativeSet[19],sets);
          }
        else
         {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",148,10]];}
        };
    
    var
     count_arities_first=
      function(cases)
       {var
         set=
          List["fold_left"]
           (function(set$1,$$case)
             {var match=$$case[1];
              
              if(match)
               {return NativeSet[4](match[1],set$1);}
              else
               {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",161,15]];}
              },
            NativeSet[1],
            cases);
        
        return NativeSet[19](set);
        };
    
    var
     count_arities_length=
      function(cases)
       {var
         set=
          List["fold_left"]
           (function(set$1,param)
             {return IntSet[4](List["length"](param[1]),set$1);},
            IntSet[1],
            cases);
        
        return IntSet[19](set);
        };
    
    var
     do_rec=
      function(kbest,best,k,param)
       {if(param)
         {var xs=param[2];
          
          var x=param[1];
          
          if("unknown primitive:caml_lessthan")
           {return do_rec(k,x,k+1,xs);}
          else
           {return do_rec(kbest,best,k+1,xs);}
          }
        else
         {return kbest;}
        };
    
    var smallest=do_rec(-1,Pervasives["max_int"],0);
    
    var
     best_col=
      function(cases){var ars=count_arities(cases);return smallest(ars);};
    
    var
     do_rec$1=
      function(k,xs)
       {if(xs)
         {var xs$1=xs[2];
          
          var x=xs[1];
          
          if(k<=0)
           {return /* tuple */[0,0,x,xs$1];}
          else
           {var match=do_rec$1(k-1,xs$1);
            
            return /* tuple */[0,/* :: */[0,x,match[1]],match[2],match[3]];
            }
          }
        else
         {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",187,12]];}
        };
    
    var
     swap_list=
      function(k,xs)
       {var match=do_rec$1(k,xs);
        
        return Pervasives["@"](/* :: */[0,match[2],match[1]],match[3]);
        };
    
    var
     swap=
      function(k,idxs,cases)
       {if(k=0)
         {return /* tuple */[0,idxs,cases];}
        else
         {var idxs$1=swap_list(k,idxs);
          
          var
           cases$1=
            List["map"]
             (function(param)
               {return /* tuple */[0,swap_list(k,param[1]),param[2]];},
              cases);
          
          if(dbg){pp_match(Pervasives["stderr"],"SWAP",idxs$1,cases$1)}else{}
          
          return /* tuple */[0,idxs$1,cases$1];
          }
        };
    
    var
     best_first=
      function(idxs,cases)
       {var exit;
        
        if(idxs)
         {if(idxs[2])
           {var k=best_col(cases);return swap(k,idxs,cases);}
          else
           {exit=36;}
          }
        else
         {exit=36;}
        
        switch(exit){case 36:return /* tuple */[0,idxs,cases];}
        };
    
    var
     Divide=
      function(O)
       {var OMap=Map["Make"](O);
        
        var
         do_find=
          function(key,env)
           {try
             {return OMap[22](key,env);}
            catch(exn)
             {if(exn=Not_found)
               {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",226,24]];}
              else
               {throw exn;}
              }
            };
        
        var
         divide=
          function(cases)
           {var
             env=
              List["fold_left"]
               (function(env$1,param)
                 {var p=param[1];
                  
                  try
                   {var old=OMap[22](p,env$1);}
                  catch(exn){if(exn=Not_found){var old=0;}else{throw exn;}}
                  
                  return OMap[4](p,/* :: */[0,param[2],old],env$1);
                  },
                OMap[1],
                cases);
            
            var
             r=
              OMap[11]
               (function(key,v,k){return /* :: */[0,/* tuple */[0,key,v],k];},
                env,
                0);
            
            return List["rev"](r);
            };
        
        return [0,OMap,do_find,divide];
        };
    
    var $$let$1=Nativeint;
    
    var DivideNative=Divide([0,$$let$1[12]]);
    
    var
     by_cell=
      function(cases)
       {return DivideNative[3]
                (List["map"]
                  (function($$case)
                    {var match=$$case[1];
                     
                     if(match)
                      {return /* tuple */[0,
                               match[1],
                               /* tuple */[0,match[2],$$case[2]]];
                       }
                     else
                      {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",254,21]];}
                     },
                   cases));
        };
    
    var
     do_split=
      function(idx,env)
       {if(env)
         {var x=env[1];
          
          if(idx<=0)
           {return /* tuple */[0,0,x[1],env];}
          else
           {var match=do_split(idx-1,env[2]);
            
            return /* tuple */[0,/* :: */[0,x,match[1]],match[2],match[3]];
            }
          }
        else
         {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",260,12]];}
        };
    
    var split_env=function(len,env){return do_split(len/2,env);};
    
    var
     match_oncell=
      function(compile_rec,str,$$default,idx,env)
       {var id=gen_cell_id(0);
        
        var
         comp_rec=
          function(env$1)
           {var len=List["length"](env$1);
            
            if(len<=3)
             {return List["fold_right"]
                      (function(param,ifnot)
                        {return mk_eq
                                 (id,param[1],compile_rec(str,$$default,param[2]),ifnot);
                         },
                       env$1,
                       $$default);
              }
            else
             {var match=split_env(len,env$1);
              
              return mk_lt(id,match[2],comp_rec(match[1]),comp_rec(match[3]));
              }
            };
        
        return mk_let_cell(id,str,idx,comp_rec(env));
        };
    
    var
     do_compile_pats=
      function(idxs,str,$$default,cases)
       {if(dbg){pp_match(Pervasives["stderr"],"COMPILE",idxs,cases)}else{}
        
        if(idxs)
         {var match=best_first(idxs,cases);
          
          var idxs$1=match[1];
          
          if(idxs$1)
           {return match_oncell
                    (do_compile_pats(idxs$1[2]),
                     str,
                     $$default,
                     idxs$1[1],
                     by_cell(match[2]));
            }
          else
           {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",312,18]];}
          }
        else
         {if(cases){return cases[1][2];}else{return $$default;}}
        };
    
    var DivideInt=Divide(IntArg);
    
    var
     by_size=
      function(cases)
       {return DivideInt[3]
                (List["map"]
                  (function($$case)
                    {return /* tuple */[0,List["length"]($$case[1]),$$case];},
                   cases));
        };
    
    var
     compile_by_size=
      function(from_ind,str,$$default,cases)
       {var
         size_cases=
          List["map"]
           (function(param)
             {var len=param[1]+from_ind;
              
              var
               act=
                do_compile_pats(interval(from_ind,len),str,$$default,param[2]);
              
              return /* tuple */[0,len,act];
              },
            by_size(cases));
        
        var id=gen_size_id(0);
        
        var
         $$switch=
          I[2](/* Cvar */[7,id],1,Pervasives["max_int"],size_cases,$$default);
        
        return mk_let_size(id,str,$$switch);
        };
    
    var
     top_compile=
      function(str,$$default,cases)
       {var a_len=count_arities_length(cases);
        
        var a_fst=count_arities_first(cases);
        
        if(a_len<=a_fst)
         {if(dbg){pp_cases(Pervasives["stderr"],"SIZE",cases)}else{}
          
          return compile_by_size(0,str,$$default,cases);
          }
        else
         {if(dbg){pp_cases(Pervasives["stderr"],"FIRST COL",cases)}else{}
          
          var
           compile_size_rest=
            function(str$1,$$default$1,cases$1)
             {return compile_by_size(1,str$1,$$default$1,cases$1);};
          
          return match_oncell
                  (compile_size_rest,str,$$default,0,by_cell(cases));
          }
        };
    
    var
     $$catch=
      function(arg,k)
       {var exit;
        
        switch(arg)
         {case 17:if(arg[2]){exit=7;}else{return k(arg);}default:exit=7;}
        
        switch(exit)
         {case 7:
           var e=Lambda["next_raise_count"](0);
           
           return /* Ccatch */[16,e,0,k(/* Cexit */[17,e,0]),arg];
           
          }
        };
    
    var
     compile=
      function(str,$$default,cases)
       {var exit;
        
        if(cases)
         {if($$default)
           {exit=3;}
          else
           {var e=cases[1][2];var cases$1=cases[2];exit=2;}
          }
        else
         {if($$default)
           {exit=3;}
          else
           {throw [0,Assert_failure,[0,"asmcomp/strmatch.ml",382,19]];}
          }
        
        switch(exit)
         {case 3:"unknown block:(exit 2 (field 0 default/1607) cases/1608)";
          case 2:var match=/* tuple */[0,cases$1,e];
          }
        
        var
         cases$2=
          List["rev_map"]
           (function(param)
             {return /* tuple */[0,pat_of_string(param[1]),param[2]];},
            match[1]);
        
        return $$catch
                (match[2],
                 function($$default$1)
                  {return top_compile(str,$$default$1,cases$2);});
        };
    
    return [0,
            dbg,
            mask,
            pat_as_string,
            do_pp_cases,
            pp_cases,
            pp_match,
            gen_cell_id,
            gen_size_id,
            mk_let_cell,
            mk_let_size,
            mk_cmp_gen,
            mk_lt,
            mk_eq,
            IntArg,
            interval,
            pat_of_string,
            IntSet,
            NativeSet,
            add_one,
            count_arities,
            count_arities_first,
            count_arities_length,
            best_col,
            swap_list,
            swap,
            best_first,
            Divide,
            DivideNative,
            by_cell,
            do_split,
            split_env,
            match_oncell,
            do_compile_pats,
            DivideInt,
            by_size,
            compile_by_size,
            top_compile,
            $$catch,
            compile];
    };

module["exports"]=
{"Make":function(funarg){var $$let=Make(funarg);return [0,$$let[39]];}};

