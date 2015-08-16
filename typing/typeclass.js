// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var Includeclass=require("./includeclass.js");
var Typecore=require("./typecore.js");
var Printtyp=require("./printtyp.js");
var Typedtree=require("./typedtree.js");
var Btype=require("./btype.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Predef=require("./predef.js");
var Cmt_format=require("./cmt_format.js");
var Clflags=require("./clflags.js");
var Types=require("./types.js");
var Typetexp=require("./typetexp.js");
var Syntaxerr=require("./syntaxerr.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Typedecl=require("./typedecl.js");
var Path=require("./path.js");
var Subst=require("./subst.js");
var Location=require("./location.js");
var Ident=require("./ident.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var Stypes=require("./stypes.js");
var Ast_helper=require("./ast_helper.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Typeclass.Error",0]);

var
 Error_forward=
  CamlPrimitive["caml_set_oo_id"]([248,"Typeclass.Error_forward",0]);

var
 ctyp=
  function(desc,typ,env,loc)
   {return /* record */[0,desc,typ,env,loc,/* [] */0];};

var dummy_method=Btype["dummy_method"];

var unbound_class=/* Pident */[0,Ident["create"]("")];

var
 scrape_class_type=
  function(cty)
   {var exit;
    
    switch(cty[0])
     {case 0:return scrape_class_type(cty[3]);
      case 1:exit=349;
      case 2:exit=349;
      }
    
    switch(exit){case 349:return cty;}
    };

var
 generalize_class_type=
  function(gen,param)
   {switch(param[0])
     {case 0:
       List["iter"](gen,param[2]);return generalize_class_type(gen,param[3]);
      case 1:
       var match=param[1];
       
       gen(match[1]);
       Types["Vars"][10]
        (function(param$1,param$2){return gen(param$2[3]);},match[2]);
       return List["iter"]
               (function(param$1){return List["iter"](gen,param$1[2]);},
                match[4]);
       
      case 2:gen(param[2]);return generalize_class_type(gen,param[3]);
      }
    };

var
 generalize_class_type$1=
  function(vars)
   {if(vars)
     {var gen=Ctype["generalize"];}
    else
     {var gen=Ctype["generalize_structure"];}
    
    return generalize_class_type(gen);
    };

var
 virtual_methods=
  function(sign)
   {var match=Ctype["flatten_fields"](Ctype["object_fields"](sign[1]));
    
    return List["fold_left"]
            (function(virt,param)
              {var lab=param[1];
               
               if(CamlPrimitive["caml_string_equal"](lab,dummy_method))
                {return virt;}
               else
                {if(Types["Concr"][3](lab,sign[3]))
                  {return virt;}
                 else
                  {return /* :: */[0,lab,virt];}
                 }
               },
             /* [] */0,
             match[1]);
    };

var
 constructor_type=
  function(constr,cty)
   {switch(cty[0])
     {case 0:return constructor_type(constr,cty[3]);
      case 1:return constr;
      case 2:
       return Ctype["newty"]
               (/* Tarrow */[1,
                 cty[1],
                 cty[2],
                 constructor_type(constr,cty[3]),
                 /* Cok */0]);
       
      }
    };

var
 class_body=
  function(cty)
   {var exit;
    
    switch(cty[0])
     {case 0:exit=344;case 1:exit=344;case 2:return class_body(cty[3]);}
    
    switch(exit){case 344:return cty;}
    };

var
 extract_constraints=
  function(cty)
   {var sign=Ctype["signature_of_class_type"](cty);
    
    var match=Ctype["flatten_fields"](Ctype["object_fields"](sign[1]));
    
    return /* tuple */[0,
            Types["Vars"][11]
             (function(lab,param,vars){return /* :: */[0,lab,vars];},
              sign[2],
              /* [] */0),
            List["fold_left"]
             (function(meths,param)
               {var lab=param[1];
                
                if(CamlPrimitive["caml_string_equal"](lab,dummy_method))
                 {return meths;}
                else
                 {return /* :: */[0,lab,meths];}
                },
              /* [] */0,
              match[1]),
            sign[3]];
    };

var
 abbreviate_class_type=
  function(path,params,cty)
   {var exit;
    
    switch(cty[0])
     {case 0:exit=340;
      case 1:exit=340;
      case 2:
       return /* Cty_arrow */[2,
               cty[1],
               cty[2],
               abbreviate_class_type(path,params,cty[3])];
       
      }
    
    switch(exit){case 340:return /* Cty_constr */[0,path,params,cty];}
    };

var
 closed_class_type=
  function(param)
   {switch(param[0])
     {case 0:return List["for_all"](Ctype["closed_schema"],param[2]);
      case 1:
       var sign=param[1];
       
       return Ctype["closed_schema"](sign[1])&&
              Types["Vars"][11]
               (function(param$1,param$2,cc)
                 {return Ctype["closed_schema"](param$2[3])&&cc;},
                sign[2],
                /* true */1);
       
      case 2:
       return Ctype["closed_schema"](param[2])&&closed_class_type(param[3]);
      }
    };

var
 closed_class=
  function(cty)
   {return List["for_all"](Ctype["closed_schema"],cty[1])&&
           closed_class_type(cty[2]);
    };

var
 limited_generalize=
  function(rv,param)
   {switch(param[0])
     {case 0:
       List["iter"](Ctype["limited_generalize"](rv),param[2]);
       return limited_generalize(rv,param[3]);
       
      case 1:
       var sign=param[1];
       
       Ctype["limited_generalize"](rv,sign[1]);
       Types["Vars"][10]
        (function(param$1,param$2)
          {return Ctype["limited_generalize"](rv,param$2[3]);},
         sign[2]);
       return List["iter"]
               (function(param$1)
                 {return List["iter"]
                          (Ctype["limited_generalize"](rv),param$1[2]);
                  },
                sign[4]);
       
      case 2:
       Ctype["limited_generalize"](rv,param[2]);
       return limited_generalize(rv,param[3]);
       
      }
    };

var
 rc=
  function(node)
   {Cmt_format["add_saved_type"](/* Partial_class_expr */[4,node]);
    Stypes["record"](/* Ti_class */[2,node]);
    return node;
    };

var
 enter_met_env=
  function(check,loc,lab,kind,ty,val_env,met_env,par_env)
   {var
     match=
      Env["enter_value"]
       (/* None */0,
        lab,
        /* record */[0,ty,/* Val_unbound */1,loc,/* [] */0],
        val_env);
    
    var id=match[1];
    
    return /* tuple */[0,
            id,
            match[2],
            Env["add_value"]
             (check,id,/* record */[0,ty,kind,loc,/* [] */0],met_env),
            Env["add_value"]
             (/* None */0,
              id,
              /* record */[0,ty,/* Val_unbound */1,loc,/* [] */0],
              par_env)];
    };

var
 enter_val=
  function(cl_num,vars,inh,lab,mut,virt,ty,val_env,met_env,par_env,loc)
   {var instance=Ctype["instance"](/* None */0,val_env);
    
    try
     {var match=Types["Vars"][22](lab,vars[1]);
      
      var virt$prime=match[3];
      
      if(CamlPrimitive["caml_notequal"](match[2],mut))
       {throw [0,$$Error,loc,val_env,/* Mutability_mismatch */[22,lab,mut]];}
      else
       {}
      
      Ctype["unify"](val_env,instance(ty),instance(match[4]));
      var
       match$1=
        /* tuple */[0,
         !inh?/* Some */[0,match[1]]:/* None */0,
         virt$prime===/* Concrete */1?virt$prime:virt];
      }
    catch(exn)
     {if(exn[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               loc,
               val_env,
               /* Field_type_mismatch */[1,"instance variable",lab,exn[2]]];
        }
      else
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {var match$1=/* tuple */[0,/* None */0,virt];}
        else
         {throw exn;}
        }
      }
    
    var id=match$1[1];
    
    if(id)
     {var result=/* tuple */[0,id[1],val_env,met_env,par_env];}
    else
     {var
       result=
        enter_met_env
         (/* None */0,
          Location["none"],
          lab,
          /* Val_ivar */[1,mut,cl_num],
          ty,
          val_env,
          met_env,
          par_env);
      }
    
    vars[1]=
    Types["Vars"][4](lab,/* tuple */[0,result[1],mut,match$1[2],ty],vars[1]);
    return result;
    };

var
 concr_vals=
  function(vars)
   {return Types["Vars"][11]
            (function(id,param,s)
              {if(param[2]===/* Virtual */0)
                {return s;}
               else
                {return Types["Concr"][4](id,s);}
               },
             vars,
             Types["Concr"][1]);
    };

var
 inheritance=
  function(self_type,env,ovf,concr_meths,warn_vals,loc,parent)
   {var match=scrape_class_type(parent);
    
    var exit;
    
    switch(match[0])
     {case 0:exit=326;
      case 1:
       var cl_sig=match[1];
       
       try
        {Ctype["unify"](env,self_type,cl_sig[1])}
       catch(exn)
        {if(exn[1]===Ctype["Unify"])
          {var trace=exn[2];
           
           var exit$1;
           
           if(trace)
            {var match$1=trace[2];
             
             if(match$1)
              {var match$2=match$1[2];
               
               if(match$2)
                {var match$3=match$2[2];
                 
                 if(match$3)
                  {var match$4=match$3[1][1][1];
                   
                   if(typeof match$4==="number")
                    {switch(match$4){}}
                   else
                    {switch(match$4[0])
                      {case 5:
                        throw [0,
                               $$Error,
                               loc,
                               env,
                               /* Field_type_mismatch */[1,"method",match$4[1],match$3[2]]];
                        
                       default:exit$1=324;}}
                   }
                 else
                  {exit$1=324;}
                 }
               else
                {exit$1=324;}
               }
             else
              {exit$1=324;}
             }
           else
            {exit$1=324;}
           
           switch(exit$1)
            {case 324:
              throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"typing/typeclass.ml",261,12]];
              
             }
           }
         else
          {throw exn;}
         }
       
       var over_meths=Types["Concr"][8](cl_sig[3],concr_meths);
       
       var concr_vals$1=concr_vals(cl_sig[2]);
       
       var over_vals=Types["Concr"][8](concr_vals$1,warn_vals);
       
       var exit$2;
       
       if(ovf)
        {if(ovf[1]!==0)
          {var exit$3;
           
           switch(parent[0])
            {case 0:var cname=Path["name"](/* None */0,parent[1]);
             case 1:exit$3=318;
             case 2:exit$3=318;
             }
           
           switch(exit$3){case 318:var cname="inherited";}
           
           if(!Types["Concr"][2](over_meths))
            {Location["prerr_warning"]
              (loc,
               /* Method_override */[2,
                /* :: */[0,cname,Types["Concr"][20](over_meths)]])}
           else
            {}
           
           if(!Types["Concr"][2](over_vals))
            {Location["prerr_warning"]
              (loc,
               /* Instance_variable_override */[5,
                /* :: */[0,cname,Types["Concr"][20](over_vals)]])}
           else
            {}
           }
         else
          {if(Types["Concr"][2](over_meths)&&Types["Concr"][2](over_vals))
            {throw [0,$$Error,loc,env,[/* No_overriding */23,"",""]];}
           else
            {exit$2=320;}
           }
         }
       else
        {exit$2=320;}
       
       switch(exit$2){case 320:}
       
       var concr_meths$1=Types["Concr"][7](cl_sig[3],concr_meths);
       
       var warn_vals$1=Types["Concr"][7](concr_vals$1,warn_vals);
       
       return /* tuple */[0,cl_sig,concr_meths$1,warn_vals$1];
       
      case 2:exit=326;
      }
    
    switch(exit)
     {case 326:throw [0,$$Error,loc,env,/* Structure_expected */[2,parent]];}
    };

var
 virtual_method=
  function(val_env,meths,self_type,lab,priv,sty,loc)
   {var match=Ctype["filter_self_method"](val_env,lab,priv,meths,self_type);
    
    var sty$1=Ast_helper["Typ"][15](sty);
    
    var cty=Typetexp["transl_simple_type"](val_env,/* false */0,sty$1);
    
    var ty=cty[2];
    
    try
     {Ctype["unify"](val_env,ty,match[2])}
    catch(exn)
     {if(exn[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               loc,
               val_env,
               /* Field_type_mismatch */[1,"method",lab,exn[2]]];
        }
      else
       {throw exn;}
      }
    
    return cty;
    };

var delayed_meth_specs=[0,/* [] */0];

var
 declare_method=
  function(val_env,meths,self_type,lab,priv,sty,loc)
   {var match=Ctype["filter_self_method"](val_env,lab,priv,meths,self_type);
    
    var ty$prime=match[2];
    
    var
     unif=
      function(ty)
       {try
         {return Ctype["unify"](val_env,ty,ty$prime);}
        catch(exn)
         {if(exn[1]===Ctype["Unify"])
           {throw [0,
                   $$Error,
                   loc,
                   val_env,
                   /* Field_type_mismatch */[1,"method",lab,exn[2]]];
            }
          else
           {throw exn;}
          }
        };
    
    var sty$1=Ast_helper["Typ"][15](sty);
    
    var match$1=sty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 8:
         if(match$1[1])
          {exit=303;}
         else
          {if(priv!==0)
            {var sty$prime=match$1[2];
             
             var
              returned_cty=
               ctyp(/* Ttyp_any */0,Ctype["newty"](/* Tnil */0),val_env,loc);
             
             delayed_meth_specs[1]=
             /* :: */[0,
              [246,
               function(param)
                {var
                  cty=
                   Typetexp["transl_simple_type_univars"](val_env,sty$prime);
                 
                 var ty=cty[2];
                 
                 unif(ty);
                 returned_cty[1]=/* Ttyp_poly */[8,/* [] */0,cty];
                 return returned_cty[2]=ty,0;
                 }],
              delayed_meth_specs[1]];
             return returned_cty;
             }
           else
            {exit=303;}
           }
         
        default:exit=303;}}
    
    switch(exit)
     {case 303:
       var cty=Typetexp["transl_simple_type"](val_env,/* false */0,sty$1);
       
       var ty=cty[2];
       
       unif(ty);
       return cty;
       
      }
    };

var
 type_constraint=
  function(val_env,sty,sty$prime,loc)
   {var cty=Typetexp["transl_simple_type"](val_env,/* false */0,sty);
    
    var ty=cty[2];
    
    var
     cty$prime=
      Typetexp["transl_simple_type"](val_env,/* false */0,sty$prime);
    
    var ty$prime=cty$prime[2];
    
    try
     {Ctype["unify"](val_env,ty,ty$prime)}
    catch(exn)
     {if(exn[1]===Ctype["Unify"])
       {throw [0,$$Error,loc,val_env,/* Unconsistent_constraint */[0,exn[2]]];
        }
      else
       {throw exn;}
      }
    
    return /* tuple */[0,cty,cty$prime];
    };

var
 make_method=
  function(loc,cl_num,expr)
   {var mkid=function(s){return Typedtree["mkloc"](s,loc);};
    
    return Ast_helper["Exp"][6]
            (/* Some */[0,expr[2]],
             /* None */0,
             "",
             /* None */0,
             Ast_helper["Pat"][5]
              (/* Some */[0,loc],
               /* None */0,
               Ast_helper["Pat"][4]
                (/* Some */[0,loc],/* None */0,mkid("self-*")),
               mkid(Pervasives["^"]("self-",cl_num))),
             expr);
    };

var
 add_val=
  function(env,loc,lab,param,val_sig)
   {var virt=param[2];
    
    try
     {var match=Types["Vars"][22](lab,val_sig);
      
      var virt$prime=match[2];
      
      if(virt$prime===/* Concrete */1)
       {var virt$1=virt$prime;}
      else
       {var virt$1=virt;}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var virt$1=virt;}
      else
       {throw exn;}
      }
    
    return Types["Vars"][4]
            (lab,/* tuple */[0,param[1],virt$1,param[3]],val_sig);
    };

var
 class_type_field=
  function(env,self_type,meths,param,ctf)
   {var inher=param[4];
    
    var concr_meths=param[3];
    
    var val_sig=param[2];
    
    var fields=param[1];
    
    var loc=ctf[2];
    
    var mkctf=function(desc){return /* record */[0,desc,loc,ctf[3]];};
    
    var match=ctf[1];
    
    switch(match[0])
     {case 0:
       var sparent=match[1];
       
       var parent=class_type(env,sparent);
       
       var match$1=parent[2];
       
       var exit;
       
       switch(match$1[0])
        {case 0:
          var inher$1=/* :: */[0,/* tuple */[0,match$1[1],match$1[2]],inher];
         case 1:exit=254;
         case 2:exit=254;
         }
       
       switch(exit){case 254:var inher$1=inher;}
       
       var
        match$2=
         inheritance
          (self_type,
           env,
           /* None */0,
           concr_meths,
           Types["Concr"][1],
           sparent[2],
           parent[2]);
       
       var
        val_sig$1=
         Types["Vars"][11](add_val(env,sparent[2]),match$2[1][2],val_sig);
       
       return /* tuple */[0,
               /* :: */[0,mkctf(/* Tctf_inherit */[0,parent]),fields],
               val_sig$1,
               match$2[2],
               inher$1];
       
      case 1:
       var match$3=match[1];
       
       var virt=match$3[3];
       
       var mut=match$3[2];
       
       var lab=match$3[1];
       
       var cty=Typetexp["transl_simple_type"](env,/* false */0,match$3[4]);
       
       var ty=cty[2];
       
       return /* tuple */[0,
               /* :: */[0,
                mkctf(/* Tctf_val */[1,/* tuple */[0,lab,mut,virt,cty]]),
                fields],
               add_val(env,ctf[2],lab,/* tuple */[0,mut,virt,ty],val_sig),
               concr_meths,
               inher];
       
      case 2:
       var match$4=match[1];
       
       var virt$1=match$4[3];
       
       var priv=match$4[2];
       
       var lab$1=match$4[1];
       
       var
        cty$1=
         declare_method(env,meths,self_type,lab$1,priv,match$4[4],ctf[2]);
       
       if(virt$1!==0)
        {var concr_meths$1=Types["Concr"][4](lab$1,concr_meths);}
       else
        {var concr_meths$1=concr_meths;}
       
       return /* tuple */[0,
               /* :: */[0,
                mkctf
                 (/* Tctf_method */[2,/* tuple */[0,lab$1,priv,virt$1,cty$1]]),
                fields],
               val_sig,
               concr_meths$1,
               inher];
       
      case 3:
       var match$5=match[1];
       
       var match$6=type_constraint(env,match$5[1],match$5[2],ctf[2]);
       
       return /* tuple */[0,
               /* :: */[0,
                mkctf
                 (/* Tctf_constraint */[3,
                   /* tuple */[0,match$6[1],match$6[2]]]),
                fields],
               val_sig,
               concr_meths,
               inher];
       
      case 4:
       var x=match[1];
       
       Typetexp["warning_attribute"](/* :: */[0,x,/* [] */0]);
       return /* tuple */[0,
               /* :: */[0,mkctf(/* Tctf_attribute */[4,x]),fields],
               val_sig,
               concr_meths,
               inher];
       
      case 5:throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      }
    };

var
 class_signature=
  function(env,param)
   {var sty=param[1];
    
    var meths=[0,Types["Meths"][1]];
    
    var self_cty=Typetexp["transl_simple_type"](env,/* false */0,sty);
    
    var
     self_cty$1=
      /* record */[0,
       self_cty[1],
       Ctype["expand_head"](env,self_cty[2]),
       self_cty[3],
       self_cty[4],
       self_cty[5]];
    
    var self_type=self_cty$1[2];
    
    var dummy_obj=Ctype["newvar"](/* None */0,/* () */0);
    
    Ctype["unify"]
     (env,
      Ctype["filter_method"](env,dummy_method,/* Private */0,dummy_obj),
      Ctype["newty"]([/* Ttuple */2,/* [] */0]));
    try
     {Ctype["unify"](env,self_type,dummy_obj)}
    catch(exn)
     {if(exn[1]===Ctype["Unify"])
       {throw [0,$$Error,sty[2],env,/* Pattern_type_clash */[5,self_type]];}
      else
       {throw exn;}
      }
    
    Typetexp["warning_enter_scope"](/* () */0);
    var
     match=
      List["fold_left"]
       (class_type_field(env,self_type,meths),
        /* tuple */[0,/* [] */0,Types["Vars"][1],Types["Concr"][1],/* [] */0],
        param[2]);
    
    Typetexp["warning_leave_scope"](/* () */0);
    var cty=/* record */[0,self_type,match[2],match[3],match[4]];
    
    return /* record */[0,self_cty$1,List["rev"](match[1]),cty];
    };

var
 class_type=
  function(env,scty)
   {var
     cltyp=
      function(desc,typ){return /* record */[0,desc,typ,env,scty[2],scty[3]];};
    
    var match=scty[1];
    
    switch(match[0])
     {case 0:
       var styl=match[2];
       
       var lid=match[1];
       
       var match$1=Typetexp["find_class_type"](env,scty[2],lid[1]);
       
       var decl=match$1[2];
       
       var path=match$1[1];
       
       if(Path["same"](decl[3],unbound_class))
        {throw [0,$$Error,scty[2],env,/* Unbound_class_type_2 */[7,lid[1]]];}
       else
        {}
       
       var match$2=Ctype["instance_class"](decl[1],decl[2]);
       
       var params=match$2[1];
       
       if(List["length"](params)!==List["length"](styl))
        {throw [0,
                $$Error,
                scty[2],
                env,
                /* Parameter_arity_mismatch */[11,
                 lid[1],
                 List["length"](params),
                 List["length"](styl)]];
         }
       else
        {}
       
       var
        ctys=
         List["map2"]
          (function(sty,ty)
            {var
              cty$prime=
               Typetexp["transl_simple_type"](env,/* false */0,sty);
             
             var ty$prime=cty$prime[2];
             
             try
              {Ctype["unify"](env,ty$prime,ty)}
             catch(exn)
              {if(exn[1]===Ctype["Unify"])
                {throw [0,
                        $$Error,
                        sty[2],
                        env,
                        /* Parameter_mismatch */[12,exn[2]]];
                 }
               else
                {throw exn;}
               }
             
             return cty$prime;
             },
           styl,
           params);
       
       var typ=/* Cty_constr */[0,path,params,match$2[2]];
       
       return cltyp(/* Tcty_constr */[0,path,lid,ctys],typ);
       
      case 1:
       var clsig=class_signature(env,match[1]);
       
       var typ$1=/* Cty_signature */[1,clsig[3]];
       
       return cltyp(/* Tcty_signature */[1,clsig],typ$1);
       
      case 2:
       var l=match[1];
       
       var cty=Typetexp["transl_simple_type"](env,/* false */0,match[2]);
       
       var ty=cty[2];
       
       var clty=class_type(env,match[3]);
       
       var typ$2=/* Cty_arrow */[2,l,ty,clty[2]];
       
       return cltyp(/* Tcty_arrow */[2,l,cty,clty],typ$2);
       
      case 3:throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      }
    };

var
 class_type$1=
  function(env,scty)
   {delayed_meth_specs[1]=/* [] */0;
    var cty=class_type(env,scty);
    
    List["iter"]
     (function(prim)
       {var tag=CamlPrimitive["caml_obj_tag"](prim);
        
        if(tag===250)
         {return prim[1];}
        else
         {if(tag===246)
           {return CamlinternalLazy["force_lazy_block"](prim);}
          else
           {return prim;}
          }
        },
      List["rev"](delayed_meth_specs[1]));
    delayed_meth_specs[1]=/* [] */0;
    return cty;
    };

var
 class_field=
  function(self_loc,cl_num,self_type,meths,vars,param,cf)
   {var local_vals=param[9];
    
    var local_meths=param[8];
    
    var inher=param[7];
    
    var warn_vals=param[6];
    
    var concr_meths=param[5];
    
    var fields=param[4];
    
    var par_env=param[3];
    
    var met_env=param[2];
    
    var val_env=param[1];
    
    var loc=cf[2];
    
    var mkcf=function(desc){return /* record */[0,desc,loc,cf[3]];};
    
    var match=cf[1];
    
    switch(match[0])
     {case 0:
       var $$super=match[3];
       
       var sparent=match[2];
       
       var ovf=match[1];
       
       var parent=class_expr(cl_num,val_env,par_env,sparent);
       
       var match$1=parent[3];
       
       var exit;
       
       switch(match$1[0])
        {case 0:
          var inher$1=/* :: */[0,/* tuple */[0,match$1[1],match$1[2]],inher];
         case 1:exit=130;
         case 2:exit=130;
         }
       
       switch(exit){case 130:var inher$1=inher;}
       
       var
        match$2=
         inheritance
          (self_type,
           val_env,
           /* Some */[0,ovf],
           concr_meths,
           warn_vals,
           sparent[2],
           parent[3]);
       
       var cl_sig=match$2[1];
       
       var
        match$3=
         Types["Vars"][11]
          (function(lab,info,param$1)
            {var
              match$4=
               enter_val
                (cl_num,
                 vars,
                 /* true */1,
                 lab,
                 info[1],
                 info[2],
                 info[3],
                 param$1[1],
                 param$1[2],
                 param$1[3],
                 sparent[2]);
             
             return /* tuple */[0,
                     match$4[2],
                     match$4[3],
                     match$4[4],
                     /* :: */[0,/* tuple */[0,lab,match$4[1]],param$1[4]]];
             },
           cl_sig[2],
           /* tuple */[0,val_env,met_env,par_env,/* [] */0]);
       
       var inh_vars=match$3[4];
       
       var par_env$1=match$3[3];
       
       var met_env$1=match$3[2];
       
       var val_env$1=match$3[1];
       
       var
        inh_meths=
         Types["Concr"][14]
          (function(lab,rem)
            {return /* :: */[0,/* tuple */[0,lab,Ident["create"](lab)],rem];},
           cl_sig[3],
           /* [] */0);
       
       if($$super)
        {var
          match$4=
           enter_met_env
            (/* Some */[0,function(s){return /* Unused_ancestor */[20,s];}],
             sparent[2],
             $$super[1],
             /* Val_anc */[3,inh_meths,cl_num],
             self_type,
             val_env$1,
             met_env$1,
             par_env$1);
         
         var match$5=/* tuple */[0,match$4[2],match$4[3],match$4[4]];
         }
       else
        {var match$5=/* tuple */[0,val_env$1,met_env$1,par_env$1];}
       
       return /* tuple */[0,
               match$5[1],
               match$5[2],
               match$5[3],
               /* :: */[0,
                [246,
                 function(param$1)
                  {return mkcf
                           (/* Tcf_inherit */[0,ovf,parent,$$super,inh_vars,inh_meths]);
                   }],
                fields],
               match$2[2],
               match$2[3],
               inher$1,
               local_meths,
               local_vals];
       
      case 1:
       var match$6=match[1];
       
       var match$7=match$6[3];
       
       var mut=match$6[2];
       
       var lab=match$6[1];
       
       switch(match$7[0])
        {case 0:
          if(Clflags["principal"][1]){Ctype["begin_def"](/* () */0)}else{}
          
          var
           cty=
            Typetexp["transl_simple_type"](val_env,/* false */0,match$7[1]);
          
          var ty=cty[2];
          
          if(Clflags["principal"][1])
           {Ctype["end_def"](/* () */0),Ctype["generalize_structure"](ty)}
          else
           {}
          
          var
           match$8=
            enter_val
             (cl_num,
              vars,
              /* false */0,
              lab[1],
              mut,
              /* Virtual */0,
              ty,
              val_env,
              met_env,
              par_env,
              loc);
          
          var met_env$prime=match$8[3];
          
          var id=match$8[1];
          
          return /* tuple */[0,
                  match$8[2],
                  met_env$prime,
                  match$8[4],
                  /* :: */[0,
                   [246,
                    function(param$1)
                     {return mkcf
                              (/* Tcf_val */[1,
                                lab,
                                mut,
                                id,
                                /* Tcfk_virtual */[0,cty],
                                met_env===met_env$prime]);
                      }],
                   fields],
                  concr_meths,
                  warn_vals,
                  inher,
                  local_meths,
                  local_vals];
          
         case 1:
          var ovf$1=match$7[1];
          
          if(Types["Concr"][3](lab[1],local_vals))
           {throw [0,
                   $$Error,
                   loc,
                   val_env,
                   /* Duplicate */[24,"instance variable",lab[1]]];
            }
          else
           {}
          
          if(Types["Concr"][3](lab[1],warn_vals))
           {if(ovf$1===/* Fresh */1)
             {Location["prerr_warning"]
               (lab[2],
                /* Instance_variable_override */[5,
                 /* :: */[0,lab[1],/* [] */0]])}
            else
             {}
            }
          else
           {if(ovf$1===/* Override */0)
             {throw [0,
                     $$Error,
                     loc,
                     val_env,
                     /* No_overriding */[23,"instance variable",lab[1]]];
              }
            else
             {}
            }
          
          if(Clflags["principal"][1]){Ctype["begin_def"](/* () */0)}else{}
          
          try
           {var exp=Typecore["type_exp"](val_env,match$7[2]);}
          catch(exn)
           {var exit$1;
            
            if(exn[1]===Ctype["Unify"])
             {var match$9=exn[2];
              
              if(match$9)
               {if(match$9[2])
                 {exit$1=137;}
                else
                 {throw [0,
                         $$Error,
                         loc,
                         val_env,
                         /* Make_nongen_seltype */[17,match$9[1][1]]];
                  }
                }
              else
               {exit$1=137;}
              }
            else
             {exit$1=137;}
            
            switch(exit$1){case 137:throw exn;}
            }
          
          if(Clflags["principal"][1])
           {Ctype["end_def"](/* () */0),Ctype["generalize_structure"](exp[4])}
          else
           {}
          
          var
           match$10=
            enter_val
             (cl_num,
              vars,
              /* false */0,
              lab[1],
              mut,
              /* Concrete */1,
              exp[4],
              val_env,
              met_env,
              par_env,
              loc);
          
          var met_env$prime$1=match$10[3];
          
          var id$1=match$10[1];
          
          return /* tuple */[0,
                  match$10[2],
                  met_env$prime$1,
                  match$10[4],
                  /* :: */[0,
                   [246,
                    function(param$1)
                     {return mkcf
                              (/* Tcf_val */[1,
                                lab,
                                mut,
                                id$1,
                                /* Tcfk_concrete */[1,ovf$1,exp],
                                met_env===met_env$prime$1]);
                      }],
                   fields],
                  concr_meths,
                  Types["Concr"][4](lab[1],warn_vals),
                  inher,
                  local_meths,
                  Types["Concr"][4](lab[1],local_vals)];
          
         }
       
      case 2:
       var match$11=match[1];
       
       var match$12=match$11[3];
       
       var priv=match$11[2];
       
       var lab$1=match$11[1];
       
       switch(match$12[0])
        {case 0:
          var
           cty$1=
            virtual_method
             (val_env,meths,self_type,lab$1[1],priv,match$12[1],loc);
          
          return /* tuple */[0,
                  val_env,
                  met_env,
                  par_env,
                  /* :: */[0,
                   [246,
                    function(param$1)
                     {return mkcf
                              (/* Tcf_method */[2,lab$1,priv,/* Tcfk_virtual */[0,cty$1]]);
                      }],
                   fields],
                  concr_meths,
                  warn_vals,
                  inher,
                  local_meths,
                  local_vals];
          
         case 1:
          var expr=match$12[2];
          
          var ovf$2=match$12[1];
          
          var match$13=expr[1];
          
          switch(match$13[0])
           {case 28:var expr$1=expr;
            default:
             var
              expr$1=
               Ast_helper["Exp"][31]
                (/* Some */[0,expr[2]],/* None */0,expr,/* None */0);
             }
          
          if(Types["Concr"][3](lab$1[1],local_meths))
           {throw [0,
                   $$Error,
                   loc,
                   val_env,
                   /* Duplicate */[24,"method",lab$1[1]]];
            }
          else
           {}
          
          if(Types["Concr"][3](lab$1[1],concr_meths))
           {if(ovf$2===/* Fresh */1)
             {Location["prerr_warning"]
               (loc,/* Method_override */[2,/* :: */[0,lab$1[1],/* [] */0]])}
            else
             {}
            }
          else
           {if(ovf$2===/* Override */0)
             {throw [0,
                     $$Error,
                     loc,
                     val_env,
                     /* No_overriding */[23,"method",lab$1[1]]];
              }
            else
             {}
            }
          
          var
           match$14=
            Ctype["filter_self_method"](val_env,lab$1[1],priv,meths,self_type);
          
          var ty$1=match$14[2];
          
          try
           {var match$15=expr$1[1];
            
            switch(match$15[0])
             {case 28:
               var sty=match$15[2];
               
               var sbody=match$15[1];
               
               if(sty)
                {var sty$1=Ast_helper["Typ"][15](sty[1]);
                 
                 var
                  cty$prime=
                   Typetexp["transl_simple_type"](val_env,/* false */0,sty$1);
                 
                 var ty$prime=cty$prime[2];
                 
                 Ctype["unify"](val_env,ty$prime,ty$1)}
               else
                {}
               
               var match$16=Ctype["repr"](ty$1)[1];
               
               var exit$2;
               
               if(typeof match$16==="number")
                {switch(match$16){}}
               else
                {switch(match$16[0])
                  {case 0:
                    var ty$prime$1=Ctype["newvar"](/* None */0,/* () */0);
                    
                    Ctype["unify"]
                     (val_env,
                      Ctype["newty"](/* Tpoly */[10,ty$prime$1,/* [] */0]),
                      ty$1),
                    Ctype["unify"]
                     (val_env,Typecore["type_approx"](val_env,sbody),ty$prime$1);
                   case 10:
                    var
                     match$17=
                      Ctype["instance_poly"]
                       (/* None */0,/* false */0,match$16[2],match$16[1]);
                    
                    var ty2=Typecore["type_approx"](val_env,sbody);
                    
                    Ctype["unify"](val_env,ty2,match$17[2]);
                   default:exit$2=149;}}
               
               switch(exit$2)
                {case 149:
                  throw [0,
                         CamlPrimitive["caml_global_data"]["Assert_failure"],
                         [0,"typing/typeclass.ml",662,17]];
                  
                 }
               
              default:
               throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"typing/typeclass.ml",664,13]];
               }
            }
          catch(exn$1)
           {if(exn$1[1]===Ctype["Unify"])
             {throw [0,
                     $$Error,
                     loc,
                     val_env,
                     /* Field_type_mismatch */[1,"method",lab$1[1],exn$1[2]]];
              }
            else
             {throw exn$1;}
            }
          
          var meth_expr=make_method(self_loc,cl_num,expr$1);
          
          var vars_local=vars[1];
          
          var
           field=
            [246,
             function(param$1)
              {var
                meth_type=
                 Btype["newgenty"]
                  (/* Tarrow */[1,"",self_type,ty$1,/* Cok */0]);
               
               Ctype["raise_nongen_level"](/* () */0);
               vars[1]=vars_local;
               var
                texp=
                 Typecore["type_expect"]
                  (/* None */0,met_env,meth_expr,meth_type);
               
               Ctype["end_def"](/* () */0);
               return mkcf
                       (/* Tcf_method */[2,
                         lab$1,
                         priv,
                         /* Tcfk_concrete */[1,ovf$2,texp]]);
               }];
          
          return /* tuple */[0,
                  val_env,
                  met_env,
                  par_env,
                  /* :: */[0,field,fields],
                  Types["Concr"][4](lab$1[1],concr_meths),
                  warn_vals,
                  inher,
                  Types["Concr"][4](lab$1[1],local_meths),
                  local_vals];
          
         }
       
      case 3:
       var match$18=match[1];
       
       var match$19=type_constraint(val_env,match$18[1],match$18[2],loc);
       
       var cty$prime$1=match$19[2];
       
       var cty$2=match$19[1];
       
       return /* tuple */[0,
               val_env,
               met_env,
               par_env,
               /* :: */[0,
                [246,
                 function(param$1)
                  {return mkcf(/* Tcf_constraint */[3,cty$2,cty$prime$1]);}],
                fields],
               concr_meths,
               warn_vals,
               inher,
               local_meths,
               local_vals];
       
      case 4:
       var expr$2=make_method(self_loc,cl_num,match[1]);
       
       var vars_local$1=vars[1];
       
       var
        field$1=
         [246,
          function(param$1)
           {Ctype["raise_nongen_level"](/* () */0);
            var
             meth_type=
              Ctype["newty"]
               (/* Tarrow */[1,
                 "",
                 self_type,
                 Ctype["instance_def"](Predef["type_unit"]),
                 /* Cok */0]);
            
            vars[1]=vars_local$1;
            var
             texp=
              Typecore["type_expect"](/* None */0,met_env,expr$2,meth_type);
            
            Ctype["end_def"](/* () */0);
            return mkcf(/* Tcf_initializer */[4,texp]);
            }];
       
       return /* tuple */[0,
               val_env,
               met_env,
               par_env,
               /* :: */[0,field$1,fields],
               concr_meths,
               warn_vals,
               inher,
               local_meths,
               local_vals];
       
      case 5:
       var x=match[1];
       
       Typetexp["warning_attribute"](/* :: */[0,x,/* [] */0]);
       return /* tuple */[0,
               val_env,
               met_env,
               par_env,
               /* :: */[0,
                [246,
                 function(param$1){return mkcf(/* Tcf_attribute */[5,x]);}],
                fields],
               concr_meths,
               warn_vals,
               inher,
               local_meths,
               local_vals];
       
      case 6:throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      }
    };

var
 class_structure=
  function(cl_num,$$final,val_env,met_env,loc,param)
   {var spat=param[1];
    
    var init=spat[2];
    
    var self_loc=/* record */[0,init[1],init[2],/* true */1];
    
    var self_type=Ctype["newvar"](/* None */0,/* () */0);
    
    Ctype["unify"]
     (val_env,
      Ctype["filter_method"](val_env,dummy_method,/* Private */0,self_type),
      Ctype["newty"]([/* Ttuple */2,/* [] */0]));
    if($$final)
     {var private_self=Ctype["newvar"](/* None */0,/* () */0);}
    else
     {var private_self=self_type;}
    
    var
     match=
      Typecore["type_self_pattern"]
       (cl_num,private_self,val_env,met_env,met_env,spat);
    
    var val_env$1=match[4];
    
    var vars=match[3];
    
    var meths=match[2];
    
    var pat=match[1];
    
    var public_self=pat[4];
    
    if($$final)
     {var
       ty=
        Ctype["newty"]
         (/* Tobject */[4,
           Ctype["newvar"](/* None */0,/* () */0),
           [0,/* None */0]]);
      }
    else
     {var ty=self_type;}
    
    try
     {Ctype["unify"](val_env$1,public_self,ty)}
    catch(exn)
     {if(exn[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               spat[2],
               val_env$1,
               /* Pattern_type_clash */[5,public_self]];
        }
      else
       {throw exn;}
      }
    
    var
     get_methods=
      function(ty)
       {return Ctype["flatten_fields"]
                 (Ctype["object_fields"](Ctype["expand_head"](val_env$1,ty)))
                [1];
        };
    
    if($$final)
     {List["iter"]
       (function(param$1)
         {if(Btype["field_kind_repr"](param$1[2])===/* Fpresent */0)
           {var k=/* Public */1;}
          else
           {var k=/* Private */0;}
          
          try
           {return Ctype["unify"]
                    (val_env$1,
                     param$1[3],
                     Ctype["filter_method"](val_env$1,param$1[1],k,self_type));
            }
          catch(exn$1)
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"typing/typeclass.ml",760,18]];
            }
          },
        get_methods(public_self))}
    else
     {}
    
    Typetexp["warning_enter_scope"](/* () */0);
    var
     match$1=
      List["fold_left"]
       (class_field(self_loc,cl_num,self_type,meths,vars),
        /* tuple */[0,
         val_env$1,
         match[5],
         match[6],
         /* [] */0,
         Types["Concr"][1],
         Types["Concr"][1],
         /* [] */0,
         Types["Concr"][1],
         Types["Concr"][1]],
        param[2]);
    
    Typetexp["warning_leave_scope"](/* () */0);
    Ctype["unify"](val_env$1,self_type,Ctype["newvar"](/* None */0,/* () */0));
    var
     sign=
      /* record */[0,
       public_self,
       Types["Vars"][23]
        (function(param$1)
          {return /* tuple */[0,param$1[2],param$1[3],param$1[4]];},
         vars[1]),
       match$1[5],
       match$1[7]];
    
    var methods=get_methods(self_type);
    
    var
     priv_meths=
      List["filter"]
       (function(param$1)
         {return Btype["field_kind_repr"](param$1[2])!==/* Fpresent */0;},
        methods);
    
    if($$final)
     {Ctype["close_object"](self_type);
      var
       mets=
        virtual_methods(/* record */[0,self_type,sign[2],sign[3],sign[4]]);
      
      var
       vals=
        Types["Vars"][11]
         (function(name,param$1,l)
           {if(param$1[2]===/* Virtual */0)
             {return /* :: */[0,name,l];}
            else
             {return l;}
            },
          sign[2],
          /* [] */0);
      
      if(mets!==/* [] */0||vals!==/* [] */0)
       {throw [0,
               $$Error,
               loc,
               val_env$1,
               /* Virtual_class */[10,/* true */1,$$final,mets,vals]];
        }
      else
       {}
      
      var
       self_methods=
        List["fold_right"]
         (function(param$1,rem)
           {var kind=param$1[2];
            
            var lab=param$1[1];
            
            if(CamlPrimitive["caml_string_equal"](lab,dummy_method))
             {var match$2=Btype["field_kind_repr"](kind);
              
              if(typeof match$2==="number")
               {return rem;}
              else
               {Btype["set_kind"](match$2[1],/* Fabsent */1);return rem;}
              }
            else
             {return Ctype["newty"]
                      (/* Tfield */[5,lab,Btype["copy_kind"](kind),param$1[3],rem]);
              }
            },
          methods,
          Ctype["newty"](/* Tnil */0));
      
      try
       {Ctype["unify"]
         (val_env$1,
          private_self,
          Ctype["newty"](/* Tobject */[4,self_methods,[0,/* None */0]])),
        Ctype["unify"](val_env$1,public_self,self_type)}
      catch(exn$1)
       {if(exn$1[1]===Ctype["Unify"])
         {throw [0,$$Error,loc,val_env$1,/* Final_self_clash */[21,exn$1[2]]];
          }
        else
         {throw exn$1;}
        }
      }
    else
     {}
    
    if(Clflags["principal"][1])
     {List["iter"]
       (function(param$1){return Ctype["generalize_spine"](param$1[3]);},
        methods)}
    else
     {}
    
    var
     fields=
      List["map"]
       (function(prim)
         {var tag=CamlPrimitive["caml_obj_tag"](prim);
          
          if(tag===250)
           {return prim[1];}
          else
           {if(tag===246)
             {return CamlinternalLazy["force_lazy_block"](prim);}
            else
             {return prim;}
            }
          },
        List["rev"](match$1[4]));
    
    if(Clflags["principal"][1])
     {List["iter"]
       (function(param$1)
         {return Ctype["unify"]
                  (val_env$1,
                   param$1[3],
                   Ctype["newvar"](/* None */0,/* () */0));
          },
        methods)}
    else
     {}
    
    var
     meths$1=
      Types["Meths"][23](function(param$1){return param$1[1];},meths[1]);
    
    var
     pub_meths$prime=
      List["filter"]
       (function(param$1)
         {return Btype["field_kind_repr"](param$1[2])===/* Fpresent */0;},
        get_methods(public_self));
    
    var names=List["map"](function(param$1){return param$1[1];});
    
    var l1=names(priv_meths);
    
    var l2=names(pub_meths$prime);
    
    var added=List["filter"](function(x){return List["mem"](x,l1);},l2);
    
    if(added!==/* [] */0)
     {Location["prerr_warning"](loc,/* Implicit_public_methods */[6,added])}
    else
     {}
    
    if($$final)
     {var sign$1=sign;}
    else
     {var
       sign$1=
        /* record */[0,
         Ctype["expand_head"](val_env$1,public_self),
         sign[2],
         sign[3],
         sign[4]];
      }
    
    return /* tuple */[0,/* record */[0,pat,fields,sign$1,meths$1],sign$1];
    };

var
 class_expr=
  function(cl_num,val_env,met_env,scl)
   {var match=scl[1];
    
    switch(match[0])
     {case 0:
       var lid=match[1];
       
       var match$1=Typetexp["find_class"](val_env,scl[2],lid[1]);
       
       var decl=match$1[2];
       
       var path=match$1[1];
       
       if(Path["same"](decl[3],unbound_class))
        {throw [0,$$Error,scl[2],val_env,/* Unbound_class_2 */[6,lid[1]]];}
       else
        {}
       
       var
        tyl=
         List["map"]
          (function(sty)
            {return Typetexp["transl_simple_type"](val_env,/* false */0,sty);},
           match[2]);
       
       var match$2=Ctype["instance_class"](decl[1],decl[2]);
       
       var clty=match$2[2];
       
       var params=match$2[1];
       
       var clty$prime=abbreviate_class_type(path,params,clty);
       
       if(List["length"](params)!==List["length"](tyl))
        {throw [0,
                $$Error,
                scl[2],
                val_env,
                /* Parameter_arity_mismatch */[11,
                 lid[1],
                 List["length"](params),
                 List["length"](tyl)]];
         }
       else
        {}
       
       List["iter2"]
        (function(cty$prime,ty)
          {var ty$prime=cty$prime[2];
           
           try
            {return Ctype["unify"](val_env,ty$prime,ty);}
           catch(exn)
            {if(exn[1]===Ctype["Unify"])
              {throw [0,
                      $$Error,
                      cty$prime[4],
                      val_env,
                      /* Parameter_mismatch */[12,exn[2]]];
               }
             else
              {throw exn;}
             }
           },
         tyl,
         params);
       var
        cl=
         rc
          (/* record */[0,
            /* Tcl_ident */[0,path,lid,tyl],
            scl[2],
            clty$prime,
            val_env,
            scl[3]]);
       
       var match$3=extract_constraints(clty);
       
       return rc
               (/* record */[0,
                 /* Tcl_constraint */[5,
                  cl,
                  /* None */0,
                  match$3[1],
                  match$3[2],
                  match$3[3]],
                 scl[2],
                 clty$prime,
                 val_env,
                 /* [] */0]);
       
      case 1:
       var
        match$4=
         class_structure(cl_num,/* false */0,val_env,met_env,scl[2],match[1]);
       
       return rc
               (/* record */[0,
                 /* Tcl_structure */[1,match$4[1]],
                 scl[2],
                 /* Cty_signature */[1,match$4[2]],
                 val_env,
                 scl[3]]);
       
      case 2:
       var match$5=match[2];
       
       var l=match[1];
       
       if(match$5)
        {var $$default=match$5[1];
         
         var loc=$$default[2];
         
         var
          scases=
           /* :: */[0,
            Ast_helper["Exp"][37]
             (Ast_helper["Pat"][9]
               (/* Some */[0,loc],
                /* None */0,
                Typedtree["mknoloc"]
                 ([/* Ldot */1,[/* Lident */0,"*predef*"],"Some"]),
                /* Some */[0,
                 Ast_helper["Pat"][4]
                  (/* Some */[0,loc],
                   /* None */0,
                   Typedtree["mknoloc"]("*sth*"))]),
              /* None */0,
              Ast_helper["Exp"][3]
               (/* Some */[0,loc],
                /* None */0,
                Typedtree["mknoloc"]([/* Lident */0,"*sth*"]))),
            /* :: */[0,
             Ast_helper["Exp"][37]
              (Ast_helper["Pat"][9]
                (/* Some */[0,loc],
                 /* None */0,
                 Typedtree["mknoloc"]
                  ([/* Ldot */1,[/* Lident */0,"*predef*"],"None"]),
                 /* None */0),
               /* None */0,
               $$default),
             /* [] */0]];
         
         var
          smatch=
           Ast_helper["Exp"][9]
            (/* Some */[0,loc],
             /* None */0,
             Ast_helper["Exp"][3]
              (/* Some */[0,loc],
               /* None */0,
               Typedtree["mknoloc"]([/* Lident */0,"*opt*"])),
             scases);
         
         var
          sfun=
           Ast_helper["Cl"][5]
            (/* Some */[0,scl[2]],
             /* None */0,
             l,
             /* None */0,
             Ast_helper["Pat"][4]
              (/* Some */[0,loc],/* None */0,Typedtree["mknoloc"]("*opt*")),
             Ast_helper["Cl"][7]
              (/* Some */[0,scl[2]],
               /* None */0,
               /* Nonrecursive */0,
               /* :: */[0,
                Ast_helper["Vb"][1]
                 (/* None */0,
                  /* None */0,
                  /* None */0,
                  /* None */0,
                  match[3],
                  smatch),
                /* [] */0],
               match[4]));
         
         return class_expr(cl_num,val_env,met_env,sfun);
         }
       else
        {if(Clflags["principal"][1]){Ctype["begin_def"](/* () */0)}else{}
         
         var
          match$6=
           Typecore["type_class_arg_pattern"]
            (cl_num,val_env,met_env,l,match[3]);
         
         var val_env$prime=match$6[3];
         
         var pat=match$6[1];
         
         if(Clflags["principal"][1])
          {Ctype["end_def"](/* () */0),
           Typecore["iter_pattern"]
            (function(param){return Ctype["generalize_structure"](param[4]);},
             pat)}
         else
          {}
         
         var
          pv=
           List["map"]
            (function(param)
              {var id=param[1];
               
               var path$1=/* Pident */[0,param[3]];
               
               var vd=Env["find_value"](path$1,val_env$prime);
               
               return /* tuple */[0,
                       id,
                       param[2],
                       /* record */[0,
                        /* Texp_ident */[0,
                         path$1,
                         Typedtree["mknoloc"](/* Lident */[0,Ident["name"](id)]),
                         vd],
                        Location["none"],
                        /* [] */0,
                        Ctype["instance"](/* None */0,val_env$prime,vd[1]),
                        val_env$prime,
                        /* [] */0]];
               },
             match$6[2]);
         
         var
          not_function=
           function(param)
            {var exit;
             
             switch(param[0])
              {case 0:exit=208;case 1:exit=208;case 2:return /* false */0;}
             
             switch(exit){case 208:return /* true */1;}
             };
         
         var
          partial=
           Typecore["check_partial"]
            (/* None */0,
             val_env,
             pat[4],
             pat[2],
             /* :: */[0,
              /* record */[0,
               pat,
               /* None */0,
               /* record */[0,
                [/* Texp_constant */1,[/* Const_int */0,1]],
                Location["none"],
                /* [] */0,
                Ctype["none"],
                Env["empty"],
                /* [] */0]],
              /* [] */0]);
         
         Ctype["raise_nongen_level"](/* () */0);
         var cl$1=class_expr(cl_num,val_env$prime,match$6[4],match[4]);
         
         Ctype["end_def"](/* () */0);
         if(Btype["is_optional"](l)&&not_function(cl$1[3]))
          {Location["prerr_warning"]
            (pat[2],/* Unerasable_optional_argument */8)}
         else
          {}
         
         return rc
                 (/* record */[0,
                   /* Tcl_fun */[2,l,pat,pv,cl$1,partial],
                   scl[2],
                   /* Cty_arrow */[2,l,Ctype["instance_def"](pat[4]),cl$1[3]],
                   val_env,
                   scl[3]]);
         }
       
      case 3:
       var sargs=match[2];
       
       if(sargs===/* [] */0)
        {Syntaxerr["ill_formed_ast"]
          (scl[2],"Function application with no argument.")}
       else
        {}
       
       if(Clflags["principal"][1]){Ctype["begin_def"](/* () */0)}else{}
       
       var cl$2=class_expr(cl_num,val_env,met_env,match[1]);
       
       if(Clflags["principal"][1])
        {Ctype["end_def"](/* () */0),
         generalize_class_type$1(/* false */0,cl$2[3])}
       else
        {}
       
       var
        nonopt_labels=
         function(ls,ty_fun)
          {var exit;
           
           switch(ty_fun[0])
            {case 0:exit=233;
             case 1:exit=233;
             case 2:
              var ty_res=ty_fun[3];
              
              var l$1=ty_fun[1];
              
              if(Btype["is_optional"](l$1))
               {return nonopt_labels(ls,ty_res);}
              else
               {return nonopt_labels(/* :: */[0,l$1,ls],ty_res);}
              
             }
           
           switch(exit){case 233:return ls;}
           };
       
       var labels=nonopt_labels(/* [] */0,cl$2[3]);
       
       var
        ignore_labels=
         Clflags["classic"][1]||
         List["length"](labels)===
         List["length"](sargs)&&
         List["for_all"]
          (function(param)
            {return CamlPrimitive["caml_string_equal"](param[1],"");},
           sargs)&&
         List["exists"]
          (function(l){return CamlPrimitive["caml_string_notequal"](l,"");},
           labels)&&
         (Location["prerr_warning"](cl$2[2],/* Labels_omitted */3),
          /* true */1);
       
       var
        type_args=
         function(args,omitted,ty_fun,ty_fun0,sargs,more_sargs)
          {var exit;
           
           switch(ty_fun[0])
            {case 0:exit=230;
             case 1:exit=230;
             case 2:
              var ty=ty_fun[2];
              
              var l$1=ty_fun[1];
              
              switch(ty_fun0[0])
               {case 0:exit=230;
                case 1:exit=230;
                case 2:
                 if(sargs!==/* [] */0||more_sargs!==/* [] */0)
                  {var ty0=ty_fun0[2];
                   
                   var name=Btype["label_name"](l$1);
                   
                   if(Btype["is_optional"](l$1))
                    {var optional=/* Optional */1;}
                   else
                    {var optional=/* Required */0;}
                   
                   if(ignore_labels&&!Btype["is_optional"](l$1))
                    {if(sargs)
                      {var match$7=sargs[1];
                       
                       throw [0,
                              $$Error,
                              match$7[2][2],
                              val_env,
                              /* Apply_wrong_label */[4,match$7[1]]];
                       }
                     else
                      {if(more_sargs)
                        {var match$8=more_sargs[1];
                         
                         var sarg0=match$8[2];
                         
                         var l$prime=match$8[1];
                         
                         if
                          (CamlPrimitive["caml_string_notequal"](l$1,l$prime)&&
                           CamlPrimitive["caml_string_notequal"](l$prime,""))
                          {throw [0,
                                  $$Error,
                                  sarg0[2],
                                  val_env,
                                  /* Apply_wrong_label */[4,l$prime]];
                           }
                         else
                          {var
                            match$9=
                             /* tuple */[0,
                              /* [] */0,
                              more_sargs[2],
                              /* Some */[0,
                               Typecore["type_argument"](val_env,sarg0,ty,ty0)]];
                           }
                         }
                       else
                        {throw [0,
                                CamlPrimitive["caml_global_data"]["Assert_failure"],
                                [0,"typing/typeclass.ml",1017,20]];
                         }
                       }
                     }
                   else
                    {try
                      {try
                        {var match$10=Btype["extract_label"](name,sargs);
                         
                         var
                          match$11=
                           /* tuple */[0,
                            match$10[1],
                            match$10[2],
                            Pervasives["@"](match$10[3],match$10[4]),
                            more_sargs];
                         }
                       catch(exn)
                        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                          {var match$12=Btype["extract_label"](name,more_sargs);
                           
                           var
                            match$11=
                             /* tuple */[0,
                              match$12[1],
                              match$12[2],
                              Pervasives["@"](sargs,match$12[3]),
                              match$12[4]];
                           }
                         else
                          {throw exn;}
                         }
                       
                       var sarg0$1=match$11[2];
                       
                       var l$prime$1=match$11[1];
                       
                       if
                        (optional===
                         /* Required */0&&
                         Btype["is_optional"](l$prime$1))
                        {Location["prerr_warning"]
                          (sarg0$1[2],/* Nonoptional_label */[26,l$1])}
                       else
                        {}
                       
                       if
                        (optional===
                         /* Required */0||
                         Btype["is_optional"](l$prime$1))
                        {var
                          $js=
                           /* Some */[0,
                            Typecore["type_argument"](val_env,sarg0$1,ty,ty0)];
                         }
                       else
                        {var ty$prime=Typecore["extract_option_type"](val_env,ty);
                         
                         var ty0$prime=Typecore["extract_option_type"](val_env,ty0);
                         
                         var
                          arg=
                           Typecore["type_argument"]
                            (val_env,sarg0$1,ty$prime,ty0$prime);
                         
                         var $js=/* Some */[0,Typecore["option_some"](arg)];
                         }
                       var match$9=/* tuple */[0,match$11[3],match$11[4],$js];
                       }
                     catch(exn$1)
                      {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                        {var
                          match$9=
                           /* tuple */[0,
                            sargs,
                            more_sargs,
                            Btype["is_optional"](l$1)&&
                             (List["mem_assoc"]("",sargs)||
                              List["mem_assoc"]("",more_sargs))
                             ?/* Some */[0,Typecore["option_none"](ty0,Location["none"])]
                             :/* None */0];
                         }
                       else
                        {throw exn$1;}
                       }
                     }
                   
                   var arg$1=match$9[3];
                   
                   if(arg$1===/* None */0)
                    {var omitted$1=/* :: */[0,/* tuple */[0,l$1,ty0],omitted];}
                   else
                    {var omitted$1=omitted;}
                   
                   return type_args
                           (/* :: */[0,/* tuple */[0,l$1,arg$1,optional],args],
                            omitted$1,
                            ty_fun[3],
                            ty_fun0[3],
                            match$9[1],
                            match$9[2]);
                   }
                 else
                  {exit=230;}
                 
                }
              
             }
           
           switch(exit)
            {case 230:
              var match$13=Pervasives["@"](sargs,more_sargs);
              
              if(match$13)
               {if(omitted!==/* [] */0)
                 {var match$14=match$13[1];
                  
                  throw [0,
                         $$Error,
                         match$14[2][2],
                         val_env,
                         /* Apply_wrong_label */[4,match$14[1]]];
                  }
                else
                 {throw [0,
                         $$Error,
                         cl$2[2],
                         val_env,
                         /* Cannot_apply */[3,cl$2[3]]];
                  }
                }
              else
               {return /* tuple */[0,
                        List["rev"](args),
                        List["fold_left"]
                         (function(ty_fun,param)
                           {return /* Cty_arrow */[2,param[1],param[2],ty_fun];},
                          ty_fun0,
                          omitted)];
                }
              
             }
           };
       
       var match$7=Ctype["instance_class"](/* [] */0,cl$2[3]);
       
       var ty_fun0=match$7[2];
       
       if(ignore_labels)
        {var
          match$8=
           type_args(/* [] */0,/* [] */0,cl$2[3],ty_fun0,/* [] */0,sargs);
         }
       else
        {var
          match$8=
           type_args(/* [] */0,/* [] */0,cl$2[3],ty_fun0,sargs,/* [] */0);
         }
       
       return rc
               (/* record */[0,
                 /* Tcl_apply */[3,cl$2,match$8[1]],
                 scl[2],
                 match$8[2],
                 val_env,
                 scl[3]]);
       
      case 4:
       var rec_flag=match[1];
       
       try
        {var
          match$9=
           Typecore["type_let"](val_env,rec_flag,match[2],/* None */0);
         }
       catch(exn)
        {var exit;
         
         if(exn[1]===Ctype["Unify"])
          {var match$10=exn[2];
           
           if(match$10)
            {if(match$10[2])
              {exit=242;}
             else
              {throw [0,
                      $$Error,
                      scl[2],
                      val_env,
                      /* Make_nongen_seltype */[17,match$10[1][1]]];
               }
             }
           else
            {exit=242;}
           }
         else
          {exit=242;}
         
         switch(exit){case 242:throw exn;}
         }
       
       var val_env$1=match$9[2];
       
       var defs=match$9[1];
       
       var
        match$11=
         List["fold_right"]
          (function(param,param$1)
            {var id=param[1];
             
             var path$1=/* Pident */[0,id];
             
             var vd=Env["find_value"](path$1,val_env$1);
             
             Ctype["begin_def"](/* () */0);
             var
              expr=
               /* record */[0,
                /* Texp_ident */[0,
                 path$1,
                 Typedtree["mknoloc"](/* Lident */[0,Ident["name"](id)]),
                 vd],
                Location["none"],
                /* [] */0,
                Ctype["instance"](/* None */0,val_env$1,vd[1]),
                val_env$1,
                /* [] */0];
             
             Ctype["end_def"](/* () */0);
             Ctype["generalize"](expr[4]);
             var
              desc=
               /* record */[0,
                expr[4],
                /* Val_ivar */[1,/* Immutable */0,cl_num],
                vd[3],
                /* [] */0];
             
             var id$prime=Ident["create"](Ident["name"](id));
             
             return /* tuple */[0,
                     /* :: */[0,/* tuple */[0,id$prime,param[2],expr],param$1[1]],
                     Env["add_value"](/* None */0,id$prime,desc,param$1[2])];
             },
           Typedtree["let_bound_idents_with_loc"](defs),
           /* tuple */[0,/* [] */0,met_env]);
       
       var cl$3=class_expr(cl_num,val_env$1,match$11[2],match[3]);
       
       return rc
               (/* record */[0,
                 /* Tcl_let */[4,rec_flag,defs,match$11[1],cl$3],
                 scl[2],
                 cl$3[3],
                 val_env$1,
                 scl[3]]);
       
      case 5:
       Ctype["begin_class_def"](/* () */0);
       var context=Typetexp["narrow"](/* () */0);
       
       var cl$4=class_expr(cl_num,val_env,met_env,match[1]);
       
       Typetexp["widen"](context);
       var context$1=Typetexp["narrow"](/* () */0);
       
       var clty$1=class_type$1(val_env,match[2]);
       
       Typetexp["widen"](context$1);
       Ctype["end_def"](/* () */0);
       limited_generalize
        (Ctype["row_variable"](Ctype["self_type"](cl$4[3])),cl$4[3]);
       limited_generalize
        (Ctype["row_variable"](Ctype["self_type"](clty$1[2])),clty$1[2]);
       var error=Includeclass["class_types"](val_env,cl$4[3],clty$1[2]);
       
       if(error)
        {throw [0,$$Error,cl$4[2],val_env,/* Class_match_failure */[14,error]];
         }
       else
        {}
       
       var match$12=extract_constraints(clty$1[2]);
       
       return rc
               (/* record */[0,
                 /* Tcl_constraint */[5,
                  cl$4,
                  /* Some */[0,clty$1],
                  match$12[1],
                  match$12[2],
                  match$12[3]],
                 scl[2],
                 Ctype["instance_class"](/* [] */0,clty$1[2])[2],
                 val_env,
                 scl[3]]);
       
      case 6:throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      }
    };

var
 var_option=
  Predef["type_option"](Btype["newgenvar"](/* None */0,/* () */0));

var
 approx_declaration=
  function(cl)
   {var match=cl[1];
    
    switch(match[0])
     {case 2:
       var l=match[1];
       
       if(Btype["is_optional"](l))
        {var arg=Ctype["instance_def"](var_option);}
       else
        {var arg=Ctype["newvar"](/* None */0,/* () */0);}
       
       return Ctype["newty"]
               (/* Tarrow */[1,l,arg,approx_declaration(match[4]),/* Cok */0]);
       
      case 4:return approx_declaration(match[3]);
      case 5:return approx_declaration(match[1]);
      default:return Ctype["newvar"](/* None */0,/* () */0);}
    };

var
 approx_description=
  function(ct)
   {var match=ct[1];
    
    switch(match[0])
     {case 2:
       var l=match[1];
       
       if(Btype["is_optional"](l))
        {var arg=Ctype["instance_def"](var_option);}
       else
        {var arg=Ctype["newvar"](/* None */0,/* () */0);}
       
       return Ctype["newty"]
               (/* Tarrow */[1,l,arg,approx_description(match[3]),/* Cok */0]);
       
      default:return Ctype["newvar"](/* None */0,/* () */0);}
    };

var
 temp_abbrev=
  function(loc,env,id,arity)
   {var params=/* [] */0;
    
    for(var _i=1;_i<=arity;_i++)
     {params=/* :: */[0,Ctype["newvar"](/* None */0,/* () */0),params];}
    
    var ty=Ctype["newobj"](Ctype["newvar"](/* None */0,/* () */0));
    
    var
     env$1=
      Env["add_type"]
       (/* true */1,
        id,
        /* record */[0,
         params,
         arity,
         /* Type_abstract */0,
         /* Public */1,
         /* Some */[0,ty],
         Misc["replicate_list"](Types["Variance"][2],arity),
         /* None */0,
         loc,
         /* [] */0],
        env);
    
    return /* tuple */[0,params,ty,env$1];
    };

var
 initial_env=
  function(define_class,approx,param,param$1)
   {var cl_id=param$1[5];
    
    var obj_id=param$1[4];
    
    var ty_id=param$1[3];
    
    var id=param$1[2];
    
    var cl=param$1[1];
    
    var arity=List["length"](cl[2]);
    
    var match=temp_abbrev(cl[5],param[2],obj_id,arity);
    
    var match$1=temp_abbrev(cl[5],match[3],cl_id,arity);
    
    var env=match$1[3];
    
    var constr_type=approx(cl[4]);
    
    if(Clflags["principal"][1]){Ctype["generalize_spine"](constr_type)}else{}
    
    var
     dummy_cty=
      /* Cty_signature */[1,
       /* record */[0,
        Ctype["newvar"](/* None */0,/* () */0),
        Types["Vars"][1],
        Types["Concr"][1],
        /* [] */0]];
    
    var match$2=cl[1];
    
    var
     dummy_class=
      /* record */[0,
       /* [] */0,
       dummy_cty,
       unbound_class,
       match$2!==0?/* Some */[0,constr_type]:/* None */0,
       /* [] */0,
       Location["none"],
       /* [] */0];
    
    var
     env$1=
      Env["add_cltype"]
       (ty_id,
        /* record */[0,
         /* [] */0,
         dummy_cty,
         unbound_class,
         /* [] */0,
         Location["none"],
         /* [] */0],
        define_class?Env["add_class"](id,dummy_class,env):env);
    
    return /* tuple */[0,
            /* :: */[0,
             /* tuple */[0,
              cl,
              id,
              ty_id,
              obj_id,
              match[1],
              match[2],
              cl_id,
              match$1[1],
              match$1[2],
              constr_type,
              dummy_class],
             param[1]],
            env$1];
    };

var
 class_infos=
  function(define_class,kind,param,param$1)
   {var env=param$1[2];
    
    var constr_type=param[10];
    
    var cl_ty=param[9];
    
    var cl_params=param[8];
    
    var cl_id=param[7];
    
    var obj_ty=param[6];
    
    var obj_params=param[5];
    
    var obj_id=param[4];
    
    var ty_id=param[3];
    
    var id=param[2];
    
    var cl=param[1];
    
    Typetexp["reset_type_variables"](/* () */0);
    Ctype["begin_class_def"](/* () */0);
    var
     make_param=
      function(param$2)
       {var sty=param$2[1];
        
        try
         {return /* tuple */[0,
                  Typetexp["transl_type_param"](env,sty),
                  param$2[2]];
          }
        catch(exn)
         {if(exn===Typetexp["Already_bound"])
           {throw [0,$$Error,sty[2],env,/* Repeated_parameter */0];}
          else
           {throw exn;}
          }
        };
    
    var ci_params=List["map"](make_param,cl[2]);
    
    var
     params=
      List["map"](function(param$2){return param$2[1][2];},ci_params);
    
    var coercion_locs=[0,/* [] */0];
    
    try
     {Typecore["self_coercion"][1]=
      /* :: */[0,
       /* tuple */[0,/* Pident */[0,obj_id],coercion_locs],
       Typecore["self_coercion"][1]];
      var res=kind(env,cl[4]);
      
      Typecore["self_coercion"][1]=List["tl"](Typecore["self_coercion"][1]);
      var match=res;
      }
    catch(exn){Typecore["self_coercion"][1]=/* [] */0;throw exn;}
    
    var typ=match[2];
    
    Ctype["end_def"](/* () */0);
    var sty=Ctype["self_type"](typ);
    
    var match$1=Ctype["flatten_fields"](Ctype["object_fields"](sty));
    
    List["iter"]
     (function(param$2)
       {if(CamlPrimitive["caml_string_equal"](param$2[1],dummy_method))
         {return Ctype["generalize"](param$2[3]);}
        else
         {return 0;}
        },
      match$1[1]);
    var rv=Ctype["row_variable"](sty);
    
    List["iter"](Ctype["limited_generalize"](rv),params);
    limited_generalize(rv,typ);
    var match$2=Ctype["instance_class"](params,typ);
    
    var obj_type=match$2[2];
    
    var obj_params$prime=match$2[1];
    
    var constr=Ctype["newconstr"](/* Pident */[0,obj_id],obj_params);
    
    var ty=Ctype["self_type"](obj_type);
    
    Ctype["hide_private_methods"](ty);
    Ctype["close_object"](ty);
    try
     {List["iter2"](Ctype["unify"](env),obj_params,obj_params$prime)}
    catch(exn$1)
     {if(exn$1[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               cl[5],
               env,
               /* Bad_parameters */[13,
                obj_id,
                constr,
                Ctype["newconstr"](/* Pident */[0,obj_id],obj_params$prime)]];
        }
      else
       {throw exn$1;}
      }
    
    try
     {Ctype["unify"](env,ty,constr)}
    catch(exn$2)
     {if(exn$2[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               cl[5],
               env,
               /* Abbrev_type_clash */[8,
                constr,
                ty,
                Ctype["expand_head"](env,constr)]];
        }
      else
       {throw exn$2;}
      }
    
    var match$3=Ctype["instance_class"](params,typ);
    
    var cl_params$prime=match$3[1];
    
    var ty$1=Ctype["self_type"](match$3[2]);
    
    Ctype["hide_private_methods"](ty$1);
    Ctype["set_object_name"]
     (obj_id,Ctype["row_variable"](ty$1),cl_params,ty$1);
    try
     {List["iter2"](Ctype["unify"](env),cl_params,cl_params$prime)}
    catch(exn$3)
     {if(exn$3[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               cl[5],
               env,
               /* Bad_parameters */[13,
                cl_id,
                Ctype["newconstr"](/* Pident */[0,cl_id],cl_params),
                Ctype["newconstr"](/* Pident */[0,cl_id],cl_params$prime)]];
        }
      else
       {throw exn$3;}
      }
    
    try
     {Ctype["unify"](env,ty$1,cl_ty)}
    catch(exn$4)
     {if(exn$4[1]===Ctype["Unify"])
       {var constr$1=Ctype["newconstr"](/* Pident */[0,cl_id],params);
        
        throw [0,
               $$Error,
               cl[5],
               env,
               /* Abbrev_type_clash */[8,constr$1,ty$1,cl_ty]];
        }
      else
       {throw exn$4;}
      }
    
    try
     {Ctype["unify"]
       (env,
        constructor_type(constr,obj_type),
        Ctype["instance"](/* None */0,env,constr_type))}
    catch(exn$5)
     {if(exn$5[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               cl[5],
               env,
               /* Constructor_type_mismatch */[9,cl[3][1],exn$5[2]]];
        }
      else
       {throw exn$5;}
      }
    
    var
     cty_variance=
      List["map"](function(param$2){return Types["Variance"][2];},params);
    
    var
     cltydef=
      /* record */[0,
       params,
       class_body(typ),
       /* Pident */[0,obj_id],
       cty_variance,
       cl[5],
       cl[6]];
    
    var match$4=cl[1];
    
    var
     clty=
      /* record */[0,
       params,
       typ,
       /* Pident */[0,obj_id],
       match$4!==0?/* Some */[0,constr_type]:/* None */0,
       cty_variance,
       cl[5],
       cl[6]];
    
    param[11][2]=typ;
    var
     env$1=
      Env["add_cltype"]
       (ty_id,cltydef,define_class?Env["add_class"](id,clty,env):env);
    
    if(cl[1]===/* Concrete */1)
     {var sign=Ctype["signature_of_class_type"](typ);
      
      var mets=virtual_methods(sign);
      
      var
       vals=
        Types["Vars"][11]
         (function(name,param$2,l)
           {if(param$2[2]===/* Virtual */0)
             {return /* :: */[0,name,l];}
            else
             {return l;}
            },
          sign[2],
          /* [] */0);
      
      if(mets!==/* [] */0||vals!==/* [] */0)
       {throw [0,
               $$Error,
               cl[5],
               env$1,
               /* Virtual_class */[10,define_class,/* false */0,mets,vals]];
        }
      else
       {}
      }
    else
     {}
    
    var arity=Ctype["class_type_arity"](typ);
    
    var
     match$5=
      Ctype["flatten_fields"]
       (Ctype["object_fields"](Ctype["expand_head"](env$1,obj_ty)));
    
    var
     pub_meths=
      List["map"](function(param$2){return param$2[1];},match$5[1]);
    
    var match$6=Ctype["instance_class"](params,typ);
    
    var typ$prime=match$6[2];
    
    var params$prime=match$6[1];
    
    var
     cltydef$1=
      /* record */[0,
       params$prime,
       class_body(typ$prime),
       /* Pident */[0,obj_id],
       cty_variance,
       cl[5],
       cl[6]];
    
    var match$7=cl[1];
    
    var
     clty$1=
      /* record */[0,
       params$prime,
       typ$prime,
       /* Pident */[0,obj_id],
       match$7!==0
        ?/* Some */[0,Ctype["instance"](/* None */0,env$1,constr_type)]
        :/* None */0,
       cty_variance,
       cl[5],
       cl[6]];
    
    var
     obj_abbr=
      /* record */[0,
       obj_params,
       List["length"](obj_params),
       /* Type_abstract */0,
       /* Public */1,
       /* Some */[0,obj_ty],
       List["map"](function(param$2){return Types["Variance"][2];},obj_params),
       /* None */0,
       cl[5],
       /* [] */0];
    
    var
     match$8=
      Ctype["instance_parameterized_type"]
       (/* None */0,params,Ctype["self_type"](typ));
    
    var cl_ty$1=match$8[2];
    
    var cl_params$1=match$8[1];
    
    Ctype["hide_private_methods"](cl_ty$1);
    Ctype["set_object_name"]
     (obj_id,Ctype["row_variable"](cl_ty$1),cl_params$1,cl_ty$1);
    var
     cl_abbr=
      /* record */[0,
       cl_params$1,
       List["length"](cl_params$1),
       /* Type_abstract */0,
       /* Public */1,
       /* Some */[0,cl_ty$1],
       List["map"]
        (function(param$2){return Types["Variance"][2];},cl_params$1),
       /* None */0,
       cl[5],
       /* [] */0];
    
    return /* tuple */[0,
            /* :: */[0,
             /* tuple */[0,
              cl,
              id,
              clty$1,
              ty_id,
              cltydef$1,
              obj_id,
              obj_abbr,
              cl_id,
              cl_abbr,
              ci_params,
              arity,
              pub_meths,
              List["rev"](coercion_locs[1]),
              match[1]],
             param$1[1]],
            env$1];
    };

var
 final_decl=
  function(env,define_class,param)
   {var expr=param[14];
    
    var cl_abbr=param[9];
    
    var cl_id=param[8];
    
    var obj_abbr=param[7];
    
    var obj_id=param[6];
    
    var cltydef=param[5];
    
    var ty_id=param[4];
    
    var clty=param[3];
    
    var id=param[2];
    
    var cl=param[1];
    
    try
     {Ctype["collapse_conj_params"](env,clty[1])}
    catch(exn)
     {if(exn[1]===Ctype["Unify"])
       {throw [0,
               $$Error,
               cl[5],
               env,
               /* Non_collapsable_conjunction */[20,id,clty,exn[2]]];
        }
      else
       {throw exn;}
      }
    
    List["iter"](Ctype["generalize"],clty[1]);
    generalize_class_type$1(/* true */1,clty[2]);
    Misc["may"](Ctype["generalize"],clty[4]);
    List["iter"](Ctype["generalize"],obj_abbr[1]);
    Misc["may"](Ctype["generalize"],obj_abbr[5]);
    List["iter"](Ctype["generalize"],cl_abbr[1]);
    Misc["may"](Ctype["generalize"],cl_abbr[5]);
    if(!closed_class(clty))
     {throw [0,$$Error,cl[5],env,/* Non_generalizable_class */[18,id,clty]];}
    else
     {}
    
    var
     match=
      Ctype["closed_class"](clty[1],Ctype["signature_of_class_type"](clty[2]));
    
    if(match)
     {if(define_class)
       {var
         printer=
          function(ppf){return Printtyp["class_declaration"](id,ppf,clty);};
        }
      else
       {var
         printer=
          function(ppf)
           {return Printtyp["cltype_declaration"](id,ppf,cltydef);};
        }
      
      throw [0,$$Error,cl[5],env,/* Unbound_type_var */[16,printer,match[1]]];
      }
    else
     {}
    
    return /* tuple */[0,
            id,
            cl[3],
            clty,
            ty_id,
            cltydef,
            obj_id,
            obj_abbr,
            cl_id,
            cl_abbr,
            param[11],
            param[12],
            param[13],
            expr,
            /* record */[0,
             cl[1],
             param[10],
             cl[3],
             id,
             ty_id,
             obj_id,
             cl_id,
             expr,
             clty,
             cltydef,
             cl[5],
             cl[6]]];
    };

var
 extract_type_decls=
  function(param,decls)
   {return /* :: */[0,
            /* tuple */[0,
             param[6],
             param[7],
             param[9],
             param[3],
             param[5],
             param[14]],
            decls];
    };

var
 merge_type_decls=
  function(param,param$1)
   {return /* tuple */[0,
            param[1],
            param[2],
            param$1[3],
            param[4],
            param$1[4],
            param[6],
            param$1[1],
            param[8],
            param$1[2],
            param[10],
            param[11],
            param[12],
            param[13],
            param[14]];
    };

var
 final_env=
  function(define_class,env,param)
   {return Env["add_type"]
            (/* true */1,
             param[6],
             Subst["type_declaration"](Subst["identity"],param[7]),
             Env["add_type"]
              (/* true */1,
               param[8],
               Subst["type_declaration"](Subst["identity"],param[9]),
               Env["add_cltype"]
                (param[4],
                 Subst["cltype_declaration"](Subst["identity"],param[5]),
                 define_class
                  ?Env["add_class"]
                    (param[1],
                     Subst["class_declaration"](Subst["identity"],param[3]),
                     env)
                  :env)));
    };

var
 check_coercions=
  function(env,param)
   {var coercion_locs=param[12];
    
    var cl_abbr=param[9];
    
    var obj_abbr=param[7];
    
    if(coercion_locs)
     {var loc=coercion_locs[1];
      
      var match=cl_abbr[5];
      
      var match$1=obj_abbr[5];
      
      var exit;
      
      if(match)
       {if(match$1)
         {var
           match$2=
            Ctype["instance_parameterized_type"]
             (/* None */0,cl_abbr[1],match[1]);
          
          var
           match$3=
            Ctype["instance_parameterized_type"]
             (/* None */0,obj_abbr[1],match$1[1]);
          
          List["iter2"](Ctype["unify"](env),match$2[1],match$3[1]);
          var match$4=/* tuple */[0,match$2[2],match$3[2]];
          }
        else
         {exit=58;}
        }
      else
       {exit=58;}
      
      switch(exit)
       {case 58:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/typeclass.ml",1562,15]];
         
        }
      
      var obj_ty=match$4[2];
      
      var cl_ty=match$4[1];
      
      try
       {Ctype["subtype"](env,cl_ty,obj_ty,/* () */0)}
      catch(exn)
       {if(exn[1]===Ctype["Subtype"])
         {throw [0,
                 Typecore["Error"],
                 loc,
                 env,
                 /* Not_subtype */[23,exn[2],exn[3]]];
          }
        else
         {throw exn;}
        }
      
      if(!Ctype["opened_object"](cl_ty))
       {throw [0,$$Error,loc,env,/* Cannot_coerce_self */[19,obj_ty]];}
      else
       {}
      }
    else
     {}
    
    return /* tuple */[0,
            param[1],
            param[2],
            param[3],
            param[4],
            param[5],
            param[6],
            obj_abbr,
            param[8],
            cl_abbr,
            param[10],
            param[11],
            param[14]];
    };

var
 type_classes=
  function(define_class,approx,kind,env,cls)
   {var
     cls$1=
      List["map"]
       (function(cl)
         {return /* tuple */[0,
                  cl,
                  Ident["create"](cl[3][1]),
                  Ident["create"](cl[3][1]),
                  Ident["create"](cl[3][1]),
                  Ident["create"](Pervasives["^"]("#",cl[3][1]))];
          },
        cls);
    
    Ctype["init_def"](Ident["current_time"](/* () */0));
    Ctype["begin_class_def"](/* () */0);
    var
     match=
      List["fold_left"]
       (initial_env(define_class,approx),/* tuple */[0,/* [] */0,env],cls$1);
    
    var
     match$1=
      List["fold_right"]
       (class_infos(define_class,kind),
        match[1],
        /* tuple */[0,/* [] */0,match[2]]);
    
    var env$1=match$1[2];
    
    Ctype["end_def"](/* () */0);
    var res=List["rev_map"](final_decl(env$1,define_class),match$1[1]);
    
    var decls=List["fold_right"](extract_type_decls,res,/* [] */0);
    
    var decls$1=Typedecl["compute_variance_decls"](env$1,decls);
    
    var res$1=List["map2"](merge_type_decls,res,decls$1);
    
    var env$2=List["fold_left"](final_env(define_class),env$1,res$1);
    
    var res$2=List["map"](check_coercions(env$2),res$1);
    
    return /* tuple */[0,res$2,env$2];
    };

var class_num=[0,0];

var
 class_declaration=
  function(env,sexpr)
   {class_num[0]++;
    var
     expr=
      class_expr(Pervasives["string_of_int"](class_num[1]),env,env,sexpr);
    
    return /* tuple */[0,expr,expr[3]];
    };

var
 class_description=
  function(env,sexpr)
   {var expr=class_type$1(env,sexpr);return /* tuple */[0,expr,expr[2]];};

var
 class_declarations=
  function(env,cls)
   {return type_classes
            (/* true */1,approx_declaration,class_declaration,env,cls);
    };

var
 class_descriptions=
  function(env,cls)
   {return type_classes
            (/* true */1,approx_description,class_description,env,cls);
    };

var
 class_type_declarations=
  function(env,cls)
   {var
     match=
      type_classes(/* false */0,approx_description,class_description,env,cls);
    
    return /* tuple */[0,
            List["map"]
             (function(param)
               {return /* tuple */[0,
                        param[4],
                        param[2],
                        param[5],
                        param[6],
                        param[7],
                        param[8],
                        param[9],
                        param[12]];
                },
              match[1]),
            match[2]];
    };

var
 unify_parents=
  function(env,ty,cl)
   {var match=cl[1];
    
    var exit;
    
    switch(match[0])
     {case 0:
       try
        {var decl=Env["find_class"](match[1],env);
         
         var match$1=Ctype["find_cltype_for_path"](env,decl[3]);
         
         return Ctype["unify"]
                 (env,ty,Ctype["instance"](/* None */0,env,match$1[2]));
         }
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {return /* () */0;}
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"typing/typeclass.ml",1639,15]];
           }
         }
       
      case 1:return unify_parents_struct(env,ty,match[1]);
      case 2:exit=33;
      case 3:exit=34;
      case 4:exit=33;
      case 5:exit=34;
      }
    
    switch(exit)
     {case 33:var cl$1=match[4];exit=32;
      case 34:var cl$1=match[1];exit=32;
      case 32:return unify_parents(env,ty,cl$1);
      }
    };

var
 unify_parents_struct=
  function(env,ty,st)
   {return List["iter"]
            (function(param)
              {var match=param[1];
               
               switch(match[0])
                {case 0:return unify_parents(env,ty,match[2]);
                 default:return /* () */0;}
               },
             st[2]);
    };

var
 type_object=
  function(env,loc,s)
   {class_num[0]++;
    var
     match=
      class_structure
       (Pervasives["string_of_int"](class_num[1]),/* true */1,env,env,loc,s);
    
    var sign=match[2];
    
    var desc=match[1];
    
    var sty=Ctype["expand_head"](env,sign[1]);
    
    Ctype["hide_private_methods"](sty);
    var match$1=Ctype["flatten_fields"](Ctype["object_fields"](sty));
    
    var meths=List["map"](function(param){return param[1];},match$1[1]);
    
    unify_parents_struct(env,sign[1],desc);
    return /* tuple */[0,desc,sign,meths];
    };

var match=(Typecore["type_object"][1]=type_object,0);

var
 approx_class=
  function(sdecl)
   {var self$prime=Ast_helper["Typ"][3](/* None */0,/* None */0,/* () */0);
    
    var
     clty$prime=
      Ast_helper["Cty"][4]
       (/* Some */[0,sdecl[4][2]],
        /* None */0,
        Ast_helper["Csig"][1](self$prime,/* [] */0));
    
    var newrecord=/* unknown */"duprecord regular 6";
    
    newrecord[4]=clty$prime;
    return newrecord;
    };

var
 approx_class_declarations=
  function(env,sdecls)
   {return class_type_declarations(env,List["map"](approx_class,sdecls))[1];};

var
 report_error=
  function(env,ppf,param)
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
         
        }}
    else
     {switch(param[0])
       {case 0:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "The class constraints are not consistent.",
             [/* Formatting_lit */17,
              /* Flush_newline */4,
              /* End_of_format */0]],
            "The class constraints are not consistent.@."]);
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  /* None */0,
                  param[1],
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
         
        case 1:
         var m=param[2];
         
         var k=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  /* None */0,
                  param[3],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "The ",
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,
                                 32,
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* String_literal */11,"has type",/* End_of_format */0]]]]]],
                              "The %s %s@ has type"],
                             k,
                             m);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is expected to have type",
                               /* End_of_format */0],
                              "but is expected to have type"]);
                    });
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "This class expression is not a class structure; it has type",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[This class expression is not a class structure; it has type@ %a@]"],
                  Printtyp["class_type"],
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This class expression is not a class function, it cannot be applied",
                    /* End_of_format */0],
                   "This class expression is not a class function, it cannot be applied"]);
         
        case 4:
         var
          mark_label=
           function(l)
            {switch(l)
              {case "":return "out label";
               default:
                return Format["sprintf"]
                        ([/* Format */0,
                          [/* String_literal */11,
                           " label ~",
                           [/* String */2,/* No_padding */0,/* End_of_format */0]],
                          " label ~%s"],
                         l);
                }
             };
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This argument cannot be applied with",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "This argument cannot be applied with%s"],
                  mark_label(param[1]));
         
        case 5:
         var ty=param[1];
         
         Printtyp["reset_and_mark_loops"](ty);
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
                  "This pattern cannot match self: it only matches values of type",
                  Printtyp["type_expr"],
                  ty);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The class",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "is not yet completely defined",
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[The class@ %a@ is not yet completely defined@]"],
                  Printtyp["longident"],
                  param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The class type",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "is not yet completely defined",
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[The class type@ %a@ is not yet completely defined@]"],
                  Printtyp["longident"],
                  param[1]);
         
        case 8:
         var expected=param[3];
         
         var actual=param[2];
         
         var abbrev=param[1];
         
         Printtyp["reset_and_mark_loops_list"]
          (/* :: */[0,
            abbrev,
            /* :: */[0,actual,/* :: */[0,expected,/* [] */0]]]);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The abbreviation",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "expands to type",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String_literal */11,
                             "but is used with type",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]]]]]]]]],
                   "@[The abbreviation@ %a@ expands to type@ %a@ but is used with type@ %a@]"],
                  Printtyp["type_expr"],
                  abbrev,
                  Printtyp["type_expr"],
                  actual,
                  Printtyp["type_expr"],
                  expected);
         
        case 9:
         var c=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  /* None */0,
                  param[2],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               'The expression "new ',
                               [/* String */2,
                                /* No_padding */0,
                                [/* String_literal */11,'" has type',/* End_of_format */0]]],
                              'The expression "new %s" has type'],
                             c);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is used with type",
                               /* End_of_format */0],
                              "but is used with type"]);
                    });
         
        case 10:
         var vals=param[4];
         
         var mets=param[3];
         
         var imm=param[2];
         
         var cl=param[1];
         
         var
          print_mets=
           function(ppf,mets)
            {return List["iter"]
                     (function(met)
                       {return Format["fprintf"]
                                (ppf,
                                 [/* Format */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* String */2,/* No_padding */0,/* End_of_format */0]],
                                  "@ %s"],
                                 met);
                        },
                      mets);
             };
         
         if(mets)
          {if(vals)
            {var missings="methods and variables";}
           else
            {var missings="methods";}
           }
         else
          {var missings="variables";}
         
         var
          print_msg=
           function(ppf)
            {if(imm)
              {return Format["fprintf"]
                       (ppf,
                        [/* Format */0,
                         [/* String_literal */11,
                          "This object has virtual ",
                          [/* String */2,/* No_padding */0,/* End_of_format */0]],
                         "This object has virtual %s"],
                        missings);
               }
             else
              {if(cl)
                {return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* String_literal */11,
                            "This class should be virtual",
                            /* End_of_format */0],
                           "This class should be virtual"]);
                 }
               else
                {return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* String_literal */11,
                            "This class type should be virtual",
                            /* End_of_format */0],
                           "This class type should be virtual"]);
                 }
               }
             };
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* Theta */16,
                     [/* Char_literal */12,
                      46,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* String_literal */11,
                         "The following ",
                         [/* String */2,
                          /* No_padding */0,
                          [/* String_literal */11,
                           " are undefined :",
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]]]]]]]]],
                   "@[%t.@ @[<2>The following %s are undefined :%a@]@]"],
                  print_msg,
                  missings,
                  print_mets,
                  Pervasives["@"](mets,vals));
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The class constructor ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "expects ",
                        [/* Int */4,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* String_literal */11,
                          " type argument(s),",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "but is here applied to ",
                            [/* Int */4,
                             /* Int_i */3,
                             /* No_padding */0,
                             /* No_precision */0,
                             [/* String_literal */11,
                              " type argument(s)",
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]]]],
                   "@[The class constructor %a@ expects %i type argument(s),@ but is here applied to %i type argument(s)@]"],
                  Printtyp["longident"],
                  param[1],
                  param[2],
                  param[3]);
         
        case 12:
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  /* None */0,
                  param[1],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "The type parameter",
                               /* End_of_format */0],
                              "The type parameter"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "does not meet its constraint: it should be",
                               /* End_of_format */0],
                              "does not meet its constraint: it should be"]);
                    });
         
        case 13:
         var cstrs=param[3];
         
         var params=param[2];
         
         Printtyp["reset_and_mark_loops_list"]
          (/* :: */[0,params,/* :: */[0,cstrs,/* [] */0]]);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The abbreviation ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "is used with parameters",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "wich are incompatible with constraints",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]]]],
                   "@[The abbreviation %a@ is used with parameters@ %a@ wich are incompatible with constraints@ %a@]"],
                  Printtyp["ident"],
                  param[1],
                  Printtyp["type_expr"],
                  params,
                  Printtyp["type_expr"],
                  cstrs);
         
        case 14:return Includeclass["report_error"](ppf,param[1]);
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Unbound instance variable ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "Unbound instance variable %s"],
                  param[1]);
         
        case 16:
         var
          print_common=
           function(ppf,kind,ty0,real,lab,ty)
            {if(real)
              {var ty1=ty0;}
             else
              {var
                ty1=
                 Btype["newgenty"](/* Tobject */[4,ty0,[0,/* None */0]]);
               }
             
             Printtyp["mark_loops"](ty1);
             return Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* String_literal */11,
                        "The ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          32,
                          [/* String */2,
                           /* No_padding */0,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String_literal */11,
                             "has type",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;<1 2>",1,2],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* String_literal */11,
                                 "where",
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@ ",1,0],
                                    [/* String_literal */11,"is unbound",/* End_of_format */0]]]]]]]]]]]]]],
                       "The %s %s@ has type@;<1 2>%a@ where@ %a@ is unbound"],
                      kind,
                      lab,
                      Printtyp["type_expr"],
                      ty,
                      Printtyp["type_expr"],
                      ty0);
             };
         
         var
          print_reason=
           function(ppf,param$1)
            {switch(param$1[0])
              {case 0:
                return print_common
                        (ppf,"method",param$1[1],param$1[2],param$1[3],param$1[4]);
                
               case 1:
                return print_common
                        (ppf,
                         "instance variable",
                         param$1[1],
                         param$1[2],
                         param$1[3],
                         param$1[4]);
                
               }
             };
         
         Printtyp["reset"](/* () */0);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v>",/* End_of_format */0],
                      "<v>"]],
                    [/* Formatting_gen */18,
                     [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                     [/* String_literal */11,
                      "Some type variables are unbound in this type:",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@;<1 2>",1,2],
                       [/* Theta */16,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Formatting_gen */18,
                           [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]]]]]]]]],
                   "@[<v>@[Some type variables are unbound in this type:@;<1 2>%t@]@ @[%a@]@]"],
                  param[1],
                  print_reason,
                  param[2]);
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v>",/* End_of_format */0],
                      "<v>"]],
                    [/* Formatting_gen */18,
                     [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                     [/* String_literal */11,
                      "Self type should not occur in the non-generic type",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@;<1 2>",1,2],
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@,",0,0],
                          [/* String_literal */11,
                           "It would escape the scope of its class",
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]],
                   "@[<v>@[Self type should not occur in the non-generic type@;<1 2>%a@]@,It would escape the scope of its class@]"],
                  Printtyp["type_scheme"],
                  param[1]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The type of this class,",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        44,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "contains type variables that cannot be generalized",
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[The type of this class,@ %a,@ contains type variables that cannot be generalized@]"],
                  Printtyp["class_declaration"](param[1]),
                  param[2]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The type of self cannot be coerced to",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String_literal */11,
                       "the type of the current class:",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Char_literal */12,
                          46,
                          [/* Formatting_lit */17,
                           /* Flush_newline */4,
                           [/* String_literal */11,
                            "Some occurrences are contravariant",
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]],
                   "@[The type of self cannot be coerced to@ the type of the current class:@ %a.@.Some occurrences are contravariant@]"],
                  Printtyp["type_scheme"],
                  param[1]);
         
        case 20:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
             [/* String_literal */11,
              "The type of this class,",
              [/* Formatting_lit */17,
               [/* Break */0,"@ ",1,0],
               [/* Alpha */15,
                [/* Char_literal */12,
                 44,
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* String_literal */11,
                   "contains non-collapsible conjunctive types in constraints",
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0]]]]]]]],
            "@[The type of this class,@ %a,@ contains non-collapsible conjunctive types in constraints@]"],
           Printtyp["class_declaration"](param[1]),
           param[2]);
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  /* None */0,
                  param[3],
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
         
        case 21:
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  /* None */0,
                  param[1],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "This object is expected to have type",
                               /* End_of_format */0],
                              "This object is expected to have type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but actually has type",
                               /* End_of_format */0],
                              "but actually has type"]);
                    });
         
        case 22:
         if(param[2]===/* Immutable */0)
          {var match$1=[/* tuple */0,"mutable","immutable"];}
         else
          {var match$1=[/* tuple */0,"immutable","mutable"];}
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The instance variable is ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       59,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "it cannot be redefined as ",
                         [/* String */2,
                          /* No_padding */0,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[The instance variable is %s;@ it cannot be redefined as %s@]"],
                  match$1[1],
                  match$1[2]);
         
        case 23:
         var name=param[2];
         
         switch(name)
          {case "":
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                       [/* String_literal */11,
                        "This inheritance does not override any method",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String */2,
                          /* No_padding */0,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]],
                      "@[This inheritance does not override any method@ %s@]"],
                     "instance variable");
            
           default:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                       [/* String_literal */11,
                        "The ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " `",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,
                            39,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String_literal */11,
                              "has no previous definition",
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]],
                      "@[The %s `%s'@ has no previous definition@]"],
                     param[1],
                     name);
            }
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " `",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         39,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "has multiple definitions in this object",
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]],
                   "@[The %s `%s'@ has multiple definitions in this object@]"],
                  param[1],
                  param[2]);
         
        }}
    };

var
 report_error$1=
  function(env,ppf,err)
   {return Printtyp["wrap_printing_env"]
            (env,function(param){return report_error(env,ppf,err);});
    };

var
 match$1=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,
                Location["error_of_printer"]
                 (param[2],report_error$1(param[3]),param[4])];
        }
      else
       {if(param[1]===Error_forward)
         {return /* Some */[0,param[2]];}
        else
         {return /* None */0;}
        }
      });

module["exports"]=
{"class_declarations":class_declarations,
 "class_descriptions":class_descriptions,
 "class_type_declarations":class_type_declarations,
 "approx_class_declarations":approx_class_declarations,
 "virtual_methods":virtual_methods,
 "Error":$$Error,
 "Error_forward":Error_forward,
 "report_error":report_error$1};

