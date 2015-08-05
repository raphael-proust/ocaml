// Generated CODE, PLEASE EDIT WITH CARE 

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
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared);
    
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
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       scan_value,
       function(self$neg1,v){return 0;},
       scan_type_pre,
       function(self$neg1,t){return 1;},
       scan_type_recfield,
       function(self$neg1,t,f){return 0;},
       scan_type_const,
       function(self$neg1,t,f){return 0;},
       scan_type,
       function(self$neg1,t)
        {"unknown block:(sendself self-1/1060 scan_type_pre/1016 t/1061)";
         if(0)
          {var match=t[4];
           
           var exit;
           
           if(typeof match=="number")
            {switch(match){case 0:exit=1;case 1:exit=1;}}
           else
            {switch(match[0])
              {case 0:
                "unknown block:(sendself self-1/1060 scan_type_const/1018 t/1061)";
                return List["iter"](0,match[1]);
                
               case 1:
                "unknown block:(sendself self-1/1060 scan_type_recfield/1017 t/1061)";
                return List["iter"](0,match[1]);
                
               }}
           
           switch(exit){case 1:return 0;}
           }
         else
          {return 0;}
         },
       scan_extension_constructor,
       function(self$neg1,e){return 0;},
       scan_exception,
       function(self$neg1,e){return 0;},
       scan_attribute,
       function(self$neg1,a){return 0;},
       scan_method,
       function(self$neg1,m){return 0;},
       scan_included_module,
       function(self$neg1,im){return 0;},
       scan_type_extension_pre,
       function(self$neg1,x){return 1;},
       scan_type_extension_constructors,
       function(self$neg1,x)
        {"unknown block:(sendself self-1/1083 scan_extension_constructor/1020)";
         return List["iter"](0,Odoc_extension["extension_constructors"](x));
         },
       scan_type_extension,
       function(self$neg1,x)
        {"unknown block:(sendself self-1/1086 scan_type_extension_pre/1025 x/1087)";
         if(0)
          {"unknown block:(sendself self-1/1086 scan_type_extension_constructors/1026 x/1087)";
           }
         else
          {return 0;}
         },
       scan_class_comment,
       function(self$neg1,t){return 0;},
       scan_class_pre,
       function(self$neg1,c){return 1;},
       scan_class_elements,
       function(self$neg1,c)
        {return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-1/1095 scan_attribute/1022 (field 0 ele/1097))";
                       
                      case 1:
                       "unknown block:(sendself self-1/1095 scan_method/1023 (field 0 ele/1097))";
                       
                      case 2:
                       "unknown block:(sendself self-1/1095 scan_class_comment/1028 (field 0 ele/1097))";
                       
                      }
                    },
                  Odoc_class["class_elements"](0,c));
         },
       scan_class,
       function(self$neg1,c)
        {"unknown block:(sendself self-1/1102 scan_class_pre/1029 c/1103)";
         if(0)
          {"unknown block:(sendself self-1/1102 scan_class_elements/1030 c/1103)";
           }
         else
          {return 0;}
         },
       scan_class_type_comment,
       function(self$neg1,t){return 0;},
       scan_class_type_pre,
       function(self$neg1,ct){return 1;},
       scan_class_type_elements,
       function(self$neg1,ct)
        {return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-1/1111 scan_attribute/1022 (field 0 ele/1113))";
                       
                      case 1:
                       "unknown block:(sendself self-1/1111 scan_method/1023 (field 0 ele/1113))";
                       
                      case 2:
                       "unknown block:(sendself self-1/1111 scan_class_type_comment/1032 (field 0 ele/1113))";
                       
                      }
                    },
                  Odoc_class["class_type_elements"](0,ct));
         },
       scan_class_type,
       function(self$neg1,ct)
        {"unknown block:(sendself self-1/1118 scan_class_type_pre/1033 ct/1119)";
         if(0)
          {"unknown block:(sendself self-1/1118 scan_class_type_elements/1034 ct/1119)";
           }
         else
          {return 0;}
         },
       scan_module_comment,
       function(self$neg1,t){return 0;},
       scan_module_pre,
       function(self$neg1,m){return 1;},
       scan_module_elements,
       function(self$neg1,m)
        {return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-1/1127 scan_module/1039 (field 0 ele/1129))";
                       
                      case 1:
                       "unknown block:(sendself self-1/1127 scan_module_type/1043 (field 0 ele/1129))";
                       
                      case 2:
                       "unknown block:(sendself self-1/1127 scan_included_module/1024 (field 0 ele/1129))";
                       
                      case 3:
                       "unknown block:(sendself self-1/1127 scan_class/1031 (field 0 ele/1129))";
                       
                      case 4:
                       "unknown block:(sendself self-1/1127 scan_class_type/1035 (field 0 ele/1129))";
                       
                      case 5:
                       "unknown block:(sendself self-1/1127 scan_value/1015 (field 0 ele/1129))";
                       
                      case 6:
                       "unknown block:(sendself self-1/1127 scan_type_extension/1027 (field 0 ele/1129))";
                       
                      case 7:
                       "unknown block:(sendself self-1/1127 scan_exception/1021 (field 0 ele/1129))";
                       
                      case 8:
                       "unknown block:(sendself self-1/1127 scan_type/1019 (field 0 ele/1129))";
                       
                      case 9:
                       "unknown block:(sendself self-1/1127 scan_module_comment/1036 (field 0 ele/1129))";
                       
                      }
                    },
                  Odoc_module["module_elements"](0,m));
         },
       scan_module,
       function(self$neg1,m)
        {"unknown block:(sendself self-1/1141 scan_module_pre/1037 m/1142)";
         if(0)
          {"unknown block:(sendself self-1/1141 scan_module_elements/1038 m/1142)";
           }
         else
          {return 0;}
         },
       scan_module_type_comment,
       function(self$neg1,t){return 0;},
       scan_module_type_pre,
       function(self$neg1,mt){return 1;},
       scan_module_type_elements,
       function(self$neg1,mt)
        {return List["iter"]
                 (function(ele)
                   {switch(ele)
                     {case 0:
                       "unknown block:(sendself self-1/1150 scan_module/1039 (field 0 ele/1152))";
                       
                      case 1:
                       "unknown block:(sendself self-1/1150 scan_module_type/1043 (field 0 ele/1152))";
                       
                      case 2:
                       "unknown block:(sendself self-1/1150 scan_included_module/1024 (field 0 ele/1152))";
                       
                      case 3:
                       "unknown block:(sendself self-1/1150 scan_class/1031 (field 0 ele/1152))";
                       
                      case 4:
                       "unknown block:(sendself self-1/1150 scan_class_type/1035 (field 0 ele/1152))";
                       
                      case 5:
                       "unknown block:(sendself self-1/1150 scan_value/1015 (field 0 ele/1152))";
                       
                      case 6:
                       "unknown block:(sendself self-1/1150 scan_type_extension/1027 (field 0 ele/1152))";
                       
                      case 7:
                       "unknown block:(sendself self-1/1150 scan_exception/1021 (field 0 ele/1152))";
                       
                      case 8:
                       "unknown block:(sendself self-1/1150 scan_type/1019 (field 0 ele/1152))";
                       
                      case 9:
                       "unknown block:(sendself self-1/1150 scan_module_comment/1036 (field 0 ele/1152))";
                       
                      }
                    },
                  Odoc_module["module_type_elements"](0,mt));
         },
       scan_module_type,
       function(self$neg1,mt)
        {"unknown block:(sendself self-1/1164 scan_module_type_pre/1041 mt/1165)";
         if(0)
          {"unknown block:(sendself self-1/1164 scan_module_type_elements/1042 mt/1165)";
           }
         else
          {return 0;}
         },
       scan_module_list,
       function(self$neg1,l)
        {"unknown block:(sendself self-1/1167 scan_module/1039)";
         return List["iter"](0,l);
         }]);
    return function(env,$$self)
     {return CamlinternalOO["create_object_opt"]($$self,$$class);};
    };

var
 scanner=
  CamlinternalOO["make_class"]
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

