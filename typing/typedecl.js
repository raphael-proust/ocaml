// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var Includecore=require("./includecore.js");
var Printtyp=require("./printtyp.js");
var Warnings=require("./warnings.js");
var Typedtree=require("./typedtree.js");
var List=require("./list.js");
var Btype=require("./btype.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Predef=require("./predef.js");
var Clflags=require("./clflags.js");
var Types=require("./types.js");
var Typetexp=require("./typetexp.js");
var Syntaxerr=require("./syntaxerr.js");
var Format=require("./format.js");
var Set=require("./set.js");
var Misc=require("./misc.js");
var Path=require("./path.js");
var Subst=require("./subst.js");
var Longident=require("./longident.js");
var Location=require("./location.js");
var Hashtbl=require("./hashtbl.js");
var Primitive=require("./primitive.js");
var Ident=require("./ident.js");
var Config=require("./config.js");
var Ast_helper=require("./ast_helper.js");
var Map=require("./map.js");
var CamlPrimitive=require("./camlPrimitive.js");



var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Typedecl.Error",0]);

var
 enter_type=
  function(env,sdecl,id)
   {var match=sdecl[6];
    
    var
     decl=
      /* record */[0,
       List["map"]
        (function(param){return Btype["newgenvar"](/* None */0,/* () */0);},
         sdecl[2]),
       List["length"](sdecl[2]),
       /* Type_abstract */0,
       sdecl[5],
       match?/* Some */[0,Ctype["newvar"](/* None */0,/* () */0)]:/* None */0,
       List["map"](function(param){return Types["Variance"][2];},sdecl[2]),
       /* None */0,
       sdecl[8],
       sdecl[7]];
    
    return Env["add_type"](/* true */1,id,decl,env);
    };

var
 update_type=
  function(temp_env,env,id,loc)
   {var path=/* Pident */[0,id];
    
    var decl=Env["find_type"](path,temp_env);
    
    var match=decl[5];
    
    if(match)
     {var
       params=
        List["map"]
         (function(param){return Ctype["newvar"](/* None */0,/* () */0);},
          decl[1]);
      
      try
       {return Ctype["unify"](env,Ctype["newconstr"](path,params),match[1]);}
      catch(exn)
       {if(exn[1]===Ctype["Unify"])
         {throw [0,$$Error,loc,/* Type_clash */[7,env,exn[2]]];}
        else
         {throw exn;}
        }
      }
    else
     {return /* () */0;}
    };

var
 is_float=
  function(env,ty)
   {var match=Ctype["repr"](Ctype["expand_head_opt"](env,ty));
    
    var match$1=match[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:return Path["same"](match$1[1],Predef["path_float"]);
        default:exit=335;}}
    
    switch(exit){case 335:return /* false */0;}
    };

var
 is_fixed_type=
  function(sd)
   {var
     has_row_var=
      function(sty)
       {var match=sty[1];
        
        var exit;
        
        if(typeof match==="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 4:if(match[2]!==0){exit=332;}else{exit=333;}
            case 5:exit=332;
            case 6:return has_row_var(match[1]);
            case 7:
             if(match[2]!==0)
              {exit=332;}
             else
              {if(match[3]){exit=332;}else{exit=333;}}
             
            default:exit=333;}}
        
        switch(exit)
         {case 333:return /* false */0;case 332:return /* true */1;}
        };
    
    var match=sd[6];
    
    if(match)
     {return sd[4]===
             /* Ptype_abstract */0&&
             sd[5]===
             /* Private */0&&
             has_row_var(match[1]);
      }
    else
     {return /* false */0;}
    };

var
 set_fixed_row=
  function(env,loc,p,decl)
   {var match=decl[5];
    
    if(match)
     {var tm=Ctype["expand_head"](env,match[1]);}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/typedecl.ml",113,14]];
      }
    
    var match$1=tm[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 4:var rv=Ctype["flatten_fields"](match$1[1])[2];
        case 8:
         var row=Btype["row_repr"](match$1[1]);
         
         var newrecord=/* unknown */"duprecord regular 6";
         
         tm[1]=/* Tvariant */[8,(newrecord[5]=/* true */1,newrecord)];
         if(Btype["static_row"](row))
          {var rv=Btype["newgenty"](/* Tnil */0);}
         else
          {var rv=row[2];}
         
        default:exit=328;}}
    
    switch(exit)
     {case 328:
       throw [0,
              $$Error,
              loc,
              [/* Bad_fixed_type */18,"is not an object or variant"]];
       
      }
    
    if(!Btype["is_Tvar"](rv))
     {throw [0,$$Error,loc,[/* Bad_fixed_type */18,"has no row variable"]];}
    else
     {}
    
    return rv[1]=/* Tconstr */[3,p,decl[1],[0,/* Mnil */0]],0;
    };

var compare=function(x,y){return CamlPrimitive["caml_string_compare"](x,y);};

var StringSet=Set["Make"]([0,compare]);

var
 make_params=
  function(env,params)
   {var
     make_param=
      function(param)
       {var sty=param[1];
        
        try
         {return /* tuple */[0,
                  Typetexp["transl_type_param"](env,sty),
                  param[2]];
          }
        catch(exn)
         {if(exn===Typetexp["Already_bound"])
           {throw [0,$$Error,sty[2],/* Repeated_parameter */0];}
          else
           {throw exn;}
          }
        };
    
    return List["map"](make_param,params);
    };

var
 make_constructor=
  function(env,type_path,type_params,sargs,sret_type)
   {if(sret_type)
     {var sret_type$1=sret_type[1];
      
      var z=Typetexp["narrow"](/* () */0);
      
      Typetexp["reset_type_variables"](/* () */0);
      var
       targs=
        List["map"](Typetexp["transl_simple_type"](env,/* false */0),sargs);
      
      var args=List["map"](function(cty){return cty[2];},targs);
      
      var
       tret_type=
        Typetexp["transl_simple_type"](env,/* false */0,sret_type$1);
      
      var ret_type=tret_type[2];
      
      var match=Ctype["repr"](ret_type)[1];
      
      var exit;
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 3:if(Path["same"](type_path,match[1])){}else{exit=316;}
          default:exit=316;}}
      
      switch(exit)
       {case 316:
         throw [0,
                $$Error,
                sret_type$1[2],
                /* Constraint_failed */[5,
                 ret_type,
                 Ctype["newconstr"](type_path,type_params)]];
         
        }
      
      Typetexp["widen"](z);
      return /* tuple */[0,
              targs,
              /* Some */[0,tret_type],
              args,
              /* Some */[0,ret_type]];
      }
    else
     {var
       targs$1=
        List["map"](Typetexp["transl_simple_type"](env,/* true */1),sargs);
      
      var args$1=List["map"](function(cty){return cty[2];},targs$1);
      
      return /* tuple */[0,targs$1,/* None */0,args$1,/* None */0];
      }
    };

var
 transl_declaration=
  function(env,sdecl,id)
   {Typetexp["reset_type_variables"](/* () */0);
    Ctype["begin_def"](/* () */0);
    var tparams=make_params(env,sdecl[2]);
    
    var params=List["map"](function(param){return param[1][2];},tparams);
    
    var
     cstrs=
      List["map"]
       (function(param)
         {return /* tuple */[0,
                  Typetexp["transl_simple_type"](env,/* false */0,param[1]),
                  Typetexp["transl_simple_type"](env,/* false */0,param[2]),
                  param[3]];
          },
        sdecl[3]);
    
    var match=sdecl[4];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         var
          match$1=
           [/* tuple */0,/* Ttype_abstract */0,/* Type_abstract */0];
         
        case 1:var match$1=[/* tuple */0,/* Ttype_open */1,/* Type_open */1];
        }}
    else
     {switch(match[0])
       {case 0:
         var scstrs=match[1];
         
         if(scstrs===/* [] */0)
          {Syntaxerr["ill_formed_ast"]
            (sdecl[8],"Variant types cannot be empty.")}
         else
          {}
         
         var all_constrs=[0,StringSet[1]];
         
         List["iter"]
          (function(param)
            {var name=param[1][1];
             
             if(StringSet[3](name,all_constrs[1]))
              {throw [0,$$Error,sdecl[8],/* Duplicate_constructor */[0,name]];
               }
             else
              {}
             
             return all_constrs[1]=StringSet[4](name,all_constrs[1]),0;
             },
           scstrs);
         if
          (List["length"]
            (List["filter"](function(cd){return cd[2]!==/* [] */0;},scstrs))>
           Config["max_tag"]+
           1)
          {throw [0,$$Error,sdecl[8],/* Too_many_constructors */1];}
         else
          {}
         
         var
          make_cstr=
           function(scstr)
            {var name=Ident["create"](scstr[1][1]);
             
             var
              match$2=
               make_constructor
                (env,/* Pident */[0,id],params,scstr[2],scstr[3]);
             
             var
              tcstr=
               /* record */[0,
                name,
                scstr[1],
                match$2[1],
                match$2[2],
                scstr[4],
                scstr[5]];
             
             var
              cstr=
               /* record */[0,name,match$2[3],match$2[4],scstr[4],scstr[5]];
             
             return /* tuple */[0,tcstr,cstr];
             };
         
         var match$2=List["split"](List["map"](make_cstr,scstrs));
         
         var
          match$1=
           /* tuple */[0,
            /* Ttype_variant */[0,match$2[1]],
            /* Type_variant */[1,match$2[2]]];
         
        case 1:
         var lbls=match[1];
         
         if(lbls===/* [] */0)
          {Syntaxerr["ill_formed_ast"](sdecl[8],"Records cannot be empty.")}
         else
          {}
         
         var all_labels=[0,StringSet[1]];
         
         List["iter"]
          (function(param)
            {var name=param[1][1];
             
             if(StringSet[3](name,all_labels[1]))
              {throw [0,$$Error,sdecl[8],/* Duplicate_label */[1,name]];}
             else
              {}
             
             return all_labels[1]=StringSet[4](name,all_labels[1]),0;
             },
           lbls);
         var
          lbls$1=
           List["map"]
            (function(param)
              {var name=param[1];
               
               var arg=Ast_helper["Typ"][15](param[3]);
               
               var cty=Typetexp["transl_simple_type"](env,/* true */1,arg);
               
               return /* record */[0,
                       Ident["create"](name[1]),
                       name,
                       param[2],
                       cty,
                       param[4],
                       param[5]];
               },
             lbls);
         
         var
          lbls$prime=
           List["map"]
            (function(ld)
              {var ty=ld[4][2];
               
               var match$3=ty[1];
               
               var exit;
               
               if(typeof match$3==="number")
                {switch(match$3){}}
               else
                {switch(match$3[0])
                  {case 10:if(match$3[2]){exit=301;}else{var ty$1=match$3[1];}
                   default:exit=301;}}
               
               switch(exit){case 301:var ty$1=ty;}
               
               return /* record */[0,ld[1],ld[3],ty$1,ld[5],ld[6]];
               },
             lbls$1);
         
         if
          (List["for_all"](function(l){return is_float(env,l[3]);},lbls$prime))
          {var rep=/* Record_float */1;}
         else
          {var rep=/* Record_regular */0;}
         
         var
          match$1=
           /* tuple */[0,
            /* Ttype_record */[1,lbls$1],
            /* Type_record */[0,lbls$prime,rep]];
         
        }}
    
    var match$3=sdecl[6];
    
    if(match$3)
     {var no_row=!is_fixed_type(sdecl);
      
      var cty=Typetexp["transl_simple_type"](env,no_row,match$3[1]);
      
      var match$4=/* tuple */[0,/* Some */[0,cty],/* Some */[0,cty[2]]];
      }
    else
     {var match$4=[/* tuple */0,/* None */0,/* None */0];}
    
    var
     decl=
      /* record */[0,
       params,
       List["length"](params),
       match$1[2],
       sdecl[5],
       match$4[2],
       List["map"](function(param){return Types["Variance"][2];},params),
       /* None */0,
       sdecl[8],
       sdecl[7]];
    
    List["iter"]
     (function(param)
       {var ty=param[1][2];
        
        var ty$prime=param[2][2];
        
        try
         {return Ctype["unify"](env,ty,ty$prime);}
        catch(exn)
         {if(exn[1]===Ctype["Unify"])
           {throw [0,
                   $$Error,
                   param[3],
                   /* Inconsistent_constraint */[6,env,exn[2]]];
            }
          else
           {throw exn;}
          }
        },
      cstrs);
    Ctype["end_def"](/* () */0);
    if(is_fixed_type(sdecl))
     {try
       {var
         match$5=
          Env["lookup_type"]
           (/* Lident */[0,Pervasives["^"](Ident["name"](id),"#row")],env);
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"typing/typedecl.ml",301,26]];
          }
        else
         {throw exn;}
        }
      
      set_fixed_row(env,sdecl[8],match$5[1],decl)}
    else
     {}
    
    var match$6=decl[5];
    
    if(match$6)
     {if(Ctype["cyclic_abbrev"](env,id,match$6[1]))
       {throw [0,$$Error,sdecl[8],/* Recursive_abbrev */[2,sdecl[1][1]]];}
      else
       {}
      }
    else
     {}
    
    return /* record */[0,
            id,
            sdecl[1],
            tparams,
            decl,
            cstrs,
            match$1[1],
            sdecl[5],
            match$4[1],
            sdecl[8],
            sdecl[7]];
    };

var
 generalize_decl=
  function(decl)
   {List["iter"](Ctype["generalize"],decl[1]);
    var match=decl[3];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=282;case 1:exit=282;}}
    else
     {switch(match[0])
       {case 0:
         List["iter"](function(l){return Ctype["generalize"](l[3]);},match[1]);
        case 1:
         List["iter"]
          (function(c)
            {List["iter"](Ctype["generalize"],c[2]);
             return Misc["may"](Ctype["generalize"],c[3]);
             },
           match[1])
        }}
    
    switch(exit){case 282:}
    
    var match$1=decl[5];
    
    if(match$1)
     {return Ctype["generalize"](match$1[1]);}
    else
     {return /* () */0;}
    };

var
 check_constraints_rec=
  function(env,loc,visited,ty)
   {var ty$1=Ctype["repr"](ty);
    
    if(Btype["TypeSet"][3](ty$1,visited[1]))
     {return /* () */0;}
    else
     {visited[1]=Btype["TypeSet"][4](ty$1,visited[1]);
      var match=ty$1[1];
      
      var exit;
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 3:
           var args=match[2];
           
           var path=match[1];
           
           var
            args$prime=
             List["map"]
              (function(param){return Ctype["newvar"](/* None */0,/* () */0);},
               args);
           
           var ty$prime=Ctype["newconstr"](path,args$prime);
           
           try
            {Ctype["enforce_constraints"](env,ty$prime)}
           catch(exn)
            {if(exn[1]===Ctype["Unify"])
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"typing/typedecl.ml",360,28]];
               }
             else
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {throw [0,
                        $$Error,
                        loc,
                        /* Unavailable_type_constructor */[17,path]];
                 }
               else
                {throw exn;}
               }
             }
           
           if(!Ctype["matches"](env,ty$1,ty$prime))
            {throw [0,$$Error,loc,/* Constraint_failed */[5,ty$1,ty$prime]];}
           else
            {}
           
           return List["iter"](check_constraints_rec(env,loc,visited),args);
           
          case 10:
           var
            match$1=
             Ctype["instance_poly"]
              (/* None */0,/* false */0,match[2],match[1]);
           
           return check_constraints_rec(env,loc,visited,match$1[2]);
           
          default:exit=280;}}
      
      switch(exit)
       {case 280:
         return Btype["iter_type_expr"]
                 (check_constraints_rec(env,loc,visited),ty$1);
         
        }
      }
    };

var $$let=$$String;

var SMap=Map["Make"]([0,$$let[25]]);

var
 check_constraints=
  function(env,sdecl,param)
   {var decl=param[2];
    
    var visited=[0,Btype["TypeSet"][1]];
    
    var match=decl[3];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=272;case 1:exit=272;}}
    else
     {switch(match[0])
       {case 0:
         var
          find_pl=
           function(param$1)
            {var exit$1;
             
             if(typeof param$1==="number")
              {switch(param$1){}}
             else
              {switch(param$1[0])
                {case 1:return param$1[1];default:exit$1=270;}}
             
             switch(exit$1)
              {case 270:
                throw [0,
                       CamlPrimitive["caml_global_data"]["Assert_failure"],
                       [0,"typing/typedecl.ml",409,59]];
                
               }
             };
         
         var pl=find_pl(sdecl[4]);
         
         var
          get_loc=
           function(name,param$1)
            {if(param$1)
              {var pld=param$1[1];
               
               if(CamlPrimitive["caml_string_equal"](name,pld[1][1]))
                {return pld[3][2];}
               else
                {return get_loc(name,param$1[2]);}
               }
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"typing/typedecl.ml",413,16]];
               }
             };
         
         List["iter"]
          (function(param$1)
            {return check_constraints_rec
                     (env,
                      get_loc(Ident["name"](param$1[1]),pl),
                      visited,
                      param$1[3]);
             },
           match[1]);
        case 1:
         var
          find_pl$1=
           function(param$1)
            {var exit$1;
             
             if(typeof param$1==="number")
              {switch(param$1){}}
             else
              {switch(param$1[0])
                {case 0:return param$1[1];default:exit$1=267;}}
             
             switch(exit$1)
              {case 267:
                throw [0,
                       CamlPrimitive["caml_global_data"]["Assert_failure"],
                       [0,"typing/typedecl.ml",382,58]];
                
               }
             };
         
         var pl$1=find_pl$1(sdecl[4]);
         
         var foldf=function(acc,x){return SMap[4](x[1][1],x,acc);};
         
         var pl_index=List["fold_left"](foldf,SMap[1],pl$1);
         
         List["iter"]
          (function(param$1)
            {var ret_type=param$1[3];
             
             try
              {var match$1=SMap[22](Ident["name"](param$1[1]),pl_index);}
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {throw [0,
                        CamlPrimitive["caml_global_data"]["Assert_failure"],
                        [0,"typing/typedecl.ml",395,30]];
                 }
               else
                {throw exn;}
               }
             
             var sret_type=match$1[3];
             
             List["iter2"]
              (function(sty,ty)
                {return check_constraints_rec(env,sty[2],visited,ty);},
               match$1[2],
               param$1[2]);
             var exit$1;
             
             if(sret_type)
              {if(ret_type)
                {return check_constraints_rec
                         (env,sret_type[1][2],visited,ret_type[1]);
                 }
               else
                {exit$1=261;}
               }
             else
              {exit$1=261;}
             
             switch(exit$1){case 261:return /* () */0;}
             },
           match[1])
        }}
    
    switch(exit){case 272:}
    
    var match$1=decl[5];
    
    if(match$1)
     {var match$2=sdecl[6];
      
      if(match$2)
       {var sty=match$2[1];}
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/typedecl.ml",428,63]];
        }
      
      return check_constraints_rec(env,sty[2],visited,match$1[1]);
      }
    else
     {return /* () */0;}
    };

var
 check_coherence=
  function(env,loc,id,decl)
   {var match=decl[3];
    
    var exit;
    
    if(typeof match==="number")
     {if(match!==0){exit=257;}else{exit=256;}}
    else
     {exit=257;}
    
    switch(exit)
     {case 257:
       var match$1=decl[5];
       
       if(match$1)
        {var ty=match$1[1];
         
         var match$2=Ctype["repr"](ty)[1];
         
         var exit$1;
         
         if(typeof match$2==="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 3:
              var args=match$2[2];
              
              var path=match$2[1];
              
              try
               {var decl$prime=Env["find_type"](path,env);
                
                if(List["length"](args)!==List["length"](decl[1]))
                 {var err=[/* :: */0,/* Arity */0,/* [] */0];}
                else
                 {if(!Ctype["equal"](env,/* false */0,args,decl[1]))
                   {var err=[/* :: */0,/* Constraint */3,/* [] */0];}
                  else
                   {var
                     err=
                      Includecore["type_declarations"]
                       ([/* Some */0,/* true */1],
                        env,
                        Path["last"](path),
                        decl$prime,
                        id,
                        Subst["type_declaration"]
                         (Subst["add_type"](id,path,Subst["identity"]),decl));
                    }
                  }
                
                if(err!==/* [] */0)
                 {throw [0,$$Error,loc,/* Definition_mismatch */[4,ty,err]];}
                else
                 {return 0;}
                }
              catch(exn)
               {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                 {throw [0,
                         $$Error,
                         loc,
                         /* Unavailable_type_constructor */[17,path]];
                  }
                else
                 {throw exn;}
                }
              
             default:exit$1=255;}}
         
         switch(exit$1)
          {case 255:
            throw [0,$$Error,loc,/* Definition_mismatch */[4,ty,/* [] */0]];
           }
         }
       else
        {exit=256;}
       
      case 256:return /* () */0;
      }
    };

var
 check_abbrev=
  function(env,sdecl,param)
   {return check_coherence(env,sdecl[8],param[1],param[2]);};

var
 check_well_founded=
  function(env,loc,path,to_check,ty)
   {var visited=[0,Btype["TypeMap"][1]];
    
    var
     check=
      function(ty0,exp_nodes,ty)
       {var ty$1=Btype["repr"](ty);
        
        if(Btype["TypeSet"][3](ty$1,exp_nodes))
         {var match=ty0[1];
          
          var exit;
          
          var $js;
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 3:$js=Path["same"](match[1],path);default:exit=247;}}
          
          var $js$1;
          switch(exit){case 247:$js$1=/* false */0;}
          if($js$1)
           {throw [0,
                   $$Error,
                   loc,
                   /* Recursive_abbrev */[2,Path["name"](/* None */0,path)]];
            }
          else
           {throw [0,
                   $$Error,
                   loc,
                   /* Cycle_in_def */[3,Path["name"](/* None */0,path),ty0]];
            }
          }
        else
         {}
        
        try
         {var prev=Btype["TypeMap"][22](ty$1,visited[1]);
          
          if(Btype["TypeSet"][12](exp_nodes,prev))
           {var match$1=/* tuple */[0,/* true */1,exp_nodes];}
          else
           {var
             match$1=
              /* tuple */[0,/* false */0,Btype["TypeSet"][7](exp_nodes,prev)];
            }
          }
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var match$1=/* tuple */[0,/* false */0,exp_nodes];}
          else
           {throw exn;}
          }
        
        var exp_nodes$1=match$1[2];
        
        var snap=Btype["snapshot"](/* () */0);
        
        if(match$1[1])
         {return /* () */0;}
        else
         {try
           {visited[1]=Btype["TypeMap"][4](ty$1,exp_nodes$1,visited[1]);
            var match$2=ty$1[1];
            
            var exit$1;
            
            if(typeof match$2==="number")
             {switch(match$2){}}
            else
             {switch(match$2[0])
               {case 3:
                 if(!Btype["TypeSet"][2](exp_nodes$1)||to_check(match$2[1]))
                  {var ty$prime=Ctype["try_expand_once_opt"](env,ty$1);
                   
                   if(Btype["TypeSet"][2](exp_nodes$1))
                    {var ty0$1=ty$1;}
                   else
                    {var ty0$1=ty0;}
                   
                   return check
                           (ty0$1,Btype["TypeSet"][4](ty$1,exp_nodes$1),ty$prime);
                   }
                 else
                  {exit$1=242;}
                 
                default:exit$1=242;}}
            
            switch(exit$1){case 242:throw Ctype["Cannot_expand"];}
            }
          catch(exn$1)
           {if(exn$1===Ctype["Cannot_expand"])
             {var match$3=ty$1[1];
              
              var exit$2;
              
              var $js$2;
              if(typeof match$3==="number")
               {switch(match$3){}}
              else
               {switch(match$3[0])
                 {case 4:exit$2=235;case 8:exit$2=235;default:exit$2=236;}}
              
              var $js$3;
              switch(exit$2)
               {case 236:$js$3=/* false */0;case 235:$js$3=/* true */1;}
              if
               (Clflags["recursive_types"][1]&&
                Ctype["is_contractive"](env,ty$1)||
                $js$3)
               {var nodes=Btype["TypeSet"][1];}
              else
               {var nodes=exp_nodes$1;}
              
              return Btype["iter_type_expr"](check(ty0,nodes),ty$1);
              }
            else
             {if(exn$1[1]===Ctype["Unify"])
               {return Btype["backtrack"](snap);}
              else
               {throw exn$1;}
              }
            }
          }
        };
    
    return Ctype["wrap_trace_gadt_instances"]
            (env,check(ty,Btype["TypeSet"][1]),ty);
    };

var
 check_well_founded_manifest=
  function(env,loc,path,decl)
   {if(decl[5]===/* None */0)
     {return /* () */0;}
    else
     {var
       args=
        List["map"]
         (function(param){return Ctype["newvar"](/* None */0,/* () */0);},
          decl[1]);
      
      return check_well_founded
              (env,loc,path,Path["same"](path),Ctype["newconstr"](path,args));
      }
    };

var
 check_well_founded_decl=
  function(env,loc,path,decl,to_check)
   {var newrecord=/* unknown */"duprecord regular 15";
    
    newrecord[14]=
    function(param){return check_well_founded(env,loc,path,to_check);};
    var it=newrecord;
    
    return it[4](it,Ctype["instance_declaration"](decl));
    };

var
 check_recursion=
  function(env,loc,path,decl,to_check)
   {if(decl[1]===/* [] */0)
     {return /* () */0;}
    else
     {var visited=[0,/* [] */0];
      
      var
       check_regular=
        function(cpath,args,prev_exp,ty)
         {var ty$1=Ctype["repr"](ty);
          
          if(!List["memq"](ty$1,visited[1]))
           {visited[1]=/* :: */[0,ty$1,visited[1]];
            var match=ty$1[1];
            
            var exit;
            
            if(typeof match==="number")
             {switch(match){}}
            else
             {switch(match[0])
               {case 3:
                 var args$prime=match[2];
                 
                 var path$prime=match[1];
                 
                 if(Path["same"](path,path$prime))
                  {if(!Ctype["equal"](env,/* false */0,args,args$prime))
                    {throw [0,
                            $$Error,
                            loc,
                            /* Parameters_differ */[8,
                             cpath,
                             ty$1,
                             Ctype["newconstr"](path,args)]];
                     }
                   else
                    {}
                   }
                 else
                  {if(to_check(path$prime)&&!List["mem"](path$prime,prev_exp))
                    {try
                      {var match$1=Env["find_type_expansion"](path$prime,env);
                       
                       var params0=match$1[1];
                       
                       var
                        match$2=
                         Ctype["instance_parameterized_type"]
                          (/* None */0,params0,match$1[2]);
                       
                       try
                        {List["iter2"](Ctype["unify"](env),match$2[1],args$prime)}
                       catch(exn)
                        {if(exn[1]===Ctype["Unify"])
                          {throw [0,
                                  $$Error,
                                  loc,
                                  /* Constraint_failed */[5,
                                   ty$1,
                                   Ctype["newconstr"](path$prime,params0)]];
                           }
                         else
                          {throw exn;}
                         }
                       
                       check_regular
                        (path$prime,args,/* :: */[0,path$prime,prev_exp],match$2[2])}
                     catch(exn$1)
                      {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                        {}
                       else
                        {throw exn$1;}
                       }
                     }
                   else
                    {}
                   }
                 
                 return List["iter"]
                         (check_regular(cpath,args,prev_exp),args$prime);
                 
                case 10:
                 var
                  match$3=
                   Ctype["instance_poly"]
                    ([/* Some */0,/* true */1],/* false */0,match[2],match[1]);
                 
                 return check_regular(cpath,args,prev_exp,match$3[2]);
                 
                default:exit=227;}}
            
            switch(exit)
             {case 227:
               return Btype["iter_type_expr"]
                       (check_regular(cpath,args,prev_exp),ty$1);
               
              }
            }
          else
           {return 0;}
          };
      
      return Misc["may"]
              (function(body)
                {var
                  match=
                   Ctype["instance_parameterized_type"]
                    ([/* Some */0,/* true */1],decl[1],body);
                 
                 return check_regular(path,match[1],/* [] */0,match[2]);
                 },
               decl[5]);
      }
    };

var
 check_abbrev_recursion=
  function(env,id_loc_list,to_check,tdecl)
   {var decl=tdecl[4];
    
    var id=tdecl[1];
    
    return check_recursion
            (env,
             List["assoc"](id,id_loc_list),
             /* Pident */[0,id],
             decl,
             to_check);
    };

var
 get_variance=
  function(ty,visited)
   {try
     {return Btype["TypeMap"][22](ty,visited[1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Types["Variance"][1];}
      else
       {throw exn;}
      }
    };

var
 compute_variance=
  function(env,visited,vari,ty)
   {var
     compute_variance_rec=
      function(vari,ty)
       {var ty$1=Ctype["repr"](ty);
        
        var vari$prime=get_variance(ty$1,visited);
        
        if(Types["Variance"][7](vari,vari$prime))
         {return /* () */0;}
        else
         {var vari$1=Types["Variance"][5](vari,vari$prime);
          
          visited[1]=Btype["TypeMap"][4](ty$1,vari$1,visited[1]);
          var compute_same=compute_variance_rec(vari$1);
          
          var match=ty$1[1];
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 1:
               var v=Types["Variance"][10](vari$1);
               
               if
                (Types["Variance"][9](/* May_pos */0,v)||
                 Types["Variance"][9](/* May_neg */1,v))
                {var v1=Types["Variance"][8](/* May_weak */2,/* true */1,v);}
               else
                {var v1=v;}
               
               compute_variance_rec(v1,match[2]);
               return compute_same(match[3]);
               
              case 2:return List["iter"](compute_same,match[1]);
              case 3:
               var tl=match[2];
               
               if(tl===/* [] */0)
                {return /* () */0;}
               else
                {try
                  {var decl=Env["find_type"](match[1],env);
                   
                   var
                    cvari=
                     function(f){return Types["Variance"][9](f,vari$1);};
                   
                   return List["iter2"]
                           (function(ty,v)
                             {var cv=function(f){return Types["Variance"][9](f,v);};
                              
                              var
                               strict=
                                cvari(/* Inv */6)&&
                                cv(/* Inj */3)||
                                (cvari(/* Pos */4)||cvari(/* Neg */5))&&
                                cv(/* Inv */6);
                              
                              if(strict)
                               {return compute_variance_rec(Types["Variance"][2],ty);}
                              else
                               {var p1=Types["Variance"][6](v,vari$1);
                                
                                var
                                 n1=
                                  Types["Variance"][6](v,Types["Variance"][10](vari$1));
                                
                                var
                                 v1$1=
                                  Types["Variance"][5]
                                   (Types["Variance"][6]
                                     (Types["Variance"][3],
                                      Types["Variance"][5](p1,Types["Variance"][10](p1))),
                                    Types["Variance"][6]
                                     (Types["Variance"][10](Types["Variance"][3]),
                                      Types["Variance"][5](n1,Types["Variance"][10](n1))));
                                
                                var
                                 weak=
                                  cvari(/* May_weak */2)&&
                                  (cv(/* May_pos */0)||cv(/* May_neg */1))||
                                  (cvari(/* May_pos */0)||cvari(/* May_neg */1))&&
                                  cv(/* May_weak */2);
                                
                                var v2=Types["Variance"][8](/* May_weak */2,weak,v1$1);
                                
                                return compute_variance_rec(v2,ty);
                                }
                              },
                            tl,
                            decl[6]);
                   }
                 catch(exn)
                  {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                    {return List["iter"]
                             (compute_variance_rec(Types["Variance"][4]),tl);
                     }
                   else
                    {throw exn;}
                   }
                 }
               
              case 4:exit=210;
              case 5:compute_same(match[3]);return compute_same(match[4]);
              case 7:exit=210;
              case 8:
               var row=Btype["row_repr"](match[1]);
               
               List["iter"]
                (function(param)
                  {var match$1=Btype["row_field_repr"](param[2]);
                   
                   var exit$1;
                   
                   if(typeof match$1==="number")
                    {switch(match$1){case 0:exit$1=206;}}
                   else
                    {switch(match$1[0])
                      {case 0:
                        var match$2=match$1[1];
                        
                        if(match$2)
                         {return compute_same(match$2[1]);}
                        else
                         {exit$1=206;}
                        
                       case 1:
                        var
                         upper=
                          List["fold_left"]
                           (function(s,f)
                             {return Types["Variance"][8](f,/* true */1,s);},
                            Types["Variance"][1],
                            [/* :: */0,
                             /* May_pos */0,
                             [/* :: */0,
                              /* May_neg */1,
                              [/* :: */0,/* May_weak */2,/* [] */0]]]);
                        
                        var v$1=Types["Variance"][6](vari$1,upper);
                        
                        return List["iter"](compute_variance_rec(v$1),match$1[2]);
                        
                       }}
                   
                   switch(exit$1){case 206:return /* () */0;}
                   },
                 row[1]);
               return compute_same(row[2]);
               
              case 10:exit=210;
              case 11:
               if
                (Types["Variance"][9](/* Pos */4,vari$1)||
                 Types["Variance"][9](/* Neg */5,vari$1))
                {var v$1=Types["Variance"][2];}
               else
                {var v$1=Types["Variance"][4];}
               
               return List["iter"](compute_variance_rec(v$1),match[3]);
               
              default:exit=209;}}
          
          switch(exit)
           {case 210:return compute_same(match[1]);case 209:return /* () */0;}
          }
        };
    
    return compute_variance_rec(vari,ty);
    };

var
 make_variance=
  function(ty){return /* tuple */[0,ty,[0,Types["Variance"][1]]];};

var
 make=
  function(p,n,i)
   {return Types["Variance"][8]
            (/* May_pos */0,
             p,
             Types["Variance"][8]
              (/* May_neg */1,
               n,
               Types["Variance"][8]
                (/* May_weak */2,
                 n,
                 Types["Variance"][8](/* Inj */3,i,Types["Variance"][1]))));
    };

var
 compute_variance_type=
  function(env,check,param,decl,tyl)
   {var loc=param[2];
    
    var
     required=
      List["map"]
       (function(param$1)
         {var i=param$1[3];
          
          var n=param$1[2];
          
          var c=param$1[1];
          
          if(c||n)
           {return /* tuple */[0,c,n,i];}
          else
           {return /* tuple */[0,/* true */1,/* true */1,i];}
          },
        param[1]);
    
    var params=List["map"](Btype["repr"],decl[1]);
    
    var tvl=[0,Btype["TypeMap"][1]];
    
    List["iter"]
     (function(param$1)
       {return compute_variance
                (env,
                 tvl,
                 param$1[1]?Types["Variance"][2]:Types["Variance"][3],
                 param$1[2]);
        },
      tyl);
    if(check)
     {var pos=[0,0];
      
      List["iter2"]
       (function(ty,param$1)
         {var i=param$1[3];
          
          var n=param$1[2];
          
          var c=param$1[1];
          
          pos[0]++;
          var $$var=get_variance(ty,tvl);
          
          var match=Types["Variance"][11]($$var);
          
          var cn=match[2];
          
          var co=match[1];
          
          var ij=Types["Variance"][9](/* Inj */3,$$var);
          
          if(Btype["is_Tvar"](ty)&&(co&&!c||cn&&!n||!ij&&i))
           {throw [0,
                   $$Error,
                   loc,
                   /* Bad_variance */[16,
                    pos[1],
                    /* tuple */[0,co,cn,ij],
                    /* tuple */[0,c,n,i]]];
            }
          else
           {return 0;}
          },
        params,
        required);
      var args=Btype["newgenty"](/* Ttuple */[2,params]);
      
      var fvl=Ctype["free_variables"](/* None */0,args);
      
      var
       fvl$1=
        List["filter"](function(v){return !List["memq"](v,params);},fvl);
      
      if(fvl$1===/* [] */0)
       {}
      else
       {var tvl2=[0,Btype["TypeMap"][1]];
        
        List["iter2"]
         (function(ty,param$1)
           {if(Btype["is_Tvar"](ty))
             {return /* () */0;}
            else
             {if(param$1[1])
               {if(param$1[2])
                 {var v=Types["Variance"][2];}
                else
                 {var v=Types["Variance"][3];}
                }
              else
               {var v=Types["Variance"][10](Types["Variance"][3]);}
              
              return compute_variance(env,tvl2,v,ty);
              }
            },
          params,
          required);
        var visited=[0,Btype["TypeSet"][1]];
        
        var
         check$1=
          function(ty)
           {var ty$1=Ctype["repr"](ty);
            
            if(Btype["TypeSet"][3](ty$1,visited[1]))
             {return /* () */0;}
            else
             {var visited$prime=Btype["TypeSet"][4](ty$1,visited[1]);
              
              visited[1]=visited$prime;
              var v1=get_variance(ty$1,tvl);
              
              var snap=Btype["snapshot"](/* () */0);
              
              var
               v2=
                Btype["TypeMap"][11]
                 (function(t,vt,v)
                   {if
                     (Ctype["equal"]
                       (env,
                        /* false */0,
                        /* :: */[0,ty$1,/* [] */0],
                        /* :: */[0,t,/* [] */0]))
                     {return Types["Variance"][5](vt,v);}
                    else
                     {return v;}
                    },
                  tvl2[1],
                  Types["Variance"][1]);
              
              Btype["backtrack"](snap);
              var match=Types["Variance"][11](v1);
              
              var n1=match[2];
              
              var c1=match[1];
              
              var match$1=Types["Variance"][12](v2);
              
              var n2=match$1[2];
              
              var c2=match$1[1];
              
              if(c1&&!c2||n1&&!n2)
               {if(List["memq"](ty$1,fvl$1))
                 {if(!match$1[4])
                   {var code=-2;}
                  else
                   {if(c2||n2){var code=-1;}else{var code=-3;}}
                  
                  throw [0,
                         $$Error,
                         loc,
                         /* Bad_variance */[16,
                          code,
                          /* tuple */[0,c1,n1,/* false */0],
                          /* tuple */[0,c2,n2,/* false */0]]];
                  }
                else
                 {return Btype["iter_type_expr"](check$1,ty$1);}
                }
              else
               {return 0;}
              }
            };
        
        List["iter"](function(param$1){return check$1(param$1[2]);},tyl)}
      }
    else
     {}
    
    return List["map2"]
            (function(ty,param$1)
              {var v=get_variance(ty,tvl);
               
               var tr=decl[4];
               
               var concr=decl[3]!==/* Type_abstract */0;
               
               if(tr===/* Private */0||!Btype["is_Tvar"](ty))
                {var match=/* tuple */[0,param$1[1],param$1[2]];}
               else
                {var match=[/* tuple */0,/* false */0,/* false */0];}
               
               var n=match[2];
               
               var p=match[1];
               
               var i=concr||param$1[3]&&tr===/* Private */0;
               
               var v$1=Types["Variance"][5](v,make(p,n,i));
               
               if(!concr)
                {var v$2=v$1;}
               else
                {if
                  (Types["Variance"][9](/* Pos */4,v$1)&&
                   Types["Variance"][9](/* Neg */5,v$1))
                  {var v$2=Types["Variance"][2];}
                 else
                  {if(Btype["is_Tvar"](ty))
                    {var v$2=v$1;}
                   else
                    {var
                      v$2=
                       Types["Variance"][5]
                        (v$1,
                         p
                          ?n?Types["Variance"][2]:Types["Variance"][3]
                          :Types["Variance"][10](Types["Variance"][3]));
                     }
                   }
                 }
               
               if(decl[3]===/* Type_abstract */0&&tr===/* Public */1)
                {return v$2;}
               else
                {return Types["Variance"][8]
                         (/* May_weak */2,
                          Types["Variance"][9](/* May_neg */1,v$2),
                          v$2);
                 }
               },
             params,
             required);
    };

var
 add_false=
  List["map"](function(ty){return /* tuple */[0,/* false */0,ty];});

var
 constrained=
  function(env,vars,ty)
   {var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         return List["exists"](function(tl){return List["memq"](ty,tl);},vars);
         
        default:exit=158;}}
    
    switch(exit){case 158:return /* true */1;}
    };

var
 compute_variance_gadt=
  function(env,check,rloc,decl,param)
   {var ret_type_opt=param[2];
    
    var tl=param[1];
    
    var loc=rloc[2];
    
    if(ret_type_opt)
     {var match=Ctype["repr"](ret_type_opt[1]);
      
      var match$1=match[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 3:
           var tyl=List["map"](Ctype["repr"],match$1[2]);
           
           var fvl=List["map"](Ctype["free_variables"](/* None */0),tyl);
           
           var
            match$2=
             List["fold_left2"]
              (function(param$1,ty,param$2)
                {var fv2=param$1[2];
                 
                 if(fv2)
                  {var fv2$1=fv2[2];
                   
                   var fv1=param$1[1];
                   
                   if
                    ((param$2[1]||param$2[2])&&
                     constrained(env,Pervasives["@"](fv1,fv2$1),ty))
                    {throw [0,$$Error,loc,/* Varying_anonymous */4];}
                   else
                    {}
                   
                   return /* tuple */[0,/* :: */[0,fv2[1],fv1],fv2$1];
                   }
                 else
                  {throw [0,
                          CamlPrimitive["caml_global_data"]["Assert_failure"],
                          [0,"typing/typedecl.ml",798,37]];
                   }
                 },
               /* tuple */[0,/* [] */0,fvl],
               tyl,
               rloc[1]);
           
           var newrecord=/* unknown */"duprecord regular 9";
           
           return compute_variance_type
                   (env,
                    check,
                    rloc,
                    (newrecord[1]=tyl,newrecord[4]=/* Private */0,newrecord),
                    add_false(tl));
           
          default:exit=156;}}
      
      switch(exit)
       {case 156:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/typedecl.ml",809,13]];
         
        }
      }
    else
     {var newrecord$1=/* unknown */"duprecord regular 9";
      
      return compute_variance_type
              (env,
               check,
               rloc,
               (newrecord$1[4]=/* Private */0,newrecord$1),
               add_false(tl));
      }
    };

var
 compute_variance_extension=
  function(env,check,decl,ext,rloc)
   {var newrecord=/* unknown */"duprecord regular 9";
    
    return compute_variance_gadt
            (env,
             check,
             rloc,
             (newrecord[1]=ext[2],newrecord),
             /* tuple */[0,ext[3],ext[4]]);
    };

var
 compute_variance_decl=
  function(env,check,decl,rloc)
   {if
     ((decl[3]===/* Type_abstract */0||decl[3]===/* Type_open */1)&&
      decl[5]===
      /* None */0)
     {return List["map"]
              (function(param)
                {return make
                         (!param[2],
                          !param[1],
                          decl[3]!==/* Type_abstract */0||param[3]);
                 },
               rloc[1]);
      }
    else
     {var match=decl[5];
      
      if(match)
       {var mn=/* :: */[0,/* tuple */[0,/* false */0,match[1]],/* [] */0];}
      else
       {var mn=/* [] */0;}
      
      var match$1=decl[3];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){case 0:exit=149;case 1:exit=149;}}
      else
       {switch(match$1[0])
         {case 0:
           return compute_variance_type
                   (env,
                    check,
                    rloc,
                    decl,
                    Pervasives["@"]
                     (mn,
                      List["map"]
                       (function(param)
                         {return /* tuple */[0,param[2]===/* Mutable */1,param[3]];},
                        match$1[1])));
           
          case 1:
           var tll=match$1[1];
           
           if(List["for_all"](function(c){return c[3]===/* None */0;},tll))
            {return compute_variance_type
                     (env,
                      check,
                      rloc,
                      decl,
                      Pervasives["@"]
                       (mn,
                        add_false
                         (List["flatten"](List["map"](function(c){return c[2];},tll)))));
             }
           else
            {var
              mn$1=
               List["map"]
                (function(param)
                  {return /* tuple */[0,
                           /* :: */[0,param[2],/* [] */0],
                           /* None */0];
                   },
                 mn);
             
             var
              tll$1=
               Pervasives["@"]
                (mn$1,
                 List["map"]
                  (function(c){return /* tuple */[0,c[2],c[3]];},tll));
             
             var
              match$2=
               List["map"](compute_variance_gadt(env,check,rloc,decl),tll$1);
             
             if(match$2)
              {var
                varl=
                 List["fold_left"]
                  (List["map2"](Types["Variance"][5]),match$2[1],match$2[2]);
               
               return List["map"]
                       (function(v)
                         {if
                           (Types["Variance"][9](/* Pos */4,v)&&
                            Types["Variance"][9](/* Neg */5,v))
                           {return Types["Variance"][2];}
                          else
                           {return v;}
                          },
                        varl);
               }
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"typing/typedecl.ml",848,15]];
               }
             }
           
          }}
      
      switch(exit)
       {case 149:return compute_variance_type(env,check,rloc,decl,mn);}
      }
    };

var
 is_sharp=
  function(id){var s=Ident["name"](id);return s["length"]>0&&s[0]===35;};

var
 compute_variance_fixpoint=
  function(env,decls,required,variances)
   {var
     new_decls=
      List["map2"]
       (function(param,variance)
         {var newrecord=/* unknown */"duprecord regular 9";
          
          return /* tuple */[0,param[1],(newrecord[6]=variance,newrecord)];
          },
        decls,
        variances);
    
    var
     new_env=
      List["fold_right"]
       (function(param,env)
         {return Env["add_type"](/* true */1,param[1],param[2],env);},
        new_decls,
        env);
    
    var
     new_variances=
      List["map2"]
       (function(param)
         {return compute_variance_decl(new_env,/* false */0,param[2]);},
        new_decls,
        required);
    
    var
     new_variances$1=
      List["map2"](List["map2"](Types["Variance"][5]),new_variances,variances);
    
    if(CamlPrimitive["caml_notequal"](new_variances$1,variances))
     {return compute_variance_fixpoint(env,decls,required,new_variances$1);}
    else
     {List["iter2"]
       (function(param,req)
         {if(!is_sharp(param[1]))
           {return compute_variance_decl(new_env,/* true */1,param[2],req);}
          else
           {return 0;}
          },
        new_decls,
        required);
      return /* tuple */[0,new_decls,new_env];
      }
    };

var
 init_variance=
  function(param)
   {return List["map"]
            (function(param$1){return Types["Variance"][1];},param[2][1]);
    };

var
 add_injectivity=
  List["map"]
   (function(param)
     {switch(param)
       {case 0:return [/* tuple */0,/* true */1,/* false */0,/* false */0];
        case 1:return [/* tuple */0,/* false */0,/* true */1,/* false */0];
        case 2:return [/* tuple */0,/* false */0,/* false */0,/* false */0];
        }
      });

var
 compute_variance_decls=
  function(env,cldecls)
   {var
     match=
      List["fold_right"]
       (function(param,param$1)
         {var ci=param[6];
          
          var variance=List["map"](function(prim){return prim[2];},ci[2]);
          
          return /* tuple */[0,
                  /* :: */[0,/* tuple */[0,param[1],param[2]],param$1[1]],
                  /* :: */[0,
                   /* tuple */[0,add_injectivity(variance),ci[11]],
                   param$1[2]]];
          },
        cldecls,
        [/* tuple */0,/* [] */0,/* [] */0]);
    
    var decls=match[1];
    
    var variances=List["map"](init_variance,decls);
    
    var match$1=compute_variance_fixpoint(env,decls,match[2],variances);
    
    return List["map2"]
            (function(param,param$1)
              {var decl=param[2];
               
               var variance=decl[6];
               
               var newrecord=/* unknown */"duprecord regular 9";
               
               var newrecord$1=/* unknown */"duprecord regular 7";
               
               var newrecord$2=/* unknown */"duprecord regular 6";
               
               return /* tuple */[0,
                       decl,
                       (newrecord[6]=variance,newrecord),
                       (newrecord$1[5]=variance,newrecord$1),
                       (newrecord$2[4]=variance,newrecord$2)];
               },
             match$1[1],
             cldecls);
    };

var
 check_duplicates=
  function(sdecl_list)
   {var labels=Hashtbl["create"](/* None */0,7);
    
    var constrs=Hashtbl["create"](/* None */0,7);
    
    return List["iter"]
            (function(sdecl)
              {var match=sdecl[4];
               
               var exit;
               
               if(typeof match==="number")
                {switch(match){case 0:exit=127;case 1:exit=127;}}
               else
                {switch(match[0])
                  {case 0:
                    return List["iter"]
                            (function(pcd)
                              {try
                                {var name$prime=Hashtbl["find"](constrs,pcd[1][1]);
                                 
                                 return Location["prerr_warning"]
                                         (pcd[4],
                                          /* Duplicate_definitions */[14,
                                           "constructor",
                                           pcd[1][1],
                                           name$prime,
                                           sdecl[1][1]]);
                                 }
                               catch(exn)
                                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                                  {return Hashtbl["add"](constrs,pcd[1][1],sdecl[1][1]);}
                                 else
                                  {throw exn;}
                                 }
                               },
                             match[1]);
                    
                   case 1:
                    return List["iter"]
                            (function(param)
                              {var cname=param[1];
                               
                               try
                                {var name$prime=Hashtbl["find"](labels,cname[1]);
                                 
                                 return Location["prerr_warning"]
                                         (param[4],
                                          /* Duplicate_definitions */[14,
                                           "label",
                                           cname[1],
                                           name$prime,
                                           sdecl[1][1]]);
                                 }
                               catch(exn)
                                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                                  {return Hashtbl["add"](labels,cname[1],sdecl[1][1]);}
                                 else
                                  {throw exn;}
                                 }
                               },
                             match[1]);
                    
                   }}
               
               switch(exit){case 127:return /* () */0;}
               },
             sdecl_list);
    };

var
 name_recursion=
  function(sdecl,id,decl)
   {var match=decl[3];
    
    var exit;
    
    if(typeof match==="number")
     {if(match!==0)
       {exit=121;}
      else
       {if(decl[4]!==0)
         {exit=121;}
        else
         {var match$1=decl[5];
          
          if(match$1)
           {if(is_fixed_type(sdecl))
             {var ty=Ctype["repr"](match$1[1]);
              
              var ty$prime=Btype["newty2"](ty[2],ty[1]);
              
              if(Ctype["deep_occur"](ty,ty$prime))
               {var
                 td=
                  /* Tconstr */[3,/* Pident */[0,id],decl[1],[0,/* Mnil */0]];
                
                Btype["link_type"](ty,Btype["newty2"](ty[2],td));
                var newrecord=/* unknown */"duprecord regular 9";
                
                newrecord[5]=/* Some */[0,ty$prime];
                return newrecord;
                }
              else
               {return decl;}
              }
            else
             {exit=121;}
            }
          else
           {exit=121;}
          }
        }
      }
    else
     {exit=121;}
    
    switch(exit){case 121:return decl;}
    };

var
 transl_type_decl=
  function(env,rec_flag,sdecl_list)
   {var fixed_types=List["filter"](is_fixed_type,sdecl_list);
    
    var
     sdecl_list$1=
      Pervasives["@"]
       (List["map"]
         (function(sdecl)
           {var
             ptype_name=
              Typedtree["mkloc"]
               (Pervasives["^"](sdecl[1][1],"#row"),sdecl[1][2]);
            
            return /* record */[0,
                    ptype_name,
                    sdecl[2],
                    sdecl[3],
                    /* Ptype_abstract */0,
                    sdecl[5],
                    /* None */0,
                    sdecl[7],
                    sdecl[8]];
            },
          fixed_types),
        sdecl_list);
    
    var
     id_list=
      List["map"]
       (function(sdecl){return Ident["create"](sdecl[1][1]);},sdecl_list$1);
    
    Ctype["init_def"](Ident["current_time"](/* () */0));
    Ctype["begin_def"](/* () */0);
    if(rec_flag!==0)
     {var temp_env=List["fold_left2"](enter_type,env,sdecl_list$1,id_list);}
    else
     {var temp_env=env;}
    
    var current_slot=[0,/* None */0];
    
    var
     warn_unused=
      Warnings["is_active"]([/* Unused_type_declaration */18,""]);
    
    var
     id_slots=
      function(id)
       {var exit;
        
        if(rec_flag!==0)
         {if(warn_unused)
           {var slot=[0,/* [] */0];
            
            var td=Env["find_type"](/* Pident */[0,id],temp_env);
            
            var name=Ident["name"](id);
            
            Env["set_type_used_callback"]
             (name,
              td,
              function(old_callback)
               {var match=current_slot[1];
                
                if(match)
                 {var slot$1=match[1];
                  
                  return slot$1[1]=
                         /* :: */[0,/* tuple */[0,name,td],slot$1[1]],
                         0;
                  }
                else
                 {List["iter"]
                   (function(param)
                     {return Env["mark_type_used"](env,param[1],param[2]);},
                    Misc["get_ref"](slot));
                  return old_callback(/* () */0);
                  }
                });
            return /* tuple */[0,id,/* Some */[0,slot]];
            }
          else
           {exit=108;}
          }
        else
         {exit=108;}
        
        switch(exit){case 108:return /* tuple */[0,id,/* None */0];}
        };
    
    var
     transl_declaration$1=
      function(name_sdecl,param)
       {current_slot[1]=param[2];
        return transl_declaration(temp_env,name_sdecl,param[1]);
        };
    
    var
     tdecls=
      List["map2"]
       (transl_declaration$1,sdecl_list$1,List["map"](id_slots,id_list));
    
    var
     decls=
      List["map"]
       (function(tdecl){return /* tuple */[0,tdecl[1],tdecl[4]];},tdecls);
    
    current_slot[1]=/* None */0;
    check_duplicates(sdecl_list$1);
    var
     newenv=
      List["fold_right"]
       (function(param,env)
         {return Env["add_type"](/* true */1,param[1],param[2],env);},
        decls,
        env);
    
    if(rec_flag!==0)
     {List["iter2"]
       (function(id,sdecl){return update_type(temp_env,newenv,id,sdecl[8]);},
        id_list,
        sdecl_list$1)}
    else
     {}
    
    Ctype["end_def"](/* () */0);
    List["iter"](function(param){return generalize_decl(param[2]);},decls);
    var
     id_loc_list=
      List["map2"]
       (function(id,sdecl){return /* tuple */[0,id,sdecl[8]];},
        id_list,
        sdecl_list$1);
    
    List["iter"]
     (function(param)
       {var id=param[1];
        
        return check_well_founded_manifest
                (newenv,
                 List["assoc"](id,id_loc_list),
                 /* Pident */[0,id],
                 param[2]);
        },
      decls);
    var
     to_check=
      function(param)
       {var exit;
        
        switch(param[0])
         {case 0:return List["mem_assoc"](param[1],id_loc_list);
          case 1:exit=98;
          case 2:exit=98;
          }
        
        switch(exit){case 98:return /* false */0;}
        };
    
    List["iter"]
     (function(param)
       {var id=param[1];
        
        return check_well_founded_decl
                (newenv,
                 List["assoc"](id,id_loc_list),
                 /* Pident */[0,id],
                 param[2],
                 to_check);
        },
      decls);
    List["iter"](check_abbrev_recursion(newenv,id_loc_list,to_check),tdecls);
    List["iter2"]
     (function(sdecl,tdecl)
       {var decl=tdecl[4];
        
        var match=Ctype["closed_type_decl"](decl);
        
        if(match)
         {throw [0,$$Error,sdecl[8],/* Unbound_type_var */[9,match[1],decl]];}
        else
         {return /* () */0;}
        },
      sdecl_list$1,
      tdecls);
    List["iter2"](check_constraints(newenv),sdecl_list$1,decls);
    var
     decls$1=
      List["map2"]
       (function(sdecl,param)
         {var id=param[1];
          
          return /* tuple */[0,id,name_recursion(sdecl,id,param[2])];
          },
        sdecl_list$1,
        decls);
    
    var
     required=
      List["map"]
       (function(sdecl)
         {return /* tuple */[0,
                  add_injectivity
                   (List["map"](function(prim){return prim[2];},sdecl[2])),
                  sdecl[8]];
          },
        sdecl_list$1);
    
    var
     match=
      compute_variance_fixpoint
       (env,decls$1,required,List["map"](init_variance,decls$1));
    
    var final_env=match[2];
    
    var final_decls=match[1];
    
    List["iter2"](check_abbrev(final_env),sdecl_list$1,final_decls);
    var
     final_decls$1=
      List["map2"]
       (function(tdecl,param)
         {var newrecord=/* unknown */"duprecord regular 10";
          
          newrecord[4]=param[2];
          return newrecord;
          },
        tdecls,
        final_decls);
    
    return /* tuple */[0,final_decls$1,final_env];
    };

var
 transl_extension_constructor=
  function(env,check_open,type_path,type_params,typext_params,priv,sext)
   {var id=Ident["create"](sext[1][1]);
    
    var match=sext[2];
    
    switch(match[0])
     {case 0:
       var
        match$1=
         make_constructor(env,type_path,typext_params,match[1],match[2]);
       
       var
        match$2=
         /* tuple */[0,
          match$1[3],
          match$1[4],
          /* Text_decl */[0,match$1[1],match$1[2]]];
       
      case 1:
       var lid=match[1];
       
       var cdescr=Typetexp["find_constructor"](env,sext[3],lid[1]);
       
       if(cdescr[11]===/* Private */0||priv===/* Public */1)
        {var usage=/* Positive */0;}
       else
        {var usage=/* Privatize */2;}
       
       Env["mark_constructor"](usage,env,Longident["last"](lid[1]),cdescr);
       var match$3=Ctype["instance_constructor"](/* None */0,cdescr);
       
       var args=match$3[1];
       
       if(cdescr[10])
        {var params=Ctype["instance_list"](env,type_params);
         
         var res=Ctype["newconstr"](type_path,params);
         
         var ret_type=/* Some */[0,Ctype["newconstr"](type_path,params)];
         
         var match$4=/* tuple */[0,res,ret_type];
         }
       else
        {var
          match$4=
           /* tuple */[0,
            Ctype["newconstr"](type_path,typext_params),
            /* None */0];
         }
       
       try
        {Ctype["unify"](env,match$3[2],match$4[1])}
       catch(exn)
        {if(exn[1]===Ctype["Unify"])
          {throw [0,
                  $$Error,
                  lid[2],
                  /* Rebind_wrong_type */[13,lid[1],env,exn[2]]];
           }
         else
          {throw exn;}
         }
       
       if(!cdescr[10])
        {var
          vars=
           Ctype["free_variables"]
            (/* None */0,Btype["newgenty"](/* Ttuple */[2,args]));
         
         List["iter"]
          (function(ty)
            {var match$5=ty[1];
             
             var exit;
             
             if(typeof match$5==="number")
              {switch(match$5){}}
             else
              {switch(match$5[0])
                {case 0:
                  var match$6=match$5[1];
                  
                  if(match$6)
                   {switch(match$6[1])
                     {case "_":
                       if(List["memq"](ty,vars))
                        {return ty[1]=[/* Tvar */0,/* None */0],0;}
                       else
                        {return 0;}
                       
                      default:exit=80;}
                    }
                  else
                   {exit=80;}
                  
                 default:exit=80;}}
             
             switch(exit){case 80:return /* () */0;}
             },
           typext_params)}
       else
        {}
       
       var match$5=cdescr[2][1];
       
       var exit;
       
       if(typeof match$5==="number")
        {switch(match$5){}}
       else
        {switch(match$5[0])
          {case 3:
            var p=match$5[1];
            
            var decl=Env["find_type"](p,env);
            
            var match$6=/* tuple */[0,p,decl[1]];
            
           default:exit=78;}}
       
       switch(exit)
        {case 78:
          throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"typing/typedecl.ml",1162,17]];
          
         }
       
       var cstr_type_params=match$6[2];
       
       var cstr_type_path=match$6[1];
       
       var
        cstr_types=
         /* :: */[0,
          Btype["newgenty"]
           (/* Tconstr */[3,cstr_type_path,cstr_type_params,[0,/* Mnil */0]]),
          cstr_type_params];
       
       var
        ext_types=
         /* :: */[0,
          Btype["newgenty"]
           (/* Tconstr */[3,type_path,type_params,[0,/* Mnil */0]]),
          type_params];
       
       if(!Ctype["equal"](env,/* true */1,cstr_types,ext_types))
        {throw [0,
                $$Error,
                lid[2],
                /* Rebind_mismatch */[14,lid[1],cstr_type_path,type_path]];
         }
       else
        {}
       
       var match$7=cdescr[11];
       
       var exit$1;
       
       if(match$7!==0)
        {exit$1=74;}
       else
        {if(priv!==0)
          {throw [0,$$Error,lid[2],/* Rebind_private */[15,lid[1]]];}
         else
          {exit$1=74;}
         }
       
       switch(exit$1){case 74:}
       
       var match$8=cdescr[6];
       
       var exit$2;
       
       switch(match$8[0])
        {case 0:exit$2=72;case 1:exit$2=72;case 2:var path=match$8[1];}
       
       switch(exit$2)
        {case 72:
          throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"typing/typedecl.ml",1187,17]];
          
         }
       
       var
        match$2=
         /* tuple */[0,args,match$4[2],/* Text_rebind */[1,path,lid]];
       
      }
    
    var
     ext=
      /* record */[0,
       type_path,
       typext_params,
       match$2[1],
       match$2[2],
       priv,
       sext[3],
       sext[4]];
    
    return /* record */[0,id,sext[1],ext,match$2[3],sext[3],sext[4]];
    };

var
 transl_type_extension=
  function(check_open,env,loc,styext)
   {Typetexp["reset_type_variables"](/* () */0);
    Ctype["begin_def"](/* () */0);
    var match=Typetexp["find_type"](env,loc,styext[1][1]);
    
    var type_decl=match[2];
    
    var type_path=match[1];
    
    var match$1=type_decl[3];
    
    if(typeof match$1==="number")
     {if(match$1!==0)
       {}
      else
       {if(check_open)
         {try
           {var
             match$2=
              List["find"]
               (function(param)
                 {switch(param[2][0])
                   {case 0:return /* true */1;case 1:return /* false */0;}
                  },
                styext[3]);
            
            throw [0,$$Error,match$2[3],/* Not_open_type */[10,type_path]];
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {}
            else
             {throw exn;}
            }
          }
        else
         {}
        }
      }
    else
     {throw [0,$$Error,loc,/* Not_extensible_type */[11,type_path]];}
    
    var
     type_variance=
      List["map"]
       (function(v)
         {var match$3=Types["Variance"][11](v);
          
          return /* tuple */[0,!match$3[2],!match$3[1],/* false */0];
          },
        type_decl[6]);
    
    if(type_decl[2]!==List["length"](styext[2]))
     {var err=[/* :: */0,/* Arity */0,/* [] */0];}
    else
     {if
       (List["for_all2"]
         (function(param,param$1)
           {return (!param$1[1]||param[1])&&(!param$1[2]||param[2]);},
          type_variance,
          add_injectivity
           (List["map"](function(prim){return prim[2];},styext[2]))))
       {var err=/* [] */0;}
      else
       {var err=[/* :: */0,/* Variance */5,/* [] */0];}
      }
    
    if(err!==/* [] */0)
     {throw [0,$$Error,loc,/* Extension_mismatch */[12,type_path,err]];}
    else
     {}
    
    var ttype_params=make_params(env,styext[2]);
    
    var
     type_params=
      List["map"](function(param){return param[1][2];},ttype_params);
    
    List["iter2"]
     (Ctype["unify_var"](env),
      Ctype["instance_list"](env,type_decl[1]),
      type_params);
    var
     constructors=
      List["map"]
       (transl_extension_constructor
         (env,check_open,type_path,type_decl[1],type_params,styext[4]),
        styext[3]);
    
    Ctype["end_def"](/* () */0);
    List["iter"](Ctype["generalize"],type_params);
    List["iter"]
     (function(ext)
       {List["iter"](Ctype["generalize"],ext[3][3]);
        return Misc["may"](Ctype["generalize"],ext[3][4]);
        },
      constructors);
    List["iter"]
     (function(ext)
       {var match$3=Ctype["closed_extension_constructor"](ext[3]);
        
        if(match$3)
         {throw [0,
                 $$Error,
                 ext[5],
                 /* Unbound_type_var_ext */[19,match$3[1],ext[3]]];
          }
        else
         {return /* () */0;}
        },
      constructors);
    List["iter"]
     (function(ext)
       {return compute_variance_extension
                (env,
                 /* true */1,
                 type_decl,
                 ext[3],
                 /* tuple */[0,type_variance,loc]);
        },
      constructors);
    var
     newenv=
      List["fold_left"]
       (function(env,ext)
         {return Env["add_extension"](/* true */1,ext[1],ext[3],env);},
        env,
        constructors);
    
    var
     tyext=
      /* record */[0,
       type_path,
       styext[1],
       ttype_params,
       constructors,
       styext[4],
       styext[5]];
    
    return /* tuple */[0,tyext,newenv];
    };

var
 transl_exception=
  function(env,sext)
   {Typetexp["reset_type_variables"](/* () */0);
    Ctype["begin_def"](/* () */0);
    var
     ext=
      transl_extension_constructor
       (env,
        /* false */0,
        Predef["path_exn"],
        /* [] */0,
        /* [] */0,
        /* Public */1,
        sext);
    
    Ctype["end_def"](/* () */0);
    List["iter"](Ctype["generalize"],ext[3][3]);
    Misc["may"](Ctype["generalize"],ext[3][4]);
    var match=Ctype["closed_extension_constructor"](ext[3]);
    
    if(match)
     {throw [0,$$Error,ext[5],/* Unbound_type_var_ext */[19,match[1],ext[3]]];
      }
    else
     {}
    
    var newenv=Env["add_extension"](/* true */1,ext[1],ext[3],env);
    
    return /* tuple */[0,ext,newenv];
    };

var
 transl_value_decl=
  function(env,loc,valdecl)
   {var cty=Typetexp["transl_type_scheme"](env,valdecl[2]);
    
    var ty=cty[2];
    
    var decl=valdecl[3];
    
    if(decl)
     {var arity=Ctype["arity"](ty);
      
      var prim=Primitive["parse_declaration"](arity,decl);
      
      if(arity===0&&prim[1][0]!==37)
       {throw [0,$$Error,valdecl[2][2],/* Null_arity_external */2];}
      else
       {}
      
      if
       (Clflags["native_code"][1]&&
        prim[2]>
        5&&
        CamlPrimitive["caml_string_equal"](prim[4],""))
       {throw [0,$$Error,valdecl[2][2],/* Missing_native_external */3];}
      else
       {}
      
      var v=/* record */[0,ty,/* Val_prim */[0,prim],loc,valdecl[4]];
      }
    else
     {var v=/* record */[0,ty,/* Val_reg */0,loc,valdecl[4]];}
    
    var
     match=
      Env["enter_value"]
       (/* Some */[0,
         function(s){return /* Unused_value_declaration */[16,s];}],
        valdecl[1][1],
        v,
        env);
    
    var
     desc=
      /* record */[0,
       match[1],
       valdecl[1],
       cty,
       v,
       valdecl[3],
       valdecl[5],
       valdecl[4]];
    
    return /* tuple */[0,desc,match[2]];
    };

var
 transl_with_constraint=
  function(env,id,row_path,orig_decl,sdecl)
   {Env["mark_type_used"](env,Ident["name"](id),orig_decl);
    Typetexp["reset_type_variables"](/* () */0);
    Ctype["begin_def"](/* () */0);
    var tparams=make_params(env,sdecl[2]);
    
    var params=List["map"](function(param){return param[1][2];},tparams);
    
    var orig_decl$1=Ctype["instance_declaration"](orig_decl);
    
    var arity_ok=List["length"](params)===orig_decl$1[2];
    
    if(arity_ok)
     {List["iter2"](Ctype["unify_var"](env),params,orig_decl$1[1])}
    else
     {}
    
    var
     constraints=
      List["map"]
       (function(param)
         {var loc=param[3];
          
          try
           {var cty=Typetexp["transl_simple_type"](env,/* false */0,param[1]);
            
            var
             cty$prime=
              Typetexp["transl_simple_type"](env,/* false */0,param[2]);
            
            var ty=cty[2];
            
            var ty$prime=cty$prime[2];
            
            Ctype["unify"](env,ty,ty$prime);
            return /* tuple */[0,cty,cty$prime,loc];
            }
          catch(exn)
           {if(exn[1]===Ctype["Unify"])
             {throw [0,
                     $$Error,
                     loc,
                     /* Inconsistent_constraint */[6,env,exn[2]]];
              }
            else
             {throw exn;}
            }
          },
        sdecl[3]);
    
    var no_row=!is_fixed_type(sdecl);
    
    var match=sdecl[6];
    
    if(match)
     {var cty=Typetexp["transl_simple_type"](env,no_row,match[1]);
      
      var match$1=/* tuple */[0,/* Some */[0,cty],/* Some */[0,cty[2]]];
      }
    else
     {var match$1=[/* tuple */0,/* None */0,/* None */0];}
    
    var man=match$1[2];
    
    if(sdecl[5]===/* Private */0)
     {var priv=/* Private */0;}
    else
     {if(arity_ok&&orig_decl$1[3]!==/* Type_abstract */0)
       {var priv=orig_decl$1[4];}
      else
       {var priv=sdecl[5];}
      }
    
    if
     (arity_ok&&
      orig_decl$1[3]!==
      /* Type_abstract */0&&
      sdecl[5]===
      /* Private */0)
     {Location["prerr_warning"]
       (sdecl[8],[/* Deprecated */0,"spurious use of private"])}
    else
     {}
    
    var
     decl=
      /* record */[0,
       params,
       List["length"](params),
       arity_ok&&man!==/* None */0?orig_decl$1[3]:/* Type_abstract */0,
       priv,
       man,
       /* [] */0,
       /* None */0,
       sdecl[8],
       sdecl[7]];
    
    if(row_path){set_fixed_row(env,sdecl[8],row_path[1],decl)}else{}
    
    var match$2=Ctype["closed_type_decl"](decl);
    
    if(match$2)
     {throw [0,$$Error,sdecl[8],/* Unbound_type_var */[9,match$2[1],decl]];}
    else
     {}
    
    var decl$1=name_recursion(sdecl,id,decl);
    
    var newrecord=/* unknown */"duprecord regular 9";
    
    newrecord[6]=
    compute_variance_decl
     (env,
      /* false */0,
      decl$1,
      /* tuple */[0,
       add_injectivity(List["map"](function(prim){return prim[2];},sdecl[2])),
       sdecl[8]]);
    var decl$2=newrecord;
    
    Ctype["end_def"](/* () */0);
    generalize_decl(decl$2);
    return /* record */[0,
            id,
            sdecl[1],
            tparams,
            decl$2,
            constraints,
            /* Ttype_abstract */0,
            sdecl[5],
            match$1[1],
            sdecl[8],
            sdecl[7]];
    };

var
 abstract_type_decl=
  function(arity)
   {var
     make_params$1=
      function(n)
       {if(n<=0)
         {return /* [] */0;}
        else
         {return /* :: */[0,
                  Ctype["newvar"](/* None */0,/* () */0),
                  make_params$1(n-1)];
          }
        };
    
    Ctype["begin_def"](/* () */0);
    var
     decl=
      /* record */[0,
       make_params$1(arity),
       arity,
       /* Type_abstract */0,
       /* Public */1,
       /* None */0,
       Misc["replicate_list"](Types["Variance"][2],arity),
       /* None */0,
       Location["none"],
       /* [] */0];
    
    Ctype["end_def"](/* () */0);
    generalize_decl(decl);
    return decl;
    };

var
 approx_type_decl=
  function(env,sdecl_list)
   {return List["map"]
            (function(sdecl)
              {return /* tuple */[0,
                       Ident["create"](sdecl[1][1]),
                       abstract_type_decl(List["length"](sdecl[2]))];
               },
             sdecl_list);
    };

var
 check_recmod_typedecl=
  function(env,loc,recmod_ids,path,decl)
   {var
     to_check=
      function(path)
       {return List["exists"]
                (function(id){return Path["isfree"](id,path);},recmod_ids);
        };
    
    check_well_founded_decl(env,loc,path,decl,to_check);
    return check_recursion(env,loc,path,decl,to_check);
    };

var
 explain_unbound=
  function(ppf,tv,tl,typ,kwd,lab)
   {try
     {var
       ti=
        List["find"](function(ti){return Ctype["deep_occur"](tv,typ(ti));},tl);
      
      var ty0=Btype["newgenty"](/* Tobject */[4,tv,[0,/* None */0]]);
      
      Printtyp["reset_and_mark_loops_list"]
       (/* :: */[0,typ(ti),/* :: */[0,ty0,/* [] */0]]);
      return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Char_literal */12,
                 46,
                 [/* Formatting_lit */17,
                  /* Flush_newline */4,
                  [/* Formatting_gen */18,
                   [/* Open_box */1,
                    [/* Format */0,
                     [/* String_literal */11,"<hov2>",/* End_of_format */0],
                     "<hov2>"]],
                   [/* String_literal */11,
                    "In ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String */2,
                       /* No_padding */0,
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@;<1 -2>",1,-2],
                         [/* String_literal */11,
                          "the variable ",
                          [/* Alpha */15,
                           [/* String_literal */11,
                            " is unbound",
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]]]]],
                ".@.@[<hov2>In %s@ %s%a@;<1 -2>the variable %a is unbound@]"],
               kwd,
               lab(ti),
               Printtyp["type_expr"],
               typ(ti),
               Printtyp["type_expr"],
               tv);
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* () */0;}
      else
       {throw exn;}
      }
    };

var
 explain_unbound_single=
  function(ppf,tv,ty)
   {var
     trivial=
      function(ty)
       {return explain_unbound
                (ppf,
                 tv,
                 /* :: */[0,ty,/* [] */0],
                 function(t){return t;},
                 "type",
                 function(param){return "";});
        };
    
    var match=Ctype["repr"](ty)[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         var match$1=Ctype["flatten_fields"](match[1]);
         
         if(match$1[2]===tv)
          {return trivial(ty);}
         else
          {return explain_unbound
                   (ppf,
                    tv,
                    match$1[1],
                    function(param){return param[3];},
                    "method",
                    function(param){return Pervasives["^"](param[1],": ");});
           }
         
        case 8:
         var row=Btype["row_repr"](match[1]);
         
         if(row[2]===tv)
          {return trivial(ty);}
         else
          {return explain_unbound
                   (ppf,
                    tv,
                    row[1],
                    function(param)
                     {var match$2=Btype["row_field_repr"](param[2]);
                      
                      var exit$1;
                      
                      if(typeof match$2==="number")
                       {switch(match$2){case 0:exit$1=12;}}
                      else
                       {switch(match$2[0])
                         {case 0:
                           var match$3=match$2[1];
                           
                           if(match$3){return match$3[1];}else{exit$1=12;}
                           
                          case 1:
                           var tl=match$2[2];
                           
                           var exit$2;
                           
                           if(tl)
                            {if(tl[2]){exit$2=13;}else{return tl[1];}}
                           else
                            {exit$2=13;}
                           
                           switch(exit$2)
                            {case 13:return Btype["newgenty"](/* Ttuple */[2,tl]);}
                           
                          }}
                      
                      switch(exit$1)
                       {case 12:
                         return Btype["newgenty"]([/* Ttuple */2,/* [] */0]);
                        }
                      },
                    "case",
                    function(param)
                     {return Pervasives["^"]
                              ("`",Pervasives["^"](param[1]," of "));
                      });
           }
         
        default:exit=15;}}
    
    switch(exit){case 15:return trivial(ty);}
    };

var
 report_error=
  function(ppf,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "A type parameter occurs several times",
                    /* End_of_format */0],
                   "A type parameter occurs several times"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "Too many non-constant constructors",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String_literal */11,
                       "-- maximum is ",
                       [/* Int */4,
                        /* Int_i */3,
                        /* No_padding */0,
                        /* No_precision */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,
                          /* No_padding */0,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[Too many non-constant constructors@ -- maximum is %i %s@]"],
                  Config["max_tag"]+1,
                  "non-constant constructors");
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "External identifiers must be functions",
                    /* End_of_format */0],
                   "External identifiers must be functions"]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hv>",/* End_of_format */0],
                      "<hv>"]],
                    [/* String_literal */11,
                     "An external function with more than 5 arguments requires a second stub function",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String_literal */11,
                       "for native-code compilation",
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[<hv>An external function with more than 5 arguments requires a second stub function@ for native-code compilation@]"]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
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
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[%s@ %s@ %s@]"],
                  "In this GADT definition,",
                  "the variance of some parameter",
                  "cannot be checked");
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Two constructors are named ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "Two constructors are named %s"],
                  param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Two labels are named ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "Two labels are named %s"],
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The type abbreviation ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11," is cyclic",/* End_of_format */0]]],
                   "The type abbreviation %s is cyclic"],
                  param[1]);
         
        case 3:
         var ty=param[2];
         
         Printtyp["reset_and_mark_loops"](ty);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v>",/* End_of_format */0],
                      "<v>"]],
                    [/* String_literal */11,
                     "The definition of ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " contains a cycle:",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[<v>The definition of %s contains a cycle:@ %a@]"],
                  param[1],
                  Printtyp["type_expr"],
                  ty);
         
        case 4:
         var ty$1=param[1];
         
         Printtyp["reset_and_mark_loops"](ty$1);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v>",/* End_of_format */0],
                      "<v>"]],
                    [/* Formatting_gen */18,
                     [/* Open_box */1,
                      [/* Format */0,
                       [/* String_literal */11,"<hov>",/* End_of_format */0],
                       "<hov>"]],
                     [/* String */2,
                      /* No_padding */0,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@;<1 2>",1,2],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]],
                   "@[<v>@[<hov>%s@ %s@;<1 2>%a@]%a@]"],
                  "This variant or record definition",
                  "does not match that of type",
                  Printtyp["type_expr"],
                  ty$1,
                  Includecore["report_type_mismatch"]
                   ("the original","this","definition"),
                  param[2]);
         
        case 5:
         var ty$prime=param[2];
         
         var ty$2=param[1];
         
         Printtyp["reset_and_mark_loops"](ty$2);
         Printtyp["mark_loops"](ty$prime);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hv>",/* End_of_format */0],
                         "<hv>"]],
                       [/* String_literal */11,
                        "Type",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "should be an instance of",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]]]]]]]]],
                   "@[%s@ @[<hv>Type@ %a@ should be an instance of@ %a@]@]"],
                  "Constraints are not satisfied in this type.",
                  Printtyp["type_expr"],
                  ty$2,
                  Printtyp["type_expr"],
                  ty$prime);
         
        case 6:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "The type constraints are not consistent.",
             [/* Formatting_lit */17,
              /* Flush_newline */4,
              /* End_of_format */0]],
            "The type constraints are not consistent.@."]);
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[1],
                  /* None */0,
                  param[2],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,"Type",/* End_of_format */0],
                              "Type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "is not compatible with type",
                               /* End_of_format */0],
                              "is not compatible with type"]);
                    });
         
        case 7:
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[1],
                  /* None */0,
                  param[2],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "This type constructor expands to type",
                               /* End_of_format */0],
                              "This type constructor expands to type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is used here with type",
                               /* End_of_format */0],
                              "but is used here with type"]);
                    });
         
        case 8:
         var ty$prime$1=param[3];
         
         var ty$3=param[2];
         
         Printtyp["reset_and_mark_loops"](ty$3);
         Printtyp["mark_loops"](ty$prime$1);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hv>",/* End_of_format */0],
                      "<hv>"]],
                    [/* String_literal */11,
                     "In the definition of ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       ", type",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "should be",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]]]]]]]]],
                   "@[<hv>In the definition of %s, type@ %a@ should be@ %a@]"],
                  Path["name"](/* None */0,param[1]),
                  Printtyp["type_expr"],
                  ty$3,
                  Printtyp["type_expr"],
                  ty$prime$1);
         
        case 9:
         var decl=param[2];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "A type variable is unbound in this type declaration",
             /* End_of_format */0],
            "A type variable is unbound in this type declaration"]);
         var ty$4=Ctype["repr"](param[1]);
         
         var match=decl[3];
         
         var match$1=decl[5];
         
         var exit;
         
         if(typeof match==="number")
          {switch(match)
            {case 0:
              if(match$1)
               {return explain_unbound_single(ppf,ty$4,match$1[1]);}
              else
               {exit=3;}
              
             case 1:exit=3;
             }}
         else
          {switch(match[0])
            {case 0:
              return explain_unbound
                      (ppf,
                       ty$4,
                       match[1],
                       function(l){return l[3];},
                       "field",
                       function(l)
                        {return Pervasives["^"](Ident["name"](l[1]),": ");});
              
             case 1:
              return explain_unbound
                      (ppf,
                       ty$4,
                       match[1],
                       function(c){return Btype["newgenty"](/* Ttuple */[2,c[2]]);},
                       "case",
                       function(c)
                        {return Pervasives["^"](Ident["name"](c[1])," of ");});
              
             }}
         
         switch(exit){case 3:return /* () */0;}
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[%s@ %a@]"],
                  "Cannot extend type definition",
                  Printtyp["path"],
                  param[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[%s@ %a@ %s@]"],
                  "Type",
                  Printtyp["path"],
                  param[1],
                  "is not extensible");
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v>",/* End_of_format */0],
                      "<v>"]],
                    [/* Formatting_gen */18,
                     [/* Open_box */1,
                      [/* Format */0,
                       [/* String_literal */11,"<hov>",/* End_of_format */0],
                       "<hov>"]],
                     [/* String */2,
                      /* No_padding */0,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@;<1 2>",1,2],
                         [/* String */2,
                          /* No_padding */0,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]],
                   "@[<v>@[<hov>%s@ %s@;<1 2>%s@]%a@]"],
                  "This extension",
                  "does not match the definition of type",
                  Path["name"](/* None */0,param[1]),
                  Includecore["report_type_mismatch"]
                   ("the type","this extension","definition"),
                  param[2]);
         
        case 13:
         var lid=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  param[2],
                  /* None */0,
                  param[3],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "The constructor ",
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String_literal */11,"has type",/* End_of_format */0]]]],
                              "The constructor %a@ has type"],
                             Printtyp["longident"],
                             lid);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but was expected to be of type",
                               /* End_of_format */0],
                              "but was expected to be of type"]);
                    });
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
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
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String */2,
                               /* No_padding */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]]]]]]]]],
                   "@[%s@ %a@ %s@ %s@ %s@ %s@ %s@]"],
                  "The constructor",
                  Printtyp["longident"],
                  param[1],
                  "extends type",
                  Path["name"](/* None */0,param[2]),
                  "whose declaration does not match",
                  "the declaration of type",
                  Path["name"](/* None */0,param[3]));
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[%s@ %a@ %s@]"],
                  "The constructor",
                  Printtyp["longident"],
                  param[1],
                  "is private");
         
        case 16:
         var n=param[1];
         
         var
          variance=
           function(param$1)
            {var n$1=param$1[2];
             
             if(param$1[3]){var inj="injective ";}else{var inj="";}
             
             if(param$1[1]!==0)
              {if(n$1!==0)
                {return Pervasives["^"](inj,"invariant");}
               else
                {return Pervasives["^"](inj,"covariant");}
               }
             else
              {if(n$1!==0)
                {return Pervasives["^"](inj,"contravariant");}
               else
                {if(CamlPrimitive["caml_string_equal"](inj,""))
                  {return "unrestricted";}
                 else
                  {return inj;}
                 }
               }
             };
         
         var
          suffix=
           function(n)
            {var teen=n%100/10===1;
             
             var match$2=n%10;
             
             var exit$1;
             
             var switcher=-1+match$2;
             
             if(2<switcher>>>0)
              {exit$1=5;}
             else
              {switch(switcher)
                {case 0:if(!teen){return "st";}else{exit$1=5;}
                 case 1:if(!teen){return "nd";}else{exit$1=5;}
                 case 2:if(!teen){return "rd";}else{exit$1=5;}
                 }
               }
             
             switch(exit$1){case 5:return "th";}
             };
         
         if(n===-1)
          {Format["fprintf"]
            (ppf,
             [/* Format */0,
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
                   [/* String_literal */11,"It",/* End_of_format */0]]]]]],
              "@[%s@ %s@ It"],
             "In this definition, a type variable has a variance that",
             "is not reflected by its occurrence in type parameters.")}
         else
          {if(n===-2)
            {Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Formatting_gen */18,
                 [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                 [/* String */2,
                  /* No_padding */0,
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* String */2,
                    /* No_padding */0,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     /* End_of_format */0]]]]],
                "@[%s@ %s@]"],
               "In this definition, a type variable cannot be deduced",
               "from the type parameters.")}
           else
            {if(n===-3)
              {Format["fprintf"]
                (ppf,
                 [/* Format */0,
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
                       [/* String_literal */11,"It",/* End_of_format */0]]]]]],
                  "@[%s@ %s@ It"],
                 "In this definition, a type variable has a variance that",
                 "cannot be deduced from the type parameters.")}
             else
              {Format["fprintf"]
                (ppf,
                 [/* Format */0,
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
                       [/* String_literal */11,
                        "The ",
                        [/* Int */4,
                         /* Int_d */0,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* String */2,
                          /* No_padding */0,
                          [/* String_literal */11,
                           " type parameter",
                           /* End_of_format */0]]]]]]]]],
                  "@[%s@ %s@ The %d%s type parameter"],
                 "In this definition, expected parameter",
                 "variances are not satisfied.",
                 n,
                 suffix(n))}
             }
           }
         
         if(n!==-2)
          {return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* String_literal */11,
                      " was expected to be ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,
                        44,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "but it is ",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,
                            46,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]],
                     " was expected to be %s,@ but it is %s.@]"],
                    variance(param[3]),
                    variance(param[2]));
           }
         else
          {return 0;}
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The definition of type ",
                    [/* Alpha */15,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String_literal */11,
                       "is unavailable",
                       /* End_of_format */0]]]],
                   "The definition of type %a@ is unavailable"],
                  Printtyp["path"],
                  param[1]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This fixed type ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "This fixed type %s"],
                  param[1]);
         
        case 19:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "A type variable is unbound in this extension constructor",
             /* End_of_format */0],
            "A type variable is unbound in this extension constructor"]);
         return explain_unbound
                 (ppf,
                  param[1],
                  param[2][3],
                  function(c){return c;},
                  "type",
                  function(param$1){return "";});
         
        }}
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,
                Location["error_of_printer"](param[2],report_error,param[3])];
        }
      else
       {return /* None */0;}
      });

module["exports"]=
{"transl_type_decl":transl_type_decl,
 "transl_exception":transl_exception,
 "transl_type_extension":transl_type_extension,
 "transl_value_decl":transl_value_decl,
 "transl_with_constraint":transl_with_constraint,
 "abstract_type_decl":abstract_type_decl,
 "approx_type_decl":approx_type_decl,
 "check_recmod_typedecl":check_recmod_typedecl,
 "check_coherence":check_coherence,
 "is_fixed_type":is_fixed_type,
 "compute_variance_decls":compute_variance_decls,
 "Error":$$Error,
 "report_error":report_error};

