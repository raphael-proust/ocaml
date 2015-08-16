// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Set=require("./set.js");
var Misc=require("./misc.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 compare=
  function(prim,prim$1){return CamlPrimitive["caml_compare"](prim,prim$1);};

var StringSet=Set["Make"]([0,compare]);

var free_structure_names=[0,StringSet[1]];

var
 add_path=
  function(bv,param)
   {switch(param[0])
     {case 0:
       var s=param[1];
       
       if(!StringSet[3](s,bv))
        {return free_structure_names[1]=
                StringSet[4](s,free_structure_names[1]),
                0;
         }
       else
        {return 0;}
       
      case 1:return add_path(bv,param[1]);
      case 2:add_path(bv,param[1]);return add_path(bv,param[2]);
      }
    };

var open_module=function(bv,lid){return add_path(bv,lid);};

var
 add=
  function(bv,lid)
   {var match=lid[1];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=46;case 1:return add_path(bv,match[1]);case 2:exit=46;}
    
    switch(exit){case 46:return /* () */0;}
    };

var addmodule=function(bv,lid){return add_path(bv,lid[1]);};

var
 add_type=
  function(bv,ty)
   {var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:add_type(bv,match[2]);return add_type(bv,match[3]);
        case 2:return List["iter"](add_type(bv),match[1]);
        case 3:exit=44;
        case 4:
         return List["iter"]
                 (function(param){return add_type(bv,param[3]);},match[1]);
         
        case 5:exit=44;
        case 6:return add_type(bv,match[1]);
        case 7:
         return List["iter"]
                 (function(param)
                   {switch(param[0])
                     {case 0:return List["iter"](add_type(bv),param[4]);
                      case 1:return add_type(bv,param[1]);
                      }
                    },
                  match[1]);
         
        case 8:return add_type(bv,match[2]);
        case 9:return add_package_type(bv,match[1]);
        default:exit=43;}}
    
    switch(exit)
     {case 43:return /* () */0;
      case 44:add(bv,match[1]);return List["iter"](add_type(bv),match[2]);
      }
    };

var
 add_package_type=
  function(bv,param)
   {add(bv,param[1]);
    return List["iter"]
            (add_type(bv),
             List["map"](function(param$1){return param$1[2];},param[2]));
    };

var
 add_opt=
  function(add_fn,bv,param)
   {if(param){return add_fn(bv,param[1]);}else{return /* () */0;}};

var
 add_constructor_decl=
  function(bv,pcd)
   {List["iter"](add_type(bv),pcd[2]);
    return Misc["may"](add_type(bv),pcd[3]);
    };

var
 add_type_declaration=
  function(bv,td)
   {List["iter"]
     (function(param){add_type(bv,param[1]);return add_type(bv,param[2]);},
      td[3]);
    add_opt(add_type,bv,td[6]);
    var
     add_tkind=
      function(param)
       {var exit;
        
        if(typeof param==="number")
         {switch(param){case 0:exit=38;case 1:exit=38;}}
        else
         {switch(param[0])
           {case 0:return List["iter"](add_constructor_decl(bv),param[1]);
            case 1:
             return List["iter"]
                     (function(pld){return add_type(bv,pld[3]);},param[1]);
             
            }}
        
        switch(exit){case 38:return /* () */0;}
        };
    
    return add_tkind(td[4]);
    };

var
 add_extension_constructor=
  function(bv,ext)
   {var match=ext[2];
    
    switch(match[0])
     {case 0:
       List["iter"](add_type(bv),match[1]);
       return Misc["may"](add_type(bv),match[2]);
       
      case 1:return add(bv,match[1]);
      }
    };

var
 add_type_extension=
  function(bv,te)
   {add(bv,te[1]);return List["iter"](add_extension_constructor(bv),te[3]);};

var
 add_class_type=
  function(bv,cty)
   {var match=cty[1];
    
    switch(match[0])
     {case 0:add(bv,match[1]);return List["iter"](add_type(bv),match[2]);
      case 1:
       var match$1=match[1];
       
       add_type(bv,match$1[1]);
       return List["iter"](add_class_type_field(bv),match$1[2]);
       
      case 2:add_type(bv,match[2]);return add_class_type(bv,match[3]);
      case 3:return /* () */0;
      }
    };

var
 add_class_type_field=
  function(bv,pctf)
   {var match=pctf[1];
    
    var exit;
    
    switch(match[0])
     {case 0:return add_class_type(bv,match[1]);
      case 1:exit=34;
      case 2:exit=34;
      case 3:
       var match$1=match[1];
       
       add_type(bv,match$1[1]);
       return add_type(bv,match$1[2]);
       
      case 4:exit=35;
      case 5:exit=35;
      }
    
    switch(exit)
     {case 34:return add_type(bv,match[1][4]);case 35:return /* () */0;}
    };

var
 add_class_description=
  function(bv,infos){return add_class_type(bv,infos[4]);};

var pattern_bv=[0,StringSet[1]];

var
 add_pattern=
  function(bv,pat)
   {var match=pat[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:exit=28;}}
    else
     {switch(match[0])
       {case 0:exit=28;
        case 2:exit=27;
        case 3:exit=27;
        case 4:exit=30;
        case 5:add(bv,match[1]);return add_opt(add_pattern,bv,match[2]);
        case 6:return add_opt(add_pattern,bv,match[2]);
        case 7:
         return List["iter"]
                 (function(param)
                   {add(bv,param[1]);return add_pattern(bv,param[2]);},
                  match[1]);
         
        case 8:exit=30;
        case 9:add_pattern(bv,match[1]);return add_pattern(bv,match[2]);
        case 10:add_pattern(bv,match[1]);return add_type(bv,match[2]);
        case 11:return add(bv,match[1]);
        case 13:
         return pattern_bv[1]=StringSet[4](match[1][1],pattern_bv[1]),0;
        case 15:exit=28;
        default:return add_pattern(bv,match[1]);}}
    
    switch(exit)
     {case 28:return /* () */0;
      case 30:return List["iter"](add_pattern(bv),match[1]);
      case 27:return /* () */0;
      }
    };

var
 add_pattern$1=
  function(bv,pat){pattern_bv[1]=bv;add_pattern(bv,pat);return pattern_bv[1];};

var
 add_expr=
  function(bv,exp)
   {var match=exp[1];
    
    var exit;
    
    switch(match[0])
     {case 0:exit=3;
      case 1:exit=4;
      case 2:
       var bv$1=add_bindings(match[1],bv,match[2]);
       
       return add_expr(bv$1,match[3]);
       
      case 3:return add_cases(bv,match[1]);
      case 4:
       add_opt(add_expr,bv,match[2]);
       return add_expr(add_pattern$1(bv,match[3]),match[4]);
       
      case 5:
       add_expr(bv,match[1]);
       return List["iter"]
               (function(param){return add_expr(bv,param[2]);},match[2]);
       
      case 6:exit=5;
      case 7:exit=5;
      case 8:exit=6;
      case 9:add(bv,match[1]);return add_opt(add_expr,bv,match[2]);
      case 10:return add_opt(add_expr,bv,match[2]);
      case 11:
       List["iter"]
        (function(param){add(bv,param[1]);return add_expr(bv,param[2]);},
         match[1]);
       return add_opt(add_expr,bv,match[2]);
       
      case 12:add_expr(bv,match[1]);return add(bv,match[2]);
      case 13:
       add_expr(bv,match[1]);add(bv,match[2]);return add_expr(bv,match[3]);
      case 14:exit=6;
      case 15:
       add_expr(bv,match[1]);
       add_expr(bv,match[2]);
       return add_opt(add_expr,bv,match[3]);
       
      case 16:exit=7;
      case 17:exit=7;
      case 18:
       add_expr(bv,match[2]);
       add_expr(bv,match[3]);
       return add_expr(bv,match[5]);
       
      case 19:add_expr(bv,match[1]);return add_type(bv,match[2]);
      case 20:
       add_expr(bv,match[1]);
       add_opt(add_type,bv,match[2]);
       return add_type(bv,match[3]);
       
      case 22:exit=3;
      case 23:exit=9;
      case 24:
       return List["iter"]
               (function(param){return add_expr(bv,param[2]);},match[1]);
       
      case 25:
       add_module(bv,match[2]);
       return add_expr(StringSet[4](match[1][1],bv),match[3]);
       
      case 28:add_expr(bv,match[1]);return add_opt(add_type,bv,match[2]);
      case 29:
       var match$1=match[1];
       
       var bv$2=add_pattern$1(bv,match$1[1]);
       
       return List["iter"](add_class_field(bv$2),match$1[2]);
       
      case 30:exit=9;
      case 31:return add_module(bv,match[1]);
      case 32:open_module(bv,match[2][1]);return add_expr(bv,match[3]);
      case 33:exit=4;
      default:return add_expr(bv,match[1]);}
    
    switch(exit)
     {case 3:return add(bv,match[1]);
      case 4:return /* () */0;
      case 5:add_expr(bv,match[1]);return add_cases(bv,match[2]);
      case 6:return List["iter"](add_expr(bv),match[1]);
      case 7:add_expr(bv,match[1]);return add_expr(bv,match[2]);
      case 9:return add_expr(bv,match[2]);
      }
    };

var add_cases=function(bv,cases){return List["iter"](add_case(bv),cases);};

var
 add_case=
  function(bv,param)
   {var bv$1=add_pattern$1(bv,param[1]);
    
    add_opt(add_expr,bv$1,param[2]);
    return add_expr(bv$1,param[3]);
    };

var
 add_bindings=
  function(recf,bv,pel)
   {var
     bv$prime=
      List["fold_left"](function(bv,x){return add_pattern$1(bv,x[1]);},bv,pel);
    
    if(recf===/* Recursive */1){var bv$1=bv$prime;}else{var bv$1=bv;}
    
    List["iter"](function(x){return add_expr(bv$1,x[2]);},pel);
    return bv$prime;
    };

var
 add_modtype=
  function(bv,mty)
   {var match=mty[1];
    
    switch(match[0])
     {case 0:return add(bv,match[1]);
      case 1:return add_signature(bv,match[1]);
      case 2:
       Misc["may"](add_modtype(bv),match[2]);
       return add_modtype(StringSet[4](match[1][1],bv),match[3]);
       
      case 3:
       add_modtype(bv,match[1]);
       return List["iter"]
               (function(param)
                 {var exit;
                  
                  switch(param[0])
                   {case 0:return add_type_declaration(bv,param[2]);
                    case 1:exit=13;
                    case 2:return add_type_declaration(bv,param[1]);
                    case 3:exit=13;
                    }
                  
                  switch(exit){case 13:return addmodule(bv,param[2]);}
                  },
                match[2]);
       
      case 4:return add_module(bv,match[1]);
      case 5:return /* () */0;
      case 6:return addmodule(bv,match[1]);
      }
    };

var
 add_signature=
  function(bv,param)
   {if(param)
     {return add_signature(add_sig_item(bv,param[1]),param[2]);}
    else
     {return /* () */0;}
    };

var
 add_sig_item=
  function(bv,item)
   {var match=item[1];
    
    var exit;
    
    switch(match[0])
     {case 0:add_type(bv,match[1][2]);return bv;
      case 1:List["iter"](add_type_declaration(bv),match[1]);return bv;
      case 2:add_type_extension(bv,match[1]);return bv;
      case 3:add_extension_constructor(bv,match[1]);return bv;
      case 4:
       var pmd=match[1];
       
       add_modtype(bv,pmd[2]);
       return StringSet[4](pmd[1][1],bv);
       
      case 5:
       var decls=match[1];
       
       var
        bv$prime=
         List["fold_right"]
          (StringSet[4],
           List["map"](function(pmd){return pmd[1][1];},decls),
           bv);
       
       List["iter"](function(pmd){return add_modtype(bv$prime,pmd[2]);},decls);
       return bv$prime;
       
      case 6:
       var match$1=match[1][2];
       
       if(match$1){add_modtype(bv,match$1[1])}else{}
       
       return bv;
       
      case 7:open_module(bv,match[1][1][1]);return bv;
      case 8:add_modtype(bv,match[1][1]);return bv;
      case 9:List["iter"](add_class_description(bv),match[1]);return bv;
      case 10:List["iter"](add_class_description(bv),match[1]);return bv;
      case 11:exit=15;
      case 12:exit=15;
      }
    
    switch(exit){case 15:return bv;}
    };

var
 add_module=
  function(bv,modl)
   {var match=modl[1];
    
    switch(match[0])
     {case 0:return addmodule(bv,match[1]);
      case 1:return add_structure(bv,match[1]);
      case 2:
       Misc["may"](add_modtype(bv),match[2]);
       return add_module(StringSet[4](match[1][1],bv),match[3]);
       
      case 3:add_module(bv,match[1]);return add_module(bv,match[2]);
      case 4:add_module(bv,match[1]);return add_modtype(bv,match[2]);
      case 5:return add_expr(bv,match[1]);
      case 6:return /* () */0;
      }
    };

var
 add_structure=
  function(bv,item_list)
   {return List["fold_left"](add_struct_item,bv,item_list);};

var
 add_struct_item=
  function(bv,item)
   {var match=item[1];
    
    var exit;
    
    switch(match[0])
     {case 0:add_expr(bv,match[1]);return bv;
      case 1:return add_bindings(match[1],bv,match[2]);
      case 2:add_type(bv,match[1][2]);return bv;
      case 3:List["iter"](add_type_declaration(bv),match[1]);return bv;
      case 4:add_type_extension(bv,match[1]);return bv;
      case 5:add_extension_constructor(bv,match[1]);return bv;
      case 6:
       var x=match[1];add_module(bv,x[2]);return StringSet[4](x[1][1],bv);
      case 7:
       var bindings=match[1];
       
       var
        bv$prime=
         List["fold_right"]
          (StringSet[4],List["map"](function(x){return x[1][1];},bindings),bv);
       
       List["iter"](function(x){return add_module(bv$prime,x[2]);},bindings);
       return bv$prime;
       
      case 8:
       var match$1=match[1][2];
       
       if(match$1){add_modtype(bv,match$1[1])}else{}
       
       return bv;
       
      case 9:open_module(bv,match[1][1][1]);return bv;
      case 10:List["iter"](add_class_declaration(bv),match[1]);return bv;
      case 11:List["iter"](add_class_description(bv),match[1]);return bv;
      case 12:add_module(bv,match[1][1]);return bv;
      case 13:exit=18;
      case 14:exit=18;
      }
    
    switch(exit){case 18:return bv;}
    };

var
 add_use_file=
  function(bv,top_phrs){return List["fold_left"](add_top_phrase,bv,top_phrs);};

var add_implementation=function(bv,l){return add_structure(bv,l);};

var
 add_top_phrase=
  function(bv,param)
   {switch(param[0])
     {case 0:return add_structure(bv,param[1]);case 1:return bv;}
    };

var
 add_class_expr=
  function(bv,ce)
   {var match=ce[1];
    
    switch(match[0])
     {case 0:add(bv,match[1]);return List["iter"](add_type(bv),match[2]);
      case 1:
       var match$1=match[1];
       
       var bv$1=add_pattern$1(bv,match$1[1]);
       
       return List["iter"](add_class_field(bv$1),match$1[2]);
       
      case 2:
       add_opt(add_expr,bv,match[2]);
       var bv$2=add_pattern$1(bv,match[3]);
       
       return add_class_expr(bv$2,match[4]);
       
      case 3:
       add_class_expr(bv,match[1]);
       return List["iter"]
               (function(param){return add_expr(bv,param[2]);},match[2]);
       
      case 4:
       var bv$3=add_bindings(match[1],bv,match[2]);
       
       return add_class_expr(bv$3,match[3]);
       
      case 5:add_class_expr(bv,match[1]);return add_class_type(bv,match[2]);
      case 6:return /* () */0;
      }
    };

var
 add_class_field=
  function(bv,pcf)
   {var match=pcf[1];
    
    var exit;
    
    switch(match[0])
     {case 0:return add_class_expr(bv,match[2]);
      case 1:exit=25;
      case 2:exit=25;
      case 3:
       var match$1=match[1];
       
       add_type(bv,match$1[1]);
       return add_type(bv,match$1[2]);
       
      case 4:return add_expr(bv,match[1]);
      case 5:exit=24;
      case 6:exit=24;
      }
    
    switch(exit)
     {case 25:
       var match$2=match[1][3];
       
       switch(match$2[0])
        {case 0:return add_type(bv,match$2[1]);
         case 1:return add_expr(bv,match$2[2]);
         }
       
      case 24:return /* () */0;
      }
    };

var
 add_class_declaration=
  function(bv,decl){return add_class_expr(bv,decl[4]);};

module["exports"]=
{"StringSet":StringSet,
 "free_structure_names":free_structure_names,
 "open_module":open_module,
 "add_use_file":add_use_file,
 "add_signature":add_signature,
 "add_implementation":add_implementation};

