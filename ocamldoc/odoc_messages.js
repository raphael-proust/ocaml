// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Str=require("Str");
var Config=require("Config");
var Sys=require("Sys");


var ok="Ok";

var software="OCamldoc";

var config_version=Config["version"];

var magic=Pervasives["^"](config_version,"");

var
 usage=
  Pervasives["^"]
   ("Usage: ",Pervasives["^"](Sys["argv"][0]," [options] <files>\n"));

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

var
 add_load_dir=
  Pervasives["^"]
   ("<dir> Add the given directory to the search path for custom\n",
    "\t\tgenerators");

var
 load_file=
  "<file.cm[o|a|xs]> Load file defining a new documentation generator";

var werr=" Treat ocamldoc warnings as errors";

var hide_warnings=" do not print ocamldoc warnings";

var
 target_dir=
  Pervasives["^"]
   ("<dir> Generate files in directory <dir>, rather than in current\n",
    "\t\tdirectory (for man and HTML generators)");

var dump="<file> Dump collected information into <file>";

var load="<file> Load information from <file> ; may be used several times";

var
 css_style=
  Pervasives["^"]
   ("<file> Use content of <file> as CSS style definition ",html_only);

var index_only=Pervasives["^"](" Generate index files only ",html_only);

var
 colorize_code=
  Pervasives["^"](" Colorize code even in documentation pages ",html_only);

var
 html_short_functors=
  Pervasives["^"](" Use short form to display functor types ",html_only);

var
 charset=
  function(c)
   {return Printf["sprintf"]
            ([0,
              [11,
               "<s> Add information about character encoding being s\n\t\t(default is ",
               [2,0,[12,41,0]]],
              "<s> Add information about character encoding being s\n\t\t(default is %s)"],
             c);
    };

var generate_html=" Generate HTML documentation";

var generate_latex=" Generate LaTeX documentation";

var generate_texinfo=" Generate TeXinfo documentation";

var generate_man=" Generate man pages";

var generate_dot=" Generate dot code of top modules dependencies";

var
 option_not_in_native_code=
  function(op)
   {return Pervasives["^"]
            ("Option ",
             Pervasives["^"](op," not available in native code version."));
    };

var default_out_file="ocamldoc.out";

var
 out_file=
  Pervasives["^"]
   ("<file> Set the output file name, used by texi, latex and dot generators\n",
    Pervasives["^"]
     ("\t\t(default is ",
      Pervasives["^"]
       (default_out_file,
        Pervasives["^"]
         (")\n",
          Pervasives["^"]
           ("\t\tor the prefix of index files for the HTML generator\n",
            "\t\t(default is index)")))));

var
 dot_include_all=
  Pervasives["^"]
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

var
 dot_colors=
  Pervasives["^"]
   (" <c1,c2,...,cn>\n",
    Pervasives["^"]
     ("\t\tUse colors c1,c1,...,cn in the dot output\n",
      Pervasives["^"]
       ("\t\t(default list is ",
        Pervasives["^"]
         ($$String["concat"]
           (",\n\t\t",List["map"]($$String["concat"](","),default_dot_colors)),
          ")"))));

var
 dot_reduce=
  Pervasives["^"]
   (" Perform a transitive reduction on the selected dependency graph\n",
    "\t\tbefore the dot output");

var
 man_mini=
  Pervasives["^"]
   (" Generate man pages only for modules, module types, classes\n",
    Pervasives["^"]("\t\tand class types ",man_only));

var default_man_section="3";

var
 man_section=
  Pervasives["^"]
   ("<section> Use <section> in man page files ",
    Pervasives["^"]
     ("(default is ",
      Pervasives["^"]
       (default_man_section,
        Pervasives["^"](") ",Pervasives["^"](man_only,"\n")))));

var default_man_suffix=Pervasives["^"](default_man_section,"o");

var
 man_suffix=
  Pervasives["^"]
   ("<suffix> Use <suffix> for man page files ",
    Pervasives["^"]
     ("(default is ",
      Pervasives["^"]
       (default_man_suffix,
        Pervasives["^"](") ",Pervasives["^"](man_only,"\n")))));

var
 option_title=
  "<title> Use <title> as title for the generated documentation";

var
 option_intro=
  Pervasives["^"]
   ("<file> Use content of <file> as ocamldoc text to use as introduction\n",
    Pervasives["^"]("\t\t",html_latex_texi_only));

var
 with_parameter_list=
  Pervasives["^"]
   (" Display the complete list of parameters for functions and\n",
    Pervasives["^"]("\t\tmethods ",html_only));

var
 hide_modules=
  "<M1,M2.M3,...> Hide the given complete module names in generated doc";

var
 no_header=
  Pervasives["^"]
   (" Suppress header in generated documentation\n\t\t",latex_texi_only);

var
 no_trailer=
  Pervasives["^"]
   (" Suppress trailer in generated documentation\n\t\t",latex_texi_only);

var
 separate_files=
  Pervasives["^"](" Generate one file per toplevel module ",latex_only);

var
 latex_title=
  function(ref_titles)
   {return Pervasives["^"]
            ("n,style Associate {n } to the given sectionning style\n",
             Pervasives["^"]
              ("\t\t(e.g. 'section') in the latex output ",
               Pervasives["^"]
                (latex_only,
                 Pervasives["^"]
                  ("\n",
                   Pervasives["^"]
                    ("\t\tDefault sectionning is:\n\t\t",
                     $$String["concat"]
                      ("\n\t\t",
                       List["map"]
                        (function(param)
                          {return Printf["sprintf"]
                                   ([0,[12,32,[4,0,0,0,[11," -> ",[2,0,0]]]]," %d -> %s"],
                                    param[1],
                                    param[2]);
                           },
                         ref_titles[1])))))));
    };

var default_latex_value_prefix="val:";

var
 latex_value_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of values.\n",
      Pervasives["^"]
       ('\t\t(default is "',Pervasives["^"](default_latex_value_prefix,'")'))));

var default_latex_type_prefix="type:";

var
 latex_type_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of types.\n",
      Pervasives["^"]
       ('\t\t(default is "',Pervasives["^"](default_latex_type_prefix,'")'))));

var default_latex_type_elt_prefix="typeelt:";

var
 latex_type_elt_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of type elements.\n",
      Pervasives["^"]
       ('\t\t(default is "',
        Pervasives["^"](default_latex_type_elt_prefix,'")'))));

var default_latex_extension_prefix="extension:";

var
 latex_extension_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of extensions.\n",
      Pervasives["^"]
       ('\t\t(default is "',
        Pervasives["^"](default_latex_extension_prefix,'")'))));

var default_latex_exception_prefix="exception:";

var
 latex_exception_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of exceptions.\n",
      Pervasives["^"]
       ('\t\t(default is "',
        Pervasives["^"](default_latex_exception_prefix,'")'))));

var default_latex_module_prefix="module:";

var
 latex_module_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of modules.\n",
      Pervasives["^"]
       ('\t\t(default is "',Pervasives["^"](default_latex_module_prefix,'")'))));

var default_latex_module_type_prefix="moduletype:";

var
 latex_module_type_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of module types.\n",
      Pervasives["^"]
       ('\t\t(default is "',
        Pervasives["^"](default_latex_module_type_prefix,'")'))));

var default_latex_class_prefix="class:";

var
 latex_class_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of classes.\n",
      Pervasives["^"]
       ('\t\t(default is "',Pervasives["^"](default_latex_class_prefix,'")'))));

var default_latex_class_type_prefix="classtype:";

var
 latex_class_type_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of class types.\n",
      Pervasives["^"]
       ('\t\t(default is "',
        Pervasives["^"](default_latex_class_type_prefix,'")'))));

var default_latex_attribute_prefix="val:";

var
 latex_attribute_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of attributes.\n",
      Pervasives["^"]
       ('\t\t(default is "',
        Pervasives["^"](default_latex_attribute_prefix,'")'))));

var default_latex_method_prefix="method:";

var
 latex_method_prefix=
  Pervasives["^"]
   ("<string>\n",
    Pervasives["^"]
     ("\t\tUse <string> as prefix for the LaTeX labels of methods.\n",
      Pervasives["^"]
       ('\t\t(default is "',Pervasives["^"](default_latex_method_prefix,'")'))));

var no_toc=Pervasives["^"](" Do not generate table of contents ",latex_only);

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

var no_index=Pervasives["^"](" Do not build index for Info files ",texi_only);

var
 esc_8bits=
  Pervasives["^"](" Escape accentuated characters in Info files ",texi_only);

var
 info_section=
  Pervasives["^"](" Specify section of Info directory ",texi_only);

var info_entry=Pervasives["^"](" Specify Info directory entry ",texi_only);

var
 options_can_be=
  "<options> can be one or more of the following characters:";

var
 string_of_options_list=
  function(l)
   {return List["fold_left"]
            (function(acc,param)
              {return Pervasives["^"]
                       (acc,
                        Pervasives["^"]
                         ("\n\t\t",
                          Pervasives["^"]
                           ($$String["make"](1,param[1]),
                            Pervasives["^"]("  ",param[2]))));
               },
             "",
             l);
    };

var
 merge_options=
  Pervasives["^"]
   ("<options> specify merge options between .mli and .ml\n\t\t",
    Pervasives["^"]
     (options_can_be,
      string_of_options_list
       ([/* :: */0,
         merge_description,
         [/* :: */0,
          merge_author,
          [/* :: */0,
           merge_version,
           [/* :: */0,
            merge_see,
            [/* :: */0,
             merge_since,
             [/* :: */0,
              merge_before,
              [/* :: */0,
               merge_deprecated,
               [/* :: */0,
                merge_param,
                [/* :: */0,
                 merge_raised_exception,
                 [/* :: */0,
                  merge_return_value,
                  [/* :: */0,merge_custom,[/* :: */0,merge_all,0]]]]]]]]]]]])));

var help=" Display this list of options";

var warning="Warning";

var
 bad_magic_number=
  Pervasives["^"]
   ("Bad magic number for this ocamldoc dump!\n",
    "This dump was not created by this version of OCamldoc.");

var
 not_a_module_name=
  function(s){return Pervasives["^"](s," is not a valid module name");};

var
 load_file_error=
  function(f,e)
   {return Pervasives["^"]
            ("Error while loading file ",
             Pervasives["^"](f,Pervasives["^"](":\n",e)));
    };

var
 wrong_format=
  function(s)
   {return Pervasives["^"]('Wrong format for "',Pervasives["^"](s,'"'));};

var
 errors_occured=
  function(n)
   {return Pervasives["^"]
            (Pervasives["string_of_int"](n)," error(s) encountered");
    };

var parse_error="Parse error";

var
 text_parse_error=
  function(l,c,s)
   {var lines=Str["split"](Str["regexp_string"]("\n"),s);
    
    return Pervasives["^"]
            ("Syntax error in text:\n",
             Pervasives["^"]
              (s,
               Pervasives["^"]
                ("\n",
                 Pervasives["^"]
                  ("line ",
                   Pervasives["^"]
                    (Pervasives["string_of_int"](l),
                     Pervasives["^"]
                      (", character ",
                       Pervasives["^"]
                        (Pervasives["string_of_int"](c),
                         Pervasives["^"]
                          (":\n",
                           Pervasives["^"]
                            (List["nth"](lines,l),
                             Pervasives["^"]
                              ("\n",Pervasives["^"]($$String["make"](c,32),"^")))))))))));
    };

var
 file_not_found_in_paths=
  function(paths,name)
   {return Printf["sprintf"]
            ([0,
              [11,
               "No file ",
               [2,0,[11," found in the load paths: \n",[2,0,0]]]],
              "No file %s found in the load paths: \n%s"],
             name,
             $$String["concat"]("\n",paths));
    };

var
 tag_not_handled=
  function(tag)
   {return Pervasives["^"]
            ("Tag @",Pervasives["^"](tag," not handled by this generator"));
    };

var
 should_escape_at_sign=
  "The character @ has a special meaning in ocamldoc comments, for commands such as @raise or @since. If you want to write a single @, you must escape it as \@.";

var bad_tree="Incorrect tree structure.";

var
 not_a_valid_tag=
  function(s){return Pervasives["^"](s," is not a valid tag.");};

var
 fun_without_param=
  function(f)
   {return Pervasives["^"]
            ("Function ",Pervasives["^"](f," has no parameter."));
    };

var
 method_without_param=
  function(f)
   {return Pervasives["^"]("Method ",Pervasives["^"](f," has no parameter."));
    };

var
 anonymous_parameters=
  function(f)
   {return Pervasives["^"]
            ("Function ",Pervasives["^"](f," has anonymous parameters."));
    };

var
 function_colon=
  function(f){return Pervasives["^"]("Function ",Pervasives["^"](f,": "));};

var
 implicit_match_in_parameter=
  "Parameters contain implicit pattern matching.";

var
 unknown_extension=
  function(f)
   {return Pervasives["^"]
            ("Unknown extension for file ",Pervasives["^"](f,"."));
    };

var
 two_implementations=
  function(name)
   {return Pervasives["^"]
            ("There are two implementations of module ",
             Pervasives["^"](name,"."));
    };

var
 two_interfaces=
  function(name)
   {return Pervasives["^"]
            ("There are two interfaces of module ",Pervasives["^"](name,"."));
    };

var
 too_many_module_objects=
  function(name)
   {return Pervasives["^"]
            ("There are too many interfaces/implementation of module ",
             Pervasives["^"](name,"."));
    };

var
 extension_not_found_in_implementation=
  function(ext,m)
   {return Pervasives["^"]
            ("Extension ",
             Pervasives["^"]
              (ext,
               Pervasives["^"]
                (" was not found in implementation of module ",
                 Pervasives["^"](m,"."))));
    };

var
 exception_not_found_in_implementation=
  function(exc,m)
   {return Pervasives["^"]
            ("Exception ",
             Pervasives["^"]
              (exc,
               Pervasives["^"]
                (" was not found in implementation of module ",
                 Pervasives["^"](m,"."))));
    };

var
 type_not_found_in_implementation=
  function(exc,m)
   {return Pervasives["^"]
            ("Type ",
             Pervasives["^"]
              (exc,
               Pervasives["^"]
                (" was not found in implementation of module ",
                 Pervasives["^"](m,"."))));
    };

var
 module_not_found_in_implementation=
  function(m,m2)
   {return Pervasives["^"]
            ("Module ",
             Pervasives["^"]
              (m,
               Pervasives["^"]
                (" was not found in implementation of module ",
                 Pervasives["^"](m2,"."))));
    };

var
 value_not_found_in_implementation=
  function(v,m)
   {return Pervasives["^"]
            ("Value ",
             Pervasives["^"]
              (v,
               Pervasives["^"]
                (" was not found in implementation of module ",
                 Pervasives["^"](m,"."))));
    };

var
 class_not_found_in_implementation=
  function(c,m)
   {return Pervasives["^"]
            ("Class ",
             Pervasives["^"]
              (c,
               Pervasives["^"]
                (" was not found in implementation of module ",
                 Pervasives["^"](m,"."))));
    };

var
 attribute_not_found_in_implementation=
  function(a,c)
   {return Pervasives["^"]
            ("Attribute ",
             Pervasives["^"]
              (a,
               Pervasives["^"]
                (" was not found in implementation of class ",
                 Pervasives["^"](c,"."))));
    };

var
 method_not_found_in_implementation=
  function(m,c)
   {return Pervasives["^"]
            ("Method ",
             Pervasives["^"]
              (m,
               Pervasives["^"]
                (" was not found in implementation of class ",
                 Pervasives["^"](c,"."))));
    };

var
 different_types=
  function(t)
   {return Pervasives["^"]
            ("Definition of type ",
             Pervasives["^"]
              (t," doesn't match from interface to implementation."));
    };

var
 attribute_type_not_found=
  function(cl,att)
   {return Pervasives["^"]
            ("The type of the attribute ",
             Pervasives["^"]
              (att,
               Pervasives["^"]
                (" could not be found in the signature of class ",
                 Pervasives["^"](cl,"."))));
    };

var
 method_type_not_found=
  function(cl,met)
   {return Pervasives["^"]
            ("The type of the method ",
             Pervasives["^"]
              (met,
               Pervasives["^"]
                (" could not be found in the signature of class ",
                 Pervasives["^"](cl,"."))));
    };

var
 module_not_found=
  function(m,m2)
   {return Pervasives["^"]
            ("The module ",
             Pervasives["^"]
              (m2,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 module_type_not_found=
  function(m,mt)
   {return Pervasives["^"]
            ("The module type ",
             Pervasives["^"]
              (mt,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 value_not_found=
  function(m,v)
   {return Pervasives["^"]
            ("The value ",
             Pervasives["^"]
              (v,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 extension_not_found=
  function(m,e)
   {return Pervasives["^"]
            ("The extension ",
             Pervasives["^"]
              (e,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 exception_not_found=
  function(m,e)
   {return Pervasives["^"]
            ("The exception ",
             Pervasives["^"]
              (e,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 type_not_found=
  function(m,t)
   {return Pervasives["^"]
            ("The type ",
             Pervasives["^"]
              (t,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 class_not_found=
  function(m,c)
   {return Pervasives["^"]
            ("The class ",
             Pervasives["^"]
              (c,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 class_type_not_found=
  function(m,c)
   {return Pervasives["^"]
            ("The class type ",
             Pervasives["^"]
              (c,
               Pervasives["^"]
                (" could not be found in the signature of module ",
                 Pervasives["^"](m,"."))));
    };

var
 type_not_found_in_typedtree=
  function(t)
   {return Pervasives["^"]
            ("Type ",Pervasives["^"](t," was not found in typed tree."));
    };

var
 extension_not_found_in_typedtree=
  function(x)
   {return Pervasives["^"]
            ("Extension ",Pervasives["^"](x," was not found in typed tree."));
    };

var
 exception_not_found_in_typedtree=
  function(e)
   {return Pervasives["^"]
            ("Exception ",Pervasives["^"](e," was not found in typed tree."));
    };

var
 module_type_not_found_in_typedtree=
  function(mt)
   {return Pervasives["^"]
            ("Module type ",
             Pervasives["^"](mt," was not found in typed tree."));
    };

var
 module_not_found_in_typedtree=
  function(m)
   {return Pervasives["^"]
            ("Module ",Pervasives["^"](m," was not found in typed tree."));
    };

var
 class_not_found_in_typedtree=
  function(c)
   {return Pervasives["^"]
            ("Class ",Pervasives["^"](c," was not found in typed tree."));
    };

var
 class_type_not_found_in_typedtree=
  function(ct)
   {return Pervasives["^"]
            ("Class type ",
             Pervasives["^"](ct," was not found in typed tree."));
    };

var
 inherit_classexp_not_found_in_typedtree=
  function(n)
   {return Pervasives["^"]
            ("Inheritance class expression number ",
             Pervasives["^"]
              (Pervasives["string_of_int"](n)," was not found in typed tree."));
    };

var
 attribute_not_found_in_typedtree=
  function(att)
   {return Pervasives["^"]
            ("Class attribute ",
             Pervasives["^"](att," was not found in typed tree."));
    };

var
 method_not_found_in_typedtree=
  function(met)
   {return Pervasives["^"]
            ("Class method ",
             Pervasives["^"](met," was not found in typed tree."));
    };

var
 misplaced_comment=
  function(file,pos)
   {return Printf["sprintf"]
            ([0,
              [11,
               "Misplaced special comment in file ",
               [2,0,[11,", character ",[4,0,0,0,[12,46,0]]]]],
              "Misplaced special comment in file %s, character %d."],
             file,
             pos);
    };

var
 cross_module_not_found=
  function(n)
   {return Pervasives["^"]("Module ",Pervasives["^"](n," not found"));};

var
 cross_module_type_not_found=
  function(n)
   {return Pervasives["^"]("Module type ",Pervasives["^"](n," not found"));};

var
 cross_module_or_module_type_not_found=
  function(n)
   {return Pervasives["^"]
            ("Module or module type ",Pervasives["^"](n," not found"));
    };

var
 cross_class_not_found=
  function(n)
   {return Pervasives["^"]("Class ",Pervasives["^"](n," not found"));};

var
 cross_class_type_not_found=
  function(n)
   {return Pervasives["^"]("class type ",Pervasives["^"](n," not found"));};

var
 cross_class_or_class_type_not_found=
  function(n)
   {return Pervasives["^"]
            ("Class or class type ",Pervasives["^"](n," not found"));
    };

var
 cross_extension_not_found=
  function(n)
   {return Pervasives["^"]("Extension ",Pervasives["^"](n," not found"));};

var
 cross_exception_not_found=
  function(n)
   {return Pervasives["^"]("Exception ",Pervasives["^"](n," not found"));};

var
 cross_element_not_found=
  function(n)
   {return Pervasives["^"]("Element ",Pervasives["^"](n," not found"));};

var
 cross_method_not_found=
  function(n)
   {return Pervasives["^"]("Method ",Pervasives["^"](n," not found"));};

var
 cross_attribute_not_found=
  function(n)
   {return Pervasives["^"]("Attribute ",Pervasives["^"](n," not found"));};

var
 cross_section_not_found=
  function(n)
   {return Pervasives["^"]("Section ",Pervasives["^"](n," not found"));};

var
 cross_value_not_found=
  function(n)
   {return Pervasives["^"]("Value ",Pervasives["^"](n," not found"));};

var
 cross_type_not_found=
  function(n)
   {return Pervasives["^"]("Type ",Pervasives["^"](n," not found"));};

var
 cross_recfield_not_found=
  function(n)
   {return Printf["sprintf"]
            ([0,
              [11,"Record field ",[2,0,[11," not found",0]]],
              "Record field %s not found"],
             n);
    };

var
 cross_const_not_found=
  function(n)
   {return Printf["sprintf"]
            ([0,
              [11,"Constructor ",[2,0,[11," not found",0]]],
              "Constructor %s not found"],
             n);
    };

var object_end="object ... end";

var struct_end="struct ... end";

var sig_end="sig ... end";

var
 current_generator_is_not=
  function(kind)
   {return Printf["sprintf"]
            ([0,
              [11,"Current generator is not a ",[2,0,[11," generator",0]]],
              "Current generator is not a %s generator"],
             kind);
    };

var
 analysing=
  function(f)
   {return Pervasives["^"]("Analysing file ",Pervasives["^"](f,"..."));};

var merging="Merging...";

var cross_referencing="Cross referencing...";

var generating_doc="Generating documentation...";

var
 loading=
  function(f){return Pervasives["^"]("Loading ",Pervasives["^"](f,"..."));};

var
 file_generated=
  function(f)
   {return Pervasives["^"]("File ",Pervasives["^"](f," generated."));};

var
 file_exists_dont_generate=
  function(f)
   {return Pervasives["^"]
            ("File ",Pervasives["^"](f," exists, we don't generate it."));
    };

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

var $$abstract="Abstract";

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

var $$interface="Interface";

var type_parameters="Type parameters";

var class_types="Class types";

var module_types="Module types";

var see_also="See also";

var documentation="Documentation";

var index_of="Index of";

var top="Top";

var index_of_values=Pervasives["^"](index_of," values");

var index_of_extensions=Pervasives["^"](index_of," extensions");

var index_of_exceptions=Pervasives["^"](index_of," exceptions");

var index_of_types=Pervasives["^"](index_of," types");

var index_of_attributes=Pervasives["^"](index_of," class attributes");

var index_of_methods=Pervasives["^"](index_of," class methods");

var index_of_classes=Pervasives["^"](index_of," classes");

var index_of_class_types=Pervasives["^"](index_of," class types");

var index_of_modules=Pervasives["^"](index_of," modules");

var index_of_module_types=Pervasives["^"](index_of," module types");

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
 "abstract":$$abstract,
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
 "interface":$$interface,
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

