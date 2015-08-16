// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Btype=require("./btype.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Clflags=require("./clflags.js");
var Printf=require("./printf.js");
var Types=require("./types.js");
var Misc=require("./misc.js");
var Path=require("./path.js");
var Subst=require("./subst.js");
var Location=require("./location.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var CamlPrimitive=require("./camlPrimitive.js");


var Unify=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Unify",0]);

var Tags=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Tags",0]);

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===Tags)
       {return /* Some */[0,
                Location["errorf"]
                 (/* Some */[0,Location["in_file"](Location["input_name"][1])],
                  /* None */0,
                  /* None */0,
                  [/* Format */0,
                   [/* String_literal */11,
                    "In this program,",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* String_literal */11,
                      "variant constructors",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Char_literal */12,
                        96,
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " and `",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String_literal */11,
                             "have the same hash value.",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String_literal */11,
                               "Change one of them.",
                               /* End_of_format */0]]]]]]]]]]]],
                   "In this program,@ variant constructors@ `%s and `%s@ have the same hash value.@ Change one of them."],
                  param[2],
                  param[3])];
        }
      else
       {return /* None */0;}
      });

var Subtype=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Subtype",0]);

var
 Cannot_expand=
  CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Cannot_expand",0]);

var
 Cannot_apply=
  CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Cannot_apply",0]);

var
 Recursive_abbrev=
  CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Recursive_abbrev",0]);

var
 Unification_recursive_abbrev=
  CamlPrimitive["caml_set_oo_id"]
   ([248,"Ctype.Unification_recursive_abbrev",0]);

var current_level=[0,0];

var nongen_level=[0,0];

var global_level=[0,1];

var saved_level=[0,/* [] */0];

var get_current_level=function(param){return current_level[1];};

var
 init_def=
  function(level){current_level[1]=level;return nongen_level[1]=level,0;};

var
 begin_def=
  function(param)
   {saved_level[1]=
    /* :: */[0,/* tuple */[0,current_level[1],nongen_level[1]],saved_level[1]];
    current_level[0]++;
    return nongen_level[1]=current_level[1],0;
    };

var
 begin_class_def=
  function(param)
   {saved_level[1]=
    /* :: */[0,/* tuple */[0,current_level[1],nongen_level[1]],saved_level[1]];
    return current_level[0]++;
    };

var
 raise_nongen_level=
  function(param)
   {saved_level[1]=
    /* :: */[0,/* tuple */[0,current_level[1],nongen_level[1]],saved_level[1]];
    return nongen_level[1]=current_level[1],0;
    };

var
 end_def=
  function(param)
   {var match$1=List["hd"](saved_level[1]);
    
    saved_level[1]=List["tl"](saved_level[1]);
    current_level[1]=match$1[1];
    return nongen_level[1]=match$1[2],0;
    };

var
 reset_global_level=
  function(param){return global_level[1]=current_level[1]+1,0;};

var
 increase_global_level=
  function(param)
   {var gl=global_level[1];global_level[1]=current_level[1];return gl;};

var restore_global_level=function(gl){return global_level[1]=gl,0;};

var
 is_object_type=
  function(path)
   {switch(path[0])
     {case 0:var name=Ident["name"](path[1]);
      case 1:var name=path[2];
      case 2:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",149,23]];
       
      }
    
    return name[0]===35;
    };

var trace_gadt_instances=[0,/* false */0];

var
 check_trace_gadt_instances=
  function(env)
   {return !trace_gadt_instances[1]&&
           Env["has_local_constraints"](env)&&
           (trace_gadt_instances[1]=
            /* true */1,
            Btype["cleanup_abbrev"](/* () */0),
            /* true */1);
    };

var
 reset_trace_gadt_instances=
  function(b)
   {if(b){return trace_gadt_instances[1]=/* false */0,0;}else{return 0;}};

var
 wrap_trace_gadt_instances=
  function(env,f,x)
   {var b=check_trace_gadt_instances(env);
    
    var y=f(x);
    
    reset_trace_gadt_instances(b);
    return y;
    };

var simple_abbrevs=[0,/* Mnil */0];

var
 proper_abbrevs=
  function(path,tl,abbrev)
   {if
     (tl!==
      /* [] */0||
      trace_gadt_instances[1]||
      Clflags["principal"][1]||
      is_object_type(path))
     {return abbrev;}
    else
     {return simple_abbrevs;}
    };

var newty2=Btype["newty2"];

var newty=function(desc){return newty2(current_level[1],desc);};

var new_global_ty=function(desc){return newty2(global_level[1],desc);};

var
 newvar=
  function(name,param){return newty2(current_level[1],/* Tvar */[0,name]);};

var newvar2=function(name,level){return newty2(level,/* Tvar */[0,name]);};

var
 new_global_var=
  function(name,param){return newty2(global_level[1],/* Tvar */[0,name]);};

var
 newobj=
  function(fields){return newty(/* Tobject */[4,fields,[0,/* None */0]]);};

var
 newconstr=
  function(path,tyl){return newty(/* Tconstr */[3,path,tyl,[0,/* Mnil */0]]);};

var none=newty([/* Ttuple */2,/* [] */0]);

var repr=Btype["repr"];

var
 equal=
  function(param,param$1)
   {return param[1]===param$1[1]&&param[2]===param$1[2];};

var hash=function(param){return param[1][3]+93*param[2][3];};

var TypePairs=Hashtbl["Make"]([0,equal,hash]);

var umode=[0,/* Expression */0];

var generate_equations=[0,/* false */0];

var assume_injective=[0,/* false */0];

var
 set_mode_expression=
  function(f)
   {var old_unification_mode=umode[1];
    
    try
     {umode[1]=/* Expression */0;
      var ret=f(/* () */0);
      
      umode[1]=old_unification_mode;
      return ret;
      }
    catch(e){umode[1]=old_unification_mode;throw e;}
    };

var
 set_mode_pattern=
  function(generate,injective,f)
   {var old_unification_mode=umode[1];
    
    var old_gen=generate_equations[1];
    
    var old_inj=assume_injective[1];
    
    try
     {umode[1]=/* Pattern */1;
      generate_equations[1]=generate;
      assume_injective[1]=injective;
      var ret=f(/* () */0);
      
      umode[1]=old_unification_mode;
      generate_equations[1]=old_gen;
      assume_injective[1]=old_inj;
      return ret;
      }
    catch(e)
     {umode[1]=old_unification_mode;
      generate_equations[1]=old_gen;
      assume_injective[1]=old_inj;
      throw e;
      }
    };

var
 in_current_module=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:return /* true */1;case 1:exit=1061;case 2:exit=1061;}
    
    switch(exit){case 1061:return /* false */0;}
    };

var
 in_pervasives=
  function(p)
   {var $js;
    try
     {Env["find_type"](p,Env["initial_safe_string"]);$js=/* true */1;}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {$js=/* false */0;}
      else
       {throw exn;}
      }
    return in_current_module(p)&&$js;
    };

var
 is_datatype=
  function(decl)
   {var match$1=decl[3];
    
    var exit;
    
    if(typeof match$1==="number")
     {if(match$1!==0){exit=1057;}else{return /* false */0;}}
    else
     {exit=1057;}
    
    switch(exit){case 1057:return /* true */1;}
    };

var
 object_fields=
  function(ty)
   {var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 4:return match$1[1];default:exit=1055;}}
    
    switch(exit)
     {case 1055:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",284,27]];
       
      }
    };

var
 flatten_fields=
  function(ty)
   {var
     flatten=
      function(l,ty)
       {var ty$1=repr(ty);
        
        var match$1=ty$1[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 5:
             return flatten
                     (/* :: */[0,
                       /* tuple */[0,match$1[1],match$1[2],match$1[3]],
                       l],
                      match$1[4]);
             
            default:exit=1052;}}
        
        switch(exit){case 1052:return /* tuple */[0,l,ty$1];}
        };
    
    var match$1=flatten(/* [] */0,ty);
    
    return /* tuple */[0,
            List["sort"]
             (function(param,param$1)
               {return CamlPrimitive["caml_string_compare"]
                        (param[1],param$1[1]);
                },
              match$1[1]),
            match$1[2]];
    };

var
 build_fields=
  function(level)
   {return List["fold_right"]
            (function(param,ty2)
              {return newty2
                       (level,/* Tfield */[5,param[1],param[2],param[3],ty2]);
               });
    };

var
 associate_fields=
  function(fields1,fields2)
   {var
     associate=
      function(p,s,s$prime,param)
       {var l=param[1];
        
        if(param[2])
         {if(l)
           {var l$prime=param[2];
            
            var r$prime=l$prime[2];
            
            var match$1=l$prime[1];
            
            var t$prime=match$1[3];
            
            var k$prime=match$1[2];
            
            var n$prime=match$1[1];
            
            var r=l[2];
            
            var match$2=l[1];
            
            var t=match$2[3];
            
            var k=match$2[2];
            
            var n=match$2[1];
            
            if(CamlPrimitive["caml_equal"](n,n$prime))
             {return associate
                      (/* :: */[0,/* tuple */[0,n,k,t,k$prime,t$prime],p],
                       s,
                       s$prime,
                       /* tuple */[0,r,r$prime]);
              }
            else
             {if(CamlPrimitive["caml_lessthan"](n,n$prime))
               {return associate
                        (p,
                         /* :: */[0,/* tuple */[0,n,k,t],s],
                         s$prime,
                         /* tuple */[0,r,l$prime]);
                }
              else
               {return associate
                        (p,
                         s,
                         /* :: */[0,/* tuple */[0,n$prime,k$prime,t$prime],s$prime],
                         /* tuple */[0,l,r$prime]);
                }
              }
            }
          else
           {return /* tuple */[0,
                    List["rev"](p),
                    List["rev"](s),
                    Pervasives["@"](List["rev"](s$prime),param[2])];
            }
          }
        else
         {return /* tuple */[0,
                  List["rev"](p),
                  Pervasives["@"](List["rev"](s),l),
                  List["rev"](s$prime)];
          }
        };
    
    return associate
            (/* [] */0,/* [] */0,/* [] */0,/* tuple */[0,fields1,fields2]);
    };

var
 object_row=
  function(ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 4:return object_row(match$1[1]);
        case 5:return object_row(match$1[4]);
        default:exit=1046;}}
    
    switch(exit){case 1046:return ty$1;}
    };

var
 opened_object=
  function(ty)
   {var match$1=object_row(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:exit=1043;case 3:exit=1043;case 9:exit=1043;default:exit=1044;}}
    
    switch(exit){case 1044:return /* false */0;case 1043:return /* true */1;}
    };

var
 concrete_object=
  function(ty)
   {var match$1=object_row(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 0:return /* false */0;default:exit=1041;}}
    
    switch(exit){case 1041:return /* true */1;}
    };

var
 close_object=
  function(ty)
   {var
     close=
      function(ty)
       {var ty$1=repr(ty);
        
        var match$1=ty$1[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 0:
             return Btype["link_type"](ty$1,newty2(ty$1[2],/* Tnil */0));
            case 5:return close(match$1[4]);
            default:exit=1038;}}
        
        switch(exit)
         {case 1038:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"typing/ctype.ml",347,30]];
           
          }
        };
    
    var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 4:return close(match$1[1]);default:exit=1037;}}
    
    switch(exit)
     {case 1037:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",351,25]];
       
      }
    };

var
 row_variable=
  function(ty)
   {var
     find=
      function(ty)
       {var ty$1=repr(ty);
        
        var match$1=ty$1[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 0:return ty$1;
            case 5:return find(match$1[4]);
            default:exit=1034;}}
        
        switch(exit)
         {case 1034:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"typing/ctype.ml",361,30]];
           
          }
        };
    
    var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 4:return find(match$1[1]);default:exit=1033;}}
    
    switch(exit)
     {case 1033:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",365,23]];
       
      }
    };

var
 set_object_name=
  function(id,rv,params,ty)
   {var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 4:
         return Btype["set_name"]
                 (match$1[2],
                  /* Some */[0,
                   /* tuple */[0,/* Pident */[0,id],/* :: */[0,rv,params]]]);
         
        default:exit=1031;}}
    
    switch(exit)
     {case 1031:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",375,6]];
       
      }
    };

var
 remove_object_name=
  function(ty)
   {var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:return /* () */0;
        case 4:return Btype["set_name"](match$1[2],/* None */0);
        default:exit=1029;}}
    
    switch(exit)
     {case 1029:return Misc["fatal_error"]("Ctype.remove_object_name");}
    };

var
 hide_private_methods=
  function(ty)
   {var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 4:
         match$1[2][1]=/* None */0;
         var match$2=flatten_fields(match$1[1]);
         
         return List["iter"]
                 (function(param)
                   {var match$3=Btype["field_kind_repr"](param[2]);
                    
                    if(typeof match$3==="number")
                     {return /* () */0;}
                    else
                     {return Btype["set_kind"](match$3[1],/* Fabsent */1);}
                    },
                  match$2[1]);
         
        default:exit=1027;}}
    
    switch(exit)
     {case 1027:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",397,6]];
       
      }
    };

var
 signature_of_class_type=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:exit=1024;case 1:return param[1];case 2:exit=1024;}
    
    switch(exit){case 1024:return signature_of_class_type(param[3]);}
    };

var self_type=function(cty){return repr(signature_of_class_type(cty)[1]);};

var
 class_type_arity=
  function(param)
   {switch(param[0])
     {case 0:return class_type_arity(param[3]);
      case 1:return 0;
      case 2:return 1+class_type_arity(param[3]);
      }
    };

var
 sort_row_fields=
  List["sort"]
   (function(param,param$1)
     {return CamlPrimitive["caml_string_compare"](param[1],param$1[1]);});

var
 merge_rf=
  function(r1,r2,pairs,fi1,fi2)
   {if(fi1)
     {if(fi2)
       {var fi2$prime=fi2[2];
        
        var p2=fi2[1];
        
        var l2=p2[1];
        
        var fi1$prime=fi1[2];
        
        var p1=fi1[1];
        
        var l1=p1[1];
        
        if(CamlPrimitive["caml_equal"](l1,l2))
         {return merge_rf
                  (r1,
                   r2,
                   /* :: */[0,/* tuple */[0,l1,p1[2],p2[2]],pairs],
                   fi1$prime,
                   fi2$prime);
          }
        else
         {if(CamlPrimitive["caml_lessthan"](l1,l2))
           {return merge_rf(/* :: */[0,p1,r1],r2,pairs,fi1$prime,fi2);}
          else
           {return merge_rf(r1,/* :: */[0,p2,r2],pairs,fi1,fi2$prime);}
          }
        }
      else
       {return /* tuple */[0,List["rev_append"](r1,fi1),List["rev"](r2),pairs];
        }
      }
    else
     {return /* tuple */[0,List["rev"](r1),List["rev_append"](r2,fi2),pairs];}
    };

var
 merge_row_fields=
  function(fi1,fi2)
   {var exit;
    
    if(fi1)
     {if(fi2)
       {if(fi1[2])
         {exit=1017;}
        else
         {if(!List["mem_assoc"](fi1[1][1],fi2))
           {return /* tuple */[0,fi1,fi2,/* [] */0];}
          else
           {exit=1017;}
          }
        }
      else
       {exit=1015;}
      }
    else
     {exit=1015;}
    
    switch(exit)
     {case 1017:
       if(fi2[2])
        {exit=1016;}
       else
        {if(!List["mem_assoc"](fi2[1][1],fi1))
          {return /* tuple */[0,fi1,fi2,/* [] */0];}
         else
          {exit=1016;}
         }
       
      case 1016:
       return merge_rf
               (/* [] */0,
                /* [] */0,
                /* [] */0,
                sort_row_fields(fi1),
                sort_row_fields(fi2));
       
      case 1015:return /* tuple */[0,fi1,fi2,/* [] */0];
      }
    };

var
 filter_row_fields=
  function(erase,param)
   {if(param)
     {var p=param[1];
      
      var fi=filter_row_fields(erase,param[2]);
      
      var match$1=Btype["row_field_repr"](p[2]);
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){case 0:return fi;}}
      else
       {switch(match$1[0])
         {case 0:exit=1013;
          case 1:
           if(match$1[3]!==0)
            {exit=1013;}
           else
            {if(erase)
              {Btype["set_row_field"](match$1[4],/* Rabsent */0);return fi;}
             else
              {exit=1013;}
             }
           
          }}
      
      switch(exit){case 1013:return /* :: */[0,p,fi];}
      }
    else
     {return /* [] */0;}
    };

var Non_closed=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Non_closed",0]);

var
 closed_schema_rec=
  function(ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>=Btype["lowest_level"])
     {var level=ty$1[2];
      
      ty$1[2]=Btype["pivot_level"]-level;
      var match$1=ty$1[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 0:
           if(level!==Btype["generic_level"])
            {throw Non_closed;}
           else
            {exit=1010;}
           
          case 5:
           if(Btype["field_kind_repr"](match$1[2])===/* Fpresent */0)
            {closed_schema_rec(match$1[3])}
           else
            {}
           
           return closed_schema_rec(match$1[4]);
           
          case 8:
           var row=Btype["row_repr"](match$1[1]);
           
           Btype["iter_row"](closed_schema_rec,row);
           if(!Btype["static_row"](row))
            {return closed_schema_rec(row[2]);}
           else
            {return 0;}
           
          default:exit=1010;}}
      
      switch(exit)
       {case 1010:return Btype["iter_type_expr"](closed_schema_rec,ty$1);}
      }
    else
     {return 0;}
    };

var
 closed_schema=
  function(ty)
   {try
     {closed_schema_rec(ty);Btype["unmark_type"](ty);return /* true */1;}
    catch(exn)
     {if(exn===Non_closed)
       {Btype["unmark_type"](ty);return /* false */0;}
      else
       {throw exn;}
      }
    };

var Non_closed$1=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Non_closed",0]);

var free_variables=[0,/* [] */0];

var really_closed=[0,/* None */0];

var
 free_vars_rec=
  function(real,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>=Btype["lowest_level"])
     {ty$1[2]=Btype["pivot_level"]-ty$1[2];
      var match$1=ty$1[1];
      
      var match$2=really_closed[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 0:
           return free_variables[1]=
                  /* :: */[0,/* tuple */[0,ty$1,real],free_variables[1]],
                  0;
           
          case 3:
           if(match$2)
            {try
              {var match$3=Env["find_type_expansion"](match$1[1],match$2[1]);
               
               if(repr(match$3[2])[2]!==Btype["generic_level"])
                {free_variables[1]=
                 /* :: */[0,/* tuple */[0,ty$1,real],free_variables[1]]}
               else
                {}
               }
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {}
               else
                {throw exn;}
               }
             
             return List["iter"](free_vars_rec(/* true */1),match$1[2]);
             }
           else
            {exit=1003;}
           
          case 4:return free_vars_rec(/* false */0,match$1[1]);
          case 5:
           free_vars_rec(/* true */1,match$1[3]);
           return free_vars_rec(/* false */0,match$1[4]);
           
          case 8:
           var row=Btype["row_repr"](match$1[1]);
           
           Btype["iter_row"](free_vars_rec(/* true */1),row);
           if(!Btype["static_row"](row))
            {return free_vars_rec(/* false */0,row[2]);}
           else
            {return 0;}
           
          default:exit=1003;}}
      
      switch(exit)
       {case 1003:
         return Btype["iter_type_expr"](free_vars_rec(/* true */1),ty$1);
        }
      }
    else
     {return 0;}
    };

var
 free_vars=
  function(env,ty)
   {free_variables[1]=/* [] */0;
    really_closed[1]=env;
    free_vars_rec(/* true */1,ty);
    var res=free_variables[1];
    
    free_variables[1]=/* [] */0;
    really_closed[1]=/* None */0;
    return res;
    };

var
 free_variables$1=
  function(env,ty)
   {var tl=List["map"](function(prim){return prim[1];},free_vars(env,ty));
    
    Btype["unmark_type"](ty);
    return tl;
    };

var
 closed_type=
  function(ty)
   {var match$1=free_vars(/* None */0,ty);
    
    if(match$1)
     {var match$2=match$1[1];throw [0,Non_closed$1,match$2[1],match$2[2]];}
    else
     {return /* () */0;}
    };

var
 closed_parameterized_type=
  function(params,ty)
   {List["iter"](Btype["mark_type"],params);
    try
     {closed_type(ty);var ok=/* true */1;}
    catch(exn)
     {if(exn[1]===Non_closed$1){var ok=/* false */0;}else{throw exn;}}
    
    List["iter"](Btype["unmark_type"],params);
    Btype["unmark_type"](ty);
    return ok;
    };

var
 closed_type_decl=
  function(decl)
   {try
     {List["iter"](Btype["mark_type"],decl[1]);
      var match$1=decl[3];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){case 0:exit=990;case 1:exit=990;}}
      else
       {switch(match$1[0])
         {case 0:
           List["iter"](function(l){return closed_type(l[3]);},match$1[1]);
          case 1:
           List["iter"]
            (function(param)
              {if(param[3])
                {return /* () */0;}
               else
                {return List["iter"](closed_type,param[2]);}
               },
             match$1[1])
          }}
      
      switch(exit){case 990:}
      
      var match$2=decl[5];
      
      if(match$2){closed_type(match$2[1])}else{}
      
      Btype["unmark_type_decl"](decl);
      return /* None */0;
      }
    catch(exn)
     {if(exn[1]===Non_closed$1)
       {Btype["unmark_type_decl"](decl);return /* Some */[0,exn[2]];}
      else
       {throw exn;}
      }
    };

var
 closed_extension_constructor=
  function(ext)
   {try
     {List["iter"](Btype["mark_type"],ext[2]);
      var match$1=ext[4];
      
      if(match$1){}else{List["iter"](closed_type,ext[3])}
      
      Btype["unmark_extension_constructor"](ext);
      return /* None */0;
      }
    catch(exn)
     {if(exn[1]===Non_closed$1)
       {Btype["unmark_extension_constructor"](ext);
        return /* Some */[0,exn[2]];
        }
      else
       {throw exn;}
      }
    };

var Failure=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Failure",0]);

var
 closed_class=
  function(params,sign)
   {var ty=object_fields(repr(sign[1]));
    
    var match$1=flatten_fields(ty);
    
    var fields=match$1[1];
    
    List["iter"](Btype["mark_type"],params);
    Btype["mark_type"](match$1[2]);
    List["iter"]
     (function(param)
       {if(CamlPrimitive["caml_string_equal"](param[1],Btype["dummy_method"]))
         {return Btype["mark_type"](param[3]);}
        else
         {return 0;}
        },
      fields);
    try
     {Btype["mark_type_node"](repr(sign[1]));
      List["iter"]
       (function(param)
         {var ty$1=param[3];
          
          if(Btype["field_kind_repr"](param[2])===/* Fpresent */0)
           {try
             {return closed_type(ty$1);}
            catch(exn)
             {if(exn[1]===Non_closed$1)
               {throw [0,
                       Failure,
                       /* CC_Method */[0,exn[2],exn[3],param[1],ty$1]];
                }
              else
               {throw exn;}
              }
            }
          else
           {return 0;}
          },
        fields);
      Btype["mark_type_params"](repr(sign[1]));
      List["iter"](Btype["unmark_type"],params);
      Btype["unmark_class_signature"](sign);
      return /* None */0;
      }
    catch(exn)
     {if(exn[1]===Failure)
       {Btype["mark_type_params"](repr(sign[1]));
        List["iter"](Btype["unmark_type"],params);
        Btype["unmark_class_signature"](sign);
        return /* Some */[0,exn[2]];
        }
      else
       {throw exn;}
      }
    };

var
 duplicate_type=
  function(ty){return Subst["type_expr"](Subst["identity"],ty);};

var
 duplicate_class_type=
  function(ty){return Subst["class_type"](Subst["identity"],ty);};

var
 iter_generalize=
  function(tyl,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>current_level[1]&&ty$1[2]!==Btype["generic_level"])
     {Btype["set_level"](ty$1,Btype["generic_level"]);
      var match$1=ty$1[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 3:Btype["iter_abbrev"](iter_generalize(tyl),match$1[3][1]);
          default:exit=978;}}
      
      switch(exit){case 978:}
      
      return Btype["iter_type_expr"](iter_generalize(tyl),ty$1);
      }
    else
     {return tyl[1]=/* :: */[0,ty$1,tyl[1]],0;}
    };

var
 iter_generalize$1=
  function(tyl,ty)
   {simple_abbrevs[1]=/* Mnil */0;return iter_generalize(tyl,ty);};

var generalize=function(ty){return iter_generalize$1([0,/* [] */0],ty);};

var
 iterative_generalization=
  function(min_level,tyl)
   {var tyl$prime=[0,/* [] */0];
    
    List["iter"](iter_generalize$1(tyl$prime),tyl);
    return List["fold_right"]
            (function(ty,l)
              {if(ty[2]<=min_level){return l;}else{return /* :: */[0,ty,l];}},
             tyl$prime[1],
             /* [] */0);
    };

var
 generalize_structure=
  function(var_level,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]!==Btype["generic_level"])
     {if(Btype["is_Tvar"](ty$1)&&ty$1[2]>var_level)
       {return Btype["set_level"](ty$1,var_level);}
      else
       {var match$1=ty$1[1];
        
        var exit;
        
        var $js;
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 3:
             $js=
             !is_object_type(match$1[1])&&
             (match$1[3][1]=/* Mnil */0,/* true */1);
             
            default:exit=972;}}
        
        var $js$1;
        switch(exit){case 972:$js$1=/* true */1;}
        if(ty$1[2]>current_level[1]&&$js$1)
         {Btype["set_level"](ty$1,Btype["generic_level"]);
          return Btype["iter_type_expr"](generalize_structure(var_level),ty$1);
          }
        else
         {return 0;}
        }
      }
    else
     {return 0;}
    };

var
 generalize_structure$1=
  function(var_level,ty)
   {simple_abbrevs[1]=/* Mnil */0;return generalize_structure(var_level,ty);};

var
 generalize_spine=
  function(ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]<current_level[1]||ty$1[2]===Btype["generic_level"])
     {return /* () */0;}
    else
     {var match$1=ty$1[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 1:
           Btype["set_level"](ty$1,Btype["generic_level"]);
           generalize_spine(match$1[2]);
           return generalize_spine(match$1[3]);
           
          case 2:var tyl=match$1[1];exit=968;
          case 3:
           if(!is_object_type(match$1[1]))
            {Btype["set_level"](ty$1,Btype["generic_level"]);
             match$1[3][1]=/* Mnil */0;
             return List["iter"](generalize_spine,match$1[2]);
             }
           else
            {exit=969;}
           
          case 10:
           Btype["set_level"](ty$1,Btype["generic_level"]);
           return generalize_spine(match$1[1]);
           
          case 11:var tyl=match$1[3];exit=968;
          default:exit=969;}}
      
      switch(exit)
       {case 969:return /* () */0;
        case 968:
         Btype["set_level"](ty$1,Btype["generic_level"]);
         return List["iter"](generalize_spine,tyl);
         
        }
      }
    };

var forward_try_expand_once=[0,function(env,ty){throw Cannot_expand;}];

var
 get_level=
  function(env,p)
   {try
     {var match$1=Env["find_type"](p,env)[7];
      
      if(match$1){return match$1[1][1];}else{return Path["binding_time"](p);}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Path["binding_time"](p);}
      else
       {throw exn;}
      }
    };

var
 normalize_package_path=
  function(env,p)
   {try
     {var t=Env["find_modtype"](p,env)[1];}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var t=/* None */0;}
      else
       {throw exn;}
      }
    
    var exit;
    
    if(t)
     {var match$1=t[1];
      
      switch(match$1[0])
       {case 0:return normalize_package_path(env,match$1[1]);
        default:exit=961;}
      }
    else
     {exit=961;}
    
    switch(exit){case 961:return p;}
    };

var
 update_level=
  function(env,level,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>level)
     {var match$1=Env["gadt_instance_level"](env,ty$1);
      
      if(match$1)
       {if(level<match$1[1])
         {throw [0,
                 Unify,
                 /* :: */[0,
                  /* tuple */[0,ty$1,newvar2(/* None */0,level)],
                  /* [] */0]];
          }
        else
         {}
        }
      else
       {}
      
      var match$2=ty$1[1];
      
      var exit;
      
      if(typeof match$2==="number")
       {switch(match$2){}}
      else
       {switch(match$2[0])
         {case 3:
           var p=match$2[1];
           
           if(level<get_level(env,p))
            {try
              {Btype["link_type"](ty$1,forward_try_expand_once[1](env,ty$1));
               return update_level(env,level,ty$1);
               }
             catch(exn)
              {if(exn===Cannot_expand)
                {if(level<get_level(env,p))
                  {throw [0,
                          Unify,
                          /* :: */[0,
                           /* tuple */[0,ty$1,newvar2(/* None */0,level)],
                           /* [] */0]];
                   }
                 else
                  {}
                 
                 return Btype["iter_type_expr"](update_level(env,level),ty$1);
                 }
               else
                {throw exn;}
               }
             }
           else
            {exit=959;}
           
          case 4:
           var nm=match$2[2];
           
           var match$3=nm[1];
           
           if(match$3)
            {if(level<get_level(env,match$3[1][1]))
              {Btype["set_name"](nm,/* None */0);
               return update_level(env,level,ty$1);
               }
             else
              {exit=959;}
             }
           else
            {exit=959;}
           
          case 5:
           var ty1=match$2[3];
           
           if
            (CamlPrimitive["caml_string_equal"]
              (match$2[1],Btype["dummy_method"])&&
             repr(ty1)[2]>
             level)
            {throw [0,
                    Unify,
                    /* :: */[0,
                     /* tuple */[0,ty1,newvar2(/* None */0,level)],
                     /* [] */0]];
             }
           else
            {exit=959;}
           
          case 8:
           var row=Btype["row_repr"](match$2[1]);
           
           var match$4=row[6];
           
           var exit$1;
           
           if(match$4)
            {if(level<get_level(env,match$4[1][1]))
              {Btype["log_type"](ty$1);
               var newrecord=/* unknown */"duprecord regular 6";
               
               ty$1[1]=/* Tvariant */[8,(newrecord[6]=/* None */0,newrecord)]}
             else
              {exit$1=956;}
             }
           else
            {exit$1=956;}
           
           switch(exit$1){case 956:}
           
           Btype["set_level"](ty$1,level);
           return Btype["iter_type_expr"](update_level(env,level),ty$1);
           
          case 11:
           var p$1=match$2[1];
           
           if(level<get_level(env,p$1))
            {var p$prime=normalize_package_path(env,p$1);
             
             if(Path["same"](p$1,p$prime))
              {throw [0,
                      Unify,
                      /* :: */[0,
                       /* tuple */[0,ty$1,newvar2(/* None */0,level)],
                       /* [] */0]];
               }
             else
              {}
             
             Btype["log_type"](ty$1);
             ty$1[1]=/* Tpackage */[11,p$prime,match$2[2],match$2[3]];
             return update_level(env,level,ty$1);
             }
           else
            {exit=959;}
           
          default:exit=959;}}
      
      switch(exit)
       {case 959:
         Btype["set_level"](ty$1,level);
         return Btype["iter_type_expr"](update_level(env,level),ty$1);
         
        }
      }
    else
     {return 0;}
    };

var
 generalize_contravariant=
  function(env)
   {if(Clflags["principal"][1])
     {return generalize_structure$1;}
    else
     {return update_level(env);}
    };

var
 generalize_expansive=
  function(env,var_level,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]!==Btype["generic_level"])
     {if(ty$1[2]>var_level)
       {Btype["set_level"](ty$1,Btype["generic_level"]);
        var match$1=ty$1[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 1:
             generalize_contravariant(env,var_level,match$1[2]);
             return generalize_expansive(env,var_level,match$1[3]);
             
            case 3:
             var tyl=match$1[2];
             
             try
              {var variance=Env["find_type"](match$1[1],env)[6];}
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {var
                  variance=
                   List["map"]
                    (function(param){return Types["Variance"][4];},tyl);
                 }
               else
                {throw exn;}
               }
             
             match$1[3][1]=/* Mnil */0;
             return List["iter2"]
                     (function(v,t)
                       {if(Types["Variance"][9](/* May_weak */2,v))
                         {return generalize_contravariant(env,var_level,t);}
                        else
                         {return generalize_expansive(env,var_level,t);}
                        },
                      variance,
                      tyl);
             
            case 11:
             return List["iter"]
                     (generalize_contravariant(env,var_level),match$1[3]);
             
            default:exit=951;}}
        
        switch(exit)
         {case 951:
           return Btype["iter_type_expr"]
                   (generalize_expansive(env,var_level),ty$1);
           
          }
        }
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var
 generalize_expansive$1=
  function(env,ty)
   {simple_abbrevs[1]=/* Mnil */0;
    try
     {return generalize_expansive(env,nongen_level[1],ty);}
    catch(exn)
     {var exit;
      
      if(exn[1]===Unify)
       {var tr=exn[2];
        
        if(tr)
         {if(tr[2])
           {exit=947;}
          else
           {throw [0,Unify,/* :: */[0,/* tuple */[0,ty,tr[1][2]],tr]];}
          }
        else
         {exit=947;}
        }
      else
       {exit=947;}
      
      switch(exit){case 947:throw exn;}
      }
    };

var
 generalize_global=
  function(ty){return generalize_structure$1(global_level[1],ty);};

var
 generalize_structure$2=
  function(ty){return generalize_structure$1(current_level[1],ty);};

var correct_levels=function(ty){return duplicate_type(ty);};

var
 limited_generalize=
  function(ty0,ty)
   {var ty0$1=repr(ty0);
    
    var graph=Hashtbl["create"](/* None */0,17);
    
    var idx=[0,Btype["lowest_level"]];
    
    var roots=[0,/* [] */0];
    
    var
     inverse=
      function(pty,ty)
       {var ty$1=repr(ty);
        
        if(ty$1[2]>current_level[1]||ty$1[2]===Btype["generic_level"])
         {idx[0]--;
          Hashtbl["add"](graph,idx[1],/* tuple */[0,ty$1,[0,pty]]);
          if(ty$1[2]===Btype["generic_level"]||ty$1===ty0$1)
           {roots[1]=/* :: */[0,ty$1,roots[1]]}
          else
           {}
          
          Btype["set_level"](ty$1,idx[1]);
          return Btype["iter_type_expr"]
                  (inverse(/* :: */[0,ty$1,/* [] */0]),ty$1);
          }
        else
         {if(ty$1[2]<Btype["lowest_level"])
           {var match$1=Hashtbl["find"](graph,ty$1[2]);
            
            var parents=match$1[2];
            
            return parents[1]=Pervasives["@"](pty,parents[1]),0;
            }
          else
           {return 0;}
          }
        };
    
    var
     generalize_parents=
      function(ty)
       {var idx$1=ty[2];
        
        if(idx$1!==Btype["generic_level"])
         {Btype["set_level"](ty,Btype["generic_level"]);
          List["iter"](generalize_parents,Hashtbl["find"](graph,idx$1)[2][1]);
          var match$1=ty[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 8:
               var more=Btype["row_more"](match$1[1]);
               
               var lv=more[2];
               
               if
                ((lv<Btype["lowest_level"]||lv>current_level[1])&&
                 lv!==
                 Btype["generic_level"])
                {return Btype["set_level"](more,Btype["generic_level"]);}
               else
                {return 0;}
               
              default:exit=937;}}
          
          switch(exit){case 937:return /* () */0;}
          }
        else
         {return 0;}
        };
    
    inverse(/* [] */0,ty);
    if(ty0$1[2]<Btype["lowest_level"])
     {Btype["iter_type_expr"](inverse(/* [] */0),ty0$1)}
    else
     {}
    
    List["iter"](generalize_parents,roots[1]);
    return Hashtbl["iter"]
            (function(param,param$1)
              {var ty$1=param$1[1];
               
               if(ty$1[2]!==Btype["generic_level"])
                {return Btype["set_level"](ty$1,current_level[1]);}
               else
                {return 0;}
               },
             graph);
    };

var
 inv_type=
  function(hash,pty,ty)
   {var ty$1=repr(ty);
    
    try
     {var inv=Btype["TypeHash"][7](hash,ty$1);
      
      return inv[2]=Pervasives["@"](pty,inv[2]),0;
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var inv$1=/* record */[0,ty$1,pty];
        
        Btype["TypeHash"][5](hash,ty$1,inv$1);
        return Btype["iter_type_expr"]
                (inv_type(hash,/* :: */[0,inv$1,/* [] */0]),ty$1);
        }
      else
       {throw exn;}
      }
    };

var
 compute_univars=
  function(ty)
   {var inverted=Btype["TypeHash"][1](17);
    
    inv_type(inverted,/* [] */0,ty);
    var node_univars=Btype["TypeHash"][1](17);
    
    var
     add_univar=
      function(univ,inv)
       {var match$1=inv[1][1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 10:
             if(List["memq"](univ,List["map"](repr,match$1[2])))
              {return /* () */0;}
             else
              {exit=925;}
             
            default:exit=925;}}
        
        switch(exit)
         {case 925:
           try
            {var univs=Btype["TypeHash"][7](node_univars,inv[1]);
             
             if(!Btype["TypeSet"][3](univ,univs[1]))
              {univs[1]=Btype["TypeSet"][4](univ,univs[1]);
               return List["iter"](add_univar(univ),inv[2]);
               }
             else
              {return 0;}
             }
           catch(exn)
            {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
              {Btype["TypeHash"][5]
                (node_univars,inv[1],[0,Btype["TypeSet"][5](univ)]);
               return List["iter"](add_univar(univ),inv[2]);
               }
             else
              {throw exn;}
             }
           
          }
        };
    
    Btype["TypeHash"][11]
     (function(ty,inv)
       {if(Btype["is_Tunivar"](ty)){return add_univar(ty,inv);}else{return 0;}
        },
      inverted);
    return function(ty)
     {try
       {return Btype["TypeHash"][7](node_univars,ty)[1];}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return Btype["TypeSet"][1];}
        else
         {throw exn;}
        }
      };
    };

var
 find_repr=
  function(p1,param)
   {if(typeof param==="number")
     {switch(param){case 0:return /* None */0;}}
    else
     {switch(param[0])
       {case 0:
         var exit;
         
         if(param[1]!==0)
          {if(Path["same"](p1,param[2]))
            {return /* Some */[0,param[3]];}
           else
            {exit=921;}
           }
         else
          {exit=921;}
         
         switch(exit){case 921:return find_repr(p1,param[5]);}
         
        case 1:var rem=param[1][1];return find_repr(p1,rem);
        }}
    };

var abbreviations=[0,[0,/* Mnil */0]];

var
 copy=
  function(env,partial,keep_names,ty)
   {var copy$1=copy(env,partial,keep_names);
    
    var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 7:return match$1[1];default:exit=917;}}
    
    switch(exit)
     {case 917:
       if(ty$1[2]!==Btype["generic_level"]&&partial===/* None */0)
        {return ty$1;}
       else
        {if(ty$1[2]===Btype["generic_level"])
          {var forget=Btype["generic_level"];}
         else
          {if(partial)
            {var match$2=partial[1];
             
             if(Btype["TypeSet"][2](match$2[1](ty$1)))
              {if(match$2[2])
                {var forget=ty$1[2];}
               else
                {var forget=current_level[1];}
               }
             else
              {var forget=Btype["generic_level"];}
             }
           else
            {throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"typing/ctype.ml",984,16]];
             }
           }
         
         if(forget!==Btype["generic_level"])
          {return newty2(forget,[/* Tvar */0,/* None */0]);}
         else
          {var desc=ty$1[1];
           
           Btype["save_desc"](ty$1,desc);
           var t=newvar(/* None */0,/* () */0);
           
           var exit$1;
           
           if(env)
            {var env$1=env[1];
             
             if(Env["has_local_constraints"](env$1))
              {var match$3=Env["gadt_instance_level"](env$1,ty$1);
               
               if(match$3)
                {Env["add_gadt_instances"]
                  (env$1,match$3[1],/* :: */[0,t,/* [] */0])}
               else
                {}
               }
             else
              {exit$1=913;}
             }
           else
            {exit$1=913;}
           
           switch(exit$1){case 913:}
           
           ty$1[1]=/* Tsubst */[7,t];
           var exit$2;
           
           var $js;
           if(typeof desc==="number")
            {switch(desc){}}
           else
            {switch(desc[0])
              {case 3:
                var tl=desc[2];
                
                var p=desc[1];
                
                var abbrevs=proper_abbrevs(p,tl,abbreviations[1]);
                
                var match$4=find_repr(p,abbrevs[1]);
                
                var exit$3;
                
                if(match$4)
                 {var ty$2=match$4[1];
                  
                  if(repr(ty$2)!==t)
                   {$js=/* Tlink */[6,ty$2];}
                  else
                   {exit$3=893;}
                  }
                else
                 {exit$3=893;}
                
                switch(exit$3)
                 {case 893:
                   var abbrev=abbreviations[1][1];
                   
                   var exit$4;
                   
                   var $js$1;
                   if(typeof abbrev==="number")
                    {switch(abbrev){case 0:exit$4=892;}}
                   else
                    {switch(abbrev[0])
                      {case 0:$js$1=/* Mlink */[1,abbreviations[1]];
                       case 1:exit$4=892;
                       }}
                   
                   var $js$2;
                   switch(exit$4){case 892:$js$2=abbrev;}
                   $js=/* Tconstr */[3,p,List["map"](copy$1,tl),[0,$js$2]];
                   
                  }
                
               case 4:
                if(partial!==/* None */0)
                 {$js=/* Tobject */[4,copy$1(desc[1]),[0,/* None */0]];}
                else
                 {exit$2=912;}
                
               case 5:
                var match$5=Btype["field_kind_repr"](desc[2]);
                
                if(typeof match$5==="number")
                 {if(match$5!==0)
                   {$js=/* Tlink */[6,copy$1(desc[4])];}
                  else
                   {$js=Btype["copy_type_desc"](/* None */0,copy$1,desc);}
                  }
                else
                 {Btype["dup_kind"](match$5[1]);
                  $js=Btype["copy_type_desc"](/* None */0,copy$1,desc);
                  }
                
               case 8:
                var row=Btype["row_repr"](desc[1]);
                
                var more=repr(row[2]);
                
                var match$6=more[1];
                
                var exit$5;
                
                if(typeof match$6==="number")
                 {switch(match$6){}}
                else
                 {switch(match$6[0])
                   {case 7:
                     var match$7=match$6[1][1];
                     
                     if(typeof match$7==="number")
                      {switch(match$7){}}
                     else
                      {switch(match$7[0])
                        {case 2:
                          var match$8=match$7[1];
                          
                          if(match$8)
                           {var match$9=match$8[2];
                            
                            if(match$9)
                             {if(match$9[2])
                               {exit$5=909;}
                              else
                               {var ty2=match$9[1];
                                
                                ty$1[1]=/* Tsubst */[7,ty2];
                                $js=/* Tlink */[6,ty2];
                                }
                              }
                            else
                             {exit$5=909;}
                            }
                          else
                           {exit$5=909;}
                          
                         default:exit$5=909;}}
                     
                    default:exit$5=909;}}
                
                switch(exit$5)
                 {case 909:
                   var keep=more[2]!==Btype["generic_level"];
                   
                   var match$10=more[1];
                   
                   var exit$6;
                   
                   if(typeof match$10==="number")
                    {switch(match$10){case 0:exit$6=904;}}
                   else
                    {switch(match$10[0])
                      {case 0:exit$6=905;
                       case 3:exit$6=904;
                       case 7:var more$prime=match$10[1];
                       case 9:exit$6=905;
                       default:
                        throw [0,
                               CamlPrimitive["caml_global_data"]["Assert_failure"],
                               [0,"typing/ctype.ml",1047,24]];
                        }}
                   
                   switch(exit$6)
                    {case 904:
                      if(keep){Btype["save_desc"](more,more[1])}else{}
                      
                      var more$prime=copy$1(more);
                      
                     case 905:
                      Btype["save_desc"](more,more[1]);
                      if(keep)
                       {var more$prime=more;}
                      else
                       {var more$prime=newty(more[1]);}
                      
                     }
                   
                   var match$11=repr(more$prime);
                   
                   var match$12=match$11[1];
                   
                   var exit$7;
                   
                   if(typeof match$12==="number")
                    {switch(match$12){}}
                   else
                    {switch(match$12[0])
                      {case 3:
                        if(!row[5])
                         {var newrecord=/* unknown */"duprecord regular 6";
                          
                          newrecord[5]=/* true */1;
                          var row$1=newrecord;
                          }
                        else
                         {exit$7=902;}
                        
                       default:exit$7=902;}}
                   
                   switch(exit$7){case 902:var row$1=row;}
                   
                   var exit$8;
                   
                   if(partial)
                    {var match$13=partial[1];
                     
                     if(match$13[2]!==0)
                      {exit$8=899;}
                     else
                      {if(more[3]!==more$prime[3])
                        {var more$prime$1=more$prime;}
                       else
                        {if(keep){var lv=more[2];}else{var lv=current_level[1];}
                         
                         var more$prime$1=newty2(lv,[/* Tvar */0,/* None */0]);
                         }
                       
                       var
                        not_reither=
                         function(param)
                          {var match$14=Btype["row_field_repr"](param[2]);
                           
                           var exit$9;
                           
                           if(typeof match$14==="number")
                            {switch(match$14){case 0:exit$9=895;}}
                           else
                            {switch(match$14[0])
                              {case 0:exit$9=895;case 1:return /* false */0;}}
                           
                           switch(exit$9){case 895:return /* true */1;}
                           };
                       
                       if
                        (row$1[4]&&
                         !row$1[5]&&
                         Btype["TypeSet"][2](match$13[1](ty$1))&&
                         !List["for_all"](not_reither,row$1[1]))
                        {var
                          match$14=
                           /* tuple */[0,
                            more$prime$1,
                            /* record */[0,
                             List["filter"](not_reither,row$1[1]),
                             more$prime$1,
                             /* () */0,
                             /* false */0,
                             /* false */0,
                             /* None */0]];
                         }
                       else
                        {var match$14=/* tuple */[0,more$prime$1,row$1];}
                       }
                     }
                   else
                    {exit$8=899;}
                   
                   switch(exit$8)
                    {case 899:var match$14=/* tuple */[0,more$prime,row$1];}
                   
                   var more$prime$2=match$14[1];
                   
                   more[1]=
                   /* Tsubst */[7,
                    Btype["newgenty"]
                     (/* Ttuple */[2,
                       /* :: */[0,more$prime$2,/* :: */[0,t,/* [] */0]]])];
                   $js=
                   /* Tvariant */[8,
                    Btype["copy_row"]
                     (copy$1,/* true */1,match$14[2],keep,more$prime$2)];
                   
                  }
                
               default:exit$2=912;}}
           
           var $js$3;
           switch(exit$2)
            {case 912:$js$3=Btype["copy_type_desc"](keep_names,copy$1,desc);}
           t[1]=$js$3;
           return t;
           }
         }
       
      }
    };

var
 simple_copy=
  function(t){return copy(/* None */0,/* None */0,/* None */0,t);};

var
 gadt_env=
  function(env)
   {if(Env["has_local_constraints"](env))
     {return /* Some */[0,env];}
    else
     {return /* None */0;}
    };

var
 instance=
  function(partial,env,sch)
   {var env$1=gadt_env(env);
    
    if(partial)
     {var
       partial$1=
        /* Some */[0,/* tuple */[0,compute_univars(sch),partial[1]]];
      }
    else
     {var partial$1=/* None */0;}
    
    var ty=copy(env$1,partial$1,/* None */0,sch);
    
    Btype["cleanup_types"](/* () */0);
    return ty;
    };

var
 instance_def=
  function(sch)
   {var ty=copy(/* None */0,/* None */0,/* None */0,sch);
    
    Btype["cleanup_types"](/* () */0);
    return ty;
    };

var
 instance_list=
  function(env,schl)
   {var env$1=gadt_env(env);
    
    var
     tyl=
      List["map"]
       (function(t){return copy(env$1,/* None */0,/* None */0,t);},schl);
    
    Btype["cleanup_types"](/* () */0);
    return tyl;
    };

var reified_var_counter=[0,Types["Vars"][1]];

var
 get_new_abstract_name=
  function(s)
   {try
     {var index=Types["Vars"][22](s,reified_var_counter[1])+1;}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var index=0;}
      else
       {throw exn;}
      }
    
    reified_var_counter[1]=Types["Vars"][4](s,index,reified_var_counter[1]);
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,
                35,
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0]]],
              "%s#%d"],
             s,
             index);
    };

var
 new_declaration=
  function(newtype,manifest)
   {return /* record */[0,
            /* [] */0,
            0,
            /* Type_abstract */0,
            /* Public */1,
            manifest,
            /* [] */0,
            newtype,
            Location["none"],
            /* [] */0];
    };

var
 instance_constructor=
  function(in_pattern,cstr)
   {if(in_pattern)
     {var match$1=in_pattern[1];
      
      var newtype_lev=match$1[2];
      
      var env=match$1[1];
      
      var
       process=
        function(existential)
         {var
           decl=
            new_declaration
             (/* Some */[0,/* tuple */[0,newtype_lev,newtype_lev]],
              /* None */0);
          
          var match$2=repr(existential);
          
          var match$3=match$2[1];
          
          var exit;
          
          if(typeof match$3==="number")
           {switch(match$3){}}
          else
           {switch(match$3[0])
             {case 0:
               var match$4=match$3[1];
               
               if(match$4){var name=match$4[1];}else{exit=871;}
               
              default:exit=871;}}
          
          switch(exit){case 871:var name="ex";}
          
          var
           match$5=
            Env["enter_type"](get_new_abstract_name(name),decl,env[1]);
          
          env[1]=match$5[2];
          var
           to_unify=
            newty
             (/* Tconstr */[3,
               /* Pident */[0,match$5[1]],
               /* [] */0,
               [0,/* Mnil */0]]);
          
          var tv=copy(/* None */0,/* None */0,/* None */0,existential);
          
          if(Btype["is_Tvar"](tv))
           {}
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"typing/ctype.ml",1170,8]];
            }
          
          return Btype["link_type"](tv,to_unify);
          };
      
      List["iter"](process,cstr[3])}
    else
     {}
    
    var ty_res=copy(/* None */0,/* None */0,/* None */0,cstr[2]);
    
    var ty_args=List["map"](simple_copy,cstr[4]);
    
    Btype["cleanup_types"](/* () */0);
    return /* tuple */[0,ty_args,ty_res];
    };

var
 instance_parameterized_type=
  function(keep_names,sch_args,sch)
   {var
     ty_args=
      List["map"]
       (function(t){return copy(/* None */0,/* None */0,keep_names,t);},
        sch_args);
    
    var ty=copy(/* None */0,/* None */0,/* None */0,sch);
    
    Btype["cleanup_types"](/* () */0);
    return /* tuple */[0,ty_args,ty];
    };

var
 instance_parameterized_type_2=
  function(sch_args,sch_lst,sch)
   {var ty_args=List["map"](simple_copy,sch_args);
    
    var ty_lst=List["map"](simple_copy,sch_lst);
    
    var ty=copy(/* None */0,/* None */0,/* None */0,sch);
    
    Btype["cleanup_types"](/* () */0);
    return /* tuple */[0,ty_args,ty_lst,ty];
    };

var
 instance_declaration=
  function(decl)
   {var match$1=decl[3];
    
    var $js;
    if(typeof match$1==="number")
     {switch(match$1)
       {case 0:$js=/* Type_abstract */0;case 1:$js=/* Type_open */1;}}
    else
     {switch(match$1[0])
       {case 0:
         $js=
         /* Type_record */[0,
          List["map"]
           (function(l)
             {return /* record */[0,
                      l[1],
                      l[2],
                      copy(/* None */0,/* None */0,/* None */0,l[3]),
                      l[4],
                      l[5]];
              },
            match$1[1]),
          match$1[2]];
         
        case 1:
         $js=
         /* Type_variant */[1,
          List["map"]
           (function(c)
             {return /* record */[0,
                      c[1],
                      List["map"](simple_copy,c[2]),
                      Misc["may_map"](simple_copy,c[3]),
                      c[4],
                      c[5]];
              },
            match$1[1])];
         
        }}
    var
     decl$1=
      /* record */[0,
       List["map"](simple_copy,decl[1]),
       decl[2],
       $js,
       decl[4],
       Misc["may_map"](simple_copy,decl[5]),
       decl[6],
       decl[7],
       decl[8],
       decl[9]];
    
    Btype["cleanup_types"](/* () */0);
    return decl$1;
    };

var
 instance_class=
  function(params,cty)
   {var
     copy_class_type=
      function(param)
       {switch(param[0])
         {case 0:
           return /* Cty_constr */[0,
                   param[1],
                   List["map"](simple_copy,param[2]),
                   copy_class_type(param[3])];
           
          case 1:
           var sign=param[1];
           
           return /* Cty_signature */[1,
                   /* record */[0,
                    copy(/* None */0,/* None */0,/* None */0,sign[1]),
                    Types["Vars"][23]
                     (function(param$1)
                       {return /* tuple */[0,
                                param$1[1],
                                param$1[2],
                                copy(/* None */0,/* None */0,/* None */0,param$1[3])];
                        },
                      sign[2]),
                    sign[3],
                    List["map"]
                     (function(param$1)
                       {return /* tuple */[0,
                                param$1[1],
                                List["map"](simple_copy,param$1[2])];
                        },
                      sign[4])]];
           
          case 2:
           return /* Cty_arrow */[2,
                   param[1],
                   copy(/* None */0,/* None */0,/* None */0,param[2]),
                   copy_class_type(param[3])];
           
          }
        };
    
    var params$prime=List["map"](simple_copy,params);
    
    var cty$prime=copy_class_type(cty);
    
    Btype["cleanup_types"](/* () */0);
    return /* tuple */[0,params$prime,cty$prime];
    };

var
 diff_list=
  function(l1,l2)
   {if(l1===l2)
     {return /* [] */0;}
    else
     {if(l1)
       {return /* :: */[0,l1[1],diff_list(l1[2],l2)];}
      else
       {return Pervasives["invalid_arg"]("Ctype.diff_list");}
      }
    };

var
 conflicts=
  function(free,bound)
   {var bound$1=List["map"](repr,bound);
    
    return Btype["TypeSet"][16]
            (function(t){return List["memq"](repr(t),bound$1);},free);
    };

var delayed_copy=[0,/* [] */0];

var
 copy_sep=
  function(fixed,free,bound,visited,ty)
   {var ty$1=repr(ty);
    
    var univars=free(ty$1);
    
    if(Btype["TypeSet"][2](univars))
     {if(ty$1[2]!==Btype["generic_level"])
       {return ty$1;}
      else
       {var t=newvar(/* None */0,/* () */0);
        
        delayed_copy[1]=
        /* :: */[0,
         [246,
          function(param)
           {return t[1]=
                   /* Tlink */[6,
                    copy(/* None */0,/* None */0,/* None */0,ty$1)],
                   0;
            }],
         delayed_copy[1]];
        return t;
        }
      }
    else
     {try
       {var match$1=List["assq"](ty$1,visited);
        
        if(Btype["is_Tunivar"](ty$1))
         {var dl=/* [] */0;}
        else
         {var dl=diff_list(bound,match$1[2]);}
        
        if(dl!==/* [] */0&&conflicts(univars,dl))
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        else
         {}
        
        return match$1[1];
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {var t$1=newvar(/* None */0,/* () */0);
          
          var match$2=ty$1[1];
          
          var exit;
          
          if(typeof match$2==="number")
           {switch(match$2){}}
          else
           {switch(match$2[0])
             {case 1:exit=841;
              case 2:exit=841;
              case 3:exit=841;
              case 4:exit=841;
              case 8:exit=841;
              case 11:exit=841;
              default:exit=842;}}
          
          switch(exit)
           {case 842:var visited$1=visited;
            case 841:
             var
              visited$1=
               /* :: */[0,
                /* tuple */[0,ty$1,/* tuple */[0,t$1,bound]],
                visited];
             
            }
          
          var copy_rec=copy_sep(fixed,free,bound,visited$1);
          
          var match$3=ty$1[1];
          
          var exit$1;
          
          var $js;
          if(typeof match$3==="number")
           {switch(match$3){}}
          else
           {switch(match$3[0])
             {case 8:
               var row=Btype["row_repr"](match$3[1]);
               
               var more=repr(row[2]);
               
               var
                keep=
                 Btype["is_Tvar"](more)&&more[2]!==Btype["generic_level"];
               
               var more$prime=copy_rec(more);
               
               var fixed$prime=fixed&&Btype["is_Tvar"](repr(more$prime));
               
               var
                row$1=
                 Btype["copy_row"](copy_rec,fixed$prime,row,keep,more$prime);
               
               $js=/* Tvariant */[8,row$1];
               
              case 10:
               var tl=List["map"](repr,match$3[2]);
               
               var tl$prime=List["map"](function(t){return newty(t[1]);},tl);
               
               var bound$1=Pervasives["@"](tl,bound);
               
               var
                visited$2=
                 Pervasives["@"]
                  (List["map2"]
                    (function(ty,t)
                      {return /* tuple */[0,ty,/* tuple */[0,t,bound$1]];},
                     tl,
                     tl$prime),
                   visited$1);
               
               $js=
               /* Tpoly */[10,
                copy_sep(fixed,free,bound$1,visited$2,match$3[1]),
                tl$prime];
               
              default:exit$1=839;}}
          
          var $js$1;
          switch(exit$1)
           {case 839:
             $js$1=Btype["copy_type_desc"](/* None */0,copy_rec,ty$1[1]);
            }
          t$1[1]=$js$1;
          return t$1;
          }
        else
         {throw exn;}
        }
      }
    };

var
 instance_poly=
  function($staropt$star,fixed,univars,sch)
   {if($staropt$star)
     {var keep_names=$staropt$star[1];}
    else
     {var keep_names=/* false */0;}
    
    var univars$1=List["map"](repr,univars);
    
    var
     copy_var=
      function(ty)
       {var match$1=ty[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 9:
             if(keep_names)
              {return newty(/* Tvar */[0,match$1[1]]);}
             else
              {return newvar(/* None */0,/* () */0);}
             
            default:exit=824;}}
        
        switch(exit)
         {case 824:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"typing/ctype.ml",1307,11]];
           
          }
        };
    
    var vars=List["map"](copy_var,univars$1);
    
    var
     pairs=
      List["map2"]
       (function(u,v){return /* tuple */[0,u,/* tuple */[0,v,/* [] */0]];},
        univars$1,
        vars);
    
    delayed_copy[1]=/* [] */0;
    var ty=copy_sep(fixed,compute_univars(sch),/* [] */0,pairs,sch);
    
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
      delayed_copy[1]);
    delayed_copy[1]=/* [] */0;
    Btype["cleanup_types"](/* () */0);
    return /* tuple */[0,vars,ty];
    };

var
 instance_label=
  function(fixed,lbl)
   {var ty_res=copy(/* None */0,/* None */0,/* None */0,lbl[2]);
    
    var ty=repr(lbl[3]);
    
    var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 10:
         var match$2=instance_poly(/* None */0,fixed,match$1[2],match$1[1]);
        default:exit=817;}}
    
    switch(exit)
     {case 817:
       var
        match$2=
         /* tuple */[0,
          /* [] */0,
          copy(/* None */0,/* None */0,/* None */0,lbl[3])];
       
      }
    
    Btype["cleanup_types"](/* () */0);
    return /* tuple */[0,match$2[1],match$2[2],ty_res];
    };

var unify$prime=[0,function(env,ty1,ty2){throw [0,Unify,/* [] */0];}];

var
 subst=
  function(env,level,priv,abbrev,ty,params,args,body)
   {if(List["length"](params)!==List["length"](args))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    var old_level=current_level[1];
    
    current_level[1]=level;
    try
     {var body0=newvar(/* None */0,/* () */0);
      
      var exit;
      
      if(ty)
       {var ty$1=ty[1];
        
        var match$1=ty$1[1];
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 3:
             var path=match$1[1];
             
             var abbrev$1=proper_abbrevs(path,match$1[2],abbrev);
             
             Btype["memorize_abbrev"](abbrev$1,priv,path,ty$1,body0);
            default:exit=812;}}
        }
      else
       {}
      
      switch(exit)
       {case 812:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/ctype.ml",1347,8]];
         
        }
      
      abbreviations[1]=abbrev;
      var match$2=instance_parameterized_type(/* None */0,params,body);
      
      var body$prime=match$2[2];
      
      abbreviations[1]=[0,/* Mnil */0];
      unify$prime[1](env,body0,body$prime);
      List["iter2"](unify$prime[1](env),match$2[1],args);
      current_level[1]=old_level;
      return body$prime;
      }
    catch(exn)
     {if(exn[1]===Unify)
       {current_level[1]=old_level;throw exn;}
      else
       {throw exn;}
      }
    };

var
 apply=
  function(env,params,body,args)
   {try
     {return subst
              (env,
               Btype["generic_level"],
               /* Public */1,
               [0,/* Mnil */0],
               /* None */0,
               params,
               args,
               body);
      }
    catch(exn){if(exn[1]===Unify){throw Cannot_apply;}else{throw exn;}}
    };

var previous_env=[0,Env["empty"]];

var
 string_of_kind=
  function(param){if(param!==0){return "public";}else{return "private";}};

var
 check_abbrev_env=
  function(env)
   {if(env!==previous_env[1])
     {Btype["cleanup_abbrev"](/* () */0);return previous_env[1]=env,0;}
    else
     {return 0;}
    };

var
 expand_abbrev_gen=
  function(kind,find_type_expansion,env,ty)
   {check_abbrev_env(env);
    var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         var abbrev=match$1[3];
         
         var args=match$1[2];
         
         var path=match$1[1];
         
         var level=ty[2];
         
         var lookup_abbrev=proper_abbrevs(path,args,abbrev);
         
         var match$2=Btype["find_expans"](kind,path,lookup_abbrev[1]);
         
         if(match$2)
          {var ty$1=match$2[1];
           
           if(level!==Btype["generic_level"])
            {try
              {update_level(env,level,ty$1)}
             catch(exn){if(exn[1]===Unify){}else{throw exn;}}
             }
           else
            {}
           
           return ty$1;
           }
         else
          {try
            {var match$3=find_type_expansion(path,env);}
           catch(exn$1)
            {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
              {throw Cannot_expand;}
             else
              {throw exn$1;}
             }
           
           var
            ty$prime=
             subst
              (env,
               level,
               kind,
               abbrev,
               /* Some */[0,ty],
               match$3[1],
               args,
               match$3[2]);
           
           var ty$2=repr(ty$prime);
           
           var match$4=ty$2[1];
           
           var exit$1;
           
           if(typeof match$4==="number")
            {switch(match$4){}}
           else
            {switch(match$4[0])
              {case 8:
                var row=match$4[1];
                
                if(Btype["static_row"](row))
                 {var newrecord=/* unknown */"duprecord regular 6";
                  
                  ty$2[1]=
                  /* Tvariant */[8,
                   (newrecord[6]=
                    /* Some */[0,/* tuple */[0,path,args]],
                    newrecord)]}
                else
                 {exit$1=797;}
                
               default:exit$1=797;}}
           
           switch(exit$1){case 797:}
           
           if(trace_gadt_instances[1])
            {var
              match$5=
               Pervasives["max"]
                (match$3[3],Env["gadt_instance_level"](env,ty));
             
             if(match$5)
              {var lv=match$5[1];
               
               if(level<lv)
                {throw [0,
                        Unify,
                        /* :: */[0,
                         /* tuple */[0,ty,newvar2(/* None */0,level)],
                         /* [] */0]];
                 }
               else
                {}
               
               Env["add_gadt_instances"]
                (env,lv,/* :: */[0,ty,/* :: */[0,ty$prime,/* [] */0]])}
             else
              {}
             }
           else
            {}
           
           return ty$prime;
           }
         
        default:exit=802;}}
    
    switch(exit)
     {case 802:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",1456,6]];
       
      }
    };

var
 expand_abbrev=
  function(ty)
   {return expand_abbrev_gen(/* Public */1,Env["find_type_expansion"],ty);};

var
 expand_head_once=
  function(env,ty)
   {try
     {return expand_abbrev(env,repr(ty));}
    catch(exn)
     {if(exn===Cannot_expand)
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/ctype.ml",1464,56]];
        }
      else
       {throw exn;}
      }
    };

var
 safe_abbrev=
  function(env,ty)
   {var snap=Btype["snapshot"](/* () */0);
    
    try
     {expand_abbrev(env,ty);return /* true */1;}
    catch(exn)
     {var exit;
      
      if(exn===Cannot_expand)
       {exit=788;}
      else
       {if(exn[1]===Unify){exit=788;}else{throw exn;}}
      
      switch(exit){case 788:Btype["backtrack"](snap);return /* false */0;}
      }
    };

var
 try_expand_once=
  function(env,ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:return repr(expand_abbrev(env,ty$1));default:exit=784;}}
    
    switch(exit){case 784:throw Cannot_expand;}
    };

var
 try_expand_safe=
  function(env,ty)
   {var snap=Btype["snapshot"](/* () */0);
    
    try
     {return try_expand_once(env,ty);}
    catch(exn)
     {if(exn[1]===Unify)
       {Btype["backtrack"](snap);throw Cannot_expand;}
      else
       {throw exn;}
      }
    };

var
 try_expand_head=
  function(try_once,env,ty)
   {var ty$prime=try_once(env,ty);
    
    try
     {return try_expand_head(try_once,env,ty$prime);}
    catch(exn){if(exn===Cannot_expand){return ty$prime;}else{throw exn;}}
    };

var
 try_expand_head$1=
  function(try_once,env,ty)
   {var ty$prime=try_expand_head(try_once,env,ty);
    
    var match$1=Env["gadt_instance_level"](env,ty$prime);
    
    if(match$1){Env["add_gadt_instance_chain"](env,match$1[1],ty)}else{}
    
    return ty$prime;
    };

var
 expand_head_unif=
  function(env,ty)
   {try
     {return try_expand_head$1(try_expand_once,env,ty);}
    catch(exn){if(exn===Cannot_expand){return repr(ty);}else{throw exn;}}
    };

var
 expand_head=
  function(env,ty)
   {try
     {return try_expand_head$1(try_expand_safe,env,ty);}
    catch(exn){if(exn===Cannot_expand){return repr(ty);}else{throw exn;}}
    };

forward_try_expand_once[1]=try_expand_safe;
var
 extract_concrete_typedecl=
  function(env,ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         var p=match$1[1];
         
         var decl=Env["find_type"](p,env);
         
         if(decl[3]!==/* Type_abstract */0)
          {return /* tuple */[0,p,p,decl];}
         else
          {try
            {var ty$2=try_expand_once(env,ty$1);}
           catch(exn)
            {if(exn===Cannot_expand)
              {throw CamlPrimitive["caml_global_data"]["Not_found"];}
             else
              {throw exn;}
             }
           
           var match$2=extract_concrete_typedecl(env,ty$2);
           
           return /* tuple */[0,p,match$2[2],match$2[3]];
           }
         
        default:exit=771;}}
    
    switch(exit)
     {case 771:throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 expand_abbrev_opt=
  expand_abbrev_gen(/* Private */0,Env["find_type_expansion_opt"]);

var
 try_expand_once_opt=
  function(env,ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:return repr(expand_abbrev_opt(env,ty$1));default:exit=763;}}
    
    switch(exit){case 763:throw Cannot_expand;}
    };

var
 try_expand_head_opt=
  function(env,ty)
   {var ty$prime=try_expand_once_opt(env,ty);
    
    try
     {return try_expand_head_opt(env,ty$prime);}
    catch(exn){if(exn===Cannot_expand){return ty$prime;}else{throw exn;}}
    };

var
 expand_head_opt=
  function(env,ty)
   {var snap=Btype["snapshot"](/* () */0);
    
    try
     {return try_expand_head_opt(env,ty);}
    catch(exn)
     {var exit;
      
      if(exn===Cannot_expand)
       {exit=757;}
      else
       {if(exn[1]===Unify){exit=757;}else{throw exn;}}
      
      switch(exit){case 757:Btype["backtrack"](snap);return repr(ty);}
      }
    };

var
 enforce_constraints=
  function(env,ty)
   {var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         var level=ty[2];
         
         try
          {var decl=Env["find_type"](match$1[1],env);
           
           return subst
                   (env,
                    level,
                    /* Public */1,
                    [0,/* Mnil */0],
                    /* None */0,
                    decl[1],
                    match$1[2],
                    newvar2(/* None */0,level));
           }
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {return /* () */0;}
           else
            {throw exn;}
           }
         
        default:exit=754;}}
    
    switch(exit)
     {case 754:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",1574,6]];
       
      }
    };

var
 full_expand=
  function(env,ty)
   {var ty$1=repr(expand_head(env,ty));
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 4:
         var match$2=match$1[2][1];
         
         if(match$2)
          {var match$3=match$2[1][2];
           
           if(match$3)
            {if(Btype["is_Tvar"](repr(match$3[1])))
              {return newty2
                       (ty$1[2],/* Tobject */[4,match$1[1],[0,/* None */0]]);
               }
             else
              {exit=749;}
             }
           else
            {exit=749;}
           }
         else
          {exit=749;}
         
        default:exit=749;}}
    
    switch(exit){case 749:return ty$1;}
    };

var
 generic_abbrev=
  function(env,path)
   {try
     {var match$1=Env["find_type_expansion"](path,env);
      
      return repr(match$1[2])[2]===Btype["generic_level"];
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* false */0;}
      else
       {throw exn;}
      }
    };

var
 generic_private_abbrev=
  function(env,path)
   {try
     {var match$1=Env["find_type"](path,env);
      
      var match$2=match$1[3];
      
      var exit;
      
      if(typeof match$2==="number")
       {if(match$2!==0)
         {exit=743;}
        else
         {if(match$1[4]!==0)
           {exit=743;}
          else
           {var match$3=match$1[5];
            
            if(match$3)
             {return repr(match$3[1])[2]===Btype["generic_level"];}
            else
             {exit=743;}
            }
          }
        }
      else
       {exit=743;}
      
      switch(exit){case 743:return /* false */0;}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* false */0;}
      else
       {throw exn;}
      }
    };

var
 is_contractive=
  function(env,ty)
   {var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         var p=match$1[1];
         
         var $js;
         try
          {$js=is_datatype(Env["find_type"](p,env));}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {$js=/* false */0;}
           else
            {throw exn;}
           }
         return in_pervasives(p)||$js;
         
        default:exit=740;}}
    
    switch(exit){case 740:return /* true */1;}
    };

var Occur=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Occur",0]);

var
 occur_rec=
  function(env,visited,ty0,ty)
   {if(ty===ty0){throw Occur;}else{}
    
    var occur_ok=Clflags["recursive_types"][1]&&is_contractive(env,ty);
    
    var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         try
          {if(occur_ok||List["memq"](ty,visited)){throw Occur;}else{}
           
           return Btype["iter_type_expr"]
                   (occur_rec(env,/* :: */[0,ty,visited],ty0),ty);
           }
         catch(exn)
          {if(exn===Occur)
            {try
              {var ty$prime=try_expand_head$1(try_expand_once,env,ty);
               
               if(ty$prime===ty0||List["memq"](ty$prime,visited))
                {throw Occur;}
               else
                {}
               
               var match$2=ty$prime[1];
               
               var exit$1;
               
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 4:exit$1=732;case 8:exit$1=732;default:exit$1=733;}}
               
               switch(exit$1)
                {case 733:
                  if
                   (!(Clflags["recursive_types"][1]&&
                     is_contractive(env,ty$prime)))
                   {return Btype["iter_type_expr"]
                            (occur_rec(env,/* :: */[0,ty$prime,visited],ty0),ty$prime);
                    }
                  else
                   {return 0;}
                  
                 case 732:return /* () */0;
                 }
               }
             catch(exn$1)
              {if(exn$1===Cannot_expand)
                {if(!occur_ok){throw Occur;}else{return 0;}}
               else
                {throw exn$1;}
               }
             }
           else
            {throw exn;}
           }
         
        case 4:exit=736;
        case 8:exit=736;
        default:exit=737;}}
    
    switch(exit)
     {case 737:
       if(!occur_ok)
        {return Btype["iter_type_expr"](occur_rec(env,visited,ty0),ty);}
       else
        {return 0;}
       
      case 736:return /* () */0;
      }
    };

var type_changed=[0,/* false */0];

var merge=function(r,b){if(b){return r[1]=/* true */1,0;}else{return 0;}};

var
 occur=
  function(env,ty0,ty)
   {var old=type_changed[1];
    
    try
     {while
       (type_changed[1]=
        /* false */0,
        occur_rec(env,/* [] */0,ty0,ty),
        type_changed[1])
       {}
      
      return merge(type_changed,old);
      }
    catch(exn)
     {merge(type_changed,old);throw exn===Occur?[0,Unify,/* [] */0]:exn;}
    };

var
 occur_in=
  function(env,ty0,t)
   {try
     {occur(env,ty0,t);return /* false */0;}
    catch(exn){if(exn[1]===Unify){return /* true */1;}else{throw exn;}}
    };

var
 unify_univar=
  function(t1,t2,param)
   {if(param)
     {var match$1=param[1];
      
      var
       find_univ=
        function(t,cl)
         {try
           {var
             match$2=
              List["find"](function(param$1){return t===repr(param$1[1]);},cl);
            
            return /* Some */[0,match$2[2]];
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return /* None */0;}
            else
             {throw exn;}
            }
          };
      
      var match$2=find_univ(t1,match$1[1]);
      
      var match$3=find_univ(t2,match$1[2]);
      
      var exit;
      
      if(match$2)
       {var r1=match$2[1];
        
        var match$4=r1[1];
        
        if(match$4)
         {if(match$3)
           {if(t2===repr(match$4[1])){return /* () */0;}else{exit=719;}}
          else
           {exit=719;}
          }
        else
         {if(match$3)
           {var r2=match$3[1];
            
            var match$5=r2[1];
            
            if(match$5)
             {exit=719;}
            else
             {Btype["set_univar"](r1,t2);return Btype["set_univar"](r2,t1);}
            }
          else
           {exit=719;}
          }
        }
      else
       {if(match$3){exit=719;}else{return unify_univar(t1,t2,param[2]);}}
      
      switch(exit){case 719:throw [0,Unify,/* [] */0];}
      }
    else
     {throw [0,Unify,/* [] */0];}
    };

var
 occur_univar=
  function(env,ty)
   {var visited=[0,Btype["TypeMap"][1]];
    
    var
     occur_rec$1=
      function(bound,ty)
       {var ty$1=repr(ty);
        
        if(Btype["TypeSet"][2](bound))
         {ty$1[2]=Btype["pivot_level"]-ty$1[2];var $js=/* true */1;}
        else
         {try
           {var bound$prime=Btype["TypeMap"][22](ty$1,visited[1]);
            
            if
             (Btype["TypeSet"][16]
               (function(x){return !Btype["TypeSet"][3](x,bound);},
                bound$prime))
             {visited[1]=
              Btype["TypeMap"][4]
               (ty$1,Btype["TypeSet"][8](bound,bound$prime),visited[1]);
              var $js=/* true */1;
              }
            else
             {var $js=/* false */0;}
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {visited[1]=Btype["TypeMap"][4](ty$1,bound,visited[1]);
              var $js=/* true */1;
              }
            else
             {throw exn;}
            }
          }
        if(ty$1[2]>=Btype["lowest_level"]&&$js)
         {var match$1=ty$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 3:
               var tl=match$1[2];
               
               if(tl)
                {try
                  {var td=Env["find_type"](match$1[1],env);
                   
                   return List["iter2"]
                           (function(t,v)
                             {if
                               (Types["Variance"][9](/* May_pos */0,v)||
                                Types["Variance"][9](/* May_neg */1,v))
                               {return occur_rec$1(bound,t);}
                              else
                               {return 0;}
                              },
                            tl,
                            td[6]);
                   }
                 catch(exn$1)
                  {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                    {return List["iter"](occur_rec$1(bound),tl);}
                   else
                    {throw exn$1;}
                   }
                 }
               else
                {return /* () */0;}
               
              case 9:
               if(!Btype["TypeSet"][3](ty$1,bound))
                {throw [0,
                        Unify,
                        /* :: */[0,
                         /* tuple */[0,
                          ty$1,
                          Btype["newgenvar"](/* None */0,/* () */0)],
                         /* [] */0]];
                 }
               else
                {return 0;}
               
              case 10:
               var
                bound$1=
                 List["fold_right"]
                  (Btype["TypeSet"][4],List["map"](repr,match$1[2]),bound);
               
               return occur_rec$1(bound$1,match$1[1]);
               
              default:exit=711;}}
          
          switch(exit)
           {case 711:return Btype["iter_type_expr"](occur_rec$1(bound),ty$1);}
          }
        else
         {return 0;}
        };
    
    try
     {occur_rec$1(Btype["TypeSet"][1],ty);return Btype["unmark_type"](ty);}
    catch(exn){Btype["unmark_type"](ty);throw exn;}
    };

var
 add_univars=
  List["fold_left"]
   (function(s,param){return Btype["TypeSet"][4](repr(param[1]),s);});

var
 get_univar_family=
  function(univar_pairs,univars)
   {if(univars===/* [] */0)
     {return Btype["TypeSet"][1];}
    else
     {var
       insert=
        function(s,param)
         {var cl2=param[2];
          
          if(cl2)
           {if
             (List["exists"]
               (function(param$1)
                 {return Btype["TypeSet"][3](repr(param$1[1]),s);},
                param[1]))
             {return add_univars(s,cl2);}
            else
             {return s;}
            }
          else
           {return s;}
          };
      
      var
       s=
        List["fold_right"](Btype["TypeSet"][4],univars,Btype["TypeSet"][1]);
      
      return List["fold_left"](insert,s,univar_pairs);
      }
    };

var
 univars_escape=
  function(env,univar_pairs,vl,ty)
   {var family=get_univar_family(univar_pairs,vl);
    
    var visited=[0,Btype["TypeSet"][1]];
    
    var
     occur$1=
      function(t)
       {var t$1=repr(t);
        
        if(Btype["TypeSet"][3](t$1,visited[1]))
         {return /* () */0;}
        else
         {visited[1]=Btype["TypeSet"][4](t$1,visited[1]);
          var match$1=t$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 3:
               var tl=match$1[2];
               
               if(tl)
                {try
                  {var td=Env["find_type"](match$1[1],env);
                   
                   return List["iter2"]
                           (function(t,v)
                             {if
                               (Types["Variance"][9](/* May_pos */0,v)||
                                Types["Variance"][9](/* May_neg */1,v))
                               {return occur$1(t);}
                              else
                               {return 0;}
                              },
                            tl,
                            td[6]);
                   }
                 catch(exn)
                  {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                    {return List["iter"](occur$1,tl);}
                   else
                    {throw exn;}
                   }
                 }
               else
                {return /* () */0;}
               
              case 9:
               if(Btype["TypeSet"][3](t$1,family))
                {throw Occur;}
               else
                {return 0;}
               
              case 10:
               if
                (List["exists"]
                  (function(t){return Btype["TypeSet"][3](repr(t),family);},
                   match$1[2]))
                {return /* () */0;}
               else
                {return occur$1(match$1[1]);}
               
              default:exit=696;}}
          
          switch(exit){case 696:return Btype["iter_type_expr"](occur$1,t$1);}
          }
        };
    
    try
     {occur$1(ty);return /* false */0;}
    catch(exn){if(exn===Occur){return /* true */1;}else{throw exn;}}
    };

var
 enter_poly=
  function(env,univar_pairs,t1,tl1,t2,tl2,f)
   {var old_univars=univar_pairs[1];
    
    var
     known_univars=
      List["fold_left"]
       (function(s,param){return add_univars(s,param[1]);},
        Btype["TypeSet"][1],
        old_univars);
    
    var tl1$1=List["map"](repr,tl1);
    
    var tl2$1=List["map"](repr,tl2);
    
    if
     (List["exists"]
       (function(t){return Btype["TypeSet"][3](t,known_univars);},tl1$1)&&
      univars_escape(env,old_univars,tl1$1,newty(/* Tpoly */[10,t2,tl2$1]))||
      List["exists"]
       (function(t){return Btype["TypeSet"][3](t,known_univars);},tl2$1)&&
      univars_escape(env,old_univars,tl2$1,newty(/* Tpoly */[10,t1,tl1$1])))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    var
     cl1=
      List["map"](function(t){return /* tuple */[0,t,[0,/* None */0]];},tl1$1);
    
    var
     cl2=
      List["map"](function(t){return /* tuple */[0,t,[0,/* None */0]];},tl2$1);
    
    univar_pairs[1]=
    /* :: */[0,
     /* tuple */[0,cl1,cl2],
     /* :: */[0,/* tuple */[0,cl2,cl1],old_univars]];
    try
     {var res=f(t1,t2);univar_pairs[1]=old_univars;return res;}
    catch(exn){univar_pairs[1]=old_univars;throw exn;}
    };

var univar_pairs=[0,/* [] */0];

var
 has_cached_expansion=
  function(p,abbrev)
   {if(typeof abbrev==="number")
     {switch(abbrev){case 0:return /* false */0;}}
    else
     {switch(abbrev[0])
       {case 0:
         return Path["same"](p,abbrev[2])||has_cached_expansion(p,abbrev[5]);
        case 1:return has_cached_expansion(p,abbrev[1][1]);
        }}
    };

var
 expand_trace=
  function(env,trace)
   {return List["fold_right"]
            (function(param,rem)
              {var t2=param[2];
               
               var t1=param[1];
               
               return /* :: */[0,
                       /* tuple */[0,repr(t1),full_expand(env,t1)],
                       /* :: */[0,/* tuple */[0,repr(t2),full_expand(env,t2)],rem]];
               },
             trace,
             /* [] */0);
    };

var
 mkvariant=
  function(fields,closed)
   {return Btype["newgenty"]
            (/* Tvariant */[8,
              /* record */[0,
               fields,
               newvar(/* None */0,/* () */0),
               /* () */0,
               closed,
               /* false */0,
               /* None */0]]);
    };

var rigid_variants=[0,/* false */0];

var
 deep_occur=
  function(t0,ty)
   {var
     occur_rec$1=
      function(ty)
       {var ty$1=repr(ty);
        
        if(ty$1[2]>=Btype["lowest_level"])
         {if(ty$1===t0){throw Occur;}else{}
          
          ty$1[2]=Btype["pivot_level"]-ty$1[2];
          return Btype["iter_type_expr"](occur_rec$1,ty$1);
          }
        else
         {return 0;}
        };
    
    try
     {occur_rec$1(ty);Btype["unmark_type"](ty);return /* false */0;}
    catch(exn)
     {if(exn===Occur)
       {Btype["unmark_type"](ty);return /* true */1;}
      else
       {throw exn;}
      }
    };

var newtype_level=[0,/* None */0];

var
 get_newtype_level=
  function(param)
   {var match$1=newtype_level[1];
    
    if(match$1)
     {return match$1[1];}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/ctype.ml",1949,12]];
      }
    };

var
 reify=
  function(env,t)
   {var newtype_level$1=get_newtype_level(/* () */0);
    
    var
     create_fresh_constr=
      function(lev,name)
       {var
         decl=
          new_declaration
           (/* Some */[0,/* tuple */[0,newtype_level$1,newtype_level$1]],
            /* None */0);
        
        var name$1=get_new_abstract_name(name);
        
        var match$1=Env["enter_type"](name$1,decl,env[1]);
        
        var
         t$1=
          newty2
           (lev,
            /* Tconstr */[3,
             /* Pident */[0,match$1[1]],
             /* [] */0,
             [0,/* Mnil */0]]);
        
        env[1]=match$1[2];
        return t$1;
        };
    
    var visited=[0,Btype["TypeSet"][1]];
    
    var
     iterator=
      function(ty)
       {var ty$1=repr(ty);
        
        if(Btype["TypeSet"][3](ty$1,visited[1]))
         {return /* () */0;}
        else
         {visited[1]=Btype["TypeSet"][4](ty$1,visited[1]);
          var match$1=ty$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 0:
               var o=match$1[1];
               
               if(o){var name=o[1];}else{var name="ex";}
               
               var t$1=create_fresh_constr(ty$1[2],name);
               
               return Btype["link_type"](ty$1,t$1);
               
              case 3:
               if(is_object_type(match$1[1]))
                {return Btype["iter_type_expr"]
                         (iterator,full_expand(env[1],ty$1));
                 }
               else
                {exit=665;}
               
              case 8:
               var r=Btype["row_repr"](match$1[1]);
               
               if(!Btype["static_row"](r))
                {if(r[5])
                  {iterator(Btype["row_more"](r))}
                 else
                  {var m=r[2];
                   
                   var match$2=m[1];
                   
                   var exit$1;
                   
                   if(typeof match$2==="number")
                    {switch(match$2){}}
                   else
                    {switch(match$2[0])
                      {case 0:
                        var o$1=match$2[1];
                        
                        if(o$1){var name$1=o$1[1];}else{var name$1="ex";}
                        
                        var t$2=create_fresh_constr(m[2],name$1);
                        
                        var
                         row=
                          /* record */[0,/* [] */0,t$2,r[3],r[4],/* true */1,r[6]];
                        
                        Btype["link_type"](m,newty2(m[2],/* Tvariant */[8,row]));
                       default:exit$1=662;}}
                   
                   switch(exit$1)
                    {case 662:
                      throw [0,
                             CamlPrimitive["caml_global_data"]["Assert_failure"],
                             [0,"typing/ctype.ml",1987,19]];
                      
                     }
                   }
                 }
               else
                {}
               
               return Btype["iter_row"](iterator,r);
               
              default:exit=665;}}
          
          switch(exit)
           {case 665:return Btype["iter_type_expr"](iterator,ty$1);}
          }
        };
    
    return iterator(t);
    };

var
 is_newtype=
  function(env,p)
   {try
     {var decl=Env["find_type"](p,env);
      
      return decl[7]!==
             /* None */0&&
             decl[3]===
             /* Type_abstract */0&&
             decl[4]===
             /* Public */1;
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* false */0;}
      else
       {throw exn;}
      }
    };

var
 non_aliasable=
  function(p,decl){return in_current_module(p)&&decl[7]===/* None */0;};

var
 expands_to_datatype=
  function(env,ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         try
          {return is_datatype(Env["find_type"](match$1[1],env))||
                  expands_to_datatype(env,try_expand_once(env,ty$1));
           }
         catch(exn)
          {var exit$1;
           
           if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {exit$1=647;}
           else
            {if(exn===Cannot_expand){exit$1=647;}else{throw exn;}}
           
           switch(exit$1){case 647:return /* false */0;}
           }
         
        default:exit=649;}}
    
    switch(exit){case 649:return /* false */0;}
    };

var
 mcomp=
  function(type_pairs,env,t1,t2)
   {if(t1===t2)
     {return /* () */0;}
    else
     {var t1$1=repr(t1);
      
      var t2$1=repr(t2);
      
      if(t1$1===t2$1)
       {return /* () */0;}
      else
       {var match$1=t1$1[1];
        
        var match$2=t2$1[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 0:exit=609;
            case 3:
             if(match$1[2])
              {exit=611;}
             else
              {if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=611;
                   case 3:
                    if(match$2[2])
                     {exit=610;}
                    else
                     {if(Path["same"](match$1[1],match$2[1]))
                       {return /* () */0;}
                      else
                       {exit=610;}
                      }
                    
                   default:exit=610;}}
               }
             
            default:exit=611;}}
        
        switch(exit)
         {case 611:
           if(typeof match$2==="number")
            {switch(match$2){}}
           else
            {switch(match$2[0]){case 0:exit=609;default:exit=610;}}
           
          case 610:
           var t1$prime=expand_head_opt(env,t1$1);
           
           var t2$prime=expand_head_opt(env,t2$1);
           
           var t1$prime$1=repr(t1$prime);
           
           var t2$prime$1=repr(t2$prime);
           
           if(t1$prime$1===t2$prime$1)
            {return /* () */0;}
           else
            {try
              {return TypePairs[7]
                       (type_pairs,/* tuple */[0,t1$prime$1,t2$prime$1]);
               }
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {TypePairs[5]
                  (type_pairs,/* tuple */[0,t1$prime$1,t2$prime$1],/* () */0);
                 var match$3=t1$prime$1[1];
                 
                 var match$4=t2$prime$1[1];
                 
                 var exit$1;
                 
                 if(typeof match$3==="number")
                  {switch(match$3)
                    {case 0:
                      if(typeof match$4==="number")
                       {switch(match$4){case 0:return /* () */0;}}
                      else
                       {switch(match$4[0]){case 3:exit$1=601;default:exit$1=600;}}
                      
                     }}
                 else
                  {switch(match$3[0])
                    {case 0:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 0:
                           throw [0,
                                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                                  [0,"typing/ctype.ml",2051,30]];
                           
                          case 3:exit$1=601;
                          default:exit$1=600;}}
                      
                     case 1:
                      var l1=match$3[1];
                      
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 1:
                           var l2=match$4[1];
                           
                           if
                            (CamlPrimitive["caml_string_equal"](l1,l2)||
                             !(Btype["is_optional"](l1)||Btype["is_optional"](l2)))
                            {mcomp(type_pairs,env,match$3[2],match$4[2]);
                             return mcomp(type_pairs,env,match$3[3],match$4[3]);
                             }
                           else
                            {exit$1=600;}
                           
                          case 3:exit$1=601;
                          default:exit$1=600;}}
                      
                     case 2:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 2:
                           return mcomp_list(type_pairs,env,match$3[1],match$4[1]);
                          case 3:exit$1=601;
                          default:exit$1=600;}}
                      
                     case 3:
                      var p1=match$3[1];
                      
                      var exit$2;
                      
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 3:
                           return mcomp_type_decl
                                   (type_pairs,env,p1,match$4[1],match$3[2],match$4[2]);
                           
                          default:exit$2=603;}}
                      
                      switch(exit$2){case 603:var p=p1;exit$1=599;}
                      
                     case 4:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 3:exit$1=601;
                          case 4:
                           return mcomp_fields(type_pairs,env,match$3[1],match$4[1]);
                          default:exit$1=600;}}
                      
                     case 5:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 3:exit$1=601;
                          case 5:
                           return mcomp_fields(type_pairs,env,t1$prime$1,t2$prime$1);
                          default:exit$1=600;}}
                      
                     case 6:exit$1=601;
                     case 7:exit$1=601;
                     case 8:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 3:exit$1=601;
                          case 8:
                           return mcomp_row(type_pairs,env,match$3[1],match$4[1]);
                          default:exit$1=600;}}
                      
                     case 9:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 3:exit$1=601;
                          case 9:
                           return unify_univar(t1$prime$1,t2$prime$1,univar_pairs[1]);
                          default:exit$1=600;}}
                      
                     case 10:
                      var tl1=match$3[2];
                      
                      var t1$2=match$3[1];
                      
                      var exit$3;
                      
                      if(tl1)
                       {exit$3=602;}
                      else
                       {if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 3:exit$1=601;
                            case 10:
                             if(match$4[2])
                              {exit$3=602;}
                             else
                              {return mcomp(type_pairs,env,t1$2,match$4[1]);}
                             
                            default:exit$1=600;}}
                        }
                      
                      switch(exit$3)
                       {case 602:
                         if(typeof match$4==="number")
                          {switch(match$4){}}
                         else
                          {switch(match$4[0])
                            {case 3:exit$1=601;
                             case 10:
                              return enter_poly
                                      (env,
                                       univar_pairs,
                                       t1$2,
                                       tl1,
                                       match$4[1],
                                       match$4[2],
                                       mcomp(type_pairs,env));
                              
                             default:exit$1=600;}}
                         
                        }
                      
                     case 11:
                      if(typeof match$4==="number")
                       {switch(match$4){}}
                      else
                       {switch(match$4[0])
                         {case 3:exit$1=601;
                          case 11:return /* () */0;
                          default:exit$1=600;}}
                      
                     }}
                 
                 switch(exit$1)
                  {case 601:
                    if(typeof match$4==="number")
                     {switch(match$4){}}
                    else
                     {switch(match$4[0])
                       {case 3:var p=match$4[1];exit$1=599;default:exit$1=600;}}
                    
                   case 600:throw [0,Unify,/* [] */0];
                   case 599:
                    try
                     {var decl=Env["find_type"](p,env);
                      
                      if(non_aliasable(p,decl)||is_datatype(decl))
                       {throw [0,Unify,/* [] */0];}
                      else
                       {return 0;}
                      }
                    catch(exn$1)
                     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                       {return /* () */0;}
                      else
                       {throw exn$1;}
                      }
                    
                   }
                 }
               else
                {throw exn;}
               }
             }
           
          case 609:return /* () */0;
          }
        }
      }
    };

var
 mcomp_list=
  function(type_pairs,env,tl1,tl2)
   {if(List["length"](tl1)!==List["length"](tl2))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    return List["iter2"](mcomp(type_pairs,env),tl1,tl2);
    };

var
 mcomp_fields=
  function(type_pairs,env,ty1,ty2)
   {if(!(concrete_object(ty1)&&concrete_object(ty2)))
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/ctype.ml",2096,59]];
      }
    else
     {}
    
    var match$1=flatten_fields(ty2);
    
    var match$2=flatten_fields(ty1);
    
    var match$3=associate_fields(match$2[1],match$1[1]);
    
    mcomp(type_pairs,env,match$2[2],match$1[2]);
    if
     (match$3[2]!==
      /* [] */0&&
      object_row(ty1)[1]===
      /* Tnil */0||
      match$3[3]!==
      /* [] */0&&
      object_row(ty2)[1]===
      /* Tnil */0)
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    return List["iter"]
            (function(param)
              {mcomp_kind(param[2],param[4]);
               return mcomp(type_pairs,env,param[3],param[5]);
               },
             match$3[1]);
    };

var
 mcomp_kind=
  function(k1,k2)
   {var k1$1=Btype["field_kind_repr"](k1);
    
    var k2$1=Btype["field_kind_repr"](k2);
    
    var exit;
    
    if(typeof k1$1==="number")
     {if(k1$1!==0)
       {exit=618;}
      else
       {if(typeof k2$1==="number")
         {if(k2$1!==0){exit=618;}else{exit=617;}}
        else
         {exit=618;}
        }
      }
    else
     {if(typeof k2$1==="number"){exit=618;}else{exit=617;}}
    
    switch(exit)
     {case 618:throw [0,Unify,/* [] */0];case 617:return /* () */0;}
    };

var
 mcomp_row=
  function(type_pairs,env,row1,row2)
   {var row1$1=Btype["row_repr"](row1);
    
    var row2$1=Btype["row_repr"](row2);
    
    var match$1=merge_row_fields(row1$1[1],row2$1[1]);
    
    var
     cannot_erase=
      function(param)
       {var match$2=Btype["row_field_repr"](param[2]);
        
        var exit;
        
        if(typeof match$2==="number")
         {switch(match$2){case 0:exit=630;}}
        else
         {switch(match$2[0]){case 0:return /* true */1;case 1:exit=630;}}
        
        switch(exit){case 630:return /* false */0;}
        };
    
    if
     (row1$1[4]&&
      List["exists"](cannot_erase,match$1[2])||
      row2$1[4]&&
      List["exists"](cannot_erase,match$1[1]))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    return List["iter"]
            (function(param)
              {var match$2=Btype["row_field_repr"](param[2]);
               
               var match$3=Btype["row_field_repr"](param[3]);
               
               var exit;
               
               if(typeof match$2==="number")
                {switch(match$2){case 0:exit=625;}}
               else
                {switch(match$2[0])
                  {case 0:
                    var match$4=match$2[1];
                    
                    if(match$4)
                     {var t1=match$4[1];
                      
                      if(typeof match$3==="number")
                       {switch(match$3){case 0:exit=621;}}
                      else
                       {switch(match$3[0])
                         {case 0:
                           var match$5=match$3[1];
                           
                           if(match$5)
                            {return mcomp(type_pairs,env,t1,match$5[1]);}
                           else
                            {exit=621;}
                           
                          case 1:
                           if(match$3[1]!==0)
                            {exit=621;}
                           else
                            {return List["iter"](mcomp(type_pairs,env,t1),match$3[2]);}
                           
                          }}
                      }
                    else
                     {if(typeof match$3==="number")
                       {switch(match$3){case 0:exit=621;}}
                      else
                       {switch(match$3[0])
                         {case 0:if(match$3[1]){exit=621;}else{exit=622;}
                          case 1:if(match$3[2]){exit=621;}else{exit=622;}
                          }}
                      }
                    
                   case 1:
                    var exit$1;
                    
                    if(match$2[1]!==0)
                     {exit$1=629;}
                    else
                     {if(typeof match$3==="number")
                       {switch(match$3){case 0:exit$1=629;}}
                      else
                       {switch(match$3[0])
                         {case 0:
                           var match$6=match$3[1];
                           
                           if(match$6)
                            {return List["iter"]
                                     (mcomp(type_pairs,env,match$6[1]),match$2[2]);
                             }
                           else
                            {exit$1=629;}
                           
                          case 1:exit$1=629;
                          }}
                      }
                    
                    switch(exit$1)
                     {case 629:if(match$2[2]){exit=625;}else{exit=624;}}
                    
                   }}
               
               switch(exit)
                {case 625:
                  if(typeof match$3==="number")
                   {switch(match$3){case 0:exit=622;}}
                  else
                   {switch(match$3[0])
                     {case 0:if(match$3[1]){exit=624;}else{exit=621;}
                      case 1:exit=622;
                      }}
                  
                 case 624:
                  var exit$2;
                  
                  if(typeof match$2==="number")
                   {exit$2=623;}
                  else
                   {if(match$2[1]!==0){exit$2=623;}else{exit=622;}}
                  
                  switch(exit$2)
                   {case 623:
                     if(typeof match$3==="number")
                      {switch(match$3){case 0:exit=622;}}
                     else
                      {switch(match$3[0])
                        {case 0:if(match$3[1]){exit=621;}else{exit=622;}
                         case 1:exit=622;
                         }}
                     
                    }
                  
                 case 622:return /* () */0;
                 case 621:throw [0,Unify,/* [] */0];
                 }
               },
             match$1[3]);
    };

var
 mcomp_type_decl=
  function(type_pairs,env,p1,p2,tl1,tl2)
   {try
     {var decl=Env["find_type"](p1,env);
      
      var decl$prime=Env["find_type"](p2,env);
      
      if(Path["same"](p1,p2))
       {try
         {var
           inj=
            List["map"]
             (Types["Variance"][9](/* Inj */3),Env["find_type"](p1,env)[6]);
          }
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var inj=List["map"](function(param){return /* false */0;},tl1);}
          else
           {throw exn;}
          }
        
        return List["iter2"]
                (function(i,param)
                  {if(i)
                    {return mcomp(type_pairs,env,param[1],param[2]);}
                   else
                    {return 0;}
                   },
                 inj,
                 List["combine"](tl1,tl2));
        }
      else
       {if(non_aliasable(p1,decl)&&non_aliasable(p2,decl$prime))
         {throw [0,Unify,/* [] */0];}
        else
         {var match$1=decl[3];
          
          var match$2=decl$prime[3];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1)
             {case 0:
               var exit$1;
               
               if(typeof match$2==="number")
                {if(match$2!==0){exit$1=638;}else{return /* () */0;}}
               else
                {exit$1=638;}
               
               switch(exit$1)
                {case 638:
                  if(!non_aliasable(p1,decl))
                   {return /* () */0;}
                  else
                   {exit=637;}
                  
                 }
               
              case 1:
               if(typeof match$2==="number")
                {if(match$2!==0)
                  {return mcomp_list(type_pairs,env,tl1,tl2);}
                 else
                  {exit=637;}
                 }
               else
                {exit=636;}
               
              }}
          else
           {switch(match$1[0])
             {case 0:
               if(typeof match$2==="number")
                {switch(match$2){case 0:exit=637;case 1:exit=636;}}
               else
                {switch(match$2[0])
                  {case 0:
                    if(CamlPrimitive["caml_equal"](match$1[2],match$2[2]))
                     {mcomp_list(type_pairs,env,tl1,tl2);
                      return mcomp_record_description
                              (type_pairs,env,match$1[1],match$2[1]);
                      }
                    else
                     {exit=636;}
                    
                   case 1:exit=636;
                   }}
               
              case 1:
               if(typeof match$2==="number")
                {switch(match$2){case 0:exit=637;case 1:exit=636;}}
               else
                {switch(match$2[0])
                  {case 0:exit=636;
                   case 1:
                    mcomp_list(type_pairs,env,tl1,tl2);
                    return mcomp_variant_description
                            (type_pairs,env,match$1[1],match$2[1]);
                    
                   }}
               
              }}
          
          switch(exit)
           {case 637:
             if(typeof match$2==="number")
              {if(match$2!==0)
                {exit=636;}
               else
                {if(!non_aliasable(p2,decl$prime))
                  {return /* () */0;}
                 else
                  {exit=636;}
                 }
               }
             else
              {exit=636;}
             
            case 636:throw [0,Unify,/* [] */0];
            }
          }
        }
      }
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* () */0;}
      else
       {throw exn$1;}
      }
    };

var
 mcomp_type_option=
  function(type_pairs,env,t,t$prime)
   {var exit;
    
    if(t)
     {if(t$prime)
       {return mcomp(type_pairs,env,t[1],t$prime[1]);}
      else
       {exit=643;}
      }
    else
     {if(t$prime){exit=643;}else{return /* () */0;}}
    
    switch(exit){case 643:throw [0,Unify,/* [] */0];}
    };

var
 mcomp_variant_description=
  function(type_pairs,env,xs,ys)
   {var
     iter=
      function(x,y)
       {var exit;
        
        if(x)
         {if(y)
           {var c2=y[1];
            
            var c1=x[1];
            
            mcomp_type_option(type_pairs,env,c1[3],c2[3]);
            mcomp_list(type_pairs,env,c1[2],c2[2]);
            if
             (CamlPrimitive["caml_string_equal"]
               (Ident["name"](c1[1]),Ident["name"](c2[1])))
             {return iter(x[2],y[2]);}
            else
             {throw [0,Unify,/* [] */0];}
            }
          else
           {exit=644;}
          }
        else
         {if(y){exit=644;}else{return /* () */0;}}
        
        switch(exit){case 644:throw [0,Unify,/* [] */0];}
        };
    
    return iter(xs,ys);
    };

var
 mcomp_record_description=
  function(type_pairs,env)
   {var
     iter=
      function(x,y)
       {var exit;
        
        if(x)
         {if(y)
           {var l2=y[1];
            
            var l1=x[1];
            
            mcomp(type_pairs,env,l1[3],l2[3]);
            if
             (CamlPrimitive["caml_string_equal"]
               (Ident["name"](l1[1]),Ident["name"](l2[1]))&&
              CamlPrimitive["caml_equal"](l1[2],l2[2]))
             {return iter(x[2],y[2]);}
            else
             {throw [0,Unify,/* [] */0];}
            }
          else
           {exit=645;}
          }
        else
         {if(y){exit=645;}else{return /* () */0;}}
        
        switch(exit){case 645:throw [0,Unify,/* [] */0];}
        };
    
    return iter;
    };

var mcomp$1=function(env,t1,t2){return mcomp(TypePairs[1](4),env,t1,t2);};

var
 find_lowest_level=
  function(ty)
   {var lowest=[0,Btype["generic_level"]];
    
    var
     find=
      function(ty)
       {var ty$1=repr(ty);
        
        if(ty$1[2]>=Btype["lowest_level"])
         {if(ty$1[2]<lowest[1]){lowest[1]=ty$1[2]}else{}
          
          ty$1[2]=Btype["pivot_level"]-ty$1[2];
          return Btype["iter_type_expr"](find,ty$1);
          }
        else
         {return 0;}
        };
    
    find(ty);
    Btype["unmark_type"](ty);
    return lowest[1];
    };

var
 find_newtype_level=
  function(env,path)
   {try
     {var match$1=Env["find_type"](path,env)[7];
      
      if(match$1)
       {return match$1[1];}
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/ctype.ml",2227,12]];
        }
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/ctype.ml",2228,20]];
        }
      else
       {throw exn;}
      }
    };

var
 add_gadt_equation=
  function(env,source,destination)
   {var destination$1=duplicate_type(destination);
    
    var source_lev=find_newtype_level(env[1],/* Pident */[0,source]);
    
    var
     decl=
      new_declaration(/* Some */[0,source_lev],/* Some */[0,destination$1]);
    
    var newtype_level$1=get_newtype_level(/* () */0);
    
    env[1]=Env["add_local_constraint"](source,decl,newtype_level$1,env[1]);
    return Btype["cleanup_abbrev"](/* () */0);
    };

var unify_eq_set=TypePairs[1](11);

var
 order_type_pair=
  function(t1,t2)
   {if(t1[3]<=t2[3])
     {return /* tuple */[0,t1,t2];}
    else
     {return /* tuple */[0,t2,t1];}
    };

var
 add_type_equality=
  function(t1,t2)
   {return TypePairs[5](unify_eq_set,order_type_pair(t1,t2),/* () */0);};

var
 eq_package_path=
  function(env,p1,p2)
   {return Path["same"](p1,p2)||
           Path["same"]
            (normalize_package_path(env,p1),normalize_package_path(env,p2));
    };

var
 nondep_type$prime=
  [0,
   function(param,param$1,param$2)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/ctype.ml",2250,37]];
     }];

var
 package_subtype=
  [0,
   function(param,param$1,param$2,param$3,param$4,param$5,param$6)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/ctype.ml",2251,48]];
     }];

var
 concat_longident=
  function(lid1,param)
   {switch(param[0])
     {case 0:return /* Ldot */[1,lid1,param[1]];
      case 1:return /* Ldot */[1,concat_longident(lid1,param[1]),param[2]];
      case 2:return /* Lapply */[2,concat_longident(lid1,param[1]),param[2]];
      }
    };

var
 nondep_instance=
  function(env,level,id,ty)
   {var ty$1=nondep_type$prime[1](env,id,ty);
    
    if(level===Btype["generic_level"])
     {return duplicate_type(ty$1);}
    else
     {var old=current_level[1];
      
      current_level[1]=level;
      var ty$2=instance(/* None */0,env,ty$1);
      
      current_level[1]=old;
      return ty$2;
      }
    };

var
 complete_type_list=
  function($staropt$star,env,nl1,lv2,mty2,nl2,tl2)
   {if($staropt$star)
     {var allow_absent=$staropt$star[1];}
    else
     {var allow_absent=/* false */0;}
    
    var id2=Ident["create"]("Pkg");
    
    var env$prime=Env["add_module"](/* None */0,id2,mty2,env);
    
    var
     complete=
      function(nl1,ntl2)
       {if(nl1)
         {var nl=nl1[2];
          
          var n=nl1[1];
          
          var exit;
          
          if(ntl2)
           {var nt2=ntl2[1];
            
            var n2=nt2[1];
            
            if(CamlPrimitive["caml_greaterequal"](n,n2))
             {return /* :: */[0,
                      nt2,
                      complete(CamlPrimitive["caml_equal"](n,n2)?nl:nl1,ntl2[2])];
              }
            else
             {exit=571;}
            }
          else
           {exit=571;}
          
          switch(exit)
           {case 571:
             try
              {var
                match$1=
                 Env["lookup_type"]
                  (concat_longident([/* Lident */0,"Pkg"],n),env$prime);
               
               var decl=match$1[2];
               
               var exit$1;
               
               if(decl[2]!==0)
                {exit$1=569;}
               else
                {var match$2=decl[3];
                 
                 if(typeof match$2==="number")
                  {if(match$2!==0)
                    {exit$1=569;}
                   else
                    {if(decl[4]!==0)
                      {var match$3=decl[5];
                       
                       if(match$3)
                        {return /* :: */[0,
                                 /* tuple */[0,
                                  n,
                                  nondep_instance(env$prime,lv2,id2,match$3[1])],
                                 complete(nl,ntl2)];
                         }
                       else
                        {if(allow_absent)
                          {return complete(nl,ntl2);}
                         else
                          {exit$1=569;}
                         }
                       }
                     else
                      {exit$1=569;}
                     }
                   }
                 else
                  {exit$1=569;}
                 }
               
               switch(exit$1){case 569:throw Pervasives["Exit"];}
               }
             catch(exn)
              {var exit$2;
               
               if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {if(allow_absent){return complete(nl,ntl2);}else{exit$2=568;}}
               else
                {exit$2=568;}
               
               switch(exit$2)
                {case 568:
                  if(exn===Pervasives["Exit"])
                   {throw CamlPrimitive["caml_global_data"]["Not_found"];}
                  else
                   {throw exn;}
                  
                 }
               }
             
            }
          }
        else
         {return ntl2;}
        };
    
    return complete(nl1,List["combine"](nl2,tl2));
    };

var
 unify_package=
  function(env,unify_list,lv1,p1,n1,tl1,lv2,p2,n2,tl2)
   {var
     ntl2=
      complete_type_list(/* None */0,env,n1,lv2,/* Mty_ident */[0,p2],n2,tl2);
    
    var
     ntl1=
      complete_type_list(/* None */0,env,n2,lv2,/* Mty_ident */[0,p1],n1,tl1);
    
    unify_list
     (List["map"](function(prim){return prim[2];},ntl1),
      List["map"](function(prim){return prim[2];},ntl2));
    if
     (eq_package_path(env,p1,p2)||
      package_subtype[1](env,p1,n1,tl1,p2,n2,tl2)&&
      package_subtype[1](env,p2,n2,tl2,p1,n1,tl1))
     {return /* () */0;}
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var
 unify_eq=
  function(env,t1,t2)
   {var match$1=umode[1];
    
    if(match$1!==0)
     {try
       {TypePairs[7](unify_eq_set,order_type_pair(t1,t2));
        var $js=/* true */1;
        }
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {var $js=/* false */0;}
        else
         {throw exn;}
        }
      }
    else
     {var $js=/* false */0;}
    return t1===t2||$js;
    };

var
 unify=
  function(env,t1,t2)
   {if(t1===t2)
     {return /* () */0;}
    else
     {var t1$1=repr(t1);
      
      var t2$1=repr(t2);
      
      if(unify_eq(env[1],t1$1,t2$1))
       {return /* () */0;}
      else
       {var reset_tracing=check_trace_gadt_instances(env[1]);
        
        try
         {type_changed[1]=/* true */1;
          var match$1=t1$1[1];
          
          var match$2=t2$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 0:
               var exit$1;
               
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 3:
                    if(deep_occur(t1$1,t2$1))
                     {unify2(env,t1$1,t2$1)}
                    else
                     {exit$1=449;}
                    
                   default:exit$1=449;}}
               
               switch(exit$1)
                {case 449:
                  occur(env[1],t1$1,t2$1),
                  occur_univar(env[1],t2$1),
                  Btype["link_type"](t1$1,t2$1),
                  update_level(env[1],t1$1[2],t2$1)
                 }
               
              case 3:
               var p1=match$1[1];
               
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:
                    if(deep_occur(t2$1,t1$1))
                     {unify2(env,t1$1,t2$1)}
                    else
                     {exit=448;}
                    
                   case 3:
                    if(match$1[2])
                     {exit=447;}
                    else
                     {if(match$2[2])
                       {exit=447;}
                      else
                       {var p2=match$2[1];
                        
                        if
                         (Path["same"](p1,p2)&&
                          !(has_cached_expansion(p1,match$1[3][1])||
                           has_cached_expansion(p2,match$2[3][1])))
                         {update_level(env[1],t1$1[2],t2$1),
                          Btype["link_type"](t1$1,t2$1)}
                        else
                         {if
                           (Env["has_local_constraints"](env[1])&&
                            is_newtype(env[1],p1)&&
                            is_newtype(env[1],p2))
                           {try
                             {if
                               (CamlPrimitive["caml_lessthan"]
                                 (find_newtype_level(env[1],p1),
                                  find_newtype_level(env[1],p2)))
                               {unify(env,t1$1,try_expand_once(env[1],t2$1))}
                              else
                               {unify(env,try_expand_once(env[1],t1$1),t2$1)}
                              }
                            catch(exn)
                             {if(exn===Cannot_expand)
                               {unify2(env,t1$1,t2$1)}
                              else
                               {throw exn;}
                              }
                            }
                          else
                           {exit=447;}
                          }
                        }
                      }
                    
                   default:exit=447;}}
               
              case 9:
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=448;
                   case 9:
                    unify_univar(t1$1,t2$1,univar_pairs[1]),
                    update_level(env[1],t1$1[2],t2$1),
                    Btype["link_type"](t1$1,t2$1);
                   default:exit=447;}}
               
              default:exit=448;}}
          
          switch(exit)
           {case 448:
             if(typeof match$2==="number")
              {switch(match$2){}}
             else
              {switch(match$2[0])
                {case 0:
                  occur(env[1],t2$1,t1$1),
                  occur_univar(env[1],t1$1),
                  Btype["link_type"](t2$1,t1$1),
                  update_level(env[1],t2$1[2],t1$1);
                 default:exit=447;}}
             
            case 447:unify2(env,t1$1,t2$1)
            }
          
          return reset_trace_gadt_instances(reset_tracing);
          }
        catch(exn$1)
         {if(exn$1[1]===Unify)
           {reset_trace_gadt_instances(reset_tracing);
            throw [0,Unify,/* :: */[0,/* tuple */[0,t1$1,t2$1],exn$1[2]]];
            }
          else
           {throw exn$1;}
          }
        }
      }
    };

var
 unify2=
  function(env,t1,t2)
   {var
     expand_both=
      function(t1$prime$prime,t2$prime$prime)
       {var t1$prime=expand_head_unif(env[1],t1);
        
        var t2$prime=expand_head_unif(env[1],t2);
        
        if
         (unify_eq(env[1],t1$prime,t1$prime$prime)&&
          unify_eq(env[1],t2$prime,t2$prime$prime))
         {return /* tuple */[0,t1$prime,t2$prime];}
        else
         {return expand_both(t1$prime,t2$prime);}
        };
    
    var match$1=expand_both(t1,t2);
    
    var t2$prime=match$1[2];
    
    var t1$prime=match$1[1];
    
    var lv=Pervasives["min"](t1$prime[2],t2$prime[2]);
    
    update_level(env[1],lv,t2);
    update_level(env[1],lv,t1);
    if(unify_eq(env[1],t1$prime,t2$prime))
     {return /* () */0;}
    else
     {var t1$1=repr(t1);
      
      var t2$1=repr(t2);
      
      if(trace_gadt_instances[1])
       {var
         ilevel=
          function(t)
           {var match$2=Env["gadt_instance_level"](env[1],t);
            
            if(match$2){return match$2[1];}else{return 0;}
            };
        
        var lv1=ilevel(t1$1);
        
        var lv2=ilevel(t2$1);
        
        if(lv1>lv2)
         {Env["add_gadt_instance_chain"](env[1],lv1,t2$1)}
        else
         {if(lv2>lv1){Env["add_gadt_instance_chain"](env[1],lv2,t1$1)}else{}}
        }
      else
       {}
      
      if
       (Clflags["principal"][1]&&
        (find_lowest_level(t1$prime)<lv||find_lowest_level(t2$prime)<lv))
       {var match$2=t1$1[1];
        
        var exit;
        
        var $js;
        if(typeof match$2==="number")
         {switch(match$2){}}
        else
         {switch(match$2[0])
           {case 3:if(match$2[2]){exit=455;}else{$js=t1$prime;}
            default:exit=455;}}
        
        var $js$1;
        switch(exit){case 455:$js$1=t1$1;}
        var match$3=t2$1[1];
        
        var exit$1;
        
        var $js$2;
        if(typeof match$3==="number")
         {switch(match$3){}}
        else
         {switch(match$3[0])
           {case 3:if(match$3[2]){exit$1=456;}else{$js$2=t2$prime;}
            default:exit$1=456;}}
        
        var $js$3;
        switch(exit$1){case 456:$js$3=t2$1;}
        var match$4=/* tuple */[0,$js$1,$js$3];
        }
      else
       {var match$4=/* tuple */[0,t1$1,t2$1];}
      
      var t2$2=match$4[2];
      
      var t1$2=match$4[1];
      
      if(unify_eq(env[1],t1$2,t1$prime)||!unify_eq(env[1],t2$2,t2$prime))
       {return unify3(env,t1$2,t1$prime,t2$2,t2$prime);}
      else
       {try
         {return unify3(env,t2$2,t2$prime,t1$2,t1$prime);}
        catch(exn)
         {if(exn[1]===Unify)
           {throw [0,
                   Unify,
                   List["map"]
                    (function(param){return /* tuple */[0,param[2],param[1]];},
                     exn[2])];
            }
          else
           {throw exn;}
          }
        }
      }
    };

var
 unify3=
  function(env,t1,t1$prime,t2,t2$prime)
   {var d1=t1$prime[1];
    
    var d2=t2$prime[1];
    
    var create_recursion=t2!==t2$prime&&deep_occur(t1$prime,t2);
    
    var exit;
    
    if(typeof d1==="number")
     {switch(d1){}}
    else
     {switch(d1[0])
       {case 0:
         occur(env[1],t1$prime,t2);
         occur_univar(env[1],t2);
         return Btype["link_type"](t1$prime,t2);
         
        case 5:
         if(typeof d2==="number")
          {switch(d2){}}
         else
          {switch(d2[0])
            {case 0:exit=496;
             case 5:return unify_fields(env,t1$prime,t2$prime);
             default:exit=495;}}
         
        case 9:
         if(typeof d2==="number")
          {switch(d2){}}
         else
          {switch(d2[0])
            {case 0:exit=496;
             case 9:
              unify_univar(t1$prime,t2$prime,univar_pairs[1]);
              return Btype["link_type"](t1$prime,t2$prime);
              
             default:exit=495;}}
         
        default:exit=496;}}
    
    switch(exit)
     {case 496:
       if(typeof d2==="number")
        {switch(d2){}}
       else
        {switch(d2[0])
          {case 0:
            occur(env[1],t2$prime,t1);
            occur_univar(env[1],t1);
            return Btype["link_type"](t2$prime,t1);
            
           default:exit=495;}}
       
      case 495:
       var match$1=umode[1];
       
       if(match$1!==0)
        {add_type_equality(t1$prime,t2$prime)}
       else
        {occur(env[1],t1$prime,t2$prime),Btype["link_type"](t1$prime,t2)}
       
       try
        {var exit$1;
         
         if(typeof d1==="number")
          {switch(d1)
            {case 0:
              if(typeof d2==="number")
               {switch(d2){case 0:}}
              else
               {switch(d2[0])
                 {case 3:exit$1=490;
                  case 5:var f=d2[1];var kind=d2[2];var rem=d2[4];exit$1=488;
                  default:exit$1=486;}}
              
             }}
         else
          {switch(d1[0])
            {case 1:
              var l1=d1[1];
              
              if(typeof d2==="number")
               {switch(d2){}}
              else
               {switch(d2[0])
                 {case 1:
                   var l2=d2[1];
                   
                   if
                    (CamlPrimitive["caml_string_equal"](l1,l2)||
                     Clflags["classic"][1]&&
                     !(Btype["is_optional"](l1)||Btype["is_optional"](l2)))
                    {unify(env,d1[2],d2[2]);
                     unify(env,d1[3],d2[3]);
                     var match$2=Btype["commu_repr"](d1[4]);
                     
                     var match$3=Btype["commu_repr"](d2[4]);
                     
                     if(typeof match$2==="number")
                      {if(typeof match$3==="number")
                        {}
                       else
                        {Btype["set_commu"](match$3[1],match$2)}
                       }
                     else
                      {Btype["set_commu"](match$2[1],match$3)}
                     }
                   else
                    {exit$1=486;}
                   
                  case 3:exit$1=490;
                  default:exit$1=486;}}
              
             case 2:
              if(typeof d2==="number")
               {switch(d2){}}
              else
               {switch(d2[0])
                 {case 2:unify_list(env,d1[1],d2[1]);
                  case 3:exit$1=490;
                  default:exit$1=486;}}
              
             case 3:
              var p1=d1[1];
              
              var exit$2;
              
              if(typeof d2==="number")
               {switch(d2){}}
              else
               {switch(d2[0])
                 {case 3:
                   var tl2=d2[2];
                   
                   var tl1=d1[2];
                   
                   if(Path["same"](p1,d2[1]))
                    {if(umode[1]===/* Expression */0||!generate_equations[1])
                      {unify_list(env,tl1,tl2)}
                     else
                      {if(assume_injective[1])
                        {set_mode_pattern
                          (/* true */1,
                           /* false */0,
                           function(param){return unify_list(env,tl1,tl2);})}
                       else
                        {if
                          (in_current_module(p1)||
                           List["exists"]
                            (expands_to_datatype(env[1]),
                             /* :: */[0,t1$prime,/* :: */[0,t1,/* :: */[0,t2,/* [] */0]]]))
                          {unify_list(env,tl1,tl2)}
                         else
                          {try
                            {var
                              inj=
                               List["map"]
                                (Types["Variance"][9](/* Inj */3),
                                 Env["find_type"](p1,env[1])[6]);
                             }
                           catch(exn)
                            {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                              {var
                                inj=
                                 List["map"](function(param){return /* false */0;},tl1);
                               }
                             else
                              {throw exn;}
                             }
                           
                           List["iter2"]
                            (function(i,param)
                              {var t2$1=param[2];
                               
                               var t1$1=param[1];
                               
                               if(i)
                                {return unify(env,t1$1,t2$1);}
                               else
                                {return set_mode_pattern
                                         (/* false */0,
                                          /* false */0,
                                          function(param$1)
                                           {var snap=Btype["snapshot"](/* () */0);
                                            
                                            try
                                             {return unify(env,t1$1,t2$1);}
                                            catch(exn$1)
                                             {if(exn$1[1]===Unify)
                                               {Btype["backtrack"](snap);
                                                reify(env,t1$1);
                                                return reify(env,t2$1);
                                                }
                                              else
                                               {throw exn$1;}
                                              }
                                            });
                                 }
                               },
                             inj,
                             List["combine"](tl1,tl2))}
                         }
                       }
                     }
                   else
                    {exit$2=491;}
                   
                  default:exit$2=491;}}
              
              switch(exit$2)
               {case 491:
                 switch(p1[0])
                  {case 0:
                    if(d1[2])
                     {exit$1=490;}
                    else
                     {var p=p1[1];
                      
                      var exit$3;
                      
                      if(typeof d2==="number")
                       {switch(d2){}}
                      else
                       {switch(d2[0])
                         {case 3:
                           var path$prime=d2[1];
                           
                           switch(path$prime[0])
                            {case 0:
                              if(d2[2])
                               {exit$3=492;}
                              else
                               {if
                                 (is_newtype(env[1],p1)&&
                                  is_newtype(env[1],path$prime)&&
                                  generate_equations[1])
                                 {if
                                   (CamlPrimitive["caml_greaterthan"]
                                     (find_newtype_level(env[1],p1),
                                      find_newtype_level(env[1],path$prime)))
                                   {var match$4=/* tuple */[0,p,t2$prime];}
                                  else
                                   {var match$4=/* tuple */[0,path$prime[1],t1$prime];}
                                  
                                  add_gadt_equation(env,match$4[1],match$4[2])}
                                else
                                 {exit$3=492;}
                                }
                              
                             case 1:exit$3=492;
                             case 2:exit$3=492;
                             }
                           
                          default:exit$3=492;}}
                      
                      switch(exit$3)
                       {case 492:
                         if(is_newtype(env[1],p1)&&generate_equations[1])
                          {reify(env,t2$prime),add_gadt_equation(env,p,t2$prime)}
                         else
                          {exit$1=490;}
                         
                        }
                      }
                    
                   case 1:exit$1=490;
                   case 2:exit$1=490;
                   }
                 
                }
              
             case 4:
              if(typeof d2==="number")
               {switch(d2){}}
              else
               {switch(d2[0])
                 {case 3:exit$1=490;
                  case 4:
                   unify_fields(env,d1[1],d2[1]);
                   var match$5=repr(t2$prime)[1];
                   
                   var exit$4;
                   
                   if(typeof match$5==="number")
                    {switch(match$5){}}
                   else
                    {switch(match$5[0])
                      {case 4:
                        var nm2=match$5[2];
                        
                        var match$6=nm2[1];
                        
                        var exit$5;
                        
                        if(match$6)
                         {var match$7=match$6[1][2];
                          
                          if(match$7)
                           {var match$8=repr(match$7[1])[1];
                            
                            var exit$6;
                            
                            var $js;
                            if(typeof match$8==="number")
                             {switch(match$8){case 0:exit$6=477;}}
                            else
                             {switch(match$8[0])
                               {case 0:exit$6=477;
                                case 9:exit$6=477;
                                default:$js=/* false */0;}}
                            
                            var $js$1;
                            switch(exit$6){case 477:$js$1=/* true */1;}
                            if($js$1){}else{exit$5=481;}
                            }
                          else
                           {exit$5=481;}
                          }
                        else
                         {exit$5=481;}
                        
                        switch(exit$5){case 481:Btype["set_name"](nm2,d1[2][1])}
                        
                       default:exit$4=480;}}
                   
                   switch(exit$4){case 480:}
                   
                  default:exit$1=486;}}
              
             case 5:
              if(typeof d2==="number")
               {switch(d2)
                 {case 0:var f=d1[1];var kind=d1[2];var rem=d1[4];exit$1=488;}}
              else
               {switch(d2[0]){case 3:exit$1=490;default:exit$1=486;}}
              
             case 8:
              var row1=d1[1];
              
              if(typeof d2==="number")
               {switch(d2){}}
              else
               {switch(d2[0])
                 {case 3:exit$1=490;
                  case 8:
                   var row2=d2[1];
                   
                   if(umode[1]===/* Expression */0)
                    {unify_row(env,row1,row2)}
                   else
                    {var snap=Btype["snapshot"](/* () */0);
                     
                     try
                      {unify_row(env,row1,row2)}
                     catch(exn$1)
                      {if(exn$1[1]===Unify)
                        {Btype["backtrack"](snap);
                         reify(env,t1$prime);
                         reify(env,t2$prime);
                         if(generate_equations[1])
                          {mcomp$1(env[1],t1$prime,t2$prime)}
                         else
                          {}
                         }
                       else
                        {throw exn$1;}
                       }
                     }
                   
                  default:exit$1=486;}}
              
             case 10:
              var tl1$1=d1[2];
              
              var t1$1=d1[1];
              
              var exit$7;
              
              if(tl1$1)
               {exit$7=493;}
              else
               {if(typeof d2==="number")
                 {switch(d2){}}
                else
                 {switch(d2[0])
                   {case 3:exit$1=490;
                    case 10:if(d2[2]){exit$7=493;}else{unify(env,t1$1,d2[1])}
                    default:exit$1=486;}}
                }
              
              switch(exit$7)
               {case 493:
                 if(typeof d2==="number")
                  {switch(d2){}}
                 else
                  {switch(d2[0])
                    {case 3:exit$1=490;
                     case 10:
                      enter_poly
                       (env[1],univar_pairs,t1$1,tl1$1,d2[1],d2[2],unify(env));
                     default:exit$1=486;}}
                 
                }
              
             case 11:
              var tl1$2=d1[3];
              
              if(typeof d2==="number")
               {switch(d2){}}
              else
               {switch(d2[0])
                 {case 3:exit$1=490;
                  case 11:
                   var tl2$1=d2[3];
                   
                   try
                    {unify_package
                      (env[1],
                       unify_list(env),
                       t1[2],
                       d1[1],
                       d1[2],
                       tl1$2,
                       t2[2],
                       d2[1],
                       d2[2],
                       tl2$1)}
                   catch(exn$2)
                    {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
                      {if(umode[1]===/* Expression */0)
                        {throw [0,Unify,/* [] */0];}
                       else
                        {}
                       
                       List["iter"](reify(env),Pervasives["@"](tl1$2,tl2$1))}
                     else
                      {throw exn$2;}
                     }
                   
                  default:exit$1=486;}}
              
             default:exit$1=490;}}
         
         switch(exit$1)
          {case 490:
            if(typeof d2==="number")
             {switch(d2){}}
            else
             {switch(d2[0])
               {case 3:
                 var path=d2[1];
                 
                 var exit$8;
                 
                 switch(path[0])
                  {case 0:
                    if(d2[2])
                     {exit$8=494;}
                    else
                     {if(is_newtype(env[1],path)&&generate_equations[1])
                       {reify(env,t1$prime),add_gadt_equation(env,path[1],t1$prime)}
                      else
                       {exit$8=494;}
                      }
                    
                   case 1:exit$8=494;
                   case 2:exit$8=494;
                   }
                 
                 switch(exit$8){case 494:exit$1=487;}
                 
                default:exit$1=489;}}
            
           case 489:
            if(typeof d1==="number")
             {switch(d1){}}
            else
             {switch(d1[0]){case 3:exit$1=487;default:exit$1=486;}}
            
           case 487:
            if(umode[1]===/* Pattern */1)
             {reify(env,t1$prime);
              reify(env,t2$prime);
              if(generate_equations[1])
               {mcomp$1(env[1],t1$prime,t2$prime)}
              else
               {}
              }
            else
             {exit$1=486;}
            
           case 488:
            var match$9=Btype["field_kind_repr"](kind);
            
            var exit$9;
            
            if(typeof match$9==="number")
             {exit$9=484;}
            else
             {if
               (CamlPrimitive["caml_string_notequal"](f,Btype["dummy_method"]))
               {Btype["set_kind"](match$9[1],/* Fabsent */1);
                if(d2===/* Tnil */0)
                 {unify(env,rem,t2$prime)}
                else
                 {unify(env,newty2(rem[2],/* Tnil */0),rem)}
                }
              else
               {exit$9=484;}
              }
            
            switch(exit$9){case 484:throw [0,Unify,/* [] */0];}
            
           case 486:throw [0,Unify,/* [] */0];
           }
         
         if(create_recursion)
          {var match$10=t2[1];
           
           var exit$10;
           
           if(typeof match$10==="number")
            {switch(match$10){}}
           else
            {switch(match$10[0])
              {case 3:
                Btype["forget_abbrev"](match$10[3],match$10[1]);
                var t2$prime$prime=expand_head_unif(env[1],t2);
                
                if(!closed_parameterized_type(match$10[2],t2$prime$prime))
                 {return Btype["link_type"](repr(t2),repr(t2$prime));}
                else
                 {return 0;}
                
               default:exit$10=469;}}
           
           switch(exit$10){case 469:return /* () */0;}
           }
         else
          {return 0;}
         }
       catch(exn$3)
        {if(exn$3[1]===Unify)
          {t1$prime[1]=d1;throw [0,Unify,exn$3[2]];}
         else
          {throw exn$3;}
         }
       
      }
    };

var
 unify_list=
  function(env,tl1,tl2)
   {if(List["length"](tl1)!==List["length"](tl2))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    return List["iter2"](unify(env),tl1,tl2);
    };

var
 make_rowvar=
  function(level,use1,rest1,use2,rest2)
   {var
     set_name=
      function(ty,name)
       {var match$1=ty[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 0:
             if(match$1[1])
              {exit=504;}
             else
              {Btype["log_type"](ty);return ty[1]=/* Tvar */[0,name],0;}
             
            default:exit=504;}}
        
        switch(exit){case 504:return /* () */0;}
        };
    
    var match$1=rest1[1];
    
    var match$2=rest2[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:
         var name1=match$1[1];
         
         if(name1)
          {var exit$1;
           
           if(typeof match$2==="number")
            {switch(match$2){}}
           else
            {switch(match$2[0])
              {case 0:
                var name2=match$2[1];
                
                if(name2)
                 {if(rest1[2]<=rest2[2]){var name=name1;}else{var name=name2;}
                  }
                else
                 {exit$1=502;}
                
               default:exit$1=502;}}
           
           switch(exit$1)
            {case 502:if(use2){set_name(rest2,name1)}else{}var name=name1;}
           }
         else
          {exit=501;}
         
        default:exit=501;}}
    
    switch(exit)
     {case 501:
       if(typeof match$2==="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 0:
            var name$1=match$2[1];
            
            if(name$1)
             {if(use1){set_name(rest2,name$1)}else{}var name=name$1;}
            else
             {exit=500;}
            
           default:exit=500;}}
       
      case 500:var name=/* None */0;
      }
    
    if(use1)
     {return rest1;}
    else
     {if(use2){return rest2;}else{return newvar2(name,level);}}
    };

var
 unify_fields=
  function(env,ty1,ty2)
   {var match$1=flatten_fields(ty1);
    
    var rest1=match$1[2];
    
    var match$2=flatten_fields(ty2);
    
    var rest2=match$2[2];
    
    var match$3=associate_fields(match$1[1],match$2[1]);
    
    var miss2=match$3[3];
    
    var miss1=match$3[2];
    
    var l1=repr(ty1)[2];
    
    var l2=repr(ty2)[2];
    
    var
     va=
      make_rowvar
       (Pervasives["min"](l1,l2),
        miss2===/* [] */0,
        rest1,
        miss1===/* [] */0,
        rest2);
    
    var d1=rest1[1];
    
    var d2=rest2[1];
    
    try
     {unify(env,build_fields(l1,miss1,va),rest2);
      unify(env,rest1,build_fields(l2,miss2,va));
      return List["iter"]
              (function(param)
                {var t2=param[5];
                 
                 var k2=param[4];
                 
                 var t1=param[3];
                 
                 var k1=param[2];
                 
                 var n=param[1];
                 
                 unify_kind(k1,k2);
                 try
                  {if(trace_gadt_instances[1])
                    {update_level(env[1],va[2],t1)}
                   else
                    {}
                   
                   return unify(env,t1,t2);
                   }
                 catch(exn)
                  {if(exn[1]===Unify)
                    {throw [0,
                            Unify,
                            /* :: */[0,
                             /* tuple */[0,
                              newty(/* Tfield */[5,n,k1,t1,newty(/* Tnil */0)]),
                              newty(/* Tfield */[5,n,k2,t2,newty(/* Tnil */0)])],
                             exn[2]]];
                     }
                   else
                    {throw exn;}
                   }
                 },
               match$3[1]);
      }
    catch(exn)
     {Btype["log_type"](rest1);
      rest1[1]=d1;
      Btype["log_type"](rest2);
      rest2[1]=d2;
      throw exn;
      }
    };

var
 unify_kind=
  function(k1,k2)
   {var k1$1=Btype["field_kind_repr"](k1);
    
    var k2$1=Btype["field_kind_repr"](k2);
    
    if(k1$1===k2$1)
     {return /* () */0;}
    else
     {var exit;
      
      if(typeof k1$1==="number")
       {if(k1$1!==0)
         {exit=516;}
        else
         {if(typeof k2$1==="number")
           {if(k2$1!==0){exit=516;}else{return /* () */0;}}
          else
           {return Btype["set_kind"](k2$1[1],k1$1);}
          }
        }
      else
       {var exit$1;
        
        if(typeof k2$1==="number")
         {if(k2$1!==0){exit=516;}else{exit$1=517;}}
        else
         {exit$1=517;}
        
        switch(exit$1){case 517:return Btype["set_kind"](k1$1[1],k2$1);}
        }
      
      switch(exit)
       {case 516:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/ctype.ml",2624,37]];
         
        }
      }
    };

var
 unify_pairs=
  function(mode,env,tpl)
   {return List["iter"]
            (function(param){return unify(env,param[1],param[2]);},tpl);
    };

var
 unify_row=
  function(env,row1,row2)
   {var row1$1=Btype["row_repr"](row1);
    
    var row2$1=Btype["row_repr"](row2);
    
    var rm1=Btype["row_more"](row1$1);
    
    var rm2=Btype["row_more"](row2$1);
    
    if(unify_eq(env[1],rm1,rm2))
     {return /* () */0;}
    else
     {var match$1=merge_row_fields(row1$1[1],row2$1[1]);
      
      var pairs=match$1[3];
      
      var r2=match$1[2];
      
      var r1=match$1[1];
      
      if(r1!==/* [] */0&&r2!==/* [] */0)
       {var ht=Hashtbl["create"](/* None */0,List["length"](r1));
        
        List["iter"]
         (function(param)
           {var l=param[1];
            
            return Hashtbl["add"](ht,Btype["hash_variant"](l),l);
            },
          r1),
        List["iter"]
         (function(param)
           {var l=param[1];
            
            try
             {throw [0,Tags,l,Hashtbl["find"](ht,Btype["hash_variant"](l))];}
            catch(exn)
             {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
               {return /* () */0;}
              else
               {throw exn;}
              }
            },
          r2)}
      else
       {}
      
      var fixed1=Btype["row_fixed"](row1$1);
      
      var fixed2=Btype["row_fixed"](row2$1);
      
      if(fixed1)
       {var more=rm1;}
      else
       {if(fixed2)
         {var more=rm2;}
        else
         {var
           more=
            newty2(Pervasives["min"](rm1[2],rm2[2]),[/* Tvar */0,/* None */0]);
          }
        }
      
      var fixed=fixed1||fixed2;
      
      var closed=row1$1[4]||row2$1[4];
      
      var
       keep=
        function($$switch)
         {return List["for_all"]
                  (function(param)
                    {var match$2=$$switch(param[2],param[3]);
                     
                     return Btype["row_field_repr"](match$2[1])===
                            /* Rabsent */0||
                            Btype["row_field_repr"](match$2[2])!==
                            /* Rabsent */0;
                     },
                   pairs);
          };
      
      var
       empty=
        function(fields)
         {return List["for_all"]
                  (function(param)
                    {return Btype["row_field_repr"](param[2])===/* Rabsent */0;},
                   fields);
          };
      
      if
       (closed&&
        (empty(r1)||row2$1[4])&&
        (empty(r2)||row1$1[4])&&
        List["for_all"]
         (function(param)
           {return Btype["row_field_repr"](param[2])===
                   /* Rabsent */0||
                   Btype["row_field_repr"](param[3])===
                   /* Rabsent */0;
            },
          pairs))
       {throw [0,
               Unify,
               /* :: */[0,
                /* tuple */[0,
                 mkvariant(/* [] */0,/* true */1),
                 mkvariant(/* [] */0,/* true */1)],
                /* [] */0]];
        }
      else
       {}
      
      if
       (row1$1[6]!==
        /* None */0&&
        (row1$1[4]||empty(r2))&&
        (!row2$1[4]||
         keep(function(f1,f2){return /* tuple */[0,f1,f2];})&&
         empty(r1)))
       {var name=row1$1[6];}
      else
       {if
         (row2$1[6]!==
          /* None */0&&
          (row2$1[4]||empty(r1))&&
          (!row1$1[4]||
           keep(function(f1,f2){return /* tuple */[0,f2,f1];})&&
           empty(r2)))
         {var name=row2$1[6];}
        else
         {var name=/* None */0;}
        }
      
      var row0=/* record */[0,/* [] */0,more,/* () */0,closed,fixed,name];
      
      var
       set_more=
        function(row,rest)
         {if(closed)
           {var rest$1=filter_row_fields(row[4],rest);}
          else
           {var rest$1=rest;}
          
          if
           (rest$1!==
            /* [] */0&&
            (row[4]||Btype["row_fixed"](row))||
            closed&&
            Btype["row_fixed"](row)&&
            !row[4])
           {var t1=mkvariant(/* [] */0,/* true */1);
            
            var t2=mkvariant(rest$1,/* false */0);
            
            throw [0,
                   Unify,
                   /* :: */[0,
                    row===row1$1?/* tuple */[0,t1,t2]:/* tuple */[0,t2,t1],
                    /* [] */0]];
            }
          else
           {}
          
          var rm=Btype["row_more"](row);
          
          if(trace_gadt_instances[1]&&rm[1]===/* Tnil */0)
           {}
          else
           {if(trace_gadt_instances[1])
             {update_level
               (env[1],rm[2],Btype["newgenty"](/* Tvariant */[8,row]))}
            else
             {}
            }
          
          if(Btype["row_fixed"](row))
           {if(more===rm)
             {return /* () */0;}
            else
             {if(Btype["is_Tvar"](rm))
               {return Btype["link_type"](rm,more);}
              else
               {return unify(env,rm,more);}
              }
            }
          else
           {var newrecord=/* unknown */"duprecord regular 6";
            
            var
             ty=
              Btype["newgenty"]
               (/* Tvariant */[8,(newrecord[1]=rest$1,newrecord)]);
            
            update_level(env[1],rm[2],ty);
            return Btype["link_type"](rm,ty);
            }
          };
      
      var md1=rm1[1];
      
      var md2=rm2[1];
      
      try
       {set_more(row2$1,r1);
        set_more(row1$1,r2);
        return List["iter"]
                (function(param)
                  {var f2=param[3];
                   
                   var f1=param[2];
                   
                   var l=param[1];
                   
                   try
                    {return unify_row_field(env,fixed1,fixed2,more,l,f1,f2);}
                   catch(exn)
                    {if(exn[1]===Unify)
                      {throw [0,
                              Unify,
                              /* :: */[0,
                               /* tuple */[0,
                                mkvariant
                                 (/* :: */[0,/* tuple */[0,l,f1],/* [] */0],/* true */1),
                                mkvariant
                                 (/* :: */[0,/* tuple */[0,l,f2],/* [] */0],/* true */1)],
                               exn[2]]];
                       }
                     else
                      {throw exn;}
                     }
                   },
                 pairs);
        }
      catch(exn)
       {Btype["log_type"](rm1);
        rm1[1]=md1;
        Btype["log_type"](rm2);
        rm2[1]=md2;
        throw exn;
        }
      }
    };

var
 unify_row_field=
  function(env,fixed1,fixed2,more,l,f1,f2)
   {var f1$1=Btype["row_field_repr"](f1);
    
    var f2$1=Btype["row_field_repr"](f2);
    
    if(f1$1===f2$1)
     {return /* () */0;}
    else
     {var exit;
      
      if(typeof f1$1==="number")
       {switch(f1$1)
         {case 0:
           if(typeof f2$1==="number")
            {switch(f2$1){case 0:return /* () */0;}}
           else
            {switch(f2$1[0])
              {case 0:exit=557;
               case 1:
                if(f2$1[3]!==0)
                 {exit=557;}
                else
                 {if(!fixed2)
                   {return Btype["set_row_field"](f2$1[4],f1$1);}
                  else
                   {exit=557;}
                  }
                
               }}
           
          }}
      else
       {switch(f1$1[0])
         {case 0:
           var match$1=f1$1[1];
           
           if(match$1)
            {var t1=match$1[1];
             
             if(typeof f2$1==="number")
              {switch(f2$1){case 0:exit=557;}}
             else
              {switch(f2$1[0])
                {case 0:
                  var match$2=f2$1[1];
                  
                  if(match$2){return unify(env,t1,match$2[1]);}else{exit=557;}
                  
                 case 1:
                  if(f2$1[1]!==0)
                   {exit=557;}
                  else
                   {if(!fixed2)
                     {var e2=f2$1[4];
                      
                      Btype["set_row_field"](e2,f1$1);
                      update_level(env[1],repr(more)[2],t1);
                      try
                       {return List["iter"](unify(env,t1),f2$1[2]);}
                      catch(exn){e2[1]=/* None */0;throw exn;}
                      }
                    else
                     {exit=557;}
                    }
                  
                 }}
             }
           else
            {if(typeof f2$1==="number")
              {switch(f2$1){case 0:exit=557;}}
             else
              {switch(f2$1[0])
                {case 0:if(f2$1[1]){exit=557;}else{return /* () */0;}
                 case 1:
                  if(f2$1[1]!==0)
                   {if(f2$1[2])
                     {exit=557;}
                    else
                     {if(!fixed2)
                       {return Btype["set_row_field"](f2$1[4],f1$1);}
                      else
                       {exit=557;}
                      }
                    }
                  else
                   {exit=557;}
                  
                 }}
             }
           
          case 1:
           var c1=f1$1[1];
           
           var m1=f1$1[3];
           
           var tl1=f1$1[2];
           
           var e1=f1$1[4];
           
           if(typeof f2$1==="number")
            {switch(f2$1)
              {case 0:
                if(m1!==0)
                 {exit=557;}
                else
                 {if(!fixed1)
                   {return Btype["set_row_field"](f1$1[4],f2$1);}
                  else
                   {exit=557;}
                  }
                
               }}
           else
            {switch(f2$1[0])
              {case 0:
                if(c1!==0)
                 {if(f1$1[2])
                   {exit=557;}
                  else
                   {if(f2$1[1])
                     {exit=557;}
                    else
                     {if(!fixed1)
                       {return Btype["set_row_field"](f1$1[4],f2$1);}
                      else
                       {exit=557;}
                      }
                    }
                  }
                else
                 {var match$3=f2$1[1];
                  
                  if(match$3)
                   {if(!fixed1)
                     {var t2=match$3[1];
                      
                      var e1$1=f1$1[4];
                      
                      Btype["set_row_field"](e1$1,f2$1);
                      update_level(env[1],repr(more)[2],t2);
                      try
                       {return List["iter"]
                                (function(t1){return unify(env,t1,t2);},f1$1[2]);
                        }
                      catch(exn$1){e1$1[1]=/* None */0;throw exn$1;}
                      }
                    else
                     {exit=557;}
                    }
                  else
                   {exit=557;}
                  }
                
               case 1:
                var e2$1=f2$1[4];
                
                if(e1===e2$1)
                 {return /* () */0;}
                else
                 {var m2=f2$1[3];
                  
                  var tl2=f2$1[2];
                  
                  var c2=f2$1[1];
                  
                  var match$4=Pervasives["@"](tl1,tl2);
                  
                  if(match$4)
                   {if(c1||c2){throw [0,Unify,/* [] */0];}else{}
                    
                    List["iter"](unify(env,match$4[1]),match$4[2]);
                    var $js=e1[1]!==/* None */0||e2$1[1]!==/* None */0;
                    }
                  else
                   {var $js=/* false */0;}
                  var
                   redo=
                    (m1||
                     m2||
                     fixed1||
                     fixed2||
                     rigid_variants[1]&&
                     (List["length"](tl1)===1||List["length"](tl2)===1))&&
                    $js;
                  
                  if(redo)
                   {return unify_row_field(env,fixed1,fixed2,more,l,f1$1,f2$1);
                    }
                  else
                   {var tl1$1=List["map"](repr,tl1);
                    
                    var tl2$1=List["map"](repr,tl2);
                    
                    var
                     remq=
                      function(tl,param)
                       {if(param)
                         {var tl$prime=param[2];
                          
                          var ty=param[1];
                          
                          if(List["memq"](ty,tl))
                           {return remq(tl,tl$prime);}
                          else
                           {return /* :: */[0,ty,remq(tl,tl$prime)];}
                          }
                        else
                         {return /* [] */0;}
                        };
                    
                    var tl2$prime=remq(tl2$1,tl1$1);
                    
                    var tl1$prime=remq(tl1$1,tl2$1);
                    
                    List["iter"]
                     (update_level(env[1],repr(more)[2]),
                      Pervasives["@"](tl1$prime,tl2$prime));
                    var e=[0,/* None */0];
                    
                    var f1$prime=/* Reither */[1,c1||c2,tl1$prime,m1||m2,e];
                    
                    var f2$prime=/* Reither */[1,c1||c2,tl2$prime,m1||m2,e];
                    
                    Btype["set_row_field"](e1,f1$prime);
                    return Btype["set_row_field"](e2$1,f2$prime);
                    }
                  }
                
               }}
           
          }}
      
      switch(exit){case 557:throw [0,Unify,/* [] */0];}
      }
    };

var
 unify$1=
  function(env,ty1,ty2)
   {try
     {return unify(env,ty1,ty2);}
    catch(exn)
     {if(exn[1]===Unify)
       {throw [0,Unify,expand_trace(env[1],exn[2])];}
      else
       {if(exn===Recursive_abbrev)
         {throw [0,
                 Unification_recursive_abbrev,
                 expand_trace
                  (env[1],/* :: */[0,/* tuple */[0,ty1,ty2],/* [] */0])];
          }
        else
         {throw exn;}
        }
      }
    };

var
 unify_gadt=
  function(lev,env,ty1,ty2)
   {try
     {univar_pairs[1]=/* [] */0;
      newtype_level[1]=/* Some */[0,lev];
      set_mode_pattern
       (/* true */1,/* true */1,function(param){return unify$1(env,ty1,ty2);});
      newtype_level[1]=/* None */0;
      return TypePairs[2](unify_eq_set);
      }
    catch(e)
     {TypePairs[2](unify_eq_set);
      if(e[1]===Unify)
       {throw [0,Unify,e[2]];}
      else
       {newtype_level[1]=/* None */0;throw e;}
      }
    };

var
 unify_var=
  function(env,t1,t2)
   {var t1$1=repr(t1);
    
    var t2$1=repr(t2);
    
    if(t1$1===t2$1)
     {return /* () */0;}
    else
     {var match$1=t1$1[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 0:
           var reset_tracing=check_trace_gadt_instances(env);
           
           try
            {occur(env,t1$1,t2$1);
             update_level(env,t1$1[2],t2$1);
             Btype["link_type"](t1$1,t2$1);
             return reset_trace_gadt_instances(reset_tracing);
             }
           catch(exn)
            {if(exn[1]===Unify)
              {reset_trace_gadt_instances(reset_tracing);
               var
                expanded_trace=
                 expand_trace(env,/* :: */[0,/* tuple */[0,t1$1,t2$1],exn[2]]);
               
               throw [0,Unify,expanded_trace];
               }
             else
              {throw exn;}
             }
           
          default:exit=435;}}
      
      switch(exit){case 435:return unify$1([0,env],t1$1,t2$1);}
      }
    };

unify$prime[1]=unify_var;
var
 unify_pairs$1=
  function(env,ty1,ty2,pairs)
   {univar_pairs[1]=pairs;return unify$1(env,ty1,ty2);};

var
 unify$2=
  function(env,ty1,ty2){return unify_pairs$1([0,env],ty1,ty2,/* [] */0);};

var
 expand_head_trace=
  function(env,t)
   {var reset_tracing=check_trace_gadt_instances(env);
    
    var t$1=expand_head_unif(env,t);
    
    reset_trace_gadt_instances(reset_tracing);
    return t$1;
    };

var
 filter_arrow=
  function(env,t,l)
   {var t$1=expand_head_trace(env,t);
    
    var match$1=t$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:
         var lv=t$1[2];
         
         var t1=newvar2(/* None */0,lv);
         
         var t2=newvar2(/* None */0,lv);
         
         var t$prime=newty2(lv,/* Tarrow */[1,l,t1,t2,/* Cok */0]);
         
         Btype["link_type"](t$1,t$prime);
         return /* tuple */[0,t1,t2];
         
        case 1:
         var l$prime=match$1[1];
         
         if
          (CamlPrimitive["caml_string_equal"](l,l$prime)||
           Clflags["classic"][1]&&
           CamlPrimitive["caml_string_equal"](l,"")&&
           !Btype["is_optional"](l$prime))
          {return /* tuple */[0,match$1[2],match$1[3]];}
         else
          {exit=424;}
         
        default:exit=424;}}
    
    switch(exit){case 424:throw [0,Unify,/* [] */0];}
    };

var
 filter_method_field=
  function(env,name,priv,ty)
   {var ty$1=expand_head_trace(env,ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:
         var level=ty$1[2];
         
         var ty1=newvar2(/* None */0,level);
         
         var ty2=newvar2(/* None */0,level);
         
         var
          ty$prime=
           newty2
            (level,
             /* Tfield */[5,
              name,
              priv!==0?/* Fpresent */0:/* Fvar */[0,[0,/* None */0]],
              ty1,
              ty2]);
         
         Btype["link_type"](ty$1,ty$prime);
         return ty1;
         
        case 5:
         var kind=Btype["field_kind_repr"](match$1[2]);
         
         if
          (CamlPrimitive["caml_string_equal"](match$1[1],name)&&
           kind!==
           /* Fabsent */1)
          {if(priv===/* Public */1){unify_kind(kind,/* Fpresent */0)}else{}
           
           return match$1[3];
           }
         else
          {return filter_method_field(env,name,priv,match$1[4]);}
         
        default:exit=418;}}
    
    switch(exit){case 418:throw [0,Unify,/* [] */0];}
    };

var
 filter_method=
  function(env,name,priv,ty)
   {var ty$1=expand_head_trace(env,ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:
         var ty1=newvar(/* None */0,/* () */0);
         
         var ty$prime=newobj(ty1);
         
         update_level(env,ty$1[2],ty$prime);
         Btype["link_type"](ty$1,ty$prime);
         return filter_method_field(env,name,priv,ty1);
         
        case 4:return filter_method_field(env,name,priv,match$1[1]);
        default:exit=410;}}
    
    switch(exit){case 410:throw [0,Unify,/* [] */0];}
    };

var
 check_filter_method=
  function(env,name,priv,ty){return filter_method(env,name,priv,ty);};

var
 filter_self_method=
  function(env,lab,priv,meths,ty)
   {var ty$prime=filter_method(env,lab,priv,ty);
    
    try
     {return Types["Meths"][22](lab,meths[1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var pair=/* tuple */[0,Ident["create"](lab),ty$prime];
        
        meths[1]=Types["Meths"][4](lab,pair,meths[1]);
        return pair;
        }
      else
       {throw exn;}
      }
    };

var
 moregen_occur=
  function(env,level,ty)
   {var
     occur$1=
      function(ty)
       {var ty$1=repr(ty);
        
        if(ty$1[2]>level)
         {if(Btype["is_Tvar"](ty$1)&&ty$1[2]>=Btype["generic_level"]-1)
           {throw Occur;}
          else
           {}
          
          ty$1[2]=Btype["pivot_level"]-ty$1[2];
          var match$1=ty$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 8:
               var row=match$1[1];
               
               if(Btype["static_row"](row))
                {return Btype["iter_row"](occur$1,row);}
               else
                {exit=400;}
               
              default:exit=400;}}
          
          switch(exit){case 400:return Btype["iter_type_expr"](occur$1,ty$1);}
          }
        else
         {return 0;}
        };
    
    try
     {occur$1(ty),Btype["unmark_type"](ty)}
    catch(exn)
     {if(exn===Occur)
       {Btype["unmark_type"](ty);throw [0,Unify,/* [] */0];}
      else
       {throw exn;}
      }
    
    occur_univar(env,ty);
    return update_level(env,level,ty);
    };

var
 may_instantiate=
  function(inst_nongen,t1)
   {if(inst_nongen)
     {return t1[2]!==Btype["generic_level"]-1;}
    else
     {return t1[2]===Btype["generic_level"];}
    };

var
 moregen=
  function(inst_nongen,type_pairs,env,t1,t2)
   {if(t1===t2)
     {return /* () */0;}
    else
     {var t1$1=repr(t1);
      
      var t2$1=repr(t2);
      
      if(t1$1===t2$1)
       {return /* () */0;}
      else
       {try
         {var match$1=t1$1[1];
          
          var match$2=t2$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 0:
               if(may_instantiate(inst_nongen,t1$1))
                {moregen_occur(env,t1$1[2],t2$1);
                 occur(env,t1$1,t2$1);
                 return Btype["link_type"](t1$1,t2$1);
                 }
               else
                {exit=368;}
               
              case 3:
               if(match$1[2])
                {exit=368;}
               else
                {if(typeof match$2==="number")
                  {switch(match$2){}}
                 else
                  {switch(match$2[0])
                    {case 3:
                      if(match$2[2])
                       {exit=368;}
                      else
                       {if(Path["same"](match$1[1],match$2[1]))
                         {return /* () */0;}
                        else
                         {exit=368;}
                        }
                      
                     default:exit=368;}}
                 }
               
              default:exit=368;}}
          
          switch(exit)
           {case 368:
             var t1$prime=expand_head(env,t1$1);
             
             var t2$prime=expand_head(env,t2$1);
             
             var t1$prime$1=repr(t1$prime);
             
             var t2$prime$1=repr(t2$prime);
             
             if(t1$prime$1===t2$prime$1)
              {return /* () */0;}
             else
              {try
                {return TypePairs[7]
                         (type_pairs,/* tuple */[0,t1$prime$1,t2$prime$1]);
                 }
               catch(exn)
                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                  {TypePairs[5]
                    (type_pairs,/* tuple */[0,t1$prime$1,t2$prime$1],/* () */0);
                   var match$3=t1$prime$1[1];
                   
                   var match$4=t2$prime$1[1];
                   
                   var exit$1;
                   
                   if(typeof match$3==="number")
                    {switch(match$3)
                      {case 0:
                        if(typeof match$4==="number")
                         {return /* () */0;}
                        else
                         {exit$1=361;}
                        
                       }}
                   else
                    {switch(match$3[0])
                      {case 0:
                        if(may_instantiate(inst_nongen,t1$prime$1))
                         {moregen_occur(env,t1$prime$1[2],t2$1);
                          return Btype["link_type"](t1$prime$1,t2$1);
                          }
                        else
                         {exit$1=361;}
                        
                       case 1:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 1:
                             var l2=match$4[1];
                             
                             var l1=match$3[1];
                             
                             if
                              (CamlPrimitive["caml_string_equal"](l1,l2)||
                               Clflags["classic"][1]&&
                               !(Btype["is_optional"](l1)||Btype["is_optional"](l2)))
                              {moregen(inst_nongen,type_pairs,env,match$3[2],match$4[2]);
                               return moregen
                                       (inst_nongen,type_pairs,env,match$3[3],match$4[3]);
                               }
                             else
                              {exit$1=361;}
                             
                            default:exit$1=361;}}
                        
                       case 2:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 2:
                             return moregen_list
                                     (inst_nongen,type_pairs,env,match$3[1],match$4[1]);
                             
                            default:exit$1=361;}}
                        
                       case 3:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 3:
                             if(Path["same"](match$3[1],match$4[1]))
                              {return moregen_list
                                       (inst_nongen,type_pairs,env,match$3[2],match$4[2]);
                               }
                             else
                              {exit$1=361;}
                             
                            default:exit$1=361;}}
                        
                       case 4:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 4:
                             return moregen_fields
                                     (inst_nongen,type_pairs,env,match$3[1],match$4[1]);
                             
                            default:exit$1=361;}}
                        
                       case 5:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 5:
                             return moregen_fields
                                     (inst_nongen,type_pairs,env,t1$prime$1,t2$prime$1);
                             
                            default:exit$1=361;}}
                        
                       case 6:exit$1=361;
                       case 7:exit$1=361;
                       case 8:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 8:
                             return moregen_row
                                     (inst_nongen,type_pairs,env,match$3[1],match$4[1]);
                             
                            default:exit$1=361;}}
                        
                       case 9:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 9:
                             return unify_univar(t1$prime$1,t2$prime$1,univar_pairs[1]);
                            default:exit$1=361;}}
                        
                       case 10:
                        var tl1=match$3[2];
                        
                        var t1$2=match$3[1];
                        
                        var exit$2;
                        
                        if(tl1)
                         {exit$2=362;}
                        else
                         {if(typeof match$4==="number")
                           {switch(match$4){}}
                          else
                           {switch(match$4[0])
                             {case 10:
                               if(match$4[2])
                                {exit$2=362;}
                               else
                                {return moregen(inst_nongen,type_pairs,env,t1$2,match$4[1]);
                                 }
                               
                              default:exit$1=361;}}
                          }
                        
                        switch(exit$2)
                         {case 362:
                           if(typeof match$4==="number")
                            {switch(match$4){}}
                           else
                            {switch(match$4[0])
                              {case 10:
                                return enter_poly
                                        (env,
                                         univar_pairs,
                                         t1$2,
                                         tl1,
                                         match$4[1],
                                         match$4[2],
                                         moregen(inst_nongen,type_pairs,env));
                                
                               default:exit$1=361;}}
                           
                          }
                        
                       case 11:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 11:
                             try
                              {return unify_package
                                       (env,
                                        moregen_list(inst_nongen,type_pairs,env),
                                        t1$prime$1[2],
                                        match$3[1],
                                        match$3[2],
                                        match$3[3],
                                        t2$prime$1[2],
                                        match$4[1],
                                        match$4[2],
                                        match$4[3]);
                               }
                             catch(exn$1)
                              {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                                {throw [0,Unify,/* [] */0];}
                               else
                                {throw exn$1;}
                               }
                             
                            default:exit$1=361;}}
                        
                       }}
                   
                   switch(exit$1){case 361:throw [0,Unify,/* [] */0];}
                   }
                 else
                  {throw exn;}
                 }
               }
             
            }
          }
        catch(exn$2)
         {if(exn$2[1]===Unify)
           {throw [0,Unify,/* :: */[0,/* tuple */[0,t1$1,t2$1],exn$2[2]]];}
          else
           {throw exn$2;}
          }
        }
      }
    };

var
 moregen_list=
  function(inst_nongen,type_pairs,env,tl1,tl2)
   {if(List["length"](tl1)!==List["length"](tl2))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    return List["iter2"](moregen(inst_nongen,type_pairs,env),tl1,tl2);
    };

var
 moregen_fields=
  function(inst_nongen,type_pairs,env,ty1,ty2)
   {var match$1=flatten_fields(ty1);
    
    var match$2=flatten_fields(ty2);
    
    var rest2=match$2[2];
    
    var match$3=associate_fields(match$1[1],match$2[1]);
    
    if(match$3[2]!==/* [] */0){throw [0,Unify,/* [] */0];}else{}
    
    moregen
     (inst_nongen,
      type_pairs,
      env,
      match$1[2],
      build_fields(repr(ty2)[2],match$3[3],rest2));
    return List["iter"]
            (function(param)
              {var t2=param[5];
               
               var k2=param[4];
               
               var t1=param[3];
               
               var k1=param[2];
               
               var n=param[1];
               
               moregen_kind(k1,k2);
               try
                {return moregen(inst_nongen,type_pairs,env,t1,t2);}
               catch(exn)
                {if(exn[1]===Unify)
                  {throw [0,
                          Unify,
                          /* :: */[0,
                           /* tuple */[0,
                            newty(/* Tfield */[5,n,k1,t1,rest2]),
                            newty(/* Tfield */[5,n,k2,t2,rest2])],
                           exn[2]]];
                   }
                 else
                  {throw exn;}
                 }
               },
             match$3[1]);
    };

var
 moregen_kind=
  function(k1,k2)
   {var k1$1=Btype["field_kind_repr"](k1);
    
    var k2$1=Btype["field_kind_repr"](k2);
    
    if(k1$1===k2$1)
     {return /* () */0;}
    else
     {var exit;
      
      if(typeof k1$1==="number")
       {if(k1$1!==0)
         {exit=375;}
        else
         {if(typeof k2$1==="number")
           {if(k2$1!==0){exit=375;}else{return /* () */0;}}
          else
           {exit=375;}
          }
        }
      else
       {var exit$1;
        
        if(typeof k2$1==="number")
         {if(k2$1!==0){exit=375;}else{exit$1=376;}}
        else
         {exit$1=376;}
        
        switch(exit$1){case 376:return Btype["set_kind"](k1$1[1],k2$1);}
        }
      
      switch(exit){case 375:throw [0,Unify,/* [] */0];}
      }
    };

var
 moregen_row=
  function(inst_nongen,type_pairs,env,row1,row2)
   {var row1$1=Btype["row_repr"](row1);
    
    var row2$1=Btype["row_repr"](row2);
    
    var rm1=repr(row1$1[2]);
    
    var rm2=repr(row2$1[2]);
    
    if(rm1===rm2)
     {return /* () */0;}
    else
     {var
       may_inst=
        Btype["is_Tvar"](rm1)&&
        may_instantiate(inst_nongen,rm1)||
        rm1[1]===
        /* Tnil */0;
      
      var match$1=merge_row_fields(row1$1[1],row2$1[1]);
      
      var r2=match$1[2];
      
      var r1=match$1[1];
      
      if(row2$1[4])
       {var
         match$2=
          /* tuple */[0,
           filter_row_fields(may_inst,r1),
           filter_row_fields(/* false */0,r2)];
        }
      else
       {var match$2=/* tuple */[0,r1,r2];}
      
      var r2$1=match$2[2];
      
      if(match$2[1]!==/* [] */0||row1$1[4]&&(!row2$1[4]||r2$1!==/* [] */0))
       {throw [0,Unify,/* [] */0];}
      else
       {}
      
      var match$3=rm1[1];
      
      var match$4=rm2[1];
      
      var exit;
      
      if(typeof match$3==="number")
       {switch(match$3){}}
      else
       {switch(match$3[0])
         {case 9:
           if(typeof match$4==="number")
            {switch(match$4){}}
           else
            {switch(match$4[0])
              {case 9:unify_univar(rm1,rm2,univar_pairs[1]);default:exit=384;}}
           
          default:exit=389;}}
      
      switch(exit)
       {case 389:
         if(typeof match$4==="number")
          {switch(match$4){}}
         else
          {switch(match$4[0]){case 9:exit=384;default:exit=388;}}
         
        case 388:
         if(Btype["static_row"](row1$1))
          {}
         else
          {if(may_inst)
            {var newrecord=/* unknown */"duprecord regular 6";
             
             var
              ext=
               Btype["newgenty"]
                (/* Tvariant */[8,(newrecord[1]=r2$1,newrecord)]);
             
             moregen_occur(env,rm1[2],ext),Btype["link_type"](rm1,ext)}
           else
            {if(typeof match$3==="number")
              {switch(match$3){}}
             else
              {switch(match$3[0])
                {case 3:
                  if(typeof match$4==="number")
                   {switch(match$4){}}
                  else
                   {switch(match$4[0])
                     {case 3:moregen(inst_nongen,type_pairs,env,rm1,rm2);
                      default:exit=385;}}
                  
                 default:exit=385;}}
             }
           }
         
        case 385:throw [0,Unify,/* [] */0];
        case 384:throw [0,Unify,/* [] */0];
        }
      
      return List["iter"]
              (function(param)
                {var f1=Btype["row_field_repr"](param[2]);
                 
                 var f2=Btype["row_field_repr"](param[3]);
                 
                 if(f1===f2)
                  {return /* () */0;}
                 else
                  {var exit$1;
                   
                   if(typeof f1==="number")
                    {switch(f1)
                      {case 0:
                        if(typeof f2==="number"){return /* () */0;}else{exit$1=379;}
                       }}
                   else
                    {switch(f1[0])
                      {case 0:
                        var match$5=f1[1];
                        
                        if(match$5)
                         {if(typeof f2==="number")
                           {switch(f2){case 0:exit$1=379;}}
                          else
                           {switch(f2[0])
                             {case 0:
                               var match$6=f2[1];
                               
                               if(match$6)
                                {return moregen
                                         (inst_nongen,type_pairs,env,match$5[1],match$6[1]);
                                 }
                               else
                                {exit$1=379;}
                               
                              case 1:exit$1=379;
                              }}
                          }
                        else
                         {if(typeof f2==="number")
                           {switch(f2){case 0:exit$1=379;}}
                          else
                           {switch(f2[0])
                             {case 0:if(f2[1]){exit$1=379;}else{return /* () */0;}
                              case 1:exit$1=379;
                              }}
                          }
                        
                       case 1:
                        var c1=f1[1];
                        
                        var exit$2;
                        
                        if(c1!==0)
                         {if(f1[2])
                           {exit$2=380;}
                          else
                           {if(typeof f2==="number")
                             {switch(f2){case 0:exit$2=380;}}
                            else
                             {switch(f2[0])
                               {case 0:
                                 if(f2[1])
                                  {exit$1=379;}
                                 else
                                  {if(may_inst)
                                    {return Btype["set_row_field"](f1[4],f2);}
                                   else
                                    {exit$1=379;}
                                   }
                                 
                                case 1:exit$2=380;
                                }}
                            }
                          }
                        else
                         {if(typeof f2==="number")
                           {switch(f2){case 0:exit$2=380;}}
                          else
                           {switch(f2[0])
                             {case 0:
                               var match$7=f2[1];
                               
                               if(match$7)
                                {if(may_inst)
                                  {var t2=match$7[1];
                                   
                                   Btype["set_row_field"](f1[4],f2);
                                   return List["iter"]
                                           (function(t1)
                                             {return moregen(inst_nongen,type_pairs,env,t1,t2);},
                                            f1[2]);
                                   }
                                 else
                                  {exit$1=379;}
                                 }
                               else
                                {exit$1=379;}
                               
                              case 1:exit$2=380;
                              }}
                          }
                        
                        switch(exit$2)
                         {case 380:
                           var e1=f1[4];
                           
                           var tl1=f1[2];
                           
                           if(typeof f2==="number")
                            {switch(f2)
                              {case 0:
                                if(may_inst)
                                 {return Btype["set_row_field"](e1,f2);}
                                else
                                 {exit$1=379;}
                                
                               }}
                           else
                            {switch(f2[0])
                              {case 0:exit$1=379;
                               case 1:
                                var e2=f2[4];
                                
                                if(e1!==e2)
                                 {var tl2=f2[2];
                                  
                                  var c2=f2[1];
                                  
                                  if(c1&&!c2){throw [0,Unify,/* [] */0];}else{}
                                  
                                  Btype["set_row_field"]
                                   (e1,/* Reither */[1,c2,/* [] */0,f2[3],e2]);
                                  if(List["length"](tl1)===List["length"](tl2))
                                   {return List["iter2"]
                                            (moregen(inst_nongen,type_pairs,env),tl1,tl2);
                                    }
                                  else
                                   {if(tl2)
                                     {var t2$1=tl2[1];
                                      
                                      return List["iter"]
                                              (function(t1)
                                                {return moregen(inst_nongen,type_pairs,env,t1,t2$1);},
                                               tl1);
                                      }
                                    else
                                     {if(tl1!==/* [] */0)
                                       {throw [0,Unify,/* [] */0];}
                                      else
                                       {return 0;}
                                      }
                                    }
                                  }
                                else
                                 {return 0;}
                                
                               }}
                           
                          }
                        
                       }}
                   
                   switch(exit$1){case 379:throw [0,Unify,/* [] */0];}
                   }
                 },
               match$1[3]);
      }
    };

var
 moregen$1=
  function(inst_nongen,type_pairs,env,patt,subj)
   {univar_pairs[1]=/* [] */0;
    return moregen(inst_nongen,type_pairs,env,patt,subj);
    };

var
 moregeneral=
  function(env,inst_nongen,pat_sch,subj_sch)
   {var old_level=current_level[1];
    
    current_level[1]=Btype["generic_level"]-1;
    var subj=duplicate_type(instance(/* None */0,env,subj_sch));
    
    current_level[1]=Btype["generic_level"];
    var patt=instance(/* None */0,env,pat_sch);
    
    try
     {moregen$1(inst_nongen,TypePairs[1](13),env,patt,subj);
      var res=/* true */1;
      }
    catch(exn){if(exn[1]===Unify){var res=/* false */0;}else{throw exn;}}
    
    current_level[1]=old_level;
    return res;
    };

var
 rigidify_rec=
  function(vars,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>=Btype["lowest_level"])
     {ty$1[2]=Btype["pivot_level"]-ty$1[2];
      var match$1=ty$1[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 0:
           if(!List["memq"](ty$1,vars[1]))
            {return vars[1]=/* :: */[0,ty$1,vars[1]],0;}
           else
            {return 0;}
           
          case 8:
           var row=Btype["row_repr"](match$1[1]);
           
           var more=repr(row[2]);
           
           if(Btype["is_Tvar"](more)&&!Btype["row_fixed"](row))
            {var more$prime=newty2(more[2],more[1]);
             
             var
              row$prime=
               /* record */[0,
                /* [] */0,
                more$prime,
                row[3],
                row[4],
                /* true */1,
                row[6]];
             
             Btype["link_type"]
              (more,newty2(ty$1[2],/* Tvariant */[8,row$prime]))}
           else
            {}
           
           Btype["iter_row"](rigidify_rec(vars),row);
           if(!Btype["static_row"](row))
            {return rigidify_rec(vars,Btype["row_more"](row));}
           else
            {return 0;}
           
          default:exit=350;}}
      
      switch(exit)
       {case 350:return Btype["iter_type_expr"](rigidify_rec(vars),ty$1);}
      }
    else
     {return 0;}
    };

var
 rigidify=
  function(ty)
   {var vars=[0,/* [] */0];
    
    rigidify_rec(vars,ty);
    Btype["unmark_type"](ty);
    return vars[1];
    };

var
 all_distinct_vars=
  function(env,vars)
   {var tyl=[0,/* [] */0];
    
    return List["for_all"]
            (function(ty)
              {var ty$1=expand_head(env,ty);
               
               if(List["memq"](ty$1,tyl[1]))
                {return /* false */0;}
               else
                {tyl[1]=/* :: */[0,ty$1,tyl[1]];
                 return Btype["is_Tvar"](ty$1);
                 }
               },
             vars);
    };

var
 matches=
  function(env,ty,ty$prime)
   {var snap=Btype["snapshot"](/* () */0);
    
    var vars=rigidify(ty);
    
    Btype["cleanup_abbrev"](/* () */0);
    try
     {unify$2(env,ty,ty$prime);var ok=all_distinct_vars(env,vars);}
    catch(exn){if(exn[1]===Unify){var ok=/* false */0;}else{throw exn;}}
    
    Btype["backtrack"](snap);
    return ok;
    };

var
 get_object_row=
  function(ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 5:return get_object_row(match$1[4]);default:exit=335;}}
    
    switch(exit){case 335:return ty$1;}
    };

var
 expand_head_rigid=
  function(env,ty)
   {var old=rigid_variants[1];
    
    rigid_variants[1]=/* true */1;
    var ty$prime=expand_head(env,ty);
    
    rigid_variants[1]=old;
    return ty$prime;
    };

var
 normalize_subst=
  function(subst)
   {if
     (List["exists"]
       (function(param)
         {var exit;
          
          var match$1=param[1][1];
          
          var exit$1;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0]){case 6:exit=328;default:exit$1=330;}}
          
          switch(exit$1)
           {case 330:
             var match$2=param[2][1];
             
             if(typeof match$2==="number")
              {switch(match$2){}}
             else
              {switch(match$2[0]){case 6:exit=328;default:exit$1=329;}}
             
            case 329:return /* false */0;
            }
          
          switch(exit){case 328:return /* true */1;}
          },
        subst[1]))
     {return subst[1]=
             List["map"]
              (function(param)
                {return /* tuple */[0,repr(param[1]),repr(param[2])];},
               subst[1]),
             0;
      }
    else
     {return 0;}
    };

var
 eqtype=
  function(rename,type_pairs,subst,env,t1,t2)
   {if(t1===t2)
     {return /* () */0;}
    else
     {var t1$1=repr(t1);
      
      var t2$1=repr(t2);
      
      if(t1$1===t2$1)
       {return /* () */0;}
      else
       {try
         {var match$1=t1$1[1];
          
          var match$2=t2$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 0:
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:
                    if(rename)
                     {try
                       {normalize_subst(subst);
                        if(List["assq"](t1$1,subst[1])!==t2$1)
                         {throw [0,Unify,/* [] */0];}
                        else
                         {return 0;}
                        }
                      catch(exn)
                       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                         {if
                           (List["exists"]
                             (function(param){return param[2]===t2$1;},subst[1]))
                           {throw [0,Unify,/* [] */0];}
                          else
                           {}
                          
                          return subst[1]=
                                 /* :: */[0,/* tuple */[0,t1$1,t2$1],subst[1]],
                                 0;
                          }
                        else
                         {throw exn;}
                        }
                      }
                    else
                     {exit=310;}
                    
                   default:exit=310;}}
               
              case 3:
               if(match$1[2])
                {exit=310;}
               else
                {if(typeof match$2==="number")
                  {switch(match$2){}}
                 else
                  {switch(match$2[0])
                    {case 3:
                      if(match$2[2])
                       {exit=310;}
                      else
                       {if(Path["same"](match$1[1],match$2[1]))
                         {return /* () */0;}
                        else
                         {exit=310;}
                        }
                      
                     default:exit=310;}}
                 }
               
              default:exit=310;}}
          
          switch(exit)
           {case 310:
             var t1$prime=expand_head_rigid(env,t1$1);
             
             var t2$prime=expand_head_rigid(env,t2$1);
             
             var t1$prime$1=repr(t1$prime);
             
             var t2$prime$1=repr(t2$prime);
             
             if(t1$prime$1===t2$prime$1)
              {return /* () */0;}
             else
              {try
                {return TypePairs[7]
                         (type_pairs,/* tuple */[0,t1$prime$1,t2$prime$1]);
                 }
               catch(exn$1)
                {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                  {TypePairs[5]
                    (type_pairs,/* tuple */[0,t1$prime$1,t2$prime$1],/* () */0);
                   var match$3=t1$prime$1[1];
                   
                   var match$4=t2$prime$1[1];
                   
                   var exit$1;
                   
                   if(typeof match$3==="number")
                    {switch(match$3)
                      {case 0:
                        if(typeof match$4==="number")
                         {return /* () */0;}
                        else
                         {exit$1=303;}
                        
                       }}
                   else
                    {switch(match$3[0])
                      {case 0:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 0:
                             if(rename)
                              {try
                                {normalize_subst(subst);
                                 if(List["assq"](t1$prime$1,subst[1])!==t2$prime$1)
                                  {throw [0,Unify,/* [] */0];}
                                 else
                                  {return 0;}
                                 }
                               catch(exn$2)
                                {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
                                  {if
                                    (List["exists"]
                                      (function(param){return param[2]===t2$prime$1;},subst[1]))
                                    {throw [0,Unify,/* [] */0];}
                                   else
                                    {}
                                   
                                   return subst[1]=
                                          /* :: */[0,/* tuple */[0,t1$prime$1,t2$prime$1],subst[1]],
                                          0;
                                   }
                                 else
                                  {throw exn$2;}
                                 }
                               }
                             else
                              {exit$1=303;}
                             
                            default:exit$1=303;}}
                        
                       case 1:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 1:
                             var l2=match$4[1];
                             
                             var l1=match$3[1];
                             
                             if
                              (CamlPrimitive["caml_string_equal"](l1,l2)||
                               Clflags["classic"][1]&&
                               !(Btype["is_optional"](l1)||Btype["is_optional"](l2)))
                              {eqtype(rename,type_pairs,subst,env,match$3[2],match$4[2]);
                               return eqtype
                                       (rename,type_pairs,subst,env,match$3[3],match$4[3]);
                               }
                             else
                              {exit$1=303;}
                             
                            default:exit$1=303;}}
                        
                       case 2:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 2:
                             return eqtype_list
                                     (rename,type_pairs,subst,env,match$3[1],match$4[1]);
                             
                            default:exit$1=303;}}
                        
                       case 3:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 3:
                             if(Path["same"](match$3[1],match$4[1]))
                              {return eqtype_list
                                       (rename,type_pairs,subst,env,match$3[2],match$4[2]);
                               }
                             else
                              {exit$1=303;}
                             
                            default:exit$1=303;}}
                        
                       case 4:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 4:
                             return eqtype_fields
                                     (rename,type_pairs,subst,env,match$3[1],match$4[1]);
                             
                            default:exit$1=303;}}
                        
                       case 5:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 5:
                             return eqtype_fields
                                     (rename,type_pairs,subst,env,t1$prime$1,t2$prime$1);
                             
                            default:exit$1=303;}}
                        
                       case 6:exit$1=303;
                       case 7:exit$1=303;
                       case 8:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 8:
                             return eqtype_row
                                     (rename,type_pairs,subst,env,match$3[1],match$4[1]);
                             
                            default:exit$1=303;}}
                        
                       case 9:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 9:
                             return unify_univar(t1$prime$1,t2$prime$1,univar_pairs[1]);
                            default:exit$1=303;}}
                        
                       case 10:
                        var tl1=match$3[2];
                        
                        var t1$2=match$3[1];
                        
                        var exit$2;
                        
                        if(tl1)
                         {exit$2=304;}
                        else
                         {if(typeof match$4==="number")
                           {switch(match$4){}}
                          else
                           {switch(match$4[0])
                             {case 10:
                               if(match$4[2])
                                {exit$2=304;}
                               else
                                {return eqtype(rename,type_pairs,subst,env,t1$2,match$4[1]);
                                 }
                               
                              default:exit$1=303;}}
                          }
                        
                        switch(exit$2)
                         {case 304:
                           if(typeof match$4==="number")
                            {switch(match$4){}}
                           else
                            {switch(match$4[0])
                              {case 10:
                                return enter_poly
                                        (env,
                                         univar_pairs,
                                         t1$2,
                                         tl1,
                                         match$4[1],
                                         match$4[2],
                                         eqtype(rename,type_pairs,subst,env));
                                
                               default:exit$1=303;}}
                           
                          }
                        
                       case 11:
                        if(typeof match$4==="number")
                         {switch(match$4){}}
                        else
                         {switch(match$4[0])
                           {case 11:
                             try
                              {return unify_package
                                       (env,
                                        eqtype_list(rename,type_pairs,subst,env),
                                        t1$prime$1[2],
                                        match$3[1],
                                        match$3[2],
                                        match$3[3],
                                        t2$prime$1[2],
                                        match$4[1],
                                        match$4[2],
                                        match$4[3]);
                               }
                             catch(exn$3)
                              {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
                                {throw [0,Unify,/* [] */0];}
                               else
                                {throw exn$3;}
                               }
                             
                            default:exit$1=303;}}
                        
                       }}
                   
                   switch(exit$1){case 303:throw [0,Unify,/* [] */0];}
                   }
                 else
                  {throw exn$1;}
                 }
               }
             
            }
          }
        catch(exn$4)
         {if(exn$4[1]===Unify)
           {throw [0,Unify,/* :: */[0,/* tuple */[0,t1$1,t2$1],exn$4[2]]];}
          else
           {throw exn$4;}
          }
        }
      }
    };

var
 eqtype_list=
  function(rename,type_pairs,subst,env,tl1,tl2)
   {if(List["length"](tl1)!==List["length"](tl2))
     {throw [0,Unify,/* [] */0];}
    else
     {}
    
    return List["iter2"](eqtype(rename,type_pairs,subst,env),tl1,tl2);
    };

var
 eqtype_fields=
  function(rename,type_pairs,subst,env,ty1,ty2)
   {var match$1=flatten_fields(ty1);
    
    var rest1=match$1[2];
    
    var match$2=flatten_fields(ty2);
    
    var rest2=match$2[2];
    
    var
     same_row=
      rest1===
      rest2||
      TypePairs[10](type_pairs,/* tuple */[0,rest1,rest2])||
      rename&&
      List["mem"](/* tuple */[0,rest1,rest2],subst[1]);
    
    if(same_row)
     {return /* () */0;}
    else
     {var match$3=expand_head_rigid(env,rest2);
      
      var match$4=match$3[1];
      
      var exit;
      
      if(typeof match$4==="number")
       {switch(match$4){}}
      else
       {switch(match$4[0])
         {case 4:
           return eqtype_fields(rename,type_pairs,subst,env,ty1,match$4[1]);
          default:exit=315;}}
      
      switch(exit)
       {case 315:
         var match$5=associate_fields(match$1[1],match$2[1]);
         
         eqtype(rename,type_pairs,subst,env,rest1,rest2);
         if(match$5[2]!==/* [] */0||match$5[3]!==/* [] */0)
          {throw [0,Unify,/* [] */0];}
         else
          {}
         
         return List["iter"]
                 (function(param)
                   {var t2=param[5];
                    
                    var k2=param[4];
                    
                    var t1=param[3];
                    
                    var k1=param[2];
                    
                    var n=param[1];
                    
                    eqtype_kind(k1,k2);
                    try
                     {return eqtype(rename,type_pairs,subst,env,t1,t2);}
                    catch(exn)
                     {if(exn[1]===Unify)
                       {throw [0,
                               Unify,
                               /* :: */[0,
                                /* tuple */[0,
                                 newty(/* Tfield */[5,n,k1,t1,rest2]),
                                 newty(/* Tfield */[5,n,k2,t2,rest2])],
                                exn[2]]];
                        }
                      else
                       {throw exn;}
                      }
                    },
                  match$5[1]);
         
        }
      }
    };

var
 eqtype_kind=
  function(k1,k2)
   {var k1$1=Btype["field_kind_repr"](k1);
    
    var k2$1=Btype["field_kind_repr"](k2);
    
    var exit;
    
    if(typeof k1$1==="number")
     {if(k1$1!==0)
       {exit=320;}
      else
       {if(typeof k2$1==="number")
         {if(k2$1!==0){exit=320;}else{exit=319;}}
        else
         {exit=320;}
        }
      }
    else
     {if(typeof k2$1==="number"){exit=320;}else{exit=319;}}
    
    switch(exit)
     {case 320:throw [0,Unify,/* [] */0];case 319:return /* () */0;}
    };

var
 eqtype_row=
  function(rename,type_pairs,subst,env,row1,row2)
   {var match$1=expand_head_rigid(env,Btype["row_more"](row2));
    
    var match$2=match$1[1];
    
    var exit;
    
    if(typeof match$2==="number")
     {switch(match$2){}}
    else
     {switch(match$2[0])
       {case 8:return eqtype_row(rename,type_pairs,subst,env,row1,match$2[1]);
        default:exit=327;}}
    
    switch(exit)
     {case 327:
       var row1$1=Btype["row_repr"](row1);
       
       var row2$1=Btype["row_repr"](row2);
       
       var match$3=merge_row_fields(row1$1[1],row2$1[1]);
       
       var r2=match$3[2];
       
       var r1=match$3[1];
       
       if
        (CamlPrimitive["caml_notequal"](row1$1[4],row2$1[4])||
         !row1$1[4]&&
         (r1!==/* [] */0||r2!==/* [] */0)||
         filter_row_fields(/* false */0,Pervasives["@"](r1,r2))!==
         /* [] */0)
        {throw [0,Unify,/* [] */0];}
       else
        {}
       
       if(!Btype["static_row"](row1$1))
        {eqtype(rename,type_pairs,subst,env,row1$1[2],row2$1[2])}
       else
        {}
       
       return List["iter"]
               (function(param)
                 {var match$4=Btype["row_field_repr"](param[2]);
                  
                  var match$5=Btype["row_field_repr"](param[3]);
                  
                  var exit$1;
                  
                  if(typeof match$4==="number")
                   {switch(match$4)
                     {case 0:
                       if(typeof match$5==="number")
                        {return /* () */0;}
                       else
                        {exit$1=323;}
                       
                      }}
                  else
                   {switch(match$4[0])
                     {case 0:
                       var match$6=match$4[1];
                       
                       if(match$6)
                        {if(typeof match$5==="number")
                          {switch(match$5){case 0:exit$1=323;}}
                         else
                          {switch(match$5[0])
                            {case 0:
                              var match$7=match$5[1];
                              
                              if(match$7)
                               {return eqtype
                                        (rename,type_pairs,subst,env,match$6[1],match$7[1]);
                                }
                              else
                               {exit$1=323;}
                              
                             case 1:exit$1=323;
                             }}
                         }
                       else
                        {if(typeof match$5==="number")
                          {switch(match$5){case 0:exit$1=323;}}
                         else
                          {switch(match$5[0])
                            {case 0:if(match$5[1]){exit$1=323;}else{return /* () */0;}
                             case 1:exit$1=323;
                             }}
                         }
                       
                      case 1:
                       if(match$4[1]!==0)
                        {if(match$4[2])
                          {exit$1=323;}
                         else
                          {if(typeof match$5==="number")
                            {switch(match$5){case 0:exit$1=323;}}
                           else
                            {switch(match$5[0])
                              {case 0:exit$1=323;
                               case 1:
                                if(match$5[1]!==0)
                                 {if(match$5[2]){exit$1=323;}else{return /* () */0;}}
                                else
                                 {exit$1=323;}
                                
                               }}
                           }
                         }
                       else
                        {var match$8=match$4[2];
                         
                         if(match$8)
                          {var tl1=match$8[2];
                           
                           var t1=match$8[1];
                           
                           if(typeof match$5==="number")
                            {switch(match$5){case 0:exit$1=323;}}
                           else
                            {switch(match$5[0])
                              {case 0:exit$1=323;
                               case 1:
                                if(match$5[1]!==0)
                                 {exit$1=323;}
                                else
                                 {var match$9=match$5[2];
                                  
                                  if(match$9)
                                   {var tl2=match$9[2];
                                    
                                    var t2=match$9[1];
                                    
                                    eqtype(rename,type_pairs,subst,env,t1,t2);
                                    if(List["length"](tl1)===List["length"](tl2))
                                     {return List["iter2"]
                                              (eqtype(rename,type_pairs,subst,env),tl1,tl2);
                                      }
                                    else
                                     {List["iter"](eqtype(rename,type_pairs,subst,env,t1),tl2);
                                      return List["iter"]
                                              (function(t1)
                                                {return eqtype(rename,type_pairs,subst,env,t1,t2);},
                                               tl1);
                                      }
                                    }
                                  else
                                   {exit$1=323;}
                                  }
                                
                               }}
                           }
                         else
                          {exit$1=323;}
                         }
                       
                      }}
                  
                  switch(exit$1){case 323:throw [0,Unify,/* [] */0];}
                  },
                match$3[3]);
       
      }
    };

var
 equal$1=
  function(env,rename,tyl1,tyl2)
   {try
     {univar_pairs[1]=/* [] */0;
      eqtype_list(rename,TypePairs[1](11),[0,/* [] */0],env,tyl1,tyl2);
      return /* true */1;
      }
    catch(exn){if(exn[1]===Unify){return /* false */0;}else{throw exn;}}
    };

var
 eqtype$1=
  function(rename,type_pairs,subst,env,t1,t2)
   {univar_pairs[1]=/* [] */0;
    return eqtype(rename,type_pairs,subst,env,t1,t2);
    };

var Failure$1=CamlPrimitive["caml_set_oo_id"]([248,"Ctype.Failure",0]);

var
 moregen_clty=
  function(trace,type_pairs,env,cty1,cty2)
   {try
     {var exit;
      
      switch(cty1[0])
       {case 0:return moregen_clty(/* true */1,type_pairs,env,cty1[3],cty2);
        case 1:
         var sign1=cty1[1];
         
         switch(cty2[0])
          {case 0:exit=295;
           case 1:
            var sign2=cty2[1];
            
            var ty1=object_fields(repr(sign1[1]));
            
            var ty2=object_fields(repr(sign2[1]));
            
            var match$1=flatten_fields(ty1);
            
            var match$2=flatten_fields(ty2);
            
            var match$3=associate_fields(match$1[1],match$2[1]);
            
            List["iter"]
             (function(param)
               {try
                 {return moregen$1
                          (/* true */1,type_pairs,env,param[3],param[5]);
                  }
                catch(exn)
                 {if(exn[1]===Unify)
                   {throw [0,
                           Failure$1,
                           /* :: */[0,
                            /* CM_Meth_type_mismatch */[5,
                             param[1],
                             env,
                             expand_trace(env,exn[2])],
                            /* [] */0]];
                    }
                  else
                   {throw exn;}
                  }
                },
              match$3[1]);
            return Types["Vars"][10]
                    (function(lab,param)
                      {var match$4=Types["Vars"][22](lab,sign1[2]);
                       
                       try
                        {return moregen$1
                                 (/* true */1,type_pairs,env,match$4[3],param[3]);
                         }
                       catch(exn)
                        {if(exn[1]===Unify)
                          {throw [0,
                                  Failure$1,
                                  /* :: */[0,
                                   /* CM_Val_type_mismatch */[4,
                                    lab,
                                    env,
                                    expand_trace(env,exn[2])],
                                   /* [] */0]];
                           }
                         else
                          {throw exn;}
                         }
                       },
                     sign2[2]);
            
           case 2:exit=294;
           }
         
        case 2:
         switch(cty2[0])
          {case 0:exit=295;
           case 1:exit=294;
           case 2:
            if(CamlPrimitive["caml_string_equal"](cty1[1],cty2[1]))
             {try
               {moregen$1(/* true */1,type_pairs,env,cty1[2],cty2[2])}
              catch(exn)
               {if(exn[1]===Unify)
                 {throw [0,
                         Failure$1,
                         /* :: */[0,
                          /* CM_Parameter_mismatch */[3,env,expand_trace(env,exn[2])],
                          /* [] */0]];
                  }
                else
                 {throw exn;}
                }
              
              return moregen_clty(/* false */0,type_pairs,env,cty1[3],cty2[3]);
              }
            else
             {exit=294;}
            
           }
         
        }
      
      switch(exit)
       {case 295:return moregen_clty(/* true */1,type_pairs,env,cty1,cty2[3]);
        case 294:throw [0,Failure$1,/* [] */0];
        }
      }
    catch(exn$1)
     {var exit$1;
      
      if(exn$1[1]===Failure$1)
       {var error=exn$1[2];
        
        if(trace||error===/* [] */0)
         {throw [0,
                 Failure$1,
                 /* :: */[0,
                  /* CM_Class_type_mismatch */[2,env,cty1,cty2],
                  error]];
          }
        else
         {exit$1=284;}
        }
      else
       {exit$1=284;}
      
      switch(exit$1){case 284:throw exn$1;}
      }
    };

var
 match_class_types=
  function($staropt$star,env,pat_sch,subj_sch)
   {if($staropt$star){var trace=$staropt$star[1];}else{var trace=/* true */1;}
    
    var type_pairs=TypePairs[1](53);
    
    var old_level=current_level[1];
    
    current_level[1]=Btype["generic_level"]-1;
    var match$1=instance_class(/* [] */0,subj_sch);
    
    var subj=duplicate_class_type(match$1[2]);
    
    current_level[1]=Btype["generic_level"];
    var match$2=instance_class(/* [] */0,pat_sch);
    
    var patt=match$2[2];
    
    var sign1=signature_of_class_type(patt);
    
    var sign2=signature_of_class_type(subj);
    
    var t1=repr(sign1[1]);
    
    var t2=repr(sign2[1]);
    
    TypePairs[5](type_pairs,/* tuple */[0,t1,t2],/* () */0);
    var match$3=flatten_fields(object_fields(t1));
    
    var match$4=flatten_fields(object_fields(t2));
    
    var match$5=associate_fields(match$3[1],match$4[1]);
    
    var
     error=
      List["fold_right"]
       (function(param,err)
         {var lab=param[1];
          
          var k=Btype["field_kind_repr"](param[2]);
          
          if(typeof k==="number")
           {var err$1=/* :: */[0,/* CM_Hide_public */[10,lab],err];}
          else
           {Btype["set_kind"](k[1],/* Fabsent */1);var err$1=err;}
          
          if(Types["Concr"][3](lab,sign1[3]))
           {return err$1;}
          else
           {return /* :: */[0,/* CM_Hide_virtual */[11,"method",lab],err$1];}
          },
        match$5[2],
        /* [] */0);
    
    var
     missing_method=
      List["map"](function(param){return param[1];},match$5[3]);
    
    var
     error$1=
      Pervasives["@"]
       (List["map"]
         (function(m){return /* CM_Missing_method */[9,m];},missing_method),
        error);
    
    moregen$1(/* true */1,type_pairs,env,match$3[2],match$4[2]);
    var
     error$2=
      List["fold_right"]
       (function(param,err)
         {try
           {moregen_kind(param[2],param[4]);return err;}
          catch(exn)
           {if(exn[1]===Unify)
             {return /* :: */[0,/* CM_Public_method */[12,param[1]],err];}
            else
             {throw exn;}
            }
          },
        match$5[1],
        error$1);
    
    var
     error$3=
      Types["Vars"][11]
       (function(lab,param,err)
         {try
           {var match$6=Types["Vars"][22](lab,sign1[2]);
            
            if(param[1]===/* Mutable */1&&match$6[1]!==/* Mutable */1)
             {return /* :: */[0,/* CM_Non_mutable_value */[6,lab],err];}
            else
             {if(param[2]===/* Concrete */1&&match$6[2]!==/* Concrete */1)
               {return /* :: */[0,/* CM_Non_concrete_value */[7,lab],err];}
              else
               {return err;}
              }
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return /* :: */[0,/* CM_Missing_value */[8,lab],err];}
            else
             {throw exn;}
            }
          },
        sign2[2],
        error$2);
    
    var
     error$4=
      Types["Vars"][11]
       (function(lab,param,err)
         {if(param[2]===/* Virtual */0&&!Types["Vars"][3](lab,sign2[2]))
           {return /* :: */[0,
                    /* CM_Hide_virtual */[11,"instance variable",lab],
                    err];
            }
          else
           {return err;}
          },
        sign1[2],
        error$3);
    
    var
     error$5=
      List["fold_right"]
       (function(e,l)
         {if(List["mem"](e,missing_method))
           {return l;}
          else
           {return /* :: */[0,/* CM_Virtual_method */[14,e],l];}
          },
        Types["Concr"][20](Types["Concr"][9](sign2[3],sign1[3])),
        error$4);
    
    if(error$5)
     {var
       res=
        /* :: */[0,/* CM_Class_type_mismatch */[2,env,patt,subj],error$5];
      }
    else
     {try
       {moregen_clty(trace,type_pairs,env,patt,subj);var res=/* [] */0;}
      catch(exn){if(exn[1]===Failure$1){var res=exn[2];}else{throw exn;}}
      }
    
    current_level[1]=old_level;
    return res;
    };

var
 equal_clty=
  function(trace,type_pairs,subst,env,cty1,cty2)
   {try
     {var exit;
      
      switch(cty1[0])
       {case 0:
         var cty1$1=cty1[3];
         
         var exit$1;
         
         switch(cty2[0])
          {case 0:
            return equal_clty(/* true */1,type_pairs,subst,env,cty1$1,cty2[3]);
            
           case 1:exit$1=253;
           case 2:exit$1=253;
           }
         
         switch(exit$1)
          {case 253:
            return equal_clty(/* true */1,type_pairs,subst,env,cty1$1,cty2);
           }
         
        case 1:
         var sign1=cty1[1];
         
         switch(cty2[0])
          {case 0:exit=252;
           case 1:
            var sign2=cty2[1];
            
            var ty1=object_fields(repr(sign1[1]));
            
            var ty2=object_fields(repr(sign2[1]));
            
            var match$1=flatten_fields(ty1);
            
            var match$2=flatten_fields(ty2);
            
            var match$3=associate_fields(match$1[1],match$2[1]);
            
            List["iter"]
             (function(param)
               {try
                 {return eqtype$1
                          (/* true */1,type_pairs,subst,env,param[3],param[5]);
                  }
                catch(exn)
                 {if(exn[1]===Unify)
                   {throw [0,
                           Failure$1,
                           /* :: */[0,
                            /* CM_Meth_type_mismatch */[5,
                             param[1],
                             env,
                             expand_trace(env,exn[2])],
                            /* [] */0]];
                    }
                  else
                   {throw exn;}
                  }
                },
              match$3[1]);
            return Types["Vars"][10]
                    (function(lab,param)
                      {var match$4=Types["Vars"][22](lab,sign1[2]);
                       
                       try
                        {return eqtype$1
                                 (/* true */1,type_pairs,subst,env,match$4[3],param[3]);
                         }
                       catch(exn)
                        {if(exn[1]===Unify)
                          {throw [0,
                                  Failure$1,
                                  /* :: */[0,
                                   /* CM_Val_type_mismatch */[4,
                                    lab,
                                    env,
                                    expand_trace(env,exn[2])],
                                   /* [] */0]];
                           }
                         else
                          {throw exn;}
                         }
                       },
                     sign2[2]);
            
           case 2:exit=251;
           }
         
        case 2:
         switch(cty2[0])
          {case 0:exit=252;
           case 1:exit=251;
           case 2:
            if(CamlPrimitive["caml_string_equal"](cty1[1],cty2[1]))
             {try
               {eqtype$1(/* true */1,type_pairs,subst,env,cty1[2],cty2[2])}
              catch(exn)
               {if(exn[1]===Unify)
                 {throw [0,
                         Failure$1,
                         /* :: */[0,
                          /* CM_Parameter_mismatch */[3,env,expand_trace(env,exn[2])],
                          /* [] */0]];
                  }
                else
                 {throw exn;}
                }
              
              return equal_clty
                      (/* false */0,type_pairs,subst,env,cty1[3],cty2[3]);
              }
            else
             {exit=251;}
            
           }
         
        }
      
      switch(exit)
       {case 252:
         return equal_clty(/* true */1,type_pairs,subst,env,cty1,cty2[3]);
        case 251:
         throw [0,
                Failure$1,
                trace
                 ?/* [] */0
                 :/* :: */[0,
                   /* CM_Class_type_mismatch */[2,env,cty1,cty2],
                   /* [] */0]];
         
        }
      }
    catch(exn$1)
     {var exit$2;
      
      if(exn$1[1]===Failure$1)
       {if(trace)
         {throw [0,
                 Failure$1,
                 /* :: */[0,
                  /* CM_Class_type_mismatch */[2,env,cty1,cty2],
                  exn$1[2]]];
          }
        else
         {exit$2=241;}
        }
      else
       {exit$2=241;}
      
      switch(exit$2){case 241:throw exn$1;}
      }
    };

var
 match_class_declarations=
  function(env,patt_params,patt_type,subj_params,subj_type)
   {var type_pairs=TypePairs[1](53);
    
    var subst$1=[0,/* [] */0];
    
    var sign1=signature_of_class_type(patt_type);
    
    var sign2=signature_of_class_type(subj_type);
    
    var t1=repr(sign1[1]);
    
    var t2=repr(sign2[1]);
    
    TypePairs[5](type_pairs,/* tuple */[0,t1,t2],/* () */0);
    var match$1=flatten_fields(object_fields(t1));
    
    var match$2=flatten_fields(object_fields(t2));
    
    var match$3=associate_fields(match$1[1],match$2[1]);
    
    var
     error=
      List["fold_right"]
       (function(param,err)
         {var lab=param[1];
          
          var k=Btype["field_kind_repr"](param[2]);
          
          if(typeof k==="number")
           {var err$1=/* :: */[0,/* CM_Hide_public */[10,lab],err];}
          else
           {var err$1=err;}
          
          if(Types["Concr"][3](lab,sign1[3]))
           {return err$1;}
          else
           {return /* :: */[0,/* CM_Hide_virtual */[11,"method",lab],err$1];}
          },
        match$3[2],
        /* [] */0);
    
    var
     missing_method=
      List["map"](function(param){return param[1];},match$3[3]);
    
    var
     error$1=
      Pervasives["@"]
       (List["map"]
         (function(m){return /* CM_Missing_method */[9,m];},missing_method),
        error);
    
    eqtype$1(/* true */1,type_pairs,subst$1,env,match$1[2],match$2[2]);
    var
     error$2=
      List["fold_right"]
       (function(param,err)
         {var lab=param[1];
          
          var k1=Btype["field_kind_repr"](param[2]);
          
          var k2=Btype["field_kind_repr"](param[4]);
          
          var exit;
          
          if(typeof k1==="number")
           {if(k1!==0)
             {exit=221;}
            else
             {if(typeof k2==="number")
               {if(k2!==0){exit=221;}else{exit=220;}}
              else
               {return /* :: */[0,/* CM_Public_method */[12,lab],err];}
              }
            }
          else
           {if(typeof k2==="number")
             {if(k2!==0)
               {exit=221;}
              else
               {return /* :: */[0,/* CM_Private_method */[13,lab],err];}
              }
            else
             {exit=220;}
            }
          
          switch(exit)
           {case 221:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"typing/ctype.ml",3600,34]];
             
            case 220:return err;
            }
          },
        match$3[1],
        error$1);
    
    var
     error$3=
      Types["Vars"][11]
       (function(lab,param,err)
         {try
           {var match$4=Types["Vars"][22](lab,sign1[2]);
            
            if(param[1]===/* Mutable */1&&match$4[1]!==/* Mutable */1)
             {return /* :: */[0,/* CM_Non_mutable_value */[6,lab],err];}
            else
             {if(param[2]===/* Concrete */1&&match$4[2]!==/* Concrete */1)
               {return /* :: */[0,/* CM_Non_concrete_value */[7,lab],err];}
              else
               {return err;}
              }
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return /* :: */[0,/* CM_Missing_value */[8,lab],err];}
            else
             {throw exn;}
            }
          },
        sign2[2],
        error$2);
    
    var
     error$4=
      Types["Vars"][11]
       (function(lab,param,err)
         {if(param[2]===/* Virtual */0&&!Types["Vars"][3](lab,sign2[2]))
           {return /* :: */[0,
                    /* CM_Hide_virtual */[11,"instance variable",lab],
                    err];
            }
          else
           {return err;}
          },
        sign1[2],
        error$3);
    
    var
     error$5=
      List["fold_right"]
       (function(e,l)
         {if(List["mem"](e,missing_method))
           {return l;}
          else
           {return /* :: */[0,/* CM_Virtual_method */[14,e],l];}
          },
        Types["Concr"][20](Types["Concr"][9](sign2[3],sign1[3])),
        error$4);
    
    if(error$5)
     {return error$5;}
    else
     {try
       {var lp=List["length"](patt_params);
        
        var ls=List["length"](subj_params);
        
        if(lp!==ls)
         {throw [0,
                 Failure$1,
                 /* :: */[0,
                  /* CM_Parameter_arity_mismatch */[0,lp,ls],
                  /* [] */0]];
          }
        else
         {}
        
        List["iter2"]
         (function(p,s)
           {try
             {return eqtype$1(/* true */1,type_pairs,subst$1,env,p,s);}
            catch(exn)
             {if(exn[1]===Unify)
               {throw [0,
                       Failure$1,
                       /* :: */[0,
                        /* CM_Type_parameter_mismatch */[1,
                         env,
                         expand_trace(env,exn[2])],
                        /* [] */0]];
                }
              else
               {throw exn;}
              }
            },
          patt_params,
          subj_params);
        equal_clty
         (/* false */0,
          type_pairs,
          subst$1,
          env,
          /* Cty_signature */[1,sign1],
          /* Cty_signature */[1,sign2]);
        var
         clty_params=
          List["fold_right"]
           (function(ty,cty){return /* Cty_arrow */[2,"*",ty,cty];});
        
        return match_class_types
                ([/* Some */0,/* false */0],
                 env,
                 clty_params(patt_params,patt_type),
                 clty_params(subj_params,subj_type));
        }
      catch(exn){if(exn[1]===Failure$1){return exn[2];}else{throw exn;}}
      }
    };

var warn=[0,/* false */0];

var pred_expand=function(n){if(n%2===0&&n>0){return -1+n;}else{return n;}};

var pred_enlarge=function(n){if(n%2===1){return -1+n;}else{return n;}};

var
 collect=
  function(l)
   {return List["fold_left"]
            (function(c1,param){return Pervasives["max"](c1,param[2]);},
             /* Unchanged */0,
             l);
    };

var
 filter_visited=
  function(l)
   {if(l)
     {var match$1=l[1][1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0]){case 4:exit=204;case 8:exit=204;default:exit=203;}}
      
      switch(exit){case 204:return l;case 203:return filter_visited(l[2]);}
      }
    else
     {return /* [] */0;}
    };

var
 memq_warn=
  function(t,visited)
   {if(List["memq"](t,visited))
     {warn[1]=/* true */1;return /* true */1;}
    else
     {return /* false */0;}
    };

var
 lid_of_path=
  function($staropt$star,param)
   {if($staropt$star){var sharp=$staropt$star[1];}else{var sharp="";}
    
    switch(param[0])
     {case 0:
       return /* Lident */[0,Pervasives["^"](sharp,Ident["name"](param[1]))];
      case 1:
       return /* Ldot */[1,
               lid_of_path(/* None */0,param[1]),
               Pervasives["^"](sharp,param[2])];
       
      case 2:
       return /* Lapply */[2,
               lid_of_path(/* Some */[0,sharp],param[1]),
               lid_of_path(/* None */0,param[2])];
       
      }
    };

var
 find_cltype_for_path=
  function(env,p)
   {var match$1=Env["lookup_type"](lid_of_path([/* Some */0,"#"],p),env);
    
    var cl_abbr=match$1[2];
    
    var match$2=cl_abbr[5];
    
    if(match$2)
     {var ty=match$2[1];
      
      var match$3=repr(ty)[1];
      
      var exit;
      
      if(typeof match$3==="number")
       {switch(match$3){}}
      else
       {switch(match$3[0])
         {case 4:
           var match$4=match$3[2][1];
           
           if(match$4)
            {if(Path["same"](p,match$4[1][1]))
              {return /* tuple */[0,cl_abbr,ty];}
             else
              {exit=197;}
             }
           else
            {exit=197;}
           
          default:exit=197;}}
      
      switch(exit)
       {case 197:throw CamlPrimitive["caml_global_data"]["Not_found"];}
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/ctype.ml",3707,12]];
      }
    };

var
 has_constr_row$prime=
  function(env,t){return Btype["has_constr_row"](expand_abbrev(env,t));};

var
 build_subtype=
  function(env,visited,loops,posi,level,t)
   {var t$1=repr(t);
    
    var match$1=t$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1)
       {case 0:
         if(posi)
          {var v=newvar(/* None */0,/* () */0);
           
           return /* tuple */[0,v,/* Changed */2];
           }
         else
          {warn[1]=/* true */1;return /* tuple */[0,t$1,/* Unchanged */0];}
         
        }}
    else
     {switch(match$1[0])
       {case 0:
         if(posi)
          {try
            {var t$prime=List["assq"](t$1,loops);
             
             warn[1]=/* true */1;
             return /* tuple */[0,t$prime,/* Equiv */1];
             }
           catch(exn)
            {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
              {return /* tuple */[0,t$1,/* Unchanged */0];}
             else
              {throw exn;}
             }
           }
         else
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         
        case 1:
         if(memq_warn(t$1,visited))
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         else
          {var visited$1=/* :: */[0,t$1,visited];
           
           var
            match$2=
             build_subtype(env,visited$1,loops,!posi,level,match$1[2]);
           
           var
            match$3=
             build_subtype(env,visited$1,loops,posi,level,match$1[3]);
           
           var c=Pervasives["max"](match$2[2],match$3[2]);
           
           if(CamlPrimitive["caml_greaterthan"](c,/* Unchanged */0))
            {return /* tuple */[0,
                     newty
                      (/* Tarrow */[1,match$1[1],match$2[1],match$3[1],/* Cok */0]),
                     c];
             }
           else
            {return /* tuple */[0,t$1,/* Unchanged */0];}
           }
         
        case 2:
         if(memq_warn(t$1,visited))
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         else
          {var visited$2=/* :: */[0,t$1,visited];
           
           var
            tlist$prime=
             List["map"]
              (build_subtype(env,visited$2,loops,posi,level),match$1[1]);
           
           var c$1=collect(tlist$prime);
           
           if(CamlPrimitive["caml_greaterthan"](c$1,/* Unchanged */0))
            {return /* tuple */[0,
                     newty
                      (/* Ttuple */[2,
                        List["map"](function(prim){return prim[1];},tlist$prime)]),
                     c$1];
             }
           else
            {return /* tuple */[0,t$1,/* Unchanged */0];}
           }
         
        case 3:
         var tl=match$1[2];
         
         var p=match$1[1];
         
         if
          (level>
           0&&
           generic_abbrev(env,p)&&
           safe_abbrev(env,t$1)&&
           !has_constr_row$prime(env,t$1))
          {var t$prime$1=repr(expand_abbrev(env,t$1));
           
           var level$prime=pred_expand(level);
           
           try
            {var match$4=t$prime$1[1];
             
             var exit$1;
             
             if(typeof match$4==="number")
              {switch(match$4){}}
             else
              {switch(match$4[0])
                {case 4:
                  if(posi&&!opened_object(t$prime$1))
                   {var match$5=find_cltype_for_path(env,p);
                    
                    var
                     ty=
                      subst
                       (env,
                        current_level[1],
                        /* Public */1,
                        match$1[3],
                        /* None */0,
                        match$5[1][1],
                        tl,
                        match$5[2]);
                    
                    var ty$1=repr(ty);
                    
                    var match$6=ty$1[1];
                    
                    var exit$2;
                    
                    if(typeof match$6==="number")
                     {switch(match$6){}}
                    else
                     {switch(match$6[0])
                       {case 4:
                         var match$7=match$6[2][1];
                         
                         if(match$7)
                          {var match$8=match$7[1];
                           
                           if(Path["same"](p,match$8[1]))
                            {var match$9=/* tuple */[0,match$6[1],match$8[2]];}
                           else
                            {exit$2=160;}
                           }
                         else
                          {exit$2=160;}
                         
                        default:exit$2=160;}}
                    
                    switch(exit$2)
                     {case 160:
                       throw CamlPrimitive["caml_global_data"]["Not_found"];
                      }
                    
                    var tl1=match$9[2];
                    
                    if(List["exists"](deep_occur(ty$1),tl1))
                     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
                    else
                     {}
                    
                    ty$1[1]=[/* Tvar */0,/* None */0];
                    var t$prime$prime=newvar(/* None */0,/* () */0);
                    
                    var
                     loops$1=
                      /* :: */[0,/* tuple */[0,ty$1,t$prime$prime],loops];
                    
                    var
                     match$10=
                      build_subtype
                       (env,
                        /* :: */[0,t$prime$1,/* [] */0],
                        loops$1,
                        posi,
                        pred_enlarge(level$prime),
                        match$9[1]);
                    
                    var ty1$prime=match$10[1];
                    
                    if(Btype["is_Tvar"](t$prime$prime))
                     {}
                    else
                     {throw [0,
                             CamlPrimitive["caml_global_data"]["Assert_failure"],
                             [0,"typing/ctype.ml",3770,10]];
                      }
                    
                    if
                     (CamlPrimitive["caml_greaterthan"](match$10[2],/* Equiv */1)||
                      deep_occur(ty$1,ty1$prime))
                     {var nm=/* None */0;}
                    else
                     {var nm=/* Some */[0,/* tuple */[0,p,tl1]];}
                    
                    t$prime$prime[1]=/* Tobject */[4,ty1$prime,[0,nm]];
                    try
                     {unify_var(env,ty$1,t$1)}
                    catch(exn$1)
                     {if(exn$1[1]===Unify)
                       {throw [0,
                               CamlPrimitive["caml_global_data"]["Assert_failure"],
                               [0,"typing/ctype.ml",3774,50]];
                        }
                      else
                       {throw exn$1;}
                      }
                    
                    return /* tuple */[0,t$prime$prime,/* Changed */2];
                    }
                  else
                   {exit$1=165;}
                  
                 default:exit$1=165;}}
             
             switch(exit$1)
              {case 165:throw CamlPrimitive["caml_global_data"]["Not_found"];}
             }
           catch(exn$2)
            {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
              {var
                match$11=
                 build_subtype(env,visited,loops,posi,level$prime,t$prime$1);
               
               var c$2=match$11[2];
               
               if(CamlPrimitive["caml_greaterthan"](c$2,/* Unchanged */0))
                {return /* tuple */[0,match$11[1],c$2];}
               else
                {return /* tuple */[0,t$1,/* Unchanged */0];}
               }
             else
              {throw exn$2;}
             }
           }
         else
          {if(memq_warn(t$1,visited))
            {return /* tuple */[0,t$1,/* Unchanged */0];}
           else
            {var visited$3=/* :: */[0,t$1,visited];
             
             try
              {var decl=Env["find_type"](p,env);
               
               if
                (level===
                 0&&
                 generic_abbrev(env,p)&&
                 safe_abbrev(env,t$1)&&
                 !has_constr_row$prime(env,t$1))
                {warn[1]=/* true */1}
               else
                {}
               
               var
                tl$prime=
                 List["map2"]
                  (function(v,t)
                    {var match$12=Types["Variance"][11](v);
                     
                     var co=match$12[1];
                     
                     if(match$12[2])
                      {if(co)
                        {return /* tuple */[0,t,/* Unchanged */0];}
                       else
                        {return build_subtype(env,visited$3,loops,!posi,level,t);}
                       }
                     else
                      {if(co)
                        {return build_subtype(env,visited$3,loops,posi,level,t);}
                       else
                        {return /* tuple */[0,
                                 newvar(/* None */0,/* () */0),
                                 /* Changed */2];
                         }
                       }
                     },
                   decl[6],
                   tl);
               
               var c$3=collect(tl$prime);
               
               if(CamlPrimitive["caml_greaterthan"](c$3,/* Unchanged */0))
                {return /* tuple */[0,
                         newconstr
                          (p,List["map"](function(prim){return prim[1];},tl$prime)),
                         c$3];
                 }
               else
                {return /* tuple */[0,t$1,/* Unchanged */0];}
               }
             catch(exn$3)
              {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
                {return /* tuple */[0,t$1,/* Unchanged */0];}
               else
                {throw exn$3;}
               }
             }
           }
         
        case 4:
         var t1=match$1[1];
         
         if(memq_warn(t$1,visited)||opened_object(t1))
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         else
          {var level$prime$1=pred_enlarge(level);
           
           var
            visited$4=
             /* :: */[0,
              t$1,
              level$prime$1<level?/* [] */0:filter_visited(visited)];
           
           var
            match$12=
             build_subtype(env,visited$4,loops,posi,level$prime$1,t1);
           
           var c$4=match$12[2];
           
           if(CamlPrimitive["caml_greaterthan"](c$4,/* Unchanged */0))
            {return /* tuple */[0,
                     newty(/* Tobject */[4,match$12[1],[0,/* None */0]]),
                     c$4];
             }
           else
            {return /* tuple */[0,t$1,/* Unchanged */0];}
           }
         
        case 5:
         var match$13=build_subtype(env,visited,loops,posi,level,match$1[3]);
         
         var match$14=build_subtype(env,visited,loops,posi,level,match$1[4]);
         
         var c$5=Pervasives["max"](match$13[2],match$14[2]);
         
         if(CamlPrimitive["caml_greaterthan"](c$5,/* Unchanged */0))
          {return /* tuple */[0,
                   newty
                    (/* Tfield */[5,
                      match$1[1],
                      /* Fpresent */0,
                      match$13[1],
                      match$14[1]]),
                   c$5];
           }
         else
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         
        case 6:exit=192;
        case 7:exit=192;
        case 8:
         var row=Btype["row_repr"](match$1[1]);
         
         if(memq_warn(t$1,visited)||!Btype["static_row"](row))
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         else
          {var level$prime$2=pred_enlarge(level);
           
           var
            visited$5=
             /* :: */[0,
              t$1,
              level$prime$2<level?/* [] */0:filter_visited(visited)];
           
           var fields=filter_row_fields(/* false */0,row[1]);
           
           var
            fields$1=
             List["map"]
              (function(orig)
                {var l=orig[1];
                 
                 var match$15=Btype["row_field_repr"](orig[2]);
                 
                 var exit$3;
                 
                 if(typeof match$15==="number")
                  {switch(match$15){case 0:exit$3=178;}}
                 else
                  {switch(match$15[0])
                    {case 0:
                      var match$16=match$15[1];
                      
                      if(match$16)
                       {var
                         match$17=
                          build_subtype
                           (env,visited$5,loops,posi,level$prime$2,match$16[1]);
                        
                        var t$prime$2=match$17[1];
                        
                        if(posi&&level>0)
                         {var
                           f=
                            /* Reither */[1,
                             /* false */0,
                             /* :: */[0,t$prime$2,/* [] */0],
                             /* false */0,
                             [0,/* None */0]];
                          }
                        else
                         {var f=/* Rpresent */[0,/* Some */[0,t$prime$2]];}
                        
                        return /* tuple */[0,/* tuple */[0,l,f],match$17[2]];
                        }
                      else
                       {if(posi)
                         {return /* tuple */[0,
                                  /* tuple */[0,
                                   l,
                                   /* Reither */[1,
                                    /* true */1,
                                    /* [] */0,
                                    /* false */0,
                                    [0,/* None */0]]],
                                  /* Unchanged */0];
                          }
                        else
                         {return /* tuple */[0,orig,/* Unchanged */0];}
                        }
                      
                     case 1:exit$3=178;
                     }}
                 
                 switch(exit$3)
                  {case 178:
                    throw [0,
                           CamlPrimitive["caml_global_data"]["Assert_failure"],
                           [0,"typing/ctype.ml",3832,17]];
                    
                   }
                 },
               fields);
           
           var c$6=collect(fields$1);
           
           var
            row$1=
             /* record */[0,
              List["map"](function(prim){return prim[1];},fields$1),
              newvar(/* None */0,/* () */0),
              /* () */0,
              posi,
              /* false */0,
              CamlPrimitive["caml_greaterthan"](c$6,/* Unchanged */0)
               ?/* None */0
               :row[6]];
           
           return /* tuple */[0,newty(/* Tvariant */[8,row$1]),/* Changed */2];
           }
         
        case 9:exit=193;
        case 10:
         var match$15=build_subtype(env,visited,loops,posi,level,match$1[1]);
         
         var c$7=match$15[2];
         
         if(CamlPrimitive["caml_greaterthan"](c$7,/* Unchanged */0))
          {return /* tuple */[0,
                   newty(/* Tpoly */[10,match$15[1],match$1[2]]),
                   c$7];
           }
         else
          {return /* tuple */[0,t$1,/* Unchanged */0];}
         
        case 11:exit=193;
        }}
    
    switch(exit)
     {case 192:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",3865,6]];
       
      case 193:return /* tuple */[0,t$1,/* Unchanged */0];
      }
    };

var
 enlarge_type=
  function(env,ty)
   {warn[1]=/* false */0;
    var match$1=build_subtype(env,/* [] */0,/* [] */0,/* true */1,4,ty);
    
    return /* tuple */[0,match$1[1],warn[1]];
    };

var subtypes=TypePairs[1](17);

var
 subtype_error=
  function(env,trace)
   {throw [0,Subtype,expand_trace(env,List["rev"](trace)),/* [] */0];};

var
 included=
  function(nl1,nl2)
   {if(nl1)
     {if(nl2)
       {var nl2$prime=nl2[2];
        
        var b=nl2[1];
        
        var a=nl1[1];
        
        if(CamlPrimitive["caml_equal"](a,b))
         {return included(nl1[2],nl2$prime);}
        else
         {return CamlPrimitive["caml_greaterthan"](a,b)&&
                 included(nl1,nl2$prime);
          }
        }
      else
       {return /* false */0;}
      }
    else
     {return /* true */1;}
    };

var
 extract_assoc=
  function(nl1,nl2,tl2)
   {var exit;
    
    if(nl1)
     {if(nl2)
       {if(tl2)
         {var tl2$1=tl2[2];
          
          var nl2$1=nl2[2];
          
          if(CamlPrimitive["caml_equal"](nl1[1],nl2[1]))
           {return /* :: */[0,tl2[1],extract_assoc(nl1[2],nl2$1,tl2$1)];}
          else
           {return extract_assoc(nl1,nl2$1,tl2$1);}
          }
        else
         {exit=137;}
        }
      else
       {exit=137;}
      }
    else
     {return /* [] */0;}
    
    switch(exit)
     {case 137:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/ctype.ml",3915,9]];
       
      }
    };

var
 subtype_rec=
  function(env,trace,t1,t2,cstrs)
   {var t1$1=repr(t1);
    
    var t2$1=repr(t2);
    
    if(t1$1===t2$1)
     {return cstrs;}
    else
     {try
       {TypePairs[7](subtypes,/* tuple */[0,t1$1,t2$1]);return cstrs;}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {TypePairs[5](subtypes,/* tuple */[0,t1$1,t2$1],/* () */0);
          var match$1=t1$1[1];
          
          var match$2=t2$1[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){}}
          else
           {switch(match$1[0])
             {case 0:exit=105;
              case 1:
               var u1=match$1[3];
               
               var t1$2=match$1[2];
               
               var l1=match$1[1];
               
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=110;
                   case 1:
                    var u2=match$2[3];
                    
                    var t2$2=match$2[2];
                    
                    var l2=match$2[1];
                    
                    if
                     (CamlPrimitive["caml_string_equal"](l1,l2)||
                      Clflags["classic"][1]&&
                      !(Btype["is_optional"](l1)||Btype["is_optional"](l2)))
                     {var
                       cstrs$1=
                        subtype_rec
                         (env,
                          /* :: */[0,/* tuple */[0,t2$2,t1$2],trace],
                          t2$2,
                          t1$2,
                          cstrs);
                      
                      return subtype_rec
                              (env,/* :: */[0,/* tuple */[0,u1,u2],trace],u1,u2,cstrs$1);
                      }
                    else
                     {exit=106;}
                    
                   case 3:exit=108;
                   default:exit=106;}}
               
              case 2:
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=110;
                   case 2:
                    return subtype_list(env,trace,match$1[1],match$2[1],cstrs);
                   case 3:exit=108;
                   default:exit=106;}}
               
              case 3:
               if(match$1[2])
                {exit=110;}
               else
                {if(typeof match$2==="number")
                  {switch(match$2){}}
                 else
                  {switch(match$2[0])
                    {case 0:exit=110;
                     case 3:
                      if(match$2[2])
                       {exit=109;}
                      else
                       {if(Path["same"](match$1[1],match$2[1]))
                         {return cstrs;}
                        else
                         {exit=109;}
                        }
                      
                     default:exit=109;}}
                 }
               
              case 4:
               var f1=match$1[1];
               
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=110;
                   case 3:exit=108;
                   case 4:
                    var f2=match$2[1];
                    
                    if
                     (Btype["is_Tvar"](object_row(f1))&&
                      Btype["is_Tvar"](object_row(f2)))
                     {return /* :: */[0,
                              /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                              cstrs];
                      }
                    else
                     {return subtype_fields(env,trace,f1,f2,cstrs);}
                    
                   default:exit=106;}}
               
              case 8:
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=110;
                   case 3:exit=108;
                   case 8:
                    try
                     {return subtype_row(env,trace,match$1[1],match$2[1],cstrs);}
                    catch(exn$1)
                     {if(exn$1===Pervasives["Exit"])
                       {return /* :: */[0,
                                /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                                cstrs];
                        }
                      else
                       {throw exn$1;}
                      }
                    
                   default:exit=106;}}
               
              case 10:
               var tl1=match$1[2];
               
               var u1$1=match$1[1];
               
               var exit$1;
               
               if(tl1)
                {exit$1=111;}
               else
                {if(typeof match$2==="number")
                  {switch(match$2){}}
                 else
                  {switch(match$2[0])
                    {case 0:exit=110;
                     case 3:exit=108;
                     case 10:
                      if(match$2[2])
                       {exit$1=111;}
                      else
                       {return subtype_rec(env,trace,u1$1,match$2[1],cstrs);}
                      
                     default:exit=106;}}
                 }
               
               switch(exit$1)
                {case 111:
                  if(typeof match$2==="number")
                   {switch(match$2){}}
                  else
                   {switch(match$2[0])
                     {case 0:exit=110;
                      case 3:exit=108;
                      case 10:
                       var tl2=match$2[2];
                       
                       var u2$1=match$2[1];
                       
                       if(tl2)
                        {try
                          {return enter_poly
                                   (env,
                                    univar_pairs,
                                    u1$1,
                                    tl1,
                                    u2$1,
                                    tl2,
                                    function(t1,t2){return subtype_rec(env,trace,t1,t2,cstrs);});
                           }
                         catch(exn$2)
                          {if(exn$2[1]===Unify)
                            {return /* :: */[0,
                                     /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                                     cstrs];
                             }
                           else
                            {throw exn$2;}
                           }
                         }
                       else
                        {var
                          match$3=
                           instance_poly(/* None */0,/* false */0,tl1,u1$1);
                         
                         return subtype_rec(env,trace,match$3[2],u2$1,cstrs);
                         }
                       
                      default:exit=106;}}
                  
                 }
               
              case 11:
               var tl1$1=match$1[3];
               
               var nl1=match$1[2];
               
               var p1=match$1[1];
               
               if(typeof match$2==="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 0:exit=110;
                   case 3:exit=108;
                   case 11:
                    var tl2$1=match$2[3];
                    
                    var nl2=match$2[2];
                    
                    var p2=match$2[1];
                    
                    try
                     {var
                       ntl1=
                        complete_type_list
                         (/* None */0,
                          env,
                          nl2,
                          t1$1[2],
                          /* Mty_ident */[0,p1],
                          nl1,
                          tl1$1);
                      
                      var
                       ntl2=
                        complete_type_list
                         ([/* Some */0,/* true */1],
                          env,
                          nl1,
                          t2$1[2],
                          /* Mty_ident */[0,p2],
                          nl2,
                          tl2$1);
                      
                      var
                       cstrs$prime=
                        List["map"]
                         (function(param)
                           {return /* tuple */[0,
                                    trace,
                                    List["assoc"](param[1],ntl1),
                                    param[2],
                                    univar_pairs[1]];
                            },
                          ntl2);
                      
                      if(eq_package_path(env,p1,p2))
                       {return Pervasives["@"](cstrs$prime,cstrs);}
                      else
                       {var snap=Btype["snapshot"](/* () */0);
                        
                        try
                         {List["iter"]
                           (function(param){return unify$2(env,param[2],param[3]);},
                            cstrs$prime);
                          if(package_subtype[1](env,p1,nl1,tl1$1,p2,nl2,tl2$1))
                           {Btype["backtrack"](snap);
                            return Pervasives["@"](cstrs$prime,cstrs);
                            }
                          else
                           {throw [0,Unify,/* [] */0];}
                          }
                        catch(exn$3)
                         {if(exn$3[1]===Unify)
                           {Btype["backtrack"](snap);
                            throw CamlPrimitive["caml_global_data"]["Not_found"];
                            }
                          else
                           {throw exn$3;}
                          }
                        }
                      }
                    catch(exn$4)
                     {if(exn$4===CamlPrimitive["caml_global_data"]["Not_found"])
                       {return /* :: */[0,
                                /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                                cstrs];
                        }
                      else
                       {throw exn$4;}
                      }
                    
                   default:exit=106;}}
               
              default:exit=110;}}
          
          switch(exit)
           {case 110:
             if(typeof match$2==="number")
              {switch(match$2){}}
             else
              {switch(match$2[0]){case 0:exit=105;default:exit=109;}}
             
            case 109:
             if(typeof match$1==="number")
              {switch(match$1){}}
             else
              {switch(match$1[0])
                {case 3:
                  if(generic_abbrev(env,match$1[1])&&safe_abbrev(env,t1$1))
                   {return subtype_rec
                            (env,trace,expand_abbrev(env,t1$1),t2$1,cstrs);
                    }
                  else
                   {exit=108;}
                  
                 default:exit=108;}}
             
            case 108:
             if(typeof match$2==="number")
              {switch(match$2){}}
             else
              {switch(match$2[0])
                {case 3:
                  if(generic_abbrev(env,match$2[1])&&safe_abbrev(env,t2$1))
                   {return subtype_rec
                            (env,trace,t1$1,expand_abbrev(env,t2$1),cstrs);
                    }
                  else
                   {exit=107;}
                  
                 default:exit=107;}}
             
            case 107:
             if(typeof match$1==="number")
              {switch(match$1){}}
             else
              {switch(match$1[0])
                {case 3:
                  var p1$1=match$1[1];
                  
                  var exit$2;
                  
                  if(typeof match$2==="number")
                   {switch(match$2){}}
                  else
                   {switch(match$2[0])
                     {case 3:
                       if(Path["same"](p1$1,match$2[1]))
                        {try
                          {var decl=Env["find_type"](p1$1,env);
                           
                           return List["fold_left2"]
                                   (function(cstrs,v,param)
                                     {var t2$3=param[2];
                                      
                                      var t1$3=param[1];
                                      
                                      var match$4=Types["Variance"][11](v);
                                      
                                      var cn=match$4[2];
                                      
                                      if(match$4[1])
                                       {if(cn)
                                         {return /* :: */[0,
                                                  /* tuple */[0,
                                                   trace,
                                                   newty2(t1$3[2],/* Ttuple */[2,/* :: */[0,t1$3,/* [] */0]]),
                                                   newty2(t2$3[2],/* Ttuple */[2,/* :: */[0,t2$3,/* [] */0]]),
                                                   univar_pairs[1]],
                                                  cstrs];
                                          }
                                        else
                                         {return subtype_rec
                                                  (env,
                                                   /* :: */[0,/* tuple */[0,t1$3,t2$3],trace],
                                                   t1$3,
                                                   t2$3,
                                                   cstrs);
                                          }
                                        }
                                      else
                                       {if(cn)
                                         {return subtype_rec
                                                  (env,
                                                   /* :: */[0,/* tuple */[0,t2$3,t1$3],trace],
                                                   t2$3,
                                                   t1$3,
                                                   cstrs);
                                          }
                                        else
                                         {return cstrs;}
                                        }
                                      },
                                    cstrs,
                                    decl[6],
                                    List["combine"](match$1[2],match$2[2]));
                           }
                         catch(exn$5)
                          {if(exn$5===CamlPrimitive["caml_global_data"]["Not_found"])
                            {return /* :: */[0,
                                     /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                                     cstrs];
                             }
                           else
                            {throw exn$5;}
                           }
                         }
                       else
                        {exit$2=113;}
                       
                      default:exit$2=113;}}
                  
                  switch(exit$2)
                   {case 113:
                     if(generic_private_abbrev(env,p1$1))
                      {return subtype_rec
                               (env,trace,expand_abbrev_opt(env,t1$1),t2$1,cstrs);
                       }
                     else
                      {exit=106;}
                     
                    }
                  
                 default:exit=106;}}
             
            case 106:
             return /* :: */[0,
                     /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                     cstrs];
             
            case 105:
             return /* :: */[0,
                     /* tuple */[0,trace,t1$1,t2$1,univar_pairs[1]],
                     cstrs];
             
            }
          }
        else
         {throw exn;}
        }
      }
    };

var
 subtype_list=
  function(env,trace,tl1,tl2,cstrs)
   {if(List["length"](tl1)!==List["length"](tl2))
     {subtype_error(env,trace)}
    else
     {}
    
    return List["fold_left2"]
            (function(cstrs,t1,t2)
              {return subtype_rec
                       (env,/* :: */[0,/* tuple */[0,t1,t2],trace],t1,t2,cstrs);
               },
             cstrs,
             tl1,
             tl2);
    };

var
 subtype_fields=
  function(env,trace,ty1,ty2,cstrs)
   {var match$1=flatten_fields(ty1);
    
    var rest1=match$1[2];
    
    var match$2=flatten_fields(ty2);
    
    var rest2=match$2[2];
    
    var match$3=associate_fields(match$1[1],match$2[1]);
    
    var miss2=match$3[3];
    
    var miss1=match$3[2];
    
    if(rest2[1]===/* Tnil */0)
     {var cstrs$1=cstrs;}
    else
     {if(miss1===/* [] */0)
       {var
         cstrs$1=
          subtype_rec
           (env,
            /* :: */[0,/* tuple */[0,rest1,rest2],trace],
            rest1,
            rest2,
            cstrs);
        }
      else
       {var
         cstrs$1=
          /* :: */[0,
           /* tuple */[0,
            trace,
            build_fields(repr(ty1)[2],miss1,rest1),
            rest2,
            univar_pairs[1]],
           cstrs];
        }
      }
    
    if(miss2===/* [] */0)
     {var cstrs$2=cstrs$1;}
    else
     {var
       cstrs$2=
        /* :: */[0,
         /* tuple */[0,
          trace,
          rest1,
          build_fields(repr(ty2)[2],miss2,newvar(/* None */0,/* () */0)),
          univar_pairs[1]],
         cstrs$1];
      }
    
    return List["fold_left"]
            (function(cstrs,param)
              {var t2=param[5];
               
               var t1=param[3];
               
               return subtype_rec
                       (env,/* :: */[0,/* tuple */[0,t1,t2],trace],t1,t2,cstrs);
               },
             cstrs$2,
             match$3[1]);
    };

var
 subtype_row=
  function(env,trace,row1,row2,cstrs)
   {var row1$1=Btype["row_repr"](row1);
    
    var row2$1=Btype["row_repr"](row2);
    
    var match$1=merge_row_fields(row1$1[1],row2$1[1]);
    
    var pairs=match$1[3];
    
    var r1=match$1[1];
    
    var more1=repr(row1$1[2]);
    
    var more2=repr(row2$1[2]);
    
    var match$2=more1[1];
    
    var match$3=more2[1];
    
    var exit;
    
    if(typeof match$2==="number")
     {switch(match$2){case 0:exit=129;}}
    else
     {switch(match$2[0])
       {case 0:exit=129;
        case 3:
         if(typeof match$3==="number")
          {switch(match$3){}}
         else
          {switch(match$3[0])
            {case 3:
              if(Path["same"](match$2[1],match$3[1]))
               {return subtype_rec
                        (env,
                         /* :: */[0,/* tuple */[0,more1,more2],trace],
                         more1,
                         more2,
                         cstrs);
                }
              else
               {exit=129;}
              
             default:exit=129;}}
         
        case 9:
         if(typeof match$3==="number")
          {switch(match$3){}}
         else
          {switch(match$3[0])
            {case 9:
              if
               (CamlPrimitive["caml_equal"](row1$1[4],row2$1[4])&&
                r1===
                /* [] */0&&
                match$1[2]===
                /* [] */0)
               {var
                 cstrs$1=
                  subtype_rec
                   (env,
                    /* :: */[0,/* tuple */[0,more1,more2],trace],
                    more1,
                    more2,
                    cstrs);
                
                return List["fold_left"]
                        (function(cstrs,param)
                          {var match$4=Btype["row_field_repr"](param[2]);
                           
                           var match$5=Btype["row_field_repr"](param[3]);
                           
                           var exit$1;
                           
                           if(typeof match$4==="number")
                            {switch(match$4)
                              {case 0:
                                if(typeof match$5==="number"){exit$1=124;}else{exit$1=126;}
                               }}
                           else
                            {switch(match$4[0])
                              {case 0:
                                var match$6=match$4[1];
                                
                                if(match$6)
                                 {if(typeof match$5==="number")
                                   {switch(match$5){case 0:exit$1=126;}}
                                  else
                                   {switch(match$5[0])
                                     {case 0:
                                       var match$7=match$5[1];
                                       
                                       if(match$7)
                                        {var t1=match$6[1];var t2=match$7[1];exit$1=125;}
                                       else
                                        {exit$1=126;}
                                       
                                      case 1:exit$1=126;
                                      }}
                                  }
                                else
                                 {if(typeof match$5==="number")
                                   {switch(match$5){case 0:exit$1=126;}}
                                  else
                                   {switch(match$5[0])
                                     {case 0:if(match$5[1]){exit$1=126;}else{exit$1=124;}
                                      case 1:exit$1=126;
                                      }}
                                  }
                                
                               case 1:
                                if(match$4[1]!==0)
                                 {if(match$4[2])
                                   {exit$1=126;}
                                  else
                                   {if(typeof match$5==="number")
                                     {switch(match$5){case 0:exit$1=126;}}
                                    else
                                     {switch(match$5[0])
                                       {case 0:exit$1=126;
                                        case 1:
                                         if(match$5[1]!==0)
                                          {if(match$5[2]){exit$1=126;}else{exit$1=124;}}
                                         else
                                          {exit$1=126;}
                                         
                                        }}
                                    }
                                  }
                                else
                                 {var match$8=match$4[2];
                                  
                                  if(match$8)
                                   {if(match$8[2])
                                     {exit$1=126;}
                                    else
                                     {if(typeof match$5==="number")
                                       {switch(match$5){case 0:exit$1=126;}}
                                      else
                                       {switch(match$5[0])
                                         {case 0:exit$1=126;
                                          case 1:
                                           if(match$5[1]!==0)
                                            {exit$1=126;}
                                           else
                                            {var match$9=match$5[2];
                                             
                                             if(match$9)
                                              {if(match$9[2])
                                                {exit$1=126;}
                                               else
                                                {var t1=match$8[1];var t2=match$9[1];exit$1=125;}
                                               }
                                             else
                                              {exit$1=126;}
                                             }
                                           
                                          }}
                                      }
                                    }
                                  else
                                   {exit$1=126;}
                                  }
                                
                               }}
                           
                           switch(exit$1)
                            {case 126:throw Pervasives["Exit"];
                             case 124:return cstrs;
                             case 125:
                              return subtype_rec
                                      (env,/* :: */[0,/* tuple */[0,t1,t2],trace],t1,t2,cstrs);
                              
                             }
                           },
                         cstrs$1,
                         pairs);
                }
              else
               {exit=128;}
              
             default:exit=128;}}
         
        default:exit=128;}}
    
    switch(exit)
     {case 129:
       var exit$1;
       
       if(typeof match$3==="number")
        {switch(match$3){case 0:exit$1=131;}}
       else
        {switch(match$3[0])
          {case 0:exit$1=131;case 3:exit$1=131;default:exit=128;}}
       
       switch(exit$1)
        {case 131:
          if(row1$1[4]&&r1===/* [] */0)
           {return List["fold_left"]
                    (function(cstrs,param)
                      {var match$4=Btype["row_field_repr"](param[2]);
                       
                       var match$5=Btype["row_field_repr"](param[3]);
                       
                       var exit$2;
                       
                       if(typeof match$4==="number")
                        {switch(match$4){case 0:return cstrs;}}
                       else
                        {switch(match$4[0])
                          {case 0:
                            var match$6=match$4[1];
                            
                            if(match$6)
                             {var t1=match$6[1];
                              
                              if(typeof match$5==="number")
                               {switch(match$5){case 0:exit$2=122;}}
                              else
                               {switch(match$5[0])
                                 {case 0:
                                   var match$7=match$5[1];
                                   
                                   if(match$7)
                                    {var t2=match$7[1];
                                     
                                     return subtype_rec
                                             (env,/* :: */[0,/* tuple */[0,t1,t2],trace],t1,t2,cstrs);
                                     }
                                   else
                                    {exit$2=122;}
                                   
                                  case 1:exit$2=122;
                                  }}
                              }
                            else
                             {exit$2=123;}
                            
                           case 1:
                            if(match$4[1]!==0)
                             {exit$2=123;}
                            else
                             {var match$8=match$4[2];
                              
                              if(match$8)
                               {var t1$1=match$8[1];
                                
                                if(typeof match$5==="number")
                                 {switch(match$5){case 0:exit$2=122;}}
                                else
                                 {switch(match$5[0])
                                   {case 0:
                                     var match$9=match$5[1];
                                     
                                     if(match$9)
                                      {var t2$1=match$9[1];
                                       
                                       return subtype_rec
                                               (env,
                                                /* :: */[0,/* tuple */[0,t1$1,t2$1],trace],
                                                t1$1,
                                                t2$1,
                                                cstrs);
                                       }
                                     else
                                      {exit$2=122;}
                                     
                                    case 1:exit$2=122;
                                    }}
                                }
                              else
                               {exit$2=122;}
                              }
                            
                           }}
                       
                       switch(exit$2)
                        {case 123:
                          if(typeof match$5==="number")
                           {switch(match$5){case 0:exit$2=122;}}
                          else
                           {switch(match$5[0])
                             {case 0:if(match$5[1]){exit$2=122;}else{return cstrs;}
                              case 1:exit$2=122;
                              }}
                          
                         case 122:throw Pervasives["Exit"];
                         }
                       },
                     cstrs,
                     pairs);
            }
          else
           {exit=128;}
          
         }
       
      case 128:throw Pervasives["Exit"];
      }
    };

var
 subtype=
  function(env,ty1,ty2)
   {TypePairs[2](subtypes);
    univar_pairs[1]=/* [] */0;
    var
     cstrs=
      subtype_rec
       (env,/* :: */[0,/* tuple */[0,ty1,ty2],/* [] */0],ty1,ty2,/* [] */0);
    
    TypePairs[2](subtypes);
    return function(param)
     {return List["iter"]
              (function(param$1)
                {try
                  {return unify_pairs$1
                           ([0,env],param$1[2],param$1[3],param$1[4]);
                   }
                 catch(exn)
                  {if(exn[1]===Unify)
                    {throw [0,
                            Subtype,
                            expand_trace(env,List["rev"](param$1[1])),
                            List["tl"](List["tl"](exn[2]))];
                     }
                   else
                    {throw exn;}
                   }
                 },
               List["rev"](cstrs));
      };
    };

var
 unalias_object=
  function(ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){case 0:exit=86;}}
    else
     {switch(match$1[0])
       {case 0:exit=86;
        case 3:return newvar2(/* None */0,ty$1[2]);
        case 5:
         return newty2
                 (ty$1[2],
                  /* Tfield */[5,
                   match$1[1],
                   match$1[2],
                   match$1[3],
                   unalias_object(match$1[4])]);
         
        case 9:return ty$1;
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/ctype.ml",4129,6]];
         }}
    
    switch(exit){case 86:return newty2(ty$1[2],ty$1[1]);}
    };

var
 unalias=
  function(ty)
   {var ty$1=repr(ty);
    
    var match$1=ty$1[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:exit=82;
        case 4:
         var ty$2=match$1[1];
         
         return newty2
                 (ty$2[2],/* Tobject */[4,unalias_object(ty$2),match$1[2]]);
         
        case 8:
         var row=Btype["row_repr"](match$1[1]);
         
         var more=row[2];
         
         var newrecord=/* unknown */"duprecord regular 6";
         
         return newty2
                 (ty$1[2],
                  /* Tvariant */[8,
                   (newrecord[2]=newty2(more[2],more[1]),newrecord)]);
         
        case 9:exit=82;
        default:exit=83;}}
    
    switch(exit){case 83:return newty2(ty$1[2],ty$1[1]);case 82:return ty$1;}
    };

var
 arity=
  function(ty)
   {var match$1=repr(ty)[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 1:return 1+arity(match$1[3]);default:exit=79;}}
    
    switch(exit){case 79:return 0;}
    };

var
 cyclic_abbrev=
  function(env,id,ty)
   {var
     check_cycle=
      function(seen,ty)
       {var ty$1=repr(ty);
        
        var match$1=ty$1[1];
        
        var exit;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 3:
             var $js;
             try
              {$js=
               check_cycle(/* :: */[0,ty$1,seen],expand_abbrev_opt(env,ty$1));
               }
             catch(exn)
              {if(exn===Cannot_expand)
                {$js=/* false */0;}
               else
                {if(exn[1]===Unify){$js=/* true */1;}else{throw exn;}}
               }
             return CamlPrimitive["caml_equal"](match$1[1],/* Pident */[0,id])||
                    List["memq"](ty$1,seen)||
                    $js;
             
            default:exit=76;}}
        
        switch(exit){case 76:return /* false */0;}
        };
    
    return check_cycle(/* [] */0,ty);
    };

var
 normalize_type_rec=
  function(env,visited,ty)
   {var ty$1=repr(ty);
    
    if(!Btype["TypeSet"][3](ty$1,visited[1]))
     {visited[1]=Btype["TypeSet"][4](ty$1,visited[1]);
      var match$1=ty$1[1];
      
      var exit;
      
      if(typeof match$1==="number")
       {switch(match$1){}}
      else
       {switch(match$1[0])
         {case 4:
           var nm=match$1[2];
           
           var match$2=nm[1];
           
           if(match$2)
            {var match$3=match$2[1];
             
             var match$4=match$3[2];
             
             if(match$4)
              {var l=match$4[2];
               
               var v=match$4[1];
               
               var n=match$3[1];
               
               if(deep_occur(ty$1,Btype["newgenty"](/* Ttuple */[2,l])))
                {Btype["set_name"](nm,/* None */0)}
               else
                {var v$prime=repr(v);
                 
                 var match$5=v$prime[1];
                 
                 var exit$1;
                 
                 if(typeof match$5==="number")
                  {switch(match$5)
                    {case 0:
                      Btype["log_type"](ty$1),
                      ty$1[1]=
                      /* Tconstr */[3,n,l,[0,/* Mnil */0]]
                     }}
                 else
                  {switch(match$5[0])
                    {case 0:exit$1=68;
                     case 9:exit$1=68;
                     default:Btype["set_name"](nm,/* None */0)}}
                 
                 switch(exit$1)
                  {case 68:
                    if(v$prime!==v)
                     {Btype["set_name"]
                       (nm,/* Some */[0,/* tuple */[0,n,/* :: */[0,v$prime,l]]])}
                    else
                     {}
                    
                   }
                 }
               }
             else
              {Misc["fatal_error"]("Ctype.normalize_type_rec")}
             }
           else
            {}
           
           var fi=repr(match$1[1]);
           
           if(fi[2]<Btype["lowest_level"])
            {}
           else
            {var match$6=flatten_fields(fi);
             
             var fi$prime=build_fields(fi[2],match$6[1],match$6[2]);
             
             Btype["log_type"](ty$1),fi[1]=fi$prime[1]}
           
          case 8:
           var row=Btype["row_repr"](match$1[1]);
           
           var
            fields=
             List["map"]
              (function(param)
                {var f0=param[2];
                 
                 var f=Btype["row_field_repr"](f0);
                 
                 var exit$2;
                 
                 var $js;
                 if(typeof f==="number")
                  {switch(f){case 0:exit$2=61;}}
                 else
                  {switch(f[0])
                    {case 0:exit$2=61;
                     case 1:
                      var match$7=f[2];
                      
                      if(match$7)
                       {var tyl=match$7[2];
                        
                        if(tyl)
                         {var
                           tyl$prime=
                            List["fold_left"]
                             (function(tyl,ty)
                               {if
                                 (List["exists"]
                                   (function(ty$prime)
                                     {return equal$1
                                              (env,
                                               /* false */0,
                                               /* :: */[0,ty,/* [] */0],
                                               /* :: */[0,ty$prime,/* [] */0]);
                                      },
                                    tyl))
                                 {return tyl;}
                                else
                                 {return /* :: */[0,ty,tyl];}
                                },
                              /* :: */[0,match$7[1],/* [] */0],
                              tyl);
                          
                          if(f!==f0||List["length"](tyl$prime)<List["length"](tyl))
                           {$js=/* Reither */[1,f[1],List["rev"](tyl$prime),f[3],f[4]];
                            }
                          else
                           {$js=f;}
                          }
                        else
                         {exit$2=61;}
                        }
                      else
                       {exit$2=61;}
                      
                     }}
                 
                 var $js$1;
                 switch(exit$2){case 61:$js$1=f;}
                 return /* tuple */[0,param[1],$js$1];
                 },
               row[1]);
           
           var
            fields$1=
             List["sort"]
              (function(param,param$1)
                {return CamlPrimitive["caml_string_compare"]
                         (param[1],param$1[1]);
                 },
               List["filter"]
                (function(param){return param[2]!==/* Rabsent */0;},fields));
           
           Btype["log_type"](ty$1);
           var newrecord=/* unknown */"duprecord regular 6";
           
           ty$1[1]=/* Tvariant */[8,(newrecord[1]=fields$1,newrecord)];
          default:exit=72;}}
      
      switch(exit){case 72:}
      
      return Btype["iter_type_expr"](normalize_type_rec(env,visited),ty$1);
      }
    else
     {return 0;}
    };

var
 normalize_type=
  function(env,ty){return normalize_type_rec(env,[0,Btype["TypeSet"][1]],ty);};

var nondep_hash=Btype["TypeHash"][1](47);

var nondep_variants=Btype["TypeHash"][1](17);

var
 clear_hash=
  function(param)
   {Btype["TypeHash"][2](nondep_hash);
    return Btype["TypeHash"][2](nondep_variants);
    };

var
 nondep_type_rec=
  function(env,id,ty)
   {var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1==="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:exit=53;
        case 6:return nondep_type_rec(env,id,match$1[1]);
        case 9:exit=53;
        default:exit=54;}}
    
    switch(exit)
     {case 54:
       try
        {return Btype["TypeHash"][7](nondep_hash,ty);}
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {var ty$prime=Btype["newgenvar"](/* None */0,/* () */0);
           
           Btype["TypeHash"][5](nondep_hash,ty,ty$prime);
           var match$2=ty[1];
           
           var exit$1;
           
           var $js;
           if(typeof match$2==="number")
            {switch(match$2){}}
           else
            {switch(match$2[0])
              {case 3:
                var p=match$2[1];
                
                if(Path["isfree"](id,p))
                 {try
                   {$js=
                    /* Tlink */[6,
                     nondep_type_rec
                      (env,id,expand_abbrev(env,newty2(ty[2],ty[1])))];
                    }
                  catch(exn$1)
                   {var exit$2;
                    
                    if(exn$1===Cannot_expand)
                     {exit$2=39;}
                    else
                     {if(exn$1[1]===Unify){exit$2=39;}else{throw exn$1;}}
                    
                    switch(exit$2)
                     {case 39:
                       throw CamlPrimitive["caml_global_data"]["Not_found"];
                      }
                    }
                  }
                else
                 {$js=
                  /* Tconstr */[3,
                   p,
                   List["map"](nondep_type_rec(env,id),match$2[2]),
                   [0,/* Mnil */0]];
                  }
                
               case 4:
                var match$3=match$2[2][1];
                
                if(match$3)
                 {var match$4=match$3[1];
                  
                  var p$1=match$4[1];
                  
                  if(Path["isfree"](id,p$1))
                   {var $js$1=/* None */0;}
                  else
                   {var
                     $js$1=
                      /* Some */[0,
                       /* tuple */[0,
                        p$1,
                        List["map"](nondep_type_rec(env,id),match$4[2])]];
                    }
                  }
                else
                 {var $js$1=/* None */0;}
                $js=
                /* Tobject */[4,nondep_type_rec(env,id,match$2[1]),[0,$js$1]];
                
               case 8:
                var row=Btype["row_repr"](match$2[1]);
                
                var more=repr(row[2]);
                
                try
                 {var ty2=Btype["TypeHash"][7](nondep_variants,more);
                  
                  Btype["TypeHash"][5](nondep_hash,ty,ty2);
                  $js=/* Tlink */[6,ty2];
                  }
                catch(exn$2)
                 {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
                   {Btype["TypeHash"][5](nondep_variants,more,ty$prime);
                    var $$static=Btype["static_row"](row);
                    
                    if($$static)
                     {var more$prime=Btype["newgenty"](/* Tnil */0);}
                    else
                     {var more$prime=more;}
                    
                    var
                     row$1=
                      Btype["copy_row"]
                       (nondep_type_rec(env,id),
                        /* true */1,
                        row,
                        /* true */1,
                        more$prime);
                    
                    var match$5=row$1[6];
                    
                    var exit$3;
                    
                    if(match$5)
                     {if(Path["isfree"](id,match$5[1][1]))
                       {var newrecord=/* unknown */"duprecord regular 6";
                        
                        $js=/* Tvariant */[8,(newrecord[6]=/* None */0,newrecord)];
                        }
                      else
                       {exit$3=42;}
                      }
                    else
                     {exit$3=42;}
                    
                    switch(exit$3){case 42:$js=/* Tvariant */[8,row$1];}
                    }
                  else
                   {throw exn$2;}
                  }
                
               case 11:
                var p$2=match$2[1];
                
                if(Path["isfree"](id,p$2))
                 {var p$prime=normalize_package_path(env,p$2);
                  
                  if(Path["isfree"](id,p$prime))
                   {throw CamlPrimitive["caml_global_data"]["Not_found"];}
                  else
                   {}
                  
                  $js=
                  /* Tpackage */[11,
                   p$prime,
                   match$2[2],
                   List["map"](nondep_type_rec(env,id),match$2[3])];
                  }
                else
                 {exit$1=50;}
                
               default:exit$1=50;}}
           
           var $js$2;
           switch(exit$1)
            {case 50:
              $js$2=
              Btype["copy_type_desc"]
               (/* None */0,nondep_type_rec(env,id),ty[1]);
              
             }
           ty$prime[1]=$js$2;
           return ty$prime;
           }
         else
          {throw exn;}
         }
       
      case 53:return ty;
      }
    };

var
 nondep_type=
  function(env,id,ty)
   {try
     {var ty$prime=nondep_type_rec(env,id,ty);
      
      clear_hash(/* () */0);
      return ty$prime;
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {clear_hash(/* () */0);
        throw CamlPrimitive["caml_global_data"]["Not_found"];
        }
      else
       {throw exn;}
      }
    };

var match$1=(nondep_type$prime[1]=nondep_type,0);

var
 unroll_abbrev=
  function(id,tl,ty)
   {var ty$1=repr(ty);
    
    var path=/* Pident */[0,id];
    
    if
     (Btype["is_Tvar"](ty$1)||
      List["exists"](deep_occur(ty$1),tl)||
      is_object_type(path))
     {return ty$1;}
    else
     {var ty$prime=newty2(ty$1[2],ty$1[1]);
      
      Btype["link_type"]
       (ty$1,newty2(ty$1[2],/* Tconstr */[3,path,tl,[0,/* Mnil */0]]));
      return ty$prime;
      }
    };

var
 nondep_type_decl=
  function(env,mid,id,is_covariant,decl)
   {try
     {var params=List["map"](nondep_type_rec(env,mid),decl[1]);
      
      try
       {var match$2=decl[3];
        
        if(typeof match$2==="number")
         {switch(match$2)
           {case 0:var tk=/* Type_abstract */0;
            case 1:var tk=/* Type_open */1;
            }}
        else
         {switch(match$2[0])
           {case 0:
             var
              tk=
               /* Type_record */[0,
                List["map"]
                 (function(l)
                   {return /* record */[0,
                            l[1],
                            l[2],
                            nondep_type_rec(env,mid,l[3]),
                            l[4],
                            l[5]];
                    },
                  match$2[1]),
                match$2[2]];
             
            case 1:
             var
              tk=
               /* Type_variant */[1,
                List["map"]
                 (function(c)
                   {return /* record */[0,
                            c[1],
                            List["map"](nondep_type_rec(env,mid),c[2]),
                            Misc["may_map"](nondep_type_rec(env,mid),c[3]),
                            c[4],
                            c[5]];
                    },
                  match$2[1])];
             
            }}
        }
      catch(exn)
       {var exit;
        
        if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {if(is_covariant){var tk=/* Type_abstract */0;}else{exit=26;}}
        else
         {exit=26;}
        
        switch(exit){case 26:throw exn;}
        }
      
      try
       {var match$3=decl[5];
        
        if(match$3)
         {var
           tm=
            /* Some */[0,
             unroll_abbrev(id,params,nondep_type_rec(env,mid,match$3[1]))];
          }
        else
         {var tm=/* None */0;}
        }
      catch(exn$1)
       {var exit$1;
        
        if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
         {if(is_covariant){var tm=/* None */0;}else{exit$1=24;}}
        else
         {exit$1=24;}
        
        switch(exit$1){case 24:throw exn$1;}
        }
      
      clear_hash(/* () */0);
      var exit$2;
      
      if(tm)
       {if(Btype["has_constr_row"](tm[1]))
         {var priv=/* Private */0;}
        else
         {exit$2=22;}
        }
      else
       {exit$2=22;}
      
      switch(exit$2){case 22:var priv=decl[4];}
      
      return /* record */[0,
              params,
              decl[2],
              tk,
              priv,
              tm,
              decl[6],
              /* None */0,
              decl[8],
              decl[9]];
      }
    catch(exn$2)
     {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
       {clear_hash(/* () */0);
        throw CamlPrimitive["caml_global_data"]["Not_found"];
        }
      else
       {throw exn$2;}
      }
    };

var
 nondep_extension_constructor=
  function(env,mid,ext)
   {try
     {if(Path["isfree"](mid,ext[1]))
       {var
         ty=
          Btype["newgenty"](/* Tconstr */[3,ext[1],ext[2],[0,/* Mnil */0]]);
        
        var ty$prime=nondep_type_rec(env,mid,ty);
        
        var match$2=repr(ty$prime)[1];
        
        var exit;
        
        if(typeof match$2==="number")
         {switch(match$2){}}
        else
         {switch(match$2[0])
           {case 3:var match$3=/* tuple */[0,match$2[1],match$2[2]];
            default:exit=16;}}
        
        switch(exit)
         {case 16:throw CamlPrimitive["caml_global_data"]["Not_found"];}
        }
      else
       {var type_params=List["map"](nondep_type_rec(env,mid),ext[2]);
        
        var match$3=/* tuple */[0,ext[1],type_params];
        }
      
      var args=List["map"](nondep_type_rec(env,mid),ext[3]);
      
      var ret_type=Misc["may_map"](nondep_type_rec(env,mid),ext[4]);
      
      clear_hash(/* () */0);
      return /* record */[0,
              match$3[1],
              match$3[2],
              args,
              ret_type,
              ext[5],
              ext[6],
              ext[7]];
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {clear_hash(/* () */0);
        throw CamlPrimitive["caml_global_data"]["Not_found"];
        }
      else
       {throw exn;}
      }
    };

var
 nondep_class_signature=
  function(env,id,sign)
   {return /* record */[0,
            nondep_type_rec(env,id,sign[1]),
            Types["Vars"][23]
             (function(param)
               {return /* tuple */[0,
                        param[1],
                        param[2],
                        nondep_type_rec(env,id,param[3])];
                },
              sign[2]),
            sign[3],
            List["map"]
             (function(param)
               {return /* tuple */[0,
                        param[1],
                        List["map"](nondep_type_rec(env,id),param[2])];
                },
              sign[4])];
    };

var
 nondep_class_type=
  function(env,id,param)
   {switch(param[0])
     {case 0:
       var cty=param[3];
       
       var p=param[1];
       
       if(Path["isfree"](id,p))
        {return nondep_class_type(env,id,cty);}
       else
        {return /* Cty_constr */[0,
                 p,
                 List["map"](nondep_type_rec(env,id),param[2]),
                 nondep_class_type(env,id,cty)];
         }
       
      case 1:
       return /* Cty_signature */[1,nondep_class_signature(env,id,param[1])];
      case 2:
       return /* Cty_arrow */[2,
               param[1],
               nondep_type_rec(env,id,param[2]),
               nondep_class_type(env,id,param[3])];
       
      }
    };

var
 nondep_class_declaration=
  function(env,id,decl)
   {if(!Path["isfree"](id,decl[3]))
     {}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/ctype.ml",4449,2]];
      }
    
    var match$2=decl[4];
    
    var
     decl$1=
      /* record */[0,
       List["map"](nondep_type_rec(env,id),decl[1]),
       nondep_class_type(env,id,decl[2]),
       decl[3],
       match$2?/* Some */[0,nondep_type_rec(env,id,match$2[1])]:/* None */0,
       decl[5],
       decl[6],
       decl[7]];
    
    clear_hash(/* () */0);
    return decl$1;
    };

var
 nondep_cltype_declaration=
  function(env,id,decl)
   {if(!Path["isfree"](id,decl[3]))
     {}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/ctype.ml",4468,2]];
      }
    
    var
     decl$1=
      /* record */[0,
       List["map"](nondep_type_rec(env,id),decl[1]),
       nondep_class_type(env,id,decl[2]),
       decl[3],
       decl[4],
       decl[5],
       decl[6]];
    
    clear_hash(/* () */0);
    return decl$1;
    };

var
 collapse_conj=
  function(env,visited,ty)
   {var ty$1=repr(ty);
    
    if(List["memq"](ty$1,visited))
     {return /* () */0;}
    else
     {var visited$1=/* :: */[0,ty$1,visited];
      
      var match$2=ty$1[1];
      
      var exit;
      
      if(typeof match$2==="number")
       {switch(match$2){}}
      else
       {switch(match$2[0])
         {case 8:
           var row=Btype["row_repr"](match$2[1]);
           
           List["iter"]
            (function(param)
              {var match$3=Btype["row_field_repr"](param[2]);
               
               var exit$1;
               
               if(typeof match$3==="number")
                {switch(match$3){case 0:exit$1=2;}}
               else
                {switch(match$3[0])
                  {case 0:exit$1=2;
                   case 1:
                    var match$4=match$3[2];
                    
                    if(match$4)
                     {var tl=match$4[2];
                      
                      if(tl)
                       {var t1=match$4[1];
                        
                        List["iter"](unify$2(env,t1),tl);
                        return Btype["set_row_field"]
                                (match$3[4],
                                 /* Reither */[1,
                                  match$3[1],
                                  /* :: */[0,t1,/* [] */0],
                                  match$3[3],
                                  [0,/* None */0]]);
                        }
                      else
                       {exit$1=2;}
                      }
                    else
                     {exit$1=2;}
                    
                   }}
               
               switch(exit$1){case 2:return /* () */0;}
               },
             row[1]);
           return Btype["iter_row"](collapse_conj(env,visited$1),row);
           
          default:exit=4;}}
      
      switch(exit)
       {case 4:
         return Btype["iter_type_expr"](collapse_conj(env,visited$1),ty$1);
        }
      }
    };

var
 collapse_conj_params=
  function(env,params)
   {return List["iter"](collapse_conj(env,/* [] */0),params);};

module["exports"]=
{"Unify":Unify,
 "Tags":Tags,
 "Subtype":Subtype,
 "Cannot_expand":Cannot_expand,
 "Cannot_apply":Cannot_apply,
 "Recursive_abbrev":Recursive_abbrev,
 "Unification_recursive_abbrev":Unification_recursive_abbrev,
 "init_def":init_def,
 "begin_def":begin_def,
 "end_def":end_def,
 "begin_class_def":begin_class_def,
 "raise_nongen_level":raise_nongen_level,
 "reset_global_level":reset_global_level,
 "increase_global_level":increase_global_level,
 "restore_global_level":restore_global_level,
 "newty":newty,
 "newvar":newvar,
 "newvar2":newvar2,
 "new_global_var":new_global_var,
 "newobj":newobj,
 "newconstr":newconstr,
 "none":none,
 "repr":repr,
 "object_fields":object_fields,
 "flatten_fields":flatten_fields,
 "associate_fields":associate_fields,
 "opened_object":opened_object,
 "close_object":close_object,
 "row_variable":row_variable,
 "set_object_name":set_object_name,
 "remove_object_name":remove_object_name,
 "hide_private_methods":hide_private_methods,
 "find_cltype_for_path":find_cltype_for_path,
 "lid_of_path":lid_of_path,
 "sort_row_fields":sort_row_fields,
 "merge_row_fields":merge_row_fields,
 "filter_row_fields":filter_row_fields,
 "generalize":generalize,
 "iterative_generalization":iterative_generalization,
 "generalize_expansive":generalize_expansive$1,
 "generalize_global":generalize_global,
 "generalize_structure":generalize_structure$2,
 "generalize_spine":generalize_spine,
 "correct_levels":correct_levels,
 "limited_generalize":limited_generalize,
 "instance":instance,
 "instance_def":instance_def,
 "instance_list":instance_list,
 "instance_constructor":instance_constructor,
 "instance_parameterized_type":instance_parameterized_type,
 "instance_parameterized_type_2":instance_parameterized_type_2,
 "instance_declaration":instance_declaration,
 "instance_class":instance_class,
 "instance_poly":instance_poly,
 "instance_label":instance_label,
 "apply":apply,
 "expand_head_once":expand_head_once,
 "expand_head":expand_head,
 "try_expand_once_opt":try_expand_once_opt,
 "expand_head_opt":expand_head_opt,
 "full_expand":full_expand,
 "extract_concrete_typedecl":extract_concrete_typedecl,
 "enforce_constraints":enforce_constraints,
 "unify":unify$2,
 "unify_gadt":unify_gadt,
 "unify_var":unify_var,
 "filter_arrow":filter_arrow,
 "filter_method":filter_method,
 "check_filter_method":check_filter_method,
 "occur_in":occur_in,
 "deep_occur":deep_occur,
 "filter_self_method":filter_self_method,
 "moregeneral":moregeneral,
 "rigidify":rigidify,
 "all_distinct_vars":all_distinct_vars,
 "matches":matches,
 "match_class_types":match_class_types,
 "equal":equal$1,
 "match_class_declarations":match_class_declarations,
 "enlarge_type":enlarge_type,
 "subtype":subtype,
 "nondep_type":nondep_type,
 "nondep_type_decl":nondep_type_decl,
 "nondep_extension_constructor":nondep_extension_constructor,
 "nondep_class_declaration":nondep_class_declaration,
 "nondep_cltype_declaration":nondep_cltype_declaration,
 "cyclic_abbrev":cyclic_abbrev,
 "is_contractive":is_contractive,
 "normalize_type":normalize_type,
 "closed_schema":closed_schema,
 "free_variables":free_variables$1,
 "closed_type_decl":closed_type_decl,
 "closed_extension_constructor":closed_extension_constructor,
 "closed_class":closed_class,
 "unalias":unalias,
 "signature_of_class_type":signature_of_class_type,
 "self_type":self_type,
 "class_type_arity":class_type_arity,
 "arity":arity,
 "collapse_conj_params":collapse_conj_params,
 "get_current_level":get_current_level,
 "wrap_trace_gadt_instances":wrap_trace_gadt_instances,
 "package_subtype":package_subtype};

