var Options=require("Options");
var Pervasives=require("Pervasives");
var Pathname=require("Pathname");
var Resource=require("Resource");
var Format=require("Format");
var Digest_cache=require("Digest_cache");
var Command=require("Command");
var Shell=require("Shell");
var Buffer=require("Buffer");
var My_std=require("My_std");
var Log=require("Log");
var Exit_rule_error="unknown primitive:caml_set_oo_id";
var Failed="unknown primitive:caml_set_oo_id";
var name_of_rule=function(r){return r[1]};
var deps_of_rule=function(r){return r[2]};
var prods_of_rule=function(r){return r[3]};
var stamp_of_rule=function(r){return r[4]};
var doc_of_rule=function(r){return r[5]};
var compare=function(param,param$1){return "unknown primitive:raise"};
var
 print_rule_name=
  function(f,r){var $js=Format["pp_print_string"];return $js(f,r[1])};
var $js=My_std["List"][1];
var print_resource_list=$js(Resource["print"]);
var
 print_rule_contents=
  function(ppelt,f,r)
   {var $js$1=Format["fprintf"];
    var $js$2=My_std["List"][1];
    var $js$3=$js$2(ppelt);
    var match=r[5];
    var $js$4=match;
    if($js$4)
     {var $js$5=Format["sprintf"];
      var $js$6=$js$5([0,[11,"Some ",[3,0,0]],"Some %S"],match[1])}
    else
     {var $js$6="None"}
    return $js$1
            (f,
             [0,
              [18,
               [1,[0,[11,"<v2>",0],"<v2>"]],
               [12,
                123,
                [17,
                 [0,"@ ",1,0],
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "name  =",
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
                          "deps  =",
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
                                 "prods = ",
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
                                       "code  = <fun>",
                                       [17,
                                        0,
                                        [12,
                                         59,
                                         [17,
                                          [0,"@ ",1,0],
                                          [18,
                                           [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
                                           [11,
                                            " doc = ",
                                            [2,0,[17,0,[17,0,[17,[0,"@ ",1,0],[12,125,0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
              "@[<v2>{@ @[<2>name  =@ %S@];@ @[<2>deps  =@ %a@];@ @[<2>prods = %a@];@ @[<2>code  = <fun>@];@ @[<hov 2> doc = %s@]@]@ }"],
             r[1],
             print_resource_list,
             r[2],
             $js$3,
             r[3],
             $js$6)};
var
 pretty_print=
  function(ppelt,f,r)
   {var $js$1=Format["fprintf"];
    var $js$2=My_std["List"][1];
    var $js$3=$js$2(ppelt);
    $js$1
     (f,
      [0,
       [18,
        [1,[0,[11,"<hv2>",0],"<hv2>"]],
        [11,
         "rule ",
         [3,
          0,
          [17,
           [0,"@ ",1,0],
           [11,
            "~deps:",
            [15,[17,[0,"@ ",1,0],[11,"~prods:",[15,[17,[0,"@ ",1,0],0]]]]]]]]]],
       "@[<hv2>rule %S@ ~deps:%a@ ~prods:%a@ "],
      r[1],
      print_resource_list,
      r[2],
      $js$3,
      r[3]);
    var match=r[5];
    var $js$4=match;
    if($js$4)
     {var $js$5=Format["fprintf"];
      $js$5
       (f,
        [0,
         [11,
          '~doc:"',
          [18,
           [1,[0,[11,"<hov>",0],"<hov>"]],
           [15,[17,0,[12,34,[17,[0,"@ ",1,0],0]]]]]],
         '~doc:"@[<hov>%a@]"@ '],
        Format["pp_print_text"],
        match[1])}
    else
     {}
    var $js$6=Format["fprintf"];
    return $js$6(f,[0,[11,"<fun>",[17,0,0]],"<fun>@]"])};
var print=print_rule_name;
var
 subst=
  function(env,rule)
   {var $js$1=My_std["List"][16];
    var $js$2=Resource["subst"];
    var $js$3=$js$2(env);
    var subst_resources=$js$1($js$3);
    var $js$4=My_std["List"][16];
    var $js$5=Resource["subst_pattern"];
    var $js$6=$js$5(env);
    var subst_resource_patterns=$js$4($js$6);
    var
     finder=
      function(next_finder,p)
       {var $js$7=Resource["subst_any"];
        var $js$8=$js$7(env,p);
        return next_finder($js$8)};
    var match=rule[4];
    var $js$7=match;
    if($js$7)
     {var $js$8=Resource["subst_pattern"];
      var $js$9=$js$8(env,match[1]);
      var stamp=[0,$js$9]}
    else
     {var stamp=0}
    var prods=subst_resource_patterns(rule[3]);
    var $js$10=My_std["sbprintf"];
    var
     $js$11=
      $js$10
       ([0,[2,0,[11," (",[15,[12,41,0]]]],"%s (%a)"],
        rule[1],
        Resource["print_env"],
        env);
    var $js$12=subst_resources(rule[2]);
    return [0,
            $js$11,
            $js$12,
            prods,
            stamp,
            rule[5],
            function(env$1)
             {var $js$13=rule[6];
              var $js$14=finder(env$1);
              return $js$13($js$14)}]};
var Can_produce="unknown primitive:caml_set_oo_id";
var
 can_produce=
  function(target,rule)
   {try
     {var $js$1=My_std["List"][14];
      $js$1
       (function(resource)
         {var $js$2=Resource["matchit"];
          var match=$js$2(resource,target);
          var $js$3=match;
          if($js$3)
           {var $js$4=subst(match[1],rule);
            var $js$5=[0,Can_produce,$js$4];
            throw $js$5}
          else
           {return 0}},
        rule[3]);
      return 0}
    catch(exn)
     {var $js$2=exn[1]=Can_produce;
      if($js$2){return [0,exn[2]]}else{return "unknown primitive:reraise"}}};
var
 digest_prods=
  function(r)
   {var $js$1=My_std["List"][20];
    return $js$1
            (function(p,acc)
              {var $js$2=Pathname["to_string"];
               var $js$3=Resource["in_build_dir"];
               var $js$4=$js$3(p);
               var f=$js$2($js$4);
               var $js$5=My_std["sys_file_exists"];
               var $js$6=$js$5(f);
               if($js$6)
                {var $js$7=My_std["Digest"][3];
                 var $js$8=$js$7(f);
                 var $js$9=[0,f,$js$8];
                 return [0,$js$9,acc]}
               else
                {return acc}},
             r[3],
             0)};
var
 digest_deps=
  function(r,dyndeps)
   {var $js$1=Buffer["create"];
    var buf=$js$1(1024);
    var
     add_resource=
      function(r$1)
       {var $js$2=Buffer["add_string"];
        var $js$3=My_std["Digest"][6];
        var $js$4=Resource["digest"];
        var $js$5=$js$4(r$1);
        var $js$6=$js$3($js$5);
        return $js$2(buf,$js$6)};
    var $js$2=Buffer["add_string"];
    $js$2(buf,"deps:");
    var $js$3=My_std["List"][14];
    $js$3(add_resource,r[2]);
    var $js$4=Buffer["add_string"];
    $js$4(buf,"dyndeps:");
    var $js$5=Resource["Resources"][13];
    $js$5(add_resource,dyndeps);
    var $js$6=My_std["Digest"][6];
    var $js$7=My_std["Digest"][1];
    var $js$8=Buffer["contents"];
    var $js$9=$js$8(buf);
    var $js$10=$js$7($js$9);
    return $js$6($js$10)};
var
 digest_rule=
  function(r,dyndeps,action)
   {var $js$1=Buffer["create"];
    var buf=$js$1(1024);
    var $js$2=Buffer["add_string"];
    $js$2(buf,action[1]);
    var
     add_resource=
      function(r$1)
       {var $js$3=Buffer["add_string"];
        var $js$4=Resource["digest"];
        var $js$5=$js$4(r$1);
        return $js$3(buf,$js$5)};
    var $js$3=Buffer["add_string"];
    $js$3(buf,"prods:");
    var $js$4=My_std["List"][14];
    $js$4(add_resource,r[3]);
    var $js$5=Buffer["add_string"];
    $js$5(buf,"deps:");
    var $js$6=My_std["List"][14];
    $js$6(add_resource,r[2]);
    var $js$7=Buffer["add_string"];
    $js$7(buf,"dyndeps:");
    var $js$8=Resource["Resources"][13];
    $js$8(add_resource,dyndeps);
    var $js$9=My_std["Digest"][1];
    var $js$10=Buffer["contents"];
    var $js$11=$js$10(buf);
    return $js$9($js$11)};
var
 cached_digest=
  function(r)
   {try
     {var $js$1=Digest_cache["get"];
      var $js$2=Pervasives["^"];
      var $js$3=$js$2("Rule: ",r[1]);
      var $js$4=$js$1($js$3);
      return [0,$js$4]}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5){return 0}else{return "unknown primitive:reraise"}}};
var
 store_digest=
  function(r,digest)
   {var $js$1=Digest_cache["put"];
    var $js$2=Pervasives["^"];
    var $js$3=$js$2("Rule: ",r[1]);
    return $js$1($js$3,digest)};
var
 print_digest=
  function(f,x)
   {var $js$1=Format["pp_print_string"];
    var $js$2=My_std["Digest"][6];
    var $js$3=$js$2(x);
    return $js$1(f,$js$3)};
var
 exists2=
  function(find,p,rs)
   {try
     {var $js$1=find(p,rs);return [0,$js$1]}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2){return 0}else{return "unknown primitive:reraise"}}};
var
 build_deps_of_tags=
  function(builder,tags)
   {var $js$1=Command["deps_of_tags"];
    var deps=$js$1(tags);
    var $js$2=deps;
    if($js$2)
     {var $js$3=My_std["List"][16];
      var $js$4=My_std["List"][16];
      var $js$5=$js$4(function(x){return [0,x,0]},deps);
      var $js$6=builder($js$5);
      return $js$3(My_std["Outcome"][3],$js$6)}
    else
     {return 0}};
var
 build_deps_of_tags_on_cmd=
  function(builder)
   {var $js$1=Command["iter_tags"];
    return $js$1
            (function(tags)
              {var $js$2=Command["deps_of_tags"];
               var deps=$js$2(tags);
               var $js$3=deps;
               if($js$3)
                {var $js$4=My_std["List"][14];
                 var $js$5=My_std["List"][16];
                 var $js$6=$js$5(function(x){return [0,x,0]},deps);
                 var $js$7=builder($js$6);
                 return $js$4(My_std["Outcome"][2],$js$7)}
               else
                {return 0}})};
var
 call=
  function(builder,r)
   {var dyndeps=[0,Resource["Resources"][1]];
    var
     builder$1=
      function(rs)
       {var results=builder(rs);
        var $js$1=My_std["List"][16];
        return $js$1
                (function(res)
                  {var $js$2=res;
                   if($js$2==0)
                    {var res'=res[1];
                     var $js$3=Log["dprintf"];
                     var
                      match=
                       $js$3
                        (10,
                         [0,
                          [11,"new dyndep for ",[3,0,[12,40,[15,[11,"): ",[3,0,0]]]]]],
                          "new dyndep for %S(%a): %S"],
                         r[1],
                         print_resource_list,
                         r[3],
                         res');
                     var $js$4=Resource["Resources"][4];
                     var $js$5=$js$4(res',dyndeps[1]);
                     dyndeps[1]=$js$5,0;
                     var $js$6=My_std["List"][14];
                     $js$6
                      (function(x)
                        {var $js$7=Resource["Cache"][13];return $js$7(x,res')},
                       r[3]);
                     return res}
                   else
                    if($js$2==1){return res}},
                 results)};
    var $js$1=Log["dprintf"];
    var match=$js$1(5,[0,[11,"start rule ",[15,0]],"start rule %a"],print,r);
    var $js$2=r[6];
    var action=$js$2(function(x){return x},builder$1);
    build_deps_of_tags_on_cmd(builder$1,action[2]);
    var dyndeps$1=dyndeps[1];
    var $js$3=Log["dprintf"];
    var
     match$1=
      $js$3
       (10,
        [0,[11,"dyndeps: ",[15,0]],"dyndeps: %a"],
        Resource["Resources"][29],
        dyndeps$1);
    var
     match$2=
      exists2
       (My_std["List"][32],
        function(r$1)
         {var $js$4=Resource["exists_in_build_dir"];
          var $js$5=$js$4(r$1);
          return !$js$5},
        r[3]);
    var $js$4=match$2;
    if($js$4)
     {var match$3=[0,[0,-900031434,match$2[1]],0]}
    else
     {var match$4=exists2(My_std["List"][32],Resource["Cache"][4],r[2]);
      var $js$5=match$4;
      if($js$5)
       {var match$3=[0,[0,1009970846,match$4[1]],0]}
      else
       {var
         match$5=
          exists2(Resource["Resources"][26],Resource["Cache"][4],dyndeps$1);
        var $js$6=match$5;
        if($js$6)
         {var match$3=[0,[0,738140888,match$5[1]],0]}
        else
         {var match$6=cached_digest(r);
          var $js$7=match$6;
          if($js$7)
           {var d=match$6[1];
            var rule_digest=digest_rule(r,dyndeps$1,action);
            var $js$8="unknown primitive:caml_string_equal";
            if($js$8)
             {var match$3=[0,-805933418,1]}
            else
             {var match$3=[0,[0,-433471969,[0,d,rule_digest]],0]}}
          else
           {var match$3=[0,242554396,0]}}}}
    var cached=match$3[2];
    var reason=match$3[1];
    var
     explain_reason=
      function(l)
       {var $js$9=Log["raw_dprintf"];
        $js$9
         (l+1,[0,[11,"mid rule ",[15,[11,": ",0]]],"mid rule %a: "],print,r);
        var $js$10="unknown primitive:isint";
        if($js$10)
         {var $js$11=reason>=242554396;
          if($js$11)
           {var $js$12=Log["dprintf"];
            return $js$12
                    (l,
                     [0,
                      [11,
                       "cache miss: no digest found for ",
                       [3,0,[11," (the command, a dependency, or a product)",0]]],
                      "cache miss: no digest found for %S (the command, a dependency, or a product)"],
                     r[1])}
          else
           {var $js$13=Log["dprintf"];
            return $js$13(l+1,[0,[11,"cache hit",0],"cache hit"])}}
        else
         {var variant=reason[1];
          var $js$14=variant>=738140888;
          if($js$14)
           {var $js$15=variant>=1009970846;
            if($js$15)
             {var $js$16=Log["dprintf"];
              return $js$16
                      (l,
                       [0,
                        [11,"cache miss: a dependency has changed (",[15,[12,41,0]]],
                        "cache miss: a dependency has changed (%a)"],
                       Resource["print"],
                       reason[2])}
            else
             {var $js$17=Log["dprintf"];
              return $js$17
                      (l,
                       [0,
                        [11,
                         "cache miss: a dynamic dependency has changed (",
                         [15,[12,41,0]]],
                        "cache miss: a dynamic dependency has changed (%a)"],
                       Resource["print"],
                       reason[2])}}
          else
           {var $js$18=variant>=-433471969;
            if($js$18)
             {var match$7=reason[2];
              var $js$19=Log["dprintf"];
              return $js$19
                      (l,
                       [0,
                        [11,
                         "cache miss: the digest has changed for ",
                         [3,
                          0,
                          [11,
                           " (the command, a dependency, or a product: ",
                           [15,[11," <> ",[15,[12,41,0]]]]]]],
                        "cache miss: the digest has changed for %S (the command, a dependency, or a product: %a <> %a)"],
                       r[1],
                       print_digest,
                       match$7[1],
                       print_digest,
                       match$7[2])}
            else
             {var $js$20=Log["dprintf"];
              return $js$20
                      (l,
                       [0,
                        [11,
                         "cache miss: a product is not in build dir (",
                         [15,[12,41,0]]],
                        "cache miss: a product is not in build dir (%a)"],
                       Resource["print"],
                       reason[2])}}}};
    var prod_digests=digest_prods(r);
    var $js$9=!cached;
    if($js$9)
     {var $js$10=My_std["List"][14];$js$10(Resource["clean"],r[3])}
    else
     {}
    var $js$11=Options["nothing_should_be_rebuilt"][1]&&!cached;
    if($js$11)
     {explain_reason(-1);
      var $js$12=My_std["sbprintf"];
      var
       msg=
        $js$12
         ([0,
           [11,
            "Need to rebuild ",
            [15,[11," through the rule `",[15,[12,39,0]]]]],
           "Need to rebuild %a through the rule `%a'"],
          print_resource_list,
          r[3],
          print,
          r);
      "unknown primitive:raise"}
    else
     {}
    explain_reason(3);
    var
     thunk=
      function(param)
       {try
         {var $js$13=cached;
          if($js$13)
           {var $js$14=Command["execute"];$js$14(0,[0,1],action[2])}
          else
           {var match$7=r[4];
            var $js$15=match$7;
            if($js$15)
             {var $js$16=My_std["reset_filesys_cache"];
              $js$16(0);
              var digest_deps$1=digest_deps(r,dyndeps$1);
              var $js$17=My_std["with_output_file"];
              $js$17
               (0,
                match$7[1],
                function(oc)
                 {var $js$18=Pervasives["output_string"];
                  return $js$18(oc,digest_deps$1)})}
            else
             {}}
          var $js$18=My_std["List"][14];
          $js$18
           (function(r$1){var $js$19=Resource["Cache"][5];return $js$19(r$1)},
            r[3]);
          var $js$19=!cached;
          if($js$19)
           {var new_rule_digest=digest_rule(r,dyndeps$1,action);
            var new_prod_digests=digest_prods(r);
            var match$8=store_digest(r,new_rule_digest);
            var $js$20=My_std["List"][14];
            $js$20
             (function(p)
               {var $js$21=Pathname["to_string"];
                var $js$22=Resource["in_build_dir"];
                var $js$23=$js$22(p);
                var f=$js$21($js$23);
                try
                 {var $js$24=My_std["List"][36];
                  var digest=$js$24(f,prod_digests);
                  var $js$25=My_std["List"][36];
                  var new_digest=$js$25(f,new_prod_digests);
                  var $js$26="unknown primitive:caml_string_notequal";
                  if($js$26){return "unknown primitive:raise"}else{return 0}}
                catch(exn)
                 {var $js$27=exn=Not_found;
                  if($js$27)
                   {var $js$28=Resource["Cache"][3];return $js$28(p)}
                  else
                   {return "unknown primitive:reraise"}}},
              r[3])}
          else
           {}
          var $js$21=Log["dprintf"];
          return $js$21(5,[0,[11,"end rule ",[15,0]],"end rule %a"],print,r)}
        catch(exn)
         {var $js$22=My_std["List"][14];
          $js$22(Resource["clean"],r[3]);
          return "unknown primitive:reraise"}};
    var $js$13=cached;
    if($js$13)
     {return thunk(0)}
    else
     {var $js$14=My_std["List"][14];
      return $js$14
              (function(x)
                {var $js$15=Resource["Cache"][8];
                 return $js$15(x,action[2],thunk,r[3])},
               r[3])}};
var rules=[0,0];
var
 match=
  [0,
   function(param){return rules[1]},
   function(pos,r)
    {try
      {var $js$1=My_std["List"][32];
       var
        match$1=
         $js$1
          (function(x){return "unknown primitive:caml_string_equal"},rules[1]);
       var $js$2=My_std["sbprintf"];
       var
        $js$3=
         $js$2
          ([0,
            [11,"Rule.add_rule: already exists: (",[15,[12,41,0]]],
            "Rule.add_rule: already exists: (%a)"],
           print,
           r);
       var $js$4=[0,Exit_rule_error,$js$3];
       throw $js$4}
     catch(exn)
      {var $js$5=exn=Not_found;
       if($js$5)
        {var $js$6="unknown primitive:isint";
         if($js$6)
          {var $js$7=pos>=5793429;
           if($js$7)
            {return rules[1]=[0,r,rules[1]],0}
           else
            {var $js$8=Pervasives["@"];
             var $js$9=$js$8(rules[1],[0,r,0]);
             return rules[1]=$js$9,0}}
         else
          {var $js$10=pos[1]>=497182236;
           if($js$10)
            {var s=pos[2];
             var $js$11=My_std["List"][20];
             var
              $js$12=
               $js$11
                (function(x,acc)
                  {var $js$13="unknown primitive:caml_string_equal";
                   if($js$13){return [0,x,[0,r,acc]]}else{return [0,x,acc]}},
                 rules[1],
                 0);
             return rules[1]=$js$12,0}
           else
            {var s$1=pos[2];
             var $js$13=My_std["List"][20];
             var
              $js$14=
               $js$13
                (function(x,acc)
                  {var $js$15="unknown primitive:caml_string_equal";
                   if($js$15){return [0,r,[0,x,acc]]}else{return [0,x,acc]}},
                 rules[1],
                 0);
             return rules[1]=$js$14,0}}}
       else
        {return "unknown primitive:reraise"}}},
   function(param){return rules[1]=0,0}];
var clear_rules=match[3];
var add_rule=match[2];
var get_rules=match[1];
var
 rule=
  function(name,tags,*opt*,*opt*$1,prod,dep,stamp,*opt*$2,doc,code)
   {var $js$1=*opt*;
    if($js$1){var prods=*opt*[1]}else{var prods=0}
    var $js$2=*opt*$1;
    if($js$2){var deps=*opt*$1[1]}else{var deps=0}
    var $js$3=*opt*$2;
    if($js$3){var insert=*opt*$2[1]}else{var insert=-445061397}
    var $js$4=tags;
    if($js$4)
     {var $js$5=Log["eprintf"];
      var
       match$1=
        $js$5
         ([0,
           [11,
            "Warning: your ocamlbuild rule ",
            [3,
             0,
             [11,
              " uses the ~tags parameter,\n                     which is deprecated and ignored.",
              0]]],
           "Warning: your ocamlbuild rule %S uses the ~tags parameter,\n                     which is deprecated and ignored."],
          name)}
    else
     {var match$1=0}
    var
     res_add=
      function(import,xs,xopt)
       {var $js$6=xopt;
        if($js$6)
         {var $js$7=import(xopt[1]);var init=[0,$js$7,0]}
        else
         {var init=0}
        var $js$8=My_std["List"][20];
        return $js$8
                (function(x,acc)
                  {var r=import(x);
                   var $js$9=My_std["List"][30];
                   var $js$10=$js$9(r,acc);
                   if($js$10)
                    {var $js$11=Pervasives["failwith"];
                     var $js$12=Format["sprintf"];
                     var
                      $js$13=
                       $js$12
                        ([0,
                          [11,
                           "in rule ",
                           [2,0,[11,", multiple occurrences of the resource ",[2,0,0]]]],
                          "in rule %s, multiple occurrences of the resource %s"],
                         name,
                         x);
                     return $js$11($js$13)}
                   else
                    {return [0,r,acc]}},
                 xs,
                 init)};
    var $js$6=(prods=0)&&(prod=0)&&(stamp=0);
    if($js$6){"unknown primitive:raise"}else{}
    var $js$7=stamp;
    if($js$7)
     {var stamp$1=stamp[1];
      var $js$8=Resource["import_pattern"];
      var $js$9=$js$8(stamp$1);
      var $js$10=[0,$js$9];
      var match$2=[0,$js$10,[0,stamp$1,prods]]}
    else
     {var match$2=[0,0,prods]}
    var prods$1=res_add(Resource["import_pattern"],match$2[2],prod);
    var
     code$1=
      function(env,build)
       {var cmd=code(env,build);
        var $js$11=Command["digest"];
        var $js$12=$js$11(cmd);
        return [0,$js$12,cmd]};
    var $js$11=res_add(Resource["import"],deps,dep);
    var $js$12=[0,name,$js$11,prods$1,match$2[1],doc,code$1];
    return add_rule(insert,$js$12)};
var
 mv=
  function(src,dest){return [1,[0,[0,[1,"mv"],[0,[2,src],[0,[3,dest],0]]]]]};
var
 cp=
  function(src,dest){return [1,[0,[0,[1,"cp"],[0,[2,src],[0,[3,dest],0]]]]]};
var
 cp_p=
  function(src,dest)
   {return [1,[0,[0,[1,"cp"],[0,[1,"-p"],[0,[2,src],[0,[3,dest],0]]]]]]};
var
 ln_f=
  function(pointed,pointer)
   {return [1,[0,[0,[1,"ln"],[0,[1,"-f"],[0,[2,pointed],[0,[3,pointer],0]]]]]]};
var
 ln_s=
  function(pointed,pointer)
   {return [1,[0,[0,[1,"ln"],[0,[1,"-s"],[0,[2,pointed],[0,[3,pointer],0]]]]]]};
var rm_f=function(x){return [1,[0,[0,[1,"rm"],[0,[1,"-f"],[0,[3,x],0]]]]]};
var
 chmod=
  function(opts,file){return [1,[0,[0,[1,"chmod"],[0,opts,[0,[3,file],0]]]]]};
var cmp=function(a,b){return [1,[0,[0,[1,"cmp"],[0,[2,a],[0,[3,b],0]]]]]};
var Common_commands=[0,mv,cp,cp_p,ln_f,ln_s,rm_f,chmod,cmp];
var
 copy_rule=
  function(name,insert,src,dest)
   {return rule
            (name,
             0,
             0,
             0,
             [0,dest],
             [0,src],
             0,
             insert,
             0,
             function(env,param)
              {var src$1=env(src);
               var dest$1=env(dest);
               var $js$1=Shell["mkdir_p"];
               var $js$2=Pathname["dirname"];
               var $js$3=$js$2(dest$1);
               $js$1($js$3);
               var $js$4=Common_commands[3];
               return $js$4(src$1,dest$1)})};
var
 show_documentation=
  function(param)
   {var pp=function(fmt){var $js$1=Log["raw_dprintf"];return $js$1(-1,fmt)};
    var rules$1=get_rules(0);
    var $js$1=My_std["List"][14];
    $js$1
     (function(rule$1)
       {var $js$2=pretty_print(Resource["print_pattern"]);
        return pp([0,[15,[17,3,[17,3,0]]],"%a@\n@\n"],$js$2,rule$1)},
      rules$1);
    return pp([0,[17,4,0],"@."])};
module["exports"]=
{"Failed":Failed,
 "name_of_rule":name_of_rule,
 "deps_of_rule":deps_of_rule,
 "prods_of_rule":prods_of_rule,
 "doc_of_rule":doc_of_rule,
 "rule":rule,
 "copy_rule":copy_rule,
 "Common_commands":Common_commands,
 "print":print,
 "pretty_print":pretty_print,
 "subst":subst,
 "can_produce":can_produce,
 "compare":compare,
 "print_rule_name":print_rule_name,
 "print_rule_contents":print_rule_contents,
 "get_rules":get_rules,
 "clear_rules":clear_rules,
 "call":call,
 "build_deps_of_tags":build_deps_of_tags,
 "show_documentation":show_documentation};
