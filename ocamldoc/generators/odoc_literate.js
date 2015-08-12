// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_html=require("Odoc_html");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Odoc_args=require("Odoc_args");
var Buffer=require("Buffer");



var shared=[0,"code_id"];

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

var
 shared$2=
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
 shared$3=
  [0,
   "keyword",
   "html_of_value",
   "html_of_type_expr",
   "html_of_text",
   "html_of_parameter_list",
   "html_of_module_comment",
   "html_of_info",
   "html_of_described_parameter_list",
   "html_of_code",
   "html_of_Title",
   "escape",
   "create_title_label",
   "code_block"];

var Naming=0;

var p=Printf["bprintf"];

var bp=Printf["bprintf"];

var bs=Buffer["add_string"];

var match=Odoc_args["current_generator"][1];

if(match)
 {var match$1=match[1];
  
  switch(match$1[0])
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
 html_init=
  function($$class)
   {var ids=CamlinternalOO["new_methods_variables"]($$class,shared$3,shared);
    
    var keyword=ids[1];
    
    var html_of_value=ids[2];
    
    var html_of_type_expr=ids[3];
    
    var html_of_text=ids[4];
    
    var html_of_parameter_list=ids[5];
    
    var html_of_module_comment=ids[6];
    
    var html_of_info=ids[7];
    
    var html_of_described_parameter_list=ids[8];
    
    var html_of_code=ids[9];
    
    var html_of_Title=ids[10];
    
    var $$escape=ids[11];
    
    var create_title_label=ids[12];
    
    var code_block=ids[13];
    
    var code_id=ids[14];
    
    var inh=CamlinternalOO["inherits"]($$class,shared$1,0,shared$2,Html[1],1);
    
    var obj_init=inh[1];
    
    var default_style_options=inh[20];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       html_of_module_comment,
       function(self$neg1,b,text)
        {var exit;
         
         if(text)
          {var $js=text[1];
           if(typeof $js=="number")
            {switch($js){}}
           else
            {switch($js[0])
              {case 13:
                if(text[2])
                 {var match$2=[/* tuple */0,/* false */0,/* true */1];}
                else
                 {var match$2=[/* tuple */0,/* false */0,/* false */0];}
                
               default:exit=2;}}
           }
         else
          {exit=2;}
         
         switch(exit)
          {case 2:var match$2=[/* tuple */0,/* true */1,/* true */1];}
         
         if(match$2[1])
          {p
            (b,
             [/* Format */0,
              [/* String_literal */11,"<br/>",/* End_of_format */0],
              "<br/>"])}
         else
          {}
         
         "unknown block:(sendself self-1/1377 html_of_text/1388 b/1378 text/1379)";
         
         if(match$2[2])
          {return p
                   (b,
                    [/* Format */0,
                     [/* String_literal */11,"<br/><br/>\n",/* End_of_format */0],
                     "<br/><br/>\n"]);
           }
         else
          {return 0;}
         },
       html_of_Title,
       function(self$neg1,b,n,l_opt,t)
        {"unknown block:(sendself self-1/1390 create_title_label/1396\n  (makeblock 0 n/1392 l_opt/1393 t/1394))";
         
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<a name="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'"></a>\n',/* End_of_format */0]]],
            '<a name="%s"></a>\n'],
           Odoc_html["Naming"][35](label1));
         p
          (b,
           [/* Format */0,
            [/* String_literal */11,
             "<h",
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* Char_literal */12,62,/* End_of_format */0]]],
            "<h%d>"],
           n);
         "unknown block:(sendself self-1/1390 html_of_text/1388 b/1391 t/1394)";
         
         return p
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,
                    "</h",
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,62,/* End_of_format */0]]],
                   "</h%d>"],
                  n);
         },
       code_block,
       function(self$neg1,b,code)
        {self$neg1[code_id]=self$neg1[code_id]+1,0;
         Printf["bprintf"]
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span class="code_expand" onclick="if(document.getElementById(\'code',
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* String_literal */11,
               "').style.display=='none') {document.getElementById('code",
               [/* Int */4,
                /* Int_d */0,
                /* No_padding */0,
                /* No_precision */0,
                [/* String_literal */11,
                 "').style.display='block';} else {document.getElementById('code",
                 [/* Int */4,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* String_literal */11,
                   '\').style.display=\'none\';}"><img src="expand_collapse.png" alt="+/-"/></span>',
                   /* End_of_format */0]]]]]]],
            "<span class=\"code_expand\" onclick=\"if(document.getElementById('code%d').style.display=='none') {document.getElementById('code%d').style.display='block';} else {document.getElementById('code%d').style.display='none';}\"><img src=\"expand_collapse.png\" alt=\"+/-\"/></span>"],
           self$neg1[code_id],
           self$neg1[code_id],
           self$neg1[code_id]);
         Printf["bprintf"]
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<div id="code',
             [/* Int */4,
              /* Int_d */0,
              /* No_padding */0,
              /* No_precision */0,
              [/* String_literal */11,
               '" class="codeblock">',
               /* End_of_format */0]]],
            '<div id="code%d" class="codeblock">'],
           self$neg1[code_id]);
         "unknown block:(sendself self-1/1437 html_of_code/1440 b/1438 0a code/1439)";
         
         return Printf["bprintf"]
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,"</div>",/* End_of_format */0],
                   "</div>"]);
         },
       html_of_value,
       function(self$neg1,b,v)
        {Odoc_info["reset_type_names"](/* () */0);
         "unknown block:(sendself self-1/1442 html_of_info/1445 0a 0a b/1443 (field 1 v/1444))";
         
         bs(b,"<pre>");
         'unknown block:(sendself self-1/1442 keyword/1446 "val")';
         bs(b,0);
         bs(b," ");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<a name="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'"></a>',/* End_of_format */0]]],
            '<a name="%s"></a>'],
           Odoc_html["Naming"][25](v));
         "unknown block:(sendself self-1/1442 escape/1447\n  (apply (field 0 (field 2 (global Odoc_info!))) (field 0 v/1444)))";
         bs(b,0);
         bs(b," : ");
         "unknown block:(sendself self-1/1442 html_of_type_expr/1448 b/1443\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1444))\n  (field 2 v/1444))";
         
         bs(b,"</pre>");
         if(Odoc_html["with_parameter_list"][1])
          {"unknown block:(sendself self-1/1442 html_of_parameter_list/1449 b/1443\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1444))\n  (field 4 v/1444))";
           }
         else
          {"unknown block:(sendself self-1/1442 html_of_described_parameter_list/1450 b/1443\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1444))\n  (field 4 v/1444))";
           }
         
         var match$2=v[6];
         
         if(match$2)
          {"unknown block:(sendself self-1/1442 code_block/1374 b/1443 (field 0 match/1486))";
           }
         else
          {return /* () */0;}
         }]);
    CamlinternalOO["add_initializer"]
     ($$class,
      function(self$neg1)
       {return self$neg1[default_style_options]=
               /* :: */[0,
                "a:visited {color : #416DFF; text-decoration : none; }",
                /* :: */[0,
                 "a:link {color : #416DFF; text-decoration : none;}",
                 /* :: */[0,
                  "a:hover {color : Red; text-decoration : none; background-color: #5FFF88}",
                  /* :: */[0,
                   "a:active {color : Red; text-decoration : underline; }",
                   /* :: */[0,
                    ".keyword { font-weight : bold ; color : Red }",
                    /* :: */[0,
                     ".keywordsign { color : #C04600 }",
                     /* :: */[0,
                      ".superscript { font-size : 0.6em }",
                      /* :: */[0,
                       ".subscript { font-size : 0.6em }",
                       /* :: */[0,
                        ".comment { color : Green }",
                        /* :: */[0,
                         ".constructor { color : Blue }",
                         /* :: */[0,
                          ".type { color : #5C6585 }",
                          /* :: */[0,
                           ".string { color : Maroon }",
                           /* :: */[0,
                            ".warning { color : Red ; font-weight : bold }",
                            /* :: */[0,
                             ".info { margin-top: 8px; }",
                             /* :: */[0,
                              ".param_info { margin-top: 4px; margin-left : 3em; margin-right : 3em }",
                              /* :: */[0,
                               ".code { color : #465F91 ; }",
                               /* :: */[0,
                                "h1 { font-size : 20pt ; text-align: center; }",
                                /* :: */[0,
                                 Pervasives["^"]
                                  ("h2 { font-size : 20pt ; border: 1px solid #000000; ",
                                   Pervasives["^"]
                                    ("margin-top: 5px; margin-bottom: 2px;",
                                     Pervasives["^"]
                                      ("text-align: center; background-color: #90BDFF ;",
                                       "padding: 2px; }"))),
                                 /* :: */[0,
                                  Pervasives["^"]
                                   ("h3 { font-size : 20pt ; border: 1px solid #000000; ",
                                    Pervasives["^"]
                                     ("margin-top: 5px; margin-bottom: 2px;",
                                      Pervasives["^"]
                                       ("text-align: center; background-color: #90DDFF ;",
                                        "padding: 2px; }"))),
                                  /* :: */[0,
                                   Pervasives["^"]
                                    ("h4 { font-size : 20pt ; border: 1px solid #000000; ",
                                     Pervasives["^"]
                                      ("margin-top: 5px; margin-bottom: 2px;",
                                       Pervasives["^"]
                                        ("text-align: center; background-color: #90EDFF ;",
                                         "padding: 2px; }"))),
                                   /* :: */[0,
                                    Pervasives["^"]
                                     ("h5 { font-size : 20pt ; border: 1px solid #000000; ",
                                      Pervasives["^"]
                                       ("margin-top: 5px; margin-bottom: 2px;",
                                        Pervasives["^"]
                                         ("text-align: center; background-color: #90FDFF ;",
                                          "padding: 2px; }"))),
                                    /* :: */[0,
                                     Pervasives["^"]
                                      ("h6 { font-size : 20pt ; border: 1px solid #000000; ",
                                       Pervasives["^"]
                                        ("margin-top: 5px; margin-bottom: 2px;",
                                         Pervasives["^"]
                                          ("text-align: center; background-color: #C0FFFF ; ",
                                           "padding: 2px; }"))),
                                     /* :: */[0,
                                      Pervasives["^"]
                                       ("div.h7 { font-size : 20pt ; border: 1px solid #000000; ",
                                        Pervasives["^"]
                                         ("margin-top: 5px; margin-bottom: 2px;",
                                          Pervasives["^"]
                                           ("text-align: center; background-color: #E0FFFF ; ",
                                            "padding: 2px; }"))),
                                      /* :: */[0,
                                       Pervasives["^"]
                                        ("div.h8 { font-size : 20pt ; border: 1px solid #000000; ",
                                         Pervasives["^"]
                                          ("margin-top: 5px; margin-bottom: 2px;",
                                           Pervasives["^"]
                                            ("text-align: center; background-color: #F0FFFF ; ",
                                             "padding: 2px; }"))),
                                       /* :: */[0,
                                        Pervasives["^"]
                                         ("div.h9 { font-size : 20pt ; border: 1px solid #000000; ",
                                          Pervasives["^"]
                                           ("margin-top: 5px; margin-bottom: 2px;",
                                            Pervasives["^"]
                                             ("text-align: center; background-color: #FFFFFF ; ",
                                              "padding: 2px; }"))),
                                        /* :: */[0,
                                         ".typetable { border-style : hidden }",
                                         /* :: */[0,
                                          ".indextable { border-style : hidden }",
                                          /* :: */[0,
                                           ".paramstable { border-style : hidden ; padding: 5pt 5pt}",
                                           /* :: */[0,
                                            "body { background-color : White }",
                                            /* :: */[0,
                                             "tr { background-color : White }",
                                             /* :: */[0,
                                              "td.typefieldcomment { background-color : #FFFFFF ; font-size: smaller ;}",
                                              /* :: */[0,
                                               Pervasives["^"]
                                                ("pre { margin-bottom: 4px ; margin-left: 1em; ",
                                                 Pervasives["^"]
                                                  ("border-color: #27408b; border-style: solid; ",
                                                   Pervasives["^"]
                                                    ("border-width: 1px 1px 1px 3px; ","padding: 4px; }"))),
                                               /* :: */[0,
                                                "div.sig_block {margin-left: 2em}",
                                                /* :: */[0,
                                                 Pervasives["^"]
                                                  ("div.codeblock { ",
                                                   Pervasives["^"]
                                                    ("margin-left: 2em; margin-right: 1em; padding: 6px; ",
                                                     Pervasives["^"]
                                                      ("margin-bottom: 8px; display: none; ",
                                                       "border-width: 1px 1px 1px 3px; border-style: solid; border-color: grey; }"))),
                                                 /* :: */[0,
                                                  Pervasives["^"]
                                                   ("span.code_expand { color: blue; text-decoration: underline; cursor: pointer; ",
                                                    "margin-left: 1em ; } "),
                                                  /* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
               0;
        });
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1),$$self$1[code_id]=0,0;
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

var Generator=[0,html];

Odoc_args["set_generator"](/* Html */[0,Generator]);
module["exports"]=
{"Naming":Naming,"p":p,"bp":bp,"bs":bs,"Html":Html,"Generator":Generator};

