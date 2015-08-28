// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("./options.js");
var Scanf=require("./scanf.js");
var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Pathname=require("./pathname.js");
var Shell=require("./shell.js");
var My_std=require("./my_std.js");
var My_unix=require("./my_unix.js");
var Hashtbl=require("./hashtbl.js");
var CamlPrimitive=require("./camlPrimitive.js");


var digests=Hashtbl["create"](/* None */0,103);

var get=Hashtbl["find"](digests);

var put=Hashtbl["replace"](digests);

var
 _digests=
  [246,
   function(param)
    {return Pathname["Operators"][1]
             (Options["build_dir"][1],Pathname["mk"]("_digests"))}];

var
 finalize=
  function(param)
   {return My_std["with_output_file"]
            (/* None */0,
             My_std["!*"](_digests),
             function(oc)
              {return Hashtbl["iter"]
                       (function(name,digest)
                         {return Printf["fprintf"]
                                  (oc,
                                   [/* Format */0,
                                    [/* Caml_string */3,
                                     /* No_padding */0,
                                     [/* String_literal */11,
                                      ": ",
                                      [/* Caml_string */3,
                                       /* No_padding */0,
                                       [/* Char_literal */12,10,/* End_of_format */0]]]],
                                    "%S: %S\n"],
                                   name,
                                   digest)},
                        digests)})};

var
 init=
  function(param)
   {Shell["chdir"](Options["build_dir"][1]);
    if(Pathname["exists"](My_std["!*"](_digests)))
     {My_std["with_input_file"]
       (/* None */0,
        My_std["!*"](_digests),
        function(ic)
         {try
           {while(/* true */1)
             {var l=Pervasives["input_line"](ic);
              
              Scanf["sscanf"]
               (l,
                [/* Format */0,
                 [/* Caml_string */3,
                  /* No_padding */0,
                  [/* String_literal */11,
                   ": ",
                   [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]],
                 "%S: %S"],
                put)}
            return 0}
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["End_of_file"])
             {return /* () */0}
            else
             {throw exn}
            }
          })}
    
    return My_unix["at_exit_once"](finalize)};

module["exports"]={"init":init,"get":get,"put":put};

