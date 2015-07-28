var Odoc_name=require("Odoc_name");
var Odoc_global=require("Odoc_global");
var Odoc_dep=require("Odoc_dep");
var Printtyp=require("Printtyp");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_search=require("Odoc_search");
var Odoc_comments=require("Odoc_comments");
var Printf=require("Printf");
var Odoc_str=require("Odoc_str");
var Odoc_analyse=require("Odoc_analyse");
var Odoc_extension=require("Odoc_extension");
var Buffer=require("Buffer");
var Odoc_print=require("Odoc_print");
var Odoc_config=require("Odoc_config");
var Odoc_misc=require("Odoc_misc");
var Odoc_text=require("Odoc_text");
var Odoc_scan=require("Odoc_scan");
var Text_syntax=Odoc_text["Text_syntax"];
var dummy_loc=[0,0,0];
var
 analyse_files=
  function(*opt*,*opt*$1,*opt*$2,*opt*$3,*opt*$4,*opt*$5,files)
   {var $js=*opt*;
    if($js){var merge_options=*opt*[1]}else{var merge_options=0}
    var $js$1=*opt*$1;
    if($js$1){var include_dirs=*opt*$1[1]}else{var include_dirs=0}
    var $js$2=*opt*$2;
    if($js$2){var labels=*opt*$2[1]}else{var labels=0}
    var $js$3=*opt*$3;
    if($js$3){var sort_modules=*opt*$3[1]}else{var sort_modules=0}
    var $js$4=*opt*$4;
    if($js$4){var no_stop=*opt*$4[1]}else{var no_stop=0}
    var $js$5=*opt*$5;
    if($js$5){var init=*opt*$5[1]}else{var init=0}
    Odoc_global["merge_options"][1]=merge_options,0;
    Odoc_global["include_dirs"][1]=include_dirs,0;
    Odoc_global["classic"][1]=!labels,0;
    Odoc_global["sort_modules"][1]=sort_modules,0;
    Odoc_global["no_stop"][1]=no_stop,0;
    var $js$6=Odoc_analyse["analyse_files"];
    return $js$6([0,init],files)};
var dump_modules=Odoc_analyse["dump_modules"];
var load_modules=Odoc_analyse["load_modules"];
var reset_type_names=Printtyp["reset"];
var
 string_of_variance=
  function(t,param)
   {var $js=Odoc_str["string_of_variance"];
    return $js(t,[0,param[1],param[2]])};
var
 string_of_type_expr=
  function(t){var $js=Odoc_print["string_of_type_expr"];return $js(t)};
var string_of_class_params=Odoc_str["string_of_class_params"];
var
 string_of_type_list=
  function(par,sep,type_list)
   {var $js=Odoc_str["string_of_type_list"];return $js(par,sep,type_list)};
var
 string_of_type_param_list=
  function(t){var $js=Odoc_str["string_of_type_param_list"];return $js(t)};
var
 string_of_type_extension_param_list=
  function(te)
   {var $js=Odoc_str["string_of_type_extension_param_list"];return $js(te)};
var
 string_of_class_type_param_list=
  function(l)
   {var $js=Odoc_str["string_of_class_type_param_list"];return $js(l)};
var string_of_module_type=Odoc_print["string_of_module_type"];
var string_of_class_type=Odoc_print["string_of_class_type"];
var
 string_of_text=
  function(t){var $js=Odoc_misc["string_of_text"];return $js(t)};
var
 string_of_info=
  function(i){var $js=Odoc_misc["string_of_info"];return $js(i)};
var
 string_of_type=
  function(t){var $js=Odoc_str["string_of_type"];return $js(t)};
var
 string_of_type_extension=
  function(te){var $js=Odoc_str["string_of_type_extension"];return $js(te)};
var
 string_of_exception=
  function(e){var $js=Odoc_str["string_of_exception"];return $js(e)};
var
 string_of_value=
  function(v){var $js=Odoc_str["string_of_value"];return $js(v)};
var
 string_of_attribute=
  function(att){var $js=Odoc_str["string_of_attribute"];return $js(att)};
var
 string_of_method=
  function(m){var $js=Odoc_str["string_of_method"];return $js(m)};
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
   {var $js=Odoc_name["hide_given_modules"];
    return $js(Odoc_global["hidden_modules"][1],n)};
var
 verbose=
  function(s)
   {var $js=Odoc_global["verbose"][1];
    if($js)
     {var $js$1=Pervasives["print_string"];
      $js$1(s);
      var $js$2=Pervasives["print_newline"];
      return $js$2(0)}
    else
     {return 0}};
var warning=function(s){var $js=Odoc_global["pwarning"];return $js(s)};
var print_warnings=Odoc_config["print_warnings"];
var errors=Odoc_global["errors"];
var apply_opt=Odoc_misc["apply_opt"];
var
 apply_if_equal=
  function(f,v1,v2)
   {var $js="unknown primitive:caml_equal";
    if($js){return f(v1)}else{return v2}};
var text_of_string=Odoc_text["Texter"][1];
var text_string_of_text=Odoc_text["Texter"][2];
var
 escape_arobas=
  function(s)
   {var len=s["length"];
    var $js=Buffer["create"];
    var b=$js(len);
    var $js$1=0;
    var $js$2=len-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var c=s[i];
      var $js$3=c!=64;
      if($js$3)
       {var $js$4=Buffer["add_char"];$js$4(b,c)}
      else
       {var $js$5=Buffer["add_string"];$js$5(b,"\@")}}
    var $js$6=Buffer["contents"];
    return $js$6(b)};
var
 info_string_of_info=
  function(i)
   {var $js=Buffer["create"];
    var b=$js(256);
    var p=Printf["bprintf"];
    var match=i[1];
    var $js$1=match;
    if($js$1)
     {var $js$2=text_string_of_text(match[1]);
      var $js$3=escape_arobas($js$2);
      p(b,[0,[2,0,0],"%s"],$js$3)}
    else
     {}
    var $js$4=List["iter"];
    $js$4
     (function(s)
       {var $js$5=escape_arobas(s);
        return p
                (b,
                 [0,[12,10,[17,5,[11,"author ",[2,0,0]]]],"\n@@author %s"],
                 $js$5)},
      i[2]);
    var match$1=i[3];
    var $js$5=match$1;
    if($js$5)
     {var $js$6=escape_arobas(match$1[1]);
      p(b,[0,[12,10,[17,5,[11,"version ",[2,0,0]]]],"\n@@version %s"],$js$6)}
    else
     {}
    var
     f_see_ref=
      function(param)
       {var $js$7=param;
        if($js$7==0)
         {var $js$8=Printf["sprintf"];
          return $js$8([0,[12,60,[2,0,[12,62,0]]],"<%s>"],param[1])}
        else
         if($js$7==1)
          {var $js$9=Printf["sprintf"];
           return $js$9([0,[12,39,[2,0,[12,39,0]]],"'%s'"],param[1])}
         else
          if($js$7==2)
           {var $js$10=Printf["sprintf"];
            return $js$10([0,[12,34,[2,0,[12,34,0]]],'"%s"'],param[1])}};
    var $js$7=List["iter"];
    $js$7
     (function(param)
       {var $js$8=f_see_ref(param[1]);
        var $js$9=escape_arobas($js$8);
        var $js$10=text_string_of_text(param[2]);
        var $js$11=escape_arobas($js$10);
        return p
                (b,
                 [0,
                  [12,10,[17,5,[11,"see ",[2,0,[12,32,[2,0,0]]]]]],
                  "\n@@see %s %s"],
                 $js$9,
                 $js$11)},
      i[4]);
    var match$2=i[5];
    var $js$8=match$2;
    if($js$8)
     {var $js$9=escape_arobas(match$2[1]);
      p(b,[0,[12,10,[17,5,[11,"since ",[2,0,0]]]],"\n@@since %s"],$js$9)}
    else
     {}
    var match$3=i[7];
    var $js$10=match$3;
    if($js$10)
     {var $js$11=text_string_of_text(match$3[1]);
      var $js$12=escape_arobas($js$11);
      p
       (b,
        [0,[12,10,[17,5,[11,"deprecated ",[2,0,0]]]],"\n@@deprecated %s"],
        $js$12)}
    else
     {}
    var $js$13=List["iter"];
    $js$13
     (function(param)
       {var $js$14=escape_arobas(param[1]);
        var $js$15=text_string_of_text(param[2]);
        var $js$16=escape_arobas($js$15);
        return p
                (b,
                 [0,
                  [12,10,[17,5,[11,"param ",[2,0,[12,32,[2,0,0]]]]]],
                  "\n@@param %s %s"],
                 $js$14,
                 $js$16)},
      i[8]);
    var $js$14=List["iter"];
    $js$14
     (function(param)
       {var $js$15=escape_arobas(param[1]);
        var $js$16=text_string_of_text(param[2]);
        var $js$17=escape_arobas($js$16);
        return p
                (b,
                 [0,
                  [12,10,[17,5,[11,"raise ",[2,0,[12,32,[2,0,0]]]]]],
                  "\n@@raise %s %s"],
                 $js$15,
                 $js$17)},
      i[9]);
    var match$4=i[10];
    var $js$15=match$4;
    if($js$15)
     {var $js$16=text_string_of_text(match$4[1]);
      var $js$17=escape_arobas($js$16);
      p(b,[0,[12,10,[17,5,[11,"return ",[2,0,0]]]],"\n@@return %s"],$js$17)}
    else
     {}
    var $js$18=List["iter"];
    $js$18
     (function(param)
       {var $js$19=text_string_of_text(param[2]);
        var $js$20=escape_arobas($js$19);
        return p
                (b,
                 [0,[12,10,[17,5,[2,0,[12,32,[2,0,0]]]]],"\n@@%s %s"],
                 param[1],
                 $js$20)},
      i[11]);
    var $js$19=Buffer["contents"];
    return $js$19(b)};
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
var let=Odoc_name;
var $js=[0,let[2],let[4],let[7],let[9],let[3]];
var let$1=Odoc_parameter;
var $js$1=[0,let$1[1],let$1[2],let$1[5],let$1[4],let$1[6]];
var let$2=Odoc_value;
var $js$2=[0,let$2[6],let$2[2]];
var let$3=Odoc_class;
var
 $js$3=
  [0,
   let$3[3],
   let$3[5],
   let$3[2],
   let$3[6],
   let$3[7],
   let$3[4],
   let$3[9],
   let$3[12],
   let$3[10],
   let$3[11]];
var let$4=Odoc_module;
var
 $js$4=
  [0,
   let$4[12],
   let$4[22],
   let$4[23],
   let$4[24],
   let$4[18],
   let$4[19],
   let$4[17],
   let$4[14],
   let$4[15],
   let$4[16],
   let$4[20],
   let$4[21],
   let$4[43],
   let$4[30],
   let$4[27],
   let$4[25],
   let$4[13],
   let$4[37],
   let$4[38],
   let$4[39],
   let$4[34],
   let$4[32],
   let$4[31],
   let$4[41],
   let$4[42],
   let$4[35],
   let$4[36],
   let$4[44],
   let$4[29],
   let$4[26],
   let$4[40]];
var let$5=Odoc_global;
var
 $js$5=
  [0,
   let$5[15],
   let$5[16],
   let$5[18],
   let$5[19],
   let$5[22],
   let$5[21],
   let$5[20],
   let$5[23],
   let$5[24],
   let$5[25],
   let$5[26]];
module["exports"]=
{"Text_syntax":Text_syntax,
 "dummy_loc":dummy_loc,
 "unknown block:(let (let/1244 =a (global Odoc_name!))\n  (makeblock 0 (field 1 let/1244) (field 3 let/1244) (field 6 let/1244)\n    (field 8 let/1244) (field 2 let/1244)))":
 unknown block:(let (let/1244 =a (global Odoc_name!))
  (makeblock 0 (field 1 let/1244) (field 3 let/1244) (field 6 let/1244)
    (field 8 let/1244) (field 2 let/1244))),
 "unknown block:(let (let/1245 =a (global Odoc_parameter!))\n  (makeblock 0 (field 0 let/1245) (field 1 let/1245) (field 4 let/1245)\n    (field 3 let/1245) (field 5 let/1245)))":
 unknown block:(let (let/1245 =a (global Odoc_parameter!))
  (makeblock 0 (field 0 let/1245) (field 1 let/1245) (field 4 let/1245)
    (field 3 let/1245) (field 5 let/1245))),
 "unknown block:(let (let/1246 =a (global Odoc_extension!)) (makeblock 0 (field 1 let/1246)))":
 unknown block:(let (let/1246 =a (global Odoc_extension!)) (makeblock 0 (field 1 let/1246))),
 "unknown block:(let (let/1247 =a (global Odoc_exception!)) (makeblock 0))":
 unknown block:(let (let/1247 =a (global Odoc_exception!)) (makeblock 0)),
 "unknown block:(let (let/1248 =a (global Odoc_type!)) (makeblock 0))":
 unknown block:(let (let/1248 =a (global Odoc_type!)) (makeblock 0)),
 "unknown block:(let (let/1249 =a (global Odoc_value!))\n  (makeblock 0 (field 5 let/1249) (field 1 let/1249)))":
 unknown block:(let (let/1249 =a (global Odoc_value!))
  (makeblock 0 (field 5 let/1249) (field 1 let/1249))),
 "unknown block:(let (let/1250 =a (global Odoc_class!))\n  (makeblock 0 (field 2 let/1250) (field 4 let/1250) (field 1 let/1250)\n    (field 5 let/1250) (field 6 let/1250) (field 3 let/1250)\n    (field 8 let/1250) (field 11 let/1250) (field 9 let/1250)\n    (field 10 let/1250)))":
 unknown block:(let (let/1250 =a (global Odoc_class!))
  (makeblock 0 (field 2 let/1250) (field 4 let/1250) (field 1 let/1250)
    (field 5 let/1250) (field 6 let/1250) (field 3 let/1250)
    (field 8 let/1250) (field 11 let/1250) (field 9 let/1250)
    (field 10 let/1250))),
 "unknown block:(let (let/1251 =a (global Odoc_module!))\n  (makeblock 0 (field 11 let/1251) (field 21 let/1251) (field 22 let/1251)\n    (field 23 let/1251) (field 17 let/1251) (field 18 let/1251)\n    (field 16 let/1251) (field 13 let/1251) (field 14 let/1251)\n    (field 15 let/1251) (field 19 let/1251) (field 20 let/1251)\n    (field 42 let/1251) (field 29 let/1251) (field 26 let/1251)\n    (field 24 let/1251) (field 12 let/1251) (field 36 let/1251)\n    (field 37 let/1251) (field 38 let/1251) (field 33 let/1251)\n    (field 31 let/1251) (field 30 let/1251) (field 40 let/1251)\n    (field 41 let/1251) (field 34 let/1251) (field 35 let/1251)\n    (field 43 let/1251) (field 28 let/1251) (field 25 let/1251)\n    (field 39 let/1251)))":
 unknown block:(let (let/1251 =a (global Odoc_module!))
  (makeblock 0 (field 11 let/1251) (field 21 let/1251) (field 22 let/1251)
    (field 23 let/1251) (field 17 let/1251) (field 18 let/1251)
    (field 16 let/1251) (field 13 let/1251) (field 14 let/1251)
    (field 15 let/1251) (field 19 let/1251) (field 20 let/1251)
    (field 42 let/1251) (field 29 let/1251) (field 26 let/1251)
    (field 24 let/1251) (field 12 let/1251) (field 36 let/1251)
    (field 37 let/1251) (field 38 let/1251) (field 33 let/1251)
    (field 31 let/1251) (field 30 let/1251) (field 40 let/1251)
    (field 41 let/1251) (field 34 let/1251) (field 35 let/1251)
    (field 43 let/1251) (field 28 let/1251) (field 25 let/1251)
    (field 39 let/1251))),
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
 "unknown block:(let (let/1252 =a (global Odoc_global!))\n  (makeblock 0 (field 14 let/1252) (field 15 let/1252) (field 17 let/1252)\n    (field 18 let/1252) (field 21 let/1252) (field 20 let/1252)\n    (field 19 let/1252) (field 22 let/1252) (field 23 let/1252)\n    (field 24 let/1252) (field 25 let/1252)))":
 unknown block:(let (let/1252 =a (global Odoc_global!))
  (makeblock 0 (field 14 let/1252) (field 15 let/1252) (field 17 let/1252)
    (field 18 let/1252) (field 21 let/1252) (field 20 let/1252)
    (field 19 let/1252) (field 22 let/1252) (field 23 let/1252)
    (field 24 let/1252) (field 25 let/1252))),
 "analyse_files":analyse_files,
 "dump_modules":dump_modules,
 "load_modules":load_modules};
