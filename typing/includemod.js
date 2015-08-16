// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Includeclass=require("Includeclass");
var Includecore=require("Includecore");
var Mtype=require("Mtype");
var Printtyp=require("Printtyp");
var List=require("List");
var Env=require("Env");
var Cmt_format=require("Cmt_format");
var Clflags=require("Clflags");
var Format=require("Format");
var Marshal=require("Marshal");
var Misc=require("Misc");
var Path=require("Path");
var Subst=require("Subst");
var Bytes=require("Bytes");
var Location=require("Location");
var Tbl=require("Tbl");
var Ident=require("Ident");


var $$Error="unknown primitive:caml_set_oo_id";

var
 value_descriptions=
  function(env,cxt,subst,id,vd1,vd2)
   {Cmt_format["record_value_dependency"](vd1,vd2);
    Env["mark_value_used"](env,Ident["name"](id),vd1);
    var vd2$1=Subst["value_description"](subst,vd2);
    
    try
     {return Includecore["value_descriptions"](env,id,vd1,vd2$1);}
    catch(exn)
     {if(exn=Includecore["Dont_match"])
       {throw [0,
               $$Error,
               /* :: */[0,
                /* tuple */[0,
                 cxt,
                 env,
                 /* Value_descriptions */[1,id,vd1,vd2$1]],
                0]];
        }
      else
       {throw exn;}
      }
    };

var
 type_declarations=
  function(env,$staropt$star,cxt,subst,id,decl1,decl2)
   {if($staropt$star){var old_env=$staropt$star[1];}else{var old_env=env;}
    
    Env["mark_type_used"](env,Ident["name"](id),decl1);
    var decl2$1=Subst["type_declaration"](subst,decl2);
    
    var
     err=
      Includecore["type_declarations"]
       (0,env,Ident["name"](id),decl1,id,decl2$1);
    
    if(err!=0)
     {throw [0,
             $$Error,
             /* :: */[0,
              /* tuple */[0,
               cxt,
               old_env,
               /* Type_declarations */[2,id,decl1,decl2$1,err]],
              0]];
      }
    else
     {return 0;}
    };

var
 extension_constructors=
  function(env,cxt,subst,id,ext1,ext2)
   {var ext2$1=Subst["extension_constructor"](subst,ext2);
    
    if(Includecore["extension_constructors"](env,id,ext1,ext2$1))
     {return 0;}
    else
     {throw [0,
             $$Error,
             /* :: */[0,
              /* tuple */[0,
               cxt,
               env,
               /* Extension_constructors */[3,id,ext1,ext2$1]],
              0]];
      }
    };

var
 class_type_declarations=
  function(old_env,env,cxt,subst,id,decl1,decl2)
   {var decl2$1=Subst["cltype_declaration"](subst,decl2);
    
    var reason=Includeclass["class_type_declarations"](env,decl1,decl2$1);
    
    if(reason)
     {throw [0,
             $$Error,
             /* :: */[0,
              /* tuple */[0,
               cxt,
               old_env,
               /* Class_type_declarations */[7,id,decl1,decl2$1,reason]],
              0]];
      }
    else
     {return 0;}
    };

var
 class_declarations=
  function(old_env,env,cxt,subst,id,decl1,decl2)
   {var decl2$1=Subst["class_declaration"](subst,decl2);
    
    var reason=Includeclass["class_declarations"](env,decl1,decl2$1);
    
    if(reason)
     {throw [0,
             $$Error,
             /* :: */[0,
              /* tuple */[0,
               cxt,
               old_env,
               /* Class_declarations */[8,id,decl1,decl2$1,reason]],
              0]];
      }
    else
     {return 0;}
    };

var Dont_match="unknown primitive:caml_set_oo_id";

var
 may_expand_module_path=
  function(env,path)
   {try {return 1;}catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}};

var
 expand_module_path=
  function(env,cxt,path)
   {try
     {return Env["find_modtype_expansion"](path,env);}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,
               $$Error,
               /* :: */[0,
                /* tuple */[0,cxt,env,/* Unbound_modtype_path */[9,path]],
                0]];
        }
      else
       {throw exn;}
      }
    };

var
 expand_module_alias=
  function(env,cxt,path)
   {try
     {return Env["find_module"](path,env)[1];}
    catch(exn)
     {if(exn=Not_found)
       {throw [0,
               $$Error,
               /* :: */[0,
                /* tuple */[0,cxt,env,/* Unbound_module_path */[10,path]],
                0]];
        }
      else
       {throw exn;}
      }
    };

var
 kind_of_field_desc=
  function(param)
   {switch(param)
     {case 0:return "value";
      case 1:return "type";
      case 2:return "extension constructor";
      case 3:return "module";
      case 4:return "module type";
      case 5:return "class";
      case 6:return "class type";
      }
    };

var
 item_ident_name=
  function(param)
   {switch(param)
     {case 0:
       var id=param[1];
       
       return /* tuple */[0,
               id,
               param[2][3],
               /* Field_value */[0,Ident["name"](id)]];
       
      case 1:
       var id$1=param[1];
       
       return /* tuple */[0,
               id$1,
               param[2][8],
               /* Field_type */[1,Ident["name"](id$1)]];
       
      case 2:
       var id$2=param[1];
       
       return /* tuple */[0,
               id$2,
               param[2][6],
               /* Field_typext */[2,Ident["name"](id$2)]];
       
      case 3:
       var id$3=param[1];
       
       return /* tuple */[0,
               id$3,
               param[2][3],
               /* Field_module */[3,Ident["name"](id$3)]];
       
      case 4:
       var id$4=param[1];
       
       return /* tuple */[0,
               id$4,
               param[2][3],
               /* Field_modtype */[4,Ident["name"](id$4)]];
       
      case 5:
       var id$5=param[1];
       
       return /* tuple */[0,
               id$5,
               param[2][6],
               /* Field_class */[5,Ident["name"](id$5)]];
       
      case 6:
       var id$6=param[1];
       
       return /* tuple */[0,
               id$6,
               param[2][5],
               /* Field_classtype */[6,Ident["name"](id$6)]];
       
      }
    };

var
 is_runtime_component=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:
       var exit$1;
       
       var $js=param[2][2];
       if(typeof $js=="number")
        {switch($js){}}
       else
        {switch($js[0]){case 0:exit=84;default:exit$1=86;}}
       
       switch(exit$1){case 86:exit=85;}
       
      case 2:exit=85;
      case 3:exit=85;
      case 5:exit=85;
      default:exit=84;}
    
    switch(exit){case 84:return 0;case 85:return 1;}
    };

var
 print_list=
  function(pr,ppf,param)
   {if(param)
     {var l=param[2];
      
      var a=param[1];
      
      if(l)
       {pr(ppf,a);
        Format["fprintf"](ppf,[0,[12,59,[17,[0,"@ ",1,0],0]],";@ "]);
        return print_list(pr,ppf,l);
        }
      else
       {return pr(ppf,a);}
      }
    else
     {return 0;}
    };

var
 print_list$1=
  function(pr,ppf,l)
   {return Format["fprintf"]
            (ppf,
             [0,[12,91,[18,[1,[0,0,""]],[15,[17,0,[12,93,0]]]]],"[@[%a@]]"],
             print_list(pr),
             l);
    };

var
 print_coercion=
  function(ppf,c)
   {var pr=function(fmt){return Format["fprintf"](ppf,fmt);};
    
    if(typeof c=="number")
     {switch(c){case 0:return pr([0,[11,"id",0],"id"]);}}
    else
     {switch(c[0])
       {case 0:
         return pr
                 ([0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "struct",
                     [17,[0,"@ ",1,0],[15,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                   "@[<2>struct@ %a@ %a@]"],
                  print_list$1(print_coercion2),
                  c[1],
                  print_list$1(print_coercion3),
                  c[2]);
         
        case 1:
         return pr
                 ([0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "functor",
                     [17,
                      [0,"@ ",1,0],
                      [12,
                       40,
                       [15,[12,41,[17,[0,"@ ",1,0],[12,40,[15,[12,41,[17,0,0]]]]]]]]]]],
                   "@[<2>functor@ (%a)@ (%a)@]"],
                  print_coercion,
                  c[1],
                  print_coercion,
                  c[2]);
         
        case 2:return pr([0,[11,"prim ",[2,0,0]],"prim %s"],c[2][1]);
        case 3:
         return pr
                 ([0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "alias ",
                     [15,[17,[0,"@ ",1,0],[12,40,[15,[12,41,[17,0,0]]]]]]]],
                   "@[<2>alias %a@ (%a)@]"],
                  Printtyp["path"],
                  c[1],
                  print_coercion,
                  c[2]);
         
        }}
    };

var
 print_coercion2=
  function(ppf,param)
   {return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,0,""]],
               [4,0,0,0,[12,44,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
              "@[%d,@ %a@]"],
             param[1],
             print_coercion,
             param[2]);
    };

var
 print_coercion3=
  function(ppf,param)
   {return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,0,""]],
               [2,
                0,
                [11,", ",[4,0,0,0,[12,44,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]],
              "@[%s, %d,@ %a@]"],
             Ident["unique_name"](param[1]),
             param[2],
             print_coercion,
             param[3]);
    };

var
 simplify_structure_coercion=
  function(cc,id_pos_list)
   {var
     is_identity_coercion=
      function(pos,param)
       {if(param)
         {var match=param[1];
          
          return (match[1]=pos)&&
                 (match[2]=0)&&
                 is_identity_coercion(pos+1,param[2]);
          }
        else
         {return 1;}
        };
    
    if(is_identity_coercion(0,cc))
     {return 0;}
    else
     {return /* Tcoerce_structure */[0,cc,id_pos_list];}
    };

var
 modtypes=
  function(env,cxt,subst,mty1,mty2)
   {try
     {return try_modtypes(env,cxt,subst,mty1,mty2);}
    catch(err)
     {if(err=Dont_match)
       {throw [0,
               $$Error,
               /* :: */[0,
                /* tuple */[0,
                 cxt,
                 env,
                 /* Module_types */[4,mty1,Subst["modtype"](subst,mty2)]],
                0]];
        }
      else
       {if(err[1]=$$Error)
         {var exit;
          
          switch(mty1)
           {case 3:exit=33;
            default:
             switch(mty2)
              {case 3:exit=33;
               default:
                throw [0,
                       $$Error,
                       /* :: */[0,
                        /* tuple */[0,
                         cxt,
                         env,
                         /* Module_types */[4,mty1,Subst["modtype"](subst,mty2)]],
                        err[2]]];
                }
             }
          
          switch(exit){case 33:throw err;}
          }
        else
         {throw err;}
        }
      }
    };

var
 try_modtypes=
  function(env,cxt,subst,mty1,mty2)
   {var exit;
    
    switch(mty1)
     {case 0:
       var p1=mty1[1];
       
       if(may_expand_module_path(env,p1))
        {return try_modtypes
                 (env,cxt,subst,expand_module_path(env,cxt,p1),mty2);
         }
       else
        {exit=49;}
       
      case 1:
       switch(mty2)
        {case 0:exit=49;
         case 1:return signatures(env,cxt,subst,mty1[1],mty2[1]);
         case 2:exit=48;
         case 3:exit=48;
         }
       
      case 2:
       var match=mty1[2];
       
       var param1=mty1[1];
       
       if(match)
        {switch(mty2)
          {case 0:exit=49;
           case 1:exit=48;
           case 2:
            var match$1=mty2[2];
            
            if(match$1)
             {var arg2$prime=Subst["modtype"](subst,match$1[1]);
              
              var
               cc_arg=
                modtypes
                 (env,
                  /* :: */[0,/* Arg */[2,param1],cxt],
                  Subst["identity"],
                  arg2$prime,
                  match[1]);
              
              var
               cc_res=
                modtypes
                 (Env["add_module"](0,param1,arg2$prime,env),
                  /* :: */[0,/* Body */[3,param1],cxt],
                  Subst["add_module"](mty2[1],/* Pident */[0,param1],subst),
                  mty1[3],
                  mty2[3]);
              
              var exit$1;
              
              if("unknown primitive:isint")
               {if("unknown primitive:isint"){return 0;}else{exit$1=44;}}
              else
               {exit$1=44;}
              
              switch(exit$1)
               {case 44:return /* Tcoerce_functor */[1,cc_arg,cc_res];}
              }
            else
             {exit=48;}
            
           case 3:exit=48;
           }
         }
       else
        {switch(mty2)
          {case 0:exit=49;
           case 1:exit=48;
           case 2:
            if(mty2[2])
             {exit=48;}
            else
             {var
               cc=
                modtypes
                 (env,
                  /* :: */[0,/* Body */[3,param1],cxt],
                  subst,
                  mty1[3],
                  mty2[3]);
              
              if("unknown primitive:isint")
               {return 0;}
              else
               {return /* Tcoerce_functor */[1,0,cc];}
              }
            
           case 3:exit=48;
           }
         }
       
      case 3:
       var p1$1=mty1[1];
       
       switch(mty2)
        {case 3:
          var p2=mty2[1];
          
          if(Env["is_functor_arg"](p2,env))
           {throw [0,
                   $$Error,
                   /* :: */[0,
                    /* tuple */[0,cxt,env,/* Invalid_module_alias */[11,p2]],
                    0]];
            }
          else
           {}
          
          if(Path["same"](p1$1,p2))
           {return 0;}
          else
           {var p1$2=Env["normalize_path"](0,env,p1$1);
            
            var
             p2$1=
              Env["normalize_path"](0,env,Subst["module_path"](subst,p2));
            
            if(Path["same"](p1$2,p2$1)){return 0;}else{throw Dont_match;}
            }
          
         default:
          try
           {var
             p1$3=
              Env["normalize_path"](/* Some */[0,Location["none"]],env,p1$1);
            }
          catch(exn)
           {var exit$2;
            
            if(exn[1]=Env["Error"])
             {var match$2=exn[2];
              
              switch(match$2)
               {case 3:
                 throw [0,
                        $$Error,
                        /* :: */[0,
                         /* tuple */[0,
                          cxt,
                          env,
                          /* Unbound_module_path */[10,match$2[3]]],
                         0]];
                 
                default:exit$2=41;}
              }
            else
             {exit$2=41;}
            
            switch(exit$2){case 41:throw exn;}
            }
          
          var
           mty1$1=
            Mtype["strengthen"](env,expand_module_alias(env,cxt,p1$3),p1$3);
          
          return /* Tcoerce_alias */[3,
                  p1$3,
                  modtypes(env,cxt,subst,mty1$1,mty2)];
          }
       
      }
    
    switch(exit)
     {case 49:
       switch(mty2)
        {case 0:
          return try_modtypes2(env,cxt,mty1,Subst["modtype"](subst,mty2));
         default:"unknown block:(exit 48)";}
       
      case 48:throw Dont_match;
      }
    };

var
 try_modtypes2=
  function(env,cxt,mty1,mty2)
   {var exit;
    
    switch(mty1)
     {case 0:
       switch(mty2)
        {case 0:if(Path["same"](mty1[1],mty2[1])){return 0;}else{exit=52;}
         default:exit=51;}
       
      default:exit=52;}
    
    switch(exit)
     {case 52:
       switch(mty2)
        {case 0:
          return try_modtypes
                  (env,
                   cxt,
                   Subst["identity"],
                   mty1,
                   expand_module_path(env,cxt,mty2[1]));
          
         default:"unknown block:(exit 51)";}
       
      case 51:throw [0,Assert_failure,[0,"typing/includemod.ml",275,6]];
      }
    };

var
 signatures=
  function(env,cxt,subst,sig1,sig2)
   {var new_env=Env["add_signature"](sig1,Env["in_signature"](env));
    
    var
     match=
      List["fold_left"]
       (function(param,item)
         {var pos=param[2];
          
          var l=param[1];
          
          switch(item)
           {case 3:
             return /* tuple */[0,
                     /* :: */[0,/* tuple */[0,item[1],pos,0],l],
                     pos+1];
             
            default:
             return /* tuple */[0,l,is_runtime_component(item)?pos+1:pos];}
          },
        [0,0,0],
        sig1);
    
    var id_pos_list=match[1];
    
    var
     build_component_table=
      function(pos,tbl,param)
       {if(param)
         {var item=param[1];
          
          var match$1=item_ident_name(item);
          
          if(is_runtime_component(item))
           {var nextpos=pos+1;}
          else
           {var nextpos=pos;}
          
          return build_component_table
                  (nextpos,
                   Tbl["add"]
                    (match$1[3],/* tuple */[0,match$1[1],item,pos],tbl),
                   param[2]);
          }
        else
         {return /* tuple */[0,pos,tbl];}
        };
    
    var match$1=build_component_table(0,Tbl["empty"],sig1);
    
    var comps1=match$1[2];
    
    var len1=match$1[1];
    
    var
     len2=
      List["fold_left"]
       (function(n,i){if(is_runtime_component(i)){return n+1;}else{return n;}},
        0,
        sig2);
    
    var
     pair_components=
      function(subst$1,paired,unpaired,param)
       {if(param)
         {var rem=param[2];
          
          var item2=param[1];
          
          var match$2=item_ident_name(item2);
          
          var name2=match$2[3];
          
          var id2=match$2[1];
          
          var exit;
          
          switch(item2)
           {case 1:
             if(item2[2][5])
              {exit=61;}
             else
              {switch(name2)
                {case 1:
                  var s=name2[1];
                  
                  var l=s["length"];
                  
                  if(l>=4&&"unknown primitive:caml_string_equal")
                   {var
                     match$3=
                      /* tuple */[0,
                       /* Field_type */[1,$$String["sub"](s,0,s["length"]-4)],
                       0];
                    }
                  else
                   {exit=61;}
                  
                 default:exit=61;}
               }
             
            default:exit=61;}
          
          switch(exit){case 61:var match$3=/* tuple */[0,name2,1];}
          
          var name2$1=match$3[1];
          
          try
           {var match$4=Tbl["find"](name2$1,comps1);
            
            var id1=match$4[1];
            
            switch(item2)
             {case 1:
               var
                new_subst=
                 Subst["add_type"](id2,/* Pident */[0,id1],subst$1);
               
              case 3:
               var
                new_subst=
                 Subst["add_module"](id2,/* Pident */[0,id1],subst$1);
               
              case 4:
               var
                new_subst=
                 Subst["add_modtype"]
                  (id2,/* Mty_ident */[0,/* Pident */[0,id1]],subst$1);
               
              default:var new_subst=subst$1;}
            
            return pair_components
                    (new_subst,
                     /* :: */[0,
                      /* tuple */[0,match$4[2],item2,match$4[3]],
                      paired],
                     unpaired,
                     rem);
            }
          catch(exn)
           {if(exn=Not_found)
             {if(match$3[2])
               {var
                 unpaired$1=
                  /* :: */[0,
                   /* tuple */[0,
                    cxt,
                    env,
                    /* Missing_field */[0,
                     id2,
                     match$2[2],
                     kind_of_field_desc(name2$1)]],
                   unpaired];
                }
              else
               {var unpaired$1=unpaired;}
              
              return pair_components(subst$1,paired,unpaired$1,rem);
              }
            else
             {throw exn;}
            }
          }
        else
         {if(unpaired)
           {throw [0,$$Error,unpaired];}
          else
           {var
             cc=
              signature_components
               (env,new_env,cxt,subst$1,List["rev"](paired));
            
            if(len1=len2)
             {return simplify_structure_coercion(cc,id_pos_list);}
            else
             {return /* Tcoerce_structure */[0,cc,id_pos_list];}
            }
          }
        };
    
    return pair_components(subst,0,0,sig2);
    };

var
 signature_components=
  function(old_env,env,cxt,subst,paired)
   {var
     comps_rec=
      function(rem){return signature_components(old_env,env,cxt,subst,rem);};
    
    var exit;
    
    if(paired)
     {var match=paired[1];
      
      var match$1=match[1];
      
      switch(match$1)
       {case 0:
         var match$2=match[2];
         
         switch(match$2)
          {case 0:
            var rem=paired[2];
            
            var valdecl2=match$2[2];
            
            var
             cc=
              value_descriptions(env,cxt,subst,match$1[1],match$1[2],valdecl2);
            
            var match$3=valdecl2[2];
            
            var exit$1;
            
            if(typeof match$3=="number")
             {switch(match$3){}}
            else
             {switch(match$3[0])
               {case 0:return comps_rec(rem);default:exit$1=71;}}
            
            switch(exit$1)
             {case 71:
               return /* :: */[0,/* tuple */[0,match[3],cc],comps_rec(rem)];
              }
            
           default:exit=74;}
         
        case 1:
         var match$4=match[2];
         
         switch(match$4)
          {case 1:
            type_declarations
             (env,
              /* Some */[0,old_env],
              cxt,
              subst,
              match$1[1],
              match$1[2],
              match$4[2]);
            return comps_rec(paired[2]);
            
           default:exit=74;}
         
        case 2:
         var match$5=match[2];
         
         switch(match$5)
          {case 2:
            extension_constructors
             (env,cxt,subst,match$1[1],match$1[2],match$5[2]);
            return /* :: */[0,/* tuple */[0,match[3],0],comps_rec(paired[2])];
            
           default:exit=74;}
         
        case 3:
         var match$6=match[2];
         
         switch(match$6)
          {case 3:
            var id1=match$1[1];
            
            var
             cc$1=
              modtypes
               (env,
                /* :: */[0,/* Module */[0,id1],cxt],
                subst,
                Mtype["strengthen"](env,match$1[2][1],/* Pident */[0,id1]),
                match$6[2][1]);
            
            return /* :: */[0,
                    /* tuple */[0,match[3],cc$1],
                    comps_rec(paired[2])];
            
           default:exit=74;}
         
        case 4:
         var match$7=match[2];
         
         switch(match$7)
          {case 4:
            modtype_infos(env,cxt,subst,match$1[1],match$1[2],match$7[2]);
            return comps_rec(paired[2]);
            
           default:exit=74;}
         
        case 5:
         var match$8=match[2];
         
         switch(match$8)
          {case 5:
            class_declarations
             (old_env,env,cxt,subst,match$1[1],match$1[2],match$8[2]);
            return /* :: */[0,/* tuple */[0,match[3],0],comps_rec(paired[2])];
            
           default:exit=74;}
         
        case 6:
         var match$9=match[2];
         
         switch(match$9)
          {case 6:
            class_type_declarations
             (old_env,env,cxt,subst,match$1[1],match$1[2],match$9[2]);
            return comps_rec(paired[2]);
            
           default:exit=74;}
         
        }
      }
    else
     {return 0;}
    
    switch(exit)
     {case 74:throw [0,Assert_failure,[0,"typing/includemod.ml",400,6]];}
    };

var
 modtype_infos=
  function(env,cxt,subst,id,info1,info2)
   {var info2$1=Subst["modtype_declaration"](subst,info2);
    
    var cxt$prime=/* :: */[0,/* Modtype */[1,id],cxt];
    
    try
     {var match=info1[1];
      
      var match$1=info2$1[1];
      
      if(match)
       {if(match$1)
         {return check_modtype_equiv(env,cxt$prime,match[1],match$1[1]);}
        else
         {return 0;}
        }
      else
       {if(match$1)
         {return check_modtype_equiv
                  (env,
                   cxt$prime,
                   /* Mty_ident */[0,/* Pident */[0,id]],
                   match$1[1]);
          }
        else
         {return 0;}
        }
      }
    catch(exn)
     {if(exn[1]=$$Error)
       {throw [0,
               $$Error,
               /* :: */[0,
                /* tuple */[0,cxt,env,/* Modtype_infos */[5,id,info1,info2$1]],
                exn[2]]];
        }
      else
       {throw exn;}
      }
    };

var
 check_modtype_equiv=
  function(env,cxt,mty1,mty2)
   {var match=modtypes(env,cxt,Subst["identity"],mty1,mty2);
    
    var match$1=modtypes(env,cxt,Subst["identity"],mty2,mty1);
    
    var exit;
    
    if("unknown primitive:isint")
     {if("unknown primitive:isint"){return 0;}else{exit=79;}}
    else
     {exit=79;}
    
    switch(exit)
     {case 79:throw [0,$$Error,/* :: */[0,/* tuple */[0,cxt,env,0],0]];}
    };

var
 check_modtype_inclusion=
  function(env,mty1,path1,mty2)
   {try
     {return 0;}
    catch(exn){if(exn[1]=$$Error){throw Not_found;}else{throw exn;}}
    };

Env["check_modtype_inclusion"][1]=check_modtype_inclusion,0;
var
 compunit=
  function(env,impl_name,impl_sig,intf_name,intf_sig)
   {try
     {return signatures(env,0,Subst["identity"],impl_sig,intf_sig);}
    catch(exn)
     {if(exn[1]=$$Error)
       {throw [0,
               $$Error,
               /* :: */[0,
                /* tuple */[0,
                 0,
                 Env["empty"],
                 /* Interface_mismatch */[6,impl_name,intf_name]],
                exn[2]]];
        }
      else
       {throw exn;}
      }
    };

var
 modtypes$1=
  function(env,mty1,mty2){return modtypes(env,0,Subst["identity"],mty1,mty2);};

var
 signatures$1=
  function(env,sig1,sig2)
   {return signatures(env,0,Subst["identity"],sig1,sig2);};

var
 type_declarations$1=
  function(env,id,decl1,decl2)
   {return type_declarations(env,0,0,Subst["identity"],id,decl1,decl2);};

var
 show_loc=
  function(msg,ppf,loc)
   {var pos=loc[1];
    
    if(List["mem"](pos[1],[0,"",[0,"_none_",[0,"//toplevel//",0]]]))
     {return 0;}
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [17,
                 3,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [15,[12,58,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]],
                "@\n@[<2>%a:@ %s@]"],
               Location["print_loc"],
               loc,
               msg);
      }
    };

var
 show_locs=
  function(ppf,param)
   {show_loc("Expected declaration",ppf,param[2]);
    return show_loc("Actual declaration",ppf,param[1]);
    };

var
 include_err=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Illegal permutation of structure fields",0],
                   "Illegal permutation of structure fields"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         Format["fprintf"]
          (ppf,
           [0,
            [11,
             "The ",
             [2,0,[11," `",[15,[11,"' is required but not provided",0]]]]],
            "The %s `%a' is required but not provided"],
           param[3],
           Printtyp["ident"],
           param[1]);
         return show_loc("Expected declaration",ppf,param[2]);
         
        case 1:
         var d2=param[3];
         
         var d1=param[2];
         
         var id=param[1];
         
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
             [11,
              "Values do not match:",
              [17,
               [0,"@ ",1,0],
               [15,
                [17,
                 [0,"@;<1 -2>",1,-2],
                 [11,"is not included in",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
            "@[<hv 2>Values do not match:@ %a@;<1 -2>is not included in@ %a@]"],
           Printtyp["value_description"](id),
           d1,
           Printtyp["value_description"](id),
           d2);
         return show_locs(ppf,/* tuple */[0,d1[3],d2[3]]);
         
        case 2:
         var d2$1=param[3];
         
         var d1$1=param[2];
         
         var id$1=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<v>",0],"<v>"]],
                    [18,
                     [1,[0,[11,"<hv>",0],"<hv>"]],
                     [2,
                      0,
                      [12,
                       58,
                       [17,
                        [0,"@;<1 2>",1,2],
                        [15,
                         [17,
                          [0,"@ ",1,0],
                          [2,0,[17,[0,"@;<1 2>",1,2],[15,[17,0,[15,[15,[17,0,0]]]]]]]]]]]]]],
                   "@[<v>@[<hv>%s:@;<1 2>%a@ %s@;<1 2>%a@]%a%a@]"],
                  "Type declarations do not match",
                  Printtyp["type_declaration"](id$1),
                  d1$1,
                  "is not included in",
                  Printtyp["type_declaration"](id$1),
                  d2$1,
                  show_locs,
                  /* tuple */[0,d1$1[8],d2$1[8]],
                  Includecore["report_type_mismatch"]
                   ("the first","the second","declaration"),
                  param[4]);
         
        case 3:
         var x2=param[3];
         
         var x1=param[2];
         
         var id$2=param[1];
         
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
             [11,
              "Extension declarations do not match:",
              [17,
               [0,"@ ",1,0],
               [15,
                [17,
                 [0,"@;<1 -2>",1,-2],
                 [11,"is not included in",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
            "@[<hv 2>Extension declarations do not match:@ %a@;<1 -2>is not included in@ %a@]"],
           Printtyp["extension_constructor"](id$2),
           x1,
           Printtyp["extension_constructor"](id$2),
           x2);
         return show_locs(ppf,/* tuple */[0,x1[6],x2[6]]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                    [11,
                     "Modules do not match:",
                     [17,
                      [0,"@ ",1,0],
                      [15,
                       [17,
                        [0,"@;<1 -2>",1,-2],
                        [11,"is not included in",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
                   "@[<hv 2>Modules do not match:@ %a@;<1 -2>is not included in@ %a@]"],
                  Printtyp["modtype"],
                  param[1],
                  Printtyp["modtype"],
                  param[2]);
         
        case 5:
         var id$3=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                    [11,
                     "Module type declarations do not match:",
                     [17,
                      [0,"@ ",1,0],
                      [15,
                       [17,
                        [0,"@;<1 -2>",1,-2],
                        [11,"does not match",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
                   "@[<hv 2>Module type declarations do not match:@ %a@;<1 -2>does not match@ %a@]"],
                  Printtyp["modtype_declaration"](id$3),
                  param[2],
                  Printtyp["modtype_declaration"](id$3),
                  param[3]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The implementation ",
                     [2,
                      0,
                      [17,
                       [0,"@ ",1,0],
                       [11,"does not match the interface ",[2,0,[12,58,0]]]]]]],
                   "@[The implementation %s@ does not match the interface %s:"],
                  param[1],
                  param[2]);
         
        case 7:
         var id$4=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                    [11,
                     "Class type declarations do not match:",
                     [17,
                      [0,"@ ",1,0],
                      [15,
                       [17,
                        [0,"@;<1 -2>",1,-2],
                        [11,
                         "does not match",
                         [17,[0,"@ ",1,0],[15,[17,0,[17,[0,"@ ",1,0],[15,0]]]]]]]]]]],
                   "@[<hv 2>Class type declarations do not match:@ %a@;<1 -2>does not match@ %a@]@ %a"],
                  Printtyp["cltype_declaration"](id$4),
                  param[2],
                  Printtyp["cltype_declaration"](id$4),
                  param[3],
                  Includeclass["report_error"],
                  param[4]);
         
        case 8:
         var id$5=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                    [11,
                     "Class declarations do not match:",
                     [17,
                      [0,"@ ",1,0],
                      [15,
                       [17,
                        [0,"@;<1 -2>",1,-2],
                        [11,
                         "does not match",
                         [17,[0,"@ ",1,0],[15,[17,0,[17,[0,"@ ",1,0],[15,0]]]]]]]]]]],
                   "@[<hv 2>Class declarations do not match:@ %a@;<1 -2>does not match@ %a@]@ %a"],
                  Printtyp["class_declaration"](id$5),
                  param[2],
                  Printtyp["class_declaration"](id$5),
                  param[3],
                  Includeclass["report_error"],
                  param[4]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Unbound module type ",[15,0]],
                   "Unbound module type %a"],
                  Printtyp["path"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Unbound module ",[15,0]],"Unbound module %a"],
                  Printtyp["path"],
                  param[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Module ",[15,[11," cannot be aliased",0]]],
                   "Module %a cannot be aliased"],
                  Printtyp["path"],
                  param[1]);
         
        }}
    };

var
 context=
  function(ppf,param)
   {if(param)
     {var match=param[1];
      
      switch(match)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,"module ",[15,[15,[17,0,0]]]]],
                   "@[<2>module %a%a@]"],
                  Printtyp["ident"],
                  match[1],
                  args,
                  param[2]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "module type ",
                     [15,[11," =",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                   "@[<2>module type %a =@ %a@]"],
                  Printtyp["ident"],
                  match[1],
                  context_mty,
                  param[2]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"functor (",[15,[11," : ",[15,[11,") -> ...",0]]]]],
                   "functor (%a : %a) -> ..."],
                  Printtyp["ident"],
                  match[1],
                  context_mty,
                  param[2]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"functor (",[2,0,[11,") ->",[17,[0,"@ ",1,0],[15,0]]]]],
                   "functor (%s) ->@ %a"],
                  argname(match[1]),
                  context_mty,
                  param[2]);
         
        }
      }
    else
     {return Format["fprintf"](ppf,[0,[11,"<here>",0],"<here>"]);}
    };

var
 context_mty=
  function(ppf,rem)
   {var exit;
    
    if(rem)
     {var exit$1;
      
      switch(rem[1])
       {case 0:exit$1=19;case 1:exit$1=19;case 2:exit=18;case 3:exit=18;}
      
      switch(exit$1)
       {case 19:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "sig",
                     [17,
                      [0,"@ ",1,0],
                      [15,[17,[0,"@;<1 -2>",1,-2],[11,"end",[17,0,0]]]]]]],
                   "@[<2>sig@ %a@;<1 -2>end@]"],
                  context,
                  rem);
         
        }
      }
    else
     {exit=18;}
    
    switch(exit){case 18:return context(ppf,rem);}
    };

var
 args=
  function(ppf,cxt)
   {var exit;
    
    if(cxt)
     {var match=cxt[1];
      
      switch(match)
       {case 0:exit=20;
        case 1:exit=20;
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [12,
                    40,
                    [15,[11," :",[17,[0,"@ ",1,0],[15,[11,") : ...",0]]]]]],
                   "(%a :@ %a) : ..."],
                  Printtyp["ident"],
                  match[1],
                  context_mty,
                  cxt[2]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,[12,40,[2,0,[12,41,[15,0]]]],"(%s)%a"],
                  argname(match[1]),
                  args,
                  cxt[2]);
         
        }
      }
    else
     {exit=20;}
    
    switch(exit)
     {case 20:
       return Format["fprintf"]
               (ppf,
                [0,[11," :",[17,[0,"@ ",1,0],[15,0]]]," :@ %a"],
                context_mty,
                cxt);
       
      }
    };

var
 argname=
  function(x)
   {var s=Ident["name"](x);
    
    if("unknown primitive:caml_string_equal"){return "";}else{return s;}
    };

var
 path_of_context=
  function(param)
   {var exit;
    
    if(param)
     {var match=param[1];
      
      switch(match)
       {case 0:
         var
          subm=
           function(path,param$1)
            {if(param$1)
              {var match$1=param$1[1];
               
               switch(match$1)
                {case 0:
                  return subm
                          (/* Pdot */[1,path,Ident["name"](match$1[1]),-1],param$1[2]);
                  
                 default:
                  throw [0,Assert_failure,[0,"typing/includemod.ml",571,15]];}
               }
             else
              {return path;}
             };
         
         return subm(/* Pident */[0,match[1]],param[2]);
         
        default:exit=16;}
      }
    else
     {exit=16;}
    
    switch(exit)
     {case 16:throw [0,Assert_failure,[0,"typing/includemod.ml",573,9]];}
    };

var
 context$1=
  function(ppf,cxt)
   {if(cxt=0)
     {return 0;}
    else
     {if
       (List["for_all"]
         (function(param){switch(param){case 0:return 1;default:return 0;}},
          cxt))
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [11,"In module ",[15,[12,58,[17,[0,"@ ",1,0],0]]]],
                  "In module %a:@ "],
                 Printtyp["path"],
                 path_of_context(cxt));
        }
      else
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                   [11,
                    "At position",
                    [17,[0,"@ ",1,0],[15,[17,0,[17,[0,"@ ",1,0],0]]]]]],
                  "@[<hv 2>At position@ %a@]@ "],
                 context,
                 cxt);
        }
      }
    };

var
 include_err$1=
  function(ppf,param)
   {var err=param[3];
    
    var cxt=param[1];
    
    return Printtyp["wrap_printing_env"]
            (param[2],
             function(param$1)
              {return Format["fprintf"]
                       (ppf,
                        [0,
                         [18,[1,[0,[11,"<v>",0],"<v>"]],[15,[15,[17,0,0]]]],
                         "@[<v>%a%a@]"],
                        context$1,
                        List["rev"](cxt),
                        include_err,
                        err);
               });
    };

var buffer=[0,Bytes["empty"]];

var
 is_big=
  function(obj)
   {var size=Clflags["error_size"][1];
    
    if(buffer[1]["length"]<size)
     {buffer[1]="unknown primitive:caml_create_string",0}
    else
     {}
    
    try {var $js=0;}catch(exn){var $js=1;}
    return size>0&&$js;
    };

var
 report_error=
  function(ppf,errs)
   {if(errs=0)
     {return 0;}
    else
     {var match=Misc["split_last"](errs);
      
      var pe=[0,1];
      
      var
       include_err$prime=
        function(ppf$1,err)
         {if(!is_big(err[3]))
           {return Format["fprintf"]
                    (ppf$1,
                     [0,[15,[17,[0,"@ ",1,0],0]],"%a@ "],
                     include_err$1,
                     err);
            }
          else
           {if(pe[1])
             {Format["fprintf"]
               (ppf$1,[0,[11,"...",[17,[0,"@ ",1,0],0]],"...@ "]);
              return pe[1]=0,0;
              }
            else
             {return 0;}
            }
          };
      
      var
       print_errs=
        function(ppf$1){return List["iter"](include_err$prime(ppf$1));};
      
      return Format["fprintf"]
              (ppf,
               [0,
                [18,[1,[0,[11,"<v>",0],"<v>"]],[15,[15,[17,0,0]]]],
                "@[<v>%a%a@]"],
               print_errs,
               match[1],
               include_err$1,
               match[2]);
      }
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,
                Location["error_of_printer_file"](report_error,param[2])];
        }
      else
       {return 0;}
      });

module["exports"]=
{"modtypes":modtypes$1,
 "signatures":signatures$1,
 "compunit":compunit,
 "type_declarations":type_declarations$1,
 "print_coercion":print_coercion,
 "Error":$$Error,
 "report_error":report_error,
 "expand_module_alias":expand_module_alias};

