// Generated CODE, PLEASE EDIT WITH CARE 

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
       {if(param)
         {var rest=param[2];
          
          var match=f(param[1]);
          
          if(match)
           {return loop([0,match[1],result],rest);}
          else
           {return loop(result,rest);}
          }
        else
         {return My_std["List"][9](result);}
        };
    
    return loop(0,l);
    };

var
 list_none_for_all=
  function(f,l)
   {var
     loop=
      function(param)
       {if(param)
         {var y=f(param[1]);if(y){return y;}else{return loop(param[2]);}}
        else
         {return 0;}
        };
    
    return loop(l);
    };

var sf=Printf["sprintf"];

var $$let=My_std["String"];

var SS=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var
 check=
  function(sanitize,laws,entry)
   {var penalties=[0,0];
    
    var microbes=[0,SS[1]];
    
    if(sanitize)
     {var fn=sanitize[1];
      
      if(My_std["sys_file_exists"](fn))
       {var match=My_std["sys_remove"](fn);}
      else
       {var match=0;}
      }
    else
     {var match=0;}
    
    var
     remove=
      function(path,name)
       {if(sanitize!=0)
         {return microbes[1]=
                 SS[4](My_std["filename_concat"](path,name),microbes[1]),
                 0;
          }
        else
         {return 0;}
        };
    
    var
     check_rule=
      function(entries,param)
       {switch(param)
         {case 0:
           var suffix2=param[2];
           
           var suffix1=param[1];
           
           return list_collect
                   (function(param$1)
                     {var exit;
                      
                      if(typeof param$1=="number")
                       {switch(param$1){}}
                      else
                       {switch(param$1[0])
                         {case 1:
                           var name=param$1[2];
                           
                           var path=param$1[1];
                           
                           if(param$1[4]!=0)
                            {if(Filename["check_suffix"](name,suffix1))
                              {var base=Filename["chop_suffix"](name,suffix1);
                               
                               var name$prime=Pervasives["^"](base,suffix2);
                               
                               if
                                (My_std["List"][27]
                                  (function(param$2)
                                    {var exit$1;
                                     
                                     if(typeof param$2=="number")
                                      {switch(param$2){}}
                                     else
                                      {switch(param$2[0])
                                        {case 1:
                                          if(param$2[4]!=0)
                                           {return "unknown primitive:caml_string_equal";}
                                          else
                                           {exit$1=10;}
                                          
                                         default:exit$1=10;}}
                                     
                                     switch(exit$1){case 10:return 0;}
                                     },
                                   entries))
                                {remove(path,name$prime);
                                 return [0,
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
                                           name$prime,
                                           path)];
                                 }
                               else
                                {return 0;}
                               }
                             else
                              {return 0;}
                             }
                           else
                            {exit=14;}
                           
                          default:exit=14;}}
                      
                      switch(exit){case 14:return 0;}
                      },
                    entries);
           
          case 1:
           var suffix=param[1];
           
           return list_collect
                   (function(param$1)
                     {var exit;
                      
                      if(typeof param$1=="number")
                       {switch(param$1){}}
                      else
                       {switch(param$1[0])
                         {case 1:
                           var name=param$1[2];
                           
                           var path=param$1[1];
                           
                           if(param$1[4]!=0)
                            {if
                              (Filename["check_suffix"](name,suffix)&&
                               !Pathname["link_to_dir"]
                                (My_std["filename_concat"](path,name),
                                 Options["build_dir"][1]))
                              {remove(path,name);
                               return [0,
                                       sf
                                        ([0,
                                          [11,
                                           "File ",
                                           [2,0,[11," in ",[2,0,[11," has suffix ",[2,0,0]]]]]],
                                          "File %s in %s has suffix %s"],
                                         name,
                                         path,
                                         suffix)];
                               }
                             else
                              {return 0;}
                             }
                           else
                            {exit=8;}
                           
                          default:exit=8;}}
                      
                      switch(exit){case 8:return 0;}
                      },
                    entries);
           
          }
        };
    
    var
     check_entry=
      function(param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){}}
        else
         {switch(param[0])
           {case 0:
             if(param[4]!=0)
              {var entries=param[5];
               
               My_std["List"][14]
                (function(law)
                  {var
                    explanations=
                     My_std["List"][12]
                      (My_std["List"][16]
                        (check_rule(My_std["!*"](entries)),law[2]));
                   
                   if(explanations)
                    {return penalties[1]=
                            [0,[0,law,explanations],penalties[1]],
                            0;
                     }
                   else
                    {return 0;}
                   },
                 laws);
               return My_std["List"][14](check_entry,My_std["!*"](entries));
               }
             else
              {exit=6;}
             
            default:exit=6;}}
        
        switch(exit){case 6:return 0;}
        };
    
    check_entry(entry);
    var microbes$1=microbes[1];
    
    if(!SS[2](microbes$1))
     {if(sanitize)
       {var fn$1=sanitize[1];
        
        var m=SS[19](microbes$1);
        
        Log["eprintf"]
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
          (m=1)?"":"s",
          fn$1);
        var oc=Pervasives["open_out_gen"]([0,1,[0,3,[0,4,[0,6,0]]]],511,fn$1);
        
        var fp=Printf["fprintf"];
        
        fp
         (oc,
          [0,
           [11,
            "#!/bin/sh\n# File generated by ocamlbuild\n\ncd ",
            [2,0,[11,"\n\n",0]]],
           "#!/bin/sh\n# File generated by ocamlbuild\n\ncd %s\n\n"],
          Shell["quote_filename_if_needed"](Pathname["pwd"])),
        SS[13]
         (function(fn$2)
           {return fp
                    (oc,
                     [0,[11,"rm -f ",[2,0,[12,10,0]]],"rm -f %s\n"],
                     Shell["quote_filename_if_needed"](fn$2));
            },
          microbes$1),
        fp
         (oc,
          [0,
           [11,"# Also clean the script itself\n",0],
           "# Also clean the script itself\n"]),
        fp
         (oc,
          [0,[11,"rm -f ",[2,0,[12,10,0]]],"rm -f %s\n"],
          Shell["quote_filename_if_needed"](fn$1)),
        Pervasives["close_out"](oc)}
      else
       {Log["eprintf"]
         ([0,
           [11,
            "sanitize: the following are files that should probably not be in your\nsource tree:\n",
            0],
           "sanitize: the following are files that should probably not be in your\nsource tree:\n"]);
        SS[13]
         (function(fn$2)
           {return Log["eprintf"]([0,[12,32,[2,0,0]]," %s"],fn$2);},
          microbes$1);
        Log["eprintf"]
         ([0,
           [11,
            "Remove them manually, don't use the -no-sanitize option, use -no-hygiene, or\ndefine hygiene exceptions using the tags or plugin mechanism.\n",
            0],
           "Remove them manually, don't use the -no-sanitize option, use -no-hygiene, or\ndefine hygiene exceptions using the tags or plugin mechanism.\n"]);
        throw Exit_hygiene_violations;
        }
      }
    else
     {}
    
    return penalties[1];
    };

module["exports"]={"check":check};

