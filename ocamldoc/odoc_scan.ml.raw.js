var Odoc_class=require("Odoc_class");
var CamlinternalOO=require("CamlinternalOO");
var List=require("List");
var Odoc_extension=require("Odoc_extension");
var Odoc_module=require("Odoc_module");
var
 shared=
  [0,
   "scan_value",
   "scan_type_recfield",
   "scan_type_pre",
   "scan_type_extension_pre",
   "scan_type_extension_constructors",
   "scan_type_extension",
   "scan_type_const",
   "scan_type",
   "scan_module_type_pre",
   "scan_module_type_elements",
   "scan_module_type_comment",
   "scan_module_type",
   "scan_module_pre",
   "scan_module_list",
   "scan_module_elements",
   "scan_module_comment",
   "scan_module",
   "scan_method",
   "scan_included_module",
   "scan_extension_constructor",
   "scan_exception",
   "scan_class_type_pre",
   "scan_class_type_elements",
   "scan_class_type_comment",
   "scan_class_type",
   "scan_class_pre",
   "scan_class_elements",
   "scan_class_comment",
   "scan_class",
   "scan_attribute"];
var
 scanner_init=
  function(class)
   {var $js=CamlinternalOO["get_method_labels"];
    var ids=$js(class,shared);
    var scan_value=ids[1];
    var scan_type_recfield=ids[2];
    var scan_type_pre=ids[3];
    var scan_type_extension_pre=ids[4];
    var scan_type_extension_constructors=ids[5];
    var scan_type_extension=ids[6];
    var scan_type_const=ids[7];
    var scan_type=ids[8];
    var scan_module_type_pre=ids[9];
    var scan_module_type_elements=ids[10];
    var scan_module_type_comment=ids[11];
    var scan_module_type=ids[12];
    var scan_module_pre=ids[13];
    var scan_module_list=ids[14];
    var scan_module_elements=ids[15];
    var scan_module_comment=ids[16];
    var scan_module=ids[17];
    var scan_method=ids[18];
    var scan_included_module=ids[19];
    var scan_extension_constructor=ids[20];
    var scan_exception=ids[21];
    var scan_class_type_pre=ids[22];
    var scan_class_type_elements=ids[23];
    var scan_class_type_comment=ids[24];
    var scan_class_type=ids[25];
    var scan_class_pre=ids[26];
    var scan_class_elements=ids[27];
    var scan_class_comment=ids[28];
    var scan_class=ids[29];
    var scan_attribute=ids[30];
    var $js$1=CamlinternalOO["set_methods"];
    $js$1
     (class,
      [0,
       scan_value,
       function(self-1,v){return 0},
       scan_type_pre,
       function(self-1,t){return 1},
       scan_type_recfield,
       function(self-1,t,f){return 0},
       scan_type_const,
       function(self-1,t,f){return 0},
       scan_type,
       function(self-1,t)
        {"unknown block:(sendself self-1/1060 scan_type_pre/1016 t/1061)";
         if($js$2)
          {var match=t[4];
           var $js$3=match;
           if(typeof $js$3=="number")
            {if($js$3==0){var exit=1}else if($js$3==1){var exit=1}}
           else
            {var $js$4=$js$3[0];
             if($js$4==0)
              {var $js$5=List["iter"];
               "unknown block:(sendself self-1/1060 scan_type_const/1018 t/1061)";
               return $js$5($js$6,match[1])}
             else
              if($js$4==1)
               {var $js$7=List["iter"];
                "unknown block:(sendself self-1/1060 scan_type_recfield/1017 t/1061)";
                return $js$7($js$8,match[1])}}
           switch(exit){case 1:return 0}}
         else
          {return 0}},
       scan_extension_constructor,
       function(self-1,e){return 0},
       scan_exception,
       function(self-1,e){return 0},
       scan_attribute,
       function(self-1,a){return 0},
       scan_method,
       function(self-1,m){return 0},
       scan_included_module,
       function(self-1,im){return 0},
       scan_type_extension_pre,
       function(self-1,x){return 1},
       scan_type_extension_constructors,
       function(self-1,x)
        {var $js$2=List["iter"];
         "unknown block:(sendself self-1/1083 scan_extension_constructor/1020)";
         var $js$3=Odoc_extension["extension_constructors"];
         var $js$4=$js$3(x);
         return $js$2($js$5,$js$4)},
       scan_type_extension,
       function(self-1,x)
        {"unknown block:(sendself self-1/1086 scan_type_extension_pre/1025 x/1087)";
         if($js$2)
          {"unknown block:(sendself self-1/1086 scan_type_extension_constructors/1026 x/1087)"}
         else
          {return 0}},
       scan_class_comment,
       function(self-1,t){return 0},
       scan_class_pre,
       function(self-1,c){return 1},
       scan_class_elements,
       function(self-1,c)
        {var $js$2=List["iter"];
         var $js$3=Odoc_class["class_elements"];
         var $js$4=$js$3(0,c);
         return $js$2
                 (function(ele)
                   {var $js$5=ele;
                    if($js$5==0)
                     {"unknown block:(sendself self-1/1095 scan_attribute/1022 (field 0 ele/1097))"}
                    else
                     if($js$5==1)
                      {"unknown block:(sendself self-1/1095 scan_method/1023 (field 0 ele/1097))"}
                     else
                      if($js$5==2)
                       {"unknown block:(sendself self-1/1095 scan_class_comment/1028 (field 0 ele/1097))"}},
                  $js$4)},
       scan_class,
       function(self-1,c)
        {"unknown block:(sendself self-1/1102 scan_class_pre/1029 c/1103)";
         if($js$2)
          {"unknown block:(sendself self-1/1102 scan_class_elements/1030 c/1103)"}
         else
          {return 0}},
       scan_class_type_comment,
       function(self-1,t){return 0},
       scan_class_type_pre,
       function(self-1,ct){return 1},
       scan_class_type_elements,
       function(self-1,ct)
        {var $js$2=List["iter"];
         var $js$3=Odoc_class["class_type_elements"];
         var $js$4=$js$3(0,ct);
         return $js$2
                 (function(ele)
                   {var $js$5=ele;
                    if($js$5==0)
                     {"unknown block:(sendself self-1/1111 scan_attribute/1022 (field 0 ele/1113))"}
                    else
                     if($js$5==1)
                      {"unknown block:(sendself self-1/1111 scan_method/1023 (field 0 ele/1113))"}
                     else
                      if($js$5==2)
                       {"unknown block:(sendself self-1/1111 scan_class_type_comment/1032 (field 0 ele/1113))"}},
                  $js$4)},
       scan_class_type,
       function(self-1,ct)
        {"unknown block:(sendself self-1/1118 scan_class_type_pre/1033 ct/1119)";
         if($js$2)
          {"unknown block:(sendself self-1/1118 scan_class_type_elements/1034 ct/1119)"}
         else
          {return 0}},
       scan_module_comment,
       function(self-1,t){return 0},
       scan_module_pre,
       function(self-1,m){return 1},
       scan_module_elements,
       function(self-1,m)
        {var $js$2=List["iter"];
         var $js$3=Odoc_module["module_elements"];
         var $js$4=$js$3(0,m);
         return $js$2
                 (function(ele)
                   {var $js$5=ele;
                    if($js$5==0)
                     {"unknown block:(sendself self-1/1127 scan_module/1039 (field 0 ele/1129))"}
                    else
                     if($js$5==1)
                      {"unknown block:(sendself self-1/1127 scan_module_type/1043 (field 0 ele/1129))"}
                     else
                      if($js$5==2)
                       {"unknown block:(sendself self-1/1127 scan_included_module/1024 (field 0 ele/1129))"}
                      else
                       if($js$5==3)
                        {"unknown block:(sendself self-1/1127 scan_class/1031 (field 0 ele/1129))"}
                       else
                        if($js$5==4)
                         {"unknown block:(sendself self-1/1127 scan_class_type/1035 (field 0 ele/1129))"}
                        else
                         if($js$5==5)
                          {"unknown block:(sendself self-1/1127 scan_value/1015 (field 0 ele/1129))"}
                         else
                          if($js$5==6)
                           {"unknown block:(sendself self-1/1127 scan_type_extension/1027 (field 0 ele/1129))"}
                          else
                           if($js$5==7)
                            {"unknown block:(sendself self-1/1127 scan_exception/1021 (field 0 ele/1129))"}
                           else
                            if($js$5==8)
                             {"unknown block:(sendself self-1/1127 scan_type/1019 (field 0 ele/1129))"}
                            else
                             if($js$5==9)
                              {"unknown block:(sendself self-1/1127 scan_module_comment/1036 (field 0 ele/1129))"}},
                  $js$4)},
       scan_module,
       function(self-1,m)
        {"unknown block:(sendself self-1/1141 scan_module_pre/1037 m/1142)";
         if($js$2)
          {"unknown block:(sendself self-1/1141 scan_module_elements/1038 m/1142)"}
         else
          {return 0}},
       scan_module_type_comment,
       function(self-1,t){return 0},
       scan_module_type_pre,
       function(self-1,mt){return 1},
       scan_module_type_elements,
       function(self-1,mt)
        {var $js$2=List["iter"];
         var $js$3=Odoc_module["module_type_elements"];
         var $js$4=$js$3(0,mt);
         return $js$2
                 (function(ele)
                   {var $js$5=ele;
                    if($js$5==0)
                     {"unknown block:(sendself self-1/1150 scan_module/1039 (field 0 ele/1152))"}
                    else
                     if($js$5==1)
                      {"unknown block:(sendself self-1/1150 scan_module_type/1043 (field 0 ele/1152))"}
                     else
                      if($js$5==2)
                       {"unknown block:(sendself self-1/1150 scan_included_module/1024 (field 0 ele/1152))"}
                      else
                       if($js$5==3)
                        {"unknown block:(sendself self-1/1150 scan_class/1031 (field 0 ele/1152))"}
                       else
                        if($js$5==4)
                         {"unknown block:(sendself self-1/1150 scan_class_type/1035 (field 0 ele/1152))"}
                        else
                         if($js$5==5)
                          {"unknown block:(sendself self-1/1150 scan_value/1015 (field 0 ele/1152))"}
                         else
                          if($js$5==6)
                           {"unknown block:(sendself self-1/1150 scan_type_extension/1027 (field 0 ele/1152))"}
                          else
                           if($js$5==7)
                            {"unknown block:(sendself self-1/1150 scan_exception/1021 (field 0 ele/1152))"}
                           else
                            if($js$5==8)
                             {"unknown block:(sendself self-1/1150 scan_type/1019 (field 0 ele/1152))"}
                            else
                             if($js$5==9)
                              {"unknown block:(sendself self-1/1150 scan_module_comment/1036 (field 0 ele/1152))"}},
                  $js$4)},
       scan_module_type,
       function(self-1,mt)
        {"unknown block:(sendself self-1/1164 scan_module_type_pre/1041 mt/1165)";
         if($js$2)
          {"unknown block:(sendself self-1/1164 scan_module_type_elements/1042 mt/1165)"}
         else
          {return 0}},
       scan_module_list,
       function(self-1,l)
        {var $js$2=List["iter"];
         "unknown block:(sendself self-1/1167 scan_module/1039)";
         return $js$2($js$3,l)}]);
    return function(env,self)
     {var $js$2=CamlinternalOO["create_object_opt"];return $js$2(self,class)}};
var $js=CamlinternalOO["make_class"];
var
 scanner=
  $js
   ([0,
     "scan_type_const",
     "scan_class",
     "scan_module_elements",
     "scan_class_type_pre",
     "scan_type_recfield",
     "scan_module_type_comment",
     "scan_included_module",
     "scan_exception",
     "scan_class_type_elements",
     "scan_class_type",
     "scan_type_extension",
     "scan_module_list",
     "scan_module_type",
     "scan_module",
     "scan_extension_constructor",
     "scan_class_pre",
     "scan_module_pre",
     "scan_type_extension_constructors",
     "scan_module_type_pre",
     "scan_type_extension_pre",
     "scan_class_comment",
     "scan_attribute",
     "scan_class_elements",
     "scan_class_type_comment",
     "scan_module_type_elements",
     "scan_type",
     "scan_module_comment",
     "scan_value",
     "scan_method",
     "scan_type_pre"],
    scanner_init);
module["exports"]={"scanner":scanner};
