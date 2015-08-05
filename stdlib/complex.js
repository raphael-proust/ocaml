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
         {var q=i$1/r;return r*"unknown primitive:caml_sqrt_float";}
        else
         {var q$1=r/i$1;return i$1*"unknown primitive:caml_sqrt_float";}
        }
      }
    };

var arg=function(x){return "unknown primitive:caml_atan2_float";};

var
 polar=
  function(n,a)
   {return ["unknown primitive:caml_cos_float"*n,
            "unknown primitive:caml_sin_float"*n];
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
          "unknown primitive:caml_sqrt_float"*
          "unknown primitive:caml_sqrt_float";
        }
      else
       {var q$1=r/i$1;
        
        var
         w=
          "unknown primitive:caml_sqrt_float"*
          "unknown primitive:caml_sqrt_float";
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
   {var e="unknown primitive:caml_exp_float";
    
    return [e*"unknown primitive:caml_cos_float",
            e*"unknown primitive:caml_sin_float"];
    };

var
 log=
  function(x)
   {return ["unknown primitive:caml_log_float",
            "unknown primitive:caml_atan2_float"];
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

