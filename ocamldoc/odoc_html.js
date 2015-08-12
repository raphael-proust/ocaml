// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Odoc_global=require("Odoc_global");
var CamlinternalOO=require("CamlinternalOO");
var Char=require("Char");
var Odoc_dag2html=require("Odoc_dag2html");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_ocamlhtml=require("Odoc_ocamlhtml");
var Printf=require("Printf");
var Set=require("Set");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Str=require("Str");
var $$Array=require("Array");
var Odoc_messages=require("Odoc_messages");


var shared=[0,"html_of_text"];

var
 shared$1=
  [0,
   "html_of_version_opt",
   "html_of_text",
   "html_of_since_opt",
   "html_of_sees",
   "html_of_see",
   "html_of_return_opt",
   "html_of_raised_exceptions",
   "html_of_info_first_sentence",
   "html_of_info",
   "html_of_custom",
   "html_of_before",
   "html_of_author_list"];

var shared$2=[0,"html_of_code"];

var
 shared$3=
  [0,
   "doctype",
   "default_style_options",
   "style_file",
   "style",
   "known_types_names",
   "known_classes_names",
   "known_modules_names",
   "list_attributes",
   "list_methods",
   "list_values",
   "list_extensions",
   "list_exceptions",
   "list_types",
   "list_modules",
   "list_module_types",
   "list_classes",
   "list_class_types",
   "header"];

var
 shared$4=
  [0,
   "title",
   "print_navbar",
   "print_header",
   "prepare_header",
   "output_module_type",
   "output_code",
   "output_class_type",
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
   "keyword",
   "inner_title",
   "init_style",
   "index_values",
   "index_types",
   "index_prefix",
   "index_modules",
   "index_module_types",
   "index_methods",
   "index_extensions",
   "index_exceptions",
   "index_classes",
   "index_class_types",
   "index_attributes",
   "index",
   "html_sections_links",
   "html_of_value",
   "html_of_type_extension",
   "html_of_type_expr_param_list",
   "html_of_type_expr_list",
   "html_of_type_expr",
   "html_of_type",
   "html_of_text",
   "html_of_parameter_list",
   "html_of_parameter_description",
   "html_of_module_type_kind",
   "html_of_module_type",
   "html_of_module_parameter_type",
   "html_of_module_parameter_list",
   "html_of_module_parameter",
   "html_of_module_kind",
   "html_of_module_element",
   "html_of_module_comment",
   "html_of_module",
   "html_of_modtype",
   "html_of_method",
   "html_of_info_first_sentence",
   "html_of_info",
   "html_of_included_module",
   "html_of_exception",
   "html_of_described_parameter_list",
   "html_of_dag",
   "html_of_code",
   "html_of_class_type_param_expr_list",
   "html_of_class_type_kind",
   "html_of_class_type",
   "html_of_class_parameter_list",
   "html_of_class_kind",
   "html_of_class_element",
   "html_of_class_comment",
   "html_of_class",
   "html_of_attribute",
   "html_of_Module_list",
   "html_of_Index_list",
   "generate_values_index",
   "generate_types_index",
   "generate_modules_index",
   "generate_module_types_index",
   "generate_methods_index",
   "generate_inheritance_info",
   "generate_index",
   "generate_for_module_type",
   "generate_for_module",
   "generate_for_class_type",
   "generate_for_class",
   "generate_extensions_index",
   "generate_exceptions_index",
   "generate_elements_index",
   "generate_elements",
   "generate_classes_index",
   "generate_class_types_index",
   "generate_class_type_inheritance_info",
   "generate_class_inheritance_info",
   "generate_attributes_index",
   "generate",
   "escape",
   "create_title_label",
   "create_fully_qualified_module_idents_links",
   "create_fully_qualified_idents_links",
   "constructor",
   "character_encoding"];

var
 shared$5=
  [0,
   "html_of_author_list",
   "html_of_before",
   "html_of_custom",
   "html_of_info",
   "html_of_info_first_sentence",
   "html_of_raised_exceptions",
   "html_of_return_opt",
   "html_of_see",
   "html_of_sees",
   "html_of_since_opt",
   "html_of_version_opt"];

var shared$6=[0,"tag_functions"];

var
 shared$7=
  [0,
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
   "index_values",
   "index_types",
   "index_modules",
   "index_module_types",
   "index_methods",
   "index_extensions",
   "index_exceptions",
   "index_classes",
   "index_class_types",
   "index_attributes",
   "html_of_info_first_sentence"];

var
 shared$8=
  [0,
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
   "label_of_text",
   "keep_alpha_num",
   "index_values",
   "index_types",
   "index_modules",
   "index_module_types",
   "index_methods",
   "index_extensions",
   "index_exceptions",
   "index_classes",
   "index_class_types",
   "index_attributes",
   "html_of_text_element",
   "html_of_text",
   "html_of_info_first_sentence",
   "html_of_custom_text",
   "html_of_code",
   "html_of_Verbatim",
   "html_of_Title",
   "html_of_Target",
   "html_of_Superscript",
   "html_of_Subscript",
   "html_of_Right",
   "html_of_Ref",
   "html_of_Raw",
   "html_of_Newline",
   "html_of_Module_list",
   "html_of_List",
   "html_of_Link",
   "html_of_Left",
   "html_of_Latex",
   "html_of_Italic",
   "html_of_Index_list",
   "html_of_Enum",
   "html_of_Emphasize",
   "html_of_CodePre",
   "html_of_Code",
   "html_of_Center",
   "html_of_Bold",
   "html_of_Block",
   "escape",
   "create_title_label"];

var
 shared$9=
  [0,
   "create_title_label",
   "escape",
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
   "html_of_code",
   "html_of_custom_text",
   "html_of_text",
   "html_of_text_element",
   "keep_alpha_num",
   "label_of_text"];

var with_parameter_list=[0,/* false */0];

var css_style=[0,/* None */0];

var index_only=[0,/* false */0];

var colorize_code=[0,/* false */0];

var html_short_functors=[0,/* false */0];

var charset=[0,"iso-8859-1"];

var mark_type="TYPE";

var mark_type_elt="TYPEELT";

var mark_function="FUN";

var mark_extension="EXTENSION";

var mark_exception="EXCEPTION";

var mark_value="VAL";

var mark_attribute="ATT";

var mark_method="METHOD";

var code_prefix="code_";

var type_prefix="type_";

var
 html_files=
  function(name)
   {try
     {var i=$$String["rindex"](name,46);
      
      var match=name[i+1];
      
      if(25<-65+match>>>0){var qual="-c";}else{var qual="";}
      }
    catch(exn){if(exn=Not_found){var qual="";}else{throw exn;}}
    
    var prefix=Pervasives["^"](name,qual);
    
    var html_file=Pervasives["^"](prefix,".html");
    
    var html_frame_file=Pervasives["^"](prefix,"-frame.html");
    
    return /* tuple */[0,html_file,html_frame_file];
    };

var
 target=
  function(pref,simple_name){return Pervasives["^"](pref,simple_name);};

var
 complete_target=
  function(pref,complete_name)
   {var simple_name=Odoc_info["Name"][1](complete_name);
    
    var s=Odoc_info["Name"][5](complete_name);
    
    if(CamlPrimtivie["caml_string_equal"](s,""))
     {var module_name=simple_name;}
    else
     {var module_name=s;}
    
    var match=html_files(module_name);
    
    return Pervasives["^"]
            (match[1],Pervasives["^"]("#",target(pref,simple_name)));
    };

var
 type_target=
  function(t){return target(mark_type,Odoc_info["Name"][1](t[1]));};

var
 const_target=
  function(t,f)
   {var
     name=
      Printf["sprintf"]
       ([/* Format */0,
         [/* String */2,
          /* No_padding */0,
          [/* Char_literal */12,
           46,
           [/* String */2,/* No_padding */0,/* End_of_format */0]]],
         "%s.%s"],
        Odoc_info["Name"][1](t[1]),
        f[1]);
    
    return target(mark_type_elt,name);
    };

var
 recfield_target=
  function(t,f)
   {return target
            (mark_type_elt,
             Printf["sprintf"]
              ([/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,
                  46,
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                "%s.%s"],
               Odoc_info["Name"][1](t[1]),
               f[1]));
    };

var
 objfield_target=
  function(t,f)
   {return target
            (mark_type_elt,
             Printf["sprintf"]
              ([/* Format */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,
                  46,
                  [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                "%s.%s"],
               Odoc_info["Name"][1](t[1]),
               f[1]));
    };

var complete_type_target=function(t){return complete_target(mark_type,t[1]);};

var
 complete_recfield_target=
  function(name)
   {var typ=Odoc_info["Name"][5](name);
    
    var field=Odoc_info["Name"][1](name);
    
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,
                46,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s.%s"],
             complete_target(mark_type_elt,typ),
             field);
    };

var
 extension_target=
  function(x){return target(mark_extension,Odoc_info["Name"][1](x[1]));};

var
 complete_extension_target=
  function(x){return complete_target(mark_extension,x[1]);};

var
 exception_target=
  function(e){return target(mark_exception,Odoc_info["Name"][1](e[1]));};

var
 complete_exception_target=
  function(e){return complete_target(mark_exception,e[1]);};

var
 value_target=
  function(v){return target(mark_value,Odoc_info["Name"][1](v[1]));};

var
 subst_infix_symbols=
  function(name)
   {var len=name["length"];
    
    var buf=Buffer["create"](len);
    
    var ch=function(c){return Buffer["add_char"](buf,c);};
    
    var st=function(s){return Buffer["add_string"](buf,s);};
    
    for(var i=0;i<=len-1;i++)
     {var c=name[i];
      
      var exit;
      
      if(c>=95)
       {var switcher=-124+c;
        
        if(2<switcher>>>0)
         {exit=264;}
        else
         {switch(switcher)
           {case 0:st("_pipe_");case 1:exit=264;case 2:st("_tilde_")}
          }
        }
      else
       {if(c>=33)
         {switch(-33+c)
           {case 0:st("_bang_");
            case 1:exit=264;
            case 2:exit=264;
            case 3:st("_dollar_");
            case 4:st("_percent_");
            case 5:st("_amp_");
            case 6:exit=264;
            case 7:exit=264;
            case 8:exit=264;
            case 9:st("_star_");
            case 10:st("_plus_");
            case 11:exit=264;
            case 12:st("_minus_");
            case 13:exit=264;
            case 14:st("_slash_");
            case 15:exit=264;
            case 16:exit=264;
            case 17:exit=264;
            case 18:exit=264;
            case 19:exit=264;
            case 20:exit=264;
            case 21:exit=264;
            case 22:exit=264;
            case 23:exit=264;
            case 24:exit=264;
            case 25:st("_column_");
            case 26:exit=264;
            case 27:st("_lt_");
            case 28:st("_equal_");
            case 29:st("_gt_");
            case 30:st("_questionmark_");
            case 31:st("_at_");
            case 32:exit=264;
            case 33:exit=264;
            case 34:exit=264;
            case 35:exit=264;
            case 36:exit=264;
            case 37:exit=264;
            case 38:exit=264;
            case 39:exit=264;
            case 40:exit=264;
            case 41:exit=264;
            case 42:exit=264;
            case 43:exit=264;
            case 44:exit=264;
            case 45:exit=264;
            case 46:exit=264;
            case 47:exit=264;
            case 48:exit=264;
            case 49:exit=264;
            case 50:exit=264;
            case 51:exit=264;
            case 52:exit=264;
            case 53:exit=264;
            case 54:exit=264;
            case 55:exit=264;
            case 56:exit=264;
            case 57:exit=264;
            case 58:exit=264;
            case 59:exit=264;
            case 60:exit=264;
            case 61:st("_exp_")
            }
          }
        else
         {exit=264;}
        }
      
      switch(exit){case 264:ch(c)}
      }
    
    return Buffer["contents"](buf);
    };

var
 complete_value_target=
  function(v){return complete_target(mark_value,v[1]);};

var
 file_code_value_complete_target=
  function(v)
   {return Pervasives["^"]
            (code_prefix,
             Pervasives["^"]
              (mark_value,Pervasives["^"](subst_infix_symbols(v[1]),".html")));
    };

var
 attribute_target=
  function(a){return target(mark_attribute,Odoc_info["Name"][1](a[1][1]));};

var
 complete_attribute_target=
  function(a){return complete_target(mark_attribute,a[1][1]);};

var
 file_code_attribute_complete_target=
  function(a)
   {return Pervasives["^"]
            (code_prefix,
             Pervasives["^"](mark_attribute,Pervasives["^"](a[1][1],".html")));
    };

var
 method_target=
  function(m){return target(mark_method,Odoc_info["Name"][1](m[1][1]));};

var
 complete_method_target=
  function(m){return complete_target(mark_method,m[1][1]);};

var
 file_code_method_complete_target=
  function(m)
   {return Pervasives["^"]
            (code_prefix,
             Pervasives["^"](mark_method,Pervasives["^"](m[1][1],".html")));
    };

var label_target=function(l){return target("",l);};

var complete_label_target=function(l){return complete_target("",l);};

var
 file_type_module_complete_target=
  function(name)
   {return Pervasives["^"](type_prefix,Pervasives["^"](name,".html"));};

var
 file_code_module_complete_target=
  function(name)
   {return Pervasives["^"](code_prefix,Pervasives["^"](name,".html"));};

var
 file_type_class_complete_target=
  function(name)
   {return Pervasives["^"](type_prefix,Pervasives["^"](name,".html"));};

var
 Naming=
  [0,
   mark_type,
   mark_type_elt,
   mark_function,
   mark_extension,
   mark_exception,
   mark_value,
   mark_attribute,
   mark_method,
   code_prefix,
   type_prefix,
   html_files,
   target,
   complete_target,
   type_target,
   const_target,
   recfield_target,
   objfield_target,
   complete_type_target,
   complete_recfield_target,
   complete_recfield_target,
   extension_target,
   complete_extension_target,
   exception_target,
   complete_exception_target,
   value_target,
   subst_infix_symbols,
   complete_value_target,
   file_code_value_complete_target,
   attribute_target,
   complete_attribute_target,
   file_code_attribute_complete_target,
   method_target,
   complete_method_target,
   file_code_method_complete_target,
   label_target,
   complete_label_target,
   file_type_module_complete_target,
   file_code_module_complete_target,
   file_type_class_complete_target];

var compare=function(x,y){return CamlPrimtivie["caml_string_compare"](x,y);};

var StringSet=Set["Make"]([0,compare]);

var
 ocaml_code_init=
  function($$class)
   {var
     html_of_code=
      CamlinternalOO["get_method_label"]($$class,"html_of_code");
    
    CamlinternalOO["set_method"]
     ($$class,
      html_of_code,
      function(self$neg1,b,$staropt$star,code)
       {if($staropt$star)
         {var with_pre=$staropt$star[1];}
        else
         {var with_pre=/* true */1;}
        
        return Odoc_ocamlhtml["html_of_code"](b,/* Some */[0,with_pre],code);
        });
    return function(env,$$self)
     {return CamlinternalOO["create_object_opt"]($$self,$$class);};
    };

var ocaml_code=CamlinternalOO["make_class"](shared$2,ocaml_code_init);

var new_buf=function(param){return Buffer["create"](1024);};

var bp=Printf["bprintf"];

var bs=Buffer["add_string"];

var
 text=
  [0,
   0,
   function($$class)
    {var ids=CamlinternalOO["get_method_labels"]($$class,shared$8);
     
     var list_values=ids[1];
     
     var list_types=ids[2];
     
     var list_modules=ids[3];
     
     var list_module_types=ids[4];
     
     var list_methods=ids[5];
     
     var list_extensions=ids[6];
     
     var list_exceptions=ids[7];
     
     var list_classes=ids[8];
     
     var list_class_types=ids[9];
     
     var list_attributes=ids[10];
     
     var label_of_text=ids[11];
     
     var keep_alpha_num=ids[12];
     
     var index_values=ids[13];
     
     var index_types=ids[14];
     
     var index_modules=ids[15];
     
     var index_module_types=ids[16];
     
     var index_methods=ids[17];
     
     var index_extensions=ids[18];
     
     var index_exceptions=ids[19];
     
     var index_classes=ids[20];
     
     var index_class_types=ids[21];
     
     var index_attributes=ids[22];
     
     var html_of_text_element=ids[23];
     
     var html_of_text=ids[24];
     
     var html_of_info_first_sentence=ids[25];
     
     var html_of_custom_text=ids[26];
     
     var html_of_code=ids[27];
     
     var html_of_Verbatim=ids[28];
     
     var html_of_Title=ids[29];
     
     var html_of_Target=ids[30];
     
     var html_of_Superscript=ids[31];
     
     var html_of_Subscript=ids[32];
     
     var html_of_Right=ids[33];
     
     var html_of_Ref=ids[34];
     
     var html_of_Raw=ids[35];
     
     var html_of_Newline=ids[36];
     
     var html_of_Module_list=ids[37];
     
     var html_of_List=ids[38];
     
     var html_of_Link=ids[39];
     
     var html_of_Left=ids[40];
     
     var html_of_Latex=ids[41];
     
     var html_of_Italic=ids[42];
     
     var html_of_Index_list=ids[43];
     
     var html_of_Enum=ids[44];
     
     var html_of_Emphasize=ids[45];
     
     var html_of_CodePre=ids[46];
     
     var html_of_Code=ids[47];
     
     var html_of_Center=ids[48];
     
     var html_of_Bold=ids[49];
     
     var html_of_Block=ids[50];
     
     var $$escape=ids[51];
     
     var create_title_label=ids[52];
     
     var inh=CamlinternalOO["inherits"]($$class,0,0,shared$2,ocaml_code,1);
     
     var obj_init=inh[1];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        $$escape,
        function(self$neg2,s){return Odoc_ocamlhtml["escape_base"](s);},
        keep_alpha_num,
        function(self$neg2,s)
         {var len=s["length"];
          
          var buf=Buffer["create"](len);
          
          for(var i=0;i<=len-1;i++)
           {var match=s[i];
            
            var exit;
            
            var switcher=-48+match;
            
            if(42<switcher>>>0)
             {if(25<-49+switcher>>>0){exit=237;}else{exit=236;}}
            else
             {if(6<-10+switcher>>>0){exit=236;}else{exit=237;}}
            
            switch(exit){case 237:case 236:Buffer["add_char"](buf,s[i])}
            }
          
          return Buffer["contents"](buf);
          },
        label_of_text,
        function(self$neg2,t)
         {var t2=Odoc_info["first_sentence_of_text"](t);
          
          var s=Odoc_info["string_of_text"](t2);
          
          "(sendself self-2/1476 keep_alpha_num/1416 s/1479)";
          },
        create_title_label,
        function(self$neg2,param)
         {var label_opt=param[2];
          
          if(label_opt)
           {return label_opt[1];}
          else
           {"(sendself self-2/1482 label_of_text/1417 (field 2 param/3318))";
            return Printf["sprintf"]
                    ([/* Format */0,
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* Char_literal */12,
                        95,
                        [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                      "%d_%s"],
                     param[1],
                     0);
            }
          },
        html_of_text,
        function(self$neg2,b,t)
         {"(sendself self-2/1488 html_of_text_element/1420 b/1489)";
          return List["iter"](0,t);
          },
        html_of_text_element,
        function(self$neg2,b,txt)
         {if(typeof txt=="number")
           {switch(txt)
             {case 0:"(sendself self-2/1492 html_of_Newline/1435 b/1493)";
              case 1:"(sendself self-2/1492 html_of_Index_list/1445 b/1493)";
              }}
          else
           {switch(txt[0])
             {case 0:
               "(sendself self-2/1492 html_of_Raw/1423 b/1493 (field 0 txt/1494))";
               
              case 1:
               "(sendself self-2/1492 html_of_Code/1424 b/1493 (field 0 txt/1494))";
               
              case 2:
               "(sendself self-2/1492 html_of_CodePre/1425 b/1493 (field 0 txt/1494))";
               
              case 3:
               "(sendself self-2/1492 html_of_Verbatim/1426 b/1493 (field 0 txt/1494))";
               
              case 4:
               "(sendself self-2/1492 html_of_Bold/1427 b/1493 (field 0 txt/1494))";
               
              case 5:
               "(sendself self-2/1492 html_of_Italic/1428 b/1493 (field 0 txt/1494))";
               
              case 6:
               "(sendself self-2/1492 html_of_Emphasize/1429 b/1493 (field 0 txt/1494))";
               
              case 7:
               "(sendself self-2/1492 html_of_Center/1430 b/1493 (field 0 txt/1494))";
               
              case 8:
               "(sendself self-2/1492 html_of_Left/1431 b/1493 (field 0 txt/1494))";
               
              case 9:
               "(sendself self-2/1492 html_of_Right/1432 b/1493 (field 0 txt/1494))";
               
              case 10:
               "(sendself self-2/1492 html_of_List/1433 b/1493 (field 0 txt/1494))";
               
              case 11:
               "(sendself self-2/1492 html_of_Enum/1434 b/1493 (field 0 txt/1494))";
               
              case 12:
               "(sendself self-2/1492 html_of_Block/1436 b/1493 (field 0 txt/1494))";
               
              case 13:
               "(sendself self-2/1492 html_of_Title/1437 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494) (field 2 txt/1494))";
               
              case 14:
               "(sendself self-2/1492 html_of_Latex/1438 b/1493 (field 0 txt/1494))";
               
              case 15:
               "(sendself self-2/1492 html_of_Link/1439 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494))";
               
              case 16:
               "(sendself self-2/1492 html_of_Ref/1440 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494) (field 2 txt/1494))";
               
              case 17:
               "(sendself self-2/1492 html_of_Superscript/1441 b/1493 (field 0 txt/1494))";
               
              case 18:
               "(sendself self-2/1492 html_of_Subscript/1442 b/1493 (field 0 txt/1494))";
               
              case 19:
               "(sendself self-2/1492 html_of_Module_list/1444 b/1493 (field 0 txt/1494))";
               
              case 20:
               "(sendself self-2/1492 html_of_custom_text/1421 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494))";
               
              case 21:
               "(sendself self-2/1492 html_of_Target/1422 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494))";
               
              }}
          },
        html_of_custom_text,
        function(self$neg2,b,s,t){return /* () */0;},
        html_of_Target,
        function(self$neg2,b,target,code)
         {if
           (CamlPrimtivie["caml_string_equal"]
             ($$String["lowercase"](target),"html"))
           {return bs(b,code);}
          else
           {return /* () */0;}
          },
        html_of_Raw,
        function(self$neg2,b,s)
         {"(sendself self-2/1535 escape/1415 s/1537)";return bs(b,0);},
        html_of_Code,
        function(self$neg2,b,s)
         {if(colorize_code[1])
           {"(sendself self-2/1539 html_of_code/1542 b/1540 [0: 0a] s/1541)";}
          else
           {bs(b,'<code class="');
            bs(b,Odoc_ocamlhtml["code_class"]);
            bs(b,'">');
            "(sendself self-2/1539 escape/1415 s/1541)";
            bs(b,0);
            return bs(b,"</code>");
            }
          },
        html_of_CodePre,
        function(self$neg2)
         {var
           remove_useless_newlines=
            function(s)
             {var len=s["length"];
              
              var
               iter_first=
                function(n)
                 {if(n>=len)
                   {return /* None */0;}
                  else
                   {var match=s[n];
                    
                    if(match!=10)
                     {return /* Some */[0,n];}
                    else
                     {return iter_first(n+1);}
                    }
                  };
              
              var match=iter_first(0);
              
              if(match)
               {var first=match[1];
                
                var
                 iter_last=
                  function(n)
                   {if(n<=first)
                     {return /* None */0;}
                    else
                     {var match$1=s[n];
                      
                      if(match$1!=9)
                       {return /* Some */[0,n];}
                      else
                       {return iter_last(n-1);}
                      }
                    };
                
                var match$1=iter_last(len-1);
                
                if(match$1)
                 {return $$String["sub"](s,first,match$1[1]-first+1);}
                else
                 {return $$String["sub"](s,first,1);}
                }
              else
               {return "";}
              };
          
          return function(b,s)
           {if(colorize_code[1])
             {bs(b,'<pre class="codepre">');
              "(sendself self-2/1544 html_of_code/1542 b/1554 0a\n  (apply remove_useless_newlines/1545 s/1555))";
              
              return bs(b,"</pre>");
              }
            else
             {bs(b,'<pre class="codepre"><code class="');
              bs(b,Odoc_ocamlhtml["code_class"]);
              bs(b,'">');
              "(sendself self-2/1544 escape/1415\n  (apply remove_useless_newlines/1545 s/1555))";
              bs(b,0);
              return bs(b,"</code></pre>");
              }
            };
          },
        html_of_Verbatim,
        function(self$neg2,b,s)
         {bs(b,'<pre class="verbatim">');
          "(sendself self-2/1557 escape/1415 s/1559)";
          bs(b,0);
          return bs(b,"</pre>");
          },
        html_of_Bold,
        function(self$neg2,b,t)
         {bs(b,"<b>");
          "(sendself self-2/1561 html_of_text/1419 b/1562 t/1563)";
          
          return bs(b,"</b>");
          },
        html_of_Italic,
        function(self$neg2,b,t)
         {bs(b,"<i>");
          "(sendself self-2/1565 html_of_text/1419 b/1566 t/1567)";
          
          return bs(b,"</i>");
          },
        html_of_Emphasize,
        function(self$neg2,b,t)
         {bs(b,"<em>");
          "(sendself self-2/1569 html_of_text/1419 b/1570 t/1571)";
          
          return bs(b,"</em>");
          },
        html_of_Center,
        function(self$neg2,b,t)
         {bs(b,"<center>");
          "(sendself self-2/1573 html_of_text/1419 b/1574 t/1575)";
          
          return bs(b,"</center>");
          },
        html_of_Left,
        function(self$neg2,b,t)
         {bs(b,"<div align=left>");
          "(sendself self-2/1577 html_of_text/1419 b/1578 t/1579)";
          
          return bs(b,"</div>");
          },
        html_of_Right,
        function(self$neg2,b,t)
         {bs(b,"<div align=right>");
          "(sendself self-2/1581 html_of_text/1419 b/1582 t/1583)";
          
          return bs(b,"</div>");
          },
        html_of_List,
        function(self$neg2,b,tl)
         {bs(b,"<ul>\n");
          List["iter"]
           (function(t)
             {bs(b,"<li>");
              "(sendself self-2/1585 html_of_text/1419 b/1586 t/1588)";
              
              return bs(b,"</li>\n");
              },
            tl);
          return bs(b,"</ul>\n");
          },
        html_of_Enum,
        function(self$neg2,b,tl)
         {bs(b,"<OL>\n");
          List["iter"]
           (function(t)
             {bs(b,"<li>");
              "(sendself self-2/1590 html_of_text/1419 b/1591 t/1593)";
              
              return bs(b,"</li>\n");
              },
            tl);
          return bs(b,"</OL>\n");
          },
        html_of_Newline,
        function(self$neg2,b){return bs(b,"\n<p>\n");},
        html_of_Block,
        function(self$neg2,b,t)
         {bs(b,"<blockquote>\n");
          "(sendself self-2/1598 html_of_text/1419 b/1599 t/1600)";
          
          return bs(b,"</blockquote>\n");
          },
        html_of_Title,
        function(self$neg2,b,n,label_opt,t)
         {"(sendself self-2/1602 create_title_label/1418\n  (makeblock 0 n/1604 label_opt/1605 t/1606))";
          
          if(n>6)
           {var
             match=
              /* tuple */[0,
               Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   'div class="h',
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* Char_literal */12,34,/* End_of_format */0]]],
                  'div class="h%d"'],
                 n),
               "div"];
            }
          else
           {var
             t$1=
              Printf["sprintf"]
               ([/* Format */0,
                 [/* Char_literal */12,
                  104,
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   /* End_of_format */0]],
                 "h%d"],
                n);
            
            var match=/* tuple */[0,t$1,t$1];
            }
          
          bs(b,"<");
          bp
           (b,
            [/* Format */0,
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,
               ' id="',
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,34,/* End_of_format */0]]]],
             '%s id="%s"'],
            match[1],
            Naming[35](label1));
          bs(b,">");
          "(sendself self-2/1602 html_of_text/1419 b/1603 t/1606)";
          
          bs(b,"</");
          bs(b,match[2]);
          return bs(b,">");
          },
        html_of_Latex,
        function(self$neg2,b,param){return /* () */0;},
        html_of_Link,
        function(self$neg2,b,s,t)
         {bs(b,'<a href="');
          bs(b,s);
          bs(b,'">');
          "(sendself self-2/1615 html_of_text/1419 b/1616 t/1618)";
          
          return bs(b,"</a>");
          },
        html_of_Ref,
        function(self$neg2,b,name,ref_opt,text_opt)
         {if(ref_opt)
           {var kind=ref_opt[1];
            
            var
             h=
              function(name)
               {return /* Code */[1,Odoc_info["use_hidden_modules"](name)];};
            
            var exit;
            
            if(typeof kind==="number")
             {switch(kind)
               {case 0:exit=223;
                case 1:exit=223;
                case 2:exit=223;
                case 3:exit=223;
                case 4:
                 var match=/* tuple */[0,Naming[13](Naming[6],name),h(name)];
                case 5:
                 var match=/* tuple */[0,Naming[13](Naming[1],name),h(name)];
                case 6:
                 var match=/* tuple */[0,Naming[13](Naming[4],name),h(name)];
                case 7:
                 var match=/* tuple */[0,Naming[13](Naming[5],name),h(name)];
                case 8:
                 var match=/* tuple */[0,Naming[13](Naming[7],name),h(name)];
                case 9:
                 var match=/* tuple */[0,Naming[13](Naming[8],name),h(name)];
                case 10:var match=/* tuple */[0,Naming[19](name),h(name)];
                case 11:var match=/* tuple */[0,Naming[20](name),h(name)];
                }
              }
            else
             {var
               match=
                /* tuple */[0,
                 Naming[36](name),
                 /* Italic */[5,
                  /* :: */[0,
                   /* Raw */[0,Odoc_info["string_of_text"](kind[1])],
                   /* [] */0]]];
              }
            
            switch(exit)
             {case 223:
               var match$1=Naming[11](name);
               
               var match=/* tuple */[0,match$1[1],h(name)];
               
              }
            
            if(text_opt)
             {var text$1=text_opt[1];}
            else
             {var text$1=/* :: */[0,match[2],/* [] */0];}
            
            bs(b,Pervasives["^"]('<a href="',Pervasives["^"](match[1],'">')));
            "(sendself self-2/1620 html_of_text/1419 b/1621 text/1634)";
            
            return bs(b,"</a>");
            }
          else
           {if(text_opt)
             {var text$2=text_opt[1];}
            else
             {var text$2=/* :: */[0,/* Code */[1,name],/* [] */0];}
            
            "(sendself self-2/1620 html_of_text/1419 b/1621 text/1626)";
            }
          },
        html_of_Superscript,
        function(self$neg2,b,t)
         {bs(b,'<sup class="superscript">');
          "(sendself self-2/1637 html_of_text/1419 b/1638 t/1639)";
          
          return bs(b,"</sup>");
          },
        html_of_Subscript,
        function(self$neg2,b,t)
         {bs(b,'<sub class="subscript">');
          "(sendself self-2/1641 html_of_text/1419 b/1642 t/1643)";
          
          return bs(b,"</sub>");
          },
        html_of_Module_list,
        function(self$neg2,b,l)
         {bs(b,'<br>\n<table class="indextable">\n');
          List["iter"]
           (function(name)
             {bs(b,'<tr><td class="module">');
              try
               {"(sendself self-2/1645 list_modules/1462)";
                var
                 m=
                  List["find"]
                   (function(m)
                     {return CamlPrimtivie["caml_string_equal"](m[1],name);},
                    0);
                
                var match=Naming[11](m[1]);
                
                bp
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,
                    '<a href="',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '">',
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,"</a></td>",/* End_of_format */0]]]]],
                   '<a href="%s">%s</a></td>'],
                  match[1],
                  m[1]);
                bs(b,"<td>");
                "(sendself self-2/1645 html_of_info_first_sentence/1443 b/1646\n  (field 2 m/1649))";
                }
              catch(exn)
               {if(exn=Not_found)
                 {Odoc_global["pwarning"]
                   (Odoc_messages["cross_module_not_found"](name)),
                  bp
                   (b,
                    [/* Format */0,
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,"</td><td>",/* End_of_format */0]],
                     "%s</td><td>"],
                    name)}
                else
                 {throw exn;}
                }
              
              return bs(b,"</td></tr>\n");
              },
            l);
          return bs(b,"</table>\n");
          },
        html_of_Index_list,
        function(self$neg2,b)
         {var
           index_if_not_empty=
            function(l,url,m)
             {if(l)
               {return bp
                        (b,
                         [/* Format */0,
                          [/* String_literal */11,
                           '<li><a href="',
                           [/* String */2,
                            /* No_padding */0,
                            [/* String_literal */11,
                             '">',
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,"</a></li>\n",/* End_of_format */0]]]]],
                          '<li><a href="%s">%s</a></li>\n'],
                         url,
                         m);
                }
              else
               {return /* () */0;}
              };
          
          bp
           (b,
            [/* Format */0,
             [/* String_literal */11,
              '<ul class="indexlist">\n',
              /* End_of_format */0],
             '<ul class="indexlist">\n']);
          "(sendself self-2/1653 list_types/1446)";
          "(sendself self-2/1653 index_types/1447)";
          index_if_not_empty(0,0,Odoc_messages["index_of_types"]);
          "(sendself self-2/1653 list_extensions/1448)";
          "(sendself self-2/1653 index_extensions/1449)";
          index_if_not_empty(0,0,Odoc_messages["index_of_extensions"]);
          "(sendself self-2/1653 list_exceptions/1450)";
          "(sendself self-2/1653 index_exceptions/1451)";
          index_if_not_empty(0,0,Odoc_messages["index_of_exceptions"]);
          "(sendself self-2/1653 list_values/1452)";
          "(sendself self-2/1653 index_values/1453)";
          index_if_not_empty(0,0,Odoc_messages["index_of_values"]);
          "(sendself self-2/1653 list_attributes/1454)";
          "(sendself self-2/1653 index_attributes/1455)";
          index_if_not_empty(0,0,Odoc_messages["index_of_attributes"]);
          "(sendself self-2/1653 list_methods/1456)";
          "(sendself self-2/1653 index_methods/1457)";
          index_if_not_empty(0,0,Odoc_messages["index_of_methods"]);
          "(sendself self-2/1653 list_classes/1458)";
          "(sendself self-2/1653 index_classes/1459)";
          index_if_not_empty(0,0,Odoc_messages["index_of_classes"]);
          "(sendself self-2/1653 list_class_types/1460)";
          "(sendself self-2/1653 index_class_types/1461)";
          index_if_not_empty(0,0,Odoc_messages["index_of_class_types"]);
          "(sendself self-2/1653 list_modules/1462)";
          "(sendself self-2/1653 index_modules/1463)";
          index_if_not_empty(0,0,Odoc_messages["index_of_modules"]);
          "(sendself self-2/1653 list_module_types/1464)";
          "(sendself self-2/1653 index_module_types/1465)";
          index_if_not_empty(0,0,Odoc_messages["index_of_module_types"]);
          return bp
                  (b,
                   [/* Format */0,
                    [/* String_literal */11,"</ul>\n",/* End_of_format */0],
                    "</ul>\n"]);
          }]);
     return function(env,$$self)
      {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
       
       obj_init($$self$1);
       return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
       };
     },
   0,
   0];

var
 info=
  [0,
   0,
   function($$class)
    {var
      ids=
       CamlinternalOO["new_methods_variables"]($$class,shared$1,shared$6);
     
     var html_of_version_opt=ids[1];
     
     var html_of_text=ids[2];
     
     var html_of_since_opt=ids[3];
     
     var html_of_sees=ids[4];
     
     var html_of_see=ids[5];
     
     var html_of_return_opt=ids[6];
     
     var html_of_raised_exceptions=ids[7];
     
     var html_of_info_first_sentence=ids[8];
     
     var html_of_info=ids[9];
     
     var html_of_custom=ids[10];
     
     var html_of_before=ids[11];
     
     var html_of_author_list=ids[12];
     
     var tag_functions=ids[13];
     
     CamlinternalOO["set_methods"]
      ($$class,
       [0,
        html_of_author_list,
        function(self$neg3,b,l)
         {if(l)
           {bp
             (b,
              [/* Format */0,
               [/* String_literal */11,
                "<b>",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,":</b> ",/* End_of_format */0]]],
               "<b>%s:</b> "],
              Odoc_messages["authors"]);
            '(sendself self-3/1680 html_of_text/1667 b/1681\n  (makeblock 0 (makeblock 0 (apply (field 6 (global String!)) ", " l/1682))\n    0a))';
            
            return bs(b,"<br>\n");
            }
          else
           {return /* () */0;}
          },
        html_of_version_opt,
        function(self$neg3,b,v_opt)
         {if(v_opt)
           {bp
             (b,
              [/* Format */0,
               [/* String_literal */11,
                "<b>",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,":</b> ",/* End_of_format */0]]],
               "<b>%s:</b> "],
              Odoc_messages["version"]);
            "(sendself self-3/1684 html_of_text/1667 b/1685\n  (makeblock 0 (makeblock 0 (field 0 v_opt/1686)) 0a))";
            
            return bs(b,"<br>\n");
            }
          else
           {return /* () */0;}
          },
        html_of_since_opt,
        function(self$neg3,b,s_opt)
         {if(s_opt)
           {bp
             (b,
              [/* Format */0,
               [/* String_literal */11,
                "<b>",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,"</b> ",/* End_of_format */0]]],
               "<b>%s</b> "],
              Odoc_messages["since"]);
            "(sendself self-3/1689 html_of_text/1667 b/1690\n  (makeblock 0 (makeblock 0 (field 0 s_opt/1691)) 0a))";
            
            return bs(b,"<br>\n");
            }
          else
           {return /* () */0;}
          },
        html_of_before,
        function(self$neg3,b,l)
         {var
           f=
            function(param)
             {bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  "<b>",
                  [/* String */2,
                   /* No_padding */0,
                   [/* Char_literal */12,32,/* End_of_format */0]]],
                 "<b>%s "],
                Odoc_messages["before"]);
              "(sendself self-3/1694 html_of_text/1667 b/1695\n  (makeblock 0 (makeblock 0 (field 0 param/3245)) 0a))";
              
              bs(b," </b> ");
              "(sendself self-3/1694 html_of_text/1667 b/1695 (field 1 param/3245))";
              
              return bs(b,"<br>\n");
              };
          
          return List["iter"](f,l);
          },
        html_of_raised_exceptions,
        function(self$neg3,b,l)
         {if(l)
           {if(l[2])
             {bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  "<b>",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,"</b><ul>",/* End_of_format */0]]],
                 "<b>%s</b><ul>"],
                Odoc_messages["raises"]);
              List["iter"]
               (function(param)
                 {bp
                   (b,
                    [/* Format */0,
                     [/* String_literal */11,
                      "<li><code>",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,"</code> ",/* End_of_format */0]]],
                     "<li><code>%s</code> "],
                    param[1]);
                  "(sendself self-3/1701 html_of_text/1667 b/1702 (field 1 param/3241))";
                  
                  return bs(b,"</li>\n");
                  },
                l);
              return bs(b,"</ul>\n");
              }
            else
             {var match=l[1];
              
              bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  "<b>",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    "</b> <code>",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,"</code> ",/* End_of_format */0]]]]],
                 "<b>%s</b> <code>%s</code> "],
                Odoc_messages["raises"],
                match[1]);
              "(sendself self-3/1701 html_of_text/1667 b/1702 (field 1 match/3242))";
              
              return bs(b,"<br>\n");
              }
            }
          else
           {return /* () */0;}
          },
        html_of_see,
        function(self$neg3,b,param)
         {var t=param[2];
          
          var see_ref=param[1];
          
          switch(see_ref[0])
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
          
          "(sendself self-3/1709 html_of_text/1667 b/1710 t_ref/1713)";
          },
        html_of_sees,
        function(self$neg3,b,l)
         {if(l)
           {if(l[2])
             {bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  "<b>",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,"</b><ul>",/* End_of_format */0]]],
                 "<b>%s</b><ul>"],
                Odoc_messages["see_also"]);
              List["iter"]
               (function(see)
                 {bs(b,"<li>");
                  "(sendself self-3/1718 html_of_see/1673 b/1719 see/1722)";
                  
                  return bs(b,"</li>\n");
                  },
                l);
              return bs(b,"</ul>\n");
              }
            else
             {bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  "<b>",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,"</b> ",/* End_of_format */0]]],
                 "<b>%s</b> "],
                Odoc_messages["see_also"]);
              "(sendself self-3/1718 html_of_see/1673 b/1719 (field 0 l/1720))";
              
              return bs(b,"<br>\n");
              }
            }
          else
           {return /* () */0;}
          },
        html_of_return_opt,
        function(self$neg3,b,return_opt)
         {if(return_opt)
           {bp
             (b,
              [/* Format */0,
               [/* String_literal */11,
                "<b>",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,"</b> ",/* End_of_format */0]]],
               "<b>%s</b> "],
              Odoc_messages["returns"]);
            "(sendself self-3/1724 html_of_text/1667 b/1725 (field 0 return_opt/1726))";
            
            return bs(b,"<br>\n");
            }
          else
           {return /* () */0;}
          },
        html_of_custom,
        function(self$neg3,b,l)
         {return List["iter"]
                  (function(param)
                    {var tag=param[1];
                     
                     try
                      {var f=List["assoc"](tag,self$neg3[tag_functions]);
                       
                       return Buffer["add_string"](b,f(param[2]));
                       }
                     catch(exn)
                      {if(exn=Not_found)
                        {return Odoc_info["warning"]
                                 (Odoc_messages["tag_not_handled"](tag));
                         }
                       else
                        {throw exn;}
                       }
                     },
                   l);
          },
        html_of_info,
        function(self$neg3,$staropt$star,$staropt$star,b,info_opt)
         {if($staropt$star$1){var cls=$staropt$star$1[1];}else{var cls="";}
          
          if($staropt$star)
           {var indent=$staropt$star[1];}
          else
           {var indent=/* true */1;}
          
          if(info_opt)
           {var info$1=info_opt[1];
            
            var M=Odoc_info;
            
            if(indent)
             {bs
               (b,
                Pervasives["^"]
                 ('<div class="info ',Pervasives["^"](cls,'">\n')))}
            else
             {}
            
            var match=info$1[7];
            
            if(match)
             {bs(b,'<span class="warning">');
              bs(b,Odoc_messages["deprecated"]);
              bs(b,"</span>");
              "(sendself self-3/1736 html_of_text/1667 b/1743 (field 0 match/3225))";
              
              bs(b,"<br>\n")}
            else
             {}
            
            var match$1=info$1[1];
            
            if(match$1)
             {var d=match$1[1];
              
              if
               (CamlPrimtivie["caml_equal"]
                 (d,[/* :: */0,[/* Raw */0,""],/* [] */0]))
               {}
              else
               {"(sendself self-3/1736 html_of_text/1667 b/1743 d/1748)";
                
                bs(b,"<br>\n")}
              }
            else
             {}
            
            "(sendself self-3/1736 html_of_author_list/1668 b/1743 (field 1 info/1745))";
            
            "(sendself self-3/1736 html_of_version_opt/1669 b/1743 (field 2 info/1745))";
            
            "(sendself self-3/1736 html_of_before/1671 b/1743 (field 5 info/1745))";
            
            "(sendself self-3/1736 html_of_since_opt/1670 b/1743 (field 4 info/1745))";
            
            "(sendself self-3/1736 html_of_raised_exceptions/1672 b/1743\n  (field 8 info/1745))";
            
            "(sendself self-3/1736 html_of_return_opt/1675 b/1743 (field 9 info/1745))";
            
            "(sendself self-3/1736 html_of_sees/1674 b/1743 (field 3 info/1745))";
            
            "(sendself self-3/1736 html_of_custom/1676 b/1743 (field 10 info/1745))";
            
            if(indent){return bs(b,"</div>\n");}else{return 0;}
            }
          else
           {return /* () */0;}
          },
        html_of_info_first_sentence,
        function(self$neg3,b,info_opt)
         {if(info_opt)
           {var info$1=info_opt[1];
            
            var M=Odoc_info;
            
            var dep=info$1[7]!=/* None */0;
            
            bs(b,'<div class="info">\n');
            if(dep){bs(b,'<span class="deprecated">')}else{}
            
            var match=info$1[1];
            
            if(match)
             {var d=match[1];
              
              if
               (CamlPrimtivie["caml_equal"]
                 (d,[/* :: */0,[/* Raw */0,""],/* [] */0]))
               {}
              else
               {"(sendself self-3/1751 html_of_text/1667 b/1752\n  (apply (field 30 (global Odoc_info!))\n    (apply (field 28 (global Odoc_info!)) d/1757)))";
                
                bs(b,"\n")}
              }
            else
             {}
            
            if(dep){bs(b,"</span>")}else{}
            
            return bs(b,"</div>\n");
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

var opt=Odoc_info["apply_opt"];

var
 print_concat=
  function(b,sep,f)
   {var
     iter=
      function(param)
       {if(param)
         {var q=param[2];
          
          var c=param[1];
          
          if(q){f(c);bs(b,sep);return iter(q);}else{return f(c);}
          }
        else
         {return /* () */0;}
        };
    
    return iter;
    };

var
 newline_to_indented_br=
  function(s)
   {var len=s["length"];
    
    var b=Buffer["create"](len);
    
    for(var i=0;i<=len-1;i++)
     {var c=s[i];
      
      if(c!=10)
       {Buffer["add_char"](b,c)}
      else
       {Buffer["add_string"](b,"<br>     ")}
      }
    
    return Buffer["contents"](b);
    };

var
 html_init=
  function($$class)
   {var
     ids=
      CamlinternalOO["new_methods_variables"]($$class,shared$4,shared$3);
    
    var title=ids[1];
    
    var print_navbar=ids[2];
    
    var print_header=ids[3];
    
    var prepare_header=ids[4];
    
    var output_module_type=ids[5];
    
    var output_code=ids[6];
    
    var output_class_type=ids[7];
    
    var list_values=ids[8];
    
    var list_types=ids[9];
    
    var list_modules=ids[10];
    
    var list_module_types=ids[11];
    
    var list_methods=ids[12];
    
    var list_extensions=ids[13];
    
    var list_exceptions=ids[14];
    
    var list_classes=ids[15];
    
    var list_class_types=ids[16];
    
    var list_attributes=ids[17];
    
    var keyword=ids[18];
    
    var inner_title=ids[19];
    
    var init_style=ids[20];
    
    var index_values=ids[21];
    
    var index_types=ids[22];
    
    var index_prefix=ids[23];
    
    var index_modules=ids[24];
    
    var index_module_types=ids[25];
    
    var index_methods=ids[26];
    
    var index_extensions=ids[27];
    
    var index_exceptions=ids[28];
    
    var index_classes=ids[29];
    
    var index_class_types=ids[30];
    
    var index_attributes=ids[31];
    
    var index=ids[32];
    
    var html_sections_links=ids[33];
    
    var html_of_value=ids[34];
    
    var html_of_type_extension=ids[35];
    
    var html_of_type_expr_param_list=ids[36];
    
    var html_of_type_expr_list=ids[37];
    
    var html_of_type_expr=ids[38];
    
    var html_of_type=ids[39];
    
    var html_of_text=ids[40];
    
    var html_of_parameter_list=ids[41];
    
    var html_of_parameter_description=ids[42];
    
    var html_of_module_type_kind=ids[43];
    
    var html_of_module_type=ids[44];
    
    var html_of_module_parameter_type=ids[45];
    
    var html_of_module_parameter_list=ids[46];
    
    var html_of_module_parameter=ids[47];
    
    var html_of_module_kind=ids[48];
    
    var html_of_module_element=ids[49];
    
    var html_of_module_comment=ids[50];
    
    var html_of_module=ids[51];
    
    var html_of_modtype=ids[52];
    
    var html_of_method=ids[53];
    
    var html_of_info_first_sentence=ids[54];
    
    var html_of_info=ids[55];
    
    var html_of_included_module=ids[56];
    
    var html_of_exception=ids[57];
    
    var html_of_described_parameter_list=ids[58];
    
    var html_of_dag=ids[59];
    
    var html_of_code=ids[60];
    
    var html_of_class_type_param_expr_list=ids[61];
    
    var html_of_class_type_kind=ids[62];
    
    var html_of_class_type=ids[63];
    
    var html_of_class_parameter_list=ids[64];
    
    var html_of_class_kind=ids[65];
    
    var html_of_class_element=ids[66];
    
    var html_of_class_comment=ids[67];
    
    var html_of_class=ids[68];
    
    var html_of_attribute=ids[69];
    
    var html_of_Module_list=ids[70];
    
    var html_of_Index_list=ids[71];
    
    var generate_values_index=ids[72];
    
    var generate_types_index=ids[73];
    
    var generate_modules_index=ids[74];
    
    var generate_module_types_index=ids[75];
    
    var generate_methods_index=ids[76];
    
    var generate_inheritance_info=ids[77];
    
    var generate_index=ids[78];
    
    var generate_for_module_type=ids[79];
    
    var generate_for_module=ids[80];
    
    var generate_for_class_type=ids[81];
    
    var generate_for_class=ids[82];
    
    var generate_extensions_index=ids[83];
    
    var generate_exceptions_index=ids[84];
    
    var generate_elements_index=ids[85];
    
    var generate_elements=ids[86];
    
    var generate_classes_index=ids[87];
    
    var generate_class_types_index=ids[88];
    
    var generate_class_type_inheritance_info=ids[89];
    
    var generate_class_inheritance_info=ids[90];
    
    var generate_attributes_index=ids[91];
    
    var generate=ids[92];
    
    var $$escape=ids[93];
    
    var create_title_label=ids[94];
    
    var create_fully_qualified_module_idents_links=ids[95];
    
    var create_fully_qualified_idents_links=ids[96];
    
    var constructor=ids[97];
    
    var character_encoding=ids[98];
    
    var doctype=ids[99];
    
    var default_style_options=ids[100];
    
    var style_file=ids[101];
    
    var style=ids[102];
    
    var known_types_names=ids[103];
    
    var known_classes_names=ids[104];
    
    var known_modules_names=ids[105];
    
    var list_attributes$1=ids[106];
    
    var list_methods$1=ids[107];
    
    var list_values$1=ids[108];
    
    var list_extensions$1=ids[109];
    
    var list_exceptions$1=ids[110];
    
    var list_types$1=ids[111];
    
    var list_modules$1=ids[112];
    
    var list_module_types$1=ids[113];
    
    var list_classes$1=ids[114];
    
    var list_class_types$1=ids[115];
    
    var header=ids[116];
    
    var inh=CamlinternalOO["inherits"]($$class,0,shared$7,shared$9,text,1);
    
    var obj_init=inh[1];
    
    var
     inh$1=
      CamlinternalOO["inherits"]($$class,shared$6,shared,shared$5,info,1);
    
    var obj_init$1=inh$1[1];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       character_encoding,
       function(self$neg4,param)
        {return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    '<meta content="text/html; charset=',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '" http-equiv="Content-Type">\n',
                      /* End_of_format */0]]],
                   '<meta content="text/html; charset=%s" http-equiv="Content-Type">\n'],
                  charset[1]);
         },
       index_prefix,
       function(self$neg4)
        {if
          (CamlPrimtivie["caml_string_equal"]
            (Odoc_global["out_file"][1],Odoc_messages["default_out_file"]))
          {return "index";}
         else
          {return Filename["basename"](Odoc_global["out_file"][1]);}
         },
       index,
       function(self$neg4)
        {"(sendself self-4/1944 index_prefix/1832)";
         
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,".html",/* End_of_format */0]],
                   "%s.html"],
                  p);
         },
       index_values,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_values.html",/* End_of_format */0]],
        "%s_values.html"],
       index_prefix,
       index_types,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_types.html",/* End_of_format */0]],
        "%s_types.html"],
       index_prefix,
       index_extensions,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_extensions.html",/* End_of_format */0]],
        "%s_extensions.html"],
       index_prefix,
       index_exceptions,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_exceptions.html",/* End_of_format */0]],
        "%s_exceptions.html"],
       index_prefix,
       index_attributes,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_attributes.html",/* End_of_format */0]],
        "%s_attributes.html"],
       index_prefix,
       index_methods,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_methods.html",/* End_of_format */0]],
        "%s_methods.html"],
       index_prefix,
       index_classes,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_classes.html",/* End_of_format */0]],
        "%s_classes.html"],
       index_prefix,
       index_class_types,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_class_types.html",/* End_of_format */0]],
        "%s_class_types.html"],
       index_prefix,
       index_modules,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_modules.html",/* End_of_format */0]],
        "%s_modules.html"],
       index_prefix,
       index_module_types,
       12,
       Printf["sprintf"],
       [/* Format */0,
        [/* String */2,
         /* No_padding */0,
         [/* String_literal */11,"_module_types.html",/* End_of_format */0]],
        "%s_module_types.html"],
       index_prefix,
       list_attributes,
       1,
       list_attributes$1,
       list_methods,
       1,
       list_methods$1,
       list_values,
       1,
       list_values$1,
       list_extensions,
       1,
       list_extensions$1,
       list_exceptions,
       1,
       list_exceptions$1,
       list_types,
       1,
       list_types$1,
       list_modules,
       1,
       list_modules$1,
       list_module_types,
       1,
       list_module_types$1,
       list_classes,
       1,
       list_classes$1,
       list_class_types,
       1,
       list_class_types$1,
       init_style,
       function(self$neg4)
        {var match=css_style[1];
         
         if(match)
          {self$neg4[style_file]=match[1],0}
         else
          {var
            default_style=
             $$String["concat"]("\n",self$neg4[default_style_options]);
           
           try
            {var
              file=
               Filename["concat"]
                (Odoc_info["Global"][5][1],self$neg4[style_file]);
             
             if(CamlPrimtivie["caml_sys_file_exists"](file))
              {Odoc_info["verbose"]
                (Odoc_messages["file_exists_dont_generate"](file))}
             else
              {var chanout=Pervasives["open_out"](file);
               
               Pervasives["output_string"](chanout,default_style),
               Pervasives["flush"](chanout),
               Pervasives["close_out"](chanout),
               Odoc_info["verbose"](Odoc_messages["file_generated"](file))}
             }
           catch(exn)
            {if(exn[1]=Sys_error)
              {Pervasives["prerr_endline"](exn[2]),Odoc_info["errors"][0]++}
             else
              {throw exn;}
             }
           }
         
         return self$neg4[style]=
                Pervasives["^"]
                 ('<link rel="stylesheet" href="',
                  Pervasives["^"]
                   (self$neg4[style_file],'" type="text/css">\n')),
                0;
         },
       title,
       function(self$neg4)
        {var match=Odoc_info["Global"][6][1];
         
         if(match)
          {"(sendself self-4/1994 escape/1996 (field 0 match/3159))";}
         else
          {return "";}
         },
       inner_title,
       function(self$neg4,s)
        {"(sendself self-4/1998 title/1873)";
         
         switch(t)
          {case "":var $js="";default:var $js=Pervasives["^"](t," : ");}
         "(sendself self-4/1998 escape/1996 s/1999)";
         return Pervasives["^"]($js,0);
         },
       print_header,
       function(self$neg4,b,nav,comments,title)
        {return self$neg4[header](b,nav,comments,title);},
       prepare_header,
       function(self$neg4,module_list)
        {var
          f=
           function(b,$staropt$star,$staropt$star,t)
            {if($staropt$star$1)
              {var nav=$staropt$star$1[1];}
             else
              {var nav=/* None */0;}
             
             if($staropt$star)
              {var comments=$staropt$star[1];}
             else
              {var comments=/* [] */0;}
             
             var
              link_if_not_empty=
               function(l,m,url)
                {if(l)
                  {return bp
                           (b,
                            [/* Format */0,
                             [/* String_literal */11,
                              '<link title="',
                              [/* String */2,
                               /* No_padding */0,
                               [/* String_literal */11,
                                '" rel=Appendix href="',
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* String_literal */11,'">\n',/* End_of_format */0]]]]],
                             '<link title="%s" rel=Appendix href="%s">\n'],
                            m,
                            url);
                   }
                 else
                  {return /* () */0;}
                 };
             
             bs(b,"<head>\n");
             bs(b,self$neg4[style]);
             "(sendself self-4/2008 character_encoding/1825 0a)";
             bs(b,0);
             bs(b,'<link rel="Start" href="');
             "(sendself self-4/2008 index/1833)";
             bs(b,0);
             bs(b,'">\n');
             if(nav)
              {var match=nav[1];
               
               var post_opt=match[2];
               
               var pre_opt=match[1];
               
               if(pre_opt)
                {bp
                  (b,
                   [/* Format */0,
                    [/* String_literal */11,
                     '<link rel="previous" href="',
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,'">\n',/* End_of_format */0]]],
                    '<link rel="previous" href="%s">\n'],
                   Naming[11](pre_opt[1])[1])}
               else
                {}
               
               if(post_opt)
                {bp
                  (b,
                   [/* Format */0,
                    [/* String_literal */11,
                     '<link rel="next" href="',
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,'">\n',/* End_of_format */0]]],
                    '<link rel="next" href="%s">\n'],
                   Naming[11](post_opt[1])[1])}
               else
                {}
               
               var father=Odoc_info["Name"][5](match[3]);
               
               if(CamlPrimtivie["caml_string_equal"](father,""))
                {"(sendself self-4/2008 index/1833)";}
               else
                {var href=Naming[11](father)[1];}
               
               bp
                (b,
                 [/* Format */0,
                  [/* String_literal */11,
                   '<link rel="Up" href="',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,'">\n',/* End_of_format */0]]],
                  '<link rel="Up" href="%s">\n'],
                 href)}
             else
              {}
             
             "(sendself self-4/2008 list_types/1855)";
             "(sendself self-4/2008 index_types/1835)";
             link_if_not_empty(0,Odoc_messages["index_of_types"],0);
             "(sendself self-4/2008 list_extensions/1851)";
             "(sendself self-4/2008 index_extensions/1836)";
             link_if_not_empty(0,Odoc_messages["index_of_extensions"],0);
             "(sendself self-4/2008 list_exceptions/1853)";
             "(sendself self-4/2008 index_exceptions/1837)";
             link_if_not_empty(0,Odoc_messages["index_of_exceptions"],0);
             "(sendself self-4/2008 list_values/1849)";
             "(sendself self-4/2008 index_values/1834)";
             link_if_not_empty(0,Odoc_messages["index_of_values"],0);
             "(sendself self-4/2008 list_attributes/1845)";
             "(sendself self-4/2008 index_attributes/1838)";
             link_if_not_empty(0,Odoc_messages["index_of_attributes"],0);
             "(sendself self-4/2008 list_methods/1847)";
             "(sendself self-4/2008 index_methods/1839)";
             link_if_not_empty(0,Odoc_messages["index_of_methods"],0);
             "(sendself self-4/2008 list_classes/1861)";
             "(sendself self-4/2008 index_classes/1840)";
             link_if_not_empty(0,Odoc_messages["index_of_classes"],0);
             "(sendself self-4/2008 list_class_types/1863)";
             "(sendself self-4/2008 index_class_types/1841)";
             link_if_not_empty(0,Odoc_messages["index_of_class_types"],0);
             "(sendself self-4/2008 list_modules/1857)";
             "(sendself self-4/2008 index_modules/1842)";
             link_if_not_empty(0,Odoc_messages["index_of_modules"],0);
             "(sendself self-4/2008 list_module_types/1859)";
             "(sendself self-4/2008 index_module_types/1843)";
             link_if_not_empty(0,Odoc_messages["index_of_module_types"],0);
             var
              print_one=
               function(m)
                {var html_file=Naming[11](m[1])[1];
                 
                 return bp
                         (b,
                          [/* Format */0,
                           [/* String_literal */11,
                            '<link title="',
                            [/* String */2,
                             /* No_padding */0,
                             [/* String_literal */11,
                              '" rel="Chapter" href="',
                              [/* String */2,
                               /* No_padding */0,
                               [/* String_literal */11,'">',/* End_of_format */0]]]]],
                           '<link title="%s" rel="Chapter" href="%s">'],
                          m[1],
                          html_file);
                 };
             
             print_concat(b,"\n",print_one,module_list);
             "(sendself self-4/2008 html_sections_links/1877 b/2011 comments/2016)";
             
             bs(b,"<title>");
             bs(b,t);
             return bs(b,"</title>\n</head>\n");
             };
         
         return self$neg4[header]=f,0;
         },
       html_sections_links,
       function(self$neg4,b,comments)
        {var
          titles=
           List["flatten"]
            (List["map"](Odoc_info["get_titles_in_text"],comments));
         
         var
          iter=
           function(acc,l)
            {if(l)
              {var q=l[2];
               
               var n=l[1][1];
               
               if(List["mem"](n,acc))
                {return iter(acc,q);}
               else
                {return iter(/* :: */[0,n,acc],q);}
               }
             else
              {return acc;}
             };
         
         var levels=iter(/* [] */0,titles);
         
         var
          sorted_levels=
           List["sort"]
            (function(prim,prim)
              {return CamlPrimtivie["caml_compare"](prim$1,prim);},
             levels);
         
         if(sorted_levels)
          {var match=sorted_levels[2];
           
           var n=sorted_levels[1];
           
           if(match)
            {var
              match$1=
               /* tuple */[0,/* Some */[0,n],/* Some */[0,match[1]]];
             }
           else
            {var match$1=/* tuple */[0,/* Some */[0,n],/* None */0];}
           }
         else
          {var match$1=[/* tuple */0,/* None */0,/* None */0];}
         
         var
          titles_per_level=
           function(level_opt)
            {if(level_opt)
              {var n$1=level_opt[1];
               
               return List["filter"]
                       (function(param){return param[1]=n$1;},titles);
               }
             else
              {return /* [] */0;}
             };
         
         var section_titles=titles_per_level(match$1[1]);
         
         var subsection_titles=titles_per_level(match$1[2]);
         
         var
          print_lines=
           function(s_rel,titles)
            {return List["iter"]
                     (function(param)
                       {var t=param[3];
                        
                        var s=Odoc_info["string_of_text"](t);
                        
                        "(sendself self-4/2034 create_title_label/2064\n  (makeblock 0 (field 0 param/3131) (field 1 param/3131) t/2061))";
                        
                        return bp
                                (b,
                                 [/* Format */0,
                                  [/* String_literal */11,
                                   '<link title="',
                                   [/* String */2,
                                    /* No_padding */0,
                                    [/* String_literal */11,
                                     '" rel="',
                                     [/* String */2,
                                      /* No_padding */0,
                                      [/* String_literal */11,
                                       '" href="#',
                                       [/* String */2,
                                        /* No_padding */0,
                                        [/* String_literal */11,'">\n',/* End_of_format */0]]]]]]],
                                  '<link title="%s" rel="%s" href="#%s">\n'],
                                 s,
                                 s_rel,
                                 label);
                        },
                      titles);
             };
         
         print_lines("Section",section_titles);
         return print_lines("Subsection",subsection_titles);
         },
       print_navbar,
       function(self$neg4,b,pre,post,name)
        {bs(b,'<div class="navbar">');
         if(pre)
          {var name$1=pre[1];
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a class="pre" href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '" title="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"</a>\n",/* End_of_format */0]]]]]]],
              '<a class="pre" href="%s" title="%s">%s</a>\n'],
             Naming[11](name$1)[1],
             name$1,
             Odoc_messages["previous"])}
         else
          {}
         
         bs(b,"&nbsp;");
         var father=Odoc_info["Name"][5](name);
         
         if(CamlPrimtivie["caml_string_equal"](father,""))
          {"(sendself self-4/2066 index/1833)";}
         else
          {var href=Naming[11](father)[1];}
         
         if(CamlPrimtivie["caml_string_equal"](father,""))
          {var father_name="Index";}
         else
          {var father_name=father;}
         
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<a class="up" href="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,
               '" title="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>\n",/* End_of_format */0]]]]]]],
            '<a class="up" href="%s" title="%s">%s</a>\n'],
           href,
           father_name,
           Odoc_messages["up"]);
         bs(b,"&nbsp;");
         if(post)
          {var name$2=post[1];
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a class="post" href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '" title="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"</a>\n",/* End_of_format */0]]]]]]],
              '<a class="post" href="%s" title="%s">%s</a>\n'],
             Naming[11](name$2)[1],
             name$2,
             Odoc_messages["next"])}
         else
          {}
         
         return bs(b,"</div>\n");
         },
       keyword,
       function(self$neg4,s)
        {return Pervasives["^"]
                 ('<span class="keyword">',Pervasives["^"](s,"</span>"));
         },
       constructor,
       function(self$neg4,s)
        {return Pervasives["^"]
                 ('<span class="constructor">',Pervasives["^"](s,"</span>"));
         },
       output_code,
       function(self$neg4,in_title,file,code)
        {try
          {var chanout=Pervasives["open_out"](file);
           
           var b=new_buf(/* () */0);
           
           bs(b,"<html>");
           "(sendself self-4/2083 print_header/1875 b/2088 0a 0a\n  (sendself self-4/2083 inner_title/1874 in_title/2084))";
           
           bs(b,"<body>\n");
           "(sendself self-4/2083 html_of_code/2089 b/2088 0a code/2086)";
           
           bs(b,"</body></html>");
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
       create_fully_qualified_idents_links,
       function(self$neg4,m_name,s)
        {var
          f=
           function(str_t)
            {var match_s=Str["matched_string"](str_t);
             
             var rel=Odoc_info["Name"][4](m_name,match_s);
             
             var
              s_final=
               Odoc_info["apply_if_equal"]
                (Odoc_info["use_hidden_modules"],match_s,rel);
             
             if(StringSet[3](match_s,self$neg4[known_types_names]))
              {return Pervasives["^"]
                       ('<a href="',
                        Pervasives["^"]
                         (Naming[13](Naming[1],match_s),
                          Pervasives["^"]('">',Pervasives["^"](s_final,"</a>"))));
               }
             else
              {if(StringSet[3](match_s,self$neg4[known_classes_names]))
                {var match=Naming[11](match_s);
                 
                 return Pervasives["^"]
                         ('<a href="',
                          Pervasives["^"]
                           (match[1],
                            Pervasives["^"]('">',Pervasives["^"](s_final,"</a>"))));
                 }
               else
                {return s_final;}
               }
             };
         
         return Str["global_substitute"]
                 (Str["regexp"]
                   ("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)"),
                  f,
                  s);
         },
       create_fully_qualified_module_idents_links,
       function(self$neg4,m_name,s)
        {var
          f=
           function(str_t)
            {var match_s=Str["matched_string"](str_t);
             
             var rel=Odoc_info["Name"][4](m_name,match_s);
             
             var
              s_final=
               Odoc_info["apply_if_equal"]
                (Odoc_info["use_hidden_modules"],match_s,rel);
             
             if(StringSet[3](match_s,self$neg4[known_modules_names]))
              {var match=Naming[11](match_s);
               
               return Pervasives["^"]
                       ('<a href="',
                        Pervasives["^"]
                         (match[1],
                          Pervasives["^"]('">',Pervasives["^"](s_final,"</a>"))));
               }
             else
              {return s_final;}
             };
         
         return Str["global_substitute"]
                 (Str["regexp"]
                   ("\([A-Z]\([a-zA-Z_'0-9]\)*\)\(\.[A-Z][a-zA-Z_'0-9]*\)*"),
                  f,
                  s);
         },
       html_of_type_expr,
       function(self$neg4,b,m_name,t)
        {var
          s=
           Odoc_info["remove_ending_newline"]
            (Odoc_info["string_of_type_expr"](t));
         
         var s2=newline_to_indented_br(s);
         
         bs(b,'<code class="type">');
         "(sendself self-4/2114 create_fully_qualified_idents_links/1882 m_name/2116\n  s2/2119)";
         bs(b,0);
         return bs(b,"</code>");
         },
       html_of_type_expr_list,
       function(self$neg4,par,b,m_name,sep,l)
        {var s=Odoc_info["string_of_type_list"](par,sep,l);
         
         var s2=newline_to_indented_br(s);
         
         bs(b,'<code class="type">');
         "(sendself self-4/2121 create_fully_qualified_idents_links/1882 m_name/2124\n  s2/2128)";
         bs(b,0);
         return bs(b,"</code>");
         },
       html_of_class_type_param_expr_list,
       function(self$neg4,b,m_name,l)
        {var s=Odoc_info["string_of_class_type_param_list"](l);
         
         var s2=newline_to_indented_br(s);
         
         bs(b,'<code class="type">[');
         "(sendself self-4/2130 create_fully_qualified_idents_links/1882 m_name/2132\n  s2/2135)";
         bs(b,0);
         return bs(b,"]</code>");
         },
       html_of_class_parameter_list,
       function(self$neg4,b,father,c)
        {var s=Odoc_info["string_of_class_params"](c);
         
         var s$1=Odoc_info["remove_ending_newline"](s);
         
         var s2=newline_to_indented_br(s$1);
         
         bs(b,'<code class="type">');
         "(sendself self-4/2137 create_fully_qualified_idents_links/1882 father/2139\n  s2/2143)";
         bs(b,0);
         return bs(b,"</code>");
         },
       html_of_type_expr_param_list,
       function(self$neg4,b,m_name,t)
        {var s=Odoc_info["string_of_type_param_list"](t);
         
         var s2=newline_to_indented_br(s);
         
         bs(b,'<code class="type">');
         "(sendself self-4/2145 create_fully_qualified_idents_links/1882 m_name/2147\n  s2/2150)";
         bs(b,0);
         return bs(b,"</code>");
         },
       html_of_module_type,
       function(self$neg4,b,code,m_name,t)
        {var
          s=
           Odoc_info["remove_ending_newline"]
            (Odoc_info["string_of_module_type"](code,/* None */0,t));
         
         bs(b,'<code class="type">');
         "(sendself self-4/2152 create_fully_qualified_module_idents_links/1883\n  m_name/2155 s/2157)";
         bs(b,0);
         return bs(b,"</code>");
         },
       html_of_module_kind,
       function(self$neg4,b,father,modu,kind)
        {switch(kind[0])
          {case 0:
            '(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: "sig"] 0a])';
            
            if(modu)
             {var match=Naming[11](modu[1][1]);
              
              bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  ' <a href="',
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,'">..</a> ',/* End_of_format */0]]],
                 ' <a href="%s">..</a> '],
                match[1])}
            else
             {bs(b,'<div class="sig_block">');
              "(sendself self-4/2159 html_of_module_element/1892 b/2160 father/2161)";
              List["iter"](0,kind[1]);
              bs(b,"</div>")}
            
            '(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: "end"] 0a])';
            
           case 1:
            bs(b,'<code class="type">');
            "(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (field 0 (field 0 kind/2163)))";
            bs(b,0);
            return bs(b,"</code>");
            
           case 2:
            var k=kind[2];
            
            if(html_short_functors[1])
             {bs(b," ")}
            else
             {bs(b,'<div class="sig_block">')}
            
            "(sendself self-4/2159 html_of_module_parameter/1891 b/2160 father/2161\n  (field 0 kind/2163))";
            
            switch(k[0])
             {case 2:default:if(html_short_functors[1]){bs(b,": ")}else{}}
            
            "(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 modu/2162\n  k/2167)";
            
            if(!html_short_functors[1]){return bs(b,"</div>");}else{return 0;}
            
           case 3:
            "(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 0a\n  (field 0 kind/2163))";
            
            '(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: "("] 0a])';
            
            "(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 0a\n  (field 1 kind/2163))";
            
            '(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: ")"] 0a])';
            
           case 4:
            "(sendself self-4/2159 html_of_module_type_kind/1893 b/2160 father/2161\n  modu/2162 0a (field 0 kind/2163))";
            
            bs(b,'<code class="type"> ');
            "(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (field 1 kind/2163))";
            bs(b,0);
            return bs(b,"</code>");
            
           case 5:
            "(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 modu/2162\n  (field 0 kind/2163))";
            
           case 6:
            bs(b,'<code class="type">module type of ');
            "(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (field 0 kind/2163))";
            bs(b,0);
            return bs(b,"</code>");
            
           case 7:
            var code=kind[1];
            
            bs(b,'<code class="type">');
            var match$1=kind[2][2];
            
            if(match$1)
             {var match$2=Naming[11](match$1[1][1]);
              
              "(sendself self-4/2159 escape/1996 code/2175)";
              bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  ' <a href="',
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    '">',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,"</a> ",/* End_of_format */0]]]]],
                 ' <a href="%s">%s</a> '],
                match$2[1],
                0)}
            else
             {"(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (sendself self-4/2159 escape/1996 code/2175))";
              bs(b,0)}
            
            return bs(b,"</code>");
            
           }
         },
       html_of_module_parameter,
       function(self$neg4,b,father,p)
        {if(html_short_functors[1])
          {var match=[/* tuple */0,"",""];}
         else
          {var match=[/* tuple */0,"functor ","-> "];}
         
         '(sendself self-4/2183 html_of_text/2177 b/2184\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) (field 0 match/3097) "("))\n    (makeblock 0 (makeblock 1 (field 0 p/2186)) [0: [1: " : "] 0a])))';
         
         "(sendself self-4/2183 html_of_module_type_kind/1893 b/2184 father/2185 0a 0a\n  (field 3 p/2186))";
         
         '(sendself self-4/2183 html_of_text/2177 b/2184\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) ") " (field 1 match/3097)))\n    0a))';
         },
       html_of_module_element,
       function(self$neg4,b,m_name,ele)
        {switch(ele[0])
          {case 0:
            "(sendself self-4/2190 html_of_module/1907 b/2191 0a [0: 0a] 0a\n  (field 0 ele/2193))";
            
           case 1:
            "(sendself self-4/2190 html_of_modtype/1908 b/2191 0a [0: 0a] 0a\n  (field 0 ele/2193))";
            
           case 2:
            "(sendself self-4/2190 html_of_included_module/1909 b/2191 (field 0 ele/2193))";
            
           case 3:
            "(sendself self-4/2190 html_of_class/1913 b/2191 [0: 0a] 0a\n  (field 0 ele/2193))";
            
           case 4:
            "(sendself self-4/2190 html_of_class_type/1914 b/2191 [0: 0a] 0a\n  (field 0 ele/2193))";
            
           case 5:
            "(sendself self-4/2190 html_of_value/1897 b/2191 (field 0 ele/2193))";
            
           case 6:
            "(sendself self-4/2190 html_of_type_extension/1898 b/2191 m_name/2192\n  (field 0 ele/2193))";
            
           case 7:
            "(sendself self-4/2190 html_of_exception/1899 b/2191 (field 0 ele/2193))";
            
           case 8:
            "(sendself self-4/2190 html_of_type/1900 b/2191 (field 0 ele/2193))";
            
           case 9:
            "(sendself self-4/2190 html_of_module_comment/1916 b/2191 (field 0 ele/2193))";
            
           }
         },
       html_of_module_type_kind,
       function(self$neg4,b,father,modu,mt,kind)
        {switch(kind[0])
          {case 0:
            '(sendself self-4/2205 html_of_text/2177 b/2206 [0: [1: "sig"] 0a])';
            
            if(mt)
             {var match=Naming[11](mt[1][1]);
              
              bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  ' <a href="',
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,'">..</a> ',/* End_of_format */0]]],
                 ' <a href="%s">..</a> '],
                match[1])}
            else
             {if(modu)
               {var match$1=Naming[11](modu[1][1]);
                
                bp
                 (b,
                  [/* Format */0,
                   [/* String_literal */11,
                    ' <a href="',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,'">..</a> ',/* End_of_format */0]]],
                   ' <a href="%s">..</a> '],
                  match$1[1])}
              else
               {bs(b,'<div class="sig_block">');
                "(sendself self-4/2205 html_of_module_element/1892 b/2206 father/2207)";
                List["iter"](0,kind[1]);
                bs(b,"</div>")}
              }
            
            '(sendself self-4/2205 html_of_text/2177 b/2206 [0: [1: "end"] 0a])';
            
           case 1:
            "(sendself self-4/2205 html_of_module_parameter/1891 b/2206 father/2207\n  (field 0 kind/2210))";
            
            "(sendself self-4/2205 html_of_module_type_kind/1893 b/2206 father/2207\n  modu/2208 mt/2209 (field 1 kind/2210))";
            
           case 2:
            bs(b,'<code class="type">');
            "(sendself self-4/2205 create_fully_qualified_module_idents_links/1883\n  father/2207 (field 0 (field 0 kind/2210)))";
            bs(b,0);
            return bs(b,"</code>");
            
           case 3:
            "(sendself self-4/2205 html_of_module_type_kind/1893 b/2206 father/2207\n  modu/2208 mt/2209 (field 0 kind/2210))";
            
            bs(b,'<code class="type"> ');
            "(sendself self-4/2205 create_fully_qualified_module_idents_links/1883\n  father/2207 (field 1 kind/2210))";
            bs(b,0);
            return bs(b,"</code>");
            
           case 4:
            bs(b,'<code class="type">module type of ');
            "(sendself self-4/2205 create_fully_qualified_module_idents_links/1883\n  father/2207 (field 0 kind/2210))";
            bs(b,0);
            return bs(b,"</code>");
            
           }
         },
       html_of_module_parameter_type,
       function(self$neg4,b,m_name,p)
        {var match=p[2];
         
         if(match)
          {"(sendself self-4/2223 html_of_module_type/1889 b/2224\n  (makeblock 0 (field 2 p/2226)) m_name/2225 (field 0 match/3085))";
           }
         else
          {return bs(b,"<code>()</code>");}
         },
       output_module_type,
       function(self$neg4,in_title,file,mtyp)
        {var
          s=
           Odoc_info["remove_ending_newline"]
            (Odoc_info["string_of_module_type"]
              (/* None */0,[/* Some */0,/* true */1],mtyp));
         
         "(sendself self-4/2229 output_code/1881 in_title/2230 file/2231 s/2233)";
         },
       output_class_type,
       function(self$neg4,in_title,file,ctyp)
        {var
          s=
           Odoc_info["remove_ending_newline"]
            (Odoc_info["string_of_class_type"]([/* Some */0,/* true */1],ctyp));
         
         "(sendself self-4/2235 output_code/1881 in_title/2236 file/2237 s/2239)";
         },
       html_of_value,
       function(self$neg4,b,v)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,"\n<pre>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span id="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span id="%s">'],
           Naming[25](v));
         '(sendself self-4/2241 keyword/1879 "val")';
         bs(b,0);
         bs(b," ");
         var match=v[6];
         
         if(match)
          {var file=Naming[28](v);
           
           "(sendself self-4/2241 output_code/1881 (field 0 v/2243)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) file/2245)\n  (field 0 match/3080))";
           
           "(sendself self-4/2241 escape/1996\n  (apply (field 0 (field 2 (global Odoc_info!))) (field 0 v/2243)))";
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             file,
             0)}
         else
          {"(sendself self-4/2241 escape/1996\n  (apply (field 0 (field 2 (global Odoc_info!))) (field 0 v/2243)))";
           bs(b,0)}
         
         bs(b,"</span>");
         bs(b," : ");
         "(sendself self-4/2241 html_of_type_expr/1884 b/2242\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/2243))\n  (field 2 v/2243))";
         
         bs(b,"</pre>");
         "(sendself self-4/2241 html_of_info/2246 0a 0a b/2242 (field 1 v/2243))";
         
         if(with_parameter_list[1])
          {"(sendself self-4/2241 html_of_parameter_list/1904 b/2242\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/2243))\n  (field 4 v/2243))";
           }
         else
          {"(sendself self-4/2241 html_of_described_parameter_list/1905 b/2242\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/2243))\n  (field 4 v/2243))";
           }
         },
       html_of_type_extension,
       function(self$neg4,b,m_name,te)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,"<pre><code>");
         '(sendself self-4/2248 keyword/1879 "type")';
         bs(b,Pervasives["^"](0," "));
         var s=Odoc_info["string_of_type_extension_param_list"](te);
         
         var s2=newline_to_indented_br(s);
         
         bs(b,'<code class="type">');
         "(sendself self-4/2248 create_fully_qualified_idents_links/1882 m_name/2250\n  s2/2253)";
         bs(b,0);
         bs(b,"</code>");
         var match=te[3];
         
         if(match){bs(b," ")}else{}
         
         "(sendself self-4/2248 create_fully_qualified_idents_links/1882 m_name/2250\n  (field 1 te/2251))";
         bs(b,0);
         bs(b," += ");
         if(te[4]=/* Private */0){bs(b,"private ")}else{}
         
         bs(b,"</code></pre>");
         bs(b,'<table class="typetable">\n');
         var
          print_one=
           function(x)
            {var father=Odoc_info["Name"][5](x[1]);
             
             bs(b,'<tr>\n<td align="left" valign="top" >\n');
             bs(b,"<code>");
             '(sendself self-4/2248 keyword/1879 "|")';
             bs(b,0);
             bs(b,'</code></td>\n<td align="left" valign="top" >\n');
             bs(b,"<code>");
             bp
              (b,
               [/* Format */0,
                [/* String_literal */11,
                 '<span id="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"</span>",/* End_of_format */0]]]]],
                '<span id="%s">%s</span>'],
               Naming[21](x),
               Odoc_info["Name"][1](x[1]));
             var match$1=x[2];
             
             var match$2=x[3];
             
             if(match$1)
              {if(match$2)
                {'(sendself self-4/2248 keyword/1879 ":")';
                 bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                 '(sendself self-4/2248 html_of_type_expr_list/1885 [0: 0a] b/2249 father/2256\n  " * " match/3072)';
                 
                 '(sendself self-4/2248 keyword/1879 "->")';
                 bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                 "(sendself self-4/2248 html_of_type_expr/1884 b/2249 father/2256\n  (field 0 match/3073))";
                 }
               else
                {'(sendself self-4/2248 keyword/1879 "of")';
                 bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                 '(sendself self-4/2248 html_of_type_expr_list/1885 [0: 0a] b/2249 father/2256\n  " * " match/3072)';
                 }
               }
             else
              {if(match$2)
                {'(sendself self-4/2248 keyword/1879 ":")';
                 bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                 "(sendself self-4/2248 html_of_type_expr/1884 b/2249 father/2256\n  (field 0 match/3073))";
                 }
               else
                {}
               }
             
             var match$3=x[5];
             
             if(match$3)
              {var xa=match$3[1];
               
               bs(b," = ");
               var match$4=xa[2];
               
               if(match$4)
                {var x$1=match$4[1];
                 
                 bp
                  (b,
                   [/* Format */0,
                    [/* String_literal */11,
                     '<a href="',
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       '">',
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
                    '<a href="%s">%s</a>'],
                   Naming[22](x$1),
                   x$1[1])}
               else
                {bs(b,xa[1])}
               }
             else
              {}
             
             bs(b,"</code></td>\n");
             var match$5=x[7];
             
             if(match$5)
              {bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               bs(b,"<code>");
               bs(b,"(*");
               bs(b,"</code></td>");
               bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               "(sendself self-4/2248 html_of_info/2246 0a 0a b/2249\n  (makeblock 0 (field 0 match/3066)))";
               
               bs(b,"</td>"),
               bs
                (b,
                 '<td class="typefieldcomment" align="left" valign="bottom" >'),
               bs(b,"<code>"),
               bs(b,"*)"),
               bs(b,"</code></td>")}
             else
              {}
             
             return bs(b,"\n</tr>");
             };
         
         print_concat(b,"\n",print_one,te[5]);
         bs(b,"</table>\n");
         bs(b,"\n");
         "(sendself self-4/2248 html_of_info/2246 0a 0a b/2249 (field 0 te/2251))";
         
         return bs(b,"\n");
         },
       html_of_exception,
       function(self$neg4,b,e)
        {Odoc_info["reset_type_names"](/* () */0);
         bs(b,"\n<pre>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span id="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span id="%s">'],
           Naming[23](e));
         '(sendself self-4/2265 keyword/1879 "exception")';
         bs(b,0);
         bs(b," ");
         bs(b,Odoc_info["Name"][1](e[1]));
         bs(b,"</span>");
         var match=e[3];
         
         var match$1=e[4];
         
         if(match)
          {if(match$1)
            {'(sendself self-4/2265 keyword/1879 ":")';
             bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
             '(sendself self-4/2265 html_of_type_expr_list/1885 [0: 0a] b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267)) " * "\n  match/3060)';
             
             '(sendself self-4/2265 keyword/1879 "->")';
             bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
             "(sendself self-4/2265 html_of_type_expr/1884 b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267))\n  (field 0 match/3061))";
             }
           else
            {'(sendself self-4/2265 keyword/1879 "of")';
             bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
             '(sendself self-4/2265 html_of_type_expr_list/1885 [0: 0a] b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267)) " * "\n  (field 2 e/2267))';
             }
           }
         else
          {if(match$1)
            {'(sendself self-4/2265 keyword/1879 ":")';
             bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
             "(sendself self-4/2265 html_of_type_expr/1884 b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267))\n  (field 0 match/3061))";
             }
           else
            {}
           }
         
         var match$2=e[5];
         
         if(match$2)
          {var ea=match$2[1];
           
           bs(b," = ");
           var match$3=ea[2];
           
           if(match$3)
            {var e$1=match$3[1];
             
             bp
              (b,
               [/* Format */0,
                [/* String_literal */11,
                 '<a href="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
                '<a href="%s">%s</a>'],
               Naming[24](e$1),
               e$1[1])}
           else
            {bs(b,ea[1])}
           }
         else
          {}
         
         bs(b,"</pre>\n");
         "(sendself self-4/2265 html_of_info/2246 0a 0a b/2266 (field 1 e/2267))";
         },
       html_of_type,
       function(self$neg4,b,t)
        {Odoc_info["reset_type_names"](/* () */0);
         var father=Odoc_info["Name"][5](t[1]);
         
         var
          print_field_prefix=
           function(param)
            {bs(b,'<tr>\n<td align="left" valign="top" >\n');
             bs(b,"<code>&nbsp;&nbsp;</code>");
             bs(b,'</td>\n<td align="left" valign="top" >\n');
             return bs(b,"<code>");
             };
         
         var
          print_field_comment=
           function(param)
            {if(param)
              {bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               bs(b,"<code>");
               bs(b,"(*");
               bs(b,"</code></td>");
               bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               "(sendself self-4/2275 html_of_info/2246 0a 0a b/2276\n  (makeblock 0 (field 0 param/3052)))";
               
               bs
                (b,
                 '</td><td class="typefieldcomment" align="left" valign="bottom" >');
               return bs(b,"<code>*)</code></td>");
               }
             else
              {return /* () */0;}
             };
         
         var match=t[6];
         
         var match$1=t[4];
         
         bs
          (b,
           match
            ?typeof match$1==="number"?"\n<pre>":"\n<pre>"
            :typeof match$1==="number"?"\n<pre>":"\n<pre><code>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span id="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span id="%s">'],
           Naming[14](t));
         '(sendself self-4/2275 keyword/1879 "type")';
         bs(b,Pervasives["^"](0," "));
         "(sendself self-4/2275 html_of_type_expr_param_list/1888 b/2276 father/2278\n  t/2277)";
         
         var match$2=t[3];
         
         if(match$2){bs(b," ")}else{}
         
         bs(b,Odoc_info["Name"][1](t[1]));
         bs(b,"</span> ");
         var priv=t[5]=/* Private */0;
         
         var match$3=t[6];
         
         if(match$3)
          {var match$4=match$3[1];
           
           switch(match$4[0])
            {case 0:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              "(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 0 match/3039))";
              
              bs(b," ");
             case 1:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              bs(b,"&lt;</pre>");
              bs(b,'<table class="typetable">\n');
              var
               print_one=
                function(f)
                 {print_field_prefix(/* () */0);
                  bp
                   (b,
                    [/* Format */0,
                     [/* String_literal */11,
                      '<span id="',
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        '">',
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          "</span>&nbsp;: ",
                          /* End_of_format */0]]]]],
                     '<span id="%s">%s</span>&nbsp;: '],
                    Naming[17](t,f),
                    f[1]);
                  "(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 1 f/2286))";
                  
                  bs(b,";</code></td>\n");
                  print_field_comment(f[3]);
                  return bs(b,"\n</tr>");
                  };
              
              print_concat(b,"\n",print_one,match$4[1]),
              bs(b,"</table>\n>\n"),
              bs(b," ")
             }
           }
         else
          {}
         
         var match$5=t[4];
         
         if(typeof match$5=="number")
          {switch(match$5)
            {case 0:bs(b,"</pre>");case 1:bs(b,"= .."),bs(b,"</pre>")}}
         else
          {switch(match$5[0])
            {case 0:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              var match$6=t[6];
              
              bs(b,match$6?"</pre>":"</code></pre>");
              bs(b,'<table class="typetable">\n');
              var
               print_one$1=
                function(constr)
                 {bs(b,'<tr>\n<td align="left" valign="top" >\n');
                  bs(b,"<code>");
                  '(sendself self-4/2275 keyword/1879 "|")';
                  bs(b,0);
                  bs(b,'</code></td>\n<td align="left" valign="top" >\n');
                  bs(b,"<code>");
                  "(sendself self-4/2275 constructor/1880 (field 0 constr/2290))";
                  bp
                   (b,
                    [/* Format */0,
                     [/* String_literal */11,
                      '<span id="',
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        '">',
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,"</span>",/* End_of_format */0]]]]],
                     '<span id="%s">%s</span>'],
                    Naming[15](t,constr),
                    0);
                  var match$7=constr[2];
                  
                  var match$8=constr[3];
                  
                  if(match$7)
                   {if(match$8)
                     {'(sendself self-4/2275 keyword/1879 ":")';
                      bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                      '(sendself self-4/2275 html_of_type_expr_list/1885 [0: 0a] b/2276 father/2278\n  " * " match/3024)';
                      
                      '(sendself self-4/2275 keyword/1879 "->")';
                      bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                      "(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 0 match/3025))";
                      }
                    else
                     {'(sendself self-4/2275 keyword/1879 "of")';
                      bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                      '(sendself self-4/2275 html_of_type_expr_list/1885 [0: 0a] b/2276 father/2278\n  " * " match/3024)';
                      }
                    }
                  else
                   {if(match$8)
                     {'(sendself self-4/2275 keyword/1879 ":")';
                      bs(b,Pervasives["^"](" ",Pervasives["^"](0," ")));
                      "(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 0 match/3025))";
                      }
                    else
                     {}
                    }
                  
                  bs(b,"</code></td>\n");
                  var match$9=constr[4];
                  
                  if(match$9)
                   {bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="top" >');
                    bs(b,"<code>");
                    bs(b,"(*");
                    bs(b,"</code></td>");
                    bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="top" >');
                    "(sendself self-4/2275 html_of_info/2246 0a 0a b/2276\n  (makeblock 0 (field 0 match/3022)))";
                    
                    bs(b,"</td>"),
                    bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="bottom" >'),
                    bs(b,"<code>"),
                    bs(b,"*)"),
                    bs(b,"</code></td>")}
                  else
                   {}
                  
                  return bs(b,"\n</tr>");
                  };
              
              print_concat(b,"\n",print_one$1,match$5[1]),bs(b,"</table>\n");
             case 1:
              bs(b,"= ");
              if(priv){bs(b,"private ")}else{}
              
              bs(b,"{");
              var match$7=t[6];
              
              bs(b,match$7?"</pre>":"</code></pre>");
              bs(b,'<table class="typetable">\n');
              var
               print_one$2=
                function(r)
                 {bs(b,'<tr>\n<td align="left" valign="top" >\n');
                  bs(b,"<code>&nbsp;&nbsp;</code>");
                  bs(b,'</td>\n<td align="left" valign="top" >\n');
                  bs(b,"<code>");
                  if(r[2])
                   {'(sendself self-4/2275 keyword/1879 "mutable&nbsp;")';
                    bs(b,0)}
                  else
                   {}
                  
                  bp
                   (b,
                    [/* Format */0,
                     [/* String_literal */11,
                      '<span id="',
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        '">',
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          "</span>&nbsp;: ",
                          /* End_of_format */0]]]]],
                     '<span id="%s">%s</span>&nbsp;: '],
                    Naming[16](t,r),
                    r[1]);
                  "(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 2 r/2297))";
                  
                  bs(b,";</code></td>\n");
                  var match$8=r[4];
                  
                  if(match$8)
                   {bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="top" >');
                    bs(b,"<code>");
                    bs(b,"(*");
                    bs(b,"</code></td>");
                    bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="top" >');
                    "(sendself self-4/2275 html_of_info/2246 0a 0a b/2276\n  (makeblock 0 (field 0 match/3032)))";
                    
                    bs
                     (b,
                      '</td><td class="typefieldcomment" align="left" valign="bottom" >'),
                    bs(b,"<code>*)</code></td>")}
                  else
                   {}
                  
                  return bs(b,"\n</tr>");
                  };
              
              print_concat(b,"\n",print_one$2,match$5[1]),
              bs(b,"</table>\n}\n")
             }}
         
         bs(b,"\n");
         "(sendself self-4/2275 html_of_info/2246 0a 0a b/2276 (field 1 t/2277))";
         
         return bs(b,"\n");
         },
       html_of_attribute,
       function(self$neg4,b,a)
        {var module_name=Odoc_info["Name"][5](Odoc_info["Name"][5](a[1][1]));
         
         bs(b,"\n<pre>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span id="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span id="%s">'],
           Naming[29](a));
         '(sendself self-4/2300 keyword/1879 "val")';
         bs(b,0);
         bs(b," ");
         if(a[3])
          {'(sendself self-4/2300 keyword/1879 "virtual")';
           bs(b,Pervasives["^"](0," "))}
         else
          {}
         
         if(a[2])
          {"(sendself self-4/2300 keyword/1879 (field 193 (global Odoc_messages!)))";
           bs(b,Pervasives["^"](0," "))}
         else
          {}
         
         var match=a[1][6];
         
         if(match)
          {var file=Naming[31](a);
           
           "(sendself self-4/2300 output_code/1881 (field 0 (field 0 a/2302))\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) file/2305)\n  (field 0 match/3018))";
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             file,
             Odoc_info["Name"][1](a[1][1]))}
         else
          {bs(b,Odoc_info["Name"][1](a[1][1]))}
         
         bs(b,"</span>");
         bs(b," : ");
         "(sendself self-4/2300 html_of_type_expr/1884 b/2301 module_name/2303\n  (field 2 (field 0 a/2302)))";
         
         bs(b,"</pre>");
         "(sendself self-4/2300 html_of_info/2246 0a 0a b/2301\n  (field 1 (field 0 a/2302)))";
         },
       html_of_method,
       function(self$neg4,b,m)
        {var module_name=Odoc_info["Name"][5](Odoc_info["Name"][5](m[1][1]));
         
         bs(b,"\n<pre>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span id="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span id="%s">'],
           Naming[32](m));
         '(sendself self-4/2307 keyword/1879 "method")';
         bs(b,Pervasives["^"](0," "));
         if(m[2])
          {'(sendself self-4/2307 keyword/1879 "private")';
           bs(b,Pervasives["^"](0," "))}
         else
          {}
         
         if(m[3])
          {'(sendself self-4/2307 keyword/1879 "virtual")';
           bs(b,Pervasives["^"](0," "))}
         else
          {}
         
         var match=m[1][6];
         
         if(match)
          {var file=Naming[34](m);
           
           "(sendself self-4/2307 output_code/1881 (field 0 (field 0 m/2309))\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) file/2312)\n  (field 0 match/3015))";
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             file,
             Odoc_info["Name"][1](m[1][1]))}
         else
          {bs(b,Odoc_info["Name"][1](m[1][1]))}
         
         bs(b,"</span>");
         bs(b," : ");
         "(sendself self-4/2307 html_of_type_expr/1884 b/2308 module_name/2310\n  (field 2 (field 0 m/2309)))";
         
         bs(b,"</pre>");
         "(sendself self-4/2307 html_of_info/2246 0a 0a b/2308\n  (field 1 (field 0 m/2309)))";
         
         if(with_parameter_list[1])
          {"(sendself self-4/2307 html_of_parameter_list/1904 b/2308 module_name/2310\n  (field 4 (field 0 m/2309)))";
           }
         else
          {"(sendself self-4/2307 html_of_described_parameter_list/1905 b/2308\n  module_name/2310 (field 4 (field 0 m/2309)))";
           }
         },
       html_of_parameter_description,
       function(self$neg4,b,p)
        {var l=Odoc_info["Parameter"][3](p);
         
         if(l)
          {if(l[2])
            {var
              l2=
               List["filter"]
                (function(n)
                  {return Odoc_info["Parameter"][4](p,n)!=/* None */0;},
                 l);
             
             var
              print_one=
               function(n)
                {var match=Odoc_info["Parameter"][4](p,n);
                 
                 if(match)
                  {bs(b,"<code>");
                   bs(b,n);
                   bs(b,"</code> : ");
                   "(sendself self-4/2314 html_of_text/2177 b/2315 (field 0 match/3011))";
                   }
                 else
                  {return /* () */0;}
                 };
             
             return print_concat(b,"<br>\n",print_one,l2);
             }
           else
            {var match=Odoc_info["Parameter"][4](p,l[1]);
             
             if(match)
              {"(sendself self-4/2314 html_of_text/2177 b/2315 (field 0 match/3009))";
               }
             else
              {return /* () */0;}
             }
           }
         else
          {return /* () */0;}
         },
       html_of_parameter_list,
       function(self$neg4,b,m_name,l)
        {if(l)
          {bs(b,'<div class="param_info">');
           bs(b,'<table border="0" cellpadding="3" width="100%">\n');
           bs(b,'<tr>\n<td align="left" valign="top" width="1%">');
           bs(b,"<b>");
           bs(b,Odoc_messages["parameters"]);
           bs(b,": </b></td>\n");
           bs(b,'<td>\n<table class="paramstable">\n');
           var
            print_one=
             function(p)
              {bs
                (b,
                 '<tr>\n<td align="center" valign="top" width="15%" class="code">\n');
               var s=Odoc_info["Parameter"][1](p);
               
               switch(s){case "":var $js="?";default:var $js=s;}
               bs(b,$js);
               bs(b,'</td>\n<td align="center" valign="top">:</td>\n');
               bs(b,"<td>");
               "(sendself self-4/2326 html_of_type_expr/1884 b/2327 m_name/2328\n  (apply (field 1 (field 3 (global Odoc_info!))) p/2331))";
               
               bs(b,"<br>\n");
               "(sendself self-4/2326 html_of_parameter_description/1903 b/2327 p/2331)";
               
               return bs(b,"\n</tr>\n");
               };
           
           List["iter"](print_one,l);
           return bs(b,"</table>\n</td>\n</tr>\n</table></div>\n");
           }
         else
          {return /* () */0;}
         },
       html_of_described_parameter_list,
       function(self$neg4,b,m_name,l)
        {var
          l2=
           List["filter"]
            (function(p)
              {return List["exists"]
                       (function(n)
                         {return Odoc_info["Parameter"][4](p,n)!=/* None */0;},
                        Odoc_info["Parameter"][3](p));
               },
             l);
         
         var
          f=
           function(p)
            {bs(b,'<div class="param_info"><code class="code">');
             bs(b,Odoc_info["Parameter"][1](p));
             bs(b,"</code> : ");
             "(sendself self-4/2334 html_of_parameter_description/1903 b/2335 p/2342)";
             
             return bs(b,"</div>\n");
             };
         
         return List["iter"](f,l2);
         },
       html_of_module_parameter_list,
       function(self$neg4,b,m_name,l)
        {if(l)
          {bs(b,'<table border="0" cellpadding="3" width="100%">\n');
           bs(b,"<tr>\n");
           bs(b,'<td align="left" valign="top" width="1%%"><b>');
           bs(b,Odoc_messages["parameters"]);
           bs(b,": </b></td>\n<td>\n");
           bs(b,'<table class="paramstable">\n');
           List["iter"]
            (function(param)
              {var desc_opt=param[2];
               
               var p=param[1];
               
               bs(b,"<tr>\n");
               bs(b,'<td align="center" valign="top" width="15%">\n<code>');
               bs(b,p[1]);
               bs(b,"</code></td>\n");
               bs(b,'<td align="center" valign="top">:</td>\n');
               bs(b,"<td>");
               "(sendself self-4/2344 html_of_module_parameter_type/1894 b/2345 m_name/2346\n  p/2348)";
               
               bs(b,"\n");
               if(desc_opt)
                {bs(b,"<br>");
                 "(sendself self-4/2344 html_of_text/2177 b/2345 (field 0 desc_opt/2349))";
                 
                 return bs(b,"\n</tr>\n");
                 }
               else
                {return /* () */0;}
               },
             l);
           return bs(b,"</table>\n</td>\n</tr>\n</table>\n");
           }
         else
          {return /* () */0;}
         },
       html_of_module,
       function(self$neg4,b,$staropt$star,$staropt$star,$staropt$star,m)
        {if($staropt$star$1)
          {var info$1=$staropt$star$1[1];}
         else
          {var info$1=/* true */1;}
         
         if($staropt$star$2)
          {var complete=$staropt$star$2[1];}
         else
          {var complete=/* true */1;}
         
         if($staropt$star)
          {var with_link=$staropt$star[1];}
         else
          {var with_link=/* true */1;}
         
         var match=Naming[11](m[1]);
         
         var father=Odoc_info["Name"][5](m[1]);
         
         bs(b,"\n<pre>");
         '(sendself self-4/2352 keyword/1879 "module")';
         bs(b,Pervasives["^"](0," "));
         if(with_link)
          {bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             Odoc_info["Name"][1](m[1]))}
         else
          {bs(b,Odoc_info["Name"][1](m[1]))}
         
         var match$1=m[6];
         
         var exit;
         
         switch(match$1[0])
          {case 2:if(html_short_functors[1]){}else{exit=94;}default:exit=94;}
         
         switch(exit){case 94:bs(b,": ")}
         
         "(sendself self-4/2352 html_of_module_kind/1890 b/2353 father/2365\n  (makeblock 0 m/2363) (field 5 m/2363))";
         
         bs(b,"</pre>");
         if(info$1)
          {if(complete)
            {'(sendself self-4/2352 html_of_info/2246 [0: "module top"] [0: 1a])';
             }
           else
            {"(sendself self-4/2352 html_of_info_first_sentence/2366)";}
           return $js(b,m[3]);
           }
         else
          {return /* () */0;}
         },
       html_of_modtype,
       function(self$neg4,b,$staropt$star,$staropt$star,$staropt$star,mt)
        {if($staropt$star$1)
          {var info$1=$staropt$star$1[1];}
         else
          {var info$1=/* true */1;}
         
         if($staropt$star$2)
          {var complete=$staropt$star$2[1];}
         else
          {var complete=/* true */1;}
         
         if($staropt$star)
          {var with_link=$staropt$star[1];}
         else
          {var with_link=/* true */1;}
         
         var match=Naming[11](mt[1]);
         
         var father=Odoc_info["Name"][5](mt[1]);
         
         bs(b,"\n<pre>");
         '(sendself self-4/2368 keyword/1879 "module type")';
         bs(b,Pervasives["^"](0," "));
         if(with_link)
          {bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             Odoc_info["Name"][1](mt[1]))}
         else
          {bs(b,Odoc_info["Name"][1](mt[1]))}
         
         var match$1=mt[6];
         
         if(match$1)
          {bs(b," = ");
           "(sendself self-4/2368 html_of_module_type_kind/1893 b/2369 father/2381 0a\n  (makeblock 0 mt/2379) (field 0 match/2982))";
           }
         else
          {}
         
         bs(b,"</pre>");
         if(info$1)
          {if(complete)
            {'(sendself self-4/2368 html_of_info/2246 [0: "modtype top"] [0: 1a])';
             }
           else
            {"(sendself self-4/2368 html_of_info_first_sentence/2366)";}
           return $js(b,mt[2]);
           }
         else
          {return /* () */0;}
         },
       html_of_included_module,
       function(self$neg4,b,im)
        {bs(b,"\n<pre>");
         '(sendself self-4/2384 keyword/1879 "include")';
         bs(b,Pervasives["^"](0," "));
         var match=im[2];
         
         if(match)
          {var m=match[1][1];
           
           var match$1=Naming[11](m[1]);
           
           var match$2=/* tuple */[0,match$1[1],m[1]];
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             match$2[1],
             match$2[2])}
         else
          {bs(b,im[1])}
         
         bs(b,"</pre>\n");
         "(sendself self-4/2384 html_of_info/2246 0a 0a b/2385 (field 2 im/2386))";
         },
       html_of_class_element,
       function(self$neg4,b,element)
        {switch(element[0])
          {case 0:
            "(sendself self-4/2395 html_of_attribute/1901 b/2396 (field 0 element/2397))";
            
           case 1:
            "(sendself self-4/2395 html_of_method/1902 b/2396 (field 0 element/2397))";
            
           case 2:
            "(sendself self-4/2395 html_of_class_comment/1917 b/2396\n  (field 0 element/2397))";
            
           }
         },
       html_of_class_kind,
       function(self$neg4,b,father,cl,kind)
        {switch(kind[0])
          {case 0:
            var inh$2=kind[1];
            
            '(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: "object"] 0a])';
            
            if(cl)
             {var match=Naming[11](cl[1][1]);
              
              bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  ' <a href="',
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,'">..</a> ',/* End_of_format */0]]],
                 ' <a href="%s">..</a> '],
                match[1])}
            else
             {bs(b,"\n");
              if(inh$2)
               {"(sendself self-4/2402 generate_inheritance_info/1918 b/2403 inh/2407)";
                }
              else
               {}
              
              "(sendself self-4/2402 html_of_class_element/1910 b/2403)";
              List["iter"](0,kind[2])}
            
            '(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: "end"] 0a])';
            
           case 1:
            '(sendself self-4/2402 html_of_text/2177 b/2403\n  [0: [0: "class application not handled yet"] 0a])';
            
           case 2:
            var cco=kind[1];
            
            var l=cco[3];
            
            if(l)
             {"(sendself self-4/2402 html_of_class_type_param_expr_list/1886 b/2403\n  father/2404 l/2415)";
              
              bs(b," ")}
            else
             {}
            
            bs(b,'<code class="type">');
            "(sendself self-4/2402 create_fully_qualified_idents_links/1882 father/2404\n  (field 0 cco/2410))";
            bs(b,0);
            return bs(b,"</code>");
            
           case 3:
            '(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: "( "] 0a])';
            
            "(sendself self-4/2402 html_of_class_kind/1911 b/2403 father/2404 0a\n  (field 0 kind/2406))";
            
            '(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: " : "] 0a])';
            
            "(sendself self-4/2402 html_of_class_type_kind/1912 b/2403 father/2404 0a\n  (field 1 kind/2406))";
            
            '(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: " )"] 0a])';
            
           }
         },
       html_of_class_type_kind,
       function(self$neg4,b,father,ct,kind)
        {switch(kind[0])
          {case 0:
            var inh$2=kind[1];
            
            '(sendself self-4/2417 html_of_text/2177 b/2418 [0: [1: "object"] 0a])';
            
            if(ct)
             {var match=Naming[11](ct[1][1]);
              
              bp
               (b,
                [/* Format */0,
                 [/* String_literal */11,
                  ' <a href="',
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,'">..</a> ',/* End_of_format */0]]],
                 ' <a href="%s">..</a> '],
                match[1])}
            else
             {bs(b,"\n");
              if(inh$2)
               {"(sendself self-4/2417 generate_inheritance_info/1918 b/2418 inh/2423)";
                }
              else
               {}
              
              "(sendself self-4/2417 html_of_class_element/1910 b/2418)";
              List["iter"](0,kind[2])}
            
            '(sendself self-4/2417 html_of_text/2177 b/2418 [0: [1: "end"] 0a])';
            
           case 1:
            var cta=kind[1];
            
            var l=cta[3];
            
            if(l)
             {"(sendself self-4/2417 html_of_class_type_param_expr_list/1886 b/2418\n  father/2419 l/2425)";
              
              bs(b," ")}
            else
             {}
            
            bs(b,'<code class="type">');
            "(sendself self-4/2417 create_fully_qualified_idents_links/1882 father/2419\n  (field 0 cta/2422))";
            bs(b,0);
            return bs(b,"</code>");
            
           }
         },
       html_of_class,
       function(self$neg4,b,$staropt$star,$staropt$star,c)
        {if($staropt$star$1)
          {var complete=$staropt$star$1[1];}
         else
          {var complete=/* true */1;}
         
         if($staropt$star)
          {var with_link=$staropt$star[1];}
         else
          {var with_link=/* true */1;}
         
         var father=Odoc_info["Name"][5](c[1]);
         
         Odoc_info["reset_type_names"](/* () */0);
         var match=Naming[11](c[1]);
         
         bs(b,"\n<pre>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span name="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span name="%s">'],
           Naming[14]
            (/* record */[0,
              c[1],
              /* None */0,
              /* [] */0,
              /* Type_abstract */0,
              /* Public */1,
              /* None */0,
              Odoc_info["dummy_loc"],
              /* None */0]));
         '(sendself self-4/2429 keyword/1879 "class")';
         bs(b,Pervasives["^"](0," "));
         if(c[5])
          {'(sendself self-4/2429 keyword/1879 "virtual")';
           bs(b,Pervasives["^"](0," "))}
         else
          {}
         
         var l=c[4];
         
         if(l)
          {"(sendself self-4/2429 html_of_class_type_param_expr_list/1886 b/2430\n  father/2438 l/2440)";
           
           bs(b," ")}
         else
          {}
         
         if(with_link)
          {bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             Odoc_info["Name"][1](c[1]))}
         else
          {bs(b,Odoc_info["Name"][1](c[1]))}
         
         bs(b,"</span>");
         bs(b," : ");
         "(sendself self-4/2429 html_of_class_parameter_list/1887 b/2430 father/2438\n  c/2437)";
         
         "(sendself self-4/2429 html_of_class_kind/1911 b/2430 father/2438\n  (makeblock 0 c/2437) (field 5 c/2437))";
         
         bs(b,"</pre>");
         if(complete)
          {'(sendself self-4/2429 html_of_info/2246 [0: "class top"] [0: 1a])';
           }
         else
          {"(sendself self-4/2429 html_of_info_first_sentence/2366)";}
         return $js(b,c[2]);
         },
       html_of_class_type,
       function(self$neg4,b,$staropt$star,$staropt$star,ct)
        {if($staropt$star$1)
          {var complete=$staropt$star$1[1];}
         else
          {var complete=/* true */1;}
         
         if($staropt$star)
          {var with_link=$staropt$star[1];}
         else
          {var with_link=/* true */1;}
         
         Odoc_info["reset_type_names"](/* () */0);
         var father=Odoc_info["Name"][5](ct[1]);
         
         var match=Naming[11](ct[1]);
         
         bs(b,"\n<pre>");
         bp
          (b,
           [/* Format */0,
            [/* String_literal */11,
             '<span id="',
             [/* String */2,
              /* No_padding */0,
              [/* String_literal */11,'">',/* End_of_format */0]]],
            '<span id="%s">'],
           Naming[14]
            (/* record */[0,
              ct[1],
              /* None */0,
              /* [] */0,
              /* Type_abstract */0,
              /* Public */1,
              /* None */0,
              Odoc_info["dummy_loc"],
              /* None */0]));
         '(sendself self-4/2442 keyword/1879 "class type")';
         bs(b,Pervasives["^"](0," "));
         if(ct[5])
          {'(sendself self-4/2442 keyword/1879 "virtual")';
           bs(b,Pervasives["^"](0," "))}
         else
          {}
         
         var l=ct[4];
         
         if(l)
          {"(sendself self-4/2442 html_of_class_type_param_expr_list/1886 b/2443\n  father/2451 l/2453)";
           
           bs(b," ")}
         else
          {}
         
         if(with_link)
          {bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             Odoc_info["Name"][1](ct[1]))}
         else
          {bs(b,Odoc_info["Name"][1](ct[1]))}
         
         bs(b,"</span>");
         bs(b," = ");
         "(sendself self-4/2442 html_of_class_type_kind/1912 b/2443 father/2451\n  (makeblock 0 ct/2450) (field 5 ct/2450))";
         
         bs(b,"</pre>");
         if(complete)
          {'(sendself self-4/2442 html_of_info/2246 [0: "classtype top"] [0: 1a])';
           }
         else
          {"(sendself self-4/2442 html_of_info_first_sentence/2366)";}
         return $js(b,ct[2]);
         },
       html_of_dag,
       function(self$neg4,dag)
        {var
          f=
           function(n)
            {var match=n[2];
             
             var cct_opt=match[2];
             
             var name=match[1];
             
             if(cct_opt)
              {var c=cct_opt[1][1];
               
               var match$1=/* tuple */[0,c[1],Naming[11](c[1])[1]];
               }
             else
              {var match$1=/* tuple */[0,name,Naming[11](name)[1]];}
             
             var
              new_v=
               Pervasives["^"]
                ("<table border=1>\n<tr><td>",
                 Pervasives["^"]
                  ('<a href="',
                   Pervasives["^"]
                    (match$1[2],
                     Pervasives["^"]
                      ('">',
                       Pervasives["^"]
                        (match$1[1],
                         Pervasives["^"]("</a>","</td></tr>\n</table>\n"))))));
             
             return /* record */[0,n[1],new_v,n[3]];
             };
         
         var a=$$Array["map"](f,dag[1]);
         
         return Odoc_dag2html["html_of_dag"](/* record */[0,a]);
         },
       html_of_module_comment,
       function(self$neg4,b,text)
        {bs(b,"<br>\n");
         "(sendself self-4/2468 html_of_text/2177 b/2469 text/2470)";
         
         return bs(b,"<br>\n");
         },
       html_of_class_comment,
       function(self$neg4,b,text)
        {var exit;
         
         if(text)
          {var match=text[1];
           
           if(typeof match=="number")
            {switch(match){}}
           else
            {switch(match[0])
              {case 0:
                var
                 text2=
                  /* :: */[0,
                   /* Title */[13,
                    2,
                    /* None */0,
                    /* :: */[0,/* Raw */[0,match[1]],/* [] */0]],
                   text[2]];
                
               default:exit=63;}}
           }
         else
          {exit=63;}
         
         switch(exit){case 63:var text2=text;}
         
         "(sendself self-4/2472 html_of_text/2177 b/2473 text2/2475)";
         },
       generate_inheritance_info,
       function(self$neg4,b,inher_l)
        {var
          f=
           function(inh)
            {var match=inh[2];
             
             if(match)
              {var real_name=match[1][1][1];
               
               var match$1=Naming[11](real_name);
               
               var match$2=inh[3];
               
               return /* :: */[0,
                       /* Link */[15,
                        match$1[1],
                        /* :: */[0,/* Code */[1,real_name],/* [] */0]],
                       match$2?/* :: */[0,[/* Raw */0,"    "],match$2[1]]:/* [] */0];
               }
             else
              {var match$3=inh[3];
               
               return /* :: */[0,
                       /* Code */[1,inh[1]],
                       match$3?/* :: */[0,[/* Raw */0,"    "],match$3[1]]:/* [] */0];
               }
             };
         
         var
          text$1=
           /* :: */[0,
            /* Bold */[4,
             /* :: */[0,/* Raw */[0,Odoc_messages["inherits"]],/* [] */0]],
            /* :: */[0,/* List */[10,List["map"](f,inher_l)],/* [] */0]];
         
         "(sendself self-4/2479 html_of_text/2177 b/2480 text/2491)";
         },
       generate_class_inheritance_info,
       function(self$neg4,b,cl)
        {var
          iter_kind=
           function(k)
            {var exit;
             
             switch(k[0])
              {case 0:
                var l=k[1];
                
                if(l)
                 {"(sendself self-4/2493 generate_inheritance_info/1918 b/2494 l/2498)";
                  }
                else
                 {return /* () */0;}
                
               case 1:exit=57;
               case 2:exit=57;
               case 3:return iter_kind(k[1]);
               }
             
             switch(exit){case 57:return /* () */0;}
             };
         
         return iter_kind(cl[6]);
         },
       generate_class_type_inheritance_info,
       function(self$neg4,b,clt)
        {var match=clt[6];
         
         switch(match[0])
          {case 0:
            var l=match[1];
            
            if(l)
             {"(sendself self-4/2502 generate_inheritance_info/1918 b/2503 l/2505)";
              }
            else
             {return /* () */0;}
            
           case 1:return /* () */0;
           }
         },
       generate_elements_index,
       function(self$neg4,elements,name,info,target,title,simple_file)
        {try
          {var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],simple_file));
           
           var b=new_buf(/* () */0);
           
           bs(b,"<html>\n");
           "(sendself self-4/2507 print_header/1875 b/2515 0a 0a\n  (sendself self-4/2507 inner_title/1874 title/2512))";
           
           bs(b,"<body>\n");
           '(sendself self-4/2507 print_navbar/1878 b/2515 0a 0a "")';
           
           bs(b,"<h1>");
           bs(b,title);
           bs(b,"</h1>\n");
           var
            sorted_elements=
             List["sort"]
              (function(e1,e2)
                {return CamlPrimtivie["caml_string_compare"]
                         (Odoc_info["Name"][1](name(e1)),
                          Odoc_info["Name"][1](name(e2)));
                 },
               elements);
           
           var
            groups=
             Odoc_info["create_index_lists"]
              (sorted_elements,
               function(e){return Odoc_info["Name"][1](name(e));});
           
           var
            f_ele=
             function(e)
              {var simple_name=Odoc_info["Name"][1](name(e));
               
               var father_name=Odoc_info["Name"][5](name(e));
               
               "(sendself self-4/2507 escape/1996 simple_name/2523)";
               bp
                (b,
                 [/* Format */0,
                  [/* String_literal */11,
                   '<tr><td><a href="',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,
                     '">',
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,"</a> ",/* End_of_format */0]]]]],
                  '<tr><td><a href="%s">%s</a> '],
                 target(e),
                 0);
               if
                (CamlPrimtivie["caml_string_notequal"]
                  (simple_name,father_name)&&
                 CamlPrimtivie["caml_string_notequal"](father_name,""))
                {bp
                  (b,
                   [/* Format */0,
                    [/* String_literal */11,
                     '[<a href="',
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       '">',
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11,"</a>]",/* End_of_format */0]]]]],
                    '[<a href="%s">%s</a>]'],
                   Naming[11](father_name)[1],
                   father_name)}
               else
                {}
               
               bs(b,"</td>\n<td>");
               "(sendself self-4/2507 html_of_info_first_sentence/2366 b/2515\n  (apply info/2510 e/2522))";
               
               return bs(b,"</td></tr>\n");
               };
           
           var
            f_group=
             function(l)
              {if(l)
                {var c=Char["uppercase"](Odoc_info["Name"][1](name(l[1]))[0]);
                 
                 if(25<-65+c>>>0){var s="";}else{var s=$$String["make"](1,c);}
                 
                 bs(b,'<tr><td align="left"><br>');
                 bs(b,s);
                 bs(b,"</td></tr>\n");
                 return List["iter"](f_ele,l);
                 }
               else
                {return /* () */0;}
               };
           
           bs(b,"<table>\n");
           List["iter"](f_group,groups);
           bs(b,"</table>\n");
           bs(b,"</body>\n</html>");
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_elements,
       function(self$neg4,f_generate,l)
        {var
          iter=
           function(pre_opt,param)
            {if(param)
              {var match=param[2];
               
               var ele=param[1];
               
               if(match)
                {var ele2=match[1];
                 
                 f_generate(pre_opt,/* Some */[0,ele2],ele);
                 return iter(/* Some */[0,ele],/* :: */[0,ele2,match[2]]);
                 }
               else
                {return f_generate(pre_opt,/* None */0,ele);}
               }
             else
              {return /* () */0;}
             };
         
         return iter(/* None */0,l);
         },
       generate_for_class,
       function(self$neg4,pre,post,cl)
        {Odoc_info["reset_type_names"](/* () */0);
         var match=Naming[11](cl[1]);
         
         var type_file=Naming[39](cl[1]);
         
         try
          {var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],match[1]));
           
           var b=new_buf(/* () */0);
           
           var pre_name=opt(function(c){return c[1];},pre);
           
           var post_name=opt(function(c){return c[1];},post);
           
           bs(b,self$neg4[doctype]);
           bs(b,"<html>\n");
           "(sendself self-4/2542 print_header/1875 b/2549\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2550 post_name/2552 (field 0 cl/2545))))\n  (makeblock 0 (apply (field 4 (field 8 (global Odoc_info!))) 0a cl/2545))\n  (sendself self-4/2542 inner_title/1874 (field 0 cl/2545)))";
           
           bs(b,"<body>\n");
           "(sendself self-4/2542 print_navbar/1878 b/2549 pre_name/2550 post_name/2552\n  (field 0 cl/2545))";
           
           bs(b,"<h1>");
           bs(b,Pervasives["^"](Odoc_messages["clas"]," "));
           if(cl[5]){bs(b,"virtual ")}else{}
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             type_file,
             cl[1]);
           bs(b,"</h1>\n");
           "(sendself self-4/2542 html_of_class/1913 b/2549 0a [0: 0a] cl/2545)";
           
           "(sendself self-4/2542 html_of_described_parameter_list/1905 b/2549\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 cl/2545))\n  (field 6 cl/2545))";
           
           "(sendself self-4/2542 generate_class_inheritance_info/1919 b/2549 cl/2545)";
           
           bs(b,'<hr width="100%">\n');
           "(sendself self-4/2542 html_of_class_element/1910 b/2549)";
           List["iter"]
            (0,Odoc_info["Class"][1]([/* Some */0,/* false */0],cl));
           bs(b,"</body></html>");
           Buffer["output_buffer"](chanout,b);
           Pervasives["close_out"](chanout);
           "(sendself self-4/2542 output_class_type/1896 (field 0 cl/2545)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2547)\n  (field 2 cl/2545))";
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_for_class_type,
       function(self$neg4,pre,post,clt)
        {Odoc_info["reset_type_names"](/* () */0);
         var match=Naming[11](clt[1]);
         
         var type_file=Naming[39](clt[1]);
         
         try
          {var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],match[1]));
           
           var b=new_buf(/* () */0);
           
           var pre_name=opt(function(ct){return ct[1];},pre);
           
           var post_name=opt(function(ct){return ct[1];},post);
           
           bs(b,self$neg4[doctype]);
           bs(b,"<html>\n");
           "(sendself self-4/2556 print_header/1875 b/2563\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2564 post_name/2566 (field 0 clt/2559))))\n  (makeblock 0 (apply (field 9 (field 8 (global Odoc_info!))) 0a clt/2559))\n  (sendself self-4/2556 inner_title/1874 (field 0 clt/2559)))";
           
           bs(b,"<body>\n");
           "(sendself self-4/2556 print_navbar/1878 b/2563 pre_name/2564 post_name/2566\n  (field 0 clt/2559))";
           
           bs(b,"<h1>");
           bs(b,Pervasives["^"](Odoc_messages["class_type"]," "));
           if(clt[5]){bs(b,"virtual ")}else{}
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,
               '<a href="',
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 '">',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
              '<a href="%s">%s</a>'],
             type_file,
             clt[1]);
           bs(b,"</h1>\n");
           "(sendself self-4/2556 html_of_class_type/1914 b/2563 0a [0: 0a] clt/2559)";
           
           "(sendself self-4/2556 generate_class_type_inheritance_info/1920 b/2563\n  clt/2559)";
           
           bs(b,'<hr width="100%">\n');
           "(sendself self-4/2556 html_of_class_element/1910 b/2563)";
           List["iter"]
            (0,Odoc_info["Class"][6]([/* Some */0,/* false */0],clt));
           bs(b,"</body></html>");
           Buffer["output_buffer"](chanout,b);
           Pervasives["close_out"](chanout);
           "(sendself self-4/2556 output_class_type/1896 (field 0 clt/2559)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2561)\n  (field 2 clt/2559))";
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_for_module_type,
       function(self$neg4,pre,post,mt)
        {try
          {var match=Naming[11](mt[1]);
           
           var type_file=Naming[37](mt[1]);
           
           var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],match[1]));
           
           var b=new_buf(/* () */0);
           
           var pre_name=opt(function(mt){return mt[1];},pre);
           
           var post_name=opt(function(mt){return mt[1];},post);
           
           bs(b,self$neg4[doctype]);
           bs(b,"<html>\n");
           "(sendself self-4/2570 print_header/1875 b/2577\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2578 post_name/2580 (field 0 mt/2573))))\n  (makeblock 0 (apply (field 30 (field 9 (global Odoc_info!))) 0a mt/2573))\n  (sendself self-4/2570 inner_title/1874 (field 0 mt/2573)))";
           
           bs(b,"<body>\n");
           "(sendself self-4/2570 print_navbar/1878 b/2577 pre_name/2578 post_name/2580\n  (field 0 mt/2573))";
           
           bp
            (b,
             [/* Format */0,
              [/* String_literal */11,"<h1>",/* End_of_format */0],
              "<h1>"]);
           bs(b,Pervasives["^"](Odoc_messages["module_type"]," "));
           var match$1=mt[3];
           
           if(match$1)
            {bp
              (b,
               [/* Format */0,
                [/* String_literal */11,
                 '<a href="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
                '<a href="%s">%s</a>'],
               type_file,
               mt[1])}
           else
            {bs(b,mt[1])}
           
           bs(b,"</h1>\n");
           "(sendself self-4/2570 html_of_modtype/1908 b/2577 0a 0a [0: 0a] mt/2573)";
           
           "(sendself self-4/2570 html_of_module_parameter_list/1906 b/2577\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/2573))\n  (apply (field 29 (field 9 (global Odoc_info!))) 0a mt/2573))";
           
           bs(b,'<hr width="100%">\n');
           "(sendself self-4/2570 html_of_module_element/1892 b/2577 (field 0 mt/2573))";
           List["iter"](0,Odoc_info["Module"][17](/* None */0,mt));
           bs(b,"</body></html>");
           Buffer["output_buffer"](chanout,b);
           Pervasives["close_out"](chanout);
           "(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_module/1926)\n  (apply (field 17 (field 9 (global Odoc_info!))) 0a mt/2573))";
           
           "(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_module_type/1925)\n  (apply (field 18 (field 9 (global Odoc_info!))) 0a mt/2573))";
           
           "(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_class/1923)\n  (apply (field 25 (field 9 (global Odoc_info!))) 0a mt/2573))";
           
           "(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_class_type/1924)\n  (apply (field 26 (field 9 (global Odoc_info!))) 0a mt/2573))";
           
           var match$2=mt[3];
           
           if(match$2)
            {"(sendself self-4/2570 output_module_type/1895 (field 0 mt/2573)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2575)\n  (field 0 match/2880))";
             }
           else
            {return /* () */0;}
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_for_module,
       function(self$neg4,pre,post,modu)
        {try
          {Odoc_info["verbose"]
            (Pervasives["^"]("Generate for module ",modu[1]));
           var match=Naming[11](modu[1]);
           
           var type_file=Naming[37](modu[1]);
           
           var code_file=Naming[38](modu[1]);
           
           var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],match[1]));
           
           var b=new_buf(/* () */0);
           
           var pre_name=opt(function(m){return m[1];},pre);
           
           var post_name=opt(function(m){return m[1];},post);
           
           bs(b,self$neg4[doctype]);
           bs(b,"<html>\n");
           "(sendself self-4/2585 print_header/1875 b/2593\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2594 post_name/2596 (field 0 modu/2588))))\n  (makeblock 0 (apply (field 15 (field 9 (global Odoc_info!))) 0a modu/2588))\n  (sendself self-4/2585 inner_title/1874 (field 0 modu/2588)))";
           
           bs(b,"<body>\n");
           "(sendself self-4/2585 print_navbar/1878 b/2593 pre_name/2594 post_name/2596\n  (field 0 modu/2588))";
           
           bs(b,"<h1>");
           if(modu[11])
            {bs(b,modu[1])}
           else
            {bs
              (b,
               Odoc_info["Module"][14](modu)
                ?Odoc_messages["functo"]
                :Odoc_messages["modul"]);
             bp
              (b,
               [/* Format */0,
                [/* String_literal */11,
                 ' <a href="',
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   '">',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"</a>",/* End_of_format */0]]]]],
                ' <a href="%s">%s</a>'],
               type_file,
               modu[1]);
             var match$1=modu[9];
             
             if(match$1)
              {bp
                (b,
                 [/* Format */0,
                  [/* String_literal */11,
                   ' (<a href="',
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,'">.ml</a>)',/* End_of_format */0]]],
                  ' (<a href="%s">.ml</a>)'],
                 code_file)}
             else
              {}
             }
           
           bs(b,"</h1>\n");
           if(!modu[11])
            {"(sendself self-4/2585 html_of_module/1907 b/2593 0a 0a [0: 0a] modu/2588)";
             }
           else
            {}
           
           "(sendself self-4/2585 html_of_module_parameter_list/1906 b/2593\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 modu/2588))\n  (apply (field 14 (field 9 (global Odoc_info!))) 0a modu/2588))";
           
           if(!modu[11]){bs(b,'<hr width="100%">\n')}else{}
           
           "(sendself self-4/2585 html_of_module_element/1892 b/2593 (field 0 modu/2588))";
           List["iter"](0,Odoc_info["Module"][1](/* None */0,modu));
           bs(b,"</body></html>");
           Buffer["output_buffer"](chanout,b);
           Pervasives["close_out"](chanout);
           "(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_module/1926)\n  (apply (field 1 (field 9 (global Odoc_info!))) 0a modu/2588))";
           
           "(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_module_type/1925)\n  (apply (field 2 (field 9 (global Odoc_info!))) 0a modu/2588))";
           
           "(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_class/1923)\n  (apply (field 10 (field 9 (global Odoc_info!))) 0a modu/2588))";
           
           "(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_class_type/1924)\n  (apply (field 11 (field 9 (global Odoc_info!))) 0a modu/2588))";
           
           "(sendself self-4/2585 output_module_type/1895 (field 0 modu/2588)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2590)\n  (field 1 modu/2588))";
           
           var match$2=modu[9];
           
           if(match$2)
            {"(sendself self-4/2585 output_code/1881 (field 0 modu/2588)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) code_file/2591)\n  (field 0 match/2864))";
             }
           else
            {return /* () */0;}
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_index,
       function(self$neg4,module_list)
        {try
          {"(sendself self-4/2601 index/1833)";
           var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],0));
           
           var b=new_buf(/* () */0);
           
           var match=Odoc_info["Global"][6][1];
           
           if(match)
            {"(sendself self-4/2601 escape/1996 (field 0 match/2859))";}
           else
            {var title$1="";}
           
           bs(b,self$neg4[doctype]);
           bs(b,"<html>\n");
           "(sendself self-4/2601 print_header/1875 b/2604 0a 0a\n  (sendself self-4/2601 title/1873))";
           
           bs(b,"<body>\n");
           bs(b,"<h1>");
           bs(b,title$1);
           bs(b,"</h1>\n");
           var
            info$1=
             Odoc_info["apply_opt"]
              (Odoc_info["info_of_comment_file"](module_list),
               Odoc_info["Global"][7][1]);
           
           if(info$1)
            {"(sendself self-4/2601 html_of_info/2246 0a [0: 0a] b/2604 info/2607)";
             }
           else
            {"(sendself self-4/2601 html_of_Index_list/2609 b/2604)";
             
             bs(b,"<br/>");
             "(sendself self-4/2601 html_of_Module_list/2610 b/2604\n  (apply (field 11 (global List!)) (function m/2611 (field 0 m/2611))\n    module_list/2602))";
             }
           
           bs(b,"</body>\n</html>");
           Buffer["output_buffer"](chanout,b);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_values_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2614 generate_elements_index/1921\n  (sendself self-4/2614 list_values/1849) (function v/2616 (field 0 v/2616))\n  (function v/2617 (field 1 v/2617)) (field 26 Naming/1324)\n  (field 223 (global Odoc_messages!))\n  (sendself self-4/2614 index_values/1834))";
         },
       generate_extensions_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2619 generate_elements_index/1921\n  (sendself self-4/2619 list_extensions/1851)\n  (function x/2621 (field 0 x/2621))\n  (function x/2622 (field 0 (field 3 x/2622)))\n  (function x/2623 (apply (field 21 Naming/1324) x/2623))\n  (field 224 (global Odoc_messages!))\n  (sendself self-4/2619 index_extensions/1836))";
         },
       generate_exceptions_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2625 generate_elements_index/1921\n  (sendself self-4/2625 list_exceptions/1853)\n  (function e/2627 (field 0 e/2627)) (function e/2628 (field 1 e/2628))\n  (field 23 Naming/1324) (field 225 (global Odoc_messages!))\n  (sendself self-4/2625 index_exceptions/1837))";
         },
       generate_types_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2630 generate_elements_index/1921\n  (sendself self-4/2630 list_types/1855) (function t/2632 (field 0 t/2632))\n  (function t/2633 (field 1 t/2633)) (field 17 Naming/1324)\n  (field 226 (global Odoc_messages!))\n  (sendself self-4/2630 index_types/1835))";
         },
       generate_attributes_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2635 generate_elements_index/1921\n  (sendself self-4/2635 list_attributes/1845)\n  (function a/2637 (field 0 (field 0 a/2637)))\n  (function a/2638 (field 1 (field 0 a/2638))) (field 29 Naming/1324)\n  (field 227 (global Odoc_messages!))\n  (sendself self-4/2635 index_attributes/1838))";
         },
       generate_methods_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2640 generate_elements_index/1921\n  (sendself self-4/2640 list_methods/1847)\n  (function m/2642 (field 0 (field 0 m/2642)))\n  (function m/2643 (field 1 (field 0 m/2643))) (field 32 Naming/1324)\n  (field 228 (global Odoc_messages!))\n  (sendself self-4/2640 index_methods/1839))";
         },
       generate_classes_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2645 generate_elements_index/1921\n  (sendself self-4/2645 list_classes/1861) (function c/2647 (field 0 c/2647))\n  (function c/2648 (field 1 c/2648))\n  (function c/2649 (field 0 (apply (field 10 Naming/1324) (field 0 c/2649))))\n  (field 229 (global Odoc_messages!))\n  (sendself self-4/2645 index_classes/1840))";
         },
       generate_class_types_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2651 generate_elements_index/1921\n  (sendself self-4/2651 list_class_types/1863)\n  (function ct/2653 (field 0 ct/2653)) (function ct/2654 (field 1 ct/2654))\n  (function ct/2655\n    (field 0 (apply (field 10 Naming/1324) (field 0 ct/2655))))\n  (field 230 (global Odoc_messages!))\n  (sendself self-4/2651 index_class_types/1841))";
         },
       generate_modules_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2657 generate_elements_index/1921\n  (sendself self-4/2657 list_modules/1857) (function m/2659 (field 0 m/2659))\n  (function m/2660 (field 2 m/2660))\n  (function m/2661 (field 0 (apply (field 10 Naming/1324) (field 0 m/2661))))\n  (field 231 (global Odoc_messages!))\n  (sendself self-4/2657 index_modules/1842))";
         },
       generate_module_types_index,
       function(self$neg4,module_list)
        {"(sendself self-4/2663 generate_elements_index/1921\n  (sendself self-4/2663 list_module_types/1859)\n  (function mt/2665 (field 0 mt/2665)) (function mt/2666 (field 1 mt/2666))\n  (function mt/2667\n    (field 0 (apply (field 10 Naming/1324) (field 0 mt/2667))))\n  (field 232 (global Odoc_messages!))\n  (sendself self-4/2663 index_module_types/1843))";
         },
       generate,
       function(self$neg4,module_list)
        {"(sendself self-4/2669 init_style/1872)";
         
         self$neg4[list_values$1]=Odoc_info["Search"][2](module_list),0;
         self$neg4[list_extensions$1]=Odoc_info["Search"][3](module_list),0;
         self$neg4[list_exceptions$1]=Odoc_info["Search"][4](module_list),0;
         self$neg4[list_types$1]=Odoc_info["Search"][5](module_list),0;
         self$neg4[list_attributes$1]=Odoc_info["Search"][6](module_list),0;
         self$neg4[list_methods$1]=Odoc_info["Search"][7](module_list),0;
         self$neg4[list_classes$1]=Odoc_info["Search"][8](module_list),0;
         self$neg4[list_class_types$1]=Odoc_info["Search"][9](module_list),0;
         self$neg4[list_modules$1]=Odoc_info["Search"][10](module_list),0;
         self$neg4[list_module_types$1]=
         Odoc_info["Search"][11](module_list),
         0;
         "(sendself self-4/2669 prepare_header/1876 module_list/2670)";
         
         var types=Odoc_info["Search"][5](module_list);
         
         self$neg4[known_types_names]=
         List["fold_left"]
          (function(acc,t){return StringSet[4](t[1],acc);},
           self$neg4[known_types_names],
           types),
         0;
         var classes=Odoc_info["Search"][8](module_list);
         
         var class_types=Odoc_info["Search"][9](module_list);
         
         self$neg4[known_classes_names]=
         List["fold_left"]
          (function(acc,c){return StringSet[4](c[1],acc);},
           self$neg4[known_classes_names],
           classes),
         0;
         self$neg4[known_classes_names]=
         List["fold_left"]
          (function(acc,ct){return StringSet[4](ct[1],acc);},
           self$neg4[known_classes_names],
           class_types),
         0;
         var module_types=Odoc_info["Search"][11](module_list);
         
         var modules=Odoc_info["Search"][10](module_list);
         
         self$neg4[known_modules_names]=
         List["fold_left"]
          (function(acc,m){return StringSet[4](m[1],acc);},
           self$neg4[known_modules_names],
           modules),
         0;
         self$neg4[known_modules_names]=
         List["fold_left"]
          (function(acc,mt){return StringSet[4](mt[1],acc);},
           self$neg4[known_modules_names],
           module_types),
         0;
         if(!index_only[1])
          {"(sendself self-4/2669 generate_elements/1922\n  (sendself self-4/2669 generate_for_module/1926) module_list/2670)";
           }
         else
          {}
         
         try
          {"(sendself self-4/2669 generate_index/1927 module_list/2670)";
           
           "(sendself self-4/2669 generate_values_index/1928 module_list/2670)";
           
           "(sendself self-4/2669 generate_extensions_index/1929 module_list/2670)";
           
           "(sendself self-4/2669 generate_exceptions_index/1930 module_list/2670)";
           
           "(sendself self-4/2669 generate_types_index/1931 module_list/2670)";
           
           "(sendself self-4/2669 generate_attributes_index/1932 module_list/2670)";
           
           "(sendself self-4/2669 generate_methods_index/1933 module_list/2670)";
           
           "(sendself self-4/2669 generate_classes_index/1934 module_list/2670)";
           
           "(sendself self-4/2669 generate_class_types_index/1935 module_list/2670)";
           
           "(sendself self-4/2669 generate_modules_index/1936 module_list/2670)";
           
           "(sendself self-4/2669 generate_module_types_index/1937 module_list/2670)";
           }
         catch(exn)
          {if(exn[1]=Failure)
            {Pervasives["prerr_endline"](exn[2]);
             return Odoc_info["errors"][0]++;
             }
           else
            {throw exn;}
           }
         }]);
    CamlinternalOO["add_initializer"]
     ($$class,
      function(self$neg4)
       {return Odoc_ocamlhtml["html_of_comment"][1]=
               function(s)
                {var b=new_buf(/* () */0);
                 
                 "(sendself self-4/2688 html_of_text/2177 b/2690\n  (apply (field 0 (field 1 (global Odoc_text!))) s/2689))";
                 
                 return Buffer["contents"](b);
                 },
               0;
        });
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1),
      obj_init$1($$self$1),
      $$self$1[doctype]=
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n',
      0,
      $$self$1[default_style_options]=
      /* :: */[0,
       ".keyword { font-weight : bold ; color : Red }",
       /* :: */[0,
        ".keywordsign { color : #C04600 }",
        /* :: */[0,
         ".superscript { font-size : 4 }",
         /* :: */[0,
          ".subscript { font-size : 4 }",
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
                ".info { margin-left : 3em; margin-right: 3em }",
                /* :: */[0,
                 ".param_info { margin-top: 4px; margin-left : 3em; margin-right : 3em }",
                 /* :: */[0,
                  ".code { color : #465F91 ; }",
                  /* :: */[0,
                   ".typetable { border-style : hidden }",
                   /* :: */[0,
                    ".paramstable { border-style : hidden ; padding: 5pt 5pt}",
                    /* :: */[0,
                     "tr { background-color : White }",
                     /* :: */[0,
                      "td.typefieldcomment { background-color : #FFFFFF ; font-size: smaller ;}",
                      /* :: */[0,
                       "div.sig_block {margin-left: 2em}",
                       /* :: */[0,
                        "*:target { background: yellow; }",
                        /* :: */[0,
                         "body {font: 13px sans-serif; color: black; text-align: left; padding: 5px; margin: 0}",
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
                                    ("text-align: center; background-color: #90BDFF ; ",
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
                                  [/* :: */0,
                                   "a {color: #416DFF; text-decoration: none}",
                                   [/* :: */0,
                                    "a:hover {background-color: #ddd; text-decoration: underline}",
                                    [/* :: */0,
                                     "pre { margin-bottom: 4px; font-family: monospace; }",
                                     [/* :: */0,
                                      "pre.verbatim, pre.codepre { }",
                                      [/* :: */0,
                                       ".indextable {border: 1px #ddd solid; border-collapse: collapse}",
                                       [/* :: */0,
                                        ".indextable td, .indextable th {border: 1px #ddd solid; min-width: 80px}",
                                        [/* :: */0,
                                         ".indextable td.module {background-color: #eee ;  padding-left: 2px; padding-right: 2px}",
                                         [/* :: */0,
                                          ".indextable td.module a {color: 4E6272; text-decoration: none; display: block; width: 100%}",
                                          [/* :: */0,
                                           ".indextable td.module a:hover {text-decoration: underline; background-color: transparent}",
                                           [/* :: */0,
                                            ".deprecated {color: #888; font-style: italic}",
                                            [/* :: */0,
                                             ".indextable tr td div.info { margin-left: 2px; margin-right: 2px }",
                                             [/* :: */0,
                                              "ul.indexlist { margin-left: 0; padding-left: 0;}",
                                              [/* :: */0,
                                               "ul.indexlist li { list-style-type: none ; margin-left: 0; padding-left: 0; }",
                                               /* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
      0,
      $$self$1[style_file]=
      "style.css",
      0,
      $$self$1[style]=
      "",
      0,
      $$self$1[known_types_names]=
      StringSet[1],
      0,
      $$self$1[known_classes_names]=
      StringSet[1],
      0,
      $$self$1[known_modules_names]=
      StringSet[1],
      0,
      $$self$1[list_attributes$1]=
      /* [] */0,
      0,
      $$self$1[list_methods$1]=
      /* [] */0,
      0,
      $$self$1[list_values$1]=
      /* [] */0,
      0,
      $$self$1[list_extensions$1]=
      /* [] */0,
      0,
      $$self$1[list_exceptions$1]=
      /* [] */0,
      0,
      $$self$1[list_types$1]=
      /* [] */0,
      0,
      $$self$1[list_modules$1]=
      /* [] */0,
      0,
      $$self$1[list_module_types$1]=
      /* [] */0,
      0,
      $$self$1[list_classes$1]=
      /* [] */0,
      0,
      $$self$1[list_class_types$1]=
      /* [] */0,
      0,
      $$self$1[header]=
      function(b,$staropt$star,$staropt$star,param)
       {if($staropt$star$1)
         {var nav=$staropt$star$1[1];}
        else
         {var nav=/* None */0;}
        
        if($staropt$star)
         {var comments=$staropt$star[1];}
        else
         {var comments=/* [] */0;}
        
        return /* () */0;
        },
      0;
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

module["exports"]=
{"with_parameter_list":with_parameter_list,
 "css_style":css_style,
 "index_only":index_only,
 "colorize_code":colorize_code,
 "html_short_functors":html_short_functors,
 "charset":charset,
 "Naming":Naming,
 "StringSet":StringSet,
 "ocaml_code":ocaml_code,
 "new_buf":new_buf,
 "bp":bp,
 "bs":bs,
 "text":text,
 "info":info,
 "opt":opt,
 "print_concat":print_concat,
 "newline_to_indented_br":newline_to_indented_br,
 "Generator":Generator};

