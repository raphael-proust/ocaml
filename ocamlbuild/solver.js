// Generated CODE, PLEASE EDIT WITH CARE 

var Rule=require("./rule.js");
var Pathname=require("./pathname.js");
var Resource=require("./resource.js");
var Format=require("./format.js");
var Command=require("./command.js");
var My_std=require("./my_std.js");
var Log=require("./log.js");
var CamlPrimitive=require("./camlPrimitive.js");


var Failed=CamlPrimitive["caml_set_oo_id"]([248,"Solver.Failed",0]);

var Circular=CamlPrimitive["caml_set_oo_id"]([248,"Solver.Circular",0]);

var
 failed=
  function(target,backtrace)
   {Resource["Cache"][6](target);throw [0,Failed,backtrace]};

var
 pp_repeat=
  function(f,param)
   {var n=param[1];
    
    if(n>0)
     {var s=param[2];
      
      Format["pp_print_string"](f,s);
      return pp_repeat(f,/* tuple */[0,n-1,s])}
    else
     {return 0}
    };

var
 $$self=
  function(depth,on_the_go_orig,target)
   {var rules=Rule["get_rules"](/* () */0);
    
    var on_the_go=/* :: */[0,target,on_the_go_orig];
    
    Log["dprintf"]
     (4,
      [/* Format */0,
       [/* String_literal */11,
        "==",
        [/* Alpha */15,
         [/* String_literal */11,"> ",[/* Alpha */15,/* End_of_format */0]]]],
       "==%a> %a"],
      pp_repeat,
      /* tuple */[0,depth,"=="],
      Resource["print"],
      target);
    if(My_std["List"][30](target,on_the_go_orig))
     {throw [0,Circular,target,on_the_go_orig]}
    
    var match=Resource["Cache"][2](target);
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         return Log["dprintf"]
                 (5,
                  [/* Format */0,
                   [/* Alpha */15,
                    [/* String_literal */11,
                     " already built",
                     /* End_of_format */0]],
                   "%a already built"],
                  Resource["print"],
                  target);
        case 1:
         Log["dprintf"]
          (5,
           [/* Format */0,
            [/* Alpha */15,
             [/* String_literal */11," already failed",/* End_of_format */0]],
            "%a already failed"],
           Resource["print"],
           target);
         return failed(target,/* Leaf */[0,target]);
        case 2:
         if(!Pathname["is_relative"](target)&&Pathname["exists"](target))
          {return Resource["Cache"][15](target)
                   ?/* () */0
                   :failed(target,/* Leaf */[0,target])}
         else
          {if(Resource["exists_in_source_dir"](target))
            {return Resource["Cache"][7](target)}
           else
            {var
              matching_rules=
               My_std["List"][2](Rule["can_produce"](target),rules);
             
             if(matching_rules)
              {var
                until_works=
                 function(rs,backtraces)
                  {if(rs)
                    {var rs$1=rs[2];
                     
                     var r=rs[1];
                     
                     try
                      {My_std["List"][14]
                        (force_self(depth+1,on_the_go),Rule["deps_of_rule"](r));
                       try
                        {return Rule["call"](self_firsts(depth+1,on_the_go),r)}
                       catch(exn)
                        {if(exn===Rule["Failed"])
                          {throw [0,Failed,/* Leaf */[0,target]]}
                         else
                          {throw exn}
                         }
                       }
                     catch(exn$1)
                      {if(exn$1[1]===Failed)
                        {var backtrace=exn$1[2];
                         
                         if(rs$1===/* [] */0)
                          {return failed
                                   (target,
                                    /* Depth */[2,
                                     target,
                                     /* Choice */[1,/* :: */[0,backtrace,backtraces]]])}
                         else
                          {var match$1;
                           switch(backtrace[0])
                            {case 2:match$1=Resource["Cache"][12](backtrace[1]);break;
                             default:match$1=/* () */0;}
                           
                           return until_works(rs$1,/* :: */[0,backtrace,backtraces])}
                         }
                       else
                        {throw exn$1}
                       }
                     }
                   else
                    {throw [0,
                            CamlPrimitive["caml_global_data"]["Assert_failure"],
                            [0,"solver.ml",66,16]]}
                   };
               
               return until_works(matching_rules,/* [] */0)}
             else
              {return failed(target,/* Leaf */[0,target])}
             }
           }
         break
        }
      }
    else
     {Log["dprintf"]
       (5,
        [/* Format */0,
         [/* Alpha */15,
          [/* String_literal */11,
           " was suspended -> resuming",
           /* End_of_format */0]],
         "%a was suspended -> resuming"],
        Resource["print"],
        target);
      return Resource["Cache"][10](match[1])}
    };

var
 self_first=
  function(depth,on_the_go,already_failed,rs)
   {if(rs)
     {var r=rs[1];
      
      try
       {$$self(depth,on_the_go,r);return /* Good */[0,r]}
      catch(exn)
       {if(exn[1]===Failed)
         {return self_first
                  (depth,on_the_go,/* :: */[0,exn[2],already_failed],rs[2])}
        else
         {throw exn}
        }
      }
    else
     {return /* Bad */[1,[0,Failed,/* Choice */[1,already_failed]]]}
    };

var
 self_firsts=
  function(depth,on_the_go,rss)
   {var results=My_std["List"][16](self_first(depth,on_the_go,/* [] */0),rss);
    
    var
     match=
      My_std["List"][20]
       (function(res,acc)
         {switch(res[0])
           {case 0:
             var match$1=Resource["Cache"][11](res[1]);
             
             if(match$1)
              {var match$2=match$1[1];
               
               return /* tuple */[0,
                       /* :: */[0,match$2[1],acc[1]],
                       /* :: */[0,match$2[2],acc[2]]]}
             else
              {return acc}
             break;
            case 1:return acc
            }
          },
        results,
        [/* tuple */0,/* [] */0,/* [] */0]);
    
    var thunks=match[2];
    
    var cmds=match[1];
    
    var count=My_std["List"][5](cmds);
    
    var job_debug=Command["jobs"][1]===1?10:5;
    
    if(count>1)
     {Log["dprintf"]
       (job_debug,
        [/* Format */0,
         [/* String_literal */11,
          ">>> PARALLEL: ",
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           /* End_of_format */0]],
         ">>> PARALLEL: %d"],
        count)}
    
    var opt_exn=Command["execute_many"](/* None */0,/* None */0,cmds);
    
    if(count>1)
     {Log["dprintf"]
       (job_debug,
        [/* Format */0,
         [/* String_literal */11,"<<< PARALLEL",/* End_of_format */0],
         "<<< PARALLEL"])}
    
    if(opt_exn)
     {var match$1=opt_exn[1];
      
      My_std["List"][21]
       (function(res,thunk){return res?thunk(/* () */0):0},match$1[1],thunks);
      Log["finish"]([/* Some */0,/* Error */106380200],/* () */0);
      throw match$1[2]}
    else
     {My_std["List"][14](function(thunk){return thunk(/* () */0)},thunks)}
    
    return results};

var
 force_self=
  function(depth,on_the_go,x)
   {$$self(depth,on_the_go,x);return Resource["Cache"][9](x)};

var solve=force_self(0,/* [] */0);

var
 solve_target=
  function(name,rs)
   {var match=self_first(0,/* [] */0,/* [] */0,rs);
    
    switch(match[0])
     {case 0:var res=match[1];Resource["Cache"][9](res);return res;
      case 1:
       var exn=match[1];
       
       if(exn[1]===Failed)
        {throw [0,Failed,/* Target */[3,name,exn[2]]]}
       else
        {throw exn}
       break
      }
    };

module["exports"]=
{"Failed":Failed,
 "Circular":Circular,
 "solve":solve,
 "solve_target":solve_target};

