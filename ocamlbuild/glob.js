// Generated CODE, PLEASE EDIT WITH CARE 

var Bool=require("./bool.js");
var Printf=require("./printf.js");
var Glob_ast=require("./glob_ast.js");
var Format=require("./format.js");
var Glob_lexer=require("./glob_lexer.js");
var Lexing=require("./lexing.js");
var My_std=require("./my_std.js");
var Hashtbl=require("./hashtbl.js");
var Map=require("./map.js");
var CamlPrimitive=require("./camlPrimitive.js");



var Parse_error=Glob_ast["Parse_error"];

var sf=Printf["sprintf"];

var brute_limit=10;

var
 string_of_token=
  function(param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return "AND";
        case 1:return "OR";
        case 2:return "NOT";
        case 3:return "LPAR";
        case 4:return "RPAR";
        case 5:return "TRUE";
        case 6:return "FALSE";
        case 7:return "EOF";
        }
      }
    else
     {return "ATOM";}
    };

var
 match_character_class=
  function(cl,c)
   {return Bool["eval"]
            (function(param)
              {return CamlPrimitive["caml_lessequal"](param[1],c)&&
                      CamlPrimitive["caml_lessequal"](c,param[2]);
               },
             cl);
    };

var compare=function(x,y){return CamlPrimitive["caml_int_compare"](x,y);};

var print=Format["pp_print_int"];

var IS=My_std["Set"][1]([0,compare,print]);

var compare$1=IS[10];

var print$1=IS[29];

var ISM=Map["Make"]([0,compare$1]);

var
 build$prime=
  function(p)
   {var count=[0,0];
    
    var transitions=[0,/* [] */0];
    
    var epsilons=[0,/* [] */0];
    
    var state=function(param){var id=count[1];count[0]++;return id;};
    
    var
     $neg$neg$great=
      function(q1,t,q2)
       {if(t)
         {transitions[1]=/* :: */[0,/* tuple */[0,q1,t[1],q2],transitions[1]];
          return q1;
          }
        else
         {epsilons[1]=/* :: */[0,/* tuple */[0,q1,q2],epsilons[1]];return q1;}
        };
    
    var
     loop=
      function(qf,param)
       {if(typeof param==="number")
         {switch(param){case 0:return qf;}}
        else
         {switch(param[0])
           {case 0:
             var q2=state(/* () */0);
             
             var q1=loop(q2,param[1]);
             
             var match=$neg$neg$great(q1,/* QEPSILON */0,qf);
             
             var match$1=$neg$neg$great(q2,/* QEPSILON */0,q1);
             
             var match$2=$neg$neg$great(q2,/* QEPSILON */0,q1);
             
             return q1;
             
            case 1:
             var q1$1=state(/* () */0);
             
             return $neg$neg$great(q1$1,/* QCLASS */[0,param[1]],qf);
             
            case 2:
             var q12=state(/* () */0);
             
             var q1$2=loop(q12,param[1]);
             
             var q2$1=loop(qf,param[2]);
             
             var match$3=$neg$neg$great(q12,/* QEPSILON */0,q2$1);
             
             return q1$2;
             
            case 3:
             var qi=state(/* () */0);
             
             My_std["List"][14]
              (function(p)
                {var q=loop(qf,p);
                 
                 var match$4=$neg$neg$great(qi,/* QEPSILON */0,q);
                 
                 return /* () */0;
                 },
               param[1]);
             return qi;
             
            case 4:
             var u=param[1];
             
             var m=u["length"];
             
             var q0=state(/* () */0);
             
             var
              loop$1=
               function(q,i)
                {if(i===m)
                  {return q0;}
                 else
                  {if(i===m-1)
                    {var q$prime=qf;}
                   else
                    {var q$prime=state(/* () */0);}
                   
                   var
                    match$4=
                     $neg$neg$great
                      (q,
                       /* QCLASS */[0,/* Atom */[3,/* tuple */[0,u[i],u[i]]]],
                       q$prime);
                   
                   return loop$1(q$prime,i+1);
                   }
                 };
             
             return loop$1(q0,0);
             
            }}
        };
    
    var qf=state(/* () */0);
    
    var qi=loop(qf,p);
    
    var m=count[1];
    
    var graph=CamlPrimitive["caml_make_vect"](m,IS[1]);
    
    My_std["List"][14]
     (function(param)
       {var q=param[1];return graph[q+1]=IS[4](param[2],graph[q+1]),0;},
      epsilons[1]);
    var closure=CamlPrimitive["caml_make_vect"](m,IS[1]);
    
    var
     transitive=
      function(past,param)
       {if(param)
         {var q=param[1];
          
          var past$prime=IS[4](q,past);
          
          var
           future$prime=
            IS[14]
             (function(q$prime,future$prime)
               {if(IS[3](q$prime,past$prime))
                 {return future$prime;}
                else
                 {return /* :: */[0,q$prime,future$prime];}
                },
              graph[q+1],
              param[2]);
          
          return transitive(past$prime,future$prime);
          }
        else
         {return past;}
        };
    
    for(var i=0;i<=m-1;i++)
     {closure[i+1]=transitive(IS[1],/* :: */[0,i,/* [] */0])}
    
    var table=CamlPrimitive["caml_make_vect"](m,/* [] */0);
    
    My_std["List"][14]
     (function(param)
       {var q=param[1];
        
        return table[q+1]=
               /* :: */[0,
                /* tuple */[0,param[2],closure[param[3]+1]],
                table[q+1]],
               0;
        },
      transitions[1]);
    return /* tuple */[0,
            graph,
            closure,
            /* record */[0,
             closure[qi+1],
             table,
             qf,
             Hashtbl["create"](/* None */0,37)]];
    };

var build=function(x){var match=build$prime(x);return match[3];};

var
 run=
  function($staropt$star,machine,u)
   {if($staropt$star)
     {var trace=$staropt$star[1];}
    else
     {var trace=/* false */0;}
    
    var m=u["length"];
    
    var
     apply=
      function(qs,c)
       {try
         {var t=Hashtbl["find"](machine[4],c);return ISM[22](qs,t);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var
             qs$prime=
              IS[14]
               (function(q,qs$prime)
                 {return My_std["List"][19]
                          (function(qs$prime,param)
                            {if(match_character_class(param[1],c))
                              {return IS[7](qs$prime,param[2]);}
                             else
                              {return qs$prime;}
                             },
                           qs$prime,
                           machine[2][q+1]);
                  },
                qs,
                IS[1]);
            
            try
             {var t$1=Hashtbl["find"](machine[4],c);}
            catch(exn$1)
             {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
               {var t$1=ISM[1];}
              else
               {throw exn$1;}
              }
            
            Hashtbl["replace"](machine[4],c,ISM[4](qs,qs$prime,t$1));
            return qs$prime;
            }
          else
           {throw exn;}
          }
        };
    
    var
     loop=
      function(qs,i)
       {if(IS[2](qs))
         {return /* false */0;}
        else
         {if(i===m)
           {return IS[3](machine[3],qs);}
          else
           {var c=u[i];
            
            if(trace)
             {Printf["printf"]
               ([/* Format */0,
                 [/* Int */4,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* Char_literal */12,
                   32,
                   [/* Caml_char */1,
                    [/* String_literal */11," {",/* End_of_format */0]]]],
                 "%d %C {"],
                i,
                c),
              IS[13]
               (function(q)
                 {return Printf["printf"]
                          ([/* Format */0,
                            [/* Char_literal */12,
                             32,
                             [/* Int */4,
                              /* Int_d */0,
                              /* No_padding */0,
                              /* No_precision */0,
                              /* End_of_format */0]],
                            " %d"],
                           q);
                  },
                qs),
              Printf["printf"]
               ([/* Format */0,
                 [/* String_literal */11,
                  " }\n",
                  [/* Flush */10,/* End_of_format */0]],
                 " }\n%!"])}
            else
             {}
            
            var qs$prime=apply(qs,c);
            
            return loop(qs$prime,i+1);
            }
          }
        };
    
    return loop(machine[1],0);
    };

var NFA=[0,IS,ISM,build$prime,build,run];

var Succeed=CamlPrimitive["caml_set_oo_id"]([248,"Glob.Brute.Succeed",0]);

var Fail=CamlPrimitive["caml_set_oo_id"]([248,"Glob.Brute.Fail",0]);

var Too_hard=CamlPrimitive["caml_set_oo_id"]([248,"Glob.Brute.Too_hard",0]);

var
 match_pattern=
  function(counter,p,u)
   {var m=u["length"];
    
    var
     loop=
      function(param)
       {var p$1=param[3];
        
        var n=param[2];
        
        var i=param[1];
        
        if(0<=i&&0<=n&&i+n<=m)
         {}
        else
         {throw [0,
                 CamlPrimitive["caml_global_data"]["Assert_failure"],
                 [0,"glob.ml",253,8]];
          }
        
        counter[0]++;
        if(counter[1]>=brute_limit){throw Too_hard;}else{}
        
        if(typeof p$1==="number")
         {switch(p$1){case 0:return n===0;}}
        else
         {switch(p$1[0])
           {case 0:
             var match=p$1[1];
             
             var exit;
             
             if(typeof match==="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 1:
                  var cl=match[1];
                  
                  var exit$1;
                  
                  if(typeof cl==="number")
                   {if(cl!==0){exit$1=27;}else{return /* true */1;}}
                  else
                   {exit$1=27;}
                  
                  switch(exit$1)
                   {case 27:
                     var
                      check=
                       function(k)
                        {if(k===n)
                          {return /* true */1;}
                         else
                          {return match_character_class(cl,u[i+k])&&check(k+1);}
                         };
                     
                     return check(0);
                     
                    }
                  
                 default:exit=26;}}
             
             switch(exit){case 26:throw Too_hard;}
             
            case 1:return n===1&&match_character_class(p$1[1],u[i]);
            case 2:
             var p2=p$1[2];
             
             var p1=p$1[1];
             
             var
              scan=
               function(j)
                {return j<=
                        n&&
                        (loop(/* tuple */[0,i,j,p1])&&
                         loop(/* tuple */[0,i+j,n-j,p2])||
                         scan(j+1));
                 };
             
             return scan(0);
             
            case 3:
             return My_std["List"][27]
                     (function(p$prime){return loop(/* tuple */[0,i,n,p$prime]);},
                      p$1[1]);
             
            case 4:
             var v=p$1[1];
             
             var
              check$1=
               function(j){return j===n||v[j]===u[i+j]&&check$1(j+1);};
             
             return v["length"]===n&&check$1(0);
             
            }}
        };
    
    return loop(/* tuple */[0,0,m,p]);
    };

var Brute=[0,Succeed,Fail,Too_hard,match_pattern];

var fast_pattern_of_pattern=function(p){return [0,/* Brute */[0,[0,0],p]];};

var
 add_dir=
  function(dir,x)
   {if(dir)
     {var dir$1=dir[1];
      
      switch(x[0])
       {case 0:return /* Constant */[0,My_std["filename_concat"](dir$1,x[1])];
        case 1:
         return /* Pattern */[1,
                 /* Concat */[2,
                  /* Word */[4,My_std["filename_concat"](dir$1,"")],
                  x[1]]];
         
        }
      }
    else
     {return x;}
    };

var
 add_ast_dir=
  function(dir,x)
   {if(dir)
     {var slash=[/* Class */1,[/* Atom */3,[/* tuple */0,47,47]]];
      
      var any=[/* Class */1,/* True */0];
      
      var
       q=
        /* Union */[3,
         /* :: */[0,
          /* Epsilon */0,
          /* :: */[0,/* Concat */[2,slash,/* Star */[0,any]],/* [] */0]]];
      
      return /* And */[0,
              /* :: */[0,
               /* Atom */[3,
                /* Pattern */[1,
                 [0,
                  /* Brute */[0,[0,0],/* Concat */[2,/* Word */[4,dir[1]],q]]]]],
               /* :: */[0,x,/* [] */0]]];
      }
    else
     {return x;}
    };

var
 parse=
  function(dir,u)
   {var l=Lexing["from_string"](u);
    
    var tok=[0,/* None */0];
    
    var
     f=
      function(param)
       {var match=tok[1];
        
        if(match)
         {tok[1]=/* None */0;return match[1];}
        else
         {return Glob_lexer["token"](l);}
        };
    
    var
     g=
      function(t)
       {var match=tok[1];
        
        if(match)
         {throw [0,
                 Parse_error,
                 sf
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Trying to unput token ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       " while ",
                       [/* String */2,
                        /* No_padding */0,
                        [/* String_literal */11," is active",/* End_of_format */0]]]]],
                    "Trying to unput token %s while %s is active"],
                   string_of_token(t),
                   string_of_token(match[1]))];
          }
        else
         {return tok[1]=/* Some */[0,t],0;}
        };
    
    var
     read=
      function(x)
       {var y=f(/* () */0);
        
        if(CamlPrimitive["caml_equal"](x,y))
         {return /* () */0;}
        else
         {throw [0,
                 Parse_error,
                 sf
                  ([/* Format */0,
                    [/* String_literal */11,
                     "Unexpected token, expecting ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11,
                       ", got ",
                       [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                    "Unexpected token, expecting %s, got %s"],
                   string_of_token(x),
                   string_of_token(y))];
          }
        };
    
    var
     atomizer=
      function(continuation)
       {var t=f(/* () */0);
        
        var exit;
        
        if(typeof t==="number")
         {switch(t)
           {case 0:exit=8;
            case 1:exit=8;
            case 2:
             return atomizer
                     (function(x){return continuation(/* Not */[2,x]);});
             
            case 3:
             var y=parse_s(/* () */0);
             
             read(/* RPAR */4);
             return continuation(y);
             
            case 4:exit=8;
            case 5:return continuation(/* True */0);
            case 6:return continuation(/* False */1);
            case 7:exit=8;
            }
          }
        else
         {var match=add_dir(dir,t[1]);
          
          switch(match[0])
           {case 0:var a=/* Constant */[0,match[1]];
            case 1:var a=/* Pattern */[1,fast_pattern_of_pattern(match[1])];
            }
          
          return continuation(/* Atom */[3,a]);
          }
        
        switch(exit)
         {case 8:
           throw [0,
                  Parse_error,
                  sf
                   ([/* Format */0,
                     [/* String_literal */11,
                      "Unexpected token ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11," in atomizer",/* End_of_format */0]]],
                     "Unexpected token %s in atomizer"],
                    string_of_token(t))];
           
          }
        };
    
    var
     parse_s1=
      function(x)
       {var t=f(/* () */0);
        
        var exit;
        
        if(typeof t==="number")
         {if(t!==1)
           {if(t!==0){exit=10;}else{return parse_t(x);}}
          else
           {var y=parse_s(/* () */0);
            
            return /* Or */[1,/* :: */[0,x,/* :: */[0,y,/* [] */0]]];
            }
          }
        else
         {exit=10;}
        
        switch(exit){case 10:g(t);return x;}
        };
    
    var
     parse_t1=
      function(x,y)
       {var t=f(/* () */0);
        
        var exit;
        
        if(typeof t==="number")
         {if(t!==1)
           {if(t!==0)
             {exit=12;}
            else
             {return parse_t
                      (/* And */[0,/* :: */[0,x,/* :: */[0,y,/* [] */0]]]);
              }
            }
          else
           {var z=parse_s(/* () */0);
            
            return /* Or */[1,
                    /* :: */[0,
                     /* And */[0,/* :: */[0,x,/* :: */[0,y,/* [] */0]]],
                     /* :: */[0,z,/* [] */0]]];
            }
          }
        else
         {exit=12;}
        
        switch(exit)
         {case 12:
           g(t);return /* And */[0,/* :: */[0,x,/* :: */[0,y,/* [] */0]]];
          }
        };
    
    var parse_s=function(param){return atomizer(parse_s1);};
    
    var parse_t=function(x){return atomizer(parse_t1(x));};
    
    var x=parse_s(/* () */0);
    
    read(/* EOF */7);
    return add_ast_dir(dir,x);
    };

var
 $$eval=
  function(g,u)
   {return Bool["eval"]
            (function(param)
              {switch(param[0])
                {case 0:return CamlPrimitive["caml_string_equal"](u,param[1]);
                 case 1:
                  var kind=param[1];
                  
                  var match=kind[1];
                  
                  switch(match[0])
                   {case 0:
                     var p=match[2];
                     
                     var count=match[1];
                     
                     var
                      do_nfa=
                       function(param$1)
                        {var m=NFA[4](p);
                         
                         kind[1]=/* Machine */[1,m];
                         return NFA[5](/* None */0,m,u);
                         };
                     
                     if(count[1]>=brute_limit)
                      {return do_nfa(/* () */0);}
                     else
                      {try
                        {return Brute[4](count,p,u);}
                       catch(exn)
                        {if(exn===Brute[3])
                          {return do_nfa(/* () */0);}
                         else
                          {throw exn;}
                         }
                       }
                     
                    case 1:return NFA[5](/* None */0,match[1],u);
                    }
                  
                 }
               },
             g);
    };

module["exports"]=
{"parse":parse,
 "Parse_error":Parse_error,
 "eval":$$eval,
 "fast_pattern_of_pattern":fast_pattern_of_pattern};

