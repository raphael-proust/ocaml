// Generated CODE, PLEASE EDIT WITH CARE 

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

var print_strings=My_std["List"][1](My_std["String"][1]);

var concat=My_std["filename_concat"];

var compare=function(x,y){return "unknown primitive:caml_string_compare";};

var print=Format["pp_print_string"];

var mk=function(s){return s;};

var pwd="unknown primitive:caml_sys_getcwd";

var
 add_extension=
  function(ext,x){return Pervasives["^"](x,Pervasives["^"](".",ext));};

var
 check_extension=
  function(x,ext)
   {var lx=x["length"];
    
    var lext=ext["length"];
    
    return lx>lext+1&&(x[lx-lext-1]=46)&&My_std["String"][9](x,ext);
    };

var $neg$unknown$neg=function(file,ext){return add_extension(ext,file);};

var Operators=[0,concat,$neg$unknown$neg];

var equal=function(x,y){return "unknown primitive:caml_equal";};

var to_string=function(x){return x;};

var is_link=Shell["is_link"];

var readlink=Shell["readlink"];

var
 is_directory=
  function(x)
   {try
     {return My_unix["stat"](x)[1]=0;}
    catch(exn){if(exn[1]=Sys_error){return 0;}else{throw exn;}}
    };

var
 readdir=
  function(x){return My_std["Outcome"][3](My_std["sys_readdir"](x));};

var dir_seps=[0,47,[0,92,0]];

var not_normal_form_re=Glob["parse"](0,"<**/{,.,..}/**>");

var parent=function(x){return concat(parent_dir_name,x);};

var
 split=
  function(p)
   {var
     go=
      function(p$1,acc)
       {var dir=dirname(p$1);
        
        if("unknown primitive:caml_string_equal")
         {return [0,dir,acc];}
        else
         {return go(dir,[0,basename(p$1),acc]);}
        };
    
    return go(p,0);
    };

var
 join=
  function(root,paths)
   {if("unknown primitive:caml_string_equal")
     {var root$1="";}
    else
     {var root$1=root;}
    
    return My_std["List"][19](Operators[1],root$1,paths);
    };

if("unknown primitive:caml_string_equal")
 {var _H1=0;}
else
 {throw [0,Assert_failure,[0,"pathname.ml",74,10]];}

if("unknown primitive:caml_string_equal")
 {var _H2=0;}
else
 {throw [0,Assert_failure,[0,"pathname.ml",75,10]];}

var
 normalize_list=
  function(param)
   {if(param)
     {var x=param[1];
      
      var exit;
      
      switch(x)
       {case ".":return normalize_list(param[2]);
        case "..":
         return Pervasives["failwith"]
                 ("Pathname.normalize_list: .. is forbidden here");
         
        default:exit=38;}
      
      switch(exit)
       {case 38:
         var xs=param[2];
         
         var exit$1;
         
         if(xs)
          {switch(xs[1])
            {case "..":return normalize_list(xs[2]);default:exit$1=39;}
           }
         else
          {exit$1=39;}
         
         switch(exit$1){case 39:return [0,x,normalize_list(xs)];}
         
        }
      }
    else
     {return 0;}
    };

var
 normalize=
  function(x)
   {if(Glob["eval"](not_normal_form_re,x))
     {var match=split(x);return join(match[1],normalize_list(match[2]));}
    else
     {return x;}
    };

var
 is_prefix=
  function(x,y)
   {var lx=x["length"];
    
    var ly=y["length"];
    
    if(lx=ly)
     {return "unknown primitive:caml_string_equal";}
    else
     {if(lx<ly)
       {return "unknown primitive:caml_string_equal"&&
               My_std["List"][30](y[lx],dir_seps);
        }
      else
       {return 0;}
      }
    };

var
 link_to_dir=
  function(p,dir){return is_link(p)&&is_prefix(dir,readlink(p));};

var
 remove_extension=
  function(x)
   {try
     {return chop_extension(x);}
    catch(exn){if(exn[1]=Invalid_argument){return x;}else{throw exn;}}
    };

var
 get_extension=
  function(x)
   {try
     {var pos=My_std["String"][30](x,46);return My_std["String"][4](x,pos+1);}
    catch(exn){if(exn=Not_found){return "";}else{throw exn;}}
    };

var
 update_extension=
  function(ext,x){return add_extension(ext,chop_extension(x));};

var
 chop_extensions=
  function(x)
   {var dirname$1=dirname(x);
    
    var basename$1=basename(x);
    
    try
     {var pos=My_std["String"][29](basename$1,46);
      
      return Operators[1](dirname$1,My_std["String"][3](basename$1,pos));
      }
    catch(exn)
     {if(exn=Not_found)
       {return Pervasives["invalid_arg"]("chop_extensions: no extensions");}
      else
       {throw exn;}
      }
    };

var
 remove_extensions=
  function(x)
   {try
     {return chop_extensions(x);}
    catch(exn){if(exn[1]=Invalid_argument){return x;}else{throw exn;}}
    };

var
 get_extensions=
  function(x)
   {var basename$1=basename(x);
    
    try
     {var pos=My_std["String"][29](basename$1,46);
      
      return My_std["String"][4](basename$1,pos+1);
      }
    catch(exn){if(exn=Not_found){return "";}else{throw exn;}}
    };

var
 update_extensions=
  function(ext,x){return add_extension(ext,chop_extensions(x));};

var exists=My_std["sys_file_exists"];

var copy=Shell["cp"];

var remove=Shell["rm"];

var
 try_remove=
  function(x){if(exists(x)){return Shell["rm"](x);}else{return 0;}};

var read=My_std["read_file"];

var with_input_file=My_std["with_input_file"];

var with_output_file=My_std["with_output_file"];

var print_path_list=My_std["List"][1](print);

var context_table=Hashtbl["create"](0,107);

var
 include_dirs_of=
  function(dir)
   {try
     {return Hashtbl["find"](context_table,dir);}
    catch(exn)
     {if(exn=Not_found)
       {return [0,
                dir,
                My_std["List"][33]
                 (function(dir$prime)
                   {return "unknown primitive:caml_string_notequal";},
                  Options["include_dirs"][1])];
        }
      else
       {throw exn;}
      }
    };

var
 define_context=
  function(dir,context)
   {if("unknown primitive:caml_string_equal")
     {var dir$1=current_dir_name;}
    else
     {var dir$1=dir;}
    
    return My_std["&"]
            (Hashtbl["replace"](context_table,dir$1),
             My_std["&"](My_std["List"][3](context),include_dirs_of(dir$1)));
    };

var
 same_contents=
  function(x,y){return "unknown primitive:caml_string_equal";};

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

