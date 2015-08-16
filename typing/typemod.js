// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var $$String=require("./string.js");
var Mtype=require("./mtype.js");
var Typecore=require("./typecore.js");
var Typeclass=require("./typeclass.js");
var Printtyp=require("./printtyp.js");
var Typedtree=require("./typedtree.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Btype=require("./btype.js");
var Env=require("./env.js");
var Cmt_format=require("./cmt_format.js");
var Clflags=require("./clflags.js");
var Types=require("./types.js");
var Typetexp=require("./typetexp.js");
var Format=require("./format.js");
var Set=require("./set.js");
var Misc=require("./misc.js");
var Typedecl=require("./typedecl.js");
var Path=require("./path.js");
var Filename=require("./filename.js");
var Subst=require("./subst.js");
var Longident=require("./longident.js");
var Includemod=require("./includemod.js");
var Location=require("./location.js");
var Ident=require("./ident.js");
var Stypes=require("./stypes.js");
var Config=require("./config.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Typemod.Error",0]);

var
 Error_forward=
  CamlPrimitive["caml_set_oo_id"]([248,"Typemod.Error_forward",0]);

var fst3=function(param){return param[1];};

var
 path_concat=
  function(head,p)
   {switch(p[0])
     {case 0:return /* Pdot */[1,/* Pident */[0,head],Ident["name"](p[1]),0];
      case 1:return /* Pdot */[1,path_concat(head,p[1]),p[2],p[3]];
      case 2:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/typemod.ml",54,16]];
       
      }
    };

var
 extract_sig=
  function(env,loc,mty)
   {var match=Env["scrape_alias"](env,mty);
    
    switch(match[0])
     {case 1:return match[1];
      default:throw [0,$$Error,loc,env,/* Signature_expected */0];}
    };

var
 extract_sig_open=
  function(env,loc,mty)
   {var match=Env["scrape_alias"](env,mty);
    
    switch(match[0])
     {case 1:return match[1];
      default:throw [0,$$Error,loc,env,/* Structure_expected */[3,mty]];}
    };

var
 type_open_=
  function(toplevel,ovf,env,loc,lid)
   {var match=Typetexp["find_module"](env,lid[2],lid[1]);
    
    var path=match[1];
    
    var sg=extract_sig_open(env,lid[2],match[2][1]);
    
    return /* tuple */[0,
            path,
            Env["open_signature"](/* Some */[0,loc],toplevel,ovf,path,sg,env)];
    };

var
 type_open=
  function(toplevel,env,sod)
   {var match=type_open_(toplevel,sod[2],env,sod[3],sod[1]);
    
    var path=match[1];
    
    var od=/* record */[0,path,sod[1],sod[2],sod[3],sod[4]];
    
    return /* tuple */[0,path,match[2],od];
    };

var rm=function(node){Stypes["record"](/* Ti_mod */[3,node]);return node;};

var
 type_module_type_of_fwd=
  [0,
   function(env,m)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/typemod.ml",99,22]];
     }];

var
 add_rec_types=
  function(env,param)
   {var exit;
    
    if(param)
     {var match=param[1];
      
      switch(match[0])
       {case 1:
         if(match[3]>=2)
          {return add_rec_types
                   (Env["add_type"](/* true */1,match[1],match[2],env),
                    param[2]);
           }
         else
          {exit=376;}
         
        default:exit=376;}
      }
    else
     {exit=376;}
    
    switch(exit){case 376:return env;}
    };

var
 check_type_decl=
  function(env,loc,id,row_id,newdecl,decl,rs,rem)
   {var env$1=Env["add_type"](/* true */1,id,newdecl,env);
    
    if(row_id)
     {var env$2=Env["add_type"](/* true */1,row_id[1],newdecl,env$1);}
    else
     {var env$2=env$1;}
    
    if(rs===/* Trec_not */0)
     {var env$3=env$2;}
    else
     {var env$3=add_rec_types(env$2,rem);}
    
    Includemod["type_declarations"](env$3,id,newdecl,decl);
    return Typedecl["check_coherence"](env$3,loc,id,newdecl);
    };

var
 make_params=
  function(n,param)
   {if(param)
     {return /* :: */[0,
              Pervasives["^"]("a",Pervasives["string_of_int"](n)),
              make_params(n+1,param[2])];
      }
    else
     {return /* [] */0;}
    };

var
 update_rec_next=
  function(rs,rem)
   {if(rs>=2)
     {return rem;}
    else
     {var exit;
      
      if(rem)
       {var match=rem[1];
        
        switch(match[0])
         {case 1:
           if(match[3]>=2)
            {return /* :: */[0,/* Sig_type */[1,match[1],match[2],rs],rem[2]];
             }
           else
            {exit=369;}
           
          case 3:
           if(match[3]>=2)
            {return /* :: */[0,
                     /* Sig_module */[3,match[1],match[2],rs],
                     rem[2]];
             }
           else
            {exit=369;}
           
          default:exit=369;}
        }
      else
       {exit=369;}
      
      switch(exit){case 369:return rem;}
      }
    };

var sig_item=function(desc,typ,env,loc){return /* record */[0,desc,env,loc];};

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
 merge_constraint=
  function(initial_env,loc,sg,constr)
   {var exit;
    
    switch(constr[0])
     {case 0:exit=364;
      case 1:exit=364;
      case 2:var s=constr[1][1];exit=363;
      case 3:var s=constr[1];exit=363;
      }
    
    switch(exit)
     {case 364:var lid=constr[1];
      case 363:var lid=/* record */[0,/* Lident */[0,s[1]],s[2]];
      }
    
    var real_id=[0,/* None */0];
    
    var
     merge=
      function(env,sg,namelist,row_id)
       {if(sg)
         {var item=sg[1];
          
          var exit$1;
          
          switch(item[0])
           {case 1:
             if(namelist)
              {if(namelist[2])
                {exit$1=355;}
               else
                {var s$1=namelist[1];
                 
                 var rem=sg[2];
                 
                 var rs=item[3];
                 
                 var decl=item[2];
                 
                 var id=item[1];
                 
                 var exit$2;
                 
                 switch(constr[0])
                  {case 0:
                    var sdecl=constr[2];
                    
                    var match=sdecl[4];
                    
                    var exit$3;
                    
                    if(typeof match==="number")
                     {if(match!==0)
                       {exit$3=359;}
                      else
                       {if
                         (CamlPrimitive["caml_string_equal"](Ident["name"](id),s$1)&&
                          Typedecl["is_fixed_type"](sdecl))
                         {var
                           decl_row=
                            /* record */[0,
                             List["map"]
                              (function(param)
                                {return Btype["newgenvar"](/* None */0,/* () */0);},
                               sdecl[2]),
                             List["length"](sdecl[2]),
                             /* Type_abstract */0,
                             /* Private */0,
                             /* None */0,
                             List["map"]
                              (function(param)
                                {switch(param[2])
                                  {case 0:var match$1=[/* tuple */0,/* true */1,/* false */0];
                                   case 1:var match$1=[/* tuple */0,/* false */0,/* true */1];
                                   case 2:var match$1=[/* tuple */0,/* false */0,/* false */0];
                                   }
                                 
                                 return make(!match$1[2],!match$1[1],/* false */0);
                                 },
                               sdecl[2]),
                             /* None */0,
                             sdecl[8],
                             /* [] */0];
                          
                          var id_row=Ident["create"](Pervasives["^"](s$1,"#row"));
                          
                          var
                           initial_env$1=
                            Env["add_type"](/* true */1,id_row,decl_row,initial_env);
                          
                          var
                           tdecl=
                            Typedecl["transl_with_constraint"]
                             (initial_env$1,
                              id,
                              /* Some */[0,/* Pident */[0,id_row]],
                              decl,
                              sdecl);
                          
                          var newdecl=tdecl[4];
                          
                          check_type_decl(env,sdecl[8],id,row_id,newdecl,decl,rs,rem);
                          var newrecord=/* unknown */"duprecord regular 9";
                          
                          newrecord[1]=newdecl[1];
                          var decl_row$1=newrecord;
                          
                          if(rs===/* Trec_first */1)
                           {var rs$prime=/* Trec_not */0;}
                          else
                           {var rs$prime=rs;}
                          
                          return /* tuple */[0,
                                  /* tuple */[0,
                                   /* Pident */[0,id],
                                   lid,
                                   /* Twith_type */[0,tdecl]],
                                  /* :: */[0,
                                   /* Sig_type */[1,id_row,decl_row$1,rs$prime],
                                   /* :: */[0,/* Sig_type */[1,id,newdecl,rs],rem]]];
                          }
                        else
                         {exit$3=359;}
                        }
                      }
                    else
                     {exit$3=359;}
                    
                    switch(exit$3)
                     {case 359:
                       if
                        (CamlPrimitive["caml_string_equal"](Ident["name"](id),s$1))
                        {var
                          tdecl$1=
                           Typedecl["transl_with_constraint"]
                            (initial_env,id,/* None */0,decl,sdecl);
                         
                         var newdecl$1=tdecl$1[4];
                         
                         check_type_decl
                          (env,sdecl[8],id,row_id,newdecl$1,decl,rs,rem);
                         return /* tuple */[0,
                                 /* tuple */[0,
                                  /* Pident */[0,id],
                                  lid,
                                  /* Twith_type */[0,tdecl$1]],
                                 /* :: */[0,/* Sig_type */[1,id,newdecl$1,rs],rem]];
                         }
                       else
                        {exit$2=357;}
                       
                      }
                    
                   case 1:exit$1=355;
                   case 2:exit$2=357;
                   case 3:exit$1=355;
                   }
                 
                 switch(exit$2)
                  {case 357:
                    if
                     (CamlPrimitive["caml_string_equal"]
                       (Ident["name"](id),Pervasives["^"](s$1,"#row")))
                     {return merge(env,rem,namelist,/* Some */[0,id]);}
                    else
                     {switch(constr[0])
                       {case 0:exit$1=355;
                        case 2:
                         var sdecl$1=constr[1];
                         
                         if
                          (CamlPrimitive["caml_string_equal"](Ident["name"](id),s$1))
                          {var
                            tdecl$2=
                             Typedecl["transl_with_constraint"]
                              (initial_env,id,/* None */0,decl,sdecl$1);
                           
                           var newdecl$2=tdecl$2[4];
                           
                           check_type_decl
                            (env,sdecl$1[8],id,row_id,newdecl$2,decl,rs,rem);
                           real_id[1]=/* Some */[0,id];
                           return /* tuple */[0,
                                   /* tuple */[0,
                                    /* Pident */[0,id],
                                    lid,
                                    /* Twith_typesubst */[2,tdecl$2]],
                                   update_rec_next(rs,rem)];
                           }
                         else
                          {exit$1=355;}
                         
                        }
                      }
                    
                   }
                 }
               }
             else
              {exit$1=355;}
             
            case 3:
             if(namelist)
              {var namelist$1=namelist[2];
               
               var s$2=namelist[1];
               
               var rem$1=sg[2];
               
               var rs$1=item[3];
               
               var md=item[2];
               
               var id$1=item[1];
               
               var exit$4;
               
               if(namelist$1)
                {exit$4=360;}
               else
                {switch(constr[0])
                  {case 0:exit$4=360;
                   case 1:
                    var lid$prime=constr[2];
                    
                    if
                     (CamlPrimitive["caml_string_equal"](Ident["name"](id$1),s$2))
                     {var
                       match$1=
                        Typetexp["find_module"](initial_env,loc,lid$prime[1]);
                      
                      var md$prime=match$1[2];
                      
                      var path=match$1[1];
                      
                      var
                       md$prime$prime=
                        /* record */[0,
                         Mtype["remove_aliases"](env,md$prime[1]),
                         md$prime[2],
                         md$prime[3]];
                      
                      var newmd=Mtype["strengthen_decl"](env,md$prime$prime,path);
                      
                      Includemod["modtypes"](env,newmd[1],md[1]);
                      return /* tuple */[0,
                              /* tuple */[0,
                               /* Pident */[0,id$1],
                               lid,
                               /* Twith_module */[1,path,lid$prime]],
                              /* :: */[0,/* Sig_module */[3,id$1,newmd,rs$1],rem$1]];
                      }
                    else
                     {exit$4=360;}
                    
                   case 2:exit$4=360;
                   case 3:
                    var lid$prime$1=constr[2];
                    
                    if
                     (CamlPrimitive["caml_string_equal"](Ident["name"](id$1),s$2))
                     {var
                       match$2=
                        Typetexp["find_module"](initial_env,loc,lid$prime$1[1]);
                      
                      var path$1=match$2[1];
                      
                      var newmd$1=Mtype["strengthen_decl"](env,match$2[2],path$1);
                      
                      Includemod["modtypes"](env,newmd$1[1],md[1]);
                      real_id[1]=/* Some */[0,id$1];
                      return /* tuple */[0,
                              /* tuple */[0,
                               /* Pident */[0,id$1],
                               lid,
                               /* Twith_modsubst */[3,path$1,lid$prime$1]],
                              update_rec_next(rs$1,rem$1)];
                      }
                    else
                     {exit$4=360;}
                    
                   }
                 }
               
               switch(exit$4)
                {case 360:
                  if
                   (CamlPrimitive["caml_string_equal"](Ident["name"](id$1),s$2))
                   {var
                     match$3=
                      merge(env,extract_sig(env,loc,md[1]),namelist$1,/* None */0);
                    
                    var match$4=match$3[1];
                    
                    return /* tuple */[0,
                            /* tuple */[0,path_concat(id$1,match$4[1]),lid,match$4[3]],
                            /* :: */[0,
                             /* Sig_module */[3,
                              id$1,
                              /* record */[0,
                               /* Mty_signature */[1,match$3[2]],
                               md[2],
                               md[3]],
                              rs$1],
                             rem$1]];
                    }
                  else
                   {exit$1=355;}
                  
                 }
               }
             else
              {exit$1=355;}
             
            default:exit$1=355;}
          
          switch(exit$1)
           {case 355:
             var
              match$5=
               merge(Env["add_item"](item,env),sg[2],namelist,row_id);
             
             return /* tuple */[0,match$5[1],/* :: */[0,item,match$5[2]]];
             
            }
          }
        else
         {throw [0,$$Error,loc,env,/* With_no_component */[4,lid[1]]];}
        };
    
    try
     {var names=Longident["flatten"](lid[1]);
      
      var match=merge(initial_env,sg,names,/* None */0);
      
      var sg$1=match[2];
      
      var exit$1;
      
      if(names)
       {if(names[2])
         {exit$1=332;}
        else
         {switch(constr[0])
           {case 0:exit$1=332;
            case 1:exit$1=332;
            case 2:
             var sdecl=constr[1];
             
             var match$1=real_id[1];
             
             if(match$1)
              {var id=match$1[1];}
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"typing/typemod.ml",246,38]];
               }
             
             try
              {var match$2=sdecl[6];
               
               var exit$2;
               
               if(match$2)
                {var match$3=match$2[1][1];
                 
                 if(typeof match$3==="number")
                  {switch(match$3){}}
                 else
                  {switch(match$3[0])
                    {case 3:
                      var stl=match$3[2];
                      
                      if(List["length"](stl)===List["length"](sdecl[2]))
                       {List["iter2"]
                         (function(x,param)
                           {var match$4=x[1];
                            
                            var exit$3;
                            
                            if(typeof match$4==="number")
                             {switch(match$4){}}
                            else
                             {switch(match$4[0])
                               {case 0:
                                 var match$5=param[1][1];
                                 
                                 if(typeof match$5==="number")
                                  {switch(match$5){}}
                                 else
                                  {switch(match$5[0])
                                    {case 0:
                                      if
                                       (CamlPrimitive["caml_string_equal"](match$4[1],match$5[1]))
                                       {return /* () */0;}
                                      else
                                       {exit$3=325;}
                                      
                                     default:exit$3=325;}}
                                 
                                default:exit$3=325;}}
                            
                            switch(exit$3){case 325:throw Pervasives["Exit"];}
                            },
                          stl,
                          sdecl[2]);
                        var lid$1=match$3[1];
                        }
                      else
                       {exit$2=326;}
                      
                     default:exit$2=326;}}
                 }
               else
                {exit$2=326;}
               
               switch(exit$2){case 326:throw Pervasives["Exit"];}
               }
             catch(exn)
              {if(exn===Pervasives["Exit"])
                {throw [0,
                        $$Error,
                        sdecl[8],
                        initial_env,
                        /* With_need_typeconstr */2];
                 }
               else
                {throw exn;}
               }
             
             try
              {var match$4=Env["lookup_type"](lid$1[1],initial_env);}
             catch(exn$1)
              {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                {throw [0,
                        CamlPrimitive["caml_global_data"]["Assert_failure"],
                        [0,"typing/typemod.ml",263,68]];
                 }
               else
                {throw exn$1;}
               }
             
             var sub=Subst["add_type"](id,match$4[1],Subst["identity"]);
             
             var sg$2=Subst["signature"](sub,sg$1);
             
            case 3:
             var match$5=real_id[1];
             
             if(match$5)
              {var id$1=match$5[1];}
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"typing/typemod.ml",269,38]];
               }
             
             var
              path=
               Typetexp["lookup_module"]
                (/* None */0,initial_env,loc,constr[2][1]);
             
             var sub$1=Subst["add_module"](id$1,path,Subst["identity"]);
             
             var sg$2=Subst["signature"](sub$1,sg$1);
             
            }
          }
        }
      else
       {exit$1=332;}
      
      switch(exit$1){case 332:var sg$2=sg$1;}
      
      return /* tuple */[0,match[1],sg$2];
      }
    catch(exn$2)
     {if(exn$2[1]===Includemod["Error"])
       {throw [0,
               $$Error,
               loc,
               initial_env,
               /* With_mismatch */[5,lid[1],exn$2[2]]];
        }
      else
       {throw exn$2;}
      }
    };

var
 map_rec=
  function(fn,decls,rem)
   {if(decls)
     {return /* :: */[0,
              fn(/* Trec_first */1,decls[1]),
              Misc["map_end"](fn(/* Trec_next */2),decls[2],rem)];
      }
    else
     {return rem;}
    };

var
 map_rec_type=
  function(rec_flag,fn,decls,rem)
   {if(decls)
     {if(rec_flag!==0)
       {var first=/* Trec_first */1;}
      else
       {var first=/* Trec_not */0;}
      
      return /* :: */[0,
              fn(first,decls[1]),
              Misc["map_end"](fn(/* Trec_next */2),decls[2],rem)];
      }
    else
     {return rem;}
    };

var
 map_rec_type_with_row_types=
  function(rec_flag,fn,decls,rem)
   {if(decls)
     {var d1=decls[1];
      
      if(Btype["is_row_name"](Ident["name"](d1[1])))
       {return /* :: */[0,
                fn(/* Trec_not */0,d1),
                map_rec_type_with_row_types(rec_flag,fn,decls[2],rem)];
        }
      else
       {return map_rec_type(rec_flag,fn,decls,rem);}
      }
    else
     {return rem;}
    };

var
 rec_flag_of_ptype_declarations=
  function(tds)
   {var
     is_nonrec=
      List["exists"]
       (function(td)
         {return List["exists"]
                  (function(param)
                    {return CamlPrimitive["caml_string_equal"]
                             (param[1][1],"nonrec");
                     },
                   td[7]);
          },
        tds);
    
    if(is_nonrec){return /* Nonrecursive */0;}else{return /* Recursive */1;}
    };

var
 map_ext=
  function(fn,exts,rem)
   {if(exts)
     {return /* :: */[0,
              fn(/* Text_first */0,exts[1]),
              Misc["map_end"](fn(/* Text_next */1),exts[2],rem)];
      }
    else
     {return rem;}
    };

var
 approx_modtype=
  function(env,smty)
   {var match=smty[1];
    
    switch(match[0])
     {case 0:
       var match$1=Typetexp["find_modtype"](env,smty[2],match[1][1]);
       
       return /* Mty_ident */[0,match$1[1]];
       
      case 1:return /* Mty_signature */[1,approx_sig(env,match[1])];
      case 2:
       var arg=Misc["may_map"](approx_modtype(env),match[2]);
       
       var
        match$2=
         Env["enter_module"]
          ([/* Some */0,/* true */1],
           match[1][1],
           Btype["default_mty"](arg),
           env);
       
       var res=approx_modtype(match$2[2],match[3]);
       
       return /* Mty_functor */[2,match$2[1],arg,res];
       
      case 3:return approx_modtype(env,match[1]);
      case 4:
       var match$3=type_module_type_of_fwd[1](env,match[1]);return match$3[2];
      case 5:throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      case 6:
       var
        path=
         Typetexp["lookup_module"](/* None */0,env,smty[2],match[1][1]);
       
       return /* Mty_alias */[3,path];
       
      }
    };

var
 approx_module_declaration=
  function(env,pmd)
   {return /* record */[0,approx_modtype(env,pmd[2]),pmd[3],pmd[4]];};

var
 approx_sig=
  function(env,ssg)
   {if(ssg)
     {var srem=ssg[2];
      
      var match=ssg[1][1];
      
      var exit;
      
      switch(match[0])
       {case 1:
         var sdecls=match[1];
         
         var rec_flag=rec_flag_of_ptype_declarations(sdecls);
         
         var decls=Typedecl["approx_type_decl"](env,sdecls);
         
         var rem=approx_sig(env,srem);
         
         return map_rec_type
                 (rec_flag,
                  function(rs,param)
                   {return /* Sig_type */[1,param[1],param[2],rs];},
                  decls,
                  rem);
         
        case 4:
         var pmd=match[1];
         
         var md=approx_module_declaration(env,pmd);
         
         var
          match$1=
           Env["enter_module_declaration"](/* None */0,pmd[1][1],md,env);
         
         return /* :: */[0,
                 /* Sig_module */[3,match$1[1],md,/* Trec_not */0],
                 approx_sig(match$1[2],srem)];
         
        case 5:
         var
          decls$1=
           List["map"]
            (function(pmd)
              {return /* tuple */[0,
                       Ident["create"](pmd[1][1]),
                       approx_module_declaration(env,pmd)];
               },
             match[1]);
         
         var
          newenv=
           List["fold_left"]
            (function(env,param)
              {return Env["add_module_declaration"]
                       (/* None */0,param[1],param[2],env);
               },
             env,
             decls$1);
         
         return map_rec
                 (function(rs,param)
                   {return /* Sig_module */[3,param[1],param[2],rs];},
                  decls$1,
                  approx_sig(newenv,srem));
         
        case 6:
         var d=match[1];
         
         var info=approx_modtype_info(env,d);
         
         var match$2=Env["enter_modtype"](d[1][1],info,env);
         
         return /* :: */[0,
                 /* Sig_modtype */[4,match$2[1],info],
                 approx_sig(match$2[2],srem)];
         
        case 7:
         var match$3=type_open(/* None */0,env,match[1]);
         
         return approx_sig(match$3[2],srem);
         
        case 8:
         var smty=match[1][1];
         
         var mty=approx_modtype(env,smty);
         
         var
          sg=
           Subst["signature"](Subst["identity"],extract_sig(env,smty[2],mty));
         
         var newenv$1=Env["add_signature"](sg,env);
         
         return Pervasives["@"](sg,approx_sig(newenv$1,srem));
         
        case 9:exit=313;
        case 10:exit=313;
        default:return approx_sig(env,srem);}
      
      switch(exit)
       {case 313:
         var decls$2=Typeclass["approx_class_declarations"](env,match[1]);
         
         var rem$1=approx_sig(env,srem);
         
         return List["flatten"]
                 (map_rec
                   (function(rs,param)
                     {return /* :: */[0,
                              /* Sig_class_type */[6,param[1],param[3],rs],
                              /* :: */[0,
                               /* Sig_type */[1,param[4],param[5],rs],
                               /* :: */[0,/* Sig_type */[1,param[6],param[7],rs],/* [] */0]]];
                      },
                    decls$2,
                    /* :: */[0,rem$1,/* [] */0]));
         
        }
      }
    else
     {return /* [] */0;}
    };

var
 approx_modtype_info=
  function(env,sinfo)
   {return /* record */[0,
            Misc["may_map"](approx_modtype(env),sinfo[2]),
            sinfo[3],
            sinfo[4]];
    };

var
 check_recmod_typedecls=
  function(env,sdecls,decls)
   {var recmod_ids=List["map"](fst3,decls);
    
    return List["iter2"]
            (function(pmd,param)
              {var mty=param[3][2];
               
               return List["iter"]
                       (function(path)
                         {return Typedecl["check_recmod_typedecl"]
                                  (env,pmd[2][2],recmod_ids,path,Env["find_type"](path,env));
                          },
                        Mtype["type_paths"](env,/* Pident */[0,param[1]],mty));
               },
             sdecls,
             decls);
    };

var compare=function(x,y){return CamlPrimitive["caml_string_compare"](x,y);};

var StringSet=Set["Make"]([0,compare]);

var
 check=
  function(cl,loc,set_ref,name)
   {if(StringSet[3](name,set_ref[1]))
     {throw [0,$$Error,loc,Env["empty"],/* Repeated_name */[6,cl,name]];}
    else
     {return set_ref[1]=StringSet[4](name,set_ref[1]),0;}
    };

var
 check_name=
  function(cl,set_ref,name){return check(cl,name[2],set_ref,name[1]);};

var
 check_sig_item=
  function(type_names,module_names,modtype_names,loc,param)
   {switch(param[0])
     {case 1:return check("type",loc,type_names,Ident["name"](param[1]));
      case 3:return check("module",loc,module_names,Ident["name"](param[1]));
      case 4:
       return check("module type",loc,modtype_names,Ident["name"](param[1]));
      default:return /* () */0;}
    };

var
 remove_duplicates=
  function(val_ids,ext_ids,param)
   {if(param)
     {var f=param[1];
      
      var exit;
      
      switch(f[0])
       {case 0:
         if(List["exists"](Ident["equal"](f[1]),val_ids))
          {return remove_duplicates(val_ids,ext_ids,param[2]);}
         else
          {exit=279;}
         
        case 2:
         var id=f[1];
         
         var exit$1;
         
         if(f[3]!==0)
          {exit$1=280;}
         else
          {var match=param[2];
           
           if(match)
            {var match$1=match[1];
             
             switch(match$1[0])
              {case 2:
                if(match$1[3]!==1)
                 {exit$1=280;}
                else
                 {if(List["exists"](Ident["equal"](id),ext_ids))
                   {return remove_duplicates
                            (val_ids,
                             ext_ids,
                             /* :: */[0,
                              /* Sig_typext */[2,match$1[1],match$1[2],/* Text_first */0],
                              match[2]]);
                    }
                  else
                   {exit$1=280;}
                  }
                
               default:exit$1=280;}
             }
           else
            {exit$1=280;}
           }
         
         switch(exit$1)
          {case 280:
            if(List["exists"](Ident["equal"](id),ext_ids))
             {return remove_duplicates(val_ids,ext_ids,param[2]);}
            else
             {exit=279;}
            
           }
         
        default:exit=279;}
      
      switch(exit)
       {case 279:
         return /* :: */[0,f,remove_duplicates(val_ids,ext_ids,param[2])];
        }
      }
    else
     {return /* [] */0;}
    };

var
 get_values=
  function(param)
   {if(param)
     {var f=param[1];
      
      switch(f[0])
       {case 0:return /* :: */[0,f[1],get_values(param[2])];
        default:return get_values(param[2]);}
      }
    else
     {return /* [] */0;}
    };

var
 get_extension_constructors=
  function(param)
   {if(param)
     {var f=param[1];
      
      switch(f[0])
       {case 2:return /* :: */[0,f[1],get_extension_constructors(param[2])];
        default:return get_extension_constructors(param[2]);}
      }
    else
     {return /* [] */0;}
    };

var
 transl_modtype_longident=
  function(loc,env,lid)
   {var match=Typetexp["find_modtype"](env,loc,lid);return match[1];};

var
 transl_module_alias=
  function(loc,env,lid)
   {return Typetexp["lookup_module"](/* None */0,env,loc,lid);};

var
 mkmty=
  function(desc,typ,env,loc,attrs)
   {var mty=/* record */[0,desc,typ,env,loc,attrs];
    
    Cmt_format["add_saved_type"](/* Partial_module_type */[7,mty]);
    return mty;
    };

var
 mksig=
  function(desc,env,loc)
   {var sg=/* record */[0,desc,env,loc];
    
    Cmt_format["add_saved_type"](/* Partial_signature_item */[6,sg]);
    return sg;
    };

var
 transl_modtype=
  function(env,smty)
   {var loc=smty[2];
    
    var match=smty[1];
    
    switch(match[0])
     {case 0:
       var lid=match[1];
       
       var path=transl_modtype_longident(loc,env,lid[1]);
       
       return mkmty
               (/* Tmty_ident */[0,path,lid],
                /* Mty_ident */[0,path],
                env,
                loc,
                smty[3]);
       
      case 1:
       var sg=transl_signature(env,match[1]);
       
       return mkmty
               (/* Tmty_signature */[1,sg],
                /* Mty_signature */[1,sg[2]],
                env,
                loc,
                smty[3]);
       
      case 2:
       var param=match[1];
       
       var arg=Misc["may_map"](transl_modtype(env),match[2]);
       
       var ty_arg=Misc["may_map"](function(m){return m[2];},arg);
       
       var
        match$1=
         Env["enter_module"]
          ([/* Some */0,/* true */1],
           param[1],
           Btype["default_mty"](ty_arg),
           env);
       
       var id=match$1[1];
       
       Ctype["init_def"](Ident["current_time"](/* () */0));
       var res=transl_modtype(match$1[2],match[3]);
       
       return mkmty
               (/* Tmty_functor */[2,id,param,arg,res],
                /* Mty_functor */[2,id,ty_arg,res[2]],
                env,
                loc,
                smty[3]);
       
      case 3:
       var sbody=match[1];
       
       var body=transl_modtype(env,sbody);
       
       var init_sg=extract_sig(env,sbody[2],body[2]);
       
       var
        match$2=
         List["fold_left"]
          (function(param$1,sdecl)
            {var match$3=merge_constraint(env,smty[2],param$1[2],sdecl);
             
             return /* tuple */[0,
                     /* :: */[0,match$3[1],param$1[1]],
                     match$3[2]];
             },
           /* tuple */[0,/* [] */0,init_sg],
           match[2]);
       
       return mkmty
               (/* Tmty_with */[3,body,List["rev"](match$2[1])],
                Mtype["freshen"](/* Mty_signature */[1,match$2[2]]),
                env,
                loc,
                smty[3]);
       
      case 4:
       var match$3=type_module_type_of_fwd[1](env,match[1]);
       
       return mkmty
               (/* Tmty_typeof */[4,match$3[1]],match$3[2],env,loc,smty[3]);
       
      case 5:throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      case 6:
       var lid$1=match[1];
       
       var path$1=transl_module_alias(loc,env,lid$1[1]);
       
       return mkmty
               (/* Tmty_alias */[5,path$1,lid$1],
                /* Mty_alias */[3,path$1],
                env,
                loc,
                smty[3]);
       
      }
    };

var
 transl_signature=
  function(env,sg)
   {var type_names=[0,StringSet[1]];
    
    var module_names=[0,StringSet[1]];
    
    var modtype_names=[0,StringSet[1]];
    
    var
     transl_sig=
      function(env,sg)
       {Ctype["init_def"](Ident["current_time"](/* () */0));
        if(sg)
         {var srem=sg[2];
          
          var item=sg[1];
          
          var loc=item[2];
          
          var match=item[1];
          
          switch(match[0])
           {case 0:
             var match$1=Typedecl["transl_value_decl"](env,item[2],match[1]);
             
             var tdesc=match$1[1];
             
             var match$2=transl_sig(match$1[2],srem);
             
             var rem=match$2[2];
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_value */[0,tdesc],env,loc),
                      match$2[1]],
                     List["exists"](Ident["equal"](tdesc[1]),get_values(rem))
                      ?rem
                      :/* :: */[0,/* Sig_value */[0,tdesc[1],tdesc[4]],rem],
                     match$2[3]];
             
            case 1:
             var sdecls=match[1];
             
             var rec_flag=rec_flag_of_ptype_declarations(sdecls);
             
             List["iter"]
              (function(decl){return check_name("type",type_names,decl[1]);},
               sdecls);
             var match$3=Typedecl["transl_type_decl"](env,rec_flag,sdecls);
             
             var decls=match$3[1];
             
             var match$4=transl_sig(match$3[2],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_type */[1,decls],env,loc),
                      match$4[1]],
                     map_rec_type_with_row_types
                      (rec_flag,
                       function(rs,td){return /* Sig_type */[1,td[1],td[4],rs];},
                       decls,
                       match$4[2]),
                     match$4[3]];
             
            case 2:
             var
              match$5=
               Typedecl["transl_type_extension"]
                (/* false */0,env,item[2],match[1]);
             
             var tyext=match$5[1];
             
             var match$6=transl_sig(match$5[2],srem);
             
             var rem$1=match$6[2];
             
             var
              constructors=
               List["filter"]
                (function(ext)
                  {return !List["exists"]
                           (Ident["equal"](ext[1]),get_extension_constructors(rem$1));
                   },
                 tyext[4]);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_typext */[2,tyext],env,loc),
                      match$6[1]],
                     map_ext
                      (function(es,ext)
                        {return /* Sig_typext */[2,ext[1],ext[3],es];},
                       constructors,
                       rem$1),
                     match$6[3]];
             
            case 3:
             var match$7=Typedecl["transl_exception"](env,match[1]);
             
             var ext=match$7[1];
             
             var match$8=transl_sig(match$7[2],srem);
             
             var rem$2=match$8[2];
             
             var
              shadowed=
               List["exists"]
                (Ident["equal"](ext[1]),get_extension_constructors(rem$2));
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_exception */[3,ext],env,loc),
                      match$8[1]],
                     shadowed
                      ?rem$2
                      :/* :: */[0,
                        /* Sig_typext */[2,ext[1],ext[3],/* Text_exception */2],
                        rem$2],
                     match$8[3]];
             
            case 4:
             var pmd=match[1];
             
             check_name("module",module_names,pmd[1]);
             var tmty=transl_modtype(env,pmd[2]);
             
             var md=/* record */[0,tmty[2],pmd[3],pmd[4]];
             
             var
              match$9=
               Env["enter_module_declaration"](/* None */0,pmd[1][1],md,env);
             
             var id=match$9[1];
             
             var match$10=transl_sig(match$9[2],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig
                       (/* Tsig_module */[4,
                         /* record */[0,id,pmd[1],tmty,pmd[3],pmd[4]]],
                        env,
                        loc),
                      match$10[1]],
                     /* :: */[0,
                      /* Sig_module */[3,id,md,/* Trec_not */0],
                      match$10[2]],
                     match$10[3]];
             
            case 5:
             var sdecls$1=match[1];
             
             List["iter"]
              (function(pmd){return check_name("module",module_names,pmd[1]);},
               sdecls$1);
             var match$11=transl_recmodule_modtypes(item[2],env,sdecls$1);
             
             var decls$1=match$11[1];
             
             var match$12=transl_sig(match$11[2],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_recmodule */[5,decls$1],env,loc),
                      match$12[1]],
                     map_rec
                      (function(rs,md)
                        {var d=/* record */[0,md[3][2],md[4],md[5]];
                         
                         return /* Sig_module */[3,md[1],d,rs];
                         },
                       decls$1,
                       match$12[2]),
                     match$12[3]];
             
            case 6:
             var
              match$13=
               transl_modtype_decl(modtype_names,env,item[2],match[1]);
             
             var match$14=transl_sig(match$13[1],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_modtype */[6,match$13[2]],env,loc),
                      match$14[1]],
                     /* :: */[0,match$13[3],match$14[2]],
                     match$14[3]];
             
            case 7:
             var match$15=type_open(/* None */0,env,match[1]);
             
             var match$16=transl_sig(match$15[2],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_open */[7,match$15[3]],env,loc),
                      match$16[1]],
                     match$16[2],
                     match$16[3]];
             
            case 8:
             var sincl=match[1];
             
             var smty=sincl[1];
             
             var tmty$1=transl_modtype(env,smty);
             
             var mty=tmty$1[2];
             
             var
              sg$1=
               Subst["signature"]
                (Subst["identity"],extract_sig(env,smty[2],mty));
             
             List["iter"]
              (check_sig_item(type_names,module_names,modtype_names,item[2]),
               sg$1);
             var newenv=Env["add_signature"](sg$1,env);
             
             var incl=/* record */[0,tmty$1,sg$1,sincl[2],sincl[3]];
             
             var match$17=transl_sig(newenv,srem);
             
             var rem$3=match$17[2];
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_include */[8,incl],env,loc),
                      match$17[1]],
                     Pervasives["@"]
                      (remove_duplicates
                        (get_values(rem$3),get_extension_constructors(rem$3),sg$1),
                       rem$3),
                     match$17[3]];
             
            case 9:
             var cl=match[1];
             
             List["iter"]
              (function(param){return check_name("type",type_names,param[3]);},
               cl);
             var match$18=Typeclass["class_descriptions"](env,cl);
             
             var classes=match$18[1];
             
             var match$19=transl_sig(match$18[2],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig
                       (/* Tsig_class */[9,
                         List["map2"](function(pcl,tcl){return tcl[12];},cl,classes)],
                        env,
                        loc),
                      match$19[1]],
                     List["flatten"]
                      (map_rec
                        (function(rs,param)
                          {return /* :: */[0,
                                   /* Sig_class */[5,param[1],param[3],rs],
                                   /* :: */[0,
                                    /* Sig_class_type */[6,param[4],param[5],rs],
                                    /* :: */[0,
                                     /* Sig_type */[1,param[6],param[7],rs],
                                     /* :: */[0,/* Sig_type */[1,param[8],param[9],rs],/* [] */0]]]];
                           },
                         classes,
                         /* :: */[0,match$19[2],/* [] */0])),
                     match$19[3]];
             
            case 10:
             var cl$1=match[1];
             
             List["iter"]
              (function(param){return check_name("type",type_names,param[3]);},
               cl$1);
             var match$20=Typeclass["class_type_declarations"](env,cl$1);
             
             var classes$1=match$20[1];
             
             var match$21=transl_sig(match$20[2],srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig
                       (/* Tsig_class_type */[10,
                         List["map2"]
                          (function(pcl,tcl){return tcl[8];},cl$1,classes$1)],
                        env,
                        loc),
                      match$21[1]],
                     List["flatten"]
                      (map_rec
                        (function(rs,param)
                          {return /* :: */[0,
                                   /* Sig_class_type */[6,param[1],param[3],rs],
                                   /* :: */[0,
                                    /* Sig_type */[1,param[4],param[5],rs],
                                    /* :: */[0,/* Sig_type */[1,param[6],param[7],rs],/* [] */0]]];
                           },
                         classes$1,
                         /* :: */[0,match$21[2],/* [] */0])),
                     match$21[3]];
             
            case 11:
             var x=match[1];
             
             Typetexp["warning_attribute"](/* :: */[0,x,/* [] */0]);
             var match$22=transl_sig(env,srem);
             
             return /* tuple */[0,
                     /* :: */[0,
                      mksig(/* Tsig_attribute */[11,x],env,loc),
                      match$22[1]],
                     match$22[2],
                     match$22[3]];
             
            case 12:
             throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
            }
          }
        else
         {return /* tuple */[0,/* [] */0,/* [] */0,env];}
        };
    
    var previous_saved_types=Cmt_format["get_saved_types"](/* () */0);
    
    Typetexp["warning_enter_scope"](/* () */0);
    var match=transl_sig(Env["in_signature"](env),sg);
    
    var sg$1=/* record */[0,match[1],match[2],match[3]];
    
    Typetexp["warning_leave_scope"](/* () */0);
    Cmt_format["set_saved_types"]
     (/* :: */[0,/* Partial_signature */[5,sg$1],previous_saved_types]);
    return sg$1;
    };

var
 transl_modtype_decl=
  function(modtype_names,env,loc,param)
   {var pmtd_loc=param[4];
    
    var pmtd_attributes=param[3];
    
    var pmtd_name=param[1];
    
    check_name("module type",modtype_names,pmtd_name);
    var tmty=Misc["may_map"](transl_modtype(env),param[2]);
    
    var
     decl=
      /* record */[0,
       Misc["may_map"](function(t){return t[2];},tmty),
       pmtd_attributes,
       pmtd_loc];
    
    var match=Env["enter_modtype"](pmtd_name[1],decl,env);
    
    var id=match[1];
    
    var mtd=/* record */[0,id,pmtd_name,tmty,pmtd_attributes,pmtd_loc];
    
    return /* tuple */[0,match[2],mtd,/* Sig_modtype */[4,id,decl]];
    };

var
 transl_recmodule_modtypes=
  function(loc,env,sdecls)
   {var
     make_env=
      function(curr)
       {return List["fold_left"]
                (function(env,param)
                  {return Env["add_module"]
                           ([/* Some */0,/* true */1],param[1],param[3],env);
                   },
                 env,
                 curr);
        };
    
    var
     make_env2=
      function(curr)
       {return List["fold_left"]
                (function(env,param)
                  {return Env["add_module"]
                           ([/* Some */0,/* true */1],param[1],param[3][2],env);
                   },
                 env,
                 curr);
        };
    
    var
     transition=
      function(env_c,curr)
       {return List["map2"]
                (function(pmd,param)
                  {return /* tuple */[0,
                           param[1],
                           param[2],
                           transl_modtype(env_c,pmd[2])];
                   },
                 sdecls,
                 curr);
        };
    
    var ids=List["map"](function(x){return Ident["create"](x[1][1]);},sdecls);
    
    var
     approx_env=
      List["fold_left"]
       (function(env,id)
         {var
           dummy=
            /* Mty_ident */[0,/* Pident */[0,Ident["create"]("#recmod#")]];
          
          return Env["add_module"]([/* Some */0,/* true */1],id,dummy,env);
          },
        env,
        ids);
    
    var
     init=
      List["map2"]
       (function(id,pmd)
         {return /* tuple */[0,id,pmd[1],approx_modtype(approx_env,pmd[2])];},
        ids,
        sdecls);
    
    var env0=make_env(init);
    
    var dcl1=transition(env0,init);
    
    var env1=make_env2(dcl1);
    
    check_recmod_typedecls(env1,sdecls,dcl1);
    var dcl2=transition(env1,dcl1);
    
    var env2=make_env2(dcl2);
    
    check_recmod_typedecls(env2,sdecls,dcl2);
    var
     dcl2$1=
      List["map2"]
       (function(pmd,param)
         {return /* record */[0,param[1],param[2],param[3],pmd[3],pmd[4]];},
        sdecls,
        dcl2);
    
    return /* tuple */[0,dcl2$1,env2];
    };

var
 simplify_signature=
  function(sg)
   {var
     aux=
      function(param)
       {if(param)
         {var component=param[1];
          
          switch(component[0])
           {case 0:
             var k=aux(param[2]);
             
             var val_names=k[2];
             
             var name=Ident["name"](component[1]);
             
             if(StringSet[3](name,val_names))
              {return k;}
             else
              {return /* tuple */[0,
                       /* :: */[0,component,k[1]],
                       StringSet[4](name,val_names),
                       k[3]];
               }
             
            case 2:
             var k$1=aux(param[2]);
             
             var ext_names=k$1[3];
             
             var val_names$1=k$1[2];
             
             var sg$1=k$1[1];
             
             var name$1=Ident["name"](component[1]);
             
             if(StringSet[3](name$1,ext_names))
              {var exit;
               
               if(component[3]!==0)
                {exit=191;}
               else
                {if(sg$1)
                  {var match=sg$1[1];
                   
                   switch(match[0])
                    {case 2:
                      if(match[3]!==1)
                       {exit=191;}
                      else
                       {return /* tuple */[0,
                                /* :: */[0,
                                 /* Sig_typext */[2,match[1],match[2],/* Text_first */0],
                                 sg$1[2]],
                                val_names$1,
                                ext_names];
                        }
                      
                     default:exit=191;}
                   }
                 else
                  {exit=191;}
                 }
               
               switch(exit){case 191:return k$1;}
               }
             else
              {return /* tuple */[0,
                       /* :: */[0,component,sg$1],
                       val_names$1,
                       StringSet[4](name$1,ext_names)];
               }
             
            default:
             var match$1=aux(param[2]);
             
             return /* tuple */[0,
                     /* :: */[0,component,match$1[1]],
                     match$1[2],
                     match$1[3]];
             }
          }
        else
         {return /* tuple */[0,/* [] */0,StringSet[1],StringSet[1]];}
        };
    
    var match=aux(sg);
    
    return match[1];
    };

var Not_a_path=CamlPrimitive["caml_set_oo_id"]([248,"Typemod.Not_a_path",0]);

var
 path_of_module=
  function(mexp)
   {var match=mexp[1];
    
    var exit;
    
    switch(match[0])
     {case 0:return match[1];
      case 3:
       if(Clflags["applicative_functors"][1])
        {return /* Papply */[2,
                 path_of_module(match[1]),
                 path_of_module(match[2])];
         }
       else
        {exit=187;}
       
      case 4:return path_of_module(match[1]);
      default:exit=187;}
    
    switch(exit){case 187:throw Not_a_path;}
    };

var
 path_of_module$1=
  function(mexp)
   {try
     {return /* Some */[0,path_of_module(mexp)];}
    catch(exn){if(exn===Not_a_path){return /* None */0;}else{throw exn;}}
    };

var
 closed_modtype=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:exit=183;
      case 1:return List["for_all"](closed_signature_item,param[1]);
      case 2:return closed_modtype(param[3]);
      case 3:exit=183;
      }
    
    switch(exit){case 183:return /* true */1;}
    };

var
 closed_signature_item=
  function(param)
   {switch(param[0])
     {case 0:return Ctype["closed_schema"](param[2][1]);
      case 3:return closed_modtype(param[2][1]);
      default:return /* true */1;}
    };

var
 check_nongen_scheme=
  function(env,str)
   {var match=str[1];
    
    switch(match[0])
     {case 1:
       return List["iter"]
               (function(param)
                 {var exp=param[2];
                  
                  if(!Ctype["closed_schema"](exp[4]))
                   {throw [0,
                           $$Error,
                           exp[2],
                           env,
                           /* Non_generalizable */[7,exp[4]]];
                    }
                  else
                   {return 0;}
                  },
                match[2]);
       
      case 6:
       var md=match[1][3];
       
       if(!closed_modtype(md[3]))
        {throw [0,$$Error,md[2],env,/* Non_generalizable_module */[9,md[3]]];}
       else
        {return 0;}
       
      default:return /* () */0;}
    };

var
 check_nongen_schemes=
  function(env,str){return List["iter"](check_nongen_scheme(env),str);};

var
 anchor_submodule=
  function(name,anchor)
   {if(anchor)
     {return /* Some */[0,/* Pdot */[1,anchor[1],name,Path["nopos"]]];}
    else
     {return /* None */0;}
    };

var
 anchor_recmodule=
  function(id,anchor){return /* Some */[0,/* Pident */[0,id]];};

var
 enrich_type_decls=
  function(anchor,decls,oldenv,newenv)
   {if(anchor)
     {var p=anchor[1];
      
      return List["fold_left"]
              (function(e,info)
                {var id=info[1];
                 
                 var
                  info$prime=
                   Mtype["enrich_typedecl"]
                    (oldenv,
                     /* Pdot */[1,p,Ident["name"](id),Path["nopos"]],
                     info[4]);
                 
                 return Env["add_type"](/* true */1,id,info$prime,e);
                 },
               oldenv,
               decls);
      }
    else
     {return newenv;}
    };

var
 enrich_module_type=
  function(anchor,name,mty,env)
   {if(anchor)
     {return Mtype["enrich_modtype"]
              (env,/* Pdot */[1,anchor[1],name,Path["nopos"]],mty);
      }
    else
     {return mty;}
    };

var
 check_recmodule_inclusion=
  function(env,bindings)
   {var
     subst_and_strengthen=
      function(env,s,id,mty)
       {return Mtype["strengthen"]
                (env,
                 Subst["modtype"](s,mty),
                 Subst["module_path"](s,/* Pident */[0,id]));
        };
    
    var
     check_incl=
      function(first_time,n,env,s)
       {if(n>0)
         {var
           bindings1=
            List["map"]
             (function(param)
               {var id=param[1];
                
                return /* tuple */[0,id,Ident["rename"](id),param[5]];
                },
              bindings);
          
          var
           env$prime=
            List["fold_left"]
             (function(env,param)
               {var mty_actual=param[3];
                
                if(first_time)
                 {var mty_actual$prime=mty_actual;}
                else
                 {var
                   mty_actual$prime=
                    subst_and_strengthen(env,s,param[1],mty_actual);
                  }
                
                return Env["add_module"]
                        ([/* Some */0,/* false */0],param[2],mty_actual$prime,env);
                },
              env,
              bindings1);
          
          var
           s$prime=
            List["fold_left"]
             (function(s,param)
               {return Subst["add_module"]
                        (param[1],/* Pident */[0,param[2]],s);
                },
              Subst["identity"],
              bindings1);
          
          return check_incl(/* false */0,n-1,env$prime,s$prime);
          }
        else
         {var
           check_inclusion=
            function(param)
             {var modl=param[4];
              
              var mty_decl=param[3];
              
              var id=param[1];
              
              var mty_decl$prime=Subst["modtype"](s,mty_decl[2]);
              
              var mty_actual$prime=subst_and_strengthen(env,s,id,param[5]);
              
              try
               {var
                 coercion=
                  Includemod["modtypes"](env,mty_actual$prime,mty_decl$prime);
                }
              catch(exn)
               {if(exn[1]===Includemod["Error"])
                 {throw [0,$$Error,modl[2],env,/* Not_included */[1,exn[2]]];}
                else
                 {throw exn;}
                }
              
              var
               modl$prime=
                /* record */[0,
                 /* Tmod_constraint */[4,
                  modl,
                  mty_decl[2],
                  /* Tmodtype_explicit */[0,mty_decl],
                  coercion],
                 modl[2],
                 mty_decl[2],
                 env,
                 /* [] */0];
              
              return /* record */[0,id,param[2],modl$prime,param[6],param[7]];
              };
          
          return List["map"](check_inclusion,bindings);
          }
        };
    
    return check_incl
            (/* true */1,List["length"](bindings),env,Subst["identity"]);
    };

var
 package_constraints=
  function(env,loc,mty,constrs)
   {if(constrs===/* [] */0)
     {return mty;}
    else
     {var sg=extract_sig(env,loc,mty);
      
      var
       sg$prime=
        List["map"]
         (function(item)
           {var exit;
            
            switch(item[0])
             {case 1:
               var td=item[2];
               
               if(td[1])
                {exit=159;}
               else
                {var id=item[1];
                 
                 if
                  (List["mem_assoc"]
                    (/* :: */[0,Ident["name"](id),/* [] */0],constrs))
                  {var
                    ty=
                     List["assoc"]
                      (/* :: */[0,Ident["name"](id),/* [] */0],constrs);
                   
                   var newrecord=/* unknown */"duprecord regular 9";
                   
                   return /* Sig_type */[1,
                           id,
                           (newrecord[5]=/* Some */[0,ty],newrecord),
                           item[3]];
                   }
                 else
                  {exit=159;}
                 }
               
              case 3:
               var md=item[2];
               
               var id$1=item[1];
               
               var
                aux=
                 function(param)
                  {if(param)
                    {var match=param[1];
                     
                     var match$1=match[1];
                     
                     var exit$1;
                     
                     if(match$1)
                      {var l=match$1[2];
                       
                       if(l)
                        {if
                          (CamlPrimitive["caml_string_equal"]
                            (match$1[1],Ident["name"](id$1)))
                          {return /* :: */[0,/* tuple */[0,l,match[2]],aux(param[2])];
                           }
                         else
                          {exit$1=158;}
                         }
                       else
                        {exit$1=158;}
                       }
                     else
                      {exit$1=158;}
                     
                     switch(exit$1){case 158:return aux(param[2]);}
                     }
                   else
                    {return /* [] */0;}
                   };
               
               var
                md$1=
                 /* record */[0,
                  package_constraints(env,loc,md[1],aux(constrs)),
                  md[2],
                  md[3]];
               
               return /* Sig_module */[3,id$1,md$1,item[3]];
               
              default:exit=159;}
            
            switch(exit){case 159:return item;}
            },
          sg);
      
      return /* Mty_signature */[1,sg$prime];
      }
    };

var
 modtype_of_package=
  function(env,loc,p,nl,tl)
   {try
     {var match=Env["find_modtype"](p,env)[1];
      
      var exit;
      
      if(match)
       {if(nl!==/* [] */0)
         {return package_constraints
                  (env,
                   loc,
                   match[1],
                   List["combine"](List["map"](Longident["flatten"],nl),tl));
          }
        else
         {exit=154;}
        }
      else
       {exit=154;}
      
      switch(exit)
       {case 154:
         if(nl===/* [] */0)
          {return /* Mty_ident */[0,p];}
         else
          {throw [0,$$Error,loc,env,/* Signature_expected */0];}
         
        }
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var
         error=
          /* Unbound_modtype */[22,Ctype["lid_of_path"](/* None */0,p)];
        
        throw [0,Typetexp["Error"],loc,env,error];
        }
      else
       {throw exn;}
      }
    };

var
 package_subtype=
  function(env,p1,nl1,tl1,p2,nl2,tl2)
   {var
     mkmty$1=
      function(p,nl,tl)
       {var
         ntl=
          List["filter"]
           (function(param)
             {return Ctype["free_variables"](/* None */0,param[2])===
                     /* [] */0;
              },
            List["combine"](nl,tl));
        
        var match=List["split"](ntl);
        
        return modtype_of_package(env,Location["none"],p,match[1],match[2]);
        };
    
    var mty1=mkmty$1(p1,nl1,tl1);
    
    var mty2=mkmty$1(p2,nl2,tl2);
    
    try
     {return Includemod["modtypes"](env,mty1,mty2)===/* Tcoerce_none */0;}
    catch(exn)
     {if(exn[1]===Includemod["Error"]){return /* false */0;}else{throw exn;}}
    };

var match=(Ctype["package_subtype"][1]=package_subtype,0);

var
 wrap_constraint=
  function(env,arg,mty,explicit)
   {try
     {var coercion=Includemod["modtypes"](env,arg[3],mty);}
    catch(exn)
     {if(exn[1]===Includemod["Error"])
       {throw [0,$$Error,arg[2],env,/* Not_included */[1,exn[2]]];}
      else
       {throw exn;}
      }
    
    return /* record */[0,
            /* Tmod_constraint */[4,arg,mty,explicit,coercion],
            arg[2],
            mty,
            env,
            /* [] */0];
    };

var
 type_module=
  function($staropt$star,sttn,funct_body,anchor,env,smod)
   {if($staropt$star)
     {var alias=$staropt$star[1];}
    else
     {var alias=/* false */0;}
    
    var match$1=smod[1];
    
    switch(match$1[0])
     {case 0:
       var lid=match$1[1];
       
       var
        path=
         Typetexp["lookup_module"](/* Some */[0,!alias],env,smod[2],lid[1]);
       
       var
        md=
         /* record */[0,
          /* Tmod_ident */[0,path,lid],
          smod[2],
          /* Mty_alias */[3,path],
          env,
          smod[3]];
       
       if(alias&&!Env["is_functor_arg"](path,env))
        {Env["add_required_global"](Path["head"](path));var md$1=md;}
       else
        {var mty=Env["find_module"](path,env)[1];
         
         var exit;
         
         switch(mty[0])
          {case 3:
            if(!alias)
             {var p1=Env["normalize_path"](/* Some */[0,smod[2]],env,mty[1]);
              
              var mty$1=Includemod["expand_module_alias"](env,/* [] */0,p1);
              
              var
               md$1=
                /* record */[0,
                 /* Tmod_constraint */[4,
                  md,
                  mty$1,
                  /* Tmodtype_implicit */0,
                  /* Tcoerce_alias */[3,p1,/* Tcoerce_none */0]],
                 md[2],
                 sttn?Mtype["strengthen"](env,mty$1,p1):mty$1,
                 md[4],
                 md[5]];
              }
            else
             {exit=65;}
            
           default:exit=65;}
         
         switch(exit)
          {case 65:
            if(sttn)
             {var mty$2=Mtype["strengthen"](env,mty,path);}
            else
             {var mty$2=mty;}
            
            var md$1=/* record */[0,md[1],md[2],mty$2,md[4],md[5]];
            
           }
         }
       
       return rm(md$1);
       
      case 1:
       var
        match$2=
         type_structure(/* None */0,funct_body,anchor,env,match$1[1],smod[2]);
       
       var sg=match$2[2];
       
       var
        md$2=
         rm
          (/* record */[0,
            /* Tmod_structure */[1,match$2[1]],
            smod[2],
            /* Mty_signature */[1,sg],
            env,
            smod[3]]);
       
       var sg$prime=simplify_signature(sg);
       
       if(List["length"](sg$prime)===List["length"](sg))
        {return md$2;}
       else
        {return wrap_constraint
                 (Env["implicit_coercion"](env),
                  md$2,
                  /* Mty_signature */[1,sg$prime],
                  /* Tmodtype_implicit */0);
         }
       
      case 2:
       var name=match$1[1];
       
       var mty$3=Misc["may_map"](transl_modtype(env),match$1[2]);
       
       var ty_arg=Misc["may_map"](function(m){return m[2];},mty$3);
       
       if(ty_arg)
        {var
          match$3=
           /* tuple */[0,
            Env["enter_module"]
             ([/* Some */0,/* true */1],name[1],ty_arg[1],env),
            /* true */1];
         }
       else
        {var
          match$3=
           /* tuple */[0,/* tuple */[0,Ident["create"]("*"),env],/* false */0];
         }
       
       var match$4=match$3[1];
       
       var id=match$4[1];
       
       var
        body=
         type_module
          (/* None */0,sttn,match$3[2],/* None */0,match$4[2],match$1[3]);
       
       return rm
               (/* record */[0,
                 /* Tmod_functor */[2,id,name,mty$3,body],
                 smod[2],
                 /* Mty_functor */[2,id,ty_arg,body[3]],
                 env,
                 smod[3]]);
       
      case 3:
       var sarg=match$1[2];
       
       var sfunct=match$1[1];
       
       var
        arg=
         type_module(/* None */0,/* true */1,funct_body,/* None */0,env,sarg);
       
       var path$1=path_of_module$1(arg);
       
       var
        funct=
         type_module
          (/* None */0,
           sttn&&path$1!==/* None */0,
           funct_body,
           /* None */0,
           env,
           sfunct);
       
       var mty_functor=Env["scrape_alias"](env,funct[3]);
       
       switch(mty_functor[0])
        {case 2:
          var mty_res=mty_functor[3];
          
          var mty_param=mty_functor[2];
          
          var param=mty_functor[1];
          
          var
           match$5=
            /* tuple */[0,
             mty_param===/* None */0,
             Btype["default_mty"](mty_param)];
          
          var generative=match$5[1];
          
          if(generative)
           {if
             (CamlPrimitive["caml_notequal"]
               (sarg[1],[/* Pmod_structure */1,/* [] */0]))
             {throw [0,$$Error,sfunct[2],env,/* Apply_generative */4];}
            else
             {}
            
            if(funct_body&&Mtype["contains_type"](env,funct[3]))
             {throw [0,$$Error,smod[2],env,/* Not_allowed_in_functor_body */1];
              }
            else
             {}
            }
          else
           {}
          
          try
           {var coercion=Includemod["modtypes"](env,arg[3],match$5[2]);}
          catch(exn)
           {if(exn[1]===Includemod["Error"])
             {throw [0,$$Error,sarg[2],env,/* Not_included */[1,exn[2]]];}
            else
             {throw exn;}
            }
          
          if(path$1)
           {var
             mty_appl=
              Subst["modtype"]
               (Subst["add_module"](param,path$1[1],Subst["identity"]),
                mty_res);
            }
          else
           {if(generative)
             {var mty_appl=mty_res;}
            else
             {try
               {var
                 mty_appl=
                  Mtype["nondep_supertype"]
                   (Env["add_module"]
                     ([/* Some */0,/* true */1],param,arg[3],env),
                    param,
                    mty_res);
                }
              catch(exn$1)
               {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                 {throw [0,
                         $$Error,
                         smod[2],
                         env,
                         /* Cannot_eliminate_dependency */[2,mty_functor]];
                  }
                else
                 {throw exn$1;}
                }
              }
            }
          
          return rm
                  (/* record */[0,
                    /* Tmod_apply */[3,funct,arg,coercion],
                    smod[2],
                    mty_appl,
                    env,
                    smod[3]]);
          
         default:
          throw [0,$$Error,sfunct[2],env,/* Cannot_apply */[0,funct[3]]];}
       
      case 4:
       var
        arg$1=
         type_module
          (/* Some */[0,alias],/* true */1,funct_body,anchor,env,match$1[1]);
       
       var mty$4=transl_modtype(env,match$1[2]);
       
       var
        init=
         wrap_constraint(env,arg$1,mty$4[2],/* Tmodtype_explicit */[0,mty$4]);
       
       return rm(/* record */[0,init[1],smod[2],init[3],init[4],smod[3]]);
       
      case 5:
       if(Clflags["principal"][1]){Ctype["begin_def"](/* () */0)}else{}
       
       var exp=Typecore["type_exp"](env,match$1[1]);
       
       if(Clflags["principal"][1])
        {Ctype["end_def"](/* () */0),Ctype["generalize_structure"](exp[4])}
       else
        {}
       
       var match$6=Ctype["expand_head"](env,exp[4]);
       
       var match$7=match$6[1];
       
       var exit$1;
       
       if(typeof match$7==="number")
        {switch(match$7){}}
       else
        {switch(match$7[0])
          {case 0:
            throw [0,
                   Typecore["Error"],
                   smod[2],
                   env,
                   /* Cannot_infer_signature */3];
            
           case 11:
            var tl=match$7[3];
            
            if
             (List["exists"]
               (function(t)
                 {return Ctype["free_variables"](/* None */0,t)!==/* [] */0;},
                tl))
             {throw [0,
                     $$Error,
                     smod[2],
                     env,
                     /* Incomplete_packed_module */[13,exp[4]]];
              }
            else
             {}
            
            if
             (Clflags["principal"][1]&&
              !Typecore["generalizable"](Btype["generic_level"]-1,exp[4]))
             {Location["prerr_warning"]
               (smod[2],[/* Not_principal */8,"this module unpacking"])}
            else
             {}
            
            var
             mty$5=
              modtype_of_package(env,smod[2],match$7[1],match$7[2],tl);
            
           default:exit$1=87;}}
       
       switch(exit$1)
        {case 87:
          throw [0,$$Error,smod[2],env,/* Not_a_packed_module */[12,exp[4]]];
         }
       
       if(funct_body&&Mtype["contains_type"](env,mty$5))
        {throw [0,$$Error,smod[2],env,/* Not_allowed_in_functor_body */1];}
       else
        {}
       
       return rm
               (/* record */[0,
                 /* Tmod_unpack */[5,exp,mty$5],
                 smod[2],
                 mty$5,
                 env,
                 smod[3]]);
       
      case 6:
       throw [0,Error_forward,Typetexp["error_of_extension"](match$1[1])];
      }
    };

var
 type_structure=
  function($staropt$star,funct_body,anchor,env,sstr,scope)
   {if($staropt$star)
     {var toplevel=$staropt$star[1];}
    else
     {var toplevel=/* false */0;}
    
    var type_names=[0,StringSet[1]];
    
    var module_names=[0,StringSet[1]];
    
    var modtype_names=[0,StringSet[1]];
    
    var
     type_str_item=
      function(env,srem,param)
       {var loc=param[2];
        
        var desc=param[1];
        
        switch(desc[0])
         {case 0:
           var expr=Typecore["type_expression"](env,desc[1]);
           
           return /* tuple */[0,/* Tstr_eval */[0,expr,desc[2]],/* [] */0,env];
           
          case 1:
           var rec_flag=desc[1];
           
           if(rec_flag!==0)
            {var
              scope$1=
               /* Some */[0,
                /* Idef */[1,/* record */[0,loc[1],scope[2],scope[3]]]];
             }
           else
            {if(srem){var start=srem[1][2][1];}else{var start=loc[2];}
             
             var
              scope$1=
               /* Some */[0,
                /* Idef */[1,/* record */[0,start,scope[2],scope[3]]]];
             }
           
           var match$1=Typecore["type_binding"](env,rec_flag,desc[2],scope$1);
           
           var newenv=match$1[2];
           
           var defs=match$1[1];
           
           return /* tuple */[0,
                   /* Tstr_value */[1,rec_flag,defs],
                   List["map"]
                    (function(id)
                      {return /* Sig_value */[0,
                               id,
                               Env["find_value"](/* Pident */[0,id],newenv)];
                       },
                     Typedtree["let_bound_idents"](defs)),
                   newenv];
           
          case 2:
           var match$2=Typedecl["transl_value_decl"](env,loc,desc[1]);
           
           var desc$1=match$2[1];
           
           return /* tuple */[0,
                   /* Tstr_primitive */[2,desc$1],
                   /* :: */[0,/* Sig_value */[0,desc$1[1],desc$1[4]],/* [] */0],
                   match$2[2]];
           
          case 3:
           var sdecls=desc[1];
           
           var rec_flag$1=rec_flag_of_ptype_declarations(sdecls);
           
           List["iter"]
            (function(decl){return check_name("type",type_names,decl[1]);},
             sdecls);
           var match$3=Typedecl["transl_type_decl"](env,rec_flag$1,sdecls);
           
           var decls=match$3[1];
           
           return /* tuple */[0,
                   /* Tstr_type */[3,decls],
                   map_rec_type_with_row_types
                    (rec_flag$1,
                     function(rs,info)
                      {return /* Sig_type */[1,info[1],info[4],rs];},
                     decls,
                     /* [] */0),
                   enrich_type_decls(anchor,decls,env,match$3[2])];
           
          case 4:
           var
            match$4=
             Typedecl["transl_type_extension"](/* true */1,env,loc,desc[1]);
           
           var tyext=match$4[1];
           
           return /* tuple */[0,
                   /* Tstr_typext */[4,tyext],
                   map_ext
                    (function(es,ext)
                      {return /* Sig_typext */[2,ext[1],ext[3],es];},
                     tyext[4],
                     /* [] */0),
                   match$4[2]];
           
          case 5:
           var match$5=Typedecl["transl_exception"](env,desc[1]);
           
           var ext=match$5[1];
           
           return /* tuple */[0,
                   /* Tstr_exception */[5,ext],
                   /* :: */[0,
                    /* Sig_typext */[2,ext[1],ext[3],/* Text_exception */2],
                    /* [] */0],
                   match$5[2]];
           
          case 6:
           var match$6=desc[1];
           
           var pmb_loc=match$6[4];
           
           var attrs=match$6[3];
           
           var name=match$6[1];
           
           check_name("module",module_names,name);
           var
            modl=
             type_module
              ([/* Some */0,/* true */1],
               /* true */1,
               funct_body,
               anchor_submodule(name[1],anchor),
               env,
               match$6[2]);
           
           var
            md=
             /* record */[0,
              enrich_module_type(anchor,name[1],modl[3],env),
              attrs,
              pmb_loc];
           
           var
            match$7=
             Env["enter_module_declaration"](/* None */0,name[1],md,env);
           
           var id=match$7[1];
           
           return /* tuple */[0,
                   /* Tstr_module */[6,
                    /* record */[0,id,name,modl,attrs,pmb_loc]],
                   /* :: */[0,
                    /* Sig_module */[3,
                     id,
                     /* record */[0,modl[3],attrs,pmb_loc],
                     /* Trec_not */0],
                    /* [] */0],
                   match$7[2]];
           
          case 7:
           var
            sbind=
             List["map"]
              (function(mb)
                {var match$8=mb[2][1];
                 
                 switch(match$8[0])
                  {case 4:
                    return /* tuple */[0,
                            mb[1],
                            match$8[2],
                            match$8[1],
                            mb[3],
                            mb[4]];
                    
                   default:
                    throw [0,
                           $$Error,
                           mb[2][2],
                           env,
                           /* Recursive_module_require_explicit_type */3];
                    }
                 },
               desc[1]);
           
           List["iter"]
            (function(param$1)
              {return check_name("module",module_names,param$1[1]);},
             sbind);
           var
            match$8=
             transl_recmodule_modtypes
              (loc,
               env,
               List["map"]
                (function(param$1)
                  {return /* record */[0,
                           param$1[1],
                           param$1[2],
                           param$1[4],
                           param$1[5]];
                   },
                 sbind));
           
           var newenv$1=match$8[2];
           
           var decls$1=match$8[1];
           
           var
            bindings1=
             List["map2"]
              (function(param$1,param$2)
                {var id$1=param$1[1];
                 
                 var
                  modl$1=
                   type_module
                    (/* None */0,
                     /* true */1,
                     funct_body,
                     anchor_recmodule(id$1,anchor),
                     newenv$1,
                     param$2[3]);
                 
                 var
                  mty$prime=
                   enrich_module_type
                    (anchor,Ident["name"](id$1),modl$1[3],newenv$1);
                 
                 return /* tuple */[0,
                         id$1,
                         param$2[1],
                         param$1[3],
                         modl$1,
                         mty$prime,
                         param$2[4],
                         param$2[5]];
                 },
               decls$1,
               sbind);
           
           var
            newenv$2=
             List["fold_left"]
              (function(env,md)
                {var mdecl=/* record */[0,md[3][2],md[4],md[5]];
                 
                 return Env["add_module_declaration"]
                         (/* None */0,md[1],mdecl,env);
                 },
               env,
               decls$1);
           
           var bindings2=check_recmodule_inclusion(newenv$2,bindings1);
           
           return /* tuple */[0,
                   /* Tstr_recmodule */[7,bindings2],
                   map_rec
                    (function(rs,mb)
                      {return /* Sig_module */[3,
                               mb[1],
                               /* record */[0,mb[3][3],mb[4],mb[5]],
                               rs];
                       },
                     bindings2,
                     /* [] */0),
                   newenv$2];
           
          case 8:
           var match$9=transl_modtype_decl(modtype_names,env,loc,desc[1]);
           
           return /* tuple */[0,
                   /* Tstr_modtype */[8,match$9[2]],
                   /* :: */[0,match$9[3],/* [] */0],
                   match$9[1]];
           
          case 9:
           var match$10=type_open(/* Some */[0,toplevel],env,desc[1]);
           
           return /* tuple */[0,
                   /* Tstr_open */[9,match$10[3]],
                   /* [] */0,
                   match$10[2]];
           
          case 10:
           var cl=desc[1];
           
           List["iter"]
            (function(param$1)
              {return check_name("type",type_names,param$1[3]);},
             cl);
           var match$11=Typeclass["class_declarations"](env,cl);
           
           var classes=match$11[1];
           
           return /* tuple */[0,
                   /* Tstr_class */[10,
                    List["map"]
                     (function(param$1)
                       {if(param$1[3][4]===/* None */0)
                         {var vf=/* Virtual */0;}
                        else
                         {var vf=/* Concrete */1;}
                        
                        return /* tuple */[0,param$1[12],param$1[11],vf];
                        },
                      classes)],
                   List["flatten"]
                    (map_rec
                      (function(rs,param$1)
                        {return /* :: */[0,
                                 /* Sig_class */[5,param$1[1],param$1[3],rs],
                                 /* :: */[0,
                                  /* Sig_class_type */[6,param$1[4],param$1[5],rs],
                                  /* :: */[0,
                                   /* Sig_type */[1,param$1[6],param$1[7],rs],
                                   /* :: */[0,
                                    /* Sig_type */[1,param$1[8],param$1[9],rs],
                                    /* [] */0]]]];
                         },
                       classes,
                       /* [] */0)),
                   match$11[2]];
           
          case 11:
           var cl$1=desc[1];
           
           List["iter"]
            (function(param$1)
              {return check_name("type",type_names,param$1[3]);},
             cl$1);
           var match$12=Typeclass["class_type_declarations"](env,cl$1);
           
           var classes$1=match$12[1];
           
           return /* tuple */[0,
                   /* Tstr_class_type */[11,
                    List["map"]
                     (function(param$1)
                       {return /* tuple */[0,param$1[1],param$1[2],param$1[8]];},
                      classes$1)],
                   List["flatten"]
                    (map_rec
                      (function(rs,param$1)
                        {return /* :: */[0,
                                 /* Sig_class_type */[6,param$1[1],param$1[3],rs],
                                 /* :: */[0,
                                  /* Sig_type */[1,param$1[4],param$1[5],rs],
                                  /* :: */[0,
                                   /* Sig_type */[1,param$1[6],param$1[7],rs],
                                   /* [] */0]]];
                         },
                       classes$1,
                       /* [] */0)),
                   match$12[2]];
           
          case 12:
           var sincl=desc[1];
           
           var smodl=sincl[1];
           
           var
            modl$1=
             type_module
              (/* None */0,/* true */1,funct_body,/* None */0,env,smodl);
           
           var
            sg=
             Subst["signature"]
              (Subst["identity"],extract_sig_open(env,smodl[2],modl$1[3]));
           
           var match$13=modl$1[1];
           
           var exit;
           
           switch(match$13[0])
            {case 0:
              var p=match$13[1];
              
              if(!Env["is_functor_arg"](p,env))
               {Env["add_required_global"](Path["head"](p));
                var pos=[0,0];
                
                var
                 sg$1=
                  List["map"]
                   (function(it)
                     {var exit$1;
                      
                      switch(it[0])
                       {case 0:
                         var match$14=it[2][2];
                         
                         var exit$2;
                         
                         if(typeof match$14==="number")
                          {if(match$14!==0){exit$2=129;}else{exit$1=127;}}
                         else
                          {exit$2=129;}
                         
                         switch(exit$2){case 129:exit$1=128;}
                         
                        case 2:exit$1=127;
                        case 3:
                         var md$1=it[2];
                         
                         var id$1=it[1];
                         
                         var n=pos[1];
                         
                         pos[0]++;
                         return /* Sig_module */[3,
                                 id$1,
                                 /* record */[0,
                                  /* Mty_alias */[3,/* Pdot */[1,p,Ident["name"](id$1),n]],
                                  md$1[2],
                                  md$1[3]],
                                 it[3]];
                         
                        case 5:exit$1=127;
                        default:exit$1=128;}
                      
                      switch(exit$1)
                       {case 127:pos[0]++;return it;case 128:return it;}
                      },
                    sg);
                }
              else
               {exit=131;}
              
             default:exit=131;}
           
           switch(exit){case 131:var sg$1=sg;}
           
           List["iter"]
            (check_sig_item(type_names,module_names,modtype_names,loc),sg$1);
           var new_env=Env["add_signature"](sg$1,env);
           
           var incl=/* record */[0,modl$1,sg$1,sincl[2],sincl[3]];
           
           return /* tuple */[0,/* Tstr_include */[12,incl],sg$1,new_env];
           
          case 13:
           var x=desc[1];
           
           Typetexp["warning_attribute"](/* :: */[0,x,/* [] */0]);
           return /* tuple */[0,/* Tstr_attribute */[13,x],/* [] */0,env];
           
          case 14:
           throw [0,Error_forward,Typetexp["error_of_extension"](desc[1])];
          }
        };
    
    var
     type_struct=
      function(env,sstr)
       {Ctype["init_def"](Ident["current_time"](/* () */0));
        if(sstr)
         {var srem=sstr[2];
          
          var pstr=sstr[1];
          
          var previous_saved_types=Cmt_format["get_saved_types"](/* () */0);
          
          var match$1=type_str_item(env,srem,pstr);
          
          var str=/* record */[0,match$1[1],pstr[2],env];
          
          Cmt_format["set_saved_types"]
           (/* :: */[0,
             /* Partial_structure_item */[1,str],
             previous_saved_types]);
          var match$2=type_struct(match$1[3],srem);
          
          return /* tuple */[0,
                  /* :: */[0,str,match$2[1]],
                  Pervasives["@"](match$1[2],match$2[2]),
                  match$2[3]];
          }
        else
         {return /* tuple */[0,/* [] */0,/* [] */0,env];}
        };
    
    if(Clflags["annotations"][1])
     {List["iter"]
       (function(param){return Stypes["record_phrase"](param[2]);},sstr)}
    else
     {}
    
    var previous_saved_types=Cmt_format["get_saved_types"](/* () */0);
    
    Typetexp["warning_enter_scope"](/* () */0);
    var match$1=type_struct(env,sstr);
    
    var final_env=match$1[3];
    
    var sg=match$1[2];
    
    var str=/* record */[0,match$1[1],sg,final_env];
    
    Typetexp["warning_leave_scope"](/* () */0);
    Cmt_format["set_saved_types"]
     (/* :: */[0,/* Partial_structure */[0,str],previous_saved_types]);
    return /* tuple */[0,str,sg,final_env];
    };

var
 type_toplevel_phrase=
  function(env,s)
   {Env["reset_required_globals"](/* () */0);
    return type_structure
            ([/* Some */0,/* true */1],
             /* false */0,
             /* None */0,
             env,
             s,
             Location["none"]);
    };

var
 type_module$1=
  type_module(/* None */0,/* true */1,/* false */0,/* None */0);

var type_structure$1=type_structure(/* None */0,/* false */0,/* None */0);

var
 normalize_modtype=
  function(env,param)
   {var exit;
    
    switch(param[0])
     {case 0:exit=57;
      case 1:return normalize_signature(env,param[1]);
      case 2:return normalize_modtype(env,param[3]);
      case 3:exit=57;
      }
    
    switch(exit){case 57:return /* () */0;}
    };

var
 normalize_signature=
  function(env){return List["iter"](normalize_signature_item(env));};

var
 normalize_signature_item=
  function(env,param)
   {switch(param[0])
     {case 0:return Ctype["normalize_type"](env,param[2][1]);
      case 3:return normalize_modtype(env,param[2][1]);
      default:return /* () */0;}
    };

var
 type_module_type_of=
  function(env,smod)
   {var match$1=smod[1];
    
    switch(match$1[0])
     {case 0:
       var lid=match$1[1];
       
       var match$2=Typetexp["find_module"](env,smod[2],lid[1]);
       
       var
        tmty=
         rm
          (/* record */[0,
            /* Tmod_ident */[0,match$2[1],lid],
            smod[2],
            match$2[2][1],
            env,
            smod[3]]);
       
      default:var tmty=type_module$1(env,smod);}
    
    var mty=tmty[3];
    
    var mty$1=Mtype["remove_aliases"](env,mty);
    
    if(!closed_modtype(mty$1))
     {throw [0,$$Error,smod[2],env,/* Non_generalizable_module */[9,mty$1]];}
    else
     {}
    
    return /* tuple */[0,tmty,mty$1];
    };

var
 get_manifest_types=
  function(param)
   {if(param)
     {var match$1=param[1];
      
      var exit;
      
      switch(match$1[0])
       {case 1:
         var match$2=match$1[2];
         
         if(match$2[1])
          {exit=50;}
         else
          {var match$3=match$2[5];
           
           if(match$3)
            {return /* :: */[0,
                     /* tuple */[0,Ident["name"](match$1[1]),match$3[1]],
                     get_manifest_types(param[2])];
             }
           else
            {exit=50;}
           }
         
        default:exit=50;}
      
      switch(exit){case 50:return get_manifest_types(param[2]);}
      }
    else
     {return /* [] */0;}
    };

var
 type_package=
  function(env,m,p,nl,tl)
   {var lv=Ctype["get_current_level"](/* () */0);
    
    Ctype["begin_def"](/* () */0);
    Ident["set_current_time"](lv);
    var context=Typetexp["narrow"](/* () */0);
    
    var modl=type_module$1(env,m);
    
    Ctype["init_def"](Ident["current_time"](/* () */0));
    Typetexp["widen"](context);
    var match$1=modl[1];
    
    switch(match$1[0])
     {case 0:var match$2=/* tuple */[0,match$1[1],env];
      default:
       var
        match$3=
         Env["enter_module"]([/* Some */0,/* true */1],"%M",modl[3],env);
       
       var match$2=/* tuple */[0,/* Pident */[0,match$3[1]],match$3[2]];
       }
    
    var env$1=match$2[2];
    
    var mp=match$2[1];
    
    var
     mkpath=
      function(mp,param)
       {switch(param[0])
         {case 0:return /* Pdot */[1,mp,param[1],Path["nopos"]];
          case 1:
           return /* Pdot */[1,mkpath(mp,param[1]),param[2],Path["nopos"]];
          case 2:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"typing/typemod.ml",1565,11]];
           
          }
        };
    
    var
     tl$prime=
      List["map"]
       (function(name)
         {return Btype["newgenty"]
                  (/* Tconstr */[3,mkpath(mp,name),/* [] */0,[0,/* Mnil */0]]);
          },
        nl);
    
    Ctype["end_def"](/* () */0);
    if(nl===/* [] */0)
     {return /* tuple */[0,
              wrap_constraint
               (env$1,modl,/* Mty_ident */[0,p],/* Tmodtype_implicit */0),
              /* [] */0];
      }
    else
     {var mty=modtype_of_package(env$1,modl[2],p,nl,tl$prime);
      
      List["iter2"]
       (function(n,ty)
         {try
           {return Ctype["unify"]
                    (env$1,ty,Ctype["newvar"](/* None */0,/* () */0));
            }
          catch(exn)
           {if(exn[1]===Ctype["Unify"])
             {throw [0,$$Error,m[2],env$1,/* Scoping_pack */[14,n,ty]];}
            else
             {throw exn;}
            }
          },
        nl,
        tl$prime);
      return /* tuple */[0,
              wrap_constraint(env$1,modl,mty,/* Tmodtype_implicit */0),
              tl$prime];
      }
    };

Typecore["type_module"][1]=type_module$1;
Typetexp["transl_modtype_longident"][1]=transl_modtype_longident;
Typetexp["transl_modtype"][1]=transl_modtype;
Typecore["type_open"][1]=type_open_(/* None */0);
Typecore["type_package"][1]=type_package;
var match$1=(type_module_type_of_fwd[1]=type_module_type_of,0);

var
 type_implementation_more=
  function(sourcefile,outputprefix,modulename,initial_env,ast)
   {Cmt_format["clear"](/* () */0);
    try
     {Typecore["reset_delayed_checks"](/* () */0);
      Env["reset_required_globals"](/* () */0);
      var map=Typetexp["emit_external_warnings"];
      
      map[32](map,ast);
      var
       match$2=
        type_structure$1(initial_env,ast,Location["in_file"](sourcefile));
      
      var finalenv=match$2[3];
      
      var sg=match$2[2];
      
      var str=match$2[1];
      
      var simple_sg=simplify_signature(sg);
      
      if(Clflags["print_types"][1])
       {Printtyp["wrap_printing_env"]
         (initial_env,
          function(param)
           {return Format["fprintf"]
                    (Format["std_formatter"],
                     [/* Format */0,
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Flush_newline */4,
                        /* End_of_format */0]],
                      "%a@."],
                     Printtyp["signature"],
                     simple_sg);
            });
        return /* tuple */[0,str,/* Tcoerce_none */0,finalenv];
        }
      else
       {var
         sourceintf=
          Pervasives["^"]
           (Misc["chop_extension_if_any"](sourcefile),
            Config["interface_suffix"][1]);
        
        if(CamlPrimitive["caml_sys_file_exists"](sourceintf))
         {try
           {var
             intf_file=
              Misc["find_in_path_uncap"]
               (Config["load_path"][1],Pervasives["^"](modulename,".cmi"));
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {throw [0,
                     $$Error,
                     Location["in_file"](sourcefile),
                     Env["empty"],
                     /* Interface_not_compiled */[11,sourceintf]];
              }
            else
             {throw exn;}
            }
          
          var dclsig=Env["read_signature"](modulename,intf_file);
          
          var
           coercion=
            Includemod["compunit"](initial_env,sourcefile,sg,intf_file,dclsig);
          
          Typecore["force_delayed_checks"](/* () */0);
          Cmt_format["save_cmt"]
           (Pervasives["^"](outputprefix,".cmt"),
            modulename,
            /* Implementation */[1,str],
            /* Some */[0,sourcefile],
            initial_env,
            /* None */0);
          return /* tuple */[0,str,coercion,finalenv];
          }
        else
         {check_nongen_schemes(finalenv,str[1]);
          normalize_signature(finalenv,simple_sg);
          var
           coercion$1=
            Includemod["compunit"]
             (initial_env,sourcefile,sg,"(inferred signature)",simple_sg);
          
          Typecore["force_delayed_checks"](/* () */0);
          if(!Clflags["dont_write_files"][1])
           {var
             sg$1=
              Env["save_signature"]
               (simple_sg,modulename,Pervasives["^"](outputprefix,".cmi"));
            
            Cmt_format["save_cmt"]
             (Pervasives["^"](outputprefix,".cmt"),
              modulename,
              /* Implementation */[1,str],
              /* Some */[0,sourcefile],
              initial_env,
              /* Some */[0,sg$1])}
          else
           {}
          
          return /* tuple */[0,str,coercion$1,finalenv];
          }
        }
      }
    catch(e)
     {Cmt_format["save_cmt"]
       (Pervasives["^"](outputprefix,".cmt"),
        modulename,
        /* Partial_implementation */[3,
         $$Array["of_list"](Cmt_format["get_saved_types"](/* () */0))],
        /* Some */[0,sourcefile],
        initial_env,
        /* None */0);
      throw e;
      }
    };

var
 type_implementation=
  function(sourcefile,outputprefix,modulename,initial_env,ast)
   {var
     match$2=
      type_implementation_more
       (sourcefile,outputprefix,modulename,initial_env,ast);
    
    return /* tuple */[0,match$2[1],match$2[2]];
    };

var
 save_signature=
  function(modname,tsg,outputprefix,source_file,initial_env,cmi)
   {return Cmt_format["save_cmt"]
            (Pervasives["^"](outputprefix,".cmti"),
             modname,
             /* Interface */[2,tsg],
             /* Some */[0,source_file],
             initial_env,
             /* Some */[0,cmi]);
    };

var
 type_interface=
  function(env,ast)
   {var map=Typetexp["emit_external_warnings"];
    
    map[30](map,ast);
    return transl_signature(env,ast);
    };

var
 package_signatures=
  function(subst,param)
   {if(param)
     {var match$2=param[1];
      
      var name=match$2[1];
      
      var sg$prime=Subst["signature"](subst,match$2[2]);
      
      var oldid=Ident["create_persistent"](name);
      
      var newid=Ident["create"](name);
      
      return /* :: */[0,
              /* Sig_module */[3,
               newid,
               /* record */[0,
                /* Mty_signature */[1,sg$prime],
                /* [] */0,
                Location["none"]],
               /* Trec_not */0],
              package_signatures
               (Subst["add_module"](oldid,/* Pident */[0,newid],subst),
                param[2])];
      }
    else
     {return /* [] */0;}
    };

var
 package_units=
  function(initial_env,objfiles,cmifile,modulename)
   {var
     units=
      List["map"]
       (function(f)
         {var pref=Misc["chop_extensions"](f);
          
          var modname=$$String["capitalize"](Filename["basename"](pref));
          
          var sg=Env["read_signature"](modname,Pervasives["^"](pref,".cmi"));
          
          if
           (Filename["check_suffix"](f,".cmi")&&
            !Mtype["no_code_needed_sig"](Env["initial_safe_string"],sg))
           {throw [0,
                   $$Error,
                   Location["none"],
                   Env["empty"],
                   /* Implementation_is_required */[10,f]];
            }
          else
           {}
          
          return /* tuple */[0,
                  modname,
                  Env["read_signature"](modname,Pervasives["^"](pref,".cmi"))];
          },
        objfiles);
    
    Ident["reinit"](/* () */0);
    var sg=package_signatures(Subst["identity"],units);
    
    var prefix=Misc["chop_extension_if_any"](cmifile);
    
    var mlifile=Pervasives["^"](prefix,Config["interface_suffix"][1]);
    
    if(CamlPrimitive["caml_sys_file_exists"](mlifile))
     {if(!CamlPrimitive["caml_sys_file_exists"](cmifile))
       {throw [0,
               $$Error,
               Location["in_file"](mlifile),
               Env["empty"],
               /* Interface_not_compiled */[11,mlifile]];
        }
      else
       {}
      
      var dclsig=Env["read_signature"](modulename,cmifile);
      
      Cmt_format["save_cmt"]
       (Pervasives["^"](prefix,".cmt"),
        modulename,
        /* Packed */[0,sg,objfiles],
        /* None */0,
        initial_env,
        /* None */0);
      return Includemod["compunit"]
              (initial_env,"(obtained by packing)",sg,mlifile,dclsig);
      }
    else
     {var unit_names=List["map"](function(prim){return prim[1];},units);
      
      var
       imports=
        List["filter"]
         (function(param){return !List["mem"](param[1],unit_names);},
          Env["imports"](/* () */0));
      
      if(!Clflags["dont_write_files"][1])
       {var
         sg$1=
          Env["save_signature_with_imports"]
           (sg,modulename,Pervasives["^"](prefix,".cmi"),imports);
        
        Cmt_format["save_cmt"]
         (Pervasives["^"](prefix,".cmt"),
          modulename,
          /* Packed */[0,sg$1,objfiles],
          /* None */0,
          initial_env,
          /* Some */[0,sg$1])}
      else
       {}
      
      return /* Tcoerce_none */0;
      }
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
                    "This module type is not a signature",
                    /* End_of_format */0],
                   "This module type is not a signature"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "This expression creates fresh types.",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String */2,
                       /* No_padding */0,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[This expression creates fresh types.@ %s@]"],
                  "It is not allowed inside applicative functors.");
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Only type constructors with identical parameters can be substituted.",
                    /* End_of_format */0],
                   "Only type constructors with identical parameters can be substituted."]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Recursive modules require an explicit module type.",
                    /* End_of_format */0],
                   "Recursive modules require an explicit module type."]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This is a generative functor. It can only be applied to ()",
                    /* End_of_format */0],
                   "This is a generative functor. It can only be applied to ()"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "This module is not a functor; it has type",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[This module is not a functor; it has type@ %a@]"],
                  Printtyp["modtype"],
                  param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<v>",/* End_of_format */0],
                      "<v>"]],
                    [/* String_literal */11,
                     "Signature mismatch:",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[<v>Signature mismatch:@ %a@]"],
                  Includemod["report_error"],
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "This functor has type",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "The parameter cannot be eliminated in the result type.",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           " Please bind the argument to a module identifier.",
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]],
                   "@[This functor has type@ %a@ The parameter cannot be eliminated in the result type.@  Please bind the argument to a module identifier.@]"],
                  Printtyp["modtype"],
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "This module is not a structure; it has type",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,/* End_of_format */0]]]],
                   "@[This module is not a structure; it has type@ %a"],
                  Printtyp["modtype"],
                  param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The signature constrained by `with' has no component named ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]],
                   "@[The signature constrained by `with' has no component named %a@]"],
                  Printtyp["longident"],
                  param[1]);
         
        case 5:
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
                      "In this `with' constraint, the new definition of ",
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String_literal */11,
                         "does not match its original definition",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "in the constrained signature:",
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]]]],
                   "@[<v>@[In this `with' constraint, the new definition of %a@ does not match its original definition@ in the constrained signature:@]@ %a@]"],
                  Printtyp["longident"],
                  param[1],
                  Includemod["report_error"],
                  param[2]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "Multiple definition of the ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " name ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         46,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "Names must be unique in a given structure or signature.",
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]],
                   "@[Multiple definition of the %s name %s.@ Names must be unique in a given structure or signature.@]"],
                  param[1],
                  param[2]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The type of this expression,",
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
                   "@[The type of this expression,@ %a,@ contains type variables that cannot be generalized@]"],
                  Printtyp["type_scheme"],
                  param[1]);
         
        case 8:
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
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The type of this module,",
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
                   "@[The type of this module,@ %a,@ contains type variables that cannot be generalized@]"],
                  Printtyp["modtype"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The interface ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "declares values, not just types.",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "An implementation must be provided.",
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[The interface %a@ declares values, not just types.@ An implementation must be provided.@]"],
                  Location["print_filename"],
                  param[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "Could not find the .cmi file for interface",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        46,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]]]]],
                   "@[Could not find the .cmi file for interface@ %a.@]"],
                  Location["print_filename"],
                  param[1]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This expression is not a packed module. It has type",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,/* End_of_format */0]]],
                   "This expression is not a packed module. It has type@ %a"],
                  Printtyp["type_expr"],
                  param[1]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The type of this packed module contains variables:",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,/* End_of_format */0]]],
                   "The type of this packed module contains variables:@ %a"],
                  Printtyp["type_expr"],
                  param[1]);
         
        case 14:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "The type ",
             [/* Alpha */15,
              [/* String_literal */11,
               " in this module cannot be exported.",
               [/* Formatting_lit */17,
                [/* Break */0,"@ ",1,0],
                /* End_of_format */0]]]],
            "The type %a in this module cannot be exported.@ "],
           Printtyp["longident"],
           param[1]);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Its type contains local dependencies:",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,/* End_of_format */0]]],
                   "Its type contains local dependencies:@ %a"],
                  Printtyp["type_expr"],
                  param[2]);
         
        }}
    };

var
 report_error$1=
  function(env,ppf,err)
   {return Printtyp["wrap_printing_env"]
            (env,function(param){return report_error(ppf,err);});
    };

var
 match$2=
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
{"type_module":type_module$1,
 "type_structure":type_structure$1,
 "type_toplevel_phrase":type_toplevel_phrase,
 "type_implementation_more":type_implementation_more,
 "type_implementation":type_implementation,
 "type_interface":type_interface,
 "transl_signature":transl_signature,
 "check_nongen_schemes":check_nongen_schemes,
 "type_open_":type_open_,
 "modtype_of_package":modtype_of_package,
 "simplify_signature":simplify_signature,
 "path_of_module":path_of_module$1,
 "save_signature":save_signature,
 "package_units":package_units,
 "Error":$$Error,
 "Error_forward":Error_forward,
 "report_error":report_error$1};

