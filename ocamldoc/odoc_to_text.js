// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var CamlinternalOO=require("./camlinternalOO.js");
var Odoc_info=require("./odoc_info.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var Str=require("./str.js");
var Odoc_messages=require("./odoc_messages.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 shared=
  [0,
   "text_of_author_list",
   "text_of_before",
   "text_of_custom",
   "text_of_info",
   "text_of_raised_exceptions",
   "text_of_return_opt",
   "text_of_see",
   "text_of_sees",
   "text_of_since_opt",
   "text_of_version_opt"];

var
 shared$1=
  [0,
   "text_of_value",
   "text_of_type_expr_list",
   "text_of_type_expr",
   "text_of_short_type_expr",
   "text_of_parameter_list",
   "text_of_parameter_description",
   "text_of_module_type_kind",
   "text_of_module_type",
   "text_of_module_parameter_list",
   "text_of_module_kind",
   "text_of_method",
   "text_of_info",
   "text_of_exception",
   "text_of_class_type_param_expr_list",
   "text_of_class_type_kind",
   "text_of_class_params",
   "text_of_class_kind",
   "text_of_attribute",
   "relative_module_idents",
   "relative_idents",
   "normal_type_list",
   "normal_type",
   "normal_module_type",
   "normal_class_type_param_list",
   "normal_class_type",
   "normal_class_params",
   "label"];

var
 shared$2=
  [0,
   "text_of_version_opt",
   "text_of_since_opt",
   "text_of_sees",
   "text_of_see",
   "text_of_return_opt",
   "text_of_raised_exceptions",
   "text_of_info",
   "text_of_custom",
   "text_of_before",
   "text_of_author_list"];

var shared$3=[0,"tag_functions"];

var
 info=
  [0,
   0,
   function($$class)
    {var
      ids=
       CamlinternalOO["new_methods_variables"]($$class,shared$2,shared$3);
     
     var text_of_version_opt=ids[1];
     
     var text_of_since_opt=ids[2];
     
     var text_of_sees=ids[3];
     
     var text_of_see=ids[4];
     
     var text_of_return_opt=ids[5];
     
     var text_of_raised_exceptions=ids[6];
     
     var text_of_info=ids[7];
     
     var text_of_custom=ids[8];
     
     var text_of_before=ids[9];
     
     var text_of_author_list=ids[10];
     
     var tag_functions=ids[11];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        text_of_author_list,
        function(self$neg1,l)
         {if(l)
           {return /* :: */[0,
                    /* Bold */[4,
                     /* :: */[0,
                      /* Raw */[0,Pervasives["^"](Odoc_messages["authors"],": ")],
                      /* [] */0]],
                    /* :: */[0,
                     /* Raw */[0,$$String["concat"](", ",l)],
                     [/* :: */0,/* Newline */0,/* [] */0]]];
            }
          else
           {return /* [] */0;}
          },
        text_of_version_opt,
        function(self$neg1,v_opt)
         {if(v_opt)
           {return /* :: */[0,
                    /* Bold */[4,
                     /* :: */[0,
                      /* Raw */[0,Pervasives["^"](Odoc_messages["version"],": ")],
                      /* [] */0]],
                    /* :: */[0,
                     /* Raw */[0,v_opt[1]],
                     [/* :: */0,/* Newline */0,/* [] */0]]];
            }
          else
           {return /* [] */0;}
          },
        text_of_since_opt,
        function(self$neg1,s_opt)
         {if(s_opt)
           {return /* :: */[0,
                    /* Bold */[4,
                     /* :: */[0,
                      /* Raw */[0,Pervasives["^"](Odoc_messages["since"],": ")],
                      /* [] */0]],
                    /* :: */[0,
                     /* Raw */[0,s_opt[1]],
                     [/* :: */0,/* Newline */0,/* [] */0]]];
            }
          else
           {return /* [] */0;}
          },
        text_of_before,
        function(self$neg1,l)
         {if(l)
           {var
             f=
              function(param)
               {return Pervasives["@"]
                        (/* :: */[0,
                          /* Bold */[4,
                           /* :: */[0,
                            /* Raw */[0,
                             Printf["sprintf"]
                              ([/* Format */0,
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Char_literal */12,
                                  32,
                                  [/* String */2,
                                   /* No_padding */0,
                                   [/* Char_literal */12,32,/* End_of_format */0]]]],
                                "%s %s "],
                               Odoc_messages["before"],
                               param[1])],
                            /* [] */0]],
                          param[2]],
                         [/* :: */0,/* Newline */0,/* [] */0]);
                };
            
            return List["flatten"](List["map"](f,l));
            }
          else
           {return /* [] */0;}
          },
        text_of_raised_exceptions,
        function(self$neg1,l)
         {if(l)
           {if(l[2])
             {return /* :: */[0,
                      /* Bold */[4,
                       /* :: */[0,/* Raw */[0,Odoc_messages["raises"]],/* [] */0]],
                      /* :: */[0,
                       [/* Raw */0," "],
                       /* :: */[0,
                        /* List */[10,
                         List["map"]
                          (function(param)
                            {return /* :: */[0,
                                     /* Code */[1,param[1]],
                                     /* :: */[0,[/* Raw */0," "],param[2]]];
                             },
                           l)],
                        [/* :: */0,/* Newline */0,/* [] */0]]]];
              }
            else
             {var match=l[1];
              
              return Pervasives["@"]
                      (/* :: */[0,
                        /* Bold */[4,
                         /* :: */[0,/* Raw */[0,Odoc_messages["raises"]],/* [] */0]],
                        /* :: */[0,
                         [/* Raw */0," "],
                         /* :: */[0,
                          /* Code */[1,match[1]],
                          [/* :: */0,[/* Raw */0," "],/* [] */0]]]],
                       Pervasives["@"]
                        (match[2],[/* :: */0,/* Newline */0,/* [] */0]));
              }
            }
          else
           {return /* [] */0;}
          },
        text_of_see,
        function(self$neg1,param)
         {var t=param[2];
          
          var see_ref=param[1];
          
          switch(see_ref[0])
           {case 0:return /* :: */[0,/* Link */[15,see_ref[1],t],/* [] */0];
            case 1:
             return /* :: */[0,
                     /* Code */[1,see_ref[1]],
                     /* :: */[0,[/* Raw */0," "],t]];
             
            case 2:
             return /* :: */[0,
                     /* Italic */[5,
                      /* :: */[0,/* Raw */[0,see_ref[1]],/* [] */0]],
                     /* :: */[0,[/* Raw */0," "],t]];
             
            }
          },
        text_of_sees,
        function(self$neg1,l)
         {if(l)
           {if(l[2])
             {return /* :: */[0,
                      /* Bold */[4,
                       /* :: */[0,/* Raw */[0,Odoc_messages["see_also"]],/* [] */0]],
                      /* :: */[0,
                       /* List */[10,
                        List["map"]
                         (function(see)
                           {/* unknown */"(sendself self-1/1266 text_of_see/1228 see/1269)";
                            },
                          l)],
                       [/* :: */0,/* Newline */0,/* [] */0]]];
              }
            else
             {/* unknown */"(sendself self-1/1266 text_of_see/1228 (field 0 l/1267))";
              return Pervasives["@"]
                      (/* :: */[0,
                        /* Bold */[4,
                         /* :: */[0,/* Raw */[0,Odoc_messages["see_also"]],/* [] */0]],
                        /* :: */[0,[/* Raw */0," "],0]],
                       [/* :: */0,/* Newline */0,/* [] */0]);
              }
            }
          else
           {return /* [] */0;}
          },
        text_of_return_opt,
        function(self$neg1,return_opt)
         {if(return_opt)
           {return Pervasives["@"]
                    (/* :: */[0,
                      /* Bold */[4,
                       /* :: */[0,
                        /* Raw */[0,Pervasives["^"](Odoc_messages["returns"]," ")],
                        /* [] */0]],
                      return_opt[1]],
                     [/* :: */0,/* Newline */0,/* [] */0]);
            }
          else
           {return /* [] */0;}
          },
        text_of_custom,
        function(self$neg1,l)
         {return List["fold_left"]
                  (function(acc,param)
                    {var text=param[2];
                     
                     var tag=param[1];
                     
                     try
                      {var f=List["assoc"](tag,self$neg1[tag_functions+1]);
                       
                       if(acc)
                        {return Pervasives["@"]
                                 (acc,/* :: */[0,/* Newline */0,f(text)]);
                         }
                       else
                        {return f(text);}
                       }
                     catch(exn)
                      {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
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
        text_of_info,
        function(self$neg1,$staropt$star,info_opt)
         {if($staropt$star)
           {var block=$staropt$star[1];}
          else
           {var block=/* true */1;}
          
          if(info_opt)
           {var info$1=info_opt[1];
            
            var match=info$1[7];
            
            var match$1=info$1[1];
            
            if(match$1)
             {var t=match$1[1];
              
              if
               (CamlPrimitive["caml_equal"]
                 (t,[/* :: */0,[/* Raw */0,""],/* [] */0]))
               {var $js=/* [] */0;}
              else
               {var
                 $js=
                  Pervasives["@"](t,[/* :: */0,/* Newline */0,/* [] */0]);
                }
              }
            else
             {var $js=/* [] */0;}
            /* unknown */"(sendself self-1/1282 text_of_author_list/1223 (field 1 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_version_opt/1224 (field 2 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_before/1226 (field 5 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_since_opt/1225 (field 4 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_raised_exceptions/1227 (field 8 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_return_opt/1230 (field 9 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_sees/1229 (field 3 info/1287))";
            /* unknown */"(sendself self-1/1282 text_of_custom/1231 (field 10 info/1287))";
            var
             t$1=
              Pervasives["@"]
               (match
                 ?/* :: */[0,
                   /* Italic */[5,
                    /* :: */[0,
                     /* Raw */[0,
                      Pervasives["^"](Odoc_messages["deprecated"]," ")],
                     /* [] */0]],
                   match[1]]
                 :/* [] */0,
                Pervasives["@"]
                 ($js,
                  Pervasives["@"]
                   (0,
                    Pervasives["@"]
                     (0,
                      Pervasives["@"]
                       (0,
                        Pervasives["@"]
                         (0,
                          Pervasives["@"](0,Pervasives["@"](0,Pervasives["@"](0,0)))))))));
            
            if(block)
             {return /* :: */[0,/* Block */[12,t$1],/* [] */0];}
            else
             {return t$1;}
            }
          else
           {return /* [] */0;}
          }]);
     return function(env,$$self)
      {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
       
       $$self$1[tag_functions+1]=/* [] */0;
       return $$self$1;
       };
     },
   0,
   0];

var
 to_text=
  [0,
   0,
   function($$class)
    {var ids=CamlinternalOO["get_method_labels"]($$class,shared$1);
     
     var text_of_value=ids[1];
     
     var text_of_type_expr_list=ids[2];
     
     var text_of_type_expr=ids[3];
     
     var text_of_short_type_expr=ids[4];
     
     var text_of_parameter_list=ids[5];
     
     var text_of_parameter_description=ids[6];
     
     var text_of_module_type_kind=ids[7];
     
     var text_of_module_type=ids[8];
     
     var text_of_module_parameter_list=ids[9];
     
     var text_of_module_kind=ids[10];
     
     var text_of_method=ids[11];
     
     var text_of_info=ids[12];
     
     var text_of_exception=ids[13];
     
     var text_of_class_type_param_expr_list=ids[14];
     
     var text_of_class_type_kind=ids[15];
     
     var text_of_class_params=ids[16];
     
     var text_of_class_kind=ids[17];
     
     var text_of_attribute=ids[18];
     
     var relative_module_idents=ids[19];
     
     var relative_idents=ids[20];
     
     var normal_type_list=ids[21];
     
     var normal_type=ids[22];
     
     var normal_module_type=ids[23];
     
     var normal_class_type_param_list=ids[24];
     
     var normal_class_type=ids[25];
     
     var normal_class_params=ids[26];
     
     var label=ids[27];
     
     var inh=CamlinternalOO["inherits"]($$class,shared$3,0,shared,info,1);
     
     var obj_init=inh[1];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        relative_idents,
        function(self$neg2,m_name,s)
         {var
           f=
            function(str_t)
             {var match_s=Str["matched_string"](str_t);
              
              var rel=Odoc_info["Name"][4](m_name,match_s);
              
              return Odoc_info["apply_if_equal"]
                      (Odoc_info["use_hidden_modules"],match_s,rel);
              };
          
          return Str["global_substitute"]
                  (Str["regexp"]
                    ("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)"),
                   f,
                   s);
          },
        relative_module_idents,
        function(self$neg2,m_name,s)
         {var
           f=
            function(str_t)
             {var match_s=Str["matched_string"](str_t);
              
              var rel=Odoc_info["Name"][4](m_name,match_s);
              
              return Odoc_info["apply_if_equal"]
                      (Odoc_info["use_hidden_modules"],match_s,rel);
              };
          
          return Str["global_substitute"]
                  (Str["regexp"]
                    ("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([A-Z][a-zA-Z_'0-9]*\)"),
                   f,
                   s);
          },
        normal_class_type,
        function(self$neg2,m_name,t)
         {/* unknown */"(sendself self-2/1355 relative_idents/1311 m_name/1356\n  (apply (field 19 (global Odoc_info!)) 0a t/1357))";
          },
        normal_module_type,
        function(self$neg2,code,m_name,t)
         {/* unknown */"(sendself self-2/1359 relative_module_idents/1312 m_name/1361\n  (apply (field 18 (global Odoc_info!)) code/1360 0a t/1362))";
          },
        normal_type,
        function(self$neg2,m_name,t)
         {/* unknown */"(sendself self-2/1364 relative_idents/1311 m_name/1365\n  (apply (field 12 (global Odoc_info!)) t/1366))";
          },
        normal_type_list,
        function(self$neg2,par,m_name,sep,t)
         {/* unknown */"(sendself self-2/1368 relative_idents/1311 m_name/1370\n  (apply (field 14 (global Odoc_info!)) par/1369 sep/1371 t/1372))";
          },
        normal_class_type_param_list,
        function(self$neg2,m_name,t)
         {/* unknown */"(sendself self-2/1374 relative_idents/1311 m_name/1375\n  (apply (field 17 (global Odoc_info!)) t/1376))";
          },
        normal_class_params,
        function(self$neg2,m_name,c)
         {var s=Odoc_info["string_of_class_params"](c);
          
          /* unknown */"(sendself self-2/1378 relative_idents/1311 m_name/1379\n  (apply (field 49 (global Odoc_info!)) s/1381))";
          },
        text_of_type_expr,
        function(self$neg2,module_name,t)
         {/* unknown */"(sendself self-2/1383 normal_type/1315 module_name/1384 t/1385)";
          return List["flatten"]
                  (List["map"]
                    (function(s)
                      {return /* :: */[0,
                               /* Code */[1,s],
                               [/* :: */0,/* Newline */0,/* [] */0]];
                       },
                     Str["split"](Str["regexp"]("\n"),0)));
          },
        text_of_short_type_expr,
        function(self$neg2,module_name,t)
         {/* unknown */"(sendself self-2/1389 normal_type/1315 module_name/1390 t/1391)";
          return /* :: */[0,/* Code */[1,0],/* [] */0];
          },
        text_of_type_expr_list,
        function(self$neg2,module_name,sep,l)
         {/* unknown */"(sendself self-2/1393 normal_type_list/1316 0a module_name/1394 sep/1395\n  l/1396)";
          return /* :: */[0,/* Code */[1,0],/* [] */0];
          },
        text_of_class_type_param_expr_list,
        function(self$neg2,module_name,l)
         {/* unknown */"(sendself self-2/1398 normal_class_type_param_list/1317 module_name/1399\n  l/1400)";
          return /* :: */[0,/* Code */[1,0],/* [] */0];
          },
        text_of_class_params,
        function(self$neg2,module_name,c)
         {/* unknown */"(sendself self-2/1402 normal_class_params/1318 module_name/1403 c/1404)";
          return Odoc_info["text_concat"]
                  ([/* :: */0,/* Newline */0,/* [] */0],
                   List["map"]
                    (function(s){return /* :: */[0,/* Code */[1,s],/* [] */0];},
                     Str["split"](Str["regexp"]("\n"),0)));
          },
        text_of_module_type,
        function(self$neg2,t)
         {var
           s=
            $$String["concat"]
             ("\n",
              Str["split"]
               (Str["regexp"]("\n"),
                Odoc_info["string_of_module_type"](/* None */0,/* None */0,t)));
          
          return /* :: */[0,/* Code */[1,s],/* [] */0];
          },
        text_of_value,
        function(self$neg2,v)
         {var name=v[1];
          
          var s_name=Odoc_info["Name"][1](name);
          
          /* unknown */"(sendself self-2/1412 normal_type/1315\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1413))\n  (field 2 v/1413))";
          Format["fprintf"]
           (Format["str_formatter"],
            [/* Format */0,
             [/* Formatting_gen */18,
              [/* Open_box */1,
               [/* Format */0,
                [/* String_literal */11,"<hov 2>",/* End_of_format */0],
                "<hov 2>"]],
              [/* String_literal */11,
               "val ",
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 " :",
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
             "@[<hov 2>val %s :@ %s"],
            s_name,
            0);
          var s=Format["flush_str_formatter"](/* () */0);
          
          /* unknown */"(sendself self-2/1412 label/1310 0a s_name/1415)";
          /* unknown */"(sendself self-2/1412 label/1310 [0: 0a] s_name/1415)";
          /* unknown */"(sendself self-2/1412 text_of_info/1417 0a (field 1 v/1413))";
          return Pervasives["@"]
                  (/* :: */[0,/* CodePre */[2,s],/* [] */0],
                   Pervasives["@"]
                    (/* :: */[0,
                      /* Latex */[14,
                       Pervasives["^"]
                        ("\index{",
                         Pervasives["^"]
                          (0,Pervasives["^"]("@\verb`",Pervasives["^"](0,"`}\n"))))],
                      /* [] */0],
                     0));
          },
        text_of_attribute,
        function(self$neg2,a)
         {var s_name=Odoc_info["Name"][1](a[1][1]);
          
          var mod_name=Odoc_info["Name"][5](a[1][1]);
          
          /* unknown */"(sendself self-2/1419 normal_type/1315 mod_name/1422\n  (field 2 (field 0 a/1420)))";
          Format["fprintf"]
           (Format["str_formatter"],
            [/* Format */0,
             [/* Formatting_gen */18,
              [/* Open_box */1,
               [/* Format */0,
                [/* String_literal */11,"<hov 2>",/* End_of_format */0],
                "<hov 2>"]],
              [/* String_literal */11,
               "val ",
               [/* String */2,
                /* No_padding */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " :",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
             "@[<hov 2>val %s%s%s :@ %s"],
            a[3]?"virtual ":"",
            a[2]?"mutable ":"",
            s_name,
            0);
          var s=Format["flush_str_formatter"](/* () */0);
          
          /* unknown */"(sendself self-2/1419 label/1310 0a s_name/1421)";
          /* unknown */"(sendself self-2/1419 label/1310 [0: 0a] s_name/1421)";
          /* unknown */"(sendself self-2/1419 text_of_info/1417 0a (field 1 (field 0 a/1420)))";
          return Pervasives["@"]
                  (/* :: */[0,
                    /* CodePre */[2,s],
                    /* :: */[0,
                     /* Latex */[14,
                      Pervasives["^"]
                       ("\index{",
                        Pervasives["^"]
                         (0,Pervasives["^"]("@\verb`",Pervasives["^"](0,"`}\n"))))],
                     /* [] */0]],
                   0);
          },
        text_of_method,
        function(self$neg2,m)
         {var s_name=Odoc_info["Name"][1](m[1][1]);
          
          var mod_name=Odoc_info["Name"][5](m[1][1]);
          
          /* unknown */"(sendself self-2/1425 normal_type/1315 mod_name/1428\n  (field 2 (field 0 m/1426)))";
          Format["fprintf"]
           (Format["str_formatter"],
            [/* Format */0,
             [/* Formatting_gen */18,
              [/* Open_box */1,
               [/* Format */0,
                [/* String_literal */11,"<hov 2>",/* End_of_format */0],
                "<hov 2>"]],
              [/* String_literal */11,
               "method ",
               [/* String */2,
                /* No_padding */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   " :",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
             "@[<hov 2>method %s%s%s :@ %s"],
            m[2]?"private ":"",
            m[3]?"virtual ":"",
            s_name,
            0);
          var s=Format["flush_str_formatter"](/* () */0);
          
          /* unknown */"(sendself self-2/1425 label/1310 0a s_name/1427)";
          /* unknown */"(sendself self-2/1425 label/1310 [0: 0a] s_name/1427)";
          /* unknown */"(sendself self-2/1425 text_of_info/1417 0a (field 1 (field 0 m/1426)))";
          return Pervasives["@"]
                  (/* :: */[0,
                    /* CodePre */[2,s],
                    /* :: */[0,
                     /* Latex */[14,
                      Pervasives["^"]
                       ("\index{",
                        Pervasives["^"]
                         (0,Pervasives["^"]("@\verb`",Pervasives["^"](0,"`}\n"))))],
                     /* [] */0]],
                   0);
          },
        text_of_exception,
        function(self$neg2,e)
         {var s_name=Odoc_info["Name"][1](e[1]);
          
          var father=Odoc_info["Name"][5](e[1]);
          
          Format["fprintf"]
           (Format["str_formatter"],
            [/* Format */0,
             [/* Formatting_gen */18,
              [/* Open_box */1,
               [/* Format */0,
                [/* String_literal */11,"<hov 2>",/* End_of_format */0],
                "<hov 2>"]],
              [/* String_literal */11,
               "exception ",
               [/* String */2,/* No_padding */0,/* End_of_format */0]]],
             "@[<hov 2>exception %s"],
            s_name);
          var match=e[3];
          
          var match$1=e[4];
          
          if(match)
           {if(match$1)
             {/* unknown */'(sendself self-2/1431 normal_type_list/1316 [0: 0a] father/1434 " * "\n  match/1607)';
              /* unknown */"(sendself self-2/1431 normal_type/1315 father/1434 (field 0 match/1608))";
              Format["fprintf"]
               (Format["str_formatter"],
                [/* Format */0,
                 [/* Char_literal */12,
                  32,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String */2,
                     /* No_padding */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String */2,
                       /* No_padding */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
                 " %s@ %s@ %s@ %s"],
                ":",
                0,
                "->",
                0)}
            else
             {/* unknown */'(sendself self-2/1431 normal_type_list/1316 [0: 0a] father/1434 " * "\n  match/1607)';
              Format["fprintf"]
               (Format["str_formatter"],
                [/* Format */0,
                 [/* Char_literal */12,
                  32,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                 " %s@ %s"],
                "of",
                0)}
            }
          else
           {if(match$1)
             {/* unknown */"(sendself self-2/1431 normal_type/1315 father/1434 (field 0 match/1608))";
              Format["fprintf"]
               (Format["str_formatter"],
                [/* Format */0,
                 [/* Char_literal */12,
                  32,
                  [/* String */2,
                   /* No_padding */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                 " %s@ %s"],
                ":",
                0)}
            else
             {}
            }
          
          var match$2=e[5];
          
          if(match$2)
           {var ea=match$2[1];
            
            var match$3=ea[2];
            
            Format["fprintf"]
             (Format["str_formatter"],
              [/* Format */0,
               [/* String_literal */11,
                " = ",
                [/* String */2,/* No_padding */0,/* End_of_format */0]],
               " = %s"],
              match$3?match$3[1][1]:ea[1])}
          else
           {}
          
          var s2=Format["flush_str_formatter"](/* () */0);
          
          /* unknown */"(sendself self-2/1431 label/1310 0a s_name/1433)";
          /* unknown */"(sendself self-2/1431 label/1310 [0: 0a] s_name/1433)";
          /* unknown */"(sendself self-2/1431 text_of_info/1417 0a (field 1 e/1432))";
          return Pervasives["@"]
                  (/* :: */[0,/* CodePre */[2,s2],/* [] */0],
                   Pervasives["@"]
                    (/* :: */[0,
                      /* Latex */[14,
                       Pervasives["^"]
                        ("\index{",
                         Pervasives["^"]
                          (0,Pervasives["^"]("@\verb`",Pervasives["^"](0,"`}\n"))))],
                      /* [] */0],
                     0));
          },
        text_of_parameter_description,
        function(self$neg2,p)
         {var l=Odoc_info["Parameter"][3](p);
          
          if(l)
           {if(l[2])
             {var
               l2=
                List["filter"]
                 (function(n)
                   {return Odoc_info["Parameter"][4](p,n)!==/* None */0;},
                  l);
              
              if(l2)
               {return /* :: */[0,
                        /* List */[10,
                         List["map"]
                          (function(n)
                            {var match=Odoc_info["Parameter"][4](p,n);
                             
                             if(match)
                              {return Pervasives["@"]
                                       (/* :: */[0,
                                         /* Code */[1,Pervasives["^"](n," ")],
                                         [/* :: */0,[/* Raw */0,": "],/* [] */0]],
                                        match[1]);
                               }
                             else
                              {return /* [] */0;}
                             },
                           l2)],
                        /* [] */0];
                }
              else
               {return /* [] */0;}
              }
            else
             {var match=Odoc_info["Parameter"][4](p,l[1]);
              
              if(match){return match[1];}else{return /* [] */0;}
              }
            }
          else
           {return /* [] */0;}
          },
        text_of_parameter_list,
        function(self$neg2,m_name,l)
         {if(l)
           {return /* :: */[0,
                    /* Bold */[4,
                     /* :: */[0,
                      /* Raw */[0,Odoc_messages["parameters"]],
                      /* [] */0]],
                    /* :: */[0,
                     [/* Raw */0,":"],
                     /* :: */[0,
                      /* List */[10,
                       List["map"]
                        (function(p)
                          {var s=Odoc_info["Parameter"][1](p);
                           
                           switch(s)
                            {case "":var $js=[/* Code */1,"?"];
                             default:var $js=/* Code */[1,s];}
                           /* unknown */"(sendself self-2/1453 text_of_short_type_expr/1320 m_name/1454\n  (apply (field 1 (field 3 (global Odoc_info!))) p/1456))";
                           /* unknown */"(sendself self-2/1453 text_of_parameter_description/1329 p/1456)";
                           return Pervasives["@"]
                                   (/* :: */[0,$js,[/* :: */0,[/* Code */1," : "],/* [] */0]],
                                    Pervasives["@"]
                                     (0,Pervasives["@"]([/* :: */0,/* Newline */0,/* [] */0],0)));
                           },
                         l)],
                      /* [] */0]]];
            }
          else
           {return /* [] */0;}
          },
        text_of_module_parameter_list,
        function(self$neg2,l)
         {if(l)
           {return /* :: */[0,
                    /* Newline */0,
                    /* :: */[0,
                     /* Bold */[4,
                      /* :: */[0,
                       /* Raw */[0,Odoc_messages["parameters"]],
                       /* [] */0]],
                     /* :: */[0,
                      [/* Raw */0,":"],
                      /* :: */[0,
                       /* List */[10,
                        List["map"]
                         (function(param)
                           {var desc_opt=param[2];
                            
                            var p=param[1];
                            
                            var match=p[2];
                            
                            if(match)
                             {/* unknown */"(sendself self-2/1459 text_of_module_type/1324 (field 0 match/1588))";
                              var
                               $js=
                                Pervasives["@"]
                                 (/* :: */[0,
                                   /* Code */[1,Pervasives["^"](p[1]," : ")],
                                   /* [] */0],
                                  0);
                              }
                            else
                             {var $js=[/* :: */0,[/* Raw */0,""],/* [] */0];}
                            return Pervasives["@"]
                                    ($js,
                                     desc_opt?/* :: */[0,[/* Raw */0," "],desc_opt[1]]:/* [] */0);
                            },
                          l)],
                       /* [] */0]]]];
            }
          else
           {return /* [] */0;}
          },
        text_of_class_kind,
        function(self$neg2,father,ckind)
         {switch(ckind[0])
           {case 0:
             return /* :: */[0,
                     /* Code */[1,Odoc_messages["object_end"]],
                     /* [] */0];
             
            case 1:
             var capp=ckind[1];
             
             var match=capp[2];
             
             return /* :: */[0,
                     /* Code */[1,
                      Pervasives["^"]
                       (match?match[1][1]:capp[1],
                        Pervasives["^"]
                         (" ",
                          $$String["concat"]
                           (" ",
                            List["map"]
                             (function(s)
                               {return Pervasives["^"]("(",Pervasives["^"](s,")"));},
                              capp[4]))))],
                     /* [] */0];
             
            case 2:
             var cco=ckind[1];
             
             var l=cco[3];
             
             if(l)
              {/* unknown */'(sendself self-2/1466 text_of_type_expr_list/1321 father/1467 ", " l/1475)';
               var
                $js=
                 Pervasives["@"]
                  (/* :: */[0,[/* Code */1,"["],0],
                   [/* :: */0,[/* Code */1,"] "],/* [] */0]);
               }
             else
              {var $js=/* [] */0;}
             var match$1=cco[2];
             
             return Pervasives["@"]
                     ($js,
                      /* :: */[0,
                       /* Code */[1,
                        match$1?Odoc_info["Name"][4](father,match$1[1][1][1]):cco[1]],
                       /* [] */0]);
             
            case 3:
             /* unknown */"(sendself self-2/1466 text_of_class_kind/1332 father/1467\n  (field 0 ckind/1468))";
             /* unknown */"(sendself self-2/1466 text_of_class_type_kind/1333 father/1467\n  (field 1 ckind/1468))";
             return Pervasives["@"]
                     ([/* :: */0,[/* Code */1,"( "],/* [] */0],
                      Pervasives["@"]
                       (0,
                        Pervasives["@"]
                         ([/* :: */0,[/* Code */1," : "],/* [] */0],
                          Pervasives["@"](0,[/* :: */0,[/* Code */1," )"],/* [] */0]))));
             
            }
          },
        text_of_class_type_kind,
        function(self$neg2,father,ctkind)
         {switch(ctkind[0])
           {case 0:
             return /* :: */[0,
                     /* Code */[1,Odoc_messages["object_end"]],
                     /* [] */0];
             
            case 1:
             var cta=ctkind[1];
             
             var l=cta[3];
             
             if(l)
              {/* unknown */"(sendself self-2/1479 text_of_class_type_param_expr_list/1322 father/1480\n  l/1483)";
               var
                $js=
                 Pervasives["@"]
                  (/* :: */[0,[/* Code */1,"["],0],
                   [/* :: */0,[/* Code */1,"] "],/* [] */0]);
               }
             else
              {var $js=/* [] */0;}
             var match=cta[2];
             
             if(match)
              {var rel=Odoc_info["Name"][4](father,match[1][1][1]);
               
               var $js$1=/* :: */[0,/* Code */[1,rel],/* [] */0];
               }
             else
              {var $js$1=/* :: */[0,/* Code */[1,cta[1]],/* [] */0];}
             return Pervasives["@"]($js,$js$1);
             
            }
          },
        text_of_module_kind,
        function(self$neg2,$staropt$star,k)
         {if($staropt$star)
           {var with_def_syntax=$staropt$star[1];}
          else
           {var with_def_syntax=/* true */1;}
          
          switch(k[0])
           {case 0:
             return /* :: */[0,
                     /* Code */[1,
                      Pervasives["^"]
                       (with_def_syntax?" : ":"",
                        Pervasives["^"](Odoc_messages["struct_end"]," "))],
                     /* [] */0];
             
            case 1:
             var m_alias=k[1];
             
             var match=m_alias[2];
             
             if(match)
              {var match$1=match[1];
               
               switch(match$1[0])
                {case 0:
                  return /* :: */[0,
                          /* Code */[1,
                           Pervasives["^"](with_def_syntax?" = ":"",match$1[1][1])],
                          /* [] */0];
                  
                 case 1:
                  return /* :: */[0,
                          /* Code */[1,
                           Pervasives["^"](with_def_syntax?" = ":"",match$1[1][1])],
                          /* [] */0];
                  
                 }
               }
             else
              {return /* :: */[0,
                       /* Code */[1,
                        Pervasives["^"](with_def_syntax?" = ":"",m_alias[1])],
                       /* [] */0];
               }
             
            case 2:
             /* unknown */"(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 1 k/1493))";
             return Pervasives["@"]
                     (with_def_syntax
                       ?[/* :: */0,[/* Code */1," : "],/* [] */0]
                       :/* [] */0,
                      Pervasives["@"]
                       ([/* :: */0,[/* Code */1,"functor ... "],/* [] */0],
                        Pervasives["@"]
                         ([/* :: */0,[/* Code */1," -> "],/* [] */0],0)));
             
            case 3:
             /* unknown */"(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 0 k/1493))";
             /* unknown */"(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 1 k/1493))";
             return Pervasives["@"]
                     (with_def_syntax
                       ?[/* :: */0,[/* Code */1," = "],/* [] */0]
                       :/* [] */0,
                      Pervasives["@"]
                       (0,
                        Pervasives["@"]
                         ([/* :: */0,[/* Code */1," ( "],/* [] */0],
                          Pervasives["@"](0,[/* :: */0,[/* Code */1," ) "],/* [] */0]))));
             
            case 4:
             /* unknown */"(sendself self-2/1489 text_of_module_type_kind/1335 [0: 0a] (field 0 k/1493))";
             return Pervasives["@"]
                     (with_def_syntax
                       ?[/* :: */0,[/* Code */1," : "],/* [] */0]
                       :/* [] */0,
                      Pervasives["@"](0,/* :: */[0,/* Code */[1,k[2]],/* [] */0]));
             
            case 5:
             /* unknown */"(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 0 k/1493))";
             /* unknown */"(sendself self-2/1489 text_of_module_type_kind/1335 [0: 0a] (field 1 k/1493))";
             return Pervasives["@"]
                     (with_def_syntax
                       ?[/* :: */0,[/* Code */1," : "],/* [] */0]
                       :/* [] */0,
                      Pervasives["@"]
                       ([/* :: */0,[/* Code */1,"( "],/* [] */0],
                        Pervasives["@"]
                         (0,
                          Pervasives["@"]
                           ([/* :: */0,[/* Code */1," : "],/* [] */0],
                            Pervasives["@"](0,[/* :: */0,[/* Code */1," )"],/* [] */0])))));
             
            case 6:
             var
              code=
               Printf["sprintf"]
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    "module type of ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                  "%smodule type of %s"],
                 with_def_syntax?" : ":"",
                 k[1]);
             
             return /* :: */[0,/* Code */[1,code],/* [] */0];
             
            case 7:
             var
              code$1=
               Printf["sprintf"]
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String */2,/* No_padding */0,/* End_of_format */0]],
                  "%s%s"],
                 with_def_syntax?" : ":"",
                 k[1]);
             
             return /* :: */[0,/* Code */[1,code$1],/* [] */0];
             
            }
          },
        text_of_module_type_kind,
        function(self$neg2,$staropt$star,tk)
         {if($staropt$star)
           {var with_def_syntax=$staropt$star[1];}
          else
           {var with_def_syntax=/* true */1;}
          
          switch(tk[0])
           {case 0:
             return /* :: */[0,
                     /* Code */[1,
                      Pervasives["^"]
                       (with_def_syntax?" = ":"",Odoc_messages["sig_end"])],
                     /* [] */0];
             
            case 1:
             var p=tk[1];
             
             /* unknown */"(sendself self-2/1510 text_of_module_type_kind/1335 0a (field 3 p/1515))";
             var
              t1=
               Pervasives["@"]
                (/* :: */[0,
                  /* Code */[1,
                   Pervasives["^"]("(",Pervasives["^"](p[1]," : "))],
                  /* [] */0],
                 Pervasives["@"]
                  (0,[/* :: */0,[/* Code */1,") -> "],/* [] */0]));
             
             /* unknown */"(sendself self-2/1510 text_of_module_type_kind/1335 [0: 0a]\n  (field 1 tk/1514))";
             
             return Pervasives["@"]
                     (with_def_syntax
                       ?[/* :: */0,[/* Code */1," = "],/* [] */0]
                       :/* [] */0,
                      Pervasives["@"](t1,t2));
             
            case 2:
             var mt_alias=tk[1];
             
             var match=mt_alias[2];
             
             return /* :: */[0,
                     /* Code */[1,
                      Pervasives["^"]
                       (with_def_syntax?" = ":"",match?match[1][1]:mt_alias[1])],
                     /* [] */0];
             
            case 3:
             /* unknown */"(sendself self-2/1510 text_of_module_type_kind/1335 [0: 0a]\n  (field 0 tk/1514))";
             
             return Pervasives["@"]
                     (with_def_syntax
                       ?[/* :: */0,[/* Code */1," = "],/* [] */0]
                       :/* [] */0,
                      Pervasives["@"](t,/* :: */[0,/* Code */[1,tk[2]],/* [] */0]));
             
            case 4:
             var
              code=
               Printf["sprintf"]
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    "module type of ",
                    [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                  "%smodule type of %s"],
                 with_def_syntax?" = ":"",
                 tk[1]);
             
             return /* :: */[0,/* Code */[1,code],/* [] */0];
             
            }
          }]);
     return function(env,$$self)
      {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
       
       obj_init($$self$1);
       return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
       };
     },
   0,
   0];

module["exports"]={"info":info,"to_text":to_text};

