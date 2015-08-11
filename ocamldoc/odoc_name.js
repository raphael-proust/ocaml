// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Pervasives=require("Pervasives");
var List=require("List");
var Set=require("Set");
var Path=require("Path");
var Buffer=require("Buffer");
var Str=require("Str");
var Odoc_misc=require("Odoc_misc");
var Ident=require("Ident");


var
 infix_chars=
  /* :: */[0,
   124,
   /* :: */[0,
    60,
    /* :: */[0,
     62,
     /* :: */[0,
      64,
      /* :: */[0,
       94,
       /* :: */[0,
        38,
        /* :: */[0,
         43,
         /* :: */[0,
          45,
          /* :: */[0,
           42,
           /* :: */[0,
            47,
            /* :: */[0,
             36,
             /* :: */[0,
              37,
              /* :: */[0,
               61,
               /* :: */[0,
                58,
                /* :: */[0,126,/* :: */[0,33,/* :: */[0,35,/* [] */0]]]]]]]]]]]]]]]]];

var
 strip_string=
  function(s)
   {var len=s["length"];
    
    var
     iter_first=
      function(n)
       {if(n>=len)
         {return /* None */0;}
        else
         {var match=s[n];
          
          var exit;
          
          var switcher=-9+match;
          
          if(!(4<switcher>>>0))
           {if(1<-2+switcher>>>0){exit=50;}else{exit=51;}}
          else
           {if(switcher!=23){exit=51;}else{exit=50;}}
          
          switch(exit)
           {case 51:return /* Some */[0,n];case 50:return iter_first(n+1);}
          }
        };
    
    var match=iter_first(0);
    
    if(match)
     {var first=match[1];
      
      var
       iter_last=
        function(n)
         {if(n<=first)
           {return /* None */0;}
          else
           {var match$1=s[n];
            
            var exit;
            
            var switcher=-9+match$1;
            
            if(!(4<switcher>>>0))
             {if(1<-2+switcher>>>0){exit=48;}else{exit=49;}}
            else
             {if(switcher!=23){exit=49;}else{exit=48;}}
            
            switch(exit)
             {case 49:return /* Some */[0,n];case 48:return iter_last(n-1);}
            }
          };
      
      var match$1=iter_last(len-1);
      
      if(match$1)
       {return $$String["sub"](s,first,match$1[1]-first+1);}
      else
       {return $$String["sub"](s,first,1);}
      }
    else
     {return "";}
    };

var
 parens_if_infix=
  function(name)
   {var s=strip_string(name);
    
    var exit;
    
    switch(s)
     {case "":return "";
      default:
       if((s[0]=42)||(s[s["length"]-1]=42))
        {return Pervasives["^"]("( ",Pervasives["^"](s," )"));}
       else
        {if(List["mem"](s[0],infix_chars))
          {return Pervasives["^"]("(",Pervasives["^"](s,")"));}
         else
          {switch(s)
            {case "asr":exit=43;
             case "land":exit=43;
             case "lor":exit=43;
             case "lsl":exit=43;
             case "lsr":exit=43;
             case "lxor":exit=43;
             case "mod":exit=43;
             case "or":exit=43;
             default:exit=44;}
           }
         }
       }
    
    switch(exit)
     {case 44:return s;
      case 43:return Pervasives["^"]("(",Pervasives["^"](name,")"));
      }
    };

var
 cut=
  function(name)
   {switch(name)
     {case "":return /* tuple */[0,"",""];
      default:
       var len=name["length"];
       
       var match=name[len-1];
       
       if(match!=41)
        {var
          match$1=
           List["rev"](Str["split"](Str["regexp_string"]("."),name));
         
         if(match$1)
          {return /* tuple */[0,
                   $$String["concat"](".",List["rev"](match$1[2])),
                   match$1[1]];
           }
         else
          {return /* tuple */[0,"",""];}
         }
       else
        {var j=0;
         
         var buf=[Buffer["create"](len),Buffer["create"](len)];
         
         for(var i=0;i<=len-1;i++)
          {var c=name[i];
           
           var exit;
           
           if(c!=46)
            {exit=36;}
           else
            {if(j=0)
              {if(i<len-1)
                {var match$2=name[i+1];
                 
                 if(match$2!=40){Buffer["add_char"](buf[j],46)}else{j=1;}
                 }
               else
                {Buffer["add_char"](buf[j],name[i])}
               }
             else
              {exit=36;}
             }
           
           switch(exit){case 36:Buffer["add_char"](buf[j],c)}
           }
         
         return /* tuple */[0,
                 Buffer["contents"](buf[0]),
                 Buffer["contents"](buf[1])];
         }
       }
    };

var simple=function(name){return cut(name)[2];};

var father=function(name){return cut(name)[1];};

var
 concat=
  function(n1,n2){return Pervasives["^"](n1,Pervasives["^"](".",n2));};

var
 normalize_name=
  function(name)
   {var match=cut(name);
    
    var s=match[2];
    
    var p=match[1];
    
    var len=s["length"];
    
    if(len>=2&&(s[0]=40)&&(s[len-1]=41))
     {var s$1=parens_if_infix(strip_string($$String["sub"](s,1,len-2)));}
    else
     {var s$1=s;}
    
    switch(p){case "":return s$1;default:return concat(p,s$1);}
    };

var
 head_and_tail=
  function(n)
   {try
     {var pos=$$String["index"](n,46);
      
      if(pos>0)
       {var h=$$String["sub"](n,0,pos);
        
        try
         {$$String["index"](h,40);return /* tuple */[0,n,""];}
        catch(exn)
         {if(exn=Not_found)
           {var len=n["length"];
            
            if(pos>=len-1)
             {return /* tuple */[0,h,""];}
            else
             {return /* tuple */[0,h,$$String["sub"](n,pos+1,len-pos-1)];}
            }
          else
           {throw exn;}
          }
        }
      else
       {return /* tuple */[0,n,""];}
      }
    catch(exn$1)
     {if(exn$1=Not_found){return /* tuple */[0,n,""];}else{throw exn$1;}}
    };

var head=function(n){return head_and_tail(n)[1];};

var tail=function(n){return head_and_tail(n)[2];};

var
 depth=
  function(name)
   {try
     {return List["length"](Str["split"](Str["regexp"]("\."),name));}
    catch(exn){return 1;}
    };

var
 prefix=
  function(n1,n2)
   {var $js;
    try
     {var len1=n1["length"];
      
      $js="unknown primitive:caml_string_equal"&&(n2[len1]=46);
      }
    catch(exn){$js=/* false */0;}
    return "unknown primitive:caml_string_notequal"&&$js;
    };

var
 get_relative_raw=
  function(n1,n2)
   {var match=head_and_tail(n1);
    
    var s1=match[2];
    
    var f1=match[1];
    
    var match$1=head_and_tail(n2);
    
    var f2=match$1[1];
    
    if("unknown primitive:caml_string_equal")
     {var s2=match$1[2];
      
      if
       ("unknown primitive:caml_string_equal"||
        "unknown primitive:caml_string_equal")
       {return s2;}
      else
       {if
         ("unknown primitive:caml_string_equal"||
          "unknown primitive:caml_string_equal")
         {return s2;}
        else
         {return get_relative_raw(s1,s2);}
        }
      }
    else
     {return n2;}
    };

var
 get_relative=
  function(n1,n2)
   {if(prefix(n1,n2))
     {var len1=n1["length"];
      
      try
       {return $$String["sub"](n2,len1+1,n2["length"]-len1-1);}
      catch(exn){return n2;}
      }
    else
     {return n2;}
    };

var
 hide_given_modules=
  function(l,s)
   {var
     iter=
      function(param)
       {if(param)
         {var s2=get_relative(param[1],s);
          
          if("unknown primitive:caml_string_equal")
           {return iter(param[2]);}
          else
           {return s2;}
          }
        else
         {return s;}
        };
    
    return iter(l);
    };

var qualified=function(name){return $$String["contains"](name,46);};

var from_ident=function(ident){return Ident["name"](ident);};

var from_path=function(path){return Path["name"](/* None */0,path);};

var
 to_path=
  function(n)
   {var
     match=
      List["fold_left"]
       (function(acc_opt,s)
         {if(acc_opt)
           {return /* Some */[0,/* Pdot */[1,acc_opt[1],s,0]];}
          else
           {return /* Some */[0,/* Pident */[0,Ident["create"](s)]];}
          },
        /* None */0,
        Str["split"](Str["regexp"]("\."),n));
    
    if(match){return match[1];}else{throw [0,Failure,"to_path"];}
    };

var from_longident=Odoc_misc["string_of_longident"];

var compare=$$String["compare"];

var Set=Set["Make"]([0,compare]);

module["exports"]=
{"parens_if_infix":parens_if_infix,
 "simple":simple,
 "father":father,
 "concat":concat,
 "normalize_name":normalize_name,
 "head":head,
 "depth":depth,
 "prefix":prefix,
 "get_relative":get_relative,
 "get_relative_raw":get_relative_raw,
 "hide_given_modules":hide_given_modules,
 "qualified":qualified,
 "from_ident":from_ident,
 "from_path":from_path,
 "to_path":to_path,
 "from_longident":from_longident,
 "Set":Set};

