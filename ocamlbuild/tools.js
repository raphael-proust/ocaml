// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Format=require("Format");
var My_std=require("My_std");
var Tags=require("Tags");
var Configuration=require("Configuration");


var pp_l=My_std["List"][1](My_std["String"][1]);

var
 tags_of_pathname=
  function(p)
   {return Tags["Operators"][1]
            (Tags["Operators"][1]
              (Configuration["tags_of_filename"](Pathname["to_string"](p)),
               Pervasives["^"]("file:",p)),
             Pervasives["^"]("extension:",Pathname["get_extension"](p)));
    };

var
 opt_print=
  function(elt,ppf,param)
   {if(param)
     {return Format["fprintf"]
              (ppf,
               [/* Format */0,
                [/* Formatting_gen */18,
                 [/* Open_box */1,
                  [/* Format */0,
                   [/* String_literal */11,"<2>",/* End_of_format */0],
                   "<2>"]],
                 [/* String_literal */11,
                  "Some",
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     /* End_of_format */0]]]]],
                "@[<2>Some@ %a@]"],
               elt,
               param[1]);
      }
    else
     {return Format["pp_print_string"](ppf,"None");}
    };

var
 path_and_context_of_string=
  function(s)
   {if(Pathname["is_implicit"](s))
     {var b=Pathname["basename"](s);
      
      var d=Pathname["dirname"](s);
      
      if
       (CamlPrimtivie["caml_string_notequal"](d,Pathname["current_dir_name"]))
       {var match=Pathname["define_context"](d,/* :: */[0,d,/* [] */0]);
        
        return /* :: */[0,s,/* [] */0];
        }
      else
       {var include_dirs=Pathname["include_dirs_of"](d);
        
        return My_std["List"][16]
                (function(include_dir)
                  {return Pathname["Operators"][1](include_dir,b);},
                 include_dirs);
        }
      }
    else
     {return /* :: */[0,s,/* [] */0];}
    };

module["exports"]=
{"tags_of_pathname":tags_of_pathname,
 "path_and_context_of_string":path_and_context_of_string,
 "pp_l":pp_l};

