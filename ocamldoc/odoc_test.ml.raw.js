var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
var Format=require("Format");
var Odoc_args=require("Odoc_args");
var Printexc=require("Printexc");
var
 shared=
  [0,
   "set_test_kinds_from_module",
   "scan_type",
   "scan_module_type_pre",
   "scan_module_pre",
   "scan_module_list",
   "must_display_types",
   "generate"];
var shared$1=[0,"test_kinds","fmt"];
var
 shared$2=
  [0,
   "scan_type_const",
   "scan_class",
   "scan_module_elements",
   "scan_class_type_pre",
   "scan_type_recfield",
   "scan_module_type_comment",
   "scan_included_module",
   "generate",
   "scan_exception",
   "scan_class_type_elements",
   "scan_class_type",
   "scan_type_extension",
   "scan_module_list",
   "scan_module_type",
   "scan_module",
   "set_test_kinds_from_module",
   "scan_extension_constructor",
   "scan_class_pre",
   "scan_module_pre",
   "scan_type_extension_constructors",
   "scan_module_type_pre",
   "scan_type_extension_pre",
   "scan_class_comment",
   "must_display_types",
   "scan_attribute",
   "scan_class_elements",
   "scan_class_type_comment",
   "scan_module_type_elements",
   "scan_type",
   "scan_module_comment",
   "scan_value",
   "scan_method",
   "scan_type_pre"];
var
 shared$3=
  [0,
   "scan_attribute",
   "scan_class",
   "scan_class_comment",
   "scan_class_elements",
   "scan_class_pre",
   "scan_class_type",
   "scan_class_type_comment",
   "scan_class_type_elements",
   "scan_class_type_pre",
   "scan_exception",
   "scan_extension_constructor",
   "scan_included_module",
   "scan_method",
   "scan_module",
   "scan_module_comment",
   "scan_module_elements",
   "scan_module_list",
   "scan_module_pre",
   "scan_module_type",
   "scan_module_type_comment",
   "scan_module_type_elements",
   "scan_module_type_pre",
   "scan_type",
   "scan_type_const",
   "scan_type_extension",
   "scan_type_extension_constructors",
   "scan_type_extension_pre",
   "scan_type_pre",
   "scan_type_recfield",
   "scan_value"];
var shared$4=[0,"generate"];
var p=Format["fprintf"];
var generator_tables=[0,0,0,0];
var string_gen_tables=[0,0,0,0];
var
 Generator=
  function(G)
   {var $js=string_gen_tables[1];
    if($js)
     {}
    else
     {var
       string_gen_init=
        function(class)
         {var $js$1=CamlinternalOO["new_methods_variables"];
          var ids=$js$1(class,shared,shared$1);
          var set_test_kinds_from_module=ids[1];
          var scan_type=ids[2];
          var scan_module_type_pre=ids[3];
          var scan_module_pre=ids[4];
          var scan_module_list=ids[5];
          var must_display_types=ids[6];
          var generate=ids[7];
          var test_kinds=ids[8];
          var fmt=ids[9];
          var $js$2=CamlinternalOO["inherits"];
          var inh=$js$2(class,0,0,shared$3,Odoc_info["Scan"][1],0);
          var obj_init=inh[1];
          var $js$3=CamlinternalOO["set_methods"];
          $js$3
           (class,
            [0,
             must_display_types,
             10,
             List["mem"],
             0,
             test_kinds,
             set_test_kinds_from_module,
             function(self-1,m)
              {var $js$4=List["fold_left"];
               var match=m[3];
               var $js$5=match;
               if($js$5){var $js$6=match[1][11]}else{var $js$6=0}
               var
                $js$7=
                 $js$4
                  (function(acc,param)
                    {var $js$8=param[1];
                     if($js$8=="test_types_display")
                      {return [0,0,acc]}
                     else
                      {return acc}},
                   0,
                   $js$6);
               return self-1[test_kinds]=$js$7,0},
             scan_type,
             function(self-1,t)
              {var match=self-1[test_kinds];
               var $js$4=match;
               if($js$4)
                {p
                  (self-1[fmt],
                   [0,[11,"# type ",[2,0,[11,":\n",0]]],"# type %s:\n"],
                   t[1]);
                 "unknown block:(sendself self-1/1248 must_display_types/1233)";
                 if($js$5)
                  {var match$1=t[6];
                   var $js$6=match$1;
                   if($js$6)
                    {var match$2=match$1[1];
                     var $js$7=match$2;
                     if($js$7==0)
                      {var $js$8=Odoc_info["string_of_type_expr"];
                       var $js$9=$js$8(match$2[1])}
                     else
                      if($js$7==1){var $js$9="< object type >"}}
                   else
                    {var $js$9="None"}
                   return p
                           (self-1[fmt],
                            [0,
                             [11,"# manifest :\n<[",[2,0,[11,"]>\n",0]]],
                             "# manifest :\n<[%s]>\n"],
                            $js$9)}
                 else
                  {return 0}}
               else
                {return 0}},
             scan_module_pre,
             function(self-1,m)
              {p
                (self-1[fmt],
                 [0,
                  [11,"#\n# module ",[2,0,[11,":\n",0]]],
                  "#\n# module %s:\n"],
                 m[1]);
               "unknown block:(sendself self-1/1253 must_display_types/1233)";
               if($js$4)
                {var $js$5=Odoc_info["string_of_module_type"];
                 var $js$6=$js$5(0,0,m[2]);
                 p
                  (self-1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type:\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type:\n<[%s]>\n"],
                   $js$6);
                 var $js$7=Odoc_info["string_of_module_type"];
                 var $js$8=$js$7(0,[0,1],m[2]);
                 p
                  (self-1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type ~complete: true :\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type ~complete: true :\n<[%s]>\n"],
                   $js$8)}
               else
                {}
               return 1},
             scan_module_type_pre,
             function(self-1,m)
              {p
                (self-1[fmt],
                 [0,
                  [11,"#\n# module type ",[2,0,[11,":\n",0]]],
                  "#\n# module type %s:\n"],
                 m[1]);
               "unknown block:(sendself self-1/1256 must_display_types/1233)";
               if($js$4)
                {var match=m[3];
                 var $js$5=match;
                 if($js$5)
                  {var $js$6=Odoc_info["string_of_module_type"];
                   var $js$7=$js$6(0,0,match[1])}
                 else
                  {var $js$7="None"}
                 p
                  (self-1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type:\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type:\n<[%s]>\n"],
                   $js$7);
                 var match$1=m[3];
                 var $js$8=match$1;
                 if($js$8)
                  {var $js$9=Odoc_info["string_of_module_type"];
                   var $js$10=$js$9(0,[0,1],match$1[1])}
                 else
                  {var $js$10="None"}
                 p
                  (self-1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type ~complete: true :\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type ~complete: true :\n<[%s]>\n"],
                   $js$10)}
               else
                {}
               return 1},
             generate,
             function(self-1,module_list)
              {var $js$4=Pervasives["open_out"];
               var oc=$js$4(Odoc_info["Global"][3][1]);
               var $js$5=Format["formatter_of_out_channel"];
               var $js$6=$js$5(oc);
               self-1[fmt]=$js$6,0;
               try
                {var $js$7=List["iter"];
                 $js$7
                  (function(m)
                    {"unknown block:(sendself self-1/1261 set_test_kinds_from_module/1234 m/1264)";
                     "unknown block:(sendself self-1/1261 scan_module_list/1265 (makeblock 0 m/1264 0a))"},
                   module_list)}
               catch(e)
                {var $js$8=Pervasives["prerr_endline"];
                 var $js$9=Printexc["to_string"];
                 var $js$10=$js$9(e);
                 $js$8($js$10)}
               var $js$11=Format["pp_print_flush"];
               $js$11(self-1[fmt],0);
               var $js$12=Pervasives["close_out"];
               return $js$12(oc)}]);
          return function(env)
           {return function(self)
             {var $js$4=CamlinternalOO["create_object_opt"];
              var self$1=$js$4(self,class);
              obj_init(env[2],self$1);
              self$1[test_kinds]=0,0;
              self$1[fmt]=Format["str_formatter"],0;
              var $js$5=CamlinternalOO["run_initializers_opt"];
              return $js$5(self,self$1,class)}}};
      var $js$1=CamlinternalOO["make_class_store"];
      $js$1(shared$2,string_gen_init,string_gen_tables)}
    var envs=[0,0,Odoc_info["Scan"][1][4]];
    var $js$2=string_gen_tables[1];
    var $js$3=$js$2(envs);
    var string_gen=[0,$js$3,string_gen_tables[2],string_gen_tables[1],envs];
    var $js$4=string_gen[1];
    var g=$js$4(0);
    var $js$5=CamlinternalOO["lookup_tables"];
    var cached=$js$5(generator_tables,[0,G[1][2]]);
    var $js$6=cached[1];
    if($js$6)
     {}
    else
     {var
       generator_init=
        function(class)
         {var $js$7=CamlinternalOO["new_variable"];
          var g$1=$js$7(class,"");
          var $js$8=CamlinternalOO["get_method_label"];
          var generate=$js$8(class,"generate");
          var $js$9=CamlinternalOO["inherits"];
          var inh=$js$9(class,0,0,shared$4,G[1],0);
          var obj_init=inh[1];
          var generate$1=inh[2];
          var $js$10=CamlinternalOO["set_method"];
          $js$10
           (class,
            generate,
            function(self-2,l)
             {generate$1(self-2,l);
              "unknown block:(send (array.unsafe_get self-2/1279 g/1272) -643670219 l/1280)"});
          return function(env)
           {var env$1=env[1];
            return function(self)
             {var $js$11=CamlinternalOO["create_object_opt"];
              var self$1=$js$11(self,class);
              self$1[g$1]=env$1[2],0;
              obj_init(env[2],self$1);
              var $js$12=CamlinternalOO["run_initializers_opt"];
              return $js$12(self,self$1,class)}}};
      var $js$7=CamlinternalOO["make_class_store"];
      $js$7(shared$4,generator_init,cached)}
    var envs$1=[0,[0,0,g],G[1][4]];
    var $js$8=cached[1];
    var $js$9=$js$8(envs$1);
    var generator=[0,$js$9,cached[2],cached[1],envs$1];
    return [0,string_gen,generator]};
var $js=Odoc_args["extend_base_generator"];
$js(function(funarg){var let=Generator(funarg);return [0,let[2]]});
module["exports"]={"p":p,"Generator":Generator};
