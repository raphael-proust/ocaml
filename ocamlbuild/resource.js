// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("Options");
var Const=require("Const");
var Slurp=require("Slurp");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Pathname=require("Pathname");
var Digest_cache=require("Digest_cache");
var Format=require("Format");
var Command=require("Command");
var Shell=require("Shell");
var Buffer=require("Buffer");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");
var Log=require("Log");
var Glob=require("Glob");


var $$let=Pathname;

var Resources=My_std["Set"][1]([0,$$let[2],$$let[10]]);

var print=Pathname["print"];

var
 equal=
  function(prim,prim){return CamlPrimtivie["caml_equal"](prim$1,prim);};

var
 compare=
  function(prim,prim){return CamlPrimtivie["caml_compare"](prim$1,prim);};

var
 in_source_dir=
  function(p)
   {if(Pathname["is_implicit"](p))
     {return Pathname["Operators"][1](Pathname["pwd"],p);}
    else
     {return Pervasives["invalid_arg"]
              (Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "in_source_dir: ",
                   [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                  "in_source_dir: %S"],
                 p));
      }
    };

var
 in_build_dir=
  function(p)
   {if(Pathname["is_relative"](p))
     {return p;}
    else
     {return Pervasives["invalid_arg"]
              (Printf["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "in_build_dir: ",
                   [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                  "in_build_dir: %S"],
                 p));
      }
    };

var
 clean_up_links=
  function(entry)
   {if(!Options["make_links"][1])
     {return entry;}
    else
     {return Slurp["filter"]
              (function(path,name,param)
                {var
                  pathname=
                   in_source_dir(Pathname["Operators"][1](path,name));
                 
                 if(Pathname["link_to_dir"](pathname,Options["build_dir"][1]))
                  {var z=Pathname["readlink"](pathname);
                   
                   if(!CamlPrimtivie["caml_sys_file_exists"](z))
                    {Shell["rm"](pathname)}
                   else
                    {}
                   
                   return /* false */0;
                   }
                 else
                  {return /* true */1;}
                 },
               entry);
      }
    };

var
 clean_up_link_to_build=
  function(param)
   {return Options["entry"][1]=
           /* Some */[0,clean_up_links(My_std["the"](Options["entry"][1]))],
           0;
    };

var
 source_dir_path_set_without_links_to_build=
  [246,
   function(param)
    {clean_up_link_to_build(/* () */0);
     return Slurp["fold"]
             (function(path,name,param$1)
               {return My_std["StringSet"][4]
                        (Pathname["Operators"][1](path,name));
                },
              My_std["the"](Options["entry"][1]),
              My_std["StringSet"][1]);
     }];

var
 clean_links=
  function(param)
   {if(My_std["!*"](My_unix["is_degraded"]))
     {return /* () */0;}
    else
     {return clean_up_link_to_build(/* () */0);}
    };

var
 exists_in_source_dir=
  function(p)
   {if(My_std["!*"](My_unix["is_degraded"]))
     {return My_std["sys_file_exists"](in_source_dir(p));}
    else
     {return My_std["StringSet"][3]
              (p,My_std["!*"](source_dir_path_set_without_links_to_build));
      }
    };

var clean=function(p){return Shell["rm_f"](p);};

var
 clean$1=
  function(param)
   {Shell["chdir"](Pathname["pwd"]);
    return Shell["rm_rf"](Options["build_dir"][1]);
    };

var
 empty=
  function(param)
   {return /* record */[0,/* Bnot_built_yet */2,/* Unknown */2,Resources[1]];};

var
 print_knowledge=
  function(f,param)
   {switch(param)
     {case 0:return Format["pp_print_string"](f,"Yes");
      case 1:return Format["pp_print_string"](f,"No");
      case 2:return Format["pp_print_string"](f,"Unknown");
      }
    };

var
 print_build_status=
  function(f,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return Format["pp_print_string"](f,"Bbuilt");
        case 1:return Format["pp_print_string"](f,"Bcannot_be_built");
        case 2:return Format["pp_print_string"](f,"Bnot_built_yet");
        }
      }
    else
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* Formatting_gen */18,
                 [/* Open_box */1,
                  [/* Format */0,
                   [/* String_literal */11,"<2>",/* End_of_format */0],
                   "<2>"]],
                 [/* String_literal */11,
                  "Bsuspension(",
                  [/* Alpha */15,
                   [/* Char_literal */12,
                    44,
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* String_literal */11,
                      "(<fun> : unit -> unit))",
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]]]]],
                "@[<2>Bsuspension(%a,@ (<fun> : unit -> unit))@]"],
               Command["print"],
               param[1][1]);
      }
    };

var
 print_cache_entry=
  function(f,e)
   {return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,
                [/* Format */0,
                 [/* String_literal */11,"<2>",/* End_of_format */0],
                 "<2>"]],
               [/* String_literal */11,
                "{ ",
                [/* Formatting_gen */18,
                 [/* Open_box */1,
                  [/* Format */0,
                   [/* String_literal */11,"<2>",/* End_of_format */0],
                   "<2>"]],
                 [/* String_literal */11,
                  "built =",
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     /* Close_box */0,
                     [/* Char_literal */12,
                      59,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* String_literal */11,
                         "changed =",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Char_literal */12,
                             59,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Formatting_gen */18,
                               [/* Open_box */1,
                                [/* Format */0,
                                 [/* String_literal */11,"<2>",/* End_of_format */0],
                                 "<2>"]],
                               [/* String_literal */11,
                                "dependencies =",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@ ",1,0],
                                    [/* Char_literal */12,
                                     125,
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      /* End_of_format */0]]]]]]]]]]]]]]]]]]]]]]]],
              "@[<2>{ @[<2>built =@ %a@];@ @[<2>changed =@ %a@];@ @[<2>dependencies =@ %a@]@ }@]"],
             print_build_status,
             e[1],
             print_knowledge,
             e[2],
             Resources[29],
             e[3]);
    };

var cache=Hashtbl["create"](/* None */0,103);

var
 get=
  function(r)
   {try
     {return Hashtbl["find"](cache,r);}
    catch(exn)
     {if(exn=Not_found)
       {var cache_entry=empty(/* () */0);
        
        Hashtbl["add"](cache,r,cache_entry);
        return cache_entry;
        }
      else
       {throw exn;}
      }
    };

var fold_cache=function(f,x){return Hashtbl["fold"](f,cache,x);};

var
 print_cache=
  function(f,param)
   {Format["fprintf"]
     (f,
      [/* Format */0,
       [/* Formatting_gen */18,
        [/* Open_box */1,
         [/* Format */0,
          [/* String_literal */11,"<hv0>",/* End_of_format */0],
          "<hv0>"]],
        [/* Formatting_gen */18,
         [/* Open_box */1,
          [/* Format */0,
           [/* String_literal */11,"<hv2>",/* End_of_format */0],
           "<hv2>"]],
         [/* String_literal */11,"{:",/* End_of_format */0]]],
       "@[<hv0>@[<hv2>{:"]);
    fold_cache
     (function(k,v,param$1)
       {return Format["fprintf"]
                (f,
                 [/* Format */0,
                  [/* Formatting_lit */17,
                   [/* Break */0,"@ ",1,0],
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* Alpha */15,
                     [/* String_literal */11,
                      " =>",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         [/* Char_literal */12,59,/* End_of_format */0]]]]]]]],
                  "@ @[<2>%a =>@ %a@];"],
                 print,
                 k,
                 print_cache_entry,
                 v);
        },
      /* () */0);
    return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Formatting_lit */17,
               /* Close_box */0,
               [/* String_literal */11,
                ":}",
                [/* Formatting_lit */17,/* Close_box */0,/* End_of_format */0]]],
              "@]:}@]"]);
    };

var
 print_graph=
  function(f,param)
   {Format["fprintf"]
     (f,
      [/* Format */0,
       [/* Formatting_gen */18,
        [/* Open_box */1,
         [/* Format */0,
          [/* String_literal */11,"<hv0>",/* End_of_format */0],
          "<hv0>"]],
        [/* Formatting_gen */18,
         [/* Open_box */1,
          [/* Format */0,
           [/* String_literal */11,"<hv2>",/* End_of_format */0],
           "<hv2>"]],
         [/* String_literal */11,"{:",/* End_of_format */0]]],
       "@[<hv0>@[<hv2>{:"]);
    fold_cache
     (function(k,v,param$1)
       {if(!Resources[2](v[3]))
         {return Format["fprintf"]
                  (f,
                   [/* Format */0,
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Formatting_gen */18,
                      [/* Open_box */1,
                       [/* Format */0,
                        [/* String_literal */11,"<2>",/* End_of_format */0],
                        "<2>"]],
                      [/* Alpha */15,
                       [/* String_literal */11,
                        " =>",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Char_literal */12,59,/* End_of_format */0]]]]]]]],
                    "@ @[<2>%a =>@ %a@];"],
                   print,
                   k,
                   Resources[29],
                   v[3]);
          }
        else
         {return 0;}
        },
      /* () */0);
    return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Formatting_lit */17,
               /* Close_box */0,
               [/* Formatting_lit */17,
                [/* Break */0,"@ ",1,0],
                [/* String_literal */11,
                 ":}",
                 [/* Formatting_lit */17,
                  /* Close_box */0,
                  /* End_of_format */0]]]],
              "@]@ :}@]"]);
    };

var
 resource_changed=
  function(r)
   {Log["dprintf"]
     (10,
      [/* Format */0,
       [/* String_literal */11,
        "resource_changed:",
        [/* Formatting_lit */17,
         [/* Break */0,"@ ",1,0],
         [/* Alpha */15,/* End_of_format */0]]],
       "resource_changed:@ %a"],
      print,
      r);
    return get(r)[2]=/* Yes */0,0;
    };

var
 external_is_up_to_date=
  function(absolute_path)
   {var key=Pervasives["^"]("Resource: ",absolute_path);
    
    var digest=My_std["Digest"][3](absolute_path);
    
    try
     {var digest$prime=Digest_cache["get"](key);
      
      var
       is_up_to_date=
        CamlPrimtivie["caml_string_equal"](digest,digest$prime);
      }
    catch(exn)
     {if(exn=Not_found){var is_up_to_date=/* false */0;}else{throw exn;}}
    
    return is_up_to_date||(Digest_cache["put"](key,digest),/* false */0);
    };

var
 source_is_up_to_date=
  function(r_in_source_dir,r_in_build_dir)
   {var key=Pervasives["^"]("Resource: ",r_in_source_dir);
    
    var digest=My_std["Digest"][3](r_in_source_dir);
    
    var $js;
    try
     {var digest$prime=Digest_cache["get"](key);
      
      $js=CamlPrimtivie["caml_string_equal"](digest,digest$prime);
      }
    catch(exn){if(exn=Not_found){$js=/* false */0;}else{throw exn;}}
    var r_is_up_to_date=Pathname["exists"](r_in_build_dir)&&$js;
    
    return r_is_up_to_date||(Digest_cache["put"](key,digest),/* false */0);
    };

var
 prod_is_up_to_date=
  function(p)
   {var x=in_build_dir(p);
    
    return !exists_in_source_dir(p)||
           Pathname["exists"](x)&&
           Pathname["same_contents"](x,in_source_dir(p));
    };

var
 resource_has_changed=
  function(r)
   {var cache_entry=get(r);
    
    var match=cache_entry[2];
    
    switch(match)
     {case 0:return /* true */1;
      case 1:return /* false */0;
      case 2:
       var match$1=cache_entry[1];
       
       if(typeof match$1==="number")
        {if(match$1>=2)
          {var res=!prod_is_up_to_date(r);}
         else
          {var res=/* false */0;}
         }
       else
        {throw [0,Assert_failure,[0,"resource.ml",182,27]];}
       
       var match$2=(cache_entry[2]=res?/* Yes */0:/* No */1,0);
       
       return res;
       
      }
    };

var resource_state=function(r){return get(r)[1];};

var resource_built=function(r){return get(r)[1]=/* Bbuilt */0,0;};

var resource_failed=function(r){return get(r)[1]=/* Bcannot_be_built */1,0;};

var
 import_in_build_dir=
  function(r)
   {var cache_entry=get(r);
    
    var r_in_build_dir=in_build_dir(r);
    
    var r_in_source_dir=in_source_dir(r);
    
    if(source_is_up_to_date(r_in_source_dir,r_in_build_dir))
     {Log["dprintf"]
       (5,
        [/* Format */0,
         [/* Alpha */15,
          [/* String_literal */11,
           " exists and up to date",
           /* End_of_format */0]],
         "%a exists and up to date"],
        print,
        r)}
    else
     {Log["dprintf"]
       (5,
        [/* Format */0,
         [/* Alpha */15,
          [/* String_literal */11,
           " exists in source dir -> import it",
           /* End_of_format */0]],
         "%a exists in source dir -> import it"],
        print,
        r),
      Shell["mkdir_p"](Pathname["dirname"](r)),
      Pathname["copy"](r_in_source_dir,r_in_build_dir),
      cache_entry[2]=
      /* Yes */0,
      0}
    
    return cache_entry[1]=/* Bbuilt */0,0;
    };

var
 suspend_resource=
  function(r,cmd,kont,prods)
   {var cache_entry=get(r);
    
    var match=cache_entry[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:return /* () */0;
        case 1:throw [0,Assert_failure,[0,"resource.ml",212,26]];
        case 2:
         var
          kont$1=
           function(param)
            {kont(/* () */0);
             return My_std["List"][14]
                     (function(prod){return get(prod)[1]=/* Bbuilt */0,0;},prods);
             };
         
         return cache_entry[1]=
                /* Bsuspension */[0,/* tuple */[0,cmd,kont$1]],
                0;
         
        }
      }
    else
     {return /* () */0;}
    };

var
 resume_suspension=
  function(param)
   {Command["execute"](/* None */0,/* None */0,param[1]);
    return param[2](/* () */0);
    };

var
 resume_resource=
  function(r)
   {var cache_entry=get(r);
    
    var match=cache_entry[1];
    
    if(typeof match==="number")
     {return /* () */0;}
    else
     {return resume_suspension(match[1]);}
    };

var
 get_optional_resource_suspension=
  function(r)
   {var match=get(r)[1];
    
    if(typeof match==="number")
     {return /* None */0;}
    else
     {return /* Some */[0,match[1]];}
    };

var
 clear_resource_failed=
  function(r){return get(r)[1]=/* Bnot_built_yet */2,0;};

var dependencies=function(r){return get(r)[3];};

var
 fold_dependencies=
  function(f)
   {return fold_cache(function(k,v){return Resources[14](f(k),v[3]);});};

var
 add_dependency=
  function(r,s)
   {var cache_entry=get(r);
    
    return cache_entry[3]=Resources[4](s,cache_entry[3]),0;
    };

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
   {var f=Pathname["to_string"](in_build_dir(p));
    
    var buf=Buffer["create"](1024);
    
    Buffer["add_string"](buf,f);
    if(My_std["sys_file_exists"](f))
     {Buffer["add_string"](buf,My_std["Digest"][3](f))}
    else
     {}
    
    return My_std["Digest"][1](Buffer["contents"](buf));
    };

var
 exists_in_build_dir=
  function(p){return Pathname["exists"](in_build_dir(p));};

var $$import=function(x){return Pathname["normalize"](x);};

var
 No_solution=
  CamlPrimtivie["caml_set_oo_id"]([248,"Resource.MetaPath.No_solution",0]);

var
 mk=
  function(param)
   {return My_std["List"][16]
            (function(param$1)
              {if(param$1[1]>=970337770)
                {return /* A */[0,param$1[2]];}
               else
                {var match=param$1[2];return /* V */[1,match[1],match[2]];}
               },
             Lexers["path_scheme"]
              (param[1],
               Const["Source"][6],
               My_std["lexbuf_of_string"](/* None */0,param[2])));
    };

var mk$1=My_std["memo"](mk);

var
 match_prefix=
  function(s,pos,prefix)
   {var match=My_std["String"][10](s,pos,prefix);
    
    if(match)
     {var pos$prime=match[1];
      
      if(pos=pos$prime)
       {return pos$prime+prefix["length"];}
      else
       {throw No_solution;}
      }
    else
     {throw No_solution;}
    };

var
 matchit=
  function(p,s)
   {var sl=s["length"];
    
    var
     loop=
      function(xs,pos,acc,delta)
       {if(xs)
         {var match=xs[1];
          
          switch(match[0])
           {case 0:return loop(xs[2],match_prefix(s,pos,match[1]),acc,0);
            case 1:
             var match$1=xs[2];
             
             var patt=match[2];
             
             var $$var=match[1];
             
             if(match$1)
              {var match$2=match$1[1];
               
               switch(match$2[0])
                {case 0:
                  var s2=match$2[1];
                  
                  var match$3=My_std["String"][10](s,pos+delta,s2);
                  
                  if(match$3)
                   {var pos$prime=match$3[1];
                    
                    var matched=My_std["String"][19](s,pos,pos$prime-pos);
                    
                    if(Glob["eval"](patt,matched))
                     {try
                       {return loop
                                (match$1[2],
                                 pos$prime+s2["length"],
                                 /* :: */[0,/* tuple */[0,$$var,matched],acc],
                                 0);
                        }
                      catch(exn)
                       {if(exn=No_solution)
                         {return loop(xs,pos,acc,pos$prime-pos+1);}
                        else
                         {throw exn;}
                        }
                      }
                    else
                     {return loop(xs,pos,acc,pos$prime-pos+1);}
                    }
                  else
                   {throw No_solution;}
                  
                 case 1:throw [0,Assert_failure,[0,"resource.ml",347,38]];
                 }
               }
             else
              {var matched$1=My_std["String"][19](s,pos,sl-pos);
               
               if(Glob["eval"](patt,matched$1))
                {return /* :: */[0,/* tuple */[0,$$var,matched$1],acc];}
               else
                {throw No_solution;}
               }
             
            }
          }
        else
         {if(pos=sl){return acc;}else{throw No_solution;}}
        };
    
    try
     {return /* Some */[0,loop(p,0,/* [] */0,0)];}
    catch(exn){if(exn=No_solution){return /* None */0;}else{throw exn;}}
    };

var
 pp_opt=
  function(pp_elt,f,param)
   {if(param)
     {return Format["fprintf"]
              (f,
               [/* Format */0,
                [/* String_literal */11,
                 "Some(",
                 [/* Alpha */15,
                  [/* Char_literal */12,41,/* End_of_format */0]]],
                "Some(%a)"],
               pp_elt,
               param[1]);
      }
    else
     {return Format["pp_print_string"](f,"None");}
    };

var
 print_env=
  function(f,env)
   {return My_std["List"][14]
            (function(param)
              {var v=param[2];
               
               var k=param[1];
               
               if(CamlPrimtivie["caml_string_equal"](k,""))
                {return Format["fprintf"]
                         (f,
                          [/* Format */0,
                           [/* Char_literal */12,
                            37,
                            [/* Char_literal */12,
                             61,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,32,/* End_of_format */0]]]],
                           "%%=%s "],
                          v);
                 }
               else
                {return Format["fprintf"]
                         (f,
                          [/* Format */0,
                           [/* Char_literal */12,
                            37,
                            [/* Char_literal */12,
                             40,
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               ")=",
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,32,/* End_of_format */0]]]]]],
                           "%%(%s)=%s "],
                          k,
                          v);
                 }
               },
             env);
    };

var
 subst=
  function(env,s)
   {return My_std["String"][22]
            ("",
             My_std["List"][16]
              (function(x)
                {switch(x[0])
                  {case 0:return x[1];
                   case 1:
                    try
                     {return My_std["List"][36](x[1],env);}
                    catch(exn){if(exn=Not_found){return "";}else{throw exn;}}
                    
                   }
                 },
               s));
    };

var MetaPath=[0,mk$1,matchit,subst,print_env];

var print_pattern=function(f,param){return Pathname["print"](f,param[1]);};

var
 import_pattern=
  function(x)
   {return /* tuple */[0,x,MetaPath[1](/* tuple */[0,/* true */1,x])];};

var matchit$1=function(param,x){return MetaPath[2](param[2],x);};

var
 subst$1=
  function(env,s)
   {return MetaPath[3](env,MetaPath[1](/* tuple */[0,/* false */0,s]));};

var
 subst_any=
  function(env,s)
   {return MetaPath[3](env,MetaPath[1](/* tuple */[0,/* true */1,s]));};

var subst_pattern=function(env,param){return MetaPath[3](env,param[2]);};

var print_env$1=MetaPath[4];

module["exports"]=
{"Resources":Resources,
 "Cache":
 [0,
  Cache[1],
  Cache[16],
  Cache[11],
  Cache[15],
  Cache[17],
  Cache[18],
  Cache[19],
  Cache[20],
  Cache[22],
  Cache[21],
  Cache[23],
  Cache[24],
  Cache[27],
  Cache[26],
  Cache[12],
  Cache[25],
  Cache[9],
  Cache[28]],
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
 "import":$$import,
 "import_pattern":import_pattern,
 "matchit":matchit$1,
 "subst":subst$1,
 "subst_any":subst_any,
 "subst_pattern":subst_pattern,
 "print_env":print_env$1};

