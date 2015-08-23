// Generated CODE, PLEASE EDIT WITH CARE 

var Printtyp=require("./printtyp.js");
var Types=require("./types.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Buffer=require("./buffer.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 new_fmt=
  function(param)
   {var buf=Buffer["create"](512);
    
    var fmt=Format["formatter_of_buffer"](buf);
    
    var
     flush=
      function(param$1)
       {Format["pp_print_flush"](fmt,/* () */0);
        var s=Buffer["contents"](buf);
        
        Buffer["reset"](buf);
        return s};
    
    return /* tuple */[0,fmt,flush]};

var match=new_fmt(/* () */0);

var flush_type_fmt=match[2];

var type_fmt=match[1];

var outfuns=Format["pp_get_formatter_out_functions"](type_fmt,/* () */0);

Format["pp_set_formatter_out_functions"]
 (type_fmt,
  /* record */[0,
   outfuns[1],
   outfuns[2],
   function(param){return outfuns[1]("\n  ",0,3)},
   outfuns[4]]);
var match$1=new_fmt(/* () */0);

var flush_modtype_fmt=match$1[2];

var modtype_fmt=match$1[1];

var
 string_of_type_expr=
  function(t)
   {Printtyp["mark_loops"](t);
    Printtyp["type_scheme_max"]([/* Some */0,/* false */0],type_fmt,t);
    return flush_type_fmt(/* () */0)};

var Use_code=CamlPrimitive["caml_set_oo_id"]([248,"Odoc_print.Use_code",0]);

var
 simpl_module_type=
  function(code,t)
   {var
     iter=
      function(t)
       {var exit;
        
        switch(t[0])
         {case 0:exit=11;break;
          case 1:
           if(code)
            {throw [0,Use_code,code[1]]}
           else
            {return [/* Mty_signature */1,/* [] */0]}
           break;
          case 2:
           return /* Mty_functor */[2,
                   t[1],
                   Misc["may_map"](iter,t[2]),
                   iter(t[3])];
          case 3:exit=11;break
          }
        
        switch(exit){case 11:return t}
        };
    
    return iter(t)};

var
 string_of_module_type=
  function(code,$staropt$star,t)
   {var complete=$staropt$star?$staropt$star[1]:/* false */0;
    
    try
     {var t2=complete?t:simpl_module_type(code,t);
      
      Printtyp["modtype"](modtype_fmt,t2);
      return flush_modtype_fmt(/* () */0)}
    catch(exn){if(exn[1]===Use_code){return exn[2]}else{throw exn}}
    };

var
 simpl_class_type=
  function(t)
   {var
     iter=
      function(t)
       {switch(t[0])
         {case 0:return t;
          case 1:
           var tnil=/* record */[0,/* Tnil */0,0,0];
           
           var init=t[1][1];
           
           return /* Cty_signature */[1,
                   /* record */[0,
                    /* record */[0,
                     /* Tobject */[4,tnil,[0,/* None */0]],
                     init[2],
                     init[3]],
                    Types["Vars"][1],
                    Types["Concr"][1],
                    /* [] */0]];
          case 2:
           var new_ct=iter(t[3]);return /* Cty_arrow */[2,t[1],t[2],new_ct]
          }
        };
    
    return iter(t)};

var
 string_of_class_type=
  function($staropt$star,t)
   {var complete=$staropt$star?$staropt$star[1]:/* false */0;
    
    var t2=complete?t:simpl_class_type(t);
    
    Printtyp["class_type"](modtype_fmt,t2);
    return flush_modtype_fmt(/* () */0)};

module["exports"]=
{"string_of_type_expr":string_of_type_expr,
 "string_of_module_type":string_of_module_type,
 "string_of_class_type":string_of_class_type};

