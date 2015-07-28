var Options=require("Options");
var Const=require("Const");
var Ocamlbuild_where=require("Ocamlbuild_where");
var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Format=require("Format");
var Command=require("Command");
var Param_tags=require("Param_tags");
var Shell=require("Shell");
var My_std=require("My_std");
var Tags=require("Tags");
var My_unix=require("My_unix");
var Log=require("Log");
var Array=require("Array");
var Sys=require("Sys");
var plugin="myocamlbuild";
var $js=Pervasives["^"];
var plugin_file=$js(plugin,".ml");
var $js$1=Pervasives["^"];
var plugin_config_file=$js$1(plugin,"_config.ml");
var $js$2=Pervasives["^"];
var plugin_config_file_interface=$js$2(plugin,"_config.mli");
var
 we_need_a_plugin=
  function(param)
   {var $js$3=My_std["sys_file_exists"];
    var $js$4=$js$3(plugin_file);
    return Options["plugin"][1]&&$js$4};
var
 we_have_a_plugin=
  function(param)
   {var $js$3=My_std["sys_file_exists"];
    var $js$4=Pervasives["^"];
    var $js$5=Pathname["Operators"][1];
    var $js$6=$js$5(Options["build_dir"][1],plugin);
    var $js$7=$js$4($js$6,Options["exe"][1]);
    return $js$3($js$7)};
var
 we_have_a_config_file=
  function(param)
   {var $js$3=My_std["sys_file_exists"];return $js$3(plugin_config_file)};
var
 we_have_a_config_file_interface=
  function(param)
   {var $js$3=My_std["sys_file_exists"];
    return $js$3(plugin_config_file_interface)};
var
 Make=
  function(U)
   {var we_need_a_plugin$1=we_need_a_plugin(0);
    var we_have_a_plugin$1=we_have_a_plugin(0);
    var we_have_a_config_file$1=we_have_a_config_file(0);
    var we_have_a_config_file_interface$1=we_have_a_config_file_interface(0);
    var
     up_to_date_or_copy=
      function(fn)
       {var $js$3=Pathname["Operators"][1];
        var fn'=$js$3(Options["build_dir"][1],fn);
        var $js$4=Pathname["exists"];
        var $js$5=$js$4(fn);
        var $js$6=Pathname["exists"];
        var $js$7=$js$6(fn');
        var $js$8=Pathname["same_contents"];
        var $js$9=$js$8(fn,fn');
        var $js$10=$js$7&&$js$9;
        var $js$11=Shell["cp"];
        $js$11(fn,fn');
        var $js$12=0;
        var $js$13=$js$10||$js$12;
        return $js$5&&$js$13};
    var
     rebuild_plugin_if_needed=
      function(param)
       {var a=up_to_date_or_copy(plugin_file);
        var $js$3=up_to_date_or_copy(plugin_config_file);
        var b=!we_have_a_config_file$1||$js$3;
        var $js$4=up_to_date_or_copy(plugin_config_file_interface);
        var c=!we_have_a_config_file_interface$1||$js$4;
        var $js$5=a&&b&&c&&we_have_a_plugin$1;
        if($js$5)
         {return 0}
        else
         {var $js$6=My_std["sys_file_exists"];
          var $js$7=Pathname["Operators"][1];
          var $js$8=$js$7(Ocamlbuild_where["libdir"][1],"ocamlbuildlib.cmxa");
          var $js$9=$js$6($js$8);
          var $js$10=!$js$9;
          var $js$11=Options["native_plugin"][1]&&$js$10;
          if($js$11)
           {Options["native_plugin"][1]=0,0;
            var $js$12=Log["eprintf"];
            $js$12
             ([0,
               [11,"Warning: Won't be able to compile a native plugin",0],
               "Warning: Won't be able to compile a native plugin"])}
          else
           {}
          var $js$13=we_have_a_config_file$1;
          if($js$13)
           {var $js$14=we_have_a_config_file_interface$1;
            if($js$14)
             {var
               plugin_config=
                [0,
                 [0,
                  [2,plugin_config_file_interface],
                  [0,[2,plugin_config_file],0]]]}
            else
             {var plugin_config=[2,plugin_config_file]}}
          else
           {var plugin_config=0}
          var $js$15=Options["native_plugin"][1];
          if($js$15)
           {var match=[0,"cmxa","cmx",Options["ocamlopt"][1],"native"]}
          else
           {var match=[0,"cma","cmo",Options["ocamlc"][1],"byte"]}
          var cmo=match[2];
          var cma=match[1];
          var $js$16=My_std["!*"];
          var $js$17=$js$16(My_unix["is_degraded"]);
          var use_light_mode=!Options["native_plugin"][1]&&$js$17;
          var
           use_ocamlfind_pkgs=
            Options["use_ocamlfind"][1]&&Options["plugin_tags"][1]!=0;
          var $js$18=use_ocamlfind_pkgs;
          if($js$18)
           {var unix_lib=[0,251810662,"unix"]}
          else
           {var $js$19=use_light_mode;
            if($js$19)
             {var unix_lib=481346541}
            else
             {var unix_lib=[0,3802917,"unix"]}}
          var $js$20=use_ocamlfind_pkgs;
          if($js$20)
           {var ocamlbuild_lib=[0,251810662,"ocamlbuild"]}
          else
           {var $js$21=use_light_mode;
            if($js$21)
             {var ocamlbuild_lib=[0,945409809,"ocamlbuildlightlib"]}
            else
             {var ocamlbuild_lib=[0,945409809,"ocamlbuildlib"]}}
          var $js$22=use_light_mode;
          if($js$22)
           {var ocamlbuild_module=[0,945460878,"ocamlbuildlight"]}
          else
           {var ocamlbuild_module=[0,945460878,"ocamlbuild"]}
          var dir=Ocamlbuild_where["libdir"][1];
          var $js$23=Pathname["is_implicit"];
          var $js$24=$js$23(dir);
          if($js$24)
           {var $js$25=Pathname["Operators"][1];
            var dir$1=$js$25(Pathname["pwd"],dir)}
          else
           {var dir$1=dir}
          var
           in_dir=
            function(file)
             {var $js$26=Pathname["Operators"][1];
              var path=$js$26(dir$1,file);
              var $js$27=My_std["sys_file_exists"];
              var $js$28=$js$27(path);
              var $js$29=!$js$28;
              if($js$29)
               {var $js$30=Pervasives["failwith"];
                var $js$31=Format["sprintf"];
                var
                 $js$32=
                  $js$31
                   ([0,
                     [11,
                      "Cannot find ",
                      [3,0,[11," in ocamlbuild -where directory",0]]],
                     "Cannot find %S in ocamlbuild -where directory"],
                    file);
                $js$30($js$32)}
              else
               {}
              return path};
          var
           spec=
            function(param$1)
             {var $js$26="unknown primitive:isint";
              if($js$26)
               {return 0}
              else
               {var variant=param$1[1];
                var $js$27=variant>=945409809;
                if($js$27)
                 {var $js$28=variant>=945460878;
                  if($js$28)
                   {var $js$29=Pathname["Operators"][2];
                    var $js$30=$js$29(param$1[2],cmo);
                    var $js$31=in_dir($js$30);
                    return [2,$js$31]}
                  else
                   {var $js$32=Pathname["Operators"][2];
                    var $js$33=$js$32(param$1[2],cma);
                    var $js$34=in_dir($js$33);
                    var $js$35=[2,$js$34];
                    var $js$36=[0,$js$35,0];
                    var $js$37=[0,[1,dir$1],$js$36];
                    var $js$38=[0,[1,"-I"],$js$37];
                    return [0,$js$38]}}
                else
                 {var $js$39=variant>=251810662;
                  if($js$39)
                   {return [0,[0,[1,"-package"],[0,[1,param$1[2]],0]]]}
                  else
                   {var $js$40=Pathname["Operators"][2];
                    var $js$41=$js$40(param$1[2],cma);
                    return [2,$js$41]}}}};
          var $js$26=spec(unix_lib);
          var $js$27=spec(ocamlbuild_lib);
          var $js$28=spec(ocamlbuild_module);
          var match$1=[0,$js$26,$js$27,$js$28];
          var $js$29=Tags["Operators"][1];
          var $js$30=Tags["Operators"][1];
          var $js$31=Tags["Operators"][1];
          var $js$32=Tags["Operators"][1];
          var $js$33=Tags["of_list"];
          var $js$34=$js$33(Options["plugin_tags"][1]);
          var $js$35=$js$32($js$34,"ocaml");
          var $js$36=$js$31($js$35,"program");
          var $js$37=$js$30($js$36,"link");
          var plugin_tags=$js$29($js$37,match[4]);
          var $js$38=Param_tags["partial_init"];
          $js$38(0,Const["Source"][9],plugin_tags);
          var $js$39=Pervasives["^"];
          var $js$40=$js$39(plugin,Options["exe"][1]);
          var $js$41=[3,$js$40];
          var $js$42=[0,$js$41,0];
          var $js$43=[0,[1,"-o"],$js$42];
          var $js$44=[0,match$1[3],$js$43];
          var $js$45=[0,[2,plugin_file],$js$44];
          var $js$46=[0,plugin_config,$js$45];
          var $js$47=[0,[5,plugin_tags],$js$46];
          var $js$48=[0,match$1[2],$js$47];
          var $js$49=[0,match$1[1],$js$48];
          var $js$50=[0,match[3],$js$49];
          var $js$51=[0,$js$50];
          var cmd=[1,$js$51];
          var $js$52=Shell["chdir"];
          $js$52(Options["build_dir"][1]);
          var $js$53=Shell["rm_f"];
          var $js$54=Pervasives["^"];
          var $js$55=$js$54(plugin,Options["exe"][1]);
          $js$53($js$55);
          var $js$56=Command["execute"];
          $js$56(0,0,cmd);
          var $js$57=Options["just_plugin"][1];
          if($js$57)
           {var $js$58=Log["finish"];
            $js$58(0,0);
            return "unknown primitive:raise"}
          else
           {return 0}}};
    var
     execute_plugin_if_needed=
      function(param)
       {var $js$3=we_need_a_plugin$1;
        if($js$3)
         {rebuild_plugin_if_needed(0);
          var $js$4=Shell["chdir"];
          $js$4(Pathname["pwd"]);
          var $js$5=Options["native_plugin"][1];
          if($js$5){var runner=0}else{var runner=Options["ocamlrun"][1]}
          var $js$6=My_std["List"][7];
          var $js$7=Array["to_list"];
          var $js$8=$js$7(Sys["argv"]);
          var argv=$js$6($js$8);
          var $js$9=My_std["List"][33];
          var
           passed_argv=
            $js$9
             (function(s){return "unknown primitive:caml_string_notequal"},
              argv);
          var $js$10=Pervasives["^"];
          var $js$11=Pathname["Operators"][1];
          var $js$12=$js$11(Options["build_dir"][1],plugin);
          var $js$13=$js$10($js$12,Options["exe"][1]);
          var $js$14=[2,$js$13];
          var $js$15=Command["atomize"];
          var $js$16=$js$15(passed_argv);
          var $js$17=[0,$js$16,0];
          var $js$18=[0,[1,"-no-plugin"],$js$17];
          var $js$19=[0,$js$14,$js$18];
          var $js$20=[0,runner,$js$19];
          var spec=[0,$js$20];
          var $js$21=Log["finish"];
          $js$21(0,0);
          var $js$22=My_std["sys_command"];
          var $js$23=Command["string_of_command_spec"];
          var $js$24=$js$23(spec);
          var rc=$js$22($js$24);
          return "unknown primitive:raise"}
        else
         {var $js$25=My_std["sys_file_exists"];
          var $js$26=$js$25(plugin_file);
          var $js$27=!$js$26;
          var $js$28=$js$27&&Options["plugin_tags"][1]!=0;
          if($js$28)
           {var $js$29=Log["eprintf"];
            return $js$29
                    ([0,
                      [11,
                       "Warning: option -plugin-tag(s) has no effect in absence of plugin file ",
                       [3,0,0]],
                      "Warning: option -plugin-tag(s) has no effect in absence of plugin file %S"],
                     plugin_file)}
          else
           {return 0}}};
    return [0,
            we_need_a_plugin$1,
            we_have_a_plugin$1,
            we_have_a_config_file$1,
            we_have_a_config_file_interface$1,
            up_to_date_or_copy,
            rebuild_plugin_if_needed,
            execute_plugin_if_needed]};
var
 execute_plugin_if_needed=
  function(param){var P=Make([0]);var $js$3=P[7];return $js$3(0)};
module["exports"]=
{"execute_plugin_if_needed":execute_plugin_if_needed,
 "we_need_a_plugin":we_need_a_plugin};
