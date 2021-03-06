// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_name=require("./odoc_name.js");
var Odoc_global=require("./odoc_global.js");
var Odoc_class=require("./odoc_class.js");
var Odoc_type=require("./odoc_type.js");
var Odoc_dep=require("./odoc_dep.js");
var Odoc_value=require("./odoc_value.js");
var Printtyp=require("./printtyp.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Odoc_comments=require("./odoc_comments.js");
var Odoc_search=require("./odoc_search.js");
var Printf=require("./printf.js");
var Odoc_str=require("./odoc_str.js");
var Odoc_analyse=require("./odoc_analyse.js");
var Odoc_exception=require("./odoc_exception.js");
var Odoc_extension=require("./odoc_extension.js");
var Odoc_print=require("./odoc_print.js");
var Buffer=require("./buffer.js");
var Odoc_config=require("./odoc_config.js");
var Odoc_module=require("./odoc_module.js");
var Odoc_misc=require("./odoc_misc.js");
var Odoc_text=require("./odoc_text.js");
var Odoc_scan=require("./odoc_scan.js");
var Odoc_parameter=require("./odoc_parameter.js");
var CamlPrimitive=require("./camlPrimitive.js");



var Text_syntax=Odoc_text["Text_syntax"];

var dummy_loc=[/* record */0,/* None */0,/* None */0];

var
 analyse_files=
  function
   ($staropt$star,
    $staropt$star$1,
    $staropt$star$2,
    $staropt$star$3,
    $staropt$star$4,
    $staropt$star$5,
    files)
   {var merge_options=$staropt$star?$staropt$star[1]:/* [] */0;
    
    var include_dirs=$staropt$star$1?$staropt$star$1[1]:/* [] */0;
    
    var labels=$staropt$star$2?$staropt$star$2[1]:/* false */0;
    
    var sort_modules=$staropt$star$3?$staropt$star$3[1]:/* false */0;
    
    var no_stop=$staropt$star$4?$staropt$star$4[1]:/* false */0;
    
    var init=$staropt$star$5?$staropt$star$5[1]:/* [] */0;
    
    Odoc_global["merge_options"][1]=merge_options;
    Odoc_global["include_dirs"][1]=include_dirs;
    Odoc_global["classic"][1]=!labels;
    Odoc_global["sort_modules"][1]=sort_modules;
    Odoc_global["no_stop"][1]=no_stop;
    return Odoc_analyse["analyse_files"](/* Some */[0,init],files)};

var dump_modules=Odoc_analyse["dump_modules"];

var load_modules=Odoc_analyse["load_modules"];

var reset_type_names=Printtyp["reset"];

var
 string_of_variance=
  function(t,param)
   {return Odoc_str["string_of_variance"](t,/* tuple */[0,param[1],param[2]])};

var
 string_of_type_expr=
  function(t){return Odoc_print["string_of_type_expr"](t)};

var string_of_class_params=Odoc_str["string_of_class_params"];

var
 string_of_type_list=
  function(par,sep,type_list)
   {return Odoc_str["string_of_type_list"](par,sep,type_list)};

var
 string_of_type_param_list=
  function(t){return Odoc_str["string_of_type_param_list"](t)};

var
 string_of_type_extension_param_list=
  function(te){return Odoc_str["string_of_type_extension_param_list"](te)};

var
 string_of_class_type_param_list=
  function(l){return Odoc_str["string_of_class_type_param_list"](l)};

var string_of_module_type=Odoc_print["string_of_module_type"];

var string_of_class_type=Odoc_print["string_of_class_type"];

var string_of_text=function(t){return Odoc_misc["string_of_text"](t)};

var string_of_info=function(i){return Odoc_misc["string_of_info"](i)};

var string_of_type=function(t){return Odoc_str["string_of_type"](t)};

var
 string_of_type_extension=
  function(te){return Odoc_str["string_of_type_extension"](te)};

var
 string_of_exception=
  function(e){return Odoc_str["string_of_exception"](e)};

var string_of_value=function(v){return Odoc_str["string_of_value"](v)};

var
 string_of_attribute=
  function(att){return Odoc_str["string_of_attribute"](att)};

var string_of_method=function(m){return Odoc_str["string_of_method"](m)};

var first_sentence_of_text=Odoc_misc["first_sentence_of_text"];

var
 first_sentence_and_rest_of_text=
  Odoc_misc["first_sentence_and_rest_of_text"];

var text_no_title_no_list=Odoc_misc["text_no_title_no_list"];

var text_concat=Odoc_misc["text_concat"];

var get_titles_in_text=Odoc_misc["get_titles_in_text"];

var create_index_lists=Odoc_misc["create_index_lists"];

var remove_ending_newline=Odoc_misc["remove_ending_newline"];

var remove_option=Odoc_misc["remove_option"];

var is_optional=Odoc_misc["is_optional"];

var label_name=Odoc_misc["label_name"];

var
 use_hidden_modules=
  function(n)
   {return Odoc_name["hide_given_modules"](Odoc_global["hidden_modules"][1],n)};

var
 verbose=
  function(s)
   {return Odoc_global["verbose"][1]
            ?(Pervasives["print_string"](s),
              Pervasives["print_newline"](/* () */0))
            :/* () */0};

var warning=function(s){return Odoc_global["pwarning"](s)};

var print_warnings=Odoc_config["print_warnings"];

var errors=Odoc_global["errors"];

var apply_opt=Odoc_misc["apply_opt"];

var
 apply_if_equal=
  function(f,v1,v2){return CamlPrimitive["caml_equal"](v1,v2)?f(v1):v2};

var text_of_string=Odoc_text["Texter"][1];

var text_string_of_text=Odoc_text["Texter"][2];

var
 escape_arobas=
  function(s)
   {var len=s["length"];
    
    var b=Buffer["create"](len);
    
    for(var i=0;i<=len-1;i++)
     {var c=s["charCodeAt"](i);
      
      c!==64?Buffer["add_char"](b,c):Buffer["add_string"](b,"\\@");
      }
    
    return Buffer["contents"](b)};

var
 info_string_of_info=
  function(i)
   {var b=Buffer["create"](256);
    
    var p=Printf["bprintf"];
    
    var match=i[1];
    
    if(match)
     {p
       (b,
        [/* Format */0,
         [/* String */2,/* No_padding */0,/* End_of_format */0],
         "%s"],
        escape_arobas(text_string_of_text(match[1])))}
    
    List["iter"]
     (function(s)
       {return p
                (b,
                 [/* Format */0,
                  [/* Char_literal */12,
                   10,
                   [/* Formatting_lit */17,
                    /* Escaped_at */5,
                    [/* String_literal */11,
                     "author ",
                     [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                  "\n@@author %s"],
                 escape_arobas(s))},
      i[2]);
    var match$1=i[3];
    
    if(match$1)
     {p
       (b,
        [/* Format */0,
         [/* Char_literal */12,
          10,
          [/* Formatting_lit */17,
           /* Escaped_at */5,
           [/* String_literal */11,
            "version ",
            [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
         "\n@@version %s"],
        escape_arobas(match$1[1]))}
    
    var
     f_see_ref=
      function(param)
       {switch(param[0])
         {case 0:
           return Printf["sprintf"]
                   ([/* Format */0,
                     [/* Char_literal */12,
                      60,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,62,/* End_of_format */0]]],
                     "<%s>"],
                    param[1]);
          case 1:
           return Printf["sprintf"]
                   ([/* Format */0,
                     [/* Char_literal */12,
                      39,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,39,/* End_of_format */0]]],
                     "'%s'"],
                    param[1]);
          case 2:
           return Printf["sprintf"]
                   ([/* Format */0,
                     [/* Char_literal */12,
                      34,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,34,/* End_of_format */0]]],
                     '"%s"'],
                    param[1])
          }
        };
    
    List["iter"]
     (function(param)
       {return p
                (b,
                 [/* Format */0,
                  [/* Char_literal */12,
                   10,
                   [/* Formatting_lit */17,
                    /* Escaped_at */5,
                    [/* String_literal */11,
                     "see ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                  "\n@@see %s %s"],
                 escape_arobas(f_see_ref(param[1])),
                 escape_arobas(text_string_of_text(param[2])))},
      i[4]);
    var match$2=i[5];
    
    if(match$2)
     {p
       (b,
        [/* Format */0,
         [/* Char_literal */12,
          10,
          [/* Formatting_lit */17,
           /* Escaped_at */5,
           [/* String_literal */11,
            "since ",
            [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
         "\n@@since %s"],
        escape_arobas(match$2[1]))}
    
    var match$3=i[7];
    
    if(match$3)
     {p
       (b,
        [/* Format */0,
         [/* Char_literal */12,
          10,
          [/* Formatting_lit */17,
           /* Escaped_at */5,
           [/* String_literal */11,
            "deprecated ",
            [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
         "\n@@deprecated %s"],
        escape_arobas(text_string_of_text(match$3[1])))}
    
    List["iter"]
     (function(param)
       {return p
                (b,
                 [/* Format */0,
                  [/* Char_literal */12,
                   10,
                   [/* Formatting_lit */17,
                    /* Escaped_at */5,
                    [/* String_literal */11,
                     "param ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                  "\n@@param %s %s"],
                 escape_arobas(param[1]),
                 escape_arobas(text_string_of_text(param[2])))},
      i[8]);
    List["iter"]
     (function(param)
       {return p
                (b,
                 [/* Format */0,
                  [/* Char_literal */12,
                   10,
                   [/* Formatting_lit */17,
                    /* Escaped_at */5,
                    [/* String_literal */11,
                     "raise ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                  "\n@@raise %s %s"],
                 escape_arobas(param[1]),
                 escape_arobas(text_string_of_text(param[2])))},
      i[9]);
    var match$4=i[10];
    
    if(match$4)
     {p
       (b,
        [/* Format */0,
         [/* Char_literal */12,
          10,
          [/* Formatting_lit */17,
           /* Escaped_at */5,
           [/* String_literal */11,
            "return ",
            [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
         "\n@@return %s"],
        escape_arobas(text_string_of_text(match$4[1])))}
    
    List["iter"]
     (function(param)
       {return p
                (b,
                 [/* Format */0,
                  [/* Char_literal */12,
                   10,
                   [/* Formatting_lit */17,
                    /* Escaped_at */5,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]]],
                  "\n@@%s %s"],
                 param[1],
                 escape_arobas(text_string_of_text(param[2])))},
      i[11]);
    return Buffer["contents"](b)};

var info_of_string=Odoc_comments["info_of_string"];

var info_of_comment_file=Odoc_comments["info_of_comment_file"];

var search_by_name=Odoc_search["Search_by_name"][15];

var values=Odoc_search["values"];

var extensions=Odoc_search["extensions"];

var exceptions=Odoc_search["exceptions"];

var types=Odoc_search["types"];

var attributes=Odoc_search["attributes"];

var methods=Odoc_search["methods"];

var classes=Odoc_search["classes"];

var class_types=Odoc_search["class_types"];

var modules=Odoc_search["modules"];

var module_types=Odoc_search["module_types"];

var
 Search=
  [0,
   search_by_name,
   values,
   extensions,
   exceptions,
   types,
   attributes,
   methods,
   classes,
   class_types,
   modules,
   module_types];

var scanner=Odoc_scan["scanner"];

var Scan=[0,scanner];

var kernel_deps_of_modules=Odoc_dep["kernel_deps_of_modules"];

var deps_of_types=Odoc_dep["deps_of_types"];

var Dep=[0,kernel_deps_of_modules,deps_of_types];

module["exports"]=
{"Text_syntax":Text_syntax,
 "dummy_loc":dummy_loc,
 "Name":
 [0,
  Odoc_name["simple"],
  Odoc_name["concat"],
  Odoc_name["depth"],
  Odoc_name["get_relative"],
  Odoc_name["father"]],
 "Parameter":
 [0,
  Odoc_parameter["complete_name"],
  Odoc_parameter["typ"],
  Odoc_parameter["names"],
  Odoc_parameter["desc_by_name"],
  Odoc_parameter["type_by_name"]],
 "Extension":[0,Odoc_extension["extension_constructors"]],
 "Exception":[0],
 "Type":[0],
 "Value":
 [0,Odoc_value["is_function"],Odoc_value["value_parameter_text_by_name"]],
 "Class":
 [0,
  Odoc_class["class_elements"],
  Odoc_class["class_attributes"],
  Odoc_class["class_parameter_text_by_name"],
  Odoc_class["class_methods"],
  Odoc_class["class_comments"],
  Odoc_class["class_type_elements"],
  Odoc_class["class_type_attributes"],
  Odoc_class["class_type_parameter_text_by_name"],
  Odoc_class["class_type_methods"],
  Odoc_class["class_type_comments"]],
 "Module":
 [0,
  Odoc_module["module_elements"],
  Odoc_module["module_modules"],
  Odoc_module["module_module_types"],
  Odoc_module["module_included_modules"],
  Odoc_module["module_type_extensions"],
  Odoc_module["module_exceptions"],
  Odoc_module["module_types"],
  Odoc_module["module_values"],
  Odoc_module["module_functions"],
  Odoc_module["module_simple_values"],
  Odoc_module["module_classes"],
  Odoc_module["module_class_types"],
  Odoc_module["module_all_classes"],
  Odoc_module["module_is_functor"],
  Odoc_module["module_parameters"],
  Odoc_module["module_comments"],
  Odoc_module["module_type_elements"],
  Odoc_module["module_type_modules"],
  Odoc_module["module_type_module_types"],
  Odoc_module["module_type_included_modules"],
  Odoc_module["module_type_exceptions"],
  Odoc_module["module_type_types"],
  Odoc_module["module_type_values"],
  Odoc_module["module_type_functions"],
  Odoc_module["module_type_simple_values"],
  Odoc_module["module_type_classes"],
  Odoc_module["module_type_class_types"],
  Odoc_module["module_type_all_classes"],
  Odoc_module["module_type_is_functor"],
  Odoc_module["module_type_parameters"],
  Odoc_module["module_type_comments"]],
 "reset_type_names":reset_type_names,
 "string_of_variance":string_of_variance,
 "string_of_type_expr":string_of_type_expr,
 "string_of_class_params":string_of_class_params,
 "string_of_type_list":string_of_type_list,
 "string_of_type_param_list":string_of_type_param_list,
 "string_of_type_extension_param_list":string_of_type_extension_param_list,
 "string_of_class_type_param_list":string_of_class_type_param_list,
 "string_of_module_type":string_of_module_type,
 "string_of_class_type":string_of_class_type,
 "string_of_text":string_of_text,
 "string_of_info":string_of_info,
 "string_of_type":string_of_type,
 "string_of_type_extension":string_of_type_extension,
 "string_of_exception":string_of_exception,
 "string_of_value":string_of_value,
 "string_of_attribute":string_of_attribute,
 "string_of_method":string_of_method,
 "first_sentence_of_text":first_sentence_of_text,
 "first_sentence_and_rest_of_text":first_sentence_and_rest_of_text,
 "text_no_title_no_list":text_no_title_no_list,
 "text_concat":text_concat,
 "get_titles_in_text":get_titles_in_text,
 "create_index_lists":create_index_lists,
 "remove_option":remove_option,
 "is_optional":is_optional,
 "label_name":label_name,
 "use_hidden_modules":use_hidden_modules,
 "verbose":verbose,
 "warning":warning,
 "print_warnings":print_warnings,
 "errors":errors,
 "apply_opt":apply_opt,
 "apply_if_equal":apply_if_equal,
 "text_of_string":text_of_string,
 "text_string_of_text":text_string_of_text,
 "info_of_string":info_of_string,
 "info_string_of_info":info_string_of_info,
 "info_of_comment_file":info_of_comment_file,
 "remove_ending_newline":remove_ending_newline,
 "Search":Search,
 "Scan":Scan,
 "Dep":Dep,
 "Global":
 [0,
  Odoc_global["errors"],
  Odoc_global["warn_error"],
  Odoc_global["out_file"],
  Odoc_global["verbose"],
  Odoc_global["target_dir"],
  Odoc_global["title"],
  Odoc_global["intro_file"],
  Odoc_global["with_toc"],
  Odoc_global["with_index"],
  Odoc_global["with_header"],
  Odoc_global["with_trailer"]],
 "analyse_files":analyse_files,
 "dump_modules":dump_modules,
 "load_modules":load_modules};

