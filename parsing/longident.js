// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Misc=require("Misc");


var
 flat=
  function(accu,param)
   {switch(param)
     {case 0:return /* :: */[0,param[1],accu];
      case 1:return flat(/* :: */[0,param[2],accu],param[1]);
      case 2:return Misc["fatal_error"]("Longident.flat");
      }
    };

var flatten=function(lid){return flat(0,lid);};

var
 last=
  function(param)
   {switch(param)
     {case 0:return param[1];
      case 1:return param[2];
      case 2:return Misc["fatal_error"]("Longident.last");
      }
    };

var
 split_at_dots=
  function(s,pos)
   {try
     {var dot=$$String["index_from"](s,pos,46);
      
      return /* :: */[0,$$String["sub"](s,pos,dot-pos),split_at_dots(s,dot+1)];
      }
    catch(exn)
     {if(exn=Not_found)
       {return /* :: */[0,$$String["sub"](s,pos,s["length"]-pos),0];}
      else
       {throw exn;}
      }
    };

var
 parse=
  function(s)
   {var match=split_at_dots(s,0);
    
    if(match)
     {return List["fold_left"]
              (function(p,s$1){return /* Ldot */[1,p,s$1];},
               /* Lident */[0,match[1]],
               match[2]);
      }
    else
     {return [0,""];}
    };

module["exports"]={"flatten":flatten,"last":last,"parse":parse};

