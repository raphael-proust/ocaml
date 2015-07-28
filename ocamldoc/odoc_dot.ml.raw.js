var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var Pervasives=require("Pervasives");
var List=require("List");
var Format=require("Format");
var Odoc_messages=require("Odoc_messages");
var shared=[0,"loc_colors","modules","colors"];
var
 shared$1=
  [0,
   "print_type_atts",
   "print_one_dep",
   "print_module_atts",
   "node_color",
   "header",
   "get_one_color",
   "generate_types",
   "generate_modules",
   "generate_for_type",
   "generate_for_module",
   "generate"];
var F=0;
var dot_include_all=[0,0];
var dot_types=[0,0];
var dot_reduce=[0,0];
var $js=List["flatten"];
var $js$1=$js(Odoc_messages["default_dot_colors"]);
var dot_colors=[0,$js$1];
var
 dot_init=
  function(class)
   {var $js$2=CamlinternalOO["new_methods_variables"];
    var ids=$js$2(class,shared$1,shared);
    var print_type_atts=ids[1];
    var print_one_dep=ids[2];
    var print_module_atts=ids[3];
    var node_color=ids[4];
    var header=ids[5];
    var get_one_color=ids[6];
    var generate_types=ids[7];
    var generate_modules=ids[8];
    var generate_for_type=ids[9];
    var generate_for_module=ids[10];
    var generate=ids[11];
    var loc_colors=ids[12];
    var modules=ids[13];
    var colors=ids[14];
    var $js$3=CamlinternalOO["set_methods"];
    $js$3
     (class,
      [0,
       header,
       function(self-1)
        {var $js$4=Pervasives["^"];
         var $js$5=Pervasives["^"];
         var $js$6=Pervasives["^"];
         var $js$7=Pervasives["^"];
         var $js$8=Pervasives["^"];
         var $js$9=$js$8('  fontsize="12pt";\n',"  rankdir = TB ;\n");
         var $js$10=$js$7("  rotate=90;\n",$js$9);
         var $js$11=$js$6('  ratio="fill";\n',$js$10);
         var $js$12=$js$5('  size="10,7.5";\n',$js$11);
         return $js$4("digraph G {\n",$js$12)},
       get_one_color,
       function(self-1)
        {var match=self-1[colors];
         var $js$4=match;
         if($js$4)
          {self-1[colors]=match[2],0;return [0,match[1]]}
         else
          {return 0}},
       node_color,
       function(self-1,s)
        {try
          {var $js$4=List["assoc"];
           var $js$5=$js$4(s,self-1[loc_colors]);
           return [0,$js$5]}
         catch(exn)
          {var $js$6=exn=Not_found;
           if($js$6)
            {"unknown block:(sendself self-1/1165 get_one_color/1148)";
             var $js$7=match;
             if($js$7)
              {var c=match[1];
               self-1[loc_colors]=[0,[0,s,c],self-1[loc_colors]],0;
               return [0,c]}
             else
              {return 0}}
           else
            {return "unknown primitive:reraise"}}},
       print_module_atts,
       function(self-1,fmt,m)
        {"unknown block:(sendself self-1/1169 node_color/1149\n  (apply (field 10 (global Filename!)) (field 4 m/1171)))";
         var $js$4=match;
         if($js$4)
          {var $js$5=Format["fprintf"];
           return $js$5
                   (fmt,
                    [0,
                     [12,
                      34,
                      [2,0,[11,'" [style=filled, color=',[2,0,[11,"];\n",0]]]]],
                     '"%s" [style=filled, color=%s];\n'],
                    m[1],
                    match[1])}
         else
          {return 0}},
       print_type_atts,
       function(self-1,fmt,t)
        {"unknown block:(sendself self-1/1174 node_color/1149\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 t/1176)))";
         var $js$4=match;
         if($js$4)
          {var $js$5=Format["fprintf"];
           return $js$5
                   (fmt,
                    [0,
                     [12,
                      34,
                      [2,0,[11,'" [style=filled, color=',[2,0,[11,"];\n",0]]]]],
                     '"%s" [style=filled, color=%s];\n'],
                    t[1],
                    match[1])}
         else
          {return 0}},
       print_one_dep,
       function(self-1,fmt,src,dest)
        {var $js$4=Format["fprintf"];
         return $js$4
                 (fmt,
                  [0,
                   [12,34,[2,0,[11,'" -> "',[2,0,[11,'";\n',0]]]]],
                   '"%s" -> "%s";\n'],
                  src,
                  dest)},
       generate_for_module,
       function(self-1,fmt,m)
        {var $js$4=List["filter"];
         var
          l=
           $js$4
            (function(n)
              {var $js$5=List["exists"];
               var
                $js$6=
                 $js$5
                  (function(m$1){return "unknown primitive:caml_string_equal"},
                   self-1[modules]);
               return dot_include_all[1]||$js$6},
             m[8]);
         "unknown block:(sendself self-1/1184 print_module_atts/1150 fmt/1185 m/1186)";
         var $js$5=List["iter"];
         "unknown block:(sendself self-1/1184 print_one_dep/1152 fmt/1185 (field 0 m/1186))";
         return $js$5($js$6,l)},
       generate_for_type,
       function(self-1,fmt,param)
        {var t=param[1];
         "unknown block:(sendself self-1/1191 print_type_atts/1151 fmt/1192 t/1193)";
         var $js$4=List["iter"];
         "unknown block:(sendself self-1/1191 print_one_dep/1152 fmt/1192 (field 0 t/1193))";
         return $js$4($js$5,param[2])},
       generate_types,
       function(self-1,types)
        {try
          {var $js$4=Pervasives["open_out"];
           var oc=$js$4(Odoc_info["Global"][3][1]);
           var $js$5=Format["formatter_of_out_channel"];
           var fmt=$js$5(oc);
           var $js$6=Format["fprintf"];
           "unknown block:(sendself self-1/1196 header/1147)";
           $js$6(fmt,[0,[2,0,0],"%s"],$js$7);
           var $js$8=Odoc_info["Dep"][2];
           var graph=$js$8([0,dot_reduce[1]],types);
           var $js$9=List["iter"];
           "unknown block:(sendself self-1/1196 generate_for_type/1154 fmt/1199)";
           $js$9($js$10,graph);
           var $js$11=Format["fprintf"];
           $js$11(fmt,[0,[11,"}\n",0],"}\n"]);
           var $js$12=Format["pp_print_flush"];
           $js$12(fmt,0);
           var $js$13=Pervasives["close_out"];
           return $js$13(oc)}
         catch(exn)
          {var $js$14=exn[1]=Sys_error;
           if($js$14)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate_modules,
       function(self-1,modules_list)
        {try
          {self-1[modules]=modules_list,0;
           var $js$4=Pervasives["open_out"];
           var oc=$js$4(Odoc_info["Global"][3][1]);
           var $js$5=Format["formatter_of_out_channel"];
           var fmt=$js$5(oc);
           var $js$6=Format["fprintf"];
           "unknown block:(sendself self-1/1203 header/1147)";
           $js$6(fmt,[0,[2,0,0],"%s"],$js$7);
           var $js$8=dot_reduce[1];
           if($js$8){var $js$9=Odoc_info["Dep"][1];$js$9(modules_list)}else{}
           var $js$10=List["iter"];
           "unknown block:(sendself self-1/1203 generate_for_module/1153 fmt/1206)";
           $js$10($js$11,modules_list);
           var $js$12=Format["fprintf"];
           $js$12(fmt,[0,[11,"}\n",0],"}\n"]);
           var $js$13=Format["pp_print_flush"];
           $js$13(fmt,0);
           var $js$14=Pervasives["close_out"];
           return $js$14(oc)}
         catch(exn)
          {var $js$15=exn[1]=Sys_error;
           if($js$15)
            {return "unknown primitive:raise"}
           else
            {return "unknown primitive:reraise"}}},
       generate,
       function(self-1,modules_list)
        {self-1[colors]=dot_colors[1],0;
         var $js$4=dot_types[1];
         if($js$4)
          {"unknown block:(sendself self-1/1209 generate_types/1155\n  (apply (field 4 (field 50 (global Odoc_info!))) modules_list/1210))"}
         else
          {"unknown block:(sendself self-1/1209 generate_modules/1156 modules_list/1210)"}}]);
    return function(env,self)
     {var $js$4=CamlinternalOO["create_object_opt"];
      var self$1=$js$4(self,class);
      self$1[loc_colors]=0,0;
      self$1[modules]=0,0;
      self$1[colors]=dot_colors[1],0;
      return self$1}};
var $js$2=CamlinternalOO["make_class"];
var
 dot=
  $js$2
   ([0,
     "generate",
     "generate_for_module",
     "generate_types",
     "print_module_atts",
     "get_one_color",
     "header",
     "print_one_dep",
     "generate_for_type",
     "node_color",
     "print_type_atts",
     "generate_modules"],
    dot_init);
var Generator=[0,dot];
module["exports"]=
{"F":F,
 "dot_include_all":dot_include_all,
 "dot_types":dot_types,
 "dot_reduce":dot_reduce,
 "dot_colors":dot_colors,
 "Generator":Generator};
