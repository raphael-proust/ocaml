// Generated CODE, PLEASE EDIT WITH CARE 

var Table=require("Table");
var List=require("List");
var Hashtbl=require("Hashtbl");
var $$Array=require("Array");


var code=Table["create"](0);

var emit_int=function(i){return Table["emit"](code,i);};

var
 ins_mem=
  function(i,c)
   {switch(i)
     {case 0:return /* :: */[0,i[1],/* :: */[0,i[2],c]];
      case 1:return /* :: */[0,i[1],/* :: */[0,255,c]];
      }
    };

var
 ins_tag=
  function(i,c)
   {switch(i)
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

var memory=Hashtbl["create"](0,101);

var
 mem_emit_code=
  function(c)
   {try
     {return Hashtbl["find"](memory,c);}
    catch(exn)
     {if(exn=Not_found)
       {var r=do_emit_code(c);Hashtbl["add"](memory,c,r);return r;}
      else
       {throw exn;}
      }
    };

mem_emit_code(0);
var
 emit_tag_code=
  function(c){return mem_emit_code(List["fold_right"](ins_tag,c,0));};

var
 emit_mem_code=
  function(c){return mem_emit_code(List["fold_right"](ins_mem,c,0));};

var
 most_frequent_elt=
  function(v)
   {var frequencies=Hashtbl["create"](0,17);
    
    var max_freq=0;
    
    var most_freq=v[0];
    
    for(var i=0;i<=v["length"]-1;i++)
     {var e=v[i];
      
      try
       {var r=Hashtbl["find"](frequencies,e);}
      catch(exn)
       {if(exn=Not_found)
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
       {if(i>=v["length"])
         {return 0;}
        else
         {var e=v[i];
          
          if("unknown primitive:caml_equal")
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
            "unknown primitive:caml_make_vect",
            "unknown primitive:caml_make_vect",
            0];
    };

var
 reset_compact=
  function(c)
   {c[1]="unknown primitive:caml_make_vect",0;
    c[2]="unknown primitive:caml_make_vect",0;
    return c[3]=0,0;
    };

var trans=create_compact(0);

var moves=create_compact(0);

var
 grow_compact=
  function(c)
   {var old_trans=c[1];
    
    var old_check=c[2];
    
    var n=old_trans["length"];
    
    c[1]="unknown primitive:caml_make_vect",0;
    $$Array["blit"](old_trans,0,c[1],0,c[3]);
    c[2]="unknown primitive:caml_make_vect",0;
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
       {while(b+257>compact[1]["length"]){grow_compact(compact)}
        
        var
         try_pack=
          function(param)
           {if(param)
             {if(compact[2][b+param[1][1]]=-1)
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
        
        compact[1][base+pos]=param[2],0;
        return compact[2][base+pos]=state_num,0;
        },
      nondef);
    if(base+257>compact[3]){compact[3]=base+257,0}else{}
    
    return /* tuple */[0,base,$$default];
    };

var
 pack_moves=
  function(state_num,move_t)
   {var move_v="unknown primitive:caml_make_vect";
    
    var move_m="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=256;i++)
     {var match=move_t[i];
      
      var act=match[1];
      
      move_v[i]=act?act[1]:-1,0,move_m[i]=emit_mem_code(match[2]),0}
    
    var pk_trans=do_pack(state_num,move_v,trans);
    
    var pk_moves=do_pack(state_num,move_m,moves);
    
    return /* tuple */[0,pk_trans,pk_moves];
    };

var
 compact_tables=
  function(state_v)
   {var n=state_v["length"];
    
    var base="unknown primitive:caml_make_vect";
    
    var backtrk="unknown primitive:caml_make_vect";
    
    var $$default="unknown primitive:caml_make_vect";
    
    var base_code="unknown primitive:caml_make_vect";
    
    var backtrk_code="unknown primitive:caml_make_vect";
    
    var default_code="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=n-1;i++)
     {var match=state_v[i];
      
      switch(match)
       {case 0:base[i]=-(match[1]+1),0,base_code[i]=emit_tag_code(match[2]),0;
        case 1:
         var trans$1=match[1];
         
         if(trans$1)
          {backtrk[i]=trans$1[1],0,backtrk_code[i]=emit_tag_code(trans$1[2]),0}
         else
          {}
         
         var match$1=pack_moves(i,match[2]);
         
         var match$2=match$1[2];
         
         var match$3=match$1[1];
         
         base[i]=
         match$3[1],
         0,
         $$default[i]=
         match$3[2],
         0,
         base_code[i]=
         match$2[1],
         0,
         default_code[i]=
         match$2[2],
         0
        }
      }
    
    var code$1=Table["trim"](code);
    
    if(code$1["length"]>1)
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
         [],
         [],
         [],
         [],
         [],
         []];
      }
    
    reset_compact(trans);
    reset_compact(moves);
    return tables;
    };

module["exports"]={"compact_tables":compact_tables};

