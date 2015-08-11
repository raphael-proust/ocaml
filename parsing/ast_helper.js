// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");
var Docstrings=require("Docstrings");
var Location=require("Location");


var default_loc=[0,Location["none"]];

var
 with_default_loc=
  function(l,f)
   {var old=default_loc[1];
    
    default_loc[1]=l,0;
    try
     {var r=f(0);default_loc[1]=old,0;return r;}
    catch(exn){default_loc[1]=old,0;throw exn;}
    };

var
 mk=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var any=function(loc,attrs,param){return mk(loc,attrs,0);};

var $$var=function(loc,attrs,a){return mk(loc,attrs,/* Ptyp_var */[0,a]);};

var
 arrow=
  function(loc,attrs,a,b,c){return mk(loc,attrs,/* Ptyp_arrow */[1,a,b,c]);};

var tuple=function(loc,attrs,a){return mk(loc,attrs,/* Ptyp_tuple */[2,a]);};

var
 constr=
  function(loc,attrs,a,b){return mk(loc,attrs,/* Ptyp_constr */[3,a,b]);};

var
 object_=
  function(loc,attrs,a,b){return mk(loc,attrs,/* Ptyp_object */[4,a,b]);};

var
 class_=
  function(loc,attrs,a,b){return mk(loc,attrs,/* Ptyp_class */[5,a,b]);};

var
 alias=
  function(loc,attrs,a,b){return mk(loc,attrs,/* Ptyp_alias */[6,a,b]);};

var
 variant=
  function(loc,attrs,a,b,c){return mk(loc,attrs,/* Ptyp_variant */[7,a,b,c]);};

var
 poly=
  function(loc,attrs,a,b){return mk(loc,attrs,/* Ptyp_poly */[8,a,b]);};

var
 $$package=
  function(loc,attrs,a,b)
   {return mk(loc,attrs,/* Ptyp_package */[9,/* tuple */[0,a,b]]);};

var
 extension=
  function(loc,attrs,a){return mk(loc,attrs,/* Ptyp_extension */[10,a]);};

var
 force_poly=
  function(t)
   {var match=t[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0]){case 8:return t;default:exit=249;}}
    
    switch(exit){case 249:return poly(/* Some */[0,t[2]],0,0,t);}
    };

var
 Typ=
  [0,
   mk,
   attr,
   any,
   $$var,
   arrow,
   tuple,
   constr,
   object_,
   class_,
   alias,
   variant,
   poly,
   $$package,
   extension,
   force_poly];

var
 mk$1=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr$1=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var any$1=function(loc,attrs,param){return mk$1(loc,attrs,0);};

var
 $$var$1=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_var */[0,a]);};

var
 alias$1=
  function(loc,attrs,a,b){return mk$1(loc,attrs,/* Ppat_alias */[1,a,b]);};

var
 constant=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_constant */[2,a]);};

var
 interval=
  function(loc,attrs,a,b){return mk$1(loc,attrs,/* Ppat_interval */[3,a,b]);};

var
 tuple$1=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_tuple */[4,a]);};

var
 construct=
  function(loc,attrs,a,b){return mk$1(loc,attrs,/* Ppat_construct */[5,a,b]);};

var
 variant$1=
  function(loc,attrs,a,b){return mk$1(loc,attrs,/* Ppat_variant */[6,a,b]);};

var
 record=
  function(loc,attrs,a,b){return mk$1(loc,attrs,/* Ppat_record */[7,a,b]);};

var
 array=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_array */[8,a]);};

var or_=function(loc,attrs,a,b){return mk$1(loc,attrs,/* Ppat_or */[9,a,b]);};

var
 constraint_=
  function(loc,attrs,a,b)
   {return mk$1(loc,attrs,/* Ppat_constraint */[10,a,b]);};

var
 type_=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_type */[11,a]);};

var
 lazy_=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_lazy */[12,a]);};

var
 unpack=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_unpack */[13,a]);};

var
 exception_=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_exception */[14,a]);};

var
 extension$1=
  function(loc,attrs,a){return mk$1(loc,attrs,/* Ppat_extension */[15,a]);};

var
 Pat=
  [0,
   mk$1,
   attr$1,
   any$1,
   $$var$1,
   alias$1,
   constant,
   interval,
   tuple$1,
   construct,
   variant$1,
   record,
   array,
   or_,
   constraint_,
   type_,
   lazy_,
   unpack,
   exception_,
   extension$1];

var
 mk$2=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr$2=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 ident=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_ident */[0,a]);};

var
 constant$1=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_constant */[1,a]);};

var
 let_=
  function(loc,attrs,a,b,c){return mk$2(loc,attrs,/* Pexp_let */[2,a,b,c]);};

var
 fun_=
  function(loc,attrs,a,b,c,d)
   {return mk$2(loc,attrs,/* Pexp_fun */[4,a,b,c,d]);};

var
 function_=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_function */[3,a]);};

var
 apply=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_apply */[5,a,b]);};

var
 match_=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_match */[6,a,b]);};

var
 try_=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_try */[7,a,b]);};

var
 tuple$2=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_tuple */[8,a]);};

var
 construct$1=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_construct */[9,a,b]);};

var
 variant$2=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_variant */[10,a,b]);};

var
 record$1=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_record */[11,a,b]);};

var
 field=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_field */[12,a,b]);};

var
 setfield=
  function(loc,attrs,a,b,c)
   {return mk$2(loc,attrs,/* Pexp_setfield */[13,a,b,c]);};

var
 array$1=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_array */[14,a]);};

var
 ifthenelse=
  function(loc,attrs,a,b,c)
   {return mk$2(loc,attrs,/* Pexp_ifthenelse */[15,a,b,c]);};

var
 sequence=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_sequence */[16,a,b]);};

var
 while_=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_while */[17,a,b]);};

var
 for_=
  function(loc,attrs,a,b,c,d,e)
   {return mk$2(loc,attrs,/* Pexp_for */[18,a,b,c,d,e]);};

var
 constraint_$1=
  function(loc,attrs,a,b)
   {return mk$2(loc,attrs,/* Pexp_constraint */[19,a,b]);};

var
 coerce=
  function(loc,attrs,a,b,c)
   {return mk$2(loc,attrs,/* Pexp_coerce */[20,a,b,c]);};

var
 send=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_send */[21,a,b]);};

var new_=function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_new */[22,a]);};

var
 setinstvar=
  function(loc,attrs,a,b)
   {return mk$2(loc,attrs,/* Pexp_setinstvar */[23,a,b]);};

var
 override=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_override */[24,a]);};

var
 letmodule=
  function(loc,attrs,a,b,c)
   {return mk$2(loc,attrs,/* Pexp_letmodule */[25,a,b,c]);};

var
 assert_=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_assert */[26,a]);};

var
 lazy_$1=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_lazy */[27,a]);};

var
 poly$1=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_poly */[28,a,b]);};

var
 object_$1=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_object */[29,a]);};

var
 newtype=
  function(loc,attrs,a,b){return mk$2(loc,attrs,/* Pexp_newtype */[30,a,b]);};

var pack=function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_pack */[31,a]);};

var
 open_=
  function(loc,attrs,a,b,c){return mk$2(loc,attrs,/* Pexp_open */[32,a,b,c]);};

var
 extension$2=
  function(loc,attrs,a){return mk$2(loc,attrs,/* Pexp_extension */[33,a]);};

var $$case=function(lhs,guard,rhs){return /* record */[0,lhs,guard,rhs];};

var
 Exp=
  [0,
   mk$2,
   attr$2,
   ident,
   constant$1,
   let_,
   fun_,
   function_,
   apply,
   match_,
   try_,
   tuple$2,
   construct$1,
   variant$2,
   record$1,
   field,
   setfield,
   array$1,
   ifthenelse,
   sequence,
   while_,
   for_,
   constraint_$1,
   coerce,
   send,
   new_,
   setinstvar,
   override,
   letmodule,
   assert_,
   lazy_$1,
   poly$1,
   object_$1,
   newtype,
   pack,
   open_,
   extension$2,
   $$case];

var
 mk$3=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr$3=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 ident$1=
  function(loc,attrs,a){return mk$3(loc,attrs,/* Pmty_ident */[0,a]);};

var
 alias$2=
  function(loc,attrs,a){return mk$3(loc,attrs,/* Pmty_alias */[6,a]);};

var
 signature=
  function(loc,attrs,a){return mk$3(loc,attrs,/* Pmty_signature */[1,a]);};

var
 functor_=
  function(loc,attrs,a,b,c)
   {return mk$3(loc,attrs,/* Pmty_functor */[2,a,b,c]);};

var
 with_=
  function(loc,attrs,a,b){return mk$3(loc,attrs,/* Pmty_with */[3,a,b]);};

var
 typeof_=
  function(loc,attrs,a){return mk$3(loc,attrs,/* Pmty_typeof */[4,a]);};

var
 extension$3=
  function(loc,attrs,a){return mk$3(loc,attrs,/* Pmty_extension */[5,a]);};

var
 Mty=
  [0,mk$3,attr$3,ident$1,alias$2,signature,functor_,with_,typeof_,extension$3];

var
 mk$4=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr$4=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 ident$2=
  function(loc,attrs,x){return mk$4(loc,attrs,/* Pmod_ident */[0,x]);};

var
 structure=
  function(loc,attrs,x){return mk$4(loc,attrs,/* Pmod_structure */[1,x]);};

var
 functor_$1=
  function(loc,attrs,arg,arg_ty,body)
   {return mk$4(loc,attrs,/* Pmod_functor */[2,arg,arg_ty,body]);};

var
 apply$1=
  function(loc,attrs,m1,m2){return mk$4(loc,attrs,/* Pmod_apply */[3,m1,m2]);};

var
 constraint_$2=
  function(loc,attrs,m,mty)
   {return mk$4(loc,attrs,/* Pmod_constraint */[4,m,mty]);};

var
 unpack$1=
  function(loc,attrs,e){return mk$4(loc,attrs,/* Pmod_unpack */[5,e]);};

var
 extension$4=
  function(loc,attrs,a){return mk$4(loc,attrs,/* Pmod_extension */[6,a]);};

var
 Mod=
  [0,
   mk$4,
   attr$4,
   ident$2,
   structure,
   functor_$1,
   apply$1,
   constraint_$2,
   unpack$1,
   extension$4];

var
 mk$5=
  function($staropt$star,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    return /* record */[0,d,loc];
    };

var value=function(loc,a){return mk$5(loc,/* Psig_value */[0,a]);};

var type_$1=function(loc,a){return mk$5(loc,/* Psig_type */[1,a]);};

var type_extension=function(loc,a){return mk$5(loc,/* Psig_typext */[2,a]);};

var exception_$1=function(loc,a){return mk$5(loc,/* Psig_exception */[3,a]);};

var module_=function(loc,a){return mk$5(loc,/* Psig_module */[4,a]);};

var rec_module=function(loc,a){return mk$5(loc,/* Psig_recmodule */[5,a]);};

var modtype=function(loc,a){return mk$5(loc,/* Psig_modtype */[6,a]);};

var open_$1=function(loc,a){return mk$5(loc,/* Psig_open */[7,a]);};

var include_=function(loc,a){return mk$5(loc,/* Psig_include */[8,a]);};

var class_$1=function(loc,a){return mk$5(loc,/* Psig_class */[9,a]);};

var class_type=function(loc,a){return mk$5(loc,/* Psig_class_type */[10,a]);};

var
 extension$5=
  function(loc,$staropt$star,a)
   {if($staropt$star){var attrs=$staropt$star[1];}else{var attrs=0;}
    
    return mk$5(loc,/* Psig_extension */[12,a,attrs]);
    };

var attribute=function(loc,a){return mk$5(loc,/* Psig_attribute */[11,a]);};

var
 text=
  function(txt)
   {return List["map"]
            (function(ds)
              {return attribute
                       (/* Some */[0,Docstrings["docstring_loc"](ds)],
                        Docstrings["text_attr"](ds));
               },
             txt);
    };

var
 Sig=
  [0,
   mk$5,
   value,
   type_$1,
   type_extension,
   exception_$1,
   module_,
   rec_module,
   modtype,
   open_$1,
   include_,
   class_$1,
   class_type,
   extension$5,
   attribute,
   text];

var
 mk$6=
  function($staropt$star,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    return /* record */[0,d,loc];
    };

var
 $$eval=
  function(loc,$staropt$star,a)
   {if($staropt$star){var attrs=$staropt$star[1];}else{var attrs=0;}
    
    return mk$6(loc,/* Pstr_eval */[0,a,attrs]);
    };

var value$1=function(loc,a,b){return mk$6(loc,/* Pstr_value */[1,a,b]);};

var primitive=function(loc,a){return mk$6(loc,/* Pstr_primitive */[2,a]);};

var type_$2=function(loc,a){return mk$6(loc,/* Pstr_type */[3,a]);};

var
 type_extension$1=
  function(loc,a){return mk$6(loc,/* Pstr_typext */[4,a]);};

var exception_$2=function(loc,a){return mk$6(loc,/* Pstr_exception */[5,a]);};

var module_$1=function(loc,a){return mk$6(loc,/* Pstr_module */[6,a]);};

var rec_module$1=function(loc,a){return mk$6(loc,/* Pstr_recmodule */[7,a]);};

var modtype$1=function(loc,a){return mk$6(loc,/* Pstr_modtype */[8,a]);};

var open_$2=function(loc,a){return mk$6(loc,/* Pstr_open */[9,a]);};

var class_$2=function(loc,a){return mk$6(loc,/* Pstr_class */[10,a]);};

var
 class_type$1=
  function(loc,a){return mk$6(loc,/* Pstr_class_type */[11,a]);};

var include_$1=function(loc,a){return mk$6(loc,/* Pstr_include */[12,a]);};

var
 extension$6=
  function(loc,$staropt$star,a)
   {if($staropt$star){var attrs=$staropt$star[1];}else{var attrs=0;}
    
    return mk$6(loc,/* Pstr_extension */[14,a,attrs]);
    };

var attribute$1=function(loc,a){return mk$6(loc,/* Pstr_attribute */[13,a]);};

var
 text$1=
  function(txt)
   {return List["map"]
            (function(ds)
              {return attribute$1
                       (/* Some */[0,Docstrings["docstring_loc"](ds)],
                        Docstrings["text_attr"](ds));
               },
             txt);
    };

var
 Str=
  [0,
   mk$6,
   $$eval,
   value$1,
   primitive,
   type_$2,
   type_extension$1,
   exception_$2,
   module_$1,
   rec_module$1,
   modtype$1,
   open_$2,
   class_$2,
   class_type$1,
   include_$1,
   extension$6,
   attribute$1,
   text$1];

var
 mk$7=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr$5=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 constr$1=
  function(loc,attrs,a,b){return mk$7(loc,attrs,/* Pcl_constr */[0,a,b]);};

var
 structure$1=
  function(loc,attrs,a){return mk$7(loc,attrs,/* Pcl_structure */[1,a]);};

var
 fun_$1=
  function(loc,attrs,a,b,c,d)
   {return mk$7(loc,attrs,/* Pcl_fun */[2,a,b,c,d]);};

var
 apply$2=
  function(loc,attrs,a,b){return mk$7(loc,attrs,/* Pcl_apply */[3,a,b]);};

var
 let_$1=
  function(loc,attrs,a,b,c){return mk$7(loc,attrs,/* Pcl_let */[4,a,b,c]);};

var
 constraint_$3=
  function(loc,attrs,a,b){return mk$7(loc,attrs,/* Pcl_constraint */[5,a,b]);};

var
 extension$7=
  function(loc,attrs,a){return mk$7(loc,attrs,/* Pcl_extension */[6,a]);};

var
 Cl=
  [0,
   mk$7,
   attr$5,
   constr$1,
   structure$1,
   fun_$1,
   apply$2,
   let_$1,
   constraint_$3,
   extension$7];

var
 mk$8=
  function($staropt$star,$staropt$star$1,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    return /* record */[0,d,loc,attrs];
    };

var
 attr$6=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 constr$2=
  function(loc,attrs,a,b){return mk$8(loc,attrs,/* Pcty_constr */[0,a,b]);};

var
 signature$1=
  function(loc,attrs,a){return mk$8(loc,attrs,/* Pcty_signature */[1,a]);};

var
 arrow$1=
  function(loc,attrs,a,b,c){return mk$8(loc,attrs,/* Pcty_arrow */[2,a,b,c]);};

var
 extension$8=
  function(loc,attrs,a){return mk$8(loc,attrs,/* Pcty_extension */[3,a]);};

var Cty=[0,mk$8,attr$6,constr$2,signature$1,arrow$1,extension$8];

var
 mk$9=
  function($staropt$star,$staropt$star$1,$staropt$star$2,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    return /* record */[0,d,loc,Docstrings["add_docs_attrs"](docs,attrs)];
    };

var
 inherit_=
  function(loc,attrs,a){return mk$9(loc,attrs,0,/* Pctf_inherit */[0,a]);};

var
 val_=
  function(loc,attrs,a,b,c,d)
   {return mk$9(loc,attrs,0,/* Pctf_val */[1,/* tuple */[0,a,b,c,d]]);};

var
 method_=
  function(loc,attrs,a,b,c,d)
   {return mk$9(loc,attrs,0,/* Pctf_method */[2,/* tuple */[0,a,b,c,d]]);};

var
 constraint_$4=
  function(loc,attrs,a,b)
   {return mk$9(loc,attrs,0,/* Pctf_constraint */[3,/* tuple */[0,a,b]]);};

var
 extension$9=
  function(loc,attrs,a){return mk$9(loc,attrs,0,/* Pctf_extension */[5,a]);};

var
 attribute$2=
  function(loc,a){return mk$9(loc,0,0,/* Pctf_attribute */[4,a]);};

var
 text$2=
  function(txt)
   {return List["map"]
            (function(ds)
              {return attribute$2
                       (/* Some */[0,Docstrings["docstring_loc"](ds)],
                        Docstrings["text_attr"](ds));
               },
             txt);
    };

var
 attr$7=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 Ctf=
  [0,
   mk$9,
   inherit_,
   val_,
   method_,
   constraint_$4,
   extension$9,
   attribute$2,
   text$2,
   attr$7];

var
 mk$10=
  function($staropt$star,$staropt$star$1,$staropt$star$2,d)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    return /* record */[0,d,loc,Docstrings["add_docs_attrs"](docs,attrs)];
    };

var
 inherit_$1=
  function(loc,attrs,a,b,c)
   {return mk$10(loc,attrs,0,/* Pcf_inherit */[0,a,b,c]);};

var
 val_$1=
  function(loc,attrs,a,b,c)
   {return mk$10(loc,attrs,0,/* Pcf_val */[1,/* tuple */[0,a,b,c]]);};

var
 method_$1=
  function(loc,attrs,a,b,c)
   {return mk$10(loc,attrs,0,/* Pcf_method */[2,/* tuple */[0,a,b,c]]);};

var
 constraint_$5=
  function(loc,attrs,a,b)
   {return mk$10(loc,attrs,0,/* Pcf_constraint */[3,/* tuple */[0,a,b]]);};

var
 initializer_=
  function(loc,attrs,a){return mk$10(loc,attrs,0,/* Pcf_initializer */[4,a]);};

var
 extension$10=
  function(loc,attrs,a){return mk$10(loc,attrs,0,/* Pcf_extension */[6,a]);};

var
 attribute$3=
  function(loc,a){return mk$10(loc,0,0,/* Pcf_attribute */[5,a]);};

var
 text$3=
  function(txt)
   {return List["map"]
            (function(ds)
              {return attribute$3
                       (/* Some */[0,Docstrings["docstring_loc"](ds)],
                        Docstrings["text_attr"](ds));
               },
             txt);
    };

var virtual_=function(ct){return /* Cfk_virtual */[0,ct];};

var concrete=function(o,e){return /* Cfk_concrete */[1,o,e];};

var
 attr$8=
  function(d,a)
   {return /* record */[0,d[1],d[2],Pervasives["@"](d[3],/* :: */[0,a,0])];};

var
 Cf=
  [0,
   mk$10,
   inherit_$1,
   val_$1,
   method_$1,
   constraint_$5,
   initializer_,
   extension$10,
   attribute$3,
   text$3,
   virtual_,
   concrete,
   attr$8];

var
 mk$11=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,name,typ)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var prim=$staropt$star$3[1];}else{var prim=0;}
    
    return /* record */[0,
            name,
            typ,
            prim,
            Docstrings["add_docs_attrs"](docs,attrs),
            loc];
    };

var Val=[0,mk$11];

var
 mk$12=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,name,typ)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var text$4=$staropt$star$3[1];}else{var text$4=0;}
    
    return /* record */[0,
            name,
            typ,
            Docstrings["add_text_attrs"]
             (text$4,Docstrings["add_docs_attrs"](docs,attrs)),
            loc];
    };

var Md=[0,mk$12];

var
 mk$13=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,typ,name)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var text$4=$staropt$star$3[1];}else{var text$4=0;}
    
    return /* record */[0,
            name,
            typ,
            Docstrings["add_text_attrs"]
             (text$4,Docstrings["add_docs_attrs"](docs,attrs)),
            loc];
    };

var Mtd=[0,mk$13];

var
 mk$14=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,name,expr)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var text$4=$staropt$star$3[1];}else{var text$4=0;}
    
    return /* record */[0,
            name,
            expr,
            Docstrings["add_text_attrs"]
             (text$4,Docstrings["add_docs_attrs"](docs,attrs)),
            loc];
    };

var Mb=[0,mk$14];

var
 mk$15=
  function($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,lid)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3)
     {var override$1=$staropt$star$3[1];}
    else
     {var override$1=1;}
    
    return /* record */[0,
            lid,
            override$1,
            loc,
            Docstrings["add_docs_attrs"](docs,attrs)];
    };

var Opn=[0,mk$15];

var
 mk$16=
  function($staropt$star,$staropt$star$1,$staropt$star$2,mexpr)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    return /* record */[0,mexpr,loc,Docstrings["add_docs_attrs"](docs,attrs)];
    };

var Incl=[0,mk$16];

var
 mk$17=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,pat,expr)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var text$4=$staropt$star$3[1];}else{var text$4=0;}
    
    return /* record */[0,
            pat,
            expr,
            Docstrings["add_text_attrs"]
             (text$4,Docstrings["add_docs_attrs"](docs,attrs)),
            loc];
    };

var Vb=[0,mk$17];

var
 mk$18=
  function
   ($staropt$star,
    $staropt$star$1,
    $staropt$star$2,
    $staropt$star$3,
    $staropt$star$4,
    $staropt$star$5,
    name,
    expr)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var text$4=$staropt$star$3[1];}else{var text$4=0;}
    
    if($staropt$star$4){var virt=$staropt$star$4[1];}else{var virt=1;}
    
    if($staropt$star$5){var params=$staropt$star$5[1];}else{var params=0;}
    
    return /* record */[0,
            virt,
            params,
            name,
            expr,
            loc,
            Docstrings["add_text_attrs"]
             (text$4,Docstrings["add_docs_attrs"](docs,attrs))];
    };

var Ci=[0,mk$18];

var
 mk$19=
  function
   ($staropt$star,
    $staropt$star$1,
    $staropt$star$2,
    $staropt$star$3,
    $staropt$star$4,
    $staropt$star$5,
    $staropt$star$6,
    $staropt$star$7,
    manifest,
    name)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3){var text$4=$staropt$star$3[1];}else{var text$4=0;}
    
    if($staropt$star$4){var params=$staropt$star$4[1];}else{var params=0;}
    
    if($staropt$star$5){var cstrs=$staropt$star$5[1];}else{var cstrs=0;}
    
    if($staropt$star$6){var kind=$staropt$star$6[1];}else{var kind=0;}
    
    if($staropt$star$7){var priv=$staropt$star$7[1];}else{var priv=1;}
    
    return /* record */[0,
            name,
            params,
            cstrs,
            kind,
            priv,
            manifest,
            Docstrings["add_text_attrs"]
             (text$4,Docstrings["add_docs_attrs"](docs,attrs)),
            loc];
    };

var
 constructor=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,res,name)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var info=$staropt$star$2[1];}
    else
     {var info=Docstrings["empty_info"];}
    
    if($staropt$star$3){var args=$staropt$star$3[1];}else{var args=0;}
    
    return /* record */[0,
            name,
            args,
            res,
            loc,
            Docstrings["add_info_attrs"](info,attrs)];
    };

var
 field$1=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,name,typ)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var info=$staropt$star$2[1];}
    else
     {var info=Docstrings["empty_info"];}
    
    if($staropt$star$3){var mut=$staropt$star$3[1];}else{var mut=0;}
    
    return /* record */[0,
            name,
            mut,
            typ,
            loc,
            Docstrings["add_info_attrs"](info,attrs)];
    };

var Type=[0,mk$19,constructor,field$1];

var
 mk$20=
  function
   ($staropt$star,
    $staropt$star$1,
    $staropt$star$2,
    $staropt$star$3,
    path,
    constructors)
   {if($staropt$star){var attrs=$staropt$star[1];}else{var attrs=0;}
    
    if($staropt$star$1)
     {var docs=$staropt$star$1[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$2){var params=$staropt$star$2[1];}else{var params=0;}
    
    if($staropt$star$3){var priv=$staropt$star$3[1];}else{var priv=1;}
    
    return /* record */[0,
            path,
            params,
            constructors,
            priv,
            Docstrings["add_docs_attrs"](docs,attrs)];
    };

var
 constructor$1=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,name,kind)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3)
     {var info=$staropt$star$3[1];}
    else
     {var info=Docstrings["empty_info"];}
    
    return /* record */[0,
            name,
            kind,
            loc,
            Docstrings["add_docs_attrs"]
             (docs,Docstrings["add_info_attrs"](info,attrs))];
    };

var
 decl=
  function
   ($staropt$star,
    $staropt$star$1,
    $staropt$star$2,
    $staropt$star$3,
    $staropt$star$4,
    res,
    name)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3)
     {var info=$staropt$star$3[1];}
    else
     {var info=Docstrings["empty_info"];}
    
    if($staropt$star$4){var args=$staropt$star$4[1];}else{var args=0;}
    
    return /* record */[0,
            name,
            /* Pext_decl */[0,args,res],
            loc,
            Docstrings["add_docs_attrs"]
             (docs,Docstrings["add_info_attrs"](info,attrs))];
    };

var
 rebind=
  function
   ($staropt$star,$staropt$star$1,$staropt$star$2,$staropt$star$3,name,lid)
   {if($staropt$star){var loc=$staropt$star[1];}else{var loc=default_loc[1];}
    
    if($staropt$star$1){var attrs=$staropt$star$1[1];}else{var attrs=0;}
    
    if($staropt$star$2)
     {var docs=$staropt$star$2[1];}
    else
     {var docs=Docstrings["empty_docs"];}
    
    if($staropt$star$3)
     {var info=$staropt$star$3[1];}
    else
     {var info=Docstrings["empty_info"];}
    
    return /* record */[0,
            name,
            /* Pext_rebind */[1,lid],
            loc,
            Docstrings["add_docs_attrs"]
             (docs,Docstrings["add_info_attrs"](info,attrs))];
    };

var Te=[0,mk$20,constructor$1,decl,rebind];

var mk$21=function($$self,fields){return /* record */[0,$$self,fields];};

var Csig=[0,mk$21];

var mk$22=function($$self,fields){return /* record */[0,$$self,fields];};

var Cstr=[0,mk$22];

module["exports"]=
{"default_loc":default_loc,
 "with_default_loc":with_default_loc,
 "Typ":Typ,
 "Pat":Pat,
 "Exp":
 [0,
  Exp[1],
  Exp[2],
  Exp[3],
  Exp[4],
  Exp[5],
  Exp[6],
  Exp[7],
  Exp[8],
  Exp[9],
  Exp[10],
  Exp[11],
  Exp[12],
  Exp[13],
  Exp[14],
  Exp[15],
  Exp[16],
  Exp[17],
  Exp[18],
  Exp[19],
  Exp[20],
  Exp[21],
  Exp[23],
  Exp[22],
  Exp[24],
  Exp[25],
  Exp[26],
  Exp[27],
  Exp[28],
  Exp[29],
  Exp[30],
  Exp[31],
  Exp[32],
  Exp[33],
  Exp[34],
  Exp[35],
  Exp[36],
  Exp[37]],
 "Val":Val,
 "Type":Type,
 "Te":Te,
 "Mty":Mty,
 "Mod":Mod,
 "Sig":Sig,
 "Str":Str,
 "Md":Md,
 "Mtd":Mtd,
 "Mb":Mb,
 "Opn":Opn,
 "Incl":Incl,
 "Vb":Vb,
 "Cty":Cty,
 "Ctf":[0,Ctf[1],Ctf[9],Ctf[2],Ctf[3],Ctf[4],Ctf[5],Ctf[6],Ctf[7],Ctf[8]],
 "Cl":Cl,
 "Cf":
 [0,
  Cf[1],
  Cf[12],
  Cf[2],
  Cf[3],
  Cf[4],
  Cf[5],
  Cf[6],
  Cf[7],
  Cf[8],
  Cf[9],
  Cf[10],
  Cf[11]],
 "Ci":Ci,
 "Csig":Csig,
 "Cstr":Cstr};

