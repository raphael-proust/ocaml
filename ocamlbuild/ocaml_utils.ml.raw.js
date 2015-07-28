var Tools=require("Tools");
var Options=require("Options");
var Const=require("Const");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Flags=require("Flags");
var Command=require("Command");
var Param_tags=require("Param_tags");
var Lexing=require("Lexing");
var My_std=require("My_std");
var Tags=require("Tags");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var $js=My_std["Set"][1];
var let=My_std["String"];
var $js$1=[0,let[40],let[1]];
var S=$js($js$1);
var
 flag_and_dep=
  function(tags,cmd_spec)
   {var $js$2=Flags["flag"];
    $js$2(0,tags,cmd_spec);
    var $js$3=Command["fold_pathnames"];
    var ps=$js$3(function(p,ps$1){return [0,p,ps$1]},[1,cmd_spec],0);
    var $js$4=Command["dep"];
    return $js$4(tags,ps)};
var
 stdlib_dir=
  [246,
   function(param)
    {var $js$2=Pathname["Operators"][1];
     var $js$3=Pathname["mk"];
     var $js$4=$js$3("ocamlc.where");
     var ocamlc_where=$js$2(Options["build_dir"][1],$js$4);
     var $js$5=Command["execute"];
     var
      match=
       $js$5
        ([0,1],
         0,
         [1,
          [0,
           [0,
            Options["ocamlc"][1],
            [0,[1,"-where"],[0,[4,">"],[0,[2,ocamlc_where],0]]]]]]);
     var $js$6=My_std["String"][2];
     var $js$7=My_std["read_file"];
     var $js$8=$js$7(ocamlc_where);
     return $js$6($js$8)}];
var
 pflag_and_dep=
  function(tags,ptag,cmd_spec)
   {var $js$2=Param_tags["declare"];
    return $js$2
            (ptag,
             function(param)
              {var $js$3=Param_tags["make"];
               var $js$4=$js$3(ptag,param);
               var $js$5=[0,$js$4,tags];
               var $js$6=cmd_spec(param);
               return flag_and_dep($js$5,$js$6)})};
var
 module_name_of_filename=
  function(f)
   {var $js$2=My_std["String"][38];
    var $js$3=Pathname["remove_extensions"];
    var $js$4=$js$3(f);
    return $js$2($js$4)};
var
 module_name_of_pathname=
  function(x)
   {var $js$2=Pathname["to_string"];
    var $js$3=Pathname["basename"];
    var $js$4=$js$3(x);
    var $js$5=$js$2($js$4);
    return module_name_of_filename($js$5)};
var
 ignore_stdlib=
  function(x)
   {var $js$2=Options["nostdlib"][1];
    if($js$2)
     {return 0}
    else
     {var $js$3=Pathname["Operators"][1];
      var $js$4=My_std["!*"];
      var $js$5=$js$4(stdlib_dir);
      var $js$6=Pathname["Operators"][2];
      var $js$7=My_std["String"][39];
      var $js$8=$js$7(x);
      var $js$9=$js$6($js$8,"cmi");
      var x'=$js$3($js$5,$js$9);
      var $js$10=Pathname["exists"];
      return $js$10(x')}};
var non_dependencies=[0,0];
var
 non_dependency=
  function(m1,m2)
   {var $js$2=Pathname["get_extensions"];
    var $js$3=$js$2(m1);
    var $js$4=$js$3["length"];
    var $js$5=$js$4=0;
    if($js$5)
     {var $js$6=Pervasives["invalid_arg"];
      $js$6("non_dependency: no extension")}
    else
     {}
    return non_dependencies[1]=[0,[0,m1,m2],non_dependencies[1]],0};
var
 path_importance=
  function(path,x)
   {var $js$2=My_std["List"][30];
    var $js$3=$js$2([0,path,x],non_dependencies[1]);
    var $js$4=My_std["List"][30];
    var $js$5=$js$4(x,Options["ignore_list"][1]);
    var $js$6=$js$3||$js$5;
    if($js$6)
     {var $js$7=Log["dprintf"];
      var
       match=
        $js$7
         (3,
          [0,
           [11,"This module (",[2,0,[11,") is ignored by ",[2,0,0]]]],
           "This module (%s) is ignored by %s"],
          x,
          path);
      return -589744366}
    else
     {var $js$8=ignore_stdlib(x);
      if($js$8){return 886832744}else{return -38817255}}};
var $js$2=My_std["memo3"];
var
 expand_module=
  $js$2
   (function(include_dirs,module_name,exts)
     {var $js$3=Pathname["dirname"];
      var dirname=$js$3(module_name);
      var $js$4=Pathname["basename"];
      var basename=$js$4(module_name);
      var $js$5=Pathname["Operators"][1];
      var $js$6=My_std["String"][38];
      var $js$7=$js$6(basename);
      var module_name_cap=$js$5(dirname,$js$7);
      var $js$8=Pathname["Operators"][1];
      var $js$9=My_std["String"][39];
      var $js$10=$js$9(basename);
      var module_name_uncap=$js$8(dirname,$js$10);
      var $js$11=My_std["List"][20];
      return $js$11
              (function(include_dir)
                {var $js$12=My_std["List"][20];
                 return $js$12
                         (function(ext,acc)
                           {var $js$13=Pathname["Operators"][1];
                            var $js$14=Pathname["Operators"][2];
                            var $js$15=$js$14(module_name_uncap,ext);
                            var $js$16=$js$13(include_dir,$js$15);
                            var $js$17=Pathname["Operators"][1];
                            var $js$18=Pathname["Operators"][2];
                            var $js$19=$js$18(module_name_cap,ext);
                            var $js$20=$js$17(include_dir,$js$19);
                            var $js$21=[0,$js$20,acc];
                            return [0,$js$16,$js$21]},
                          exts)},
               include_dirs,
               0)});
var
 string_list_of_file=
  function(file)
   {var $js$3=My_std["with_input_file"];
    return $js$3
            (0,
             file,
             function(ic)
              {var $js$4=Lexers["blank_sep_strings"];
               var $js$5=Lexing["from_channel"];
               var $js$6=$js$5(ic);
               return $js$4(Const["Source"][1],$js$6)})};
var print_path_list=Pathname["print_path_list"];
var
 ocaml_ppflags=
  function(tags)
   {var $js$3=Flags["of_tags"];
    var $js$4=Tags["Operators"][1];
    var $js$5=Tags["Operators"][1];
    var $js$6=$js$5(tags,"ocaml");
    var $js$7=$js$4($js$6,"pp");
    var flags=$js$3($js$7);
    var $js$8=Command["reduce"];
    var reduced=$js$8(flags);
    var $js$9=reduced=0;
    if($js$9){return 0}else{return [0,[0,[1,"-pp"],[0,[7,reduced],0]]]}};
var
 ocaml_add_include_flag=
  function(x,acc)
   {var $js$3="unknown primitive:caml_string_equal";
    if($js$3){return acc}else{return [0,[1,"-I"],[0,[1,x],acc]]}};
var
 ocaml_include_flags=
  function(path)
   {var $js$3=My_std["List"][20];
    var $js$4=Pathname["include_dirs_of"];
    var $js$5=Pathname["dirname"];
    var $js$6=$js$5(path);
    var $js$7=$js$4($js$6);
    var $js$8=$js$3(ocaml_add_include_flag,$js$7,0);
    return [0,$js$8]};
var $js$3=Hashtbl["create"];
var info_libraries=$js$3(0,103);
var $js$4=Hashtbl["create"];
var libraries=$js$4(0,103);
var
 libraries_of=
  function(m)
   {try
     {var $js$5=Hashtbl["find"];return $js$5(libraries,m)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6){return 0}else{return "unknown primitive:reraise"}}};
var
 use_lib=
  function(m,lib)
   {var $js$5=Hashtbl["replace"];
    var $js$6=libraries_of(m);
    var $js$7=[0,lib,$js$6];
    return $js$5(libraries,m,$js$7)};
var
 ocaml_lib=
  function(*opt*,*opt*$1,*opt*$2,dir,tag_name,libpath)
   {var $js$5=*opt*;
    if($js$5){var extern=*opt*[1]}else{var extern=0}
    var $js$6=*opt*$1;
    if($js$6){var byte=*opt*$1[1]}else{var byte=1}
    var $js$7=*opt*$2;
    if($js$7){var native=*opt*$2[1]}else{var native=1}
    var
     add_dir=
      function(x)
       {var $js$8=dir;
        if($js$8)
         {return [0,[0,[1,"-I"],[0,[2,dir[1]],[0,x,0]]]]}
        else
         {return x}};
    var $js$8=tag_name;
    if($js$8)
     {var tag_name$1=tag_name[1]}
    else
     {var $js$9=Pervasives["^"];
      var $js$10=Pathname["basename"];
      var $js$11=$js$10(libpath);
      var tag_name$1=$js$9("use_",$js$11)}
    var
     flag_and_dep$1=
      function(tags,lib)
       {var $js$12=Flags["flag"];
        var $js$13=add_dir([1,lib]);
        $js$12(0,tags,$js$13);
        var $js$14=!extern;
        if($js$14)
         {var $js$15=Command["dep"];return $js$15(tags,[0,lib,0])}
        else
         {return 0}};
    var $js$12=Hashtbl["replace"];
    $js$12(info_libraries,tag_name$1,[0,libpath,extern]);
    var $js$13=Flags["mark_tag_used"];
    $js$13(tag_name$1);
    var $js$14=extern;
    if($js$14)
     {var $js$15=byte;
      if($js$15)
       {var $js$16=Pervasives["^"];
        var $js$17=$js$16(libpath,".cma");
        flag_and_dep$1
         ([0,"ocaml",[0,tag_name$1,[0,"link",[0,"byte",0]]]],$js$17)}
      else
       {}
      var $js$18=native;
      if($js$18)
       {var $js$19=Pervasives["^"];
        var $js$20=$js$19(libpath,".cmxa");
        flag_and_dep$1
         ([0,"ocaml",[0,tag_name$1,[0,"link",[0,"native",0]]]],$js$20)}
      else
       {}}
    else
     {var $js$21=!byte&&!native;
      if($js$21)
       {var $js$22=Pervasives["invalid_arg"];
        $js$22
         ("ocaml_lib: ~byte:false or ~native:false only works with ~extern:true")}
      else
       {}}
    var $js$23=dir;
    if($js$23)
     {var dir$1=dir[1];
      var $js$24=My_std["List"][14];
      return $js$24
              (function(x)
                {var $js$25=Flags["flag"];
                 return $js$25
                         (0,
                          [0,"ocaml",[0,tag_name$1,[0,x,0]]],
                          [0,[0,[1,"-I"],[0,[2,dir$1],0]]])},
               [0,"compile",[0,"doc",[0,"infer_interface",0]]])}
    else
     {return 0}};
var $js$5=Pathname["update_extensions"];
var cmi_of=$js$5("cmi");
var Ocamldep_error="unknown primitive:caml_set_oo_id";
var $js$6=Hashtbl["create"];
var path_dependencies=$js$6(0,103);
var
 read_path_dependencies=
  function(path)
   {var module_name=module_name_of_pathname(path);
    var $js$7=Pathname["Operators"][2];
    var depends=$js$7(path,"depends");
    var $js$8=My_std["with_input_file"];
    return $js$8
            (0,
             depends,
             function(ic)
              {try
                {var $js$9=Lexers["ocamldep_output"];
                 var $js$10=Lexing["from_channel"];
                 var $js$11=$js$10(ic);
                 var ocamldep_output=$js$9(Const["Source"][5],$js$11)}
               catch(exn)
                {var $js$12=exn[1]=Lexers["Error"];
                 if($js$12)
                  {var $js$13=Printf["sprintf"];
                   var
                    $js$14=
                     $js$13
                      ([0,
                        [11,"Ocamldep.ocamldep: bad output (",[2,0,[12,41,0]]],
                        "Ocamldep.ocamldep: bad output (%s)"],
                       exn[2][1]);
                   var $js$15=[0,Ocamldep_error,$js$14];
                   throw $js$15}
                 else
                  {var ocamldep_output="unknown primitive:reraise"}}
               var $js$16=My_std["List"][20];
               var
                deps=
                 $js$16
                  (function(param,acc)
                    {var path$1=param[1];
                     var module_name'=module_name_of_pathname(path$1);
                     var $js$17="unknown primitive:caml_string_equal";
                     if($js$17)
                      {var $js$18=My_std["List"][3];return $js$18(param[2],acc)}
                     else
                      {var $js$19=Printf["sprintf"];
                       var
                        $js$20=
                         $js$19
                          ([0,
                            [11,
                             "Ocamldep.ocamldep: multiple files in ocamldep output (",
                             [2,0,[11," not expected)",0]]],
                            "Ocamldep.ocamldep: multiple files in ocamldep output (%s not expected)"],
                           path$1);
                       var $js$21=[0,Ocamldep_error,$js$20];
                       throw $js$21}},
                   ocamldep_output,
                   0);
               var $js$17=Tags["mem"];
               var $js$18=Tools["tags_of_pathname"];
               var $js$19=$js$18(path);
               var $js$20=$js$17("nopervasives",$js$19);
               var $js$21=!$js$20;
               var $js$22=Options["nostdlib"][1]&&$js$21;
               if($js$22)
                {var deps$1=[0,"Pervasives",deps]}
               else
                {var deps$1=deps}
               var $js$23=My_std["List"][20];
               var
                deps'=
                 $js$23
                  (function(dep,acc)
                    {var importance=path_importance(path,dep);
                     var $js$24=importance>=-38817255;
                     if($js$24)
                      {return [0,[0,importance,dep],acc]}
                     else
                      {return acc}},
                   deps$1,
                   0);
               var $js$24=Hashtbl["replace"];
               var $js$25=My_std["List"][3];
               try
                {var $js$26=Hashtbl["find"];
                 var $js$27=$js$26(path_dependencies,path)}
               catch(exn$1)
                {var $js$28=exn$1=Not_found;
                 if($js$28)
                  {var $js$27=0}
                 else
                  {var $js$27="unknown primitive:reraise"}}
               var $js$29=$js$25($js$27,deps');
               $js$24(path_dependencies,path,$js$29);
               return deps'})};
var $js$7=My_std["memo"];
var path_dependencies_of=$js$7(read_path_dependencies);
module["exports"]=
{"stdlib_dir":stdlib_dir,
 "module_name_of_filename":module_name_of_filename,
 "module_name_of_pathname":module_name_of_pathname,
 "ignore_stdlib":ignore_stdlib,
 "non_dependency":non_dependency,
 "expand_module":expand_module,
 "string_list_of_file":string_list_of_file,
 "ocaml_ppflags":ocaml_ppflags,
 "ocaml_include_flags":ocaml_include_flags,
 "libraries_of":libraries_of,
 "use_lib":use_lib,
 "cmi_of":cmi_of,
 "ocaml_add_include_flag":ocaml_add_include_flag,
 "flag_and_dep":flag_and_dep,
 "pflag_and_dep":pflag_and_dep,
 "Ocamldep_error":Ocamldep_error,
 "path_dependencies_of":path_dependencies_of,
 "info_libraries":info_libraries,
 "ocaml_lib":ocaml_lib};
