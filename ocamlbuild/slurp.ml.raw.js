var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Filename=require("Filename");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Array=require("Array");
var /=My_std["filename_concat"];
var
 filter=
  function(predicate,f)
   {var $js=f;
    if(typeof $js=="number")
     {if($js==0){return 0}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var entries=f[5];
        var attr=f[4];
        var name=f[2];
        var path=f[1];
        var $js$2=predicate(path,name,attr);
        if($js$2)
         {return [0,
                  path,
                  name,
                  f[3],
                  attr,
                  [246,
                   function(param)
                    {var $js$3=My_std["List"][16];
                     var $js$4=filter(predicate);
                     var $js$5=My_std["!*"];
                     var $js$6=$js$5(entries);
                     return $js$3($js$4,$js$6)}]]}
        else
         {return 0}}
      else
       if($js$1==1)
        {var $js$3=predicate(f[1],f[2],f[4]);
         if($js$3){return f}else{return 0}}
       else
        if($js$1==2){return f}}};
var
 real_slurp=
  function(path)
   {var cwd="unknown primitive:caml_sys_getcwd";
    var
     abs=
      function(x)
       {var $js=Filename["is_implicit"];
        var $js$1=$js(x);
        var $js$2=Filename["is_relative"];
        var $js$3=$js$2(x);
        var $js$4=$js$1||$js$3;
        if($js$4){return /(cwd,x)}else{return x}};
    var $js=Hashtbl["create"];
    var visited=$js(0,1024);
    var
     scandir=
      function(path$1,names)
       {var $js$1=Array["fold_left"];
        var
         match=
          $js$1
           (function(acc,name)
             {var dir_acc=acc[2];
              var file_acc=acc[1];
              var match$1=do_entry(1,path$1,name);
              var $js$2=match$1;
              if($js$2)
               {var entry=match$1[1];
                var $js$3=entry;
                if(typeof $js$3=="number")
                 {if($js$3==0){return acc}}
                else
                 {var $js$4=$js$3[0];
                  if($js$4==0)
                   {var exit=19}
                  else
                   if($js$4==1)
                    {return [0,[0,entry,file_acc],dir_acc]}
                   else
                    if($js$4==2){var exit=19}}
                switch(exit){case 19:return [0,file_acc,[0,entry,dir_acc]]}}
              else
               {return acc}},
            [0,0,0],
            names);
        var $js$2=Pervasives["@"];
        return $js$2(match[1],match[2])};
    var
     do_entry=
      function(link_mode,path$1,name)
       {var fn=/(path$1,name);
        var absfn=abs(fn);
        try
         {var $js$1=link_mode;
          if($js$1)
           {var $js$2=My_unix["lstat"];var $js$3=$js$2(absfn)}
          else
           {var $js$4=My_unix["stat"];var $js$3=$js$4(absfn)}
          var match=[0,$js$3]}
        catch(x){var match=[1,x]}
        var $js$5=match;
        if($js$5==0)
         {var st=match[1];
          var key=st[2];
          try
           {var $js$6=Hashtbl["find"];var $js$7=$js$6(visited,key)}
          catch(exn)
           {var $js$8=exn=Not_found;
            if($js$8){var $js$7=0}else{var $js$7="unknown primitive:reraise"}}
          if($js$7)
           {return 0}
          else
           {var $js$9=Hashtbl["add"];
            $js$9(visited,key,1);
            var match$1=st[1];
            var $js$10=match$1;
            var $js$11=$js$10[0];
            if($js$11==0)
             {var $js$12=My_std["sys_readdir"];
              var match$2=$js$12(absfn);
              var $js$13=match$2;
              if($js$13==0)
               {var names=match$2[1];
                var
                 res=
                  [0,
                   [0,
                    path$1,
                    name,
                    [250,st],
                    0,
                    [246,function(param){return scandir(fn,names)}]]]}
              else
               if($js$13==1){var res=[0,[2,match$2[1]]]}}
            else
             if($js$11==1)
              {var res=[0,[1,path$1,name,[250,st],0]]}
             else
              if($js$11==2)
               {var $js$14=My_unix["readlink"];
                var fn'=$js$14(absfn);
                var $js$15=My_std["sys_file_exists"];
                var $js$16=abs(fn');
                var $js$17=$js$15($js$16);
                if($js$17)
                 {var res=do_entry(0,path$1,name)}
                else
                 {var res=[0,[1,path$1,name,[250,st],0]]}}
              else
               if($js$11==3){var res=0}
            var $js$18=Hashtbl["replace"];
            $js$18(visited,key,0);
            return res}}
        else
         if($js$5==1){return [0,[2,match[1]]]}};
    var match=do_entry(1,"",path);
    var $js$1=match;
    if($js$1){return match[1]}else{return "unknown primitive:raise"}};
var
 split=
  function(path)
   {var
     aux=
      function(path$1)
       {var $js="unknown primitive:caml_string_equal";
        if($js)
         {return 0}
        else
         {var $js$1=Filename["basename"];
          var $js$2=$js$1(path$1);
          var $js$3=Filename["dirname"];
          var $js$4=$js$3(path$1);
          var $js$5=aux($js$4);
          return [0,$js$2,$js$5]}};
    var $js=My_std["List"][9];
    var $js$1=aux(path);
    return $js($js$1)};
var
 join=
  function(param)
   {var $js=param;
    if($js)
     {var xs=param[2];
      var x=param[1];
      var $js$1=xs;
      if($js$1){var $js$2=join(xs);return /(x,$js$2)}else{return x}}
    else
     {return "unknown primitive:raise"}};
var
 add=
  function(root,path,entries)
   {var $js=path;
    if($js)
     {var xspath=path[2];
      var xpath=path[1];
      var $js$1=entries;
      if($js$1)
       {var d=entries[1];
        var $js$2=d;
        if(typeof $js$2=="number")
         {if($js$2==0){var exit=14}}
        else
         {var $js$3=$js$2[0];
          if($js$3==0)
           {var entries$1=entries[2];
            var dentries=d[5];
            var dname=d[2];
            var $js$4="unknown primitive:caml_string_equal";
            if($js$4)
             {return [0,
                      [0,
                       d[1],
                       dname,
                       d[3],
                       d[4],
                       [246,
                        function(param)
                         {var $js$5=/(root,xpath);
                          var $js$6=My_std["!*"];
                          var $js$7=$js$6(dentries);
                          return add($js$5,xspath,$js$7)}]],
                      entries$1]}
            else
             {var $js$5=add(root,path,entries$1);return [0,d,$js$5]}}
          else
           if($js$3==1){var exit$1=16}else if($js$3==2){var exit=14}}}
      else
       {var exit$1=16}
      switch(exit$1)
       {case 16:
         var $js$6=xspath;
         if($js$6)
          {var $js$7=entries;
           if($js$7)
            {var entries'=entries[2];
             var f=entries[1];
             var fname=f[2];
             var $js$8="unknown primitive:caml_string_equal";
             if($js$8)
              {return [0,
                       [0,
                        f[1],
                        fname,
                        f[3],
                        f[4],
                        [246,
                         function(param)
                          {var $js$9=/(root,xpath);return add($js$9,xspath,0)}]],
                       entries']}
             else
              {var $js$9=add(root,path,entries');return [0,f,$js$9]}}
           else
            {var $js$10=join(xspath);
             var $js$11=/(root,$js$10);
             var
              $js$12=
               [0,
                $js$11,
                xpath,
                [246,
                 function(param)
                  {var $js$13=My_unix["stat"];
                   var $js$14=join(path);
                   var $js$15=/(root,$js$14);
                   return $js$13($js$15)}],
                0,
                [246,
                 function(param)
                  {var $js$13=/(root,xpath);return add($js$13,xspath,0)}]];
             return [0,$js$12,0]}}
         else
          {var $js$13=entries;
           if($js$13)
            {var f$1=entries[1];
             var $js$14="unknown primitive:caml_string_equal";
             if($js$14)
              {return entries}
             else
              {var $js$15=add(root,path,entries[2]);return [0,f$1,$js$15]}}
           else
            {return [0,
                     [1,
                      root,
                      xpath,
                      [246,
                       function(param)
                        {var $js$16=My_unix["stat"];
                         var $js$17=/(root,xpath);
                         return $js$16($js$17)}],
                      0],
                     0]}}
        }}
    else
     {return entries}
    switch(exit)
     {case 14:
       var $js$16="unknown primitive:isint";
       if($js$16){return add(root,path,entries[2])}else{return entries}
      }};
var
 slurp_with_find=
  function(path)
   {try
     {var find_cmd="unknown primitive:caml_sys_getenv"}
    catch(exn){var find_cmd="find"}
    var $js=My_unix["run_and_open"];
    var $js$1=Printf["sprintf"];
    var $js$2=Filename["quote"];
    var $js$3=$js$2(path);
    var $js$4=$js$1([0,[2,0,[12,32,[2,0,0]]],"%s %s"],find_cmd,$js$3);
    var
     lines=
      $js
       ($js$4,
        function(ic)
         {var acc=0;
          try
           {for(;;)
             {var $js$5=1;
              if($js$5)
               {var $js$6=Pervasives["input_line"];
                var $js$7=$js$6(ic);
                var $js$8=[0,$js$7,acc];
                var acc=$js$8}
              else
               break}
            return 0}
          catch(exn$1)
           {var $js$9=exn$1=End_of_file;
            if($js$9){return acc}else{return "unknown primitive:reraise"}}});
    var $js$5=My_std["List"][20];
    var
     res=
      $js$5
       (function(line,acc){var $js$6=split(line);return add(path,$js$6,acc)},
        lines,
        0);
    var $js$6=res;
    if($js$6)
     {var $js$7=res[2];
      if($js$7)
       {var $js$8=Filename["basename"];
        var $js$9=$js$8(path);
        return [0,
                path,
                $js$9,
                [246,
                 function(param)
                  {var $js$10=My_unix["stat"];return $js$10(path)}],
                0,
                [250,res]]}
      else
       {return res[1]}}
    else
     {return 0}};
var
 slurp=
  function(x)
   {var $js=My_std["!*"];
    var $js$1=$js(My_unix["is_degraded"]);
    if($js$1){return slurp_with_find(x)}else{return real_slurp(x)}};
var
 print=
  function(print_attr,f,entry)
   {var $js=entry;
    if(typeof $js=="number")
     {if($js==0)
       {var $js$1=Format["fprintf"];
        return $js$1(f,[0,[11,"Nothing",0],"Nothing"])}}
    else
     {var $js$2=$js[0];
      if($js$2==0)
       {var $js$3=Format["fprintf"];
        var $js$4=My_std["List"][1];
        var $js$5=print(print_attr);
        var $js$6=$js$4($js$5);
        var $js$7=My_std["!*"];
        var $js$8=$js$7(entry[5]);
        return $js$3
                (f,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [11,
                    "Dir(",
                    [3,
                     0,
                     [12,
                      44,
                      [17,
                       [0,"@ ",1,0],
                       [3,
                        0,
                        [12,
                         44,
                         [17,
                          [0,"@ ",1,0],
                          [11,
                           "_,",
                           [17,
                            [0,"@ ",1,0],
                            [15,[12,44,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]]]]],
                  "@[<2>Dir(%S,@ %S,@ _,@ %a,@ %a)@]"],
                 entry[1],
                 entry[2],
                 print_attr,
                 entry[4],
                 $js$6,
                 $js$8)}
      else
       if($js$2==1)
        {var $js$9=Format["fprintf"];
         return $js$9
                 (f,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "File(",
                     [3,
                      0,
                      [12,
                       44,
                       [17,
                        [0,"@ ",1,0],
                        [3,
                         0,
                         [12,
                          44,
                          [17,
                           [0,"@ ",1,0],
                           [11,"_,",[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                   "@[<2>File(%S,@ %S,@ _,@ %a)@]"],
                  entry[1],
                  entry[2],
                  print_attr,
                  entry[4])}
       else
        if($js$2==2)
         {var $js$10=Format["fprintf"];
          return $js$10(f,[0,[11,"Error(_)",0],"Error(_)"])}}};
var
 fold=
  function(f,entry,acc)
   {var $js=entry;
    if(typeof $js=="number")
     {if($js==0){var exit=4}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=My_std["List"][20];
        var $js$3=fold(f);
        var $js$4=My_std["!*"];
        var $js$5=$js$4(entry[5]);
        var $js$6=$js$2($js$3,$js$5,acc);
        return f(entry[1],entry[2],entry[4],$js$6)}
      else
       if($js$1==1)
        {return f(entry[1],entry[2],entry[4],acc)}
       else
        if($js$1==2){var exit=4}}
    switch(exit){case 4:return acc}};
var
 map=
  function(f,entry)
   {var
     self=
      function(entry$1)
       {var $js=entry$1;
        if(typeof $js=="number")
         {if($js==0){return 0}}
        else
         {var $js$1=$js[0];
          if($js$1==0)
           {var contents=entry$1[5];
            var name=entry$1[2];
            var path=entry$1[1];
            var $js$2=f(path,name,entry$1[4]);
            return [0,
                    path,
                    name,
                    entry$1[3],
                    $js$2,
                    [246,
                     function(param)
                      {var $js$3=My_std["List"][16];
                       var $js$4=My_std["!*"];
                       var $js$5=$js$4(contents);
                       return $js$3(self,$js$5)}]]}
          else
           if($js$1==1)
            {var name$1=entry$1[2];
             var path$1=entry$1[1];
             var $js$3=f(path$1,name$1,entry$1[4]);
             return [1,path$1,name$1,entry$1[3],$js$3]}
           else
            if($js$1==2){return [2,entry$1[1]]}}};
    return self(entry)};
var
 force=
  function(param)
   {var $js=param;
    if(typeof $js=="number")
     {if($js==0){var exit=2}}
    else
     {var $js$1=$js[0];
      if($js$1==0)
       {var $js$2=My_std["!*"];
        var match=$js$2(param[3]);
        var $js$3=My_std["List"][14];
        var $js$4=My_std["!*"];
        var $js$5=$js$4(param[5]);
        return $js$3(force,$js$5)}
      else
       if($js$1==1)
        {var $js$6=My_std["!*"];var $js$7=$js$6(param[3]);return 0}
       else
        if($js$1==2){var exit=2}}
    switch(exit){case 2:return 0}};
module["exports"]=
{"slurp":slurp,"filter":filter,"map":map,"fold":fold,"force":force};
