// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Weak=require("./weak.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Types=require("./types.js");
var Set=require("./set.js");
var Misc=require("./misc.js");
var Path=require("./path.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var Map=require("./map.js");
var CamlPrimitive=require("./camlPrimitive.js");


var $$let=Types["TypeOps"];

var TypeSet=Set["Make"]([0,$$let[1]]);

var $$let$1=Types["TypeOps"];

var TypeMap=Map["Make"]([0,$$let$1[1]]);

var $$let$2=Types["TypeOps"];

var TypeHash=Hashtbl["Make"]([0,$$let$2[2],$$let$2[3]]);

var
 print_raw=
  [0,
   function(param)
    {throw [0,
            CamlPrimitive["caml_global_data"]["Assert_failure"],
            [0,"typing/btype.ml",27,16]];
     }];

var generic_level=1e8;

var lowest_level=0;

var pivot_level=2*lowest_level-1;

var new_id=[0,-1];

var
 newty2=
  function(level,desc)
   {new_id[0]++;return /* record */[0,desc,level,new_id[1]];};

var newgenty=function(desc){return newty2(generic_level,desc);};

var newgenvar=function(name,param){return newgenty(/* Tvar */[0,name]);};

var
 is_Tvar=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 0:return /* true */1;default:exit=136;}}
    
    switch(exit){case 136:return /* false */0;}
    };

var
 is_Tunivar=
  function(param)
   {var match=param[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 9:return /* true */1;default:exit=134;}}
    
    switch(exit){case 134:return /* false */0;}
    };

var dummy_method="*dummy method*";

var
 default_mty=
  function(param)
   {if(param){return param[1];}else{return [/* Mty_signature */1,/* [] */0];}};

var
 field_kind_repr=
  function(kind)
   {var exit;
    
    if(typeof kind==="number")
     {exit=131;}
    else
     {var match=kind[1][1];
      
      if(match){return field_kind_repr(match[1]);}else{exit=131;}
      }
    
    switch(exit){case 131:return kind;}
    };

var
 repr=
  function(t)
   {var match=t[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 5:
         if(field_kind_repr(match[2])===/* Fabsent */1)
          {return repr(match[4]);}
         else
          {exit=130;}
         
        case 6:return repr(match[1]);
        default:exit=130;}}
    
    switch(exit){case 130:return t;}
    };

var
 commu_repr=
  function(c)
   {var exit;
    
    if(typeof c==="number")
     {exit=128;}
    else
     {var r=c[1];
      
      if(r[1]!==/* Cunknown */1){return commu_repr(r[1]);}else{exit=128;}
      }
    
    switch(exit){case 128:return c;}
    };

var
 row_field_repr_aux=
  function(tl,fi)
   {var exit;
    
    if(typeof fi==="number")
     {switch(fi){case 0:exit=126;}}
    else
     {switch(fi[0])
       {case 0:
         if(fi[1])
          {if(tl!==/* [] */0)
            {return /* Rpresent */[0,/* Some */[0,List["hd"](tl)]];}
           else
            {exit=126;}
           }
         else
          {exit=126;}
         
        case 1:
         var r=fi[4];
         
         var tl$prime=fi[2];
         
         var match=r[1];
         
         if(match)
          {return row_field_repr_aux(Pervasives["@"](tl,tl$prime),match[1]);}
         else
          {return /* Reither */[1,fi[1],Pervasives["@"](tl,tl$prime),fi[3],r];
           }
         
        }}
    
    switch(exit){case 126:return fi;}
    };

var row_field_repr=function(fi){return row_field_repr_aux(/* [] */0,fi);};

var
 rev_concat=
  function(l,ll)
   {if(ll){return rev_concat(Pervasives["@"](ll[1],l),ll[2]);}else{return l;}};

var
 row_repr_aux=
  function(ll,row)
   {var match=repr(row[2])[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 8:
         var f=row[1];
         
         return row_repr_aux(f===/* [] */0?ll:/* :: */[0,f,ll],match[1]);
         
        default:exit=124;}}
    
    switch(exit)
     {case 124:
       if(ll===/* [] */0)
        {return row;}
       else
        {var newrecord=/* unknown */"duprecord regular 6";
         
         newrecord[1]=rev_concat(row[1],ll);
         return newrecord;
         }
       
      }
    };

var row_repr=function(row){return row_repr_aux(/* [] */0,row);};

var
 row_field=
  function(tag,row)
   {var
     find=
      function(param)
       {if(param)
         {var match=param[1];
          
          if(CamlPrimitive["caml_string_equal"](tag,match[1]))
           {return row_field_repr(match[2]);}
          else
           {return find(param[2]);}
          }
        else
         {var match$1=repr(row[2]);
          
          var match$2=match$1[1];
          
          var exit;
          
          if(typeof match$2==="number")
           {switch(match$2){}}
          else
           {switch(match$2[0])
             {case 8:return row_field(tag,match$2[1]);default:exit=121;}}
          
          switch(exit){case 121:return /* Rabsent */0;}
          }
        };
    
    return find(row[1]);
    };

var
 row_more=
  function(row)
   {var ty=repr(row[2]);
    
    var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0]){case 8:return row_more(match[1]);default:exit=120;}}
    
    switch(exit){case 120:return ty;}
    };

var
 row_fixed=
  function(row)
   {var row$1=row_repr(row);
    
    var match=repr(row$1[2])[1];
    
    var exit;
    
    var $js;
    if(typeof match==="number")
     {switch(match){case 0:exit=115;}}
    else
     {switch(match[0])
       {case 0:exit=115;
        case 3:exit=116;
        case 9:exit=116;
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/btype.ml",137,9]];
         }}
    
    var $js$1;
    switch(exit){case 115:$js$1=/* false */0;case 116:$js$1=/* true */1;}
    return row$1[5]||$js$1;
    };

var
 static_row=
  function(row)
   {var row$1=row_repr(row);
    
    return row$1[4]&&
           List["for_all"]
            (function(param)
              {var match=row_field_repr(param[2]);
               
               var exit;
               
               if(typeof match==="number")
                {switch(match){case 0:exit=112;}}
               else
                {switch(match[0]){case 0:exit=112;case 1:return /* false */0;}}
               
               switch(exit){case 112:return /* true */1;}
               },
             row$1[1]);
    };

var
 hash_variant=
  function(s)
   {var accu=0;
    
    for(var i=0;i<=s["length"]-1;i++){accu=223*accu+s[i];}
    
    accu=accu&(1<<31)-1;
    
    if(accu>1073741823){return accu-(1<<31);}else{return accu;}
    };

var
 proxy=
  function(ty)
   {var ty0=repr(ty);
    
    var match=ty0[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         var
          proxy_obj=
           function(ty)
            {var match$1=ty[1];
             
             var exit$1;
             
             if(typeof match$1==="number")
              {switch(match$1){case 0:return ty0;}}
             else
              {switch(match$1[0])
                {case 0:exit$1=105;
                 case 3:exit$1=105;
                 case 5:var ty$1=match$1[4];exit$1=104;
                 case 6:var ty$1=match$1[1];exit$1=104;
                 case 9:exit$1=105;
                 default:
                  throw [0,
                         CamlPrimitive["caml_global_data"]["Assert_failure"],
                         [0,"typing/btype.ml",167,15]];
                  }}
             
             switch(exit$1)
              {case 104:return proxy_obj(ty$1);case 105:return ty;}
             };
         
         return proxy_obj(match[1]);
         
        case 8:
         var row=match[1];
         
         if(!static_row(row)){return row_more(row);}else{exit=107;}
         
        default:exit=107;}}
    
    switch(exit){case 107:return ty0;}
    };

var
 has_constr_row=
  function(t)
   {var match=repr(t)[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         var
          check_row=
           function(t)
            {var match$1=repr(t)[1];
             
             var exit$1;
             
             if(typeof match$1==="number")
              {switch(match$1){}}
             else
              {switch(match$1[0])
                {case 3:return /* true */1;
                 case 5:return check_row(match$1[4]);
                 default:exit$1=100;}}
             
             switch(exit$1){case 100:return /* false */0;}
             };
         
         return check_row(match[1]);
         
        case 8:
         var match$1=row_more(match[1]);
         
         var match$2=match$1[1];
         
         var exit$1;
         
         if(typeof match$2==="number")
          {switch(match$2){}}
         else
          {switch(match$2[0]){case 3:return /* true */1;default:exit$1=101;}}
         
         switch(exit$1){case 101:return /* false */0;}
         
        default:exit=102;}}
    
    switch(exit){case 102:return /* false */0;}
    };

var
 is_row_name=
  function(s)
   {var l=s["length"];
    
    if(l<4)
     {return /* false */0;}
    else
     {return CamlPrimitive["caml_string_equal"]
              ($$String["sub"](s,l-4,4),"#row");
      }
    };

var
 is_constr_row=
  function(t)
   {var match=t[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var match$1=match[1];
         
         switch(match$1[0])
          {case 0:return is_row_name(Ident["name"](match$1[1]));
           case 1:return is_row_name(match$1[2]);
           case 2:exit=96;
           }
         
        default:exit=96;}}
    
    switch(exit){case 96:return /* false */0;}
    };

var
 iter_row=
  function(f,row)
   {List["iter"]
     (function(param)
       {var match=row_field_repr(param[2]);
        
        var exit;
        
        if(typeof match==="number")
         {switch(match){case 0:exit=95;}}
        else
         {switch(match[0])
           {case 0:
             var match$1=match[1];
             
             if(match$1){return f(match$1[1]);}else{exit=95;}
             
            case 1:return List["iter"](f,match[2]);
            }}
        
        switch(exit){case 95:return /* () */0;}
        },
      row[1]);
    var match=repr(row[2])[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=93;}}
    else
     {switch(match[0])
       {case 0:exit=93;
        case 3:exit=93;
        case 7:exit=93;
        case 8:return iter_row(f,match[1]);
        case 9:exit=93;
        default:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/btype.ml",214,9]];
         }}
    
    switch(exit)
     {case 93:
       return Misc["may"]
               (function(param){return List["iter"](f,param[2]);},row[6]);
       
      }
    };

var
 iter_type_expr=
  function(f,ty)
   {var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:f(match[2]);return f(match[3]);
        case 2:return List["iter"](f,match[1]);
        case 3:return List["iter"](f,match[2]);
        case 4:
         var ty$1=match[1];
         
         var match$1=match[2][1];
         
         if(match$1)
          {f(ty$1);return List["iter"](f,match$1[1][2]);}
         else
          {return f(ty$1);}
         
        case 5:f(match[3]);return f(match[4]);
        case 6:exit=91;
        case 7:exit=91;
        case 8:var row=match[1];iter_row(f,row);return f(row_more(row));
        case 10:f(match[1]);return List["iter"](f,match[2]);
        case 11:return List["iter"](f,match[3]);
        default:exit=90;}}
    
    switch(exit){case 90:return /* () */0;case 91:return f(match[1]);}
    };

var
 iter_abbrev=
  function(f,param)
   {if(typeof param==="number")
     {switch(param){case 0:return /* () */0;}}
    else
     {switch(param[0])
       {case 0:f(param[3]);f(param[4]);return iter_abbrev(f,param[5]);
        case 1:return iter_abbrev(f,param[1][1]);
        }}
    };

var it_signature=function(it){return List["iter"](it[2](it));};

var
 it_signature_item=
  function(it,param)
   {switch(param[0])
     {case 0:return it[3](it,param[2]);
      case 1:return it[4](it,param[2]);
      case 2:return it[5](it,param[2]);
      case 3:return it[6](it,param[2]);
      case 4:return it[7](it,param[2]);
      case 5:return it[8](it,param[2]);
      case 6:return it[9](it,param[2]);
      }
    };

var it_value_description=function(it,vd){return it[14](it,vd[1]);};

var
 it_type_declaration=
  function(it,td)
   {List["iter"](it[14](it),td[1]);
    Misc["may"](it[14](it),td[5]);
    return it[12](it,td[3]);
    };

var
 it_extension_constructor=
  function(it,td)
   {it[15](td[1]);
    List["iter"](it[14](it),td[2]);
    List["iter"](it[14](it),td[3]);
    return Misc["may"](it[14](it),td[4]);
    };

var it_module_declaration=function(it,md){return it[10](it,md[1]);};

var
 it_modtype_declaration=
  function(it,mtd){return Misc["may"](it[10](it),mtd[1]);};

var
 it_class_declaration=
  function(it,cd)
   {List["iter"](it[14](it),cd[1]);
    it[11](it,cd[2]);
    Misc["may"](it[14](it),cd[4]);
    return it[15](cd[3]);
    };

var
 it_class_type_declaration=
  function(it,ctd)
   {List["iter"](it[14](it),ctd[1]);it[11](it,ctd[2]);return it[15](ctd[3]);};

var
 it_module_type=
  function(it,param)
   {var exit;
    
    switch(param[0])
     {case 0:exit=77;
      case 1:return it[1](it,param[1]);
      case 2:Misc["may"](it[10](it),param[2]);return it[10](it,param[3]);
      case 3:exit=77;
      }
    
    switch(exit){case 77:return it[15](param[1]);}
    };

var
 it_class_type=
  function(it,param)
   {switch(param[0])
     {case 0:
       it[15](param[1]);
       List["iter"](it[14](it),param[2]);
       return it[11](it,param[3]);
       
      case 1:
       var cs=param[1];
       
       it[14](it,cs[1]);
       Types["Vars"][10]
        (function(param$1,param$2){return it[14](it,param$2[3]);},cs[2]);
       return List["iter"]
               (function(param$1)
                 {it[15](param$1[1]);
                  return List["iter"](it[14](it),param$1[2]);
                  },
                cs[4]);
       
      case 2:it[14](it,param[2]);return it[11](it,param[3]);
      }
    };

var
 it_type_kind=
  function(it,param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param){case 0:exit=73;case 1:exit=73;}}
    else
     {switch(param[0])
       {case 0:
         return List["iter"](function(ld){return it[14](it,ld[3]);},param[1]);
        case 1:
         return List["iter"]
                 (function(cd)
                   {List["iter"](it[14](it),cd[2]);
                    return Misc["may"](it[14](it),cd[3]);
                    },
                  param[1]);
         
        }}
    
    switch(exit){case 73:return /* () */0;}
    };

var
 it_do_type_expr=
  function(it,ty)
   {iter_type_expr(it[14](it),ty);
    var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:exit=71;
        case 4:
         var match$1=match[2][1];
         
         if(match$1){var p=match$1[1][1];exit=69;}else{exit=70;}
         
        case 8:
         return Misc["may"]
                 (function(param){return it[15](param[1]);},
                  row_repr(match[1])[6]);
         
        case 11:exit=71;
        default:exit=70;}}
    
    switch(exit)
     {case 71:var p=match[1];exit=69;
      case 70:return /* () */0;
      case 69:return it[15](p);
      }
    };

var it_path=function(p){return /* () */0;};

var
 type_iterators=
  /* record */[0,
   it_signature,
   it_signature_item,
   it_value_description,
   it_type_declaration,
   it_extension_constructor,
   it_module_declaration,
   it_modtype_declaration,
   it_class_declaration,
   it_class_type_declaration,
   it_module_type,
   it_class_type,
   it_type_kind,
   it_do_type_expr,
   it_do_type_expr,
   it_path];

var
 copy_row=
  function(f,fixed,row,keep,more)
   {var
     fields=
      List["map"]
       (function(param)
         {var fi=param[2];
          
          var match=row_field_repr(fi);
          
          var exit;
          
          var $js;
          if(typeof match==="number")
           {switch(match){case 0:exit=65;}}
          else
           {switch(match[0])
             {case 0:
               var match$1=match[1];
               
               if(match$1)
                {$js=/* Rpresent */[0,/* Some */[0,f(match$1[1])]];}
               else
                {exit=65;}
               
              case 1:
               if(keep){var e=match[4];}else{var e=[0,/* None */0];}
               
               if(row[5]){var m=fixed;}else{var m=match[3];}
               
               var tl=List["map"](f,match[2]);
               
               $js=/* Reither */[1,match[1],tl,m,e];
               
              }}
          
          var $js$1;
          switch(exit){case 65:$js$1=fi;}
          return /* tuple */[0,param[1],$js$1];
          },
        row[1]);
    
    var match=row[6];
    
    if(match)
     {var match$1=match[1];
      
      var
       name=
        /* Some */[0,/* tuple */[0,match$1[1],List["map"](f,match$1[2])]];
      }
    else
     {var name=/* None */0;}
    
    return /* record */[0,fields,more,/* () */0,row[4],row[5]&&fixed,name];
    };

var
 copy_kind=
  function(param)
   {if(typeof param==="number")
     {if(param!==0)
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/btype.ml",363,16]];
        }
      else
       {return /* Fpresent */0;}
      }
    else
     {var match=param[1][1];
      
      if(match)
       {return copy_kind(match[1]);}
      else
       {return /* Fvar */[0,[0,/* None */0]];}
      }
    };

var
 copy_commu=
  function(c)
   {if(commu_repr(c)===/* Cok */0)
     {return /* Cok */0;}
    else
     {return /* Clink */[0,[0,/* Cunknown */1]];}
    };

var
 norm_univar=
  function(ty)
   {var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 2:
         var match$1=match[1];
         
         if(match$1){return norm_univar(match$1[1]);}else{exit=58;}
         
        case 6:return norm_univar(match[1]);
        case 7:exit=57;
        case 9:exit=57;
        default:exit=58;}}
    
    switch(exit)
     {case 58:
       throw [0,
              CamlPrimitive["caml_global_data"]["Assert_failure"],
              [0,"typing/btype.ml",375,26]];
       
      case 57:return ty;
      }
    };

var
 copy_type_desc=
  function($staropt$star,f,ty)
   {if($staropt$star)
     {var keep_names=$staropt$star[1];}
    else
     {var keep_names=/* false */0;}
    
    if(typeof ty==="number")
     {switch(ty){case 0:return /* Tnil */0;}}
    else
     {switch(ty[0])
       {case 0:
         if(keep_names){return ty;}else{return [/* Tvar */0,/* None */0];}
        case 1:
         return /* Tarrow */[1,ty[1],f(ty[2]),f(ty[3]),copy_commu(ty[4])];
        case 2:return /* Ttuple */[2,List["map"](f,ty[1])];
        case 3:
         return /* Tconstr */[3,ty[1],List["map"](f,ty[2]),[0,/* Mnil */0]];
        case 4:
         var ty$1=ty[1];
         
         var match=ty[2][1];
         
         if(match)
          {var match$1=match[1];
           
           return /* Tobject */[4,
                   f(ty$1),
                   [0,
                    /* Some */[0,
                     /* tuple */[0,match$1[1],List["map"](f,match$1[2])]]]];
           }
         else
          {return /* Tobject */[4,f(ty$1),[0,/* None */0]];}
         
        case 5:
         return /* Tfield */[5,ty[1],field_kind_repr(ty[2]),f(ty[3]),f(ty[4])];
         
        case 6:return copy_type_desc(/* None */0,f,ty[1][1]);
        case 7:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/btype.ml",390,27]];
         
        case 8:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/btype.ml",385,27]];
         
        case 9:return ty;
        case 10:
         var tyl=List["map"](function(x){return norm_univar(f(x));},ty[2]);
         
         return /* Tpoly */[10,f(ty[1]),tyl];
         
        case 11:return /* Tpackage */[11,ty[1],ty[2],List["map"](f,ty[3])];
        }}
    };

var saved_desc=[0,/* [] */0];

var
 save_desc=
  function(ty,desc)
   {return saved_desc[1]=/* :: */[0,/* tuple */[0,ty,desc],saved_desc[1]],0;};

var saved_kinds=[0,/* [] */0];

var new_kinds=[0,/* [] */0];

var
 dup_kind=
  function(r)
   {var match=r[1];
    
    if(match)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"typing/btype.ml",408,40]];
      }
    else
     {}
    
    if(!List["memq"](r,new_kinds[1]))
     {saved_kinds[1]=/* :: */[0,r,saved_kinds[1]];
      var r$prime=[0,/* None */0];
      
      new_kinds[1]=/* :: */[0,r$prime,new_kinds[1]];
      return r[1]=/* Some */[0,/* Fvar */[0,r$prime]],0;
      }
    else
     {return 0;}
    };

var
 cleanup_types=
  function(param)
   {List["iter"]
     (function(param$1){return param$1[1][1]=param$1[2],0;},saved_desc[1]);
    List["iter"](function(r){return r[1]=/* None */0,0;},saved_kinds[1]);
    saved_desc[1]=/* [] */0;
    saved_kinds[1]=/* [] */0;
    return new_kinds[1]=/* [] */0,0;
    };

var
 mark_type=
  function(ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>=lowest_level)
     {ty$1[2]=pivot_level-ty$1[2];return iter_type_expr(mark_type,ty$1);}
    else
     {return 0;}
    };

var
 mark_type_node=
  function(ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>=lowest_level)
     {return ty$1[2]=pivot_level-ty$1[2],0;}
    else
     {return 0;}
    };

var mark_type_params=function(ty){return iter_type_expr(mark_type,ty);};

var
 it_type_expr=
  function(it,ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]>=lowest_level)
     {mark_type_node(ty$1);return it[13](it,ty$1);}
    else
     {return 0;}
    };

var newrecord=/* unknown */"duprecord regular 15";

newrecord[14]=it_type_expr;
var type_iterators$1=newrecord;

var
 unmark_type=
  function(ty)
   {var ty$1=repr(ty);
    
    if(ty$1[2]<lowest_level)
     {ty$1[2]=pivot_level-ty$1[2];return iter_type_expr(unmark_type,ty$1);}
    else
     {return 0;}
    };

var it_type_expr$1=function(it,ty){return unmark_type(ty);};

var newrecord$1=/* unknown */"duprecord regular 15";

newrecord$1[14]=it_type_expr$1;
var unmark_iterators=newrecord$1;

var
 unmark_type_decl=
  function(decl){return unmark_iterators[4](unmark_iterators,decl);};

var
 unmark_extension_constructor=
  function(ext)
   {List["iter"](unmark_type,ext[2]);
    List["iter"](unmark_type,ext[3]);
    return Misc["may"](unmark_type,ext[4]);
    };

var
 unmark_class_signature=
  function(sign)
   {unmark_type(sign[1]);
    return Types["Vars"][10]
            (function(l,param){return unmark_type(param[3]);},sign[2]);
    };

var
 unmark_class_type=
  function(cty){return unmark_iterators[11](unmark_iterators,cty);};

var
 find_expans=
  function(priv,p1,param)
   {if(typeof param==="number")
     {switch(param){case 0:return /* None */0;}}
    else
     {switch(param[0])
       {case 0:
         if
          (CamlPrimitive["caml_greaterequal"](param[1],priv)&&
           Path["same"](p1,param[2]))
          {return /* Some */[0,param[4]];}
         else
          {return find_expans(priv,p1,param[5]);}
         
        case 1:var rem=param[1][1];return find_expans(priv,p1,rem);
        }}
    };

var memo=[0,/* [] */0];

var
 cleanup_abbrev=
  function(param)
   {List["iter"](function(abbr){return abbr[1]=/* Mnil */0,0;},memo[1]);
    return memo[1]=/* [] */0,0;
    };

var
 memorize_abbrev=
  function(mem,priv,path,v,v$prime)
   {mem[1]=/* Mcons */[0,priv,path,v,v$prime,mem[1]];
    return memo[1]=/* :: */[0,mem,memo[1]],0;
    };

var
 forget_abbrev_rec=
  function(mem,path)
   {if(typeof mem==="number")
     {switch(mem)
       {case 0:
         throw [0,
                CamlPrimitive["caml_global_data"]["Assert_failure"],
                [0,"typing/btype.ml",520,6]];
         
        }}
    else
     {switch(mem[0])
       {case 0:
         var rem=mem[5];
         
         var path$prime=mem[2];
         
         if(Path["same"](path,path$prime))
          {return rem;}
         else
          {return /* Mcons */[0,
                   mem[1],
                   path$prime,
                   mem[3],
                   mem[4],
                   forget_abbrev_rec(rem,path)];
           }
         
        case 1:
         var mem$prime=mem[1];
         
         mem$prime[1]=forget_abbrev_rec(mem$prime[1],path);
         throw Pervasives["Exit"];
         
        }}
    };

var
 forget_abbrev=
  function(mem,path)
   {try
     {return mem[1]=forget_abbrev_rec(mem[1],path),0;}
    catch(exn)
     {if(exn===Pervasives["Exit"]){return /* () */0;}else{throw exn;}}
    };

var is_optional=function(l){return l["length"]>0&&l[0]===63;};

var
 label_name=
  function(l)
   {if(is_optional(l))
     {return $$String["sub"](l,1,l["length"]-1);}
    else
     {return l;}
    };

var
 prefixed_label_name=
  function(l)
   {if(is_optional(l)){return l;}else{return Pervasives["^"]("~",l);}};

var
 extract_label_aux=
  function(hd,l,param)
   {if(param)
     {var ls=param[2];
      
      var p=param[1];
      
      var l$prime=p[1];
      
      if(CamlPrimitive["caml_string_equal"](label_name(l$prime),l))
       {return /* tuple */[0,l$prime,p[2],List["rev"](hd),ls];}
      else
       {return extract_label_aux(/* :: */[0,p,hd],l,ls);}
      }
    else
     {throw CamlPrimitive["caml_global_data"]["Not_found"];}
    };

var extract_label=function(l,ls){return extract_label_aux(/* [] */0,l,ls);};

var
 undo_change=
  function(param)
   {switch(param[0])
     {case 1:return param[1][2]=param[2],0;
      default:return param[1][1]=param[2],0;}
    };

var trail=Weak["create"](1);

var last_snapshot=[0,0];

var
 log_change=
  function(ch)
   {var match=Weak["get"](trail,0);
    
    if(match)
     {var r$prime=[0,/* Unchanged */0];
      
      match[1][1]=/* Change */[0,ch,r$prime];
      return Weak["set"](trail,0,/* Some */[0,r$prime]);
      }
    else
     {return /* () */0;}
    };

var
 log_type=
  function(ty)
   {if(ty[3]<=last_snapshot[1])
     {return log_change(/* Ctype */[0,ty,ty[1]]);}
    else
     {return 0;}
    };

var
 link_type=
  function(ty,ty$prime)
   {log_type(ty);
    var desc=ty[1];
    
    ty[1]=/* Tlink */[6,ty$prime];
    var match=ty$prime[1];
    
    var exit;
    
    if(typeof desc==="number")
     {switch(desc){}}
    else
     {switch(desc[0])
       {case 0:
         if(typeof match==="number")
          {switch(match){}}
         else
          {switch(match[0])
            {case 0:
              var name=desc[1];
              
              if(name)
               {if(match[1])
                 {if(ty[2]<ty$prime[2])
                   {log_type(ty$prime);
                    return ty$prime[1]=/* Tvar */[0,name],0;
                    }
                  else
                   {return 0;}
                  }
                else
                 {log_type(ty$prime);return ty$prime[1]=/* Tvar */[0,name],0;}
                }
              else
               {return /* () */0;}
              
             default:exit=14;}}
         
        default:exit=14;}}
    
    switch(exit){case 14:return /* () */0;}
    };

var
 set_level=
  function(ty,level)
   {if(ty[3]<=last_snapshot[1]){log_change(/* Clevel */[1,ty,ty[2]])}else{}
    
    return ty[2]=level,0;
    };

var
 set_univar=
  function(rty,ty)
   {log_change(/* Cuniv */[6,rty,rty[1]]);return rty[1]=/* Some */[0,ty],0;};

var
 set_name=
  function(nm,v){log_change(/* Cname */[2,nm,nm[1]]);return nm[1]=v,0;};

var
 set_row_field=
  function(e,v)
   {log_change(/* Crow */[3,e,e[1]]);return e[1]=/* Some */[0,v],0;};

var
 set_kind=
  function(rk,k)
   {log_change(/* Ckind */[4,rk,rk[1]]);return rk[1]=/* Some */[0,k],0;};

var
 set_commu=
  function(rc,c){log_change(/* Ccommu */[5,rc,rc[1]]);return rc[1]=c,0;};

var
 set_typeset=
  function(rs,s){log_change(/* Ctypeset */[7,rs,rs[1]]);return rs[1]=s,0;};

var
 snapshot=
  function(param)
   {var old=last_snapshot[1];
    
    last_snapshot[1]=new_id[1];
    var match=Weak["get"](trail,0);
    
    if(match)
     {return /* tuple */[0,match[1],old];}
    else
     {var r=[0,/* Unchanged */0];
      
      Weak["set"](trail,0,/* Some */[0,r]);
      return /* tuple */[0,r,old];
      }
    };

var
 rev_log=
  function(accu,param)
   {if(typeof param==="number")
     {if(param!==0)
       {throw [0,
               CamlPrimitive["caml_global_data"]["Assert_failure"],
               [0,"typing/btype.ml",656,15]];
        }
      else
       {return accu;}
      }
    else
     {var next=param[2];
      
      var d=next[1];
      
      next[1]=/* Invalid */1;
      return rev_log(/* :: */[0,param[1],accu],d);
      }
    };

var
 backtrack=
  function(param)
   {var old=param[2];
    
    var changes=param[1];
    
    var change=changes[1];
    
    if(typeof change==="number")
     {if(change!==0)
       {return Pervasives["failwith"]("Btype.backtrack");}
      else
       {return last_snapshot[1]=old,0;}
      }
    else
     {cleanup_abbrev(/* () */0);
      var backlog=rev_log(/* [] */0,change);
      
      List["iter"](undo_change,backlog);
      changes[1]=/* Unchanged */0;
      last_snapshot[1]=old;
      return Weak["set"](trail,0,/* Some */[0,changes]);
      }
    };

module["exports"]=
{"TypeSet":TypeSet,
 "TypeMap":TypeMap,
 "TypeHash":TypeHash,
 "generic_level":generic_level,
 "newty2":newty2,
 "newgenty":newgenty,
 "newgenvar":newgenvar,
 "is_Tvar":is_Tvar,
 "is_Tunivar":is_Tunivar,
 "dummy_method":dummy_method,
 "default_mty":default_mty,
 "repr":repr,
 "field_kind_repr":field_kind_repr,
 "commu_repr":commu_repr,
 "row_repr":row_repr,
 "row_field_repr":row_field_repr,
 "row_field":row_field,
 "row_more":row_more,
 "row_fixed":row_fixed,
 "static_row":static_row,
 "hash_variant":hash_variant,
 "proxy":proxy,
 "has_constr_row":has_constr_row,
 "is_row_name":is_row_name,
 "is_constr_row":is_constr_row,
 "iter_type_expr":iter_type_expr,
 "iter_row":iter_row,
 "iter_abbrev":iter_abbrev,
 "type_iterators":type_iterators$1,
 "unmark_iterators":unmark_iterators,
 "copy_type_desc":copy_type_desc,
 "copy_row":copy_row,
 "copy_kind":copy_kind,
 "save_desc":save_desc,
 "dup_kind":dup_kind,
 "cleanup_types":cleanup_types,
 "lowest_level":lowest_level,
 "pivot_level":pivot_level,
 "mark_type":mark_type,
 "mark_type_node":mark_type_node,
 "mark_type_params":mark_type_params,
 "unmark_type":unmark_type,
 "unmark_type_decl":unmark_type_decl,
 "unmark_extension_constructor":unmark_extension_constructor,
 "unmark_class_type":unmark_class_type,
 "unmark_class_signature":unmark_class_signature,
 "find_expans":find_expans,
 "cleanup_abbrev":cleanup_abbrev,
 "memorize_abbrev":memorize_abbrev,
 "forget_abbrev":forget_abbrev,
 "is_optional":is_optional,
 "label_name":label_name,
 "prefixed_label_name":prefixed_label_name,
 "extract_label":extract_label,
 "snapshot":snapshot,
 "backtrack":backtrack,
 "link_type":link_type,
 "set_level":set_level,
 "set_name":set_name,
 "set_row_field":set_row_field,
 "set_univar":set_univar,
 "set_kind":set_kind,
 "set_commu":set_commu,
 "set_typeset":set_typeset,
 "log_type":log_type,
 "print_raw":print_raw};

