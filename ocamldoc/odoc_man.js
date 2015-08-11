// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Odoc_str=require("Odoc_str");
var Misc=require("Misc");
var Unix=require("Unix");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Odoc_print=require("Odoc_print");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var Odoc_messages=require("Odoc_messages");


var
 shared=
  [0,
   "remove_newlines",
   "relative_idents",
   "open_out",
   "man_of_value",
   "man_of_type_extension",
   "man_of_type_expr_param_list",
   "man_of_type_expr_list",
   "man_of_type_expr",
   "man_of_type",
   "man_of_text_element",
   "man_of_text2",
   "man_of_text",
   "man_of_recfield",
   "man_of_parameter_list",
   "man_of_parameter_description",
   "man_of_module_type_body",
   "man_of_module_type",
   "man_of_module_parameter_list",
   "man_of_module_comment",
   "man_of_module_body",
   "man_of_module",
   "man_of_modtype",
   "man_of_method",
   "man_of_info",
   "man_of_included_module",
   "man_of_exception",
   "man_of_custom_text",
   "man_of_const",
   "man_of_code",
   "man_of_class_type_expr",
   "man_of_class_type",
   "man_of_class_comment",
   "man_of_class",
   "man_of_attribute",
   "man_of_Target",
   "generate_for_module_type",
   "generate_for_module",
   "generate_for_group",
   "generate_for_class_type",
   "generate_for_class",
   "generate",
   "file_name",
   "escape",
   "create_groups"];

var shared$1=[0,"man_of_text"];

var shared$2=[0,"tag_functions"];

var
 shared$3=
  [0,
   "str_man_of_version_opt",
   "str_man_of_text",
   "str_man_of_since_opt",
   "str_man_of_sees",
   "str_man_of_see",
   "str_man_of_return_opt",
   "str_man_of_raised_exceptions",
   "str_man_of_custom",
   "str_man_of_before",
   "str_man_of_author_list",
   "man_of_text",
   "man_of_info"];

var
 shared$4=
  [0,
   "man_of_info",
   "str_man_of_author_list",
   "str_man_of_before",
   "str_man_of_custom",
   "str_man_of_raised_exceptions",
   "str_man_of_return_opt",
   "str_man_of_see",
   "str_man_of_sees",
   "str_man_of_since_opt",
   "str_man_of_text",
   "str_man_of_version_opt"];

var man_suffix=[0,Odoc_messages["default_man_suffix"]];

var man_section=[0,Odoc_messages["default_man_section"]];

var man_mini=[0,/* false */0];

var new_buf=function(param){return Buffer["create"](1024);};

var bp=Printf["bprintf"];

var bs=Buffer["add_string"];

var linebreak="\n.sp\n";

var
 info=
  [0,
   0,
   function($$class)
    {var
      ids=
       CamlinternalOO["new_methods_variables"]($$class,shared$3,shared$2);
     
     var str_man_of_version_opt=ids[1];
     
     var str_man_of_text=ids[2];
     
     var str_man_of_since_opt=ids[3];
     
     var str_man_of_sees=ids[4];
     
     var str_man_of_see=ids[5];
     
     var str_man_of_return_opt=ids[6];
     
     var str_man_of_raised_exceptions=ids[7];
     
     var str_man_of_custom=ids[8];
     
     var str_man_of_before=ids[9];
     
     var str_man_of_author_list=ids[10];
     
     var man_of_text=ids[11];
     
     var man_of_info=ids[12];
     
     var tag_functions=ids[13];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        str_man_of_text,
        function(self$neg1,t)
         {var b=Buffer["create"](256);
          
          "unknown block:(sendself self-1/1261 man_of_text/1248 b/1263 t/1262)";
          
          return Buffer["contents"](b);
          },
        str_man_of_author_list,
        function(self$neg1,l)
         {if(l)
           {var b=Buffer["create"](256);
            
            bs(b,'.B "');
            bs(b,Odoc_messages["authors"]);
            bs(b,'"\n:\n');
            bs(b,$$String["concat"](", ",l));
            bs(b,"\n");
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_version_opt,
        function(self$neg1,v_opt)
         {if(v_opt)
           {var b=Buffer["create"](256);
            
            bs(b,'.B "');
            bs(b,Odoc_messages["version"]);
            bs(b,'"\n:\n');
            bs(b,v_opt[1]);
            bs(b,"\n");
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_before,
        function(self$neg1,l)
         {if(l)
           {var b=Buffer["create"](256);
            
            var
             iter=
              function(param)
               {if(param)
                 {var q=param[2];
                  
                  var match=param[1];
                  
                  bp
                   (b,
                    [/* Format */0,
                     [/* String_literal */11,
                      '.B "',
                      [/* String */2,/* No_padding */0,/* End_of_format */0]],
                     '.B "%s'],
                    Odoc_messages["before"]);
                  bs(b,match[1]);
                  bs(b,'"\n');
                  "unknown block:(sendself self-1/1274 man_of_text/1248 b/1276 (field 1 match/2220))";
                  
                  bs(b,"\n");
                  bs(b,"\n");
                  if(q)
                   {bs(b,linebreak);return iter(q);}
                  else
                   {return /* () */0;}
                  }
                else
                 {return /* () */0;}
                };
            
            iter(l);
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_since_opt,
        function(self$neg1,s_opt)
         {if(s_opt)
           {var b=Buffer["create"](256);
            
            bs(b,'.B "');
            bs(b,Odoc_messages["since"]);
            bs(b,'"\n');
            bs(b,s_opt[1]);
            bs(b,"\n");
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_raised_exceptions,
        function(self$neg1,l)
         {if(l)
           {var b=Buffer["create"](256);
            
            var
             iter=
              function(param)
               {if(param)
                 {var q=param[2];
                  
                  var match=param[1];
                  
                  bs(b,'.B "');
                  bs(b,Odoc_messages["raises"]);
                  bs(b,Pervasives["^"](" ",Pervasives["^"](match[1],'"\n')));
                  "unknown block:(sendself self-1/1287 man_of_text/1248 b/1289 (field 1 match/2214))";
                  
                  bs(b,"\n");
                  if(q)
                   {bs(b,linebreak);return iter(q);}
                  else
                   {return /* () */0;}
                  }
                else
                 {return /* () */0;}
                };
            
            iter(l);
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_see,
        function(self$neg1,param)
         {var t=param[2];
          
          var see_ref=param[1];
          
          switch(see_ref)
           {case 0:
             var t_ref=/* :: */[0,/* Link */[15,see_ref[1],t],/* [] */0];
            case 1:
             var
              t_ref=
               /* :: */[0,
                /* Code */[1,see_ref[1]],
                /* :: */[0,[/* Raw */0," "],t]];
             
            case 2:
             var
              t_ref=
               /* :: */[0,
                /* Italic */[5,/* :: */[0,/* Raw */[0,see_ref[1]],/* [] */0]],
                /* :: */[0,[/* Raw */0," "],t]];
             
            }
          
          "unknown block:(sendself self-1/1295 str_man_of_text/1249 t_ref/1298)";
          },
        str_man_of_sees,
        function(self$neg1,l)
         {if(l)
           {var b=Buffer["create"](256);
            
            var
             iter=
              function(param)
               {if(param)
                 {var q=param[2];
                  
                  bs(b,'.B "');
                  bs(b,Odoc_messages["see_also"]);
                  bs(b,'"\n');
                  "unknown block:(sendself self-1/1303 str_man_of_see/1255 (field 0 param/2205))";
                  bs(b,0);
                  bs(b,"\n");
                  if(q)
                   {bs(b,linebreak);return iter(q);}
                  else
                   {return /* () */0;}
                  }
                else
                 {return /* () */0;}
                };
            
            iter(l);
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_return_opt,
        function(self$neg1,return_opt)
         {if(return_opt)
           {var b=Buffer["create"](256);
            
            bs(b,".B ");
            bs(b,Odoc_messages["returns"]);
            bs(b,"\n");
            "unknown block:(sendself self-1/1310 man_of_text/1248 b/1313 (field 0 return_opt/1311))";
            
            bs(b,"\n");
            return Buffer["contents"](b);
            }
          else
           {return "";}
          },
        str_man_of_custom,
        function(self$neg1,l)
         {return List["fold_left"]
                  (function(acc,param)
                    {var tag=param[1];
                     
                     try
                      {var f=List["assoc"](tag,self$neg1[tag_functions]);
                       
                       var buf=Buffer["create"](50);
                       
                       Buffer["add_string"](buf,f(param[2]));
                       return /* :: */[0,Buffer["contents"](buf),acc];
                       }
                     catch(exn)
                      {if(exn=Not_found)
                        {Odoc_info["warning"](Odoc_messages["tag_not_handled"](tag));
                         return acc;
                         }
                       else
                        {throw exn;}
                       }
                     },
                   /* [] */0,
                   l);
          },
        man_of_info,
        function(self$neg1,$staropt$star,b,info_opt)
         {if($staropt$star){var margin=$staropt$star[1];}else{var margin=0;}
          
          if(info_opt)
           {var info$1=info_opt[1];
            
            var M=Odoc_info;
            
            var match=info$1[7];
            
            if(match)
             {var b$1=Buffer["create"](256);
              
              bs(b$1,'.B "');
              bs(b$1,Odoc_messages["deprecated"]);
              bs(b$1,'"\n');
              "unknown block:(sendself self-1/1323 man_of_text/1248 b/1333 (field 0 match/2194))";
              
              bs(b$1,"\n");
              var $js=/* :: */[0,Buffer["contents"](b$1),/* [] */0];
              }
            else
             {var $js=/* [] */0;}
            var match$1=info$1[1];
            
            if(match$1)
             {var d=match$1[1];
              
              if("unknown primitive:caml_equal")
               {var $js$1=/* [] */0;}
              else
               {"unknown block:(sendself self-1/1323 str_man_of_text/1249 d/1334)";
                var $js$1=/* :: */[0,Pervasives["^"](0,"\n"),/* [] */0];
                }
              }
            else
             {var $js$1=/* [] */0;}
            "unknown block:(sendself self-1/1323 str_man_of_author_list/1250 (field 1 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_version_opt/1251 (field 2 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_before/1252 (field 5 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_since_opt/1253 (field 4 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_raised_exceptions/1254 (field 8 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_return_opt/1257 (field 9 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_sees/1256 (field 3 info/1329))";
            "unknown block:(sendself self-1/1323 str_man_of_custom/1258 (field 10 info/1329))";
            var
             l=
              Pervasives["@"]
               ($js,
                Pervasives["@"]
                 ($js$1,
                  Pervasives["@"]
                   (/* :: */[0,
                     0,
                     /* :: */[0,
                      0,
                      /* :: */[0,
                       0,
                       /* :: */[0,
                        0,
                        /* :: */[0,0,/* :: */[0,0,/* :: */[0,0,/* [] */0]]]]]]],
                    0)));
            
            var
             l$1=
              List["filter"]
               (function(prim,prim){return "unknown primitive:caml_notequal";}
                 (""),
                l);
            
            return Buffer["add_string"](b,$$String["concat"]("\n.sp\n",l$1));
            }
          else
           {return /* () */0;}
          }]);
     return function(env,$$self)
      {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
       
       $$self$1[tag_functions]=/* [] */0,0;
       return $$self$1;
       };
     },
   0,
   0];

var re_slash=Str["regexp_string"]("/");

var
 man_init=
  function($$class)
   {var re_slash$1=CamlinternalOO["new_variable"]($$class,"");
    
    var ids=CamlinternalOO["get_method_labels"]($$class,shared);
    
    var remove_newlines=ids[1];
    
    var relative_idents=ids[2];
    
    var open_out=ids[3];
    
    var man_of_value=ids[4];
    
    var man_of_type_extension=ids[5];
    
    var man_of_type_expr_param_list=ids[6];
    
    var man_of_type_expr_list=ids[7];
    
    var man_of_type_expr=ids[8];
    
    var man_of_type=ids[9];
    
    var man_of_text_element=ids[10];
    
    var man_of_text2=ids[11];
    
    var man_of_text=ids[12];
    
    var man_of_recfield=ids[13];
    
    var man_of_parameter_list=ids[14];
    
    var man_of_parameter_description=ids[15];
    
    var man_of_module_type_body=ids[16];
    
    var man_of_module_type=ids[17];
    
    var man_of_module_parameter_list=ids[18];
    
    var man_of_module_comment=ids[19];
    
    var man_of_module_body=ids[20];
    
    var man_of_module=ids[21];
    
    var man_of_modtype=ids[22];
    
    var man_of_method=ids[23];
    
    var man_of_info=ids[24];
    
    var man_of_included_module=ids[25];
    
    var man_of_exception=ids[26];
    
    var man_of_custom_text=ids[27];
    
    var man_of_const=ids[28];
    
    var man_of_code=ids[29];
    
    var man_of_class_type_expr=ids[30];
    
    var man_of_class_type=ids[31];
    
    var man_of_class_comment=ids[32];
    
    var man_of_class=ids[33];
    
    var man_of_attribute=ids[34];
    
    var man_of_Target=ids[35];
    
    var generate_for_module_type=ids[36];
    
    var generate_for_module=ids[37];
    
    var generate_for_group=ids[38];
    
    var generate_for_class_type=ids[39];
    
    var generate_for_class=ids[40];
    
    var generate=ids[41];
    
    var file_name=ids[42];
    
    var $$escape=ids[43];
    
    var create_groups=ids[44];
    
    var
     inh=
      CamlinternalOO["inherits"]($$class,shared$2,shared$1,shared$4,info,1);
    
    var obj_init=inh[1];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       file_name,
       function(self$neg2,name)
        {var
          s=
           Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,
                46,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s.%s"],
             name,
             man_suffix[1]);
         
         return Str["global_replace"](self$neg2[re_slash$1],"slash",s);
         },
       $$escape,
       function(self$neg2,s)
        {var len=s["length"];
         
         var b=Buffer["create"](len);
         
         for(var i=0;i<=len-1;i++)
          {var c=s[i];
           
           var exit;
           
           if(c>=47)
            {if(c!=92){exit=98;}else{Buffer["add_string"](b,"\(rs")}}
           else
            {if(c>=39)
              {switch((-39+c)[0])
                {case 0:Buffer["add_string"](b,"\&'");
                 case 1:exit=98;
                 case 2:exit=98;
                 case 3:exit=98;
                 case 4:exit=98;
                 case 5:exit=98;
                 case 6:Buffer["add_string"](b,"\-");
                 case 7:Buffer["add_string"](b,"\&.")
                 }
               }
             else
              {exit=98;}
             }
           
           switch(exit){case 98:Buffer["add_char"](b,c)}
           }
         
         return Buffer["contents"](b);
         },
       open_out,
       function(self$neg2,file)
        {var f=Filename["concat"](Odoc_info["Global"][5][1],file);
         
         return Pervasives["open_out"](f);
         },
       man_of_text2,
       function(self$neg2,b,t)
        {"unknown block:(sendself self-2/1417 man_of_text_element/1364 b/1418)";
         return List["iter"](0,t);
         },
       man_of_text,
       function(self$neg2,b,t)
        {var b2=new_buf(/* () */0);
         
         "unknown block:(sendself self-2/1421 man_of_text2/1361 b2/1424 t/1423)";
         
         var s=Buffer["contents"](b2);
         
         var s2=Str["global_replace"](Str["regexp"]("\n[ ]*"),"\n",s);
         
         return bs(b,Str["global_replace"](Str["regexp"]("\n\n"),"\n",s2));
         },
       remove_newlines,
       function(self$neg2,s)
        {return Str["global_replace"](Str["regexp"]("[ ]*\n[ ]*")," ",s);},
       man_of_text_element,
       function(self$neg2,b,txt)
        {var exit;
         
         if(typeof txt=="number")
          {switch(txt){case 0:return bs(b,"\n.sp\n");case 1:exit=91;}}
         else
          {switch(txt[0])
            {case 0:exit=92;
             case 1:
              bs(b,"\n.B ");
              "unknown block:(sendself self-2/1431 escape/1359 (field 0 txt/1433))";
              return bs
                      (b,
                       Pervasives["^"]
                        (Str["global_replace"](Str["regexp"]("\n"),"\n.B ",0),"\n"));
              
             case 2:
              bs(b,"\n.B ");
              "unknown block:(sendself self-2/1431 escape/1359 (field 0 txt/1433))";
              return bs
                      (b,
                       Pervasives["^"]
                        (Str["global_replace"](Str["regexp"]("\n"),"\n.B ",0),"\n"));
              
             case 3:exit=92;
             case 10:
              List["iter"]
               (function(t)
                 {bs(b,"\n.sp\n \-");
                  "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 t/1459)";
                  
                  return bs(b,"\n");
                  },
                txt[1]);
              return bs(b,"\n");
              
             case 11:
              List["iter"]
               (function(t)
                 {bs(b,"\n.sp\n \-");
                  "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 t/1460)";
                  
                  return bs(b,"\n");
                  },
                txt[1]);
              return bs(b,"\n");
              
             case 12:
              bs(b,"\n.sp\n");
              "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))";
              
              return bs(b,"\n.sp\n");
              
             case 13:
              "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432\n  (makeblock 0\n    (makeblock 1 (apply (field 20 (global Odoc_info!)) (field 2 txt/1433)))\n    0a))";
              
             case 14:exit=91;
             case 15:
              "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 1 txt/1433))";
              
             case 16:
              "unknown block:(sendself self-2/1431 man_of_text_element/1364 b/1432\n  (makeblock 1 (apply (field 37 (global Odoc_info!)) (field 0 txt/1433))))";
              
             case 17:
              bs(b,"^{");
              "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))";
              
             case 18:
              bs(b,"_{");
              "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))";
              
             case 19:exit=91;
             case 20:
              "unknown block:(sendself self-2/1431 man_of_custom_text/1365 b/1432 (field 0 txt/1433)\n  (field 1 txt/1433))";
              
             case 21:
              "unknown block:(sendself self-2/1431 man_of_Target/1366 b/1432 (field 0 txt/1433)\n  (field 1 txt/1433))";
              
             default:
              "unknown block:(sendself self-2/1431 man_of_text2/1361 b/1432 (field 0 txt/1433))";
              }}
         
         switch(exit)
          {case 91:return /* () */0;
           case 92:
            "unknown block:(sendself self-2/1431 escape/1359 (field 0 txt/1433))";
            return bs(b,0);
            
           }
         },
       man_of_custom_text,
       function(self$neg2,b,s,t){return /* () */0;},
       man_of_Target,
       function(self$neg2,b,target,code)
        {if("unknown primitive:caml_string_equal")
          {return bs(b,code);}
         else
          {return /* () */0;}
         },
       man_of_code,
       function(self$neg2,b,s)
        {"unknown block:(sendself self-2/1472 man_of_text/1362 b/1473\n  (makeblock 0 (makeblock 1 s/1474) 0a))";
         },
       relative_idents,
       function(self$neg2,m_name,s)
        {var
          f=
           function(str_t)
            {var match_s=Str["matched_string"](str_t);
             
             return Odoc_info["apply_if_equal"]
                     (Odoc_info["use_hidden_modules"],
                      match_s,
                      Odoc_info["Name"][4](m_name,match_s));
             };
         
         return Str["global_substitute"]
                 (Str["regexp"]
                   ("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)"),
                  f,
                  s);
         },
       man_of_type_expr,
       function(self$neg2,b,m_name,t)
        {var
          s=
           $$String["concat"]
            ("\n",
             Str["split"]
              (Str["regexp"]("\n"),Odoc_print["string_of_type_expr"](t)));
         
         var s2=Str["global_replace"](Str["regexp"]("\n"),"\n.B ",s);
         
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1484 relative_idents/1368 m_name/1486 s2/1489)";
         bs(b,0);
         return bs(b,"\n");
         },
       man_of_class_type_expr,
       function(self$neg2,b,m_name,t)
        {var
          s=
           $$String["concat"]
            ("\n",
             Str["split"]
              (Str["regexp"]("\n"),
               Odoc_print["string_of_class_type"](/* None */0,t)));
         
         var s2=Str["global_replace"](Str["regexp"]("\n"),"\n.B ",s);
         
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1491 relative_idents/1368 m_name/1493 s2/1496)";
         bs(b,0);
         return bs(b,"\n");
         },
       man_of_type_expr_list,
       function(self$neg2,par,b,m_name,sep,l)
        {var s=Odoc_str["string_of_type_list"](par,sep,l);
         
         var s2=Str["global_replace"](Str["regexp"]("\n"),"\n.B ",s);
         
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1498 relative_idents/1368 m_name/1501 s2/1505)";
         bs(b,0);
         return bs(b,"\n");
         },
       man_of_type_expr_param_list,
       function(self$neg2,b,m_name,t)
        {var l=t[3];
         
         if(l)
          {var s=Odoc_str["string_of_type_param_list"](t);
           
           var s2=Str["global_replace"](Str["regexp"]("\n"),"\n.B ",s);
           
           bs(b,"\n.B ");
           "unknown block:(sendself self-2/1507 relative_idents/1368 m_name/1509 s2/1513)";
           bs(b,0);
           return bs(b,"\n");
           }
         else
          {return /* () */0;}
         },
       man_of_module_type,
       function(self$neg2,b,m_name,t)
        {var
          s=
           $$String["concat"]
            ("\n",
             Str["split"]
              (Str["regexp"]("\n"),
               Odoc_print["string_of_module_type"](/* None */0,/* None */0,t)));
         
         var s2=Str["global_replace"](Str["regexp"]("\n"),"\n.B ",s);
         
         bs(b,"\n.B ");
         "unknown block:(sendself self-2/1515 relative_idents/1368 m_name/1517 s2/1520)";
         bs(b,0);
         return bs(b,"\n");
         },
       man_of_value,
       function(self$neg2,b,v)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,"\n.I val ");
         bs(b,Odoc_info["Name"][1](v[1]));
         bs(b," \n: ");
         "unknown block:(sendself self-2/1522 man_of_type_expr/1369 b/1523\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1524))\n  (field 2 v/1524))";
         
         bs(b,".sp\n");
         "unknown block:(sendself self-2/1522 man_of_info/1525 0a b/1523 (field 1 v/1524))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_type_extension,
       function(self$neg2,b,m_name,te)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,".I type ");
         var l=te[3];
         
         if(l)
          {var s=Odoc_str["string_of_type_extension_param_list"](te);
           
           var s2=Str["global_replace"](Str["regexp"]("\n"),"\n.B ",s);
           
           bs(b,"\n.B ");
           "unknown block:(sendself self-2/1527 relative_idents/1368 m_name/1529 s2/1533)";
           bs(b,0);
           bs(b,"\n"),bs(b,".I ")}
         else
          {}
         
         "unknown block:(sendself self-2/1527 relative_idents/1368 m_name/1529 (field 1 te/1530))";
         bs(b,0);
         bs(b," \n");
         bs(b,"+=");
         if(te[4]=/* Private */0){bs(b," private")}else{}
         
         bs(b,"\n ");
         List["iter"]
          (function(x)
            {var father=Odoc_info["Name"][5](x[1]);
             
             bs(b,Pervasives["^"]("| ",Odoc_info["Name"][1](x[1])));
             var match=x[2];
             
             var match$1=x[3];
             
             if(match)
              {if(match$1)
                {bs(b,"\n.B : ");
                 'unknown block:(sendself self-2/1527 man_of_type_expr_list/1371 [0: 0a] b/1528 father/1535\n  " * " match/2132)';
                 
                 bs(b,".B -> ");
                 "unknown block:(sendself self-2/1527 man_of_type_expr/1369 b/1528 father/1535\n  (field 0 match/2133))";
                 }
               else
                {bs(b,"\n.B of ");
                 'unknown block:(sendself self-2/1527 man_of_type_expr_list/1371 [0: 0a] b/1528 father/1535\n  " * " match/2132)';
                 }
               }
             else
              {if(match$1)
                {bs(b,"\n.B : ");
                 "unknown block:(sendself self-2/1527 man_of_type_expr/1369 b/1528 father/1535\n  (field 0 match/2133))";
                 }
               else
                {bs(b,"\n")}
               }
             
             var match$2=x[5];
             
             if(match$2)
              {var xa=match$2[1];
               
               bs(b,".B = ");
               var match$3=xa[2];
               
               bs(b,match$3?match$3[1][1]:xa[1]);
               bs(b,"\n")}
             else
              {}
             
             var match$4=x[7];
             
             if(match$4)
              {bs(b,'.I "  "\n');
               bs(b,"(* ");
               "unknown block:(sendself self-2/1527 man_of_info/1525 0a b/1528\n  (makeblock 0 (field 0 match/2126)))";
               
               return bs(b," *)\n ");
               }
             else
              {return bs(b," ");}
             },
           te[5]);
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1527 man_of_info/1525 0a b/1528 (field 0 te/1530))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_exception,
       function(self$neg2,b,e)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,"\n.I exception ");
         bs(b,Odoc_info["Name"][1](e[1]));
         bs(b," \n");
         var match=e[3];
         
         var match$1=e[4];
         
         if(match)
          {if(match$1)
            {bs(b,".B : ");
             'unknown block:(sendself self-2/1544 man_of_type_expr_list/1371 [0: 0a] b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546)) " * "\n  match/2120)';
             
             bs(b,".B -> ");
             "unknown block:(sendself self-2/1544 man_of_type_expr/1369 b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546))\n  (field 0 match/2121))";
             }
           else
            {bs(b,".B of ");
             'unknown block:(sendself self-2/1544 man_of_type_expr_list/1371 [0: 0a] b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546)) " * "\n  (field 2 e/1546))';
             }
           }
         else
          {if(match$1)
            {bs(b,".B : ");
             "unknown block:(sendself self-2/1544 man_of_type_expr/1369 b/1545\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/1546))\n  (field 0 match/2121))";
             }
           else
            {}
           }
         
         var match$2=e[5];
         
         if(match$2)
          {var ea=match$2[1];
           
           bs(b," = ");
           var match$3=ea[2];
           
           bs(b,match$3?match$3[1][1]:ea[1])}
         else
          {}
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1544 man_of_info/1525 0a b/1545 (field 1 e/1546))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_type,
       function(self$neg2,b,t)
        {Odoc_info["reset_type_names"](/* () */0);
         var father=Odoc_info["Name"][5](t[1]);
         
         var
          field_comment=
           function(param)
            {if(param)
              {bs(b,"  (* ");
               "unknown block:(sendself self-2/1554 man_of_info/1525 0a b/1555\n  (makeblock 0 (field 0 param/2113)))";
               
               return bs(b," *) ");
               }
             else
              {return /* () */0;}
             };
         
         bs(b,".I type ");
         "unknown block:(sendself self-2/1554 man_of_type_expr_param_list/1372 b/1555 father/1557\n  t/1556)";
         
         var match=t[3];
         
         if(match){bs(b,".I ")}else{}
         
         bs(b,Odoc_info["Name"][1](t[1]));
         bs(b," \n");
         var priv=t[5]=/* Private */0;
         
         var match$1=t[6];
         
         if(match$1)
          {var match$2=match$1[1];
           
           switch(match$2)
            {case 0:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2110))";
              
             case 1:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              bs(b,"<"),
              List["iter"]
               (function(r)
                 {bs(b,Pervasives["^"](r[1]," : "));
                  "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 1 r/1563))";
                  
                  bs(b,";");
                  return field_comment(r[3]);
                  },
                match$2[1]),
              bs(b,"\n >\n")
             }
           }
         else
          {}
         
         var match$3=t[4];
         
         if(typeof match$3=="number")
          {switch(match$3){case 0:case 1:bs(b,"= .."),bs(b,"\n")}}
         else
          {switch(match$3[0])
            {case 0:
              bs(b,"=");
              if(priv){bs(b," private")}else{}
              
              bs(b,"\n "),
              List["iter"]
               (function(constr)
                 {bs(b,Pervasives["^"]("| ",constr[1]));
                  var
                   print_text=
                    function(t)
                     {bs(b,"  (* ");
                      "unknown block:(sendself self-2/1554 man_of_info/1525 0a b/1555 (makeblock 0 t/1568))";
                      
                      return bs(b," *)\n ");
                      };
                  
                  var match$4=constr[2];
                  
                  var match$5=constr[4];
                  
                  var match$6=constr[3];
                  
                  if(match$4)
                   {if(match$5)
                     {var t$1=match$5[1];
                      
                      if(match$6)
                       {bs(b,"\n.B of ");
                        'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                        
                        bs(b,".B -> ");
                        "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                        
                        bs(b,'.I "  "\n');
                        return print_text(t$1);
                        }
                      else
                       {bs(b,"\n.B of ");
                        'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                        
                        bs(b,'.I "  "\n');
                        return print_text(t$1);
                        }
                      }
                    else
                     {if(match$6)
                       {bs(b,"\n.B : ");
                        'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                        
                        bs(b,".B -> ");
                        "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                        
                        return bs(b," ");
                        }
                      else
                       {bs(b,"\n.B of ");
                        'unknown block:(sendself self-2/1554 man_of_type_expr_list/1371 [0: 0a] b/1555 father/1557\n  " * " match/2101)';
                        
                        return bs(b," ");
                        }
                      }
                    }
                  else
                   {if(match$5)
                     {var t$2=match$5[1];
                      
                      if(match$6)
                       {bs(b,"\n.B : ");
                        "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                        
                        bs(b,'.I "  "\n');
                        return print_text(t$2);
                        }
                      else
                       {return print_text(t$2);}
                      }
                    else
                     {if(match$6)
                       {bs(b,"\n.B : ");
                        "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 0 match/2103))";
                        
                        return bs(b," ");
                        }
                      else
                       {return bs(b,"\n ");}
                      }
                    }
                  },
                match$3[1]);
             case 1:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              bs(b,"{"),
              List["iter"]
               (function(r)
                 {bs(b,r[2]?"\n\n.B mutable \n":"\n ");
                  bs(b,Pervasives["^"](r[1]," : "));
                  "unknown block:(sendself self-2/1554 man_of_type_expr/1369 b/1555 father/1557\n  (field 2 r/1581))";
                  
                  bs(b,";");
                  return field_comment(r[4]);
                  },
                match$3[1]),
              bs(b,"\n }\n")
             }}
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1554 man_of_info/1525 0a b/1555 (field 1 t/1556))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_attribute,
       function(self$neg2,b,a)
        {bs(b,".I val ");
         if(a[3]){bs(b,"virtual ")}else{}
         
         if(a[2]){bs(b,Pervasives["^"](Odoc_messages["mutab"]," "))}else{}
         
         bs(b,Pervasives["^"](Odoc_info["Name"][1](a[1][1])," : "));
         "unknown block:(sendself self-2/1583 man_of_type_expr/1369 b/1584\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 (field 0 a/1585)))\n  (field 2 (field 0 a/1585)))";
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1583 man_of_info/1525 0a b/1584 (field 1 (field 0 a/1585)))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_method,
       function(self$neg2,b,m)
        {bs(b,".I method ");
         if(m[2]){bs(b,"private ")}else{}
         
         if(m[3]){bs(b,"virtual ")}else{}
         
         bs(b,Pervasives["^"](Odoc_info["Name"][1](m[1][1])," : "));
         "unknown block:(sendself self-2/1587 man_of_type_expr/1369 b/1588\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 (field 0 m/1589)))\n  (field 2 (field 0 m/1589)))";
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1587 man_of_info/1525 0a b/1588 (field 1 (field 0 m/1589)))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_parameter_list,
       function(self$neg2,b,m_name,l)
        {if(l)
          {bs(b,"\n.B ");
           bs(b,Odoc_messages["parameters"]);
           bs(b,": \n");
           List["iter"]
            (function(p)
              {bs(b,".sp\n");
               bs(b,'"');
               bs(b,Odoc_info["Parameter"][1](p));
               bs(b,'"\n');
               "unknown block:(sendself self-2/1591 man_of_type_expr/1369 b/1592 m_name/1593\n  (apply (field 1 (field 3 (global Odoc_info!))) p/1595))";
               
               bs(b,"\n");
               "unknown block:(sendself self-2/1591 man_of_parameter_description/1381 b/1592 p/1595)";
               
               return bs(b,"\n");
               },
             l);
           return bs(b,"\n");
           }
         else
          {return /* () */0;}
         },
       man_of_parameter_description,
       function(self$neg2,b,p)
        {var l=Odoc_info["Parameter"][3](p);
         
         if(l)
          {if(l[2])
            {return List["iter"]
                     (function(n)
                       {var match=Odoc_info["Parameter"][4](p,n);
                        
                        if(match)
                         {'unknown block:(sendself self-2/1597 man_of_code/1367 b/1598\n  (apply (field 15 (global Pervasives!)) n/1603 " : "))';
                          
                          "unknown block:(sendself self-2/1597 man_of_text/1362 b/1598 (field 0 match/2092))";
                          }
                        else
                         {return /* () */0;}
                        },
                      l);
             }
           else
            {var match=Odoc_info["Parameter"][4](p,l[1]);
             
             if(match)
              {bs(b,"\n ");
               "unknown block:(sendself self-2/1597 man_of_text/1362 b/1598 (field 0 match/2090))";
               }
             else
              {return /* () */0;}
             }
           }
         else
          {return /* () */0;}
         },
       man_of_module_parameter_list,
       function(self$neg2,b,m_name,l)
        {if(l)
          {bs(b,'.B "');
           bs(b,Odoc_messages["parameters"]);
           bs(b,':"\n');
           List["iter"]
            (function(param)
              {var desc_opt=param[2];
               
               var p=param[1];
               
               bs(b,".sp\n");
               bs(b,Pervasives["^"]('"',Pervasives["^"](p[1],'"\n')));
               "unknown block:(sendself self-2/1606 man_of_module_type/1373 b/1607 m_name/1608)";
               Misc["may"](0,p[2]);
               bs(b,"\n");
               if(desc_opt)
                {"unknown block:(sendself self-2/1606 man_of_text/1362 b/1607 (field 0 desc_opt/1611))";
                 }
               else
                {}
               
               return bs(b,"\n");
               },
             l);
           return bs(b,"\n\n");
           }
         else
          {return /* () */0;}
         },
       man_of_class,
       function(self$neg2,b,c)
        {Odoc_info["reset_type_names"](/* () */0);
         var father=Odoc_info["Name"][5](c[1]);
         
         bs(b,".I class ");
         if(c[5]){bs(b,"virtual ")}else{}
         
         var l=c[4];
         
         if(l)
          {bs(b,Odoc_str["string_of_class_type_param_list"](l)),bs(b," ")}
         else
          {}
         
         bs(b,Odoc_info["Name"][1](c[1]));
         bs(b," : ");
         "unknown block:(sendself self-2/1614 man_of_class_type_expr/1370 b/1615 father/1617\n  (field 2 c/1616))";
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1614 man_of_info/1525 0a b/1615 (field 1 c/1616))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_class_type,
       function(self$neg2,b,ct)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,".I class type ");
         if(ct[5]){bs(b,"virtual ")}else{}
         
         var l=ct[4];
         
         if(l)
          {bs(b,Odoc_str["string_of_class_type_param_list"](l)),bs(b," ")}
         else
          {}
         
         bs(b,Odoc_info["Name"][1](ct[1]));
         bs(b," = ");
         "unknown block:(sendself self-2/1620 man_of_class_type_expr/1370 b/1621\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 ct/1622))\n  (field 2 ct/1622))";
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1620 man_of_info/1525 0a b/1621 (field 1 ct/1622))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_module,
       function(self$neg2,b,m)
        {bs(b,".I module ");
         bs(b,Odoc_info["Name"][1](m[1]));
         bs(b," : ");
         "unknown block:(sendself self-2/1625 man_of_module_type/1373 b/1626\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1627))\n  (field 1 m/1627))";
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1625 man_of_info/1525 0a b/1626 (field 2 m/1627))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_modtype,
       function(self$neg2,b,mt)
        {bs(b,".I module type ");
         bs(b,Odoc_info["Name"][1](mt[1]));
         bs(b," = ");
         var match=mt[3];
         
         if(match)
          {"unknown block:(sendself self-2/1629 man_of_module_type/1373 b/1630\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/1631))\n  (field 0 match/2077))";
           }
         else
          {}
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1629 man_of_info/1525 0a b/1630 (field 1 mt/1631))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_module_comment,
       function(self$neg2,b,text)
        {bs(b,"\n.PP\n");
         'unknown block:(sendself self-2/1634 man_of_text/1362 b/1635\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) "=== "\n        (apply (field 15 (global Pervasives!))\n          (apply (field 5 (global Odoc_misc!)) text/1636) " ===")))\n    0a))';
         
         return bs(b,"\n.PP\n");
         },
       man_of_class_comment,
       function(self$neg2,b,text)
        {bs(b,"\n.PP\n");
         'unknown block:(sendself self-2/1638 man_of_text/1362 b/1639\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) "=== "\n        (apply (field 15 (global Pervasives!))\n          (apply (field 5 (global Odoc_misc!)) text/1640) " ===")))\n    0a))';
         
         return bs(b,"\n.PP\n");
         },
       man_of_recfield,
       function(self$neg2,b,modname,f)
        {bs(b,".I ");
         if(f[2]){bs(b,Pervasives["^"](Odoc_messages["mutab"]," "))}else{}
         
         bs(b,Pervasives["^"](f[1]," : "));
         "unknown block:(sendself self-2/1642 man_of_type_expr/1369 b/1643 modname/1644\n  (field 2 f/1645))";
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1642 man_of_info/1525 0a b/1643 (field 3 f/1645))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_const,
       function(self$neg2,b,modname,c)
        {bs(b,".I ");
         bs(b,Pervasives["^"](c[1]," "));
         var match=c[2];
         
         if(match)
          {bs(b,"of ");
           "unknown block:(sendself self-2/1647 man_of_type_expr/1369 b/1648 modname/1649\n  (field 0 match/2071))";
           
           List["iter"]
            (function(ty)
              {bs(b," * ");
               "unknown block:(sendself self-2/1647 man_of_type_expr/1369 b/1648 modname/1649 ty/1653)";
               },
             match[2])}
         else
          {}
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1647 man_of_info/1525 0a b/1648 (field 3 c/1650))";
         
         return bs(b,"\n.sp\n");
         },
       man_of_included_module,
       function(self$neg2,b,m_name,im)
        {bs(b,".I include ");
         var match=im[2];
         
         if(match)
          {var name=match[1][1][1];
           
           "unknown block:(sendself self-2/1655 relative_idents/1368 m_name/1657 name/1660)";
           bs(b,0)}
         else
          {bs(b,im[1])}
         
         bs(b,"\n.sp\n");
         "unknown block:(sendself self-2/1655 man_of_info/1525 0a b/1656 (field 2 im/1658))";
         
         return bs(b,"\n.sp\n");
         },
       generate_for_class,
       function(self$neg2,cl)
        {Odoc_info["reset_type_names"](/* () */0);
         var date=Unix["time"](/* () */0);
         
         "unknown block:(sendself self-2/1664 file_name/1358 (field 0 cl/1665))";
         
         try
          {"unknown block:(sendself self-2/1664 open_out/1360 file/1667)";
           
           var b=new_buf(/* () */0);
           
           bs(b,Pervasives["^"]('.TH "',Pervasives["^"](cl[1],'" ')));
           bs(b,man_section[1]);
           bs
            (b,
             Pervasives["^"]
              (" ",
               Pervasives["^"]
                (Odoc_misc["string_of_date"]([/* Some */0,/* false */0],date),
                 " ")));
           bs(b,"OCamldoc ");
           var match=Odoc_info["Global"][6][1];
           
           bs(b,Pervasives["^"]('"',Pervasives["^"](match?match[1]:"",'"\n')));
           var match$1=cl[2];
           
           var exit;
           
           if(match$1)
            {var match$2=match$1[1][1];
             
             if(match$2)
              {var
                s=
                 Odoc_info["string_of_text"]
                  (Odoc_info["first_sentence_of_text"](match$2[1]));
               
               "unknown block:(sendself self-2/1664 remove_newlines/1363 s/1673)";
               }
             else
              {exit=51;}
             }
           else
            {exit=51;}
           
           switch(exit){case 51:var $$abstract="no description";}
           
           bs(b,".SH NAME\n");
           bs
            (b,
             Pervasives["^"]
              (cl[1],Pervasives["^"](" \- ",Pervasives["^"]($$abstract,"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["clas"],"\n")));
           bs
            (b,
             Pervasives["^"]
              (Odoc_messages["clas"],
               Pervasives["^"]("   ",Pervasives["^"](cl[1],"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["documentation"],"\n")));
           bs(b,".sp\n");
           "unknown block:(sendself self-2/1664 man_of_class/1383 b/1669 cl/1665)";
           
           'unknown block:(sendself self-2/1664 man_of_parameter_list/1380 b/1669 "" (field 6 cl/1665))';
           
           bs(b,"\n.sp\n.sp\n");
           List["iter"]
            (function(element)
              {switch(element)
                {case 0:
                  "unknown block:(sendself self-2/1664 man_of_attribute/1378 b/1669 (field 0 element/1674))";
                  
                 case 1:
                  "unknown block:(sendself self-2/1664 man_of_method/1379 b/1669 (field 0 element/1674))";
                  
                 case 2:
                  "unknown block:(sendself self-2/1664 man_of_class_comment/1388 b/1669\n  (field 0 element/1674))";
                  
                 }
               },
             Odoc_info["Class"][1](/* None */0,cl));
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error)
            {Odoc_info["errors"][0]++;
             return Pervasives["prerr_endline"](exn[2]);
             }
           else
            {throw exn;}
           }
         },
       generate_for_class_type,
       function(self$neg2,ct)
        {Odoc_info["reset_type_names"](/* () */0);
         var date=Unix["time"](/* () */0);
         
         "unknown block:(sendself self-2/1680 file_name/1358 (field 0 ct/1681))";
         
         try
          {"unknown block:(sendself self-2/1680 open_out/1360 file/1683)";
           
           var b=new_buf(/* () */0);
           
           bs(b,Pervasives["^"]('.TH "',Pervasives["^"](ct[1],'" ')));
           bs(b,man_section[1]);
           bs
            (b,
             Pervasives["^"]
              (" ",
               Pervasives["^"]
                (Odoc_misc["string_of_date"]([/* Some */0,/* false */0],date),
                 " ")));
           bs(b,"OCamldoc ");
           var match=Odoc_info["Global"][6][1];
           
           bs(b,Pervasives["^"]('"',Pervasives["^"](match?match[1]:"",'"\n')));
           var match$1=ct[2];
           
           var exit;
           
           if(match$1)
            {var match$2=match$1[1][1];
             
             if(match$2)
              {var
                s=
                 Odoc_info["string_of_text"]
                  (Odoc_info["first_sentence_of_text"](match$2[1]));
               
               "unknown block:(sendself self-2/1680 remove_newlines/1363 s/1689)";
               }
             else
              {exit=43;}
             }
           else
            {exit=43;}
           
           switch(exit){case 43:var $$abstract="no description";}
           
           bs(b,".SH NAME\n");
           bs
            (b,
             Pervasives["^"]
              (ct[1],Pervasives["^"](" \- ",Pervasives["^"]($$abstract,"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["class_type"],"\n")));
           bs
            (b,
             Pervasives["^"]
              (Odoc_messages["class_type"],
               Pervasives["^"]("   ",Pervasives["^"](ct[1],"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["documentation"],"\n")));
           bs(b,".sp\n");
           "unknown block:(sendself self-2/1680 man_of_class_type/1384 b/1685 ct/1681)";
           
           bs(b,"\n.sp\n.sp\n");
           List["iter"]
            (function(element)
              {switch(element)
                {case 0:
                  "unknown block:(sendself self-2/1680 man_of_attribute/1378 b/1685 (field 0 element/1690))";
                  
                 case 1:
                  "unknown block:(sendself self-2/1680 man_of_method/1379 b/1685 (field 0 element/1690))";
                  
                 case 2:
                  "unknown block:(sendself self-2/1680 man_of_class_comment/1388 b/1685\n  (field 0 element/1690))";
                  
                 }
               },
             Odoc_info["Class"][6](/* None */0,ct));
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error)
            {Odoc_info["errors"][0]++;
             return Pervasives["prerr_endline"](exn[2]);
             }
           else
            {throw exn;}
           }
         },
       man_of_module_type_body,
       function(self$neg2,b,mt)
        {"unknown block:(sendself self-2/1696 man_of_info/1525 0a b/1697 (field 1 mt/1698))";
         
         bs(b,"\n.sp\n");
         'unknown block:(sendself self-2/1696 man_of_module_parameter_list/1382 b/1697 ""\n  (apply (field 29 (field 9 (global Odoc_info!))) 0a mt/1698))';
         
         bs(b,"\n.sp\n.sp\n");
         return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-2/1696 man_of_module/1385 b/1697 (field 0 ele/1699))";
                       
                      case 1:
                       "unknown block:(sendself self-2/1696 man_of_modtype/1386 b/1697 (field 0 ele/1699))";
                       
                      case 2:
                       "unknown block:(sendself self-2/1696 man_of_included_module/1391 b/1697 (field 0 mt/1698)\n  (field 0 ele/1699))";
                       
                      case 3:
                       "unknown block:(sendself self-2/1696 man_of_class/1383 b/1697 (field 0 ele/1699))";
                       
                      case 4:
                       "unknown block:(sendself self-2/1696 man_of_class_type/1384 b/1697 (field 0 ele/1699))";
                       
                      case 5:
                       "unknown block:(sendself self-2/1696 man_of_value/1374 b/1697 (field 0 ele/1699))";
                       
                      case 6:
                       "unknown block:(sendself self-2/1696 man_of_type_extension/1375 b/1697 (field 0 mt/1698)\n  (field 0 ele/1699))";
                       
                      case 7:
                       "unknown block:(sendself self-2/1696 man_of_exception/1376 b/1697 (field 0 ele/1699))";
                       
                      case 8:
                       "unknown block:(sendself self-2/1696 man_of_type/1377 b/1697 (field 0 ele/1699))";
                       
                      case 9:
                       "unknown block:(sendself self-2/1696 man_of_module_comment/1387 b/1697 (field 0 ele/1699))";
                       
                      }
                    },
                  Odoc_info["Module"][17](/* None */0,mt));
         },
       generate_for_module_type,
       function(self$neg2,mt)
        {var date=Unix["time"](/* () */0);
         
         "unknown block:(sendself self-2/1711 file_name/1358 (field 0 mt/1712))";
         
         try
          {"unknown block:(sendself self-2/1711 open_out/1360 file/1714)";
           
           var b=new_buf(/* () */0);
           
           bs(b,Pervasives["^"]('.TH "',Pervasives["^"](mt[1],'" ')));
           bs(b,man_section[1]);
           bs
            (b,
             Pervasives["^"]
              (" ",
               Pervasives["^"]
                (Odoc_misc["string_of_date"]([/* Some */0,/* false */0],date),
                 " ")));
           bs(b,"OCamldoc ");
           var match=Odoc_info["Global"][6][1];
           
           bs(b,Pervasives["^"]('"',Pervasives["^"](match?match[1]:"",'"\n')));
           var match$1=mt[2];
           
           var exit;
           
           if(match$1)
            {var match$2=match$1[1][1];
             
             if(match$2)
              {var
                s=
                 Odoc_info["string_of_text"]
                  (Odoc_info["first_sentence_of_text"](match$2[1]));
               
               "unknown block:(sendself self-2/1711 remove_newlines/1363 s/1720)";
               }
             else
              {exit=35;}
             }
           else
            {exit=35;}
           
           switch(exit){case 35:var $$abstract="no description";}
           
           bs(b,".SH NAME\n");
           bs
            (b,
             Pervasives["^"]
              (mt[1],Pervasives["^"](" \- ",Pervasives["^"]($$abstract,"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["module_type"],"\n")));
           bs
            (b,
             Pervasives["^"]
              (Odoc_messages["module_type"],
               Pervasives["^"]("   ",Pervasives["^"](mt[1],"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["documentation"],"\n")));
           bs(b,".sp\n");
           bs(b,Pervasives["^"](Odoc_messages["module_type"],"\n"));
           bs
            (b,
             Pervasives["^"]
              ('.BI "',Pervasives["^"](Odoc_info["Name"][1](mt[1]),'"\n')));
           bs(b," = ");
           var match$3=mt[3];
           
           if(match$3)
            {"unknown block:(sendself self-2/1711 man_of_module_type/1373 b/1716\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/1712))\n  (field 0 match/1976))";
             }
           else
            {}
           
           bs(b,"\n.sp\n");
           "unknown block:(sendself self-2/1711 man_of_module_type_body/1394 b/1716 mt/1712)";
           
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error)
            {Odoc_info["errors"][0]++;
             return Pervasives["prerr_endline"](exn[2]);
             }
           else
            {throw exn;}
           }
         },
       man_of_module_body,
       function(self$neg2,b,m)
        {"unknown block:(sendself self-2/1724 man_of_info/1525 0a b/1725 (field 2 m/1726))";
         
         bs(b,"\n.sp\n");
         'unknown block:(sendself self-2/1724 man_of_module_parameter_list/1382 b/1725 ""\n  (apply (field 14 (field 9 (global Odoc_info!))) 0a m/1726))';
         
         bs(b,"\n.sp\n.sp\n");
         return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-2/1724 man_of_module/1385 b/1725 (field 0 ele/1727))";
                       
                      case 1:
                       "unknown block:(sendself self-2/1724 man_of_modtype/1386 b/1725 (field 0 ele/1727))";
                       
                      case 2:
                       "unknown block:(sendself self-2/1724 man_of_included_module/1391 b/1725 (field 0 m/1726)\n  (field 0 ele/1727))";
                       
                      case 3:
                       "unknown block:(sendself self-2/1724 man_of_class/1383 b/1725 (field 0 ele/1727))";
                       
                      case 4:
                       "unknown block:(sendself self-2/1724 man_of_class_type/1384 b/1725 (field 0 ele/1727))";
                       
                      case 5:
                       "unknown block:(sendself self-2/1724 man_of_value/1374 b/1725 (field 0 ele/1727))";
                       
                      case 6:
                       "unknown block:(sendself self-2/1724 man_of_type_extension/1375 b/1725 (field 0 m/1726)\n  (field 0 ele/1727))";
                       
                      case 7:
                       "unknown block:(sendself self-2/1724 man_of_exception/1376 b/1725 (field 0 ele/1727))";
                       
                      case 8:
                       "unknown block:(sendself self-2/1724 man_of_type/1377 b/1725 (field 0 ele/1727))";
                       
                      case 9:
                       "unknown block:(sendself self-2/1724 man_of_module_comment/1387 b/1725 (field 0 ele/1727))";
                       
                      }
                    },
                  Odoc_info["Module"][1](/* None */0,m));
         },
       generate_for_module,
       function(self$neg2,m)
        {var date=Unix["time"](/* () */0);
         
         "unknown block:(sendself self-2/1739 file_name/1358 (field 0 m/1740))";
         
         try
          {"unknown block:(sendself self-2/1739 open_out/1360 file/1742)";
           
           var b=new_buf(/* () */0);
           
           bs(b,Pervasives["^"]('.TH "',Pervasives["^"](m[1],'" ')));
           bs(b,man_section[1]);
           bs
            (b,
             Pervasives["^"]
              (" ",
               Pervasives["^"]
                (Odoc_misc["string_of_date"]([/* Some */0,/* false */0],date),
                 " ")));
           bs(b,"OCamldoc ");
           var match=Odoc_info["Global"][6][1];
           
           bs(b,Pervasives["^"]('"',Pervasives["^"](match?match[1]:"",'"\n')));
           var match$1=m[3];
           
           var exit;
           
           if(match$1)
            {var match$2=match$1[1][1];
             
             if(match$2)
              {var
                s=
                 Odoc_info["string_of_text"]
                  (Odoc_info["first_sentence_of_text"](match$2[1]));
               
               "unknown block:(sendself self-2/1739 remove_newlines/1363 s/1748)";
               }
             else
              {exit=27;}
             }
           else
            {exit=27;}
           
           switch(exit){case 27:var $$abstract="no description";}
           
           bs(b,".SH NAME\n");
           bs
            (b,
             Pervasives["^"]
              (m[1],Pervasives["^"](" \- ",Pervasives["^"]($$abstract,"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["modul"],"\n")));
           bs
            (b,
             Pervasives["^"]
              (Odoc_messages["modul"],
               Pervasives["^"]("   ",Pervasives["^"](m[1],"\n"))));
           bs
            (b,
             Pervasives["^"]
              (".SH ",Pervasives["^"](Odoc_messages["documentation"],"\n")));
           bs(b,".sp\n");
           bs(b,Pervasives["^"](Odoc_messages["modul"],"\n"));
           bs
            (b,
             Pervasives["^"]
              ('.BI "',Pervasives["^"](Odoc_info["Name"][1](m[1]),'"\n')));
           bs(b," : ");
           "unknown block:(sendself self-2/1739 man_of_module_type/1373 b/1744\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1740))\n  (field 1 m/1740))";
           
           bs(b,"\n.sp\n");
           "unknown block:(sendself self-2/1739 man_of_module_body/1396 b/1744 m/1740)";
           
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       create_groups,
       function(self$neg2,mini,module_list)
        {var
          name=
           function(res_ele)
            {var exit;
             
             switch(res_ele)
              {case 4:exit=21;
               case 5:exit=21;
               case 6:exit=21;
               case 7:exit=21;
               case 8:exit=22;
               case 9:exit=22;
               case 10:throw [0,Assert_failure,[0,"odoc_man.ml",1147,27]];
               case 11:exit=23;
               case 12:exit=23;
               default:return res_ele[1][1];}
             
             switch(exit)
              {case 21:return Odoc_info["Name"][1](res_ele[1][1]);
               case 22:return Odoc_info["Name"][1](res_ele[1][1][1]);
               case 23:return res_ele[2][1];
               }
             };
         
         var
          all_items_pre=
           Odoc_info["Search"][1](module_list,Str["regexp"](".*"));
         
         var
          all_items=
           List["filter"]
            (function(r)
              {var exit;
               
               switch(r)
                {case 0:exit=16;
                 case 1:exit=16;
                 case 2:exit=16;
                 case 3:exit=16;
                 case 10:return /* false */0;
                 default:return !mini;}
               
               switch(exit){case 16:return /* true */1;}
               },
             all_items_pre);
         
         var
          sorted_items=
           List["sort"]
            (function(e1,e2){return "unknown primitive:caml_string_compare";},
             all_items);
         
         var
          f=
           function(acc1,acc2,l)
            {if(l)
              {var q=l[2];
               
               var h=l[1];
               
               if(acc2)
                {if("unknown primitive:caml_string_equal")
                  {if(List["mem"](h,acc2))
                    {return f(acc1,acc2,q);}
                   else
                    {return f
                             (acc1,Pervasives["@"](acc2,/* :: */[0,h,/* [] */0]),q);
                     }
                   }
                 else
                  {return f(/* :: */[0,acc2,acc1],/* :: */[0,h,/* [] */0],q);}
                 }
               else
                {return f(acc1,/* :: */[0,h,/* [] */0],q);}
               }
             else
              {return /* :: */[0,acc2,acc1];}
             };
         
         return f(/* [] */0,/* [] */0,sorted_items);
         },
       generate_for_group,
       function(self$neg2,l)
        {var match=List["hd"](l);
         
         var exit;
         
         var $js;
         switch(match)
          {case 8:exit=12;
           case 9:exit=12;
           case 10:$js=match[1];
           case 11:exit=13;
           case 12:exit=13;
           default:$js=match[1][1];}
         
         var $js$1;
         switch(exit){case 12:$js$1=match[1][1][1];case 13:$js$1=match[2][1];}
         var name=Odoc_info["Name"][1]($js$1);
         
         var date=Unix["time"](/* () */0);
         
         "unknown block:(sendself self-2/1797 file_name/1358 name/1799)";
         
         try
          {"unknown block:(sendself self-2/1797 open_out/1360 file/1814)";
           
           var b=new_buf(/* () */0);
           
           bs(b,Pervasives["^"]('.TH "',Pervasives["^"](name,'" ')));
           bs(b,man_section[1]);
           bs
            (b,
             Pervasives["^"]
              (" ",
               Pervasives["^"]
                (Odoc_misc["string_of_date"]([/* Some */0,/* false */0],date),
                 " ")));
           bs(b,"OCamldoc ");
           var match$1=Odoc_info["Global"][6][1];
           
           bs
            (b,
             Pervasives["^"]('"',Pervasives["^"](match$1?match$1[1]:"",'"\n')));
           bs(b,".SH NAME\n");
           bs
            (b,
             Pervasives["^"]
              (name,
               Pervasives["^"]
                (" \- all ",Pervasives["^"](name," elements\n\n"))));
           var
            f=
             function(ele)
              {switch(ele)
                {case 0:
                  var m=ele[1];
                  
                  if("unknown primitive:caml_string_notequal")
                   {bs
                     (b,
                      Pervasives["^"]
                       ("\n.SH ",
                        Pervasives["^"]
                         (Odoc_messages["modul"],
                          Pervasives["^"]
                           (" ",Pervasives["^"](Odoc_info["Name"][5](m[1]),"\n")))));
                    bs(b,Pervasives["^"](Odoc_messages["modul"],"\n"));
                    bs
                     (b,
                      Pervasives["^"]
                       ('.BI "',Pervasives["^"](Odoc_info["Name"][1](m[1]),'"\n')));
                    bs(b," : ");
                    "unknown block:(sendself self-2/1797 man_of_module_type/1373 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1832))\n  (field 1 m/1832))";
                    }
                  else
                   {bs
                     (b,
                      Pervasives["^"]
                       ("\n.SH ",
                        Pervasives["^"]
                         (Odoc_messages["modul"],
                          Pervasives["^"](" ",Pervasives["^"](m[1],"\n")))));
                    bs(b," : ");
                    "unknown block:(sendself self-2/1797 man_of_module_type/1373 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 m/1832))\n  (field 1 m/1832))";
                    }
                  
                  bs(b,"\n.sp\n");
                  "unknown block:(sendself self-2/1797 man_of_module_body/1396 b/1816 m/1832)";
                  
                 case 1:
                  var mt=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](mt[1]),"\n")))));
                  bs(b,Pervasives["^"](Odoc_messages["module_type"],"\n"));
                  bs
                   (b,
                    Pervasives["^"]
                     ('.BI "',Pervasives["^"](Odoc_info["Name"][1](mt[1]),'"\n')));
                  bs(b," = ");
                  var match$2=mt[3];
                  
                  if(match$2)
                   {"unknown block:(sendself self-2/1797 man_of_module_type/1373 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/1833))\n  (field 0 match/1905))";
                    }
                  else
                   {}
                  
                  bs(b,"\n.sp\n");
                  "unknown block:(sendself self-2/1797 man_of_module_type_body/1394 b/1816 mt/1833)";
                  
                 case 2:
                  var c=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](c[1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_class/1383 b/1816 c/1826)";
                  
                 case 3:
                  var ct=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](ct[1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_class_type/1384 b/1816 ct/1827)";
                  
                 case 4:
                  var v=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](v[1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_value/1374 b/1816 v/1820)";
                  
                 case 5:
                  var t=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](t[1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_type/1377 b/1816 t/1821)";
                  
                 case 6:
                  var x=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](x[1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_type_extension/1375 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 x/1822))\n  (field 3 x/1822))";
                  
                 case 7:
                  var e=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["modul"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](e[1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_exception/1376 b/1816 e/1823)";
                  
                 case 8:
                  var a=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["clas"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](a[1][1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_attribute/1378 b/1816 a/1824)";
                  
                 case 9:
                  var m$1=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]
                     ("\n.SH ",
                      Pervasives["^"]
                       (Odoc_messages["clas"],
                        Pervasives["^"]
                         (" ",Pervasives["^"](Odoc_info["Name"][5](m$1[1][1]),"\n")))));
                  "unknown block:(sendself self-2/1797 man_of_method/1379 b/1816 m/1825)";
                  
                 case 10:return /* () */0;
                 case 11:
                  var ty=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]("\n.SH Type ",Pervasives["^"](ty[1],"\n")));
                  "unknown block:(sendself self-2/1797 man_of_recfield/1389 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 ty/1828))\n  (field 1 ele/1819))";
                  
                 case 12:
                  var ty$1=ele[1];
                  
                  bs
                   (b,
                    Pervasives["^"]("\n.SH Type ",Pervasives["^"](ty$1[1],"\n")));
                  "unknown block:(sendself self-2/1797 man_of_const/1390 b/1816\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 ty/1830))\n  (field 1 ele/1819))";
                  
                 }
               };
           
           List["iter"](f,l);
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error)
            {Odoc_info["errors"][0]++;
             return Pervasives["prerr_endline"](exn[2]);
             }
           else
            {throw exn;}
           }
         },
       generate,
       function(self$neg2,module_list)
        {var
          sorted_module_list=
           List["sort"]
            (function(m1,m2){return "unknown primitive:caml_string_compare";},
             module_list);
         
         "unknown block:(sendself self-2/1837 create_groups/1398 (field 0 man_mini/1235)\n  sorted_module_list/1839)";
         
         var
          f=
           function(group)
            {var exit;
             
             if(group)
              {var match=group[1];
               
               switch(match)
                {case 0:
                  if(group[2])
                   {exit=1;}
                  else
                   {"unknown block:(sendself self-2/1837 generate_for_module/1397 (field 0 match/1889))";
                    }
                  
                 case 1:
                  if(group[2])
                   {exit=1;}
                  else
                   {"unknown block:(sendself self-2/1837 generate_for_module_type/1395 (field 0 match/1889))";
                    }
                  
                 case 2:
                  if(group[2])
                   {exit=1;}
                  else
                   {"unknown block:(sendself self-2/1837 generate_for_class/1392 (field 0 match/1889))";
                    }
                  
                 case 3:
                  if(group[2])
                   {exit=1;}
                  else
                   {"unknown block:(sendself self-2/1837 generate_for_class_type/1393 (field 0 match/1889))";
                    }
                  
                 default:exit=1;}
               }
             else
              {return /* () */0;}
             
             switch(exit)
              {case 1:
                "unknown block:(sendself self-2/1837 generate_for_group/1399 group/1844)";
                
               }
             };
         
         return List["iter"](f,groups);
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[re_slash$1]=re_slash,0,obj_init($$self$1);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 man=
  CamlinternalOO["make_class"]
   ([0,
     "man_of_Target",
     "man_of_value",
     "man_of_module",
     "generate_for_class_type",
     "man_of_exception",
     "str_man_of_before",
     "man_of_recfield",
     "relative_idents",
     "man_of_type_expr_list",
     "man_of_module_parameter_list",
     "str_man_of_see",
     "man_of_parameter_description",
     "man_of_module_type_body",
     "generate",
     "generate_for_module",
     "escape",
     "man_of_class",
     "man_of_code",
     "man_of_const",
     "man_of_info",
     "man_of_class_comment",
     "man_of_type_expr_param_list",
     "man_of_text",
     "man_of_type",
     "man_of_type_extension",
     "file_name",
     "remove_newlines",
     "man_of_custom_text",
     "man_of_class_type",
     "str_man_of_custom",
     "man_of_class_type_expr",
     "man_of_text_element",
     "open_out",
     "str_man_of_return_opt",
     "man_of_attribute",
     "generate_for_group",
     "str_man_of_version_opt",
     "str_man_of_sees",
     "str_man_of_text",
     "man_of_modtype",
     "str_man_of_raised_exceptions",
     "man_of_parameter_list",
     "man_of_method",
     "man_of_included_module",
     "man_of_module_body",
     "man_of_module_type",
     "create_groups",
     "str_man_of_since_opt",
     "man_of_module_comment",
     "man_of_type_expr",
     "generate_for_class",
     "generate_for_module_type",
     "str_man_of_author_list"],
    man_init);

var Generator=[0,man];

module["exports"]=
{"man_suffix":man_suffix,
 "man_section":man_section,
 "man_mini":man_mini,
 "new_buf":new_buf,
 "bp":bp,
 "bs":bs,
 "linebreak":linebreak,
 "info":info,
 "Generator":Generator};

