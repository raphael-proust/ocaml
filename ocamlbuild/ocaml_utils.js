// Generated CODE, PLEASE EDIT WITH CARE 

var Tools=require("./tools.js");
var Options=require("./options.js");
var Const=require("./const.js");
var Pervasives=require("./pervasives.js");
var Lexers=require("./lexers.js");
var Printf=require("./printf.js");
var Pathname=require("./pathname.js");
var Flags=require("./flags.js");
var Command=require("./command.js");
var Param_tags=require("./param_tags.js");
var Lexing=require("./lexing.js");
var My_std=require("./my_std.js");
var Tags=require("./tags.js");
var Hashtbl=require("./hashtbl.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$let=My_std["String"];

var S=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var
 flag_and_dep=
  function(tags,cmd_spec)
   {Flags["flag"](/* None */0,tags,cmd_spec);
    var
     ps=
      Command["fold_pathnames"]
       (function(p,ps){return /* :: */[0,p,ps]},
        /* Cmd */[1,cmd_spec],
        /* [] */0);
    
    return Command["dep"](tags,ps)};

var
 stdlib_dir=
  [246,
   function(param)
    {var
      ocamlc_where=
       Pathname["Operators"][1]
        (Options["build_dir"][1],Pathname["mk"]("ocamlc.where"));
     
     var
      match=
       Command["execute"]
        ([/* Some */0,/* true */1],
         /* None */0,
         /* Cmd */[1,
          /* S */[0,
           /* :: */[0,
            Options["ocamlc"][1],
            /* :: */[0,
             [/* A */1,"-where"],
             /* :: */[0,
              [/* Sh */4,">"],
              /* :: */[0,/* P */[2,ocamlc_where],/* [] */0]]]]]]);
     
     return My_std["String"][2](My_std["read_file"](ocamlc_where))}];

var
 pflag_and_dep=
  function(tags,ptag,cmd_spec)
   {return Param_tags["declare"]
            (ptag,
             function(param)
              {return flag_and_dep
                       (/* :: */[0,Param_tags["make"](ptag,param),tags],
                        cmd_spec(param))})};

var
 module_name_of_filename=
  function(f){return My_std["String"][38](Pathname["remove_extensions"](f))};

var
 module_name_of_pathname=
  function(x)
   {return module_name_of_filename
            (Pathname["to_string"](Pathname["basename"](x)))};

var
 ignore_stdlib=
  function(x)
   {if(Options["nostdlib"][1])
     {return /* false */0}
    else
     {var
       x$prime=
        Pathname["Operators"][1]
         (My_std["!*"](stdlib_dir),
          Pathname["Operators"][2](My_std["String"][39](x),"cmi"));
      
      return Pathname["exists"](x$prime)}
    };

var non_dependencies=[0,/* [] */0];

var
 non_dependency=
  function(m1,m2)
   {if(Pathname["get_extensions"](m1)["length"]===0)
     {Pervasives["invalid_arg"]("non_dependency: no extension")}
    
    return non_dependencies[1]=
           /* :: */[0,/* tuple */[0,m1,m2],non_dependencies[1]],
           0};

var
 path_importance=
  function(path,x)
   {if
     (My_std["List"][30](/* tuple */[0,path,x],non_dependencies[1])||
      My_std["List"][30](x,Options["ignore_list"][1]))
     {var
       match=
        Log["dprintf"]
         (3,
          [/* Format */0,
           [/* String_literal */11,
            "This module (",
            [/* String */2,
             /* No_padding */0,
             [/* String_literal */11,
              ") is ignored by ",
              [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
           "This module (%s) is ignored by %s"],
          x,
          path);
      
      return /* ignored */-589744366}
    else
     {return ignore_stdlib(x)?/* just_try */886832744:/* mandatory */-38817255}
    };

var
 expand_module=
  My_std["memo3"]
   (function(include_dirs,module_name,exts)
     {var dirname=Pathname["dirname"](module_name);
      
      var basename=Pathname["basename"](module_name);
      
      var
       module_name_cap=
        Pathname["Operators"][1](dirname,My_std["String"][38](basename));
      
      var
       module_name_uncap=
        Pathname["Operators"][1](dirname,My_std["String"][39](basename));
      
      return My_std["List"][20]
              (function(include_dir)
                {return My_std["List"][20]
                         (function(ext,acc)
                           {return /* :: */[0,
                                    Pathname["Operators"][1]
                                     (include_dir,
                                      Pathname["Operators"][2](module_name_uncap,ext)),
                                    /* :: */[0,
                                     Pathname["Operators"][1]
                                      (include_dir,Pathname["Operators"][2](module_name_cap,ext)),
                                     acc]]},
                          exts)},
               include_dirs,
               /* [] */0)});

var
 string_list_of_file=
  function(file)
   {return My_std["with_input_file"]
            (/* None */0,
             file,
             function(ic)
              {return Lexers["blank_sep_strings"]
                       (Const["Source"][1],Lexing["from_channel"](ic))})};

var print_path_list=Pathname["print_path_list"];

var
 ocaml_ppflags=
  function(tags)
   {var
     flags=
      Flags["of_tags"]
       (Tags["Operators"][1](Tags["Operators"][1](tags,"ocaml"),"pp"));
    
    var reduced=Command["reduce"](flags);
    
    return reduced===/* N */0
            ?/* N */0
            :/* S */[0,
              /* :: */[0,
               [/* A */1,"-pp"],
               /* :: */[0,/* Quote */[7,reduced],/* [] */0]]]};

var
 ocaml_add_include_flag=
  function(x,acc)
   {return CamlPrimitive["caml_string_equal"](x,Pathname["current_dir_name"])
            ?acc
            :/* :: */[0,[/* A */1,"-I"],/* :: */[0,/* A */[1,x],acc]]};

var
 ocaml_include_flags=
  function(path)
   {return /* S */[0,
            My_std["List"][20]
             (ocaml_add_include_flag,
              Pathname["include_dirs_of"](Pathname["dirname"](path)),
              /* [] */0)]};

var info_libraries=Hashtbl["create"](/* None */0,103);

var libraries=Hashtbl["create"](/* None */0,103);

var
 libraries_of=
  function(m)
   {try
     {return Hashtbl["find"](libraries,m)}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* [] */0}
      else
       {throw exn}
      }
    };

var
 use_lib=
  function(m,lib)
   {return Hashtbl["replace"](libraries,m,/* :: */[0,lib,libraries_of(m)])};

var
 ocaml_lib=
  function($staropt$star,$staropt$star,$staropt$star,dir,tag_name,libpath)
   {var extern=$staropt$star$1?$staropt$star$1[1]:/* false */0;
    
    var $$byte=$staropt$star$2?$staropt$star$2[1]:/* true */1;
    
    var $$native=$staropt$star?$staropt$star[1]:/* true */1;
    
    var
     add_dir=
      function(x)
       {return dir
                ?/* S */[0,
                  /* :: */[0,
                   [/* A */1,"-I"],
                   /* :: */[0,/* P */[2,dir[1]],/* :: */[0,x,/* [] */0]]]]
                :x};
    
    var
     tag_name$1=
      tag_name
       ?tag_name[1]
       :Pervasives["^"]("use_",Pathname["basename"](libpath));
    
    var
     flag_and_dep$1=
      function(tags,lib)
       {Flags["flag"](/* None */0,tags,add_dir(/* A */[1,lib]));
        return !extern?Command["dep"](tags,/* :: */[0,lib,/* [] */0]):0};
    
    Hashtbl["replace"]
     (info_libraries,tag_name$1,/* tuple */[0,libpath,extern]);
    Flags["mark_tag_used"](tag_name$1);
    if(extern)
     {if($$byte)
       {flag_and_dep$1
         (/* :: */[0,
           "ocaml",
           /* :: */[0,
            tag_name$1,
            [/* :: */0,"link",[/* :: */0,"byte",/* [] */0]]]],
          Pervasives["^"](libpath,".cma"))}
      
      if($$native)
       {flag_and_dep$1
         (/* :: */[0,
           "ocaml",
           /* :: */[0,
            tag_name$1,
            [/* :: */0,"link",[/* :: */0,"native",/* [] */0]]]],
          Pervasives["^"](libpath,".cmxa"))}
      }
    else
     {if(!$$byte&&!$$native)
       {Pervasives["invalid_arg"]
         ("ocaml_lib: ~byte:false or ~native:false only works with ~extern:true")}
      }
    
    if(dir)
     {var dir$1=dir[1];
      
      return My_std["List"][14]
              (function(x)
                {return Flags["flag"]
                         (/* None */0,
                          /* :: */[0,
                           "ocaml",
                           /* :: */[0,tag_name$1,/* :: */[0,x,/* [] */0]]],
                          /* S */[0,
                           /* :: */[0,
                            [/* A */1,"-I"],
                            /* :: */[0,/* P */[2,dir$1],/* [] */0]]])},
               [/* :: */0,
                "compile",
                [/* :: */0,"doc",[/* :: */0,"infer_interface",/* [] */0]]])}
    else
     {return /* () */0}
    };

var cmi_of=Pathname["update_extensions"]("cmi");

var
 Ocamldep_error=
  CamlPrimitive["caml_set_oo_id"]([248,"Ocaml_utils.Ocamldep_error",0]);

var path_dependencies=Hashtbl["create"](/* None */0,103);

var
 read_path_dependencies=
  function(path)
   {var module_name=module_name_of_pathname(path);
    
    var depends=Pathname["Operators"][2](path,"depends");
    
    return My_std["with_input_file"]
            (/* None */0,
             depends,
             function(ic)
              {var ocamldep_output;
               try
                {ocamldep_output=
                 Lexers["ocamldep_output"]
                  (Const["Source"][5],Lexing["from_channel"](ic));
                 }
               catch(exn)
                {if(exn[1]===Lexers["Error"])
                  {throw [0,
                          Ocamldep_error,
                          Printf["sprintf"]
                           ([/* Format */0,
                             [/* String_literal */11,
                              "Ocamldep.ocamldep: bad output (",
                              [/* String */2,
                               /* No_padding */0,
                               [/* Char_literal */12,41,/* End_of_format */0]]],
                             "Ocamldep.ocamldep: bad output (%s)"],
                            exn[2][1])]}
                 else
                  {throw exn}
                 }
               
               var
                deps=
                 My_std["List"][20]
                  (function(param,acc)
                    {var path$1=param[1];
                     
                     var module_name$prime=module_name_of_pathname(path$1);
                     
                     if
                      (CamlPrimitive["caml_string_equal"]
                        (module_name$prime,module_name))
                      {return My_std["List"][3](param[2],acc)}
                     else
                      {throw [0,
                              Ocamldep_error,
                              Printf["sprintf"]
                               ([/* Format */0,
                                 [/* String_literal */11,
                                  "Ocamldep.ocamldep: multiple files in ocamldep output (",
                                  [/* String */2,
                                   /* No_padding */0,
                                   [/* String_literal */11,
                                    " not expected)",
                                    /* End_of_format */0]]],
                                 "Ocamldep.ocamldep: multiple files in ocamldep output (%s not expected)"],
                                path$1)]}
                     },
                   ocamldep_output,
                   /* [] */0);
               
               var
                deps$1=
                 Options["nostdlib"][1]&&
                  !Tags["mem"]("nopervasives",Tools["tags_of_pathname"](path))
                  ?/* :: */[0,"Pervasives",deps]
                  :deps;
               
               var
                deps$prime=
                 My_std["List"][20]
                  (function(dep,acc)
                    {var importance=path_importance(path,dep);
                     
                     return importance>=-38817255
                             ?/* :: */[0,/* tuple */[0,importance,dep],acc]
                             :acc},
                   deps$1,
                   /* [] */0);
               
               var $js;
               try
                {$js=Hashtbl["find"](path_dependencies,path);}
               catch(exn$1)
                {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                  {$js=/* [] */0;}
                 else
                  {throw exn$1}
                 }
               Hashtbl["replace"]
                (path_dependencies,path,My_std["List"][3]($js,deps$prime));
               return deps$prime})};

var path_dependencies_of=My_std["memo"](read_path_dependencies);

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

