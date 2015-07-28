var String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Str=require("Str");
var Config=require("Config");
var Sys=require("Sys");
var ok="Ok";
var software="OCamldoc";
var config_version=Config["version"];
var $js=Pervasives["^"];
var magic=$js(config_version,"");
var $js$1=Pervasives["^"];
var $js$2=Pervasives["^"];
var $js$3=$js$2(Sys["argv"][0]," [options] <files>\n");
var usage=$js$1("Usage: ",$js$3);
var options_are="Options are:";
var latex_only="(LaTeX only)";
var texi_only="(TeXinfo only)";
var latex_texi_only="(LaTeX and TeXinfo only)";
var html_only="(HTML only)";
var html_latex_only="(HTML and LaTeX only)";
var html_latex_texi_only="(HTML, LaTeX and TeXinfo only)";
var man_only="(man only)";
var option_impl="<file> Consider <file> as a .ml file";
var option_intf="<file> Consider <file> as a .mli file";
var option_text="<file> Consider <file> as a .txt file";
var
 display_custom_generators_dir=
  "Display custom generators standard directory and exit";
var $js$4=Pervasives["^"];
var
 add_load_dir=
  $js$4
   ("<dir> Add the given directory to the search path for custom\n",
    "\t\tgenerators");
var
 load_file=
  "<file.cm[o|a|xs]> Load file defining a new documentation generator";
var werr=" Treat ocamldoc warnings as errors";
var hide_warnings=" do not print ocamldoc warnings";
var $js$5=Pervasives["^"];
var
 target_dir=
  $js$5
   ("<dir> Generate files in directory <dir>, rather than in current\n",
    "\t\tdirectory (for man and HTML generators)");
var dump="<file> Dump collected information into <file>";
var load="<file> Load information from <file> ; may be used several times";
var $js$6=Pervasives["^"];
var
 css_style=
  $js$6("<file> Use content of <file> as CSS style definition ",html_only);
var $js$7=Pervasives["^"];
var index_only=$js$7(" Generate index files only ",html_only);
var $js$8=Pervasives["^"];
var
 colorize_code=
  $js$8(" Colorize code even in documentation pages ",html_only);
var $js$9=Pervasives["^"];
var
 html_short_functors=
  $js$9(" Use short form to display functor types ",html_only);
var
 charset=
  function(c)
   {var $js$10=Printf["sprintf"];
    return $js$10
            ([0,
              [11,
               "<s> Add information about character encoding being s\n\t\t(default is ",
               [2,0,[12,41,0]]],
              "<s> Add information about character encoding being s\n\t\t(default is %s)"],
             c)};
var generate_html=" Generate HTML documentation";
var generate_latex=" Generate LaTeX documentation";
var generate_texinfo=" Generate TeXinfo documentation";
var generate_man=" Generate man pages";
var generate_dot=" Generate dot code of top modules dependencies";
var
 option_not_in_native_code=
  function(op)
   {var $js$10=Pervasives["^"];
    var $js$11=Pervasives["^"];
    var $js$12=$js$11(op," not available in native code version.");
    return $js$10("Option ",$js$12)};
var default_out_file="ocamldoc.out";
var $js$10=Pervasives["^"];
var $js$11=Pervasives["^"];
var $js$12=Pervasives["^"];
var $js$13=Pervasives["^"];
var $js$14=Pervasives["^"];
var
 $js$15=
  $js$14
   ("\t\tor the prefix of index files for the HTML generator\n",
    "\t\t(default is index)");
var $js$16=$js$13(")\n",$js$15);
var $js$17=$js$12(default_out_file,$js$16);
var $js$18=$js$11("\t\t(default is ",$js$17);
var
 out_file=
  $js$10
   ("<file> Set the output file name, used by texi, latex and dot generators\n",
    $js$18);
var $js$19=Pervasives["^"];
var
 dot_include_all=
  $js$19
   (" Include all modules in the dot output, not only the\n",
    "\t\tmodules given on the command line");
var dot_types=" Generate dependency graph for types instead of modules";
var
 default_dot_colors=
  [0,
   [0,"darkturquoise",[0,"darkgoldenrod2",[0,"cyan",[0,"green",0]]]],
   [0,
    [0,
     "magenta",
     [0,
      "yellow",
      [0,"burlywood1",[0,"aquamarine",[0,"floralwhite",[0,"lightpink",0]]]]]],
    [0,
     [0,"lightblue",[0,"mediumturquoise",[0,"salmon",[0,"slategray3",0]]]],
     0]]];
var $js$20=Pervasives["^"];
var $js$21=Pervasives["^"];
var $js$22=Pervasives["^"];
var $js$23=Pervasives["^"];
var $js$24=String["concat"];
var $js$25=List["map"];
var $js$26=String["concat"];
var $js$27=$js$26(",");
var $js$28=$js$25($js$27,default_dot_colors);
var $js$29=$js$24(",\n\t\t",$js$28);
var $js$30=$js$23($js$29,")");
var $js$31=$js$22("\t\t(default list is ",$js$30);
var $js$32=$js$21("\t\tUse colors c1,c1,...,cn in the dot output\n",$js$31);
var dot_colors=$js$20(" <c1,c2,...,cn>\n",$js$32);
var $js$33=Pervasives["^"];
var
 dot_reduce=
  $js$33
   (" Perform a transitive reduction on the selected dependency graph\n",
    "\t\tbefore the dot output");
var $js$34=Pervasives["^"];
var $js$35=Pervasives["^"];
var $js$36=$js$35("\t\tand class types ",man_only);
var
 man_mini=
  $js$34
   (" Generate man pages only for modules, module types, classes\n",$js$36);
var default_man_section="3";
var $js$37=Pervasives["^"];
var $js$38=Pervasives["^"];
var $js$39=Pervasives["^"];
var $js$40=Pervasives["^"];
var $js$41=Pervasives["^"];
var $js$42=$js$41(man_only,"\n");
var $js$43=$js$40(") ",$js$42);
var $js$44=$js$39(default_man_section,$js$43);
var $js$45=$js$38("(default is ",$js$44);
var man_section=$js$37("<section> Use <section> in man page files ",$js$45);
var $js$46=Pervasives["^"];
var default_man_suffix=$js$46(default_man_section,"o");
var $js$47=Pervasives["^"];
var $js$48=Pervasives["^"];
var $js$49=Pervasives["^"];
var $js$50=Pervasives["^"];
var $js$51=Pervasives["^"];
var $js$52=$js$51(man_only,"\n");
var $js$53=$js$50(") ",$js$52);
var $js$54=$js$49(default_man_suffix,$js$53);
var $js$55=$js$48("(default is ",$js$54);
var man_suffix=$js$47("<suffix> Use <suffix> for man page files ",$js$55);
var
 option_title=
  "<title> Use <title> as title for the generated documentation";
var $js$56=Pervasives["^"];
var $js$57=Pervasives["^"];
var $js$58=$js$57("\t\t",html_latex_texi_only);
var
 option_intro=
  $js$56
   ("<file> Use content of <file> as ocamldoc text to use as introduction\n",
    $js$58);
var $js$59=Pervasives["^"];
var $js$60=Pervasives["^"];
var $js$61=$js$60("\t\tmethods ",html_only);
var
 with_parameter_list=
  $js$59
   (" Display the complete list of parameters for functions and\n",$js$61);
var
 hide_modules=
  "<M1,M2.M3,...> Hide the given complete module names in generated doc";
var $js$62=Pervasives["^"];
var
 no_header=
  $js$62(" Suppress header in generated documentation\n\t\t",latex_texi_only);
var $js$63=Pervasives["^"];
var
 no_trailer=
  $js$63(" Suppress trailer in generated documentation\n\t\t",latex_texi_only);
var $js$64=Pervasives["^"];
var
 separate_files=
  $js$64(" Generate one file per toplevel module ",latex_only);
var
 latex_title=
  function(ref_titles)
   {var $js$65=Pervasives["^"];
    var $js$66=Pervasives["^"];
    var $js$67=Pervasives["^"];
    var $js$68=Pervasives["^"];
    var $js$69=Pervasives["^"];
    var $js$70=String["concat"];
    var $js$71=List["map"];
    var
     $js$72=
      $js$71
       (function(param)
         {var $js$73=Printf["sprintf"];
          return $js$73
                  ([0,[12,32,[4,0,0,0,[11," -> ",[2,0,0]]]]," %d -> %s"],
                   param[1],
                   param[2])},
        ref_titles[1]);
    var $js$73=$js$70("\n\t\t",$js$72);
    var $js$74=$js$69("\t\tDefault sectionning is:\n\t\t",$js$73);
    var $js$75=$js$68("\n",$js$74);
    var $js$76=$js$67(latex_only,$js$75);
    var $js$77=$js$66("\t\t(e.g. 'section') in the latex output ",$js$76);
    return $js$65
            ("n,style Associate {n } to the given sectionning style\n",$js$77)};
var default_latex_value_prefix="val:";
var $js$65=Pervasives["^"];
var $js$66=Pervasives["^"];
var $js$67=Pervasives["^"];
var $js$68=Pervasives["^"];
var $js$69=$js$68(default_latex_value_prefix,'")');
var $js$70=$js$67('\t\t(default is "',$js$69);
var
 $js$71=
  $js$66
   ("\t\tUse <string> as prefix for the LaTeX labels of values.\n",$js$70);
var latex_value_prefix=$js$65("<string>\n",$js$71);
var default_latex_type_prefix="type:";
var $js$72=Pervasives["^"];
var $js$73=Pervasives["^"];
var $js$74=Pervasives["^"];
var $js$75=Pervasives["^"];
var $js$76=$js$75(default_latex_type_prefix,'")');
var $js$77=$js$74('\t\t(default is "',$js$76);
var
 $js$78=
  $js$73("\t\tUse <string> as prefix for the LaTeX labels of types.\n",$js$77);
var latex_type_prefix=$js$72("<string>\n",$js$78);
var default_latex_type_elt_prefix="typeelt:";
var $js$79=Pervasives["^"];
var $js$80=Pervasives["^"];
var $js$81=Pervasives["^"];
var $js$82=Pervasives["^"];
var $js$83=$js$82(default_latex_type_elt_prefix,'")');
var $js$84=$js$81('\t\t(default is "',$js$83);
var
 $js$85=
  $js$80
   ("\t\tUse <string> as prefix for the LaTeX labels of type elements.\n",
    $js$84);
var latex_type_elt_prefix=$js$79("<string>\n",$js$85);
var default_latex_extension_prefix="extension:";
var $js$86=Pervasives["^"];
var $js$87=Pervasives["^"];
var $js$88=Pervasives["^"];
var $js$89=Pervasives["^"];
var $js$90=$js$89(default_latex_extension_prefix,'")');
var $js$91=$js$88('\t\t(default is "',$js$90);
var
 $js$92=
  $js$87
   ("\t\tUse <string> as prefix for the LaTeX labels of extensions.\n",$js$91);
var latex_extension_prefix=$js$86("<string>\n",$js$92);
var default_latex_exception_prefix="exception:";
var $js$93=Pervasives["^"];
var $js$94=Pervasives["^"];
var $js$95=Pervasives["^"];
var $js$96=Pervasives["^"];
var $js$97=$js$96(default_latex_exception_prefix,'")');
var $js$98=$js$95('\t\t(default is "',$js$97);
var
 $js$99=
  $js$94
   ("\t\tUse <string> as prefix for the LaTeX labels of exceptions.\n",$js$98);
var latex_exception_prefix=$js$93("<string>\n",$js$99);
var default_latex_module_prefix="module:";
var $js$100=Pervasives["^"];
var $js$101=Pervasives["^"];
var $js$102=Pervasives["^"];
var $js$103=Pervasives["^"];
var $js$104=$js$103(default_latex_module_prefix,'")');
var $js$105=$js$102('\t\t(default is "',$js$104);
var
 $js$106=
  $js$101
   ("\t\tUse <string> as prefix for the LaTeX labels of modules.\n",$js$105);
var latex_module_prefix=$js$100("<string>\n",$js$106);
var default_latex_module_type_prefix="moduletype:";
var $js$107=Pervasives["^"];
var $js$108=Pervasives["^"];
var $js$109=Pervasives["^"];
var $js$110=Pervasives["^"];
var $js$111=$js$110(default_latex_module_type_prefix,'")');
var $js$112=$js$109('\t\t(default is "',$js$111);
var
 $js$113=
  $js$108
   ("\t\tUse <string> as prefix for the LaTeX labels of module types.\n",
    $js$112);
var latex_module_type_prefix=$js$107("<string>\n",$js$113);
var default_latex_class_prefix="class:";
var $js$114=Pervasives["^"];
var $js$115=Pervasives["^"];
var $js$116=Pervasives["^"];
var $js$117=Pervasives["^"];
var $js$118=$js$117(default_latex_class_prefix,'")');
var $js$119=$js$116('\t\t(default is "',$js$118);
var
 $js$120=
  $js$115
   ("\t\tUse <string> as prefix for the LaTeX labels of classes.\n",$js$119);
var latex_class_prefix=$js$114("<string>\n",$js$120);
var default_latex_class_type_prefix="classtype:";
var $js$121=Pervasives["^"];
var $js$122=Pervasives["^"];
var $js$123=Pervasives["^"];
var $js$124=Pervasives["^"];
var $js$125=$js$124(default_latex_class_type_prefix,'")');
var $js$126=$js$123('\t\t(default is "',$js$125);
var
 $js$127=
  $js$122
   ("\t\tUse <string> as prefix for the LaTeX labels of class types.\n",
    $js$126);
var latex_class_type_prefix=$js$121("<string>\n",$js$127);
var default_latex_attribute_prefix="val:";
var $js$128=Pervasives["^"];
var $js$129=Pervasives["^"];
var $js$130=Pervasives["^"];
var $js$131=Pervasives["^"];
var $js$132=$js$131(default_latex_attribute_prefix,'")');
var $js$133=$js$130('\t\t(default is "',$js$132);
var
 $js$134=
  $js$129
   ("\t\tUse <string> as prefix for the LaTeX labels of attributes.\n",
    $js$133);
var latex_attribute_prefix=$js$128("<string>\n",$js$134);
var default_latex_method_prefix="method:";
var $js$135=Pervasives["^"];
var $js$136=Pervasives["^"];
var $js$137=Pervasives["^"];
var $js$138=Pervasives["^"];
var $js$139=$js$138(default_latex_method_prefix,'")');
var $js$140=$js$137('\t\t(default is "',$js$139);
var
 $js$141=
  $js$136
   ("\t\tUse <string> as prefix for the LaTeX labels of methods.\n",$js$140);
var latex_method_prefix=$js$135("<string>\n",$js$141);
var $js$142=Pervasives["^"];
var no_toc=$js$142(" Do not generate table of contents ",latex_only);
var
 sort_modules=
  " Sort the list of top modules before generating the documentation";
var no_stop=" Do not stop at (**/**) comments";
var no_custom_tags=" Do not allow custom @-tags";
var
 remove_stars=
  " Remove beginning blanks of comment lines, until the first '*'";
var keep_code=" Always keep code when available";
var
 inverse_merge_ml_mli=
  " Inverse implementations and interfaces when merging";
var
 no_filter_with_module_constraints=
  "Do not filter module elements using module type constraints";
var merge_description=[0,100,"merge description"];
var merge_author=[0,97,"merge @author"];
var merge_version=[0,118,"merge @version"];
var merge_see=[0,108,"merge @see"];
var merge_since=[0,115,"merge @since"];
var merge_before=[0,98,"merge @before"];
var merge_deprecated=[0,111,"merge @deprecated"];
var merge_param=[0,112,"merge @param"];
var merge_raised_exception=[0,101,"merge @raise"];
var merge_return_value=[0,114,"merge @return"];
var merge_custom=[0,99,"merge custom @-tags"];
var merge_all=[0,65,"merge all"];
var $js$143=Pervasives["^"];
var no_index=$js$143(" Do not build index for Info files ",texi_only);
var $js$144=Pervasives["^"];
var
 esc_8bits=
  $js$144(" Escape accentuated characters in Info files ",texi_only);
var $js$145=Pervasives["^"];
var info_section=$js$145(" Specify section of Info directory ",texi_only);
var $js$146=Pervasives["^"];
var info_entry=$js$146(" Specify Info directory entry ",texi_only);
var
 options_can_be=
  "<options> can be one or more of the following characters:";
var
 string_of_options_list=
  function(l)
   {var $js$147=List["fold_left"];
    return $js$147
            (function(acc,param)
              {var $js$148=Pervasives["^"];
               var $js$149=Pervasives["^"];
               var $js$150=Pervasives["^"];
               var $js$151=String["make"];
               var $js$152=$js$151(1,param[1]);
               var $js$153=Pervasives["^"];
               var $js$154=$js$153("  ",param[2]);
               var $js$155=$js$150($js$152,$js$154);
               var $js$156=$js$149("\n\t\t",$js$155);
               return $js$148(acc,$js$156)},
             "",
             l)};
var $js$147=Pervasives["^"];
var $js$148=Pervasives["^"];
var
 $js$149=
  string_of_options_list
   ([0,
     merge_description,
     [0,
      merge_author,
      [0,
       merge_version,
       [0,
        merge_see,
        [0,
         merge_since,
         [0,
          merge_before,
          [0,
           merge_deprecated,
           [0,
            merge_param,
            [0,
             merge_raised_exception,
             [0,merge_return_value,[0,merge_custom,[0,merge_all,0]]]]]]]]]]]]);
var $js$150=$js$148(options_can_be,$js$149);
var
 merge_options=
  $js$147
   ("<options> specify merge options between .mli and .ml\n\t\t",$js$150);
var help=" Display this list of options";
var warning="Warning";
var $js$151=Pervasives["^"];
var
 bad_magic_number=
  $js$151
   ("Bad magic number for this ocamldoc dump!\n",
    "This dump was not created by this version of OCamldoc.");
var
 not_a_module_name=
  function(s)
   {var $js$152=Pervasives["^"];
    return $js$152(s," is not a valid module name")};
var
 load_file_error=
  function(f,e)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=$js$154(":\n",e);
    var $js$156=$js$153(f,$js$155);
    return $js$152("Error while loading file ",$js$156)};
var
 wrong_format=
  function(s)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(s,'"');
    return $js$152('Wrong format for "',$js$154)};
var
 errors_occured=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["string_of_int"];
    var $js$154=$js$153(n);
    return $js$152($js$154," error(s) encountered")};
var parse_error="Parse error";
var
 text_parse_error=
  function(l,c,s)
   {var $js$152=Str["split"];
    var $js$153=Str["regexp_string"];
    var $js$154=$js$153("\n");
    var lines=$js$152($js$154,s);
    var $js$155=Pervasives["^"];
    var $js$156=Pervasives["^"];
    var $js$157=Pervasives["^"];
    var $js$158=Pervasives["^"];
    var $js$159=Pervasives["^"];
    var $js$160=Pervasives["string_of_int"];
    var $js$161=$js$160(l);
    var $js$162=Pervasives["^"];
    var $js$163=Pervasives["^"];
    var $js$164=Pervasives["string_of_int"];
    var $js$165=$js$164(c);
    var $js$166=Pervasives["^"];
    var $js$167=Pervasives["^"];
    var $js$168=List["nth"];
    var $js$169=$js$168(lines,l);
    var $js$170=Pervasives["^"];
    var $js$171=Pervasives["^"];
    var $js$172=String["make"];
    var $js$173=$js$172(c,32);
    var $js$174=$js$171($js$173,"^");
    var $js$175=$js$170("\n",$js$174);
    var $js$176=$js$167($js$169,$js$175);
    var $js$177=$js$166(":\n",$js$176);
    var $js$178=$js$163($js$165,$js$177);
    var $js$179=$js$162(", character ",$js$178);
    var $js$180=$js$159($js$161,$js$179);
    var $js$181=$js$158("line ",$js$180);
    var $js$182=$js$157("\n",$js$181);
    var $js$183=$js$156(s,$js$182);
    return $js$155("Syntax error in text:\n",$js$183)};
var
 file_not_found_in_paths=
  function(paths,name)
   {var $js$152=Printf["sprintf"];
    var $js$153=String["concat"];
    var $js$154=$js$153("\n",paths);
    return $js$152
            ([0,
              [11,
               "No file ",
               [2,0,[11," found in the load paths: \n",[2,0,0]]]],
              "No file %s found in the load paths: \n%s"],
             name,
             $js$154)};
var
 tag_not_handled=
  function(tag)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(tag," not handled by this generator");
    return $js$152("Tag @",$js$154)};
var
 should_escape_at_sign=
  "The character @ has a special meaning in ocamldoc comments, for commands such as @raise or @since. If you want to write a single @, you must escape it as \@.";
var bad_tree="Incorrect tree structure.";
var
 not_a_valid_tag=
  function(s)
   {var $js$152=Pervasives["^"];return $js$152(s," is not a valid tag.")};
var
 fun_without_param=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f," has no parameter.");
    return $js$152("Function ",$js$154)};
var
 method_without_param=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f," has no parameter.");
    return $js$152("Method ",$js$154)};
var
 anonymous_parameters=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f," has anonymous parameters.");
    return $js$152("Function ",$js$154)};
var
 function_colon=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f,": ");
    return $js$152("Function ",$js$154)};
var
 implicit_match_in_parameter=
  "Parameters contain implicit pattern matching.";
var
 unknown_extension=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f,".");
    return $js$152("Unknown extension for file ",$js$154)};
var
 two_implementations=
  function(name)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(name,".");
    return $js$152("There are two implementations of module ",$js$154)};
var
 two_interfaces=
  function(name)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(name,".");
    return $js$152("There are two interfaces of module ",$js$154)};
var
 too_many_module_objects=
  function(name)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(name,".");
    return $js$152
            ("There are too many interfaces/implementation of module ",
             $js$154)};
var
 extension_not_found_in_implementation=
  function(ext,m)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" was not found in implementation of module ",$js$156);
    var $js$158=$js$153(ext,$js$157);
    return $js$152("Extension ",$js$158)};
var
 exception_not_found_in_implementation=
  function(exc,m)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" was not found in implementation of module ",$js$156);
    var $js$158=$js$153(exc,$js$157);
    return $js$152("Exception ",$js$158)};
var
 type_not_found_in_implementation=
  function(exc,m)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" was not found in implementation of module ",$js$156);
    var $js$158=$js$153(exc,$js$157);
    return $js$152("Type ",$js$158)};
var
 module_not_found_in_implementation=
  function(m,m2)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m2,".");
    var
     $js$157=
      $js$154(" was not found in implementation of module ",$js$156);
    var $js$158=$js$153(m,$js$157);
    return $js$152("Module ",$js$158)};
var
 value_not_found_in_implementation=
  function(v,m)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" was not found in implementation of module ",$js$156);
    var $js$158=$js$153(v,$js$157);
    return $js$152("Value ",$js$158)};
var
 class_not_found_in_implementation=
  function(c,m)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" was not found in implementation of module ",$js$156);
    var $js$158=$js$153(c,$js$157);
    return $js$152("Class ",$js$158)};
var
 attribute_not_found_in_implementation=
  function(a,c)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(c,".");
    var $js$157=$js$154(" was not found in implementation of class ",$js$156);
    var $js$158=$js$153(a,$js$157);
    return $js$152("Attribute ",$js$158)};
var
 method_not_found_in_implementation=
  function(m,c)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(c,".");
    var $js$157=$js$154(" was not found in implementation of class ",$js$156);
    var $js$158=$js$153(m,$js$157);
    return $js$152("Method ",$js$158)};
var
 different_types=
  function(t)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(t," doesn't match from interface to implementation.");
    return $js$152("Definition of type ",$js$154)};
var
 attribute_type_not_found=
  function(cl,att)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(cl,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of class ",$js$156);
    var $js$158=$js$153(att,$js$157);
    return $js$152("The type of the attribute ",$js$158)};
var
 method_type_not_found=
  function(cl,met)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(cl,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of class ",$js$156);
    var $js$158=$js$153(met,$js$157);
    return $js$152("The type of the method ",$js$158)};
var
 module_not_found=
  function(m,m2)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(m2,$js$157);
    return $js$152("The module ",$js$158)};
var
 module_type_not_found=
  function(m,mt)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(mt,$js$157);
    return $js$152("The module type ",$js$158)};
var
 value_not_found=
  function(m,v)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(v,$js$157);
    return $js$152("The value ",$js$158)};
var
 extension_not_found=
  function(m,e)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(e,$js$157);
    return $js$152("The extension ",$js$158)};
var
 exception_not_found=
  function(m,e)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(e,$js$157);
    return $js$152("The exception ",$js$158)};
var
 type_not_found=
  function(m,t)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(t,$js$157);
    return $js$152("The type ",$js$158)};
var
 class_not_found=
  function(m,c)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(c,$js$157);
    return $js$152("The class ",$js$158)};
var
 class_type_not_found=
  function(m,c)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["^"];
    var $js$155=Pervasives["^"];
    var $js$156=$js$155(m,".");
    var
     $js$157=
      $js$154(" could not be found in the signature of module ",$js$156);
    var $js$158=$js$153(c,$js$157);
    return $js$152("The class type ",$js$158)};
var
 type_not_found_in_typedtree=
  function(t)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(t," was not found in typed tree.");
    return $js$152("Type ",$js$154)};
var
 extension_not_found_in_typedtree=
  function(x)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(x," was not found in typed tree.");
    return $js$152("Extension ",$js$154)};
var
 exception_not_found_in_typedtree=
  function(e)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(e," was not found in typed tree.");
    return $js$152("Exception ",$js$154)};
var
 module_type_not_found_in_typedtree=
  function(mt)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(mt," was not found in typed tree.");
    return $js$152("Module type ",$js$154)};
var
 module_not_found_in_typedtree=
  function(m)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(m," was not found in typed tree.");
    return $js$152("Module ",$js$154)};
var
 class_not_found_in_typedtree=
  function(c)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(c," was not found in typed tree.");
    return $js$152("Class ",$js$154)};
var
 class_type_not_found_in_typedtree=
  function(ct)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(ct," was not found in typed tree.");
    return $js$152("Class type ",$js$154)};
var
 inherit_classexp_not_found_in_typedtree=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=Pervasives["string_of_int"];
    var $js$155=$js$154(n);
    var $js$156=$js$153($js$155," was not found in typed tree.");
    return $js$152("Inheritance class expression number ",$js$156)};
var
 attribute_not_found_in_typedtree=
  function(att)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(att," was not found in typed tree.");
    return $js$152("Class attribute ",$js$154)};
var
 method_not_found_in_typedtree=
  function(met)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(met," was not found in typed tree.");
    return $js$152("Class method ",$js$154)};
var
 misplaced_comment=
  function(file,pos)
   {var $js$152=Printf["sprintf"];
    return $js$152
            ([0,
              [11,
               "Misplaced special comment in file ",
               [2,0,[11,", character ",[4,0,0,0,[12,46,0]]]]],
              "Misplaced special comment in file %s, character %d."],
             file,
             pos)};
var
 cross_module_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Module ",$js$154)};
var
 cross_module_type_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Module type ",$js$154)};
var
 cross_module_or_module_type_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Module or module type ",$js$154)};
var
 cross_class_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Class ",$js$154)};
var
 cross_class_type_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("class type ",$js$154)};
var
 cross_class_or_class_type_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Class or class type ",$js$154)};
var
 cross_extension_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Extension ",$js$154)};
var
 cross_exception_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Exception ",$js$154)};
var
 cross_element_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Element ",$js$154)};
var
 cross_method_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Method ",$js$154)};
var
 cross_attribute_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Attribute ",$js$154)};
var
 cross_section_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Section ",$js$154)};
var
 cross_value_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Value ",$js$154)};
var
 cross_type_not_found=
  function(n)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(n," not found");
    return $js$152("Type ",$js$154)};
var
 cross_recfield_not_found=
  function(n)
   {var $js$152=Printf["sprintf"];
    return $js$152
            ([0,
              [11,"Record field ",[2,0,[11," not found",0]]],
              "Record field %s not found"],
             n)};
var
 cross_const_not_found=
  function(n)
   {var $js$152=Printf["sprintf"];
    return $js$152
            ([0,
              [11,"Constructor ",[2,0,[11," not found",0]]],
              "Constructor %s not found"],
             n)};
var object_end="object ... end";
var struct_end="struct ... end";
var sig_end="sig ... end";
var
 current_generator_is_not=
  function(kind)
   {var $js$152=Printf["sprintf"];
    return $js$152
            ([0,
              [11,"Current generator is not a ",[2,0,[11," generator",0]]],
              "Current generator is not a %s generator"],
             kind)};
var
 analysing=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f,"...");
    return $js$152("Analysing file ",$js$154)};
var merging="Merging...";
var cross_referencing="Cross referencing...";
var generating_doc="Generating documentation...";
var
 loading=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f,"...");
    return $js$152("Loading ",$js$154)};
var
 file_generated=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f," generated.");
    return $js$152("File ",$js$154)};
var
 file_exists_dont_generate=
  function(f)
   {var $js$152=Pervasives["^"];
    var $js$153=Pervasives["^"];
    var $js$154=$js$153(f," exists, we don't generate it.");
    return $js$152("File ",$js$154)};
var modul="Module";
var modules="Modules";
var functors="Functors";
var values="Simple values";
var types="Types";
var extensions="Extensions";
var exceptions="Exceptions";
var record="Record";
var variant="Variant";
var mutab="mutable";
var functions="Functions";
var parameters="Parameters";
var abstract="Abstract";
var functo="Functor";
var clas="Class";
var classes="Classes";
var attributes="Attributes";
var methods="Methods";
var authors="Author(s)";
var version="Version";
var since="Since";
var before="Before";
var deprecated="Deprecated.";
var raises="Raises";
var returns="Returns";
var inherits="Inherits";
var inheritance="Inheritance";
var privat="private";
var module_type="Module type";
var class_type="Class type";
var description="Description";
var interface="Interface";
var type_parameters="Type parameters";
var class_types="Class types";
var module_types="Module types";
var see_also="See also";
var documentation="Documentation";
var index_of="Index of";
var top="Top";
var $js$152=Pervasives["^"];
var index_of_values=$js$152(index_of," values");
var $js$153=Pervasives["^"];
var index_of_extensions=$js$153(index_of," extensions");
var $js$154=Pervasives["^"];
var index_of_exceptions=$js$154(index_of," exceptions");
var $js$155=Pervasives["^"];
var index_of_types=$js$155(index_of," types");
var $js$156=Pervasives["^"];
var index_of_attributes=$js$156(index_of," class attributes");
var $js$157=Pervasives["^"];
var index_of_methods=$js$157(index_of," class methods");
var $js$158=Pervasives["^"];
var index_of_classes=$js$158(index_of," classes");
var $js$159=Pervasives["^"];
var index_of_class_types=$js$159(index_of," class types");
var $js$160=Pervasives["^"];
var index_of_modules=$js$160(index_of," modules");
var $js$161=Pervasives["^"];
var index_of_module_types=$js$161(index_of," module types");
var previous="Previous";
var next="Next";
var up="Up";
module["exports"]=
{"ok":ok,
 "software":software,
 "config_version":config_version,
 "magic":magic,
 "usage":usage,
 "options_are":options_are,
 "latex_only":latex_only,
 "texi_only":texi_only,
 "latex_texi_only":latex_texi_only,
 "html_only":html_only,
 "html_latex_only":html_latex_only,
 "html_latex_texi_only":html_latex_texi_only,
 "man_only":man_only,
 "option_impl":option_impl,
 "option_intf":option_intf,
 "option_text":option_text,
 "display_custom_generators_dir":display_custom_generators_dir,
 "add_load_dir":add_load_dir,
 "load_file":load_file,
 "werr":werr,
 "hide_warnings":hide_warnings,
 "target_dir":target_dir,
 "dump":dump,
 "load":load,
 "css_style":css_style,
 "index_only":index_only,
 "colorize_code":colorize_code,
 "html_short_functors":html_short_functors,
 "charset":charset,
 "generate_html":generate_html,
 "generate_latex":generate_latex,
 "generate_texinfo":generate_texinfo,
 "generate_man":generate_man,
 "generate_dot":generate_dot,
 "option_not_in_native_code":option_not_in_native_code,
 "default_out_file":default_out_file,
 "out_file":out_file,
 "dot_include_all":dot_include_all,
 "dot_types":dot_types,
 "default_dot_colors":default_dot_colors,
 "dot_colors":dot_colors,
 "dot_reduce":dot_reduce,
 "man_mini":man_mini,
 "default_man_section":default_man_section,
 "man_section":man_section,
 "default_man_suffix":default_man_suffix,
 "man_suffix":man_suffix,
 "option_title":option_title,
 "option_intro":option_intro,
 "with_parameter_list":with_parameter_list,
 "hide_modules":hide_modules,
 "no_header":no_header,
 "no_trailer":no_trailer,
 "separate_files":separate_files,
 "latex_title":latex_title,
 "default_latex_value_prefix":default_latex_value_prefix,
 "latex_value_prefix":latex_value_prefix,
 "default_latex_type_prefix":default_latex_type_prefix,
 "latex_type_prefix":latex_type_prefix,
 "default_latex_type_elt_prefix":default_latex_type_elt_prefix,
 "latex_type_elt_prefix":latex_type_elt_prefix,
 "default_latex_extension_prefix":default_latex_extension_prefix,
 "latex_extension_prefix":latex_extension_prefix,
 "default_latex_exception_prefix":default_latex_exception_prefix,
 "latex_exception_prefix":latex_exception_prefix,
 "default_latex_module_prefix":default_latex_module_prefix,
 "latex_module_prefix":latex_module_prefix,
 "default_latex_module_type_prefix":default_latex_module_type_prefix,
 "latex_module_type_prefix":latex_module_type_prefix,
 "default_latex_class_prefix":default_latex_class_prefix,
 "latex_class_prefix":latex_class_prefix,
 "default_latex_class_type_prefix":default_latex_class_type_prefix,
 "latex_class_type_prefix":latex_class_type_prefix,
 "default_latex_attribute_prefix":default_latex_attribute_prefix,
 "latex_attribute_prefix":latex_attribute_prefix,
 "default_latex_method_prefix":default_latex_method_prefix,
 "latex_method_prefix":latex_method_prefix,
 "no_toc":no_toc,
 "sort_modules":sort_modules,
 "no_stop":no_stop,
 "no_custom_tags":no_custom_tags,
 "remove_stars":remove_stars,
 "keep_code":keep_code,
 "inverse_merge_ml_mli":inverse_merge_ml_mli,
 "no_filter_with_module_constraints":no_filter_with_module_constraints,
 "merge_description":merge_description,
 "merge_author":merge_author,
 "merge_version":merge_version,
 "merge_see":merge_see,
 "merge_since":merge_since,
 "merge_before":merge_before,
 "merge_deprecated":merge_deprecated,
 "merge_param":merge_param,
 "merge_raised_exception":merge_raised_exception,
 "merge_return_value":merge_return_value,
 "merge_custom":merge_custom,
 "merge_all":merge_all,
 "no_index":no_index,
 "esc_8bits":esc_8bits,
 "info_section":info_section,
 "info_entry":info_entry,
 "options_can_be":options_can_be,
 "string_of_options_list":string_of_options_list,
 "merge_options":merge_options,
 "help":help,
 "warning":warning,
 "bad_magic_number":bad_magic_number,
 "not_a_module_name":not_a_module_name,
 "load_file_error":load_file_error,
 "wrong_format":wrong_format,
 "errors_occured":errors_occured,
 "parse_error":parse_error,
 "text_parse_error":text_parse_error,
 "file_not_found_in_paths":file_not_found_in_paths,
 "tag_not_handled":tag_not_handled,
 "should_escape_at_sign":should_escape_at_sign,
 "bad_tree":bad_tree,
 "not_a_valid_tag":not_a_valid_tag,
 "fun_without_param":fun_without_param,
 "method_without_param":method_without_param,
 "anonymous_parameters":anonymous_parameters,
 "function_colon":function_colon,
 "implicit_match_in_parameter":implicit_match_in_parameter,
 "unknown_extension":unknown_extension,
 "two_implementations":two_implementations,
 "two_interfaces":two_interfaces,
 "too_many_module_objects":too_many_module_objects,
 "extension_not_found_in_implementation":extension_not_found_in_implementation,
 "exception_not_found_in_implementation":exception_not_found_in_implementation,
 "type_not_found_in_implementation":type_not_found_in_implementation,
 "module_not_found_in_implementation":module_not_found_in_implementation,
 "value_not_found_in_implementation":value_not_found_in_implementation,
 "class_not_found_in_implementation":class_not_found_in_implementation,
 "attribute_not_found_in_implementation":attribute_not_found_in_implementation,
 "method_not_found_in_implementation":method_not_found_in_implementation,
 "different_types":different_types,
 "attribute_type_not_found":attribute_type_not_found,
 "method_type_not_found":method_type_not_found,
 "module_not_found":module_not_found,
 "module_type_not_found":module_type_not_found,
 "value_not_found":value_not_found,
 "extension_not_found":extension_not_found,
 "exception_not_found":exception_not_found,
 "type_not_found":type_not_found,
 "class_not_found":class_not_found,
 "class_type_not_found":class_type_not_found,
 "type_not_found_in_typedtree":type_not_found_in_typedtree,
 "extension_not_found_in_typedtree":extension_not_found_in_typedtree,
 "exception_not_found_in_typedtree":exception_not_found_in_typedtree,
 "module_type_not_found_in_typedtree":module_type_not_found_in_typedtree,
 "module_not_found_in_typedtree":module_not_found_in_typedtree,
 "class_not_found_in_typedtree":class_not_found_in_typedtree,
 "class_type_not_found_in_typedtree":class_type_not_found_in_typedtree,
 "inherit_classexp_not_found_in_typedtree":
 inherit_classexp_not_found_in_typedtree,
 "attribute_not_found_in_typedtree":attribute_not_found_in_typedtree,
 "method_not_found_in_typedtree":method_not_found_in_typedtree,
 "misplaced_comment":misplaced_comment,
 "cross_module_not_found":cross_module_not_found,
 "cross_module_type_not_found":cross_module_type_not_found,
 "cross_module_or_module_type_not_found":cross_module_or_module_type_not_found,
 "cross_class_not_found":cross_class_not_found,
 "cross_class_type_not_found":cross_class_type_not_found,
 "cross_class_or_class_type_not_found":cross_class_or_class_type_not_found,
 "cross_extension_not_found":cross_extension_not_found,
 "cross_exception_not_found":cross_exception_not_found,
 "cross_element_not_found":cross_element_not_found,
 "cross_method_not_found":cross_method_not_found,
 "cross_attribute_not_found":cross_attribute_not_found,
 "cross_section_not_found":cross_section_not_found,
 "cross_value_not_found":cross_value_not_found,
 "cross_type_not_found":cross_type_not_found,
 "cross_recfield_not_found":cross_recfield_not_found,
 "cross_const_not_found":cross_const_not_found,
 "object_end":object_end,
 "struct_end":struct_end,
 "sig_end":sig_end,
 "current_generator_is_not":current_generator_is_not,
 "analysing":analysing,
 "merging":merging,
 "cross_referencing":cross_referencing,
 "generating_doc":generating_doc,
 "loading":loading,
 "file_generated":file_generated,
 "file_exists_dont_generate":file_exists_dont_generate,
 "modul":modul,
 "modules":modules,
 "functors":functors,
 "values":values,
 "types":types,
 "extensions":extensions,
 "exceptions":exceptions,
 "record":record,
 "variant":variant,
 "mutab":mutab,
 "functions":functions,
 "parameters":parameters,
 "abstract":abstract,
 "functo":functo,
 "clas":clas,
 "classes":classes,
 "attributes":attributes,
 "methods":methods,
 "authors":authors,
 "version":version,
 "since":since,
 "before":before,
 "deprecated":deprecated,
 "raises":raises,
 "returns":returns,
 "inherits":inherits,
 "inheritance":inheritance,
 "privat":privat,
 "module_type":module_type,
 "class_type":class_type,
 "description":description,
 "interface":interface,
 "type_parameters":type_parameters,
 "class_types":class_types,
 "module_types":module_types,
 "see_also":see_also,
 "documentation":documentation,
 "index_of":index_of,
 "top":top,
 "index_of_values":index_of_values,
 "index_of_extensions":index_of_extensions,
 "index_of_exceptions":index_of_exceptions,
 "index_of_types":index_of_types,
 "index_of_attributes":index_of_attributes,
 "index_of_methods":index_of_methods,
 "index_of_classes":index_of_classes,
 "index_of_class_types":index_of_class_types,
 "index_of_modules":index_of_modules,
 "index_of_module_types":index_of_module_types,
 "previous":previous,
 "next":next,
 "up":up};
