var Const=require("Const");
var Ocamlbuild_where=require("Ocamlbuild_where");
var Pervasives=require("Pervasives");
var Arg=require("Arg");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Format=require("Format");
var Command=require("Command");
var Shell=require("Shell");
var Filename=require("Filename");
var Lexing=require("Lexing");
var My_std=require("My_std");
var Log=require("Log");
var Array=require("Array");
var Ocamlbuild_config=require("Ocamlbuild_config");
var Sys=require("Sys");
var $js=Pervasives["^"];
var version=$js("ocamlbuild ",Sys["ocaml_version"]);
var entry=[0,0];
var project_root_dir=[0,0];
var $js$1=Filename["concat"];
var $js$2=$js$1("unknown primitive:caml_sys_getcwd","_build");
var build_dir=[0,$js$2];
var include_dirs=[0,0];
var exclude_dirs=[0,0];
var nothing_should_be_rebuilt=[0,0];
var sanitize=[0,1];
var sanitization_script=[0,"sanitize.sh"];
var hygiene=[0,1];
var ignore_auto=[0,1];
var plugin=[0,1];
var just_plugin=[0,0];
var native_plugin=[0,1];
var make_links=[0,1];
var nostdlib=[0,0];
var use_menhir=[0,0];
var catch_errors=[0,1];
var use_ocamlfind=[0,0];
var
 is_core_tool=
  function(param)
   {var $js$3=param;
    if($js$3=="menhir")
     {var exit=102}
    else
     if($js$3=="ocamlfind"){var exit=102}else{var exit=103}
    switch(exit){case 103:return 1;case 102:return 0}};
var
 find_tool=
  function(cmd)
   {var dir=Ocamlbuild_where["bindir"];
    var core_tool=is_core_tool(cmd);
    var $js$3=Pervasives["^"];
    var opt=$js$3(cmd,".opt");
    var $js$4=My_std["memo"];
    var search_in_path=$js$4(Command["search_in_path"]);
    var $js$5=My_std["sys_file_exists"];
    var $js$6=$js$5(dir[1]);
    if($js$6)
     {var $js$7=My_std["filename_concat"];
      var long=$js$7(dir[1],cmd);
      var $js$8=Pervasives["^"];
      var long_opt=$js$8(long,".opt");
      var
       choices=
        [0,
         function(param)
          {var $js$9=Command["file_or_exe_exists"];
           var $js$10=$js$9(long_opt);
           if($js$10){return [0,long_opt]}else{return 0}},
         [0,
          function(param)
           {var $js$9=Command["file_or_exe_exists"];
            var $js$10=$js$9(long);
            if($js$10){return [0,long]}else{return 0}},
          0]];
      var
       choices'=
        [0,
         function(param)
          {try
            {var match=search_in_path(opt);return [0,opt]}
           catch(exn)
            {var $js$9=exn=Not_found;
             if($js$9){return [0,cmd]}else{return "unknown primitive:reraise"}}},
         0];
      var $js$9=core_tool;
      if($js$9)
       {var $js$10=Pervasives["@"];var choices$1=$js$10(choices,choices')}
      else
       {var $js$11=Pervasives["@"];var choices$1=$js$11(choices',choices)}
      try
       {var $js$12=My_std["List"][32];
        var
         match=
          $js$12
           (function(choice)
             {var $js$13=choice(0);var $js$14=$js$13=0;return !$js$14},
            choices$1,
            0);
        var $js$13=match;
        if($js$13){return match[1]}else{return "unknown primitive:raise"}}
      catch(exn)
       {var $js$14=exn=Not_found;
        if($js$14)
         {var $js$15=Pervasives["failwith"];
          var $js$16=Printf["sprintf"];
          var
           $js$17=
            $js$16
             ([0,[11,"Can't find tool: ",[2,0,0]],"Can't find tool: %s"],cmd);
          return $js$15($js$17)}
        else
         {return "unknown primitive:reraise"}}}
    else
     {try
       {var match$1=search_in_path(opt);return opt}
      catch(exn$1)
       {var $js$18=exn$1=Not_found;
        if($js$18){return cmd}else{return "unknown primitive:reraise"}}}};
var $js$3=My_std["List"][14];
var
 mk_virtual_solvers=
  $js$3
   (function(cmd)
     {var solver=function(param){var $js$4=find_tool(cmd);return [1,$js$4]};
      var $js$4=Command["setup_virtual_command_solver"];
      var $js$5=My_std["String"][36];
      var $js$6=$js$5(cmd);
      return $js$4($js$6,solver)});
var
 match=
  mk_virtual_solvers
   ([0,
     "ocamlc",
     [0,
      "ocamlopt",
      [0,
       "ocamldep",
       [0,
        "ocamldoc",
        [0,
         "ocamlyacc",
         [0,
          "menhir",
          [0,"ocamllex",[0,"ocamlmklib",[0,"ocamlmktop",[0,"ocamlfind",0]]]]]]]]]]);
var ocamlc=[0,[6,"OCAMLC"]];
var ocamlopt=[0,[6,"OCAMLOPT"]];
var ocamldep=[0,[6,"OCAMLDEP"]];
var ocamldoc=[0,[6,"OCAMLDOC"]];
var ocamlyacc=[0,0];
var ocamllex=[0,[6,"OCAMLLEX"]];
var ocamlmklib=[0,[6,"OCAMLMKLIB"]];
var ocamlmktop=[0,[6,"OCAMLMKTOP"]];
var ocamlrun=[0,0];
var ocamlfind_cmd=[0,[6,"OCAMLFIND"]];
var ocamlfind=function(arg){return [0,[0,ocamlfind_cmd[1],[0,arg,0]]]};
var program_to_execute=[0,0];
var must_clean=[0,0];
var show_documentation=[0,0];
var recursive=[0,0];
var ext_lib=[0,Ocamlbuild_config["a"]];
var ext_obj=[0,Ocamlbuild_config["o"]];
var s=Ocamlbuild_config["ext_dll"];
var $js$4=My_std["String"][19];
var $js$5=$js$4(s,1,s["length"]-1);
var ext_dll=[0,$js$5];
var exe=[0,Ocamlbuild_config["exe"]];
var targets_internal=[0,0];
var ocaml_libs_internal=[0,0];
var ocaml_mods_internal=[0,0];
var ocaml_pkgs_internal=[0,0];
var ocaml_syntax=[0,0];
var ocaml_lflags_internal=[0,0];
var ocaml_cflags_internal=[0,0];
var ocaml_docflags_internal=[0,0];
var ocaml_ppflags_internal=[0,0];
var ocaml_yaccflags_internal=[0,0];
var ocaml_lexflags_internal=[0,0];
var program_args_internal=[0,0];
var ignore_list_internal=[0,0];
var tags_internal=[0,[0,[0,"quiet",0],0]];
var tag_lines_internal=[0,0];
var show_tags_internal=[0,0];
var plugin_tags_internal=[0,0];
var log_file_internal=[0,"_log"];
var my_include_dirs=[0,[0,[0,Filename["current_dir_name"],0],0]];
var my_exclude_dirs=[0,[0,[0,".svn",[0,"CVS",0]],0]];
var dummy="*invalid-dummy-string*";
var
 use_jocaml=
  function(param)
   {ocamlc[1]=[1,"jocamlc"],0;
    ocamlopt[1]=[1,"jocamlopt"],0;
    ocamldep[1]=[1,"jocamldep"],0;
    ocamlyacc[1]=[1,"jocamlyacc"],0;
    ocamllex[1]=[1,"jocamllex"],0;
    ocamlmklib[1]=[1,"jocamlmklib"],0;
    ocamlmktop[1]=[1,"jocamlmktop"],0;
    return ocamlrun[1]=[1,"jocamlrun"],0};
var
 add_to=
  function(rxs,x)
   {var $js$6=Lexers["comma_or_blank_sep_strings"];
    var $js$7=Lexing["from_string"];
    var $js$8=$js$7(x);
    var xs=$js$6(Const["Source"][2],$js$8);
    return rxs[1]=[0,xs,rxs[1]],0};
var
 add_to'=
  function(rxs,x)
   {var $js$6="unknown primitive:caml_string_notequal";
    if($js$6){return rxs[1]=[0,[0,x,0],rxs[1]],0}else{return 0}};
var
 set_cmd=
  function(rcmd){return [4,function(s$1){return rcmd[1]=[4,s$1],0}]};
var
 set_build_dir=
  function(s$1)
   {make_links[1]=0,0;
    var $js$6=Filename["is_relative"];
    var $js$7=$js$6(s$1);
    if($js$7)
     {var $js$8=Filename["concat"];
      var $js$9=$js$8("unknown primitive:caml_sys_getcwd",s$1);
      return build_dir[1]=$js$9,0}
    else
     {return build_dir[1]=s$1,0}};
var $js$6=Arg["align"];
var $js$7=add_to'(my_include_dirs);
var $js$8=[4,$js$7];
var $js$9=[0,"-I",$js$8,"<path> Add to include directories"];
var $js$10=add_to(my_include_dirs);
var $js$11=[4,$js$10];
var
 $js$12=
  [0,
   "-Is",
   $js$11,
   "<path,...> (same as above, but accepts a (comma or blank)-separated list)"];
var $js$13=add_to'(my_exclude_dirs);
var $js$14=[4,$js$13];
var $js$15=[0,"-X",$js$14,"<path> Directory to ignore"];
var $js$16=add_to(my_exclude_dirs);
var $js$17=[4,$js$16];
var $js$18=[0,"-Xs",$js$17,"<path,...> (idem)"];
var $js$19=add_to'(ocaml_libs_internal);
var $js$20=[4,$js$19];
var $js$21=[0,"-lib",$js$20,"<flag> Link to this ocaml library"];
var $js$22=add_to(ocaml_libs_internal);
var $js$23=[4,$js$22];
var $js$24=[0,"-libs",$js$23,"<flag,...> (idem)"];
var $js$25=add_to'(ocaml_mods_internal);
var $js$26=[4,$js$25];
var $js$27=[0,"-mod",$js$26,"<module> Link to this ocaml module"];
var $js$28=add_to(ocaml_mods_internal);
var $js$29=[4,$js$28];
var $js$30=[0,"-mods",$js$29,"<module,...> (idem)"];
var $js$31=add_to'(ocaml_pkgs_internal);
var $js$32=[4,$js$31];
var $js$33=[0,"-pkg",$js$32,"<package> Link to this ocaml findlib package"];
var $js$34=add_to(ocaml_pkgs_internal);
var $js$35=[4,$js$34];
var $js$36=[0,"-pkgs",$js$35,"<package,...> (idem)"];
var $js$37=add_to'(ocaml_pkgs_internal);
var $js$38=[4,$js$37];
var $js$39=[0,"-package",$js$38,"<package> (idem)"];
var $js$40=add_to'(ocaml_lflags_internal);
var $js$41=[4,$js$40];
var $js$42=[0,"-lflag",$js$41,"<flag> Add to ocamlc link flags"];
var $js$43=add_to(ocaml_lflags_internal);
var $js$44=[4,$js$43];
var $js$45=[0,"-lflags",$js$44,"<flag,...> (idem)"];
var $js$46=add_to'(ocaml_cflags_internal);
var $js$47=[4,$js$46];
var $js$48=[0,"-cflag",$js$47,"<flag> Add to ocamlc compile flags"];
var $js$49=add_to(ocaml_cflags_internal);
var $js$50=[4,$js$49];
var $js$51=[0,"-cflags",$js$50,"<flag,...> (idem)"];
var $js$52=add_to'(ocaml_docflags_internal);
var $js$53=[4,$js$52];
var $js$54=[0,"-docflag",$js$53,"<flag> Add to ocamldoc flags"];
var $js$55=add_to(ocaml_docflags_internal);
var $js$56=[4,$js$55];
var $js$57=[0,"-docflags",$js$56,"<flag,...> (idem)"];
var $js$58=add_to'(ocaml_yaccflags_internal);
var $js$59=[4,$js$58];
var $js$60=[0,"-yaccflag",$js$59,"<flag> Add to ocamlyacc flags"];
var $js$61=add_to(ocaml_yaccflags_internal);
var $js$62=[4,$js$61];
var $js$63=[0,"-yaccflags",$js$62,"<flag,...> (idem)"];
var $js$64=add_to'(ocaml_lexflags_internal);
var $js$65=[4,$js$64];
var $js$66=[0,"-lexflag",$js$65,"<flag> Add to ocamllex flags"];
var $js$67=add_to(ocaml_lexflags_internal);
var $js$68=[4,$js$67];
var $js$69=[0,"-lexflags",$js$68,"<flag,...> (idem)"];
var $js$70=add_to'(ocaml_ppflags_internal);
var $js$71=[4,$js$70];
var $js$72=[0,"-ppflag",$js$71,"<flag> Add to ocaml preprocessing flags"];
var $js$73=add_to(ocaml_ppflags_internal);
var $js$74=[4,$js$73];
var $js$75=[0,"-pp",$js$74,"<flag,...> (idem)"];
var $js$76=add_to'(tags_internal);
var $js$77=[4,$js$76];
var $js$78=[0,"-tag",$js$77,"<tag> Add to default tags"];
var $js$79=add_to(tags_internal);
var $js$80=[4,$js$79];
var $js$81=[0,"-tags",$js$80,"<tag,...> (idem)"];
var $js$82=add_to'(plugin_tags_internal);
var $js$83=[4,$js$82];
var
 $js$84=
  [0,
   "-plugin-tag",
   $js$83,
   "<tag> Use this tag when compiling the myocamlbuild.ml plugin"];
var $js$85=add_to(plugin_tags_internal);
var $js$86=[4,$js$85];
var $js$87=[0,"-plugin-tags",$js$86,"<tag,...> (idem)"];
var $js$88=add_to'(tag_lines_internal);
var $js$89=[4,$js$88];
var $js$90=[0,"-tag-line",$js$89,"<tag> Use this line of tags (as in _tags)"];
var $js$91=add_to'(show_tags_internal);
var $js$92=[4,$js$91];
var
 $js$93=
  [0,"-show-tags",$js$92,"<path> Show tags that applies on that pathname"];
var $js$94=add_to(ignore_list_internal);
var $js$95=[4,$js$94];
var
 $js$96=
  [0,"-ignore",$js$95,"<module,...> Don't try to build these modules"];
var $js$97=set_cmd(ocamlc);
var $js$98=[0,"-ocamlc",$js$97,"<command> Set the OCaml bytecode compiler"];
var $js$99=set_cmd(ocamlopt);
var $js$100=[0,"-ocamlopt",$js$99,"<command> Set the OCaml native compiler"];
var $js$101=set_cmd(ocamldep);
var $js$102=[0,"-ocamldep",$js$101,"<command> Set the OCaml dependency tool"];
var $js$103=set_cmd(ocamldoc);
var
 $js$104=
  [0,"-ocamldoc",$js$103,"<command> Set the OCaml documentation generator"];
var $js$105=set_cmd(ocamlyacc);
var $js$106=[0,"-ocamlyacc",$js$105,"<command> Set the ocamlyacc tool"];
var $js$107=set_cmd(ocamlyacc);
var
 $js$108=
  [0,
   "-menhir",
   $js$107,
   "<command> Set the menhir tool (use it after -use-menhir)"];
var $js$109=set_cmd(ocamllex);
var $js$110=[0,"-ocamllex",$js$109,"<command> Set the ocamllex tool"];
var $js$111=set_cmd(ocamlmklib);
var $js$112=[0,"-ocamlmklib",$js$111,"<command> Set the ocamlmklib tool"];
var $js$113=set_cmd(ocamlmktop);
var $js$114=[0,"-ocamlmktop",$js$113,"<command> Set the ocamlmktop tool"];
var $js$115=set_cmd(ocamlrun);
var $js$116=[0,"-ocamlrun",$js$115,"<command> Set the ocamlrun tool"];
var
 $js$117=
  [0,
   $js$116,
   [0,
    [0,
     "--",
     [12,
      function(x)
       {program_to_execute[1]=1,0;return add_to'(program_args_internal,x)}],
     " Stop argument processing, remaining arguments are given to the user program"],
    0]];
var $js$118=[0,$js$114,$js$117];
var $js$119=[0,$js$112,$js$118];
var $js$120=[0,$js$110,$js$119];
var $js$121=[0,$js$108,$js$120];
var $js$122=[0,$js$106,$js$121];
var $js$123=[0,$js$104,$js$122];
var $js$124=[0,$js$102,$js$123];
var $js$125=[0,$js$100,$js$124];
var $js$126=[0,$js$98,$js$125];
var
 $js$127=
  [0,
   [0,
    "-which",
    [4,
     function(cmd)
      {var $js$128=Pervasives["print_endline"];
       var $js$129=find_tool(cmd);
       $js$128($js$129);
       return "unknown primitive:raise"}],
    "<command> Display path to the tool command"],
   $js$126];
var
 $js$128=
  [0,
   [0,
    "-where",
    [0,
     function(param)
      {var $js$129=Pervasives["print_endline"];
       $js$129(Ocamlbuild_where["libdir"][1]);
       return "unknown primitive:raise"}],
    " Display the install library directory"],
   $js$127];
var
 $js$129=
  [0,
   [0,
    "-install-bin-dir",
    [5,Ocamlbuild_where["bindir"]],
    "<path> Set the install binary directory"],
   $js$128];
var
 $js$130=
  [0,
   [0,
    "-install-lib-dir",
    [5,Ocamlbuild_where["libdir"]],
    "<path> Set the install library directory"],
   $js$129];
var
 $js$131=
  [0,
   [0,
    "-build-dir",
    [4,set_build_dir],
    "<path> Set build directory (implies no-links)"],
   $js$130];
var
 $js$132=
  [0,
   [0,"-j",[7,Command["jobs"]],"<N> Allow N jobs at once (0 for unlimited)"],
   $js$131];
var
 $js$133=
  [0,[0,"-no-ocamlfind",[3,use_ocamlfind]," Don't use ocamlfind."],$js$132];
var
 $js$134=
  [0,
   [0,
    "-use-ocamlfind",
    [2,use_ocamlfind],
    " Use the 'ocamlfind' wrapper instead of using Findlib directly to determine command-line arguments. Use -no-ocamlfind to disable."],
   $js$133];
var
 $js$135=
  [0,
   [0,
    "-use-jocaml",
    [0,use_jocaml],
    " Use jocaml compilers instead of ocaml ones"],
   $js$134];
var
 $js$136=
  [0,
   [0,"-use-menhir",[2,use_menhir]," Use menhir instead of ocamlyacc"],
   $js$135];
var
 $js$137=
  [0,
   [0,
    "-classic-display",
    [2,Log["classic_display"]],
    " Display executed commands the old-fashioned way"],
   $js$136];
var
 $js$138=
  [0,
   [0,
    "-nothing-should-be-rebuilt",
    [2,nothing_should_be_rebuilt],
    " Fail if something needs to be rebuilt"],
   $js$137];
var
 $js$139=
  [0,
   [0,"-no-sanitize",[3,sanitize]," Do not generate sanitization script"],
   $js$138];
var
 $js$140=
  [0,
   [0,
    "-sanitization-script",
    [5,sanitization_script],
    " Change the file name for the generated sanitization script"],
   $js$139];
var
 $js$141=
  [0,
   [0,
    "-plugin-option",
    [4,function(prim){return 0}],
    " Use the option only when plugin is run"],
   $js$140];
var
 $js$142=
  [0,
   [0,
    "-byte-plugin",
    [3,native_plugin],
    " Don't use a native plugin but bytecode"],
   $js$141];
var
 $js$143=
  [0,[0,"-just-plugin",[2,just_plugin]," Just build myocamlbuild.ml"],$js$142];
var
 $js$144=
  [0,
   [0,
    "-dont-catch-errors",
    [3,catch_errors],
    " Don't catch and display exceptions (useful to display the call stack)"],
   $js$143];
var
 $js$145=
  [0,[0,"-no-stdlib",[2,nostdlib]," Don't ignore stdlib modules"],$js$144];
var
 $js$146=
  [0,[0,"-no-plugin",[3,plugin]," Don't build myocamlbuild.ml"],$js$145];
var
 $js$147=
  [0,[0,"-no-hygiene",[3,hygiene]," Don't apply sanity-check rules"],$js$146];
var
 $js$148=
  [0,
   [0,
    "-no-skip",
    [3,ignore_auto],
    " Don't skip modules that are requested by ocamldep but cannot be built"],
   $js$147];
var
 $js$149=
  [0,
   [0,
    "-no-links",
    [3,make_links],
    " Don't make links of produced final targets"],
   $js$148];
var $js$150=[0,$js$96,$js$149];
var $js$151=[0,$js$93,$js$150];
var $js$152=[0,$js$90,$js$151];
var $js$153=[0,$js$87,$js$152];
var $js$154=[0,$js$84,$js$153];
var $js$155=[0,$js$81,$js$154];
var $js$156=[0,$js$78,$js$155];
var $js$157=[0,$js$75,$js$156];
var $js$158=[0,$js$72,$js$157];
var $js$159=[0,$js$69,$js$158];
var $js$160=[0,$js$66,$js$159];
var $js$161=[0,$js$63,$js$160];
var $js$162=[0,$js$60,$js$161];
var $js$163=[0,$js$57,$js$162];
var $js$164=[0,$js$54,$js$163];
var $js$165=[0,$js$51,$js$164];
var $js$166=[0,$js$48,$js$165];
var $js$167=[0,$js$45,$js$166];
var $js$168=[0,$js$42,$js$167];
var
 $js$169=
  [0,
   [0,
    "-syntax",
    [4,function(syntax){return ocaml_syntax[1]=[0,syntax],0}],
    "<syntax> Specify syntax using ocamlfind"],
   $js$168];
var $js$170=[0,$js$39,$js$169];
var $js$171=[0,$js$36,$js$170];
var $js$172=[0,$js$33,$js$171];
var $js$173=[0,$js$30,$js$172];
var $js$174=[0,$js$27,$js$173];
var $js$175=[0,$js$24,$js$174];
var $js$176=[0,$js$21,$js$175];
var $js$177=[0,$js$18,$js$176];
var $js$178=[0,$js$15,$js$177];
var $js$179=[0,$js$12,$js$178];
var $js$180=[0,$js$9,$js$179];
var
 $js$181=
  [0,
   [0,"-r",[2,recursive]," Traverse directories by default (true: traverse)"],
   $js$180];
var
 $js$182=
  [0,
   [0,
    "-clean",
    [2,must_clean],
    " Remove build directory and other files, then exit"],
   $js$181];
var
 $js$183=
  [0,
   [0,
    "-no-log",
    [0,function(param){return log_file_internal[1]="",0}],
    " No log file"],
   $js$182];
var
 $js$184=
  [0,[0,"-log",[5,log_file_internal],"<file> Set log file"],$js$183];
var
 $js$185=
  [0,
   [0,"-documentation",[2,show_documentation]," Show rules and flags"],
   $js$184];
var
 $js$186=
  [0,
   [0,
    "-verbose",
    [6,
     function(i){Log["classic_display"][1]=1,0;return Log["level"][1]=i+2,0}],
    "<level> Set the verbosity level"],
   $js$185];
var
 $js$187=
  [0,
   [0,
    "-quiet",
    [0,function(param){return Log["level"][1]=0,0}],
    " Make as quiet as possible"],
   $js$186];
var
 $js$188=
  [0,
   [0,
    "-vnum",
    [0,
     function(param)
      {var $js$189=Pervasives["print_endline"];
       $js$189(Sys["ocaml_version"]);
       return "unknown primitive:raise"}],
    " Display the version number"],
   $js$187];
var
 $js$189=
  [0,
   [0,
    "-version",
    [0,
     function(param)
      {var $js$190=Pervasives["print_endline"];
       $js$190(version);
       return "unknown primitive:raise"}],
    " Display the version"],
   $js$188];
var $js$190=$js$6(0,$js$189);
var spec=[0,$js$190];
var
 add=
  function(x)
   {var $js$191=Pervasives["@"];
    var $js$192=$js$191(spec[1],[0,x,0]);
    return spec[1]=$js$192,0};
var targets=[0,0];
var ocaml_libs=[0,0];
var ocaml_mods=[0,0];
var ocaml_pkgs=[0,0];
var ocaml_lflags=[0,0];
var ocaml_cflags=[0,0];
var ocaml_ppflags=[0,0];
var ocaml_docflags=[0,0];
var ocaml_yaccflags=[0,0];
var ocaml_lexflags=[0,0];
var program_args=[0,0];
var ignore_list=[0,0];
var tags=[0,0];
var tag_lines=[0,0];
var show_tags=[0,0];
var plugin_tags=[0,0];
var
 init=
  function(param)
   {var anon_fun=add_to'(targets_internal);
    var $js$191=Format["sprintf"];
    var
     usage_msg=
      $js$191
       ([0,
         [11,"Usage ",[2,0,[11," [options] <target>",0]]],
         "Usage %s [options] <target>"],
        Sys["argv"][0]);
    var $js$192=Array["concat"];
    var argv'=$js$192([0,Sys["argv"],[0,[dummy],0]]);
    var $js$193=Arg["parse_argv"];
    $js$193(0,argv',spec[1],anon_fun,usage_msg);
    var $js$194=Shell["mkdir_p"];
    $js$194(build_dir[1]);
    project_root_dir[1]=[0,"unknown primitive:caml_sys_getcwd"],0;
    var log=log_file_internal[1];
    var $js$195="unknown primitive:caml_string_equal";
    if($js$195)
     {var $js$196=Log["init"];var match$1=$js$196(0)}
    else
     {var $js$197=Filename["is_implicit"];
      var $js$198=$js$197(log);
      var $js$199=!$js$198;
      if($js$199)
       {var $js$200=Pervasives["failwith"];
        var $js$201=Format["sprintf"];
        var
         $js$202=
          $js$201
           ([0,
             [11,
              "Bad log file name: the file name must be implicit (not ",
              [3,0,[12,41,0]]],
             "Bad log file name: the file name must be implicit (not %S)"],
            log);
        var match$1=$js$200($js$202)}
      else
       {var $js$203=My_std["filename_concat"];
        var log$1=$js$203(build_dir[1],log);
        var $js$204=Shell["mkdir_p"];
        var $js$205=Filename["dirname"];
        var $js$206=$js$205(log$1);
        $js$204($js$206);
        var $js$207=Shell["rm_f"];
        $js$207(log$1);
        var $js$208=Log["level"][1]>0;
        if($js$208){var log$2=[0,log$1]}else{var log$2=0}
        var $js$209=Log["init"];
        var match$1=$js$209(log$2)}}
    var $js$210=use_ocamlfind[1];
    if($js$210)
     {try
       {var $js$211=Command["search_in_path"];
        var $js$212=$js$211("ocamlfind");
        0}
      catch(exn)
       {var $js$213=exn=Not_found;
        if($js$213)
         {var $js$214=Pervasives["failwith"];
          $js$214("ocamlfind not found on path, but -no-ocamlfind not used")}
        else
         {"unknown primitive:reraise"}}
      var
       with_ocamlfind=
        function(param$1)
         {var command_ref=param$1[2];
          var match$2=command_ref[1];
          var $js$215=match$2;
          if(typeof $js$215=="number")
           {"unknown block:match/1727"}
          else
           {var $js$216=$js$215[0];
            if($js$216==4)
             {var $js$217=My_std["&"];
              var $js$218=$js$217(ocamlfind,[4,match$2[1]])}
            else
             {var exit=8}}
          switch(exit)
           {case 8:
             var $js$219=My_std["&"];
             var $js$218=$js$219(ocamlfind,[1,param$1[1]])
            }
          return command_ref[1]=$js$218,0};
      var $js$215=My_std["List"][14];
      $js$215
       (with_ocamlfind,
        [0,
         [0,"ocamlc",ocamlc],
         [0,
          [0,"ocamlopt",ocamlopt],
          [0,
           [0,"ocamldep",ocamldep],
           [0,
            [0,"ocamldoc",ocamldoc],
            [0,[0,"ocamlmklib",ocamlmklib],[0,[0,"ocamlmktop",ocamlmktop],0]]]]]])}
    else
     {}
    var
     reorder=
      function(x,y)
       {var $js$216=Pervasives["@"];
        var $js$217=My_std["List"][12];
        var $js$218=My_std["List"][9];
        var $js$219=$js$218(y[1]);
        var $js$220=$js$217($js$219);
        var $js$221=$js$216(x[1],$js$220);
        return x[1]=$js$221,0};
    reorder(targets,targets_internal);
    reorder(ocaml_libs,ocaml_libs_internal);
    reorder(ocaml_mods,ocaml_mods_internal);
    reorder(ocaml_pkgs,ocaml_pkgs_internal);
    reorder(ocaml_cflags,ocaml_cflags_internal);
    reorder(ocaml_lflags,ocaml_lflags_internal);
    reorder(ocaml_ppflags,ocaml_ppflags_internal);
    reorder(ocaml_docflags,ocaml_docflags_internal);
    reorder(ocaml_yaccflags,ocaml_yaccflags_internal);
    reorder(ocaml_lexflags,ocaml_lexflags_internal);
    reorder(program_args,program_args_internal);
    reorder(tags,tags_internal);
    reorder(tag_lines,tag_lines_internal);
    reorder(ignore_list,ignore_list_internal);
    reorder(show_tags,show_tags_internal);
    reorder(plugin_tags,plugin_tags_internal);
    var
     check_dir=
      function(dir)
       {var $js$216=Filename["is_implicit"];
        var $js$217=$js$216(dir);
        if($js$217)
         {var $js$218=My_std["sys_file_exists"];return $js$218(dir)}
        else
         {var $js$219=Pervasives["failwith"];
          var $js$220=Format["sprintf"];
          var
           $js$221=
            $js$220
             ([0,
               [11,
                "Included or excluded directories must be implicit (not ",
                [3,0,[12,41,0]]],
               "Included or excluded directories must be implicit (not %S)"],
              dir);
          return $js$219($js$221)}};
    var
     dir_reorder=
      function(my,dir)
       {var d=dir[1];
        reorder(dir,my);
        var $js$216=My_std["List"][33];
        var $js$217=Pervasives["@"];
        var $js$218=$js$217(dir[1],d);
        var $js$219=$js$216(check_dir,$js$218);
        return dir[1]=$js$219,0};
    dir_reorder(my_include_dirs,include_dirs);
    dir_reorder(my_exclude_dirs,exclude_dirs);
    var $js$216=My_std["List"][16];
    var $js$217=$js$216(My_std["String"][38],ignore_list[1]);
    return ignore_list[1]=$js$217,0};
var
 ocamlbuild_project_heuristic=
  function(param)
   {var match$1=project_root_dir[1];
    var $js$191=match$1;
    if($js$191)
     {var root_dir=match$1[1]}
    else
     {var root_dir="unknown primitive:caml_sys_getcwd"}
    var
     at_root=
      function(file)
       {var $js$192=Filename["concat"];return $js$192(root_dir,file)};
    var $js$192=at_root("_tags");
    var $js$193="unknown primitive:caml_sys_file_exists";
    var $js$194=at_root("myocamlbuild.ml");
    var $js$195="unknown primitive:caml_sys_file_exists";
    return $js$193||$js$195};
module["exports"]=
{"build_dir":build_dir,
 "include_dirs":include_dirs,
 "exclude_dirs":exclude_dirs,
 "nothing_should_be_rebuilt":nothing_should_be_rebuilt,
 "ocamlc":ocamlc,
 "ocamlopt":ocamlopt,
 "ocamldep":ocamldep,
 "ocamldoc":ocamldoc,
 "ocamlyacc":ocamlyacc,
 "ocamllex":ocamllex,
 "ocamlrun":ocamlrun,
 "ocamlmklib":ocamlmklib,
 "ocamlmktop":ocamlmktop,
 "hygiene":hygiene,
 "sanitize":sanitize,
 "sanitization_script":sanitization_script,
 "ignore_auto":ignore_auto,
 "plugin":plugin,
 "just_plugin":just_plugin,
 "native_plugin":native_plugin,
 "make_links":make_links,
 "nostdlib":nostdlib,
 "program_to_execute":program_to_execute,
 "must_clean":must_clean,
 "catch_errors":catch_errors,
 "use_menhir":use_menhir,
 "show_documentation":show_documentation,
 "recursive":recursive,
 "use_ocamlfind":use_ocamlfind,
 "targets":targets,
 "ocaml_libs":ocaml_libs,
 "ocaml_mods":ocaml_mods,
 "ocaml_pkgs":ocaml_pkgs,
 "ocaml_syntax":ocaml_syntax,
 "ocaml_cflags":ocaml_cflags,
 "ocaml_lflags":ocaml_lflags,
 "ocaml_ppflags":ocaml_ppflags,
 "ocaml_docflags":ocaml_docflags,
 "ocaml_yaccflags":ocaml_yaccflags,
 "ocaml_lexflags":ocaml_lexflags,
 "program_args":program_args,
 "ignore_list":ignore_list,
 "tags":tags,
 "tag_lines":tag_lines,
 "show_tags":show_tags,
 "ext_obj":ext_obj,
 "ext_lib":ext_lib,
 "ext_dll":ext_dll,
 "exe":exe,
 "add":add,
 "plugin_tags":plugin_tags,
 "ocamlbuild_project_heuristic":ocamlbuild_project_heuristic,
 "entry":entry,
 "init":init};
