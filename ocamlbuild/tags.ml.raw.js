var List=require("List");
var Format=require("Format");
var Set=require("Set");
var $js=Set["Make"];
var let=String;
var $js$1=[0,let[25]];
var include=$js($js$1);
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
var does_match=function(x,y){return subset(y,x)};
var
 of_list=
  function(l){var $js$2=List["fold_right"];return $js$2(add,l,empty)};
var
 print=
  function(f,s)
   {var $js$2=Format["fprintf"];
    var match=$js$2(f,[0,[18,[1,[0,[11,"<0>",0],"<0>"]],0],"@[<0>"]);
    var
     match$1=
      fold
       (function(elt,first)
         {var $js$3=!first;
          if($js$3)
           {var $js$4=Format["fprintf"];
            $js$4(f,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "])}
          else
           {}
          var $js$5=Format["pp_print_string"];
          $js$5(f,elt);
          return 0},
        s,
        1);
    var $js$3=Format["fprintf"];
    return $js$3(f,[0,[17,0,0],"@]"])};
var ++=function(x,y){return add(y,x)};
var --=function(x,y){return remove(y,x)};
var
 +++=
  function(x,param)
   {var $js$2=param;if($js$2){return add(param[1],x)}else{return x}};
var
 ---=
  function(x,param)
   {var $js$2=param;if($js$2){return remove(param[1],x)}else{return x}};
var Operators=[0,++,--,+++,---];
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
