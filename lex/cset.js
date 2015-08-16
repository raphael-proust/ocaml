// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var CamlPrimitive=require("./camlPrimitive.js");


var Bad=CamlPrimitive["caml_set_oo_id"]([248,"Cset.Bad",0]);

var empty=/* [] */0;

var
 is_empty=
  function(param){if(param){return /* false */0;}else{return /* true */1;}};

var singleton=function(c){return /* :: */[0,/* tuple */[0,c,c],/* [] */0];};

var
 interval=
  function(c1,c2)
   {if(CamlPrimitive["caml_lessequal"](c1,c2))
     {return /* :: */[0,/* tuple */[0,c1,c2],/* [] */0];}
    else
     {return /* :: */[0,/* tuple */[0,c2,c1],/* [] */0];}
    };

var
 union=
  function(s1,s2)
   {if(s1)
     {if(s2)
       {var r2=s2[2];
        
        var match=s2[1];
        
        var d2=match[2];
        
        var c2=match[1];
        
        var r1=s1[2];
        
        var p1=s1[1];
        
        var d1=p1[2];
        
        var c1=p1[1];
        
        if(c1>c2)
         {return union(s2,s1);}
        else
         {if(d1+1<c2)
           {return /* :: */[0,p1,union(r1,s2)];}
          else
           {if(d1<d2)
             {return union(/* :: */[0,/* tuple */[0,c1,d2],r2],r1);}
            else
             {return union(s1,r2);}
            }
          }
        }
      else
       {return s1;}
      }
    else
     {return s2;}
    };

var
 inter=
  function(l,l$prime)
   {if(l$prime)
     {if(l)
       {var r$prime=l$prime[2];
        
        var match=l$prime[1];
        
        var c2$prime=match[2];
        
        var c1$prime=match[1];
        
        var r=l[2];
        
        var match$1=l[1];
        
        var c2=match$1[2];
        
        var c1=match$1[1];
        
        if(CamlPrimitive["caml_lessthan"](c2,c1$prime))
         {return inter(r,l$prime);}
        else
         {if(CamlPrimitive["caml_lessthan"](c2$prime,c1))
           {return inter(l,r$prime);}
          else
           {if(CamlPrimitive["caml_lessthan"](c2,c2$prime))
             {return /* :: */[0,
                      /* tuple */[0,Pervasives["max"](c1,c1$prime),c2],
                      inter(r,l$prime)];
              }
            else
             {return /* :: */[0,
                      /* tuple */[0,Pervasives["max"](c1,c1$prime),c2$prime],
                      inter(l,r$prime)];
              }
            }
          }
        }
      else
       {return /* [] */0;}
      }
    else
     {return /* [] */0;}
    };

var
 diff=
  function(l,l$prime)
   {if(l$prime)
     {if(l)
       {var r$prime=l$prime[2];
        
        var match=l$prime[1];
        
        var c2$prime=match[2];
        
        var c1$prime=match[1];
        
        var r=l[2];
        
        var match$1=l[1];
        
        var c2=match$1[2];
        
        var c1=match$1[1];
        
        if(c2<c1$prime)
         {return /* :: */[0,/* tuple */[0,c1,c2],diff(r,l$prime)];}
        else
         {if(c2$prime<c1)
           {return diff(l,r$prime);}
          else
           {if(c2$prime<c2)
             {var r$prime$prime=/* :: */[0,/* tuple */[0,c2$prime+1,c2],r];}
            else
             {var r$prime$prime=r;}
            
            if(c1<c1$prime)
             {return /* :: */[0,
                      /* tuple */[0,c1,c1$prime-1],
                      diff(r$prime$prime,r$prime)];
              }
            else
             {return diff(r$prime$prime,r$prime);}
            }
          }
        }
      else
       {return /* [] */0;}
      }
    else
     {return l;}
    };

var eof=singleton(256);

var all_chars=interval(0,255);

var all_chars_eof=interval(0,256);

var complement=function(s){return diff(all_chars,s);};

var
 env_to_array=
  function(env)
   {if(env)
     {var res=CamlPrimitive["caml_make_vect"](257,env[1][2]);
      
      List["iter"]
       (function(param)
         {var y=param[2];
          
          return List["iter"]
                  (function(param$1)
                    {for(var k=param$1[1];k<=param$1[2];k++){res[k+1]=y}
                     return 0;
                     },
                   param[1]);
          },
        env[2]);
      return res;
      }
    else
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"cset.ml",82,16]];
      }
    };

module["exports"]=
{"empty":empty,
 "is_empty":is_empty,
 "all_chars":all_chars,
 "Bad":Bad,
 "all_chars_eof":all_chars_eof,
 "eof":eof,
 "singleton":singleton,
 "interval":interval,
 "union":union,
 "inter":inter,
 "diff":diff,
 "complement":complement,
 "env_to_array":env_to_array};

