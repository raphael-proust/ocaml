// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalFormat=require("CamlinternalFormat");
var Pervasives=require("Pervasives");
var Buffer=require("Buffer");


var
 kfprintf=
  function(k,o,param)
   {var fmt=param[1];
    
    return CamlinternalFormat["make_printf"]
            (function(o$1,acc)
              {CamlinternalFormat["output_acc"](o$1,acc);return k(o$1);},
             o,
             0,
             fmt);
    };

var
 kbprintf=
  function(k,b,param)
   {var fmt=param[1];
    
    return CamlinternalFormat["make_printf"]
            (function(b$1,acc)
              {CamlinternalFormat["bufput_acc"](b$1,acc);return k(b$1);},
             b,
             0,
             fmt);
    };

var
 ikfprintf=
  function(k,oc,param)
   {var fmt=param[1];
    
    return CamlinternalFormat["make_printf"]
            (function(oc$1,param$1){return k(oc$1);},oc,0,fmt);
    };

var
 fprintf=
  function(oc,fmt){return kfprintf(function(prim){return 0;},oc,fmt);};

var
 bprintf=
  function(b,fmt){return kbprintf(function(prim){return 0;},b,fmt);};

var
 ifprintf=
  function(oc,fmt){return ikfprintf(function(prim){return 0;},oc,fmt);};

var printf=function(fmt){return fprintf(Pervasives["stdout"],fmt);};

var eprintf=function(fmt){return fprintf(Pervasives["stderr"],fmt);};

var
 ksprintf=
  function(k,param)
   {var fmt=param[1];
    
    var
     k$prime=
      function(param$1,acc)
       {var buf=Buffer["create"](64);
        
        CamlinternalFormat["strput_acc"](buf,acc);
        return k(Buffer["contents"](buf));
        };
    
    return CamlinternalFormat["make_printf"](k$prime,0,0,fmt);
    };

var sprintf=function(fmt){return ksprintf(function(s){return s;},fmt);};

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

