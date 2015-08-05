// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("CamlinternalOO");
var Odoc_info=require("Odoc_info");
var List=require("List");
var Pervasives=require("Pervasives");
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

var dot_colors=[0,List["flatten"](Odoc_messages["default_dot_colors"])];

var
 dot_init=
  function($$class)
   {var ids=CamlinternalOO["new_methods_variables"]($$class,shared$1,shared);
    
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
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       header,
       function(self$neg1)
        {return Pervasives["^"]
                 ("digraph G {\n",
                  Pervasives["^"]
                   ('  size="10,7.5";\n',
                    Pervasives["^"]
                     ('  ratio="fill";\n',
                      Pervasives["^"]
                       ("  rotate=90;\n",
                        Pervasives["^"]('  fontsize="12pt";\n',"  rankdir = TB ;\n")))));
         },
       get_one_color,
       function(self$neg1)
        {var match=self$neg1[colors];
         
         if(match)
          {self$neg1[colors]=match[2],0;return [0,match[1]];}
         else
          {return 0;}
         },
       node_color,
       function(self$neg1,s)
        {try
          {return [0,List["assoc"](s,self$neg1[loc_colors])];}
         catch(exn)
          {if(exn=Not_found)
            {"unknown block:(sendself self-1/1165 get_one_color/1148)";
             
             if(match)
              {var c=match[1];
               
               self$neg1[loc_colors]=[0,[0,s,c],self$neg1[loc_colors]],0;
               return [0,c];
               }
             else
              {return 0;}
             }
           else
            {throw exn;}
           }
         },
       print_module_atts,
       function(self$neg1,fmt,m)
        {"unknown block:(sendself self-1/1169 node_color/1149\n  (apply (field 10 (global Filename!)) (field 4 m/1171)))";
         
         if(match)
          {return Format["fprintf"]
                   (fmt,
                    [0,
                     [12,
                      34,
                      [2,0,[11,'" [style=filled, color=',[2,0,[11,"];\n",0]]]]],
                     '"%s" [style=filled, color=%s];\n'],
                    m[1],
                    match[1]);
           }
         else
          {return 0;}
         },
       print_type_atts,
       function(self$neg1,fmt,t)
        {"unknown block:(sendself self-1/1174 node_color/1149\n  (apply (field 4 (field 2 (global Odoc_info!))) (field 0 t/1176)))";
         
         if(match)
          {return Format["fprintf"]
                   (fmt,
                    [0,
                     [12,
                      34,
                      [2,0,[11,'" [style=filled, color=',[2,0,[11,"];\n",0]]]]],
                     '"%s" [style=filled, color=%s];\n'],
                    t[1],
                    match[1]);
           }
         else
          {return 0;}
         },
       print_one_dep,
       function(self$neg1,fmt,src,dest)
        {return Format["fprintf"]
                 (fmt,
                  [0,
                   [12,34,[2,0,[11,'" -> "',[2,0,[11,'";\n',0]]]]],
                   '"%s" -> "%s";\n'],
                  src,
                  dest);
         },
       generate_for_module,
       function(self$neg1,fmt,m)
        {var
          l=
           List["filter"]
            (function(n)
              {return dot_include_all[1]||
                      List["exists"]
                       (function(m$1)
                         {return "unknown primitive:caml_string_equal";},
                        self$neg1[modules]);
               },
             m[8]);
         
         "unknown block:(sendself self-1/1184 print_module_atts/1150 fmt/1185 m/1186)";
         
         "unknown block:(sendself self-1/1184 print_one_dep/1152 fmt/1185 (field 0 m/1186))";
         return List["iter"](0,l);
         },
       generate_for_type,
       function(self$neg1,fmt,param)
        {var t=param[1];
         
         "unknown block:(sendself self-1/1191 print_type_atts/1151 fmt/1192 t/1193)";
         
         "unknown block:(sendself self-1/1191 print_one_dep/1152 fmt/1192 (field 0 t/1193))";
         return List["iter"](0,param[2]);
         },
       generate_types,
       function(self$neg1,types)
        {try
          {var oc=Pervasives["open_out"](Odoc_info["Global"][3][1]);
           
           var fmt=Format["formatter_of_out_channel"](oc);
           
           "unknown block:(sendself self-1/1196 header/1147)";
           Format["fprintf"](fmt,[0,[2,0,0],"%s"],0);
           var graph=Odoc_info["Dep"][2]([0,dot_reduce[1]],types);
           
           "unknown block:(sendself self-1/1196 generate_for_type/1154 fmt/1199)";
           List["iter"](0,graph);
           Format["fprintf"](fmt,[0,[11,"}\n",0],"}\n"]);
           Format["pp_print_flush"](fmt,0);
           return Pervasives["close_out"](oc);
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate_modules,
       function(self$neg1,modules_list)
        {try
          {self$neg1[modules]=modules_list,0;
           var oc=Pervasives["open_out"](Odoc_info["Global"][3][1]);
           
           var fmt=Format["formatter_of_out_channel"](oc);
           
           "unknown block:(sendself self-1/1203 header/1147)";
           Format["fprintf"](fmt,[0,[2,0,0],"%s"],0);
           if(dot_reduce[1]){Odoc_info["Dep"][1](modules_list)}else{}
           
           "unknown block:(sendself self-1/1203 generate_for_module/1153 fmt/1206)";
           List["iter"](0,modules_list);
           Format["fprintf"](fmt,[0,[11,"}\n",0],"}\n"]);
           Format["pp_print_flush"](fmt,0);
           return Pervasives["close_out"](oc);
           }
         catch(exn)
          {if(exn[1]=Sys_error){throw [0,Failure,exn[2]];}else{throw exn;}}
         },
       generate,
       function(self$neg1,modules_list)
        {self$neg1[colors]=dot_colors[1],0;
         if(dot_types[1])
          {"unknown block:(sendself self-1/1209 generate_types/1155\n  (apply (field 4 (field 50 (global Odoc_info!))) modules_list/1210))";
           }
         else
          {"unknown block:(sendself self-1/1209 generate_modules/1156 modules_list/1210)";
           }
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[loc_colors]=
      0,
      0,
      $$self$1[modules]=
      0,
      0,
      $$self$1[colors]=
      dot_colors[1],
      0;
      return $$self$1;
      };
    };

var
 dot=
  CamlinternalOO["make_class"]
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

