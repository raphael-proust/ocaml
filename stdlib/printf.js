// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalFormat=require("./camlinternalFormat.js");
var Pervasives=require("./pervasives.js");
var Buffer=require("./buffer.js");


var
 kfprintf=
  function(k,o,param)
   {return CamlinternalFormat["make_printf"]
            (function(o,acc)
              {CamlinternalFormat["output_acc"](o,acc);return k(o)},
             o,
             /* End_of_acc */0,
             param[1])};

var
 kbprintf=
  function(k,b,param)
   {return CamlinternalFormat["make_printf"]
            (function(b,acc)
              {CamlinternalFormat["bufput_acc"](b,acc);return k(b)},
             b,
             /* End_of_acc */0,
             param[1])};

var
 ikfprintf=
  function(k,oc,param)
   {return CamlinternalFormat["make_printf"]
            (function(oc,param$1){return k(oc)},oc,/* End_of_acc */0,param[1])};

var
 fprintf=
  function(oc,fmt){return kfprintf(function(prim){return prim},oc,fmt)};

var
 bprintf=
  function(b,fmt){return kbprintf(function(prim){return prim},b,fmt)};

var
 ifprintf=
  function(oc,fmt){return ikfprintf(function(prim){return prim},oc,fmt)};

var printf=function(fmt){return fprintf(Pervasives["stdout"],fmt)};

var eprintf=function(fmt){return fprintf(Pervasives["stderr"],fmt)};

var
 ksprintf=
  function(k,param)
   {var
     k$prime=
      function(param$1,acc)
       {var buf=Buffer["create"](64);
        
        CamlinternalFormat["strput_acc"](buf,acc);
        return k(Buffer["contents"](buf))};
    
    return CamlinternalFormat["make_printf"]
            (k$prime,/* () */0,/* End_of_acc */0,param[1])};

var sprintf=function(fmt){return ksprintf(function(s){return s},fmt)};

var kprintf=ksprintf;

module["exports"]=
{"fprintf":fprintf,
 "printf":printf,
 "eprintf":eprintf,
 "sprintf":sprintf,
 "bprintf":bprintf,
 "ifprintf":ifprintf,
 "kfprintf":kfprintf,
 "ikfprintf":ikfprintf,
 "ksprintf":ksprintf,
 "kbprintf":kbprintf,
 "kprintf":kprintf};

