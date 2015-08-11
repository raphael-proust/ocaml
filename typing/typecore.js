// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var $$String=require("String");
var Char=require("Char");
var Printtyp=require("Printtyp");
var Typedtree=require("Typedtree");
var Warnings=require("Warnings");
var CamlinternalFormat=require("CamlinternalFormat");
var List=require("List");
var Btype=require("Btype");
var Pervasives=require("Pervasives");
var Predef=require("Predef");
var Env=require("Env");
var Cmt_format=require("Cmt_format");
var Clflags=require("Clflags");
var Types=require("Types");
var Typetexp=require("Typetexp");
var Syntaxerr=require("Syntaxerr");
var Format=require("Format");
var Misc=require("Misc");
var Path=require("Path");
var Parmatch=require("Parmatch");
var Oprint=require("Oprint");
var Subst=require("Subst");
var Longident=require("Longident");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Stypes=require("Stypes");
var $$Array=require("Array");
var Ast_helper=require("Ast_helper");


var $$Error="unknown primitive:caml_set_oo_id";

var Error_forward="unknown primitive:caml_set_oo_id";

var
 type_module=
  [0,
   function(env,md){throw [0,Assert_failure,[0,"typing/typecore.ml",77,22]];}];

var
 type_open=
  [0,
   function(param){throw [0,Assert_failure,[0,"typing/typecore.ml",83,16]];}];

var
 type_package=
  [0,
   function(param){throw [0,Assert_failure,[0,"typing/typecore.ml",88,16]];}];

var
 type_object=
  [0,
   function(env,s){throw [0,Assert_failure,[0,"typing/typecore.ml",92,20]];}];

var
 re=
  function(node)
   {Cmt_format["add_saved_type"](/* Partial_expression */[2,node]);
    Stypes["record"](/* Ti_expr */[1,node]);
    return node;
    };

var
 rp=
  function(node)
   {Cmt_format["add_saved_type"](/* Partial_pattern */[3,node]);
    Stypes["record"](/* Ti_pat */[0,node]);
    return node;
    };

var fst3=function(param){return param[1];};

var snd3=function(param){return param[2];};

var $$case=function(lhs,rhs){return /* record */[0,lhs,0,rhs];};

var
 iter_expression=
  function(f,e)
   {var
     expr=
      function(e$1)
       {f(e$1);
        var match=e$1[1];
        
        var exit;
        
        switch(match)
         {case 0:exit=783;
          case 1:exit=783;
          case 2:expr(match[3]);return List["iter"](binding,match[2]);
          case 3:return List["iter"]($$case$1,match[1]);
          case 4:Misc["may"](expr,match[2]);return expr(match[4]);
          case 5:
           expr(match[1]);
           return List["iter"]
                   (function(param){return expr(param[2]);},match[2]);
           
          case 6:exit=789;
          case 7:exit=789;
          case 8:exit=790;
          case 9:exit=791;
          case 10:exit=791;
          case 11:
           Misc["may"](expr,match[2]);
           return List["iter"]
                   (function(param){return expr(param[2]);},match[1]);
           
          case 13:var e1=match[1];var e2=match[3];exit=788;
          case 14:exit=790;
          case 15:
           expr(match[1]);expr(match[2]);return Misc["may"](expr,match[3]);
          case 16:exit=793;
          case 17:exit=793;
          case 18:expr(match[2]);expr(match[3]);return expr(match[5]);
          case 22:exit=783;
          case 23:exit=794;
          case 24:
           return List["iter"]
                   (function(param){return expr(param[2]);},match[1]);
           
          case 25:expr(match[3]);return module_expr(match[2]);
          case 29:return List["iter"](class_field,match[1][2]);
          case 30:exit=794;
          case 31:return module_expr(match[1]);
          case 32:var e$2=match[3];exit=787;
          case 33:exit=783;
          default:var e$2=match[1];exit=787;}
        
        switch(exit)
         {case 789:expr(match[1]);return List["iter"]($$case$1,match[2]);
          case 790:return List["iter"](expr,match[1]);
          case 791:return Misc["may"](expr,match[2]);
          case 793:
           "unknown block:(exit 788 (field 0 match/5282) (field 1 match/5282))";
           
          case 794:"unknown block:(exit 787 (field 1 match/5282))";
          case 783:return 0;
          case 787:return expr(e$2);
          case 788:expr(e1);return expr(e2);
          }
        };
    
    var
     $$case$1=
      function(param){Misc["may"](expr,param[2]);return expr(param[3]);};
    
    var binding=function(x){return expr(x[2]);};
    
    var
     module_expr=
      function(me)
       {var match=me[1];
        
        var exit;
        
        switch(match)
         {case 0:exit=795;
          case 1:return List["iter"](structure_item,match[1]);
          case 2:var me$1=match[3];exit=796;
          case 3:module_expr(match[1]);return module_expr(match[2]);
          case 4:var me$1=match[1];exit=796;
          case 5:return expr(match[1]);
          case 6:exit=795;
          }
        
        switch(exit){case 795:return 0;case 796:return module_expr(me$1);}
        };
    
    var
     structure_item=
      function(str)
       {var match=str[1];
        
        var exit;
        
        switch(match)
         {case 0:return expr(match[1]);
          case 1:return List["iter"](binding,match[2]);
          case 6:var me=match[1][2];exit=798;
          case 7:
           return List["iter"]
                   (function(x){return module_expr(x[2]);},match[1]);
           
          case 10:
           return List["iter"](function(c){return class_expr(c[4]);},match[1]);
           
          case 12:var me=match[1][1];exit=798;
          default:return 0;}
        
        switch(exit){case 798:return module_expr(me);}
        };
    
    var
     class_expr=
      function(ce)
       {var match=ce[1];
        
        var exit;
        
        switch(match)
         {case 0:exit=799;
          case 1:return List["iter"](class_field,match[1][2]);
          case 2:Misc["may"](expr,match[2]);return class_expr(match[4]);
          case 3:
           class_expr(match[1]);
           return List["iter"]
                   (function(param){return expr(param[2]);},match[2]);
           
          case 4:List["iter"](binding,match[2]);return class_expr(match[3]);
          case 5:return class_expr(match[1]);
          case 6:exit=799;
          }
        
        switch(exit){case 799:return 0;}
        };
    
    var
     class_field=
      function(cf)
       {var match=cf[1];
        
        var exit;
        
        switch(match)
         {case 0:return class_expr(match[2]);
          case 1:exit=803;
          case 2:exit=803;
          case 3:exit=800;
          case 4:return expr(match[1]);
          case 5:exit=802;
          case 6:exit=802;
          }
        
        switch(exit)
         {case 803:
           var match$1=match[1][3];
           
           switch(match$1)
            {case 0:"unknown block:(exit 800)";
             case 1:return expr(match$1[2]);
             }
           
          case 800:return 0;
          case 802:return 0;
          }
        };
    
    return expr(e);
    };

var
 all_idents_cases=
  function(el)
   {var idents=Hashtbl["create"](0,8);
    
    var
     f=
      function(param)
       {var match=param[1];
        
        var exit;
        
        switch(match)
         {case 0:
           var match$1=match[1][1];
           
           switch(match$1)
            {case 0:return Hashtbl["replace"](idents,match$1[1],0);
             case 1:exit=779;
             case 2:exit=779;
             }
           
          default:exit=779;}
        
        switch(exit){case 779:return 0;}
        };
    
    List["iter"]
     (function(cp)
       {Misc["may"](iter_expression(f),cp[2]);
        return iter_expression(f,cp[3]);
        },
      el);
    return Hashtbl["fold"]
            (function(x,param,rest){return /* :: */[0,x,rest];},idents,0);
    };

var
 type_constant=
  function(param)
   {switch(param)
     {case 0:return Ctype["instance_def"](Predef["type_int"]);
      case 1:return Ctype["instance_def"](Predef["type_char"]);
      case 2:return Ctype["instance_def"](Predef["type_string"]);
      case 3:return Ctype["instance_def"](Predef["type_float"]);
      case 4:return Ctype["instance_def"](Predef["type_int32"]);
      case 5:return Ctype["instance_def"](Predef["type_int64"]);
      case 6:return Ctype["instance_def"](Predef["type_nativeint"]);
      }
    };

var
 type_option=
  function(ty)
   {return Ctype["newty"]
            (/* Tconstr */[3,Predef["path_option"],/* :: */[0,ty,0],[0,0]]);
    };

var
 mkexp=
  function(exp_desc,exp_type,exp_loc,exp_env)
   {return /* record */[0,exp_desc,exp_loc,0,exp_type,exp_env,0];};

var
 option_none=
  function(ty,loc)
   {var lid=[0,"None"];
    
    var env=Env["initial_safe_string"];
    
    var cnone=Env["lookup_constructor"](lid,env);
    
    return mkexp
            (/* Texp_construct */[8,Typedtree["mknoloc"](lid),cnone,0],
             ty,
             loc,
             env);
    };

var
 option_some=
  function(texp)
   {var lid=[0,"Some"];
    
    var csome=Env["lookup_constructor"](lid,Env["initial_safe_string"]);
    
    return mkexp
            (/* Texp_construct */[8,
              Typedtree["mknoloc"](lid),
              csome,
              /* :: */[0,texp,0]],
             type_option(texp[4]),
             texp[2],
             texp[5]);
    };

var
 extract_option_type=
  function(env,ty)
   {var match=Ctype["expand_head"](env,ty);
    
    var match$1=match[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         var match$2=match$1[2];
         
         if(match$2)
          {if(match$2[2])
            {exit=767;}
           else
            {if(Path["same"](match$1[1],Predef["path_option"]))
              {return match$2[1];}
             else
              {exit=767;}
             }
           }
         else
          {exit=767;}
         
        default:exit=767;}}
    
    switch(exit)
     {case 767:throw [0,Assert_failure,[0,"typing/typecore.ml",275,9]];}
    };

var
 extract_concrete_record=
  function(env,ty)
   {var match=Ctype["extract_concrete_typedecl"](env,ty);
    
    var match$1=match[3][3];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:return /* tuple */[0,match[1],match[2],match$1[1]];
        default:exit=764;}}
    
    switch(exit){case 764:throw Not_found;}
    };

var
 extract_concrete_variant=
  function(env,ty)
   {var match=Ctype["extract_concrete_typedecl"](env,ty);
    
    var match$1=match[3][3];
    
    var p=match[2];
    
    var p0=match[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){case 0:exit=762;case 1:return /* tuple */[0,p0,p,0];}}
    else
     {switch(match$1[0])
       {case 0:exit=762;case 1:return /* tuple */[0,p0,p,match$1[1]];}}
    
    switch(exit){case 762:throw Not_found;}
    };

var
 extract_label_names=
  function(sexp,env,ty)
   {try
     {var match=extract_concrete_record(env,ty);
      
      return List["map"](function(l){return l[1];},match[3]);
      }
    catch(exn)
     {if(exn=Not_found)
       {throw [0,Assert_failure,[0,"typing/typecore.ml",293,4]];}
      else
       {throw exn;}
      }
    };

var
 explicit_arity=
  List["exists"]
   (function(param)
     {var exit;
      
      switch(param[1][1])
       {case "explicit_arity":exit=756;
        case "ocaml.explicit_arity":exit=756;
        default:exit=757;}
      
      switch(exit){case 757:return 0;case 756:return 1;}
      });

var
 unify_pat_types=
  function(loc,env,ty,ty$prime)
   {try
     {return Ctype["unify"](env,ty,ty$prime);}
    catch(exn)
     {if(exn[1]=Ctype["Unify"])
       {throw [0,$$Error,loc,env,/* Pattern_type_clash */[3,exn[2]]];}
      else
       {if(exn[1]=Ctype["Tags"])
         {throw [0,
                 Typetexp["Error"],
                 loc,
                 env,
                 /* Variant_tags */[12,exn[2],exn[3]]];
          }
        else
         {throw exn;}
        }
      }
    };

var
 unify_exp_types=
  function(loc,env,ty,expected_ty)
   {try
     {return Ctype["unify"](env,ty,expected_ty);}
    catch(exn)
     {if(exn[1]=Ctype["Unify"])
       {throw [0,$$Error,loc,env,/* Expr_type_clash */[7,exn[2]]];}
      else
       {if(exn[1]=Ctype["Tags"])
         {throw [0,
                 Typetexp["Error"],
                 loc,
                 env,
                 /* Variant_tags */[12,exn[2],exn[3]]];
          }
        else
         {throw exn;}
        }
      }
    };

var newtype_level=[0,0];

var
 get_newtype_level=
  function(param)
   {var match=newtype_level[1];
    
    if(match)
     {return match[1];}
    else
     {throw [0,Assert_failure,[0,"typing/typecore.ml",331,12]];}
    };

var
 unify_pat_types_gadt=
  function(loc,env,ty,ty$prime)
   {var match=newtype_level[1];
    
    if(match)
     {var newtype_level$1=match[1];}
    else
     {throw [0,Assert_failure,[0,"typing/typecore.ml",336,14]];}
    
    try
     {return Ctype["unify_gadt"](newtype_level$1,env,ty,ty$prime);}
    catch(exn)
     {if(exn[1]=Ctype["Unify"])
       {throw [0,$$Error,loc,env[1],/* Pattern_type_clash */[3,exn[2]]];}
      else
       {if(exn[1]=Ctype["Tags"])
         {throw [0,
                 Typetexp["Error"],
                 loc,
                 env[1],
                 /* Variant_tags */[12,exn[2],exn[3]]];
          }
        else
         {if(exn[1]=Ctype["Unification_recursive_abbrev"])
           {throw [0,
                   $$Error,
                   loc,
                   env[1],
                   /* Recursive_local_constraint */[33,exn[2]]];
            }
          else
           {throw exn;}
          }
        }
      }
    };

var
 unify_pat=
  function(env,pat,expected_ty)
   {return unify_pat_types(pat[2],env,pat[4],expected_ty);};

var
 finalize_variant=
  function(pat)
   {var match=pat[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 5:
         var opat=match[2];
         
         var match$1=Ctype["expand_head"](pat[5],pat[4]);
         
         var match$2=match$1[1];
         
         var exit$1;
         
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 8:
              var row=match$2[1];
              
              match[3][1]=row,0;
              var row$1=Btype["row_repr"](row);
              
             default:exit$1=738;}}
         
         switch(exit$1)
          {case 738:throw [0,Assert_failure,[0,"typing/typecore.ml",362,15]];}
         
         var match$3=Btype["row_field"](match[1],row$1);
         
         var exit$2;
         
         if(typeof match$3=="number")
          {switch(match$3){case 0:return 0;}}
         else
          {switch(match$3[0])
            {case 0:exit$2=736;
             case 1:
              var c=match$3[1];
              
              var exit$3;
              
              if(c!=0)
               {if(match$3[2])
                 {exit$3=737;}
                else
                 {if(!row$1[4])
                   {return Btype["set_row_field"](match$3[4],[0,0]);}
                  else
                   {exit$3=737;}
                  }
                }
              else
               {var match$4=match$3[2];
                
                if(match$4)
                 {if(!row$1[4])
                   {var ty=match$4[1];
                    
                    Btype["set_row_field"]
                     (match$3[4],/* Rpresent */[0,/* Some */[0,ty]]);
                    if(opat)
                     {var pat$1=opat[1];
                      
                      return List["iter"]
                              (unify_pat(pat$1[5],pat$1),/* :: */[0,ty,match$4[2]]);
                      }
                    else
                     {throw [0,Assert_failure,[0,"typing/typecore.ml",370,40]];}
                    }
                  else
                   {exit$3=737;}
                  }
                else
                 {exit$3=737;}
                }
              
              switch(exit$3)
               {case 737:
                 if(match$3[3]!=0)
                  {if(!Btype["row_fixed"](row$1))
                    {return Btype["set_row_field"]
                             (match$3[4],/* Reither */[1,c,0,0,[0,0]]);
                     }
                   else
                    {exit$2=736;}
                   }
                 else
                  {exit$2=736;}
                 
                }
              
             }}
         
         switch(exit$2){case 736:return 0;}
         
        default:exit=740;}}
    
    switch(exit){case 740:return 0;}
    };

var
 iter_pattern=
  function(f,p)
   {f(p);return Typedtree["iter_pattern_desc"](iter_pattern(f),p[1]);};

var
 has_variants=
  function(p)
   {try
     {iter_pattern
       (function(param)
         {var exit;
          
          var $js=param[1];
          if(typeof $js=="number")
           {switch($js){}}
          else
           {switch($js[0]){case 5:throw Pervasives["Exit"];default:exit=734;}}
          
          switch(exit){case 734:return 0;}
          },
        p);
      return 0;
      }
    catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
    };

var pattern_variables=[0,0];

var pattern_force=[0,0];

var pattern_scope=[0,0];

var allow_modules=[0,0];

var module_variables=[0,0];

var
 reset_pattern=
  function(scope,allow)
   {pattern_variables[1]=0,0;
    pattern_force[1]=0,0;
    pattern_scope[1]=scope,0;
    allow_modules[1]=allow,0;
    return module_variables[1]=0,0;
    };

var
 enter_variable=
  function($staropt$star,$staropt$star$1,loc,name,ty)
   {if($staropt$star){var is_module=$staropt$star[1];}else{var is_module=0;}
    
    if($staropt$star$1)
     {var is_as_variable=$staropt$star$1[1];}
    else
     {var is_as_variable=0;}
    
    if
     (List["exists"]
       (function(param){return "unknown primitive:caml_string_equal";},
        pattern_variables[1]))
     {throw [0,
             $$Error,
             loc,
             Env["empty"],
             /* Multiply_bound_variable */[5,name[1]]];
      }
    else
     {}
    
    var id=Ident["create"](name[1]);
    
    pattern_variables[1]=
    /* :: */[0,
     /* tuple */[0,id,ty,name,loc,is_as_variable],
     pattern_variables[1]],
    0;
    if(is_module)
     {if(!allow_modules[1]){throw [0,$$Error,loc,Env["empty"],2];}else{}
      
      module_variables[1]=
      /* :: */[0,/* tuple */[0,name,loc],module_variables[1]],
      0}
    else
     {Misc["may"]
       (function(s)
         {return Stypes["record"](/* An_ident */[5,name[2],name[1],s]);},
        pattern_scope[1])}
    
    return id;
    };

var
 sort_pattern_variables=
  function(vs)
   {return List["sort"]
            (function(param,param$1)
              {return "unknown primitive:caml_string_compare";},
             vs);
    };

var
 enter_orpat_variables=
  function(loc,env,p1_vs,p2_vs)
   {var p1_vs$1=sort_pattern_variables(p1_vs);
    
    var p2_vs$1=sort_pattern_variables(p2_vs);
    
    var
     unify_vars=
      function(p1_vs$2,p2_vs$2)
       {if(p1_vs$2)
         {var match=p1_vs$2[1];
          
          var x1=match[1];
          
          if(p2_vs$2)
           {var rem2=p2_vs$2[2];
            
            var match$1=p2_vs$2[1];
            
            var x2=match$1[1];
            
            var rem1=p1_vs$2[2];
            
            if(Ident["equal"](x1,x2))
             {if(x1=x2)
               {return unify_vars(rem1,rem2);}
              else
               {try
                 {Ctype["unify"](env,match[2],match$1[2])}
                catch(exn)
                 {if(exn[1]=Ctype["Unify"])
                   {throw [0,
                           $$Error,
                           loc,
                           env,
                           /* Or_pattern_type_clash */[4,x1,exn[2]]];
                    }
                  else
                   {throw exn;}
                  }
                
                return /* :: */[0,/* tuple */[0,x2,x1],unify_vars(rem1,rem2)];
                }
              }
            else
             {if("unknown primitive:caml_string_lessthan")
               {var min_var=x1;}
              else
               {var min_var=x2;}
              
              throw [0,$$Error,loc,env,/* Orpat_vars */[6,min_var]];
              }
            }
          else
           {throw [0,$$Error,loc,env,/* Orpat_vars */[6,x1]];}
          }
        else
         {if(p2_vs$2)
           {throw [0,$$Error,loc,env,/* Orpat_vars */[6,p2_vs$2[1][1]]];}
          else
           {return 0;}
          }
        };
    
    return unify_vars(p1_vs$1,p2_vs$1);
    };

var
 build_as_type=
  function(env,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return build_as_type(env,match[1]);
        case 3:
         var tyl=List["map"](build_as_type(env),match[1]);
         
         return Ctype["newty"](/* Ttuple */[2,tyl]);
         
        case 4:
         var pl=match[3];
         
         var cstr=match[2];
         
         var keep=(cstr[11]=0)||cstr[3]!=0;
         
         if(keep)
          {return p[4];}
         else
          {var tyl$1=List["map"](build_as_type(env),pl);
           
           var match$1=Ctype["instance_constructor"](0,cstr);
           
           List["iter2"]
            (function(param)
              {var newrecord="unknown primitive:duprecord regular 6";
               
               return unify_pat(env,(newrecord[4]=param[2],0,newrecord));
               },
             List["combine"](pl,tyl$1),
             match$1[1]);
           return match$1[2];
           }
         
        case 5:
         var ty=Misc["may_map"](build_as_type(env),match[2]);
         
         return Ctype["newty"]
                 (/* Tvariant */[8,
                   /* record */[0,
                    /* :: */[0,/* tuple */[0,match[1],/* Rpresent */[0,ty]],0],
                    Ctype["newvar"](0,0),
                    0,
                    0,
                    0,
                    0]]);
         
        case 6:
         var lpl=match[1];
         
         var lbl=snd3(List["hd"](lpl));
         
         if(lbl[8]=0)
          {return p[4];}
         else
          {var ty$1=Ctype["newvar"](0,0);
           
           var
            ppl=
             List["map"]
              (function(param){return /* tuple */[0,param[2][5],param[3]];},
               lpl);
           
           var
            do_label=
             function(lbl$1)
              {var match$2=Ctype["instance_label"](0,lbl$1);
               
               var ty_arg=match$2[2];
               
               var newrecord="unknown primitive:duprecord regular 6";
               
               unify_pat(env,(newrecord[4]=ty$1,0,newrecord),match$2[3]);
               var match$3=Ctype["repr"](lbl$1[3])[1];
               
               var exit$1;
               
               var $js;
               if(typeof match$3=="number")
                {switch(match$3){}}
               else
                {switch(match$3[0]){case 10:$js=0;default:exit$1=706;}}
               
               var $js$1;
               switch(exit$1){case 706:$js$1=1;}
               var
                refinable=
                 (lbl$1[4]=0)&&List["mem_assoc"](lbl$1[5],ppl)&&$js$1;
               
               if(refinable)
                {var arg=List["assoc"](lbl$1[5],ppl);
                 
                 var newrecord$1="unknown primitive:duprecord regular 6";
                 
                 return unify_pat
                         (env,
                          (newrecord$1[4]=build_as_type(env,arg),0,newrecord$1),
                          ty_arg);
                 }
               else
                {var match$4=Ctype["instance_label"](0,lbl$1);
                 
                 Ctype["unify"](env,ty_arg,match$4[2]);
                 return unify_pat(env,p,match$4[3]);
                 }
               };
           
           $$Array["iter"](do_label,lbl[6]);
           return ty$1;
           }
         
        case 8:
         var row=match[3];
         
         var p2=match[2];
         
         if(row)
          {var row$1=Btype["row_repr"](row[1]);
           
           return Ctype["newty"]
                   (/* Tvariant */[8,
                     /* record */[0,
                      row$1[1],
                      Ctype["newvar"](0,0),
                      row$1[3],
                      0,
                      row$1[5],
                      row$1[6]]]);
           }
         else
          {var ty1=build_as_type(env,match[1]);
           
           var ty2=build_as_type(env,p2);
           
           var newrecord="unknown primitive:duprecord regular 6";
           
           unify_pat(env,(newrecord[4]=ty2,0,newrecord),ty1);
           return ty1;
           }
         
        default:exit=716;}}
    
    switch(exit){case 716:return p[4];}
    };

var
 build_or_pat=
  function(env,loc,lid)
   {var match=Typetexp["find_type"](env,loc,lid);
    
    var path=match[1];
    
    var
     tyl=
      List["map"](function(param){return Ctype["newvar"](0,0);},match[2][1]);
    
    var
     ty=
      Ctype["expand_head"]
       (env,Ctype["newty"](/* Tconstr */[3,path,tyl,[0,0]]));
    
    var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 8:
         var row=match$1[1];
         
         if(Btype["static_row"](row)){var row0=row;}else{exit=693;}
         
        default:exit=693;}}
    
    switch(exit)
     {case 693:throw [0,$$Error,loc,env,/* Not_a_variant_type */[30,lid]];}
    
    var
     match$2=
      List["fold_left"]
       (function(param,param$1)
         {var l=param$1[1];
          
          var fields=param[2];
          
          var pats=param[1];
          
          var match$3=Btype["row_field_repr"](param$1[2]);
          
          var exit$1;
          
          if(typeof match$3=="number")
           {switch(match$3){case 0:exit$1=691;}}
          else
           {switch(match$3[0])
             {case 0:
               var match$4=match$3[1];
               
               if(match$4)
                {var ty$1=match$4[1];
                 
                 return /* tuple */[0,
                         /* :: */[0,
                          /* tuple */[0,
                           l,
                           /* Some */[0,
                            /* record */[0,0,Location["none"],0,ty$1,env,0]]],
                          pats],
                         /* :: */[0,
                          /* tuple */[0,
                           l,
                           /* Reither */[1,0,/* :: */[0,ty$1,0],1,[0,0]]],
                          fields]];
                 }
               else
                {return /* tuple */[0,
                         /* :: */[0,/* tuple */[0,l,0],pats],
                         /* :: */[0,
                          /* tuple */[0,l,/* Reither */[1,1,0,1,[0,0]]],
                          fields]];
                 }
               
              case 1:exit$1=691;
              }}
          
          switch(exit$1){case 691:return /* tuple */[0,pats,fields];}
          },
        [0,0,0],
        Btype["row_repr"](row0)[1]);
    
    var
     row$1=
      /* record */[0,
       List["rev"](match$2[2]),
       Ctype["newvar"](0,0),
       0,
       0,
       0,
       /* Some */[0,/* tuple */[0,path,tyl]]];
    
    var ty$1=Ctype["newty"](/* Tvariant */[8,row$1]);
    
    var gloc=/* record */[0,loc[1],loc[2],1];
    
    var newrecord="unknown primitive:duprecord regular 6";
    
    var row$prime=[0,(newrecord[2]=Ctype["newvar"](0,0),0,newrecord)];
    
    var
     pats=
      List["map"]
       (function(param)
         {return /* record */[0,
                  /* Tpat_variant */[5,param[1],param[2],row$prime],
                  gloc,
                  0,
                  ty$1,
                  env,
                  0];
          },
        match$2[1]);
    
    if(pats)
     {var
       r=
        List["fold_left"]
         (function(pat,pat0)
           {return /* record */[0,
                    /* Tpat_or */[8,pat0,pat,/* Some */[0,row0]],
                    gloc,
                    0,
                    ty$1,
                    env,
                    0];
            },
          pats[1],
          pats[2]);
      
      var newrecord$1="unknown primitive:duprecord regular 6";
      
      return /* tuple */[0,path,rp((newrecord$1[2]=loc,0,newrecord$1)),ty$1];
      }
    else
     {throw [0,$$Error,loc,env,/* Not_a_variant_type */[30,lid]];}
    };

var
 expand_path=
  function(env,p)
   {try
     {var decl=/* Some */[0,Env["find_type"](p,env)];}
    catch(exn){if(exn=Not_found){var decl=0;}else{throw exn;}}
    
    var exit;
    
    if(decl)
     {var match=decl[1][5];
      
      if(match)
       {var match$1=Ctype["repr"](match[1]);
        
        var match$2=match$1[1];
        
        var exit$1;
        
        if(typeof match$2=="number")
         {switch(match$2){}}
        else
         {switch(match$2[0])
           {case 3:return expand_path(env,match$2[1]);default:exit$1=680;}}
        
        switch(exit$1){case 680:return p;}
        }
      else
       {exit=682;}
      }
    else
     {exit=682;}
    
    switch(exit)
     {case 682:
       var p$prime=Env["normalize_path"](0,env,p);
       
       if(Path["same"](p,p$prime))
        {return p;}
       else
        {return expand_path(env,p$prime);}
       
      }
    };

var
 compare_type_path=
  function(env,tpath1,tpath2)
   {return Path["same"](expand_path(env,tpath1),expand_path(env,tpath2));};

var
 NameChoice=
  function(Name)
   {var
     get_type_path=
      function(env,d)
       {var match=Name[3](d)[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0]){case 3:return match[1];default:exit=677;}}
        
        switch(exit)
         {case 677:throw [0,Assert_failure,[0,"typing/typecore.ml",602,11]];}
        };
    
    var
     spellcheck=
      function(ppf,env,p,lid)
       {return Typetexp["spellcheck_simple"]
                (ppf,
                 Name[5],
                 function(d)
                  {if(compare_type_path(env,p,get_type_path(env,d)))
                    {return Name[2](d);}
                   else
                    {return "";}
                   },
                 env,
                 lid);
        };
    
    var
     lookup_from_type=
      function(env,tpath,lid)
       {var descrs=Name[4](Env["find_type_descrs"](tpath,env));
        
        Env["mark_type_used"]
         (env,Path["last"](tpath),Env["find_type"](tpath,env));
        var match=lid[1];
        
        var exit;
        
        switch(match)
         {case 0:
           var s=match[1];
           
           try
            {return List["find"]
                     (function(nd){return "unknown primitive:caml_string_equal";},
                      descrs);
             }
           catch(exn)
            {if(exn=Not_found)
              {throw [0,
                      $$Error,
                      lid[2],
                      env,
                      /* Wrong_name */[13,
                       "",
                       Ctype["newvar"](0,0),
                       Name[1],
                       tpath,
                       lid[1]]];
               }
             else
              {throw exn;}
             }
           
          case 1:exit=673;
          case 2:exit=673;
          }
        
        switch(exit){case 673:throw Not_found;}
        };
    
    var
     unique=
      function(eq,acc,param)
       {if(param)
         {var rem=param[2];
          
          var x=param[1];
          
          if(List["exists"](eq(x),acc))
           {return unique(eq,acc,rem);}
          else
           {return unique(eq,/* :: */[0,x,acc],rem);}
          }
        else
         {return List["rev"](acc);}
        };
    
    var
     ambiguous_types=
      function(env,lbl,others)
       {var tpath=get_type_path(env,lbl);
        
        var
         others$1=
          List["map"]
           (function(param){return get_type_path(env,param[1]);},others);
        
        var
         tpaths=
          unique(compare_type_path(env),/* :: */[0,tpath,0],others$1);
        
        var exit;
        
        if(tpaths){if(tpaths[2]){exit=667;}else{return 0;}}else{exit=667;}
        
        switch(exit)
         {case 667:return List["map"](Printtyp["string_of_path"],tpaths);}
        };
    
    var
     disambiguate_by_type=
      function(env,tpath,lbls)
       {var
         check_type=
          function(param)
           {var lbl_tpath=get_type_path(env,param[1]);
            
            return compare_type_path(env,tpath,lbl_tpath);
            };
        
        return List["find"](check_type,lbls);
        };
    
    var
     disambiguate=
      function($staropt$star,$staropt$star$1,scope,lid,env,opath,lbls)
       {if($staropt$star)
         {var warn=$staropt$star[1];}
        else
         {var warn=Location["prerr_warning"];}
        
        if($staropt$star$1)
         {var check_lk=$staropt$star$1[1];}
        else
         {var check_lk=function(param,param$1){return 0;};}
        
        if(scope){var scope$1=scope[1];}else{var scope$1=lbls;}
        
        if(opath)
         {var match=opath[1];
          
          var pr=match[3];
          
          var tpath=match[2];
          
          var
           warn_pr=
            function(param)
             {if("unknown primitive:caml_string_equal")
               {var kind="field";}
              else
               {var kind="constructor";}
              
              return warn
                      (lid[2],
                       /* Not_principal */[8,
                        Pervasives["^"]
                         ("this type-based ",Pervasives["^"](kind," disambiguation"))]);
              };
          
          try
           {var match$1=disambiguate_by_type(env,tpath,scope$1);
            
            var lbl=match$1[1];
            
            match$1[2](0);
            if(!pr)
             {if(lbls)
               {var lbl_tpath=get_type_path(env,lbls[1][1]);
                
                if(!compare_type_path(env,tpath,lbl_tpath))
                 {warn_pr(0)}
                else
                 {var paths=ambiguous_types(env,lbl,lbls[2]);
                  
                  if(paths!=0)
                   {warn
                     (lid[2],
                      /* Ambiguous_name */[24,
                       /* :: */[0,Longident["last"](lid[1]),0],
                       paths,
                       0])}
                  else
                   {}
                  }
                }
              else
               {warn_pr(0)}
              }
            else
             {}
            
            var lbl$1=lbl;
            }
          catch(exn)
           {if(exn=Not_found)
             {try
               {var lbl$2=lookup_from_type(env,tpath,lid);
                
                check_lk(tpath,lbl$2);
                var s=Printtyp["string_of_path"](tpath);
                
                warn
                 (lid[2],
                  /* Name_out_of_scope */[23,
                   s,
                   /* :: */[0,Longident["last"](lid[1]),0],
                   0]);
                if(!pr){warn_pr(0)}else{}
                
                var lbl$1=lbl$2;
                }
              catch(exn$1)
               {if(exn$1=Not_found)
                 {if(lbls=0)
                   {var lbl$1=Name[6](env,lid);}
                  else
                   {var tp=/* tuple */[0,match[1],expand_path(env,tpath)];
                    
                    var
                     tpl=
                      List["map"]
                       (function(param)
                         {var tp0=get_type_path(env,param[1]);
                          
                          var tp$1=expand_path(env,tp0);
                          
                          return /* tuple */[0,tp0,tp$1];
                          },
                        lbls);
                    
                    throw [0,
                           $$Error,
                           lid[2],
                           env,
                           /* Name_type_mismatch */[14,Name[1],lid[1],tp,tpl]];
                    }
                  }
                else
                 {throw exn$1;}
                }
              }
            else
             {throw exn;}
            }
          }
        else
         {if(lbls)
           {var match$2=lbls[1];
            
            var lbl$3=match$2[1];
            
            match$2[2](0);
            var paths$1=ambiguous_types(env,lbl$3,lbls[2]);
            
            if(paths$1!=0)
             {warn
               (lid[2],
                /* Ambiguous_name */[24,
                 /* :: */[0,Longident["last"](lid[1]),0],
                 paths$1,
                 0])}
            else
             {}
            
            var lbl$1=lbl$3;
            }
          else
           {var lbl$1=Name[6](env,lid);}
          }
        
        var exit;
        
        if(scope$1){if(scope$1[1][1]=lbl$1){}else{exit=644;}}else{exit=644;}
        
        switch(exit)
         {case 644:
           Location["prerr_warning"]
            (lid[2],/* Disambiguated_name */[25,Name[2](lbl$1)])
          }
        
        return lbl$1;
        };
    
    return [0,
            get_type_path,
            spellcheck,
            lookup_from_type,
            unique,
            ambiguous_types,
            disambiguate_by_type,
            disambiguate];
    };

var
 wrap_disambiguate=
  function(kind,ty,f,x)
   {try
     {return f(x);}
    catch(exn)
     {var exit;
      
      if(exn[1]=$$Error)
       {var match=exn[4];
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 13:
             throw [0,
                    $$Error,
                    exn[2],
                    exn[3],
                    /* Wrong_name */[13,kind,ty,match[3],match[4],match[5]]];
             
            default:exit=642;}}
        }
      else
       {exit=642;}
      
      switch(exit){case 642:throw exn;}
      }
    };

var type_kind="record";

var get_name=function(lbl){return lbl[1];};

var get_type=function(lbl){return lbl[2];};

var get_descrs=function(prim){return prim[2];};

var fold=Env["fold_labels"];

var unbound_name_error=Typetexp["unbound_label_error"];

var
 Label=
  NameChoice
   ([0,type_kind,get_name,get_type,get_descrs,fold,unbound_name_error]);

var
 disambiguate_label_by_ids=
  function(keep,env,closed,ids,labels)
   {var
     check_ids=
      function(param)
       {var lbls=Hashtbl["create"](0,8);
        
        $$Array["iter"]
         (function(lbl){return Hashtbl["add"](lbls,lbl[1],0);},param[1][6]);
        return List["for_all"](Hashtbl["mem"](lbls),ids);
        };
    
    var
     check_closed=
      function(param)
       {return !closed||(List["length"](ids)=param[1][6]["length"]);};
    
    var labels$prime=List["filter"](check_ids,labels);
    
    if(keep&&(labels$prime=0))
     {return /* tuple */[0,0,labels];}
    else
     {var labels$prime$prime=List["filter"](check_closed,labels$prime);
      
      if(keep&&(labels$prime$prime=0))
       {return /* tuple */[0,0,labels$prime];}
      else
       {return /* tuple */[0,1,labels$prime$prime];}
      }
    };

var
 disambiguate_lid_a_list=
  function(loc,closed,env,opath,lid_a_list)
   {var
     ids=
      List["map"]
       (function(param){return Longident["last"](param[1][1]);},lid_a_list);
    
    var w_pr=[0,0];
    
    var w_amb=[0,0];
    
    var w_scope=[0,0];
    
    var w_scope_ty=[0,""];
    
    var
     warn=
      function(loc$1,msg)
       {var exit;
        
        if(typeof msg=="number")
         {switch(msg){}}
        else
         {switch(msg[0])
           {case 8:return w_pr[1]=1,0;
            case 23:
             var match=msg[2];
             
             if(match)
              {if(match[2])
                {exit=622;}
               else
                {w_scope[1]=/* :: */[0,match[1],w_scope[1]],0;
                 return w_scope_ty[1]=msg[1],0;
                 }
               }
             else
              {exit=622;}
             
            case 24:
             var match$1=msg[1];
             
             if(match$1)
              {if(match$1[2])
                {exit=622;}
               else
                {return w_amb[1]=
                        /* :: */[0,/* tuple */[0,match$1[1],msg[2]],w_amb[1]],
                        0;
                 }
               }
             else
              {exit=622;}
             
            default:exit=622;}}
        
        switch(exit){case 622:return Location["prerr_warning"](loc$1,msg);}
        };
    
    var
     process_label=
      function(lid)
       {var scope=Typetexp["find_all_labels"](env,lid[2],lid[1]);
        
        if((opath=0)&&(scope=0))
         {Typetexp["unbound_label_error"](env,lid)}
        else
         {}
        
        var exit;
        
        if(opath)
         {if(opath[1][3]!=0){var match=/* tuple */[0,1,scope];}else{exit=618;}
          }
        else
         {exit=618;}
        
        switch(exit)
         {case 618:
           var match=disambiguate_label_by_ids(opath=0,env,closed,ids,scope);
          }
        
        var labels=match[2];
        
        if(match[1])
         {return Label[7]
                  (/* Some */[0,warn],
                   0,
                   /* Some */[0,scope],
                   lid,
                   env,
                   opath,
                   labels);
          }
        else
         {return List["hd"](labels)[1];}
        };
    
    var
     lbl_a_list=
      List["map"]
       (function(param)
         {var lid=param[1];
          
          return /* tuple */[0,lid,process_label(lid),param[2]];
          },
        lid_a_list);
    
    if(w_pr[1])
     {Location["prerr_warning"]
       (loc,[8,"this type-based record disambiguation"])}
    else
     {var amb=List["rev"](w_amb[1]);
      
      if(amb)
       {var
         paths=
          List["map"]
           (function(param){return Label[1](env,param[2]);},lbl_a_list);
        
        var path=List["hd"](paths);
        
        if(List["for_all"](compare_type_path(env,path),List["tl"](paths)))
         {Location["prerr_warning"]
           (loc,
            /* Ambiguous_name */[24,
             List["map"](function(prim){return prim[1];},amb),
             amb[1][2],
             1])}
        else
         {List["iter"]
           (function(param)
             {return Location["prerr_warning"]
                      (loc,
                       /* Ambiguous_name */[24,/* :: */[0,param[1],0],param[2],0]);
              },
            amb)}
        }
      else
       {}
      }
    
    if(w_scope[1]!=0)
     {Location["prerr_warning"]
       (loc,
        /* Name_out_of_scope */[23,w_scope_ty[1],List["rev"](w_scope[1]),1])}
    else
     {}
    
    return lbl_a_list;
    };

var
 find_record_qual=
  function(param)
   {if(param)
     {var match=param[1][1][1];
      
      var exit;
      
      switch(match)
       {case 0:exit=613;case 1:return /* Some */[0,match[1]];case 2:exit=613;}
      
      switch(exit){case 613:return find_record_qual(param[2]);}
      }
    else
     {return 0;}
    };

var
 type_label_a_list=
  function(labels,loc,closed,env,type_lbl_a,opath,lid_a_list)
   {var exit;
    
    if(lid_a_list)
     {var match=lid_a_list[1][1][1];
      
      switch(match)
       {case 0:
         if(labels)
          {var labels$1=labels[1];
           
           if(Hashtbl["mem"](labels$1,match[1]))
            {var
              lbl_a_list=
               List["map"]
                (function(param)
                  {var lid=param[1];
                   
                   var match$1=lid[1];
                   
                   var exit$1;
                   
                   switch(match$1)
                    {case 0:
                      return /* tuple */[0,
                              lid,
                              Hashtbl["find"](labels$1,match$1[1]),
                              param[2]];
                      
                     case 1:exit$1=607;
                     case 2:exit$1=607;
                     }
                   
                   switch(exit$1)
                    {case 607:
                      throw [0,Assert_failure,[0,"typing/typecore.ml",819,17]];
                     }
                   },
                 lid_a_list);
             }
           else
            {exit=610;}
           }
         else
          {exit=610;}
         
        case 1:exit=610;
        case 2:exit=610;
        }
      }
    else
     {exit=610;}
    
    switch(exit)
     {case 610:
       var match$1=find_record_qual(lid_a_list);
       
       if(match$1)
        {var modname=match$1[1];
         
         var
          lid_a_list$1=
           List["map"]
            (function(lid_a)
              {var lid=lid_a[1];
               
               var match$2=lid[1];
               
               var exit$1;
               
               switch(match$2)
                {case 0:
                  return /* tuple */[0,
                          /* record */[0,/* Ldot */[1,modname,match$2[1]],lid[2]],
                          lid_a[2]];
                  
                 case 1:exit$1=608;
                 case 2:exit$1=608;
                 }
               
               switch(exit$1){case 608:return lid_a;}
               },
             lid_a_list);
         }
       else
        {var lid_a_list$1=lid_a_list;}
       
       var
        lbl_a_list=
         disambiguate_lid_a_list(loc,closed,env,opath,lid_a_list$1);
       
      }
    
    var
     lbl_a_list$1=
      List["sort"]
       (function(param,param$1){return "unknown primitive:caml_int_compare";},
        lbl_a_list);
    
    return List["map"](type_lbl_a,lbl_a_list$1);
    };

var
 check_recordpat_labels=
  function(loc,lbl_pat_list,closed)
   {if(lbl_pat_list)
     {var all=lbl_pat_list[1][2][6];
      
      var defined="unknown primitive:caml_make_vect";
      
      var
       check_defined=
        function(param)
         {var label=param[2];
          
          if(defined[label[5]])
           {throw [0,
                   $$Error,
                   loc,
                   Env["empty"],
                   /* Label_multiply_defined */[10,label[1]]];
            }
          else
           {return defined[label[5]]=1,0;}
          };
      
      List["iter"](check_defined,lbl_pat_list);
      if((closed=0)&&Warnings["is_active"]([4,""]))
       {var $$undefined=0;
        
        for(var i=0;i<=all["length"]-1;i++)
         {if(!defined[i])
           {$$undefined=/* :: */[0,all[i][1],$$undefined];}
          else
           {}
          }
        
        if($$undefined!=0)
         {var u=$$String["concat"](", ",List["rev"]($$undefined));
          
          return Location["prerr_warning"]
                  (loc,/* Non_closed_record_pattern */[4,u]);
          }
        else
         {return 0;}
        }
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var type_kind$1="variant";

var get_name$1=function(cstr){return cstr[1];};

var get_type$1=function(cstr){return cstr[2];};

var get_descrs$1=function(prim){return prim[1];};

var fold$1=Env["fold_constructors"];

var unbound_name_error$1=Typetexp["unbound_constructor_error"];

var
 Constructor=
  NameChoice
   ([0,
     type_kind$1,
     get_name$1,
     get_type$1,
     get_descrs$1,
     fold$1,
     unbound_name_error$1]);

var
 unify_head_only=
  function(loc,env,ty,constr)
   {var match=Ctype["instance_constructor"](0,constr);
    
    var ty_res=match[2];
    
    var match$1=Ctype["repr"](ty_res)[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         ty_res[1]=
         /* Tconstr */[3,
          match$1[1],
          List["map"]
           (function(param){return Ctype["newvar"](0,0);},match$1[2]),
          match$1[3]],
         0;
         Ctype["enforce_constraints"](env,ty_res);
         return unify_pat_types(loc,env,ty_res,ty);
         
        default:exit=591;}}
    
    switch(exit)
     {case 591:throw [0,Assert_failure,[0,"typing/typecore.ml",892,9]];}
    };

var
 type_pat=
  function(constrs,labels,no_existentials,mode,env,sp,expected_ty)
   {var
     type_pat$1=
      function($staropt$star,$staropt$star$1)
       {if($staropt$star){var mode$1=$staropt$star[1];}else{var mode$1=mode;}
        
        if($staropt$star$1){var env$1=$staropt$star$1[1];}else{var env$1=env;}
        
        return type_pat(constrs,labels,no_existentials,mode$1,env$1);
        };
    
    var loc=sp[2];
    
    var match=sp[1];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:return rp(/* record */[0,0,loc,0,expected_ty,env[1],sp[3]]);}}
    else
     {switch(match[0])
       {case 0:
         var name=match[1];
         
         var id=enter_variable(0,0,loc,name,expected_ty);
         
         return rp
                 (/* record */[0,
                   /* Tpat_var */[0,id,name],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 1:
         var name$1=match[2];
         
         var q=type_pat$1(0,0,match[1],expected_ty);
         
         Ctype["begin_def"](0);
         var ty_var=build_as_type(env[1],q);
         
         Ctype["end_def"](0);
         Ctype["generalize"](ty_var);
         var id$1=enter_variable(0,[0,1],loc,name$1,ty_var);
         
         return rp
                 (/* record */[0,
                   /* Tpat_alias */[1,q,id$1,name$1],
                   loc,
                   0,
                   q[4],
                   env[1],
                   sp[3]]);
         
        case 2:
         var cst=match[1];
         
         unify_pat_types(loc,env[1],type_constant(cst),expected_ty);
         return rp
                 (/* record */[0,
                   /* Tpat_constant */[2,cst],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 3:
         var match$1=match[1];
         
         var exit;
         
         switch(match$1)
          {case 1:
            var match$2=match[2];
            
            switch(match$2)
             {case 1:
               var c2=match$2[1];
               
               var c1=match$1[1];
               
               var gloc=/* record */[0,loc[1],loc[2],1];
               
               var
                loop=
                 function(c1$1,c2$1)
                  {if(c1$1=c2$1)
                    {return Ast_helper["Pat"][6]
                             (/* Some */[0,gloc],0,/* Const_char */[1,c1$1]);
                     }
                   else
                    {return Ast_helper["Pat"][13]
                             (/* Some */[0,gloc],
                              0,
                              Ast_helper["Pat"][6]
                               (/* Some */[0,gloc],0,/* Const_char */[1,c1$1]),
                              loop(Char["chr"](c1$1+1),c2$1));
                     }
                   };
               
               if(c1<=c2){var p=loop(c1,c2);}else{var p=loop(c2,c1);}
               
               var p$1=/* record */[0,p[1],loc,p[3]];
               
               return type_pat$1(0,0,p$1,expected_ty);
               
              default:exit=585;}
            
           default:exit=585;}
         
         switch(exit){case 585:throw [0,$$Error,loc,env[1],5];}
         
        case 4:
         var spl=match[1];
         
         if(List["length"](spl)<2)
          {Syntaxerr["ill_formed_ast"]
            (loc,"Tuples must have at least 2 components.")}
         else
          {}
         
         var
          spl_ann=
           List["map"]
            (function(p$2){return /* tuple */[0,p$2,Ctype["newvar"](0,0)];},
             spl);
         
         var
          ty=
           Ctype["newty"]
            (/* Ttuple */[2,
              List["map"](function(prim){return prim[2];},spl_ann)]);
         
         unify_pat_types(loc,env[1],ty,expected_ty);
         var
          pl=
           List["map"]
            (function(param){return type_pat$1(0,0,param[1],param[2]);},
             spl_ann);
         
         return rp
                 (/* record */[0,
                   /* Tpat_tuple */[3,pl],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 5:
         var sarg=match[2];
         
         var lid=match[1];
         
         try
          {var match$3=extract_concrete_variant(env[1],expected_ty);
           
           var opath=/* Some */[0,/* tuple */[0,match$3[1],match$3[2],1]];
           }
         catch(exn){if(exn=Not_found){var opath=0;}else{throw exn;}}
         
         var match$4=lid[1];
         
         var exit$1;
         
         switch(match$4)
          {case 0:
            if(constrs)
             {var constrs$1=constrs[1];
              
              var s=match$4[1];
              
              if(Hashtbl["mem"](constrs$1,s))
               {var
                 constrs$2=
                  /* :: */[0,
                   /* tuple */[0,
                    Hashtbl["find"](constrs$1,s),
                    function(param){return 0;}],
                   0];
                }
              else
               {exit$1=547;}
              }
            else
             {exit$1=547;}
            
           case 1:exit$1=547;
           case 2:exit$1=547;
           }
         
         switch(exit$1)
          {case 547:
            var
             constrs$2=
              Typetexp["find_all_constructors"](env[1],lid[2],lid[1]);
            
           }
         
         var
          check_lk=
           function(tpath,constr)
            {if(constr[10])
              {throw [0,
                      $$Error,
                      lid[2],
                      env[1],
                      /* Unqualified_gadt_pattern */[34,tpath,constr[1]]];
               }
             else
              {return 0;}
             };
         
         var
          constr=
           wrap_disambiguate
            ("This variant pattern is expected to have",
             expected_ty,
             Constructor[7](0,/* Some */[0,check_lk],0,lid,env[1],opath),
             constrs$2);
         
         Env["mark_constructor"](1,env[1],Longident["last"](lid[1]),constr);
         Typetexp["check_deprecated"](loc,constr[13],constr[1]);
         if(no_existentials&&constr[3]!=0)
          {throw [0,$$Error,loc,env[1],4];}
         else
          {}
         
         if(constr[10]){unify_head_only(loc,env[1],expected_ty,constr)}else{}
         
         if(sarg)
          {var sp$1=sarg[1];
           
           var match$5=sp$1[1];
           
           var exit$2;
           
           if(typeof match$5=="number")
            {switch(match$5)
              {case 0:
                if(constr[5]!=1)
                 {if(constr[5]=0){Location["prerr_warning"](sp$1[2],13)}else{}
                  
                  var sargs=Misc["replicate_list"](sp$1,constr[5]);
                  }
                else
                 {exit$2=543;}
                
               }}
           else
            {switch(match$5[0])
              {case 4:
                if(constr[5]>1||explicit_arity(sp[3]))
                 {var sargs=match$5[1];}
                else
                 {exit$2=543;}
                
               default:exit$2=543;}}
           
           switch(exit$2){case 543:var sargs=/* :: */[0,sp$1,0];}
           }
         else
          {var sargs=0;}
         
         if(List["length"](sargs)!=constr[5])
          {throw [0,
                  $$Error,
                  loc,
                  env[1],
                  /* Constructor_arity_mismatch */[1,
                   lid[1],
                   constr[5],
                   List["length"](sargs)]];
           }
         else
          {}
         
         var
          match$6=
           Ctype["instance_constructor"]
            (/* Some */[0,/* tuple */[0,env,get_newtype_level(0)]],constr);
         
         var ty_res=match$6[2];
         
         if(constr[10]&&(mode=0))
          {unify_pat_types_gadt(loc,env,ty_res,expected_ty)}
         else
          {unify_pat_types(loc,env[1],ty_res,expected_ty)}
         
         var
          args=
           List["map2"]
            (function(p$2,t){return type_pat$1(0,0,p$2,t);},sargs,match$6[1]);
         
         return rp
                 (/* record */[0,
                   /* Tpat_construct */[4,lid,constr,args],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 6:
         var sarg$1=match[2];
         
         var l=match[1];
         
         if(sarg$1)
          {var arg_type=/* :: */[0,Ctype["newvar"](0,0),0];}
         else
          {var arg_type=0;}
         
         var
          row=
           /* record */[0,
            /* :: */[0,
             /* tuple */[0,l,/* Reither */[1,sarg$1=0,arg_type,1,[0,0]]],
             0],
            Ctype["newvar"](0,0),
            0,
            0,
            0,
            0];
         
         unify_pat_types
          (loc,env[1],Ctype["newty"](/* Tvariant */[8,row]),expected_ty);
         var exit$3;
         
         if(sarg$1)
          {if(arg_type)
            {if(arg_type[2])
              {exit$3=552;}
             else
              {var arg=/* Some */[0,type_pat$1(0,0,sarg$1[1],arg_type[1])];}
             }
           else
            {exit$3=552;}
           }
         else
          {exit$3=552;}
         
         switch(exit$3){case 552:var arg=0;}
         
         var newrecord="unknown primitive:duprecord regular 6";
         
         return rp
                 (/* record */[0,
                   /* Tpat_variant */[5,
                    l,
                    arg,
                    [0,(newrecord[2]=Ctype["newvar"](0,0),0,newrecord)]],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 7:
         var closed=match[2];
         
         var lid_sp_list=match[1];
         
         if(lid_sp_list=0)
          {Syntaxerr["ill_formed_ast"](loc,"Records cannot be empty.")}
         else
          {}
         
         try
          {var match$7=extract_concrete_record(env[1],expected_ty);
           
           var
            match$8=
             /* tuple */[0,
              /* Some */[0,/* tuple */[0,match$7[1],match$7[2],1]],
              expected_ty];
           }
         catch(exn$1)
          {if(exn$1=Not_found)
            {var match$8=/* tuple */[0,0,Ctype["newvar"](0,0)];}
           else
            {throw exn$1;}
           }
         
         var record_ty=match$8[2];
         
         var
          type_label_pat=
           function(param)
            {var label=param[2];
             
             var label_lid=param[1];
             
             Ctype["begin_def"](0);
             var match$9=Ctype["instance_label"](0,label);
             
             var ty_arg=match$9[2];
             
             var vars=match$9[1];
             
             if(vars=0){Ctype["end_def"](0)}else{}
             
             try
              {unify_pat_types(loc,env[1],match$9[3],record_ty)}
             catch(exn$2)
              {if(exn$2[1]=Ctype["Unify"])
                {throw [0,
                        $$Error,
                        label_lid[2],
                        env[1],
                        /* Label_mismatch */[2,label_lid[1],exn$2[2]]];
                 }
               else
                {throw exn$2;}
               }
             
             var arg$1=type_pat$1(0,0,param[3],ty_arg);
             
             if(vars!=0)
              {Ctype["end_def"](0);
               Ctype["generalize"](ty_arg);
               List["iter"](Ctype["generalize"],vars);
               var
                instantiated=
                 function(tv)
                  {var tv$1=Ctype["expand_head"](env[1],tv);
                   
                   return !Btype["is_Tvar"](tv$1)||
                          tv$1[2]!=
                          Btype["generic_level"];
                   };
               
               if(List["exists"](instantiated,vars))
                {throw [0,
                        $$Error,
                        label_lid[2],
                        env[1],
                        /* Polymorphic_label */[0,label_lid[1]]];
                 }
               else
                {}
               }
             else
              {}
             
             return /* tuple */[0,label_lid,label,arg$1];
             };
         
         var
          lbl_pat_list=
           wrap_disambiguate
            ("This record pattern is expected to have",
             expected_ty,
             type_label_a_list(labels,loc,0,env[1],type_label_pat,match$8[1]),
             lid_sp_list);
         
         check_recordpat_labels(loc,lbl_pat_list,closed);
         unify_pat_types(loc,env[1],record_ty,expected_ty);
         return rp
                 (/* record */[0,
                   /* Tpat_record */[6,lbl_pat_list,closed],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 8:
         var ty_elt=Ctype["newvar"](0,0);
         
         unify_pat_types
          (loc,
           env[1],
           Ctype["instance_def"](Predef["type_array"](ty_elt)),
           expected_ty);
         var
          spl_ann$1=
           List["map"]
            (function(p$2){return /* tuple */[0,p$2,Ctype["newvar"](0,0)];},
             match[1]);
         
         var
          pl$1=
           List["map"]
            (function(param){return type_pat$1(0,0,param[1],ty_elt);},
             spl_ann$1);
         
         return rp
                 (/* record */[0,
                   /* Tpat_array */[7,pl$1],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 9:
         var initial_pattern_variables=pattern_variables[1];
         
         var p1=type_pat$1([0,1],0,match[1],expected_ty);
         
         var p1_variables=pattern_variables[1];
         
         pattern_variables[1]=initial_pattern_variables,0;
         var p2=type_pat$1([0,1],0,match[2],expected_ty);
         
         var p2_variables=pattern_variables[1];
         
         var
          alpha_env=
           enter_orpat_variables(loc,env[1],p1_variables,p2_variables);
         
         pattern_variables[1]=p1_variables,0;
         return rp
                 (/* record */[0,
                   /* Tpat_or */[8,p1,Typedtree["alpha_pat"](alpha_env,p2),0],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 10:
         var sp$2=match[1];
         
         var match$9=sp$2[1];
         
         var exit$4;
         
         if(typeof match$9=="number")
          {switch(match$9){}}
         else
          {switch(match$9[0])
            {case 0:
              var sty=match[2];
              
              var $js=sty[1];
              if(typeof $js=="number")
               {switch($js){}}
              else
               {switch($js[0])
                 {case 8:
                   var lloc=sp$2[2];
                   
                   var name$2=match$9[1];
                   
                   var
                    match$10=
                     Typetexp["transl_simple_type_delayed"](env[1],sty);
                   
                   var cty=match$10[1];
                   
                   var ty$1=cty[2];
                   
                   unify_pat_types(lloc,env[1],ty$1,expected_ty);
                   pattern_force[1]=/* :: */[0,match$10[2],pattern_force[1]],0;
                   var match$11=ty$1[1];
                   
                   var exit$5;
                   
                   if(typeof match$11=="number")
                    {switch(match$11){}}
                   else
                    {switch(match$11[0])
                      {case 10:
                        Ctype["begin_def"](0);
                        var
                         match$12=
                          Ctype["instance_poly"]([0,1],0,match$11[2],match$11[1]);
                        
                        var ty$prime=match$12[2];
                        
                        Ctype["end_def"](0);
                        Ctype["generalize"](ty$prime);
                        var id$2=enter_variable(0,0,lloc,name$2,ty$prime);
                        
                        return rp
                                (/* record */[0,
                                  /* Tpat_var */[0,id$2,name$2],
                                  lloc,
                                  /* :: */[0,
                                   /* tuple */[0,/* Tpat_constraint */[0,cty],loc,sp[3]],
                                   0],
                                  ty$1,
                                  env[1],
                                  0]);
                        
                       default:exit$5=529;}}
                   
                   switch(exit$5)
                    {case 529:
                      throw [0,Assert_failure,[0,"typing/typecore.ml",955,13]];
                     }
                   
                  default:exit$4=586;}}
              
             default:exit$4=586;}}
         
         switch(exit$4)
          {case 586:
            var separate=1;
            
            if(separate){Ctype["begin_def"](0)}else{}
            
            var
             match$13=
              Typetexp["transl_simple_type_delayed"](env[1],match[2]);
            
            var cty$1=match$13[1];
            
            var ty$2=cty$1[2];
            
            if(separate)
             {Ctype["end_def"](0);
              Ctype["generalize_structure"](ty$2);
              var
               match$14=
                /* tuple */[0,
                 Ctype["instance"](0,env[1],ty$2),
                 Ctype["instance"](0,env[1],ty$2)];
              }
            else
             {var match$14=/* tuple */[0,ty$2,ty$2];}
            
            var ty$3=match$14[1];
            
            unify_pat_types(loc,env[1],ty$3,expected_ty);
            var p$2=type_pat$1(0,0,sp$2,match$14[2]);
            
            pattern_force[1]=/* :: */[0,match$13[2],pattern_force[1]],0;
            var
             extra=
              /* tuple */[0,/* Tpat_constraint */[0,cty$1],loc,sp$2[3]];
            
            if(separate)
             {var match$15=p$2[1];
              
              var exit$6;
              
              if(typeof match$15=="number")
               {switch(match$15){}}
              else
               {switch(match$15[0])
                 {case 0:
                   return /* record */[0,
                           /* Tpat_alias */[1,
                            /* record */[0,0,p$2[2],p$2[3],p$2[4],p$2[5],0],
                            match$15[1],
                            match$15[2]],
                           p$2[2],
                           /* :: */[0,extra,0],
                           ty$3,
                           p$2[5],
                           p$2[6]];
                   
                  default:exit$6=577;}}
              
              switch(exit$6)
               {case 577:
                 return /* record */[0,
                         p$2[1],
                         p$2[2],
                         /* :: */[0,extra,p$2[3]],
                         ty$3,
                         p$2[5],
                         p$2[6]];
                 
                }
              }
            else
             {return p$2;}
            
           }
         
        case 11:
         var lid$1=match[1];
         
         var match$16=build_or_pat(env[1],loc,lid$1[1]);
         
         var p$3=match$16[2];
         
         unify_pat_types(loc,env[1],match$16[3],expected_ty);
         var newrecord$1="unknown primitive:duprecord regular 6";
         
         newrecord$1[3]=
         /* :: */[0,
          /* tuple */[0,/* Tpat_type */[1,match$16[1],lid$1],loc,sp[3]],
          p$3[3]],
         0;
         return newrecord$1;
         
        case 12:
         var nv=Ctype["newvar"](0,0);
         
         unify_pat_types
          (loc,
           env[1],
           Ctype["instance_def"](Predef["type_lazy_t"](nv)),
           expected_ty);
         var p1$1=type_pat$1(0,0,match[1],nv);
         
         return rp
                 (/* record */[0,
                   /* Tpat_lazy */[9,p1$1],
                   loc,
                   0,
                   expected_ty,
                   env[1],
                   sp[3]]);
         
        case 13:
         var name$3=match[1];
         
         var id$3=enter_variable([0,1],0,loc,name$3,expected_ty);
         
         return rp
                 (/* record */[0,
                   /* Tpat_var */[0,id$3,name$3],
                   sp[2],
                   /* :: */[0,/* tuple */[0,0,loc,sp[3]],0],
                   expected_ty,
                   env[1],
                   0]);
         
        case 14:throw [0,$$Error,loc,env[1],8];
        case 15:
         throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
        }}
    };

var
 type_pat$1=
  function($staropt$star,constrs,labels,$staropt$star$1,env,sp,expected_ty)
   {if($staropt$star)
     {var allow_existentials=$staropt$star[1];}
    else
     {var allow_existentials=0;}
    
    if($staropt$star$1)
     {var lev=$staropt$star$1[1];}
    else
     {var lev=Ctype["get_current_level"](0);}
    
    newtype_level[1]=/* Some */[0,lev],0;
    try
     {var r=type_pat(constrs,labels,!allow_existentials,0,env,sp,expected_ty);
      
      iter_pattern(function(p){return p[5]=env[1],0;},r);
      newtype_level[1]=0,0;
      return r;
      }
    catch(e){newtype_level[1]=0,0;throw e;}
    };

var
 partial_pred=
  function(lev,env,expected_ty,constrs,labels,p)
   {var snap=Btype["snapshot"](0);
    
    try
     {reset_pattern(0,1);
      var
       typed_p=
        type_pat$1
         ([0,1],
          /* Some */[0,constrs],
          /* Some */[0,labels],
          /* Some */[0,lev],
          [0,env],
          p,
          expected_ty);
      
      Btype["backtrack"](snap);
      return /* Some */[0,typed_p];
      }
    catch(exn){Btype["backtrack"](snap);return 0;}
    };

var
 check_partial=
  function($staropt$star,env,expected_ty)
   {if($staropt$star)
     {var lev=$staropt$star[1];}
    else
     {var lev=Ctype["get_current_level"](0);}
    
    return Parmatch["check_partial_gadt"](partial_pred(lev,env,expected_ty));
    };

var
 iter3=
  function(f,lst1,lst2,lst3)
   {var exit;
    
    if(lst1)
     {if(lst2)
       {if(lst3)
         {f(lst1[1],lst2[1],lst3[1]);return iter3(f,lst1[2],lst2[2],lst3[2]);}
        else
         {exit=513;}
        }
      else
       {exit=513;}
      }
    else
     {if(lst2){exit=513;}else{if(lst3){exit=513;}else{return 0;}}}
    
    switch(exit)
     {case 513:throw [0,Assert_failure,[0,"typing/typecore.ml",1256,6]];}
    };

var
 add_pattern_variables=
  function(check,check_as,env)
   {var pv=Misc["get_ref"](pattern_variables);
    
    return /* tuple */[0,
            List["fold_right"]
             (function(param,env$1)
               {if(param[5]){var check$1=check_as;}else{var check$1=check;}
                
                return Env["add_value"]
                        (check$1,
                         param[1],
                         /* record */[0,param[2],0,param[4],0],
                         env$1);
                },
              pv,
              env),
            Misc["get_ref"](module_variables)];
    };

var
 type_pattern=
  function(lev,env,spat,scope,expected_ty)
   {reset_pattern(scope,1);
    var new_env=[0,env];
    
    var pat=type_pat$1([0,1],0,0,/* Some */[0,lev],new_env,spat,expected_ty);
    
    var
     match=
      add_pattern_variables
       (/* Some */[0,function(s){return /* Unused_var_strict */[13,s];}],
        /* Some */[0,function(s){return /* Unused_var */[12,s];}],
        new_env[1]);
    
    return /* tuple */[0,pat,match[1],Misc["get_ref"](pattern_force),match[2]];
    };

var
 type_pattern_list=
  function(env,spatl,scope,expected_tys,allow)
   {reset_pattern(scope,allow);
    var new_env=[0,env];
    
    var patl=List["map2"](type_pat$1(0,0,0,0,new_env),spatl,expected_tys);
    
    var match=add_pattern_variables(0,0,new_env[1]);
    
    return /* tuple */[0,
            patl,
            match[1],
            Misc["get_ref"](pattern_force),
            match[2]];
    };

var
 type_class_arg_pattern=
  function(cl_num,val_env,met_env,l,spat)
   {reset_pattern(0,0);
    var nv=Ctype["newvar"](0,0);
    
    var pat=type_pat$1(0,0,0,0,[0,val_env],spat,nv);
    
    if(has_variants(pat))
     {Parmatch["pressure_variants"](val_env,/* :: */[0,pat,0]),
      iter_pattern(finalize_variant,pat)}
    else
     {}
    
    List["iter"](function(f){return f(0);},Misc["get_ref"](pattern_force));
    if(Btype["is_optional"](l))
     {unify_pat(val_env,pat,type_option(Ctype["newvar"](0,0)))}
    else
     {}
    
    var
     match=
      List["fold_right"]
       (function(param,param$1)
         {var as_var=param[5];
          
          var ty=param[2];
          
          var id=param[1];
          
          var
           check=
            function(s)
             {if(as_var)
               {return /* Unused_var */[12,s];}
              else
               {return /* Unused_var_strict */[13,s];}
              };
          
          var id$prime=Ident["create"](Ident["name"](id));
          
          return /* tuple */[0,
                  /* :: */[0,
                   /* tuple */[0,id$prime,param[3],id,ty],
                   param$1[1]],
                  Env["add_value"]
                   (/* Some */[0,check],
                    id$prime,
                    /* record */[0,ty,/* Val_ivar */[1,0,cl_num],param[4],0],
                    param$1[2])];
          },
        pattern_variables[1],
        /* tuple */[0,0,met_env]);
    
    var match$1=add_pattern_variables(0,0,val_env);
    
    return /* tuple */[0,pat,match[1],match$1[1],match[2]];
    };

var
 type_self_pattern=
  function(cl_num,privty,val_env,met_env,par_env,spat)
   {var
     spat$1=
      Ast_helper["Pat"][1]
       (0,
        0,
        /* Ppat_alias */[1,
         Ast_helper["Pat"][1]
          (0,0,/* Ppat_alias */[1,spat,Typedtree["mknoloc"]("selfpat-*")]),
         Typedtree["mknoloc"](Pervasives["^"]("selfpat-",cl_num))]);
    
    reset_pattern(0,0);
    var nv=Ctype["newvar"](0,0);
    
    var pat=type_pat$1(0,0,0,0,[0,val_env],spat$1,nv);
    
    List["iter"](function(f){return f(0);},Misc["get_ref"](pattern_force));
    var meths=[0,Types["Meths"][1]];
    
    var vars=[0,Types["Vars"][1]];
    
    var pv=pattern_variables[1];
    
    pattern_variables[1]=0,0;
    var
     match=
      List["fold_right"]
       (function(param,param$1)
         {var as_var=param[5];
          
          var loc=param[4];
          
          var ty=param[2];
          
          var id=param[1];
          
          return /* tuple */[0,
                  Env["add_value"](0,id,/* record */[0,ty,1,loc,0],param$1[1]),
                  Env["add_value"]
                   (/* Some */[0,
                     function(s)
                      {if(as_var)
                        {return /* Unused_var */[12,s];}
                       else
                        {return /* Unused_var_strict */[13,s];}
                       }],
                    id,
                    /* record */[0,
                     ty,
                     /* Val_self */[2,meths,vars,cl_num,privty],
                     loc,
                     0],
                    param$1[2]),
                  Env["add_value"](0,id,/* record */[0,ty,1,loc,0],param$1[3])];
          },
        pv,
        /* tuple */[0,val_env,met_env,par_env]);
    
    return /* tuple */[0,pat,meths,vars,match[1],match[2],match[3]];
    };

var delayed_checks=[0,0];

var reset_delayed_checks=function(param){return delayed_checks[1]=0,0;};

var
 add_delayed_check=
  function(f)
   {return delayed_checks[1]=
           /* :: */[0,
            /* tuple */[0,f,Warnings["backup"](0)],
            delayed_checks[1]],
           0;
    };

var
 force_delayed_checks=
  function(param)
   {var snap=Btype["snapshot"](0);
    
    var w_old=Warnings["backup"](0);
    
    List["iter"]
     (function(param$1){Warnings["restore"](param$1[2]);return param$1[1](0);},
      List["rev"](delayed_checks[1]));
    Warnings["restore"](w_old);
    reset_delayed_checks(0);
    return Btype["backtrack"](snap);
    };

var
 final_subexpression=
  function(sexp)
   {var match=sexp[1];
    
    var exit;
    
    switch(match)
     {case 2:var e=match[3];exit=478;
      case 6:
       var match$1=match[2];
       
       if(match$1){var e=match$1[1][3];exit=478;}else{exit=479;}
       
      case 7:var e=match[1];exit=478;
      case 15:exit=480;
      case 16:exit=480;
      default:exit=479;}
    
    switch(exit)
     {case 480:"unknown block:(exit 478 (field 1 match/4791))";
      case 479:return sexp;
      case 478:return final_subexpression(e);
      }
    };

var
 is_nonexpansive=
  function(exp)
   {var match=exp[1];
    
    var exit;
    
    switch(match)
     {case 0:exit=473;
      case 1:exit=473;
      case 2:
       return List["for_all"]
               (function(vb){return is_nonexpansive(vb[2]);},match[2])&&
              is_nonexpansive(match[3]);
       
      case 3:exit=473;
      case 4:
       var match$1=match[2];
       
       if(match$1)
        {if(match$1[1][2])
          {exit=472;}
         else
          {return is_nonexpansive(match[1])&&
                  List["for_all"]
                   (is_nonexpansive_opt,List["map"](snd3,match$1[2]));
           }
         }
       else
        {exit=472;}
       
      case 5:
       if(match[3])
        {exit=472;}
       else
        {return is_nonexpansive(match[1])&&
                List["for_all"]
                 (function(param)
                   {return is_nonexpansive_opt(param[2])&&
                           is_nonexpansive(param[3]);
                    },
                  match[2]);
         }
       
      case 7:return List["for_all"](is_nonexpansive,match[1]);
      case 8:return List["for_all"](is_nonexpansive,match[3]);
      case 9:return is_nonexpansive_opt(match[2]);
      case 10:
       return List["for_all"]
               (function(param)
                 {return (param[2][4]=0)&&is_nonexpansive(param[3]);},
                match[1])&&
              is_nonexpansive_opt(match[2]);
       
      case 11:exit=474;
      case 13:if(match[1]){exit=472;}else{return 1;}
      case 14:return is_nonexpansive(match[2])&&is_nonexpansive_opt(match[3]);
      case 15:return is_nonexpansive(match[2]);
      case 19:
       if(Ctype["class_type_arity"](match[3][2])>0){return 1;}else{exit=472;}
      case 23:return is_nonexpansive_mod(match[3])&&is_nonexpansive(match[4]);
      case 25:exit=474;
      case 26:
       var match$2=match[1];
       
       var count=[0,0];
       
       return List["for_all"]
               (function(field)
                 {var match$3=field[1];
                  
                  switch(match$3)
                   {case 0:return 0;
                    case 1:
                     var match$4=match$3[4];
                     
                     switch(match$4)
                      {case 0:count[0]++;return 1;
                       case 1:count[0]++;return is_nonexpansive(match$4[2]);
                       }
                     
                    case 4:return is_nonexpansive(match$3[1]);
                    default:return 1;}
                  },
                match$2[2])&&
              Types["Vars"][11]
               (function(param,param$1,b)
                 {count[0]--;return b&&(param$1[1]=0);},
                match$2[3][2],
                1)&&
              (count[1]=0);
       
      case 27:return is_nonexpansive_mod(match[1]);
      default:exit=472;}
    
    switch(exit)
     {case 473:return 1;
      case 474:return is_nonexpansive(match[1]);
      case 472:return 0;
      }
    };

var
 is_nonexpansive_mod=
  function(mexp)
   {var match=mexp[1];
    
    var exit;
    
    switch(match)
     {case 0:exit=477;
      case 1:
       return List["for_all"]
               (function(item)
                 {var match$1=item[1];
                  
                  var exit$1;
                  
                  switch(match$1)
                   {case 1:
                     return List["for_all"]
                             (function(vb){return is_nonexpansive(vb[2]);},match$1[2]);
                     
                    case 4:
                     return List["for_all"]
                             (function(param)
                               {switch(param[4]){case 0:return 0;case 1:return 1;}},
                              match$1[1][4]);
                     
                    case 5:
                     switch(match$1[1][4]){case 0:return 0;case 1:return 1;}
                    case 6:var m=match$1[1][3];exit$1=476;
                    case 7:
                     return List["for_all"]
                             (function(param){return is_nonexpansive_mod(param[3]);},
                              match$1[1]);
                     
                    case 10:return 0;
                    case 12:var m=match$1[1][1];exit$1=476;
                    case 13:return 1;
                    default:return 1;}
                  
                  switch(exit$1){case 476:return is_nonexpansive_mod(m);}
                  },
                match[1][1]);
       
      case 2:exit=477;
      case 3:return 0;
      case 4:return is_nonexpansive_mod(match[1]);
      case 5:return is_nonexpansive(match[1]);
      }
    
    switch(exit){case 477:return 1;}
    };

var
 is_nonexpansive_opt=
  function(param){if(param){return is_nonexpansive(param[1]);}else{return 1;}};

var
 approx_type=
  function(env,sty)
   {var match=sty[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:
         var p=match[1];
         
         if(Btype["is_optional"](p))
          {var ty1=type_option(Ctype["newvar"](0,0));}
         else
          {var ty1=Ctype["newvar"](0,0);}
         
         return Ctype["newty"]
                 (/* Tarrow */[1,p,ty1,approx_type(env,match[3]),0]);
         
        case 2:
         return Ctype["newty"]
                 (/* Ttuple */[2,List["map"](approx_type(env),match[1])]);
         
        case 3:
         var ctl=match[2];
         
         try
          {var match$1=Env["lookup_type"](match[1][1],env);
           
           if(List["length"](ctl)!=match$1[2][2]){throw Not_found;}else{}
           
           var tyl=List["map"](approx_type(env),ctl);
           
           return Ctype["newconstr"](match$1[1],tyl);
           }
         catch(exn)
          {if(exn=Not_found){return Ctype["newvar"](0,0);}else{throw exn;}}
         
        case 8:return approx_type(env,match[2]);
        default:exit=469;}}
    
    switch(exit){case 469:return Ctype["newvar"](0,0);}
    };

var
 type_approx=
  function(env,sexp)
   {var match=sexp[1];
    
    var exit;
    
    switch(match)
     {case 2:return type_approx(env,match[3]);
      case 3:
       var match$1=match[1];
       
       if(match$1)
        {return Ctype["newty"]
                 (/* Tarrow */[1,
                   "",
                   Ctype["newvar"](0,0),
                   type_approx(env,match$1[1][3]),
                   0]);
         }
       else
        {exit=463;}
       
      case 4:
       var e=match[4];
       
       var p=match[1];
       
       if(Btype["is_optional"](p))
        {return Ctype["newty"]
                 (/* Tarrow */[1,
                   p,
                   type_option(Ctype["newvar"](0,0)),
                   type_approx(env,e),
                   0]);
         }
       else
        {return Ctype["newty"]
                 (/* Tarrow */[1,p,Ctype["newvar"](0,0),type_approx(env,e),0]);
         }
       
      case 6:
       var match$2=match[2];
       
       if(match$2){return type_approx(env,match$2[1][3]);}else{exit=463;}
       
      case 7:return type_approx(env,match[1]);
      case 8:
       return Ctype["newty"]
               (/* Ttuple */[2,List["map"](type_approx(env),match[1])]);
       
      case 15:exit=464;
      case 16:exit=464;
      case 19:
       var ty=type_approx(env,match[1]);
       
       var ty1=approx_type(env,match[2]);
       
       try
        {Ctype["unify"](env,ty,ty1)}
       catch(exn)
        {if(exn[1]=Ctype["Unify"])
          {throw [0,$$Error,sexp[2],env,/* Expr_type_clash */[7,exn[2]]];}
         else
          {throw exn;}
         }
       
       return ty1;
       
      case 20:
       var
        approx_ty_opt=
         function(param)
          {if(param)
            {return approx_type(env,param[1]);}
           else
            {return Ctype["newvar"](0,0);}
           };
       
       var ty$1=type_approx(env,match[1]);
       
       var ty1$1=approx_ty_opt(match[2]);
       
       var ty2=approx_type(env,match[3]);
       
       try
        {Ctype["unify"](env,ty$1,ty1$1)}
       catch(exn$1)
        {if(exn$1[1]=Ctype["Unify"])
          {throw [0,$$Error,sexp[2],env,/* Expr_type_clash */[7,exn$1[2]]];}
         else
          {throw exn$1;}
         }
       
       return ty2;
       
      default:exit=463;}
    
    switch(exit)
     {case 464:return type_approx(env,match[2]);
      case 463:return Ctype["newvar"](0,0);
      }
    };

var
 list_labels_aux=
  function(env,visited,ls,ty_fun)
   {var ty=Ctype["expand_head"](env,ty_fun);
    
    if(List["memq"](ty,visited))
     {return /* tuple */[0,List["rev"](ls),0];}
    else
     {var match=ty[1];
      
      var exit;
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 1:
           return list_labels_aux
                   (env,
                    /* :: */[0,ty,visited],
                    /* :: */[0,match[1],ls],
                    match[3]);
           
          default:exit=453;}}
      
      switch(exit)
       {case 453:return /* tuple */[0,List["rev"](ls),Btype["is_Tvar"](ty)];}
      }
    };

var
 list_labels=
  function(env,ty)
   {return Ctype["wrap_trace_gadt_instances"](env,list_labels_aux(env,0,0),ty);
    };

var
 check_univars=
  function(env,expans,kind,exp,ty_expected,vars)
   {if(expans&&!is_nonexpansive(exp))
     {Ctype["generalize_expansive"](env,exp[4])}
    else
     {}
    
    var vars$1=List["map"](Ctype["expand_head"](env),vars);
    
    var vars$2=List["map"](Ctype["expand_head"](env),vars$1);
    
    var
     vars$prime=
      List["filter"]
       (function(t)
         {var t$1=Ctype["repr"](t);
          
          Ctype["generalize"](t$1);
          var match=t$1[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:
               if(t$1[2]=Btype["generic_level"])
                {Btype["log_type"](t$1);
                 t$1[1]=/* Tunivar */[9,match[1]],0;
                 return 1;
                 }
               else
                {exit=446;}
               
              default:exit=446;}}
          
          switch(exit){case 446:return 0;}
          },
        vars$2);
    
    if(List["length"](vars$2)=List["length"](vars$prime))
     {return 0;}
    else
     {var
       ty=
        Btype["newgenty"](/* Tpoly */[10,Ctype["repr"](exp[4]),vars$prime]);
      
      var ty_expected$1=Ctype["repr"](ty_expected);
      
      throw [0,
             $$Error,
             exp[2],
             env,
             /* Less_general */[31,
              kind,
              /* :: */[0,
               /* tuple */[0,ty,ty],
               /* :: */[0,/* tuple */[0,ty_expected$1,ty_expected$1],0]]]];
      }
    };

var
 check_application_result=
  function(env,statement,exp)
   {var loc=exp[2];
    
    var match=Ctype["expand_head"](env,exp[4])[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:return 0;
        case 1:return Location["prerr_warning"](exp[2],2);
        case 3:
         if(Path["same"](match[1],Predef["path_unit"]))
          {return 0;}
         else
          {exit=441;}
         
        default:exit=441;}}
    
    switch(exit)
     {case 441:
       if(statement){return Location["prerr_warning"](loc,4);}else{return 0;}
      }
    };

var
 generalizable=
  function(level,ty)
   {var
     check=
      function(ty$1)
       {var ty$2=Ctype["repr"](ty$1);
        
        if(ty$2[2]<Btype["lowest_level"])
         {return 0;}
        else
         {if(ty$2[2]<=level)
           {throw Pervasives["Exit"];}
          else
           {Btype["mark_type_node"](ty$2);
            return Btype["iter_type_expr"](check,ty$2);
            }
          }
        };
    
    try
     {check(ty);Btype["unmark_type"](ty);return 1;}
    catch(exn)
     {if(exn=Pervasives["Exit"])
       {Btype["unmark_type"](ty);return 0;}
      else
       {throw exn;}
      }
    };

var self_coercion=[0,0];

var
 create_package_type=
  function(loc,env,param)
   {var l=param[2];
    
    var s=Typetexp["transl_modtype_longident"][1](loc,env,param[1]);
    
    var
     fields=
      List["map"]
       (function(param$1)
         {return /* tuple */[0,
                  param$1[1],
                  Typetexp["transl_simple_type"](env,0,param$1[2])];
          },
        l);
    
    var
     ty=
      Ctype["newty"]
       (/* Tpackage */[11,
         s,
         List["map"](function(prim){return prim[1];},l),
         List["map"](function(param$1){return param$1[2][2];},fields)]);
    
    return /* tuple */[0,s,fields,ty];
    };

var
 wrap_unpacks=
  function(sexp,unpacks)
   {return List["fold_left"]
            (function(sexp$1,param)
              {var name=param[1];
               
               return Ast_helper["Exp"][28]
                       (/* Some */[0,sexp$1[2]],
                        0,
                        name,
                        Ast_helper["Mod"][8]
                         (/* Some */[0,param[2]],
                          0,
                          Ast_helper["Exp"][3]
                           (/* Some */[0,name[2]],
                            0,
                            Typedtree["mkloc"](/* Lident */[0,name[1]],name[2]))),
                        sexp$1);
               },
             sexp,
             unpacks);
    };

var
 contains_variant_either=
  function(ty)
   {var
     loop=
      function(ty$1)
       {var ty$2=Ctype["repr"](ty$1);
        
        if(ty$2[2]>=Btype["lowest_level"])
         {Btype["mark_type_node"](ty$2);
          var match=ty$2[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 8:
               var row=Btype["row_repr"](match[1]);
               
               if(!row[5])
                {List["iter"]
                  (function(param)
                    {var match$1=Btype["row_field_repr"](param[2]);
                     
                     var exit$1;
                     
                     if(typeof match$1=="number")
                      {switch(match$1){case 0:exit$1=427;}}
                     else
                      {switch(match$1[0])
                        {case 0:exit$1=427;case 1:throw Pervasives["Exit"];}}
                     
                     switch(exit$1){case 427:return 0;}
                     },
                   row[1])}
               else
                {}
               
               return Btype["iter_row"](loop,row);
               
              default:exit=429;}}
          
          switch(exit){case 429:return Btype["iter_type_expr"](loop,ty$2);}
          }
        else
         {return 0;}
        };
    
    try
     {loop(ty);Btype["unmark_type"](ty);return 0;}
    catch(exn)
     {if(exn=Pervasives["Exit"])
       {Btype["unmark_type"](ty);return 1;}
      else
       {throw exn;}
      }
    };

var
 iter_ppat=
  function(f,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:exit=422;
        case 4:exit=423;
        case 5:exit=424;
        case 6:exit=424;
        case 7:
         return List["iter"](function(param){return f(param[2]);},match[1]);
        case 8:exit=423;
        case 9:f(match[1]);return f(match[2]);
        case 10:exit=422;
        case 12:exit=422;
        case 14:exit=422;
        default:exit=419;}}
    
    switch(exit)
     {case 422:return f(match[1]);
      case 423:return List["iter"](f,match[1]);
      case 424:return Misc["may"](f,match[2]);
      case 419:return 0;
      }
    };

var
 contains_polymorphic_variant=
  function(p)
   {var
     loop=
      function(p$1)
       {var match=p$1[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0]){case 6:exit=416;case 11:exit=416;default:exit=417;}}
        
        switch(exit)
         {case 417:return iter_ppat(loop,p$1);
          case 416:throw Pervasives["Exit"];
          }
        };
    
    try
     {loop(p);return 0;}
    catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
    };

var
 contains_gadt=
  function(env,p)
   {var
     loop=
      function(p$1)
       {var match=p$1[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 5:
             try
              {var cstrs=Env["lookup_all_constructors"](match[1][1],env);
               
               List["iter"]
                (function(param)
                  {if(param[1][10]){throw Pervasives["Exit"];}else{return 0;}},
                 cstrs)}
             catch(exn){if(exn=Not_found){}else{throw exn;}}
             
             return iter_ppat(loop,p$1);
             
            default:exit=413;}}
        
        switch(exit){case 413:return iter_ppat(loop,p$1);}
        };
    
    try
     {loop(p);return 0;}
    catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
    };

var
 check_absent_variant=
  function(env)
   {return iter_pattern
            (function(pat)
              {var match=pat[1];
               
               var exit;
               
               if(typeof match=="number")
                {switch(match){}}
               else
                {switch(match[0])
                  {case 5:
                    var arg=match[2];
                    
                    var s=match[1];
                    
                    var row=Btype["row_repr"](match[3][1]);
                    
                    if
                     (List["exists"]
                       (function(param)
                         {return "unknown primitive:caml_string_equal"&&
                                 Btype["row_field_repr"](param[2])!=
                                 0;
                          },
                        row[1])||
                      !row[5]&&
                      !Btype["static_row"](row))
                     {return 0;}
                    else
                     {if(arg)
                       {var
                         ty_arg=
                          /* :: */[0,Ctype["correct_levels"](arg[1][4]),0];
                        }
                      else
                       {var ty_arg=0;}
                      
                      var
                       row$prime=
                        /* record */[0,
                         /* :: */[0,
                          /* tuple */[0,s,/* Reither */[1,arg=0,ty_arg,1,[0,0]]],
                          0],
                         Ctype["newvar"](0,0),
                         0,
                         0,
                         0,
                         0];
                      
                      var newrecord="unknown primitive:duprecord regular 6";
                      
                      return unify_pat
                              (env,
                               (newrecord[4]=
                                Ctype["newty"](/* Tvariant */[8,row$prime]),
                                0,
                                newrecord),
                               Ctype["correct_levels"](pat[4]));
                      }
                    
                   default:exit=408;}}
               
               switch(exit){case 408:return 0;}
               });
    };

var
 duplicate_ident_types=
  function(loc,caselist,env)
   {var
     caselist$1=
      List["filter"]
       (function(param){return contains_gadt(env,param[1]);},caselist);
    
    var idents=all_idents_cases(caselist$1);
    
    return List["fold_left"]
            (function(env$1,s)
              {try
                {var match=Env["lookup_value"](/* Lident */[0,s],env$1);
                 
                 var desc=match[2];
                 
                 var path=match[1];
                 
                 var exit;
                 
                 switch(path)
                  {case 0:
                    var
                     desc$1=
                      /* record */[0,
                       Ctype["correct_levels"](desc[1]),
                       desc[2],
                       desc[3],
                       desc[4]];
                    
                    return Env["add_value"](0,path[1],desc$1,env$1);
                    
                   case 1:exit=400;
                   case 2:exit=400;
                   }
                 
                 switch(exit){case 400:return env$1;}
                 }
               catch(exn){if(exn=Not_found){return env$1;}else{throw exn;}}
               },
             env,
             idents);
    };

var
 unify_exp=
  function(env,exp,expected_ty)
   {return unify_exp_types(exp[2],env,exp[4],expected_ty);};

var
 type_exp=
  function(env,sexp){return type_expect(0,env,sexp,Ctype["newvar"](0,0));};

var
 type_expect=
  function(in_function,env,sexp,ty_expected)
   {var previous_saved_types=Cmt_format["get_saved_types"](0);
    
    Typetexp["warning_enter_scope"](0);
    Typetexp["warning_attribute"](sexp[3]);
    var exp=type_expect_(in_function,env,sexp,ty_expected);
    
    Typetexp["warning_leave_scope"](0);
    Cmt_format["set_saved_types"]
     (/* :: */[0,/* Partial_expression */[2,exp],previous_saved_types]);
    return exp;
    };

var
 type_expect_=
  function(in_function,env,sexp,ty_expected)
   {var loc=sexp[2];
    
    var
     rue=
      function(exp)
       {unify_exp(env,re(exp),Ctype["instance"](0,env,ty_expected));
        return exp;
        };
    
    var match=sexp[1];
    
    switch(match)
     {case 0:
       var lid=match[1];
       
       var match$1=Typetexp["find_value"](env,loc,lid[1]);
       
       var desc=match$1[2];
       
       var path=match$1[1];
       
       if(Clflags["annotations"][1])
        {var dloc=desc[3];
         
         if(dloc[3]){var annot=0;}else{var annot=/* Iref_internal */[0,dloc];}
         
         var
          name=
           Path["name"](/* Some */[0,Oprint["parenthesized_ident"]],path);
         
         Stypes["record"](/* An_ident */[5,loc,name,annot])}
       else
        {}
       
       var match$2=desc[2];
       
       var exit;
       
       var $js;
       if(typeof match$2=="number")
        {switch(match$2)
          {case 1:
            throw [0,
                   $$Error,
                   loc,
                   env,
                   /* Masked_instance_variable */[29,lid[1]]];
            
           }}
       else
        {switch(match$2[0])
          {case 1:
            var
             match$3=
              Env["lookup_value"]
               (/* Lident */[0,Pervasives["^"]("self-",match$2[2])],env);
            
            var match$4=lid[1];
            
            var exit$1;
            
            var $js$1;
            switch(match$4)
             {case 0:$js$1=/* record */[0,match$4[1],lid[2]];
              case 1:exit$1=25;
              case 2:exit$1=25;
              }
            
            var $js$2;
            switch(exit$1)
             {case 25:
               throw [0,Assert_failure,[0,"typing/typecore.ml",1773,38]];
              }
            $js=/* Texp_instvar */[20,match$3[1],path,$js$2];
            
           case 2:
            var
             match$5=
              Env["lookup_value"]
               (/* Lident */[0,Pervasives["^"]("self-",match$2[3])],env);
            
            $js=/* Texp_ident */[0,match$5[1],lid,desc];
            
           default:exit=28;}}
       
       var $js$3;
       switch(exit){case 28:$js$3=/* Texp_ident */[0,path,lid,desc];}
       return rue
               (/* record */[0,
                 $js$3,
                 loc,
                 0,
                 Ctype["instance"](0,env,desc[1]),
                 env,
                 sexp[3]]);
       
      case 1:
       var cst=match[1];
       
       switch(cst)
        {case 2:
          var ty_exp=Ctype["expand_head"](env,ty_expected);
          
          var
           fmt6_path=
            /* Pdot */[1,
             /* Pident */[0,
              Ident["create_persistent"]("CamlinternalFormatBasics")],
             "format6",
             0];
          
          var match$6=ty_exp[1];
          
          var exit$2;
          
          if(typeof match$6=="number")
           {switch(match$6){}}
          else
           {switch(match$6[0])
             {case 3:
               if(Path["same"](match$6[1],fmt6_path))
                {if
                  (Clflags["principal"][1]&&ty_exp[2]!=Btype["generic_level"])
                  {Location["prerr_warning"]
                    (loc,[8,"this coercion to format6"])}
                 else
                  {}
                 
                 var is_format=1;
                 }
               else
                {exit$2=34;}
               
              default:exit$2=34;}}
          
          switch(exit$2){case 34:var is_format=0;}
          
          if(is_format)
           {var init=type_format(loc,cst[1],env);
            
            var format_parsetree=/* record */[0,init[1],sexp[2],init[3]];
            
            return type_expect(in_function,env,format_parsetree,ty_expected);
            }
          else
           {return rue
                    (/* record */[0,
                      /* Texp_constant */[1,cst],
                      loc,
                      0,
                      Ctype["instance_def"](Predef["type_string"]),
                      env,
                      sexp[3]]);
            }
          
         default:
          return rue
                  (/* record */[0,
                    /* Texp_constant */[1,cst],
                    loc,
                    0,
                    type_constant(cst),
                    env,
                    sexp[3]]);
          }
       
      case 2:
       var rec_flag=match[1];
       
       var exit$3;
       
       if(rec_flag!=0)
        {exit$3=208;}
       else
        {var match$7=match[2];
         
         if(match$7)
          {var match$8=match$7[1];
           
           if(match$8[3])
            {exit$3=208;}
           else
            {if(match$7[2])
              {exit$3=208;}
             else
              {var spat=match$8[1];
               
               if(contains_gadt(env,spat))
                {return type_expect
                         (in_function,
                          env,
                          /* record */[0,
                           /* Pexp_match */[6,
                            match$8[2],
                            /* :: */[0,Ast_helper["Exp"][37](spat,0,match[3]),0]],
                           sexp[2],
                           sexp[3]],
                          ty_expected);
                 }
               else
                {exit$3=208;}
               }
             }
           }
         else
          {exit$3=208;}
         }
       
       switch(exit$3)
        {case 208:
          var sbody=match[3];
          
          var match$9=sexp[3];
          
          var exit$4;
          
          if(match$9)
           {switch(match$9[1][1][1])
             {case "#default":if(match$9[2]){exit$4=40;}else{var scp=0;}
              default:exit$4=40;}
            }
          else
           {exit$4=40;}
          
          switch(exit$4)
           {case 40:
             if(rec_flag!=0)
              {var scp=/* Some */[0,/* Idef */[1,loc]];}
             else
              {var scp=/* Some */[0,/* Idef */[1,sbody[2]]];}
             
            }
          
          var match$10=type_let(0,0,env,rec_flag,match[2],scp,1);
          
          var
           body=
            type_expect
             (0,match$10[2],wrap_unpacks(sbody,match$10[3]),ty_expected);
          
          return re
                  (/* record */[0,
                    /* Texp_let */[2,rec_flag,match$10[1],body],
                    loc,
                    0,
                    body[4],
                    env,
                    sexp[3]]);
          
         }
       
      case 3:
       return type_function
               (in_function,loc,sexp[3],env,ty_expected,"",match[1]);
       
      case 4:
       var match$11=match[2];
       
       var l=match[1];
       
       if(match$11)
        {var $$default=match$11[1];
         
         if(Btype["is_optional"](l))
          {}
         else
          {throw [0,Assert_failure,[0,"typing/typecore.ml",1852,6]];}
         
         var default_loc=$$default[2];
         
         var
          scases=
           /* :: */[0,
            Ast_helper["Exp"][37]
             (Ast_helper["Pat"][9]
               (/* Some */[0,default_loc],
                0,
                Typedtree["mknoloc"]([1,[0,"*predef*"],"Some"]),
                /* Some */[0,
                 Ast_helper["Pat"][4]
                  (/* Some */[0,default_loc],0,Typedtree["mknoloc"]("*sth*"))]),
              0,
              Ast_helper["Exp"][3]
               (/* Some */[0,default_loc],0,Typedtree["mknoloc"]([0,"*sth*"]))),
            /* :: */[0,
             Ast_helper["Exp"][37]
              (Ast_helper["Pat"][9]
                (/* Some */[0,default_loc],
                 0,
                 Typedtree["mknoloc"]([1,[0,"*predef*"],"None"]),
                 0),
               0,
               $$default),
             0]];
         
         var
          smatch=
           Ast_helper["Exp"][9]
            (/* Some */[0,loc],
             0,
             Ast_helper["Exp"][3]
              (/* Some */[0,loc],0,Typedtree["mknoloc"]([0,"*opt*"])),
             scases);
         
         var
          sfun=
           Ast_helper["Exp"][6]
            (/* Some */[0,loc],
             0,
             l,
             0,
             Ast_helper["Pat"][4]
              (/* Some */[0,loc],0,Typedtree["mknoloc"]("*opt*")),
             Ast_helper["Exp"][5]
              (/* Some */[0,loc],
               /* Some */[0,
                /* :: */[0,
                 /* tuple */[0,Typedtree["mknoloc"]("#default"),[0,0]],
                 0]],
               0,
               /* :: */[0,Ast_helper["Vb"][1](0,0,0,0,match[3],smatch),0],
               match[4]));
         
         return type_expect(in_function,env,sfun,ty_expected);
         }
       else
        {var sexp$1=match[4];
         
         return type_function
                 (in_function,
                  loc,
                  sexp$1[3],
                  env,
                  ty_expected,
                  l,
                  /* :: */[0,/* record */[0,match[3],0,sexp$1],0]);
         }
       
      case 5:
       var sargs=match[2];
       
       if(sargs=0)
        {Syntaxerr["ill_formed_ast"]
          (loc,"Function application with no argument.")}
       else
        {}
       
       Ctype["begin_def"](0);
       if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
       
       var funct=type_exp(env,match[1]);
       
       if(Clflags["principal"][1])
        {Ctype["end_def"](0),Ctype["generalize_structure"](funct[4])}
       else
        {}
       
       var
        lower_args=
         function(seen,ty_fun)
          {var ty=Ctype["expand_head"](env,ty_fun);
           
           if(List["memq"](ty,seen))
            {return 0;}
           else
            {var match$12=ty[1];
             
             var exit$5;
             
             if(typeof match$12=="number")
              {switch(match$12){}}
             else
              {switch(match$12[0])
                {case 1:
                  try
                   {Ctype["unify_var"](env,Ctype["newvar"](0,0),match$12[2])}
                  catch(exn)
                   {if(exn[1]=Ctype["Unify"])
                     {throw [0,Assert_failure,[0,"typing/typecore.ml",1903,65]];}
                    else
                     {throw exn;}
                    }
                  
                  return lower_args(/* :: */[0,ty,seen],match$12[3]);
                  
                 default:exit$5=49;}}
             
             switch(exit$5){case 49:return 0;}
             }
           };
       
       var ty=Ctype["instance"](0,env,funct[4]);
       
       Ctype["end_def"](0);
       Ctype["wrap_trace_gadt_instances"](env,lower_args(0),ty);
       Ctype["begin_def"](0);
       var match$12=type_application(env,funct,sargs);
       
       Ctype["end_def"](0);
       Ctype["unify_var"](env,Ctype["newvar"](0,0),funct[4]);
       return rue
               (/* record */[0,
                 /* Texp_apply */[4,funct,match$12[1]],
                 loc,
                 0,
                 match$12[2],
                 env,
                 sexp[3]]);
       
      case 6:
       Ctype["begin_def"](0);
       var arg=type_exp(env,match[1]);
       
       Ctype["end_def"](0);
       if(is_nonexpansive(arg))
        {Ctype["generalize"](arg[4])}
       else
        {Ctype["generalize_expansive"](env,arg[4])}
       
       var
        split_cases=
         function(vc,ec,param)
          {if(param)
            {var c=param[1];
             
             var match$13=c[1][1];
             
             var exit$5;
             
             if(typeof match$13=="number")
              {switch(match$13){}}
             else
              {switch(match$13[0])
                {case 14:
                  return split_cases
                          (vc,
                           /* :: */[0,/* record */[0,match$13[1],c[2],c[3]],ec],
                           param[2]);
                  
                 default:exit$5=55;}}
             
             switch(exit$5)
              {case 55:return split_cases(/* :: */[0,c,vc],ec,param[2]);}
             }
           else
            {return /* tuple */[0,List["rev"](vc),List["rev"](ec)];}
           };
       
       var match$13=split_cases(0,0,match[2]);
       
       var exn_caselist=match$13[2];
       
       var val_caselist=match$13[1];
       
       if((val_caselist=0)&&exn_caselist!=0)
        {throw [0,$$Error,loc,env,7];}
       else
        {}
       
       var match$14=type_cases(0,env,arg[4],ty_expected,1,loc,val_caselist);
       
       var
        match$15=
         type_cases(0,env,Predef["type_exn"],ty_expected,0,loc,exn_caselist);
       
       return re
               (/* record */[0,
                 /* Texp_match */[5,arg,match$14[1],match$15[1],match$14[2]],
                 loc,
                 0,
                 Ctype["instance"](0,env,ty_expected),
                 env,
                 sexp[3]]);
       
      case 7:
       var body$1=type_expect(0,env,match[1],ty_expected);
       
       var
        match$16=
         type_cases(0,env,Predef["type_exn"],ty_expected,0,loc,match[2]);
       
       return re
               (/* record */[0,
                 /* Texp_try */[6,body$1,match$16[1]],
                 loc,
                 0,
                 body$1[4],
                 env,
                 sexp[3]]);
       
      case 8:
       var sexpl=match[1];
       
       if(List["length"](sexpl)<2)
        {Syntaxerr["ill_formed_ast"]
          (loc,"Tuples must have at least 2 components.")}
       else
        {}
       
       var
        subtypes=
         List["map"](function(param){return Btype["newgenvar"](0,0);},sexpl);
       
       var to_unify=Btype["newgenty"](/* Ttuple */[2,subtypes]);
       
       unify_exp_types(loc,env,to_unify,ty_expected);
       var
        expl=
         List["map2"]
          (function(body$2,ty$1){return type_expect(0,env,body$2,ty$1);},
           sexpl,
           subtypes);
       
       return re
               (/* record */[0,
                 /* Texp_tuple */[7,expl],
                 loc,
                 0,
                 Ctype["newty"]
                  (/* Ttuple */[2,List["map"](function(e){return e[4];},expl)]),
                 env,
                 sexp[3]]);
       
      case 9:
       return type_construct(env,loc,match[1],match[2],ty_expected,sexp[3]);
      case 10:
       var sarg=match[2];
       
       var l$1=match[1];
       
       var ty_expected0=Ctype["instance"](0,env,ty_expected);
       
       try
        {var match$17=Ctype["expand_head"](env,ty_expected);
         
         var match$18=Ctype["expand_head"](env,ty_expected0);
         
         var exit$5;
         
         if(sarg)
          {var match$19=match$17[1];
           
           if(typeof match$19=="number")
            {switch(match$19){}}
           else
            {switch(match$19[0])
              {case 8:
                var match$20=match$18[1];
                
                if(typeof match$20=="number")
                 {switch(match$20){}}
                else
                 {switch(match$20[0])
                   {case 8:
                     var row=Btype["row_repr"](match$19[1]);
                     
                     var
                      match$21=
                       Btype["row_field_repr"](List["assoc"](l$1,row[1]));
                     
                     var
                      match$22=
                       Btype["row_field_repr"](List["assoc"](l$1,match$20[1][1]));
                     
                     var exit$6;
                     
                     if(typeof match$21=="number")
                      {switch(match$21){case 0:exit$6=66;}}
                     else
                      {switch(match$21[0])
                        {case 0:
                          var match$23=match$21[1];
                          
                          if(match$23)
                           {if(typeof match$22=="number")
                             {switch(match$22){case 0:exit$6=66;}}
                            else
                             {switch(match$22[0])
                               {case 0:
                                 var match$24=match$22[1];
                                 
                                 if(match$24)
                                  {var
                                    arg$1=
                                     type_argument(env,sarg[1],match$23[1],match$24[1]);
                                   
                                   return re
                                           (/* record */[0,
                                             /* Texp_variant */[9,l$1,/* Some */[0,arg$1]],
                                             loc,
                                             0,
                                             ty_expected0,
                                             env,
                                             sexp[3]]);
                                   }
                                 else
                                  {exit$6=66;}
                                 
                                case 1:exit$6=66;
                                }}
                            }
                          else
                           {exit$6=66;}
                          
                         case 1:exit$6=66;
                         }}
                     
                     switch(exit$6){case 66:throw Not_found;}
                     
                    default:exit$5=68;}}
                
               default:exit$5=68;}}
           }
         else
          {exit$5=68;}
         
         switch(exit$5){case 68:throw Not_found;}
         }
       catch(exn)
        {if(exn=Not_found)
          {var arg$2=Misc["may_map"](type_exp(env),sarg);
           
           var
            arg_type=
             Misc["may_map"](function(arg$3){return arg$3[4];},arg$2);
           
           return rue
                   (/* record */[0,
                     /* Texp_variant */[9,l$1,arg$2],
                     loc,
                     0,
                     Ctype["newty"]
                      (/* Tvariant */[8,
                        /* record */[0,
                         /* :: */[0,/* tuple */[0,l$1,/* Rpresent */[0,arg_type]],0],
                         Ctype["newvar"](0,0),
                         0,
                         0,
                         0,
                         0]]),
                     env,
                     sexp[3]]);
           }
         else
          {throw exn;}
         }
       
      case 11:
       var opt_sexp=match[2];
       
       var lid_sexp_list=match[1];
       
       if(lid_sexp_list=0)
        {Syntaxerr["ill_formed_ast"](loc,"Records cannot be empty.")}
       else
        {}
       
       if(opt_sexp)
        {if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
         
         var exp=type_exp(env,opt_sexp[1]);
         
         if(Clflags["principal"][1])
          {Ctype["end_def"](0),Ctype["generalize_structure"](exp[4])}
         else
          {}
         
         var opt_exp=/* Some */[0,exp];
         }
       else
        {var opt_exp=0;}
       
       var
        get_path=
         function(ty$1)
          {try
            {var match$25=extract_concrete_record(env,ty$1);
             
             return /* Some */[0,
                     /* tuple */[0,
                      match$25[1],
                      match$25[2],
                      (ty$1[2]=Btype["generic_level"])||!Clflags["principal"][1]]];
             }
           catch(exn$1){if(exn$1=Not_found){return 0;}else{throw exn$1;}}
           };
       
       var op=get_path(ty_expected);
       
       if(op)
        {var match$25=/* tuple */[0,ty_expected,op];}
       else
        {if(opt_exp)
          {var op$1=get_path(opt_exp[1][4]);
           
           if(op$1)
            {var p$prime=op$1[1][2];
             
             var decl=Env["find_type"](p$prime,env);
             
             Ctype["begin_def"](0);
             var
              ty$1=
               Ctype["newconstr"](p$prime,Ctype["instance_list"](env,decl[1]));
             
             Ctype["end_def"](0);
             Ctype["generalize_structure"](ty$1);
             var match$25=/* tuple */[0,ty$1,op$1];
             }
           else
            {var match$25=/* tuple */[0,Ctype["newvar"](0,0),0];}
           }
         else
          {var match$25=/* tuple */[0,Ctype["newvar"](0,0),0];}
         }
       
       var ty_record=match$25[1];
       
       var closed=opt_sexp=0;
       
       var
        lbl_exp_list=
         wrap_disambiguate
          ("This record expression is expected to have",
           ty_record,
           type_label_a_list
            (0,loc,closed,env,type_label_exp(1,env,loc,ty_record),match$25[2]),
           lid_sexp_list);
       
       unify_exp_types(loc,env,ty_record,Ctype["instance"](0,env,ty_expected));
       var
        check_duplicates=
         function(param)
          {if(param)
            {var rem=param[2];
             
             var lbl1=param[1][2];
             
             var exit$7;
             
             if(rem)
              {if(lbl1[5]=rem[1][2][5])
                {throw [0,
                        $$Error,
                        loc,
                        env,
                        /* Label_multiply_defined */[10,lbl1[1]]];
                 }
               else
                {exit$7=80;}
               }
             else
              {exit$7=80;}
             
             switch(exit$7){case 80:return check_duplicates(rem);}
             }
           else
            {return 0;}
           };
       
       check_duplicates(lbl_exp_list);
       if(opt_exp)
        {if(lbl_exp_list)
          {var exp$1=opt_exp[1];
           
           var ty_exp$1=Ctype["instance"](0,env,exp$1[4]);
           
           var
            unify_kept=
             function(lbl)
              {if
                (List["for_all"]
                  (function(param){return param[2][5]!=lbl[5];},lbl_exp_list))
                {var match$26=Ctype["instance_label"](0,lbl);
                 
                 var match$27=Ctype["instance_label"](0,lbl);
                 
                 Ctype["unify"](env,match$26[2],match$27[2]);
                 Ctype["unify"]
                  (env,Ctype["instance"](0,env,ty_expected),match$27[3]);
                 return unify_exp_types(exp$1[2],env,ty_exp$1,match$26[3]);
                 }
               else
                {return 0;}
               };
           
           $$Array["iter"](unify_kept,lbl_exp_list[1][2][6]);
           var newrecord="unknown primitive:duprecord regular 6";
           
           var opt_exp$1=/* Some */[0,(newrecord[4]=ty_exp$1,0,newrecord)];
           }
         else
          {throw [0,Assert_failure,[0,"typing/typecore.ml",2092,15]];}
         }
       else
        {var opt_exp$1=0;}
       
       if(lbl_exp_list)
        {var num_fields=lbl_exp_list[1][2][6]["length"];}
       else
        {throw [0,Assert_failure,[0,"typing/typecore.ml",2095,38]];}
       
       if((opt_sexp=0)&&List["length"](lid_sexp_list)!=num_fields)
        {var
          present_indices=
           List["map"](function(param){return param[2][5];},lbl_exp_list);
         
         var label_names=extract_label_names(sexp,env,ty_expected);
         
         var
          missing_labels=
           function(n,param)
            {if(param)
              {var rem=param[2];
               
               if(List["mem"](n,present_indices))
                {return missing_labels(n+1,rem);}
               else
                {return /* :: */[0,param[1],missing_labels(n+1,rem)];}
               }
             else
              {return 0;}
             };
         
         var missing=missing_labels(0,label_names);
         
         throw [0,$$Error,loc,env,/* Label_missing */[11,missing]];
         }
       else
        {if(opt_sexp!=0&&(List["length"](lid_sexp_list)=num_fields))
          {Location["prerr_warning"](loc,11)}
         else
          {}
         }
       
       return re
               (/* record */[0,
                 /* Texp_record */[10,lbl_exp_list,opt_exp$1],
                 loc,
                 0,
                 Ctype["instance"](0,env,ty_expected),
                 env,
                 sexp[3]]);
       
      case 12:
       var lid$1=match[2];
       
       var match$26=type_label_access(env,loc,match[1],lid$1);
       
       var label=match$26[2];
       
       var record=match$26[1];
       
       var match$27=Ctype["instance_label"](0,label);
       
       unify_exp(env,record,match$27[3]);
       return rue
               (/* record */[0,
                 /* Texp_field */[11,record,lid$1,label],
                 loc,
                 0,
                 match$27[2],
                 env,
                 sexp[3]]);
       
      case 13:
       var lid$2=match[2];
       
       var match$28=type_label_access(env,loc,match[1],lid$2);
       
       var record$1=match$28[1];
       
       if(match$28[3]=0)
        {var ty_record$1=Ctype["newvar"](0,0);}
       else
        {var ty_record$1=record$1[4];}
       
       var
        match$29=
         type_label_exp
          (0,env,loc,ty_record$1,/* tuple */[0,lid$2,match$28[2],match[3]]);
       
       var label$1=match$29[2];
       
       unify_exp(env,record$1,ty_record$1);
       if(label$1[4]=0)
        {throw [0,$$Error,loc,env,/* Label_not_mutable */[12,lid$2[1]]];}
       else
        {}
       
       return rue
               (/* record */[0,
                 /* Texp_setfield */[12,
                  record$1,
                  match$29[1],
                  label$1,
                  match$29[3]],
                 loc,
                 0,
                 Ctype["instance_def"](Predef["type_unit"]),
                 env,
                 sexp[3]]);
       
      case 14:
       var ty$2=Btype["newgenvar"](0,0);
       
       var to_unify$1=Predef["type_array"](ty$2);
       
       unify_exp_types(loc,env,to_unify$1,ty_expected);
       var
        argl=
         List["map"]
          (function(sarg$1){return type_expect(0,env,sarg$1,ty$2);},match[1]);
       
       return re
               (/* record */[0,
                 /* Texp_array */[13,argl],
                 loc,
                 0,
                 Ctype["instance"](0,env,ty_expected),
                 env,
                 sexp[3]]);
       
      case 15:
       var sifnot=match[3];
       
       var sifso=match[2];
       
       var cond=type_expect(0,env,match[1],Predef["type_bool"]);
       
       if(sifnot)
        {var ifso=type_expect(0,env,sifso,ty_expected);
         
         var ifnot=type_expect(0,env,sifnot[1],ty_expected);
         
         unify_exp(env,ifnot,ifso[4]);
         return re
                 (/* record */[0,
                   /* Texp_ifthenelse */[14,cond,ifso,/* Some */[0,ifnot]],
                   loc,
                   0,
                   ifso[4],
                   env,
                   sexp[3]]);
         }
       else
        {var ifso$1=type_expect(0,env,sifso,Predef["type_unit"]);
         
         return rue
                 (/* record */[0,
                   /* Texp_ifthenelse */[14,cond,ifso$1,0],
                   loc,
                   0,
                   ifso$1[4],
                   env,
                   sexp[3]]);
         }
       
      case 16:
       var exp1=type_statement(env,match[1]);
       
       var exp2=type_expect(0,env,match[2],ty_expected);
       
       return re
               (/* record */[0,
                 /* Texp_sequence */[15,exp1,exp2],
                 loc,
                 0,
                 exp2[4],
                 env,
                 sexp[3]]);
       
      case 17:
       var cond$1=type_expect(0,env,match[1],Predef["type_bool"]);
       
       var body$2=type_statement(env,match[2]);
       
       return rue
               (/* record */[0,
                 /* Texp_while */[16,cond$1,body$2],
                 loc,
                 0,
                 Ctype["instance_def"](Predef["type_unit"]),
                 env,
                 sexp[3]]);
       
      case 18:
       var param=match[1];
       
       var low=type_expect(0,env,match[2],Predef["type_int"]);
       
       var high=type_expect(0,env,match[3],Predef["type_int"]);
       
       var match$30=param[1];
       
       if(typeof match$30=="number")
        {switch(match$30)
          {case 0:var match$31=/* tuple */[0,Ident["create"]("_for"),env];}}
       else
        {switch(match$30[0])
          {case 0:
            var
             match$31=
              Env["enter_value"]
               (/* Some */[0,
                 function(s){return /* Unused_for_index */[19,s];}],
                match$30[1][1],
                /* record */[0,
                 Ctype["instance_def"](Predef["type_int"]),
                 0,
                 loc,
                 0],
                env);
            
           default:throw [0,$$Error,param[2],env,6];}}
       
       var body$3=type_statement(match$31[2],match[5]);
       
       return rue
               (/* record */[0,
                 /* Texp_for */[17,match$31[1],param,low,high,match[4],body$3],
                 loc,
                 0,
                 Ctype["instance_def"](Predef["type_unit"]),
                 env,
                 sexp[3]]);
       
      case 19:
       var sarg$1=match[1];
       
       var separate=1;
       
       if(separate){Ctype["begin_def"](0)}else{}
       
       var cty=Typetexp["transl_simple_type"](env,0,match[2]);
       
       var ty$3=cty[2];
       
       if(separate)
        {Ctype["end_def"](0);
         Ctype["generalize_structure"](ty$3);
         var
          match$32=
           /* tuple */[0,
            type_argument(env,sarg$1,ty$3,Ctype["instance"](0,env,ty$3)),
            Ctype["instance"](0,env,ty$3)];
         }
       else
        {var match$32=/* tuple */[0,type_argument(env,sarg$1,ty$3,ty$3),ty$3];
         }
       
       var arg$3=match$32[1];
       
       return rue
               (/* record */[0,
                 arg$3[1],
                 arg$3[2],
                 /* :: */[0,
                  /* tuple */[0,/* Texp_constraint */[0,cty],loc,sexp[3]],
                  arg$3[3]],
                 match$32[2],
                 env,
                 arg$3[6]]);
       
      case 20:
       var sty$prime=match[3];
       
       var sty=match[2];
       
       var sarg$2=match[1];
       
       var separate$1=1;
       
       if(sty)
        {if(separate$1){Ctype["begin_def"](0)}else{}
         
         var match$33=Typetexp["transl_simple_type_delayed"](env,sty[1]);
         
         var cty$1=match$33[1];
         
         var match$34=Typetexp["transl_simple_type_delayed"](env,sty$prime);
         
         var cty$prime=match$34[1];
         
         var ty$4=cty$1[2];
         
         var ty$prime=cty$prime[2];
         
         try
          {var force$prime$prime=Ctype["subtype"](env,ty$4,ty$prime);
           
           match$33[2](0),match$34[2](0),force$prime$prime(0)}
         catch(exn$1)
          {if(exn$1[1]=Ctype["Subtype"])
            {throw [0,$$Error,loc,env,/* Not_subtype */[23,exn$1[2],exn$1[3]]];
             }
           else
            {throw exn$1;}
           }
         
         if(separate$1)
          {Ctype["end_def"](0);
           Ctype["generalize_structure"](ty$4);
           Ctype["generalize_structure"](ty$prime);
           var
            match$35=
             /* tuple */[0,
              type_argument(env,sarg$2,ty$4,Ctype["instance"](0,env,ty$4)),
              Ctype["instance"](0,env,ty$prime),
              /* Some */[0,cty$1],
              cty$prime];
           }
         else
          {var
            match$35=
             /* tuple */[0,
              type_argument(env,sarg$2,ty$4,ty$4),
              ty$prime,
              /* Some */[0,cty$1],
              cty$prime];
           }
         }
       else
        {var match$36=Typetexp["transl_simple_type_delayed"](env,sty$prime);
         
         var force=match$36[2];
         
         var cty$prime$1=match$36[1];
         
         var ty$prime$1=cty$prime$1[2];
         
         if(separate$1){Ctype["begin_def"](0)}else{}
         
         var arg$4=type_exp(env,sarg$2);
         
         if(separate$1)
          {Ctype["end_def"](0);
           var tv=Ctype["newvar"](0,0);
           
           var gen=generalizable(tv[2],arg$4[4]);
           
           Ctype["unify_var"](env,tv,arg$4[4]);
           var gen$1=gen;
           }
         else
          {var gen$1=1;}
         
         var match$37=arg$4[1];
         
         var match$38=self_coercion[1];
         
         var match$39=Ctype["repr"](ty$prime$1)[1];
         
         var exit$7;
         
         switch(match$37)
          {case 0:
            var $js$4=match$37[3][2];
            if(typeof $js$4=="number")
             {switch($js$4){}}
            else
             {switch($js$4[0])
               {case 2:
                 if(match$38)
                  {if(typeof match$39=="number")
                    {switch(match$39){}}
                   else
                    {switch(match$39[0])
                      {case 3:
                        var match$40=match$38[1];
                        
                        var r=match$40[2];
                        
                        if(Path["same"](match$40[1],match$39[1]))
                         {r[1]=/* :: */[0,loc,r[1]],0,force(0)}
                        else
                         {exit$7=125;}
                        
                       default:exit$7=125;}}
                   }
                 else
                  {exit$7=125;}
                 
                default:exit$7=125;}}
            
           default:exit$7=125;}
         
         switch(exit$7)
          {case 125:
            if
             ((Ctype["free_variables"](/* Some */[0,env],arg$4[4])=0)&&
              (Ctype["free_variables"](/* Some */[0,env],ty$prime$1)=0))
             {var snap=Btype["snapshot"](0);
              
              var match$41=Ctype["enlarge_type"](env,ty$prime$1);
              
              try
               {force(0);
                Ctype["unify"](env,arg$4[4],match$41[1]);
                var $js$5=1;
                }
              catch(exn$2)
               {if(exn$2[1]=Ctype["Unify"])
                 {Btype["backtrack"](snap);var $js$5=0;}
                else
                 {throw exn$2;}
                }
              if(!gen$1&&$js$5)
               {}
              else
               {try
                 {var force$prime=Ctype["subtype"](env,arg$4[4],ty$prime$1);
                  
                  force(0);
                  force$prime(0);
                  if(!gen$1)
                   {Location["prerr_warning"](loc,[8,"this ground coercion"])}
                  else
                   {}
                  }
                catch(exn$3)
                 {if(exn$3[1]=Ctype["Subtype"])
                   {throw [0,
                           $$Error,
                           loc,
                           env,
                           /* Not_subtype */[23,exn$3[2],exn$3[3]]];
                    }
                  else
                   {throw exn$3;}
                  }
                }
              }
            else
             {var match$42=Ctype["enlarge_type"](env,ty$prime$1);
              
              force(0);
              try
               {Ctype["unify"](env,arg$4[4],match$42[1])}
              catch(exn$4)
               {if(exn$4[1]=Ctype["Unify"])
                 {throw [0,
                         $$Error,
                         sarg$2[2],
                         env,
                         /* Coercion_failure */[25,
                          ty$prime$1,
                          Ctype["full_expand"](env,ty$prime$1),
                          exn$4[2],
                          match$42[2]]];
                  }
                else
                 {throw exn$4;}
                }
              }
            
           }
         
         var match$35=/* tuple */[0,arg$4,ty$prime$1,0,cty$prime$1];
         }
       
       var arg$5=match$35[1];
       
       return rue
               (/* record */[0,
                 arg$5[1],
                 arg$5[2],
                 /* :: */[0,
                  /* tuple */[0,
                   /* Texp_coerce */[1,match$35[3],match$35[4]],
                   loc,
                   sexp[3]],
                  arg$5[3]],
                 match$35[2],
                 env,
                 arg$5[6]]);
       
      case 21:
       var met=match[2];
       
       var e=match[1];
       
       if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
       
       var obj=type_exp(env,e);
       
       try
        {var match$43=obj[1];
         
         var exit$8;
         
         switch(match$43)
          {case 0:
            var match$44=match$43[3][2];
            
            var lid$3=match$43[2];
            
            if(typeof match$44=="number")
             {switch(match$44){}}
            else
             {switch(match$44[0])
               {case 2:
                 var
                  match$45=
                   Ctype["filter_self_method"]
                    (env,met,0,match$44[1],match$44[4]);
                 
                 var typ=match$45[2];
                 
                 if(Btype["is_Tvar"](Ctype["repr"](typ)))
                  {Location["prerr_warning"]
                    (loc,/* Undeclared_virtual_method */[7,met])}
                 else
                  {}
                 
                 var
                  match$46=
                   /* tuple */[0,/* Tmeth_val */[1,match$45[1]],0,typ];
                 
                case 3:
                 var cl_num=match$44[2];
                 
                 try
                  {var method_id=List["assoc"](met,match$44[1]);}
                 catch(exn$5)
                  {if(exn$5=Not_found)
                    {throw [0,
                            $$Error,
                            e[2],
                            env,
                            /* Undefined_inherited_method */[17,met]];
                     }
                   else
                    {throw exn$5;}
                   }
                 
                 var
                  match$47=
                   Env["lookup_value"]
                    (/* Lident */[0,Pervasives["^"]("selfpat-",cl_num)],env);
                 
                 var
                  match$48=
                   Env["lookup_value"]
                    (/* Lident */[0,Pervasives["^"]("self-",cl_num)],env);
                 
                 var desc$1=match$47[2];
                 
                 var match$49=desc$1[2];
                 
                 var exit$9;
                 
                 if(typeof match$49=="number")
                  {switch(match$49){}}
                 else
                  {switch(match$49[0])
                    {case 2:
                      var
                       match$50=
                        Ctype["filter_self_method"]
                         (env,met,0,match$49[1],match$49[4]);
                      
                      var typ$1=match$50[2];
                      
                      var method_type=Ctype["newvar"](0,0);
                      
                      var match$51=Ctype["filter_arrow"](env,method_type,"");
                      
                      Ctype["unify"](env,match$51[1],desc$1[1]);
                      Ctype["unify"]
                       (env,match$51[2],Ctype["instance"](0,env,typ$1));
                      var
                       exp$2=
                        /* Texp_apply */[4,
                         /* record */[0,
                          /* Texp_ident */[0,
                           /* Pident */[0,method_id],
                           lid$3,
                           /* record */[0,method_type,0,Location["none"],0]],
                          loc,
                          0,
                          method_type,
                          env,
                          0],
                         /* :: */[0,
                          /* tuple */[0,
                           "",
                           /* Some */[0,
                            /* record */[0,
                             /* Texp_ident */[0,match$48[1],lid$3,desc$1],
                             obj[2],
                             0,
                             desc$1[1],
                             env,
                             0]],
                           0],
                          0]];
                      
                      var
                       match$46=
                        /* tuple */[0,
                         /* Tmeth_name */[0,met],
                         /* Some */[0,re(/* record */[0,exp$2,loc,0,typ$1,env,0])],
                         typ$1];
                      
                     default:exit$9=150;}}
                 
                 switch(exit$9)
                  {case 150:
                    throw [0,Assert_failure,[0,"typing/typecore.ml",2384,18]];
                   }
                 
                default:exit$8=153;}}
            
           default:exit$8=153;}
         
         switch(exit$8)
          {case 153:
            var
             match$46=
              /* tuple */[0,
               /* Tmeth_name */[0,met],
               0,
               Ctype["filter_method"](env,met,1,obj[4])];
            
           }
         
         var typ$2=match$46[3];
         
         if(Clflags["principal"][1])
          {Ctype["end_def"](0),Ctype["generalize_structure"](typ$2)}
         else
          {}
         
         var ty$5=Ctype["repr"](typ$2);
         
         var match$52=ty$5[1];
         
         var exit$10;
         
         if(typeof match$52=="number")
          {switch(match$52){}}
         else
          {switch(match$52[0])
            {case 0:
              var ty$prime$2=Ctype["newvar"](0,0);
              
              Ctype["unify"]
               (env,
                Ctype["instance_def"](ty$5),
                Ctype["newty"](/* Tpoly */[10,ty$prime$2,0]));
              var typ$3=ty$prime$2;
              
             case 10:
              var tl=match$52[2];
              
              var ty$6=match$52[1];
              
              if(tl)
               {var l$2=ty$5[2];
                
                if(Clflags["principal"][1]&&l$2!=Btype["generic_level"])
                 {Location["prerr_warning"]
                   (loc,[8,"this use of a polymorphic method"])}
                else
                 {}
                
                var typ$3=Ctype["instance_poly"](0,0,tl,ty$6)[2];
                }
              else
               {var typ$3=Ctype["instance"](0,env,ty$6);}
              
             default:exit$10=142;}}
         
         switch(exit$10)
          {case 142:throw [0,Assert_failure,[0,"typing/typecore.ml",2410,14]];
           }
         
         return rue
                 (/* record */[0,
                   /* Texp_send */[18,obj,match$46[1],match$46[2]],
                   loc,
                   0,
                   typ$3,
                   env,
                   sexp[3]]);
         }
       catch(exn$6)
        {if(exn$6[1]=Ctype["Unify"])
          {throw [0,$$Error,e[2],env,/* Undefined_method */[16,obj[4],met]];}
         else
          {throw exn$6;}
         }
       
      case 22:
       var cl=match[1];
       
       var match$53=Typetexp["find_class"](env,loc,cl[1]);
       
       var cl_decl=match$53[2];
       
       var match$54=cl_decl[4];
       
       if(match$54)
        {return rue
                 (/* record */[0,
                   /* Texp_new */[19,match$53[1],cl,cl_decl],
                   loc,
                   0,
                   Ctype["instance_def"](match$54[1]),
                   env,
                   sexp[3]]);
         }
       else
        {throw [0,$$Error,loc,env,/* Virtual_class */[18,cl[1]]];}
       
      case 23:
       var lab=match[1];
       
       try
        {var match$55=Env["lookup_value"](/* Lident */[0,lab[1]],env);
         
         var desc$2=match$55[2];
         
         var match$56=desc$2[2];
         
         var exit$11;
         
         if(typeof match$56=="number")
          {switch(match$56){}}
         else
          {switch(match$56[0])
            {case 1:
              if(match$56[1]!=0)
               {var
                 newval=
                  type_expect
                   (0,env,match[2],Ctype["instance"](0,env,desc$2[1]));
                
                var
                 match$57=
                  Env["lookup_value"]
                   (/* Lident */[0,Pervasives["^"]("self-",match$56[2])],env);
                
                return rue
                        (/* record */[0,
                          /* Texp_setinstvar */[21,match$57[1],match$55[1],lab,newval],
                          loc,
                          0,
                          Ctype["instance_def"](Predef["type_unit"]),
                          env,
                          sexp[3]]);
                }
              else
               {throw [0,
                       $$Error,
                       loc,
                       env,
                       /* Instance_variable_not_mutable */[22,1,lab[1]]];
                }
              
             default:exit$11=160;}}
         
         switch(exit$11)
          {case 160:
            throw [0,
                   $$Error,
                   loc,
                   env,
                   /* Instance_variable_not_mutable */[22,0,lab[1]]];
            
           }
         }
       catch(exn$7)
        {if(exn$7=Not_found)
          {throw [0,
                  $$Error,
                  loc,
                  env,
                  /* Unbound_instance_variable */[21,lab[1]]];
           }
         else
          {throw exn$7;}
         }
       
      case 24:
       var lst=match[1];
       
       var
        match$58=
         List["fold_right"]
          (function(param$1,l$3)
            {var lab$1=param$1[1];
             
             if
              (List["exists"]
                (function(l$4){return "unknown primitive:caml_string_equal";},
                 l$3))
              {throw [0,
                      $$Error,
                      loc,
                      env,
                      /* Value_multiply_overridden */[24,lab$1[1]]];
               }
             else
              {}
             
             return /* :: */[0,lab$1,l$3];
             },
           lst,
           0);
       
       try
        {var
          match$59=
           /* tuple */[0,
            Env["lookup_value"]([0,"selfpat-*"],env),
            Env["lookup_value"]([0,"self-*"],env)];
         }
       catch(exn$8)
        {if(exn$8=Not_found){throw [0,$$Error,loc,env,0];}else{throw exn$8;}}
       
       var match$60=match$59[1][2];
       
       var match$61=match$60[2];
       
       var exit$12;
       
       if(typeof match$61=="number")
        {switch(match$61){}}
       else
        {switch(match$61[0])
          {case 2:
            var vars=match$61[2];
            
            var
             type_override=
              function(param$1)
               {var lab$1=param$1[1];
                
                try
                 {var match$62=Types["Vars"][22](lab$1[1],vars[1]);
                  
                  return /* tuple */[0,
                          /* Pident */[0,match$62[1]],
                          lab$1,
                          type_expect
                           (0,env,param$1[2],Ctype["instance"](0,env,match$62[4]))];
                  }
                catch(exn$9)
                 {if(exn$9=Not_found)
                   {throw [0,
                           $$Error,
                           loc,
                           env,
                           /* Unbound_instance_variable */[21,lab$1[1]]];
                    }
                  else
                   {throw exn$9;}
                  }
                };
            
            var modifs=List["map"](type_override,lst);
            
            return rue
                    (/* record */[0,
                      /* Texp_override */[22,match$59[2][1],modifs],
                      loc,
                      0,
                      match$60[1],
                      env,
                      sexp[3]]);
            
           default:exit$12=168;}}
       
       switch(exit$12)
        {case 168:throw [0,Assert_failure,[0,"typing/typecore.ml",2494,10]];}
       
      case 25:
       var name$1=match[1];
       
       var ty$7=Ctype["newvar"](0,0);
       
       Ctype["begin_def"](0);
       Ident["set_current_time"](ty$7[2]);
       var context=Typetexp["narrow"](0);
       
       var modl=type_module[1](env,match[2]);
       
       var match$62=Env["enter_module"](0,name$1[1],modl[3],env);
       
       var new_env=match$62[2];
       
       Ctype["init_def"](Ident["current_time"](0));
       Typetexp["widen"](context);
       var body$4=type_expect(0,new_env,match[3],ty_expected);
       
       Ctype["end_def"](0);
       try
        {Ctype["unify_var"](new_env,ty$7,body$4[4])}
       catch(exn$9)
        {if(exn$9[1]=Ctype["Unify"])
          {throw [0,
                  $$Error,
                  loc,
                  env,
                  /* Scoping_let_module */[28,name$1[1],body$4[4]]];
           }
         else
          {throw exn$9;}
         }
       
       return re
               (/* record */[0,
                 /* Texp_letmodule */[23,match$62[1],name$1,modl,body$4],
                 loc,
                 0,
                 ty$7,
                 env,
                 sexp[3]]);
       
      case 26:
       var cond$2=type_expect(0,env,match[1],Predef["type_bool"]);
       
       var match$63=cond$2[1];
       
       var exit$13;
       
       switch(match$63)
        {case 8:
          switch(match$63[2][1])
           {case "false":var exp_type=Ctype["instance"](0,env,ty_expected);
            default:exit$13=176;}
          
         default:exit$13=176;}
       
       switch(exit$13)
        {case 176:var exp_type=Ctype["instance_def"](Predef["type_unit"]);}
       
       return rue
               (/* record */[0,
                 /* Texp_assert */[24,cond$2],
                 loc,
                 0,
                 exp_type,
                 env,
                 sexp[3]]);
       
      case 27:
       var ty$8=Btype["newgenvar"](0,0);
       
       var to_unify$2=Predef["type_lazy_t"](ty$8);
       
       unify_exp_types(loc,env,to_unify$2,ty_expected);
       var arg$6=type_expect(0,env,match[1],ty$8);
       
       return re
               (/* record */[0,
                 /* Texp_lazy */[25,arg$6],
                 loc,
                 0,
                 Ctype["instance"](0,env,ty_expected),
                 env,
                 sexp[3]]);
       
      case 28:
       var sty$1=match[2];
       
       var sbody$1=match[1];
       
       if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
       
       if(sty$1)
        {var sty$2=Ast_helper["Typ"][15](sty$1[1]);
         
         var cty$2=Typetexp["transl_simple_type"](env,0,sty$2);
         
         var
          match$64=
           /* tuple */[0,Ctype["repr"](cty$2[2]),/* Some */[0,cty$2]];
         }
       else
        {var match$64=/* tuple */[0,Ctype["repr"](ty_expected),0];}
       
       var ty$9=match$64[1];
       
       if(Clflags["principal"][1])
        {Ctype["end_def"](0),Ctype["generalize_structure"](ty$9)}
       else
        {}
       
       if(sty$1!=0)
        {unify_exp_types
          (loc,
           env,
           Ctype["instance"](0,env,ty$9),
           Ctype["instance"](0,env,ty_expected))}
       else
        {}
       
       var match$65=Ctype["expand_head"](env,ty$9)[1];
       
       var exit$14;
       
       if(typeof match$65=="number")
        {switch(match$65){}}
       else
        {switch(match$65[0])
          {case 0:
            var exp$3=type_exp(env,sbody$1);
            
            var newrecord$1="unknown primitive:duprecord regular 6";
            
            newrecord$1[4]=Ctype["newty"](/* Tpoly */[10,exp$3[4],0]),0;
            var exp$4=newrecord$1;
            
            unify_exp(env,exp$4,ty$9);
            var exp$5=exp$4;
            
           case 10:
            var tl$1=match$65[2];
            
            var ty$prime$3=match$65[1];
            
            if(tl$1)
             {Ctype["begin_def"](0);
              if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
              
              var match$66=Ctype["instance_poly"](0,1,tl$1,ty$prime$3);
              
              var ty$prime$prime=match$66[2];
              
              if(Clflags["principal"][1])
               {Ctype["end_def"](0),
                Ctype["generalize_structure"](ty$prime$prime)}
              else
               {}
              
              var exp$6=type_expect(0,env,sbody$1,ty$prime$prime);
              
              Ctype["end_def"](0);
              check_univars(env,0,"method",exp$6,ty_expected,match$66[1]);
              var newrecord$2="unknown primitive:duprecord regular 6";
              
              newrecord$2[4]=Ctype["instance"](0,env,ty$9),0;
              var exp$5=newrecord$2;
              }
            else
             {var exp$7=type_expect(0,env,sbody$1,ty$prime$3);
              
              var newrecord$3="unknown primitive:duprecord regular 6";
              
              newrecord$3[4]=Ctype["instance"](0,env,ty$9),0;
              var exp$5=newrecord$3;
              }
            
           default:exit$14=188;}}
       
       switch(exit$14)
        {case 188:throw [0,Assert_failure,[0,"typing/typecore.ml",2600,15]];}
       
       var newrecord$4="unknown primitive:duprecord regular 6";
       
       return re
               ((newrecord$4[3]=
                 /* :: */[0,
                  /* tuple */[0,/* Texp_poly */[3,match$64[2]],loc,sexp[3]],
                  exp$5[3]],
                 0,
                 newrecord$4));
       
      case 29:
       var match$67=type_object[1](env,loc,match[1]);
       
       return rue
               (/* record */[0,
                 /* Texp_object */[26,match$67[1],match$67[3]],
                 loc,
                 0,
                 match$67[2][1],
                 env,
                 sexp[3]]);
       
      case 30:
       var name$2=match[1];
       
       var ty$10=Ctype["newvar"](0,0);
       
       Ctype["begin_def"](0);
       var level=Ctype["get_current_level"](0);
       
       var
        decl$1=
         /* record */[0,
          0,
          0,
          0,
          1,
          0,
          0,
          /* Some */[0,/* tuple */[0,level,level]],
          loc,
          0];
       
       Ident["set_current_time"](ty$10[2]);
       var match$68=Env["enter_type"](name$2,decl$1,env);
       
       var id=match$68[1];
       
       Ctype["init_def"](Ident["current_time"](0));
       var body$5=type_exp(match$68[2],match[2]);
       
       var seen=Hashtbl["create"](0,8);
       
       var
        replace=
         function(t)
          {if(Hashtbl["mem"](seen,t[3]))
            {return 0;}
           else
            {Hashtbl["add"](seen,t[3],0);
             var match$69=t[1];
             
             var exit$15;
             
             if(typeof match$69=="number")
              {switch(match$69){}}
             else
              {switch(match$69[0])
                {case 3:
                  var match$70=match$69[1];
                  
                  switch(match$70)
                   {case 0:
                     if(id=match$70[1])
                      {return Btype["link_type"](t,ty$10);}
                     else
                      {exit$15=195;}
                     
                    case 1:exit$15=195;
                    case 2:exit$15=195;
                    }
                  
                 default:exit$15=195;}}
             
             switch(exit$15)
              {case 195:return Btype["iter_type_expr"](replace,t);}
             }
           };
       
       var ety=Subst["type_expr"](Subst["identity"],body$5[4]);
       
       replace(ety);
       Ctype["end_def"](0);
       return rue
               (/* record */[0,
                 body$5[1],
                 loc,
                 /* :: */[0,
                  /* tuple */[0,/* Texp_newtype */[4,name$2],loc,sexp[3]],
                  body$5[3]],
                 ety,
                 body$5[5],
                 body$5[6]]);
       
      case 31:
       var
        match$69=
         Ctype["expand_head"](env,Ctype["instance"](0,env,ty_expected));
       
       var match$70=match$69[1];
       
       var exit$15;
       
       if(typeof match$70=="number")
        {switch(match$70){}}
       else
        {switch(match$70[0])
          {case 0:throw [0,$$Error,loc,env,3];
           case 11:
            if
             (Clflags["principal"][1]&&
              Ctype["expand_head"](env,ty_expected)[2]<
              Btype["generic_level"])
             {Location["prerr_warning"](loc,[8,"this module packing"])}
            else
             {}
            
            var match$71=/* tuple */[0,match$70[1],match$70[2],match$70[3]];
            
           default:exit$15=203;}}
       
       switch(exit$15)
        {case 203:
          throw [0,$$Error,loc,env,/* Not_a_packed_module */[32,ty_expected]];
         }
       
       var nl=match$71[2];
       
       var p=match$71[1];
       
       var match$72=type_package[1](env,match[1],p,nl,match$71[3]);
       
       return rue
               (/* record */[0,
                 /* Texp_pack */[27,match$72[1]],
                 loc,
                 0,
                 Ctype["newty"](/* Tpackage */[11,p,nl,match$72[2]]),
                 env,
                 sexp[3]]);
       
      case 32:
       var lid$4=match[2];
       
       var ovf=match[1];
       
       var match$73=type_open[1](ovf,env,sexp[2],lid$4);
       
       var newenv=match$73[2];
       
       var exp$8=type_expect(0,newenv,match[3],ty_expected);
       
       var newrecord$5="unknown primitive:duprecord regular 6";
       
       newrecord$5[3]=
       /* :: */[0,
        /* tuple */[0,
         /* Texp_open */[2,ovf,match$73[1],lid$4,newenv],
         loc,
         sexp[3]],
        exp$8[3]],
       0;
       return newrecord$5;
       
      case 33:
       throw [0,Error_forward,Typetexp["error_of_extension"](match[1])];
      }
    };

var
 type_function=
  function(in_function,loc,attrs,env,ty_expected,l,caselist)
   {if(in_function)
     {var match=in_function[1];}
    else
     {var match=/* tuple */[0,loc,Ctype["instance"](0,env,ty_expected)];}
    
    var ty_fun=match[2];
    
    var loc_fun=match[1];
    
    var separate=Clflags["principal"][1]||Env["has_local_constraints"](env);
    
    if(separate){Ctype["begin_def"](0)}else{}
    
    try
     {var
       match$1=
        Ctype["filter_arrow"](env,Ctype["instance"](0,env,ty_expected),l);
      }
    catch(exn)
     {if(exn[1]=Ctype["Unify"])
       {var ty=Ctype["expand_head"](env,ty_expected);
        
        var match$2=ty[1];
        
        var exit;
        
        if(typeof match$2=="number")
         {switch(match$2){}}
        else
         {switch(match$2[0])
           {case 1:
             throw [0,$$Error,loc,env,/* Abstract_wrong_label */[27,l,ty]];
            default:exit=217;}}
        
        switch(exit)
         {case 217:
           throw [0,
                  $$Error,
                  loc_fun,
                  env,
                  /* Too_many_arguments */[26,in_function!=0,ty_fun]];
           
          }
        }
      else
       {throw exn;}
      }
    
    var ty_res=match$1[2];
    
    var ty_arg=match$1[1];
    
    if(Btype["is_optional"](l))
     {var tv=Ctype["newvar"](0,0);
      
      try
       {Ctype["unify"](env,ty_arg,type_option(tv))}
      catch(exn$1)
       {if(exn$1[1]=Ctype["Unify"])
         {throw [0,Assert_failure,[0,"typing/typecore.ml",2706,24]];}
        else
         {throw exn$1;}
        }
      
      var ty_arg$1=type_option(tv);
      }
    else
     {var ty_arg$1=ty_arg;}
    
    if(separate)
     {Ctype["end_def"](0),
      Ctype["generalize_structure"](ty_arg$1),
      Ctype["generalize_structure"](ty_res)}
    else
     {}
    
    var
     match$3=
      type_cases
       (/* Some */[0,/* tuple */[0,loc_fun,ty_fun]],
        env,
        ty_arg$1,
        ty_res,
        1,
        loc,
        caselist);
    
    var cases=match$3[1];
    
    var
     not_function=
      function(ty$1)
       {var match$4=list_labels(env,ty$1);return (match$4[1]=0)&&!match$4[2];};
    
    if(Btype["is_optional"](l)&&not_function(ty_res))
     {Location["prerr_warning"](List["hd"](cases)[1][2],8)}
    else
     {}
    
    return re
            (/* record */[0,
              /* Texp_function */[3,l,cases,match$3[2]],
              loc,
              0,
              Ctype["instance"]
               (0,env,Btype["newgenty"](/* Tarrow */[1,l,ty_arg$1,ty_res,0])),
              env,
              attrs]);
    };

var
 type_label_access=
  function(env,loc,srecord,lid)
   {if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
    
    var record=type_exp(env,srecord);
    
    if(Clflags["principal"][1])
     {Ctype["end_def"](0),Ctype["generalize_structure"](record[4])}
    else
     {}
    
    var ty_exp=record[4];
    
    try
     {var match=extract_concrete_record(env,ty_exp);
      
      var
       opath=
        /* Some */[0,
         /* tuple */[0,
          match[1],
          match[2],
          (ty_exp[2]=Btype["generic_level"])||!Clflags["principal"][1]]];
      }
    catch(exn){if(exn=Not_found){var opath=0;}else{throw exn;}}
    
    var labels=Typetexp["find_all_labels"](env,lid[2],lid[1]);
    
    var
     label=
      wrap_disambiguate
       ("This expression has",ty_exp,Label[7](0,0,0,lid,env,opath),labels);
    
    return /* tuple */[0,record,label,opath];
    };

var
 type_format=
  function(loc,str,env)
   {var loc$1=/* record */[0,loc[1],loc[2],1];
    
    try
     {var
       mk_exp_loc=
        function(pexp_desc){return /* record */[0,pexp_desc,loc$1,0];};
      
      var mk_lid_loc=function(lid){return /* record */[0,lid,loc$1];};
      
      var
       mk_constr=
        function(name,args)
         {var lid=/* Ldot */[1,[0,"CamlinternalFormatBasics"],name];
          
          if(args)
           {if(args[2])
             {var arg=/* Some */[0,mk_exp_loc(/* Pexp_tuple */[8,args])];}
            else
             {var arg=/* Some */[0,args[1]];}
            }
          else
           {var arg=0;}
          
          return mk_exp_loc(/* Pexp_construct */[9,mk_lid_loc(lid),arg]);
          };
      
      var
       mk_cst=
        function(cst){return mk_exp_loc(/* Pexp_constant */[1,cst]);};
      
      var mk_int=function(n){return mk_cst(/* Const_int */[0,n]);};
      
      var
       mk_string=
        function(str$1){return mk_cst(/* Const_string */[2,str$1,0]);};
      
      var mk_char=function(chr){return mk_cst(/* Const_char */[1,chr]);};
      
      var
       mk_formatting_lit=
        function(fmting)
         {if(typeof fmting=="number")
           {switch(fmting)
             {case 0:return mk_constr("Close_box",0);
              case 1:return mk_constr("Close_tag",0);
              case 2:return mk_constr("FFlush",0);
              case 3:return mk_constr("Force_newline",0);
              case 4:return mk_constr("Flush_newline",0);
              case 5:return mk_constr("Escaped_at",0);
              case 6:return mk_constr("Escaped_percent",0);
              }}
          else
           {switch(fmting[0])
             {case 0:
               return mk_constr
                       ("Break",
                        /* :: */[0,
                         mk_string(fmting[1]),
                         /* :: */[0,
                          mk_int(fmting[2]),
                          /* :: */[0,mk_int(fmting[3]),0]]]);
               
              case 1:
               return mk_constr
                       ("Magic_size",
                        /* :: */[0,
                         mk_string(fmting[1]),
                         /* :: */[0,mk_int(fmting[2]),0]]);
               
              case 2:
               return mk_constr("Scan_indic",/* :: */[0,mk_char(fmting[1]),0]);
               
              }}
          };
      
      var
       mk_formatting_gen=
        function(fmting)
         {switch(fmting)
           {case 0:
             var match=fmting[1];
             
             return mk_constr
                     ("Open_tag",/* :: */[0,mk_format(match[1],match[2]),0]);
             
            case 1:
             var match$1=fmting[1];
             
             return mk_constr
                     ("Open_box",/* :: */[0,mk_format(match$1[1],match$1[2]),0]);
             
            }
          };
      
      var
       mk_format=
        function(fmt,str$1)
         {return mk_constr
                  ("Format",
                   /* :: */[0,mk_fmt(fmt),/* :: */[0,mk_string(str$1),0]]);
          };
      
      var
       mk_side=
        function(side)
         {switch(side[0])
           {case 0:return mk_constr("Left",0);
            case 1:return mk_constr("Right",0);
            case 2:return mk_constr("Zeros",0);
            }
          };
      
      var
       mk_iconv=
        function(iconv)
         {switch(iconv[0])
           {case 0:return mk_constr("Int_d",0);
            case 1:return mk_constr("Int_pd",0);
            case 2:return mk_constr("Int_sd",0);
            case 3:return mk_constr("Int_i",0);
            case 4:return mk_constr("Int_pi",0);
            case 5:return mk_constr("Int_si",0);
            case 6:return mk_constr("Int_x",0);
            case 7:return mk_constr("Int_Cx",0);
            case 8:return mk_constr("Int_X",0);
            case 9:return mk_constr("Int_CX",0);
            case 10:return mk_constr("Int_o",0);
            case 11:return mk_constr("Int_Co",0);
            case 12:return mk_constr("Int_u",0);
            }
          };
      
      var
       mk_fconv=
        function(fconv)
         {switch(fconv[0])
           {case 0:return mk_constr("Float_f",0);
            case 1:return mk_constr("Float_pf",0);
            case 2:return mk_constr("Float_sf",0);
            case 3:return mk_constr("Float_e",0);
            case 4:return mk_constr("Float_pe",0);
            case 5:return mk_constr("Float_se",0);
            case 6:return mk_constr("Float_E",0);
            case 7:return mk_constr("Float_pE",0);
            case 8:return mk_constr("Float_sE",0);
            case 9:return mk_constr("Float_g",0);
            case 10:return mk_constr("Float_pg",0);
            case 11:return mk_constr("Float_sg",0);
            case 12:return mk_constr("Float_G",0);
            case 13:return mk_constr("Float_pG",0);
            case 14:return mk_constr("Float_sG",0);
            case 15:return mk_constr("Float_F",0);
            }
          };
      
      var
       mk_counter=
        function(cnt)
         {switch(cnt[0])
           {case 0:return mk_constr("Line_counter",0);
            case 1:return mk_constr("Char_counter",0);
            case 2:return mk_constr("Token_counter",0);
            }
          };
      
      var
       mk_int_opt=
        function(n_opt)
         {if(n_opt)
           {var lid_loc=mk_lid_loc([0,"Some"]);
            
            return mk_exp_loc
                    (/* Pexp_construct */[9,
                      lid_loc,
                      /* Some */[0,mk_int(n_opt[1])]]);
            }
          else
           {var lid_loc$1=mk_lid_loc([0,"None"]);
            
            return mk_exp_loc(/* Pexp_construct */[9,lid_loc$1,0]);
            }
          };
      
      var
       mk_fmtty=
        function(fmtty)
         {if(typeof fmtty=="number")
           {switch(fmtty){case 0:return mk_constr("End_of_fmtty",0);}}
          else
           {switch(fmtty[0])
             {case 0:
               return mk_constr("Char_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 1:
               return mk_constr("String_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 2:
               return mk_constr("Int_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 3:
               return mk_constr("Int32_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 4:
               return mk_constr
                       ("Nativeint_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
               
              case 5:
               return mk_constr("Int64_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 6:
               return mk_constr("Float_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 7:
               return mk_constr("Bool_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 8:
               return mk_constr
                       ("Format_arg_ty",
                        /* :: */[0,
                         mk_fmtty(fmtty[1]),
                         /* :: */[0,mk_fmtty(fmtty[2]),0]]);
               
              case 9:
               return mk_constr
                       ("Format_subst_ty",
                        /* :: */[0,
                         mk_fmtty(fmtty[1]),
                         /* :: */[0,
                          mk_fmtty(fmtty[2]),
                          /* :: */[0,mk_fmtty(fmtty[3]),0]]]);
               
              case 10:
               return mk_constr("Alpha_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 11:
               return mk_constr("Theta_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 12:
               return mk_constr("Any_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 13:
               return mk_constr("Reader_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
              case 14:
               return mk_constr
                       ("Ignored_reader_ty",/* :: */[0,mk_fmtty(fmtty[1]),0]);
               
              }}
          };
      
      var
       mk_ignored=
        function(ign)
         {if(typeof ign=="number")
           {switch(ign)
             {case 0:return mk_constr("Ignored_char",0);
              case 1:return mk_constr("Ignored_caml_char",0);
              case 2:return mk_constr("Ignored_bool",0);
              case 3:return mk_constr("Ignored_reader",0);
              case 4:return mk_constr("Ignored_scan_next_char",0);
              }}
          else
           {switch(ign[0])
             {case 0:
               return mk_constr
                       ("Ignored_string",/* :: */[0,mk_int_opt(ign[1]),0]);
               
              case 1:
               return mk_constr
                       ("Ignored_caml_string",/* :: */[0,mk_int_opt(ign[1]),0]);
               
              case 2:
               return mk_constr
                       ("Ignored_int",
                        /* :: */[0,
                         mk_iconv(ign[1]),
                         /* :: */[0,mk_int_opt(ign[2]),0]]);
               
              case 3:
               return mk_constr
                       ("Ignored_int32",
                        /* :: */[0,
                         mk_iconv(ign[1]),
                         /* :: */[0,mk_int_opt(ign[2]),0]]);
               
              case 4:
               return mk_constr
                       ("Ignored_nativeint",
                        /* :: */[0,
                         mk_iconv(ign[1]),
                         /* :: */[0,mk_int_opt(ign[2]),0]]);
               
              case 5:
               return mk_constr
                       ("Ignored_int64",
                        /* :: */[0,
                         mk_iconv(ign[1]),
                         /* :: */[0,mk_int_opt(ign[2]),0]]);
               
              case 6:
               return mk_constr
                       ("Ignored_float",
                        /* :: */[0,
                         mk_int_opt(ign[1]),
                         /* :: */[0,mk_int_opt(ign[2]),0]]);
               
              case 7:
               return mk_constr
                       ("Ignored_format_arg",
                        /* :: */[0,
                         mk_int_opt(ign[1]),
                         /* :: */[0,mk_fmtty(ign[2]),0]]);
               
              case 8:
               return mk_constr
                       ("Ignored_format_subst",
                        /* :: */[0,
                         mk_int_opt(ign[1]),
                         /* :: */[0,mk_fmtty(ign[2]),0]]);
               
              case 9:
               return mk_constr
                       ("Ignored_scan_char_set",
                        /* :: */[0,
                         mk_int_opt(ign[1]),
                         /* :: */[0,mk_string(ign[2]),0]]);
               
              case 10:
               return mk_constr
                       ("Ignored_scan_get_counter",
                        /* :: */[0,mk_counter(ign[1]),0]);
               
              }}
          };
      
      var
       mk_padding=
        function(pad)
         {if(typeof pad=="number")
           {switch(pad){case 0:return mk_constr("No_padding",0);}}
          else
           {switch(pad[0])
             {case 0:
               return mk_constr
                       ("Lit_padding",
                        /* :: */[0,mk_side(pad[1]),/* :: */[0,mk_int(pad[2]),0]]);
               
              case 1:
               return mk_constr("Arg_padding",/* :: */[0,mk_side(pad[1]),0]);
              }}
          };
      
      var
       mk_precision=
        function(prec)
         {if("unknown primitive:isint")
           {if(prec!=0)
             {return mk_constr("Arg_precision",0);}
            else
             {return mk_constr("No_precision",0);}
            }
          else
           {return mk_constr("Lit_precision",/* :: */[0,mk_int(prec[1]),0]);}
          };
      
      var
       mk_fmt=
        function(fmt)
         {if(typeof fmt=="number")
           {switch(fmt){case 0:return mk_constr("End_of_format",0);}}
          else
           {switch(fmt[0])
             {case 0:return mk_constr("Char",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 1:
               return mk_constr("Caml_char",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 2:
               return mk_constr
                       ("String",
                        /* :: */[0,mk_padding(fmt[1]),/* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 3:
               return mk_constr
                       ("Caml_string",
                        /* :: */[0,mk_padding(fmt[1]),/* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 4:
               return mk_constr
                       ("Int",
                        /* :: */[0,
                         mk_iconv(fmt[1]),
                         /* :: */[0,
                          mk_padding(fmt[2]),
                          /* :: */[0,
                           mk_precision(fmt[3]),
                           /* :: */[0,mk_fmt(fmt[4]),0]]]]);
               
              case 5:
               return mk_constr
                       ("Int32",
                        /* :: */[0,
                         mk_iconv(fmt[1]),
                         /* :: */[0,
                          mk_padding(fmt[2]),
                          /* :: */[0,
                           mk_precision(fmt[3]),
                           /* :: */[0,mk_fmt(fmt[4]),0]]]]);
               
              case 6:
               return mk_constr
                       ("Nativeint",
                        /* :: */[0,
                         mk_iconv(fmt[1]),
                         /* :: */[0,
                          mk_padding(fmt[2]),
                          /* :: */[0,
                           mk_precision(fmt[3]),
                           /* :: */[0,mk_fmt(fmt[4]),0]]]]);
               
              case 7:
               return mk_constr
                       ("Int64",
                        /* :: */[0,
                         mk_iconv(fmt[1]),
                         /* :: */[0,
                          mk_padding(fmt[2]),
                          /* :: */[0,
                           mk_precision(fmt[3]),
                           /* :: */[0,mk_fmt(fmt[4]),0]]]]);
               
              case 8:
               return mk_constr
                       ("Float",
                        /* :: */[0,
                         mk_fconv(fmt[1]),
                         /* :: */[0,
                          mk_padding(fmt[2]),
                          /* :: */[0,
                           mk_precision(fmt[3]),
                           /* :: */[0,mk_fmt(fmt[4]),0]]]]);
               
              case 9:return mk_constr("Bool",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 10:return mk_constr("Flush",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 11:
               return mk_constr
                       ("String_literal",
                        /* :: */[0,mk_string(fmt[1]),/* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 12:
               return mk_constr
                       ("Char_literal",
                        /* :: */[0,mk_char(fmt[1]),/* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 13:
               return mk_constr
                       ("Format_arg",
                        /* :: */[0,
                         mk_int_opt(fmt[1]),
                         /* :: */[0,mk_fmtty(fmt[2]),/* :: */[0,mk_fmt(fmt[3]),0]]]);
               
              case 14:
               return mk_constr
                       ("Format_subst",
                        /* :: */[0,
                         mk_int_opt(fmt[1]),
                         /* :: */[0,mk_fmtty(fmt[2]),/* :: */[0,mk_fmt(fmt[3]),0]]]);
               
              case 15:return mk_constr("Alpha",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 16:return mk_constr("Theta",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 17:
               return mk_constr
                       ("Formatting_lit",
                        /* :: */[0,
                         mk_formatting_lit(fmt[1]),
                         /* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 18:
               return mk_constr
                       ("Formatting_gen",
                        /* :: */[0,
                         mk_formatting_gen(fmt[1]),
                         /* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 19:return mk_constr("Reader",/* :: */[0,mk_fmt(fmt[1]),0]);
              case 20:
               return mk_constr
                       ("Scan_char_set",
                        /* :: */[0,
                         mk_int_opt(fmt[1]),
                         /* :: */[0,mk_string(fmt[2]),/* :: */[0,mk_fmt(fmt[3]),0]]]);
               
              case 21:
               return mk_constr
                       ("Scan_get_counter",
                        /* :: */[0,mk_counter(fmt[1]),/* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 22:
               return mk_constr("Scan_next_char",/* :: */[0,mk_fmt(fmt[1]),0]);
               
              case 23:
               return mk_constr
                       ("Ignored_param",
                        /* :: */[0,mk_ignored(fmt[1]),/* :: */[0,mk_fmt(fmt[2]),0]]);
               
              case 24:
               throw [0,Assert_failure,[0,"typing/typecore.ml",2989,10]];
              }}
          };
      
      var legacy_behavior=!Clflags["strict_formats"][1];
      
      var
       match=
        CamlinternalFormat["fmt_ebb_of_string"]
         (/* Some */[0,legacy_behavior],str);
      
      return mk_constr
              ("Format",
               /* :: */[0,mk_fmt(match[1]),/* :: */[0,mk_string(str),0]]);
      }
    catch(exn)
     {if(exn[1]=Failure)
       {throw [0,$$Error,loc$1,env,/* Invalid_format */[15,exn[2]]];}
      else
       {throw exn;}
      }
    };

var
 type_label_exp=
  function(create,env,loc,ty_expected,param)
   {var sarg=param[3];
    
    var label=param[2];
    
    var lid=param[1];
    
    Ctype["begin_def"](0);
    var separate=Clflags["principal"][1]||Env["has_local_constraints"](env);
    
    if(separate){Ctype["begin_def"](0),Ctype["begin_def"](0)}else{}
    
    var match=Ctype["instance_label"](1,label);
    
    var ty_res=match[3];
    
    var ty_arg=match[2];
    
    var vars=match[1];
    
    if(separate)
     {Ctype["end_def"](0),
      Ctype["generalize_structure"](ty_arg),
      Ctype["generalize_structure"](ty_res)}
    else
     {}
    
    try
     {Ctype["unify"]
       (env,
        Ctype["instance_def"](ty_res),
        Ctype["instance"](0,env,ty_expected))}
    catch(exn)
     {if(exn[1]=Ctype["Unify"])
       {throw [0,$$Error,lid[2],env,/* Label_mismatch */[2,lid[1],exn[2]]];}
      else
       {throw exn;}
      }
    
    var ty_arg$1=Ctype["instance_def"](ty_arg);
    
    if(separate)
     {Ctype["end_def"](0),Ctype["generalize_structure"](ty_arg$1)}
    else
     {}
    
    if(label[8]=0)
     {if(create)
       {throw [0,$$Error,loc,env,/* Private_type */[19,ty_expected]];}
      else
       {throw [0,
               $$Error,
               lid[2],
               env,
               /* Private_label */[20,lid[1],ty_expected]];
        }
      }
    else
     {}
    
    if(vars=0){var snap=0;}else{var snap=/* Some */[0,Btype["snapshot"](0)];}
    
    var
     arg=
      type_argument(env,sarg,ty_arg$1,Ctype["instance"](0,env,ty_arg$1));
    
    Ctype["end_def"](0);
    try
     {check_univars(env,vars!=0,"field value",arg,label[3],vars);
      var arg$1=arg;
      }
    catch(exn$1)
     {if(!is_nonexpansive(arg))
       {try
         {Misc["may"](Btype["backtrack"],snap);
          Ctype["begin_def"](0);
          var arg$2=type_exp(env,sarg);
          
          Ctype["end_def"](0);
          Ctype["generalize_expansive"](env,arg$2[4]);
          unify_exp(env,arg$2,ty_arg$1);
          check_univars(env,0,"field value",arg$2,label[3],vars);
          var arg$1=arg$2;
          }
        catch(e)
         {var exit;
          
          if(e[1]=$$Error)
           {var $js=e[4];
            if(typeof $js=="number")
             {switch($js){}}
            else
             {switch($js[0]){case 31:throw e;default:exit=244;}}
            }
          else
           {exit=244;}
          
          switch(exit){case 244:throw exn$1;}
          }
        }
      else
       {throw exn$1;}
      }
    
    var newrecord="unknown primitive:duprecord regular 6";
    
    return /* tuple */[0,
            lid,
            label,
            (newrecord[4]=Ctype["instance"](0,env,arg$1[4]),0,newrecord)];
    };

var
 type_argument=
  function(env,sarg,ty_expected$prime,ty_expected)
   {var
     no_labels=
      function(ty)
       {var match=list_labels(env,ty);
        
        return !match[2]&&
               List["for_all"]
                (function(prim,prim$1){return "unknown primitive:caml_equal";}
                  (""),
                 match[1]);
        };
    
    var
     is_inferred=
      function(sexp)
       {var match=sexp[1];
        
        var exit;
        
        switch(match)
         {case 0:exit=270;
          case 5:exit=270;
          case 12:exit=270;
          case 15:
           var match$1=match[3];
           
           if(match$1)
            {return is_inferred(match[2])&&is_inferred(match$1[1]);}
           else
            {exit=272;}
           
          case 16:var e=match[2];exit=271;
          case 19:exit=270;
          case 20:exit=270;
          case 21:exit=270;
          case 22:exit=270;
          case 32:var e=match[3];exit=271;
          default:exit=272;}
        
        switch(exit)
         {case 272:return 0;case 270:return 1;case 271:return is_inferred(e);}
        };
    
    var match=Ctype["expand_head"](env,ty_expected$prime);
    
    var match$1=match[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 1:
         switch(match$1[1])
          {case "":
            var ty_res=match$1[3];
            
            var lv=match[2];
            
            if(is_inferred(sarg))
             {if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
              
              var texp=type_exp(env,sarg);
              
              if(Clflags["principal"][1])
               {Ctype["end_def"](0),Ctype["generalize_structure"](texp[4])}
              else
               {}
              
              var
               make_args=
                function(args,ty_fun)
                 {var match$2=Ctype["expand_head"](env,ty_fun)[1];
                  
                  var exit$1;
                  
                  if(typeof match$2=="number")
                   {switch(match$2){}}
                  else
                   {switch(match$2[0])
                     {case 0:return /* tuple */[0,List["rev"](args),ty_fun,0];
                      case 1:
                       var ty_fun$1=match$2[3];
                       
                       var l=match$2[1];
                       
                       if(Btype["is_optional"](l))
                        {var
                          ty=
                           option_none(Ctype["instance"](0,env,match$2[2]),sarg[2]);
                         
                         return make_args
                                 (/* :: */[0,/* tuple */[0,l,/* Some */[0,ty],1],args],
                                  ty_fun$1);
                         }
                       else
                        {if
                          ("unknown primitive:caml_string_equal"||
                           Clflags["classic"][1])
                          {return /* tuple */[0,
                                   List["rev"](args),
                                   ty_fun,
                                   no_labels(ty_fun$1)];
                           }
                         else
                          {exit$1=265;}
                         }
                       
                      default:exit$1=265;}}
                  
                  switch(exit$1){case 265:return /* tuple */[0,0,texp[4],0];}
                  };
              
              var match$2=make_args(0,texp[4]);
              
              var ty_fun$prime=match$2[2];
              
              var args=match$2[1];
              
              var
               warn=
                Clflags["principal"][1]&&
                (lv!=
                 Btype["generic_level"]||
                 Ctype["repr"](ty_fun$prime)[2]!=
                 Btype["generic_level"]);
              
              var newrecord="unknown primitive:duprecord regular 6";
              
              newrecord[4]=Ctype["instance"](0,env,texp[4]),0;
              var texp$1=newrecord;
              
              var ty_fun=Ctype["instance"](0,env,ty_fun$prime);
              
              if(!(match$2[3]||no_labels(ty_res)))
               {unify_exp(env,texp$1,ty_expected);return texp$1;}
              else
               {var newrecord$1="unknown primitive:duprecord regular 6";
                
                unify_exp
                 (env,(newrecord$1[4]=ty_fun,0,newrecord$1),ty_expected);
                if(args=0)
                 {return texp$1;}
                else
                 {var
                   var_pair=
                    function(name,ty)
                     {var id=Ident["create"](name);
                      
                      return /* tuple */[0,
                              /* record */[0,
                               /* Tpat_var */[0,id,Typedtree["mknoloc"](name)],
                               Location["none"],
                               0,
                               ty,
                               env,
                               0],
                              /* record */[0,
                               /* Texp_ident */[0,
                                /* Pident */[0,id],
                                Typedtree["mknoloc"](/* Lident */[0,name]),
                                /* record */[0,ty,0,Location["none"],0]],
                               Location["none"],
                               0,
                               ty,
                               env,
                               0]];
                      };
                  
                  var match$3=var_pair("eta",match$1[2]);
                  
                  var eta_var=match$3[2];
                  
                  var eta_pat=match$3[1];
                  
                  var
                   func=
                    function(texp$2)
                     {var
                       e=
                        /* record */[0,
                         /* Texp_apply */[4,
                          texp$2,
                          Pervasives["@"]
                           (args,
                            /* :: */[0,/* tuple */[0,"",/* Some */[0,eta_var],0],0])],
                         texp$2[2],
                         texp$2[3],
                         ty_res,
                         texp$2[5],
                         texp$2[6]];
                      
                      return /* record */[0,
                              /* Texp_function */[3,"",/* :: */[0,$$case(eta_pat,e),0],1],
                              texp$2[2],
                              texp$2[3],
                              ty_fun,
                              texp$2[5],
                              texp$2[6]];
                      };
                  
                  Location["prerr_warning"]
                   (texp$1[2],
                    /* Eliminated_optional_arguments */[31,
                     List["map"](function(param){return param[1];},args)]);
                  if(warn)
                   {Location["prerr_warning"]
                     (texp$1[2],[9,"eliminated optional argument"])}
                  else
                   {}
                  
                  if(is_nonexpansive(texp$1))
                   {return func(texp$1);}
                  else
                   {var match$4=var_pair("arg",texp$1[4]);
                    
                    return re
                            (/* record */[0,
                              /* Texp_let */[2,
                               0,
                               /* :: */[0,
                                /* record */[0,match$4[1],texp$1,0,Location["none"]],
                                0],
                               func(match$4[2])],
                              texp$1[2],
                              texp$1[3],
                              ty_fun,
                              texp$1[5],
                              texp$1[6]]);
                    }
                  }
                }
              }
            else
             {exit=269;}
            
           default:exit=269;}
         
        default:exit=269;}}
    
    switch(exit)
     {case 269:
       var texp$2=type_expect(0,env,sarg,ty_expected$prime);
       
       unify_exp(env,texp$2,ty_expected);
       return texp$2;
       
      }
    };

var
 type_application=
  function(env,funct,sargs)
   {var
     result_type=
      function(omitted,ty_fun)
       {return List["fold_left"]
                (function(ty_fun$1,param)
                  {return Btype["newty2"]
                           (param[3],/* Tarrow */[1,param[1],param[2],ty_fun$1,0]);
                   },
                 ty_fun,
                 omitted);
        };
    
    var
     has_label=
      function(l,ty_fun)
       {var match=list_labels(env,ty_fun);
        
        return match[2]||List["mem"](l,match[1]);
        };
    
    var ignored=[0,0];
    
    var
     type_unknown_args=
      function(args,omitted,ty_fun,param)
       {if(param)
         {var match=param[1];
          
          var sarg1=match[2];
          
          var l1=match[1];
          
          var ty_fun$1=Ctype["expand_head"](env,ty_fun);
          
          var td=ty_fun$1[1];
          
          var exit;
          
          if(typeof td=="number")
           {switch(td){}}
          else
           {switch(td[0])
             {case 0:
               var t1=Ctype["newvar"](0,0);
               
               var t2=Ctype["newvar"](0,0);
               
               var
                not_identity=
                 function(param$1)
                  {var exit$1;
                   
                   switch(param$1)
                    {case 0:
                      var match$1=param$1[3][2];
                      
                      if(typeof match$1=="number")
                       {switch(match$1){}}
                      else
                       {switch(match$1[0])
                         {case 0:
                           switch(match$1[1][1])
                            {case "%identity":return 0;default:exit$1=303;}
                           
                          default:exit$1=303;}}
                      
                     default:exit$1=303;}
                   
                   switch(exit$1){case 303:return 1;}
                   };
               
               if(ty_fun$1[2]>=t1[2]&&not_identity(funct[1]))
                {Location["prerr_warning"](sarg1[2],9)}
               else
                {}
               
               Ctype["unify"]
                (env,
                 ty_fun$1,
                 Ctype["newty"](/* Tarrow */[1,l1,t1,t2,/* Clink */[0,[0,1]]]));
               var match$1=/* tuple */[0,t1,t2];
               
              case 1:
               var l=td[1];
               
               if
                ("unknown primitive:caml_string_equal"||
                 Clflags["classic"][1]&&
                 "unknown primitive:caml_string_equal"&&
                 !Btype["is_optional"](l))
                {var match$1=/* tuple */[0,td[2],td[3]];}
               else
                {exit=311;}
               
              default:exit=311;}}
          
          switch(exit)
           {case 311:
             var exit$1;
             
             if(typeof td=="number")
              {switch(td){}}
             else
              {switch(td[0])
                {case 1:var ty_fun$2=Ctype["newty"](td);default:exit$1=309;}}
             
             switch(exit$1){case 309:var ty_fun$2=ty_fun$1;}
             
             var
              ty_res=
               result_type(Pervasives["@"](omitted,ignored[1]),ty_fun$2);
             
             var match$2=ty_res[1];
             
             var exit$2;
             
             if(typeof match$2=="number")
              {switch(match$2){}}
             else
              {switch(match$2[0])
                {case 1:
                  if(Clflags["classic"][1]||!has_label(l1,ty_fun$2))
                   {throw [0,
                           $$Error,
                           sarg1[2],
                           env,
                           /* Apply_wrong_label */[9,l1,ty_res]];
                    }
                  else
                   {throw [0,$$Error,funct[2],env,1];}
                  
                 default:exit$2=307;}}
             
             switch(exit$2)
              {case 307:
                throw [0,
                       $$Error,
                       funct[2],
                       env,
                       /* Apply_non_function */[8,
                        Ctype["expand_head"](env,funct[4])]];
                
               }
             
            }
          
          var ty1=match$1[1];
          
          if(Btype["is_optional"](l1)){var optional=1;}else{var optional=0;}
          
          var
           arg1=
            function(param$1)
             {var arg1$1=type_expect(0,env,sarg1,ty1);
              
              if(optional=1)
               {unify_exp(env,arg1$1,type_option(Ctype["newvar"](0,0)))}
              else
               {}
              
              return arg1$1;
              };
          
          return type_unknown_args
                  (/* :: */[0,
                    /* tuple */[0,l1,/* Some */[0,arg1],optional],
                    args],
                   omitted,
                   match$1[2],
                   param[2]);
          }
        else
         {return /* tuple */[0,
                  List["map"]
                   (function(param$1)
                     {var match$3=param$1[2];
                      
                      var l$1=param$1[1];
                      
                      if(match$3)
                       {return /* tuple */[0,
                                l$1,
                                /* Some */[0,match$3[1](0)],
                                param$1[3]];
                        }
                      else
                       {return /* tuple */[0,l$1,0,param$1[3]];}
                      },
                    List["rev"](args)),
                  Ctype["instance"](0,env,result_type(omitted,ty_fun))];
          }
        };
    
    var match=list_labels(env,funct[4]);
    
    var
     labels=
      List["filter"](function(l){return !Btype["is_optional"](l);},match[1]);
    
    var
     ignore_labels=
      Clflags["classic"][1]||
      !match[2]&&
      (List["length"](labels)=List["length"](sargs))&&
      List["for_all"]
       (function(param){return "unknown primitive:caml_string_equal";},sargs)&&
      List["exists"]
       (function(l){return "unknown primitive:caml_string_notequal";},labels)&&
      (Location["prerr_warning"](funct[2],3),1);
    
    var warned=[0,0];
    
    var
     type_args=
      function(args,omitted,ty_fun,ty_fun0,ty_old,sargs$1,more_sargs)
       {var match$1=Ctype["expand_head"](env,ty_fun);
        
        var match$2=Ctype["expand_head"](env,ty_fun0);
        
        var match$3=match$1[1];
        
        var exit;
        
        if(typeof match$3=="number")
         {switch(match$3){}}
        else
         {switch(match$3[0])
           {case 1:
             var ty_fun$1=match$3[3];
             
             var ty=match$3[2];
             
             var l=match$3[1];
             
             var lv=match$1[2];
             
             var match$4=match$2[1];
             
             if(typeof match$4=="number")
              {switch(match$4){}}
             else
              {switch(match$4[0])
                {case 1:
                  var ty0=match$4[2];
                  
                  if
                   ((sargs$1!=0||more_sargs!=0)&&
                    (Btype["commu_repr"](match$3[4])=0))
                   {var
                     may_warn=
                      function(loc,w)
                       {if
                         (!warned[1]&&
                          Clflags["principal"][1]&&
                          lv!=
                          Btype["generic_level"])
                         {warned[1]=1,0;return Location["prerr_warning"](loc,w);}
                        else
                         {return 0;}
                        };
                    
                    var name=Btype["label_name"](l);
                    
                    if(Btype["is_optional"](l))
                     {var optional=1;}
                    else
                     {var optional=0;}
                    
                    if(ignore_labels&&!Btype["is_optional"](l))
                     {if(sargs$1)
                       {var match$5=sargs$1[1];
                        
                        throw [0,
                               $$Error,
                               match$5[2][2],
                               env,
                               /* Apply_wrong_label */[9,match$5[1],ty_old]];
                        }
                      else
                       {if(more_sargs)
                         {var match$6=more_sargs[1];
                          
                          var sarg0=match$6[2];
                          
                          var l$prime=match$6[1];
                          
                          if
                           ("unknown primitive:caml_string_notequal"&&
                            "unknown primitive:caml_string_notequal")
                           {throw [0,
                                   $$Error,
                                   sarg0[2],
                                   env,
                                   /* Apply_wrong_label */[9,l$prime,match$1]];
                            }
                          else
                           {var
                             match$7=
                              /* tuple */[0,
                               0,
                               more_sargs[2],
                               /* Some */[0,
                                function(param){return type_argument(env,sarg0,ty,ty0);}]];
                            }
                          }
                        else
                         {throw [0,Assert_failure,[0,"typing/typecore.ml",3248,16]];}
                        }
                      }
                    else
                     {try
                       {try
                         {var match$8=Btype["extract_label"](name,sargs$1);
                          
                          var sargs1=match$8[3];
                          
                          var sarg0$1=match$8[2];
                          
                          if(sargs1!=0)
                           {may_warn(sarg0$1[2],[8,"commuting this argument"])}
                          else
                           {}
                          
                          var
                           match$9=
                            /* tuple */[0,
                             match$8[1],
                             sarg0$1,
                             Pervasives["@"](sargs1,match$8[4]),
                             more_sargs];
                          }
                        catch(exn)
                         {if(exn=Not_found)
                           {var match$10=Btype["extract_label"](name,more_sargs);
                            
                            var sargs1$1=match$10[3];
                            
                            var sarg0$2=match$10[2];
                            
                            if(sargs1$1!=0||sargs$1!=0)
                             {may_warn(sarg0$2[2],[8,"commuting this argument"])}
                            else
                             {}
                            
                            var
                             match$9=
                              /* tuple */[0,
                               match$10[1],
                               sarg0$2,
                               Pervasives["@"](sargs$1,sargs1$1),
                               match$10[4]];
                            }
                          else
                           {throw exn;}
                          }
                        
                        var sarg0$3=match$9[2];
                        
                        var l$prime$1=match$9[1];
                        
                        if((optional=0)&&Btype["is_optional"](l$prime$1))
                         {Location["prerr_warning"]
                           (sarg0$3[2],/* Nonoptional_label */[26,l])}
                        else
                         {}
                        
                        var
                         match$7=
                          /* tuple */[0,
                           match$9[3],
                           match$9[4],
                           (optional=0)||Btype["is_optional"](l$prime$1)
                            ?/* Some */[0,
                              function(param){return type_argument(env,sarg0$3,ty,ty0);}]
                            :(may_warn(sarg0$3[2],[8,"using an optional argument here"]),
                              /* Some */[0,
                               function(param)
                                {return option_some
                                         (type_argument
                                           (env,
                                            sarg0$3,
                                            extract_option_type(env,ty),
                                            extract_option_type(env,ty0)));
                                 }])];
                        }
                      catch(exn$1)
                       {if(exn$1=Not_found)
                         {var
                           match$7=
                            /* tuple */[0,
                             sargs$1,
                             more_sargs,
                             (optional=1)&&
                              (List["mem_assoc"]("",sargs$1)||
                               List["mem_assoc"]("",more_sargs))
                              ?(may_warn(funct[2],[9,"eliminated optional argument"]),
                                ignored[1]=
                                /* :: */[0,/* tuple */[0,l,ty,lv],ignored[1]],
                                0,
                                /* Some */[0,
                                 function(param)
                                  {return option_none
                                           (Ctype["instance"](0,env,ty),Location["none"]);
                                   }])
                              :(may_warn(funct[2],[9,"commuted an argument"]),0)];
                          }
                        else
                         {throw exn$1;}
                        }
                      }
                    
                    var arg=match$7[3];
                    
                    var sargs$2=match$7[1];
                    
                    if(arg=0)
                     {var omitted$1=/* :: */[0,/* tuple */[0,l,ty,lv],omitted];}
                    else
                     {var omitted$1=omitted;}
                    
                    if(sargs$2=0)
                     {var ty_old$1=ty_fun$1;}
                    else
                     {var ty_old$1=ty_old;}
                    
                    return type_args
                            (/* :: */[0,/* tuple */[0,l,arg,optional],args],
                             omitted$1,
                             ty_fun$1,
                             match$4[3],
                             ty_old$1,
                             sargs$2,
                             match$7[2]);
                    }
                  else
                   {exit=295;}
                  
                 default:exit=295;}}
             
            default:exit=295;}}
        
        switch(exit)
         {case 295:
           var exit$1;
           
           if(sargs$1)
            {if(ignore_labels)
              {var match$11=sargs$1[1];
               
               throw [0,
                      $$Error,
                      match$11[2][2],
                      env,
                      /* Apply_wrong_label */[9,match$11[1],ty_old]];
               }
             else
              {exit$1=293;}
             }
           else
            {exit$1=293;}
           
           switch(exit$1)
            {case 293:
              return type_unknown_args
                      (args,omitted,ty_fun0,Pervasives["@"](sargs$1,more_sargs));
              
             }
           
          }
        };
    
    var match$1=funct[1];
    
    var exit;
    
    switch(match$1)
     {case 0:
       var match$2=match$1[3][2];
       
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 0:
            switch(match$2[1][1])
             {case "%ignore":
               if(sargs)
                {var match$3=sargs[1];
                 
                 switch(match$3[1])
                  {case "":
                    if(sargs[2])
                     {exit=279;}
                    else
                     {var
                       match$4=
                        Ctype["filter_arrow"]
                         (env,Ctype["instance"](0,env,funct[4]),"");
                      
                      var exp=type_expect(0,env,match$3[2],match$4[1]);
                      
                      var match$5=Ctype["expand_head"](env,exp[4])[1];
                      
                      var exit$1;
                      
                      if(typeof match$5=="number")
                       {switch(match$5){}}
                      else
                       {switch(match$5[0])
                         {case 0:
                           add_delayed_check
                            (function(param)
                              {return check_application_result(env,0,exp);});
                          case 1:Location["prerr_warning"](exp[2],2);
                          default:exit$1=275;}}
                      
                      switch(exit$1){case 275:}
                      
                      return /* tuple */[0,
                              /* :: */[0,/* tuple */[0,"",/* Some */[0,exp],0],0],
                              match$4[2]];
                      }
                    
                   default:exit=279;}
                 }
               else
                {exit=279;}
               
              default:exit=279;}
            
           default:exit=279;}}
       
      default:exit=279;}
    
    switch(exit)
     {case 279:
       var ty=funct[4];
       
       if(ignore_labels)
        {return type_args(0,0,ty,Ctype["instance"](0,env,ty),ty,0,sargs);}
       else
        {return type_args(0,0,ty,Ctype["instance"](0,env,ty),ty,sargs,0);}
       
      }
    };

var
 type_construct=
  function(env,loc,lid,sarg,ty_expected,attrs)
   {try
     {var match=extract_concrete_variant(env,ty_expected);
      
      var
       opath=
        /* Some */[0,
         /* tuple */[0,
          match[1],
          match[2],
          (ty_expected[2]=Btype["generic_level"])||!Clflags["principal"][1]]];
      }
    catch(exn){if(exn=Not_found){var opath=0;}else{throw exn;}}
    
    var constrs=Typetexp["find_all_constructors"](env,lid[2],lid[1]);
    
    var
     constr=
      wrap_disambiguate
       ("This variant expression is expected to have",
        ty_expected,
        Constructor[7](0,0,0,lid,env,opath),
        constrs);
    
    Env["mark_constructor"](0,env,Longident["last"](lid[1]),constr);
    Typetexp["check_deprecated"](loc,constr[13],constr[1]);
    if(sarg)
     {var se=sarg[1];
      
      var match$1=se[1];
      
      var exit;
      
      switch(match$1)
       {case 8:
         if(constr[5]>1||explicit_arity(attrs))
          {var sargs=match$1[1];}
         else
          {exit=325;}
         
        default:exit=325;}
      
      switch(exit){case 325:var sargs=/* :: */[0,se,0];}
      }
    else
     {var sargs=0;}
    
    if(List["length"](sargs)!=constr[5])
     {throw [0,
             $$Error,
             loc,
             env,
             /* Constructor_arity_mismatch */[1,
              lid[1],
              constr[5],
              List["length"](sargs)]];
      }
    else
     {}
    
    var separate=Clflags["principal"][1]||Env["has_local_constraints"](env);
    
    if(separate){Ctype["begin_def"](0),Ctype["begin_def"](0)}else{}
    
    var match$2=Ctype["instance_constructor"](0,constr);
    
    var ty_res=match$2[2];
    
    var ty_args=match$2[1];
    
    var
     texp=
      re
       (/* record */[0,
         /* Texp_construct */[8,lid,constr,0],
         loc,
         0,
         ty_res,
         env,
         attrs]);
    
    if(separate)
     {Ctype["end_def"](0);
      Ctype["generalize_structure"](ty_res);
      var newrecord="unknown primitive:duprecord regular 6";
      
      unify_exp
       (env,
        (newrecord[4]=Ctype["instance_def"](ty_res),0,newrecord),
        Ctype["instance"](0,env,ty_expected));
      Ctype["end_def"](0),
      List["iter"](Ctype["generalize_structure"],ty_args),
      Ctype["generalize_structure"](ty_res)}
    else
     {}
    
    var match$3=Ctype["instance_list"](env,/* :: */[0,ty_res,ty_args]);
    
    if(match$3)
     {var match$4=/* tuple */[0,match$3[2],match$3[1]];}
    else
     {throw [0,Assert_failure,[0,"typing/typecore.ml",3373,11]];}
    
    var ty_res$1=match$4[2];
    
    var newrecord$1="unknown primitive:duprecord regular 6";
    
    newrecord$1[4]=ty_res$1,0;
    var texp$1=newrecord$1;
    
    if(!separate)
     {unify_exp(env,texp$1,Ctype["instance"](0,env,ty_expected))}
    else
     {}
    
    var
     args=
      List["map2"]
       (function(e,param){return type_argument(env,e,param[1],param[2]);},
        sargs,
        List["combine"](ty_args,match$4[1]));
    
    if(constr[11]=0)
     {throw [0,$$Error,loc,env,/* Private_type */[19,ty_res$1]];}
    else
     {}
    
    var newrecord$2="unknown primitive:duprecord regular 6";
    
    newrecord$2[1]=/* Texp_construct */[8,lid,constr,args],0;
    return newrecord$2;
    };

var
 type_statement=
  function(env,sexp)
   {var loc=final_subexpression(sexp)[2];
    
    Ctype["begin_def"](0);
    var exp=type_exp(env,sexp);
    
    Ctype["end_def"](0);
    if(Clflags["strict_sequence"][1])
     {var expected_ty=Ctype["instance_def"](Predef["type_unit"]);
      
      unify_exp(env,exp,expected_ty);
      return exp;
      }
    else
     {var ty=Ctype["expand_head"](env,exp[4]);
      
      var tv=Ctype["newvar"](0,0);
      
      var match=ty[1];
      
      var exit;
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 0:
           if(ty[2]>tv[2])
            {Location["prerr_warning"](loc,10)}
           else
            {add_delayed_check
              (function(param){return check_application_result(env,1,exp);})}
           
          case 1:Location["prerr_warning"](loc,2);
          case 3:
           if(Path["same"](match[1],Predef["path_unit"])){}else{exit=332;}
          default:exit=332;}}
      
      switch(exit){case 332:Location["prerr_warning"](loc,4)}
      
      Ctype["unify_var"](env,tv,ty);
      return exp;
      }
    };

var
 type_cases=
  function(in_function,env,ty_arg,ty_res,partial_flag,loc,caselist)
   {var patterns=List["map"](function(param){return param[1];},caselist);
    
    var
     erase_either=
      List["exists"](contains_polymorphic_variant,patterns)&&
      contains_variant_either(ty_arg);
    
    var has_gadts=List["exists"](contains_gadt(env),patterns);
    
    if((has_gadts||erase_either)&&!Clflags["principal"][1])
     {var ty_arg$1=Ctype["correct_levels"](ty_arg);}
    else
     {var ty_arg$1=ty_arg;}
    
    if(has_gadts&&!Clflags["principal"][1])
     {var
       match=
        /* tuple */[0,
         Ctype["correct_levels"](ty_res),
         duplicate_ident_types(loc,caselist,env)];
      }
    else
     {var match=/* tuple */[0,ty_res,env];}
    
    var env$1=match[2];
    
    var ty_res$1=match[1];
    
    if(has_gadts)
     {Ctype["begin_def"](0);
      Ident["set_current_time"](Ctype["get_current_level"](0));
      var lev=Ident["current_time"](0);
      
      Ctype["init_def"](lev+1e3);
      var
       match$1=
        /* tuple */[0,lev,Env["add_gadt_instance_level"](lev,env$1)];
      }
    else
     {var match$1=/* tuple */[0,Ctype["get_current_level"](0),env$1];}
    
    var env$2=match$1[2];
    
    var lev$1=match$1[1];
    
    Ctype["begin_def"](0);
    var ty_arg$prime=Ctype["newvar"](0,0);
    
    var pattern_force$1=[0,0];
    
    var
     pat_env_list=
      List["map"]
       (function(param)
         {var pc_rhs=param[3];
          
          var pc_guard=param[2];
          
          if(pc_guard)
           {var init=pc_rhs[2];
            
            var loc$1=/* record */[0,pc_guard[1][2][1],init[2],init[3]];
            }
          else
           {var loc$1=pc_rhs[2];}
          
          if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
          
          var scope=/* Some */[0,/* Idef */[1,loc$1]];
          
          if(Clflags["principal"][1]||erase_either)
           {var partial=[0,0];}
          else
           {var partial=0;}
          
          var ty_arg$2=Ctype["instance"](partial,env$2,ty_arg$1);
          
          var match$2=type_pattern(lev$1,env$2,param[1],scope,ty_arg$2);
          
          var pat=match$2[1];
          
          pattern_force$1[1]=Pervasives["@"](match$2[3],pattern_force$1[1]),0;
          if(Clflags["principal"][1])
           {Ctype["end_def"](0);
            iter_pattern
             (function(param$1)
               {return Ctype["generalize_structure"](param$1[4]);},
              pat);
            var newrecord="unknown primitive:duprecord regular 6";
            
            newrecord[4]=Ctype["instance"](0,env$2,pat[4]),0;
            var pat$1=newrecord;
            }
          else
           {var pat$1=pat;}
          
          return /* tuple */[0,pat$1,/* tuple */[0,match$2[2],match$2[4]]];
          },
        caselist);
    
    var patl=List["map"](function(prim){return prim[1];},pat_env_list);
    
    List["iter"]
     (function(pat){return unify_pat(env$2,pat,ty_arg$prime);},patl);
    if(List["exists"](has_variants,patl))
     {Parmatch["pressure_variants"](env$2,patl),
      List["iter"](iter_pattern(finalize_variant),patl)}
    else
     {}
    
    List["iter"](function(f){return f(0);},pattern_force$1[1]);
    List["iter"]
     (iter_pattern
       (function(param)
         {return Ctype["unify_var"](env$2,param[4],Ctype["newvar"](0,0));}),
      patl);
    List["iter"]
     (function(pat)
       {return unify_pat(env$2,pat,Ctype["instance"](0,env$2,ty_arg$1));},
      patl);
    Ctype["end_def"](0);
    List["iter"]
     (iter_pattern(function(param){return Ctype["generalize"](param[4]);}),
      patl);
    if(List["length"](caselist)=1)
     {var in_function$1=in_function;}
    else
     {var in_function$1=0;}
    
    var
     cases=
      List["map2"]
       (function(param,param$1)
         {var pc_guard=param$1[2];
          
          var match$2=param[2];
          
          var unpacks=match$2[2];
          
          var ext_env=match$2[1];
          
          var sexp=wrap_unpacks(param$1[3],unpacks);
          
          if(Clflags["principal"][1])
           {Ctype["begin_def"](0);
            var ty=Ctype["instance"]([0,1],env$2,ty_res$1);
            
            Ctype["end_def"](0);
            Ctype["generalize_structure"](ty);
            var ty_res$prime=ty;
            }
          else
           {if(contains_gadt(env$2,param$1[1]))
             {var ty_res$prime=Ctype["correct_levels"](ty_res$1);}
            else
             {var ty_res$prime=ty_res$1;}
            }
          
          if(pc_guard)
           {var
             guard=
              /* Some */[0,
               type_expect
                (0,
                 ext_env,
                 wrap_unpacks(pc_guard[1],unpacks),
                 Predef["type_bool"])];
            }
          else
           {var guard=0;}
          
          var exp=type_expect(in_function$1,ext_env,sexp,ty_res$prime);
          
          var newrecord="unknown primitive:duprecord regular 6";
          
          return /* record */[0,
                  param[1],
                  guard,
                  (newrecord[4]=
                   Ctype["instance"](0,env$2,ty_res$prime),
                   0,
                   newrecord)];
          },
        pat_env_list,
        caselist);
    
    if(Clflags["principal"][1]||has_gadts)
     {var ty_res$prime=Ctype["instance"](0,env$2,ty_res$1);
      
      List["iter"]
       (function(c){return unify_exp(env$2,c[3],ty_res$prime);},cases)}
    else
     {}
    
    if(partial_flag)
     {var partial=check_partial(/* Some */[0,lev$1],env$2,ty_arg$1,loc,cases);
      }
    else
     {var partial=0;}
    
    add_delayed_check
     (function(param)
       {List["iter"]
         (function(param$1)
           {return check_absent_variant(param$1[2][1],param$1[1]);},
          pat_env_list);
        return Parmatch["check_unused"](env$2,cases);
        });
    if(has_gadts)
     {Ctype["end_def"](0),
      unify_exp_types
       (loc,env$2,Ctype["instance"](0,env$2,ty_res$1),Ctype["newvar"](0,0))}
    else
     {}
    
    return /* tuple */[0,cases,partial];
    };

var
 type_let=
  function
   ($staropt$star,$staropt$star$1,env,rec_flag,spat_sexp_list,scope,allow)
   {if($staropt$star)
     {var check=$staropt$star[1];}
    else
     {var check=function(s){return /* Unused_var */[12,s];};}
    
    if($staropt$star$1)
     {var check_strict=$staropt$star$1[1];}
    else
     {var check_strict=function(s){return /* Unused_var_strict */[13,s];};}
    
    Ctype["begin_def"](0);
    if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
    
    var exit;
    
    if(spat_sexp_list)
     {var match=spat_sexp_list[1][2][1];
      
      switch(match)
       {case 6:
         var match$1=match[1][1];
         
         switch(match$1)
          {case 0:
            var match$2=match$1[1][1];
            
            switch(match$2)
             {case 0:
               switch(match$2[1])
                {case "*opt*":
                  if(spat_sexp_list[2]){exit=393;}else{var is_fake_let=1;}
                 default:exit=393;}
               
              case 1:exit=393;
              case 2:exit=393;
              }
            
           default:exit=393;}
         
        default:exit=393;}
      }
    else
     {exit=393;}
    
    switch(exit){case 393:var is_fake_let=0;}
    
    if(is_fake_let){var check$1=check_strict;}else{var check$1=check;}
    
    var
     spatl=
      List["map"]
       (function(param)
         {var spat=param[1];
          
          var match$3=spat[1];
          
          var match$4=param[2][1];
          
          var exit$1;
          
          if(typeof match$3=="number")
           {switch(match$3){case 0:exit$1=389;}}
          else
           {switch(match$3[0])
             {case 10:exit$1=389;
              default:
               switch(match$4)
                {case 19:var sty=match$4[2];exit$1=388;
                 case 20:var sty=match$4[3];exit$1=388;
                 default:exit$1=387;}
               }}
          
          switch(exit$1)
           {case 389:return spat;
            case 388:
             if(Clflags["principal"][1])
              {var init=spat[2];
               
               return Ast_helper["Pat"][14]
                       (/* Some */[0,/* record */[0,init[1],init[2],1]],0,spat,sty);
               }
             else
              {"unknown block:(exit 387)";}
             
            case 387:return spat;
            }
          },
        spat_sexp_list);
    
    var nvs=List["map"](function(param){return Ctype["newvar"](0,0);},spatl);
    
    var match$3=type_pattern_list(env,spatl,scope,nvs,allow);
    
    var unpacks=match$3[4];
    
    var new_env=match$3[2];
    
    var pat_list=match$3[1];
    
    var is_recursive=rec_flag=1;
    
    if(is_recursive)
     {List["iter2"]
       (function(pat,binding)
         {var match$4=pat[4][1];
          
          var exit$1;
          
          if(typeof match$4=="number")
           {switch(match$4){}}
          else
           {switch(match$4[0])
             {case 10:
               var newrecord="unknown primitive:duprecord regular 6";
               
               newrecord[4]=
               Ctype["instance_poly"]([0,1],0,match$4[2],match$4[1])[2],
               0;
               var pat$1=newrecord;
               
              default:exit$1=382;}}
          
          switch(exit$1){case 382:var pat$1=pat;}
          
          return unify_pat(env,pat$1,type_approx(env,binding[2]));
          },
        pat_list,
        spat_sexp_list)}
    else
     {}
    
    List["iter"]
     (function(pat)
       {if(has_variants(pat))
         {Parmatch["pressure_variants"](env,/* :: */[0,pat,0]);
          return iter_pattern(finalize_variant,pat);
          }
        else
         {return 0;}
        },
      pat_list);
    if(Clflags["principal"][1])
     {Ctype["end_def"](0);
      var
       pat_list$1=
        List["map"]
         (function(pat)
           {iter_pattern
             (function(pat$1){return Ctype["generalize_structure"](pat$1[4]);},
              pat);
            var newrecord="unknown primitive:duprecord regular 6";
            
            newrecord[4]=Ctype["instance"](0,env,pat[4]),0;
            return newrecord;
            },
          pat_list);
      }
    else
     {var pat_list$1=pat_list;}
    
    List["iter"](function(f){return f(0);},match$3[3]);
    if(is_recursive){var exp_env=new_env;}else{var exp_env=env;}
    
    var current_slot=[0,0];
    
    var rec_needed=[0,0];
    
    var
     warn_unused=
      Warnings["is_active"](check$1(""))||
      Warnings["is_active"](check_strict(""))||
      is_recursive&&
      Warnings["is_active"](15);
    
    var
     pat_slot_list=
      List["map"]
       (function(pat)
         {if(!warn_unused)
           {return /* tuple */[0,pat,0];}
          else
           {var some_used=[0,0];
            
            var slot=[0,0];
            
            List["iter"]
             (function(param)
               {var id=param[1];
                
                var vd=Env["find_value"](/* Pident */[0,id],new_env);
                
                var name=Ident["name"](id);
                
                var used=[0,0];
                
                if
                 (!("unknown primitive:caml_string_equal"||
                   (name[0]=95)||
                   (name[0]=35)))
                 {add_delayed_check
                   (function(param$1)
                     {if(!used[1])
                       {return Location["prerr_warning"]
                                (vd[3],(some_used[1]?check_strict:check$1)(name));
                        }
                      else
                       {return 0;}
                      })}
                else
                 {}
                
                return Env["set_value_used_callback"]
                        (name,
                         vd,
                         function(param$1)
                          {var match$4=current_slot[1];
                           
                           if(match$4)
                            {var slot$1=match$4[1];
                             
                             slot$1[1]=/* :: */[0,/* tuple */[0,name,vd],slot$1[1]],0;
                             return rec_needed[1]=1,0;
                             }
                           else
                            {List["iter"]
                              (function(param$2)
                                {return Env["mark_value_used"](env,param$2[1],param$2[2]);},
                               Misc["get_ref"](slot));
                             used[1]=1,0;
                             return some_used[1]=1,0;
                             }
                           });
                },
              Typedtree["pat_bound_idents"](pat));
            return /* tuple */[0,pat,/* Some */[0,slot]];
            }
          },
        pat_list$1);
    
    var
     exp_list=
      List["map2"]
       (function(param,param$1)
         {var pat=param$1[1];
          
          var sexp=param[2];
          
          if(rec_flag=1)
           {var sexp$1=wrap_unpacks(sexp,unpacks);}
          else
           {var sexp$1=sexp;}
          
          if(is_recursive){current_slot[1]=param$1[2],0}else{}
          
          var match$4=pat[4][1];
          
          var exit$1;
          
          if(typeof match$4=="number")
           {switch(match$4){}}
          else
           {switch(match$4[0])
             {case 10:
               Ctype["begin_def"](0);
               if(Clflags["principal"][1]){Ctype["begin_def"](0)}else{}
               
               var
                match$5=
                 Ctype["instance_poly"]([0,1],1,match$4[2],match$4[1]);
               
               var ty$prime=match$5[2];
               
               if(Clflags["principal"][1])
                {Ctype["end_def"](0),Ctype["generalize_structure"](ty$prime)}
               else
                {}
               
               var exp=type_expect(0,exp_env,sexp$1,ty$prime);
               
               Ctype["end_def"](0);
               check_univars(env,1,"definition",exp,pat[4],match$5[1]);
               var newrecord="unknown primitive:duprecord regular 6";
               
               newrecord[4]=Ctype["instance"](0,env,exp[4]),0;
               return newrecord;
               
              default:exit$1=368;}}
          
          switch(exit$1)
           {case 368:return type_expect(0,exp_env,sexp$1,pat[4]);}
          },
        spat_sexp_list,
        pat_slot_list);
    
    current_slot[1]=0,0;
    if(is_recursive&&!rec_needed[1]&&Warnings["is_active"](15))
     {Location["prerr_warning"](List["hd"](spat_sexp_list)[1][2],15)}
    else
     {}
    
    List["iter2"](function(pat,exp){return 0;},pat_list$1,exp_list);
    Ctype["end_def"](0);
    List["iter2"]
     (function(pat,exp)
       {if(!is_nonexpansive(exp))
         {return iter_pattern
                  (function(pat$1)
                    {return Ctype["generalize_expansive"](env,pat$1[4]);},
                   pat);
          }
        else
         {return 0;}
        },
      pat_list$1,
      exp_list);
    List["iter"]
     (function(pat)
       {return iter_pattern
                (function(pat$1){return Ctype["generalize"](pat$1[4]);},pat);
        },
      pat_list$1);
    var l=List["combine"](pat_list$1,exp_list);
    
    var
     l$1=
      List["map2"]
       (function(param,pvb)
         {return /* record */[0,param[1],param[2],pvb[3],pvb[4]];},
        l,
        spat_sexp_list);
    
    return /* tuple */[0,l$1,new_env,unpacks];
    };

var
 type_binding=
  function(env,rec_flag,spat_sexp_list,scope)
   {Typetexp["reset_type_variables"](0);
    var
     match=
      type_let
       (/* Some */[0,
         function(s){return /* Unused_value_declaration */[16,s];}],
        /* Some */[0,
         function(s){return /* Unused_value_declaration */[16,s];}],
        env,
        rec_flag,
        spat_sexp_list,
        scope,
        0);
    
    return /* tuple */[0,match[1],match[2]];
    };

var
 type_let$1=
  function(env,rec_flag,spat_sexp_list,scope)
   {var match=type_let(0,0,env,rec_flag,spat_sexp_list,scope,0);
    
    return /* tuple */[0,match[1],match[2]];
    };

var
 type_expression=
  function(env,sexp)
   {Typetexp["reset_type_variables"](0);
    Ctype["begin_def"](0);
    var exp=type_exp(env,sexp);
    
    Ctype["end_def"](0);
    if(is_nonexpansive(exp))
     {Ctype["generalize"](exp[4])}
    else
     {Ctype["generalize_expansive"](env,exp[4])}
    
    var match=sexp[1];
    
    switch(match)
     {case 0:
       var match$1=Env["lookup_value"](match[1][1],env);
       
       var newrecord="unknown primitive:duprecord regular 6";
       
       newrecord[4]=match$1[2][1],0;
       return newrecord;
       
      default:return exp;}
    };

var
 report_error=
  function(env,ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "This object duplication occurs outside a method definition",
                    0],
                   "This object duplication occurs outside a method definition"]);
         
        case 1:
         Format["fprintf"]
          (ppf,
           [0,
            [11,"This function is applied to arguments",[17,[0,"@ ",1,0],0]],
            "This function is applied to arguments@ "]);
         Format["fprintf"]
          (ppf,
           [0,
            [11,"in an order different from other calls.",[17,[0,"@ ",1,0],0]],
            "in an order different from other calls.@ "]);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"This is only allowed when the real type is known.",0],
                   "This is only allowed when the real type is known."]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Modules are not allowed in this pattern.",0],
                   "Modules are not allowed in this pattern."]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The signature for this packaged module couldn't be inferred.",
                    0],
                   "The signature for this packaged module couldn't be inferred."]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Unexpected existential",0],"Unexpected existential"]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Only character intervals are supported in patterns.",
                     [17,0,0]]],
                   "@[Only character intervals are supported in patterns.@]"]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Invalid for-loop index: only variables and _ are allowed.",
                     [17,0,0]]],
                   "@[Invalid for-loop index: only variables and _ are allowed.@]"]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "None of the patterns in this 'match' expression match values.",
                    0],
                   "None of the patterns in this 'match' expression match values."]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Exception patterns must be at the top level of a match case.",
                     [17,0,0]]],
                   "@[Exception patterns must be at the top level of a match case.@]"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The record field ",
                     [15,
                      [11," is polymorphic.",[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]],
                   "@[The record field %a is polymorphic.@ %s@]"],
                  Printtyp["longident"],
                  param[1],
                  "You cannot instantiate it in a pattern.");
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The constructor ",
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [11,
                        "expects ",
                        [4,
                         3,
                         0,
                         0,
                         [11,
                          " argument(s),",
                          [17,
                           [0,"@ ",1,0],
                           [11,
                            "but is applied here to ",
                            [4,3,0,0,[11," argument(s)",[17,0,0]]]]]]]]]]]],
                   "@[The constructor %a@ expects %i argument(s),@ but is applied here to %i argument(s)@]"],
                  Printtyp["longident"],
                  param[1],
                  param[2],
                  param[3]);
         
        case 2:
         var lid=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  0,
                  param[2],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "The record field ",
                               [15,[17,[0,"@ ",1,0],[11,"belongs to the type",0]]]],
                              "The record field %a@ belongs to the type"],
                             Printtyp["longident"],
                             lid);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but is mixed here with fields of type",0],
                              "but is mixed here with fields of type"]);
                    });
         
        case 3:
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  0,
                  param[1],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"This pattern matches values of type",0],
                              "This pattern matches values of type"]);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "but a pattern was expected which matches values of type",
                               0],
                              "but a pattern was expected which matches values of type"]);
                    });
         
        case 4:
         var id=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  0,
                  param[2],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "The variable ",
                               [2,
                                0,
                                [11," on the left-hand side of this or-pattern has type",0]]],
                              "The variable %s on the left-hand side of this or-pattern has type"],
                             Ident["name"](id));
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but on the right-hand side it has type",0],
                              "but on the right-hand side it has type"]);
                    });
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Variable ",
                    [2,0,[11," is bound several times in this matching",0]]],
                   "Variable %s is bound several times in this matching"],
                  param[1]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Variable ",
                    [2,0,[11," must occur on both sides of this | pattern",0]]],
                   "Variable %s must occur on both sides of this | pattern"],
                  Ident["name"](param[1]));
         
        case 7:
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  0,
                  param[1],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"This expression has type",0],
                              "This expression has type"]);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"but an expression was expected of type",0],
                              "but an expression was expected of type"]);
                    });
         
        case 8:
         var typ=param[1];
         
         Printtyp["reset_and_mark_loops"](typ);
         var match=Ctype["repr"](typ)[1];
         
         var exit;
         
         if(typeof match=="number")
          {switch(match){}}
         else
          {switch(match[0])
            {case 1:
              Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<v>",0],"<v>"]],
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [11,
                    "This function has type",
                    [17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                 "@[<v>@[<2>This function has type@ %a@]"],
                Printtyp["type_expr"],
                typ);
              return Format["fprintf"]
                      (ppf,
                       [0,
                        [17,
                         [0,"@ ",1,0],
                         [18,
                          [1,[0,0,""]],
                          [11,
                           "It is applied to too many arguments;",
                           [17,[0,"@ ",1,0],[2,0,[17,0,[17,0,0]]]]]]],
                        "@ @[It is applied to too many arguments;@ %s@]@]"],
                       "maybe you forgot a `;'.");
              
             default:exit=6;}}
         
         switch(exit)
          {case 6:
            return Format["fprintf"]
                    (ppf,
                     [0,
                      [18,
                       [1,[0,[11,"<v>",0],"<v>"]],
                       [18,
                        [1,[0,[11,"<2>",0],"<2>"]],
                        [11,
                         "This expression has type",
                         [17,
                          [0,"@ ",1,0],
                          [15,[17,0,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]]]],
                      "@[<v>@[<2>This expression has type@ %a@]@ %s@]"],
                     Printtyp["type_expr"],
                     typ,
                     "This is not a function; it cannot be applied.");
            
           }
         
        case 9:
         var ty=param[2];
         
         var
          print_label=
           function(ppf$1,l)
            {switch(l)
              {case "":
                return Format["fprintf"]
                        (ppf$1,[0,[11,"without label",0],"without label"]);
                
               default:
                return Format["fprintf"]
                        (ppf$1,
                         [0,[11,"with label ",[2,0,0]],"with label %s"],
                         Btype["prefixed_label_name"](l));
                }
             };
         
         Printtyp["reset_and_mark_loops"](ty);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<v>",0],"<v>"]],
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [11,
                      "The function applied to this argument has type",
                      [17,
                       [0,"@ ",1,0],
                       [15,
                        [17,
                         0,
                         [17,4,[11,"This argument cannot be applied ",[15,[17,0,0]]]]]]]]]],
                   "@[<v>@[<2>The function applied to this argument has type@ %a@]@.This argument cannot be applied %a@]"],
                  Printtyp["type_expr"],
                  ty,
                  print_label,
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The record field label ",
                    [2,0,[11," is defined several times",0]]],
                   "The record field label %s is defined several times"],
                  param[1]);
         
        case 11:
         var
          print_labels=
           function(ppf$1)
            {return List["iter"]
                     (function(lbl)
                       {return Format["fprintf"]
                                (ppf$1,
                                 [0,[17,[0,"@ ",1,0],[2,0,0]],"@ %s"],
                                 Ident["name"](lbl));
                        });
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov>",0],"<hov>"]],
                    [11,"Some record fields are undefined:",[15,[17,0,0]]]],
                   "@[<hov>Some record fields are undefined:%a@]"],
                  print_labels,
                  param[1]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"The record field ",[15,[11," is not mutable",0]]],
                   "The record field %a is not mutable"],
                  Printtyp["longident"],
                  param[1]);
         
        case 13:
         var lid$1=param[5];
         
         var p=param[4];
         
         var kind=param[3];
         
         var ty$1=param[2];
         
         Printtyp["reset_and_mark_loops"](ty$1);
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,0,""]],
             [18,
              [1,[0,[11,"<2>",0],"<2>"]],
              [2,
               0,
               [11," type",[17,[0,"@ ",1,0],[15,[17,0,[17,[0,"@ ",1,0],0]]]]]]]],
            "@[@[<2>%s type@ %a@]@ "],
           param[1],
           Printtyp["type_expr"],
           ty$1);
         Format["fprintf"]
          (ppf,
           [0,
            [11,
             "The ",
             [2,0,[12,32,[15,[11," does not belong to type ",[15,[17,0,0]]]]]]],
            "The %s %a does not belong to type %a@]"],
           "unknown primitive:caml_string_equal"?"field":"constructor",
           Printtyp["longident"],
           lid$1,
           Printtyp["path"],
           p);
         if("unknown primitive:caml_string_equal")
          {return Label[2](ppf,env,p,lid$1);}
         else
          {return Constructor[2](ppf,env,p,lid$1);}
         
        case 14:
         var lid$2=param[2];
         
         var kind$1=param[1];
         
         if("unknown primitive:caml_string_equal")
          {var name="field";}
         else
          {var name="constructor";}
         
         return Printtyp["report_ambiguous_type_error"]
                 (ppf,
                  env,
                  param[3],
                  param[4],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "The ",
                               [2,
                                0,
                                [12,
                                 32,
                                 [15,
                                  [17,
                                   [0,"@ ",1,0],
                                   [11,"belongs to the ",[2,0,[11," type",0]]]]]]]],
                              "The %s %a@ belongs to the %s type"],
                             name,
                             Printtyp["longident"],
                             lid$2,
                             kind$1);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "The ",
                               [2,
                                0,
                                [12,
                                 32,
                                 [15,
                                  [17,
                                   [0,"@ ",1,0],
                                   [11,
                                    "belongs to one of the following ",
                                    [2,0,[11," types:",0]]]]]]]],
                              "The %s %a@ belongs to one of the following %s types:"],
                             name,
                             Printtyp["longident"],
                             lid$2,
                             kind$1);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,
                               "but a ",
                               [2,
                                0,
                                [11," was expected belonging to the ",[2,0,[11," type",0]]]]],
                              "but a %s was expected belonging to the %s type"],
                             name,
                             kind$1);
                    });
         
        case 15:return Format["fprintf"](ppf,[0,[2,0,0],"%s"],param[1]);
        case 16:
         var ty$2=param[1];
         
         Printtyp["reset_and_mark_loops"](ty$2);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<v>",0],"<v>"]],
                    [18,
                     [1,[0,0,""]],
                     [11,
                      "This expression has type",
                      [17,
                       [0,"@;<1 2>",1,2],
                       [15,
                        [17,
                         0,
                         [17,[0,"@,",0,0],[11,"It has no method ",[2,0,[17,0,0]]]]]]]]]],
                   "@[<v>@[This expression has type@;<1 2>%a@]@,It has no method %s@]"],
                  Printtyp["type_expr"],
                  ty$2,
                  param[2]);
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"This expression has no method ",[2,0,0]],
                   "This expression has no method %s"],
                  param[1]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Cannot instantiate the virtual class ",[15,0]],
                   "Cannot instantiate the virtual class %a"],
                  Printtyp["longident"],
                  param[1]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Cannot create values of the private type ",[15,0]],
                   "Cannot create values of the private type %a"],
                  Printtyp["type_expr"],
                  param[1]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "Cannot assign field ",
                    [15,[11," of the private type ",[15,0]]]],
                   "Cannot assign field %a of the private type %a"],
                  Printtyp["longident"],
                  param[1],
                  Printtyp["type_expr"],
                  param[2]);
         
        case 21:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"Unbound instance variable ",[2,0,0]],
                   "Unbound instance variable %s"],
                  param[1]);
         
        case 22:
         var v=param[2];
         
         if(param[1])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"The instance variable ",[2,0,[11," is not mutable",0]]],
                     "The instance variable %s is not mutable"],
                    v);
           }
         else
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,
                      "The value ",
                      [2,0,[11," is not an instance variable",0]]],
                     "The value %s is not an instance variable"],
                    v);
           }
         
        case 23:
         return Printtyp["report_subtyping_error"]
                 (ppf,env,param[1],"is not a subtype of",param[2]);
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The instance variable ",
                    [2,0,[11," is overridden several times",0]]],
                   "The instance variable %s is overridden several times"],
                  param[1]);
         
        case 25:
         var ty$prime=param[2];
         
         var ty$3=param[1];
         
         Printtyp["report_unification_error"]
          (ppf,
           env,
           0,
           param[3],
           function(ppf$1)
            {var
              match$1=
               Printtyp["prepare_expansion"](/* tuple */[0,ty$3,ty$prime]);
             
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [11,
                        "This expression cannot be coerced to type",
                        [17,
                         [0,"@;<1 2>",1,2],
                         [15,[12,59,[17,[0,"@ ",1,0],[11,"it has type",0]]]]]],
                       "This expression cannot be coerced to type@;<1 2>%a;@ it has type"],
                      Printtyp["type_expansion"](match$1[1]),
                      match$1[2]);
             },
           function(ppf$1)
            {return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [11,"but is here used with type",0],
                       "but is here used with type"]);
             });
         if(param[4])
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [12,
                      46,
                      [17,
                       4,
                       [18,
                        [1,[0,[11,"<hov>",0],"<hov>"]],
                        [2,0,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]],
                     ".@.@[<hov>%s@ %s@]"],
                    "This simple coercion was not fully general.",
                    "Consider using a double coercion.");
           }
         else
          {return 0;}
         
        case 26:
         var ty$4=param[2];
         
         Printtyp["reset_and_mark_loops"](ty$4);
         if(param[1])
          {Format["fprintf"]
            (ppf,
             [0,
              [11,
               "This function expects too many arguments,",
               [17,[0,"@ ",1,0],0]],
              "This function expects too many arguments,@ "]);
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"it should have type",[17,[0,"@ ",1,0],[15,0]]],
                     "it should have type@ %a"],
                    Printtyp["type_expr"],
                    ty$4);
           }
         else
          {Format["fprintf"]
            (ppf,
             [0,
              [11,
               "This expression should not be a function,",
               [17,[0,"@ ",1,0],0]],
              "This expression should not be a function,@ "]);
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [11,"the expected type is",[17,[0,"@ ",1,0],[15,0]]],
                     "the expected type is@ %a"],
                    Printtyp["type_expr"],
                    ty$4);
           }
         
        case 27:
         var ty$5=param[2];
         
         var
          label_mark=
           function(l)
            {switch(l)
              {case "":return "but its first argument is not labelled";
               default:
                return Format["sprintf"]
                        ([0,
                          [11,"but its first argument is labelled ",[2,0,0]],
                          "but its first argument is labelled %s"],
                         Btype["prefixed_label_name"](l));
                }
             };
         
         Printtyp["reset_and_mark_loops"](ty$5);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<v>",0],"<v>"]],
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [11,
                      "This function should have type",
                      [17,
                       [0,"@ ",1,0],
                       [15,[17,0,[17,[0,"@,",0,0],[2,0,[17,0,0]]]]]]]]],
                   "@[<v>@[<2>This function should have type@ %a@]@,%s@]"],
                  Printtyp["type_expr"],
                  ty$5,
                  label_mark(param[1]));
         
        case 28:
         var ty$6=param[2];
         
         Printtyp["reset_and_mark_loops"](ty$6);
         Format["fprintf"]
          (ppf,
           [0,
            [11,
             "This `let module' expression has type",
             [17,[0,"@ ",1,0],[15,[17,[0,"@ ",1,0],0]]]],
            "This `let module' expression has type@ %a@ "],
           Printtyp["type_expr"],
           ty$6);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "In this type, the locally bound module name ",
                    [2,0,[11," escapes its scope",0]]],
                   "In this type, the locally bound module name %s escapes its scope"],
                  param[1]);
         
        case 29:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The instance variable ",
                    [15,
                     [17,
                      [0,"@ ",1,0],
                      [11,
                       "cannot be accessed from the definition of another instance variable",
                       0]]]],
                   "The instance variable %a@ cannot be accessed from the definition of another instance variable"],
                  Printtyp["longident"],
                  param[1]);
         
        case 30:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "The type ",
                    [15,[17,[0,"@ ",1,0],[11,"is not a variant type",0]]]],
                   "The type %a@ is not a variant type"],
                  Printtyp["longident"],
                  param[1]);
         
        case 31:
         var kind$2=param[1];
         
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  0,
                  param[2],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,[11,"This ",[2,0,[11," has type",0]]],"This %s has type"],
                             kind$2);
                    },
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"which is less general than",0],
                              "which is less general than"]);
                    });
         
        case 32:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    "This expression is packed module, but the expected type is",
                    [17,[0,"@ ",1,0],[15,0]]],
                   "This expression is packed module, but the expected type is@ %a"],
                  Printtyp["type_expr"],
                  param[1]);
         
        case 33:
         return Printtyp["report_unification_error"]
                 (ppf,
                  env,
                  0,
                  param[1],
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,
                             [0,
                              [11,"Recursive local constraint when unifying",0],
                              "Recursive local constraint when unifying"]);
                    },
                  function(ppf$1)
                   {return Format["fprintf"](ppf$1,[0,[11,"with",0],"with"]);});
         
        case 34:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The GADT constructor ",
                     [2,
                      0,
                      [11,
                       " of type ",
                       [15,[17,[0,"@ ",1,0],[2,0,[12,46,[17,0,0]]]]]]]]],
                   "@[The GADT constructor %s of type %a@ %s.@]"],
                  param[2],
                  Printtyp["path"],
                  param[1],
                  "must be qualified in this pattern");
         
        }}
    };

var
 report_error$1=
  function(env,ppf,err)
   {return Printtyp["wrap_printing_env"]
            (env,function(param){return report_error(env,ppf,err);});
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]=$$Error)
       {return /* Some */[0,
                Location["error_of_printer"]
                 (param[2],report_error$1(param[3]),param[4])];
        }
      else
       {if(param[1]=Error_forward)
         {return /* Some */[0,param[2]];}
        else
         {return 0;}
        }
      });

var match$1=(Env["add_delayed_check_forward"][1]=add_delayed_check,0);

module["exports"]=
{"is_nonexpansive":is_nonexpansive,
 "type_binding":type_binding,
 "type_let":type_let$1,
 "type_expression":type_expression,
 "type_class_arg_pattern":type_class_arg_pattern,
 "type_self_pattern":type_self_pattern,
 "check_partial":check_partial,
 "type_expect":type_expect,
 "type_exp":type_exp,
 "type_approx":type_approx,
 "type_argument":type_argument,
 "option_some":option_some,
 "option_none":option_none,
 "extract_option_type":extract_option_type,
 "iter_pattern":iter_pattern,
 "generalizable":generalizable,
 "reset_delayed_checks":reset_delayed_checks,
 "force_delayed_checks":force_delayed_checks,
 "self_coercion":self_coercion,
 "Error":$$Error,
 "Error_forward":Error_forward,
 "report_error":report_error$1,
 "type_module":type_module,
 "type_open":type_open,
 "type_object":type_object,
 "type_package":type_package,
 "create_package_type":create_package_type};

