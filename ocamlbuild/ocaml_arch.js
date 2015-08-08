// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Format=require("Format");
var My_std=require("My_std");
var Hashtbl=require("Hashtbl");


var dir=function(name,contents){return [/* Arch_dir */0,name,0,contents];};

var
 dir_pack=
  function(name,contents){return [/* Arch_dir_pack */1,name,0,contents];};

var file=function(name){return [/* Arch_file */2,name,0];};

var
 join_pack=
  function(parent,base)
   {if("unknown primitive:caml_string_equal")
     {return base;}
    else
     {return Pervasives["^"](parent,Pervasives["^"](".",base));}
    };

var
 annotate=
  function(arch)
   {var
     $$self=
      function(arch$1,acc)
       {switch(arch$1)
         {case 0:
           var name=arch$1[1];
           
           var match=self_contents(name,arch$1[3],acc);
           
           return [/* tuple */0,
                   [/* :: */0,match[1],match[2]],
                   [/* Arch_dir */0,name,match[3],My_std["List"][9](match[4])]];
           
          case 1:
           var name$1=arch$1[1];
           
           var acc$1=[/* record */0,acc[1],acc[2],join_pack(acc[3],name$1)];
           
           var match$1=self_contents(name$1,arch$1[3],acc$1);
           
           return [/* tuple */0,
                   0,
                   [/* Arch_dir_pack */1,
                    name$1,
                    match$1[3],
                    My_std["List"][9](match$1[4])]];
           
          case 2:return [/* tuple */0,0,[/* Arch_file */2,arch$1[1],acc]];
          }
        };
    
    var
     self_contents=
      function(name,contents,acc)
       {var current_path=Pathname["Operators"][1](acc[1],name);
        
        if("unknown primitive:caml_string_equal")
         {var include_dirs=acc[2];}
        else
         {var include_dirs=[/* :: */0,current_path,acc[2]];}
        
        var i=[/* record */0,current_path,include_dirs,acc[3]];
        
        var
         match=
          My_std["List"][19]
           (function(param,x)
             {var include_dirs$1=param[1];
              
              var
               j=
                [/* record */0,i[1],Pervasives["@"](include_dirs$1,i[2]),i[3]];
              
              var match$1=$$self(x,j);
              
              return [/* tuple */0,
                      Pervasives["@"](include_dirs$1,match$1[1]),
                      [/* :: */0,match$1[2],param[2]]];
              },
            [0,0,0],
            contents);
        
        return [/* tuple */0,current_path,match[1],i,match[2]];
        };
    
    var init=[0,"",0,""];
    
    return $$self(arch,init)[2];
    };

var
 print=
  function(print_info,f)
   {var
     print_contents=
      function(f$1,param)
       {if(param)
         {return Format["fprintf"]
                  (f$1,
                   [0,[17,[0,"@ ",1,0],[15,[15,0]]],"@ %a%a"],
                   print(print_info),
                   param[1],
                   print_contents,
                   param[2]);
          }
        else
         {return 0;}
        };
    
    return function(param)
     {switch(param)
       {case 0:
         return Format["fprintf"]
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
                  param[3]);
         
        case 1:
         return Format["fprintf"]
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
                  param[3]);
         
        case 2:
         return Format["fprintf"]
                 (f,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,"file ",[3,0,[15,[17,0,0]]]]],
                   "@[<2>file %S%a@]"],
                  param[1],
                  print_info,
                  param[2]);
         
        }
      };
    };

var print_include_dirs=My_std["List"][1](My_std["String"][1]);

var
 print_info=
  function(f,i)
   {return Format["fprintf"]
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
             i[3]);
    };

var
 iter_info=
  function(f,param)
   {var exit;
    
    switch(param){case 0:exit=17;case 1:exit=17;case 2:return f(param[2]);}
    
    switch(exit)
     {case 17:f(param[2]);return My_std["List"][14](iter_info(f),param[3]);}
    };

var
 fold_info=
  function(f,arch,acc)
   {var exit;
    
    switch(arch){case 0:exit=15;case 1:exit=15;case 2:return f(arch[2],acc);}
    
    switch(exit)
     {case 15:return My_std["List"][20](fold_info(f),arch[3],f(arch[2],acc));}
    };

var $$let=My_std["String"];

var SS=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var
 iter_include_dirs=
  function(arch)
   {var
     set=
      fold_info
       (function(i){return My_std["List"][20](SS[4],i[2]);},arch,SS[1]);
    
    return function(f){return SS[13](f,set);};
    };

var forpack_flags_of_pathname=[0,function(param){return 0;}];

var
 print_table=
  function(print_value,f,table)
   {Format["fprintf"]
     (f,
      [0,
       [18,
        [1,[0,[11,"<hv0>",0],"<hv0>"]],
        [11,"{:",[18,[1,[0,[11,"<hv0>",0],"<hv0>"]],0]]],
       "@[<hv0>{:@[<hv0>"]);
    Hashtbl["iter"]
     (function(k,v)
       {if("unknown primitive:caml_string_notequal")
         {return Format["fprintf"]
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
                   v);
          }
        else
         {return 0;}
        },
      table);
    return Format["fprintf"]
            (f,[0,[17,0,[17,[0,"@ ",1,0],[11,":}",[17,0,0]]]],"@]@ :}@]"]);
    };

var
 print_tables=
  function(f,param)
   {return Format["fprintf"]
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
             print_table(My_std["List"][1](My_std["String"][1])),
             param[1],
             print_table(My_std["String"][1]),
             param[2]);
    };

var
 mk_tables=
  function(arch)
   {var include_dirs_table=Hashtbl["create"](0,17);
    
    var for_pack_table=Hashtbl["create"](0,17);
    
    iter_info
     (function(i)
       {Hashtbl["replace"](include_dirs_table,i[1],i[2]);
        return Hashtbl["replace"](for_pack_table,i[1],i[3]);
        },
      arch);
    var previous_forpack_flags_of_pathname=forpack_flags_of_pathname[1];
    
    forpack_flags_of_pathname[1]=
    function(m)
     {var m$prime=Pathname["dirname"](m);
      
      try
       {var for_pack=Hashtbl["find"](for_pack_table,m$prime);
        
        if("unknown primitive:caml_string_equal")
         {return 0;}
        else
         {return [/* S */0,
                  [/* :: */0,
                   [1,"-for-pack"],
                   [/* :: */0,[/* A */1,for_pack],0]]];
          }
        }
      catch(exn)
       {if(exn=Not_found)
         {return previous_forpack_flags_of_pathname(m);}
        else
         {throw exn;}
        }
      },
    0;
    return [/* tuple */0,include_dirs_table,for_pack_table];
    };

var
 forpack_flags_of_pathname$1=
  function(m){return forpack_flags_of_pathname[1](m);};

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

