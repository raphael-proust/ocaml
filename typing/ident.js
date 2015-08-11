// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Format=require("Format");


var global_flag=1;

var predef_exn_flag=2;

var currentstamp=[0,0];

var
 create=
  function(s){currentstamp[0]++;return /* record */[0,currentstamp[1],s,0];};

var
 create_predef_exn=
  function(s)
   {currentstamp[0]++;
    return /* record */[0,currentstamp[1],s,predef_exn_flag];
    };

var create_persistent=function(s){return /* record */[0,0,s,global_flag];};

var
 rename=
  function(i)
   {currentstamp[0]++;return /* record */[0,currentstamp[1],i[2],i[3]];};

var name=function(i){return i[2];};

var stamp=function(i){return i[1];};

var
 unique_name=
  function(i)
   {return Pervasives["^"]
            (i[2],Pervasives["^"]("_",Pervasives["string_of_int"](i[1])));
    };

var
 unique_toplevel_name=
  function(i)
   {return Pervasives["^"]
            (i[2],Pervasives["^"]("/",Pervasives["string_of_int"](i[1])));
    };

var persistent=function(i){return i[1]=0;};

var equal=function(i1,i2){return "unknown primitive:caml_string_equal";};

var same=function(i1,i2){return "unknown primitive:caml_equal";};

var binding_time=function(i){return i[1];};

var current_time=function(param){return currentstamp[1];};

var
 set_current_time=
  function(t){return currentstamp[1]=Pervasives["max"](currentstamp[1],t),0;};

var reinit_level=[0,-1];

var
 reinit=
  function(param)
   {if(reinit_level[1]<0)
     {return reinit_level[1]=currentstamp[1],0;}
    else
     {return currentstamp[1]=reinit_level[1],0;}
    };

var hide=function(i){return /* record */[0,-1,i[2],i[3]];};

var make_global=function(i){return i[3]=i[3]|global_flag,0;};

var global=function(i){return (i[3]&global_flag)!=0;};

var is_predef_exn=function(i){return (i[3]&predef_exn_flag)!=0;};

var
 print=
  function(ppf,i)
   {var n=i[1];
    
    if(n!=-1)
     {if(n!=0)
       {return Format["fprintf"]
                (ppf,
                 [0,[2,0,[12,47,[4,3,0,0,[2,0,0]]]],"%s/%i%s"],
                 i[2],
                 n,
                 global(i)?"g":"");
        }
      else
       {return Format["fprintf"](ppf,[0,[2,0,[12,33,0]],"%s!"],i[2]);}
      }
    else
     {return Format["fprintf"](ppf,[0,[2,0,[12,35,0]],"%s#"],i[2]);}
    };

var empty=0;

var
 mknode=
  function(l,d,r)
   {if(l){var hl=l[4];}else{var hl=0;}
    
    if(r){var hr=r[4];}else{var hr=0;}
    
    return /* Node */[0,l,d,r,hl>=hr?hl+1:hr+1];
    };

var
 balance=
  function(l,d,r)
   {if(l){var hl=l[4];}else{var hl=0;}
    
    if(r){var hr=r[4];}else{var hr=0;}
    
    if(hl>hr+1)
     {var exit;
      
      if(l)
       {var lr=l[3];
        
        var ld=l[2];
        
        var ll=l[1];
        
        if((ll?ll[4]:0)>=(lr?lr[4]:0))
         {return mknode(ll,ld,mknode(lr,d,r));}
        else
         {if(lr)
           {return mknode(mknode(ll,ld,lr[1]),lr[2],mknode(lr[3],d,r));}
          else
           {exit=13;}
          }
        }
      else
       {exit=13;}
      
      switch(exit)
       {case 13:throw [0,Assert_failure,[0,"typing/ident.ml",120,11]];}
      }
    else
     {if(hr>hl+1)
       {var exit$1;
        
        if(r)
         {var rl=r[1];
          
          var rr=r[3];
          
          if((rr?rr[4]:0)>=(rl?rl[4]:0))
           {return mknode(mknode(l,d,rl),r[2],rr);}
          else
           {if(rl)
             {return mknode(mknode(l,d,rl[1]),rl[2],mknode(rl[3],r[2],r[3]));}
            else
             {exit$1=11;}
            }
          }
        else
         {exit$1=11;}
        
        switch(exit$1)
         {case 11:throw [0,Assert_failure,[0,"typing/ident.ml",129,11]];}
        }
      else
       {return mknode(l,d,r);}
      }
    };

var
 add=
  function(id,data,param)
   {if(param)
     {var r=param[3];
      
      var k=param[2];
      
      var l=param[1];
      
      var c="unknown primitive:caml_string_compare";
      
      if(c=0)
       {return /* Node */[0,
                l,
                /* record */[0,id,data,/* Some */[0,k]],
                r,
                param[4]];
        }
      else
       {if(c<0)
         {return balance(add(id,data,l),k,r);}
        else
         {return balance(l,k,add(id,data,r));}
        }
      }
    else
     {return /* Node */[0,0,/* record */[0,id,data,0],0,1];}
    };

var
 find_stamp=
  function(s,param)
   {if(param)
     {var k=param[1];
      
      if(k[1][1]=s){return k[2];}else{return find_stamp(s,k[3]);}
      }
    else
     {throw Not_found;}
    };

var
 find_same=
  function(id,param)
   {if(param)
     {var k=param[2];
      
      var c="unknown primitive:caml_string_compare";
      
      if(c=0)
       {if(id[1]=k[1][1]){return k[2];}else{return find_stamp(id[1],k[3]);}}
      else
       {return find_same(id,c<0?param[1]:param[3]);}
      }
    else
     {throw Not_found;}
    };

var
 find_name=
  function(name$1,param)
   {if(param)
     {var k=param[2];
      
      var c="unknown primitive:caml_string_compare";
      
      if(c=0)
       {return k[2];}
      else
       {return find_name(name$1,c<0?param[1]:param[3]);}
      }
    else
     {throw Not_found;}
    };

var
 get_all=
  function(param)
   {if(param)
     {var k=param[1];return /* :: */[0,k[2],get_all(k[3])];}
    else
     {return 0;}
    };

var
 find_all=
  function(name$1,param)
   {if(param)
     {var k=param[2];
      
      var c="unknown primitive:caml_string_compare";
      
      if(c=0)
       {return /* :: */[0,k[2],get_all(k[3])];}
      else
       {return find_all(name$1,c<0?param[1]:param[3]);}
      }
    else
     {return 0;}
    };

var
 fold_aux=
  function(f,stack,accu,param)
   {if(param)
     {return fold_aux(f,/* :: */[0,param[1],stack],f(param[2],accu),param[3]);
      }
    else
     {if(stack){return fold_aux(f,stack[2],accu,stack[1]);}else{return accu;}}
    };

var
 fold_name=
  function(f,tbl,accu)
   {return fold_aux(function(k){return f(k[1],k[2]);},0,accu,tbl);};

var
 fold_data=
  function(f,d,accu)
   {if(d)
     {var k=d[1];return f(k[1],k[2],fold_data(f,k[3],accu));}
    else
     {return accu;}
    };

var
 fold_all=
  function(f,tbl,accu)
   {return fold_aux
            (function(k){return fold_data(f,/* Some */[0,k]);},0,accu,tbl);
    };

var
 iter=
  function(f,param)
   {if(param)
     {var k=param[2];iter(f,param[1]);f(k[1],k[2]);return iter(f,param[3]);}
    else
     {return 0;}
    };

var key_name="";

var
 make_key_generator=
  function(param)
   {var c=[0,1];
    
    return function(id)
     {var stamp$1=c[1];c[0]--;return /* record */[0,stamp$1,key_name,id[3]];};
    };

module["exports"]=
{"create":create,
 "create_persistent":create_persistent,
 "create_predef_exn":create_predef_exn,
 "rename":rename,
 "name":name,
 "unique_name":unique_name,
 "unique_toplevel_name":unique_toplevel_name,
 "persistent":persistent,
 "equal":equal,
 "same":same,
 "hide":hide,
 "make_global":make_global,
 "global":global,
 "is_predef_exn":is_predef_exn,
 "binding_time":binding_time,
 "current_time":current_time,
 "set_current_time":set_current_time,
 "reinit":reinit,
 "print":print,
 "empty":empty,
 "add":add,
 "find_same":find_same,
 "find_name":find_name,
 "find_all":find_all,
 "fold_name":fold_name,
 "fold_all":fold_all,
 "iter":iter,
 "make_key_generator":make_key_generator};

