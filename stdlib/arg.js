// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Printf=require("./printf.js");
var Buffer=require("./buffer.js");
var CamlPrimitive=require("./camlPrimitive.js");
var Sys=require("./sys.js");


var Bad=CamlPrimitive["caml_set_oo_id"]([248,"Arg.Bad",0]);

var Help=CamlPrimitive["caml_set_oo_id"]([248,"Arg.Help",0]);

var Stop=CamlPrimitive["caml_set_oo_id"]([248,"Arg.Stop",0]);

var
 assoc3=
  function(x,l)
   {if(l)
     {var match=l[1];
      
      return CamlPrimitive["caml_equal"](match[1],x)?match[2]:assoc3(x,l[2])}
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"]}
    };

var
 make_symlist=
  function(prefix,sep,suffix,l)
   {return l
            ?Pervasives["^"]
              (List["fold_left"]
                (function(x,y)
                  {return Pervasives["^"](x,Pervasives["^"](sep,y))},
                 Pervasives["^"](prefix,l[1]),
                 l[2]),
               suffix)
            :"<none>"};

var
 print_spec=
  function(buf,param)
   {var doc=param[3];
    
    var spec=param[2];
    
    var key=param[1];
    
    if(doc["length"]>0)
     {switch(spec[0])
       {case 11:
         return Printf["bprintf"]
                 (buf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "  ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,
                       /* No_padding */0,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,10,/* End_of_format */0]]]]]],
                   "  %s %s%s\n"],
                  key,
                  make_symlist("{","|","}",spec[1]),
                  doc);
        default:
         return Printf["bprintf"]
                 (buf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "  ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,10,/* End_of_format */0]]]]],
                   "  %s %s\n"],
                  key,
                  doc)}
      }
    else
     {return 0}
    };

var help_action=function(param){throw [0,Stop,[/* Unknown */0,"-help"]]};

var
 add_help=
  function(speclist)
   {var add1;
    try
     {assoc3("-help",speclist);add1=/* [] */0;}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {add1=
        /* :: */[0,
         /* tuple */[0,
          "-help",
          /* Unit */[0,help_action],
          " Display this list of options"],
         /* [] */0];
        }
      else
       {throw exn}
      }
    
    var add2;
    try
     {assoc3("--help",speclist);add2=/* [] */0;}
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {add2=
        /* :: */[0,
         /* tuple */[0,
          "--help",
          /* Unit */[0,help_action],
          " Display this list of options"],
         /* [] */0];
        }
      else
       {throw exn$1}
      }
    
    return Pervasives["@"](speclist,Pervasives["@"](add1,add2))};

var
 usage_b=
  function(buf,speclist,errmsg)
   {Printf["bprintf"]
     (buf,
      [/* Format */0,
       [/* String */2,
        /* No_padding */0,
        [/* Char_literal */12,10,/* End_of_format */0]],
       "%s\n"],
      errmsg);
    return List["iter"]
            (function(param){return print_spec(buf,param)},add_help(speclist))};

var
 usage_string=
  function(speclist,errmsg)
   {var b=Buffer["create"](200);
    
    usage_b(b,speclist,errmsg);
    return Buffer["contents"](b)};

var
 usage=
  function(speclist,errmsg)
   {return Printf["eprintf"]
            ([/* Format */0,
              [/* String */2,/* No_padding */0,/* End_of_format */0],
              "%s"],
             usage_string(speclist,errmsg))};

var current=[0,0];

var
 parse_argv_dynamic=
  function($staropt$star,argv,speclist,anonfun,errmsg)
   {var current$1=$staropt$star?$staropt$star[1]:current;
    
    var l=/* -1 for tag */argv["length"]-1;
    
    var b=Buffer["create"](200);
    
    var initpos=current$1[1];
    
    var
     stop=
      function(error)
       {var progname=initpos<l?argv[initpos+1]:"(?)";
        
        switch(error[0])
         {case 0:
           var s=error[1];
           
           var exit;
           
           switch(s){case "--help":break;case "-help":break;default:exit=48;}
           
           switch(exit)
            {case 48:
              Printf["bprintf"]
               (b,
                [/* Format */0,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,
                   ": unknown option '",
                   [/* String */2,
                    /* No_padding */0,
                    [/* String_literal */11,"'.\n",/* End_of_format */0]]]],
                 "%s: unknown option '%s'.\n"],
                progname,
                s);
              break
             }
           break;
          case 1:
           Printf["bprintf"]
            (b,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                ": wrong argument '",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,
                  "'; option '",
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    "' expects ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,".\n",/* End_of_format */0]]]]]]]],
              "%s: wrong argument '%s'; option '%s' expects %s.\n"],
             progname,
             error[2],
             error[1],
             error[3]);
           break;
          case 2:
           Printf["bprintf"]
            (b,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                ": option '",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,
                  "' needs an argument.\n",
                  /* End_of_format */0]]]],
              "%s: option '%s' needs an argument.\n"],
             progname,
             error[1]);
           break;
          case 3:
           Printf["bprintf"]
            (b,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                ": ",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,".\n",/* End_of_format */0]]]],
              "%s: %s.\n"],
             progname,
             error[1]);
           break
          }
        
        usage_b(b,speclist[1],errmsg);
        if
         (CamlPrimitive["caml_equal"](error,[/* Unknown */0,"-help"])||
          CamlPrimitive["caml_equal"](error,[/* Unknown */0,"--help"]))
         {throw [0,Help,Buffer["contents"](b)]}
        else
         {throw [0,Bad,Buffer["contents"](b)]}
        };
    
    current$1[0]++;
    while(current$1[1]<l)
     {var s=argv[current$1[1]+1];
      
      if(s["length"]>=1&&s["charCodeAt"](0)===45)
       {var action;
        try
         {action=assoc3(s,speclist[1]);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {action=stop(/* Unknown */[0,s]);}
          else
           {throw exn}
          }
        
        try
         {var
           treat_action=
            function(param)
             {var exit;
              
              switch(param[0])
               {case 0:return param[1](/* () */0);
                case 1:
                 if(current$1[1]+1<l)
                  {var arg=argv[current$1[1]+1+1];
                   
                   try
                    {param[1](Pervasives["bool_of_string"](arg))}
                   catch(exn$1)
                    {var exit$1;
                     
                     if
                      (exn$1[1]===
                       CamlPrimitive["caml_global_data"]["Invalid_argument"])
                      {switch(exn$1[2])
                        {case "bool_of_string":
                          throw [0,Stop,/* Wrong */[1,s,arg,"a boolean"]];
                         default:exit$1=33;}
                       }
                     else
                      {exit$1=33;}
                     
                     switch(exit$1){case 33:throw exn$1}
                     }
                   
                   return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 2:return param[1][1]=/* true */1,0;
                case 3:return param[1][1]=/* false */0,0;
                case 4:
                 if(current$1[1]+1<l)
                  {param[1](argv[current$1[1]+1+1]);return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 5:
                 if(current$1[1]+1<l)
                  {param[1][1]=argv[current$1[1]+1+1];return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 6:
                 if(current$1[1]+1<l)
                  {var arg$1=argv[current$1[1]+1+1];
                   
                   try
                    {param[1](CamlPrimitive["caml_int_of_string"](arg$1))}
                   catch(exn$2)
                    {var exit$2;
                     
                     if(exn$2[1]===CamlPrimitive["caml_global_data"]["Failure"])
                      {switch(exn$2[2])
                        {case "int_of_string":
                          throw [0,Stop,/* Wrong */[1,s,arg$1,"an integer"]];
                         default:exit$2=36;}
                       }
                     else
                      {exit$2=36;}
                     
                     switch(exit$2){case 36:throw exn$2}
                     }
                   
                   return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 7:
                 if(current$1[1]+1<l)
                  {var arg$2=argv[current$1[1]+1+1];
                   
                   try
                    {param[1][1]=CamlPrimitive["caml_int_of_string"](arg$2)}
                   catch(exn$3)
                    {var exit$3;
                     
                     if(exn$3[1]===CamlPrimitive["caml_global_data"]["Failure"])
                      {switch(exn$3[2])
                        {case "int_of_string":
                          throw [0,Stop,/* Wrong */[1,s,arg$2,"an integer"]];
                         default:exit$3=38;}
                       }
                     else
                      {exit$3=38;}
                     
                     switch(exit$3){case 38:throw exn$3}
                     }
                   
                   return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 8:
                 if(current$1[1]+1<l)
                  {var arg$3=argv[current$1[1]+1+1];
                   
                   try
                    {param[1](CamlPrimitive["caml_float_of_string"](arg$3))}
                   catch(exn$4)
                    {var exit$4;
                     
                     if(exn$4[1]===CamlPrimitive["caml_global_data"]["Failure"])
                      {switch(exn$4[2])
                        {case "float_of_string":
                          throw [0,Stop,/* Wrong */[1,s,arg$3,"a float"]];
                         default:exit$4=40;}
                       }
                     else
                      {exit$4=40;}
                     
                     switch(exit$4){case 40:throw exn$4}
                     }
                   
                   return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 9:
                 if(current$1[1]+1<l)
                  {var arg$4=argv[current$1[1]+1+1];
                   
                   try
                    {param[1][1]=CamlPrimitive["caml_float_of_string"](arg$4)}
                   catch(exn$5)
                    {var exit$5;
                     
                     if(exn$5[1]===CamlPrimitive["caml_global_data"]["Failure"])
                      {switch(exn$5[2])
                        {case "float_of_string":
                          throw [0,Stop,/* Wrong */[1,s,arg$4,"a float"]];
                         default:exit$5=42;}
                       }
                     else
                      {exit$5=42;}
                     
                     switch(exit$5){case 42:throw exn$5}
                     }
                   
                   return current$1[0]++}
                 else
                  {exit=44;}
                 break;
                case 10:return List["iter"](treat_action,param[1]);
                case 11:
                 var symb=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg$5=argv[current$1[1]+1+1];
                   
                   if(List["mem"](arg$5,symb))
                    {param[2](argv[current$1[1]+1+1]);return current$1[0]++}
                   else
                    {throw [0,
                            Stop,
                            /* Wrong */[1,
                             s,
                             arg$5,
                             Pervasives["^"]("one of: ",make_symlist(""," ","",symb))]]}
                   }
                 else
                  {exit=44;}
                 break;
                case 12:
                 var f=param[1];
                 
                 while(current$1[1]<l-1)
                  {f(argv[current$1[1]+1+1]),current$1[0]++}
                 return 0
                }
              
              switch(exit){case 44:throw [0,Stop,/* Missing */[2,s]]}
              };
          
          treat_action(action)}
        catch(exn$1)
         {if(exn$1[1]===Bad)
           {stop(/* Message */[3,exn$1[2]])}
          else
           {if(exn$1[1]===Stop){stop(exn$1[2])}else{throw exn$1}}
          }
        
        current$1[0]++}
      else
       {try
         {anonfun(s)}
        catch(exn$2)
         {if(exn$2[1]===Bad){stop(/* Message */[3,exn$2[2]])}else{throw exn$2}
          }
        
        current$1[0]++}
      }
    return 0};

var
 parse_argv=
  function($staropt$star,argv,speclist,anonfun,errmsg)
   {var current$1=$staropt$star?$staropt$star[1]:current;
    
    return parse_argv_dynamic
            (/* Some */[0,current$1],argv,[0,speclist],anonfun,errmsg)};

var
 parse=
  function(l,f,msg)
   {try
     {return parse_argv(/* None */0,Sys["argv"],l,f,msg)}
    catch(exn)
     {if(exn[1]===Bad)
       {Printf["eprintf"]
         ([/* Format */0,
           [/* String */2,/* No_padding */0,/* End_of_format */0],
           "%s"],
          exn[2]);
        return Pervasives["exit"](2)}
      else
       {if(exn[1]===Help)
         {Printf["printf"]
           ([/* Format */0,
             [/* String */2,/* No_padding */0,/* End_of_format */0],
             "%s"],
            exn[2]);
          return Pervasives["exit"](0)}
        else
         {throw exn}
        }
      }
    };

var
 parse_dynamic=
  function(l,f,msg)
   {try
     {return parse_argv_dynamic(/* None */0,Sys["argv"],l,f,msg)}
    catch(exn)
     {if(exn[1]===Bad)
       {Printf["eprintf"]
         ([/* Format */0,
           [/* String */2,/* No_padding */0,/* End_of_format */0],
           "%s"],
          exn[2]);
        return Pervasives["exit"](2)}
      else
       {if(exn[1]===Help)
         {Printf["printf"]
           ([/* Format */0,
             [/* String */2,/* No_padding */0,/* End_of_format */0],
             "%s"],
            exn[2]);
          return Pervasives["exit"](0)}
        else
         {throw exn}
        }
      }
    };

var
 second_word=
  function(s)
   {var len=s["length"];
    
    var
     loop=
      function(n){return n>=len?len:s["charCodeAt"](n)===32?loop(n+1):n};
    
    try
     {return loop($$String["index"](s,32))}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return len}
      else
       {throw exn}
      }
    };

var
 max_arg_len=
  function(cur,param)
   {var kwd=param[1];
    
    switch(param[2][0])
     {case 11:return Pervasives["max"](cur,kwd["length"]);
      default:
       return Pervasives["max"](cur,kwd["length"]+second_word(param[3]))}
    };

var
 add_padding=
  function(len,ksd)
   {var spec=ksd[2];
    
    var kwd=ksd[1];
    
    switch(ksd[3])
     {case "":return ksd;
      default:
       switch(spec[0])
        {case 11:
          var msg=ksd[3];
          
          var cutcol=second_word(msg);
          
          var spaces=$$String["make"](Pervasives["max"](0,len-cutcol)+3,32);
          
          return /* tuple */[0,
                  kwd,
                  spec,
                  Pervasives["^"]("\n",Pervasives["^"](spaces,msg))];
         default:
          var msg$1=ksd[3];
          
          var cutcol$1=second_word(msg$1);
          
          var kwd_len=kwd["length"];
          
          var diff=len-kwd_len-cutcol$1;
          
          if(diff<=0)
           {return /* tuple */[0,kwd,spec,msg$1]}
          else
           {var spaces$1=$$String["make"](diff,32);
            
            var prefix=$$String["sub"](msg$1,0,cutcol$1);
            
            var
             suffix=
              $$String["sub"](msg$1,cutcol$1,msg$1["length"]-cutcol$1);
            
            return /* tuple */[0,
                    kwd,
                    spec,
                    Pervasives["^"](prefix,Pervasives["^"](spaces$1,suffix))]}
          }
       }
    };

var
 align=
  function($staropt$star,speclist)
   {var limit=$staropt$star?$staropt$star[1]:Pervasives["max_int"];
    
    var completed=add_help(speclist);
    
    var len=List["fold_left"](max_arg_len,0,completed);
    
    var len$1=Pervasives["min"](len,limit);
    
    return List["map"]
            (function(param){return add_padding(len$1,param)},completed)};

module["exports"]=
{"parse":parse,
 "parse_dynamic":parse_dynamic,
 "parse_argv":parse_argv,
 "parse_argv_dynamic":parse_argv_dynamic,
 "Help":Help,
 "Bad":Bad,
 "usage":usage,
 "usage_string":usage_string,
 "align":align,
 "current":current};

