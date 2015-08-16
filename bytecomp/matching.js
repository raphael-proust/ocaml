// Generated CODE, PLEASE EDIT WITH CARE 

var Printlambda=require("./printlambda.js");
var Typeopt=require("./typeopt.js");
var Typedtree=require("./typedtree.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Btype=require("./btype.js");
var Env=require("./env.js");
var Predef=require("./predef.js");
var Printf=require("./printf.js");
var Clflags=require("./clflags.js");
var Format=require("./format.js");
var Switch=require("./switch.js");
var Obj=require("./obj.js");
var Misc=require("./misc.js");
var Parmatch=require("./parmatch.js");
var Lambda=require("./lambda.js");
var Location=require("./location.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var dbg=/* false */0;

var
 string_of_lam=
  function(lam)
   {Printlambda["lambda"](Format["str_formatter"],lam);
    return Format["flush_str_formatter"](/* () */0);
    };

var
 add_omega_column=
  function(pss)
   {return List["map"]
            (function(ps){return /* :: */[0,Parmatch["omega"],ps];},pss);
    };

var
 pretty_ctx=
  function(ctx)
   {return List["iter"]
            (function(param)
              {Pervasives["prerr_string"]("LEFT:");
               Parmatch["pretty_line"](param[1]);
               Pervasives["prerr_string"](" RIGHT:");
               Parmatch["pretty_line"](param[2]);
               return Pervasives["prerr_endline"]("");
               },
             ctx);
    };

var
 le_ctx=
  function(c1,c2)
   {return Parmatch["le_pats"](c1[1],c2[1])&&Parmatch["le_pats"](c1[2],c2[2]);
    };

var
 lshift=
  function(param)
   {var right=param[2];
    
    if(right)
     {return /* record */[0,/* :: */[0,right[1],param[1]],right[2]];}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",70,8]];
      }
    };

var
 lforget=
  function(param)
   {var right=param[2];
    
    if(right)
     {return /* record */[0,/* :: */[0,Parmatch["omega"],param[1]],right[2]];}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",74,8]];
      }
    };

var
 small_enough=
  function(n,param)
   {if(param)
     {if(n<=0){return /* false */0;}else{return small_enough(n-1,param[2]);}}
    else
     {return /* true */1;}
    };

var
 ctx_lshift=
  function(ctx)
   {if(small_enough(31,ctx))
     {return List["map"](lshift,ctx);}
    else
     {return Parmatch["get_mins"](le_ctx,List["map"](lforget,ctx));}
    };

var
 rshift=
  function(param)
   {var left=param[1];
    
    if(left)
     {return /* record */[0,left[2],/* :: */[0,left[1],param[2]]];}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",91,7]];
      }
    };

var ctx_rshift=function(ctx){return List["map"](rshift,ctx);};

var
 nchars=
  function(n,ps)
   {if(n<=0)
     {return /* tuple */[0,/* [] */0,ps];}
    else
     {if(ps)
       {var match=nchars(n-1,ps[2]);
        
        return /* tuple */[0,/* :: */[0,ps[1],match[1]],match[2]];
        }
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/matching.ml",101,9]];
        }
      }
    };

var
 rshift_num=
  function(n,param)
   {var match=nchars(n,param[1]);
    
    return /* record */[0,match[2],Pervasives["@"](match[1],param[2])];
    };

var ctx_rshift_num=function(n,ctx){return List["map"](rshift_num(n),ctx);};

var
 combine=
  function(param)
   {var left=param[1];
    
    if(left)
     {return /* record */[0,
              left[2],
              Parmatch["set_args_erase_mutable"](left[1],param[2])];
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",115,7]];
      }
    };

var ctx_combine=function(ctx){return List["map"](combine,ctx);};

var
 ncols=
  function(param){if(param){return List["length"](param[1]);}else{return 0;}};

var NoMatch=CamlPrimitive["caml_set_oo_id"]([248,"Matching.NoMatch",0]);

var OrPat=CamlPrimitive["caml_set_oo_id"]([248,"Matching.OrPat",0]);

var
 filter_matrix=
  function(matcher,pss)
   {var
     filter_rec=
      function(param)
       {if(param)
         {var match=param[1];
          
          if(match)
           {var rem=param[2];
            
            var ps=match[2];
            
            var p=match[1];
            
            var match$1=p[1];
            
            var exit;
            
            if(typeof match$1==="number")
             {switch(match$1){}}
            else
             {switch(match$1[0])
               {case 0:
                 return filter_rec
                         (/* :: */[0,/* :: */[0,Parmatch["omega"],ps],rem]);
                 
                case 1:
                 return filter_rec(/* :: */[0,/* :: */[0,match$1[1],ps],rem]);
                default:exit=691;}}
            
            switch(exit)
             {case 691:
               var rem$1=filter_rec(rem);
               
               try
                {return /* :: */[0,matcher(p,ps),rem$1];}
               catch(exn)
                {if(exn===NoMatch)
                  {return rem$1;}
                 else
                  {if(exn===OrPat)
                    {var match$2=p[1];
                     
                     var exit$1;
                     
                     if(typeof match$2==="number")
                      {switch(match$2){}}
                     else
                      {switch(match$2[0])
                        {case 8:
                          return Pervasives["@"]
                                  (filter_rec
                                    (/* :: */[0,
                                      /* :: */[0,match$2[1],ps],
                                      /* :: */[0,/* :: */[0,match$2[2],ps],/* [] */0]]),
                                   rem$1);
                          
                         default:exit$1=687;}}
                     
                     switch(exit$1)
                      {case 687:
                        throw [0,
                               CamlPrimitive["caml_global_data"]["Assert_failure"],
                               [0,"bytecomp/matching.ml",146,23]];
                        
                       }
                     }
                   else
                    {throw exn;}
                   }
                 }
               
              }
            }
          else
           {Parmatch["pretty_matrix"](pss);
            return Misc["fatal_error"]("Matching.filter_matrix");
            }
          }
        else
         {return /* [] */0;}
        };
    
    return filter_rec(pss);
    };

var
 make_default=
  function(matcher,env)
   {var
     make_rec=
      function(param)
       {if(param)
         {var match=param[1];
          
          var pss=match[1];
          
          var exit;
          
          if(pss)
           {if(pss[1])
             {exit=685;}
            else
             {if(pss[2])
               {exit=685;}
              else
               {return /* :: */[0,
                        /* tuple */[0,[/* :: */0,/* [] */0,/* [] */0],match[2]],
                        /* [] */0];
                }
              }
            }
          else
           {exit=685;}
          
          switch(exit)
           {case 685:
             var i=match[2];
             
             var rem=make_rec(param[2]);
             
             var pss$1=filter_matrix(matcher,pss);
             
             if(pss$1)
              {if(pss$1[1])
                {return /* :: */[0,/* tuple */[0,pss$1,i],rem];}
               else
                {return /* :: */[0,
                         /* tuple */[0,[/* :: */0,/* [] */0,/* [] */0],i],
                         rem];
                 }
               }
             else
              {return rem;}
             
            }
          }
        else
         {return /* [] */0;}
        };
    
    return make_rec(env);
    };

var
 ctx_matcher=
  function(p)
   {var p$1=Parmatch["normalize_pat"](p);
    
    var match=p$1[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 2:
         var cst=match[1];
         
         return function(q,rem)
          {var match$1=q[1];
           
           var exit$1;
           
           if(typeof match$1==="number")
            {switch(match$1){case 0:return /* tuple */[0,p$1,rem];}}
           else
            {switch(match$1[0])
              {case 2:
                if(Parmatch["const_compare"](cst,match$1[1])===0)
                 {return /* tuple */[0,p$1,rem];}
                else
                 {exit$1=671;}
                
               default:exit$1=671;}}
           
           switch(exit$1){case 671:throw NoMatch;}
           };
         
        case 3:
         var omegas=match[1];
         
         return function(q,rem)
          {var match$1=q[1];
           
           var exit$1;
           
           if(typeof match$1==="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 3:
                return /* tuple */[0,p$1,Pervasives["@"](match$1[1],rem)];
               default:exit$1=676;}}
           
           switch(exit$1)
            {case 676:return /* tuple */[0,p$1,Pervasives["@"](omegas,rem)];}
           };
         
        case 4:
         var omegas$1=match[3];
         
         var cstr=match[2];
         
         var match$1=cstr[6];
         
         var exit$1;
         
         switch(match$1[0])
          {case 0:exit$1=670;
           case 1:exit$1=670;
           case 2:
            var nargs=List["length"](omegas$1);
            
            return function(q,rem)
             {var match$2=q[1];
              
              var exit$2;
              
              if(typeof match$2==="number")
               {switch(match$2)
                 {case 0:
                   return /* tuple */[0,p$1,Pervasives["@"](omegas$1,rem)];
                  }}
              else
               {switch(match$2[0])
                 {case 4:
                   var args=match$2[3];
                   
                   if(List["length"](args)===nargs)
                    {return /* tuple */[0,p$1,Pervasives["@"](args,rem)];}
                   else
                    {exit$2=667;}
                   
                  default:exit$2=667;}}
              
              switch(exit$2){case 667:throw NoMatch;}
              };
            
           }
         
         switch(exit$1)
          {case 670:
            return function(q,rem)
             {var match$2=q[1];
              
              var exit$2;
              
              if(typeof match$2==="number")
               {switch(match$2)
                 {case 0:
                   return /* tuple */[0,p$1,Pervasives["@"](omegas$1,rem)];
                  }}
              else
               {switch(match$2[0])
                 {case 4:
                   if(CamlPrimitive["caml_equal"](cstr[6],match$2[2][6]))
                    {return /* tuple */[0,p$1,Pervasives["@"](match$2[3],rem)];}
                   else
                    {exit$2=669;}
                   
                  default:exit$2=669;}}
              
              switch(exit$2){case 669:throw NoMatch;}
              };
            
           }
         
        case 5:
         var match$2=match[2];
         
         var lab=match[1];
         
         if(match$2)
          {var omega=match$2[1];
           
           return function(q,rem)
            {var match$3=q[1];
             
             var exit$2;
             
             if(typeof match$3==="number")
              {switch(match$3)
                {case 0:return /* tuple */[0,p$1,/* :: */[0,omega,rem]];}}
             else
              {switch(match$3[0])
                {case 5:
                  var match$4=match$3[2];
                  
                  if(match$4)
                   {if(CamlPrimitive["caml_string_equal"](lab,match$3[1]))
                     {return /* tuple */[0,p$1,/* :: */[0,match$4[1],rem]];}
                    else
                     {exit$2=672;}
                    }
                  else
                   {exit$2=672;}
                  
                 default:exit$2=672;}}
             
             switch(exit$2){case 672:throw NoMatch;}
             };
           }
         else
          {return function(q,rem)
            {var match$3=q[1];
             
             var exit$2;
             
             if(typeof match$3==="number")
              {switch(match$3){case 0:return /* tuple */[0,p$1,rem];}}
             else
              {switch(match$3[0])
                {case 5:
                  if(match$3[2])
                   {exit$2=673;}
                  else
                   {if(CamlPrimitive["caml_string_equal"](lab,match$3[1]))
                     {return /* tuple */[0,p$1,rem];}
                    else
                     {exit$2=673;}
                    }
                  
                 default:exit$2=673;}}
             
             switch(exit$2){case 673:throw NoMatch;}
             };
           }
         
        case 6:
         var l=match[1];
         
         return function(q,rem)
          {var match$3=q[1];
           
           var exit$2;
           
           if(typeof match$3==="number")
            {switch(match$3){}}
           else
            {switch(match$3[0])
              {case 6:
                var l$prime=Parmatch["all_record_args"](match$3[1]);
                
                return /* tuple */[0,
                        p$1,
                        List["fold_right"]
                         (function(param,r){return /* :: */[0,param[3],r];},
                          l$prime,
                          rem)];
                
               default:exit$2=678;}}
           
           switch(exit$2)
            {case 678:
              return /* tuple */[0,
                      p$1,
                      List["fold_right"]
                       (function(param,r){return /* :: */[0,param[3],r];},l,rem)];
              
             }
           };
         
        case 7:
         var omegas$2=match[1];
         
         var len=List["length"](omegas$2);
         
         return function(q,rem)
          {var match$3=q[1];
           
           var exit$2;
           
           if(typeof match$3==="number")
            {switch(match$3)
              {case 0:return /* tuple */[0,p$1,Pervasives["@"](omegas$2,rem)];
               }}
           else
            {switch(match$3[0])
              {case 7:
                var args=match$3[1];
                
                if(List["length"](args)===len)
                 {return /* tuple */[0,p$1,Pervasives["@"](args,rem)];}
                else
                 {exit$2=674;}
                
               default:exit$2=674;}}
           
           switch(exit$2){case 674:throw NoMatch;}
           };
         
        case 9:
         var omega$1=match[1];
         
         return function(q,rem)
          {var match$3=q[1];
           
           var exit$2;
           
           if(typeof match$3==="number")
            {switch(match$3){}}
           else
            {switch(match$3[0])
              {case 9:return /* tuple */[0,p$1,/* :: */[0,match$3[1],rem]];
               default:exit$2=679;}}
           
           switch(exit$2)
            {case 679:return /* tuple */[0,p$1,/* :: */[0,omega$1,rem]];}
           };
         
        default:exit=680;}}
    
    switch(exit){case 680:return Misc["fatal_error"]("Matching.ctx_matcher");}
    };

var
 filter_ctx=
  function(q,ctx)
   {var matcher=ctx_matcher(q);
    
    var
     filter_rec=
      function(param)
       {if(param)
         {var l=param[1];
          
          var match=l[2];
          
          if(match)
           {var rem=param[2];
            
            var ps=match[2];
            
            var p=match[1];
            
            var match$1=p[1];
            
            var exit;
            
            if(typeof match$1==="number")
             {switch(match$1){}}
            else
             {switch(match$1[0])
               {case 0:
                 return filter_rec
                         (/* :: */[0,
                           /* record */[0,l[1],/* :: */[0,Parmatch["omega"],ps]],
                           rem]);
                 
                case 1:
                 return filter_rec
                         (/* :: */[0,
                           /* record */[0,l[1],/* :: */[0,match$1[1],ps]],
                           rem]);
                 
                case 8:
                 return filter_rec
                         (/* :: */[0,
                           /* record */[0,l[1],/* :: */[0,match$1[1],ps]],
                           /* :: */[0,
                            /* record */[0,l[1],/* :: */[0,match$1[2],ps]],
                            rem]]);
                 
                default:exit=663;}}
            
            switch(exit)
             {case 663:
               var rem$1=filter_rec(rem);
               
               try
                {var match$2=matcher(p,ps);
                 
                 return /* :: */[0,
                         /* record */[0,/* :: */[0,match$2[1],l[1]],match$2[2]],
                         rem$1];
                 }
               catch(exn){if(exn===NoMatch){return rem$1;}else{throw exn;}}
               
              }
            }
          else
           {return Misc["fatal_error"]("Matching.filter_ctx");}
          }
        else
         {return /* [] */0;}
        };
    
    return filter_rec(ctx);
    };

var
 select_columns=
  function(pss,ctx)
   {var n=ncols(pss);
    
    return List["fold_right"]
            (function(ps,r)
              {return List["fold_right"]
                       (function(param,r)
                         {var match=nchars(n,param[2]);
                          
                          try
                           {return /* :: */[0,
                                    /* record */[0,
                                     Pervasives["@"](Parmatch["lubs"](match[1],ps),param[1]),
                                     match[2]],
                                    r];
                            }
                          catch(exn)
                           {if(exn===Parmatch["Empty"]){return r;}else{throw exn;}}
                          },
                        ctx,
                        r);
               },
             pss,
             /* [] */0);
    };

var
 ctx_lub=
  function(p,ctx)
   {return List["fold_right"]
            (function(param,r)
              {var right=param[2];
               
               if(right)
                {try
                  {return /* :: */[0,
                           /* record */[0,
                            param[1],
                            /* :: */[0,Parmatch["lub"](p,right[1]),right[2]]],
                           r];
                   }
                 catch(exn)
                  {if(exn===Parmatch["Empty"]){return r;}else{throw exn;}}
                 }
               else
                {return Misc["fatal_error"]("Matching.ctx_lub");}
               },
             ctx,
             /* [] */0);
    };

var
 ctx_match=
  function(ctx,pss)
   {return List["exists"]
            (function(param)
              {var qs=param[2];
               
               return List["exists"]
                       (function(ps){return Parmatch["compats"](qs,ps);},pss);
               },
             ctx);
    };

var
 pretty_jumps=
  function(env)
   {if(env)
     {return List["iter"]
              (function(param)
                {Printf["fprintf"]
                  (Pervasives["stderr"],
                   [/* Format */0,
                    [/* String_literal */11,
                     "jump for ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* Char_literal */12,10,/* End_of_format */0]]],
                    "jump for %d\n"],
                   param[1]);
                 return pretty_ctx(param[2]);
                 },
               env);
      }
    else
     {return /* () */0;}
    };

var
 jumps_extract=
  function(i,all)
   {if(all)
     {var rem=all[2];
      
      var x=all[1];
      
      var j=x[1];
      
      if(CamlPrimitive["caml_equal"](i,j))
       {return /* tuple */[0,x[2],rem];}
      else
       {if(CamlPrimitive["caml_lessthan"](j,i))
         {return /* tuple */[0,/* [] */0,all];}
        else
         {var match=jumps_extract(i,rem);
          
          return /* tuple */[0,match[1],/* :: */[0,x,match[2]]];
          }
        }
      }
    else
     {return [/* tuple */0,/* [] */0,/* [] */0];}
    };

var
 jumps_remove=
  function(i,param)
   {if(param)
     {var rem=param[2];
      
      var x=param[1];
      
      if(CamlPrimitive["caml_equal"](i,x[1]))
       {return rem;}
      else
       {return /* :: */[0,x,jumps_remove(i,rem)];}
      }
    else
     {return /* [] */0;}
    };

var jumps_empty=/* [] */0;

var
 jumps_is_empty=
  function(param){if(param){return /* false */0;}else{return /* true */1;}};

var
 jumps_singleton=
  function(i,ctx)
   {if(ctx)
     {return /* :: */[0,/* tuple */[0,i,ctx],/* [] */0];}
    else
     {return /* [] */0;}
    };

var
 jumps_add=
  function(i,pss,jumps)
   {if(pss)
     {var
       add=
        function(all)
         {if(all)
           {var rem=all[2];
            
            var x=all[1];
            
            var j=x[1];
            
            if(CamlPrimitive["caml_greaterthan"](j,i))
             {return /* :: */[0,x,add(rem)];}
            else
             {if(CamlPrimitive["caml_lessthan"](j,i))
               {return /* :: */[0,/* tuple */[0,i,pss],all];}
              else
               {return /* :: */[0,
                        /* tuple */[0,
                         i,
                         Parmatch["get_mins"](le_ctx,Pervasives["@"](pss,x[2]))],
                        rem];
                }
              }
            }
          else
           {return /* :: */[0,/* tuple */[0,i,pss],/* [] */0];}
          };
      
      return add(jumps);
      }
    else
     {return jumps;}
    };

var
 jumps_union=
  function(env1,env2)
   {if(env1)
     {if(env2)
       {var rem2=env2[2];
        
        var x2=env2[1];
        
        var i2=x2[1];
        
        var rem1=env1[2];
        
        var x1=env1[1];
        
        var i1=x1[1];
        
        if(i1===i2)
         {return /* :: */[0,
                  /* tuple */[0,
                   i1,
                   Parmatch["get_mins"](le_ctx,Pervasives["@"](x1[2],x2[2]))],
                  jumps_union(rem1,rem2)];
          }
        else
         {if(i1>i2)
           {return /* :: */[0,x1,jumps_union(rem1,env2)];}
          else
           {return /* :: */[0,x2,jumps_union(env1,rem2)];}
          }
        }
      else
       {return env1;}
      }
    else
     {return env2;}
    };

var
 merge=
  function(envs)
   {var exit;
    
    if(envs)
     {var match=envs[2];
      
      if(match)
       {return /* :: */[0,jumps_union(envs[1],match[1]),merge(match[2])];}
      else
       {exit=640;}
      }
    else
     {exit=640;}
    
    switch(exit){case 640:return envs;}
    };

var
 jumps_unions=
  function(envs)
   {if(envs)
     {if(envs[2]){return jumps_unions(merge(envs));}else{return envs[1];}}
    else
     {return /* [] */0;}
    };

var
 jumps_map=
  function(f,env)
   {return List["map"]
            (function(param){return /* tuple */[0,param[1],f(param[2])];},env);
    };

var
 pretty_cases=
  function(cases)
   {return List["iter"]
            (function(param)
              {List["iter"]
                (function(p)
                  {Parmatch["top_pretty"](Format["str_formatter"],p);
                   Pervasives["prerr_string"](" ");
                   return Pervasives["prerr_string"]
                           (Format["flush_str_formatter"](/* () */0));
                   },
                 param[1]);
               return Pervasives["prerr_endline"]("");
               },
             cases);
    };

var
 pretty_def=
  function(def)
   {Pervasives["prerr_endline"]("+++++ Defaults +++++");
    List["iter"]
     (function(param)
       {Printf["fprintf"]
         (Pervasives["stderr"],
          [/* Format */0,
           [/* String_literal */11,
            "Matrix for ",
            [/* Int */4,
             /* Int_d */0,
             /* No_padding */0,
             /* No_precision */0,
             [/* Char_literal */12,10,/* End_of_format */0]]],
           "Matrix for %d\n"],
          param[2]);
        return Parmatch["pretty_matrix"](param[1]);
        },
      def);
    return Pervasives["prerr_endline"]("+++++++++++++++++++++");
    };

var pretty_pm=function(pm){return pretty_cases(pm[1]);};

var
 pretty_precompiled=
  function(param)
   {switch(param[0])
     {case 0:
       var x=param[1];
       
       Pervasives["prerr_endline"]("++++ OR ++++");
       pretty_pm(x[1]);
       Parmatch["pretty_matrix"](x[3]);
       return List["iter"]
               (function(param$1)
                 {Printf["eprintf"]
                   ([/* Format */0,
                     [/* String_literal */11,
                      "++ Handler ",
                      [/* Int */4,
                       /* Int_d */0,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* String_literal */11," ++\n",/* End_of_format */0]]],
                     "++ Handler %d ++\n"],
                    param$1[2]);
                  return pretty_pm(param$1[4]);
                  },
                x[2]);
       
      case 1:
       Pervasives["prerr_endline"]("++++ VAR ++++");
       return pretty_precompiled(param[1][1]);
       
      case 2:
       Pervasives["prerr_endline"]("++++ PM ++++");return pretty_pm(param[1]);
      }
    };

var
 pretty_precompiled_res=
  function(first,nexts)
   {pretty_precompiled(first);
    return List["iter"]
            (function(param)
              {Printf["eprintf"]
                ([/* Format */0,
                  [/* String_literal */11,
                   "** DEFAULT ",
                   [/* Int */4,
                    /* Int_d */0,
                    /* No_padding */0,
                    /* No_precision */0,
                    [/* String_literal */11," **\n",/* End_of_format */0]]],
                  "** DEFAULT %d **\n"],
                 param[1]);
               return pretty_precompiled(param[2]);
               },
             nexts);
    };

var make_key=Lambda["make_key"];

var StoreExp=Switch["Store"]([0,make_key]);

var make_exit=function(i){return /* Lstaticraise */[9,i,/* [] */0];};

var
 make_catch=
  function(d,k)
   {var exit;
    
    switch(d[0])
     {case 9:if(d[2]){exit=630;}else{return k(d);}default:exit=630;}
    
    switch(exit)
     {case 630:
       var e=Lambda["next_raise_count"](/* () */0);
       
       return /* Lstaticcatch */[10,
               k(make_exit(e)),
               /* tuple */[0,e,/* [] */0],
               d];
       
      }
    };

var
 as_simple_exit=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 4:if(param[1]!==1){exit=628;}else{return as_simple_exit(param[4]);}
      case 9:if(param[2]){exit=628;}else{return /* Some */[0,param[1]];}
      default:exit=628;}
    
    switch(exit){case 628:return /* None */0;}
    };

var
 make_catch_delayed=
  function(handler)
   {var match=as_simple_exit(handler);
    
    if(match)
     {return /* tuple */[0,match[1],function(act){return act;}];}
    else
     {var i=Lambda["next_raise_count"](/* () */0);
      
      return /* tuple */[0,
              i,
              function(body)
               {switch(body[0])
                 {case 9:if(i===body[1]){return handler;}else{return body;}
                  default:
                   return /* Lstaticcatch */[10,
                           body,
                           /* tuple */[0,i,/* [] */0],
                           handler];
                   }
                }];
      }
    };

var
 raw_action=
  function(l)
   {var match=Lambda["make_key"](l);
    
    if(match){return match[1];}else{return l;}
    };

var
 tr_raw=
  function(act)
   {var match=Lambda["make_key"](act);
    
    if(match){return match[1];}else{throw Pervasives["Exit"];}
    };

var
 same_actions=
  function(param)
   {if(param)
     {var rem=param[2];
      
      var act=param[1][2];
      
      if(rem)
       {try
         {var raw_act0=tr_raw(act);
          
          var
           s_rec=
            function(param$1)
             {if(param$1)
               {if
                 (CamlPrimitive["caml_equal"](raw_act0,tr_raw(param$1[1][2])))
                 {return s_rec(param$1[2]);}
                else
                 {return /* None */0;}
                }
              else
               {return /* Some */[0,act];}
              };
          
          return s_rec(rem);
          }
        catch(exn)
         {if(exn===Pervasives["Exit"]){return /* None */0;}else{throw exn;}}
        }
      else
       {return /* Some */[0,act];}
      }
    else
     {return /* None */0;}
    };

var
 up_ok_action=
  function(act1,act2)
   {try
     {var raw1=tr_raw(act1);
      
      var raw2=tr_raw(act2);
      
      return CamlPrimitive["caml_equal"](raw1,raw2);
      }
    catch(exn)
     {if(exn===Pervasives["Exit"]){return /* false */0;}else{throw exn;}}
    };

var
 exc_inside=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:exit=613;
        case 3:exit=614;
        case 4:
         var exit$1;
         
         switch(match[2][6][0])
          {case 0:exit$1=611;case 1:exit$1=611;case 2:return /* true */1;}
         
         switch(exit$1)
          {case 611:
            var ps=match[3];if(ps){var ps$1=ps;exit=609;}else{exit=608;}
           }
         
        case 5:
         var match$1=match[2];
         
         if(match$1){var q=match$1[1];exit=610;}else{exit=608;}
         
        case 6:
         return List["exists"]
                 (function(param){return exc_inside(param[3]);},match[1]);
         
        case 7:exit=614;
        case 8:return exc_inside(match[1])||exc_inside(match[2]);
        case 9:exit=613;
        default:exit=608;}}
    
    switch(exit)
     {case 613:var q=match[1];exit=610;
      case 614:var ps$1=match[1];exit=609;
      case 608:return /* false */0;
      case 609:return exc_insides(ps$1);
      case 610:return exc_inside(q);
      }
    };

var exc_insides=function(ps){return List["exists"](exc_inside,ps);};

var
 up_ok=
  function(param,l)
   {var act_p=param[2];
    
    var ps=param[1];
    
    if(exc_insides(ps))
     {if(l){return /* false */0;}else{return /* true */1;}}
    else
     {return List["for_all"]
              (function(param$1)
                {return up_ok_action(act_p,param$1[2])||
                        !Parmatch["compats"](ps,param$1[1]);
                 },
               l);
      }
    };

var Var=CamlPrimitive["caml_set_oo_id"]([248,"Matching.Var",0]);

var
 simplify_or=
  function(p)
   {var
     simpl_rec=
      function(p)
       {var match=p[1];
        
        var exit;
        
        if(typeof match==="number")
         {switch(match){case 0:exit=605;}}
        else
         {switch(match[0])
           {case 0:exit=605;
            case 1:
             var s=match[3];
             
             var id=match[2];
             
             try
              {var newrecord=/* unknown */"duprecord regular 6";
               
               newrecord[1]=/* Tpat_alias */[1,simpl_rec(match[1]),id,s];
               return newrecord;
               }
             catch(exn)
              {if(exn[1]===Var)
                {var newrecord$1=/* unknown */"duprecord regular 6";
                 
                 throw [0,
                        Var,
                        (newrecord$1[1]=/* Tpat_alias */[1,exn[2],id,s],newrecord$1)];
                 }
               else
                {throw exn;}
               }
             
            case 6:
             var all_lbls=Parmatch["all_record_args"](match[1]);
             
             var newrecord$2=/* unknown */"duprecord regular 6";
             
             newrecord$2[1]=/* Tpat_record */[6,all_lbls,match[2]];
             return newrecord$2;
             
            case 8:
             var o=match[3];
             
             var q1=simpl_rec(match[1]);
             
             try
              {var q2=simpl_rec(match[2]);
               
               var newrecord$3=/* unknown */"duprecord regular 6";
               
               newrecord$3[1]=/* Tpat_or */[8,q1,q2,o];
               return newrecord$3;
               }
             catch(exn$1)
              {if(exn$1[1]===Var)
                {var newrecord$4=/* unknown */"duprecord regular 6";
                 
                 throw [0,
                        Var,
                        (newrecord$4[1]=/* Tpat_or */[8,q1,exn$1[2],o],newrecord$4)];
                 }
               else
                {throw exn$1;}
               }
             
            default:return p;}}
        
        switch(exit){case 605:throw [0,Var,p];}
        };
    
    try
     {return simpl_rec(p);}
    catch(exn){if(exn[1]===Var){return exn[2];}else{throw exn;}}
    };

var
 simplify_cases=
  function(args,cls)
   {if(args)
     {var arg=args[1][1];
      
      var
       simplify=
        function(param)
         {if(param)
           {var cl=param[1];
            
            var match=cl[1];
            
            if(match)
             {var rem=param[2];
              
              var action=cl[2];
              
              var patl=match[2];
              
              var pat=match[1];
              
              var match$1=pat[1];
              
              if(typeof match$1==="number")
               {switch(match$1){case 0:return /* :: */[0,cl,simplify(rem)];}}
              else
               {switch(match$1[0])
                 {case 0:
                   return /* :: */[0,
                           /* tuple */[0,
                            /* :: */[0,Parmatch["omega"],patl],
                            Lambda["bind"](/* Alias */1,match$1[1],arg,action)],
                           simplify(rem)];
                   
                  case 1:
                   return simplify
                           (/* :: */[0,
                             /* tuple */[0,
                              /* :: */[0,match$1[1],patl],
                              Lambda["bind"](/* Alias */1,match$1[2],arg,action)],
                             rem]);
                   
                  case 6:
                   var lbls=match$1[1];
                   
                   if(lbls)
                    {var all_lbls=Parmatch["all_record_args"](lbls);
                     
                     var newrecord=/* unknown */"duprecord regular 6";
                     
                     newrecord[1]=/* Tpat_record */[6,all_lbls,match$1[2]];
                     var full_pat=newrecord;
                     
                     return /* :: */[0,
                             /* tuple */[0,/* :: */[0,full_pat,patl],action],
                             simplify(rem)];
                     }
                   else
                    {return /* :: */[0,
                             /* tuple */[0,/* :: */[0,Parmatch["omega"],patl],action],
                             simplify(rem)];
                     }
                   
                  case 8:
                   var pat_simple=simplify_or(pat);
                   
                   var match$2=pat_simple[1];
                   
                   var exit;
                   
                   if(typeof match$2==="number")
                    {switch(match$2){}}
                   else
                    {switch(match$2[0])
                      {case 8:
                        return /* :: */[0,
                                /* tuple */[0,/* :: */[0,pat_simple,patl],action],
                                simplify(rem)];
                        
                       default:exit=591;}}
                   
                   switch(exit)
                    {case 591:
                      return simplify
                              (/* :: */[0,
                                /* tuple */[0,/* :: */[0,pat_simple,patl],action],
                                rem]);
                      
                     }
                   
                  default:return /* :: */[0,cl,simplify(rem)];}}
              }
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"bytecomp/matching.ml",641,13]];
              }
            }
          else
           {return /* [] */0;}
          };
      
      return simplify(cls);
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",608,8]];
      }
    };

var
 what_is_cases=
  function(cases)
   {if(cases)
     {var match=cases[1][1];
      
      if(match)
       {var p=match[1];
        
        var exit;
        
        var $js=p[1];
        if(typeof $js==="number")
         {switch($js){case 0:return what_is_cases(cases[2]);}}
        else
         {switch($js[0])
           {case 0:exit=587;case 1:exit=587;case 8:exit=587;default:return p;}}
        
        switch(exit)
         {case 587:
           throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"bytecomp/matching.ml",653,5]];
           
          }
        }
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/matching.ml",656,7]];
        }
      }
    else
     {return Parmatch["omega"];}
    };

var
 as_matrix=
  function(cases)
   {return Parmatch["get_mins"]
            (Parmatch["le_pats"],
             List["map"](function(param){return param[1];},cases));
    };

var
 as_matrix_omega=
  function(cases)
   {return Parmatch["get_mins"]
            (Parmatch["le_pats"],
             List["map"]
              (function(param)
                {var ps=param[1];
                 
                 if(ps)
                  {return /* :: */[0,Parmatch["omega"],ps[2]];}
                 else
                  {throw [0,
                          CamlPrimitive["caml_global_data"]["Assert_failure"],
                          [0,"bytecomp/matching.ml",669,17]];
                   }
                 },
               cases));
    };

var
 cons_default=
  function(matrix,raise_num,$$default)
   {if(matrix)
     {return /* :: */[0,/* tuple */[0,matrix,raise_num],$$default];}
    else
     {return $$default;}
    };

var
 default_compat=
  function(p,def)
   {return List["fold_right"]
            (function(param,r)
              {var
                qss=
                 List["fold_right"]
                  (function(qs,r)
                    {var exit;
                     
                     if(qs)
                      {if(Parmatch["compat"](p,qs[1]))
                        {return /* :: */[0,qs[2],r];}
                       else
                        {exit=579;}
                       }
                     else
                      {exit=579;}
                     
                     switch(exit){case 579:return r;}
                     },
                   param[1],
                   /* [] */0);
               
               if(qss)
                {return /* :: */[0,/* tuple */[0,qss,param[2]],r];}
               else
                {return r;}
               },
             def,
             /* [] */0);
    };

var
 extract_vars=
  function(r,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=575;}}
    else
     {switch(match[0])
       {case 0:return Lambda["IdentSet"][4](match[1],r);
        case 1:
         return extract_vars(Lambda["IdentSet"][4](match[2],r),match[1]);
        case 2:exit=575;
        case 3:exit=576;
        case 4:return List["fold_left"](extract_vars,r,match[3]);
        case 5:
         var match$1=match[2];
         
         if(match$1){return extract_vars(r,match$1[1]);}else{exit=575;}
         
        case 6:
         return List["fold_left"]
                 (function(r,param){return extract_vars(r,param[3]);},
                  r,
                  match[1]);
         
        case 7:exit=576;
        case 8:exit=577;
        case 9:exit=577;
        }}
    
    switch(exit)
     {case 576:return List["fold_left"](extract_vars,r,match[1]);
      case 577:return extract_vars(r,match[1]);
      case 575:return r;
      }
    };

var
 Cannot_flatten=
  CamlPrimitive["caml_set_oo_id"]([248,"Matching.Cannot_flatten",0]);

var
 mk_alpha_env=
  function(arg,aliases,ids)
   {return List["map"]
            (function(id)
              {if(List["mem"](id,aliases))
                {if(arg){var $js=arg[1];}else{throw Cannot_flatten;}}
               else
                {var $js=Ident["create"](Ident["name"](id));}
               return /* tuple */[0,id,$js];
               },
             ids);
    };

var
 explode_or_pat=
  function(arg,patl,mk_action,rem,vars,aliases,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         var env=mk_alpha_env(arg,/* :: */[0,match[1],aliases],vars);
         
         return /* :: */[0,
                 /* tuple */[0,
                  /* :: */[0,Parmatch["omega"],patl],
                  mk_action(List["map"](function(prim){return prim[2];},env))],
                 rem];
         
        case 1:
         return explode_or_pat
                 (arg,
                  patl,
                  mk_action,
                  rem,
                  vars,
                  /* :: */[0,match[2],aliases],
                  match[1]);
         
        case 8:
         return explode_or_pat
                 (arg,
                  patl,
                  mk_action,
                  explode_or_pat(arg,patl,mk_action,rem,vars,aliases,match[2]),
                  vars,
                  aliases,
                  match[1]);
         
        default:exit=572;}}
    
    switch(exit)
     {case 572:
       var env$1=mk_alpha_env(arg,aliases,vars);
       
       return /* :: */[0,
               /* tuple */[0,
                /* :: */[0,Typedtree["alpha_pat"](env$1,p),patl],
                mk_action(List["map"](function(prim){return prim[2];},env$1))],
               rem];
       
      }
    };

var
 pm_free_variables=
  function(param)
   {var cases=param[1];
    
    return List["fold_right"]
            (function(param$1,r)
              {return Lambda["IdentSet"][7]
                       (Lambda["free_variables"](param$1[2]),r);
               },
             cases,
             Lambda["IdentSet"][1]);
    };

var
 pat_as_constr=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 4:return match[2];default:exit=567;}}
    
    switch(exit)
     {case 567:return Misc["fatal_error"]("Matching.pat_as_constr");}
    };

var
 group_constant=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){}}
    else
     {switch($js[0]){case 2:return /* true */1;default:exit=565;}}
    
    switch(exit){case 565:return /* false */0;}
    };

var
 group_constructor=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){}}
    else
     {switch($js[0]){case 4:return /* true */1;default:exit=563;}}
    
    switch(exit){case 563:return /* false */0;}
    };

var
 group_variant=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){}}
    else
     {switch($js[0]){case 5:return /* true */1;default:exit=561;}}
    
    switch(exit){case 561:return /* false */0;}
    };

var
 group_var=
  function(param)
   {if(typeof param[1]==="number")
     {return /* true */1;}
    else
     {return /* false */0;}
    };

var
 group_tuple=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){case 0:exit=557;}}
    else
     {switch($js[0]){case 3:exit=557;default:return /* false */0;}}
    
    switch(exit){case 557:return /* true */1;}
    };

var
 group_record=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){case 0:exit=553;}}
    else
     {switch($js[0]){case 6:exit=553;default:return /* false */0;}}
    
    switch(exit){case 553:return /* true */1;}
    };

var
 group_array=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){}}
    else
     {switch($js[0]){case 7:return /* true */1;default:exit=549;}}
    
    switch(exit){case 549:return /* false */0;}
    };

var
 group_lazy=
  function(param)
   {var exit;
    
    var $js=param[1];
    if(typeof $js==="number")
     {switch($js){}}
    else
     {switch($js[0]){case 9:return /* true */1;default:exit=547;}}
    
    switch(exit){case 547:return /* false */0;}
    };

var
 get_group=
  function(p)
   {var match=p[1];
    
    if(typeof match==="number")
     {switch(match){case 0:return group_var;}}
    else
     {switch(match[0])
       {case 2:return group_constant;
        case 3:return group_tuple;
        case 4:return group_constructor;
        case 5:return group_variant;
        case 6:return group_record;
        case 7:return group_array;
        case 9:return group_lazy;
        default:return Misc["fatal_error"]("Matching.get_group");}}
    };

var
 is_or=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 8:return /* true */1;default:exit=543;}}
    
    switch(exit){case 543:return /* false */0;}
    };

var conda=function(p,q){return !Parmatch["compat"](p,q);};

var
 condb=
  function(act,ps,qs)
   {return !Lambda["is_guarded"](act)&&Parmatch["le_pats"](qs,ps);};

var
 or_ok=
  function(p,ps,l)
   {return List["for_all"]
            (function(param)
              {var match=param[1];
               
               var exit;
               
               if(match)
                {var q=match[1];
                 
                 var $js=q[1];
                 if(typeof $js==="number")
                  {switch($js){}}
                 else
                  {switch($js[0])
                    {case 8:return conda(p,q)||condb(param[2],ps,match[2]);
                     default:exit=539;}}
                 }
               else
                {exit=539;}
               
               switch(exit){case 539:return /* true */1;}
               },
             l);
    };

var
 equiv_pat=
  function(p,q){return Parmatch["le_pat"](p,q)&&Parmatch["le_pat"](q,p);};

var
 get_equiv=
  function(p,l)
   {var exit;
    
    if(l)
     {var cl=l[1];
      
      var match=cl[1];
      
      if(match)
       {if(equiv_pat(p,match[1]))
         {var match$1=get_equiv(p,l[2]);
          
          return /* tuple */[0,/* :: */[0,cl,match$1[1]],match$1[2]];
          }
        else
         {return /* tuple */[0,/* [] */0,l];}
        }
      else
       {exit=537;}
      }
    else
     {exit=537;}
    
    switch(exit){case 537:return /* tuple */[0,/* [] */0,l];}
    };

var
 insert_or_append=
  function(p,ps,act,ors,no)
   {var
     attempt=
      function(seen,param)
       {var exit;
        
        if(param)
         {var cl=param[1];
          
          var match=cl[1];
          
          if(match)
           {var rem=param[2];
            
            var q=match[1];
            
            if(is_or(q))
             {if(Parmatch["compat"](p,q))
               {if
                 (Lambda["IdentSet"][2](extract_vars(Lambda["IdentSet"][1],p))&&
                  Lambda["IdentSet"][2](extract_vars(Lambda["IdentSet"][1],q))&&
                  equiv_pat(p,q))
                 {var match$1=get_equiv(q,rem);
                  
                  if
                   (or_ok(p,ps,match$1[2])&&
                    List["for_all"]
                     (function(cl)
                       {var match$2=cl[1];
                        
                        if(match$2)
                         {return !Parmatch["compat"](p,match$2[1]);}
                        else
                         {throw [0,
                                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                                 [0,"bytecomp/matching.ml",842,32]];
                          }
                        },
                      seen))
                   {return /* tuple */[0,
                            List["rev_append"]
                             (seen,
                              /* :: */[0,
                               /* tuple */[0,/* :: */[0,p,ps],act],
                               /* :: */[0,cl,rem]]),
                            no];
                    }
                  else
                   {return /* tuple */[0,
                            ors,
                            /* :: */[0,/* tuple */[0,/* :: */[0,p,ps],act],no]];
                    }
                  }
                else
                 {if(condb(cl[2],ps,match[2]))
                   {return attempt(/* :: */[0,cl,seen],rem);}
                  else
                   {return /* tuple */[0,
                            ors,
                            /* :: */[0,/* tuple */[0,/* :: */[0,p,ps],act],no]];
                    }
                  }
                }
              else
               {return attempt(/* :: */[0,cl,seen],rem);}
              }
            else
             {return attempt(/* :: */[0,cl,seen],rem);}
            }
          else
           {exit=534;}
          }
        else
         {exit=534;}
        
        switch(exit)
         {case 534:
           return /* tuple */[0,
                   /* :: */[0,/* tuple */[0,/* :: */[0,p,ps],act],ors],
                   no];
           
          }
        };
    
    return attempt(/* [] */0,ors);
    };

var
 rebuild_matrix=
  function(pmh)
   {switch(pmh[0])
     {case 0:return pmh[1][3];
      case 1:return add_omega_column(rebuild_matrix(pmh[1][1]));
      case 2:return as_matrix(pmh[1][1]);
      }
    };

var
 rebuild_default=
  function(nexts,def)
   {if(nexts)
     {var match=nexts[1];
      
      return /* :: */[0,
              /* tuple */[0,
               add_omega_column(rebuild_matrix(match[2])),
               match[1]],
              rebuild_default(nexts[2],def)];
      }
    else
     {return def;}
    };

var
 rebuild_nexts=
  function(arg,nexts,k)
   {return List["fold_right"]
            (function(param,k)
              {return /* :: */[0,
                       /* tuple */[0,
                        param[1],
                        /* PmVar */[1,/* record */[0,param[2],arg]]],
                       k];
               },
             nexts,
             k);
    };

var
 split_or=
  function(argo,cls,args,def)
   {var cls$1=simplify_cases(args,cls);
    
    var
     do_split=
      function(before,ors,no,param)
       {if(param)
         {var cl=param[1];
          
          var match=cl[1];
          
          if(match)
           {var rem=param[2];
            
            var ps=match[2];
            
            var p=match[1];
            
            if(up_ok(cl,no))
             {if(is_or(p))
               {var match$1=insert_or_append(p,ps,cl[2],ors,no);
                
                return do_split(before,match$1[1],match$1[2],rem);
                }
              else
               {if(up_ok(cl,ors))
                 {return do_split(/* :: */[0,cl,before],ors,no,rem);}
                else
                 {if(or_ok(p,ps,ors))
                   {return do_split(before,/* :: */[0,cl,ors],no,rem);}
                  else
                   {return do_split(before,ors,/* :: */[0,cl,no],rem);}
                  }
                }
              }
            else
             {return do_split(before,ors,/* :: */[0,cl,no],rem);}
            }
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/matching.ml",923,11]];
            }
          }
        else
         {return cons_next
                  (List["rev"](before),List["rev"](ors),List["rev"](no));
          }
        };
    
    var
     cons_next=
      function(yes,yesor,rem)
       {if(rem)
         {var match=do_split(/* [] */0,/* [] */0,/* [] */0,rem);
          
          var match$1=match[1];
          
          var idef=Lambda["next_raise_count"](/* () */0);
          
          return precompile_or
                  (argo,
                   yes,
                   yesor,
                   args,
                   cons_default(match$1[2],idef,match$1[3]),
                   /* :: */[0,/* tuple */[0,idef,match$1[1]],match[2]]);
          }
        else
         {return precompile_or(argo,yes,yesor,args,def,/* [] */0);}
        };
    
    return do_split(/* [] */0,/* [] */0,/* [] */0,cls$1);
    };

var
 split_naive=
  function(cls,args,def,k)
   {var
     split_exc=
      function(cstr0,yes,param)
       {if(param)
         {var cl=param[1];
          
          var match=cl[1];
          
          if(match)
           {var rem=param[2];
            
            var p=match[1];
            
            if(group_constructor(p))
             {var cstr=pat_as_constr(p);
              
              if(CamlPrimitive["caml_equal"](cstr,cstr0))
               {return split_exc(cstr0,/* :: */[0,cl,yes],rem);}
              else
               {var yes$1=List["rev"](yes);
                
                var match$1=split_exc(cstr,/* :: */[0,cl,/* [] */0],rem);
                
                var match$2=match$1[1];
                
                var idef=Lambda["next_raise_count"](/* () */0);
                
                var def$1=cons_default(match$2[2],idef,match$2[3]);
                
                return /* tuple */[0,
                        /* record */[0,
                         /* Pm */[2,/* record */[0,yes$1,args,def$1]],
                         as_matrix_omega(yes$1),
                         def$1],
                        /* :: */[0,/* tuple */[0,idef,match$2[1]],match$1[2]]];
                }
              }
            else
             {var yes$2=List["rev"](yes);
              
              var match$3=split_noexc(/* :: */[0,cl,/* [] */0],rem);
              
              var match$4=match$3[1];
              
              var idef$1=Lambda["next_raise_count"](/* () */0);
              
              var def$2=cons_default(match$4[2],idef$1,match$4[3]);
              
              return /* tuple */[0,
                      /* record */[0,
                       /* Pm */[2,/* record */[0,yes$2,args,def$2]],
                       as_matrix_omega(yes$2),
                       def$2],
                      /* :: */[0,/* tuple */[0,idef$1,match$4[1]],match$3[2]]];
              }
            }
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/matching.ml",975,11]];
            }
          }
        else
         {var yes$3=List["rev"](yes);
          
          return /* tuple */[0,
                  /* record */[0,
                   /* Pm */[2,/* record */[0,yes$3,args,def]],
                   as_matrix_omega(yes$3),
                   def],
                  k];
          }
        };
    
    var
     split_noexc=
      function(yes,param)
       {if(param)
         {var cl=param[1];
          
          var match=cl[1];
          
          if(match)
           {var rem=param[2];
            
            var p=match[1];
            
            if(group_constructor(p))
             {var yes$1=List["rev"](yes);
              
              var
               match$1=
                split_exc(pat_as_constr(p),/* :: */[0,cl,/* [] */0],rem);
              
              var match$2=match$1[1];
              
              var idef=Lambda["next_raise_count"](/* () */0);
              
              return precompile_var
                      (args,
                       yes$1,
                       cons_default(match$2[2],idef,match$2[3]),
                       /* :: */[0,/* tuple */[0,idef,match$2[1]],match$1[2]]);
              }
            else
             {return split_noexc(/* :: */[0,cl,yes],rem);}
            }
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/matching.ml",990,11]];
            }
          }
        else
         {return precompile_var(args,List["rev"](yes),def,k);}
        };
    
    if(cls)
     {var cl=cls[1];
      
      var match=cl[1];
      
      if(match)
       {var rem=cls[2];
        
        var p=match[1];
        
        if(group_constructor(p))
         {return split_exc(pat_as_constr(p),/* :: */[0,cl,/* [] */0],rem);}
        else
         {return split_noexc(/* :: */[0,cl,/* [] */0],rem);}
        }
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/matching.ml",999,9]];
        }
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",993,10]];
      }
    };

var
 split_constr=
  function(cls,args,def,k)
   {var ex_pat=what_is_cases(cls);
    
    var match=ex_pat[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:return precompile_var(args,cls,def,k);}}
    else
     {switch(match[0])
       {case 4:
         switch(match[2][6][0])
          {case 0:exit=502;
           case 1:exit=502;
           case 2:return split_naive(cls,args,def,k);
           }
         
        default:exit=502;}}
    
    switch(exit)
     {case 502:
       var group=get_group(ex_pat);
       
       var
        split_ex=
         function(yes,no,param)
          {if(param)
            {var cl=param[1];
             
             var match$1=cl[1];
             
             if(match$1)
              {var rem=param[2];
               
               if(group(match$1[1])&&up_ok(cl,no))
                {return split_ex(/* :: */[0,cl,yes],no,rem);}
               else
                {return split_ex(yes,/* :: */[0,cl,no],rem);}
               }
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"bytecomp/matching.ml",1041,15]];
               }
             }
           else
            {var yes$1=List["rev"](yes);
             
             var no$1=List["rev"](no);
             
             if(no$1)
              {var rem$1=no$1[2];
               
               var cl$1=no$1[1];
               
               if(yes$1)
                {var
                  match$2=
                   split_noex(/* :: */[0,cl$1,/* [] */0],/* [] */0,rem$1);
                 
                 var match$3=match$2[1];
                 
                 var idef=Lambda["next_raise_count"](/* () */0);
                 
                 var def$1=cons_default(match$3[2],idef,match$3[3]);
                 
                 return /* tuple */[0,
                         /* record */[0,
                          /* Pm */[2,/* record */[0,yes$1,args,def$1]],
                          as_matrix(yes$1),
                          def$1],
                         /* :: */[0,/* tuple */[0,idef,match$3[1]],match$2[2]]];
                 }
               else
                {return split_noex(/* :: */[0,cl$1,/* [] */0],/* [] */0,rem$1);
                 }
               }
             else
              {return /* tuple */[0,
                       /* record */[0,
                        /* Pm */[2,/* record */[0,yes$1,args,def]],
                        as_matrix(yes$1),
                        def],
                       k];
               }
             }
           };
       
       var
        split_noex=
         function(yes,no,param)
          {if(param)
            {var cl=param[1];
             
             var ps=cl[1];
             
             var exit$1;
             
             if(param[2])
              {exit$1=500;}
             else
              {if(List["for_all"](group_var,ps)&&yes!==/* [] */0)
                {return split_noex(yes,/* :: */[0,cl,no],/* [] */0);}
               else
                {exit$1=500;}
               }
             
             switch(exit$1)
              {case 500:
                if(ps)
                 {var rem=param[2];
                  
                  if(!group(ps[1])&&up_ok(cl,no))
                   {return split_noex(/* :: */[0,cl,yes],no,rem);}
                  else
                   {return split_noex(yes,/* :: */[0,cl,no],rem);}
                  }
                else
                 {throw [0,
                         CamlPrimitive["caml_global_data"]["Assert_failure"],
                         [0,"bytecomp/matching.ml",1067,15]];
                  }
                
               }
             }
           else
            {var yes$1=List["rev"](yes);
             
             var no$1=List["rev"](no);
             
             if(no$1)
              {var
                match$1=
                 split_ex(/* :: */[0,no$1[1],/* [] */0],/* [] */0,no$1[2]);
               
               var match$2=match$1[1];
               
               var idef=Lambda["next_raise_count"](/* () */0);
               
               return precompile_var
                       (args,
                        yes$1,
                        cons_default(match$2[2],idef,match$2[3]),
                        /* :: */[0,/* tuple */[0,idef,match$2[1]],match$1[2]]);
               }
             else
              {return precompile_var(args,yes$1,def,k);}
             }
           };
       
       var exit$1;
       
       if(cls)
        {var cl=cls[1];
         
         var match$1=cl[1];
         
         if(match$1)
          {var rem=cls[2];
           
           if(group(match$1[1]))
            {return split_ex(/* :: */[0,cl,/* [] */0],/* [] */0,rem);}
           else
            {return split_noex(/* :: */[0,cl,/* [] */0],/* [] */0,rem);}
           }
         else
          {exit$1=487;}
         }
       else
        {exit$1=487;}
       
       switch(exit$1)
        {case 487:
          throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"bytecomp/matching.ml",1073,14]];
          
         }
       
      }
    };

var
 precompile_var=
  function(args,cls,def,k)
   {var exit;
    
    if(args)
     {var match=args[2];
      
      if(match)
       {var arg=match[1];
        
        var av=arg[1];
        
        switch(av[0])
         {case 0:
           var exit$1;
           
           if(cls)
            {if(cls[2])
              {exit$1=511;}
             else
              {return dont_precompile_var(args,cls,def,k);}
             }
           else
            {exit$1=511;}
           
           switch(exit$1)
            {case 511:
              var
               var_cls=
                List["map"]
                 (function(param)
                   {var ps=param[1];
                    
                    if(ps)
                     {return /* tuple */[0,ps[2],param[2]];}
                    else
                     {throw [0,
                             CamlPrimitive["caml_global_data"]["Assert_failure"],
                             [0,"bytecomp/matching.ml",1086,41]];
                      }
                    },
                  cls);
              
              var var_def=make_default(function(param,rem){return rem;},def);
              
              var
               match$1=
                split_or
                 (/* Some */[0,av[1]],
                  var_cls,
                  /* :: */[0,arg,match[2]],
                  var_def);
              
              var nexts=match$1[2];
              
              var match$2=match$1[1];
              
              if(nexts)
               {var
                 rfirst=
                  /* record */[0,
                   /* PmVar */[1,/* record */[0,match$2[1],av]],
                   add_omega_column(match$2[2]),
                   rebuild_default(nexts,def)];
                
                var rnexts=rebuild_nexts(av,nexts,k);
                
                return /* tuple */[0,rfirst,rnexts];
                }
              else
               {return dont_precompile_var(args,cls,def,k);}
              
             }
           
          default:exit=512;}
        }
      else
       {exit=512;}
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",1076,9]];
      }
    
    switch(exit){case 512:return dont_precompile_var(args,cls,def,k);}
    };

var
 dont_precompile_var=
  function(args,cls,def,k)
   {return /* tuple */[0,
            /* record */[0,
             /* Pm */[2,/* record */[0,cls,args,def]],
             as_matrix(cls),
             def],
            k];
    };

var
 is_exc=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return is_exc(match[1]);
        case 4:
         switch(match[2][6][0])
          {case 0:exit=513;case 1:exit=513;case 2:return /* true */1;}
         
        case 8:return is_exc(match[1])||is_exc(match[2]);
        default:exit=513;}}
    
    switch(exit){case 513:return /* false */0;}
    };

var
 precompile_or=
  function(argo,cls,ors,args,def,k)
   {if(ors)
     {var
       do_cases=
        function(param)
         {if(param)
           {var cl=param[1];
            
            var match=cl[1];
            
            var exit;
            
            if(match)
             {var orp=match[1];
              
              var $js=orp[1];
              if(typeof $js==="number")
               {switch($js){}}
              else
               {switch($js[0])
                 {case 8:
                   var rem=param[2];
                   
                   var patl=match[2];
                   
                   var do_opt=!is_exc(orp);
                   
                   if(do_opt)
                    {var match$1=get_equiv(orp,rem);}
                   else
                    {var match$1=/* tuple */[0,/* [] */0,rem];}
                   
                   if(args)
                    {var $js$1=args[2];}
                   else
                    {throw [0,
                            CamlPrimitive["caml_global_data"]["Assert_failure"],
                            [0,"bytecomp/matching.ml",1135,55]];
                     }
                   var
                    orpm=
                     /* record */[0,
                      /* :: */[0,
                       /* tuple */[0,patl,cl[2]],
                       List["map"]
                        (function(param$1)
                          {var match$2=param$1[1];
                           
                           if(match$2)
                            {return /* tuple */[0,match$2[2],param$1[2]];}
                           else
                            {throw [0,
                                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                                    [0,"bytecomp/matching.ml",1133,25]];
                             }
                           },
                         match$1[1])],
                      $js$1,
                      default_compat(do_opt?orp:Parmatch["omega"],def)];
                   
                   var
                    vars=
                     Lambda["IdentSet"][20]
                      (Lambda["IdentSet"][8]
                        (extract_vars(Lambda["IdentSet"][1],orp),
                         pm_free_variables(orpm)));
                   
                   var or_num=Lambda["next_raise_count"](/* () */0);
                   
                   var new_patl=Parmatch["omega_list"](patl);
                   
                   var
                    mk_new_action=
                     function(vs)
                      {return /* Lstaticraise */[9,
                               or_num,
                               List["map"](function(v){return /* Lvar */[0,v];},vs)];
                       };
                   
                   var match$2=do_cases(match$1[2]);
                   
                   if(do_opt)
                    {var mat=/* :: */[0,/* :: */[0,orp,/* [] */0],/* [] */0];}
                   else
                    {var
                      mat=
                       /* :: */[0,
                        /* :: */[0,Parmatch["omega"],/* [] */0],
                        /* [] */0];
                     }
                   
                   return /* tuple */[0,
                           do_opt&&match$2[1],
                           explode_or_pat
                            (argo,new_patl,mk_new_action,match$2[2],vars,/* [] */0,orp),
                           /* :: */[0,/* tuple */[0,mat,or_num,vars,orpm],match$2[3]]];
                   
                  default:exit=529;}}
              }
            else
             {exit=529;}
            
            switch(exit)
             {case 529:
               var match$3=do_cases(param[2]);
               
               return /* tuple */[0,
                       match$3[1],
                       /* :: */[0,cl,match$3[2]],
                       match$3[3]];
               
              }
            }
          else
           {return [/* tuple */0,/* true */1,/* [] */0,/* [] */0];}
          };
      
      var match=do_cases(ors);
      
      var
       matrix=
        (match[1]?as_matrix:as_matrix_omega)(Pervasives["@"](cls,ors));
      
      var body=/* record */[0,Pervasives["@"](cls,match[2]),args,def];
      
      return /* tuple */[0,
              /* record */[0,
               /* PmOr */[0,/* record */[0,body,match[3],matrix]],
               matrix,
               def],
              k];
      }
    else
     {return split_constr(cls,args,def,k);}
    };

var
 split_precompile=
  function(argo,pm)
   {var match=split_or(argo,pm[1],pm[2],pm[3]);
    
    var nexts=match[2];
    
    var next=match[1][1];
    
    var exit;
    
    var $js;
    switch(next[0]){case 0:$js=/* true */1;case 1:exit=462;case 2:exit=462;}
    
    var $js$1;
    switch(exit){case 462:$js$1=/* false */0;}
    if(dbg&&(nexts!==/* [] */0||$js$1))
     {Pervasives["prerr_endline"]("** SPLIT **"),
      pretty_pm(pm),
      pretty_precompiled_res(next,nexts)}
    else
     {}
    
    return /* tuple */[0,next,nexts];
    };

var
 add_line=
  function(patl_action,pm){pm[1]=/* :: */[0,patl_action,pm[1]];return pm;};

var
 add=
  function(make_matching_fun,division,eq_key,key,patl_action,args)
   {try
     {var
       match=
        List["find"](function(param){return eq_key(key,param[1]);},division);
      
      var cell=match[2];
      
      cell[1][1]=/* :: */[0,patl_action,cell[1][1]];
      return division;
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var cell$1=make_matching_fun(args);
        
        cell$1[1][1]=/* :: */[0,patl_action,/* [] */0];
        return /* :: */[0,/* tuple */[0,key,cell$1],division];
        }
      else
       {throw exn;}
      }
    };

var
 divide=
  function(make,eq_key,get_key,get_args,ctx,pm)
   {var
     divide_rec=
      function(param)
       {var exit;
        
        if(param)
         {var match=param[1];
          
          var match$1=match[1];
          
          if(match$1)
           {var p=match$1[1];
            
            var this_match=divide_rec(param[2]);
            
            return add
                    (make(p,pm[3],ctx),
                     this_match,
                     eq_key,
                     get_key(p),
                     /* tuple */[0,get_args(p,match$1[2]),match[2]],
                     pm[2]);
            }
          else
           {exit=455;}
          }
        else
         {exit=455;}
        
        switch(exit){case 455:return /* [] */0;}
        };
    
    return divide_rec(pm[1]);
    };

var
 divide_line=
  function(make_ctx,make,get_args,pat,ctx,pm)
   {var
     divide_rec=
      function(param)
       {var exit;
        
        if(param)
         {var match=param[1];
          
          var match$1=match[1];
          
          if(match$1)
           {var this_match=divide_rec(param[2]);
            
            return add_line
                    (/* tuple */[0,get_args(match$1[1],match$1[2]),match[2]],
                     this_match);
            }
          else
           {exit=452;}
          }
        else
         {exit=452;}
        
        switch(exit){case 452:return make(pm[3],pm[2]);}
        };
    
    return /* record */[0,divide_rec(pm[1]),make_ctx(ctx),pat];
    };

var
 matcher_const=
  function(cst,p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:return rem;}}
    else
     {switch(match[0])
       {case 2:
         if(Parmatch["const_compare"](match[1],cst)===0)
          {return rem;}
         else
          {exit=450;}
         
        case 8:
         try
          {return matcher_const(cst,match[1],rem);}
         catch(exn)
          {if(exn===NoMatch)
            {return matcher_const(cst,match[2],rem);}
           else
            {throw exn;}
           }
         
        default:exit=450;}}
    
    switch(exit){case 450:throw NoMatch;}
    };

var
 get_key_constant=
  function(caller,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 2:return match[1];default:exit=447;}}
    
    switch(exit)
     {case 447:
       Pervasives["prerr_endline"](Pervasives["^"]("BAD: ",caller));
       Parmatch["pretty_pat"](p);
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",1258,6]];
       
      }
    };

var get_args_constant=function(param,rem){return rem;};

var
 make_constant_matching=
  function(p,def,ctx,param)
   {if(param)
     {var def$1=make_default(matcher_const(get_key_constant("make",p)),def);
      
      var ctx$1=filter_ctx(p,ctx);
      
      return /* record */[0,
              /* record */[0,/* [] */0,param[2],def$1],
              ctx$1,
              Parmatch["normalize_pat"](p)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_constant_matching");}
    };

var
 divide_constant=
  function(ctx,m)
   {return divide
            (make_constant_matching,
             function(c,d){return Parmatch["const_compare"](c,d)===0;},
             get_key_constant("divide"),
             get_args_constant,
             ctx,
             m);
    };

var
 make_field_args=
  function(binding_kind,arg,first_pos,last_pos,argl)
   {var
     make_args=
      function(pos)
       {if(pos>last_pos)
         {return argl;}
        else
         {return /* :: */[0,
                  /* tuple */[0,
                   /* Lprim */[6,/* Pfield */[6,pos],/* :: */[0,arg,/* [] */0]],
                   binding_kind],
                  make_args(pos+1)];
          }
        };
    
    return make_args(first_pos);
    };

var
 get_key_constr=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 4:return match[2][6];default:exit=439;}}
    
    switch(exit)
     {case 439:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",1296,9]];
       
      }
    };

var
 get_args_constr=
  function(p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:return Pervasives["@"](match[3],rem);default:exit=437;}}
    
    switch(exit)
     {case 437:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",1300,7]];
       
      }
    };

var
 matcher_constr=
  function(cstr)
   {var match=cstr[5];
    
    if(match!==0)
     {if(match!==1)
       {return function(q,rem)
         {var match$1=q[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1)
             {case 0:return Pervasives["@"](Parmatch["omegas"](cstr[5]),rem);}}
          else
           {switch(match$1[0])
             {case 4:
               if(CamlPrimitive["caml_equal"](cstr[6],match$1[2][6]))
                {return Pervasives["@"](match$1[3],rem);}
               else
                {exit=434;}
               
              case 8:throw OrPat;
              default:exit=434;}}
          
          switch(exit){case 434:throw NoMatch;}
          };
        }
      else
       {var
         matcher_rec=
          function(q,rem)
           {var match$1=q[1];
            
            var exit;
            
            if(typeof match$1==="number")
             {switch(match$1)
               {case 0:return /* :: */[0,Parmatch["omega"],rem];}}
            else
             {switch(match$1[0])
               {case 4:
                 var match$2=match$1[3];
                 
                 if(match$2)
                  {if(match$2[2])
                    {exit=433;}
                   else
                    {if(CamlPrimitive["caml_equal"](cstr[6],match$1[2][6]))
                      {return /* :: */[0,match$2[1],rem];}
                     else
                      {exit=433;}
                     }
                   }
                 else
                  {exit=433;}
                 
                case 8:
                 try
                  {var r1=/* Some */[0,matcher_rec(match$1[1],rem)];}
                 catch(exn)
                  {if(exn===NoMatch){var r1=/* None */0;}else{throw exn;}}
                 
                 try
                  {var r2=/* Some */[0,matcher_rec(match$1[2],rem)];}
                 catch(exn$1)
                  {if(exn$1===NoMatch){var r2=/* None */0;}else{throw exn$1;}}
                 
                 var exit$1;
                 
                 if(r1)
                  {var r1$1=r1[1];
                   
                   if(r2)
                    {if(r1$1)
                      {var match$3=r2[1];
                       
                       if(match$3)
                        {var a1=r1$1[1];
                         
                         return /* :: */[0,
                                 /* record */[0,
                                  /* Tpat_or */[8,a1,match$3[1],/* None */0],
                                  Location["none"],
                                  a1[3],
                                  a1[4],
                                  a1[5],
                                  a1[6]],
                                 rem];
                         }
                       else
                        {exit$1=427;}
                       }
                     else
                      {exit$1=427;}
                     }
                   else
                    {return r1$1;}
                   }
                 else
                  {if(r2){return r2[1];}else{throw NoMatch;}}
                 
                 switch(exit$1)
                  {case 427:
                    throw [0,
                           CamlPrimitive["caml_global_data"]["Assert_failure"],
                           [0,"bytecomp/matching.ml",1331,18]];
                    
                   }
                 
                default:exit=433;}}
            
            switch(exit){case 433:throw NoMatch;}
            };
        
        return matcher_rec;
        }
      }
    else
     {var
       matcher_rec$1=
        function(q,rem)
         {var match$1=q[1];
          
          var exit;
          
          if(typeof match$1==="number")
           {switch(match$1){case 0:return rem;}}
          else
           {switch(match$1[0])
             {case 4:
               if(match$1[3])
                {exit=426;}
               else
                {if(CamlPrimitive["caml_equal"](cstr[6],match$1[2][6]))
                  {return rem;}
                 else
                  {exit=426;}
                 }
               
              case 8:
               try
                {return matcher_rec$1(match$1[1],rem);}
               catch(exn)
                {if(exn===NoMatch)
                  {return matcher_rec$1(match$1[2],rem);}
                 else
                  {throw exn;}
                 }
               
              default:exit=426;}}
          
          switch(exit){case 426:throw NoMatch;}
          };
      
      return matcher_rec$1;
      }
    };

var
 make_constr_matching=
  function(p,def,ctx,param)
   {if(param)
     {var argl=param[2];
      
      var arg=param[1][1];
      
      var cstr=pat_as_constr(p);
      
      var match=cstr[6];
      
      var exit;
      
      switch(match[0])
       {case 0:exit=421;
        case 1:exit=421;
        case 2:var newargs=make_field_args(/* Alias */1,arg,1,cstr[5],argl);
        }
      
      switch(exit)
       {case 421:
         var newargs=make_field_args(/* Alias */1,arg,0,cstr[5]-1,argl);
        }
      
      return /* record */[0,
              /* record */[0,
               /* [] */0,
               newargs,
               make_default(matcher_constr(cstr),def)],
              filter_ctx(p,ctx),
              Parmatch["normalize_pat"](p)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_constr_matching");}
    };

var
 divide_constructor=
  function(ctx,pm)
   {return divide
            (make_constr_matching,
             function(prim,prim$1)
              {return CamlPrimitive["caml_equal"](prim,prim$1);},
             get_key_constr,
             get_args_constr,
             ctx,
             pm);
    };

var
 matcher_variant_const=
  function(lab,p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:return rem;}}
    else
     {switch(match[0])
       {case 5:
         if(CamlPrimitive["caml_string_equal"](match[1],lab))
          {return rem;}
         else
          {exit=419;}
         
        case 8:
         try
          {return matcher_variant_const(lab,match[1],rem);}
         catch(exn)
          {if(exn===NoMatch)
            {return matcher_variant_const(lab,match[2],rem);}
           else
            {throw exn;}
           }
         
        default:exit=419;}}
    
    switch(exit){case 419:throw NoMatch;}
    };

var
 make_variant_matching_constant=
  function(p,lab,def,ctx,param)
   {if(param)
     {var def$1=make_default(matcher_variant_const(lab),def);
      
      var ctx$1=filter_ctx(p,ctx);
      
      return /* record */[0,
              /* record */[0,/* [] */0,param[2],def$1],
              ctx$1,
              Parmatch["normalize_pat"](p)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_variant_matching_constant");}
    };

var
 matcher_variant_nonconst=
  function(lab,p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:return /* :: */[0,Parmatch["omega"],rem];}}
    else
     {switch(match[0])
       {case 5:
         var match$1=match[2];
         
         if(match$1)
          {if(CamlPrimitive["caml_string_equal"](match[1],lab))
            {return /* :: */[0,match$1[1],rem];}
           else
            {exit=413;}
           }
         else
          {exit=413;}
         
        case 8:throw OrPat;
        default:exit=413;}}
    
    switch(exit){case 413:throw NoMatch;}
    };

var
 make_variant_matching_nonconst=
  function(p,lab,def,ctx,param)
   {if(param)
     {var def$1=make_default(matcher_variant_nonconst(lab),def);
      
      var ctx$1=filter_ctx(p,ctx);
      
      return /* record */[0,
              /* record */[0,
               /* [] */0,
               /* :: */[0,
                /* tuple */[0,
                 /* Lprim */[6,
                  [/* Pfield */6,1],
                  /* :: */[0,param[1][1],/* [] */0]],
                 /* Alias */1],
                param[2]],
               def$1],
              ctx$1,
              Parmatch["normalize_pat"](p)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_variant_matching_nonconst");}
    };

var
 get_key_variant=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 5:
         var lab=match[1];
         
         if(match[2])
          {return /* Cstr_block */[1,Btype["hash_variant"](lab)];}
         else
          {return /* Cstr_constant */[0,Btype["hash_variant"](lab)];}
         
        default:exit=408;}}
    
    switch(exit)
     {case 408:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",1414,8]];
       
      }
    };

var
 divide_variant=
  function(row,ctx,param)
   {var cl=param[1];
    
    var def=param[3];
    
    var al=param[2];
    
    var row$1=Btype["row_repr"](row);
    
    var
     divide$1=
      function(cl)
       {var exit;
        
        if(cl)
         {var match=cl[1];
          
          var match$1=match[1];
          
          if(match$1)
           {var p=match$1[1];
            
            var match$2=p[1];
            
            if(typeof match$2==="number")
             {switch(match$2){}}
            else
             {switch(match$2[0])
               {case 5:
                 var pato=match$2[2];
                 
                 var lab=match$2[1];
                 
                 var action=match[2];
                 
                 var patl=match$1[2];
                 
                 var variants=divide$1(cl[2]);
                 
                 var $js;
                 try
                  {$js=
                   Btype["row_field_repr"](List["assoc"](lab,row$1[1]))===
                   /* Rabsent */0;
                   }
                 catch(exn)
                  {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                    {$js=/* true */1;}
                   else
                    {throw exn;}
                   }
                 if($js)
                  {return variants;}
                 else
                  {var tag=Btype["hash_variant"](lab);
                   
                   if(pato)
                    {return add
                             (make_variant_matching_nonconst(p,lab,def,ctx),
                              variants,
                              function(prim,prim$1)
                               {return CamlPrimitive["caml_equal"](prim,prim$1);},
                              /* Cstr_block */[1,tag],
                              /* tuple */[0,/* :: */[0,pato[1],patl],action],
                              al);
                     }
                   else
                    {return add
                             (make_variant_matching_constant(p,lab,def,ctx),
                              variants,
                              function(prim,prim$1)
                               {return CamlPrimitive["caml_equal"](prim,prim$1);},
                              /* Cstr_constant */[0,tag],
                              /* tuple */[0,patl,action],
                              al);
                     }
                   }
                 
                default:exit=405;}}
            }
          else
           {exit=405;}
          }
        else
         {exit=405;}
        
        switch(exit){case 405:return /* [] */0;}
        };
    
    return divide$1(cl);
    };

var get_args_var=function(param,rem){return rem;};

var
 make_var_matching=
  function(def,param)
   {if(param)
     {return /* record */[0,/* [] */0,param[2],make_default(get_args_var,def)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_var_matching");}
    };

var
 divide_var=
  function(ctx,pm)
   {return divide_line
            (ctx_lshift,
             make_var_matching,
             get_args_var,
             Parmatch["omega"],
             ctx,
             pm);
    };

var
 get_arg_lazy=
  function(p,rem)
   {var match=p[1];
    
    if(typeof match==="number")
     {switch(match){case 0:return /* :: */[0,Parmatch["omega"],rem];}}
    else
     {switch(match[0])
       {case 9:return /* :: */[0,match[1],rem];
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"bytecomp/matching.ml",1463,8]];
         }}
    };

var
 matcher_lazy=
  function(p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:return get_arg_lazy(Parmatch["omega"],rem);
        case 8:throw OrPat;
        default:exit=395;}}
    
    switch(exit){case 395:return get_arg_lazy(p,rem);}
    };

var
 prim_obj_tag=
  [/* record */0,"caml_obj_tag",1,/* false */0,"",/* false */0];

var
 get_mod_field=
  function(modname,field)
   {return [246,
            function(param)
             {try
               {var mod_ident=Ident["create_persistent"](modname);
                
                var
                 env=
                  Env["open_pers_signature"]
                   (modname,Env["initial_safe_string"]);
                
                try
                 {var match=Env["lookup_value"](/* Lident */[0,field],env);
                  
                  var match$1=match[1];
                  
                  var exit;
                  
                  switch(match$1[0])
                   {case 0:exit=389;case 1:var p=match$1[3];case 2:exit=389;}
                  
                  switch(exit)
                   {case 389:
                     var
                      p=
                       Misc["fatal_error"]
                        (Pervasives["^"]
                          ("Primitive ",
                           Pervasives["^"]
                            (modname,
                             Pervasives["^"](".",Pervasives["^"](field," not found.")))));
                     
                    }
                  }
                catch(exn)
                 {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                   {var
                     p=
                      Misc["fatal_error"]
                       (Pervasives["^"]
                         ("Primitive ",
                          Pervasives["^"]
                           (modname,
                            Pervasives["^"](".",Pervasives["^"](field," not found.")))));
                    }
                  else
                   {throw exn;}
                  }
                
                return /* Lprim */[6,
                        /* Pfield */[6,p],
                        /* :: */[0,
                         /* Lprim */[6,/* Pgetglobal */[3,mod_ident],/* [] */0],
                         /* [] */0]];
                }
              catch(exn$1)
               {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                 {return Misc["fatal_error"]
                          (Pervasives["^"]
                            ("Module ",Pervasives["^"](modname," unavailable.")));
                  }
                else
                 {throw exn$1;}
                }
              }];
    };

var
 code_force_lazy_block=
  get_mod_field("CamlinternalLazy","force_lazy_block");

var
 inline_lazy_force_cond=
  function(arg,loc)
   {var idarg=Ident["create"]("lzarg");
    
    var varg=/* Lvar */[0,idarg];
    
    var tag=Ident["create"]("tag");
    
    var tag$1=CamlPrimitive["caml_obj_tag"](code_force_lazy_block);
    
    if(tag$1===250)
     {var force_fun=code_force_lazy_block[1];}
    else
     {if(tag$1===246)
       {var
         force_fun=
          CamlinternalLazy["force_lazy_block"](code_force_lazy_block);
        }
      else
       {var force_fun=code_force_lazy_block;}
      }
    
    return /* Llet */[4,
            /* Strict */0,
            idarg,
            arg,
            /* Llet */[4,
             /* Alias */1,
             tag,
             /* Lprim */[6,
              /* Pccall */[11,prim_obj_tag],
              /* :: */[0,varg,/* [] */0]],
             /* Lifthenelse */[12,
              /* Lprim */[6,
               [/* Pintcomp */13,/* Ceq */0],
               /* :: */[0,
                /* Lvar */[0,tag],
                /* :: */[0,
                 /* Lconst */[1,
                  /* Const_base */[0,/* Const_int */[0,Obj["forward_tag"]]]],
                 /* [] */0]]],
              /* Lprim */[6,[/* Pfield */6,0],/* :: */[0,varg,/* [] */0]],
              /* Lifthenelse */[12,
               /* Lprim */[6,
                [/* Pintcomp */13,/* Ceq */0],
                /* :: */[0,
                 /* Lvar */[0,tag],
                 /* :: */[0,
                  /* Lconst */[1,
                   /* Const_base */[0,/* Const_int */[0,Obj["lazy_tag"]]]],
                  /* [] */0]]],
               /* Lapply */[2,force_fun,/* :: */[0,varg,/* [] */0],loc],
               varg]]]];
    };

var
 inline_lazy_force_switch=
  function(arg,loc)
   {var idarg=Ident["create"]("lzarg");
    
    var varg=/* Lvar */[0,idarg];
    
    var tag=CamlPrimitive["caml_obj_tag"](code_force_lazy_block);
    
    if(tag===250)
     {var force_fun=code_force_lazy_block[1];}
    else
     {if(tag===246)
       {var
         force_fun=
          CamlinternalLazy["force_lazy_block"](code_force_lazy_block);
        }
      else
       {var force_fun=code_force_lazy_block;}
      }
    
    return /* Llet */[4,
            /* Strict */0,
            idarg,
            arg,
            /* Lifthenelse */[12,
             /* Lprim */[6,/* Pisint */33,/* :: */[0,varg,/* [] */0]],
             varg,
             /* Lswitch */[7,
              varg,
              /* record */[0,
               0,
               /* [] */0,
               256,
               /* :: */[0,
                /* tuple */[0,
                 Obj["forward_tag"],
                 /* Lprim */[6,[/* Pfield */6,0],/* :: */[0,varg,/* [] */0]]],
                /* :: */[0,
                 /* tuple */[0,
                  Obj["lazy_tag"],
                  /* Lapply */[2,force_fun,/* :: */[0,varg,/* [] */0],loc]],
                 /* [] */0]],
               /* Some */[0,varg]]]]];
    };

var
 inline_lazy_force=
  function(arg,loc)
   {if(Clflags["native_code"][1])
     {return inline_lazy_force_switch(arg,loc);}
    else
     {return inline_lazy_force_cond(arg,loc);}
    };

var
 make_lazy_matching=
  function(def,param)
   {if(param)
     {return /* record */[0,
              /* [] */0,
              /* :: */[0,
               /* tuple */[0,
                inline_lazy_force(param[1][1],Location["none"]),
                /* Strict */0],
               param[2]],
              make_default(matcher_lazy,def)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_lazy_matching");}
    };

var
 divide_lazy=
  function(p,ctx,pm)
   {return divide_line(filter_ctx(p),make_lazy_matching,get_arg_lazy,p,ctx,pm);
    };

var
 get_args_tuple=
  function(arity,p,rem)
   {var match=p[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:return Pervasives["@"](Parmatch["omegas"](arity),rem);}}
    else
     {switch(match[0])
       {case 3:return Pervasives["@"](match[1],rem);
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"bytecomp/matching.ml",1579,8]];
         }}
    };

var
 matcher_tuple=
  function(arity,p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:return get_args_tuple(arity,Parmatch["omega"],rem);
        case 8:throw OrPat;
        default:exit=370;}}
    
    switch(exit){case 370:return get_args_tuple(arity,p,rem);}
    };

var
 make_tuple_matching=
  function(arity,def,param)
   {if(param)
     {var argl=param[2];
      
      var arg=param[1][1];
      
      var
       make_args=
        function(pos)
         {if(pos>=arity)
           {return argl;}
          else
           {return /* :: */[0,
                    /* tuple */[0,
                     /* Lprim */[6,/* Pfield */[6,pos],/* :: */[0,arg,/* [] */0]],
                     /* Alias */1],
                    make_args(pos+1)];
            }
          };
      
      return /* record */[0,
              /* [] */0,
              make_args(0),
              make_default(matcher_tuple(arity),def)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_tuple_matching");}
    };

var
 divide_tuple=
  function(arity,p,ctx,pm)
   {return divide_line
            (filter_ctx(p),
             make_tuple_matching(arity),
             get_args_tuple(arity),
             p,
             ctx,
             pm);
    };

var
 record_matching_line=
  function(num_fields,lbl_pat_list)
   {var patv=CamlPrimitive["caml_make_vect"](num_fields,Parmatch["omega"]);
    
    List["iter"]
     (function(param){return patv[param[2][5]+1]=param[3],0;},lbl_pat_list);
    return $$Array["to_list"](patv);
    };

var
 get_args_record=
  function(num_fields,p,rem)
   {var match=p[1];
    
    if(typeof match==="number")
     {switch(match)
       {case 0:
         return Pervasives["@"]
                 (record_matching_line(num_fields,/* [] */0),rem);
         
        }}
    else
     {switch(match[0])
       {case 6:
         return Pervasives["@"](record_matching_line(num_fields,match[1]),rem);
         
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"bytecomp/matching.ml",1616,7]];
         }}
    };

var
 matcher_record=
  function(num_fields,p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:return get_args_record(num_fields,Parmatch["omega"],rem);
        case 8:throw OrPat;
        default:exit=362;}}
    
    switch(exit){case 362:return get_args_record(num_fields,p,rem);}
    };

var
 make_record_matching=
  function(all_labels,def,param)
   {if(param)
     {var argl=param[2];
      
      var arg=param[1][1];
      
      var
       make_args=
        function(pos)
         {if(pos>=/* -1 for tag */all_labels["length"]-1)
           {return argl;}
          else
           {var lbl=all_labels[pos+1];
            
            var match=lbl[7];
            
            if(match!==0)
             {var access=/* Pfloatfield */[8,lbl[5]];}
            else
             {var access=/* Pfield */[6,lbl[5]];}
            
            var match$1=lbl[4];
            
            if(match$1!==0)
             {var str=/* StrictOpt */2;}
            else
             {var str=/* Alias */1;}
            
            return /* :: */[0,
                    /* tuple */[0,
                     /* Lprim */[6,access,/* :: */[0,arg,/* [] */0]],
                     str],
                    make_args(pos+1)];
            }
          };
      
      var nfields=/* -1 for tag */all_labels["length"]-1;
      
      var def$1=make_default(matcher_record(nfields),def);
      
      return /* record */[0,/* [] */0,make_args(0),def$1];
      }
    else
     {return Misc["fatal_error"]("Matching.make_record_matching");}
    };

var
 divide_record=
  function(all_labels,p,ctx,pm)
   {var get_args=get_args_record(/* -1 for tag */all_labels["length"]-1);
    
    return divide_line
            (filter_ctx(p),make_record_matching(all_labels),get_args,p,ctx,pm);
    };

var
 get_key_array=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 7:return List["length"](match[1]);default:exit=352;}}
    
    switch(exit)
     {case 352:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",1656,9]];
       
      }
    };

var
 get_args_array=
  function(p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 7:return Pervasives["@"](match[1],rem);default:exit=350;}}
    
    switch(exit)
     {case 350:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",1660,7]];
       
      }
    };

var
 matcher_array=
  function(len,p,rem)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match)
       {case 0:return Pervasives["@"](Parmatch["omegas"](len),rem);}}
    else
     {switch(match[0])
       {case 7:
         var args=match[1];
         
         if(List["length"](args)===len)
          {return Pervasives["@"](args,rem);}
         else
          {exit=348;}
         
        case 8:throw OrPat;
        default:exit=348;}}
    
    switch(exit){case 348:throw NoMatch;}
    };

var
 make_array_matching=
  function(kind,p,def,ctx,param)
   {if(param)
     {var argl=param[2];
      
      var arg=param[1][1];
      
      var len=get_key_array(p);
      
      var
       make_args=
        function(pos)
         {if(pos>=len)
           {return argl;}
          else
           {return /* :: */[0,
                    /* tuple */[0,
                     /* Lprim */[6,
                      /* Parrayrefu */[19,kind],
                      /* :: */[0,
                       arg,
                       /* :: */[0,
                        /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,pos]]],
                        /* [] */0]]],
                     /* StrictOpt */2],
                    make_args(pos+1)];
            }
          };
      
      var def$1=make_default(matcher_array(len),def);
      
      var ctx$1=filter_ctx(p,ctx);
      
      return /* record */[0,
              /* record */[0,/* [] */0,make_args(0),def$1],
              ctx$1,
              Parmatch["normalize_pat"](p)];
      }
    else
     {return Misc["fatal_error"]("Matching.make_array_matching");}
    };

var
 divide_array=
  function(kind,ctx,pm)
   {return divide
            (make_array_matching(kind),
             function(prim,prim$1)
              {return CamlPrimitive["caml_equal"](prim,prim$1);},
             get_key_array,
             get_args_array,
             ctx,
             pm);
    };

var strings_test_threshold=8;

var
 prim_string_notequal=
  [/* Pccall */11,
   [/* record */0,"caml_string_notequal",2,/* false */0,"",/* false */0]];

var
 prim_string_compare=
  [/* Pccall */11,
   [/* record */0,"caml_string_compare",2,/* false */0,"",/* false */0]];

var
 bind_sw=
  function(arg,k)
   {switch(arg[0])
     {case 0:return k(arg);
      default:
       var id=Ident["create"]("switch");
       
       return /* Llet */[4,/* Strict */0,id,arg,k(/* Lvar */[0,id])];
       }
    };

var
 make_string_test_sequence=
  function(arg,sw,d)
   {if(d)
     {var match=/* tuple */[0,d[1],sw];}
    else
     {if(sw)
       {var match=/* tuple */[0,sw[1][2],sw[2]];}
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/matching.ml",1729,14]];
        }
      }
    
    var sw$1=match[2];
    
    var d$1=match[1];
    
    return bind_sw
            (arg,
             function(arg)
              {return List["fold_right"]
                       (function(param,k)
                         {return /* Lifthenelse */[12,
                                  /* Lprim */[6,
                                   prim_string_notequal,
                                   /* :: */[0,
                                    arg,
                                    /* :: */[0,
                                     /* Lconst */[1,/* Const_immstring */[4,param[1]]],
                                     /* [] */0]]],
                                  k,
                                  param[2]];
                          },
                        sw$1,
                        d$1);
               });
    };

var
 split=
  function(k,xs)
   {if(xs)
     {var xs$1=xs[2];
      
      var x0=xs[1];
      
      if(k<=1)
       {return /* tuple */[0,/* [] */0,x0,xs$1];}
      else
       {var match=split(k-2,xs$1);
        
        return /* tuple */[0,/* :: */[0,x0,match[1]],match[2],match[3]];
        }
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",1744,8]];
      }
    };

var zero_lam=[/* Lconst */1,[/* Const_base */0,[/* Const_int */0,0]]];

var
 tree_way_test=
  function(arg,lt,eq,gt)
   {return /* Lifthenelse */[12,
            /* Lprim */[6,
             [/* Pintcomp */13,/* Clt */2],
             /* :: */[0,arg,/* :: */[0,zero_lam,/* [] */0]]],
            lt,
            /* Lifthenelse */[12,
             /* Lprim */[6,
              [/* Pintcomp */13,/* Clt */2],
              /* :: */[0,zero_lam,/* :: */[0,arg,/* [] */0]]],
             gt,
             eq]];
    };

var
 do_make_string_test_tree=
  function(arg,sw,delta,d)
   {var len=List["length"](sw);
    
    if(len<=strings_test_threshold+delta)
     {return make_string_test_sequence(arg,sw,d);}
    else
     {var match=split(len,sw);
      
      var gt=match[3];
      
      var match$1=match[2];
      
      var act=match$1[2];
      
      var lt=match[1];
      
      return bind_sw
              (/* Lprim */[6,
                prim_string_compare,
                /* :: */[0,
                 arg,
                 /* :: */[0,
                  /* Lconst */[1,/* Const_immstring */[4,match$1[1]]],
                  /* [] */0]]],
               function(r)
                {return tree_way_test
                         (r,
                          do_make_string_test_tree(arg,lt,delta,d),
                          act,
                          do_make_string_test_tree(arg,gt,delta,d));
                 });
      }
    };

var
 expand_stringswitch=
  function(arg,sw,d)
   {if(d)
     {var e=d[1];
      
      return bind_sw
              (arg,
               function(arg)
                {return make_catch
                         (e,
                          function(d)
                           {return do_make_string_test_tree(arg,sw,1,/* Some */[0,d]);});
                 });
      }
    else
     {return bind_sw
              (arg,
               function(arg)
                {return do_make_string_test_tree(arg,sw,0,/* None */0);});
      }
    };

var
 handle_shared=
  function(param)
   {var hs=[0,function(x){return x;}];
    
    var
     handle_shared$1=
      function(act)
       {switch(act[0])
         {case 0:
           var match=make_catch_delayed(act[1]);
           
           var h=match[2];
           
           var ohs=hs[1];
           
           hs[1]=function(act){return h(ohs(act));};
           return make_exit(match[1]);
           
          case 1:return act[1];
          }
        };
    
    return /* tuple */[0,hs,handle_shared$1];
    };

var
 share_actions_tree=
  function(sw,d)
   {var store=StoreExp[1](/* () */0);
    
    if(d){var d$1=/* Some */[0,store[4](d[1])];}else{var d$1=/* None */0;}
    
    var
     sw$1=
      List["map"]
       (function(param){return /* tuple */[0,param[1],store[3](param[2])];},
        sw);
    
    var acts=store[2](/* () */0);
    
    var match=handle_shared(/* () */0);
    
    var acts$1=$$Array["map"](match[2],acts);
    
    if(d$1){var d$2=/* Some */[0,acts$1[d$1[1]+1]];}else{var d$2=/* None */0;}
    
    var
     sw$2=
      List["map"]
       (function(param){return /* tuple */[0,param[1],acts$1[param[2]+1]];},
        sw$1);
    
    return /* tuple */[0,match[1][1],sw$2,d$2];
    };

var
 uniq_lambda_list=
  function(sw)
   {var exit;
    
    if(sw)
     {var sw1=sw[2];
      
      if(sw1)
       {var p1=sw[1];
        
        if(Parmatch["const_compare"](p1[1],sw1[1][1])===0)
         {return uniq_lambda_list(/* :: */[0,p1,sw1[2]]);}
        else
         {return /* :: */[0,p1,uniq_lambda_list(sw1)];}
        }
      else
       {exit=314;}
      }
    else
     {exit=314;}
    
    switch(exit){case 314:return sw;}
    };

var
 sort_lambda_list=
  function(l)
   {var
     l$1=
      List["stable_sort"]
       (function(param,param$1)
         {return Parmatch["const_compare"](param[1],param$1[1]);},
        l);
    
    return uniq_lambda_list(l$1);
    };

var
 cut=
  function(n,l)
   {if(n===0)
     {return /* tuple */[0,/* [] */0,l];}
    else
     {if(l)
       {var match=cut(n-1,l[2]);
        
        return /* tuple */[0,/* :: */[0,l[1],match[1]],match[2]];
        }
      else
       {throw [0,CamlPrimitive["caml_global_data"]["Invalid_argument"],"cut"];
        }
      }
    };

var
 do_tests_fail=
  function(fail,tst,arg,param)
   {if(param)
     {var match=param[1];
      
      return /* Lifthenelse */[12,
              /* Lprim */[6,
               tst,
               /* :: */[0,
                arg,
                /* :: */[0,
                 /* Lconst */[1,/* Const_base */[0,match[1]]],
                 /* [] */0]]],
              do_tests_fail(fail,tst,arg,param[2]),
              match[2]];
      }
    else
     {return fail;}
    };

var
 do_tests_nofail=
  function(tst,arg,param)
   {if(param)
     {var rem=param[2];
      
      var match=param[1];
      
      var act=match[2];
      
      if(rem)
       {return /* Lifthenelse */[12,
                /* Lprim */[6,
                 tst,
                 /* :: */[0,
                  arg,
                  /* :: */[0,
                   /* Lconst */[1,/* Const_base */[0,match[1]]],
                   /* [] */0]]],
                do_tests_nofail(tst,arg,rem),
                act];
        }
      else
       {return act;}
      }
    else
     {return Misc["fatal_error"]("Matching.do_tests_nofail");}
    };

var
 make_test_sequence=
  function(fail,tst,lt_tst,arg,const_lambda_list)
   {var const_lambda_list$1=sort_lambda_list(const_lambda_list);
    
    var match=share_actions_tree(const_lambda_list$1,fail);
    
    var fail$1=match[3];
    
    var
     make_test_sequence$1=
      function(const_lambda_list)
       {if(List["length"](const_lambda_list)>=4&&lt_tst!==/* Pignore */3)
         {return split_sequence(const_lambda_list);}
        else
         {if(fail$1)
           {return do_tests_fail(fail$1[1],tst,arg,const_lambda_list);}
          else
           {return do_tests_nofail(tst,arg,const_lambda_list);}
          }
        };
    
    var
     split_sequence=
      function(const_lambda_list)
       {var
         match$1=
          cut(List["length"](const_lambda_list)/2,const_lambda_list);
        
        var list2=match$1[2];
        
        return /* Lifthenelse */[12,
                /* Lprim */[6,
                 lt_tst,
                 /* :: */[0,
                  arg,
                  /* :: */[0,
                   /* Lconst */[1,/* Const_base */[0,List["hd"](list2)[1]]],
                   /* [] */0]]],
                make_test_sequence$1(match$1[1]),
                make_test_sequence$1(list2)];
        };
    
    return match[1](make_test_sequence$1(match[2]));
    };

var
 explode_inter=
  function(offset,i,j,act,k)
   {if(i<=j)
     {return explode_inter
              (offset,i,j-1,act,/* :: */[0,/* tuple */[0,j-offset,act],k]);
      }
    else
     {return k;}
    };

var
 max_vals=
  function(cases,acts)
   {var
     vals=
      CamlPrimitive["caml_make_vect"](/* -1 for tag */acts["length"]-1,0);
    
    for(var i=/* -1 for tag */cases["length"]-1-1;i>=0;i--)
     {var match=cases[i+1];
      
      var act=match[3];
      
      vals[act+1]=match[2]-match[1]+1+vals[act+1]}
    
    var max=0;
    
    for(var i$1=/* -1 for tag */vals["length"]-1-1;i$1>=0;i$1--)
     {if(vals[i$1+1]>=vals[max+1]){max=i$1;}else{}}
    
    if(vals[max+1]>1){return max;}else{return -1;}
    };

var
 as_int_list=
  function(cases,acts)
   {var $$default=max_vals(cases,acts);
    
    var match=cases[1];
    
    var min_key=match[1];
    
    var match$1=cases[/* -1 for tag */cases["length"]-1-1+1];
    
    var
     do_rec=
      function(i,k)
       {if(i>=0)
         {var match$2=cases[i+1];
          
          var act=match$2[3];
          
          if(act===$$default)
           {return do_rec(i-1,k);}
          else
           {return do_rec
                    (i-1,
                     explode_inter(min_key,match$2[1],match$2[2],acts[act+1],k));
            }
          }
        else
         {return k;}
        };
    
    return /* tuple */[0,
            min_key,
            match$1[2],
            do_rec(/* -1 for tag */cases["length"]-1-1,/* [] */0),
            $$default>=0?/* Some */[0,acts[$$default+1]]:/* None */0];
    };

var eqint=[/* Pintcomp */13,/* Ceq */0];

var neint=[/* Pintcomp */13,/* Cneq */1];

var leint=[/* Pintcomp */13,/* Cle */4];

var ltint=[/* Pintcomp */13,/* Clt */2];

var geint=[/* Pintcomp */13,/* Cge */5];

var gtint=[/* Pintcomp */13,/* Cgt */3];

var make_prim=function(p,args){return /* Lprim */[6,p,args];};

var
 make_offset=
  function(arg,n)
   {if(n!==0)
     {return /* Lprim */[6,/* Poffsetint */[14,n],/* :: */[0,arg,/* [] */0]];}
    else
     {return arg;}
    };

var
 bind=
  function(arg,body)
   {switch(arg[0])
     {case 0:var match=/* tuple */[0,arg[1],arg];
      default:
       var newvar=Ident["create"]("switcher");
       
       var match=/* tuple */[0,newvar,/* Lvar */[0,newvar]];
       }
    
    return Lambda["bind"](/* Alias */1,match[1],arg,body(match[2]));
    };

var
 make_const=
  function(i)
   {return /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,i]]];};

var
 make_isout=
  function(h,arg)
   {return /* Lprim */[6,
            /* Pisout */34,
            /* :: */[0,h,/* :: */[0,arg,/* [] */0]]];
    };

var
 make_isin=
  function(h,arg)
   {return /* Lprim */[6,/* Pnot */7,/* :: */[0,make_isout(h,arg),/* [] */0]];
    };

var
 make_if=
  function(cond,ifso,ifnot){return /* Lifthenelse */[12,cond,ifso,ifnot];};

var
 make_switch=
  function(arg,cases,acts)
   {var l=/* [] */0;
    
    for(var i=/* -1 for tag */cases["length"]-1-1;i>=0;i--)
     {l=/* :: */[0,/* tuple */[0,i,acts[cases[i+1]+1]],l];}
    
    return /* Lswitch */[7,
            arg,
            /* record */[0,
             /* -1 for tag */cases["length"]-1,
             l,
             0,
             /* [] */0,
             /* None */0]];
    };

var
 SArg=
  [0,
   eqint,
   neint,
   leint,
   ltint,
   geint,
   gtint,
   make_prim,
   make_offset,
   bind,
   make_const,
   make_isout,
   make_isin,
   make_if,
   make_switch,
   make_catch_delayed,
   make_exit];

var
 share_actions_sw=
  function(sw)
   {var store=StoreExp[1](/* () */0);
    
    var match=sw[5];
    
    if(match)
     {var fail=/* Some */[0,store[4](match[1])];}
    else
     {var fail=/* None */0;}
    
    var
     consts=
      List["map"]
       (function(param){return /* tuple */[0,param[1],store[3](param[2])];},
        sw[2]);
    
    var
     blocks=
      List["map"]
       (function(param){return /* tuple */[0,param[1],store[3](param[2])];},
        sw[4]);
    
    var acts=store[2](/* () */0);
    
    var match$1=handle_shared(/* () */0);
    
    var acts$1=$$Array["map"](match$1[2],acts);
    
    if(fail)
     {var fail$1=/* Some */[0,acts$1[fail[1]+1]];}
    else
     {var fail$1=/* None */0;}
    
    return /* tuple */[0,
            match$1[1][1],
            /* record */[0,
             sw[1],
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],acts$1[param[2]+1]];},
               consts),
             sw[3],
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],acts$1[param[2]+1]];},
               blocks),
             fail$1]];
    };

var
 reintroduce_fail=
  function(sw)
   {var match=sw[5];
    
    if(match)
     {return sw;}
    else
     {var t=Hashtbl["create"](/* None */0,17);
      
      var
       seen=
        function(param)
         {var match$1=as_simple_exit(param[2]);
          
          if(match$1)
           {var i=match$1[1];
            
            try
             {var old=Hashtbl["find"](t,i);}
            catch(exn)
             {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
               {var old=0;}
              else
               {throw exn;}
              }
            
            return Hashtbl["replace"](t,i,old+1);
            }
          else
           {return /* () */0;}
          };
      
      List["iter"](seen,sw[2]);
      List["iter"](seen,sw[4]);
      var i_max=[0,-1];
      
      var max=[0,-1];
      
      Hashtbl["iter"]
       (function(i,c)
         {if(c>max[1]){i_max[1]=i;return max[1]=c,0;}else{return 0;}},
        t);
      if(max[1]>=3)
       {var $$default=i_max[1];
        
        var
         remove=
          List["filter"]
           (function(param)
             {var match$1=as_simple_exit(param[2]);
              
              if(match$1)
               {return match$1[1]!==$$default;}
              else
               {return /* true */1;}
              });
        
        return /* record */[0,
                sw[1],
                remove(sw[2]),
                sw[3],
                remove(sw[4]),
                /* Some */[0,make_exit($$default)]];
        }
      else
       {return sw;}
      }
    };

var
 Switcher=
  Switch["Make"]
   ([0,
     SArg[1],
     SArg[2],
     SArg[3],
     SArg[4],
     SArg[5],
     SArg[6],
     SArg[9],
     SArg[10],
     SArg[8],
     SArg[7],
     SArg[11],
     SArg[12],
     SArg[13],
     SArg[14],
     SArg[15],
     SArg[16]]);

var
 lambda_of_int=
  function(i)
   {return /* Lconst */[1,/* Const_base */[0,/* Const_int */[0,i]]];};

var
 last=
  function(def,param)
   {if(param)
     {var rem=param[2];
      
      if(rem){return last(def,rem);}else{return param[1][1];}
      }
    else
     {return def;}
    };

var
 get_edges=
  function(low,high,l)
   {if(l)
     {return /* tuple */[0,l[1][1],last(high,l)];}
    else
     {return /* tuple */[0,low,high];}
    };

var
 as_interval_canfail=
  function(fail,low,high,l)
   {var store=StoreExp[1](/* () */0);
    
    var do_store=function(tag,act){return store[3](act);};
    
    var
     nofail_rec=
      function(cur_low,cur_high,cur_act,all)
       {if(all)
         {var rem=all[2];
          
          var match=all[1];
          
          var i=match[1];
          
          var act_index=do_store("NO",match[2]);
          
          if(cur_high+1===i)
           {if(act_index===cur_act)
             {return nofail_rec(cur_low,i,cur_act,rem);}
            else
             {if(act_index===0)
               {return /* :: */[0,
                        /* tuple */[0,cur_low,i-1,cur_act],
                        fail_rec(i,i,rem)];
                }
              else
               {return /* :: */[0,
                        /* tuple */[0,cur_low,i-1,cur_act],
                        nofail_rec(i,i,act_index,rem)];
                }
              }
            }
          else
           {if(act_index===0)
             {return /* :: */[0,
                      /* tuple */[0,cur_low,cur_high,cur_act],
                      fail_rec(cur_high+1,cur_high+1,all)];
              }
            else
             {return /* :: */[0,
                      /* tuple */[0,cur_low,cur_high,cur_act],
                      /* :: */[0,
                       /* tuple */[0,cur_high+1,i-1,0],
                       nofail_rec(i,i,act_index,rem)]];
              }
            }
          }
        else
         {if(cur_high===high)
           {return /* :: */[0,
                    /* tuple */[0,cur_low,cur_high,cur_act],
                    /* [] */0];
            }
          else
           {return /* :: */[0,
                    /* tuple */[0,cur_low,cur_high,cur_act],
                    /* :: */[0,/* tuple */[0,cur_high+1,high,0],/* [] */0]];
            }
          }
        };
    
    var
     fail_rec=
      function(cur_low,cur_high,param)
       {if(param)
         {var rem=param[2];
          
          var match=param[1];
          
          var i=match[1];
          
          var index=do_store("YES",match[2]);
          
          if(index===0)
           {return fail_rec(cur_low,i,rem);}
          else
           {return /* :: */[0,
                    /* tuple */[0,cur_low,i-1,0],
                    nofail_rec(i,i,index,rem)];
            }
          }
        else
         {return /* :: */[0,/* tuple */[0,cur_low,cur_high,0],/* [] */0];}
        };
    
    var
     init_rec=
      function(param)
       {if(param)
         {var rem=param[2];
          
          var match=param[1];
          
          var i=match[1];
          
          var index=do_store("INIT",match[2]);
          
          if(index===0)
           {return fail_rec(low,i,rem);}
          else
           {if(low<i)
             {return /* :: */[0,
                      /* tuple */[0,low,i-1,0],
                      nofail_rec(i,i,index,rem)];
              }
            else
             {return nofail_rec(i,i,index,rem);}
            }
          }
        else
         {return /* [] */0;}
        };
    
    if(do_store("FAIL",fail)===0)
     {}
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",2105,2]];
      }
    
    var r=init_rec(l);
    
    return /* tuple */[0,$$Array["of_list"](r),store];
    };

var
 as_interval_nofail=
  function(l)
   {var store=StoreExp[1](/* () */0);
    
    var
     i_rec=
      function(cur_low,cur_high,cur_act,param)
       {if(param)
         {var rem=param[2];
          
          var match=param[1];
          
          var i=match[1];
          
          var act_index=store[3](match[2]);
          
          if(act_index===cur_act)
           {return i_rec(cur_low,i,cur_act,rem);}
          else
           {return /* :: */[0,
                    /* tuple */[0,cur_low,cur_high,cur_act],
                    i_rec(i,i,act_index,rem)];
            }
          }
        else
         {return /* :: */[0,/* tuple */[0,cur_low,cur_high,cur_act],/* [] */0];
          }
        };
    
    if(l)
     {var match=l[1];
      
      var i=match[1];
      
      var act_index=store[3](match[2]);
      
      var inters=i_rec(i,i,act_index,l[2]);
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",2126,9]];
      }
    
    return /* tuple */[0,$$Array["of_list"](inters),store];
    };

var
 sort_int_lambda_list=
  function(l)
   {return List["sort"]
            (function(param,param$1)
              {var i2=param$1[1];
               
               var i1=param[1];
               
               if(CamlPrimitive["caml_lessthan"](i1,i2))
                {return -1;}
               else
                {if(CamlPrimitive["caml_lessthan"](i2,i1))
                  {return 1;}
                 else
                  {return 0;}
                 }
               },
             l);
    };

var
 as_interval=
  function(fail,low,high,l)
   {var l$1=sort_int_lambda_list(l);
    
    return /* tuple */[0,
            get_edges(low,high,l$1),
            fail
             ?as_interval_canfail(fail[1],low,high,l$1)
             :as_interval_nofail(l$1)];
    };

var
 call_switcher=
  function(fail,arg,low,high,int_lambda_list)
   {var match=as_interval(fail,low,high,int_lambda_list);
    
    var match$1=match[2];
    
    return Switcher[1](match[1],arg,match$1[1],match$1[2]);
    };

var
 exists_ctx=
  function(ok,ctx)
   {return List["exists"]
            (function(param)
              {var match=param[2];
               
               if(match)
                {return ok(match[1]);}
               else
                {throw [0,
                        CamlPrimitive["caml_global_data"]["Assert_failure"],
                        [0,"bytecomp/matching.ml",2156,13]];
                 }
               },
             ctx);
    };

var
 list_as_pat=
  function(param)
   {if(param)
     {var rem=param[2];
      
      var pat=param[1];
      
      if(rem)
       {var newrecord=/* unknown */"duprecord regular 6";
        
        newrecord[1]=/* Tpat_or */[8,pat,list_as_pat(rem),/* None */0];
        return newrecord;
        }
      else
       {return pat;}
      }
    else
     {return Misc["fatal_error"]("Matching.list_as_pat");}
    };

var
 pat_as_list=
  function(k,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 8:return pat_as_list(pat_as_list(k,match[2]),match[1]);
        default:exit=231;}}
    
    switch(exit){case 231:return /* :: */[0,p,k];}
    };

var All=CamlPrimitive["caml_set_oo_id"]([248,"Matching.All",0]);

var
 extract_pat=
  function(seen,k,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=229;}}
    else
     {switch(match[0])
       {case 0:exit=229;
        case 1:return extract_pat(seen,k,match[1]);
        case 8:
         var match$1=extract_pat(seen,k,match[1]);
         
         return extract_pat(match$1[2],match$1[1],match[2]);
         
        default:
         var q=Parmatch["normalize_pat"](p);
         
         if(List["exists"](Parmatch["compat"](q),seen))
          {return /* tuple */[0,k,seen];}
         else
          {return /* tuple */[0,/* :: */[0,q,k],/* :: */[0,q,seen]];}
         }}
    
    switch(exit){case 229:throw All;}
    };

var
 extract_mat=
  function(seen,pss)
   {var
     match=
      List["fold_left"]
       (function(param,ps)
         {if(ps)
           {return extract_pat(param[2],param[1],ps[1]);}
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/matching.ml",2194,13]];
            }
          },
        /* tuple */[0,/* [] */0,seen],
        pss);
    
    return match[1];
    };

var
 complete_pats_constrs=
  function(pats)
   {if(pats)
     {var p=pats[1];
      
      return List["map"]
              (Parmatch["pat_of_constr"](p),
               Parmatch["complete_constrs"]
                (p,List["map"](get_key_constr,pats)));
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"bytecomp/matching.ml",2206,9]];
      }
    };

var
 mk_res=
  function(get_key,env,last_choice,idef,cant_fail,ctx)
   {var exit;
    
    if(last_choice)
     {if(last_choice[2])
       {exit=219;}
      else
       {if(group_var(last_choice[1]))
         {var
           match=
            /* tuple */[0,
             env,
             /* Some */[0,/* Lstaticraise */[9,idef,/* [] */0]],
             jumps_singleton(idef,ctx)];
          }
        else
         {exit=219;}
        }
      }
    else
     {var match=/* tuple */[0,env,/* None */0,jumps_empty];}
    
    switch(exit)
     {case 219:
       var
        match=
         /* tuple */[0,
          /* :: */[0,/* tuple */[0,idef,cant_fail,last_choice],env],
          /* None */0,
          jumps_empty];
       
      }
    
    var
     match$1=
      List["fold_right"]
       (function(param,param$1)
         {var pats=param[3];
          
          var i=param[1];
          
          var act=/* Lstaticraise */[9,i,/* [] */0];
          
          var pat=list_as_pat(pats);
          
          var
           klist=
            List["fold_right"]
             (function(pat,klist)
               {return /* :: */[0,/* tuple */[0,get_key(pat),act],klist];},
              pats,
              param$1[1]);
          
          if(param[2]){var ctx$1=ctx;}else{var ctx$1=ctx_lub(pat,ctx);}
          
          return /* tuple */[0,klist,jumps_add(i,ctx$1,param$1[2])];
          },
        match[1],
        /* tuple */[0,/* [] */0,match[3]]);
    
    return /* tuple */[0,match[2],match$1[1],match$1[2]];
    };

var
 mk_failaction_neg=
  function(partial,ctx,def)
   {if(partial!==0)
     {return /* tuple */[0,/* None */0,/* [] */0,jumps_empty];}
    else
     {if(def)
       {var idef=def[1][2];
        
        return /* tuple */[0,
                /* Some */[0,/* Lstaticraise */[9,idef,/* [] */0]],
                /* [] */0,
                jumps_singleton(idef,ctx)];
        }
      else
       {return /* tuple */[0,/* None */0,/* [] */0,jumps_empty];}
      }
    };

var
 mk_failaction_pos=
  function(partial,seen,ctx,defs)
   {if(dbg){Pervasives["prerr_endline"]("**POS**"),pretty_def(defs)}else{}
    
    var
     scan_def=
      function(env,to_test,defs)
       {var exit;
        
        if(to_test)
         {if(defs)
           {var rem=defs[2];
            
            var match=defs[1];
            
            var pss=match[1];
            
            var
             match$1=
              List["partition"]
               (function(param){return ctx_match(param[2],pss);},to_test);
            
            var now=match$1[1];
            
            if(now)
             {return scan_def
                      (/* :: */[0,
                        /* tuple */[0,
                         List["map"](function(prim){return prim[1];},now),
                         match[2]],
                        env],
                       match$1[2],
                       rem);
              }
            else
             {return scan_def(env,to_test,rem);}
            }
          else
           {exit=209;}
          }
        else
         {exit=209;}
        
        switch(exit)
         {case 209:
           return List["fold_left"]
                   (function(param,param$1)
                     {var i=param$1[2];
                      
                      var pats=param$1[1];
                      
                      var action=/* Lstaticraise */[9,i,/* [] */0];
                      
                      var
                       klist=
                        List["fold_right"]
                         (function(pat,r)
                           {return /* :: */[0,
                                    /* tuple */[0,get_key_constr(pat),action],
                                    r];
                            },
                          pats,
                          param[1]);
                      
                      var
                       jumps=
                        jumps_add(i,ctx_lub(list_as_pat(pats),ctx),param[2]);
                      
                      return /* tuple */[0,klist,jumps];
                      },
                    /* tuple */[0,/* [] */0,jumps_empty],
                    env);
           
          }
        };
    
    return scan_def
            (/* [] */0,
             List["map"]
              (function(pat){return /* tuple */[0,pat,ctx_lub(pat,ctx)];},
               complete_pats_constrs(seen)),
             defs);
    };

var
 combine_constant=
  function(arg,cst,partial,ctx,def,param)
   {var match=mk_failaction_neg(partial,ctx,def);
    
    var fail=match[1];
    
    var const_lambda_list=Pervasives["@"](match[2],param[1]);
    
    switch(cst[0])
     {case 0:
       var
        int_lambda_list=
         List["map"]
          (function(param$1)
            {var match$1=param$1[1];
             
             switch(match$1[0])
              {case 0:return /* tuple */[0,match$1[1],param$1[2]];
               default:
                throw [0,
                       CamlPrimitive["caml_global_data"]["Assert_failure"],
                       [0,"bytecomp/matching.ml",2302,58]];
                }
             },
           const_lambda_list);
       
       var
        lambda1=
         call_switcher
          (fail,
           arg,
           Pervasives["min_int"],
           Pervasives["max_int"],
           int_lambda_list);
       
      case 1:
       var
        int_lambda_list$1=
         List["map"]
          (function(param$1)
            {var match$1=param$1[1];
             
             switch(match$1[0])
              {case 1:return /* tuple */[0,match$1[1],param$1[2]];
               default:
                throw [0,
                       CamlPrimitive["caml_global_data"]["Assert_failure"],
                       [0,"bytecomp/matching.ml",2308,19]];
                }
             },
           const_lambda_list);
       
       var lambda1=call_switcher(fail,arg,0,255,int_lambda_list$1);
       
      case 2:
       var const_lambda_list$1=sort_lambda_list(const_lambda_list);
       
       var
        sw=
         List["map"]
          (function(param$1)
            {var c=param$1[1];
             
             switch(c[0])
              {case 2:return /* tuple */[0,c[1],param$1[2]];
               default:
                throw [0,
                       CamlPrimitive["caml_global_data"]["Assert_failure"],
                       [0,"bytecomp/matching.ml",2321,19]];
                }
             },
           const_lambda_list$1);
       
       var match$1=share_actions_tree(sw,fail);
       
       var
        lambda1=
         match$1[1](/* Lstringswitch */[8,arg,match$1[2],match$1[3]]);
       
      case 3:
       var
        lambda1=
         make_test_sequence
          (fail,
           [/* Pfloatcomp */16,/* Cneq */1],
           [/* Pfloatcomp */16,/* Clt */2],
           arg,
           const_lambda_list);
       
      case 4:
       var
        lambda1=
         make_test_sequence
          (fail,
           [/* Pbintcomp */38,/* Pint32 */1,/* Cneq */1],
           [/* Pbintcomp */38,/* Pint32 */1,/* Clt */2],
           arg,
           const_lambda_list);
       
      case 5:
       var
        lambda1=
         make_test_sequence
          (fail,
           [/* Pbintcomp */38,/* Pint64 */2,/* Cneq */1],
           [/* Pbintcomp */38,/* Pint64 */2,/* Clt */2],
           arg,
           const_lambda_list);
       
      case 6:
       var
        lambda1=
         make_test_sequence
          (fail,
           [/* Pbintcomp */38,/* Pnativeint */0,/* Cneq */1],
           [/* Pbintcomp */38,/* Pnativeint */0,/* Clt */2],
           arg,
           const_lambda_list);
       
      }
    
    return /* tuple */[0,lambda1,jumps_union(match[3],param[2])];
    };

var
 split_cases=
  function(tag_lambda_list)
   {var
     split_rec=
      function(param)
       {if(param)
         {var match=param[1];
          
          var act=match[2];
          
          var cstr=match[1];
          
          var match$1=split_rec(param[2]);
          
          var nonconsts=match$1[2];
          
          var consts=match$1[1];
          
          switch(cstr[0])
           {case 0:
             return /* tuple */[0,
                     /* :: */[0,/* tuple */[0,cstr[1],act],consts],
                     nonconsts];
             
            case 1:
             return /* tuple */[0,
                     consts,
                     /* :: */[0,/* tuple */[0,cstr[1],act],nonconsts]];
             
            case 2:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"bytecomp/matching.ml",2357,15]];
             
            }
          }
        else
         {return [/* tuple */0,/* [] */0,/* [] */0];}
        };
    
    var match=split_rec(tag_lambda_list);
    
    return /* tuple */[0,
            sort_int_lambda_list(match[1]),
            sort_int_lambda_list(match[2])];
    };

var
 split_extension_cases=
  function(tag_lambda_list)
   {var
     split_rec=
      function(param)
       {if(param)
         {var match=param[1];
          
          var act=match[2];
          
          var cstr=match[1];
          
          var match$1=split_rec(param[2]);
          
          var nonconsts=match$1[2];
          
          var consts=match$1[1];
          
          var exit;
          
          switch(cstr[0])
           {case 0:exit=185;
            case 1:exit=185;
            case 2:
             var path=cstr[1];
             
             if(cstr[2]!==0)
              {return /* tuple */[0,
                       /* :: */[0,/* tuple */[0,path,act],consts],
                       nonconsts];
               }
             else
              {return /* tuple */[0,
                       consts,
                       /* :: */[0,/* tuple */[0,path,act],nonconsts]];
               }
             
            }
          
          switch(exit)
           {case 185:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"bytecomp/matching.ml",2370,15]];
             
            }
          }
        else
         {return [/* tuple */0,/* [] */0,/* [] */0];}
        };
    
    return split_rec(tag_lambda_list);
    };

var
 combine_constructor=
  function(arg,ex_pat,cstr,partial,ctx,def,param)
   {var total1=param[2];
    
    var tag_lambda_list=param[1];
    
    if(cstr[7]<0)
     {var match=mk_failaction_neg(partial,ctx,def);
      
      var fail=match[1];
      
      var tag_lambda_list$1=Pervasives["@"](match[2],tag_lambda_list);
      
      var match$1=split_extension_cases(tag_lambda_list$1);
      
      var nonconsts=match$1[2];
      
      var consts=match$1[1];
      
      if(fail)
       {var match$2=/* tuple */[0,fail[1],consts,nonconsts];}
      else
       {if(nonconsts)
         {var match$2=/* tuple */[0,nonconsts[1][2],consts,nonconsts[2]];}
        else
         {if(consts)
           {var match$2=/* tuple */[0,consts[1][2],consts[2],nonconsts];}
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/matching.ml",2389,19]];
            }
          }
        }
      
      var nonconsts$1=match$2[3];
      
      var $$default=match$2[1];
      
      if(nonconsts$1)
       {var tag=Ident["create"]("tag");
        
        var
         tests=
          List["fold_right"]
           (function(param$1,rem)
             {return /* Lifthenelse */[12,
                      /* Lprim */[6,
                       [/* Pintcomp */13,/* Ceq */0],
                       /* :: */[0,
                        /* Lvar */[0,tag],
                        /* :: */[0,
                         Lambda["transl_path"](/* None */0,ex_pat[5],param$1[1]),
                         /* [] */0]]],
                      param$1[2],
                      rem];
              },
            nonconsts$1,
            $$default);
        
        var
         nonconst_lambda=
          /* Llet */[4,
           /* Alias */1,
           tag,
           /* Lprim */[6,[/* Pfield */6,0],/* :: */[0,arg,/* [] */0]],
           tests];
        }
      else
       {var nonconst_lambda=$$default;}
      
      var
       lambda1=
        List["fold_right"]
         (function(param$1,rem)
           {return /* Lifthenelse */[12,
                    /* Lprim */[6,
                     [/* Pintcomp */13,/* Ceq */0],
                     /* :: */[0,
                      arg,
                      /* :: */[0,
                       Lambda["transl_path"](/* None */0,ex_pat[5],param$1[1]),
                       /* [] */0]]],
                    param$1[2],
                    rem];
            },
          match$2[2],
          nonconst_lambda);
      
      return /* tuple */[0,lambda1,jumps_union(match[3],total1)];
      }
    else
     {var ncases=List["length"](tag_lambda_list);
      
      var nconstrs=cstr[7]+cstr[8];
      
      var sig_complete=ncases===nconstrs;
      
      if(sig_complete)
       {var match$3=/* tuple */[0,/* [] */0,jumps_empty];}
      else
       {var match$3=mk_failaction_pos(partial,param[3],ctx,def);}
      
      var tag_lambda_list$2=Pervasives["@"](match$3[1],tag_lambda_list);
      
      var match$4=split_cases(tag_lambda_list$2);
      
      var nonconsts$2=match$4[2];
      
      var consts$1=match$4[1];
      
      var match$5=same_actions(tag_lambda_list$2);
      
      if(match$5)
       {var lambda1$1=match$5[1];}
      else
       {var match$6=cstr[7];
        
        var match$7=cstr[8];
        
        var exit;
        
        if(match$6!==1)
         {exit=164;}
        else
         {if(match$7!==1)
           {exit=164;}
          else
           {if(consts$1)
             {var match$8=consts$1[1];
              
              if(match$8[1]!==0)
               {exit=164;}
              else
               {if(consts$1[2])
                 {exit=164;}
                else
                 {if(nonconsts$2)
                   {var match$9=nonconsts$2[1];
                    
                    if(match$9[1]!==0)
                     {exit=163;}
                    else
                     {if(nonconsts$2[2])
                       {exit=163;}
                      else
                       {var
                         lambda1$1=
                          /* Lifthenelse */[12,arg,match$9[2],match$8[2]];
                        }
                      }
                    }
                  else
                   {exit=164;}
                  }
                }
              }
            else
             {exit=164;}
            }
          }
        
        switch(exit)
         {case 164:
           if(nonconsts$2)
            {exit=163;}
           else
            {var
              lambda1$1=
               call_switcher(/* None */0,arg,0,match$6-1,consts$1);
             }
           
          case 163:
           var match$10=same_actions(nonconsts$2);
           
           if(match$10)
            {var
              lambda1$1=
               /* Lifthenelse */[12,
                /* Lprim */[6,/* Pisint */33,/* :: */[0,arg,/* [] */0]],
                call_switcher(/* None */0,arg,0,match$6-1,consts$1),
                match$10[1]];
             }
           else
            {var
              sw=
               /* record */[0,
                cstr[7],
                consts$1,
                cstr[8],
                nonconsts$2,
                /* None */0];
             
             var match$11=share_actions_sw(sw);
             
             var sw$1=reintroduce_fail(match$11[2]);
             
             var lambda1$1=match$11[1](/* Lswitch */[7,arg,sw$1]);
             }
           
          }
        }
      
      return /* tuple */[0,lambda1$1,jumps_union(match$3[2],total1)];
      }
    };

var
 make_test_sequence_variant_constant=
  function(fail,arg,int_lambda_list)
   {var
     match=
      as_interval
       (fail,Pervasives["min_int"],Pervasives["max_int"],int_lambda_list);
    
    var match$1=match[2];
    
    return Switcher[2](arg,match$1[1],match$1[2]);
    };

var
 call_switcher_variant_constant=
  function(fail,arg,int_lambda_list)
   {return call_switcher
            (fail,
             arg,
             Pervasives["min_int"],
             Pervasives["max_int"],
             int_lambda_list);
    };

var
 call_switcher_variant_constr=
  function(fail,arg,int_lambda_list)
   {var v=Ident["create"]("variant");
    
    return /* Llet */[4,
            /* Alias */1,
            v,
            /* Lprim */[6,[/* Pfield */6,0],/* :: */[0,arg,/* [] */0]],
            call_switcher
             (fail,
              /* Lvar */[0,v],
              Pervasives["min_int"],
              Pervasives["max_int"],
              int_lambda_list)];
    };

var
 combine_variant=
  function(row,arg,partial,ctx,def,param)
   {var tag_lambda_list=param[1];
    
    var row$1=Btype["row_repr"](row);
    
    var num_constr=[0,0];
    
    if(row$1[4])
     {List["iter"]
       (function(param$1)
         {var match=Btype["row_field_repr"](param$1[2]);
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){case 0:exit=150;}}
          else
           {switch(match[0])
             {case 0:exit=151;
              case 1:
               if(match[1]!==0)
                {if(match[2]){exit=150;}else{exit=151;}}
               else
                {exit=151;}
               
              }}
          
          switch(exit)
           {case 151:return num_constr[0]++;case 150:return /* () */0;}
          },
        row$1[1])}
    else
     {num_constr[1]=Pervasives["max_int"]}
    
    var
     test_int_or_block=
      function(arg,if_int,if_block)
       {return /* Lifthenelse */[12,
                /* Lprim */[6,/* Pisint */33,/* :: */[0,arg,/* [] */0]],
                if_int,
                if_block];
        };
    
    var sig_complete=List["length"](tag_lambda_list)===num_constr[1];
    
    var one_action=same_actions(tag_lambda_list);
    
    if(sig_complete||(partial!==0?/* true */1:/* false */0))
     {var match=/* tuple */[0,/* None */0,/* [] */0,jumps_empty];}
    else
     {var match=mk_failaction_neg(partial,ctx,def);}
    
    var fail=match[1];
    
    var tag_lambda_list$1=Pervasives["@"](match[2],tag_lambda_list);
    
    var match$1=split_cases(tag_lambda_list$1);
    
    var nonconsts=match$1[2];
    
    var consts=match$1[1];
    
    var exit;
    
    if(fail)
     {exit=141;}
    else
     {if(one_action){var lambda1=one_action[1];}else{exit=141;}}
    
    switch(exit)
     {case 141:
       var exit$1;
       
       if(consts)
        {if(consts[2])
          {exit$1=140;}
         else
          {if(nonconsts)
            {if(nonconsts[2])
              {exit$1=138;}
             else
              {if(fail===/* None */0)
                {var
                  lambda1=
                   test_int_or_block(arg,consts[1][2],nonconsts[1][2]);
                 }
               else
                {exit$1=138;}
               }
             }
           else
            {exit$1=140;}
           }
         }
       else
        {exit$1=140;}
       
       switch(exit$1)
        {case 140:
          if(nonconsts)
           {if(consts)
             {exit$1=138;}
            else
             {var lam=call_switcher_variant_constr(fail,arg,nonconsts);
              
              if(fail)
               {var lambda1=test_int_or_block(arg,fail[1],lam);}
              else
               {var lambda1=lam;}
              }
            }
          else
           {var lambda1=make_test_sequence_variant_constant(fail,arg,consts);}
          
         case 138:
          var lam_const=call_switcher_variant_constant(fail,arg,consts);
          
          var lam_nonconst=call_switcher_variant_constr(fail,arg,nonconsts);
          
          var lambda1=test_int_or_block(arg,lam_const,lam_nonconst);
          
         }
       
      }
    
    return /* tuple */[0,lambda1,jumps_union(match[3],param[2])];
    };

var
 combine_array=
  function(arg,kind,partial,ctx,def,param)
   {var match=mk_failaction_neg(partial,ctx,def);
    
    var len_lambda_list=Pervasives["@"](match[2],param[1]);
    
    var newvar=Ident["create"]("len");
    
    var
     $$switch=
      call_switcher
       (match[1],/* Lvar */[0,newvar],0,Pervasives["max_int"],len_lambda_list);
    
    var
     lambda1=
      Lambda["bind"]
       (/* Alias */1,
        newvar,
        /* Lprim */[6,/* Parraylength */[18,kind],/* :: */[0,arg,/* [] */0]],
        $$switch);
    
    return /* tuple */[0,lambda1,jumps_union(match[3],param[2])];
    };

var
 event_branch=
  function(repr,lam)
   {if(repr)
     {switch(lam[0])
       {case 4:
         return /* Llet */[4,lam[1],lam[2],lam[3],event_branch(repr,lam[4])];
        case 9:return lam;
        case 18:
         var ev=lam[2];
         
         repr[1][0]++;
         return /* Levent */[18,lam[1],/* record */[0,ev[1],ev[2],repr,ev[4]]];
         
        default:
         Printlambda["lambda"](Format["str_formatter"],lam);
         return Misc["fatal_error"]
                 (Pervasives["^"]
                   ("Matching.event_branch: ",
                    Format["flush_str_formatter"](/* () */0)));
         }
      }
    else
     {return lam;}
    };

var Unused=CamlPrimitive["caml_set_oo_id"]([248,"Matching.Unused",0]);

var
 compile_list=
  function(compile_fun,division)
   {var
     c_rec=
      function(totals,param)
       {if(param)
         {var rem=param[2];
          
          var match=param[1];
          
          var cell=match[2];
          
          var match$1=cell[2];
          
          if(match$1)
           {try
             {var match$2=compile_fun(cell[2],cell[1]);
              
              var
               match$3=
                c_rec
                 (/* :: */[0,jumps_map(ctx_combine,match$2[2]),totals],rem);
              
              return /* tuple */[0,
                      /* :: */[0,/* tuple */[0,match[1],match$2[1]],match$3[1]],
                      match$3[2],
                      /* :: */[0,cell[3],match$3[3]]];
              }
            catch(exn)
             {if(exn===Unused){return c_rec(totals,rem);}else{throw exn;}}
            }
          else
           {return c_rec(totals,rem);}
          }
        else
         {return /* tuple */[0,/* [] */0,jumps_unions(totals),/* [] */0];}
        };
    
    return c_rec(/* [] */0,division);
    };

var
 compile_orhandlers=
  function(compile_fun,lambda1,total1,ctx,to_catch)
   {var
     do_rec=
      function(r,total_r,param)
       {if(param)
         {var rem=param[2];
          
          var match=param[1];
          
          var vars=match[3];
          
          var i=match[2];
          
          var mat=match[1];
          
          try
           {var ctx$1=select_columns(mat,ctx);
            
            var match$1=compile_fun(ctx$1,match[4]);
            
            var total_i=match$1[2];
            
            var handler_i=match$1[1];
            
            var match$2=raw_action(r);
            
            switch(match$2[0])
             {case 9:
               if(i===match$2[1])
                {return /* tuple */[0,
                         List["fold_right2"]
                          (Lambda["bind"](/* Alias */1),vars,match$2[2],handler_i),
                         jumps_map(ctx_rshift_num(ncols(mat)),total_i)];
                 }
               else
                {return do_rec(r,total_r,rem);}
               
              default:
               return do_rec
                       (/* Lstaticcatch */[10,r,/* tuple */[0,i,vars],handler_i],
                        jumps_union
                         (jumps_remove(i,total_r),
                          jumps_map(ctx_rshift_num(ncols(mat)),total_i)),
                        rem);
               }
            }
          catch(exn)
           {if(exn===Unused)
             {return do_rec
                      (/* Lstaticcatch */[10,
                        r,
                        /* tuple */[0,i,vars],
                        Lambda["lambda_unit"]],
                       total_r,
                       rem);
              }
            else
             {throw exn;}
            }
          }
        else
         {return /* tuple */[0,r,total_r];}
        };
    
    return do_rec(lambda1,total1,to_catch);
    };

var
 compile_test=
  function(compile_fun,partial,divide,combine,ctx,to_match)
   {var division=divide(ctx,to_match);
    
    var c_div=compile_list(compile_fun,division);
    
    if(c_div[1])
     {return combine(ctx,to_match[3],c_div);}
    else
     {var match=mk_failaction_neg(partial,ctx,to_match[3]);
      
      var match$1=match[1];
      
      if(match$1)
       {return /* tuple */[0,match$1[1],match[3]];}
      else
       {throw Unused;}
      }
    };

var
 approx_present=
  function(v,param)
   {var exit;
    
    switch(param[0])
     {case 0:return Ident["same"](v,param[1]);
      case 1:return /* false */0;
      case 4:
       if(param[1]!==1)
        {exit=112;}
       else
        {return approx_present(v,param[3])||approx_present(v,param[4]);}
       
      case 6:
       return List["exists"]
               (function(lam){return approx_present(v,lam);},param[2]);
       
      case 9:
       return List["exists"]
               (function(lam){return approx_present(v,lam);},param[2]);
       
      default:exit=112;}
    
    switch(exit){case 112:return /* true */1;}
    };

var
 lower_bind=
  function(v,arg,lam)
   {var exit;
    
    switch(lam[0])
     {case 4:
       if(lam[1]!==1)
        {exit=111;}
       else
        {var lv=lam[3];
         
         if(approx_present(v,lv))
          {return Lambda["bind"](/* Alias */1,v,arg,lam);}
         else
          {return /* Llet */[4,
                   /* Alias */1,
                   lam[2],
                   lv,
                   lower_bind(v,arg,lam[4])];
           }
         }
       
      case 7:
       var sw=lam[2];
       
       var match=sw[2];
       
       var ls=lam[1];
       
       if(match)
        {if(match[2])
          {exit=111;}
         else
          {if(sw[4])
            {exit=111;}
           else
            {var match$1=match[1];
             
             if(!approx_present(v,ls))
              {return /* Lswitch */[7,
                       ls,
                       /* record */[0,
                        sw[1],
                        /* :: */[0,
                         /* tuple */[0,match$1[1],lower_bind(v,arg,match$1[2])],
                         /* [] */0],
                        sw[3],
                        sw[4],
                        sw[5]]];
               }
             else
              {exit=111;}
             }
           }
         }
       else
        {var match$2=sw[4];
         
         if(match$2)
          {if(match$2[2])
            {exit=111;}
           else
            {var match$3=match$2[1];
             
             if(!approx_present(v,ls))
              {return /* Lswitch */[7,
                       ls,
                       /* record */[0,
                        sw[1],
                        sw[2],
                        sw[3],
                        /* :: */[0,
                         /* tuple */[0,match$3[1],lower_bind(v,arg,match$3[2])],
                         /* [] */0],
                        sw[5]]];
               }
             else
              {exit=111;}
             }
           }
         else
          {exit=111;}
         }
       
      case 12:
       var ifnot=lam[3];
       
       var ifso=lam[2];
       
       var cond=lam[1];
       
       var pcond=approx_present(v,cond);
       
       var pso=approx_present(v,ifso);
       
       var pnot=approx_present(v,ifnot);
       
       var exit$1;
       
       if(pcond!==0)
        {exit$1=107;}
       else
        {if(pso!==0)
          {if(pnot!==0)
            {exit$1=107;}
           else
            {return /* Lifthenelse */[12,cond,lower_bind(v,arg,ifso),ifnot];}
           }
         else
          {if(pnot!==0)
            {return /* Lifthenelse */[12,cond,ifso,lower_bind(v,arg,ifnot)];}
           else
            {return lam;}
           }
         }
       
       switch(exit$1){case 107:return Lambda["bind"](/* Alias */1,v,arg,lam);}
       
      default:exit=111;}
    
    switch(exit){case 111:return Lambda["bind"](/* Alias */1,v,arg,lam);}
    };

var
 bind_check=
  function(str,v,arg,lam)
   {switch(arg[0])
     {case 0:return Lambda["bind"](str,v,arg,lam);
      default:
       if(str!==1)
        {return Lambda["bind"](str,v,arg,lam);}
       else
        {return lower_bind(v,arg,lam);}
       }
    };

var
 comp_exit=
  function(ctx,m)
   {var match=m[3];
    
    if(match)
     {var i=match[1][2];
      
      return /* tuple */[0,
              /* Lstaticraise */[9,i,/* [] */0],
              jumps_singleton(i,ctx)];
      }
    else
     {return Misc["fatal_error"]("Matching.comp_exit");}
    };

var
 comp_match_handlers=
  function(comp_fun,partial,ctx,arg,first_match,next_matchs)
   {if(next_matchs)
     {var
       c_rec=
        function(body,total_body,param)
         {if(param)
           {var rem=param[2];
            
            var match=param[1];
            
            var i=match[1];
            
            var match$1=jumps_extract(i,total_body);
            
            var total_rem=match$1[2];
            
            var ctx_i=match$1[1];
            
            if(ctx_i)
             {try
               {var
                 match$2=
                  comp_fun(rem?/* Partial */0:partial,ctx_i,arg,match[2]);
                
                return c_rec
                        (/* Lstaticcatch */[10,
                          body,
                          /* tuple */[0,i,/* [] */0],
                          match$2[1]],
                         jumps_union(match$2[2],total_rem),
                         rem);
                }
              catch(exn)
               {if(exn===Unused)
                 {return c_rec
                          (/* Lstaticcatch */[10,
                            body,
                            /* tuple */[0,i,/* [] */0],
                            Lambda["lambda_unit"]],
                           total_rem,
                           rem);
                  }
                else
                 {throw exn;}
                }
              }
            else
             {return c_rec(body,total_body,rem);}
            }
          else
           {return /* tuple */[0,body,total_body];}
          };
      
      try
       {var match=comp_fun(/* Partial */0,ctx,arg,first_match);
        
        return c_rec(match[1],match[2],next_matchs);
        }
      catch(exn)
       {if(exn===Unused)
         {if(next_matchs)
           {return comp_match_handlers
                    (comp_fun,partial,ctx,arg,next_matchs[1][2],next_matchs[2]);
            }
          else
           {throw Unused;}
          }
        else
         {throw exn;}
        }
      }
    else
     {return comp_fun(partial,ctx,arg,first_match);}
    };

var
 name_pattern=
  function($$default,param)
   {var exit;
    
    if(param)
     {var match=param[1][1];
      
      if(match)
       {var match$1=match[1][1];
        
        var exit$1;
        
        if(typeof match$1==="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 0:return match$1[1];
            case 1:return match$1[2];
            default:exit$1=92;}}
        
        switch(exit$1){case 92:return name_pattern($$default,param[2]);}
        }
      else
       {exit=93;}
      }
    else
     {exit=93;}
    
    switch(exit){case 93:return Ident["create"]($$default);}
    };

var
 arg_to_var=
  function(arg,cls)
   {switch(arg[0])
     {case 0:return /* tuple */[0,arg[1],arg];
      default:
       var v=name_pattern("match",cls);
       
       return /* tuple */[0,v,/* Lvar */[0,v]];
       }
    };

var
 compile_match=
  function(repr,partial,ctx,m)
   {var match=m[1];
    
    if(match)
     {var match$1=match[1];
      
      if(match$1[1])
       {var match$2=m[2];
        
        if(match$2)
         {var match$3=match$2[1];
          
          var arg=match$3[1];
          
          var match$4=arg_to_var(arg,m[1]);
          
          var newarg=match$4[2];
          
          var v=match$4[1];
          
          var
           match$5=
            split_precompile
             (/* Some */[0,v],
              /* record */[0,
               m[1],
               /* :: */[0,/* tuple */[0,newarg,/* Alias */1],match$2[2]],
               m[3]]);
          
          var
           match$6=
            comp_match_handlers
             ((dbg?do_compile_matching_pr:do_compile_matching)(repr),
              partial,
              ctx,
              newarg,
              match$5[1],
              match$5[2]);
          
          return /* tuple */[0,
                  bind_check(match$3[2],v,arg,match$6[1]),
                  match$6[2]];
          }
        else
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"bytecomp/matching.ml",2776,7]];
          }
        }
      else
       {var action=match$1[2];
        
        if(Lambda["is_guarded"](action))
         {var
           match$7=
            compile_match
             (/* None */0,partial,ctx,/* record */[0,match[2],m[2],m[3]]);
          
          return /* tuple */[0,
                  event_branch
                   (repr,Lambda["patch_guarded"](match$7[1],action)),
                  match$7[2]];
          }
        else
         {return /* tuple */[0,event_branch(repr,action),jumps_empty];}
        }
      }
    else
     {return comp_exit(ctx,m);}
    };

var
 do_compile_matching_pr=
  function(repr,partial,ctx,arg,x)
   {Pervasives["prerr_string"]("COMPILE: ");
    Pervasives["prerr_endline"](partial!==0?"Total":"Partial");
    Pervasives["prerr_endline"]("MATCH");
    pretty_precompiled(x);
    Pervasives["prerr_endline"]("CTX");
    pretty_ctx(ctx);
    var r=do_compile_matching(repr,partial,ctx,arg,x);
    
    Pervasives["prerr_endline"]("JUMPS");
    pretty_jumps(r[2]);
    return r;
    };

var
 do_compile_matching=
  function(repr,partial,ctx,arg,pmh)
   {switch(pmh[0])
     {case 0:
       var match=pmh[1];
       
       var match$1=compile_match(repr,partial,ctx,match[1]);
       
       return compile_orhandlers
               (compile_match(repr,partial),
                match$1[1],
                match$1[2],
                ctx,
                match[2]);
       
      case 1:
       var match$2=pmh[1];
       
       var
        match$3=
         do_compile_matching
          (repr,partial,ctx_lshift(ctx),match$2[2],match$2[1]);
       
       return /* tuple */[0,match$3[1],jumps_map(ctx_rshift,match$3[2])];
       
      case 2:
       var pm=pmh[1];
       
       var pat=what_is_cases(pm[1]);
       
       var match$4=pat[1];
       
       var exit;
       
       if(typeof match$4==="number")
        {switch(match$4)
          {case 0:
            return compile_no_test(divide_var,ctx_rshift,repr,partial,ctx,pm);
           }}
       else
        {switch(match$4[0])
          {case 2:
            return compile_test
                    (compile_match(repr,partial),
                     partial,
                     divide_constant,
                     combine_constant(arg,match$4[1],partial),
                     ctx,
                     pm);
            
           case 3:
            return compile_no_test
                    (divide_tuple
                      (List["length"](match$4[1]),Parmatch["normalize_pat"](pat)),
                     ctx_combine,
                     repr,
                     partial,
                     ctx,
                     pm);
            
           case 4:
            return compile_test
                    (compile_match(repr,partial),
                     partial,
                     divide_constructor,
                     combine_constructor(arg,pat,match$4[2],partial),
                     ctx,
                     pm);
            
           case 5:
            var row=match$4[3];
            
            return compile_test
                    (compile_match(repr,partial),
                     partial,
                     divide_variant(row[1]),
                     combine_variant(row[1],arg,partial),
                     ctx,
                     pm);
            
           case 6:
            var match$5=match$4[1];
            
            if(match$5)
             {return compile_no_test
                      (divide_record
                        (match$5[1][2][6],Parmatch["normalize_pat"](pat)),
                       ctx_combine,
                       repr,
                       partial,
                       ctx,
                       pm);
              }
            else
             {exit=83;}
            
           case 7:
            var kind=Typeopt["array_pattern_kind"](pat);
            
            return compile_test
                    (compile_match(repr,partial),
                     partial,
                     divide_array(kind),
                     combine_array(arg,kind,partial),
                     ctx,
                     pm);
            
           case 9:
            return compile_no_test
                    (divide_lazy(Parmatch["normalize_pat"](pat)),
                     ctx_combine,
                     repr,
                     partial,
                     ctx,
                     pm);
            
           default:exit=83;}}
       
       switch(exit)
        {case 83:
          throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"bytecomp/matching.ml",2833,9]];
          
         }
       
      }
    };

var
 compile_no_test=
  function(divide,up_ctx,repr,partial,ctx,to_match)
   {var match=divide(ctx,to_match);
    
    var match$1=compile_match(repr,partial,match[2],match[1]);
    
    return /* tuple */[0,match$1[1],jumps_map(up_ctx,match$1[2])];
    };

var
 find_in_pat=
  function(pred)
   {var
     find_rec=
      function(p)
       {var match=p[1];
        
        var exit;
        
        var $js;
        if(typeof match==="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:exit=72;
            case 3:exit=73;
            case 4:var ps=match[3];exit=70;
            case 5:
             var match$1=match[2];
             
             if(match$1){var p$1=match$1[1];exit=69;}else{exit=71;}
             
            case 6:
             $js=
             List["exists"]
              (function(param){return find_rec(param[3]);},match[1]);
             
            case 7:exit=73;
            case 8:$js=find_rec(match[1])||find_rec(match[2]);
            case 9:exit=72;
            default:exit=71;}}
        
        var $js$1;
        switch(exit)
         {case 72:var p$1=match[1];exit=69;
          case 73:var ps=match[1];exit=70;
          case 69:$js$1=find_rec(p$1);
          case 70:$js$1=List["exists"](find_rec,ps);
          case 71:$js$1=/* false */0;
          }
        return pred(p[1])||$js$1;
        };
    
    return find_rec;
    };

var
 is_lazy_pat=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){}}
    else
     {switch(param[0]){case 9:return /* true */1;default:exit=67;}}
    
    switch(exit){case 67:return /* false */0;}
    };

var is_lazy=function(p){return find_in_pat(is_lazy_pat,p);};

var
 have_mutable_field=
  function(p)
   {var exit;
    
    if(typeof p==="number")
     {switch(p){}}
    else
     {switch(p[0])
       {case 6:
         return List["exists"]
                 (function(param)
                   {var match=param[2][4];
                    
                    if(match!==0){return /* true */1;}else{return /* false */0;}
                    },
                  p[1]);
         
        default:exit=64;}}
    
    switch(exit){case 64:return /* false */0;}
    };

var is_mutable=function(p){return find_in_pat(have_mutable_field,p);};

var
 check_partial=
  function(is_mutable,is_lazy,pat_act_list,param)
   {if(param!==0)
     {if
       (List["exists"]
         (function(param$1)
           {var pats=param$1[1];
            
            return is_mutable(pats)&&
                   (Lambda["is_guarded"](param$1[2])||is_lazy(pats));
            },
          pat_act_list))
       {return /* Partial */0;}
      else
       {return /* Total */1;}
      }
    else
     {return /* Partial */0;}
    };

var
 check_partial_list=
  check_partial(List["exists"](is_mutable),List["exists"](is_lazy));

var check_partial$1=check_partial(is_mutable,is_lazy);

var
 start_ctx=
  function(n)
   {return /* :: */[0,
            /* record */[0,/* [] */0,Parmatch["omegas"](n)],
            /* [] */0];
    };

var
 check_total=
  function(total,lambda,i,handler_fun)
   {if(jumps_is_empty(total))
     {return lambda;}
    else
     {return /* Lstaticcatch */[10,
              lambda,
              /* tuple */[0,i,/* [] */0],
              handler_fun(/* () */0)];
      }
    };

var
 compile_matching=
  function(loc,repr,handler_fun,arg,pat_act_list,partial)
   {var partial$1=check_partial$1(pat_act_list,partial);
    
    if(partial$1!==0)
     {var
       pm=
        /* record */[0,
         List["map"]
          (function(param)
            {return /* tuple */[0,/* :: */[0,param[1],/* [] */0],param[2]];},
           pat_act_list),
         /* :: */[0,/* tuple */[0,arg,/* Strict */0],/* [] */0],
         /* [] */0];
      
      var match=compile_match(repr,partial$1,start_ctx(1),pm);
      
      if(jumps_is_empty(match[2]))
       {}
      else
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/matching.ml",2967,6]];
        }
      
      return match[1];
      }
    else
     {var raise_num=Lambda["next_raise_count"](/* () */0);
      
      var
       pm$1=
        /* record */[0,
         List["map"]
          (function(param)
            {return /* tuple */[0,/* :: */[0,param[1],/* [] */0],param[2]];},
           pat_act_list),
         /* :: */[0,/* tuple */[0,arg,/* Strict */0],/* [] */0],
         /* :: */[0,
          /* tuple */[0,
           /* :: */[0,/* :: */[0,Parmatch["omega"],/* [] */0],/* [] */0],
           raise_num],
          /* [] */0]];
      
      try
       {var match$1=compile_match(repr,partial$1,start_ctx(1),pm$1);
        
        return check_total(match$1[2],match$1[1],raise_num,handler_fun);
        }
      catch(exn)
       {if(exn===Unused)
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"bytecomp/matching.ml",2959,18]];
          }
        else
         {throw exn;}
        }
      }
    };

var
 partial_function=
  function(loc,param)
   {var match=Location["get_pos_info"](loc[1]);
    
    return /* Lprim */[6,
            [/* Praise */12,/* Raise_regular */0],
            /* :: */[0,
             /* Lprim */[6,
              /* Pmakeblock */[5,
               0,
               Lambda["default_tag_info"],
               /* Immutable */0],
              /* :: */[0,
               Lambda["transl_normal_path"](Predef["path_match_failure"]),
               /* :: */[0,
                /* Lconst */[1,
                 /* Const_block */[2,
                  0,
                  Lambda["default_tag_info"],
                  /* :: */[0,
                   /* Const_base */[0,
                    /* Const_string */[2,match[1],/* None */0]],
                   /* :: */[0,
                    /* Const_base */[0,/* Const_int */[0,match[2]]],
                    /* :: */[0,
                     /* Const_base */[0,/* Const_int */[0,match[3]]],
                     /* [] */0]]]]],
                /* [] */0]]],
             /* [] */0]];
    };

var
 for_function=
  function(loc,repr,param,pat_act_list,partial)
   {return compile_matching
            (loc,repr,partial_function(loc),param,pat_act_list,partial);
    };

var
 for_trywith=
  function(param,pat_act_list)
   {return compile_matching
            (Location["none"],
             /* None */0,
             function(param$1)
              {return /* Lprim */[6,
                       [/* Praise */12,/* Raise_reraise */1],
                       /* :: */[0,param,/* [] */0]];
               },
             param,
             pat_act_list,
             /* Partial */0);
    };

var
 for_let=
  function(loc,param,pat,body)
   {return compile_matching
            (loc,
             /* None */0,
             partial_function(loc),
             param,
             /* :: */[0,/* tuple */[0,pat,body],/* [] */0],
             /* Partial */0);
    };

var
 for_tupled_function=
  function(loc,paraml,pats_act_list,partial)
   {var partial$1=check_partial_list(pats_act_list,partial);
    
    var raise_num=Lambda["next_raise_count"](/* () */0);
    
    var
     omegas=
      /* :: */[0,
       List["map"](function(param){return Parmatch["omega"];},paraml),
       /* [] */0];
    
    var
     pm=
      /* record */[0,
       pats_act_list,
       List["map"]
        (function(id){return /* tuple */[0,/* Lvar */[0,id],/* Strict */0];},
         paraml),
       /* :: */[0,/* tuple */[0,omegas,raise_num],/* [] */0]];
    
    try
     {var
       match=
        compile_match
         (/* None */0,partial$1,start_ctx(List["length"](paraml)),pm);
      
      return check_total(match[2],match[1],raise_num,partial_function(loc));
      }
    catch(exn)
     {if(exn===Unused)
       {return partial_function(loc,/* () */0);}
      else
       {throw exn;}
      }
    };

var
 flatten_pattern=
  function(size,p)
   {var match=p[1];
    
    if(typeof match==="number")
     {switch(match){case 0:return Parmatch["omegas"](size);}}
    else
     {switch(match[0]){case 3:return match[1];default:throw Cannot_flatten;}}
    };

var
 flatten_pat_line=
  function(size,p,k)
   {var match=p[1];
    
    if(typeof match==="number")
     {switch(match){case 0:return /* :: */[0,Parmatch["omegas"](size),k];}}
    else
     {switch(match[0])
       {case 1:return flatten_pat_line(size,match[1],k);
        case 3:return /* :: */[0,match[1],k];
        case 8:
         return flatten_pat_line
                 (size,match[1],flatten_pat_line(size,match[2],k));
         
        default:return Misc["fatal_error"]("Matching.flatten_pat_line");}}
    };

var
 flatten_cases=
  function(size,cases)
   {return List["map"]
            (function(param)
              {var ps=param[1];
               
               var exit;
               
               if(ps)
                {if(ps[2])
                  {exit=33;}
                 else
                  {return /* tuple */[0,flatten_pattern(size,ps[1]),param[2]];
                   }
                 }
               else
                {exit=33;}
               
               switch(exit)
                {case 33:return Misc["fatal_error"]("Matching.flatten_case");}
               },
             cases);
    };

var
 flatten_matrix=
  function(size,pss)
   {return List["fold_right"]
            (function(ps,r)
              {var exit;
               
               if(ps)
                {if(ps[2])
                  {exit=31;}
                 else
                  {return flatten_pat_line(size,ps[1],r);}
                 }
               else
                {exit=31;}
               
               switch(exit)
                {case 31:
                  return Misc["fatal_error"]("Matching.flatten_matrix");
                 }
               },
             pss,
             /* [] */0);
    };

var
 flatten_def=
  function(size,def)
   {return List["map"]
            (function(param)
              {return /* tuple */[0,flatten_matrix(size,param[1]),param[2]];},
             def);
    };

var
 flatten_pm=
  function(size,args,pm)
   {return /* record */[0,
            flatten_cases(size,pm[1]),
            args,
            flatten_def(size,pm[3])];
    };

var
 flatten_precompiled=
  function(size,args,pmh)
   {switch(pmh[0])
     {case 0:
       var match=pmh[1];
       
       return /* PmOr */[0,
               /* record */[0,
                flatten_pm(size,args,match[1]),
                List["map"]
                 (function(param)
                   {return /* tuple */[0,
                            flatten_matrix(size,param[1]),
                            param[2],
                            param[3],
                            param[4]];
                    },
                  match[2]),
                flatten_matrix(size,match[3])]];
       
      case 1:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",3062,13]];
       
      case 2:return /* Pm */[2,flatten_pm(size,args,pmh[1])];
      }
    };

var
 compile_flattened=
  function(repr,partial,ctx,param,pmh)
   {switch(pmh[0])
     {case 0:
       var match=pmh[1];
       
       var match$1=compile_match(repr,partial,ctx,match[1]);
       
       return compile_orhandlers
               (compile_match(repr,partial),
                match$1[1],
                match$1[2],
                ctx,
                match[2]);
       
      case 1:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"bytecomp/matching.ml",3074,13]];
       
      case 2:return compile_match(repr,partial,ctx,pmh[1]);
      }
    };

var
 do_for_multiple_match=
  function(loc,paraml,pat_act_list,partial)
   {var repr=/* None */0;
    
    var partial$1=check_partial$1(pat_act_list,partial);
    
    if(partial$1!==0)
     {var
       match=
        /* tuple */[0,
         -1,
         /* record */[0,
          List["map"]
           (function(param)
             {return /* tuple */[0,/* :: */[0,param[1],/* [] */0],param[2]];},
            pat_act_list),
          /* :: */[0,
           /* tuple */[0,
            /* Lprim */[6,
             /* Pmakeblock */[5,0,Lambda["default_tag_info"],/* Immutable */0],
             paraml],
            /* Strict */0],
           /* [] */0],
          /* [] */0]];
      }
    else
     {var raise_num=Lambda["next_raise_count"](/* () */0);
      
      var
       match=
        /* tuple */[0,
         raise_num,
         /* record */[0,
          List["map"]
           (function(param)
             {return /* tuple */[0,/* :: */[0,param[1],/* [] */0],param[2]];},
            pat_act_list),
          /* :: */[0,
           /* tuple */[0,
            /* Lprim */[6,
             /* Pmakeblock */[5,0,Lambda["default_tag_info"],/* Immutable */0],
             paraml],
            /* Strict */0],
           /* [] */0],
          /* :: */[0,
           /* tuple */[0,
            /* :: */[0,/* :: */[0,Parmatch["omega"],/* [] */0],/* [] */0],
            raise_num],
           /* [] */0]]];
      }
    
    var pm1=match[2];
    
    var raise_num$1=match[1];
    
    try
     {try
       {var match$1=split_precompile(/* None */0,pm1);
        
        var size=List["length"](paraml);
        
        var
         idl=
          List["map"]
           (function(param){return Ident["create"]("match");},paraml);
        
        var
         args=
          List["map"]
           (function(id){return /* tuple */[0,/* Lvar */[0,id],/* Alias */1];},
            idl);
        
        var flat_next=flatten_precompiled(size,args,match$1[1]);
        
        var
         flat_nexts=
          List["map"]
           (function(param)
             {return /* tuple */[0,
                      param[1],
                      flatten_precompiled(size,args,param[2])];
              },
            match$1[2]);
        
        var
         match$2=
          comp_match_handlers
           (compile_flattened(repr),
            partial$1,
            start_ctx(size),
            /* () */0,
            flat_next,
            flat_nexts);
        
        var total=match$2[2];
        
        var lam=match$2[1];
        
        if(partial$1!==0)
         {if(jumps_is_empty(total))
           {}
          else
           {throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/matching.ml",3117,12]];
            }
          
          var $js=lam;
          }
        else
         {var $js=check_total(total,lam,raise_num$1,partial_function(loc));}
        return List["fold_right2"]
                (Lambda["bind"](/* Strict */0),idl,paraml,$js);
        }
      catch(exn)
       {if(exn===Cannot_flatten)
         {var match$3=compile_match(/* None */0,partial$1,start_ctx(1),pm1);
          
          var total$1=match$3[2];
          
          var lambda=match$3[1];
          
          if(partial$1!==0)
           {if(jumps_is_empty(total$1))
             {}
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"bytecomp/matching.ml",3125,10]];
              }
            
            return lambda;
            }
          else
           {return check_total
                    (total$1,lambda,raise_num$1,partial_function(loc));
            }
          }
        else
         {throw exn;}
        }
      }
    catch(exn$1)
     {if(exn$1===Unused)
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"bytecomp/matching.ml",3129,4]];
        }
      else
       {throw exn$1;}
      }
    };

var
 arg_to_var$1=
  function(arg,cls)
   {switch(arg[0])
     {case 0:return /* tuple */[0,arg[1],arg];
      default:
       var v=name_pattern("match",cls);
       
       return /* tuple */[0,v,/* Lvar */[0,v]];
       }
    };

var
 param_to_var=
  function(param)
   {switch(param[0])
     {case 0:return /* tuple */[0,param[1],/* None */0];
      default:
       return /* tuple */[0,Ident["create"]("match"),/* Some */[0,param]];}
    };

var
 bind_opt=
  function(param,k)
   {var eo=param[2];
    
    if(eo)
     {return Lambda["bind"](/* Strict */0,param[1],eo[1],k);}
    else
     {return k;}
    };

var
 for_multiple_match=
  function(loc,paraml,pat_act_list,partial)
   {var v_paraml=List["map"](param_to_var,paraml);
    
    var
     paraml$1=
      List["map"](function(param){return /* Lvar */[0,param[1]];},v_paraml);
    
    return List["fold_right"]
            (bind_opt,
             v_paraml,
             do_for_multiple_match(loc,paraml$1,pat_act_list,partial));
    };

module["exports"]=
{"for_function":for_function,
 "for_trywith":for_trywith,
 "for_let":for_let,
 "for_multiple_match":for_multiple_match,
 "for_tupled_function":for_tupled_function,
 "Cannot_flatten":Cannot_flatten,
 "flatten_pattern":flatten_pattern,
 "expand_stringswitch":expand_stringswitch,
 "inline_lazy_force":inline_lazy_force};

