// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_to_text=require("Odoc_to_text");
var Printf=require("Printf");
var Format=require("Format");
var Odoc_latex_style=require("Odoc_latex_style");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Str=require("Str");
var Odoc_messages=require("Odoc_messages");


var shared=[0,"label"];

var shared$1=[0,"subst_strings","subst_strings_simple","subst_strings_code"];

var shared$2=[0,"text_of_info","latex_of_text"];

var shared$3=[0,"latex_of_info"];

var
 shared$4=
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

var
 shared$5=
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

var shared$6=[0,"tag_functions"];

var
 shared$7=
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

var
 shared$8=
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

var shared$9=[0,"subst_strings_simple","subst_strings_code","subst_strings"];

var shared$10=[0,"text_of_info","latex_of_text","latex_of_info"];

var separate_files=[0,/* false */0];

var
 latex_titles=
  [0,
   [/* :: */0,
    [/* tuple */0,1,"section"],
    [/* :: */0,
     [/* tuple */0,2,"subsection"],
     [/* :: */0,
      [/* tuple */0,3,"subsubsection"],
      [/* :: */0,
       [/* tuple */0,4,"paragraph"],
       [/* :: */0,[/* tuple */0,5,"subparagraph"],/* [] */0]]]]]];

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

var new_buf=function(param){return Buffer["create"](1024);};

var
 new_fmt=
  function(param)
   {var b=new_buf(/* () */0);
    
    var fmt=Format["formatter_of_buffer"](b);
    
    return /* tuple */[0,
            fmt,
            function(param$1)
             {Format["pp_print_flush"](fmt,/* () */0);
              var s=Buffer["contents"](b);
              
              Buffer["reset"](b);
              return s;
              }];
    };

var p=Format["fprintf"];

var
 ps=
  function(f,s)
   {return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* String */2,/* No_padding */0,/* End_of_format */0],
              "%s"],
             s);
    };

var bp=Printf["bprintf"];

var bs=Buffer["add_string"];

var
 print_concat=
  function(fmt,sep,f)
   {var
     iter=
      function(param)
       {if(param)
         {var q=param[2];
          
          var c=param[1];
          
          if(q){f(c);ps(fmt,sep);return iter(q);}else{return f(c);}
          }
        else
         {return /* () */0;}
        };
    
    return iter;
    };

var
 text_init=
  function($$class)
   {var
     ids=
      CamlinternalOO["new_methods_variables"]($$class,shared$8,shared$1);
    
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
    
    var $$escape=ids[40];
    
    var const_label=ids[41];
    
    var class_type_label=ids[42];
    
    var class_label=ids[43];
    
    var attribute_label=ids[44];
    
    var subst_strings=ids[45];
    
    var subst_strings_simple=ids[46];
    
    var subst_strings_code=ids[47];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       section_style,
       function(self$neg1,level,s)
        {try
          {var sec=List["assoc"](level,latex_titles[1]);
           
           return Pervasives["^"]
                   ("\",
                    Pervasives["^"]
                     (sec,Pervasives["^"]("{",Pervasives["^"](s,"}\n"))));
           }
         catch(exn){if(exn=Not_found){return s;}else{throw exn;}}
         },
       subst,
       function(self$neg1,l,s)
        {return List["fold_left"]
                 (function(acc,param)
                   {return Str["global_replace"](param[1],param[2],acc);},
                  s,
                  l);
         },
       $$escape,
       function(self$neg1,s)
        {"(sendself self-1/1325 subst/1269\n  (array.unsafe_get self-1/1325 subst_strings/1262) s/1326)";
         },
       escape_simple,
       function(self$neg1,s)
        {"(sendself self-1/1328 subst/1269\n  (array.unsafe_get self-1/1328 subst_strings_simple/1265) s/1329)";
         },
       escape_code,
       function(self$neg1,s)
        {"(sendself self-1/1331 subst/1269\n  (array.unsafe_get self-1/1331 subst_strings_code/1268) s/1332)";
         },
       label,
       function(self$neg1,$staropt$star,name)
        {if($staropt$star)
          {var no_=$staropt$star[1];}
         else
          {var no_=/* true */1;}
         
         var len=name["length"];
         
         var buf=Buffer["create"](len);
         
         for(var i=0;i<=len-1;i++)
          {var c=name[i];
           
           var exit;
           
           if(c>=96)
            {var switcher=-124+c;
             
             if(2<switcher>>>0)
              {exit=106;}
             else
              {switch(switcher)
                {case 0:var match=[/* tuple */0,"-pipe",'"|'];
                 case 1:exit=106;
                 case 2:var match=[/* tuple */0,"-tilde","~"];
                 }
               }
             }
           else
            {if(c>=33)
              {switch(-33+c)
                {case 0:var match=[/* tuple */0,"-bang",'"!'];
                 case 1:exit=106;
                 case 2:exit=106;
                 case 3:var match=[/* tuple */0,"-dollar","$"];
                 case 4:var match=[/* tuple */0,"-percent","%"];
                 case 5:var match=[/* tuple */0,"-ampersand","&"];
                 case 6:exit=106;
                 case 7:exit=106;
                 case 8:exit=106;
                 case 9:var match=[/* tuple */0,"-star","*"];
                 case 10:var match=[/* tuple */0,"-plus","+"];
                 case 11:exit=106;
                 case 12:var match=[/* tuple */0,"-minus","-"];
                 case 13:exit=106;
                 case 14:var match=[/* tuple */0,"-slash","/"];
                 case 15:exit=106;
                 case 16:exit=106;
                 case 17:exit=106;
                 case 18:exit=106;
                 case 19:exit=106;
                 case 20:exit=106;
                 case 21:exit=106;
                 case 22:exit=106;
                 case 23:exit=106;
                 case 24:exit=106;
                 case 25:var match=[/* tuple */0,"-colon",":"];
                 case 26:exit=106;
                 case 27:var match=[/* tuple */0,"-lt","<"];
                 case 28:var match=[/* tuple */0,"-equal","="];
                 case 29:var match=[/* tuple */0,"-gt",">"];
                 case 30:exit=106;
                 case 31:var match=[/* tuple */0,"-at",'"@'];
                 case 32:exit=106;
                 case 33:exit=106;
                 case 34:exit=106;
                 case 35:exit=106;
                 case 36:exit=106;
                 case 37:exit=106;
                 case 38:exit=106;
                 case 39:exit=106;
                 case 40:exit=106;
                 case 41:exit=106;
                 case 42:exit=106;
                 case 43:exit=106;
                 case 44:exit=106;
                 case 45:exit=106;
                 case 46:exit=106;
                 case 47:exit=106;
                 case 48:exit=106;
                 case 49:exit=106;
                 case 50:exit=106;
                 case 51:exit=106;
                 case 52:exit=106;
                 case 53:exit=106;
                 case 54:exit=106;
                 case 55:exit=106;
                 case 56:exit=106;
                 case 57:exit=106;
                 case 58:exit=106;
                 case 59:exit=106;
                 case 60:exit=106;
                 case 61:var match=[/* tuple */0,"-exp","^"];
                 case 62:var match=[/* tuple */0,"-underscore","_"];
                 }
               }
             else
              {exit=106;}
             }
           
           switch(exit)
            {case 106:
              var
               match=
                /* tuple */[0,$$String["make"](1,c),$$String["make"](1,c)];
              
             }
           
           Buffer["add_string"](buf,no_?match[1]:match[2])}
         
         return Buffer["contents"](buf);
         },
       value_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1346 label/1273 no_/1347 name/1348)";
         return Pervasives["^"](latex_value_prefix[1],0);
         },
       attribute_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1350 label/1273 no_/1351 name/1352)";
         return Pervasives["^"](latex_attribute_prefix[1],0);
         },
       method_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1354 label/1273 no_/1355 name/1356)";
         return Pervasives["^"](latex_method_prefix[1],0);
         },
       class_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1358 label/1273 no_/1359 name/1360)";
         return Pervasives["^"](latex_class_prefix[1],0);
         },
       class_type_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1362 label/1273 no_/1363 name/1364)";
         return Pervasives["^"](latex_class_type_prefix[1],0);
         },
       module_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1366 label/1273 no_/1367 name/1368)";
         return Pervasives["^"](latex_module_prefix[1],0);
         },
       module_type_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1370 label/1273 no_/1371 name/1372)";
         return Pervasives["^"](latex_module_type_prefix[1],0);
         },
       extension_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1374 label/1273 no_/1375 name/1376)";
         return Pervasives["^"](latex_extension_prefix[1],0);
         },
       exception_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1378 label/1273 no_/1379 name/1380)";
         return Pervasives["^"](latex_exception_prefix[1],0);
         },
       type_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1382 label/1273 no_/1383 name/1384)";
         return Pervasives["^"](latex_type_prefix[1],0);
         },
       recfield_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1386 label/1273 no_/1387 name/1388)";
         return Pervasives["^"](latex_type_elt_prefix[1],0);
         },
       const_label,
       function(self$neg1,no_,name)
        {"(sendself self-1/1390 label/1273 no_/1391 name/1392)";
         return Pervasives["^"](latex_type_elt_prefix[1],0);
         },
       make_label,
       function(self$neg1,label)
        {return Pervasives["^"]("\label{",Pervasives["^"](label,"}"));},
       make_ref,
       function(self$neg1,label)
        {return Pervasives["^"]("\ref{",Pervasives["^"](label,"}"));},
       latex_of_text,
       function(self$neg1,fmt,t)
        {"(sendself self-1/1400 latex_of_text_element/1289 fmt/1401)";
         return List["iter"](0,t);
         },
       latex_of_text_element,
       function(self$neg1,fmt,txt)
        {var exit;
         
         if(typeof txt=="number")
          {switch(txt)
            {case 0:"(sendself self-1/1404 latex_of_Newline/1304 fmt/1405)";
             case 1:exit=105;
             }}
         else
          {switch(txt[0])
            {case 0:
              "(sendself self-1/1404 latex_of_Raw/1292 fmt/1405 (field 0 txt/1406))";
              
             case 1:
              "(sendself self-1/1404 latex_of_Code/1293 fmt/1405 (field 0 txt/1406))";
              
             case 2:
              "(sendself self-1/1404 latex_of_CodePre/1294 fmt/1405 (field 0 txt/1406))";
              
             case 3:
              "(sendself self-1/1404 latex_of_Verbatim/1295 fmt/1405 (field 0 txt/1406))";
              
             case 4:
              "(sendself self-1/1404 latex_of_Bold/1296 fmt/1405 (field 0 txt/1406))";
              
             case 5:
              "(sendself self-1/1404 latex_of_Italic/1297 fmt/1405 (field 0 txt/1406))";
              
             case 6:
              "(sendself self-1/1404 latex_of_Emphasize/1298 fmt/1405 (field 0 txt/1406))";
              
             case 7:
              "(sendself self-1/1404 latex_of_Center/1299 fmt/1405 (field 0 txt/1406))";
              
             case 8:
              "(sendself self-1/1404 latex_of_Left/1300 fmt/1405 (field 0 txt/1406))";
              
             case 9:
              "(sendself self-1/1404 latex_of_Right/1301 fmt/1405 (field 0 txt/1406))";
              
             case 10:
              "(sendself self-1/1404 latex_of_List/1302 fmt/1405 (field 0 txt/1406))";
              
             case 11:
              "(sendself self-1/1404 latex_of_Enum/1303 fmt/1405 (field 0 txt/1406))";
              
             case 12:
              "(sendself self-1/1404 latex_of_Block/1305 fmt/1405 (field 0 txt/1406))";
              
             case 13:
              "(sendself self-1/1404 latex_of_Title/1306 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406) (field 2 txt/1406))";
              
             case 14:
              "(sendself self-1/1404 latex_of_Latex/1307 fmt/1405 (field 0 txt/1406))";
              
             case 15:
              "(sendself self-1/1404 latex_of_Link/1308 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406))";
              
             case 16:
              "(sendself self-1/1404 latex_of_Ref/1309 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406) (field 2 txt/1406))";
              
             case 17:
              "(sendself self-1/1404 latex_of_Superscript/1310 fmt/1405 (field 0 txt/1406))";
              
             case 18:
              "(sendself self-1/1404 latex_of_Subscript/1311 fmt/1405 (field 0 txt/1406))";
              
             case 19:exit=105;
             case 20:
              "(sendself self-1/1404 latex_of_custom_text/1290 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406))";
              
             case 21:
              "(sendself self-1/1404 latex_of_Target/1291 fmt/1405 (field 0 txt/1406)\n  (field 1 txt/1406))";
              
             }}
         
         switch(exit){case 105:return /* () */0;}
         },
       latex_of_custom_text,
       function(self$neg1,fmt,s,t){return /* () */0;},
       latex_of_Target,
       function(self$neg1,fmt,target,code)
        {if
          (CamlPrimtivie["caml_string_equal"]
            ($$String["lowercase"](target),"latex"))
          {"(sendself self-1/1441 latex_of_Latex/1307 fmt/1442 code/1444)";}
         else
          {return /* () */0;}
         },
       latex_of_Raw,
       function(self$neg1,fmt,s)
        {"(sendself self-1/1446 escape/1270 s/1448)";return ps(fmt,0);},
       latex_of_Code,
       function(self$neg1,fmt,s)
        {"(sendself self-1/1450 escape_code/1272 s/1452)";
         
         var s3=Str["global_replace"](Str["regexp"]("\n"),"\\\n",s2);
         
         return p
                 (fmt,
                  [/* Format */0,
                   [/* String_literal */11,
                    "{\tt{",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,"}}",/* End_of_format */0]]],
                   "{\tt{%s}}"],
                  s3);
         },
       latex_of_CodePre,
       function(self$neg1,fmt,s)
        {ps(fmt,"\begin{ocamldoccode}\n");
         "(sendself self-1/1456 escape_simple/1271 s/1458)";
         ps(fmt,0);
         return ps(fmt,"\n\end{ocamldoccode}\n");
         },
       latex_of_Verbatim,
       function(self$neg1,fmt,s)
        {ps(fmt,"\n\begin{verbatim}\n");
         ps(fmt,s);
         return ps(fmt,"\n\end{verbatim}\n");
         },
       latex_of_Bold,
       function(self$neg1,fmt,t)
        {ps(fmt,"{\bf ");
         "(sendself self-1/1464 latex_of_text/1288 fmt/1465 t/1466)";
         
         return ps(fmt,"}");
         },
       latex_of_Italic,
       function(self$neg1,fmt,t)
        {ps(fmt,"{\it ");
         "(sendself self-1/1468 latex_of_text/1288 fmt/1469 t/1470)";
         
         return ps(fmt,"}");
         },
       latex_of_Emphasize,
       function(self$neg1,fmt,t)
        {ps(fmt,"{\em ");
         "(sendself self-1/1472 latex_of_text/1288 fmt/1473 t/1474)";
         
         return ps(fmt,"}");
         },
       latex_of_Center,
       function(self$neg1,fmt,t)
        {ps(fmt,"\begin{center}\n");
         "(sendself self-1/1476 latex_of_text/1288 fmt/1477 t/1478)";
         
         return ps(fmt,"\end{center}\n");
         },
       latex_of_Left,
       function(self$neg1,fmt,t)
        {ps(fmt,"\begin{flushleft}\n");
         "(sendself self-1/1480 latex_of_text/1288 fmt/1481 t/1482)";
         
         return ps(fmt,"\end{flushleft}\n");
         },
       latex_of_Right,
       function(self$neg1,fmt,t)
        {ps(fmt,"\begin{flushright}\n");
         "(sendself self-1/1484 latex_of_text/1288 fmt/1485 t/1486)";
         
         return ps(fmt,"\end{flushright}\n");
         },
       latex_of_List,
       function(self$neg1,fmt,tl)
        {ps(fmt,"\begin{itemize}\n");
         List["iter"]
          (function(t)
            {ps(fmt,"\item ");
             "(sendself self-1/1488 latex_of_text/1288 fmt/1489 t/1491)";
             
             return ps(fmt,"\n");
             },
           tl);
         return ps(fmt,"\end{itemize}\n");
         },
       latex_of_Enum,
       function(self$neg1,fmt,tl)
        {ps(fmt,"\begin{enumerate}\n");
         List["iter"]
          (function(t)
            {ps(fmt,"\item ");
             "(sendself self-1/1493 latex_of_text/1288 fmt/1494 t/1496)";
             
             return ps(fmt,"\n");
             },
           tl);
         return ps(fmt,"\end{enumerate}\n");
         },
       latex_of_Newline,
       function(self$neg1,fmt){return ps(fmt,"\n\n");},
       latex_of_Block,
       function(self$neg1,fmt,t)
        {ps(fmt,"\begin{ocamldocdescription}\n");
         "(sendself self-1/1501 latex_of_text/1288 fmt/1502 t/1503)";
         
         return ps(fmt,"\n\end{ocamldocdescription}\n");
         },
       latex_of_Title,
       function(self$neg1,fmt,n,label_opt,t)
        {var match=new_fmt(/* () */0);
         
         "(sendself self-1/1505 latex_of_text/1288 (field 0 match/2374) t/1509)";
         
         "(sendself self-1/1505 section_style/1259 n/1507\n  (apply (field 1 match/2374) 0a))";
         
         ps(fmt,s_title2);
         if(label_opt)
          {"(sendself self-1/1505 make_label/1286\n  (sendself self-1/1505 label/1273 [0: 0a] (field 0 label_opt/1508)))";
           return ps(fmt,0);
           }
         else
          {return /* () */0;}
         },
       latex_of_Latex,
       function(self$neg1,fmt,s){return ps(fmt,s);},
       latex_of_Link,
       function(self$neg1,fmt,s,t)
        {"(sendself self-1/1519 latex_of_text/1288 fmt/1520 t/1522)";
         
         ps(fmt,"[\url{");
         ps(fmt,s);
         return ps(fmt,"}]");
         },
       latex_of_Ref,
       function(self$neg1,fmt,name,ref_opt,text_opt)
        {if(ref_opt)
          {var kind=ref_opt[1];
           
           if(typeof kind==="number")
            {if(typeof kind==="number")
              {switch(kind)
                {case 0:"(sendself self-1/1524 module_label/1279)";
                 case 1:"(sendself self-1/1524 module_type_label/1280)";
                 case 2:"(sendself self-1/1524 class_label/1277)";
                 case 3:"(sendself self-1/1524 class_type_label/1278)";
                 case 4:"(sendself self-1/1524 value_label/1274)";
                 case 5:"(sendself self-1/1524 type_label/1283)";
                 case 6:"(sendself self-1/1524 extension_label/1281)";
                 case 7:"(sendself self-1/1524 exception_label/1282)";
                 case 8:"(sendself self-1/1524 attribute_label/1275)";
                 case 9:"(sendself self-1/1524 method_label/1276)";
                 case 10:"(sendself self-1/1524 recfield_label/1284)";
                 case 11:"(sendself self-1/1524 const_label/1285)";
                 }
               }
             else
              {throw [0,Assert_failure,[0,"odoc_latex.ml",423,40]];}
             
             if(text_opt)
              {var text=text_opt[1];}
             else
              {var
                text=
                 /* :: */[0,
                  /* Code */[1,Odoc_info["use_hidden_modules"](name)],
                  /* [] */0];
               }
             
             '(sendself self-1/1524 latex_of_text/1288 fmt/1525\n  (apply (field 21 (global Pervasives!)) text/1532\n    (makeblock 0\n      (makeblock 14\n        (apply (field 15 (global Pervasives!)) "["\n          (apply (field 15 (global Pervasives!))\n            (sendself self-1/1524 make_ref/1287\n              (apply f_label/1531 0a name/1526))\n            "]")))\n      0a)))';
             }
           else
            {'(sendself self-1/1524 latex_of_text_element/1289 fmt/1525\n  (makeblock 14\n    (apply (field 15 (global Pervasives!)) "["\n      (apply (field 15 (global Pervasives!))\n        (sendself self-1/1524 make_ref/1287\n          (sendself self-1/1524 label/1273 [0: 0a]\n            (apply (field 0 (field 2 (global Odoc_info!))) name/1526)))\n        "]"))))';
             }
           }
         else
          {"(sendself self-1/1524 latex_of_text/1288 fmt/1525\n  (if text_opt/1528 (field 0 text_opt/1528)\n    (makeblock 0\n      (makeblock 1 (apply (field 37 (global Odoc_info!)) name/1526)) 0a)))";
           }
         },
       latex_of_Superscript,
       function(self$neg1,fmt,t)
        {ps(fmt,"$^{");
         "(sendself self-1/1535 latex_of_text/1288 fmt/1536 t/1537)";
         
         return ps(fmt,"}$");
         },
       latex_of_Subscript,
       function(self$neg1,fmt,t)
        {ps(fmt,"$_{");
         "(sendself self-1/1539 latex_of_text/1288 fmt/1540 t/1541)";
         
         return ps(fmt,"}$");
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[subst_strings]=
      List["map"]
       (function(param)
         {return /* tuple */[0,Str["regexp"](param[1]),param[2]];},
        [/* :: */0,
         [/* tuple */0,"\x01","\x01\x02"],
         [/* :: */0,
          [/* tuple */0,"\\","\x01b"],
          [/* :: */0,
           [/* tuple */0,"{","\\{"],
           [/* :: */0,
            [/* tuple */0,"}","\\}"],
            [/* :: */0,
             [/* tuple */0,"\$","\\$"],
             [/* :: */0,
              [/* tuple */0,"\^","{\\textasciicircum}"],
              [/* :: */0,
               [/* tuple */0,"à","\\`a"],
               [/* :: */0,
                [/* tuple */0,"â","\\^a"],
                [/* :: */0,
                 [/* tuple */0,"é","\\'e"],
                 [/* :: */0,
                  [/* tuple */0,"è","\\`e"],
                  [/* :: */0,
                   [/* tuple */0,"ê","\\^e"],
                   [/* :: */0,
                    [/* tuple */0,"ë",'\\"e'],
                    [/* :: */0,
                     [/* tuple */0,"ç","\\c{c}"],
                     [/* :: */0,
                      [/* tuple */0,"ô","\\^o"],
                      [/* :: */0,
                       [/* tuple */0,"ö",'\\"o'],
                       [/* :: */0,
                        [/* tuple */0,"î","\\^i"],
                        [/* :: */0,
                         [/* tuple */0,"ï",'\\"i'],
                         [/* :: */0,
                          [/* tuple */0,"ù","\\`u"],
                          [/* :: */0,
                           [/* tuple */0,"û","\\^u"],
                           [/* :: */0,
                            [/* tuple */0,"%","\\%"],
                            [/* :: */0,
                             [/* tuple */0,"_","\\_"],
                             [/* :: */0,
                              [/* tuple */0,"~","\\~{}"],
                              [/* :: */0,
                               [/* tuple */0,"#","{\char35}"],
                               [/* :: */0,
                                [/* tuple */0,"->","$\\rightarrow$"],
                                [/* :: */0,
                                 [/* tuple */0,"<-","$\\leftarrow$"],
                                 [/* :: */0,
                                  [/* tuple */0,">=","$\\geq$"],
                                  [/* :: */0,
                                   [/* tuple */0,"<=","$\\leq$"],
                                   [/* :: */0,
                                    [/* tuple */0,">","$>$"],
                                    [/* :: */0,
                                     [/* tuple */0,"<","$<$"],
                                     [/* :: */0,
                                      [/* tuple */0,"=","$=$"],
                                      [/* :: */0,
                                       [/* tuple */0,"|","{\\textbar}"],
                                       [/* :: */0,
                                        [/* tuple */0,"\.\.\.","$\\ldots$"],
                                        [/* :: */0,
                                         [/* tuple */0,"&","\\&"],
                                         [/* :: */0,
                                          [/* tuple */0,"\x01b","{\\char92}"],
                                          [/* :: */0,[/* tuple */0,"\x01\x02","\x01"],/* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]),
      0,
      $$self$1[subst_strings_simple]=
      List["map"]
       (function(param)
         {return /* tuple */[0,Str["regexp"](param[1]),param[2]];},
        [/* :: */0,
         [/* tuple */0,"\x01","\x01\x02"],
         [/* :: */0,
          [/* tuple */0,"\\","\x01b"],
          [/* :: */0,
           [/* tuple */0,"{","\x01l"],
           [/* :: */0,
            [/* tuple */0,"}","{\\char125}"],
            [/* :: */0,
             [/* tuple */0,"'","{\\textquotesingle}"],
             [/* :: */0,
              [/* tuple */0,"`","{\\textasciigrave}"],
              [/* :: */0,
               [/* tuple */0,"\x01b","{\\char92}"],
               [/* :: */0,
                [/* tuple */0,"\x01l","{\\char123}"],
                [/* :: */0,[/* tuple */0,"\x01\x02","\x01"],/* [] */0]]]]]]]]]),
      0,
      $$self$1[subst_strings_code]=
      List["map"]
       (function(param)
         {return /* tuple */[0,Str["regexp"](param[1]),param[2]];},
        [/* :: */0,
         [/* tuple */0,"\x01","\x01\x02"],
         [/* :: */0,
          [/* tuple */0,"\\","\x01b"],
          [/* :: */0,
           [/* tuple */0,"{","\x01l"],
           [/* :: */0,
            [/* tuple */0,"}","{\\char125}"],
            [/* :: */0,
             [/* tuple */0,"'","{\\textquotesingle}"],
             [/* :: */0,
              [/* tuple */0,"`","{\\textasciigrave}"],
              [/* :: */0,
               [/* tuple */0,"%","\\%"],
               [/* :: */0,
                [/* tuple */0,"_","\\_"],
                [/* :: */0,
                 [/* tuple */0,"~","{\\char126}"],
                 [/* :: */0,
                  [/* tuple */0,"#","{\\char35}"],
                  [/* :: */0,
                   [/* tuple */0,"&","\\&"],
                   [/* :: */0,
                    [/* tuple */0,"\$","\\$"],
                    [/* :: */0,
                     [/* tuple */0,"\^","{\\char94}"],
                     [/* :: */0,
                      [/* tuple */0,"\x01b","{\\char92}"],
                      [/* :: */0,
                       [/* tuple */0,"\x01l","{\\char123}"],
                       [/* :: */0,[/* tuple */0,"\x01\x02","\x01"],/* [] */0]]]]]]]]]]]]]]]]),
      0;
      return $$self$1;
      };
    };

var
 text=
  CamlinternalOO["make_class"]
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
   function($$class)
    {var ids=CamlinternalOO["get_method_labels"]($$class,shared$10);
     
     var text_of_info=ids[1];
     
     var latex_of_text=ids[2];
     
     var latex_of_info=ids[3];
     
     CamlinternalOO["set_method"]
      ($$class,
       latex_of_info,
       function(self$neg2,fmt,$staropt$star,info_opt)
        {if($staropt$star)
          {var block=$staropt$star[1];}
         else
          {var block=/* false */0;}
         
         "(sendself self-2/1553 latex_of_text/1549 fmt/1554\n  (sendself self-2/1553 text_of_info/1550 (makeblock 0 block/1556)\n    info_opt/1558))";
         });
     return function(env,$$self)
      {return CamlinternalOO["create_object_opt"]($$self,$$class);};
     },
   0,
   0];

var
 latex_init=
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared$7);
    
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
    
    var $$escape=ids[61];
    
    var class_type_label=ids[62];
    
    var class_label=ids[63];
    
    var attribute_label=ids[64];
    
    var inh=CamlinternalOO["inherits"]($$class,shared$9,0,shared$4,text,1);
    
    var obj_init=inh[1];
    
    var
     inh$1=
      CamlinternalOO["inherits"]
       ($$class,shared$6,shared,shared$5,Odoc_to_text["to_text"],1);
    
    var obj_init$1=inh$1[1];
    
    var text_of_attribute=inh$1[11];
    
    var text_of_exception=inh$1[19];
    
    var text_of_method=inh$1[21];
    
    var text_of_value=inh$1[36];
    
    var inh$2=CamlinternalOO["inherits"]($$class,0,shared$2,shared$3,info,1);
    
    var obj_init$2=inh$2[1];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       first_and_rest_of_info,
       function(self$neg3,i_opt)
        {if(i_opt)
          {var match=i_opt[1][1];
           
           if(match)
            {var
              match$1=
               Odoc_info["first_sentence_and_rest_of_text"](match[1]);
             
             "(sendself self-3/1688 text_of_info/1692 [0: 0a] i_opt/1689)";
             var match$2=Odoc_info["first_sentence_and_rest_of_text"](0);
             
             return /* tuple */[0,
                     Odoc_info["text_no_title_no_list"](match$1[1]),
                     match$2[2]];
             }
           else
            {"(sendself self-3/1688 text_of_info/1692 [0: 1a] i_opt/1689)";
             return /* tuple */[0,/* [] */0,0];
             }
           }
         else
          {return [/* tuple */0,/* [] */0,/* [] */0];}
         },
       latex_of_value,
       function(self$neg3,fmt,v)
        {Odoc_info["reset_type_names"](/* () */0);
         "(sendself self-3/1696 value_label/1700 0a (field 0 v/1698))";
         
         "(sendself self-3/1696 make_label/1702 label/1699)";
         
         "(sendself self-3/1696 latex_of_text/1703 fmt/1697\n  (makeblock 0 (makeblock 14 latex/1701)\n    (apply text_of_value/1647 self-3/1696 v/1698)))";
         },
       latex_of_attribute,
       function(self$neg3,fmt,a)
        {"(sendself self-3/1706 latex_of_text/1703 fmt/1707\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1706 make_label/1702\n        (sendself self-3/1706 attribute_label/1709 0a\n          (field 0 (field 0 a/1708)))))\n    (apply text_of_attribute/1622 self-3/1706 a/1708)))";
         },
       latex_of_method,
       function(self$neg3,fmt,m)
        {"(sendself self-3/1712 latex_of_text/1703 fmt/1713\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1712 make_label/1702\n        (sendself self-3/1712 method_label/1715 0a\n          (field 0 (field 0 m/1714)))))\n    (apply text_of_method/1632 self-3/1712 m/1714)))";
         },
       latex_of_type_params,
       function(self$neg3,fmt,m_name,t)
        {var
          print_one=
           function(param)
            {ps
              (fmt,
               Odoc_info["string_of_variance"]
                (t,/* tuple */[0,param[2],param[3]]));
             "(sendself self-3/1718 normal_type/1726 m_name/1720 (field 0 param/2301))";
             return ps(fmt,0);
             };
         
         var l=t[3];
         
         if(l)
          {if(l[2])
            {ps(fmt,"(");
             print_concat(fmt,", ",print_one,t[3]);
             return ps(fmt,")");
             }
           else
            {var match=l[1];
             
             return print_one(/* tuple */[0,match[1],match[2],match[3]]);
             }
           }
         else
          {return /* () */0;}
         },
       latex_of_class_parameter_list,
       function(self$neg3,fmt,father,c)
        {"(sendself self-3/1732 latex_of_text/1703 fmt/1733\n  (sendself self-3/1732 text_of_class_params/1736 father/1734 c/1735))";
         },
       latex_of_type,
       function(self$neg3,fmt,t)
        {var s_name=Odoc_info["Name"][1](t[1]);
         
         var match=new_fmt(/* () */0);
         
         var flush2=match[2];
         
         var fmt2=match[1];
         
         Odoc_info["reset_type_names"](/* () */0);
         var mod_name=Odoc_info["Name"][5](t[1]);
         
         Format["fprintf"]
          (fmt2,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,
              [/* Format */0,
               [/* String_literal */11,"<h 2>",/* End_of_format */0],
               "<h 2>"]],
             [/* String_literal */11,"type ",/* End_of_format */0]],
            "@[<h 2>type "]);
         "(sendself self-3/1738 latex_of_type_params/1655 fmt2/1743 mod_name/1745\n  t/1740)";
         
         var match$1=t[3];
         
         if(match$1){ps(fmt2," ")}else{}
         
         ps(fmt2,s_name);
         var priv=t[5]=/* Private */0;
         
         var match$2=t[6];
         
         var exit;
         
         if(match$2)
          {var match$3=match$2[1];
           
           switch(match$3[0])
            {case 0:
              "(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 0 match/2292))";
              p
               (fmt2,
                [/* Format */0,
                 [/* String_literal */11,
                  " = ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                 " = %s%s"],
                priv?"private ":"",
                0);
             case 1:exit=84;
             }
           }
         else
          {exit=84;}
         
         switch(exit){case 84:}
         
         var match$4=t[4];
         
         var $js;
         if(typeof match$4=="number")
          {switch(match$4)
            {case 0:
              var match$5=t[6];
              
              var exit$1;
              
              if(match$5)
               {switch(match$5[1][0])
                 {case 0:exit$1=82;
                  case 1:
                   $js=
                   Pervasives["^"]
                    ("= ",Pervasives["^"](priv?"private":""," <"));
                   
                  }
                }
              else
               {exit$1=82;}
              
              switch(exit$1){case 82:$js="";}
              
             case 1:$js="= ..";
             }}
         else
          {switch(match$4[0])
            {case 0:$js=Pervasives["^"]("=",priv?" private":"");
             case 1:
              $js=
              Pervasives["^"]("= ",Pervasives["^"](priv?"private ":"","{"));
              
             }}
         p
          (fmt2,
           [/* Format */0,
            [/* Char_literal */12,
             32,
             [/* String */2,/* No_padding */0,/* End_of_format */0]],
            " %s"],
           $js);
         var s_type3=flush2(/* () */0);
         
         var
          entry_comment=
           function(param)
            {if(param)
              {ps(fmt2,"\begin{ocamldoccomment}\n");
               "(sendself self-3/1738 latex_of_info/1753 fmt2/1743 0a\n  (makeblock 0 (field 0 param/2281)))";
               
               ps(fmt2,"\n\end{ocamldoccomment}\n");
               var s=flush2(/* () */0);
               
               return /* :: */[0,/* Latex */[14,s],/* [] */0];
               }
             else
              {return /* [] */0;}
             };
         
         var match$6=t[4];
         
         if(typeof match$6=="number")
          {switch(match$6)
            {case 0:
              var match$7=t[6];
              
              var exit$2;
              
              if(match$7)
               {var match$8=match$7[1];
                
                switch(match$8[0])
                 {case 0:exit$2=73;
                  case 1:
                   var
                    fields=
                     List["map"]
                      (function(r)
                        {"(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 1 r/1758))";
                         p
                          (fmt2,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<h 6>",/* End_of_format */0],
                               "<h 6>"]],
                             [/* String_literal */11,
                              "  ",
                              [/* String */2,
                               /* No_padding */0,
                               [/* String_literal */11,
                                " :",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* String_literal */11," ;",/* End_of_format */0]]]]]]],
                            "@[<h 6>  %s :@ %s ;"],
                           r[1],
                           0);
                         var s_field=flush2(/* () */0);
                         
                         return Pervasives["@"]
                                 (/* :: */[0,/* CodePre */[2,s_field],/* [] */0],
                                  entry_comment(r[3]));
                         },
                       match$8[1]);
                   
                   var
                    defs=
                     Pervasives["@"]
                      (List["flatten"](fields),
                       [/* :: */0,[/* CodePre */2,">"],/* [] */0]);
                   
                  }
                }
              else
               {exit$2=73;}
              
              switch(exit$2){case 73:var defs=/* [] */0;}
              
             case 1:var defs=/* [] */0;
             }}
         else
          {switch(match$6[0])
            {case 0:
              var
               constructors=
                List["map"]
                 (function(constr)
                   {p
                     (fmt2,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<h 6>",/* End_of_format */0],
                          "<h 6>"]],
                        [/* String_literal */11,
                         "  | ",
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                       "@[<h 6>  | %s"],
                      constr[1]);
                    var match$9=constr[2];
                    
                    var match$10=constr[3];
                    
                    if(match$9)
                     {if(match$10)
                       {'(sendself self-3/1738 normal_type_list/1767 [0: 0a] mod_name/1745 " * "\n  match/2276)';
                        "(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 0 match/2277))";
                        p
                         (fmt2,
                          [/* Format */0,
                           [/* String_literal */11,
                            " :",
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
                                 [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]],
                           " :@ %s@ %s@ %s"],
                          0,
                          "->",
                          0)}
                      else
                       {'(sendself self-3/1738 normal_type_list/1767 [0: 0a] mod_name/1745 " * "\n  match/2276)';
                        p
                         (fmt2,
                          [/* Format */0,
                           [/* String_literal */11,
                            " of",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                           " of@ %s"],
                          0)}
                      }
                    else
                     {if(match$10)
                       {"(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 0 match/2277))";
                        p
                         (fmt2,
                          [/* Format */0,
                           [/* String_literal */11,
                            " :",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                           " :@ %s"],
                          0)}
                      else
                       {}
                      }
                    
                    var s_cons=flush2(/* () */0);
                    
                    return Pervasives["@"]
                            (/* :: */[0,/* CodePre */[2,s_cons],/* [] */0],
                             entry_comment(constr[4]));
                    },
                  match$6[1]);
              
              var defs=List["flatten"](constructors);
              
             case 1:
              var
               fields$1=
                List["map"]
                 (function(r)
                   {"(sendself self-3/1738 normal_type/1726 mod_name/1745 (field 2 r/1769))";
                    p
                     (fmt2,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<h 6>",/* End_of_format */0],
                          "<h 6>"]],
                        [/* String_literal */11,
                         "  ",
                         [/* String */2,
                          /* No_padding */0,
                          [/* String */2,
                           /* No_padding */0,
                           [/* String_literal */11,
                            " :",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11," ;",/* End_of_format */0]]]]]]]],
                       "@[<h 6>  %s%s :@ %s ;"],
                      r[2]?"mutable ":"",
                      r[1],
                      0);
                    var s_field=flush2(/* () */0);
                    
                    return Pervasives["@"]
                            (/* :: */[0,/* CodePre */[2,s_field],/* [] */0],
                             entry_comment(r[4]));
                    },
                  match$6[1]);
              
              var
               defs=
                Pervasives["@"]
                 (List["flatten"](fields$1),
                  [/* :: */0,[/* CodePre */2,"}"],/* [] */0]);
              
             }}
         
         var defs2=/* :: */[0,/* CodePre */[2,s_type3],defs];
         
         var
          iter=
           function(param)
            {if(param)
              {var e=param[1];
               
               var exit$3;
               
               if(param[2])
                {if(typeof e=="number")
                  {switch(e){}}
                 else
                  {switch(e[0])
                    {case 2:
                      var match$9=param[2];
                      
                      var match$10=match$9[1];
                      
                      if(typeof match$10=="number")
                       {switch(match$10){}}
                      else
                       {switch(match$10[0])
                         {case 2:
                           return iter
                                   (/* :: */[0,
                                     /* CodePre */[2,
                                      Pervasives["^"](e[1],Pervasives["^"]("\n",match$10[1]))],
                                     match$9[2]]);
                           
                          default:exit$3=68;}}
                      
                     default:exit$3=68;}}
                 }
               else
                {return /* :: */[0,e,/* [] */0];}
               
               switch(exit$3){case 68:return /* :: */[0,e,iter(param[2])];}
               }
             else
              {return /* [] */0;}
             };
         
         "(sendself self-3/1738 label/1779 0a s_name/1741)";
         "(sendself self-3/1738 label/1779 [0: 0a] s_name/1741)";
         "(sendself self-3/1738 text_of_info/1692 0a (field 1 t/1740))";
         var
          text$1=
           Pervasives["@"]
            (iter(defs2),
             Pervasives["@"]
              (/* :: */[0,
                /* Latex */[14,
                 Pervasives["^"]
                  ("\index{",
                   Pervasives["^"]
                    (0,Pervasives["^"]("@\verb`",Pervasives["^"](0,"`}\n"))))],
                /* [] */0],
               0));
         
         "(sendself self-3/1738 latex_of_text/1703 fmt/1739\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1738 make_label/1702\n        (sendself self-3/1738 type_label/1780 0a (field 0 t/1740))))\n    text/1742))";
         },
       latex_of_type_extension,
       function(self$neg3,mod_name,fmt,te)
        {var match=new_fmt(/* () */0);
         
         var flush2=match[2];
         
         var fmt2=match[1];
         
         Odoc_info["reset_type_names"](/* () */0);
         Format["fprintf"]
          (fmt2,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,
              [/* Format */0,
               [/* String_literal */11,"<h 2>",/* End_of_format */0],
               "<h 2>"]],
             [/* String_literal */11,"type ",/* End_of_format */0]],
            "@[<h 2>type "]);
         var l=te[3];
         
         if(l)
          {if(l[2])
            {ps(fmt2,"("),
             print_concat
              (fmt2,
               ", ",
               function(p)
                {"(sendself self-3/1782 normal_type/1726 mod_name/1783 p/1791)";
                 return ps(fmt2,0);
                 },
               l),
             ps(fmt2,") ")}
           else
            {"(sendself self-3/1782 normal_type/1726 mod_name/1783 (field 0 l/1790))";
             ps(fmt2,0);
             ps(fmt2," ")}
           }
         else
          {}
         
         "(sendself self-3/1782 relative_idents/1792 mod_name/1783 (field 1 te/1785))";
         ps(fmt2,0);
         p
          (fmt2,
           [/* Format */0,
            [/* String_literal */11,
             " +=",
             [/* String */2,/* No_padding */0,/* End_of_format */0]],
            " +=%s"],
           (te[4]=/* Private */0)?" private":"");
         var s_type3=flush2(/* () */0);
         
         var
          defs=
           List["flatten"]
            (List["map"]
              (function(x)
                {var father=Odoc_info["Name"][5](x[1]);
                 
                 p
                  (fmt2,
                   [/* Format */0,
                    [/* Formatting_gen */18,
                     [/* Open_box */1,
                      [/* Format */0,
                       [/* String_literal */11,"<h 6>",/* End_of_format */0],
                       "<h 6>"]],
                     [/* String_literal */11,
                      "  | ",
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                    "@[<h 6>  | %s"],
                   Odoc_info["Name"][1](x[1]));
                 var match$1=x[2];
                 
                 var match$2=x[3];
                 
                 if(match$1)
                  {if(match$2)
                    {'(sendself self-3/1782 normal_type_list/1767 [0: 0a] father/1796 " * "\n  match/2258)';
                     "(sendself self-3/1782 normal_type/1726 father/1796 (field 0 match/2259))";
                     p
                      (fmt2,
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
                    {'(sendself self-3/1782 normal_type_list/1767 [0: 0a] father/1796 " * "\n  match/2258)';
                     p
                      (fmt2,
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
                  {if(match$2)
                    {"(sendself self-3/1782 normal_type/1726 father/1796 (field 0 match/2259))";
                     p
                      (fmt2,
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
                 
                 var match$3=x[5];
                 
                 if(match$3)
                  {var xa=match$3[1];
                   
                   var match$4=xa[2];
                   
                   p
                    (fmt2,
                     [/* Format */0,
                      [/* String_literal */11,
                       " = ",
                       [/* String */2,/* No_padding */0,/* End_of_format */0]],
                      " = %s"],
                     match$4?match$4[1][1]:xa[1])}
                 else
                  {}
                 
                 var s_cons=flush2(/* () */0);
                 
                 "(sendself self-3/1782 make_label/1702\n  (sendself self-3/1782 extension_label/1804 0a (field 0 x/1795)))";
                 var match$5=x[7];
                 
                 if(match$5)
                  {ps(fmt2,"\begin{ocamldoccomment}\n");
                   "(sendself self-3/1782 latex_of_info/1753 fmt2/1787 0a\n  (makeblock 0 (field 0 match/2252)))";
                   
                   ps(fmt2,"\n\end{ocamldoccomment}\n");
                   var s=flush2(/* () */0);
                   
                   var $js=/* :: */[0,/* Latex */[14,s],/* [] */0];
                   }
                 else
                  {var $js=/* [] */0;}
                 return Pervasives["@"]
                         (/* :: */[0,
                           /* Latex */[14,0],
                           /* :: */[0,/* CodePre */[2,s_cons],/* [] */0]],
                          $js);
                 },
               te[5]));
         
         var defs2=/* :: */[0,/* CodePre */[2,s_type3],defs];
         
         var
          iter=
           function(param)
            {if(param)
              {var e=param[1];
               
               var exit;
               
               if(param[2])
                {if(typeof e=="number")
                  {switch(e){}}
                 else
                  {switch(e[0])
                    {case 2:
                      var match$1=param[2];
                      
                      var match$2=match$1[1];
                      
                      if(typeof match$2=="number")
                       {switch(match$2){}}
                      else
                       {switch(match$2[0])
                         {case 2:
                           return iter
                                   (/* :: */[0,
                                     /* CodePre */[2,
                                      Pervasives["^"](e[1],Pervasives["^"]("\n",match$2[1]))],
                                     match$1[2]]);
                           
                          default:exit=56;}}
                      
                     default:exit=56;}}
                 }
               else
                {return /* :: */[0,e,/* [] */0];}
               
               switch(exit){case 56:return /* :: */[0,e,iter(param[2])];}
               }
             else
              {return /* [] */0;}
             };
         
         "(sendself self-3/1782 text_of_info/1692 0a (field 0 te/1785))";
         var text$1=Pervasives["@"](iter(defs2),0);
         
         "(sendself self-3/1782 latex_of_text/1703 fmt/1784 text/1786)";
         },
       latex_of_exception,
       function(self$neg3,fmt,e)
        {Odoc_info["reset_type_names"](/* () */0);
         "(sendself self-3/1816 latex_of_text/1703 fmt/1817\n  (makeblock 0\n    (makeblock 14\n      (sendself self-3/1816 make_label/1702\n        (sendself self-3/1816 exception_label/1819 0a (field 0 e/1818))))\n    (apply text_of_exception/1630 self-3/1816 e/1818)))";
         },
       latex_of_module_parameter,
       function(self$neg3,fmt,m_name,p)
        {'(sendself self-3/1822 latex_of_text/1703 fmt/1823\n  (makeblock 0 [1: "functor ("]\n    (makeblock 0 (makeblock 1 (field 0 p/1825)) [0: [1: " : "] 0a])))';
         
         "(sendself self-3/1822 latex_of_module_type_kind/1661 fmt/1823 m_name/1824\n  (field 3 p/1825))";
         
         '(sendself self-3/1822 latex_of_text/1703 fmt/1823 [0: [1: ") -> "] 0a])';
         },
       latex_of_module_type_kind,
       function(self$neg3,fmt,father,kind)
        {switch(kind[0])
          {case 0:
            '(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  [0: [14: "\\begin{ocamldocsigend}\n"] 0a])';
            
            "(sendself self-3/1827 latex_of_module_element/1679 fmt/1828 father/1829)";
            List["iter"](0,kind[1]);
            '(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  [0: [14: "\\end{ocamldocsigend}\n"] 0a])';
            
           case 1:
            "(sendself self-3/1827 latex_of_module_parameter/1660 fmt/1828 father/1829\n  (field 0 kind/1830))";
            
            "(sendself self-3/1827 latex_of_module_type_kind/1661 fmt/1828 father/1829\n  (field 1 kind/1830))";
            
           case 2:
            "(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1827 relative_module_idents/1838 father/1829\n        (field 0 (field 0 kind/1830))))\n    0a))";
            
           case 3:
            "(sendself self-3/1827 latex_of_module_type_kind/1661 fmt/1828 father/1829\n  (field 0 kind/1830))";
            
            '(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  (makeblock 0 [1: " "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1827 relative_idents/1792 father/1829\n          (field 1 kind/1830)))\n      0a)))';
            
           case 4:
            '(sendself self-3/1827 latex_of_text/1703 fmt/1828\n  (makeblock 0 [1: "module type of "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1827 relative_idents/1792 father/1829\n          (field 0 kind/1830)))\n      0a)))';
            
           }
         },
       latex_of_module_kind,
       function(self$neg3,fmt,father,kind)
        {switch(kind[0])
          {case 0:
            '(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  [0: [14: "\\begin{ocamldocsigend}\n"] 0a])';
            
            "(sendself self-3/1840 latex_of_module_element/1679 fmt/1841 father/1842)";
            List["iter"](0,kind[1]);
            '(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  [0: [14: "\\end{ocamldocsigend}\n"] 0a])';
            
           case 1:
            "(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1840 relative_module_idents/1838 father/1842\n        (field 0 (field 0 kind/1843))))\n    0a))";
            
           case 2:
            "(sendself self-3/1840 latex_of_module_parameter/1660 fmt/1841 father/1842\n  (field 0 kind/1843))";
            
            "(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 1 kind/1843))";
            
           case 3:
            "(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 0 kind/1843))";
            
            '(sendself self-3/1840 latex_of_text/1703 fmt/1841 [0: [1: "("] 0a])';
            
            "(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 1 kind/1843))";
            
            '(sendself self-3/1840 latex_of_text/1703 fmt/1841 [0: [1: ")"] 0a])';
            
           case 4:
            "(sendself self-3/1840 latex_of_module_type_kind/1661 fmt/1841 father/1842\n  (field 0 kind/1843))";
            
            '(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0 [1: " "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1840 relative_idents/1792 father/1842\n          (field 1 kind/1843)))\n      0a)))';
            
           case 5:
            "(sendself self-3/1840 latex_of_module_kind/1662 fmt/1841 father/1842\n  (field 0 kind/1843))";
            
           case 6:
            '(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0 [1: "module type of "]\n    (makeblock 0\n      (makeblock 1\n        (sendself self-3/1840 relative_idents/1792 father/1842\n          (field 0 kind/1843)))\n      0a)))';
            
           case 7:
            "(sendself self-3/1840 latex_of_text/1703 fmt/1841\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1840 relative_idents/1792 father/1842\n        (field 0 kind/1843)))\n    0a))";
            
           }
         },
       latex_of_class_kind,
       function(self$neg3,fmt,father,kind)
        {switch(kind[0])
          {case 0:
            '(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  [0: [14: "\\begin{ocamldocobjectend}\n"] 0a])';
            
            "(sendself self-3/1857 generate_inheritance_info/1680 fmt/1858\n  (field 0 kind/1860))";
            
            "(sendself self-3/1857 latex_of_class_element/1678 fmt/1858 father/1859)";
            List["iter"](0,kind[2]);
            '(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  [0: [14: "\\end{ocamldocobjectend}\n"] 0a])';
            
           case 1:
            '(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  [0: [0: "class application not handled yet"] 0a])';
            
           case 2:
            var cco=kind[1];
            
            var l=cco[3];
            
            if(l)
             {'(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 [1: "["]\n      (sendself self-3/1857 text_of_class_type_param_expr_list/1868\n        father/1859 l/1867))\n    [0: [1: "] "] 0a]))';
              }
            else
             {}
            
            "(sendself self-3/1857 latex_of_text/1703 fmt/1858\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1857 relative_idents/1792 father/1859\n        (field 0 cco/1864)))\n    0a))";
            
           case 3:
            '(sendself self-3/1857 latex_of_text/1703 fmt/1858 [0: [1: "( "] 0a])';
            
            "(sendself self-3/1857 latex_of_class_kind/1663 fmt/1858 father/1859\n  (field 0 kind/1860))";
            
            '(sendself self-3/1857 latex_of_text/1703 fmt/1858 [0: [1: " : "] 0a])';
            
            "(sendself self-3/1857 latex_of_class_type_kind/1664 fmt/1858 father/1859\n  (field 1 kind/1860))";
            
            '(sendself self-3/1857 latex_of_text/1703 fmt/1858 [0: [1: " )"] 0a])';
            
           }
         },
       latex_of_class_type_kind,
       function(self$neg3,fmt,father,kind)
        {switch(kind[0])
          {case 0:
            '(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  [0: [14: "\\begin{ocamldocobjectend}\n"] 0a])';
            
            "(sendself self-3/1870 generate_inheritance_info/1680 fmt/1871\n  (field 0 kind/1873))";
            
            "(sendself self-3/1870 latex_of_class_element/1678 fmt/1871 father/1872)";
            List["iter"](0,kind[2]);
            '(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  [0: [14: "\\end{ocamldocobjectend}\n"] 0a])';
            
           case 1:
            var cta=kind[1];
            
            var l=cta[3];
            
            if(l)
             {'(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 [1: "["]\n      (sendself self-3/1870 text_of_class_type_param_expr_list/1868\n        father/1872 l/1877))\n    [0: [1: "] "] 0a]))';
              }
            else
             {}
            
            "(sendself self-3/1870 latex_of_text/1703 fmt/1871\n  (makeblock 0\n    (makeblock 1\n      (sendself self-3/1870 relative_idents/1792 father/1872\n        (field 0 cta/1874)))\n    0a))";
            
           }
         },
       latex_for_module_index,
       function(self$neg3,fmt,m)
        {var s_name=Odoc_info["Name"][1](m[1]);
         
         '(sendself self-3/1879 latex_of_text/1703 fmt/1880\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1879 label/1779 0a s_name/1882)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1879 label/1779 [0: 0a] s_name/1882) "`}\n")))))\n    0a))';
         },
       latex_for_module_type_index,
       function(self$neg3,fmt,mt)
        {var s_name=Odoc_info["Name"][1](mt[1]);
         
         '(sendself self-3/1884 latex_of_text/1703 fmt/1885\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1884 label/1779 0a s_name/1887)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1884 label/1779 [0: 0a]\n                (apply (field 0 (field 2 (global Odoc_info!))) s_name/1887))\n              "`}\n")))))\n    0a))';
         },
       latex_for_module_label,
       function(self$neg3,fmt,m)
        {"(sendself self-3/1889 make_label/1702\n  (sendself self-3/1889 module_label/1892 0a (field 0 m/1891)))";
         return ps(fmt,0);
         },
       latex_for_module_type_label,
       function(self$neg3,fmt,mt)
        {"(sendself self-3/1894 make_label/1702\n  (sendself self-3/1894 module_type_label/1897 0a (field 0 mt/1896)))";
         return ps(fmt,0);
         },
       latex_for_class_index,
       function(self$neg3,fmt,c)
        {var s_name=Odoc_info["Name"][1](c[1]);
         
         '(sendself self-3/1899 latex_of_text/1703 fmt/1900\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1899 label/1779 0a s_name/1902)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1899 label/1779 [0: 0a] s_name/1902) "`}\n")))))\n    0a))';
         },
       latex_for_class_type_index,
       function(self$neg3,fmt,ct)
        {var s_name=Odoc_info["Name"][1](ct[1]);
         
         '(sendself self-3/1904 latex_of_text/1703 fmt/1905\n  (makeblock 0\n    (makeblock 14\n      (apply (field 15 (global Pervasives!)) "\\index{"\n        (apply (field 15 (global Pervasives!))\n          (sendself self-3/1904 label/1779 0a s_name/1907)\n          (apply (field 15 (global Pervasives!)) "@\\verb`"\n            (apply (field 15 (global Pervasives!))\n              (sendself self-3/1904 label/1779 [0: 0a] s_name/1907) "`}\n")))))\n    0a))';
         },
       latex_for_class_label,
       function(self$neg3,fmt,c)
        {"(sendself self-3/1909 make_label/1702\n  (sendself self-3/1909 class_label/1912 0a (field 0 c/1911)))";
         return ps(fmt,0);
         },
       latex_for_class_type_label,
       function(self$neg3,fmt,ct)
        {"(sendself self-3/1914 make_label/1702\n  (sendself self-3/1914 class_type_label/1917 0a (field 0 ct/1916)))";
         return ps(fmt,0);
         },
       latex_of_module,
       function(self$neg3,fmt,m)
        {var father=Odoc_info["Name"][5](m[1]);
         
         var
          t=
           /* :: */[0,
            [/* Latex */14,"\begin{ocamldoccode}\n"],
            /* :: */[0,
             [/* Code */1,"module "],
             /* :: */[0,
              /* Code */[1,Odoc_info["Name"][1](m[1])],
              [/* :: */0,[/* Code */1," : "],/* [] */0]]]];
         
         "(sendself self-3/1919 latex_of_text/1703 fmt/1920 t/1923)";
         
         '(sendself self-3/1919 latex_of_text/1703 fmt/1920\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
         
         "(sendself self-3/1919 latex_for_module_label/1667 fmt/1920 m/1921)";
         
         "(sendself self-3/1919 latex_for_module_index/1665 fmt/1920 m/1921)";
         
         p
          (fmt,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,
              [/* Format */0,
               [/* String_literal */11,"<h 4>",/* End_of_format */0],
               "<h 4>"]],
             /* End_of_format */0],
            "@[<h 4>"]);
         "(sendself self-3/1919 latex_of_module_kind/1662 fmt/1920 father/1922\n  (field 5 m/1921))";
         
         var match=Odoc_info["Module"][14](m);
         
         if(match!=0)
          {"(sendself self-3/1919 latex_of_text/1703 fmt/1920 [0: 0a 0a])";
           
           var
            l=
             List["filter"]
              (function(param){return param[2]!=/* None */0;},
               Odoc_info["Module"][15]([/* Some */0,/* false */0],m));
           
           if(l)
            {var
              t$1=
               /* :: */[0,
                [/* Bold */4,
                 [/* :: */0,[/* Raw */0,"Parameters: "],/* [] */0]],
                /* :: */[0,
                 /* List */[10,
                  List["map"]
                   (function(param)
                     {var text_opt=param[2];
                      
                      if(text_opt){var t$2=text_opt[1];}else{var t$2=/* [] */0;}
                      
                      return /* :: */[0,
                              /* Raw */[0,param[1][1]],
                              /* :: */[0,[/* Raw */0,": "],t$2]];
                      },
                    l)],
                 /* [] */0]];
             
             "(sendself self-3/1919 latex_of_text/1703 fmt/1920 t/1926)";
             }
           else
            {}
           }
         else
          {}
         
         "(sendself self-3/1919 latex_of_text/1703 fmt/1920 [0: 0a 0a])";
         
         "(sendself self-3/1919 latex_of_info/1753 fmt/1920 [0: 1a] (field 2 m/1921))";
         
         return p
                 (fmt,
                  [/* Format */0,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0],
                   "@]"]);
         },
       latex_of_module_type,
       function(self$neg3,fmt,mt)
        {var father=Odoc_info["Name"][5](mt[1]);
         
         var
          t=
           /* :: */[0,
            [/* Latex */14,"\begin{ocamldoccode}\n"],
            /* :: */[0,
             [/* Code */1,"module type "],
             /* :: */[0,/* Code */[1,Odoc_info["Name"][1](mt[1])],/* [] */0]]];
         
         "(sendself self-3/1932 latex_of_text/1703 fmt/1933 t/1936)";
         
         var match=mt[3];
         
         var match$1=mt[6];
         
         var exit;
         
         if(match)
          {if(match$1)
            {'(sendself self-3/1932 latex_of_text/1703 fmt/1933 [0: [1: " = "] 0a])';
             
             '(sendself self-3/1932 latex_of_text/1703 fmt/1933\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
             
             "(sendself self-3/1932 latex_for_module_type_label/1668 fmt/1933 mt/1934)";
             
             "(sendself self-3/1932 latex_for_module_type_index/1666 fmt/1933 mt/1934)";
             
             p
              (fmt,
               [/* Format */0,
                [/* Formatting_gen */18,
                 [/* Open_box */1,
                  [/* Format */0,
                   [/* String_literal */11,"<h 4>",/* End_of_format */0],
                   "<h 4>"]],
                 /* End_of_format */0],
                "@[<h 4>"]);
             "(sendself self-3/1932 latex_of_module_type_kind/1661 fmt/1933 father/1935\n  (field 0 match/2214))";
             }
           else
            {exit=42;}
           }
         else
          {exit=42;}
         
         switch(exit)
          {case 42:
            '(sendself self-3/1932 latex_of_text/1703 fmt/1933\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
            
            "(sendself self-3/1932 latex_for_module_type_index/1666 fmt/1933 mt/1934)";
            
            p
             (fmt,
              [/* Format */0,
               [/* Formatting_gen */18,
                [/* Open_box */1,
                 [/* Format */0,
                  [/* String_literal */11,"<h 4>",/* End_of_format */0],
                  "<h 4>"]],
                /* End_of_format */0],
               "@[<h 4>"])
           }
         
         var match$2=Odoc_info["Module"][29](mt);
         
         if(match$2!=0)
          {"(sendself self-3/1932 latex_of_text/1703 fmt/1933 [0: 0a 0a])";
           
           var
            l=
             List["filter"]
              (function(param){return param[2]!=/* None */0;},
               Odoc_info["Module"][30]([/* Some */0,/* false */0],mt));
           
           if(l)
            {var
              t$1=
               /* :: */[0,
                [/* Bold */4,
                 [/* :: */0,[/* Raw */0,"Parameters: "],/* [] */0]],
                /* :: */[0,
                 /* List */[10,
                  List["map"]
                   (function(param)
                     {var text_opt=param[2];
                      
                      if(text_opt){var t$2=text_opt[1];}else{var t$2=/* [] */0;}
                      
                      return /* :: */[0,
                              /* Raw */[0,param[1][1]],
                              /* :: */[0,[/* Raw */0,": "],t$2]];
                      },
                    l)],
                 /* [] */0]];
             
             "(sendself self-3/1932 latex_of_text/1703 fmt/1933 t/1941)";
             }
           else
            {}
           }
         else
          {}
         
         "(sendself self-3/1932 latex_of_text/1703 fmt/1933 [0: 0a 0a])";
         
         "(sendself self-3/1932 latex_of_info/1753 fmt/1933 [0: 1a] (field 1 mt/1934))";
         
         return p
                 (fmt,
                  [/* Format */0,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0],
                   "@]"]);
         },
       latex_of_included_module,
       function(self$neg3,fmt,im)
        {'(sendself self-3/1947 latex_of_text/1703 fmt/1948\n  (makeblock 0 [1: "include "]\n    (makeblock 0\n      (makeblock 1\n        (let (match/2202 = (field 1 im/1949))\n          (if match/2202 (field 0 (field 0 (field 0 match/2202)))\n            (field 0 im/1949))))\n      (sendself self-3/1947 text_of_info/1692 0a (field 2 im/1949)))))';
         },
       latex_of_class,
       function(self$neg3,fmt,c)
        {Odoc_info["reset_type_names"](/* () */0);
         var father=Odoc_info["Name"][5](c[1]);
         
         var l=c[4];
         
         if(l)
          {"(sendself self-3/1953 normal_class_type_param_list/1959 father/1956 l/1958)";
           var type_params=Pervasives["^"](0," ");
           }
         else
          {var type_params="";}
         
         var
          t=
           /* :: */[0,
            [/* Latex */14,"\begin{ocamldoccode}\n"],
            /* :: */[0,
             /* Code */[1,
              Printf["sprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "class ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11," : ",/* End_of_format */0]]]]],
                 "class %s%s%s : "],
                c[5]?"virtual ":"",
                type_params,
                Odoc_info["Name"][1](c[1]))],
             /* [] */0]];
         
         "(sendself self-3/1953 latex_of_text/1703 fmt/1954 t/1960)";
         
         "(sendself self-3/1953 latex_of_class_parameter_list/1656 fmt/1954 father/1956\n  c/1955)";
         
         var match=c[6];
         
         switch(match[0])
          {case 2:
            "(sendself self-3/1953 latex_of_class_kind/1663 fmt/1954 father/1956\n  (field 5 c/1955))";
            
           default:}
         
         '(sendself self-3/1953 latex_of_text/1703 fmt/1954\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
         
         "(sendself self-3/1953 latex_for_class_label/1671 fmt/1954 c/1955)";
         
         "(sendself self-3/1953 latex_for_class_index/1669 fmt/1954 c/1955)";
         
         p
          (fmt,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,
              [/* Format */0,
               [/* String_literal */11,"<h 4>",/* End_of_format */0],
               "<h 4>"]],
             /* End_of_format */0],
            "@[<h 4>"]);
         var match$1=c[6];
         
         switch(match$1[0])
          {case 2:
           default:
            "(sendself self-3/1953 latex_of_class_kind/1663 fmt/1954 father/1956\n  (field 5 c/1955))";
            }
         
         "(sendself self-3/1953 latex_of_text/1703 fmt/1954 [0: 0a 0a])";
         
         "(sendself self-3/1953 latex_of_info/1753 fmt/1954 [0: 1a] (field 1 c/1955))";
         
         return p
                 (fmt,
                  [/* Format */0,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0],
                   "@]"]);
         },
       latex_of_class_type,
       function(self$neg3,fmt,ct)
        {Odoc_info["reset_type_names"](/* () */0);
         var father=Odoc_info["Name"][5](ct[1]);
         
         var l=ct[4];
         
         if(l)
          {"(sendself self-3/1962 normal_class_type_param_list/1959 father/1965 l/1967)";
           var type_params=Pervasives["^"](0," ");
           }
         else
          {var type_params="";}
         
         var
          t=
           /* :: */[0,
            [/* Latex */14,"\begin{ocamldoccode}\n"],
            /* :: */[0,
             /* Code */[1,
              Printf["sprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "class type ",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11," = ",/* End_of_format */0]]]]],
                 "class type %s%s%s = "],
                ct[5]?"virtual ":"",
                type_params,
                Odoc_info["Name"][1](ct[1]))],
             /* [] */0]];
         
         "(sendself self-3/1962 latex_of_text/1703 fmt/1963 t/1968)";
         
         '(sendself self-3/1962 latex_of_text/1703 fmt/1963\n  [0: [14: "\\end{ocamldoccode}\n"] 0a])';
         
         "(sendself self-3/1962 latex_for_class_type_label/1672 fmt/1963 ct/1964)";
         
         "(sendself self-3/1962 latex_for_class_type_index/1670 fmt/1963 ct/1964)";
         
         p
          (fmt,
           [/* Format */0,
            [/* Formatting_gen */18,
             [/* Open_box */1,
              [/* Format */0,
               [/* String_literal */11,"<h 4>",/* End_of_format */0],
               "<h 4>"]],
             /* End_of_format */0],
            "@[<h 4>"]);
         "(sendself self-3/1962 latex_of_class_type_kind/1664 fmt/1963 father/1965\n  (field 5 ct/1964))";
         
         "(sendself self-3/1962 latex_of_text/1703 fmt/1963 [0: 0a 0a])";
         
         "(sendself self-3/1962 latex_of_info/1753 fmt/1963 [0: 1a] (field 1 ct/1964))";
         
         return p
                 (fmt,
                  [/* Format */0,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0],
                   "@]"]);
         },
       latex_of_class_element,
       function(self$neg3,fmt,class_name,class_ele)
        {"(sendself self-3/1970 latex_of_text/1703 fmt/1971 [0: 0a 0a])";
         
         switch(class_ele[0])
          {case 0:
            "(sendself self-3/1970 latex_of_attribute/1653 fmt/1971\n  (field 0 class_ele/1973))";
            
           case 1:
            "(sendself self-3/1970 latex_of_method/1654 fmt/1971 (field 0 class_ele/1973))";
            
           case 2:
            var t=class_ele[1];
            
            var exit;
            
            if(t)
             {var $js=t[1];
              if(typeof $js=="number")
               {switch($js){}}
              else
               {switch($js[0])
                 {case 13:
                   "(sendself self-3/1970 latex_of_text/1703 fmt/1971 t/1976)";
                  default:exit=28;}}
              }
            else
             {return /* () */0;}
            
            switch(exit)
             {case 28:
               "(sendself self-3/1970 latex_of_text/1703 fmt/1971\n  (makeblock 0\n    (makeblock 13\n      (+ (apply (field 2 (field 2 (global Odoc_info!))) class_name/1972) 2)\n      0a t/1976)\n    0a))";
               
              }
            
           }
         },
       latex_of_module_element,
       function(self$neg3,fmt,module_name,module_ele)
        {"(sendself self-3/1978 latex_of_text/1703 fmt/1979 [0: 0a 0a])";
         
         switch(module_ele[0])
          {case 0:
            "(sendself self-3/1978 latex_of_module/1673 fmt/1979\n  (field 0 module_ele/1981))";
            
           case 1:
            "(sendself self-3/1978 latex_of_module_type/1674 fmt/1979\n  (field 0 module_ele/1981))";
            
           case 2:
            "(sendself self-3/1978 latex_of_included_module/1675 fmt/1979\n  (field 0 module_ele/1981))";
            
           case 3:
            "(sendself self-3/1978 latex_of_class/1676 fmt/1979 (field 0 module_ele/1981))";
            
           case 4:
            "(sendself self-3/1978 latex_of_class_type/1677 fmt/1979\n  (field 0 module_ele/1981))";
            
           case 5:
            "(sendself self-3/1978 latex_of_value/1652 fmt/1979 (field 0 module_ele/1981))";
            
           case 6:
            "(sendself self-3/1978 latex_of_type_extension/1658 module_name/1980 fmt/1979\n  (field 0 module_ele/1981))";
            
           case 7:
            "(sendself self-3/1978 latex_of_exception/1659 fmt/1979\n  (field 0 module_ele/1981))";
            
           case 8:
            "(sendself self-3/1978 latex_of_type/1657 fmt/1979 (field 0 module_ele/1981))";
            
           case 9:
            "(sendself self-3/1978 latex_of_text/1703 fmt/1979 (field 0 module_ele/1981))";
            
           }
         },
       generate_inheritance_info,
       function(self$neg3,fmt,inher_l)
        {var
          f=
           function(inh)
            {var match=inh[2];
             
             if(match)
              {switch(match[1][0])
                {case 0:
                  "(sendself self-3/1993 class_label/1912 0a (field 0 inh/1997))";
                  
                 case 1:
                  "(sendself self-3/1993 class_type_label/1917 0a (field 0 inh/1997))";
                  
                 }
               
               "(sendself self-3/1993 make_ref/2001 label/2000)";
               var match$1=inh[3];
               
               return /* :: */[0,
                       /* Newline */0,
                       /* :: */[0,
                        /* Code */[1,Pervasives["^"]("inherit ",inh[1])],
                        /* :: */[0,
                         /* Latex */[14,Pervasives["^"](" [",Pervasives["^"](0,"]"))],
                         match$1?/* :: */[0,/* Newline */0,match$1[1]]:/* [] */0]]];
               }
             else
              {var match$2=inh[3];
               
               return /* :: */[0,
                       /* Newline */0,
                       /* :: */[0,
                        /* Code */[1,Pervasives["^"]("inherit ",inh[1])],
                        match$2?/* :: */[0,/* Newline */0,match$2[1]]:/* [] */0]];
               }
             };
         
         "(sendself self-3/1993 latex_of_text/1703 fmt/1994)";
         return List["iter"](0,List["map"](f,inher_l));
         },
       generate_class_inheritance_info,
       function(self$neg3,fmt,cl)
        {var
          iter_kind=
           function(k)
            {var exit;
             
             switch(k[0])
              {case 0:
                var l=k[1];
                
                if(l)
                 {"(sendself self-3/2004 generate_inheritance_info/1680 fmt/2005 l/2009)";
                  }
                else
                 {return /* () */0;}
                
               case 1:exit=24;
               case 2:exit=24;
               case 3:return iter_kind(k[1]);
               }
             
             switch(exit){case 24:return /* () */0;}
             };
         
         return iter_kind(cl[6]);
         },
       generate_class_type_inheritance_info,
       function(self$neg3,fmt,clt)
        {var match=clt[6];
         
         switch(match[0])
          {case 0:
            var l=match[1];
            
            if(l)
             {"(sendself self-3/2012 generate_inheritance_info/1680 fmt/2013 l/2015)";
              }
            else
             {return /* () */0;}
            
           case 1:return /* () */0;
           }
         },
       generate_for_top_module,
       function(self$neg3,fmt,m)
        {"(sendself self-3/2017 first_and_rest_of_info/1651 (field 2 m/2019))";
         
         var first_t=match[1];
         
         if(m[11])
          {var
            text$1=
             /* :: */[0,
              /* Title */[13,
               1,
               /* None */0,
               Pervasives["@"]
                (/* :: */[0,/* Raw */[0,m[1]],/* [] */0],
                 first_t?/* :: */[0,[/* Raw */0," : "],first_t]:/* [] */0)],
              /* [] */0];
           }
         else
          {var
            text$1=
             /* :: */[0,
              /* Title */[13,
               1,
               /* None */0,
               Pervasives["@"]
                (/* :: */[0,
                  /* Raw */[0,Pervasives["^"](Odoc_messages["modul"]," ")],
                  /* :: */[0,/* Code */[1,m[1]],/* [] */0]],
                 first_t?/* :: */[0,[/* Raw */0," : "],first_t]:/* [] */0)],
              /* [] */0];
           }
         
         "(sendself self-3/2017 latex_of_text/1703 fmt/2018 text/2022)";
         
         "(sendself self-3/2017 latex_for_module_label/1667 fmt/2018 m/2019)";
         
         "(sendself self-3/2017 latex_for_module_index/1665 fmt/2018 m/2019)";
         
         "(sendself self-3/2017 latex_of_text/1703 fmt/2018 (field 1 match/2155))";
         
         "(sendself self-3/2017 latex_of_text/1703 fmt/2018 [0: 0a 0a])";
         
         if(!m[11]){ps(fmt,"\ocamldocvspace{0.5cm}\n\n")}else{}
         
         return List["iter"]
                 (function(ele)
                   {"(sendself self-3/2017 latex_of_module_element/1679 fmt/2018 (field 0 m/2019)\n  ele/2025)";
                    
                    return ps(fmt,"\n\n");
                    },
                  Odoc_info["Module"][1]([/* Some */0,/* false */0],m));
         },
       latex_header,
       function(self$neg3,fmt,module_list)
        {ps(fmt,"\documentclass[11pt]{article} \n");
         ps(fmt,"\usepackage[latin1]{inputenc} \n");
         ps(fmt,"\usepackage[T1]{fontenc} \n");
         ps(fmt,"\usepackage{textcomp}\n");
         ps(fmt,"\usepackage{fullpage} \n");
         ps(fmt,"\usepackage{url} \n");
         ps(fmt,"\usepackage{ocamldoc}\n");
         var match=Odoc_info["Global"][6][1];
         
         if(match)
          {ps(fmt,"\title{");
           "(sendself self-3/2027 escape/2031 (field 0 match/2151))";
           ps(fmt,0);
           ps(fmt,"}\n")}
         else
          {}
         
         ps(fmt,"\begin{document}\n");
         var match$1=Odoc_info["Global"][6][1];
         
         if(match$1){ps(fmt,"\maketitle\n")}else{}
         
         if(Odoc_info["Global"][8][1]){ps(fmt,"\tableofcontents\n")}else{}
         
         var
          info$1=
           Odoc_info["apply_opt"]
            (Odoc_info["info_of_comment_file"](module_list),
             Odoc_info["Global"][7][1]);
         
         if(info$1){ps(fmt,"\vspace{0.2cm}")}else{}
         
         "(sendself self-3/2027 latex_of_info/1753 fmt/2028 0a info/2032)";
         
         if(info$1){return ps(fmt,"\n\n");}else{return /* () */0;}
         },
       generate_style_file,
       function(self$neg3)
        {try
          {var dir=Filename["dirname"](Odoc_info["Global"][3][1]);
           
           var file=Filename["concat"](dir,"ocamldoc.sty");
           
           if(CamlPrimtivie["caml_sys_file_exists"](file))
            {return Odoc_info["verbose"]
                     (Odoc_messages["file_exists_dont_generate"](file));
             }
           else
            {var chanout=Pervasives["open_out"](file);
             
             Pervasives["output_string"](chanout,Odoc_latex_style["content"]);
             Pervasives["flush"](chanout);
             Pervasives["close_out"](chanout);
             return Odoc_info["verbose"]
                     (Odoc_messages["file_generated"](file));
             }
           }
         catch(exn)
          {if(exn[1]=Sys_error)
            {Pervasives["prerr_endline"](exn[2]);
             return Odoc_info["errors"][0]++;
             }
           else
            {throw exn;}
           }
         },
       generate,
       function(self$neg3,module_list)
        {"(sendself self-3/2040 generate_style_file/1685)";
         
         var main_file=Odoc_info["Global"][3][1];
         
         var dir=Filename["dirname"](main_file);
         
         if(separate_files[1])
          {var
            f=
             function(m)
              {try
                {var
                  chanout=
                   Pervasives["open_out"]
                    (Pervasives["^"]
                      (Filename["concat"](dir,Odoc_info["Name"][1](m[1])),".tex"));
                 
                 var fmt=Format["formatter_of_out_channel"](chanout);
                 
                 "(sendself self-3/2040 generate_for_top_module/1683 fmt/2047 m/2045)";
                 
                 Format["pp_print_flush"](fmt,/* () */0);
                 return Pervasives["close_out"](chanout);
                 }
               catch(exn)
                {var exit;
                 
                 if(exn[1]=Failure)
                  {var s=exn[2];exit=7;}
                 else
                  {if(exn[1]=Sys_error){var s=exn[2];exit=7;}else{throw exn;}}
                 
                 switch(exit)
                  {case 7:
                    Pervasives["prerr_endline"](s);
                    return Odoc_info["errors"][0]++;
                    
                   }
                 }
               };
           
           List["iter"](f,module_list)}
         else
          {}
         
         try
          {var chanout=Pervasives["open_out"](main_file);
           
           var fmt=Format["formatter_of_out_channel"](chanout);
           
           if(Odoc_info["Global"][10][1])
            {"(sendself self-3/2040 latex_header/1684 fmt/2051 module_list/2041)";
             }
           else
            {}
           
           List["iter"]
            (function(m)
              {if(separate_files[1])
                {return ps
                         (fmt,
                          Pervasives["^"]
                           ("\input{",
                            Pervasives["^"](Odoc_info["Name"][1](m[1]),".tex}\n")));
                 }
               else
                {"(sendself self-3/2040 generate_for_top_module/1683 fmt/2051 m/2052)";
                 }
               },
             module_list);
           if(Odoc_info["Global"][11][1]){ps(fmt,"\end{document}")}else{}
           
           Format["pp_print_flush"](fmt,/* () */0);
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {var exit;
           
           if(exn[1]=Failure)
            {var s=exn[2];exit=2;}
           else
            {if(exn[1]=Sys_error){var s=exn[2];exit=2;}else{throw exn;}}
           
           switch(exit)
            {case 2:
              Pervasives["prerr_endline"](s);return Odoc_info["errors"][0]++;
             }
           }
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1),obj_init$1($$self$1),obj_init$2($$self$1);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 latex=
  CamlinternalOO["make_class"]
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

