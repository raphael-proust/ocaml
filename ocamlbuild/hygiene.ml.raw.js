var Options=require("Options");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Shell=require("Shell");
var Filename=require("Filename");
var My_std=require("My_std");
var Log=require("Log");
var Exit_hygiene_violations="unknown primitive:caml_set_oo_id";
var
 list_collect=
  function(f,l)
   {var
     loop=
      function(result,param)
       {var $js=param;
        if($js)
         {var rest=param[2];
          var match=f(param[1]);
          var $js$1=match;
          if($js$1)
           {return loop([0,match[1],result],rest)}
          else
           {return loop(result,rest)}}
        else
         {var $js$2=My_std["List"][9];return $js$2(result)}};
    return loop(0,l)};
var
 list_none_for_all=
  function(f,l)
   {var
     loop=
      function(param)
       {var $js=param;
        if($js)
         {var y=f(param[1]);
          var $js$1=y;
          if($js$1){return y}else{return loop(param[2])}}
        else
         {return 0}};
    return loop(l)};
var sf=Printf["sprintf"];
var $js=My_std["Set"][1];
var let=My_std["String"];
var $js$1=[0,let[40],let[1]];
var SS=$js($js$1);
var
 check=
  function(sanitize,laws,entry)
   {var penalties=[0,0];
    var microbes=[0,SS[1]];
    var $js$2=sanitize;
    if($js$2)
     {var fn=sanitize[1];
      var $js$3=My_std["sys_file_exists"];
      var $js$4=$js$3(fn);
      if($js$4)
       {var $js$5=My_std["sys_remove"];var match=$js$5(fn)}
      else
       {var match=0}}
    else
     {var match=0}
    var
     remove=
      function(path,name)
       {var $js$6=sanitize!=0;
        if($js$6)
         {var $js$7=SS[4];
          var $js$8=My_std["filename_concat"];
          var $js$9=$js$8(path,name);
          var $js$10=$js$7($js$9,microbes[1]);
          return microbes[1]=$js$10,0}
        else
         {return 0}};
    var
     check_rule=
      function(entries,param)
       {var $js$6=param;
        if($js$6==0)
         {var suffix2=param[2];
          var suffix1=param[1];
          return list_collect
                  (function(param$1)
                    {var $js$7=param$1;
                     if(typeof $js$7=="number")
                      {"unknown block:param/1796"}
                     else
                      {var $js$8=$js$7[0];
                       if($js$8==1)
                        {var name=param$1[2];
                         var path=param$1[1];
                         var $js$9=param$1[4]!=0;
                         if($js$9)
                          {var $js$10=Filename["check_suffix"];
                           var $js$11=$js$10(name,suffix1);
                           if($js$11)
                            {var $js$12=Filename["chop_suffix"];
                             var base=$js$12(name,suffix1);
                             var $js$13=Pervasives["^"];
                             var name'=$js$13(base,suffix2);
                             var $js$14=My_std["List"][27];
                             var
                              $js$15=
                               $js$14
                                (function(param$2)
                                  {var $js$16=param$2;
                                   if(typeof $js$16=="number")
                                    {"unknown block:param/1797"}
                                   else
                                    {var $js$17=$js$16[0];
                                     if($js$17==1)
                                      {var $js$18=param$2[4]!=0;
                                       if($js$18)
                                        {return "unknown primitive:caml_string_equal"}
                                       else
                                        {var exit=10}}
                                     else
                                      {var exit=10}}
                                   switch(exit){case 10:return 0}},
                                 entries);
                             if($js$15)
                              {remove(path,name');
                               var
                                $js$16=
                                 sf
                                  ([0,
                                    [11,
                                     "Files ",
                                     [2,
                                      0,
                                      [11,
                                       " and ",
                                       [2,0,[11," should not be together in ",[2,0,0]]]]]],
                                    "Files %s and %s should not be together in %s"],
                                   name,
                                   name',
                                   path);
                               return [0,$js$16]}
                             else
                              {return 0}}
                           else
                            {return 0}}
                         else
                          {var exit=14}}
                       else
                        {var exit=14}}
                     switch(exit){case 14:return 0}},
                   entries)}
        else
         if($js$6==1)
          {var suffix=param[1];
           return list_collect
                   (function(param$1)
                     {var $js$7=param$1;
                      if(typeof $js$7=="number")
                       {"unknown block:param/1787"}
                      else
                       {var $js$8=$js$7[0];
                        if($js$8==1)
                         {var name=param$1[2];
                          var path=param$1[1];
                          var $js$9=param$1[4]!=0;
                          if($js$9)
                           {var $js$10=Filename["check_suffix"];
                            var $js$11=$js$10(name,suffix);
                            var $js$12=Pathname["link_to_dir"];
                            var $js$13=My_std["filename_concat"];
                            var $js$14=$js$13(path,name);
                            var $js$15=$js$12($js$14,Options["build_dir"][1]);
                            var $js$16=!$js$15;
                            var $js$17=$js$11&&$js$16;
                            if($js$17)
                             {remove(path,name);
                              var
                               $js$18=
                                sf
                                 ([0,
                                   [11,
                                    "File ",
                                    [2,0,[11," in ",[2,0,[11," has suffix ",[2,0,0]]]]]],
                                   "File %s in %s has suffix %s"],
                                  name,
                                  path,
                                  suffix);
                              return [0,$js$18]}
                            else
                             {return 0}}
                          else
                           {var exit=8}}
                        else
                         {var exit=8}}
                      switch(exit){case 8:return 0}},
                    entries)}};
    var
     check_entry=
      function(param)
       {var $js$6=param;
        if(typeof $js$6=="number")
         {"unknown block:param/1774"}
        else
         {var $js$7=$js$6[0];
          if($js$7==0)
           {var $js$8=param[4]!=0;
            if($js$8)
             {var entries=param[5];
              var $js$9=My_std["List"][14];
              $js$9
               (function(law)
                 {var $js$10=My_std["List"][12];
                  var $js$11=My_std["List"][16];
                  var $js$12=My_std["!*"];
                  var $js$13=$js$12(entries);
                  var $js$14=check_rule($js$13);
                  var $js$15=$js$11($js$14,law[2]);
                  var explanations=$js$10($js$15);
                  var $js$16=explanations;
                  if($js$16)
                   {return penalties[1]=[0,[0,law,explanations],penalties[1]],0}
                  else
                   {return 0}},
                laws);
              var $js$10=My_std["List"][14];
              var $js$11=My_std["!*"];
              var $js$12=$js$11(entries);
              return $js$10(check_entry,$js$12)}
            else
             {var exit=6}}
          else
           {var exit=6}}
        switch(exit){case 6:return 0}};
    check_entry(entry);
    var microbes$1=microbes[1];
    var $js$6=SS[2];
    var $js$7=$js$6(microbes$1);
    var $js$8=!$js$7;
    if($js$8)
     {var $js$9=sanitize;
      if($js$9)
       {var fn$1=sanitize[1];
        var $js$10=SS[19];
        var m=$js$10(microbes$1);
        var $js$11=Log["eprintf"];
        var $js$12=m=1;
        if($js$12){var $js$13=""}else{var $js$13="s"}
        $js$11
         ([0,
           [18,
            [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
            [11,
             "SANITIZE:",
             [17,
              [0,"@ ",1,0],
              [12,
               97,
               [17,
                [0,"@ ",1,0],
                [11,
                 "total",
                 [17,
                  [0,"@ ",1,0],
                  [11,
                   "of",
                   [17,
                    [0,"@ ",1,0],
                    [4,
                     0,
                     0,
                     0,
                     [17,
                      [0,"@ ",1,0],
                      [11,
                       "file",
                       [2,
                        0,
                        [17,
                         [0,"@ ",1,0],
                         [11,
                          "that",
                          [17,
                           [0,"@ ",1,0],
                           [11,
                            "should",
                            [17,
                             [0,"@ ",1,0],
                             [11,
                              "probably",
                              [17,
                               [0,"@ ",1,0],
                               [11,
                                "not",
                                [17,
                                 [0,"@ ",1,0],
                                 [11,
                                  "be",
                                  [17,
                                   [0,"@ ",1,0],
                                   [11,
                                    "in",
                                    [17,
                                     [0,"@ ",1,0],
                                     [11,
                                      "your",
                                      [17,
                                       [0,"@ ",1,0],
                                       [11,
                                        "source",
                                        [17,
                                         [0,"@ ",1,0],
                                         [11,
                                          "tree",
                                          [17,
                                           [0,"@ ",1,0],
                                           [11,
                                            "has",
                                            [17,
                                             [0,"@ ",1,0],
                                             [11,
                                              "been",
                                              [17,
                                               [0,"@ ",1,0],
                                               [11,
                                                "found.",
                                                [17,
                                                 [0,"@ ",1,0],
                                                 [12,
                                                  65,
                                                  [17,
                                                   [0,"@ ",1,0],
                                                   [11,
                                                    "script",
                                                    [17,
                                                     [0,"@ ",1,0],
                                                     [11,
                                                      "shell",
                                                      [17,
                                                       [0,"@ ",1,0],
                                                       [11,
                                                        "file",
                                                        [17,
                                                         [0,"@ ",1,0],
                                                         [3,
                                                          0,
                                                          [17,
                                                           [0,"@ ",1,0],
                                                           [11,
                                                            "is",
                                                            [17,
                                                             [0,"@ ",1,0],
                                                             [11,
                                                              "being",
                                                              [17,
                                                               [0,"@ ",1,0],
                                                               [11,
                                                                "created.",
                                                                [17,
                                                                 [0,"@ ",1,0],
                                                                 [11,
                                                                  "Check",
                                                                  [17,
                                                                   [0,"@ ",1,0],
                                                                   [11,
                                                                    "this",
                                                                    [17,
                                                                     [0,"@ ",1,0],
                                                                     [11,
                                                                      "script",
                                                                      [17,
                                                                       [0,"@ ",1,0],
                                                                       [11,
                                                                        "and",
                                                                        [17,
                                                                         [0,"@ ",1,0],
                                                                         [11,
                                                                          "run",
                                                                          [17,
                                                                           [0,"@ ",1,0],
                                                                           [11,
                                                                            "it",
                                                                            [17,
                                                                             [0,"@ ",1,0],
                                                                             [11,
                                                                              "to",
                                                                              [17,
                                                                               [0,"@ ",1,0],
                                                                               [11,
                                                                                "remove",
                                                                                [17,
                                                                                 [0,"@ ",1,0],
                                                                                 [11,
                                                                                  "unwanted",
                                                                                  [17,
                                                                                   [0,"@ ",1,0],
                                                                                   [11,
                                                                                    "files",
                                                                                    [17,
                                                                                     [0,"@ ",1,0],
                                                                                     [11,
                                                                                      "or",
                                                                                      [17,
                                                                                       [0,"@ ",1,0],
                                                                                       [11,
                                                                                        "use",
                                                                                        [17,
                                                                                         [0,"@ ",1,0],
                                                                                         [11,
                                                                                          "other",
                                                                                          [17,
                                                                                           [0,"@ ",1,0],
                                                                                           [11,
                                                                                            "options",
                                                                                            [17,
                                                                                             [0,"@ ",1,0],
                                                                                             [11,
                                                                                              "(such",
                                                                                              [17,
                                                                                               [0,"@ ",1,0],
                                                                                               [11,
                                                                                                "as",
                                                                                                [17,
                                                                                                 [0,"@ ",1,0],
                                                                                                 [11,
                                                                                                  "defining",
                                                                                                  [17,
                                                                                                   [0,"@ ",1,0],
                                                                                                   [11,
                                                                                                    "hygiene",
                                                                                                    [17,
                                                                                                     [0,"@ ",1,0],
                                                                                                     [11,
                                                                                                      "exceptions",
                                                                                                      [17,
                                                                                                       [0,"@ ",1,0],
                                                                                                       [11,
                                                                                                        "or",
                                                                                                        [17,
                                                                                                         [0,"@ ",1,0],
                                                                                                         [11,
                                                                                                          "using",
                                                                                                          [17,
                                                                                                           [0,"@ ",1,0],
                                                                                                           [11,
                                                                                                            "the",
                                                                                                            [17,
                                                                                                             [0,"@ ",1,0],
                                                                                                             [11,
                                                                                                              "-no-hygiene",
                                                                                                              [17,[0,"@ ",1,0],[11,"option).",[17,0,0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
           "@[<hov 2>SANITIZE:@ a@ total@ of@ %d@ file%s@ that@ should@ probably@ not@ be@ in@ your@ source@ tree@ has@ been@ found.@ A@ script@ shell@ file@ %S@ is@ being@ created.@ Check@ this@ script@ and@ run@ it@ to@ remove@ unwanted@ files@ or@ use@ other@ options@ (such@ as@ defining@ hygiene@ exceptions@ or@ using@ the@ -no-hygiene@ option).@]"],
          m,
          $js$13,
          fn$1);
        var $js$14=Pervasives["open_out_gen"];
        var oc=$js$14([0,1,[0,3,[0,4,[0,6,0]]]],511,fn$1);
        var fp=Printf["fprintf"];
        var $js$15=Shell["quote_filename_if_needed"];
        var $js$16=$js$15(Pathname["pwd"]);
        fp
         (oc,
          [0,
           [11,
            "#!/bin/sh\n# File generated by ocamlbuild\n\ncd ",
            [2,0,[11,"\n\n",0]]],
           "#!/bin/sh\n# File generated by ocamlbuild\n\ncd %s\n\n"],
          $js$16);
        var $js$17=SS[13];
        $js$17
         (function(fn$2)
           {var $js$18=Shell["quote_filename_if_needed"];
            var $js$19=$js$18(fn$2);
            return fp
                    (oc,[0,[11,"rm -f ",[2,0,[12,10,0]]],"rm -f %s\n"],$js$19)},
          microbes$1);
        fp
         (oc,
          [0,
           [11,"# Also clean the script itself\n",0],
           "# Also clean the script itself\n"]);
        var $js$18=Shell["quote_filename_if_needed"];
        var $js$19=$js$18(fn$1);
        fp(oc,[0,[11,"rm -f ",[2,0,[12,10,0]]],"rm -f %s\n"],$js$19);
        var $js$20=Pervasives["close_out"];
        $js$20(oc)}
      else
       {var $js$21=Log["eprintf"];
        $js$21
         ([0,
           [11,
            "sanitize: the following are files that should probably not be in your\nsource tree:\n",
            0],
           "sanitize: the following are files that should probably not be in your\nsource tree:\n"]);
        var $js$22=SS[13];
        $js$22
         (function(fn$2)
           {var $js$23=Log["eprintf"];
            return $js$23([0,[12,32,[2,0,0]]," %s"],fn$2)},
          microbes$1);
        var $js$23=Log["eprintf"];
        $js$23
         ([0,
           [11,
            "Remove them manually, don't use the -no-sanitize option, use -no-hygiene, or\ndefine hygiene exceptions using the tags or plugin mechanism.\n",
            0],
           "Remove them manually, don't use the -no-sanitize option, use -no-hygiene, or\ndefine hygiene exceptions using the tags or plugin mechanism.\n"]);
        "unknown primitive:raise"}}
    else
     {}
    return penalties[1]};
module["exports"]={"check":check};
