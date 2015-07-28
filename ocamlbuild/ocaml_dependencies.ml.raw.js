var Tools=require("Tools");
var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Resource=require("Resource");
var Format=require("Format");
var Filename=require("Filename");
var My_std=require("My_std");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var Map=require("Map");
var mydprintf=function(fmt){var $js=Log["dprintf"];return $js(10,fmt)};
var Circular_dependencies="unknown primitive:caml_set_oo_id";
var
 Make=
  function(I)
   {var $js=Map["Make"];
    var let=My_std["String"];
    var $js$1=[0,let[40]];
    var SMap=$js($js$1);
    var add=SMap[4];
    var empty=SMap[1];
    var
     find_all_set=
      function(x,acc)
       {try
         {var $js$2=SMap[22];return $js$2(x,acc)}
        catch(exn)
         {var $js$3=exn=Not_found;
          if($js$3)
           {return Resource["Resources"][1]}
          else
           {return "unknown primitive:reraise"}}};
    var
     smap_add_set=
      function(src,dst,acc)
       {var $js$2=SMap[4];
        var $js$3=Resource["Resources"][4];
        var $js$4=find_all_set(src,acc);
        var $js$5=$js$3(dst,$js$4);
        return $js$2(src,$js$5,acc)};
    var
     print_smap=
      function(pp,f,smap)
       {var $js$2=Format["fprintf"];
        $js$2
         (f,
          [0,
           [18,
            [1,[0,[11,"<hv0>",0],"<hv0>"]],
            [11,"{:",[18,[1,[0,[11,"<hv2>",0],"<hv2>"]],0]]],
           "@[<hv0>{:@[<hv2>"]);
        var $js$3=SMap[10];
        $js$3
         (function(k,v)
           {var $js$4=Format["fprintf"];
            return $js$4
                    (f,
                     [0,
                      [17,
                       [0,"@ ",1,0],
                       [18,
                        [1,[0,[11,"<2>",0],"<2>"]],
                        [3,0,[11," =>",[17,[0,"@ ",1,0],[15,[17,0,[12,59,0]]]]]]]],
                      "@ @[<2>%S =>@ %a@];"],
                     k,
                     pp,
                     v)},
          smap);
        var $js$4=Format["fprintf"];
        return $js$4
                (f,[0,[17,0,[17,[0,"@,",0,0],[11,":}",[17,0,0]]]],"@]@,:}@]"])};
    var print_smap_list=print_smap(Tools["pp_l"]);
    var print_smap_set=print_smap(Resource["Resources"][29]);
    var
     print_lazy=
      function(pp,f,l)
       {var $js$2=My_std["!*"];var $js$3=$js$2(l);return pp(f,$js$3)};
    var
     find_all_list=
      function(x,acc)
       {try
         {var $js$2=SMap[22];return $js$2(x,acc)}
        catch(exn)
         {var $js$3=exn=Not_found;
          if($js$3){return 0}else{return "unknown primitive:reraise"}}};
    var
     find_all_rec=
      function(xs,map)
       {var $js$2=Hashtbl["create"];
        var visited=$js$2(0,32);
        var
         self=
          function(x,acc)
           {try
             {var $js$3=Hashtbl["find"];$js$3(visited,x);return acc}
            catch(exn)
             {var $js$4=exn=Not_found;
              if($js$4)
               {var $js$5=Hashtbl["replace"];
                $js$5(visited,x,0);
                var $js$6=Resource["Resources"][4];
                var acc$1=$js$6(x,acc);
                try
                 {var $js$7=Resource["Resources"][14];
                  var $js$8=SMap[22];
                  var $js$9=$js$8(x,map);
                  return $js$7(self,$js$9,acc$1)}
                catch(exn$1)
                 {var $js$10=exn$1=Not_found;
                  if($js$10)
                   {return acc$1}
                  else
                   {return "unknown primitive:reraise"}}}
              else
               {return "unknown primitive:reraise"}}};
        var $js$3=My_std["List"][20];
        return $js$3(self,xs,Resource["Resources"][1])};
    var
     mkindex=
      function(fold,filter)
       {return fold
                (function(name,contents,acc)
                  {var $js$2=filter(name);
                   if($js$2)
                    {var $js$3=My_std["List"][20];
                     return $js$3
                             (function(elt,acc$1)
                               {var $js$4=find_all_list(elt,acc$1);
                                var $js$5=[0,name,$js$4];
                                return add(elt,$js$5,acc$1)},
                              contents,
                              acc)}
                   else
                    {return acc}},
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
      function(*opt*,*opt*$1,*opt*$2,*opt*$3,*opt*$4,fns)
       {var $js$2=*opt*;
        if($js$2){var caml_obj_ext=*opt*[1]}else{var caml_obj_ext="cmo"}
        var $js$3=*opt*$1;
        if($js$3){var caml_lib_ext=*opt*$1[1]}else{var caml_lib_ext="cma"}
        var $js$4=*opt*$2;
        if($js$4){var pack_mode=*opt*$2[1]}else{var pack_mode=0}
        var $js$5=*opt*$3;
        if($js$5){var used_libraries=*opt*$3[1]}else{var used_libraries=0}
        var $js$6=*opt*$4;
        if($js$6){var hidden_packages=*opt*$4[1]}else{var hidden_packages=0}
        var $js$7=pack_mode;
        if($js$7)
         {var valid_link_exts=[0,caml_obj_ext,[0,"cmi",0]]}
        else
         {var valid_link_exts=[0,caml_obj_ext,[0,caml_lib_ext,0]]}
        mydprintf
         ([0,
           [11,
            "caml_transitive_closure",
            [17,
             [0,"@ ",1,0],
             [11,
              "~caml_obj_ext:",
              [3,
               0,
               [17,
                [0,"@ ",1,0],
                [11,
                 "~pack_mode:",
                 [9,
                  [17,
                   [0,"@ ",1,0],
                   [11,"~used_libraries:",[15,[17,[0,"@ ",1,0],[15,0]]]]]]]]]]]],
           "caml_transitive_closure@ ~caml_obj_ext:%S@ ~pack_mode:%b@ ~used_libraries:%a@ %a"],
          caml_obj_ext,
          pack_mode,
          Tools["pp_l"],
          used_libraries,
          Tools["pp_l"],
          fns);
        var $js$8=I[3];
        var
         packages=
          $js$8
           (function(name,param)
             {var $js$9=Resource["Resources"][4];return $js$9(name)},
            Resource["Resources"][1]);
        mydprintf
         ([0,[11,"packages:",[17,[0,"@ ",1,0],[15,0]]],"packages:@ %a"],
          Resource["Resources"][29],
          packages);
        var
         caml_obj_ext_of_cmi=
          function(x)
           {var $js$9=Filename["check_suffix"];
            var $js$10=$js$9(x,".cmi");
            if($js$10)
             {var $js$11=Pathname["update_extensions"];
              return $js$11(caml_obj_ext,x)}
            else
             {return x}};
        var
         maybe_caml_obj_ext_of_cmi=
          function(x)
           {var $js$9=pack_mode;
            if($js$9)
             {var $js$10=Filename["check_suffix"];
              var $js$11=$js$10(x,".cmi");
              if($js$11)
               {var $js$12=Pathname["update_extensions"];
                var caml_obj=$js$12(caml_obj_ext,x);
                var $js$13=Resource["exists_in_build_dir"];
                var $js$14=$js$13(caml_obj);
                if($js$14){return caml_obj}else{return x}}
              else
               {return x}}
            else
             {var $js$15=Filename["check_suffix"];
              var $js$16=$js$15(x,".cmi");
              if($js$16)
               {var $js$17=Pathname["update_extensions"];
                return $js$17(caml_obj_ext,x)}
              else
               {return x}}};
        var
         not_linkable=
          function(x)
           {var $js$9=My_std["List"][27];
            var $js$10=Pathname["check_extension"];
            var $js$11=$js$10(x);
            var $js$12=$js$9($js$11,valid_link_exts);
            return !$js$12};
        var $js$9=I[1];
        var
         dependency_map=
          $js$9
           (function(x,y,acc)
             {var x$1=maybe_caml_obj_ext_of_cmi(x);
              var y$1=maybe_caml_obj_ext_of_cmi(y);
              var $js$10=not_linkable(x$1);
              var $js$11=not_linkable(y$1);
              var $js$12=$js$10||$js$11;
              var $js$13="unknown primitive:caml_string_equal"||$js$12;
              if($js$13)
               {return acc}
              else
               {var $js$14=Utils[4];return $js$14(x$1,y$1,acc)}},
            SMap[1]);
        mydprintf
         ([0,
           [11,"dependency_map:",[17,[0,"@ ",1,0],[15,0]]],
           "dependency_map:@ %a"],
          Utils[7],
          dependency_map);
        var $js$10=Utils[10];
        var used_files=$js$10(fns,dependency_map);
        mydprintf
         ([0,[11,"used_files:",[17,[0,"@ ",1,0],[15,0]]],"used_files:@ %a"],
          Resource["Resources"][29],
          used_files);
        var $js$11=Resource["Resources"][14];
        var
         open_packages=
          $js$11
           (function(file,acc)
             {var $js$12=Resource["Resources"][3];
              var $js$13=$js$12(file,packages);
              var $js$14=My_std["List"][30];
              var $js$15=$js$14(file,hidden_packages);
              var $js$16=!$js$15;
              var $js$17=$js$13&&$js$16;
              if($js$17){return [0,file,acc]}else{return acc}},
            used_files,
            0);
        mydprintf
         ([0,
           [11,"open_packages:",[17,[0,"@ ",1,0],[15,0]]],
           "open_packages:@ %a"],
          Tools["pp_l"],
          open_packages);
        var
         index_filter=
          function(ext,list,x)
           {var $js$12=Pathname["check_extension"];
            var $js$13=$js$12(x,ext);
            var $js$14=My_std["List"][30];
            var $js$15=$js$14(x,list);
            return $js$13&&$js$15};
        var
         lib_index=
          [246,
           function(param)
            {var $js$12=Utils[11];
             var $js$13=index_filter(caml_lib_ext,used_libraries);
             return $js$12(I[2],$js$13)}];
        var $js$12=Utils[8];
        var $js$13=$js$12(Utils[6]);
        mydprintf
         ([0,[11,"lib_index:",[17,[0,"@ ",1,0],[15,0]]],"lib_index:@ %a"],
          $js$13,
          lib_index);
        var
         package_index=
          [246,
           function(param)
            {var $js$14=Utils[11];
             var $js$15=index_filter(caml_obj_ext,open_packages);
             return $js$14(I[3],$js$15)}];
        var
         resolve_packages=
          function(x)
           {var $js$14=Utils[9];
            var $js$15=My_std["!*"];
            var $js$16=$js$15(package_index);
            var pkgs=$js$14(x,$js$16);
            var $js$17=pkgs;
            if($js$17)
             {var $js$18=pkgs[2];
              if($js$18)
               {var $js$19=Pervasives["failwith"];
                var $js$20=My_std["sbprintf"];
                var
                 $js$21=
                  $js$20
                   ([0,
                     [11,
                      "the file ",
                      [3,
                       0,
                       [11,
                        " is included in more than one active open package (",
                        [15,[12,41,0]]]]],
                     "the file %S is included in more than one active open package (%a)"],
                    x,
                    Tools["pp_l"],
                    pkgs);
                return $js$19($js$21)}
              else
               {return resolve_packages(pkgs[1])}}
            else
             {return x}};
        var
         libs_of=
          function(x)
           {var $js$14=Utils[9];
            var $js$15=My_std["!*"];
            var $js$16=$js$15(lib_index);
            return $js$14(x,$js$16)};
        var
         lib_of=
          function(x)
           {var libs=libs_of(x);
            var $js$14=libs;
            if($js$14)
             {var $js$15=libs[2];
              if($js$15)
               {var $js$16=Pervasives["failwith"];
                var $js$17=My_std["sbprintf"];
                var
                 $js$18=
                  $js$17
                   ([0,
                     [11,
                      "the file ",
                      [3,
                       0,
                       [11,
                        " is included in more than one active library (",
                        [15,[12,41,0]]]]],
                     "the file %S is included in more than one active library (%a)"],
                    x,
                    Tools["pp_l"],
                    libs);
                return $js$16($js$18)}
              else
               {return [0,libs[1]]}}
            else
             {return 0}};
        var
         convert_dependency=
          function(src,dst,acc)
           {var src$1=resolve_packages(src);
            var dst$1=resolve_packages(dst);
            var
             add_if_diff=
              function(x,y)
               {var $js$14="unknown primitive:caml_string_equal";
                if($js$14)
                 {return acc}
                else
                 {var $js$15=Utils[4];return $js$15(x,y,acc)}};
            var match=lib_of(src$1);
            var match$1=lib_of(dst$1);
            var $js$14=match;
            if($js$14)
             {var liba=match[1];
              var $js$15=match$1;
              if($js$15)
               {return add_if_diff(liba,match$1[1])}
              else
               {return add_if_diff(liba,dst$1)}}
            else
             {var $js$16=match$1;
              if($js$16)
               {return add_if_diff(src$1,match$1[1])}
              else
               {return add_if_diff(src$1,dst$1)}}};
        var
         dependencies=
          [246,
           function(param)
            {var $js$14=SMap[11];
             return $js$14
                     (function(k)
                       {var $js$15=Resource["Resources"][14];
                        var $js$16=convert_dependency(k);
                        return $js$15($js$16)},
                      dependency_map,
                      Utils[2])}];
        var $js$14=Utils[8];
        var $js$15=$js$14(Utils[7]);
        mydprintf
         ([0,
           [11,"dependencies:",[17,[0,"@ ",1,0],[15,0]]],
           "dependencies:@ %a"],
          $js$15,
          dependencies);
        var
         dependencies_of=
          function(x)
           {try
             {var $js$16=SMap[22];
              var $js$17=My_std["!*"];
              var $js$18=$js$17(dependencies);
              return $js$16(x,$js$18)}
            catch(exn)
             {var $js$19=exn=Not_found;
              if($js$19)
               {return Resource["Resources"][1]}
              else
               {return "unknown primitive:reraise"}}};
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
                   {var $js$16=cycle;
                    if($js$16)
                     {return cycle}
                    else
                     {var $js$17=My_std["List"][30];
                      var $js$18=$js$17(f,path);
                      if($js$18)
                       {var $js$19=My_std["List"][9];
                        var $js$20=$js$19(path);
                        return [0,$js$20]}
                      else
                       {var $js$21=Resource["Resources"][3];
                        var $js$22=$js$21(f,files);
                        var $js$23=!$js$22;
                        if($js$23){return 0}else{return dfs([0,f,path],f)}}}};
                var $js$16=Resource["Resources"][3];
                var $js$17=$js$16(fn,dead_ends[1]);
                if($js$17)
                 {return 0}
                else
                 {var $js$18=Resource["Resources"][14];
                  var $js$19=dependencies_of(fn);
                  var cycle=$js$18(through_dep,$js$19,0);
                  var $js$20=cycle;
                  if($js$20)
                   {return cycle}
                  else
                   {var $js$21=Resource["Resources"][4];
                    var $js$22=$js$21(fn,dead_ends[1]);
                    dead_ends[1]=$js$22,0;
                    return 0}}};
            var match=dfs(0,starting_file);
            var $js$16=match;
            if($js$16)
             {return match[1]}
            else
             {var $js$17=Resource["Resources"][20];return $js$17(files)}};
        var needed_in_order=[0,0];
        var needed=[0,Resource["Resources"][1]];
        var seen=[0,Resource["Resources"][1]];
        var
         aux=
          function(fn)
           {var $js$16=My_std["sys_file_exists"];
            var $js$17=$js$16(fn);
            var $js$18=Resource["Resources"][3];
            var $js$19=$js$18(fn,needed[1]);
            var $js$20=!$js$19;
            var $js$21=$js$17&&$js$20;
            if($js$21)
             {var $js$22=Resource["Resources"][3];
              var $js$23=$js$22(fn,seen[1]);
              if($js$23)
               {var $js$24=refine_cycle(seen[1],fn);
                var $js$25=[0,Circular_dependencies,$js$24,fn];
                throw $js$25}
              else
               {}
              var $js$26=Resource["Resources"][4];
              var $js$27=$js$26(fn,seen[1]);
              seen[1]=$js$27,0;
              var $js$28=Resource["Resources"][13];
              var $js$29=dependencies_of(fn);
              $js$28
               (function(f)
                 {var $js$30=My_std["sys_file_exists"];
                  var $js$31=$js$30(f);
                  if($js$31)
                   {var $js$32=Filename["check_suffix"];
                    var $js$33=$js$32(f,".cmi");
                    if($js$33)
                     {var f'=caml_obj_ext_of_cmi(f);
                      var $js$34="unknown primitive:caml_string_notequal";
                      if($js$34)
                       {var $js$35=My_std["sys_file_exists"];
                        var $js$36=$js$35(f');
                        if($js$36)
                         {return aux(f')}
                        else
                         {var $js$37=pack_mode;
                          if($js$37){return aux(f)}else{return 0}}}
                      else
                       {return 0}}
                    else
                     {return aux(f)}}
                  else
                   {return 0}},
                $js$29);
              var $js$30=Resource["Resources"][4];
              var $js$31=$js$30(fn,needed[1]);
              needed[1]=$js$31,0;
              return needed_in_order[1]=[0,fn,needed_in_order[1]],0}
            else
             {return 0}};
        var $js$16=My_std["List"][14];
        $js$16(aux,fns);
        mydprintf
         ([0,
           [11,
            "caml_transitive_closure:",
            [17,[0,"@ ",1,0],[15,[11," ->",[17,[0,"@ ",1,0],[15,0]]]]]],
           "caml_transitive_closure:@ %a ->@ %a"],
          Tools["pp_l"],
          fns,
          Tools["pp_l"],
          needed_in_order[1]);
        var $js$17=My_std["List"][9];
        return $js$17(needed_in_order[1])};
    return [0,SMap,0,Utils,caml_transitive_closure]};
module["exports"]=
{"Circular_dependencies":Circular_dependencies,
 "unknown block:(function funarg/1901\n  (let (let/1902 = (apply Make/1897 funarg/1901))\n    (makeblock 0 (field 3 let/1902))))":
 unknown block:(function funarg/1901
  (let (let/1902 = (apply Make/1897 funarg/1901))
    (makeblock 0 (field 3 let/1902))))};
