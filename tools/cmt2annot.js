// Generated CODE, PLEASE EDIT WITH CARE 

var Tast_iter=require("./tast_iter.js");
var CamlinternalOO=require("./camlinternalOO.js");
var Pprintast=require("./pprintast.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Env=require("./env.js");
var Printf=require("./printf.js");
var Envaux=require("./envaux.js");
var Format=require("./format.js");
var Untypeast=require("./untypeast.js");
var Path=require("./path.js");
var Oprint=require("./oprint.js");
var Location=require("./location.js");
var Ident=require("./ident.js");
var Stypes=require("./stypes.js");
var $$Array=require("./array.js");
var Config=require("./config.js");


var
 shared=
  [0,
   "cases",
   "case",
   "core_type",
   "structure",
   "module_binding",
   "bindings",
   "signature_item",
   "extension_constructor",
   "package_type",
   "value_description",
   "class_type_declaration",
   "binding",
   "class_signature",
   "type_extension",
   "row_field",
   "pattern",
   "signature",
   "class_type_field",
   "with_constraint",
   "class_expr",
   "type_declaration",
   "module_expr",
   "class_description",
   "expression",
   "class_type",
   "structure_item",
   "module_type",
   "class_structure",
   "class_field"];

var shared$1=[0,"scope"];

var
 shared$2=
  [0,
   "structure_item_rem",
   "structure_item",
   "structure",
   "pattern",
   "module_expr",
   "expression",
   "class_expr"];

var
 shared$3=
  [0,
   "binding",
   "bindings",
   "case",
   "cases",
   "class_description",
   "class_expr",
   "class_field",
   "class_signature",
   "class_structure",
   "class_type",
   "class_type_declaration",
   "class_type_field",
   "core_type",
   "expression",
   "extension_constructor",
   "module_binding",
   "module_expr",
   "module_type",
   "package_type",
   "pattern",
   "row_field",
   "signature",
   "signature_item",
   "structure",
   "structure_item",
   "type_declaration",
   "type_extension",
   "value_description",
   "with_constraint"];

var class_tables=[0,0,0,0];

var
 bind_variables=
  function(scope)
   {if(class_tables[1])
     {}
    else
     {var $$class=CamlinternalOO["create_table"](shared);
      
      var env=CamlinternalOO["new_variable"]($$class,"");
      
      var pattern=CamlinternalOO["get_method_label"]($$class,"pattern");
      
      var
       inh=
        CamlinternalOO["inherits"]($$class,0,0,shared$3,Tast_iter["iter"],0);
      
      var obj_init=inh[1];
      
      var pattern$1=inh[21];
      
      CamlinternalOO["set_method"]
       ($$class,
        pattern,
        function(self$neg1,pat)
         {pattern$1(self$neg1,pat);
          var match=pat[1];
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:var id=match[1];exit=31;
              case 1:var id=match[2];exit=31;
              default:exit=32;}}
          
          switch(exit)
           {case 32:return /* () */0;
            case 31:
             return Stypes["record"]
                     (/* An_ident */[5,
                       pat[2],
                       Ident["name"](id),
                       /* Idef */[1,self$neg1[env+1][1]]]);
             
            }
          });
      var
       env_init=
        function(env)
         {var $$self=CamlinternalOO["create_object_opt"](0,$$class);
          
          obj_init(env[2],$$self),$$self[env$1+1]=env[1];
          return CamlinternalOO["run_initializers_opt"](0,$$self,$$class);
          };
      
      CamlinternalOO["init_class"]($$class),class_tables[1]=env_init}
    
    var envs=[0,[0,scope],Tast_iter["iter"][4]];
    
    return class_tables[1](envs);
    };

var
 bind_bindings=
  function(scope,bindings)
   {var o=bind_variables(scope);
    
    return List["iter"]
            (function(x)
              {/* unknown */"(send o/1051 293013072 (field 0 x/1052))";},
             bindings);
    };

var
 bind_cases=
  function(l)
   {return List["iter"]
            (function(param)
              {var c_rhs=param[3];
               
               var c_guard=param[2];
               
               if(c_guard)
                {var init=c_rhs[2];
                 
                 var loc=/* record */[0,c_guard[1][2][1],init[2],init[3]];
                 }
               else
                {var loc=c_rhs[2];}
               
               /* unknown */"(send (apply bind_variables/1008 loc/1058) 293013072 (field 0 param/1278))";
               },
             l);
    };

var class_tables$1=[0,0,0,0];

var
 iterator=
  function(rebuild_env)
   {if(class_tables$1[1])
     {}
    else
     {var $$class=CamlinternalOO["create_table"](shared);
      
      var env=CamlinternalOO["new_variable"]($$class,"");
      
      var
       ids=
        CamlinternalOO["new_methods_variables"]($$class,shared$2,shared$1);
      
      var structure_item_rem=ids[1];
      
      var structure_item=ids[2];
      
      var structure=ids[3];
      
      var pattern=ids[4];
      
      var module_expr=ids[5];
      
      var expression=ids[6];
      
      var class_expr=ids[7];
      
      var scope=ids[8];
      
      var
       inh=
        CamlinternalOO["inherits"]($$class,0,0,shared$3,Tast_iter["iter"],0);
      
      var obj_init=inh[1];
      
      var class_expr$1=inh[7];
      
      var expression$1=inh[15];
      
      var pattern$1=inh[21];
      
      var structure_item$1=inh[26];
      
      CamlinternalOO["set_methods"]
       ($$class,
        [0,
         class_expr,
         function(self$neg2,node)
          {Stypes["record"](/* Ti_class */[2,node]);
           return class_expr$1(self$neg2,node);
           },
         module_expr,
         function(self$neg2,node)
          {Stypes["record"](/* Ti_mod */[3,node]);
           var copy=CamlinternalOO["copy"](self$neg2);
           
           return Tast_iter["module_expr"]((copy[scope+1]=node[2],copy),node);
           },
         expression,
         function(self$neg2,exp)
          {var match=exp[1];
           
           var exit;
           
           switch(match[0])
            {case 0:
              var path=match[1];
              
              var
               full_name=
                Path["name"](/* Some */[0,Oprint["parenthesized_ident"]],path);
              
              if(self$neg2[env+1][1])
               {try
                 {var
                   env$1=
                    Env["env_of_only_summary"]
                     (Envaux["env_from_summary"],exp[5]);
                  }
                catch(exn)
                 {if(exn[1]===Envaux["Error"])
                   {Format["eprintf"]
                     ([/* Format */0,
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Flush_newline */4,
                         /* End_of_format */0]],
                       "%a@."],
                      Envaux["report_error"],
                      exn[2]);
                    var env$1=Pervasives["exit"](2);
                    }
                  else
                   {throw exn;}
                  }
                }
              else
               {var env$1=exp[5];}
              
              try
               {var desc=Env["find_value"](path,env$1);
                
                var dloc=desc[3];
                
                if(dloc[3])
                 {var annot=/* Iref_external */0;}
                else
                 {var annot=/* Iref_internal */[0,dloc];}
                }
              catch(exn$1)
               {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                 {var annot=/* Iref_external */0;}
                else
                 {throw exn$1;}
                }
              
              Stypes["record"](/* An_ident */[5,exp[2],full_name,annot]);
             case 2:
              if(match[1]!==0)
               {bind_bindings(exp[2],match[2])}
              else
               {bind_bindings(match[3][2],match[2])}
              
             case 3:exit=25;
             case 5:bind_cases(match[2]),bind_cases(match[3]);
             case 6:exit=25;
             default:}
           
           switch(exit){case 25:bind_cases(match[2])}
           
           Stypes["record"](/* Ti_expr */[1,exp]);
           return expression$1(self$neg2,exp);
           },
         pattern,
         function(self$neg2,pat)
          {pattern$1(self$neg2,pat);
           return Stypes["record"](/* Ti_pat */[0,pat]);
           },
         structure_item_rem,
         function(self$neg2,s,rem)
          {var match=s[1];
           
           switch(match[0])
            {case 1:
              var loc=s[2];
              
              var bindings=match[2];
              
              var
               doit=
                function(loc_start)
                 {var init=self$neg2[scope+1];
                  
                  return bind_bindings
                          (/* record */[0,loc_start,init[2],init[3]],bindings);
                  };
              
              if(match[1]!==0)
               {doit(loc[1])}
              else
               {if(rem){doit(rem[1][2][1])}else{doit(loc[2])}}
              
             default:}
           
           Stypes["record_phrase"](s[2]);
           return structure_item$1(self$neg2,s);
           },
         structure_item,
         function(self$neg2,s)
          {/* unknown */"(sendself self-2/1140 structure_item_rem/1100 s/1141 0a)";
           },
         structure,
         function(self$neg2,l)
          {var
            loop=
             function(param)
              {if(param)
                {var rem=param[2];
                 
                 /* unknown */"(sendself self-2/1143 structure_item_rem/1100 (field 0 param/1228) rem/1147)";
                 
                 return loop(rem);
                 }
               else
                {return /* () */0;}
               };
           
           return loop(l[1]);
           }]);
      var
       env_init=
        function(env)
         {var $$self=CamlinternalOO["create_object_opt"](0,$$class);
          
          $$self[scope+1]=
          Location["none"],
          obj_init(env[2],$$self),
          $$self[env$1+1]=
          env[1];
          return CamlinternalOO["run_initializers_opt"](0,$$self,$$class);
          };
      
      CamlinternalOO["init_class"]($$class),class_tables$1[1]=env_init}
    
    var envs=[0,[0,rebuild_env],Tast_iter["iter"][4]];
    
    return class_tables$1[1](envs);
    };

var
 binary_part=
  function(iter,x)
   {switch(x[0])
     {case 0:/* unknown */"(send iter/1149 -951102413 (field 0 x/1150))";
      case 1:/* unknown */"(send iter/1149 832861151 (field 0 x/1150))";
      case 2:/* unknown */"(send iter/1149 782176664 (field 0 x/1150))";
      case 3:/* unknown */"(send iter/1149 293013072 (field 0 x/1150))";
      case 4:/* unknown */"(send iter/1149 639620572 (field 0 x/1150))";
      case 5:/* unknown */"(send iter/1149 359375608 (field 0 x/1150))";
      case 6:/* unknown */"(send iter/1149 -662996230 (field 0 x/1150))";
      case 7:/* unknown */"(send iter/1149 915171949 (field 0 x/1150))";
      }
    };

var
 gen_annot=
  function(target_filename,filename,param)
   {var cmt_annots=param[2];
    
    Envaux["reset_cache"](/* () */0);
    Config["load_path"][1]=param[8];
    if(target_filename)
     {switch(target_filename[1])
       {case "-":var target_filename$1=/* None */0;
        default:var target_filename$1=target_filename;}
      }
    else
     {var target_filename$1=/* Some */[0,Pervasives["^"](filename,".annot")];}
    
    var iterator$1=iterator(param[13]);
    
    var exit;
    
    switch(cmt_annots[0])
     {case 0:exit=8;
      case 1:
       /* unknown */"(send iterator/1166 -951102413 (field 0 cmt_annots/1162))";
       
       return Stypes["dump"](target_filename$1);
       
      case 2:
       Printf["eprintf"]
        ([/* Format */0,
          [/* String_literal */11,
           "Cannot generate annotations for interface file\n",
           [/* Flush */10,/* End_of_format */0]],
          "Cannot generate annotations for interface file\n%!"]);
       return Pervasives["exit"](2);
       
      case 3:
       $$Array["iter"](binary_part(iterator$1),cmt_annots[1]);
       return Stypes["dump"](target_filename$1);
       
      case 4:exit=8;
      }
    
    switch(exit)
     {case 8:
       Printf["fprintf"]
        (Pervasives["stderr"],
         [/* Format */0,
          [/* String_literal */11,
           "File was generated with an error\n",
           [/* Flush */10,/* End_of_format */0]],
          "File was generated with an error\n%!"]);
       return Pervasives["exit"](2);
       
      }
    };

var
 gen_ml=
  function(target_filename,filename,cmt)
   {var match=cmt[2];
    
    switch(match[0])
     {case 1:
       var typedtree=match[1];
       
       var
        match$1=
         /* tuple */[0,
          function(ppf)
           {return Pprintast["structure"]
                    (ppf,Untypeast["untype_structure"](typedtree));
            },
          ".ml"];
       
      case 2:
       var typedtree$1=match[1];
       
       var
        match$1=
         /* tuple */[0,
          function(ppf)
           {return Pprintast["signature"]
                    (ppf,Untypeast["untype_signature"](typedtree$1));
            },
          ".mli"];
       
      default:
       Printf["fprintf"]
        (Pervasives["stderr"],
         [/* Format */0,
          [/* String_literal */11,
           "File was generated with an error\n",
           [/* Flush */10,/* End_of_format */0]],
          "File was generated with an error\n%!"]);
       var match$1=Pervasives["exit"](2);
       }
    
    if(target_filename)
     {switch(target_filename[1])
       {case "-":var target_filename$1=/* None */0;
        default:var target_filename$1=target_filename;}
      }
    else
     {var
       target_filename$1=
        /* Some */[0,Pervasives["^"](filename,match$1[2])];
      }
    
    if(target_filename$1)
     {var oc=/* Some */[0,Pervasives["open_out"](target_filename$1[1])];}
    else
     {var oc=/* None */0;}
    
    if(oc)
     {var ppf=Format["formatter_of_out_channel"](oc[1]);}
    else
     {var ppf=Format["std_formatter"];}
    
    match$1[1](ppf);
    Format["pp_print_flush"](ppf,/* () */0);
    if(oc)
     {return Pervasives["close_out"](oc[1]);}
    else
     {return Pervasives["flush"](Pervasives["stdout"]);}
    };

module["exports"]=
{"bind_variables":bind_variables,
 "bind_bindings":bind_bindings,
 "bind_cases":bind_cases,
 "iterator":iterator,
 "binary_part":binary_part,
 "gen_annot":gen_annot,
 "gen_ml":gen_ml};

