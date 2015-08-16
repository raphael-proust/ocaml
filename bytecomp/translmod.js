// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var Mtype=require("Mtype");
var Printtyp=require("Printtyp");
var Typedtree=require("Typedtree");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Predef=require("Predef");
var Translcore=require("Translcore");
var Format=require("Format");
var Obj=require("Obj");
var Misc=require("Misc");
var Path=require("Path");
var Lambda=require("Lambda");
var Translclass=require("Translclass");
var Translobj=require("Translobj");
var Location=require("Location");
var Ident=require("Ident");
var $$Array=require("Array");


var $$Error="unknown primitive:caml_set_oo_id";

var global_path=function(glob){return /* Some */[0,/* Pident */[0,glob]];};

var
 is_top=
  function(rootpath)
   {var exit;
    
    if(rootpath)
     {switch(rootpath[1]){case 0:return 1;case 1:exit=166;case 2:exit=166;}}
    else
     {exit=166;}
    
    switch(exit){case 166:return 0;}
    };

var
 functor_path=
  function(path,param)
   {if(path)
     {return /* Some */[0,/* Papply */[2,path[1],/* Pident */[0,param]]];}
    else
     {return 0;}
    };

var
 field_path=
  function(path,field)
   {if(path)
     {return /* Some */[0,
              /* Pdot */[1,path[1],Ident["name"](field),Path["nopos"]]];
      }
    else
     {return 0;}
    };

var prim_set_oo_id=[11,[0,"caml_set_oo_id",1,0,"",0]];

var
 transl_extension_constructor=
  function(env,path,ext)
   {if(path)
     {var name=Path["name"](0,path[1]);}
    else
     {var name=Ident["name"](ext[1]);}
    
    var match=ext[4];
    
    switch(match)
     {case 0:
       return /* Lprim */[6,
               prim_set_oo_id,
               /* :: */[0,
                /* Lprim */[6,
                 /* Pmakeblock */[5,
                  Obj["object_tag"],
                  Lambda["default_tag_info"],
                  1],
                 /* :: */[0,
                  /* Lconst */[1,
                   /* Const_base */[0,/* Const_string */[2,name,0]]],
                  [0,[1,[0,[0,0]]],0]]],
                0]];
       
      case 1:return Lambda["transl_path"](/* Some */[0,ext[5]],env,match[1]);
      }
    };

var
 transl_type_extension=
  function(env,rootpath,tyext,body)
   {return List["fold_right"]
            (function(ext,body$1)
              {var
                lam=
                 transl_extension_constructor
                  (env,field_path(rootpath,ext[1]),ext);
               
               return /* Llet */[4,0,ext[1],lam,body$1];
               },
             tyext[4],
             body);
    };

var
 apply_coercion=
  function(strict,restr,arg)
   {if(typeof restr=="number")
     {switch(restr){case 0:return arg;}}
    else
     {switch(restr[0])
       {case 0:
         var id_pos_list=restr[2];
         
         var pos_cc_list=restr[1];
         
         return Lambda["name_lambda"]
                 (strict,
                  arg,
                  function(id)
                   {var
                     get_field=
                      function(pos)
                       {return /* Lprim */[6,
                                /* Pfield */[6,pos],
                                /* :: */[0,/* Lvar */[0,id],0]];
                        };
                    
                    var
                     lam=
                      /* Lprim */[6,
                       /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                       List["map"](apply_coercion_field(get_field),pos_cc_list)];
                    
                    return wrap_id_pos_list(id_pos_list,get_field,lam);
                    });
         
        case 1:
         var cc_res=restr[2];
         
         var cc_arg=restr[1];
         
         var param=Ident["create"]("funarg");
         
         return Lambda["name_lambda"]
                 (strict,
                  arg,
                  function(id)
                   {return /* Lfunction */[3,
                            0,
                            /* :: */[0,param,0],
                            apply_coercion
                             (0,
                              cc_res,
                              /* Lapply */[2,
                               /* Lvar */[0,id],
                               /* :: */[0,apply_coercion(1,cc_arg,/* Lvar */[0,param]),0],
                               Location["none"]])];
                    });
         
        case 2:
         return Translcore["transl_primitive"](Location["none"],restr[2]);
        case 3:
         var cc=restr[2];
         
         var path=restr[1];
         
         return Lambda["name_lambda"]
                 (strict,
                  arg,
                  function(id)
                   {return apply_coercion
                            (1,cc,Lambda["transl_normal_path"](path));
                    });
         
        }}
    };

var
 apply_coercion_field=
  function(get_field,param)
   {return apply_coercion(1,param[2],get_field(param[1]));};

var
 wrap_id_pos_list=
  function(id_pos_list,get_field,lam)
   {var fv=Lambda["free_variables"](lam);
    
    var
     match=
      List["fold_left"]
       (function(param,param$1)
         {var id$prime=param$1[1];
          
          var s=param[2];
          
          var lam$1=param[1];
          
          if(Lambda["IdentSet"][3](id$prime,fv))
           {var id$prime$prime=Ident["create"](Ident["name"](id$prime));
            
            return /* tuple */[0,
                    /* Llet */[4,
                     1,
                     id$prime$prime,
                     apply_coercion(1,param$1[3],get_field(param$1[2])),
                     lam$1],
                    Ident["add"](id$prime,/* Lvar */[0,id$prime$prime],s)];
            }
          else
           {return /* tuple */[0,lam$1,s];}
          },
        /* tuple */[0,lam,Ident["empty"]],
        id_pos_list);
    
    var s=match[2];
    
    var lam$1=match[1];
    
    if(s=Ident["empty"])
     {return lam$1;}
    else
     {return Lambda["subst_lambda"](s,lam$1);}
    };

var
 compose_coercions=
  function(c1,c2)
   {var exit;
    
    if(typeof c1=="number")
     {switch(c1){case 0:return c2;}}
    else
     {switch(c1[0])
       {case 0:
         if(typeof c2=="number")
          {switch(c2){case 0:exit=152;}}
         else
          {switch(c2[0])
            {case 0:
              var v2=$$Array["of_list"](c2[1]);
              
              var
               ids1=
                List["map"]
                 (function(param)
                   {var match=v2[param[2]];
                    
                    return /* tuple */[0,
                            param[1],
                            match[1],
                            compose_coercions(param[3],match[2])];
                    },
                  c1[2]);
              
              return /* Tcoerce_structure */[0,
                      List["map"]
                       (function(x)
                         {var c1$1=x[2];
                          
                          var exit$1;
                          
                          if(typeof c1$1=="number")
                           {switch(c1$1){}}
                          else
                           {switch(c1$1[0]){case 2:return x;default:exit$1=147;}}
                          
                          switch(exit$1)
                           {case 147:
                             var match=v2[x[1]];
                             
                             return /* tuple */[0,
                                     match[1],
                                     compose_coercions(c1$1,match[2])];
                             
                            }
                          },
                        c1[1]),
                      Pervasives["@"](ids1,c2[2])];
              
             case 1:exit=151;
             case 2:exit=151;
             case 3:exit=152;
             }}
         
        case 1:
         if(typeof c2=="number")
          {switch(c2){case 0:exit=152;}}
         else
          {switch(c2[0])
            {case 0:exit=151;
             case 1:
              return /* Tcoerce_functor */[1,
                      compose_coercions(c2[1],c1[1]),
                      compose_coercions(c1[2],c2[2])];
              
             case 2:exit=151;
             case 3:exit=152;
             }}
         
        case 2:exit=152;
        case 3:exit=152;
        }}
    
    switch(exit)
     {case 152:
       if(typeof c2=="number")
        {switch(c2){case 0:return c1;}}
       else
        {switch(c2[0])
          {case 3:
            return /* Tcoerce_alias */[3,c2[1],compose_coercions(c1,c2[2])];
           default:"unknown block:(exit 151)";}}
       
      case 151:return Misc["fatal_error"]("Translmod.compose_coercions");
      }
    };

var primitive_declarations=[0,0];

var
 record_primitive=
  function(param)
   {var match=param[2];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         return primitive_declarations[1]=
                /* :: */[0,match[1],primitive_declarations[1]],
                0;
         
        default:exit=143;}}
    
    switch(exit){case 143:return 0;}
    };

var
 mod_prim=
  function(name)
   {try
     {return Lambda["transl_normal_path"]
              (Env["lookup_value"]
                 (/* Ldot */[1,[0,"CamlinternalMod"],name],Env["empty"])
                [1]);
      }
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]
                (Pervasives["^"]
                  ("Primitive ",Pervasives["^"](name," not found.")));
        }
      else
       {throw exn;}
      }
    };

var
 undefined_location=
  function(loc)
   {var match=Location["get_pos_info"](loc[1]);
    
    return /* Lconst */[1,
            /* Const_block */[2,
             0,
             Lambda["default_tag_info"],
             /* :: */[0,
              /* Const_base */[0,/* Const_string */[2,match[1],0]],
              /* :: */[0,
               /* Const_base */[0,/* Const_int */[0,match[2]]],
               /* :: */[0,/* Const_base */[0,/* Const_int */[0,match[3]]],0]]]]];
    };

var
 init_shape=
  function(modl)
   {var
     init_shape_mod=
      function(env,mty)
       {var match=Mtype["scrape"](env,mty);
        
        var exit;
        
        switch(match)
         {case 0:exit=134;
          case 1:
           return /* Const_block */[2,
                   0,
                   Lambda["default_tag_info"],
                   /* :: */[0,
                    /* Const_block */[2,
                     0,
                     Lambda["default_tag_info"],
                     init_shape_struct(env,match[1])],
                    0]];
           
          case 2:exit=134;
          case 3:
           return /* Const_block */[2,
                   1,
                   Lambda["default_tag_info"],
                   /* :: */[0,
                    /* Const_pointer */[1,0,Lambda["default_pointer_info"]],
                    0]];
           
          }
        
        switch(exit){case 134:throw Not_found;}
        };
    
    var
     init_shape_struct=
      function(env,sg)
       {if(sg)
         {var match=sg[1];
          
          switch(match)
           {case 0:
             var match$1=Ctype["expand_head"](env,match[2][1]);
             
             var match$2=match$1[1];
             
             var exit;
             
             if(typeof match$2=="number")
              {switch(match$2){}}
             else
              {switch(match$2[0])
                {case 1:
                  var
                   init_v=
                    /* Const_pointer */[1,0,Lambda["default_pointer_info"]];
                  
                 case 3:
                  if(Path["same"](match$2[1],Predef["path_lazy_t"]))
                   {var
                     init_v=
                      /* Const_pointer */[1,1,Lambda["default_pointer_info"]];
                    }
                  else
                   {exit=136;}
                  
                 default:exit=136;}}
             
             switch(exit){case 136:throw Not_found;}
             
             return /* :: */[0,init_v,init_shape_struct(env,sg[2])];
             
            case 1:
             return init_shape_struct
                     (Env["add_type"](0,match[1],match[2],env),sg[2]);
             
            case 2:throw Not_found;
            case 3:
             var md=match[2];
             
             return /* :: */[0,
                     init_shape_mod(env,md[1]),
                     init_shape_struct
                      (Env["add_module_declaration"](0,match[1],md,env),sg[2])];
             
            case 4:
             return init_shape_struct
                     (Env["add_modtype"](match[1],match[2],env),sg[2]);
             
            case 5:
             return /* :: */[0,
                     /* Const_pointer */[1,2,Lambda["default_pointer_info"]],
                     init_shape_struct(env,sg[2])];
             
            case 6:return init_shape_struct(env,sg[2]);
            }
          }
        else
         {return 0;}
        };
    
    try
     {return /* Some */[0,
              /* tuple */[0,
               undefined_location(modl[2]),
               /* Lconst */[1,init_shape_mod(modl[4],modl[3])]]];
      }
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 reorder_rec_bindings=
  function(bindings)
   {var
     id=
      $$Array["of_list"]
       (List["map"](function(param){return param[1];},bindings));
    
    var
     loc=
      $$Array["of_list"]
       (List["map"](function(param){return param[2];},bindings));
    
    var
     init=
      $$Array["of_list"]
       (List["map"](function(param){return param[3];},bindings));
    
    var
     rhs=
      $$Array["of_list"]
       (List["map"](function(param){return param[4];},bindings));
    
    var fv=$$Array["map"](Lambda["free_variables"],rhs);
    
    var num_bindings=id["length"];
    
    var status="unknown primitive:caml_make_vect";
    
    var res=[0,0];
    
    var
     emit_binding=
      function(i)
       {var match=status[i];
        
        switch(match[0])
         {case 0:
           if(init[i]=0)
            {status[i]=1,0;
             for(var j=0;j<=num_bindings-1;j++)
              {if(Lambda["IdentSet"][3](id[j],fv[i])){emit_binding(j)}else{}}
             }
           else
            {}
           
           res[1]=/* :: */[0,/* tuple */[0,id[i],init[i],rhs[i]],res[1]],0;
           return status[i]=2,0;
           
          case 1:throw [0,$$Error,loc[i],/* Circular_dependency */[0,id[i]]];
          case 2:return 0;
          }
        };
    
    for(var i=0;i<=num_bindings-1;i++)
     {var match=status[i];
      
      switch(match[0])
       {case 0:emit_binding(i);
        case 1:throw [0,Assert_failure,[0,"bytecomp/translmod.ml",273,20]];
        case 2:
        }
      }
    
    return List["rev"](res[1]);
    };

var
 eval_rec_bindings=
  function(bindings,cont)
   {var
     bind_inits=
      function(param)
       {if(param)
         {var match=param[1];
          
          var match$1=match[2];
          
          if(match$1)
           {var match$2=match$1[1];
            
            return /* Llet */[4,
                    0,
                    match[1],
                    /* Lapply */[2,
                     mod_prim("init_mod"),
                     /* :: */[0,match$2[1],/* :: */[0,match$2[2],0]],
                     Location["none"]],
                    bind_inits(param[2])];
            }
          else
           {return bind_inits(param[2]);}
          }
        else
         {return bind_strict(bindings);}
        };
    
    var
     bind_strict=
      function(param)
       {if(param)
         {var match=param[1];
          
          if(match[2])
           {return bind_strict(param[2]);}
          else
           {return /* Llet */[4,0,match[1],match[3],bind_strict(param[2])];}
          }
        else
         {return patch_forwards(bindings);}
        };
    
    var
     patch_forwards=
      function(param)
       {if(param)
         {var match=param[1];
          
          var match$1=match[2];
          
          if(match$1)
           {return /* Lsequence */[13,
                    /* Lapply */[2,
                     mod_prim("update_mod"),
                     /* :: */[0,
                      match$1[1][2],
                      /* :: */[0,/* Lvar */[0,match[1]],/* :: */[0,match[3],0]]],
                     Location["none"]],
                    patch_forwards(param[2])];
            }
          else
           {return patch_forwards(param[2]);}
          }
        else
         {return cont;}
        };
    
    return bind_inits(bindings);
    };

var
 compile_recmodule=
  function(compile_rhs,bindings,cont)
   {return eval_rec_bindings
            (reorder_rec_bindings
              (List["map"]
                (function(param)
                  {var modl=param[3];
                   
                   var id=param[1];
                   
                   return /* tuple */[0,
                           id,
                           modl[2],
                           init_shape(modl),
                           compile_rhs(id,modl)];
                   },
                 bindings)),
             cont);
    };

var
 bound_value_identifiers=
  function(param)
   {if(param)
     {var match=param[1];
      
      var exit;
      
      switch(match)
       {case 0:
         var match$1=match[2][2];
         
         if("unknown primitive:isint")
          {if(match$1!=0)
            {exit=120;}
           else
            {return /* :: */[0,match[1],bound_value_identifiers(param[2])];}
           }
         else
          {exit=120;}
         
        case 1:exit=120;
        case 4:exit=120;
        case 6:exit=120;
        default:return /* :: */[0,match[1],bound_value_identifiers(param[2])];}
      
      switch(exit){case 120:return bound_value_identifiers(param[2]);}
      }
    else
     {return 0;}
    };

var export_identifiers=[0,0];

var
 get_export_identifiers=
  function(param){return List["rev"](export_identifiers[1]);};

var
 transl_module=
  function(cc,rootpath,mexp)
   {var match=mexp[3];
    
    switch(match)
     {case 3:return apply_coercion(1,cc,Lambda["lambda_unit"]);
      default:
       var match$1=mexp[1];
       
       switch(match$1)
        {case 0:
          return apply_coercion
                  (0,
                   cc,
                   Lambda["transl_path"]
                    (/* Some */[0,mexp[2]],mexp[4],match$1[1]));
          
         case 1:return transl_struct(0,cc,rootpath,match$1[1]);
         case 2:
          var body=match$1[4];
          
          var param=match$1[1];
          
          var bodypath=functor_path(rootpath,param);
          
          return Translobj["oo_wrap"]
                  (mexp[4],
                   1,
                   function(param$1)
                    {if(typeof param$1=="number")
                      {switch(param$1)
                        {case 0:
                          return /* Lfunction */[3,
                                  0,
                                  /* :: */[0,param,0],
                                  transl_module(0,bodypath,body)];
                          
                         }}
                     else
                      {switch(param$1[0])
                        {case 1:
                          var param$prime=Ident["create"]("funarg");
                          
                          return /* Lfunction */[3,
                                  0,
                                  /* :: */[0,param$prime,0],
                                  /* Llet */[4,
                                   1,
                                   param,
                                   apply_coercion(1,param$1[1],/* Lvar */[0,param$prime]),
                                   transl_module(param$1[2],bodypath,body)]];
                          
                         default:
                          return Misc["fatal_error"]("Translmod.transl_module");}}
                     },
                   cc);
          
         case 3:
          return Translobj["oo_wrap"]
                  (mexp[4],
                   1,
                   apply_coercion(0,cc),
                   /* Lapply */[2,
                    transl_module(0,0,match$1[1]),
                    /* :: */[0,transl_module(match$1[3],0,match$1[2]),0],
                    mexp[2]]);
          
         case 4:
          return transl_module
                  (compose_coercions(cc,match$1[4]),rootpath,match$1[1]);
          
         case 5:
          return apply_coercion(0,cc,Translcore["transl_exp"](match$1[1]));
         }
       }
    };

var
 transl_struct=
  function(fields,cc,rootpath,str)
   {return transl_structure(fields,cc,rootpath,str[1]);};

var
 transl_structure=
  function(fields,cc,rootpath,param)
   {if(param)
     {var rem=param[2];
      
      var item=param[1];
      
      var match=item[1];
      
      switch(match)
       {case 0:
         return /* Lsequence */[13,
                 Translcore["transl_exp"](match[1]),
                 transl_structure(fields,cc,rootpath,rem)];
         
        case 1:
         var pat_expr_list=match[2];
         
         var
          ext_fields=
           Pervasives["@"]
            (Typedtree["rev_let_bound_idents"](pat_expr_list),fields);
         
         return Translcore["transl_let"]
                 (match[1],
                  pat_expr_list,
                  transl_structure(ext_fields,cc,rootpath,rem));
         
        case 2:
         record_primitive(match[1][4]);
         return transl_structure(fields,cc,rootpath,rem);
         
        case 3:return transl_structure(fields,cc,rootpath,rem);
        case 4:
         var tyext=match[1];
         
         var ids=List["map"](function(ext){return ext[1];},tyext[4]);
         
         return transl_type_extension
                 (item[3],
                  rootpath,
                  tyext,
                  transl_structure
                   (List["rev_append"](ids,fields),cc,rootpath,rem));
         
        case 5:
         var ext=match[1];
         
         var id=ext[1];
         
         var path=field_path(rootpath,id);
         
         return /* Llet */[4,
                 0,
                 id,
                 transl_extension_constructor(item[3],path,ext),
                 transl_structure(/* :: */[0,id,fields],cc,rootpath,rem)];
         
        case 6:
         var mb=match[1];
         
         var id$1=mb[1];
         
         return /* Llet */[4,
                 pure_module(mb[3]),
                 id$1,
                 transl_module(0,field_path(rootpath,id$1),mb[3]),
                 transl_structure(/* :: */[0,id$1,fields],cc,rootpath,rem)];
         
        case 7:
         var bindings=match[1];
         
         var
          ext_fields$1=
           List["rev_append"]
            (List["map"](function(mb$1){return mb$1[1];},bindings),fields);
         
         return compile_recmodule
                 (function(id$2,modl)
                   {return transl_module(0,field_path(rootpath,id$2),modl);},
                  bindings,
                  transl_structure(ext_fields$1,cc,rootpath,rem));
         
        case 10:
         var cl_list=match[1];
         
         var
          ids$1=
           List["map"](function(param$1){return param$1[1][4];},cl_list);
         
         return /* Lletrec */[5,
                 List["map"]
                  (function(param$1)
                    {var ci=param$1[1];
                     
                     var id$2=ci[4];
                     
                     var cl=ci[8];
                     
                     return /* tuple */[0,
                             id$2,
                             Translclass["transl_class"]
                              (ids$1,id$2,param$1[2],cl,param$1[3])];
                     },
                   cl_list),
                 transl_structure
                  (List["rev_append"](ids$1,fields),cc,rootpath,rem)];
         
        case 12:
         var incl=match[1];
         
         var ids$2=bound_value_identifiers(incl[2]);
         
         var modl=incl[1];
         
         var mid=Ident["create"]("include");
         
         var
          rebind_idents=
           function(pos,newfields,param$1)
            {if(param$1)
              {var id$2=param$1[1];
               
               return /* Llet */[4,
                       1,
                       id$2,
                       /* Lprim */[6,
                        /* Pfield */[6,pos],
                        /* :: */[0,/* Lvar */[0,mid],0]],
                       rebind_idents(pos+1,/* :: */[0,id$2,newfields],param$1[2])];
               }
             else
              {return transl_structure(newfields,cc,rootpath,rem);}
             };
         
         return /* Llet */[4,
                 pure_module(modl),
                 mid,
                 transl_module(0,0,modl),
                 rebind_idents(0,fields,ids$2)];
         
        default:return transl_structure(fields,cc,rootpath,rem);}
      }
    else
     {if(typeof cc=="number")
       {switch(cc)
         {case 0:
           var fields$1=List["rev"](fields);
           
           return /* Lprim */[6,
                   /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                   List["map"]
                    (function(id$2)
                      {if(is_top(rootpath))
                        {export_identifiers[1]=
                         /* :: */[0,/* Id */[0,id$2],export_identifiers[1]],
                         0}
                       else
                        {}
                       
                       return /* Lvar */[0,id$2];
                       },
                     fields$1)];
           
          }}
      else
       {switch(cc[0])
         {case 0:
           var v=$$Array["of_list"](List["rev"](fields));
           
           var get_field=function(pos){return /* Lvar */[0,v[pos]];};
           
           var
            ids$3=
             List["fold_right"]
              (Lambda["IdentSet"][4],fields,Lambda["IdentSet"][1]);
           
           var
            lam=
             /* Lprim */[6,
              /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
              List["map"]
               (function(param$1)
                 {var cc$1=param$1[2];
                  
                  var pos=param$1[1];
                  
                  var exit;
                  
                  if(typeof cc$1=="number")
                   {switch(cc$1){}}
                  else
                   {switch(cc$1[0])
                     {case 2:
                       if(is_top(rootpath))
                        {export_identifiers[1]=
                         /* :: */[0,/* Id */[0,cc$1[1]],export_identifiers[1]],
                         0}
                       else
                        {}
                       
                       return Translcore["transl_primitive"]
                               (Location["none"],cc$1[2]);
                       
                      default:exit=97;}}
                  
                  switch(exit)
                   {case 97:
                     if(is_top(rootpath))
                      {export_identifiers[1]=
                       /* :: */[0,/* Id */[0,v[pos]],export_identifiers[1]],
                       0}
                     else
                      {}
                     
                     return apply_coercion(0,cc$1,get_field(pos));
                     
                    }
                  },
                cc[1])];
           
           var
            id_pos_list=
             List["filter"]
              (function(param$1)
                {return !Lambda["IdentSet"][3](param$1[1],ids$3);},
               cc[2]);
           
           return wrap_id_pos_list(id_pos_list,get_field,lam);
           
          default:return Misc["fatal_error"]("Translmod.transl_structure");}}
      }
    };

var
 pure_module=
  function(m)
   {var match=m[1];
    
    switch(match)
     {case 0:return 1;case 4:return pure_module(match[1]);default:return 0;}
    };

Translcore["transl_module"][1]=transl_module,0;
var
 transl_implementation=
  function(module_name,param)
   {Translobj["reset_labels"](0);
    primitive_declarations[1]=0,0;
    var module_id=Ident["create_persistent"](module_name);
    
    return /* Lprim */[6,
            /* Psetglobal */[4,module_id],
            /* :: */[0,
             Translobj["transl_label_init"]
              (transl_struct(0,param[2],global_path(module_id),param[1])),
             0]];
    };

var
 defined_idents=
  function(param)
   {if(param)
     {var rem=param[2];
      
      var match=param[1][1];
      
      var exit;
      
      switch(match)
       {case 1:
         return Pervasives["@"]
                 (Typedtree["let_bound_idents"](match[2]),defined_idents(rem));
         
        case 4:
         return Pervasives["@"]
                 (List["map"](function(ext){return ext[1];},match[1][4]),
                  defined_idents(rem));
         
        case 5:exit=88;
        case 6:exit=88;
        case 7:
         return Pervasives["@"]
                 (List["map"](function(mb){return mb[1];},match[1]),
                  defined_idents(rem));
         
        case 10:
         return Pervasives["@"]
                 (List["map"]
                   (function(param$1){return param$1[1][4];},match[1]),
                  defined_idents(rem));
         
        case 12:
         return Pervasives["@"]
                 (bound_value_identifiers(match[1][2]),defined_idents(rem));
         
        default:return defined_idents(rem);}
      
      switch(exit)
       {case 88:return /* :: */[0,match[1][1],defined_idents(rem)];}
      }
    else
     {return 0;}
    };

var
 more_idents=
  function(param)
   {if(param)
     {var rem=param[2];
      
      var match=param[1][1];
      
      switch(match)
       {case 6:
         var match$1=match[1][3][1];
         
         switch(match$1)
          {case 1:
            return Pervasives["@"](all_idents(match$1[1][1]),more_idents(rem));
            
           default:return more_idents(rem);}
         
        default:return more_idents(rem);}
      }
    else
     {return 0;}
    };

var
 all_idents=
  function(param)
   {if(param)
     {var rem=param[2];
      
      var match=param[1][1];
      
      switch(match)
       {case 1:
         return Pervasives["@"]
                 (Typedtree["let_bound_idents"](match[2]),all_idents(rem));
         
        case 4:
         return Pervasives["@"]
                 (List["map"](function(ext){return ext[1];},match[1][4]),
                  all_idents(rem));
         
        case 5:return /* :: */[0,match[1][1],all_idents(rem)];
        case 6:
         var mb=match[1];
         
         var match$1=mb[3][1];
         
         switch(match$1)
          {case 1:
            return Pervasives["@"]
                    (/* :: */[0,mb[1],all_idents(match$1[1][1])],
                     all_idents(rem));
            
           default:return /* :: */[0,mb[1],all_idents(rem)];}
         
        case 7:
         return Pervasives["@"]
                 (List["map"](function(mb$1){return mb$1[1];},match[1]),
                  all_idents(rem));
         
        case 10:
         return Pervasives["@"]
                 (List["map"]
                   (function(param$1){return param$1[1][4];},match[1]),
                  all_idents(rem));
         
        case 12:
         return Pervasives["@"]
                 (bound_value_identifiers(match[1][2]),all_idents(rem));
         
        default:return all_idents(rem);}
      }
    else
     {return 0;}
    };

var transl_store_subst=[0,Ident["empty"]];

var
 nat_toplevel_name=
  function(id)
   {try
     {var match=Ident["find_same"](id,transl_store_subst[1]);
      
      var exit;
      
      switch(match)
       {case 6:
         var match$1=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 6:
              var match$2=match[2];
              
              if(match$2)
               {var match$3=match$2[1];
                
                switch(match$3)
                 {case 6:
                   var match$4=match$3[1];
                   
                   if(typeof match$4=="number")
                    {switch(match$4){}}
                   else
                    {switch(match$4[0])
                      {case 3:
                        if(match$3[2])
                         {exit=80;}
                        else
                         {if(match$2[2])
                           {exit=80;}
                          else
                           {return /* tuple */[0,match$4[1],match$1[1]];}
                          }
                        
                       default:exit=80;}}
                   
                  default:exit=80;}
                }
              else
               {exit=80;}
              
             default:exit=80;}}
         
        default:exit=80;}
      
      switch(exit){case 80:throw Not_found;}
      }
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]
                (Pervasives["^"]
                  ("Translmod.nat_toplevel_name: ",Ident["unique_name"](id)));
        }
      else
       {throw exn;}
      }
    };

var
 transl_store_structure=
  function(glob,map,prims,str)
   {var
     transl_store=
      function(rootpath,subst,param)
       {if(param)
         {var rem=param[2];
          
          var item=param[1];
          
          var match=item[1];
          
          switch(match)
           {case 0:
             return /* Lsequence */[13,
                     Lambda["subst_lambda"]
                      (subst,Translcore["transl_exp"](match[1])),
                     transl_store(rootpath,subst,rem)];
             
            case 1:
             var pat_expr_list=match[2];
             
             var ids=Typedtree["let_bound_idents"](pat_expr_list);
             
             var
              lam=
               Translcore["transl_let"]
                (match[1],pat_expr_list,store_idents(ids));
             
             return /* Lsequence */[13,
                     Lambda["subst_lambda"](subst,lam),
                     transl_store(rootpath,add_idents(0,ids,subst),rem)];
             
            case 2:
             record_primitive(match[1][4]);
             return transl_store(rootpath,subst,rem);
             
            case 3:return transl_store(rootpath,subst,rem);
            case 4:
             var tyext=match[1];
             
             var ids$1=List["map"](function(ext){return ext[1];},tyext[4]);
             
             var
              lam$1=
               transl_type_extension
                (item[3],rootpath,tyext,store_idents(ids$1));
             
             return /* Lsequence */[13,
                     Lambda["subst_lambda"](subst,lam$1),
                     transl_store(rootpath,add_idents(0,ids$1,subst),rem)];
             
            case 5:
             var ext=match[1];
             
             var id=ext[1];
             
             var path=field_path(rootpath,id);
             
             var lam$2=transl_extension_constructor(item[3],path,ext);
             
             return /* Lsequence */[13,
                     /* Llet */[4,
                      0,
                      id,
                      Lambda["subst_lambda"](subst,lam$2),
                      store_ident(id)],
                     transl_store(rootpath,add_ident(0,id,subst),rem)];
             
            case 6:
             var match$1=match[1];
             
             var modl=match$1[3];
             
             var match$2=modl[1];
             
             var id$1=match$1[1];
             
             switch(match$2)
              {case 1:
                var str$1=match$2[1];
                
                var
                 lam$3=
                  transl_store(field_path(rootpath,id$1),subst,str$1[1]);
                
                var subst$1=transl_store_subst[1];
                
                return /* Lsequence */[13,
                        lam$3,
                        /* Llet */[4,
                         0,
                         id$1,
                         Lambda["subst_lambda"]
                          (subst$1,
                           /* Lprim */[6,
                            /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                            List["map"]
                             (function(id$2){return /* Lvar */[0,id$2];},
                              defined_idents(str$1[1]))]),
                         /* Lsequence */[13,
                          store_ident(id$1),
                          transl_store(rootpath,add_ident(1,id$1,subst$1),rem)]]];
                
               default:
                var lam$4=transl_module(0,field_path(rootpath,id$1),modl);
                
                return /* Llet */[4,
                        0,
                        id$1,
                        Lambda["subst_lambda"](subst,lam$4),
                        /* Lsequence */[13,
                         store_ident(id$1),
                         transl_store(rootpath,add_ident(1,id$1,subst),rem)]];
                }
             
            case 7:
             var bindings=match[1];
             
             var ids$2=List["map"](function(mb){return mb[1];},bindings);
             
             return compile_recmodule
                     (function(id$2,modl$1)
                       {return Lambda["subst_lambda"]
                                (subst,transl_module(0,field_path(rootpath,id$2),modl$1));
                        },
                      bindings,
                      /* Lsequence */[13,
                       store_idents(ids$2),
                       transl_store(rootpath,add_idents(1,ids$2,subst),rem)]);
             
            case 10:
             var cl_list=match[1];
             
             var
              ids$3=
               List["map"](function(param$1){return param$1[1][4];},cl_list);
             
             var
              lam$5=
               /* Lletrec */[5,
                List["map"]
                 (function(param$1)
                   {var ci=param$1[1];
                    
                    var id$2=ci[4];
                    
                    var cl=ci[8];
                    
                    return /* tuple */[0,
                            id$2,
                            Translclass["transl_class"]
                             (ids$3,id$2,param$1[2],cl,param$1[3])];
                    },
                  cl_list),
                store_idents(ids$3)];
             
             return /* Lsequence */[13,
                     Lambda["subst_lambda"](subst,lam$5),
                     transl_store(rootpath,add_idents(0,ids$3,subst),rem)];
             
            case 12:
             var incl=match[1];
             
             var ids$4=bound_value_identifiers(incl[2]);
             
             var modl$1=incl[1];
             
             var mid=Ident["create"]("include");
             
             var
              store_idents$1=
               function(pos,param$1)
                {if(param$1)
                  {var id$2=param$1[1];
                   
                   return /* Llet */[4,
                           1,
                           id$2,
                           /* Lprim */[6,
                            /* Pfield */[6,pos],
                            /* :: */[0,/* Lvar */[0,mid],0]],
                           /* Lsequence */[13,
                            store_ident(id$2),
                            store_idents$1(pos+1,param$1[2])]];
                   }
                 else
                  {return transl_store(rootpath,add_idents(1,ids$4,subst),rem);
                   }
                 };
             
             return /* Llet */[4,
                     0,
                     mid,
                     Lambda["subst_lambda"](subst,transl_module(0,0,modl$1)),
                     store_idents$1(0,ids$4)];
             
            default:return transl_store(rootpath,subst,rem);}
          }
        else
         {transl_store_subst[1]=subst,0;return Lambda["lambda_unit"];}
        };
    
    var
     store_ident=
      function(id)
       {try
         {var match=Ident["find_same"](id,map);
          
          var init_val=apply_coercion(1,match[2],/* Lvar */[0,id]);
          
          return /* Lprim */[6,
                  /* Psetfield */[7,match[1],0],
                  /* :: */[0,
                   /* Lprim */[6,/* Pgetglobal */[3,glob],0],
                   /* :: */[0,init_val,0]]];
          }
        catch(exn)
         {if(exn=Not_found)
           {return Misc["fatal_error"]
                    (Pervasives["^"]
                      ("Translmod.store_ident: ",Ident["unique_name"](id)));
            }
          else
           {throw exn;}
          }
        };
    
    var
     store_idents=
      function(idlist){return Lambda["make_sequence"](store_ident,idlist);};
    
    var
     add_ident=
      function(may_coerce,id,subst)
       {try
         {var match=Ident["find_same"](id,map);
          
          if("unknown primitive:isint")
           {return Ident["add"]
                    (id,
                     /* Lprim */[6,
                      /* Pfield */[6,match[1]],
                      /* :: */[0,/* Lprim */[6,/* Pgetglobal */[3,glob],0],0]],
                     subst);
            }
          else
           {if(may_coerce)
             {return subst;}
            else
             {throw [0,Assert_failure,[0,"bytecomp/translmod.ml",721,40]];}
            }
          }
        catch(exn)
         {if(exn=Not_found)
           {throw [0,Assert_failure,[0,"bytecomp/translmod.ml",723,6]];}
          else
           {throw exn;}
          }
        };
    
    var
     add_idents=
      function(may_coerce,idlist,subst)
       {return List["fold_right"](add_ident(may_coerce),idlist,subst);};
    
    var
     store_primitive=
      function(param,cont)
       {return /* Lsequence */[13,
                /* Lprim */[6,
                 /* Psetfield */[7,param[1],0],
                 /* :: */[0,
                  /* Lprim */[6,/* Pgetglobal */[3,glob],0],
                  /* :: */[0,
                   Translcore["transl_primitive"](Location["none"],param[2]),
                   0]]],
                cont];
        };
    
    return List["fold_right"]
            (store_primitive,
             prims,
             transl_store(global_path(glob),transl_store_subst[1],str));
    };

var
 build_ident_map=
  function(restr,idlist,more_ids)
   {var
     natural_map=
      function(pos,map,prims,param)
       {if(param)
         {return natural_map
                  (pos+1,
                   Ident["add"](param[1],/* tuple */[0,pos,0],map),
                   prims,
                   param[2]);
          }
        else
         {return /* tuple */[0,map,prims,pos];}
        };
    
    if(typeof restr=="number")
     {switch(restr){case 0:var match=natural_map(0,Ident["empty"],0,idlist);}}
    else
     {switch(restr[0])
       {case 0:
         var idarray=$$Array["of_list"](idlist);
         
         var
          export_map=
           function(pos,map,prims,undef,param)
            {if(param)
              {var match$1=param[1];
               
               var cc=match$1[2];
               
               var exit;
               
               if(typeof cc=="number")
                {switch(cc){}}
               else
                {switch(cc[0])
                  {case 2:
                    return export_map
                            (pos+1,
                             map,
                             /* :: */[0,/* tuple */[0,pos,cc[2]],prims],
                             undef,
                             param[2]);
                    
                   default:exit=47;}}
               
               switch(exit)
                {case 47:
                  var id=idarray[match$1[1]];
                  
                  return export_map
                          (pos+1,
                           Ident["add"](id,/* tuple */[0,pos,cc],map),
                           prims,
                           Misc["list_remove"](id,undef),
                           param[2]);
                  
                 }
               }
             else
              {return natural_map(pos,map,prims,undef);}
             };
         
         var match=export_map(0,Ident["empty"],0,idlist,restr[1]);
         
        default:var match=Misc["fatal_error"]("Translmod.build_ident_map");}}
    
    return natural_map(match[3],match[1],match[2],more_ids);
    };

var
 transl_store_gen=
  function(module_name,param,topl)
   {var str=param[1][1];
    
    Translobj["reset_labels"](0);
    primitive_declarations[1]=0,0;
    var module_id=Ident["create_persistent"](module_name);
    
    var match=build_ident_map(param[2],defined_idents(str),more_idents(str));
    
    var size=match[3];
    
    var prims=match[2];
    
    var map=match[1];
    
    var
     f=
      function(str$1)
       {var exit;
        
        if(str$1)
         {var match$1=str$1[1][1];
          
          switch(match$1)
           {case 0:
             if(str$1[2])
              {exit=41;}
             else
              {if(topl)
                {if(size=0)
                  {}
                 else
                  {throw [0,Assert_failure,[0,"bytecomp/translmod.ml",788,8]];
                   }
                 
                 return Lambda["subst_lambda"]
                         (transl_store_subst[1],Translcore["transl_exp"](match$1[1]));
                 }
               else
                {exit=41;}
               }
             
            default:exit=41;}
          }
        else
         {exit=41;}
        
        switch(exit)
         {case 41:return transl_store_structure(module_id,map,prims,str$1);}
        };
    
    return Translobj["transl_store_label_init"](module_id,size,f,str);
    };

var
 transl_store_phrases=
  function(module_name,str)
   {return transl_store_gen(module_name,/* tuple */[0,str,0],1);};

var
 transl_store_implementation=
  function(module_name,param)
   {var s=transl_store_subst[1];
    
    transl_store_subst[1]=Ident["empty"],0;
    var r=transl_store_gen(module_name,/* tuple */[0,param[1],param[2]],0);
    
    transl_store_subst[1]=s,0;
    return r;
    };

var toploop_ident=Ident["create_persistent"]("Toploop");

var toploop_getvalue_pos=0;

var toploop_setvalue_pos=1;

var aliased_idents=[0,Ident["empty"]];

var
 set_toplevel_unique_name=
  function(id)
   {return aliased_idents[1]=
           Ident["add"]
            (id,Ident["unique_toplevel_name"](id),aliased_idents[1]),
           0;
    };

var
 toplevel_name=
  function(id)
   {try
     {return Ident["find_same"](id,aliased_idents[1]);}
    catch(exn){if(exn=Not_found){return Ident["name"](id);}else{throw exn;}}
    };

var
 toploop_getvalue=
  function(id)
   {return /* Lapply */[2,
            /* Lprim */[6,
             /* Pfield */[6,toploop_getvalue_pos],
             /* :: */[0,/* Lprim */[6,/* Pgetglobal */[3,toploop_ident],0],0]],
            /* :: */[0,
             /* Lconst */[1,
              /* Const_base */[0,/* Const_string */[2,toplevel_name(id),0]]],
             0],
            Location["none"]];
    };

var
 toploop_setvalue=
  function(id,lam)
   {return /* Lapply */[2,
            /* Lprim */[6,
             /* Pfield */[6,toploop_setvalue_pos],
             /* :: */[0,/* Lprim */[6,/* Pgetglobal */[3,toploop_ident],0],0]],
            /* :: */[0,
             /* Lconst */[1,
              /* Const_base */[0,/* Const_string */[2,toplevel_name(id),0]]],
             /* :: */[0,lam,0]],
            Location["none"]];
    };

var
 toploop_setvalue_id=
  function(id){return toploop_setvalue(id,/* Lvar */[0,id]);};

var
 close_toplevel_term=
  function(lam)
   {return Lambda["IdentSet"][14]
            (function(id,l){return /* Llet */[4,0,id,toploop_getvalue(id),l];},
             Lambda["free_variables"](lam),
             lam);
    };

var
 transl_toplevel_item=
  function(item)
   {var match=item[1];
    
    switch(match)
     {case 0:return Translcore["transl_exp"](match[1]);
      case 1:
       var pat_expr_list=match[2];
       
       var idents=Typedtree["let_bound_idents"](pat_expr_list);
       
       return Translcore["transl_let"]
               (match[1],
                pat_expr_list,
                Lambda["make_sequence"](toploop_setvalue_id,idents));
       
      case 4:
       var tyext=match[1];
       
       var idents$1=List["map"](function(ext){return ext[1];},tyext[4]);
       
       return transl_type_extension
               (item[3],
                0,
                tyext,
                Lambda["make_sequence"](toploop_setvalue_id,idents$1));
       
      case 5:
       var ext=match[1];
       
       return toploop_setvalue
               (ext[1],transl_extension_constructor(item[3],0,ext));
       
      case 6:
       var match$1=match[1];
       
       var id=match$1[1];
       
       set_toplevel_unique_name(id);
       var lam=transl_module(0,/* Some */[0,/* Pident */[0,id]],match$1[3]);
       
       return toploop_setvalue(id,lam);
       
      case 7:
       var bindings=match[1];
       
       var idents$2=List["map"](function(mb){return mb[1];},bindings);
       
       return compile_recmodule
               (function(id$1,modl)
                 {return transl_module
                          (0,/* Some */[0,/* Pident */[0,id$1]],modl);
                  },
                bindings,
                Lambda["make_sequence"](toploop_setvalue_id,idents$2));
       
      case 10:
       var cl_list=match[1];
       
       var ids=List["map"](function(param){return param[1][4];},cl_list);
       
       List["iter"](set_toplevel_unique_name,ids);
       return /* Lletrec */[5,
               List["map"]
                (function(param)
                  {var ci=param[1];
                   
                   var id$1=ci[4];
                   
                   var cl=ci[8];
                   
                   return /* tuple */[0,
                           id$1,
                           Translclass["transl_class"](ids,id$1,param[2],cl,param[3])];
                   },
                 cl_list),
               Lambda["make_sequence"]
                (function(param){return toploop_setvalue_id(param[1][4]);},
                 cl_list)];
       
      case 12:
       var incl=match[1];
       
       var ids$1=bound_value_identifiers(incl[2]);
       
       var modl=incl[1];
       
       var mid=Ident["create"]("include");
       
       var
        set_idents=
         function(pos,param)
          {if(param)
            {return /* Lsequence */[13,
                     toploop_setvalue
                      (param[1],
                       /* Lprim */[6,
                        /* Pfield */[6,pos],
                        /* :: */[0,/* Lvar */[0,mid],0]]),
                     set_idents(pos+1,param[2])];
             }
           else
            {return Lambda["lambda_unit"];}
           };
       
       return /* Llet */[4,0,mid,transl_module(0,0,modl),set_idents(0,ids$1)];
       
      default:return Lambda["lambda_unit"];}
    };

var
 transl_toplevel_item_and_close=
  function(itm)
   {return close_toplevel_term
            (Translobj["transl_label_init"](transl_toplevel_item(itm)));
    };

var
 transl_toplevel_definition=
  function(str)
   {Translobj["reset_labels"](0);
    return Lambda["make_sequence"](transl_toplevel_item_and_close,str[1]);
    };

var
 get_component=
  function(param)
   {if(param)
     {return /* Lprim */[6,/* Pgetglobal */[3,param[1]],0];}
    else
     {return /* Lconst */[1,Lambda["const_unit"]];}
    };

var
 transl_package=
  function(component_names,target_name,coercion)
   {var
     components=
      /* Lprim */[6,
       /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
       List["map"](get_component,component_names)];
    
    return /* Lprim */[6,
            /* Psetglobal */[4,target_name],
            /* :: */[0,apply_coercion(0,coercion,components),0]];
    };

var
 transl_store_package=
  function(component_names,target_name,coercion)
   {var
     make_sequence=
      function(fn,pos,arg)
       {if(arg)
         {return /* Lsequence */[13,
                  fn(pos,arg[1]),
                  make_sequence(fn,pos+1,arg[2])];
          }
        else
         {return Lambda["lambda_unit"];}
        };
    
    if(typeof coercion=="number")
     {switch(coercion)
       {case 0:
         return /* tuple */[0,
                 List["length"](component_names),
                 make_sequence
                  (function(pos,id)
                    {return /* Lprim */[6,
                             /* Psetfield */[7,pos,0],
                             /* :: */[0,
                              /* Lprim */[6,/* Pgetglobal */[3,target_name],0],
                              /* :: */[0,get_component(id),0]]];
                     },
                   0,
                   component_names)];
         
        }}
    else
     {switch(coercion[0])
       {case 0:
         var pos_cc_list=coercion[1];
         
         var
          components=
           /* Lprim */[6,
            /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
            List["map"](get_component,component_names)];
         
         var blk=Ident["create"]("block");
         
         return /* tuple */[0,
                 List["length"](pos_cc_list),
                 /* Llet */[4,
                  0,
                  blk,
                  apply_coercion(0,coercion,components),
                  make_sequence
                   (function(pos,id)
                     {return /* Lprim */[6,
                              /* Psetfield */[7,pos,0],
                              /* :: */[0,
                               /* Lprim */[6,/* Pgetglobal */[3,target_name],0],
                               /* :: */[0,
                                /* Lprim */[6,
                                 /* Pfield */[6,pos],
                                 /* :: */[0,/* Lvar */[0,blk],0]],
                                0]]];
                      },
                    0,
                    pos_cc_list)]];
         
        default:throw [0,Assert_failure,[0,"bytecomp/translmod.ml",971,9]];}}
    };

var
 report_error=
  function(ppf,param)
   {return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,0,""]],
               [11,
                "Cannot safely evaluate the definition",
                [17,
                 [0,"@ ",1,0],
                 [11,"of the recursively-defined module ",[15,[17,0,0]]]]]],
              "@[Cannot safely evaluate the definition@ of the recursively-defined module %a@]"],
             Printtyp["ident"],
             param[1]);
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,
                Location["error_of_printer"](param[2],report_error,param[3])];
        }
      else
       {return 0;}
      });

var
 reset=
  function(param)
   {export_identifiers[1]=0,0;
    primitive_declarations[1]=0,0;
    transl_store_subst[1]=Ident["empty"],0;
    toploop_ident[3]=0,0;
    return aliased_idents[1]=Ident["empty"],0;
    };

module["exports"]=
{"transl_implementation":transl_implementation,
 "transl_store_phrases":transl_store_phrases,
 "transl_store_implementation":transl_store_implementation,
 "transl_toplevel_definition":transl_toplevel_definition,
 "transl_package":transl_package,
 "transl_store_package":transl_store_package,
 "toplevel_name":toplevel_name,
 "nat_toplevel_name":nat_toplevel_name,
 "primitive_declarations":primitive_declarations,
 "Error":$$Error,
 "report_error":report_error,
 "reset":reset,
 "get_export_identifiers":get_export_identifiers};

