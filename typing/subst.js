// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Btype=require("Btype");
var Clflags=require("Clflags");
var Types=require("Types");
var Misc=require("Misc");
var Tbl=require("Tbl");
var Location=require("Location");
var Ast_mapper=require("Ast_mapper");
var Ident=require("Ident");


var identity=/* record */[0,Tbl["empty"],Tbl["empty"],Tbl["empty"],0];

var
 add_type=
  function(id,p,s)
   {return /* record */[0,Tbl["add"](id,p,s[1]),s[2],s[3],s[4]];};

var
 add_module=
  function(id,p,s)
   {return /* record */[0,s[1],Tbl["add"](id,p,s[2]),s[3],s[4]];};

var
 add_modtype=
  function(id,ty,s)
   {return /* record */[0,s[1],s[2],Tbl["add"](id,ty,s[3]),s[4]];};

var for_saving=function(s){return /* record */[0,s[1],s[2],s[3],1];};

var
 loc=
  function(s,x)
   {if(s[4]&&!Clflags["keep_locs"][1])
     {return Location["none"];}
    else
     {return x;}
    };

var newrecord="unknown primitive:duprecord regular 40";

newrecord[21]=function(_this,_loc){return Location["none"];},0;
var remove_loc=newrecord;

var
 is_not_doc=
  function(param)
   {var exit;
    
    switch(param[1][1])
     {case "doc":exit=59;
      case "ocaml.doc":exit=59;
      case "ocaml.text":exit=59;
      case "text":exit=59;
      default:exit=58;}
    
    switch(exit){case 59:return 0;case 58:return 1;}
    };

var
 attrs=
  function(s,x)
   {if(s[4]&&!Clflags["keep_docs"][1])
     {var x$1=List["filter"](is_not_doc,x);}
    else
     {var x$1=x;}
    
    if(s[4]&&!Clflags["keep_locs"][1])
     {return remove_loc[2](remove_loc,x$1);}
    else
     {return x$1;}
    };

var
 module_path=
  function(s,p)
   {switch(p)
     {case 0:
       try
        {return Tbl["find"](p[1],s[2]);}
       catch(exn){if(exn=Not_found){return p;}else{throw exn;}}
       
      case 1:return /* Pdot */[1,module_path(s,p[1]),p[2],p[3]];
      case 2:return /* Papply */[2,module_path(s,p[1]),module_path(s,p[2])];
      }
    };

var
 modtype_path=
  function(s,p)
   {switch(p)
     {case 0:
       try
        {var match=Tbl["find"](p[1],s[3]);
         
         switch(match)
          {case 0:return match[1];
           default:return Misc["fatal_error"]("Subst.modtype_path");}
         }
       catch(exn){if(exn=Not_found){return p;}else{throw exn;}}
       
      case 1:return /* Pdot */[1,module_path(s,p[1]),p[2],p[3]];
      case 2:return Misc["fatal_error"]("Subst.modtype_path");
      }
    };

var
 type_path=
  function(s,p)
   {switch(p)
     {case 0:
       try
        {return Tbl["find"](p[1],s[1]);}
       catch(exn){if(exn=Not_found){return p;}else{throw exn;}}
       
      case 1:return /* Pdot */[1,module_path(s,p[1]),p[2],p[3]];
      case 2:return Misc["fatal_error"]("Subst.type_path");
      }
    };

var new_id=[0,-1];

var reset_for_saving=function(param){return new_id[1]=-1,0;};

var
 newpersty=
  function(desc)
   {new_id[0]--;return /* record */[0,desc,Btype["generic_level"],new_id[1]];};

var tvar_none=[0,0];

var tunivar_none=[9,0];

var
 norm=
  function(d)
   {var exit;
    
    if(typeof d=="number")
     {switch(d){}}
    else
     {switch(d[0])
       {case 0:if(d[1]){exit=43;}else{return tvar_none;}
        case 9:if(d[1]){exit=43;}else{return tunivar_none;}
        default:exit=43;}}
    
    switch(exit){case 43:return d;}
    };

var
 typexp=
  function(s,ty)
   {var ty$1=Btype["repr"](ty);
    
    var desc=ty$1[1];
    
    var exit;
    
    if(typeof desc=="number")
     {switch(desc){}}
    else
     {switch(desc[0])
       {case 0:exit=40;case 7:return desc[1];case 9:exit=40;default:exit=41;}}
    
    switch(exit)
     {case 41:
       var desc$1=ty$1[1];
       
       Btype["save_desc"](ty$1,desc$1);
       if(s[4])
        {var ty$prime=newpersty([0,0]);}
       else
        {var ty$prime=Btype["newgenvar"](0,0);}
       
       ty$1[1]=/* Tsubst */[7,ty$prime],0;
       var exit$1;
       
       var $js;
       if(typeof desc$1=="number")
        {switch(desc$1){}}
       else
        {switch(desc$1[0])
          {case 3:
            $js=
            /* Tconstr */[3,
             type_path(s,desc$1[1]),
             List["map"](typexp(s),desc$1[2]),
             [0,0]];
            
           case 4:
            var match=desc$1[2][1];
            
            if(match)
             {var match$1=match[1];
              
              var
               $js$1=
                /* Some */[0,
                 /* tuple */[0,
                  type_path(s,match$1[1]),
                  List["map"](typexp(s),match$1[2])]];
              }
            else
             {var $js$1=0;}
            $js=/* Tobject */[4,typexp(s,desc$1[1]),[0,$js$1]];
            
           case 5:
            var t2=desc$1[4];
            
            var k=desc$1[2];
            
            var m=desc$1[1];
            
            if
             ((s=identity)&&
              ty$1[2]<
              Btype["generic_level"]&&
              "unknown primitive:caml_string_equal")
             {$js=/* Tfield */[5,m,k,desc$1[3],typexp(s,t2)];}
            else
             {if(Btype["field_kind_repr"](k)=1)
               {$js=/* Tlink */[6,typexp(s,t2)];}
              else
               {exit$1=37;}
              }
            
           case 8:
            var row=Btype["row_repr"](desc$1[1]);
            
            var more=Btype["repr"](row[2]);
            
            var match$2=more[1];
            
            var exit$2;
            
            if(typeof match$2=="number")
             {switch(match$2){}}
            else
             {switch(match$2[0])
               {case 7:
                 var match$3=match$2[1][1];
                 
                 if(typeof match$3=="number")
                  {switch(match$3){}}
                 else
                  {switch(match$3[0])
                    {case 2:
                      var match$4=match$3[1];
                      
                      if(match$4)
                       {var match$5=match$4[2];
                        
                        if(match$5)
                         {if(match$5[2])
                           {exit$2=34;}
                          else
                           {var ty2=match$5[1];
                            
                            ty$1[1]=/* Tsubst */[7,ty2],0;
                            $js=/* Tlink */[6,ty2];
                            }
                          }
                        else
                         {exit$2=34;}
                        }
                      else
                       {exit$2=34;}
                      
                     default:exit$2=34;}}
                 
                default:exit$2=34;}}
            
            switch(exit$2)
             {case 34:
               var match$6=more[1];
               
               var exit$3;
               
               var $js$2;
               if(typeof match$6=="number")
                {switch(match$6){}}
               else
                {switch(match$6[0]){case 3:$js$2=1;default:exit$3=32;}}
               
               var $js$3;
               switch(exit$3){case 32:$js$3=0;}
               var
                dup=
                 s[4]||
                 (more[2]=Btype["generic_level"])||
                 Btype["static_row"](row)||
                 $js$3;
               
               var match$7=more[1];
               
               var exit$4;
               
               if(typeof match$7=="number")
                {switch(match$7){case 0:exit$4=28;}}
               else
                {switch(match$7[0])
                  {case 0:exit$4=29;
                   case 3:exit$4=28;
                   case 7:var more$prime=match$7[1];
                   case 9:exit$4=29;
                   default:
                    throw [0,Assert_failure,[0,"typing/subst.ml",170,23]];}}
               
               switch(exit$4)
                {case 28:var more$prime=typexp(s,more);
                 case 29:
                  Btype["save_desc"](more,more[1]);
                  if(s[4])
                   {var more$prime=newpersty(norm(more[1]));}
                  else
                   {if(dup&&Btype["is_Tvar"](more))
                     {var more$prime=Btype["newgenty"](more[1]);}
                    else
                     {var more$prime=more;}
                    }
                  
                 }
               
               more[1]=
               /* Tsubst */[7,
                Btype["newgenty"]
                 (/* Ttuple */[2,
                   /* :: */[0,more$prime,/* :: */[0,ty$prime,0]]])],
               0;
               var row$1=Btype["copy_row"](typexp(s),1,row,!dup,more$prime);
               
               var match$8=row$1[6];
               
               if(match$8)
                {var match$9=match$8[1];
                 
                 var newrecord$1="unknown primitive:duprecord regular 6";
                 
                 $js=
                 /* Tvariant */[8,
                  (newrecord$1[6]=
                   /* Some */[0,
                    /* tuple */[0,type_path(s,match$9[1]),match$9[2]]],
                   0,
                   newrecord$1)];
                 }
               else
                {$js=/* Tvariant */[8,row$1];}
               
              }
            
           case 11:
            $js=
            /* Tpackage */[11,
             modtype_path(s,desc$1[1]),
             desc$1[2],
             List["map"](typexp(s),desc$1[3])];
            
           default:exit$1=37;}}
       
       var $js$4;
       switch(exit$1)
        {case 37:$js$4=Btype["copy_type_desc"](0,typexp(s),desc$1);}
       ty$prime[1]=$js$4,0;
       return ty$prime;
       
      case 40:
       if(s[4]||ty$1[3]<0)
        {if(s[4])
          {var ty$prime$1=newpersty(norm(desc));}
         else
          {var ty$prime$1=Btype["newty2"](ty$1[2],desc);}
         
         Btype["save_desc"](ty$1,desc);
         ty$1[1]=/* Tsubst */[7,ty$prime$1],0;
         return ty$prime$1;
         }
       else
        {return ty$1;}
       
      }
    };

var
 type_expr=
  function(s,ty)
   {var ty$prime=typexp(s,ty);Btype["cleanup_types"](0);return ty$prime;};

var
 type_declaration=
  function(s,decl)
   {var match=decl[3];
    
    var $js;
    if(typeof match=="number")
     {switch(match){case 0:$js=0;case 1:$js=1;}}
    else
     {switch(match[0])
       {case 0:
         $js=
         /* Type_record */[0,
          List["map"]
           (function(l)
             {return /* record */[0,
                      l[1],
                      l[2],
                      typexp(s,l[3]),
                      loc(s,l[4]),
                      attrs(s,l[5])];
              },
            match[1]),
          match[2]];
         
        case 1:
         $js=
         /* Type_variant */[1,
          List["map"]
           (function(c)
             {return /* record */[0,
                      c[1],
                      List["map"](typexp(s),c[2]),
                      Misc["may_map"](typexp(s),c[3]),
                      loc(s,c[4]),
                      attrs(s,c[5])];
              },
            match[1])];
         
        }}
    var match$1=decl[5];
    
    var
     decl$1=
      /* record */[0,
       List["map"](typexp(s),decl[1]),
       decl[2],
       $js,
       decl[4],
       match$1?/* Some */[0,typexp(s,match$1[1])]:0,
       decl[6],
       0,
       loc(s,decl[8]),
       attrs(s,decl[9])];
    
    Btype["cleanup_types"](0);
    return decl$1;
    };

var
 class_signature=
  function(s,sign)
   {return /* record */[0,
            typexp(s,sign[1]),
            Types["Vars"][23]
             (function(param)
               {return /* tuple */[0,param[1],param[2],typexp(s,param[3])];},
              sign[2]),
            sign[3],
            List["map"]
             (function(param)
               {return /* tuple */[0,
                        type_path(s,param[1]),
                        List["map"](typexp(s),param[2])];
                },
              sign[4])];
    };

var
 class_type=
  function(s,param)
   {switch(param)
     {case 0:
       return /* Cty_constr */[0,
               type_path(s,param[1]),
               List["map"](typexp(s),param[2]),
               class_type(s,param[3])];
       
      case 1:return /* Cty_signature */[1,class_signature(s,param[1])];
      case 2:
       return /* Cty_arrow */[2,
               param[1],
               typexp(s,param[2]),
               class_type(s,param[3])];
       
      }
    };

var
 class_declaration=
  function(s,decl)
   {var match=decl[4];
    
    var
     decl$1=
      /* record */[0,
       List["map"](typexp(s),decl[1]),
       class_type(s,decl[2]),
       type_path(s,decl[3]),
       match?/* Some */[0,typexp(s,match[1])]:0,
       decl[5],
       loc(s,decl[6]),
       attrs(s,decl[7])];
    
    if(!s[4]){Btype["cleanup_types"](0)}else{}
    
    return decl$1;
    };

var
 cltype_declaration=
  function(s,decl)
   {var
     decl$1=
      /* record */[0,
       List["map"](typexp(s),decl[1]),
       class_type(s,decl[2]),
       type_path(s,decl[3]),
       decl[4],
       loc(s,decl[5]),
       attrs(s,decl[6])];
    
    Btype["cleanup_types"](0);
    return decl$1;
    };

var
 class_type$1=
  function(s,cty)
   {var cty$1=class_type(s,cty);Btype["cleanup_types"](0);return cty$1;};

var
 value_description=
  function(s,descr)
   {return /* record */[0,
            type_expr(s,descr[1]),
            descr[2],
            loc(s,descr[3]),
            attrs(s,descr[4])];
    };

var
 extension_constructor=
  function(s,ext)
   {var
     ext$1=
      /* record */[0,
       type_path(s,ext[1]),
       List["map"](typexp(s),ext[2]),
       List["map"](typexp(s),ext[3]),
       Misc["may_map"](typexp(s),ext[4]),
       ext[5],
       s[4]?Location["none"]:ext[6],
       attrs(s,ext[7])];
    
    Btype["cleanup_types"](0);
    return ext$1;
    };

var
 rename_bound_idents=
  function(s,idents,param)
   {if(param)
     {var match=param[1];
      
      switch(match)
       {case 1:
         var id=match[1];
         
         var id$prime=Ident["rename"](id);
         
         return rename_bound_idents
                 (add_type(id,/* Pident */[0,id$prime],s),
                  /* :: */[0,id$prime,idents],
                  param[2]);
         
        case 3:
         var id$1=match[1];
         
         var id$prime$1=Ident["rename"](id$1);
         
         return rename_bound_idents
                 (add_module(id$1,/* Pident */[0,id$prime$1],s),
                  /* :: */[0,id$prime$1,idents],
                  param[2]);
         
        case 4:
         var id$2=match[1];
         
         var id$prime$2=Ident["rename"](id$2);
         
         return rename_bound_idents
                 (add_modtype
                   (id$2,/* Mty_ident */[0,/* Pident */[0,id$prime$2]],s),
                  /* :: */[0,id$prime$2,idents],
                  param[2]);
         
        default:
         var id$prime$3=Ident["rename"](match[1]);
         
         return rename_bound_idents(s,/* :: */[0,id$prime$3,idents],param[2]);
         }
      }
    else
     {return /* tuple */[0,List["rev"](idents),s];}
    };

var
 modtype=
  function(s,mty)
   {switch(mty)
     {case 0:
       var p=mty[1];
       
       switch(p)
        {case 0:
          try
           {return Tbl["find"](p[1],s[3]);}
          catch(exn){if(exn=Not_found){return mty;}else{throw exn;}}
          
         case 1:
          return /* Mty_ident */[0,
                  /* Pdot */[1,module_path(s,p[1]),p[2],p[3]]];
          
         case 2:return Misc["fatal_error"]("Subst.modtype");
         }
       
      case 1:return /* Mty_signature */[1,signature(s,mty[1])];
      case 2:
       var id=mty[1];
       
       var id$prime=Ident["rename"](id);
       
       return /* Mty_functor */[2,
               id$prime,
               Misc["may_map"](modtype(s),mty[2]),
               modtype(add_module(id,/* Pident */[0,id$prime],s),mty[3])];
       
      case 3:return /* Mty_alias */[3,module_path(s,mty[1])];
      }
    };

var
 signature=
  function(s,sg)
   {var match=rename_bound_idents(s,0,sg);
    
    return List["map2"](signature_component(match[2]),sg,match[1]);
    };

var
 signature_component=
  function(s,comp,newid)
   {switch(comp)
     {case 0:return /* Sig_value */[0,newid,value_description(s,comp[2])];
      case 1:
       return /* Sig_type */[1,newid,type_declaration(s,comp[2]),comp[3]];
      case 2:
       return /* Sig_typext */[2,
               newid,
               extension_constructor(s,comp[2]),
               comp[3]];
       
      case 3:
       return /* Sig_module */[3,newid,module_declaration(s,comp[2]),comp[3]];
      case 4:return /* Sig_modtype */[4,newid,modtype_declaration(s,comp[2])];
      case 5:
       return /* Sig_class */[5,newid,class_declaration(s,comp[2]),comp[3]];
      case 6:
       return /* Sig_class_type */[6,
               newid,
               cltype_declaration(s,comp[2]),
               comp[3]];
       
      }
    };

var
 module_declaration=
  function(s,decl)
   {return /* record */[0,modtype(s,decl[1]),attrs(s,decl[2]),loc(s,decl[3])];
    };

var
 modtype_declaration=
  function(s,decl)
   {return /* record */[0,
            Misc["may_map"](modtype(s),decl[1]),
            attrs(s,decl[2]),
            loc(s,decl[3])];
    };

var
 merge_tbls=
  function(f,m1,m2)
   {return Tbl["fold"]
            (function(k,d,accu){return Tbl["add"](k,f(d),accu);},m1,m2);
    };

var
 compose=
  function(s1,s2)
   {return /* record */[0,
            merge_tbls(type_path(s2),s1[1],s2[1]),
            merge_tbls(module_path(s2),s1[2],s2[2]),
            merge_tbls(modtype(s2),s1[3],s2[3]),
            0];
    };

module["exports"]=
{"identity":identity,
 "add_type":add_type,
 "add_module":add_module,
 "add_modtype":add_modtype,
 "for_saving":for_saving,
 "reset_for_saving":reset_for_saving,
 "module_path":module_path,
 "type_path":type_path,
 "type_expr":type_expr,
 "class_type":class_type$1,
 "value_description":value_description,
 "type_declaration":type_declaration,
 "extension_constructor":extension_constructor,
 "class_declaration":class_declaration,
 "cltype_declaration":cltype_declaration,
 "modtype":modtype,
 "signature":signature,
 "modtype_declaration":modtype_declaration,
 "module_declaration":module_declaration,
 "typexp":typexp,
 "class_signature":class_signature,
 "compose":compose};

