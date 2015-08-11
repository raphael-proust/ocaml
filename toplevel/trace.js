// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var Printtyp=require("Printtyp");
var Pervasives=require("Pervasives");
var Predef=require("Predef");
var Toploop=require("Toploop");
var Format=require("Format");
var Misc=require("Misc");


var traced_functions=[0,0];

var
 is_traced=
  function(clos)
   {var
     is_traced$1=
      function(param)
       {if(param)
         {var tf=param[1];
          
          if(tf[2]=clos)
           {return /* Some */[0,tf[1]];}
          else
           {return is_traced$1(param[2]);}
          }
        else
         {return 0;}
        };
    
    return is_traced$1(traced_functions[1]);
    };

var get_code_pointer=function(cls){return cls[0];};

var set_code_pointer=function(cls,ptr){return cls[0]=ptr,0;};

var
 invoke_traced_function=
  function(codeptr,env,arg)
   {return "unknown primitive:caml_invoke_traced_function";};

var
 print_label=
  function(ppf,l)
   {if("unknown primitive:caml_string_notequal")
     {return Format["fprintf"](ppf,[0,[2,0,[12,58,0]],"%s:"],l);}
    else
     {return 0;}
    };

var
 instrument_result=
  function(env,name,ppf,clos_typ)
   {var match=Ctype["repr"](Ctype["expand_head"](env,clos_typ))[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:
         var t2=match[3];
         
         var t1=match[2];
         
         var l=match[1];
         
         switch(name)
          {case 0:
            var starred_name=/* Lident */[0,Pervasives["^"](name[1],"*")];
           case 1:
            var
             starred_name=
              /* Ldot */[1,name[1],Pervasives["^"](name[2],"*")];
            
           case 2:
            var starred_name=Misc["fatal_error"]("Trace.instrument_result");
           }
         
         var trace_res=instrument_result(env,starred_name,ppf,t2);
         
         return function(clos_val)
          {return function(arg)
            {if(!Toploop["may_trace"][1])
              {return clos_val(arg);}
             else
              {Toploop["may_trace"][1]=0,0;
               try
                {Format["fprintf"]
                  (ppf,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [15,[11," <--",[17,[0,"@ ",1,0],[15,[15,[17,0,[17,4,0]]]]]]]],
                    "@[<2>%a <--@ %a%a@]@."],
                   Printtyp["longident"],
                   starred_name,
                   print_label,
                   l,
                   Toploop["print_value"](Toploop["toplevel_env"][1],arg),
                   t1);
                 Toploop["may_trace"][1]=1,0;
                 var res=clos_val(arg);
                 
                 Toploop["may_trace"][1]=0,0;
                 Format["fprintf"]
                  (ppf,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [15,[11," -->",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]],
                    "@[<2>%a -->@ %a@]@."],
                   Printtyp["longident"],
                   starred_name,
                   Toploop["print_value"](Toploop["toplevel_env"][1],res),
                   t2);
                 Toploop["may_trace"][1]=1,0;
                 return trace_res(res);
                 }
               catch(exn)
                {Toploop["may_trace"][1]=0,0;
                 Format["fprintf"]
                  (ppf,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [15,[11," raises",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]],
                    "@[<2>%a raises@ %a@]@."],
                   Printtyp["longident"],
                   starred_name,
                   Toploop["print_value"](Toploop["toplevel_env"][1],exn),
                   Predef["type_exn"]);
                 Toploop["may_trace"][1]=1,0;
                 throw exn;
                 }
               }
             };
           };
         
        default:exit=13;}}
    
    switch(exit){case 13:return function(v){return v;};}
    };

var Dummy="unknown primitive:caml_set_oo_id";


var
 instrument_closure=
  function(env,name,ppf,clos_typ)
   {var match=Ctype["repr"](Ctype["expand_head"](env,clos_typ))[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:
         var t2=match[3];
         
         var t1=match[2];
         
         var l=match[1];
         
         var trace_res=instrument_result(env,name,ppf,t2);
         
         return function(actual_code,closure,arg)
          {if(!Toploop["may_trace"][1])
            {try
              {return invoke_traced_function(actual_code,closure,arg);}
             catch(exn)
              {if(exn=Dummy)
                {throw [0,Assert_failure,[0,"toplevel/trace.ml",109,24]];}
               else
                {throw exn;}
               }
             }
           else
            {Toploop["may_trace"][1]=0,0;
             try
              {Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [15,[11," <--",[17,[0,"@ ",1,0],[15,[15,[17,0,[17,4,0]]]]]]]],
                  "@[<2>%a <--@ %a%a@]@."],
                 Printtyp["longident"],
                 name,
                 print_label,
                 l,
                 Toploop["print_value"](Toploop["toplevel_env"][1],arg),
                 t1);
               Toploop["may_trace"][1]=1,0;
               var res=invoke_traced_function(actual_code,closure,arg);
               
               Toploop["may_trace"][1]=0,0;
               Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [15,[11," -->",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]],
                  "@[<2>%a -->@ %a@]@."],
                 Printtyp["longident"],
                 name,
                 Toploop["print_value"](Toploop["toplevel_env"][1],res),
                 t2);
               Toploop["may_trace"][1]=1,0;
               return trace_res(res);
               }
             catch(exn$1)
              {Toploop["may_trace"][1]=0,0;
               Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [15,[11," raises",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]],
                  "@[<2>%a raises@ %a@]@."],
                 Printtyp["longident"],
                 name,
                 Toploop["print_value"](Toploop["toplevel_env"][1],exn$1),
                 Predef["type_exn"]);
               Toploop["may_trace"][1]=1,0;
               throw exn$1;
               }
             }
           };
         
        default:exit=7;}}
    
    switch(exit)
     {case 7:throw [0,Assert_failure,[0,"toplevel/trace.ml",134,9]];}
    };

var
 find_traced_closure=
  function(clos,param)
   {if(param)
     {var f=param[1];
      
      if(f[2]=clos){return f;}else{return find_traced_closure(clos,param[2]);}
      }
    else
     {return Misc["fatal_error"]("Trace.find_traced_closure");}
    };

var
 print_trace=
  function(clos,arg)
   {var f=find_traced_closure(clos,traced_functions[1]);
    
    return f[4](f[3],clos,arg);
    };

module["exports"]=
{"traced_functions":traced_functions,
 "is_traced":is_traced,
 "get_code_pointer":get_code_pointer,
 "set_code_pointer":set_code_pointer,
 "instrument_closure":instrument_closure,
 "print_trace":print_trace};

