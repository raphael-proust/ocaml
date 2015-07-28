var Options=require("Options");
var Pervasives=require("Pervasives");
var Format=require("Format");
var Shell=require("Shell");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Glob=require("Glob");
var include=Filename;
var current_dir_name=include[1];
var parent_dir_name=include[2];
var is_relative=include[5];
var is_implicit=include[6];
var chop_extension=include[9];
var basename=include[10];
var dirname=include[11];
var $js=My_std["List"][1];
var print_strings=$js(My_std["String"][1]);
var concat=My_std["filename_concat"];
var compare=function(x,y){return "unknown primitive:caml_string_compare"};
var print=Format["pp_print_string"];
var mk=function(s){return s};
var pwd="unknown primitive:caml_sys_getcwd";
var
 add_extension=
  function(ext,x)
   {var $js$1=Pervasives["^"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2(".",ext);
    return $js$1(x,$js$3)};
var
 check_extension=
  function(x,ext)
   {var lx=x["length"];
    var lext=ext["length"];
    var $js$1=My_std["String"][9];
    var $js$2=$js$1(x,ext);
    var $js$3=(x[lx-lext-1]=46)&&$js$2;
    return lx>lext+1&&$js$3};
var -.-=function(file,ext){return add_extension(ext,file)};
var Operators=[0,concat,-.-];
var equal=function(x,y){return "unknown primitive:caml_equal"};
var to_string=function(x){return x};
var is_link=Shell["is_link"];
var readlink=Shell["readlink"];
var
 is_directory=
  function(x)
   {try
     {var $js$1=My_unix["stat"];
      var $js$2=$js$1(x);
      var $js$3=$js$2[1];
      return $js$3=0}
    catch(exn)
     {var $js$4=exn[1]=Sys_error;
      if($js$4){return 0}else{return "unknown primitive:reraise"}}};
var
 readdir=
  function(x)
   {var $js$1=My_std["Outcome"][3];
    var $js$2=My_std["sys_readdir"];
    var $js$3=$js$2(x);
    return $js$1($js$3)};
var dir_seps=[0,47,[0,92,0]];
var $js$1=Glob["parse"];
var not_normal_form_re=$js$1(0,"<**/{,.,..}/**>");
var parent=function(x){return concat(parent_dir_name,x)};
var
 split=
  function(p)
   {var
     go=
      function(p$1,acc)
       {var dir=dirname(p$1);
        var $js$2="unknown primitive:caml_string_equal";
        if($js$2)
         {return [0,dir,acc]}
        else
         {var $js$3=basename(p$1);
          var $js$4=[0,$js$3,acc];
          return go(dir,$js$4)}};
    return go(p,0)};
var
 join=
  function(root,paths)
   {var $js$2="unknown primitive:caml_string_equal";
    if($js$2){var root$1=""}else{var root$1=root}
    var $js$3=My_std["List"][19];
    return $js$3(Operators[1],root$1,paths)};
var $js$2="unknown primitive:caml_string_equal";
if($js$2){var _H1=0}else{var _H1="unknown primitive:raise"}
var $js$3="unknown primitive:caml_string_equal";
if($js$3){var _H2=0}else{var _H2="unknown primitive:raise"}
var
 normalize_list=
  function(param)
   {var $js$4=param;
    if($js$4)
     {var x=param[1];
      var $js$5=x;
      if($js$5==".")
       {return normalize_list(param[2])}
      else
       if($js$5=="..")
        {var $js$6=Pervasives["failwith"];
         return $js$6("Pathname.normalize_list: .. is forbidden here")}
       else
        {var exit=38}
      switch(exit)
       {case 38:
         var xs=param[2];
         var $js$7=xs;
         if($js$7)
          {var $js$8=xs[1];
           if($js$8==".."){return normalize_list(xs[2])}else{var exit$1=39}}
         else
          {var exit$1=39}
         switch(exit$1)
          {case 39:var $js$9=normalize_list(xs);return [0,x,$js$9]}
        }}
    else
     {return 0}};
var
 normalize=
  function(x)
   {var $js$4=Glob["eval"];
    var $js$5=$js$4(not_normal_form_re,x);
    if($js$5)
     {var match=split(x);
      var $js$6=normalize_list(match[2]);
      return join(match[1],$js$6)}
    else
     {return x}};
var
 is_prefix=
  function(x,y)
   {var lx=x["length"];
    var ly=y["length"];
    var $js$4=lx=ly;
    if($js$4)
     {var $js$5=My_std["String"][3];
      var $js$6=$js$5(y,lx);
      return "unknown primitive:caml_string_equal"}
    else
     {var $js$7=lx<ly;
      if($js$7)
       {var $js$8=My_std["String"][3];
        var $js$9=$js$8(y,lx);
        var $js$10="unknown primitive:caml_string_equal";
        var $js$11=My_std["List"][30];
        var $js$12=$js$11(y[lx],dir_seps);
        return $js$10&&$js$12}
      else
       {return 0}}};
var
 link_to_dir=
  function(p,dir)
   {var $js$4=is_link(p);
    var $js$5=readlink(p);
    var $js$6=is_prefix(dir,$js$5);
    return $js$4&&$js$6};
var
 remove_extension=
  function(x)
   {try
     {return chop_extension(x)}
    catch(exn)
     {var $js$4=exn[1]=Invalid_argument;
      if($js$4){return x}else{return "unknown primitive:reraise"}}};
var
 get_extension=
  function(x)
   {try
     {var $js$4=My_std["String"][30];
      var pos=$js$4(x,46);
      var $js$5=My_std["String"][4];
      return $js$5(x,pos+1)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6){return ""}else{return "unknown primitive:reraise"}}};
var
 update_extension=
  function(ext,x){var $js$4=chop_extension(x);return add_extension(ext,$js$4)};
var
 chop_extensions=
  function(x)
   {var dirname$1=dirname(x);
    var basename$1=basename(x);
    try
     {var $js$4=My_std["String"][29];
      var pos=$js$4(basename$1,46);
      var $js$5=Operators[1];
      var $js$6=My_std["String"][3];
      var $js$7=$js$6(basename$1,pos);
      return $js$5(dirname$1,$js$7)}
    catch(exn)
     {var $js$8=exn=Not_found;
      if($js$8)
       {var $js$9=Pervasives["invalid_arg"];
        return $js$9("chop_extensions: no extensions")}
      else
       {return "unknown primitive:reraise"}}};
var
 remove_extensions=
  function(x)
   {try
     {return chop_extensions(x)}
    catch(exn)
     {var $js$4=exn[1]=Invalid_argument;
      if($js$4){return x}else{return "unknown primitive:reraise"}}};
var
 get_extensions=
  function(x)
   {var basename$1=basename(x);
    try
     {var $js$4=My_std["String"][29];
      var pos=$js$4(basename$1,46);
      var $js$5=My_std["String"][4];
      return $js$5(basename$1,pos+1)}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6){return ""}else{return "unknown primitive:reraise"}}};
var
 update_extensions=
  function(ext,x)
   {var $js$4=chop_extensions(x);return add_extension(ext,$js$4)};
var exists=My_std["sys_file_exists"];
var copy=Shell["cp"];
var remove=Shell["rm"];
var
 try_remove=
  function(x)
   {var $js$4=exists(x);
    if($js$4){var $js$5=Shell["rm"];return $js$5(x)}else{return 0}};
var read=My_std["read_file"];
var with_input_file=My_std["with_input_file"];
var with_output_file=My_std["with_output_file"];
var $js$4=My_std["List"][1];
var print_path_list=$js$4(print);
var $js$5=Hashtbl["create"];
var context_table=$js$5(0,107);
var
 include_dirs_of=
  function(dir)
   {try
     {var $js$6=Hashtbl["find"];return $js$6(context_table,dir)}
    catch(exn)
     {var $js$7=exn=Not_found;
      if($js$7)
       {var $js$8=My_std["List"][33];
        var
         $js$9=
          $js$8
           (function(dir'){return "unknown primitive:caml_string_notequal"},
            Options["include_dirs"][1]);
        return [0,dir,$js$9]}
      else
       {return "unknown primitive:reraise"}}};
var
 define_context=
  function(dir,context)
   {var $js$6="unknown primitive:caml_string_equal";
    if($js$6){var dir$1=current_dir_name}else{var dir$1=dir}
    var $js$7=My_std["&"];
    var $js$8=Hashtbl["replace"];
    var $js$9=$js$8(context_table,dir$1);
    var $js$10=My_std["&"];
    var $js$11=My_std["List"][3];
    var $js$12=$js$11(context);
    var $js$13=include_dirs_of(dir$1);
    var $js$14=$js$10($js$12,$js$13);
    return $js$7($js$9,$js$14)};
var
 same_contents=
  function(x,y)
   {var $js$6=My_std["Digest"][3];
    var $js$7=$js$6(x);
    var $js$8=My_std["Digest"][3];
    var $js$9=$js$8(y);
    return "unknown primitive:caml_string_equal"};
module["exports"]=
{"concat":concat,
 "compare":compare,
 "equal":equal,
 "exists":exists,
 "mk":mk,
 "define_context":define_context,
 "include_dirs_of":include_dirs_of,
 "copy":copy,
 "to_string":to_string,
 "print":print,
 "current_dir_name":current_dir_name,
 "parent_dir_name":parent_dir_name,
 "read":read,
 "same_contents":same_contents,
 "basename":basename,
 "dirname":dirname,
 "is_relative":is_relative,
 "readlink":readlink,
 "readdir":readdir,
 "is_link":is_link,
 "is_directory":is_directory,
 "add_extension":add_extension,
 "check_extension":check_extension,
 "get_extension":get_extension,
 "remove_extension":remove_extension,
 "update_extension":update_extension,
 "get_extensions":get_extensions,
 "remove_extensions":remove_extensions,
 "update_extensions":update_extensions,
 "print_path_list":print_path_list,
 "pwd":pwd,
 "parent":parent,
 "is_prefix":is_prefix,
 "is_implicit":is_implicit,
 "Operators":Operators,
 "link_to_dir":link_to_dir,
 "normalize":normalize};
