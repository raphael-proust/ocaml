// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var CamlinternalOO=require("./camlinternalOO.js");
var Odoc_info=require("./odoc_info.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Odoc_to_text=require("./odoc_to_text.js");
var Printf=require("./printf.js");
var Filename=require("./filename.js");
var Bytes=require("./bytes.js");
var Str=require("./str.js");
var Hashtbl=require("./hashtbl.js");
var Odoc_messages=require("./odoc_messages.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 shared=
  [0,
   "escape",
   "fixedblock",
   "heading",
   "label",
   "texi_of_Block",
   "texi_of_Bold",
   "texi_of_Center",
   "texi_of_Code",
   "texi_of_CodePre",
   "texi_of_Emphasize",
   "texi_of_Enum",
   "texi_of_Italic",
   "texi_of_Left",
   "texi_of_Link",
   "texi_of_List",
   "texi_of_Newline",
   "texi_of_Raw",
   "texi_of_Ref",
   "texi_of_Right",
   "texi_of_Subscript",
   "texi_of_Superscript",
   "texi_of_Target",
   "texi_of_Title",
   "texi_of_Verbatim",
   "texi_of_custom_text",
   "texi_of_text",
   "texi_of_text_element"];

var shared$1=[0,"titles","headings","fallback_title","fallback_heading"];

var shared$2=[0,"label"];

var
 shared$3=
  [0,
   "text_of_version_opt",
   "text_of_since_opt",
   "text_of_short_type_expr",
   "text_of_sees_opt",
   "text_of_return_opt",
   "text_of_raised_exceptions",
   "text_of_params",
   "text_of_info",
   "text_of_desc",
   "text_of_custom",
   "text_of_before",
   "text_of_author_list",
   "text_el_of_type_expr",
   "texi_of_value",
   "texi_of_type_extension",
   "texi_of_type",
   "texi_of_text",
   "texi_of_module_type",
   "texi_of_module_element",
   "texi_of_module",
   "texi_of_method",
   "texi_of_info",
   "texi_of_included_module",
   "texi_of_exception",
   "texi_of_class_type",
   "texi_of_class_element",
   "texi_of_class",
   "texi_of_attribute",
   "string_of_type_parameters",
   "string_of_type_args",
   "soft_fix_linebreaks",
   "scan_for_index_in_mod",
   "scan_for_index_in_class",
   "scan_for_index",
   "relative_idents",
   "normal_type",
   "node",
   "index",
   "heading",
   "generate_texi_trailer",
   "generate_texi_header",
   "generate_inheritance_info",
   "generate_for_module_type",
   "generate_for_module",
   "generate_for_class_type",
   "generate_for_class",
   "generate_class_type_inheritance_info",
   "generate_class_inheritance_info",
   "generate",
   "fixedblock",
   "fix_linebreaks",
   "escape",
   "do_index"];

var
 shared$4=
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

var shared$5=[0,"tag_functions"];

var
 shared$6=
  [0,"maxdepth","bullet","minus","linebreak","indices_to_build","node_tbl"];

var
 shared$7=
  [0,
   "texi_of_text_element",
   "texi_of_text",
   "texi_of_custom_text",
   "texi_of_Verbatim",
   "texi_of_Title",
   "texi_of_Target",
   "texi_of_Superscript",
   "texi_of_Subscript",
   "texi_of_Right",
   "texi_of_Ref",
   "texi_of_Raw",
   "texi_of_Newline",
   "texi_of_List",
   "texi_of_Link",
   "texi_of_Left",
   "texi_of_Italic",
   "texi_of_Enum",
   "texi_of_Emphasize",
   "texi_of_CodePre",
   "texi_of_Code",
   "texi_of_Center",
   "texi_of_Bold",
   "texi_of_Block",
   "label",
   "heading",
   "fixedblock",
   "escape"];

var shared$8=[0,"titles","fallback_title","headings","fallback_heading"];

var esc_8bits=[0,/* false */0];

var info_section=[0,"OCaml"];

var info_entry=[0,/* [] */0];

var
 puts_nl=
  function(chan,s)
   {Pervasives["output_string"](chan,s);
    return Pervasives["output_char"](chan,10);
    };

var puts=function(chan,s){return Pervasives["output_string"](chan,s);};

var nl=function(chan){return Pervasives["output_char"](chan,10);};

var
 is=
  function(param){if(param){return /* true */1;}else{return /* false */0;}};

var
 pad_to=
  function(n,s)
   {var len=s["length"];
    
    if(len<n)
     {return Pervasives["^"](s,$$String["make"](n-len,32));}
    else
     {return s;}
    };

var
 indent=
  function(nb_sp,s)
   {var c=0;
    
    var len=-1+s["length"];
    
    for(var i=0;i<=len;i++){if(s[i]===10){c=1+c;}else{}}
    
    var s$prime=Bytes["make"](1+len+(1+c)*nb_sp,32);
    
    c=nb_sp;
    
    for(var i$1=0;i$1<=len;i$1++)
     {s$prime[c]=s[i$1];if(s[i$1]===10){c=c+nb_sp;}else{}c=1+c;}
    
    return Bytes["to_string"](s$prime);
    };

var nothing=[/* Verbatim */3,""];

var
 iter=
  function(acc,param)
   {if(param)
     {var match=param[1];
      
      switch(match[0])
       {case 0:
         var m=match[1];
         
         var match$1=m[6];
         
         switch(match$1[0])
          {case 1:return iter(acc,param[2]);
           default:
            return iter
                    (/* :: */[0,/* `Module */[0,-177755956,m],acc],param[2]);
            }
         
        case 1:
         var mt=match[1];
         
         var match$2=mt[6];
         
         var exit;
         
         if(match$2)
          {switch(match$2[1][0])
            {case 2:return iter(acc,param[2]);default:exit=113;}
           }
         else
          {exit=113;}
         
         switch(exit)
          {case 113:
            return iter
                    (/* :: */[0,/* `Module_type */[0,448725581,mt],acc],
                     param[2]);
            
           }
         
        case 3:
         return iter
                 (/* :: */[0,/* `Class */[0,-611981288,match[1]],acc],
                  param[2]);
         
        case 4:
         return iter
                 (/* :: */[0,/* `Class_type */[0,649842561,match[1]],acc],
                  param[2]);
         
        default:return iter(acc,param[2]);}
      }
    else
     {return List["rev"](acc);}
    };

var module_subparts=iter(/* [] */0);

var
 indices=
  function(param)
   {if(param>=156047674)
     {if(param!==448725581)
       {if(param>=937565914)
         {if(param>=1039100673){return "me";}else{return "ty";}}
        else
         {if(param>=649842561){return "ct";}else{return "ca";}}
        }
      else
       {return "mt";}
      }
    else
     {if(param!==-611981288)
       {if(param>=-177755956)
         {if(param>=115569503){return "xt";}else{return "mo";}}
        else
         {if(param>=-345182161){return "ex";}else{return "va";}}
        }
      else
       {return "cl";}
      }
    };

var
 indices_names=
  [/* :: */0,
   [/* tuple */0,"Types","ty"],
   [/* :: */0,
    [/* tuple */0,"Extensions","xt"],
    [/* :: */0,
     [/* tuple */0,"Exceptions","ex"],
     [/* :: */0,
      [/* tuple */0,"Values","va"],
      [/* :: */0,
       [/* tuple */0,"Class attributes","ca"],
       [/* :: */0,
        [/* tuple */0,"Methods","me"],
        [/* :: */0,
         [/* tuple */0,"Classes","cl"],
         [/* :: */0,
          [/* tuple */0,"Class types","ct"],
          [/* :: */0,
           [/* tuple */0,"Modules","mo"],
           [/* :: */0,[/* tuple */0,"Module types","mt"],/* [] */0]]]]]]]]]];

var
 subst_strings=
  Pervasives["@"]
   (/* :: */[0,
     /* tuple */[0,Str["regexp"]("@"),"@@"],
     /* :: */[0,
      /* tuple */[0,Str["regexp"]("{"),"@{"],
      /* :: */[0,
       /* tuple */[0,Str["regexp"]("}"),"@}"],
       /* :: */[0,/* tuple */[0,Str["regexp"]("\.\.\."),"@dots{}"],/* [] */0]]]],
    esc_8bits[1]
     ?/* :: */[0,
       /* tuple */[0,Str["regexp"]("à"),"@`a"],
       /* :: */[0,
        /* tuple */[0,Str["regexp"]("â"),"@^a"],
        /* :: */[0,
         /* tuple */[0,Str["regexp"]("é"),"@'e"],
         /* :: */[0,
          /* tuple */[0,Str["regexp"]("è"),"@`e"],
          /* :: */[0,
           /* tuple */[0,Str["regexp"]("ê"),"@^e"],
           /* :: */[0,
            /* tuple */[0,Str["regexp"]("ë"),'@"e'],
            /* :: */[0,
             /* tuple */[0,Str["regexp"]("÷"),"@,{c}"],
             /* :: */[0,
              /* tuple */[0,Str["regexp"]("ô"),"@^o"],
              /* :: */[0,
               /* tuple */[0,Str["regexp"]("ö"),'@"o'],
               /* :: */[0,
                /* tuple */[0,Str["regexp"]("î"),"@^i"],
                /* :: */[0,
                 /* tuple */[0,Str["regexp"]("ï"),'@"i'],
                 /* :: */[0,
                  /* tuple */[0,Str["regexp"]("ù"),"@`u"],
                  /* :: */[0,
                   /* tuple */[0,Str["regexp"]("û"),"@^u"],
                   /* :: */[0,
                    /* tuple */[0,Str["regexp"]("æ"),"@ae{}"],
                    /* :: */[0,
                     /* tuple */[0,Str["regexp"]("Æ"),"@AE{}"],
                     /* :: */[0,
                      /* tuple */[0,Str["regexp"]("ß"),"@ss{}"],
                      /* :: */[0,
                       /* tuple */[0,Str["regexp"]("©"),"@copyright{}"],
                       /* [] */0]]]]]]]]]]]]]]]]]
     :/* [] */0);

var
 $$escape=
  function(s)
   {return List["fold_left"]
            (function(acc,param)
              {return Str["global_replace"](param[1],param[2],acc);},
             s,
             subst_strings);
    };

var
 fix_nodename=
  function(s)
   {return Str["global_replace"](Str["regexp"]("\."),"/",$$escape(s));};

var
 generate_menu=
  function(chan,subpart_list)
   {if(subpart_list!==/* [] */0)
     {var
       menu_line=
        function(part_qual,name)
         {var sname=Odoc_info["Name"][1](name);
          
          if(CamlPrimitive["caml_string_equal"](sname,name))
           {puts
             (chan,
              pad_to(35,Pervasives["^"]("* ",Pervasives["^"](sname,":: "))));
            return puts_nl(chan,part_qual);
            }
          else
           {puts
             (chan,
              pad_to
               (35,
                Pervasives["^"]
                 ("* ",
                  Pervasives["^"]
                   (sname,
                    Pervasives["^"]
                     (": ",Pervasives["^"](fix_nodename(name),". "))))));
            return puts_nl(chan,part_qual);
            }
          };
      
      puts_nl(chan,"@menu");
      List["iter"]
       (function(param)
         {if(typeof param==="number")
           {return nl(chan);}
          else
           {var variant=param[1];
            
            if(variant>=-177755956)
             {if(variant>=649842561)
               {if(variant>=936573122)
                 {return puts_nl(chan,param[2]);}
                else
                 {return menu_line(Odoc_messages["class_type"],param[2][1]);}
                }
              else
               {if(variant>=448725581)
                 {return menu_line(Odoc_messages["module_type"],param[2][1]);}
                else
                 {return menu_line(Odoc_messages["modul"],param[2][1]);}
                }
              }
            else
             {if(variant!==-784200974)
               {if(variant>=-611981288)
                 {return menu_line(Odoc_messages["clas"],param[2][1]);}
                else
                 {return puts_nl(chan,$$escape(param[2]));}
                }
              else
               {return Printf["fprintf"]
                        (chan,
                         [/* Format */0,
                          [/* String_literal */11,
                           "* ",
                           [/* String */2,
                            /* No_padding */0,
                            [/* String_literal */11,"::\n",/* End_of_format */0]]],
                          "* %s::\n"],
                         param[2]);
                }
              }
            }
          },
        subpart_list);
      return puts_nl(chan,"@end menu");
      }
    else
     {return 0;}
    };

var
 xref=
  function(xname,name)
   {return Pervasives["^"]
            ("@xref{",
             Pervasives["^"]
              (fix_nodename(name),
               Pervasives["^"](xname?Pervasives["^"](",",xname[1]):"","}.")));
    };

var
 ifinfo=
  function(s)
   {return $$String["concat"]
            ("\n",
             /* :: */[0,
              "@ifinfo",
              /* :: */[0,s,[/* :: */0,"@end ifinfo",[/* :: */0,"",/* [] */0]]]]);
    };

var
 dirsection=
  function(sec){return Pervasives["^"]("@dircategory ",$$escape(sec));};

var
 direntry=
  function(ent)
   {return Pervasives["@"]
            ([/* :: */0,"@direntry",/* [] */0],
             Pervasives["@"]
              (List["map"]($$escape,ent),
               [/* :: */0,"@end direntry",/* [] */0]));
    };

var
 Texi=
  [0,
   subst_strings,
   $$escape,
   fix_nodename,
   generate_menu,
   xref,
   ifinfo,
   dirsection,
   direntry];

var
 text_init=
  function($$class)
   {var
     ids=
      CamlinternalOO["new_methods_variables"]($$class,shared$7,shared$8);
    
    var texi_of_text_element=ids[1];
    
    var texi_of_text=ids[2];
    
    var texi_of_custom_text=ids[3];
    
    var texi_of_Verbatim=ids[4];
    
    var texi_of_Title=ids[5];
    
    var texi_of_Target=ids[6];
    
    var texi_of_Superscript=ids[7];
    
    var texi_of_Subscript=ids[8];
    
    var texi_of_Right=ids[9];
    
    var texi_of_Ref=ids[10];
    
    var texi_of_Raw=ids[11];
    
    var texi_of_Newline=ids[12];
    
    var texi_of_List=ids[13];
    
    var texi_of_Link=ids[14];
    
    var texi_of_Left=ids[15];
    
    var texi_of_Italic=ids[16];
    
    var texi_of_Enum=ids[17];
    
    var texi_of_Emphasize=ids[18];
    
    var texi_of_CodePre=ids[19];
    
    var texi_of_Code=ids[20];
    
    var texi_of_Center=ids[21];
    
    var texi_of_Bold=ids[22];
    
    var texi_of_Block=ids[23];
    
    var label=ids[24];
    
    var heading=ids[25];
    
    var fixedblock=ids[26];
    
    var $$escape$1=ids[27];
    
    var titles=ids[28];
    
    var fallback_title=ids[29];
    
    var headings=ids[30];
    
    var fallback_heading=ids[31];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       $$escape$1,
       0,
       Texi[2],
       label,
       function(self$neg1,no_,param){return Pervasives["failwith"]("gni");},
       texi_of_text,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1341 texi_of_text_element/1311)";
         return $$String["concat"]("",List["map"](0,t));
         },
       texi_of_text_element,
       function(self$neg1,param)
        {var exit;
         
         if(typeof param==="number")
          {switch(param)
            {case 0:
              /* unknown */"(sendself self-1/1344 texi_of_Newline/1326)";
             case 1:return "";
             }}
         else
          {switch(param[0])
            {case 0:
              /* unknown */"(sendself self-1/1344 texi_of_Raw/1315 (field 0 param/2331))";
              
             case 1:
              /* unknown */"(sendself self-1/1344 texi_of_Code/1316 (field 0 param/2331))";
              
             case 2:
              /* unknown */"(sendself self-1/1344 texi_of_CodePre/1317 (field 0 param/2331))";
              
             case 3:exit=98;
             case 4:
              /* unknown */"(sendself self-1/1344 texi_of_Bold/1318 (field 0 param/2331))";
              
             case 5:
              /* unknown */"(sendself self-1/1344 texi_of_Italic/1319 (field 0 param/2331))";
              
             case 6:
              /* unknown */"(sendself self-1/1344 texi_of_Emphasize/1320 (field 0 param/2331))";
              
             case 7:
              /* unknown */"(sendself self-1/1344 texi_of_Center/1321 (field 0 param/2331))";
              
             case 8:
              /* unknown */"(sendself self-1/1344 texi_of_Left/1322 (field 0 param/2331))";
              
             case 9:
              /* unknown */"(sendself self-1/1344 texi_of_Right/1323 (field 0 param/2331))";
              
             case 10:
              /* unknown */"(sendself self-1/1344 texi_of_List/1324 (field 0 param/2331))";
              
             case 11:
              /* unknown */"(sendself self-1/1344 texi_of_Enum/1325 (field 0 param/2331))";
              
             case 12:
              /* unknown */"(sendself self-1/1344 texi_of_Block/1327 (field 0 param/2331))";
              
             case 13:
              /* unknown */"(sendself self-1/1344 texi_of_Title/1328 (field 0 param/2331)\n  (field 2 param/2331))";
              
             case 14:exit=98;
             case 15:
              /* unknown */"(sendself self-1/1344 texi_of_Link/1329 (field 0 param/2331)\n  (field 1 param/2331))";
              
             case 16:
              /* unknown */"(sendself self-1/1344 texi_of_Ref/1330 (field 0 param/2331)\n  (field 1 param/2331))";
              
             case 17:
              /* unknown */"(sendself self-1/1344 texi_of_Superscript/1331 (field 0 param/2331))";
              
             case 18:
              /* unknown */"(sendself self-1/1344 texi_of_Subscript/1332 (field 0 param/2331))";
              
             case 19:return "";
             case 20:
              /* unknown */"(sendself self-1/1344 texi_of_custom_text/1312 (field 0 param/2331)\n  (field 1 param/2331))";
              
             case 21:
              /* unknown */"(sendself self-1/1344 texi_of_Target/1313 (field 0 param/2331)\n  (field 1 param/2331))";
              
             }}
         
         switch(exit)
          {case 98:
            /* unknown */"(sendself self-1/1344 texi_of_Verbatim/1314 (field 0 param/2331))";
            
           }
         },
       texi_of_custom_text,
       function(self$neg1,s,t){return "";},
       texi_of_Target,
       function(self$neg1,target,code)
        {if
          (CamlPrimitive["caml_string_equal"]
            ($$String["lowercase"](target),"texi"))
          {return code;}
         else
          {return "";}
         },
       texi_of_Verbatim,
       function(self$neg1,s){return s;},
       texi_of_Raw,
       function(self$neg1,s)
        {/* unknown */"(sendself self-1/1383 escape/1308 s/1384)";},
       texi_of_Code,
       function(self$neg1,s)
        {/* unknown */"(sendself self-1/1386 escape/1308 s/1387)";
         return Pervasives["^"]("@code{",Pervasives["^"](0,"}"));
         },
       texi_of_CodePre,
       function(self$neg1,s)
        {/* unknown */"(sendself self-1/1389 escape/1308 s/1390)";
         return $$String["concat"]
                 ("\n",
                  /* :: */[0,
                   "",
                   /* :: */[0,
                    "@example",
                    /* :: */[0,
                     0,
                     [/* :: */0,"@end example",[/* :: */0,"",/* [] */0]]]]]);
         },
       texi_of_Bold,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1392 texi_of_text/1310 t/1393)";
         return Pervasives["^"]("@strong{",Pervasives["^"](0,"}"));
         },
       texi_of_Italic,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1395 texi_of_text/1310 t/1396)";
         return Pervasives["^"]("@i{",Pervasives["^"](0,"}"));
         },
       texi_of_Emphasize,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1398 texi_of_text/1310 t/1399)";
         return Pervasives["^"]("@emph{",Pervasives["^"](0,"}"));
         },
       texi_of_Center,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1401 texi_of_text/1310 t/1402)";
         var sl=Str["split"](Str["regexp"]("\n"),0);
         
         return $$String["concat"]
                 ("",
                  Pervasives["@"]
                   (List["map"]
                     (function(s){return Pervasives["^"]("\n@center ",s);},sl),
                    [/* :: */0,"\n",/* [] */0]));
         },
       texi_of_Left,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1406 texi_of_text/1310 t/1407)";
         return $$String["concat"]
                 ("\n",
                  /* :: */[0,
                   "",
                   /* :: */[0,
                    "@flushleft",
                    /* :: */[0,
                     0,
                     [/* :: */0,"@end flushleft",[/* :: */0,"",/* [] */0]]]]]);
         },
       texi_of_Right,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1409 texi_of_text/1310 t/1410)";
         return $$String["concat"]
                 ("\n",
                  /* :: */[0,
                   "",
                   /* :: */[0,
                    "@flushright",
                    /* :: */[0,
                     0,
                     [/* :: */0,"@end flushright",[/* :: */0,"",/* [] */0]]]]]);
         },
       texi_of_List,
       function(self$neg1,tl)
        {return $$String["concat"]
                 ("\n",
                  Pervasives["@"]
                   ([/* :: */0,"",[/* :: */0,"@itemize",/* [] */0]],
                    Pervasives["@"]
                     (List["map"]
                       (function(t)
                         {/* unknown */"(sendself self-1/1412 texi_of_text/1310 t/1414)";
                          return Pervasives["^"]("@item\n",0);
                          },
                        tl),
                      [/* :: */0,"@end itemize",[/* :: */0,"",/* [] */0]])));
         },
       texi_of_Enum,
       function(self$neg1,tl)
        {return $$String["concat"]
                 ("\n",
                  Pervasives["@"]
                   ([/* :: */0,"",[/* :: */0,"@enumerate",/* [] */0]],
                    Pervasives["@"]
                     (List["map"]
                       (function(t)
                         {/* unknown */"(sendself self-1/1416 texi_of_text/1310 t/1418)";
                          return Pervasives["^"]("@item\n",0);
                          },
                        tl),
                      [/* :: */0,"@end enumerate",[/* :: */0,"",/* [] */0]])));
         },
       texi_of_Newline,
       0,
       "\n",
       texi_of_Block,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1422 texi_of_text/1310 t/1423)";
         return $$String["concat"]
                 ("\n",
                  /* :: */[0,
                   "@format",
                   /* :: */[0,
                    0,
                    [/* :: */0,"@end format",[/* :: */0,"",/* [] */0]]]]);
         },
       texi_of_Title,
       function(self$neg1,n,t)
        {try
          {var t_begin=List["assoc"](n,self$neg1[titles+1]);}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {var t_begin=self$neg1[fallback_title+1];}
           else
            {throw exn;}
           }
         
         /* unknown */"(sendself self-1/1425 texi_of_text/1310 t/1427)";
         return Pervasives["^"](t_begin,Pervasives["^"](0,"\n"));
         },
       texi_of_Link,
       function(self$neg1,s,t)
        {/* unknown */"(sendself self-1/1430 texi_of_text/1310 t/1432)";
         return $$String["concat"]
                 ("",
                  /* :: */[0,
                   "@uref{",
                   /* :: */[0,
                    s,
                    /* :: */[0,",",/* :: */[0,0,[/* :: */0,"}",/* [] */0]]]]]);
         },
       texi_of_Ref,
       function(self$neg1,name,kind)
        {var exit;
         
         if(kind)
          {var match=kind[1];
           
           if(typeof match==="number")
            {switch(match)
              {case 0:
                var
                 xname=
                  Pervasives["^"]
                   (Odoc_messages["modul"],
                    Pervasives["^"](" ",Odoc_info["Name"][1](name)));
                
               case 1:
                var
                 xname=
                  Pervasives["^"]
                   (Odoc_messages["module_type"],
                    Pervasives["^"](" ",Odoc_info["Name"][1](name)));
                
               case 2:
                var
                 xname=
                  Pervasives["^"]
                   (Odoc_messages["clas"],
                    Pervasives["^"](" ",Odoc_info["Name"][1](name)));
                
               case 3:
                var
                 xname=
                  Pervasives["^"]
                   (Odoc_messages["class_type"],
                    Pervasives["^"](" ",Odoc_info["Name"][1](name)));
                
               case 4:exit=92;
               case 5:exit=92;
               case 6:exit=92;
               case 7:exit=92;
               case 8:exit=92;
               case 9:exit=92;
               case 10:exit=92;
               case 11:exit=92;
               }
             }
           else
            {exit=92;}
           }
         else
          {exit=92;}
         
         switch(exit){case 92:var xname="";}
         
         if(CamlPrimitive["caml_string_equal"](xname,""))
          {/* unknown */"(sendself self-1/1434 escape/1308 name/1435)";}
         else
          {return Texi[5](/* Some */[0,xname],name);}
         },
       texi_of_Superscript,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1439 texi_of_text/1310 t/1440)";
         return Pervasives["^"]("^@{",Pervasives["^"](0,"@}"));
         },
       texi_of_Subscript,
       function(self$neg1,t)
        {/* unknown */"(sendself self-1/1442 texi_of_text/1310 t/1443)";
         return Pervasives["^"]("_@{",Pervasives["^"](0,"@}"));
         },
       heading,
       function(self$neg1,n,t)
        {try
          {var f=List["assoc"](n,self$neg1[headings+1]);}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {var f=self$neg1[fallback_heading+1];}
           else
            {throw exn;}
           }
         
         /* unknown */"(sendself self-1/1445 texi_of_text/1310 t/1447)";
         return Pervasives["^"](f,Pervasives["^"](0,"\n"));
         },
       fixedblock,
       function(self$neg1,t)
        {return /* Block */[12,
                 Pervasives["@"]
                  (/* :: */[0,[/* Verbatim */3,"@t{"],t],
                   [/* :: */0,[/* Verbatim */3,"}"],/* [] */0])];
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[titles+1]=
      [/* :: */0,
       [/* tuple */0,1,"@chapter "],
       [/* :: */0,
        [/* tuple */0,2,"@section "],
        [/* :: */0,
         [/* tuple */0,3,"@subsection "],
         [/* :: */0,[/* tuple */0,4,"@subsubsection "],/* [] */0]]]],
      $$self$1[fallback_title+1]=
      "@unnumberedsubsubsec ",
      $$self$1[headings+1]=
      [/* :: */0,
       [/* tuple */0,1,"@majorheading "],
       [/* :: */0,
        [/* tuple */0,2,"@heading "],
        [/* :: */0,
         [/* tuple */0,3,"@subheading "],
         [/* :: */0,[/* tuple */0,4,"@subsubheading "],/* [] */0]]]],
      $$self$1[fallback_heading+1]=
      "@subsubheading ";
      return $$self$1;
      };
    };

var
 text=
  CamlinternalOO["make_class"]
   ([0,
     "texi_of_text_element",
     "texi_of_Newline",
     "texi_of_Superscript",
     "texi_of_text",
     "texi_of_Emphasize",
     "escape",
     "texi_of_Raw",
     "texi_of_Ref",
     "heading",
     "texi_of_Subscript",
     "label",
     "texi_of_Right",
     "texi_of_Verbatim",
     "texi_of_custom_text",
     "fixedblock",
     "texi_of_CodePre",
     "texi_of_Title",
     "texi_of_Center",
     "texi_of_Italic",
     "texi_of_Target",
     "texi_of_Bold",
     "texi_of_Code",
     "texi_of_Enum",
     "texi_of_Left",
     "texi_of_Link",
     "texi_of_List",
     "texi_of_Block"],
    text_init);

var
 Aliased_node=
  CamlPrimitive["caml_set_oo_id"]([248,"Odoc_texi.Aliased_node",0]);

var
 texi_init=
  function($$class)
   {var
     ids=
      CamlinternalOO["new_methods_variables"]($$class,shared$3,shared$6);
    
    var text_of_version_opt=ids[1];
    
    var text_of_since_opt=ids[2];
    
    var text_of_short_type_expr=ids[3];
    
    var text_of_sees_opt=ids[4];
    
    var text_of_return_opt=ids[5];
    
    var text_of_raised_exceptions=ids[6];
    
    var text_of_params=ids[7];
    
    var text_of_info=ids[8];
    
    var text_of_desc=ids[9];
    
    var text_of_custom=ids[10];
    
    var text_of_before=ids[11];
    
    var text_of_author_list=ids[12];
    
    var text_el_of_type_expr=ids[13];
    
    var texi_of_value=ids[14];
    
    var texi_of_type_extension=ids[15];
    
    var texi_of_type=ids[16];
    
    var texi_of_text=ids[17];
    
    var texi_of_module_type=ids[18];
    
    var texi_of_module_element=ids[19];
    
    var texi_of_module=ids[20];
    
    var texi_of_method=ids[21];
    
    var texi_of_info=ids[22];
    
    var texi_of_included_module=ids[23];
    
    var texi_of_exception=ids[24];
    
    var texi_of_class_type=ids[25];
    
    var texi_of_class_element=ids[26];
    
    var texi_of_class=ids[27];
    
    var texi_of_attribute=ids[28];
    
    var string_of_type_parameters=ids[29];
    
    var string_of_type_args=ids[30];
    
    var soft_fix_linebreaks=ids[31];
    
    var scan_for_index_in_mod=ids[32];
    
    var scan_for_index_in_class=ids[33];
    
    var scan_for_index=ids[34];
    
    var relative_idents=ids[35];
    
    var normal_type=ids[36];
    
    var node=ids[37];
    
    var index=ids[38];
    
    var heading=ids[39];
    
    var generate_texi_trailer=ids[40];
    
    var generate_texi_header=ids[41];
    
    var generate_inheritance_info=ids[42];
    
    var generate_for_module_type=ids[43];
    
    var generate_for_module=ids[44];
    
    var generate_for_class_type=ids[45];
    
    var generate_for_class=ids[46];
    
    var generate_class_type_inheritance_info=ids[47];
    
    var generate_class_inheritance_info=ids[48];
    
    var generate=ids[49];
    
    var fixedblock=ids[50];
    
    var fix_linebreaks=ids[51];
    
    var $$escape$1=ids[52];
    
    var do_index=ids[53];
    
    var maxdepth=ids[54];
    
    var bullet=ids[55];
    
    var minus=ids[56];
    
    var linebreak=ids[57];
    
    var indices_to_build=ids[58];
    
    var node_tbl=ids[59];
    
    var inh=CamlinternalOO["inherits"]($$class,shared$1,0,shared,text,1);
    
    var obj_init=inh[1];
    
    var
     inh$1=
      CamlinternalOO["inherits"]
       ($$class,shared$5,shared$2,shared$4,Odoc_to_text["to_text"],1);
    
    var obj_init$1=inh$1[1];
    
    var tag_functions=inh$1[2];
    
    var text_of_before$1=inh$1[13];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       node,
       function(self$neg2,depth,name)
        {if(Hashtbl["mem"](self$neg2[node_tbl+1],name))
          {throw Aliased_node;}
         else
          {}
         
         Hashtbl["add"](self$neg2[node_tbl+1],name,/* () */0);
         if(depth<=self$neg2[maxdepth+1])
          {return /* Verbatim */[3,
                   Pervasives["^"]
                    ("@node ",Pervasives["^"](Texi[3](name),",\n"))];
           }
         else
          {return nothing;}
         },
       index,
       function(self$neg2,ind,ent)
        {if(Odoc_info["Global"][9][1])
          {if(List["mem"](ind,self$neg2[indices_to_build+1]))
            {}
           else
            {throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"odoc_texi.ml",426,14]];
             }
           
           var
            $js=
             $$String["concat"]
              ("",
               /* :: */[0,
                "@",
                /* :: */[0,
                 indices(ind),
                 /* :: */[0,
                  "index ",
                  /* :: */[0,
                   Texi[2](Odoc_info["Name"][1](ent)),
                   [/* :: */0,"\n",/* [] */0]]]]]);
           }
         else
          {var $js="";}
         return /* Verbatim */[3,$js];
         },
       fix_linebreaks,
       function(self$neg2)
        {var re=Str["regexp"]("\n[ \t]*");
         
         return function(t)
          {return List["map"]
                   (function(txt)
                     {var exit;
                      
                      if(typeof txt==="number")
                       {switch(txt){case 0:return [/* Raw */0,"\n"];}}
                      else
                       {switch(txt[0])
                         {case 0:
                           return /* Raw */[0,Str["global_replace"](re,"\n",txt[1])];
                          case 10:
                           /* unknown */"(sendself self-2/1626 fix_linebreaks/1575)";
                           return /* List */[10,List["map"](0,txt[1])];
                           
                          case 11:
                           /* unknown */"(sendself self-2/1626 fix_linebreaks/1575)";
                           return /* Enum */[11,List["map"](0,txt[1])];
                           
                          default:exit=88;}}
                      
                      switch(exit){case 88:return txt;}
                      },
                    t);
           };
         },
       soft_fix_linebreaks,
       function(self$neg2)
        {var re=Str["regexp"]("\n[ \t]*");
         
         return function(ind,t)
          {var rep=Pervasives["^"]("\n",$$String["make"](ind,32));
           
           return List["map"]
                   (function(txt)
                     {var exit;
                      
                      if(typeof txt==="number")
                       {switch(txt){}}
                      else
                       {switch(txt[0])
                         {case 0:
                           return /* Raw */[0,Str["global_replace"](re,rep,txt[1])];
                          default:exit=85;}}
                      
                      switch(exit){case 85:return txt;}
                      },
                    t);
           };
         },
       text_of_desc,
       function(self$neg2,param)
        {if(param)
          {var t=param[1];
           
           var exit;
           
           if(t)
            {var match=t[1];
             
             if(typeof match==="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 0:
                  switch(match[1])
                   {case "":if(t[2]){exit=84;}else{return /* [] */0;}
                    default:exit=84;}
                  
                 default:exit=84;}}
             }
           else
            {exit=84;}
           
           switch(exit)
            {case 84:
              /* unknown */"(sendself self-2/1642 fix_linebreaks/1575 t/1643)";
              return Pervasives["@"](0,[/* :: */0,/* Newline */0,/* [] */0]);
              
             }
           }
         else
          {return /* [] */0;}
         },
       text_of_sees_opt,
       function(self$neg2,see_l)
        {return List["concat"]
                 (List["map"]
                   (function(param)
                     {var match=param[1];
                      
                      var exit;
                      
                      switch(match[0])
                       {case 0:
                         return /* :: */[0,
                                 self$neg2[linebreak+1],
                                 /* :: */[0,
                                  /* Bold */[4,
                                   /* :: */[0,/* Raw */[0,Odoc_messages["see_also"]],/* [] */0]],
                                  /* :: */[0,
                                   [/* Raw */0," "],
                                   /* :: */[0,
                                    /* Link */[15,match[1],param[2]],
                                    [/* :: */0,/* Newline */0,/* [] */0]]]]];
                         
                        case 1:exit=83;
                        case 2:exit=83;
                        }
                      
                      switch(exit)
                       {case 83:
                         return Pervasives["@"]
                                 (/* :: */[0,
                                   self$neg2[linebreak+1],
                                   /* :: */[0,
                                    /* Bold */[4,
                                     /* :: */[0,/* Raw */[0,Odoc_messages["see_also"]],/* [] */0]],
                                    /* :: */[0,
                                     [/* Raw */0," "],
                                     /* :: */[0,/* Raw */[0,match[1]],/* [] */0]]]],
                                  Pervasives["@"]
                                   (param[2],[/* :: */0,/* Newline */0,/* [] */0]));
                         
                        }
                      },
                    see_l));
         },
       text_of_before,
       function(self$neg2,l)
        {return List["flatten"]
                 (List["map"]
                   (function(x)
                     {return /* :: */[0,
                              self$neg2[linebreak+1],
                              text_of_before$1(self$neg2,/* :: */[0,x,/* [] */0])];
                      },
                    l));
         },
       text_of_params,
       function(self$neg2,params_list)
        {return List["concat"]
                 (List["map"]
                   (function(param)
                     {return Pervasives["@"]
                              (/* :: */[0,
                                self$neg2[linebreak+1],
                                /* :: */[0,
                                 /* Bold */[4,
                                  /* :: */[0,
                                   /* Raw */[0,Odoc_messages["parameters"]],
                                   /* [] */0]],
                                 /* :: */[0,
                                  [/* Raw */0," "],
                                  /* :: */[0,
                                   /* Raw */[0,param[1]],
                                   [/* :: */0,[/* Raw */0,": "],/* [] */0]]]]],
                               Pervasives["@"]
                                (param[2],[/* :: */0,/* Newline */0,/* [] */0]));
                      },
                    params_list));
         },
       text_of_raised_exceptions,
       function(self$neg2,l)
        {if(l)
          {if(l[2])
            {return /* :: */[0,
                     self$neg2[linebreak+1],
                     /* :: */[0,
                      /* Bold */[4,
                       /* :: */[0,/* Raw */[0,Odoc_messages["raises"]],/* [] */0]],
                      /* :: */[0,
                       [/* Raw */0," :"],
                       /* :: */[0,
                        /* List */[10,
                         List["map"]
                          (function(param)
                            {return /* :: */[0,
                                     /* Code */[1,param[1]],
                                     /* :: */[0,[/* Raw */0," "],param[2]]];
                             },
                           l)],
                        [/* :: */0,/* Newline */0,/* [] */0]]]]];
             }
           else
            {var match=l[1];
             
             return Pervasives["@"]
                     (/* :: */[0,
                       self$neg2[linebreak+1],
                       /* :: */[0,
                        /* Bold */[4,
                         /* :: */[0,/* Raw */[0,Odoc_messages["raises"]],/* [] */0]],
                        /* :: */[0,
                         [/* Raw */0," "],
                         /* :: */[0,
                          /* Code */[1,match[1]],
                          [/* :: */0,[/* Raw */0," "],/* [] */0]]]]],
                      Pervasives["@"]
                       (match[2],[/* :: */0,/* Newline */0,/* [] */0]));
             }
           }
         else
          {return /* [] */0;}
         },
       text_of_return_opt,
       function(self$neg2,param)
        {if(param)
          {return Pervasives["@"]
                   (/* :: */[0,
                     /* Bold */[4,
                      /* :: */[0,/* Raw */[0,Odoc_messages["returns"]],/* [] */0]],
                     /* :: */[0,[/* Raw */0," "],param[1]]],
                    [/* :: */0,/* Newline */0,/* [] */0]);
           }
         else
          {return /* [] */0;}
         },
       text_of_custom,
       function(self$neg2,c_l)
        {return List["flatten"]
                 (List["rev"]
                   (List["fold_left"]
                     (function(acc,param)
                       {var tag=param[1];
                        
                        try
                         {var f=List["assoc"](tag,self$neg2[tag_functions+1]);
                          
                          return /* :: */[0,
                                  Pervasives["@"]
                                   (/* :: */[0,self$neg2[linebreak+1],f(param[2])],
                                    [/* :: */0,/* Newline */0,/* [] */0]),
                                  acc];
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
                      c_l)));
         },
       text_of_info,
       function(self$neg2,$staropt$star,param)
        {if($staropt$star)
          {var block=$staropt$star[1];}
         else
          {var block=/* false */0;}
         
         if(param)
          {var info=param[1];
           
           var match=info[7];
           
           if(match)
            {/* unknown */"(sendself self-2/1680 fix_linebreaks/1575 (field 0 match/2248))";
             var
              $js=
               Pervasives["@"]
                (/* :: */[0,
                  /* Raw */[0,
                   Pervasives["^"](Odoc_messages["deprecated"]," ")],
                  0],
                 [/* :: */0,
                  /* Newline */0,
                  [/* :: */0,/* Newline */0,/* [] */0]]);
             }
           else
            {var $js=/* [] */0;}
           /* unknown */"(sendself self-2/1680 text_of_desc/1577 (field 0 info/1684))";
           if(info[2]!==/* [] */0)
            {/* unknown */"(sendself self-2/1680 text_of_author_list/1687 (field 1 info/1684))";
             var $js$1=/* :: */[0,self$neg2[linebreak+1],0];
             }
           else
            {var $js$1=/* [] */0;}
           if(is(info[3]))
            {/* unknown */"(sendself self-2/1680 text_of_version_opt/1688 (field 2 info/1684))";
             var $js$2=/* :: */[0,self$neg2[linebreak+1],0];
             }
           else
            {var $js$2=/* [] */0;}
           /* unknown */"(sendself self-2/1680 text_of_sees_opt/1578 (field 3 info/1684))";
           /* unknown */"(sendself self-2/1680 text_of_before/1579 (field 5 info/1684))";
           if(is(info[5]))
            {/* unknown */"(sendself self-2/1680 text_of_since_opt/1689 (field 4 info/1684))";
             var $js$3=/* :: */[0,self$neg2[linebreak+1],0];
             }
           else
            {var $js$3=/* [] */0;}
           /* unknown */"(sendself self-2/1680 text_of_params/1580 (field 7 info/1684))";
           /* unknown */"(sendself self-2/1680 text_of_raised_exceptions/1581 (field 8 info/1684))";
           if(is(info[10]))
            {/* unknown */"(sendself self-2/1680 text_of_return_opt/1582 (field 9 info/1684))";
             var $js$4=/* :: */[0,self$neg2[linebreak+1],0];
             }
           else
            {var $js$4=/* [] */0;}
           /* unknown */"(sendself self-2/1680 text_of_custom/1583 (field 10 info/1684))";
           var
            t=
             List["concat"]
              (/* :: */[0,
                $js,
                /* :: */[0,
                 0,
                 /* :: */[0,
                  $js$1,
                  /* :: */[0,
                   $js$2,
                   /* :: */[0,
                    0,
                    /* :: */[0,
                     0,
                     /* :: */[0,
                      $js$3,
                      /* :: */[0,
                       0,
                       /* :: */[0,0,/* :: */[0,$js$4,/* :: */[0,0,/* [] */0]]]]]]]]]]]);
           
           if(block)
            {return /* :: */[0,/* Block */[12,t],/* [] */0];}
           else
            {return Pervasives["@"](t,[/* :: */0,/* Newline */0,/* [] */0]);}
           }
         else
          {return /* [] */0;}
         },
       texi_of_info,
       function(self$neg2,i)
        {/* unknown */"(sendself self-2/1691 texi_of_text/1693\n  (sendself self-2/1691 text_of_info/1584 0a i/1692))";
         },
       text_el_of_type_expr,
       function(self$neg2,m_name,typ)
        {/* unknown */"(sendself self-2/1695 relative_idents/1698 m_name/1696\n  (apply (field 12 (global Odoc_info!)) typ/1697))";
         return /* Raw */[0,indent(5,0)];
         },
       text_of_short_type_expr,
       function(self$neg2,m_name,typ)
        {/* unknown */"(sendself self-2/1700 normal_type/1703 m_name/1701 typ/1702)";
         return /* :: */[0,/* Raw */[0,0],/* [] */0];
         },
       texi_of_value,
       function(self$neg2,v)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1705 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1705 minus/1531)\n      (makeblock 0\n        (makeblock 0\n          (apply (field 15 (global Pervasives!)) "val "\n            (apply (field 15 (global Pervasives!))\n              (apply (field 0 (field 2 (global Odoc_info!)))\n                (field 0 v/1706))\n              " :\n")))\n        (makeblock 0\n          (sendself self-2/1705 text_el_of_type_expr/1586\n            (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1706))\n            (field 2 v/1706))\n          0a)))))';
         /* unknown */"(sendself self-2/1705 index/1574 -991563951a (field 0 v/1706))";
         /* unknown */"(sendself self-2/1705 text_of_info/1584 0a (field 1 v/1706))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,0,/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]],
             0);
         
         /* unknown */"(sendself self-2/1705 texi_of_text/1693 t/1707)";
         },
       texi_of_attribute,
       function(self$neg2,a)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1710 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1710 minus/1531)\n      (makeblock 0 [0: "val "]\n        (makeblock 0 (makeblock 0 (if (field 2 a/1711) "virtual " ""))\n          (makeblock 0 (makeblock 0 (if (field 1 a/1711) "mutable " ""))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 0 (field 2 (global Odoc_info!)))\n                  (field 0 (field 0 a/1711))))\n              (makeblock 0 [0: " :\n"]\n                (makeblock 0\n                  (sendself self-2/1710 text_el_of_type_expr/1586\n                    (apply (field 4 (field 2 (global Odoc_info!)))\n                      (field 0 (field 0 a/1711)))\n                    (field 2 (field 0 a/1711)))\n                  0a)))))))))';
         /* unknown */"(sendself self-2/1710 index/1574 156047674a (field 0 (field 0 a/1711)))";
         /* unknown */"(sendself self-2/1710 text_of_info/1584 0a (field 1 (field 0 a/1711)))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,0,/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]],
             0);
         
         /* unknown */"(sendself self-2/1710 texi_of_text/1693 t/1712)";
         },
       texi_of_method,
       function(self$neg2,m)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1714 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1714 minus/1531)\n      (makeblock 0 [0: "method "]\n        (makeblock 0 (makeblock 0 (if (field 1 m/1715) "private " ""))\n          (makeblock 0 (makeblock 0 (if (field 2 m/1715) "virtual " ""))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 0 (field 2 (global Odoc_info!)))\n                  (field 0 (field 0 m/1715))))\n              (makeblock 0 [0: " :\n"]\n                (makeblock 0\n                  (sendself self-2/1714 text_el_of_type_expr/1586\n                    (apply (field 4 (field 2 (global Odoc_info!)))\n                      (field 0 (field 0 m/1715)))\n                    (field 2 (field 0 m/1715)))\n                  0a)))))))))';
         /* unknown */"(sendself self-2/1714 index/1574 1039100673a (field 0 (field 0 m/1715)))";
         /* unknown */"(sendself self-2/1714 text_of_info/1584 0a (field 1 (field 0 m/1715)))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,0,/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]],
             0);
         
         /* unknown */"(sendself self-2/1714 texi_of_text/1693 t/1716)";
         },
       string_of_type_parameters,
       function(self$neg2,t)
        {var
          f=
           function(param)
            {return Printf["sprintf"]
                     ([/* Format */0,
                       [/* String */2,
                        /* No_padding */0,
                        [/* String */2,/* No_padding */0,/* End_of_format */0]],
                       "%s%s"],
                      Odoc_info["string_of_variance"]
                       (t,/* tuple */[0,param[2],param[3]]),
                      Odoc_info["string_of_type_expr"](param[1]));
             };
         
         var l=t[3];
         
         if(l)
          {if(l[2])
            {return Printf["sprintf"]
                     ([/* Format */0,
                       [/* Char_literal */12,
                        40,
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,") ",/* End_of_format */0]]],
                       "(%s) "],
                      $$String["concat"](", ",List["map"](f,l)));
             }
           else
            {var match=l[1];
             
             return Pervasives["^"]
                     (f(/* tuple */[0,match[1],match[2],match[3]])," ");
             }
           }
         else
          {return "";}
         },
       string_of_type_args,
       function(self$neg2,args,ret)
        {if(args)
          {if(ret)
            {return Pervasives["^"]
                     (" : ",
                      Pervasives["^"]
                       (Odoc_info["string_of_type_list"](/* None */0," * ",args),
                        Pervasives["^"]
                         (" -> ",Odoc_info["string_of_type_expr"](ret[1]))));
             }
           else
            {return Pervasives["^"]
                     (" of ",
                      Odoc_info["string_of_type_list"](/* None */0," * ",args));
             }
           }
         else
          {if(ret)
            {return Pervasives["^"]
                     (" : ",Odoc_info["string_of_type_expr"](ret[1]));
             }
           else
            {return "";}
           }
         },
       texi_of_type,
       function(self$neg2,ty)
        {Odoc_info["reset_type_names"](/* () */0);
         var
          entry_doc=
           function(param)
            {if(param)
              {/* unknown */"(sendself self-2/1737 soft_fix_linebreaks/1576 8\n  (sendself self-2/1737 text_of_info/1584 0a\n    (makeblock 0 (field 0 param/2228))))";
               return Pervasives["@"]
                       (/* :: */[0,/* Raw */[0,indent(5,"\n(*\n")],0],
                        [/* :: */0,
                         [/* Raw */0," *)"],
                         [/* :: */0,/* Newline */0,/* [] */0]]);
               }
             else
              {return [/* :: */0,/* Newline */0,/* [] */0];}
             };
         
         /* unknown */'(sendself self-2/1737 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1737 minus/1531)\n        (makeblock 0 [0: "type "]\n          (makeblock 0\n            (makeblock 0\n              (sendself self-2/1737 string_of_type_parameters/1591 ty/1738))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 0 (field 2 (global Odoc_info!)))\n                  (field 0 ty/1738)))\n              0a)))))\n    (let (priv/1742 = (== (field 4 ty/1738) 0a))\n      (apply (field 21 (global Pervasives!))\n        (let (match/2224 = (field 5 ty/1738))\n          (if match/2224\n            (let (match/2225 =a (field 0 match/2224))\n              (switch* match/2225\n               case tag 0:\n                (makeblock 0 [0: " = "]\n                  (makeblock 0 (makeblock 0 (if priv/1742 "private " ""))\n                    (sendself self-2/1737 text_of_short_type_expr/1587\n                      (apply (field 4 (field 2 (global Odoc_info!)))\n                        (field 0 ty/1738))\n                      (field 0 match/2225))))\n               case tag 1:\n                (apply (field 21 (global Pervasives!))\n                  (makeblock 0\n                    (makeblock 0\n                      (apply (field 15 (global Pervasives!)) " = "\n                        (apply (field 15 (global Pervasives!))\n                          (if priv/1742 "private " "") "{\n")))\n                    (apply (field 8 (global List!))\n                      (apply (field 11 (global List!))\n                        (function r/1745\n                          (apply (field 21 (global Pervasives!))\n                            (makeblock 0\n                              (makeblock 0\n                                (apply (field 15 (global Pervasives!)) "  "\n                                  (apply (field 15 (global Pervasives!))\n                                    (field 0 r/1745) " : ")))\n                              0a)\n                            (apply (field 21 (global Pervasives!))\n                              (sendself self-2/1737\n                                text_of_short_type_expr/1587\n                                (apply\n                                  (field 4 (field 2 (global Odoc_info!)))\n                                  (field 0 r/1745))\n                                (field 1 r/1745))\n                              (apply (field 21 (global Pervasives!))\n                                [0: [0: " ;"] 0a]\n                                (apply entry_doc/1739 (field 2 r/1745))))))\n                        (field 0 match/2225))))\n                  [0: [0: " }"] 0a])))\n            0a))\n        (let (match/2227 = (field 3 ty/1738))\n          (switch* match/2227\n           case int 0: [0: 0a 0a]\n           case int 1: [0: [0: " = .."] [0: 0a 0a]]\n           case tag 0:\n            (makeblock 0\n              (makeblock 0\n                (apply (field 15 (global Pervasives!)) " ="\n                  (apply (field 15 (global Pervasives!))\n                    (if priv/1742 " private" "") "\n")))\n              (apply (field 8 (global List!))\n                (apply (field 11 (global List!))\n                  (function constr/1748\n                    (makeblock 0\n                      (makeblock 0\n                        (apply (field 15 (global Pervasives!)) "  | "\n                          (field 0 constr/1748)))\n                      (makeblock 0\n                        (makeblock 0\n                          (sendself self-2/1737 string_of_type_args/1592\n                            (field 1 constr/1748) (field 2 constr/1748)))\n                        (apply entry_doc/1739 (field 3 constr/1748)))))\n                  (field 0 match/2227))))\n           case tag 1:\n            (apply (field 21 (global Pervasives!))\n              (makeblock 0\n                (makeblock 0\n                  (apply (field 15 (global Pervasives!)) " = "\n                    (apply (field 15 (global Pervasives!))\n                      (if priv/1742 "private " "") "{\n")))\n                (apply (field 8 (global List!))\n                  (apply (field 11 (global List!))\n                    (function r/1749\n                      (apply (field 21 (global Pervasives!))\n                        (makeblock 0\n                          (makeblock 0\n                            (apply (field 15 (global Pervasives!)) "  "\n                              (apply (field 15 (global Pervasives!))\n                                (field 0 r/1749) " : ")))\n                          0a)\n                        (apply (field 21 (global Pervasives!))\n                          (sendself self-2/1737 text_of_short_type_expr/1587\n                            (apply (field 4 (field 2 (global Odoc_info!)))\n                              (field 0 r/1749))\n                            (field 2 r/1749))\n                          (apply (field 21 (global Pervasives!))\n                            [0: [0: " ;"] 0a]\n                            (apply entry_doc/1739 (field 3 r/1749))))))\n                    (field 0 match/2227))))\n              [0: [0: " }"] 0a])))))))';
         /* unknown */"(sendself self-2/1737 index/1574 937565914a (field 0 ty/1738))";
         /* unknown */"(sendself self-2/1737 text_of_info/1584 0a (field 1 ty/1738))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,0,/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]],
             0);
         
         /* unknown */"(sendself self-2/1737 texi_of_text/1693 t/1741)";
         },
       texi_of_type_extension,
       function(self$neg2,m_name,te)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1751 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1751 minus/1531)\n        (makeblock 0 [0: "type "]\n          (makeblock 0\n            (makeblock 0\n              (let (l/1756 = (field 2 te/1753))\n                (if l/1756\n                  (if (field 1 l/1756)\n                    (apply (field 3 (global Printf!))\n                      [0: [12: \'(\' [2: 0a [11: ") " 0a]]] "(%s) "]\n                      (apply (field 6 (global String!)) ", "\n                        (apply (field 11 (global List!))\n                          (field 12 (global Odoc_info!)) l/1756)))\n                    (apply (field 3 (global Printf!))\n                      [0: [2: 0a [12: \' \' 0a]] "%s "]\n                      (apply (field 12 (global Odoc_info!)) (field 0 l/1756))))\n                  "")))\n            (makeblock 0\n              (makeblock 0\n                (sendself self-2/1751 relative_idents/1698 m_name/1752\n                  (field 1 te/1753)))\n              (makeblock 0\n                (makeblock 0\n                  (apply (field 15 (global Pervasives!)) " +="\n                    (apply (field 15 (global Pervasives!))\n                      (if (== (field 3 te/1753) 0a) " private" "") "\n")))\n                0a))))))\n    (apply (field 8 (global List!))\n      (apply (field 11 (global List!))\n        (function x/1757\n          (apply (field 21 (global Pervasives!))\n            (makeblock 0\n              (makeblock 0\n                (apply (field 15 (global Pervasives!)) "  | "\n                  (apply (field 0 (field 2 (global Odoc_info!)))\n                    (field 0 x/1757))))\n              (makeblock 0\n                (makeblock 0\n                  (sendself self-2/1751 string_of_type_args/1592\n                    (field 1 x/1757) (field 2 x/1757)))\n                (let (match/2219 = (field 4 x/1757))\n                  (if match/2219\n                    (let (xa/1758 =a (field 0 match/2219))\n                      (makeblock 0 [0: " = "]\n                        (makeblock 0\n                          (makeblock 0\n                            (let (match/2218 = (field 1 xa/1758))\n                              (if match/2218 (field 0 (field 0 match/2218))\n                                (field 0 xa/1758))))\n                          0a)))\n                    0a))))\n            (apply (field 21 (global Pervasives!))\n              (let (match/2221 = (field 6 x/1757))\n                (if match/2221\n                  (apply (field 21 (global Pervasives!))\n                    (makeblock 0 (makeblock 0 (apply indent/1236 5 "\n(* "))\n                      (sendself self-2/1751 soft_fix_linebreaks/1576 8\n                        (sendself self-2/1751 text_of_info/1584 0a\n                          (makeblock 0 (field 0 match/2221)))))\n                    [0: [0: " *)"] [0: 0a 0a]])\n                  [0: 0a 0a]))\n              (makeblock 0\n                (sendself self-2/1751 index/1574 115569503a (field 0 x/1757))\n                0a))))\n        (field 4 te/1753)))))';
         /* unknown */"(sendself self-2/1751 text_of_info/1584 0a (field 0 te/1753))";
         var t=/* :: */[0,0,0];
         
         /* unknown */"(sendself self-2/1751 texi_of_text/1693 t/1754)";
         },
       texi_of_exception,
       function(self$neg2,e)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1762 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1762 minus/1531)\n        (makeblock 0 [0: "exception "]\n          (makeblock 0\n            (makeblock 0\n              (apply (field 0 (field 2 (global Odoc_info!)))\n                (field 0 e/1763)))\n            (makeblock 0\n              (makeblock 0\n                (sendself self-2/1762 string_of_type_args/1592\n                  (field 2 e/1763) (field 3 e/1763)))\n              0a)))))\n    (let (match/2212 = (field 4 e/1763))\n      (if match/2212\n        (let (ea/1765 =a (field 0 match/2212))\n          (makeblock 0 [0: " = "]\n            (makeblock 0\n              (makeblock 0\n                (let (match/2211 = (field 1 ea/1765))\n                  (if match/2211 (field 0 (field 0 match/2211))\n                    (field 0 ea/1765))))\n              0a)))\n        0a))))';
         /* unknown */"(sendself self-2/1762 index/1574 -345182161a (field 0 e/1763))";
         /* unknown */"(sendself self-2/1762 text_of_info/1584 0a (field 1 e/1763))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,0,/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]],
             0);
         
         /* unknown */"(sendself self-2/1762 texi_of_text/1693 t/1764)";
         },
       texi_of_module,
       function(self$neg2,m)
        {var
          is_alias=
           function(param)
            {var match=param[6];
             
             switch(match[0])
              {case 1:return /* true */1;default:return /* false */0;}
             };
         
         var
          is_alias_there=
           function(param)
            {var match=param[6];
             
             var exit;
             
             switch(match[0])
              {case 1:
                var match$1=match[1][2];
                
                if(match$1){exit=61;}else{return /* false */0;}
                
               default:exit=61;}
             
             switch(exit){case 61:return /* true */1;}
             };
         
         var
          resolve_alias_name=
           function(param)
            {var match=param[6];
             
             switch(match[0])
              {case 1:return match[1][1];default:return param[1];}
             };
         
         /* unknown */'(sendself self-2/1768 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1768 minus/1531)\n      (makeblock 0 [0: "module "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 m/1769)))\n          (makeblock 0\n            (makeblock 0\n              (if (apply is_alias/1770 m/1769)\n                (apply (field 15 (global Pervasives!)) " = "\n                  (apply resolve_alias_name/1772 m/1769))\n                ""))\n            0a))))))';
         if(is_alias(m))
          {/* unknown */"(sendself self-2/1768 index/1574 -177755956a (field 0 m/1769))";
           var $js=/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]];
           }
         else
          {var $js=[/* :: */0,/* Newline */0,/* [] */0];}
         /* unknown */"(sendself self-2/1768 text_of_info/1584 0a (field 2 m/1769))";
         var
          t=
           /* :: */[0,
            /* :: */[0,0,/* [] */0],
            /* :: */[0,
             is_alias_there(m)
              ?/* :: */[0,
                /* Ref */[16,
                 resolve_alias_name(m),
                 [/* Some */0,/* RK_module */0],
                 /* None */0],
                [/* :: */0,/* Newline */0,/* [] */0]]
              :/* [] */0,
             /* :: */[0,$js,/* :: */[0,0,/* [] */0]]]];
         
         /* unknown */"(sendself self-2/1768 texi_of_text/1693\n  (apply (field 8 (global List!)) t/1775))";
         },
       texi_of_module_type,
       function(self$neg2,mt)
        {var
          is_alias=
           function(param)
            {var match=param[6];
             
             var exit;
             
             if(match)
              {switch(match[1][0]){case 2:return /* true */1;default:exit=56;}
               }
             else
              {exit=56;}
             
             switch(exit){case 56:return /* false */0;}
             };
         
         var
          is_alias_there=
           function(param)
            {var match=param[6];
             
             var exit;
             
             if(match)
              {var match$1=match[1];
               
               switch(match$1[0])
                {case 2:
                  var match$2=match$1[1][2];
                  
                  if(match$2){exit=54;}else{return /* false */0;}
                  
                 default:exit=54;}
               }
             else
              {exit=54;}
             
             switch(exit){case 54:return /* true */1;}
             };
         
         var
          resolve_alias_name=
           function(param)
            {var match=param[6];
             
             var exit;
             
             if(match)
              {var match$1=match[1];
               
               switch(match$1[0])
                {case 2:return match$1[1][1];default:exit=52;}
               }
             else
              {exit=52;}
             
             switch(exit){case 52:return param[1];}
             };
         
         /* unknown */'(sendself self-2/1777 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1777 minus/1531)\n      (makeblock 0 [0: "module type "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 mt/1778)))\n          (makeblock 0\n            (makeblock 0\n              (if (apply is_alias/1779 mt/1778)\n                (apply (field 15 (global Pervasives!)) " = "\n                  (apply resolve_alias_name/1781 mt/1778))\n                ""))\n            0a))))))';
         if(is_alias(mt))
          {/* unknown */"(sendself self-2/1777 index/1574 448725581a (field 0 mt/1778))";
           var $js=/* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]];
           }
         else
          {var $js=[/* :: */0,/* Newline */0,/* [] */0];}
         /* unknown */"(sendself self-2/1777 text_of_info/1584 0a (field 1 mt/1778))";
         var
          t=
           /* :: */[0,
            /* :: */[0,0,/* [] */0],
            /* :: */[0,
             is_alias_there(mt)
              ?/* :: */[0,
                /* Ref */[16,
                 resolve_alias_name(mt),
                 [/* Some */0,/* RK_module_type */1],
                 /* None */0],
                [/* :: */0,/* Newline */0,/* [] */0]]
              :/* [] */0,
             /* :: */[0,$js,/* :: */[0,0,/* [] */0]]]];
         
         /* unknown */"(sendself self-2/1777 texi_of_text/1693\n  (apply (field 8 (global List!)) t/1784))";
         },
       texi_of_included_module,
       function(self$neg2,im)
        {/* unknown */'(sendself self-2/1786 fixedblock/1708\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a\n      (makeblock 0 (array.unsafe_get self-2/1786 minus/1531)\n        (makeblock 0 [0: "include "]\n          (let (match/2095 = (field 1 im/1787))\n            (if match/2095\n              (let (match/2096 =a (field 0 match/2095))\n                (switch* match/2096\n                 case tag 0:\n                  (let (name/1789 =a (field 0 (field 0 match/2096)))\n                    (makeblock 0 (makeblock 0 name/1789)\n                      (makeblock 0 [0: "\n     "]\n                        (makeblock 0 (makeblock 16 name/1789 [0: 0a] 0a) 0a))))\n                 case tag 1:\n                  (let (name/1790 =a (field 0 (field 0 match/2096)))\n                    (makeblock 0 (makeblock 0 name/1790)\n                      (makeblock 0 [0: "\n     "]\n                        (makeblock 0 (makeblock 16 name/1790 [0: 1a] 0a) 0a))))))\n              (makeblock 0 (makeblock 0 (field 0 im/1787)) 0a))))))\n    (apply (field 21 (global Pervasives!)) [0: 0a 0a]\n      (sendself self-2/1786 text_of_info/1584 0a (field 2 im/1787)))))';
         var t=/* :: */[0,0,/* [] */0];
         
         /* unknown */"(sendself self-2/1786 texi_of_text/1693 t/1788)";
         },
       texi_of_class,
       function(self$neg2,c)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1792 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1792 minus/1531)\n      (makeblock 0 [0: "class "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 c/1793)))\n          0a)))))';
         /* unknown */"(sendself self-2/1792 text_of_info/1584 0a (field 1 c/1793))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,
              0,
              /* :: */[0,
               /* Ref */[16,c[1],[/* Some */0,/* RK_class */2],/* None */0],
               [/* :: */0,/* Newline */0,[/* :: */0,/* Newline */0,/* [] */0]]]],
             0);
         
         /* unknown */"(sendself self-2/1792 texi_of_text/1693 t/1794)";
         },
       texi_of_class_type,
       function(self$neg2,ct)
        {Odoc_info["reset_type_names"](/* () */0);
         /* unknown */'(sendself self-2/1796 fixedblock/1708\n  (makeblock 0 0a\n    (makeblock 0 (array.unsafe_get self-2/1796 minus/1531)\n      (makeblock 0 [0: "class type "]\n        (makeblock 0\n          (makeblock 0\n            (apply (field 0 (field 2 (global Odoc_info!))) (field 0 ct/1797)))\n          0a)))))';
         /* unknown */"(sendself self-2/1796 text_of_info/1584 0a (field 1 ct/1797))";
         var
          t=
           Pervasives["@"]
            (/* :: */[0,
              0,
              /* :: */[0,
               /* Ref */[16,
                ct[1],
                [/* Some */0,/* RK_class_type */3],
                /* None */0],
               [/* :: */0,/* Newline */0,[/* :: */0,/* Newline */0,/* [] */0]]]],
             0);
         
         /* unknown */"(sendself self-2/1796 texi_of_text/1693 t/1798)";
         },
       texi_of_class_element,
       function(self$neg2,class_name,class_ele)
        {switch(class_ele[0])
          {case 0:
            /* unknown */"(sendself self-2/1800 texi_of_attribute/1589 (field 0 class_ele/1802))";
            
           case 1:
            /* unknown */"(sendself self-2/1800 texi_of_method/1590 (field 0 class_ele/1802))";
            
           case 2:
            /* unknown */"(sendself self-2/1800 texi_of_text/1693 (field 0 class_ele/1802))";
            
           }
         },
       texi_of_module_element,
       function(self$neg2,module_name,module_ele)
        {switch(module_ele[0])
          {case 0:
            /* unknown */"(sendself self-2/1807 texi_of_module/1596 (field 0 module_ele/1809))";
            
           case 1:
            /* unknown */"(sendself self-2/1807 texi_of_module_type/1597 (field 0 module_ele/1809))";
            
           case 2:
            /* unknown */"(sendself self-2/1807 texi_of_included_module/1598 (field 0 module_ele/1809))";
            
           case 3:
            /* unknown */"(sendself self-2/1807 texi_of_class/1599 (field 0 module_ele/1809))";
            
           case 4:
            /* unknown */"(sendself self-2/1807 texi_of_class_type/1600 (field 0 module_ele/1809))";
            
           case 5:
            /* unknown */"(sendself self-2/1807 texi_of_value/1588 (field 0 module_ele/1809))";
            
           case 6:
            /* unknown */"(sendself self-2/1807 texi_of_type_extension/1594 module_name/1808\n  (field 0 module_ele/1809))";
            
           case 7:
            /* unknown */"(sendself self-2/1807 texi_of_exception/1595 (field 0 module_ele/1809))";
            
           case 8:
            /* unknown */"(sendself self-2/1807 texi_of_type/1593 (field 0 module_ele/1809))";
            
           case 9:
            /* unknown */"(sendself self-2/1807 texi_of_text/1693\n  (apply (field 21 (global Pervasives!))\n    (makeblock 0 0a (field 0 module_ele/1809)) [0: 0a 0a]))";
            
           }
         },
       generate_inheritance_info,
       function(self$neg2,chanout,inher_l)
        {var
          f=
           function(inh)
            {var match=inh[2];
             
             if(match)
              {switch(match[1][0])
                {case 0:var kind=[/* Some */0,/* RK_class */2];
                 case 1:var kind=[/* Some */0,/* RK_class_type */3];
                 }
               
               var match$1=inh[3];
               
               return /* :: */[0,
                       /* Code */[1,inh[1]],
                       /* :: */[0,
                        /* Ref */[16,inh[1],kind,/* None */0],
                        match$1?/* :: */[0,/* Newline */0,match$1[1]]:/* [] */0]];
               }
             else
              {var match$2=inh[3];
               
               return /* :: */[0,
                       /* Code */[1,inh[1]],
                       match$2?/* :: */[0,/* Newline */0,match$2[1]]:/* [] */0];
               }
             };
         
         var
          text$1=
           /* :: */[0,
            /* Bold */[4,
             /* :: */[0,/* Raw */[0,Odoc_messages["inherits"]],/* [] */0]],
            /* :: */[0,
             /* List */[10,List["map"](f,inher_l)],
             [/* :: */0,/* Newline */0,/* [] */0]]];
         
         /* unknown */"(sendself self-2/1821 texi_of_text/1693 text/1830)";
         return puts(chanout,0);
         },
       generate_class_inheritance_info,
       function(self$neg2,chanout,cl)
        {var
          iter_kind=
           function(param)
            {var exit;
             
             switch(param[0])
              {case 0:
                var l=param[1];
                
                if(l)
                 {/* unknown */"(sendself self-2/1832 generate_inheritance_info/1603 chanout/1833 l/1836)";
                  }
                else
                 {return /* () */0;}
                
               case 1:exit=43;
               case 2:exit=43;
               case 3:return iter_kind(param[1]);
               }
             
             switch(exit){case 43:return /* () */0;}
             };
         
         return iter_kind(cl[6]);
         },
       generate_class_type_inheritance_info,
       function(self$neg2,chanout,clt)
        {var match=clt[6];
         
         switch(match[0])
          {case 0:
            var l=match[1];
            
            if(l)
             {/* unknown */"(sendself self-2/1839 generate_inheritance_info/1603 chanout/1840 l/1842)";
              }
            else
             {return /* () */0;}
            
           case 1:return /* () */0;
           }
         },
       generate_for_class,
       function(self$neg2,chanout,c)
        {try
          {Odoc_info["reset_type_names"](/* () */0);
           var depth=Odoc_info["Name"][3](c[1]);
           
           /* unknown */"(sendself self-2/1844 node/1573 depth/1847 (field 0 c/1846))";
           /* unknown */"(sendself self-2/1844 index/1574 -611981288a (field 0 c/1846))";
           var
            title=
             /* :: */[0,
              0,
              /* :: */[0,
               /* Title */[13,
                depth,
                /* None */0,
                /* :: */[0,
                 /* Raw */[0,Pervasives["^"](Odoc_messages["clas"]," ")],
                 /* :: */[0,/* Code */[1,c[1]],/* [] */0]]],
               /* :: */[0,0,/* [] */0]]];
           
           /* unknown */"(sendself self-2/1844 texi_of_text/1693 title/1848)";
           puts(chanout,0);
           if(is(c[2]))
            {var
              descr=
               /* :: */[0,
                /* Title */[13,
                 1+depth,
                 /* None */0,
                 /* :: */[0,
                  /* Raw */[0,Odoc_messages["description"]],
                  /* [] */0]],
                /* [] */0];
             
             /* unknown */"(sendself self-2/1844 texi_of_text/1693 descr/1849)";
             puts(chanout,0);
             /* unknown */"(sendself self-2/1844 texi_of_info/1585 (field 1 c/1846))";
             puts(chanout,0)}
           else
            {}
           
           var
            intf=
             /* :: */[0,
              /* Title */[13,
               1+depth,
               /* None */0,
               /* :: */[0,/* Raw */[0,Odoc_messages["interface"]],/* [] */0]],
              /* [] */0];
           
           /* unknown */"(sendself self-2/1844 texi_of_text/1693 intf/1850)";
           puts(chanout,0);
           /* unknown */"(sendself self-2/1844 generate_class_inheritance_info/1604 chanout/1845\n  c/1846)";
           
           return List["iter"]
                   (function(ele)
                     {/* unknown */"(sendself self-2/1844 texi_of_class_element/1601 (field 0 c/1846) ele/1851)";
                      return puts(chanout,0);
                      },
                    Odoc_info["Class"][1]([/* Some */0,/* false */0],c));
           }
         catch(exn){if(exn===Aliased_node){return /* () */0;}else{throw exn;}}
         },
       generate_for_class_type,
       function(self$neg2,chanout,ct)
        {try
          {Odoc_info["reset_type_names"](/* () */0);
           var depth=Odoc_info["Name"][3](ct[1]);
           
           /* unknown */"(sendself self-2/1853 node/1573 depth/1856 (field 0 ct/1855))";
           /* unknown */"(sendself self-2/1853 index/1574 649842561a (field 0 ct/1855))";
           var
            title=
             /* :: */[0,
              0,
              /* :: */[0,
               /* Title */[13,
                depth,
                /* None */0,
                /* :: */[0,
                 /* Raw */[0,Pervasives["^"](Odoc_messages["class_type"]," ")],
                 /* :: */[0,/* Code */[1,ct[1]],/* [] */0]]],
               /* :: */[0,0,/* [] */0]]];
           
           /* unknown */"(sendself self-2/1853 texi_of_text/1693 title/1857)";
           puts(chanout,0);
           if(is(ct[2]))
            {var
              descr=
               /* :: */[0,
                /* Title */[13,
                 1+depth,
                 /* None */0,
                 /* :: */[0,
                  /* Raw */[0,Odoc_messages["description"]],
                  /* [] */0]],
                /* [] */0];
             
             /* unknown */"(sendself self-2/1853 texi_of_text/1693 descr/1858)";
             puts(chanout,0);
             /* unknown */"(sendself self-2/1853 texi_of_info/1585 (field 1 ct/1855))";
             puts(chanout,0)}
           else
            {}
           
           var
            intf=
             /* :: */[0,
              /* Title */[13,
               1+depth,
               /* None */0,
               /* :: */[0,/* Raw */[0,Odoc_messages["interface"]],/* [] */0]],
              /* [] */0];
           
           /* unknown */"(sendself self-2/1853 texi_of_text/1693 intf/1859)";
           puts(chanout,0);
           /* unknown */"(sendself self-2/1853 generate_class_type_inheritance_info/1605 chanout/1854\n  ct/1855)";
           
           return List["iter"]
                   (function(ele)
                     {/* unknown */"(sendself self-2/1853 texi_of_class_element/1601 (field 0 ct/1855) ele/1860)";
                      return puts(chanout,0);
                      },
                    Odoc_info["Class"][6]([/* Some */0,/* false */0],ct));
           }
         catch(exn){if(exn===Aliased_node){return /* () */0;}else{throw exn;}}
         },
       generate_for_module_type,
       function(self$neg2,chanout,mt)
        {try
          {var depth=Odoc_info["Name"][3](mt[1]);
           
           /* unknown */"(sendself self-2/1862 node/1573 depth/1865 (field 0 mt/1864))";
           /* unknown */"(sendself self-2/1862 index/1574 448725581a (field 0 mt/1864))";
           var
            title=
             /* :: */[0,
              0,
              /* :: */[0,
               /* Title */[13,
                depth,
                /* None */0,
                /* :: */[0,
                 /* Raw */[0,
                  Pervasives["^"](Odoc_messages["module_type"]," ")],
                 /* :: */[0,/* Code */[1,mt[1]],/* [] */0]]],
               /* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]]];
           
           /* unknown */"(sendself self-2/1862 texi_of_text/1693 title/1866)";
           puts(chanout,0);
           if(is(mt[2]))
            {var
              descr=
               /* :: */[0,
                /* Title */[13,
                 1+depth,
                 /* None */0,
                 /* :: */[0,
                  /* Raw */[0,Odoc_messages["description"]],
                  /* [] */0]],
                /* [] */0];
             
             /* unknown */"(sendself self-2/1862 texi_of_text/1693 descr/1867)";
             puts(chanout,0);
             /* unknown */"(sendself self-2/1862 texi_of_info/1585 (field 1 mt/1864))";
             puts(chanout,0)}
           else
            {}
           
           var mt_ele=Odoc_info["Module"][17]([/* Some */0,/* true */1],mt);
           
           var subparts=module_subparts(mt_ele);
           
           if(depth<self$neg2[maxdepth+1]&&subparts!==/* [] */0)
            {/* unknown */'(sendself self-2/1862 heading/1871 (1+ depth/1865) [0: [0: "Subparts"] 0a])';
             var menu=Texi[6](0);
             
             puts(chanout,menu),Texi[4](chanout,subparts)}
           else
            {}
           
           var
            intf=
             /* :: */[0,
              /* Title */[13,
               1+depth,
               /* None */0,
               /* :: */[0,/* Raw */[0,Odoc_messages["interface"]],/* [] */0]],
              /* [] */0];
           
           /* unknown */"(sendself self-2/1862 texi_of_text/1693 intf/1872)";
           puts(chanout,0);
           List["iter"]
            (function(ele)
              {/* unknown */"(sendself self-2/1862 texi_of_module_element/1602 (field 0 mt/1864) ele/1873)";
               return puts(chanout,0);
               },
             mt_ele);
           return List["iter"]
                   (function(param)
                     {var variant=param[1];
                      
                      if(variant>=448725581)
                       {if(variant>=649842561)
                         {/* unknown */"(sendself self-2/1862 generate_for_class_type/1607 chanout/1863\n  (field 1 param/2057))";
                          }
                        else
                         {/* unknown */"(sendself self-2/1862 generate_for_module_type/1608 chanout/1863\n  (field 1 param/2057))";
                          }
                        }
                      else
                       {if(variant>=-177755956)
                         {/* unknown */"(sendself self-2/1862 generate_for_module/1609 chanout/1863\n  (field 1 param/2057))";
                          }
                        else
                         {/* unknown */"(sendself self-2/1862 generate_for_class/1606 chanout/1863\n  (field 1 param/2057))";
                          }
                        }
                      },
                    subparts);
           }
         catch(exn){if(exn===Aliased_node){return /* () */0;}else{throw exn;}}
         },
       generate_for_module,
       function(self$neg2,chanout,m)
        {try
          {Odoc_info["verbose"](Pervasives["^"]("Generate for module ",m[1]));
           var depth=Odoc_info["Name"][3](m[1]);
           
           /* unknown */"(sendself self-2/1879 node/1573 depth/1882 (field 0 m/1881))";
           /* unknown */"(sendself self-2/1879 index/1574 -177755956a (field 0 m/1881))";
           var
            title=
             /* :: */[0,
              0,
              /* :: */[0,
               /* Title */[13,
                depth,
                /* None */0,
                m[11]
                 ?/* :: */[0,/* Raw */[0,m[1]],/* [] */0]
                 :/* :: */[0,
                   /* Raw */[0,Pervasives["^"](Odoc_messages["modul"]," ")],
                   /* :: */[0,/* Code */[1,m[1]],/* [] */0]]],
               /* :: */[0,0,[/* :: */0,/* Newline */0,/* [] */0]]]];
           
           /* unknown */"(sendself self-2/1879 texi_of_text/1693 title/1883)";
           puts(chanout,0);
           if(is(m[3]))
            {var
              descr=
               /* :: */[0,
                /* Title */[13,
                 1+depth,
                 /* None */0,
                 /* :: */[0,
                  /* Raw */[0,Odoc_messages["description"]],
                  /* [] */0]],
                /* [] */0];
             
             /* unknown */"(sendself self-2/1879 texi_of_text/1693 descr/1884)";
             puts(chanout,0);
             /* unknown */"(sendself self-2/1879 texi_of_info/1585 (field 2 m/1881))";
             puts(chanout,0)}
           else
            {}
           
           var m_ele=Odoc_info["Module"][1]([/* Some */0,/* true */1],m);
           
           var subparts=module_subparts(m_ele);
           
           if(depth<self$neg2[maxdepth+1]&&subparts!==/* [] */0)
            {/* unknown */'(sendself self-2/1879 heading/1871 (1+ depth/1882) [0: [0: "Subparts"] 0a])';
             var menu=Texi[6](0);
             
             puts(chanout,menu),Texi[4](chanout,subparts)}
           else
            {}
           
           var
            intf=
             /* :: */[0,
              /* Title */[13,
               1+depth,
               /* None */0,
               /* :: */[0,/* Raw */[0,Odoc_messages["interface"]],/* [] */0]],
              /* [] */0];
           
           /* unknown */"(sendself self-2/1879 texi_of_text/1693 intf/1888)";
           puts(chanout,0);
           List["iter"]
            (function(ele)
              {/* unknown */"(sendself self-2/1879 texi_of_module_element/1602 (field 0 m/1881) ele/1889)";
               return puts(chanout,0);
               },
             m_ele);
           return List["iter"]
                   (function(param)
                     {var variant=param[1];
                      
                      if(variant>=448725581)
                       {if(variant>=649842561)
                         {/* unknown */"(sendself self-2/1879 generate_for_class_type/1607 chanout/1880\n  (field 1 param/2047))";
                          }
                        else
                         {/* unknown */"(sendself self-2/1879 generate_for_module_type/1608 chanout/1880\n  (field 1 param/2047))";
                          }
                        }
                      else
                       {if(variant>=-177755956)
                         {/* unknown */"(sendself self-2/1879 generate_for_module/1609 chanout/1880\n  (field 1 param/2047))";
                          }
                        else
                         {/* unknown */"(sendself self-2/1879 generate_for_class/1606 chanout/1880\n  (field 1 param/2047))";
                          }
                        }
                      },
                    subparts);
           }
         catch(exn){if(exn===Aliased_node){return /* () */0;}else{throw exn;}}
         },
       generate_texi_header,
       function(self$neg2,chan,texi_filename,m_list)
        {var match=Odoc_info["Global"][6][1];
         
         if(match)
          {/* unknown */"(sendself self-2/1895 escape/1901 (field 0 match/2044))";
           }
         else
          {var title="";}
         
         if
          (CamlPrimitive["caml_string_notequal"]
            (texi_filename,"ocamldoc.texi"))
          {var fn=Filename["basename"](texi_filename);
           
           var
            filename=
             Pervasives["^"]
              (Filename["check_suffix"](fn,".texi")
                ?Filename["chop_suffix"](fn,".texi")
                :fn,
               ".info");
           }
         else
          {if(CamlPrimitive["caml_string_notequal"](title,""))
            {var filename=Pervasives["^"](title,".info");}
           else
            {var filename="doc.info";}
           }
         
         List["iter"]
          (puts_nl(chan),
           List["flatten"]
            (/* :: */[0,
              /* :: */[0,
               "\input texinfo   @c -*-texinfo-*-",
               /* :: */[0,
                "@c %**start of header",
                /* :: */[0,
                 Pervasives["^"]("@setfilename ",filename),
                 /* :: */[0,
                  Pervasives["^"]("@settitle ",title),
                  [/* :: */0,"@c %**end of header",/* [] */0]]]]],
              /* :: */[0,
               Odoc_info["Global"][9][1]
                ?List["map"]
                  (function(ind)
                    {return Pervasives["^"]("@defcodeindex ",indices(ind));},
                   self$neg2[indices_to_build+1])
                :/* [] */0,
               /* :: */[0,
                /* :: */[0,Texi[7](info_section[1]),/* [] */0],
                /* :: */[0,
                 Texi[8]
                  (info_entry[1]!==/* [] */0
                    ?info_entry[1]
                    :/* :: */[0,
                      Printf["sprintf"]
                       ([/* Format */0,
                         [/* String_literal */11,
                          "* ",
                          [/* String */2,
                           /* No_padding */0,
                           [/* String_literal */11,
                            ": (",
                            [/* String */2,
                             /* No_padding */0,
                             [/* String_literal */11,").",/* End_of_format */0]]]]],
                         "* %s: (%s)."],
                        title,
                        Filename["chop_suffix"](filename,".info")),
                      /* [] */0]),
                 /* :: */[0,
                  /* :: */[0,
                   "@ifinfo",
                   /* :: */[0,
                    "This file was generated by Ocamldoc using the Texinfo generator.",
                    /* :: */[0,
                     "@end ifinfo",
                     /* :: */[0,
                      "@c no titlepage.",
                      /* :: */[0,
                       "@node Top, , , (dir)",
                       /* :: */[0,Pervasives["^"]("@top ",title),/* [] */0]]]]]],
                  /* [] */0]]]]]));
         var match$1=Odoc_info["Global"][7][1];
         
         if(match$1)
          {nl(chan);
           /* unknown */"(sendself self-2/1895 texi_of_info/1585\n  (makeblock 0\n    (apply (field 48 (global Odoc_info!)) m_list/1898 (field 0 match/2042))))";
           puts_nl(chan,0)}
         else
          {if(CamlPrimitive["caml_string_notequal"](title,""))
            {puts_nl(chan,"@ifinfo"),
             puts_nl(chan,Pervasives["^"]("Documentation for ",title)),
             puts_nl(chan,"@end ifinfo")}
           else
            {puts_nl(chan,"@c no title given")}
           }
         
         if(Odoc_info["Global"][9][1])
          {var
            indices_names_to_build=
             List["map"](indices,self$neg2[indices_to_build+1]);
           
           var
            $js=
             List["rev"]
              (List["fold_left"]
                (function(acc,param)
                  {if(List["mem"](param[2],indices_names_to_build))
                    {return /* :: */[0,
                             /* `Index */[0,
                              -784200974,
                              Pervasives["^"](param[1]," index")],
                             acc];
                     }
                   else
                    {return acc;}
                   },
                 [/* :: */0,
                  [/* `Comment */0,-826170817,"Indices :"],
                  [/* :: */0,/* Blank */-937472204,/* [] */0]],
                 indices_names));
           }
         else
          {var $js=/* [] */0;}
         return Texi[4]
                 (chan,
                  Pervasives["@"]
                   (List["map"]
                     (function(m){return /* `Module */[0,-177755956,m];},m_list),
                    $js));
         },
       generate_texi_trailer,
       function(self$neg2,chan)
        {nl(chan);
         if(Odoc_info["Global"][9][1])
          {var
            indices_names_to_build=
             List["map"](indices,self$neg2[indices_to_build+1]);
           
           List["iter"]
            (puts_nl(chan),
             List["flatten"]
              (List["map"]
                (function(param)
                  {var shortname=param[2];
                   
                   var longname=param[1];
                   
                   if(List["mem"](shortname,indices_names_to_build))
                    {return /* :: */[0,
                             Pervasives["^"]
                              ("@node ",Pervasives["^"](longname," index,")),
                             /* :: */[0,
                              Pervasives["^"]
                               ("@unnumbered ",Pervasives["^"](longname," index")),
                              /* :: */[0,
                               Pervasives["^"]("@printindex ",shortname),
                               /* [] */0]]];
                     }
                   else
                    {return /* [] */0;}
                   },
                 indices_names)));
           if(Odoc_info["Global"][8][1]){puts_nl(chan,"@contents")}else{}
           
           return puts_nl(chan,"@bye");
           }
         else
          {return 0;}
         },
       do_index,
       function(self$neg2,it)
        {if(!List["mem"](it,self$neg2[indices_to_build+1]))
          {return self$neg2[indices_to_build+1]=
                  /* :: */[0,it,self$neg2[indices_to_build+1]],
                  0;
           }
         else
          {return 0;}
         },
       scan_for_index,
       function(self$neg2,param)
        {var variant=param[1];
         
         if(variant>=448725581)
          {if(variant>=649842561)
            {var
              c_ele=
               Odoc_info["Class"][6]([/* Some */0,/* true */1],param[2]);
             
             /* unknown */"(sendself self-2/1921 scan_for_index_in_class/1615)";
             return List["iter"](0,c_ele);
             }
           else
            {var
              m_ele=
               Odoc_info["Module"][17]([/* Some */0,/* true */1],param[2]);
             
             /* unknown */"(sendself self-2/1921 scan_for_index_in_mod/1614)";
             return List["iter"](0,m_ele);
             }
           }
         else
          {if(variant>=-177755956)
            {var
              m_ele$1=
               Odoc_info["Module"][1]([/* Some */0,/* true */1],param[2]);
             
             /* unknown */"(sendself self-2/1921 scan_for_index_in_mod/1614)";
             return List["iter"](0,m_ele$1);
             }
           else
            {var
              c_ele$1=
               Odoc_info["Class"][1]([/* Some */0,/* true */1],param[2]);
             
             /* unknown */"(sendself self-2/1921 scan_for_index_in_class/1615)";
             return List["iter"](0,c_ele$1);
             }
           }
         },
       scan_for_index_in_mod,
       function(self$neg2,param)
        {var exit;
         
         switch(param[0])
          {case 0:
            /* unknown */"(sendself self-2/1931 do_index/1612 -177755956a)";
            
            /* unknown */"(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 -177755956 (field 0 param/2026)))";
            
           case 1:
            /* unknown */"(sendself self-2/1931 do_index/1612 448725581a)";
            
            /* unknown */"(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 448725581 (field 0 param/2026)))";
            
           case 2:exit=6;
           case 3:
            /* unknown */"(sendself self-2/1931 do_index/1612 -611981288a)";
            
            /* unknown */"(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 -611981288 (field 0 param/2026)))";
            
           case 4:
            /* unknown */"(sendself self-2/1931 do_index/1612 649842561a)";
            
            /* unknown */"(sendself self-2/1931 scan_for_index/1613\n  (makeblock 0 649842561 (field 0 param/2026)))";
            
           case 5:
            /* unknown */"(sendself self-2/1931 do_index/1612 -991563951a)";
           case 6:
            /* unknown */"(sendself self-2/1931 do_index/1612 115569503a)";
           case 7:
            /* unknown */"(sendself self-2/1931 do_index/1612 -345182161a)";
           case 8:
            /* unknown */"(sendself self-2/1931 do_index/1612 937565914a)";
           case 9:exit=6;
           }
         
         switch(exit){case 6:return /* () */0;}
         },
       scan_for_index_in_class,
       function(self$neg2,param)
        {switch(param[0])
          {case 0:
            /* unknown */"(sendself self-2/1937 do_index/1612 156047674a)";
           case 1:
            /* unknown */"(sendself self-2/1937 do_index/1612 1039100673a)";
           case 2:return /* () */0;
           }
         },
       generate,
       function(self$neg2,module_list)
        {Hashtbl["clear"](self$neg2[node_tbl+1]);
         if
          (CamlPrimitive["caml_string_equal"]
            (Odoc_info["Global"][3][1],Odoc_messages["default_out_file"]))
          {var filename="ocamldoc.texi";}
         else
          {var filename=Odoc_info["Global"][3][1];}
         
         if(Odoc_info["Global"][9][1])
          {/* unknown */"(sendself self-2/1939 scan_for_index/1613)";
           List["iter"]
            (0,
             List["map"]
              (function(m){return /* `Module */[0,-177755956,m];},module_list))}
         else
          {}
         
         try
          {var
            chanout=
             Pervasives["open_out"]
              (Filename["concat"](Odoc_info["Global"][5][1],filename));
           
           if(Odoc_info["Global"][10][1])
            {/* unknown */"(sendself self-2/1939 generate_texi_header/1610 chanout/1943 filename/1941\n  module_list/1940)";
             }
           else
            {}
           
           /* unknown */"(sendself self-2/1939 generate_for_module/1609 chanout/1943)";
           List["iter"](0,module_list);
           if(Odoc_info["Global"][11][1])
            {/* unknown */"(sendself self-2/1939 generate_texi_trailer/1611 chanout/1943)";
             }
           else
            {}
           
           return Pervasives["close_out"](chanout);
           }
         catch(exn)
          {var exit;
           
           if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
            {var s=exn[2];exit=2;}
           else
            {if(exn[1]===CamlPrimitive["caml_global_data"]["Sys_error"])
              {var s=exn[2];exit=2;}
             else
              {throw exn;}
             }
           
           switch(exit)
            {case 2:
              Pervasives["prerr_endline"](s);return Odoc_info["errors"][0]++;
             }
           }
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1),
      obj_init$1($$self$1),
      $$self$1[maxdepth+1]=
      4,
      $$self$1[bullet+1]=
      [/* Verbatim */3," @bullet{} "],
      $$self$1[minus+1]=
      [/* Verbatim */3," @minus{} "],
      $$self$1[linebreak+1]=
      [/* Verbatim */3,"@*\n"],
      $$self$1[indices_to_build+1]=
      [/* :: */0,/* Module */-177755956,/* [] */0],
      $$self$1[node_tbl+1]=
      Hashtbl["create"](/* None */0,37);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 texi=
  CamlinternalOO["make_class"]
   ([0,
     "text_of_module_kind",
     "text_of_parameter_list",
     "text_of_class_params",
     "node",
     "text_of_module_type",
     "text_of_class_type_param_expr_list",
     "text_of_class_type_kind",
     "texi_of_text_element",
     "generate_for_class_type",
     "texi_of_Newline",
     "texi_of_info",
     "relative_idents",
     "string_of_type_parameters",
     "texi_of_class_element",
     "text_of_return_opt",
     "texi_of_Superscript",
     "texi_of_text",
     "texi_of_type",
     "generate_class_type_inheritance_info",
     "texi_of_Emphasize",
     "text_of_see",
     "scan_for_index_in_mod",
     "generate",
     "text_of_desc",
     "generate_for_module",
     "escape",
     "text_of_exception",
     "generate_texi_trailer",
     "text_of_info",
     "texi_of_Raw",
     "texi_of_Ref",
     "heading",
     "normal_type_list",
     "text_of_sees",
     "text_of_module_parameter_list",
     "text_of_parameter_description",
     "text_of_value",
     "texi_of_type_extension",
     "text_of_params",
     "text_el_of_type_expr",
     "texi_of_Subscript",
     "label",
     "texi_of_Right",
     "texi_of_Verbatim",
     "normal_type",
     "texi_of_method",
     "text_of_version_opt",
     "normal_class_type_param_list",
     "texi_of_included_module",
     "texi_of_exception",
     "text_of_sees_opt",
     "texi_of_custom_text",
     "text_of_type_expr_list",
     "text_of_method",
     "fixedblock",
     "text_of_class_kind",
     "normal_class_type",
     "text_of_attribute",
     "texi_of_CodePre",
     "generate_texi_header",
     "text_of_before",
     "texi_of_Title",
     "do_index",
     "text_of_short_type_expr",
     "normal_module_type",
     "text_of_since_opt",
     "scan_for_index_in_class",
     "texi_of_value",
     "scan_for_index",
     "texi_of_class_type",
     "generate_for_class",
     "texi_of_Center",
     "texi_of_Italic",
     "texi_of_module_element",
     "texi_of_Target",
     "texi_of_attribute",
     "generate_for_module_type",
     "text_of_author_list",
     "normal_class_params",
     "string_of_type_args",
     "texi_of_Bold",
     "text_of_module_type_kind",
     "texi_of_Code",
     "texi_of_module",
     "generate_inheritance_info",
     "texi_of_Enum",
     "text_of_type_expr",
     "texi_of_Left",
     "texi_of_Link",
     "texi_of_List",
     "texi_of_module_type",
     "text_of_custom",
     "texi_of_Block",
     "texi_of_class",
     "text_of_raised_exceptions",
     "index",
     "relative_module_idents",
     "generate_class_inheritance_info"],
    texi_init);

var Generator=[0,texi];

module["exports"]=
{"esc_8bits":esc_8bits,
 "info_section":info_section,
 "info_entry":info_entry,
 "puts_nl":puts_nl,
 "puts":puts,
 "nl":nl,
 "is":is,
 "pad_to":pad_to,
 "indent":indent,
 "nothing":nothing,
 "module_subparts":module_subparts,
 "indices":indices,
 "indices_names":indices_names,
 "Texi":Texi,
 "text":text,
 "Aliased_node":Aliased_node,
 "Generator":Generator};

