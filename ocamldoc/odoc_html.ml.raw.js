var String=require("String");
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
var Array=require("Array");
var Odoc_messages=require("Odoc_messages");
var
 shared=
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
 shared$1=
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
var shared$2=[0,"tag_functions"];
var shared$3=[0,"html_of_text"];
var
 shared$4=
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
 shared$5=
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
 shared$6=
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
var
 shared$7=
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
var shared$8=[0,"html_of_code"];
var
 shared$9=
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
var with_parameter_list=[0,0];
var css_style=[0,0];
var index_only=[0,0];
var colorize_code=[0,0];
var html_short_functors=[0,0];
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
     {var $js=String["rindex"];
      var i=$js(name,46);
      var match=name[i+1];
      var $js$1=25<-65+match>>>0;
      if($js$1){var qual="-c"}else{var qual=""}}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2){var qual=""}else{var qual="unknown primitive:reraise"}}
    var $js$3=Pervasives["^"];
    var prefix=$js$3(name,qual);
    var $js$4=Pervasives["^"];
    var html_file=$js$4(prefix,".html");
    var $js$5=Pervasives["^"];
    var html_frame_file=$js$5(prefix,"-frame.html");
    return [0,html_file,html_frame_file]};
var
 target=
  function(pref,simple_name)
   {var $js=Pervasives["^"];return $js(pref,simple_name)};
var
 complete_target=
  function(pref,complete_name)
   {var $js=Odoc_info["Name"][1];
    var simple_name=$js(complete_name);
    var $js$1=Odoc_info["Name"][5];
    var s=$js$1(complete_name);
    var $js$2="unknown primitive:caml_string_equal";
    if($js$2){var module_name=simple_name}else{var module_name=s}
    var match=html_files(module_name);
    var $js$3=Pervasives["^"];
    var $js$4=Pervasives["^"];
    var $js$5=target(pref,simple_name);
    var $js$6=$js$4("#",$js$5);
    return $js$3(match[1],$js$6)};
var
 type_target=
  function(t)
   {var $js=Odoc_info["Name"][1];
    var $js$1=$js(t[1]);
    return target(mark_type,$js$1)};
var
 const_target=
  function(t,f)
   {var $js=Printf["sprintf"];
    var $js$1=Odoc_info["Name"][1];
    var $js$2=$js$1(t[1]);
    var name=$js([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],$js$2,f[1]);
    return target(mark_type_elt,name)};
var
 recfield_target=
  function(t,f)
   {var $js=Printf["sprintf"];
    var $js$1=Odoc_info["Name"][1];
    var $js$2=$js$1(t[1]);
    var $js$3=$js([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],$js$2,f[1]);
    return target(mark_type_elt,$js$3)};
var
 objfield_target=
  function(t,f)
   {var $js=Printf["sprintf"];
    var $js$1=Odoc_info["Name"][1];
    var $js$2=$js$1(t[1]);
    var $js$3=$js([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],$js$2,f[1]);
    return target(mark_type_elt,$js$3)};
var complete_type_target=function(t){return complete_target(mark_type,t[1])};
var
 complete_recfield_target=
  function(name)
   {var $js=Odoc_info["Name"][5];
    var typ=$js(name);
    var $js$1=Odoc_info["Name"][1];
    var field=$js$1(name);
    var $js$2=Printf["sprintf"];
    var $js$3=complete_target(mark_type_elt,typ);
    return $js$2([0,[2,0,[12,46,[2,0,0]]],"%s.%s"],$js$3,field)};
var
 extension_target=
  function(x)
   {var $js=Odoc_info["Name"][1];
    var $js$1=$js(x[1]);
    return target(mark_extension,$js$1)};
var
 complete_extension_target=
  function(x){return complete_target(mark_extension,x[1])};
var
 exception_target=
  function(e)
   {var $js=Odoc_info["Name"][1];
    var $js$1=$js(e[1]);
    return target(mark_exception,$js$1)};
var
 complete_exception_target=
  function(e){return complete_target(mark_exception,e[1])};
var
 value_target=
  function(v)
   {var $js=Odoc_info["Name"][1];
    var $js$1=$js(v[1]);
    return target(mark_value,$js$1)};
var
 subst_infix_symbols=
  function(name)
   {var len=name["length"];
    var $js=Buffer["create"];
    var buf=$js(len);
    var ch=function(c){var $js$1=Buffer["add_char"];return $js$1(buf,c)};
    var st=function(s){var $js$1=Buffer["add_string"];return $js$1(buf,s)};
    var $js$1=0;
    var $js$2=len-1;
    for(var i=$js$1;i<=$js$2;i++)
     {var c=name[i];
      var $js$3=c>=95;
      if($js$3)
       {var switcher=-124+c;
        var $js$4=2<switcher>>>0;
        if($js$4)
         {var exit=264}
        else
         {var $js$5=switcher;
          var $js$6=$js$5[0];
          if($js$6==0)
           {st("_pipe_")}
          else
           if($js$6==1){var exit=264}else if($js$6==2){st("_tilde_")}}}
      else
       {var $js$7=c>=33;
        if($js$7)
         {var $js$8=-33+c;
          var $js$9=$js$8[0];
          if($js$9==0)
           {st("_bang_")}
          else
           if($js$9==1)
            {var exit=264}
           else
            if($js$9==2)
             {var exit=264}
            else
             if($js$9==3)
              {st("_dollar_")}
             else
              if($js$9==4)
               {st("_percent_")}
              else
               if($js$9==5)
                {st("_amp_")}
               else
                if($js$9==6)
                 {var exit=264}
                else
                 if($js$9==7)
                  {var exit=264}
                 else
                  if($js$9==8)
                   {var exit=264}
                  else
                   if($js$9==9)
                    {st("_star_")}
                   else
                    if($js$9==10)
                     {st("_plus_")}
                    else
                     if($js$9==11)
                      {var exit=264}
                     else
                      if($js$9==12)
                       {st("_minus_")}
                      else
                       if($js$9==13)
                        {var exit=264}
                       else
                        if($js$9==14)
                         {st("_slash_")}
                        else
                         if($js$9==15)
                          {var exit=264}
                         else
                          if($js$9==16)
                           {var exit=264}
                          else
                           if($js$9==17)
                            {var exit=264}
                           else
                            if($js$9==18)
                             {var exit=264}
                            else
                             if($js$9==19)
                              {var exit=264}
                             else
                              if($js$9==20)
                               {var exit=264}
                              else
                               if($js$9==21)
                                {var exit=264}
                               else
                                if($js$9==22)
                                 {var exit=264}
                                else
                                 if($js$9==23)
                                  {var exit=264}
                                 else
                                  if($js$9==24)
                                   {var exit=264}
                                  else
                                   if($js$9==25)
                                    {st("_column_")}
                                   else
                                    if($js$9==26)
                                     {var exit=264}
                                    else
                                     if($js$9==27)
                                      {st("_lt_")}
                                     else
                                      if($js$9==28)
                                       {st("_equal_")}
                                      else
                                       if($js$9==29)
                                        {st("_gt_")}
                                       else
                                        if($js$9==30)
                                         {st("_questionmark_")}
                                        else
                                         if($js$9==31)
                                          {st("_at_")}
                                         else
                                          if($js$9==32)
                                           {var exit=264}
                                          else
                                           if($js$9==33)
                                            {var exit=264}
                                           else
                                            if($js$9==34)
                                             {var exit=264}
                                            else
                                             if($js$9==35)
                                              {var exit=264}
                                             else
                                              if($js$9==36)
                                               {var exit=264}
                                              else
                                               if($js$9==37)
                                                {var exit=264}
                                               else
                                                if($js$9==38)
                                                 {var exit=264}
                                                else
                                                 if($js$9==39)
                                                  {var exit=264}
                                                 else
                                                  if($js$9==40)
                                                   {var exit=264}
                                                  else
                                                   if($js$9==41)
                                                    {var exit=264}
                                                   else
                                                    if($js$9==42)
                                                     {var exit=264}
                                                    else
                                                     if($js$9==43)
                                                      {var exit=264}
                                                     else
                                                      if($js$9==44)
                                                       {var exit=264}
                                                      else
                                                       if($js$9==45)
                                                        {var exit=264}
                                                       else
                                                        if($js$9==46)
                                                         {var exit=264}
                                                        else
                                                         if($js$9==47)
                                                          {var exit=264}
                                                         else
                                                          if($js$9==48)
                                                           {var exit=264}
                                                          else
                                                           if($js$9==49)
                                                            {var exit=264}
                                                           else
                                                            if($js$9==50)
                                                             {var exit=264}
                                                            else
                                                             if($js$9==51)
                                                              {var exit=264}
                                                             else
                                                              if($js$9==52)
                                                               {var exit=264}
                                                              else
                                                               if($js$9==53)
                                                                {var exit=264}
                                                               else
                                                                if($js$9==54)
                                                                 {var exit=264}
                                                                else
                                                                 if($js$9==55)
                                                                  {var exit=264}
                                                                 else
                                                                  if($js$9==56)
                                                                   {var exit=264}
                                                                  else
                                                                   if($js$9==57)
                                                                    {var exit=264}
                                                                   else
                                                                    if($js$9==58)
                                                                     {var exit=264}
                                                                    else
                                                                     if($js$9==59)
                                                                      {var exit=264}
                                                                     else
                                                                      if($js$9==60){var exit=264}else if($js$9==61){st("_exp_")}}
        else
         {var exit=264}}
      switch(exit){case 264:ch(c)}}
    var $js$10=Buffer["contents"];
    return $js$10(buf)};
var
 complete_value_target=
  function(v){return complete_target(mark_value,v[1])};
var
 file_code_value_complete_target=
  function(v)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=Pervasives["^"];
    var $js$3=subst_infix_symbols(v[1]);
    var $js$4=$js$2($js$3,".html");
    var $js$5=$js$1(mark_value,$js$4);
    return $js(code_prefix,$js$5)};
var
 attribute_target=
  function(a)
   {var $js=Odoc_info["Name"][1];
    var $js$1=$js(a[1][1]);
    return target(mark_attribute,$js$1)};
var
 complete_attribute_target=
  function(a){return complete_target(mark_attribute,a[1][1])};
var
 file_code_attribute_complete_target=
  function(a)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2(a[1][1],".html");
    var $js$4=$js$1(mark_attribute,$js$3);
    return $js(code_prefix,$js$4)};
var
 method_target=
  function(m)
   {var $js=Odoc_info["Name"][1];
    var $js$1=$js(m[1][1]);
    return target(mark_method,$js$1)};
var
 complete_method_target=
  function(m){return complete_target(mark_method,m[1][1])};
var
 file_code_method_complete_target=
  function(m)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2(m[1][1],".html");
    var $js$4=$js$1(mark_method,$js$3);
    return $js(code_prefix,$js$4)};
var label_target=function(l){return target("",l)};
var complete_label_target=function(l){return complete_target("",l)};
var
 file_type_module_complete_target=
  function(name)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=$js$1(name,".html");
    return $js(type_prefix,$js$2)};
var
 file_code_module_complete_target=
  function(name)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=$js$1(name,".html");
    return $js(code_prefix,$js$2)};
var
 file_type_class_complete_target=
  function(name)
   {var $js=Pervasives["^"];
    var $js$1=Pervasives["^"];
    var $js$2=$js$1(name,".html");
    return $js(type_prefix,$js$2)};
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
var $js=Set["Make"];
var compare=function(x,y){return "unknown primitive:caml_string_compare"};
var $js$1=[0,compare];
var StringSet=$js($js$1);
var
 ocaml_code_init=
  function(class)
   {var $js$2=CamlinternalOO["get_method_label"];
    var html_of_code=$js$2(class,"html_of_code");
    var $js$3=CamlinternalOO["set_method"];
    $js$3
     (class,
      html_of_code,
      function(self-1,b,*opt*,code)
       {var $js$4=*opt*;
        if($js$4){var with_pre=*opt*[1]}else{var with_pre=1}
        var $js$5=Odoc_ocamlhtml["html_of_code"];
        return $js$5(b,[0,with_pre],code)});
    return function(env,self)
     {var $js$4=CamlinternalOO["create_object_opt"];return $js$4(self,class)}};
var $js$2=CamlinternalOO["make_class"];
var ocaml_code=$js$2(shared$8,ocaml_code_init);
var new_buf=function(param){var $js$3=Buffer["create"];return $js$3(1024)};
var bp=Printf["bprintf"];
var bs=Buffer["add_string"];
var
 text=
  [0,
   0,
   function(class)
    {var $js$3=CamlinternalOO["get_method_labels"];
     var ids=$js$3(class,shared$5);
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
     var escape=ids[51];
     var create_title_label=ids[52];
     var $js$4=CamlinternalOO["inherits"];
     var inh=$js$4(class,0,0,shared$8,ocaml_code,1);
     var obj_init=inh[1];
     var $js$5=CamlinternalOO["set_methods"];
     $js$5
      (class,
       [0,
        escape,
        function(self-2,s)
         {var $js$6=Odoc_ocamlhtml["escape_base"];return $js$6(s)},
        keep_alpha_num,
        function(self-2,s)
         {var len=s["length"];
          var $js$6=Buffer["create"];
          var buf=$js$6(len);
          var $js$7=0;
          var $js$8=len-1;
          for(var i=$js$7;i<=$js$8;i++)
           {var match=s[i];
            var switcher=-48+match;
            var $js$9=42<switcher>>>0;
            if($js$9)
             {var $js$10=25<-49+switcher>>>0;
              if($js$10){var exit=237}else{var exit=236}}
            else
             {var $js$11=6<-10+switcher>>>0;
              if($js$11){var exit=236}else{var exit=237}}
            switch(exit)
             {case 237:
              case 236:var $js$12=Buffer["add_char"];$js$12(buf,s[i])
              }}
          var $js$13=Buffer["contents"];
          return $js$13(buf)},
        label_of_text,
        function(self-2,t)
         {var $js$6=Odoc_info["first_sentence_of_text"];
          var t2=$js$6(t);
          var $js$7=Odoc_info["string_of_text"];
          var s=$js$7(t2);
          "unknown block:(sendself self-2/1476 keep_alpha_num/1416 s/1479)"},
        create_title_label,
        function(self-2,param)
         {var label_opt=param[2];
          var $js$6=label_opt;
          if($js$6)
           {return label_opt[1]}
          else
           {var $js$7=Printf["sprintf"];
            "unknown block:(sendself self-2/1482 label_of_text/1417 (field 2 param/3318))";
            return $js$7([0,[4,0,0,0,[12,95,[2,0,0]]],"%d_%s"],param[1],$js$8)}},
        html_of_text,
        function(self-2,b,t)
         {var $js$6=List["iter"];
          "unknown block:(sendself self-2/1488 html_of_text_element/1420 b/1489)";
          return $js$6($js$7,t)},
        html_of_text_element,
        function(self-2,b,txt)
         {var $js$6=txt;
          if(typeof $js$6=="number")
           {if($js$6==0)
             {"unknown block:(sendself self-2/1492 html_of_Newline/1435 b/1493)"}
            else
             if($js$6==1)
              {"unknown block:(sendself self-2/1492 html_of_Index_list/1445 b/1493)"}}
          else
           {var $js$7=$js$6[0];
            if($js$7==0)
             {"unknown block:(sendself self-2/1492 html_of_Raw/1423 b/1493 (field 0 txt/1494))"}
            else
             if($js$7==1)
              {"unknown block:(sendself self-2/1492 html_of_Code/1424 b/1493 (field 0 txt/1494))"}
             else
              if($js$7==2)
               {"unknown block:(sendself self-2/1492 html_of_CodePre/1425 b/1493 (field 0 txt/1494))"}
              else
               if($js$7==3)
                {"unknown block:(sendself self-2/1492 html_of_Verbatim/1426 b/1493 (field 0 txt/1494))"}
               else
                if($js$7==4)
                 {"unknown block:(sendself self-2/1492 html_of_Bold/1427 b/1493 (field 0 txt/1494))"}
                else
                 if($js$7==5)
                  {"unknown block:(sendself self-2/1492 html_of_Italic/1428 b/1493 (field 0 txt/1494))"}
                 else
                  if($js$7==6)
                   {"unknown block:(sendself self-2/1492 html_of_Emphasize/1429 b/1493 (field 0 txt/1494))"}
                  else
                   if($js$7==7)
                    {"unknown block:(sendself self-2/1492 html_of_Center/1430 b/1493 (field 0 txt/1494))"}
                   else
                    if($js$7==8)
                     {"unknown block:(sendself self-2/1492 html_of_Left/1431 b/1493 (field 0 txt/1494))"}
                    else
                     if($js$7==9)
                      {"unknown block:(sendself self-2/1492 html_of_Right/1432 b/1493 (field 0 txt/1494))"}
                     else
                      if($js$7==10)
                       {"unknown block:(sendself self-2/1492 html_of_List/1433 b/1493 (field 0 txt/1494))"}
                      else
                       if($js$7==11)
                        {"unknown block:(sendself self-2/1492 html_of_Enum/1434 b/1493 (field 0 txt/1494))"}
                       else
                        if($js$7==12)
                         {"unknown block:(sendself self-2/1492 html_of_Block/1436 b/1493 (field 0 txt/1494))"}
                        else
                         if($js$7==13)
                          {"unknown block:(sendself self-2/1492 html_of_Title/1437 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494) (field 2 txt/1494))"}
                         else
                          if($js$7==14)
                           {"unknown block:(sendself self-2/1492 html_of_Latex/1438 b/1493 (field 0 txt/1494))"}
                          else
                           if($js$7==15)
                            {"unknown block:(sendself self-2/1492 html_of_Link/1439 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494))"}
                           else
                            if($js$7==16)
                             {"unknown block:(sendself self-2/1492 html_of_Ref/1440 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494) (field 2 txt/1494))"}
                            else
                             if($js$7==17)
                              {"unknown block:(sendself self-2/1492 html_of_Superscript/1441 b/1493 (field 0 txt/1494))"}
                             else
                              if($js$7==18)
                               {"unknown block:(sendself self-2/1492 html_of_Subscript/1442 b/1493 (field 0 txt/1494))"}
                              else
                               if($js$7==19)
                                {"unknown block:(sendself self-2/1492 html_of_Module_list/1444 b/1493 (field 0 txt/1494))"}
                               else
                                if($js$7==20)
                                 {"unknown block:(sendself self-2/1492 html_of_custom_text/1421 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494))"}
                                else
                                 if($js$7==21)
                                  {"unknown block:(sendself self-2/1492 html_of_Target/1422 b/1493 (field 0 txt/1494)\n  (field 1 txt/1494))"}}},
        html_of_custom_text,
        function(self-2,b,s,t){return 0},
        html_of_Target,
        function(self-2,b,target$1,code)
         {var $js$6=String["lowercase"];
          var $js$7=$js$6(target$1);
          var $js$8="unknown primitive:caml_string_equal";
          if($js$8){return bs(b,code)}else{return 0}},
        html_of_Raw,
        function(self-2,b,s)
         {"unknown block:(sendself self-2/1535 escape/1415 s/1537)";
          return bs(b,$js$6)},
        html_of_Code,
        function(self-2,b,s)
         {var $js$6=colorize_code[1];
          if($js$6)
           {"unknown block:(sendself self-2/1539 html_of_code/1542 b/1540 [0: 0a] s/1541)"}
          else
           {bs(b,'<code class="');
            bs(b,Odoc_ocamlhtml["code_class"]);
            bs(b,'">');
            "unknown block:(sendself self-2/1539 escape/1415 s/1541)";
            bs(b,$js$7);
            return bs(b,"</code>")}},
        html_of_CodePre,
        function(self-2)
         {var
           remove_useless_newlines=
            function(s)
             {var len=s["length"];
              var
               iter_first=
                function(n)
                 {var $js$6=n>=len;
                  if($js$6)
                   {return 0}
                  else
                   {var match=s[n];
                    var $js$7=match!=10;
                    if($js$7){return [0,n]}else{return iter_first(n+1)}}};
              var match=iter_first(0);
              var $js$6=match;
              if($js$6)
               {var first=match[1];
                var
                 iter_last=
                  function(n)
                   {var $js$7=n<=first;
                    if($js$7)
                     {return 0}
                    else
                     {var match$1=s[n];
                      var $js$8=match$1!=9;
                      if($js$8){return [0,n]}else{return iter_last(n-1)}}};
                var match$1=iter_last(len-1);
                var $js$7=match$1;
                if($js$7)
                 {var $js$8=String["sub"];
                  return $js$8(s,first,match$1[1]-first+1)}
                else
                 {var $js$9=String["sub"];return $js$9(s,first,1)}}
              else
               {return ""}};
          return function(b,s)
           {var $js$6=colorize_code[1];
            if($js$6)
             {bs(b,'<pre class="codepre">');
              "unknown block:(sendself self-2/1544 html_of_code/1542 b/1554 0a\n  (apply remove_useless_newlines/1545 s/1555))";
              return bs(b,"</pre>")}
            else
             {bs(b,'<pre class="codepre"><code class="');
              bs(b,Odoc_ocamlhtml["code_class"]);
              bs(b,'">');
              "unknown block:(sendself self-2/1544 escape/1415\n  (apply remove_useless_newlines/1545 s/1555))";
              bs(b,$js$7);
              return bs(b,"</code></pre>")}}},
        html_of_Verbatim,
        function(self-2,b,s)
         {bs(b,'<pre class="verbatim">');
          "unknown block:(sendself self-2/1557 escape/1415 s/1559)";
          bs(b,$js$6);
          return bs(b,"</pre>")},
        html_of_Bold,
        function(self-2,b,t)
         {bs(b,"<b>");
          "unknown block:(sendself self-2/1561 html_of_text/1419 b/1562 t/1563)";
          return bs(b,"</b>")},
        html_of_Italic,
        function(self-2,b,t)
         {bs(b,"<i>");
          "unknown block:(sendself self-2/1565 html_of_text/1419 b/1566 t/1567)";
          return bs(b,"</i>")},
        html_of_Emphasize,
        function(self-2,b,t)
         {bs(b,"<em>");
          "unknown block:(sendself self-2/1569 html_of_text/1419 b/1570 t/1571)";
          return bs(b,"</em>")},
        html_of_Center,
        function(self-2,b,t)
         {bs(b,"<center>");
          "unknown block:(sendself self-2/1573 html_of_text/1419 b/1574 t/1575)";
          return bs(b,"</center>")},
        html_of_Left,
        function(self-2,b,t)
         {bs(b,"<div align=left>");
          "unknown block:(sendself self-2/1577 html_of_text/1419 b/1578 t/1579)";
          return bs(b,"</div>")},
        html_of_Right,
        function(self-2,b,t)
         {bs(b,"<div align=right>");
          "unknown block:(sendself self-2/1581 html_of_text/1419 b/1582 t/1583)";
          return bs(b,"</div>")},
        html_of_List,
        function(self-2,b,tl)
         {bs(b,"<ul>\n");
          var $js$6=List["iter"];
          $js$6
           (function(t)
             {bs(b,"<li>");
              "unknown block:(sendself self-2/1585 html_of_text/1419 b/1586 t/1588)";
              return bs(b,"</li>\n")},
            tl);
          return bs(b,"</ul>\n")},
        html_of_Enum,
        function(self-2,b,tl)
         {bs(b,"<OL>\n");
          var $js$6=List["iter"];
          $js$6
           (function(t)
             {bs(b,"<li>");
              "unknown block:(sendself self-2/1590 html_of_text/1419 b/1591 t/1593)";
              return bs(b,"</li>\n")},
            tl);
          return bs(b,"</OL>\n")},
        html_of_Newline,
        function(self-2,b){return bs(b,"\n<p>\n")},
        html_of_Block,
        function(self-2,b,t)
         {bs(b,"<blockquote>\n");
          "unknown block:(sendself self-2/1598 html_of_text/1419 b/1599 t/1600)";
          return bs(b,"</blockquote>\n")},
        html_of_Title,
        function(self-2,b,n,label_opt,t)
         {"unknown block:(sendself self-2/1602 create_title_label/1418\n  (makeblock 0 n/1604 label_opt/1605 t/1606))";
          var $js$6=n>6;
          if($js$6)
           {var $js$7=Printf["sprintf"];
            var
             $js$8=
              $js$7
               ([0,[11,'div class="h',[4,0,0,0,[12,34,0]]],'div class="h%d"'],
                n);
            var match=[0,$js$8,"div"]}
          else
           {var $js$9=Printf["sprintf"];
            var t$1=$js$9([0,[12,104,[4,0,0,0,0]],"h%d"],n);
            var match=[0,t$1,t$1]}
          bs(b,"<");
          var $js$10=Naming[35];
          var $js$11=$js$10(label1);
          bp
           (b,
            [0,[2,0,[11,' id="',[2,0,[12,34,0]]]],'%s id="%s"'],
            match[1],
            $js$11);
          bs(b,">");
          "unknown block:(sendself self-2/1602 html_of_text/1419 b/1603 t/1606)";
          bs(b,"</");
          bs(b,match[2]);
          return bs(b,">")},
        html_of_Latex,
        function(self-2,b,param){return 0},
        html_of_Link,
        function(self-2,b,s,t)
         {bs(b,'<a href="');
          bs(b,s);
          bs(b,'">');
          "unknown block:(sendself self-2/1615 html_of_text/1419 b/1616 t/1618)";
          return bs(b,"</a>")},
        html_of_Ref,
        function(self-2,b,name,ref_opt,text_opt)
         {var $js$6=ref_opt;
          if($js$6)
           {var kind=ref_opt[1];
            var
             h=
              function(name$1)
               {var $js$7=Odoc_info["use_hidden_modules"];
                var $js$8=$js$7(name$1);
                return [1,$js$8]};
            var $js$7="unknown primitive:isint";
            if($js$7)
             {var $js$8=kind;
              var $js$9=$js$8[0];
              if($js$9==0)
               {var exit=223}
              else
               if($js$9==1)
                {var exit=223}
               else
                if($js$9==2)
                 {var exit=223}
                else
                 if($js$9==3)
                  {var exit=223}
                 else
                  if($js$9==4)
                   {var $js$10=Naming[13];
                    var $js$11=$js$10(Naming[6],name);
                    var $js$12=h(name);
                    var match=[0,$js$11,$js$12]}
                  else
                   if($js$9==5)
                    {var $js$13=Naming[13];
                     var $js$14=$js$13(Naming[1],name);
                     var $js$15=h(name);
                     var match=[0,$js$14,$js$15]}
                   else
                    if($js$9==6)
                     {var $js$16=Naming[13];
                      var $js$17=$js$16(Naming[4],name);
                      var $js$18=h(name);
                      var match=[0,$js$17,$js$18]}
                    else
                     if($js$9==7)
                      {var $js$19=Naming[13];
                       var $js$20=$js$19(Naming[5],name);
                       var $js$21=h(name);
                       var match=[0,$js$20,$js$21]}
                     else
                      if($js$9==8)
                       {var $js$22=Naming[13];
                        var $js$23=$js$22(Naming[7],name);
                        var $js$24=h(name);
                        var match=[0,$js$23,$js$24]}
                      else
                       if($js$9==9)
                        {var $js$25=Naming[13];
                         var $js$26=$js$25(Naming[8],name);
                         var $js$27=h(name);
                         var match=[0,$js$26,$js$27]}
                       else
                        if($js$9==10)
                         {var $js$28=Naming[19];
                          var $js$29=$js$28(name);
                          var $js$30=h(name);
                          var match=[0,$js$29,$js$30]}
                        else
                         if($js$9==11)
                          {var $js$31=Naming[20];
                           var $js$32=$js$31(name);
                           var $js$33=h(name);
                           var match=[0,$js$32,$js$33]}}
            else
             {var $js$34=Naming[36];
              var $js$35=$js$34(name);
              var $js$36=Odoc_info["string_of_text"];
              var $js$37=$js$36(kind[1]);
              var $js$38=[0,$js$37];
              var $js$39=[0,$js$38,0];
              var $js$40=[5,$js$39];
              var match=[0,$js$35,$js$40]}
            switch(exit)
             {case 223:
               var $js$41=Naming[11];
               var match$1=$js$41(name);
               var $js$42=h(name);
               var match=[0,match$1[1],$js$42]
              }
            var $js$43=text_opt;
            if($js$43){var text$1=text_opt[1]}else{var text$1=[0,match[2],0]}
            var $js$44=Pervasives["^"];
            var $js$45=Pervasives["^"];
            var $js$46=$js$45(match[1],'">');
            var $js$47=$js$44('<a href="',$js$46);
            bs(b,$js$47);
            "unknown block:(sendself self-2/1620 html_of_text/1419 b/1621 text/1634)";
            return bs(b,"</a>")}
          else
           {var $js$48=text_opt;
            if($js$48){var text$2=text_opt[1]}else{var text$2=[0,[1,name],0]}
            "unknown block:(sendself self-2/1620 html_of_text/1419 b/1621 text/1626)"}},
        html_of_Superscript,
        function(self-2,b,t)
         {bs(b,'<sup class="superscript">');
          "unknown block:(sendself self-2/1637 html_of_text/1419 b/1638 t/1639)";
          return bs(b,"</sup>")},
        html_of_Subscript,
        function(self-2,b,t)
         {bs(b,'<sub class="subscript">');
          "unknown block:(sendself self-2/1641 html_of_text/1419 b/1642 t/1643)";
          return bs(b,"</sub>")},
        html_of_Module_list,
        function(self-2,b,l)
         {bs(b,'<br>\n<table class="indextable">\n');
          var $js$6=List["iter"];
          $js$6
           (function(name)
             {bs(b,'<tr><td class="module">');
              try
               {var $js$7=List["find"];
                "unknown block:(sendself self-2/1645 list_modules/1462)";
                var
                 m=
                  $js$7
                   (function(m$1){return "unknown primitive:caml_string_equal"},
                    $js$8);
                var $js$9=Naming[11];
                var match=$js$9(m[1]);
                bp
                 (b,
                  [0,
                   [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a></td>",0]]]]],
                   '<a href="%s">%s</a></td>'],
                  match[1],
                  m[1]);
                bs(b,"<td>");
                "unknown block:(sendself self-2/1645 html_of_info_first_sentence/1443 b/1646\n  (field 2 m/1649))"}
              catch(exn)
               {var $js$10=exn=Not_found;
                if($js$10)
                 {var $js$11=Odoc_global["pwarning"];
                  var $js$12=Odoc_messages["cross_module_not_found"];
                  var $js$13=$js$12(name);
                  $js$11($js$13);
                  bp(b,[0,[2,0,[11,"</td><td>",0]],"%s</td><td>"],name)}
                else
                 {"unknown primitive:reraise"}}
              return bs(b,"</td></tr>\n")},
            l);
          return bs(b,"</table>\n")},
        html_of_Index_list,
        function(self-2,b)
         {var
           index_if_not_empty=
            function(l,url,m)
             {var $js$6=l;
              if($js$6)
               {return bp
                        (b,
                         [0,
                          [11,
                           '<li><a href="',
                           [2,0,[11,'">',[2,0,[11,"</a></li>\n",0]]]]],
                          '<li><a href="%s">%s</a></li>\n'],
                         url,
                         m)}
              else
               {return 0}};
          bp
           (b,
            [0,[11,'<ul class="indexlist">\n',0],'<ul class="indexlist">\n']);
          "unknown block:(sendself self-2/1653 list_types/1446)";
          "unknown block:(sendself self-2/1653 index_types/1447)";
          index_if_not_empty($js$6,$js$7,Odoc_messages["index_of_types"]);
          "unknown block:(sendself self-2/1653 list_extensions/1448)";
          "unknown block:(sendself self-2/1653 index_extensions/1449)";
          index_if_not_empty($js$8,$js$9,Odoc_messages["index_of_extensions"]);
          "unknown block:(sendself self-2/1653 list_exceptions/1450)";
          "unknown block:(sendself self-2/1653 index_exceptions/1451)";
          index_if_not_empty
           ($js$10,$js$11,Odoc_messages["index_of_exceptions"]);
          "unknown block:(sendself self-2/1653 list_values/1452)";
          "unknown block:(sendself self-2/1653 index_values/1453)";
          index_if_not_empty($js$12,$js$13,Odoc_messages["index_of_values"]);
          "unknown block:(sendself self-2/1653 list_attributes/1454)";
          "unknown block:(sendself self-2/1653 index_attributes/1455)";
          index_if_not_empty
           ($js$14,$js$15,Odoc_messages["index_of_attributes"]);
          "unknown block:(sendself self-2/1653 list_methods/1456)";
          "unknown block:(sendself self-2/1653 index_methods/1457)";
          index_if_not_empty($js$16,$js$17,Odoc_messages["index_of_methods"]);
          "unknown block:(sendself self-2/1653 list_classes/1458)";
          "unknown block:(sendself self-2/1653 index_classes/1459)";
          index_if_not_empty($js$18,$js$19,Odoc_messages["index_of_classes"]);
          "unknown block:(sendself self-2/1653 list_class_types/1460)";
          "unknown block:(sendself self-2/1653 index_class_types/1461)";
          index_if_not_empty
           ($js$20,$js$21,Odoc_messages["index_of_class_types"]);
          "unknown block:(sendself self-2/1653 list_modules/1462)";
          "unknown block:(sendself self-2/1653 index_modules/1463)";
          index_if_not_empty($js$22,$js$23,Odoc_messages["index_of_modules"]);
          "unknown block:(sendself self-2/1653 list_module_types/1464)";
          "unknown block:(sendself self-2/1653 index_module_types/1465)";
          index_if_not_empty
           ($js$24,$js$25,Odoc_messages["index_of_module_types"]);
          return bp(b,[0,[11,"</ul>\n",0],"</ul>\n"])}]);
     return function(env,self)
      {var $js$6=CamlinternalOO["create_object_opt"];
       var self$1=$js$6(self,class);
       obj_init(self$1);
       var $js$7=CamlinternalOO["run_initializers_opt"];
       return $js$7(self,self$1,class)}},
   0,
   0];
var
 info=
  [0,
   0,
   function(class)
    {var $js$3=CamlinternalOO["new_methods_variables"];
     var ids=$js$3(class,shared$6,shared$2);
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
     var $js$4=CamlinternalOO["set_methods"];
     $js$4
      (class,
       [0,
        html_of_author_list,
        function(self-3,b,l)
         {var $js$5=l;
          if($js$5)
           {bp
             (b,
              [0,[11,"<b>",[2,0,[11,":</b> ",0]]],"<b>%s:</b> "],
              Odoc_messages["authors"]);
            'unknown block:(sendself self-3/1680 html_of_text/1667 b/1681\n  (makeblock 0 (makeblock 0 (apply (field 6 (global String!)) ", " l/1682))\n    0a))';
            return bs(b,"<br>\n")}
          else
           {return 0}},
        html_of_version_opt,
        function(self-3,b,v_opt)
         {var $js$5=v_opt;
          if($js$5)
           {bp
             (b,
              [0,[11,"<b>",[2,0,[11,":</b> ",0]]],"<b>%s:</b> "],
              Odoc_messages["version"]);
            "unknown block:(sendself self-3/1684 html_of_text/1667 b/1685\n  (makeblock 0 (makeblock 0 (field 0 v_opt/1686)) 0a))";
            return bs(b,"<br>\n")}
          else
           {return 0}},
        html_of_since_opt,
        function(self-3,b,s_opt)
         {var $js$5=s_opt;
          if($js$5)
           {bp
             (b,
              [0,[11,"<b>",[2,0,[11,"</b> ",0]]],"<b>%s</b> "],
              Odoc_messages["since"]);
            "unknown block:(sendself self-3/1689 html_of_text/1667 b/1690\n  (makeblock 0 (makeblock 0 (field 0 s_opt/1691)) 0a))";
            return bs(b,"<br>\n")}
          else
           {return 0}},
        html_of_before,
        function(self-3,b,l)
         {var
           f=
            function(param)
             {bp
               (b,
                [0,[11,"<b>",[2,0,[12,32,0]]],"<b>%s "],
                Odoc_messages["before"]);
              "unknown block:(sendself self-3/1694 html_of_text/1667 b/1695\n  (makeblock 0 (makeblock 0 (field 0 param/3245)) 0a))";
              bs(b," </b> ");
              "unknown block:(sendself self-3/1694 html_of_text/1667 b/1695 (field 1 param/3245))";
              return bs(b,"<br>\n")};
          var $js$5=List["iter"];
          return $js$5(f,l)},
        html_of_raised_exceptions,
        function(self-3,b,l)
         {var $js$5=l;
          if($js$5)
           {var $js$6=l[2];
            if($js$6)
             {bp
               (b,
                [0,[11,"<b>",[2,0,[11,"</b><ul>",0]]],"<b>%s</b><ul>"],
                Odoc_messages["raises"]);
              var $js$7=List["iter"];
              $js$7
               (function(param)
                 {bp
                   (b,
                    [0,
                     [11,"<li><code>",[2,0,[11,"</code> ",0]]],
                     "<li><code>%s</code> "],
                    param[1]);
                  "unknown block:(sendself self-3/1701 html_of_text/1667 b/1702 (field 1 param/3241))";
                  return bs(b,"</li>\n")},
                l);
              return bs(b,"</ul>\n")}
            else
             {var match=l[1];
              bp
               (b,
                [0,
                 [11,"<b>",[2,0,[11,"</b> <code>",[2,0,[11,"</code> ",0]]]]],
                 "<b>%s</b> <code>%s</code> "],
                Odoc_messages["raises"],
                match[1]);
              "unknown block:(sendself self-3/1701 html_of_text/1667 b/1702 (field 1 match/3242))";
              return bs(b,"<br>\n")}}
          else
           {return 0}},
        html_of_see,
        function(self-3,b,param)
         {var t=param[2];
          var see_ref=param[1];
          var $js$5=see_ref;
          if($js$5==0)
           {var t_ref=[0,[15,see_ref[1],t],0]}
          else
           if($js$5==1)
            {var t_ref=[0,[1,see_ref[1]],[0,[0," "],t]]}
           else
            if($js$5==2){var t_ref=[0,[5,[0,[0,see_ref[1]],0]],[0,[0," "],t]]}
          "unknown block:(sendself self-3/1709 html_of_text/1667 b/1710 t_ref/1713)"},
        html_of_sees,
        function(self-3,b,l)
         {var $js$5=l;
          if($js$5)
           {var $js$6=l[2];
            if($js$6)
             {bp
               (b,
                [0,[11,"<b>",[2,0,[11,"</b><ul>",0]]],"<b>%s</b><ul>"],
                Odoc_messages["see_also"]);
              var $js$7=List["iter"];
              $js$7
               (function(see)
                 {bs(b,"<li>");
                  "unknown block:(sendself self-3/1718 html_of_see/1673 b/1719 see/1722)";
                  return bs(b,"</li>\n")},
                l);
              return bs(b,"</ul>\n")}
            else
             {bp
               (b,
                [0,[11,"<b>",[2,0,[11,"</b> ",0]]],"<b>%s</b> "],
                Odoc_messages["see_also"]);
              "unknown block:(sendself self-3/1718 html_of_see/1673 b/1719 (field 0 l/1720))";
              return bs(b,"<br>\n")}}
          else
           {return 0}},
        html_of_return_opt,
        function(self-3,b,return_opt)
         {var $js$5=return_opt;
          if($js$5)
           {bp
             (b,
              [0,[11,"<b>",[2,0,[11,"</b> ",0]]],"<b>%s</b> "],
              Odoc_messages["returns"]);
            "unknown block:(sendself self-3/1724 html_of_text/1667 b/1725 (field 0 return_opt/1726))";
            return bs(b,"<br>\n")}
          else
           {return 0}},
        html_of_custom,
        function(self-3,b,l)
         {var $js$5=List["iter"];
          return $js$5
                  (function(param)
                    {var tag=param[1];
                     try
                      {var $js$6=List["assoc"];
                       var f=$js$6(tag,self-3[tag_functions]);
                       var $js$7=Buffer["add_string"];
                       var $js$8=f(param[2]);
                       return $js$7(b,$js$8)}
                     catch(exn)
                      {var $js$9=exn=Not_found;
                       if($js$9)
                        {var $js$10=Odoc_info["warning"];
                         var $js$11=Odoc_messages["tag_not_handled"];
                         var $js$12=$js$11(tag);
                         return $js$10($js$12)}
                       else
                        {return "unknown primitive:reraise"}}},
                   l)},
        html_of_info,
        function(self-3,*opt*,*opt*$1,b,info_opt)
         {var $js$5=*opt*;
          if($js$5){var cls=*opt*[1]}else{var cls=""}
          var $js$6=*opt*$1;
          if($js$6){var indent=*opt*$1[1]}else{var indent=1}
          var $js$7=info_opt;
          if($js$7)
           {var info$1=info_opt[1];
            var M=Odoc_info;
            var $js$8=indent;
            if($js$8)
             {var $js$9=Pervasives["^"];
              var $js$10=Pervasives["^"];
              var $js$11=$js$10(cls,'">\n');
              var $js$12=$js$9('<div class="info ',$js$11);
              bs(b,$js$12)}
            else
             {}
            var match=info$1[7];
            var $js$13=match;
            if($js$13)
             {bs(b,'<span class="warning">');
              bs(b,Odoc_messages["deprecated"]);
              bs(b,"</span>");
              "unknown block:(sendself self-3/1736 html_of_text/1667 b/1743 (field 0 match/3225))";
              bs(b,"<br>\n")}
            else
             {}
            var match$1=info$1[1];
            var $js$14=match$1;
            if($js$14)
             {var d=match$1[1];
              var $js$15="unknown primitive:caml_equal";
              if($js$15)
               {}
              else
               {"unknown block:(sendself self-3/1736 html_of_text/1667 b/1743 d/1748)";
                bs(b,"<br>\n")}}
            else
             {}
            "unknown block:(sendself self-3/1736 html_of_author_list/1668 b/1743 (field 1 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_version_opt/1669 b/1743 (field 2 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_before/1671 b/1743 (field 5 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_since_opt/1670 b/1743 (field 4 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_raised_exceptions/1672 b/1743\n  (field 8 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_return_opt/1675 b/1743 (field 9 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_sees/1674 b/1743 (field 3 info/1745))";
            "unknown block:(sendself self-3/1736 html_of_custom/1676 b/1743 (field 10 info/1745))";
            var $js$16=indent;
            if($js$16){return bs(b,"</div>\n")}else{return 0}}
          else
           {return 0}},
        html_of_info_first_sentence,
        function(self-3,b,info_opt)
         {var $js$5=info_opt;
          if($js$5)
           {var info$1=info_opt[1];
            var M=Odoc_info;
            var dep=info$1[7]!=0;
            bs(b,'<div class="info">\n');
            var $js$6=dep;
            if($js$6){bs(b,'<span class="deprecated">')}else{}
            var match=info$1[1];
            var $js$7=match;
            if($js$7)
             {var d=match[1];
              var $js$8="unknown primitive:caml_equal";
              if($js$8)
               {}
              else
               {"unknown block:(sendself self-3/1751 html_of_text/1667 b/1752\n  (apply (field 30 (global Odoc_info!))\n    (apply (field 28 (global Odoc_info!)) d/1757)))";
                bs(b,"\n")}}
            else
             {}
            var $js$9=dep;
            if($js$9){bs(b,"</span>")}else{}
            return bs(b,"</div>\n")}
          else
           {return 0}}]);
     return function(env,self)
      {var $js$5=CamlinternalOO["create_object_opt"];
       var self$1=$js$5(self,class);
       self$1[tag_functions]=0,0;
       return self$1}},
   0,
   0];
var opt=Odoc_info["apply_opt"];
var
 print_concat=
  function(b,sep,f)
   {var
     iter=
      function(param)
       {var $js$3=param;
        if($js$3)
         {var q=param[2];
          var c=param[1];
          var $js$4=q;
          if($js$4){f(c);bs(b,sep);return iter(q)}else{return f(c)}}
        else
         {return 0}};
    return iter};
var
 newline_to_indented_br=
  function(s)
   {var len=s["length"];
    var $js$3=Buffer["create"];
    var b=$js$3(len);
    var $js$4=0;
    var $js$5=len-1;
    for(var i=$js$4;i<=$js$5;i++)
     {var c=s[i];
      var $js$6=c!=10;
      if($js$6)
       {var $js$7=Buffer["add_char"];$js$7(b,c)}
      else
       {var $js$8=Buffer["add_string"];$js$8(b,"<br>     ")}}
    var $js$9=Buffer["contents"];
    return $js$9(b)};
var
 html_init=
  function(class)
   {var $js$3=CamlinternalOO["new_methods_variables"];
    var ids=$js$3(class,shared$9,shared);
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
    var escape=ids[93];
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
    var $js$4=CamlinternalOO["inherits"];
    var inh=$js$4(class,0,shared$4,shared$7,text,1);
    var obj_init=inh[1];
    var $js$5=CamlinternalOO["inherits"];
    var inh$1=$js$5(class,shared$2,shared$3,shared$1,info,1);
    var obj_init$1=inh$1[1];
    var $js$6=CamlinternalOO["set_methods"];
    $js$6
     (class,
      [0,
       character_encoding,
       function(self-4,param)
        {var $js$7=Printf["sprintf"];
         return $js$7
                 ([0,
                   [11,
                    '<meta content="text/html; charset=',
                    [2,0,[11,'" http-equiv="Content-Type">\n',0]]],
                   '<meta content="text/html; charset=%s" http-equiv="Content-Type">\n'],
                  charset[1])},
       index_prefix,
       function(self-4)
        {var $js$7="unknown primitive:caml_string_equal";
         if($js$7)
          {return "index"}
         else
          {var $js$8=Filename["basename"];
           return $js$8(Odoc_global["out_file"][1])}},
       index,
       function(self-4)
        {"unknown block:(sendself self-4/1944 index_prefix/1832)";
         var $js$7=Printf["sprintf"];
         return $js$7([0,[2,0,[11,".html",0]],"%s.html"],p)},
       index_values,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_values.html",0]],"%s_values.html"],
       index_prefix,
       index_types,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_types.html",0]],"%s_types.html"],
       index_prefix,
       index_extensions,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_extensions.html",0]],"%s_extensions.html"],
       index_prefix,
       index_exceptions,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_exceptions.html",0]],"%s_exceptions.html"],
       index_prefix,
       index_attributes,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_attributes.html",0]],"%s_attributes.html"],
       index_prefix,
       index_methods,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_methods.html",0]],"%s_methods.html"],
       index_prefix,
       index_classes,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_classes.html",0]],"%s_classes.html"],
       index_prefix,
       index_class_types,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_class_types.html",0]],"%s_class_types.html"],
       index_prefix,
       index_modules,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_modules.html",0]],"%s_modules.html"],
       index_prefix,
       index_module_types,
       12,
       Printf["sprintf"],
       [0,[2,0,[11,"_module_types.html",0]],"%s_module_types.html"],
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
       function(self-4)
        {var match=css_style[1];
         var $js$7=match;
         if($js$7)
          {self-4[style_file]=match[1],0}
         else
          {var $js$8=String["concat"];
           var default_style=$js$8("\n",self-4[default_style_options]);
           try
            {var $js$9=Filename["concat"];
             var file=$js$9(Odoc_info["Global"][5][1],self-4[style_file]);
             var $js$10="unknown primitive:caml_sys_file_exists";
             if($js$10)
              {var $js$11=Odoc_info["verbose"];
               var $js$12=Odoc_messages["file_exists_dont_generate"];
               var $js$13=$js$12(file);
               $js$11($js$13)}
             else
              {var $js$14=Pervasives["open_out"];
               var chanout=$js$14(file);
               var $js$15=Pervasives["output_string"];
               $js$15(chanout,default_style);
               var $js$16=Pervasives["flush"];
               $js$16(chanout);
               var $js$17=Pervasives["close_out"];
               $js$17(chanout);
               var $js$18=Odoc_info["verbose"];
               var $js$19=Odoc_messages["file_generated"];
               var $js$20=$js$19(file);
               $js$18($js$20)}}
           catch(exn)
            {var $js$21=exn[1]=Sys_error;
             if($js$21)
              {var $js$22=Pervasives["prerr_endline"];
               $js$22(exn[2]);
               Odoc_info["errors"][0]++}
             else
              {"unknown primitive:reraise"}}}
         var $js$23=Pervasives["^"];
         var $js$24=Pervasives["^"];
         var $js$25=$js$24(self-4[style_file],'" type="text/css">\n');
         var $js$26=$js$23('<link rel="stylesheet" href="',$js$25);
         return self-4[style]=$js$26,0},
       title,
       function(self-4)
        {var match=Odoc_info["Global"][6][1];
         var $js$7=match;
         if($js$7)
          {"unknown block:(sendself self-4/1994 escape/1996 (field 0 match/3159))"}
         else
          {return ""}},
       inner_title,
       function(self-4,s)
        {var $js$7=Pervasives["^"];
         "unknown block:(sendself self-4/1998 title/1873)";
         var $js$8=t;
         if($js$8=="")
          {var $js$9=""}
         else
          {var $js$10=Pervasives["^"];var $js$9=$js$10(t," : ")}
         "unknown block:(sendself self-4/1998 escape/1996 s/1999)";
         return $js$7($js$9,$js$11)},
       print_header,
       function(self-4,b,nav,comments,title$1)
        {var $js$7=self-4[header];return $js$7(b,nav,comments,title$1)},
       prepare_header,
       function(self-4,module_list)
        {var
          f=
           function(b,*opt*,*opt*$1,t)
            {var $js$7=*opt*;
             if($js$7){var nav=*opt*[1]}else{var nav=0}
             var $js$8=*opt*$1;
             if($js$8){var comments=*opt*$1[1]}else{var comments=0}
             var
              link_if_not_empty=
               function(l,m,url)
                {var $js$9=l;
                 if($js$9)
                  {return bp
                           (b,
                            [0,
                             [11,
                              '<link title="',
                              [2,0,[11,'" rel=Appendix href="',[2,0,[11,'">\n',0]]]]],
                             '<link title="%s" rel=Appendix href="%s">\n'],
                            m,
                            url)}
                 else
                  {return 0}};
             bs(b,"<head>\n");
             bs(b,self-4[style]);
             "unknown block:(sendself self-4/2008 character_encoding/1825 0a)";
             bs(b,$js$9);
             bs(b,'<link rel="Start" href="');
             "unknown block:(sendself self-4/2008 index/1833)";
             bs(b,$js$10);
             bs(b,'">\n');
             var $js$11=nav;
             if($js$11)
              {var match=nav[1];
               var post_opt=match[2];
               var pre_opt=match[1];
               var $js$12=pre_opt;
               if($js$12)
                {var $js$13=Naming[11];
                 var $js$14=$js$13(pre_opt[1]);
                 var $js$15=$js$14[1];
                 bp
                  (b,
                   [0,
                    [11,'<link rel="previous" href="',[2,0,[11,'">\n',0]]],
                    '<link rel="previous" href="%s">\n'],
                   $js$15)}
               else
                {}
               var $js$16=post_opt;
               if($js$16)
                {var $js$17=Naming[11];
                 var $js$18=$js$17(post_opt[1]);
                 var $js$19=$js$18[1];
                 bp
                  (b,
                   [0,
                    [11,'<link rel="next" href="',[2,0,[11,'">\n',0]]],
                    '<link rel="next" href="%s">\n'],
                   $js$19)}
               else
                {}
               var $js$20=Odoc_info["Name"][5];
               var father=$js$20(match[3]);
               var $js$21="unknown primitive:caml_string_equal";
               if($js$21)
                {"unknown block:(sendself self-4/2008 index/1833)"}
               else
                {var $js$22=Naming[11];
                 var $js$23=$js$22(father);
                 var href=$js$23[1]}
               bp
                (b,
                 [0,
                  [11,'<link rel="Up" href="',[2,0,[11,'">\n',0]]],
                  '<link rel="Up" href="%s">\n'],
                 href)}
             else
              {}
             "unknown block:(sendself self-4/2008 list_types/1855)";
             "unknown block:(sendself self-4/2008 index_types/1835)";
             link_if_not_empty($js$24,Odoc_messages["index_of_types"],$js$25);
             "unknown block:(sendself self-4/2008 list_extensions/1851)";
             "unknown block:(sendself self-4/2008 index_extensions/1836)";
             link_if_not_empty
              ($js$26,Odoc_messages["index_of_extensions"],$js$27);
             "unknown block:(sendself self-4/2008 list_exceptions/1853)";
             "unknown block:(sendself self-4/2008 index_exceptions/1837)";
             link_if_not_empty
              ($js$28,Odoc_messages["index_of_exceptions"],$js$29);
             "unknown block:(sendself self-4/2008 list_values/1849)";
             "unknown block:(sendself self-4/2008 index_values/1834)";
             link_if_not_empty($js$30,Odoc_messages["index_of_values"],$js$31);
             "unknown block:(sendself self-4/2008 list_attributes/1845)";
             "unknown block:(sendself self-4/2008 index_attributes/1838)";
             link_if_not_empty
              ($js$32,Odoc_messages["index_of_attributes"],$js$33);
             "unknown block:(sendself self-4/2008 list_methods/1847)";
             "unknown block:(sendself self-4/2008 index_methods/1839)";
             link_if_not_empty
              ($js$34,Odoc_messages["index_of_methods"],$js$35);
             "unknown block:(sendself self-4/2008 list_classes/1861)";
             "unknown block:(sendself self-4/2008 index_classes/1840)";
             link_if_not_empty
              ($js$36,Odoc_messages["index_of_classes"],$js$37);
             "unknown block:(sendself self-4/2008 list_class_types/1863)";
             "unknown block:(sendself self-4/2008 index_class_types/1841)";
             link_if_not_empty
              ($js$38,Odoc_messages["index_of_class_types"],$js$39);
             "unknown block:(sendself self-4/2008 list_modules/1857)";
             "unknown block:(sendself self-4/2008 index_modules/1842)";
             link_if_not_empty
              ($js$40,Odoc_messages["index_of_modules"],$js$41);
             "unknown block:(sendself self-4/2008 list_module_types/1859)";
             "unknown block:(sendself self-4/2008 index_module_types/1843)";
             link_if_not_empty
              ($js$42,Odoc_messages["index_of_module_types"],$js$43);
             var
              print_one=
               function(m)
                {var $js$44=Naming[11];
                 var $js$45=$js$44(m[1]);
                 var html_file=$js$45[1];
                 return bp
                         (b,
                          [0,
                           [11,
                            '<link title="',
                            [2,0,[11,'" rel="Chapter" href="',[2,0,[11,'">',0]]]]],
                           '<link title="%s" rel="Chapter" href="%s">'],
                          m[1],
                          html_file)};
             print_concat(b,"\n",print_one,module_list);
             "unknown block:(sendself self-4/2008 html_sections_links/1877 b/2011 comments/2016)";
             bs(b,"<title>");
             bs(b,t);
             return bs(b,"</title>\n</head>\n")};
         return self-4[header]=f,0},
       html_sections_links,
       function(self-4,b,comments)
        {var $js$7=List["flatten"];
         var $js$8=List["map"];
         var $js$9=$js$8(Odoc_info["get_titles_in_text"],comments);
         var titles=$js$7($js$9);
         var
          iter=
           function(acc,l)
            {var $js$10=l;
             if($js$10)
              {var q=l[2];
               var n=l[1][1];
               var $js$11=List["mem"];
               var $js$12=$js$11(n,acc);
               if($js$12){return iter(acc,q)}else{return iter([0,n,acc],q)}}
             else
              {return acc}};
         var levels=iter(0,titles);
         var $js$10=List["sort"];
         var
          sorted_levels=
           $js$10
            (function(prim,prim$1){return "unknown primitive:caml_compare"},
             levels);
         var $js$11=sorted_levels;
         if($js$11)
          {var match=sorted_levels[2];
           var n=sorted_levels[1];
           var $js$12=match;
           if($js$12)
            {var match$1=[0,[0,n],[0,match[1]]]}
           else
            {var match$1=[0,[0,n],0]}}
         else
          {var match$1=[0,0,0]}
         var
          titles_per_level=
           function(level_opt)
            {var $js$13=level_opt;
             if($js$13)
              {var n$1=level_opt[1];
               var $js$14=List["filter"];
               return $js$14(function(param){return param[1]=n$1},titles)}
             else
              {return 0}};
         var section_titles=titles_per_level(match$1[1]);
         var subsection_titles=titles_per_level(match$1[2]);
         var
          print_lines=
           function(s_rel,titles$1)
            {var $js$13=List["iter"];
             return $js$13
                     (function(param)
                       {var t=param[3];
                        var $js$14=Odoc_info["string_of_text"];
                        var s=$js$14(t);
                        "unknown block:(sendself self-4/2034 create_title_label/2064\n  (makeblock 0 (field 0 param/3131) (field 1 param/3131) t/2061))";
                        return bp
                                (b,
                                 [0,
                                  [11,
                                   '<link title="',
                                   [2,
                                    0,
                                    [11,'" rel="',[2,0,[11,'" href="#',[2,0,[11,'">\n',0]]]]]]],
                                  '<link title="%s" rel="%s" href="#%s">\n'],
                                 s,
                                 s_rel,
                                 label)},
                      titles$1)};
         print_lines("Section",section_titles);
         return print_lines("Subsection",subsection_titles)},
       print_navbar,
       function(self-4,b,pre,post,name)
        {bs(b,'<div class="navbar">');
         var $js$7=pre;
         if($js$7)
          {var name$1=pre[1];
           var $js$8=Naming[11];
           var $js$9=$js$8(name$1);
           var $js$10=$js$9[1];
           bp
            (b,
             [0,
              [11,
               '<a class="pre" href="',
               [2,0,[11,'" title="',[2,0,[11,'">',[2,0,[11,"</a>\n",0]]]]]]],
              '<a class="pre" href="%s" title="%s">%s</a>\n'],
             $js$10,
             name$1,
             Odoc_messages["previous"])}
         else
          {}
         bs(b,"&nbsp;");
         var $js$11=Odoc_info["Name"][5];
         var father=$js$11(name);
         var $js$12="unknown primitive:caml_string_equal";
         if($js$12)
          {"unknown block:(sendself self-4/2066 index/1833)"}
         else
          {var $js$13=Naming[11];var $js$14=$js$13(father);var href=$js$14[1]}
         var $js$15="unknown primitive:caml_string_equal";
         if($js$15){var father_name="Index"}else{var father_name=father}
         bp
          (b,
           [0,
            [11,
             '<a class="up" href="',
             [2,0,[11,'" title="',[2,0,[11,'">',[2,0,[11,"</a>\n",0]]]]]]],
            '<a class="up" href="%s" title="%s">%s</a>\n'],
           href,
           father_name,
           Odoc_messages["up"]);
         bs(b,"&nbsp;");
         var $js$16=post;
         if($js$16)
          {var name$2=post[1];
           var $js$17=Naming[11];
           var $js$18=$js$17(name$2);
           var $js$19=$js$18[1];
           bp
            (b,
             [0,
              [11,
               '<a class="post" href="',
               [2,0,[11,'" title="',[2,0,[11,'">',[2,0,[11,"</a>\n",0]]]]]]],
              '<a class="post" href="%s" title="%s">%s</a>\n'],
             $js$19,
             name$2,
             Odoc_messages["next"])}
         else
          {}
         return bs(b,"</div>\n")},
       keyword,
       function(self-4,s)
        {var $js$7=Pervasives["^"];
         var $js$8=Pervasives["^"];
         var $js$9=$js$8(s,"</span>");
         return $js$7('<span class="keyword">',$js$9)},
       constructor,
       function(self-4,s)
        {var $js$7=Pervasives["^"];
         var $js$8=Pervasives["^"];
         var $js$9=$js$8(s,"</span>");
         return $js$7('<span class="constructor">',$js$9)},
       output_code,
       function(self-4,in_title,file,code)
        {try
          {var $js$7=Pervasives["open_out"];
           var chanout=$js$7(file);
           var b=new_buf(0);
           bs(b,"<html>");
           "unknown block:(sendself self-4/2083 print_header/1875 b/2088 0a 0a\n  (sendself self-4/2083 inner_title/1874 in_title/2084))";
           bs(b,"<body>\n");
           "unknown block:(sendself self-4/2083 html_of_code/2089 b/2088 0a code/2086)";
           bs(b,"</body></html>");
           var $js$8=Buffer["output_buffer"];
           $js$8(chanout,b);
           var $js$9=Pervasives["close_out"];
           return $js$9(chanout)}
         catch(exn)
          {var $js$10=exn[1]=Sys_error;
           if($js$10)
            {Odoc_info["errors"][0]++;
             var $js$11=Pervasives["prerr_endline"];
             return $js$11(exn[2])}
           else
            {return "unknown primitive:reraise"}}},
       create_fully_qualified_idents_links,
       function(self-4,m_name,s)
        {var
          f=
           function(str_t)
            {var $js$7=Str["matched_string"];
             var match_s=$js$7(str_t);
             var $js$8=Odoc_info["Name"][4];
             var rel=$js$8(m_name,match_s);
             var $js$9=Odoc_info["apply_if_equal"];
             var s_final=$js$9(Odoc_info["use_hidden_modules"],match_s,rel);
             var $js$10=StringSet[3];
             var $js$11=$js$10(match_s,self-4[known_types_names]);
             if($js$11)
              {var $js$12=Pervasives["^"];
               var $js$13=Pervasives["^"];
               var $js$14=Naming[13];
               var $js$15=$js$14(Naming[1],match_s);
               var $js$16=Pervasives["^"];
               var $js$17=Pervasives["^"];
               var $js$18=$js$17(s_final,"</a>");
               var $js$19=$js$16('">',$js$18);
               var $js$20=$js$13($js$15,$js$19);
               return $js$12('<a href="',$js$20)}
             else
              {var $js$21=StringSet[3];
               var $js$22=$js$21(match_s,self-4[known_classes_names]);
               if($js$22)
                {var $js$23=Naming[11];
                 var match=$js$23(match_s);
                 var $js$24=Pervasives["^"];
                 var $js$25=Pervasives["^"];
                 var $js$26=Pervasives["^"];
                 var $js$27=Pervasives["^"];
                 var $js$28=$js$27(s_final,"</a>");
                 var $js$29=$js$26('">',$js$28);
                 var $js$30=$js$25(match[1],$js$29);
                 return $js$24('<a href="',$js$30)}
               else
                {return s_final}}};
         var $js$7=Str["global_substitute"];
         var $js$8=Str["regexp"];
         var
          $js$9=
           $js$8("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)");
         return $js$7($js$9,f,s)},
       create_fully_qualified_module_idents_links,
       function(self-4,m_name,s)
        {var
          f=
           function(str_t)
            {var $js$7=Str["matched_string"];
             var match_s=$js$7(str_t);
             var $js$8=Odoc_info["Name"][4];
             var rel=$js$8(m_name,match_s);
             var $js$9=Odoc_info["apply_if_equal"];
             var s_final=$js$9(Odoc_info["use_hidden_modules"],match_s,rel);
             var $js$10=StringSet[3];
             var $js$11=$js$10(match_s,self-4[known_modules_names]);
             if($js$11)
              {var $js$12=Naming[11];
               var match=$js$12(match_s);
               var $js$13=Pervasives["^"];
               var $js$14=Pervasives["^"];
               var $js$15=Pervasives["^"];
               var $js$16=Pervasives["^"];
               var $js$17=$js$16(s_final,"</a>");
               var $js$18=$js$15('">',$js$17);
               var $js$19=$js$14(match[1],$js$18);
               return $js$13('<a href="',$js$19)}
             else
              {return s_final}};
         var $js$7=Str["global_substitute"];
         var $js$8=Str["regexp"];
         var
          $js$9=
           $js$8("\([A-Z]\([a-zA-Z_'0-9]\)*\)\(\.[A-Z][a-zA-Z_'0-9]*\)*");
         return $js$7($js$9,f,s)},
       html_of_type_expr,
       function(self-4,b,m_name,t)
        {var $js$7=Odoc_info["remove_ending_newline"];
         var $js$8=Odoc_info["string_of_type_expr"];
         var $js$9=$js$8(t);
         var s=$js$7($js$9);
         var s2=newline_to_indented_br(s);
         bs(b,'<code class="type">');
         "unknown block:(sendself self-4/2114 create_fully_qualified_idents_links/1882 m_name/2116\n  s2/2119)";
         bs(b,$js$10);
         return bs(b,"</code>")},
       html_of_type_expr_list,
       function(self-4,par,b,m_name,sep,l)
        {var $js$7=Odoc_info["string_of_type_list"];
         var s=$js$7(par,sep,l);
         var s2=newline_to_indented_br(s);
         bs(b,'<code class="type">');
         "unknown block:(sendself self-4/2121 create_fully_qualified_idents_links/1882 m_name/2124\n  s2/2128)";
         bs(b,$js$8);
         return bs(b,"</code>")},
       html_of_class_type_param_expr_list,
       function(self-4,b,m_name,l)
        {var $js$7=Odoc_info["string_of_class_type_param_list"];
         var s=$js$7(l);
         var s2=newline_to_indented_br(s);
         bs(b,'<code class="type">[');
         "unknown block:(sendself self-4/2130 create_fully_qualified_idents_links/1882 m_name/2132\n  s2/2135)";
         bs(b,$js$8);
         return bs(b,"]</code>")},
       html_of_class_parameter_list,
       function(self-4,b,father,c)
        {var $js$7=Odoc_info["string_of_class_params"];
         var s=$js$7(c);
         var $js$8=Odoc_info["remove_ending_newline"];
         var s$1=$js$8(s);
         var s2=newline_to_indented_br(s$1);
         bs(b,'<code class="type">');
         "unknown block:(sendself self-4/2137 create_fully_qualified_idents_links/1882 father/2139\n  s2/2143)";
         bs(b,$js$9);
         return bs(b,"</code>")},
       html_of_type_expr_param_list,
       function(self-4,b,m_name,t)
        {var $js$7=Odoc_info["string_of_type_param_list"];
         var s=$js$7(t);
         var s2=newline_to_indented_br(s);
         bs(b,'<code class="type">');
         "unknown block:(sendself self-4/2145 create_fully_qualified_idents_links/1882 m_name/2147\n  s2/2150)";
         bs(b,$js$8);
         return bs(b,"</code>")},
       html_of_module_type,
       function(self-4,b,code,m_name,t)
        {var $js$7=Odoc_info["remove_ending_newline"];
         var $js$8=Odoc_info["string_of_module_type"];
         var $js$9=$js$8(code,0,t);
         var s=$js$7($js$9);
         bs(b,'<code class="type">');
         "unknown block:(sendself self-4/2152 create_fully_qualified_module_idents_links/1883\n  m_name/2155 s/2157)";
         bs(b,$js$10);
         return bs(b,"</code>")},
       html_of_module_kind,
       function(self-4,b,father,modu,kind)
        {var $js$7=kind;
         if($js$7==0)
          {'unknown block:(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: "sig"] 0a])';
           var $js$8=modu;
           if($js$8)
            {var $js$9=Naming[11];
             var match=$js$9(modu[1][1]);
             bp
              (b,
               [0,
                [11,' <a href="',[2,0,[11,'">..</a> ',0]]],
                ' <a href="%s">..</a> '],
               match[1])}
           else
            {bs(b,'<div class="sig_block">');
             var $js$10=List["iter"];
             "unknown block:(sendself self-4/2159 html_of_module_element/1892 b/2160 father/2161)";
             $js$10($js$11,kind[1]);
             bs(b,"</div>")}
           'unknown block:(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: "end"] 0a])'}
         else
          if($js$7==1)
           {bs(b,'<code class="type">');
            "unknown block:(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (field 0 (field 0 kind/2163)))";
            bs(b,$js$12);
            return bs(b,"</code>")}
          else
           if($js$7==2)
            {var k=kind[2];
             var $js$13=html_short_functors[1];
             if($js$13){bs(b," ")}else{bs(b,'<div class="sig_block">')}
             "unknown block:(sendself self-4/2159 html_of_module_parameter/1891 b/2160 father/2161\n  (field 0 kind/2163))";
             var $js$14=k;
             if($js$14==2)
              {}
             else
              {var $js$15=html_short_functors[1];if($js$15){bs(b,": ")}else{}}
             "unknown block:(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 modu/2162\n  k/2167)";
             var $js$16=!html_short_functors[1];
             if($js$16){return bs(b,"</div>")}else{return 0}}
           else
            if($js$7==3)
             {"unknown block:(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 0a\n  (field 0 kind/2163))";
              'unknown block:(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: "("] 0a])';
              "unknown block:(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 0a\n  (field 1 kind/2163))";
              'unknown block:(sendself self-4/2159 html_of_text/2177 b/2160 [0: [1: ")"] 0a])'}
            else
             if($js$7==4)
              {"unknown block:(sendself self-4/2159 html_of_module_type_kind/1893 b/2160 father/2161\n  modu/2162 0a (field 0 kind/2163))";
               bs(b,'<code class="type"> ');
               "unknown block:(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (field 1 kind/2163))";
               bs(b,$js$17);
               return bs(b,"</code>")}
             else
              if($js$7==5)
               {"unknown block:(sendself self-4/2159 html_of_module_kind/1890 b/2160 father/2161 modu/2162\n  (field 0 kind/2163))"}
              else
               if($js$7==6)
                {bs(b,'<code class="type">module type of ');
                 "unknown block:(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (field 0 kind/2163))";
                 bs(b,$js$18);
                 return bs(b,"</code>")}
               else
                if($js$7==7)
                 {var code=kind[1];
                  bs(b,'<code class="type">');
                  var match$1=kind[2][2];
                  var $js$19=match$1;
                  if($js$19)
                   {var $js$20=Naming[11];
                    var match$2=$js$20(match$1[1][1]);
                    "unknown block:(sendself self-4/2159 escape/1996 code/2175)";
                    bp
                     (b,
                      [0,
                       [11,' <a href="',[2,0,[11,'">',[2,0,[11,"</a> ",0]]]]],
                       ' <a href="%s">%s</a> '],
                      match$2[1],
                      $js$21)}
                  else
                   {"unknown block:(sendself self-4/2159 create_fully_qualified_module_idents_links/1883\n  father/2161 (sendself self-4/2159 escape/1996 code/2175))";
                    bs(b,$js$22)}
                  return bs(b,"</code>")}},
       html_of_module_parameter,
       function(self-4,b,father,p)
        {var $js$7=html_short_functors[1];
         if($js$7){var match=[0,"",""]}else{var match=[0,"functor ","-> "]}
         'unknown block:(sendself self-4/2183 html_of_text/2177 b/2184\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) (field 0 match/3097) "("))\n    (makeblock 0 (makeblock 1 (field 0 p/2186)) [0: [1: " : "] 0a])))';
         "unknown block:(sendself self-4/2183 html_of_module_type_kind/1893 b/2184 father/2185 0a 0a\n  (field 3 p/2186))";
         'unknown block:(sendself self-4/2183 html_of_text/2177 b/2184\n  (makeblock 0\n    (makeblock 1\n      (apply (field 15 (global Pervasives!)) ") " (field 1 match/3097)))\n    0a))'},
       html_of_module_element,
       function(self-4,b,m_name,ele)
        {var $js$7=ele;
         if($js$7==0)
          {"unknown block:(sendself self-4/2190 html_of_module/1907 b/2191 0a [0: 0a] 0a\n  (field 0 ele/2193))"}
         else
          if($js$7==1)
           {"unknown block:(sendself self-4/2190 html_of_modtype/1908 b/2191 0a [0: 0a] 0a\n  (field 0 ele/2193))"}
          else
           if($js$7==2)
            {"unknown block:(sendself self-4/2190 html_of_included_module/1909 b/2191 (field 0 ele/2193))"}
           else
            if($js$7==3)
             {"unknown block:(sendself self-4/2190 html_of_class/1913 b/2191 [0: 0a] 0a\n  (field 0 ele/2193))"}
            else
             if($js$7==4)
              {"unknown block:(sendself self-4/2190 html_of_class_type/1914 b/2191 [0: 0a] 0a\n  (field 0 ele/2193))"}
             else
              if($js$7==5)
               {"unknown block:(sendself self-4/2190 html_of_value/1897 b/2191 (field 0 ele/2193))"}
              else
               if($js$7==6)
                {"unknown block:(sendself self-4/2190 html_of_type_extension/1898 b/2191 m_name/2192\n  (field 0 ele/2193))"}
               else
                if($js$7==7)
                 {"unknown block:(sendself self-4/2190 html_of_exception/1899 b/2191 (field 0 ele/2193))"}
                else
                 if($js$7==8)
                  {"unknown block:(sendself self-4/2190 html_of_type/1900 b/2191 (field 0 ele/2193))"}
                 else
                  if($js$7==9)
                   {"unknown block:(sendself self-4/2190 html_of_module_comment/1916 b/2191 (field 0 ele/2193))"}},
       html_of_module_type_kind,
       function(self-4,b,father,modu,mt,kind)
        {var $js$7=kind;
         if($js$7==0)
          {'unknown block:(sendself self-4/2205 html_of_text/2177 b/2206 [0: [1: "sig"] 0a])';
           var $js$8=mt;
           if($js$8)
            {var $js$9=Naming[11];
             var match=$js$9(mt[1][1]);
             bp
              (b,
               [0,
                [11,' <a href="',[2,0,[11,'">..</a> ',0]]],
                ' <a href="%s">..</a> '],
               match[1])}
           else
            {var $js$10=modu;
             if($js$10)
              {var $js$11=Naming[11];
               var match$1=$js$11(modu[1][1]);
               bp
                (b,
                 [0,
                  [11,' <a href="',[2,0,[11,'">..</a> ',0]]],
                  ' <a href="%s">..</a> '],
                 match$1[1])}
             else
              {bs(b,'<div class="sig_block">');
               var $js$12=List["iter"];
               "unknown block:(sendself self-4/2205 html_of_module_element/1892 b/2206 father/2207)";
               $js$12($js$13,kind[1]);
               bs(b,"</div>")}}
           'unknown block:(sendself self-4/2205 html_of_text/2177 b/2206 [0: [1: "end"] 0a])'}
         else
          if($js$7==1)
           {"unknown block:(sendself self-4/2205 html_of_module_parameter/1891 b/2206 father/2207\n  (field 0 kind/2210))";
            "unknown block:(sendself self-4/2205 html_of_module_type_kind/1893 b/2206 father/2207\n  modu/2208 mt/2209 (field 1 kind/2210))"}
          else
           if($js$7==2)
            {bs(b,'<code class="type">');
             "unknown block:(sendself self-4/2205 create_fully_qualified_module_idents_links/1883\n  father/2207 (field 0 (field 0 kind/2210)))";
             bs(b,$js$14);
             return bs(b,"</code>")}
           else
            if($js$7==3)
             {"unknown block:(sendself self-4/2205 html_of_module_type_kind/1893 b/2206 father/2207\n  modu/2208 mt/2209 (field 0 kind/2210))";
              bs(b,'<code class="type"> ');
              "unknown block:(sendself self-4/2205 create_fully_qualified_module_idents_links/1883\n  father/2207 (field 1 kind/2210))";
              bs(b,$js$15);
              return bs(b,"</code>")}
            else
             if($js$7==4)
              {bs(b,'<code class="type">module type of ');
               "unknown block:(sendself self-4/2205 create_fully_qualified_module_idents_links/1883\n  father/2207 (field 0 kind/2210))";
               bs(b,$js$16);
               return bs(b,"</code>")}},
       html_of_module_parameter_type,
       function(self-4,b,m_name,p)
        {var match=p[2];
         var $js$7=match;
         if($js$7)
          {"unknown block:(sendself self-4/2223 html_of_module_type/1889 b/2224\n  (makeblock 0 (field 2 p/2226)) m_name/2225 (field 0 match/3085))"}
         else
          {return bs(b,"<code>()</code>")}},
       output_module_type,
       function(self-4,in_title,file,mtyp)
        {var $js$7=Odoc_info["remove_ending_newline"];
         var $js$8=Odoc_info["string_of_module_type"];
         var $js$9=$js$8(0,[0,1],mtyp);
         var s=$js$7($js$9);
         "unknown block:(sendself self-4/2229 output_code/1881 in_title/2230 file/2231 s/2233)"},
       output_class_type,
       function(self-4,in_title,file,ctyp)
        {var $js$7=Odoc_info["remove_ending_newline"];
         var $js$8=Odoc_info["string_of_class_type"];
         var $js$9=$js$8([0,1],ctyp);
         var s=$js$7($js$9);
         "unknown block:(sendself self-4/2235 output_code/1881 in_title/2236 file/2237 s/2239)"},
       html_of_value,
       function(self-4,b,v)
        {var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         bs(b,"\n<pre>");
         var $js$8=Naming[25];
         var $js$9=$js$8(v);
         bp(b,[0,[11,'<span id="',[2,0,[11,'">',0]]],'<span id="%s">'],$js$9);
         'unknown block:(sendself self-4/2241 keyword/1879 "val")';
         bs(b,$js$10);
         bs(b," ");
         var match=v[6];
         var $js$11=match;
         if($js$11)
          {var $js$12=Naming[28];
           var file=$js$12(v);
           "unknown block:(sendself self-4/2241 output_code/1881 (field 0 v/2243)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) file/2245)\n  (field 0 match/3080))";
           "unknown block:(sendself self-4/2241 escape/1996\n  (apply (field 0 (field 2 (global Odoc_info!))) (field 0 v/2243)))";
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             file,
             $js$13)}
         else
          {"unknown block:(sendself self-4/2241 escape/1996\n  (apply (field 0 (field 2 (global Odoc_info!))) (field 0 v/2243)))";
           bs(b,$js$14)}
         bs(b,"</span>");
         bs(b," : ");
         "unknown block:(sendself self-4/2241 html_of_type_expr/1884 b/2242\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/2243))\n  (field 2 v/2243))";
         bs(b,"</pre>");
         "unknown block:(sendself self-4/2241 html_of_info/2246 0a 0a b/2242 (field 1 v/2243))";
         var $js$15=with_parameter_list[1];
         if($js$15)
          {"unknown block:(sendself self-4/2241 html_of_parameter_list/1904 b/2242\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/2243))\n  (field 4 v/2243))"}
         else
          {"unknown block:(sendself self-4/2241 html_of_described_parameter_list/1905 b/2242\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/2243))\n  (field 4 v/2243))"}},
       html_of_type_extension,
       function(self-4,b,m_name,te)
        {var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         bs(b,"<pre><code>");
         var $js$8=Pervasives["^"];
         'unknown block:(sendself self-4/2248 keyword/1879 "type")';
         var $js$9=$js$8($js$10," ");
         bs(b,$js$9);
         var $js$11=Odoc_info["string_of_type_extension_param_list"];
         var s=$js$11(te);
         var s2=newline_to_indented_br(s);
         bs(b,'<code class="type">');
         "unknown block:(sendself self-4/2248 create_fully_qualified_idents_links/1882 m_name/2250\n  s2/2253)";
         bs(b,$js$12);
         bs(b,"</code>");
         var match=te[3];
         var $js$13=match;
         if($js$13){bs(b," ")}else{}
         "unknown block:(sendself self-4/2248 create_fully_qualified_idents_links/1882 m_name/2250\n  (field 1 te/2251))";
         bs(b,$js$14);
         bs(b," += ");
         var $js$15=te[4]=0;
         if($js$15){bs(b,"private ")}else{}
         bs(b,"</code></pre>");
         bs(b,'<table class="typetable">\n');
         var
          print_one=
           function(x)
            {var $js$16=Odoc_info["Name"][5];
             var father=$js$16(x[1]);
             bs(b,'<tr>\n<td align="left" valign="top" >\n');
             bs(b,"<code>");
             'unknown block:(sendself self-4/2248 keyword/1879 "|")';
             bs(b,$js$17);
             bs(b,'</code></td>\n<td align="left" valign="top" >\n');
             bs(b,"<code>");
             var $js$18=Naming[21];
             var $js$19=$js$18(x);
             var $js$20=Odoc_info["Name"][1];
             var $js$21=$js$20(x[1]);
             bp
              (b,
               [0,
                [11,'<span id="',[2,0,[11,'">',[2,0,[11,"</span>",0]]]]],
                '<span id="%s">%s</span>'],
               $js$19,
               $js$21);
             var match$1=x[2];
             var match$2=x[3];
             var $js$22=match$1;
             if($js$22)
              {var $js$23=match$2;
               if($js$23)
                {var $js$24=Pervasives["^"];
                 var $js$25=Pervasives["^"];
                 'unknown block:(sendself self-4/2248 keyword/1879 ":")';
                 var $js$26=$js$25($js$27," ");
                 var $js$28=$js$24(" ",$js$26);
                 bs(b,$js$28);
                 'unknown block:(sendself self-4/2248 html_of_type_expr_list/1885 [0: 0a] b/2249 father/2256\n  " * " match/3072)';
                 var $js$29=Pervasives["^"];
                 var $js$30=Pervasives["^"];
                 'unknown block:(sendself self-4/2248 keyword/1879 "->")';
                 var $js$31=$js$30($js$32," ");
                 var $js$33=$js$29(" ",$js$31);
                 bs(b,$js$33);
                 "unknown block:(sendself self-4/2248 html_of_type_expr/1884 b/2249 father/2256\n  (field 0 match/3073))"}
               else
                {var $js$34=Pervasives["^"];
                 var $js$35=Pervasives["^"];
                 'unknown block:(sendself self-4/2248 keyword/1879 "of")';
                 var $js$36=$js$35($js$37," ");
                 var $js$38=$js$34(" ",$js$36);
                 bs(b,$js$38);
                 'unknown block:(sendself self-4/2248 html_of_type_expr_list/1885 [0: 0a] b/2249 father/2256\n  " * " match/3072)'}}
             else
              {var $js$39=match$2;
               if($js$39)
                {var $js$40=Pervasives["^"];
                 var $js$41=Pervasives["^"];
                 'unknown block:(sendself self-4/2248 keyword/1879 ":")';
                 var $js$42=$js$41($js$43," ");
                 var $js$44=$js$40(" ",$js$42);
                 bs(b,$js$44);
                 "unknown block:(sendself self-4/2248 html_of_type_expr/1884 b/2249 father/2256\n  (field 0 match/3073))"}
               else
                {}}
             var match$3=x[5];
             var $js$45=match$3;
             if($js$45)
              {var xa=match$3[1];
               bs(b," = ");
               var match$4=xa[2];
               var $js$46=match$4;
               if($js$46)
                {var x$1=match$4[1];
                 var $js$47=Naming[22];
                 var $js$48=$js$47(x$1);
                 bp
                  (b,
                   [0,
                    [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
                    '<a href="%s">%s</a>'],
                   $js$48,
                   x$1[1])}
               else
                {bs(b,xa[1])}}
             else
              {}
             bs(b,"</code></td>\n");
             var match$5=x[7];
             var $js$49=match$5;
             if($js$49)
              {bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               bs(b,"<code>");
               bs(b,"(*");
               bs(b,"</code></td>");
               bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               "unknown block:(sendself self-4/2248 html_of_info/2246 0a 0a b/2249\n  (makeblock 0 (field 0 match/3066)))";
               bs(b,"</td>");
               bs
                (b,
                 '<td class="typefieldcomment" align="left" valign="bottom" >');
               bs(b,"<code>");
               bs(b,"*)");
               bs(b,"</code></td>")}
             else
              {}
             return bs(b,"\n</tr>")};
         print_concat(b,"\n",print_one,te[5]);
         bs(b,"</table>\n");
         bs(b,"\n");
         "unknown block:(sendself self-4/2248 html_of_info/2246 0a 0a b/2249 (field 0 te/2251))";
         return bs(b,"\n")},
       html_of_exception,
       function(self-4,b,e)
        {var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         bs(b,"\n<pre>");
         var $js$8=Naming[23];
         var $js$9=$js$8(e);
         bp(b,[0,[11,'<span id="',[2,0,[11,'">',0]]],'<span id="%s">'],$js$9);
         'unknown block:(sendself self-4/2265 keyword/1879 "exception")';
         bs(b,$js$10);
         bs(b," ");
         var $js$11=Odoc_info["Name"][1];
         var $js$12=$js$11(e[1]);
         bs(b,$js$12);
         bs(b,"</span>");
         var match=e[3];
         var match$1=e[4];
         var $js$13=match;
         if($js$13)
          {var $js$14=match$1;
           if($js$14)
            {var $js$15=Pervasives["^"];
             var $js$16=Pervasives["^"];
             'unknown block:(sendself self-4/2265 keyword/1879 ":")';
             var $js$17=$js$16($js$18," ");
             var $js$19=$js$15(" ",$js$17);
             bs(b,$js$19);
             'unknown block:(sendself self-4/2265 html_of_type_expr_list/1885 [0: 0a] b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267)) " * "\n  match/3060)';
             var $js$20=Pervasives["^"];
             var $js$21=Pervasives["^"];
             'unknown block:(sendself self-4/2265 keyword/1879 "->")';
             var $js$22=$js$21($js$23," ");
             var $js$24=$js$20(" ",$js$22);
             bs(b,$js$24);
             "unknown block:(sendself self-4/2265 html_of_type_expr/1884 b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267))\n  (field 0 match/3061))"}
           else
            {var $js$25=Pervasives["^"];
             var $js$26=Pervasives["^"];
             'unknown block:(sendself self-4/2265 keyword/1879 "of")';
             var $js$27=$js$26($js$28," ");
             var $js$29=$js$25(" ",$js$27);
             bs(b,$js$29);
             'unknown block:(sendself self-4/2265 html_of_type_expr_list/1885 [0: 0a] b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267)) " * "\n  (field 2 e/2267))'}}
         else
          {var $js$30=match$1;
           if($js$30)
            {var $js$31=Pervasives["^"];
             var $js$32=Pervasives["^"];
             'unknown block:(sendself self-4/2265 keyword/1879 ":")';
             var $js$33=$js$32($js$34," ");
             var $js$35=$js$31(" ",$js$33);
             bs(b,$js$35);
             "unknown block:(sendself self-4/2265 html_of_type_expr/1884 b/2266\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 e/2267))\n  (field 0 match/3061))"}
           else
            {}}
         var match$2=e[5];
         var $js$36=match$2;
         if($js$36)
          {var ea=match$2[1];
           bs(b," = ");
           var match$3=ea[2];
           var $js$37=match$3;
           if($js$37)
            {var e$1=match$3[1];
             var $js$38=Naming[24];
             var $js$39=$js$38(e$1);
             bp
              (b,
               [0,
                [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
                '<a href="%s">%s</a>'],
               $js$39,
               e$1[1])}
           else
            {bs(b,ea[1])}}
         else
          {}
         bs(b,"</pre>\n");
         "unknown block:(sendself self-4/2265 html_of_info/2246 0a 0a b/2266 (field 1 e/2267))"},
       html_of_type,
       function(self-4,b,t)
        {var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         var $js$8=Odoc_info["Name"][5];
         var father=$js$8(t[1]);
         var
          print_field_prefix=
           function(param)
            {bs(b,'<tr>\n<td align="left" valign="top" >\n');
             bs(b,"<code>&nbsp;&nbsp;</code>");
             bs(b,'</td>\n<td align="left" valign="top" >\n');
             return bs(b,"<code>")};
         var
          print_field_comment=
           function(param)
            {var $js$9=param;
             if($js$9)
              {bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               bs(b,"<code>");
               bs(b,"(*");
               bs(b,"</code></td>");
               bs
                (b,'<td class="typefieldcomment" align="left" valign="top" >');
               "unknown block:(sendself self-4/2275 html_of_info/2246 0a 0a b/2276\n  (makeblock 0 (field 0 param/3052)))";
               bs
                (b,
                 '</td><td class="typefieldcomment" align="left" valign="bottom" >');
               return bs(b,"<code>*)</code></td>")}
             else
              {return 0}};
         var match=t[6];
         var match$1=t[4];
         var $js$9=match;
         if($js$9)
          {var $js$10="unknown primitive:isint";
           if($js$10){var $js$11="\n<pre>"}else{var $js$11="\n<pre>"}}
         else
          {var $js$12="unknown primitive:isint";
           if($js$12){var $js$11="\n<pre>"}else{var $js$11="\n<pre><code>"}}
         bs(b,$js$11);
         var $js$13=Naming[14];
         var $js$14=$js$13(t);
         bp(b,[0,[11,'<span id="',[2,0,[11,'">',0]]],'<span id="%s">'],$js$14);
         var $js$15=Pervasives["^"];
         'unknown block:(sendself self-4/2275 keyword/1879 "type")';
         var $js$16=$js$15($js$17," ");
         bs(b,$js$16);
         "unknown block:(sendself self-4/2275 html_of_type_expr_param_list/1888 b/2276 father/2278\n  t/2277)";
         var match$2=t[3];
         var $js$18=match$2;
         if($js$18){bs(b," ")}else{}
         var $js$19=Odoc_info["Name"][1];
         var $js$20=$js$19(t[1]);
         bs(b,$js$20);
         bs(b,"</span> ");
         var priv=t[5]=0;
         var match$3=t[6];
         var $js$21=match$3;
         if($js$21)
          {var match$4=match$3[1];
           var $js$22=match$4;
           if($js$22==0)
            {bs(b,"= ");
             var $js$23=priv;
             if($js$23){bs(b,"private ")}else{}
             "unknown block:(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 0 match/3039))";
             bs(b," ")}
           else
            if($js$22==1)
             {bs(b,"= ");
              var $js$24=priv;
              if($js$24){bs(b,"private ")}else{}
              bs(b,"&lt;</pre>");
              bs(b,'<table class="typetable">\n');
              var
               print_one=
                function(f)
                 {print_field_prefix(0);
                  var $js$25=Naming[17];
                  var $js$26=$js$25(t,f);
                  bp
                   (b,
                    [0,
                     [11,
                      '<span id="',
                      [2,0,[11,'">',[2,0,[11,"</span>&nbsp;: ",0]]]]],
                     '<span id="%s">%s</span>&nbsp;: '],
                    $js$26,
                    f[1]);
                  "unknown block:(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 1 f/2286))";
                  bs(b,";</code></td>\n");
                  print_field_comment(f[3]);
                  return bs(b,"\n</tr>")};
              print_concat(b,"\n",print_one,match$4[1]);
              bs(b,"</table>\n>\n");
              bs(b," ")}}
         else
          {}
         var match$5=t[4];
         var $js$25=match$5;
         if(typeof $js$25=="number")
          {if($js$25==0)
            {bs(b,"</pre>")}
           else
            if($js$25==1){bs(b,"= ..");bs(b,"</pre>")}}
         else
          {var $js$26=$js$25[0];
           if($js$26==0)
            {bs(b,"= ");
             var $js$27=priv;
             if($js$27){bs(b,"private ")}else{}
             var match$6=t[6];
             var $js$28=match$6;
             if($js$28){var $js$29="</pre>"}else{var $js$29="</code></pre>"}
             bs(b,$js$29);
             bs(b,'<table class="typetable">\n');
             var
              print_one$1=
               function(constr)
                {bs(b,'<tr>\n<td align="left" valign="top" >\n');
                 bs(b,"<code>");
                 'unknown block:(sendself self-4/2275 keyword/1879 "|")';
                 bs(b,$js$30);
                 bs(b,'</code></td>\n<td align="left" valign="top" >\n');
                 bs(b,"<code>");
                 var $js$31=Naming[15];
                 var $js$32=$js$31(t,constr);
                 "unknown block:(sendself self-4/2275 constructor/1880 (field 0 constr/2290))";
                 bp
                  (b,
                   [0,
                    [11,'<span id="',[2,0,[11,'">',[2,0,[11,"</span>",0]]]]],
                    '<span id="%s">%s</span>'],
                   $js$32,
                   $js$33);
                 var match$7=constr[2];
                 var match$8=constr[3];
                 var $js$34=match$7;
                 if($js$34)
                  {var $js$35=match$8;
                   if($js$35)
                    {var $js$36=Pervasives["^"];
                     var $js$37=Pervasives["^"];
                     'unknown block:(sendself self-4/2275 keyword/1879 ":")';
                     var $js$38=$js$37($js$39," ");
                     var $js$40=$js$36(" ",$js$38);
                     bs(b,$js$40);
                     'unknown block:(sendself self-4/2275 html_of_type_expr_list/1885 [0: 0a] b/2276 father/2278\n  " * " match/3024)';
                     var $js$41=Pervasives["^"];
                     var $js$42=Pervasives["^"];
                     'unknown block:(sendself self-4/2275 keyword/1879 "->")';
                     var $js$43=$js$42($js$44," ");
                     var $js$45=$js$41(" ",$js$43);
                     bs(b,$js$45);
                     "unknown block:(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 0 match/3025))"}
                   else
                    {var $js$46=Pervasives["^"];
                     var $js$47=Pervasives["^"];
                     'unknown block:(sendself self-4/2275 keyword/1879 "of")';
                     var $js$48=$js$47($js$49," ");
                     var $js$50=$js$46(" ",$js$48);
                     bs(b,$js$50);
                     'unknown block:(sendself self-4/2275 html_of_type_expr_list/1885 [0: 0a] b/2276 father/2278\n  " * " match/3024)'}}
                 else
                  {var $js$51=match$8;
                   if($js$51)
                    {var $js$52=Pervasives["^"];
                     var $js$53=Pervasives["^"];
                     'unknown block:(sendself self-4/2275 keyword/1879 ":")';
                     var $js$54=$js$53($js$55," ");
                     var $js$56=$js$52(" ",$js$54);
                     bs(b,$js$56);
                     "unknown block:(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 0 match/3025))"}
                   else
                    {}}
                 bs(b,"</code></td>\n");
                 var match$9=constr[4];
                 var $js$57=match$9;
                 if($js$57)
                  {bs
                    (b,
                     '<td class="typefieldcomment" align="left" valign="top" >');
                   bs(b,"<code>");
                   bs(b,"(*");
                   bs(b,"</code></td>");
                   bs
                    (b,
                     '<td class="typefieldcomment" align="left" valign="top" >');
                   "unknown block:(sendself self-4/2275 html_of_info/2246 0a 0a b/2276\n  (makeblock 0 (field 0 match/3022)))";
                   bs(b,"</td>");
                   bs
                    (b,
                     '<td class="typefieldcomment" align="left" valign="bottom" >');
                   bs(b,"<code>");
                   bs(b,"*)");
                   bs(b,"</code></td>")}
                 else
                  {}
                 return bs(b,"\n</tr>")};
             print_concat(b,"\n",print_one$1,match$5[1]);
             bs(b,"</table>\n")}
           else
            if($js$26==1)
             {bs(b,"= ");
              var $js$30=priv;
              if($js$30){bs(b,"private ")}else{}
              bs(b,"{");
              var match$7=t[6];
              var $js$31=match$7;
              if($js$31){var $js$32="</pre>"}else{var $js$32="</code></pre>"}
              bs(b,$js$32);
              bs(b,'<table class="typetable">\n');
              var
               print_one$2=
                function(r)
                 {bs(b,'<tr>\n<td align="left" valign="top" >\n');
                  bs(b,"<code>&nbsp;&nbsp;</code>");
                  bs(b,'</td>\n<td align="left" valign="top" >\n');
                  bs(b,"<code>");
                  var $js$33=r[2];
                  if($js$33)
                   {'unknown block:(sendself self-4/2275 keyword/1879 "mutable&nbsp;")';
                    bs(b,$js$34)}
                  else
                   {}
                  var $js$35=Naming[16];
                  var $js$36=$js$35(t,r);
                  bp
                   (b,
                    [0,
                     [11,
                      '<span id="',
                      [2,0,[11,'">',[2,0,[11,"</span>&nbsp;: ",0]]]]],
                     '<span id="%s">%s</span>&nbsp;: '],
                    $js$36,
                    r[1]);
                  "unknown block:(sendself self-4/2275 html_of_type_expr/1884 b/2276 father/2278\n  (field 2 r/2297))";
                  bs(b,";</code></td>\n");
                  var match$8=r[4];
                  var $js$37=match$8;
                  if($js$37)
                   {bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="top" >');
                    bs(b,"<code>");
                    bs(b,"(*");
                    bs(b,"</code></td>");
                    bs
                     (b,
                      '<td class="typefieldcomment" align="left" valign="top" >');
                    "unknown block:(sendself self-4/2275 html_of_info/2246 0a 0a b/2276\n  (makeblock 0 (field 0 match/3032)))";
                    bs
                     (b,
                      '</td><td class="typefieldcomment" align="left" valign="bottom" >');
                    bs(b,"<code>*)</code></td>")}
                  else
                   {}
                  return bs(b,"\n</tr>")};
              print_concat(b,"\n",print_one$2,match$5[1]);
              bs(b,"</table>\n}\n")}}
         bs(b,"\n");
         "unknown block:(sendself self-4/2275 html_of_info/2246 0a 0a b/2276 (field 1 t/2277))";
         return bs(b,"\n")},
       html_of_attribute,
       function(self-4,b,a)
        {var $js$7=Odoc_info["Name"][5];
         var $js$8=Odoc_info["Name"][5];
         var $js$9=$js$8(a[1][1]);
         var module_name=$js$7($js$9);
         bs(b,"\n<pre>");
         var $js$10=Naming[29];
         var $js$11=$js$10(a);
         bp(b,[0,[11,'<span id="',[2,0,[11,'">',0]]],'<span id="%s">'],$js$11);
         'unknown block:(sendself self-4/2300 keyword/1879 "val")';
         bs(b,$js$12);
         bs(b," ");
         var $js$13=a[3];
         if($js$13)
          {var $js$14=Pervasives["^"];
           'unknown block:(sendself self-4/2300 keyword/1879 "virtual")';
           var $js$15=$js$14($js$16," ");
           bs(b,$js$15)}
         else
          {}
         var $js$17=a[2];
         if($js$17)
          {var $js$18=Pervasives["^"];
           "unknown block:(sendself self-4/2300 keyword/1879 (field 193 (global Odoc_messages!)))";
           var $js$19=$js$18($js$20," ");
           bs(b,$js$19)}
         else
          {}
         var match=a[1][6];
         var $js$21=match;
         if($js$21)
          {var $js$22=Naming[31];
           var file=$js$22(a);
           "unknown block:(sendself self-4/2300 output_code/1881 (field 0 (field 0 a/2302))\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) file/2305)\n  (field 0 match/3018))";
           var $js$23=Odoc_info["Name"][1];
           var $js$24=$js$23(a[1][1]);
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             file,
             $js$24)}
         else
          {var $js$25=Odoc_info["Name"][1];
           var $js$26=$js$25(a[1][1]);
           bs(b,$js$26)}
         bs(b,"</span>");
         bs(b," : ");
         "unknown block:(sendself self-4/2300 html_of_type_expr/1884 b/2301 module_name/2303\n  (field 2 (field 0 a/2302)))";
         bs(b,"</pre>");
         "unknown block:(sendself self-4/2300 html_of_info/2246 0a 0a b/2301\n  (field 1 (field 0 a/2302)))"},
       html_of_method,
       function(self-4,b,m)
        {var $js$7=Odoc_info["Name"][5];
         var $js$8=Odoc_info["Name"][5];
         var $js$9=$js$8(m[1][1]);
         var module_name=$js$7($js$9);
         bs(b,"\n<pre>");
         var $js$10=Naming[32];
         var $js$11=$js$10(m);
         bp(b,[0,[11,'<span id="',[2,0,[11,'">',0]]],'<span id="%s">'],$js$11);
         var $js$12=Pervasives["^"];
         'unknown block:(sendself self-4/2307 keyword/1879 "method")';
         var $js$13=$js$12($js$14," ");
         bs(b,$js$13);
         var $js$15=m[2];
         if($js$15)
          {var $js$16=Pervasives["^"];
           'unknown block:(sendself self-4/2307 keyword/1879 "private")';
           var $js$17=$js$16($js$18," ");
           bs(b,$js$17)}
         else
          {}
         var $js$19=m[3];
         if($js$19)
          {var $js$20=Pervasives["^"];
           'unknown block:(sendself self-4/2307 keyword/1879 "virtual")';
           var $js$21=$js$20($js$22," ");
           bs(b,$js$21)}
         else
          {}
         var match=m[1][6];
         var $js$23=match;
         if($js$23)
          {var $js$24=Naming[34];
           var file=$js$24(m);
           "unknown block:(sendself self-4/2307 output_code/1881 (field 0 (field 0 m/2309))\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) file/2312)\n  (field 0 match/3015))";
           var $js$25=Odoc_info["Name"][1];
           var $js$26=$js$25(m[1][1]);
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             file,
             $js$26)}
         else
          {var $js$27=Odoc_info["Name"][1];
           var $js$28=$js$27(m[1][1]);
           bs(b,$js$28)}
         bs(b,"</span>");
         bs(b," : ");
         "unknown block:(sendself self-4/2307 html_of_type_expr/1884 b/2308 module_name/2310\n  (field 2 (field 0 m/2309)))";
         bs(b,"</pre>");
         "unknown block:(sendself self-4/2307 html_of_info/2246 0a 0a b/2308\n  (field 1 (field 0 m/2309)))";
         var $js$29=with_parameter_list[1];
         if($js$29)
          {"unknown block:(sendself self-4/2307 html_of_parameter_list/1904 b/2308 module_name/2310\n  (field 4 (field 0 m/2309)))"}
         else
          {"unknown block:(sendself self-4/2307 html_of_described_parameter_list/1905 b/2308\n  module_name/2310 (field 4 (field 0 m/2309)))"}},
       html_of_parameter_description,
       function(self-4,b,p)
        {var $js$7=Odoc_info["Parameter"][3];
         var l=$js$7(p);
         var $js$8=l;
         if($js$8)
          {var $js$9=l[2];
           if($js$9)
            {var $js$10=List["filter"];
             var
              l2=
               $js$10
                (function(n)
                  {var $js$11=Odoc_info["Parameter"][4];
                   var $js$12=$js$11(p,n);
                   return $js$12!=0},
                 l);
             var
              print_one=
               function(n)
                {var $js$11=Odoc_info["Parameter"][4];
                 var match=$js$11(p,n);
                 var $js$12=match;
                 if($js$12)
                  {bs(b,"<code>");
                   bs(b,n);
                   bs(b,"</code> : ");
                   "unknown block:(sendself self-4/2314 html_of_text/2177 b/2315 (field 0 match/3011))"}
                 else
                  {return 0}};
             return print_concat(b,"<br>\n",print_one,l2)}
           else
            {var $js$11=Odoc_info["Parameter"][4];
             var match=$js$11(p,l[1]);
             var $js$12=match;
             if($js$12)
              {"unknown block:(sendself self-4/2314 html_of_text/2177 b/2315 (field 0 match/3009))"}
             else
              {return 0}}}
         else
          {return 0}},
       html_of_parameter_list,
       function(self-4,b,m_name,l)
        {var $js$7=l;
         if($js$7)
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
               var $js$8=Odoc_info["Parameter"][1];
               var s=$js$8(p);
               var $js$9=s;
               if($js$9==""){var $js$10="?"}else{var $js$10=s}
               bs(b,$js$10);
               bs(b,'</td>\n<td align="center" valign="top">:</td>\n');
               bs(b,"<td>");
               "unknown block:(sendself self-4/2326 html_of_type_expr/1884 b/2327 m_name/2328\n  (apply (field 1 (field 3 (global Odoc_info!))) p/2331))";
               bs(b,"<br>\n");
               "unknown block:(sendself self-4/2326 html_of_parameter_description/1903 b/2327 p/2331)";
               return bs(b,"\n</tr>\n")};
           var $js$8=List["iter"];
           $js$8(print_one,l);
           return bs(b,"</table>\n</td>\n</tr>\n</table></div>\n")}
         else
          {return 0}},
       html_of_described_parameter_list,
       function(self-4,b,m_name,l)
        {var $js$7=List["filter"];
         var
          l2=
           $js$7
            (function(p)
              {var $js$8=List["exists"];
               var $js$9=Odoc_info["Parameter"][3];
               var $js$10=$js$9(p);
               return $js$8
                       (function(n)
                         {var $js$11=Odoc_info["Parameter"][4];
                          var $js$12=$js$11(p,n);
                          return $js$12!=0},
                        $js$10)},
             l);
         var
          f=
           function(p)
            {bs(b,'<div class="param_info"><code class="code">');
             var $js$8=Odoc_info["Parameter"][1];
             var $js$9=$js$8(p);
             bs(b,$js$9);
             bs(b,"</code> : ");
             "unknown block:(sendself self-4/2334 html_of_parameter_description/1903 b/2335 p/2342)";
             return bs(b,"</div>\n")};
         var $js$8=List["iter"];
         return $js$8(f,l2)},
       html_of_module_parameter_list,
       function(self-4,b,m_name,l)
        {var $js$7=l;
         if($js$7)
          {bs(b,'<table border="0" cellpadding="3" width="100%">\n');
           bs(b,"<tr>\n");
           bs(b,'<td align="left" valign="top" width="1%%"><b>');
           bs(b,Odoc_messages["parameters"]);
           bs(b,": </b></td>\n<td>\n");
           bs(b,'<table class="paramstable">\n');
           var $js$8=List["iter"];
           $js$8
            (function(param)
              {var desc_opt=param[2];
               var p=param[1];
               bs(b,"<tr>\n");
               bs(b,'<td align="center" valign="top" width="15%">\n<code>');
               bs(b,p[1]);
               bs(b,"</code></td>\n");
               bs(b,'<td align="center" valign="top">:</td>\n');
               bs(b,"<td>");
               "unknown block:(sendself self-4/2344 html_of_module_parameter_type/1894 b/2345 m_name/2346\n  p/2348)";
               bs(b,"\n");
               var $js$9=desc_opt;
               if($js$9)
                {bs(b,"<br>");
                 "unknown block:(sendself self-4/2344 html_of_text/2177 b/2345 (field 0 desc_opt/2349))";
                 return bs(b,"\n</tr>\n")}
               else
                {return 0}},
             l);
           return bs(b,"</table>\n</td>\n</tr>\n</table>\n")}
         else
          {return 0}},
       html_of_module,
       function(self-4,b,*opt*,*opt*$1,*opt*$2,m)
        {var $js$7=*opt*;
         if($js$7){var info$1=*opt*[1]}else{var info$1=1}
         var $js$8=*opt*$1;
         if($js$8){var complete=*opt*$1[1]}else{var complete=1}
         var $js$9=*opt*$2;
         if($js$9){var with_link=*opt*$2[1]}else{var with_link=1}
         var $js$10=Naming[11];
         var match=$js$10(m[1]);
         var $js$11=Odoc_info["Name"][5];
         var father=$js$11(m[1]);
         bs(b,"\n<pre>");
         var $js$12=Pervasives["^"];
         'unknown block:(sendself self-4/2352 keyword/1879 "module")';
         var $js$13=$js$12($js$14," ");
         bs(b,$js$13);
         var $js$15=with_link;
         if($js$15)
          {var $js$16=Odoc_info["Name"][1];
           var $js$17=$js$16(m[1]);
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             $js$17)}
         else
          {var $js$18=Odoc_info["Name"][1];
           var $js$19=$js$18(m[1]);
           bs(b,$js$19)}
         var match$1=m[6];
         var $js$20=match$1;
         if($js$20==2)
          {var $js$21=html_short_functors[1];if($js$21){}else{var exit=94}}
         else
          {var exit=94}
         switch(exit){case 94:bs(b,": ")}
         "unknown block:(sendself self-4/2352 html_of_module_kind/1890 b/2353 father/2365\n  (makeblock 0 m/2363) (field 5 m/2363))";
         bs(b,"</pre>");
         var $js$22=info$1;
         if($js$22)
          {var $js$23=complete;
           if($js$23)
            {'unknown block:(sendself self-4/2352 html_of_info/2246 [0: "module top"] [0: 1a])'}
           else
            {"unknown block:(sendself self-4/2352 html_of_info_first_sentence/2366)"}
           return $js$24(b,m[3])}
         else
          {return 0}},
       html_of_modtype,
       function(self-4,b,*opt*,*opt*$1,*opt*$2,mt)
        {var $js$7=*opt*;
         if($js$7){var info$1=*opt*[1]}else{var info$1=1}
         var $js$8=*opt*$1;
         if($js$8){var complete=*opt*$1[1]}else{var complete=1}
         var $js$9=*opt*$2;
         if($js$9){var with_link=*opt*$2[1]}else{var with_link=1}
         var $js$10=Naming[11];
         var match=$js$10(mt[1]);
         var $js$11=Odoc_info["Name"][5];
         var father=$js$11(mt[1]);
         bs(b,"\n<pre>");
         var $js$12=Pervasives["^"];
         'unknown block:(sendself self-4/2368 keyword/1879 "module type")';
         var $js$13=$js$12($js$14," ");
         bs(b,$js$13);
         var $js$15=with_link;
         if($js$15)
          {var $js$16=Odoc_info["Name"][1];
           var $js$17=$js$16(mt[1]);
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             $js$17)}
         else
          {var $js$18=Odoc_info["Name"][1];
           var $js$19=$js$18(mt[1]);
           bs(b,$js$19)}
         var match$1=mt[6];
         var $js$20=match$1;
         if($js$20)
          {bs(b," = ");
           "unknown block:(sendself self-4/2368 html_of_module_type_kind/1893 b/2369 father/2381 0a\n  (makeblock 0 mt/2379) (field 0 match/2982))"}
         else
          {}
         bs(b,"</pre>");
         var $js$21=info$1;
         if($js$21)
          {var $js$22=complete;
           if($js$22)
            {'unknown block:(sendself self-4/2368 html_of_info/2246 [0: "modtype top"] [0: 1a])'}
           else
            {"unknown block:(sendself self-4/2368 html_of_info_first_sentence/2366)"}
           return $js$23(b,mt[2])}
         else
          {return 0}},
       html_of_included_module,
       function(self-4,b,im)
        {bs(b,"\n<pre>");
         var $js$7=Pervasives["^"];
         'unknown block:(sendself self-4/2384 keyword/1879 "include")';
         var $js$8=$js$7($js$9," ");
         bs(b,$js$8);
         var match=im[2];
         var $js$10=match;
         if($js$10)
          {var m=match[1][1];
           var $js$11=Naming[11];
           var match$1=$js$11(m[1]);
           var match$2=[0,match$1[1],m[1]];
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             match$2[1],
             match$2[2])}
         else
          {bs(b,im[1])}
         bs(b,"</pre>\n");
         "unknown block:(sendself self-4/2384 html_of_info/2246 0a 0a b/2385 (field 2 im/2386))"},
       html_of_class_element,
       function(self-4,b,element)
        {var $js$7=element;
         if($js$7==0)
          {"unknown block:(sendself self-4/2395 html_of_attribute/1901 b/2396 (field 0 element/2397))"}
         else
          if($js$7==1)
           {"unknown block:(sendself self-4/2395 html_of_method/1902 b/2396 (field 0 element/2397))"}
          else
           if($js$7==2)
            {"unknown block:(sendself self-4/2395 html_of_class_comment/1917 b/2396\n  (field 0 element/2397))"}},
       html_of_class_kind,
       function(self-4,b,father,cl,kind)
        {var $js$7=kind;
         if($js$7==0)
          {var inh$2=kind[1];
           'unknown block:(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: "object"] 0a])';
           var $js$8=cl;
           if($js$8)
            {var $js$9=Naming[11];
             var match=$js$9(cl[1][1]);
             bp
              (b,
               [0,
                [11,' <a href="',[2,0,[11,'">..</a> ',0]]],
                ' <a href="%s">..</a> '],
               match[1])}
           else
            {bs(b,"\n");
             var $js$10=inh$2;
             if($js$10)
              {"unknown block:(sendself self-4/2402 generate_inheritance_info/1918 b/2403 inh/2407)"}
             else
              {}
             var $js$11=List["iter"];
             "unknown block:(sendself self-4/2402 html_of_class_element/1910 b/2403)";
             $js$11($js$12,kind[2])}
           'unknown block:(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: "end"] 0a])'}
         else
          if($js$7==1)
           {'unknown block:(sendself self-4/2402 html_of_text/2177 b/2403\n  [0: [0: "class application not handled yet"] 0a])'}
          else
           if($js$7==2)
            {var cco=kind[1];
             var l=cco[3];
             var $js$13=l;
             if($js$13)
              {"unknown block:(sendself self-4/2402 html_of_class_type_param_expr_list/1886 b/2403\n  father/2404 l/2415)";
               bs(b," ")}
             else
              {}
             bs(b,'<code class="type">');
             "unknown block:(sendself self-4/2402 create_fully_qualified_idents_links/1882 father/2404\n  (field 0 cco/2410))";
             bs(b,$js$14);
             return bs(b,"</code>")}
           else
            if($js$7==3)
             {'unknown block:(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: "( "] 0a])';
              "unknown block:(sendself self-4/2402 html_of_class_kind/1911 b/2403 father/2404 0a\n  (field 0 kind/2406))";
              'unknown block:(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: " : "] 0a])';
              "unknown block:(sendself self-4/2402 html_of_class_type_kind/1912 b/2403 father/2404 0a\n  (field 1 kind/2406))";
              'unknown block:(sendself self-4/2402 html_of_text/2177 b/2403 [0: [1: " )"] 0a])'}},
       html_of_class_type_kind,
       function(self-4,b,father,ct,kind)
        {var $js$7=kind;
         if($js$7==0)
          {var inh$2=kind[1];
           'unknown block:(sendself self-4/2417 html_of_text/2177 b/2418 [0: [1: "object"] 0a])';
           var $js$8=ct;
           if($js$8)
            {var $js$9=Naming[11];
             var match=$js$9(ct[1][1]);
             bp
              (b,
               [0,
                [11,' <a href="',[2,0,[11,'">..</a> ',0]]],
                ' <a href="%s">..</a> '],
               match[1])}
           else
            {bs(b,"\n");
             var $js$10=inh$2;
             if($js$10)
              {"unknown block:(sendself self-4/2417 generate_inheritance_info/1918 b/2418 inh/2423)"}
             else
              {}
             var $js$11=List["iter"];
             "unknown block:(sendself self-4/2417 html_of_class_element/1910 b/2418)";
             $js$11($js$12,kind[2])}
           'unknown block:(sendself self-4/2417 html_of_text/2177 b/2418 [0: [1: "end"] 0a])'}
         else
          if($js$7==1)
           {var cta=kind[1];
            var l=cta[3];
            var $js$13=l;
            if($js$13)
             {"unknown block:(sendself self-4/2417 html_of_class_type_param_expr_list/1886 b/2418\n  father/2419 l/2425)";
              bs(b," ")}
            else
             {}
            bs(b,'<code class="type">');
            "unknown block:(sendself self-4/2417 create_fully_qualified_idents_links/1882 father/2419\n  (field 0 cta/2422))";
            bs(b,$js$14);
            return bs(b,"</code>")}},
       html_of_class,
       function(self-4,b,*opt*,*opt*$1,c)
        {var $js$7=*opt*;
         if($js$7){var complete=*opt*[1]}else{var complete=1}
         var $js$8=*opt*$1;
         if($js$8){var with_link=*opt*$1[1]}else{var with_link=1}
         var $js$9=Odoc_info["Name"][5];
         var father=$js$9(c[1]);
         var $js$10=Odoc_info["reset_type_names"];
         $js$10(0);
         var $js$11=Naming[11];
         var match=$js$11(c[1]);
         bs(b,"\n<pre>");
         var $js$12=Naming[14];
         var $js$13=$js$12([0,c[1],0,0,0,1,0,Odoc_info["dummy_loc"],0]);
         bp
          (b,
           [0,[11,'<span name="',[2,0,[11,'">',0]]],'<span name="%s">'],
           $js$13);
         var $js$14=Pervasives["^"];
         'unknown block:(sendself self-4/2429 keyword/1879 "class")';
         var $js$15=$js$14($js$16," ");
         bs(b,$js$15);
         var $js$17=c[5];
         if($js$17)
          {var $js$18=Pervasives["^"];
           'unknown block:(sendself self-4/2429 keyword/1879 "virtual")';
           var $js$19=$js$18($js$20," ");
           bs(b,$js$19)}
         else
          {}
         var l=c[4];
         var $js$21=l;
         if($js$21)
          {"unknown block:(sendself self-4/2429 html_of_class_type_param_expr_list/1886 b/2430\n  father/2438 l/2440)";
           bs(b," ")}
         else
          {}
         var $js$22=with_link;
         if($js$22)
          {var $js$23=Odoc_info["Name"][1];
           var $js$24=$js$23(c[1]);
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             $js$24)}
         else
          {var $js$25=Odoc_info["Name"][1];
           var $js$26=$js$25(c[1]);
           bs(b,$js$26)}
         bs(b,"</span>");
         bs(b," : ");
         "unknown block:(sendself self-4/2429 html_of_class_parameter_list/1887 b/2430 father/2438\n  c/2437)";
         "unknown block:(sendself self-4/2429 html_of_class_kind/1911 b/2430 father/2438\n  (makeblock 0 c/2437) (field 5 c/2437))";
         bs(b,"</pre>");
         var $js$27=complete;
         if($js$27)
          {'unknown block:(sendself self-4/2429 html_of_info/2246 [0: "class top"] [0: 1a])'}
         else
          {"unknown block:(sendself self-4/2429 html_of_info_first_sentence/2366)"}
         return $js$28(b,c[2])},
       html_of_class_type,
       function(self-4,b,*opt*,*opt*$1,ct)
        {var $js$7=*opt*;
         if($js$7){var complete=*opt*[1]}else{var complete=1}
         var $js$8=*opt*$1;
         if($js$8){var with_link=*opt*$1[1]}else{var with_link=1}
         var $js$9=Odoc_info["reset_type_names"];
         $js$9(0);
         var $js$10=Odoc_info["Name"][5];
         var father=$js$10(ct[1]);
         var $js$11=Naming[11];
         var match=$js$11(ct[1]);
         bs(b,"\n<pre>");
         var $js$12=Naming[14];
         var $js$13=$js$12([0,ct[1],0,0,0,1,0,Odoc_info["dummy_loc"],0]);
         bp(b,[0,[11,'<span id="',[2,0,[11,'">',0]]],'<span id="%s">'],$js$13);
         var $js$14=Pervasives["^"];
         'unknown block:(sendself self-4/2442 keyword/1879 "class type")';
         var $js$15=$js$14($js$16," ");
         bs(b,$js$15);
         var $js$17=ct[5];
         if($js$17)
          {var $js$18=Pervasives["^"];
           'unknown block:(sendself self-4/2442 keyword/1879 "virtual")';
           var $js$19=$js$18($js$20," ");
           bs(b,$js$19)}
         else
          {}
         var l=ct[4];
         var $js$21=l;
         if($js$21)
          {"unknown block:(sendself self-4/2442 html_of_class_type_param_expr_list/1886 b/2443\n  father/2451 l/2453)";
           bs(b," ")}
         else
          {}
         var $js$22=with_link;
         if($js$22)
          {var $js$23=Odoc_info["Name"][1];
           var $js$24=$js$23(ct[1]);
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             match[1],
             $js$24)}
         else
          {var $js$25=Odoc_info["Name"][1];
           var $js$26=$js$25(ct[1]);
           bs(b,$js$26)}
         bs(b,"</span>");
         bs(b," = ");
         "unknown block:(sendself self-4/2442 html_of_class_type_kind/1912 b/2443 father/2451\n  (makeblock 0 ct/2450) (field 5 ct/2450))";
         bs(b,"</pre>");
         var $js$27=complete;
         if($js$27)
          {'unknown block:(sendself self-4/2442 html_of_info/2246 [0: "classtype top"] [0: 1a])'}
         else
          {"unknown block:(sendself self-4/2442 html_of_info_first_sentence/2366)"}
         return $js$28(b,ct[2])},
       html_of_dag,
       function(self-4,dag)
        {var
          f=
           function(n)
            {var match=n[2];
             var cct_opt=match[2];
             var name=match[1];
             var $js$7=cct_opt;
             if($js$7)
              {var c=cct_opt[1][1];
               var $js$8=Naming[11];
               var $js$9=$js$8(c[1]);
               var $js$10=$js$9[1];
               var match$1=[0,c[1],$js$10]}
             else
              {var $js$11=Naming[11];
               var $js$12=$js$11(name);
               var $js$13=$js$12[1];
               var match$1=[0,name,$js$13]}
             var $js$14=Pervasives["^"];
             var $js$15=Pervasives["^"];
             var $js$16=Pervasives["^"];
             var $js$17=Pervasives["^"];
             var $js$18=Pervasives["^"];
             var $js$19=Pervasives["^"];
             var $js$20=$js$19("</a>","</td></tr>\n</table>\n");
             var $js$21=$js$18(match$1[1],$js$20);
             var $js$22=$js$17('">',$js$21);
             var $js$23=$js$16(match$1[2],$js$22);
             var $js$24=$js$15('<a href="',$js$23);
             var new_v=$js$14("<table border=1>\n<tr><td>",$js$24);
             return [0,n[1],new_v,n[3]]};
         var $js$7=Array["map"];
         var a=$js$7(f,dag[1]);
         var $js$8=Odoc_dag2html["html_of_dag"];
         return $js$8([0,a])},
       html_of_module_comment,
       function(self-4,b,text$1)
        {bs(b,"<br>\n");
         "unknown block:(sendself self-4/2468 html_of_text/2177 b/2469 text/2470)";
         return bs(b,"<br>\n")},
       html_of_class_comment,
       function(self-4,b,text$1)
        {var $js$7=text$1;
         if($js$7)
          {var match=text$1[1];
           var $js$8=match;
           if(typeof $js$8=="number")
            {"unknown block:match/2931"}
           else
            {var $js$9=$js$8[0];
             if($js$9==0)
              {var text2=[0,[13,2,0,[0,[0,match[1]],0]],text$1[2]]}
             else
              {var exit=63}}}
         else
          {var exit=63}
         switch(exit){case 63:var text2=text$1}
         "unknown block:(sendself self-4/2472 html_of_text/2177 b/2473 text2/2475)"},
       generate_inheritance_info,
       function(self-4,b,inher_l)
        {var
          f=
           function(inh$2)
            {var match=inh$2[2];
             var $js$7=match;
             if($js$7)
              {var real_name=match[1][1][1];
               var $js$8=Naming[11];
               var match$1=$js$8(real_name);
               var match$2=inh$2[3];
               var $js$9=match$2;
               if($js$9)
                {var $js$10=[0,[0,"    "],match$2[1]]}
               else
                {var $js$10=0}
               return [0,[15,match$1[1],[0,[1,real_name],0]],$js$10]}
             else
              {var match$3=inh$2[3];
               var $js$11=match$3;
               if($js$11)
                {var $js$12=[0,[0,"    "],match$3[1]]}
               else
                {var $js$12=0}
               return [0,[1,inh$2[1]],$js$12]}};
         var $js$7=List["map"];
         var $js$8=$js$7(f,inher_l);
         var $js$9=[10,$js$8];
         var $js$10=[0,$js$9,0];
         var text$1=[0,[4,[0,[0,Odoc_messages["inherits"]],0]],$js$10];
         "unknown block:(sendself self-4/2479 html_of_text/2177 b/2480 text/2491)"},
       generate_class_inheritance_info,
       function(self-4,b,cl)
        {var
          iter_kind=
           function(k)
            {var $js$7=k;
             if($js$7==0)
              {var l=k[1];
               var $js$8=l;
               if($js$8)
                {"unknown block:(sendself self-4/2493 generate_inheritance_info/1918 b/2494 l/2498)"}
               else
                {return 0}}
             else
              if($js$7==1)
               {var exit=57}
              else
               if($js$7==2)
                {var exit=57}
               else
                if($js$7==3){return iter_kind(k[1])}
             switch(exit){case 57:return 0}};
         return iter_kind(cl[6])},
       generate_class_type_inheritance_info,
       function(self-4,b,clt)
        {var match=clt[6];
         var $js$7=match;
         if($js$7==0)
          {var l=match[1];
           var $js$8=l;
           if($js$8)
            {"unknown block:(sendself self-4/2502 generate_inheritance_info/1918 b/2503 l/2505)"}
           else
            {return 0}}
         else
          if($js$7==1){return 0}},
       generate_elements_index,
       function(self-4,elements,name,info$1,target$1,title$1,simple_file)
        {try
          {var $js$7=Pervasives["open_out"];
           var $js$8=Filename["concat"];
           var $js$9=$js$8(Odoc_info["Global"][5][1],simple_file);
           var chanout=$js$7($js$9);
           var b=new_buf(0);
           bs(b,"<html>\n");
           "unknown block:(sendself self-4/2507 print_header/1875 b/2515 0a 0a\n  (sendself self-4/2507 inner_title/1874 title/2512))";
           bs(b,"<body>\n");
           'unknown block:(sendself self-4/2507 print_navbar/1878 b/2515 0a 0a "")';
           bs(b,"<h1>");
           bs(b,title$1);
           bs(b,"</h1>\n");
           var $js$10=List["sort"];
           var
            sorted_elements=
             $js$10
              (function(e1,e2)
                {var $js$11=Odoc_info["Name"][1];
                 var $js$12=name(e1);
                 var $js$13=$js$11($js$12);
                 var $js$14=Odoc_info["Name"][1];
                 var $js$15=name(e2);
                 var $js$16=$js$14($js$15);
                 return "unknown primitive:caml_string_compare"},
               elements);
           var $js$11=Odoc_info["create_index_lists"];
           var
            groups=
             $js$11
              (sorted_elements,
               function(e)
                {var $js$12=Odoc_info["Name"][1];
                 var $js$13=name(e);
                 return $js$12($js$13)});
           var
            f_ele=
             function(e)
              {var $js$12=Odoc_info["Name"][1];
               var $js$13=name(e);
               var simple_name=$js$12($js$13);
               var $js$14=Odoc_info["Name"][5];
               var $js$15=name(e);
               var father_name=$js$14($js$15);
               var $js$16=target$1(e);
               "unknown block:(sendself self-4/2507 escape/1996 simple_name/2523)";
               bp
                (b,
                 [0,
                  [11,
                   '<tr><td><a href="',
                   [2,0,[11,'">',[2,0,[11,"</a> ",0]]]]],
                  '<tr><td><a href="%s">%s</a> '],
                 $js$16,
                 $js$17);
               var
                $js$18=
                 "unknown primitive:caml_string_notequal"&&
                 "unknown primitive:caml_string_notequal";
               if($js$18)
                {var $js$19=Naming[11];
                 var $js$20=$js$19(father_name);
                 var $js$21=$js$20[1];
                 bp
                  (b,
                   [0,
                    [11,'[<a href="',[2,0,[11,'">',[2,0,[11,"</a>]",0]]]]],
                    '[<a href="%s">%s</a>]'],
                   $js$21,
                   father_name)}
               else
                {}
               bs(b,"</td>\n<td>");
               "unknown block:(sendself self-4/2507 html_of_info_first_sentence/2366 b/2515\n  (apply info/2510 e/2522))";
               return bs(b,"</td></tr>\n")};
           var
            f_group=
             function(l)
              {var $js$12=l;
               if($js$12)
                {var $js$13=Char["uppercase"];
                 var $js$14=Odoc_info["Name"][1];
                 var $js$15=name(l[1]);
                 var $js$16=$js$14($js$15);
                 var $js$17=$js$16[0];
                 var c=$js$13($js$17);
                 var $js$18=25<-65+c>>>0;
                 if($js$18)
                  {var s=""}
                 else
                  {var $js$19=String["make"];var s=$js$19(1,c)}
                 bs(b,'<tr><td align="left"><br>');
                 bs(b,s);
                 bs(b,"</td></tr>\n");
                 var $js$20=List["iter"];
                 return $js$20(f_ele,l)}
               else
                {return 0}};
           bs(b,"<table>\n");
           var $js$12=List["iter"];
           $js$12(f_group,groups);
           bs(b,"</table>\n");
           bs(b,"</body>\n</html>");
           var $js$13=Buffer["output_buffer"];
           $js$13(chanout,b);
           var $js$14=Pervasives["close_out"];
           return $js$14(chanout)}
         catch(exn)
          {var $js$15=exn[1]=Sys_error;
           if($js$15)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_elements,
       function(self-4,f_generate,l)
        {var
          iter=
           function(pre_opt,param)
            {var $js$7=param;
             if($js$7)
              {var match=param[2];
               var ele=param[1];
               var $js$8=match;
               if($js$8)
                {var ele2=match[1];
                 f_generate(pre_opt,[0,ele2],ele);
                 return iter([0,ele],[0,ele2,match[2]])}
               else
                {return f_generate(pre_opt,0,ele)}}
             else
              {return 0}};
         return iter(0,l)},
       generate_for_class,
       function(self-4,pre,post,cl)
        {var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         var $js$8=Naming[11];
         var match=$js$8(cl[1]);
         var $js$9=Naming[39];
         var type_file=$js$9(cl[1]);
         try
          {var $js$10=Pervasives["open_out"];
           var $js$11=Filename["concat"];
           var $js$12=$js$11(Odoc_info["Global"][5][1],match[1]);
           var chanout=$js$10($js$12);
           var b=new_buf(0);
           var pre_name=opt(function(c){return c[1]},pre);
           var post_name=opt(function(c){return c[1]},post);
           bs(b,self-4[doctype]);
           bs(b,"<html>\n");
           "unknown block:(sendself self-4/2542 print_header/1875 b/2549\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2550 post_name/2552 (field 0 cl/2545))))\n  (makeblock 0 (apply (field 4 (field 8 (global Odoc_info!))) 0a cl/2545))\n  (sendself self-4/2542 inner_title/1874 (field 0 cl/2545)))";
           bs(b,"<body>\n");
           "unknown block:(sendself self-4/2542 print_navbar/1878 b/2549 pre_name/2550 post_name/2552\n  (field 0 cl/2545))";
           bs(b,"<h1>");
           var $js$13=Pervasives["^"];
           var $js$14=$js$13(Odoc_messages["clas"]," ");
           bs(b,$js$14);
           var $js$15=cl[5];
           if($js$15){bs(b,"virtual ")}else{}
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             type_file,
             cl[1]);
           bs(b,"</h1>\n");
           "unknown block:(sendself self-4/2542 html_of_class/1913 b/2549 0a [0: 0a] cl/2545)";
           "unknown block:(sendself self-4/2542 html_of_described_parameter_list/1905 b/2549\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 cl/2545))\n  (field 6 cl/2545))";
           "unknown block:(sendself self-4/2542 generate_class_inheritance_info/1919 b/2549 cl/2545)";
           bs(b,'<hr width="100%">\n');
           var $js$16=List["iter"];
           "unknown block:(sendself self-4/2542 html_of_class_element/1910 b/2549)";
           var $js$17=Odoc_info["Class"][1];
           var $js$18=$js$17([0,0],cl);
           $js$16($js$19,$js$18);
           bs(b,"</body></html>");
           var $js$20=Buffer["output_buffer"];
           $js$20(chanout,b);
           var $js$21=Pervasives["close_out"];
           $js$21(chanout);
           "unknown block:(sendself self-4/2542 output_class_type/1896 (field 0 cl/2545)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2547)\n  (field 2 cl/2545))"}
         catch(exn)
          {var $js$22=exn[1]=Sys_error;
           if($js$22)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_for_class_type,
       function(self-4,pre,post,clt)
        {var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         var $js$8=Naming[11];
         var match=$js$8(clt[1]);
         var $js$9=Naming[39];
         var type_file=$js$9(clt[1]);
         try
          {var $js$10=Pervasives["open_out"];
           var $js$11=Filename["concat"];
           var $js$12=$js$11(Odoc_info["Global"][5][1],match[1]);
           var chanout=$js$10($js$12);
           var b=new_buf(0);
           var pre_name=opt(function(ct){return ct[1]},pre);
           var post_name=opt(function(ct){return ct[1]},post);
           bs(b,self-4[doctype]);
           bs(b,"<html>\n");
           "unknown block:(sendself self-4/2556 print_header/1875 b/2563\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2564 post_name/2566 (field 0 clt/2559))))\n  (makeblock 0 (apply (field 9 (field 8 (global Odoc_info!))) 0a clt/2559))\n  (sendself self-4/2556 inner_title/1874 (field 0 clt/2559)))";
           bs(b,"<body>\n");
           "unknown block:(sendself self-4/2556 print_navbar/1878 b/2563 pre_name/2564 post_name/2566\n  (field 0 clt/2559))";
           bs(b,"<h1>");
           var $js$13=Pervasives["^"];
           var $js$14=$js$13(Odoc_messages["class_type"]," ");
           bs(b,$js$14);
           var $js$15=clt[5];
           if($js$15){bs(b,"virtual ")}else{}
           bp
            (b,
             [0,
              [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
              '<a href="%s">%s</a>'],
             type_file,
             clt[1]);
           bs(b,"</h1>\n");
           "unknown block:(sendself self-4/2556 html_of_class_type/1914 b/2563 0a [0: 0a] clt/2559)";
           "unknown block:(sendself self-4/2556 generate_class_type_inheritance_info/1920 b/2563\n  clt/2559)";
           bs(b,'<hr width="100%">\n');
           var $js$16=List["iter"];
           "unknown block:(sendself self-4/2556 html_of_class_element/1910 b/2563)";
           var $js$17=Odoc_info["Class"][6];
           var $js$18=$js$17([0,0],clt);
           $js$16($js$19,$js$18);
           bs(b,"</body></html>");
           var $js$20=Buffer["output_buffer"];
           $js$20(chanout,b);
           var $js$21=Pervasives["close_out"];
           $js$21(chanout);
           "unknown block:(sendself self-4/2556 output_class_type/1896 (field 0 clt/2559)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2561)\n  (field 2 clt/2559))"}
         catch(exn)
          {var $js$22=exn[1]=Sys_error;
           if($js$22)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_for_module_type,
       function(self-4,pre,post,mt)
        {try
          {var $js$7=Naming[11];
           var match=$js$7(mt[1]);
           var $js$8=Naming[37];
           var type_file=$js$8(mt[1]);
           var $js$9=Pervasives["open_out"];
           var $js$10=Filename["concat"];
           var $js$11=$js$10(Odoc_info["Global"][5][1],match[1]);
           var chanout=$js$9($js$11);
           var b=new_buf(0);
           var pre_name=opt(function(mt$1){return mt$1[1]},pre);
           var post_name=opt(function(mt$1){return mt$1[1]},post);
           bs(b,self-4[doctype]);
           bs(b,"<html>\n");
           "unknown block:(sendself self-4/2570 print_header/1875 b/2577\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2578 post_name/2580 (field 0 mt/2573))))\n  (makeblock 0 (apply (field 30 (field 9 (global Odoc_info!))) 0a mt/2573))\n  (sendself self-4/2570 inner_title/1874 (field 0 mt/2573)))";
           bs(b,"<body>\n");
           "unknown block:(sendself self-4/2570 print_navbar/1878 b/2577 pre_name/2578 post_name/2580\n  (field 0 mt/2573))";
           bp(b,[0,[11,"<h1>",0],"<h1>"]);
           var $js$12=Pervasives["^"];
           var $js$13=$js$12(Odoc_messages["module_type"]," ");
           bs(b,$js$13);
           var match$1=mt[3];
           var $js$14=match$1;
           if($js$14)
            {bp
              (b,
               [0,
                [11,'<a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
                '<a href="%s">%s</a>'],
               type_file,
               mt[1])}
           else
            {bs(b,mt[1])}
           bs(b,"</h1>\n");
           "unknown block:(sendself self-4/2570 html_of_modtype/1908 b/2577 0a 0a [0: 0a] mt/2573)";
           "unknown block:(sendself self-4/2570 html_of_module_parameter_list/1906 b/2577\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 mt/2573))\n  (apply (field 29 (field 9 (global Odoc_info!))) 0a mt/2573))";
           bs(b,'<hr width="100%">\n');
           var $js$15=List["iter"];
           "unknown block:(sendself self-4/2570 html_of_module_element/1892 b/2577 (field 0 mt/2573))";
           var $js$16=Odoc_info["Module"][17];
           var $js$17=$js$16(0,mt);
           $js$15($js$18,$js$17);
           bs(b,"</body></html>");
           var $js$19=Buffer["output_buffer"];
           $js$19(chanout,b);
           var $js$20=Pervasives["close_out"];
           $js$20(chanout);
           "unknown block:(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_module/1926)\n  (apply (field 17 (field 9 (global Odoc_info!))) 0a mt/2573))";
           "unknown block:(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_module_type/1925)\n  (apply (field 18 (field 9 (global Odoc_info!))) 0a mt/2573))";
           "unknown block:(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_class/1923)\n  (apply (field 25 (field 9 (global Odoc_info!))) 0a mt/2573))";
           "unknown block:(sendself self-4/2570 generate_elements/1922\n  (sendself self-4/2570 generate_for_class_type/1924)\n  (apply (field 26 (field 9 (global Odoc_info!))) 0a mt/2573))";
           var match$2=mt[3];
           var $js$21=match$2;
           if($js$21)
            {"unknown block:(sendself self-4/2570 output_module_type/1895 (field 0 mt/2573)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2575)\n  (field 0 match/2880))"}
           else
            {return 0}}
         catch(exn)
          {var $js$22=exn[1]=Sys_error;
           if($js$22)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_for_module,
       function(self-4,pre,post,modu)
        {try
          {var $js$7=Odoc_info["verbose"];
           var $js$8=Pervasives["^"];
           var $js$9=$js$8("Generate for module ",modu[1]);
           $js$7($js$9);
           var $js$10=Naming[11];
           var match=$js$10(modu[1]);
           var $js$11=Naming[37];
           var type_file=$js$11(modu[1]);
           var $js$12=Naming[38];
           var code_file=$js$12(modu[1]);
           var $js$13=Pervasives["open_out"];
           var $js$14=Filename["concat"];
           var $js$15=$js$14(Odoc_info["Global"][5][1],match[1]);
           var chanout=$js$13($js$15);
           var b=new_buf(0);
           var pre_name=opt(function(m){return m[1]},pre);
           var post_name=opt(function(m){return m[1]},post);
           bs(b,self-4[doctype]);
           bs(b,"<html>\n");
           "unknown block:(sendself self-4/2585 print_header/1875 b/2593\n  (makeblock 0\n    (makeblock 0\n      (makeblock 0 pre_name/2594 post_name/2596 (field 0 modu/2588))))\n  (makeblock 0 (apply (field 15 (field 9 (global Odoc_info!))) 0a modu/2588))\n  (sendself self-4/2585 inner_title/1874 (field 0 modu/2588)))";
           bs(b,"<body>\n");
           "unknown block:(sendself self-4/2585 print_navbar/1878 b/2593 pre_name/2594 post_name/2596\n  (field 0 modu/2588))";
           bs(b,"<h1>");
           var $js$16=modu[11];
           if($js$16)
            {bs(b,modu[1])}
           else
            {var $js$17=Odoc_info["Module"][14];
             var $js$18=$js$17(modu);
             if($js$18)
              {var $js$19=Odoc_messages["functo"]}
             else
              {var $js$19=Odoc_messages["modul"]}
             bs(b,$js$19);
             bp
              (b,
               [0,
                [11,' <a href="',[2,0,[11,'">',[2,0,[11,"</a>",0]]]]],
                ' <a href="%s">%s</a>'],
               type_file,
               modu[1]);
             var match$1=modu[9];
             var $js$20=match$1;
             if($js$20)
              {bp
                (b,
                 [0,
                  [11,' (<a href="',[2,0,[11,'">.ml</a>)',0]]],
                  ' (<a href="%s">.ml</a>)'],
                 code_file)}
             else
              {}}
           bs(b,"</h1>\n");
           var $js$21=!modu[11];
           if($js$21)
            {"unknown block:(sendself self-4/2585 html_of_module/1907 b/2593 0a 0a [0: 0a] modu/2588)"}
           else
            {}
           "unknown block:(sendself self-4/2585 html_of_module_parameter_list/1906 b/2593\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 modu/2588))\n  (apply (field 14 (field 9 (global Odoc_info!))) 0a modu/2588))";
           var $js$22=!modu[11];
           if($js$22){bs(b,'<hr width="100%">\n')}else{}
           var $js$23=List["iter"];
           "unknown block:(sendself self-4/2585 html_of_module_element/1892 b/2593 (field 0 modu/2588))";
           var $js$24=Odoc_info["Module"][1];
           var $js$25=$js$24(0,modu);
           $js$23($js$26,$js$25);
           bs(b,"</body></html>");
           var $js$27=Buffer["output_buffer"];
           $js$27(chanout,b);
           var $js$28=Pervasives["close_out"];
           $js$28(chanout);
           "unknown block:(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_module/1926)\n  (apply (field 1 (field 9 (global Odoc_info!))) 0a modu/2588))";
           "unknown block:(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_module_type/1925)\n  (apply (field 2 (field 9 (global Odoc_info!))) 0a modu/2588))";
           "unknown block:(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_class/1923)\n  (apply (field 10 (field 9 (global Odoc_info!))) 0a modu/2588))";
           "unknown block:(sendself self-4/2585 generate_elements/1922\n  (sendself self-4/2585 generate_for_class_type/1924)\n  (apply (field 11 (field 9 (global Odoc_info!))) 0a modu/2588))";
           "unknown block:(sendself self-4/2585 output_module_type/1895 (field 0 modu/2588)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) type_file/2590)\n  (field 1 modu/2588))";
           var match$2=modu[9];
           var $js$29=match$2;
           if($js$29)
            {"unknown block:(sendself self-4/2585 output_code/1881 (field 0 modu/2588)\n  (apply (field 3 (global Filename!))\n    (field 0 (field 4 (field 53 (global Odoc_info!)))) code_file/2591)\n  (field 0 match/2864))"}
           else
            {return 0}}
         catch(exn)
          {var $js$30=exn[1]=Sys_error;
           if($js$30)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_index,
       function(self-4,module_list)
        {try
          {var $js$7=Pervasives["open_out"];
           var $js$8=Filename["concat"];
           "unknown block:(sendself self-4/2601 index/1833)";
           var $js$9=$js$8(Odoc_info["Global"][5][1],$js$10);
           var chanout=$js$7($js$9);
           var b=new_buf(0);
           var match=Odoc_info["Global"][6][1];
           var $js$11=match;
           if($js$11)
            {"unknown block:(sendself self-4/2601 escape/1996 (field 0 match/2859))"}
           else
            {var title$1=""}
           bs(b,self-4[doctype]);
           bs(b,"<html>\n");
           "unknown block:(sendself self-4/2601 print_header/1875 b/2604 0a 0a\n  (sendself self-4/2601 title/1873))";
           bs(b,"<body>\n");
           bs(b,"<h1>");
           bs(b,title$1);
           bs(b,"</h1>\n");
           var $js$12=Odoc_info["apply_opt"];
           var $js$13=Odoc_info["info_of_comment_file"];
           var $js$14=$js$13(module_list);
           var info$1=$js$12($js$14,Odoc_info["Global"][7][1]);
           var $js$15=info$1;
           if($js$15)
            {"unknown block:(sendself self-4/2601 html_of_info/2246 0a [0: 0a] b/2604 info/2607)"}
           else
            {"unknown block:(sendself self-4/2601 html_of_Index_list/2609 b/2604)";
             bs(b,"<br/>");
             "unknown block:(sendself self-4/2601 html_of_Module_list/2610 b/2604\n  (apply (field 11 (global List!)) (function m/2611 (field 0 m/2611))\n    module_list/2602))"}
           bs(b,"</body>\n</html>");
           var $js$16=Buffer["output_buffer"];
           $js$16(chanout,b);
           var $js$17=Pervasives["close_out"];
           return $js$17(chanout)}
         catch(exn)
          {var $js$18=exn[1]=Sys_error;
           if($js$18)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_values_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2614 generate_elements_index/1921\n  (sendself self-4/2614 list_values/1849) (function v/2616 (field 0 v/2616))\n  (function v/2617 (field 1 v/2617)) (field 26 Naming/1324)\n  (field 223 (global Odoc_messages!))\n  (sendself self-4/2614 index_values/1834))"},
       generate_extensions_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2619 generate_elements_index/1921\n  (sendself self-4/2619 list_extensions/1851)\n  (function x/2621 (field 0 x/2621))\n  (function x/2622 (field 0 (field 3 x/2622)))\n  (function x/2623 (apply (field 21 Naming/1324) x/2623))\n  (field 224 (global Odoc_messages!))\n  (sendself self-4/2619 index_extensions/1836))"},
       generate_exceptions_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2625 generate_elements_index/1921\n  (sendself self-4/2625 list_exceptions/1853)\n  (function e/2627 (field 0 e/2627)) (function e/2628 (field 1 e/2628))\n  (field 23 Naming/1324) (field 225 (global Odoc_messages!))\n  (sendself self-4/2625 index_exceptions/1837))"},
       generate_types_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2630 generate_elements_index/1921\n  (sendself self-4/2630 list_types/1855) (function t/2632 (field 0 t/2632))\n  (function t/2633 (field 1 t/2633)) (field 17 Naming/1324)\n  (field 226 (global Odoc_messages!))\n  (sendself self-4/2630 index_types/1835))"},
       generate_attributes_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2635 generate_elements_index/1921\n  (sendself self-4/2635 list_attributes/1845)\n  (function a/2637 (field 0 (field 0 a/2637)))\n  (function a/2638 (field 1 (field 0 a/2638))) (field 29 Naming/1324)\n  (field 227 (global Odoc_messages!))\n  (sendself self-4/2635 index_attributes/1838))"},
       generate_methods_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2640 generate_elements_index/1921\n  (sendself self-4/2640 list_methods/1847)\n  (function m/2642 (field 0 (field 0 m/2642)))\n  (function m/2643 (field 1 (field 0 m/2643))) (field 32 Naming/1324)\n  (field 228 (global Odoc_messages!))\n  (sendself self-4/2640 index_methods/1839))"},
       generate_classes_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2645 generate_elements_index/1921\n  (sendself self-4/2645 list_classes/1861) (function c/2647 (field 0 c/2647))\n  (function c/2648 (field 1 c/2648))\n  (function c/2649 (field 0 (apply (field 10 Naming/1324) (field 0 c/2649))))\n  (field 229 (global Odoc_messages!))\n  (sendself self-4/2645 index_classes/1840))"},
       generate_class_types_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2651 generate_elements_index/1921\n  (sendself self-4/2651 list_class_types/1863)\n  (function ct/2653 (field 0 ct/2653)) (function ct/2654 (field 1 ct/2654))\n  (function ct/2655\n    (field 0 (apply (field 10 Naming/1324) (field 0 ct/2655))))\n  (field 230 (global Odoc_messages!))\n  (sendself self-4/2651 index_class_types/1841))"},
       generate_modules_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2657 generate_elements_index/1921\n  (sendself self-4/2657 list_modules/1857) (function m/2659 (field 0 m/2659))\n  (function m/2660 (field 2 m/2660))\n  (function m/2661 (field 0 (apply (field 10 Naming/1324) (field 0 m/2661))))\n  (field 231 (global Odoc_messages!))\n  (sendself self-4/2657 index_modules/1842))"},
       generate_module_types_index,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2663 generate_elements_index/1921\n  (sendself self-4/2663 list_module_types/1859)\n  (function mt/2665 (field 0 mt/2665)) (function mt/2666 (field 1 mt/2666))\n  (function mt/2667\n    (field 0 (apply (field 10 Naming/1324) (field 0 mt/2667))))\n  (field 232 (global Odoc_messages!))\n  (sendself self-4/2663 index_module_types/1843))"},
       generate,
       function(self-4,module_list)
        {"unknown block:(sendself self-4/2669 init_style/1872)";
         var $js$7=Odoc_info["Search"][2];
         var $js$8=$js$7(module_list);
         self-4[list_values$1]=$js$8,0;
         var $js$9=Odoc_info["Search"][3];
         var $js$10=$js$9(module_list);
         self-4[list_extensions$1]=$js$10,0;
         var $js$11=Odoc_info["Search"][4];
         var $js$12=$js$11(module_list);
         self-4[list_exceptions$1]=$js$12,0;
         var $js$13=Odoc_info["Search"][5];
         var $js$14=$js$13(module_list);
         self-4[list_types$1]=$js$14,0;
         var $js$15=Odoc_info["Search"][6];
         var $js$16=$js$15(module_list);
         self-4[list_attributes$1]=$js$16,0;
         var $js$17=Odoc_info["Search"][7];
         var $js$18=$js$17(module_list);
         self-4[list_methods$1]=$js$18,0;
         var $js$19=Odoc_info["Search"][8];
         var $js$20=$js$19(module_list);
         self-4[list_classes$1]=$js$20,0;
         var $js$21=Odoc_info["Search"][9];
         var $js$22=$js$21(module_list);
         self-4[list_class_types$1]=$js$22,0;
         var $js$23=Odoc_info["Search"][10];
         var $js$24=$js$23(module_list);
         self-4[list_modules$1]=$js$24,0;
         var $js$25=Odoc_info["Search"][11];
         var $js$26=$js$25(module_list);
         self-4[list_module_types$1]=$js$26,0;
         "unknown block:(sendself self-4/2669 prepare_header/1876 module_list/2670)";
         var $js$27=Odoc_info["Search"][5];
         var types=$js$27(module_list);
         var $js$28=List["fold_left"];
         var
          $js$29=
           $js$28
            (function(acc,t){var $js$30=StringSet[4];return $js$30(t[1],acc)},
             self-4[known_types_names],
             types);
         self-4[known_types_names]=$js$29,0;
         var $js$30=Odoc_info["Search"][8];
         var classes=$js$30(module_list);
         var $js$31=Odoc_info["Search"][9];
         var class_types=$js$31(module_list);
         var $js$32=List["fold_left"];
         var
          $js$33=
           $js$32
            (function(acc,c){var $js$34=StringSet[4];return $js$34(c[1],acc)},
             self-4[known_classes_names],
             classes);
         self-4[known_classes_names]=$js$33,0;
         var $js$34=List["fold_left"];
         var
          $js$35=
           $js$34
            (function(acc,ct)
              {var $js$36=StringSet[4];return $js$36(ct[1],acc)},
             self-4[known_classes_names],
             class_types);
         self-4[known_classes_names]=$js$35,0;
         var $js$36=Odoc_info["Search"][11];
         var module_types=$js$36(module_list);
         var $js$37=Odoc_info["Search"][10];
         var modules=$js$37(module_list);
         var $js$38=List["fold_left"];
         var
          $js$39=
           $js$38
            (function(acc,m){var $js$40=StringSet[4];return $js$40(m[1],acc)},
             self-4[known_modules_names],
             modules);
         self-4[known_modules_names]=$js$39,0;
         var $js$40=List["fold_left"];
         var
          $js$41=
           $js$40
            (function(acc,mt)
              {var $js$42=StringSet[4];return $js$42(mt[1],acc)},
             self-4[known_modules_names],
             module_types);
         self-4[known_modules_names]=$js$41,0;
         var $js$42=!index_only[1];
         if($js$42)
          {"unknown block:(sendself self-4/2669 generate_elements/1922\n  (sendself self-4/2669 generate_for_module/1926) module_list/2670)"}
         else
          {}
         try
          {"unknown block:(sendself self-4/2669 generate_index/1927 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_values_index/1928 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_extensions_index/1929 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_exceptions_index/1930 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_types_index/1931 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_attributes_index/1932 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_methods_index/1933 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_classes_index/1934 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_class_types_index/1935 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_modules_index/1936 module_list/2670)";
           "unknown block:(sendself self-4/2669 generate_module_types_index/1937 module_list/2670)"}
         catch(exn)
          {var $js$43=exn[1]=Failure;
           if($js$43)
            {var $js$44=Pervasives["prerr_endline"];
             $js$44(exn[2]);
             return Odoc_info["errors"][0]++}
           else
            {return "unknown primitive:reraise"}}}]);
    var $js$7=CamlinternalOO["add_initializer"];
    $js$7
     (class,
      function(self-4)
       {return Odoc_ocamlhtml["html_of_comment"][1]=
               function(s)
                {var b=new_buf(0);
                 "unknown block:(sendself self-4/2688 html_of_text/2177 b/2690\n  (apply (field 0 (field 1 (global Odoc_text!))) s/2689))";
                 var $js$8=Buffer["contents"];
                 return $js$8(b)},
               0});
    return function(env,self)
     {var $js$8=CamlinternalOO["create_object_opt"];
      var self$1=$js$8(self,class);
      obj_init(self$1);
      obj_init$1(self$1);
      self$1[doctype]=
      '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">\n',
      0;
      var $js$9=Pervasives["^"];
      var $js$10=Pervasives["^"];
      var $js$11=Pervasives["^"];
      var
       $js$12=
        $js$11
         ("text-align: center; background-color: #90BDFF ;","padding: 2px; }");
      var $js$13=$js$10("margin-top: 5px; margin-bottom: 2px;",$js$12);
      var
       $js$14=
        $js$9("h2 { font-size : 20pt ; border: 1px solid #000000; ",$js$13);
      var $js$15=Pervasives["^"];
      var $js$16=Pervasives["^"];
      var $js$17=Pervasives["^"];
      var
       $js$18=
        $js$17
         ("text-align: center; background-color: #90DDFF ;","padding: 2px; }");
      var $js$19=$js$16("margin-top: 5px; margin-bottom: 2px;",$js$18);
      var
       $js$20=
        $js$15("h3 { font-size : 20pt ; border: 1px solid #000000; ",$js$19);
      var $js$21=Pervasives["^"];
      var $js$22=Pervasives["^"];
      var $js$23=Pervasives["^"];
      var
       $js$24=
        $js$23
         ("text-align: center; background-color: #90EDFF ;","padding: 2px; }");
      var $js$25=$js$22("margin-top: 5px; margin-bottom: 2px;",$js$24);
      var
       $js$26=
        $js$21("h4 { font-size : 20pt ; border: 1px solid #000000; ",$js$25);
      var $js$27=Pervasives["^"];
      var $js$28=Pervasives["^"];
      var $js$29=Pervasives["^"];
      var
       $js$30=
        $js$29
         ("text-align: center; background-color: #90FDFF ;","padding: 2px; }");
      var $js$31=$js$28("margin-top: 5px; margin-bottom: 2px;",$js$30);
      var
       $js$32=
        $js$27("h5 { font-size : 20pt ; border: 1px solid #000000; ",$js$31);
      var $js$33=Pervasives["^"];
      var $js$34=Pervasives["^"];
      var $js$35=Pervasives["^"];
      var
       $js$36=
        $js$35
         ("text-align: center; background-color: #90BDFF ; ",
          "padding: 2px; }");
      var $js$37=$js$34("margin-top: 5px; margin-bottom: 2px;",$js$36);
      var
       $js$38=
        $js$33("h6 { font-size : 20pt ; border: 1px solid #000000; ",$js$37);
      var $js$39=Pervasives["^"];
      var $js$40=Pervasives["^"];
      var $js$41=Pervasives["^"];
      var
       $js$42=
        $js$41
         ("text-align: center; background-color: #E0FFFF ; ",
          "padding: 2px; }");
      var $js$43=$js$40("margin-top: 5px; margin-bottom: 2px;",$js$42);
      var
       $js$44=
        $js$39
         ("div.h7 { font-size : 20pt ; border: 1px solid #000000; ",$js$43);
      var $js$45=Pervasives["^"];
      var $js$46=Pervasives["^"];
      var $js$47=Pervasives["^"];
      var
       $js$48=
        $js$47
         ("text-align: center; background-color: #F0FFFF ; ",
          "padding: 2px; }");
      var $js$49=$js$46("margin-top: 5px; margin-bottom: 2px;",$js$48);
      var
       $js$50=
        $js$45
         ("div.h8 { font-size : 20pt ; border: 1px solid #000000; ",$js$49);
      var $js$51=Pervasives["^"];
      var $js$52=Pervasives["^"];
      var $js$53=Pervasives["^"];
      var
       $js$54=
        $js$53
         ("text-align: center; background-color: #FFFFFF ; ",
          "padding: 2px; }");
      var $js$55=$js$52("margin-top: 5px; margin-bottom: 2px;",$js$54);
      var
       $js$56=
        $js$51
         ("div.h9 { font-size : 20pt ; border: 1px solid #000000; ",$js$55);
      var
       $js$57=
        [0,
         $js$56,
         [0,
          "a {color: #416DFF; text-decoration: none}",
          [0,
           "a:hover {background-color: #ddd; text-decoration: underline}",
           [0,
            "pre { margin-bottom: 4px; font-family: monospace; }",
            [0,
             "pre.verbatim, pre.codepre { }",
             [0,
              ".indextable {border: 1px #ddd solid; border-collapse: collapse}",
              [0,
               ".indextable td, .indextable th {border: 1px #ddd solid; min-width: 80px}",
               [0,
                ".indextable td.module {background-color: #eee ;  padding-left: 2px; padding-right: 2px}",
                [0,
                 ".indextable td.module a {color: 4E6272; text-decoration: none; display: block; width: 100%}",
                 [0,
                  ".indextable td.module a:hover {text-decoration: underline; background-color: transparent}",
                  [0,
                   ".deprecated {color: #888; font-style: italic}",
                   [0,
                    ".indextable tr td div.info { margin-left: 2px; margin-right: 2px }",
                    [0,
                     "ul.indexlist { margin-left: 0; padding-left: 0;}",
                     [0,
                      "ul.indexlist li { list-style-type: none ; margin-left: 0; padding-left: 0; }",
                      0]]]]]]]]]]]]]];
      var $js$58=[0,$js$50,$js$57];
      var $js$59=[0,$js$44,$js$58];
      var $js$60=[0,$js$38,$js$59];
      var $js$61=[0,$js$32,$js$60];
      var $js$62=[0,$js$26,$js$61];
      var $js$63=[0,$js$20,$js$62];
      var $js$64=[0,$js$14,$js$63];
      var $js$65=[0,"h1 { font-size : 20pt ; text-align: center; }",$js$64];
      var
       $js$66=
        [0,
         "body {font: 13px sans-serif; color: black; text-align: left; padding: 5px; margin: 0}",
         $js$65];
      var $js$67=[0,"*:target { background: yellow; }",$js$66];
      var $js$68=[0,"div.sig_block {margin-left: 2em}",$js$67];
      var
       $js$69=
        [0,
         "td.typefieldcomment { background-color : #FFFFFF ; font-size: smaller ;}",
         $js$68];
      var $js$70=[0,"tr { background-color : White }",$js$69];
      var
       $js$71=
        [0,".paramstable { border-style : hidden ; padding: 5pt 5pt}",$js$70];
      var $js$72=[0,".typetable { border-style : hidden }",$js$71];
      var $js$73=[0,".code { color : #465F91 ; }",$js$72];
      var
       $js$74=
        [0,
         ".param_info { margin-top: 4px; margin-left : 3em; margin-right : 3em }",
         $js$73];
      var $js$75=[0,".info { margin-left : 3em; margin-right: 3em }",$js$74];
      var $js$76=[0,".warning { color : Red ; font-weight : bold }",$js$75];
      var $js$77=[0,".string { color : Maroon }",$js$76];
      var $js$78=[0,".type { color : #5C6585 }",$js$77];
      var $js$79=[0,".constructor { color : Blue }",$js$78];
      var $js$80=[0,".comment { color : Green }",$js$79];
      var $js$81=[0,".subscript { font-size : 4 }",$js$80];
      var $js$82=[0,".superscript { font-size : 4 }",$js$81];
      var $js$83=[0,".keywordsign { color : #C04600 }",$js$82];
      var $js$84=[0,".keyword { font-weight : bold ; color : Red }",$js$83];
      self$1[default_style_options]=$js$84,0;
      self$1[style_file]="style.css",0;
      self$1[style]="",0;
      self$1[known_types_names]=StringSet[1],0;
      self$1[known_classes_names]=StringSet[1],0;
      self$1[known_modules_names]=StringSet[1],0;
      self$1[list_attributes$1]=0,0;
      self$1[list_methods$1]=0,0;
      self$1[list_values$1]=0,0;
      self$1[list_extensions$1]=0,0;
      self$1[list_exceptions$1]=0,0;
      self$1[list_types$1]=0,0;
      self$1[list_modules$1]=0,0;
      self$1[list_module_types$1]=0,0;
      self$1[list_classes$1]=0,0;
      self$1[list_class_types$1]=0,0;
      self$1[header]=
      function(b,*opt*,*opt*$1,param)
       {var $js$85=*opt*;
        if($js$85){var nav=*opt*[1]}else{var nav=0}
        var $js$86=*opt*$1;
        if($js$86){var comments=*opt*$1[1]}else{var comments=0}
        return 0},
      0;
      var $js$85=CamlinternalOO["run_initializers_opt"];
      return $js$85(self,self$1,class)}};
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
