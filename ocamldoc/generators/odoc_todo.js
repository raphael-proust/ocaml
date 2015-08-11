// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_html=require("Odoc_html");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Odoc_args=require("Odoc_args");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Odoc_module=require("Odoc_module");



var shared=[0,"print_header","generate"];

var
 shared$1=
  [0,
   "tag_functions",
   "style_file",
   "style",
   "list_values",
   "list_types",
   "list_modules",
   "list_module_types",
   "list_methods",
   "list_extensions",
   "list_exceptions",
   "list_classes",
   "list_class_types",
   "list_attributes",
   "known_types_names",
   "known_modules_names",
   "known_classes_names",
   "header",
   "doctype",
   "default_style_options"];

var shared$2=[0,"scanner"];

var
 shared$3=
  [0,
   "scan_value",
   "scan_type_extension",
   "scan_type",
   "scan_module_type_pre",
   "scan_module_type",
   "scan_module_pre",
   "scan_module_elements",
   "scan_module_comment",
   "scan_module",
   "scan_method",
   "scan_included_module",
   "scan_extension_constructor",
   "scan_exception",
   "scan_class_type_pre",
   "scan_class_type",
   "scan_class_pre",
   "scan_class",
   "scan_attribute",
   "gen_if_tag",
   "buffer"];

var
 shared$4=
  [0,
   "character_encoding",
   "constructor",
   "create_fully_qualified_idents_links",
   "create_fully_qualified_module_idents_links",
   "create_title_label",
   "escape",
   "generate",
   "generate_attributes_index",
   "generate_class_inheritance_info",
   "generate_class_type_inheritance_info",
   "generate_class_types_index",
   "generate_classes_index",
   "generate_elements",
   "generate_elements_index",
   "generate_exceptions_index",
   "generate_extensions_index",
   "generate_for_class",
   "generate_for_class_type",
   "generate_for_module",
   "generate_for_module_type",
   "generate_index",
   "generate_inheritance_info",
   "generate_methods_index",
   "generate_module_types_index",
   "generate_modules_index",
   "generate_types_index",
   "generate_values_index",
   "html_of_Block",
   "html_of_Bold",
   "html_of_Center",
   "html_of_Code",
   "html_of_CodePre",
   "html_of_Emphasize",
   "html_of_Enum",
   "html_of_Index_list",
   "html_of_Italic",
   "html_of_Latex",
   "html_of_Left",
   "html_of_Link",
   "html_of_List",
   "html_of_Module_list",
   "html_of_Newline",
   "html_of_Raw",
   "html_of_Ref",
   "html_of_Right",
   "html_of_Subscript",
   "html_of_Superscript",
   "html_of_Target",
   "html_of_Title",
   "html_of_Verbatim",
   "html_of_attribute",
   "html_of_author_list",
   "html_of_before",
   "html_of_class",
   "html_of_class_comment",
   "html_of_class_element",
   "html_of_class_kind",
   "html_of_class_parameter_list",
   "html_of_class_type",
   "html_of_class_type_kind",
   "html_of_class_type_param_expr_list",
   "html_of_code",
   "html_of_custom",
   "html_of_custom_text",
   "html_of_dag",
   "html_of_described_parameter_list",
   "html_of_exception",
   "html_of_included_module",
   "html_of_info",
   "html_of_info_first_sentence",
   "html_of_method",
   "html_of_modtype",
   "html_of_module",
   "html_of_module_comment",
   "html_of_module_element",
   "html_of_module_kind",
   "html_of_module_parameter",
   "html_of_module_parameter_list",
   "html_of_module_parameter_type",
   "html_of_module_type",
   "html_of_module_type_kind",
   "html_of_parameter_description",
   "html_of_parameter_list",
   "html_of_raised_exceptions",
   "html_of_return_opt",
   "html_of_see",
   "html_of_sees",
   "html_of_since_opt",
   "html_of_text",
   "html_of_text_element",
   "html_of_type",
   "html_of_type_expr",
   "html_of_type_expr_list",
   "html_of_type_expr_param_list",
   "html_of_type_extension",
   "html_of_value",
   "html_of_version_opt",
   "html_sections_links",
   "index",
   "index_attributes",
   "index_class_types",
   "index_classes",
   "index_exceptions",
   "index_extensions",
   "index_methods",
   "index_module_types",
   "index_modules",
   "index_prefix",
   "index_types",
   "index_values",
   "init_style",
   "inner_title",
   "keep_alpha_num",
   "keyword",
   "label_of_text",
   "list_attributes",
   "list_class_types",
   "list_classes",
   "list_exceptions",
   "list_extensions",
   "list_methods",
   "list_module_types",
   "list_modules",
   "list_types",
   "list_values",
   "output_class_type",
   "output_code",
   "output_module_type",
   "prepare_header",
   "print_header",
   "print_navbar",
   "title"];

var
 shared$5=
  [0,
   "scan_attribute",
   "scan_class",
   "scan_class_comment",
   "scan_class_elements",
   "scan_class_pre",
   "scan_class_type",
   "scan_class_type_comment",
   "scan_class_type_elements",
   "scan_class_type_pre",
   "scan_exception",
   "scan_extension_constructor",
   "scan_included_module",
   "scan_method",
   "scan_module",
   "scan_module_comment",
   "scan_module_elements",
   "scan_module_list",
   "scan_module_pre",
   "scan_module_type",
   "scan_module_type_comment",
   "scan_module_type_elements",
   "scan_module_type_pre",
   "scan_type",
   "scan_type_const",
   "scan_type_extension",
   "scan_type_extension_constructors",
   "scan_type_extension_pre",
   "scan_type_pre",
   "scan_type_recfield",
   "scan_value"];

var shared$6=[0,"b"];

var Naming=0;

var p=Printf["bprintf"];

var match=Odoc_args["current_generator"][1];

if(match)
 {var match$1=match[1];
  
  switch(match$1)
   {case 0:var Html=match$1[1];
    default:
     var
      Html=
       Pervasives["failwith"]
        ("A non-html generator is already set. Cannot install the Todo-list html generator");
     }
  }
else
 {var Html=Odoc_html["Generator"];}

var
 scanner_init=
  function($$class)
   {var html=CamlinternalOO["new_variable"]($$class,"");
    
    var
     ids=
      CamlinternalOO["new_methods_variables"]($$class,shared$3,shared$6);
    
    var scan_value=ids[1];
    
    var scan_type_extension=ids[2];
    
    var scan_type=ids[3];
    
    var scan_module_type_pre=ids[4];
    
    var scan_module_type=ids[5];
    
    var scan_module_pre=ids[6];
    
    var scan_module_elements=ids[7];
    
    var scan_module_comment=ids[8];
    
    var scan_module=ids[9];
    
    var scan_method=ids[10];
    
    var scan_included_module=ids[11];
    
    var scan_extension_constructor=ids[12];
    
    var scan_exception=ids[13];
    
    var scan_class_type_pre=ids[14];
    
    var scan_class_type=ids[15];
    
    var scan_class_pre=ids[16];
    
    var scan_class=ids[17];
    
    var scan_attribute=ids[18];
    
    var gen_if_tag=ids[19];
    
    var buffer=ids[20];
    
    var b=ids[21];
    
    var
     inh=
      CamlinternalOO["inherits"]($$class,0,0,shared$5,Odoc_info["Scan"][1],1);
    
    var obj_init=inh[1];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       buffer,
       1,
       b,
       gen_if_tag,
       function(self$neg1,name,target,info_opt)
        {if(info_opt)
          {var
            l=
             List["fold_left"]
              (function(acc,param)
                {var text=param[2];
                 
                 switch(param[1])
                  {case "todo":
                    var exit;
                    
                    if(text)
                     {var match$2=text[1];
                      
                      if(typeof match$2=="number")
                       {switch(match$2){}}
                      else
                       {switch(match$2[0])
                         {case 1:
                           try
                            {var n="unknown primitive:caml_int_of_string";
                             
                             var
                              head=
                               /* Code */[1,
                                Printf["sprintf"]
                                 ([/* Format */0,
                                   [/* Char_literal */12,
                                    91,
                                    [/* Int */4,
                                     /* Int_d */0,
                                     /* No_padding */0,
                                     /* No_precision */0,
                                     [/* String_literal */11,"] ",/* End_of_format */0]]],
                                   "[%d] "],
                                  n)];
                             
                             return /* :: */[0,
                                     /* tuple */[0,/* Some */[0,n],/* :: */[0,head,text[2]]],
                                     acc];
                             }
                           catch(exn)
                            {return /* :: */[0,/* tuple */[0,/* None */0,text],acc];}
                           
                          default:exit=12;}}
                      }
                    else
                     {exit=12;}
                    
                    switch(exit)
                     {case 12:
                       return /* :: */[0,/* tuple */[0,/* None */0,text],acc];
                      }
                    
                   default:return acc;}
                 },
               /* [] */0,
               info_opt[1][11]);
           
           if(l)
            {var
              l$1=
               List["sort"]
                (function(a,b)
                  {var match$2=a[1];
                   
                   if(match$2)
                    {var match$3=b[1];
                     
                     if(match$3)
                      {return "unknown primitive:caml_int_compare";}
                     else
                      {return 1;}
                     }
                   else
                    {return -1;}
                   },
                 l);
             
             p
              (self$neg1[b],
               [/* Format */0,
                [/* String_literal */11,
                 '<pre><a href="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     '</a></pre><div class="info">',
                     /* End_of_format */0]]]]],
                '<pre><a href="%s">%s</a></pre><div class="info">'],
               target,
               name);
             var
              col=
               function(param)
                {if(param)
                  {var n=param[1];
                   
                   var switcher=-1+n;
                   
                   if(2<switcher>>>0)
                    {return Printf["sprintf"]
                             ([/* Format */0,
                               [/* Char_literal */12,
                                35,
                                [/* Int */4,
                                 /* Int_x */6,
                                 [/* Lit_padding */0,/* Right */1,2],
                                 /* No_precision */0,
                                 [/* String_literal */11,"0000",/* End_of_format */0]]],
                               "#%2x0000"],
                              170-n*16);
                     }
                   else
                    {switch(switcher[0])
                      {case 0:return "#FF0000";
                       case 1:return "#AA5555";
                       case 2:return "#44BB00";
                       }
                     }
                   }
                 else
                  {return "#000000";}
                 };
             
             List["iter"]
              (function(param)
                {Printf["bprintf"]
                  (self$neg1[b],
                   [/* Format */0,
                    [/* String_literal */11,
                     '<span style="color: ',
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,'">',/* End_of_format */0]]],
                    '<span style="color: %s">'],
                   col(param[1]));
                 "unknown block:(send (array.unsafe_get self-1/1301 html/1249) 34801153\n  (array.unsafe_get self-1/1301 b/1283) (field 1 param/1675))";
                 
                 return p
                         (self$neg1[b],
                          [/* Format */0,
                           [/* String_literal */11,
                            "</span><br/>\n",
                            /* End_of_format */0],
                           "</span><br/>\n"]);
                 },
               l$1);
             return p
                     (self$neg1[b],
                      [/* Format */0,
                       [/* String_literal */11,"</div>",/* End_of_format */0],
                       "</div>"]);
             }
           else
            {return /* () */0;}
           }
         else
          {return /* () */0;}
         },
       scan_value,
       function(self$neg1,v)
        {"unknown block:(sendself self-1/1324 gen_if_tag/1285 (field 0 v/1325)\n  (apply (field 26 (field 6 (global Odoc_html!))) v/1325) (field 1 v/1325))";
         },
       scan_type,
       function(self$neg1,t)
        {"unknown block:(sendself self-1/1327 gen_if_tag/1285 (field 0 t/1328)\n  (apply (field 17 (field 6 (global Odoc_html!))) t/1328) (field 1 t/1328))";
         },
       scan_extension_constructor,
       function(self$neg1,x)
        {"unknown block:(sendself self-1/1330 gen_if_tag/1285 (field 0 x/1331)\n  (apply (field 21 (field 6 (global Odoc_html!))) x/1331)\n  (field 0 (field 3 x/1331)))";
         },
       scan_exception,
       function(self$neg1,e)
        {"unknown block:(sendself self-1/1333 gen_if_tag/1285 (field 0 e/1334)\n  (apply (field 23 (field 6 (global Odoc_html!))) e/1334) (field 1 e/1334))";
         },
       scan_attribute,
       function(self$neg1,a)
        {"unknown block:(sendself self-1/1336 gen_if_tag/1285 (field 0 (field 0 a/1337))\n  (apply (field 29 (field 6 (global Odoc_html!))) a/1337)\n  (field 1 (field 0 a/1337)))";
         },
       scan_method,
       function(self$neg1,m)
        {"unknown block:(sendself self-1/1339 gen_if_tag/1285 (field 0 (field 0 m/1340))\n  (apply (field 32 (field 6 (global Odoc_html!))) m/1340)\n  (field 1 (field 0 m/1340)))";
         },
       scan_module_elements,
       function(self$neg1,m)
        {return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-1/1342 scan_module/1355 (field 0 ele/1344))";
                       
                      case 1:
                       "unknown block:(sendself self-1/1342 scan_module_type/1356 (field 0 ele/1344))";
                       
                      case 2:
                       "unknown block:(sendself self-1/1342 scan_included_module/1293 (field 0 ele/1344))";
                       
                      case 3:
                       "unknown block:(sendself self-1/1342 scan_class/1357 (field 0 ele/1344))";
                       
                      case 4:
                       "unknown block:(sendself self-1/1342 scan_class_type/1358 (field 0 ele/1344))";
                       
                      case 5:
                       "unknown block:(sendself self-1/1342 scan_value/1286 (field 0 ele/1344))";
                       
                      case 6:
                       "unknown block:(sendself self-1/1342 scan_type_extension/1359 (field 0 ele/1344))";
                       
                      case 7:
                       "unknown block:(sendself self-1/1342 scan_exception/1289 (field 0 ele/1344))";
                       
                      case 8:
                       "unknown block:(sendself self-1/1342 scan_type/1287 (field 0 ele/1344))";
                       
                      case 9:
                       "unknown block:(sendself self-1/1342 scan_module_comment/1360 (field 0 ele/1344))";
                       
                      }
                    },
                  Odoc_module["module_elements"]([/* Some */0,/* false */0],m));
         },
       scan_included_module,
       function(self$neg1,param){return /* () */0;},
       scan_class_pre,
       function(self$neg1,c)
        {"unknown block:(sendself self-1/1364 gen_if_tag/1285 (field 0 c/1365)\n  (field 0 (apply (field 10 (field 6 (global Odoc_html!))) (field 0 c/1365)))\n  (field 1 c/1365))";
         
         return /* true */1;
         },
       scan_class_type_pre,
       function(self$neg1,ct)
        {"unknown block:(sendself self-1/1367 gen_if_tag/1285 (field 0 ct/1368)\n  (field 0\n    (apply (field 10 (field 6 (global Odoc_html!))) (field 0 ct/1368)))\n  (field 1 ct/1368))";
         
         return /* true */1;
         },
       scan_module_pre,
       function(self$neg1,m)
        {"unknown block:(sendself self-1/1370 gen_if_tag/1285 (field 0 m/1371)\n  (field 0 (apply (field 10 (field 6 (global Odoc_html!))) (field 0 m/1371)))\n  (field 2 m/1371))";
         
         return /* true */1;
         },
       scan_module_type_pre,
       function(self$neg1,mt)
        {"unknown block:(sendself self-1/1373 gen_if_tag/1285 (field 0 mt/1374)\n  (field 0\n    (apply (field 10 (field 6 (global Odoc_html!))) (field 0 mt/1374)))\n  (field 1 mt/1374))";
         
         return /* true */1;
         }]);
    return function(env,$$self,html)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[html$1]=
      html,
      0,
      obj_init($$self$1),
      $$self$1[b]=
      Buffer["create"](256),
      0;
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 scanner=
  CamlinternalOO["make_class"]
   ([0,
     "scan_type_const",
     "scan_class",
     "scan_module_elements",
     "scan_class_type_pre",
     "scan_type_recfield",
     "scan_module_type_comment",
     "buffer",
     "scan_included_module",
     "scan_exception",
     "scan_class_type_elements",
     "scan_class_type",
     "scan_type_extension",
     "scan_module_list",
     "scan_module_type",
     "scan_module",
     "scan_extension_constructor",
     "scan_class_pre",
     "scan_module_pre",
     "scan_type_extension_constructors",
     "scan_module_type_pre",
     "scan_type_extension_pre",
     "scan_class_comment",
     "scan_attribute",
     "scan_class_elements",
     "scan_class_type_comment",
     "scan_module_type_elements",
     "scan_type",
     "scan_module_comment",
     "scan_value",
     "scan_method",
     "scan_type_pre"],
    scanner_init);

var
 html_init=
  function($$class)
   {var ids=CamlinternalOO["new_methods_variables"]($$class,shared,shared$2);
    
    var print_header=ids[1];
    
    var generate=ids[2];
    
    var scanner$1=ids[3];
    
    var inh=CamlinternalOO["inherits"]($$class,shared$1,0,shared$4,Html[1],1);
    
    var obj_init=inh[1];
    
    var tag_functions=inh[2];
    
    var generate$1=inh[27];
    
    CamlinternalOO["set_method"]
     ($$class,
      generate,
      function(self$neg2,modules)
       {self$neg2[tag_functions]=
        /* :: */[0,
         /* tuple */[0,"todo",function(param){return "";}],
         self$neg2[tag_functions]],
        0;
        generate$1(self$neg2,modules);
        var match$2=Odoc_info["Global"][6][1];
        
        if(match$2){var title=match$2[1];}else{var title="";}
        
        var b=Buffer["create"](512);
        
        p
         (b,
          [/* Format */0,
           [/* String_literal */11,"<html>",/* End_of_format */0],
           "<html>"]);
        "unknown block:(sendself self-2/1537 print_header/1542 b/1541 0a 0a title/1539)";
        
        p
         (b,
          [/* Format */0,
           [/* String_literal */11,
            "<body><h1>",
            [/* String */2,
             /* No_padding */0,
             [/* String_literal */11,"</h1>",/* End_of_format */0]]],
           "<body><h1>%s</h1>"],
          title);
        "unknown block:(send (array.unsafe_get self-2/1537 scanner/1534) -342620401 modules/1538)";
        
        "unknown block:(send (array.unsafe_get self-2/1537 scanner/1534) -795558656)";
        Buffer["add_buffer"](b,0);
        var
         oc=
          Pervasives["open_out"]
           (Filename["concat"](Odoc_info["Global"][5][1],"todo.html"));
        
        Buffer["output_buffer"](oc,b);
        return Pervasives["close_out"](oc);
        });
    CamlinternalOO["add_initializer"]
     ($$class,
      function(self$neg2)
       {return self$neg2[scanner$1]=scanner[1](0,self$neg2),0;});
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1),$$self$1[scanner$1]=scanner[1](0,Html[1][1](0)),0;
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 html=
  CamlinternalOO["make_class"]
   ([0,
     "html_of_CodePre",
     "html_of_Emphasize",
     "list_modules",
     "html_of_module_kind",
     "inner_title",
     "list_exceptions",
     "html_of_module_parameter",
     "html_of_Latex",
     "html_of_raised_exceptions",
     "list_types",
     "html_of_type_expr",
     "html_of_module_type",
     "html_of_type_extension",
     "html_sections_links",
     "generate_extensions_index",
     "generate_for_class_type",
     "html_of_Verbatim",
     "generate_classes_index",
     "init_style",
     "index_methods",
     "html_of_Center",
     "html_of_Italic",
     "html_of_Target",
     "prepare_header",
     "generate_class_type_inheritance_info",
     "html_of_custom",
     "html_of_Subscript",
     "generate",
     "html_of_module",
     "generate_for_module",
     "escape",
     "generate_exceptions_index",
     "html_of_Superscript",
     "html_of_type_expr_param_list",
     "html_of_Bold",
     "html_of_Code",
     "html_of_Enum",
     "html_of_Title",
     "create_title_label",
     "html_of_exception",
     "html_of_Left",
     "html_of_Link",
     "html_of_List",
     "create_fully_qualified_module_idents_links",
     "html_of_return_opt",
     "html_of_parameter_list",
     "generate_values_index",
     "list_methods",
     "list_class_types",
     "html_of_class_type_kind",
     "html_of_value",
     "html_of_class_parameter_list",
     "output_module_type",
     "index_extensions",
     "html_of_class_comment",
     "html_of_code",
     "generate_module_types_index",
     "html_of_version_opt",
     "html_of_info",
     "html_of_class_element",
     "list_module_types",
     "generate_class_types_index",
     "keep_alpha_num",
     "html_of_Newline",
     "print_header",
     "html_of_sees",
     "html_of_text",
     "html_of_type",
     "html_of_module_parameter_list",
     "index_attributes",
     "html_of_parameter_description",
     "generate_methods_index",
     "index_types",
     "html_of_module_comment",
     "html_of_module_parameter_type",
     "html_of_text_element",
     "index_exceptions",
     "html_of_Block",
     "html_of_class",
     "generate_index",
     "generate_modules_index",
     "html_of_included_module",
     "html_of_module_element",
     "index_module_types",
     "title",
     "label_of_text",
     "generate_elements_index",
     "html_of_custom_text",
     "generate_types_index",
     "index_classes",
     "html_of_described_parameter_list",
     "constructor",
     "html_of_attribute",
     "character_encoding",
     "index_prefix",
     "html_of_modtype",
     "generate_elements",
     "html_of_method",
     "html_of_class_type_param_expr_list",
     "index_modules",
     "html_of_class_kind",
     "html_of_Module_list",
     "print_navbar",
     "create_fully_qualified_idents_links",
     "html_of_module_type_kind",
     "list_values",
     "html_of_Index_list",
     "html_of_class_type",
     "generate_attributes_index",
     "html_of_type_expr_list",
     "output_class_type",
     "generate_for_class",
     "list_extensions",
     "html_of_author_list",
     "html_of_since_opt",
     "generate_for_module_type",
     "list_classes",
     "html_of_before",
     "generate_inheritance_info",
     "html_of_info_first_sentence",
     "html_of_Raw",
     "html_of_Ref",
     "html_of_dag",
     "html_of_see",
     "index_values",
     "list_attributes",
     "html_of_Right",
     "keyword",
     "index",
     "index_class_types",
     "generate_class_inheritance_info"],
    html_init);

var Generator=[0,scanner,html];

Odoc_args["set_generator"](/* Html */[0,[0,Generator[2]]]);
module["exports"]={"Naming":Naming,"p":p,"Html":Html,"Generator":Generator};

