var String=require("String");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Odoc_to_text=require("Odoc_to_text");
var Printf=require("Printf");
var Format=require("Format");
var Odoc_latex_style=require("Odoc_latex_style");
var Filename=require("Filename");
var Buffer=require("Buffer");
var Str=require("Str");
var Odoc_messages=require("Odoc_messages");
var shared=[0,"text_of_info","latex_of_text","latex_of_info"];
var
 shared$1=
  [0,
   "value_label",
   "type_label",
   "subst",
   "section_style",
   "recfield_label",
   "module_type_label",
   "module_label",
   "method_label",
   "make_ref",
   "make_label",
   "latex_of_text_element",
   "latex_of_text",
   "latex_of_custom_text",
   "latex_of_Verbatim",
   "latex_of_Title",
   "latex_of_Target",
   "latex_of_Superscript",
   "latex_of_Subscript",
   "latex_of_Right",
   "latex_of_Ref",
   "latex_of_Raw",
   "latex_of_Newline",
   "latex_of_List",
   "latex_of_Link",
   "latex_of_Left",
   "latex_of_Latex",
   "latex_of_Italic",
   "latex_of_Enum",
   "latex_of_Emphasize",
   "latex_of_CodePre",
   "latex_of_Code",
   "latex_of_Center",
   "latex_of_Bold",
   "latex_of_Block",
   "label",
   "extension_label",
   "exception_label",
   "escape_simple",
   "escape_code",
   "escape",
   "const_label",
   "class_type_label",
   "class_label",
   "attribute_label"];
var
 shared$2=
  [0,
   "normal_class_params",
   "normal_class_type",
   "normal_class_type_param_list",
   "normal_module_type",
   "normal_type",
   "normal_type_list",
   "relative_idents",
   "relative_module_idents",
   "text_of_attribute",
   "text_of_author_list",
   "text_of_before",
   "text_of_class_kind",
   "text_of_class_params",
   "text_of_class_type_kind",
   "text_of_class_type_param_expr_list",
   "text_of_custom",
   "text_of_exception",
   "text_of_info",
   "text_of_method",
   "text_of_module_kind",
   "text_of_module_parameter_list",
   "text_of_module_type",
   "text_of_module_type_kind",
   "text_of_parameter_description",
   "text_of_parameter_list",
   "text_of_raised_exceptions",
   "text_of_return_opt",
   "text_of_see",
   "text_of_sees",
   "text_of_short_type_expr",
   "text_of_since_opt",
   "text_of_type_expr",
   "text_of_type_expr_list",
   "text_of_value",
   "text_of_version_opt"];
var shared$3=[0,"latex_of_info"];
var shared$4=[0,"tag_functions"];
var shared$5=[0,"subst_strings_simple","subst_strings_code","subst_strings"];
var shared$6=[0,"label"];
var shared$7=[0,"subst_strings","subst_strings_simple","subst_strings_code"];
var
 shared$8=
  [0,
   "attribute_label",
   "class_label",
   "class_type_label",
   "const_label",
   "escape",
   "escape_code",
   "escape_simple",
   "exception_label",
   "extension_label",
   "label",
   "latex_of_Block",
   "latex_of_Bold",
   "latex_of_Center",
   "latex_of_Code",
   "latex_of_CodePre",
   "latex_of_Emphasize",
   "latex_of_Enum",
   "latex_of_Italic",
   "latex_of_Latex",
   "latex_of_Left",
   "latex_of_Link",
   "latex_of_List",
   "latex_of_Newline",
   "latex_of_Raw",
   "latex_of_Ref",
   "latex_of_Right",
   "latex_of_Subscript",
   "latex_of_Superscript",
   "latex_of_Target",
   "latex_of_Title",
   "latex_of_Verbatim",
   "latex_of_custom_text",
   "latex_of_text",
   "latex_of_text_element",
   "make_label",
   "make_ref",
   "method_label",
   "module_label",
   "module_type_label",
   "recfield_label",
   "section_style",
   "subst",
   "type_label",
   "value_label"];
var shared$9=[0,"text_of_info","latex_of_text"];
var
 shared$10=
  [0,
   "value_label",
   "type_label",
   "text_of_value",
   "text_of_method",
   "text_of_info",
   "text_of_exception",
   "text_of_class_type_param_expr_list",
   "text_of_class_params",
   "text_of_attribute",
   "relative_module_idents",
   "relative_idents",
   "normal_type_list",
   "normal_type",
   "normal_class_type_param_list",
   "module_type_label",
   "module_label",
   "method_label",
   "make_ref",
   "make_label",
   "latex_of_value",
   "latex_of_type_params",
   "latex_of_type_extension",
   "latex_of_type",
   "latex_of_text",
   "latex_of_module_type_kind",
   "latex_of_module_type",
   "latex_of_module_parameter",
   "latex_of_module_kind",
   "latex_of_module_element",
   "latex_of_module",
   "latex_of_method",
   "latex_of_info",
   "latex_of_included_module",
   "latex_of_exception",
   "latex_of_class_type_kind",
   "latex_of_class_type",
   "latex_of_class_parameter_list",
   "latex_of_class_kind",
   "latex_of_class_element",
   "latex_of_class",
   "latex_of_attribute",
   "latex_header",
   "latex_for_module_type_label",
   "latex_for_module_type_index",
   "latex_for_module_label",
   "latex_for_module_index",
   "latex_for_class_type_label",
   "latex_for_class_type_index",
   "latex_for_class_label",
   "latex_for_class_index",
   "label",
   "generate_style_file",
   "generate_inheritance_info",
   "generate_for_top_module",
   "generate_class_type_inheritance_info",
   "generate_class_inheritance_info",
   "generate",
   "first_and_rest_of_info",
   "extension_label",
   "exception_label",
   "escape",
   "class_type_label",
   "class_label",
   "attribute_label"];
var separate_files=[0,0];
var
 latex_titles=
  [0,
   [0,
    [0,1,"section"],
    [0,
     [0,2,"subsection"],
     [0,
      [0,3,"subsubsection"],
      [0,[0,4,"paragraph"],[0,[0,5,"subparagraph"],0]]]]]];
var latex_value_prefix=[0,Odoc_messages["default_latex_value_prefix"]];
var latex_type_prefix=[0,Odoc_messages["default_latex_type_prefix"]];
var latex_type_elt_prefix=[0,Odoc_messages["default_latex_type_elt_prefix"]];
var
 latex_extension_prefix=
  [0,Odoc_messages["default_latex_extension_prefix"]];
var
 latex_exception_prefix=
  [0,Odoc_messages["default_latex_exception_prefix"]];
var latex_module_prefix=[0,Odoc_messages["default_latex_module_prefix"]];
var
 latex_module_type_prefix=
  [0,Odoc_messages["default_latex_module_type_prefix"]];
var latex_class_prefix=[0,Odoc_messages["default_latex_class_prefix"]];
var
 latex_class_type_prefix=
  [0,Odoc_messages["default_latex_class_type_prefix"]];
var
 latex_attribute_prefix=
  [0,Odoc_messages["default_latex_attribute_prefix"]];
var latex_method_prefix=[0,Odoc_messages["default_latex_method_prefix"]];
var new_buf=function(param){var $js=Buffer["create"];return $js(1024)};
var
 new_fmt=
  function(param)
   {var b=new_buf(0);
    var $js=Format["formatter_of_buffer"];
    var fmt=$js(b);
    return [0,
            fmt,
            function(param$1)
             {var $js$1=Format["pp_print_flush"];
              $js$1(fmt,0);
              var $js$2=Buffer["contents"];
              var s=$js$2(b);
              var $js$3=Buffer["reset"];
              $js$3(b);
              return s}]};
var p=Format["fprintf"];
var
 ps=
  function(f,s){var $js=Format["fprintf"];return $js(f,[0,[2,0,0],"%s"],s)};
var bp=Printf["bprintf"];
var bs=Buffer["add_string"];
var
 print_concat=
  function(fmt,sep,f)
   {var
     iter=
      function(param)
       {var $js=param;
        if($js)
         {var q=param[2];
          var c=param[1];
          var $js$1=q;
          if($js$1){f(c);ps(fmt,sep);return iter(q)}else{return f(c)}}
        else
         {return 0}};
    return iter};
var
 text_init=
  function(class)
   {var $js=CamlinternalOO["new_methods_variables"];
    var ids=$js(class,shared$1,shared$7);
    var value_label=ids[1];
    var type_label=ids[2];
    var subst=ids[3];
    var section_style=ids[4];
    var recfield_label=ids[5];
    var module_type_label=ids[6];
    var module_label=ids[7];
    var method_label=ids[8];
    var make_ref=ids[9];
    var make_label=ids[10];
    var latex_of_text_element=ids[11];
    var latex_of_text=ids[12];
    var latex_of_custom_text=ids[13];
    var latex_of_Verbatim=ids[14];
    var latex_of_Title=ids[15];
    var latex_of_Target=ids[16];
    var latex_of_Superscript=ids[17];
    var latex_of_Subscript=ids[18];
    var latex_of_Right=ids[19];
    var latex_of_Ref=ids[20];
    var latex_of_Raw=ids[21];
    var latex_of_Newline=ids[22];
    var latex_of_List=ids[23];
    var latex_of_Link=ids[24];
    var latex_of_Left=ids[25];
    var latex_of_Latex=ids[26];
    var latex_of_Italic=ids[27];
    var latex_of_Enum=ids[28];
    var latex_of_Emphasize=ids[29];
    var latex_of_CodePre=ids[30];
    var latex_of_Code=ids[31];
    var latex_of_Center=ids[32];
    var latex_of_Bold=ids[33];
    var latex_of_Block=ids[34];
    var label=ids[35];
    var extension_label=ids[36];
    var exception_label=ids[37];
    var escape_simple=ids[38];
    var escape_code=ids[39];
    var escape=ids[40];
    var const_label=ids[41];
    var class_type_label=ids[42];
    var class_label=ids[43];
    var attribute_label=ids[44];
    var subst_strings=ids[45];
    var subst_strings_simple=ids[46];
    var subst_strings_code=ids[47];
    var $js$1=CamlinternalOO["set_methods"];
    $js$1
     (class,
      [0,
       section_style,
       function(self-1,level,s)
        {try
          {var $js$2=List["assoc"];
           var sec=$js$2(level,latex_titles[1]);
           var $js$3=Pervasives["^"];
           var $js$4=Pervasives["^"];
           var $js$5=Pervasives["^"];
           var $js$6=Pervasives["^"];
           var $js$7=$js$6(s,"}\n");
           var $js$8=$js$5("{",$js$7);
           var $js$9=$js$4(sec,$js$8);
           return $js$3("\",$js$9)}
         catch(exn)
          {var $js$10=exn=Not_found;
           if($js$10){return s}else{return "unknown primitive:reraise"}}},
       subst,
       function(self-1,l,s)
        {var $js$2=List["fold_left"];
         return $js$2
                 (function(acc,param)
                   {var $js$3=Str["global_replace"];
                    return $js$3(param[1],param[2],acc)},
                  s,
                  l)},
       escape,
       function(self-1,s)
        {"unknown block:(sendself self-1/1325 subst/1269\n  (array.unsafe_get self-1/1325 subst_strings/1262) s/1326)"},
       escape_simple,
       function(self-1,s)
        {"unknown block:(sendself self-1/1328 subst/1269\n  (array.unsafe_get self-1/1328 subst_strings_simple/1265) s/1329)"},
       escape_code,
       function(self-1,s)
        {"unknown block:(sendself self-1/1331 subst/1269\n  (array.unsafe_get self-1/1331 subst_strings_code/1268) s/1332)"},
       label,
       function(self-1,*opt*,name)
        {var $js$2=*opt*;
         if($js$2){var no_=*opt*[1]}else{var no_=1}
         var len=name["length"];
         var $js$3=Buffer["create"];
         var buf=$js$3(len);
         var $js$4=0;
         var $js$5=len-1;
         for(var i=$js$4;i<=$js$5;i++)
          {var c=name[i];
           var $js$6=c>=96;
           if($js$6)
            {var switcher=-124+c;
             var $js$7=2<switcher>>>0;
             if($js$7)
              {var exit=106}
             else
              {var $js$8=switcher;
               var $js$9=$js$8[0];
               if($js$9==0)
                {var match=[0,"-pipe",'"|']}
               else
                if($js$9==1)
                 {var exit=106}
                else
                 if($js$9==2){var match=[0,"-tilde","~"]}}}
           else
            {var $js$10=c>=33;
             if($js$10)
              {var $js$11=-33+c;
               var $js$12=$js$11[0];
               if($js$12==0)
                {var match=[0,"-bang",'"!']}
               else
                if($js$12==1)
                 {var exit=106}
                else
                 if($js$12==2)
                  {var exit=106}
                 else
                  if($js$12==3)
                   {var match=[0,"-dollar","$"]}
                  else
                   if($js$12==4)
                    {var match=[0,"-percent","%"]}
                   else
                    if($js$12==5)
                     {var match=[0,"-ampersand","&"]}
                    else
                     if($js$12==6)
                      {var exit=106}
                     else
                      if($js$12==7)
                       {var exit=106}
                      else
                       if($js$12==8)
                        {var exit=106}
                       else
                        if($js$12==9)
                         {var match=[0,"-star","*"]}
                        else
                         if($js$12==10)
                          {var match=[0,"-plus","+"]}
                         else
                          if($js$12==11)
                           {var exit=106}
                          else
                           if($js$12==12)
                            {var match=[0,"-minus","-"]}
                           else
                            if($js$12==13)
                             {var exit=106}
                            else
                             if($js$12==14)
                              {var match=[0,"-slash","/"]}
                             else
                              if($js$12==15)
                               {var exit=106}
                              else
                               if($js$12==16)
                                {var exit=106}
                               else
                                if($js$12==17)
                                 {var exit=106}
                                else
                                 if($js$12==18)
                                  {var exit=106}
                                 else
                                  if($js$12==19)
                                   {var exit=106}
                                  else
                                   if($js$12==20)
                                    {var exit=106}
                                   else
                                    if($js$12==21)
                                     {var exit=106}
                                    else
                                     if($js$12==22)
                                      {var exit=106}
                                     else
                                      if($js$12==23)
                                       {var exit=106}
                                      else
                                       if($js$12==24)
                                        {var exit=106}
                                       else
                                        if($js$12==25)
                                         {var match=[0,"-colon",":"]}
                                        else
                                         if($js$12==26)
                                          {var exit=106}
                                         else
                                          if($js$12==27)
                                           {var match=[0,"-lt","<"]}
                                          else
                                           if($js$12==28)
                                            {var match=[0,"-equal","="]}
                                           else
                                            if($js$12==29)
                                             {var match=[0,"-gt",">"]}
                                            else
                                             if($js$12==30)
                                              {var exit=106}
                                             else
                                              if($js$12==31)
                                               {var match=[0,"-at",'"@']}
                                              else
                                               if($js$12==32)
                                                {var exit=106}
                                               else
                                                if($js$12==33)
                                                 {var exit=106}
                                                else
                                                 if($js$12==34)
                                                  {var exit=106}
                                                 else
                                                  if($js$12==35)
                                                   {var exit=106}
                                                  else
                                                   if($js$12==36)
                                                    {var exit=106}
                                                   else
                                                    if($js$12==37)
                                                     {var exit=106}
                                                    else
                                                     if($js$12==38)
                                                      {var exit=106}
                                                     else
                                                      if($js$12==39)
                                                       {var exit=106}
                                                      else
                                                       if($js$12==40)
                                                        {var exit=106}
                                                       else
                                                        if($js$12==41)
                                                         {var exit=106}
                                                        else
                                                         if($js$12==42)
                                                          {var exit=106}
                                                         else
                                                          if($js$12==43)
                                                           {var exit=106}
                                                          else
                                                           if($js$12==44)
                                                            {var exit=106}
                                                           else
                                                            if($js$12==45)
                                                             {var exit=106}
                                                            else
                                                             if($js$12==46)
                                                              {var exit=106}
                                                             else
                                                              if($js$12==47)
                                                               {var exit=106}
                                                              else
                                                               if($js$12==48)
                                                                {var exit=106}
                                                               else
                                                                if($js$12==49)
                                                                 {var exit=106}
                                                                else
                                                                 if($js$12==50)
                                                                  {var exit=106}
                                                                 else
                                                                  if($js$12==51)
                                                                   {var exit=106}
                                                                  else
                                                                   if($js$12==52)
                                                                    {var exit=106}
                                                                   else
                                                                    if($js$12==53)
                                                                     {var exit=106}
                                                                    else
                                                                     if($js$12==54)
                                                                      {var exit=106}
                                                                     else
                                                                      if($js$12==55)
                                                                       {var exit=106}
                                                                      else
                                                                       if($js$12==56)
                                                                        {var exit=106}
                                                                       else
                                                                        if($js$12==57)
                                                                         {var exit=106}
                                                                        else
                                                                         if($js$12==58)
                                                                          {var exit=106}
                                                                         else
                                                                          if($js$12==59)
                                                                           {var exit=106}
                                                                          else
                                                                           if($js$12==60)
                                                                            {var exit=106}
                                                                           else
                                                                            if($js$12==61)
                                                                             {var match=[0,"-exp","^"]}
                                                                            else
                                                                             if($js$12==62){var match=[0,"-underscore","_"]}}
             else
              {var exit=106}}
           switch(exit)
            {case 106:
              var $js$13=String["make"];
              var $js$14=$js$13(1,c);
              var $js$15=String["make"];
              var $js$16=$js$15(1,c);
              var match=[0,$js$14,$js$16]
             }
           var $js$17=Buffer["add_string"];
           var $js$18=no_;
           if($js$18){var $js$19=match[1]}else{var $js$19=match[2]}
           $js$17(buf,$js$19)}
         var $js$20=Buffer["contents"];
         return $js$20(buf)},
       value_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1346 label/1273 no_/1347 name/1348)";
         return $js$2(latex_value_prefix[1],$js$3)},
       attribute_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1350 label/1273 no_/1351 name/1352)";
         return $js$2(latex_attribute_prefix[1],$js$3)},
       method_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1354 label/1273 no_/1355 name/1356)";
         return $js$2(latex_method_prefix[1],$js$3)},
       class_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1358 label/1273 no_/1359 name/1360)";
         return $js$2(latex_class_prefix[1],$js$3)},
       class_type_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1362 label/1273 no_/1363 name/1364)";
         return $js$2(latex_class_type_prefix[1],$js$3)},
       module_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1366 label/1273 no_/1367 name/1368)";
         return $js$2(latex_module_prefix[1],$js$3)},
       module_type_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1370 label/1273 no_/1371 name/1372)";
         return $js$2(latex_module_type_prefix[1],$js$3)},
       extension_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1374 label/1273 no_/1375 name/1376)";
         return $js$2(latex_extension_prefix[1],$js$3)},
       exception_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1378 label/1273 no_/1379 name/1380)";
         return $js$2(latex_exception_prefix[1],$js$3)},
       type_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1382 label/1273 no_/1383 name/1384)";
         return $js$2(latex_type_prefix[1],$js$3)},
       recfield_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1386 label/1273 no_/1387 name/1388)";
         return $js$2(latex_type_elt_prefix[1],$js$3)},
       const_label,
       function(self-1,no_,name)
        {var $js$2=Pervasives["^"];
         "unknown block:(sendself self-1/1390 label/1273 no_/1391 name/1392)";
         return $js$2(latex_type_elt_prefix[1],$js$3)},
       make_label,
       function(self-1,label$1)
        {var $js$2=Pervasives["^"];
         var $js$3=Pervasives["^"];
         var $js$4=$js$3(label$1,"}");
         return $js$2("\label{",$js$4)},
       make_ref,
       function(self-1,label$1)
        {var $js$2=Pervasives["^"];
         var $js$3=Pervasives["^"];
         var $js$4=$js$3(label$1,"}");
         return $js$2("\ref{",$js$4)},
       latex_of_text,
       function(self-1,fmt,t)
        {var $js$2=List["iter"];
         "unknown block:(sendself self-1/1400 latex_of_text_element/1289 fmt/1401)";
         return $js$2($js$3,t)},
       latex_of_text_element,
       function(self-1,fmt,txt)
        {var $js$2=txt;
         if(typeof $js$2=="number")
          {if($js$2==0)
            {"unknown block:(sendself self-1/1404 latex_of_Newline/1304 fmt/1405)"}
           else
            if($js$2==1){var exit=105}}
         else
          {var $js$3=$js$2[0];
           if($js$3==0)
            {"unknown block:(sendself self-1/1404 latex_of_Raw/1292 fmt/1405 (field 0 txt/1406))"}
           else
            if($js$3==1)
             {"unknown block:(sendself self-1/1404 latex_of_Code/1293 fmt/1405 (field 0 txt/1406))"}
            else
             if($js$3==2)
              {"unknown block:(sendself self-1/1404 latex_of_CodePre/1294 fmt/1405 (field 0 txt/1406))"}
             else
              if($js$3==3)
               {"unknown block:(sendself self-1/1404 latex_of_Verbatim/1295 fmt/1405 (field 0 txt/1406))"}
              else
               if($js$3==4)
                {"unknown block:(sendself self-1/1404 latex_of_Bold/1296 fmt/1405 (field 0 txt/1406))"}
               else
                if($js$3==5)
                 {"unknown block:(sendself self-1/1404 latex_of_Italic/1297 fmt/1405 (field 0 txt/1406))"}
                else
                 if($js$3==6)
                  {"unknown block:(sendself self-1/1404 latex_of_Emphasize/1298 fmt/1405 (field 0 txt/1406))"}
                 else
                  if($js$3==7)
                   {"unknown block:(sendself self-1/1404 latex_of_Center/1299 fmt/1405 (field 0 txt/1406))"}
                  else
                   if($js$3==8)
                    {"unknown block:(sendself self-1/1404 latex_of_Left/1300 fmt/1405 (field 0 txt/1406))"}
                   else
                    if($js$3==9)
                     {"unknown block:(sendself self-1/1404 latex_of_Right/1301 fmt/1405 (field 0 txt/1406))"}
                    else
                     if($js$3==10)
                      {"unknown block:(sendself self-1/1404 latex_of_List/1302 fmt/1405 (field 0 txt/1406))"}
                     else
                      if($js$3==11)
                       {"unknown block:(sendself self-1/1404 latex_of_Enum/1303 fmt/1405 (field 0 txt/1406))"}
                      else
                       if($js$3==12)
                        {"unknown block:(sendself self-1/1404 latex_of_Block/1305 fmt/1405 (field 0 txt/1406))"}
                       else
                        if($js$3==13)
                         {"unknown block:(sendself self-1/1404 latex_of_Title/1306 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406) (field 2 txt/1406))"}
                        else
                         if($js$3==14)
                          {"unknown block:(sendself self-1/1404 latex_of_Latex/1307 fmt/1405 (field 0 txt/1406))"}
                         else
                          if($js$3==15)
                           {"unknown block:(sendself self-1/1404 latex_of_Link/1308 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406))"}
                          else
                           if($js$3==16)
                            {"unknown block:(sendself self-1/1404 latex_of_Ref/1309 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406) (field 2 txt/1406))"}
                           else
                            if($js$3==17)
                             {"unknown block:(sendself self-1/1404 latex_of_Superscript/1310 fmt/1405 (field 0 txt/1406))"}
                            else
                             if($js$3==18)
                              {"unknown block:(sendself self-1/1404 latex_of_Subscript/1311 fmt/1405 (field 0 txt/1406))"}
                             else
                              if($js$3==19)
                               {var exit=105}
                              else
                               if($js$3==20)
                                {"unknown block:(sendself self-1/1404 latex_of_custom_text/1290 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406))"}
                               else
                                if($js$3==21)
                                 {"unknown block:(sendself self-1/1404 latex_of_Target/1291 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406))"}}
         switch(exit){case 105:return 0}},
       latex_of_custom_text,
       function(self-1,fmt,s,t){return 0},
       latex_of_Target,
       function(self-1,fmt,target,code)
        {var $js$2=String["lowercase"];
         var $js$3=$js$2(target);
         var $js$4="unknown primitive:caml_string_equal";
         if($js$4)
          {"unknown block:(sendself self-1/1441 latex_of_Latex/1307 fmt/1442 code/1444)"}
         else
          {return 0}},
       latex_of_Raw,
       function(self-1,fmt,s)
        {"unknown block:(sendself self-1/1446 escape/1270 s/1448)";
         return ps(fmt,$js$2)},
       latex_of_Code,
       function(self-1,fmt,s)
        {"unknown block:(sendself self-1/1450 escape_code/1272 s/1452)";
         var $js$2=Str["global_replace"];
         var $js$3=Str["regexp"];
         var $js$4=$js$3("\n");
         var s3=$js$2($js$4,"\\\n",s2);
         return p(fmt,[0,[11,"{\tt{",[2,0,[11,"}}",0]]],"{\tt{%s}}"],s3)},
       latex_of_CodePre,
       function(self-1,fmt,s)
        {ps(fmt,"\begin{ocamldoccode}\n");
         "unknown block:(sendself self-1/1456 escape_simple/1271 s/1458)";
         ps(fmt,$js$2);
         return ps(fmt,"\n\end{ocamldoccode}\n")},
       latex_of_Verbatim,
       function(self-1,fmt,s)
        {ps(fmt,"\n\begin{verbatim}\n");
         ps(fmt,s);
         return ps(fmt,"\n\end{verbatim}\n")},
       latex_of_Bold,
       function(self-1,fmt,t)
        {ps(fmt,"{\bf ");
         "unknown block:(sendself self-1/1464 latex_of_text/1288 fmt/1465 t/1466)";
         return ps(fmt,"}")},
       latex_of_Italic,
       function(self-1,fmt,t)
        {ps(fmt,"{\it ");
         "unknown block:(sendself self-1/1468 latex_of_text/1288 fmt/1469 t/1470)";
         return ps(fmt,"}")},
       latex_of_Emphasize,
       function(self-1,fmt,t)
        {ps(fmt,"{\em ");
         "unknown block:(sendself self-1/1472 latex_of_text/1288 fmt/1473 t/1474)";
         return ps(fmt,"}")},
       latex_of_Center,
       function(self-1,fmt,t)
        {ps(fmt,"\begin{center}\n");
         "unknown block:(sendself self-1/1476 latex_of_text/1288 fmt/1477 t/1478)";
         return ps(fmt,"\end{center}\n")},
       latex_of_Left,
       function(self-1,fmt,t)
        {ps(fmt,"\begin{flushleft}\n");
         "unknown block:(sendself self-1/1480 latex_of_text/1288 fmt/1481 t/1482)";
         return ps(fmt,"\end{flushleft}\n")},
       latex_of_Right,
       function(self-1,fmt,t)
        {ps(fmt,"\begin{flushright}\n");
         "unknown block:(sendself self-1/1484 latex_of_text/1288 fmt/1485 t/1486)";
         return ps(fmt,"\end{flushright}\n")},
       latex_of_List,
       function(self-1,fmt,tl)
        {ps(fmt,"\begin{itemize}\n");
         var $js$2=List["iter"];
         $js$2
          (function(t)
            {ps(fmt,"\item ");
             "unknown block:(sendself self-1/1488 latex_of_text/1288 fmt/1489 t/1491)";
             return ps(fmt,"\n")},
           tl);
         return ps(fmt,"\end{itemize}\n")},
       latex_of_Enum,
       function(self-1,fmt,tl)
        {ps(fmt,"\begin{enumerate}\n");
         var $js$2=List["iter"];
         $js$2
          (function(t)
            {ps(fmt,"\item ");
             "unknown block:(sendself self-1/1493 latex_of_text/1288 fmt/1494 t/1496)";
             return ps(fmt,"\n")},
           tl);
         return ps(fmt,"\end{enumerate}\n")},
       latex_of_Newline,
       function(self-1,fmt){return ps(fmt,"\n\n")},
       latex_of_Block,
       function(self-1,fmt,t)
        {ps(fmt,"\begin{ocamldocdescription}\n");
         "unknown block:(sendself self-1/1501 latex_of_text/1288 fmt/1502 t/1503)";
         return ps(fmt,"\n\end{ocamldocdescription}\n")},
       latex_of_Title,
       function(self-1,fmt,n,label_opt,t)
        {var match=new_fmt(0);
         "unknown block:(sendself self-1/1505 latex_of_text/1288 (field 0 match/2374) t/1509)";
         "unknown block:(sendself self-1/1505 section_style/1259 n/1507\n  (apply (field 1 match/2374) 0a))";
         ps(fmt,s_title2);
         var $js$2=label_opt;
         if($js$2)
          {"unknown block:(sendself self-1/1505 make_label/1286\n  (sendself self-1/1505 label/1273 [0: 0a] (field 0 label_opt/1508)))";
           return ps(fmt,$js$3)}
         else
          {return 0}},
       latex_of_Latex,
       function(self-1,fmt,s){return ps(fmt,s)},
       latex_of_Link,
       function(self-1,fmt,s,t)
        {"unknown block:(sendself self-1/1519 latex_of_text/1288 fmt/1520 t/1522)";
         ps(fmt,"[\url{");
         ps(fmt,s);
         return ps(fmt,"}]")},
       latex_of_Ref,
       function(self-1,fmt,name,ref_opt,text_opt)
        {var $js$2=ref_opt;
         if($js$2)
          {var kind=ref_opt[1];
           var $js$3="unknown primitive:isint";
           if($js$3)
            {var $js$4="unknown primitive:isint";
             if($js$4)
              {var $js$5=kind;
               var $js$6=$js$5[0];
               if($js$6==0)
                {"unknown block:(sendself self-1/1524 module_label/1279)"}
               else
                if($js$6==1)
                 {"unknown block:(sendself self-1/1524 module_type_label/1280)"}
                else
                 if($js$6==2)
                  {"unknown block:(sendself self-1/1524 class_label/1277)"}
                 else
                  if($js$6==3)
                   {"unknown block:(sendself self-1/1524 class_type_label/1278)"}
                  else
                   if($js$6==4)
                    {"unknown block:(sendself self-1/1524 value_label/1274)"}
                   else
                    if($js$6==5)
                     {"unknown block:(sendself self-1/1524 type_label/1283)"}
                    else
                     if($js$6==6)
                      {"unknown block:(sendself self-1/1524 extension_label/1281)"}
                     else
                      if($js$6==7)
                       {"unknown block:(sendself self-1/1524 exception_label/1282)"}
                      else
                       if($js$6==8)
                        {"unknown block:(sendself self-1/1524 attribute_label/1275)"}
                       else
                        if($js$6==9)
                         {"unknown block:(sendself self-1/1524 method_label/1276)"}
                        else
                         if($js$6==10)
                          {"unknown block:(sendself self-1/1524 recfield_label/1284)"}
                         else
                          if($js$6==11)
                           {"unknown block:(sendself self-1/1524 const_label/1285)"}}
             else
              {var f_label="unknown primitive:raise"}
             var $js$7=text_opt;
             if($js$7)
              {var text=text_opt[1]}
             else
              {var $js$8=Odoc_info["use_hidden_modules"];
               var $js$9=$js$8(name);
               var $js$10=[1,$js$9];
               var text=[0,$js$10,0]}
             'unknown block:(sendself self-1/1524 latex_of_text/1288 fmt/1525\n  (apply (field 21 (global Pervasives!)) text/1532\n    (makeblock 0\n      (makeblock 14\n        (apply (field 15 (global Pervasives!)) "["\n          (apply (field 15 (global Pervasives!))\n            (sendself self-1/1524 make_ref/1287\n              (apply f_label/1531 0a name/1526))\n            "]")))\n      0a)))'}
           else
            {'unknown block:(sendself self-1/1524 latex_of_text_element/1289 fmt/1525\n  (makeblock 14\n    (apply (field 15 (global Pervasives!)) "["\n      (apply (field 15 (global Pervasives!))\n        (sendself self-1/1524 make_ref/1287\n          (sendself self-1/1524 label/1273 [0: 0a]\n            (apply (field 0 (field 2 (global Odoc_info!))) name/1526)))\n        "]"))))'}}
         else
          {"unknown block:(sendself self-1/1524 latex_of_text/1288 fmt/1525\n  (if text_opt/1528 (field 0 text_opt/1528)\n    (makeblock 0\n      (makeblock 1 (apply (field 37 (global Odoc_info!)) name/1526)) 0a)))"}},
       latex_of_Superscript,
       function(self-1,fmt,t)
        {ps(fmt,"$^{");
         "unknown block:(sendself self-1/1535 latex_of_text/1288 fmt/1536 t/1537)";
         return ps(fmt,"}$")},
       latex_of_Subscript,
       function(self-1,fmt,t)
        {ps(fmt,"$_{");
         "unknown block:(sendself self-1/1539 latex_of_text/1288 fmt/1540 t/1541)";
         return ps(fmt,"}$")}]);
    return function(env,self)
     {var $js$2=CamlinternalOO["create_object_opt"];
      var self$1=$js$2(self,class);
      var $js$3=List["map"];
      var
       $js$4=
        $js$3
         (function(param)
           {var $js$5=Str["regexp"];
            var $js$6=$js$5(param[1]);
            return [0,$js$6,param[2]]},
          [0,
           [0,"\x01","\x01\x02"],
           [0,
            [0,"\\","\x01b"],
            [0,
             [0,"{","\\{"],
             [0,
              [0,"}","\\}"],
              [0,
               [0,"\$","\\$"],
               [0,
                [0,"\^","{\\textasciicircum}"],
                [0,
                 [0,"à","\\`a"],
                 [0,
                  [0,"â","\\^a"],
                  [0,
                   [0,"é","\\'e"],
                   [0,
                    [0,"è","\\`e"],
                    [0,
                     [0,"ê","\\^e"],
                     [0,
                      [0,"ë",'\\"e'],
                      [0,
                       [0,"ç","\\c{c}"],
                       [0,
                        [0,"ô","\\^o"],
                        [0,
                         [0,"ö",'\\"o'],
                         [0,
                          [0,"î","\\^i"],
                          [0,
                           [0,"ï",'\\"i'],
                           [0,
                            [0,"ù","\\`u"],
                            [0,
                             [0,"û","\\^u"],
                             [0,
                              [0,"%","\\%"],
                              [0,
                               [0,"_","\\_"],
                               [0,
                                [0,"~","\\~{}"],
                                [0,
                                 [0,"#","{\char35}"],
                                 [0,
                                  [0,"->","$\\rightarrow$"],
                                  [0,
                                   [0,"<-","$\\leftarrow$"],
                                   [0,
                                    [0,">=","$\\geq$"],
                                    [0,
                                     [0,"<=","$\\leq$"],
                                     [0,
                                      [0,">","$>$"],
                                      [0,
                                       [0,"<","$<$"],
                                       [0,
                                        [0,"=","$=$"],
                                        [0,
                                         [0,"|","{\\textbar}"],
                                         [0,
                                          [0,"\.\.\.","$\\ldots$"],
                                          [0,
                                           [0,"&","\\&"],
                                           [0,[0,"\x01b","{\\char92}"],[0,[0,"\x01\x02","\x01"],0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]);
      self$1[subst_strings]=$js$4,0;
      var $js$5=List["map"];
      var
       $js$6=
        $js$5
         (function(param)
           {var $js$7=Str["regexp"];
            var $js$8=$js$7(param[1]);
            return [0,$js$8,param[2]]},
          [0,
           [0,"\x01","\x01\x02"],
           [0,
            [0,"\\","\x01b"],
            [0,
             [0,"{","\x01l"],
             [0,
              [0,"}","{\\char125}"],
              [0,
               [0,"'","{\\textquotesingle}"],
               [0,
                [0,"`","{\\textasciigrave}"],
                [0,
                 [0,"\x01b","{\\char92}"],
                 [0,[0,"\x01l","{\\char123}"],[0,[0,"\x01\x02","\x01"],0]]]]]]]]]);
      self$1[subst_strings_simple]=$js$6,0;
      var $js$7=List["map"];
      var
       $js$8=
        $js$7
         (function(param)
           {var $js$9=Str["regexp"];
            var $js$10=$js$9(param[1]);
            return [0,$js$10,param[2]]},
          [0,
           [0,"\x01","\x01\x02"],
           [0,
            [0,"\\","\x01b"],
            [0,
             [0,"{","\x01l"],
             [0,
              [0,"}","{\\char125}"],
              [0,
               [0,"'","{\\textquotesingle}"],
               [0,
                [0,"`","{\\textasciigrave}"],
                [0,
                 [0,"%","\\%"],
                 [0,
                  [0,"_","\\_"],
                  [0,
                   [0,"~","{\\char126}"],
                   [0,
                    [0,"#","{\\char35}"],
                    [0,
                     [0,"&","\\&"],
                     [0,
                      [0,"\$","\\$"],
                      [0,
                       [0,"\^","{\\char94}"],
                       [0,
                        [0,"\x01b","{\\char92}"],
                        [0,[0,"\x01l","{\\char123}"],[0,[0,"\x01\x02","\x01"],0]]]]]]]]]]]]]]]]);
      self$1[subst_strings_code]=$js$8,0;
      return self$1}};
var $js=CamlinternalOO["make_class"];
var
 text=
  $js
   ([0,
     "latex_of_text_element",
     "escape_simple",
     "latex_of_Verbatim",
     "make_ref",
     "const_label",
     "latex_of_Center",
     "latex_of_Italic",
     "latex_of_Target",
     "module_label",
     "escape",
     "latex_of_Newline",
     "recfield_label",
     "latex_of_custom_text",
     "latex_of_Bold",
     "latex_of_Code",
     "latex_of_Enum",
     "latex_of_Emphasize",
     "latex_of_Left",
     "latex_of_Link",
     "latex_of_List",
     "section_style",
     "label",
     "extension_label",
     "latex_of_Right",
     "latex_of_Latex",
     "latex_of_Subscript",
     "escape_code",
     "latex_of_text",
     "subst",
     "latex_of_Raw",
     "latex_of_Ref",
     "class_type_label",
     "make_label",
     "exception_label",
     "latex_of_Title",
     "latex_of_CodePre",
     "method_label",
     "attribute_label",
     "module_type_label",
     "class_label",
     "latex_of_Superscript",
     "type_label",
     "value_label",
     "latex_of_Block"],
    text_init);
var
 info=
  [0,
   0,
   function(class)
    {var $js$1=CamlinternalOO["get_method_labels"];
     var ids=$js$1(class,shared);
     var text_of_info=ids[1];
     var latex_of_text=ids[2];
     var latex_of_info=ids[3];
     var $js$2=CamlinternalOO["set_method"];
     $js$2
      (class,
       latex_of_info,
       function(self-2,fmt,*opt*,info_opt)
        {var $js$3=*opt*;
         if($js$3){var block=*opt*[1]}else{var block=0}
         "unknown block:(sendself self-2/1553 latex_of_text/1549 fmt/1554\n  (sendself self-2/1553 text_of_info/1550 (makeblock 0 block/1556)\n    info_opt/1558))"});
     return function(env,self)
      {var $js$3=CamlinternalOO["create_object_opt"];return $js$3(self,class)}},
   0,
   0];
var
 latex_init=
  function(class)
   {var $js$1=CamlinternalOO["get_method_labels"];
    var ids=$js$1(class,shared$10);
    var value_label=ids[1];
    var type_label=ids[2];
    var text_of_info=ids[5];
    var text_of_class_type_param_expr_list=ids[7];
    var text_of_class_params=ids[8];
    var relative_module_idents=ids[10];
    var relative_idents=ids[11];
    var normal_type_list=ids[12];
    var normal_type=ids[13];
    var normal_class_type_param_list=ids[14];
    var module_type_label=ids[15];
    var module_label=ids[16];
    var method_label=ids[17];
    var make_ref=ids[18];
    var make_label=ids[19];
    var latex_of_value=ids[20];
    var latex_of_type_params=ids[21];
    var latex_of_type_extension=ids[22];
    var latex_of_type=ids[23];
    var latex_of_text=ids[24];
    var latex_of_module_type_kind=ids[25];
    var latex_of_module_type=ids[26];
    var latex_of_module_parameter=ids[27];
    var latex_of_module_kind=ids[28];
    var latex_of_module_element=ids[29];
    var latex_of_module=ids[30];
    var latex_of_method=ids[31];
    var latex_of_info=ids[32];
    var latex_of_included_module=ids[33];
    var latex_of_exception=ids[34];
    var latex_of_class_type_kind=ids[35];
    var latex_of_class_type=ids[36];
    var latex_of_class_parameter_list=ids[37];
    var latex_of_class_kind=ids[38];
    var latex_of_class_element=ids[39];
    var latex_of_class=ids[40];
    var latex_of_attribute=ids[41];
    var latex_header=ids[42];
    var latex_for_module_type_label=ids[43];
    var latex_for_module_type_index=ids[44];
    var latex_for_module_label=ids[45];
    var latex_for_module_index=ids[46];
    var latex_for_class_type_label=ids[47];
    var latex_for_class_type_index=ids[48];
    var latex_for_class_label=ids[49];
    var latex_for_class_index=ids[50];
    var label=ids[51];
    var generate_style_file=ids[52];
    var generate_inheritance_info=ids[53];
    var generate_for_top_module=ids[54];
    var generate_class_type_inheritance_info=ids[55];
    var generate_class_inheritance_info=ids[56];
    var generate=ids[57];
    var first_and_rest_of_info=ids[58];
    var extension_label=ids[59];
    var exception_label=ids[60];
    var escape=ids[61];
    var class_type_label=ids[62];
    var class_label=ids[63];
    var attribute_label=ids[64];
    var $js$2=CamlinternalOO["inherits"];
    var inh=$js$2(class,shared$5,0,shared$8,text,1);
    var obj_init=inh[1];
    var $js$3=CamlinternalOO["inherits"];
    var
     inh$1=
      $js$3(class,shared$4,shared$6,shared$2,Odoc_to_text["to_text"],1);
    var obj_init$1=inh$1[1];
    var text_of_attribute=inh$1[11];
    var text_of_exception=inh$1[19];
    var text_of_method=inh$1[21];
    var text_of_value=inh$1[36];
    var $js$4=CamlinternalOO["inherits"];
    var inh$2=$js$4(class,0,shared$9,shared$3,info,1);
    var obj_init$2=inh$2[1];
    var $js$5=CamlinternalOO["set_methods"];
    $js$5
     (class,
      [0,
       first_and_rest_of_info,
       function(self-3,i_opt)
        {var $js$6=i_opt;
         if($js$6)
          {var match=i_opt[1][1];
           var $js$7=match;
           if($js$7)
            {var $js$8=Odoc_info["first_sentence_and_rest_of_text"];
             var match$1=$js$8(match[1]);
             var $js$9=Odoc_info["first_sentence_and_rest_of_text"];
             "unknown block:(sendself self-3/1688 text_of_info/1692 [0: 0a] i_opt/1689)";
             var match$2=$js$9($js$10);
             var $js$11=Odoc_info["text_no_title_no_list"];
             var $js$12=$js$11(match$1[1]);
             return [0,$js$12,match$2[2]]}
           else
            {"unknown block:(sendself self-3/1688 text_of_info/1692 [0: 1a] i_opt/1689)";
             return [0,0,$js$13]}}
         else
          {return [0,0,0]}},
       latex_of_value,
       function(self-3,fmt,v)
        {var $js$6=Odoc_info["reset_type_names"];
         $js$6(0);
         "unknown block:(sendself self-3/1696 value_label/1700 0a (field 0 v/1698))";
         "unknown block:(sendself self-3/1696 make_label/1702 label/1699)";
         "unknown block:(sendself self-3/1696 latex_of_text/1703 fmt/1697\n  (makeblock 0 (makeblock 14 latex/1701)\n    (apply text_of_value/1647 self-3/1696 v/1698)))"},
       latex_of_attribute,
       function(self-3,fmt,a)
        {"unknown block:(sendself self-3/1706 latex_of_text/1703 fmt/1707\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1706 make_label/1702\n        (sendself self-3/1706 attribute_label/1709 0a\n          (field 0 (field 0 a/1708)))))\n    (apply text_of_attribute/1622 self-3/1706 a/1708)))"},
       latex_of_method,
       function(self-3,fmt,m)
        {"unknown block:(sendself self-3/1712 latex_of_text/1703 fmt/1713\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1712 make_label/1702\n        (sendself self-3/1712 method_label/1715 0a\n          (field 0 (field 0 m/1714)))))\n    (apply text_of_method/1632 self-3/1712 m/1714)))"},
       latex_of_type_params,
       function(self-3,fmt,m_name,t)
        {var
          print_one=
           function(param)
            {var $js$6=Odoc_info["string_of_variance"];
             var $js$7=$js$6(t,[0,param[2],param[3]]);
             ps(fmt,$js$7);
             "unknown block:(sendself self-3/1718 normal_type/1726 m_name/1720 (field 0 param/2301))";
             return ps(fmt,$js$8)};
         var l=t[3];
         var $js$6=l;
         if($js$6)
          {var $js$7=l[2];
           if($js$7)
            {ps(fmt,"(");
             print_concat(fmt,", ",print_one,t[3]);
             return ps(fmt,")")}
           else
            {var match=l[1];return print_one([0,match[1],match[2],match[3]])}}
         else
          {return 0}},
       latex_of_class_parameter_list,
       function(self-3,fmt,father,c)
        {"unknown block:(sendself self-3/1732 latex_of_text/1703 fmt/1733\n  (sendself self-3/1732 text_of_class_params/1736 father/1734 c/1735))"},
       latex_of_type,
       function(self-3,fmt,t)
        {var $js$6=Odoc_info["Name"][1];
         var s_name=$js$6(t[1]);
         var match=new_fmt(0);
         var flush2=match[2];
         var fmt2=match[1];
         var $js$7=Odoc_info["reset_type_names"];
         $js$7(0);
         var $js$8=Odoc_info["Name"][5];
         var mod_name=$js$8(t[1]);
         var $js$9=Format["fprintf"];
         $js$9
          (fmt2,
           [0,
            [18,[1,[0,[11,"<h 2>",0],"<h 2>"]],[11,"type ",0]],
            "@[<h 2>type "]);
         "unknown block:(sendself self-3/1738 latex_of_type_params/1655 fmt2/1743 mod_name/1745\n  t/1740)";
         var match$1=t[3];
         var $js$10=match$1;
         if($js$10){ps(fmt2," ")}else{}
         ps(fmt2,s_name);
         var priv=t[5]=0;
         var match$2=t[6];
         var $js$11=match$2;
         if($js$11)
          {var match$3=match$2[1];
           var $js$12=match$3;
           if($js$12==0)
            {var $js$13=priv;
             if($js$13){var $js$14="private "}else{var $js$14=""}
             "unknown block:(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 0 match/2292))";
             p(fmt2,[0,[11," = ",[2,0,[2,0,0]]]," = %s%s"],$js$14,$js$15)}
           else
            if($js$12==1){var exit=84}}
         else
          {var exit=84}
         switch(exit){case 84:}
         var match$4=t[4];
         var $js$16=match$4;
         if(typeof $js$16=="number")
          {if($js$16==0)
            {var match$5=t[6];
             var $js$17=match$5;
             if($js$17)
              {var $js$18=match$5[1];
               if($js$18==0)
                {var exit$1=82}
               else
                if($js$18==1)
                 {var $js$19=Pervasives["^"];
                  var $js$20=Pervasives["^"];
                  var $js$21=priv;
                  if($js$21){var $js$22="private"}else{var $js$22=""}
                  var $js$23=$js$20($js$22," <");
                  var $js$24=$js$19("= ",$js$23)}}
             else
              {var exit$1=82}
             switch(exit$1){case 82:var $js$24=""}}
           else
            if($js$16==1){var $js$24="= .."}}
         else
          {var $js$25=$js$16[0];
           if($js$25==0)
            {var $js$26=Pervasives["^"];
             var $js$27=priv;
             if($js$27){var $js$28=" private"}else{var $js$28=""}
             var $js$24=$js$26("=",$js$28)}
           else
            if($js$25==1)
             {var $js$29=Pervasives["^"];
              var $js$30=Pervasives["^"];
              var $js$31=priv;
              if($js$31){var $js$32="private "}else{var $js$32=""}
              var $js$33=$js$30($js$32,"{");
              var $js$24=$js$29("= ",$js$33)}}
         p(fmt2,[0,[12,32,[2,0,0]]," %s"],$js$24);
         var s_type3=flush2(0);
         var
          entry_comment=
           function(param)
            {var $js$34=param;
             if($js$34)
              {ps(fmt2,"\begin{ocamldoccomment}\n");
               "unknown block:(sendself self-3/1738 latex_of_info/1753 fmt2/1743 0a\n  (makeblock 0 (field 0 param/2281)))";
               ps(fmt2,"\n\end{ocamldoccomment}\n");
               var s=flush2(0);
               return [0,[14,s],0]}
             else
              {return 0}};
         var match$6=t[4];
         var $js$34=match$6;
         if(typeof $js$34=="number")
          {if($js$34==0)
            {var match$7=t[6];
             var $js$35=match$7;
             if($js$35)
              {var match$8=match$7[1];
               var $js$36=match$8;
               if($js$36==0)
                {var exit$2=73}
               else
                if($js$36==1)
                 {var $js$37=List["map"];
                  var
                   fields=
                    $js$37
                     (function(r)
                       {"unknown block:(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 1 r/1758))";
                        p
                         (fmt2,
                          [0,
                           [18,
                            [1,[0,[11,"<h 6>",0],"<h 6>"]],
                            [11,
                             "  ",
                             [2,0,[11," :",[17,[0,"@ ",1,0],[2,0,[11," ;",0]]]]]]],
                           "@[<h 6>  %s :@ %s ;"],
                          r[1],
                          $js$38);
                        var s_field=flush2(0);
                        var $js$39=Pervasives["@"];
                        var $js$40=entry_comment(r[3]);
                        return $js$39([0,[2,s_field],0],$js$40)},
                      match$8[1]);
                  var $js$38=Pervasives["@"];
                  var $js$39=List["flatten"];
                  var $js$40=$js$39(fields);
                  var defs=$js$38($js$40,[0,[2,">"],0])}}
             else
              {var exit$2=73}
             switch(exit$2){case 73:var defs=0}}
           else
            if($js$34==1){var defs=0}}
         else
          {var $js$41=$js$34[0];
           if($js$41==0)
            {var $js$42=List["map"];
             var
              constructors=
               $js$42
                (function(constr)
                  {p
                    (fmt2,
                     [0,
                      [18,[1,[0,[11,"<h 6>",0],"<h 6>"]],[11,"  | ",[2,0,0]]],
                      "@[<h 6>  | %s"],
                     constr[1]);
                   var match$9=constr[2];
                   var match$10=constr[3];
                   var $js$43=match$9;
                   if($js$43)
                    {var $js$44=match$10;
                     if($js$44)
                      {'unknown block:(sendself self-3/1738 normal_type_list/1767 [0: 0a] mod_name/1745 " * "\n  match/2276)';
                       "unknown block:(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 0 match/2277))";
                       p
                        (fmt2,
                         [0,
                          [11,
                           " :",
                           [17,
                            [0,"@ ",1,0],
                            [2,0,[17,[0,"@ ",1,0],[2,0,[17,[0,"@ ",1,0],[2,0,0]]]]]]],
                          " :@ %s@ %s@ %s"],
                         $js$45,
                         "->",
                         $js$46)}
                     else
                      {'unknown block:(sendself self-3/1738 normal_type_list/1767 [0: 0a] mod_name/1745 " * "\n  match/2276)';
                       p
                        (fmt2,
                         [0,[11," of",[17,[0,"@ ",1,0],[2,0,0]]]," of@ %s"],
                         $js$47)}}
                   else
                    {var $js$48=match$10;
                     if($js$48)
                      {"unknown block:(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 0 match/2277))";
                       p
                        (fmt2,
                         [0,[11," :",[17,[0,"@ ",1,0],[2,0,0]]]," :@ %s"],
                         $js$49)}
                     else
                      {}}
                   var s_cons=flush2(0);
                   var $js$50=Pervasives["@"];
                   var $js$51=entry_comment(constr[4]);
                   return $js$50([0,[2,s_cons],0],$js$51)},
                 match$6[1]);
             var $js$43=List["flatten"];
             var defs=$js$43(constructors)}
           else
            if($js$41==1)
             {var $js$44=List["map"];
              var
               fields$1=
                $js$44
                 (function(r)
                   {var $js$45=r[2];
                    if($js$45){var $js$46="mutable "}else{var $js$46=""}
                    "unknown block:(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 2 r/1769))";
                    p
                     (fmt2,
                      [0,
                       [18,
                        [1,[0,[11,"<h 6>",0],"<h 6>"]],
                        [11,
                         "  ",
                         [2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[2,0,[11," ;",0]]]]]]]],
                       "@[<h 6>  %s%s :@ %s ;"],
                      $js$46,
                      r[1],
                      $js$47);
                    var s_field=flush2(0);
                    var $js$48=Pervasives["@"];
                    var $js$49=entry_comment(r[4]);
                    return $js$48([0,[2,s_field],0],$js$49)},
                  match$6[1]);
              var $js$45=Pervasives["@"];
              var $js$46=List["flatten"];
              var $js$47=$js$46(fields$1);
              var defs=$js$45($js$47,[0,[2,"}"],0])}}
         var defs2=[0,[2,s_type3],defs];
         var
          iter=
           function(param)
            {var $js$48=param;
             if($js$48)
              {var e=param[1];
               var $js$49=param[2];
               if($js$49)
                {var $js$50=e;
                 if(typeof $js$50=="number")
                  {"unknown block:e/1773"}
                 else
                  {var $js$51=$js$50[0];
                   if($js$51==2)
                    {var match$9=param[2];
                     var match$10=match$9[1];
                     var $js$52=match$10;
                     if(typeof $js$52=="number")
                      {"unknown block:match/2269"}
                     else
                      {var $js$53=$js$52[0];
                       if($js$53==2)
                        {var $js$54=Pervasives["^"];
                         var $js$55=Pervasives["^"];
                         var $js$56=$js$55("\n",match$10[1]);
                         var $js$57=$js$54(e[1],$js$56);
                         var $js$58=[2,$js$57];
                         var $js$59=[0,$js$58,match$9[2]];
                         return iter($js$59)}
                       else
                        {var exit$3=68}}}
                   else
                    {var exit$3=68}}}
               else
                {return [0,e,0]}
               switch(exit$3)
                {case 68:var $js$60=iter(param[2]);return [0,e,$js$60]}}
             else
              {return 0}};
         var $js$48=Pervasives["@"];
         var $js$49=iter(defs2);
         var $js$50=Pervasives["@"];
         var $js$51=Pervasives["^"];
         var $js$52=Pervasives["^"];
         "unknown block:(sendself self-3/1738 label/1779 0a s_name/1741)";
         var $js$53=Pervasives["^"];
         var $js$54=Pervasives["^"];
         "unknown block:(sendself self-3/1738 label/1779 [0: 0a] s_name/1741)";
         var $js$55=$js$54($js$56,"`}\n");
         var $js$57=$js$53("@\verb`",$js$55);
         var $js$58=$js$52($js$59,$js$57);
         var $js$60=$js$51("\index{",$js$58);
         var $js$61=[14,$js$60];
         var $js$62=[0,$js$61,0];
         "unknown block:(sendself self-3/1738 text_of_info/1692 0a (field 1 t/1740))";
         var $js$63=$js$50($js$62,$js$64);
         var text$1=$js$48($js$49,$js$63);
         "unknown block:(sendself self-3/1738 latex_of_text/1703 fmt/1739\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1738 make_label/1702\n        (sendself self-3/1738 type_label/1780 0a (field 0 t/1740))))\n    text/1742))"},
       latex_of_type_extension,
       function(self-3,mod_name,fmt,te)
        {var match=new_fmt(0);
         var flush2=match[2];
         var fmt2=match[1];
         var $js$6=Odoc_info["reset_type_names"];
         $js$6(0);
         var $js$7=Format["fprintf"];
         $js$7
          (fmt2,
           [0,
            [18,[1,[0,[11,"<h 2>",0],"<h 2>"]],[11,"type ",0]],
            "@[<h 2>type "]);
         var l=te[3];
         var $js$8=l;
         if($js$8)
          {var $js$9=l[2];
           if($js$9)
            {ps(fmt2,"(");
             print_concat
              (fmt2,
               ", ",
               function(p$1)
                {"unknown block:(sendself self-3/1782 normal_type/1726 mod_name/1783 p/1791)";
                 return ps(fmt2,$js$10)},
               l);
             ps(fmt2,") ")}
           else
            {"unknown block:(sendself self-3/1782 normal_type/1726 mod_name/1783 (field 0 l/1790))";
             ps(fmt2,$js$10);
             ps(fmt2," ")}}
         else
          {}
         "unknown block:(sendself self-3/1782 relative_idents/1792 mod_name/1783 (field 1 te/1785))";
         ps(fmt2,$js$11);
         var $js$12=te[4]=0;
         if($js$12){var $js$13=" private"}else{var $js$13=""}
         p(fmt2,[0,[11," +=",[2,0,0]]," +=%s"],$js$13);
         var s_type3=flush2(0);
         var $js$14=List["flatten"];
         var $js$15=List["map"];
         var
          $js$16=
           $js$15
            (function(x)
              {var $js$17=Odoc_info["Name"][5];
               var father=$js$17(x[1]);
               var $js$18=Odoc_info["Name"][1];
               var $js$19=$js$18(x[1]);
               p
                (fmt2,
                 [0,
                  [18,[1,[0,[11,"<h 6>",0],"<h 6>"]],[11,"  | ",[2,0,0]]],
                  "@[<h 6>  | %s"],
                 $js$19);
               var match$1=x[2];
               var match$2=x[3];
               var $js$20=match$1;
               if($js$20)
                {var $js$21=match$2;
                 if($js$21)
                  {'unknown block:(sendself self-3/1782 normal_type_list/1767 [0: 0a] father/1796 " * "\n  match/2258)';
                   "unknown block:(sendself self-3/1782 normal_type/1726 father/1796 (field 0 match/2259))";
                   p
                    (fmt2,
                     [0,
                      [12,
                       32,
                       [2,
                        0,
                        [17,
                         [0,"@ ",1,0],
                         [2,0,[17,[0,"@ ",1,0],[2,0,[17,[0,"@ ",1,0],[2,0,0]]]]]]]],
                      " %s@ %s@ %s@ %s"],
                     ":",
                     $js$22,
                     "->",
                     $js$23)}
                 else
                  {'unknown block:(sendself self-3/1782 normal_type_list/1767 [0: 0a] father/1796 " * "\n  match/2258)';
                   p
                    (fmt2,
                     [0,[12,32,[2,0,[17,[0,"@ ",1,0],[2,0,0]]]]," %s@ %s"],
                     "of",
                     $js$24)}}
               else
                {var $js$25=match$2;
                 if($js$25)
                  {"unknown block:(sendself self-3/1782 normal_type/1726 father/1796 (field 0 match/2259))";
                   p
                    (fmt2,
                     [0,[12,32,[2,0,[17,[0,"@ ",1,0],[2,0,0]]]]," %s@ %s"],
                     ":",
                     $js$26)}
                 else
                  {}}
               var match$3=x[5];
               var $js$27=match$3;
               if($js$27)
                {var xa=match$3[1];
                 var match$4=xa[2];
                 var $js$28=match$4;
                 if($js$28){var $js$29=match$4[1][1]}else{var $js$29=xa[1]}
                 p(fmt2,[0,[11," = ",[2,0,0]]," = %s"],$js$29)}
               else
                {}
               var s_cons=flush2(0);
               var $js$30=Pervasives["@"];
               "unknown block:(sendself self-3/1782 make_label/1702\n  (sendself self-3/1782 extension_label/1804 0a (field 0 x/1795)))";
               var $js$31=[14,$js$32];
               var $js$33=[0,$js$31,[0,[2,s_cons],0]];
               var match$5=x[7];
               var $js$34=match$5;
               if($js$34)
                {ps(fmt2,"\begin{ocamldoccomment}\n");
                 "unknown block:(sendself self-3/1782 latex_of_info/1753 fmt2/1787 0a\n  (makeblock 0 (field 0 match/2252)))";
                 ps(fmt2,"\n\end{ocamldoccomment}\n");
                 var s=flush2(0);
                 var $js$35=[0,[14,s],0]}
               else
                {var $js$35=0}
               return $js$30($js$33,$js$35)},
             te[5]);
         var defs=$js$14($js$16);
         var defs2=[0,[2,s_type3],defs];
         var
          iter=
           function(param)
            {var $js$17=param;
             if($js$17)
              {var e=param[1];
               var $js$18=param[2];
               if($js$18)
                {var $js$19=e;
                 if(typeof $js$19=="number")
                  {"unknown block:e/1809"}
                 else
                  {var $js$20=$js$19[0];
                   if($js$20==2)
                    {var match$1=param[2];
                     var match$2=match$1[1];
                     var $js$21=match$2;
                     if(typeof $js$21=="number")
                      {"unknown block:match/2250"}
                     else
                      {var $js$22=$js$21[0];
                       if($js$22==2)
                        {var $js$23=Pervasives["^"];
                         var $js$24=Pervasives["^"];
                         var $js$25=$js$24("\n",match$2[1]);
                         var $js$26=$js$23(e[1],$js$25);
                         var $js$27=[2,$js$26];
                         var $js$28=[0,$js$27,match$1[2]];
                         return iter($js$28)}
                       else
                        {var exit=56}}}
                   else
                    {var exit=56}}}
               else
                {return [0,e,0]}
               switch(exit)
                {case 56:var $js$29=iter(param[2]);return [0,e,$js$29]}}
             else
              {return 0}};
         var $js$17=Pervasives["@"];
         var $js$18=iter(defs2);
         "unknown block:(sendself self-3/1782 text_of_info/1692 0a (field 0 te/1785))";
         var text$1=$js$17($js$18,$js$19);
         "unknown block:(sendself self-3/1782 latex_of_text/1703 fmt/1784 text/1786)"},
       latex_of_exception,
       function(self-3,fmt,e)
        {var $js$6=Odoc_info["reset_type_names"];
         $js$6(0);
         "unknown block:(sendself self-3/1816 latex_of_text/1703 fmt/1817\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1816 make_label/1702\n        (sendself self-3/1816 exception_label/1819 0a (field 0 e/1818))))\n    (apply text_of_exception/1630 self-3/1816 e/1818)))"},
       latex_of_module_parameter,
       function(self-3,fmt,m_name,p$1)
        {'unknown block:(sendself self-3/1822 latex_of_text/1703 fmt/1823\n  (makeblock 0 [1: "functor ("]\n    (makeblock 0 (makeblock 1 (field 0 p/1825)) [0: [1: " : "] 0a])))';
         "unknown block:(sendself self-3/1822 latex_of_module_type_kind/1661 fmt/1823 m_name/1824\n  (field 3 p/1825))";
         'unknown block:(sendself self-3/1822 latex_of_text/1703 fmt/1823 [0: [1: ") -> "] 0a])'},
       latex_of_module_type_kind,
       function(self-3,fmt,father,kind)
        {var $js$6=kind;
         if($js$6==0)
          {'unknown block:(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  [0: [14: "\\begin{ocamldocsigend}\n"] 0a])';
           var $js$7=List["iter"];
           "unknown block:(sendself self-3/1827 latex_of_module_element/1679 fmt/1828 father/1829)";
           $js$7($js$8,kind[1]);
           'unknown block:(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  [0: [14: "\\end{ocamldocsigend}\n"] 0a])'}
         else
          if($js$6==1)
           {"unknown block:(sendself self-3/1827 latex_of_module_parameter/1660 fmt/1828 father/1829\n  (field 0 kind/1830))";
            "unknown block:(sendself self-3/1827 latex_of_module_type_kind/1661 fmt/1828 father/1829\n  (field 1 kind/1830))"}
          else
           if($js$6==2)
            {"unknown block:(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1827 relative_module_idents/1838 father/1829\n        (field 0 (field 0 kind/1830))))\n    0a))"}
           else
            if($js$6==3)
             {"unknown block:(sendself self-3/1827 latex_of_module_type_kind/1661 fmt/1828 father/1829\n  (field 0 kind/1830))";
              'unknown block:(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  (makeblock 0 [1: " "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1827 relative_idents/1792 father/1829\n          (field 1 kind/1830)))\n      0a)))'}
            else
             if($js$6==4)
              {'unknown block:(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  (makeblock 0 [1: "module type of "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1827 relative_idents/1792 father/1829\n          (field 0 kind/1830)))\n      0a)))'}},
       latex_of_module_kind,
       function(self-3,fmt,father,kind)
        {var $js$6=kind;
         if($js$6==0)
          {'unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  [0: [14: "\\begin{ocamldocsigend}\n"] 0a])';
           var $js$7=List["iter"];
           "unknown block:(sendself self-3/1840 latex_of_module_element/1679 fmt/1841 father/1842)";
           $js$7($js$8,kind[1]);
           'unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  [0: [14: "\\end{ocamldocsigend}\n"] 0a])'}
         else
          if($js$6==1)
           {"unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1840 relative_module_idents/1838 father/1842\n        (field 0 (field 0 kind/1843))))\n    0a))"}
          else
           if($js$6==2)
            {"unknown block:(sendself self-3/1840 latex_of_module_parameter/1660 fmt/1841 father/1842\n  (field 0 kind/1843))";
             "unknown block:(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 1 kind/1843))"}
           else
            if($js$6==3)
             {"unknown block:(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 0 kind/1843))";
              'unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841 [0: [1: "("] 0a])';
              "unknown block:(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 1 kind/1843))";
              'unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841 [0: [1: ")"] 0a])'}
            else
             if($js$6==4)
              {"unknown block:(sendself self-3/1840 latex_of_module_type_kind/1661 fmt/1841 father/1842\n  (field 0 kind/1843))";
               'unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0 [1: " "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1840 relative_idents/1792 father/1842\n          (field 1 kind/1843)))\n      0a)))'}
             else
              if($js$6==5)
               {"unknown block:(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 0 kind/1843))"}
              else
               if($js$6==6)
                {'unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0 [1: "module type of "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1840 relative_idents/1792 father/1842\n          (field 0 kind/1843)))\n      0a)))'}
               else
                if($js$6==7)
                 {"unknown block:(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1840 relative_idents/1792 father/1842\n        (field 0 kind/1843)))\n    0a))"}},
       latex_of_class_kind,
       function(self-3,fmt,father,kind)
        {var $js$6=kind;
         if($js$6==0)
          {'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  [0: [14: "\\begin{ocamldocobjectend}\n"] 0a])';
           "unknown block:(sendself self-3/1857 generate_inheritance_info/1680 fmt/1858\n  (field 0 kind/1860))";
           var $js$7=List["iter"];
           "unknown block:(sendself self-3/1857 latex_of_class_element/1678 fmt/1858 father/1859)";
           $js$7($js$8,kind[2]);
           'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  [0: [14: "\\end{ocamldocobjectend}\n"] 0a])'}
         else
          if($js$6==1)
           {'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  [0: [0: "class application not handled yet"] 0a])'}
          else
           if($js$6==2)
            {var cco=kind[1];
             var l=cco[3];
             var $js$9=l;
             if($js$9)
              {'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 [1: "["]\n      (sendself self-3/1857 text_of_class_type_param_expr_list/1868\n        father/1859 l/1867))\n    [0: [1: "] "] 0a]))'}
             else
              {}
             "unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1857 relative_idents/1792 father/1859\n        (field 0 cco/1864)))\n    0a))"}
           else
            if($js$6==3)
             {'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858 [0: [1: "( "] 0a])';
              "unknown block:(sendself self-3/1857 latex_of_class_kind/1663 fmt/1858 father/1859\n  (field 0 kind/1860))";
              'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858 [0: [1: " : "] 0a])';
              "unknown block:(sendself self-3/1857 latex_of_class_type_kind/1664 fmt/1858 father/1859\n  (field 1 kind/1860))";
              'unknown block:(sendself self-3/1857 latex_of_text/1703 fmt/1858 [0: [1: " )"] 0a])'}},
       latex_of_class_type_kind,
       function(self-3,fmt,father,kind)
        {var $js$6=kind;
         if($js$6==0)
          {'unknown block:(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  [0: [14: "\\begin{ocamldocobjectend}\n"] 0a])';
           "unknown block:(sendself self-3/1870 generate_inheritance_info/1680 fmt/1871\n  (field 0 kind/1873))";
           var $js$7=List["iter"];
           "unknown block:(sendself self-3/1870 latex_of_class_element/1678 fmt/1871 father/1872)";
           $js$7($js$8,kind[2]);
           'unknown block:(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  [0: [14: "\\end{ocamldocobjectend}\n"] 0a])'}
         else
          if($js$6==1)
           {var cta=kind[1];
            var l=cta[3];
            var $js$9=l;
            if($js$9)
             {'unknown block:(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 [1: "["]\n      (sendself self-3/1870 text_of_class_type_param_expr_list/1868\n        father/1872 l/1877))\n    [0: [1: "] "] 0a]))'}
            else
             {}
            "unknown block:(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1870 relative_idents/1792 father/1872\n        (field 0 cta/1874)))\n    0a))"}},
       latex_for_module_index,
       function(self-3,fmt,m)
        {var $js$6=Odoc_info["Name"][1];
         var s_name=$js$6(m[1]);
         'unknown block:(sendself self-3/1879 latex_of_text/1703 fmt/1880\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1879 label/1779 0a s_name/1882)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1879 label/1779 [0: 0a] s_name/1882) "`}\n")))))\n    0a))'},
       latex_for_module_type_index,
       function(self-3,fmt,mt)
        {var $js$6=Odoc_info["Name"][1];
         var s_name=$js$6(mt[1]);
         'unknown block:(sendself self-3/1884 latex_of_text/1703 fmt/1885\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1884 label/1779 0a s_name/1887)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1884 label/1779 [0: 0a]\n                (apply (field 0 (field 2 (global Odoc_info!))) s_name/1887))\n              "`}\n")))))\n    0a))'},
       latex_for_module_label,
       function(self-3,fmt,m)
        {"unknown block:(sendself self-3/1889 make_label/1702\n  (sendself self-3/1889 module_label/1892 0a (field 0 m/1891)))";
         return ps(fmt,$js$6)},
       latex_for_module_type_label,
       function(self-3,fmt,mt)
        {"unknown block:(sendself self-3/1894 make_label/1702\n  (sendself self-3/1894 module_type_label/1897 0a (field 0 mt/1896)))";
         return ps(fmt,$js$6)},
       latex_for_class_index,
       function(self-3,fmt,c)
        {var $js$6=Odoc_info["Name"][1];
         var s_name=$js$6(c[1]);
         'unknown block:(sendself self-3/1899 latex_of_text/1703 fmt/1900\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1899 label/1779 0a s_name/1902)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1899 label/1779 [0: 0a] s_name/1902) "`}\n")))))\n    0a))'},
       latex_for_class_type_index,
       function(self-3,fmt,ct)
        {var $js$6=Odoc_info["Name"][1];
         var s_name=$js$6(ct[1]);
         'unknown block:(sendself self-3/1904 latex_of_text/1703 fmt/1905\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1904 label/1779 0a s_name/1907)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1904 label/1779 [0: 0a] s_name/1907) "`}\n")))))\n    0a))'},
       latex_for_class_label,
       function(self-3,fmt,c)
        {"unknown block:(sendself self-3/1909 make_label/1702\n  (sendself self-3/1909 class_label/1912 0a (field 0 c/1911)))";
         return ps(fmt,$js$6)},
       latex_for_class_type_label,
       function(self-3,fmt,ct)
        {"unknown block:(sendself self-3/1914 make_label/1702\n  (sendself self-3/1914 class_type_label/1917 0a (field 0 ct/1916)))";
         return ps(fmt,$js$6)},
       latex_of_module,
       function(self-3,fmt,m)
        {var $js$6=Odoc_info["Name"][5];
         var father=$js$6(m[1]);
         var $js$7=Odoc_info["Name"][1];
         var $js$8=$js$7(m[1]);
         var $js$9=[1,$js$8];
         var $js$10=[0,$js$9,[0,[1," : "],0]];
         var $js$11=[0,[1,"module "],$js$10];
         var t=[0,[14,"\begin{ocamldoccode}\n"],$js$11];
         "unknown block:(sendself self-3/1919 latex_of_text/1703 fmt/1920 t/1923)";
         'unknown block:(sendself self-3/1919 latex_of_text/1703 fmt/1920\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
         "unknown block:(sendself self-3/1919 latex_for_module_label/1667 fmt/1920 m/1921)";
         "unknown block:(sendself self-3/1919 latex_for_module_index/1665 fmt/1920 m/1921)";
         p(fmt,[0,[18,[1,[0,[11,"<h 4>",0],"<h 4>"]],0],"@[<h 4>"]);
         "unknown block:(sendself self-3/1919 latex_of_module_kind/1662 fmt/1920 father/1922\n  (field 5 m/1921))";
         var $js$12=Odoc_info["Module"][14];
         var match=$js$12(m);
         var $js$13=match!=0;
         if($js$13)
          {"unknown block:(sendself self-3/1919 latex_of_text/1703 fmt/1920 [0: 0a 0a])";
           var $js$14=List["filter"];
           var $js$15=Odoc_info["Module"][15];
           var $js$16=$js$15([0,0],m);
           var l=$js$14(function(param){return param[2]!=0},$js$16);
           var $js$17=l;
           if($js$17)
            {var $js$18=List["map"];
             var
              $js$19=
               $js$18
                (function(param)
                  {var text_opt=param[2];
                   var $js$20=text_opt;
                   if($js$20){var t$1=text_opt[1]}else{var t$1=0}
                   return [0,[0,param[1][1]],[0,[0,": "],t$1]]},
                 l);
             var $js$20=[10,$js$19];
             var $js$21=[0,$js$20,0];
             var t$1=[0,[4,[0,[0,"Parameters: "],0]],$js$21];
             "unknown block:(sendself self-3/1919 latex_of_text/1703 fmt/1920 t/1926)"}
           else
            {}}
         else
          {}
         "unknown block:(sendself self-3/1919 latex_of_text/1703 fmt/1920 [0: 0a 0a])";
         "unknown block:(sendself self-3/1919 latex_of_info/1753 fmt/1920 [0: 1a] (field 2 m/1921))";
         return p(fmt,[0,[17,0,0],"@]"])},
       latex_of_module_type,
       function(self-3,fmt,mt)
        {var $js$6=Odoc_info["Name"][5];
         var father=$js$6(mt[1]);
         var $js$7=Odoc_info["Name"][1];
         var $js$8=$js$7(mt[1]);
         var $js$9=[1,$js$8];
         var $js$10=[0,$js$9,0];
         var $js$11=[0,[1,"module type "],$js$10];
         var t=[0,[14,"\begin{ocamldoccode}\n"],$js$11];
         "unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933 t/1936)";
         var match=mt[3];
         var match$1=mt[6];
         var $js$12=match;
         if($js$12)
          {var $js$13=match$1;
           if($js$13)
            {'unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933 [0: [1: " = "] 0a])';
             'unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
             "unknown block:(sendself self-3/1932 latex_for_module_type_label/1668 fmt/1933 mt/1934)";
             "unknown block:(sendself self-3/1932 latex_for_module_type_index/1666 fmt/1933 mt/1934)";
             p(fmt,[0,[18,[1,[0,[11,"<h 4>",0],"<h 4>"]],0],"@[<h 4>"]);
             "unknown block:(sendself self-3/1932 latex_of_module_type_kind/1661 fmt/1933 father/1935\n  (field 0 match/2214))"}
           else
            {var exit=42}}
         else
          {var exit=42}
         switch(exit)
          {case 42:
            'unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
            "unknown block:(sendself self-3/1932 latex_for_module_type_index/1666 fmt/1933 mt/1934)";
            p(fmt,[0,[18,[1,[0,[11,"<h 4>",0],"<h 4>"]],0],"@[<h 4>"])
           }
         var $js$14=Odoc_info["Module"][29];
         var match$2=$js$14(mt);
         var $js$15=match$2!=0;
         if($js$15)
          {"unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933 [0: 0a 0a])";
           var $js$16=List["filter"];
           var $js$17=Odoc_info["Module"][30];
           var $js$18=$js$17([0,0],mt);
           var l=$js$16(function(param){return param[2]!=0},$js$18);
           var $js$19=l;
           if($js$19)
            {var $js$20=List["map"];
             var
              $js$21=
               $js$20
                (function(param)
                  {var text_opt=param[2];
                   var $js$22=text_opt;
                   if($js$22){var t$1=text_opt[1]}else{var t$1=0}
                   return [0,[0,param[1][1]],[0,[0,": "],t$1]]},
                 l);
             var $js$22=[10,$js$21];
             var $js$23=[0,$js$22,0];
             var t$1=[0,[4,[0,[0,"Parameters: "],0]],$js$23];
             "unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933 t/1941)"}
           else
            {}}
         else
          {}
         "unknown block:(sendself self-3/1932 latex_of_text/1703 fmt/1933 [0: 0a 0a])";
         "unknown block:(sendself self-3/1932 latex_of_info/1753 fmt/1933 [0: 1a] (field 1 mt/1934))";
         return p(fmt,[0,[17,0,0],"@]"])},
       latex_of_included_module,
       function(self-3,fmt,im)
        {'unknown block:(sendself self-3/1947 latex_of_text/1703 fmt/1948\n  (makeblock 0 [1: "include "]\n    (makeblock 0\n      (makeblock 1\n        (let (match/2202 = (field 1 im/1949))\n          (if match/2202 (field 0 (field 0 (field 0 match/2202)))\n            (field 0 im/1949))))\n      (sendself self-3/1947 text_of_info/1692 0a (field 2 im/1949)))))'},
       latex_of_class,
       function(self-3,fmt,c)
        {var $js$6=Odoc_info["reset_type_names"];
         $js$6(0);
         var $js$7=Odoc_info["Name"][5];
         var father=$js$7(c[1]);
         var l=c[4];
         var $js$8=l;
         if($js$8)
          {var $js$9=Pervasives["^"];
           "unknown block:(sendself self-3/1953 normal_class_type_param_list/1959 father/1956 l/1958)";
           var type_params=$js$9($js$10," ")}
         else
          {var type_params=""}
         var $js$11=Printf["sprintf"];
         var $js$12=c[5];
         if($js$12){var $js$13="virtual "}else{var $js$13=""}
         var $js$14=Odoc_info["Name"][1];
         var $js$15=$js$14(c[1]);
         var
          $js$16=
           $js$11
            ([0,
              [11,"class ",[2,0,[2,0,[2,0,[11," : ",0]]]]],
              "class %s%s%s : "],
             $js$13,
             type_params,
             $js$15);
         var $js$17=[1,$js$16];
         var $js$18=[0,$js$17,0];
         var t=[0,[14,"\begin{ocamldoccode}\n"],$js$18];
         "unknown block:(sendself self-3/1953 latex_of_text/1703 fmt/1954 t/1960)";
         "unknown block:(sendself self-3/1953 latex_of_class_parameter_list/1656 fmt/1954 father/1956\n  c/1955)";
         var match=c[6];
         var $js$19=match;
         if($js$19==2)
          {"unknown block:(sendself self-3/1953 latex_of_class_kind/1663 fmt/1954 father/1956\n  (field 5 c/1955))"}
         else
          {}
         'unknown block:(sendself self-3/1953 latex_of_text/1703 fmt/1954\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
         "unknown block:(sendself self-3/1953 latex_for_class_label/1671 fmt/1954 c/1955)";
         "unknown block:(sendself self-3/1953 latex_for_class_index/1669 fmt/1954 c/1955)";
         p(fmt,[0,[18,[1,[0,[11,"<h 4>",0],"<h 4>"]],0],"@[<h 4>"]);
         var match$1=c[6];
         var $js$20=match$1;
         if($js$20==2)
          {}
         else
          {"unknown block:(sendself self-3/1953 latex_of_class_kind/1663 fmt/1954 father/1956\n  (field 5 c/1955))"}
         "unknown block:(sendself self-3/1953 latex_of_text/1703 fmt/1954 [0: 0a 0a])";
         "unknown block:(sendself self-3/1953 latex_of_info/1753 fmt/1954 [0: 1a] (field 1 c/1955))";
         return p(fmt,[0,[17,0,0],"@]"])},
       latex_of_class_type,
       function(self-3,fmt,ct)
        {var $js$6=Odoc_info["reset_type_names"];
         $js$6(0);
         var $js$7=Odoc_info["Name"][5];
         var father=$js$7(ct[1]);
         var l=ct[4];
         var $js$8=l;
         if($js$8)
          {var $js$9=Pervasives["^"];
           "unknown block:(sendself self-3/1962 normal_class_type_param_list/1959 father/1965 l/1967)";
           var type_params=$js$9($js$10," ")}
         else
          {var type_params=""}
         var $js$11=Printf["sprintf"];
         var $js$12=ct[5];
         if($js$12){var $js$13="virtual "}else{var $js$13=""}
         var $js$14=Odoc_info["Name"][1];
         var $js$15=$js$14(ct[1]);
         var
          $js$16=
           $js$11
            ([0,
              [11,"class type ",[2,0,[2,0,[2,0,[11," = ",0]]]]],
              "class type %s%s%s = "],
             $js$13,
             type_params,
             $js$15);
         var $js$17=[1,$js$16];
         var $js$18=[0,$js$17,0];
         var t=[0,[14,"\begin{ocamldoccode}\n"],$js$18];
         "unknown block:(sendself self-3/1962 latex_of_text/1703 fmt/1963 t/1968)";
         'unknown block:(sendself self-3/1962 latex_of_text/1703 fmt/1963\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
         "unknown block:(sendself self-3/1962 latex_for_class_type_label/1672 fmt/1963 ct/1964)";
         "unknown block:(sendself self-3/1962 latex_for_class_type_index/1670 fmt/1963 ct/1964)";
         p(fmt,[0,[18,[1,[0,[11,"<h 4>",0],"<h 4>"]],0],"@[<h 4>"]);
         "unknown block:(sendself self-3/1962 latex_of_class_type_kind/1664 fmt/1963 father/1965\n  (field 5 ct/1964))";
         "unknown block:(sendself self-3/1962 latex_of_text/1703 fmt/1963 [0: 0a 0a])";
         "unknown block:(sendself self-3/1962 latex_of_info/1753 fmt/1963 [0: 1a] (field 1 ct/1964))";
         return p(fmt,[0,[17,0,0],"@]"])},
       latex_of_class_element,
       function(self-3,fmt,class_name,class_ele)
        {"unknown block:(sendself self-3/1970 latex_of_text/1703 fmt/1971 [0: 0a 0a])";
         var $js$6=class_ele;
         if($js$6==0)
          {"unknown block:(sendself self-3/1970 latex_of_attribute/1653 fmt/1971\n  (field 0 class_ele/1973))"}
         else
          if($js$6==1)
           {"unknown block:(sendself self-3/1970 latex_of_method/1654 fmt/1971 (field 0 class_ele/1973))"}
          else
           if($js$6==2)
            {var t=class_ele[1];
             var $js$7=t;
             if($js$7)
              {var $js$8=t[1];
               if(typeof $js$8=="number")
                {"unknown block:(field 0 t/1976)"}
               else
                {var $js$9=$js$8[0];
                 if($js$9==13)
                  {"unknown block:(sendself self-3/1970 latex_of_text/1703 fmt/1971 t/1976)"}
                 else
                  {var exit=28}}}
             else
              {return 0}
             switch(exit)
              {case 28:
                "unknown block:(sendself self-3/1970 latex_of_text/1703 fmt/1971\n  (makeblock 0\n    (makeblock 13\n      (+ (apply (field 2 (field 2 (global Odoc_info!))) class_name/1972) 2)\n      0a t/1976)\n    0a))"
               }}},
       latex_of_module_element,
       function(self-3,fmt,module_name,module_ele)
        {"unknown block:(sendself self-3/1978 latex_of_text/1703 fmt/1979 [0: 0a 0a])";
         var $js$6=module_ele;
         if($js$6==0)
          {"unknown block:(sendself self-3/1978 latex_of_module/1673 fmt/1979\n  (field 0 module_ele/1981))"}
         else
          if($js$6==1)
           {"unknown block:(sendself self-3/1978 latex_of_module_type/1674 fmt/1979\n  (field 0 module_ele/1981))"}
          else
           if($js$6==2)
            {"unknown block:(sendself self-3/1978 latex_of_included_module/1675 fmt/1979\n  (field 0 module_ele/1981))"}
           else
            if($js$6==3)
             {"unknown block:(sendself self-3/1978 latex_of_class/1676 fmt/1979 (field 0 module_ele/1981))"}
            else
             if($js$6==4)
              {"unknown block:(sendself self-3/1978 latex_of_class_type/1677 fmt/1979\n  (field 0 module_ele/1981))"}
             else
              if($js$6==5)
               {"unknown block:(sendself self-3/1978 latex_of_value/1652 fmt/1979 (field 0 module_ele/1981))"}
              else
               if($js$6==6)
                {"unknown block:(sendself self-3/1978 latex_of_type_extension/1658 module_name/1980 fmt/1979\n  (field 0 module_ele/1981))"}
               else
                if($js$6==7)
                 {"unknown block:(sendself self-3/1978 latex_of_exception/1659 fmt/1979\n  (field 0 module_ele/1981))"}
                else
                 if($js$6==8)
                  {"unknown block:(sendself self-3/1978 latex_of_type/1657 fmt/1979 (field 0 module_ele/1981))"}
                 else
                  if($js$6==9)
                   {"unknown block:(sendself self-3/1978 latex_of_text/1703 fmt/1979 (field 0 module_ele/1981))"}},
       generate_inheritance_info,
       function(self-3,fmt,inher_l)
        {var
          f=
           function(inh$3)
            {var match=inh$3[2];
             var $js$6=match;
             if($js$6)
              {var $js$7=match[1];
               if($js$7==0)
                {"unknown block:(sendself self-3/1993 class_label/1912 0a (field 0 inh/1997))"}
               else
                if($js$7==1)
                 {"unknown block:(sendself self-3/1993 class_type_label/1917 0a (field 0 inh/1997))"}
               var $js$8=Pervasives["^"];
               var $js$9=$js$8("inherit ",inh$3[1]);
               var $js$10=[1,$js$9];
               var $js$11=Pervasives["^"];
               var $js$12=Pervasives["^"];
               "unknown block:(sendself self-3/1993 make_ref/2001 label/2000)";
               var $js$13=$js$12($js$14,"]");
               var $js$15=$js$11(" [",$js$13);
               var $js$16=[14,$js$15];
               var match$1=inh$3[3];
               var $js$17=match$1;
               if($js$17){var $js$18=[0,0,match$1[1]]}else{var $js$18=0}
               var $js$19=[0,$js$16,$js$18];
               var $js$20=[0,$js$10,$js$19];
               return [0,0,$js$20]}
             else
              {var $js$21=Pervasives["^"];
               var $js$22=$js$21("inherit ",inh$3[1]);
               var $js$23=[1,$js$22];
               var match$2=inh$3[3];
               var $js$24=match$2;
               if($js$24){var $js$25=[0,0,match$2[1]]}else{var $js$25=0}
               var $js$26=[0,$js$23,$js$25];
               return [0,0,$js$26]}};
         var $js$6=List["iter"];
         "unknown block:(sendself self-3/1993 latex_of_text/1703 fmt/1994)";
         var $js$7=List["map"];
         var $js$8=$js$7(f,inher_l);
         return $js$6($js$9,$js$8)},
       generate_class_inheritance_info,
       function(self-3,fmt,cl)
        {var
          iter_kind=
           function(k)
            {var $js$6=k;
             if($js$6==0)
              {var l=k[1];
               var $js$7=l;
               if($js$7)
                {"unknown block:(sendself self-3/2004 generate_inheritance_info/1680 fmt/2005 l/2009)"}
               else
                {return 0}}
             else
              if($js$6==1)
               {var exit=24}
              else
               if($js$6==2)
                {var exit=24}
               else
                if($js$6==3){return iter_kind(k[1])}
             switch(exit){case 24:return 0}};
         return iter_kind(cl[6])},
       generate_class_type_inheritance_info,
       function(self-3,fmt,clt)
        {var match=clt[6];
         var $js$6=match;
         if($js$6==0)
          {var l=match[1];
           var $js$7=l;
           if($js$7)
            {"unknown block:(sendself self-3/2012 generate_inheritance_info/1680 fmt/2013 l/2015)"}
           else
            {return 0}}
         else
          if($js$6==1){return 0}},
       generate_for_top_module,
       function(self-3,fmt,m)
        {"unknown block:(sendself self-3/2017 first_and_rest_of_info/1651 (field 2 m/2019))";
         var first_t=match[1];
         var $js$6=m[11];
         if($js$6)
          {var $js$7=Pervasives["@"];
           var $js$8=first_t;
           if($js$8){var $js$9=[0,[0," : "],first_t]}else{var $js$9=0}
           var $js$10=$js$7([0,[0,m[1]],0],$js$9);
           var $js$11=[13,1,0,$js$10];
           var text$1=[0,$js$11,0]}
         else
          {var $js$12=Pervasives["@"];
           var $js$13=Pervasives["^"];
           var $js$14=$js$13(Odoc_messages["modul"]," ");
           var $js$15=[0,$js$14];
           var $js$16=[0,$js$15,[0,[1,m[1]],0]];
           var $js$17=first_t;
           if($js$17){var $js$18=[0,[0," : "],first_t]}else{var $js$18=0}
           var $js$19=$js$12($js$16,$js$18);
           var $js$20=[13,1,0,$js$19];
           var text$1=[0,$js$20,0]}
         "unknown block:(sendself self-3/2017 latex_of_text/1703 fmt/2018 text/2022)";
         "unknown block:(sendself self-3/2017 latex_for_module_label/1667 fmt/2018 m/2019)";
         "unknown block:(sendself self-3/2017 latex_for_module_index/1665 fmt/2018 m/2019)";
         "unknown block:(sendself self-3/2017 latex_of_text/1703 fmt/2018 (field 1 match/2155))";
         "unknown block:(sendself self-3/2017 latex_of_text/1703 fmt/2018 [0: 0a 0a])";
         var $js$21=!m[11];
         if($js$21){ps(fmt,"\ocamldocvspace{0.5cm}\n\n")}else{}
         var $js$22=List["iter"];
         var $js$23=Odoc_info["Module"][1];
         var $js$24=$js$23([0,0],m);
         return $js$22
                 (function(ele)
                   {"unknown block:(sendself self-3/2017 latex_of_module_element/1679 fmt/2018 (field 0 m/2019)\n  ele/2025)";
                    return ps(fmt,"\n\n")},
                  $js$24)},
       latex_header,
       function(self-3,fmt,module_list)
        {ps(fmt,"\documentclass[11pt]{article} \n");
         ps(fmt,"\usepackage[latin1]{inputenc} \n");
         ps(fmt,"\usepackage[T1]{fontenc} \n");
         ps(fmt,"\usepackage{textcomp}\n");
         ps(fmt,"\usepackage{fullpage} \n");
         ps(fmt,"\usepackage{url} \n");
         ps(fmt,"\usepackage{ocamldoc}\n");
         var match=Odoc_info["Global"][6][1];
         var $js$6=match;
         if($js$6)
          {ps(fmt,"\title{");
           "unknown block:(sendself self-3/2027 escape/2031 (field 0 match/2151))";
           ps(fmt,$js$7);
           ps(fmt,"}\n")}
         else
          {}
         ps(fmt,"\begin{document}\n");
         var match$1=Odoc_info["Global"][6][1];
         var $js$8=match$1;
         if($js$8){ps(fmt,"\maketitle\n")}else{}
         var $js$9=Odoc_info["Global"][8][1];
         if($js$9){ps(fmt,"\tableofcontents\n")}else{}
         var $js$10=Odoc_info["apply_opt"];
         var $js$11=Odoc_info["info_of_comment_file"];
         var $js$12=$js$11(module_list);
         var info$1=$js$10($js$12,Odoc_info["Global"][7][1]);
         var $js$13=info$1;
         if($js$13){ps(fmt,"\vspace{0.2cm}")}else{}
         "unknown block:(sendself self-3/2027 latex_of_info/1753 fmt/2028 0a info/2032)";
         var $js$14=info$1;
         if($js$14){return ps(fmt,"\n\n")}else{return 0}},
       generate_style_file,
       function(self-3)
        {try
          {var $js$6=Filename["dirname"];
           var dir=$js$6(Odoc_info["Global"][3][1]);
           var $js$7=Filename["concat"];
           var file=$js$7(dir,"ocamldoc.sty");
           var $js$8="unknown primitive:caml_sys_file_exists";
           if($js$8)
            {var $js$9=Odoc_info["verbose"];
             var $js$10=Odoc_messages["file_exists_dont_generate"];
             var $js$11=$js$10(file);
             return $js$9($js$11)}
           else
            {var $js$12=Pervasives["open_out"];
             var chanout=$js$12(file);
             var $js$13=Pervasives["output_string"];
             $js$13(chanout,Odoc_latex_style["content"]);
             var $js$14=Pervasives["flush"];
             $js$14(chanout);
             var $js$15=Pervasives["close_out"];
             $js$15(chanout);
             var $js$16=Odoc_info["verbose"];
             var $js$17=Odoc_messages["file_generated"];
             var $js$18=$js$17(file);
             return $js$16($js$18)}}
         catch(exn)
          {var $js$19=exn[1]=Sys_error;
           if($js$19)
            {var $js$20=Pervasives["prerr_endline"];
             $js$20(exn[2]);
             return Odoc_info["errors"][0]++}
           else
            {return "unknown primitive:reraise"}}},
       generate,
       function(self-3,module_list)
        {"unknown block:(sendself self-3/2040 generate_style_file/1685)";
         var main_file=Odoc_info["Global"][3][1];
         var $js$6=Filename["dirname"];
         var dir=$js$6(main_file);
         var $js$7=separate_files[1];
         if($js$7)
          {var
            f=
             function(m)
              {try
                {var $js$8=Pervasives["open_out"];
                 var $js$9=Pervasives["^"];
                 var $js$10=Filename["concat"];
                 var $js$11=Odoc_info["Name"][1];
                 var $js$12=$js$11(m[1]);
                 var $js$13=$js$10(dir,$js$12);
                 var $js$14=$js$9($js$13,".tex");
                 var chanout=$js$8($js$14);
                 var $js$15=Format["formatter_of_out_channel"];
                 var fmt=$js$15(chanout);
                 "unknown block:(sendself self-3/2040 generate_for_top_module/1683 fmt/2047 m/2045)";
                 var $js$16=Format["pp_print_flush"];
                 $js$16(fmt,0);
                 var $js$17=Pervasives["close_out"];
                 return $js$17(chanout)}
               catch(exn)
                {var $js$18=exn[1]=Failure;
                 if($js$18)
                  {var s=exn[2];var exit=7}
                 else
                  {var $js$19=exn[1]=Sys_error;
                   if($js$19)
                    {var s=exn[2];var exit=7}
                   else
                    {return "unknown primitive:reraise"}}
                 switch(exit)
                  {case 7:
                    var $js$20=Pervasives["prerr_endline"];
                    $js$20(s);
                    return Odoc_info["errors"][0]++
                   }}};
           var $js$8=List["iter"];
           $js$8(f,module_list)}
         else
          {}
         try
          {var $js$9=Pervasives["open_out"];
           var chanout=$js$9(main_file);
           var $js$10=Format["formatter_of_out_channel"];
           var fmt=$js$10(chanout);
           var $js$11=Odoc_info["Global"][10][1];
           if($js$11)
            {"unknown block:(sendself self-3/2040 latex_header/1684 fmt/2051 module_list/2041)"}
           else
            {}
           var $js$12=List["iter"];
           $js$12
            (function(m)
              {var $js$13=separate_files[1];
               if($js$13)
                {var $js$14=Pervasives["^"];
                 var $js$15=Pervasives["^"];
                 var $js$16=Odoc_info["Name"][1];
                 var $js$17=$js$16(m[1]);
                 var $js$18=$js$15($js$17,".tex}\n");
                 var $js$19=$js$14("\input{",$js$18);
                 return ps(fmt,$js$19)}
               else
                {"unknown block:(sendself self-3/2040 generate_for_top_module/1683 fmt/2051 m/2052)"}},
             module_list);
           var $js$13=Odoc_info["Global"][11][1];
           if($js$13){ps(fmt,"\end{document}")}else{}
           var $js$14=Format["pp_print_flush"];
           $js$14(fmt,0);
           var $js$15=Pervasives["close_out"];
           return $js$15(chanout)}
         catch(exn)
          {var $js$16=exn[1]=Failure;
           if($js$16)
            {var s=exn[2];var exit=2}
           else
            {var $js$17=exn[1]=Sys_error;
             if($js$17)
              {var s=exn[2];var exit=2}
             else
              {return "unknown primitive:reraise"}}
           switch(exit)
            {case 2:
              var $js$18=Pervasives["prerr_endline"];
              $js$18(s);
              return Odoc_info["errors"][0]++
             }}}]);
    return function(env,self)
     {var $js$6=CamlinternalOO["create_object_opt"];
      var self$1=$js$6(self,class);
      obj_init(self$1);
      obj_init$1(self$1);
      obj_init$2(self$1);
      var $js$7=CamlinternalOO["run_initializers_opt"];
      return $js$7(self,self$1,class)}};
var $js$1=CamlinternalOO["make_class"];
var
 latex=
  $js$1
   ([0,
     "latex_of_text_element",
     "escape_simple",
     "text_of_module_kind",
     "text_of_parameter_list",
     "text_of_class_params",
     "latex_of_Verbatim",
     "text_of_module_type",
     "text_of_class_type_param_expr_list",
     "text_of_class_type_kind",
     "make_ref",
     "latex_of_module_element",
     "relative_idents",
     "const_label",
     "latex_for_class_index",
     "text_of_return_opt",
     "generate_class_type_inheritance_info",
     "latex_of_Center",
     "latex_of_Italic",
     "latex_of_Target",
     "text_of_see",
     "module_label",
     "generate",
     "latex_of_class_type_kind",
     "escape",
     "text_of_exception",
     "latex_of_Newline",
     "latex_of_type_params",
     "text_of_info",
     "latex_of_module",
     "recfield_label",
     "latex_of_custom_text",
     "latex_of_Bold",
     "normal_type_list",
     "latex_of_Code",
     "text_of_sees",
     "latex_of_Enum",
     "latex_of_Emphasize",
     "first_and_rest_of_info",
     "text_of_module_parameter_list",
     "text_of_parameter_description",
     "generate_for_top_module",
     "text_of_value",
     "latex_of_Left",
     "latex_of_Link",
     "latex_of_List",
     "latex_for_module_type_index",
     "section_style",
     "latex_for_module_index",
     "label",
     "extension_label",
     "latex_of_module_type_kind",
     "latex_of_Right",
     "latex_of_included_module",
     "latex_for_class_type_index",
     "latex_of_Latex",
     "normal_type",
     "latex_of_info",
     "text_of_version_opt",
     "normal_class_type_param_list",
     "latex_of_Subscript",
     "escape_code",
     "generate_style_file",
     "latex_for_class_label",
     "latex_of_text",
     "latex_of_type",
     "subst",
     "latex_of_Raw",
     "latex_of_Ref",
     "class_type_label",
     "text_of_type_expr_list",
     "text_of_method",
     "latex_of_class_kind",
     "latex_of_type_extension",
     "make_label",
     "text_of_class_kind",
     "normal_class_type",
     "text_of_attribute",
     "latex_of_exception",
     "latex_of_class_type",
     "latex_of_module_kind",
     "latex_of_module_parameter",
     "exception_label",
     "latex_of_module_type",
     "text_of_before",
     "latex_of_Title",
     "text_of_short_type_expr",
     "latex_for_module_type_label",
     "latex_of_CodePre",
     "normal_module_type",
     "method_label",
     "latex_for_module_label",
     "text_of_since_opt",
     "latex_of_class_element",
     "latex_of_method",
     "latex_for_class_type_label",
     "latex_header",
     "latex_of_value",
     "attribute_label",
     "module_type_label",
     "class_label",
     "latex_of_Superscript",
     "latex_of_class_parameter_list",
     "type_label",
     "text_of_author_list",
     "normal_class_params",
     "text_of_module_type_kind",
     "generate_inheritance_info",
     "value_label",
     "text_of_type_expr",
     "text_of_custom",
     "text_of_raised_exceptions",
     "latex_of_attribute",
     "latex_of_Block",
     "relative_module_idents",
     "latex_of_class",
     "generate_class_inheritance_info"],
    latex_init);
var Generator=[0,latex];
module["exports"]=
{"separate_files":separate_files,
 "latex_titles":latex_titles,
 "latex_value_prefix":latex_value_prefix,
 "latex_type_prefix":latex_type_prefix,
 "latex_type_elt_prefix":latex_type_elt_prefix,
 "latex_extension_prefix":latex_extension_prefix,
 "latex_exception_prefix":latex_exception_prefix,
 "latex_module_prefix":latex_module_prefix,
 "latex_module_type_prefix":latex_module_type_prefix,
 "latex_class_prefix":latex_class_prefix,
 "latex_class_type_prefix":latex_class_type_prefix,
 "latex_attribute_prefix":latex_attribute_prefix,
 "latex_method_prefix":latex_method_prefix,
 "new_buf":new_buf,
 "new_fmt":new_fmt,
 "p":p,
 "ps":ps,
 "bp":bp,
 "bs":bs,
 "print_concat":print_concat,
 "text":text,
 "info":info,
 "Generator":Generator};
