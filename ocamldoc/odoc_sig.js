// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_name=require("Odoc_name");
var $$String=require("String");
var Ctype=require("Ctype");
var Odoc_global=require("Odoc_global");
var Odoc_class=require("Odoc_class");
var Odoc_value=require("Odoc_value");
var List=require("List");
var Pervasives=require("Pervasives");
var Btype=require("Btype");
var Odoc_types=require("Odoc_types");
var Types=require("Types");
var Misc=require("Misc");
var Odoc_merge=require("Odoc_merge");
var Odoc_env=require("Odoc_env");
var Filename=require("Filename");
var Odoc_misc=require("Odoc_misc");
var Location=require("Location");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var Odoc_messages=require("Odoc_messages");


Odoc_module,Odoc_name;
var
 add_to_hash=
  function(table,signat)
   {switch(signat)
     {case 0:
       return Hashtbl["add"]
               (table,/* V */[2,Odoc_name["from_ident"](signat[1])],signat);
       
      case 1:
       return Hashtbl["add"]
               (table,/* T */[3,Odoc_name["from_ident"](signat[1])],signat);
       
      case 2:
       return Hashtbl["add"]
               (table,/* X */[6,Odoc_name["from_ident"](signat[1])],signat);
       
      case 3:
       return Hashtbl["add"]
               (table,/* M */[0,Odoc_name["from_ident"](signat[1])],signat);
       
      case 4:
       return Hashtbl["add"]
               (table,/* MT */[1,Odoc_name["from_ident"](signat[1])],signat);
       
      case 5:
       return Hashtbl["add"]
               (table,/* C */[4,Odoc_name["from_ident"](signat[1])],signat);
       
      case 6:
       return Hashtbl["add"]
               (table,/* CT */[5,Odoc_name["from_ident"](signat[1])],signat);
       
      }
    };

var
 table=
  function(signat)
   {var t=Hashtbl["create"](/* None */0,13);
    
    List["iter"](add_to_hash(t),signat);
    return t;
    };

var
 search_value=
  function(table,name)
   {var match=Hashtbl["find"](table,/* V */[2,name]);
    
    switch(match)
     {case 0:return match[2][1];
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",72,13]];}
    };

var
 search_extension=
  function(table,name)
   {var match=Hashtbl["find"](table,/* X */[6,name]);
    
    switch(match)
     {case 2:return match[2];
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",77,13]];}
    };

var
 search_type=
  function(table,name)
   {var match=Hashtbl["find"](table,/* T */[3,name]);
    
    switch(match)
     {case 1:return match[2];
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",82,13]];}
    };

var
 search_class=
  function(table,name)
   {var match=Hashtbl["find"](table,/* C */[4,name]);
    
    switch(match)
     {case 5:return match[2];
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",87,13]];}
    };

var
 search_class_type=
  function(table,name)
   {var match=Hashtbl["find"](table,/* CT */[5,name]);
    
    switch(match)
     {case 6:return match[2];
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",92,13]];}
    };

var
 search_module=
  function(table,name)
   {var match=Hashtbl["find"](table,/* M */[0,name]);
    
    switch(match)
     {case 3:return match[2][1];
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",97,13]];}
    };

var
 search_module_type=
  function(table,name)
   {var match=Hashtbl["find"](table,/* MT */[1,name]);
    
    switch(match)
     {case 4:
       var match$1=match[2][1];
       
       if(match$1){return /* Some */[0,match$1[1]];}else{return /* None */0;}
       
      default:throw [0,Assert_failure,[0,"odoc_sig.ml",105,13]];}
    };

var
 search_attribute_type=
  function(name,class_sig)
   {var match=Types["Vars"][22](name,class_sig[2]);return match[3];};

var
 search_method_type=
  function(name,class_sig)
   {var fields=Odoc_misc["get_fields"](class_sig[1]);
    
    return List["assoc"](name,fields);
    };

var
 Signature_search=
  [0,
   add_to_hash,
   table,
   search_value,
   search_extension,
   search_type,
   search_class,
   search_class_type,
   search_module,
   search_module_type,
   search_attribute_type,
   search_method_type];

var
 Analyser=
  function(My_ir)
   {var file=[0,""];
    
    var file_name=[0,""];
    
    var
     get_string_of_file=
      function(the_start,the_end)
       {try
         {return $$String["sub"](file[1],the_start,the_end-the_start);}
        catch(exn){if(exn[1]=Invalid_argument){return "";}else{throw exn;}}
        };
    
    var
     prepare_file=
      function(f,input_f)
       {try
         {var s=Odoc_misc["input_file_as_string"](input_f);
          
          file[1]=s,0;
          return file_name[1]=f,0;
          }
        catch(e){file[1]="",0;throw e;}
        };
    
    var
     get_comments_in_class=
      function(pos_start,pos_end)
       {return My_ir[5]
                (function(t){return /* Class_comment */[2,t];},
                 file_name[1],
                 get_string_of_file(pos_start,pos_end));
        };
    
    var
     get_comments_in_module=
      function(pos_start,pos_end)
       {return My_ir[5]
                (function(t){return /* Element_module_comment */[9,t];},
                 file_name[1],
                 get_string_of_file(pos_start,pos_end));
        };
    
    var
     merge_infos=
      Odoc_merge["merge_info_opt"](Odoc_types["all_merge_options"]);
    
    var
     name_comment_from_type_decl=
      function(pos_end,pos_limit,ty_decl)
       {var match=ty_decl[4];
        
        if(typeof match=="number")
         {switch(match)
           {case 0:
             var match$1=ty_decl[6];
             
             if(match$1)
              {var match$2=match$1[1][1];
               
               var exit;
               
               if(typeof match$2=="number")
                {switch(match$2){}}
               else
                {switch(match$2[0])
                  {case 4:
                    var
                     f=
                      function(param)
                       {if(param)
                         {var match$3=param[1];
                          
                          var name=match$3[1];
                          
                          switch(name)
                           {case "":throw [0,Assert_failure,[0,"odoc_sig.ml",184,16]];
                            default:
                             var match$4=param[2];
                             
                             var ct=match$3[3];
                             
                             if(match$4)
                              {var ele2=match$4[1];
                               
                               var pos=ct[2][2][4];
                               
                               var pos2=ele2[3][2][1][4];
                               
                               var s=get_string_of_file(pos,pos2);
                               
                               var match$5=My_ir[3](file_name[1],s);
                               
                               return /* :: */[0,
                                       /* tuple */[0,name,match$5[2]],
                                       f(/* :: */[0,ele2,match$4[2]])];
                               }
                             else
                              {var pos$1=ct[2][2][4];
                               
                               var s$1=get_string_of_file(pos$1,pos_end);
                               
                               var match$6=My_ir[3](file_name[1],s$1);
                               
                               return /* :: */[0,/* tuple */[0,name,match$6[2]],/* [] */0];
                               }
                             }
                          }
                        else
                         {return /* [] */0;}
                        };
                    
                    var
                     is_named_field=
                      function(field)
                       {switch(field[1])
                         {case "":return /* false */0;default:return /* true */1;}
                        };
                    
                    return /* tuple */[0,
                            0,
                            f(List["filter"](is_named_field,match$2[1]))];
                    
                   default:exit=291;}}
               
               switch(exit){case 291:return [/* tuple */0,0,/* [] */0];}
               }
             else
              {return [/* tuple */0,0,/* [] */0];}
             
            case 1:return [/* tuple */0,0,/* [] */0];
            }}
        else
         {switch(match[0])
           {case 0:
             var
              f$1=
               function(acc,cons_core_type_list_list)
                {if(cons_core_type_list_list)
                  {var q=cons_core_type_list_list[2];
                   
                   var pcd=cons_core_type_list_list[1];
                   
                   if(q)
                    {var pos_end_first=pcd[4][2][4];
                     
                     var pos_start_second=q[1][4][1][4];
                     
                     var s=get_string_of_file(pos_end_first,pos_start_second);
                     
                     var match$3=My_ir[3](file_name[1],s);
                     
                     return f$1
                             (Pervasives["@"]
                               (acc,
                                /* :: */[0,/* tuple */[0,pcd[1][1],match$3[2]],/* [] */0]),
                              q);
                     }
                   else
                    {var s$1=get_string_of_file(pcd[4][2][4],pos_limit);
                     
                     var match$4=My_ir[3](file_name[1],s$1);
                     
                     return /* tuple */[0,
                             match$4[1],
                             Pervasives["@"]
                              (acc,
                               /* :: */[0,/* tuple */[0,pcd[1][1],match$4[2]],/* [] */0])];
                     }
                   }
                 else
                  {return /* tuple */[0,0,acc];}
                 };
             
             return f$1(/* [] */0,match[1]);
             
            case 1:
             var
              f$2=
               function(param)
                {if(param)
                  {var match$3=param[2];
                   
                   var match$4=param[1];
                   
                   var ct=match$4[3];
                   
                   var name=match$4[1];
                   
                   if(match$3)
                    {var ele2=match$3[1];
                     
                     var pos=ct[2][2][4];
                     
                     var pos2=ele2[3][2][1][4];
                     
                     var s=get_string_of_file(pos,pos2);
                     
                     var match$5=My_ir[3](file_name[1],s);
                     
                     return /* :: */[0,
                             /* tuple */[0,name[1],match$5[2]],
                             f$2(/* :: */[0,ele2,match$3[2]])];
                     }
                   else
                    {var pos$1=ct[2][2][4];
                     
                     var s$1=get_string_of_file(pos$1,pos_end);
                     
                     var match$6=My_ir[3](file_name[1],s$1);
                     
                     return /* :: */[0,
                             /* tuple */[0,name[1],match$6[2]],
                             /* [] */0];
                     }
                   }
                 else
                  {return /* [] */0;}
                 };
             
             return /* tuple */[0,0,f$2(match[1])];
             
            }}
        };
    
    var
     manifest_structure=
      function(env,name_comment_list,type_expr)
       {var match=type_expr[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 4:
             var
              f=
               function(param)
                {var field_name=param[1];
                 
                 try
                  {var
                    comment_opt=
                     List["assoc"](field_name,name_comment_list);
                   }
                 catch(exn)
                  {if(exn=Not_found)
                    {var comment_opt=/* None */0;}
                   else
                    {throw exn;}
                   }
                 
                 return /* record */[0,
                         field_name,
                         Odoc_env["subst_type"](env,param[3]),
                         comment_opt];
                 };
             
             var prim=Ctype["flatten_fields"](match[1]);
             
             return /* Object_type */[1,List["map"](f,prim[1])];
             
            default:exit=279;}}
        
        switch(exit)
         {case 279:
           return /* Other */[0,Odoc_env["subst_type"](env,type_expr)];
          }
        };
    
    var
     get_type_kind=
      function(env,name_comment_list,type_kind)
       {if(typeof type_kind=="number")
         {switch(type_kind)
           {case 0:return /* Type_abstract */0;
            case 1:return /* Type_open */1;
            }}
        else
         {switch(type_kind[0])
           {case 0:
             var
              f=
               function(param)
                {var field_name=Ident["name"](param[1]);
                 
                 try
                  {var
                    comment_opt=
                     List["assoc"](field_name,name_comment_list);
                   }
                 catch(exn)
                  {if(exn=Not_found)
                    {var comment_opt=/* None */0;}
                   else
                    {throw exn;}
                   }
                 
                 return /* record */[0,
                         field_name,
                         param[2]=/* Mutable */1,
                         Odoc_env["subst_type"](env,param[3]),
                         comment_opt];
                 };
             
             return /* Type_record */[1,List["map"](f,type_kind[1])];
             
            case 1:
             var
              f$1=
               function(param)
                {var constructor_name=Ident["name"](param[1]);
                 
                 try
                  {var
                    comment_opt=
                     List["assoc"](constructor_name,name_comment_list);
                   }
                 catch(exn)
                  {if(exn=Not_found)
                    {var comment_opt=/* None */0;}
                   else
                    {throw exn;}
                   }
                 
                 return /* record */[0,
                         constructor_name,
                         List["map"](Odoc_env["subst_type"](env),param[2]),
                         Misc["may_map"](Odoc_env["subst_type"](env),param[3]),
                         comment_opt];
                 };
             
             return /* Type_variant */[0,List["map"](f$1,type_kind[1])];
             
            }}
        };
    
    var
     erased_names_of_constraints=
      function(constraints,acc)
       {return List["fold_right"]
                (function(constraint_,acc)
                  {var exit;
                   
                   switch(constraint_)
                    {case 0:exit=264;
                     case 1:exit=264;
                     case 2:var s=constraint_[1][1];exit=265;
                     case 3:var s=constraint_[1];exit=265;
                     }
                   
                   switch(exit)
                    {case 264:return acc;
                     case 265:return Odoc_name["Set"][4](s[1],acc);
                     }
                   },
                 constraints,
                 acc);
        };
    
    var
     filter_out_erased_items_from_signature=
      function(erased,signature)
       {if(Odoc_name["Set"][2](erased))
         {return signature;}
        else
         {return List["fold_right"]
                  (function(sig_item,acc)
                    {var
                      take_item=
                       function(psig_desc)
                        {return /* :: */[0,
                                 /* record */[0,psig_desc,sig_item[2]],
                                 acc];
                         };
                     
                     var tp=sig_item[1];
                     
                     var exit;
                     
                     switch(tp)
                      {case 1:
                        var
                         types=
                          List["filter"]
                           (function(td){return !Odoc_name["Set"][3](td[1][1],erased);},
                            tp[1]);
                        
                        if(types)
                         {return take_item(/* Psig_type */[1,types]);}
                        else
                         {return acc;}
                        
                       case 4:exit=261;
                       case 5:
                        var
                         mods=
                          List["filter"]
                           (function(pmd)
                             {return !Odoc_name["Set"][3](pmd[1][1],erased);},
                            tp[1]);
                        
                        if(mods)
                         {return take_item(/* Psig_recmodule */[5,mods]);}
                        else
                         {return acc;}
                        
                       case 6:exit=261;
                       default:return take_item(tp);}
                     
                     switch(exit)
                      {case 261:
                        if(Odoc_name["Set"][3](tp[1][1][1],erased))
                         {return acc;}
                        else
                         {return take_item(tp);}
                        
                       }
                     },
                   signature,
                   /* [] */0);
          }
        };
    
    var
     analyse_class_elements=
      function
       (env,
        current_class_name,
        last_pos,
        pos_limit,
        class_type_field_list,
        class_signature)
       {var
         get_pos_limit2=
          function(q)
           {if(q)
             {var ele2=q[1];
              
              var loc=ele2[2];
              
              var match=ele2[1];
              
              switch(match)
               {case 0:return match[1][2][1][4];
                case 5:throw [0,Assert_failure,[0,"odoc_sig.ml",361,44]];
                default:return loc[1][4];}
              }
            else
             {return pos_limit;}
            };
        
        var
         get_method=
          function(name,comment_opt,private_flag,loc,q)
           {var complete_name=Odoc_name["concat"](current_class_name,name);
            
            try
             {var typ=Signature_search[11](name,class_signature);}
            catch(exn)
             {if(exn=Not_found)
               {throw [0,
                       Failure,
                       Odoc_messages["method_type_not_found"]
                        (current_class_name,name)];
                }
              else
               {throw exn;}
              }
            
            var subst_typ=Odoc_env["subst_type"](env,typ);
            
            var
             met=
              /* record */[0,
               /* record */[0,
                complete_name,
                comment_opt,
                subst_typ,
                /* false */0,
                Odoc_value["dummy_parameter_list"](subst_typ),
                /* None */0,
                /* record */[0,/* None */0,/* Some */[0,loc]]],
               private_flag=/* Private */0,
               /* false */0];
            
            var pos_limit2=get_pos_limit2(q);
            
            var pos_end=loc[2][4];
            
            var
             match=
              My_ir[3](file_name[1],get_string_of_file(pos_end,pos_limit2));
            
            met[1][2]=merge_infos(met[1][2],match[2]),0;
            Odoc_value["update_value_parameters_text"](met[1]);
            return /* tuple */[0,met,match[1]];
            };
        
        var
         f=
          function(last_pos,class_type_field_list)
           {if(class_type_field_list)
             {var q=class_type_field_list[2];
              
              var item=class_type_field_list[1];
              
              var loc=item[2];
              
              var match=item[1];
              
              switch(match)
               {case 0:
                 var class_type=match[1];
                 
                 var loc$1=class_type[2];
                 
                 var match$1=get_comments_in_class(last_pos,loc$1[1][4]);
                 
                 var pos_limit2=get_pos_limit2(q);
                 
                 var pos_end=loc$1[2][4];
                 
                 var
                  match$2=
                   My_ir[3]
                    (file_name[1],get_string_of_file(pos_end,pos_limit2));
                 
                 var comment_opt2=merge_infos(match$1[1],match$2[2]);
                 
                 if(comment_opt2)
                  {var text_opt=comment_opt2[1][1];}
                 else
                  {var text_opt=/* None */0;}
                 
                 var match$3=class_type[1];
                 
                 var exit;
                 
                 switch(match$3)
                  {case 0:
                    var name=Odoc_name["from_longident"](match$3[1][1]);
                    
                    var
                     inh=
                      /* record */[0,
                       Odoc_env["full_class_or_class_type_name"](env,name),
                       /* None */0,
                       text_opt];
                    
                   case 1:exit=232;
                   case 2:exit=232;
                   case 3:throw [0,Assert_failure,[0,"odoc_sig.ml",513,46]];
                   }
                 
                 switch(exit)
                  {case 232:
                    var
                     inh=
                      /* record */[0,
                       Odoc_messages["object_end"],
                       /* None */0,
                       text_opt];
                    
                   }
                 
                 var match$4=f(pos_end+match$2[1],q);
                 
                 return /* tuple */[0,
                         /* :: */[0,inh,match$4[1]],
                         Pervasives["@"](match$1[2],match$4[2])];
                 
                case 1:
                 var match$5=match[1];
                 
                 var name$1=match$5[1];
                 
                 var match$6=get_comments_in_class(last_pos,loc[1][4]);
                 
                 var
                  complete_name=
                   Odoc_name["concat"](current_class_name,name$1);
                 
                 try
                  {var typ=Signature_search[10](name$1,class_signature);}
                 catch(exn)
                  {if(exn=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["attribute_type_not_found"]
                             (current_class_name,name$1)];
                     }
                   else
                    {throw exn;}
                   }
                 
                 var subst_typ=Odoc_env["subst_type"](env,typ);
                 
                 var
                  att=
                   /* record */[0,
                    /* record */[0,
                     complete_name,
                     match$6[1],
                     subst_typ,
                     /* false */0,
                     /* [] */0,
                     /* None */0,
                     /* record */[0,/* None */0,/* Some */[0,loc]]],
                    match$5[2]=/* Mutable */1,
                    match$5[3]=/* Virtual */0];
                 
                 var pos_limit2$1=get_pos_limit2(q);
                 
                 var pos_end$1=loc[2][4];
                 
                 var
                  match$7=
                   My_ir[3]
                    (file_name[1],get_string_of_file(pos_end$1,pos_limit2$1));
                 
                 att[1][2]=merge_infos(att[1][2],match$7[2]),0;
                 var match$8=f(pos_end$1+match$7[1],q);
                 
                 return /* tuple */[0,
                         match$8[1],
                         Pervasives["@"]
                          (match$6[2],
                           /* :: */[0,/* Class_attribute */[0,att],match$8[2]])];
                 
                case 2:
                 var match$9=match[1];
                 
                 var match$10=get_comments_in_class(last_pos,loc[1][4]);
                 
                 var
                  match$11=
                   get_method(match$9[1],match$10[1],match$9[2],loc,q);
                 
                 var met=match$11[1];
                 
                 if(match$9[3]!=0)
                  {var met2=met;}
                 else
                  {var met2=/* record */[0,met[1],met[2],/* true */1];}
                 
                 var match$12=f(loc[2][4]+match$11[2],q);
                 
                 return /* tuple */[0,
                         match$12[1],
                         Pervasives["@"]
                          (match$10[2],
                           /* :: */[0,/* Class_method */[1,met2],match$12[2]])];
                 
                case 3:
                 var match$13=get_comments_in_class(last_pos,loc[1][4]);
                 
                 var match$14=f(loc[2][4],q);
                 
                 return /* tuple */[0,
                         match$14[1],
                         Pervasives["@"](match$13[2],match$14[2])];
                 
                case 4:
                 var match$15=get_comments_in_class(last_pos,loc[1][4]);
                 
                 var match$16=f(loc[2][4],q);
                 
                 return /* tuple */[0,
                         match$16[1],
                         Pervasives["@"](match$15[2],match$16[2])];
                 
                case 5:throw [0,Assert_failure,[0,"odoc_sig.ml",522,40]];
                }
              }
            else
             {var s=get_string_of_file(last_pos,pos_limit);
              
              var match$17=My_ir[1](file_name[1],s);
              
              var
               ele_comments=
                List["fold_left"]
                 (function(acc,sc)
                   {var match$18=sc[1];
                    
                    if(match$18)
                     {return Pervasives["@"]
                              (acc,
                               /* :: */[0,/* Class_comment */[2,match$18[1]],/* [] */0]);
                      }
                    else
                     {return acc;}
                    },
                  /* [] */0,
                  match$17[2]);
              
              return /* tuple */[0,/* [] */0,ele_comments];
              }
            };
        
        return f(last_pos,class_type_field_list);
        };
    
    var
     analyse_parsetree=
      function
       (env,signat,current_module_name,last_pos,pos_limit,sig_item_list)
       {var table$1=Signature_search[2](signat);
        
        var
         f=
          function(acc_eles,acc_env,last_pos,param)
           {if(param)
             {var q=param[2];
              
              var ele=param[1];
              
              var match=get_comments_in_module(last_pos,ele[2][1][4]);
              
              var
               match$1=
                analyse_signature_item_desc
                 (acc_env,
                  signat,
                  table$1,
                  current_module_name,
                  ele[2],
                  ele[2][1][4],
                  ele[2][2][4],
                  q?q[1][2][1][4]:pos_limit,
                  match[1],
                  ele[1]);
              
              return f
                      (Pervasives["@"]
                        (acc_eles,Pervasives["@"](match[2],match$1[3])),
                       match$1[2],
                       ele[2][2][4]+match$1[1],
                       q);
              }
            else
             {var s=get_string_of_file(last_pos,pos_limit);
              
              var match$2=My_ir[1](file_name[1],s);
              
              var
               ele_comments=
                List["fold_left"]
                 (function(acc,sc)
                   {var match$3=sc[1];
                    
                    if(match$3)
                     {return Pervasives["@"]
                              (acc,
                               /* :: */[0,
                                /* Element_module_comment */[9,match$3[1]],
                                /* [] */0]);
                      }
                    else
                     {return acc;}
                    },
                  /* [] */0,
                  match$2[2]);
              
              return Pervasives["@"](acc_eles,ele_comments);
              }
            };
        
        return f(/* [] */0,env,last_pos,sig_item_list);
        };
    
    var
     analyse_signature_item_desc=
      function
       (env,
        signat,
        table,
        current_module_name,
        sig_item_loc,
        pos_start_ele,
        pos_end_ele,
        pos_limit,
        comment_opt,
        sig_item_desc)
       {var exit;
        
        switch(sig_item_desc)
         {case 0:
           var name_pre=sig_item_desc[1][1];
           
           try
            {var type_expr=Signature_search[3](table,name_pre[1]);}
           catch(exn)
            {if(exn=Not_found)
              {throw [0,
                      Failure,
                      Odoc_messages["value_not_found"]
                       (current_module_name,name_pre[1])];
               }
             else
              {throw exn;}
             }
           
           var name=Odoc_name["parens_if_infix"](name_pre[1]);
           
           var subst_typ=Odoc_env["subst_type"](env,type_expr);
           
           var
            v=
             /* record */[0,
              Odoc_name["concat"](current_module_name,name),
              comment_opt,
              subst_typ,
              /* false */0,
              Odoc_value["dummy_parameter_list"](subst_typ),
              /* None */0,
              /* record */[0,/* None */0,/* Some */[0,sig_item_loc]]];
           
           var
            match=
             My_ir[3](file_name[1],get_string_of_file(pos_end_ele,pos_limit));
           
           v[2]=merge_infos(v[2],match[2]),0;
           Odoc_value["update_value_parameters_text"](v);
           var new_env=Odoc_env["add_value"](env,v[1]);
           
           return /* tuple */[0,
                   match[1],
                   new_env,
                   /* :: */[0,/* Element_value */[5,v],/* [] */0]];
           
          case 1:
           var name_type_decl_list=sig_item_desc[1];
           
           var
            extended_env=
             List["fold_left"]
              (function(acc_env,td)
                {var
                  complete_name=
                   Odoc_name["concat"](current_module_name,td[1][1]);
                 
                 return Odoc_env["add_type"](acc_env,complete_name);
                 },
               env,
               name_type_decl_list);
           
           var
            is_nonrec=
             List["exists"]
              (function(td)
                {return List["exists"]
                         (function(param)
                           {return "unknown primitive:caml_string_equal";},
                          td[7]);
                 },
               name_type_decl_list);
           
           if(is_nonrec){var env$1=env;}else{var env$1=extended_env;}
           
           var
            f=
             function
              ($staropt$star,acc_maybe_more,last_pos,name_type_decl_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=/* false */0;}
               
               if(name_type_decl_list)
                {var q=name_type_decl_list[2];
                 
                 var type_decl=name_type_decl_list[1];
                 
                 var name$1=type_decl[1];
                 
                 if(first)
                  {var match$1=/* tuple */[0,comment_opt,/* [] */0];}
                 else
                  {var
                    match$1=
                     get_comments_in_module(last_pos,type_decl[8][1][4]);
                   }
                 
                 if(q)
                  {var pos_limit2=q[1][8][1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 var
                  match$2=
                   name_comment_from_type_decl
                    (type_decl[8][2][4],pos_limit2,type_decl);
                 
                 var name_comment_list=match$2[2];
                 
                 var maybe_more=match$2[1];
                 
                 try
                  {var sig_type_decl=Signature_search[5](table,name$1[1]);}
                 catch(exn$1)
                  {if(exn$1=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["type_not_found"]
                             (current_module_name,name$1[1])];
                     }
                   else
                    {throw exn$1;}
                   }
                 
                 var
                  type_kind=
                   get_type_kind(env$1,name_comment_list,sig_type_decl[3]);
                 
                 var loc_start=type_decl[8][1][4];
                 
                 var new_end=type_decl[8][2][4]+maybe_more;
                 
                 var match$3=sig_type_decl[5];
                 
                 var
                  new_type=
                   /* record */[0,
                    Odoc_name["concat"](current_module_name,name$1[1]),
                    match$1[1],
                    List["map2"]
                     (function(p,v)
                       {var match$4=Types["Variance"][11](v);
                        
                        return /* tuple */[0,
                                Odoc_env["subst_type"](env$1,p),
                                match$4[1],
                                match$4[2]];
                        },
                      sig_type_decl[1],
                      sig_type_decl[6]),
                    type_kind,
                    sig_type_decl[4],
                    match$3
                     ?/* Some */[0,
                       manifest_structure(env$1,name_comment_list,match$3[1])]
                     :/* None */0,
                    /* record */[0,/* None */0,/* Some */[0,sig_item_loc]],
                    Odoc_global["keep_code"][1]
                     ?/* Some */[0,get_string_of_file(loc_start,new_end)]
                     :/* None */0];
                 
                 var
                  match$4=
                   My_ir[3]
                    (file_name[1],get_string_of_file(new_end,pos_limit2));
                 
                 var maybe_more2=match$4[1];
                 
                 new_type[2]=merge_infos(new_type[2],match$4[2]),0;
                 var
                  match$5=
                   f(/* None */0,maybe_more+maybe_more2,new_end+maybe_more2,q);
                 
                 return /* tuple */[0,
                         match$5[1],
                         Pervasives["@"]
                          (Pervasives["@"]
                            (match$1[2],
                             /* :: */[0,/* Element_type */[8,new_type],/* [] */0]),
                           match$5[2])];
                 }
               else
                {return /* tuple */[0,acc_maybe_more,/* [] */0];}
               };
           
           var
            match$1=
             f([/* Some */0,/* true */1],0,pos_start_ele,name_type_decl_list);
           
           return /* tuple */[0,match$1[1],extended_env,match$1[2]];
           
          case 2:
           var
            match$2=
             List["fold_left"]
              (function(param,param$1)
                {var name$1=param$1[1][1];
                 
                 var
                  complete_name=
                   Odoc_name["concat"](current_module_name,name$1);
                 
                 var
                  env_acc=
                   Odoc_env["add_extension"](param[1],complete_name);
                 
                 try
                  {var types_ext=Signature_search[4](table,name$1);}
                 catch(exn$1)
                  {if(exn$1=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["extension_not_found"]
                             (current_module_name,name$1)];
                     }
                   else
                    {throw exn$1;}
                   }
                 
                 return /* tuple */[0,
                         env_acc,
                         /* :: */[0,/* tuple */[0,name$1,types_ext],param[2]],
                         /* Some */[0,types_ext]];
                 },
               /* tuple */[0,env,/* [] */0,/* None */0],
               sig_item_desc[1][3]);
           
           var last_ext=match$2[3];
           
           var new_env$1=match$2[1];
           
           if(last_ext)
            {var ext=last_ext[1];
             
             var match$3=/* tuple */[0,ext[1],ext[2],ext[5]];
             }
           else
            {throw [0,Assert_failure,[0,"odoc_sig.ml",634,22]];}
           
           var
            new_te=
             /* record */[0,
              comment_opt,
              Odoc_env["full_type_name"]
               (new_env$1,Odoc_name["from_path"](match$3[1])),
              List["map"](Odoc_env["subst_type"](new_env$1),match$3[2]),
              match$3[3],
              /* [] */0,
              /* record */[0,/* None */0,/* Some */[0,sig_item_loc]],
              Odoc_global["keep_code"][1]
               ?/* Some */[0,get_string_of_file(pos_start_ele,pos_end_ele)]
               :/* None */0];
           
           var
            analyse_extension_constructors=
             function(maybe_more,exts_acc,types_ext_list)
              {if(types_ext_list)
                {var q=types_ext_list[2];
                 
                 var match$4=types_ext_list[1];
                 
                 var types_ext=match$4[2];
                 
                 var ext_loc_end=types_ext[6][2][4];
                 
                 var
                  new_x=
                   /* record */[0,
                    Odoc_name["concat"](current_module_name,match$4[1]),
                    List["map"](Odoc_env["subst_type"](new_env$1),types_ext[3]),
                    Misc["may_map"]
                     (Odoc_env["subst_type"](new_env$1),types_ext[4]),
                    new_te,
                    /* None */0,
                    /* record */[0,/* None */0,/* Some */[0,types_ext[6]]],
                    /* None */0];
                 
                 if(q)
                  {var pos_limit2=q[1][2][6][1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 var s=get_string_of_file(ext_loc_end,pos_limit2);
                 
                 var match$5=My_ir[3](file_name[1],s);
                 
                 new_x[7]=match$5[2],0;
                 return analyse_extension_constructors
                         (match$5[1],/* :: */[0,new_x,exts_acc],q);
                 }
               else
                {return /* tuple */[0,maybe_more,List["rev"](exts_acc)];}
               };
           
           var match$4=analyse_extension_constructors(0,/* [] */0,match$2[2]);
           
           var maybe_more=match$4[1];
           
           new_te[5]=match$4[2],0;
           var
            match$5=
             My_ir[3]
              (file_name[1],
               get_string_of_file(pos_end_ele+maybe_more,pos_limit));
           
           new_te[1]=merge_infos(new_te[1],match$5[2]),0;
           return /* tuple */[0,
                   maybe_more+match$5[1],
                   new_env$1,
                   /* :: */[0,/* Element_type_extension */[6,new_te],/* [] */0]];
           
          case 3:
           var name$1=sig_item_desc[1][1];
           
           try
            {var types_ext=Signature_search[4](table,name$1[1]);}
           catch(exn$1)
            {if(exn$1=Not_found)
              {throw [0,
                      Failure,
                      Odoc_messages["exception_not_found"]
                       (current_module_name,name$1[1])];
               }
             else
              {throw exn$1;}
             }
           
           var
            e=
             /* record */[0,
              Odoc_name["concat"](current_module_name,name$1[1]),
              comment_opt,
              List["map"](Odoc_env["subst_type"](env),types_ext[3]),
              Misc["may_map"](Odoc_env["subst_type"](env),types_ext[4]),
              /* None */0,
              /* record */[0,/* None */0,/* Some */[0,sig_item_loc]],
              Odoc_global["keep_code"][1]
               ?/* Some */[0,get_string_of_file(pos_start_ele,pos_end_ele)]
               :/* None */0];
           
           var
            match$6=
             My_ir[3](file_name[1],get_string_of_file(pos_end_ele,pos_limit));
           
           e[2]=merge_infos(e[2],match$6[2]),0;
           var new_env$2=Odoc_env["add_extension"](env,e[1]);
           
           return /* tuple */[0,
                   match$6[1],
                   new_env$2,
                   /* :: */[0,/* Element_exception */[7,e],/* [] */0]];
           
          case 4:
           var match$7=sig_item_desc[1];
           
           var module_type=match$7[2];
           
           var name$2=match$7[1];
           
           var
            complete_name=
             Odoc_name["concat"](current_module_name,name$2[1]);
           
           try
            {var sig_module_type=Signature_search[8](table,name$2[1]);}
           catch(exn$2)
            {if(exn$2=Not_found)
              {throw [0,
                      Failure,
                      Odoc_messages["module_not_found"]
                       (current_module_name,name$2[1])];
               }
             else
              {throw exn$2;}
             }
           
           var
            module_kind=
             analyse_module_kind
              (/* None */0,env,complete_name,module_type,sig_module_type);
           
           if(Odoc_global["keep_code"][1])
            {var loc=module_type[2];
             
             var st=loc[1][4];
             
             var en=loc[2][4];
             
             var code_intf=/* Some */[0,get_string_of_file(st,en)];
             }
           else
            {var code_intf=/* None */0;}
           
           var
            new_module=
             /* record */[0,
              complete_name,
              sig_module_type,
              comment_opt,
              /* true */1,
              file_name[1],
              module_kind,
              /* record */[0,/* None */0,/* Some */[0,sig_item_loc]],
              /* [] */0,
              /* None */0,
              code_intf,
              /* false */0];
           
           var
            match$8=
             My_ir[3](file_name[1],get_string_of_file(pos_end_ele,pos_limit));
           
           new_module[3]=merge_infos(new_module[3],match$8[2]),0;
           var new_env$3=Odoc_env["add_module"](env,new_module[1]);
           
           var match$9=new_module[2];
           
           switch(match$9)
            {case 1:
              var
               new_env2=
                Odoc_env["add_signature"]
                 (new_env$3,
                  new_module[1],
                  /* Some */[0,Odoc_name["simple"](new_module[1])],
                  match$9[1]);
              
             default:var new_env2=new_env$3;}
           
           return /* tuple */[0,
                   match$8[1],
                   new_env2,
                   /* :: */[0,/* Element_module */[0,new_module],/* [] */0]];
           
          case 5:
           var decls=sig_item_desc[1];
           
           var
            new_env$4=
             List["fold_left"]
              (function(acc_env,param)
                {var name$3=param[1][1];
                 
                 var
                  complete_name$1=
                   Odoc_name["concat"](current_module_name,name$3);
                 
                 var e$1=Odoc_env["add_module"](acc_env,complete_name$1);
                 
                 try
                  {var sig_module_type$1=Signature_search[8](table,name$3);}
                 catch(exn$3)
                  {if(exn$3=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["module_not_found"]
                             (current_module_name,name$3)];
                     }
                   else
                    {throw exn$3;}
                   }
                 
                 switch(sig_module_type$1)
                  {case 1:
                    return Odoc_env["add_signature"]
                            (e$1,
                             complete_name$1,
                             /* Some */[0,name$3],
                             sig_module_type$1[1]);
                    
                   default:return e$1;}
                 },
               env,
               decls);
           
           var
            f$1=
             function($staropt$star,acc_maybe_more,last_pos,name_mtype_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=/* false */0;}
               
               if(name_mtype_list)
                {var q=name_mtype_list[2];
                 
                 var match$10=name_mtype_list[1];
                 
                 var modtype=match$10[2];
                 
                 var name$3=match$10[1];
                 
                 var
                  complete_name$1=
                   Odoc_name["concat"](current_module_name,name$3[1]);
                 
                 var loc$1=modtype[2];
                 
                 var loc_start=loc$1[1][4];
                 
                 var loc_end=loc$1[2][4];
                 
                 if(first)
                  {var match$11=/* tuple */[0,comment_opt,/* [] */0];}
                 else
                  {var match$11=get_comments_in_module(last_pos,loc_start);}
                 
                 if(q)
                  {var pos_limit2=loc$1[1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 try
                  {var sig_module_type$1=Signature_search[8](table,name$3[1]);
                   }
                 catch(exn$3)
                  {if(exn$3=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["module_not_found"]
                             (current_module_name,name$3[1])];
                     }
                   else
                    {throw exn$3;}
                   }
                 
                 var
                  module_kind$1=
                   analyse_module_kind
                    (/* None */0,
                     new_env$4,
                     complete_name$1,
                     modtype,
                     sig_module_type$1);
                 
                 if(Odoc_global["keep_code"][1])
                  {var st$1=loc$1[1][4];
                   
                   var en$1=loc$1[2][4];
                   
                   var code_intf$1=/* Some */[0,get_string_of_file(st$1,en$1)];
                   }
                 else
                  {var code_intf$1=/* None */0;}
                 
                 var
                  new_module$1=
                   /* record */[0,
                    complete_name$1,
                    sig_module_type$1,
                    match$11[1],
                    /* true */1,
                    file_name[1],
                    module_kind$1,
                    /* record */[0,/* None */0,/* Some */[0,loc$1]],
                    /* [] */0,
                    /* None */0,
                    code_intf$1,
                    /* false */0];
                 
                 var
                  match$12=
                   My_ir[3]
                    (file_name[1],get_string_of_file(loc_end,pos_limit2));
                 
                 var maybe_more$1=match$12[1];
                 
                 new_module$1[3]=merge_infos(new_module$1[3],match$12[2]),0;
                 var
                  match$13=
                   f$1(/* None */0,maybe_more$1,loc_end+maybe_more$1,q);
                 
                 return /* tuple */[0,
                         match$13[1],
                         Pervasives["@"]
                          (Pervasives["@"]
                            (match$11[2],
                             /* :: */[0,/* Element_module */[0,new_module$1],/* [] */0]),
                           match$13[2])];
                 }
               else
                {return /* tuple */[0,acc_maybe_more,/* [] */0];}
               };
           
           var match$10=f$1([/* Some */0,/* true */1],0,pos_start_ele,decls);
           
           return /* tuple */[0,match$10[1],new_env$4,match$10[2]];
           
          case 6:
           var match$11=sig_item_desc[1];
           
           var pmodtype_decl=match$11[2];
           
           var name$3=match$11[1];
           
           var
            complete_name$1=
             Odoc_name["concat"](current_module_name,name$3[1]);
           
           try
            {var sig_mtype=Signature_search[9](table,name$3[1]);}
           catch(exn$3)
            {if(exn$3=Not_found)
              {throw [0,
                      Failure,
                      Odoc_messages["module_type_not_found"]
                       (current_module_name,name$3[1])];
               }
             else
              {throw exn$3;}
             }
           
           if(pmodtype_decl)
            {if(sig_mtype)
              {var
                module_type_kind=
                 /* Some */[0,
                  analyse_module_type_kind
                   (/* None */0,
                    env,
                    complete_name$1,
                    pmodtype_decl[1],
                    sig_mtype[1])];
               }
             else
              {var module_type_kind=/* None */0;}
             }
           else
            {var module_type_kind=/* None */0;}
           
           var
            mt=
             /* record */[0,
              complete_name$1,
              comment_opt,
              sig_mtype,
              /* true */1,
              file_name[1],
              module_type_kind,
              /* record */[0,/* None */0,/* Some */[0,sig_item_loc]]];
           
           var
            match$12=
             My_ir[3](file_name[1],get_string_of_file(pos_end_ele,pos_limit));
           
           mt[2]=merge_infos(mt[2],match$12[2]),0;
           var new_env$5=Odoc_env["add_module_type"](env,mt[1]);
           
           var exit$1;
           
           if(sig_mtype)
            {var match$13=sig_mtype[1];
             
             switch(match$13)
              {case 1:
                var
                 new_env2$1=
                  Odoc_env["add_signature"]
                   (new_env$5,
                    mt[1],
                    /* Some */[0,Odoc_name["simple"](mt[1])],
                    match$13[1]);
                
               default:exit$1=102;}
             }
           else
            {exit$1=102;}
           
           switch(exit$1){case 102:var new_env2$1=new_env$5;}
           
           return /* tuple */[0,
                   match$12[1],
                   new_env2$1,
                   /* :: */[0,/* Element_module_type */[1,mt],/* [] */0]];
           
          case 7:
           if(comment_opt)
            {var match$14=comment_opt[1][1];
             
             if(match$14)
              {var
                ele_comments=
                 /* :: */[0,
                  /* Element_module_comment */[9,match$14[1]],
                  /* [] */0];
               }
             else
              {var ele_comments=/* [] */0;}
             }
           else
            {var ele_comments=/* [] */0;}
           
           return /* tuple */[0,0,env,ele_comments];
           
          case 8:
           var
            f$2=
             function(param)
              {var exit$2;
               
               switch(param)
                {case 0:exit$2=115;
                 case 1:return "??";
                 case 2:return "??";
                 case 3:return f$2(param[1][1]);
                 case 4:
                  var match$15=param[1][1];
                  
                  switch(match$15)
                   {case 0:return Odoc_name["from_longident"](match$15[1][1]);
                    default:return "??";}
                  
                 case 5:throw [0,Assert_failure,[0,"odoc_sig.ml",1037,46]];
                 case 6:exit$2=115;
                 }
               
               switch(exit$2)
                {case 115:return Odoc_name["from_longident"](param[1][1]);}
               };
           
           var name$4=f$2(sig_item_desc[1][1][1]);
           
           var
            full_name=
             Odoc_env["full_module_or_module_type_name"](env,name$4);
           
           var im=/* record */[0,full_name,/* None */0,comment_opt];
           
           return /* tuple */[0,
                   0,
                   env,
                   /* :: */[0,/* Element_included_module */[2,im],/* [] */0]];
           
          case 9:
           var class_description_list=sig_item_desc[1];
           
           var
            new_env$6=
             List["fold_left"]
              (function(acc_env,class_desc)
                {var
                  complete_name$2=
                   Odoc_name["concat"](current_module_name,class_desc[3][1]);
                 
                 return Odoc_env["add_class"](acc_env,complete_name$2);
                 },
               env,
               class_description_list);
           
           var
            f$3=
             function
              ($staropt$star,acc_maybe_more,last_pos,class_description_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=/* false */0;}
               
               if(class_description_list)
                {var q=class_description_list[2];
                 
                 var class_desc=class_description_list[1];
                 
                 if(first)
                  {var match$15=/* tuple */[0,comment_opt,/* [] */0];}
                 else
                  {var
                    match$15=
                     get_comments_in_module(last_pos,class_desc[5][1][4]);
                   }
                 
                 var pos_end=class_desc[5][2][4];
                 
                 if(q)
                  {var pos_limit2=q[1][5][1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 var name$5=class_desc[3];
                 
                 var
                  complete_name$2=
                   Odoc_name["concat"](current_module_name,name$5[1]);
                 
                 try
                  {var sig_class_decl=Signature_search[6](table,name$5[1]);}
                 catch(exn$4)
                  {if(exn$4=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["class_not_found"]
                             (current_module_name,name$5[1])];
                     }
                   else
                    {throw exn$4;}
                   }
                 
                 var sig_class_type=sig_class_decl[2];
                 
                 var
                  match$16=
                   analyse_class_kind
                    (new_env$6,
                     complete_name$2,
                     class_desc[5][1][4],
                     class_desc[4],
                     sig_class_type);
                 
                 var
                  new_class=
                   /* record */[0,
                    complete_name$2,
                    match$15[1],
                    Odoc_env["subst_class_type"](env,sig_class_type),
                    sig_class_decl[1],
                    class_desc[1]=/* Virtual */0,
                    match$16[2],
                    match$16[1],
                    /* record */[0,/* None */0,/* Some */[0,class_desc[5]]]];
                 
                 var
                  match$17=
                   My_ir[3]
                    (file_name[1],get_string_of_file(pos_end,pos_limit2));
                 
                 var maybe_more$1=match$17[1];
                 
                 new_class[2]=merge_infos(new_class[2],match$17[2]),0;
                 Odoc_class["class_update_parameters_text"](new_class);
                 var
                  match$18=
                   f$3(/* None */0,maybe_more$1,pos_end+maybe_more$1,q);
                 
                 return /* tuple */[0,
                         match$18[1],
                         Pervasives["@"]
                          (match$15[2],
                           /* :: */[0,/* Element_class */[3,new_class],match$18[2]])];
                 }
               else
                {return /* tuple */[0,acc_maybe_more,/* [] */0];}
               };
           
           var
            match$15=
             f$3
              ([/* Some */0,/* true */1],
               0,
               pos_start_ele,
               class_description_list);
           
           return /* tuple */[0,match$15[1],new_env$6,match$15[2]];
           
          case 10:
           var class_type_declaration_list=sig_item_desc[1];
           
           var
            new_env$7=
             List["fold_left"]
              (function(acc_env,class_type_decl)
                {var
                  complete_name$2=
                   Odoc_name["concat"]
                    (current_module_name,class_type_decl[3][1]);
                 
                 return Odoc_env["add_class_type"](acc_env,complete_name$2);
                 },
               env,
               class_type_declaration_list);
           
           var
            f$4=
             function
              ($staropt$star,
               acc_maybe_more,
               last_pos,
               class_type_description_list)
              {if($staropt$star)
                {var first=$staropt$star[1];}
               else
                {var first=/* false */0;}
               
               if(class_type_description_list)
                {var q=class_type_description_list[2];
                 
                 var ct_decl=class_type_description_list[1];
                 
                 if(first)
                  {var match$16=/* tuple */[0,comment_opt,/* [] */0];}
                 else
                  {var
                    match$16=
                     get_comments_in_module(last_pos,ct_decl[5][1][4]);
                   }
                 
                 var pos_end=ct_decl[5][2][4];
                 
                 if(q)
                  {var pos_limit2=q[1][5][1][4];}
                 else
                  {var pos_limit2=pos_limit;}
                 
                 var name$5=ct_decl[3];
                 
                 var
                  complete_name$2=
                   Odoc_name["concat"](current_module_name,name$5[1]);
                 
                 try
                  {var sig_cltype_decl=Signature_search[7](table,name$5[1]);}
                 catch(exn$4)
                  {if(exn$4=Not_found)
                    {throw [0,
                            Failure,
                            Odoc_messages["class_type_not_found"]
                             (current_module_name,name$5[1])];
                     }
                   else
                    {throw exn$4;}
                   }
                 
                 var sig_class_type=sig_cltype_decl[2];
                 
                 var
                  kind=
                   analyse_class_type_kind
                    (new_env$7,
                     complete_name$2,
                     ct_decl[5][1][4],
                     ct_decl[4],
                     sig_class_type);
                 
                 var
                  ct=
                   /* record */[0,
                    complete_name$2,
                    match$16[1],
                    Odoc_env["subst_class_type"](env,sig_class_type),
                    sig_cltype_decl[1],
                    ct_decl[1]=/* Virtual */0,
                    kind,
                    /* record */[0,/* None */0,/* Some */[0,ct_decl[5]]]];
                 
                 var
                  match$17=
                   My_ir[3]
                    (file_name[1],get_string_of_file(pos_end,pos_limit2));
                 
                 var maybe_more$1=match$17[1];
                 
                 ct[2]=merge_infos(ct[2],match$17[2]),0;
                 var
                  match$18=
                   f$4(/* None */0,maybe_more$1,pos_end+maybe_more$1,q);
                 
                 return /* tuple */[0,
                         match$18[1],
                         Pervasives["@"]
                          (match$16[2],
                           /* :: */[0,/* Element_class_type */[4,ct],match$18[2]])];
                 }
               else
                {return /* tuple */[0,acc_maybe_more,/* [] */0];}
               };
           
           var
            match$16=
             f$4
              ([/* Some */0,/* true */1],
               0,
               pos_start_ele,
               class_type_declaration_list);
           
           return /* tuple */[0,match$16[1],new_env$7,match$16[2]];
           
          case 11:exit=148;
          case 12:exit=148;
          }
        
        switch(exit){case 148:return /* tuple */[0,0,env,/* [] */0];}
        };
    
    var
     analyse_module_type_kind=
      function
       ($staropt$star,env,current_module_name,module_type,sig_module_type)
       {if($staropt$star)
         {var erased=$staropt$star[1];}
        else
         {var erased=Odoc_name["Set"][1];}
        
        var match=module_type[1];
        
        switch(match)
         {case 0:
           switch(sig_module_type)
            {case 0:var name=Odoc_name["from_path"](sig_module_type[1]);
             default:var name=Odoc_name["from_longident"](match[1][1]);}
           
           return /* Module_type_alias */[2,
                   /* record */[0,
                    Odoc_env["full_module_type_name"](env,name),
                    /* None */0]];
           
          case 1:
           var ast=filter_out_erased_items_from_signature(erased,match[1]);
           
           switch(sig_module_type)
            {case 1:
              var pos_start=module_type[2][1][4];
              
              var pos_end=module_type[2][2][4];
              
              var
               elements=
                analyse_parsetree
                 (env,
                  sig_module_type[1],
                  current_module_name,
                  pos_start,
                  pos_end,
                  ast);
              
              return /* Module_type_struct */[0,elements];
              
             default:
              throw [0,
                     Failure,
                     "Parsetree.Pmty_signature signature but not Types.Mty_signature signat"];
              }
           
          case 2:
           var pmodule_type2=match[2];
           
           if(pmodule_type2)
            {var loc=pmodule_type2[1][2];}
           else
            {var loc=Location["none"];}
           
           var loc_start=loc[1][4];
           
           var loc_end=loc[2][4];
           
           var mp_type_code=get_string_of_file(loc_start,loc_end);
           
           switch(sig_module_type)
            {case 2:
              var param_module_type=sig_module_type[2];
              
              var exit;
              
              if(pmodule_type2)
               {if(param_module_type)
                 {var
                   mp_kind=
                    analyse_module_type_kind
                     (/* None */0,
                      env,
                      current_module_name,
                      pmodule_type2[1],
                      param_module_type[1]);
                  }
                else
                 {exit=160;}
                }
              else
               {exit=160;}
              
              switch(exit)
               {case 160:var mp_kind=[/* Module_type_struct */0,/* [] */0];}
              
              var
               param=
                /* record */[0,
                 Odoc_name["from_ident"](sig_module_type[1]),
                 Misc["may_map"]
                  (Odoc_env["subst_module_type"](env),param_module_type),
                 mp_type_code,
                 mp_kind];
              
              var
               k=
                analyse_module_type_kind
                 (/* Some */[0,erased],
                  env,
                  current_module_name,
                  match[3],
                  sig_module_type[3]);
              
              return /* Module_type_functor */[1,param,k];
              
             default:
              throw [0,
                     Failure,
                     "Parsetree.Pmty_functor _ but not Types.Mty_functor _"];
              }
           
          case 3:
           var module_type2=match[1];
           
           var loc_start$1=module_type2[2][2][4];
           
           var loc_end$1=module_type[2][2][4];
           
           var s=get_string_of_file(loc_start$1,loc_end$1);
           
           var erased$1=erased_names_of_constraints(match[2],erased);
           
           var
            k$1=
             analyse_module_type_kind
              (/* Some */[0,erased$1],
               env,
               current_module_name,
               module_type2,
               sig_module_type);
           
           return /* Module_type_with */[3,k$1,s];
           
          case 4:
           var module_expr=match[1];
           
           var loc_start$2=module_expr[2][1][4];
           
           var loc_end$2=module_expr[2][2][4];
           
           var s$1=get_string_of_file(loc_start$2,loc_end$2);
           
           return /* Module_type_typeof */[4,s$1];
           
          case 5:throw [0,Assert_failure,[0,"odoc_sig.ml",1296,38]];
          case 6:
           switch(sig_module_type)
            {case 3:var name$1=Odoc_name["from_path"](sig_module_type[1]);
             default:var name$1=Odoc_name["from_longident"](match[1][1]);}
           
           return /* Module_type_alias */[2,
                   /* record */[0,
                    Odoc_env["full_module_name"](env,name$1),
                    /* None */0]];
           
          }
        };
    
    var
     analyse_module_kind=
      function
       ($staropt$star,env,current_module_name,module_type,sig_module_type)
       {if($staropt$star)
         {var erased=$staropt$star[1];}
        else
         {var erased=Odoc_name["Set"][1];}
        
        var match=module_type[1];
        
        switch(match)
         {case 0:
           var
            k=
             analyse_module_type_kind
              (/* None */0,
               env,
               current_module_name,
               module_type,
               sig_module_type);
           
           return /* Module_with */[4,k,""];
           
          case 1:
           var
            signature=
             filter_out_erased_items_from_signature(erased,match[1]);
           
           switch(sig_module_type)
            {case 1:
              return /* Module_struct */[0,
                      analyse_parsetree
                       (env,
                        sig_module_type[1],
                        current_module_name,
                        module_type[2][1][4],
                        module_type[2][2][4],
                        signature)];
              
             default:
              throw [0,
                     Failure,
                     "Parsetree.Pmty_signature signature but not Types.Mty_signature signat"];
              }
           
          case 2:
           var pmodule_type2=match[2];
           
           switch(sig_module_type)
            {case 2:
              var param_module_type=sig_module_type[2];
              
              if(pmodule_type2)
               {var loc=pmodule_type2[1][2];}
              else
               {var loc=Location["none"];}
              
              var loc_start=loc[1][4];
              
              var loc_end=loc[2][4];
              
              var mp_type_code=get_string_of_file(loc_start,loc_end);
              
              var exit;
              
              if(pmodule_type2)
               {if(param_module_type)
                 {var
                   mp_kind=
                    analyse_module_type_kind
                     (/* None */0,
                      env,
                      current_module_name,
                      pmodule_type2[1],
                      param_module_type[1]);
                  }
                else
                 {exit=184;}
                }
              else
               {exit=184;}
              
              switch(exit)
               {case 184:var mp_kind=[/* Module_type_struct */0,/* [] */0];}
              
              var
               param=
                /* record */[0,
                 Odoc_name["from_ident"](sig_module_type[1]),
                 Misc["may_map"]
                  (Odoc_env["subst_module_type"](env),param_module_type),
                 mp_type_code,
                 mp_kind];
              
              var
               k$1=
                analyse_module_kind
                 (/* Some */[0,erased],
                  env,
                  current_module_name,
                  match[3],
                  sig_module_type[3]);
              
              return /* Module_functor */[2,param,k$1];
              
             default:
              throw [0,
                     Failure,
                     "Parsetree.Pmty_functor _ but not Types.Mty_functor _"];
              }
           
          case 3:
           var module_type2=match[1];
           
           var loc_start$1=module_type2[2][2][4];
           
           var loc_end$1=module_type[2][2][4];
           
           var s=get_string_of_file(loc_start$1,loc_end$1);
           
           var erased$1=erased_names_of_constraints(match[2],erased);
           
           var
            k$2=
             analyse_module_type_kind
              (/* Some */[0,erased$1],
               env,
               current_module_name,
               module_type2,
               sig_module_type);
           
           return /* Module_with */[4,k$2,s];
           
          case 4:
           var module_expr=match[1];
           
           var loc_start$2=module_expr[2][1][4];
           
           var loc_end$2=module_expr[2][2][4];
           
           var s$1=get_string_of_file(loc_start$2,loc_end$2);
           
           return /* Module_typeof */[6,s$1];
           
          case 5:throw [0,Assert_failure,[0,"odoc_sig.ml",1385,38]];
          case 6:
           switch(sig_module_type)
            {case 3:
              var
               alias_name=
                Odoc_env["full_module_name"]
                 (env,Odoc_name["from_path"](sig_module_type[1]));
              
              var ma=/* record */[0,alias_name,/* None */0];
              
              return /* Module_alias */[1,ma];
              
             default:
              throw [0,
                     Failure,
                     "Parsetree.Pmty_alias _ but not Types.Mty_alias _"];
              }
           
          }
        };
    
    var
     analyse_class_kind=
      function
       (env,current_class_name,last_pos,parse_class_type,sig_class_type)
       {var match=parse_class_type[1];
        
        var exit;
        
        switch(match)
         {case 0:
           switch(sig_class_type)
            {case 0:
              var path_name=Odoc_name["from_path"](sig_class_type[1]);
              
              var
               name=
                Odoc_env["full_class_or_class_type_name"](env,path_name);
              
              var
               k=
                /* Class_constr */[2,
                 /* record */[0,
                  name,
                  /* None */0,
                  List["map"](Odoc_env["subst_type"](env),sig_class_type[2])]];
              
              return /* tuple */[0,/* [] */0,k];
              
             case 1:exit=206;
             case 2:exit=206;
             }
           
          case 1:
           switch(sig_class_type)
            {case 0:exit=206;
             case 1:
              var
               match$1=
                analyse_class_elements
                 (env,
                  current_class_name,
                  last_pos,
                  parse_class_type[2][2][4],
                  match[1][2],
                  sig_class_type[1]);
              
              return /* tuple */[0,
                      /* [] */0,
                      /* Class_structure */[0,match$1[1],match$1[2]]];
              
             case 2:exit=206;
             }
           
          case 2:
           switch(sig_class_type)
            {case 0:exit=206;
             case 1:exit=206;
             case 2:
              var label=sig_class_type[1];
              
              if("unknown primitive:caml_string_equal")
               {var
                 new_param=
                  /* Simple_name */[0,
                   /* record */[0,
                    Btype["label_name"](label),
                    Odoc_env["subst_type"](env,sig_class_type[2]),
                    /* None */0]];
                
                var
                 match$2=
                  analyse_class_kind
                   (env,current_class_name,last_pos,match[3],sig_class_type[3]);
                
                return /* tuple */[0,
                        /* :: */[0,new_param,match$2[1]],
                        match$2[2]];
                }
              else
               {throw [0,
                       Failure,
                       "Parsetree.Pcty_arrow (parse_label, _, pclass_type), labels differents"];
                }
              
             }
           
          case 3:exit=206;
          }
        
        switch(exit)
         {case 206:
           throw [0,
                  Failure,
                  "analyse_class_kind pas de correspondance dans le match"];
           
          }
        };
    
    var
     analyse_class_type_kind=
      function
       (env,current_class_name,last_pos,parse_class_type,sig_class_type)
       {var match=parse_class_type[1];
        
        var exit;
        
        switch(match)
         {case 0:
           switch(sig_class_type)
            {case 0:
              return /* Class_type */[1,
                      /* record */[0,
                       Odoc_env["full_class_or_class_type_name"]
                        (env,Odoc_name["from_path"](sig_class_type[1])),
                       /* None */0,
                       List["map"](Odoc_env["subst_type"](env),sig_class_type[2])]];
              
             case 1:exit=209;
             case 2:exit=209;
             }
           
          case 1:
           switch(sig_class_type)
            {case 0:exit=209;
             case 1:
              var
               match$1=
                analyse_class_elements
                 (env,
                  current_class_name,
                  last_pos,
                  parse_class_type[2][2][4],
                  match[1][2],
                  sig_class_type[1]);
              
              return /* Class_signature */[0,match$1[1],match$1[2]];
              
             case 2:exit=209;
             }
           
          case 2:
           switch(sig_class_type)
            {case 0:exit=209;
             case 1:exit=209;
             case 2:
              throw [0,
                     Failure,
                     "analyse_class_type_kind : Parsetree.Pcty_arrow (...) with Types.Cty_arrow (...)"];
              
             }
           
          case 3:exit=209;
          }
        
        switch(exit)
         {case 209:
           throw [0,
                  Failure,
                  "analyse_class_type_kind pas de correspondance dans le match"];
           
          }
        };
    
    var
     analyse_signature=
      function(source_file,input_file,ast,signat)
       {try
         {var curdir="unknown primitive:caml_sys_getcwd";
          
          var
           match=
            /* tuple */[0,
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
        var $js;
        try
         {$js=Filename["chop_extension"](source_file);}
        catch(exn$1){$js=source_file;}
        var mod_name=$$String["capitalize"](Filename["basename"]($js));
        
        var match$1=My_ir[4](file_name[1],file[1]);
        
        var
         elements=
          analyse_parsetree
           (Odoc_env["empty"],
            signat,
            mod_name,
            match$1[1],
            file[1]["length"],
            ast);
        
        if(Odoc_global["keep_code"][1])
         {var code_intf=/* Some */[0,file[1]];}
        else
         {var code_intf=/* None */0;}
        
        return /* record */[0,
                mod_name,
                /* Mty_signature */[1,signat],
                match$1[2],
                /* true */1,
                file_name[1],
                /* Module_struct */[0,elements],
                /* record */[0,
                 /* None */0,
                 /* Some */[0,Location["in_file"](file_name[1])]],
                /* [] */0,
                /* None */0,
                code_intf,
                /* false */0];
        };
    
    return [0,
            file,
            file_name,
            get_string_of_file,
            prepare_file,
            get_comments_in_class,
            get_comments_in_module,
            merge_infos,
            name_comment_from_type_decl,
            manifest_structure,
            get_type_kind,
            erased_names_of_constraints,
            filter_out_erased_items_from_signature,
            analyse_class_elements,
            analyse_parsetree,
            analyse_signature_item_desc,
            analyse_module_type_kind,
            analyse_module_kind,
            analyse_class_kind,
            analyse_class_type_kind,
            analyse_signature];
    };

module["exports"]=
{"Signature_search":
 [0,
  Signature_search[2],
  Signature_search[3],
  Signature_search[4],
  Signature_search[5],
  Signature_search[6],
  Signature_search[7],
  Signature_search[8],
  Signature_search[9],
  Signature_search[10],
  Signature_search[11]],
 "Analyser":
 function(funarg)
  {var $$let=Analyser(funarg);
   
   return [0,
           $$let[1],
           $$let[2],
           $$let[3],
           $$let[4],
           $$let[5],
           $$let[6],
           $$let[8],
           $$let[9],
           $$let[10],
           $$let[7],
           $$let[16],
           $$let[19],
           $$let[20]];
   }};

