// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Misc=require("Misc");
var Longident=require("Longident");
var Ident=require("Ident");
var Ast_helper=require("Ast_helper");


var
 string_is_prefix=
  function(sub,str)
   {var sublen=sub["length"];
    
    return str["length"]>=sublen&&"unknown primitive:caml_string_equal";
    };

var
 option=
  function(f,param)
   {if(param){return /* Some */[0,f(param[1])];}else{return 0;}};

var
 lident_of_path=
  function(path)
   {switch(path)
     {case 0:return /* Lident */[0,Ident["name"](path[1])];
      case 1:return /* Ldot */[1,lident_of_path(path[1]),path[2]];
      case 2:
       return /* Lapply */[2,lident_of_path(path[1]),lident_of_path(path[2])];
      }
    };

var
 untype_structure=
  function(str){return List["map"](untype_structure_item,str[1]);};

var
 untype_structure_item=
  function(item)
   {var match=item[1];
    
    switch(match)
     {case 0:var desc=/* Pstr_eval */[0,untype_expression(match[1]),match[2]];
      case 1:
       var
        desc=
         /* Pstr_value */[1,match[1],List["map"](untype_binding,match[2])];
       
      case 2:
       var desc=/* Pstr_primitive */[2,untype_value_description(match[1])];
      case 3:
       var
        desc=
         /* Pstr_type */[3,List["map"](untype_type_declaration,match[1])];
       
      case 4:var desc=/* Pstr_typext */[4,untype_type_extension(match[1])];
      case 5:
       var
        desc=
         /* Pstr_exception */[5,untype_extension_constructor(match[1])];
       
      case 6:var desc=/* Pstr_module */[6,untype_module_binding(match[1])];
      case 7:
       var
        desc=
         /* Pstr_recmodule */[7,List["map"](untype_module_binding,match[1])];
       
      case 8:
       var mtd=match[1];
       
       var
        desc=
         /* Pstr_modtype */[8,
          /* record */[0,
           mtd[2],
           option(untype_module_type,mtd[3]),
           mtd[4],
           mtd[5]]];
       
      case 9:
       var od=match[1];
       
       var desc=/* Pstr_open */[9,/* record */[0,od[2],od[3],od[4],od[5]]];
       
      case 10:
       var
        desc=
         /* Pstr_class */[10,
          List["map"]
           (function(param){return untype_class_declaration(param[1]);},
            match[1])];
       
      case 11:
       var
        desc=
         /* Pstr_class_type */[11,
          List["map"]
           (function(param){return untype_class_type_declaration(param[3]);},
            match[1])];
       
      case 12:
       var incl=match[1];
       
       var
        desc=
         /* Pstr_include */[12,
          /* record */[0,untype_module_expr(incl[1]),incl[3],incl[4]]];
       
      case 13:var desc=/* Pstr_attribute */[13,match[1]];
      }
    
    return /* record */[0,desc,item[2]];
    };

var
 untype_value_description=
  function(v)
   {return /* record */[0,v[2],untype_core_type(v[3]),v[5],v[7],v[6]];};

var
 untype_module_binding=
  function(mb)
   {return /* record */[0,mb[2],untype_module_expr(mb[3]),mb[4],mb[5]];};

var
 untype_type_declaration=
  function(decl)
   {var match=decl[6];
    
    var $js;
    if(typeof match=="number")
     {switch(match){case 0:$js=0;case 1:$js=1;}}
    else
     {switch(match[0])
       {case 0:
         $js=
         /* Ptype_variant */[0,
          List["map"](untype_constructor_declaration,match[1])];
         
        case 1:
         $js=
         /* Ptype_record */[1,List["map"](untype_label_declaration,match[1])];
         
        }}
    return /* record */[0,
            decl[2],
            List["map"](untype_type_parameter,decl[3]),
            List["map"]
             (function(param)
               {return /* tuple */[0,
                        untype_core_type(param[1]),
                        untype_core_type(param[2]),
                        param[3]];
                },
              decl[5]),
            $js,
            decl[7],
            option(untype_core_type,decl[8]),
            decl[10],
            decl[9]];
    };

var
 untype_type_parameter=
  function(param){return /* tuple */[0,untype_core_type(param[1]),param[2]];};

var
 untype_constructor_declaration=
  function(cd)
   {return /* record */[0,
            cd[2],
            List["map"](untype_core_type,cd[3]),
            option(untype_core_type,cd[4]),
            cd[5],
            cd[6]];
    };

var
 untype_label_declaration=
  function(ld)
   {return /* record */[0,ld[2],ld[3],untype_core_type(ld[4]),ld[5],ld[6]];};

var
 untype_type_extension=
  function(tyext)
   {return /* record */[0,
            tyext[2],
            List["map"](untype_type_parameter,tyext[3]),
            List["map"](untype_extension_constructor,tyext[4]),
            tyext[5],
            tyext[6]];
    };

var
 untype_extension_constructor=
  function(ext)
   {var match=ext[4];
    
    var $js;
    switch(match)
     {case 0:
       $js=
       /* Pext_decl */[0,
        List["map"](untype_core_type,match[1]),
        option(untype_core_type,match[2])];
       
      case 1:$js=/* Pext_rebind */[1,match[2]];
      }
    return /* record */[0,ext[2],$js,ext[5],ext[6]];
    };

var
 untype_pattern=
  function(pat)
   {var match=pat[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         var match$1=pat[3];
         
         if(match$1)
          {if("unknown primitive:isint")
            {if(match$1[2])
              {exit=5;}
             else
              {var desc=/* Ppat_unpack */[13,match[2]];}
             }
           else
            {exit=6;}
           }
         else
          {exit=5;}
         
        default:exit=6;}}
    
    switch(exit)
     {case 6:
       var match$2=pat[3];
       
       if(match$2)
        {var match$3=match$2[1][1];
         
         if(typeof match$3=="number")
          {switch(match$3){case 0:"unknown block:(exit 5)";}}
         else
          {switch(match$3[0])
            {case 0:
              var newrecord="unknown primitive:duprecord regular 6";
              
              var
               desc=
                /* Ppat_constraint */[10,
                 untype_pattern((newrecord[3]=match$2[2],0,newrecord)),
                 untype_core_type(match$3[1])];
              
             case 1:
              if(match$2[2])
               {"unknown block:(exit 5)";}
              else
               {var desc=/* Ppat_type */[11,match$3[2]];}
              
             }}
         }
       else
        {"unknown block:(exit 5)";}
       
      case 5:
       var match$4=pat[1];
       
       if(typeof match$4=="number")
        {switch(match$4){case 0:var desc=0;}}
       else
        {switch(match$4[0])
          {case 0:
            var name=match$4[2];
            
            var match$5=Ident["name"](match$4[1])[0];
            
            if(25<-65+match$5>>>0)
             {var desc=/* Ppat_var */[0,name];}
            else
             {var desc=/* Ppat_unpack */[13,name];}
            
           case 1:
            var
             desc=
              /* Ppat_alias */[1,untype_pattern(match$4[1]),match$4[3]];
            
           case 2:var desc=/* Ppat_constant */[2,match$4[1]];
           case 3:
            var
             desc=
              /* Ppat_tuple */[4,List["map"](untype_pattern,match$4[1])];
            
           case 4:
            var args=match$4[3];
            
            var
             desc=
              /* Ppat_construct */[5,
               match$4[1],
               args
                ?args[2]
                  ?/* Some */[0,
                    Ast_helper["Pat"][8]
                     (/* Some */[0,pat[2]],0,List["map"](untype_pattern,args))]
                  :/* Some */[0,untype_pattern(args[1])]
                :0];
            
           case 5:
            var
             desc=
              /* Ppat_variant */[6,
               match$4[1],
               option(untype_pattern,match$4[2])];
            
           case 6:
            var
             desc=
              /* Ppat_record */[7,
               List["map"]
                (function(param)
                  {return /* tuple */[0,param[1],untype_pattern(param[3])];},
                 match$4[1]),
               match$4[2]];
            
           case 7:
            var
             desc=
              /* Ppat_array */[8,List["map"](untype_pattern,match$4[1])];
            
           case 8:
            var
             desc=
              /* Ppat_or */[9,
               untype_pattern(match$4[1]),
               untype_pattern(match$4[2])];
            
           case 9:var desc=/* Ppat_lazy */[12,untype_pattern(match$4[1])];
           }}
       
      }
    
    return Ast_helper["Pat"][1]
            (/* Some */[0,pat[2]],/* Some */[0,pat[6]],desc);
    };

var
 untype_extra=
  function(param,sexp)
   {var extra=param[1];
    
    switch(extra)
     {case 0:
       var desc=/* Pexp_constraint */[19,sexp,untype_core_type(extra[1])];
      case 1:
       var
        desc=
         /* Pexp_coerce */[20,
          sexp,
          option(untype_core_type,extra[1]),
          untype_core_type(extra[2])];
       
      case 2:var desc=/* Pexp_open */[32,extra[1],extra[3],sexp];
      case 3:
       var desc=/* Pexp_poly */[28,sexp,option(untype_core_type,extra[1])];
      case 4:var desc=/* Pexp_newtype */[30,extra[1],sexp];
      }
    
    return Ast_helper["Exp"][1]
            (/* Some */[0,param[2]],/* Some */[0,param[3]],desc);
    };

var untype_cases=function(l){return List["map"](untype_case,l);};

var
 untype_case=
  function(param)
   {return /* record */[0,
            untype_pattern(param[1]),
            option(untype_expression,param[2]),
            untype_expression(param[3])];
    };

var
 untype_binding=
  function(param)
   {return /* record */[0,
            untype_pattern(param[1]),
            untype_expression(param[2]),
            param[3],
            param[4]];
    };

var
 untype_expression=
  function(exp)
   {var match=exp[1];
    
    switch(match)
     {case 0:var desc=/* Pexp_ident */[0,match[2]];
      case 1:var desc=/* Pexp_constant */[1,match[1]];
      case 2:
       var
        desc=
         /* Pexp_let */[2,
          match[1],
          List["map"](untype_binding,match[2]),
          untype_expression(match[3])];
       
      case 3:
       var label=match[1];
       
       var exit;
       
       var match$1=match[2];
       
       if(match$1)
        {var match$2=match$1[1];
         
         if(match$2[2])
          {exit=14;}
         else
          {if(match$1[2])
            {exit=14;}
           else
            {var
              desc=
               /* Pexp_fun */[4,
                label,
                0,
                untype_pattern(match$2[1]),
                untype_expression(match$2[3])];
             }
           }
         }
       else
        {exit=14;}
       
       switch(exit)
        {case 14:
          switch(label)
           {case "":var desc=/* Pexp_function */[3,untype_cases(match[2])];
            default:throw [0,Assert_failure,[0,"untypeast.ml",272,8]];}
          
         }
       
      case 4:
       var
        desc=
         /* Pexp_apply */[5,
          untype_expression(match[1]),
          List["fold_right"]
           (function(param,list)
             {var expo=param[2];
              
              if(expo)
               {return /* :: */[0,
                        /* tuple */[0,param[1],untype_expression(expo[1])],
                        list];
                }
              else
               {return list;}
              },
            match[2],
            0)];
       
      case 5:
       var
        merged_cases=
         Pervasives["@"]
          (untype_cases(match[2]),
           List["map"]
            (function(c)
              {var uc=untype_case(c);
               
               var init=uc[1];
               
               var
                pat=
                 /* record */[0,
                  /* Ppat_exception */[14,uc[1]],
                  init[2],
                  init[3]];
               
               return /* record */[0,pat,uc[2],uc[3]];
               },
             match[3]));
       
       var desc=/* Pexp_match */[6,untype_expression(match[1]),merged_cases];
       
      case 6:
       var
        desc=
         /* Pexp_try */[7,untype_expression(match[1]),untype_cases(match[2])];
       
      case 7:
       var desc=/* Pexp_tuple */[8,List["map"](untype_expression,match[1])];
      case 8:
       var args=match[3];
       
       var
        desc=
         /* Pexp_construct */[9,
          match[1],
          args
           ?args[2]
             ?/* Some */[0,
               Ast_helper["Exp"][11]
                (/* Some */[0,exp[2]],0,List["map"](untype_expression,args))]
             :/* Some */[0,untype_expression(args[1])]
           :0];
       
      case 9:
       var
        desc=
         /* Pexp_variant */[10,match[1],option(untype_expression,match[2])];
       
      case 10:
       var
        desc=
         /* Pexp_record */[11,
          List["map"]
           (function(param)
             {return /* tuple */[0,param[1],untype_expression(param[3])];},
            match[1]),
          option(untype_expression,match[2])];
       
      case 11:
       var desc=/* Pexp_field */[12,untype_expression(match[1]),match[2]];
      case 12:
       var
        desc=
         /* Pexp_setfield */[13,
          untype_expression(match[1]),
          match[2],
          untype_expression(match[4])];
       
      case 13:
       var desc=/* Pexp_array */[14,List["map"](untype_expression,match[1])];
      case 14:
       var
        desc=
         /* Pexp_ifthenelse */[15,
          untype_expression(match[1]),
          untype_expression(match[2]),
          option(untype_expression,match[3])];
       
      case 15:
       var
        desc=
         /* Pexp_sequence */[16,
          untype_expression(match[1]),
          untype_expression(match[2])];
       
      case 16:
       var
        desc=
         /* Pexp_while */[17,
          untype_expression(match[1]),
          untype_expression(match[2])];
       
      case 17:
       var
        desc=
         /* Pexp_for */[18,
          match[2],
          untype_expression(match[3]),
          untype_expression(match[4]),
          match[5],
          untype_expression(match[6])];
       
      case 18:
       var meth=match[2];
       
       var $js;
       switch(meth){case 0:$js=meth[1];case 1:$js=Ident["name"](meth[1]);}
       var desc=/* Pexp_send */[21,untype_expression(match[1]),$js];
       
      case 19:var desc=/* Pexp_new */[22,match[2]];
      case 20:
       var
        desc=
         /* Pexp_ident */[0,
          /* record */[0,lident_of_path(match[2]),match[3][2]]];
       
      case 21:
       var
        desc=
         /* Pexp_setinstvar */[23,match[3],untype_expression(match[4])];
       
      case 22:
       var
        desc=
         /* Pexp_override */[24,
          List["map"]
           (function(param)
             {return /* tuple */[0,param[2],untype_expression(param[3])];},
            match[2])];
       
      case 23:
       var
        desc=
         /* Pexp_letmodule */[25,
          match[2],
          untype_module_expr(match[3]),
          untype_expression(match[4])];
       
      case 24:var desc=/* Pexp_assert */[26,untype_expression(match[1])];
      case 25:var desc=/* Pexp_lazy */[27,untype_expression(match[1])];
      case 26:var desc=/* Pexp_object */[29,untype_class_structure(match[1])];
      case 27:var desc=/* Pexp_pack */[31,untype_module_expr(match[1])];
      }
    
    return List["fold_right"]
            (untype_extra,
             exp[3],
             Ast_helper["Exp"][1]
              (/* Some */[0,exp[2]],/* Some */[0,exp[6]],desc));
    };

var
 untype_package_type=
  function(pack)
   {return /* tuple */[0,
            pack[4],
            List["map"]
             (function(param)
               {return /* tuple */[0,param[1],untype_core_type(param[2])];},
              pack[2])];
    };

var
 untype_signature=
  function(sg){return List["map"](untype_signature_item,sg[1]);};

var
 untype_signature_item=
  function(item)
   {var match=item[1];
    
    switch(match)
     {case 0:var desc=/* Psig_value */[0,untype_value_description(match[1])];
      case 1:
       var
        desc=
         /* Psig_type */[1,List["map"](untype_type_declaration,match[1])];
       
      case 2:var desc=/* Psig_typext */[2,untype_type_extension(match[1])];
      case 3:
       var
        desc=
         /* Psig_exception */[3,untype_extension_constructor(match[1])];
       
      case 4:
       var md=match[1];
       
       var
        desc=
         /* Psig_module */[4,
          /* record */[0,md[2],untype_module_type(md[3]),md[4],md[5]]];
       
      case 5:
       var
        desc=
         /* Psig_recmodule */[5,
          List["map"]
           (function(md$1)
             {return /* record */[0,
                      md$1[2],
                      untype_module_type(md$1[3]),
                      md$1[4],
                      md$1[5]];
              },
            match[1])];
       
      case 6:
       var mtd=match[1];
       
       var
        desc=
         /* Psig_modtype */[6,
          /* record */[0,
           mtd[2],
           option(untype_module_type,mtd[3]),
           mtd[4],
           mtd[5]]];
       
      case 7:
       var od=match[1];
       
       var desc=/* Psig_open */[7,/* record */[0,od[2],od[3],od[4],od[5]]];
       
      case 8:
       var incl=match[1];
       
       var
        desc=
         /* Psig_include */[8,
          /* record */[0,untype_module_type(incl[1]),incl[3],incl[4]]];
       
      case 9:
       var
        desc=
         /* Psig_class */[9,List["map"](untype_class_description,match[1])];
       
      case 10:
       var
        desc=
         /* Psig_class_type */[10,
          List["map"](untype_class_type_declaration,match[1])];
       
      case 11:var desc=/* Psig_attribute */[11,match[1]];
      }
    
    return /* record */[0,desc,item[3]];
    };

var
 untype_class_declaration=
  function(cd)
   {return /* record */[0,
            cd[1],
            List["map"](untype_type_parameter,cd[2]),
            cd[3],
            untype_class_expr(cd[8]),
            cd[11],
            cd[12]];
    };

var
 untype_class_description=
  function(cd)
   {return /* record */[0,
            cd[1],
            List["map"](untype_type_parameter,cd[2]),
            cd[3],
            untype_class_type(cd[8]),
            cd[11],
            cd[12]];
    };

var
 untype_class_type_declaration=
  function(cd)
   {return /* record */[0,
            cd[1],
            List["map"](untype_type_parameter,cd[2]),
            cd[3],
            untype_class_type(cd[8]),
            cd[11],
            cd[12]];
    };

var
 untype_module_type=
  function(mty)
   {var match=mty[1];
    
    switch(match)
     {case 0:var desc=/* Pmty_ident */[0,match[2]];
      case 1:var desc=/* Pmty_signature */[1,untype_signature(match[1])];
      case 2:
       var
        desc=
         /* Pmty_functor */[2,
          match[2],
          Misc["may_map"](untype_module_type,match[3]),
          untype_module_type(match[4])];
       
      case 3:
       var
        desc=
         /* Pmty_with */[3,
          untype_module_type(match[1]),
          List["map"]
           (function(param){return untype_with_constraint(param[2],param[3]);},
            match[2])];
       
      case 4:var desc=/* Pmty_typeof */[4,untype_module_expr(match[1])];
      case 5:var desc=/* Pmty_alias */[6,match[2]];
      }
    
    return Ast_helper["Mty"][1](/* Some */[0,mty[4]],0,desc);
    };

var
 untype_with_constraint=
  function(lid,cstr)
   {switch(cstr)
     {case 0:return /* Pwith_type */[0,lid,untype_type_declaration(cstr[1])];
      case 1:return /* Pwith_module */[1,lid,cstr[2]];
      case 2:return /* Pwith_typesubst */[2,untype_type_declaration(cstr[1])];
      case 3:
       return /* Pwith_modsubst */[3,
               /* record */[0,Longident["last"](lid[1]),lid[2]],
               cstr[2]];
       
      }
    };

var
 untype_module_expr=
  function(mexpr)
   {var match=mexpr[1];
    
    var exit;
    
    switch(match)
     {case 4:if(match[3]){exit=19;}else{return untype_module_expr(match[1]);}
      default:exit=19;}
    
    switch(exit)
     {case 19:
       var match$1=mexpr[1];
       
       switch(match$1)
        {case 0:var desc=/* Pmod_ident */[0,match$1[2]];
         case 1:var desc=/* Pmod_structure */[1,untype_structure(match$1[1])];
         case 2:
          var
           desc=
            /* Pmod_functor */[2,
             match$1[2],
             Misc["may_map"](untype_module_type,match$1[3]),
             untype_module_expr(match$1[4])];
          
         case 3:
          var
           desc=
            /* Pmod_apply */[3,
             untype_module_expr(match$1[1]),
             untype_module_expr(match$1[2])];
          
         case 4:
          var match$2=match$1[3];
          
          if(match$2)
           {var
             desc=
              /* Pmod_constraint */[4,
               untype_module_expr(match$1[1]),
               untype_module_type(match$2[1])];
            }
          else
           {throw [0,Assert_failure,[0,"untypeast.ml",484,12]];}
          
         case 5:var desc=/* Pmod_unpack */[5,untype_expression(match$1[1])];
         }
       
       return Ast_helper["Mod"][1](/* Some */[0,mexpr[2]],0,desc);
       
      }
    };

var
 untype_class_expr=
  function(cexpr)
   {var match=cexpr[1];
    
    switch(match)
     {case 0:throw [0,Assert_failure,[0,"untypeast.ml",519,21]];
      case 1:var desc=/* Pcl_structure */[1,untype_class_structure(match[1])];
      case 2:
       var
        desc=
         /* Pcl_fun */[2,
          match[1],
          0,
          untype_pattern(match[2]),
          untype_class_expr(match[4])];
       
      case 3:
       var
        desc=
         /* Pcl_apply */[3,
          untype_class_expr(match[1]),
          List["fold_right"]
           (function(param,list)
             {var expo=param[2];
              
              if(expo)
               {return /* :: */[0,
                        /* tuple */[0,param[1],untype_expression(expo[1])],
                        list];
                }
              else
               {return list;}
              },
            match[2],
            0)];
       
      case 4:
       var
        desc=
         /* Pcl_let */[4,
          match[1],
          List["map"](untype_binding,match[2]),
          untype_class_expr(match[4])];
       
      case 5:
       var cl=match[1];
       
       var match$1=cl[1];
       
       var exit;
       
       switch(match$1)
        {case 0:
          if(match[2])
           {exit=20;}
          else
           {var
             desc=
              /* Pcl_constr */[0,
               match$1[2],
               List["map"](untype_core_type,match$1[3])];
            }
          
         default:exit=20;}
       
       switch(exit)
        {case 20:
          var match$2=match[2];
          
          if(match$2)
           {var
             desc=
              /* Pcl_constraint */[5,
               untype_class_expr(cl),
               untype_class_type(match$2[1])];
            }
          else
           {throw [0,Assert_failure,[0,"untypeast.ml",520,43]];}
          
         }
       
      }
    
    return /* record */[0,desc,cexpr[2],cexpr[5]];
    };

var
 untype_class_type=
  function(ct)
   {var match=ct[1];
    
    switch(match)
     {case 0:
       var
        desc=
         /* Pcty_constr */[0,match[2],List["map"](untype_core_type,match[3])];
       
      case 1:
       var desc=/* Pcty_signature */[1,untype_class_signature(match[1])];
      case 2:
       var
        desc=
         /* Pcty_arrow */[2,
          match[1],
          untype_core_type(match[2]),
          untype_class_type(match[3])];
       
      }
    
    return /* record */[0,desc,ct[4],ct[5]];
    };

var
 untype_class_signature=
  function(cs)
   {return /* record */[0,
            untype_core_type(cs[1]),
            List["map"](untype_class_type_field,cs[2])];
    };

var
 untype_class_type_field=
  function(ctf)
   {var match=ctf[1];
    
    switch(match)
     {case 0:var desc=/* Pctf_inherit */[0,untype_class_type(match[1])];
      case 1:
       var match$1=match[1];
       
       var
        desc=
         /* Pctf_val */[1,
          /* tuple */[0,
           match$1[1],
           match$1[2],
           match$1[3],
           untype_core_type(match$1[4])]];
       
      case 2:
       var match$2=match[1];
       
       var
        desc=
         /* Pctf_method */[2,
          /* tuple */[0,
           match$2[1],
           match$2[2],
           match$2[3],
           untype_core_type(match$2[4])]];
       
      case 3:
       var match$3=match[1];
       
       var
        desc=
         /* Pctf_constraint */[3,
          /* tuple */[0,
           untype_core_type(match$3[1]),
           untype_core_type(match$3[2])]];
       
      case 4:var desc=/* Pctf_attribute */[4,match[1]];
      }
    
    return /* record */[0,desc,ctf[2],ctf[3]];
    };

var
 untype_core_type=
  function(ct)
   {var match=ct[1];
    
    if(typeof match=="number")
     {switch(match){case 0:var desc=0;}}
    else
     {switch(match[0])
       {case 0:var desc=/* Ptyp_var */[0,match[1]];
        case 1:
         var
          desc=
           /* Ptyp_arrow */[1,
            match[1],
            untype_core_type(match[2]),
            untype_core_type(match[3])];
         
        case 2:
         var desc=/* Ptyp_tuple */[2,List["map"](untype_core_type,match[1])];
        case 3:
         var
          desc=
           /* Ptyp_constr */[3,
            match[2],
            List["map"](untype_core_type,match[3])];
         
        case 4:
         var
          desc=
           /* Ptyp_object */[4,
            List["map"]
             (function(param)
               {return /* tuple */[0,
                        param[1],
                        param[2],
                        untype_core_type(param[3])];
                },
              match[1]),
            match[2]];
         
        case 5:
         var
          desc=
           /* Ptyp_class */[5,match[2],List["map"](untype_core_type,match[3])];
         
        case 6:
         var desc=/* Ptyp_alias */[6,untype_core_type(match[1]),match[2]];
        case 7:
         var
          desc=
           /* Ptyp_variant */[7,
            List["map"](untype_row_field,match[1]),
            match[2],
            match[3]];
         
        case 8:
         var desc=/* Ptyp_poly */[8,match[1],untype_core_type(match[2])];
        case 9:var desc=/* Ptyp_package */[9,untype_package_type(match[1])];
        }}
    
    return Ast_helper["Typ"][1](/* Some */[0,ct[4]],0,desc);
    };

var
 untype_class_structure=
  function(cs)
   {var
     remove_self=
      function(p)
       {var match=p[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:
             if(string_is_prefix("selfpat-",match[2][2]))
              {return remove_self(match[1]);}
             else
              {exit=25;}
             
            default:exit=25;}}
        
        switch(exit){case 25:return p;}
        };
    
    return /* record */[0,
            untype_pattern(remove_self(cs[1])),
            List["map"](untype_class_field,cs[2])];
    };

var
 untype_row_field=
  function(rf)
   {switch(rf)
     {case 0:
       return /* Rtag */[0,
               rf[1],
               rf[2],
               rf[3],
               List["map"](untype_core_type,rf[4])];
       
      case 1:return /* Rinherit */[1,untype_core_type(rf[1])];
      }
    };

var
 is_self_pat=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return string_is_prefix("self-",Ident["name"](match[2]));
        default:exit=26;}}
    
    switch(exit){case 26:return 0;}
    };

var
 untype_class_field=
  function(cf)
   {var match=cf[1];
    
    switch(match)
     {case 0:
       var
        desc=
         /* Pcf_inherit */[0,match[1],untype_class_expr(match[2]),match[3]];
       
      case 1:
       var match$1=match[4];
       
       var mut=match[2];
       
       var lab=match[1];
       
       switch(match$1)
        {case 0:
          var
           desc=
            /* Pcf_val */[1,
             /* tuple */[0,
              lab,
              mut,
              /* Cfk_virtual */[0,untype_core_type(match$1[1])]]];
          
         case 1:
          var
           desc=
            /* Pcf_val */[1,
             /* tuple */[0,
              lab,
              mut,
              /* Cfk_concrete */[1,match$1[1],untype_expression(match$1[2])]]];
          
         }
       
      case 2:
       var match$2=match[3];
       
       var priv=match[2];
       
       var lab$1=match[1];
       
       switch(match$2)
        {case 0:
          var
           desc=
            /* Pcf_method */[2,
             /* tuple */[0,
              lab$1,
              priv,
              /* Cfk_virtual */[0,untype_core_type(match$2[1])]]];
          
         case 1:
          var
           remove_fun_self=
            function(e)
             {var match$3=e[1];
              
              var exit;
              
              switch(match$3)
               {case 3:
                 switch(match$3[1])
                  {case "":
                    var match$4=match$3[2];
                    
                    if(match$4)
                     {if(match$4[2])
                       {exit=28;}
                      else
                       {var $$case=match$4[1];
                        
                        if(is_self_pat($$case[1])&&($$case[2]=0))
                         {return $$case[3];}
                        else
                         {exit=28;}
                        }
                      }
                    else
                     {exit=28;}
                    
                   default:exit=28;}
                 
                default:exit=28;}
              
              switch(exit){case 28:return e;}
              };
          
          var exp=remove_fun_self(match$2[2]);
          
          var
           desc=
            /* Pcf_method */[2,
             /* tuple */[0,
              lab$1,
              priv,
              /* Cfk_concrete */[1,match$2[1],untype_expression(exp)]]];
          
         }
       
      case 3:
       var
        desc=
         /* Pcf_constraint */[3,
          /* tuple */[0,untype_core_type(match[1]),untype_core_type(match[2])]];
       
      case 4:
       var
        remove_fun_self$1=
         function(e)
          {var match$3=e[1];
           
           var exit;
           
           switch(match$3)
            {case 3:
              switch(match$3[1])
               {case "":
                 var match$4=match$3[2];
                 
                 if(match$4)
                  {if(match$4[2])
                    {exit=31;}
                   else
                    {var $$case=match$4[1];
                     
                     if(is_self_pat($$case[1])&&($$case[2]=0))
                      {return $$case[3];}
                     else
                      {exit=31;}
                     }
                   }
                 else
                  {exit=31;}
                 
                default:exit=31;}
              
             default:exit=31;}
           
           switch(exit){case 31:return e;}
           };
       
       var exp$1=remove_fun_self$1(match[1]);
       
       var desc=/* Pcf_initializer */[4,untype_expression(exp$1)];
       
      case 5:var desc=/* Pcf_attribute */[5,match[1]];
      }
    
    return /* record */[0,desc,cf[2],cf[3]];
    };

module["exports"]=
{"untype_structure":untype_structure,
 "untype_signature":untype_signature,
 "untype_expression":untype_expression,
 "untype_type_declaration":untype_type_declaration,
 "untype_module_type":untype_module_type,
 "lident_of_path":lident_of_path};

