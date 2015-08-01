var Ocamlbuild_pack=require("Ocamlbuild_pack");


var include=Ocamlbuild_pack["My_std"];

var opt_print=include[23];

var the=include[24];

var getenv=include[25];

var with_input_file=include[26];

var with_output_file=include[27];

var with_temp_file=include[28];

var read_file=include[29];

var copy_chan=include[30];

var copy_file=include[31];

var print_string_list=include[32];

var $unknown$star=include[33];

var $unknown=include[34];

var $unknown$great=include[35];

var $at$unknown$eq=include[36];

var memo=include[37];

var memo2=include[38];

var memo3=include[39];

var include$1=Ocamlbuild_pack["Pathname"][35];

var $unknown=include$1[1];

var $neg$unknown$neg=include$1[2];

var include$2=Ocamlbuild_pack["Tags"][29];

var $plus$plus=include$2[1];

var $neg$neg=include$2[2];

var $plus$plus$plus=include$2[3];

var $neg$neg$neg=include$2[4];

var include$3=Ocamlbuild_pack["Rule"][8];

var mv=include$3[1];

var cp=include$3[2];

var ln_f=include$3[4];

var ln_s=include$3[5];

var rm_f=include$3[6];

var chmod=include$3[7];

var cmp=include$3[8];

var rule=Ocamlbuild_pack["Rule"][6];

var clear_rules=Ocamlbuild_pack["Rule"][17];

var dep=Ocamlbuild_pack["Command"][19];

var pdep=Ocamlbuild_pack["Command"][20];

var copy_rule=Ocamlbuild_pack["Rule"][7];

var ocaml_lib=Ocamlbuild_pack["Ocaml_utils"][19];

var flag=Ocamlbuild_pack["Flags"][3](0);

var pflag=Ocamlbuild_pack["Flags"][4];

var mark_tag_used=Ocamlbuild_pack["Flags"][9];

var flag_and_dep=Ocamlbuild_pack["Ocaml_utils"][14];

var pflag_and_dep=Ocamlbuild_pack["Ocaml_utils"][15];

var non_dependency=Ocamlbuild_pack["Ocaml_utils"][5];

var use_lib=Ocamlbuild_pack["Ocaml_utils"][11];

var module_name_of_pathname=Ocamlbuild_pack["Ocaml_utils"][3];

var string_list_of_file=Ocamlbuild_pack["Ocaml_utils"][7];

var expand_module=Ocamlbuild_pack["Ocaml_utils"][6];

var tags_of_pathname=Ocamlbuild_pack["Tools"][1];

var hide_package_contents=Ocamlbuild_pack["Ocaml_compiler"][58];

var tag_file=Ocamlbuild_pack["Configuration"][5];

var tag_any=Ocamlbuild_pack["Configuration"][6];

var run_and_read=Ocamlbuild_pack["My_unix"][5];

var dispatch=Ocamlbuild_pack["Hooks"][1];

var $$let=Ocamlbuild_pack["My_std"][13];

var $$let$1=Ocamlbuild_pack["Options"];

var $$let$2=Ocamlbuild_pack["Ocaml_arch"];

[0,
 Ocamlbuild_pack["Pathname"],
 Ocamlbuild_pack["Tags"],
 Ocamlbuild_pack["Command"],
 Ocamlbuild_pack["My_std"][6],
 Ocamlbuild_pack["My_std"][11],
 Ocamlbuild_pack["My_std"][10],
 [0,
  $$let[1],
  $$let[2],
  $$let[3],
  $$let[4],
  $$let[5],
  $$let[6],
  $$let[7],
  $$let[8],
  $$let[9],
  $$let[10],
  $$let[11],
  $$let[12],
  $$let[13],
  $$let[14],
  $$let[15],
  $$let[16],
  $$let[17],
  $$let[18],
  $$let[19],
  $$let[20],
  $$let[21],
  $$let[22],
  $$let[23],
  $$let[24],
  $$let[25],
  $$let[28]],
 [0,
  $$let$1[1],
  $$let$1[2],
  $$let$1[3],
  $$let$1[4],
  $$let$1[5],
  $$let$1[6],
  $$let$1[7],
  $$let$1[8],
  $$let$1[9],
  $$let$1[10],
  $$let$1[11],
  $$let$1[12],
  $$let$1[13],
  $$let$1[14],
  $$let$1[15],
  $$let$1[16],
  $$let$1[17],
  $$let$1[18],
  $$let$1[19],
  $$let$1[20],
  $$let$1[21],
  $$let$1[22],
  $$let$1[23],
  $$let$1[24],
  $$let$1[25],
  $$let$1[26],
  $$let$1[27],
  $$let$1[28],
  $$let$1[29],
  $$let$1[30],
  $$let$1[31],
  $$let$1[32],
  $$let$1[33],
  $$let$1[34],
  $$let$1[35],
  $$let$1[36],
  $$let$1[37],
  $$let$1[38],
  $$let$1[39],
  $$let$1[40],
  $$let$1[41],
  $$let$1[42],
  $$let$1[43],
  $$let$1[44],
  $$let$1[45],
  $$let$1[46],
  $$let$1[47],
  $$let$1[48],
  $$let$1[49],
  $$let$1[50]],
 [0,
  $$let$2[1],
  $$let$2[2],
  $$let$2[3],
  $$let$2[4],
  $$let$2[5],
  $$let$2[6],
  $$let$2[7],
  $$let$2[8],
  $$let$2[9],
  $$let$2[10],
  $$let$2[11],
  $$let$2[12]],
 Ocamlbuild_pack["Findlib"],
 opt_print,
 the,
 getenv,
 with_input_file,
 with_output_file,
 with_temp_file,
 read_file,
 copy_chan,
 copy_file,
 print_string_list,
 $unknown$star,
 $unknown,
 $unknown$great,
 $at$unknown$eq,
 memo,
 memo2,
 memo3,
 $unknown,
 $neg$unknown$neg,
 $plus$plus,
 $neg$neg,
 $plus$plus$plus,
 $neg$neg$neg,
 rule,
 copy_rule,
 clear_rules,
 dep,
 pdep,
 flag,
 pflag,
 flag_and_dep,
 pflag_and_dep,
 mark_tag_used,
 non_dependency,
 use_lib,
 ocaml_lib,
 expand_module,
 string_list_of_file,
 module_name_of_pathname,
 mv,
 cp,
 ln_f,
 ln_s,
 rm_f,
 chmod,
 cmp,
 hide_package_contents,
 tag_file,
 tag_any,
 tags_of_pathname,
 run_and_read,
 dispatch];
module["exports"]=
{"unknown block:(field 21 (global Ocamlbuild_pack!))":
 unknown block:(field 21 (global Ocamlbuild_pack!)),
 "unknown block:(field 6 (global Ocamlbuild_pack!))":
 unknown block:(field 6 (global Ocamlbuild_pack!)),
 "unknown block:(field 16 (global Ocamlbuild_pack!))":
 unknown block:(field 16 (global Ocamlbuild_pack!)),
 "unknown block:(field 5 (field 4 (global Ocamlbuild_pack!)))":
 unknown block:(field 5 (field 4 (global Ocamlbuild_pack!))),
 "unknown block:(field 10 (field 4 (global Ocamlbuild_pack!)))":
 unknown block:(field 10 (field 4 (global Ocamlbuild_pack!))),
 "unknown block:(field 9 (field 4 (global Ocamlbuild_pack!)))":
 unknown block:(field 9 (field 4 (global Ocamlbuild_pack!))),
 "unknown block:(let (let/3914 =a (field 12 (field 4 (global Ocamlbuild_pack!))))\n  (makeblock 0 (field 0 let/3914) (field 1 let/3914) (field 2 let/3914)\n    (field 3 let/3914) (field 4 let/3914) (field 5 let/3914)\n    (field 6 let/3914) (field 7 let/3914) (field 8 let/3914)\n    (field 9 let/3914) (field 10 let/3914) (field 11 let/3914)\n    (field 12 let/3914) (field 13 let/3914) (field 14 let/3914)\n    (field 15 let/3914) (field 16 let/3914) (field 17 let/3914)\n    (field 18 let/3914) (field 19 let/3914) (field 20 let/3914)\n    (field 21 let/3914) (field 22 let/3914) (field 23 let/3914)\n    (field 24 let/3914) (field 27 let/3914)))":
 unknown block:(let (let/3914 =a (field 12 (field 4 (global Ocamlbuild_pack!))))
  (makeblock 0 (field 0 let/3914) (field 1 let/3914) (field 2 let/3914)
    (field 3 let/3914) (field 4 let/3914) (field 5 let/3914)
    (field 6 let/3914) (field 7 let/3914) (field 8 let/3914)
    (field 9 let/3914) (field 10 let/3914) (field 11 let/3914)
    (field 12 let/3914) (field 13 let/3914) (field 14 let/3914)
    (field 15 let/3914) (field 16 let/3914) (field 17 let/3914)
    (field 18 let/3914) (field 19 let/3914) (field 20 let/3914)
    (field 21 let/3914) (field 22 let/3914) (field 23 let/3914)
    (field 24 let/3914) (field 27 let/3914))),
 "unknown block:(let (let/3915 =a (field 20 (global Ocamlbuild_pack!)))\n  (makeblock 0 (field 0 let/3915) (field 1 let/3915) (field 2 let/3915)\n    (field 3 let/3915) (field 4 let/3915) (field 5 let/3915)\n    (field 6 let/3915) (field 7 let/3915) (field 8 let/3915)\n    (field 9 let/3915) (field 10 let/3915) (field 11 let/3915)\n    (field 12 let/3915) (field 13 let/3915) (field 14 let/3915)\n    (field 15 let/3915) (field 16 let/3915) (field 17 let/3915)\n    (field 18 let/3915) (field 19 let/3915) (field 20 let/3915)\n    (field 21 let/3915) (field 22 let/3915) (field 23 let/3915)\n    (field 24 let/3915) (field 25 let/3915) (field 26 let/3915)\n    (field 27 let/3915) (field 28 let/3915) (field 29 let/3915)\n    (field 30 let/3915) (field 31 let/3915) (field 32 let/3915)\n    (field 33 let/3915) (field 34 let/3915) (field 35 let/3915)\n    (field 36 let/3915) (field 37 let/3915) (field 38 let/3915)\n    (field 39 let/3915) (field 40 let/3915) (field 41 let/3915)\n    (field 42 let/3915) (field 43 let/3915) (field 44 let/3915)\n    (field 45 let/3915) (field 46 let/3915) (field 47 let/3915)\n    (field 48 let/3915) (field 49 let/3915)))":
 unknown block:(let (let/3915 =a (field 20 (global Ocamlbuild_pack!)))
  (makeblock 0 (field 0 let/3915) (field 1 let/3915) (field 2 let/3915)
    (field 3 let/3915) (field 4 let/3915) (field 5 let/3915)
    (field 6 let/3915) (field 7 let/3915) (field 8 let/3915)
    (field 9 let/3915) (field 10 let/3915) (field 11 let/3915)
    (field 12 let/3915) (field 13 let/3915) (field 14 let/3915)
    (field 15 let/3915) (field 16 let/3915) (field 17 let/3915)
    (field 18 let/3915) (field 19 let/3915) (field 20 let/3915)
    (field 21 let/3915) (field 22 let/3915) (field 23 let/3915)
    (field 24 let/3915) (field 25 let/3915) (field 26 let/3915)
    (field 27 let/3915) (field 28 let/3915) (field 29 let/3915)
    (field 30 let/3915) (field 31 let/3915) (field 32 let/3915)
    (field 33 let/3915) (field 34 let/3915) (field 35 let/3915)
    (field 36 let/3915) (field 37 let/3915) (field 38 let/3915)
    (field 39 let/3915) (field 40 let/3915) (field 41 let/3915)
    (field 42 let/3915) (field 43 let/3915) (field 44 let/3915)
    (field 45 let/3915) (field 46 let/3915) (field 47 let/3915)
    (field 48 let/3915) (field 49 let/3915))),
 "unknown block:(let (let/3916 =a (field 33 (global Ocamlbuild_pack!)))\n  (makeblock 0 (field 0 let/3916) (field 1 let/3916) (field 2 let/3916)\n    (field 3 let/3916) (field 4 let/3916) (field 5 let/3916)\n    (field 6 let/3916) (field 7 let/3916) (field 8 let/3916)\n    (field 9 let/3916) (field 10 let/3916) (field 11 let/3916)))":
 unknown block:(let (let/3916 =a (field 33 (global Ocamlbuild_pack!)))
  (makeblock 0 (field 0 let/3916) (field 1 let/3916) (field 2 let/3916)
    (field 3 let/3916) (field 4 let/3916) (field 5 let/3916)
    (field 6 let/3916) (field 7 let/3916) (field 8 let/3916)
    (field 9 let/3916) (field 10 let/3916) (field 11 let/3916))),
 "unknown block:(field 32 (global Ocamlbuild_pack!))":
 unknown block:(field 32 (global Ocamlbuild_pack!)),
 "opt_print":opt_print,
 "the":the,
 "getenv":getenv,
 "with_input_file":with_input_file,
 "with_output_file":with_output_file,
 "with_temp_file":with_temp_file,
 "read_file":read_file,
 "copy_chan":copy_chan,
 "copy_file":copy_file,
 "print_string_list":print_string_list,
 "!*":$unknown$star,
 "&":$unknown,
 "|>":$unknown$great,
 "@:=":$at$unknown$eq,
 "memo":memo,
 "memo2":memo2,
 "memo3":memo3,
 "/":$unknown,
 "-.-":$neg$unknown$neg,
 "++":$plus$plus,
 "--":$neg$neg,
 "+++":$plus$plus$plus,
 "---":$neg$neg$neg,
 "rule":rule,
 "copy_rule":copy_rule,
 "clear_rules":clear_rules,
 "dep":dep,
 "pdep":pdep,
 "flag":flag,
 "pflag":pflag,
 "flag_and_dep":flag_and_dep,
 "pflag_and_dep":pflag_and_dep,
 "mark_tag_used":mark_tag_used,
 "non_dependency":non_dependency,
 "use_lib":use_lib,
 "ocaml_lib":ocaml_lib,
 "expand_module":expand_module,
 "string_list_of_file":string_list_of_file,
 "module_name_of_pathname":module_name_of_pathname,
 "mv":mv,
 "cp":cp,
 "ln_f":ln_f,
 "ln_s":ln_s,
 "rm_f":rm_f,
 "chmod":chmod,
 "cmp":cmp,
 "hide_package_contents":hide_package_contents,
 "tag_file":tag_file,
 "tag_any":tag_any,
 "tags_of_pathname":tags_of_pathname,
 "run_and_read":run_and_read,
 "dispatch":dispatch};

