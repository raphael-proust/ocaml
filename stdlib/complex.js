// Generated CODE, PLEASE EDIT WITH CARE 



var zero=[0,0];

var one=[1,0];

var i=[0,1];

var add=function(x,y){return [/* floatarray */254,x[1]+y[1],x[2]+y[2]];};

var sub=function(x,y){return [/* floatarray */254,x[1]-y[1],x[2]-y[2]];};

var neg=function(x){return [/* floatarray */254,-x[1],-x[2]];};

var conj=function(x){return [/* floatarray */254,x[1],-x[2]];};

var
 mul=
  function(x,y)
   {return [/* floatarray */254,x[1]*y[1]-x[2]*y[2],x[1]*y[2]+x[2]*y[1]];};

var
 div=
  function(x,y)
   {if(Math["abs"](y[1])>=Math["abs"](y[2]))
     {var r=y[2]/y[1];
      
      var d=y[1]+r*y[2];
      
      return [/* floatarray */254,(x[1]+r*x[2])/d,(x[2]-r*x[1])/d];
      }
    else
     {var r$1=y[1]/y[2];
      
      var d$1=y[2]+r$1*y[1];
      
      return [/* floatarray */254,(r$1*x[1]+x[2])/d$1,(r$1*x[2]-x[1])/d$1];
      }
    };

var inv=function(x){return div(one,x);};

var norm2=function(x){return x[1]*x[1]+x[2]*x[2];};

var
 norm=
  function(x)
   {var r=Math["abs"](x[1]);
    
    var i$1=Math["abs"](x[2]);
    
    if(r===0)
     {return i$1;}
    else
     {if(i$1===0)
       {return r;}
      else
       {if(r>=i$1)
         {var q=i$1/r;return r*Math["sqrt"](1+q*q);}
        else
         {var q$1=r/i$1;return i$1*Math["sqrt"](1+q$1*q$1);}
        }
      }
    };

var arg=function(x){return Math["atan2"](x[2],x[1]);};

var
 polar=
  function(n,a)
   {return [/* floatarray */254,Math["cos"](a)*n,Math["sin"](a)*n];};

var
 sqrt=
  function(x)
   {if(x[1]===0&&x[2]===0)
     {return [0,0];}
    else
     {var r=Math["abs"](x[1]);
      
      var i$1=Math["abs"](x[2]);
      
      var w;
      if(r>=i$1)
       {var q=i$1/r;
        
        w=Math["sqrt"](r)*Math["sqrt"](0.5*(1+Math["sqrt"](1+q*q)));
        }
      else
       {var q$1=r/i$1;
        
        w=Math["sqrt"](i$1)*Math["sqrt"](0.5*(q$1+Math["sqrt"](1+q$1*q$1)));
        }
      
      if(x[1]>=0)
       {return [/* floatarray */254,w,0.5*x[2]/w];}
      else
       {return [/* floatarray */254,0.5*i$1/w,x[2]>=0?w:-w];}
      }
    };

var
 exp=
  function(x)
   {var e=Math["exp"](x[1]);
    
    return [/* floatarray */254,e*Math["cos"](x[2]),e*Math["sin"](x[2])];
    };

var
 log=
  function(x)
   {return [/* floatarray */254,Math["log"](norm(x)),Math["atan2"](x[2],x[1])];
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

