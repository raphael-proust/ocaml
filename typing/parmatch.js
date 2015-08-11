// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var $$String=require("String");
var Char=require("Char");
var Typedtree=require("Typedtree");
var Nativeint=require("Nativeint");
var Warnings=require("Warnings");
var List=require("List");
var Btype=require("Btype");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Predef=require("Predef");
var Printf=require("Printf");
var Format=require("Format");
var Misc=require("Misc");
var Int32=require("Int32");
var Path=require("Path");
var Buffer=require("Buffer");
var Subst=require("Subst");
var Location=require("Location");
var Int64=require("Int64");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");
var $$Array=require("Array");
var Ast_helper=require("Ast_helper");


var
 make_pat=
  function(desc,ty,tenv)
   {return /* record */[0,desc,Location["none"],0,ty,tenv,0];};

var omega=make_pat(0,Ctype["none"],Env["empty"]);

var
 extra_pat=
  make_pat
   (/* Tpat_var */[0,Ident["create"]("+"),Typedtree["mknoloc"]("+")],
    Ctype["none"],
    Env["empty"]);

var
 omegas=
  function(i){if(i<=0){return 0;}else{return /* :: */[0,omega,omegas(i-1)];}};

var
 omega_list=
  function(l){return List["map"](function(param){return omega;},l);};

var zero=make_pat([2,[0,0]],Ctype["none"],Env["empty"]);

var is_absent=function(tag,row){return Btype["row_field"](tag,row[1])=0;};

var
 is_absent_pat=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 5:return is_absent(match[1],match[3]);default:exit=384;}}
    
    switch(exit){case 384:return 0;}
    };

var
 const_compare=
  function(x,y)
   {var exit;
    
    switch(x)
     {case 2:
       switch(y)
        {case 2:return $$String["compare"](x[1],y[1]);default:exit=382;}
       
      case 3:
       switch(y)
        {case 3:return "unknown primitive:caml_float_compare";
         default:exit=382;}
       
      default:exit=382;}
    
    switch(exit){case 382:return "unknown primitive:caml_compare";}
    };

var
 records_args=
  function(l1,l2)
   {var
     combine=
      function(r1,r2,l1$1,l2$1)
       {if(l1$1)
         {var rem1=l1$1[2];
          
          var match=l1$1[1];
          
          var p1=match[3];
          
          var lbl1=match[2];
          
          if(l2$1)
           {var rem2=l2$1[2];
            
            var match$1=l2$1[1];
            
            var p2=match$1[3];
            
            var lbl2=match$1[2];
            
            if(lbl1[5]<lbl2[5])
             {return combine(/* :: */[0,p1,r1],/* :: */[0,omega,r2],rem1,l2$1);
              }
            else
             {if(lbl1[5]>lbl2[5])
               {return combine
                        (/* :: */[0,omega,r1],/* :: */[0,p2,r2],l1$1,rem2);
                }
              else
               {return combine(/* :: */[0,p1,r1],/* :: */[0,p2,r2],rem1,rem2);
                }
              }
            }
          else
           {return combine(/* :: */[0,p1,r1],/* :: */[0,omega,r2],rem1,0);}
          }
        else
         {if(l2$1)
           {return combine
                    (/* :: */[0,omega,r1],/* :: */[0,l2$1[1][3],r2],0,l2$1[2]);
            }
          else
           {return /* tuple */[0,List["rev"](r1),List["rev"](r2)];}
          }
        };
    
    return combine(0,0,l1,l2);
    };

var
 compat=
  function(p,q)
   {var match=p[1];
    
    var match$1=q[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return compat(match[1],q);
        case 2:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=378;}}
         else
          {switch(match$1[0])
            {case 0:exit=378;
             case 1:exit=378;
             case 2:return const_compare(match[1],match$1[1])=0;
             case 8:exit=375;
             default:exit=374;}}
         
        case 3:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=378;}}
         else
          {switch(match$1[0])
            {case 0:exit=378;
             case 1:exit=378;
             case 3:return compats(match[1],match$1[1]);
             case 8:exit=375;
             default:exit=374;}}
         
        case 4:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=378;}}
         else
          {switch(match$1[0])
            {case 0:exit=378;
             case 1:exit=378;
             case 4:
              return "unknown primitive:caml_equal"&&
                     compats(match[3],match$1[3]);
              
             case 8:exit=375;
             default:exit=374;}}
         
        case 5:
         var match$2=match[2];
         
         var l1=match[1];
         
         if(match$2)
          {if(typeof match$1=="number")
            {switch(match$1){case 0:exit=378;}}
           else
            {switch(match$1[0])
              {case 0:exit=378;
               case 1:exit=378;
               case 5:
                var match$3=match$1[2];
                
                if(match$3)
                 {return "unknown primitive:caml_string_equal"&&
                         compat(match$2[1],match$3[1]);
                  }
                else
                 {return 0;}
                
               case 8:exit=375;
               default:exit=374;}}
           }
         else
          {if(typeof match$1=="number")
            {switch(match$1){case 0:exit=378;}}
           else
            {switch(match$1[0])
              {case 0:exit=378;
               case 1:exit=378;
               case 5:
                if(match$1[2])
                 {return 0;}
                else
                 {return "unknown primitive:caml_string_equal";}
                
               case 8:exit=375;
               default:exit=374;}}
           }
         
        case 6:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=378;}}
         else
          {switch(match$1[0])
            {case 0:exit=378;
             case 1:exit=378;
             case 6:
              var match$4=records_args(match[1],match$1[1]);
              
              return compats(match$4[1],match$4[2]);
              
             case 8:exit=375;
             default:exit=374;}}
         
        case 7:
         var ps=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=378;}}
         else
          {switch(match$1[0])
            {case 0:exit=378;
             case 1:exit=378;
             case 7:
              var qs=match$1[1];
              
              return (List["length"](ps)=List["length"](qs))&&compats(ps,qs);
              
             case 8:exit=375;
             default:exit=374;}}
         
        case 9:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=378;}}
         else
          {switch(match$1[0])
            {case 0:exit=378;
             case 1:exit=378;
             case 8:exit=375;
             case 9:return compat(match[1],match$1[1]);
             default:exit=374;}}
         
        default:exit=378;}}
    
    switch(exit)
     {case 378:
       var exit$1;
       
       if(typeof match$1=="number")
        {switch(match$1){case 0:exit$1=379;}}
       else
        {switch(match$1[0])
          {case 0:exit$1=379;
           case 1:return compat(p,match$1[1]);
           default:
            if(typeof match=="number")
             {switch(match){case 0:"unknown block:(exit 373)";}}
            else
             {switch(match[0])
               {case 0:"unknown block:(exit 373)";
                case 8:return compat(match[1],q)||compat(match[2],q);
                }}
            }}
       
       switch(exit$1){case 379:return 1;}
       
      case 375:return compat(p,match$1[1])||compat(p,match$1[2]);
      case 374:throw [0,Assert_failure,[0,"typing/parmatch.ml",106,6]];
      case 373:return 1;
      }
    };

var
 compats=
  function(ps,qs)
   {var exit;
    
    if(ps)
     {if(qs){return compat(ps[1],qs[1])&&compats(ps[2],qs[2]);}else{exit=380;}
      }
    else
     {if(qs){exit=380;}else{return 1;}}
    
    switch(exit)
     {case 380:throw [0,Assert_failure,[0,"typing/parmatch.ml",111,12]];}
    };

var Empty="unknown primitive:caml_set_oo_id";

var
 clean_copy=
  function(ty)
   {if(ty[2]=Btype["generic_level"])
     {return ty;}
    else
     {return Subst["type_expr"](Subst["identity"],ty);}
    };

var
 get_type_path=
  function(ty,tenv)
   {var ty$1=Ctype["repr"](Ctype["expand_head"](tenv,clean_copy(ty)));
    
    var match=ty$1[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0]){case 3:return match[1];default:exit=368;}}
    
    switch(exit)
     {case 368:return Misc["fatal_error"]("Parmatch.get_type_path");}
    };

var
 is_cons=
  function(param){switch(param[1]){case "::":return 1;default:return 0;}};

var
 pretty_const=
  function(c)
   {switch(c)
     {case 0:return Printf["sprintf"]([0,[4,0,0,0,0],"%d"],c[1]);
      case 1:return Printf["sprintf"]([0,[1,0],"%C"],c[1]);
      case 2:return Printf["sprintf"]([0,[3,0,0],"%S"],c[1]);
      case 3:return Printf["sprintf"]([0,[2,0,0],"%s"],c[1]);
      case 4:return Printf["sprintf"]([0,[5,0,0,0,[12,108,0]],"%ldl"],c[1]);
      case 5:return Printf["sprintf"]([0,[7,0,0,0,[12,76,0]],"%LdL"],c[1]);
      case 6:return Printf["sprintf"]([0,[6,0,0,0,[12,110,0]],"%ndn"],c[1]);
      }
    };

var
 pretty_val=
  function(ppf,v)
   {var match=v[3];
    
    if(match)
     {var rem=match[2];
      
      var $js=match[1][1];
      if(typeof $js=="number")
       {switch($js)
         {case 0:
           var newrecord="unknown primitive:duprecord regular 6";
           
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,[1,[0,0,""]],[11,"(module ",[15,[12,41,[17,0,0]]]]],
                     "@[(module %a)@]"],
                    pretty_val,
                    (newrecord[3]=rem,0,newrecord));
           
          }}
      else
       {switch($js[0])
         {case 0:
           var newrecord$1="unknown primitive:duprecord regular 6";
           
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,[1,[0,0,""]],[12,40,[15,[11," : _)",[17,0,0]]]]],
                     "@[(%a : _)@]"],
                    pretty_val,
                    (newrecord$1[3]=rem,0,newrecord$1));
           
          case 1:
           var newrecord$2="unknown primitive:duprecord regular 6";
           
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,[1,[0,0,""]],[11,"(# ",[15,[12,41,[17,0,0]]]]],
                     "@[(# %a)@]"],
                    pretty_val,
                    (newrecord$2[3]=rem,0,newrecord$2));
           
          }}
      }
    else
     {var match$1=v[1];
      
      if(typeof match$1=="number")
       {switch(match$1)
         {case 0:return Format["fprintf"](ppf,[0,[12,95,0],"_"]);}}
      else
       {switch(match$1[0])
         {case 0:return Ident["print"](ppf,match$1[1]);
          case 1:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,
                      [1,[0,0,""]],
                      [12,
                       40,
                       [15,[17,[0,"@ ",1,0],[11,"as ",[15,[12,41,[17,0,0]]]]]]]],
                     "@[(%a@ as %a)@]"],
                    pretty_val,
                    match$1[1],
                    Ident["print"],
                    match$1[2]);
           
          case 2:
           return Format["fprintf"]
                   (ppf,[0,[2,0,0],"%s"],pretty_const(match$1[1]));
           
          case 3:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,[1,[0,0,""]],[12,40,[15,[12,41,[17,0,0]]]]],
                     "@[(%a)@]"],
                    pretty_vals(","),
                    match$1[1]);
           
          case 4:
           var vs=match$1[3];
           
           var cstr=match$1[2];
           
           if(vs)
            {if(vs[2])
              {var name=cstr[1];
               
               var exit;
               
               switch(name)
                {case "::":
                  if(vs)
                   {var match$2=vs[2];
                    
                    if(match$2)
                     {if(match$2[2])
                       {exit=354;}
                      else
                       {return Format["fprintf"]
                                (ppf,
                                 [0,
                                  [18,
                                   [1,[0,0,""]],
                                   [15,[11,"::",[17,[0,"@,",0,0],[15,[17,0,0]]]]]],
                                  "@[%a::@,%a@]"],
                                 pretty_car,
                                 vs[1],
                                 pretty_cdr,
                                 match$2[1]);
                        }
                      }
                    else
                     {exit=354;}
                    }
                  else
                   {exit=354;}
                  
                 default:exit=354;}
               
               switch(exit)
                {case 354:
                  return Format["fprintf"]
                          (ppf,
                           [0,
                            [18,
                             [1,[0,[11,"<2>",0],"<2>"]],
                             [2,
                              0,
                              [17,
                               [0,"@ ",1,0],
                               [18,[1,[0,0,""]],[12,40,[15,[12,41,[17,0,[17,0,0]]]]]]]]],
                            "@[<2>%s@ @[(%a)@]@]"],
                           name,
                           pretty_vals(","),
                           vs);
                  
                 }
               }
             else
              {return Format["fprintf"]
                       (ppf,
                        [0,
                         [18,
                          [1,[0,[11,"<2>",0],"<2>"]],
                          [2,0,[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                         "@[<2>%s@ %a@]"],
                        cstr[1],
                        pretty_arg,
                        vs[1]);
               }
             }
           else
            {return Format["fprintf"](ppf,[0,[2,0,0],"%s"],cstr[1]);}
           
          case 5:
           var match$3=match$1[2];
           
           var l=match$1[1];
           
           if(match$3)
            {return Format["fprintf"]
                     (ppf,
                      [0,
                       [18,
                        [1,[0,[11,"<2>",0],"<2>"]],
                        [12,96,[2,0,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                       "@[<2>`%s@ %a@]"],
                      l,
                      pretty_arg,
                      match$3[1]);
             }
           else
            {return Format["fprintf"](ppf,[0,[12,96,[2,0,0]],"`%s"],l);}
           
          case 6:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,[1,[0,0,""]],[12,123,[15,[12,125,[17,0,0]]]]],
                     "@[{%a}@]"],
                    pretty_lvals,
                    List["filter"]
                     (function(param)
                       {if("unknown primitive:isint"){return 0;}else{return 1;}},
                      match$1[1]));
           
          case 7:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,[1,[0,0,""]],[11,"[| ",[15,[11," |]",[17,0,0]]]]],
                     "@[[| %a |]@]"],
                    pretty_vals(" ;"),
                    match$1[1]);
           
          case 8:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,
                      [1,[0,0,""]],
                      [12,
                       40,
                       [15,[12,124,[17,[0,"@,",0,0],[15,[12,41,[17,0,0]]]]]]]],
                     "@[(%a|@,%a)@]"],
                    pretty_or,
                    match$1[1],
                    pretty_or,
                    match$1[2]);
           
          case 9:
           return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,"lazy",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                     "@[<2>lazy@ %a@]"],
                    pretty_arg,
                    match$1[1]);
           
          }}
      }
    };

var
 pretty_car=
  function(ppf,v)
   {var match=v[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         var match$1=match[3];
         
         if(match$1)
          {var match$2=match$1[2];
           
           if(match$2)
            {if(match$2[2])
              {exit=358;}
             else
              {if(is_cons(match[2]))
                {return Format["fprintf"]
                         (ppf,[0,[12,40,[15,[12,41,0]]],"(%a)"],pretty_val,v);
                 }
               else
                {exit=358;}
               }
             }
           else
            {exit=358;}
           }
         else
          {exit=358;}
         
        default:exit=358;}}
    
    switch(exit){case 358:return pretty_val(ppf,v);}
    };

var
 pretty_cdr=
  function(ppf,v)
   {var match=v[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         var match$1=match[3];
         
         if(match$1)
          {var match$2=match$1[2];
           
           if(match$2)
            {if(match$2[2])
              {exit=359;}
             else
              {if(is_cons(match[2]))
                {return Format["fprintf"]
                         (ppf,
                          [0,[15,[11,"::",[17,[0,"@,",0,0],[15,0]]]],"%a::@,%a"],
                          pretty_car,
                          match$1[1],
                          pretty_cdr,
                          match$2[1]);
                 }
               else
                {exit=359;}
               }
             }
           else
            {exit=359;}
           }
         else
          {exit=359;}
         
        default:exit=359;}}
    
    switch(exit){case 359:return pretty_val(ppf,v);}
    };

var
 pretty_arg=
  function(ppf,v)
   {var match=v[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:if(match[3]){exit=360;}else{exit=361;}
        case 5:if(match[2]){exit=360;}else{exit=361;}
        default:exit=361;}}
    
    switch(exit)
     {case 361:return pretty_val(ppf,v);
      case 360:
       return Format["fprintf"]
               (ppf,[0,[12,40,[15,[12,41,0]]],"(%a)"],pretty_val,v);
       
      }
    };

var
 pretty_or=
  function(ppf,v)
   {var match=v[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[12,124,[17,[0,"@,",0,0],[15,0]]]],"%a|@,%a"],
                  pretty_or,
                  match[1],
                  pretty_or,
                  match[2]);
         
        default:exit=362;}}
    
    switch(exit){case 362:return pretty_val(ppf,v);}
    };

var
 pretty_vals=
  function(sep,ppf,param)
   {if(param)
     {var vs=param[2];
      
      var v=param[1];
      
      if(vs)
       {return Format["fprintf"]
                (ppf,
                 [0,[15,[2,0,[17,[0,"@ ",1,0],[15,0]]]],"%a%s@ %a"],
                 pretty_val,
                 v,
                 sep,
                 pretty_vals(sep),
                 vs);
        }
      else
       {return pretty_val(ppf,v);}
      }
    else
     {return 0;}
    };

var
 pretty_lvals=
  function(ppf,param)
   {if(param)
     {var rest=param[2];
      
      var match=param[1];
      
      var v=match[3];
      
      var lbl=match[2];
      
      if(rest)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [2,0,[12,61,[15,[12,59,[17,[0,"@ ",1,0],[15,0]]]]]],
                  "%s=%a;@ %a"],
                 lbl[1],
                 pretty_val,
                 v,
                 pretty_lvals,
                 rest);
        }
      else
       {return Format["fprintf"]
                (ppf,[0,[2,0,[12,61,[15,0]]],"%s=%a"],lbl[1],pretty_val,v);
        }
      }
    else
     {return 0;}
    };

var
 top_pretty=
  function(ppf,v)
   {return Format["fprintf"]
            (ppf,
             [0,[18,[1,[0,0,""]],[15,[17,0,[17,2,0]]]],"@[%a@]@?"],
             pretty_val,
             v);
    };

var
 pretty_pat=
  function(p)
   {top_pretty(Format["str_formatter"],p);
    return Pervasives["prerr_string"](Format["flush_str_formatter"](0));
    };

var
 pretty_line=
  function(ps)
   {return List["iter"]
            (function(p)
              {top_pretty(Format["str_formatter"],p);
               Pervasives["prerr_string"](" <");
               Pervasives["prerr_string"](Format["flush_str_formatter"](0));
               return Pervasives["prerr_string"](">");
               },
             ps);
    };

var
 pretty_matrix=
  function(pss)
   {Pervasives["prerr_endline"]("begin matrix");
    List["iter"]
     (function(ps){pretty_line(ps);return Pervasives["prerr_endline"]("");},
      pss);
    return Pervasives["prerr_endline"]("end matrix");
    };

var
 simple_match=
  function(p1,p2)
   {var match=p1[1];
    
    var match$1=p2[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 2:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;
             case 2:return const_compare(match[1],match$1[1])=0;
             default:exit=346;}}
         
        case 3:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;case 3:return 1;default:exit=346;}}
         
        case 4:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;
             case 4:return "unknown primitive:caml_equal";
             default:exit=346;}}
         
        case 5:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;
             case 5:return "unknown primitive:caml_string_equal";
             default:exit=346;}}
         
        case 6:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;case 6:return 1;default:exit=346;}}
         
        case 7:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;
             case 7:
              return List["length"](match[1])=List["length"](match$1[1]);
             default:exit=346;}}
         
        case 9:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=347;}}
         else
          {switch(match$1[0])
            {case 0:exit=347;case 9:return 1;default:exit=346;}}
         
        default:exit=347;}}
    
    switch(exit)
     {case 347:
       var exit$1;
       
       if(typeof match$1=="number")
        {switch(match$1){case 0:exit$1=348;}}
       else
        {switch(match$1[0])
          {case 0:exit$1=348;default:"unknown block:(exit 346)";}}
       
       switch(exit$1){case 348:return 1;}
       
      case 346:return 0;
      }
    };

var
 record_arg=
  function(p)
   {var match=p[1];
    
    if(typeof match=="number")
     {switch(match){case 0:return 0;}}
    else
     {switch(match[0])
       {case 6:return match[1];
        default:return Misc["fatal_error"]("Parmatch.as_record");}}
    };

var
 get_field=
  function(pos,arg)
   {var match=List["find"](function(param){return pos=param[2][5];},arg);
    
    return match[3];
    };

var
 extract_fields=
  function(omegas$1,arg)
   {return List["map"]
            (function(param)
              {try
                {return get_field(param[2][5],arg);}
               catch(exn){if(exn=Not_found){return omega;}else{throw exn;}}
               },
             omegas$1);
    };

var
 all_record_args=
  function(lbls)
   {if(lbls)
     {var
       t=
        $$Array["map"]
         (function(lbl)
           {return /* tuple */[0,Typedtree["mknoloc"]([0,"?temp?"]),lbl,omega];
            },
          lbls[1][2][6]);
      
      List["iter"](function(x){return t[x[2][5]]=x,0;},lbls);
      return $$Array["to_list"](t);
      }
    else
     {return Misc["fatal_error"]("Parmatch.all_record_args");}
    };

var
 simple_match_args=
  function(p1,p2)
   {var match=p2[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=334;}}
    else
     {switch(match[0])
       {case 0:exit=334;
        case 1:return simple_match_args(p1,match[1]);
        case 2:exit=335;
        case 3:exit=336;
        case 4:return match[3];
        case 5:
         var match$1=match[2];
         
         if(match$1){return /* :: */[0,match$1[1],0];}else{exit=335;}
         
        case 6:return extract_fields(record_arg(p1),match[1]);
        case 7:exit=336;
        case 8:exit=335;
        case 9:return /* :: */[0,match[1],0];
        }}
    
    switch(exit)
     {case 336:return match[1];
      case 335:return 0;
      case 334:
       var match$2=p1[1];
       
       var exit$1;
       
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 3:exit$1=333;
           case 4:return omega_list(match$2[3]);
           case 5:if(match$2[2]){return /* :: */[0,omega,0];}else{exit$1=332;}
           case 6:exit$1=333;
           case 7:exit$1=333;
           case 9:return /* :: */[0,omega,0];
           default:exit$1=332;}}
       
       switch(exit$1)
        {case 333:return omega_list(match$2[1]);case 332:return 0;}
       
      }
    };

var
 normalize_pat=
  function(q)
   {var match=q[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=331;}}
    else
     {switch(match[0])
       {case 0:return make_pat(0,q[4],q[5]);
        case 1:return normalize_pat(match[1]);
        case 2:exit=331;
        case 3:
         return make_pat(/* Tpat_tuple */[3,omega_list(match[1])],q[4],q[5]);
        case 4:
         return make_pat
                 (/* Tpat_construct */[4,
                   match[1],
                   match[2],
                   omega_list(match[3])],
                  q[4],
                  q[5]);
         
        case 5:
         return make_pat
                 (/* Tpat_variant */[5,
                   match[1],
                   Misc["may_map"](function(param){return omega;},match[2]),
                   match[3]],
                  q[4],
                  q[5]);
         
        case 6:
         return make_pat
                 (/* Tpat_record */[6,
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],param[2],omega];},
                     match[1]),
                   match[2]],
                  q[4],
                  q[5]);
         
        case 7:
         return make_pat(/* Tpat_array */[7,omega_list(match[1])],q[4],q[5]);
        case 8:return Misc["fatal_error"]("Parmatch.normalize_pat");
        case 9:return make_pat(/* Tpat_lazy */[9,omega],q[4],q[5]);
        }}
    
    switch(exit){case 331:return q;}
    };

var
 discr_pat=
  function(q,pss)
   {var
     acc_pat=
      function(acc,pss$1)
       {var exit;
        
        if(pss$1)
         {var match=pss$1[1];
          
          if(match)
           {var p=match[1];
            
            var match$1=p[1];
            
            var exit$1;
            
            if(typeof match$1=="number")
             {switch(match$1){case 0:exit$1=328;}}
            else
             {switch(match$1[0])
               {case 0:exit$1=328;
                case 1:
                 return acc_pat
                         (acc,/* :: */[0,/* :: */[0,match$1[1],match[2]],pss$1[2]]);
                 
                case 3:exit$1=329;
                case 6:
                 var
                  new_omegas=
                   List["fold_right"]
                    (function(param,r)
                      {var lbl=param[2];
                       
                       try
                        {var match$2=get_field(lbl[5],r);return r;}
                       catch(exn)
                        {if(exn=Not_found)
                          {return /* :: */[0,/* tuple */[0,param[1],lbl,omega],r];}
                         else
                          {throw exn;}
                         }
                       },
                     match$1[1],
                     record_arg(acc));
                 
                 return acc_pat
                         (make_pat
                           (/* Tpat_record */[6,new_omegas,match$1[2]],p[4],p[5]),
                          pss$1[2]);
                 
                case 8:
                 var ps=match[2];
                 
                 return acc_pat
                         (acc,
                          /* :: */[0,
                           /* :: */[0,match$1[1],ps],
                           /* :: */[0,/* :: */[0,match$1[2],ps],pss$1[2]]]);
                 
                case 9:exit$1=329;
                default:exit=326;}}
            
            switch(exit$1)
             {case 328:return acc_pat(acc,pss$1[2]);
              case 329:return normalize_pat(p);
              }
            }
          else
           {exit=326;}
          }
        else
         {exit=326;}
        
        switch(exit){case 326:return acc;}
        };
    
    var q$1=normalize_pat(q);
    
    var exit;
    
    var $js=q$1[1];
    if(typeof $js=="number")
     {switch($js){case 0:exit=322;}}
    else
     {switch($js[0]){case 6:exit=322;default:return q$1;}}
    
    switch(exit){case 322:return acc_pat(q$1,pss);}
    };

var
 read_args=
  function(xs,r)
   {if(xs)
     {if(r)
       {var match=read_args(xs[2],r[2]);
        
        return /* tuple */[0,/* :: */[0,r[1],match[1]],match[2]];
        }
      else
       {return Misc["fatal_error"]("Parmatch.read_args");}
      }
    else
     {return /* tuple */[0,0,r];}
    };

var
 do_set_args=
  function(erase_mutable,q,r)
   {var match=q[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=316;}}
    else
     {switch(match[0])
       {case 2:exit=316;
        case 3:
         var match$1=read_args(match[1],r);
         
         return /* :: */[0,
                 make_pat(/* Tpat_tuple */[3,match$1[1]],q[4],q[5]),
                 match$1[2]];
         
        case 4:
         var match$2=read_args(match[3],r);
         
         return /* :: */[0,
                 make_pat
                  (/* Tpat_construct */[4,match[1],match[2],match$2[1]],
                   q[4],
                   q[5]),
                 match$2[2]];
         
        case 5:
         if(match[2])
          {if(r)
            {var match$3=/* tuple */[0,/* Some */[0,r[1]],r[2]];}
           else
            {throw [0,Assert_failure,[0,"typing/parmatch.ml",450,13]];}
           }
         else
          {var match$3=/* tuple */[0,0,r];}
         
         return /* :: */[0,
                 make_pat
                  (/* Tpat_variant */[5,match[1],match$3[1],match[3]],
                   q[4],
                   q[5]),
                 match$3[2]];
         
        case 6:
         var omegas$1=match[1];
         
         var match$4=read_args(omegas$1,r);
         
         return /* :: */[0,
                 make_pat
                  (/* Tpat_record */[6,
                    List["map2"]
                     (function(param,arg)
                       {var lbl=param[2];
                        
                        var lid=param[1];
                        
                        var match$5=lbl[4];
                        
                        if(erase_mutable&&(match$5!=0?1:0))
                         {return /* tuple */[0,lid,lbl,omega];}
                        else
                         {return /* tuple */[0,lid,lbl,arg];}
                        },
                      omegas$1,
                      match$4[1]),
                    match[2]],
                   q[4],
                   q[5]),
                 match$4[2]];
         
        case 7:
         var match$5=read_args(match[1],r);
         
         return /* :: */[0,
                 make_pat(/* Tpat_array */[7,match$5[1]],q[4],q[5]),
                 match$5[2]];
         
        case 9:
         if(r)
          {return /* :: */[0,make_pat(/* Tpat_lazy */[9,r[1]],q[4],q[5]),r[2]];
           }
         else
          {return Misc["fatal_error"]("Parmatch.do_set_args (lazy)");}
         
        default:return Misc["fatal_error"]("Parmatch.set_args");}}
    
    switch(exit){case 316:return /* :: */[0,q,r];}
    };

var set_args=function(q,r){return do_set_args(0,q,r);};

var set_args_erase_mutable=function(q,r){return do_set_args(1,q,r);};

var
 filter_one=
  function(q,pss)
   {var
     filter_rec=
      function(param)
       {var exit;
        
        if(param)
         {var match=param[1];
          
          if(match)
           {var p=match[1];
            
            var match$1=p[1];
            
            var exit$1;
            
            if(typeof match$1=="number")
             {switch(match$1){}}
            else
             {switch(match$1[0])
               {case 1:
                 return filter_rec
                         (/* :: */[0,/* :: */[0,match$1[1],match[2]],param[2]]);
                 
                case 8:
                 var ps=match[2];
                 
                 return filter_rec
                         (/* :: */[0,
                           /* :: */[0,match$1[1],ps],
                           /* :: */[0,/* :: */[0,match$1[2],ps],param[2]]]);
                 
                default:exit$1=303;}}
            
            switch(exit$1)
             {case 303:
               var pss$1=param[2];
               
               if(simple_match(q,p))
                {return /* :: */[0,
                         Pervasives["@"](simple_match_args(q,p),match[2]),
                         filter_rec(pss$1)];
                 }
               else
                {return filter_rec(pss$1);}
               
              }
            }
          else
           {exit=302;}
          }
        else
         {exit=302;}
        
        switch(exit){case 302:return 0;}
        };
    
    return filter_rec(pss);
    };

var
 filter_extra=
  function(pss)
   {var
     filter_rec=
      function(param)
       {if(param)
         {var match=param[1];
          
          var exit;
          
          if(match)
           {var match$1=match[1][1];
            
            var exit$1;
            
            if(typeof match$1=="number")
             {switch(match$1){case 0:exit$1=300;}}
            else
             {switch(match$1[0])
               {case 0:exit$1=300;
                case 1:
                 return filter_rec
                         (/* :: */[0,/* :: */[0,match$1[1],match[2]],param[2]]);
                 
                case 8:
                 var ps=match[2];
                 
                 return filter_rec
                         (/* :: */[0,
                           /* :: */[0,match$1[1],ps],
                           /* :: */[0,/* :: */[0,match$1[2],ps],param[2]]]);
                 
                default:exit=298;}}
            
            switch(exit$1)
             {case 300:return /* :: */[0,match[2],filter_rec(param[2])];}
            }
          else
           {exit=298;}
          
          switch(exit){case 298:return filter_rec(param[2]);}
          }
        else
         {return 0;}
        };
    
    return filter_rec(pss);
    };

var
 filter_all=
  function(pat0,pss)
   {var
     insert=
      function(q,qs,env)
       {if(env)
         {var env$1=env[2];
          
          var c=env[1];
          
          var q0=c[1];
          
          if(simple_match(q0,q))
           {return /* :: */[0,
                    /* tuple */[0,
                     q0,
                     /* :: */[0,Pervasives["@"](simple_match_args(q0,q),qs),c[2]]],
                    env$1];
            }
          else
           {return /* :: */[0,c,insert(q,qs,env$1)];}
          }
        else
         {var q0$1=normalize_pat(q);
          
          return /* :: */[0,
                  /* tuple */[0,
                   q0$1,
                   /* :: */[0,Pervasives["@"](simple_match_args(q0$1,q),qs),0]],
                  0];
          }
        };
    
    var
     filter_rec=
      function(env,param)
       {var exit;
        
        if(param)
         {var match=param[1];
          
          if(match)
           {var p=match[1];
            
            var match$1=p[1];
            
            var exit$1;
            
            if(typeof match$1=="number")
             {switch(match$1){case 0:exit$1=292;}}
            else
             {switch(match$1[0])
               {case 0:exit$1=292;
                case 1:
                 return filter_rec
                         (env,/* :: */[0,/* :: */[0,match$1[1],match[2]],param[2]]);
                 
                case 8:
                 var ps=match[2];
                 
                 return filter_rec
                         (env,
                          /* :: */[0,
                           /* :: */[0,match$1[1],ps],
                           /* :: */[0,/* :: */[0,match$1[2],ps],param[2]]]);
                 
                default:return filter_rec(insert(p,match[2],env),param[2]);}}
            
            switch(exit$1){case 292:return filter_rec(env,param[2]);}
            }
          else
           {exit=289;}
          }
        else
         {exit=289;}
        
        switch(exit){case 289:return env;}
        };
    
    var
     filter_omega=
      function(env,param)
       {if(param)
         {var match=param[1];
          
          var exit;
          
          if(match)
           {var match$1=match[1][1];
            
            var exit$1;
            
            if(typeof match$1=="number")
             {switch(match$1){case 0:exit$1=295;}}
            else
             {switch(match$1[0])
               {case 0:exit$1=295;
                case 1:
                 return filter_omega
                         (env,/* :: */[0,/* :: */[0,match$1[1],match[2]],param[2]]);
                 
                case 8:
                 var ps=match[2];
                 
                 return filter_omega
                         (env,
                          /* :: */[0,
                           /* :: */[0,match$1[1],ps],
                           /* :: */[0,/* :: */[0,match$1[2],ps],param[2]]]);
                 
                default:exit=293;}}
            
            switch(exit$1)
             {case 295:
               var ps$1=match[2];
               
               return filter_omega
                       (List["map"]
                         (function(param$1)
                           {var q=param$1[1];
                            
                            return /* tuple */[0,
                                    q,
                                    /* :: */[0,
                                     Pervasives["@"](simple_match_args(q,omega),ps$1),
                                     param$1[2]]];
                            },
                          env),
                        param[2]);
               
              }
            }
          else
           {exit=293;}
          
          switch(exit){case 293:return filter_omega(env,param[2]);}
          }
        else
         {return env;}
        };
    
    var match=pat0[1];
    
    var exit;
    
    var $js;
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:exit=287;case 6:exit=287;case 9:exit=287;default:exit=288;}}
    
    var $js$1;
    switch(exit)
     {case 288:$js$1=0;case 287:$js$1=/* :: */[0,/* tuple */[0,pat0,0],0];}
    return filter_omega(filter_rec($js$1,pss),pss);
    };

var
 set_last=
  function(a,param)
   {if(param)
     {var l=param[2];
      
      if(l)
       {return /* :: */[0,param[1],set_last(a,l)];}
      else
       {return /* :: */[0,a,0];}
      }
    else
     {return 0;}
    };

var
 mark_partial=
  function(param)
   {if(param)
     {var ps=param[1];
      
      var exit;
      
      if(ps)
       {var match=ps[1][1];
        
        var exit$1;
        
        if(typeof match=="number")
         {switch(match){case 0:exit$1=285;}}
        else
         {switch(match[0])
           {case 0:exit$1=285;
            case 1:
             return mark_partial
                     (/* :: */[0,/* :: */[0,match[1],ps[2]],param[2]]);
             
            case 8:
             var ps$1=ps[2];
             
             return mark_partial
                     (/* :: */[0,
                       /* :: */[0,match[1],ps$1],
                       /* :: */[0,/* :: */[0,match[2],ps$1],param[2]]]);
             
            default:exit=283;}}
        
        switch(exit$1){case 285:return /* :: */[0,ps,mark_partial(param[2])];}
        }
      else
       {exit=283;}
      
      switch(exit)
       {case 283:return /* :: */[0,set_last(zero,ps),mark_partial(param[2])];}
      }
    else
     {return 0;}
    };

var
 close_variant=
  function(env,row)
   {var row$1=Btype["row_repr"](row);
    
    var
     nm=
      List["fold_left"]
       (function(nm$1,param)
         {var match=Btype["row_field_repr"](param[2]);
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){case 0:exit=279;}}
          else
           {switch(match[0])
             {case 0:exit=279;
              case 1:
               if(match[3]!=0)
                {exit=279;}
               else
                {Btype["set_row_field"](match[4],0);return 0;}
               
              }}
          
          switch(exit){case 279:return nm$1;}
          },
        row$1[6],
        row$1[1]);
    
    if(!row$1[4]||nm!=row$1[6])
     {return Ctype["unify"]
              (env,
               row$1[2],
               Btype["newgenty"]
                (/* Tvariant */[8,
                  /* record */[0,
                   0,
                   Btype["newgenvar"](0,0),
                   row$1[3],
                   1,
                   row$1[5],
                   nm]]));
      }
    else
     {return 0;}
    };

var
 row_of_pat=
  function(pat)
   {var match=Ctype["expand_head"](pat[5],pat[4]);
    
    var match$1=match[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 8:return Btype["row_repr"](match$1[1]);default:exit=277;}}
    
    switch(exit)
     {case 277:throw [0,Assert_failure,[0,"typing/parmatch.ml",602,9]];}
    };

var
 generalized_constructor=
  function(x)
   {var match=x[1][1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0]){case 4:return match[2][10];default:exit=275;}}
    
    switch(exit)
     {case 275:throw [0,Assert_failure,[0,"typing/parmatch.ml",613,9]];}
    };

var
 clean_env=
  function(env)
   {var
     loop=
      function(param)
       {if(param)
         {var xs=param[2];
          
          var x=param[1];
          
          if(generalized_constructor(x))
           {return loop(xs);}
          else
           {return /* :: */[0,x,loop(xs)];}
          }
        else
         {return 0;}
        };
    
    return loop(env);
    };

var
 full_match=
  function(ignore_generalized,closing,env)
   {var exit;
    
    if(env)
     {var p=env[1][1];
      
      var match=p[1];
      
      var exit$1;
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 2:
           switch(match[1])
            {case 1:return List["length"](env)=256;default:return 0;}
           
          case 3:exit$1=272;
          case 4:
           var c=match[2];
           
           if(c[7]<0)
            {return 0;}
           else
            {if(ignore_generalized)
              {var env$1=clean_env(env);return List["length"](env$1)=c[9];}
             else
              {return List["length"](env)=c[7]+c[8];}
             }
           
          case 5:
           var
            fields=
             List["map"]
              (function(param)
                {var match$1=param[1][1];
                 
                 var exit$2;
                 
                 if(typeof match$1=="number")
                  {switch(match$1){}}
                 else
                  {switch(match$1[0])
                    {case 5:return match$1[1];default:exit$2=268;}}
                 
                 switch(exit$2)
                  {case 268:
                    throw [0,Assert_failure,[0,"typing/parmatch.ml",640,17]];
                   }
                 },
               env);
           
           var row=row_of_pat(p);
           
           if(closing&&!Btype["row_fixed"](row))
            {return List["for_all"]
                     (function(param)
                       {var match$1=Btype["row_field_repr"](param[2]);
                        
                        var exit$2;
                        
                        if(typeof match$1=="number")
                         {switch(match$1){case 0:exit$2=265;}}
                        else
                         {switch(match$1[0])
                           {case 0:exit$2=266;
                            case 1:if(match$1[3]!=0){exit$2=266;}else{exit$2=265;}
                            }}
                        
                        switch(exit$2)
                         {case 265:return 1;
                          case 266:return List["mem"](param[1],fields);
                          }
                        },
                      row[1]);
             }
           else
            {return row[4]&&
                    List["for_all"]
                     (function(param)
                       {return (Btype["row_field_repr"](param[2])=0)||
                               List["mem"](param[1],fields);
                        },
                      row[1]);
             }
           
          case 6:exit$1=272;
          case 7:return 0;
          case 9:exit$1=272;
          default:exit=270;}}
      
      switch(exit$1){case 272:return 1;}
      }
    else
     {exit=270;}
    
    switch(exit){case 270:return Misc["fatal_error"]("Parmatch.full_match");}
    };

var
 full_match_gadt=
  function(env)
   {var exit;
    
    if(env)
     {var match=env[1][1][1];
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 4:var c=match[2];return List["length"](env)=c[7]+c[8];
          default:exit=262;}}
      }
    else
     {exit=262;}
    
    switch(exit){case 262:return 1;}
    };

var
 extendable_match=
  function(env)
   {var exit;
    
    if(env)
     {var p=env[1][1];
      
      var match=p[1];
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 4:
           var exit$1;
           
           switch(match[2][6])
            {case 0:exit$1=260;case 1:exit$1=260;case 2:exit=259;}
           
           switch(exit$1)
            {case 260:
              var path=get_type_path(p[4],p[5]);
              
              return !(Path["same"](path,Predef["path_bool"])||
                      Path["same"](path,Predef["path_list"])||
                      Path["same"](path,Predef["path_option"]));
              
             }
           
          default:exit=259;}}
      }
    else
     {exit=259;}
    
    switch(exit){case 259:return 0;}
    };

var
 should_extend=
  function(ext,env)
   {if(ext)
     {var exit;
      
      if(env)
       {var p=env[1][1];
        
        var match=p[1];
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 4:
             var exit$1;
             
             switch(match[2][6])
              {case 0:exit$1=256;case 1:exit$1=256;case 2:exit=255;}
             
             switch(exit$1)
              {case 256:
                var path=get_type_path(p[4],p[5]);
                
                return Path["same"](path,ext[1]);
                
               }
             
            default:exit=255;}}
        }
      else
       {exit=255;}
      
      switch(exit){case 255:return 0;}
      }
    else
     {return 0;}
    };

var
 complete_tags=
  function(nconsts,nconstrs,tags)
   {var seen_const="unknown primitive:caml_make_vect";
    
    var seen_constr="unknown primitive:caml_make_vect";
    
    List["iter"]
     (function(param)
       {switch(param)
         {case 0:return seen_const[param[1]]=1,0;
          case 1:return seen_constr[param[1]]=1,0;
          case 2:throw [0,Assert_failure,[0,"typing/parmatch.ml",703,14]];
          }
        },
      tags);
    var r=0;
    
    for(var i=0;i<=nconsts-1;i++)
     {if(!seen_const[i]){r=/* :: */[0,/* Cstr_constant */[0,i],r];}else{}}
    
    for(var i$1=0;i$1<=nconstrs-1;i$1++)
     {if(!seen_constr[i$1]){r=/* :: */[0,/* Cstr_block */[1,i$1],r];}else{}}
    
    return r;
    };

var
 pat_of_constr=
  function(ex_pat,cstr)
   {var newrecord="unknown primitive:duprecord regular 6";
    
    newrecord[1]=
    /* Tpat_construct */[4,
     Typedtree["mknoloc"]([0,"?pat_of_constr?"]),
     cstr,
     omegas(cstr[5])],
    0;
    return newrecord;
    };

var
 pat_of_constrs=
  function(ex_pat,param)
   {if(param)
     {var rem=param[2];
      
      var cstr=param[1];
      
      if(rem)
       {var newrecord="unknown primitive:duprecord regular 6";
        
        newrecord[1]=
        /* Tpat_or */[8,
         pat_of_constr(ex_pat,cstr),
         pat_of_constrs(ex_pat,rem),
         0],
        0;
        return newrecord;
        }
      else
       {return pat_of_constr(ex_pat,cstr);}
      }
    else
     {throw Empty;}
    };

var
 get_variant_constructors=
  function(env,ty)
   {var match=Ctype["repr"](ty)[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         var path=match[1];
         
         var match$1=Env["find_type"](path,env);
         
         var exit$1;
         
         var $js=match$1[3];
         if(typeof $js=="number")
          {switch($js){}}
         else
          {switch($js[0])
            {case 1:return Env["find_type_descrs"](path,env)[1];
             default:exit$1=245;}}
         
         switch(exit$1)
          {case 245:
            if(match$1[5])
             {return get_variant_constructors
                      (env,Ctype["expand_head_once"](env,clean_copy(ty)));
              }
            else
             {return Misc["fatal_error"]("Parmatch.get_variant_constructors");
              }
            
           }
         
        default:exit=246;}}
    
    switch(exit)
     {case 246:
       return Misc["fatal_error"]("Parmatch.get_variant_constructors");
      }
    };

var
 map_filter=
  function(f,param)
   {if(param)
     {var xs=param[2];
      
      var match=f(param[1]);
      
      if(match)
       {return /* :: */[0,match[1],map_filter(f,xs)];}
      else
       {return map_filter(f,xs);}
      }
    else
     {return 0;}
    };

var
 complete_constrs=
  function(p,all_tags)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         var c=match[2];
         
         var not_tags=complete_tags(c[7],c[8],all_tags);
         
         var constrs=get_variant_constructors(p[5],c[2]);
         
         return map_filter
                 (function(cnstr)
                   {if(List["mem"](cnstr[6],not_tags))
                     {return /* Some */[0,cnstr];}
                    else
                     {return 0;}
                    },
                  constrs);
         
        default:exit=242;}}
    
    switch(exit)
     {case 242:return Misc["fatal_error"]("Parmatch.complete_constr");}
    };

var
 build_other_constant=
  function(proj,make,first,next,p,env)
   {var all=List["map"](function(param){return proj(param[1][1]);},env);
    
    var
     try_const=
      function(i)
       {if(List["mem"](i,all))
         {return try_const(next(i));}
        else
         {return make_pat(make(i),p[4],p[5]);}
        };
    
    return try_const(first);
    };

var
 build_other=
  function(ext,env)
   {var exit;
    
    if(env)
     {var p=env[1][1];
      
      var match=p[1];
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 2:
           switch(match[1])
            {case 0:
              return build_other_constant
                      (function(param)
                        {var exit$1;
                         
                         if(typeof param=="number")
                          {switch(param){}}
                         else
                          {switch(param[0])
                            {case 2:
                              var match$1=param[1];
                              
                              switch(match$1)
                               {case 0:return match$1[1];default:exit$1=227;}
                              
                             default:exit$1=227;}}
                         
                         switch(exit$1)
                          {case 227:
                            throw [0,Assert_failure,[0,"typing/parmatch.ml",857,55]];
                           }
                         },
                       function(i)
                        {return /* Tpat_constant */[2,/* Const_int */[0,i]];},
                       0,
                       function(prim){return 1+prim;},
                       p,
                       env);
              
             case 1:
              var
               all_chars=
                List["map"]
                 (function(param)
                   {var match$1=param[1][1];
                    
                    var exit$1;
                    
                    if(typeof match$1=="number")
                     {switch(match$1){}}
                    else
                     {switch(match$1[0])
                       {case 2:
                         var match$2=match$1[1];
                         
                         switch(match$2)
                          {case 1:return match$2[1];default:exit$1=225;}
                         
                        default:exit$1=225;}}
                    
                    switch(exit$1)
                     {case 225:
                       throw [0,Assert_failure,[0,"typing/parmatch.ml",832,15]];
                      }
                    },
                  env);
              
              var
               find_other=
                function(i,imax)
                 {if(i>imax)
                   {throw Not_found;}
                  else
                   {var ci=Char["chr"](i);
                    
                    if(List["mem"](ci,all_chars))
                     {return find_other(i+1,imax);}
                    else
                     {return make_pat
                              (/* Tpat_constant */[2,/* Const_char */[1,ci]],p[4],p[5]);
                      }
                    }
                  };
              
              var
               try_chars=
                function(param)
                 {if(param)
                   {var match$1=param[1];
                    
                    try
                     {return find_other(match$1[1],match$1[2]);}
                    catch(exn)
                     {if(exn=Not_found)
                       {return try_chars(param[2]);}
                      else
                       {throw exn;}
                      }
                    }
                  else
                   {return omega;}
                  };
              
              return try_chars
                      (/* :: */[0,
                        [0,97,122],
                        /* :: */[0,
                         [0,65,90],
                         /* :: */[0,
                          [0,48,57],
                          /* :: */[0,
                           [0,32,126],
                           /* :: */[0,/* tuple */[0,Char["chr"](0),Char["chr"](255)],0]]]]]);
              
             case 2:
              return build_other_constant
                      (function(param)
                        {var exit$1;
                         
                         if(typeof param=="number")
                          {switch(param){}}
                         else
                          {switch(param[0])
                            {case 2:
                              var match$1=param[1];
                              
                              switch(match$1)
                               {case 2:return match$1[1]["length"];default:exit$1=231;}
                              
                             default:exit$1=231;}}
                         
                         switch(exit$1)
                          {case 231:
                            throw [0,Assert_failure,[0,"typing/parmatch.ml",878,21]];
                           }
                         },
                       function(i)
                        {return /* Tpat_constant */[2,
                                 /* Const_string */[2,$$String["make"](i,42),0]];
                         },
                       0,
                       function(prim){return 1+prim;},
                       p,
                       env);
              
             case 3:
              return build_other_constant
                      (function(param)
                        {var exit$1;
                         
                         if(typeof param=="number")
                          {switch(param){}}
                         else
                          {switch(param[0])
                            {case 2:
                              var match$1=param[1];
                              
                              switch(match$1)
                               {case 3:return "unknown primitive:caml_float_of_string";
                                default:exit$1=232;}
                              
                             default:exit$1=232;}}
                         
                         switch(exit$1)
                          {case 232:
                            throw [0,Assert_failure,[0,"typing/parmatch.ml",884,21]];
                           }
                         },
                       function(f)
                        {return /* Tpat_constant */[2,
                                 /* Const_float */[3,Pervasives["string_of_float"](f)]];
                         },
                       0,
                       function(f){return f+1;},
                       p,
                       env);
              
             case 4:
              return build_other_constant
                      (function(param)
                        {var exit$1;
                         
                         if(typeof param=="number")
                          {switch(param){}}
                         else
                          {switch(param[0])
                            {case 2:
                              var match$1=param[1];
                              
                              switch(match$1)
                               {case 4:return match$1[1];default:exit$1=228;}
                              
                             default:exit$1=228;}}
                         
                         switch(exit$1)
                          {case 228:
                            throw [0,Assert_failure,[0,"typing/parmatch.ml",862,57]];
                           }
                         },
                       function(i)
                        {return /* Tpat_constant */[2,/* Const_int32 */[4,i]];},
                       0,
                       Int32["succ"],
                       p,
                       env);
              
             case 5:
              return build_other_constant
                      (function(param)
                        {var exit$1;
                         
                         if(typeof param=="number")
                          {switch(param){}}
                         else
                          {switch(param[0])
                            {case 2:
                              var match$1=param[1];
                              
                              switch(match$1)
                               {case 5:return match$1[1];default:exit$1=229;}
                              
                             default:exit$1=229;}}
                         
                         switch(exit$1)
                          {case 229:
                            throw [0,Assert_failure,[0,"typing/parmatch.ml",867,57]];
                           }
                         },
                       function(i)
                        {return /* Tpat_constant */[2,/* Const_int64 */[5,i]];},
                       0,
                       Int64["succ"],
                       p,
                       env);
              
             case 6:
              return build_other_constant
                      (function(param)
                        {var exit$1;
                         
                         if(typeof param=="number")
                          {switch(param){}}
                         else
                          {switch(param[0])
                            {case 2:
                              var match$1=param[1];
                              
                              switch(match$1)
                               {case 6:return match$1[1];default:exit$1=230;}
                              
                             default:exit$1=230;}}
                         
                         switch(exit$1)
                          {case 230:
                            throw [0,Assert_failure,[0,"typing/parmatch.ml",872,61]];
                           }
                         },
                       function(i)
                        {return /* Tpat_constant */[2,/* Const_nativeint */[6,i]];},
                       0,
                       Nativeint["succ"],
                       p,
                       env);
              
             }
           
          case 4:
           var c=match[2];
           
           var exit$1;
           
           switch(c[6])
            {case 0:exit$1=236;
             case 1:exit$1=236;
             case 2:
              var newrecord="unknown primitive:duprecord regular 13";
              
              newrecord[1]="*extension*",0;
              var c$1=newrecord;
              
              return make_pat
                      (/* Tpat_construct */[4,match[1],c$1,0],
                       Ctype["none"],
                       Env["empty"]);
              
             }
           
           switch(exit$1)
            {case 236:
              var exit$2;
              
              if(ext)
               {if(Path["same"](ext[1],get_type_path(p[4],p[5])))
                 {return extra_pat;}
                else
                 {exit$2=217;}
                }
              else
               {exit$2=217;}
              
              switch(exit$2)
               {case 217:
                 var
                  get_tag=
                   function(param)
                    {var match$1=param[1];
                     
                     var exit$3;
                     
                     if(typeof match$1=="number")
                      {switch(match$1){}}
                     else
                      {switch(match$1[0])
                        {case 4:return match$1[2][6];default:exit$3=215;}}
                     
                     switch(exit$3)
                      {case 215:return Misc["fatal_error"]("Parmatch.get_tag");}
                     };
                 
                 var
                  all_tags=
                   List["map"](function(param){return get_tag(param[1]);},env);
                 
                 return pat_of_constrs(p,complete_constrs(p,all_tags));
                 
                }
              
             }
           
          case 5:
           var r=match[3];
           
           var
            tags=
             List["map"]
              (function(param)
                {var match$1=param[1][1];
                 
                 var exit$3;
                 
                 if(typeof match$1=="number")
                  {switch(match$1){}}
                 else
                  {switch(match$1[0])
                    {case 5:return match$1[1];default:exit$3=221;}}
                 
                 switch(exit$3)
                  {case 221:
                    throw [0,Assert_failure,[0,"typing/parmatch.ml",801,23]];
                   }
                 },
               env);
           
           var row=row_of_pat(p);
           
           var
            make_other_pat=
             function(tag,$$const)
              {if($$const){var arg=0;}else{var arg=/* Some */[0,omega];}
               
               return make_pat(/* Tpat_variant */[5,tag,arg,r],p[4],p[5]);
               };
           
           var
            match$1=
             List["fold_left"]
              (function(others,param)
                {var tag=param[1];
                 
                 if(List["mem"](tag,tags))
                  {return others;}
                 else
                  {var match$2=Btype["row_field_repr"](param[2]);
                   
                   if(typeof match$2=="number")
                    {switch(match$2){case 0:return others;}}
                   else
                    {switch(match$2[0])
                      {case 0:
                        return /* :: */[0,make_other_pat(tag,match$2[1]=0),others];
                       case 1:
                        return /* :: */[0,make_other_pat(tag,match$2[1]),others];
                       }}
                   }
                 },
               0,
               row[1]);
           
           if(match$1)
            {return List["fold_left"]
                     (function(p_res,pat)
                       {return make_pat(/* Tpat_or */[8,pat,p_res,0],p[4],p[5]);},
                      match$1[1],
                      match$1[2]);
             }
           else
            {return make_other_pat("AnyExtraTag",1);}
           
          case 7:
           var
            all_lengths=
             List["map"]
              (function(param)
                {var match$2=param[1][1];
                 
                 var exit$3;
                 
                 if(typeof match$2=="number")
                  {switch(match$2){}}
                 else
                  {switch(match$2[0])
                    {case 7:return List["length"](match$2[1]);
                     default:exit$3=233;}}
                 
                 switch(exit$3)
                  {case 233:
                    throw [0,Assert_failure,[0,"typing/parmatch.ml",893,15]];
                   }
                 },
               env);
           
           var
            try_arrays=
             function(l)
              {if(List["mem"](l,all_lengths))
                {return try_arrays(l+1);}
               else
                {return make_pat(/* Tpat_array */[7,omegas(l)],p[4],p[5]);}
               };
           
           return try_arrays(0);
           
          default:exit=235;}}
      }
    else
     {return omega;}
    
    switch(exit){case 235:return omega;}
    };

var
 build_other_gadt=
  function(ext,env)
   {var exit;
    
    if(env)
     {var p=env[1][1];
      
      var $js=p[1];
      if(typeof $js=="number")
       {switch($js){}}
      else
       {switch($js[0])
         {case 4:
           var
            get_tag=
             function(param)
              {var match=param[1];
               
               var exit$1;
               
               if(typeof match=="number")
                {switch(match){}}
               else
                {switch(match[0])
                  {case 4:return match[2][6];default:exit$1=209;}}
               
               switch(exit$1)
                {case 209:return Misc["fatal_error"]("Parmatch.get_tag");}
               };
           
           var
            all_tags=
             List["map"](function(param){return get_tag(param[1]);},env);
           
           var cnstrs=complete_constrs(p,all_tags);
           
           return List["map"](pat_of_constr(p),cnstrs);
           
          default:exit=211;}}
      }
    else
     {exit=211;}
    
    switch(exit)
     {case 211:throw [0,Assert_failure,[0,"typing/parmatch.ml",917,11]];}
    };

var
 has_instance=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:var p$1=match[1];exit=202;
        case 3:exit=205;
        case 4:var ps=match[3];exit=203;
        case 5:
         var match$1=match[2];
         
         if(is_absent(match[1],match[3]))
          {return 0;}
         else
          {if(match$1){var p$1=match$1[1];exit=202;}else{exit=201;}}
         
        case 6:
         return has_instances
                 (List["map"](function(param){return param[3];},match[1]));
         
        case 7:exit=205;
        case 8:return has_instance(match[1])||has_instance(match[2]);
        case 9:return has_instance(match[1]);
        default:exit=201;}}
    
    switch(exit)
     {case 205:"unknown block:(exit 203 (field 0 match/2787))";
      case 201:return 1;
      case 202:return has_instance(p$1);
      case 203:return has_instances(ps);
      }
    };

var
 has_instances=
  function(param)
   {if(param)
     {return has_instance(param[1])&&has_instances(param[2]);}
    else
     {return 1;}
    };

var
 satisfiable=
  function(pss,qs)
   {if(pss)
     {if(qs)
       {var q=qs[1];
        
        var match=q[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){case 0:exit=199;}}
        else
         {switch(match[0])
           {case 0:exit=199;
            case 1:return satisfiable(pss,/* :: */[0,match[1],qs[2]]);
            case 5:if(is_absent(match[1],match[3])){return 0;}else{exit=198;}
            case 8:
             var qs$1=qs[2];
             
             return satisfiable(pss,/* :: */[0,match[1],qs$1])||
                    satisfiable(pss,/* :: */[0,match[2],qs$1]);
             
            default:exit=198;}}
        
        switch(exit)
         {case 199:
           var qs$2=qs[2];
           
           var q0=discr_pat(omega,pss);
           
           var constrs=filter_all(q0,pss);
           
           if(constrs)
            {if(full_match(0,0,constrs))
              {return List["exists"]
                       (function(param)
                         {var p=param[1];
                          
                          return !is_absent_pat(p)&&
                                 satisfiable
                                  (param[2],Pervasives["@"](simple_match_args(p,omega),qs$2));
                          },
                        constrs);
               }
             else
              {return satisfiable(filter_extra(pss),qs$2);}
             }
           else
            {return satisfiable(filter_extra(pss),qs$2);}
           
          case 198:
           var q0$1=discr_pat(q,pss);
           
           return satisfiable
                   (filter_one(q0$1,pss),
                    Pervasives["@"](simple_match_args(q0$1,q),qs[2]));
           
          }
        }
      else
       {return 0;}
      }
    else
     {return has_instances(qs);}
    };

var orify=function(x,y){return make_pat(/* Tpat_or */[8,x,y,0],x[4],x[5]);};

var
 orify_many=
  function(param)
   {if(param)
     {var xs=param[2];
      
      var x=param[1];
      
      if(xs){return orify(x,orify_many(xs));}else{return x;}
      }
    else
     {throw [0,Assert_failure,[0,"typing/parmatch.ml",989,12]];}
    };

var
 try_many=
  function(f,param)
   {if(param)
     {var match=param[1];
      
      var r=f(/* tuple */[0,match[1],match[2]]);
      
      if(r){return r;}else{return try_many(f,param[2]);}
      }
    else
     {return 0;}
    };

var
 rappend=
  function(r1,r2)
   {if(r1)
     {if(r2)
       {return /* Rsome */[0,Pervasives["@"](r1[1],r2[1])];}
      else
       {return r1;}
      }
    else
     {return r2;}
    };

var
 try_many_gadt=
  function(f,param)
   {if(param)
     {var match=param[1];
      
      return rappend
              (f(/* tuple */[0,match[1],match[2]]),try_many_gadt(f,param[2]));
      }
    else
     {return 0;}
    };

var
 exhaust=
  function(ext,pss,n)
   {if(pss)
     {if(pss[1])
       {var q0=discr_pat(omega,pss);
        
        var constrs=filter_all(q0,pss);
        
        if(constrs)
         {var
           try_non_omega=
            function(param)
             {var p=param[1];
              
              if(is_absent_pat(p))
               {return 0;}
              else
               {var
                 r=
                  exhaust
                   (ext,
                    param[2],
                    List["length"](simple_match_args(p,omega))+n-1);
                
                if(r){return /* Rsome */[0,set_args(p,r[1])];}else{return r;}
                }
              };
          
          if(full_match(1,0,constrs)&&!should_extend(ext,constrs))
           {return try_many(try_non_omega,constrs);}
          else
           {var r=exhaust(ext,filter_extra(pss),n-1);
            
            if(r)
             {try
               {return /* Rsome */[0,
                        /* :: */[0,build_other(ext,constrs),r[1]]];
                }
              catch(exn)
               {if(exn=Empty)
                 {return Misc["fatal_error"]("Parmatch.exhaust");}
                else
                 {throw exn;}
                }
              }
            else
             {return 0;}
            }
          }
        else
         {var r$1=exhaust(ext,filter_extra(pss),n-1);
          
          if(r$1)
           {return /* Rsome */[0,/* :: */[0,q0,r$1[1]]];}
          else
           {return r$1;}
          }
        }
      else
       {return 0;}
      }
    else
     {return /* Rsome */[0,omegas(n)];}
    };

var
 combinations=
  function(f,lst,lst$prime)
   {var
     iter2=
      function(x,param)
       {if(param)
         {return /* :: */[0,f(x,param[1]),iter2(x,param[2])];}
        else
         {return 0;}
        };
    
    var
     iter=
      function(param)
       {if(param)
         {return Pervasives["@"](iter2(param[1],lst$prime),iter(param[2]));}
        else
         {return 0;}
        };
    
    return iter(lst);
    };

var
 exhaust_gadt=
  function(ext,pss,n)
   {if(pss)
     {if(pss[1])
       {var q0=discr_pat(omega,pss);
        
        var constrs=filter_all(q0,pss);
        
        if(constrs)
         {var
           try_non_omega=
            function(param)
             {var p=param[1];
              
              if(is_absent_pat(p))
               {return 0;}
              else
               {var
                 r=
                  exhaust_gadt
                   (ext,
                    param[2],
                    List["length"](simple_match_args(p,omega))+n-1);
                
                if(r)
                 {return /* Rsome */[0,
                          List["map"](function(row){return set_args(p,row);},r[1])];
                  }
                else
                 {return r;}
                }
              };
          
          var before=try_many_gadt(try_non_omega,constrs);
          
          if(full_match_gadt(constrs)&&!should_extend(ext,constrs))
           {return before;}
          else
           {var r=exhaust_gadt(ext,filter_extra(pss),n-1);
            
            if(r)
             {try
               {var missing_trailing=build_other_gadt(ext,constrs);
                
                var
                 dug=
                  combinations
                   (function(head,tail){return /* :: */[0,head,tail];},
                    missing_trailing,
                    r[1]);
                
                if(before)
                 {return /* Rsome */[0,Pervasives["@"](before[1],dug)];}
                else
                 {return /* Rsome */[0,dug];}
                }
              catch(exn)
               {if(exn=Empty)
                 {return Misc["fatal_error"]("Parmatch.exhaust");}
                else
                 {throw exn;}
                }
              }
            else
             {return before;}
            }
          }
        else
         {var r$1=exhaust_gadt(ext,filter_extra(pss),n-1);
          
          if(r$1)
           {return /* Rsome */[0,
                    List["map"]
                     (function(row){return /* :: */[0,q0,row];},r$1[1])];
            }
          else
           {return r$1;}
          }
        }
      else
       {return 0;}
      }
    else
     {return /* Rsome */[0,/* :: */[0,omegas(n),0]];}
    };

var
 exhaust_gadt$1=
  function(ext,pss,n)
   {var ret=exhaust_gadt(ext,pss,n);
    
    if(ret)
     {var lst=ret[1];
      
      if(lst=0)
       {return /* Rsome */[0,omegas(n)];}
      else
       {var
         singletons=
          List["map"]
           (function(param)
             {var exit;
              
              if(param)
               {if(param[2]){exit=165;}else{return param[1];}}
              else
               {exit=165;}
              
              switch(exit)
               {case 165:
                 throw [0,Assert_failure,[0,"typing/parmatch.ml",1165,19]];
                }
              },
            lst);
        
        return /* Rsome */[0,/* :: */[0,orify_many(singletons),0]];
        }
      }
    else
     {return 0;}
    };

var
 pressure_variants=
  function(tdefs,pss)
   {if(pss)
     {if(pss[1])
       {var q0=discr_pat(omega,pss);
        
        var constrs=filter_all(q0,pss);
        
        if(constrs)
         {var
           try_non_omega=
            function(param)
             {if(param)
               {var ok=pressure_variants(tdefs,param[1][2]);
                
                return try_non_omega(param[2])&&ok;
                }
              else
               {return 1;}
              };
          
          if(full_match(1,tdefs=0,constrs))
           {return try_non_omega(constrs);}
          else
           {if(tdefs=0)
             {return pressure_variants(0,filter_extra(pss));}
            else
             {var full=full_match(1,1,constrs);
              
              if(full)
               {var ok=try_non_omega(constrs);}
              else
               {var ok=try_non_omega(filter_all(q0,mark_partial(pss)));}
              
              var exit;
              
              if(constrs)
               {var p=constrs[1][1];
                
                var $js=p[1];
                if(typeof $js=="number")
                 {switch($js){}}
                else
                 {switch($js[0])
                   {case 5:
                     if(tdefs)
                      {var row=row_of_pat(p);
                       
                       if
                        (Btype["row_fixed"](row)||
                         pressure_variants(0,filter_extra(pss)))
                        {}
                       else
                        {close_variant(tdefs[1],row)}
                       }
                     else
                      {exit=158;}
                     
                    default:exit=158;}}
                }
              else
               {exit=158;}
              
              switch(exit){case 158:}
              
              return ok;
              }
            }
          }
        else
         {return pressure_variants(tdefs,filter_extra(pss));}
        }
      else
       {return 1;}
      }
    else
     {return 0;}
    };

var
 pretty_row=
  function(param)
   {pretty_line(param[2]);
    Pervasives["prerr_string"](" *");
    pretty_line(param[1]);
    Pervasives["prerr_string"](" *");
    return pretty_line(param[3]);
    };

var
 pretty_rows=
  function(rs)
   {Pervasives["prerr_endline"]("begin matrix");
    List["iter"]
     (function(r){pretty_row(r);return Pervasives["prerr_endline"]("");},rs);
    return Pervasives["prerr_endline"]("end matrix");
    };

var make_row=function(ps){return /* record */[0,0,0,ps];};

var make_rows=function(pss){return List["map"](make_row,pss);};

var
 unalias=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0]){case 1:return unalias(match[1]);default:exit=152;}}
    
    switch(exit){case 152:return p;}
    };

var
 is_var=
  function(p)
   {var match=unalias(p)[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=149;}}
    else
     {switch(match[0]){case 0:exit=149;default:return 0;}}
    
    switch(exit){case 149:return 1;}
    };

var
 is_var_column=
  function(rs)
   {return List["for_all"]
            (function(r)
              {var match=r[3];
               
               if(match)
                {return is_var(match[1]);}
               else
                {throw [0,Assert_failure,[0,"typing/parmatch.ml",1274,14]];}
               },
             rs);
    };

var
 or_args=
  function(p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return or_args(match[1]);
        case 8:return /* tuple */[0,match[1],match[2]];
        default:exit=147;}}
    
    switch(exit)
     {case 147:throw [0,Assert_failure,[0,"typing/parmatch.ml",1281,23]];}
    };

var
 remove=
  function(r)
   {var match=r[3];
    
    if(match)
     {return /* record */[0,r[1],r[2],match[2]];}
    else
     {throw [0,Assert_failure,[0,"typing/parmatch.ml",1286,12]];}
    };

var remove_column=function(rs){return List["map"](remove,rs);};

var
 push_no_or=
  function(r)
   {var match=r[3];
    
    if(match)
     {return /* record */[0,/* :: */[0,match[1],r[1]],r[2],match[2]];}
    else
     {throw [0,Assert_failure,[0,"typing/parmatch.ml",1293,8]];}
    };

var
 push_or=
  function(r)
   {var match=r[3];
    
    if(match)
     {return /* record */[0,r[1],/* :: */[0,match[1],r[2]],match[2]];}
    else
     {throw [0,Assert_failure,[0,"typing/parmatch.ml",1297,8]];}
    };

var push_or_column=function(rs){return List["map"](push_or,rs);};

var push_no_or_column=function(rs){return List["map"](push_no_or,rs);};

var
 discr_pat$1=
  function(q,rs)
   {return discr_pat(q,List["map"](function(r){return r[3];},rs));};

var
 filter_one$1=
  function(q,rs)
   {var
     filter_rec=
      function(rs$1)
       {if(rs$1)
         {var rem=rs$1[2];
          
          var r=rs$1[1];
          
          var match=r[3];
          
          if(match)
           {var p=match[1];
            
            var match$1=p[1];
            
            var exit;
            
            if(typeof match$1=="number")
             {switch(match$1){}}
            else
             {switch(match$1[0])
               {case 1:
                 return filter_rec
                         (/* :: */[0,
                           /* record */[0,r[1],r[2],/* :: */[0,match$1[1],match[2]]],
                           rem]);
                 
                case 8:
                 var ps=match[2];
                 
                 return filter_rec
                         (/* :: */[0,
                           /* record */[0,r[1],r[2],/* :: */[0,match$1[1],ps]],
                           /* :: */[0,
                            /* record */[0,r[1],r[2],/* :: */[0,match$1[2],ps]],
                            rem]]);
                 
                default:exit=138;}}
            
            switch(exit)
             {case 138:
               if(simple_match(q,p))
                {return /* :: */[0,
                         /* record */[0,
                          r[1],
                          r[2],
                          Pervasives["@"](simple_match_args(q,p),match[2])],
                         filter_rec(rem)];
                 }
               else
                {return filter_rec(rem);}
               
              }
            }
          else
           {throw [0,Assert_failure,[0,"typing/parmatch.ml",1314,14]];}
          }
        else
         {return 0;}
        };
    
    return filter_rec(rs);
    };

var make_vector=function(r){return r[1];};

var make_matrix=function(rs){return List["map"](make_vector,rs);};

var
 union_res=
  function(r1,r2)
   {var exit;
    
    if("unknown primitive:isint")
     {if(r1!=0){exit=131;}else{exit=134;}}
    else
     {if("unknown primitive:isint")
       {if(r2!=0){exit=134;}else{return r1;}}
      else
       {return /* Upartial */[0,Pervasives["@"](r1[1],r2[1])];}
      }
    
    switch(exit)
     {case 134:
       if("unknown primitive:isint")
        {if(r2!=0)
          {"unknown block:(exit 131)";}
         else
          {"unknown block:(exit 133)";}
         }
       else
        {"unknown block:(exit 133)";}
       
      case 133:return r2;
      case 131:return 1;
      }
    };

var
 extract_elements=
  function(qs)
   {var
     do_rec=
      function(seen,param)
       {if(param)
         {var rem=param[2];
          
          var q=param[1];
          
          return /* :: */[0,
                  /* record */[0,
                   Pervasives["@"](List["rev_append"](seen,rem),qs[1]),
                   0,
                   /* :: */[0,q,0]],
                  do_rec(/* :: */[0,q,seen],rem)];
          }
        else
         {return 0;}
        };
    
    return do_rec(0,qs[2]);
    };

var
 transpose=
  function(rs)
   {if(rs)
     {var i=List["map"](function(x){return /* :: */[0,x,0];},rs[1]);
      
      return List["fold_left"]
              (List["map2"](function(r,x){return /* :: */[0,x,r];}),i,rs[2]);
      }
    else
     {throw [0,Assert_failure,[0,"typing/parmatch.ml",1357,8]];}
    };

var
 extract_columns=
  function(pss,qs)
   {if(pss)
     {var rows=List["map"](extract_elements,pss);return transpose(rows);}
    else
     {return List["map"](function(param){return 0;},qs[2]);}
    };

var
 every_satisfiables=
  function(pss,qs)
   {var match=qs[3];
    
    if(match)
     {var q=match[1];
      
      var uq=unalias(q);
      
      var match$1=uq[1];
      
      var exit;
      
      if(typeof match$1=="number")
       {switch(match$1){case 0:exit=117;}}
      else
       {switch(match$1[0])
         {case 0:exit=117;
          case 5:
           if(is_absent(match$1[1],match$1[3])){return 1;}else{exit=118;}
          case 8:
           if(match$1[1][2][3]&&match$1[2][2][3])
            {return every_satisfiables(push_no_or_column(pss),push_no_or(qs));
             }
           else
            {return every_satisfiables(push_or_column(pss),push_or(qs));}
           
          default:exit=118;}}
      
      switch(exit)
       {case 118:
         var q0=discr_pat$1(q,pss);
         
         return every_satisfiables
                 (filter_one$1(q0,pss),
                  /* record */[0,
                   qs[1],
                   qs[2],
                   Pervasives["@"](simple_match_args(q0,q),match[2])]);
         
        case 117:
         if(is_var_column(pss))
          {return every_satisfiables(remove_column(pss),remove(qs));}
         else
          {return every_satisfiables(push_no_or_column(pss),push_no_or(qs));}
         
        }
      }
    else
     {var match$2=qs[2];
      
      if(match$2)
       {return List["fold_right2"]
                (function(pss$1,qs$1,r)
                  {var exit$1;
                   
                   if("unknown primitive:isint")
                    {if(r!=0){return 1;}else{exit$1=114;}}
                   else
                    {exit$1=114;}
                   
                   switch(exit$1)
                    {case 114:
                      var match$3=qs$1[3];
                      
                      var exit$2;
                      
                      if(match$3)
                       {if(match$3[2])
                         {exit$2=113;}
                        else
                         {var match$4=or_args(match$3[1]);
                          
                          var r_loc=every_both(pss$1,qs$1,match$4[1],match$4[2]);
                          
                          return union_res(r,r_loc);
                          }
                        }
                      else
                       {exit$2=113;}
                      
                      switch(exit$2)
                       {case 113:
                         throw [0,Assert_failure,[0,"typing/parmatch.ml",1394,23]];
                        }
                      
                     }
                   },
                 extract_columns(pss,qs),
                 extract_elements(qs),
                 0);
        }
      else
       {if(satisfiable(make_matrix(pss),make_vector(qs)))
         {return 0;}
        else
         {return 1;}
        }
      }
    };

var
 every_both=
  function(pss,qs,q1,q2)
   {var qs1=/* record */[0,qs[1],qs[2],/* :: */[0,q1,0]];
    
    var qs2=/* record */[0,qs[1],qs[2],/* :: */[0,q2,0]];
    
    var r1=every_satisfiables(pss,qs1);
    
    var r2=every_satisfiables(compat(q1,q2)?/* :: */[0,qs1,pss]:pss,qs2);
    
    if("unknown primitive:isint")
     {if(r1!=0)
       {if("unknown primitive:isint")
         {if(r2!=0){return 1;}else{return /* Upartial */[0,/* :: */[0,q1,0]];}
          }
        else
         {return /* Upartial */[0,/* :: */[0,q1,r2[1]]];}
        }
      else
       {var exit;
        
        if("unknown primitive:isint")
         {if(r2!=0){return /* Upartial */[0,/* :: */[0,q2,0]];}else{exit=120;}
          }
        else
         {exit=120;}
        
        switch(exit){case 120:return r2;}
        }
      }
    else
     {var u1=r1[1];
      
      if("unknown primitive:isint")
       {if(r2!=0)
         {return /* Upartial */[0,Pervasives["@"](u1,/* :: */[0,q2,0])];}
        else
         {return r1;}
        }
      else
       {return /* Upartial */[0,Pervasives["@"](u1,r2[1])];}
      }
    };

var
 le_pat=
  function(p,q)
   {var match=p[1];
    
    var match$1=q[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=106;}}
    else
     {switch(match[0])
       {case 0:exit=106;
        case 1:return le_pat(match[1],q);
        case 2:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:exit=108;
             case 2:return const_compare(match[1],match$1[1])=0;
             default:exit=107;}}
         
        case 3:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:exit=108;
             case 3:return le_pats(match[1],match$1[1]);
             default:exit=107;}}
         
        case 4:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:exit=108;
             case 4:
              return "unknown primitive:caml_equal"&&
                     le_pats(match[3],match$1[3]);
              
             default:exit=107;}}
         
        case 5:
         var match$2=match[2];
         
         var l1=match[1];
         
         var exit$1;
         
         if(match$2)
          {if(typeof match$1=="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 1:exit=108;
               case 5:
                var match$3=match$1[2];
                
                if(match$3)
                 {return "unknown primitive:caml_string_equal"&&
                         le_pat(match$2[1],match$3[1]);
                  }
                else
                 {exit$1=109;}
                
               default:exit=107;}}
           }
         else
          {if(typeof match$1=="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 1:exit=108;
               case 5:
                if(match$1[2])
                 {exit$1=109;}
                else
                 {return "unknown primitive:caml_string_equal";}
                
               default:exit=107;}}
           }
         
         switch(exit$1){case 109:return 0;}
         
        case 6:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:exit=108;
             case 6:
              var match$4=records_args(match[1],match$1[1]);
              
              return le_pats(match$4[1],match$4[2]);
              
             default:exit=107;}}
         
        case 7:
         var ps=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:exit=108;
             case 7:
              var qs=match$1[1];
              
              return (List["length"](ps)=List["length"](qs))&&le_pats(ps,qs);
              
             default:exit=107;}}
         
        case 8:exit=108;
        case 9:
         if(typeof match$1=="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 1:exit=108;
             case 9:return le_pat(match[1],match$1[1]);
             default:exit=107;}}
         
        }}
    
    switch(exit)
     {case 108:
       if(typeof match$1=="number")
        {switch(match$1){}}
       else
        {switch(match$1[0])
          {case 1:return le_pat(p,match$1[1]);
           default:"unknown block:(exit 107)";}}
       
      case 107:
       return !satisfiable(/* :: */[0,/* :: */[0,p,0],0],/* :: */[0,q,0]);
      case 106:return 1;
      }
    };

var
 le_pats=
  function(ps,qs)
   {var exit;
    
    if(ps)
     {if(qs){return le_pat(ps[1],qs[1])&&le_pats(ps[2],qs[2]);}else{exit=110;}
      }
    else
     {exit=110;}
    
    switch(exit){case 110:return 1;}
    };

var
 get_mins=
  function(le,ps)
   {var
     select_rec=
      function(r,param)
       {if(param)
         {var ps$1=param[2];
          
          var p=param[1];
          
          if(List["exists"](function(p0){return le(p0,p);},ps$1))
           {return select_rec(r,ps$1);}
          else
           {return select_rec(/* :: */[0,p,r],ps$1);}
          }
        else
         {return r;}
        };
    
    return select_rec(0,select_rec(0,ps));
    };

var
 lub=
  function(p,q)
   {var match=p[1];
    
    var match$1=q[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return lub(match[1],q);
        case 2:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=95;}}
         else
          {switch(match$1[0])
            {case 0:exit=95;
             case 1:exit=97;
             case 2:
              if(const_compare(match[1],match$1[1])=0)
               {return p;}
              else
               {exit=92;}
              
             case 8:exit=93;
             default:exit=92;}}
         
        case 3:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=95;}}
         else
          {switch(match$1[0])
            {case 0:exit=95;
             case 1:exit=97;
             case 3:
              var rs=lubs(match[1],match$1[1]);
              
              return make_pat(/* Tpat_tuple */[3,rs],p[4],p[5]);
              
             case 8:exit=93;
             default:exit=92;}}
         
        case 4:
         var c1=match[2];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=95;}}
         else
          {switch(match$1[0])
            {case 0:exit=95;
             case 1:exit=97;
             case 4:
              if("unknown primitive:caml_equal")
               {var rs$1=lubs(match[3],match$1[3]);
                
                return make_pat
                        (/* Tpat_construct */[4,match[1],c1,rs$1],p[4],p[5]);
                }
              else
               {exit=92;}
              
             case 8:exit=93;
             default:exit=92;}}
         
        case 5:
         var match$2=match[2];
         
         var l1=match[1];
         
         if(match$2)
          {if(typeof match$1=="number")
            {switch(match$1){case 0:exit=95;}}
           else
            {switch(match$1[0])
              {case 0:exit=95;
               case 1:exit=97;
               case 5:
                var match$3=match$1[2];
                
                if(match$3)
                 {if("unknown primitive:caml_string_equal")
                   {var r=lub(match$2[1],match$3[1]);
                    
                    return make_pat
                            (/* Tpat_variant */[5,l1,/* Some */[0,r],match[3]],
                             p[4],
                             p[5]);
                    }
                  else
                   {exit=92;}
                  }
                else
                 {exit=92;}
                
               case 8:exit=93;
               default:exit=92;}}
           }
         else
          {if(typeof match$1=="number")
            {switch(match$1){case 0:exit=95;}}
           else
            {switch(match$1[0])
              {case 0:exit=95;
               case 1:exit=97;
               case 5:
                if(match$1[2])
                 {exit=92;}
                else
                 {if("unknown primitive:caml_string_equal")
                   {return p;}
                  else
                   {exit=92;}
                  }
                
               case 8:exit=93;
               default:exit=92;}}
           }
         
        case 6:
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=95;}}
         else
          {switch(match$1[0])
            {case 0:exit=95;
             case 1:exit=97;
             case 6:
              var rs$2=record_lubs(match[1],match$1[1]);
              
              return make_pat(/* Tpat_record */[6,rs$2,match[2]],p[4],p[5]);
              
             case 8:exit=93;
             default:exit=92;}}
         
        case 7:
         var ps=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=95;}}
         else
          {switch(match$1[0])
            {case 0:exit=95;
             case 1:exit=97;
             case 7:
              var qs=match$1[1];
              
              if(List["length"](ps)=List["length"](qs))
               {var rs$3=lubs(ps,qs);
                
                return make_pat(/* Tpat_array */[7,rs$3],p[4],p[5]);
                }
              else
               {exit=92;}
              
             case 8:exit=93;
             default:exit=92;}}
         
        case 9:
         var p$1=match[1];
         
         if(typeof match$1=="number")
          {switch(match$1){case 0:exit=95;}}
         else
          {switch(match$1[0])
            {case 0:exit=95;
             case 1:exit=97;
             case 8:exit=93;
             case 9:
              var r$1=lub(p$1,match$1[1]);
              
              return make_pat(/* Tpat_lazy */[9,r$1],p$1[4],p$1[5]);
              
             default:exit=92;}}
         
        default:exit=97;}}
    
    switch(exit)
     {case 97:
       if(typeof match$1=="number")
        {switch(match$1){}}
       else
        {switch(match$1[0])
          {case 1:return lub(p,match$1[1]);default:"unknown block:(exit 96)";}}
       
      case 96:
       if(typeof match=="number")
        {switch(match){case 0:"unknown block:(exit 91)";}}
       else
        {switch(match[0])
          {case 0:"unknown block:(exit 91)";case 8:"unknown block:(exit 95)";}}
       
      case 95:
       var exit$1;
       
       if(typeof match$1=="number")
        {switch(match$1){case 0:exit$1=98;}}
       else
        {switch(match$1[0])
          {case 0:exit$1=98;default:return orlub(match[1],match[2],q);}}
       
       switch(exit$1){case 98:return p;}
       
      case 93:return orlub(match$1[1],match$1[2],p);
      case 92:throw Empty;
      case 91:return q;
      }
    };

var
 orlub=
  function(p1,p2,q)
   {try
     {var r1=lub(p1,q);
      
      try
       {var newrecord="unknown primitive:duprecord regular 6";
        
        newrecord[1]=/* Tpat_or */[8,r1,lub(p2,q),0],0;
        return newrecord;
        }
      catch(exn){if(exn=Empty){return r1;}else{throw exn;}}
      }
    catch(exn$1){if(exn$1=Empty){return lub(p2,q);}else{throw exn$1;}}
    };

var
 record_lubs=
  function(l1,l2)
   {var
     lub_rec=
      function(l1$1,l2$1)
       {if(l1$1)
         {if(l2$1)
           {var rem2=l2$1[2];
            
            var match=l2$1[1];
            
            var p2=match[3];
            
            var lbl2=match[2];
            
            var rem1=l1$1[2];
            
            var match$1=l1$1[1];
            
            var p1=match$1[3];
            
            var lbl1=match$1[2];
            
            var lid1=match$1[1];
            
            if(lbl1[5]<lbl2[5])
             {return /* :: */[0,
                      /* tuple */[0,lid1,lbl1,p1],
                      lub_rec(rem1,l2$1)];
              }
            else
             {if(lbl2[5]<lbl1[5])
               {return /* :: */[0,
                        /* tuple */[0,match[1],lbl2,p2],
                        lub_rec(l1$1,rem2)];
                }
              else
               {return /* :: */[0,
                        /* tuple */[0,lid1,lbl1,lub(p1,p2)],
                        lub_rec(rem1,rem2)];
                }
              }
            }
          else
           {return l1$1;}
          }
        else
         {return l2$1;}
        };
    
    return lub_rec(l1,l2);
    };

var
 lubs=
  function(ps,qs)
   {var exit;
    
    if(ps)
     {if(qs)
       {return /* :: */[0,lub(ps[1],qs[1]),lubs(ps[2],qs[2])];}
      else
       {exit=103;}
      }
    else
     {exit=103;}
    
    switch(exit){case 103:return 0;}
    };

var
 pressure_variants$1=
  function(tdefs,patl)
   {var
     pss=
      List["map"](function(p){return /* :: */[0,p,/* :: */[0,omega,0]];},patl);
    
    return 0;
    };

var
 initial_matrix=
  function(param)
   {if(param)
     {var match=param[1];
      
      if(match[2])
       {return initial_matrix(param[2]);}
      else
       {return /* :: */[0,/* :: */[0,match[1],0],initial_matrix(param[2])];}
      }
    else
     {return 0;}
    };

var NoGuard="unknown primitive:caml_set_oo_id";

var
 initial_all=
  function(no_guard,param)
   {if(param)
     {var match=param[1];
      
      var pat=match[1];
      
      return /* :: */[0,
              /* tuple */[0,/* :: */[0,pat,0],pat[2]],
              initial_all(no_guard&&(match[2]=0),param[2])];
      }
    else
     {if(no_guard){throw NoGuard;}else{return 0;}}
    };

var
 do_filter_var=
  function(param)
   {var exit;
    
    if(param)
     {var match=param[1];
      
      var match$1=match[1];
      
      if(match$1)
       {return /* :: */[0,
                /* tuple */[0,match$1[2],match[2]],
                do_filter_var(param[2])];
        }
      else
       {exit=82;}
      }
    else
     {exit=82;}
    
    switch(exit){case 82:return 0;}
    };

var
 do_filter_one=
  function(q,pss)
   {var
     filter_rec=
      function(param)
       {var exit;
        
        if(param)
         {var match=param[1];
          
          var match$1=match[1];
          
          if(match$1)
           {var p=match$1[1];
            
            var match$2=p[1];
            
            var exit$1;
            
            if(typeof match$2=="number")
             {switch(match$2){}}
            else
             {switch(match$2[0])
               {case 1:
                 return filter_rec
                         (/* :: */[0,
                           /* tuple */[0,/* :: */[0,match$2[1],match$1[2]],match[2]],
                           param[2]]);
                 
                case 8:
                 var loc=match[2];
                 
                 var ps=match$1[2];
                 
                 return filter_rec
                         (/* :: */[0,
                           /* tuple */[0,/* :: */[0,match$2[1],ps],loc],
                           /* :: */[0,
                            /* tuple */[0,/* :: */[0,match$2[2],ps],loc],
                            param[2]]]);
                 
                default:exit$1=80;}}
            
            switch(exit$1)
             {case 80:
               var pss$1=param[2];
               
               if(simple_match(q,p))
                {return /* :: */[0,
                         /* tuple */[0,
                          Pervasives["@"](simple_match_args(q,p),match$1[2]),
                          match[2]],
                         filter_rec(pss$1)];
                 }
               else
                {return filter_rec(pss$1);}
               
              }
            }
          else
           {exit=79;}
          }
        else
         {exit=79;}
        
        switch(exit){case 79:return 0;}
        };
    
    return filter_rec(pss);
    };

var
 do_match=
  function(pss,qs)
   {if(qs)
     {var q=qs[1];
      
      var match=q[1];
      
      var qs$1=qs[2];
      
      if(typeof match=="number")
       {switch(match){case 0:return do_match(do_filter_var(pss),qs$1);}}
      else
       {switch(match[0])
         {case 8:
           var r=do_match(pss,/* :: */[0,match[1],qs$1]);
           
           if(r)
            {return r;}
           else
            {return do_match(pss,/* :: */[0,match[2],qs$1]);}
           
          default:
           var q0=normalize_pat(q);
           
           return do_match
                   (do_filter_one(q0,pss),
                    Pervasives["@"](simple_match_args(q0,q),qs$1));
           }}
      }
    else
     {var exit;
      
      if(pss)
       {var match$1=pss[1];
        
        if(match$1[1]){exit=75;}else{return /* Some */[0,match$1[2]];}
        }
      else
       {exit=75;}
      
      switch(exit){case 75:return 0;}
      }
    };

var
 check_partial_all=
  function(v,casel)
   {try
     {var pss=initial_all(1,casel);return do_match(pss,/* :: */[0,v,0]);}
    catch(exn){if(exn=NoGuard){return 0;}else{throw exn;}}
    };

var
 get_first=
  function(f,param)
   {if(param)
     {var x=f(param[1]);if(x){return x;}else{return get_first(f,param[2]);}}
    else
     {return 0;}
    };

var mkpat=function(desc){return Ast_helper["Pat"][1](0,0,desc);};

var
 select=
  function(param)
   {var exit;
    
    if(param)
     {var xs=param[1];
      
      if(param[2])
       {if(xs)
         {var ys=param[2];
          
          var x=xs[1];
          
          return Pervasives["@"]
                  (List["map"]
                    (function(lst){return /* :: */[0,x,lst];},select(ys)),
                   select(/* :: */[0,xs[2],ys]));
          }
        else
         {exit=68;}
        }
      else
       {return List["map"](function(y){return /* :: */[0,y,0];},xs);}
      }
    else
     {exit=68;}
    
    switch(exit){case 68:return 0;}
    };

var name_counter=[0,0];

var
 fresh=
  function(name)
   {var current=name_counter[1];
    
    name_counter[1]=name_counter[1]+1,0;
    return Pervasives["^"]
            ("#$",Pervasives["^"](name,Pervasives["string_of_int"](current)));
    };

var
 conv=
  function(typed)
   {var constrs=Hashtbl["create"](0,0);
    
    var labels=Hashtbl["create"](0,0);
    
    var
     loop=
      function(pat)
       {var match=pat[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:return loop(match[1]);
            case 3:
             var results=select(List["map"](loop,match[1]));
             
             return List["map"]
                     (function(lst){return mkpat(/* Ppat_tuple */[4,lst]);},
                      results);
             
            case 4:
             var lst=match[3];
             
             var cstr=match[2];
             
             var id=fresh(cstr[1]);
             
             var lid=/* record */[0,/* Lident */[0,id],match[1][2]];
             
             Hashtbl["add"](constrs,id,cstr);
             var results$1=select(List["map"](loop,lst));
             
             if(lst)
              {return List["map"]
                       (function(lst$1)
                         {if(lst$1)
                           {if(lst$1[2])
                             {var arg=/* Some */[0,mkpat(/* Ppat_tuple */[4,lst$1])];}
                            else
                             {var arg=/* Some */[0,lst$1[1]];}
                            }
                          else
                           {throw [0,Assert_failure,[0,"typing/parmatch.ml",1729,28]];}
                          
                          return mkpat(/* Ppat_construct */[5,lid,arg]);
                          },
                        results$1);
               }
             else
              {return /* :: */[0,mkpat(/* Ppat_construct */[5,lid,0]),0];}
             
            case 5:
             var p_opt=match[2];
             
             var label=match[1];
             
             if(p_opt)
              {var results$2=loop(p_opt[1]);
               
               return List["map"]
                       (function(p)
                         {return mkpat(/* Ppat_variant */[6,label,/* Some */[0,p]]);},
                        results$2);
               }
             else
              {return /* :: */[0,mkpat(/* Ppat_variant */[6,label,0]),0];}
             
            case 6:
             var subpatterns=match[1];
             
             var
              pats=
               select
                (List["map"]
                  (function(param){return loop(param[3]);},subpatterns));
             
             var
              label_idents=
               List["map"]
                (function(param)
                  {var lbl=param[2];
                   
                   var id$1=fresh(lbl[1]);
                   
                   Hashtbl["add"](labels,id$1,lbl);
                   return /* Lident */[0,id$1];
                   },
                 subpatterns);
             
             return List["map"]
                     (function(lst$1)
                       {var
                         lst$2=
                          List["map2"]
                           (function(lid$1,pat$1)
                             {return /* tuple */[0,Typedtree["mknoloc"](lid$1),pat$1];},
                            label_idents,
                            lst$1);
                        
                        return mkpat(/* Ppat_record */[7,lst$2,1]);
                        },
                      pats);
             
            case 7:
             var results$3=select(List["map"](loop,match[1]));
             
             return List["map"]
                     (function(lst$1){return mkpat(/* Ppat_array */[8,lst$1]);},
                      results$3);
             
            case 8:return Pervasives["@"](loop(match[1]),loop(match[2]));
            case 9:
             var results$4=loop(match[1]);
             
             return List["map"]
                     (function(p){return mkpat(/* Ppat_lazy */[12,p]);},
                      results$4);
             
            default:exit=61;}}
        
        switch(exit){case 61:return /* :: */[0,mkpat(0),0];}
        };
    
    var ps=loop(typed);
    
    return /* tuple */[0,ps,constrs,labels];
    };

var Conv=[0,mkpat,select,name_counter,fresh,conv];

var
 do_check_partial=
  function(pred,exhaust$1,loc,casel,pss)
   {if(pss)
     {var match=exhaust$1(0,pss,List["length"](pss[1]));
      
      var exit;
      
      if(match)
       {var match$1=match[1];
        
        if(match$1)
         {if(match$1[2])
           {exit=44;}
          else
           {var u=match$1[1];
            
            if(pred)
             {var match$2=Conv[5](u);
              
              var v=get_first(pred[1](match$2[2],match$2[3]),match$2[1]);
              }
            else
             {var v=/* Some */[0,u];}
            
            if(v)
             {var v$1=v[1];
              
              var match$3=v$1[1];
              
              var exit$1;
              
              if(typeof match$3=="number")
               {switch(match$3){}}
              else
               {switch(match$3[0])
                 {case 4:
                   switch(match$3[2][1])
                    {case "*extension*":
                      var
                       errmsg=
                        "_\nMatching over values of extensible variant types must include\na wild card pattern in order to be exhaustive.";
                      
                     default:exit$1=40;}
                   
                  default:exit$1=40;}}
              
              switch(exit$1)
               {case 40:
                 try
                  {var buf=Buffer["create"](16);
                   
                   var fmt=Format["formatter_of_buffer"](buf);
                   
                   top_pretty(fmt,v$1);
                   var match$4=check_partial_all(v$1,casel);
                   
                   if(match$4)
                    {Buffer["add_string"]
                      (buf,
                       "\n(However, some guarded clause may match this value.)")}
                   else
                    {}
                   
                   var errmsg=Buffer["contents"](buf);
                   }
                 catch(exn){var errmsg="";}
                 
                }
              
              Location["prerr_warning"](loc,/* Partial_match */[3,errmsg]);
              return 0;
              }
            else
             {return 1;}
            }
          }
        else
         {exit=44;}
        }
      else
       {return 1;}
      
      switch(exit)
       {case 44:return Misc["fatal_error"]("Parmatch.check_partial");}
      }
    else
     {if(casel){Location["prerr_warning"](loc,12)}else{}return 0;}
    };

var
 do_check_partial_normal=
  function(loc,casel,pss){return do_check_partial(0,exhaust,loc,casel,pss);};

var
 do_check_partial_gadt=
  function(pred,loc,casel,pss)
   {return do_check_partial(/* Some */[0,pred],exhaust_gadt$1,loc,casel,pss);};

var
 add_path=
  function(path,paths)
   {if(paths)
     {var x=paths[1];
      
      if(Path["same"](path,x))
       {return paths;}
      else
       {return /* :: */[0,x,add_path(path,paths[2])];}
      }
    else
     {return /* :: */[0,path,0];}
    };

var
 extendable_path=
  function(path)
   {return !(Path["same"](path,Predef["path_bool"])||
            Path["same"](path,Predef["path_list"])||
            Path["same"](path,Predef["path_unit"])||
            Path["same"](path,Predef["path_option"]));
    };

var
 collect_paths_from_pat=
  function(r,p)
   {var match=p[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:var p$1=match[1];exit=30;
        case 3:exit=32;
        case 4:
         var exit$1;
         
         switch(match[2][6])
          {case 0:exit$1=31;case 1:exit$1=31;case 2:var ps=match[3];exit=29;}
         
         switch(exit$1)
          {case 31:
            var path=get_type_path(p[4],p[5]);
            
            return List["fold_left"]
                    (collect_paths_from_pat,
                     extendable_path(path)?add_path(path,r):r,
                     match[3]);
            
           }
         
        case 5:
         var match$1=match[2];
         
         if(match$1){var p$1=match$1[1];exit=30;}else{exit=28;}
         
        case 6:
         return List["fold_left"]
                 (function(r$1,param)
                   {return collect_paths_from_pat(r$1,param[3]);},
                  r,
                  match[1]);
         
        case 7:exit=32;
        case 8:
         return collect_paths_from_pat
                 (collect_paths_from_pat(r,match[1]),match[2]);
         
        case 9:return collect_paths_from_pat(r,match[1]);
        default:exit=28;}}
    
    switch(exit)
     {case 32:"unknown block:(exit 29 (field 0 match/2341))";
      case 28:return r;
      case 29:return List["fold_left"](collect_paths_from_pat,r,ps);
      case 30:return collect_paths_from_pat(r,p$1);
      }
    };

var
 do_check_fragile_param=
  function(exhaust$1,loc,casel,pss)
   {var
     exts=
      List["fold_left"]
       (function(r,c){return collect_paths_from_pat(r,c[1]);},0,casel);
    
    if(exts)
     {if(pss)
       {var ps=pss[1];
        
        return List["iter"]
                (function(ext)
                  {var
                    match=
                     exhaust$1(/* Some */[0,ext],pss,List["length"](ps));
                   
                   if(match)
                    {return 0;}
                   else
                    {return Location["prerr_warning"]
                             (loc,/* Fragile_match */[1,Path["name"](0,ext)]);
                     }
                   },
                 exts);
        }
      else
       {return 0;}
      }
    else
     {return 0;}
    };

var do_check_fragile_normal=do_check_fragile_param(exhaust);

var do_check_fragile_gadt=do_check_fragile_param(exhaust_gadt$1);

var
 check_unused=
  function(tdefs,casel)
   {if(Warnings["is_active"](5))
     {var
       do_rec=
        function(pref,param)
         {if(param)
           {var rem=param[2];
            
            var match=param[1];
            
            var q=match[1];
            
            var qs=/* :: */[0,q,0];
            
            try
             {var pss=get_mins(le_pats,List["filter"](compats(qs),pref));
              
              var r=every_satisfiables(make_rows(pss),make_row(qs));
              
              if("unknown primitive:isint")
               {if(r!=0){Location["prerr_warning"](q[2],5)}else{}}
              else
               {List["iter"]
                 (function(p){return Location["prerr_warning"](p[2],6);},r[1])}
              }
            catch(exn)
             {var exit;
              
              if(exn=Empty)
               {exit=15;}
              else
               {if(exn=Not_found)
                 {exit=15;}
                else
                 {if(exn=NoGuard){exit=15;}else{throw exn;}}
                }
              
              switch(exit)
               {case 15:
                 throw [0,Assert_failure,[0,"typing/parmatch.ml",1947,48]];
                }
              }
            
            if(match[2]!=0)
             {return do_rec(pref,rem);}
            else
             {return do_rec(/* :: */[0,/* :: */[0,q,0],pref],rem);}
            }
          else
           {return 0;}
          };
      
      return do_rec(0,casel);
      }
    else
     {return 0;}
    };

var irrefutable=function(pat){return le_pat(pat,omega);};

var
 inactive=
  function(pat)
   {var exit;
    
    if(typeof pat=="number")
     {switch(pat){}}
    else
     {switch(pat[0])
       {case 1:var p=pat[1];exit=11;
        case 3:exit=12;
        case 4:var ps=pat[3];exit=10;
        case 5:
         var match=pat[2];if(match){var p=match[1];exit=11;}else{exit=9;}
        case 6:
         return List["exists"]
                 (function(param){return inactive(param[3][1]);},pat[1]);
         
        case 7:exit=12;
        case 8:return inactive(pat[1][1])&&inactive(pat[2][1]);
        case 9:return 0;
        default:exit=9;}}
    
    switch(exit)
     {case 12:"unknown block:(exit 10 (field 0 pat/2275))";
      case 9:return 1;
      case 10:
       return List["for_all"](function(p$1){return inactive(p$1[1]);},ps);
      case 11:return inactive(p[1]);
      }
    };

var fluid=function(pat){return irrefutable(pat)&&inactive(pat[1]);};

var
 check_partial_param=
  function(do_check_partial$1,do_check_fragile,loc,casel)
   {if(Warnings["is_active"]([3,""]))
     {var pss=initial_matrix(casel);
      
      var pss$1=get_mins(le_pats,pss);
      
      var total=do_check_partial$1(loc,casel,pss$1);
      
      if((total=1)&&Warnings["is_active"]([1,""]))
       {do_check_fragile(loc,casel,pss$1)}
      else
       {}
      
      return total;
      }
    else
     {return 0;}
    };

var
 check_partial=
  check_partial_param(do_check_partial_normal,do_check_fragile_normal);

var
 check_partial_gadt=
  function(pred,loc,casel)
   {var first_check=check_partial(loc,casel);
    
    if(first_check!=0)
     {return check_partial_param
              (do_check_partial_gadt(pred),do_check_fragile_gadt,loc,casel);
      }
    else
     {return 0;}
    };

module["exports"]=
{"pretty_const":pretty_const,
 "top_pretty":top_pretty,
 "pretty_pat":pretty_pat,
 "pretty_line":pretty_line,
 "pretty_matrix":pretty_matrix,
 "omega":omega,
 "omegas":omegas,
 "omega_list":omega_list,
 "normalize_pat":normalize_pat,
 "all_record_args":all_record_args,
 "const_compare":const_compare,
 "le_pat":le_pat,
 "le_pats":le_pats,
 "compat":compat,
 "compats":compats,
 "Empty":Empty,
 "lub":lub,
 "lubs":lubs,
 "get_mins":get_mins,
 "set_args":set_args,
 "set_args_erase_mutable":set_args_erase_mutable,
 "pat_of_constr":pat_of_constr,
 "complete_constrs":complete_constrs,
 "pressure_variants":pressure_variants$1,
 "check_partial_gadt":check_partial_gadt,
 "check_unused":check_unused,
 "irrefutable":irrefutable,
 "fluid":fluid};

