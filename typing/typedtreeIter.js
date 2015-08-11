// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Misc=require("Misc");


var
 MakeIterator=
  function(Iter)
   {var may_iter=function(f,v){if(v){return f(v[1]);}else{return 0;}};
    
    var
     iter_structure=
      function(str)
       {Iter[1](str);
        List["iter"](iter_structure_item,str[1]);
        return Iter[25](str);
        };
    
    var
     iter_binding=
      function(vb)
       {Iter[50](vb);
        iter_pattern(vb[1]);
        iter_expression(vb[2]);
        return Iter[51](vb);
        };
    
    var
     iter_bindings=
      function(rec_flag,list)
       {Iter[49](rec_flag);
        List["iter"](iter_binding,list);
        return Iter[52](rec_flag);
        };
    
    var
     iter_case=
      function(param)
       {iter_pattern(param[1]);
        may_iter(iter_expression,param[2]);
        return iter_expression(param[3]);
        };
    
    var iter_cases=function(cases){return List["iter"](iter_case,cases);};
    
    var
     iter_structure_item=
      function(item)
       {Iter[24](item);
        var match=item[1];
        
        var exit;
        
        switch(match)
         {case 0:iter_expression(match[1]);
          case 1:iter_bindings(match[1],match[2]);
          case 2:iter_value_description(match[1]);
          case 3:iter_type_declarations(match[1]);
          case 4:iter_type_extension(match[1]);
          case 5:iter_extension_constructor(match[1]);
          case 6:iter_module_binding(match[1]);
          case 7:List["iter"](iter_module_binding,match[1]);
          case 8:iter_module_type_declaration(match[1]);
          case 9:exit=59;
          case 10:
           List["iter"]
            (function(param){return iter_class_declaration(param[1]);},
             match[1]);
          case 11:
           List["iter"]
            (function(param){return iter_class_type_declaration(param[3]);},
             match[1]);
          case 12:iter_module_expr(match[1][1]);
          case 13:exit=59;
          }
        
        switch(exit){case 59:}
        
        return Iter[48](item);
        };
    
    var iter_module_binding=function(x){return iter_module_expr(x[3]);};
    
    var
     iter_value_description=
      function(v){Iter[2](v);iter_core_type(v[3]);return Iter[26](v);};
    
    var
     iter_constructor_declaration=
      function(cd)
       {List["iter"](iter_core_type,cd[3]);
        return option(iter_core_type,cd[4]);
        };
    
    var iter_type_parameter=function(param){return iter_core_type(param[1]);};
    
    var
     iter_type_declaration=
      function(decl)
       {Iter[54](decl);
        List["iter"](iter_type_parameter,decl[3]);
        List["iter"]
         (function(param)
           {iter_core_type(param[1]);return iter_core_type(param[2]);},
          decl[5]);
        var match=decl[6];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){case 0:exit=60;case 1:exit=60;}}
        else
         {switch(match[0])
           {case 0:List["iter"](iter_constructor_declaration,match[1]);
            case 1:
             List["iter"]
              (function(ld){return iter_core_type(ld[4]);},match[1])
            }}
        
        switch(exit){case 60:}
        
        option(iter_core_type,decl[8]);
        return Iter[55](decl);
        };
    
    var
     iter_type_declarations=
      function(decls)
       {var
         is_nonrec=
          List["exists"]
           (function(td)
             {return List["exists"]
                      (function(param)
                        {return "unknown primitive:caml_string_equal";},
                       td[10]);
              },
            decls);
        
        if(is_nonrec){var rec_flag=0;}else{var rec_flag=1;}
        
        Iter[53](rec_flag);
        List["iter"](iter_type_declaration,decls);
        return Iter[56](rec_flag);
        };
    
    var
     iter_extension_constructor=
      function(ext)
       {Iter[4](ext);
        var match=ext[4];
        
        switch(match)
         {case 0:
           List["iter"](iter_core_type,match[1]),
           option(iter_core_type,match[2]);
          case 1:
          }
        
        return Iter[28](ext);
        };
    
    var
     iter_type_extension=
      function(tyext)
       {Iter[3](tyext);
        List["iter"](iter_type_parameter,tyext[3]);
        List["iter"](iter_extension_constructor,tyext[4]);
        return Iter[27](tyext);
        };
    
    var
     iter_pattern=
      function(pat)
       {Iter[5](pat);
        List["iter"]
         (function(param)
           {var cstr=param[1];
            
            var exit;
            
            if(typeof cstr=="number")
             {switch(cstr){case 0:exit=66;}}
            else
             {switch(cstr[0])
               {case 0:return iter_core_type(cstr[1]);case 1:exit=66;}}
            
            switch(exit){case 66:return 0;}
            },
          pat[3]);
        var match=pat[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:exit=64;
            case 3:exit=65;
            case 4:List["iter"](iter_pattern,match[3]);
            case 5:var pato=match[2];if(pato){iter_pattern(pato[1])}else{}
            case 6:
             List["iter"]
              (function(param){return iter_pattern(param[3]);},match[1]);
            case 7:exit=65;
            case 8:iter_pattern(match[1]),iter_pattern(match[2]);
            case 9:exit=64;
            default:exit=63;}}
        
        switch(exit)
         {case 63:
          case 64:iter_pattern(match[1]);
          case 65:List["iter"](iter_pattern,match[1])
          }
        
        return Iter[29](pat);
        };
    
    var option=function(f,x){if(x){return f(x[1]);}else{return 0;}};
    
    var
     iter_expression=
      function(exp)
       {Iter[6](exp);
        List["iter"]
         (function(param)
           {var cstr=param[1];
            
            var exit;
            
            switch(cstr)
             {case 0:return iter_core_type(cstr[1]);
              case 1:
               option(iter_core_type,cstr[1]);return iter_core_type(cstr[2]);
              case 2:exit=71;
              case 3:return option(iter_core_type,cstr[1]);
              case 4:exit=71;
              }
            
            switch(exit){case 71:return 0;}
            },
          exp[3]);
        var match=exp[1];
        
        var exit;
        
        switch(match)
         {case 2:iter_bindings(match[1],match[2]),iter_expression(match[3]);
          case 3:iter_cases(match[2]);
          case 4:
           iter_expression(match[1]),
           List["iter"]
            (function(param)
              {var expo=param[2];
               
               if(expo){return iter_expression(expo[1]);}else{return 0;}
               },
             match[2]);
          case 5:
           iter_expression(match[1]),
           iter_cases(match[2]),
           iter_cases(match[3]);
          case 6:iter_expression(match[1]),iter_cases(match[2]);
          case 7:exit=68;
          case 8:List["iter"](iter_expression,match[3]);
          case 9:var expo=match[2];if(expo){iter_expression(expo[1])}else{}
          case 10:
           var expo$1=match[2];
           
           List["iter"]
            (function(param){return iter_expression(param[3]);},match[1]);
           if(expo$1){iter_expression(expo$1[1])}else{}
           
          case 11:exit=69;
          case 12:iter_expression(match[1]),iter_expression(match[4]);
          case 13:exit=68;
          case 14:
           var expo$2=match[3];
           
           iter_expression(match[1]);
           iter_expression(match[2]);
           if(expo$2){iter_expression(expo$2[1])}else{}
           
          case 15:exit=70;
          case 16:exit=70;
          case 17:
           iter_expression(match[3]),
           iter_expression(match[4]),
           iter_expression(match[6]);
          case 18:
           var expo$3=match[3];
           
           iter_expression(match[1]);
           if(expo$3){iter_expression(expo$3[1])}else{}
           
          case 21:iter_expression(match[4]);
          case 22:
           List["iter"]
            (function(param){return iter_expression(param[3]);},match[2]);
          case 23:iter_module_expr(match[3]),iter_expression(match[4]);
          case 24:exit=69;
          case 25:exit=69;
          case 26:iter_class_structure(match[1]);
          case 27:iter_module_expr(match[1]);
          default:}
        
        switch(exit)
         {case 68:List["iter"](iter_expression,match[1]);
          case 69:iter_expression(match[1]);
          case 70:iter_expression(match[1]),iter_expression(match[2])
          }
        
        return Iter[30](exp);
        };
    
    var
     iter_package_type=
      function(pack)
       {Iter[7](pack);
        List["iter"]
         (function(param){return iter_core_type(param[2]);},pack[2]);
        return Iter[31](pack);
        };
    
    var
     iter_signature=
      function(sg)
       {Iter[8](sg);
        List["iter"](iter_signature_item,sg[1]);
        return Iter[32](sg);
        };
    
    var
     iter_signature_item=
      function(item)
       {Iter[9](item);
        var match=item[1];
        
        var exit;
        
        switch(match)
         {case 0:iter_value_description(match[1]);
          case 1:iter_type_declarations(match[1]);
          case 2:iter_type_extension(match[1]);
          case 3:iter_extension_constructor(match[1]);
          case 4:iter_module_type(match[1][3]);
          case 5:
           List["iter"]
            (function(md){return iter_module_type(md[3]);},match[1]);
          case 6:iter_module_type_declaration(match[1]);
          case 7:exit=72;
          case 8:iter_module_type(match[1][1]);
          case 9:List["iter"](iter_class_description,match[1]);
          case 10:List["iter"](iter_class_type_declaration,match[1]);
          case 11:exit=72;
          }
        
        switch(exit){case 72:}
        
        return Iter[33](item);
        };
    
    var
     iter_module_type_declaration=
      function(mtd)
       {Iter[10](mtd);
        var match=mtd[3];
        
        if(match){iter_module_type(match[1])}else{}
        
        return Iter[34](mtd);
        };
    
    var
     iter_class_declaration=
      function(cd)
       {Iter[16](cd);
        List["iter"](iter_type_parameter,cd[2]);
        iter_class_expr(cd[8]);
        return Iter[40](cd);
        };
    
    var
     iter_class_description=
      function(cd)
       {Iter[17](cd);
        List["iter"](iter_type_parameter,cd[2]);
        iter_class_type(cd[8]);
        return Iter[41](cd);
        };
    
    var
     iter_class_type_declaration=
      function(cd)
       {Iter[18](cd);
        List["iter"](iter_type_parameter,cd[2]);
        iter_class_type(cd[8]);
        return Iter[42](cd);
        };
    
    var
     iter_module_type=
      function(mty)
       {Iter[11](mty);
        var match=mty[1];
        
        var exit;
        
        switch(match)
         {case 0:exit=73;
          case 1:iter_signature(match[1]);
          case 2:
           Misc["may"](iter_module_type,match[3]),iter_module_type(match[4]);
          case 3:
           iter_module_type(match[1]),
           List["iter"]
            (function(param){return iter_with_constraint(param[3]);},match[2]);
          case 4:iter_module_expr(match[1]);
          case 5:exit=73;
          }
        
        switch(exit){case 73:}
        
        return Iter[35](mty);
        };
    
    var
     iter_with_constraint=
      function(cstr)
       {Iter[13](cstr);
        var exit;
        
        switch(cstr)
         {case 0:exit=74;case 1:exit=75;case 2:exit=74;case 3:exit=75;}
        
        switch(exit){case 74:iter_type_declaration(cstr[1]);case 75:}
        
        return Iter[37](cstr);
        };
    
    var
     iter_module_expr=
      function(mexpr)
       {Iter[12](mexpr);
        var match=mexpr[1];
        
        switch(match)
         {case 0:
          case 1:iter_structure(match[1]);
          case 2:
           Misc["may"](iter_module_type,match[3]),iter_module_expr(match[4]);
          case 3:iter_module_expr(match[1]),iter_module_expr(match[2]);
          case 4:
           var match$1=match[3];
           
           var mexpr$1=match[1];
           
           if(match$1)
            {iter_module_expr(mexpr$1),iter_module_type(match$1[1])}
           else
            {iter_module_expr(mexpr$1)}
           
          case 5:iter_expression(match[1])
          }
        
        return Iter[36](mexpr);
        };
    
    var
     iter_class_expr=
      function(cexpr)
       {Iter[14](cexpr);
        var match=cexpr[1];
        
        switch(match)
         {case 0:List["iter"](iter_core_type,match[3]);
          case 1:iter_class_structure(match[1]);
          case 2:
           iter_pattern(match[2]),
           List["iter"]
            (function(param){return iter_expression(param[3]);},match[3]),
           iter_class_expr(match[4]);
          case 3:
           iter_class_expr(match[1]),
           List["iter"]
            (function(param)
              {var expo=param[2];
               
               if(expo){return iter_expression(expo[1]);}else{return 0;}
               },
             match[2]);
          case 4:
           iter_bindings(match[1],match[2]),
           List["iter"]
            (function(param){return iter_expression(param[3]);},match[3]),
           iter_class_expr(match[4]);
          case 5:
           var match$1=match[2];
           
           var cl=match[1];
           
           if(match$1)
            {iter_class_expr(cl),iter_class_type(match$1[1])}
           else
            {iter_class_expr(cl)}
           
          }
        
        return Iter[38](cexpr);
        };
    
    var
     iter_class_type=
      function(ct)
       {Iter[19](ct);
        var match=ct[1];
        
        switch(match)
         {case 0:List["iter"](iter_core_type,match[3]);
          case 1:iter_class_signature(match[1]);
          case 2:iter_core_type(match[2]),iter_class_type(match[3])
          }
        
        return Iter[43](ct);
        };
    
    var
     iter_class_signature=
      function(cs)
       {Iter[15](cs);
        iter_core_type(cs[1]);
        List["iter"](iter_class_type_field,cs[2]);
        return Iter[39](cs);
        };
    
    var
     iter_class_type_field=
      function(ctf)
       {Iter[20](ctf);
        var match=ctf[1];
        
        var exit;
        
        switch(match)
         {case 0:iter_class_type(match[1]);
          case 1:exit=76;
          case 2:exit=76;
          case 3:
           var match$1=match[1];
           
           iter_core_type(match$1[1]),iter_core_type(match$1[2]);
          case 4:
          }
        
        switch(exit){case 76:iter_core_type(match[1][4])}
        
        return Iter[44](ctf);
        };
    
    var
     iter_core_type=
      function(ct)
       {Iter[21](ct);
        var match=ct[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){case 0:exit=77;}}
        else
         {switch(match[0])
           {case 0:exit=77;
            case 1:iter_core_type(match[2]),iter_core_type(match[3]);
            case 2:List["iter"](iter_core_type,match[1]);
            case 3:exit=78;
            case 4:
             List["iter"]
              (function(param){return iter_core_type(param[3]);},match[1]);
            case 5:exit=78;
            case 6:iter_core_type(match[1]);
            case 7:List["iter"](iter_row_field,match[1]);
            case 8:iter_core_type(match[2]);
            case 9:iter_package_type(match[1])
            }}
        
        switch(exit){case 77:case 78:List["iter"](iter_core_type,match[3])}
        
        return Iter[45](ct);
        };
    
    var
     iter_class_structure=
      function(cs)
       {Iter[22](cs);
        iter_pattern(cs[1]);
        List["iter"](iter_class_field,cs[2]);
        return Iter[46](cs);
        };
    
    var
     iter_row_field=
      function(rf)
       {switch(rf)
         {case 0:return List["iter"](iter_core_type,rf[4]);
          case 1:return iter_core_type(rf[1]);
          }
        };
    
    var
     iter_class_field=
      function(cf)
       {Iter[23](cf);
        var match=cf[1];
        
        switch(match)
         {case 0:iter_class_expr(match[2]);
          case 1:
           var match$1=match[4];
           
           switch(match$1)
            {case 0:iter_core_type(match$1[1]);
             case 1:iter_expression(match$1[2])
             }
           
          case 2:
           var match$2=match[3];
           
           switch(match$2)
            {case 0:iter_core_type(match$2[1]);
             case 1:iter_expression(match$2[2])
             }
           
          case 3:iter_core_type(match[1]),iter_core_type(match[2]);
          case 4:iter_expression(match[1]);
          case 5:
          }
        
        return Iter[47](cf);
        };
    
    return [0,
            iter_structure,
            iter_signature,
            iter_structure_item,
            iter_signature_item,
            iter_expression,
            iter_module_type,
            iter_pattern,
            iter_class_expr];
    };

var enter_structure=function(param){return 0;};

var enter_value_description=function(param){return 0;};

var enter_type_extension=function(param){return 0;};

var enter_extension_constructor=function(param){return 0;};

var enter_pattern=function(param){return 0;};

var enter_expression=function(param){return 0;};

var enter_package_type=function(param){return 0;};

var enter_signature=function(param){return 0;};

var enter_signature_item=function(param){return 0;};

var enter_module_type_declaration=function(param){return 0;};

var enter_module_type=function(param){return 0;};

var enter_module_expr=function(param){return 0;};

var enter_with_constraint=function(param){return 0;};

var enter_class_expr=function(param){return 0;};

var enter_class_signature=function(param){return 0;};

var enter_class_declaration=function(param){return 0;};

var enter_class_description=function(param){return 0;};

var enter_class_type_declaration=function(param){return 0;};

var enter_class_type=function(param){return 0;};

var enter_class_type_field=function(param){return 0;};

var enter_core_type=function(param){return 0;};

var enter_core_field_type=function(param){return 0;};

var enter_class_structure=function(param){return 0;};

var enter_class_field=function(param){return 0;};

var enter_structure_item=function(param){return 0;};

var leave_structure=function(param){return 0;};

var leave_value_description=function(param){return 0;};

var leave_type_extension=function(param){return 0;};

var leave_extension_constructor=function(param){return 0;};

var leave_pattern=function(param){return 0;};

var leave_expression=function(param){return 0;};

var leave_package_type=function(param){return 0;};

var leave_signature=function(param){return 0;};

var leave_signature_item=function(param){return 0;};

var leave_module_type_declaration=function(param){return 0;};

var leave_module_type=function(param){return 0;};

var leave_module_expr=function(param){return 0;};

var leave_with_constraint=function(param){return 0;};

var leave_class_expr=function(param){return 0;};

var leave_class_signature=function(param){return 0;};

var leave_class_declaration=function(param){return 0;};

var leave_class_description=function(param){return 0;};

var leave_class_type_declaration=function(param){return 0;};

var leave_class_type=function(param){return 0;};

var leave_class_type_field=function(param){return 0;};

var leave_core_type=function(param){return 0;};

var leave_core_field_type=function(param){return 0;};

var leave_class_structure=function(param){return 0;};

var leave_class_field=function(param){return 0;};

var leave_structure_item=function(param){return 0;};

var enter_binding=function(param){return 0;};

var leave_binding=function(param){return 0;};

var enter_bindings=function(param){return 0;};

var leave_bindings=function(param){return 0;};

var enter_type_declaration=function(param){return 0;};

var leave_type_declaration=function(param){return 0;};

var enter_type_declarations=function(param){return 0;};

var leave_type_declarations=function(param){return 0;};

var
 DefaultIteratorArgument=
  [0,
   enter_structure,
   enter_value_description,
   enter_type_extension,
   enter_extension_constructor,
   enter_pattern,
   enter_expression,
   enter_package_type,
   enter_signature,
   enter_signature_item,
   enter_module_type_declaration,
   enter_module_type,
   enter_module_expr,
   enter_with_constraint,
   enter_class_expr,
   enter_class_signature,
   enter_class_declaration,
   enter_class_description,
   enter_class_type_declaration,
   enter_class_type,
   enter_class_type_field,
   enter_core_type,
   enter_core_field_type,
   enter_class_structure,
   enter_class_field,
   enter_structure_item,
   leave_structure,
   leave_value_description,
   leave_type_extension,
   leave_extension_constructor,
   leave_pattern,
   leave_expression,
   leave_package_type,
   leave_signature,
   leave_signature_item,
   leave_module_type_declaration,
   leave_module_type,
   leave_module_expr,
   leave_with_constraint,
   leave_class_expr,
   leave_class_signature,
   leave_class_declaration,
   leave_class_description,
   leave_class_type_declaration,
   leave_class_type,
   leave_class_type_field,
   leave_core_type,
   leave_core_field_type,
   leave_class_structure,
   leave_class_field,
   leave_structure_item,
   enter_binding,
   leave_binding,
   enter_bindings,
   leave_bindings,
   enter_type_declaration,
   leave_type_declaration,
   enter_type_declarations,
   leave_type_declarations];

module["exports"]=
{"MakeIterator":MakeIterator,
 "DefaultIteratorArgument":
 [0,
  DefaultIteratorArgument[1],
  DefaultIteratorArgument[2],
  DefaultIteratorArgument[3],
  DefaultIteratorArgument[4],
  DefaultIteratorArgument[5],
  DefaultIteratorArgument[6],
  DefaultIteratorArgument[7],
  DefaultIteratorArgument[8],
  DefaultIteratorArgument[9],
  DefaultIteratorArgument[10],
  DefaultIteratorArgument[11],
  DefaultIteratorArgument[12],
  DefaultIteratorArgument[13],
  DefaultIteratorArgument[14],
  DefaultIteratorArgument[15],
  DefaultIteratorArgument[16],
  DefaultIteratorArgument[17],
  DefaultIteratorArgument[18],
  DefaultIteratorArgument[19],
  DefaultIteratorArgument[20],
  DefaultIteratorArgument[21],
  DefaultIteratorArgument[23],
  DefaultIteratorArgument[24],
  DefaultIteratorArgument[25],
  DefaultIteratorArgument[26],
  DefaultIteratorArgument[27],
  DefaultIteratorArgument[28],
  DefaultIteratorArgument[29],
  DefaultIteratorArgument[30],
  DefaultIteratorArgument[31],
  DefaultIteratorArgument[32],
  DefaultIteratorArgument[33],
  DefaultIteratorArgument[34],
  DefaultIteratorArgument[35],
  DefaultIteratorArgument[36],
  DefaultIteratorArgument[37],
  DefaultIteratorArgument[38],
  DefaultIteratorArgument[39],
  DefaultIteratorArgument[40],
  DefaultIteratorArgument[41],
  DefaultIteratorArgument[42],
  DefaultIteratorArgument[43],
  DefaultIteratorArgument[44],
  DefaultIteratorArgument[45],
  DefaultIteratorArgument[46],
  DefaultIteratorArgument[48],
  DefaultIteratorArgument[49],
  DefaultIteratorArgument[50],
  DefaultIteratorArgument[53],
  DefaultIteratorArgument[51],
  DefaultIteratorArgument[52],
  DefaultIteratorArgument[54],
  DefaultIteratorArgument[57],
  DefaultIteratorArgument[55],
  DefaultIteratorArgument[56],
  DefaultIteratorArgument[58]]};

