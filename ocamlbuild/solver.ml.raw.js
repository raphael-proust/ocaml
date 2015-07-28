var Rule=require("Rule");
var Pathname=require("Pathname");
var Resource=require("Resource");
var Format=require("Format");
var Command=require("Command");
var My_std=require("My_std");
var Log=require("Log");
var Failed="unknown primitive:caml_set_oo_id";
var Circular="unknown primitive:caml_set_oo_id";
var
 failed=
  function(target,backtrace)
   {var $js=Resource["Cache"][6];$js(target);return "unknown primitive:raise"};
var
 pp_repeat=
  function(f,param)
   {var n=param[1];
    var $js=n>0;
    if($js)
     {var s=param[2];
      var $js$1=Format["pp_print_string"];
      $js$1(f,s);
      return pp_repeat(f,[0,n-1,s])}
    else
     {return 0}};
var
 self=
  function(depth,on_the_go_orig,target)
   {var $js=Rule["get_rules"];
    var rules=$js(0);
    var on_the_go=[0,target,on_the_go_orig];
    var $js$1=Log["dprintf"];
    $js$1
     (4,
      [0,[11,"==",[15,[11,"> ",[15,0]]]],"==%a> %a"],
      pp_repeat,
      [0,depth,"=="],
      Resource["print"],
      target);
    var $js$2=My_std["List"][30];
    var $js$3=$js$2(target,on_the_go_orig);
    if($js$3){"unknown primitive:raise"}else{}
    var $js$4=Resource["Cache"][2];
    var match=$js$4(target);
    var $js$5="unknown primitive:isint";
    if($js$5)
     {var $js$6=match;
      var $js$7=$js$6[0];
      if($js$7==0)
       {var $js$8=Log["dprintf"];
        return $js$8
                (5,
                 [0,[15,[11," already built",0]],"%a already built"],
                 Resource["print"],
                 target)}
      else
       if($js$7==1)
        {var $js$9=Log["dprintf"];
         $js$9
          (5,
           [0,[15,[11," already failed",0]],"%a already failed"],
           Resource["print"],
           target);
         return failed(target,[0,target])}
       else
        if($js$7==2)
         {var $js$10=Pathname["is_relative"];
          var $js$11=$js$10(target);
          var $js$12=!$js$11;
          var $js$13=Pathname["exists"];
          var $js$14=$js$13(target);
          var $js$15=$js$12&&$js$14;
          if($js$15)
           {var $js$16=Resource["Cache"][15];
            var $js$17=$js$16(target);
            if($js$17){return 0}else{return failed(target,[0,target])}}
          else
           {var $js$18=Resource["exists_in_source_dir"];
            var $js$19=$js$18(target);
            if($js$19)
             {var $js$20=Resource["Cache"][7];return $js$20(target)}
            else
             {var $js$21=My_std["List"][2];
              var $js$22=Rule["can_produce"];
              var $js$23=$js$22(target);
              var matching_rules=$js$21($js$23,rules);
              var $js$24=matching_rules;
              if($js$24)
               {var
                 until_works=
                  function(rs,backtraces)
                   {var $js$25=rs;
                    if($js$25)
                     {var rs$1=rs[2];
                      var r=rs[1];
                      try
                       {var $js$26=My_std["List"][14];
                        var $js$27=force_self(depth+1,on_the_go);
                        var $js$28=Rule["deps_of_rule"];
                        var $js$29=$js$28(r);
                        $js$26($js$27,$js$29);
                        try
                         {var $js$30=Rule["call"];
                          var $js$31=self_firsts(depth+1,on_the_go);
                          return $js$30($js$31,r)}
                        catch(exn)
                         {var $js$32=exn=Rule["Failed"];
                          if($js$32)
                           {return "unknown primitive:raise"}
                          else
                           {return "unknown primitive:reraise"}}}
                      catch(exn$1)
                       {var $js$33=exn$1[1]=Failed;
                        if($js$33)
                         {var backtrace=exn$1[2];
                          var $js$34=rs$1=0;
                          if($js$34)
                           {return failed
                                    (target,[2,target,[1,[0,backtrace,backtraces]]])}
                          else
                           {var $js$35=backtrace;
                            if($js$35==2)
                             {var $js$36=Resource["Cache"][12];
                              var match$1=$js$36(backtrace[1])}
                            else
                             {var match$1=0}
                            return until_works(rs$1,[0,backtrace,backtraces])}}
                        else
                         {return "unknown primitive:reraise"}}}
                    else
                     {return "unknown primitive:raise"}};
                return until_works(matching_rules,0)}
              else
               {return failed(target,[0,target])}}}}}
    else
     {var $js$25=Log["dprintf"];
      $js$25
       (5,
        [0,
         [15,[11," was suspended -> resuming",0]],
         "%a was suspended -> resuming"],
        Resource["print"],
        target);
      var $js$26=Resource["Cache"][10];
      return $js$26(match[1])}};
var
 self_first=
  function(depth,on_the_go,already_failed,rs)
   {var $js=rs;
    if($js)
     {var r=rs[1];
      try
       {self(depth,on_the_go,r);return [0,r]}
      catch(exn)
       {var $js$1=exn[1]=Failed;
        if($js$1)
         {return self_first(depth,on_the_go,[0,exn[2],already_failed],rs[2])}
        else
         {return "unknown primitive:reraise"}}}
    else
     {return [1,[0,Failed,[1,already_failed]]]}};
var
 self_firsts=
  function(depth,on_the_go,rss)
   {var $js=My_std["List"][16];
    var $js$1=self_first(depth,on_the_go,0);
    var results=$js($js$1,rss);
    var $js$2=My_std["List"][20];
    var
     match=
      $js$2
       (function(res,acc)
         {var $js$3=res;
          if($js$3==0)
           {var $js$4=Resource["Cache"][11];
            var match$1=$js$4(res[1]);
            var $js$5=match$1;
            if($js$5)
             {var match$2=match$1[1];
              return [0,[0,match$2[1],acc[1]],[0,match$2[2],acc[2]]]}
            else
             {return acc}}
          else
           if($js$3==1){return acc}},
        results,
        [0,0,0]);
    var thunks=match[2];
    var cmds=match[1];
    var $js$3=My_std["List"][5];
    var count=$js$3(cmds);
    var $js$4=Command["jobs"][1]=1;
    if($js$4){var job_debug=10}else{var job_debug=5}
    var $js$5=count>1;
    if($js$5)
     {var $js$6=Log["dprintf"];
      $js$6
       (job_debug,
        [0,[11,">>> PARALLEL: ",[4,0,0,0,0]],">>> PARALLEL: %d"],
        count)}
    else
     {}
    var $js$7=Command["execute_many"];
    var opt_exn=$js$7(0,0,cmds);
    var $js$8=count>1;
    if($js$8)
     {var $js$9=Log["dprintf"];
      $js$9(job_debug,[0,[11,"<<< PARALLEL",0],"<<< PARALLEL"])}
    else
     {}
    var $js$10=opt_exn;
    if($js$10)
     {var match$1=opt_exn[1];
      var $js$11=My_std["List"][21];
      $js$11
       (function(res,thunk)
         {var $js$12=res;if($js$12){return thunk(0)}else{return 0}},
        match$1[1],
        thunks);
      var $js$12=Log["finish"];
      $js$12([0,106380200],0);
      "unknown primitive:raise"}
    else
     {var $js$13=My_std["List"][14];
      $js$13(function(thunk){return thunk(0)},thunks)}
    return results};
var
 force_self=
  function(depth,on_the_go,x)
   {self(depth,on_the_go,x);var $js=Resource["Cache"][9];return $js(x)};
var solve=force_self(0,0);
var
 solve_target=
  function(name,rs)
   {var match=self_first(0,0,0,rs);
    var $js=match;
    if($js==0)
     {var res=match[1];var $js$1=Resource["Cache"][9];$js$1(res);return res}
    else
     if($js==1)
      {var exn=match[1];
       var $js$2=exn[1]=Failed;
       if($js$2)
        {return "unknown primitive:raise"}
       else
        {return "unknown primitive:raise"}}};
module["exports"]=
{"Failed":Failed,
 "Circular":Circular,
 "solve":solve,
 "solve_target":solve_target};
