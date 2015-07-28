var Options=require("Options");
var Scanf=require("Scanf");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Shell=require("Shell");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var $js=Hashtbl["create"];
var digests=$js(0,103);
var $js$1=Hashtbl["find"];
var get=$js$1(digests);
var $js$2=Hashtbl["replace"];
var put=$js$2(digests);
var
 _digests=
  [246,
   function(param)
    {var $js$3=Pathname["Operators"][1];
     var $js$4=Pathname["mk"];
     var $js$5=$js$4("_digests");
     return $js$3(Options["build_dir"][1],$js$5)}];
var
 finalize=
  function(param)
   {var $js$3=My_std["with_output_file"];
    var $js$4=My_std["!*"];
    var $js$5=$js$4(_digests);
    return $js$3
            (0,
             $js$5,
             function(oc)
              {var $js$6=Hashtbl["iter"];
               return $js$6
                       (function(name,digest)
                         {var $js$7=Printf["fprintf"];
                          return $js$7
                                  (oc,
                                   [0,[3,0,[11,": ",[3,0,[12,10,0]]]],"%S: %S\n"],
                                   name,
                                   digest)},
                        digests)})};
var
 init=
  function(param)
   {var $js$3=Shell["chdir"];
    $js$3(Options["build_dir"][1]);
    var $js$4=Pathname["exists"];
    var $js$5=My_std["!*"];
    var $js$6=$js$5(_digests);
    var $js$7=$js$4($js$6);
    if($js$7)
     {var $js$8=My_std["with_input_file"];
      var $js$9=My_std["!*"];
      var $js$10=$js$9(_digests);
      $js$8
       (0,
        $js$10,
        function(ic)
         {try
           {for(;;)
             {var $js$11=1;
              if($js$11)
               {var $js$12=Pervasives["input_line"];
                var l=$js$12(ic);
                var $js$13=Scanf["sscanf"];
                $js$13(l,[0,[3,0,[11,": ",[3,0,0]]],"%S: %S"],put)}
              else
               break}
            return 0}
          catch(exn)
           {var $js$14=exn=End_of_file;
            if($js$14){return 0}else{return "unknown primitive:reraise"}}})}
    else
     {}
    var $js$11=My_unix["at_exit_once"];
    return $js$11(finalize)};
module["exports"]={"init":init,"get":get,"put":put};
