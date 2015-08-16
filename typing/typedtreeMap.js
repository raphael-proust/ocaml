// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Misc=require("./misc.js");


var
 MakeMap=
  function(Map)
   {var
     may_map=
      function(f,v){if(v){return /* Some */[0,f(v[1])];}else{return v;}};
    
    var
     map_structure=
      function(str)
       {var str$1=Map[1](str);
        
        var str_items=List["map"](map_structure_item,str$1[1]);
        
        return Map[26](/* record */[0,str_items,str$1[2],str$1[3]]);
        };
    
    var
     map_binding=
      function(vb)
       {return /* record */[0,
                map_pattern(vb[1]),
                map_expression(vb[2]),
                vb[3],
                vb[4]];
        };
    
    var
     map_bindings=
      function(rec_flag,list){return List["map"](map_binding,list);};
    
    var
     map_case=
      function(param)
       {return /* record */[0,
                map_pattern(param[1]),
                Misc["may_map"](map_expression,param[2]),
                map_expression(param[3])];
        };
    
    var map_cases=function(list){return List["map"](map_case,list);};
    
    var
     map_structure_item=
      function(item)
       {var item$1=Map[25](item);
        
        var match=item$1[1];
        
        switch(match[0])
         {case 0:
           var str_desc=/* Tstr_eval */[0,map_expression(match[1]),match[2]];
          case 1:
           var rec_flag=match[1];
           
           var
            str_desc=
             /* Tstr_value */[1,rec_flag,map_bindings(rec_flag,match[2])];
           
          case 2:
           var
            str_desc=
             /* Tstr_primitive */[2,map_value_description(match[1])];
           
          case 3:
           var
            str_desc=
             /* Tstr_type */[3,List["map"](map_type_declaration,match[1])];
           
          case 4:
           var str_desc=/* Tstr_typext */[4,map_type_extension(match[1])];
          case 5:
           var
            str_desc=
             /* Tstr_exception */[5,map_extension_constructor(match[1])];
           
          case 6:
           var str_desc=/* Tstr_module */[6,map_module_binding(match[1])];
          case 7:
           var list=List["map"](map_module_binding,match[1]);
           
           var str_desc=/* Tstr_recmodule */[7,list];
           
          case 8:
           var
            str_desc=
             /* Tstr_modtype */[8,map_module_type_declaration(match[1])];
           
          case 9:var str_desc=/* Tstr_open */[9,match[1]];
          case 10:
           var
            list$1=
             List["map"]
              (function(param)
                {return /* tuple */[0,
                         map_class_declaration(param[1]),
                         param[2],
                         param[3]];
                 },
               match[1]);
           
           var str_desc=/* Tstr_class */[10,list$1];
           
          case 11:
           var
            list$2=
             List["map"]
              (function(param)
                {return /* tuple */[0,
                         param[1],
                         param[2],
                         map_class_type_declaration(param[3])];
                 },
               match[1]);
           
           var str_desc=/* Tstr_class_type */[11,list$2];
           
          case 12:
           var incl=match[1];
           
           var
            str_desc=
             /* Tstr_include */[12,
              /* record */[0,map_module_expr(incl[1]),incl[2],incl[3],incl[4]]];
           
          case 13:var str_desc=/* Tstr_attribute */[13,match[1]];
          }
        
        return Map[50](/* record */[0,str_desc,item$1[2],item$1[3]]);
        };
    
    var
     map_module_binding=
      function(x)
       {return /* record */[0,x[1],x[2],map_module_expr(x[3]),x[4],x[5]];};
    
    var
     map_value_description=
      function(v)
       {var v$1=Map[2](v);
        
        var val_desc=map_core_type(v$1[3]);
        
        var newrecord=/* unknown */"duprecord regular 7";
        
        return Map[27]((newrecord[3]=val_desc,newrecord));
        };
    
    var
     map_type_declaration=
      function(decl)
       {var decl$1=Map[3](decl);
        
        var typ_params=List["map"](map_type_parameter,decl$1[3]);
        
        var
         typ_cstrs=
          List["map"]
           (function(param)
             {return /* tuple */[0,
                      map_core_type(param[1]),
                      map_core_type(param[2]),
                      param[3]];
              },
            decl$1[5]);
        
        var match=decl$1[6];
        
        if(typeof match==="number")
         {switch(match)
           {case 0:var typ_kind=/* Ttype_abstract */0;
            case 1:var typ_kind=/* Ttype_open */1;
            }}
        else
         {switch(match[0])
           {case 0:
             var list=List["map"](map_constructor_declaration,match[1]);
             
             var typ_kind=/* Ttype_variant */[0,list];
             
            case 1:
             var
              list$1=
               List["map"]
                (function(ld)
                  {var newrecord=/* unknown */"duprecord regular 6";
                   
                   newrecord[4]=map_core_type(ld[4]);
                   return newrecord;
                   },
                 match[1]);
             
             var typ_kind=/* Ttype_record */[1,list$1];
             
            }}
        
        var typ_manifest=Misc["may_map"](map_core_type,decl$1[8]);
        
        return Map[28]
                (/* record */[0,
                  decl$1[1],
                  decl$1[2],
                  typ_params,
                  decl$1[4],
                  typ_cstrs,
                  typ_kind,
                  decl$1[7],
                  typ_manifest,
                  decl$1[9],
                  decl$1[10]]);
        };
    
    var
     map_type_parameter=
      function(param){return /* tuple */[0,map_core_type(param[1]),param[2]];};
    
    var
     map_constructor_declaration=
      function(cd)
       {return /* record */[0,
                cd[1],
                cd[2],
                List["map"](map_core_type,cd[3]),
                Misc["may_map"](map_core_type,cd[4]),
                cd[5],
                cd[6]];
        };
    
    var
     map_type_extension=
      function(tyext)
       {var tyext$1=Map[4](tyext);
        
        var tyext_params=List["map"](map_type_parameter,tyext$1[3]);
        
        var
         tyext_constructors=
          List["map"](map_extension_constructor,tyext$1[4]);
        
        return Map[29]
                (/* record */[0,
                  tyext$1[1],
                  tyext$1[2],
                  tyext_params,
                  tyext_constructors,
                  tyext$1[5],
                  tyext$1[6]]);
        };
    
    var
     map_extension_constructor=
      function(ext)
       {var ext$1=Map[5](ext);
        
        var match=ext$1[4];
        
        switch(match[0])
         {case 0:
           var args=List["map"](map_core_type,match[1]);
           
           var ret=Misc["may_map"](map_core_type,match[2]);
           
           var ext_kind=/* Text_decl */[0,args,ret];
           
          case 1:var ext_kind=/* Text_rebind */[1,match[1],match[2]];
          }
        
        var newrecord=/* unknown */"duprecord regular 6";
        
        return Map[30]((newrecord[4]=ext_kind,newrecord));
        };
    
    var
     map_pattern=
      function(pat)
       {var pat$1=Map[6](pat);
        
        var match=pat$1[1];
        
        var exit;
        
        if(typeof match==="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:
             var pat1=map_pattern(match[1]);
             
             var pat_desc=/* Tpat_alias */[1,pat1,match[2],match[3]];
             
            case 3:
             var
              pat_desc=
               /* Tpat_tuple */[3,List["map"](map_pattern,match[1])];
             
            case 4:
             var
              pat_desc=
               /* Tpat_construct */[4,
                match[1],
                match[2],
                List["map"](map_pattern,match[3])];
             
            case 5:
             var pato=match[2];
             
             if(pato)
              {var pato$1=/* Some */[0,map_pattern(pato[1])];}
             else
              {var pato$1=pato;}
             
             var pat_desc=/* Tpat_variant */[5,match[1],pato$1,match[3]];
             
            case 6:
             var
              pat_desc=
               /* Tpat_record */[6,
                List["map"]
                 (function(param)
                   {return /* tuple */[0,
                            param[1],
                            param[2],
                            map_pattern(param[3])];
                    },
                  match[1]),
                match[2]];
             
            case 7:
             var
              pat_desc=
               /* Tpat_array */[7,List["map"](map_pattern,match[1])];
             
            case 8:
             var
              pat_desc=
               /* Tpat_or */[8,
                map_pattern(match[1]),
                map_pattern(match[2]),
                match[3]];
             
            case 9:var pat_desc=/* Tpat_lazy */[9,map_pattern(match[1])];
            default:exit=77;}}
        
        switch(exit){case 77:var pat_desc=pat$1[1];}
        
        var pat_extra=List["map"](map_pat_extra,pat$1[3]);
        
        return Map[31]
                (/* record */[0,
                  pat_desc,
                  pat$1[2],
                  pat_extra,
                  pat$1[4],
                  pat$1[5],
                  pat$1[6]]);
        };
    
    var
     map_pat_extra=
      function(pat_extra)
       {var match=pat_extra[1];
        
        var exit;
        
        if(typeof match==="number")
         {switch(match){case 0:exit=80;}}
        else
         {switch(match[0])
           {case 0:
             return /* tuple */[0,
                     /* Tpat_constraint */[0,map_core_type(match[1])],
                     pat_extra[2],
                     pat_extra[3]];
             
            case 1:exit=80;
            }}
        
        switch(exit){case 80:return pat_extra;}
        };
    
    var
     map_expression=
      function(exp)
       {var exp$1=Map[7](exp);
        
        var match=exp$1[1];
        
        var exit;
        
        switch(match[0])
         {case 0:exit=86;
          case 1:exit=86;
          case 2:
           var rec_flag=match[1];
           
           var
            exp_desc=
             /* Texp_let */[2,
              rec_flag,
              map_bindings(rec_flag,match[2]),
              map_expression(match[3])];
           
          case 3:
           var
            exp_desc=
             /* Texp_function */[3,match[1],map_cases(match[2]),match[3]];
           
          case 4:
           var
            exp_desc=
             /* Texp_apply */[4,
              map_expression(match[1]),
              List["map"]
               (function(param)
                 {var expo=param[2];
                  
                  if(expo)
                   {var expo$1=/* Some */[0,map_expression(expo[1])];}
                  else
                   {var expo$1=expo;}
                  
                  return /* tuple */[0,param[1],expo$1,param[3]];
                  },
                match[2])];
           
          case 5:
           var
            exp_desc=
             /* Texp_match */[5,
              map_expression(match[1]),
              map_cases(match[2]),
              map_cases(match[3]),
              match[4]];
           
          case 6:
           var
            exp_desc=
             /* Texp_try */[6,map_expression(match[1]),map_cases(match[2])];
           
          case 7:
           var
            exp_desc=
             /* Texp_tuple */[7,List["map"](map_expression,match[1])];
           
          case 8:
           var
            exp_desc=
             /* Texp_construct */[8,
              match[1],
              match[2],
              List["map"](map_expression,match[3])];
           
          case 9:
           var expo=match[2];
           
           if(expo)
            {var expo$1=/* Some */[0,map_expression(expo[1])];}
           else
            {var expo$1=expo;}
           
           var exp_desc=/* Texp_variant */[9,match[1],expo$1];
           
          case 10:
           var expo$2=match[2];
           
           var
            list=
             List["map"]
              (function(param)
                {return /* tuple */[0,
                         param[1],
                         param[2],
                         map_expression(param[3])];
                 },
               match[1]);
           
           if(expo$2)
            {var expo$3=/* Some */[0,map_expression(expo$2[1])];}
           else
            {var expo$3=expo$2;}
           
           var exp_desc=/* Texp_record */[10,list,expo$3];
           
          case 11:
           var
            exp_desc=
             /* Texp_field */[11,map_expression(match[1]),match[2],match[3]];
           
          case 12:
           var
            exp_desc=
             /* Texp_setfield */[12,
              map_expression(match[1]),
              match[2],
              match[3],
              map_expression(match[4])];
           
          case 13:
           var
            exp_desc=
             /* Texp_array */[13,List["map"](map_expression,match[1])];
           
          case 14:
           var expo$4=match[3];
           
           var
            exp_desc=
             /* Texp_ifthenelse */[14,
              map_expression(match[1]),
              map_expression(match[2]),
              expo$4?/* Some */[0,map_expression(expo$4[1])]:expo$4];
           
          case 15:
           var
            exp_desc=
             /* Texp_sequence */[15,
              map_expression(match[1]),
              map_expression(match[2])];
           
          case 16:
           var
            exp_desc=
             /* Texp_while */[16,
              map_expression(match[1]),
              map_expression(match[2])];
           
          case 17:
           var
            exp_desc=
             /* Texp_for */[17,
              match[1],
              match[2],
              map_expression(match[3]),
              map_expression(match[4]),
              match[5],
              map_expression(match[6])];
           
          case 18:
           var
            exp_desc=
             /* Texp_send */[18,
              map_expression(match[1]),
              match[2],
              Misc["may_map"](map_expression,match[3])];
           
          case 19:exit=87;
          case 20:exit=87;
          case 21:
           var
            exp_desc=
             /* Texp_setinstvar */[21,
              match[1],
              match[2],
              match[3],
              map_expression(match[4])];
           
          case 22:
           var
            exp_desc=
             /* Texp_override */[22,
              match[1],
              List["map"]
               (function(param)
                 {return /* tuple */[0,
                          param[1],
                          param[2],
                          map_expression(param[3])];
                  },
                match[2])];
           
          case 23:
           var
            exp_desc=
             /* Texp_letmodule */[23,
              match[1],
              match[2],
              map_module_expr(match[3]),
              map_expression(match[4])];
           
          case 24:var exp_desc=/* Texp_assert */[24,map_expression(match[1])];
          case 25:var exp_desc=/* Texp_lazy */[25,map_expression(match[1])];
          case 26:
           var
            exp_desc=
             /* Texp_object */[26,map_class_structure(match[1]),match[2]];
           
          case 27:var exp_desc=/* Texp_pack */[27,map_module_expr(match[1])];
          }
        
        switch(exit)
         {case 87:var exp_desc=exp$1[1];case 86:var exp_desc=exp$1[1];}
        
        var exp_extra=List["map"](map_exp_extra,exp$1[3]);
        
        return Map[32]
                (/* record */[0,
                  exp_desc,
                  exp$1[2],
                  exp_extra,
                  exp$1[4],
                  exp$1[5],
                  exp$1[6]]);
        };
    
    var
     map_exp_extra=
      function(exp_extra)
       {var attrs=exp_extra[3];
        
        var loc=exp_extra[2];
        
        var desc=exp_extra[1];
        
        var exit;
        
        switch(desc[0])
         {case 0:
           return /* tuple */[0,
                   /* Texp_constraint */[0,map_core_type(desc[1])],
                   loc,
                   attrs];
           
          case 1:
           var match=desc[1];
           
           if(match)
            {return /* tuple */[0,
                     /* Texp_coerce */[1,
                      /* Some */[0,map_core_type(match[1])],
                      map_core_type(desc[2])],
                     loc,
                     attrs];
             }
           else
            {return /* tuple */[0,
                     /* Texp_coerce */[1,/* None */0,map_core_type(desc[2])],
                     loc,
                     attrs];
             }
           
          case 2:exit=90;
          case 3:
           var match$1=desc[1];
           
           if(match$1)
            {return /* tuple */[0,
                     /* Texp_poly */[3,/* Some */[0,map_core_type(match$1[1])]],
                     loc,
                     attrs];
             }
           else
            {exit=90;}
           
          case 4:exit=90;
          }
        
        switch(exit){case 90:return exp_extra;}
        };
    
    var
     map_package_type=
      function(pack)
       {var pack$1=Map[8](pack);
        
        var
         pack_fields=
          List["map"]
           (function(param)
             {return /* tuple */[0,param[1],map_core_type(param[2])];},
            pack$1[2]);
        
        return Map[33]
                (/* record */[0,pack$1[1],pack_fields,pack$1[3],pack$1[4]]);
        };
    
    var
     map_signature=
      function(sg)
       {var sg$1=Map[9](sg);
        
        var sig_items=List["map"](map_signature_item,sg$1[1]);
        
        return Map[34](/* record */[0,sig_items,sg$1[2],sg$1[3]]);
        };
    
    var
     map_signature_item=
      function(item)
       {var item$1=Map[10](item);
        
        var x=item$1[1];
        
        switch(x[0])
         {case 0:var sig_desc=/* Tsig_value */[0,map_value_description(x[1])];
          case 1:
           var
            sig_desc=
             /* Tsig_type */[1,List["map"](map_type_declaration,x[1])];
           
          case 2:var sig_desc=/* Tsig_typext */[2,map_type_extension(x[1])];
          case 3:
           var
            sig_desc=
             /* Tsig_exception */[3,map_extension_constructor(x[1])];
           
          case 4:
           var md=x[1];
           
           var
            sig_desc=
             /* Tsig_module */[4,
              /* record */[0,md[1],md[2],map_module_type(md[3]),md[4],md[5]]];
           
          case 5:
           var
            sig_desc=
             /* Tsig_recmodule */[5,
              List["map"]
               (function(md)
                 {return /* record */[0,
                          md[1],
                          md[2],
                          map_module_type(md[3]),
                          md[4],
                          md[5]];
                  },
                x[1])];
           
          case 6:
           var
            sig_desc=
             /* Tsig_modtype */[6,map_module_type_declaration(x[1])];
           
          case 7:var sig_desc=item$1[1];
          case 8:
           var incl=x[1];
           
           var
            sig_desc=
             /* Tsig_include */[8,
              /* record */[0,map_module_type(incl[1]),incl[2],incl[3],incl[4]]];
           
          case 9:
           var
            sig_desc=
             /* Tsig_class */[9,List["map"](map_class_description,x[1])];
           
          case 10:
           var
            sig_desc=
             /* Tsig_class_type */[10,
              List["map"](map_class_type_declaration,x[1])];
           
          case 11:var sig_desc=x;
          }
        
        return Map[35](/* record */[0,sig_desc,item$1[2],item$1[3]]);
        };
    
    var
     map_module_type_declaration=
      function(mtd)
       {var mtd$1=Map[11](mtd);
        
        var
         mtd$2=
          /* record */[0,
           mtd$1[1],
           mtd$1[2],
           Misc["may_map"](map_module_type,mtd$1[3]),
           mtd$1[4],
           mtd$1[5]];
        
        return Map[36](mtd$2);
        };
    
    var
     map_class_declaration=
      function(cd)
       {var cd$1=Map[17](cd);
        
        var ci_params=List["map"](map_type_parameter,cd$1[2]);
        
        var ci_expr=map_class_expr(cd$1[8]);
        
        var newrecord=/* unknown */"duprecord regular 12";
        
        return Map[42]
                ((newrecord[2]=ci_params,newrecord[8]=ci_expr,newrecord));
        };
    
    var
     map_class_description=
      function(cd)
       {var cd$1=Map[18](cd);
        
        var ci_params=List["map"](map_type_parameter,cd$1[2]);
        
        var ci_expr=map_class_type(cd$1[8]);
        
        var newrecord=/* unknown */"duprecord regular 12";
        
        return Map[43]
                ((newrecord[2]=ci_params,newrecord[8]=ci_expr,newrecord));
        };
    
    var
     map_class_type_declaration=
      function(cd)
       {var cd$1=Map[19](cd);
        
        var ci_params=List["map"](map_type_parameter,cd$1[2]);
        
        var ci_expr=map_class_type(cd$1[8]);
        
        var newrecord=/* unknown */"duprecord regular 12";
        
        return Map[44]
                ((newrecord[2]=ci_params,newrecord[8]=ci_expr,newrecord));
        };
    
    var
     map_module_type=
      function(mty)
       {var mty$1=Map[12](mty);
        
        var match=mty$1[1];
        
        var exit;
        
        switch(match[0])
         {case 0:exit=108;
          case 1:var mty_desc=/* Tmty_signature */[1,map_signature(match[1])];
          case 2:
           var
            mty_desc=
             /* Tmty_functor */[2,
              match[1],
              match[2],
              Misc["may_map"](map_module_type,match[3]),
              map_module_type(match[4])];
           
          case 3:
           var
            mty_desc=
             /* Tmty_with */[3,
              map_module_type(match[1]),
              List["map"]
               (function(param)
                 {return /* tuple */[0,
                          param[1],
                          param[2],
                          map_with_constraint(param[3])];
                  },
                match[2])];
           
          case 4:var mty_desc=/* Tmty_typeof */[4,map_module_expr(match[1])];
          case 5:exit=108;
          }
        
        switch(exit){case 108:var mty_desc=mty$1[1];}
        
        return Map[37]
                (/* record */[0,mty_desc,mty$1[2],mty$1[3],mty$1[4],mty$1[5]]);
        };
    
    var
     map_with_constraint=
      function(cstr)
       {var cstr$1=Map[14](cstr);
        
        var exit;
        
        switch(cstr$1[0])
         {case 0:
           var cstr$2=/* Twith_type */[0,map_type_declaration(cstr$1[1])];
          case 1:exit=111;
          case 2:
           var
            cstr$2=
             /* Twith_typesubst */[2,map_type_declaration(cstr$1[1])];
           
          case 3:exit=111;
          }
        
        switch(exit){case 111:var cstr$2=cstr$1;}
        
        return Map[39](cstr$2);
        };
    
    var
     map_module_expr=
      function(mexpr)
       {var mexpr$1=Map[13](mexpr);
        
        var match=mexpr$1[1];
        
        switch(match[0])
         {case 0:var mod_desc=mexpr$1[1];
          case 1:var mod_desc=/* Tmod_structure */[1,map_structure(match[1])];
          case 2:
           var
            mod_desc=
             /* Tmod_functor */[2,
              match[1],
              match[2],
              Misc["may_map"](map_module_type,match[3]),
              map_module_expr(match[4])];
           
          case 3:
           var
            mod_desc=
             /* Tmod_apply */[3,
              map_module_expr(match[1]),
              map_module_expr(match[2]),
              match[3]];
           
          case 4:
           var match$1=match[3];
           
           var mod_type=match[2];
           
           var mexpr$2=match[1];
           
           if(match$1)
            {var
              mod_desc=
               /* Tmod_constraint */[4,
                map_module_expr(mexpr$2),
                mod_type,
                /* Tmodtype_explicit */[0,map_module_type(match$1[1])],
                match[4]];
             }
           else
            {var
              mod_desc=
               /* Tmod_constraint */[4,
                map_module_expr(mexpr$2),
                mod_type,
                /* Tmodtype_implicit */0,
                match[4]];
             }
           
          case 5:
           var
            mod_desc=
             /* Tmod_unpack */[5,map_expression(match[1]),match[2]];
           
          }
        
        return Map[38]
                (/* record */[0,
                  mod_desc,
                  mexpr$1[2],
                  mexpr$1[3],
                  mexpr$1[4],
                  mexpr$1[5]]);
        };
    
    var
     map_class_expr=
      function(cexpr)
       {var cexpr$1=Map[15](cexpr);
        
        var match=cexpr$1[1];
        
        switch(match[0])
         {case 0:
           var
            cl_desc=
             /* Tcl_ident */[0,
              match[1],
              match[2],
              List["map"](map_core_type,match[3])];
           
          case 1:
           var cl_desc=/* Tcl_structure */[1,map_class_structure(match[1])];
          case 2:
           var
            cl_desc=
             /* Tcl_fun */[2,
              match[1],
              map_pattern(match[2]),
              List["map"]
               (function(param)
                 {return /* tuple */[0,
                          param[1],
                          param[2],
                          map_expression(param[3])];
                  },
                match[3]),
              map_class_expr(match[4]),
              match[5]];
           
          case 3:
           var
            cl_desc=
             /* Tcl_apply */[3,
              map_class_expr(match[1]),
              List["map"]
               (function(param)
                 {return /* tuple */[0,
                          param[1],
                          Misc["may_map"](map_expression,param[2]),
                          param[3]];
                  },
                match[2])];
           
          case 4:
           var rec_flat=match[1];
           
           var
            cl_desc=
             /* Tcl_let */[4,
              rec_flat,
              map_bindings(rec_flat,match[2]),
              List["map"]
               (function(param)
                 {return /* tuple */[0,
                          param[1],
                          param[2],
                          map_expression(param[3])];
                  },
                match[3]),
              map_class_expr(match[4])];
           
          case 5:
           var match$1=match[2];
           
           var cl=match[1];
           
           if(match$1)
            {var
              cl_desc=
               /* Tcl_constraint */[5,
                map_class_expr(cl),
                /* Some */[0,map_class_type(match$1[1])],
                match[3],
                match[4],
                match[5]];
             }
           else
            {var
              cl_desc=
               /* Tcl_constraint */[5,
                map_class_expr(cl),
                /* None */0,
                match[3],
                match[4],
                match[5]];
             }
           
          }
        
        return Map[40]
                (/* record */[0,
                  cl_desc,
                  cexpr$1[2],
                  cexpr$1[3],
                  cexpr$1[4],
                  cexpr$1[5]]);
        };
    
    var
     map_class_type=
      function(ct)
       {var ct$1=Map[20](ct);
        
        var match=ct$1[1];
        
        switch(match[0])
         {case 0:
           var
            cltyp_desc=
             /* Tcty_constr */[0,
              match[1],
              match[2],
              List["map"](map_core_type,match[3])];
           
          case 1:
           var
            cltyp_desc=
             /* Tcty_signature */[1,map_class_signature(match[1])];
           
          case 2:
           var
            cltyp_desc=
             /* Tcty_arrow */[2,
              match[1],
              map_core_type(match[2]),
              map_class_type(match[3])];
           
          }
        
        return Map[45]
                (/* record */[0,cltyp_desc,ct$1[2],ct$1[3],ct$1[4],ct$1[5]]);
        };
    
    var
     map_class_signature=
      function(cs)
       {var cs$1=Map[16](cs);
        
        var csig_self=map_core_type(cs$1[1]);
        
        var csig_fields=List["map"](map_class_type_field,cs$1[2]);
        
        return Map[41](/* record */[0,csig_self,csig_fields,cs$1[3]]);
        };
    
    var
     map_class_type_field=
      function(ctf)
       {var ctf$1=Map[21](ctf);
        
        var x=ctf$1[1];
        
        switch(x[0])
         {case 0:var ctf_desc=/* Tctf_inherit */[0,map_class_type(x[1])];
          case 1:
           var match=x[1];
           
           var
            ctf_desc=
             /* Tctf_val */[1,
              /* tuple */[0,
               match[1],
               match[2],
               match[3],
               map_core_type(match[4])]];
           
          case 2:
           var match$1=x[1];
           
           var
            ctf_desc=
             /* Tctf_method */[2,
              /* tuple */[0,
               match$1[1],
               match$1[2],
               match$1[3],
               map_core_type(match$1[4])]];
           
          case 3:
           var match$2=x[1];
           
           var
            ctf_desc=
             /* Tctf_constraint */[3,
              /* tuple */[0,
               map_core_type(match$2[1]),
               map_core_type(match$2[2])]];
           
          case 4:var ctf_desc=x;
          }
        
        return Map[46](/* record */[0,ctf_desc,ctf$1[2],ctf$1[3]]);
        };
    
    var
     map_core_type=
      function(ct)
       {var ct$1=Map[22](ct);
        
        var match=ct$1[1];
        
        var exit;
        
        if(typeof match==="number")
         {switch(match){case 0:exit=125;}}
        else
         {switch(match[0])
           {case 0:exit=125;
            case 1:
             var
              ctyp_desc=
               /* Ttyp_arrow */[1,
                match[1],
                map_core_type(match[2]),
                map_core_type(match[3])];
             
            case 2:
             var
              ctyp_desc=
               /* Ttyp_tuple */[2,List["map"](map_core_type,match[1])];
             
            case 3:
             var
              ctyp_desc=
               /* Ttyp_constr */[3,
                match[1],
                match[2],
                List["map"](map_core_type,match[3])];
             
            case 4:
             var
              ctyp_desc=
               /* Ttyp_object */[4,
                List["map"]
                 (function(param)
                   {return /* tuple */[0,
                            param[1],
                            param[2],
                            map_core_type(param[3])];
                    },
                  match[1]),
                match[2]];
             
            case 5:
             var
              ctyp_desc=
               /* Ttyp_class */[5,
                match[1],
                match[2],
                List["map"](map_core_type,match[3])];
             
            case 6:
             var
              ctyp_desc=
               /* Ttyp_alias */[6,map_core_type(match[1]),match[2]];
             
            case 7:
             var
              ctyp_desc=
               /* Ttyp_variant */[7,
                List["map"](map_row_field,match[1]),
                match[2],
                match[3]];
             
            case 8:
             var
              ctyp_desc=
               /* Ttyp_poly */[8,match[1],map_core_type(match[2])];
             
            case 9:
             var ctyp_desc=/* Ttyp_package */[9,map_package_type(match[1])];
            }}
        
        switch(exit){case 125:var ctyp_desc=ct$1[1];}
        
        return Map[47]
                (/* record */[0,ctyp_desc,ct$1[2],ct$1[3],ct$1[4],ct$1[5]]);
        };
    
    var
     map_class_structure=
      function(cs)
       {var cs$1=Map[23](cs);
        
        var cstr_self=map_pattern(cs$1[1]);
        
        var cstr_fields=List["map"](map_class_field,cs$1[2]);
        
        return Map[48](/* record */[0,cstr_self,cstr_fields,cs$1[3],cs$1[4]]);
        };
    
    var
     map_row_field=
      function(rf)
       {switch(rf[0])
         {case 0:
           return /* Ttag */[0,
                   rf[1],
                   rf[2],
                   rf[3],
                   List["map"](map_core_type,rf[4])];
           
          case 1:return /* Tinherit */[1,map_core_type(rf[1])];
          }
        };
    
    var
     map_class_field=
      function(cf)
       {var cf$1=Map[24](cf);
        
        var x=cf$1[1];
        
        switch(x[0])
         {case 0:
           var
            cf_desc=
             /* Tcf_inherit */[0,x[1],map_class_expr(x[2]),x[3],x[4],x[5]];
           
          case 1:
           var match=x[4];
           
           var ident=x[3];
           
           var mut=x[2];
           
           var lab=x[1];
           
           switch(match[0])
            {case 0:
              var
               cf_desc=
                /* Tcf_val */[1,
                 lab,
                 mut,
                 ident,
                 /* Tcfk_virtual */[0,map_core_type(match[1])],
                 x[5]];
              
             case 1:
              var
               cf_desc=
                /* Tcf_val */[1,
                 lab,
                 mut,
                 ident,
                 /* Tcfk_concrete */[1,match[1],map_expression(match[2])],
                 x[5]];
              
             }
           
          case 2:
           var match$1=x[3];
           
           var priv=x[2];
           
           var lab$1=x[1];
           
           switch(match$1[0])
            {case 0:
              var
               cf_desc=
                /* Tcf_method */[2,
                 lab$1,
                 priv,
                 /* Tcfk_virtual */[0,map_core_type(match$1[1])]];
              
             case 1:
              var
               cf_desc=
                /* Tcf_method */[2,
                 lab$1,
                 priv,
                 /* Tcfk_concrete */[1,match$1[1],map_expression(match$1[2])]];
              
             }
           
          case 3:
           var
            cf_desc=
             /* Tcf_constraint */[3,map_core_type(x[1]),map_core_type(x[2])];
           
          case 4:var cf_desc=/* Tcf_initializer */[4,map_expression(x[1])];
          case 5:var cf_desc=x;
          }
        
        return Map[49](/* record */[0,cf_desc,cf$1[2],cf$1[3]]);
        };
    
    return [0,
            may_map,
            map_structure,
            map_binding,
            map_bindings,
            map_case,
            map_cases,
            map_structure_item,
            map_module_binding,
            map_value_description,
            map_type_declaration,
            map_type_parameter,
            map_constructor_declaration,
            map_type_extension,
            map_extension_constructor,
            map_pattern,
            map_pat_extra,
            map_expression,
            map_exp_extra,
            map_package_type,
            map_signature,
            map_signature_item,
            map_module_type_declaration,
            map_class_declaration,
            map_class_description,
            map_class_type_declaration,
            map_module_type,
            map_with_constraint,
            map_module_expr,
            map_class_expr,
            map_class_type,
            map_class_signature,
            map_class_type_field,
            map_core_type,
            map_class_structure,
            map_row_field,
            map_class_field];
    };

var enter_structure=function(t){return t;};

var enter_value_description=function(t){return t;};

var enter_type_declaration=function(t){return t;};

var enter_type_extension=function(t){return t;};

var enter_extension_constructor=function(t){return t;};

var enter_pattern=function(t){return t;};

var enter_expression=function(t){return t;};

var enter_package_type=function(t){return t;};

var enter_signature=function(t){return t;};

var enter_signature_item=function(t){return t;};

var enter_module_type_declaration=function(t){return t;};

var enter_module_type=function(t){return t;};

var enter_module_expr=function(t){return t;};

var enter_with_constraint=function(t){return t;};

var enter_class_expr=function(t){return t;};

var enter_class_signature=function(t){return t;};

var enter_class_declaration=function(t){return t;};

var enter_class_description=function(t){return t;};

var enter_class_type_declaration=function(t){return t;};

var enter_class_type=function(t){return t;};

var enter_class_type_field=function(t){return t;};

var enter_core_type=function(t){return t;};

var enter_class_structure=function(t){return t;};

var enter_class_field=function(t){return t;};

var enter_structure_item=function(t){return t;};

var leave_structure=function(t){return t;};

var leave_value_description=function(t){return t;};

var leave_type_declaration=function(t){return t;};

var leave_type_extension=function(t){return t;};

var leave_extension_constructor=function(t){return t;};

var leave_pattern=function(t){return t;};

var leave_expression=function(t){return t;};

var leave_package_type=function(t){return t;};

var leave_signature=function(t){return t;};

var leave_signature_item=function(t){return t;};

var leave_module_type_declaration=function(t){return t;};

var leave_module_type=function(t){return t;};

var leave_module_expr=function(t){return t;};

var leave_with_constraint=function(t){return t;};

var leave_class_expr=function(t){return t;};

var leave_class_signature=function(t){return t;};

var leave_class_declaration=function(t){return t;};

var leave_class_description=function(t){return t;};

var leave_class_type_declaration=function(t){return t;};

var leave_class_type=function(t){return t;};

var leave_class_type_field=function(t){return t;};

var leave_core_type=function(t){return t;};

var leave_class_structure=function(t){return t;};

var leave_class_field=function(t){return t;};

var leave_structure_item=function(t){return t;};

var
 DefaultMapArgument=
  [0,
   enter_structure,
   enter_value_description,
   enter_type_declaration,
   enter_type_extension,
   enter_extension_constructor,
   enter_pattern,
   enter_expression,
   enter_package_type,
   enter_signature,
   enter_signature_item,
   enter_module_type_declaration,
   enter_module_type,
   enter_module_expr,
   enter_with_constraint,
   enter_class_expr,
   enter_class_signature,
   enter_class_declaration,
   enter_class_description,
   enter_class_type_declaration,
   enter_class_type,
   enter_class_type_field,
   enter_core_type,
   enter_class_structure,
   enter_class_field,
   enter_structure_item,
   leave_structure,
   leave_value_description,
   leave_type_declaration,
   leave_type_extension,
   leave_extension_constructor,
   leave_pattern,
   leave_expression,
   leave_package_type,
   leave_signature,
   leave_signature_item,
   leave_module_type_declaration,
   leave_module_type,
   leave_module_expr,
   leave_with_constraint,
   leave_class_expr,
   leave_class_signature,
   leave_class_declaration,
   leave_class_description,
   leave_class_type_declaration,
   leave_class_type,
   leave_class_type_field,
   leave_core_type,
   leave_class_structure,
   leave_class_field,
   leave_structure_item];

module["exports"]=
{"MakeMap":
 function(funarg)
  {var $$let=MakeMap(funarg);
   
   return [0,
           $$let[2],
           $$let[15],
           $$let[7],
           $$let[17],
           $$let[29],
           $$let[20],
           $$let[21],
           $$let[26]];
   },
 "DefaultMapArgument":DefaultMapArgument};

