// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var Btype=require("Btype");
var List=require("List");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Clflags=require("Clflags");
var Set=require("Set");
var Misc=require("Misc");
var Path=require("Path");
var Subst=require("Subst");
var Location=require("Location");
var Ident=require("Ident");
var Map=require("Map");


var
 scrape=
  function(env,mty)
   {switch(mty)
     {case 0:
       try
        {return scrape(env,Env["find_modtype_expansion"](mty[1],env));}
       catch(exn){if(exn=Not_found){return mty;}else{throw exn;}}
       
      default:return mty;}
    };

var freshen=function(mty){return Subst["modtype"](Subst["identity"],mty);};

var
 strengthen=
  function(env,mty,p)
   {var mty$1=scrape(env,mty);
    
    var exit;
    
    switch(mty$1)
     {case 0:exit=54;
      case 1:return /* Mty_signature */[1,strengthen_sig(env,mty$1[1],p)];
      case 2:
       var param=mty$1[1];
       
       if
        (Clflags["applicative_functors"][1]&&
         "unknown primitive:caml_string_notequal")
        {return /* Mty_functor */[2,
                 param,
                 mty$1[2],
                 strengthen
                  (env,mty$1[3],/* Papply */[2,p,/* Pident */[0,param]])];
         }
       else
        {exit=54;}
       
      case 3:exit=54;
      }
    
    switch(exit){case 54:return mty$1;}
    };

var
 strengthen_sig=
  function(env,sg,p)
   {if(sg)
     {var sigelt=sg[1];
      
      switch(sigelt)
       {case 1:
         var decl=sigelt[2];
         
         var id=sigelt[1];
         
         var match=decl[5];
         
         var match$1=decl[4];
         
         var match$2=decl[3];
         
         var exit;
         
         if(match)
          {if(match$1!=0)
            {var newdecl=decl;}
           else
            {if("unknown primitive:isint"){exit=56;}else{var newdecl=decl;}}
           }
         else
          {exit=56;}
         
         switch(exit)
          {case 56:
            var
             manif=
              /* Some */[0,
               Btype["newgenty"]
                (/* Tconstr */[3,
                  /* Pdot */[1,p,Ident["name"](id),Path["nopos"]],
                  decl[1],
                  [0,0]])];
            
            if(decl[3]=0)
             {var newrecord="unknown primitive:duprecord regular 9";
              
              newrecord[4]=1,0;
              newrecord[5]=manif,0;
              var newdecl=newrecord;
              }
            else
             {var newrecord$1="unknown primitive:duprecord regular 9";
              
              newrecord$1[5]=manif,0;
              var newdecl=newrecord$1;
              }
            
           }
         
         return /* :: */[0,
                 /* Sig_type */[1,id,newdecl,sigelt[3]],
                 strengthen_sig(env,sg[2],p)];
         
        case 3:
         var md=sigelt[2];
         
         var id$1=sigelt[1];
         
         var
          str=
           strengthen_decl
            (env,md,/* Pdot */[1,p,Ident["name"](id$1),Path["nopos"]]);
         
         return /* :: */[0,
                 /* Sig_module */[3,id$1,str,sigelt[3]],
                 strengthen_sig
                  (Env["add_module_declaration"](0,id$1,md,env),sg[2],p)];
         
        case 4:
         var decl$1=sigelt[2];
         
         var id$2=sigelt[1];
         
         var match$3=decl$1[1];
         
         if(match$3)
          {var newdecl$1=decl$1;}
         else
          {var
            newdecl$1=
             /* record */[0,
              /* Some */[0,
               /* Mty_ident */[0,
                /* Pdot */[1,p,Ident["name"](id$2),Path["nopos"]]]],
              decl$1[2],
              decl$1[3]];
           }
         
         return /* :: */[0,
                 /* Sig_modtype */[4,id$2,newdecl$1],
                 strengthen_sig(Env["add_modtype"](id$2,decl$1,env),sg[2],p)];
         
        default:return /* :: */[0,sigelt,strengthen_sig(env,sg[2],p)];}
      }
    else
     {return 0;}
    };

var
 strengthen_decl=
  function(env,md,p)
   {return /* record */[0,strengthen(env,md[1],p),md[2],md[3]];};

var match=(Env["strengthen"][1]=strengthen,0);

var
 nondep_supertype=
  function(env,mid,mty)
   {var
     nondep_mty=
      function(env$1,va,mty$1)
       {switch(mty$1)
         {case 0:
           var p=mty$1[1];
           
           if(Path["isfree"](mid,p))
            {return nondep_mty
                     (env$1,va,Env["find_modtype_expansion"](p,env$1));
             }
           else
            {return mty$1;}
           
          case 1:return /* Mty_signature */[1,nondep_sig(env$1,va,mty$1[1])];
          case 2:
           var arg=mty$1[2];
           
           var param=mty$1[1];
           
           switch(va[0])
            {case 0:var var_inv=1;case 1:var var_inv=0;case 2:var var_inv=2;}
           
           return /* Mty_functor */[2,
                   param,
                   Misc["may_map"](nondep_mty(env$1,var_inv),arg),
                   nondep_mty
                    (Env["add_module"]
                      ([0,1],param,Btype["default_mty"](arg),env$1),
                     va,
                     mty$1[3])];
           
          case 3:
           var p$1=mty$1[1];
           
           if(Path["isfree"](mid,p$1))
            {return nondep_mty(env$1,va,Env["find_module"](p$1,env$1)[1]);}
           else
            {return mty$1;}
           
          }
        };
    
    var
     nondep_sig=
      function(env$1,va,param)
       {if(param)
         {var item=param[1];
          
          var rem$prime=nondep_sig(env$1,va,param[2]);
          
          switch(item)
           {case 0:
             var d=item[2];
             
             return /* :: */[0,
                     /* Sig_value */[0,
                      item[1],
                      /* record */[0,
                       Ctype["nondep_type"](env$1,mid,d[1]),
                       d[2],
                       d[3],
                       d[4]]],
                     rem$prime];
             
            case 1:
             var id=item[1];
             
             return /* :: */[0,
                     /* Sig_type */[1,
                      id,
                      Ctype["nondep_type_decl"](env$1,mid,id,va=0,item[2]),
                      item[3]],
                     rem$prime];
             
            case 2:
             return /* :: */[0,
                     /* Sig_typext */[2,
                      item[1],
                      Ctype["nondep_extension_constructor"](env$1,mid,item[2]),
                      item[3]],
                     rem$prime];
             
            case 3:
             var md=item[2];
             
             return /* :: */[0,
                     /* Sig_module */[3,
                      item[1],
                      /* record */[0,nondep_mty(env$1,va,md[1]),md[2],md[3]],
                      item[3]],
                     rem$prime];
             
            case 4:
             var id$1=item[1];
             
             try
              {return /* :: */[0,
                       /* Sig_modtype */[4,id$1,nondep_modtype_decl(env$1,item[2])],
                       rem$prime];
               }
             catch(exn)
              {if(exn=Not_found)
                {if(va!=0)
                  {throw Not_found;}
                 else
                  {return /* :: */[0,
                           /* Sig_modtype */[4,
                            id$1,
                            /* record */[0,0,0,Location["none"]]],
                           rem$prime];
                   }
                 }
               else
                {throw exn;}
               }
             
            case 5:
             return /* :: */[0,
                     /* Sig_class */[5,
                      item[1],
                      Ctype["nondep_class_declaration"](env$1,mid,item[2]),
                      item[3]],
                     rem$prime];
             
            case 6:
             return /* :: */[0,
                     /* Sig_class_type */[6,
                      item[1],
                      Ctype["nondep_cltype_declaration"](env$1,mid,item[2]),
                      item[3]],
                     rem$prime];
             
            }
          }
        else
         {return 0;}
        };
    
    var
     nondep_modtype_decl=
      function(env$1,mtd)
       {return /* record */[0,
                Misc["may_map"](nondep_mty(env$1,2),mtd[1]),
                mtd[2],
                mtd[3]];
        };
    
    return nondep_mty(env,0,mty);
    };

var
 enrich_typedecl=
  function(env,p,decl)
   {var match$1=decl[5];
    
    if(match$1)
     {return decl;}
    else
     {try
       {var orig_decl=Env["find_type"](p,env);
        
        if(orig_decl[2]!=decl[2])
         {return decl;}
        else
         {var newrecord="unknown primitive:duprecord regular 9";
          
          newrecord[5]=
          /* Some */[0,Btype["newgenty"](/* Tconstr */[3,p,decl[1],[0,0]])],
          0;
          return newrecord;
          }
        }
      catch(exn){if(exn=Not_found){return decl;}else{throw exn;}}
      }
    };

var
 enrich_modtype=
  function(env,p,mty)
   {switch(mty)
     {case 1:
       return /* Mty_signature */[1,List["map"](enrich_item(env,p),mty[1])];
      default:return mty;}
    };

var
 enrich_item=
  function(env,p,item)
   {switch(item)
     {case 1:
       var id=item[1];
       
       return /* Sig_type */[1,
               id,
               enrich_typedecl
                (env,/* Pdot */[1,p,Ident["name"](id),Path["nopos"]],item[2]),
               item[3]];
       
      case 3:
       var md=item[2];
       
       var id$1=item[1];
       
       return /* Sig_module */[3,
               id$1,
               /* record */[0,
                enrich_modtype
                 (env,/* Pdot */[1,p,Ident["name"](id$1),Path["nopos"]],md[1]),
                md[2],
                md[3]],
               item[3]];
       
      default:return item;}
    };

var
 type_paths=
  function(env,p,mty)
   {var match$1=scrape(env,mty);
    
    switch(match$1)
     {case 1:return type_paths_sig(env,p,0,match$1[1]);default:return 0;}
    };

var
 type_paths_sig=
  function(env,p,pos,sg)
   {if(sg)
     {var match$1=sg[1];
      
      var exit;
      
      switch(match$1)
       {case 0:
         var match$2=match$1[2][2];
         
         var exit$1;
         
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0]){case 0:var pos$prime=pos;default:exit$1=40;}}
         
         switch(exit$1){case 40:var pos$prime=pos+1;}
         
         return type_paths_sig(env,p,pos$prime,sg[2]);
         
        case 1:
         return /* :: */[0,
                 /* Pdot */[1,p,Ident["name"](match$1[1]),Path["nopos"]],
                 type_paths_sig(env,p,pos,sg[2])];
         
        case 2:exit=42;
        case 3:
         var md=match$1[2];
         
         var id=match$1[1];
         
         return Pervasives["@"]
                 (type_paths(env,/* Pdot */[1,p,Ident["name"](id),pos],md[1]),
                  type_paths_sig
                   (Env["add_module_declaration"](0,id,md,env),p,pos+1,sg[2]));
         
        case 4:
         return type_paths_sig
                 (Env["add_modtype"](match$1[1],match$1[2],env),p,pos,sg[2]);
         
        case 5:exit=42;
        case 6:return type_paths_sig(env,p,pos,sg[2]);
        }
      
      switch(exit){case 42:return type_paths_sig(env,p,pos+1,sg[2]);}
      }
    else
     {return 0;}
    };

var
 no_code_needed=
  function(env,mty)
   {var match$1=scrape(env,mty);
    
    var exit;
    
    switch(match$1)
     {case 0:exit=35;
      case 1:return no_code_needed_sig(env,match$1[1]);
      case 2:exit=35;
      case 3:return 1;
      }
    
    switch(exit){case 35:return 0;}
    };

var
 no_code_needed_sig=
  function(env,sg)
   {if(sg)
     {var match$1=sg[1];
      
      var exit;
      
      switch(match$1)
       {case 0:
         var match$2=match$1[2][2];
         
         var exit$1;
         
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 0:return no_code_needed_sig(env,sg[2]);default:exit$1=36;}}
         
         switch(exit$1){case 36:return 0;}
         
        case 2:exit=38;
        case 3:
         var md=match$1[2];
         
         return no_code_needed(env,md[1])&&
                no_code_needed_sig
                 (Env["add_module_declaration"](0,match$1[1],md,env),sg[2]);
         
        case 5:exit=38;
        default:return no_code_needed_sig(env,sg[2]);}
      
      switch(exit){case 38:return 0;}
      }
    else
     {return 1;}
    };

var
 contains_type=
  function(env,param)
   {switch(param)
     {case 0:
       try
        {var match$1=Env["find_modtype"](param[1],env)[1];
         
         if(match$1)
          {return contains_type(env,match$1[1]);}
         else
          {throw Pervasives["Exit"];}
         }
       catch(exn)
        {if(exn=Not_found){throw Pervasives["Exit"];}else{throw exn;}}
       
      case 1:return contains_type_sig(env,param[1]);
      case 2:return contains_type(env,param[3]);
      case 3:return 0;
      }
    };

var
 contains_type_sig=
  function(env){return List["iter"](contains_type_item(env));};

var
 contains_type_item=
  function(env,param)
   {var exit;
    
    switch(param)
     {case 1:
       var match$1=param[2];
       
       var exit$1;
       
       var match$2=match$1[3];
       
       var exit$2;
       
       if(match$1[5])
        {if("unknown primitive:isint")
          {if(match$2!=0)
            {exit$2=33;}
           else
            {if(match$1[4]!=0){exit$2=33;}else{exit$1=32;}}
           }
         else
          {exit$2=33;}
         }
       else
        {exit$1=32;}
       
       switch(exit$2){case 33:exit=31;}
       
       switch(exit$1){case 32:exit=30;}
       
      case 3:return contains_type(env,param[2][1]);
      case 4:exit=30;
      default:exit=31;}
    
    switch(exit){case 30:throw Pervasives["Exit"];case 31:return 0;}
    };

var
 contains_type$1=
  function(env,mty)
   {try
     {contains_type(env,mty);return 0;}
    catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
    };

var
 compare=
  function(p1,p2)
   {if(Path["same"](p1,p2))
     {return 0;}
    else
     {return "unknown primitive:caml_compare";}
    };

var P=[0,compare];

var PathSet=Set["Make"](P);

var PathMap=Map["Make"](P);

var compare$1=function(prim,prim$1){return "unknown primitive:caml_compare";};

var IdentSet=Set["Make"]([0,compare$1]);

var
 get_prefixes=
  function(param)
   {var exit;
    
    switch(param){case 0:return PathSet[1];case 1:exit=24;case 2:exit=24;}
    
    switch(exit){case 24:var p=param[1];return PathSet[4](p,get_prefixes(p));}
    };

var
 get_arg_paths=
  function(param)
   {switch(param)
     {case 0:return PathSet[1];
      case 1:return get_arg_paths(param[1]);
      case 2:
       var p2=param[2];
       
       return PathSet[4]
               (p2,
                PathSet[7]
                 (get_prefixes(p2),
                  PathSet[7](get_arg_paths(param[1]),get_arg_paths(p2))));
       
      }
    };

var
 rollback_path=
  function(subst,p)
   {try
     {return /* Pident */[0,PathMap[22](p,subst)];}
    catch(exn)
     {if(exn=Not_found)
       {var exit;
        
        switch(p)
         {case 0:exit=21;
          case 1:
           var p1=p[1];
           
           var p1$prime=rollback_path(subst,p1);
           
           if(Path["same"](p1,p1$prime))
            {return p;}
           else
            {return rollback_path(subst,/* Pdot */[1,p1$prime,p[2],p[3]]);}
           
          case 2:exit=21;
          }
        
        switch(exit){case 21:return p;}
        }
      else
       {throw exn;}
      }
    };

var
 collect_ids=
  function(subst,bindings,p)
   {var match$1=rollback_path(subst,p);
    
    var exit;
    
    switch(match$1)
     {case 0:
       var id=match$1[1];
       
       try
        {var ids=collect_ids(subst,bindings,Ident["find_same"](id,bindings));}
       catch(exn){if(exn=Not_found){var ids=IdentSet[1];}else{throw exn;}}
       
       return IdentSet[4](id,ids);
       
      case 1:exit=19;
      case 2:exit=19;
      }
    
    switch(exit){case 19:return IdentSet[1];}
    };

var
 collect_arg_paths=
  function(mty)
   {var paths=[0,PathSet[1]];
    
    var subst=[0,PathMap[1]];
    
    var bindings=[0,Ident["empty"]];
    
    var
     it_path=
      function(p){return paths[1]=PathSet[7](get_arg_paths(p),paths[1]),0;};
    
    var
     it_signature_item=
      function(it,si)
       {Btype["type_iterators"][2](it,si);
        var exit;
        
        switch(si)
         {case 3:
           var match$1=si[2][1];
           
           var id=si[1];
           
           switch(match$1)
            {case 0:exit=10;
             case 1:
              return List["iter"]
                      (function(param)
                        {switch(param)
                          {case 3:
                            var id$prime=param[1];
                            
                            return subst[1]=
                                   PathMap[4]
                                    (/* Pdot */[1,/* Pident */[0,id],Ident["name"](id$prime),-1],
                                     id$prime,
                                     subst[1]),
                                   0;
                            
                           default:return 0;}
                         },
                       match$1[1]);
              
             case 2:exit=10;
             case 3:
              return bindings[1]=Ident["add"](id,match$1[1],bindings[1]),0;
             }
           
          default:exit=10;}
        
        switch(exit){case 10:return 0;}
        };
    
    var newrecord="unknown primitive:duprecord regular 15";
    
    newrecord[2]=it_signature_item,0;
    newrecord[15]=it_path,0;
    var it=newrecord;
    
    it[10](it,mty);
    it[10](Btype["unmark_iterators"],mty);
    return PathSet[14]
            (function(p)
              {return IdentSet[7](collect_ids(subst[1],bindings[1],p));},
             paths[1],
             IdentSet[1]);
    };

var
 remove_aliases=
  function(env,excl,mty)
   {var exit;
    
    switch(mty)
     {case 0:exit=4;
      case 1:
       return /* Mty_signature */[1,remove_aliases_sig(env,excl,mty[1])];
      case 2:exit=4;
      case 3:
       var mty$prime=Env["scrape_alias"](env,mty);
       
       if("unknown primitive:caml_equal")
        {return mty;}
       else
        {return remove_aliases(env,excl,mty$prime);}
       
      }
    
    switch(exit){case 4:return mty;}
    };

var
 remove_aliases_sig=
  function(env,excl,sg)
   {if(sg)
     {var it=sg[1];
      
      switch(it)
       {case 3:
         var md=it[2];
         
         var id=it[1];
         
         var mty=md[1];
         
         var exit;
         
         switch(mty)
          {case 3:if(IdentSet[3](id,excl)){var mty$1=md[1];}else{exit=5;}
           default:exit=5;}
         
         switch(exit){case 5:var mty$1=remove_aliases(env,excl,mty);}
         
         return /* :: */[0,
                 /* Sig_module */[3,
                  id,
                  /* record */[0,mty$1,md[2],md[3]],
                  it[3]],
                 remove_aliases_sig
                  (Env["add_module"](0,id,mty$1,env),excl,sg[2])];
         
        case 4:
         var mtd=it[2];
         
         var id$1=it[1];
         
         return /* :: */[0,
                 /* Sig_modtype */[4,id$1,mtd],
                 remove_aliases_sig
                  (Env["add_modtype"](id$1,mtd,env),excl,sg[2])];
         
        default:return /* :: */[0,it,remove_aliases_sig(env,excl,sg[2])];}
      }
    else
     {return 0;}
    };

var
 remove_aliases$1=
  function(env,sg)
   {var excl=collect_arg_paths(sg);return remove_aliases(env,excl,sg);};

module["exports"]=
{"scrape":scrape,
 "freshen":freshen,
 "strengthen":strengthen,
 "strengthen_decl":strengthen_decl,
 "nondep_supertype":nondep_supertype,
 "no_code_needed":no_code_needed,
 "no_code_needed_sig":no_code_needed_sig,
 "enrich_modtype":enrich_modtype,
 "enrich_typedecl":enrich_typedecl,
 "type_paths":type_paths,
 "contains_type":contains_type$1,
 "remove_aliases":remove_aliases$1};

