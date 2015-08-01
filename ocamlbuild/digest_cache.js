var Options=require("Options");
var Scanf=require("Scanf");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Shell=require("Shell");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");

var digests=Hashtbl["create"](0,103);

var get=Hashtbl["find"](digests);

var put=Hashtbl["replace"](digests);

var
 _digests=
  [246,
   function(param)
    {return Pathname["Operators"][1]
             (Options["build_dir"][1],Pathname["mk"]("_digests"));
     }];

var
 finalize=
  function(param)
   {return My_std["with_output_file"]
            (0,
             My_std["!*"](_digests),
             function(oc)
              {return Hashtbl["iter"]
                       (function(name,digest)
                         {return Printf["fprintf"]
                                  (oc,
                                   [0,[3,0,[11,": ",[3,0,[12,10,0]]]],"%S: %S\n"],
                                   name,
                                   digest);
                          },
                        digests);
               });
    };

var
 init=
  function(param)
   {Shell["chdir"](Options["build_dir"][1]);
    if(Pathname["exists"](My_std["!*"](_digests)))
     {My_std["with_input_file"]
       (0,
        My_std["!*"](_digests),
        function(ic)
         {try
           {while(1)
             {var l=Pervasives["input_line"](ic);
              
              Scanf["sscanf"](l,[0,[3,0,[11,": ",[3,0,0]]],"%S: %S"],put)}
            return 0;
            }
          catch(exn){if(exn=End_of_file){return 0;}else{throw exn;}}
          })}
    else
     {}
    
    return My_unix["at_exit_once"](finalize);
    };


module["exports"]={"init":init,"get":get,"put":put};

