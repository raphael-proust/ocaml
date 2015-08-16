// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Misc=require("./misc.js");
var Location=require("./location.js");


var
 iter_pattern_desc=
  function(f,param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 1:exit=20;
        case 3:exit=21;
        case 4:return List["iter"](f,param[3]);
        case 5:return Misc["may"](f,param[2]);
        case 6:
         return List["iter"]
                 (function(param$1){return f(param$1[3]);},param[1]);
         
        case 7:exit=21;
        case 8:f(param[1]);return f(param[2]);
        case 9:exit=20;
        default:exit=19;}}
    
    switch(exit)
     {case 20:return f(param[1]);
      case 21:return List["iter"](f,param[1]);
      case 19:return /* () */0;
      }
    };

var
 map_pattern_desc=
  function(f,d)
   {var exit;
    
    if(typeof d==="number")
     {switch(d){}}
    else
     {switch(d[0])
       {case 1:return /* Tpat_alias */[1,f(d[1]),d[2],d[3]];
        case 3:return /* Tpat_tuple */[3,List["map"](f,d[1])];
        case 4:return /* Tpat_construct */[4,d[1],d[2],List["map"](f,d[3])];
        case 5:
         var match=d[2];
         
         if(match)
          {return /* Tpat_variant */[5,d[1],/* Some */[0,f(match[1])],d[3]];}
         else
          {exit=17;}
         
        case 6:
         return /* Tpat_record */[6,
                 List["map"]
                  (function(param)
                    {return /* tuple */[0,param[1],param[2],f(param[3])];},
                   d[1]),
                 d[2]];
         
        case 7:return /* Tpat_array */[7,List["map"](f,d[1])];
        case 8:return /* Tpat_or */[8,f(d[1]),f(d[2]),d[3]];
        case 9:return /* Tpat_lazy */[9,f(d[1])];
        default:exit=17;}}
    
    switch(exit){case 17:return d;}
    };

var idents=[0,/* [] */0];

var
 bound_idents=
  function(pat)
   {var d=pat[1];
    
    var exit;
    
    if(typeof d==="number")
     {switch(d){}}
    else
     {switch(d[0])
       {case 0:
         return idents[1]=/* :: */[0,/* tuple */[0,d[1],d[2]],idents[1]],0;
        case 1:
         bound_idents(d[1]);
         return idents[1]=/* :: */[0,/* tuple */[0,d[2],d[3]],idents[1]],0;
         
        case 8:return bound_idents(d[1]);
        default:exit=15;}}
    
    switch(exit){case 15:return iter_pattern_desc(bound_idents,d);}
    };

var
 pat_bound_idents=
  function(pat)
   {idents[1]=/* [] */0;
    bound_idents(pat);
    var res=idents[1];
    
    idents[1]=/* [] */0;
    return res;
    };

var
 rev_let_bound_idents_with_loc=
  function(bindings)
   {idents[1]=/* [] */0;
    List["iter"](function(vb){return bound_idents(vb[1]);},bindings);
    var res=idents[1];
    
    idents[1]=/* [] */0;
    return res;
    };

var
 let_bound_idents_with_loc=
  function(pat_expr_list)
   {return List["rev"](rev_let_bound_idents_with_loc(pat_expr_list));};

var
 rev_let_bound_idents=
  function(pat)
   {return List["map"]
            (function(prim){return prim[1];},
             rev_let_bound_idents_with_loc(pat));
    };

var
 let_bound_idents=
  function(pat)
   {return List["map"]
            (function(prim){return prim[1];},let_bound_idents_with_loc(pat));
    };

var alpha_var=function(env,id){return List["assoc"](id,env);};

var
 alpha_pat=
  function(env,p)
   {var d=p[1];
    
    var exit;
    
    if(typeof d==="number")
     {switch(d){}}
    else
     {switch(d[0])
       {case 0:
         var newrecord=/* unknown */"duprecord regular 6";
         
         var $js;
         try
          {$js=/* Tpat_var */[0,alpha_var(env,d[1]),d[2]];}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {$js=/* Tpat_any */0;}
           else
            {throw exn;}
           }
         newrecord[1]=$js;
         return newrecord;
         
        case 1:
         var new_p=alpha_pat(env,d[1]);
         
         try
          {var newrecord$1=/* unknown */"duprecord regular 6";
           
           newrecord$1[1]=/* Tpat_alias */[1,new_p,alpha_var(env,d[2]),d[3]];
           return newrecord$1;
           }
         catch(exn$1)
          {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
            {return new_p;}
           else
            {throw exn$1;}
           }
         
        default:exit=6;}}
    
    switch(exit)
     {case 6:
       var newrecord$2=/* unknown */"duprecord regular 6";
       
       newrecord$2[1]=map_pattern_desc(alpha_pat(env),d);
       return newrecord$2;
       
      }
    };

var mkloc=Location["mkloc"];

var mknoloc=Location["mknoloc"];

module["exports"]=
{"iter_pattern_desc":iter_pattern_desc,
 "map_pattern_desc":map_pattern_desc,
 "let_bound_idents":let_bound_idents,
 "rev_let_bound_idents":rev_let_bound_idents,
 "let_bound_idents_with_loc":let_bound_idents_with_loc,
 "alpha_pat":alpha_pat,
 "mknoloc":mknoloc,
 "mkloc":mkloc,
 "pat_bound_idents":pat_bound_idents};

