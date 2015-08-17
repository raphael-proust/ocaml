// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");



var bts=Bytes["unsafe_to_string"];

var bos=Bytes["unsafe_of_string"];

var make=function(n,c){return bts(Bytes["make"](n,c));};

var init=function(n,f){return bts(Bytes["init"](n,f));};

var copy=function(s){return bts(Bytes["copy"](bos(s)));};

var sub=function(s,ofs,len){return bts(Bytes["sub"](bos(s),ofs,len));};

var fill=Bytes["fill"];

var blit=Bytes["blit_string"];

var
 concat=
  function(sep,l)
   {if(l)
     {var tl=l[2];
      
      var hd=l[1];
      
      var num=[0,0];
      
      var len=[0,0];
      
      List["iter"]
       (function(s){num[0]++;return len[1]=len[1]+s["length"],0;},l);
      var
       r=
        CamlPrimitive["caml_create_string"](len[1]+sep["length"]*(num[1]-1));
      
      CamlPrimitive["caml_blit_string"](hd,0,r,0,hd["length"]);
      var pos=[0,hd["length"]];
      
      List["iter"]
       (function(s)
         {CamlPrimitive["caml_blit_string"](sep,0,r,pos[1],sep["length"]);
          pos[1]=pos[1]+sep["length"];
          CamlPrimitive["caml_blit_string"](s,0,r,pos[1],s["length"]);
          return pos[1]=pos[1]+s["length"],0;
          },
        tl);
      return Bytes["unsafe_to_string"](r);
      }
    else
     {return "";}
    };

var iter=function(f,s){return Bytes["iter"](f,bos(s));};

var iteri=function(f,s){return Bytes["iteri"](f,bos(s));};

var map=function(f,s){return bts(Bytes["map"](f,bos(s)));};

var mapi=function(f,s){return bts(Bytes["mapi"](f,bos(s)));};

var
 is_space=
  function(param)
   {var exit;
    
    var switcher=-9+param;
    
    if(4<switcher>>>0)
     {if(switcher!==23){exit=19;}else{exit=18;}}
    else
     {if(switcher!==2){exit=18;}else{exit=19;}}
    
    switch(exit){case 19:return /* false */0;case 18:return /* true */1;}
    };

var
 trim=
  function(s)
   {if(CamlPrimitive["caml_string_equal"](s,""))
     {return s;}
    else
     {if
       (is_space(s["charCodeAt"](0))||
        is_space(s["charCodeAt"](s["length"]-1)))
       {return bts(Bytes["trim"](bos(s)));}
      else
       {return s;}
      }
    };

var
 escaped=
  function(s)
   {var
     needs_escape=
      function(i)
       {if(i>=s["length"])
         {return /* false */0;}
        else
         {var c=s["charCodeAt"](i);
          
          var exit;
          
          if(c>=14)
           {if(c!==34){if(c!==92){exit=15;}else{exit=13;}}else{exit=13;}}
          else
           {if(c>=11)
             {if(c>=13){exit=13;}else{exit=15;}}
            else
             {if(c>=8){exit=13;}else{exit=15;}}
            }
          
          switch(exit)
           {case 15:
             if(CamlPrimitive["caml_is_printable"](c))
              {return needs_escape(i+1);}
             else
              {return /* true */1;}
             
            case 13:return /* true */1;
            }
          }
        };
    
    if(needs_escape(0)){return bts(Bytes["escaped"](bos(s)));}else{return s;}
    };

var index=function(s,c){return Bytes["index"](bos(s),c);};

var rindex=function(s,c){return Bytes["rindex"](bos(s),c);};

var index_from=function(s,i,c){return Bytes["index_from"](bos(s),i,c);};

var rindex_from=function(s,i,c){return Bytes["rindex_from"](bos(s),i,c);};

var contains=function(s,c){return Bytes["contains"](bos(s),c);};

var contains_from=function(s,i,c){return Bytes["contains_from"](bos(s),i,c);};

var
 rcontains_from=
  function(s,i,c){return Bytes["rcontains_from"](bos(s),i,c);};

var uppercase=function(s){return bts(Bytes["uppercase"](bos(s)));};

var lowercase=function(s){return bts(Bytes["lowercase"](bos(s)));};

var capitalize=function(s){return bts(Bytes["capitalize"](bos(s)));};

var uncapitalize=function(s){return bts(Bytes["uncapitalize"](bos(s)));};

var compare=function(x,y){return CamlPrimitive["caml_string_compare"](x,y);};

module["exports"]=
{"make":make,
 "init":init,
 "copy":copy,
 "sub":sub,
 "fill":fill,
 "blit":blit,
 "concat":concat,
 "iter":iter,
 "iteri":iteri,
 "map":map,
 "mapi":mapi,
 "trim":trim,
 "escaped":escaped,
 "index":index,
 "rindex":rindex,
 "index_from":index_from,
 "rindex_from":rindex_from,
 "contains":contains,
 "contains_from":contains_from,
 "rcontains_from":rcontains_from,
 "uppercase":uppercase,
 "lowercase":lowercase,
 "capitalize":capitalize,
 "uncapitalize":uncapitalize,
 "compare":compare};

