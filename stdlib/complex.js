var zero=[0,0];
var one=[1,0];
var i=[0,1];
var add=function(x,y){return [x[0]+y[0],x[1]+y[1]]};
var sub=function(x,y){return [x[0]-y[0],x[1]-y[1]]};
var neg=function(x){return [-x[0],-x[1]]};
var conj=function(x){return [x[0],-x[1]]};
var mul=function(x,y){return [x[0]*y[0]-x[1]*y[1],x[0]*y[1]+x[1]*y[0]]};
var
 div=
  function(x,y)
   {var $js=Math["abs"](y[0])>=Math["abs"](y[1]);
    if($js)
     {var r=y[1]/y[0];
      var d=y[0]+r*y[1];
      return [(x[0]+r*x[1])/d,(x[1]-r*x[0])/d]}
    else
     {var r$1=y[0]/y[1];
      var d$1=y[1]+r$1*y[0];
      return [(r$1*x[0]+x[1])/d$1,(r$1*x[1]-x[0])/d$1]}};
var inv=function(x){return div(one,x)};
var norm2=function(x){return x[0]*x[0]+x[1]*x[1]};
var
 norm=
  function(x)
   {var r=Math["abs"](x[0]);
    var i$1=Math["abs"](x[1]);
    var $js=r=0;
    if($js)
     {return i$1}
    else
     {var $js$1=i$1=0;
      if($js$1)
       {return r}
      else
       {var $js$2=r>=i$1;
        if($js$2)
         {var q=i$1/r;
          var $js$3="unknown primitive:caml_sqrt_float";
          return r*$js$3}
        else
         {var q$1=r/i$1;
          var $js$4="unknown primitive:caml_sqrt_float";
          return i$1*$js$4}}}};
var arg=function(x){return "unknown primitive:caml_atan2_float"};
var
 polar=
  function(n,a)
   {var $js="unknown primitive:caml_cos_float";
    var $js$1=$js*n;
    var $js$2="unknown primitive:caml_sin_float";
    var $js$3=$js$2*n;
    return [$js$1,$js$3]};
var
 sqrt=
  function(x)
   {var $js=(x[0]=0)&&(x[1]=0);
    if($js)
     {return [0,0]}
    else
     {var r=Math["abs"](x[0]);
      var i$1=Math["abs"](x[1]);
      var $js$1=r>=i$1;
      if($js$1)
       {var q=i$1/r;
        var $js$2="unknown primitive:caml_sqrt_float";
        var $js$3="unknown primitive:caml_sqrt_float";
        var $js$4=1+$js$3;
        var $js$5=0.5*$js$4;
        var $js$6="unknown primitive:caml_sqrt_float";
        var w=$js$2*$js$6}
      else
       {var q$1=r/i$1;
        var $js$7="unknown primitive:caml_sqrt_float";
        var $js$8="unknown primitive:caml_sqrt_float";
        var $js$9=q$1+$js$8;
        var $js$10=0.5*$js$9;
        var $js$11="unknown primitive:caml_sqrt_float";
        var w=$js$7*$js$11}
      var $js$12=x[0]>=0;
      if($js$12)
       {return [w,0.5*x[1]/w]}
      else
       {var $js$13=x[1]>=0;
        if($js$13){var $js$14=w}else{var $js$14=-w}
        return [0.5*i$1/w,$js$14]}}};
var
 exp=
  function(x)
   {var e="unknown primitive:caml_exp_float";
    var $js="unknown primitive:caml_cos_float";
    var $js$1=e*$js;
    var $js$2="unknown primitive:caml_sin_float";
    var $js$3=e*$js$2;
    return [$js$1,$js$3]};
var
 log=
  function(x)
   {var $js=norm(x);
    var $js$1="unknown primitive:caml_log_float";
    var $js$2="unknown primitive:caml_atan2_float";
    return [$js$1,$js$2]};
var pow=function(x,y){var $js=log(x);var $js$1=mul(y,$js);return exp($js$1)};
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
