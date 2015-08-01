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

var name_of_rule=function(r){return r[1];};

var deps_of_rule=function(r){return r[2];};

var prods_of_rule=function(r){return r[3];};

var stamp_of_rule=function(r){return r[4];};

var doc_of_rule=function(r){return r[5];};

var
 compare=
  function(param,param$1){throw [0,Assert_failure,[0,"rule.ml",49,18]];};

var print_rule_name=function(f,r){return Format["pp_print_string"](f,r[1]);};

var print_resource_list=My_std["List"][1](Resource["print"]);

var
 print_rule_contents=
  function(ppelt,f,r)
   {var match=r[5];
    
    return Format["fprintf"]
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
             My_std["List"][1](ppelt),
             r[3],
             match
              ?Format["sprintf"]([0,[11,"Some ",[3,0,0]],"Some %S"],match[1])
              :"None");
    };

var
 pretty_print=
  function(ppelt,f,r)
   {Format["fprintf"]
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
      My_std["List"][1](ppelt),
      r[3]);
    var match=r[5];
    
    if(match)
     {Format["fprintf"]
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
    
    return Format["fprintf"](f,[0,[11,"<fun>",[17,0,0]],"<fun>@]"]);
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
    
    if(match)
     {var stamp=[0,Resource["subst_pattern"](env,match[1])];}
    else
     {var stamp=0;}
    
    var prods=subst_resource_patterns(rule[3]);
    
    return [0,
            My_std["sbprintf"]
             ([0,[2,0,[11," (",[15,[12,41,0]]]],"%s (%a)"],
              rule[1],
              Resource["print_env"],
              env),
            subst_resources(rule[2]),
            prods,
            stamp,
            rule[5],
            function(env$1){return rule[6](finder(env$1));}];
    };

var Can_produce="unknown primitive:caml_set_oo_id";

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
           {return 0;}
          },
        rule[3]);
      return 0;
      }
    catch(exn){if(exn[1]=Can_produce){return [0,exn[2]];}else{throw exn;}}
    };

var
 digest_prods=
  function(r)
   {return My_std["List"][20]
            (function(p,acc)
              {var f=Pathname["to_string"](Resource["in_build_dir"](p));
               
               if(My_std["sys_file_exists"](f))
                {return [0,[0,f,My_std["Digest"][3](f)],acc];}
               else
                {return acc;}
               },
             r[3],
             0);
    };

var
 digest_deps=
  function(r,dyndeps)
   {var buf=Buffer["create"](1024);
    
    var
     add_resource=
      function(r$1)
       {return Buffer["add_string"]
                (buf,My_std["Digest"][6](Resource["digest"](r$1)));
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
      function(r$1){return Buffer["add_string"](buf,Resource["digest"](r$1));};
    
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
     {return [0,Digest_cache["get"](Pervasives["^"]("Rule: ",r[1]))];}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
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
     {return [0,find(p,rs)];}
    catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
    };

var
 build_deps_of_tags=
  function(builder,tags)
   {var deps=Command["deps_of_tags"](tags);
    
    if(deps)
     {return My_std["List"][16]
              (My_std["Outcome"][3],
               builder(My_std["List"][16](function(x){return [0,x,0];},deps)));
      }
    else
     {return 0;}
    };

var
 build_deps_of_tags_on_cmd=
  function(builder)
   {return Command["iter_tags"]
            (function(tags)
              {var deps=Command["deps_of_tags"](tags);
               
               if(deps)
                {return My_std["List"][14]
                         (My_std["Outcome"][2],
                          builder
                           (My_std["List"][16](function(x){return [0,x,0];},deps)));
                 }
               else
                {return 0;}
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
                  {switch(res)
                    {case 0:
                      var res$prime=res[1];
                      
                      var
                       match=
                        Log["dprintf"]
                         (10,
                          [0,
                           [11,"new dyndep for ",[3,0,[12,40,[15,[11,"): ",[3,0,0]]]]]],
                           "new dyndep for %S(%a): %S"],
                          r[1],
                          print_resource_list,
                          r[3],
                          res$prime);
                      
                      dyndeps[1]=Resource["Resources"][4](res$prime,dyndeps[1]),0;
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
      Log["dprintf"](5,[0,[11,"start rule ",[15,0]],"start rule %a"],print,r);
    
    var action=r[6](function(x){return x;},builder$1);
    
    build_deps_of_tags_on_cmd(builder$1,action[2]);
    var dyndeps$1=dyndeps[1];
    
    var
     match$1=
      Log["dprintf"]
       (10,
        [0,[11,"dyndeps: ",[15,0]],"dyndeps: %a"],
        Resource["Resources"][29],
        dyndeps$1);
    
    var
     match$2=
      exists2
       (My_std["List"][32],
        function(r$1){return !Resource["exists_in_build_dir"](r$1);},
        r[3]);
    
    if(match$2)
     {var match$3=[0,[0,-900031434,match$2[1]],0];}
    else
     {var match$4=exists2(My_std["List"][32],Resource["Cache"][4],r[2]);
      
      if(match$4)
       {var match$3=[0,[0,1009970846,match$4[1]],0];}
      else
       {var
         match$5=
          exists2(Resource["Resources"][26],Resource["Cache"][4],dyndeps$1);
        
        if(match$5)
         {var match$3=[0,[0,738140888,match$5[1]],0];}
        else
         {var match$6=cached_digest(r);
          
          if(match$6)
           {var d=match$6[1];
            
            var rule_digest=digest_rule(r,dyndeps$1,action);
            
            if("unknown primitive:caml_string_equal")
             {var match$3=[0,-805933418,1];}
            else
             {var match$3=[0,[0,-433471969,[0,d,rule_digest]],0];}
            }
          else
           {var match$3=[0,242554396,0];}
          }
        }
      }
    
    var cached=match$3[2];
    
    var reason=match$3[1];
    
    var
     explain_reason=
      function(l)
       {Log["raw_dprintf"]
         (l+1,[0,[11,"mid rule ",[15,[11,": ",0]]],"mid rule %a: "],print,r);
        if("unknown primitive:isint")
         {if(reason>=242554396)
           {return Log["dprintf"]
                    (l,
                     [0,
                      [11,
                       "cache miss: no digest found for ",
                       [3,0,[11," (the command, a dependency, or a product)",0]]],
                      "cache miss: no digest found for %S (the command, a dependency, or a product)"],
                     r[1]);
            }
          else
           {return Log["dprintf"](l+1,[0,[11,"cache hit",0],"cache hit"]);}
          }
        else
         {var variant=reason[1];
          
          if(variant>=738140888)
           {if(variant>=1009970846)
             {return Log["dprintf"]
                      (l,
                       [0,
                        [11,"cache miss: a dependency has changed (",[15,[12,41,0]]],
                        "cache miss: a dependency has changed (%a)"],
                       Resource["print"],
                       reason[2]);
              }
            else
             {return Log["dprintf"]
                      (l,
                       [0,
                        [11,
                         "cache miss: a dynamic dependency has changed (",
                         [15,[12,41,0]]],
                        "cache miss: a dynamic dependency has changed (%a)"],
                       Resource["print"],
                       reason[2]);
              }
            }
          else
           {if(variant>=-433471969)
             {var match$7=reason[2];
              
              return Log["dprintf"]
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
                       match$7[2]);
              }
            else
             {return Log["dprintf"]
                      (l,
                       [0,
                        [11,
                         "cache miss: a product is not in build dir (",
                         [15,[12,41,0]]],
                        "cache miss: a product is not in build dir (%a)"],
                       Resource["print"],
                       reason[2]);
              }
            }
          }
        };
    
    var prod_digests=digest_prods(r);
    
    if(!cached){My_std["List"][14](Resource["clean"],r[3])}else{}
    
    if(Options["nothing_should_be_rebuilt"][1]&&!cached)
     {explain_reason(-1);
      var
       msg=
        My_std["sbprintf"]
         ([0,
           [11,
            "Need to rebuild ",
            [15,[11," through the rule `",[15,[12,39,0]]]]],
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
           {Command["execute"](0,[0,1],action[2])}
          else
           {var match$7=r[4];
            
            if(match$7)
             {My_std["reset_filesys_cache"](0);
              var digest_deps$1=digest_deps(r,dyndeps$1);
              
              My_std["with_output_file"]
               (0,
                match$7[1],
                function(oc)
                 {return Pervasives["output_string"](oc,digest_deps$1);})}
            else
             {}
            }
          
          My_std["List"][14]
           (function(r$1){return Resource["Cache"][5](r$1);},r[3]);
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
                  
                  if("unknown primitive:caml_string_notequal")
                   {throw Not_found;}
                  else
                   {return 0;}
                  }
                catch(exn)
                 {if(exn=Not_found)
                   {return Resource["Cache"][3](p);}
                  else
                   {throw exn;}
                  }
                },
              r[3])}
          else
           {}
          
          return Log["dprintf"]
                  (5,[0,[11,"end rule ",[15,0]],"end rule %a"],print,r);
          }
        catch(exn){My_std["List"][14](Resource["clean"],r[3]);throw exn;}
        };
    
    if(cached)
     {return thunk(0);}
    else
     {return My_std["List"][14]
              (function(x)
                {return Resource["Cache"][8](x,action[2],thunk,r[3]);},
               r[3]);
      }
    };

var rules=[0,0];

var
 match=
  [0,
   function(param){return rules[1];},
   function(pos,r)
    {try
      {var
        match$1=
         My_std["List"][32]
          (function(x){return "unknown primitive:caml_string_equal";},
           rules[1]);
       
       throw [0,
              Exit_rule_error,
              My_std["sbprintf"]
               ([0,
                 [11,"Rule.add_rule: already exists: (",[15,[12,41,0]]],
                 "Rule.add_rule: already exists: (%a)"],
                print,
                r)];
       }
     catch(exn)
      {if(exn=Not_found)
        {if("unknown primitive:isint")
          {if(pos>=5793429)
            {return rules[1]=[0,r,rules[1]],0;}
           else
            {return rules[1]=Pervasives["@"](rules[1],[0,r,0]),0;}
           }
         else
          {if(pos[1]>=497182236)
            {var s=pos[2];
             
             return rules[1]=
                    My_std["List"][20]
                     (function(x,acc)
                       {if("unknown primitive:caml_string_equal")
                         {return [0,x,[0,r,acc]];}
                        else
                         {return [0,x,acc];}
                        },
                      rules[1],
                      0),
                    0;
             }
           else
            {var s$1=pos[2];
             
             return rules[1]=
                    My_std["List"][20]
                     (function(x,acc)
                       {if("unknown primitive:caml_string_equal")
                         {return [0,r,[0,x,acc]];}
                        else
                         {return [0,x,acc];}
                        },
                      rules[1],
                      0),
                    0;
             }
           }
         }
       else
        {throw exn;}
       }
     },
   function(param){return rules[1]=0,0;}];

var clear_rules=match[3];

var add_rule=match[2];

var get_rules=match[1];

var
 rule=
  function
   (name,
    tags,
    $staropt$star,
    $staropt$star$1,
    prod,
    dep,
    stamp,
    $staropt$star$2,
    doc,
    code)
   {if($staropt$star){var prods=$staropt$star[1];}else{var prods=0;}
    
    if($staropt$star$1){var deps=$staropt$star$1[1];}else{var deps=0;}
    
    if($staropt$star$2)
     {var insert=$staropt$star$2[1];}
    else
     {var insert=-445061397;}
    
    if(tags)
     {var
       match$1=
        Log["eprintf"]
         ([0,
           [11,
            "Warning: your ocamlbuild rule ",
            [3,
             0,
             [11,
              " uses the ~tags parameter,\n                     which is deprecated and ignored.",
              0]]],
           "Warning: your ocamlbuild rule %S uses the ~tags parameter,\n                     which is deprecated and ignored."],
          name);
      }
    else
     {var match$1=0;}
    
    var
     res_add=
      function($$import,xs,xopt)
       {if(xopt){var init=[0,$$import(xopt[1]),0];}else{var init=0;}
        
        return My_std["List"][20]
                (function(x,acc)
                  {var r=$$import(x);
                   
                   if(My_std["List"][30](r,acc))
                    {return Pervasives["failwith"]
                             (Format["sprintf"]
                               ([0,
                                 [11,
                                  "in rule ",
                                  [2,0,[11,", multiple occurrences of the resource ",[2,0,0]]]],
                                 "in rule %s, multiple occurrences of the resource %s"],
                                name,
                                x));
                     }
                   else
                    {return [0,r,acc];}
                   },
                 xs,
                 init);
        };
    
    if((prods=0)&&(prod=0)&&(stamp=0))
     {throw [0,Exit_rule_error,"Can't make a rule that produces nothing"];}
    else
     {}
    
    if(stamp)
     {var stamp$1=stamp[1];
      
      var
       match$2=
        [0,[0,Resource["import_pattern"](stamp$1)],[0,stamp$1,prods]];
      }
    else
     {var match$2=[0,0,prods];}
    
    var prods$1=res_add(Resource["import_pattern"],match$2[2],prod);
    
    var
     code$1=
      function(env,build)
       {var cmd=code(env,build);return [0,Command["digest"](cmd),cmd];};
    
    return add_rule
            (insert,
             [0,
              name,
              res_add(Resource["import"],deps,dep),
              prods$1,
              match$2[1],
              doc,
              code$1]);
    };

var
 mv=
  function(src,dest){return [1,[0,[0,[1,"mv"],[0,[2,src],[0,[3,dest],0]]]]];};

var
 cp=
  function(src,dest){return [1,[0,[0,[1,"cp"],[0,[2,src],[0,[3,dest],0]]]]];};

var
 cp_p=
  function(src,dest)
   {return [1,[0,[0,[1,"cp"],[0,[1,"-p"],[0,[2,src],[0,[3,dest],0]]]]]];};

var
 ln_f=
  function(pointed,pointer)
   {return [1,[0,[0,[1,"ln"],[0,[1,"-f"],[0,[2,pointed],[0,[3,pointer],0]]]]]];
    };

var
 ln_s=
  function(pointed,pointer)
   {return [1,[0,[0,[1,"ln"],[0,[1,"-s"],[0,[2,pointed],[0,[3,pointer],0]]]]]];
    };

var rm_f=function(x){return [1,[0,[0,[1,"rm"],[0,[1,"-f"],[0,[3,x],0]]]]];};

var
 chmod=
  function(opts,file){return [1,[0,[0,[1,"chmod"],[0,opts,[0,[3,file],0]]]]];};

var cmp=function(a,b){return [1,[0,[0,[1,"cmp"],[0,[2,a],[0,[3,b],0]]]]];};

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
               
               Shell["mkdir_p"](Pathname["dirname"](dest$1));
               return Common_commands[3](src$1,dest$1);
               });
    };

var
 show_documentation=
  function(param)
   {var pp=function(fmt){return Log["raw_dprintf"](-1,fmt);};
    
    var rules$1=get_rules(0);
    
    My_std["List"][14]
     (function(rule$1)
       {return pp
                ([0,[15,[17,3,[17,3,0]]],"%a@\n@\n"],
                 pretty_print(Resource["print_pattern"]),
                 rule$1);
        },
      rules$1);
    return pp([0,[17,4,0],"@."]);
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

