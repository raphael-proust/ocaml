var Odoc_html=require("Odoc_html");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Odoc_args=require("Odoc_args");
var Buffer=require("Buffer");
var
 shared=
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
var
 shared$1=
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
var shared$2=[0,"code_id"];
var
 shared$3=
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
var Naming=0;
var p=Printf["bprintf"];
var bp=Printf["bprintf"];
var bs=Buffer["add_string"];
var match=Odoc_args["current_generator"][1];
var $js=match;
if($js)
 {var match$1=match[1];
  var $js$1=match$1;
  if($js$1==0)
   {var Html=match$1[1]}
  else
   {var $js$2=Pervasives["failwith"];
    var
     Html=
      $js$2
       ("A non-html generator is already set. Cannot install the Todo-list html generator")}}
else
 {var Html=Odoc_html["Generator"]}
var
 html_init=
  function(class)
   {var $js$3=CamlinternalOO["new_methods_variables"];
    var ids=$js$3(class,shared,shared$2);
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
    var escape=ids[11];
    var create_title_label=ids[12];
    var code_block=ids[13];
    var code_id=ids[14];
    var $js$4=CamlinternalOO["inherits"];
    var inh=$js$4(class,shared$3,0,shared$1,Html[1],1);
    var obj_init=inh[1];
    var default_style_options=inh[20];
    var $js$5=CamlinternalOO["set_methods"];
    $js$5
     (class,
      [0,
       html_of_module_comment,
       function(self-1,b,text)
        {var $js$6=text;
         if($js$6)
          {var $js$7=text[1];
           if(typeof $js$7=="number")
            {"unknown block:(field 0 text/1379)"}
           else
            {var $js$8=$js$7[0];
             if($js$8==13)
              {var $js$9=text[2];
               if($js$9){var match$2=[0,0,1]}else{var match$2=[0,0,0]}}
             else
              {var exit=2}}}
         else
          {var exit=2}
         switch(exit){case 2:var match$2=[0,1,1]}
         var $js$10=match$2[1];
         if($js$10){p(b,[0,[11,"<br/>",0],"<br/>"])}else{}
         "unknown block:(sendself self-1/1377 html_of_text/1388 b/1378 text/1379)";
         var $js$11=match$2[2];
         if($js$11)
          {return p(b,[0,[11,"<br/><br/>\n",0],"<br/><br/>\n"])}
         else
          {return 0}},
       html_of_Title,
       function(self-1,b,n,l_opt,t)
        {"unknown block:(sendself self-1/1390 create_title_label/1396\n  (makeblock 0 n/1392 l_opt/1393 t/1394))";
         var $js$6=Odoc_html["Naming"][35];
         var $js$7=$js$6(label1);
         p
          (b,
           [0,[11,'<a name="',[2,0,[11,'"></a>\n',0]]],'<a name="%s"></a>\n'],
           $js$7);
         p(b,[0,[11,"<h",[4,0,0,0,[12,62,0]]],"<h%d>"],n);
         "unknown block:(sendself self-1/1390 html_of_text/1388 b/1391 t/1394)";
         return p(b,[0,[11,"</h",[4,0,0,0,[12,62,0]]],"</h%d>"],n)},
       code_block,
       function(self-1,b,code)
        {self-1[code_id]=self-1[code_id]+1,0;
         var $js$6=Printf["bprintf"];
         $js$6
          (b,
           [0,
            [11,
             '<span class="code_expand" onclick="if(document.getElementById(\'code',
             [4,
              0,
              0,
              0,
              [11,
               "').style.display=='none') {document.getElementById('code",
               [4,
                0,
                0,
                0,
                [11,
                 "').style.display='block';} else {document.getElementById('code",
                 [4,
                  0,
                  0,
                  0,
                  [11,
                   '\').style.display=\'none\';}"><img src="expand_collapse.png" alt="+/-"/></span>',
                   0]]]]]]],
            "<span class=\"code_expand\" onclick=\"if(document.getElementById('code%d').style.display=='none') {document.getElementById('code%d').style.display='block';} else {document.getElementById('code%d').style.display='none';}\"><img src=\"expand_collapse.png\" alt=\"+/-\"/></span>"],
           self-1[code_id],
           self-1[code_id],
           self-1[code_id]);
         var $js$7=Printf["bprintf"];
         $js$7
          (b,
           [0,
            [11,'<div id="code',[4,0,0,0,[11,'" class="codeblock">',0]]],
            '<div id="code%d" class="codeblock">'],
           self-1[code_id]);
         "unknown block:(sendself self-1/1437 html_of_code/1440 b/1438 0a code/1439)";
         var $js$8=Printf["bprintf"];
         return $js$8(b,[0,[11,"</div>",0],"</div>"])},
       html_of_value,
       function(self-1,b,v)
        {var $js$6=Odoc_info["reset_type_names"];
         $js$6(0);
         "unknown block:(sendself self-1/1442 html_of_info/1445 0a 0a b/1443 (field 1 v/1444))";
         bs(b,"<pre>");
         'unknown block:(sendself self-1/1442 keyword/1446 "val")';
         bs(b,$js$7);
         bs(b," ");
         var $js$8=Odoc_html["Naming"][25];
         var $js$9=$js$8(v);
         bp
          (b,
           [0,[11,'<a name="',[2,0,[11,'"></a>',0]]],'<a name="%s"></a>'],
           $js$9);
         "unknown block:(sendself self-1/1442 escape/1447\n  (apply (field 0 (field 2 (global Odoc_info!))) (field 0 v/1444)))";
         bs(b,$js$10);
         bs(b," : ");
         "unknown block:(sendself self-1/1442 html_of_type_expr/1448 b/1443\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1444))\n  (field 2 v/1444))";
         bs(b,"</pre>");
         var $js$11=Odoc_html["with_parameter_list"][1];
         if($js$11)
          {"unknown block:(sendself self-1/1442 html_of_parameter_list/1449 b/1443\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1444))\n  (field 4 v/1444))"}
         else
          {"unknown block:(sendself self-1/1442 html_of_described_parameter_list/1450 b/1443\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1444))\n  (field 4 v/1444))"}
         var match$2=v[6];
         var $js$12=match$2;
         if($js$12)
          {"unknown block:(sendself self-1/1442 code_block/1374 b/1443 (field 0 match/1486))"}
         else
          {return 0}}]);
    var $js$6=CamlinternalOO["add_initializer"];
    $js$6
     (class,
      function(self-1)
       {var $js$7=Pervasives["^"];
        var $js$8=Pervasives["^"];
        var $js$9=Pervasives["^"];
        var
         $js$10=
          $js$9
           ("text-align: center; background-color: #90BDFF ;",
            "padding: 2px; }");
        var $js$11=$js$8("margin-top: 5px; margin-bottom: 2px;",$js$10);
        var
         $js$12=
          $js$7("h2 { font-size : 20pt ; border: 1px solid #000000; ",$js$11);
        var $js$13=Pervasives["^"];
        var $js$14=Pervasives["^"];
        var $js$15=Pervasives["^"];
        var
         $js$16=
          $js$15
           ("text-align: center; background-color: #90DDFF ;",
            "padding: 2px; }");
        var $js$17=$js$14("margin-top: 5px; margin-bottom: 2px;",$js$16);
        var
         $js$18=
          $js$13("h3 { font-size : 20pt ; border: 1px solid #000000; ",$js$17);
        var $js$19=Pervasives["^"];
        var $js$20=Pervasives["^"];
        var $js$21=Pervasives["^"];
        var
         $js$22=
          $js$21
           ("text-align: center; background-color: #90EDFF ;",
            "padding: 2px; }");
        var $js$23=$js$20("margin-top: 5px; margin-bottom: 2px;",$js$22);
        var
         $js$24=
          $js$19("h4 { font-size : 20pt ; border: 1px solid #000000; ",$js$23);
        var $js$25=Pervasives["^"];
        var $js$26=Pervasives["^"];
        var $js$27=Pervasives["^"];
        var
         $js$28=
          $js$27
           ("text-align: center; background-color: #90FDFF ;",
            "padding: 2px; }");
        var $js$29=$js$26("margin-top: 5px; margin-bottom: 2px;",$js$28);
        var
         $js$30=
          $js$25("h5 { font-size : 20pt ; border: 1px solid #000000; ",$js$29);
        var $js$31=Pervasives["^"];
        var $js$32=Pervasives["^"];
        var $js$33=Pervasives["^"];
        var
         $js$34=
          $js$33
           ("text-align: center; background-color: #C0FFFF ; ",
            "padding: 2px; }");
        var $js$35=$js$32("margin-top: 5px; margin-bottom: 2px;",$js$34);
        var
         $js$36=
          $js$31("h6 { font-size : 20pt ; border: 1px solid #000000; ",$js$35);
        var $js$37=Pervasives["^"];
        var $js$38=Pervasives["^"];
        var $js$39=Pervasives["^"];
        var
         $js$40=
          $js$39
           ("text-align: center; background-color: #E0FFFF ; ",
            "padding: 2px; }");
        var $js$41=$js$38("margin-top: 5px; margin-bottom: 2px;",$js$40);
        var
         $js$42=
          $js$37
           ("div.h7 { font-size : 20pt ; border: 1px solid #000000; ",$js$41);
        var $js$43=Pervasives["^"];
        var $js$44=Pervasives["^"];
        var $js$45=Pervasives["^"];
        var
         $js$46=
          $js$45
           ("text-align: center; background-color: #F0FFFF ; ",
            "padding: 2px; }");
        var $js$47=$js$44("margin-top: 5px; margin-bottom: 2px;",$js$46);
        var
         $js$48=
          $js$43
           ("div.h8 { font-size : 20pt ; border: 1px solid #000000; ",$js$47);
        var $js$49=Pervasives["^"];
        var $js$50=Pervasives["^"];
        var $js$51=Pervasives["^"];
        var
         $js$52=
          $js$51
           ("text-align: center; background-color: #FFFFFF ; ",
            "padding: 2px; }");
        var $js$53=$js$50("margin-top: 5px; margin-bottom: 2px;",$js$52);
        var
         $js$54=
          $js$49
           ("div.h9 { font-size : 20pt ; border: 1px solid #000000; ",$js$53);
        var $js$55=Pervasives["^"];
        var $js$56=Pervasives["^"];
        var $js$57=Pervasives["^"];
        var
         $js$58=
          $js$57("border-width: 1px 1px 1px 3px; ","padding: 4px; }");
        var
         $js$59=
          $js$56("border-color: #27408b; border-style: solid; ",$js$58);
        var
         $js$60=
          $js$55("pre { margin-bottom: 4px ; margin-left: 1em; ",$js$59);
        var $js$61=Pervasives["^"];
        var $js$62=Pervasives["^"];
        var $js$63=Pervasives["^"];
        var
         $js$64=
          $js$63
           ("margin-bottom: 8px; display: none; ",
            "border-width: 1px 1px 1px 3px; border-style: solid; border-color: grey; }");
        var
         $js$65=
          $js$62("margin-left: 2em; margin-right: 1em; padding: 6px; ",$js$64);
        var $js$66=$js$61("div.codeblock { ",$js$65);
        var $js$67=Pervasives["^"];
        var
         $js$68=
          $js$67
           ("span.code_expand { color: blue; text-decoration: underline; cursor: pointer; ",
            "margin-left: 1em ; } ");
        var $js$69=[0,$js$68,0];
        var $js$70=[0,$js$66,$js$69];
        var $js$71=[0,"div.sig_block {margin-left: 2em}",$js$70];
        var $js$72=[0,$js$60,$js$71];
        var
         $js$73=
          [0,
           "td.typefieldcomment { background-color : #FFFFFF ; font-size: smaller ;}",
           $js$72];
        var $js$74=[0,"tr { background-color : White }",$js$73];
        var $js$75=[0,"body { background-color : White }",$js$74];
        var
         $js$76=
          [0,
           ".paramstable { border-style : hidden ; padding: 5pt 5pt}",
           $js$75];
        var $js$77=[0,".indextable { border-style : hidden }",$js$76];
        var $js$78=[0,".typetable { border-style : hidden }",$js$77];
        var $js$79=[0,$js$54,$js$78];
        var $js$80=[0,$js$48,$js$79];
        var $js$81=[0,$js$42,$js$80];
        var $js$82=[0,$js$36,$js$81];
        var $js$83=[0,$js$30,$js$82];
        var $js$84=[0,$js$24,$js$83];
        var $js$85=[0,$js$18,$js$84];
        var $js$86=[0,$js$12,$js$85];
        var $js$87=[0,"h1 { font-size : 20pt ; text-align: center; }",$js$86];
        var $js$88=[0,".code { color : #465F91 ; }",$js$87];
        var
         $js$89=
          [0,
           ".param_info { margin-top: 4px; margin-left : 3em; margin-right : 3em }",
           $js$88];
        var $js$90=[0,".info { margin-top: 8px; }",$js$89];
        var $js$91=[0,".warning { color : Red ; font-weight : bold }",$js$90];
        var $js$92=[0,".string { color : Maroon }",$js$91];
        var $js$93=[0,".type { color : #5C6585 }",$js$92];
        var $js$94=[0,".constructor { color : Blue }",$js$93];
        var $js$95=[0,".comment { color : Green }",$js$94];
        var $js$96=[0,".subscript { font-size : 0.6em }",$js$95];
        var $js$97=[0,".superscript { font-size : 0.6em }",$js$96];
        var $js$98=[0,".keywordsign { color : #C04600 }",$js$97];
        var $js$99=[0,".keyword { font-weight : bold ; color : Red }",$js$98];
        var
         $js$100=
          [0,"a:active {color : Red; text-decoration : underline; }",$js$99];
        var
         $js$101=
          [0,
           "a:hover {color : Red; text-decoration : none; background-color: #5FFF88}",
           $js$100];
        var
         $js$102=
          [0,"a:link {color : #416DFF; text-decoration : none;}",$js$101];
        var
         $js$103=
          [0,"a:visited {color : #416DFF; text-decoration : none; }",$js$102];
        return self-1[default_style_options]=$js$103,0});
    return function(env,self)
     {var $js$7=CamlinternalOO["create_object_opt"];
      var self$1=$js$7(self,class);
      obj_init(self$1);
      self$1[code_id]=0,0;
      var $js$8=CamlinternalOO["run_initializers_opt"];
      return $js$8(self,self$1,class)}};
var $js$3=CamlinternalOO["make_class"];
var
 html=
  $js$3
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
var $js$4=Odoc_args["set_generator"];
$js$4([0,Generator]);
module["exports"]=
{"Naming":Naming,"p":p,"bp":bp,"bs":bs,"Html":Html,"Generator":Generator};
