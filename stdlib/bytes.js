// Generated CODE, PLEASE EDIT WITH CARE 

var Char=require("./char.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 make=
  function(n,c)
   {var s=CamlPrimitive["caml_create_string"](n);
    
    CamlPrimitive["caml_fill_string"](s,0,n,c);
    return s};

var
 init=
  function(n,f)
   {var s=CamlPrimitive["caml_create_string"](n);
    
    for(var i=0;i<=n-1;i++){s[i]=f(i)}
    
    return s};

var empty=CamlPrimitive["caml_create_string"](0);

var
 copy=
  function(s)
   {var len=s["length"];
    
    var r=CamlPrimitive["caml_create_string"](len);
    
    CamlPrimitive["caml_blit_string"](s,0,r,0,len);
    return r};

var
 to_string=
  function(b){return String["fromCharCode"]["apply"](null,copy(b))};

var of_string=function(s){return copy(s)};

var
 sub=
  function(s,ofs,len)
   {if(ofs<0||len<0||ofs>s["length"]-len)
     {return Pervasives["invalid_arg"]("String.sub / Bytes.sub")}
    else
     {var r=CamlPrimitive["caml_create_string"](len);
      
      CamlPrimitive["caml_blit_string"](s,ofs,r,0,len);
      return r}
    };

var
 sub_string=
  function(b,ofs,len)
   {return String["fromCharCode"]["apply"](null,sub(b,ofs,len))};

var
 extend=
  function(s,left,right)
   {var len=s["length"]+left+right;
    
    var r=CamlPrimitive["caml_create_string"](len);
    
    var match=left<0?/* tuple */[0,-left,0]:/* tuple */[0,0,left];
    
    var dstoff=match[2];
    
    var srcoff=match[1];
    
    var cpylen=Pervasives["min"](s["length"]-srcoff,len-dstoff);
    
    if(cpylen>0){CamlPrimitive["caml_blit_string"](s,srcoff,r,dstoff,cpylen)}
    
    return r};

var
 fill=
  function(s,ofs,len,c)
   {return ofs<0||len<0||ofs>s["length"]-len
            ?Pervasives["invalid_arg"]("String.fill / Bytes.fill")
            :CamlPrimitive["caml_fill_string"](s,ofs,len,c)};

var
 blit=
  function(s1,ofs1,s2,ofs2,len)
   {return len<0||ofs1<0||ofs1>s1["length"]-len||ofs2<0||ofs2>s2["length"]-len
            ?Pervasives["invalid_arg"]("Bytes.blit")
            :CamlPrimitive["caml_blit_string"](s1,ofs1,s2,ofs2,len)};

var
 blit_string=
  function(s1,ofs1,s2,ofs2,len)
   {return len<0||ofs1<0||ofs1>s1["length"]-len||ofs2<0||ofs2>s2["length"]-len
            ?Pervasives["invalid_arg"]("String.blit / Bytes.blit_string")
            :CamlPrimitive["caml_blit_string"](s1,ofs1,s2,ofs2,len)};

var iter=function(f,a){for(var i=0;i<=a["length"]-1;i++){f(a[i])}return 0};

var iteri=function(f,a){for(var i=0;i<=a["length"]-1;i++){f(i,a[i])}return 0};

var
 concat=
  function(sep,l)
   {if(l)
     {var hd=l[1];
      
      var num=[0,0];
      
      var len=[0,0];
      
      List["iter"](function(s){num[0]++;return len[1]=len[1]+s["length"],0},l);
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
          return pos[1]=pos[1]+s["length"],0},
        l[2]);
      return r}
    else
     {return empty}
    };

var
 cat=
  function(s1,s2)
   {var l1=s1["length"];
    
    var l2=s2["length"];
    
    var r=CamlPrimitive["caml_create_string"](l1+l2);
    
    CamlPrimitive["caml_blit_string"](s1,0,r,0,l1);
    CamlPrimitive["caml_blit_string"](s2,0,r,l1,l2);
    return r};

var
 is_space=
  function(param)
   {var exit;
    
    var switcher=-9+param;
    
    if(4<switcher>>>0)
     {if(switcher!==23){exit=38;}else{exit=37;}}
    else
     {if(switcher!==2){exit=37;}else{exit=38;}}
    
    switch(exit){case 38:return /* false */0;case 37:return /* true */1}
    };

var
 trim=
  function(s)
   {var len=s["length"];
    
    var i=0;
    
    while(i<len&&is_space(s[i])){i=1+i;}
    
    var j=len-1;
    
    while(j>=i&&is_space(s[j])){j=-1+j;}
    
    return j>=i?sub(s,i,j-i+1):empty};

var
 escaped=
  function(s)
   {var n=0;
    
    for(var i=0;i<=s["length"]-1;i++)
     {var c=s[i];
      
      var exit;
      
      var $js;
      if(c>=14)
       {if(c!==34){if(c!==92){exit=30;}else{exit=29;}}else{exit=29;}}
      else
       {if(c>=11)
         {if(c>=13){exit=29;}else{exit=30;}}
        else
         {if(c>=8){exit=29;}else{exit=30;}}
        }
      
      var $js$1;
      switch(exit)
       {case 30:$js$1=CamlPrimitive["caml_is_printable"](c)?1:4;break;
        case 29:$js$1=2;break
        }
      n=n+$js$1;
      }
    
    if(n===s["length"])
     {return copy(s)}
    else
     {var s$prime=CamlPrimitive["caml_create_string"](n);
      
      n=0;
      
      for(var i$1=0;i$1<=s["length"]-1;i$1++)
       {var c$1=s[i$1];
        
        var exit$1;
        
        var switcher=-34+c$1;
        
        if(!(58<switcher>>>0))
         {if(56<-1+switcher>>>0)
           {s$prime[n]=92;n=1+n;s$prime[n]=c$1}
          else
           {exit$1=27;}
          }
        else
         {if(switcher>=-20)
           {exit$1=27;}
          else
           {switch(34+switcher)
             {case 0:exit$1=27;break;
              case 1:exit$1=27;break;
              case 2:exit$1=27;break;
              case 3:exit$1=27;break;
              case 4:exit$1=27;break;
              case 5:exit$1=27;break;
              case 6:exit$1=27;break;
              case 7:exit$1=27;break;
              case 8:s$prime[n]=92;n=1+n;s$prime[n]=98;break;
              case 9:s$prime[n]=92;n=1+n;s$prime[n]=116;break;
              case 10:s$prime[n]=92;n=1+n;s$prime[n]=110;break;
              case 11:exit$1=27;break;
              case 12:exit$1=27;break;
              case 13:s$prime[n]=92;n=1+n;s$prime[n]=114;break
              }
            }
          }
        
        switch(exit$1)
         {case 27:
           if(CamlPrimitive["caml_is_printable"](c$1))
            {s$prime[n]=c$1}
           else
            {var a=c$1;
             
             s$prime[n]=92;
             n=1+n;
             
             s$prime[n]=48+a/100;
             n=1+n;
             
             s$prime[n]=48+a/10%10;
             n=1+n;
             
             s$prime[n]=48+a%10}
           break
          }
        
        n=1+n;
        }
      
      return s$prime}
    };

var
 map=
  function(f,s)
   {var l=s["length"];
    
    if(l===0)
     {return s}
    else
     {var r=CamlPrimitive["caml_create_string"](l);
      
      for(var i=0;i<=l-1;i++){r[i]=f(s[i])}
      
      return r}
    };

var
 mapi=
  function(f,s)
   {var l=s["length"];
    
    if(l===0)
     {return s}
    else
     {var r=CamlPrimitive["caml_create_string"](l);
      
      for(var i=0;i<=l-1;i++){r[i]=f(i,s[i])}
      
      return r}
    };

var uppercase=function(s){return map(Char["uppercase"],s)};

var lowercase=function(s){return map(Char["lowercase"],s)};

var
 apply1=
  function(f,s)
   {if(s["length"]===0){return s}else{var r=copy(s);r[0]=f(s[0]);return r}};

var capitalize=function(s){return apply1(Char["uppercase"],s)};

var uncapitalize=function(s){return apply1(Char["lowercase"],s)};

var
 index_rec=
  function(s,lim,i,c)
   {if(i>=lim)
     {throw CamlPrimitive["caml_global_data"]["Not_found"]}
    else
     {return s[i]===c?i:index_rec(s,lim,i+1,c)}
    };

var index=function(s,c){return index_rec(s,s["length"],0,c)};

var
 index_from=
  function(s,i,c)
   {var l=s["length"];
    
    return i<0||i>l
            ?Pervasives["invalid_arg"]("String.index_from / Bytes.index_from")
            :index_rec(s,l,i,c)};

var
 rindex_rec=
  function(s,i,c)
   {if(i<0)
     {throw CamlPrimitive["caml_global_data"]["Not_found"]}
    else
     {return s[i]===c?i:rindex_rec(s,i-1,c)}
    };

var rindex=function(s,c){return rindex_rec(s,s["length"]-1,c)};

var
 rindex_from=
  function(s,i,c)
   {return i<-1||i>=s["length"]
            ?Pervasives["invalid_arg"]
              ("String.rindex_from / Bytes.rindex_from")
            :rindex_rec(s,i,c)};

var
 contains_from=
  function(s,i,c)
   {var l=s["length"];
    
    if(i<0||i>l)
     {return Pervasives["invalid_arg"]
              ("String.contains_from / Bytes.contains_from")}
    else
     {try
       {index_rec(s,l,i,c);return /* true */1}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* false */0}
        else
         {throw exn}
        }
      }
    };

var contains=function(s,c){return contains_from(s,0,c)};

var
 rcontains_from=
  function(s,i,c)
   {if(i<0||i>=s["length"])
     {return Pervasives["invalid_arg"]
              ("String.rcontains_from / Bytes.rcontains_from")}
    else
     {try
       {rindex_rec(s,i,c);return /* true */1}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* false */0}
        else
         {throw exn}
        }
      }
    };

var compare=function(x,y){return CamlPrimitive["caml_compare"](x,y)};

module["exports"]=
{"make":make,
 "init":init,
 "empty":empty,
 "copy":copy,
 "of_string":of_string,
 "to_string":to_string,
 "sub":sub,
 "sub_string":sub_string,
 "extend":extend,
 "fill":fill,
 "blit":blit,
 "blit_string":blit_string,
 "concat":concat,
 "cat":cat,
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
 "compare":compare,
 "unsafe_to_string":
 function(prim){return String["fromCharCode"]["apply"](null,prim)},
 "unsafe_of_string":function(prim){return prim}};

