var String=require("String");
var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Str=require("Str");
var Odoc_messages=require("Odoc_messages");
var
 shared=
  [0,
   "text_of_author_list",
   "text_of_before",
   "text_of_custom",
   "text_of_info",
   "text_of_raised_exceptions",
   "text_of_return_opt",
   "text_of_see",
   "text_of_sees",
   "text_of_since_opt",
   "text_of_version_opt"];
var shared$1=[0,"tag_functions"];
var
 shared$2=
  [0,
   "text_of_value",
   "text_of_type_expr_list",
   "text_of_type_expr",
   "text_of_short_type_expr",
   "text_of_parameter_list",
   "text_of_parameter_description",
   "text_of_module_type_kind",
   "text_of_module_type",
   "text_of_module_parameter_list",
   "text_of_module_kind",
   "text_of_method",
   "text_of_info",
   "text_of_exception",
   "text_of_class_type_param_expr_list",
   "text_of_class_type_kind",
   "text_of_class_params",
   "text_of_class_kind",
   "text_of_attribute",
   "relative_module_idents",
   "relative_idents",
   "normal_type_list",
   "normal_type",
   "normal_module_type",
   "normal_class_type_param_list",
   "normal_class_type",
   "normal_class_params",
   "label"];
var
 shared$3=
  [0,
   "text_of_version_opt",
   "text_of_since_opt",
   "text_of_sees",
   "text_of_see",
   "text_of_return_opt",
   "text_of_raised_exceptions",
   "text_of_info",
   "text_of_custom",
   "text_of_before",
   "text_of_author_list"];
var
 info=
  [0,
   0,
   function(class)
    {var $js=CamlinternalOO["new_methods_variables"];
     var ids=$js(class,shared$3,shared$1);
     var text_of_version_opt=ids[1];
     var text_of_since_opt=ids[2];
     var text_of_sees=ids[3];
     var text_of_see=ids[4];
     var text_of_return_opt=ids[5];
     var text_of_raised_exceptions=ids[6];
     var text_of_info=ids[7];
     var text_of_custom=ids[8];
     var text_of_before=ids[9];
     var text_of_author_list=ids[10];
     var tag_functions=ids[11];
     var $js$1=CamlinternalOO["set_methods"];
     $js$1
      (class,
       [0,
        text_of_author_list,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=Pervasives["^"];
            var $js$4=$js$3(Odoc_messages["authors"],": ");
            var $js$5=[0,$js$4];
            var $js$6=[0,$js$5,0];
            var $js$7=[4,$js$6];
            var $js$8=String["concat"];
            var $js$9=$js$8(", ",l);
            var $js$10=[0,$js$9];
            var $js$11=[0,$js$10,[0,0,0]];
            return [0,$js$7,$js$11]}
          else
           {return 0}},
        text_of_version_opt,
        function(self-1,v_opt)
         {var $js$2=v_opt;
          if($js$2)
           {var $js$3=Pervasives["^"];
            var $js$4=$js$3(Odoc_messages["version"],": ");
            var $js$5=[0,$js$4];
            var $js$6=[0,$js$5,0];
            var $js$7=[4,$js$6];
            return [0,$js$7,[0,[0,v_opt[1]],[0,0,0]]]}
          else
           {return 0}},
        text_of_since_opt,
        function(self-1,s_opt)
         {var $js$2=s_opt;
          if($js$2)
           {var $js$3=Pervasives["^"];
            var $js$4=$js$3(Odoc_messages["since"],": ");
            var $js$5=[0,$js$4];
            var $js$6=[0,$js$5,0];
            var $js$7=[4,$js$6];
            return [0,$js$7,[0,[0,s_opt[1]],[0,0,0]]]}
          else
           {return 0}},
        text_of_before,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var
             f=
              function(param)
               {var $js$3=Pervasives["@"];
                var $js$4=Printf["sprintf"];
                var
                 $js$5=
                  $js$4
                   ([0,[2,0,[12,32,[2,0,[12,32,0]]]],"%s %s "],
                    Odoc_messages["before"],
                    param[1]);
                var $js$6=[0,$js$5];
                var $js$7=[0,$js$6,0];
                var $js$8=[4,$js$7];
                var $js$9=[0,$js$8,param[2]];
                return $js$3($js$9,[0,0,0])};
            var $js$3=List["flatten"];
            var $js$4=List["map"];
            var $js$5=$js$4(f,l);
            return $js$3($js$5)}
          else
           {return 0}},
        text_of_raised_exceptions,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=l[2];
            if($js$3)
             {var $js$4=List["map"];
              var
               $js$5=
                $js$4
                 (function(param)
                   {return [0,[1,param[1]],[0,[0," "],param[2]]]},
                  l);
              var $js$6=[10,$js$5];
              var $js$7=[0,$js$6,[0,0,0]];
              var $js$8=[0,[0," "],$js$7];
              return [0,[4,[0,[0,Odoc_messages["raises"]],0]],$js$8]}
            else
             {var match=l[1];
              var $js$9=Pervasives["@"];
              var $js$10=Pervasives["@"];
              var $js$11=$js$10(match[2],[0,0,0]);
              return $js$9
                      ([0,
                        [4,[0,[0,Odoc_messages["raises"]],0]],
                        [0,[0," "],[0,[1,match[1]],[0,[0," "],0]]]],
                       $js$11)}}
          else
           {return 0}},
        text_of_see,
        function(self-1,param)
         {var t=param[2];
          var see_ref=param[1];
          var $js$2=see_ref;
          if($js$2==0)
           {return [0,[15,see_ref[1],t],0]}
          else
           if($js$2==1)
            {return [0,[1,see_ref[1]],[0,[0," "],t]]}
           else
            if($js$2==2){return [0,[5,[0,[0,see_ref[1]],0]],[0,[0," "],t]]}},
        text_of_sees,
        function(self-1,l)
         {var $js$2=l;
          if($js$2)
           {var $js$3=l[2];
            if($js$3)
             {var $js$4=List["map"];
              var
               $js$5=
                $js$4
                 (function(see)
                   {"unknown block:(sendself self-1/1266 text_of_see/1228 see/1269)"},
                  l);
              var $js$6=[10,$js$5];
              var $js$7=[0,$js$6,[0,0,0]];
              return [0,[4,[0,[0,Odoc_messages["see_also"]],0]],$js$7]}
            else
             {var $js$8=Pervasives["@"];
              "unknown block:(sendself self-1/1266 text_of_see/1228 (field 0 l/1267))";
              var $js$9=[0,[0," "],$js$10];
              var $js$11=[0,[4,[0,[0,Odoc_messages["see_also"]],0]],$js$9];
              return $js$8($js$11,[0,0,0])}}
          else
           {return 0}},
        text_of_return_opt,
        function(self-1,return_opt)
         {var $js$2=return_opt;
          if($js$2)
           {var $js$3=Pervasives["@"];
            var $js$4=Pervasives["^"];
            var $js$5=$js$4(Odoc_messages["returns"]," ");
            var $js$6=[0,$js$5];
            var $js$7=[0,$js$6,0];
            var $js$8=[4,$js$7];
            var $js$9=[0,$js$8,return_opt[1]];
            return $js$3($js$9,[0,0,0])}
          else
           {return 0}},
        text_of_custom,
        function(self-1,l)
         {var $js$2=List["fold_left"];
          return $js$2
                  (function(acc,param)
                    {var text=param[2];
                     var tag=param[1];
                     try
                      {var $js$3=List["assoc"];
                       var f=$js$3(tag,self-1[tag_functions]);
                       var $js$4=acc;
                       if($js$4)
                        {var $js$5=Pervasives["@"];
                         var $js$6=f(text);
                         var $js$7=[0,0,$js$6];
                         return $js$5(acc,$js$7)}
                       else
                        {return f(text)}}
                     catch(exn)
                      {var $js$8=exn=Not_found;
                       if($js$8)
                        {var $js$9=Odoc_info["warning"];
                         var $js$10=Odoc_messages["tag_not_handled"];
                         var $js$11=$js$10(tag);
                         $js$9($js$11);
                         return acc}
                       else
                        {return "unknown primitive:reraise"}}},
                   0,
                   l)},
        text_of_info,
        function(self-1,*opt*,info_opt)
         {var $js$2=*opt*;
          if($js$2){var block=*opt*[1]}else{var block=1}
          var $js$3=info_opt;
          if($js$3)
           {var info$1=info_opt[1];
            var $js$4=Pervasives["@"];
            var match=info$1[7];
            var $js$5=match;
            if($js$5)
             {var $js$6=Pervasives["^"];
              var $js$7=$js$6(Odoc_messages["deprecated"]," ");
              var $js$8=[0,$js$7];
              var $js$9=[0,$js$8,0];
              var $js$10=[5,$js$9];
              var $js$11=[0,$js$10,match[1]]}
            else
             {var $js$11=0}
            var $js$12=Pervasives["@"];
            var match$1=info$1[1];
            var $js$13=match$1;
            if($js$13)
             {var t=match$1[1];
              var $js$14="unknown primitive:caml_equal";
              if($js$14)
               {var $js$15=0}
              else
               {var $js$16=Pervasives["@"];var $js$15=$js$16(t,[0,0,0])}}
            else
             {var $js$15=0}
            var $js$17=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_author_list/1223 (field 1 info/1287))";
            var $js$18=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_version_opt/1224 (field 2 info/1287))";
            var $js$19=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_before/1226 (field 5 info/1287))";
            var $js$20=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_since_opt/1225 (field 4 info/1287))";
            var $js$21=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_raised_exceptions/1227 (field 8 info/1287))";
            var $js$22=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_return_opt/1230 (field 9 info/1287))";
            var $js$23=Pervasives["@"];
            "unknown block:(sendself self-1/1282 text_of_sees/1229 (field 3 info/1287))";
            "unknown block:(sendself self-1/1282 text_of_custom/1231 (field 10 info/1287))";
            var $js$24=$js$23($js$25,$js$26);
            var $js$27=$js$22($js$28,$js$24);
            var $js$29=$js$21($js$30,$js$27);
            var $js$31=$js$20($js$32,$js$29);
            var $js$33=$js$19($js$34,$js$31);
            var $js$35=$js$18($js$36,$js$33);
            var $js$37=$js$17($js$38,$js$35);
            var $js$39=$js$12($js$15,$js$37);
            var t$1=$js$4($js$11,$js$39);
            var $js$40=block;
            if($js$40){return [0,[12,t$1],0]}else{return t$1}}
          else
           {return 0}}]);
     return function(env,self)
      {var $js$2=CamlinternalOO["create_object_opt"];
       var self$1=$js$2(self,class);
       self$1[tag_functions]=0,0;
       return self$1}},
   0,
   0];
var
 to_text=
  [0,
   0,
   function(class)
    {var $js=CamlinternalOO["get_method_labels"];
     var ids=$js(class,shared$2);
     var text_of_value=ids[1];
     var text_of_type_expr_list=ids[2];
     var text_of_type_expr=ids[3];
     var text_of_short_type_expr=ids[4];
     var text_of_parameter_list=ids[5];
     var text_of_parameter_description=ids[6];
     var text_of_module_type_kind=ids[7];
     var text_of_module_type=ids[8];
     var text_of_module_parameter_list=ids[9];
     var text_of_module_kind=ids[10];
     var text_of_method=ids[11];
     var text_of_info=ids[12];
     var text_of_exception=ids[13];
     var text_of_class_type_param_expr_list=ids[14];
     var text_of_class_type_kind=ids[15];
     var text_of_class_params=ids[16];
     var text_of_class_kind=ids[17];
     var text_of_attribute=ids[18];
     var relative_module_idents=ids[19];
     var relative_idents=ids[20];
     var normal_type_list=ids[21];
     var normal_type=ids[22];
     var normal_module_type=ids[23];
     var normal_class_type_param_list=ids[24];
     var normal_class_type=ids[25];
     var normal_class_params=ids[26];
     var label=ids[27];
     var $js$1=CamlinternalOO["inherits"];
     var inh=$js$1(class,shared$1,0,shared,info,1);
     var obj_init=inh[1];
     var $js$2=CamlinternalOO["set_methods"];
     $js$2
      (class,
       [0,
        relative_idents,
        function(self-2,m_name,s)
         {var
           f=
            function(str_t)
             {var $js$3=Str["matched_string"];
              var match_s=$js$3(str_t);
              var $js$4=Odoc_info["Name"][4];
              var rel=$js$4(m_name,match_s);
              var $js$5=Odoc_info["apply_if_equal"];
              return $js$5(Odoc_info["use_hidden_modules"],match_s,rel)};
          var $js$3=Str["global_substitute"];
          var $js$4=Str["regexp"];
          var
           $js$5=
            $js$4("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([a-z][a-zA-Z_'0-9]*\)");
          return $js$3($js$5,f,s)},
        relative_module_idents,
        function(self-2,m_name,s)
         {var
           f=
            function(str_t)
             {var $js$3=Str["matched_string"];
              var match_s=$js$3(str_t);
              var $js$4=Odoc_info["Name"][4];
              var rel=$js$4(m_name,match_s);
              var $js$5=Odoc_info["apply_if_equal"];
              return $js$5(Odoc_info["use_hidden_modules"],match_s,rel)};
          var $js$3=Str["global_substitute"];
          var $js$4=Str["regexp"];
          var
           $js$5=
            $js$4("\([A-Z]\([a-zA-Z_'0-9]\)*\.\)+\([A-Z][a-zA-Z_'0-9]*\)");
          return $js$3($js$5,f,s)},
        normal_class_type,
        function(self-2,m_name,t)
         {"unknown block:(sendself self-2/1355 relative_idents/1311 m_name/1356\n  (apply (field 19 (global Odoc_info!)) 0a t/1357))"},
        normal_module_type,
        function(self-2,code,m_name,t)
         {"unknown block:(sendself self-2/1359 relative_module_idents/1312 m_name/1361\n  (apply (field 18 (global Odoc_info!)) code/1360 0a t/1362))"},
        normal_type,
        function(self-2,m_name,t)
         {"unknown block:(sendself self-2/1364 relative_idents/1311 m_name/1365\n  (apply (field 12 (global Odoc_info!)) t/1366))"},
        normal_type_list,
        function(self-2,par,m_name,sep,t)
         {"unknown block:(sendself self-2/1368 relative_idents/1311 m_name/1370\n  (apply (field 14 (global Odoc_info!)) par/1369 sep/1371 t/1372))"},
        normal_class_type_param_list,
        function(self-2,m_name,t)
         {"unknown block:(sendself self-2/1374 relative_idents/1311 m_name/1375\n  (apply (field 17 (global Odoc_info!)) t/1376))"},
        normal_class_params,
        function(self-2,m_name,c)
         {var $js$3=Odoc_info["string_of_class_params"];
          var s=$js$3(c);
          "unknown block:(sendself self-2/1378 relative_idents/1311 m_name/1379\n  (apply (field 49 (global Odoc_info!)) s/1381))"},
        text_of_type_expr,
        function(self-2,module_name,t)
         {var $js$3=List["flatten"];
          var $js$4=List["map"];
          var $js$5=Str["split"];
          var $js$6=Str["regexp"];
          var $js$7=$js$6("\n");
          "unknown block:(sendself self-2/1383 normal_type/1315 module_name/1384 t/1385)";
          var $js$8=$js$5($js$7,$js$9);
          var $js$10=$js$4(function(s){return [0,[1,s],[0,0,0]]},$js$8);
          return $js$3($js$10)},
        text_of_short_type_expr,
        function(self-2,module_name,t)
         {"unknown block:(sendself self-2/1389 normal_type/1315 module_name/1390 t/1391)";
          var $js$3=[1,$js$4];
          return [0,$js$3,0]},
        text_of_type_expr_list,
        function(self-2,module_name,sep,l)
         {"unknown block:(sendself self-2/1393 normal_type_list/1316 0a module_name/1394 sep/1395\n  l/1396)";
          var $js$3=[1,$js$4];
          return [0,$js$3,0]},
        text_of_class_type_param_expr_list,
        function(self-2,module_name,l)
         {"unknown block:(sendself self-2/1398 normal_class_type_param_list/1317 module_name/1399\n  l/1400)";
          var $js$3=[1,$js$4];
          return [0,$js$3,0]},
        text_of_class_params,
        function(self-2,module_name,c)
         {var $js$3=Odoc_info["text_concat"];
          var $js$4=List["map"];
          var $js$5=Str["split"];
          var $js$6=Str["regexp"];
          var $js$7=$js$6("\n");
          "unknown block:(sendself self-2/1402 normal_class_params/1318 module_name/1403 c/1404)";
          var $js$8=$js$5($js$7,$js$9);
          var $js$10=$js$4(function(s){return [0,[1,s],0]},$js$8);
          return $js$3([0,0,0],$js$10)},
        text_of_module_type,
        function(self-2,t)
         {var $js$3=String["concat"];
          var $js$4=Str["split"];
          var $js$5=Str["regexp"];
          var $js$6=$js$5("\n");
          var $js$7=Odoc_info["string_of_module_type"];
          var $js$8=$js$7(0,0,t);
          var $js$9=$js$4($js$6,$js$8);
          var s=$js$3("\n",$js$9);
          return [0,[1,s],0]},
        text_of_value,
        function(self-2,v)
         {var name=v[1];
          var $js$3=Odoc_info["Name"][1];
          var s_name=$js$3(name);
          var $js$4=Format["fprintf"];
          "unknown block:(sendself self-2/1412 normal_type/1315\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 v/1413))\n  (field 2 v/1413))";
          $js$4
           (Format["str_formatter"],
            [0,
             [18,
              [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
              [11,"val ",[2,0,[11," :",[17,[0,"@ ",1,0],[2,0,0]]]]]],
             "@[<hov 2>val %s :@ %s"],
            s_name,
            $js$5);
          var $js$6=Format["flush_str_formatter"];
          var s=$js$6(0);
          var $js$7=Pervasives["@"];
          var $js$8=Pervasives["@"];
          var $js$9=Pervasives["^"];
          var $js$10=Pervasives["^"];
          "unknown block:(sendself self-2/1412 label/1310 0a s_name/1415)";
          var $js$11=Pervasives["^"];
          var $js$12=Pervasives["^"];
          "unknown block:(sendself self-2/1412 label/1310 [0: 0a] s_name/1415)";
          var $js$13=$js$12($js$14,"`}\n");
          var $js$15=$js$11("@\verb`",$js$13);
          var $js$16=$js$10($js$17,$js$15);
          var $js$18=$js$9("\index{",$js$16);
          var $js$19=[14,$js$18];
          var $js$20=[0,$js$19,0];
          "unknown block:(sendself self-2/1412 text_of_info/1417 0a (field 1 v/1413))";
          var $js$21=$js$8($js$20,$js$22);
          return $js$7([0,[2,s],0],$js$21)},
        text_of_attribute,
        function(self-2,a)
         {var $js$3=Odoc_info["Name"][1];
          var s_name=$js$3(a[1][1]);
          var $js$4=Odoc_info["Name"][5];
          var mod_name=$js$4(a[1][1]);
          var $js$5=Format["fprintf"];
          var $js$6=a[3];
          if($js$6){var $js$7="virtual "}else{var $js$7=""}
          var $js$8=a[2];
          if($js$8){var $js$9="mutable "}else{var $js$9=""}
          "unknown block:(sendself self-2/1419 normal_type/1315 mod_name/1422\n  (field 2 (field 0 a/1420)))";
          $js$5
           (Format["str_formatter"],
            [0,
             [18,
              [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
              [11,
               "val ",
               [2,0,[2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[2,0,0]]]]]]]],
             "@[<hov 2>val %s%s%s :@ %s"],
            $js$7,
            $js$9,
            s_name,
            $js$10);
          var $js$11=Format["flush_str_formatter"];
          var s=$js$11(0);
          var $js$12=Pervasives["@"];
          var $js$13=Pervasives["^"];
          var $js$14=Pervasives["^"];
          "unknown block:(sendself self-2/1419 label/1310 0a s_name/1421)";
          var $js$15=Pervasives["^"];
          var $js$16=Pervasives["^"];
          "unknown block:(sendself self-2/1419 label/1310 [0: 0a] s_name/1421)";
          var $js$17=$js$16($js$18,"`}\n");
          var $js$19=$js$15("@\verb`",$js$17);
          var $js$20=$js$14($js$21,$js$19);
          var $js$22=$js$13("\index{",$js$20);
          var $js$23=[14,$js$22];
          var $js$24=[0,$js$23,0];
          var $js$25=[0,[2,s],$js$24];
          "unknown block:(sendself self-2/1419 text_of_info/1417 0a (field 1 (field 0 a/1420)))";
          return $js$12($js$25,$js$26)},
        text_of_method,
        function(self-2,m)
         {var $js$3=Odoc_info["Name"][1];
          var s_name=$js$3(m[1][1]);
          var $js$4=Odoc_info["Name"][5];
          var mod_name=$js$4(m[1][1]);
          var $js$5=Format["fprintf"];
          var $js$6=m[2];
          if($js$6){var $js$7="private "}else{var $js$7=""}
          var $js$8=m[3];
          if($js$8){var $js$9="virtual "}else{var $js$9=""}
          "unknown block:(sendself self-2/1425 normal_type/1315 mod_name/1428\n  (field 2 (field 0 m/1426)))";
          $js$5
           (Format["str_formatter"],
            [0,
             [18,
              [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
              [11,
               "method ",
               [2,0,[2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[2,0,0]]]]]]]],
             "@[<hov 2>method %s%s%s :@ %s"],
            $js$7,
            $js$9,
            s_name,
            $js$10);
          var $js$11=Format["flush_str_formatter"];
          var s=$js$11(0);
          var $js$12=Pervasives["@"];
          var $js$13=Pervasives["^"];
          var $js$14=Pervasives["^"];
          "unknown block:(sendself self-2/1425 label/1310 0a s_name/1427)";
          var $js$15=Pervasives["^"];
          var $js$16=Pervasives["^"];
          "unknown block:(sendself self-2/1425 label/1310 [0: 0a] s_name/1427)";
          var $js$17=$js$16($js$18,"`}\n");
          var $js$19=$js$15("@\verb`",$js$17);
          var $js$20=$js$14($js$21,$js$19);
          var $js$22=$js$13("\index{",$js$20);
          var $js$23=[14,$js$22];
          var $js$24=[0,$js$23,0];
          var $js$25=[0,[2,s],$js$24];
          "unknown block:(sendself self-2/1425 text_of_info/1417 0a (field 1 (field 0 m/1426)))";
          return $js$12($js$25,$js$26)},
        text_of_exception,
        function(self-2,e)
         {var $js$3=Odoc_info["Name"][1];
          var s_name=$js$3(e[1]);
          var $js$4=Odoc_info["Name"][5];
          var father=$js$4(e[1]);
          var $js$5=Format["fprintf"];
          $js$5
           (Format["str_formatter"],
            [0,
             [18,[1,[0,[11,"<hov 2>",0],"<hov 2>"]],[11,"exception ",[2,0,0]]],
             "@[<hov 2>exception %s"],
            s_name);
          var match=e[3];
          var match$1=e[4];
          var $js$6=match;
          if($js$6)
           {var $js$7=match$1;
            if($js$7)
             {var $js$8=Format["fprintf"];
              'unknown block:(sendself self-2/1431 normal_type_list/1316 [0: 0a] father/1434 " * "\n  match/1607)';
              "unknown block:(sendself self-2/1431 normal_type/1315 father/1434 (field 0 match/1608))";
              $js$8
               (Format["str_formatter"],
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
                $js$9,
                "->",
                $js$10)}
            else
             {var $js$11=Format["fprintf"];
              'unknown block:(sendself self-2/1431 normal_type_list/1316 [0: 0a] father/1434 " * "\n  match/1607)';
              $js$11
               (Format["str_formatter"],
                [0,[12,32,[2,0,[17,[0,"@ ",1,0],[2,0,0]]]]," %s@ %s"],
                "of",
                $js$12)}}
          else
           {var $js$13=match$1;
            if($js$13)
             {var $js$14=Format["fprintf"];
              "unknown block:(sendself self-2/1431 normal_type/1315 father/1434 (field 0 match/1608))";
              $js$14
               (Format["str_formatter"],
                [0,[12,32,[2,0,[17,[0,"@ ",1,0],[2,0,0]]]]," %s@ %s"],
                ":",
                $js$15)}
            else
             {}}
          var match$2=e[5];
          var $js$16=match$2;
          if($js$16)
           {var ea=match$2[1];
            var $js$17=Format["fprintf"];
            var match$3=ea[2];
            var $js$18=match$3;
            if($js$18){var $js$19=match$3[1][1]}else{var $js$19=ea[1]}
            $js$17
             (Format["str_formatter"],[0,[11," = ",[2,0,0]]," = %s"],$js$19)}
          else
           {}
          var $js$20=Format["flush_str_formatter"];
          var s2=$js$20(0);
          var $js$21=Pervasives["@"];
          var $js$22=Pervasives["@"];
          var $js$23=Pervasives["^"];
          var $js$24=Pervasives["^"];
          "unknown block:(sendself self-2/1431 label/1310 0a s_name/1433)";
          var $js$25=Pervasives["^"];
          var $js$26=Pervasives["^"];
          "unknown block:(sendself self-2/1431 label/1310 [0: 0a] s_name/1433)";
          var $js$27=$js$26($js$28,"`}\n");
          var $js$29=$js$25("@\verb`",$js$27);
          var $js$30=$js$24($js$31,$js$29);
          var $js$32=$js$23("\index{",$js$30);
          var $js$33=[14,$js$32];
          var $js$34=[0,$js$33,0];
          "unknown block:(sendself self-2/1431 text_of_info/1417 0a (field 1 e/1432))";
          var $js$35=$js$22($js$34,$js$36);
          return $js$21([0,[2,s2],0],$js$35)},
        text_of_parameter_description,
        function(self-2,p)
         {var $js$3=Odoc_info["Parameter"][3];
          var l=$js$3(p);
          var $js$4=l;
          if($js$4)
           {var $js$5=l[2];
            if($js$5)
             {var $js$6=List["filter"];
              var
               l2=
                $js$6
                 (function(n)
                   {var $js$7=Odoc_info["Parameter"][4];
                    var $js$8=$js$7(p,n);
                    return $js$8!=0},
                  l);
              var $js$7=l2;
              if($js$7)
               {var $js$8=List["map"];
                var
                 $js$9=
                  $js$8
                   (function(n)
                     {var $js$10=Odoc_info["Parameter"][4];
                      var match=$js$10(p,n);
                      var $js$11=match;
                      if($js$11)
                       {var $js$12=Pervasives["@"];
                        var $js$13=Pervasives["^"];
                        var $js$14=$js$13(n," ");
                        var $js$15=[1,$js$14];
                        var $js$16=[0,$js$15,[0,[0,": "],0]];
                        return $js$12($js$16,match[1])}
                      else
                       {return 0}},
                    l2);
                var $js$10=[10,$js$9];
                return [0,$js$10,0]}
              else
               {return 0}}
            else
             {var $js$11=Odoc_info["Parameter"][4];
              var match=$js$11(p,l[1]);
              var $js$12=match;
              if($js$12){return match[1]}else{return 0}}}
          else
           {return 0}},
        text_of_parameter_list,
        function(self-2,m_name,l)
         {var $js$3=l;
          if($js$3)
           {var $js$4=List["map"];
            var
             $js$5=
              $js$4
               (function(p)
                 {var $js$6=Pervasives["@"];
                  var $js$7=Odoc_info["Parameter"][1];
                  var s=$js$7(p);
                  var $js$8=s;
                  if($js$8==""){var $js$9=[1,"?"]}else{var $js$9=[1,s]}
                  var $js$10=[0,$js$9,[0,[1," : "],0]];
                  var $js$11=Pervasives["@"];
                  "unknown block:(sendself self-2/1453 text_of_short_type_expr/1320 m_name/1454\n  (apply (field 1 (field 3 (global Odoc_info!))) p/1456))";
                  var $js$12=Pervasives["@"];
                  "unknown block:(sendself self-2/1453 text_of_parameter_description/1329 p/1456)";
                  var $js$13=$js$12([0,0,0],$js$14);
                  var $js$15=$js$11($js$16,$js$13);
                  return $js$6($js$10,$js$15)},
                l);
            var $js$6=[10,$js$5];
            var $js$7=[0,$js$6,0];
            var $js$8=[0,[0,":"],$js$7];
            return [0,[4,[0,[0,Odoc_messages["parameters"]],0]],$js$8]}
          else
           {return 0}},
        text_of_module_parameter_list,
        function(self-2,l)
         {var $js$3=l;
          if($js$3)
           {var $js$4=List["map"];
            var
             $js$5=
              $js$4
               (function(param)
                 {var desc_opt=param[2];
                  var p=param[1];
                  var $js$6=Pervasives["@"];
                  var match=p[2];
                  var $js$7=match;
                  if($js$7)
                   {var $js$8=Pervasives["@"];
                    var $js$9=Pervasives["^"];
                    var $js$10=$js$9(p[1]," : ");
                    var $js$11=[1,$js$10];
                    var $js$12=[0,$js$11,0];
                    "unknown block:(sendself self-2/1459 text_of_module_type/1324 (field 0 match/1588))";
                    var $js$13=$js$8($js$12,$js$14)}
                  else
                   {var $js$13=[0,[0,""],0]}
                  var $js$15=desc_opt;
                  if($js$15)
                   {var $js$16=[0,[0," "],desc_opt[1]]}
                  else
                   {var $js$16=0}
                  return $js$6($js$13,$js$16)},
                l);
            var $js$6=[10,$js$5];
            var $js$7=[0,$js$6,0];
            var $js$8=[0,[0,":"],$js$7];
            var $js$9=[0,[4,[0,[0,Odoc_messages["parameters"]],0]],$js$8];
            return [0,0,$js$9]}
          else
           {return 0}},
        text_of_class_kind,
        function(self-2,father,ckind)
         {var $js$3=ckind;
          if($js$3==0)
           {return [0,[1,Odoc_messages["object_end"]],0]}
          else
           if($js$3==1)
            {var capp=ckind[1];
             var $js$4=Pervasives["^"];
             var match=capp[2];
             var $js$5=match;
             if($js$5){var $js$6=match[1][1]}else{var $js$6=capp[1]}
             var $js$7=Pervasives["^"];
             var $js$8=String["concat"];
             var $js$9=List["map"];
             var
              $js$10=
               $js$9
                (function(s)
                  {var $js$11=Pervasives["^"];
                   var $js$12=Pervasives["^"];
                   var $js$13=$js$12(s,")");
                   return $js$11("(",$js$13)},
                 capp[4]);
             var $js$11=$js$8(" ",$js$10);
             var $js$12=$js$7(" ",$js$11);
             var $js$13=$js$4($js$6,$js$12);
             var $js$14=[1,$js$13];
             return [0,$js$14,0]}
           else
            if($js$3==2)
             {var cco=ckind[1];
              var $js$15=Pervasives["@"];
              var l=cco[3];
              var $js$16=l;
              if($js$16)
               {var $js$17=Pervasives["@"];
                'unknown block:(sendself self-2/1466 text_of_type_expr_list/1321 father/1467 ", " l/1475)';
                var $js$18=[0,[1,"["],$js$19];
                var $js$20=$js$17($js$18,[0,[1,"] "],0])}
              else
               {var $js$20=0}
              var match$1=cco[2];
              var $js$21=match$1;
              if($js$21)
               {var $js$22=Odoc_info["Name"][4];
                var $js$23=$js$22(father,match$1[1][1][1])}
              else
               {var $js$23=cco[1]}
              var $js$24=[1,$js$23];
              var $js$25=[0,$js$24,0];
              return $js$15($js$20,$js$25)}
            else
             if($js$3==3)
              {var $js$26=Pervasives["@"];
               var $js$27=Pervasives["@"];
               "unknown block:(sendself self-2/1466 text_of_class_kind/1332 father/1467\n  (field 0 ckind/1468))";
               var $js$28=Pervasives["@"];
               var $js$29=Pervasives["@"];
               "unknown block:(sendself self-2/1466 text_of_class_type_kind/1333 father/1467\n  (field 1 ckind/1468))";
               var $js$30=$js$29($js$31,[0,[1," )"],0]);
               var $js$32=$js$28([0,[1," : "],0],$js$30);
               var $js$33=$js$27($js$34,$js$32);
               return $js$26([0,[1,"( "],0],$js$33)}},
        text_of_class_type_kind,
        function(self-2,father,ctkind)
         {var $js$3=ctkind;
          if($js$3==0)
           {return [0,[1,Odoc_messages["object_end"]],0]}
          else
           if($js$3==1)
            {var cta=ctkind[1];
             var $js$4=Pervasives["@"];
             var l=cta[3];
             var $js$5=l;
             if($js$5)
              {var $js$6=Pervasives["@"];
               "unknown block:(sendself self-2/1479 text_of_class_type_param_expr_list/1322 father/1480\n  l/1483)";
               var $js$7=[0,[1,"["],$js$8];
               var $js$9=$js$6($js$7,[0,[1,"] "],0])}
             else
              {var $js$9=0}
             var match=cta[2];
             var $js$10=match;
             if($js$10)
              {var $js$11=Odoc_info["Name"][4];
               var rel=$js$11(father,match[1][1][1]);
               var $js$12=[0,[1,rel],0]}
             else
              {var $js$12=[0,[1,cta[1]],0]}
             return $js$4($js$9,$js$12)}},
        text_of_module_kind,
        function(self-2,*opt*,k)
         {var $js$3=*opt*;
          if($js$3){var with_def_syntax=*opt*[1]}else{var with_def_syntax=1}
          var $js$4=k;
          if($js$4==0)
           {var $js$5=Pervasives["^"];
            var $js$6=with_def_syntax;
            if($js$6){var $js$7=" : "}else{var $js$7=""}
            var $js$8=Pervasives["^"];
            var $js$9=$js$8(Odoc_messages["struct_end"]," ");
            var $js$10=$js$5($js$7,$js$9);
            var $js$11=[1,$js$10];
            return [0,$js$11,0]}
          else
           if($js$4==1)
            {var m_alias=k[1];
             var match=m_alias[2];
             var $js$12=match;
             if($js$12)
              {var match$1=match[1];
               var $js$13=match$1;
               if($js$13==0)
                {var $js$14=Pervasives["^"];
                 var $js$15=with_def_syntax;
                 if($js$15){var $js$16=" = "}else{var $js$16=""}
                 var $js$17=$js$14($js$16,match$1[1][1]);
                 var $js$18=[1,$js$17];
                 return [0,$js$18,0]}
               else
                if($js$13==1)
                 {var $js$19=Pervasives["^"];
                  var $js$20=with_def_syntax;
                  if($js$20){var $js$21=" = "}else{var $js$21=""}
                  var $js$22=$js$19($js$21,match$1[1][1]);
                  var $js$23=[1,$js$22];
                  return [0,$js$23,0]}}
             else
              {var $js$24=Pervasives["^"];
               var $js$25=with_def_syntax;
               if($js$25){var $js$26=" = "}else{var $js$26=""}
               var $js$27=$js$24($js$26,m_alias[1]);
               var $js$28=[1,$js$27];
               return [0,$js$28,0]}}
           else
            if($js$4==2)
             {var $js$29=Pervasives["@"];
              var $js$30=with_def_syntax;
              if($js$30){var $js$31=[0,[1," : "],0]}else{var $js$31=0}
              var $js$32=Pervasives["@"];
              var $js$33=Pervasives["@"];
              "unknown block:(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 1 k/1493))";
              var $js$34=$js$33([0,[1," -> "],0],$js$35);
              var $js$36=$js$32([0,[1,"functor ... "],0],$js$34);
              return $js$29($js$31,$js$36)}
            else
             if($js$4==3)
              {var $js$37=Pervasives["@"];
               var $js$38=with_def_syntax;
               if($js$38){var $js$39=[0,[1," = "],0]}else{var $js$39=0}
               var $js$40=Pervasives["@"];
               "unknown block:(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 0 k/1493))";
               var $js$41=Pervasives["@"];
               var $js$42=Pervasives["@"];
               "unknown block:(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 1 k/1493))";
               var $js$43=$js$42($js$44,[0,[1," ) "],0]);
               var $js$45=$js$41([0,[1," ( "],0],$js$43);
               var $js$46=$js$40($js$47,$js$45);
               return $js$37($js$39,$js$46)}
             else
              if($js$4==4)
               {var $js$48=Pervasives["@"];
                var $js$49=with_def_syntax;
                if($js$49){var $js$50=[0,[1," : "],0]}else{var $js$50=0}
                var $js$51=Pervasives["@"];
                "unknown block:(sendself self-2/1489 text_of_module_type_kind/1335 [0: 0a] (field 0 k/1493))";
                var $js$52=$js$51($js$53,[0,[1,k[2]],0]);
                return $js$48($js$50,$js$52)}
              else
               if($js$4==5)
                {var $js$54=Pervasives["@"];
                 var $js$55=with_def_syntax;
                 if($js$55){var $js$56=[0,[1," : "],0]}else{var $js$56=0}
                 var $js$57=Pervasives["@"];
                 var $js$58=Pervasives["@"];
                 "unknown block:(sendself self-2/1489 text_of_module_kind/1334 [0: 0a] (field 0 k/1493))";
                 var $js$59=Pervasives["@"];
                 var $js$60=Pervasives["@"];
                 "unknown block:(sendself self-2/1489 text_of_module_type_kind/1335 [0: 0a] (field 1 k/1493))";
                 var $js$61=$js$60($js$62,[0,[1," )"],0]);
                 var $js$63=$js$59([0,[1," : "],0],$js$61);
                 var $js$64=$js$58($js$65,$js$63);
                 var $js$66=$js$57([0,[1,"( "],0],$js$64);
                 return $js$54($js$56,$js$66)}
               else
                if($js$4==6)
                 {var $js$67=Printf["sprintf"];
                  var $js$68=with_def_syntax;
                  if($js$68){var $js$69=" : "}else{var $js$69=""}
                  var
                   code=
                    $js$67
                     ([0,
                       [2,0,[11,"module type of ",[2,0,0]]],
                       "%smodule type of %s"],
                      $js$69,
                      k[1]);
                  return [0,[1,code],0]}
                else
                 if($js$4==7)
                  {var $js$70=Printf["sprintf"];
                   var $js$71=with_def_syntax;
                   if($js$71){var $js$72=" : "}else{var $js$72=""}
                   var code$1=$js$70([0,[2,0,[2,0,0]],"%s%s"],$js$72,k[1]);
                   return [0,[1,code$1],0]}},
        text_of_module_type_kind,
        function(self-2,*opt*,tk)
         {var $js$3=*opt*;
          if($js$3){var with_def_syntax=*opt*[1]}else{var with_def_syntax=1}
          var $js$4=tk;
          if($js$4==0)
           {var $js$5=Pervasives["^"];
            var $js$6=with_def_syntax;
            if($js$6){var $js$7=" = "}else{var $js$7=""}
            var $js$8=$js$5($js$7,Odoc_messages["sig_end"]);
            var $js$9=[1,$js$8];
            return [0,$js$9,0]}
          else
           if($js$4==1)
            {var p=tk[1];
             var $js$10=Pervasives["@"];
             var $js$11=Pervasives["^"];
             var $js$12=Pervasives["^"];
             var $js$13=$js$12(p[1]," : ");
             var $js$14=$js$11("(",$js$13);
             var $js$15=[1,$js$14];
             var $js$16=[0,$js$15,0];
             var $js$17=Pervasives["@"];
             "unknown block:(sendself self-2/1510 text_of_module_type_kind/1335 0a (field 3 p/1515))";
             var $js$18=$js$17($js$19,[0,[1,") -> "],0]);
             var t1=$js$10($js$16,$js$18);
             "unknown block:(sendself self-2/1510 text_of_module_type_kind/1335 [0: 0a]\n  (field 1 tk/1514))";
             var $js$20=Pervasives["@"];
             var $js$21=with_def_syntax;
             if($js$21){var $js$22=[0,[1," = "],0]}else{var $js$22=0}
             var $js$23=Pervasives["@"];
             var $js$24=$js$23(t1,t2);
             return $js$20($js$22,$js$24)}
           else
            if($js$4==2)
             {var mt_alias=tk[1];
              var $js$25=Pervasives["^"];
              var $js$26=with_def_syntax;
              if($js$26){var $js$27=" = "}else{var $js$27=""}
              var match=mt_alias[2];
              var $js$28=match;
              if($js$28){var $js$29=match[1][1]}else{var $js$29=mt_alias[1]}
              var $js$30=$js$25($js$27,$js$29);
              var $js$31=[1,$js$30];
              return [0,$js$31,0]}
            else
             if($js$4==3)
              {"unknown block:(sendself self-2/1510 text_of_module_type_kind/1335 [0: 0a]\n  (field 0 tk/1514))";
               var $js$32=Pervasives["@"];
               var $js$33=with_def_syntax;
               if($js$33){var $js$34=[0,[1," = "],0]}else{var $js$34=0}
               var $js$35=Pervasives["@"];
               var $js$36=$js$35(t,[0,[1,tk[2]],0]);
               return $js$32($js$34,$js$36)}
             else
              if($js$4==4)
               {var $js$37=Printf["sprintf"];
                var $js$38=with_def_syntax;
                if($js$38){var $js$39=" = "}else{var $js$39=""}
                var
                 code=
                  $js$37
                   ([0,
                     [2,0,[11,"module type of ",[2,0,0]]],
                     "%smodule type of %s"],
                    $js$39,
                    tk[1]);
                return [0,[1,code],0]}}]);
     return function(env,self)
      {var $js$3=CamlinternalOO["create_object_opt"];
       var self$1=$js$3(self,class);
       obj_init(self$1);
       var $js$4=CamlinternalOO["run_initializers_opt"];
       return $js$4(self,self$1,class)}},
   0,
   0];
module["exports"]={"info":info,"to_text":to_text};
