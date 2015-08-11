// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Typeopt=require("Typeopt");
var Pervasives=require("Pervasives");
var List=require("List");
var Btype=require("Btype");
var Env=require("Env");
var Matching=require("Matching");
var Clflags=require("Clflags");
var Types=require("Types");
var Translcore=require("Translcore");
var Format=require("Format");
var Lambda=require("Lambda");
var Path=require("Path");
var Translobj=require("Translobj");
var Location=require("Location");
var Ident=require("Ident");


var $$Error="unknown primitive:caml_set_oo_id";

var
 lfunction=
  function(params,body)
   {if(params=0)
     {return body;}
    else
     {var exit;
      
      switch(body)
       {case 3:
         if(body[1]!=0)
          {exit=211;}
         else
          {return /* Lfunction */[3,0,Pervasives["@"](params,body[2]),body[3]];
           }
         
        default:exit=211;}
      
      switch(exit){case 211:return /* Lfunction */[3,0,params,body];}
      }
    };

var
 lapply=
  function(func,args,loc)
   {switch(func)
     {case 2:return /* Lapply */[2,func[1],Pervasives["@"](func[2],args),loc];
      default:return /* Lapply */[2,func,args,loc];}
    };

var
 mkappl=
  function(param){return /* Lapply */[2,param[1],param[2],Location["none"]];};

var
 lsequence=
  function(l1,l2)
   {if("unknown primitive:caml_equal")
     {return l1;}
    else
     {return /* Lsequence */[13,l1,l2];}
    };

var
 lfield=
  function(v,i)
   {return /* Lprim */[6,/* Pfield */[6,i],/* :: */[0,/* Lvar */[0,v],0]];};

var
 transl_label=
  function(l){return Translobj["share"](/* Const_immstring */[4,l]);};

var
 transl_meth_list=
  function(lst)
   {if(lst=0)
     {return [1,[1,0,0]];}
    else
     {return Translobj["share"]
              (/* Const_block */[2,
                0,
                2,
                List["map"]
                 (function(lab){return /* Const_immstring */[4,lab];},lst)]);
      }
    };

var
 set_inst_var=
  function(obj,id,expr)
   {if(Typeopt["maybe_pointer"](expr)){var kind=1;}else{var kind=2;}
    
    return /* Lprim */[6,
            /* Parraysetu */[20,kind],
            /* :: */[0,
             /* Lvar */[0,obj],
             /* :: */[0,
              /* Lvar */[0,id],
              /* :: */[0,Translcore["transl_exp"](expr),0]]]];
    };

var
 copy_inst_var=
  function(obj,id,expr,templ,offset)
   {if(Typeopt["maybe_pointer"](expr)){var kind=1;}else{var kind=2;}
    
    var id$prime=Ident["create"](Ident["name"](id));
    
    return /* Llet */[4,
            0,
            id$prime,
            /* Lprim */[6,0,/* :: */[0,/* Lvar */[0,id],0]],
            /* Lprim */[6,
             /* Parraysetu */[20,kind],
             /* :: */[0,
              /* Lvar */[0,obj],
              /* :: */[0,
               /* Lvar */[0,id$prime],
               /* :: */[0,
                /* Lprim */[6,
                 /* Parrayrefu */[19,kind],
                 /* :: */[0,
                  /* Lvar */[0,templ],
                  /* :: */[0,
                   /* Lprim */[6,
                    7,
                    /* :: */[0,
                     /* Lvar */[0,id$prime],
                     /* :: */[0,/* Lvar */[0,offset],0]]],
                   0]]],
                0]]]]];
    };

var
 transl_val=
  function(tbl,create,name)
   {return mkappl
            (/* tuple */[0,
              Translobj["oo_prim"](create?"new_variable":"get_variable"),
              /* :: */[0,/* Lvar */[0,tbl],/* :: */[0,transl_label(name),0]]]);
    };

var
 transl_vals=
  function(tbl,create,strict,vals,rem)
   {return List["fold_right"]
            (function(param,rem$1)
              {return /* Llet */[4,
                       strict,
                       param[2],
                       transl_val(tbl,create,param[1]),
                       rem$1];
               },
             vals,
             rem);
    };

var
 meths_super=
  function(tbl,meths,inh_meths)
   {return List["fold_right"]
            (function(param,rem)
              {var nm=param[1];
               
               try
                {return /* :: */[0,
                         /* tuple */[0,
                          nm,
                          param[2],
                          mkappl
                           (/* tuple */[0,
                             Translobj["oo_prim"]("get_method"),
                             /* :: */[0,
                              /* Lvar */[0,tbl],
                              /* :: */[0,/* Lvar */[0,Types["Meths"][22](nm,meths)],0]]])],
                         rem];
                 }
               catch(exn){if(exn=Not_found){return rem;}else{throw exn;}}
               },
             inh_meths,
             0);
    };

var
 bind_super=
  function(tbl,param,cl_init)
   {return transl_vals
            (tbl,
             0,
             2,
             param[1],
             List["fold_right"]
              (function(param$1,rem)
                {return /* Llet */[4,2,param$1[2],param$1[3],rem];},
               param[2],
               cl_init));
    };

var
 create_object=
  function(cl,obj,init)
   {var obj$prime=Ident["create"]("self");
    
    var match=init(obj$prime);
    
    var has_init=match[3];
    
    var obj_init=match[2];
    
    var inh_init=match[1];
    
    if("unknown primitive:caml_equal")
     {return /* tuple */[0,
              inh_init,
              mkappl
               (/* tuple */[0,
                 Translobj["oo_prim"]
                  (has_init
                    ?"create_object_and_run_initializers"
                    :"create_object_opt"),
                 /* :: */[0,obj,/* :: */[0,/* Lvar */[0,cl],0]]])];
      }
    else
     {return /* tuple */[0,
              inh_init,
              /* Llet */[4,
               0,
               obj$prime,
               mkappl
                (/* tuple */[0,
                  Translobj["oo_prim"]("create_object_opt"),
                  /* :: */[0,obj,/* :: */[0,/* Lvar */[0,cl],0]]]),
               /* Lsequence */[13,
                obj_init,
                !has_init
                 ?/* Lvar */[0,obj$prime]
                 :mkappl
                   (/* tuple */[0,
                     Translobj["oo_prim"]("run_initializers_opt"),
                     /* :: */[0,
                      obj,
                      /* :: */[0,
                       /* Lvar */[0,obj$prime],
                       /* :: */[0,/* Lvar */[0,cl],0]]]])]]];
      }
    };

var
 name_pattern=
  function($$default,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:return match[1];case 1:return match[2];default:exit=189;}}
    
    switch(exit){case 189:return Ident["create"]($$default);}
    };

var
 normalize_cl_path=
  function(cl,path)
   {return Env["normalize_path"](/* Some */[0,cl[2]],cl[4],path);};

var
 build_object_init=
  function(cl_table,obj,params,inh_init,obj_init,cl)
   {var match=cl[1];
    
    switch(match)
     {case 0:
       var obj_init$1=Ident["create"]("obj_init");
       
       var inh_init$1=inh_init[2];
       
       var envs=inh_init[1];
       
       if(envs)
        {var
          env=
           /* :: */[0,
            /* Lprim */[6,
             /* Pfield */[6,List["length"](inh_init$1)+1],
             /* :: */[0,/* Lvar */[0,envs[1]],0]],
            0];
         }
       else
        {var env=0;}
       
       return /* tuple */[0,
               /* tuple */[0,
                envs,
                /* :: */[0,
                 /* tuple */[0,obj_init$1,normalize_cl_path(cl,match[1])],
                 inh_init$1]],
               mkappl
                (/* tuple */[0,
                  /* Lvar */[0,obj_init$1],
                  Pervasives["@"](env,/* :: */[0,obj,0])])];
       
      case 1:
       var str=match[1];
       
       return create_object
               (cl_table,
                obj,
                function(obj$1)
                 {var
                   match$1=
                    List["fold_right"]
                     (function(field,param)
                       {var has_init=param[3];
                        
                        var obj_init$2=param[2];
                        
                        var inh_init$2=param[1];
                        
                        var match$2=field[1];
                        
                        var exit;
                        
                        switch(match$2)
                         {case 0:
                           var
                            match$3=
                             build_object_init
                              (cl_table,
                               /* Lvar */[0,obj$1],
                               0,
                               inh_init$2,
                               function(param$1){return Lambda["lambda_unit"];},
                               match$2[2]);
                           
                           return /* tuple */[0,
                                   match$3[1],
                                   lsequence(match$3[2],obj_init$2),
                                   1];
                           
                          case 1:
                           var match$4=match$2[4];
                           
                           switch(match$4)
                            {case 0:exit=177;
                             case 1:
                              return /* tuple */[0,
                                      inh_init$2,
                                      lsequence
                                       (set_inst_var(obj$1,match$2[3],match$4[2]),obj_init$2),
                                      has_init];
                              
                             }
                           
                          case 4:return /* tuple */[0,inh_init$2,obj_init$2,1];
                          default:exit=177;}
                        
                        switch(exit)
                         {case 177:
                           return /* tuple */[0,inh_init$2,obj_init$2,has_init];
                          }
                        },
                      str[2],
                      /* tuple */[0,inh_init,obj_init(obj$1),0]);
                  
                  return /* tuple */[0,
                          match$1[1],
                          List["fold_right"]
                           (function(param,rem)
                             {var id=param[1];
                              
                              return lsequence
                                      (/* Lifused */[19,id,set_inst_var(obj$1,id,param[2])],rem);
                              },
                            params,
                            match$1[2]),
                          match$1[3]];
                  });
       
      case 2:
       var partial=match[5];
       
       var pat=match[2];
       
       var
        vals=
         List["map"]
          (function(param){return /* tuple */[0,param[1],param[3]];},match[3]);
       
       var
        match$1=
         build_object_init
          (cl_table,
           obj,
           Pervasives["@"](vals,params),
           inh_init,
           obj_init,
           match[4]);
       
       var obj_init$2=match$1[2];
       
       var
        build=
         function(params$1,rem)
          {var param=name_pattern("param",pat);
           
           return /* Lfunction */[3,
                   0,
                   /* :: */[0,param,params$1],
                   Matching["for_function"]
                    (pat[2],
                     0,
                     /* Lvar */[0,param],
                     /* :: */[0,/* tuple */[0,pat,rem],0],
                     partial)];
           };
       
       var exit;
       
       var $js;
       switch(obj_init$2)
        {case 3:
          if(obj_init$2[1]!=0)
           {exit=180;}
          else
           {$js=build(obj_init$2[2],obj_init$2[3]);}
          
         default:exit=180;}
       
       var $js$1;
       switch(exit){case 180:$js$1=build(0,obj_init$2);}
       return /* tuple */[0,match$1[1],$js$1];
       
      case 3:
       var
        match$2=
         build_object_init(cl_table,obj,params,inh_init,obj_init,match[1]);
       
       return /* tuple */[0,
               match$2[1],
               Translcore["transl_apply"]
                (match$2[2],match[2],Location["none"])];
       
      case 4:
       var
        vals$1=
         List["map"]
          (function(param){return /* tuple */[0,param[1],param[3]];},match[3]);
       
       var
        match$3=
         build_object_init
          (cl_table,
           obj,
           Pervasives["@"](vals$1,params),
           inh_init,
           obj_init,
           match[4]);
       
       return /* tuple */[0,
               match$3[1],
               Translcore["transl_let"](match[1],match[2],match$3[2])];
       
      case 5:
       return build_object_init
               (cl_table,obj,params,inh_init,obj_init,match[1]);
       
      }
    };

var
 build_object_init_0=
  function(cl_table,params,cl,copy_env,subst_env,top,ids)
   {var match=cl[1];
    
    switch(match)
     {case 4:
       var
        vals=
         List["map"]
          (function(param){return /* tuple */[0,param[1],param[3]];},match[3]);
       
       return build_object_init_0
               (cl_table,
                Pervasives["@"](vals,params),
                match[4],
                copy_env,
                subst_env,
                top,
                ids);
       
      default:
       var $$self=Ident["create"]("self");
       
       var env=Ident["create"]("env");
       
       if(ids=0)
        {var obj=Lambda["lambda_unit"];}
       else
        {var obj=/* Lvar */[0,$$self];}
       
       if(top){var envs=0;}else{var envs=/* Some */[0,env];}
       
       var
        match$1=
         build_object_init
          (cl_table,obj,params,/* tuple */[0,envs,0],copy_env(env),cl);
       
       var obj_init=match$1[2];
       
       var inh_init=match$1[1][2];
       
       if(ids=0)
        {var obj_init$1=obj_init;}
       else
        {var obj_init$1=lfunction(/* :: */[0,$$self,0],obj_init);}
       
       return /* tuple */[0,
               inh_init,
               lfunction(/* :: */[0,env,0],subst_env(env,inh_init,obj_init$1))];
       }
    };

var
 bind_method=
  function(tbl,lab,id,cl_init)
   {return /* Llet */[4,
            0,
            id,
            mkappl
             (/* tuple */[0,
               Translobj["oo_prim"]("get_method_label"),
               /* :: */[0,/* Lvar */[0,tbl],/* :: */[0,transl_label(lab),0]]]),
            cl_init];
    };

var
 bind_methods=
  function(tbl,meths,vals,cl_init)
   {var
     methl=
      Types["Meths"][11]
       (function(lab,id,tl){return /* :: */[0,/* tuple */[0,lab,id],tl];},
        meths,
        0);
    
    var len=List["length"](methl);
    
    var nvals=List["length"](vals);
    
    if(len<2&&(nvals=0))
     {return Types["Meths"][11](bind_method(tbl),meths,cl_init);}
    else
     {if((len=0)&&nvals<2)
       {return transl_vals(tbl,1,0,vals,cl_init);}
      else
       {var ids=Ident["create"]("ids");
        
        var i=[0,len+nvals];
        
        if(nvals=0)
         {var match=[0,"get_method_labels",0];}
        else
         {var
           match=
            /* tuple */[0,
             "new_methods_variables",
             /* :: */[0,
              transl_meth_list
               (List["map"](function(prim){return prim[1];},vals)),
              0]];
          }
        
        return /* Llet */[4,
                0,
                ids,
                mkappl
                 (/* tuple */[0,
                   Translobj["oo_prim"](match[1]),
                   Pervasives["@"]
                    (/* :: */[0,
                      /* Lvar */[0,tbl],
                      /* :: */[0,
                       transl_meth_list
                        (List["map"](function(prim){return prim[1];},methl)),
                       0]],
                     match[2])]),
                List["fold_right"]
                 (function(param,lam)
                   {i[0]--;
                    return /* Llet */[4,2,param[2],lfield(ids,i[1]),lam];
                    },
                  Pervasives["@"](methl,vals),
                  cl_init)];
        }
      }
    };

var
 output_methods=
  function(tbl,methods,lam)
   {var exit;
    
    if(methods)
     {var match=methods[2];
      
      if(match)
       {if(match[2])
         {exit=155;}
        else
         {return lsequence
                  (mkappl
                    (/* tuple */[0,
                      Translobj["oo_prim"]("set_method"),
                      /* :: */[0,
                       /* Lvar */[0,tbl],
                       /* :: */[0,methods[1],/* :: */[0,match[1],0]]]]),
                   lam);
          }
        }
      else
       {exit=155;}
      }
    else
     {return lam;}
    
    switch(exit)
     {case 155:
       return lsequence
               (mkappl
                 (/* tuple */[0,
                   Translobj["oo_prim"]("set_methods"),
                   /* :: */[0,
                    /* Lvar */[0,tbl],
                    /* :: */[0,
                     /* Lprim */[6,
                      /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                      methods],
                     0]]]),
                lam);
       
      }
    };

var
 ignore_cstrs=
  function(cl)
   {var match=cl[1];
    
    var exit;
    
    switch(match){case 3:exit=154;case 5:exit=154;default:return cl;}
    
    switch(exit){case 154:return ignore_cstrs(match[1]);}
    };

var
 index=
  function(a,param)
   {if(param)
     {if("unknown primitive:caml_equal")
       {return 0;}
      else
       {return 1+index(a,param[2]);}
      }
    else
     {throw Not_found;}
    };

var bind_id_as_val=function(param){return /* tuple */[0,"",param[1]];};

var
 build_class_init=
  function(cla,cstr,$$super,inh_init,cl_init,msubst,top,cl)
   {var match=cl[1];
    
    switch(match)
     {case 0:
       if(inh_init)
        {var lpath=Lambda["transl_path"](/* Some */[0,cl[2]],cl[4],match[1]);
         
         return /* tuple */[0,
                 inh_init[2],
                 /* Llet */[4,
                  0,
                  inh_init[1][1],
                  mkappl
                   (/* tuple */[0,
                     /* Lprim */[6,[6,1],/* :: */[0,lpath,0]],
                     /* :: */[0,
                      /* Lvar */[0,cla],
                      top?/* :: */[0,/* Lprim */[6,[6,3],/* :: */[0,lpath,0]],0]:0]]),
                  bind_super(cla,$$super,cl_init)]];
         }
       else
        {throw [0,Assert_failure,[0,"bytecomp/translclass.ml",267,10]];}
       
      case 1:
       var str=match[1];
       
       var cl_init$1=bind_super(cla,$$super,cl_init);
       
       var
        match$1=
         List["fold_right"]
          (function(field,param)
            {var values=param[4];
             
             var methods=param[3];
             
             var cl_init$2=param[2];
             
             var inh_init$1=param[1];
             
             var match$2=field[1];
             
             var exit;
             
             switch(match$2)
              {case 0:
                var cl_init$3=output_methods(cla,methods,cl_init$2);
                
                var
                 match$3=
                  build_class_init
                   (cla,
                    0,
                    /* tuple */[0,match$2[4],meths_super(cla,str[4],match$2[5])],
                    inh_init$1,
                    cl_init$3,
                    msubst,
                    top,
                    match$2[2]);
                
                return /* tuple */[0,match$3[1],match$3[2],0,values];
                
               case 1:
                if(match$2[5])
                 {var values$1=values;}
                else
                 {var
                   values$1=
                    /* :: */[0,/* tuple */[0,match$2[1][1],match$2[3]],values];
                  }
                
                return /* tuple */[0,inh_init$1,cl_init$2,methods,values$1];
                
               case 2:
                var match$4=match$2[3];
                
                var name=match$2[1];
                
                switch(match$4)
                 {case 0:exit=132;
                  case 1:
                   var met_code=msubst(1,Translcore["transl_exp"](match$4[2]));
                   
                   if(Clflags["native_code"][1]&&(List["length"](met_code)=1))
                    {var
                      met=
                       Ident["create"](Pervasives["^"]("method_",name[1]));
                     
                     var
                      met_code$1=
                       /* :: */[0,
                        /* Llet */[4,0,met,List["hd"](met_code),/* Lvar */[0,met]],
                        0];
                     }
                   else
                    {var met_code$1=met_code;}
                   
                   return /* tuple */[0,
                           inh_init$1,
                           cl_init$2,
                           Pervasives["@"]
                            (/* :: */[0,
                              /* Lvar */[0,Types["Meths"][22](name[1],str[4])],
                              met_code$1],
                             methods),
                           values];
                   
                  }
                
               case 3:exit=132;
               case 4:
                return /* tuple */[0,
                        inh_init$1,
                        /* Lsequence */[13,
                         mkappl
                          (/* tuple */[0,
                            Translobj["oo_prim"]("add_initializer"),
                            /* :: */[0,
                             /* Lvar */[0,cla],
                             msubst(0,Translcore["transl_exp"](match$2[1]))]]),
                         cl_init$2],
                        methods,
                        values];
                
               case 5:
                return /* tuple */[0,inh_init$1,cl_init$2,methods,values];
               }
             
             switch(exit)
              {case 132:
                return /* tuple */[0,inh_init$1,cl_init$2,methods,values];
               }
             },
           str[2],
           /* tuple */[0,inh_init,cl_init$1,0,0]);
       
       var cl_init$2=output_methods(cla,match$1[3],match$1[2]);
       
       return /* tuple */[0,
               match$1[1],
               bind_methods(cla,str[4],match$1[4],cl_init$2)];
       
      case 2:
       var
        match$2=
         build_class_init
          (cla,cstr,$$super,inh_init,cl_init,msubst,top,match[4]);
       
       var vals=List["map"](bind_id_as_val,match[3]);
       
       return /* tuple */[0,match$2[1],transl_vals(cla,1,2,vals,match$2[2])];
       
      case 3:
       return build_class_init
               (cla,cstr,$$super,inh_init,cl_init,msubst,top,match[1]);
       
      case 4:
       var
        match$3=
         build_class_init
          (cla,cstr,$$super,inh_init,cl_init,msubst,top,match[4]);
       
       var vals$1=List["map"](bind_id_as_val,match[3]);
       
       return /* tuple */[0,match$3[1],transl_vals(cla,1,2,vals$1,match$3[2])];
       
      case 5:
       var concr_meths=match[5];
       
       var vals$2=match[3];
       
       var
        virt_meths=
         List["filter"]
          (function(lab){return !Types["Concr"][3](lab,concr_meths);},
           match[4]);
       
       var concr_meths$1=Types["Concr"][20](concr_meths);
       
       var
        narrow_args=
         /* :: */[0,
          /* Lvar */[0,cla],
          /* :: */[0,
           transl_meth_list(vals$2),
           /* :: */[0,
            transl_meth_list(virt_meths),
            /* :: */[0,transl_meth_list(concr_meths$1),0]]]];
       
       var cl$1=ignore_cstrs(match[1]);
       
       var match$4=cl$1[1];
       
       var exit;
       
       switch(match$4)
        {case 0:
          if(inh_init)
           {var match$5=inh_init[1];
            
            var path$prime=match$5[2];
            
            if(Path["same"](normalize_cl_path(cl$1,match$4[1]),path$prime))
             {}
            else
             {throw [0,Assert_failure,[0,"bytecomp/translclass.ml",342,10]];}
            
            var lpath$1=Lambda["transl_normal_path"](path$prime);
            
            var inh=Ident["create"]("inh");
            
            var ofs=List["length"](vals$2)+1;
            
            var
             cl_init$3=
              List["fold_left"]
               (function(init,param)
                 {return /* Llet */[4,
                          2,
                          param[2],
                          lfield(inh,index(param[1],concr_meths$1)+ofs),
                          init];
                  },
                cl_init,
                $$super[2]);
            
            var
             cl_init$4=
              List["fold_left"]
               (function(init,param)
                 {return /* Llet */[4,
                          2,
                          param[2],
                          lfield(inh,index(param[1],vals$2)+1),
                          init];
                  },
                cl_init$3,
                $$super[1]);
            
            return /* tuple */[0,
                    inh_init[2],
                    /* Llet */[4,
                     0,
                     inh,
                     mkappl
                      (/* tuple */[0,
                        Translobj["oo_prim"]("inherits"),
                        Pervasives["@"]
                         (narrow_args,
                          /* :: */[0,
                           lpath$1,
                           /* :: */[0,
                            /* Lconst */[1,/* Const_pointer */[1,top?1:0,0]],
                            0]])]),
                     /* Llet */[4,2,match$5[1],lfield(inh,0),cl_init$4]]];
            }
          else
           {exit=147;}
          
         default:exit=147;}
       
       switch(exit)
        {case 147:
          var
           core=
            function(cl_init$5)
             {return build_class_init
                      (cla,1,$$super,inh_init,cl_init$5,msubst,top,cl$1);
              };
          
          if(cstr)
           {return core(cl_init);}
          else
           {var
             match$6=
              core
               (/* Lsequence */[13,
                 mkappl
                  (/* tuple */[0,
                    Translobj["oo_prim"]("widen"),
                    /* :: */[0,/* Lvar */[0,cla],0]]),
                 cl_init]);
            
            return /* tuple */[0,
                    match$6[1],
                    /* Lsequence */[13,
                     mkappl
                      (/* tuple */[0,Translobj["oo_prim"]("narrow"),narrow_args]),
                     match$6[2]]];
            }
          
         }
       
      }
    };

var
 build_class_lets=
  function(cl,ids)
   {var match=cl[1];
    
    switch(match)
     {case 4:
       var defs=match[2];
       
       var rec_flag=match[1];
       
       var match$1=build_class_lets(match[4],0);
       
       var wrap=match$1[2];
       
       return /* tuple */[0,
               match$1[1],
               function(x)
                {var lam=Translcore["transl_let"](rec_flag,defs,wrap(x));
                 
                 if((ids=0)||Translcore["check_recursive_lambda"](ids,lam))
                  {return lam;}
                 else
                  {throw [0,$$Error,cl[2],0];}
                 }];
       
      default:return /* tuple */[0,cl[4],function(x){return x;}];}
    };

var
 get_class_meths=
  function(cl)
   {var match=cl[1];
    
    var exit;
    
    switch(match)
     {case 0:return Lambda["IdentSet"][1];
      case 1:
       return Types["Meths"][11]
               (function(param){return Lambda["IdentSet"][4];},
                match[1][4],
                Lambda["IdentSet"][1]);
       
      case 2:exit=118;
      case 3:exit=119;
      case 4:exit=118;
      case 5:exit=119;
      }
    
    switch(exit)
     {case 118:"unknown block:(exit 117 (field 3 match/1925))";
      case 119:"unknown block:(exit 117 (field 0 match/1925))";
      case 117:return get_class_meths(cl$1);
      }
    };

var
 transl_class_rebind=
  function(obj_init,cl,vf)
   {var match=cl[1];
    
    switch(match)
     {case 0:
       var path=match[1];
       
       if(vf=1)
        {try
          {if(Env["find_class"](path,cl[4])[4]=0)
            {throw Pervasives["Exit"];}
           else
            {}
           }
         catch(exn)
          {if(exn=Not_found){throw Pervasives["Exit"];}else{throw exn;}}
         }
       else
        {}
       
       return /* tuple */[0,normalize_cl_path(cl,path),obj_init];
       
      case 1:throw Pervasives["Exit"];
      case 2:
       var partial=match[5];
       
       var pat=match[2];
       
       var match$1=transl_class_rebind(obj_init,match[4],vf);
       
       var obj_init$1=match$1[2];
       
       var
        build=
         function(params,rem)
          {var param=name_pattern("param",pat);
           
           return /* Lfunction */[3,
                   0,
                   /* :: */[0,param,params],
                   Matching["for_function"]
                    (pat[2],
                     0,
                     /* Lvar */[0,param],
                     /* :: */[0,/* tuple */[0,pat,rem],0],
                     partial)];
           };
       
       var exit;
       
       var $js;
       switch(obj_init$1)
        {case 3:
          if(obj_init$1[1]!=0)
           {exit=109;}
          else
           {$js=build(obj_init$1[2],obj_init$1[3]);}
          
         default:exit=109;}
       
       var $js$1;
       switch(exit){case 109:$js$1=build(0,obj_init$1);}
       return /* tuple */[0,match$1[1],$js$1];
       
      case 3:
       var match$2=transl_class_rebind(obj_init,match[1],vf);
       
       return /* tuple */[0,
               match$2[1],
               Translcore["transl_apply"]
                (match$2[2],match[2],Location["none"])];
       
      case 4:
       var match$3=transl_class_rebind(obj_init,match[4],vf);
       
       return /* tuple */[0,
               match$3[1],
               Translcore["transl_let"](match[1],match[2],match$3[2])];
       
      case 5:
       var match$4=transl_class_rebind(obj_init,match[1],vf);
       
       var path$1=match$4[1];
       
       var
        check_constraint=
         function(param)
          {var exit$1;
           
           switch(param)
            {case 0:
              if(Path["same"](path$1,param[1])){return 0;}else{exit$1=115;}
             case 1:exit$1=115;
             case 2:return check_constraint(param[3]);
             }
           
           switch(exit$1){case 115:throw Pervasives["Exit"];}
           };
       
       check_constraint(cl[3]);
       return /* tuple */[0,path$1,match$4[2]];
       
      }
    };

var
 transl_class_rebind_0=
  function($$self,obj_init,cl,vf)
   {var match=cl[1];
    
    switch(match)
     {case 4:
       var match$1=transl_class_rebind_0($$self,obj_init,match[4],vf);
       
       return /* tuple */[0,
               match$1[1],
               Translcore["transl_let"](match[1],match[2],match$1[2])];
       
      default:
       var match$2=transl_class_rebind(obj_init,cl,vf);
       
       return /* tuple */[0,
               match$2[1],
               lfunction(/* :: */[0,$$self,0],match$2[2])];
       }
    };

var
 transl_class_rebind$1=
  function(ids,cl,vf)
   {try
     {var obj_init=Ident["create"]("obj_init");
      
      var $$self=Ident["create"]("self");
      
      var
       obj_init0=
        lapply
         (/* Lvar */[0,obj_init],
          /* :: */[0,/* Lvar */[0,$$self],0],
          Location["none"]);
      
      var match=transl_class_rebind_0($$self,obj_init0,cl,vf);
      
      var obj_init$prime=match[2];
      
      var path=match[1];
      
      if(!Translcore["check_recursive_lambda"](ids,obj_init$prime))
       {throw [0,$$Error,cl[2],0];}
      else
       {}
      
      var id="unknown primitive:caml_equal";
      
      if(id)
       {return Lambda["transl_normal_path"](path);}
      else
       {var cla=Ident["create"]("class");
        
        var new_init=Ident["create"]("new_init");
        
        var env_init=Ident["create"]("env_init");
        
        var table=Ident["create"]("table");
        
        var envs=Ident["create"]("envs");
        
        return /* Llet */[4,
                0,
                new_init,
                lfunction(/* :: */[0,obj_init,0],obj_init$prime),
                /* Llet */[4,
                 1,
                 cla,
                 Lambda["transl_normal_path"](path),
                 /* Lprim */[6,
                  /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                  /* :: */[0,
                   mkappl
                    (/* tuple */[0,
                      /* Lvar */[0,new_init],
                      /* :: */[0,lfield(cla,0),0]]),
                   /* :: */[0,
                    lfunction
                     (/* :: */[0,table,0],
                      /* Llet */[4,
                       0,
                       env_init,
                       mkappl
                        (/* tuple */[0,
                          lfield(cla,1),
                          /* :: */[0,/* Lvar */[0,table],0]]),
                       lfunction
                        (/* :: */[0,envs,0],
                         mkappl
                          (/* tuple */[0,
                            /* Lvar */[0,new_init],
                            /* :: */[0,
                             mkappl
                              (/* tuple */[0,
                                /* Lvar */[0,env_init],
                                /* :: */[0,/* Lvar */[0,envs],0]]),
                             0]]))]),
                    /* :: */[0,lfield(cla,2),/* :: */[0,lfield(cla,3),0]]]]]]];
        }
      }
    catch(exn)
     {if(exn=Pervasives["Exit"])
       {return Lambda["lambda_unit"];}
      else
       {throw exn;}
      }
    };

var
 module_path=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:
       var s=Ident["name"](param[1]);
       
       return "unknown primitive:caml_string_notequal"&&s[0]>=65&&s[0]<=90;
       
      case 6:
       var $js=param[1];
       if(typeof $js=="number")
        {switch($js){}}
       else
        {switch($js[0])
          {case 3:if(param[2]){exit=92;}else{return 1;}
           case 6:
            var match=param[2];
            
            if(match)
             {if(match[2]){exit=92;}else{return module_path(match[1]);}}
            else
             {exit=92;}
            
           default:exit=92;}}
       
      default:exit=92;}
    
    switch(exit){case 92:return 0;}
    };

var
 const_path=
  function(local,p)
   {var exit;
    
    switch(p)
     {case 0:return !List["mem"](p[1],local);
      case 1:return 1;
      case 3:
       if(p[1]!=0)
        {exit=89;}
       else
        {var fv=Lambda["free_variables"](p[3]);
         
         return List["for_all"]
                 (function(x){return !Lambda["IdentSet"][3](x,fv);},local);
         }
       
      default:exit=89;}
    
    switch(exit){case 89:return module_path(p);}
    };

var
 builtin_meths=
  function($$self,env,env2,body)
   {var const_path$1=const_path(/* :: */[0,env,$$self]);
    
    var
     conv=
      function(p)
       {var exit;
        
        if(const_path$1(p))
         {return /* tuple */[0,"const",/* :: */[0,p,0]];}
        else
         {switch(p)
           {case 6:
             var match=p[1];
             
             if(typeof match=="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 6:
                  var match$1=p[2];
                  
                  if(match$1)
                   {var match$2=match$1[1];
                    
                    switch(match$2)
                     {case 0:
                       if(match$1[2])
                        {exit=84;}
                       else
                        {if(Ident["same"](match$2[1],env))
                          {return /* tuple */[0,
                                   "env",
                                   /* :: */[0,
                                    /* Lvar */[0,env2],
                                    /* :: */[0,
                                     /* Lconst */[1,/* Const_pointer */[1,match[1],0]],
                                     0]]];
                           }
                         else
                          {exit=84;}
                         }
                       
                      default:exit=84;}
                    }
                  else
                   {exit=84;}
                  
                 case 19:
                  var match$3=p[2];
                  
                  if(match$3)
                   {var match$4=match$3[1];
                    
                    switch(match$4)
                     {case 0:
                       var match$5=match$3[2];
                       
                       if(match$5)
                        {var match$6=match$5[1];
                         
                         switch(match$6)
                          {case 0:
                            if(match$5[2])
                             {exit=84;}
                            else
                             {if(List["mem"](match$4[1],$$self))
                               {return /* tuple */[0,
                                        "var",
                                        /* :: */[0,/* Lvar */[0,match$6[1]],0]];
                                }
                              else
                               {exit=84;}
                              }
                            
                           default:exit=84;}
                         }
                       else
                        {exit=84;}
                       
                      default:exit=84;}
                    }
                  else
                   {exit=84;}
                  
                 default:exit=84;}}
             
            case 17:
             if(p[1]!=0)
              {exit=84;}
             else
              {var match$7=p[3];
               
               switch(match$7)
                {case 0:
                  if(p[4])
                   {exit=84;}
                  else
                   {if(List["mem"](match$7[1],$$self))
                     {return /* tuple */[0,"meth",/* :: */[0,p[2],0]];}
                    else
                     {exit=84;}
                    }
                  
                 default:exit=84;}
               }
             
            default:exit=84;}
          }
        
        switch(exit){case 84:throw Not_found;}
        };
    
    var exit;
    
    switch(body)
     {case 2:
       var match=body[2];
       
       if(match)
        {var match$1=match[2];
         
         var arg=match[1];
         
         var f=body[1];
         
         if(match$1)
          {if(match$1[2])
            {exit=81;}
           else
            {var p=match$1[1];
             
             if(const_path$1(f)&&const_path$1(p))
              {var match$2=conv(arg);
               
               return /* tuple */[0,
                       Pervasives["^"]("app_",Pervasives["^"](match$2[1],"_const")),
                       Pervasives["@"](/* :: */[0,f,match$2[2]],/* :: */[0,p,0])];
               }
             else
              {if(const_path$1(f)&&const_path$1(arg))
                {var match$3=conv(p);
                 
                 return /* tuple */[0,
                         Pervasives["^"]("app_const_",match$3[1]),
                         /* :: */[0,f,/* :: */[0,arg,match$3[2]]]];
                 }
               else
                {exit=81;}
               }
             }
           }
         else
          {if(const_path$1(f))
            {var match$4=conv(arg);
             
             return /* tuple */[0,
                     Pervasives["^"]("app_",match$4[1]),
                     /* :: */[0,f,match$4[2]]];
             }
           else
            {exit=81;}
           }
         }
       else
        {exit=81;}
       
      case 3:
       var exit$1;
       
       if(body[1]!=0)
        {exit$1=83;}
       else
        {var match$5=body[2];
         
         if(match$5)
          {if(match$5[2])
            {exit$1=83;}
           else
            {var x=match$5[1];
             
             var
              enter=
               function($$self$1,param)
                {var exit$2;
                 
                 switch(param)
                  {case 4:
                    var match$6=param[3];
                    
                    switch(match$6)
                     {case 0:
                       if(List["mem"](match$6[1],$$self$1))
                        {return enter(/* :: */[0,param[2],$$self$1],param[4]);}
                       else
                        {exit$2=79;}
                       
                      default:exit$2=79;}
                    
                   case 6:
                    var $js=param[1];
                    if(typeof $js=="number")
                     {switch($js){}}
                    else
                     {switch($js[0])
                       {case 20:
                         var match$7=param[2];
                         
                         if(match$7)
                          {var match$8=match$7[1];
                           
                           switch(match$8)
                            {case 0:
                              var match$9=match$7[2];
                              
                              if(match$9)
                               {var match$10=match$9[1];
                                
                                switch(match$10)
                                 {case 0:
                                   var match$11=match$9[2];
                                   
                                   if(match$11)
                                    {var match$12=match$11[1];
                                     
                                     switch(match$12)
                                      {case 0:
                                        if(match$11[2])
                                         {exit$2=79;}
                                        else
                                         {if
                                           (Ident["same"](x,match$12[1])&&
                                            List["mem"](match$8[1],$$self$1))
                                           {return /* tuple */[0,
                                                    "set_var",
                                                    /* :: */[0,/* Lvar */[0,match$10[1]],0]];
                                            }
                                          else
                                           {exit$2=79;}
                                          }
                                        
                                       default:exit$2=79;}
                                     }
                                   else
                                    {exit$2=79;}
                                   
                                  default:exit$2=79;}
                                }
                              else
                               {exit$2=79;}
                              
                             default:exit$2=79;}
                           }
                         else
                          {exit$2=79;}
                         
                        default:exit$2=79;}}
                    
                   default:exit$2=79;}
                 
                 switch(exit$2){case 79:throw Not_found;}
                 };
             
             return enter($$self,body[3]);
             }
           }
         else
          {exit$1=83;}
         }
       
       switch(exit$1){case 83:throw Not_found;}
       
      case 4:
       var match$6=body[3];
       
       switch(match$6)
        {case 0:
          if(List["mem"](match$6[1],$$self))
           {return builtin_meths(/* :: */[0,body[2],$$self],env,env2,body[4]);
            }
          else
           {exit=81;}
          
         default:exit=81;}
       
      case 17:
       switch(body[1][0])
        {case 0:
          var met=body[2];
          
          var exit$2;
          
          switch(met)
           {case 0:
             var match$7=body[3];
             
             switch(match$7)
              {case 0:
                var match$8=body[4];
                
                if(match$8)
                 {if(match$8[2])
                   {exit=81;}
                  else
                   {if(List["mem"](match$7[1],$$self))
                     {var match$9=conv(match$8[1]);
                      
                      return /* tuple */[0,
                              Pervasives["^"]("meth_app_",match$9[1]),
                              /* :: */[0,/* Lvar */[0,met[1]],match$9[2]]];
                      }
                    else
                     {exit=81;}
                    }
                  }
                else
                 {exit$2=82;}
                
               default:exit=81;}
             
            default:exit$2=82;}
          
          switch(exit$2)
           {case 82:
             var match$10=body[3];
             
             switch(match$10)
              {case 0:
                if(body[4])
                 {exit=81;}
                else
                 {if(List["mem"](match$10[1],$$self))
                   {return /* tuple */[0,"get_meth",/* :: */[0,met,0]];}
                  else
                   {exit=81;}
                  }
                
               default:exit=81;}
             
            }
          
         case 1:
          if(body[4])
           {exit=81;}
          else
           {var match$11=conv(body[3]);
            
            return /* tuple */[0,
                    Pervasives["^"]("send_",match$11[1]),
                    /* :: */[0,body[2],match$11[2]]];
            }
          
         case 2:
          var match$12=body[4];
          
          if(match$12)
           {var match$13=match$12[2];
            
            if(match$13)
             {if(match$13[2])
               {exit=81;}
              else
               {var match$14=conv(body[3]);
                
                return /* tuple */[0,
                        Pervasives["^"]("send_",match$14[1]),
                        /* :: */[0,body[2],match$14[2]]];
                }
              }
            else
             {exit=81;}
            }
          else
           {exit=81;}
          
         }
       
      default:exit=81;}
    
    switch(exit)
     {case 81:
       var match$15=conv(body);
       
       return /* tuple */[0,Pervasives["^"]("get_",match$15[1]),match$15[2]];
       
      }
    };

var
 builtin_meths$1=
  function($$self,env,env2,body)
   {var match=builtin_meths($$self,env,env2,body);
    
    var exit;
    
    switch(match[1])
     {case "app_const":var tag=5;
      case "app_const_const":var tag=9;
      case "app_const_env":var tag=11;
      case "app_const_meth":var tag=12;
      case "app_const_var":var tag=10;
      case "app_env":var tag=7;
      case "app_env_const":var tag=14;
      case "app_meth":var tag=8;
      case "app_meth_const":var tag=15;
      case "app_var":var tag=6;
      case "app_var_const":var tag=13;
      case "get_const":var tag=0;
      case "get_env":var tag=2;
      case "get_meth":var tag=3;
      case "get_var":var tag=1;
      case "meth_app_const":var tag=16;
      case "meth_app_env":var tag=18;
      case "meth_app_meth":var tag=19;
      case "meth_app_var":var tag=17;
      case "send_const":var tag=20;
      case "send_env":var tag=22;
      case "send_meth":var tag=23;
      case "send_var":var tag=21;
      case "set_var":var tag=4;
      default:exit=69;}
    
    switch(exit)
     {case 69:throw [0,Assert_failure,[0,"bytecomp/translclass.ml",576,11]];}
    
    return /* :: */[0,/* Lconst */[1,/* Const_pointer */[1,tag,0]],match[2]];
    };

var M=[0,builtin_meths$1];

var
 prerr_ids=
  function(msg,ids)
   {var names=List["map"](Ident["unique_toplevel_name"],ids);
    
    return Pervasives["prerr_endline"]
            ($$String["concat"](" ",/* :: */[0,msg,names]));
    };

var
 transl_class=
  function(ids,cl_id,pub_meths,cl,vflag)
   {var rebind=transl_class_rebind$1(ids,cl,vflag);
    
    if("unknown primitive:caml_notequal")
     {return rebind;}
    else
     {var
       tables=
        Ident["create"](Pervasives["^"](Ident["name"](cl_id),"_tables"));
      
      var match=Translobj["oo_add_class"](tables);
      
      var top=!match[2];
      
      var match$1=build_class_lets(cl,ids);
      
      var llets=match$1[2];
      
      if(top)
       {var new_ids=0;}
      else
       {var new_ids=Env["diff"](match[1],match$1[1]);}
      
      var env2=Ident["create"]("env");
      
      var meth_ids=get_class_meths(cl);
      
      var
       subst=
        function(env,lam,i0,new_ids$prime)
         {var fv=Lambda["free_variables"](lam);
          
          var
           fv$1=
            List["fold_right"](Lambda["IdentSet"][6],new_ids$prime[1],fv);
          
          Translobj["method_ids"][1]=
          Lambda["IdentSet"][9]
           (Lambda["IdentSet"][7]
             (Lambda["free_methods"](lam),Translobj["method_ids"][1]),
            meth_ids),
          0;
          var
           new_ids$1=
            List["fold_right"]
             (Lambda["IdentSet"][4],new_ids,Translobj["method_ids"][1]);
          
          var fv$2=Lambda["IdentSet"][8](fv$1,new_ids$1);
          
          new_ids$prime[1]=
          Pervasives["@"](new_ids$prime[1],Lambda["IdentSet"][20](fv$2)),
          0;
          var i=[0,i0-1];
          
          return List["fold_left"]
                  (function(subst$1,id)
                    {i[0]++;return Ident["add"](id,lfield(env,i[1]),subst$1);},
                   Ident["empty"],
                   new_ids$prime[1]);
          };
      
      var new_ids_meths=[0,0];
      
      var
       msubst=
        function(arr,param)
         {var exit;
          
          switch(param)
           {case 3:
             if(param[1]!=0)
              {exit=49;}
             else
              {var match$2=param[2];
               
               if(match$2)
                {var body=param[3];
                 
                 var args=match$2[2];
                 
                 var $$self=match$2[1];
                 
                 var env=Ident["create"]("env");
                 
                 if(new_ids=0)
                  {var body$prime=body;}
                 else
                  {var
                    body$prime=
                     Lambda["subst_lambda"](subst(env,body,0,new_ids_meths),body);
                   }
                 
                 try
                  {if(!arr||Clflags["debug"][1]){throw Not_found;}else{}
                   
                   return M[1]
                           (/* :: */[0,$$self,0],env,env2,lfunction(args,body$prime));
                   }
                 catch(exn)
                  {if(exn=Not_found)
                    {return /* :: */[0,
                             lfunction
                              (/* :: */[0,$$self,args],
                               !Lambda["IdentSet"][3]
                                 (env,Lambda["free_variables"](body$prime))
                                ?body$prime
                                :/* Llet */[4,
                                  1,
                                  env,
                                  /* Lprim */[6,
                                   [19,1],
                                   /* :: */[0,
                                    /* Lvar */[0,$$self],
                                    /* :: */[0,/* Lvar */[0,env2],0]]],
                                  body$prime]),
                             0];
                     }
                   else
                    {throw exn;}
                   }
                 }
               else
                {exit=49;}
               }
             
            default:exit=49;}
          
          switch(exit)
           {case 49:
             throw [0,Assert_failure,[0,"bytecomp/translclass.ml",658,13]];
            }
          };
      
      var new_ids_init=[0,0];
      
      var env1=Ident["create"]("env");
      
      var env1$prime=Ident["create"]("env'");
      
      var
       copy_env=
        function(envs,$$self)
         {if(top)
           {return Lambda["lambda_unit"];}
          else
           {return /* Lifused */[19,
                    env2,
                    /* Lprim */[6,
                     [20,1],
                     /* :: */[0,
                      /* Lvar */[0,$$self],
                      /* :: */[0,
                       /* Lvar */[0,env2],
                       /* :: */[0,/* Lvar */[0,env1$prime],0]]]]];
            }
          };
      
      var
       subst_env=
        function(envs,l,lam)
         {if(top)
           {return lam;}
          else
           {var
             lam$1=
              Lambda["subst_lambda"](subst(env1,lam,1,new_ids_init),lam);
            
            return /* Llet */[4,
                    1,
                    env1,
                    (l=0)?/* Lvar */[0,envs]:lfield(envs,0),
                    /* Llet */[4,
                     1,
                     env1$prime,
                     (new_ids_init[1]=0)?/* Lvar */[0,env1]:lfield(env1,0),
                     lam$1]];
            }
          };
      
      var cla=Ident["create"]("class");
      
      var match$2=build_object_init_0(cla,0,cl,copy_env,subst_env,top,ids);
      
      var inh_init=match$2[1];
      
      var inh_init$prime=List["rev"](inh_init);
      
      var
       match$3=
        build_class_init
         (cla,1,[0,0,0],inh_init$prime,match$2[2],msubst,top,cl);
      
      var cl_init=match$3[2];
      
      if(match$3[1]=0)
       {}
      else
       {throw [0,Assert_failure,[0,"bytecomp/translclass.ml",684,2]];}
      
      var table=Ident["create"]("table");
      
      var
       class_init=
        Ident["create"](Pervasives["^"](Ident["name"](cl_id),"_init"));
      
      var env_init=Ident["create"]("env_init");
      
      var obj_init=Ident["create"]("obj_init");
      
      var
       pub_meths$1=
        List["sort"]
         (function(s,s$prime){return "unknown primitive:caml_int_compare";},
          pub_meths);
      
      var tags=List["map"](Btype["hash_variant"],pub_meths$1);
      
      var rev_map=List["combine"](tags,pub_meths$1);
      
      List["iter2"]
       (function(tag,name)
         {var name$prime=List["assoc"](tag,rev_map);
          
          if("unknown primitive:caml_string_notequal")
           {throw [0,$$Error,cl[2],/* Tags */[0,name,name$prime]];}
          else
           {return 0;}
          },
        tags,
        pub_meths$1);
      var
       ltable=
        function(table$1,lam)
         {return /* Llet */[4,
                  0,
                  table$1,
                  mkappl
                   (/* tuple */[0,
                     Translobj["oo_prim"]("create_table"),
                     /* :: */[0,transl_meth_list(pub_meths$1),0]]),
                  lam];
          };
      
      var
       ldirect=
        function(obj_init$1)
         {return /* Llet */[4,
                  0,
                  obj_init$1,
                  cl_init,
                  /* Lsequence */[13,
                   mkappl
                    (/* tuple */[0,
                      Translobj["oo_prim"]("init_class"),
                      /* :: */[0,/* Lvar */[0,cla],0]]),
                   mkappl
                    (/* tuple */[0,
                      /* Lvar */[0,obj_init$1],
                      /* :: */[0,Lambda["lambda_unit"],0]])]];
          };
      
      if(top&&(ids=0))
       {return llets(ltable(cla,ldirect(obj_init)));}
      else
       {var concrete=vflag=1;
        
        var
         lclass=
          function(lam)
           {var
             cl_init$1=
              llets(/* Lfunction */[3,0,/* :: */[0,cla,0],cl_init]);
            
            return /* Llet */[4,
                    0,
                    class_init,
                    cl_init$1,
                    lam(Lambda["free_variables"](cl_init$1))];
            };
        
        var
         lbody=
          function(fv)
           {if
             (List["for_all"]
               (function(id){return !Lambda["IdentSet"][3](id,fv);},ids))
             {return mkappl
                      (/* tuple */[0,
                        Translobj["oo_prim"]("make_class"),
                        /* :: */[0,
                         transl_meth_list(pub_meths$1),
                         /* :: */[0,/* Lvar */[0,class_init],0]]]);
              }
            else
             {return ltable
                      (table,
                       /* Llet */[4,
                        0,
                        env_init,
                        mkappl
                         (/* tuple */[0,
                           /* Lvar */[0,class_init],
                           /* :: */[0,/* Lvar */[0,table],0]]),
                        /* Lsequence */[13,
                         mkappl
                          (/* tuple */[0,
                            Translobj["oo_prim"]("init_class"),
                            /* :: */[0,/* Lvar */[0,table],0]]),
                         /* Lprim */[6,
                          /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                          /* :: */[0,
                           mkappl
                            (/* tuple */[0,
                              /* Lvar */[0,env_init],
                              /* :: */[0,Lambda["lambda_unit"],0]]),
                           /* :: */[0,
                            /* Lvar */[0,class_init],
                            /* :: */[0,
                             /* Lvar */[0,env_init],
                             /* :: */[0,Lambda["lambda_unit"],0]]]]]]]);
              }
            };
        
        var
         lbody_virt=
          function(lenvs)
           {return /* Lprim */[6,
                    /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                    /* :: */[0,
                     Lambda["lambda_unit"],
                     /* :: */[0,
                      /* Lfunction */[3,0,/* :: */[0,cla,0],cl_init],
                      /* :: */[0,Lambda["lambda_unit"],/* :: */[0,lenvs,0]]]]];
            };
        
        if(top&&concrete)
         {return lclass(lbody);}
        else
         {if(top)
           {return llets(lbody_virt(Lambda["lambda_unit"]));}
          else
           {var envs=Ident["create"]("envs");
            
            var cached=Ident["create"]("cached");
            
            if((new_ids_meths[1]=0)&&(new_ids_init[1]=0)&&(inh_init=0))
             {var lenvs=Lambda["lambda_unit"];}
            else
             {var lenvs=/* Lvar */[0,envs];}
            
            if(new_ids_meths[1]=0)
             {var menv=Lambda["lambda_unit"];}
            else
             {var
               menv=
                /* Lprim */[6,
                 /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                 List["map"]
                  (function(id){return /* Lvar */[0,id];},new_ids_meths[1])];
              }
            
            if(new_ids_init[1]=0)
             {var lenv=menv;}
            else
             {var
               lenv=
                /* Lprim */[6,
                 /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                 /* :: */[0,
                  menv,
                  List["map"]
                   (function(id){return /* Lvar */[0,id];},new_ids_init[1])]];
              }
            
            var
             linh_envs=
              List["map"]
               (function(param)
                 {return /* Lprim */[6,
                          [6,3],
                          /* :: */[0,Lambda["transl_normal_path"](param[2]),0]];
                  },
                List["rev"](inh_init));
            
            var
             make_envs=
              function(lam)
               {return /* Llet */[4,
                        2,
                        envs,
                        (linh_envs=0)
                         ?lenv
                         :/* Lprim */[6,
                           /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                           /* :: */[0,lenv,linh_envs]],
                        lam];
                };
            
            var
             def_ids=
              function(cla$1,lam)
               {return /* Llet */[4,
                        2,
                        env2,
                        mkappl
                         (/* tuple */[0,
                           Translobj["oo_prim"]("new_variable"),
                           /* :: */[0,
                            /* Lvar */[0,cla$1],
                            /* :: */[0,transl_label(""),0]]]),
                        lam];
                };
            
            var
             inh_paths=
              List["filter"]
               (function(param)
                 {return List["mem"](Path["head"](param[2]),new_ids);},
                inh_init);
            
            var
             inh_keys=
              List["map"]
               (function(param)
                 {return /* Lprim */[6,
                          [6,1],
                          /* :: */[0,Lambda["transl_normal_path"](param[2]),0]];
                  },
                inh_paths);
            
            var
             lclass$1=
              function(lam)
               {return /* Llet */[4,
                        0,
                        class_init,
                        /* Lfunction */[3,0,/* :: */[0,cla,0],def_ids(cla,cl_init)],
                        lam];
                };
            
            var
             lcache=
              function(lam)
               {if(inh_keys=0)
                 {return /* Llet */[4,1,cached,/* Lvar */[0,tables],lam];}
                else
                 {return /* Llet */[4,
                          0,
                          cached,
                          mkappl
                           (/* tuple */[0,
                             Translobj["oo_prim"]("lookup_tables"),
                             /* :: */[0,
                              /* Lvar */[0,tables],
                              /* :: */[0,
                               /* Lprim */[6,
                                /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                                inh_keys],
                               0]]]),
                          lam];
                  }
                };
            
            var
             lset=
              function(cached$1,i,lam)
               {return /* Lprim */[6,
                        /* Psetfield */[7,i,1],
                        /* :: */[0,/* Lvar */[0,cached$1],/* :: */[0,lam,0]]];
                };
            
            var
             ldirect$1=
              function(param)
               {return ltable
                        (cla,
                         /* Llet */[4,
                          0,
                          env_init,
                          def_ids(cla,cl_init),
                          /* Lsequence */[13,
                           mkappl
                            (/* tuple */[0,
                              Translobj["oo_prim"]("init_class"),
                              /* :: */[0,/* Lvar */[0,cla],0]]),
                           lset(cached,0,/* Lvar */[0,env_init])]]);
                };
            
            var
             lclass_virt=
              function(param)
               {return lset
                        (cached,
                         0,
                         /* Lfunction */[3,0,/* :: */[0,cla,0],def_ids(cla,cl_init)]);
                };
            
            return llets
                    (lcache
                      (/* Lsequence */[13,
                        /* Lifthenelse */[12,
                         lfield(cached,0),
                         Lambda["lambda_unit"],
                         (ids=0)
                          ?ldirect$1(0)
                          :!concrete
                            ?lclass_virt(0)
                            :lclass$1
                              (mkappl
                                (/* tuple */[0,
                                  Translobj["oo_prim"]("make_class_store"),
                                  /* :: */[0,
                                   transl_meth_list(pub_meths$1),
                                   /* :: */[0,
                                    /* Lvar */[0,class_init],
                                    /* :: */[0,/* Lvar */[0,cached],0]]]]))],
                        make_envs
                         ((ids=0)
                           ?mkappl(/* tuple */[0,lfield(cached,0),/* :: */[0,lenvs,0]])
                           :/* Lprim */[6,
                             /* Pmakeblock */[5,0,Lambda["default_tag_info"],0],
                             concrete
                              ?/* :: */[0,
                                mkappl(/* tuple */[0,lfield(cached,0),/* :: */[0,lenvs,0]]),
                                /* :: */[0,
                                 lfield(cached,1),
                                 /* :: */[0,lfield(cached,0),/* :: */[0,lenvs,0]]]]
                              :/* :: */[0,
                                Lambda["lambda_unit"],
                                /* :: */[0,
                                 lfield(cached,0),
                                 /* :: */[0,Lambda["lambda_unit"],/* :: */[0,lenvs,0]]]]])]));
            }
          }
        }
      }
    };

var
 transl_class$1=
  function(ids,id,pub_meths,cl,vf)
   {return Translobj["oo_wrap"](cl[4],0,transl_class(ids,id,pub_meths,cl),vf);
    };

var
 match=
  (Translcore["transl_object"][1]=
   function(id,meths,cl){return transl_class$1(0,id,meths,cl,1);},
   0);

var
 report_error=
  function(ppf,param)
   {if(param)
     {return Format["fprintf"]
              (ppf,
               [0,
                [11,
                 "Method labels `",
                 [2,
                  0,
                  [11,
                   "' and `",
                   [2,0,[11,"' are incompatible.",[17,[0,"@ ",1,0],[2,0,0]]]]]]],
                "Method labels `%s' and `%s' are incompatible.@ %s"],
               param[1],
               param[2],
               "Change one of them.");
      }
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [11,
                 "This kind of recursive class expression is not allowed",
                 0],
                "This kind of recursive class expression is not allowed"]);
      }
    };

var
 match$1=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,
                Location["error_of_printer"](param[2],report_error,param[3])];
        }
      else
       {return 0;}
      });

module["exports"]=
{"transl_class":transl_class$1,"Error":$$Error,"report_error":report_error};

