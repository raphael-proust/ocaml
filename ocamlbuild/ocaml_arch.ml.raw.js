var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Format=require("Format");
var My_std=require("My_std");
var Hashtbl=require("Hashtbl");
var dir=function(name,contents){return [0,name,0,contents]};
var dir_pack=function(name,contents){return [1,name,0,contents]};
var file=function(name){return [2,name,0]};
var
 join_pack=
  function(parent,base)
   {var $js="unknown primitive:caml_string_equal";
    if($js)
     {return base}
    else
     {var $js$1=Pervasives["^"];
      var $js$2=Pervasives["^"];
      var $js$3=$js$2(".",base);
      return $js$1(parent,$js$3)}};
var
 annotate=
  function(arch)
   {var
     self=
      function(arch$1,acc)
       {var $js=arch$1;
        if($js==0)
         {var name=arch$1[1];
          var match=self_contents(name,arch$1[3],acc);
          var $js$1=My_std["List"][9];
          var $js$2=$js$1(match[4]);
          var $js$3=[0,name,match[3],$js$2];
          return [0,[0,match[1],match[2]],$js$3]}
        else
         if($js==1)
          {var name$1=arch$1[1];
           var $js$4=join_pack(acc[3],name$1);
           var acc$1=[0,acc[1],acc[2],$js$4];
           var match$1=self_contents(name$1,arch$1[3],acc$1);
           var $js$5=My_std["List"][9];
           var $js$6=$js$5(match$1[4]);
           var $js$7=[1,name$1,match$1[3],$js$6];
           return [0,0,$js$7]}
         else
          if($js==2){return [0,0,[2,arch$1[1],acc]]}};
    var
     self_contents=
      function(name,contents,acc)
       {var $js=Pathname["Operators"][1];
        var current_path=$js(acc[1],name);
        var $js$1="unknown primitive:caml_string_equal";
        if($js$1)
         {var include_dirs=acc[2]}
        else
         {var include_dirs=[0,current_path,acc[2]]}
        var i=[0,current_path,include_dirs,acc[3]];
        var $js$2=My_std["List"][19];
        var
         match=
          $js$2
           (function(param,x)
             {var include_dirs$1=param[1];
              var $js$3=Pervasives["@"];
              var $js$4=$js$3(include_dirs$1,i[2]);
              var j=[0,i[1],$js$4,i[3]];
              var match$1=self(x,j);
              var $js$5=Pervasives["@"];
              var $js$6=$js$5(include_dirs$1,match$1[1]);
              return [0,$js$6,[0,match$1[2],param[2]]]},
            [0,0,0],
            contents);
        return [0,current_path,match[1],i,match[2]]};
    var init=[0,"",0,""];
    var $js=self(arch,init);
    return $js[2]};
var
 print=
  function(print_info,f)
   {var
     print_contents=
      function(f$1,param)
       {var $js=param;
        if($js)
         {var $js$1=Format["fprintf"];
          var $js$2=print(print_info);
          return $js$1
                  (f$1,
                   [0,[17,[0,"@ ",1,0],[15,[15,0]]],"@ %a%a"],
                   $js$2,
                   param[1],
                   print_contents,
                   param[2])}
        else
         {return 0}};
    return function(param)
     {var $js=param;
      if($js==0)
       {var $js$1=Format["fprintf"];
        return $js$1
                (f,
                 [0,
                  [18,
                   [1,[0,[11,"<v2>",0],"<v2>"]],
                   [11,"dir ",[3,0,[15,[15,[17,0,0]]]]]],
                  "@[<v2>dir %S%a%a@]"],
                 param[1],
                 print_info,
                 param[2],
                 print_contents,
                 param[3])}
      else
       if($js==1)
        {var $js$2=Format["fprintf"];
         return $js$2
                 (f,
                  [0,
                   [18,
                    [1,[0,[11,"<v2>",0],"<v2>"]],
                    [11,"dir_pack ",[3,0,[15,[15,[17,0,0]]]]]],
                   "@[<v2>dir_pack %S%a%a@]"],
                  param[1],
                  print_info,
                  param[2],
                  print_contents,
                  param[3])}
       else
        if($js==2)
         {var $js$3=Format["fprintf"];
          return $js$3
                  (f,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [11,"file ",[3,0,[15,[17,0,0]]]]],
                    "@[<2>file %S%a@]"],
                   param[1],
                   print_info,
                   param[2])}}};
var $js=My_std["List"][1];
var print_include_dirs=$js(My_std["String"][1]);
var
 print_info=
  function(f,i)
   {var $js$1=Format["fprintf"];
    return $js$1
            (f,
             [0,
              [17,
               [0,"@ ",1,0],
               [18,
                [1,[0,[11,"<v2>",0],"<v2>"]],
                [11,
                 "{ ",
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "current_path =",
                   [17,
                    [0,"@ ",1,0],
                    [3,
                     0,
                     [17,
                      0,
                      [12,
                       59,
                       [17,
                        [0,"@ ",1,0],
                        [18,
                         [1,[0,[11,"<2>",0],"<2>"]],
                         [11,
                          "include_dirs =",
                          [17,
                           [0,"@ ",1,0],
                           [15,
                            [17,
                             0,
                             [12,
                              59,
                              [17,
                               [0,"@ ",1,0],
                               [18,
                                [1,[0,[11,"<2>",0],"<2>"]],
                                [11,
                                 "for_pack =",
                                 [17,[0,"@ ",1,0],[3,0,[17,0,[11," }",[17,0,0]]]]]]]]]]]]]]]]]]]]]]]],
              "@ @[<v2>{ @[<2>current_path =@ %S@];@ @[<2>include_dirs =@ %a@];@ @[<2>for_pack =@ %S@] }@]"],
             i[1],
             print_include_dirs,
             i[2],
             i[3])};
var
 iter_info=
  function(f,param)
   {var $js$1=param;
    if($js$1==0)
     {var exit=17}
    else
     if($js$1==1){var exit=17}else if($js$1==2){return f(param[2])}
    switch(exit)
     {case 17:
       f(param[2]);
       var $js$2=My_std["List"][14];
       var $js$3=iter_info(f);
       return $js$2($js$3,param[3])
      }};
var
 fold_info=
  function(f,arch,acc)
   {var $js$1=arch;
    if($js$1==0)
     {var exit=15}
    else
     if($js$1==1){var exit=15}else if($js$1==2){return f(arch[2],acc)}
    switch(exit)
     {case 15:
       var $js$2=My_std["List"][20];
       var $js$3=fold_info(f);
       var $js$4=f(arch[2],acc);
       return $js$2($js$3,arch[3],$js$4)
      }};
var $js$1=My_std["Set"][1];
var let=My_std["String"];
var $js$2=[0,let[40],let[1]];
var SS=$js$1($js$2);
var
 iter_include_dirs=
  function(arch)
   {var
     set=
      fold_info
       (function(i){var $js$3=My_std["List"][20];return $js$3(SS[4],i[2])},
        arch,
        SS[1]);
    return function(f){var $js$3=SS[13];return $js$3(f,set)}};
var forpack_flags_of_pathname=[0,function(param){return 0}];
var
 print_table=
  function(print_value,f,table)
   {var $js$3=Format["fprintf"];
    $js$3
     (f,
      [0,
       [18,
        [1,[0,[11,"<hv0>",0],"<hv0>"]],
        [11,"{:",[18,[1,[0,[11,"<hv0>",0],"<hv0>"]],0]]],
       "@[<hv0>{:@[<hv0>"]);
    var $js$4=Hashtbl["iter"];
    $js$4
     (function(k,v)
       {var $js$5="unknown primitive:caml_string_notequal";
        if($js$5)
         {var $js$6=Format["fprintf"];
          return $js$6
                  (f,
                   [0,
                    [17,
                     [0,"@ ",1,0],
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [3,0,[11," =>",[17,[0,"@ ",1,0],[15,[17,0,[12,59,0]]]]]]]],
                    "@ @[<2>%S =>@ %a@];"],
                   k,
                   print_value,
                   v)}
        else
         {return 0}},
      table);
    var $js$5=Format["fprintf"];
    return $js$5(f,[0,[17,0,[17,[0,"@ ",1,0],[11,":}",[17,0,0]]]],"@]@ :}@]"])};
var
 print_tables=
  function(f,param)
   {var $js$3=Format["fprintf"];
    var $js$4=My_std["List"][1];
    var $js$5=$js$4(My_std["String"][1]);
    var $js$6=print_table($js$5);
    var $js$7=print_table(My_std["String"][1]);
    return $js$3
            (f,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [18,
                [1,[0,[11,"<2>",0],"<2>"]],
                [11,
                 "include_dirs_table:",
                 [17,
                  [0,"@ ",1,0],
                  [15,
                   [17,
                    0,
                    [12,
                     59,
                     [17,
                      [0,"@ ",1,0],
                      [18,
                       [1,[0,[11,"<2>",0],"<2>"]],
                       [11,"for_pack_table: ",[15,[17,0,[17,0,0]]]]]]]]]]]]],
              "@[<2>@[<2>include_dirs_table:@ %a@];@ @[<2>for_pack_table: %a@]@]"],
             $js$6,
             param[1],
             $js$7,
             param[2])};
var
 mk_tables=
  function(arch)
   {var $js$3=Hashtbl["create"];
    var include_dirs_table=$js$3(0,17);
    var $js$4=Hashtbl["create"];
    var for_pack_table=$js$4(0,17);
    iter_info
     (function(i)
       {var $js$5=Hashtbl["replace"];
        $js$5(include_dirs_table,i[1],i[2]);
        var $js$6=Hashtbl["replace"];
        return $js$6(for_pack_table,i[1],i[3])},
      arch);
    var previous_forpack_flags_of_pathname=forpack_flags_of_pathname[1];
    forpack_flags_of_pathname[1]=
    function(m)
     {var $js$5=Pathname["dirname"];
      var m'=$js$5(m);
      try
       {var $js$6=Hashtbl["find"];
        var for_pack=$js$6(for_pack_table,m');
        var $js$7="unknown primitive:caml_string_equal";
        if($js$7)
         {return 0}
        else
         {return [0,[0,[1,"-for-pack"],[0,[1,for_pack],0]]]}}
      catch(exn)
       {var $js$8=exn=Not_found;
        if($js$8)
         {return previous_forpack_flags_of_pathname(m)}
        else
         {return "unknown primitive:reraise"}}},
    0;
    return [0,include_dirs_table,for_pack_table]};
var
 forpack_flags_of_pathname$1=
  function(m){var $js$3=forpack_flags_of_pathname[1];return $js$3(m)};
module["exports"]=
{"dir":dir,
 "dir_pack":dir_pack,
 "file":file,
 "annotate":annotate,
 "print":print,
 "print_include_dirs":print_include_dirs,
 "print_info":print_info,
 "iter_info":iter_info,
 "fold_info":fold_info,
 "iter_include_dirs":iter_include_dirs,
 "mk_tables":mk_tables,
 "print_table":print_table,
 "forpack_flags_of_pathname":forpack_flags_of_pathname$1};
