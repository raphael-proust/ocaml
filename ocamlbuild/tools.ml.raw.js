var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Format=require("Format");
var My_std=require("My_std");
var Tags=require("Tags");
var Configuration=require("Configuration");
var $js=My_std["List"][1];
var pp_l=$js(My_std["String"][1]);
var
 tags_of_pathname=
  function(p)
   {var $js$1=Tags["Operators"][1];
    var $js$2=Tags["Operators"][1];
    var $js$3=Configuration["tags_of_filename"];
    var $js$4=Pathname["to_string"];
    var $js$5=$js$4(p);
    var $js$6=$js$3($js$5);
    var $js$7=Pervasives["^"];
    var $js$8=$js$7("file:",p);
    var $js$9=$js$2($js$6,$js$8);
    var $js$10=Pervasives["^"];
    var $js$11=Pathname["get_extension"];
    var $js$12=$js$11(p);
    var $js$13=$js$10("extension:",$js$12);
    return $js$1($js$9,$js$13)};
var
 opt_print=
  function(elt,ppf,param)
   {var $js$1=param;
    if($js$1)
     {var $js$2=Format["fprintf"];
      return $js$2
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<2>",0],"<2>"]],
                 [11,"Some",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                "@[<2>Some@ %a@]"],
               elt,
               param[1])}
    else
     {var $js$3=Format["pp_print_string"];return $js$3(ppf,"None")}};
var
 path_and_context_of_string=
  function(s)
   {var $js$1=Pathname["is_implicit"];
    var $js$2=$js$1(s);
    if($js$2)
     {var $js$3=Pathname["basename"];
      var b=$js$3(s);
      var $js$4=Pathname["dirname"];
      var d=$js$4(s);
      var $js$5="unknown primitive:caml_string_notequal";
      if($js$5)
       {var $js$6=Pathname["define_context"];
        var match=$js$6(d,[0,d,0]);
        return [0,s,0]}
      else
       {var $js$7=Pathname["include_dirs_of"];
        var include_dirs=$js$7(d);
        var $js$8=My_std["List"][16];
        return $js$8
                (function(include_dir)
                  {var $js$9=Pathname["Operators"][1];
                   return $js$9(include_dir,b)},
                 include_dirs)}}
    else
     {return [0,s,0]}};
module["exports"]=
{"tags_of_pathname":tags_of_pathname,
 "path_and_context_of_string":path_and_context_of_string,
 "pp_l":pp_l};
