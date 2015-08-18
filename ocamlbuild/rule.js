// Generated CODE, PLEASE EDIT WITH CARE 

var Options=require("./options.js");
var Pervasives=require("./pervasives.js");
var Pathname=require("./pathname.js");
var Resource=require("./resource.js");
var Format=require("./format.js");
var Digest_cache=require("./digest_cache.js");
var Command=require("./command.js");
var Shell=require("./shell.js");
var Buffer=require("./buffer.js");
var My_std=require("./my_std.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");



var
 Exit_rule_error=
  CamlPrimitive["caml_set_oo_id"]([248,"Rule.Exit_rule_error",0]);

var Failed=CamlPrimitive["caml_set_oo_id"]([248,"Rule.Failed",0]);

var name_of_rule=function(r){return r[1];};

var deps_of_rule=function(r){return r[2];};

var prods_of_rule=function(r){return r[3];};

var stamp_of_rule=function(r){return r[4];};

var doc_of_rule=function(r){return r[5];};

var
 compare=
  function(param,param$1)
   {throw [0,
           CamlPrimitive["caml_global_data"]["Assert_failure"],
           [0,"rule.ml",49,18]];
    };

var print_rule_name=function(f,r){return Format["pp_print_string"](f,r[1]);};

var print_resource_list=My_std["List"][1](Resource["print"]);

var
 print_rule_contents=
  function(ppelt,f,r)
   {var match=r[5];
    
    return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,
                [/* Format */0,
                 [/* String_literal */11,"<v2>",/* End_of_format */0],
                 "<v2>"]],
               [/* Char_literal */12,
                123,
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<2>",/* End_of_format */0],
                    "<2>"]],
                  [/* String_literal */11,
                   "name  =",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@ ",1,0],
                    [/* Caml_string */3,
                     /* No_padding */0,
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
                          "deps  =",
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
                                 "prods = ",
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
                                       "code  = <fun>",
                                       [/* Formatting_lit */17,
                                        /* Close_box */0,
                                        [/* Char_literal */12,
                                         59,
                                         [/* Formatting_lit */17,
                                          [/* Break */0,"@ ",1,0],
                                          [/* Formatting_gen */18,
                                           [/* Open_box */1,
                                            [/* Format */0,
                                             [/* String_literal */11,"<hov 2>",/* End_of_format */0],
                                             "<hov 2>"]],
                                           [/* String_literal */11,
                                            " doc = ",
                                            [/* String */2,
                                             /* No_padding */0,
                                             [/* Formatting_lit */17,
                                              /* Close_box */0,
                                              [/* Formatting_lit */17,
                                               /* Close_box */0,
                                               [/* Formatting_lit */17,
                                                [/* Break */0,"@ ",1,0],
                                                [/* Char_literal */12,125,/* End_of_format */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
              "@[<v2>{@ @[<2>name  =@ %S@];@ @[<2>deps  =@ %a@];@ @[<2>prods = %a@];@ @[<2>code  = <fun>@];@ @[<hov 2> doc = %s@]@]@ }"],
             r[1],
             print_resource_list,
             r[2],
             My_std["List"][1](ppelt),
             r[3],
             match
              ?Format["sprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "Some ",
                   [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                  "Some %S"],
                 match[1])
              :"None");
    };

var
 pretty_print=
  function(ppelt,f,r)
   {Format["fprintf"]
     (f,
      [/* Format */0,
       [/* Formatting_gen */18,
        [/* Open_box */1,
         [/* Format */0,
          [/* String_literal */11,"<hv2>",/* End_of_format */0],
          "<hv2>"]],
        [/* String_literal */11,
         "rule ",
         [/* Caml_string */3,
          /* No_padding */0,
          [/* Formatting_lit */17,
           [/* Break */0,"@ ",1,0],
           [/* String_literal */11,
            "~deps:",
            [/* Alpha */15,
             [/* Formatting_lit */17,
              [/* Break */0,"@ ",1,0],
              [/* String_literal */11,
               "~prods:",
               [/* Alpha */15,
                [/* Formatting_lit */17,
                 [/* Break */0,"@ ",1,0],
                 /* End_of_format */0]]]]]]]]]],
       "@[<hv2>rule %S@ ~deps:%a@ ~prods:%a@ "],
      r[1],
      print_resource_list,
      r[2],
      My_std["List"][1](ppelt),
      r[3]);
    var match=r[5];
    
    if(match)
     {Format["fprintf"]
       (f,
        [/* Format */0,
         [/* String_literal */11,
          '~doc:"',
          [/* Formatting_gen */18,
           [/* Open_box */1,
            [/* Format */0,
             [/* String_literal */11,"<hov>",/* End_of_format */0],
             "<hov>"]],
           [/* Alpha */15,
            [/* Formatting_lit */17,
             /* Close_box */0,
             [/* Char_literal */12,
              34,
              [/* Formatting_lit */17,
               [/* Break */0,"@ ",1,0],
               /* End_of_format */0]]]]]],
         '~doc:"@[<hov>%a@]"@ '],
        Format["pp_print_text"],
        match[1])}
    
    return Format["fprintf"]
            (f,
             [/* Format */0,
              [/* String_literal */11,
               "<fun>",
               [/* Formatting_lit */17,/* Close_box */0,/* End_of_format */0]],
              "<fun>@]"]);
    };

var print=print_rule_name;

var
 subst=
  function(env,rule)
   {var subst_resources=My_std["List"][16](Resource["subst"](env));
    
    var
     subst_resource_patterns=
      My_std["List"][16](Resource["subst_pattern"](env));
    
    var
     finder=
      function(next_finder,p)
       {return next_finder(Resource["subst_any"](env,p));};
    
    var match=rule[4];
    
    var
     stamp=
      match?/* Some */[0,Resource["subst_pattern"](env,match[1])]:/* None */0;
    
    var prods=subst_resource_patterns(rule[3]);
    
    return /* record */[0,
            My_std["sbprintf"]
             ([/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 " (",
                 [/* Alpha */15,
                  [/* Char_literal */12,41,/* End_of_format */0]]]],
               "%s (%a)"],
              rule[1],
              Resource["print_env"],
              env),
            subst_resources(rule[2]),
            prods,
            stamp,
            rule[5],
            function(env){return rule[6](finder(env));}];
    };

var Can_produce=CamlPrimitive["caml_set_oo_id"]([248,"Rule.Can_produce",0]);

var
 can_produce=
  function(target,rule)
   {try
     {My_std["List"][14]
       (function(resource)
         {var match=Resource["matchit"](resource,target);
          
          if(match)
           {throw [0,Can_produce,subst(match[1],rule)];}
          else
           {return /* () */0;}
          },
        rule[3]);
      return /* None */0;
      }
    catch(exn)
     {if(exn[1]===Can_produce){return /* Some */[0,exn[2]];}else{throw exn;}}
    };

var
 digest_prods=
  function(r)
   {return My_std["List"][20]
            (function(p,acc)
              {var f=Pathname["to_string"](Resource["in_build_dir"](p));
               
               return My_std["sys_file_exists"](f)
                       ?/* :: */[0,/* tuple */[0,f,My_std["Digest"][3](f)],acc]
                       :acc;
               },
             r[3],
             /* [] */0);
    };

var
 digest_deps=
  function(r,dyndeps)
   {var buf=Buffer["create"](1024);
    
    var
     add_resource=
      function(r)
       {return Buffer["add_string"]
                (buf,My_std["Digest"][6](Resource["digest"](r)));
        };
    
    Buffer["add_string"](buf,"deps:");
    My_std["List"][14](add_resource,r[2]);
    Buffer["add_string"](buf,"dyndeps:");
    Resource["Resources"][13](add_resource,dyndeps);
    return My_std["Digest"][6](My_std["Digest"][1](Buffer["contents"](buf)));
    };

var
 digest_rule=
  function(r,dyndeps,action)
   {var buf=Buffer["create"](1024);
    
    Buffer["add_string"](buf,action[1]);
    var
     add_resource=
      function(r){return Buffer["add_string"](buf,Resource["digest"](r));};
    
    Buffer["add_string"](buf,"prods:");
    My_std["List"][14](add_resource,r[3]);
    Buffer["add_string"](buf,"deps:");
    My_std["List"][14](add_resource,r[2]);
    Buffer["add_string"](buf,"dyndeps:");
    Resource["Resources"][13](add_resource,dyndeps);
    return My_std["Digest"][1](Buffer["contents"](buf));
    };

var
 cached_digest=
  function(r)
   {try
     {return /* Some */[0,Digest_cache["get"](Pervasives["^"]("Rule: ",r[1]))];
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* None */0;}
      else
       {throw exn;}
      }
    };

var
 store_digest=
  function(r,digest)
   {return Digest_cache["put"](Pervasives["^"]("Rule: ",r[1]),digest);};

var
 print_digest=
  function(f,x){return Format["pp_print_string"](f,My_std["Digest"][6](x));};

var
 exists2=
  function(find,p,rs)
   {try
     {return /* Some */[0,find(p,rs)];}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* None */0;}
      else
       {throw exn;}
      }
    };

var
 build_deps_of_tags=
  function(builder,tags)
   {var deps=Command["deps_of_tags"](tags);
    
    return deps
            ?My_std["List"][16]
              (My_std["Outcome"][3],
               builder
                (My_std["List"][16]
                  (function(x){return /* :: */[0,x,/* [] */0];},deps)))
            :/* [] */0;
    };

var
 build_deps_of_tags_on_cmd=
  function(builder)
   {return Command["iter_tags"]
            (function(tags)
              {var deps=Command["deps_of_tags"](tags);
               
               return deps
                       ?My_std["List"][14]
                         (My_std["Outcome"][2],
                          builder
                           (My_std["List"][16]
                             (function(x){return /* :: */[0,x,/* [] */0];},deps)))
                       :/* () */0;
               });
    };

var
 call=
  function(builder,r)
   {var dyndeps=[0,Resource["Resources"][1]];
    
    var
     builder$1=
      function(rs)
       {var results=builder(rs);
        
        return My_std["List"][16]
                (function(res)
                  {switch(res[0])
                    {case 0:
                      var res$prime=res[1];
                      
                      var
                       match=
                        Log["dprintf"]
                         (10,
                          [/* Format */0,
                           [/* String_literal */11,
                            "new dyndep for ",
                            [/* Caml_string */3,
                             /* No_padding */0,
                             [/* Char_literal */12,
                              40,
                              [/* Alpha */15,
                               [/* String_literal */11,
                                "): ",
                                [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]]]]]],
                           "new dyndep for %S(%a): %S"],
                          r[1],
                          print_resource_list,
                          r[3],
                          res$prime);
                      
                      dyndeps[1]=Resource["Resources"][4](res$prime,dyndeps[1]);
                      My_std["List"][14]
                       (function(x){return Resource["Cache"][13](x,res$prime);},
                        r[3]);
                      return res;
                      
                     case 1:return res;
                     }
                   },
                 results);
        };
    
    var
     match=
      Log["dprintf"]
       (5,
        [/* Format */0,
         [/* String_literal */11,
          "start rule ",
          [/* Alpha */15,/* End_of_format */0]],
         "start rule %a"],
        print,
        r);
    
    var action=r[6](function(x){return x;},builder$1);
    
    build_deps_of_tags_on_cmd(builder$1,action[2]);
    var dyndeps$1=dyndeps[1];
    
    var
     match$1=
      Log["dprintf"]
       (10,
        [/* Format */0,
         [/* String_literal */11,
          "dyndeps: ",
          [/* Alpha */15,/* End_of_format */0]],
         "dyndeps: %a"],
        Resource["Resources"][29],
        dyndeps$1);
    
    var
     match$2=
      exists2
       (My_std["List"][32],
        function(r){return !Resource["exists_in_build_dir"](r);},
        r[3]);
    
    var match$3;
    if(match$2)
     {match$3=
      /* tuple */[0,
       /* `cache_miss_missing_prod */[0,-900031434,match$2[1]],
       /* false */0];
      }
    else
     {var match$4=exists2(My_std["List"][32],Resource["Cache"][4],r[2]);
      
      if(match$4)
       {match$3=
        /* tuple */[0,
         /* `cache_miss_changed_dep */[0,1009970846,match$4[1]],
         /* false */0];
        }
      else
       {var
         match$5=
          exists2(Resource["Resources"][26],Resource["Cache"][4],dyndeps$1);
        
        if(match$5)
         {match$3=
          /* tuple */[0,
           /* `cache_miss_changed_dyn_dep */[0,738140888,match$5[1]],
           /* false */0];
          }
        else
         {var match$6=cached_digest(r);
          
          if(match$6)
           {var d=match$6[1];
            
            var rule_digest=digest_rule(r,dyndeps$1,action);
            
            match$3=
            CamlPrimitive["caml_string_equal"](d,rule_digest)
             ?[/* tuple */0,/* cache_hit */-805933418,/* true */1]
             :/* tuple */[0,
               /* `cache_miss_digest_changed */[0,
                -433471969,
                /* tuple */[0,d,rule_digest]],
               /* false */0];
            }
          else
           {match$3=
            [/* tuple */0,/* cache_miss_no_digest */242554396,/* false */0];
            }
          }
        }
      }
    
    var cached=match$3[2];
    
    var reason=match$3[1];
    
    var
     explain_reason=
      function(l)
       {Log["raw_dprintf"]
         (l+1,
          [/* Format */0,
           [/* String_literal */11,
            "mid rule ",
            [/* Alpha */15,[/* String_literal */11,": ",/* End_of_format */0]]],
           "mid rule %a: "],
          print,
          r);
        if(typeof reason==="number")
         {return reason>=242554396
                  ?Log["dprintf"]
                    (l,
                     [/* Format */0,
                      [/* String_literal */11,
                       "cache miss: no digest found for ",
                       [/* Caml_string */3,
                        /* No_padding */0,
                        [/* String_literal */11,
                         " (the command, a dependency, or a product)",
                         /* End_of_format */0]]],
                      "cache miss: no digest found for %S (the command, a dependency, or a product)"],
                     r[1])
                  :Log["dprintf"]
                    (l+1,
                     [/* Format */0,
                      [/* String_literal */11,"cache hit",/* End_of_format */0],
                      "cache hit"]);
          }
        else
         {var variant=reason[1];
          
          if(variant>=738140888)
           {return variant>=1009970846
                    ?Log["dprintf"]
                      (l,
                       [/* Format */0,
                        [/* String_literal */11,
                         "cache miss: a dependency has changed (",
                         [/* Alpha */15,
                          [/* Char_literal */12,41,/* End_of_format */0]]],
                        "cache miss: a dependency has changed (%a)"],
                       Resource["print"],
                       reason[2])
                    :Log["dprintf"]
                      (l,
                       [/* Format */0,
                        [/* String_literal */11,
                         "cache miss: a dynamic dependency has changed (",
                         [/* Alpha */15,
                          [/* Char_literal */12,41,/* End_of_format */0]]],
                        "cache miss: a dynamic dependency has changed (%a)"],
                       Resource["print"],
                       reason[2]);
            }
          else
           {if(variant>=-433471969)
             {var match$7=reason[2];
              
              return Log["dprintf"]
                      (l,
                       [/* Format */0,
                        [/* String_literal */11,
                         "cache miss: the digest has changed for ",
                         [/* Caml_string */3,
                          /* No_padding */0,
                          [/* String_literal */11,
                           " (the command, a dependency, or a product: ",
                           [/* Alpha */15,
                            [/* String_literal */11,
                             " <> ",
                             [/* Alpha */15,
                              [/* Char_literal */12,41,/* End_of_format */0]]]]]]],
                        "cache miss: the digest has changed for %S (the command, a dependency, or a product: %a <> %a)"],
                       r[1],
                       print_digest,
                       match$7[1],
                       print_digest,
                       match$7[2]);
              }
            else
             {return Log["dprintf"]
                      (l,
                       [/* Format */0,
                        [/* String_literal */11,
                         "cache miss: a product is not in build dir (",
                         [/* Alpha */15,
                          [/* Char_literal */12,41,/* End_of_format */0]]],
                        "cache miss: a product is not in build dir (%a)"],
                       Resource["print"],
                       reason[2]);
              }
            }
          }
        };
    
    var prod_digests=digest_prods(r);
    
    if(!cached){My_std["List"][14](Resource["clean"],r[3])}
    
    if(Options["nothing_should_be_rebuilt"][1]&&!cached)
     {explain_reason(-1);
      var
       msg=
        My_std["sbprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "Need to rebuild ",
            [/* Alpha */15,
             [/* String_literal */11,
              " through the rule `",
              [/* Alpha */15,[/* Char_literal */12,39,/* End_of_format */0]]]]],
           "Need to rebuild %a through the rule `%a'"],
          print_resource_list,
          r[3],
          print,
          r);
      
      throw [0,Exit_rule_error,msg];
      }
    else
     {}
    
    explain_reason(3);
    var
     thunk=
      function(param)
       {try
         {if(cached)
           {Command["execute"]
             (/* None */0,[/* Some */0,/* true */1],action[2])}
          else
           {var match$7=r[4];
            
            if(match$7)
             {My_std["reset_filesys_cache"](/* () */0);
              var digest_deps$1=digest_deps(r,dyndeps$1);
              
              My_std["with_output_file"]
               (/* None */0,
                match$7[1],
                function(oc)
                 {return Pervasives["output_string"](oc,digest_deps$1);})}
            else
             {}
            }
          
          My_std["List"][14]
           (function(r){return Resource["Cache"][5](r);},r[3]);
          if(!cached)
           {var new_rule_digest=digest_rule(r,dyndeps$1,action);
            
            var new_prod_digests=digest_prods(r);
            
            var match$8=store_digest(r,new_rule_digest);
            
            My_std["List"][14]
             (function(p)
               {var f=Pathname["to_string"](Resource["in_build_dir"](p));
                
                try
                 {var digest=My_std["List"][36](f,prod_digests);
                  
                  var new_digest=My_std["List"][36](f,new_prod_digests);
                  
                  if(CamlPrimitive["caml_string_notequal"](digest,new_digest))
                   {throw CamlPrimitive["caml_global_data"]["Not_found"];}
                  else
                   {return 0;}
                  }
                catch(exn)
                 {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                   {return Resource["Cache"][3](p);}
                  else
                   {throw exn;}
                  }
                },
              r[3])}
          else
           {}
          
          return Log["dprintf"]
                  (5,
                   [/* Format */0,
                    [/* String_literal */11,
                     "end rule ",
                     [/* Alpha */15,/* End_of_format */0]],
                    "end rule %a"],
                   print,
                   r);
          }
        catch(exn){My_std["List"][14](Resource["clean"],r[3]);throw exn;}
        };
    
    return cached
            ?thunk(/* () */0)
            :My_std["List"][14]
              (function(x)
                {return Resource["Cache"][8](x,action[2],thunk,r[3]);},
               r[3]);
    };

var rules=[0,/* [] */0];

var
 match=
  /* tuple */[0,
   function(param){return rules[1];},
   function(pos,r)
    {try
      {var
        match$1=
         My_std["List"][32]
          (function(x){return CamlPrimitive["caml_string_equal"](x[1],r[1]);},
           rules[1]);
       
       throw [0,
              Exit_rule_error,
              My_std["sbprintf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  "Rule.add_rule: already exists: (",
                  [/* Alpha */15,
                   [/* Char_literal */12,41,/* End_of_format */0]]],
                 "Rule.add_rule: already exists: (%a)"],
                print,
                r)];
       }
     catch(exn)
      {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
        {if(typeof pos==="number")
          {return pos>=5793429
                   ?(rules[1]=/* :: */[0,r,rules[1]],0)
                   :(rules[1]=
                     Pervasives["@"](rules[1],/* :: */[0,r,/* [] */0]),
                     0);
           }
         else
          {if(pos[1]>=497182236)
            {var s=pos[2];
             
             return rules[1]=
                    My_std["List"][20]
                     (function(x,acc)
                       {return CamlPrimitive["caml_string_equal"](x[1],s)
                                ?/* :: */[0,x,/* :: */[0,r,acc]]
                                :/* :: */[0,x,acc];
                        },
                      rules[1],
                      /* [] */0),
                    0;
             }
           else
            {var s$1=pos[2];
             
             return rules[1]=
                    My_std["List"][20]
                     (function(x,acc)
                       {return CamlPrimitive["caml_string_equal"](x[1],s$1)
                                ?/* :: */[0,r,/* :: */[0,x,acc]]
                                :/* :: */[0,x,acc];
                        },
                      rules[1],
                      /* [] */0),
                    0;
             }
           }
         }
       else
        {throw exn;}
       }
     },
   function(param){return rules[1]=/* [] */0,0;}];

var clear_rules=match[3];

var add_rule=match[2];

var get_rules=match[1];

var
 rule=
  function
   (name,
    tags,
    $staropt$star,
    $staropt$star,
    prod,
    dep,
    stamp,
    $staropt$star,
    doc,
    code)
   {var prods=$staropt$star$1?$staropt$star$1[1]:/* [] */0;
    
    var deps=$staropt$star$2?$staropt$star$2[1]:/* [] */0;
    
    var insert=$staropt$star?$staropt$star[1]:/* bottom */-445061397;
    
    var
     match$1=
      tags
       ?Log["eprintf"]
         ([/* Format */0,
           [/* String_literal */11,
            "Warning: your ocamlbuild rule ",
            [/* Caml_string */3,
             /* No_padding */0,
             [/* String_literal */11,
              " uses the ~tags parameter,\n                     which is deprecated and ignored.",
              /* End_of_format */0]]],
           "Warning: your ocamlbuild rule %S uses the ~tags parameter,\n                     which is deprecated and ignored."],
          name)
       :/* () */0;
    
    var
     res_add=
      function($$import,xs,xopt)
       {var init=xopt?/* :: */[0,$$import(xopt[1]),/* [] */0]:/* [] */0;
        
        return My_std["List"][20]
                (function(x,acc)
                  {var r=$$import(x);
                   
                   return My_std["List"][30](r,acc)
                           ?Pervasives["failwith"]
                             (Format["sprintf"]
                               ([/* Format */0,
                                 [/* String_literal */11,
                                  "in rule ",
                                  [/* String */2,
                                   /* No_padding */0,
                                   [/* String_literal */11,
                                    ", multiple occurrences of the resource ",
                                    [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                                 "in rule %s, multiple occurrences of the resource %s"],
                                name,
                                x))
                           :/* :: */[0,r,acc];
                   },
                 xs,
                 init);
        };
    
    if(prods===/* [] */0&&prod===/* None */0&&stamp===/* None */0)
     {throw [0,Exit_rule_error,"Can't make a rule that produces nothing"];}
    else
     {}
    
    var match$2;
    if(stamp)
     {var stamp$1=stamp[1];
      
      match$2=
      /* tuple */[0,
       /* Some */[0,Resource["import_pattern"](stamp$1)],
       /* :: */[0,stamp$1,prods]];
      }
    else
     {match$2=/* tuple */[0,/* None */0,prods];}
    
    var prods$1=res_add(Resource["import_pattern"],match$2[2],prod);
    
    var
     code$1=
      function(env,build)
       {var cmd=code(env,build);
        
        return /* record */[0,Command["digest"](cmd),cmd];
        };
    
    return add_rule
            (insert,
             /* record */[0,
              name,
              res_add(Resource["import"],deps,dep),
              prods$1,
              match$2[1],
              doc,
              code$1]);
    };

var
 mv=
  function(src,dest)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"mv"],
              /* :: */[0,
               /* P */[2,src],
               /* :: */[0,/* Px */[3,dest],/* [] */0]]]]];
    };

var
 cp=
  function(src,dest)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"cp"],
              /* :: */[0,
               /* P */[2,src],
               /* :: */[0,/* Px */[3,dest],/* [] */0]]]]];
    };

var
 cp_p=
  function(src,dest)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"cp"],
              /* :: */[0,
               [/* A */1,"-p"],
               /* :: */[0,
                /* P */[2,src],
                /* :: */[0,/* Px */[3,dest],/* [] */0]]]]]];
    };

var
 ln_f=
  function(pointed,pointer)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"ln"],
              /* :: */[0,
               [/* A */1,"-f"],
               /* :: */[0,
                /* P */[2,pointed],
                /* :: */[0,/* Px */[3,pointer],/* [] */0]]]]]];
    };

var
 ln_s=
  function(pointed,pointer)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"ln"],
              /* :: */[0,
               [/* A */1,"-s"],
               /* :: */[0,
                /* P */[2,pointed],
                /* :: */[0,/* Px */[3,pointer],/* [] */0]]]]]];
    };

var
 rm_f=
  function(x)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"rm"],
              /* :: */[0,[/* A */1,"-f"],/* :: */[0,/* Px */[3,x],/* [] */0]]]]];
    };

var
 chmod=
  function(opts,file)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"chmod"],
              /* :: */[0,opts,/* :: */[0,/* Px */[3,file],/* [] */0]]]]];
    };

var
 cmp=
  function(a,b)
   {return /* Cmd */[1,
            /* S */[0,
             /* :: */[0,
              [/* A */1,"cmp"],
              /* :: */[0,/* P */[2,a],/* :: */[0,/* Px */[3,b],/* [] */0]]]]];
    };

var Common_commands=[0,mv,cp,cp_p,ln_f,ln_s,rm_f,chmod,cmp];

var
 copy_rule=
  function(name,insert,src,dest)
   {return rule
            (name,
             /* None */0,
             /* None */0,
             /* None */0,
             /* Some */[0,dest],
             /* Some */[0,src],
             /* None */0,
             insert,
             /* None */0,
             function(env,param)
              {var src$1=env(src);
               
               var dest$1=env(dest);
               
               Shell["mkdir_p"](Pathname["dirname"](dest$1));
               return Common_commands[3](src$1,dest$1);
               });
    };

var
 show_documentation=
  function(param)
   {var pp=function(fmt){return Log["raw_dprintf"](-1,fmt);};
    
    var rules$1=get_rules(/* () */0);
    
    My_std["List"][14]
     (function(rule)
       {return pp
                ([/* Format */0,
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    /* Force_newline */3,
                    [/* Formatting_lit */17,
                     /* Force_newline */3,
                     /* End_of_format */0]]],
                  "%a@\n@\n"],
                 pretty_print(Resource["print_pattern"]),
                 rule);
        },
      rules$1);
    return pp
            ([/* Format */0,
              [/* Formatting_lit */17,
               /* Flush_newline */4,
               /* End_of_format */0],
              "@."]);
    };

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

