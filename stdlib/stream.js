// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var CamlinternalLazy=require("./camlinternalLazy.js");
var CamlPrimitive=require("./camlPrimitive.js");


var Failure=CamlPrimitive["caml_set_oo_id"]([248,"Stream.Failure",0]);

var $$Error=CamlPrimitive["caml_set_oo_id"]([248,"Stream.Error",0]);

var set_data=function(s,d){return s[2]=d,0;};

var
 fill_buff=
  function(b)
   {b[3]=Pervasives["input"](b[1],b[2],0,b[2]["length"]);return b[4]=0,0;};

var
 get_data=
  function(count,d)
   {var exit;
    
    if(typeof d==="number")
     {switch(d){case 0:exit=30;}}
    else
     {switch(d[0])
       {case 0:exit=30;
        case 1:
         var d2=d[2];
         
         var d1=d[1];
         
         var match=get_data(count,d1);
         
         if(typeof match==="number")
          {switch(match){case 0:return get_data(count,d2);}}
         else
          {switch(match[0])
            {case 0:
              var d11=match[2];
              
              var a=match[1];
              
              return /* Scons */[0,a,/* Sapp */[1,d11,d2]];
              
             default:
              throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"stream.ml",53,12]];
              }}
         
        case 2:
         var f=d[1];
         
         var lzarg=f;
         
         var tag=CamlPrimitive["caml_obj_tag"](lzarg);
         
         return get_data
                 (count,
                  tag===250
                   ?lzarg[1]
                   :tag===246?CamlinternalLazy["force_lazy_block"](lzarg):lzarg);
         
        case 3:
         var g=d[1];
         
         var match$1=g[1];
         
         if(match$1)
          {var match$2=match$1[1];
           
           if(match$2)
            {var a$1=match$2[1];g[1]=/* None */0;return /* Scons */[0,a$1,d];}
           else
            {return /* Sempty */0;}
           }
         else
          {var g$1=g;
           
           var match$3=g$1[2](count);
           
           if(match$3)
            {var a$2=match$3[1];return /* Scons */[0,a$2,d];}
           else
            {g$1[1]=[/* Some */0,/* None */0];return /* Sempty */0;}
           }
         
        case 4:
         var b=d[1];
         
         if(b[4]>=b[3]){fill_buff(b)}else{}
         
         if(b[3]===0)
          {return /* Sempty */0;}
         else
          {var r=b[2][b[4]];b[4]=1+b[4];return /* Scons */[0,r,d];}
         
        }}
    
    switch(exit){case 30:return d;}
    };

var
 peek=
  function(s)
   {var match=s[2];
    
    if(typeof match==="number")
     {switch(match){case 0:return /* None */0;}}
    else
     {switch(match[0])
       {case 0:var a=match[1];return /* Some */[0,a];
        case 1:
         var d=get_data(s[1],s[2]);
         
         if(typeof d==="number")
          {switch(d){case 0:return /* None */0;}}
         else
          {switch(d[0])
            {case 0:var a$1=d[1];set_data(s,d);return /* Some */[0,a$1];
             default:
              throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"stream.ml",82,12]];
              }}
         
        case 2:
         var f=match[1];
         
         var lzarg=f;
         
         var tag=CamlPrimitive["caml_obj_tag"](lzarg);
         
         set_data
          (s,
           tag===250
            ?lzarg[1]
            :tag===246?CamlinternalLazy["force_lazy_block"](lzarg):lzarg);
         return peek(s);
         
        case 3:
         var g=match[1];
         
         var match$1=g[1];
         
         if(match$1)
          {var a$2=match$1[1];return a$2;}
         else
          {var x=g[2](s[1]);g[1]=/* Some */[0,x];return x;}
         
        case 4:
         var b=match[1];
         
         if(b[4]>=b[3]){fill_buff(b)}else{}
         
         if(b[3]===0)
          {set_data(s,/* Sempty */0);return /* None */0;}
         else
          {return /* Some */[0,b[2][b[4]]];}
         
        }}
    };

var
 junk=
  function(s)
   {var match=s[2];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:var d=match[2];s[1]=1+s[1];return set_data(s,d);
        case 3:
         var g=match[1];
         
         var match$1=g[1];
         
         if(match$1){s[1]=1+s[1];return g[1]=/* None */0,0;}else{exit=24;}
         
        case 4:var b=match[1];s[1]=1+s[1];return b[4]=1+b[4],0;
        default:exit=24;}}
    
    switch(exit)
     {case 24:
       var match$2=peek(s);if(match$2){return junk(s);}else{return /* () */0;}
      }
    };

var
 nget=
  function(n,s)
   {if(n<=0)
     {return /* tuple */[0,/* [] */0,s[2],0];}
    else
     {var match=peek(s);
      
      if(match)
       {var a=match[1];
        
        junk(s);
        var match$1=nget(-1+n,s);
        
        var k=match$1[3];
        
        var d=match$1[2];
        
        var al=match$1[1];
        
        return /* tuple */[0,/* :: */[0,a,al],/* Scons */[0,a,d],1+k];
        }
      else
       {return /* tuple */[0,/* [] */0,s[2],0];}
      }
    };

var
 npeek=
  function(n,s)
   {var match=nget(n,s);
    
    var len=match[3];
    
    var d=match[2];
    
    var al=match[1];
    
    s[1]=s[1]-len;
    set_data(s,d);
    return al;
    };

var
 next=
  function(s)
   {var match=peek(s);
    
    if(match){var a=match[1];junk(s);return a;}else{throw Failure;}
    };

var
 empty=
  function(s)
   {var match=peek(s);if(match){throw Failure;}else{return /* () */0;}};

var
 iter=
  function(f,strm)
   {var
     do_rec=
      function(param)
       {var match=peek(strm);
        
        if(match)
         {var a=match[1];junk(strm);f(a);return do_rec(/* () */0);}
        else
         {return /* () */0;}
        };
    
    return do_rec(/* () */0);
    };

var
 from=
  function(f)
   {return /* record */[0,0,/* Sgen */[3,/* record */[0,/* None */0,f]]];};

var
 of_list=
  function(l)
   {return /* record */[0,
            0,
            List["fold_right"]
             (function(x,l){return /* Scons */[0,x,l];},l,/* Sempty */0)];
    };

var
 of_string=
  function(s)
   {var count=[0,0];
    
    return from
            (function(param)
              {var c=count[1];
               
               if(c<s["length"])
                {count[0]++;return /* Some */[0,s[c]];}
               else
                {return /* None */0;}
               });
    };

var
 of_bytes=
  function(s)
   {var count=[0,0];
    
    return from
            (function(param)
              {var c=count[1];
               
               if(c<s["length"])
                {count[0]++;return /* Some */[0,s[c]];}
               else
                {return /* None */0;}
               });
    };

var
 of_channel=
  function(ic)
   {return /* record */[0,
            0,
            /* Sbuffio */[4,
             /* record */[0,ic,CamlPrimitive["caml_create_string"](4096),0,0]]];
    };

var iapp=function(i,s){return /* record */[0,0,/* Sapp */[1,i[2],s[2]]];};

var icons=function(i,s){return /* record */[0,0,/* Scons */[0,i,s[2]]];};

var
 ising=
  function(i){return /* record */[0,0,/* Scons */[0,i,/* Sempty */0]];};

var
 lapp=
  function(f,s)
   {return /* record */[0,
            0,
            /* Slazy */[2,
             [246,function(param){return /* Sapp */[1,f(/* () */0)[2],s[2]];}]]];
    };

var
 lcons=
  function(f,s)
   {return /* record */[0,
            0,
            /* Slazy */[2,
             [246,function(param){return /* Scons */[0,f(/* () */0),s[2]];}]]];
    };

var
 lsing=
  function(f)
   {return /* record */[0,
            0,
            /* Slazy */[2,
             [246,
              function(param)
               {return /* Scons */[0,f(/* () */0),/* Sempty */0];}]]];
    };

var sempty=[/* record */0,0,/* Sempty */0];

var
 slazy=
  function(f)
   {return /* record */[0,
            0,
            /* Slazy */[2,[246,function(param){return f(/* () */0)[2];}]]];
    };

var
 dump=
  function(f,s)
   {Pervasives["print_string"]("{count = ");
    Pervasives["print_int"](s[1]);
    Pervasives["print_string"]("; data = ");
    dump_data(f,s[2]);
    Pervasives["print_string"]("}");
    return Pervasives["print_newline"](/* () */0);
    };

var
 dump_data=
  function(f,param)
   {if(typeof param==="number")
     {switch(param){case 0:return Pervasives["print_string"]("Sempty");}}
    else
     {switch(param[0])
       {case 0:
         var d=param[2];
         
         var a=param[1];
         
         Pervasives["print_string"]("Scons (");
         f(a);
         Pervasives["print_string"](", ");
         dump_data(f,d);
         return Pervasives["print_string"](")");
         
        case 1:
         var d2=param[2];
         
         var d1=param[1];
         
         Pervasives["print_string"]("Sapp (");
         dump_data(f,d1);
         Pervasives["print_string"](", ");
         dump_data(f,d2);
         return Pervasives["print_string"](")");
         
        case 2:return Pervasives["print_string"]("Slazy");
        case 3:return Pervasives["print_string"]("Sgen");
        case 4:return Pervasives["print_string"]("Sbuffio");
        }}
    };

module["exports"]=
{"Failure":Failure,
 "Error":$$Error,
 "from":from,
 "of_list":of_list,
 "of_string":of_string,
 "of_bytes":of_bytes,
 "of_channel":of_channel,
 "iter":iter,
 "next":next,
 "empty":empty,
 "peek":peek,
 "junk":junk,
 "%field0":function(prim){return prim[1];},
 "npeek":npeek,
 "iapp":iapp,
 "icons":icons,
 "ising":ising,
 "lapp":lapp,
 "lcons":lcons,
 "lsing":lsing,
 "sempty":sempty,
 "slazy":slazy,
 "dump":dump};

