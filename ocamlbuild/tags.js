// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Format=require("Format");
var Set=require("Set");


var $$let=$$String;

var include=Set["Make"]([0,$$let[25]]);

var empty=include[1];

var is_empty=include[2];

var mem=include[3];

var add=include[4];

var singleton=include[5];

var remove=include[6];

var union=include[7];

var inter=include[8];

var diff=include[9];

var compare=include[10];

var equal=include[11];

var subset=include[12];

var iter=include[13];

var fold=include[14];

var for_all=include[15];

var exists=include[16];

var filter=include[17];

var partition=include[18];

var cardinal=include[19];

var elements=include[20];

var min_elt=include[21];

var max_elt=include[22];

var choose=include[23];

var split=include[24];

var find=include[25];

var does_match=function(x,y){return subset(y,x);};

var of_list=function(l){return List["fold_right"](add,l,empty);};

var
 print=
  function(f,s)
   {var
     match=
      Format["fprintf"](f,[0,[18,[1,[0,[11,"<0>",0],"<0>"]],0],"@[<0>"]);
    
    var
     match$1=
      fold
       (function(elt,first)
         {if(!first)
           {Format["fprintf"](f,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "])}
          else
           {}
          
          Format["pp_print_string"](f,elt);
          return 0;
          },
        s,
        1);
    
    return Format["fprintf"](f,[0,[17,0,0],"@]"]);
    };

var $plus$plus=function(x,y){return add(y,x);};

var $neg$neg=function(x,y){return remove(y,x);};

var
 $plus$plus$plus=
  function(x,param){if(param){return add(param[1],x);}else{return x;}};

var
 $neg$neg$neg=
  function(x,param){if(param){return remove(param[1],x);}else{return x;}};

var Operators=[0,$plus$plus,$neg$neg,$plus$plus$plus,$neg$neg$neg];

module["exports"]=
{"empty":empty,
 "is_empty":is_empty,
 "mem":mem,
 "add":add,
 "singleton":singleton,
 "remove":remove,
 "union":union,
 "inter":inter,
 "diff":diff,
 "compare":compare,
 "equal":equal,
 "subset":subset,
 "iter":iter,
 "fold":fold,
 "for_all":for_all,
 "exists":exists,
 "filter":filter,
 "partition":partition,
 "cardinal":cardinal,
 "elements":elements,
 "min_elt":min_elt,
 "max_elt":max_elt,
 "choose":choose,
 "split":split,
 "find":find,
 "of_list":of_list,
 "print":print,
 "does_match":does_match,
 "Operators":Operators};

