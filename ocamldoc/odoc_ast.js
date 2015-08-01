var $$String=require("String");
var Odoc_name=require("Odoc_name");
var Odoc_global=require("Odoc_global");
var Odoc_value=require("Odoc_value");
var Pervasives=require("Pervasives");
var List=require("List");
var Predef=require("Predef");
var Printf=require("Printf");
var Odoc_sig=require("Odoc_sig");
var Types=require("Types");
var Misc=require("Misc");
var Path=require("Path");
var Odoc_env=require("Odoc_env");
var Filename=require("Filename");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Odoc_parameter=require("Odoc_parameter");
var Odoc_messages=require("Odoc_messages");



var blank="[ \n\r\t\f']";

var simple_blank="[ \r\t\f]";

var
 iter_val_pattern=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:var exit=379;}}
    else
     {switch(param[0])
       {case 0:return [0,Odoc_name["from_ident"](param[1])];
        case 3:var exit=379;
        default:return 0;}}
    
    switch(exit){case 379:return 0;}
    };

var
 add_to_hashes=
  function(table,table_values,tt)
   {switch(tt)
     {case 1:
       return List["iter"]
               (function(param)
                 {var pat=param[1];
                  
                  var match=iter_val_pattern(pat[1]);
                  
                  if(match)
                   {return Hashtbl["add"]
                            (table_values,match[1],[0,pat,param[2]]);
                    }
                  else
                   {return 0;}
                  },
                tt[2]);
       
      case 2:
       return Hashtbl["add"](table,[7,Odoc_name["from_ident"](tt[1][1])],tt);
      case 3:
       return List["iter"]
               (function(td)
                 {return Hashtbl["add"]
                          (table,[2,Odoc_name["from_ident"](td[1])],[3,[0,td,0]]);
                  },
                tt[1]);
       
      case 4:
       var match=tt[1][4];
       
       if(match)
        {return Hashtbl["add"]
                 (table,[5,Odoc_name["from_ident"](match[1][1])],tt);
         }
       else
        {throw [0,Assert_failure,[0,"odoc_ast.ml",81,18]];}
       
      case 5:
       return Hashtbl["add"](table,[6,Odoc_name["from_ident"](tt[1][1])],tt);
      case 6:
       return Hashtbl["add"](table,[0,Odoc_name["from_ident"](tt[1][1])],tt);
      case 7:
       return List["iter"]
               (function(mb)
                 {return Hashtbl["add"]
                          (table,[0,Odoc_name["from_ident"](mb[1])],[6,mb]);
                  },
                tt[1]);
       
      case 8:
       return Hashtbl["add"](table,[1,Odoc_name["from_ident"](tt[1][1])],tt);
      case 10:
       return List["iter"]
               (function(param)
                 {var ci=param[1];
                  
                  return Hashtbl["add"]
                          (table,
                           [3,Odoc_name["from_ident"](ci[4])],
                           [10,[0,[0,ci,param[2],param[3]],0]]);
                  },
                tt[1]);
       
      case 11:
       return List["iter"]
               (function(ci)
                 {return Hashtbl["add"]
                          (table,[4,Odoc_name["from_ident"](ci[1])],[11,[0,ci,0]]);
                  },
                tt[1]);
       
      default:return 0;}
    };

var
 tables=
  function(typedtree)
   {var t=Hashtbl["create"](0,13);
    
    var t_values=Hashtbl["create"](0,13);
    
    List["iter"]
     (function(str){return add_to_hashes(t,t_values,str[1]);},typedtree);
    return [0,t,t_values];
    };

var
 search_module=
  function(table,name)
   {var match=Hashtbl["find"](table,[0,name]);
    
    switch(match)
     {case 6:return match[1][3];
      default:throw [0,Assert_failure,[0,"odoc_ast.ml",129,13]];}
    };

var
 search_module_type=
  function(table,name)
   {var match=Hashtbl["find"](table,[1,name]);
    
    switch(match)
     {case 8:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_ast.ml",134,13]];}
    };

var
 search_extension=
  function(table,name)
   {var match=Hashtbl["find"](table,[5,name]);
    
    switch(match)
     {case 4:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_ast.ml",139,13]];}
    };

var
 search_exception=
  function(table,name)
   {var match=Hashtbl["find"](table,[6,name]);
    
    switch(match)
     {case 5:return match[1];
      default:throw [0,Assert_failure,[0,"odoc_ast.ml",144,13]];}
    };

var
 search_type_declaration=
  function(table,name)
   {var match=Hashtbl["find"](table,[2,name]);
    
    switch(match)
     {case 3:
       var match$1=match[1];
       
       if(match$1)
        {if(match$1[2]){var exit=363;}else{return match$1[1];}}
       else
        {var exit=363;}
       
      default:var exit=363;}
    
    switch(exit){case 363:throw [0,Assert_failure,[0,"odoc_ast.ml",149,13]];}
    };

var
 search_class_exp=
  function(table,name)
   {var match=Hashtbl["find"](table,[3,name]);
    
    switch(match)
     {case 10:
       var match$1=match[1];
       
       if(match$1)
        {if(match$1[2])
          {var exit=361;}
         else
          {var ce=match$1[1][1][8];
           
           try
            {var type_decl=search_type_declaration(table,name);
             
             return [0,ce,type_decl[4][1]];
             }
           catch(exn){if(exn=Not_found){return [0,ce,0];}else{throw exn;}}
           }
         }
       else
        {var exit=361;}
       
      default:var exit=361;}
    
    switch(exit){case 361:throw [0,Assert_failure,[0,"odoc_ast.ml",163,13]];}
    };

var
 search_class_type_declaration=
  function(table,name)
   {var match=Hashtbl["find"](table,[4,name]);
    
    switch(match)
     {case 11:
       var match$1=match[1];
       
       if(match$1)
        {if(match$1[2]){var exit=356;}else{return match$1[1][3];}}
       else
        {var exit=356;}
       
      default:var exit=356;}
    
    switch(exit){case 356:throw [0,Assert_failure,[0,"odoc_ast.ml",168,13]];}
    };

var search_value=function(table,name){return Hashtbl["find"](table,name);};

var
 search_primitive=
  function(table,name)
   {var match=Hashtbl["find"](table,[7,name]);
    
    switch(match)
     {case 2:return match[1][4][1];
      default:throw [0,Assert_failure,[0,"odoc_ast.ml",175,13]];}
    };

var
 get_nth_inherit_class_expr=
  function(cls,n)
   {var
     iter=
      function(cpt,param)
       {if(param)
         {var match=param[1][1];
          
          switch(match)
           {case 0:
             if(n=cpt){return match[2];}else{return iter(cpt+1,param[2]);}
            default:return iter(cpt,param[2]);}
          }
        else
         {throw Not_found;}
        };
    
    return iter(0,cls[2]);
    };

var
 search_attribute_type=
  function(cls,name)
   {var
     iter=
      function(param)
       {if(param)
         {var match=param[1][1];
          
          switch(match)
           {case 1:
             var match$1=match[4];
             
             var ident=match[3];
             
             switch(match$1)
              {case 0:
                if("unknown primitive:caml_string_equal")
                 {return match$1[1][2];}
                else
                 {var exit=349;}
                
               case 1:
                if("unknown primitive:caml_string_equal")
                 {return match$1[2][4];}
                else
                 {var exit=349;}
                
               }
             
            default:var exit=349;}
          
          switch(exit){case 349:return iter(param[2]);}
          }
        else
         {throw Not_found;}
        };
    
    return iter(cls[2]);
    };

var
 iter=
  function(param)
   {switch(param)
     {case 0:var exit=347;case 1:return param[1];case 2:var exit=347;}
    
    switch(exit){case 347:return iter(param[3]);}
    };

var class_sig_of_cltype_decl=function(ct_decl){return iter(ct_decl[2]);};

var
 search_method_expression=
  function(cls,name)
   {var
     iter$1=
      function(param)
       {if(param)
         {var match=param[1][1];
          
          switch(match)
           {case 2:
             var match$1=match[3];
             
             switch(match$1)
              {case 0:var exit=345;
               case 1:
                if("unknown primitive:caml_string_equal")
                 {return match$1[2];}
                else
                 {var exit=345;}
                
               }
             
            default:var exit=345;}
          
          switch(exit){case 345:return iter$1(param[2]);}
          }
        else
         {throw Not_found;}
        };
    
    return iter$1(cls[2]);
    };

var
 Typedtree_search=
  [0,
   iter_val_pattern,
   add_to_hashes,
   tables,
   search_module,
   search_module_type,
   search_extension,
   search_exception,
   search_type_declaration,
   search_class_exp,
   search_class_type_declaration,
   search_value,
   search_primitive,
   get_nth_inherit_class_expr,
   search_attribute_type,
   class_sig_of_cltype_decl,
   search_method_expression];

var
 Analyser=
  function(My_ir)
   {var Sig=Odoc_sig["Analyser"](My_ir);
    
    var file=Sig[1];
    
    var file_name=Sig[2];
    
    var get_string_of_file=Sig[3];
    
    var prepare_file=Sig[4];
    
    var get_comments_in_class=Sig[5];
    
    var get_comments_in_module=Sig[6];
    
    var
     tt_param_info_from_pattern=
      function(env,f_desc,pat)
       {var
         iter_pattern=
          function(pat$1)
           {var match=pat$1[1];
            
            if(typeof match=="number")
             {switch(match){}}
            else
             {switch(match[0])
               {case 0:
                 var name=Odoc_name["from_ident"](match[1]);
                 
                 return [0,
                         [0,name,Odoc_env["subst_type"](env,pat$1[4]),f_desc(name)]];
                 
                case 1:return iter_pattern(match[1]);
                case 3:
                 return [1,
                         List["map"](iter_pattern,match[1]),
                         Odoc_env["subst_type"](env,pat$1[4])];
                 
                case 4:
                 var match$1=match[2][2][1];
                 
                 if(typeof match$1=="number")
                  {switch(match$1){}}
                 else
                  {switch(match$1[0])
                    {case 3:
                      var $js=Path["same"](match$1[1],Predef["path_unit"]);
                     default:var exit=336;}}
                 
                 switch(exit){case 336:var $js$1=0;}
                 if($js$1)
                  {return [0,[0,"()",Odoc_env["subst_type"](env,pat$1[4]),0]];
                   }
                 else
                  {var exit$1=337;}
                 
                default:var exit$1=337;}}
            
            switch(exit$1)
             {case 337:
               return [0,[0,"()",Odoc_env["subst_type"](env,pat$1[4]),0]];
              }
            };
        
        return iter_pattern(pat);
        };
    
    var
     tt_analyse_function_parameters=
      function(env,current_comment_opt,pat_exp_list)
       {if(pat_exp_list)
         {var match=pat_exp_list[1];
          
          var func_body=match[3];
          
          var pattern_param=match[1];
          
          if(pat_exp_list[2])
           {var parameter=[1,0,Odoc_env["subst_type"](env,pattern_param[4])];
            
            return [0,parameter,0];
            }
          else
           {var
             parameter$1=
              tt_param_info_from_pattern
               (env,
                Odoc_parameter["desc_from_info_opt"](current_comment_opt),
                pattern_param);
            
            switch(parameter$1)
             {case 0:
               switch(parameter$1[1][1])
                {case "*opt*":
                  var match$1=func_body[1];
                  
                  switch(match$1)
                   {case 2:
                     var match$2=match$1[2];
                     
                     if(match$2)
                      {var match$3=match$2[1];
                       
                       var match$4=match$3[1][1];
                       
                       if(typeof match$4=="number")
                        {switch(match$4){}}
                       else
                        {switch(match$4[0])
                          {case 0:
                            var name=Odoc_name["from_ident"](match$4[1]);
                            
                            var
                             new_param=
                              [0,
                               [0,
                                name,
                                Odoc_env["subst_type"](env,match$3[2][4]),
                                Odoc_parameter["desc_from_info_opt"]
                                 (current_comment_opt,name)]];
                            
                            var match$5=[0,new_param,match$1[3]];
                            
                           default:var exit=331;}}
                       }
                     else
                      {var exit=331;}
                     
                    default:var exit=331;}
                  
                  switch(exit)
                   {case 331:var match$5=[0,parameter$1,func_body];}
                  
                 default:var exit$1=332;}
               
              case 1:var exit$1=332;
              }
            
            switch(exit$1){case 332:var match$5=[0,parameter$1,func_body];}
            
            var p=match$5[1];
            
            var match$6=match$5[2][1];
            
            switch(match$6)
             {case 3:
               return [0,
                       p,
                       tt_analyse_function_parameters
                        (env,current_comment_opt,match$6[2])];
               
              default:return [0,p,0];}
            }
          }
        else
         {throw [0,
                 Failure,
                 "tt_analyse_function_parameters: 'function' without pattern"];
          }
        };
    
    var
     tt_analyse_value=
      function(env,current_module_name,comment_opt,loc,pat_exp,rec_flag)
       {var pat=pat_exp[1];
        
        var match=pat[1];
        
        var match$1=pat_exp[2][1];
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 0:
             var ident=match[1];
             
             switch(match$1)
              {case 3:
                var name_pre=Odoc_name["from_ident"](ident);
                
                var name=Odoc_name["parens_if_infix"](name_pre);
                
                var
                 complete_name=
                  Odoc_name["concat"](current_module_name,name);
                
                if(Odoc_global["keep_code"][1])
                 {var code=[0,get_string_of_file(loc[1][4],loc[2][4])];}
                else
                 {var code=0;}
                
                var
                 new_value=
                  [0,
                   complete_name,
                   comment_opt,
                   Odoc_env["subst_type"](env,pat[4]),
                   rec_flag=1,
                   tt_analyse_function_parameters(env,comment_opt,match$1[2]),
                   code,
                   [0,[0,loc],0]];
                
                return [0,new_value,0];
                
               default:
                var name_pre$1=Odoc_name["from_ident"](ident);
                
                var name$1=Odoc_name["parens_if_infix"](name_pre$1);
                
                var
                 complete_name$1=
                  Odoc_name["concat"](current_module_name,name$1);
                
                if(Odoc_global["keep_code"][1])
                 {var code$1=[0,get_string_of_file(loc[1][4],loc[2][4])];}
                else
                 {var code$1=0;}
                
                var
                 new_value$1=
                  [0,
                   complete_name$1,
                   comment_opt,
                   Odoc_env["subst_type"](env,pat[4]),
                   rec_flag=1,
                   0,
                   code$1,
                   [0,[0,loc],0]];
                
                return [0,new_value$1,0];
                }
             
            case 3:return 0;
            default:var exit=323;}}
        
        switch(exit){case 323:return 0;}
        };
    
    var
     tt_name_of_class_expr=
      function(clexp)
       {var match=clexp[1];
        
        switch(match)
         {case 0:return Odoc_name["from_path"](match[1]);
          case 3:var exit=312;
          case 5:var exit=312;
          default:return Odoc_messages["object_end"];}
        
        switch(exit){case 312:return tt_name_of_class_expr(match[1]);}
        };
    
    var
     tt_analyse_method_expression=
      function(env,current_method_name,comment_opt,$staropt$star,exp)
       {if($staropt$star){var first=$staropt$star[1];}else{var first=1;}
        
        var match=exp[1];
        
        switch(match)
         {case 3:
           var pat_exp_list=match[2];
           
           if(pat_exp_list)
            {if(pat_exp_list)
              {var match$1=pat_exp_list[1];
               
               var body=match$1[3];
               
               var pattern_param=match$1[1];
               
               if(pat_exp_list[2])
                {var
                  new_param=
                   [0,[0,"??",Odoc_env["subst_type"](env,pattern_param[4]),0]];
                 
                 return [0,new_param,0];
                 }
               else
                {if(!first)
                  {var
                    parameter=
                     tt_param_info_from_pattern
                      (env,
                       Odoc_parameter["desc_from_info_opt"](comment_opt),
                       pattern_param);
                   
                   switch(parameter)
                    {case 0:
                      switch(parameter[1][1])
                       {case "*opt*":
                         var match$2=body[1];
                         
                         switch(match$2)
                          {case 2:
                            var match$3=match$2[2];
                            
                            if(match$3)
                             {var match$4=match$3[1];
                              
                              var match$5=match$4[1][1];
                              
                              if(typeof match$5=="number")
                               {switch(match$5){}}
                              else
                               {switch(match$5[0])
                                 {case 0:
                                   var name=Odoc_name["from_ident"](match$5[1]);
                                   
                                   var
                                    new_param$1=
                                     [0,
                                      [0,
                                       name,
                                       Odoc_env["subst_type"](env,match$4[2][4]),
                                       Odoc_parameter["desc_from_info_opt"](comment_opt,name)]];
                                   
                                   var match$6=[0,new_param$1,match$2[3]];
                                   
                                  default:var exit=303;}}
                              }
                            else
                             {var exit=303;}
                            
                           default:var exit=303;}
                         
                         switch(exit){case 303:var match$6=[0,parameter,body];}
                         
                        default:var exit$1=304;}
                      
                     case 1:var exit$1=304;
                     }
                   
                   switch(exit$1){case 304:var match$6=[0,parameter,body];}
                   
                   return [0,
                           match$6[1],
                           tt_analyse_method_expression
                            (env,current_method_name,comment_opt,[0,0],match$6[2])];
                   }
                 else
                  {return tt_analyse_method_expression
                           (env,current_method_name,comment_opt,[0,0],body);
                   }
                 }
               }
             else
              {throw [0,Assert_failure,[0,"odoc_ast.ml",458,19]];}
             }
           else
            {throw [0,
                    Failure,
                    Pervasives["^"]
                     (Odoc_messages["bad_tree"],
                      Pervasives["^"]
                       (" ",
                        Odoc_messages["method_without_param"](current_method_name)))];
             }
           
          default:return 0;}
        };
    
    var
     analyse_class_structure=
      function
       (env,
        current_class_name,
        tt_class_sig,
        last_pos,
        pos_limit,
        p_cls,
        tt_cls,
        table)
       {var
         iter$1=
          function(acc_inher,acc_fields,last_pos$1,param)
           {if(param)
             {var q=param[2];
              
              var item=param[1];
              
              var loc=item[2];
              
              var match=item[1];
              
              switch(match)
               {case 0:
                 var p_clexp=match[2];
                 
                 var n=List["length"](acc_inher);
                 
                 try
                  {var tt_clexp=Typedtree_search[13](tt_cls,n);}
                 catch(exn)
                  {if(exn=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["inherit_classexp_not_found_in_typedtree"](n)];
                     }
                   else
                    {throw exn;}
                   }
                 
                 var
                  match$1=
                   get_comments_in_class(last_pos$1,p_clexp[2][1][4]);
                 
                 var info_opt=match$1[1];
                 
                 if(info_opt)
                  {var text_opt=info_opt[1][1];}
                 else
                  {var text_opt=0;}
                 
                 var name=tt_name_of_class_expr(tt_clexp);
                 
                 var
                  inher=
                   [0,
                    Odoc_env["full_class_or_class_type_name"](env,name),
                    0,
                    text_opt];
                 
                 return iter$1
                         (Pervasives["@"](acc_inher,[0,inher,0]),
                          Pervasives["@"](acc_fields,match$1[2]),
                          p_clexp[2][2][4],
                          q);
                 
                case 1:
                 var match$2=match[1];
                 
                 var label=match$2[1][1];
                 
                 switch(match$2[3]){case 0:var virt=1;case 1:var virt=0;}
                 
                 var
                  complete_name=
                   Odoc_name["concat"](current_class_name,label);
                 
                 var match$3=get_comments_in_class(last_pos$1,loc[1][4]);
                 
                 try
                  {var type_exp=Typedtree_search[14](tt_cls,label);}
                 catch(exn$1)
                  {if(exn$1=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["attribute_not_found_in_typedtree"]
                             (complete_name)];
                     }
                   else
                    {throw exn$1;}
                   }
                 
                 if(Odoc_global["keep_code"][1])
                  {var code=[0,get_string_of_file(loc[1][4],loc[2][4])];}
                 else
                  {var code=0;}
                 
                 var
                  att=
                   [0,
                    [0,
                     complete_name,
                     match$3[1],
                     Odoc_env["subst_type"](env,type_exp),
                     0,
                     0,
                     code,
                     [0,[0,loc],0]],
                    match$2[2]=1,
                    virt];
                 
                 return iter$1
                         (acc_inher,
                          Pervasives["@"]
                           (acc_fields,Pervasives["@"](match$3[2],[0,[0,att],0])),
                          loc[2][4],
                          q);
                 
                case 2:
                 var match$4=match[1];
                 
                 var private_flag=match$4[2];
                 
                 var label$1=match$4[1][1];
                 
                 switch(match$4[3])
                  {case 0:
                    var
                     complete_name$1=
                      Odoc_name["concat"](current_class_name,label$1);
                    
                    var match$5=get_comments_in_class(last_pos$1,loc[1][4]);
                    
                    try
                     {var
                       met_type=
                        Odoc_sig["Signature_search"][10](label$1,tt_class_sig);
                      }
                    catch(exn$2)
                     {if(exn$2=Not_found)
                       {throw [0,
                               Failure,
                               Odoc_messages["method_type_not_found"]
                                (current_class_name,label$1)];
                        }
                      else
                       {throw exn$2;}
                      }
                    
                    var match$6=met_type[1];
                    
                    if(typeof match$6=="number")
                     {switch(match$6){}}
                    else
                     {switch(match$6[0])
                       {case 1:var real_type=match$6[3];default:var exit=283;}}
                    
                    switch(exit){case 283:var real_type=met_type;}
                    
                    if(Odoc_global["keep_code"][1])
                     {var code$1=[0,get_string_of_file(loc[1][4],loc[2][4])];}
                    else
                     {var code$1=0;}
                    
                    var
                     met=
                      [0,
                       [0,
                        complete_name$1,
                        match$5[1],
                        Odoc_env["subst_type"](env,real_type),
                        0,
                        0,
                        code$1,
                        [0,[0,loc],0]],
                       private_flag=0,
                       1];
                    
                    Odoc_value["update_value_parameters_text"](met[1]);
                    return iter$1
                            (acc_inher,
                             Pervasives["@"]
                              (acc_fields,Pervasives["@"](match$5[2],[0,[1,met],0])),
                             loc[2][4],
                             q);
                    
                   case 1:
                    var
                     complete_name$2=
                      Odoc_name["concat"](current_class_name,label$1);
                    
                    var match$7=get_comments_in_class(last_pos$1,loc[1][4]);
                    
                    var info_opt$1=match$7[1];
                    
                    try
                     {var exp=Typedtree_search[16](tt_cls,label$1);}
                    catch(exn$3)
                     {if(exn$3=Not_found)
                       {throw [0,
                               Failure,
                               Odoc_messages["method_not_found_in_typedtree"]
                                (complete_name$2)];
                        }
                      else
                       {throw exn$3;}
                      }
                    
                    var match$8=exp[4][1];
                    
                    if(typeof match$8=="number")
                     {switch(match$8){}}
                    else
                     {switch(match$8[0])
                       {case 1:var real_type$1=match$8[3];default:var exit$1=291;}}
                    
                    switch(exit$1){case 291:var real_type$1=exp[4];}
                    
                    if(Odoc_global["keep_code"][1])
                     {var code$2=[0,get_string_of_file(loc[1][4],loc[2][4])];}
                    else
                     {var code$2=0;}
                    
                    var
                     met$1=
                      [0,
                       [0,
                        complete_name$2,
                        info_opt$1,
                        Odoc_env["subst_type"](env,real_type$1),
                        0,
                        tt_analyse_method_expression
                         (env,complete_name$2,info_opt$1,0,exp),
                        code$2,
                        [0,[0,loc],0]],
                       private_flag=0,
                       0];
                    
                    Odoc_value["update_value_parameters_text"](met$1[1]);
                    return iter$1
                            (acc_inher,
                             Pervasives["@"]
                              (acc_fields,Pervasives["@"](match$7[2],[0,[1,met$1],0])),
                             loc[2][4],
                             q);
                    
                   }
                 
                case 3:var exit$2=297;
                case 4:
                 return iter$1(acc_inher,acc_fields,match[1][2][2][4],q);
                case 5:var exit$2=297;
                case 6:throw [0,Assert_failure,[0,"odoc_ast.ml",689,39]];
                }
              
              switch(exit$2)
               {case 297:return iter$1(acc_inher,acc_fields,loc[2][4],q);}
              }
            else
             {var s=get_string_of_file(last_pos$1,pos_limit);
              
              var match$9=My_ir[1](file_name[1],s);
              
              var
               ele_comments=
                List["fold_left"]
                 (function(acc,sc)
                   {var match$10=sc[1];
                    
                    if(match$10)
                     {return Pervasives["@"](acc,[0,[2,match$10[1]],0]);}
                    else
                     {return acc;}
                    },
                  0,
                  match$9[2]);
              
              return [0,acc_inher,Pervasives["@"](acc_fields,ele_comments)];
              }
            };
        
        return iter$1(0,0,last_pos,p_cls[2]);
        };
    
    var
     analyse_class_kind=
      function
       (env,
        current_class_name,
        comment_opt,
        last_pos,
        p_class_expr,
        tt_class_exp,
        table)
       {var match=p_class_expr[1];
        
        var match$1=tt_class_exp[1];
        
        switch(match)
         {case 0:
           switch(match$1)
            {case 0:var name=Odoc_name["from_path"](match$1[1]);
             default:var name=Odoc_name["from_longident"](match[1][1]);}
           
           var match$2=tt_class_exp[3];
           
           switch(match$2)
            {case 0:var params=match$2[2];
             case 1:var exit=241;
             case 2:var exit=241;
             }
           
           switch(exit){case 241:var params=0;}
           
           return [0,
                   0,
                   [2,
                    [0,
                     Odoc_env["full_class_name"](env,name),
                     0,
                     List["map"](Odoc_env["subst_type"](env),params)]]];
           
          case 1:
           switch(match$1)
            {case 1:
              var match$3=tt_class_exp[3];
              
              switch(match$3)
               {case 0:var exit$1=246;
                case 1:var tt_class_sig=match$3[1];
                case 2:var exit$1=246;
                }
              
              switch(exit$1)
               {case 246:
                 throw [0,
                        Failure,
                        "analyse_class_kind: no class signature for a class structure."];
                 
                }
              
              var
               match$4=
                analyse_class_structure
                 (env,
                  current_class_name,
                  tt_class_sig,
                  last_pos,
                  p_class_expr[2][2][4],
                  match[1],
                  match$1[1],
                  table);
              
              return [0,0,[0,match$4[1],match$4[2]]];
              
             default:var exit$2=263;}
           
          case 2:
           switch(match$1)
            {case 2:
              var tt_class_expr2=match$1[4];
              
              var pat=match$1[2];
              
              var match$5=pat[1];
              
              if(typeof match$5=="number")
               {switch(match$5){}}
              else
               {switch(match$5[0])
                 {case 0:
                   if("unknown primitive:caml_string_equal")
                    {var match$6=tt_class_expr2[1];
                     
                     switch(match$6)
                      {case 4:
                        var match$7=match$6[2];
                        
                        if(match$7)
                         {var match$8=match$7[1];
                          
                          var match$9=match$8[1][1];
                          
                          if(typeof match$9=="number")
                           {switch(match$9){}}
                          else
                           {switch(match$9[0])
                             {case 0:
                               var name$1=Odoc_name["from_ident"](match$9[1]);
                               
                               var
                                new_param=
                                 [0,
                                  [0,
                                   name$1,
                                   Odoc_env["subst_type"](env,match$8[2][4]),
                                   Odoc_parameter["desc_from_info_opt"](comment_opt,name$1)]];
                               
                               var match$10=[0,new_param,match$6[4]];
                               
                              default:var exit$3=251;}}
                          }
                        else
                         {var exit$3=251;}
                        
                       default:var exit$3=251;}
                     
                     switch(exit$3)
                      {case 251:
                        throw [0,Failure,"analyse_class_kind: strange case"];
                       }
                     }
                   else
                    {var exit$4=253;}
                   
                  default:var exit$4=253;}}
              
              switch(exit$4)
               {case 253:
                 var
                  new_param$1=
                   tt_param_info_from_pattern
                    (env,Odoc_parameter["desc_from_info_opt"](comment_opt),pat);
                 
                 var match$10=[0,new_param$1,tt_class_expr2];
                 
                }
              
              var
               match$11=
                analyse_class_kind
                 (env,
                  current_class_name,
                  comment_opt,
                  last_pos,
                  match[4],
                  match$10[2],
                  table);
              
              return [0,[0,match$10[1],match$11[1]],match$11[2]];
              
             default:var exit$2=263;}
           
          case 3:
           switch(match$1)
            {case 3:
              var match$12=match$1[1][1];
              
              switch(match$12)
               {case 0:var applied_name=Odoc_name["from_path"](match$12[1]);
                default:
                 var match$13=match[1][1];
                 
                 switch(match$13)
                  {case 0:
                    var
                     applied_name=
                      Odoc_name["from_longident"](match$13[1][1]);
                    
                   default:var applied_name=Odoc_messages["object_end"];}
                 }
              
              var
               param_exps=
                List["fold_left"]
                 (function(acc,param)
                   {var exp_opt=param[2];
                    
                    if(exp_opt)
                     {return Pervasives["@"](acc,[0,exp_opt[1],0]);}
                    else
                     {return acc;}
                    },
                  0,
                  match$1[2]);
              
              var
               param_types=
                List["map"](function(e){return e[4];},param_exps);
              
              var
               params_code=
                List["map"]
                 (function(e)
                   {return get_string_of_file(e[2][1][4],e[2][2][4]);},
                  param_exps);
              
              return [0,
                      0,
                      [1,
                       [0,
                        Odoc_env["full_class_name"](env,applied_name),
                        0,
                        param_types,
                        params_code]]];
              
             default:var exit$2=263;}
           
          case 4:
           switch(match$1)
            {case 4:
              return analyse_class_kind
                      (env,
                       current_class_name,
                       comment_opt,
                       last_pos,
                       match[3],
                       match$1[4],
                       table);
              
             default:var exit$2=263;}
           
          case 5:
           switch(match$1)
            {case 5:
              var
               match$14=
                analyse_class_kind
                 (env,
                  current_class_name,
                  comment_opt,
                  last_pos,
                  match[1],
                  match$1[1],
                  table);
              
              var class_type_kind=[1,[0,Odoc_messages["object_end"],0,0]];
              
              return [0,match$14[1],[3,match$14[2],class_type_kind]];
              
             default:var exit$2=263;}
           
          case 6:var exit$2=263;
          }
        
        switch(exit$2)
         {case 263:
           throw [0,
                  Failure,
                  "analyse_class_kind: Parsetree and typedtree don't match."];
           
          }
        };
    
    var
     analyse_class=
      function
       (env,
        current_module_name,
        comment_opt,
        p_class_decl,
        tt_type_params,
        tt_class_exp,
        table)
       {var name=p_class_decl[3];
        
        var complete_name=Odoc_name["concat"](current_module_name,name[1]);
        
        var loc=p_class_decl[4][2];
        
        var pos_start=loc[1][4];
        
        var virt=p_class_decl[1]=0;
        
        var cltype=Odoc_env["subst_class_type"](env,tt_class_exp[3]);
        
        var
         match=
          analyse_class_kind
           (env,
            complete_name,
            comment_opt,
            pos_start,
            p_class_decl[4],
            tt_class_exp,
            table);
        
        return [0,
                complete_name,
                comment_opt,
                cltype,
                tt_type_params,
                virt,
                match[2],
                match[1],
                [0,[0,loc],0]];
        };
    
    var
     tt_name_from_module_expr=
      function(mod_expr)
       {var match=mod_expr[1];
        
        switch(match)
         {case 0:return Odoc_name["from_path"](match[1]);
          case 4:return tt_name_from_module_expr(match[1]);
          default:return Odoc_messages["struct_end"];}
        };
    
    var
     tt_get_included_module_list=
      function(tt_structure)
       {var
         f=
          function(acc,item)
           {var match=item[1];
            
            switch(match)
             {case 12:
               return Pervasives["@"]
                       (acc,[0,[0,tt_name_from_module_expr(match[1][1]),0,0],0]);
               
              default:return acc;}
            };
        
        return List["fold_left"](f,0,tt_structure[1]);
        };
    
    var
     replace_dummy_included_modules=
      function(module_elements,included_modules)
       {var
         f=
          function(param)
           {var match=param[1];
            
            if(match)
             {var ele=match[1];
              
              switch(ele)
               {case 2:
                 var match$1=param[2];
                 
                 var q=match[2];
                 
                 var im=ele[1];
                 
                 if(match$1)
                  {var im_repl=match$1[1];
                   
                   return [0,
                           [2,[0,im_repl[1],im_repl[2],im[3]]],
                           f([0,q,match$1[2]])];
                   }
                 else
                  {return [0,[2,im],q];}
                 
                default:return [0,ele,f([0,match[2],param[2]])];}
              }
            else
             {return 0;}
            };
        
        return f([0,module_elements,included_modules]);
        };
    
    var
     filter_module_with_module_type_constraint=
      function(m,mt)
       {var match=m[6];
        
        switch(match)
         {case 0:
           switch(mt)
            {case 1:
              m[6]=
              [0,
               filter_module_elements_with_module_type_constraint
                (match[1],mt[1])],
              0;
              return m[2]=mt,0;
              
             default:var exit=195;}
           
          default:var exit=195;}
        
        switch(exit){case 195:return 0;}
        };
    
    var
     filter_module_type_with_module_type_constraint=
      function(mtyp,mt)
       {var match=mtyp[6];
        
        if(match)
         {var match$1=match[1];
          
          switch(match$1)
           {case 0:
             switch(mt)
              {case 1:
                mtyp[6]=
                [0,
                 [0,
                  filter_module_elements_with_module_type_constraint
                   (match$1[1],mt[1])]],
                0;
                return mtyp[3]=[0,mt],0;
                
               default:var exit=196;}
             
            default:var exit=196;}
          }
        else
         {var exit=196;}
        
        switch(exit){case 196:return 0;}
        };
    
    var
     filter_module_elements_with_module_type_constraint=
      function(l,lsig)
       {var
         pred=
          function(ele)
           {switch(ele)
             {case 0:
               var m=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 3:
                      var n1=Odoc_name["simple"](m[1]);
                      
                      var n2=Ident["name"](param[1]);
                      
                      var match="unknown primitive:caml_string_equal";
                      
                      if(match!=0)
                       {filter_module_with_module_type_constraint(m,param[2][1]);
                        return 1;
                        }
                      else
                       {return 0;}
                      
                     default:return 0;}
                   };
               
              case 1:
               var mt=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 4:
                      var match=param[2][1];
                      
                      if(match)
                       {var n1=Odoc_name["simple"](mt[1]);
                        
                        var n2=Ident["name"](param[1]);
                        
                        var match$1="unknown primitive:caml_string_equal";
                        
                        if(match$1!=0)
                         {filter_module_type_with_module_type_constraint(mt,match[1]);
                          return 1;
                          }
                        else
                         {return 0;}
                        }
                      else
                       {var exit=202;}
                      
                     default:var exit=202;}
                   
                   switch(exit){case 202:return 0;}
                   };
               
              case 2:var f=function(param){return 1;};
              case 3:
               var c=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 5:
                      var n1=Odoc_name["simple"](c[1]);
                      
                      var n2=Ident["name"](param[1]);
                      
                      return "unknown primitive:caml_string_equal";
                      
                     default:return 0;}
                   };
               
              case 4:
               var ct=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 6:
                      var n1=Odoc_name["simple"](ct[1]);
                      
                      var n2=Ident["name"](param[1]);
                      
                      return "unknown primitive:caml_string_equal";
                      
                     default:return 0;}
                   };
               
              case 5:
               var v=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 0:
                      var n1=Odoc_name["simple"](v[1]);
                      
                      var n2=Ident["name"](param[1]);
                      
                      return "unknown primitive:caml_string_equal";
                      
                     default:return 0;}
                   };
               
              case 6:
               var te=ele[1];
               
               var
                l$1=
                 filter_extension_constructors_with_module_type_constraint
                  (te[5],lsig);
               
               te[5]=l$1,0;
               if(l$1!=0)
                {var f=function(param){return 1;};}
               else
                {var f=function(param){return 0;};}
               
              case 7:
               var e=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 2:
                      var n1=Odoc_name["simple"](e[1]);
                      
                      var n2=Ident["name"](param[1]);
                      
                      return "unknown primitive:caml_string_equal";
                      
                     default:return 0;}
                   };
               
              case 8:
               var t=ele[1];
               
               var
                f=
                 function(param)
                  {switch(param)
                    {case 1:
                      var n1=Odoc_name["simple"](t[1]);
                      
                      var n2=Ident["name"](param[1]);
                      
                      return "unknown primitive:caml_string_equal";
                      
                     default:return 0;}
                   };
               
              case 9:var f=function(param){return 1;};
              }
            
            return List["exists"](f,lsig);
            };
        
        return List["filter"](pred,l);
        };
    
    var
     filter_extension_constructors_with_module_type_constraint=
      function(l,lsig)
       {var
         pred=
          function(xt)
           {return List["exists"]
                    (function(param)
                      {switch(param)
                        {case 2:
                          var n1=Odoc_name["simple"](xt[1]);
                          
                          var n2=Ident["name"](param[1]);
                          
                          return "unknown primitive:caml_string_equal";
                          
                         default:return 0;}
                       },
                     lsig);
            };
        
        return List["filter"](pred,l);
        };
    
    var
     analyse_structure=
      function(env,current_module_name,last_pos,pos_limit,parsetree,typedtree)
       {var match=Typedtree_search[3](typedtree[1]);
        
        var table_values=match[2];
        
        var table=match[1];
        
        var
         iter$1=
          function(env$1,last_pos$1,param)
           {if(param)
             {var q=param[2];
              
              var item=param[1];
              
              var match$1=get_comments_in_module(last_pos$1,item[2][1][4]);
              
              if(q)
               {var pos_limit2=q[1][2][1][4];}
              else
               {var pos_limit2=pos_limit;}
              
              var
               match$2=
                analyse_structure_item
                 (env$1,
                  current_module_name,
                  item[2],
                  pos_limit2,
                  match$1[1],
                  item[1],
                  typedtree,
                  table,
                  table_values);
              
              return Pervasives["@"]
                      (match$1[2],
                       Pervasives["@"]
                        (match$2[3],iter$1(match$2[2],item[2][2][4]+match$2[1],q)));
              }
            else
             {var s=get_string_of_file(last_pos$1,pos_limit);
              
              var match$3=My_ir[1](file_name[1],s);
              
              return List["fold_left"]
                      (function(acc,sc)
                        {var match$4=sc[1];
                         
                         if(match$4)
                          {return Pervasives["@"](acc,[0,[9,match$4[1]],0]);}
                         else
                          {return acc;}
                         },
                       0,
                       match$3[2]);
              }
            };
        
        return iter$1(env,last_pos,parsetree);
        };
    
    var
     analyse_structure_item=
      function
       (env,
        current_module_name,
        loc,
        pos_limit,
        comment_opt,
        parsetree_item_desc,
        typedtree,
        table,
        table_values)
       {switch(parsetree_item_desc)
         {case 0:return [0,0,env,0];
          case 1:
           var rec_flag=parsetree_item_desc[1];
           
           var
            iter_pat=
             function(param)
              {if(typeof param=="number")
                {switch(param){case 0:var exit=32;}}
               else
                {switch(param[0])
                  {case 0:return [0,param[1]];
                   case 4:var exit=32;
                   case 10:return iter_pat(param[1][1]);
                   default:return 0;}}
               
               switch(exit){case 32:return 0;}
               };
           
           var
            iter$1=
             function($staropt$star,last_pos,acc_env,acc,p_e_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=0;}
               
               if(p_e_list)
                {var q=p_e_list[2];
                 
                 var match=p_e_list[1];
                 
                 var pat=match[1];
                 
                 var value_name_opt=iter_pat(pat[1]);
                 
                 var new_last_pos=match[2][2][2][4];
                 
                 if(value_name_opt)
                  {try
                    {var
                      pat_exp=
                       Typedtree_search[11](table_values,value_name_opt[1][1]);
                     
                     if(first)
                      {var match$1=[0,comment_opt,0];}
                     else
                      {var match$1=get_comments_in_module(last_pos,pat[2][1][4]);}
                     
                     var
                      l_values=
                       tt_analyse_value
                        (env,current_module_name,match$1[1],loc,pat_exp,rec_flag);
                     
                     var
                      new_env=
                       List["fold_left"]
                        (function(e,v){return Odoc_env["add_value"](e,v[1]);},
                         acc_env,
                         l_values);
                     
                     var l_ele=List["map"](function(v){return [5,v];},l_values);
                     
                     return iter$1
                             (0,
                              new_last_pos,
                              new_env,
                              Pervasives["@"](acc,Pervasives["@"](match$1[2],l_ele)),
                              q);
                     }
                   catch(exn)
                    {if(exn=Not_found)
                      {return iter$1(0,new_last_pos,acc_env,acc,q);}
                     else
                      {throw exn;}
                     }
                   }
                 else
                  {return iter$1(0,new_last_pos,acc_env,acc,q);}
                 }
               else
                {return [0,acc_env,acc];}
               };
           
           var match=iter$1([0,1],loc[1][4],env,0,parsetree_item_desc[2]);
           
           return [0,0,match[1],match[2]];
           
          case 2:
           var name_pre=parsetree_item_desc[1][1][1];
           
           var typ=Typedtree_search[12](table,name_pre);
           
           var name=Odoc_name["parens_if_infix"](name_pre);
           
           var complete_name=Odoc_name["concat"](current_module_name,name);
           
           if(Odoc_global["keep_code"][1])
            {var code=[0,get_string_of_file(loc[1][4],loc[2][4])];}
           else
            {var code=0;}
           
           var
            new_value=
             [0,
              complete_name,
              comment_opt,
              Odoc_env["subst_type"](env,typ),
              0,
              0,
              code,
              [0,[0,loc],0]];
           
           var new_env=Odoc_env["add_value"](env,new_value[1]);
           
           return [0,0,new_env,[0,[5,new_value],0]];
           
          case 3:
           var name_typedecl_list=parsetree_item_desc[1];
           
           var
            extended_env=
             List["fold_left"]
              (function(acc_env,param)
                {var
                  complete_name$1=
                   Odoc_name["concat"](current_module_name,param[1][1]);
                 
                 return Odoc_env["add_type"](acc_env,complete_name$1);
                 },
               env,
               name_typedecl_list);
           
           var
            is_nonrec=
             List["exists"]
              (function(td)
                {return List["exists"]
                         (function(param)
                           {return "unknown primitive:caml_string_equal";},
                          td[7]);
                 },
               name_typedecl_list);
           
           if(is_nonrec){var env$1=env;}else{var env$1=extended_env;}
           
           var
            f=
             function
              ($staropt$star,maybe_more_acc,last_pos,name_type_decl_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=0;}
               
               if(name_type_decl_list)
                {var q=name_type_decl_list[2];
                 
                 var type_decl=name_type_decl_list[1];
                 
                 var name$1=type_decl[1][1];
                 
                 var
                  complete_name$1=
                   Odoc_name["concat"](current_module_name,name$1);
                 
                 var loc$1=type_decl[8];
                 
                 var loc_start=loc$1[1][4];
                 
                 var loc_end=loc$1[2][4];
                 
                 if(q)
                  {var pos_limit2=q[1][8][1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 var match$1=Sig[7](loc_end,pos_limit2,type_decl);
                 
                 var name_comment_list=match$1[2];
                 
                 var maybe_more=match$1[1];
                 
                 try
                  {var tt_type_decl=Typedtree_search[8](table,name$1);}
                 catch(exn)
                  {if(exn=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["type_not_found_in_typedtree"]
                             (complete_name$1)];
                     }
                   else
                    {throw exn;}
                   }
                 
                 var tt_type_decl$1=tt_type_decl[4];
                 
                 if(first)
                  {var match$2=[0,comment_opt,0];}
                 else
                  {var match$2=get_comments_in_module(last_pos,loc_start);}
                 
                 var kind=Sig[9](env$1,name_comment_list,tt_type_decl$1[3]);
                 
                 var new_end=loc_end+maybe_more;
                 
                 var match$3=tt_type_decl$1[5];
                 
                 var
                  t=
                   [0,
                    complete_name$1,
                    match$2[1],
                    List["map2"]
                     (function(p,v)
                       {var match$4=Types["Variance"][11](v);
                        
                        return [0,
                                Odoc_env["subst_type"](env$1,p),
                                match$4[1],
                                match$4[2]];
                        },
                      tt_type_decl$1[1],
                      tt_type_decl$1[6]),
                    kind,
                    tt_type_decl$1[4],
                    match$3?[0,Sig[8](env$1,name_comment_list,match$3[1])]:0,
                    [0,[0,loc$1],0],
                    Odoc_global["keep_code"][1]
                     ?[0,get_string_of_file(loc_start,new_end)]
                     :0];
                 
                 var
                  match$4=
                   My_ir[3]
                    (file_name[1],get_string_of_file(new_end,pos_limit2));
                 
                 var maybe_more2=match$4[1];
                 
                 t[2]=Sig[10](t[2],match$4[2]),0;
                 var
                  match$5=
                   f(0,maybe_more+maybe_more2,new_end+maybe_more2,q);
                 
                 return [0,
                         match$5[1],
                         Pervasives["@"](match$2[2],[0,[8,t],match$5[2]])];
                 }
               else
                {return [0,maybe_more_acc,0];}
               };
           
           var match$1=f([0,1],0,loc[1][4],name_typedecl_list);
           
           return [0,match$1[1],extended_env,match$1[2]];
           
          case 4:
           var tyext=parsetree_item_desc[1];
           
           var match$2=tyext[3];
           
           if(match$2)
            {var ext=match$2[1];
             
             try
              {var tt_tyext=Typedtree_search[6](table,ext[1][1]);}
             catch(exn)
              {if(exn=Not_found)
                {throw [0,
                        Failure,
                        Odoc_messages["extension_not_found_in_typedtree"]
                         (Odoc_name["concat"](current_module_name,ext[1][1]))];
                 }
               else
                {throw exn;}
               }
             }
           else
            {throw [0,Assert_failure,[0,"odoc_ast.ml",1280,20]];}
           
           var
            new_env$1=
             List["fold_left"]
              (function(acc_env,param)
                {var
                  complete_name$1=
                   Odoc_name["concat"](current_module_name,param[1][1]);
                 
                 return Odoc_env["add_extension"](acc_env,complete_name$1);
                 },
               env,
               tyext[3]);
           
           var loc_start=loc[1][4];
           
           var loc_end=loc[2][4];
           
           var
            new_te=
             [0,
              comment_opt,
              Odoc_env["full_type_name"]
               (new_env$1,Odoc_name["from_path"](tt_tyext[1])),
              List["map"]
               (function(param)
                 {return Odoc_env["subst_type"](new_env$1,param[1][2]);},
                tt_tyext[3]),
              tt_tyext[5],
              0,
              [0,[0,loc],0],
              Odoc_global["keep_code"][1]
               ?[0,get_string_of_file(loc_start,loc_end)]
               :0];
           
           var
            analyse_extension_constructors=
             function(maybe_more,exts_acc,tt_ext_list)
              {if(tt_ext_list)
                {var q=tt_ext_list[2];
                 
                 var tt_ext=tt_ext_list[1];
                 
                 var
                  complete_name$1=
                   Odoc_name["concat"](current_module_name,tt_ext[2][1]);
                 
                 var ext_loc_end=tt_ext[5][2][4];
                 
                 var match$3=tt_ext[4];
                 
                 switch(match$3)
                  {case 0:
                    var
                     new_xt=
                      [0,
                       complete_name$1,
                       List["map"]
                        (function(ctyp)
                          {return Odoc_env["subst_type"](new_env$1,ctyp[2]);},
                         match$3[1]),
                       Misc["may_map"]
                        (function(ctyp)
                          {return Odoc_env["subst_type"](new_env$1,ctyp[2]);},
                         match$3[2]),
                       new_te,
                       0,
                       [0,[0,tt_ext[5]],0],
                       0];
                    
                   case 1:
                    var
                     new_xt=
                      [0,
                       complete_name$1,
                       0,
                       0,
                       new_te,
                       [0,
                        [0,
                         Odoc_env["full_extension_constructor_name"]
                          (env,Odoc_name["from_path"](match$3[1])),
                         0]],
                       [0,[0,tt_ext[5]],0],
                       0];
                    
                   }
                 
                 if(q)
                  {var pos_limit2=q[1][5][1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 var s=get_string_of_file(ext_loc_end,pos_limit2);
                 
                 var match$4=My_ir[3](file_name[1],s);
                 
                 new_xt[7]=match$4[2],0;
                 return analyse_extension_constructors
                         (match$4[1],[0,new_xt,exts_acc],q);
                 }
               else
                {return [0,maybe_more,List["rev"](exts_acc)];}
               };
           
           var match$3=analyse_extension_constructors(0,0,tt_tyext[4]);
           
           new_te[5]=match$3[2],0;
           return [0,match$3[1],new_env$1,[0,[6,new_te],0]];
           
          case 5:
           var name$1=parsetree_item_desc[1][1];
           
           var
            complete_name$1=
             Odoc_name["concat"](current_module_name,name$1[1]);
           
           try
            {var tt_ext=Typedtree_search[7](table,name$1[1]);}
           catch(exn$1)
            {if(exn$1=Not_found)
              {throw [0,
                      Failure,
                      Odoc_messages["exception_not_found_in_typedtree"]
                       (complete_name$1)];
               }
             else
              {throw exn$1;}
             }
           
           var new_env$2=Odoc_env["add_extension"](env,complete_name$1);
           
           var match$4=tt_ext[4];
           
           switch(match$4)
            {case 0:
              var loc_start$1=loc[1][4];
              
              var loc_end$1=loc[2][4];
              
              var
               new_ext=
                [0,
                 complete_name$1,
                 comment_opt,
                 List["map"]
                  (function(ctyp)
                    {return Odoc_env["subst_type"](new_env$2,ctyp[2]);},
                   match$4[1]),
                 Misc["may_map"]
                  (function(ctyp)
                    {return Odoc_env["subst_type"](new_env$2,ctyp[2]);},
                   match$4[2]),
                 0,
                 [0,[0,loc],0],
                 Odoc_global["keep_code"][1]
                  ?[0,get_string_of_file(loc_start$1,loc_end$1)]
                  :0];
              
             case 1:
              var
               new_ext=
                [0,
                 complete_name$1,
                 comment_opt,
                 0,
                 0,
                 [0,
                  [0,
                   Odoc_env["full_extension_constructor_name"]
                    (env,Odoc_name["from_path"](match$4[1])),
                   0]],
                 [0,[0,loc],0],
                 0];
              
             }
           
           return [0,0,new_env$2,[0,[7,new_ext],0]];
           
          case 6:
           var match$5=parsetree_item_desc[1];
           
           var module_expr=match$5[2];
           
           var name$2=match$5[1];
           
           try
            {var tt_module_expr=Typedtree_search[4](table,name$2[1]);
             
             var
              new_module_pre=
               analyse_module
                (env,
                 current_module_name,
                 name$2[1],
                 comment_opt,
                 module_expr,
                 tt_module_expr);
             
             if(Odoc_global["keep_code"][1])
              {var loc$1=module_expr[2];
               
               var st=loc$1[1][4];
               
               var en=loc$1[2][4];
               
               var code$1=[0,get_string_of_file(st,en)];
               }
             else
              {var code$1=0;}
             
             var newrecord="unknown primitive:duprecord regular 11";
             
             newrecord[9]=code$1,0;
             var new_module=newrecord;
             
             var new_env$3=Odoc_env["add_module"](env,new_module[1]);
             
             var match$6=new_module[2];
             
             switch(match$6)
              {case 1:
                var
                 new_env2=
                  Odoc_env["add_signature"]
                   (new_env$3,
                    new_module[1],
                    [0,Odoc_name["simple"](new_module[1])],
                    match$6[1]);
                
               default:var new_env2=new_env$3;}
             
             return [0,0,new_env2,[0,[0,new_module],0]];
             }
           catch(exn$2)
            {if(exn$2=Not_found)
              {var
                complete_name$2=
                 Odoc_name["concat"](current_module_name,name$2[1]);
               
               throw [0,
                      Failure,
                      Odoc_messages["module_not_found_in_typedtree"]
                       (complete_name$2)];
               }
             else
              {throw exn$2;}
             }
           
          case 7:
           var mods=parsetree_item_desc[1];
           
           var
            new_env$4=
             List["fold_left"]
              (function(acc_env,param)
                {var name$3=param[1];
                 
                 var
                  complete_name$3=
                   Odoc_name["concat"](current_module_name,name$3[1]);
                 
                 var e=Odoc_env["add_module"](acc_env,complete_name$3);
                 
                 try
                  {var tt_mod_exp=Typedtree_search[4](table,name$3[1]);}
                 catch(exn$3)
                  {if(exn$3=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["module_not_found_in_typedtree"]
                             (complete_name$3)];
                     }
                   else
                    {throw exn$3;}
                   }
                 
                 var
                  new_module$1=
                   analyse_module
                    (e,current_module_name,name$3[1],0,param[2],tt_mod_exp);
                 
                 var match$7=new_module$1[2];
                 
                 switch(match$7)
                  {case 1:
                    return Odoc_env["add_signature"]
                            (e,
                             new_module$1[1],
                             [0,Odoc_name["simple"](new_module$1[1])],
                             match$7[1]);
                    
                   default:return e;}
                 },
               env,
               mods);
           
           var
            f$1=
             function($staropt$star,last_pos,name_mod_exp_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=0;}
               
               if(name_mod_exp_list)
                {var match$7=name_mod_exp_list[1];
                 
                 var mod_exp=match$7[2];
                 
                 var name$3=match$7[1];
                 
                 var
                  complete_name$3=
                   Odoc_name["concat"](current_module_name,name$3[1]);
                 
                 var loc_start$2=mod_exp[2][1][4];
                 
                 var loc_end$2=mod_exp[2][2][4];
                 
                 try
                  {var tt_mod_exp=Typedtree_search[4](table,name$3[1]);}
                 catch(exn$3)
                  {if(exn$3=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["module_not_found_in_typedtree"]
                             (complete_name$3)];
                     }
                   else
                    {throw exn$3;}
                   }
                 
                 if(first)
                  {var match$8=[0,comment_opt,0];}
                 else
                  {var match$8=get_comments_in_module(last_pos,loc_start$2);}
                 
                 var
                  new_module$1=
                   analyse_module
                    (new_env$4,
                     current_module_name,
                     name$3[1],
                     match$8[1],
                     mod_exp,
                     tt_mod_exp);
                 
                 var eles=f$1(0,loc_end$2,name_mod_exp_list[2]);
                 
                 return Pervasives["@"](match$8[2],[0,[0,new_module$1],eles]);
                 }
               else
                {return 0;}
               };
           
           var eles=f$1([0,1],loc[1][4],mods);
           
           return [0,0,new_env$4,eles];
           
          case 8:
           var match$7=parsetree_item_desc[1];
           
           var modtype=match$7[2];
           
           var name$3=match$7[1];
           
           var
            complete_name$3=
             Odoc_name["concat"](current_module_name,name$3[1]);
           
           try
            {var tt_module_type=Typedtree_search[5](table,name$3[1]);}
           catch(exn$3)
            {if(exn$3=Not_found)
              {throw [0,
                      Failure,
                      Odoc_messages["module_type_not_found_in_typedtree"]
                       (complete_name$3)];
               }
             else
              {throw exn$3;}
             }
           
           var match$8=tt_module_type[3];
           
           if(modtype)
            {if(match$8)
              {var mty_type=match$8[1];
               
               var
                match$9=
                 [0,
                  [0,Sig[11](0,env,complete_name$3,modtype[1],mty_type[2])],
                  [0,mty_type[2]]];
               }
             else
              {var exit=118;}
             }
           else
            {var exit=118;}
           
           switch(exit){case 118:var match$9=[0,0,0];}
           
           var sig_mtype=match$9[2];
           
           var
            mt=
             [0,
              complete_name$3,
              comment_opt,
              sig_mtype,
              0,
              file_name[1],
              match$9[1],
              [0,[0,loc],0]];
           
           var new_env$5=Odoc_env["add_module_type"](env,mt[1]);
           
           if(sig_mtype)
            {var match$10=sig_mtype[1];
             
             switch(match$10)
              {case 1:
                var
                 new_env2$1=
                  Odoc_env["add_signature"]
                   (new_env$5,mt[1],[0,Odoc_name["simple"](mt[1])],match$10[1]);
                
               default:var exit$1=114;}
             }
           else
            {var exit$1=114;}
           
           switch(exit$1){case 114:var new_env2$1=new_env$5;}
           
           return [0,0,new_env2$1,[0,[1,mt],0]];
           
          case 9:
           if(comment_opt)
            {var match$11=comment_opt[1][1];
             
             if(match$11)
              {var ele_comments=[0,[9,match$11[1]],0];}
             else
              {var ele_comments=0;}
             }
           else
            {var ele_comments=0;}
           
           return [0,0,env,ele_comments];
           
          case 10:
           var class_decl_list=parsetree_item_desc[1];
           
           var
            new_env$6=
             List["fold_left"]
              (function(acc_env,class_decl)
                {var
                  complete_name$4=
                   Odoc_name["concat"](current_module_name,class_decl[3][1]);
                 
                 return Odoc_env["add_class"](acc_env,complete_name$4);
                 },
               env,
               class_decl_list);
           
           var
            f$2=
             function($staropt$star,last_pos,class_decl_list$1)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=0;}
               
               if(class_decl_list$1)
                {var class_decl=class_decl_list$1[1];
                 
                 try
                  {var match$12=Typedtree_search[9](table,class_decl[3][1]);}
                 catch(exn$4)
                  {if(exn$4=Not_found)
                    {var
                      complete_name$4=
                       Odoc_name["concat"](current_module_name,class_decl[3][1]);
                     
                     throw [0,
                            Failure,
                            Odoc_messages["class_not_found_in_typedtree"]
                             (complete_name$4)];
                     }
                   else
                    {throw exn$4;}
                   }
                 
                 if(first)
                  {var match$13=[0,comment_opt,0];}
                 else
                  {var
                    match$13=
                     get_comments_in_module(last_pos,class_decl[5][1][4]);
                   }
                 
                 var last_pos2=class_decl[5][2][4];
                 
                 var
                  new_class=
                   analyse_class
                    (new_env$6,
                     current_module_name,
                     match$13[1],
                     class_decl,
                     match$12[2],
                     match$12[1],
                     table);
                 
                 return Pervasives["@"]
                         (match$13[2],
                          [0,[3,new_class],f$2(0,last_pos2,class_decl_list$1[2])]);
                 }
               else
                {return 0;}
               };
           
           return [0,0,new_env$6,f$2([0,1],loc[1][4],class_decl_list)];
           
          case 11:
           var class_type_decl_list=parsetree_item_desc[1];
           
           var
            new_env$7=
             List["fold_left"]
              (function(acc_env,class_type_decl)
                {var
                  complete_name$4=
                   Odoc_name["concat"]
                    (current_module_name,class_type_decl[3][1]);
                 
                 return Odoc_env["add_class_type"](acc_env,complete_name$4);
                 },
               env,
               class_type_decl_list);
           
           var
            f$3=
             function($staropt$star,last_pos,class_type_decl_list$1)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=0;}
               
               if(class_type_decl_list$1)
                {var class_type_decl=class_type_decl_list$1[1];
                 
                 var name$4=class_type_decl[3];
                 
                 var
                  complete_name$4=
                   Odoc_name["concat"](current_module_name,name$4[1]);
                 
                 var virt=class_type_decl[1]=0;
                 
                 try
                  {var
                    tt_cltype_declaration=
                     Typedtree_search[10](table,name$4[1]);
                   }
                 catch(exn$4)
                  {if(exn$4=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["class_type_not_found_in_typedtree"]
                             (complete_name$4)];
                     }
                   else
                    {throw exn$4;}
                   }
                 
                 var tt_cltype_declaration$1=tt_cltype_declaration[10];
                 
                 var type_params=tt_cltype_declaration$1[1];
                 
                 var
                  kind=
                   Sig[12]
                    (new_env$7,
                     complete_name$4,
                     class_type_decl[5][1][4],
                     class_type_decl[4],
                     tt_cltype_declaration$1[2]);
                 
                 if(first)
                  {var match$12=[0,comment_opt,0];}
                 else
                  {var
                    match$12=
                     get_comments_in_module(last_pos,class_type_decl[5][1][4]);
                   }
                 
                 var last_pos2=class_type_decl[5][2][4];
                 
                 var
                  new_ele=
                   [4,
                    [0,
                     complete_name$4,
                     match$12[1],
                     Odoc_env["subst_class_type"](env,tt_cltype_declaration$1[2]),
                     List["map"](Odoc_env["subst_type"](new_env$7),type_params),
                     virt,
                     kind,
                     [0,[0,loc],0]]];
                 
                 return Pervasives["@"]
                         (match$12[2],
                          [0,new_ele,f$3(0,last_pos2,class_type_decl_list$1[2])]);
                 }
               else
                {return 0;}
               };
           
           return [0,0,new_env$7,f$3([0,1],loc[1][4],class_type_decl_list)];
           
          case 12:
           var im=[0,"dummy",0,comment_opt];return [0,0,env,[0,[2,im],0]];
          case 13:var exit$2=148;
          case 14:var exit$2=148;
          }
        
        switch(exit$2){case 148:return [0,0,env,0];}
        };
    
    var
     analyse_module=
      function
       (env,
        current_module_name,
        module_name,
        comment_opt,
        p_module_expr,
        tt_module_expr)
       {var
         complete_name=
          Odoc_name["concat"](current_module_name,module_name);
        
        var loc=p_module_expr[2];
        
        var pos_start=loc[1][4];
        
        var pos_end=loc[2][4];
        
        var modtype=tt_module_expr[3];
        
        var match=p_module_expr[1];
        
        switch(match)
         {case 4:
           var pmodule_type=match[2];
           
           var loc_start=pmodule_type[2][1][4];
           
           var loc_end=pmodule_type[2][2][4];
           
           var m_code_intf=[0,get_string_of_file(loc_start,loc_end)];
           
          default:var m_code_intf=0;}
        
        var
         m_base=
          [0,
           complete_name,
           modtype,
           comment_opt,
           0,
           file_name[1],
           [0,0],
           [0,[0,loc],0],
           0,
           0,
           m_code_intf,
           0];
        
        var match$1=p_module_expr[1];
        
        var match$2=tt_module_expr[1];
        
        switch(match$1)
         {case 0:
           switch(match$2)
            {case 0:var path=match$2[1];var exit=182;
             case 4:
              var match$3=match$2[1][1];
              
              switch(match$3)
               {case 0:var path=match$3[1];var exit=182;default:var exit=184;}
              
             default:var exit=184;}
           
          case 1:
           var p_structure=match$1[1];
           
           switch(match$2)
            {case 1:
              var tt_structure=match$2[1];
              
              var
               elements=
                analyse_structure
                 (env,
                  complete_name,
                  pos_start,
                  pos_end,
                  p_structure,
                  tt_structure);
              
              var
               included_modules_from_tt=
                tt_get_included_module_list(tt_structure);
              
              var
               elements2=
                replace_dummy_included_modules
                 (elements,included_modules_from_tt);
              
              var newrecord="unknown primitive:duprecord regular 11";
              
              newrecord[6]=[0,elements2],0;
              return newrecord;
              
             case 4:
              var match$4=match$2[1][1];
              
              switch(match$4)
               {case 1:
                 var tt_structure$1=match$4[1];
                 
                 var
                  elements$1=
                   analyse_structure
                    (env,
                     complete_name,
                     pos_start,
                     pos_end,
                     p_structure,
                     tt_structure$1);
                 
                 var
                  included_modules_from_tt$1=
                   tt_get_included_module_list(tt_structure$1);
                 
                 var
                  elements2$1=
                   replace_dummy_included_modules
                    (elements$1,included_modules_from_tt$1);
                 
                 var newrecord$1="unknown primitive:duprecord regular 11";
                 
                 newrecord$1[2]=
                 Odoc_env["subst_module_type"](env,match$2[2]),
                 0;
                 newrecord$1[6]=[0,elements2$1],0;
                 return newrecord$1;
                 
                default:var exit=184;}
              
             default:var exit=184;}
           
          case 2:
           switch(match$2)
            {case 2:
              var mtyp=match$2[3];
              
              var pmodule_type$1=match$1[2];
              
              if(pmodule_type$1)
               {var loc$1=pmodule_type$1[1][2];}
              else
               {var loc$1=Location["none"];}
              
              var loc_start$1=loc$1[1][4];
              
              var loc_end$1=loc$1[2][4];
              
              var mp_type_code=get_string_of_file(loc_start$1,loc_end$1);
              
              var mp_name=Odoc_name["from_ident"](match$2[1]);
              
              if(pmodule_type$1)
               {if(mtyp)
                 {var
                   mp_kind=
                    Sig[11]
                     (0,env,current_module_name,pmodule_type$1[1],mtyp[1][2]);
                  }
                else
                 {var exit$1=158;}
                }
              else
               {var exit$1=158;}
              
              switch(exit$1){case 158:var mp_kind=[0,0];}
              
              var
               param=
                [0,
                 mp_name,
                 Misc["may_map"]
                  (function(m)
                    {return Odoc_env["subst_module_type"](env,m[2]);},
                   mtyp),
                 mp_type_code,
                 mp_kind];
              
              var dummy_complete_name=param[1];
              
              var new_env=Odoc_env["add_module"](env,dummy_complete_name);
              
              var
               m_base2=
                analyse_module
                 (new_env,
                  current_module_name,
                  module_name,
                  0,
                  match$1[3],
                  match$2[4]);
              
              var kind=m_base2[6];
              
              var newrecord$2="unknown primitive:duprecord regular 11";
              
              newrecord$2[6]=[2,param,kind],0;
              return newrecord$2;
              
             default:var exit=184;}
           
          case 3:
           var p_module_expr2=match$1[2];
           
           var p_module_expr1=match$1[1];
           
           switch(match$2)
            {case 3:
              p_module_expr1$1=p_module_expr1;
              
              p_module_expr2$1=p_module_expr2;
              
              var tt_module_expr1=match$2[1];
              
              var tt_module_expr2=match$2[2];
              
              var exit=183;
              
             case 4:
              var match$5=match$2[1][1];
              
              switch(match$5)
               {case 3:
                 p_module_expr1$1=p_module_expr1;
                 
                 p_module_expr2$1=p_module_expr2;
                 
                 var tt_module_expr1=match$5[1];
                 
                 var tt_module_expr2=match$5[2];
                 
                 var exit=183;
                 
                default:var exit=184;}
              
             default:var exit=184;}
           
          case 4:
           switch(match$2)
            {case 4:
              var tt_modtype=match$2[2];
              
              var
               m_base2$1=
                analyse_module
                 (env,current_module_name,module_name,0,match$1[1],match$2[1]);
              
              var
               mtkind=
                Sig[11]
                 (0,
                  env,
                  Odoc_name["concat"](current_module_name,"??"),
                  match$1[2],
                  tt_modtype);
              
              var tt_modtype$1=Odoc_env["subst_module_type"](env,tt_modtype);
              
              if(Odoc_global["filter_with_module_constraints"][1])
               {filter_module_with_module_type_constraint
                 (m_base2$1,tt_modtype$1)}
              else
               {}
              
              var newrecord$3="unknown primitive:duprecord regular 11";
              
              newrecord$3[2]=tt_modtype$1,0;
              newrecord$3[6]=[5,m_base2$1[6],mtkind],0;
              return newrecord$3;
              
             default:var exit=184;}
           
          case 5:
           switch(match$2)
            {case 5:
              var tt_modtype$2=match$2[2];
              
              var loc$2=p_module_expr[2];
              
              var loc_end$2=loc$2[2][4];
              
              var exp_loc=match$1[1][2];
              
              var exp_loc_end=exp_loc[2][4];
              
              var s=get_string_of_file(exp_loc_end,loc_end$2);
              
              var
               code=
                Printf["sprintf"]([0,[11,"(val ...",[2,0,0]],"(val ...%s"],s);
              
              switch(tt_modtype$2)
               {case 0:
                 var
                  name=
                   Odoc_env["full_module_type_name"]
                    (env,Odoc_name["from_path"](tt_modtype$2[1]));
                 
                default:var name="";}
              
              var alias=[0,name,0];
              
              var newrecord$4="unknown primitive:duprecord regular 11";
              
              newrecord$4[2]=
              Odoc_env["subst_module_type"](env,tt_modtype$2),
              0;
              newrecord$4[6]=[7,code,alias],0;
              return newrecord$4;
              
             default:var exit=184;}
           
          case 6:var exit=184;
          }
        
        switch(exit)
         {case 184:
           throw [0,
                  Failure,
                  "analyse_module: parsetree and typedtree don't match."];
           
          case 182:
           var
            alias_name=
             Odoc_env["full_module_name"](env,Odoc_name["from_path"](path));
           
           var newrecord$5="unknown primitive:duprecord regular 11";
           
           newrecord$5[6]=[1,[0,alias_name,0]],0;
           return newrecord$5;
           
          case 183:
           var
            m1=
             analyse_module
              (env,
               current_module_name,
               module_name,
               0,
               p_module_expr1$1,
               tt_module_expr1);
           
           var
            m2=
             analyse_module
              (env,
               current_module_name,
               module_name,
               0,
               p_module_expr2$1,
               tt_module_expr2);
           
           var newrecord$6="unknown primitive:duprecord regular 11";
           
           newrecord$6[6]=[3,m1[6],m2[6]],0;
           return newrecord$6;
           
          }
        };
    
    var
     analyse_typed_tree=
      function(source_file,input_file,parsetree,typedtree)
       {var tree_structure=typedtree[1];
        
        try
         {var curdir="unknown primitive:caml_sys_getcwd";
          
          var
           match=
            [0,
             Filename["dirname"](source_file),
             Filename["basename"](source_file)];
          
          "unknown primitive:caml_sys_chdir";
          var
           complete=
            Filename["concat"]("unknown primitive:caml_sys_getcwd",match[2]);
          
          "unknown primitive:caml_sys_chdir";
          var complete_source_file=complete;
          }
        catch(exn)
         {if(exn[1]=Sys_error)
           {Pervasives["prerr_endline"](exn[2]);
            Odoc_global["errors"][0]++;
            var complete_source_file=source_file;
            }
          else
           {throw exn;}
          }
        
        prepare_file(complete_source_file,input_file);
        var
         mod_name=
          $$String["capitalize"]
           (Filename["basename"](Filename["chop_extension"](source_file)));
        
        var match$1=My_ir[4](file_name[1],file[1]);
        
        var
         elements=
          analyse_structure
           (Odoc_env["empty"],
            mod_name,
            match$1[1],
            file[1]["length"],
            parsetree,
            tree_structure);
        
        var
         included_modules_from_tt=
          tt_get_included_module_list(tree_structure);
        
        var
         elements2=
          replace_dummy_included_modules(elements,included_modules_from_tt);
        
        var kind=[0,elements2];
        
        return [0,
                mod_name,
                [1,0],
                match$1[2],
                0,
                file_name[1],
                kind,
                [0,[0,Location["in_file"](file_name[1])],0],
                0,
                Odoc_global["keep_code"][1]?[0,file[1]]:0,
                0,
                0];
        };
    
    return [0,
            Sig,
            file,
            file_name,
            get_string_of_file,
            prepare_file,
            get_comments_in_class,
            get_comments_in_module,
            tt_param_info_from_pattern,
            tt_analyse_function_parameters,
            tt_analyse_value,
            tt_name_of_class_expr,
            tt_analyse_method_expression,
            analyse_class_structure,
            analyse_class_kind,
            analyse_class,
            tt_name_from_module_expr,
            tt_get_included_module_list,
            replace_dummy_included_modules,
            filter_module_with_module_type_constraint,
            filter_module_type_with_module_type_constraint,
            filter_module_elements_with_module_type_constraint,
            filter_extension_constructors_with_module_type_constraint,
            analyse_structure,
            analyse_structure_item,
            analyse_module,
            analyse_typed_tree];
    };

[0,
 [0,
  Typedtree_search[3],
  Typedtree_search[4],
  Typedtree_search[5],
  Typedtree_search[6],
  Typedtree_search[8],
  Typedtree_search[9],
  Typedtree_search[10],
  Typedtree_search[11],
  Typedtree_search[12],
  Typedtree_search[13],
  Typedtree_search[14],
  Typedtree_search[16]],
 function(funarg){var $$let=Analyser(funarg);return [0,$$let[26]];}];
module["exports"]=
{"unknown block:(makeblock 0 (field 2 Typedtree_search/1272) (field 3 Typedtree_search/1272)\n  (field 4 Typedtree_search/1272) (field 5 Typedtree_search/1272)\n  (field 7 Typedtree_search/1272) (field 8 Typedtree_search/1272)\n  (field 9 Typedtree_search/1272) (field 10 Typedtree_search/1272)\n  (field 11 Typedtree_search/1272) (field 12 Typedtree_search/1272)\n  (field 13 Typedtree_search/1272) (field 15 Typedtree_search/1272))":
 unknown block:(makeblock 0 (field 2 Typedtree_search/1272) (field 3 Typedtree_search/1272)
  (field 4 Typedtree_search/1272) (field 5 Typedtree_search/1272)
  (field 7 Typedtree_search/1272) (field 8 Typedtree_search/1272)
  (field 9 Typedtree_search/1272) (field 10 Typedtree_search/1272)
  (field 11 Typedtree_search/1272) (field 12 Typedtree_search/1272)
  (field 13 Typedtree_search/1272) (field 15 Typedtree_search/1272)),
 "unknown block:(function funarg/2004\n  (let (let/2005 = (apply Analyser/2003 funarg/2004))\n    (makeblock 0 (field 25 let/2005))))":
 unknown block:(function funarg/2004
  (let (let/2005 = (apply Analyser/2003 funarg/2004))
    (makeblock 0 (field 25 let/2005))))};

