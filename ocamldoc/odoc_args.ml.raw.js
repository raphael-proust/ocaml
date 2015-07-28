var String=require("String");
var Odoc_global=require("Odoc_global");
var Odoc_html=require("Odoc_html");
var Odoc_latex=require("Odoc_latex");
var Odoc_man=require("Odoc_man");
var Main_args=require("Main_args");
var Warnings=require("Warnings");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_types=require("Odoc_types");
var Arg=require("Arg");
var Odoc_dot=require("Odoc_dot");
var Printf=require("Printf");
var Clflags=require("Clflags");
var Odoc_texi=require("Odoc_texi");
var Misc=require("Misc");
var Filename=require("Filename");
var Odoc_config=require("Odoc_config");
var Compenv=require("Compenv");
var Str=require("Str");
var Location=require("Location");
var Config=require("Config");
var Odoc_gen=require("Odoc_gen");
var Odoc_messages=require("Odoc_messages");
var current_generator=[0,0];
var
 get_html_generator=
  function(param)
   {var match=current_generator[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var $js$1=match$1;
      if($js$1==0)
       {return match$1[1]}
      else
       {var $js$2=Pervasives["failwith"];
        var $js$3=Odoc_messages["current_generator_is_not"];
        var $js$4=$js$3("html");
        return $js$2($js$4)}}
    else
     {return Odoc_html["Generator"]}};
var
 get_latex_generator=
  function(param)
   {var match=current_generator[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var $js$1=match$1;
      if($js$1==1)
       {return match$1[1]}
      else
       {var $js$2=Pervasives["failwith"];
        var $js$3=Odoc_messages["current_generator_is_not"];
        var $js$4=$js$3("latex");
        return $js$2($js$4)}}
    else
     {return Odoc_latex["Generator"]}};
var
 get_texi_generator=
  function(param)
   {var match=current_generator[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var $js$1=match$1;
      if($js$1==2)
       {return match$1[1]}
      else
       {var $js$2=Pervasives["failwith"];
        var $js$3=Odoc_messages["current_generator_is_not"];
        var $js$4=$js$3("texi");
        return $js$2($js$4)}}
    else
     {return Odoc_texi["Generator"]}};
var
 get_man_generator=
  function(param)
   {var match=current_generator[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var $js$1=match$1;
      if($js$1==3)
       {return match$1[1]}
      else
       {var $js$2=Pervasives["failwith"];
        var $js$3=Odoc_messages["current_generator_is_not"];
        var $js$4=$js$3("man");
        return $js$2($js$4)}}
    else
     {return Odoc_man["Generator"]}};
var
 get_dot_generator=
  function(param)
   {var match=current_generator[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var $js$1=match$1;
      if($js$1==4)
       {return match$1[1]}
      else
       {var $js$2=Pervasives["failwith"];
        var $js$3=Odoc_messages["current_generator_is_not"];
        var $js$4=$js$3("dot");
        return $js$2($js$4)}}
    else
     {return Odoc_dot["Generator"]}};
var
 get_base_generator=
  function(param)
   {var match=current_generator[1];
    var $js=match;
    if($js)
     {var match$1=match[1];
      var $js$1=match$1;
      if($js$1==5)
       {return match$1[1]}
      else
       {var $js$2=Pervasives["failwith"];
        var $js$3=Odoc_messages["current_generator_is_not"];
        var $js$4=$js$3("base");
        return $js$2($js$4)}}
    else
     {return Odoc_gen["Base_generator"]}};
var
 extend_html_generator=
  function(f)
   {var current=get_html_generator(0);
    var M=f(current);
    return current_generator[1]=[0,[0,M]],0};
var
 extend_latex_generator=
  function(f)
   {var current=get_latex_generator(0);
    var M=f(current);
    return current_generator[1]=[0,[1,M]],0};
var
 extend_texi_generator=
  function(f)
   {var current=get_texi_generator(0);
    var M=f(current);
    return current_generator[1]=[0,[2,M]],0};
var
 extend_man_generator=
  function(f)
   {var current=get_man_generator(0);
    var M=f(current);
    return current_generator[1]=[0,[3,M]],0};
var
 extend_dot_generator=
  function(f)
   {var current=get_dot_generator(0);
    var M=f(current);
    return current_generator[1]=[0,[4,M]],0};
var
 extend_base_generator=
  function(f)
   {var current=get_base_generator(0);
    var M=f(current);
    return current_generator[1]=[0,[5,M]],0};
var
 analyse_option_string=
  function(l,s)
   {var $js=List["fold_left"];
    return $js
            (function(acc,param)
              {var $js$1=String["contains"];
               var $js$2=$js$1(s,param[1][1]);
               if($js$2)
                {var $js$3=Pervasives["@"];return $js$3(acc,param[2])}
               else
                {return acc}},
             0,
             l)};
var
 analyse_merge_options=
  function(s)
   {var
     l=
      [0,
       [0,Odoc_messages["merge_description"],[0,0,0]],
       [0,
        [0,Odoc_messages["merge_author"],[0,1,0]],
        [0,
         [0,Odoc_messages["merge_version"],[0,2,0]],
         [0,
          [0,Odoc_messages["merge_see"],[0,3,0]],
          [0,
           [0,Odoc_messages["merge_since"],[0,4,0]],
           [0,
            [0,Odoc_messages["merge_before"],[0,5,0]],
            [0,
             [0,Odoc_messages["merge_deprecated"],[0,6,0]],
             [0,
              [0,Odoc_messages["merge_param"],[0,7,0]],
              [0,
               [0,Odoc_messages["merge_raised_exception"],[0,8,0]],
               [0,
                [0,Odoc_messages["merge_return_value"],[0,9,0]],
                [0,
                 [0,Odoc_messages["merge_custom"],[0,10,0]],
                 [0,
                  [0,
                   Odoc_messages["merge_all"],
                   Odoc_types["all_merge_options"]],
                  0]]]]]]]]]]]];
    return analyse_option_string(l,s)};
var
 f_latex_title=
  function(s)
   {try
     {var $js=String["index"];
      var pos=$js(s,44);
      var $js$1=String["sub"];
      var $js$2=$js$1(s,0,pos);
      var n="unknown primitive:caml_int_of_string";
      var len=s["length"];
      var $js$3=String["sub"];
      var command=$js$3(s,pos+1,len-pos-1);
      var $js$4=List["remove_assoc"];
      var $js$5=$js$4(n,Odoc_latex["latex_titles"][1]);
      Odoc_latex["latex_titles"][1]=$js$5,0;
      return Odoc_latex["latex_titles"][1]=
             [0,[0,n,command],Odoc_latex["latex_titles"][1]],
             0}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6)
       {var exit=66}
      else
       {var $js$7=exn[1]=Invalid_argument;
        if($js$7){var exit=66}else{return "unknown primitive:reraise"}}
      switch(exit)
       {case 66:
         Odoc_global["errors"][0]++;
         var $js$8=Pervasives["prerr_endline"];
         var $js$9=Odoc_messages["wrong_format"];
         var $js$10=$js$9(s);
         return $js$8($js$10)
        }}};
var
 add_hidden_modules=
  function(s)
   {var $js=Str["split"];
    var $js$1=Str["regexp"];
    var $js$2=$js$1(",");
    var l=$js($js$2,s);
    var $js$3=List["iter"];
    return $js$3
            (function(n)
              {var $js$4=Str["global_replace"];
               var $js$5=Str["regexp"];
               var $js$6=$js$5("[ \n\r\t]+");
               var name=$js$4($js$6,"",n);
               var $js$7=name;
               if($js$7=="")
                {return 0}
               else
                {var match=name[0];
                 var $js$8=25<-65+match>>>0;
                 if($js$8)
                  {Odoc_global["errors"][0]++;
                   var $js$9=Pervasives["prerr_endline"];
                   var $js$10=Odoc_messages["not_a_module_name"];
                   var $js$11=$js$10(name);
                   return $js$9($js$11)}
                 else
                  {return Odoc_global["hidden_modules"][1]=
                          [0,name,Odoc_global["hidden_modules"][1]],
                          0}}},
             l)};
var set_generator=function(g){return current_generator[1]=[0,g],0};
var
 anonymous=
  function(f)
   {var $js=Filename["check_suffix"];
    var $js$1=$js(f,"ml");
    if($js$1)
     {var sf=[0,f]}
    else
     {var $js$2=Filename["check_suffix"];
      var $js$3=$js$2(f,Config["interface_suffix"][1]);
      if($js$3)
       {var sf=[1,f]}
      else
       {var $js$4=Filename["check_suffix"];
        var $js$5=$js$4(f,"txt");
        if($js$5)
         {var sf=[2,f]}
        else
         {var $js$6=Pervasives["failwith"];
          var $js$7=Odoc_messages["unknown_extension"];
          var $js$8=$js$7(f);
          var sf=$js$6($js$8)}}}
    var $js$9=Pervasives["@"];
    var $js$10=$js$9(Odoc_global["files"][1],[0,sf,0]);
    return Odoc_global["files"][1]=$js$10,0};
var $js=Main_args["Make_ocamldoc_options"];
var set=function(r,param){return r[1]=1,0};
var unset=function(r,param){return r[1]=0,0};
var _absname=set(Location["absname"]);
var
 _I=
  function(s)
   {var $js$1=Misc["expand_directory"];
    var $js$2=$js$1(Config["standard_library"],s);
    var $js$3=[0,$js$2,Odoc_global["include_dirs"][1]];
    return Odoc_global["include_dirs"][1]=$js$3,0};
var
 _impl=
  function(s)
   {var $js$1=Pervasives["@"];
    var $js$2=$js$1(Odoc_global["files"][1],[0,[0,s],0]);
    return Odoc_global["files"][1]=$js$2,0};
var
 _intf=
  function(s)
   {var $js$1=Pervasives["@"];
    var $js$2=$js$1(Odoc_global["files"][1],[0,[1,s],0]);
    return Odoc_global["files"][1]=$js$2,0};
var _intf_suffix=function(s){return Config["interface_suffix"][1]=s,0};
var _labels=unset(Clflags["classic"]);
var _no_alias_deps=set(Clflags["transparent_modules"]);
var _no_app_funct=unset(Clflags["applicative_functors"]);
var _noassert=set(Clflags["noassert"]);
var _nolabels=set(Clflags["classic"]);
var _nostdlib=set(Clflags["no_std_include"]);
var
 _open=
  function(s)
   {return Clflags["open_modules"][1]=[0,s,Clflags["open_modules"][1]],0};
var _pp=function(s){return Clflags["preprocessor"][1]=[0,s],0};
var
 _ppx=
  function(s){return Clflags["all_ppx"][1]=[0,s,Clflags["all_ppx"][1]],0};
var _principal=set(Clflags["principal"]);
var _rectypes=set(Clflags["recursive_types"]);
var _safe_string=unset(Clflags["unsafe_string"]);
var _short_paths=unset(Clflags["real_paths"]);
var _strict_sequence=set(Clflags["strict_sequence"]);
var _strict_formats=set(Clflags["strict_formats"]);
var _thread=set(Clflags["use_threads"]);
var _vmthread=set(Clflags["use_vmthreads"]);
var _unsafe=function(param){return "unknown primitive:raise"};
var _unsafe_string=set(Clflags["unsafe_string"]);
var
 _v=
  function(param)
   {var $js$1=Compenv["print_version_and_library"];
    return $js$1("documentation generator")};
var _version=Compenv["print_version_string"];
var _vnum=Compenv["print_version_string"];
var $js$1=Warnings["parse_options"];
var _w=$js$1(0);
var _warn_error=function(param){return "unknown primitive:raise"};
var _warn_help=function(param){return "unknown primitive:raise"};
var _where=Compenv["print_standard_library"];
var _verbose=set(Clflags["verbose"]);
var _nopervasives=set(Clflags["nopervasives"]);
var _dsource=set(Clflags["dump_source"]);
var _dparsetree=set(Clflags["dump_parsetree"]);
var _dtypedtree=set(Clflags["dump_typedtree"]);
var _drawlambda=set(Clflags["dump_rawlambda"]);
var _dlambda=set(Clflags["dump_lambda"]);
var _dinstr=set(Clflags["dump_instr"]);
var
 $js$2=
  [0,
   _absname,
   _I,
   _labels,
   _no_alias_deps,
   _no_app_funct,
   _noassert,
   _nolabels,
   _nostdlib,
   _open,
   _ppx,
   _strict_sequence,
   _strict_formats,
   _unsafe,
   _unsafe_string,
   _version,
   _vnum,
   _w,
   _warn_error,
   _warn_help,
   _dsource,
   _dparsetree,
   _dtypedtree,
   _drawlambda,
   _dlambda,
   anonymous,
   _impl,
   _intf,
   _intf_suffix,
   _pp,
   _principal,
   _rectypes,
   _safe_string,
   _short_paths,
   _thread,
   _v,
   _verbose,
   _vmthread];
var Options=$js($js$2);
var $js$3=Pervasives["@"];
var $js$4=Pervasives["^"];
var $js$5=$js$4(Odoc_messages["keep_code"],"\n");
var $js$6=[0,"-keep-code",[2,Odoc_global["keep_code"]],$js$5];
var $js$7=Pervasives["^"];
var $js$8=$js$7(Odoc_messages["load"],"\n");
var
 $js$9=
  [0,
   "-load",
   [4,
    function(s)
     {var $js$10=Pervasives["@"];
      var $js$11=$js$10(Odoc_global["load"][1],[0,s,0]);
      return Odoc_global["load"][1]=$js$11,0}],
   $js$8];
var $js$10=Pervasives["^"];
var
 $js$11=
  $js$10(Odoc_messages["merge_options"],"\n\n *** choosing a generator ***\n");
var
 $js$12=
  [0,
   "-m",
   [4,
    function(s)
     {var $js$13=Pervasives["@"];
      var $js$14=analyse_merge_options(s);
      var $js$15=$js$13(Odoc_global["merge_options"][1],$js$14);
      return Odoc_global["merge_options"][1]=$js$15,0}],
   $js$11];
var $js$13=Pervasives["^"];
var $js$14=$js$13(Odoc_messages["load_file"],"\n\n *** HTML options ***\n");
var $js$15=[0,"-g",[4,function(s){return 0}],$js$14];
var $js$16=Pervasives["^"];
var $js$17=Odoc_messages["charset"];
var $js$18=$js$17(Odoc_html["charset"][1]);
var $js$19=$js$16($js$18,"\n\n *** LaTeX options ***\n");
var $js$20=[0,"-charset",[5,Odoc_html["charset"]],$js$19];
var $js$21=Odoc_messages["latex_title"];
var $js$22=$js$21(Odoc_latex["latex_titles"]);
var $js$23=[0,"-latextitle",[4,f_latex_title],$js$22];
var $js$24=Pervasives["^"];
var $js$25=$js$24(Odoc_messages["no_toc"],"\n\n *** texinfo options ***\n");
var
 $js$26=
  [0,
   "-notoc",
   [0,function(param){return Odoc_global["with_toc"][1]=0,0}],
   $js$25];
var $js$27=function(prim,prim$1){return prim[1]=prim$1,0};
var $js$28=$js$27(Odoc_texi["info_section"]);
var $js$29=[4,$js$28];
var $js$30=[0,"-info-section",$js$29,Odoc_messages["info_section"]];
var $js$31=Pervasives["^"];
var $js$32=$js$31(Odoc_messages["info_entry"],"\n\n *** dot options ***\n");
var
 $js$33=
  [0,
   "-info-entry",
   [4,
    function(s)
     {var $js$34=Pervasives["@"];
      var $js$35=$js$34(Odoc_texi["info_entry"][1],[0,s,0]);
      return Odoc_texi["info_entry"][1]=$js$35,0}],
   $js$32];
var $js$34=Pervasives["^"];
var
 $js$35=
  $js$34(Odoc_messages["dot_reduce"],"\n\n *** man pages options ***\n");
var $js$36=[0,"-dot-reduce",[2,Odoc_dot["dot_reduce"]],$js$35];
var
 $js$37=
  [0,
   $js$36,
   [0,
    [0,"-man-mini",[2,Odoc_man["man_mini"]],Odoc_messages["man_mini"]],
    [0,
     [0,
      "-man-suffix",
      [4,function(s){return Odoc_man["man_suffix"][1]=s,0}],
      Odoc_messages["man_suffix"]],
     [0,
      [0,
       "-man-section",
       [4,function(s){return Odoc_man["man_section"][1]=s,0}],
       Odoc_messages["man_section"]],
      0]]]];
var
 $js$38=
  [0,
   [0,"-dot-types",[2,Odoc_dot["dot_types"]],Odoc_messages["dot_types"]],
   $js$37];
var
 $js$39=
  [0,
   [0,
    "-dot-include-all",
    [2,Odoc_dot["dot_include_all"]],
    Odoc_messages["dot_include_all"]],
   $js$38];
var
 $js$40=
  [0,
   [0,
    "-dot-colors",
    [4,
     function(s)
      {var $js$41=Str["split"];
       var $js$42=Str["regexp_string"];
       var $js$43=$js$42(",");
       var $js$44=$js$41($js$43,s);
       return Odoc_dot["dot_colors"][1]=$js$44,0}],
    Odoc_messages["dot_colors"]],
   $js$39];
var $js$41=[0,$js$33,$js$40];
var $js$42=[0,$js$30,$js$41];
var
 $js$43=
  [0,[0,"-esc8",[2,Odoc_texi["esc_8bits"]],Odoc_messages["esc_8bits"]],$js$42];
var
 $js$44=
  [0,
   [0,"-noindex",[3,Odoc_global["with_index"]],Odoc_messages["no_index"]],
   $js$43];
var $js$45=[0,$js$26,$js$44];
var
 $js$46=
  [0,
   [0,
    "-latex-class-type-prefix",
    [4,function(s){return Odoc_latex["latex_class_type_prefix"][1]=s,0}],
    Odoc_messages["latex_class_type_prefix"]],
   $js$45];
var
 $js$47=
  [0,
   [0,
    "-latex-class-prefix",
    [4,function(s){return Odoc_latex["latex_class_prefix"][1]=s,0}],
    Odoc_messages["latex_class_prefix"]],
   $js$46];
var
 $js$48=
  [0,
   [0,
    "-latex-module-type-prefix",
    [4,function(s){return Odoc_latex["latex_module_type_prefix"][1]=s,0}],
    Odoc_messages["latex_module_type_prefix"]],
   $js$47];
var
 $js$49=
  [0,
   [0,
    "-latex-module-prefix",
    [4,function(s){return Odoc_latex["latex_module_prefix"][1]=s,0}],
    Odoc_messages["latex_module_prefix"]],
   $js$48];
var
 $js$50=
  [0,
   [0,
    "-latex-method-prefix",
    [4,function(s){return Odoc_latex["latex_method_prefix"][1]=s,0}],
    Odoc_messages["latex_method_prefix"]],
   $js$49];
var
 $js$51=
  [0,
   [0,
    "-latex-attribute-prefix",
    [4,function(s){return Odoc_latex["latex_attribute_prefix"][1]=s,0}],
    Odoc_messages["latex_attribute_prefix"]],
   $js$50];
var
 $js$52=
  [0,
   [0,
    "-latex-exception-prefix",
    [4,function(s){return Odoc_latex["latex_exception_prefix"][1]=s,0}],
    Odoc_messages["latex_exception_prefix"]],
   $js$51];
var
 $js$53=
  [0,
   [0,
    "-latex-type-prefix",
    [4,function(s){return Odoc_latex["latex_type_prefix"][1]=s,0}],
    Odoc_messages["latex_type_prefix"]],
   $js$52];
var
 $js$54=
  [0,
   [0,
    "-latex-value-prefix",
    [4,function(s){return Odoc_latex["latex_value_prefix"][1]=s,0}],
    Odoc_messages["latex_value_prefix"]],
   $js$53];
var $js$55=[0,$js$23,$js$54];
var
 $js$56=
  [0,
   [0,
    "-sepfiles",
    [2,Odoc_latex["separate_files"]],
    Odoc_messages["separate_files"]],
   $js$55];
var
 $js$57=
  [0,
   [0,
    "-notrailer",
    [0,function(param){return Odoc_global["with_trailer"][1]=0,0}],
    Odoc_messages["no_trailer"]],
   $js$56];
var
 $js$58=
  [0,
   [0,
    "-noheader",
    [0,function(param){return Odoc_global["with_header"][1]=0,0}],
    Odoc_messages["no_header"]],
   $js$57];
var $js$59=[0,$js$20,$js$58];
var
 $js$60=
  [0,
   [0,
    "-short-functors",
    [2,Odoc_html["html_short_functors"]],
    Odoc_messages["html_short_functors"]],
   $js$59];
var
 $js$61=
  [0,
   [0,
    "-colorize-code",
    [2,Odoc_html["colorize_code"]],
    Odoc_messages["colorize_code"]],
   $js$60];
var
 $js$62=
  [0,
   [0,"-index-only",[2,Odoc_html["index_only"]],Odoc_messages["index_only"]],
   $js$61];
var
 $js$63=
  [0,
   [0,
    "-css-style",
    [4,function(s){return Odoc_html["css_style"][1]=[0,s],0}],
    Odoc_messages["css_style"]],
   $js$62];
var
 $js$64=
  [0,
   [0,
    "-all-params",
    [2,Odoc_html["with_parameter_list"]],
    Odoc_messages["with_parameter_list"]],
   $js$63];
var $js$65=[0,$js$15,$js$64];
var
 $js$66=
  [0,[0,"-i",[4,function(s){return 0}],Odoc_messages["add_load_dir"]],$js$65];
var
 $js$67=
  [0,
   [0,
    "-customdir",
    [0,
     function(param)
      {var $js$68=Printf["printf"];
       $js$68
        ([0,[2,0,[12,10,0]],"%s\n"],Odoc_config["custom_generators_path"]);
       var $js$69=Pervasives["exit"];
       return $js$69(0)}],
    Odoc_messages["display_custom_generators_dir"]],
   $js$66];
var
 $js$68=
  [0,
   [0,
    "-dot",
    [0,function(param){return set_generator([4,Odoc_dot["Generator"]])}],
    Odoc_messages["generate_dot"]],
   $js$67];
var
 $js$69=
  [0,
   [0,
    "-man",
    [0,function(param){return set_generator([3,Odoc_man["Generator"]])}],
    Odoc_messages["generate_man"]],
   $js$68];
var
 $js$70=
  [0,
   [0,
    "-texi",
    [0,function(param){return set_generator([2,Odoc_texi["Generator"]])}],
    Odoc_messages["generate_texinfo"]],
   $js$69];
var
 $js$71=
  [0,
   [0,
    "-latex",
    [0,function(param){return set_generator([1,Odoc_latex["Generator"]])}],
    Odoc_messages["generate_latex"]],
   $js$70];
var
 $js$72=
  [0,
   [0,
    "-html",
    [0,function(param){return set_generator([0,Odoc_html["Generator"]])}],
    Odoc_messages["generate_html"]],
   $js$71];
var $js$73=[0,$js$12,$js$72];
var
 $js$74=
  [0,[0,"-hide",[4,add_hidden_modules],Odoc_messages["hide_modules"]],$js$73];
var
 $js$75=
  [0,
   [0,
    "-intro",
    [4,function(s){return Odoc_global["intro_file"][1]=[0,s],0}],
    Odoc_messages["option_intro"]],
   $js$74];
var
 $js$76=
  [0,
   [0,
    "-t",
    [4,function(s){return Odoc_global["title"][1]=[0,s],0}],
    Odoc_messages["option_title"]],
   $js$75];
var $js$77=[0,$js$9,$js$76];
var
 $js$78=
  [0,
   [0,
    "-dump",
    [4,function(s){return Odoc_global["dump"][1]=[0,s],0}],
    Odoc_messages["dump"]],
   $js$77];
var $js$79=[0,$js$6,$js$78];
var
 $js$80=
  [0,
   [0,
    "-no-module-constraint-filter",
    [3,Odoc_global["filter_with_module_constraints"]],
    Odoc_messages["no_filter_with_module_constraints"]],
   $js$79];
var
 $js$81=
  [0,
   [0,
    "-inv-merge-ml-mli",
    [2,Odoc_global["inverse_merge_ml_mli"]],
    Odoc_messages["inverse_merge_ml_mli"]],
   $js$80];
var
 $js$82=
  [0,
   [0,"-stars",[2,Odoc_global["remove_stars"]],Odoc_messages["remove_stars"]],
   $js$81];
var
 $js$83=
  [0,
   [0,
    "-no-custom-tags",
    [2,Odoc_global["no_custom_tags"]],
    Odoc_messages["no_custom_tags"]],
   $js$82];
var
 $js$84=
  [0,
   [0,"-no-stop",[2,Odoc_global["no_stop"]],Odoc_messages["no_stop"]],
   $js$83];
var
 $js$85=
  [0,
   [0,
    "-sort",
    [0,function(param){return Odoc_global["sort_modules"][1]=1,0}],
    Odoc_messages["sort_modules"]],
   $js$84];
var
 $js$86=
  [0,
   [0,
    "-d",
    [4,function(s){return Odoc_global["target_dir"][1]=s,0}],
    Odoc_messages["target_dir"]],
   $js$85];
var
 $js$87=
  [0,
   [0,
    "-o",
    [4,function(s){return Odoc_global["out_file"][1]=s,0}],
    Odoc_messages["out_file"]],
   $js$86];
var
 $js$88=
  [0,
   [0,
    "-hide-warnings",
    [3,Odoc_config["print_warnings"]],
    Odoc_messages["hide_warnings"]],
   $js$87];
var
 $js$89=
  [0,
   [0,"-warn-error",[2,Odoc_global["warn_error"]],Odoc_messages["werr"]],
   $js$88];
var
 $js$90=
  [0,
   [0,
    "-text",
    [4,
     function(s)
      {var $js$91=Pervasives["@"];
       var $js$92=$js$91(Odoc_global["files"][1],[0,[2,s],0]);
       return Odoc_global["files"][1]=$js$92,0}],
    Odoc_messages["option_text"]],
   $js$89];
var default_options=$js$3(Options[1],$js$90);
var options=[0,default_options];
var modified_options=function(param){return options[1]!=default_options};
var
 append_last_doc=
  function(suffix)
   {var $js$91=List["rev"];
    var match=$js$91(options[1]);
    var $js$92=match;
    if($js$92)
     {var match$1=match[1];
      var $js$93=List["rev"];
      var $js$94=Pervasives["^"];
      var $js$95=$js$94(match$1[3],suffix);
      var $js$96=[0,match$1[1],match$1[2],$js$95];
      var $js$97=[0,$js$96,match[2]];
      var $js$98=$js$93($js$97);
      return options[1]=$js$98,0}
    else
     {return 0}};
var help_options=[0,0];
var
 help_action=
  function(param)
   {var $js$91=Arg["usage_string"];
    var $js$92=Pervasives["@"];
    var $js$93=$js$92(options[1],help_options[1]);
    var $js$94=Pervasives["^"];
    var $js$95=$js$94(Odoc_messages["usage"],Odoc_messages["options_are"]);
    var msg=$js$91($js$93,$js$95);
    var $js$96=Pervasives["print_string"];
    return $js$96(msg)};
var
 match=
  (help_options[1]=
   [0,
    [0,"-help",[0,help_action],Odoc_messages["help"]],
    [0,[0,"--help",[0,help_action],Odoc_messages["help"]],0]],
   0);
var
 add_option=
  function(o)
   {var $js$91=modified_options(0);
    var $js$92=!$js$91;
    if($js$92){append_last_doc("\n *** custom generator options ***\n")}else{}
    var s=o[1];
    var
     iter=
      function(param)
       {var $js$93=param;
        if($js$93)
         {var q=param[2];
          var match$1=param[1];
          var s2=match$1[1];
          var $js$94="unknown primitive:caml_string_equal";
          if($js$94)
           {return [0,o,q]}
          else
           {var $js$95=iter(q);return [0,[0,s2,match$1[2],match$1[3]],$js$95]}}
        else
         {return [0,o,0]}};
    var $js$93=iter(options[1]);
    return options[1]=$js$93,0};
var
 parse=
  function(param)
   {var $js$91=modified_options(0);
    if($js$91){append_last_doc("\n")}else{}
    var $js$92=Pervasives["@"];
    var options$1=$js$92(options[1],help_options[1]);
    var $js$93=Arg["parse"];
    var $js$94=Arg["align"];
    var $js$95=$js$94([0,13],options$1);
    var $js$96=Pervasives["^"];
    var $js$97=$js$96(Odoc_messages["usage"],Odoc_messages["options_are"]);
    var match$1=$js$93($js$95,anonymous,$js$97);
    var $js$98=List["sort"];
    var
     $js$99=
      $js$98
       (function(a,b){return -"unknown primitive:caml_string_compare"},
        Odoc_global["hidden_modules"][1]);
    return Odoc_global["hidden_modules"][1]=$js$99,0};
module["exports"]=
{"current_generator":current_generator,
 "set_generator":set_generator,
 "extend_html_generator":extend_html_generator,
 "extend_latex_generator":extend_latex_generator,
 "extend_texi_generator":extend_texi_generator,
 "extend_man_generator":extend_man_generator,
 "extend_dot_generator":extend_dot_generator,
 "extend_base_generator":extend_base_generator,
 "add_option":add_option,
 "parse":parse};
