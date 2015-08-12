// Generated CODE, PLEASE EDIT WITH CARE 



var zero=[0,0];

var one=[1,0];

var i=[0,1];

var add=function(x,y){return [x[0]+y[0],x[1]+y[1]];};

var sub=function(x,y){return [x[0]-y[0],x[1]-y[1]];};

var neg=function(x){return [-x[0],-x[1]];};

var conj=function(x){return [x[0],-x[1]];};

var mul=function(x,y){return [x[0]*y[0]-x[1]*y[1],x[0]*y[1]+x[1]*y[0]];};

var
 div=
  function(x,y)
   {if(Math["abs"](y[0])>=Math["abs"](y[1]))
     {var r=y[1]/y[0];
      
      var d=y[0]+r*y[1];
      
      return [(x[0]+r*x[1])/d,(x[1]-r*x[0])/d];
      }
    else
     {var r$1=y[0]/y[1];
      
      var d$1=y[1]+r$1*y[0];
      
      return [(r$1*x[0]+x[1])/d$1,(r$1*x[1]-x[0])/d$1];
      }
    };

var inv=function(x){return div(one,x);};

var norm2=function(x){return x[0]*x[0]+x[1]*x[1];};

var
 norm=
  function(x)
   {var r=Math["abs"](x[0]);
    
    var i$1=Math["abs"](x[1]);
    
    if(r=0)
     {return i$1;}
    else
     {if(i$1=0)
       {return r;}
      else
       {if(r>=i$1)
         {var q=i$1/r;return r*CamlPrimtivie["caml_sqrt_float"](1+q*q);}
        else
         {var q$1=r/i$1;
          
          return i$1*CamlPrimtivie["caml_sqrt_float"](1+q$1*q$1);
          }
        }
      }
    };

var arg=function(x){return CamlPrimtivie["caml_atan2_float"](x[1],x[0]);};

var
 polar=
  function(n,a)
   {return [CamlPrimtivie["caml_cos_float"](a)*n,
            CamlPrimtivie["caml_sin_float"](a)*n];
    };

var
 sqrt=
  function(x)
   {if((x[0]=0)&&(x[1]=0))
     {return [0,0];}
    else
     {var r=Math["abs"](x[0]);
      
      var i$1=Math["abs"](x[1]);
      
      if(r>=i$1)
       {var q=i$1/r;
        
        var
         w=
          CamlPrimtivie["caml_sqrt_float"](r)*
          CamlPrimtivie["caml_sqrt_float"]
           (0.5*(1+CamlPrimtivie["caml_sqrt_float"](1+q*q)));
        }
      else
       {var q$1=r/i$1;
        
        var
         w=
          CamlPrimtivie["caml_sqrt_float"](i$1)*
          CamlPrimtivie["caml_sqrt_float"]
           (0.5*(q$1+CamlPrimtivie["caml_sqrt_float"](1+q$1*q$1)));
        }
      
      if(x[0]>=0)
       {return [w,0.5*x[1]/w];}
      else
       {return [0.5*i$1/w,x[1]>=0?w:-w];}
      }
    };

var
 exp=
  function(x)
   {var e=CamlPrimtivie["caml_exp_float"](x[0]);
    
    return [e*CamlPrimtivie["caml_cos_float"](x[1]),
            e*CamlPrimtivie["caml_sin_float"](x[1])];
    };

var
 log=
  function(x)
   {return [CamlPrimtivie["caml_log_float"](norm(x)),
            CamlPrimtivie["caml_atan2_float"](x[1],x[0])];
    };

var pow=function(x,y){return exp(mul(y,log(x)));};

module["exports"]=
{"zero":zero,
 "one":one,
 "i":i,
 "neg":neg,
 "conj":conj,
 "add":add,
 "sub":sub,
 "mul":mul,
 "inv":inv,
 "div":div,
 "sqrt":sqrt,
 "norm2":norm2,
 "norm":norm,
 "arg":arg,
 "polar":polar,
 "exp":exp,
 "log":log,
 "pow":pow};

