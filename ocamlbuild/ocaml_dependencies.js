// Generated CODE, PLEASE EDIT WITH CARE 

var Tools=require("./tools.js");
var Pervasives=require("./pervasives.js");
var Pathname=require("./pathname.js");
var Resource=require("./resource.js");
var Format=require("./format.js");
var Filename=require("./filename.js");
var My_std=require("./my_std.js");
var Hashtbl=require("./hashtbl.js");
var Log=require("./log.js");
var Map=require("./map.js");
var CamlPrimitive=require("./camlPrimitive.js");



var mydprintf=function(fmt){return Log["dprintf"](10,fmt)};

var
 Circular_dependencies=
  CamlPrimitive["caml_set_oo_id"]
   ([248,"Ocaml_dependencies.Circular_dependencies",0]);

var
 Make=
  function(I)
   {var $$let=My_std["String"];
    
    var SMap=Map["Make"]([0,$$let[40]]);
    
    var add=SMap[4];
    
    var empty=SMap[1];
    
    var
     find_all_set=
      function(x,acc)
       {try
         {return SMap[22](x,acc)}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return Resource["Resources"][1]}
          else
           {throw exn}
          }
        };
    
    var
     smap_add_set=
      function(src,dst,acc)
       {return SMap[4]
                (src,Resource["Resources"][4](dst,find_all_set(src,acc)),acc)};
    
    var
     print_smap=
      function(pp,f,smap)
       {Format["fprintf"]
         (f,
          [/* Format */0,
           [/* Formatting_gen */18,
            [/* Open_box */1,
             [/* Format */0,
              [/* String_literal */11,"<hv0>",/* End_of_format */0],
              "<hv0>"]],
            [/* String_literal */11,
             "{:",
             [/* Formatting_gen */18,
              [/* Open_box */1,
               [/* Format */0,
                [/* String_literal */11,"<hv2>",/* End_of_format */0],
                "<hv2>"]],
              /* End_of_format */0]]],
           "@[<hv0>{:@[<hv2>"]);
        SMap[10]
         (function(k,v)
           {return Format["fprintf"]
                    (f,
                     [/* Format */0,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* Caml_string */3,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " =>",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             [/* Char_literal */12,59,/* End_of_format */0]]]]]]]],
                      "@ @[<2>%S =>@ %a@];"],
                     k,
                     pp,
                     v)},
          smap);
        return Format["fprintf"]
                (f,
                 [/* Format */0,
                  [/* Formatting_lit */17,
                   /* Close_box */0,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@,",0,0],
                    [/* String_literal */11,
                     ":}",
                     [/* Formatting_lit */17,
                      /* Close_box */0,
                      /* End_of_format */0]]]],
                  "@]@,:}@]"])};
    
    var
     print_smap_list=
      function(param,param$1){return print_smap(Tools["pp_l"],param,param$1)};
    
    var
     print_smap_set=
      function(param,param$1)
       {return print_smap(Resource["Resources"][29],param,param$1)};
    
    var print_lazy=function(pp,f,l){return pp(f,My_std["!*"](l))};
    
    var
     find_all_list=
      function(x,acc)
       {try
         {return SMap[22](x,acc)}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return /* [] */0}
          else
           {throw exn}
          }
        };
    
    var
     find_all_rec=
      function(xs,map)
       {var visited=Hashtbl["create"](/* None */0,32);
        
        var
         $$self=
          function(x,acc)
           {try
             {Hashtbl["find"](visited,x);return acc}
            catch(exn)
             {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
               {Hashtbl["replace"](visited,x,/* () */0);
                var acc$1=Resource["Resources"][4](x,acc);
                
                try
                 {return Resource["Resources"][14]
                          ($$self,SMap[22](x,map),acc$1)}
                catch(exn$1)
                 {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                   {return acc$1}
                  else
                   {throw exn$1}
                  }
                }
              else
               {throw exn}
              }
            };
        
        return My_std["List"][20]($$self,xs,Resource["Resources"][1])};
    
    var
     mkindex=
      function(fold,filter)
       {return fold
                (function(name,contents,acc)
                  {return filter(name)
                           ?My_std["List"][20]
                             (function(elt,acc)
                               {return add(elt,/* :: */[0,name,find_all_list(elt,acc)],acc)},
                              contents,
                              acc)
                           :acc},
                 empty)};
    
    var
     Utils=
      [0,
       add,
       empty,
       find_all_set,
       smap_add_set,
       print_smap,
       print_smap_list,
       print_smap_set,
       print_lazy,
       find_all_list,
       find_all_rec,
       mkindex];
    
    var
     caml_transitive_closure=
      function
       ($staropt$star,
        $staropt$star$1,
        $staropt$star$2,
        $staropt$star$3,
        $staropt$star$4,
        fns)
       {var caml_obj_ext=$staropt$star?$staropt$star[1]:"cmo";
        
        var caml_lib_ext=$staropt$star$1?$staropt$star$1[1]:"cma";
        
        var pack_mode=$staropt$star$2?$staropt$star$2[1]:/* false */0;
        
        var used_libraries=$staropt$star$3?$staropt$star$3[1]:/* [] */0;
        
        var hidden_packages=$staropt$star$4?$staropt$star$4[1]:/* [] */0;
        
        var
         valid_link_exts=
          pack_mode
           ?/* :: */[0,caml_obj_ext,[/* :: */0,"cmi",/* [] */0]]
           :/* :: */[0,caml_obj_ext,/* :: */[0,caml_lib_ext,/* [] */0]];
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "caml_transitive_closure",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* String_literal */11,
               "~caml_obj_ext:",
               [/* Caml_string */3,
                /* No_padding */0,
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* String_literal */11,
                  "~pack_mode:",
                  [/* Bool */9,
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* String_literal */11,
                     "~used_libraries:",
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]],
            "caml_transitive_closure@ ~caml_obj_ext:%S@ ~pack_mode:%b@ ~used_libraries:%a@ %a"])
         (caml_obj_ext,
          pack_mode,
          Tools["pp_l"],
          used_libraries,
          Tools["pp_l"],
          fns);
        var
         packages=
          I[3]
           (function(name,param){return Resource["Resources"][4](name)},
            Resource["Resources"][1]);
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "packages:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,/* End_of_format */0]]],
            "packages:@ %a"])
         (Resource["Resources"][29],packages);
        var
         caml_obj_ext_of_cmi=
          function(x)
           {return Filename["check_suffix"](x,".cmi")
                    ?Pathname["update_extensions"](caml_obj_ext,x)
                    :x};
        
        var
         maybe_caml_obj_ext_of_cmi=
          function(x)
           {if(pack_mode)
             {if(Filename["check_suffix"](x,".cmi"))
               {var caml_obj=Pathname["update_extensions"](caml_obj_ext,x);
                
                return Resource["exists_in_build_dir"](caml_obj)?caml_obj:x}
              else
               {return x}
              }
            else
             {return Filename["check_suffix"](x,".cmi")
                      ?Pathname["update_extensions"](caml_obj_ext,x)
                      :x}
            };
        
        var
         not_linkable=
          function(x)
           {return !My_std["List"][27]
                    (Pathname["check_extension"](x),valid_link_exts)};
        
        var
         dependency_map=
          I[1]
           (function(x,y,acc)
             {var x$1=maybe_caml_obj_ext_of_cmi(x);
              
              var y$1=maybe_caml_obj_ext_of_cmi(y);
              
              return CamlPrimitive["caml_string_equal"](x$1,y$1)||
                      not_linkable(x$1)||
                      not_linkable(y$1)
                      ?acc
                      :Utils[4](x$1,y$1,acc)},
            SMap[1]);
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "dependency_map:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,/* End_of_format */0]]],
            "dependency_map:@ %a"])
         (Utils[7],dependency_map);
        var used_files=Utils[10](fns,dependency_map);
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "used_files:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,/* End_of_format */0]]],
            "used_files:@ %a"])
         (Resource["Resources"][29],used_files);
        var
         open_packages=
          Resource["Resources"][14]
           (function(file,acc)
             {return Resource["Resources"][3](file,packages)&&
                      !My_std["List"][30](file,hidden_packages)
                      ?/* :: */[0,file,acc]
                      :acc},
            used_files,
            /* [] */0);
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "open_packages:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,/* End_of_format */0]]],
            "open_packages:@ %a"])
         (Tools["pp_l"],open_packages);
        var
         index_filter=
          function(ext,list,x)
           {return Pathname["check_extension"](x,ext)&&
                   My_std["List"][30](x,list)};
        
        var
         lib_index=
          [246,
           function(param)
            {return Utils[11]
                     (I[2],
                      function(param$1)
                       {return index_filter(caml_lib_ext,used_libraries,param$1)})}];
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "lib_index:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,/* End_of_format */0]]],
            "lib_index:@ %a"])
         (Utils[8](Utils[6]),lib_index);
        var
         package_index=
          [246,
           function(param)
            {return Utils[11]
                     (I[3],
                      function(param$1)
                       {return index_filter(caml_obj_ext,open_packages,param$1)})}];
        
        var
         resolve_packages=
          function(x)
           {var pkgs=Utils[9](x,My_std["!*"](package_index));
            
            return pkgs
                    ?pkgs[2]
                      ?Pervasives["failwith"]
                        (My_std["sbprintf"]
                          ([/* Format */0,
                            [/* String_literal */11,
                             "the file ",
                             [/* Caml_string */3,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " is included in more than one active open package (",
                               [/* Alpha */15,
                                [/* Char_literal */12,41,/* End_of_format */0]]]]],
                            "the file %S is included in more than one active open package (%a)"],
                           x,
                           Tools["pp_l"],
                           pkgs))
                      :resolve_packages(pkgs[1])
                    :x};
        
        var libs_of=function(x){return Utils[9](x,My_std["!*"](lib_index))};
        
        var
         lib_of=
          function(x)
           {var libs=libs_of(x);
            
            return libs
                    ?libs[2]
                      ?Pervasives["failwith"]
                        (My_std["sbprintf"]
                          ([/* Format */0,
                            [/* String_literal */11,
                             "the file ",
                             [/* Caml_string */3,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " is included in more than one active library (",
                               [/* Alpha */15,
                                [/* Char_literal */12,41,/* End_of_format */0]]]]],
                            "the file %S is included in more than one active library (%a)"],
                           x,
                           Tools["pp_l"],
                           libs))
                      :/* Some */[0,libs[1]]
                    :/* None */0};
        
        var
         convert_dependency=
          function(src,dst,acc)
           {var src$1=resolve_packages(src);
            
            var dst$1=resolve_packages(dst);
            
            var
             add_if_diff=
              function(x,y)
               {return CamlPrimitive["caml_string_equal"](x,y)
                        ?acc
                        :Utils[4](x,y,acc)};
            
            var match=lib_of(src$1);
            
            var match$1=lib_of(dst$1);
            
            if(match)
             {var liba=match[1];
              
              return match$1
                      ?add_if_diff(liba,match$1[1])
                      :add_if_diff(liba,dst$1)}
            else
             {return match$1
                      ?add_if_diff(src$1,match$1[1])
                      :add_if_diff(src$1,dst$1)}
            };
        
        var
         dependencies=
          [246,
           function(param)
            {return SMap[11]
                     (function(k)
                       {return Resource["Resources"][14]
                                (function(param$1,param$2)
                                  {return convert_dependency(k,param$1,param$2)})},
                      dependency_map,
                      Utils[2])}];
        
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "dependencies:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,/* End_of_format */0]]],
            "dependencies:@ %a"])
         (Utils[8](Utils[7]),dependencies);
        var
         dependencies_of=
          function(x)
           {try
             {return SMap[22](x,My_std["!*"](dependencies))}
            catch(exn)
             {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
               {return Resource["Resources"][1]}
              else
               {throw exn}
              }
            };
        
        var
         refine_cycle=
          function(files,starting_file)
           {var dead_ends=[0,Resource["Resources"][1]];
            
            var
             dfs=
              function(path,fn)
               {var
                 through_dep=
                  function(f,cycle)
                   {return cycle
                            ?cycle
                            :My_std["List"][30](f,path)
                              ?/* Some */[0,My_std["List"][9](path)]
                              :!Resource["Resources"][3](f,files)
                                ?/* None */0
                                :dfs(/* :: */[0,f,path],f)};
                
                if(Resource["Resources"][3](fn,dead_ends[1]))
                 {return /* None */0}
                else
                 {var
                   cycle=
                    Resource["Resources"][14]
                     (through_dep,dependencies_of(fn),/* None */0);
                  
                  return cycle
                          ?cycle
                          :(dead_ends[1]=
                            Resource["Resources"][4](fn,dead_ends[1]),
                            /* None */0)}
                };
            
            var match=dfs(/* [] */0,starting_file);
            
            return match?match[1]:Resource["Resources"][20](files)};
        
        var needed_in_order=[0,/* [] */0];
        
        var needed=[0,Resource["Resources"][1]];
        
        var seen=[0,Resource["Resources"][1]];
        
        var
         aux=
          function(fn)
           {if
             (My_std["sys_file_exists"](fn)&&
              !Resource["Resources"][3](fn,needed[1]))
             {if(Resource["Resources"][3](fn,seen[1]))
               {throw [0,Circular_dependencies,refine_cycle(seen[1],fn),fn]}
              
              seen[1]=Resource["Resources"][4](fn,seen[1]);
              Resource["Resources"][13]
               (function(f)
                 {if(My_std["sys_file_exists"](f))
                   {if(Filename["check_suffix"](f,".cmi"))
                     {var f$prime=caml_obj_ext_of_cmi(f);
                      
                      return CamlPrimitive["caml_string_notequal"](f$prime,fn)
                              ?My_std["sys_file_exists"](f$prime)
                                ?aux(f$prime)
                                :pack_mode?aux(f):/* () */0
                              :/* () */0}
                    else
                     {return aux(f)}
                    }
                  else
                   {return 0}
                  },
                dependencies_of(fn));
              needed[1]=Resource["Resources"][4](fn,needed[1]);
              return needed_in_order[1]=/* :: */[0,fn,needed_in_order[1]],0}
            else
             {return 0}
            };
        
        My_std["List"][14](aux,fns);
        mydprintf
          ([/* Format */0,
            [/* String_literal */11,
             "caml_transitive_closure:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Alpha */15,
               [/* String_literal */11,
                " ->",
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* Alpha */15,/* End_of_format */0]]]]]],
            "caml_transitive_closure:@ %a ->@ %a"])
         (Tools["pp_l"],fns,Tools["pp_l"],needed_in_order[1]);
        return My_std["List"][9](needed_in_order[1])};
    
    return [0,SMap,0,Utils,caml_transitive_closure]};

module["exports"]=
{"Circular_dependencies":Circular_dependencies,
 "Make":function(funarg){var $$let=Make(funarg);return [0,$$let[4]]}};

