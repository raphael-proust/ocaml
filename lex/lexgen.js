// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Stack=require("./stack.js");
var Table=require("./table.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Cset=require("./cset.js");
var Printf=require("./printf.js");
var Set=require("./set.js");
var Hashtbl=require("./hashtbl.js");
var Map=require("./map.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Memory_overflow=
  CamlPrimitive["caml_set_oo_id"]([248,"Lexgen.Memory_overflow",0]);

var compare=function(x,y){return CamlPrimitive["caml_int_compare"](x,y);};

var Ints=Set["Make"]([0,compare]);

var
 id_compare=
  function(param,param$1){return $$String["compare"](param[1],param$1[1]);};

var tag_compare=function(t1,t2){return CamlPrimitive["caml_compare"](t1,t2);};

var Tags=Set["Make"]([0,tag_compare]);

var TagMap=Map["Make"]([0,tag_compare]);

var IdSet=Set["Make"]([0,id_compare]);

var IdMap=Map["Make"]([0,id_compare]);

var
 do_remove_nested=
  function(to_remove,e)
   {var exit;
    
    if(typeof e==="number")
     {switch(e){}}
    else
     {switch(e[0])
       {case 1:
         return /* Sequence */[1,
                 do_remove_nested(to_remove,e[1]),
                 do_remove_nested(to_remove,e[2])];
         
        case 2:
         return /* Alternative */[2,
                 do_remove_nested(to_remove,e[1]),
                 do_remove_nested(to_remove,e[2])];
         
        case 3:return /* Repetition */[3,do_remove_nested(to_remove,e[1])];
        case 4:
         var x=e[2];
         
         var e$1=e[1];
         
         if(IdSet[3](x,to_remove))
          {return do_remove_nested(to_remove,e$1);}
         else
          {return /* Bind */[4,do_remove_nested(IdSet[4](x,to_remove),e$1),x];
           }
         
        default:exit=255;}}
    
    switch(exit){case 255:return e;}
    };

var remove_nested_as=function(e){return do_remove_nested(IdSet[1],e);};

var
 stringset_delta=
  function(s1,s2){return IdSet[7](IdSet[9](s1,s2),IdSet[9](s2,s1));};

var
 find_all_vars=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 1:exit=252;
        case 2:exit=252;
        case 3:return find_all_vars(param[1]);
        case 4:return IdSet[4](param[2],find_all_vars(param[1]));
        default:exit=250;}}
    
    switch(exit)
     {case 252:
       return IdSet[7](find_all_vars(param[1]),find_all_vars(param[2]));
      case 250:return IdSet[1];
      }
    };

var
 do_find_opt=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 1:
         var match=do_find_opt(param[1]);
         
         var match$1=do_find_opt(param[2]);
         
         return /* tuple */[0,
                 IdSet[7](match[1],match$1[1]),
                 IdSet[7](match[2],match$1[2])];
         
        case 2:
         var match$2=do_find_opt(param[1]);
         
         var all1=match$2[2];
         
         var match$3=do_find_opt(param[2]);
         
         var all2=match$3[2];
         
         return /* tuple */[0,
                 IdSet[7]
                  (IdSet[7](match$2[1],match$3[1]),stringset_delta(all1,all2)),
                 IdSet[7](all1,all2)];
         
        case 3:var r=find_all_vars(param[1]);return /* tuple */[0,r,r];
        case 4:
         var match$4=do_find_opt(param[1]);
         
         return /* tuple */[0,match$4[1],IdSet[4](param[2],match$4[2])];
         
        default:exit=249;}}
    
    switch(exit){case 249:return /* tuple */[0,IdSet[1],IdSet[1]];}
    };

var find_optional=function(e){var match=do_find_opt(e);return match[1];};

var
 do_find_double=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 1:
         var match=do_find_double(param[1]);
         
         var all1=match[2];
         
         var match$1=do_find_double(param[2]);
         
         var all2=match$1[2];
         
         return /* tuple */[0,
                 IdSet[7](IdSet[8](all1,all2),IdSet[7](match[1],match$1[1])),
                 IdSet[7](all1,all2)];
         
        case 2:
         var match$2=do_find_double(param[1]);
         
         var match$3=do_find_double(param[2]);
         
         return /* tuple */[0,
                 IdSet[7](match$2[1],match$3[1]),
                 IdSet[7](match$2[2],match$3[2])];
         
        case 3:var r=find_all_vars(param[1]);return /* tuple */[0,r,r];
        case 4:
         var x=param[2];
         
         var match$4=do_find_double(param[1]);
         
         var all=match$4[2];
         
         var dbl=match$4[1];
         
         return /* tuple */[0,
                 IdSet[3](x,all)?IdSet[4](x,dbl):dbl,
                 IdSet[4](x,all)];
         
        default:exit=240;}}
    
    switch(exit){case 240:return /* tuple */[0,IdSet[1],IdSet[1]];}
    };

var find_double=function(e){return do_find_double(e);};

var
 add_some=
  function(x,param)
   {if(param){return /* Some */[0,x+param[1]];}else{return /* None */0;}};

var
 add_some_some=
  function(x,y)
   {var exit;
    
    if(x)
     {if(y){return /* Some */[0,x[1]+y[1]];}else{exit=230;}}
    else
     {exit=230;}
    
    switch(exit){case 230:return /* None */0;}
    };

var
 do_find_chars=
  function(sz,param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){case 0:exit=229;case 1:exit=229;}}
    else
     {switch(param[0])
       {case 0:return /* tuple */[0,IdSet[1],IdSet[1],add_some(1,sz)];
        case 1:
         var match=do_find_chars(sz,param[1]);
         
         var match$1=do_find_chars(match[3],param[2]);
         
         return /* tuple */[0,
                 IdSet[7](match[1],match$1[1]),
                 IdSet[7](match[2],match$1[2]),
                 match$1[3]];
         
        case 2:
         var match$2=do_find_chars(sz,param[1]);
         
         var sz1=match$2[3];
         
         var match$3=do_find_chars(sz,param[2]);
         
         return /* tuple */[0,
                 IdSet[7](match$2[1],match$3[1]),
                 IdSet[7](match$2[2],match$3[2]),
                 CamlPrimitive["caml_equal"](sz1,match$3[3])?sz1:/* None */0];
         
        case 3:return do_find_chars(/* None */0,param[1]);
        case 4:
         var x=param[2];
         
         var match$4=do_find_chars([/* Some */0,0],param[1]);
         
         var e_sz=match$4[3];
         
         var s=match$4[2];
         
         var c=match$4[1];
         
         var exit$1;
         
         if(e_sz)
          {if(e_sz[1]!==1)
            {exit$1=223;}
           else
            {return /* tuple */[0,IdSet[4](x,c),s,add_some(1,sz)];}
           }
         else
          {exit$1=223;}
         
         switch(exit$1)
          {case 223:
            return /* tuple */[0,c,IdSet[4](x,s),add_some_some(sz,e_sz)];
           }
         
        }}
    
    switch(exit){case 229:return /* tuple */[0,IdSet[1],IdSet[1],sz];}
    };

var
 find_chars=
  function(e)
   {var match=do_find_chars([/* Some */0,0],e);
    
    return IdSet[9](match[1],match[2]);
    };

var chars=[0,/* [] */0];

var chars_count=[0,0];

var
 encode_regexp=
  function(char_vars,act,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return /* Empty */0;
        case 1:
         var n=chars_count[1];
         
         chars[1]=/* :: */[0,Cset["eof"],chars[1]];
         chars_count[0]++;
         return /* Chars */[0,n,/* true */1];
         
        }}
    else
     {switch(param[0])
       {case 0:
         var n$1=chars_count[1];
         
         chars[1]=/* :: */[0,param[1],chars[1]];
         chars_count[0]++;
         return /* Chars */[0,n$1,/* false */0];
         
        case 1:
         var r1=encode_regexp(char_vars,act,param[1]);
         
         var r2=encode_regexp(char_vars,act,param[2]);
         
         return /* Seq */[3,r1,r2];
         
        case 2:
         var r1$1=encode_regexp(char_vars,act,param[1]);
         
         var r2$1=encode_regexp(char_vars,act,param[2]);
         
         return /* Alt */[4,r1$1,r2$1];
         
        case 3:
         var r=encode_regexp(char_vars,act,param[1]);return /* Star */[5,r];
        case 4:
         var x=param[2];
         
         var name=x[1];
         
         var r$1=encode_regexp(char_vars,act,param[1]);
         
         if(IdSet[3](x,char_vars))
          {return /* Seq */[3,
                   /* Tag */[2,/* record */[0,name,/* true */1,act]],
                   r$1];
           }
         else
          {return /* Seq */[3,
                   /* Tag */[2,/* record */[0,name,/* true */1,act]],
                   /* Seq */[3,
                    r$1,
                    /* Tag */[2,/* record */[0,name,/* false */0,act]]]];
           }
         
        }}
    };

var
 incr_pos=
  function(param)
   {if(param){return /* Some */[0,param[1]+1];}else{return /* None */0;}};

var
 decr_pos=
  function(param)
   {if(param){return /* Some */[0,param[1]-1];}else{return /* None */0;}};

var opt=/* true */1;

var
 mk_seq=
  function(r1,r2)
   {if(typeof r1==="number")
     {return r2;}
    else
     {if(typeof r2==="number"){return r1;}else{return /* Seq */[3,r1,r2];}}
    };

var
 add_pos=
  function(p,i)
   {if(p)
     {var match=p[1][1];
      
      return /* Some */[0,/* Sum */[0,/* tuple */[0,match[1],match[2]+i]]];
      }
    else
     {return /* None */0;}
    };

var
 mem_name=
  function(name,id_set)
   {return IdSet[16]
            (function(param)
              {return CamlPrimitive["caml_string_equal"](name,param[1]);},
             id_set);
    };

var
 opt_regexp=
  function(all_vars,char_vars,optional_vars,double_vars,r)
   {var env=Hashtbl["create"](/* None */0,17);
    
    var
     size_forward=
      function(pos,param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){case 0:exit=200;}}
        else
         {switch(param[0])
           {case 0:
             if(param[2]!==0){exit=200;}else{return /* Some */[0,pos+1];}
            case 1:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"lexgen.ml",348,18]];
             
            case 2:exit=200;
            case 3:
             var match=size_forward(pos,param[1]);
             
             if(match)
              {return size_forward(match[1],param[2]);}
             else
              {return /* None */0;}
             
            case 4:
             var pos1=size_forward(pos,param[1]);
             
             var pos2=size_forward(pos,param[2]);
             
             if(CamlPrimitive["caml_equal"](pos1,pos2))
              {return pos1;}
             else
              {return /* None */0;}
             
            case 5:return /* None */0;
            }}
        
        switch(exit){case 200:return /* Some */[0,pos];}
        };
    
    var
     simple_forward=
      function(pos,r)
       {if(typeof r==="number")
         {switch(r){case 0:return /* tuple */[0,r,/* Some */[0,pos]];}}
        else
         {switch(r[0])
           {case 0:return /* tuple */[0,r,/* Some */[0,r[2]?pos:pos+1]];
            case 1:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"lexgen.ml",374,18]];
             
            case 2:
             var n=r[1];
             
             if(mem_name(n[1],double_vars))
              {return /* tuple */[0,r,/* Some */[0,pos]];}
             else
              {Hashtbl["add"]
                (env,
                 /* tuple */[0,n[1],n[2]],
                 /* Sum */[0,/* tuple */[0,/* Start */0,pos]]);
               return /* tuple */[0,/* Empty */0,/* Some */[0,pos]];
               }
             
            case 3:
             var r2=r[2];
             
             var match=simple_forward(pos,r[1]);
             
             var pos$1=match[2];
             
             var r1=match[1];
             
             if(pos$1)
              {var match$1=simple_forward(pos$1[1],r2);
               
               return /* tuple */[0,mk_seq(r1,match$1[1]),match$1[2]];
               }
             else
              {return /* tuple */[0,mk_seq(r1,r2),/* None */0];}
             
            case 4:
             var pos1=size_forward(pos,r[1]);
             
             var pos2=size_forward(pos,r[2]);
             
             return /* tuple */[0,
                     r,
                     CamlPrimitive["caml_equal"](pos1,pos2)?pos1:/* None */0];
             
            case 5:return /* tuple */[0,r,/* None */0];
            }}
        };
    
    var
     size_backward=
      function(pos,param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){case 0:exit=193;}}
        else
         {switch(param[0])
           {case 0:
             if(param[2]!==0){exit=193;}else{return /* Some */[0,pos-1];}
            case 1:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"lexgen.ml",390,18]];
             
            case 2:exit=193;
            case 3:
             var match=size_backward(pos,param[2]);
             
             if(match)
              {return size_backward(match[1],param[1]);}
             else
              {return /* None */0;}
             
            case 4:
             var pos1=size_backward(pos,param[1]);
             
             var pos2=size_backward(pos,param[2]);
             
             if(CamlPrimitive["caml_equal"](pos1,pos2))
              {return pos1;}
             else
              {return /* None */0;}
             
            case 5:return /* None */0;
            }}
        
        switch(exit){case 193:return /* Some */[0,pos];}
        };
    
    var
     simple_backward=
      function(pos,r)
       {if(typeof r==="number")
         {switch(r){case 0:return /* tuple */[0,r,/* Some */[0,pos]];}}
        else
         {switch(r[0])
           {case 0:return /* tuple */[0,r,/* Some */[0,r[2]?pos:pos-1]];
            case 1:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"lexgen.ml",417,18]];
             
            case 2:
             var n=r[1];
             
             if(mem_name(n[1],double_vars))
              {return /* tuple */[0,r,/* Some */[0,pos]];}
             else
              {Hashtbl["add"]
                (env,
                 /* tuple */[0,n[1],n[2]],
                 /* Sum */[0,/* tuple */[0,/* End */1,pos]]);
               return /* tuple */[0,/* Empty */0,/* Some */[0,pos]];
               }
             
            case 3:
             var r1=r[1];
             
             var match=simple_backward(pos,r[2]);
             
             var pos$1=match[2];
             
             var r2=match[1];
             
             if(pos$1)
              {var match$1=simple_backward(pos$1[1],r1);
               
               return /* tuple */[0,mk_seq(match$1[1],r2),match$1[2]];
               }
             else
              {return /* tuple */[0,mk_seq(r1,r2),/* None */0];}
             
            case 4:
             var pos1=size_backward(pos,r[1]);
             
             var pos2=size_backward(pos,r[2]);
             
             return /* tuple */[0,
                     r,
                     CamlPrimitive["caml_equal"](pos1,pos2)?pos1:/* None */0];
             
            case 5:return /* tuple */[0,r,/* None */0];
            }}
        };
    
    if(opt)
     {var match=simple_forward(0,r);
      
      var match$1=simple_backward(0,match[1]);
      
      var r$1=match$1[1];
      }
    else
     {var r$1=r;}
    
    var loc_count=[0,0];
    
    var
     get_tag_addr=
      function(t)
       {try
         {return Hashtbl["find"](env,t);}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {var n=loc_count[1];
            
            loc_count[0]++;
            Hashtbl["add"](env,t,/* Sum */[0,/* tuple */[0,/* Mem */[0,n],0]]);
            return /* Sum */[0,/* tuple */[0,/* Mem */[0,n],0]];
            }
          else
           {throw exn;}
          }
        };
    
    var
     alloc_exp=
      function(pos,r)
       {if(typeof r==="number")
         {switch(r){case 0:return /* tuple */[0,r,pos];}}
        else
         {switch(r[0])
           {case 0:return /* tuple */[0,r,r[2]?pos:add_pos(pos,1)];
            case 1:
             throw [0,
                    CamlPrimitive["caml_global_data"]["Assert_failure"],
                    [0,"lexgen.ml",464,18]];
             
            case 2:
             var n=r[1];
             
             if(mem_name(n[1],double_vars))
              {return /* tuple */[0,r,pos];}
             else
              {if(pos)
                {Hashtbl["add"](env,/* tuple */[0,n[1],n[2]],pos[1]);
                 return /* tuple */[0,/* Empty */0,pos];
                 }
               else
                {var a=get_tag_addr(/* tuple */[0,n[1],n[2]]);
                 
                 return /* tuple */[0,r,/* Some */[0,a]];
                 }
               }
             
            case 3:
             var match$2=alloc_exp(pos,r[1]);
             
             var match$3=alloc_exp(match$2[2],r[2]);
             
             return /* tuple */[0,mk_seq(match$2[1],match$3[1]),match$3[2]];
             
            case 4:
             var off=size_forward(0,r);
             
             if(off)
              {return /* tuple */[0,r,add_pos(pos,off[1])];}
             else
              {return /* tuple */[0,r,/* None */0];}
             
            case 5:return /* tuple */[0,r,/* None */0];
            }}
        };
    
    var match$2=alloc_exp(/* None */0,r$1);
    
    var
     m=
      IdSet[14]
       (function(x,r)
         {var name=x[1];
          
          if(IdSet[3](x,char_vars))
           {var
             v=
              /* Ident_char */[1,
               IdSet[3](x,optional_vars),
               get_tag_addr(/* tuple */[0,name,/* true */1])];
            }
          else
           {var
             v=
              /* Ident_string */[0,
               IdSet[3](x,optional_vars),
               get_tag_addr(/* tuple */[0,name,/* true */1]),
               get_tag_addr(/* tuple */[0,name,/* false */0])];
            }
          
          return /* :: */[0,/* tuple */[0,x,v],r];
          },
        all_vars,
        /* [] */0);
    
    return /* tuple */[0,m,match$2[1],loc_count[1]];
    };

var
 encode_casedef=
  function(casedef)
   {return List["fold_left"]
            (function(param,param$1)
              {var count=param[3];
               
               var expr=remove_nested_as(param$1[1]);
               
               var char_vars=find_chars(expr);
               
               var r=encode_regexp(char_vars,count,expr);
               
               var opt_vars=find_optional(expr);
               
               var match=find_double(expr);
               
               var match$1=opt_regexp(match[2],char_vars,opt_vars,match[1],r);
               
               return /* tuple */[0,
                       /* Alt */[4,
                        param[1],
                        /* Seq */[3,match$1[2],/* Action */[1,count]]],
                       /* :: */[0,
                        /* tuple */[0,count,match$1[1],param$1[2]],
                        param[2]],
                       1+count,
                       Pervasives["max"](match$1[3],param[4])];
               },
             [/* tuple */0,/* Empty */0,/* [] */0,0,0],
             casedef);
    };

var
 encode_lexdef=
  function(def)
   {chars[1]=/* [] */0;
    chars_count[1]=0;
    var
     entry_list=
      List["map"]
       (function(param)
         {var match=encode_casedef(param[4]);
          
          return /* tuple */[0,
                  /* record */[0,
                   param[1],
                   match[1],
                   match[4],
                   List["rev"](match[2])],
                  param[3],
                  param[2]];
          },
        def);
    
    var chr=$$Array["of_list"](List["rev"](chars[1]));
    
    chars[1]=/* [] */0;
    return /* tuple */[0,chr,entry_list];
    };

var
 trans_compare=
  function(param,param$1)
   {var r=CamlPrimitive["caml_compare"](param[1],param$1[1]);
    
    if(r!==0){return r;}else{return Tags[10](param[2],param$1[2]);}
    };

var TransSet=Set["Make"]([0,trans_compare]);

var
 nullable=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){case 0:exit=156;}}
    else
     {switch(param[0])
       {case 0:exit=157;
        case 1:exit=157;
        case 2:exit=156;
        case 3:return nullable(param[1])&&nullable(param[2]);
        case 4:return nullable(param[1])||nullable(param[2]);
        case 5:return /* true */1;
        }}
    
    switch(exit){case 156:return /* true */1;case 157:return /* false */0;}
    };

var
 emptymatch=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 2:return Tags[4](param[1],Tags[1]);
        case 3:return Tags[7](emptymatch(param[1]),emptymatch(param[2]));
        case 4:
         var r1=param[1];
         
         if(nullable(r1))
          {return emptymatch(r1);}
         else
          {return emptymatch(param[2]);}
         
        case 5:
         var r=param[1];
         
         if(nullable(r)){return emptymatch(r);}else{return Tags[1];}
         
        default:exit=155;}}
    
    switch(exit){case 155:return Tags[1];}
    };

var
 addtags=
  function(transs,tags)
   {return TransSet[14]
            (function(param,r)
              {return TransSet[4]
                       (/* tuple */[0,param[1],Tags[7](tags,param[2])],r);
               },
             transs,
             TransSet[1]);
    };

var
 firstpos=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){case 0:exit=153;}}
    else
     {switch(param[0])
       {case 0:
         return TransSet[4]
                 (/* tuple */[0,/* OnChars */[0,param[1]],Tags[1]],
                  TransSet[1]);
         
        case 1:
         return TransSet[4]
                 (/* tuple */[0,/* ToAction */[1,param[1]],Tags[1]],
                  TransSet[1]);
         
        case 2:exit=153;
        case 3:
         var r1=param[1];
         
         if(nullable(r1))
          {return TransSet[7]
                   (firstpos(r1),addtags(firstpos(param[2]),emptymatch(r1)));
           }
         else
          {return firstpos(r1);}
         
        case 4:return TransSet[7](firstpos(param[1]),firstpos(param[2]));
        case 5:return firstpos(param[1]);
        }}
    
    switch(exit){case 153:return TransSet[1];}
    };

var
 followpos=
  function(size,entry_list)
   {var v=CamlPrimitive["caml_make_vect"](size,TransSet[1]);
    
    var
     fill=
      function(s,param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){}}
        else
         {switch(param[0])
           {case 0:return v[param[1]+1]=s,0;
            case 3:
             var r2=param[2];
             
             fill
              (nullable(r2)
                ?TransSet[7](firstpos(r2),addtags(s,emptymatch(r2)))
                :firstpos(r2),
               param[1]);
             return fill(s,r2);
             
            case 4:fill(s,param[1]);return fill(s,param[2]);
            case 5:var r=param[1];return fill(TransSet[7](firstpos(r),s),r);
            default:exit=150;}}
        
        switch(exit){case 150:return /* () */0;}
        };
    
    List["iter"]
     (function(param){return fill(TransSet[1],param[1][2]);},entry_list);
    return v;
    };

var no_action=Pervasives["max_int"];

var
 compare$1=
  function(prim,prim$1){return CamlPrimitive["caml_compare"](prim,prim$1);};

var StateSet=Set["Make"]([0,compare$1]);

var compare$2=function(x,y){return CamlPrimitive["caml_int_compare"](x,y);};

var MemMap=Map["Make"]([0,compare$2]);

var
 dtag=
  function(oc,t)
   {return Printf["fprintf"]
            (oc,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,
                60,
                [/* String */2,
                 /* No_padding */0,
                 [/* Char_literal */12,62,/* End_of_format */0]]]],
              "%s<%s>"],
             t[1],
             t[2]?"s":"e");
    };

var
 dmem_map=
  function(dp,ds,m)
   {return MemMap[10]
            (function(k,x)
              {Printf["eprintf"]
                ([/* Format */0,
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* String_literal */11," -> ",/* End_of_format */0]],
                  "%d -> "],
                 k);
               dp(x);
               return ds(/* () */0);
               },
             m);
    };

var
 dtag_map=
  function(dp,ds,m)
   {return TagMap[10]
            (function(t,x)
              {dtag(Pervasives["stderr"],t);
               Printf["eprintf"]
                ([/* Format */0,
                  [/* String_literal */11," -> ",/* End_of_format */0],
                  " -> "]);
               dp(x);
               return ds(/* () */0);
               },
             m);
    };

var
 dstate=
  function(param)
   {var match=param[1];
    
    var act=match[1];
    
    if(act!==no_action)
     {Printf["eprintf"]
       ([/* Format */0,
         [/* String_literal */11,
          "final=",
          [/* Int */4,
           /* Int_d */0,
           /* No_padding */0,
           /* No_precision */0,
           [/* Char_literal */12,32,/* End_of_format */0]]],
         "final=%d "],
        act),
      dtag_map
       (function(x)
         {return Printf["eprintf"]
                  ([/* Format */0,
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0],
                    "%d"],
                   x);
          },
        function(param$1){return Pervasives["prerr_string"](" ,");},
        match[2][2]),
      Pervasives["prerr_endline"]("")}
    else
     {}
    
    return dmem_map
            (function(param$1)
              {return dtag_map
                       (function(x)
                         {return Printf["eprintf"]
                                  ([/* Format */0,
                                    [/* Int */4,
                                     /* Int_d */0,
                                     /* No_padding */0,
                                     /* No_precision */0,
                                     /* End_of_format */0],
                                    "%d"],
                                   x);
                          },
                        function(param$2){return Pervasives["prerr_string"](" ,");},
                        param$1[2]);
               },
             function(param$1){return Pervasives["prerr_endline"]("");},
             param[2]);
    };

var
 dfa_state_empty=
  /* record */[0,
   /* tuple */[0,no_action,/* tuple */[0,Pervasives["max_int"],TagMap[1]]],
   MemMap[1]];

var
 dfa_state_is_empty=
  function(param)
   {return param[1][1]===
           no_action&&
           CamlPrimitive["caml_equal"](param[2],MemMap[1]);
    };

var compare$3=StateSet[10];

var StateSetSet=Set["Make"]([0,compare$3]);

var
 compare$4=
  function(e1,e2)
   {var r=CamlPrimitive["caml_compare"](e1[1],e2[1]);
    
    if(r!==0){return r;}else{return StateSetSet[10](e1[2],e2[2]);}
    };

var MemKey=Set["Make"]([0,compare$4]);

var
 env_to_class=
  function(m)
   {var
     env1=
      MemMap[11]
       (function(param,param$1,r)
         {var s=param$1[2];
          
          var tag=param$1[1];
          
          try
           {var ss=TagMap[22](tag,r);
            
            var r$1=TagMap[6](tag,r);
            
            return TagMap[4](tag,StateSetSet[4](s,ss),r$1);
            }
          catch(exn)
           {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
             {return TagMap[4](tag,StateSetSet[4](s,StateSetSet[1]),r);}
            else
             {throw exn;}
            }
          },
        m,
        TagMap[1]);
    
    return TagMap[11]
            (function(tag,ss,r){return MemKey[4](/* record */[0,tag,ss],r);},
             env1,
             MemKey[1]);
    };

var
 inverse_mem_map=
  function(trans,m,r)
   {return TagMap[11]
            (function(tag,addr,r)
              {try
                {var match=MemMap[22](addr,r);
                 
                 if(CamlPrimitive["caml_equal"](tag,match[1]))
                  {}
                 else
                  {throw [0,
                          CamlPrimitive["caml_global_data"]["Assert_failure"],
                          [0,"lexgen.ml",714,8]];
                   }
                 
                 var r$1=MemMap[6](addr,r);
                 
                 return MemMap[4]
                         (addr,/* tuple */[0,tag,StateSet[4](trans,match[2])],r$1);
                 }
               catch(exn)
                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                  {return MemMap[4]
                           (addr,/* tuple */[0,tag,StateSet[4](trans,StateSet[1])],r);
                   }
                 else
                  {throw exn;}
                 }
               },
             m,
             r);
    };

var
 inverse_mem_map_other=
  function(n,param,r){return inverse_mem_map(/* OnChars */[0,n],param[2],r);};

var
 get_key=
  function(param)
   {var o=param[2];
    
    var match=param[1];
    
    var act=match[1];
    
    var
     env=
      MemMap[11]
       (inverse_mem_map_other,
        o,
        act===no_action
         ?MemMap[1]
         :inverse_mem_map(/* ToAction */[1,act],match[2][2],MemMap[1]));
    
    var
     state_key=
      MemMap[11]
       (function(n,param$1,r){return StateSet[4](/* OnChars */[0,n],r);},
        o,
        act===no_action
         ?StateSet[1]
         :StateSet[4](/* ToAction */[1,act],StateSet[1]));
    
    var mem_key=env_to_class(env);
    
    return /* record */[0,state_key,mem_key];
    };

var
 key_compare=
  function(k1,k2)
   {var r=StateSet[10](k1[1],k2[1]);
    
    if(r!==0){return r;}else{return MemKey[10](k1[2],k2[2]);}
    };

var StateMap=Map["Make"]([0,key_compare]);

var state_map=[0,StateMap[1]];

var todo=Stack["create"](/* () */0);

var next_state_num=[0,0];

var next_mem_cell=[0,0];

var temp_pending=[0,/* false */0];

var tag_cells=Hashtbl["create"](/* None */0,17);

var state_table=Table["create"](dfa_state_empty);

var
 reset_state=
  function(param)
   {Stack["clear"](todo);
    next_state_num[1]=0;
    var match=Table["trim"](state_table);
    
    return /* () */0;
    };

var
 reset_state_partial=
  function(ntags)
   {next_mem_cell[1]=ntags;
    Hashtbl["clear"](tag_cells);
    temp_pending[1]=/* false */0;
    return state_map[1]=StateMap[1],0;
    };

var
 do_alloc_temp=
  function(param){temp_pending[1]=/* true */1;return next_mem_cell[1];};

var
 do_alloc_cell=
  function(used,t)
   {try
     {var available=Hashtbl["find"](tag_cells,t);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var available=Ints[1];}
      else
       {throw exn;}
      }
    
    try
     {return Ints[23](Ints[9](available,used));}
    catch(exn$1)
     {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
       {temp_pending[1]=/* false */0;
        var n=next_mem_cell[1];
        
        if(n>=255){throw Memory_overflow;}else{}
        
        Hashtbl["replace"](tag_cells,t,Ints[4](n,available));
        next_mem_cell[0]++;
        return n;
        }
      else
       {throw exn$1;}
      }
    };

var is_old_addr=function(a){return a>=0;};

var is_new_addr=function(a){return a<0;};

var
 old_in_map=
  function(m,r)
   {return TagMap[11]
            (function(param,addr,r)
              {if(is_old_addr(addr)){return Ints[4](addr,r);}else{return r;}},
             m,
             r);
    };

var
 alloc_map=
  function(used,m,mvs)
   {return TagMap[11]
            (function(tag,a,param)
              {var mvs$1=param[2];
               
               if(is_new_addr(a))
                {var a$1=do_alloc_cell(used,tag);
                 
                 var match=/* tuple */[0,a$1,Ints[4](a$1,mvs$1)];
                 }
               else
                {var match=/* tuple */[0,a,mvs$1];}
               
               return /* tuple */[0,TagMap[4](tag,match[1],param[1]),match[2]];
               },
             m,
             /* tuple */[0,TagMap[1],mvs]);
    };

var
 create_new_state=
  function(param)
   {var o=param[2];
    
    var match=param[1];
    
    var m_act=match[2][2];
    
    var
     used=
      MemMap[11]
       (function(param$1,param$2,r){return old_in_map(param$2[2],r);},
        o,
        old_in_map(m_act,Ints[1]));
    
    var match$1=alloc_map(used,m_act,Ints[1]);
    
    var
     match$2=
      MemMap[11]
       (function(k,param$1,param$2)
         {var match$3=alloc_map(used,param$1[2],param$2[2]);
          
          return /* tuple */[0,
                  MemMap[4](k,/* tuple */[0,param$1[1],match$3[1]],param$2[1]),
                  match$3[2]];
          },
        o,
        /* tuple */[0,MemMap[1],match$1[2]]);
    
    return /* tuple */[0,
            /* record */[0,
             /* tuple */[0,match[1],/* tuple */[0,0,match$1[1]]],
             match$2[1]],
            Ints[14]
             (function(x,r){return /* :: */[0,/* Set */[1,x],r];},
              match$2[2],
              /* [] */0)];
    };

var create_new_addr_gen=function(param){return /* record */[0,-1,TagMap[1]];};

var
 alloc_new_addr=
  function(tag,r)
   {try
     {return TagMap[22](tag,r[2]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var a=r[1];r[1]=a-1;r[2]=TagMap[4](tag,a,r[2]);return a;}
      else
       {throw exn;}
      }
    };

var
 create_mem_map=
  function(tags,gen)
   {return Tags[14]
            (function(tag,r){return TagMap[4](tag,alloc_new_addr(tag,gen),r);},
             tags,
             TagMap[1]);
    };

var
 create_init_state=
  function(pos)
   {var gen=create_new_addr_gen(/* () */0);
    
    return TransSet[14]
            (function(param,st)
              {var tags=param[2];
               
               var t=param[1];
               
               switch(t[0])
                {case 0:
                  var n=t[1];
                  
                  try
                   {var match=MemMap[22](n,st[2]);
                    
                    throw [0,
                           CamlPrimitive["caml_global_data"]["Assert_failure"],
                           [0,"lexgen.ml",866,49]];
                    }
                  catch(exn)
                   {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                     {return /* record */[0,
                              st[1],
                              MemMap[4](n,/* tuple */[0,0,create_mem_map(tags,gen)],st[2])];
                      }
                    else
                     {throw exn;}
                    }
                  
                 case 1:
                  var n$1=t[1];
                  
                  var match$1=st[1];
                  
                  if(n$1<match$1[1])
                   {return /* record */[0,
                            /* tuple */[0,n$1,/* tuple */[0,0,create_mem_map(tags,gen)]],
                            st[2]];
                    }
                  else
                   {return st;}
                  
                 }
               },
             pos,
             dfa_state_empty);
    };

var
 get_map=
  function(t,st)
   {switch(t[0])
     {case 0:var match=MemMap[22](t[1],st[2]);return match[2];
      case 1:var match$1=st[1];return match$1[2][2];
      }
    };

var dest=function(param){return param[1];};

var
 orig=
  function(param){switch(param[0]){case 0:return param[2];case 1:return -1;}};

var
 pmv=
  function(oc,mv)
   {return Printf["fprintf"]
            (oc,
             [/* Format */0,
              [/* Int */4,
               /* Int_d */0,
               /* No_padding */0,
               /* No_precision */0,
               [/* String_literal */11,
                " <- ",
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 /* End_of_format */0]]],
              "%d <- %d"],
             dest(mv),
             orig(mv));
    };

var
 pmvs=
  function(oc,mvs)
   {List["iter"]
     (function(mv)
       {return Printf["fprintf"]
                (oc,
                 [/* Format */0,
                  [/* Alpha */15,
                   [/* Char_literal */12,32,/* End_of_format */0]],
                  "%a "],
                 pmv,
                 mv);
        },
      mvs);
    Pervasives["output_char"](oc,10);
    return Pervasives["flush"](oc);
    };

var
 sort_mvs=
  function(mvs)
   {var
     do_rec=
      function(r,mvs)
       {if(mvs)
         {var
           dests=
            List["fold_left"]
             (function(r,mv){return Ints[4](dest(mv),r);},Ints[1],mvs);
          
          var
           match=
            List["partition"]
             (function(mv){return Ints[3](orig(mv),dests);},mvs);
          
          var here=match[2];
          
          var rem=match[1];
          
          if(here)
           {return do_rec(Pervasives["@"](here,r),rem);}
          else
           {var exit;
            
            if(rem)
             {var match$1=rem[1];
              
              switch(match$1[0])
               {case 0:
                 var d=match$1[1];
                 
                 var d$prime=do_alloc_temp(/* () */0);
                 
                 return /* :: */[0,
                         /* Copy */[0,d$prime,d],
                         do_rec
                          (r,
                           List["map"]
                            (function(mv)
                              {if(orig(mv)===d)
                                {return /* Copy */[0,dest(mv),d$prime];}
                               else
                                {return mv;}
                               },
                             rem))];
                 
                case 1:exit=68;
                }
              }
            else
             {exit=68;}
            
            switch(exit)
             {case 68:
               throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"lexgen.ml",917,17]];
               
              }
            }
          }
        else
         {return r;}
        };
    
    return do_rec(/* [] */0,mvs);
    };

var
 move_to=
  function(mem_key,src,tgt)
   {var
     mvs=
      MemKey[14]
       (function(param,r)
         {var tag=param[1];
          
          return StateSetSet[14]
                  (function(s,r)
                    {try
                      {var t=StateSet[23](s);
                       
                       var src$1=TagMap[22](tag,get_map(t,src));
                       
                       var tgt$1=TagMap[22](tag,get_map(t,tgt));
                       
                       if(src$1!==tgt$1)
                        {if(is_new_addr(src$1))
                          {return /* :: */[0,/* Set */[1,tgt$1],r];}
                         else
                          {return /* :: */[0,/* Copy */[0,tgt$1,src$1],r];}
                         }
                       else
                        {return r;}
                       }
                     catch(exn)
                      {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                        {throw [0,
                                CamlPrimitive["caml_global_data"]["Assert_failure"],
                                [0,"lexgen.ml",940,27]];
                         }
                       else
                        {throw exn;}
                       }
                     },
                   param[2],
                   r);
          },
        mem_key,
        /* [] */0);
    
    return sort_mvs(mvs);
    };

var
 get_state=
  function(st)
   {var key=get_key(st);
    
    try
     {var num=StateMap[22](key,state_map[1]);
      
      return /* tuple */[0,
              num,
              move_to(key[2],st,Table["get"](state_table,num))];
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var num$1=next_state_num[1];
        
        next_state_num[0]++;
        var match=create_new_state(st);
        
        var st$1=match[1];
        
        Table["emit"](state_table,st$1);
        state_map[1]=StateMap[4](key,num$1,state_map[1]);
        Stack["push"](/* tuple */[0,st$1,num$1],todo);
        return /* tuple */[0,num$1,match[2]];
        }
      else
       {throw exn;}
      }
    };

var
 map_on_all_states=
  function(f,old_res)
   {var res=old_res;
    
    try
     {while(/* true */1)
       {var match=Stack["pop"](todo);
        
        var r=f(match[1]);
        
        res=/* :: */[0,/* tuple */[0,r,match[2]],res];
        }
      }
    catch(exn){if(exn===Stack["Empty"]){}else{throw exn;}}
    
    return res;
    };

var
 goto_state=
  function(st)
   {if(dfa_state_is_empty(st))
     {return [/* tuple */0,/* Backtrack */0,/* [] */0];}
    else
     {var match=get_state(st);
      
      return /* tuple */[0,/* Goto */[0,match[1]],match[2]];
      }
    };

var
 add_tags_to_map=
  function(gen,tags,m)
   {return Tags[14]
            (function(tag,m)
              {var m$1=TagMap[6](tag,m);
               
               return TagMap[4](tag,alloc_new_addr(tag,gen),m$1);
               },
             tags,
             m);
    };

var
 apply_transition=
  function(gen,r,pri,m,param)
   {var match=param[1];
    
    switch(match[0])
     {case 0:
       var tags=param[2];
       
       var n=match[1];
       
       try
        {var match$1=MemMap[22](n,r[2]);
         
         if(CamlPrimitive["caml_lessthan"](pri,match$1[1]))
          {var m$1=add_tags_to_map(gen,tags,m);
           
           return /* record */[0,
                   r[1],
                   MemMap[4](n,/* tuple */[0,pri,m$1],MemMap[6](n,r[2]))];
           }
         else
          {return r;}
         }
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {var m$2=add_tags_to_map(gen,tags,m);
           
           return /* record */[0,
                   r[1],
                   MemMap[4](n,/* tuple */[0,pri,m$2],r[2])];
           }
         else
          {throw exn;}
         }
       
      case 1:
       var n$1=match[1];
       
       var match$2=r[1];
       
       var on=match$2[1];
       
       if(n$1<on||on===n$1&&CamlPrimitive["caml_lessthan"](pri,match$2[2][1]))
        {var m$3=add_tags_to_map(gen,param[2],m);
         
         return /* record */[0,/* tuple */[0,n$1,/* tuple */[0,pri,m$3]],r[2]];
         }
       else
        {return r;}
       
      }
    };

var
 apply_transitions=
  function(gen,r,pri,m,ts)
   {return TransSet[14]
            (function(t,r){return apply_transition(gen,r,pri,m,t);},ts,r);
    };

var
 split_env=
  function(gen,follow,pos,m,s,param)
   {if(param)
     {var rem=param[2];
      
      var p=param[1];
      
      var st1=p[2];
      
      var s1=p[1];
      
      var here=Cset["inter"](s,s1);
      
      if(Cset["is_empty"](here))
       {return /* :: */[0,p,split_env(gen,follow,pos,m,s,rem)];}
      else
       {var rest=Cset["diff"](s,here);
        
        if(Cset["is_empty"](rest))
         {var rem$1=rem;}
        else
         {var rem$1=split_env(gen,follow,pos,m,rest,rem);}
        
        var new_st=apply_transitions(gen,st1,pos,m,follow);
        
        var stay=Cset["diff"](s1,here);
        
        if(Cset["is_empty"](stay))
         {return /* :: */[0,/* tuple */[0,here,new_st],rem$1];}
        else
         {return /* :: */[0,
                  /* tuple */[0,stay,st1],
                  /* :: */[0,/* tuple */[0,here,new_st],rem$1]];
          }
        }
      }
    else
     {return /* [] */0;}
    };

var
 comp_shift=
  function(gen,chars,follow,st)
   {return MemMap[11]
            (function(pos,param,env)
              {return split_env
                       (gen,follow[pos+1],pos,param[2],chars[pos+1],env);
               },
             st,
             /* :: */[0,
              /* tuple */[0,Cset["all_chars_eof"],dfa_state_empty],
              /* [] */0]);
    };

var
 reachs=
  function(chars,follow,st)
   {var gen=create_new_addr_gen(/* () */0);
    
    var env=comp_shift(gen,chars,follow,st);
    
    var
     env$1=
      List["map"]
       (function(param){return /* tuple */[0,param[1],goto_state(param[2])];},
        env);
    
    return Cset["env_to_array"](env$1);
    };

var
 get_tag_mem=
  function(n,env,t)
   {try
     {return TagMap[22](t,env[n+1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"lexgen.ml",1069,17]];
        }
      else
       {throw exn;}
      }
    };

var
 do_tag_actions=
  function(n,env,m)
   {var
     match=
      TagMap[11]
       (function(t,m,param)
         {var a=get_tag_mem(n,env,t);
          
          return /* tuple */[0,
                  Ints[4](a,param[1]),
                  /* :: */[0,/* SetTag */[0,a,m],param[2]]];
          },
        m,
        /* tuple */[0,Ints[1],/* [] */0]);
    
    var
     match$1=
      TagMap[11]
       (function(tag,m,param)
         {var r=param[2];
          
          var used=param[1];
          
          if(!Ints[3](m,used)&&tag[2])
           {return /* tuple */[0,
                    Ints[4](m,used),
                    /* :: */[0,/* EraseTag */[1,m],r]];
            }
          else
           {return /* tuple */[0,used,r];}
          },
        env[n+1],
        /* tuple */[0,match[1],match[2]]);
    
    return match$1[2];
    };

var
 translate_state=
  function(shortest_match,tags,chars,follow,st)
   {var match=st[1];
    
    var m=match[2][2];
    
    var n=match[1];
    
    if(CamlPrimitive["caml_equal"](MemMap[1],st[2]))
     {return /* Perform */[0,n,do_tag_actions(n,tags,m)];}
    else
     {if(shortest_match)
       {if(n===no_action)
         {return /* Shift */[1,/* No_remember */0,reachs(chars,follow,st[2])];
          }
        else
         {return /* Perform */[0,n,do_tag_actions(n,tags,m)];}
        }
      else
       {return /* Shift */[1,
                n===no_action
                 ?/* No_remember */0
                 :/* Remember */[0,n,do_tag_actions(n,tags,m)],
                reachs(chars,follow,st[2])];
        }
      }
    };

var
 dtags=
  function(chan,tags)
   {return Tags[13]
            (function(t)
              {return Printf["fprintf"]
                       (chan,
                        [/* Format */0,
                         [/* Char_literal */12,
                          32,
                          [/* Alpha */15,/* End_of_format */0]],
                         " %a"],
                        dtag,
                        t);
               },
             tags);
    };

var
 dtransset=
  function(s)
   {return TransSet[13]
            (function(trans)
              {var match=trans[1];
               
               switch(match[0])
                {case 0:
                  return Printf["eprintf"]
                          ([/* Format */0,
                            [/* String_literal */11,
                             " (-> ",
                             [/* Int */4,
                              /* Int_d */0,
                              /* No_padding */0,
                              /* No_precision */0,
                              [/* Char_literal */12,
                               44,
                               [/* Alpha */15,
                                [/* Char_literal */12,41,/* End_of_format */0]]]]],
                            " (-> %d,%a)"],
                           match[1],
                           dtags,
                           trans[2]);
                  
                 case 1:
                  return Printf["eprintf"]
                          ([/* Format */0,
                            [/* String_literal */11,
                             " ([",
                             [/* Int */4,
                              /* Int_d */0,
                              /* No_padding */0,
                              /* No_precision */0,
                              [/* String_literal */11,
                               "],",
                               [/* Alpha */15,
                                [/* Char_literal */12,41,/* End_of_format */0]]]]],
                            " ([%d],%a)"],
                           match[1],
                           dtags,
                           trans[2]);
                  
                 }
               },
             s);
    };

var
 dfollow=
  function(t)
   {Printf["eprintf"]
     ([/* Format */0,
       [/* String_literal */11,"follow=[",/* End_of_format */0],
       "follow=["]);
    for(var i=0;i<=/* -1 for tag */t["length"]-1-1;i++)
     {Printf["eprintf"]
       ([/* Format */0,
         [/* Int */4,
          /* Int_d */0,
          /* No_padding */0,
          /* No_precision */0,
          [/* Char_literal */12,58,/* End_of_format */0]],
         "%d:"],
        i),
      dtransset(t[i+1])}
    
    return Pervasives["prerr_endline"]("]");
    };

var
 make_tag_entry=
  function(id,start,act,a,r)
   {var exit;
    
    var match=a[1];
    
    var match$1=match[1];
    
    if(typeof match$1==="number")
     {exit=14;}
    else
     {if(match[2]!==0)
       {exit=14;}
      else
       {return TagMap[4](/* record */[0,id,start,act],match$1[1],r);}
      }
    
    switch(exit){case 14:return r;}
    };

var
 extract_tags=
  function(l)
   {var envs=CamlPrimitive["caml_make_vect"](List["length"](l),TagMap[1]);
    
    List["iter"]
     (function(param)
       {var act=param[1];
        
        return envs[act+1]=
               List["fold_right"]
                (function(param$1,r)
                  {var v=param$1[2];
                   
                   var name=param$1[1][1];
                   
                   switch(v[0])
                    {case 0:
                      return make_tag_entry
                              (name,
                               /* true */1,
                               act,
                               v[2],
                               make_tag_entry(name,/* false */0,act,v[3],r));
                      
                     case 1:return make_tag_entry(name,/* true */1,act,v[2],r);
                     }
                   },
                 param[2],
                 TagMap[1]),
               0;
        },
      l);
    return envs;
    };

var
 make_dfa=
  function(lexdef)
   {var match=encode_lexdef(lexdef);
    
    var entry_list=match[2];
    
    var chars$1=match[1];
    
    var follow=followpos(/* -1 for tag */chars$1["length"]-1,entry_list);
    
    reset_state(/* () */0);
    var r_states=[0,/* [] */0];
    
    var
     initial_states=
      List["map"]
       (function(param)
         {var le=param[1];
          
          var tags=extract_tags(le[4]);
          
          reset_state_partial(le[3]);
          var pos_set=firstpos(le[2]);
          
          var init_state=create_init_state(pos_set);
          
          var init_num=get_state(init_state);
          
          r_states[1]=
          map_on_all_states
           (translate_state(param[3],tags,chars$1,follow),r_states[1]);
          return /* record */[0,
                  le[1],
                  param[2],
                  temp_pending[1]?next_mem_cell[1]+1:next_mem_cell[1],
                  init_num,
                  le[4]];
          },
        entry_list);
    
    var states=r_states[1];
    
    var
     actions=
      CamlPrimitive["caml_make_vect"]
       (next_state_num[1],[/* Perform */0,0,/* [] */0]);
    
    List["iter"]
     (function(param){return actions[param[2]+1]=param[1],0;},states);
    reset_state(/* () */0);
    reset_state_partial(0);
    return /* tuple */[0,initial_states,actions];
    };

module["exports"]={"Memory_overflow":Memory_overflow,"make_dfa":make_dfa};

