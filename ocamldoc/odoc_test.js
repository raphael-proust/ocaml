// Generated CODE, PLEASE EDIT WITH CARE 

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
   {if(string_gen_tables[1])
     {}
    else
     {var
       string_gen_init=
        function($$class)
         {var
           ids=
            CamlinternalOO["new_methods_variables"]($$class,shared,shared$1);
          
          var set_test_kinds_from_module=ids[1];
          
          var scan_type=ids[2];
          
          var scan_module_type_pre=ids[3];
          
          var scan_module_pre=ids[4];
          
          var scan_module_list=ids[5];
          
          var must_display_types=ids[6];
          
          var generate=ids[7];
          
          var test_kinds=ids[8];
          
          var fmt=ids[9];
          
          var
           inh=
            CamlinternalOO["inherits"]
             ($$class,0,0,shared$3,Odoc_info["Scan"][1],0);
          
          var obj_init=inh[1];
          
          CamlinternalOO["set_methods"]
           ($$class,
            [0,
             must_display_types,
             10,
             List["mem"],
             0,
             test_kinds,
             set_test_kinds_from_module,
             function(self$neg1,m)
              {var match=m[3];
               
               return self$neg1[test_kinds]=
                      List["fold_left"]
                       (function(acc,param)
                         {switch(param[1])
                           {case "test_types_display":return [0,0,acc];
                            default:return acc;}
                          },
                        0,
                        match?match[1][11]:0),
                      0;
               },
             scan_type,
             function(self$neg1,t)
              {var match=self$neg1[test_kinds];
               
               if(match)
                {p
                  (self$neg1[fmt],
                   [0,[11,"# type ",[2,0,[11,":\n",0]]],"# type %s:\n"],
                   t[1]);
                 "unknown block:(sendself self-1/1248 must_display_types/1233)";
                 if(0)
                  {var match$1=t[6];
                   
                   if(match$1)
                    {var match$2=match$1[1];
                     
                     switch(match$2)
                      {case 0:
                        var $js=Odoc_info["string_of_type_expr"](match$2[1]);
                       case 1:var $js="< object type >";
                       }
                     }
                   else
                    {var $js="None";}
                   return p
                           (self$neg1[fmt],
                            [0,
                             [11,"# manifest :\n<[",[2,0,[11,"]>\n",0]]],
                             "# manifest :\n<[%s]>\n"],
                            $js);
                   }
                 else
                  {return 0;}
                 }
               else
                {return 0;}
               },
             scan_module_pre,
             function(self$neg1,m)
              {p
                (self$neg1[fmt],
                 [0,
                  [11,"#\n# module ",[2,0,[11,":\n",0]]],
                  "#\n# module %s:\n"],
                 m[1]);
               "unknown block:(sendself self-1/1253 must_display_types/1233)";
               if(0)
                {p
                  (self$neg1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type:\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type:\n<[%s]>\n"],
                   Odoc_info["string_of_module_type"](0,0,m[2])),
                 p
                  (self$neg1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type ~complete: true :\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type ~complete: true :\n<[%s]>\n"],
                   Odoc_info["string_of_module_type"](0,[0,1],m[2]))}
               else
                {}
               
               return 1;
               },
             scan_module_type_pre,
             function(self$neg1,m)
              {p
                (self$neg1[fmt],
                 [0,
                  [11,"#\n# module type ",[2,0,[11,":\n",0]]],
                  "#\n# module type %s:\n"],
                 m[1]);
               "unknown block:(sendself self-1/1256 must_display_types/1233)";
               if(0)
                {var match=m[3];
                 
                 p
                  (self$neg1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type:\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type:\n<[%s]>\n"],
                   match
                    ?Odoc_info["string_of_module_type"](0,0,match[1])
                    :"None");
                 var match$1=m[3];
                 
                 p
                  (self$neg1[fmt],
                   [0,
                    [11,
                     "# Odoc_info.string_of_module_type ~complete: true :\n<[",
                     [2,0,[11,"]>\n",0]]],
                    "# Odoc_info.string_of_module_type ~complete: true :\n<[%s]>\n"],
                   match$1
                    ?Odoc_info["string_of_module_type"](0,[0,1],match$1[1])
                    :"None")}
               else
                {}
               
               return 1;
               },
             generate,
             function(self$neg1,module_list)
              {var oc=Pervasives["open_out"](Odoc_info["Global"][3][1]);
               
               self$neg1[fmt]=Format["formatter_of_out_channel"](oc),0;
               try
                {List["iter"]
                  (function(m)
                    {"unknown block:(sendself self-1/1261 set_test_kinds_from_module/1234 m/1264)";
                     
                     "unknown block:(sendself self-1/1261 scan_module_list/1265 (makeblock 0 m/1264 0a))";
                     },
                   module_list)}
               catch(e){Pervasives["prerr_endline"](Printexc["to_string"](e))}
               
               Format["pp_print_flush"](self$neg1[fmt],0);
               return Pervasives["close_out"](oc);
               }]);
          return function(env)
           {return function($$self)
             {var
               $$self$1=
                CamlinternalOO["create_object_opt"]($$self,$$class);
              
              obj_init(env[2],$$self$1),
              $$self$1[test_kinds]=
              0,
              0,
              $$self$1[fmt]=
              Format["str_formatter"],
              0;
              return CamlinternalOO["run_initializers_opt"]
                      ($$self,$$self$1,$$class);
              };
            };
          };
      
      CamlinternalOO["make_class_store"]
       (shared$2,string_gen_init,string_gen_tables)}
    
    var envs=[0,0,Odoc_info["Scan"][1][4]];
    
    var
     string_gen=
      [0,
       string_gen_tables[1](envs),
       string_gen_tables[2],
       string_gen_tables[1],
       envs];
    
    var g=string_gen[1](0);
    
    var cached=CamlinternalOO["lookup_tables"](generator_tables,[0,G[1][2]]);
    
    if(cached[1])
     {}
    else
     {var
       generator_init=
        function($$class)
         {var g$1=CamlinternalOO["new_variable"]($$class,"");
          
          var generate=CamlinternalOO["get_method_label"]($$class,"generate");
          
          var inh=CamlinternalOO["inherits"]($$class,0,0,shared$4,G[1],0);
          
          var obj_init=inh[1];
          
          var generate$1=inh[2];
          
          CamlinternalOO["set_method"]
           ($$class,
            generate,
            function(self$neg2,l)
             {generate$1(self$neg2,l);
              "unknown block:(send (array.unsafe_get self-2/1279 g/1272) -643670219 l/1280)";
              });
          return function(env)
           {var env$1=env[1];
            
            return function($$self)
             {var
               $$self$1=
                CamlinternalOO["create_object_opt"]($$self,$$class);
              
              $$self$1[g$1]=env$1[2],0,obj_init(env[2],$$self$1);
              return CamlinternalOO["run_initializers_opt"]
                      ($$self,$$self$1,$$class);
              };
            };
          };
      
      CamlinternalOO["make_class_store"](shared$4,generator_init,cached)}
    
    var envs$1=[0,[0,0,g],G[1][4]];
    
    var generator=[0,cached[1](envs$1),cached[2],cached[1],envs$1];
    
    return [0,string_gen,generator];
    };

Odoc_args["extend_base_generator"]
 (function(funarg){var $$let=Generator(funarg);return [0,$$let[2]];});
module["exports"]={"p":p,"Generator":Generator};

