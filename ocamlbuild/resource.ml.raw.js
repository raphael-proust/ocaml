var Options=require("Options");
var Const=require("Const");
var Slurp=require("Slurp");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Format=require("Format");
var Digest_cache=require("Digest_cache");
var Command=require("Command");
var Shell=require("Shell");
var Buffer=require("Buffer");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var Glob=require("Glob");
var $js=My_std["Set"][1];
var let=Pathname;
var $js$1=[0,let[2],let[10]];
var Resources=$js($js$1);
var print=Pathname["print"];
var equal=function(prim,prim$1){return "unknown primitive:caml_equal"};
var compare=function(prim,prim$1){return "unknown primitive:caml_compare"};
var
 in_source_dir=
  function(p)
   {var $js$2=Pathname["is_implicit"];
    var $js$3=$js$2(p);
    if($js$3)
     {var $js$4=Pathname["Operators"][1];return $js$4(Pathname["pwd"],p)}
    else
     {var $js$5=Pervasives["invalid_arg"];
      var $js$6=Printf["sprintf"];
      var
       $js$7=
        $js$6([0,[11,"in_source_dir: ",[3,0,0]],"in_source_dir: %S"],p);
      return $js$5($js$7)}};
var
 in_build_dir=
  function(p)
   {var $js$2=Pathname["is_relative"];
    var $js$3=$js$2(p);
    if($js$3)
     {return p}
    else
     {var $js$4=Pervasives["invalid_arg"];
      var $js$5=Printf["sprintf"];
      var $js$6=$js$5([0,[11,"in_build_dir: ",[3,0,0]],"in_build_dir: %S"],p);
      return $js$4($js$6)}};
var
 clean_up_links=
  function(entry)
   {var $js$2=!Options["make_links"][1];
    if($js$2)
     {return entry}
    else
     {var $js$3=Slurp["filter"];
      return $js$3
              (function(path,name,param)
                {var $js$4=Pathname["Operators"][1];
                 var $js$5=$js$4(path,name);
                 var pathname=in_source_dir($js$5);
                 var $js$6=Pathname["link_to_dir"];
                 var $js$7=$js$6(pathname,Options["build_dir"][1]);
                 if($js$7)
                  {var $js$8=Pathname["readlink"];
                   var z=$js$8(pathname);
                   var $js$9=!"unknown primitive:caml_sys_file_exists";
                   if($js$9){var $js$10=Shell["rm"];$js$10(pathname)}else{}
                   return 0}
                 else
                  {return 1}},
               entry)}};
var
 clean_up_link_to_build=
  function(param)
   {var $js$2=My_std["the"];
    var $js$3=$js$2(Options["entry"][1]);
    var $js$4=clean_up_links($js$3);
    var $js$5=[0,$js$4];
    return Options["entry"][1]=$js$5,0};
var
 source_dir_path_set_without_links_to_build=
  [246,
   function(param)
    {clean_up_link_to_build(0);
     var $js$2=Slurp["fold"];
     var $js$3=My_std["the"];
     var $js$4=$js$3(Options["entry"][1]);
     return $js$2
             (function(path,name,param$1)
               {var $js$5=My_std["StringSet"][4];
                var $js$6=Pathname["Operators"][1];
                var $js$7=$js$6(path,name);
                return $js$5($js$7)},
              $js$4,
              My_std["StringSet"][1])}];
var
 clean_links=
  function(param)
   {var $js$2=My_std["!*"];
    var $js$3=$js$2(My_unix["is_degraded"]);
    if($js$3){return 0}else{var $js$4=clean_up_link_to_build(0);return 0}};
var
 exists_in_source_dir=
  function(p)
   {var $js$2=My_std["!*"];
    var $js$3=$js$2(My_unix["is_degraded"]);
    if($js$3)
     {var $js$4=My_std["sys_file_exists"];
      var $js$5=in_source_dir(p);
      return $js$4($js$5)}
    else
     {var $js$6=My_std["StringSet"][3];
      var $js$7=My_std["!*"];
      var $js$8=$js$7(source_dir_path_set_without_links_to_build);
      return $js$6(p,$js$8)}};
var clean=function(p){var $js$2=Shell["rm_f"];return $js$2(p)};
var
 clean$1=
  function(param)
   {var $js$2=Shell["chdir"];
    $js$2(Pathname["pwd"]);
    var $js$3=Shell["rm_rf"];
    return $js$3(Options["build_dir"][1])};
var empty=function(param){return [0,2,2,Resources[1]]};
var
 print_knowledge=
  function(f,param)
   {var $js$2=param;
    var $js$3=$js$2[0];
    if($js$3==0)
     {var $js$4=Format["pp_print_string"];return $js$4(f,"Yes")}
    else
     if($js$3==1)
      {var $js$5=Format["pp_print_string"];return $js$5(f,"No")}
     else
      if($js$3==2)
       {var $js$6=Format["pp_print_string"];return $js$6(f,"Unknown")}};
var
 print_build_status=
  function(f,param)
   {var $js$2="unknown primitive:isint";
    if($js$2)
     {var $js$3=param;
      var $js$4=$js$3[0];
      if($js$4==0)
       {var $js$5=Format["pp_print_string"];return $js$5(f,"Bbuilt")}
      else
       if($js$4==1)
        {var $js$6=Format["pp_print_string"];
         return $js$6(f,"Bcannot_be_built")}
       else
        if($js$4==2)
         {var $js$7=Format["pp_print_string"];
          return $js$7(f,"Bnot_built_yet")}}
    else
     {var $js$8=Format["fprintf"];
      return $js$8
              (f,
               [0,
                [18,
                 [1,[0,[11,"<2>",0],"<2>"]],
                 [11,
                  "Bsuspension(",
                  [15,
                   [12,
                    44,
                    [17,[0,"@ ",1,0],[11,"(<fun> : unit -> unit))",[17,0,0]]]]]]],
                "@[<2>Bsuspension(%a,@ (<fun> : unit -> unit))@]"],
               Command["print"],
               param[1][1])}};
var
 print_cache_entry=
  function(f,e)
   {var $js$2=Format["fprintf"];
    return $js$2
            (f,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [11,
                "{ ",
                [18,
                 [1,[0,[11,"<2>",0],"<2>"]],
                 [11,
                  "built =",
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
                         "changed =",
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
                                "dependencies =",
                                [17,
                                 [0,"@ ",1,0],
                                 [15,[17,0,[17,[0,"@ ",1,0],[12,125,[17,0,0]]]]]]]]]]]]]]]]]]]]]]]],
              "@[<2>{ @[<2>built =@ %a@];@ @[<2>changed =@ %a@];@ @[<2>dependencies =@ %a@]@ }@]"],
             print_build_status,
             e[1],
             print_knowledge,
             e[2],
             Resources[29],
             e[3])};
var $js$2=Hashtbl["create"];
var cache=$js$2(0,103);
var
 get=
  function(r)
   {try
     {var $js$3=Hashtbl["find"];return $js$3(cache,r)}
    catch(exn)
     {var $js$4=exn=Not_found;
      if($js$4)
       {var cache_entry=empty(0);
        var $js$5=Hashtbl["add"];
        $js$5(cache,r,cache_entry);
        return cache_entry}
      else
       {return "unknown primitive:reraise"}}};
var
 fold_cache=
  function(f,x){var $js$3=Hashtbl["fold"];return $js$3(f,cache,x)};
var
 print_cache=
  function(f,param)
   {var $js$3=Format["fprintf"];
    $js$3
     (f,
      [0,
       [18,
        [1,[0,[11,"<hv0>",0],"<hv0>"]],
        [18,[1,[0,[11,"<hv2>",0],"<hv2>"]],[11,"{:",0]]],
       "@[<hv0>@[<hv2>{:"]);
    fold_cache
     (function(k,v,param$1)
       {var $js$4=Format["fprintf"];
        return $js$4
                (f,
                 [0,
                  [17,
                   [0,"@ ",1,0],
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [15,[11," =>",[17,[0,"@ ",1,0],[15,[17,0,[12,59,0]]]]]]]],
                  "@ @[<2>%a =>@ %a@];"],
                 print,
                 k,
                 print_cache_entry,
                 v)},
      0);
    var $js$4=Format["fprintf"];
    return $js$4(f,[0,[17,0,[11,":}",[17,0,0]]],"@]:}@]"])};
var
 print_graph=
  function(f,param)
   {var $js$3=Format["fprintf"];
    $js$3
     (f,
      [0,
       [18,
        [1,[0,[11,"<hv0>",0],"<hv0>"]],
        [18,[1,[0,[11,"<hv2>",0],"<hv2>"]],[11,"{:",0]]],
       "@[<hv0>@[<hv2>{:"]);
    fold_cache
     (function(k,v,param$1)
       {var $js$4=Resources[2];
        var $js$5=$js$4(v[3]);
        var $js$6=!$js$5;
        if($js$6)
         {var $js$7=Format["fprintf"];
          return $js$7
                  (f,
                   [0,
                    [17,
                     [0,"@ ",1,0],
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [15,[11," =>",[17,[0,"@ ",1,0],[15,[17,0,[12,59,0]]]]]]]],
                    "@ @[<2>%a =>@ %a@];"],
                   print,
                   k,
                   Resources[29],
                   v[3])}
        else
         {return 0}},
      0);
    var $js$4=Format["fprintf"];
    return $js$4(f,[0,[17,0,[17,[0,"@ ",1,0],[11,":}",[17,0,0]]]],"@]@ :}@]"])};
var
 resource_changed=
  function(r)
   {var $js$3=Log["dprintf"];
    $js$3
     (10,
      [0,
       [11,"resource_changed:",[17,[0,"@ ",1,0],[15,0]]],
       "resource_changed:@ %a"],
      print,
      r);
    var $js$4=get(r);
    return $js$4[2]=0,0};
var
 external_is_up_to_date=
  function(absolute_path)
   {var $js$3=Pervasives["^"];
    var key=$js$3("Resource: ",absolute_path);
    var $js$4=My_std["Digest"][3];
    var digest=$js$4(absolute_path);
    try
     {var $js$5=Digest_cache["get"];
      var digest'=$js$5(key);
      var is_up_to_date="unknown primitive:caml_string_equal"}
    catch(exn)
     {var $js$6=exn=Not_found;
      if($js$6)
       {var is_up_to_date=0}
      else
       {var is_up_to_date="unknown primitive:reraise"}}
    var $js$7=Digest_cache["put"];
    $js$7(key,digest);
    var $js$8=0;
    return is_up_to_date||$js$8};
var
 source_is_up_to_date=
  function(r_in_source_dir,r_in_build_dir)
   {var $js$3=Pervasives["^"];
    var key=$js$3("Resource: ",r_in_source_dir);
    var $js$4=My_std["Digest"][3];
    var digest=$js$4(r_in_source_dir);
    var $js$5=Pathname["exists"];
    var $js$6=$js$5(r_in_build_dir);
    try
     {var $js$7=Digest_cache["get"];
      var digest'=$js$7(key);
      var $js$8="unknown primitive:caml_string_equal"}
    catch(exn)
     {var $js$9=exn=Not_found;
      if($js$9){var $js$8=0}else{var $js$8="unknown primitive:reraise"}}
    var r_is_up_to_date=$js$6&&$js$8;
    var $js$10=Digest_cache["put"];
    $js$10(key,digest);
    var $js$11=0;
    return r_is_up_to_date||$js$11};
var
 prod_is_up_to_date=
  function(p)
   {var x=in_build_dir(p);
    var $js$3=exists_in_source_dir(p);
    var $js$4=!$js$3;
    var $js$5=Pathname["exists"];
    var $js$6=$js$5(x);
    var $js$7=Pathname["same_contents"];
    var $js$8=in_source_dir(p);
    var $js$9=$js$7(x,$js$8);
    var $js$10=$js$6&&$js$9;
    return $js$4||$js$10};
var
 resource_has_changed=
  function(r)
   {var cache_entry=get(r);
    var match=cache_entry[2];
    var $js$3=match;
    var $js$4=$js$3[0];
    if($js$4==0)
     {return 1}
    else
     if($js$4==1)
      {return 0}
     else
      if($js$4==2)
       {var match$1=cache_entry[1];
        var $js$5="unknown primitive:isint";
        if($js$5)
         {var $js$6=match$1>=2;
          if($js$6)
           {var $js$7=prod_is_up_to_date(r);var res=!$js$7}
          else
           {var res=0}}
        else
         {var res="unknown primitive:raise"}
        var $js$8=res;
        if($js$8){var $js$9=0}else{var $js$9=1}
        var match$2=(cache_entry[2]=$js$9,0);
        return res}};
var resource_state=function(r){var $js$3=get(r);return $js$3[1]};
var resource_built=function(r){var $js$3=get(r);return $js$3[1]=0,0};
var resource_failed=function(r){var $js$3=get(r);return $js$3[1]=1,0};
var
 import_in_build_dir=
  function(r)
   {var cache_entry=get(r);
    var r_in_build_dir=in_build_dir(r);
    var r_in_source_dir=in_source_dir(r);
    var $js$3=source_is_up_to_date(r_in_source_dir,r_in_build_dir);
    if($js$3)
     {var $js$4=Log["dprintf"];
      $js$4
       (5,
        [0,[15,[11," exists and up to date",0]],"%a exists and up to date"],
        print,
        r)}
    else
     {var $js$5=Log["dprintf"];
      $js$5
       (5,
        [0,
         [15,[11," exists in source dir -> import it",0]],
         "%a exists in source dir -> import it"],
        print,
        r);
      var $js$6=Shell["mkdir_p"];
      var $js$7=Pathname["dirname"];
      var $js$8=$js$7(r);
      $js$6($js$8);
      var $js$9=Pathname["copy"];
      $js$9(r_in_source_dir,r_in_build_dir);
      cache_entry[2]=0,0}
    return cache_entry[1]=0,0};
var
 suspend_resource=
  function(r,cmd,kont,prods)
   {var cache_entry=get(r);
    var match=cache_entry[1];
    var $js$3="unknown primitive:isint";
    if($js$3)
     {var $js$4=match;
      var $js$5=$js$4[0];
      if($js$5==0)
       {return 0}
      else
       if($js$5==1)
        {return "unknown primitive:raise"}
       else
        if($js$5==2)
         {var
           kont$1=
            function(param)
             {kont(0);
              var $js$6=My_std["List"][14];
              return $js$6
                      (function(prod){var $js$7=get(prod);return $js$7[1]=0,0},
                       prods)};
          return cache_entry[1]=[0,[0,cmd,kont$1]],0}}
    else
     {return 0}};
var
 resume_suspension=
  function(param)
   {var $js$3=Command["execute"];
    $js$3(0,0,param[1]);
    var $js$4=param[2];
    return $js$4(0)};
var
 resume_resource=
  function(r)
   {var cache_entry=get(r);
    var match=cache_entry[1];
    var $js$3="unknown primitive:isint";
    if($js$3){return 0}else{return resume_suspension(match[1])}};
var
 get_optional_resource_suspension=
  function(r)
   {var $js$3=get(r);
    var match=$js$3[1];
    var $js$4="unknown primitive:isint";
    if($js$4){return 0}else{return [0,match[1]]}};
var clear_resource_failed=function(r){var $js$3=get(r);return $js$3[1]=2,0};
var dependencies=function(r){var $js$3=get(r);return $js$3[3]};
var
 fold_dependencies=
  function(f)
   {return fold_cache
            (function(k,v)
              {var $js$3=Resources[14];
               var $js$4=f(k);
               return $js$3($js$4,v[3])})};
var
 add_dependency=
  function(r,s)
   {var cache_entry=get(r);
    var $js$3=Resources[4];
    var $js$4=$js$3(s,cache_entry[3]);
    return cache_entry[3]=$js$4,0};
var
 Cache=
  [0,
   clean$1,
   empty,
   print_knowledge,
   print_build_status,
   print_cache_entry,
   cache,
   get,
   fold_cache,
   print_cache,
   print_graph,
   resource_changed,
   external_is_up_to_date,
   source_is_up_to_date,
   prod_is_up_to_date,
   resource_has_changed,
   resource_state,
   resource_built,
   resource_failed,
   import_in_build_dir,
   suspend_resource,
   resume_suspension,
   resume_resource,
   get_optional_resource_suspension,
   clear_resource_failed,
   dependencies,
   fold_dependencies,
   add_dependency,
   print_graph];
var
 digest=
  function(p)
   {var $js$3=Pathname["to_string"];
    var $js$4=in_build_dir(p);
    var f=$js$3($js$4);
    var $js$5=Buffer["create"];
    var buf=$js$5(1024);
    var $js$6=Buffer["add_string"];
    $js$6(buf,f);
    var $js$7=My_std["sys_file_exists"];
    var $js$8=$js$7(f);
    if($js$8)
     {var $js$9=Buffer["add_string"];
      var $js$10=My_std["Digest"][3];
      var $js$11=$js$10(f);
      $js$9(buf,$js$11)}
    else
     {}
    var $js$12=My_std["Digest"][1];
    var $js$13=Buffer["contents"];
    var $js$14=$js$13(buf);
    return $js$12($js$14)};
var
 exists_in_build_dir=
  function(p)
   {var $js$3=Pathname["exists"];
    var $js$4=in_build_dir(p);
    return $js$3($js$4)};
var import=function(x){var $js$3=Pathname["normalize"];return $js$3(x)};
var No_solution="unknown primitive:caml_set_oo_id";
var
 mk=
  function(param)
   {var $js$3=My_std["List"][16];
    var $js$4=Lexers["path_scheme"];
    var $js$5=My_std["lexbuf_of_string"];
    var $js$6=$js$5(0,param[2]);
    var $js$7=$js$4(param[1],Const["Source"][6],$js$6);
    return $js$3
            (function(param$1)
              {var $js$8=param$1[1]>=970337770;
               if($js$8)
                {return [0,param$1[2]]}
               else
                {var match=param$1[2];return [1,match[1],match[2]]}},
             $js$7)};
var $js$3=My_std["memo"];
var mk$1=$js$3(mk);
var
 match_prefix=
  function(s,pos,prefix)
   {var $js$4=My_std["String"][10];
    var match=$js$4(s,pos,prefix);
    var $js$5=match;
    if($js$5)
     {var pos'=match[1];
      var $js$6=pos=pos';
      if($js$6)
       {return pos'+prefix["length"]}
      else
       {return "unknown primitive:raise"}}
    else
     {return "unknown primitive:raise"}};
var
 matchit=
  function(p,s)
   {var sl=s["length"];
    var
     loop=
      function(xs,pos,acc,delta)
       {var $js$4=xs;
        if($js$4)
         {var match=xs[1];
          var $js$5=match;
          if($js$5==0)
           {var $js$6=match_prefix(s,pos,match[1]);
            return loop(xs[2],$js$6,acc,0)}
          else
           if($js$5==1)
            {var match$1=xs[2];
             var patt=match[2];
             var var=match[1];
             var $js$7=match$1;
             if($js$7)
              {var match$2=match$1[1];
               var $js$8=match$2;
               if($js$8==0)
                {var s2=match$2[1];
                 var $js$9=My_std["String"][10];
                 var match$3=$js$9(s,pos+delta,s2);
                 var $js$10=match$3;
                 if($js$10)
                  {var pos'=match$3[1];
                   var $js$11=My_std["String"][19];
                   var matched=$js$11(s,pos,pos'-pos);
                   var $js$12=Glob["eval"];
                   var $js$13=$js$12(patt,matched);
                   if($js$13)
                    {try
                      {return loop
                               (match$1[2],pos'+s2["length"],[0,[0,var,matched],acc],0)}
                     catch(exn)
                      {var $js$14=exn=No_solution;
                       if($js$14)
                        {return loop(xs,pos,acc,pos'-pos+1)}
                       else
                        {return "unknown primitive:reraise"}}}
                   else
                    {return loop(xs,pos,acc,pos'-pos+1)}}
                 else
                  {return "unknown primitive:raise"}}
               else
                if($js$8==1){return "unknown primitive:raise"}}
             else
              {var $js$15=My_std["String"][19];
               var matched$1=$js$15(s,pos,sl-pos);
               var $js$16=Glob["eval"];
               var $js$17=$js$16(patt,matched$1);
               if($js$17)
                {return [0,[0,var,matched$1],acc]}
               else
                {return "unknown primitive:raise"}}}}
        else
         {var $js$18=pos=sl;
          if($js$18){return acc}else{return "unknown primitive:raise"}}};
    try
     {var $js$4=loop(p,0,0,0);return [0,$js$4]}
    catch(exn)
     {var $js$5=exn=No_solution;
      if($js$5){return 0}else{return "unknown primitive:reraise"}}};
var
 pp_opt=
  function(pp_elt,f,param)
   {var $js$4=param;
    if($js$4)
     {var $js$5=Format["fprintf"];
      return $js$5
              (f,[0,[11,"Some(",[15,[12,41,0]]],"Some(%a)"],pp_elt,param[1])}
    else
     {var $js$6=Format["pp_print_string"];return $js$6(f,"None")}};
var
 print_env=
  function(f,env)
   {var $js$4=My_std["List"][14];
    return $js$4
            (function(param)
              {var v=param[2];
               var k=param[1];
               var $js$5="unknown primitive:caml_string_equal";
               if($js$5)
                {var $js$6=Format["fprintf"];
                 return $js$6
                         (f,[0,[12,37,[12,61,[2,0,[12,32,0]]]],"%%=%s "],v)}
               else
                {var $js$7=Format["fprintf"];
                 return $js$7
                         (f,
                          [0,
                           [12,37,[12,40,[2,0,[11,")=",[2,0,[12,32,0]]]]]],
                           "%%(%s)=%s "],
                          k,
                          v)}},
             env)};
var
 subst=
  function(env,s)
   {var $js$4=My_std["String"][22];
    var $js$5=My_std["List"][16];
    var
     $js$6=
      $js$5
       (function(x)
         {var $js$7=x;
          if($js$7==0)
           {return x[1]}
          else
           if($js$7==1)
            {try
              {var $js$8=My_std["List"][36];return $js$8(x[1],env)}
             catch(exn)
              {var $js$9=exn=Not_found;
               if($js$9){return ""}else{return "unknown primitive:reraise"}}}},
        s);
    return $js$4("",$js$6)};
var MetaPath=[0,mk$1,matchit,subst,print_env];
var
 print_pattern=
  function(f,param){var $js$4=Pathname["print"];return $js$4(f,param[1])};
var
 import_pattern=
  function(x)
   {var $js$4=MetaPath[1];var $js$5=$js$4([0,1,x]);return [0,x,$js$5]};
var
 matchit$1=
  function(param,x){var $js$4=MetaPath[2];return $js$4(param[2],x)};
var
 subst$1=
  function(env,s)
   {var $js$4=MetaPath[3];
    var $js$5=MetaPath[1];
    var $js$6=$js$5([0,0,s]);
    return $js$4(env,$js$6)};
var
 subst_any=
  function(env,s)
   {var $js$4=MetaPath[3];
    var $js$5=MetaPath[1];
    var $js$6=$js$5([0,1,s]);
    return $js$4(env,$js$6)};
var
 subst_pattern=
  function(env,param){var $js$4=MetaPath[3];return $js$4(env,param[2])};
var print_env$1=MetaPath[4];
module["exports"]=
{"Resources":Resources,
 "unknown block:(makeblock 0 (field 0 Cache/1908) (field 15 Cache/1908) (field 10 Cache/1908)\n  (field 14 Cache/1908) (field 16 Cache/1908) (field 17 Cache/1908)\n  (field 18 Cache/1908) (field 19 Cache/1908) (field 21 Cache/1908)\n  (field 20 Cache/1908) (field 22 Cache/1908) (field 23 Cache/1908)\n  (field 26 Cache/1908) (field 25 Cache/1908) (field 11 Cache/1908)\n  (field 24 Cache/1908) (field 8 Cache/1908) (field 27 Cache/1908))":
 unknown block:(makeblock 0 (field 0 Cache/1908) (field 15 Cache/1908) (field 10 Cache/1908)
  (field 14 Cache/1908) (field 16 Cache/1908) (field 17 Cache/1908)
  (field 18 Cache/1908) (field 19 Cache/1908) (field 21 Cache/1908)
  (field 20 Cache/1908) (field 22 Cache/1908) (field 23 Cache/1908)
  (field 26 Cache/1908) (field 25 Cache/1908) (field 11 Cache/1908)
  (field 24 Cache/1908) (field 8 Cache/1908) (field 27 Cache/1908)),
 "digest":digest,
 "exists_in_source_dir":exists_in_source_dir,
 "exists_in_build_dir":exists_in_build_dir,
 "in_build_dir":in_build_dir,
 "in_source_dir":in_source_dir,
 "clean_up_links":clean_up_links,
 "compare":compare,
 "print":print,
 "print_pattern":print_pattern,
 "clean":clean,
 "import":import,
 "import_pattern":import_pattern,
 "matchit":matchit$1,
 "subst":subst$1,
 "subst_any":subst_any,
 "subst_pattern":subst_pattern,
 "print_env":print_env$1};
