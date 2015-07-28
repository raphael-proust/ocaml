var Tools=require("Tools");
var Ocaml_utils=require("Ocaml_utils");
var Options=require("Options");
var Ocaml_compiler=require("Ocaml_compiler");
var Rule=require("Rule");
var Pathname=require("Pathname");
var Flags=require("Flags");
var Command=require("Command");
var My_std=require("My_std");
var Tags=require("Tags");
var
 add_suffix=
  function(s)
   {var $js=My_std["List"][16];
    return $js
            (function(x){var $js$1=Pathname["Operators"][2];return $js$1(x,s)})};
var
 ocamldep_command'=
  function(tags)
   {var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=$js$1(tags,"ocaml");
    var tags'=$js($js$2,"ocamldep");
    var $js$3=Ocaml_utils["ocaml_ppflags"];
    var $js$4=Tags["Operators"][1];
    var $js$5=$js$4(tags,"pp:dep");
    var $js$6=$js$3($js$5);
    var $js$7=[0,$js$6,[0,[1,"-modules"],0]];
    var $js$8=[0,[5,tags'],$js$7];
    var $js$9=[0,Options["ocamldep"][1],$js$8];
    return [0,$js$9]};
var
 menhir_ocamldep_command'=
  function(tags,menhir_spec,out)
   {var $js=Options["ocamlyacc"][1]=0;
    if($js){var menhir=[6,"MENHIR"]}else{var menhir=Options["ocamlyacc"][1]}
    var $js$1=ocamldep_command'(Tags["empty"]);
    var $js$2=[7,$js$1];
    var $js$3=[0,$js$2,[0,menhir_spec,[0,[4,">"],[0,[3,out],0]]]];
    var $js$4=[0,[1,"--ocamldep"],$js$3];
    var $js$5=[0,[1,"--raw-depend"],$js$4];
    var $js$6=[0,[5,tags],$js$5];
    var $js$7=[0,menhir,$js$6];
    var $js$8=[0,$js$7];
    return [1,$js$8]};
var
 menhir_ocamldep_command=
  function(arg,out,env,_build)
   {var arg$1=env(arg);
    var out$1=env(out);
    var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=Tools["tags_of_pathname"];
    var $js$3=$js$2(arg$1);
    var $js$4=$js$1($js$3,"ocaml");
    var tags=$js($js$4,"menhir_ocamldep");
    return menhir_ocamldep_command'(tags,[2,arg$1],out$1)};
var
 import_mlypack=
  function(build,mlypack)
   {var $js=Tools["tags_of_pathname"];
    var tags1=$js(mlypack);
    var $js$1=Ocaml_utils["string_list_of_file"];
    var files=$js$1(mlypack);
    var $js$2=Pathname["include_dirs_of"];
    var $js$3=Pathname["dirname"];
    var $js$4=$js$3(mlypack);
    var include_dirs=$js$2($js$4);
    var $js$5=My_std["List"][16];
    var
     files_alternatives=
      $js$5
       (function(module_name)
         {var $js$6=Ocaml_utils["expand_module"];
          return $js$6(include_dirs,module_name,[0,"mly",0])},
        files);
    var $js$6=My_std["List"][16];
    var $js$7=build(files_alternatives);
    var files$1=$js$6(My_std["Outcome"][3],$js$7);
    var $js$8=My_std["List"][20];
    var
     tags2=
      $js$8
       (function(file)
         {var $js$9=Tags["union"];
          var $js$10=Tools["tags_of_pathname"];
          var $js$11=$js$10(file);
          return $js$9($js$11)},
        files$1,
        tags1);
    return [0,tags2,files$1]};
var
 menhir_modular_ocamldep_command=
  function(mlypack,out,env,build)
   {var mlypack$1=env(mlypack);
    var out$1=env(out);
    var match=import_mlypack(build,mlypack$1);
    var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=$js$1(match[1],"ocaml");
    var tags=$js($js$2,"menhir_ocamldep");
    var $js$3=Pathname["remove_extensions"];
    var menhir_base=$js$3(mlypack$1);
    var $js$4=Command["atomize_paths"];
    var $js$5=$js$4(match[2]);
    var $js$6=[0,$js$5,0];
    var $js$7=[0,[2,menhir_base],$js$6];
    var $js$8=[0,[1,"--base"],$js$7];
    var menhir_spec=[0,$js$8];
    return menhir_ocamldep_command'(tags,menhir_spec,out$1)};
var
 menhir_modular=
  function(menhir_base,mlypack,mlypack_depends,env,build)
   {var $js=Options["ocamlyacc"][1]=0;
    if($js){var menhir=[6,"MENHIR"]}else{var menhir=Options["ocamlyacc"][1]}
    var menhir_base$1=env(menhir_base);
    var mlypack$1=env(mlypack);
    var mlypack_depends$1=env(mlypack_depends);
    var match=import_mlypack(build,mlypack$1);
    var tags=match[1];
    var $js$1=My_std["List"][14];
    var $js$2=build([0,[0,mlypack_depends$1,0],0]);
    var match$1=$js$1(My_std["Outcome"][2],$js$2);
    var $js$3=Ocaml_compiler["prepare_compile"];
    $js$3(build,mlypack$1);
    var $js$4=Tags["Operators"][1];
    var $js$5=Tags["Operators"][1];
    var $js$6=Tags["Operators"][1];
    var $js$7=$js$6(tags,"ocaml");
    var $js$8=$js$5($js$7,"byte");
    var ocamlc_tags=$js$4($js$8,"compile");
    var $js$9=Tags["Operators"][1];
    var $js$10=Tags["Operators"][1];
    var $js$11=Tags["Operators"][1];
    var $js$12=$js$11(tags,"ocaml");
    var $js$13=$js$10($js$12,"parser");
    var tags$1=$js$9($js$13,"menhir");
    var $js$14=Ocaml_utils["ocaml_include_flags"];
    var $js$15=$js$14(mlypack$1);
    var $js$16=[0,$js$15,0];
    var $js$17=[0,[5,ocamlc_tags],$js$16];
    var $js$18=[0,Options["ocamlc"][1],$js$17];
    var $js$19=[0,$js$18];
    var $js$20=[7,$js$19];
    var $js$21=Command["atomize_paths"];
    var $js$22=$js$21(match[2]);
    var $js$23=[0,$js$22,0];
    var $js$24=[0,[3,menhir_base$1],$js$23];
    var $js$25=[0,[1,"--base"],$js$24];
    var $js$26=[0,[5,tags$1],$js$25];
    var $js$27=[0,$js$20,$js$26];
    var $js$28=[0,[1,"--ocamlc"],$js$27];
    var $js$29=[0,menhir,$js$28];
    var $js$30=[0,$js$29];
    return [1,$js$30]};
var
 ocamldep_command=
  function(arg,out,env,_build)
   {var arg$1=env(arg);
    var out$1=env(out);
    var $js=Tools["tags_of_pathname"];
    var tags=$js(arg$1);
    var $js$1=ocamldep_command'(tags);
    var $js$2=[0,$js$1,[0,[2,arg$1],[0,[4,">"],[0,[3,out$1],0]]]];
    var $js$3=[0,$js$2];
    return [1,$js$3]};
var
 ocamlyacc=
  function(mly,env,_build)
   {var mly$1=env(mly);
    var $js=Options["ocamlyacc"][1]=0;
    if($js)
     {var ocamlyacc$1=[6,"OCAMLYACC"]}
    else
     {var ocamlyacc$1=Options["ocamlyacc"][1]}
    var $js$1=Tags["Operators"][1];
    var $js$2=Tags["Operators"][1];
    var $js$3=Tags["Operators"][1];
    var $js$4=Tools["tags_of_pathname"];
    var $js$5=$js$4(mly$1);
    var $js$6=$js$3($js$5,"ocaml");
    var $js$7=$js$2($js$6,"parser");
    var $js$8=$js$1($js$7,"ocamlyacc");
    var $js$9=[5,$js$8];
    var $js$10=[0,$js$9,[0,[3,mly$1],0]];
    var $js$11=[0,ocamlyacc$1,$js$10];
    var $js$12=[0,$js$11];
    return [1,$js$12]};
var
 ocamllex=
  function(mll,env,_build)
   {var mll$1=env(mll);
    var $js=Tags["Operators"][1];
    var $js$1=Tags["Operators"][1];
    var $js$2=Tags["Operators"][1];
    var $js$3=Tools["tags_of_pathname"];
    var $js$4=$js$3(mll$1);
    var $js$5=$js$2($js$4,"ocaml");
    var $js$6=$js$1($js$5,"lexer");
    var $js$7=$js($js$6,"ocamllex");
    var $js$8=[5,$js$7];
    var $js$9=[0,$js$8,[0,[3,mll$1],0]];
    var $js$10=[0,Options["ocamllex"][1],$js$9];
    var $js$11=[0,$js$10];
    return [1,$js$11]};
var
 infer_interface=
  function(ml,mli,env,build)
   {var ml$1=env(ml);
    var mli$1=env(mli);
    var $js=Tags["Operators"][1];
    var $js$1=Tools["tags_of_pathname"];
    var $js$2=$js$1(ml$1);
    var tags=$js($js$2,"ocaml");
    var $js$3=Ocaml_compiler["prepare_compile"];
    $js$3(build,ml$1);
    var $js$4=Ocaml_utils["ocaml_ppflags"];
    var $js$5=$js$4(tags);
    var $js$6=Ocaml_utils["ocaml_include_flags"];
    var $js$7=$js$6(ml$1);
    var $js$8=Tags["mem"];
    var $js$9=$js$8("thread",tags);
    if($js$9){var $js$10=[1,"-thread"]}else{var $js$10=0}
    var $js$11=Tags["Operators"][1];
    var $js$12=$js$11(tags,"infer_interface");
    var $js$13=[5,$js$12];
    var $js$14=[0,$js$13,[0,[2,ml$1],[0,[4,">"],[0,[3,mli$1],0]]]];
    var $js$15=[0,$js$10,$js$14];
    var $js$16=[0,[1,"-i"],$js$15];
    var $js$17=[0,$js$7,$js$16];
    var $js$18=[0,$js$5,$js$17];
    var $js$19=[0,Options["ocamlc"][1],$js$18];
    var $js$20=[0,$js$19];
    return [1,$js$20]};
var
 menhir=
  function(mly,env,build)
   {var mly$1=env(mly);
    var $js=Pathname["update_extension"];
    var ml=$js("ml",mly$1);
    var $js$1=Options["ocamlyacc"][1]=0;
    if($js$1)
     {var menhir$1=[6,"MENHIR"]}
    else
     {var menhir$1=Options["ocamlyacc"][1]}
    var $js$2=Tags["Operators"][1];
    var $js$3=Tags["Operators"][1];
    var $js$4=Tags["Operators"][1];
    var $js$5=Tools["tags_of_pathname"];
    var $js$6=$js$5(ml);
    var $js$7=$js$4($js$6,"ocaml");
    var $js$8=$js$3($js$7,"byte");
    var ocamlc_tags=$js$2($js$8,"compile");
    var $js$9=Tags["Operators"][1];
    var $js$10=Tags["Operators"][1];
    var $js$11=Tags["Operators"][1];
    var $js$12=Tools["tags_of_pathname"];
    var $js$13=$js$12(mly$1);
    var $js$14=$js$11($js$13,"ocaml");
    var $js$15=$js$10($js$14,"parser");
    var menhir_tags=$js$9($js$15,"menhir");
    var $js$16=Ocaml_compiler["prepare_compile"];
    $js$16(build,mly$1);
    var $js$17=Ocaml_utils["ocaml_include_flags"];
    var $js$18=$js$17(mly$1);
    var $js$19=[0,$js$18,0];
    var $js$20=[0,[5,ocamlc_tags],$js$19];
    var $js$21=[0,Options["ocamlc"][1],$js$20];
    var $js$22=[0,$js$21];
    var $js$23=[7,$js$22];
    var $js$24=[0,$js$23,[0,[5,menhir_tags],[0,[3,mly$1],0]]];
    var $js$25=[0,[1,"--ocamlc"],$js$24];
    var $js$26=[0,menhir$1,$js$25];
    var $js$27=[0,$js$26];
    return [1,$js$27]};
var
 ocamldoc_c=
  function(tags,arg,odoc)
   {var $js=Tags["Operators"][1];
    var tags$1=$js(tags,"ocaml");
    var $js$1=Tags["Operators"][1];
    var $js$2=$js$1(tags$1,"doc");
    var $js$3=[5,$js$2];
    var $js$4=Ocaml_utils["ocaml_ppflags"];
    var $js$5=Tags["Operators"][1];
    var $js$6=$js$5(tags$1,"pp:doc");
    var $js$7=$js$4($js$6);
    var $js$8=Ocaml_utils["ocaml_include_flags"];
    var $js$9=$js$8(arg);
    var $js$10=[0,$js$9,[0,[2,arg],0]];
    var $js$11=[0,$js$7,$js$10];
    var $js$12=[0,$js$3,$js$11];
    var $js$13=[0,[3,odoc],$js$12];
    var $js$14=[0,[1,"-dump"],$js$13];
    var $js$15=[0,Options["ocamldoc"][1],$js$14];
    var $js$16=[0,$js$15];
    return [1,$js$16]};
var
 ocamldoc_l_dir=
  function(tags,deps,_docout,docdir)
   {var $js=My_std["List"][16];
    var $js$1=$js(function(a){return [0,[0,[1,"-load"],[0,[2,a],0]]]},deps);
    var $js$2=[0,$js$1];
    var $js$3=Tags["Operators"][1];
    var $js$4=Tags["Operators"][1];
    var $js$5=$js$4(tags,"doc");
    var $js$6=$js$3($js$5,"docdir");
    var $js$7=[5,$js$6];
    var $js$8=[0,$js$7,[0,[1,"-d"],[0,[3,docdir],0]]];
    var $js$9=[0,$js$2,$js$8];
    var $js$10=[0,Options["ocamldoc"][1],$js$9];
    var $js$11=[0,$js$10];
    var $js$12=[1,$js$11];
    var $js$13=[0,$js$12,0];
    var
     $js$14=
      [0,[1,[0,[0,[1,"mkdir"],[0,[1,"-p"],[0,[3,docdir],0]]]]],$js$13];
    var $js$15=[0,[1,[0,[0,[1,"rm"],[0,[1,"-rf"],[0,[3,docdir],0]]]]],$js$14];
    return [0,$js$15]};
var
 ocamldoc_l_file=
  function(tags,deps,docout,_docdir)
   {var $js=Pathname["dirname"];
    var $js$1=$js(docout);
    var $js$2=[3,$js$1];
    var $js$3=[0,$js$2,0];
    var $js$4=[0,[1,"-p"],$js$3];
    var $js$5=[0,[1,"mkdir"],$js$4];
    var $js$6=[0,$js$5];
    var $js$7=[1,$js$6];
    var $js$8=My_std["List"][16];
    var $js$9=$js$8(function(a){return [0,[0,[1,"-load"],[0,[2,a],0]]]},deps);
    var $js$10=[0,$js$9];
    var $js$11=Tags["Operators"][1];
    var $js$12=Tags["Operators"][1];
    var $js$13=$js$12(tags,"doc");
    var $js$14=$js$11($js$13,"docfile");
    var $js$15=[5,$js$14];
    var $js$16=[0,$js$15,[0,[1,"-o"],[0,[3,docout],0]]];
    var $js$17=[0,$js$10,$js$16];
    var $js$18=[0,Options["ocamldoc"][1],$js$17];
    var $js$19=[0,$js$18];
    var $js$20=[1,$js$19];
    var $js$21=[0,$js$20,0];
    var $js$22=[0,$js$7,$js$21];
    var $js$23=[0,[1,[0,[0,[1,"rm"],[0,[1,"-rf"],[0,[3,docout],0]]]]],$js$22];
    return [0,$js$23]};
var
 document_ocaml_interf=
  function(mli,odoc,env,build)
   {var mli$1=env(mli);
    var odoc$1=env(odoc);
    var $js=Ocaml_compiler["prepare_compile"];
    $js(build,mli$1);
    var $js$1=Tags["Operators"][1];
    var $js$2=Tools["tags_of_pathname"];
    var $js$3=$js$2(mli$1);
    var $js$4=$js$1($js$3,"interf");
    return ocamldoc_c($js$4,mli$1,odoc$1)};
var
 document_ocaml_implem=
  function(ml,odoc,env,build)
   {var ml$1=env(ml);
    var odoc$1=env(odoc);
    var $js=Ocaml_compiler["prepare_compile"];
    $js(build,ml$1);
    var $js$1=Tags["Operators"][1];
    var $js$2=Tools["tags_of_pathname"];
    var $js$3=$js$2(ml$1);
    var $js$4=$js$1($js$3,"implem");
    return ocamldoc_c($js$4,ml$1,odoc$1)};
var
 document_ocaml_project=
  function(*opt*,odocl,docout,docdir,env,build)
   {var $js=*opt*;
    if($js){var ocamldoc=*opt*[1]}else{var ocamldoc=ocamldoc_l_file}
    var odocl$1=env(odocl);
    var docout$1=env(docout);
    var docdir$1=env(docdir);
    var $js$1=Ocaml_utils["string_list_of_file"];
    var contents=$js$1(odocl$1);
    var $js$2=Pathname["include_dirs_of"];
    var $js$3=Pathname["dirname"];
    var $js$4=$js$3(odocl$1);
    var include_dirs=$js$2($js$4);
    var $js$5=My_std["List"][16];
    var
     to_build=
      $js$5
       (function(module_name)
         {var $js$6=Ocaml_utils["expand_module"];
          return $js$6(include_dirs,module_name,[0,"odoc",0])},
        contents);
    var $js$6=My_std["List"][16];
    var $js$7=build(to_build);
    var module_paths=$js$6(My_std["Outcome"][3],$js$7);
    var $js$8=Tags["Operators"][1];
    var $js$9=Tags["union"];
    var $js$10=Tools["tags_of_pathname"];
    var $js$11=$js$10(docout$1);
    var $js$12=Tools["tags_of_pathname"];
    var $js$13=$js$12(docdir$1);
    var $js$14=$js$9($js$11,$js$13);
    var tags=$js$8($js$14,"ocaml");
    return ocamldoc(tags,module_paths,docout$1,docdir$1)};
var
 camlp4=
  function(*opt*,tag,i,o,env,build)
   {var $js=*opt*;
    if($js){var default=*opt*[1]}else{var default=[1,"camlp4o"]}
    var ml=env(i);
    var pp_ml=env(o);
    var $js$1=Tags["Operators"][1];
    var $js$2=Tags["Operators"][1];
    var $js$3=Tags["Operators"][1];
    var $js$4=Tools["tags_of_pathname"];
    var $js$5=$js$4(ml);
    var $js$6=$js$3($js$5,"ocaml");
    var $js$7=$js$2($js$6,"pp");
    var tags=$js$1($js$7,tag);
    var $js$8=Rule["build_deps_of_tags"];
    var match=$js$8(build,tags);
    var $js$9=Command["reduce"];
    var $js$10=Flags["of_tags"];
    var $js$11=$js$10(tags);
    var pp=$js$9($js$11);
    var $js$12="unknown primitive:isint";
    if($js$12){var pp$1=default}else{var pp$1=pp}
    return [1,
            [0,
             [0,
              pp$1,
              [0,
               [2,ml],
               [0,[1,"-printer"],[0,[1,"o"],[0,[1,"-o"],[0,[3,pp_ml],0]]]]]]]]};
module["exports"]=
{"ocamldoc_c":ocamldoc_c,
 "ocamldoc_l_dir":ocamldoc_l_dir,
 "ocamldoc_l_file":ocamldoc_l_file,
 "ocamldep_command":ocamldep_command,
 "menhir_ocamldep_command":menhir_ocamldep_command,
 "menhir_modular_ocamldep_command":menhir_modular_ocamldep_command,
 "menhir_modular":menhir_modular,
 "ocamlyacc":ocamlyacc,
 "ocamllex":ocamllex,
 "menhir":menhir,
 "infer_interface":infer_interface,
 "document_ocaml_interf":document_ocaml_interf,
 "document_ocaml_implem":document_ocaml_implem,
 "document_ocaml_project":document_ocaml_project,
 "camlp4":camlp4};
