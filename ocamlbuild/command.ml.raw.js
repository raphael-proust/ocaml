var Const=require("Const");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Format=require("Format");
var Param_tags=require("Param_tags");
var Shell=require("Shell");
var Buffer=require("Buffer");
var Filename=require("Filename");
var Lexing=require("Lexing");
var My_std=require("My_std");
var Tags=require("Tags");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var Sys=require("Sys");
var jobs=[0,1];
var
 no_tag_handler=
  function(param){var $js=Pervasives["failwith"];return $js("no_tag_handler")};
var tag_handler=[0,no_tag_handler];
var
 atomize=
  function(l)
   {var $js=My_std["List"][16];
    var $js$1=$js(function(x){return [1,x]},l);
    return [0,$js$1]};
var
 atomize_paths=
  function(l)
   {var $js=My_std["List"][16];
    var $js$1=$js(function(x){return [2,x]},l);
    return [0,$js$1]};
var
 env_path=
  [246,
   function(param)
    {var path_var="unknown primitive:caml_sys_getenv";
     var $js="unknown primitive:caml_string_equal";
     if($js)
      {var parse_path=Lexers["parse_environment_path_w"]}
     else
      {var parse_path=Lexers["parse_environment_path"]}
     var $js$1=Lexing["from_string"];
     var $js$2=$js$1(path_var);
     var paths=parse_path(Const["Source"][3],$js$2);
     var
      norm_current_dir_name=
       function(path)
        {var $js$3="unknown primitive:caml_string_equal";
         if($js$3){return Filename["current_dir_name"]}else{return path}};
     var $js$3=My_std["List"][16];
     return $js$3(norm_current_dir_name,paths)}];
var $js=Hashtbl["create"];
var virtual_solvers=$js(0,32);
var
 setup_virtual_command_solver=
  function(virtual_command,solver)
   {var $js$1=Hashtbl["replace"];
    return $js$1(virtual_solvers,virtual_command,solver)};
var
 virtual_solver=
  function(virtual_command)
   {try
     {var $js$1=Hashtbl["find"];
      var solver=$js$1(virtual_solvers,virtual_command)}
    catch(exn)
     {var $js$2=exn=Not_found;
      if($js$2)
       {var $js$3=Pervasives["failwith"];
        var $js$4=My_std["sbprintf"];
        var
         $js$5=
          $js$4
           ([0,
             [11,
              "no solver for the virtual command ",
              [3,
               0,
               [11," (setup one with Command.setup_virtual_command_solver)",0]]],
             "no solver for the virtual command %S (setup one with Command.setup_virtual_command_solver)"],
            virtual_command);
        var solver=$js$3($js$5)}
      else
       {var solver="unknown primitive:reraise"}}
    try
     {return solver(0)}
    catch(exn$1)
     {var $js$6=exn$1=Not_found;
      if($js$6)
       {var $js$7=Pervasives["failwith"];
        var $js$8=Printf["sprintf"];
        var
         $js$9=
          $js$8
           ([0,
             [11,
              "the solver for the virtual command ",
              [3,0,[11," has failed finding a valid command",0]]],
             "the solver for the virtual command %S has failed finding a valid command"],
            virtual_command);
        return $js$7($js$9)}
      else
       {return "unknown primitive:reraise"}}};
var
 file_or_exe_exists=
  function(file)
   {var $js$1=My_std["sys_file_exists"];
    var $js$2=$js$1(file);
    var $js$3=My_std["sys_file_exists"];
    var $js$4=Pervasives["^"];
    var $js$5=$js$4(file,".exe");
    var $js$6=$js$3($js$5);
    var $js$7=(Sys["win32"]||Sys["cygwin"])&&$js$6;
    return $js$2||$js$7};
var
 search_in_path=
  function(cmd)
   {var
     try_path=
      function(path)
       {var $js$1="unknown primitive:caml_string_equal";
        if($js$1)
         {return file_or_exe_exists(cmd)}
        else
         {var $js$2=My_std["filename_concat"];
          var $js$3=$js$2(path,cmd);
          return file_or_exe_exists($js$3)}};
    var $js$1=Filename["is_implicit"];
    var $js$2=$js$1(cmd);
    if($js$2)
     {var $js$3=My_std["List"][32];
      var $js$4=My_std["!*"];
      var $js$5=$js$4(env_path);
      var path=$js$3(try_path,$js$5);
      var $js$6=My_std["filename_concat"];
      return $js$6(path,cmd)}
    else
     {return cmd}};
var
 string_of_command_spec_with_calls=
  function(call_with_tags,call_with_target,resolve_virtuals,spec)
   {var
     self=
      string_of_command_spec_with_calls
       (call_with_tags,call_with_target,resolve_virtuals);
    var $js$1=Buffer["create"];
    var b=$js$1(256);
    var $js$2="unknown primitive:caml_string_equal";
    if($js$2){var $js$3=Buffer["add_string"];$js$3(b,"''")}else{}
    var first=[0,1];
    var
     put_space=
      function(param)
       {var $js$4=first[1];
        if($js$4)
         {return first[1]=0,0}
        else
         {var $js$5=Buffer["add_char"];return $js$5(b,32)}};
    var
     put_filename=
      function(p)
       {var $js$4=Buffer["add_string"];
        var $js$5=Shell["quote_filename_if_needed"];
        var $js$6=$js$5(p);
        return $js$4(b,$js$6)};
    var
     do_spec=
      function(param)
       {var $js$4=param;
        if(typeof $js$4=="number")
         {if($js$4==0){return 0}}
        else
         {var $js$5=$js$4[0];
          if($js$5==0)
           {var $js$6=My_std["List"][14];return $js$6(do_spec,param[1])}
          else
           if($js$5==1)
            {var exit=61}
           else
            if($js$5==2)
             {var exit=61}
            else
             if($js$5==3)
              {var u=param[1];
               put_space(0);
               put_filename(u);
               return call_with_target(u)}
             else
              if($js$5==4)
               {put_space(0);
                var $js$7=Buffer["add_string"];
                return $js$7(b,param[1])}
              else
               if($js$5==5)
                {var tags=param[1];
                 call_with_tags(tags);
                 var $js$8=tag_handler[1];
                 var $js$9=$js$8(tags);
                 return do_spec($js$9)}
               else
                if($js$5==6)
                 {var v=param[1];
                  var $js$10=resolve_virtuals;
                  if($js$10)
                   {var $js$11=virtual_solver(v);return do_spec($js$11)}
                  else
                   {put_space(0);
                    var $js$12=Printf["bprintf"];
                    var $js$13=Shell["quote_filename_if_needed"];
                    var $js$14=$js$13(v);
                    return $js$12
                            (b,
                             [0,[11,"<virtual ",[2,0,[12,62,0]]],"<virtual %s>"],
                             $js$14)}}
                else
                 if($js$5==7)
                  {put_space(0);
                   var $js$15=self(param[1]);
                   return put_filename($js$15)}}
        switch(exit){case 61:put_space(0);return put_filename(param[1])}};
    do_spec(spec);
    var $js$4=Buffer["contents"];
    return $js$4(b)};
var
 string_of_command_spec=
  function(x)
   {return string_of_command_spec_with_calls
            (function(prim){return 0},function(prim){return 0},0,x)};
var
 string_target_and_tags_of_command_spec=
  function(spec)
   {var rtags=[0,Tags["empty"]];
    var rtarget=[0,""];
    var
     union_rtags=
      function(tags)
       {var $js$1=Tags["union"];
        var $js$2=$js$1(rtags[1],tags);
        return rtags[1]=$js$2,0};
    var $js$1=function(prim,prim$1){return prim[1]=prim$1,0};
    var $js$2=$js$1(rtarget);
    var s=string_of_command_spec_with_calls(union_rtags,$js$2,1,spec);
    var $js$3="unknown primitive:caml_string_equal";
    if($js$3){var target=s}else{var target=rtarget[1]}
    return [0,s,target,rtags[1]]};
var
 string_print_of_command_spec=
  function(spec,quiet,pretend)
   {var match=string_target_and_tags_of_command_spec(spec);
    var tags=match[3];
    var target=match[2];
    var s=match[1];
    return function(param)
     {var $js$1=!quiet;
      if($js$1){var $js$2=Log["event"];$js$2([0,pretend],s,target,tags)}else{}
      return s}};
var
 print_escaped_string=
  function(f){var $js$1=Format["fprintf"];return $js$1(f,[0,[3,0,0],"%S"])};
var
 print=
  function(f,param)
   {var $js$1=param;
    if(typeof $js$1=="number")
     {if($js$1==0){var $js$2=Format["pp_print_string"];return $js$2(f,"nop")}}
    else
     {var $js$3=$js$1[0];
      if($js$3==0)
       {var $js$4=My_std["List"][1];return $js$4(print,f,param[1])}
      else
       if($js$3==1)
        {var $js$5=Format["pp_print_string"];
         var $js$6=string_of_command_spec(param[1]);
         return $js$5(f,$js$6)}
       else
        if($js$3==2)
         {var $js$7=Format["fprintf"];
          var $js$8=My_std["List"][1];
          var $js$9=$js$8(print_escaped_string);
          return $js$7
                  (f,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [11,
                      "Echo(",
                      [15,[12,44,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                    "@[<2>Echo(%a,@ %a)@]"],
                   $js$9,
                   param[1],
                   print_escaped_string,
                   param[2])}}};
var
 to_string=
  function(x)
   {var $js$1=My_std["sbprintf"];return $js$1([0,[15,0],"%a"],print,x)};
var xmin=[0,Pervasives["max_int"]];
var xmax=[0,0];
var xsum=[0,0];
var xsumall=[0,0];
var xcount=[0,0];
var xcountall=[0,0];
var
 add_parallel_stat=
  function(x)
   {var $js$1=x>0;
    if($js$1){xcountall[0]++;xsumall[1]=x+xsumall[1],0}else{}
    var $js$2=x>1;
    if($js$2)
     {xcount[0]++;
      xsum[1]=x+xsum[1],0;
      var $js$3=Pervasives["max"];
      var $js$4=$js$3(xmax[1],x);
      xmax[1]=$js$4,0;
      var $js$5=Pervasives["min"];
      var $js$6=$js$5(xmin[1],x);
      return xmin[1]=$js$6,0}
    else
     {return 0}};
var
 dump_parallel_stats=
  function(param)
   {var $js$1=jobs[1]!=1;
    if($js$1)
     {var $js$2=xcount[1]=0;
      if($js$2)
       {var $js$3=Log["dprintf"];
        return $js$3
                (1,[0,[11,"# No parallelism done",0],"# No parallelism done"])}
      else
       {var xaverage=xsumall[1]/xcountall[1];
        var xaveragepara=xsum[1]/xcount[1];
        var $js$4=Log["dprintf"];
        return $js$4
                (1,
                 [0,
                  [11,
                   "# Parallel statistics: { count(total): ",
                   [4,
                    0,
                    0,
                    0,
                    [12,
                     40,
                     [4,
                      0,
                      0,
                      0,
                      [11,
                       "), max: ",
                       [4,
                        0,
                        0,
                        0,
                        [11,
                         ", min: ",
                         [4,
                          0,
                          0,
                          0,
                          [11,
                           ", average(total): ",
                           [8,0,0,[0,3],[12,40,[8,0,0,[0,3],[11,") }",0]]]]]]]]]]]]],
                  "# Parallel statistics: { count(total): %d(%d), max: %d, min: %d, average(total): %.3f(%.3f) }"],
                 xcount[1],
                 xcountall[1],
                 xmax[1],
                 xmin[1],
                 xaveragepara,
                 xaverage)}}
    else
     {return 0}};
var match=[0,add_parallel_stat,dump_parallel_stats];
var dump_parallel_stats$1=match[2];
var add_parallel_stat$1=match[1];
var
 do_echo=
  function(texts,dest_path)
   {var $js$1=My_std["with_output_file"];
    return $js$1
            (0,
             dest_path,
             function(oc)
              {var $js$2=My_std["List"][14];
               var $js$3=Pervasives["output_string"];
               var $js$4=$js$3(oc);
               return $js$2($js$4,texts)})};
var echo=function(x,y,param){do_echo(x,y);return ""};
var Primitives=[0,do_echo,echo];
var
 list_rev_iter=
  function(f,param)
   {var $js$1=param;
    if($js$1){list_rev_iter(f,param[2]);return f(param[1])}else{return 0}};
var
 flatten_commands=
  function(quiet,pretend,cmd)
   {var
     loop=
      function(acc,param)
       {var $js$1=param;
        if($js$1)
         {var match$1=param[1];
          var $js$2=match$1;
          if(typeof $js$2=="number")
           {if($js$2==0){return loop(acc,param[2])}}
          else
           {var $js$3=$js$2[0];
            if($js$3==0)
             {var $js$4=loop(acc,match$1[1]);return loop($js$4,param[2])}
            else
             if($js$3==1)
              {var
                $js$5=
                 string_print_of_command_spec(match$1[1],quiet,pretend);
               var $js$6=[0,$js$5,acc];
               return loop($js$6,param[2])}
             else
              if($js$3==2)
               {var $js$7=Primitives[2];
                var $js$8=$js$7(match$1[1],match$1[2]);
                var $js$9=[0,$js$8,acc];
                return loop($js$9,param[2])}}}
        else
         {return acc}};
    var $js$1=My_std["List"][9];
    var $js$2=loop(0,[0,cmd,0]);
    return $js$1($js$2)};
var
 execute_many=
  function(*opt*,*opt*$1,cmds)
   {var $js$1=*opt*;
    if($js$1){var quiet=*opt*[1]}else{var quiet=0}
    var $js$2=*opt*$1;
    if($js$2){var pretend=*opt*$1[1]}else{var pretend=0}
    var $js$3=My_std["List"][5];
    var $js$4=$js$3(cmds);
    add_parallel_stat$1($js$4);
    var $js$5=My_std["!*"];
    var $js$6=$js$5(My_unix["is_degraded"]);
    var degraded=$js$6||"unknown primitive:caml_string_equal";
    var jobs$1=jobs[1];
    var $js$7=jobs$1<0;
    if($js$7){var $js$8=Pervasives["invalid_arg"];$js$8("jobs < 0")}else{}
    var $js$9=jobs$1=0;
    if($js$9){var max_jobs=0}else{var max_jobs=[0,jobs$1]}
    var ticker=Log["update"];
    var display=Log["display"];
    var $js$10=cmds=0;
    if($js$10)
     {return 0}
    else
     {var $js$11=My_std["List"][16];
      var $js$12=flatten_commands(quiet,pretend);
      var konts=$js$11($js$12,cmds);
      var $js$13=pretend;
      if($js$13)
       {var $js$14=My_std["List"][14];
        var $js$15=My_std["List"][14];
        var $js$16=$js$15(function(f){var $js$17=f(0);return 0});
        $js$14($js$16,konts);
        return 0}
      else
       {var $js$17=My_std["reset_filesys_cache"];
        $js$17(0);
        var $js$18=degraded;
        if($js$18)
         {var $js$19=My_std["List"][19];
          var
           match$1=
            $js$19
             (function(param,cmds$1)
               {var acc_exn=param[2];
                var acc_res=param[1];
                var $js$20=acc_exn;
                if($js$20)
                 {return [0,[0,0,acc_res],acc_exn]}
                else
                 {try
                   {var $js$21=My_std["List"][14];
                    $js$21
                     (function(action)
                       {var cmd=action(0);
                        var $js$22=My_std["sys_command"];
                        var rc=$js$22(cmd);
                        var $js$23=rc!=0;
                        if($js$23)
                         {var $js$24=!quiet;
                          if($js$24)
                           {var $js$25=Log["eprintf"];
                            $js$25
                             ([0,
                               [11,
                                "Exit code ",
                                [4,
                                 0,
                                 0,
                                 0,
                                 [11," while executing this command:",[17,3,[2,0,0]]]]],
                               "Exit code %d while executing this command:@\n%s"],
                              rc,
                              cmd)}
                          else
                           {}
                          return "unknown primitive:raise"}
                        else
                         {return 0}},
                      cmds$1);
                    return [0,[0,1,acc_res],0]}
                  catch(e){return [0,[0,0,acc_res],[0,e]]}}},
              [0,0,0],
              konts);
          var opt_exn=match$1[2];
          var $js$20=opt_exn;
          if($js$20)
           {var $js$21=My_std["List"][9];
            var $js$22=$js$21(match$1[1]);
            var $js$23=[0,$js$22,opt_exn[1]];
            return [0,$js$23]}
          else
           {return 0}}
        else
         {var $js$24=My_unix["execute_many"];
          return $js$24(max_jobs,[0,ticker],0,[0,display],konts)}}}};
var
 execute=
  function(quiet,pretend,cmd)
   {var match$1=execute_many(quiet,pretend,[0,cmd,0]);
    var $js$1=match$1;
    if($js$1){return "unknown primitive:raise"}else{return 0}};
var
 iter_tags=
  function(f,x)
   {var
     spec=
      function(x$1)
       {var $js$1=x$1;
        if(typeof $js$1=="number")
         {"unknown block:x/1785"}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var $js$3=My_std["List"][14];return $js$3(spec,x$1[1])}
          else
           if($js$2==5){return f(x$1[1])}else{var exit=19}}
        switch(exit){case 19:return 0}};
    var
     cmd=
      function(x$1)
       {var $js$1=x$1;
        if(typeof $js$1=="number")
         {if($js$1==0){var exit=18}}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var $js$3=My_std["List"][14];return $js$3(cmd,x$1[1])}
          else
           if($js$2==1){return spec(x$1[1])}else if($js$2==2){var exit=18}}
        switch(exit){case 18:return 0}};
    return cmd(x)};
var
 fold_pathnames=
  function(f,x)
   {var
     spec=
      function(param)
       {var $js$1=param;
        if(typeof $js$1=="number")
         {"unknown block:param/1876"}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var $js$3=My_std["List"][20];return $js$3(spec,param[1])}
          else
           if($js$2==2)
            {var exit=16}
           else
            if($js$2==3){var exit=16}else{var exit=14}}
        switch(exit)
         {case 16:return f(param[1]);case 14:return function(acc){return acc}}};
    var
     cmd=
      function(param)
       {var $js$1=param;
        if(typeof $js$1=="number")
         {if($js$1==0){return function(acc){return acc}}}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var $js$3=My_std["List"][20];return $js$3(cmd,param[1])}
          else
           if($js$2==1)
            {return spec(param[1])}
           else
            if($js$2==2){return f(param[2])}}};
    return cmd(x)};
var
 reduce=
  function(x)
   {var
     self=
      function(x$1,acc)
       {var $js$1=x$1;
        if(typeof $js$1=="number")
         {if($js$1==0){return acc}}
        else
         {var $js$2=$js$1[0];
          if($js$2==0)
           {var $js$3=My_std["List"][20];return $js$3(self,x$1[1],acc)}
          else
           if($js$2==5)
            {var $js$4=tag_handler[1];
             var $js$5=$js$4(x$1[1]);
             return self($js$5,acc)}
           else
            if($js$2==7)
             {var $js$6=reduce(x$1[1]);
              var $js$7=[7,$js$6];
              return [0,$js$7,acc]}
            else
             {return [0,x$1,acc]}}};
    var xs=self(x,0);
    var $js$1=xs;
    if($js$1)
     {var $js$2=xs[2];if($js$2){return [0,xs]}else{return xs[1]}}
    else
     {return 0}};
var list=My_std["List"][20];
var
 text=
  function(x,acc)
   {var $js$1=My_std["Digest"][1];var $js$2=$js$1(x);return [0,$js$2,acc]};
var
 cmd=
  function(param)
   {var $js$1=param;
    if(typeof $js$1=="number")
     {if($js$1==0){return function(acc){return acc}}}
    else
     {var $js$2=$js$1[0];
      if($js$2==0)
       {return list(cmd,param[1])}
      else
       if($js$2==1)
        {var spec=param[1];
         return function(acc)
          {var $js$3=string_of_command_spec(spec);return [0,$js$3,acc]}}
       else
        if($js$2==2){return list(text,[0,param[2],param[1]])}}};
var
 digest=
  function(x)
   {var xs=cmd(x,0);
    var $js$1=xs;
    if($js$1)
     {var $js$2=xs[2];if($js$2){var exit=8}else{return xs[1]}}
    else
     {var exit=8}
    switch(exit)
     {case 8:
       var $js$3=My_std["Digest"][1];
       var $js$4=Pervasives["^"];
       var $js$5=Pervasives["^"];
       var $js$6=My_std["String"][22];
       var $js$7=$js$6(";",xs);
       var $js$8=$js$5($js$7,"]");
       var $js$9=$js$4("[",$js$8);
       return $js$3($js$9)
      }};
var all_deps_of_tags=[0,0];
var
 cons=
  function(deps,acc)
   {var $js$1=My_std["&"];
    var $js$2=My_std["List"][19];
    var
     $js$3=
      $js$2
       (function(acc$1,dep)
         {var $js$4=My_std["List"][30];
          var $js$5=$js$4(dep,acc$1);
          if($js$5){return acc$1}else{return [0,dep,acc$1]}},
        acc,
        deps);
    return $js$1(My_std["List"][9],$js$3)};
var
 deps_of_tags=
  function(tags)
   {var $js$1=My_std["List"][19];
    return $js$1
            (function(acc,param)
              {var $js$2=Tags["does_match"];
               var $js$3=$js$2(tags,param[1]);
               if($js$3){return cons(param[2],acc)}else{return acc}},
             0,
             all_deps_of_tags[1])};
var
 set_deps_of_tags=
  function(tags,deps)
   {return all_deps_of_tags[1]=[0,[0,tags,deps],all_deps_of_tags[1]],0};
var
 dep=
  function(tags,deps)
   {var $js$1=Tags["of_list"];
    var $js$2=$js$1(tags);
    return set_deps_of_tags($js$2,deps)};
var
 pdep=
  function(tags,ptag,deps)
   {var $js$1=Param_tags["declare"];
    return $js$1
            (ptag,
             function(param)
              {var $js$2=Param_tags["make"];
               var $js$3=$js$2(ptag,param);
               var $js$4=[0,$js$3,tags];
               var $js$5=deps(param);
               return dep($js$4,$js$5)})};
var list_all_deps=function(param){return all_deps_of_tags[1]};
module["exports"]=
{"atomize":atomize,
 "atomize_paths":atomize_paths,
 "execute":execute,
 "execute_many":execute_many,
 "setup_virtual_command_solver":setup_virtual_command_solver,
 "search_in_path":search_in_path,
 "reduce":reduce,
 "print":print,
 "to_string":to_string,
 "string_of_command_spec":string_of_command_spec,
 "string_target_and_tags_of_command_spec":
 string_target_and_tags_of_command_spec,
 "iter_tags":iter_tags,
 "fold_pathnames":fold_pathnames,
 "digest":digest,
 "jobs":jobs,
 "tag_handler":tag_handler,
 "dump_parallel_stats":dump_parallel_stats$1,
 "deps_of_tags":deps_of_tags,
 "dep":dep,
 "pdep":pdep,
 "list_all_deps":list_all_deps,
 "file_or_exe_exists":file_or_exe_exists};
