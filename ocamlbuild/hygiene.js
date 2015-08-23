// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("./options.js");
var Pervasives=require("./pervasives.js");
var Printf=require("./printf.js");
var Pathname=require("./pathname.js");
var Shell=require("./shell.js");
var Filename=require("./filename.js");
var My_std=require("./my_std.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Exit_hygiene_violations=
  CamlPrimitive["caml_set_oo_id"]([248,"Hygiene.Exit_hygiene_violations",0]);

var
 list_collect=
  function(f,l)
   {var
     loop=
      function(result,param)
       {if(param)
         {var rest=param[2];
          
          var match=f(param[1]);
          
          return match
                  ?loop(/* :: */[0,match[1],result],rest)
                  :loop(result,rest)}
        else
         {return My_std["List"][9](result)}
        };
    
    return loop(/* [] */0,l)};

var
 list_none_for_all=
  function(f,l)
   {var
     loop=
      function(param)
       {if(param)
         {var y=f(param[1]);return y?y:loop(param[2])}
        else
         {return /* None */0}
        };
    
    return loop(l)};

var sf=Printf["sprintf"];

var $$let=My_std["String"];

var SS=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var
 check=
  function(sanitize,laws,entry)
   {var penalties=[0,/* [] */0];
    
    var microbes=[0,SS[1]];
    
    var match;
    if(sanitize)
     {var fn=sanitize[1];
      
      match=My_std["sys_file_exists"](fn)?My_std["sys_remove"](fn):0;
      }
    else
     {match=/* () */0;}
    
    var
     remove=
      function(path,name)
       {return sanitize!==/* None */0
                ?(microbes[1]=
                  SS[4](My_std["filename_concat"](path,name),microbes[1]),
                  0)
                :0};
    
    var
     check_rule=
      function(entries,param)
       {switch(param[0])
         {case 0:
           var suffix2=param[2];
           
           var suffix1=param[1];
           
           return list_collect
                   (function(param$1)
                     {var exit;
                      
                      if(typeof param$1==="number")
                       {switch(param$1){}}
                      else
                       {switch(param$1[0])
                         {case 1:
                           var name=param$1[2];
                           
                           var path=param$1[1];
                           
                           if(param$1[4]!==0)
                            {if(Filename["check_suffix"](name,suffix1))
                              {var base=Filename["chop_suffix"](name,suffix1);
                               
                               var name$prime=Pervasives["^"](base,suffix2);
                               
                               return My_std["List"][27]
                                        (function(param$2)
                                          {var exit$1;
                                           
                                           if(typeof param$2==="number")
                                            {switch(param$2){}}
                                           else
                                            {switch(param$2[0])
                                              {case 1:
                                                if(param$2[4]!==0)
                                                 {return CamlPrimitive["caml_string_equal"]
                                                          (name$prime,param$2[2])}
                                                else
                                                 {exit$1=10;}
                                                break;
                                               default:exit$1=10;}}
                                           
                                           switch(exit$1){case 10:return /* false */0}
                                           },
                                         entries)
                                       ?(remove(path,name$prime),
                                         /* Some */[0,
                                          sf
                                           ([/* Format */0,
                                             [/* String_literal */11,
                                              "Files ",
                                              [/* String */2,
                                               /* No_padding */0,
                                               [/* String_literal */11,
                                                " and ",
                                                [/* String */2,
                                                 /* No_padding */0,
                                                 [/* String_literal */11,
                                                  " should not be together in ",
                                                  [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                                             "Files %s and %s should not be together in %s"],
                                            name,
                                            name$prime,
                                            path)])
                                       :/* None */0}
                             else
                              {return /* None */0}
                             }
                           else
                            {exit=14;}
                           break;
                          default:exit=14;}}
                      
                      switch(exit){case 14:return /* None */0}
                      },
                    entries);
          case 1:
           var suffix=param[1];
           
           return list_collect
                   (function(param$1)
                     {var exit;
                      
                      if(typeof param$1==="number")
                       {switch(param$1){}}
                      else
                       {switch(param$1[0])
                         {case 1:
                           var name=param$1[2];
                           
                           var path=param$1[1];
                           
                           if(param$1[4]!==0)
                            {return Filename["check_suffix"](name,suffix)&&
                                     !Pathname["link_to_dir"]
                                      (My_std["filename_concat"](path,name),
                                       Options["build_dir"][1])
                                     ?(remove(path,name),
                                       /* Some */[0,
                                        sf
                                         ([/* Format */0,
                                           [/* String_literal */11,
                                            "File ",
                                            [/* String */2,
                                             /* No_padding */0,
                                             [/* String_literal */11,
                                              " in ",
                                              [/* String */2,
                                               /* No_padding */0,
                                               [/* String_literal */11,
                                                " has suffix ",
                                                [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                                           "File %s in %s has suffix %s"],
                                          name,
                                          path,
                                          suffix)])
                                     :/* None */0}
                           else
                            {exit=8;}
                           break;
                          default:exit=8;}}
                      
                      switch(exit){case 8:return /* None */0}
                      },
                    entries)
          }
        };
    
    var
     check_entry=
      function(param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){}}
        else
         {switch(param[0])
           {case 0:
             if(param[4]!==0)
              {var entries=param[5];
               
               My_std["List"][14]
                (function(law)
                  {var
                    explanations=
                     My_std["List"][12]
                      (My_std["List"][16]
                        (check_rule(My_std["!*"](entries)),law[2]));
                   
                   return explanations
                           ?(penalties[1]=
                             /* :: */[0,/* tuple */[0,law,explanations],penalties[1]],
                             0)
                           :/* () */0},
                 laws);
               return My_std["List"][14](check_entry,My_std["!*"](entries))}
             else
              {exit=6;}
             break;
            default:exit=6;}}
        
        switch(exit){case 6:return /* () */0}
        };
    
    check_entry(entry);
    var microbes$1=microbes[1];
    
    if(!SS[2](microbes$1))
     {if(sanitize)
       {var fn$1=sanitize[1];
        
        var m=SS[19](microbes$1);
        
        Log["eprintf"]
         ([/* Format */0,
           [/* Formatting_gen */18,
            [/* Open_box */1,
             [/* Format */0,
              [/* String_literal */11,"<hov 2>",/* End_of_format */0],
              "<hov 2>"]],
            [/* String_literal */11,
             "SANITIZE:",
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* Char_literal */12,
               97,
               [/* Formatting_lit */17,
                [/* Break */0,"@ ",1,0],
                [/* String_literal */11,
                 "total",
                 [/* Formatting_lit */17,
                  [/* Break */0,"@ ",1,0],
                  [/* String_literal */11,
                   "of",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* String_literal */11,
                       "file",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "that",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "should",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String_literal */11,
                              "probably",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* String_literal */11,
                                "not",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String_literal */11,
                                  "be",
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* String_literal */11,
                                    "in",
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* String_literal */11,
                                      "your",
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@ ",1,0],
                                       [/* String_literal */11,
                                        "source",
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@ ",1,0],
                                         [/* String_literal */11,
                                          "tree",
                                          [/* Formatting_lit */17,
                                           [/* Break */0,"@ ",1,0],
                                           [/* String_literal */11,
                                            "has",
                                            [/* Formatting_lit */17,
                                             [/* Break */0,"@ ",1,0],
                                             [/* String_literal */11,
                                              "been",
                                              [/* Formatting_lit */17,
                                               [/* Break */0,"@ ",1,0],
                                               [/* String_literal */11,
                                                "found.",
                                                [/* Formatting_lit */17,
                                                 [/* Break */0,"@ ",1,0],
                                                 [/* Char_literal */12,
                                                  65,
                                                  [/* Formatting_lit */17,
                                                   [/* Break */0,"@ ",1,0],
                                                   [/* String_literal */11,
                                                    "script",
                                                    [/* Formatting_lit */17,
                                                     [/* Break */0,"@ ",1,0],
                                                     [/* String_literal */11,
                                                      "shell",
                                                      [/* Formatting_lit */17,
                                                       [/* Break */0,"@ ",1,0],
                                                       [/* String_literal */11,
                                                        "file",
                                                        [/* Formatting_lit */17,
                                                         [/* Break */0,"@ ",1,0],
                                                         [/* Caml_string */3,
                                                          /* No_padding */0,
                                                          [/* Formatting_lit */17,
                                                           [/* Break */0,"@ ",1,0],
                                                           [/* String_literal */11,
                                                            "is",
                                                            [/* Formatting_lit */17,
                                                             [/* Break */0,"@ ",1,0],
                                                             [/* String_literal */11,
                                                              "being",
                                                              [/* Formatting_lit */17,
                                                               [/* Break */0,"@ ",1,0],
                                                               [/* String_literal */11,
                                                                "created.",
                                                                [/* Formatting_lit */17,
                                                                 [/* Break */0,"@ ",1,0],
                                                                 [/* String_literal */11,
                                                                  "Check",
                                                                  [/* Formatting_lit */17,
                                                                   [/* Break */0,"@ ",1,0],
                                                                   [/* String_literal */11,
                                                                    "this",
                                                                    [/* Formatting_lit */17,
                                                                     [/* Break */0,"@ ",1,0],
                                                                     [/* String_literal */11,
                                                                      "script",
                                                                      [/* Formatting_lit */17,
                                                                       [/* Break */0,"@ ",1,0],
                                                                       [/* String_literal */11,
                                                                        "and",
                                                                        [/* Formatting_lit */17,
                                                                         [/* Break */0,"@ ",1,0],
                                                                         [/* String_literal */11,
                                                                          "run",
                                                                          [/* Formatting_lit */17,
                                                                           [/* Break */0,"@ ",1,0],
                                                                           [/* String_literal */11,
                                                                            "it",
                                                                            [/* Formatting_lit */17,
                                                                             [/* Break */0,"@ ",1,0],
                                                                             [/* String_literal */11,
                                                                              "to",
                                                                              [/* Formatting_lit */17,
                                                                               [/* Break */0,"@ ",1,0],
                                                                               [/* String_literal */11,
                                                                                "remove",
                                                                                [/* Formatting_lit */17,
                                                                                 [/* Break */0,"@ ",1,0],
                                                                                 [/* String_literal */11,
                                                                                  "unwanted",
                                                                                  [/* Formatting_lit */17,
                                                                                   [/* Break */0,"@ ",1,0],
                                                                                   [/* String_literal */11,
                                                                                    "files",
                                                                                    [/* Formatting_lit */17,
                                                                                     [/* Break */0,"@ ",1,0],
                                                                                     [/* String_literal */11,
                                                                                      "or",
                                                                                      [/* Formatting_lit */17,
                                                                                       [/* Break */0,"@ ",1,0],
                                                                                       [/* String_literal */11,
                                                                                        "use",
                                                                                        [/* Formatting_lit */17,
                                                                                         [/* Break */0,"@ ",1,0],
                                                                                         [/* String_literal */11,
                                                                                          "other",
                                                                                          [/* Formatting_lit */17,
                                                                                           [/* Break */0,"@ ",1,0],
                                                                                           [/* String_literal */11,
                                                                                            "options",
                                                                                            [/* Formatting_lit */17,
                                                                                             [/* Break */0,"@ ",1,0],
                                                                                             [/* String_literal */11,
                                                                                              "(such",
                                                                                              [/* Formatting_lit */17,
                                                                                               [/* Break */0,"@ ",1,0],
                                                                                               [/* String_literal */11,
                                                                                                "as",
                                                                                                [/* Formatting_lit */17,
                                                                                                 [/* Break */0,"@ ",1,0],
                                                                                                 [/* String_literal */11,
                                                                                                  "defining",
                                                                                                  [/* Formatting_lit */17,
                                                                                                   [/* Break */0,"@ ",1,0],
                                                                                                   [/* String_literal */11,
                                                                                                    "hygiene",
                                                                                                    [/* Formatting_lit */17,
                                                                                                     [/* Break */0,"@ ",1,0],
                                                                                                     [/* String_literal */11,
                                                                                                      "exceptions",
                                                                                                      [/* Formatting_lit */17,
                                                                                                       [/* Break */0,"@ ",1,0],
                                                                                                       [/* String_literal */11,
                                                                                                        "or",
                                                                                                        [/* Formatting_lit */17,
                                                                                                         [/* Break */0,"@ ",1,0],
                                                                                                         [/* String_literal */11,
                                                                                                          "using",
                                                                                                          [/* Formatting_lit */17,
                                                                                                           [/* Break */0,"@ ",1,0],
                                                                                                           [/* String_literal */11,
                                                                                                            "the",
                                                                                                            [/* Formatting_lit */17,
                                                                                                             [/* Break */0,"@ ",1,0],
                                                                                                             [/* String_literal */11,
                                                                                                              "-no-hygiene",
                                                                                                              [/* Formatting_lit */17,
                                                                                                               [/* Break */0,"@ ",1,0],
                                                                                                               [/* String_literal */11,
                                                                                                                "option).",
                                                                                                                [/* Formatting_lit */17,
                                                                                                                 /* Close_box */0,
                                                                                                                 /* End_of_format */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
           "@[<hov 2>SANITIZE:@ a@ total@ of@ %d@ file%s@ that@ should@ probably@ not@ be@ in@ your@ source@ tree@ has@ been@ found.@ A@ script@ shell@ file@ %S@ is@ being@ created.@ Check@ this@ script@ and@ run@ it@ to@ remove@ unwanted@ files@ or@ use@ other@ options@ (such@ as@ defining@ hygiene@ exceptions@ or@ using@ the@ -no-hygiene@ option).@]"],
          m,
          m===1?"":"s",
          fn$1);
        var
         oc=
          Pervasives["open_out_gen"]
           ([/* :: */0,
             /* Open_wronly */1,
             [/* :: */0,
              /* Open_creat */3,
              [/* :: */0,
               /* Open_trunc */4,
               [/* :: */0,/* Open_binary */6,/* [] */0]]]],
            511,
            fn$1);
        
        var fp=Printf["fprintf"];
        
        fp
         (oc,
          [/* Format */0,
           [/* String_literal */11,
            "#!/bin/sh\n# File generated by ocamlbuild\n\ncd ",
            [/* String */2,
             /* No_padding */0,
             [/* String_literal */11,"\n\n",/* End_of_format */0]]],
           "#!/bin/sh\n# File generated by ocamlbuild\n\ncd %s\n\n"],
          Shell["quote_filename_if_needed"](Pathname["pwd"])),
        SS[13]
         (function(fn)
           {return fp
                    (oc,
                     [/* Format */0,
                      [/* String_literal */11,
                       "rm -f ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,10,/* End_of_format */0]]],
                      "rm -f %s\n"],
                     Shell["quote_filename_if_needed"](fn))},
          microbes$1),
        fp
         (oc,
          [/* Format */0,
           [/* String_literal */11,
            "# Also clean the script itself\n",
            /* End_of_format */0],
           "# Also clean the script itself\n"]),
        fp
         (oc,
          [/* Format */0,
           [/* String_literal */11,
            "rm -f ",
            [/* String */2,
             /* No_padding */0,
             [/* Char_literal */12,10,/* End_of_format */0]]],
           "rm -f %s\n"],
          Shell["quote_filename_if_needed"](fn$1)),
        Pervasives["close_out"](oc)}
      else
       {Log["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "sanitize: the following are files that should probably not be in your\nsource tree:\n",
            /* End_of_format */0],
           "sanitize: the following are files that should probably not be in your\nsource tree:\n"]);
        SS[13]
         (function(fn)
           {return Log["eprintf"]
                    ([/* Format */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,/* No_padding */0,/* End_of_format */0]],
                      " %s"],
                     fn)},
          microbes$1);
        Log["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "Remove them manually, don't use the -no-sanitize option, use -no-hygiene, or\ndefine hygiene exceptions using the tags or plugin mechanism.\n",
            /* End_of_format */0],
           "Remove them manually, don't use the -no-sanitize option, use -no-hygiene, or\ndefine hygiene exceptions using the tags or plugin mechanism.\n"]);
        throw Exit_hygiene_violations}
      }
    
    return penalties[1]};

module["exports"]={"check":check};

