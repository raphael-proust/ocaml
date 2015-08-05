// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Buffer=require("Buffer");
var Sys=require("Sys");


var Bad="unknown primitive:caml_set_oo_id";

var Help="unknown primitive:caml_set_oo_id";

var Stop="unknown primitive:caml_set_oo_id";

var
 assoc3=
  function(x,l)
   {if(l)
     {var t=l[2];
      
      var match=l[1];
      
      var y2=match[2];
      
      var y1=match[1];
      
      if("unknown primitive:caml_equal")
       {return y2;}
      else
       {var t$1=t;return assoc3(x,t$1);}
      }
    else
     {throw Not_found;}
    };

var
 make_symlist=
  function(prefix,sep,suffix,l)
   {if(l)
     {var t=l[2];
      
      var h=l[1];
      
      return Pervasives["^"]
              (List["fold_left"]
                (function(x,y)
                  {return Pervasives["^"](x,Pervasives["^"](sep,y));},
                 Pervasives["^"](prefix,h),
                 t),
               suffix);
      }
    else
     {return "<none>";}
    };

var
 print_spec=
  function(buf,param)
   {var doc=param[3];
    
    var spec=param[2];
    
    var key=param[1];
    
    if(doc["length"]>0)
     {switch(spec)
       {case 11:
         var l=spec[1];
         
         return Printf["bprintf"]
                 (buf,
                  [0,
                   [11,"  ",[2,0,[12,32,[2,0,[2,0,[12,10,0]]]]]],
                   "  %s %s%s\n"],
                  key,
                  make_symlist("{","|","}",l),
                  doc);
         
        default:
         return Printf["bprintf"]
                 (buf,
                  [0,[11,"  ",[2,0,[12,32,[2,0,[12,10,0]]]]],"  %s %s\n"],
                  key,
                  doc);
         }
      }
    else
     {return 0;}
    };

var help_action=function(param){throw [0,Stop,[0,"-help"]];};

var
 add_help=
  function(speclist)
   {try
     {var add1=0;}
    catch(exn)
     {if(exn=Not_found)
       {var
         add1=
          [0,[0,"-help",[0,help_action]," Display this list of options"],0];
        }
      else
       {throw exn;}
      }
    
    try
     {var add2=0;}
    catch(exn$1)
     {if(exn$1=Not_found)
       {var
         add2=
          [0,[0,"--help",[0,help_action]," Display this list of options"],0];
        }
      else
       {throw exn$1;}
      }
    
    return Pervasives["@"](speclist,Pervasives["@"](add1,add2));
    };

var
 usage_b=
  function(buf,speclist,errmsg)
   {Printf["bprintf"](buf,[0,[2,0,[12,10,0]],"%s\n"],errmsg);
    return List["iter"](print_spec(buf),add_help(speclist));
    };

var
 usage_string=
  function(speclist,errmsg)
   {var b=Buffer["create"](200);
    
    usage_b(b,speclist,errmsg);
    return Buffer["contents"](b);
    };

var
 usage=
  function(speclist,errmsg)
   {return Printf["eprintf"]([0,[2,0,0],"%s"],usage_string(speclist,errmsg));};

var current=[0,0];

var
 parse_argv_dynamic=
  function($staropt$star,argv,speclist,anonfun,errmsg)
   {if($staropt$star)
     {var $starsth$star=$staropt$star[1];var current$1=$starsth$star;}
    else
     {var current$1=current;}
    
    var l=argv["length"];
    
    var b=Buffer["create"](200);
    
    var initpos=current$1[1];
    
    var
     stop=
      function(error)
       {if(initpos<l){var progname=argv[initpos];}else{var progname="(?)";}
        
        switch(error)
         {case 0:
           var s=error[1];
           
           var exit;
           
           switch(s){case "--help":case "-help":default:exit=48;}
           
           switch(exit)
            {case 48:
              Printf["bprintf"]
               (b,
                [0,
                 [2,0,[11,": unknown option '",[2,0,[11,"'.\n",0]]]],
                 "%s: unknown option '%s'.\n"],
                progname,
                s)
             }
           
          case 1:
           var expected=error[3];
           
           var arg=error[2];
           
           var opt=error[1];
           
           Printf["bprintf"]
            (b,
             [0,
              [2,
               0,
               [11,
                ": wrong argument '",
                [2,
                 0,
                 [11,"'; option '",[2,0,[11,"' expects ",[2,0,[11,".\n",0]]]]]]]],
              "%s: wrong argument '%s'; option '%s' expects %s.\n"],
             progname,
             arg,
             opt,
             expected);
          case 2:
           var s$1=error[1];
           
           Printf["bprintf"]
            (b,
             [0,
              [2,0,[11,": option '",[2,0,[11,"' needs an argument.\n",0]]]],
              "%s: option '%s' needs an argument.\n"],
             progname,
             s$1);
          case 3:
           var s$2=error[1];
           
           Printf["bprintf"]
            (b,
             [0,[2,0,[11,": ",[2,0,[11,".\n",0]]]],"%s: %s.\n"],
             progname,
             s$2)
          }
        
        usage_b(b,speclist[1],errmsg);
        if("unknown primitive:caml_equal"||"unknown primitive:caml_equal")
         {throw [0,Help,Buffer["contents"](b)];}
        else
         {throw [0,Bad,Buffer["contents"](b)];}
        };
    
    current$1[0]++;
    while(current$1[1]<l)
     {var s=argv[current$1[1]];
      
      if(s["length"]>=1&&(s[0]=45))
       {try
         {var action=assoc3(s,speclist[1]);}
        catch(exn){if(exn=Not_found){var action=stop([0,s]);}else{throw exn;}}
        
        try
         {var
           treat_action=
            function(param)
             {var exit;
              
              switch(param)
               {case 0:var f=param[1];return f(0);
                case 1:
                 var f$1=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg=argv[current$1[1]+1];
                   
                   try
                    {f$1(Pervasives["bool_of_string"](arg))}
                   catch(exn$1)
                    {var exit$1;
                     
                     var tag=exn$1[1];
                     
                     if(tag=Invalid_argument)
                      {var match=exn$1[2];
                       
                       switch(match)
                        {case "bool_of_string":throw [0,Stop,[1,s,arg,"a boolean"]];
                         default:exit$1=33;}
                       }
                     else
                      {exit$1=33;}
                     
                     switch(exit$1){case 33:throw exn$1;}
                     }
                   
                   return current$1[0]++;
                   }
                 else
                  {exit=44;}
                 
                case 2:var r=param[1];return r[1]=1,0;
                case 3:var r$1=param[1];return r$1[1]=0,0;
                case 4:
                 var f$2=param[1];
                 
                 if(current$1[1]+1<l)
                  {f$2(argv[current$1[1]+1]);return current$1[0]++;}
                 else
                  {exit=44;}
                 
                case 5:
                 var r$2=param[1];
                 
                 if(current$1[1]+1<l)
                  {r$2[1]=argv[current$1[1]+1],0;return current$1[0]++;}
                 else
                  {exit=44;}
                 
                case 6:
                 var f$3=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg$1=argv[current$1[1]+1];
                   
                   try
                    {f$3("unknown primitive:caml_int_of_string")}
                   catch(exn$2)
                    {var exit$2;
                     
                     var tag$1=exn$2[1];
                     
                     if(tag$1=Failure)
                      {var match$1=exn$2[2];
                       
                       switch(match$1)
                        {case "int_of_string":
                          throw [0,Stop,[1,s,arg$1,"an integer"]];
                         default:exit$2=36;}
                       }
                     else
                      {exit$2=36;}
                     
                     switch(exit$2){case 36:throw exn$2;}
                     }
                   
                   return current$1[0]++;
                   }
                 else
                  {exit=44;}
                 
                case 7:
                 var r$3=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg$2=argv[current$1[1]+1];
                   
                   try
                    {r$3[1]="unknown primitive:caml_int_of_string",0}
                   catch(exn$3)
                    {var exit$3;
                     
                     var tag$2=exn$3[1];
                     
                     if(tag$2=Failure)
                      {var match$2=exn$3[2];
                       
                       switch(match$2)
                        {case "int_of_string":
                          throw [0,Stop,[1,s,arg$2,"an integer"]];
                         default:exit$3=38;}
                       }
                     else
                      {exit$3=38;}
                     
                     switch(exit$3){case 38:throw exn$3;}
                     }
                   
                   return current$1[0]++;
                   }
                 else
                  {exit=44;}
                 
                case 8:
                 var f$4=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg$3=argv[current$1[1]+1];
                   
                   try
                    {f$4("unknown primitive:caml_float_of_string")}
                   catch(exn$4)
                    {var exit$4;
                     
                     var tag$3=exn$4[1];
                     
                     if(tag$3=Failure)
                      {var match$3=exn$4[2];
                       
                       switch(match$3)
                        {case "float_of_string":
                          throw [0,Stop,[1,s,arg$3,"a float"]];
                         default:exit$4=40;}
                       }
                     else
                      {exit$4=40;}
                     
                     switch(exit$4){case 40:throw exn$4;}
                     }
                   
                   return current$1[0]++;
                   }
                 else
                  {exit=44;}
                 
                case 9:
                 var r$4=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg$4=argv[current$1[1]+1];
                   
                   try
                    {r$4[1]="unknown primitive:caml_float_of_string",0}
                   catch(exn$5)
                    {var exit$5;
                     
                     var tag$4=exn$5[1];
                     
                     if(tag$4=Failure)
                      {var match$4=exn$5[2];
                       
                       switch(match$4)
                        {case "float_of_string":
                          throw [0,Stop,[1,s,arg$4,"a float"]];
                         default:exit$5=42;}
                       }
                     else
                      {exit$5=42;}
                     
                     switch(exit$5){case 42:throw exn$5;}
                     }
                   
                   return current$1[0]++;
                   }
                 else
                  {exit=44;}
                 
                case 10:
                 var specs=param[1];return List["iter"](treat_action,specs);
                case 11:
                 var f$5=param[2];
                 
                 var symb=param[1];
                 
                 if(current$1[1]+1<l)
                  {var arg$5=argv[current$1[1]+1];
                   
                   if(List["mem"](arg$5,symb))
                    {f$5(argv[current$1[1]+1]);return current$1[0]++;}
                   else
                    {throw [0,
                            Stop,
                            [1,
                             s,
                             arg$5,
                             Pervasives["^"]("one of: ",make_symlist(""," ","",symb))]];
                     }
                   }
                 else
                  {exit=44;}
                 
                case 12:
                 var f$6=param[1];
                 
                 while(current$1[1]<l-1)
                  {f$6(argv[current$1[1]+1]),current$1[0]++}
                 return 0;
                 
                }
              
              switch(exit){case 44:throw [0,Stop,[2,s]];}
              };
          
          treat_action(action)}
        catch(exn$1)
         {var tag=exn$1[1];
          
          if(tag=Bad)
           {var m=exn$1[2];stop([3,m])}
          else
           {var tag$1=exn$1[1];
            
            if(tag$1=Stop){var e=exn$1[2];stop(e)}else{throw exn$1;}
            }
          }
        
        current$1[0]++}
      else
       {try
         {anonfun(s)}
        catch(exn$2)
         {var tag$2=exn$2[1];
          
          if(tag$2=Bad){var m$1=exn$2[2];stop([3,m$1])}else{throw exn$2;}
          }
        
        current$1[0]++}
      }
    return 0;
    };

var
 parse_argv=
  function($staropt$star,argv,speclist,anonfun,errmsg)
   {if($staropt$star)
     {var $starsth$star=$staropt$star[1];var current$1=$starsth$star;}
    else
     {var current$1=current;}
    
    return parse_argv_dynamic([0,current$1],argv,[0,speclist],anonfun,errmsg);
    };

var
 parse=
  function(l,f,msg)
   {try
     {return parse_argv(0,Sys["argv"],l,f,msg);}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Bad)
       {var msg$1=exn[2];
        
        Printf["eprintf"]([0,[2,0,0],"%s"],msg$1);
        return Pervasives["exit"](2);
        }
      else
       {var tag$1=exn[1];
        
        if(tag$1=Help)
         {var msg$2=exn[2];
          
          Printf["printf"]([0,[2,0,0],"%s"],msg$2);
          return Pervasives["exit"](0);
          }
        else
         {throw exn;}
        }
      }
    };

var
 parse_dynamic=
  function(l,f,msg)
   {try
     {return parse_argv_dynamic(0,Sys["argv"],l,f,msg);}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Bad)
       {var msg$1=exn[2];
        
        Printf["eprintf"]([0,[2,0,0],"%s"],msg$1);
        return Pervasives["exit"](2);
        }
      else
       {var tag$1=exn[1];
        
        if(tag$1=Help)
         {var msg$2=exn[2];
          
          Printf["printf"]([0,[2,0,0],"%s"],msg$2);
          return Pervasives["exit"](0);
          }
        else
         {throw exn;}
        }
      }
    };

var
 second_word=
  function(s)
   {var len=s["length"];
    
    var
     loop=
      function(n)
       {if(n>=len)
         {return len;}
        else
         {if(s[n]=32){return loop(n+1);}else{return n;}}
        };
    
    try
     {return loop($$String["index"](s,32));}
    catch(exn){if(exn=Not_found){return len;}else{throw exn;}}
    };

var
 max_arg_len=
  function(cur,param)
   {var doc=param[3];
    
    var spec=param[2];
    
    var kwd=param[1];
    
    switch(spec)
     {case 11:return Pervasives["max"](cur,kwd["length"]);
      default:return Pervasives["max"](cur,kwd["length"]+second_word(doc));}
    };

var
 add_padding=
  function(len,ksd)
   {var spec=ksd[2];
    
    var kwd=ksd[1];
    
    var match=ksd[3];
    
    switch(match)
     {case "":return ksd;
      default:
       switch(spec)
        {case 11:
          var msg=ksd[3];
          
          var cutcol=second_word(msg);
          
          var spaces=$$String["make"](Pervasives["max"](0,len-cutcol)+3,32);
          
          return [0,
                  kwd,
                  spec,
                  Pervasives["^"]("\n",Pervasives["^"](spaces,msg))];
          
         default:
          var spec$1=spec;
          
          var kwd$1=kwd;
          
          var msg$1=ksd[3];
          
          var cutcol$1=second_word(msg$1);
          
          var kwd_len=kwd$1["length"];
          
          var diff=len-kwd_len-cutcol$1;
          
          if(diff<=0)
           {return [0,kwd$1,spec$1,msg$1];}
          else
           {var spaces$1=$$String["make"](diff,32);
            
            var prefix=$$String["sub"](msg$1,0,cutcol$1);
            
            var
             suffix=
              $$String["sub"](msg$1,cutcol$1,msg$1["length"]-cutcol$1);
            
            return [0,
                    kwd$1,
                    spec$1,
                    Pervasives["^"](prefix,Pervasives["^"](spaces$1,suffix))];
            }
          }
       }
    };

var
 align=
  function($staropt$star,speclist)
   {if($staropt$star)
     {var $starsth$star=$staropt$star[1];var limit=$starsth$star;}
    else
     {var limit=Pervasives["max_int"];}
    
    var completed=add_help(speclist);
    
    var len=List["fold_left"](max_arg_len,0,completed);
    
    var len$1=Pervasives["min"](len,limit);
    
    return List["map"](add_padding(len$1),completed);
    };

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

