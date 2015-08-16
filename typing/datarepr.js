// Generated CODE, PLEASE EDIT WITH CARE 

var Btype=require("./btype.js");
var List=require("./list.js");
var Path=require("./path.js");
var Location=require("./location.js");
var Ident=require("./ident.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 free_vars=
  function(ty)
   {var ret=[0,Btype["TypeSet"][1]];
    
    var
     loop=
      function(ty)
       {var ty$1=Btype["repr"](ty);
        
        if(ty$1[2]>=Btype["lowest_level"])
         {ty$1[2]=Btype["pivot_level"]-ty$1[2];
          var match=ty$1[1];
          
          var exit;
          
          if(typeof match==="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 0:return ret[1]=Btype["TypeSet"][4](ty$1,ret[1]),0;
              case 8:
               var row=Btype["row_repr"](match[1]);
               
               Btype["iter_row"](loop,row);
               if(!Btype["static_row"](row))
                {return loop(row[2]);}
               else
                {return 0;}
               
              default:exit=26;}}
          
          switch(exit){case 26:return Btype["iter_type_expr"](loop,ty$1);}
          }
        else
         {return 0;}
        };
    
    loop(ty);
    Btype["unmark_type"](ty);
    return ret[1];
    };

var
 constructor_descrs=
  function(ty_res,cstrs,priv)
   {var num_consts=[0,0];
    
    var num_nonconsts=[0,0];
    
    var num_normal=[0,0];
    
    List["iter"]
     (function(param)
       {if(param[2]===/* [] */0){num_consts[0]++}else{num_nonconsts[0]++}
        
        if(param[3]===/* None */0){return num_normal[0]++;}else{return 0;}
        },
      cstrs);
    var
     describe_constructors=
      function(idx_const,idx_nonconst,param)
       {if(param)
         {var rem=param[2];
          
          var match=param[1];
          
          var cd_res=match[3];
          
          var cd_args=match[2];
          
          var cd_id=match[1];
          
          if(cd_res){var ty_res$1=cd_res[1];}else{var ty_res$1=ty_res;}
          
          if(cd_args)
           {var
             match$1=
              /* tuple */[0,
               /* Cstr_block */[1,idx_nonconst],
               describe_constructors(idx_const,idx_nonconst+1,rem)];
            }
          else
           {var
             match$1=
              /* tuple */[0,
               /* Cstr_constant */[0,idx_const],
               describe_constructors(idx_const+1,idx_nonconst,rem)];
            }
          
          if(cd_res)
           {var res_vars=free_vars(cd_res[1]);
            
            var
             arg_vars=
              free_vars(Btype["newgenty"](/* Ttuple */[2,cd_args]));
            
            var
             existentials=
              Btype["TypeSet"][20](Btype["TypeSet"][9](arg_vars,res_vars));
            }
          else
           {var existentials=/* [] */0;}
          
          var
           cstr=
            /* record */[0,
             Ident["name"](cd_id),
             ty_res$1,
             existentials,
             cd_args,
             List["length"](cd_args),
             match$1[1],
             num_consts[1],
             num_nonconsts[1],
             num_normal[1],
             cd_res!==/* None */0,
             priv,
             match[4],
             match[5]];
          
          return /* :: */[0,/* tuple */[0,cd_id,cstr],match$1[2]];
          }
        else
         {return /* [] */0;}
        };
    
    return describe_constructors(0,0,cstrs);
    };

var
 extension_descr=
  function(path_ext,ext)
   {var match=ext[4];
    
    if(match)
     {var ty_res=match[1];}
    else
     {var
       ty_res=
        Btype["newgenty"](/* Tconstr */[3,ext[1],ext[2],[0,/* Mnil */0]]);
      }
    
    var tag=/* Cstr_extension */[2,path_ext,ext[3]===/* [] */0];
    
    var match$1=ext[4];
    
    if(match$1)
     {var ret_vars=free_vars(match$1[1]);
      
      var arg_vars=free_vars(Btype["newgenty"](/* Ttuple */[2,ext[3]]));
      
      var
       existentials=
        Btype["TypeSet"][20](Btype["TypeSet"][9](arg_vars,ret_vars));
      }
    else
     {var existentials=/* [] */0;}
    
    return /* record */[0,
            Path["last"](path_ext),
            ty_res,
            existentials,
            ext[3],
            List["length"](ext[3]),
            tag,
            -1,
            -1,
            -1,
            ext[4]!==/* None */0,
            ext[5],
            ext[6],
            ext[7]];
    };

var none=/* record */[0,[/* Ttuple */2,/* [] */0],-1,-1];

var
 dummy_label=
  /* record */[0,
   "",
   none,
   none,
   /* Immutable */0,
   -1,
   [/* array */0],
   /* Record_regular */0,
   /* Public */1,
   Location["none"],
   /* [] */0];

var
 label_descrs=
  function(ty_res,lbls,repres,priv)
   {var
     all_labels=
      CamlPrimitive["caml_make_vect"](List["length"](lbls),dummy_label);
    
    var
     describe_labels=
      function(num,param)
       {if(param)
         {var l=param[1];
          
          var
           lbl=
            /* record */[0,
             Ident["name"](l[1]),
             ty_res,
             l[3],
             l[2],
             num,
             all_labels,
             repres,
             priv,
             l[4],
             l[5]];
          
          all_labels[num+1]=lbl;
          return /* :: */[0,
                  /* tuple */[0,l[1],lbl],
                  describe_labels(num+1,param[2])];
          }
        else
         {return /* [] */0;}
        };
    
    return describe_labels(0,lbls);
    };

var
 Constr_not_found=
  CamlPrimitive["caml_set_oo_id"]([248,"Datarepr.Constr_not_found",0]);

var
 find_constr=
  function(tag,num_const,num_nonconst,param)
   {if(param)
     {var c=param[1];
      
      if(c[2])
       {if(CamlPrimitive["caml_equal"](tag,/* Cstr_block */[1,num_nonconst]))
         {return c;}
        else
         {return find_constr(tag,num_const,num_nonconst+1,param[2]);}
        }
      else
       {if(CamlPrimitive["caml_equal"](tag,/* Cstr_constant */[0,num_const]))
         {return c;}
        else
         {return find_constr(tag,num_const+1,num_nonconst,param[2]);}
        }
      }
    else
     {throw Constr_not_found;}
    };

var
 find_constr_by_tag=
  function(tag,cstrlist){return find_constr(tag,0,0,cstrlist);};

module["exports"]=
{"constructor_descrs":constructor_descrs,
 "extension_descr":extension_descr,
 "label_descrs":label_descrs,
 "Constr_not_found":Constr_not_found,
 "find_constr_by_tag":find_constr_by_tag};

