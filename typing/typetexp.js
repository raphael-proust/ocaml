// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var $$String=require("./string.js");
var Printtyp=require("./printtyp.js");
var Warnings=require("./warnings.js");
var Typedtree=require("./typedtree.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Btype=require("./btype.js");
var Arg=require("./arg.js");
var Env=require("./env.js");
var Clflags=require("./clflags.js");
var Syntaxerr=require("./syntaxerr.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Path=require("./path.js");
var Longident=require("./longident.js");
var Location=require("./location.js");
var Tbl=require("./tbl.js");
var Hashtbl=require("./hashtbl.js");
var Ast_mapper=require("./ast_mapper.js");
var Ast_helper=require("./ast_helper.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Already_bound=
  CamlPrimitive["caml_set_oo_id"]([248,"Typetexp.Already_bound",0]);

var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Typetexp.Error",0]);

var
 Error_forward=
  CamlPrimitive["caml_set_oo_id"]([248,"Typetexp.Error_forward",0]);

var
 string_of_cst=
  function(param)
   {switch(param[0])
     {case 2:return /* Some */[0,param[1]];default:return /* None */0;}
    };

var
 string_of_payload=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:
       var match=param[1];
       
       if(match)
        {var match$1=match[1][1];
         
         switch(match$1[0])
          {case 0:
            var match$2=match$1[1][1];
            
            switch(match$2[0])
             {case 1:
               if(match[2]){exit=234;}else{return string_of_cst(match$2[1]);}
              default:exit=234;}
            
           default:exit=234;}
         }
       else
        {exit=234;}
       
      case 1:exit=234;
      case 2:exit=234;
      }
    
    switch(exit){case 234:return /* None */0;}
    };

var
 error_of_extension=
  function(ext)
   {var match=ext[1];
    
    var txt=match[1];
    
    var exit;
    
    switch(txt)
     {case "error":exit=232;case "ocaml.error":exit=232;default:exit=233;}
    
    switch(exit)
     {case 233:
       return Location["errorf"]
               (/* Some */[0,match[2]],
                /* None */0,
                /* None */0,
                [/* Format */0,
                 [/* String_literal */11,
                  "Uninterpreted extension '",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,"'.",/* End_of_format */0]]],
                 "Uninterpreted extension '%s'."],
                txt);
       
      case 232:
       var p=ext[2];
       
       var loc=match[2];
       
       var
        sub_from=
         function(inner)
          {if(inner)
            {var match$1=inner[1][1];
             
             switch(match$1[0])
              {case 14:
                return /* :: */[0,
                        error_of_extension(match$1[1]),
                        sub_from(inner[2])];
                
               default:
                return /* :: */[0,
                        Location["errorf"]
                         (/* Some */[0,loc],
                          /* None */0,
                          /* None */0,
                          [/* Format */0,
                           [/* String_literal */11,
                            "Invalid syntax for sub-error of extension '",
                            [/* String */2,
                             /* No_padding */0,
                             [/* String_literal */11,"'.",/* End_of_format */0]]],
                           "Invalid syntax for sub-error of extension '%s'."],
                          txt),
                        sub_from(inner[2])];
                }
             }
           else
            {return /* [] */0;}
           };
       
       var exit$1;
       
       switch(p[0])
        {case 0:
          var match$1=p[1];
          
          if(match$1)
           {var match$2=match$1[1][1];
            
            switch(match$2[0])
             {case 0:
               var match$3=match$2[1][1];
               
               switch(match$3[0])
                {case 1:
                  var match$4=match$3[1];
                  
                  switch(match$4[0])
                   {case 2:
                     var inner=match$1[2];
                     
                     var msg=match$4[1];
                     
                     var exit$2;
                     
                     if(inner)
                      {var match$5=inner[1][1];
                       
                       switch(match$5[0])
                        {case 0:
                          var match$6=match$5[1][1];
                          
                          switch(match$6[0])
                           {case 1:
                             var match$7=match$6[1];
                             
                             switch(match$7[0])
                              {case 2:
                                return Location["error"]
                                        (/* Some */[0,loc],
                                         /* Some */[0,sub_from(inner[2])],
                                         /* Some */[0,match$7[1]],
                                         msg);
                                
                               default:exit$2=230;}
                             
                            default:exit$2=230;}
                          
                         default:exit$2=230;}
                       }
                     else
                      {exit$2=230;}
                     
                     switch(exit$2)
                      {case 230:
                        return Location["error"]
                                (/* Some */[0,loc],
                                 /* Some */[0,sub_from(inner)],
                                 /* None */0,
                                 msg);
                        
                       }
                     
                    default:exit$1=229;}
                  
                 default:exit$1=229;}
               
              default:exit$1=229;}
            }
          else
           {exit$1=229;}
          
         case 1:exit$1=229;
         case 2:exit$1=229;
         }
       
       switch(exit$1)
        {case 229:
          return Location["errorf"]
                  (/* Some */[0,loc],
                   /* None */0,
                   /* None */0,
                   [/* Format */0,
                    [/* String_literal */11,
                     "Invalid syntax for extension '",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,"'.",/* End_of_format */0]]],
                    "Invalid syntax for extension '%s'."],
                   txt);
          
         }
       
      }
    };

var
 check_deprecated=
  function(loc,attrs,s)
   {return List["iter"]
            (function(param)
              {var exit;
               
               switch(param[1][1])
                {case "deprecated":exit=226;
                 case "ocaml.deprecated":exit=226;
                 default:exit=227;}
               
               switch(exit)
                {case 227:return /* () */0;
                 case 226:
                  var match=string_of_payload(param[2]);
                  
                  if(match)
                   {return Location["prerr_warning"]
                            (loc,
                             /* Deprecated */[0,
                              Pervasives["^"](s,Pervasives["^"]("\n",match[1]))]);
                    }
                  else
                   {return Location["prerr_warning"](loc,/* Deprecated */[0,s]);
                    }
                  
                 }
               },
             attrs);
    };

var newrecord=/* unknown */"duprecord regular 40";

newrecord[1]=
function(param,a)
 {var exit;
  
  switch(a[1][1])
   {case "ocaml.ppwarning":exit=224;
    case "ppwarning":exit=224;
    default:exit=223;}
  
  switch(exit)
   {case 224:
     var match=a[2];
     
     switch(match[0])
      {case 0:
        var match$1=match[1];
        
        if(match$1)
         {var match$2=match$1[1];
          
          var match$3=match$2[1];
          
          switch(match$3[0])
           {case 0:
             var match$4=match$3[1][1];
             
             switch(match$4[0])
              {case 1:
                var match$5=match$4[1];
                
                switch(match$5[0])
                 {case 2:
                   if(match$1[2])
                    {exit=223;}
                   else
                    {Location["prerr_warning"]
                      (match$2[2],/* Preprocessor */[10,match$5[1]])}
                   
                  default:exit=223;}
                
               default:exit=223;}
             
            default:exit=223;}
          }
        else
         {exit=223;}
        
       case 1:exit=223;
       case 2:exit=223;
       }
     
    case 223:
    }
  
  return a;
  };
var emit_external_warnings=newrecord;

var warning_scope=[0,/* [] */0];

var
 warning_enter_scope=
  function(param)
   {return warning_scope[1]=
           /* :: */[0,Warnings["backup"](/* () */0),warning_scope[1]],
           0;
    };

var
 warning_leave_scope=
  function(param)
   {var match=warning_scope[1];
    
    if(match)
     {Warnings["restore"](match[1]);return warning_scope[1]=match[2],0;}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/typetexp.ml",141,10]];
      }
    };

var
 warning_attribute=
  function(attrs)
   {var
     process=
      function(loc,txt,errflag,payload)
       {var match=string_of_payload(payload);
        
        if(match)
         {try
           {return Warnings["parse_options"](errflag,match[1]);}
          catch(exn)
           {if(exn[1]===Arg["Bad"])
             {return Location["prerr_warning"]
                      (loc,
                       /* Attribute_payload */[30,
                        txt,
                        "Ill-formed list of warnings"]);
              }
            else
             {throw exn;}
            }
          }
        else
         {return Location["prerr_warning"]
                  (loc,
                   /* Attribute_payload */[30,
                    txt,
                    "A single string literal is expected"]);
          }
        };
    
    return List["iter"]
            (function(param)
              {var match=param[1];
               
               var txt=match[1];
               
               var exit;
               
               switch(txt)
                {case "ocaml.warnerror":exit=215;
                 case "ocaml.warning":exit=214;
                 case "warnerror":exit=215;
                 case "warning":exit=214;
                 default:exit=216;}
               
               switch(exit)
                {case 216:return /* () */0;
                 case 214:return process(match[2],txt,/* false */0,param[2]);
                 case 215:return process(match[2],txt,/* true */1,param[2]);
                 }
               },
             attrs);
    };

var instance_list=Ctype["instance_list"](Env["empty"]);

var
 narrow_unbound_lid_error=
  function(env,loc,lid,make_error)
   {var
     check_module=
      function(mlid)
       {try
         {return Env["lookup_module"](/* true */1,mlid,env);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return narrow_unbound_lid_error
                    (env,
                     loc,
                     mlid,
                     function(lid){return /* Unbound_module */[20,lid];});
            }
          else
           {if(exn===Env["Recmodule"])
             {throw [0,
                     $$Error,
                     loc,
                     env,
                     /* Illegal_reference_to_recursive_module */1];
              }
            else
             {throw exn;}
            }
          }
        };
    
    switch(lid[0])
     {case 0:
      case 1:
       var mlid=lid[1];
       
       check_module(mlid);
       var
        md=
         Env["find_module"](Env["lookup_module"](/* true */1,mlid,env),env);
       
       var match=Env["scrape_alias"](env,md[1]);
       
       switch(match[0])
        {case 2:
          throw [0,$$Error,loc,env,/* Access_functor_as_structure */[25,mlid]];
          
         default:}
       
      case 2:
       check_module(lid[1]);
       check_module(lid[2]);
       throw [0,$$Error,loc,env,/* Ill_typed_functor_application */[24,lid]];
       
      }
    
    throw [0,$$Error,loc,env,make_error(lid)];
    };

var
 find_component=
  function(lookup,make_error,env,loc,lid)
   {try
     {var exit;
      
      switch(lid[0])
       {case 0:exit=206;
        case 1:
         var match=lid[1];
         
         switch(match[0])
          {case 0:
            switch(match[1])
             {case "*predef*":
               return lookup
                       (/* Lident */[0,lid[2]],Env["initial_safe_string"]);
               
              default:exit=206;}
            
           case 1:exit=206;
           case 2:exit=206;
           }
         
        case 2:exit=206;
        }
      
      switch(exit){case 206:return lookup(lid,env);}
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return narrow_unbound_lid_error(env,loc,lid,make_error);}
      else
       {if(exn===Env["Recmodule"])
         {throw [0,
                 $$Error,
                 loc,
                 env,
                 /* Illegal_reference_to_recursive_module */1];
          }
        else
         {throw exn;}
        }
      }
    };

var
 find_type=
  function(env,loc,lid)
   {var
     r=
      find_component
       (Env["lookup_type"],
        function(lid){return /* Unbound_type_constructor */[1,lid];},
        env,
        loc,
        lid);
    
    check_deprecated(loc,r[2][9],Path["name"](/* None */0,r[1]));
    return r;
    };

var
 find_constructor=
  find_component
   (Env["lookup_constructor"],
    function(lid){return /* Unbound_constructor */[18,lid];});

var
 find_all_constructors=
  find_component
   (Env["lookup_all_constructors"],
    function(lid){return /* Unbound_constructor */[18,lid];});

var
 find_label=
  find_component
   (Env["lookup_label"],function(lid){return /* Unbound_label */[19,lid];});

var
 find_all_labels=
  find_component
   (Env["lookup_all_labels"],
    function(lid){return /* Unbound_label */[19,lid];});

var
 find_class=
  function(env,loc,lid)
   {var
     r=
      find_component
       (Env["lookup_class"],
        function(lid){return /* Unbound_class */[21,lid];},
        env,
        loc,
        lid);
    
    check_deprecated(loc,r[2][7],Path["name"](/* None */0,r[1]));
    return r;
    };

var
 find_value=
  function(env,loc,lid)
   {Env["check_value_name"](Longident["last"](lid),loc);
    var
     r=
      find_component
       (Env["lookup_value"],
        function(lid){return /* Unbound_value */[17,lid];},
        env,
        loc,
        lid);
    
    check_deprecated(loc,r[2][4],Path["name"](/* None */0,r[1]));
    return r;
    };

var
 lookup_module=
  function($staropt$star,env,loc,lid)
   {if($staropt$star){var load=$staropt$star[1];}else{var load=/* false */0;}
    
    var
     r=
      find_component
       (function(lid,env)
         {return /* tuple */[0,Env["lookup_module"](load,lid,env),/* () */0];},
        function(lid){return /* Unbound_module */[20,lid];},
        env,
        loc,
        lid);
    
    return r[1];
    };

var
 find_module=
  function(env,loc,lid)
   {var path=lookup_module([/* Some */0,/* true */1],env,loc,lid);
    
    var decl=Env["find_module"](path,env);
    
    check_deprecated(loc,decl[2],Path["name"](/* None */0,path));
    return /* tuple */[0,path,decl];
    };

var
 find_modtype=
  function(env,loc,lid)
   {var
     r=
      find_component
       (Env["lookup_modtype"],
        function(lid){return /* Unbound_modtype */[22,lid];},
        env,
        loc,
        lid);
    
    check_deprecated(loc,r[2][2],Path["name"](/* None */0,r[1]));
    return r;
    };

var
 find_class_type=
  function(env,loc,lid)
   {var
     r=
      find_component
       (Env["lookup_cltype"],
        function(lid){return /* Unbound_cltype */[23,lid];},
        env,
        loc,
        lid);
    
    check_deprecated(loc,r[2][6],Path["name"](/* None */0,r[1]));
    return r;
    };

var
 unbound_constructor_error=
  function(env,lid)
   {return narrow_unbound_lid_error
            (env,
             lid[2],
             lid[1],
             function(lid){return /* Unbound_constructor */[18,lid];});
    };

var
 unbound_label_error=
  function(env,lid)
   {return narrow_unbound_lid_error
            (env,
             lid[2],
             lid[1],
             function(lid){return /* Unbound_label */[19,lid];});
    };

var
 transl_modtype_longident=
  [0,
   function(param)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/typetexp.ml",288,45]];
     }];

var
 transl_modtype=
  [0,
   function(param)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/typetexp.ml",289,35]];
     }];

var
 create_package_mty=
  function(fake,loc,env,param)
   {var
     l=
      List["sort"]
       (function(param$1,param$2)
         {var s2=param$2[1];
          
          var s1=param$1[1];
          
          if(CamlPrimitive["caml_equal"](s1[1],s2[1]))
           {throw [0,
                   $$Error,
                   loc,
                   env,
                   /* Multiple_constraints_on_type */[15,s1[1]]];
            }
          else
           {}
          
          return CamlPrimitive["caml_compare"](s1[1],s2[1]);
          },
        param[2]);
    
    return /* tuple */[0,
            l,
            List["fold_left"]
             (function(mty,param$1)
               {var s=param$1[1];
                
                var
                 d=
                  /* record */[0,
                   Typedtree["mkloc"](Longident["last"](s[1]),s[2]),
                   /* [] */0,
                   /* [] */0,
                   /* Ptype_abstract */0,
                   /* Public */1,
                   fake?/* None */0:/* Some */[0,param$1[2]],
                   /* [] */0,
                   loc];
                
                return Ast_helper["Mty"][1]
                        (/* Some */[0,loc],
                         /* None */0,
                         /* Pmty_with */[3,
                          mty,
                          /* :: */[0,
                           /* Pwith_type */[0,/* record */[0,s[1],loc],d],
                           /* [] */0]]);
                },
              Ast_helper["Mty"][1]
               (/* Some */[0,loc],/* None */0,/* Pmty_ident */[0,param[1]]),
              l)];
    };

var type_variables=[0,Tbl["empty"]];

var univars=[0,/* [] */0];

var pre_univars=[0,/* [] */0];

var used_variables=[0,Tbl["empty"]];

var
 reset_type_variables=
  function(param)
   {Ctype["reset_global_level"](/* () */0);
    return type_variables[1]=Tbl["empty"],0;
    };

var
 narrow=
  function(param)
   {return /* tuple */[0,
            Ctype["increase_global_level"](/* () */0),
            type_variables[1]];
    };

var
 widen=
  function(param)
   {Ctype["restore_global_level"](param[1]);
    return type_variables[1]=param[2],0;
    };

var strict_lowercase=function(c){return c===95||c>=97&&c<=122;};

var
 validate_name=
  function(s)
   {if(s)
     {var name=s[1];
      
      if
       (CamlPrimitive["caml_string_notequal"](name,"")&&
        strict_lowercase(name[0]))
       {return s;}
      else
       {return /* None */0;}
      }
    else
     {return /* None */0;}
    };

var
 new_global_var=
  function(name,param)
   {return Ctype["new_global_var"](validate_name(name),/* () */0);};

var
 newvar=
  function(name,param){return Ctype["newvar"](validate_name(name),/* () */0);};

var
 type_variable=
  function(loc,name)
   {try
     {return Tbl["find"](name,type_variables[1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,
               $$Error,
               loc,
               Env["empty"],
               /* Unbound_type_variable */[0,Pervasives["^"]("'",name)]];
        }
      else
       {throw exn;}
      }
    };

var
 transl_type_param=
  function(env,styp)
   {var loc=styp[2];
    
    var match=styp[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         var ty=new_global_var([/* Some */0,"_"],/* () */0);
         
         return /* record */[0,/* Ttyp_any */0,ty,env,loc,styp[3]];
         
        }}
    else
     {switch(match[0])
       {case 0:
         var name=match[1];
         
         try
          {if(CamlPrimitive["caml_string_notequal"](name,"")&&name[0]===95)
            {throw [0,
                    $$Error,
                    loc,
                    Env["empty"],
                    /* Invalid_variable_name */[13,Pervasives["^"]("'",name)]];
             }
           else
            {}
           
           Tbl["find"](name,type_variables[1]);
           throw Already_bound;
           }
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {var v=new_global_var(/* Some */[0,name],/* () */0);
             
             type_variables[1]=Tbl["add"](name,v,type_variables[1]);
             var ty$1=v;
             }
           else
            {throw exn;}
           }
         
         return /* record */[0,/* Ttyp_var */[0,name],ty$1,env,loc,styp[3]];
         
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/typetexp.ml",374,9]];
         }}
    };

var
 wrap_method=
  function(ty)
   {var match=Ctype["repr"](ty)[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 10:return ty;default:exit=155;}}
    
    switch(exit)
     {case 155:return Ctype["newty"](/* Tpoly */[10,ty,/* [] */0]);}
    };

var
 new_pre_univar=
  function(name,param)
   {var v=newvar(name,/* () */0);
    
    pre_univars[1]=/* :: */[0,v,pre_univars[1]];
    return v;
    };

var
 swap_list=
  function(l)
   {var exit;
    
    if(l)
     {var match=l[2];
      
      if(match)
       {return /* :: */[0,match[1],/* :: */[0,l[1],swap_list(match[2])]];}
      else
       {exit=152;}
      }
    else
     {exit=152;}
    
    switch(exit){case 152:return l;}
    };

var
 transl_type=
  function(env,policy,styp)
   {var loc=styp[2];
    
    var
     ctyp=
      function(ctyp_desc,ctyp_type)
       {return /* record */[0,ctyp_desc,ctyp_type,env,loc,styp[3]];};
    
    var match=styp[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         if(policy===/* Univars */2)
          {var ty=new_pre_univar(/* None */0,/* () */0);}
         else
          {if(policy===/* Fixed */0)
            {throw [0,$$Error,styp[2],env,[/* Unbound_type_variable */0,"_"]];
             }
           else
            {var ty=newvar(/* None */0,/* () */0);}
           }
         
         return ctyp(/* Ttyp_any */0,ty);
         
        }}
    else
     {switch(match[0])
       {case 0:
         var name=match[1];
         
         if(CamlPrimitive["caml_string_notequal"](name,"")&&name[0]===95)
          {throw [0,
                  $$Error,
                  styp[2],
                  env,
                  /* Invalid_variable_name */[13,Pervasives["^"]("'",name)]];
           }
         else
          {}
         
         try
          {var
            ty$1=
             Ctype["instance"](/* None */0,env,List["assoc"](name,univars[1]));
           }
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {try
              {var
                ty$1=
                 Ctype["instance"]
                  (/* None */0,env,Tbl["find"](name,used_variables[1])[1]);
               }
             catch(exn$1)
              {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                {if(policy===/* Univars */2)
                  {var v=new_pre_univar(/* Some */[0,name],/* () */0);}
                 else
                  {var v=newvar(/* Some */[0,name],/* () */0);}
                 
                 used_variables[1]=
                 Tbl["add"](name,/* tuple */[0,v,styp[2]],used_variables[1]);
                 var ty$1=v;
                 }
               else
                {throw exn$1;}
               }
             }
           else
            {throw exn;}
           }
         
         return ctyp(/* Ttyp_var */[0,name],ty$1);
         
        case 1:
         var l=match[1];
         
         var cty1=transl_type(env,policy,match[2]);
         
         var cty2=transl_type(env,policy,match[3]);
         
         var
          ty$2=
           Ctype["newty"](/* Tarrow */[1,l,cty1[2],cty2[2],/* Cok */0]);
         
         return ctyp(/* Ttyp_arrow */[1,l,cty1,cty2],ty$2);
         
        case 2:
         var stl=match[1];
         
         if(List["length"](stl)<2)
          {Syntaxerr["ill_formed_ast"]
            (loc,"Tuples must have at least 2 components.")}
         else
          {}
         
         var ctys=List["map"](transl_type(env,policy),stl);
         
         var
          ty$3=
           Ctype["newty"]
            (/* Ttuple */[2,List["map"](function(ctyp){return ctyp[2];},ctys)]);
         
         return ctyp(/* Ttyp_tuple */[2,ctys],ty$3);
         
        case 3:
         var stl$1=match[2];
         
         var lid=match[1];
         
         var match$1=find_type(env,styp[2],lid[1]);
         
         var decl=match$1[2];
         
         var path=match$1[1];
         
         var exit;
         
         if(stl$1)
          {var t=stl$1[1];
           
           if(typeof t[1]==="number")
            {if(stl$1[2])
              {exit=60;}
             else
              {if(decl[2]>1)
                {var stl$2=List["map"](function(param){return t;},decl[1]);}
               else
                {exit=60;}
               }
             }
           else
            {exit=60;}
           }
         else
          {exit=60;}
         
         switch(exit){case 60:var stl$2=stl$1;}
         
         if(List["length"](stl$2)!==decl[2])
          {throw [0,
                  $$Error,
                  styp[2],
                  env,
                  /* Type_arity_mismatch */[3,
                   lid[1],
                   decl[2],
                   List["length"](stl$2)]];
           }
         else
          {}
         
         var args=List["map"](transl_type(env,policy),stl$2);
         
         var params=instance_list(decl[1]);
         
         var match$2=decl[5];
         
         if(match$2)
          {if(Ctype["repr"](match$2[1])[2]===Btype["generic_level"])
            {var unify_param=Ctype["unify_var"];}
           else
            {var unify_param=Ctype["unify"];}
           }
         else
          {var unify_param=Ctype["unify_var"];}
         
         List["iter2"]
          (function(param,ty$prime)
            {try
              {return unify_param(env,ty$prime,param[2][2]);}
             catch(exn$2)
              {if(exn$2[1]===Ctype["Unify"])
                {throw [0,
                        $$Error,
                        param[1][2],
                        env,
                        /* Type_mismatch */[6,swap_list(exn$2[2])]];
                 }
               else
                {throw exn$2;}
               }
             },
           List["combine"](stl$2,args),
           params);
         var
          constr=
           Ctype["newconstr"]
            (path,List["map"](function(ctyp){return ctyp[2];},args));
         
         try
          {Ctype["enforce_constraints"](env,constr)}
         catch(exn$2)
          {if(exn$2[1]===Ctype["Unify"])
            {throw [0,$$Error,styp[2],env,/* Type_mismatch */[6,exn$2[2]]];}
           else
            {throw exn$2;}
           }
         
         return ctyp(/* Ttyp_constr */[3,path,lid,args],constr);
         
        case 4:
         var o=match[2];
         
         var
          fields=
           List["map"]
            (function(param)
              {return /* tuple */[0,
                       param[1],
                       param[2],
                       transl_poly_type(env,policy,param[3])];
               },
             match[1]);
         
         var
          ty$4=
           Ctype["newobj"](transl_fields(loc,env,policy,/* [] */0,o,fields));
         
         return ctyp(/* Ttyp_object */[4,fields,o],ty$4);
         
        case 5:
         var stl$3=match[2];
         
         var lid$1=match[1];
         
         try
          {var match$3=Env["lookup_type"](lid$1[1],env);
           
           var decl$1=match$3[2];
           
           var
            check=
             function(decl)
              {var match$4=decl[5];
               
               if(match$4)
                {var match$5=Ctype["repr"](match$4[1])[1];
                 
                 var exit$1;
                 
                 if(typeof match$5==="number")
                  {switch(match$5){}}
                 else
                  {switch(match$5[0])
                    {case 3:return check(Env["find_type"](match$5[1],env));
                     case 8:
                      if(Btype["static_row"](match$5[1]))
                       {return /* () */0;}
                      else
                       {exit$1=84;}
                      
                     default:exit$1=84;}}
                 
                 switch(exit$1)
                  {case 84:
                    throw CamlPrimitive["caml_global_data"]["Not_found"];
                   }
                 }
               else
                {throw CamlPrimitive["caml_global_data"]["Not_found"];}
               };
           
           check(decl$1);
           Location["prerr_warning"]
            (styp[2],
             [/* Deprecated */0,"old syntax for polymorphic variant type"]);
           var match$4=/* tuple */[0,match$3[1],decl$1,/* true */1];
           }
         catch(exn$3)
          {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
            {try
              {var match$5=lid$1[1];
               
               switch(match$5[0])
                {case 0:
                  var lid2=/* Lident */[0,Pervasives["^"]("#",match$5[1])];
                 case 1:
                  var
                   lid2=
                    /* Ldot */[1,match$5[1],Pervasives["^"]("#",match$5[2])];
                  
                 case 2:var lid2=Misc["fatal_error"]("Typetexp.transl_type");
                 }
               
               var match$6=Env["lookup_type"](lid2,env);
               
               var match$4=/* tuple */[0,match$6[1],match$6[2],/* false */0];
               }
             catch(exn$4)
              {if(exn$4===CamlPrimitive["caml_global_data"]["Not_found"])
                {find_class(env,styp[2],lid$1[1]);
                 throw [0,
                        CamlPrimitive["caml_global_data"]["Assert_failure"],
                        [0,"typing/typetexp.ml",500,57]];
                 }
               else
                {throw exn$4;}
               }
             }
           else
            {throw exn$3;}
           }
         
         var decl$2=match$4[2];
         
         var path$1=match$4[1];
         
         if(List["length"](stl$3)!==decl$2[2])
          {throw [0,
                  $$Error,
                  styp[2],
                  env,
                  /* Type_arity_mismatch */[3,
                   lid$1[1],
                   decl$2[2],
                   List["length"](stl$3)]];
           }
         else
          {}
         
         var args$1=List["map"](transl_type(env,policy),stl$3);
         
         var params$1=instance_list(decl$2[1]);
         
         List["iter2"]
          (function(param,ty$prime)
            {try
              {return Ctype["unify_var"](env,ty$prime,param[2][2]);}
             catch(exn$5)
              {if(exn$5[1]===Ctype["Unify"])
                {throw [0,
                        $$Error,
                        param[1][2],
                        env,
                        /* Type_mismatch */[6,swap_list(exn$5[2])]];
                 }
               else
                {throw exn$5;}
               }
             },
           List["combine"](stl$3,args$1),
           params$1);
         var ty_args=List["map"](function(ctyp){return ctyp[2];},args$1);
         
         try
          {var
            ty$5=
             Ctype["expand_head"](env,Ctype["newconstr"](path$1,ty_args));
           }
         catch(exn$5)
          {if(exn$5[1]===Ctype["Unify"])
            {throw [0,$$Error,styp[2],env,/* Type_mismatch */[6,exn$5[2]]];}
           else
            {throw exn$5;}
           }
         
         var match$7=ty$5[1];
         
         var exit$1;
         
         if(typeof match$7==="number")
          {switch(match$7){}}
         else
          {switch(match$7[0])
            {case 4:
              var match$8=Ctype["flatten_fields"](match$7[1]);
              
              if(policy===/* Univars */2)
               {pre_univars[1]=/* :: */[0,match$8[2],pre_univars[1]]}
              else
               {}
              
              var ty$6=ty$5;
              
             case 8:
              var row=Btype["row_repr"](match$7[1]);
              
              var
               fields$1=
                List["map"]
                 (function(param)
                   {var f=param[2];
                    
                    var match$9=Btype["row_field_repr"](f);
                    
                    var exit$2;
                    
                    var $js;
                    if(typeof match$9==="number")
                     {switch(match$9){case 0:exit$2=68;}}
                    else
                     {switch(match$9[0])
                       {case 0:
                         var match$10=match$9[1];
                         
                         if(match$10)
                          {$js=
                           /* Reither */[1,
                            /* false */0,
                            /* :: */[0,match$10[1],/* [] */0],
                            /* false */0,
                            [0,/* None */0]];
                           }
                         else
                          {$js=
                           /* Reither */[1,
                            /* true */1,
                            /* [] */0,
                            /* false */0,
                            [0,/* None */0]];
                           }
                         
                        case 1:exit$2=68;
                        }}
                    
                    var $js$1;
                    switch(exit$2){case 68:$js$1=f;}
                    return /* tuple */[0,param[1],$js$1];
                    },
                  row[1]);
              
              var
               row$1=
                /* record */[0,
                 fields$1,
                 newvar(/* None */0,/* () */0),
                 /* () */0,
                 /* true */1,
                 /* false */0,
                 /* Some */[0,/* tuple */[0,path$1,ty_args]]];
              
              var $$static=Btype["static_row"](row$1);
              
              if($$static)
               {var newrecord$1=/* unknown */"duprecord regular 6";
                
                newrecord$1[2]=Ctype["newty"](/* Tnil */0);
                var row$2=newrecord$1;
                }
              else
               {if(policy!==/* Univars */2)
                 {var row$2=row$1;}
                else
                 {var newrecord$2=/* unknown */"duprecord regular 6";
                  
                  newrecord$2[2]=new_pre_univar(/* None */0,/* () */0);
                  var row$2=newrecord$2;
                  }
                }
              
              var ty$6=Ctype["newty"](/* Tvariant */[8,row$2]);
              
             default:exit$1=72;}}
         
         switch(exit$1)
          {case 72:
            throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"typing/typetexp.ml",548,10]];
            
           }
         
         return ctyp(/* Ttyp_class */[5,path$1,lid$1,args$1],ty$6);
         
        case 6:
         var alias=match[2];
         
         var st=match[1];
         
         try
          {try
            {var t$1=List["assoc"](alias,univars[1]);}
           catch(exn$6)
            {if(exn$6===CamlPrimitive["caml_global_data"]["Not_found"])
              {var
                t$1=
                 Ctype["instance"]
                  (/* None */0,env,Tbl["find"](alias,used_variables[1])[1]);
               }
             else
              {throw exn$6;}
             }
           
           var ty$7=transl_type(env,policy,st);
           
           try
            {Ctype["unify_var"](env,t$1,ty$7[2])}
           catch(exn$7)
            {if(exn$7[1]===Ctype["Unify"])
              {var trace=swap_list(exn$7[2]);
               
               throw [0,
                      $$Error,
                      styp[2],
                      env,
                      /* Alias_type_mismatch */[7,trace]];
               }
             else
              {throw exn$7;}
             }
           
           var cty=ty$7;
           }
         catch(exn$8)
          {if(exn$8===CamlPrimitive["caml_global_data"]["Not_found"])
            {if(Clflags["principal"][1]){Ctype["begin_def"](/* () */0)}else{}
             
             var t$2=newvar(/* None */0,/* () */0);
             
             used_variables[1]=
             Tbl["add"](alias,/* tuple */[0,t$2,styp[2]],used_variables[1]);
             var ty$8=transl_type(env,policy,st);
             
             try
              {Ctype["unify_var"](env,t$2,ty$8[2])}
             catch(exn$9)
              {if(exn$9[1]===Ctype["Unify"])
                {var trace$1=swap_list(exn$9[2]);
                 
                 throw [0,
                        $$Error,
                        styp[2],
                        env,
                        /* Alias_type_mismatch */[7,trace$1]];
                 }
               else
                {throw exn$9;}
               }
             
             if(Clflags["principal"][1])
              {Ctype["end_def"](/* () */0),Ctype["generalize_structure"](t$2)}
             else
              {}
             
             var t$3=Ctype["instance"](/* None */0,env,t$2);
             
             var px=Btype["proxy"](t$3);
             
             var match$9=px[1];
             
             var exit$2;
             
             if(typeof match$9==="number")
              {switch(match$9){}}
             else
              {switch(match$9[0])
                {case 0:
                  if(match$9[1])
                   {exit$2=87;}
                  else
                   {Btype["log_type"](px),
                    px[1]=
                    /* Tvar */[0,/* Some */[0,alias]]}
                  
                 case 9:
                  if(match$9[1])
                   {exit$2=87;}
                  else
                   {Btype["log_type"](px),
                    px[1]=
                    /* Tunivar */[9,/* Some */[0,alias]]}
                  
                 default:exit$2=87;}}
             
             switch(exit$2){case 87:}
             
             var cty=/* record */[0,ty$8[1],t$3,ty$8[3],ty$8[4],ty$8[5]];
             }
           else
            {throw exn$8;}
           }
         
         return ctyp(/* Ttyp_alias */[6,cty,alias],cty[2]);
         
        case 7:
         var present=match[3];
         
         var closed=match[2];
         
         var name$1=[0,/* None */0];
         
         var
          mkfield=
           function(l,f)
            {return Ctype["newty"]
                     (/* Tvariant */[8,
                       /* record */[0,
                        /* :: */[0,/* tuple */[0,l,f],/* [] */0],
                        newvar(/* None */0,/* () */0),
                        /* () */0,
                        /* true */1,
                        /* false */0,
                        /* None */0]]);
             };
         
         var hfields=Hashtbl["create"](/* None */0,17);
         
         var
          add_typed_field=
           function(loc,l,f)
            {var h=Btype["hash_variant"](l);
             
             try
              {var match$10=Hashtbl["find"](hfields,h);
               
               var l$prime=match$10[1];
               
               if(CamlPrimitive["caml_string_notequal"](l,l$prime))
                {throw [0,
                        $$Error,
                        styp[2],
                        env,
                        /* Variant_tags */[12,l,l$prime]];
                 }
               else
                {}
               
               var ty$9=mkfield(l,f);
               
               var ty$prime=mkfield(l,match$10[2]);
               
               if
                (Ctype["equal"]
                  (env,
                   /* false */0,
                   /* :: */[0,ty$9,/* [] */0],
                   /* :: */[0,ty$prime,/* [] */0]))
                {return /* () */0;}
               else
                {try
                  {return Ctype["unify"](env,ty$9,ty$prime);}
                 catch(exn$10)
                  {if(exn$10[1]===Ctype["Unify"])
                    {throw [0,
                            $$Error,
                            loc,
                            env,
                            /* Constructor_mismatch */[10,ty$9,ty$prime]];
                     }
                   else
                    {throw exn$10;}
                   }
                 }
               }
             catch(exn$11)
              {if(exn$11===CamlPrimitive["caml_global_data"]["Not_found"])
                {return Hashtbl["add"](hfields,h,/* tuple */[0,l,f]);}
               else
                {throw exn$11;}
               }
             };
         
         var
          add_field=
           function(param)
            {switch(param[0])
              {case 0:
                var stl$4=param[4];
                
                var c=param[3];
                
                var l$1=param[1];
                
                name$1[1]=/* None */0;
                var tl=List["map"](transl_type(env,policy),stl$4);
                
                var exit$3;
                
                if(present)
                 {if(!List["mem"](l$1,present[1]))
                   {var ty_tl=List["map"](function(cty){return cty[2];},tl);
                    
                    var f=/* Reither */[1,c,ty_tl,/* false */0,[0,/* None */0]];
                    }
                  else
                   {exit$3=108;}
                  }
                else
                 {exit$3=108;}
                
                switch(exit$3)
                 {case 108:
                   if(List["length"](stl$4)>1||c&&stl$4!==/* [] */0)
                    {throw [0,
                            $$Error,
                            styp[2],
                            env,
                            /* Present_has_conjunction */[8,l$1]];
                     }
                   else
                    {}
                   
                   if(tl)
                    {var f=/* Rpresent */[0,/* Some */[0,tl[1][2]]];}
                   else
                    {var f=[/* Rpresent */0,/* None */0];}
                   
                  }
                
                add_typed_field(styp[2],l$1,f);
                return /* Ttag */[0,l$1,param[2],c,tl];
                
               case 1:
                var sty=param[1];
                
                var cty$1=transl_type(env,policy,sty);
                
                var ty$9=cty$1[2];
                
                var match$10=Ctype["repr"](cty$1[2]);
                
                var match$11=match$10[1];
                
                var exit$4;
                
                if(typeof match$11==="number")
                 {switch(match$11){}}
                else
                 {switch(match$11[0])
                   {case 3:
                     var nm=/* Some */[0,/* tuple */[0,match$11[1],match$11[2]]];
                    default:exit$4=119;}}
                
                switch(exit$4){case 119:var nm=/* None */0;}
                
                try
                 {Hashtbl["iter"]
                   (function(param$1,param$2){throw Pervasives["Exit"];},
                    hfields),
                  name$1[1]=
                  nm}
                catch(exn$10)
                 {if(exn$10===Pervasives["Exit"])
                   {name$1[1]=/* None */0}
                  else
                   {throw exn$10;}
                  }
                
                var match$12=Ctype["expand_head"](env,cty$1[2]);
                
                var match$13=match$12[1];
                
                var exit$5;
                
                if(typeof match$13==="number")
                 {switch(match$13){}}
                else
                 {switch(match$13[0])
                   {case 0:
                     if(nm)
                      {throw [0,
                              $$Error,
                              sty[2],
                              env,
                              /* Unbound_type_constructor_2 */[2,nm[1][1]]];
                       }
                     else
                      {exit$5=116;}
                     
                    case 8:
                     var row$3=match$13[1];
                     
                     if(Btype["static_row"](row$3))
                      {var row$4=Btype["row_repr"](row$3);var fl=row$4[1];}
                     else
                      {exit$5=116;}
                     
                    default:exit$5=116;}}
                
                switch(exit$5)
                 {case 116:
                   throw [0,$$Error,sty[2],env,/* Not_a_variant */[11,ty$9]];
                  }
                
                List["iter"]
                 (function(param$1)
                   {var f$1=param$1[2];
                    
                    var l$2=param$1[1];
                    
                    var exit$6;
                    
                    if(present)
                     {if(!List["mem"](l$2,present[1]))
                       {var exit$7;
                        
                        if(typeof f$1==="number")
                         {switch(f$1){case 0:exit$7=111;}}
                        else
                         {switch(f$1[0])
                           {case 0:
                             var match$14=f$1[1];
                             
                             if(match$14)
                              {var
                                f$2=
                                 /* Reither */[1,
                                  /* false */0,
                                  /* :: */[0,match$14[1],/* [] */0],
                                  /* false */0,
                                  [0,/* None */0]];
                               }
                             else
                              {var
                                f$2=
                                 /* Reither */[1,
                                  /* true */1,
                                  /* [] */0,
                                  /* false */0,
                                  [0,/* None */0]];
                               }
                             
                            case 1:exit$7=111;
                            }}
                        
                        switch(exit$7)
                         {case 111:
                           throw [0,
                                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                                  [0,"typing/typetexp.ml",661,24]];
                           
                          }
                        }
                      else
                       {exit$6=112;}
                      }
                    else
                     {exit$6=112;}
                    
                    switch(exit$6){case 112:var f$2=f$1;}
                    
                    return add_typed_field(sty[2],l$2,f$2);
                    },
                  fl);
                return /* Tinherit */[1,cty$1];
                
               }
             };
         
         var tfields=List["map"](add_field,match[1]);
         
         var
          fields$2=
           Hashtbl["fold"]
            (function(param,p,l){return /* :: */[0,p,l];},hfields,/* [] */0);
         
         if(present)
          {List["iter"]
            (function(l)
              {if(!List["mem_assoc"](l,fields$2))
                {throw [0,$$Error,styp[2],env,/* Present_has_no_type */[9,l]];
                 }
               else
                {return 0;}
               },
             present[1])}
         else
          {}
         
         var
          row$3=
           /* record */[0,
            List["rev"](fields$2),
            newvar(/* None */0,/* () */0),
            /* () */0,
            closed===/* Closed */0,
            /* false */0,
            name$1[1]];
         
         var $$static$1=Btype["static_row"](row$3);
         
         if($$static$1)
          {var newrecord$3=/* unknown */"duprecord regular 6";
           
           newrecord$3[2]=Ctype["newty"](/* Tnil */0);
           var row$4=newrecord$3;
           }
         else
          {if(policy!==/* Univars */2)
            {var row$4=row$3;}
           else
            {var newrecord$4=/* unknown */"duprecord regular 6";
             
             newrecord$4[2]=new_pre_univar(/* None */0,/* () */0);
             var row$4=newrecord$4;
             }
           }
         
         var ty$9=Ctype["newty"](/* Tvariant */[8,row$4]);
         
         return ctyp(/* Ttyp_variant */[7,tfields,closed,present],ty$9);
         
        case 8:
         var vars=match[1];
         
         Ctype["begin_def"](/* () */0);
         var
          new_univars=
           List["map"]
            (function(name)
              {return /* tuple */[0,name,newvar(/* Some */[0,name],/* () */0)];
               },
             vars);
         
         var old_univars=univars[1];
         
         univars[1]=Pervasives["@"](new_univars,univars[1]);
         var cty$1=transl_type(env,policy,match[2]);
         
         var ty$10=cty$1[2];
         
         univars[1]=old_univars;
         Ctype["end_def"](/* () */0);
         Ctype["generalize"](ty$10);
         var
          ty_list=
           List["fold_left"]
            (function(tyl,param)
              {var v$1=Btype["proxy"](param[2]);
               
               if(Ctype["deep_occur"](v$1,ty$10))
                {var match$10=v$1[1];
                 
                 var exit$3;
                 
                 if(typeof match$10==="number")
                  {switch(match$10){}}
                 else
                  {switch(match$10[0])
                    {case 0:
                      if(v$1[2]===Btype["generic_level"])
                       {v$1[1]=/* Tunivar */[9,match$10[1]];
                        return /* :: */[0,v$1,tyl];
                        }
                      else
                       {exit$3=135;}
                      
                     default:exit$3=135;}}
                 
                 switch(exit$3)
                  {case 135:
                    throw [0,
                           $$Error,
                           styp[2],
                           env,
                           /* Cannot_quantify */[14,param[1],v$1]];
                    
                   }
                 }
               else
                {return tyl;}
               },
             /* [] */0,
             new_univars);
         
         var
          ty$prime=
           Btype["newgenty"](/* Tpoly */[10,ty$10,List["rev"](ty_list)]);
         
         Ctype["unify_var"](env,newvar(/* None */0,/* () */0),ty$prime);
         return ctyp(/* Ttyp_poly */[8,vars,cty$1],ty$prime);
         
        case 9:
         var match$10=match[1];
         
         var p=match$10[1];
         
         var
          match$11=
           create_package_mty
            (/* true */1,styp[2],env,/* tuple */[0,p,match$10[2]]);
         
         var l$1=match$11[1];
         
         var z=narrow(/* () */0);
         
         var mty=transl_modtype[1](env,match$11[2]);
         
         widen(z);
         var
          ptys=
           List["map"]
            (function(param)
              {return /* tuple */[0,param[1],transl_type(env,policy,param[2])];
               },
             l$1);
         
         var path$2=transl_modtype_longident[1](styp[2],env,p[1]);
         
         var
          ty$11=
           Ctype["newty"]
            (/* Tpackage */[11,
              path$2,
              List["map"](function(param){return param[1][1];},l$1),
              List["map"](function(param){return param[2][2];},ptys)]);
         
         return ctyp
                 (/* Ttyp_package */[9,/* record */[0,path$2,ptys,mty[2],p]],
                  ty$11);
         
        case 10:throw [0,Error_forward,error_of_extension(match[1])];
        }}
    };

var
 transl_poly_type=
  function(env,policy,t)
   {return transl_type(env,policy,Ast_helper["Typ"][15](t));};

var
 transl_fields=
  function(loc,env,policy,seen,o,param)
   {if(param)
     {var match=param[1];
      
      var s=match[1];
      
      if(List["mem"](s,seen))
       {throw [0,$$Error,loc,env,/* Repeated_method_label */[16,s]];}
      else
       {}
      
      var ty2=transl_fields(loc,env,policy,/* :: */[0,s,seen],o,param[2]);
      
      return Ctype["newty"](/* Tfield */[5,s,/* Fpresent */0,match[3][2],ty2]);
      }
    else
     {if(o!==0)
       {if(policy>=2)
         {return new_pre_univar(/* None */0,/* () */0);}
        else
         {return newvar(/* None */0,/* () */0);}
        }
      else
       {return Ctype["newty"](/* Tnil */0);}
      }
    };

var
 make_fixed_univars=
  function(ty)
   {var ty$1=Ctype["repr"](ty);
    
    if(ty$1[2]>=Btype["lowest_level"])
     {Btype["mark_type_node"](ty$1);
      var match=ty$1[1];
      
      var exit;
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 8:
           var row=Btype["row_repr"](match[1]);
           
           if(Btype["is_Tunivar"](Btype["row_more"](row)))
            {ty$1[1]=
             /* Tvariant */[8,
              /* record */[0,
               List["map"]
                (function(p)
                  {var match$1=Btype["row_field_repr"](p[2]);
                   
                   var exit$1;
                   
                   if(typeof match$1==="number")
                    {switch(match$1){case 0:exit$1=40;}}
                   else
                    {switch(match$1[0])
                      {case 0:exit$1=40;
                       case 1:
                        return /* tuple */[0,
                                p[1],
                                /* Reither */[1,
                                 match$1[1],
                                 match$1[2],
                                 /* true */1,
                                 match$1[4]]];
                        
                       }}
                   
                   switch(exit$1){case 40:return p;}
                   },
                 row[1]),
               row[2],
               row[3],
               row[4],
               /* true */1,
               row[6]]]}
           else
            {}
           
           return Btype["iter_row"](make_fixed_univars,row);
           
          default:exit=42;}}
      
      switch(exit)
       {case 42:return Btype["iter_type_expr"](make_fixed_univars,ty$1);}
      }
    else
     {return 0;}
    };

var
 make_fixed_univars$1=
  function(ty){make_fixed_univars(ty);return Btype["unmark_type"](ty);};

var create_package_mty$1=create_package_mty(/* false */0);

var
 globalize_used_variables=
  function(env,fixed)
   {var r=[0,/* [] */0];
    
    Tbl["iter"]
     (function(name,param)
       {var loc=param[2];
        
        var ty=param[1];
        
        var v=new_global_var(/* None */0,/* () */0);
        
        var snap=Btype["snapshot"](/* () */0);
        
        var $js;
        try
         {Ctype["unify"](env,v,ty);$js=/* true */1;}
        catch(exn){Btype["backtrack"](snap);$js=/* false */0;}
        if($js)
         {try
           {return r[1]=
                   /* :: */[0,
                    /* tuple */[0,loc,v,Tbl["find"](name,type_variables[1])],
                    r[1]],
                   0;
            }
          catch(exn$1)
           {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
             {if(fixed&&Btype["is_Tvar"](Ctype["repr"](ty)))
               {throw [0,
                       $$Error,
                       loc,
                       env,
                       /* Unbound_type_variable */[0,Pervasives["^"]("'",name)]];
                }
              else
               {}
              
              var v2=new_global_var(/* None */0,/* () */0);
              
              r[1]=/* :: */[0,/* tuple */[0,loc,v,v2],r[1]];
              return type_variables[1]=
                     Tbl["add"](name,v2,type_variables[1]),
                     0;
              }
            else
             {throw exn$1;}
            }
          }
        else
         {return 0;}
        },
      used_variables[1]);
    used_variables[1]=Tbl["empty"];
    return function(param)
     {return List["iter"]
              (function(param$1)
                {try
                  {return Ctype["unify"](env,param$1[2],param$1[3]);}
                 catch(exn)
                  {if(exn[1]===Ctype["Unify"])
                    {throw [0,
                            $$Error,
                            param$1[1],
                            env,
                            /* Type_mismatch */[6,exn[2]]];
                     }
                   else
                    {throw exn;}
                   }
                 },
               r[1]);
      };
    };

var
 transl_simple_type=
  function(env,fixed,styp)
   {univars[1]=/* [] */0;
    used_variables[1]=Tbl["empty"];
    var typ=transl_type(env,fixed?/* Fixed */0:/* Extensible */1,styp);
    
    globalize_used_variables(env,fixed,/* () */0);
    make_fixed_univars$1(typ[2]);
    return typ;
    };

var
 transl_simple_type_univars=
  function(env,styp)
   {univars[1]=/* [] */0;
    used_variables[1]=Tbl["empty"];
    pre_univars[1]=/* [] */0;
    Ctype["begin_def"](/* () */0);
    var typ=transl_type(env,/* Univars */2,styp);
    
    var new_variables=used_variables[1];
    
    used_variables[1]=Tbl["empty"];
    Tbl["iter"]
     (function(name,p)
       {if(Tbl["mem"](name,type_variables[1]))
         {return used_variables[1]=Tbl["add"](name,p,used_variables[1]),0;}
        else
         {return 0;}
        },
      new_variables);
    globalize_used_variables(env,/* false */0,/* () */0);
    Ctype["end_def"](/* () */0);
    Ctype["generalize"](typ[2]);
    var
     univs=
      List["fold_left"]
       (function(acc,v)
         {var v$1=Ctype["repr"](v);
          
          var match=v$1[1];
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:
               if(v$1[2]===Btype["generic_level"])
                {v$1[1]=/* Tunivar */[9,match[1]];return /* :: */[0,v$1,acc];}
               else
                {exit=22;}
               
              default:exit=22;}}
          
          switch(exit){case 22:return acc;}
          },
        /* [] */0,
        pre_univars[1]);
    
    make_fixed_univars$1(typ[2]);
    return /* record */[0,
            typ[1],
            Ctype["instance"]
             (/* None */0,env,Btype["newgenty"](/* Tpoly */[10,typ[2],univs])),
            typ[3],
            typ[4],
            typ[5]];
    };

var
 transl_simple_type_delayed=
  function(env,styp)
   {univars[1]=/* [] */0;
    used_variables[1]=Tbl["empty"];
    var typ=transl_type(env,/* Extensible */1,styp);
    
    make_fixed_univars$1(typ[2]);
    return /* tuple */[0,typ,globalize_used_variables(env,/* false */0)];
    };

var
 transl_type_scheme=
  function(env,styp)
   {reset_type_variables(/* () */0);
    Ctype["begin_def"](/* () */0);
    var typ=transl_simple_type(env,/* false */0,styp);
    
    Ctype["end_def"](/* () */0);
    Ctype["generalize"](typ[2]);
    return typ;
    };

var
 spellcheck=
  function(ppf,fold,env,lid)
   {var match=Longident["last"](lid)["length"];
    
    var switcher=-1+match;
    
    if(3<switcher>>>0)
     {if(1<-4+switcher>>>0){var cutoff=3;}else{var cutoff=2;}}
    else
     {if(switcher>=2){var cutoff=1;}else{var cutoff=0;}}
    
    var
     compare=
      function(target,head,acc)
       {var best_dist=acc[2];
        
        var best_choice=acc[1];
        
        var match$1=Misc["edit_distance"](target,head,cutoff);
        
        if(match$1)
         {var dist=match$1[1];
          
          if(dist<best_dist)
           {var choice=/* :: */[0,head,/* [] */0];}
          else
           {if(dist===best_dist)
             {var choice=/* :: */[0,head,best_choice];}
            else
             {var choice=best_choice;}
            }
          
          return /* tuple */[0,choice,Pervasives["min"](dist,best_dist)];
          }
        else
         {return /* tuple */[0,best_choice,best_dist];}
        };
    
    var init=/* tuple */[0,/* [] */0,Pervasives["max_int"]];
    
    var
     handle=
      function(param)
       {var match$1=List["rev"](param[1]);
        
        if(match$1)
         {var rev_rest=match$1[2];
          
          return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Formatting_lit */17,
                     /* Force_newline */3,
                     [/* String_literal */11,
                      "Hint: Did you mean ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String */2,
                        /* No_padding */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,63,/* End_of_format */0]]]]]],
                    "@\nHint: Did you mean %s%s%s?"],
                   $$String["concat"](", ",List["rev"](rev_rest)),
                   rev_rest===/* [] */0?"":" or ",
                   match$1[1]);
          }
        else
         {return /* () */0;}
        };
    
    Format["fprintf"]
     (ppf,
      [/* Format */0,
       [/* Formatting_lit */17,/* FFlush */2,/* End_of_format */0],
       "@?"]);
    switch(lid[0])
     {case 0:return handle(fold(compare(lid[1]),/* None */0,env,init));
      case 1:
       return handle(fold(compare(lid[2]),/* Some */[0,lid[1]],env,init));
      case 2:return /* () */0;
      }
    };

var
 spellcheck_simple=
  function(ppf,fold,extr)
   {return spellcheck
            (ppf,
             function(f)
              {return fold(function(decl,x){return f(extr(decl),x);});});
    };

var
 spellcheck$1=
  function(ppf,fold)
   {return spellcheck
            (ppf,
             function(f)
              {return fold(function(s,param,param$1,x){return f(s,x);});});
    };

var
 report_error=
  function(env,ppf,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "This type is recursive",
                    /* End_of_format */0],
                   "This type is recursive"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Illegal recursive module reference",
                    /* End_of_format */0],
                   "Illegal recursive module reference"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Unbound type parameter ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      /* Flush_newline */4,
                      /* End_of_format */0]]],
                   "Unbound type parameter %s@."],
                  param[1]);
         
        case 1:
         var lid=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound type constructor ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound type constructor %a"],
           Printtyp["longident"],
           lid);
         return spellcheck$1(ppf,Env["fold_types"],env,lid);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The type constructor",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "is not yet completely defined",
                        /* End_of_format */0]]]]],
                   "The type constructor@ %a@ is not yet completely defined"],
                  Printtyp["path"],
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The type constructor ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "expects ",
                        [/* Int */4,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         [/* String_literal */11,
                          " argument(s),",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "but is here applied to ",
                            [/* Int */4,
                             /* Int_i */3,
                             /* No_padding */0,
                             /* No_precision */0,
                             [/* String_literal */11,
                              " argument(s)",
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]]]],
                   "@[The type constructor %a@ expects %i argument(s),@ but is here applied to %i argument(s)@]"],
                  Printtyp["longident"],
                  param[1],
                  param[2],
                  param[3]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Already bound type parameter '",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "Already bound type parameter '%s"],
                  param[1]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Unbound row variable in #",
                    [/* Alpha */15,/* End_of_format */0]],
                   "Unbound row variable in #%a"],
                  Printtyp["longident"],
                  param[1]);
         
        case 6:
         return Printtyp["report_unification_error"]
                 (ppf,
                  Env["empty"],
                  /* None */0,
                  param[1],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,"This type",/* End_of_format */0],
                              "This type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "should be an instance of type",
                               /* End_of_format */0],
                              "should be an instance of type"]);
                    });
         
        case 7:
         return Printtyp["report_unification_error"]
                 (ppf,
                  Env["empty"],
                  /* None */0,
                  param[1],
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "This alias is bound to type",
                               /* End_of_format */0],
                              "This alias is bound to type"]);
                    },
                  function(ppf)
                   {return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* String_literal */11,
                               "but is used as an instance of type",
                               /* End_of_format */0],
                              "but is used as an instance of type"]);
                    });
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The present constructor ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " has a conjunctive type",
                      /* End_of_format */0]]],
                   "The present constructor %s has a conjunctive type"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The present constructor ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11," has no type",/* End_of_format */0]]],
                   "The present constructor %s has no type"],
                  param[1]);
         
        case 10:
         var ty$prime=param[2];
         
         var ty=param[1];
         
         return Printtyp["wrap_printing_env"]
                 (env,
                  function(param$1)
                   {Printtyp["reset_and_mark_loops_list"]
                     (/* :: */[0,ty,/* :: */[0,ty$prime,/* [] */0]]);
                    return Format["fprintf"]
                            (ppf,
                             [/* Format */0,
                              [/* Formatting_gen */18,
                               [/* Open_box */1,
                                [/* Format */0,
                                 [/* String_literal */11,"<hov>",/* End_of_format */0],
                                 "<hov>"]],
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,
                                 32,
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* String */2,
                                    /* No_padding */0,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       /* Close_box */0,
                                       /* End_of_format */0]]]]]]]]],
                              "@[<hov>%s %a@ %s@ %a@]"],
                             "This variant type contains a constructor",
                             Printtyp["type_expr"],
                             ty,
                             "which should be",
                             Printtyp["type_expr"],
                             ty$prime);
                    });
         
        case 11:
         var ty$1=param[1];
         
         Printtyp["reset_and_mark_loops"](ty$1);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "The type ",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "is not a polymorphic variant type",
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]]]]],
                   "@[The type %a@ is not a polymorphic variant type@]"],
                  Printtyp["type_expr"],
                  ty$1);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "Variant tags `",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* String_literal */11,
                        "and `",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " have the same hash value.",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]],
                   "@[Variant tags `%s@ and `%s have the same hash value.@ %s@]"],
                  param[1],
                  param[2],
                  "Change one of them.");
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The type variable name ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " is not allowed in programs",
                      /* End_of_format */0]]],
                   "The type variable name %s is not allowed in programs"],
                  param[1]);
         
        case 14:
         var v=param[2];
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hov>",/* End_of_format */0],
                      "<hov>"]],
                    [/* String_literal */11,
                     "The universal type variable '",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " cannot be generalized:",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          46,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[<hov>The universal type variable '%s cannot be generalized:@ %s.@]"],
                  param[1],
                  Btype["is_Tvar"](v)
                   ?"it escapes its scope"
                   :Btype["is_Tunivar"](v)
                     ?"it is already bound to another variable"
                     :"it is not a variable");
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Multiple constraints for type ",
                    [/* Alpha */15,/* End_of_format */0]],
                   "Multiple constraints for type %a"],
                  Printtyp["longident"],
                  param[1]);
         
        case 16:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                    [/* String_literal */11,
                     "This is the second method `",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       "' of this object type.",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          /* End_of_format */0]]]]]]],
                   "@[This is the second method `%s' of this object type.@ %s@]"],
                  param[1],
                  "Multiple occurences are not allowed.");
         
        case 17:
         var lid$1=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound value ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound value %a"],
           Printtyp["longident"],
           lid$1);
         return spellcheck$1(ppf,Env["fold_values"],env,lid$1);
         
        case 18:
         var lid$2=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound constructor ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound constructor %a"],
           Printtyp["longident"],
           lid$2);
         return spellcheck_simple
                 (ppf,
                  Env["fold_constructors"],
                  function(d){return d[1];},
                  env,
                  lid$2);
         
        case 19:
         var lid$3=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound record field ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound record field %a"],
           Printtyp["longident"],
           lid$3);
         return spellcheck_simple
                 (ppf,Env["fold_labels"],function(d){return d[1];},env,lid$3);
         
        case 20:
         var lid$4=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound module ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound module %a"],
           Printtyp["longident"],
           lid$4);
         return spellcheck$1(ppf,Env["fold_modules"],env,lid$4);
         
        case 21:
         var lid$5=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound class ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound class %a"],
           Printtyp["longident"],
           lid$5);
         return spellcheck$1(ppf,Env["fold_classs"],env,lid$5);
         
        case 22:
         var lid$6=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound module type ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound module type %a"],
           Printtyp["longident"],
           lid$6);
         return spellcheck$1(ppf,Env["fold_modtypes"],env,lid$6);
         
        case 23:
         var lid$7=param[1];
         
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,
             "Unbound class type ",
             [/* Alpha */15,/* End_of_format */0]],
            "Unbound class type %a"],
           Printtyp["longident"],
           lid$7);
         return spellcheck$1(ppf,Env["fold_cltypes"],env,lid$7);
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "Ill-typed functor application ",
                    [/* Alpha */15,/* End_of_format */0]],
                   "Ill-typed functor application %a"],
                  Printtyp["longident"],
                  param[1]);
         
        case 25:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "The module ",
                    [/* Alpha */15,
                     [/* String_literal */11,
                      " is a functor, not a structure",
                      /* End_of_format */0]]],
                   "The module %a is a functor, not a structure"],
                  Printtyp["longident"],
                  param[1]);
         
        }}
    };

var
 match=
  Location["register_error_of_exn"]
   (function(param)
     {if(param[1]===$$Error)
       {return /* Some */[0,
                Location["error_of_printer"]
                 (param[2],report_error(param[3]),param[4])];
        }
      else
       {if(param[1]===Error_forward)
         {return /* Some */[0,param[2]];}
        else
         {return /* None */0;}
        }
      });

module["exports"]=
{"transl_simple_type":transl_simple_type,
 "transl_simple_type_univars":transl_simple_type_univars,
 "transl_simple_type_delayed":transl_simple_type_delayed,
 "transl_type_scheme":transl_type_scheme,
 "reset_type_variables":reset_type_variables,
 "type_variable":type_variable,
 "transl_type_param":transl_type_param,
 "narrow":narrow,
 "widen":widen,
 "Already_bound":Already_bound,
 "Error":$$Error,
 "report_error":report_error,
 "transl_modtype_longident":transl_modtype_longident,
 "transl_modtype":transl_modtype,
 "create_package_mty":create_package_mty$1,
 "find_type":find_type,
 "find_constructor":find_constructor,
 "find_all_constructors":find_all_constructors,
 "find_label":find_label,
 "find_all_labels":find_all_labels,
 "find_value":find_value,
 "find_class":find_class,
 "find_module":find_module,
 "lookup_module":lookup_module,
 "find_modtype":find_modtype,
 "find_class_type":find_class_type,
 "unbound_constructor_error":unbound_constructor_error,
 "unbound_label_error":unbound_label_error,
 "spellcheck_simple":spellcheck_simple,
 "check_deprecated":check_deprecated,
 "warning_enter_scope":warning_enter_scope,
 "warning_leave_scope":warning_leave_scope,
 "warning_attribute":warning_attribute,
 "error_of_extension":error_of_extension,
 "emit_external_warnings":emit_external_warnings};

