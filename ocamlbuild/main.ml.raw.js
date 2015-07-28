var Ocaml_utils=require("Ocaml_utils");
var Tools=require("Tools");
var Options=require("Options");
var Ocaml_dependencies=require("Ocaml_dependencies");
var Const=require("Const");
var Slurp=require("Slurp");
var Plugin=require("Plugin");
var Exit_codes=require("Exit_codes");
var Ocaml_specific=require("Ocaml_specific");
var Pervasives=require("Pervasives");
var Rule=require("Rule");
var Arg=require("Arg");
var Lexers=require("Lexers");
var Fda=require("Fda");
var Pathname=require("Pathname");
var Resource=require("Resource");
var Format=require("Format");
var Digest_cache=require("Digest_cache");
var Flags=require("Flags");
var Solver=require("Solver");
var Loc=require("Loc");
var Command=require("Command");
var Param_tags=require("Param_tags");
var Shell=require("Shell");
var Hooks=require("Hooks");
var Filename=require("Filename");
var Report=require("Report");
var Printexc=require("Printexc");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Configuration=require("Configuration");
var Tags=require("Tags");
var Log=require("Log");
var Sys=require("Sys");
var Exit_build_error="unknown primitive:caml_set_oo_id";
var Exit_silently="unknown primitive:caml_set_oo_id";
var
 clean=
  function(param)
   {var $js=Shell["rm_rf"];
    $js(Options["build_dir"][1]);
    var $js$1=Options["make_links"][1];
    if($js$1)
     {var $js$2=Slurp["map"];
      var $js$3=Slurp["slurp"];
      var $js$4=$js$3(Filename["current_dir_name"]);
      var entry=$js$2(function(param$1,param$2,param$3){return 1},$js$4);
      var $js$5=Slurp["force"];
      var $js$6=Resource["clean_up_links"];
      var $js$7=$js$6(entry);
      $js$5($js$7)}
    else
     {}
    var $js$8=Log["finish"];
    $js$8(0,0);
    return "unknown primitive:raise"};
var
 show_tags=
  function(param)
   {var $js=My_std["List"][5];
    var $js$1=$js(Options["show_tags"][1]);
    var $js$2=$js$1>0;
    if($js$2)
     {var $js$3=Log["eprintf"];
      $js$3
       ([0,
         [11,
          "Warning: the following tags do not include dynamically-generated tags, such as link, compile, pack, byte, native, c, pdf... (this list is by no means exhaustive).\n",
          0],
         "Warning: the following tags do not include dynamically-generated tags, such as link, compile, pack, byte, native, c, pdf... (this list is by no means exhaustive).\n"])}
    else
     {}
    var $js$4=My_std["List"][14];
    return $js$4
            (function(path)
              {var $js$5=Log["eprintf"];
               var $js$6=Tools["tags_of_pathname"];
               var $js$7=$js$6(path);
               return $js$5
                       ([0,
                         [18,
                          [1,[0,[11,"<2>",0],"<2>"]],
                          [11,
                           "Tags for ",
                           [3,
                            0,
                            [12,
                             58,
                             [17,[0,"@ ",1,0],[11,"{. ",[15,[11," .}",[17,0,0]]]]]]]]],
                         "@[<2>Tags for %S:@ {. %a .}@]"],
                        path,
                        Tags["print"],
                        $js$7)},
             Options["show_tags"][1])};
var
 show_documentation=
  function(param)
   {var $js=Rule["show_documentation"];
    $js(0);
    var $js$1=Flags["show_documentation"];
    return $js$1(0)};
var $js=Tags["of_list"];
var
 builtin_useful_tags=
  $js
   ([0,
     "include",
     [0,
      "traverse",
      [0,
       "not_hygienic",
       [0,
        "precious",
        [0,
         "pack",
         [0,
          "ocamlmklib",
          [0,
           "native",
           [0,
            "thread",
            [0,"nopervasives",[0,"use_menhir",[0,"ocamldep",[0,"thread",0]]]]]]]]]]]]);
var
 proceed=
  function(param)
   {var $js$1=Hooks["call_hook"];
    $js$1(2);
    var $js$2=Options["init"];
    $js$2(0);
    var $js$3=My_std["List"][16];
    var $js$4=$js$3(Pathname["normalize"],Options["include_dirs"][1]);
    Options["include_dirs"][1]=$js$4,0;
    var $js$5=My_std["List"][16];
    var $js$6=$js$5(Pathname["normalize"],Options["exclude_dirs"][1]);
    Options["exclude_dirs"][1]=$js$6,0;
    var $js$7=Options["must_clean"][1];
    if($js$7){clean(0)}else{}
    var $js$8=Hooks["call_hook"];
    $js$8(3);
    var options_wd="unknown primitive:caml_sys_getcwd";
    var $js$9=Plugin["we_need_a_plugin"];
    var $js$10=$js$9(0);
    var first_run_for_plugin=$js$10&&!Options["just_plugin"][1];
    var $js$11=My_std["List"][3];
    var $js$12=My_std["List"][16];
    var $js$13=$js$12(Pathname["dirname"],Options["targets"][1]);
    var target_dirs=$js$11(0,$js$13);
    var $js$14=Configuration["parse_string"];
    $js$14
     ([0,Const["Source"][7]],
      '<**/*.ml> or <**/*.mli> or <**/*.mlpack> or <**/*.ml.depends>: ocaml\n<**/*.byte>: ocaml, byte, program\n<**/*.odoc>: ocaml, doc\n<**/*.native>: ocaml, native, program\n<**/*.cma>: ocaml, byte, library\n<**/*.cmxa>: ocaml, native, library\n<**/*.cmo>: ocaml, byte\n<**/*.cmi>: ocaml, byte, native\n<**/*.cmx>: ocaml, native\n<**/*.mly>: infer\n<**/.svn>|".bzr"|".hg"|".git"|"_darcs": -traverse\n');
    var $js$15=My_std["List"][14];
    var $js$16=Configuration["parse_string"];
    var $js$17=$js$16([0,Const["Source"][2]]);
    $js$15($js$17,Options["tag_lines"][1]);
    var $js$18=Configuration["tag_any"];
    $js$18(Options["tags"][1]);
    var $js$19=Options["ocamlbuild_project_heuristic"];
    var $js$20=$js$19(0);
    var $js$21=Options["recursive"][1]||$js$20;
    if($js$21)
     {var $js$22=Configuration["tag_any"];$js$22([0,"traverse",0])}
    else
     {}
    var $js$23=Options["use_ocamlfind"][1];
    if($js$23)
     {var $js$24=My_std["List"][14];
      $js$24
       (function(pkg)
         {var $js$25=Param_tags["make"];
          var tag=$js$25("package",pkg);
          var $js$26=Configuration["tag_any"];
          return $js$26([0,tag,0])},
        Options["ocaml_pkgs"][1])}
    else
     {}
    var match=Options["ocaml_syntax"][1];
    var $js$25=match;
    if($js$25)
     {var $js$26=Configuration["tag_any"];
      var $js$27=Param_tags["make"];
      var $js$28=$js$27("syntax",match[1]);
      var $js$29=[0,$js$28,0];
      $js$26($js$29)}
    else
     {}
    var newpwd="unknown primitive:caml_sys_getcwd";
    "unknown primitive:caml_sys_chdir";
    var entry_include_dirs=[0,0];
    var $js$30=Slurp["filter"];
    var $js$31=Slurp["slurp"];
    var $js$32=$js$31(Filename["current_dir_name"]);
    var
     entry=
      $js$30
       (function(path,name,param$1)
         {var $js$33="unknown primitive:caml_string_equal";
          if($js$33){var dir=0}else{var dir=[0,path]}
          var $js$34=Pathname["Operators"][1];
          var path_name=$js$34(path,name);
          var $js$35="unknown primitive:caml_string_equal";
          if($js$35)
           {var $js$36="unknown primitive:caml_string_equal";
            if($js$36)
             {var tags_path=path_name}
            else
             {var $js$37=Pathname["Operators"][1];
              var tags_path=$js$37(Pathname["pwd"],path_name)}
            var $js$38=Configuration["parse_file"];
            var $js$39=$js$38(dir,tags_path);
            0}
          else
           {}
          var $js$40=My_std["List"][30];
          var $js$41=$js$40(name,[0,"_oasis",0]);
          var $js$42=$js$41||name["length"]>0&&name[0]!=95;
          var $js$43=My_std["List"][30];
          var $js$44=$js$43(name,Options["exclude_dirs"][1]);
          var $js$45=!$js$44;
          var $js$46="unknown primitive:caml_string_notequal"&&$js$45;
          var $js$47=Pathname["is_directory"];
          var $js$48=$js$47(path_name);
          var $js$49="unknown primitive:caml_string_notequal"&&$js$48;
          var $js$50=!$js$49;
          var $js$51=Tools["tags_of_pathname"];
          var tags=$js$51(path_name);
          var $js$52=Tags["mem"];
          var $js$53=$js$52("include",tags);
          var $js$54=My_std["List"][30];
          var $js$55=$js$54(path_name,Options["include_dirs"][1]);
          var $js$56=$js$53||$js$55;
          if($js$56)
           {entry_include_dirs[1]=[0,path_name,entry_include_dirs[1]],0;
            var $js$57=1}
          else
           {var $js$58=Tags["mem"];
            var $js$59=$js$58("traverse",tags);
            var $js$60=My_std["List"][27];
            var $js$61=Pathname["is_prefix"];
            var $js$62=$js$61(path_name);
            var $js$63=$js$60($js$62,Options["include_dirs"][1]);
            var $js$64=My_std["List"][27];
            var $js$65=Pathname["is_prefix"];
            var $js$66=$js$65(path_name);
            var $js$67=$js$64($js$66,target_dirs);
            var $js$68=$js$63||$js$67;
            var $js$57=$js$59||$js$68}
          var $js$69=Pathname["normalize"];
          var $js$70=$js$69(Options["build_dir"][1]);
          var $js$71=Pathname["normalize"];
          var $js$72=Pathname["Operators"][1];
          var $js$73=$js$72(Pathname["pwd"],path_name);
          var $js$74=$js$71($js$73);
          var $js$75="unknown primitive:caml_string_notequal";
          var $js$76=$js$57&&$js$75;
          var $js$77=$js$50||$js$76;
          var $js$78=$js$46&&$js$77;
          return $js$42&&$js$78},
        $js$32);
    var $js$33=Hooks["call_hook"];
    $js$33(0);
    var $js$34=Slurp["map"];
    var
     hygiene_entry=
      $js$34
       (function(path,name,param$1)
         {var $js$35=Tools["tags_of_pathname"];
          var $js$36=Pathname["Operators"][1];
          var $js$37=$js$36(path,name);
          var tags=$js$35($js$37);
          var $js$38=Tags["mem"];
          var $js$39=$js$38("not_hygienic",tags);
          var $js$40=!$js$39;
          var $js$41=Tags["mem"];
          var $js$42=$js$41("precious",tags);
          var $js$43=!$js$42;
          return $js$40&&$js$43},
        entry);
    var $js$35=Slurp["force"];
    $js$35(hygiene_entry);
    var $js$36=Options["hygiene"][1]&&!first_run_for_plugin;
    if($js$36){var $js$37=Fda["inspect"];$js$37(hygiene_entry)}else{}
    var $js$38=Hooks["call_hook"];
    $js$38(1);
    var $js$39=My_std["List"][9];
    var $js$40=$js$39(entry_include_dirs[1]);
    var $js$41=[0,Pathname["current_dir_name"],$js$40];
    Options["include_dirs"][1]=$js$41,0;
    var $js$42=Log["dprintf"];
    $js$42
     (3,
      [0,
       [11,"include directories are:",[17,[0,"@ ",1,0],[15,0]]],
       "include directories are:@ %a"],
      My_std["print_string_list"],
      Options["include_dirs"][1]);
    Options["entry"][1]=[0,hygiene_entry],0;
    var $js$43=Hooks["call_hook"];
    $js$43(4);
    var $js$44=Ocaml_specific["init"];
    $js$44(0);
    var $js$45=Hooks["call_hook"];
    $js$45(5);
    "unknown primitive:caml_sys_chdir";
    var $js$46=Plugin["execute_plugin_if_needed"];
    $js$46(0);
    var $js$47=Param_tags["init"];
    $js$47(0);
    "unknown primitive:caml_sys_chdir";
    var $js$48=Options["show_documentation"][1];
    if($js$48){show_documentation(0);"unknown primitive:raise"}else{}
    var $js$49=Flags["get_used_tags"];
    var used_in_flags=$js$49(0);
    var $js$50=My_std["List"][19];
    var $js$51=Command["list_all_deps"];
    var $js$52=$js$51(0);
    var
     used_in_deps=
      $js$50
       (function(acc,param$1)
         {var $js$53=Tags["union"];return $js$53(acc,param$1[1])},
        Tags["empty"],
        $js$52);
    var $js$53=Tags["union"];
    var $js$54=Tags["union"];
    var $js$55=$js$54(used_in_flags,used_in_deps);
    var all_tags=$js$53(builtin_useful_tags,$js$55);
    var $js$56=Configuration["check_tags_usage"];
    $js$56(all_tags);
    var $js$57=Digest_cache["init"];
    $js$57(0);
    var $js$58=Sys["catch_break"];
    $js$58(1);
    show_tags(0);
    var $js$59=My_std["List"][16];
    var
     targets=
      $js$59
       (function(starget)
         {var $js$60=Resource["import"];
          var starget$1=$js$60(starget);
          var $js$61=Tools["path_and_context_of_string"];
          var target=$js$61(starget$1);
          var $js$62=Pathname["get_extension"];
          var ext=$js$62(starget$1);
          return [0,target,starget$1,ext]},
        Options["targets"][1]);
    try
     {var $js$60=My_std["List"][16];
      var
       targets$1=
        $js$60
         (function(param$1)
           {var starget=param$1[2];
            var $js$61=Shell["mkdir_p"];
            var $js$62=Pathname["dirname"];
            var $js$63=$js$62(starget);
            $js$61($js$63);
            var $js$64=Solver["solve_target"];
            var target=$js$64(starget,param$1[1]);
            return [0,target,param$1[3]]},
          targets);
      var $js$61=Command["dump_parallel_stats"];
      $js$61(0);
      var $js$62=Log["finish"];
      $js$62(0,0);
      var $js$63=Shell["chdir"];
      $js$63(Pathname["pwd"]);
      var
       call=
        function(spec)
         {var $js$64=My_std["sys_command"];
          var $js$65=Command["string_of_command_spec"];
          var $js$66=$js$65(spec);
          return $js$64($js$66)};
      var $js$64=My_std["List"][20];
      var
       cmds=
        $js$64
         (function(param$1,acc)
           {var $js$65=Pathname["Operators"][1];
            var cmd=$js$65(Options["build_dir"][1],param$1[1]);
            var
             link=
              function(x)
               {var $js$66=Options["make_links"][1];
                if($js$66)
                 {var
                   $js$67=
                    call
                     ([0,
                       [0,
                        [1,"ln"],
                        [0,
                         [1,"-sf"],
                         [0,[2,x],[0,[1,Pathname["current_dir_name"]],0]]]]]);
                  return 0}
                else
                 {return 0}};
            var $js$66=param$1[2];
            if($js$66=="byte")
             {var exit=24}
            else
             if($js$66=="html")
              {var $js$67=Pathname["dirname"];
               var $js$68=$js$67(cmd);
               link($js$68);
               return acc}
             else
              if($js$66=="native")
               {var exit=24}
              else
               if($js$66=="top"){var exit=24}else{var exit=25}
            switch(exit)
             {case 25:
               var $js$69=Options["program_to_execute"][1];
               if($js$69)
                {var $js$70=Format["eprintf"];
                 $js$70
                  ([0,
                    [11,
                     "Warning: Won't execute ",
                     [2,0,[11," whose extension is neither .byte nor .native",0]]],
                    "Warning: Won't execute %s whose extension is neither .byte nor .native"],
                   cmd)}
               else
                {}
               return acc;
              case 24:link(cmd);return [0,cmd,acc]
              }},
          targets$1,
          0);
      var $js$65=Options["program_to_execute"][1];
      if($js$65)
       {var $js$66=My_std["List"][9];
        var match$1=$js$66(cmds);
        var $js$67=match$1;
        if($js$67)
         {var cmd=match$1[1];
          var $js$68=match$1[2]!=0;
          if($js$68)
           {var $js$69=Log["dprintf"];
            $js$69
             (0,
              [0,
               [11,"Warning: Using -- only run the last target",0],
               "Warning: Using -- only run the last target"])}
          else
           {}
          var $js$70=Command["atomize"];
          var $js$71=$js$70(Options["program_args"][1]);
          var $js$72=[0,$js$71,0];
          var $js$73=[0,[2,cmd],$js$72];
          var cmd_spec=[0,$js$73];
          var $js$74=Log["dprintf"];
          $js$74
           (3,
            [0,
             [11,"Running the user command:",[17,[0,"@ ",1,0],[15,0]]],
             "Running the user command:@ %a"],
            Pathname["print"],
            cmd);
          var $js$75=call(cmd_spec);
          var $js$76=[0,My_std["Exit_with_code"],$js$75];
          throw $js$76}
        else
         {return "unknown primitive:raise"}}
      else
       {return 0}}
    catch(exn)
     {var $js$77=exn[1]=Ocaml_dependencies["Circular_dependencies"];
      if($js$77)
       {var $js$78=My_std["sbprintf"];
        var
         $js$79=
          $js$78
           ([0,
             [18,
              [1,[0,[11,"<2>",0],"<2>"]],
              [11,
               "Circular dependencies: ",
               [3,
                0,
                [11," already seen in",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]],
             "@[<2>Circular dependencies: %S already seen in@ %a@]@."],
            exn[3],
            Tools["pp_l"],
            exn[2]);
        var $js$80=[0,Exit_build_error,$js$79];
        throw $js$80}
      else
       {return "unknown primitive:reraise"}}};
var
 main=
  function(param)
   {var
     exit=
      function(rc)
       {var $js$1=Log["finish"];
        var $js$2=rc!=0;
        if($js$2){var $js$3=106380200}else{var $js$3=94326179}
        var $js$4=[0,$js$3];
        $js$1($js$4,0);
        var $js$5=Pervasives["exit"];
        return $js$5(rc)};
    try
     {return proceed(0)}
    catch(e)
     {var $js$1=Options["catch_errors"][1];
      if($js$1)
       {try
         {return "unknown primitive:reraise"}
        catch(e$1)
         {var $js$2=e$1=My_std["Exit_OK"];
          if($js$2)
           {return exit(Exit_codes["rc_ok"])}
          else
           {var $js$3=e$1=Fda["Exit_hygiene_failed"];
            if($js$3)
             {var $js$4=Log["eprintf"];
              $js$4
               ([0,
                 [11,"Exiting due to hygiene violations.",0],
                 "Exiting due to hygiene violations."]);
              return exit(Exit_codes["rc_hygiene"])}
            else
             {var $js$5=e$1[1]=My_std["Exit_usage"];
              if($js$5)
               {var $js$6=Log["eprintf"];
                $js$6
                 ([0,
                   [11,"Usage:",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                   "Usage:@ %s."],
                  e$1[2]);
                return exit(Exit_codes["rc_usage"])}
              else
               {var $js$7=e$1[1]=My_std["Exit_system_error"];
                if($js$7)
                 {var $js$8=Log["eprintf"];
                  $js$8
                   ([0,
                     [11,"System error:",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                     "System error:@ %s."],
                    e$1[2]);
                  return exit(Exit_codes["rc_system_error"])}
                else
                 {var $js$9=e$1[1]=My_std["Exit_with_code"];
                  if($js$9)
                   {return exit(e$1[2])}
                  else
                   {var $js$10=e$1=Exit_silently;
                    if($js$10)
                     {var $js$11=Log["finish"];
                      $js$11([0,-249890668],0);
                      var $js$12=Pervasives["exit"];
                      return $js$12(Exit_codes["rc_ok"])}
                    else
                     {var $js$13=e$1[1]=My_std["Exit_silently_with_code"];
                      if($js$13)
                       {var $js$14=Log["finish"];
                        $js$14([0,-249890668],0);
                        var $js$15=Pervasives["exit"];
                        return $js$15(e$1[2])}
                      else
                       {var $js$16=e$1[1]=Solver["Failed"];
                        if($js$16)
                         {var backtrace=e$1[2];
                          var $js$17=Log["raw_dprintf"];
                          $js$17
                           (-1,
                            [0,
                             [18,
                              [1,[0,[11,"<v0>",0],"<v0>"]],
                              [18,
                               [1,[0,[11,"<2>",0],"<2>"]],
                               [11,"Solver failed:",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]],
                             "@[<v0>@[<2>Solver failed:@ %a@]@."],
                            Report["print_backtrace_analyze"],
                            backtrace);
                          var $js$18=Log["raw_dprintf"];
                          $js$18
                           (1,
                            [0,
                             [18,
                              [1,[0,[11,"<v2>",0],"<v2>"]],
                              [11,"Backtrace:",[15,[17,0,[17,0,[17,4,0]]]]]],
                             "@[<v2>Backtrace:%a@]@]@."],
                            Report["print_backtrace"],
                            backtrace);
                          return exit(Exit_codes["rc_solver_failed"])}
                        else
                         {var $js$19=e$1[1]=Failure;
                          if($js$19)
                           {var $js$20=Log["eprintf"];
                            $js$20
                             ([0,
                               [11,"Failure:",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                               "Failure:@ %s."],
                              e$1[2]);
                            return exit(Exit_codes["rc_failure"])}
                          else
                           {var $js$21=e$1[1]=Solver["Circular"];
                            if($js$21)
                             {var $js$22=Log["eprintf"];
                              var $js$23=My_std["List"][1];
                              var $js$24=$js$23(Resource["print"]);
                              $js$22
                               ([0,
                                 [11,
                                  "Circular build detected",
                                  [17,
                                   [0,"@ ",1,0],
                                   [12,40,[15,[11," already seen in ",[15,[12,41,0]]]]]]],
                                 "Circular build detected@ (%a already seen in %a)"],
                                Resource["print"],
                                e$1[2],
                                $js$24,
                                e$1[3]);
                              return exit(Exit_codes["rc_circularity"])}
                            else
                             {var $js$25=e$1[1]=Invalid_argument;
                              if($js$25)
                               {var $js$26=Log["eprintf"];
                                $js$26
                                 ([0,
                                   [11,
                                    "INTERNAL ERROR: Invalid argument ",
                                    [2,
                                     0,
                                     [11,
                                      "\nThis is likely to be a bug, please report this to the ocamlbuild\ndevelopers.",
                                      0]]],
                                   "INTERNAL ERROR: Invalid argument %s\nThis is likely to be a bug, please report this to the ocamlbuild\ndevelopers."],
                                  e$1[2]);
                                return exit(Exit_codes["rc_invalid_argument"])}
                              else
                               {var $js$27=e$1[1]=Ocaml_utils["Ocamldep_error"];
                                if($js$27)
                                 {var $js$28=Log["eprintf"];
                                  $js$28
                                   ([0,[11,"Ocamldep error: ",[2,0,0]],"Ocamldep error: %s"],
                                    e$1[2]);
                                  return exit(Exit_codes["rc_ocamldep_error"])}
                                else
                                 {var $js$29=e$1[1]=Lexers["Error"];
                                  if($js$29)
                                   {var match=e$1[2];
                                    var $js$30=Log["eprintf"];
                                    $js$30
                                     ([0,
                                       [15,[11,"Lexing error: ",[2,0,[12,46,0]]]],
                                       "%aLexing error: %s."],
                                      Loc["print_loc"],
                                      match[2],
                                      match[1]);
                                    return exit(Exit_codes["rc_lexing_error"])}
                                  else
                                   {var $js$31=e$1[1]=Arg["Bad"];
                                    if($js$31)
                                     {var $js$32=Log["eprintf"];
                                      $js$32([0,[2,0,0],"%s"],e$1[2]);
                                      return exit(Exit_codes["rc_usage"])}
                                    else
                                     {var $js$33=e$1[1]=Exit_build_error;
                                      if($js$33)
                                       {var $js$34=Log["eprintf"];
                                        $js$34([0,[2,0,0],"%s"],e$1[2]);
                                        return exit(Exit_codes["rc_build_error"])}
                                      else
                                       {var $js$35=e$1[1]=Arg["Help"];
                                        if($js$35)
                                         {var $js$36=Log["eprintf"];
                                          $js$36([0,[2,0,0],"%s"],e$1[2]);
                                          return exit(Exit_codes["rc_ok"])}
                                        else
                                         {try
                                           {var $js$37=Log["eprintf"];
                                            $js$37([0,[15,0],"%a"],My_unix["report_error"],e$1);
                                            return exit(100)}
                                          catch(e$2)
                                           {var $js$38=Log["eprintf"];
                                            var $js$39=Printexc["to_string"];
                                            var $js$40=$js$39(e$2);
                                            $js$38
                                             ([0,
                                               [11,"Exception",[17,[0,"@ ",1,0],[2,0,[12,46,0]]]],
                                               "Exception@ %s."],
                                              $js$40);
                                            return exit(100)}}}}}}}}}}}}}}}}}}}
      else
       {return "unknown primitive:reraise"}}};
module["exports"]={"main":main};
