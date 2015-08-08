// Generated CODE, PLEASE EDIT WITH CARE 

var Const=require("Const");
var Ocamlbuild_where=require("Ocamlbuild_where");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Arg=require("Arg");
var Printf=require("Printf");
var Format=require("Format");
var Command=require("Command");
var Shell=require("Shell");
var Filename=require("Filename");
var Lexing=require("Lexing");
var My_std=require("My_std");
var Log=require("Log");
var Ocamlbuild_config=require("Ocamlbuild_config");
var $$Array=require("Array");
var Sys=require("Sys");


var version=Pervasives["^"]("ocamlbuild ",Sys["ocaml_version"]);

var entry=[0,0];

var project_root_dir=[0,0];

var
 build_dir=
  [0,Filename["concat"]("unknown primitive:caml_sys_getcwd","_build")];

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
   {var exit;
    
    switch(param)
     {case "menhir":exit=102;case "ocamlfind":exit=102;default:exit=103;}
    
    switch(exit){case 103:return 1;case 102:return 0;}
    };

var
 find_tool=
  function(cmd)
   {var dir=Ocamlbuild_where["bindir"];
    
    var core_tool=is_core_tool(cmd);
    
    var opt=Pervasives["^"](cmd,".opt");
    
    var search_in_path=My_std["memo"](Command["search_in_path"]);
    
    if(My_std["sys_file_exists"](dir[1]))
     {var $$long=My_std["filename_concat"](dir[1],cmd);
      
      var long_opt=Pervasives["^"]($$long,".opt");
      
      var
       choices=
        [/* :: */0,
         function(param)
          {if(Command["file_or_exe_exists"](long_opt))
            {return [/* Some */0,long_opt];}
           else
            {return 0;}
           },
         [/* :: */0,
          function(param)
           {if(Command["file_or_exe_exists"]($$long))
             {return [/* Some */0,$$long];}
            else
             {return 0;}
            },
          0]];
      
      var
       choices$prime=
        [/* :: */0,
         function(param)
          {try
            {var match=search_in_path(opt);return [/* Some */0,opt];}
           catch(exn)
            {if(exn=Not_found){return [/* Some */0,cmd];}else{throw exn;}}
           },
         0];
      
      if(core_tool)
       {var choices$1=Pervasives["@"](choices,choices$prime);}
      else
       {var choices$1=Pervasives["@"](choices$prime,choices);}
      
      try
       {var
         match=
          My_std["List"][32]
           (function(choice){return !(choice(0)=0);},choices$1,0);
        
        if(match){return match[1];}else{throw Not_found;}
        }
      catch(exn)
       {if(exn=Not_found)
         {return Pervasives["failwith"]
                  (Printf["sprintf"]
                    ([0,[11,"Can't find tool: ",[2,0,0]],"Can't find tool: %s"],
                     cmd));
          }
        else
         {throw exn;}
        }
      }
    else
     {try
       {var match$1=search_in_path(opt);return opt;}
      catch(exn$1){if(exn$1=Not_found){return cmd;}else{throw exn$1;}}
      }
    };

var
 mk_virtual_solvers=
  My_std["List"][14]
   (function(cmd)
     {var solver=function(param){return [/* A */1,find_tool(cmd)];};
      
      return Command["setup_virtual_command_solver"]
              (My_std["String"][36](cmd),solver);
      });

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

var
 ocamlfind=
  function(arg)
   {return [/* S */0,[/* :: */0,ocamlfind_cmd[1],[/* :: */0,arg,0]]];};

var program_to_execute=[0,0];

var must_clean=[0,0];

var show_documentation=[0,0];

var recursive=[0,0];

var ext_lib=[0,Ocamlbuild_config["a"]];

var ext_obj=[0,Ocamlbuild_config["o"]];

var s=Ocamlbuild_config["ext_dll"];

var ext_dll=[0,My_std["String"][19](s,1,s["length"]-1)];

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

var
 my_include_dirs=
  [0,[/* :: */0,[/* :: */0,Filename["current_dir_name"],0],0]];

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
    return ocamlrun[1]=[1,"jocamlrun"],0;
    };

var
 add_to=
  function(rxs,x)
   {var
     xs=
      Lexers["comma_or_blank_sep_strings"]
       (Const["Source"][2],Lexing["from_string"](x));
    
    return rxs[1]=[/* :: */0,xs,rxs[1]],0;
    };

var
 add_to$prime=
  function(rxs,x)
   {if("unknown primitive:caml_string_notequal")
     {return rxs[1]=[/* :: */0,[/* :: */0,x,0],rxs[1]],0;}
    else
     {return 0;}
    };

var
 set_cmd=
  function(rcmd)
   {return [/* String */4,function(s$1){return rcmd[1]=[/* Sh */4,s$1],0;}];};

var
 set_build_dir=
  function(s$1)
   {make_links[1]=0,0;
    if(Filename["is_relative"](s$1))
     {return build_dir[1]=
             Filename["concat"]("unknown primitive:caml_sys_getcwd",s$1),
             0;
      }
    else
     {return build_dir[1]=s$1,0;}
    };

var
 spec=
  [0,
   Arg["align"]
    (0,
     [/* :: */0,
      [/* tuple */0,
       "-version",
       [/* Unit */0,
        function(param)
         {Pervasives["print_endline"](version);throw My_std["Exit_OK"];}],
       " Display the version"],
      [/* :: */0,
       [/* tuple */0,
        "-vnum",
        [/* Unit */0,
         function(param)
          {Pervasives["print_endline"](Sys["ocaml_version"]);
           throw My_std["Exit_OK"];
           }],
        " Display the version number"],
       [/* :: */0,
        [/* tuple */0,
         "-quiet",
         [/* Unit */0,function(param){return Log["level"][1]=0,0;}],
         " Make as quiet as possible"],
        [/* :: */0,
         [/* tuple */0,
          "-verbose",
          [/* Int */6,
           function(i)
            {Log["classic_display"][1]=1,0;return Log["level"][1]=i+2,0;}],
          "<level> Set the verbosity level"],
         [/* :: */0,
          [/* tuple */0,
           "-documentation",
           [/* Set */2,show_documentation],
           " Show rules and flags"],
          [/* :: */0,
           [/* tuple */0,
            "-log",
            [/* Set_string */5,log_file_internal],
            "<file> Set log file"],
           [/* :: */0,
            [/* tuple */0,
             "-no-log",
             [/* Unit */0,function(param){return log_file_internal[1]="",0;}],
             " No log file"],
            [/* :: */0,
             [/* tuple */0,
              "-clean",
              [/* Set */2,must_clean],
              " Remove build directory and other files, then exit"],
             [/* :: */0,
              [/* tuple */0,
               "-r",
               [/* Set */2,recursive],
               " Traverse directories by default (true: traverse)"],
              [/* :: */0,
               [/* tuple */0,
                "-I",
                [/* String */4,add_to$prime(my_include_dirs)],
                "<path> Add to include directories"],
               [/* :: */0,
                [/* tuple */0,
                 "-Is",
                 [/* String */4,add_to(my_include_dirs)],
                 "<path,...> (same as above, but accepts a (comma or blank)-separated list)"],
                [/* :: */0,
                 [/* tuple */0,
                  "-X",
                  [/* String */4,add_to$prime(my_exclude_dirs)],
                  "<path> Directory to ignore"],
                 [/* :: */0,
                  [/* tuple */0,
                   "-Xs",
                   [/* String */4,add_to(my_exclude_dirs)],
                   "<path,...> (idem)"],
                  [/* :: */0,
                   [/* tuple */0,
                    "-lib",
                    [/* String */4,add_to$prime(ocaml_libs_internal)],
                    "<flag> Link to this ocaml library"],
                   [/* :: */0,
                    [/* tuple */0,
                     "-libs",
                     [/* String */4,add_to(ocaml_libs_internal)],
                     "<flag,...> (idem)"],
                    [/* :: */0,
                     [/* tuple */0,
                      "-mod",
                      [/* String */4,add_to$prime(ocaml_mods_internal)],
                      "<module> Link to this ocaml module"],
                     [/* :: */0,
                      [/* tuple */0,
                       "-mods",
                       [/* String */4,add_to(ocaml_mods_internal)],
                       "<module,...> (idem)"],
                      [/* :: */0,
                       [/* tuple */0,
                        "-pkg",
                        [/* String */4,add_to$prime(ocaml_pkgs_internal)],
                        "<package> Link to this ocaml findlib package"],
                       [/* :: */0,
                        [/* tuple */0,
                         "-pkgs",
                         [/* String */4,add_to(ocaml_pkgs_internal)],
                         "<package,...> (idem)"],
                        [/* :: */0,
                         [/* tuple */0,
                          "-package",
                          [/* String */4,add_to$prime(ocaml_pkgs_internal)],
                          "<package> (idem)"],
                         [/* :: */0,
                          [/* tuple */0,
                           "-syntax",
                           [/* String */4,
                            function(syntax)
                             {return ocaml_syntax[1]=[/* Some */0,syntax],0;}],
                           "<syntax> Specify syntax using ocamlfind"],
                          [/* :: */0,
                           [/* tuple */0,
                            "-lflag",
                            [/* String */4,add_to$prime(ocaml_lflags_internal)],
                            "<flag> Add to ocamlc link flags"],
                           [/* :: */0,
                            [/* tuple */0,
                             "-lflags",
                             [/* String */4,add_to(ocaml_lflags_internal)],
                             "<flag,...> (idem)"],
                            [/* :: */0,
                             [/* tuple */0,
                              "-cflag",
                              [/* String */4,add_to$prime(ocaml_cflags_internal)],
                              "<flag> Add to ocamlc compile flags"],
                             [/* :: */0,
                              [/* tuple */0,
                               "-cflags",
                               [/* String */4,add_to(ocaml_cflags_internal)],
                               "<flag,...> (idem)"],
                              [/* :: */0,
                               [/* tuple */0,
                                "-docflag",
                                [/* String */4,add_to$prime(ocaml_docflags_internal)],
                                "<flag> Add to ocamldoc flags"],
                               [/* :: */0,
                                [/* tuple */0,
                                 "-docflags",
                                 [/* String */4,add_to(ocaml_docflags_internal)],
                                 "<flag,...> (idem)"],
                                [/* :: */0,
                                 [/* tuple */0,
                                  "-yaccflag",
                                  [/* String */4,add_to$prime(ocaml_yaccflags_internal)],
                                  "<flag> Add to ocamlyacc flags"],
                                 [/* :: */0,
                                  [/* tuple */0,
                                   "-yaccflags",
                                   [/* String */4,add_to(ocaml_yaccflags_internal)],
                                   "<flag,...> (idem)"],
                                  [/* :: */0,
                                   [/* tuple */0,
                                    "-lexflag",
                                    [/* String */4,add_to$prime(ocaml_lexflags_internal)],
                                    "<flag> Add to ocamllex flags"],
                                   [/* :: */0,
                                    [/* tuple */0,
                                     "-lexflags",
                                     [/* String */4,add_to(ocaml_lexflags_internal)],
                                     "<flag,...> (idem)"],
                                    [/* :: */0,
                                     [/* tuple */0,
                                      "-ppflag",
                                      [/* String */4,add_to$prime(ocaml_ppflags_internal)],
                                      "<flag> Add to ocaml preprocessing flags"],
                                     [/* :: */0,
                                      [/* tuple */0,
                                       "-pp",
                                       [/* String */4,add_to(ocaml_ppflags_internal)],
                                       "<flag,...> (idem)"],
                                      [/* :: */0,
                                       [/* tuple */0,
                                        "-tag",
                                        [/* String */4,add_to$prime(tags_internal)],
                                        "<tag> Add to default tags"],
                                       [/* :: */0,
                                        [/* tuple */0,
                                         "-tags",
                                         [/* String */4,add_to(tags_internal)],
                                         "<tag,...> (idem)"],
                                        [/* :: */0,
                                         [/* tuple */0,
                                          "-plugin-tag",
                                          [/* String */4,add_to$prime(plugin_tags_internal)],
                                          "<tag> Use this tag when compiling the myocamlbuild.ml plugin"],
                                         [/* :: */0,
                                          [/* tuple */0,
                                           "-plugin-tags",
                                           [/* String */4,add_to(plugin_tags_internal)],
                                           "<tag,...> (idem)"],
                                          [/* :: */0,
                                           [/* tuple */0,
                                            "-tag-line",
                                            [/* String */4,add_to$prime(tag_lines_internal)],
                                            "<tag> Use this line of tags (as in _tags)"],
                                           [/* :: */0,
                                            [/* tuple */0,
                                             "-show-tags",
                                             [/* String */4,add_to$prime(show_tags_internal)],
                                             "<path> Show tags that applies on that pathname"],
                                            [/* :: */0,
                                             [/* tuple */0,
                                              "-ignore",
                                              [/* String */4,add_to(ignore_list_internal)],
                                              "<module,...> Don't try to build these modules"],
                                             [/* :: */0,
                                              [/* tuple */0,
                                               "-no-links",
                                               [/* Clear */3,make_links],
                                               " Don't make links of produced final targets"],
                                              [/* :: */0,
                                               [/* tuple */0,
                                                "-no-skip",
                                                [/* Clear */3,ignore_auto],
                                                " Don't skip modules that are requested by ocamldep but cannot be built"],
                                               [/* :: */0,
                                                [/* tuple */0,
                                                 "-no-hygiene",
                                                 [/* Clear */3,hygiene],
                                                 " Don't apply sanity-check rules"],
                                                [/* :: */0,
                                                 [/* tuple */0,
                                                  "-no-plugin",
                                                  [/* Clear */3,plugin],
                                                  " Don't build myocamlbuild.ml"],
                                                 [/* :: */0,
                                                  [/* tuple */0,
                                                   "-no-stdlib",
                                                   [/* Set */2,nostdlib],
                                                   " Don't ignore stdlib modules"],
                                                  [/* :: */0,
                                                   [/* tuple */0,
                                                    "-dont-catch-errors",
                                                    [/* Clear */3,catch_errors],
                                                    " Don't catch and display exceptions (useful to display the call stack)"],
                                                   [/* :: */0,
                                                    [/* tuple */0,
                                                     "-just-plugin",
                                                     [/* Set */2,just_plugin],
                                                     " Just build myocamlbuild.ml"],
                                                    [/* :: */0,
                                                     [/* tuple */0,
                                                      "-byte-plugin",
                                                      [/* Clear */3,native_plugin],
                                                      " Don't use a native plugin but bytecode"],
                                                     [/* :: */0,
                                                      [/* tuple */0,
                                                       "-plugin-option",
                                                       [/* String */4,function(prim){return 0;}],
                                                       " Use the option only when plugin is run"],
                                                      [/* :: */0,
                                                       [/* tuple */0,
                                                        "-sanitization-script",
                                                        [/* Set_string */5,sanitization_script],
                                                        " Change the file name for the generated sanitization script"],
                                                       [/* :: */0,
                                                        [/* tuple */0,
                                                         "-no-sanitize",
                                                         [/* Clear */3,sanitize],
                                                         " Do not generate sanitization script"],
                                                        [/* :: */0,
                                                         [/* tuple */0,
                                                          "-nothing-should-be-rebuilt",
                                                          [/* Set */2,nothing_should_be_rebuilt],
                                                          " Fail if something needs to be rebuilt"],
                                                         [/* :: */0,
                                                          [/* tuple */0,
                                                           "-classic-display",
                                                           [/* Set */2,Log["classic_display"]],
                                                           " Display executed commands the old-fashioned way"],
                                                          [/* :: */0,
                                                           [/* tuple */0,
                                                            "-use-menhir",
                                                            [/* Set */2,use_menhir],
                                                            " Use menhir instead of ocamlyacc"],
                                                           [/* :: */0,
                                                            [/* tuple */0,
                                                             "-use-jocaml",
                                                             [/* Unit */0,use_jocaml],
                                                             " Use jocaml compilers instead of ocaml ones"],
                                                            [/* :: */0,
                                                             [/* tuple */0,
                                                              "-use-ocamlfind",
                                                              [/* Set */2,use_ocamlfind],
                                                              " Use the 'ocamlfind' wrapper instead of using Findlib directly to determine command-line arguments. Use -no-ocamlfind to disable."],
                                                             [/* :: */0,
                                                              [/* tuple */0,
                                                               "-no-ocamlfind",
                                                               [/* Clear */3,use_ocamlfind],
                                                               " Don't use ocamlfind."],
                                                              [/* :: */0,
                                                               [/* tuple */0,
                                                                "-j",
                                                                [/* Set_int */7,Command["jobs"]],
                                                                "<N> Allow N jobs at once (0 for unlimited)"],
                                                               [/* :: */0,
                                                                [/* tuple */0,
                                                                 "-build-dir",
                                                                 [/* String */4,set_build_dir],
                                                                 "<path> Set build directory (implies no-links)"],
                                                                [/* :: */0,
                                                                 [/* tuple */0,
                                                                  "-install-lib-dir",
                                                                  [/* Set_string */5,Ocamlbuild_where["libdir"]],
                                                                  "<path> Set the install library directory"],
                                                                 [/* :: */0,
                                                                  [/* tuple */0,
                                                                   "-install-bin-dir",
                                                                   [/* Set_string */5,Ocamlbuild_where["bindir"]],
                                                                   "<path> Set the install binary directory"],
                                                                  [/* :: */0,
                                                                   [/* tuple */0,
                                                                    "-where",
                                                                    [/* Unit */0,
                                                                     function(param)
                                                                      {Pervasives["print_endline"](Ocamlbuild_where["libdir"][1]);
                                                                       throw My_std["Exit_OK"];
                                                                       }],
                                                                    " Display the install library directory"],
                                                                   [/* :: */0,
                                                                    [/* tuple */0,
                                                                     "-which",
                                                                     [/* String */4,
                                                                      function(cmd)
                                                                       {Pervasives["print_endline"](find_tool(cmd));
                                                                        throw My_std["Exit_OK"];
                                                                        }],
                                                                     "<command> Display path to the tool command"],
                                                                    [/* :: */0,
                                                                     [/* tuple */0,
                                                                      "-ocamlc",
                                                                      set_cmd(ocamlc),
                                                                      "<command> Set the OCaml bytecode compiler"],
                                                                     [/* :: */0,
                                                                      [/* tuple */0,
                                                                       "-ocamlopt",
                                                                       set_cmd(ocamlopt),
                                                                       "<command> Set the OCaml native compiler"],
                                                                      [/* :: */0,
                                                                       [/* tuple */0,
                                                                        "-ocamldep",
                                                                        set_cmd(ocamldep),
                                                                        "<command> Set the OCaml dependency tool"],
                                                                       [/* :: */0,
                                                                        [/* tuple */0,
                                                                         "-ocamldoc",
                                                                         set_cmd(ocamldoc),
                                                                         "<command> Set the OCaml documentation generator"],
                                                                        [/* :: */0,
                                                                         [/* tuple */0,
                                                                          "-ocamlyacc",
                                                                          set_cmd(ocamlyacc),
                                                                          "<command> Set the ocamlyacc tool"],
                                                                         [/* :: */0,
                                                                          [/* tuple */0,
                                                                           "-menhir",
                                                                           set_cmd(ocamlyacc),
                                                                           "<command> Set the menhir tool (use it after -use-menhir)"],
                                                                          [/* :: */0,
                                                                           [/* tuple */0,
                                                                            "-ocamllex",
                                                                            set_cmd(ocamllex),
                                                                            "<command> Set the ocamllex tool"],
                                                                           [/* :: */0,
                                                                            [/* tuple */0,
                                                                             "-ocamlmklib",
                                                                             set_cmd(ocamlmklib),
                                                                             "<command> Set the ocamlmklib tool"],
                                                                            [/* :: */0,
                                                                             [/* tuple */0,
                                                                              "-ocamlmktop",
                                                                              set_cmd(ocamlmktop),
                                                                              "<command> Set the ocamlmktop tool"],
                                                                             [/* :: */0,
                                                                              [/* tuple */0,
                                                                               "-ocamlrun",
                                                                               set_cmd(ocamlrun),
                                                                               "<command> Set the ocamlrun tool"],
                                                                              [/* :: */0,
                                                                               [/* tuple */0,
                                                                                "--",
                                                                                [/* Rest */12,
                                                                                 function(x)
                                                                                  {program_to_execute[1]=1,0;
                                                                                   return add_to$prime(program_args_internal,x);
                                                                                   }],
                                                                                " Stop argument processing, remaining arguments are given to the user program"],
                                                                               0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]])];

var
 add=
  function(x){return spec[1]=Pervasives["@"](spec[1],[/* :: */0,x,0]),0;};

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
   {var anon_fun=add_to$prime(targets_internal);
    
    var
     usage_msg=
      Format["sprintf"]
       ([0,
         [11,"Usage ",[2,0,[11," [options] <target>",0]]],
         "Usage %s [options] <target>"],
        Sys["argv"][0]);
    
    var
     argv$prime=
      $$Array["concat"]([/* :: */0,Sys["argv"],[/* :: */0,[dummy],0]]);
    
    Arg["parse_argv"](0,argv$prime,spec[1],anon_fun,usage_msg);
    Shell["mkdir_p"](build_dir[1]);
    project_root_dir[1]=[/* Some */0,"unknown primitive:caml_sys_getcwd"],0;
    var log=log_file_internal[1];
    
    if("unknown primitive:caml_string_equal")
     {var match$1=Log["init"](0);}
    else
     {if(!Filename["is_implicit"](log))
       {var
         match$1=
          Pervasives["failwith"]
           (Format["sprintf"]
             ([0,
               [11,
                "Bad log file name: the file name must be implicit (not ",
                [3,0,[12,41,0]]],
               "Bad log file name: the file name must be implicit (not %S)"],
              log));
        }
      else
       {var log$1=My_std["filename_concat"](build_dir[1],log);
        
        Shell["mkdir_p"](Filename["dirname"](log$1));
        Shell["rm_f"](log$1);
        if(Log["level"][1]>0)
         {var log$2=[/* Some */0,log$1];}
        else
         {var log$2=0;}
        
        var match$1=Log["init"](log$2);
        }
      }
    
    if(use_ocamlfind[1])
     {try
       {}
      catch(exn)
       {if(exn=Not_found)
         {Pervasives["failwith"]
           ("ocamlfind not found on path, but -no-ocamlfind not used")}
        else
         {throw exn;}
        }
      
      var
       with_ocamlfind=
        function(param$1)
         {var command_ref=param$1[2];
          
          var match$2=command_ref[1];
          
          var exit;
          
          var $js;
          if(typeof match$2=="number")
           {switch(match$2){}}
          else
           {switch(match$2[0])
             {case 4:$js=My_std["&"](ocamlfind,[/* Sh */4,match$2[1]]);
              default:exit=8;}}
          
          var $js$1;
          switch(exit)
           {case 8:$js$1=My_std["&"](ocamlfind,[/* A */1,param$1[1]]);}
          return command_ref[1]=$js$1,0;
          };
      
      My_std["List"][14]
       (with_ocamlfind,
        [/* :: */0,
         [/* tuple */0,"ocamlc",ocamlc],
         [/* :: */0,
          [/* tuple */0,"ocamlopt",ocamlopt],
          [/* :: */0,
           [/* tuple */0,"ocamldep",ocamldep],
           [/* :: */0,
            [/* tuple */0,"ocamldoc",ocamldoc],
            [/* :: */0,
             [/* tuple */0,"ocamlmklib",ocamlmklib],
             [/* :: */0,[/* tuple */0,"ocamlmktop",ocamlmktop],0]]]]]])}
    else
     {}
    
    var
     reorder=
      function(x,y)
       {return x[1]=
               Pervasives["@"]
                (x[1],My_std["List"][12](My_std["List"][9](y[1]))),
               0;
        };
    
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
       {if(Filename["is_implicit"](dir))
         {return My_std["sys_file_exists"](dir);}
        else
         {return Pervasives["failwith"]
                  (Format["sprintf"]
                    ([0,
                      [11,
                       "Included or excluded directories must be implicit (not ",
                       [3,0,[12,41,0]]],
                      "Included or excluded directories must be implicit (not %S)"],
                     dir));
          }
        };
    
    var
     dir_reorder=
      function(my,dir)
       {var d=dir[1];
        
        reorder(dir,my);
        return dir[1]=
               My_std["List"][33](check_dir,Pervasives["@"](dir[1],d)),
               0;
        };
    
    dir_reorder(my_include_dirs,include_dirs);
    dir_reorder(my_exclude_dirs,exclude_dirs);
    return ignore_list[1]=
           My_std["List"][16](My_std["String"][38],ignore_list[1]),
           0;
    };

var
 ocamlbuild_project_heuristic=
  function(param)
   {var match$1=project_root_dir[1];
    
    if(match$1)
     {var root_dir=match$1[1];}
    else
     {var root_dir="unknown primitive:caml_sys_getcwd";}
    
    var at_root=function(file){return Filename["concat"](root_dir,file);};
    
    return "unknown primitive:caml_sys_file_exists"||
           "unknown primitive:caml_sys_file_exists";
    };

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

