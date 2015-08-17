// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Unix=require("./unix.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Out_of_range=
  CamlPrimitive["caml_set_oo_id"]([248,"Primitives.Out_of_range",0]);

var nothing=function(param){return /* () */0;};

var
 except=
  function(e,l)
   {var
     except_e=
      function(param)
       {if(param)
         {var l$1=param[2];
          
          var elem=param[1];
          
          return CamlPrimitive["caml_equal"](e,elem)
                  ?l$1
                  :/* :: */[0,elem,except_e(l$1)];
          }
        else
         {return /* [] */0;}
        };
    
    return except_e(l);
    };

var
 index=
  function(a,l)
   {var
     index_rec=
      function(i,param)
       {if(param)
         {return CamlPrimitive["caml_equal"](a,param[1])
                  ?i
                  :index_rec(i+1,param[2]);
          }
        else
         {throw CamlPrimitive["caml_global_data"]["Not_found"];}
        };
    
    return index_rec(0,l);
    };

var
 list_truncate=
  function(p0,p1)
   {return p0!==0
            ?p1?/* :: */[0,p1[1],list_truncate(p0-1,p1[2])]:/* [] */0
            :/* [] */0;
    };

var
 list_truncate2=
  function(p0,p1)
   {if(p0!==0)
     {if(p1)
       {var match=list_truncate2(p0-1,p1[2]);
        
        return /* tuple */[0,/* :: */[0,p1[1],match[1]],match[2]];
        }
      else
       {return [/* tuple */0,/* [] */0,/* [] */0];}
      }
    else
     {return /* tuple */[0,/* [] */0,p1];}
    };

var
 list_replace=
  function(x,y)
   {var
     repl=
      function(param)
       {if(param)
         {var l=param[2];
          
          var a=param[1];
          
          return a===x?/* :: */[0,y,l]:/* :: */[0,a,repl(l)];
          }
        else
         {return /* [] */0;}
        };
    
    return repl;
    };

var
 is_space=
  function(param)
   {var exit;
    
    if(param!==9)
     {if(param!==32){return /* false */0;}else{exit=12;}}
    else
     {exit=12;}
    
    switch(exit){case 12:return /* true */1;}
    };

var
 string_trim=
  function(s)
   {var l=s["length"];
    
    var i=0;
    
    while(i<l&&is_space(s["charCodeAt"](i))){i=1+i;}
    
    var j=l-1;
    
    while(j>=i&&is_space(s["charCodeAt"](j))){j=-1+j;}
    
    return $$String["sub"](s,i,j-i+1);
    };

var
 isprefix=
  function(s1,s2)
   {var l1=s1["length"];
    
    var l2=s2["length"];
    
    return l1===
           l2&&
           CamlPrimitive["caml_string_equal"](s1,s2)||
           l1<
           l2&&
           CamlPrimitive["caml_string_equal"](s1,$$String["sub"](s2,0,l1));
    };

var
 split_string=
  function(sep,str)
   {var
     split=
      function(i,j)
       {return j>=str["length"]
                ?i>=j
                  ?/* [] */0
                  :/* :: */[0,$$String["sub"](str,i,j-i),/* [] */0]
                :str["charCodeAt"](j)===sep
                  ?i>=j
                    ?skip_sep(j+1)
                    :/* :: */[0,$$String["sub"](str,i,j-i),skip_sep(j+1)]
                  :split(i,j+1);
        };
    
    var
     skip_sep=
      function(j)
       {return j<str["length"]&&str["charCodeAt"](j)===sep
                ?skip_sep(j+1)
                :split(j,j);
        };
    
    return split(0,0);
    };

var
 io_channel_of_descr=
  function(fd)
   {return /* record */[0,
            Unix["in_channel_of_descr"](fd),
            Unix["out_channel_of_descr"](fd),
            fd];
    };

var
 close_io=
  function(io_channel)
   {Pervasives["close_out_noerr"](io_channel[2]);
    return Pervasives["close_in_noerr"](io_channel[1]);
    };

var
 std_io=
  /* record */[0,Pervasives["stdin"],Pervasives["stdout"],Unix["stdin"]];

module["exports"]=
{"nothing":nothing,
 "Out_of_range":Out_of_range,
 "except":except,
 "index":index,
 "list_truncate":list_truncate,
 "list_truncate2":list_truncate2,
 "list_replace":list_replace,
 "string_trim":string_trim,
 "isprefix":isprefix,
 "split_string":split_string,
 "io_channel_of_descr":io_channel_of_descr,
 "close_io":close_io,
 "std_io":std_io};

