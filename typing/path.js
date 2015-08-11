// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Ident=require("Ident");


var nopos=-1;

var
 same=
  function(p1,p2)
   {var exit;
    
    switch(p1)
     {case 0:
       switch(p2)
        {case 0:return Ident["same"](p1[1],p2[1]);
         case 1:exit=3;
         case 2:exit=3;
         }
       
      case 1:
       switch(p2)
        {case 0:exit=3;
         case 1:
          return "unknown primitive:caml_string_equal"&&same(p1[1],p2[1]);
         case 2:exit=3;
         }
       
      case 2:
       switch(p2)
        {case 0:exit=3;
         case 1:exit=3;
         case 2:return same(p1[1],p2[1])&&same(p1[2],p2[2]);
         }
       
      }
    
    switch(exit){case 3:return 0;}
    };

var
 isfree=
  function(id,param)
   {switch(param)
     {case 0:return Ident["same"](id,param[1]);
      case 1:return isfree(id,param[1]);
      case 2:return isfree(id,param[1])||isfree(id,param[2]);
      }
    };

var
 binding_time=
  function(param)
   {switch(param)
     {case 0:return Ident["binding_time"](param[1]);
      case 1:return binding_time(param[1]);
      case 2:
       return Pervasives["max"](binding_time(param[1]),binding_time(param[2]));
       
      }
    };

var kfalse=function(x){return 0;};

var
 name=
  function($staropt$star,param)
   {if($staropt$star){var paren=$staropt$star[1];}else{var paren=kfalse;}
    
    switch(param)
     {case 0:return Ident["name"](param[1]);
      case 1:
       var s=param[2];
       
       return Pervasives["^"]
               (name(/* Some */[0,paren],param[1]),
                paren(s)
                 ?Pervasives["^"](".( ",Pervasives["^"](s," )"))
                 :Pervasives["^"](".",s));
       
      case 2:
       return Pervasives["^"]
               (name(/* Some */[0,paren],param[1]),
                Pervasives["^"]
                 ("(",Pervasives["^"](name(/* Some */[0,paren],param[2]),")")));
       
      }
    };

var
 head=
  function(param)
   {switch(param)
     {case 0:return param[1];
      case 1:return head(param[1]);
      case 2:throw [0,Assert_failure,[0,"typing/path.ml",49,22]];
      }
    };

var
 last=
  function(param)
   {switch(param)
     {case 0:return Ident["name"](param[1]);
      case 1:return param[2];
      case 2:return last(param[2]);
      }
    };

module["exports"]=
{"same":same,
 "isfree":isfree,
 "binding_time":binding_time,
 "nopos":nopos,
 "name":name,
 "head":head,
 "last":last};

