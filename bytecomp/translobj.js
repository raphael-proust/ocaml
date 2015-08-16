// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Btype=require("./btype.js");
var List=require("./list.js");
var Env=require("./env.js");
var Clflags=require("./clflags.js");
var Misc=require("./misc.js");
var Lambda=require("./lambda.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");


var
 oo_prim=
  function(name)
   {try
     {return Lambda["transl_normal_path"]
              (Env["lookup_value"]
                 (/* Ldot */[1,[/* Lident */0,"CamlinternalOO"],name],
                  Env["empty"])
                [1]);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Misc["fatal_error"]
                (Pervasives["^"]
                  ("Primitive ",Pervasives["^"](name," not found.")));
        }
      else
       {throw exn;}
      }
    };

var consts=Hashtbl["create"](/* None */0,17);

var
 share=
  function(c)
   {var exit;
    
    switch(c[0])
     {case 2:
       if(c[3]!==/* [] */0)
        {try
          {return /* Lvar */[0,Hashtbl["find"](consts,c)];}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {var id=Ident["create"]("shared");
             
             Hashtbl["add"](consts,c,id);
             return /* Lvar */[0,id];
             }
           else
            {throw exn;}
           }
         }
       else
        {exit=42;}
       
      default:exit=42;}
    
    switch(exit){case 42:return /* Lconst */[1,c];}
    };

var cache_required=[0,/* false */0];

var method_cache=[0,Lambda["lambda_unit"]];

var method_count=[0,0];

var method_table=[0,/* [] */0];

var
 meth_tag=
  function(s)
   {return /* Lconst */[1,
            /* Const_base */[0,/* Const_int */[0,Btype["hash_variant"](s)]]];
    };

var
 next_cache=
  function(tag)
   {var n=method_count[1];
    
    method_count[0]++;
    return /* tuple */[0,
            tag,
            /* :: */[0,
             method_cache[1],
             /* :: */[0,
              /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,n]]],
              /* [] */0]]];
    };

var
 is_path=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:exit=30;
      case 1:exit=30;
      case 6:
       var exit$1;
       
       var $js=param[1];
       if(typeof $js==="number")
        {switch($js){}}
       else
        {switch($js[0])
          {case 3:if(param[2]){exit=31;}else{exit=30;}
           case 6:
            var match=param[2];
            
            if(match)
             {if(match[2]){exit=31;}else{return is_path(match[1]);}}
            else
             {exit=31;}
            
           case 19:exit$1=32;
           case 21:exit$1=32;
           default:exit=31;}}
       
       switch(exit$1)
        {case 32:
          var match$1=param[2];
          
          if(match$1)
           {var match$2=match$1[2];
            
            if(match$2)
             {if(match$2[2])
               {exit=31;}
              else
               {return is_path(match$1[1])&&is_path(match$2[1]);}
              }
            else
             {exit=31;}
            }
          else
           {exit=31;}
          
         }
       
      default:exit=31;}
    
    switch(exit){case 31:return /* false */0;case 30:return /* true */1;}
    };

var
 meth=
  function(obj,lab)
   {var tag=meth_tag(lab);
    
    if(!(cache_required[1]&&Clflags["native_code"][1]))
     {return /* tuple */[0,tag,/* [] */0];}
    else
     {if(!is_path(obj))
       {return next_cache(tag);}
      else
       {try
         {var r=List["assoc"](obj,method_table[1]);
          
          try
           {return /* tuple */[0,tag,List["assoc"](tag,r[1])];}
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {var p=next_cache(tag);r[1]=/* :: */[0,p,r[1]];return p;}
            else
             {throw exn;}
            }
          }
        catch(exn$1)
         {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
           {var p$1=next_cache(tag);
            
            method_table[1]=
            /* :: */[0,
             /* tuple */[0,obj,[0,/* :: */[0,p$1,/* [] */0]]],
             method_table[1]];
            return p$1;
            }
          else
           {throw exn$1;}
          }
        }
      }
    };

var
 reset_labels=
  function(param)
   {Hashtbl["clear"](consts);
    method_count[1]=0;
    return method_table[1]=/* [] */0,0;
    };

var
 string=
  function(s)
   {return /* Lconst */[1,
            /* Const_base */[0,/* Const_string */[2,s,/* None */0]]];
    };

var
 $$int=
  function(n)
   {return /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,n]]];};

var
 prim_makearray=
  [/* record */0,"caml_make_vect",2,/* true */1,"",/* false */0];

var
 transl_label_init=
  function(expr)
   {var
     expr$1=
      Hashtbl["fold"]
       (function(c,id,expr)
         {return /* Llet */[4,/* Alias */1,id,/* Lconst */[1,c],expr];},
        consts,
        expr);
    
    var
     expr$2=
      List["fold_right"]
       (function(id,expr)
         {return /* Lsequence */[13,
                  /* Lprim */[6,/* Pgetglobal */[3,id],/* [] */0],
                  expr];
          },
        Env["get_required_globals"](/* () */0),
        expr$1);
    
    Env["reset_required_globals"](/* () */0);
    reset_labels(/* () */0);
    return expr$2;
    };

var
 transl_store_label_init=
  function(glob,size,f,arg)
   {method_cache[1]=
    /* Lprim */[6,
     /* Pfield */[6,size],
     /* :: */[0,/* Lprim */[6,/* Pgetglobal */[3,glob],/* [] */0],/* [] */0]];
    var expr=f(arg);
    
    if(method_count[1]===0)
     {var match=/* tuple */[0,size,expr];}
    else
     {var
       match=
        /* tuple */[0,
         size+1,
         /* Lsequence */[13,
          /* Lprim */[6,
           /* Psetfield */[7,size,/* false */0],
           /* :: */[0,
            /* Lprim */[6,/* Pgetglobal */[3,glob],/* [] */0],
            /* :: */[0,
             /* Lprim */[6,
              /* Pccall */[11,prim_makearray],
              /* :: */[0,
               $$int(method_count[1]),
               /* :: */[0,$$int(0),/* [] */0]]],
             /* [] */0]]],
          expr]];
      }
    
    return /* tuple */[0,match[1],transl_label_init(match[2])];
    };

var wrapping=[0,/* false */0];

var top_env=[0,Env["empty"]];

var classes=[0,/* [] */0];

var method_ids=[0,Lambda["IdentSet"][1]];

var
 oo_add_class=
  function(id)
   {classes[1]=/* :: */[0,id,classes[1]];
    return /* tuple */[0,top_env[1],cache_required[1]];
    };

var
 oo_wrap=
  function(env,req,f,x)
   {if(wrapping[1])
     {if(cache_required[1])
       {return f(x);}
      else
       {try
         {cache_required[1]=/* true */1;
          var lam=f(x);
          
          cache_required[1]=/* false */0;
          return lam;
          }
        catch(exn){cache_required[1]=/* false */0;throw exn;}
        }
      }
    else
     {try
       {wrapping[1]=/* true */1;
        cache_required[1]=req;
        top_env[1]=env;
        classes[1]=/* [] */0;
        method_ids[1]=Lambda["IdentSet"][1];
        var lambda=f(x);
        
        var
         lambda$1=
          List["fold_left"]
           (function(lambda,id)
             {return /* Llet */[4,
                      /* StrictOpt */2,
                      id,
                      /* Lprim */[6,
                       /* Pmakeblock */[5,
                        0,
                        Lambda["default_tag_info"],
                        /* Mutable */1],
                       /* :: */[0,
                        Lambda["lambda_unit"],
                        /* :: */[0,
                         Lambda["lambda_unit"],
                         /* :: */[0,Lambda["lambda_unit"],/* [] */0]]]],
                      lambda];
              },
            lambda,
            classes[1]);
        
        wrapping[1]=/* false */0;
        top_env[1]=Env["empty"];
        return lambda$1;
        }
      catch(exn$1)
       {wrapping[1]=/* false */0;top_env[1]=Env["empty"];throw exn$1;}
      }
    };

var
 reset=
  function(param)
   {Hashtbl["clear"](consts);
    cache_required[1]=/* false */0;
    method_cache[1]=Lambda["lambda_unit"];
    method_count[1]=0;
    method_table[1]=/* [] */0;
    wrapping[1]=/* false */0;
    top_env[1]=Env["empty"];
    classes[1]=/* [] */0;
    return method_ids[1]=Lambda["IdentSet"][1],0;
    };

module["exports"]=
{"oo_prim":oo_prim,
 "share":share,
 "meth":meth,
 "reset_labels":reset_labels,
 "transl_label_init":transl_label_init,
 "transl_store_label_init":transl_store_label_init,
 "method_ids":method_ids,
 "oo_wrap":oo_wrap,
 "oo_add_class":oo_add_class,
 "reset":reset};

