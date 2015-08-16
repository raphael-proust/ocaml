// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Cmi_format=require("./cmi_format.js");
var Datarepr=require("./datarepr.js");
var Warnings=require("./warnings.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Btype=require("./btype.js");
var Predef=require("./predef.js");
var Clflags=require("./clflags.js");
var Types=require("./types.js");
var Format=require("./format.js");
var Set=require("./set.js");
var Misc=require("./misc.js");
var Path=require("./path.js");
var Subst=require("./subst.js");
var Consistbl=require("./consistbl.js");
var Longident=require("./longident.js");
var Location=require("./location.js");
var Tbl=require("./tbl.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 add_delayed_check_forward=
  [0,
   function(param)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/env.ml",24,46]];
     }];

var value_declarations=Hashtbl["create"](/* None */0,16);

var type_declarations=Hashtbl["create"](/* None */0,16);

var
 add_constructor_usage=
  function(cu,param)
   {switch(param)
     {case 0:return cu[1]=/* true */1,0;
      case 1:return cu[2]=/* true */1,0;
      case 2:return cu[3]=/* true */1,0;
      }
    };

var
 constructor_usages=
  function(param)
   {return /* record */[0,/* false */0,/* false */0,/* false */0];};

var used_constructors=Hashtbl["create"](/* None */0,16);

var prefixed_sg=Hashtbl["create"](/* None */0,113);

var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Env.Error",0]);

var error=function(err){throw [0,$$Error,err];};

var
 force=
  function(f,x)
   {var match=x[1];
    
    switch(match[0])
     {case 0:return match[1];
      case 1:throw match[1];
      case 2:
       try
        {var y=f(match[1]);x[1]=/* Done */[0,y];return y;}
       catch(e){x[1]=/* Raise */[1,e];throw e;}
       
      }
    };

var
 is_val=
  function(x)
   {var match=x[1];
    
    var exit;
    
    switch(match[0])
     {case 0:return /* true */1;case 1:exit=411;case 2:exit=411;}
    
    switch(exit){case 411:return /* false */0;}
    };

var
 get_arg=
  function(x)
   {var match=x[1];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=409;case 1:exit=409;case 2:return /* Some */[0,match[1]];}
    
    switch(exit){case 409:return /* None */0;}
    };

var create=function(x){return [0,/* Thunk */[2,x]];};

var EnvLazy=[0,force,create,is_val,get_arg];

var empty=Ident["empty"];

var nothing=function(param){return /* () */0;};

var
 already_defined=
  function(s,tbl)
   {try
     {Ident["find_name"](s,tbl);return /* true */1;}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* false */0;}
      else
       {throw exn;}
      }
    };

var
 add=
  function(kind,slot,id,x,tbl,ref_tbl)
   {if(slot)
     {var f=slot[1];
      
      var
       slot$1=
        function(param)
         {var s=Ident["name"](id);
          
          return f(kind,s,already_defined(s,ref_tbl));
          };
      }
    else
     {var slot$1=nothing;}
    
    return Ident["add"](id,/* tuple */[0,x,slot$1],tbl);
    };

var
 add_dont_track=
  function(id,x,tbl){return Ident["add"](id,/* tuple */[0,x,nothing],tbl);};

var
 find_same_not_using=
  function(id,tbl){return Ident["find_same"](id,tbl)[1];};

var
 find_same=
  function(id,tbl)
   {var match=Ident["find_same"](id,tbl);match[2](/* () */0);return match[1];};

var
 find_name=
  function(s,tbl)
   {var match=Ident["find_name"](s,tbl);match[2](/* () */0);return match[1];};

var find_all=function(s,tbl){return Ident["find_all"](s,tbl);};

var
 fold_name=
  function(f)
   {return Ident["fold_name"](function(k,param){return f(k,param[1]);});};

var
 keys=
  function(tbl)
   {return Ident["fold_all"]
            (function(k,param,accu){return /* :: */[0,k,accu];},tbl,/* [] */0);
    };

var
 EnvTbl=
  [0,
   empty,
   nothing,
   already_defined,
   add,
   add_dont_track,
   find_same_not_using,
   find_same,
   find_name,
   find_all,
   fold_name,
   keys];

var in_signature_flag=1;

var implicit_coercion_flag=2;

var
 subst_modtype_maker=
  function(param){return Subst["modtype"](param[1],param[2]);};

var
 empty$1=
  /* record */[0,
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   EnvTbl[1],
   Ident["empty"],
   /* Env_empty */0,
   /* false */0,
   /* [] */0,
   0];

var
 in_signature=
  function(env)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[14]=env[14]|in_signature_flag;
    return newrecord;
    };

var
 implicit_coercion=
  function(env)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[14]=env[14]|implicit_coercion_flag;
    return newrecord;
    };

var is_in_signature=function(env){return (env[14]&in_signature_flag)!==0;};

var
 is_implicit_coercion=
  function(env){return (env[14]&implicit_coercion_flag)!==0;};

var
 diff_keys=
  function(is_local,tbl1,tbl2)
   {var keys2=EnvTbl[11](tbl2);
    
    return List["filter"]
            (function(id)
              {var $js;
               try
                {EnvTbl[6](id,tbl1);$js=/* false */0;}
               catch(exn)
                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                  {$js=/* true */1;}
                 else
                  {throw exn;}
                 }
               return is_local(EnvTbl[6](id,tbl2))&&$js;
               },
             keys2);
    };

var
 is_ident=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:return /* true */1;case 1:exit=378;case 2:exit=378;}
    
    switch(exit){case 378:return /* false */0;}
    };

var is_local=function(param){return is_ident(param[1]);};

var
 is_local_ext=
  function(param)
   {var match=param[6];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=375;case 1:exit=375;case 2:return is_ident(match[1]);}
    
    switch(exit){case 375:return /* false */0;}
    };

var
 diff=
  function(env1,env2)
   {return Pervasives["@"]
            (diff_keys(is_local,env1[1],env2[1]),
             Pervasives["@"]
              (diff_keys(is_local_ext,env1[2],env2[2]),
               Pervasives["@"]
                (diff_keys(is_local,env1[5],env2[5]),
                 diff_keys(is_local,env1[8],env2[8]))));
    };

var
 components_of_module$prime=
  [0,
   function(env,sub,path,mty)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/env.ml",272,32]];
     }];

var
 components_of_module_maker$prime=
  [0,
   function(param)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/env.ml",275,37]];
     }];

var
 components_of_functor_appl$prime=
  [0,
   function(f,p1,p2)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/env.ml",278,23]];
     }];

var
 check_modtype_inclusion=
  [0,
   function(env,mty1,path1,mty2)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/env.ml",282,35]];
     }];

var
 strengthen=
  [0,
   function(env,mty,path)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/env.ml",286,28]];
     }];

var
 md=
  function(md_type)
   {return /* record */[0,md_type,/* [] */0,Location["none"]];};

var current_unit=[0,""];

var persistent_structures=Hashtbl["create"](/* None */0,17);

var crc_units=Consistbl["create"](/* () */0);

var compare=$$String["compare"];

var StringSet=Set["Make"]([0,compare]);

var imported_units=[0,StringSet[1]];

var
 add_import=
  function(s){return imported_units[1]=StringSet[4](s,imported_units[1]),0;};

var
 clear_imports=
  function(param)
   {Consistbl["clear"](crc_units);return imported_units[1]=StringSet[1],0;};

var
 check_consistency=
  function(ps)
   {if(!ps[5])
     {try
       {List["iter"]
         (function(param)
           {var crco=param[2];
            
            if(crco)
             {var name=param[1];
              
              add_import(name);
              return Consistbl["check"](crc_units,name,crco[1],ps[6]);
              }
            else
             {return /* () */0;}
            },
          ps[4]);
        return ps[5]=/* true */1,0;
        }
      catch(exn)
       {if(exn[1]===Consistbl["Inconsistency"])
         {return error(/* Inconsistent_import */[1,exn[2],exn[4],exn[3]]);}
        else
         {throw exn;}
        }
      }
    else
     {return 0;}
    };

var
 save_pers_struct=
  function(crc,ps)
   {var modname=ps[1];
    
    Hashtbl["add"](persistent_structures,modname,/* Some */[0,ps]);
    Consistbl["set"](crc_units,modname,crc,ps[6]);
    return add_import(modname);
    };

var
 read_pers_struct=
  function(modname,filename)
   {var cmi=Cmi_format["read_cmi"](filename);
    
    var name=cmi[1];
    
    var sign=cmi[2];
    
    var crcs=cmi[3];
    
    var flags=cmi[4];
    
    var
     comps=
      components_of_module$prime[1]
       (empty$1,
        Subst["identity"],
        /* Pident */[0,Ident["create_persistent"](name)],
        /* Mty_signature */[1,sign]);
    
    var ps=/* record */[0,name,sign,comps,crcs,/* false */0,filename,flags];
    
    if(CamlPrimitive["caml_string_notequal"](ps[1],modname))
     {error(/* Illegal_renaming */[0,modname,ps[1],filename])}
    else
     {}
    
    add_import(name);
    List["iter"]
     (function(param)
       {if(!Clflags["recursive_types"][1])
         {return error(/* Need_recursive_types */[2,ps[1],current_unit[1]]);}
        else
         {return 0;}
        },
      ps[7]);
    Hashtbl["add"](persistent_structures,modname,/* Some */[0,ps]);
    return ps;
    };

var
 find_pers_struct=
  function($staropt$star,name)
   {if($staropt$star){var check=$staropt$star[1];}else{var check=/* true */1;}
    
    if(CamlPrimitive["caml_string_equal"](name,"*predef*"))
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    else
     {}
    
    try
     {var r=/* Some */[0,Hashtbl["find"](persistent_structures,name)];}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var r=/* None */0;}
      else
       {throw exn;}
      }
    
    if(r)
     {var match=r[1];
      
      if(match)
       {var ps=match[1];}
      else
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      }
    else
     {add_import(name);
      try
       {var
         filename=
          Misc["find_in_path_uncap"]
           (Config["load_path"][1],Pervasives["^"](name,".cmi"));
        }
      catch(exn$1)
       {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
         {Hashtbl["add"](persistent_structures,name,/* None */0);
          throw CamlPrimitive["caml_global_data"]["Not_found"];
          }
        else
         {throw exn$1;}
        }
      
      var ps=read_pers_struct(name,filename);
      }
    
    if(check){check_consistency(ps)}else{}
    
    return ps;
    };

var
 reset_cache=
  function(param)
   {current_unit[1]="";
    Hashtbl["clear"](persistent_structures);
    clear_imports(/* () */0);
    Hashtbl["clear"](value_declarations);
    Hashtbl["clear"](type_declarations);
    Hashtbl["clear"](used_constructors);
    return Hashtbl["clear"](prefixed_sg);
    };

var
 reset_cache_toplevel=
  function(param)
   {var
     l=
      Hashtbl["fold"]
       (function(name,r,acc)
         {if(r===/* None */0){return /* :: */[0,name,acc];}else{return acc;}},
        persistent_structures,
        /* [] */0);
    
    List["iter"](Hashtbl["remove"](persistent_structures),l);
    Hashtbl["clear"](value_declarations);
    Hashtbl["clear"](type_declarations);
    Hashtbl["clear"](used_constructors);
    return Hashtbl["clear"](prefixed_sg);
    };

var set_unit_name=function(name){return current_unit[1]=name,0;};

var get_unit_name=function(param){return current_unit[1];};

var
 find_module_descr=
  function(path,env)
   {switch(path[0])
     {case 0:
       var id=path[1];
       
       try
        {var match=EnvTbl[7](id,env[7]);return match[2];}
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {if
            (Ident["persistent"](id)&&
             !CamlPrimitive["caml_string_equal"]
              (Ident["name"](id),current_unit[1]))
            {return find_pers_struct(/* None */0,Ident["name"](id))[3];}
           else
            {throw CamlPrimitive["caml_global_data"]["Not_found"];}
           }
         else
          {throw exn;}
         }
       
      case 1:
       var
        match$1=
         EnvLazy[1]
          (components_of_module_maker$prime[1],find_module_descr(path[1],env));
       
       switch(match$1[0])
        {case 0:
          var match$2=Tbl["find"](path[2],match$1[1][7]);return match$2[1];
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:
       var p1=path[1];
       
       var
        match$3=
         EnvLazy[1]
          (components_of_module_maker$prime[1],find_module_descr(p1,env));
       
       switch(match$3[0])
        {case 0:throw CamlPrimitive["caml_global_data"]["Not_found"];
         case 1:
          return components_of_functor_appl$prime[1](match$3[1],p1,path[2]);
         }
       
      }
    };

var
 find=
  function(proj1,proj2,path,env)
   {switch(path[0])
     {case 0:var match=EnvTbl[7](path[1],proj1(env));return match[2];
      case 1:
       var
        match$1=
         EnvLazy[1]
          (components_of_module_maker$prime[1],find_module_descr(path[1],env));
       
       switch(match$1[0])
        {case 0:
          var match$2=Tbl["find"](path[2],proj2(match$1[1]));
          
          return match$2[1];
          
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:throw CamlPrimitive["caml_global_data"]["Not_found"];
      }
    };

var
 find_value=
  find(function(env){return env[1];},function(sc){return sc[1];});

var
 find_type_full=
  find(function(env){return env[4];},function(sc){return sc[4];});

var
 find_modtype=
  find(function(env){return env[6];},function(sc){return sc[6];});

var
 find_class=
  find(function(env){return env[8];},function(sc){return sc[8];});

var
 find_cltype=
  find(function(env){return env[9];},function(sc){return sc[9];});

var find_type=function(p,env){return find_type_full(p,env)[1];};

var find_type_descrs=function(p,env){return find_type_full(p,env)[2];};

var
 find_module=
  function(alias,path,env)
   {switch(path[0])
     {case 0:
       var id=path[1];
       
       try
        {var match=EnvTbl[7](id,env[5]);return match[2];}
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {if
            (Ident["persistent"](id)&&
             !CamlPrimitive["caml_string_equal"]
              (Ident["name"](id),current_unit[1]))
            {var ps=find_pers_struct(/* None */0,Ident["name"](id));
             
             return md(/* Mty_signature */[1,ps[2]]);
             }
           else
            {throw CamlPrimitive["caml_global_data"]["Not_found"];}
           }
         else
          {throw exn;}
         }
       
      case 1:
       var
        match$1=
         EnvLazy[1]
          (components_of_module_maker$prime[1],find_module_descr(path[1],env));
       
       switch(match$1[0])
        {case 0:
          var match$2=Tbl["find"](path[2],match$1[1][5]);
          
          return md(EnvLazy[1](subst_modtype_maker,match$2[1]));
          
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:
       var p2=path[2];
       
       var desc1=find_module_descr(path[1],env);
       
       var match$3=EnvLazy[1](components_of_module_maker$prime[1],desc1);
       
       switch(match$3[0])
        {case 0:throw CamlPrimitive["caml_global_data"]["Not_found"];
         case 1:
          var f=match$3[1];
          
          var mty=f[3];
          
          var $js;
          switch(mty[0])
           {case 3:$js=/* Mty_alias */[3,Subst["module_path"](f[5],mty[1])];
            default:
             if(alias)
              {$js=mty;}
             else
              {try
                {$js=Hashtbl["find"](f[7],p2);}
               catch(exn$1)
                {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                  {var
                    mty$1=
                     Subst["modtype"](Subst["add_module"](f[1],p2,f[5]),f[3]);
                   
                   Hashtbl["add"](f[7],p2,mty$1);
                   $js=mty$1;
                   }
                 else
                  {throw exn$1;}
                 }
               }
             }
          return md($js);
          
         }
       
      }
    };

var required_globals=[0,/* [] */0];

var
 reset_required_globals=
  function(param){return required_globals[1]=/* [] */0,0;};

var get_required_globals=function(param){return required_globals[1];};

var
 add_required_global=
  function(id)
   {if
     (Ident["global"](id)&&
      !Clflags["transparent_modules"][1]&&
      !List["exists"](Ident["same"](id),required_globals[1]))
     {return required_globals[1]=/* :: */[0,id,required_globals[1]],0;}
    else
     {return 0;}
    };

var
 normalize_path=
  function(lax,env,path)
   {switch(path[0])
     {case 0:var path$1=path;
      case 1:
       var
        path$1=
         /* Pdot */[1,normalize_path(lax,env,path[1]),path[2],path[3]];
       
      case 2:
       var
        path$1=
         /* Papply */[2,
          normalize_path(lax,env,path[1]),
          normalize_path(/* true */1,env,path[2])];
       
      }
    
    try
     {var match=find_module(/* true */1,path$1,env);
      
      var match$1=match[1];
      
      switch(match$1[0])
       {case 3:
         var path$prime=normalize_path(lax,env,match$1[1]);
         
         if(lax||Clflags["transparent_modules"][1])
          {return path$prime;}
         else
          {var id=Path["head"](path$1);
           
           if
            (Ident["global"](id)&&!Ident["same"](id,Path["head"](path$prime)))
            {add_required_global(id)}
           else
            {}
           
           return path$prime;
           }
         
        default:return path$1;}
      }
    catch(exn)
     {var exit;
      
      if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var exit$1;
        
        var $js;
        switch(path$1[0])
         {case 0:$js=!Ident["persistent"](path$1[1]);
          case 1:exit$1=304;
          case 2:exit$1=304;
          }
        
        var $js$1;
        switch(exit$1){case 304:$js$1=/* true */1;}
        if(lax||$js$1){return path$1;}else{exit=305;}
        }
      else
       {exit=305;}
      
      switch(exit){case 305:throw exn;}
      }
    };

var
 normalize_path$1=
  function(oloc,env,path)
   {try
     {return normalize_path(oloc===/* None */0,env,path);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {if(oloc)
         {throw [0,
                 $$Error,
                 /* Missing_module */[3,
                  oloc[1],
                  path,
                  normalize_path(/* true */1,env,path)]];
          }
        else
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"typing/env.ml",579,28]];
          }
        }
      else
       {throw exn;}
      }
    };

var find_module$1=find_module(/* false */0);

var
 find_type_expansion=
  function(path,env)
   {var decl=find_type(path,env);
    
    var match=decl[5];
    
    var exit;
    
    if(match)
     {var body=match[1];
      
      if
       (decl[4]===
        /* Public */1||
        decl[3]!==
        /* Type_abstract */0||
        Btype["has_constr_row"](body))
       {return /* tuple */[0,
                decl[1],
                body,
                Misc["may_map"](function(prim){return prim[2];},decl[7])];
        }
      else
       {exit=298;}
      }
    else
     {exit=298;}
    
    switch(exit)
     {case 298:
       var path$prime=normalize_path$1(/* None */0,env,path);
       
       if(Path["same"](path,path$prime))
        {throw CamlPrimitive["caml_global_data"]["Not_found"];}
       else
        {return /* tuple */[0,
                 decl[1],
                 Btype["newgenty"]
                  (/* Tconstr */[3,path$prime,decl[1],[0,/* Mnil */0]]),
                 Misc["may_map"](function(prim){return prim[2];},decl[7])];
         }
       
      }
    };

var
 find_type_expansion_opt=
  function(path,env)
   {var decl=find_type(path,env);
    
    var match=decl[5];
    
    if(match)
     {return /* tuple */[0,
              decl[1],
              match[1],
              Misc["may_map"](function(prim){return prim[2];},decl[7])];
      }
    else
     {var path$prime=normalize_path$1(/* None */0,env,path);
      
      if(Path["same"](path,path$prime))
       {throw CamlPrimitive["caml_global_data"]["Not_found"];}
      else
       {return /* tuple */[0,
                decl[1],
                Btype["newgenty"]
                 (/* Tconstr */[3,path$prime,decl[1],[0,/* Mnil */0]]),
                Misc["may_map"](function(prim){return prim[2];},decl[7])];
        }
      }
    };

var
 find_modtype_expansion=
  function(path,env)
   {var match=find_modtype(path,env)[1];
    
    if(match)
     {return match[1];}
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 is_functor_arg=
  function(path,env)
   {switch(path[0])
     {case 0:
       try
        {Ident["find_same"](path[1],env[10]);return /* true */1;}
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {return /* false */0;}
         else
          {throw exn;}
         }
       
      case 1:return is_functor_arg(path[1],env);
      case 2:return /* true */1;
      }
    };

var Recmodule=CamlPrimitive["caml_set_oo_id"]([248,"Env.Recmodule",0]);

var
 lookup_module_descr=
  function(lid,env)
   {switch(lid[0])
     {case 0:
       var s=lid[1];
       
       try
        {return EnvTbl[8](s,env[7]);}
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {if(CamlPrimitive["caml_string_equal"](s,current_unit[1]))
            {throw CamlPrimitive["caml_global_data"]["Not_found"];}
           else
            {}
           
           var ps=find_pers_struct(/* None */0,s);
           
           return /* tuple */[0,
                   /* Pident */[0,Ident["create_persistent"](s)],
                   ps[3]];
           }
         else
          {throw exn;}
         }
       
      case 1:
       var s$1=lid[2];
       
       var match=lookup_module_descr(lid[1],env);
       
       var match$1=EnvLazy[1](components_of_module_maker$prime[1],match[2]);
       
       switch(match$1[0])
        {case 0:
          var match$2=Tbl["find"](s$1,match$1[1][7]);
          
          return /* tuple */[0,
                  /* Pdot */[1,match[1],s$1,match$2[2]],
                  match$2[1]];
          
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:
       var match$3=lookup_module_descr(lid[1],env);
       
       var p1=match$3[1];
       
       var p2=lookup_module(/* true */1,lid[2],env);
       
       var match$4=find_module$1(p2,env);
       
       var match$5=EnvLazy[1](components_of_module_maker$prime[1],match$3[2]);
       
       switch(match$5[0])
        {case 0:throw CamlPrimitive["caml_global_data"]["Not_found"];
         case 1:
          var f=match$5[1];
          
          Misc["may"](check_modtype_inclusion[1](env,match$4[1],p2),f[2]);
          return /* tuple */[0,
                  /* Papply */[2,p1,p2],
                  components_of_functor_appl$prime[1](f,p1,p2)];
          
         }
       
      }
    };

var
 lookup_module=
  function(load,lid,env)
   {switch(lid[0])
     {case 0:
       var s=lid[1];
       
       try
        {var r=EnvTbl[8](s,env[5]);
         
         var md_type=r[2][1];
         
         var exit;
         
         switch(md_type[0])
          {case 0:
            var match=md_type[1];
            
            switch(match[0])
             {case 0:
               if
                (CamlPrimitive["caml_string_equal"]
                  (Ident["name"](match[1]),"#recmod#"))
                {throw Recmodule;}
               else
                {exit=283;}
               
              case 1:exit=283;
              case 2:exit=283;
              }
            
           default:exit=283;}
         
         switch(exit){case 283:}
         
         return r[1];
         }
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {if(CamlPrimitive["caml_string_equal"](s,current_unit[1]))
            {throw CamlPrimitive["caml_global_data"]["Not_found"];}
           else
            {}
           
           if(Clflags["transparent_modules"][1]&&!load)
            {try
              {find_pers_struct([/* Some */0,/* false */0],s)}
             catch(exn$1)
              {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                {Location["prerr_warning"]
                  (Location["none"],/* No_cmi_file */[32,s])}
               else
                {throw exn$1;}
               }
             }
           else
            {find_pers_struct(/* None */0,s)}
           
           return /* Pident */[0,Ident["create_persistent"](s)];
           }
         else
          {throw exn;}
         }
       
      case 1:
       var s$1=lid[2];
       
       var match$1=lookup_module_descr(lid[1],env);
       
       var match$2=EnvLazy[1](components_of_module_maker$prime[1],match$1[2]);
       
       switch(match$2[0])
        {case 0:
          var match$3=Tbl["find"](s$1,match$2[1][5]);
          
          return /* Pdot */[1,match$1[1],s$1,match$3[2]];
          
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:
       var match$4=lookup_module_descr(lid[1],env);
       
       var p2=lookup_module(/* true */1,lid[2],env);
       
       var match$5=find_module$1(p2,env);
       
       var p=/* Papply */[2,match$4[1],p2];
       
       var match$6=EnvLazy[1](components_of_module_maker$prime[1],match$4[2]);
       
       switch(match$6[0])
        {case 0:throw CamlPrimitive["caml_global_data"]["Not_found"];
         case 1:
          Misc["may"]
           (check_modtype_inclusion[1](env,match$5[1],p2),match$6[1][2]);
          return p;
          
         }
       
      }
    };

var
 lookup=
  function(proj1,proj2,lid,env)
   {switch(lid[0])
     {case 0:return EnvTbl[8](lid[1],proj1(env));
      case 1:
       var s=lid[2];
       
       var match=lookup_module_descr(lid[1],env);
       
       var match$1=EnvLazy[1](components_of_module_maker$prime[1],match[2]);
       
       switch(match$1[0])
        {case 0:
          var match$2=Tbl["find"](s,proj2(match$1[1]));
          
          return /* tuple */[0,/* Pdot */[1,match[1],s,match$2[2]],match$2[1]];
          
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:throw CamlPrimitive["caml_global_data"]["Not_found"];
      }
    };

var
 lookup_simple=
  function(proj1,proj2,lid,env)
   {switch(lid[0])
     {case 0:return EnvTbl[8](lid[1],proj1(env));
      case 1:
       var match=lookup_module_descr(lid[1],env);
       
       var match$1=EnvLazy[1](components_of_module_maker$prime[1],match[2]);
       
       switch(match$1[0])
        {case 0:
          var match$2=Tbl["find"](lid[2],proj2(match$1[1]));return match$2[1];
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:throw CamlPrimitive["caml_global_data"]["Not_found"];
      }
    };

var
 lookup_all_simple=
  function(proj1,proj2,shadow,lid,env)
   {switch(lid[0])
     {case 0:
       var xl=EnvTbl[9](lid[1],proj1(env));
       
       var
        do_shadow=
         function(param)
          {if(param)
            {var match=param[1];
             
             var x=match[1];
             
             return /* :: */[0,
                     /* tuple */[0,x,match[2]],
                     do_shadow
                      (List["filter"]
                        (function(param$1){return !shadow(x,param$1[1]);},param[2]))];
             }
           else
            {return /* [] */0;}
           };
       
       return do_shadow(xl);
       
      case 1:
       var match=lookup_module_descr(lid[1],env);
       
       var match$1=EnvLazy[1](components_of_module_maker$prime[1],match[2]);
       
       switch(match$1[0])
        {case 0:
          try
           {var comps=Tbl["find"](lid[2],proj2(match$1[1]));}
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {var comps=/* [] */0;}
            else
             {throw exn;}
            }
          
          return List["map"]
                  (function(param)
                    {return /* tuple */[0,
                             param[1],
                             function(param$1){return /* () */0;}];
                     },
                   comps);
          
         case 1:throw CamlPrimitive["caml_global_data"]["Not_found"];
         }
       
      case 2:throw CamlPrimitive["caml_global_data"]["Not_found"];
      }
    };

var has_local_constraints=function(env){return env[12];};

var
 cstr_shadow=
  function(cstr1,cstr2)
   {var match=cstr1[6];
    
    var match$1=cstr2[6];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=260;
      case 1:exit=260;
      case 2:
       switch(match$1[0])
        {case 0:exit=260;case 1:exit=260;case 2:return /* true */1;}
       
      }
    
    switch(exit){case 260:return /* false */0;}
    };

var lbl_shadow=function(lbl1,lbl2){return /* false */0;};

var
 lookup_value=
  lookup(function(env){return env[1];},function(sc){return sc[1];});

var
 lookup_all_constructors=
  lookup_all_simple
   (function(env){return env[2];},function(sc){return sc[2];},cstr_shadow);

var
 lookup_all_labels=
  lookup_all_simple
   (function(env){return env[3];},function(sc){return sc[3];},lbl_shadow);

var
 lookup_type=
  lookup(function(env){return env[4];},function(sc){return sc[4];});

var
 lookup_modtype=
  lookup(function(env){return env[6];},function(sc){return sc[6];});

var
 lookup_class=
  lookup(function(env){return env[8];},function(sc){return sc[8];});

var
 lookup_cltype=
  lookup(function(env){return env[9];},function(sc){return sc[9];});

var
 mark_value_used=
  function(env,name,vd)
   {if(!is_implicit_coercion(env))
     {try
       {return Hashtbl["find"]
                (value_declarations,/* tuple */[0,name,vd[3]],/* () */0);
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* () */0;}
        else
         {throw exn;}
        }
      }
    else
     {return 0;}
    };

var
 mark_type_used=
  function(env,name,vd)
   {if(!is_implicit_coercion(env))
     {try
       {return Hashtbl["find"]
                (type_declarations,/* tuple */[0,name,vd[8]],/* () */0);
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* () */0;}
        else
         {throw exn;}
        }
      }
    else
     {return 0;}
    };

var
 mark_constructor_used=
  function(usage,env,name,vd,constr)
   {if(!is_implicit_coercion(env))
     {try
       {return Hashtbl["find"]
                (used_constructors,/* tuple */[0,name,vd[8],constr],usage);
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* () */0;}
        else
         {throw exn;}
        }
      }
    else
     {return 0;}
    };

var
 mark_extension_used=
  function(usage,env,ext,name)
   {if(!is_implicit_coercion(env))
     {var ty_name=Path["last"](ext[1]);
      
      try
       {return Hashtbl["find"]
                (used_constructors,/* tuple */[0,ty_name,ext[6],name],usage);
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* () */0;}
        else
         {throw exn;}
        }
      }
    else
     {return 0;}
    };

var
 set_value_used_callback=
  function(name,vd,callback)
   {var key=/* tuple */[0,name,vd[3]];
    
    try
     {var old=Hashtbl["find"](value_declarations,key);
      
      return Hashtbl["replace"]
              (value_declarations,
               key,
               function(param){old(/* () */0);return callback(/* () */0);});
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Hashtbl["add"](value_declarations,key,callback);}
      else
       {throw exn;}
      }
    };

var
 set_type_used_callback=
  function(name,td,callback)
   {var loc=td[8];
    
    if(loc[3])
     {return /* () */0;}
    else
     {var key=/* tuple */[0,name,loc];
      
      try
       {var old=Hashtbl["find"](type_declarations,key);}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"typing/env.ml",841,22]];
          }
        else
         {throw exn;}
        }
      
      return Hashtbl["replace"]
              (type_declarations,key,function(param){return callback(old);});
      }
    };

var
 lookup_value$1=
  function(lid,env)
   {var r=lookup_value(lid,env);
    
    mark_value_used(env,Longident["last"](lid),r[2]);
    return r;
    };

var
 lookup_type$1=
  function(lid,env)
   {var match=lookup_type(lid,env);
    
    var decl=match[2][1];
    
    mark_type_used(env,Longident["last"](lid),decl);
    return /* tuple */[0,match[1],decl];
    };

var
 path_subst_last=
  function(path,id)
   {switch(path[0])
     {case 0:return /* Pident */[0,id];
      case 1:return /* Pdot */[1,path[1],Ident["name"](id),path[3]];
      case 2:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/env.ml",860,23]];
       
      }
    };

var
 mark_type_path=
  function(env,path)
   {try
     {var decl=find_type(path,env);
      
      return mark_type_used(env,Path["last"](path),decl);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* () */0;}
      else
       {throw exn;}
      }
    };

var
 ty_path=
  function(t)
   {var match=Btype["repr"](t);
    
    var match$1=match[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 3:return match$1[1];default:exit=224;}}
    
    switch(exit)
     {case 224:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/env.ml",871,9]];
       
      }
    };

var
 lookup_constructor=
  function(lid,env)
   {var match=lookup_all_constructors(lid,env);
    
    if(match)
     {var match$1=match[1];
      
      var desc=match$1[1];
      
      mark_type_path(env,ty_path(desc[2]));
      match$1[2](/* () */0);
      return desc;
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 is_lident=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:return /* true */1;case 1:exit=221;case 2:exit=221;}
    
    switch(exit){case 221:return /* false */0;}
    };

var
 lookup_all_constructors$1=
  function(lid,env)
   {try
     {var cstrs=lookup_all_constructors(lid,env);
      
      var
       wrap_use=
        function(desc,use,param)
         {mark_type_path(env,ty_path(desc[2]));return use(/* () */0);};
      
      return List["map"]
              (function(param)
                {var cstr=param[1];
                 
                 return /* tuple */[0,cstr,wrap_use(cstr,param[2])];
                 },
               cstrs);
      }
    catch(exn)
     {var exit;
      
      if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {if(is_lident(lid)){return /* [] */0;}else{exit=217;}}
      else
       {exit=217;}
      
      switch(exit){case 217:throw exn;}
      }
    };

var
 mark_constructor=
  function(usage,env,name,desc)
   {if(!is_implicit_coercion(env))
     {var match=desc[6];
      
      var exit;
      
      switch(match[0])
       {case 0:exit=215;
        case 1:exit=215;
        case 2:
         var ty_path$1=ty_path(desc[2]);
         
         var ty_name=Path["last"](ty_path$1);
         
         try
          {return Hashtbl["find"]
                   (used_constructors,
                    /* tuple */[0,ty_name,desc[12],name],
                    usage);
           }
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {return /* () */0;}
           else
            {throw exn;}
           }
         
        }
      
      switch(exit)
       {case 215:
         var ty_path$2=ty_path(desc[2]);
         
         try
          {var ty_decl=find_type(ty_path$2,env);}
         catch(exn$1)
          {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
            {throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"typing/env.ml",908,64]];
             }
           else
            {throw exn$1;}
           }
         
         var ty_name$1=Path["last"](ty_path$2);
         
         return mark_constructor_used(usage,env,ty_name$1,ty_decl,name);
         
        }
      }
    else
     {return 0;}
    };

var
 lookup_label=
  function(lid,env)
   {var match=lookup_all_labels(lid,env);
    
    if(match)
     {var match$1=match[1];
      
      var desc=match$1[1];
      
      mark_type_path(env,ty_path(desc[2]));
      match$1[2](/* () */0);
      return desc;
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 lookup_all_labels$1=
  function(lid,env)
   {try
     {var lbls=lookup_all_labels(lid,env);
      
      var
       wrap_use=
        function(desc,use,param)
         {mark_type_path(env,ty_path(desc[2]));return use(/* () */0);};
      
      return List["map"]
              (function(param)
                {var lbl=param[1];
                 
                 return /* tuple */[0,lbl,wrap_use(lbl,param[2])];
                 },
               lbls);
      }
    catch(exn)
     {var exit;
      
      if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {if(is_lident(lid)){return /* [] */0;}else{exit=203;}}
      else
       {exit=203;}
      
      switch(exit){case 203:throw exn;}
      }
    };

var
 lookup_class$1=
  function(lid,env)
   {var r=lookup_class(lid,env);
    
    var desc=r[2];
    
    if
     (CamlPrimitive["caml_string_equal"](Path["name"](/* None */0,desc[3]),""))
     {lookup_type$1(lid,env)}
    else
     {mark_type_path(env,desc[3])}
    
    return r;
    };

var
 lookup_cltype$1=
  function(lid,env)
   {var r=lookup_cltype(lid,env);
    
    var desc=r[2];
    
    if
     (CamlPrimitive["caml_string_equal"](Path["name"](/* None */0,desc[3]),""))
     {lookup_type$1(lid,env)}
    else
     {mark_type_path(env,desc[3])}
    
    mark_type_path(env,desc[3]);
    return r;
    };

var iter_env_cont=[0,/* [] */0];

var
 scrape_alias_safe=
  function(env,mty)
   {switch(mty[0])
     {case 3:
       var path=mty[1];
       
       var exit;
       
       switch(path[0])
        {case 0:
          if(Ident["persistent"](path[1]))
           {return /* false */0;}
          else
           {exit=197;}
          
         case 1:exit=197;
         case 2:exit=197;
         }
       
       switch(exit)
        {case 197:return scrape_alias_safe(env,find_module$1(path,env)[1]);}
       
      default:return /* true */1;}
    };

var
 iter_env=
  function(proj1,proj2,f,env,param)
   {Ident["iter"]
     (function(id,param$1){return f(/* Pident */[0,id],param$1[1]);},
      proj1(env));
    var
     iter_components=
      function(path,path$prime,mcomps)
       {var
         cont=
          function(param$1)
           {var match=EnvLazy[4](mcomps);
            
            if(match)
             {var match$1=match[1];
              
              try
               {var safe=scrape_alias_safe(match$1[1],match$1[4]);}
              catch(exn)
               {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                 {var safe=/* false */0;}
                else
                 {throw exn;}
                }
              }
            else
             {var safe=/* true */1;}
            
            if(!safe)
             {return /* () */0;}
            else
             {var
               match$2=
                EnvLazy[1](components_of_module_maker$prime[1],mcomps);
              
              switch(match$2[0])
               {case 0:
                 var comps=match$2[1];
                 
                 Tbl["iter"]
                  (function(s,param$2)
                    {var n=param$2[2];
                     
                     return f
                             (/* Pdot */[1,path,s,n],
                              /* tuple */[0,/* Pdot */[1,path$prime,s,n],param$2[1]]);
                     },
                   proj2(comps));
                 return Tbl["iter"]
                         (function(s,param$2)
                           {var n=param$2[2];
                            
                            return iter_components
                                    (/* Pdot */[1,path,s,n],
                                     /* Pdot */[1,path$prime,s,n],
                                     param$2[1]);
                            },
                          comps[7]);
                 
                case 1:return /* () */0;
                }
              }
            };
        
        return iter_env_cont[1]=
               /* :: */[0,/* tuple */[0,path,cont],iter_env_cont[1]],
               0;
        };
    
    Hashtbl["iter"]
     (function(s,pso)
       {if(pso)
         {var id=/* Pident */[0,Ident["create_persistent"](s)];
          
          return iter_components(id,id,pso[1][3]);
          }
        else
         {return /* () */0;}
        },
      persistent_structures);
    return Ident["iter"]
            (function(id,param$1)
              {var match=param$1[1];
               
               return iter_components(/* Pident */[0,id],match[1],match[2]);
               },
             env[7]);
    };

var
 run_iter_cont=
  function(l)
   {iter_env_cont[1]=/* [] */0;
    List["iter"](function(c){return c(/* () */0);},l);
    var cont=List["rev"](iter_env_cont[1]);
    
    iter_env_cont[1]=/* [] */0;
    return cont;
    };

var
 iter_types=
  function(f)
   {return iter_env
            (function(env){return env[4];},function(sc){return sc[4];},f);
    };

var
 same_types=
  function(env1,env2){return env1[4]===env2[4]&&env1[7]===env2[7];};

var
 used_persistent=
  function(param)
   {var r=[0,Types["Concr"][1]];
    
    Hashtbl["iter"]
     (function(s,pso)
       {if(pso!==/* None */0)
         {return r[1]=Types["Concr"][4](s,r[1]),0;}
        else
         {return 0;}
        },
      persistent_structures);
    return r[1];
    };

var
 find_all_comps=
  function(proj,s,param)
   {var match=EnvLazy[1](components_of_module_maker$prime[1],param[2]);
    
    switch(match[0])
     {case 0:
       try
        {var match$1=Tbl["find"](s,proj(match[1]));
         
         return /* :: */[0,
                 /* tuple */[0,/* Pdot */[1,param[1],s,match$1[2]],match$1[1]],
                 /* [] */0];
         }
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {return /* [] */0;}
         else
          {throw exn;}
         }
       
      case 1:return /* [] */0;
      }
    };

var
 find_shadowed_comps=
  function(path,env)
   {switch(path[0])
     {case 0:
       return List["map"]
               (function(prim){return prim[1];},
                Ident["find_all"](Ident["name"](path[1]),env[7]));
       
      case 1:
       var l=find_shadowed_comps(path[1],env);
       
       var
        l$prime=
         List["map"]
          (find_all_comps(function(comps){return comps[7];},path[2]),l);
       
       return List["flatten"](l$prime);
       
      case 2:return /* [] */0;
      }
    };

var
 find_shadowed=
  function(proj1,proj2,path,env)
   {switch(path[0])
     {case 0:
       return List["map"]
               (function(prim){return prim[1];},
                Ident["find_all"](Ident["name"](path[1]),proj1(env)));
       
      case 1:
       var l=find_shadowed_comps(path[1],env);
       
       var l$prime=List["map"](find_all_comps(proj2,path[2]),l);
       
       return List["flatten"](l$prime);
       
      case 2:return /* [] */0;
      }
    };

var
 find_shadowed_types=
  function(path,env)
   {var
     l=
      find_shadowed
       (function(env){return env[4];},
        function(comps){return comps[4];},
        path,
        env);
    
    return List["map"](function(prim){return prim[1];},l);
    };

var
 add_gadt_instance_level=
  function(lv,env)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[13]=
    /* :: */[0,/* tuple */[0,lv,[0,Btype["TypeSet"][1]]],env[13]];
    return newrecord;
    };

var
 is_Tlink=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 6:return /* true */1;default:exit=172;}}
    
    switch(exit){case 172:return /* false */0;}
    };

var
 gadt_instance_level=
  function(env,t)
   {var
     find_instance=
      function(param)
       {if(param)
         {var match=param[1];
          
          var r=match[2];
          
          if(Btype["TypeSet"][16](is_Tlink,r[1]))
           {r[1]=
            Btype["TypeSet"][14]
             (function(ty){return Btype["TypeSet"][4](Btype["repr"](ty));},
              r[1],
              Btype["TypeSet"][1])}
          else
           {}
          
          if(Btype["TypeSet"][3](t,r[1]))
           {return /* Some */[0,match[1]];}
          else
           {return find_instance(param[2]);}
          }
        else
         {return /* None */0;}
        };
    
    return find_instance(env[13]);
    };

var
 add_gadt_instances=
  function(env,lv,tl)
   {try
     {var r=List["assoc"](lv,env[13]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/env.ml",1066,59]];
        }
      else
       {throw exn;}
      }
    
    return Btype["set_typeset"]
            (r,List["fold_right"](Btype["TypeSet"][4],tl,r[1]));
    };

var
 add_gadt_instance_chain=
  function(env,lv,t)
   {try
     {var r=List["assoc"](lv,env[13]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/env.ml",1075,59]];
        }
      else
       {throw exn;}
      }
    
    var
     add_instance=
      function(t)
       {var t$1=Btype["repr"](t);
        
        if(!Btype["TypeSet"][3](t$1,r[1]))
         {Btype["set_typeset"](r,Btype["TypeSet"][4](t$1,r[1]));
          var match=t$1[1];
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 3:
               return Misc["may"]
                       (add_instance,
                        Btype["find_expans"](/* Private */0,match[1],match[3][1]));
               
              default:exit=163;}}
          
          switch(exit){case 163:return /* () */0;}
          }
        else
         {return 0;}
        };
    
    return add_instance(t);
    };

var
 scrape_alias=
  function(env,path,mty)
   {var exit;
    
    switch(mty[0])
     {case 0:
       try
        {return scrape_alias(env,path,find_modtype_expansion(mty[1],env));}
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {return mty;}
         else
          {throw exn;}
         }
       
      case 1:exit=162;
      case 2:exit=162;
      case 3:
       var path$1=mty[1];
       
       try
        {return scrape_alias
                 (env,/* Some */[0,path$1],find_module$1(path$1,env)[1]);
         }
       catch(exn$1)
        {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
          {return mty;}
         else
          {throw exn$1;}
         }
       
      }
    
    switch(exit)
     {case 162:
       if(path){return strengthen[1](env,mty,path[1]);}else{return mty;}
      }
    };

var
 scrape_alias$1=
  function(env,mty){return scrape_alias(env,/* None */0,mty);};

var
 constructors_of_type=
  function(ty_path,decl)
   {var
     handle_variants=
      function(cstrs)
       {return Datarepr["constructor_descrs"]
                (Btype["newgenty"]
                  (/* Tconstr */[3,ty_path,decl[1],[0,/* Mnil */0]]),
                 cstrs,
                 decl[4]);
        };
    
    var match=decl[3];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return handle_variants(match[1]);default:exit=155;}}
    
    switch(exit){case 155:return /* [] */0;}
    };

var
 labels_of_type=
  function(ty_path,decl)
   {var match=decl[3];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         return Datarepr["label_descrs"]
                 (Btype["newgenty"]
                   (/* Tconstr */[3,ty_path,decl[1],[0,/* Mnil */0]]),
                  match[1],
                  match[2],
                  decl[4]);
         
        default:exit=153;}}
    
    switch(exit){case 153:return /* [] */0;}
    };

var
 prefix_idents=
  function(root,pos,sub,param)
   {if(param)
     {var match=param[1];
      
      switch(match[0])
       {case 0:
         var p=/* Pdot */[1,root,Ident["name"](match[1]),pos];
         
         var match$1=match[2][2];
         
         var exit;
         
         if(typeof match$1==="number")
          {switch(match$1){}}
         else
          {switch(match$1[0]){case 0:var nextpos=pos;default:exit=138;}}
         
         switch(exit){case 138:var nextpos=pos+1;}
         
         var match$2=prefix_idents(root,nextpos,sub,param[2]);
         
         return /* tuple */[0,/* :: */[0,p,match$2[1]],match$2[2]];
         
        case 1:
         var id=match[1];
         
         var p$1=/* Pdot */[1,root,Ident["name"](id),Path["nopos"]];
         
         var
          match$3=
           prefix_idents(root,pos,Subst["add_type"](id,p$1,sub),param[2]);
         
         return /* tuple */[0,/* :: */[0,p$1,match$3[1]],match$3[2]];
         
        case 2:
         var p$2=/* Pdot */[1,root,Ident["name"](match[1]),pos];
         
         var match$4=prefix_idents(root,pos+1,sub,param[2]);
         
         return /* tuple */[0,/* :: */[0,p$2,match$4[1]],match$4[2]];
         
        case 3:
         var id$1=match[1];
         
         var p$3=/* Pdot */[1,root,Ident["name"](id$1),pos];
         
         var
          match$5=
           prefix_idents
            (root,pos+1,Subst["add_module"](id$1,p$3,sub),param[2]);
         
         return /* tuple */[0,/* :: */[0,p$3,match$5[1]],match$5[2]];
         
        case 4:
         var id$2=match[1];
         
         var p$4=/* Pdot */[1,root,Ident["name"](id$2),Path["nopos"]];
         
         var
          match$6=
           prefix_idents
            (root,
             pos,
             Subst["add_modtype"](id$2,/* Mty_ident */[0,p$4],sub),
             param[2]);
         
         return /* tuple */[0,/* :: */[0,p$4,match$6[1]],match$6[2]];
         
        case 5:
         var p$5=/* Pdot */[1,root,Ident["name"](match[1]),pos];
         
         var match$7=prefix_idents(root,pos+1,sub,param[2]);
         
         return /* tuple */[0,/* :: */[0,p$5,match$7[1]],match$7[2]];
         
        case 6:
         var p$6=/* Pdot */[1,root,Ident["name"](match[1]),Path["nopos"]];
         
         var match$8=prefix_idents(root,pos,sub,param[2]);
         
         return /* tuple */[0,/* :: */[0,p$6,match$8[1]],match$8[2]];
         
        }
      }
    else
     {return /* tuple */[0,/* [] */0,sub];}
    };

var
 subst_signature=
  function(sub,sg)
   {return List["map"]
            (function(item)
              {switch(item[0])
                {case 0:
                  return /* Sig_value */[0,
                          item[1],
                          Subst["value_description"](sub,item[2])];
                  
                 case 1:
                  return /* Sig_type */[1,
                          item[1],
                          Subst["type_declaration"](sub,item[2]),
                          item[3]];
                  
                 case 2:
                  return /* Sig_typext */[2,
                          item[1],
                          Subst["extension_constructor"](sub,item[2]),
                          item[3]];
                  
                 case 3:
                  return /* Sig_module */[3,
                          item[1],
                          Subst["module_declaration"](sub,item[2]),
                          item[3]];
                  
                 case 4:
                  return /* Sig_modtype */[4,
                          item[1],
                          Subst["modtype_declaration"](sub,item[2])];
                  
                 case 5:
                  return /* Sig_class */[5,
                          item[1],
                          Subst["class_declaration"](sub,item[2]),
                          item[3]];
                  
                 case 6:
                  return /* Sig_class_type */[6,
                          item[1],
                          Subst["cltype_declaration"](sub,item[2]),
                          item[3]];
                  
                 }
               },
             sg);
    };

var
 prefix_idents_and_subst=
  function(root,sub,sg)
   {var match=prefix_idents(root,0,sub,sg);
    
    var sub$1=match[2];
    
    return /* tuple */[0,
            match[1],
            sub$1,
            [246,function(param){return subst_signature(sub$1,sg);}]];
    };

var
 prefix_idents_and_subst$1=
  function(root,sub,sg)
   {if(CamlPrimitive["caml_equal"](sub,Subst["identity"]))
     {try
       {var sgs=Hashtbl["find"](prefixed_sg,root);}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {var sgs$1=[0,/* [] */0];
          
          Hashtbl["add"](prefixed_sg,root,sgs$1);
          var sgs=sgs$1;
          }
        else
         {throw exn;}
        }
      
      try
       {return List["assq"](sg,sgs[1]);}
      catch(exn$1)
       {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
         {var r=prefix_idents_and_subst(root,sub,sg);
          
          sgs[1]=/* :: */[0,/* tuple */[0,sg,r],sgs[1]];
          return r;
          }
        else
         {throw exn$1;}
        }
      }
    else
     {return prefix_idents_and_subst(root,sub,sg);}
    };

var
 add_to_tbl=
  function(id,decl,tbl)
   {try
     {var decls=Tbl["find"](id,tbl);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var decls=/* [] */0;}
      else
       {throw exn;}
      }
    
    return Tbl["add"](id,/* :: */[0,decl,decls],tbl);
    };

var
 components_of_module=
  function(env,sub,path,mty)
   {return EnvLazy[2](/* tuple */[0,env,sub,path,mty]);};

var
 components_of_module_maker=
  function(param)
   {var sub=param[2];
    
    var env=param[1];
    
    var match=scrape_alias$1(env,param[4]);
    
    var exit;
    
    switch(match[0])
     {case 0:exit=109;
      case 1:
       var sg=match[1];
       
       var
        c=
         /* record */[0,
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"],
          Tbl["empty"]];
       
       var match$1=prefix_idents_and_subst$1(param[3],sub,sg);
       
       var sub$1=match$1[2];
       
       var env$1=[0,env];
       
       var pos=[0,0];
       
       List["iter2"]
        (function(item,path)
          {switch(item[0])
            {case 0:
              var decl=item[2];
              
              var decl$prime=Subst["value_description"](sub$1,decl);
              
              c[1]=
              Tbl["add"]
               (Ident["name"](item[1]),/* tuple */[0,decl$prime,pos[1]],c[1]);
              var match$2=decl[2];
              
              var exit$1;
              
              if(typeof match$2==="number")
               {switch(match$2){}}
              else
               {switch(match$2[0]){case 0:return /* () */0;default:exit$1=92;}}
              
              switch(exit$1){case 92:return pos[0]++;}
              
             case 1:
              var decl$1=item[2];
              
              var id=item[1];
              
              var decl$prime$1=Subst["type_declaration"](sub$1,decl$1);
              
              var
               constructors=
                List["map"]
                 (function(prim){return prim[2];},
                  constructors_of_type(path,decl$prime$1));
              
              var
               labels=
                List["map"]
                 (function(prim){return prim[2];},
                  labels_of_type(path,decl$prime$1));
              
              c[4]=
              Tbl["add"]
               (Ident["name"](id),
                /* tuple */[0,
                 /* tuple */[0,
                  decl$prime$1,
                  /* tuple */[0,constructors,labels]],
                 Path["nopos"]],
                c[4]);
              List["iter"]
               (function(descr)
                 {return c[2]=
                         add_to_tbl(descr[1],/* tuple */[0,descr,Path["nopos"]],c[2]),
                         0;
                  },
                constructors);
              List["iter"]
               (function(descr)
                 {return c[3]=
                         add_to_tbl(descr[1],/* tuple */[0,descr,Path["nopos"]],c[3]),
                         0;
                  },
                labels);
              return env$1[1]=
                     store_type_infos
                      (/* None */0,id,/* Pident */[0,id],decl$1,env$1[1],env$1[1]),
                     0;
              
             case 2:
              var ext$prime=Subst["extension_constructor"](sub$1,item[2]);
              
              var descr=Datarepr["extension_descr"](path,ext$prime);
              
              c[2]=
              add_to_tbl
               (Ident["name"](item[1]),/* tuple */[0,descr,pos[1]],c[2]);
              return pos[0]++;
              
             case 3:
              var md$1=item[2];
              
              var id$1=item[1];
              
              var mty=md$1[1];
              
              var mty$prime=EnvLazy[2](/* tuple */[0,sub$1,mty]);
              
              c[5]=
              Tbl["add"]
               (Ident["name"](id$1),/* tuple */[0,mty$prime,pos[1]],c[5]);
              var comps=components_of_module(env$1[1],sub$1,path,mty);
              
              c[7]=
              Tbl["add"](Ident["name"](id$1),/* tuple */[0,comps,pos[1]],c[7]);
              env$1[1]=
              store_module
               (/* None */0,id$1,/* Pident */[0,id$1],md$1,env$1[1],env$1[1]);
              return pos[0]++;
              
             case 4:
              var decl$2=item[2];
              
              var id$2=item[1];
              
              var decl$prime$2=Subst["modtype_declaration"](sub$1,decl$2);
              
              c[6]=
              Tbl["add"]
               (Ident["name"](id$2),
                /* tuple */[0,decl$prime$2,Path["nopos"]],
                c[6]);
              return env$1[1]=
                     store_modtype
                      (/* None */0,
                       id$2,
                       /* Pident */[0,id$2],
                       decl$2,
                       env$1[1],
                       env$1[1]),
                     0;
              
             case 5:
              var decl$prime$3=Subst["class_declaration"](sub$1,item[2]);
              
              c[8]=
              Tbl["add"]
               (Ident["name"](item[1]),
                /* tuple */[0,decl$prime$3,pos[1]],
                c[8]);
              return pos[0]++;
              
             case 6:
              var decl$prime$4=Subst["cltype_declaration"](sub$1,item[2]);
              
              return c[9]=
                     Tbl["add"]
                      (Ident["name"](item[1]),
                       /* tuple */[0,decl$prime$4,pos[1]],
                       c[9]),
                     0;
              
             }
           },
         sg,
         match$1[1]);
       return /* Structure_comps */[0,c];
       
      case 2:
       return /* Functor_comps */[1,
               /* record */[0,
                match[1],
                Misc["may_map"](Subst["modtype"](sub),match[2]),
                match[3],
                env,
                sub,
                Hashtbl["create"](/* None */0,17),
                Hashtbl["create"](/* None */0,17)]];
       
      case 3:exit=109;
      }
    
    switch(exit)
     {case 109:
       return /* Structure_comps */[0,
               /* record */[0,
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"],
                Tbl["empty"]]];
       
      }
    };

var
 check_usage=
  function(loc,id,warn,tbl)
   {if(!loc[3]&&Warnings["is_active"](warn("")))
     {var name=Ident["name"](id);
      
      var key=/* tuple */[0,name,loc];
      
      if(Hashtbl["mem"](tbl,key))
       {return /* () */0;}
      else
       {var used=[0,/* false */0];
        
        Hashtbl["add"](tbl,key,function(param){return used[1]=/* true */1,0;});
        if
         (!(CamlPrimitive["caml_string_equal"](name,"")||
           name[0]===
           95||
           name[0]===
           35))
         {return add_delayed_check_forward[1]
                  (function(param)
                    {if(!used[1])
                      {return Location["prerr_warning"](loc,warn(name));}
                     else
                      {return 0;}
                     });
          }
        else
         {return 0;}
        }
      }
    else
     {return 0;}
    };

var
 check_value_name=
  function(name,loc)
   {if(name["length"]>0&&name[0]===35)
     {for(var i=1;i<=name["length"]-1;i++)
       {if(name[i]===35)
         {throw [0,$$Error,/* Illegal_value_name */[4,loc,name]];}
        else
         {}
        }
      return 0;
      }
    else
     {return 0;}
    };

var
 store_value=
  function(check,slot,id,path,decl,env,renv)
   {check_value_name(Ident["name"](id),decl[3]);
    Misc["may"]
     (function(f){return check_usage(decl[3],id,f,value_declarations);},check);
    var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[1]=
    EnvTbl[4]("value",slot,id,/* tuple */[0,path,decl],env[1],renv[1]);
    newrecord[11]=/* Env_value */[0,env[11],id,decl];
    return newrecord;
    };

var
 store_type=
  function(check,slot,id,path,info,env,renv)
   {var loc=info[8];
    
    if(check)
     {check_usage
       (loc,
        id,
        function(s){return /* Unused_type_declaration */[18,s];},
        type_declarations)}
    else
     {}
    
    var constructors=constructors_of_type(path,info);
    
    var labels=labels_of_type(path,info);
    
    var
     descrs=
      /* tuple */[0,
       List["map"](function(prim){return prim[2];},constructors),
       List["map"](function(prim){return prim[2];},labels)];
    
    if
     (check&&
      !loc[3]&&
      Warnings["is_active"]
       ([/* Unused_constructor */21,"",/* false */0,/* false */0]))
     {var ty=Ident["name"](id);
      
      List["iter"]
       (function(param)
         {var c=param[2][1];
          
          var k=/* tuple */[0,ty,loc,c];
          
          if(!Hashtbl["mem"](used_constructors,k))
           {var used=constructor_usages(/* () */0);
            
            Hashtbl["add"](used_constructors,k,add_constructor_usage(used));
            if(!(CamlPrimitive["caml_string_equal"](ty,"")||ty[0]===95))
             {return add_delayed_check_forward[1]
                      (function(param$1)
                        {if(!is_in_signature(env)&&!used[1])
                          {return Location["prerr_warning"]
                                   (loc,/* Unused_constructor */[21,c,used[2],used[3]]);
                           }
                         else
                          {return 0;}
                         });
              }
            else
             {return 0;}
            }
          else
           {return 0;}
          },
        constructors)}
    else
     {}
    
    var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[2]=
    List["fold_right"]
     (function(param,constrs)
       {return EnvTbl[4]("constructor",slot,param[1],param[2],constrs,renv[2]);
        },
      constructors,
      env[2]);
    newrecord[3]=
    List["fold_right"]
     (function(param,labels)
       {return EnvTbl[4]("label",slot,param[1],param[2],labels,renv[3]);},
      labels,
      env[3]);
    newrecord[4]=
    EnvTbl[4]
     ("type",
      slot,
      id,
      /* tuple */[0,path,/* tuple */[0,info,descrs]],
      env[4],
      renv[4]);
    newrecord[11]=/* Env_type */[1,env[11],id,info];
    return newrecord;
    };

var
 store_type_infos=
  function(slot,id,path,info,env,renv)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[4]=
    EnvTbl[4]
     ("type",
      slot,
      id,
      /* tuple */[0,
       path,
       /* tuple */[0,info,[/* tuple */0,/* [] */0,/* [] */0]]],
      env[4],
      renv[4]);
    newrecord[11]=/* Env_type */[1,env[11],id,info];
    return newrecord;
    };

var
 store_extension=
  function(check,slot,id,path,ext,env,renv)
   {var loc=ext[6];
    
    if
     (check&&
      !loc[3]&&
      Warnings["is_active"]
       ([/* Unused_extension */22,"",/* false */0,/* false */0]))
     {var ty=Path["last"](ext[1]);
      
      var n=Ident["name"](id);
      
      var k=/* tuple */[0,ty,loc,n];
      
      if(!Hashtbl["mem"](used_constructors,k))
       {var used=constructor_usages(/* () */0);
        
        Hashtbl["add"](used_constructors,k,add_constructor_usage(used)),
        add_delayed_check_forward[1]
         (function(param)
           {if(!is_in_signature(env)&&!used[1])
             {return Location["prerr_warning"]
                      (loc,/* Unused_extension */[22,n,used[2],used[3]]);
              }
            else
             {return 0;}
            })}
      else
       {}
      }
    else
     {}
    
    var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[2]=
    EnvTbl[4]
     ("constructor",
      slot,
      id,
      Datarepr["extension_descr"](path,ext),
      env[2],
      renv[2]);
    newrecord[11]=/* Env_extension */[2,env[11],id,ext];
    return newrecord;
    };

var
 store_module=
  function(slot,id,path,md,env,renv)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[5]=
    EnvTbl[4]("module",slot,id,/* tuple */[0,path,md],env[5],renv[5]);
    newrecord[7]=
    EnvTbl[4]
     ("module",
      slot,
      id,
      /* tuple */[0,
       path,
       components_of_module(env,Subst["identity"],path,md[1])],
      env[7],
      renv[7]);
    newrecord[11]=/* Env_module */[3,env[11],id,md];
    return newrecord;
    };

var
 store_modtype=
  function(slot,id,path,info,env,renv)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[6]=
    EnvTbl[4]("module type",slot,id,/* tuple */[0,path,info],env[6],renv[6]);
    newrecord[11]=/* Env_modtype */[4,env[11],id,info];
    return newrecord;
    };

var
 store_class=
  function(slot,id,path,desc,env,renv)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[8]=
    EnvTbl[4]("class",slot,id,/* tuple */[0,path,desc],env[8],renv[8]);
    newrecord[11]=/* Env_class */[5,env[11],id,desc];
    return newrecord;
    };

var
 store_cltype=
  function(slot,id,path,desc,env,renv)
   {var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[9]=
    EnvTbl[4]("class type",slot,id,/* tuple */[0,path,desc],env[9],renv[9]);
    newrecord[11]=/* Env_cltype */[6,env[11],id,desc];
    return newrecord;
    };

var
 components_of_functor_appl=
  function(f,p1,p2)
   {try
     {return Hashtbl["find"](f[6],p2);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var p=/* Papply */[2,p1,p2];
        
        var
         mty=
          Subst["modtype"]
           (Subst["add_module"](f[1],p2,Subst["identity"]),f[3]);
        
        var comps=components_of_module(f[4],f[5],p,mty);
        
        Hashtbl["add"](f[6],p2,comps);
        return comps;
        }
      else
       {throw exn;}
      }
    };

components_of_module$prime[1]=components_of_module;
components_of_functor_appl$prime[1]=components_of_functor_appl;
components_of_module_maker$prime[1]=components_of_module_maker;
var
 add_functor_arg=
  function($staropt$star,id,env)
   {if($staropt$star){var arg=$staropt$star[1];}else{var arg=/* false */0;}
    
    if(!arg)
     {return env;}
    else
     {var newrecord=/* unknown */"duprecord regular 14";
      
      newrecord[10]=Ident["add"](id,/* () */0,env[10]);
      newrecord[11]=/* Env_functor_arg */[8,env[11],id];
      return newrecord;
      }
    };

var
 add_value=
  function(check,id,desc,env)
   {return store_value(check,/* None */0,id,/* Pident */[0,id],desc,env,env);};

var
 add_type=
  function(check,id,info,env)
   {return store_type(check,/* None */0,id,/* Pident */[0,id],info,env,env);};

var
 add_extension=
  function(check,id,ext,env)
   {return store_extension
            (check,/* None */0,id,/* Pident */[0,id],ext,env,env);
    };

var
 add_module_declaration=
  function(arg,id,md,env)
   {var path=/* Pident */[0,id];
    
    var env$1=store_module(/* None */0,id,path,md,env,env);
    
    return add_functor_arg(arg,id,env$1);
    };

var
 add_modtype=
  function(id,info,env)
   {return store_modtype(/* None */0,id,/* Pident */[0,id],info,env,env);};

var
 add_class=
  function(id,ty,env)
   {return store_class(/* None */0,id,/* Pident */[0,id],ty,env,env);};

var
 add_cltype=
  function(id,ty,env)
   {return store_cltype(/* None */0,id,/* Pident */[0,id],ty,env,env);};

var
 add_module=
  function(arg,id,mty,env){return add_module_declaration(arg,id,md(mty),env);};

var
 add_local_constraint=
  function(id,info,elv,env)
   {var exit;
    
    if(info[5])
     {var match=info[7];
      
      if(match)
       {var newrecord=/* unknown */"duprecord regular 9";
        
        var
         env$1=
          add_type
           (/* false */0,
            id,
            (newrecord[7]=
             /* Some */[0,/* tuple */[0,match[1][1],elv]],
             newrecord),
            env);
        
        var newrecord$1=/* unknown */"duprecord regular 14";
        
        newrecord$1[12]=/* true */1;
        return newrecord$1;
        }
      else
       {exit=73;}
      }
    else
     {exit=73;}
    
    switch(exit)
     {case 73:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/env.ml",1538,9]];
       
      }
    };

var
 enter=
  function(store_fun,name,data,env)
   {var id=Ident["create"](name);
    
    return /* tuple */[0,
            id,
            store_fun(/* None */0,id,/* Pident */[0,id],data,env,env)];
    };

var enter_value=function(check){return enter(store_value(check));};

var enter_type=enter(store_type(/* true */1));

var enter_extension=enter(store_extension(/* true */1));

var
 enter_module_declaration=
  function(arg,name,md,env)
   {var id=Ident["create"](name);
    
    return /* tuple */[0,id,add_module_declaration(arg,id,md,env)];
    };

var enter_modtype=enter(store_modtype);

var enter_class=enter(store_class);

var enter_cltype=enter(store_cltype);

var
 enter_module=
  function(arg,s,mty,env){return enter_module_declaration(arg,s,md(mty),env);};

var
 add_item=
  function(comp,env)
   {switch(comp[0])
     {case 0:return add_value(/* None */0,comp[1],comp[2],env);
      case 1:return add_type(/* false */0,comp[1],comp[2],env);
      case 2:return add_extension(/* false */0,comp[1],comp[2],env);
      case 3:return add_module_declaration(/* None */0,comp[1],comp[2],env);
      case 4:return add_modtype(comp[1],comp[2],env);
      case 5:return add_class(comp[1],comp[2],env);
      case 6:return add_cltype(comp[1],comp[2],env);
      }
    };

var
 add_signature=
  function(sg,env)
   {if(sg){return add_signature(sg[2],add_item(sg[1],env));}else{return env;}};

var
 open_signature=
  function(slot,root,sg,env0)
   {var match=prefix_idents_and_subst$1(root,Subst["identity"],sg);
    
    var sg$1=match[3];
    
    var tag=CamlPrimitive["caml_obj_tag"](sg$1);
    
    if(tag===250)
     {var sg$2=sg$1[1];}
    else
     {if(tag===246)
       {var sg$2=CamlinternalLazy["force_lazy_block"](sg$1);}
      else
       {var sg$2=sg$1;}
      }
    
    var
     newenv=
      List["fold_left2"]
       (function(env,item,p)
         {switch(item[0])
           {case 0:
             return store_value
                     (/* None */0,slot,Ident["hide"](item[1]),p,item[2],env,env0);
             
            case 1:
             return store_type
                     (/* false */0,
                      slot,
                      Ident["hide"](item[1]),
                      p,
                      item[2],
                      env,
                      env0);
             
            case 2:
             return store_extension
                     (/* false */0,
                      slot,
                      Ident["hide"](item[1]),
                      p,
                      item[2],
                      env,
                      env0);
             
            case 3:
             return store_module
                     (slot,Ident["hide"](item[1]),p,item[2],env,env0);
             
            case 4:
             return store_modtype
                     (slot,Ident["hide"](item[1]),p,item[2],env,env0);
             
            case 5:
             return store_class
                     (slot,Ident["hide"](item[1]),p,item[2],env,env0);
             
            case 6:
             return store_cltype
                     (slot,Ident["hide"](item[1]),p,item[2],env,env0);
             
            }
          },
        env0,
        sg$2,
        match[1]);
    
    var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[11]=/* Env_open */[7,env0[11],root];
    return newrecord;
    };

var
 open_pers_signature=
  function(name,env)
   {var ps=find_pers_struct(/* None */0,name);
    
    return open_signature
            (/* None */0,
             /* Pident */[0,Ident["create_persistent"](name)],
             ps[2],
             env);
    };

var
 open_signature$1=
  function($staropt$star,$staropt$star,ovf,root,sg,env)
   {if($staropt$star$1)
     {var loc=$staropt$star$1[1];}
    else
     {var loc=Location["none"];}
    
    if($staropt$star)
     {var toplevel=$staropt$star[1];}
    else
     {var toplevel=/* false */0;}
    
    if
     (!toplevel&&
      ovf===
      /* Fresh */1&&
      !loc[3]&&
      (Warnings["is_active"]([/* Unused_open */17,""])||
       Warnings["is_active"]([/* Open_shadow_identifier */27,"",""])||
       Warnings["is_active"]([/* Open_shadow_label_constructor */28,"",""])))
     {var used=[0,/* false */0];
      
      add_delayed_check_forward[1]
       (function(param)
         {if(!used[1])
           {return Location["prerr_warning"]
                    (loc,/* Unused_open */[17,Path["name"](/* None */0,root)]);
            }
          else
           {return 0;}
          });
      var shadowed=[0,/* [] */0];
      
      var
       slot=
        function(kind,s,b)
         {if(b&&!List["mem"](/* tuple */[0,kind,s],shadowed[1]))
           {shadowed[1]=/* :: */[0,/* tuple */[0,kind,s],shadowed[1]];
            var exit;
            
            switch(kind)
             {case "constructor":exit=45;
              case "label":exit=45;
              default:exit=46;}
            
            switch(exit)
             {case 46:var w=/* Open_shadow_identifier */[27,kind,s];
              case 45:var w=/* Open_shadow_label_constructor */[28,kind,s];
              }
            
            Location["prerr_warning"](loc,w)}
          else
           {}
          
          return used[1]=/* true */1,0;
          };
      
      return open_signature(/* Some */[0,slot],root,sg,env);
      }
    else
     {return open_signature(/* None */0,root,sg,env);}
    };

var
 read_signature=
  function(modname,filename)
   {var ps=read_pers_struct(modname,filename);
    
    check_consistency(ps);
    return ps[2];
    };

var
 crc_of_unit=
  function(name)
   {var ps=find_pers_struct(/* None */0,name);
    
    try
     {var crco=List["assoc"](name,ps[4]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/env.ml",1659,6]];
        }
      else
       {throw exn;}
      }
    
    if(crco)
     {return crco[1];}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/env.ml",1662,14]];
      }
    };

var
 imports=
  function(param)
   {return Consistbl["extract"](StringSet[20](imported_units[1]),crc_units);};

var
 save_signature_with_imports=
  function(sg,modname,filename,imports)
   {Btype["cleanup_abbrev"](/* () */0);
    Subst["reset_for_saving"](/* () */0);
    var sg$1=Subst["signature"](Subst["for_saving"](Subst["identity"]),sg);
    
    var oc=Pervasives["open_out_bin"](filename);
    
    try
     {var
       cmi=
        /* record */[0,
         modname,
         sg$1,
         imports,
         Clflags["recursive_types"][1]
          ?[/* :: */0,/* Rectypes */0,/* [] */0]
          :/* [] */0];
      
      var crc=Cmi_format["output_cmi"](filename,oc,cmi);
      
      Pervasives["close_out"](oc);
      var
       comps=
        components_of_module
         (empty$1,
          Subst["identity"],
          /* Pident */[0,Ident["create_persistent"](modname)],
          /* Mty_signature */[1,sg$1]);
      
      var
       ps=
        /* record */[0,
         modname,
         sg$1,
         comps,
         /* :: */[0,/* tuple */[0,cmi[1],/* Some */[0,crc]],imports],
         /* false */0,
         filename,
         cmi[4]];
      
      save_pers_struct(crc,ps);
      return sg$1;
      }
    catch(exn)
     {Pervasives["close_out"](oc);Misc["remove_file"](filename);throw exn;}
    };

var
 save_signature=
  function(sg,modname,filename)
   {return save_signature_with_imports(sg,modname,filename,imports(/* () */0));
    };

var
 find_all$1=
  function(proj1,proj2,f,lid,env,acc)
   {if(lid)
     {var match=lookup_module_descr(lid[1],env);
      
      var p=match[1];
      
      var match$1=EnvLazy[1](components_of_module_maker,match[2]);
      
      switch(match$1[0])
       {case 0:
         return Tbl["fold"]
                 (function(s,param,acc)
                   {return f(s,/* Pdot */[1,p,s,param[2]],param[1],acc);},
                  proj2(match$1[1]),
                  acc);
         
        case 1:return acc;
        }
      }
    else
     {return EnvTbl[10]
              (function(id,param,acc)
                {return f(Ident["name"](id),param[1],param[2],acc);},
               proj1(env),
               acc);
      }
    };

var
 find_all_simple_list=
  function(proj1,proj2,f,lid,env,acc)
   {if(lid)
     {var match=lookup_module_descr(lid[1],env);
      
      var match$1=EnvLazy[1](components_of_module_maker,match[2]);
      
      switch(match$1[0])
       {case 0:
         return Tbl["fold"]
                 (function(s,comps,acc)
                   {if(comps){return f(comps[1][1],acc);}else{return acc;}},
                  proj2(match$1[1]),
                  acc);
         
        case 1:return acc;
        }
      }
    else
     {return EnvTbl[10]
              (function(id,data,acc){return f(data,acc);},proj1(env),acc);
      }
    };

var
 fold_modules=
  function(f,lid,env,acc)
   {if(lid)
     {var match=lookup_module_descr(lid[1],env);
      
      var p=match[1];
      
      var match$1=EnvLazy[1](components_of_module_maker,match[2]);
      
      switch(match$1[0])
       {case 0:
         return Tbl["fold"]
                 (function(s,param,acc)
                   {return f
                            (s,
                             /* Pdot */[1,p,s,param[2]],
                             md(EnvLazy[1](subst_modtype_maker,param[1])),
                             acc);
                    },
                  match$1[1][5],
                  acc);
         
        case 1:return acc;
        }
      }
    else
     {var
       acc$1=
        EnvTbl[10]
         (function(id,param,acc)
           {return f(Ident["name"](id),param[1],param[2],acc);},
          env[5],
          acc);
      
      return Hashtbl["fold"]
              (function(name,ps,acc)
                {if(ps)
                  {return f
                           (name,
                            /* Pident */[0,Ident["create_persistent"](name)],
                            md(/* Mty_signature */[1,ps[1][2]]),
                            acc);
                   }
                 else
                  {return acc;}
                 },
               persistent_structures,
               acc$1);
      }
    };

var
 fold_values=
  function(f)
   {return find_all$1
            (function(env){return env[1];},function(sc){return sc[1];},f);
    };

var
 fold_constructors=
  function(f)
   {return find_all_simple_list
            (function(env){return env[2];},function(sc){return sc[2];},f);
    };

var
 fold_labels=
  function(f)
   {return find_all_simple_list
            (function(env){return env[3];},function(sc){return sc[3];},f);
    };

var
 fold_types=
  function(f)
   {return find_all$1
            (function(env){return env[4];},function(sc){return sc[4];},f);
    };

var
 fold_modtypes=
  function(f)
   {return find_all$1
            (function(env){return env[6];},function(sc){return sc[6];},f);
    };

var
 fold_classs=
  function(f)
   {return find_all$1
            (function(env){return env[8];},function(sc){return sc[8];},f);
    };

var
 fold_cltypes=
  function(f)
   {return find_all$1
            (function(env){return env[9];},function(sc){return sc[9];},f);
    };

var
 match=
  Predef["build_initial_env"]
   (add_type(/* false */0),add_extension(/* false */0),empty$1);

var initial_unsafe_string=match[2];

var initial_safe_string=match[1];

var summary=function(env){return env[11];};

var last_env=[0,empty$1];

var last_reduced_env=[0,empty$1];

var
 keep_only_summary=
  function(env)
   {if(last_env[1]===env)
     {return last_reduced_env[1];}
    else
     {var newrecord=/* unknown */"duprecord regular 14";
      
      newrecord[11]=env[11];
      newrecord[12]=env[12];
      newrecord[14]=env[14];
      var new_env=newrecord;
      
      last_env[1]=env;
      last_reduced_env[1]=new_env;
      return new_env;
      }
    };

var
 env_of_only_summary=
  function(env_from_summary,env)
   {var new_env=env_from_summary(env[11],Subst["identity"]);
    
    var newrecord=/* unknown */"duprecord regular 14";
    
    newrecord[12]=env[12];
    newrecord[14]=env[14];
    return newrecord;
    };

var
 report_error=
  function(ppf,param)
   {switch(param[0])
     {case 0:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* String_literal */11,
                  "Wrong file naming: ",
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String_literal */11,
                     "contains the compiled interface for ",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " when ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " was expected",
                          /* End_of_format */0]]]]]]]]],
                 "Wrong file naming: %a@ contains the compiled interface for @ %s when %s was expected"],
                Location["print_filename"],
                param[3],
                param[1],
                param[2]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<hov>",/* End_of_format */0],
                    "<hov>"]],
                  [/* String_literal */11,
                   "The files ",
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* String_literal */11,
                      "and ",
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "make inconsistent assumptions",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "over interface ",
                           [/* String */2,
                            /* No_padding */0,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]]]],
                 "@[<hov>The files %a@ and %a@ make inconsistent assumptions@ over interface %s@]"],
                Location["print_filename"],
                param[2],
                Location["print_filename"],
                param[3],
                param[1]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<hov>",/* End_of_format */0],
                    "<hov>"]],
                  [/* String_literal */11,
                   "Unit ",
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     " imports from ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       ", which uses recursive types.",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]]]],
                 "@[<hov>Unit %s imports from %s, which uses recursive types.@ %s@]"],
                param[2],
                param[1],
                "The compilation flag -rectypes is required");
       
      case 3:
       var path2=param[3];
       
       var path1=param[2];
       
       Format["fprintf"]
        (ppf,
         [/* Format */0,
          [/* Formatting_gen */18,
           [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
           [/* Formatting_gen */18,
            [/* Open_box */1,
             [/* Format */0,
              [/* String_literal */11,"<hov>",/* End_of_format */0],
              "<hov>"]],
            /* End_of_format */0]],
          "@[@[<hov>"]);
       if(Path["same"](path1,path2))
        {Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Internal path",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* String */2,
               /* No_padding */0,
               [/* Formatting_lit */17,
                [/* Break */0,"@ ",1,0],
                [/* String_literal */11,"is dangling.",/* End_of_format */0]]]]],
            "Internal path@ %s@ is dangling."],
           Path["name"](/* None */0,path1))}
       else
        {Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Internal path",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* String */2,
               /* No_padding */0,
               [/* Formatting_lit */17,
                [/* Break */0,"@ ",1,0],
                [/* String_literal */11,
                 "expands to",
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* String */2,
                   /* No_padding */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String_literal */11,
                     "which is dangling.",
                     /* End_of_format */0]]]]]]]]],
            "Internal path@ %s@ expands to@ %s@ which is dangling."],
           Path["name"](/* None */0,path1),
           Path["name"](/* None */0,path2))}
       
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Formatting_lit */17,
                  /* Close_box */0,
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String */2,
                       /* No_padding */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          46,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]]]],
                 "@]@ @[%s@ %s@ %s.@]@]"],
                "The compiled interface for module",
                Ident["name"](Path["head"](path2)),
                "was not found");
       
      case 4:
       return Format["fprintf"]
               (ppf,
                [/* Format */0,
                 [/* Char_literal */12,
                  39,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    "' is not a valid value identifier.",
                    /* End_of_format */0]]],
                 "'%s' is not a valid value identifier."],
                param[2]);
       
      }
    };

var
 match$1=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {var err=param[2];
        
        var exit;
        
        switch(err[0]){case 3:exit=4;case 4:exit=4;default:exit=2;}
        
        switch(exit)
         {case 4:
           var loc=err[1];
           
           if(CamlPrimitive["caml_notequal"](loc,Location["none"]))
            {return /* Some */[0,
                     Location["error_of_printer"](loc,report_error,err)];
             }
           else
            {exit=2;}
           
          case 2:
           return /* Some */[0,
                   Location["error_of_printer_file"](report_error,err)];
           
          }
        }
      else
       {return /* None */0;}
      });

module["exports"]=
{"empty":empty$1,
 "initial_safe_string":initial_safe_string,
 "initial_unsafe_string":initial_unsafe_string,
 "diff":diff,
 "iter_types":iter_types,
 "run_iter_cont":run_iter_cont,
 "same_types":same_types,
 "used_persistent":used_persistent,
 "find_shadowed_types":find_shadowed_types,
 "find_value":find_value,
 "find_type":find_type,
 "find_type_descrs":find_type_descrs,
 "find_module":find_module$1,
 "find_modtype":find_modtype,
 "find_class":find_class,
 "find_cltype":find_cltype,
 "find_type_expansion":find_type_expansion,
 "find_type_expansion_opt":find_type_expansion_opt,
 "find_modtype_expansion":find_modtype_expansion,
 "is_functor_arg":is_functor_arg,
 "normalize_path":normalize_path$1,
 "reset_required_globals":reset_required_globals,
 "get_required_globals":get_required_globals,
 "add_required_global":add_required_global,
 "has_local_constraints":has_local_constraints,
 "add_gadt_instance_level":add_gadt_instance_level,
 "gadt_instance_level":gadt_instance_level,
 "add_gadt_instances":add_gadt_instances,
 "add_gadt_instance_chain":add_gadt_instance_chain,
 "lookup_value":lookup_value$1,
 "lookup_constructor":lookup_constructor,
 "lookup_all_constructors":lookup_all_constructors$1,
 "lookup_label":lookup_label,
 "lookup_all_labels":lookup_all_labels$1,
 "lookup_type":lookup_type$1,
 "lookup_module":lookup_module,
 "lookup_modtype":lookup_modtype,
 "lookup_class":lookup_class$1,
 "lookup_cltype":lookup_cltype$1,
 "Recmodule":Recmodule,
 "add_value":add_value,
 "add_type":add_type,
 "add_extension":add_extension,
 "add_module":add_module,
 "add_module_declaration":add_module_declaration,
 "add_modtype":add_modtype,
 "add_class":add_class,
 "add_cltype":add_cltype,
 "add_local_constraint":add_local_constraint,
 "add_item":add_item,
 "add_signature":add_signature,
 "open_signature":open_signature$1,
 "open_pers_signature":open_pers_signature,
 "enter_value":enter_value,
 "enter_type":enter_type,
 "enter_extension":enter_extension,
 "enter_module":enter_module,
 "enter_module_declaration":enter_module_declaration,
 "enter_modtype":enter_modtype,
 "enter_class":enter_class,
 "enter_cltype":enter_cltype,
 "reset_cache":reset_cache,
 "reset_cache_toplevel":reset_cache_toplevel,
 "set_unit_name":set_unit_name,
 "get_unit_name":get_unit_name,
 "read_signature":read_signature,
 "save_signature":save_signature,
 "save_signature_with_imports":save_signature_with_imports,
 "crc_of_unit":crc_of_unit,
 "imports":imports,
 "crc_units":crc_units,
 "add_import":add_import,
 "summary":summary,
 "keep_only_summary":keep_only_summary,
 "env_of_only_summary":env_of_only_summary,
 "Error":$$Error,
 "report_error":report_error,
 "mark_value_used":mark_value_used,
 "mark_type_used":mark_type_used,
 "mark_constructor_used":mark_constructor_used,
 "mark_constructor":mark_constructor,
 "mark_extension_used":mark_extension_used,
 "in_signature":in_signature,
 "implicit_coercion":implicit_coercion,
 "set_value_used_callback":set_value_used_callback,
 "set_type_used_callback":set_type_used_callback,
 "check_modtype_inclusion":check_modtype_inclusion,
 "add_delayed_check_forward":add_delayed_check_forward,
 "strengthen":strengthen,
 "fold_values":fold_values,
 "fold_types":fold_types,
 "fold_constructors":fold_constructors,
 "fold_labels":fold_labels,
 "fold_modules":fold_modules,
 "fold_modtypes":fold_modtypes,
 "fold_classs":fold_classs,
 "fold_cltypes":fold_cltypes,
 "scrape_alias":scrape_alias$1,
 "check_value_name":check_value_name};

