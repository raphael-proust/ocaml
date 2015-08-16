// Generated CODE, PLEASE EDIT WITH CARE 

var Table=require("./table.js");
var List=require("./list.js");
var Hashtbl=require("./hashtbl.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var code=Table["create"](0);

var emit_int=function(i){return Table["emit"](code,i);};

var
 ins_mem=
  function(i,c)
   {switch(i[0])
     {case 0:return /* :: */[0,i[1],/* :: */[0,i[2],c]];
      case 1:return /* :: */[0,i[1],/* :: */[0,255,c]];
      }
    };

var
 ins_tag=
  function(i,c)
   {switch(i[0])
     {case 0:return /* :: */[0,i[1],/* :: */[0,i[2],c]];
      case 1:return /* :: */[0,i[1],/* :: */[0,255,c]];
      }
    };

var
 do_emit_code=
  function(c)
   {var r=Table["size"](code);
    
    List["iter"](emit_int,c);
    emit_int(255);
    return r;
    };

var memory=Hashtbl["create"](/* None */0,101);

var
 mem_emit_code=
  function(c)
   {try
     {return Hashtbl["find"](memory,c);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {var r=do_emit_code(c);Hashtbl["add"](memory,c,r);return r;}
      else
       {throw exn;}
      }
    };

mem_emit_code(/* [] */0);
var
 emit_tag_code=
  function(c){return mem_emit_code(List["fold_right"](ins_tag,c,/* [] */0));};

var
 emit_mem_code=
  function(c){return mem_emit_code(List["fold_right"](ins_mem,c,/* [] */0));};

var
 most_frequent_elt=
  function(v)
   {var frequencies=Hashtbl["create"](/* None */0,17);
    
    var max_freq=0;
    
    var most_freq=v[1];
    
    for(var i=0;i<=/* -1 for tag */v["length"]-1-1;i++)
     {var e=v[i+1];
      
      try
       {var r=Hashtbl["find"](frequencies,e);}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {var r$1=[0,1];Hashtbl["add"](frequencies,e,r$1);var r=r$1;}
        else
         {throw exn;}
        }
      
      r[0]++;
      if(r[1]>max_freq){max_freq=r[1];most_freq=e;}else{}
      }
    
    return most_freq;
    };

var
 non_default_elements=
  function(def,v)
   {var
     nondef=
      function(i)
       {if(i>=/* -1 for tag */v["length"]-1)
         {return /* [] */0;}
        else
         {var e=v[i+1];
          
          if(CamlPrimitive["caml_equal"](e,def))
           {return nondef(i+1);}
          else
           {return /* :: */[0,/* tuple */[0,i,e],nondef(i+1)];}
          }
        };
    
    return nondef(0);
    };

var
 create_compact=
  function(param)
   {return /* record */[0,
            CamlPrimitive["caml_make_vect"](1024,0),
            CamlPrimitive["caml_make_vect"](1024,-1),
            0];
    };

var
 reset_compact=
  function(c)
   {c[1]=CamlPrimitive["caml_make_vect"](1024,0);
    c[2]=CamlPrimitive["caml_make_vect"](1024,-1);
    return c[3]=0,0;
    };

var trans=create_compact(/* () */0);

var moves=create_compact(/* () */0);

var
 grow_compact=
  function(c)
   {var old_trans=c[1];
    
    var old_check=c[2];
    
    var n=/* -1 for tag */old_trans["length"]-1;
    
    c[1]=CamlPrimitive["caml_make_vect"](2*n,0);
    $$Array["blit"](old_trans,0,c[1],0,c[3]);
    c[2]=CamlPrimitive["caml_make_vect"](2*n,-1);
    return $$Array["blit"](old_check,0,c[2],0,c[3]);
    };

var
 do_pack=
  function(state_num,orig,compact)
   {var $$default=most_frequent_elt(orig);
    
    var nondef=non_default_elements($$default,orig);
    
    var
     pack_from=
      function(b)
       {while(b+257>/* -1 for tag */compact[1]["length"]-1)
         {grow_compact(compact)}
        
        var
         try_pack=
          function(param)
           {if(param)
             {if(compact[2][b+param[1][1]+1]===-1)
               {return try_pack(param[2]);}
              else
               {return pack_from(b+1);}
              }
            else
             {return b;}
            };
        
        return try_pack(nondef);
        };
    
    var base=pack_from(0);
    
    List["iter"]
     (function(param)
       {var pos=param[1];
        
        compact[1][base+pos+1]=param[2];
        return compact[2][base+pos+1]=state_num,0;
        },
      nondef);
    if(base+257>compact[3]){compact[3]=base+257}else{}
    
    return /* tuple */[0,base,$$default];
    };

var
 pack_moves=
  function(state_num,move_t)
   {var move_v=CamlPrimitive["caml_make_vect"](257,0);
    
    var move_m=CamlPrimitive["caml_make_vect"](257,0);
    
    for(var i=0;i<=256;i++)
     {var match=move_t[i+1];
      
      var act=match[1];
      
      move_v[i+1]=act?act[1]:-1,move_m[i+1]=emit_mem_code(match[2])}
    
    var pk_trans=do_pack(state_num,move_v,trans);
    
    var pk_moves=do_pack(state_num,move_m,moves);
    
    return /* tuple */[0,pk_trans,pk_moves];
    };

var
 compact_tables=
  function(state_v)
   {var n=/* -1 for tag */state_v["length"]-1;
    
    var base=CamlPrimitive["caml_make_vect"](n,0);
    
    var backtrk=CamlPrimitive["caml_make_vect"](n,-1);
    
    var $$default=CamlPrimitive["caml_make_vect"](n,0);
    
    var base_code=CamlPrimitive["caml_make_vect"](n,0);
    
    var backtrk_code=CamlPrimitive["caml_make_vect"](n,0);
    
    var default_code=CamlPrimitive["caml_make_vect"](n,0);
    
    for(var i=0;i<=n-1;i++)
     {var match=state_v[i+1];
      
      switch(match[0])
       {case 0:base[i+1]=-(match[1]+1),base_code[i+1]=emit_tag_code(match[2]);
        case 1:
         var trans$1=match[1];
         
         if(trans$1)
          {backtrk[i+1]=trans$1[1],backtrk_code[i+1]=emit_tag_code(trans$1[2])}
         else
          {}
         
         var match$1=pack_moves(i,match[2]);
         
         var match$2=match$1[2];
         
         var match$3=match$1[1];
         
         base[i+1]=
         match$3[1],
         $$default[i+1]=
         match$3[2],
         base_code[i+1]=
         match$2[1],
         default_code[i+1]=
         match$2[2]
        }
      }
    
    var code$1=Table["trim"](code);
    
    if(/* -1 for tag */code$1["length"]-1>1)
     {var
       tables=
        /* record */[0,
         base,
         backtrk,
         $$default,
         $$Array["sub"](trans[1],0,trans[3]),
         $$Array["sub"](trans[2],0,trans[3]),
         base_code,
         backtrk_code,
         default_code,
         $$Array["sub"](moves[1],0,moves[3]),
         $$Array["sub"](moves[2],0,moves[3]),
         code$1];
      }
    else
     {var
       tables=
        /* record */[0,
         base,
         backtrk,
         $$default,
         $$Array["sub"](trans[1],0,trans[3]),
         $$Array["sub"](trans[2],0,trans[3]),
         [/* array */0],
         [/* array */0],
         [/* array */0],
         [/* array */0],
         [/* array */0],
         [/* array */0]];
      }
    
    reset_compact(trans);
    reset_compact(moves);
    return tables;
    };

module["exports"]={"compact_tables":compact_tables};

