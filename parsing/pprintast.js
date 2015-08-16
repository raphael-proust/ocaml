// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var CamlinternalOO=require("./camlinternalOO.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 shared=
  [0,
   "virtual_flag",
   "value_description",
   "under_semi",
   "under_pipe",
   "under_ifthenelse",
   "tyvar",
   "type_with_label",
   "type_params",
   "type_param",
   "type_extension",
   "type_def_list",
   "type_declaration",
   "toplevel_phrase",
   "sugar_expr",
   "structure_item",
   "structure",
   "string_quot",
   "simple_pattern",
   "simple_expr",
   "signature_item",
   "signature",
   "reset_semi",
   "reset_pipe",
   "reset_ifthenelse",
   "reset",
   "rec_flag",
   "private_flag",
   "payload",
   "pattern1",
   "pattern",
   "paren",
   "option",
   "nonrec_flag",
   "mutable_flag",
   "module_type",
   "module_expr",
   "longident_loc",
   "longident",
   "list",
   "label_x_expression_param",
   "label_exp",
   "item_extension",
   "item_attributes",
   "item_attribute",
   "floating_attribute",
   "extension_constructor",
   "extension",
   "expression2",
   "expression1",
   "expression",
   "exception_declaration",
   "directive_argument",
   "direction_flag",
   "core_type1",
   "core_type",
   "constant_string",
   "constant",
   "class_type_declaration_list",
   "class_type",
   "class_structure",
   "class_signature",
   "class_params_def",
   "class_field",
   "class_expr",
   "case_list",
   "bindings",
   "binding",
   "attributes",
   "attribute"];

var shared$1=[0,"pipe","semi","ifthenelse"];

var prefix_symbols=[/* :: */0,33,[/* :: */0,63,[/* :: */0,126,/* [] */0]]];

var
 infix_symbols=
  [/* :: */0,
   61,
   [/* :: */0,
    60,
    [/* :: */0,
     62,
     [/* :: */0,
      64,
      [/* :: */0,
       94,
       [/* :: */0,
        124,
        [/* :: */0,
         38,
         [/* :: */0,
          43,
          [/* :: */0,
           45,
           [/* :: */0,
            42,
            [/* :: */0,47,[/* :: */0,36,[/* :: */0,37,/* [] */0]]]]]]]]]]]]];

var
 operator_chars=
  [/* :: */0,
   33,
   [/* :: */0,
    36,
    [/* :: */0,
     37,
     [/* :: */0,
      38,
      [/* :: */0,
       42,
       [/* :: */0,
        43,
        [/* :: */0,
         45,
         [/* :: */0,
          46,
          [/* :: */0,
           47,
           [/* :: */0,
            58,
            [/* :: */0,
             60,
             [/* :: */0,
              61,
              [/* :: */0,
               62,
               [/* :: */0,
                63,
                [/* :: */0,
                 64,
                 [/* :: */0,94,[/* :: */0,124,[/* :: */0,126,/* [] */0]]]]]]]]]]]]]]]]]];

var
 numeric_chars=
  [/* :: */0,
   48,
   [/* :: */0,
    49,
    [/* :: */0,
     50,
     [/* :: */0,
      51,
      [/* :: */0,
       52,
       [/* :: */0,
        53,
        [/* :: */0,54,[/* :: */0,55,[/* :: */0,56,[/* :: */0,57,/* [] */0]]]]]]]]]];

var
 special_infix_strings=
  [/* :: */0,
   "asr",
   [/* :: */0,
    "land",
    [/* :: */0,
     "lor",
     [/* :: */0,
      "lsl",
      [/* :: */0,
       "lsr",
       [/* :: */0,
        "lxor",
        [/* :: */0,
         "mod",
         [/* :: */0,"or",[/* :: */0,":=",[/* :: */0,"!=",/* [] */0]]]]]]]]]];

var
 fixity_of_string=
  function(s)
   {if(List["mem"](s,special_infix_strings))
     {return /* `Infix */[0,-784100624,s];}
    else
     {if(List["mem"](s[0],infix_symbols))
       {return /* `Infix */[0,-784100624,s];}
      else
       {if(List["mem"](s[0],prefix_symbols))
         {return /* `Prefix */[0,-481604174,s];}
        else
         {return /* Normal */-453122489;}
        }
      }
    };

var
 view_fixity_of_exp=
  function(param)
   {var match=param[1];
    
    var exit;
    
    switch(match[0])
     {case 0:
       var match$1=match[1][1];
       
       switch(match$1[0])
        {case 0:return fixity_of_string(match$1[1]);
         case 1:exit=173;
         case 2:exit=173;
         }
       
      default:exit=173;}
    
    switch(exit){case 173:return /* Normal */-453122489;}
    };

var
 is_infix=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {exit=171;}
    else
     {if(param[1]!==-784100624){exit=171;}else{return /* true */1;}}
    
    switch(exit){case 171:return /* false */0;}
    };

var
 is_predef_option=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:exit=169;
      case 1:
       var match=param[1];
       
       switch(match[0])
        {case 0:
          switch(match[1])
           {case "*predef*":
             switch(param[2])
              {case "option":return /* true */1;default:exit=169;}
             
            default:exit=169;}
          
         case 1:exit=169;
         case 2:exit=169;
         }
       
      case 2:exit=169;
      }
    
    switch(exit){case 169:return /* false */0;}
    };

var
 needs_parens=
  function(txt)
   {return is_infix(fixity_of_string(txt))||
           List["mem"](txt[0],prefix_symbols);
    };

var
 needs_spaces=
  function(txt){return txt[0]===42||txt[txt["length"]-1]===42;};

var
 protect_ident=
  function(ppf,txt)
   {if(!needs_parens(txt))
     {var
       format=
        [/* Format */0,
         [/* String */2,/* No_padding */0,/* End_of_format */0],
         "%s"];
      }
    else
     {if(needs_spaces(txt))
       {var
         format=
          [/* Format */0,
           [/* Char_literal */12,
            40,
            [/* Formatting_lit */17,
             [/* Break */0,"@;",1,0],
             [/* String */2,
              /* No_padding */0,
              [/* Formatting_lit */17,
               [/* Break */0,"@;",1,0],
               [/* Char_literal */12,41,/* End_of_format */0]]]]],
           "(@;%s@;)"];
        }
      else
       {var
         format=
          [/* Format */0,
           [/* Char_literal */12,
            40,
            [/* String */2,
             /* No_padding */0,
             [/* Char_literal */12,41,/* End_of_format */0]]],
           "(%s)"];
        }
      }
    
    return Format["fprintf"](ppf,format,txt);
    };

var
 protect_longident=
  function(ppf,print_longident,longprefix,txt)
   {if(!needs_parens(txt))
     {var
       format=
        [/* Format */0,
         [/* Alpha */15,
          [/* Char_literal */12,
           46,
           [/* String */2,/* No_padding */0,/* End_of_format */0]]],
         "%a.%s"];
      }
    else
     {if(needs_spaces(txt))
       {var
         format=
          [/* Format */0,
           [/* Alpha */15,
            [/* String_literal */11,
             ".(",
             [/* Formatting_lit */17,
              [/* Break */0,"@;",1,0],
              [/* String */2,
               /* No_padding */0,
               [/* Formatting_lit */17,
                [/* Break */0,"@;",1,0],
                [/* Char_literal */12,41,/* End_of_format */0]]]]]],
           "%a.(@;%s@;)"];
        }
      else
       {var
         format=
          [/* Format */0,
           [/* Alpha */15,
            [/* String_literal */11,
             ".(",
             [/* String */2,
              /* No_padding */0,
              [/* Char_literal */12,41,/* End_of_format */0]]]],
           "%a.(%s)"];
        }
      }
    
    return Format["fprintf"](ppf,format,print_longident,longprefix,txt);
    };

var override=function(param){if(param!==0){return "";}else{return "!";}};

var
 type_variance=
  function(param)
   {switch(param){case 0:return "+";case 1:return "-";case 2:return "";}};

var
 view_expr=
  function(x)
   {var match=x[1];
    
    var exit;
    
    switch(match[0])
     {case 9:
       var x$1=match[1];
       
       var match$1=x$1[1];
       
       var exit$1;
       
       switch(match$1[0])
        {case 0:
          switch(match$1[1])
           {case "()":return /* tuple */405183496;
            case "::":
             if(match[2])
              {var
                loop=
                 function(exp,acc)
                  {var match$2=exp[1];
                   
                   var exit$2;
                   
                   switch(match$2[0])
                    {case 9:
                      var match$3=match$2[1][1];
                      
                      switch(match$3[0])
                       {case 0:
                         switch(match$3[1])
                          {case "::":
                            var match$4=match$2[2];
                            
                            if(match$4)
                             {var match$5=match$4[1][1];
                              
                              switch(match$5[0])
                               {case 8:
                                 var match$6=match$5[1];
                                 
                                 if(match$6)
                                  {var match$7=match$6[2];
                                   
                                   if(match$7)
                                    {if(match$7[2])
                                      {exit$2=157;}
                                     else
                                      {return loop(match$7[1],/* :: */[0,match$6[1],acc]);}
                                     }
                                   else
                                    {exit$2=157;}
                                   }
                                 else
                                  {exit$2=157;}
                                 
                                default:exit$2=157;}
                              }
                            else
                             {exit$2=157;}
                            
                           case "[]":
                            return /* tuple */[0,List["rev"](acc),/* true */1];
                           default:exit$2=157;}
                         
                        case 1:exit$2=157;
                        case 2:exit$2=157;
                        }
                      
                     default:exit$2=157;}
                   
                   switch(exit$2)
                    {case 157:
                      return /* tuple */[0,
                              List["rev"](/* :: */[0,exp,acc]),
                              /* false */0];
                      
                     }
                   };
               
               var match$2=loop(x,/* [] */0);
               
               var ls=match$2[1];
               
               if(match$2[2])
                {return /* `list */[0,-944563106,ls];}
               else
                {return /* `cons */[0,-1044071951,ls];}
               }
             else
              {exit$1=159;}
             
            case "[]":return /* nil */5493713;
            default:exit$1=159;}
          
         case 1:exit$1=159;
         case 2:exit$1=159;
         }
       
       switch(exit$1)
        {case 159:
          if(match[2])
           {exit=158;}
          else
           {return /* `simple */[0,947848242,x$1[1]];}
          
         }
       
      default:exit=158;}
    
    switch(exit){case 158:return /* normal */812216871;}
    };

var
 is_simple_construct=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {if(param>=812216871){exit=154;}else{exit=153;}}
    else
     {if(param[1]>=-944563106){exit=153;}else{exit=154;}}
    
    switch(exit){case 153:return /* true */1;case 154:return /* false */0;}
    };

var pp=Format["fprintf"];

var
 printer_init=
  function($$class)
   {var ids=CamlinternalOO["new_methods_variables"]($$class,shared,shared$1);
    
    var virtual_flag=ids[1];
    
    var value_description=ids[2];
    
    var under_semi=ids[3];
    
    var under_pipe=ids[4];
    
    var under_ifthenelse=ids[5];
    
    var tyvar=ids[6];
    
    var type_with_label=ids[7];
    
    var type_params=ids[8];
    
    var type_param=ids[9];
    
    var type_extension=ids[10];
    
    var type_def_list=ids[11];
    
    var type_declaration=ids[12];
    
    var toplevel_phrase=ids[13];
    
    var sugar_expr=ids[14];
    
    var structure_item=ids[15];
    
    var structure=ids[16];
    
    var string_quot=ids[17];
    
    var simple_pattern=ids[18];
    
    var simple_expr=ids[19];
    
    var signature_item=ids[20];
    
    var signature=ids[21];
    
    var reset_semi=ids[22];
    
    var reset_pipe=ids[23];
    
    var reset_ifthenelse=ids[24];
    
    var reset=ids[25];
    
    var rec_flag=ids[26];
    
    var private_flag=ids[27];
    
    var payload=ids[28];
    
    var pattern1=ids[29];
    
    var pattern=ids[30];
    
    var paren=ids[31];
    
    var option=ids[32];
    
    var nonrec_flag=ids[33];
    
    var mutable_flag=ids[34];
    
    var module_type=ids[35];
    
    var module_expr=ids[36];
    
    var longident_loc=ids[37];
    
    var longident=ids[38];
    
    var list=ids[39];
    
    var label_x_expression_param=ids[40];
    
    var label_exp=ids[41];
    
    var item_extension=ids[42];
    
    var item_attributes=ids[43];
    
    var item_attribute=ids[44];
    
    var floating_attribute=ids[45];
    
    var extension_constructor=ids[46];
    
    var extension=ids[47];
    
    var expression2=ids[48];
    
    var expression1=ids[49];
    
    var expression=ids[50];
    
    var exception_declaration=ids[51];
    
    var directive_argument=ids[52];
    
    var direction_flag=ids[53];
    
    var core_type1=ids[54];
    
    var core_type=ids[55];
    
    var constant_string=ids[56];
    
    var constant=ids[57];
    
    var class_type_declaration_list=ids[58];
    
    var class_type=ids[59];
    
    var class_structure=ids[60];
    
    var class_signature=ids[61];
    
    var class_params_def=ids[62];
    
    var class_field=ids[63];
    
    var class_expr=ids[64];
    
    var case_list=ids[65];
    
    var bindings=ids[66];
    
    var binding=ids[67];
    
    var attributes=ids[68];
    
    var attribute=ids[69];
    
    var pipe=ids[70];
    
    var semi=ids[71];
    
    var ifthenelse=ids[72];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       under_pipe,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[pipe+1]=/* true */1;
         return copy;
         },
       under_semi,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[semi+1]=/* true */1;
         return copy;
         },
       under_ifthenelse,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[ifthenelse+1]=/* true */1;
         return copy;
         },
       reset_semi,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[semi+1]=/* false */0;
         return copy;
         },
       reset_ifthenelse,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[ifthenelse+1]=/* false */0;
         return copy;
         },
       reset_pipe,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[pipe+1]=/* false */0;
         return copy;
         },
       reset,
       function(self$neg1)
        {var copy=CamlinternalOO["copy"](self$neg1);
         
         copy[pipe+1]=/* false */0;
         copy[semi+1]=/* false */0;
         copy[ifthenelse+1]=/* false */0;
         return copy;
         },
       list,
       function(self$neg1,sep,first,last,fu,f,xs)
        {if(first)
          {var first$1=first[1];}
         else
          {var first$1=[/* Format */0,/* End_of_format */0,""];}
         
         if(last)
          {var last$1=last[1];}
         else
          {var last$1=[/* Format */0,/* End_of_format */0,""];}
         
         if(sep)
          {var sep$1=sep[1];}
         else
          {var
            sep$1=
             [/* Format */0,
              [/* Formatting_lit */17,
               [/* Break */0,"@ ",1,0],
               /* End_of_format */0],
              "@ "];
           }
         
         var
          aux=
           function(f,xs)
            {if(xs)
              {if(xs[2])
                {var
                  loop=
                   function(f,param)
                    {if(param)
                      {var xs$1=param[2];
                       
                       var x=param[1];
                       
                       if(xs$1)
                        {fu(f,x);pp(f,sep$1);return loop(f,xs$1);}
                       else
                        {return fu(f,x);}
                       }
                     else
                      {throw [0,
                              CamlPrimitive["caml_global_data"]["Assert_failure"],
                              [0,"parsing/pprintast.ml",154,25]];
                       }
                     };
                 
                 pp(f,first$1);
                 loop(f,xs);
                 return pp(f,last$1);
                 }
               else
                {return fu(f,xs[1]);}
               }
             else
              {return /* () */0;}
             };
         
         return aux(f,xs);
         },
       option,
       function(self$neg1,first,last,fu,f,a)
        {if(first)
          {var first$1=first[1];}
         else
          {var first$1=[/* Format */0,/* End_of_format */0,""];}
         
         if(last)
          {var last$1=last[1];}
         else
          {var last$1=[/* Format */0,/* End_of_format */0,""];}
         
         if(a)
          {pp(f,first$1);fu(f,a[1]);return pp(f,last$1);}
         else
          {return /* () */0;}
         },
       paren,
       function(self$neg1,$staropt$star,$staropt$star,b,fu,f,x)
        {if($staropt$star$1)
          {var first=$staropt$star$1[1];}
         else
          {var first=[/* Format */0,/* End_of_format */0,""];}
         
         if($staropt$star)
          {var last=$staropt$star[1];}
         else
          {var last=[/* Format */0,/* End_of_format */0,""];}
         
         if(b)
          {pp
            (f,
             [/* Format */0,
              [/* Char_literal */12,40,/* End_of_format */0],
              "("]);
           pp(f,first);
           fu(f,x);
           pp(f,last);
           return pp
                   (f,
                    [/* Format */0,
                     [/* Char_literal */12,41,/* End_of_format */0],
                     ")"]);
           }
         else
          {return fu(f,x);}
         },
       longident,
       function(self$neg1,f,param)
        {switch(param[0])
          {case 0:return protect_ident(f,param[1]);
           case 1:
            /* unknown */"(sendself self-1/1193 longident/1072)";
            return protect_longident(f,0,param[1],param[2]);
            
           case 2:
            /* unknown */"(sendself self-1/1193 longident/1072)";
            /* unknown */"(sendself self-1/1193 longident/1072)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        40,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]],
                      "%a(%a)"],
                     0,
                     param[1],
                     0,
                     param[2]);
            
           }
         },
       longident_loc,
       function(self$neg1,f,x)
        {/* unknown */"(sendself self-1/1201 longident/1072)";
         return pp
                 (f,
                  [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                  0,
                  x[1]);
         },
       constant,
       function(self$neg1,f,param)
        {switch(param[0])
          {case 0:
            var i=param[1];
            
            /* unknown */'(sendself self-1/1205 paren/1071 0a 0a (< i/1211 0)\n  (function f/1216 (apply pp/1051 f/1216 [0: [4: 0a 0a 0a 0a] "%d"])) f/1206\n  i/1211)';
            
           case 1:
            return pp
                    (f,
                     [/* Format */0,[/* Caml_char */1,/* End_of_format */0],"%C"],
                     param[1]);
            
           case 2:
            var match=param[2];
            
            var i$1=param[1];
            
            if(match)
             {var delim=match[1];
              
              return pp
                      (f,
                       [/* Format */0,
                        [/* Char_literal */12,
                         123,
                         [/* String */2,
                          /* No_padding */0,
                          [/* Char_literal */12,
                           124,
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             124,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,125,/* End_of_format */0]]]]]]],
                        "{%s|%s|%s}"],
                       delim,
                       i$1,
                       delim);
              }
            else
             {return pp
                      (f,
                       [/* Format */0,
                        [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                        "%S"],
                       i$1);
              }
            
           case 3:
            var i$2=param[1];
            
            /* unknown */"(sendself self-1/1205 paren/1071 0a 0a (== (string.get i/1212 0) '-')\n  (function f/1217 (apply pp/1051 f/1217 [0: [2: 0a 0a] \"%s\"])) f/1206\n  i/1212)";
            
           case 4:
            var i$3=param[1];
            
            /* unknown */"(sendself self-1/1205 paren/1071 0a 0a (Int32.< i/1213 0l)\n  (function f/1218\n    (apply pp/1051 f/1218 [0: [5: 0a 0a 0a [12: 'l' 0a]] \"%ldl\"]))\n  f/1206 i/1213)";
            
           case 5:
            var i$4=param[1];
            
            /* unknown */"(sendself self-1/1205 paren/1071 0a 0a (Int64.< i/1214 0L)\n  (function f/1219\n    (apply pp/1051 f/1219 [0: [7: 0a 0a 0a [12: 'L' 0a]] \"%LdL\"]))\n  f/1206 i/1214)";
            
           case 6:
            var i$5=param[1];
            
            /* unknown */"(sendself self-1/1205 paren/1071 0a 0a (Nativeint.< i/1215 0n)\n  (function f/1220\n    (apply pp/1051 f/1220 [0: [6: 0a 0a 0a [12: 'n' 0a]] \"%ndn\"]))\n  f/1206 i/1215)";
            
           }
         },
       mutable_flag,
       function(self$neg1,f,param)
        {if(param!==0)
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "mutable",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@;",1,0],
                       /* End_of_format */0]],
                     "mutable@;"]);
           }
         else
          {return /* () */0;}
         },
       virtual_flag,
       function(self$neg1,f,param)
        {if(param!==0)
          {return /* () */0;}
         else
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "virtual",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@;",1,0],
                       /* End_of_format */0]],
                     "virtual@;"]);
           }
         },
       rec_flag,
       function(self$neg1,f,rf)
        {if(rf!==0)
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,"rec ",/* End_of_format */0],
                     "rec "]);
           }
         else
          {return /* () */0;}
         },
       nonrec_flag,
       function(self$neg1,f,rf)
        {if(rf!==0)
          {return /* () */0;}
         else
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,"nonrec ",/* End_of_format */0],
                     "nonrec "]);
           }
         },
       direction_flag,
       function(self$neg1,f,param)
        {if(param!==0)
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "downto",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       /* End_of_format */0]],
                     "downto@ "]);
           }
         else
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "to",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       /* End_of_format */0]],
                     "to@ "]);
           }
         },
       private_flag,
       function(self$neg1,f,param)
        {if(param!==0)
          {return /* () */0;}
         else
          {return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "private",
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       /* End_of_format */0]],
                     "private@ "]);
           }
         },
       constant_string,
       function(self$neg1,f,s)
        {return pp
                 (f,
                  [/* Format */0,
                   [/* Caml_string */3,/* No_padding */0,/* End_of_format */0],
                   "%S"],
                  s);
         },
       tyvar,
       function(self$neg1,f,str)
        {return pp
                 (f,
                  [/* Format */0,
                   [/* Char_literal */12,
                    39,
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "'%s"],
                  str);
         },
       string_quot,
       function(self$neg1,f,x)
        {return pp
                 (f,
                  [/* Format */0,
                   [/* Char_literal */12,
                    96,
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "`%s"],
                  x);
         },
       class_params_def,
       function(self$neg1,f,l)
        {if(l)
          {/* unknown */"(sendself self-1/1254 list/1069 [0: [0: [12: ',' 0a] \",\"]] 0a 0a\n  (sendself self-1/1254 type_param/1121))";
           return pp
                   (f,
                    [/* Format */0,
                     [/* Char_literal */12,
                      91,
                      [/* Alpha */15,
                       [/* String_literal */11,"] ",/* End_of_format */0]]],
                     "[%a] "],
                    0,
                    l);
           }
         else
          {return /* () */0;}
         },
       type_with_label,
       function(self$neg1,f,param)
        {var c=param[2];
         
         var ptyp_desc=c[1];
         
         var label=param[1];
         
         switch(label)
          {case "":
            /* unknown */"(sendself self-1/1258 core_type1/1087 f/1259 c/1262)";
            
           default:
            if(label[0]===63)
             {var exit;
              
              if(typeof ptyp_desc==="number")
               {switch(ptyp_desc){}}
              else
               {switch(ptyp_desc[0])
                 {case 3:
                   if(is_predef_option(ptyp_desc[1][1]))
                    {}
                   else
                    {throw [0,
                            CamlPrimitive["caml_global_data"]["Assert_failure"],
                            [0,"parsing/pprintast.ml",233,14]];
                     }
                   
                   /* unknown */"(sendself self-1/1258 list/1069 0a 0a 0a\n  (sendself self-1/1258 core_type1/1087))";
                   return pp
                           (f,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               58,
                               [/* Alpha */15,/* End_of_format */0]]],
                             "%s:%a"],
                            label,
                            0,
                            ptyp_desc[2]);
                   
                  default:exit=138;}}
              
              switch(exit)
               {case 138:
                 return Pervasives["failwith"]
                         ("invalid input in print_type_with_label");
                 
                }
              }
            else
             {/* unknown */"(sendself self-1/1258 core_type1/1087)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          58,
                          [/* Alpha */15,/* End_of_format */0]]],
                        "%s:%a"],
                       label,
                       0,
                       c);
              }
            }
         },
       core_type,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1267 core_type/1086)";
           /* unknown */"(sendself self-1/1267 attributes/1097)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "((",
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]],
                     "((%a)%a)"],
                    0,
                    /* record */[0,x[1],x[2],/* [] */0],
                    0,
                    x[3]);
           }
         else
          {var match=x[1];
           
           var exit;
           
           if(typeof match==="number")
            {switch(match){}}
           else
            {switch(match[0])
              {case 1:
                /* unknown */"(sendself self-1/1267 type_with_label/1085)";
                /* unknown */"(sendself self-1/1267 core_type/1086)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String_literal */11,
                              "->",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]],
                          "@[<2>%a@;->@;%a@]"],
                         0,
                         /* tuple */[0,match[1],match[2]],
                         0,
                         match[3]);
                
               case 6:
                /* unknown */"(sendself self-1/1267 core_type1/1087)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String_literal */11,
                              "as",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Char_literal */12,
                                39,
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]],
                          "@[<2>%a@;as@;'%s@]"],
                         0,
                         match[1],
                         match[2]);
                
               case 8:
                /* unknown */"(sendself self-1/1267 core_type/1086)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Alpha */15,
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              /* End_of_format */0]]]],
                          "@[<2>%a%a@]"],
                         function(f,l)
                          {return pp
                                   (f,
                                    [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                                    function(f,l)
                                     {if(l)
                                       {/* unknown */'(sendself self-1/1267 list/1069 [0: [0: [17: [0: "@;" 1 0] 0a] "@;"]] 0a 0a\n  (sendself self-1/1267 tyvar/1082))';
                                        return pp
                                                (f,
                                                 [/* Format */0,
                                                  [/* Alpha */15,
                                                   [/* Formatting_lit */17,
                                                    [/* Break */0,"@;",1,0],
                                                    [/* Char_literal */12,
                                                     46,
                                                     [/* Formatting_lit */17,
                                                      [/* Break */0,"@;",1,0],
                                                      /* End_of_format */0]]]],
                                                  "%a@;.@;"],
                                                 0,
                                                 l);
                                        }
                                      else
                                       {return /* () */0;}
                                      },
                                    l);
                           },
                         match[1],
                         0,
                         match[2]);
                
               default:exit=137;}}
           
           switch(exit)
            {case 137:
              /* unknown */"(sendself self-1/1267 core_type1/1087)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<2>",/* End_of_format */0],
                           "<2>"]],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]],
                        "@[<2>%a@]"],
                       0,
                       x);
              
             }
           }
         },
       core_type1,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1282 core_type/1086 f/1283 x/1284)";
           }
         else
          {var match=x[1];
           
           if(typeof match==="number")
            {switch(match)
              {case 0:
                return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,95,/* End_of_format */0],
                          "_"]);
                
               }}
           else
            {switch(match[0])
              {case 0:
                /* unknown */"(sendself self-1/1282 tyvar/1082 f/1283 (field 0 match/2621))";
                
               case 2:
                /* unknown */'(sendself self-1/1282 list/1069\n  [0: [0: [12: \'*\' [17: [0: "@;" 1 0] 0a]] "*@;"]] 0a 0a\n  (sendself self-1/1282 core_type1/1087))';
                return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,
                           40,
                           [/* Alpha */15,
                            [/* Char_literal */12,41,/* End_of_format */0]]],
                          "(%a)"],
                         0,
                         match[1]);
                
               case 3:
                /* unknown */"(sendself self-1/1282 longident_loc/1073)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]],
                          "%a%a"],
                         function(f,l)
                          {if(l)
                            {if(l[2])
                              {/* unknown */'(sendself self-1/1282 list/1069 [0: [0: [12: \',\' 0a] ","]]\n  [0: [0: [12: \'(\' 0a] "("]] [0: [0: [12: \')\' [17: [0: "@;" 1 0] 0a]] ")@;"]]\n  (sendself self-1/1282 core_type/1086) f/1299 l/1300)';
                               }
                             else
                              {/* unknown */"(sendself self-1/1282 core_type1/1087)";
                               return pp
                                       (f,
                                        [/* Format */0,
                                         [/* Alpha */15,
                                          [/* Formatting_lit */17,
                                           [/* Break */0,"@;",1,0],
                                           /* End_of_format */0]],
                                         "%a@;"],
                                        0,
                                        l[1]);
                               }
                             }
                           else
                            {return /* () */0;}
                           },
                         match[2],
                         0,
                         match[1]);
                
               case 4:
                var l=match[1];
                
                var
                 core_field_type=
                  function(f,param)
                   {/* unknown */"(sendself self-1/1282 attributes/1097)";
                    /* unknown */"(sendself self-1/1282 core_type/1086)";
                    return pp
                            (f,
                             [/* Format */0,
                              [/* Formatting_gen */18,
                               [/* Open_box */1,
                                [/* Format */0,
                                 [/* String_literal */11,"<hov2>",/* End_of_format */0],
                                 "<hov2>"]],
                               [/* String */2,
                                /* No_padding */0,
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Char_literal */12,
                                   58,
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      /* End_of_format */0]]]]]]]],
                              "@[<hov2>%s%a@ :%a@ @]"],
                             param[1],
                             0,
                             param[2],
                             0,
                             param[3]);
                    };
                
                var
                 field_var=
                  function(f,param)
                   {if(param!==0)
                     {if(l)
                       {return pp
                                (f,
                                 [/* Format */0,
                                  [/* String_literal */11," ;..",/* End_of_format */0],
                                  " ;.."]);
                        }
                      else
                       {return pp
                                (f,
                                 [/* Format */0,
                                  [/* String_literal */11,"..",/* End_of_format */0],
                                  ".."]);
                        }
                      }
                    else
                     {return /* () */0;}
                    };
                
                /* unknown */"(sendself self-1/1282 list/1069 [0: [0: [12: ';' 0a] \";\"]] 0a 0a\n  core_field_type/1316)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* Char_literal */12,
                            60,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Char_literal */12,
                                 62,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]],
                          "@[<hov2><@ %a%a@ >@]"],
                         0,
                         l,
                         field_var,
                         match[2]);
                
               case 5:
                /* unknown */"(sendself self-1/1282 list/1069 [0: [0: [12: ',' 0a] \",\"]]\n  [0: [0: [12: '(' 0a] \"(\"]] [0: [0: [12: ')' 0a] \")\"]]\n  (sendself self-1/1282 core_type/1086))";
                /* unknown */"(sendself self-1/1282 longident_loc/1073)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* Alpha */15,
                            [/* Char_literal */12,
                             35,
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<hov2>%a#%a@]"],
                         0,
                         match[2],
                         0,
                         match[1]);
                
               case 7:
                var low=match[3];
                
                var closed=match[2];
                
                var
                 type_variant_helper=
                  function(f,x)
                   {switch(x[0])
                     {case 0:
                       var ctl=x[4];
                       
                       /* unknown */"(sendself self-1/1282 string_quot/1083)";
                       /* unknown */"(sendself self-1/1282 attributes/1097)";
                       return pp
                               (f,
                                [/* Format */0,
                                 [/* Formatting_gen */18,
                                  [/* Open_box */1,
                                   [/* Format */0,
                                    [/* String_literal */11,"<2>",/* End_of_format */0],
                                    "<2>"]],
                                  [/* Alpha */15,
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@;",1,0],
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       /* Close_box */0,
                                       /* End_of_format */0]]]]]],
                                 "@[<2>%a%a@;%a@]"],
                                0,
                                x[1],
                                function(f,l)
                                 {if(l)
                                   {/* unknown */"(sendself self-1/1282 list/1069 [0: [0: [12: '&' 0a] \"&\"]] 0a 0a\n  (sendself self-1/1282 core_type/1086))";
                                    return pp
                                            (f,
                                             [/* Format */0,
                                              [/* Formatting_lit */17,
                                               [/* Break */0,"@;",1,0],
                                               [/* String_literal */11,
                                                "of",
                                                [/* Formatting_lit */17,
                                                 [/* Break */0,"@;",1,0],
                                                 [/* Alpha */15,/* End_of_format */0]]]],
                                              "@;of@;%a"],
                                             0,
                                             ctl);
                                    }
                                  else
                                   {return /* () */0;}
                                  },
                                ctl,
                                0,
                                x[2]);
                       
                      case 1:
                       /* unknown */"(sendself self-1/1282 core_type/1086 f/1303 (field 0 x/1304))";
                       
                      }
                    };
                
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Char_literal */12,
                            91,
                            [/* Alpha */15,
                             [/* Alpha */15,
                              [/* Char_literal */12,
                               93,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]],
                          "@[<2>[%a%a]@]"],
                         function(f,l)
                          {if(l)
                            {/* unknown */'(sendself self-1/1282 list/1069\n  [0: [0: [17: [0: "@;<1 -2>" 1 -2] [11: "| " 0a]] "@;<1 -2>| "]] 0a 0a\n  type_variant_helper/1302)';
                             return pp
                                     (f,
                                      [/* Format */0,
                                       [/* String */2,
                                        /* No_padding */0,
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@;",1,0],
                                         [/* Alpha */15,/* End_of_format */0]]],
                                       "%s@;%a"],
                                      closed!==0?">":low?"<":"",
                                      0,
                                      l);
                             }
                           else
                            {return /* () */0;}
                           },
                         match[1],
                         function(f,low)
                          {var exit;
                           
                           if(low)
                            {var xs=low[1];
                             
                             if(xs)
                              {/* unknown */"(sendself self-1/1282 list/1069 0a 0a 0a\n  (sendself self-1/1282 string_quot/1083))";
                               return pp
                                       (f,
                                        [/* Format */0,
                                         [/* Char_literal */12,
                                          62,
                                          [/* Formatting_lit */17,
                                           [/* Break */0,"@ ",1,0],
                                           [/* Alpha */15,/* End_of_format */0]]],
                                         ">@ %a"],
                                        0,
                                        xs);
                               }
                             else
                              {exit=126;}
                             }
                           else
                            {exit=126;}
                           
                           switch(exit){case 126:return /* () */0;}
                           },
                         low);
                
               case 9:
                var match$1=match[1];
                
                var cstrs=match$1[2];
                
                var lid=match$1[1];
                
                var
                 aux=
                  function(f,param)
                   {/* unknown */"(sendself self-1/1282 longident_loc/1073)";
                    /* unknown */"(sendself self-1/1282 core_type/1086)";
                    return pp
                            (f,
                             [/* Format */0,
                              [/* String_literal */11,
                               "type ",
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Char_literal */12,
                                  61,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,/* End_of_format */0]]]]]],
                              "type %a@ =@ %a"],
                             0,
                             param[1],
                             0,
                             param[2]);
                    };
                
                if(cstrs)
                 {/* unknown */"(sendself self-1/1282 longident_loc/1073)";
                  /* unknown */'(sendself self-1/1282 list/1069\n  [0: [0: [17: [0: "@ " 1 0] [11: "and" [17: [0: "@ " 1 0] 0a]]] "@ and@ "]]\n  0a 0a aux/1323)';
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<hov2>",/* End_of_format */0],
                               "<hov2>"]],
                             [/* String_literal */11,
                              "(module",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String_literal */11,
                                  "with",
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,
                                    [/* Char_literal */12,
                                     41,
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      /* End_of_format */0]]]]]]]]]],
                            "@[<hov2>(module@ %a@ with@ %a)@]"],
                           0,
                           lid,
                           0,
                           cstrs);
                  }
                else
                 {/* unknown */"(sendself self-1/1282 longident_loc/1073)";
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<hov2>",/* End_of_format */0],
                               "<hov2>"]],
                             [/* String_literal */11,
                              "(module",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Char_literal */12,
                                 41,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]],
                            "@[<hov2>(module@ %a)@]"],
                           0,
                           lid);
                  }
                
               case 10:
                /* unknown */"(sendself self-1/1282 extension/1103 f/1283 (field 0 match/2621))";
                
               default:
                /* unknown */"(sendself self-1/1282 paren/1071 0a 0a 1a\n  (sendself self-1/1282 core_type/1086) f/1283 x/1284)";
                }}
           }
         },
       pattern,
       function(self$neg1,f,x)
        {var
          list_of_pattern=
           function(acc,x)
            {var match=x[1];
             
             var exit;
             
             if(typeof match==="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 9:
                  return list_of_pattern(/* :: */[0,match[2],acc],match[1]);
                 default:exit=123;}}
             
             switch(exit){case 123:return /* :: */[0,x,acc];}
             };
         
         if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1328 pattern/1088)";
           /* unknown */"(sendself self-1/1328 attributes/1097)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "((",
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]],
                     "((%a)%a)"],
                    0,
                    /* record */[0,x[1],x[2],/* [] */0],
                    0,
                    x[3]);
           }
         else
          {var match=x[1];
           
           var exit;
           
           if(typeof match==="number")
            {switch(match){}}
           else
            {switch(match[0])
              {case 1:
                /* unknown */"(sendself self-1/1328 pattern/1088)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String_literal */11,
                              "as",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]],
                          "@[<2>%a@;as@;%a@]"],
                         0,
                         match[1],
                         protect_ident,
                         match[2][1]);
                
               case 9:
                /* unknown */'(sendself self-1/1328 list/1069\n  [0: [0: [17: [0: "@," 0 0] [12: \'|\' 0a]] "@,|"]] 0a 0a\n  (sendself self-1/1328 pattern/1088))';
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov0>",/* End_of_format */0],
                             "<hov0>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]],
                          "@[<hov0>%a@]"],
                         0,
                         list_of_pattern(/* [] */0,x));
                
               default:exit=122;}}
           
           switch(exit)
            {case 122:
              /* unknown */"(sendself self-1/1328 pattern1/1089 f/1329 x/1330)";
              
             }
           }
         },
       pattern1,
       function(self$neg1,f,x)
        {var
          pattern_list_helper=
           function(f,p)
            {var match=p[1];
             
             var exit;
             
             if(typeof match==="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 5:
                  var match$1=match[1][1];
                  
                  switch(match$1[0])
                   {case 0:
                     switch(match$1[1])
                      {case "::":
                        var match$2=match[2];
                        
                        if(match$2)
                         {var match$3=match$2[1][1];
                          
                          if(typeof match$3==="number")
                           {switch(match$3){}}
                          else
                           {switch(match$3[0])
                             {case 4:
                               var match$4=match$3[1];
                               
                               if(match$4)
                                {var match$5=match$4[2];
                                 
                                 if(match$5)
                                  {if(match$5[2])
                                    {exit=121;}
                                   else
                                    {/* unknown */"(sendself self-1/1341 simple_pattern/1090)";
                                     return pp
                                             (f,
                                              [/* Format */0,
                                               [/* Alpha */15,
                                                [/* String_literal */11,
                                                 "::",
                                                 [/* Alpha */15,/* End_of_format */0]]],
                                               "%a::%a"],
                                              0,
                                              match$4[1],
                                              pattern_list_helper,
                                              match$5[1]);
                                     }
                                   }
                                 else
                                  {exit=121;}
                                 }
                               else
                                {exit=121;}
                               
                              default:exit=121;}}
                          }
                        else
                         {exit=121;}
                        
                       default:exit=121;}
                     
                    case 1:exit=121;
                    case 2:exit=121;
                    }
                  
                 default:exit=121;}}
             
             switch(exit)
              {case 121:
                /* unknown */"(sendself self-1/1341 pattern1/1089 f/1345 p/1348)";
                
               }
             };
         
         if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1341 pattern/1088 f/1342 x/1343)";}
         else
          {var match=x[1];
           
           var exit;
           
           if(typeof match==="number")
            {switch(match){}}
           else
            {switch(match[0])
              {case 5:
                var li=match[1];
                
                var txt=li[1];
                
                var exit$1;
                
                switch(txt[0])
                 {case 0:
                   var exit$2;
                   
                   switch(txt[1])
                    {case "()":exit$2=120;
                     case "[]":exit$2=120;
                     default:exit$1=119;}
                   
                   switch(exit$2)
                    {case 120:
                      /* unknown */"(sendself self-1/1341 simple_pattern/1090 f/1342 x/1343)";
                      
                     }
                   
                  case 1:exit$1=119;
                  case 2:exit$1=119;
                  }
                
                switch(exit$1)
                 {case 119:
                   var po=match[2];
                   
                   if(CamlPrimitive["caml_equal"](txt,[/* Lident */0,"::"]))
                    {return pp
                             (f,
                              [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                              pattern_list_helper,
                              x);
                     }
                   else
                    {if(po)
                      {/* unknown */"(sendself self-1/1341 longident_loc/1073)";
                       /* unknown */"(sendself self-1/1341 simple_pattern/1090)";
                       return pp
                               (f,
                                [/* Format */0,
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@;",1,0],
                                   [/* Alpha */15,/* End_of_format */0]]],
                                 "%a@;%a"],
                                0,
                                li,
                                0,
                                po[1]);
                       }
                     else
                      {/* unknown */"(sendself self-1/1341 longident_loc/1073)";
                       return pp
                               (f,
                                [/* Format */0,
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@;",1,0],
                                   /* End_of_format */0]],
                                 "%a@;"],
                                0,
                                li);
                       }
                     }
                   
                  }
                
               case 6:
                var match$1=match[2];
                
                if(match$1)
                 {/* unknown */"(sendself self-1/1341 simple_pattern/1090)";
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<2>",/* End_of_format */0],
                               "<2>"]],
                             [/* Char_literal */12,
                              96,
                              [/* String */2,
                               /* No_padding */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]],
                            "@[<2>`%s@;%a@]"],
                           match[1],
                           0,
                           match$1[1]);
                  }
                else
                 {exit=118;}
                
               default:exit=118;}}
           
           switch(exit)
            {case 118:
              /* unknown */"(sendself self-1/1341 simple_pattern/1090 f/1342 x/1343)";
              
             }
           }
         },
       simple_pattern,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1356 pattern/1088 f/1357 x/1358)";}
         else
          {var match=x[1];
           
           var exit;
           
           if(typeof match==="number")
            {switch(match)
              {case 0:
                return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,95,/* End_of_format */0],
                          "_"]);
                
               }}
           else
            {switch(match[0])
              {case 0:return protect_ident(f,match[1][1]);
               case 1:exit=116;
               case 2:
                /* unknown */"(sendself self-1/1356 constant/1074)";
                return pp
                        (f,
                         [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                         0,
                         match[1]);
                
               case 3:
                /* unknown */"(sendself self-1/1356 constant/1074)";
                /* unknown */"(sendself self-1/1356 constant/1074)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Alpha */15,
                           [/* String_literal */11,
                            "..",
                            [/* Alpha */15,/* End_of_format */0]]],
                          "%a..%a"],
                         0,
                         match[1],
                         0,
                         match[2]);
                
               case 4:
                /* unknown */"(sendself self-1/1356 list/1069 [0: [0: [12: ',' 0a] \",\"]] 0a 0a\n  (sendself self-1/1356 pattern1/1089))";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<1>",/* End_of_format */0],
                             "<1>"]],
                           [/* Char_literal */12,
                            40,
                            [/* Alpha */15,
                             [/* Char_literal */12,
                              41,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<1>(%a)@]"],
                         0,
                         match[1]);
                
               case 5:
                var match$1=match[1][1];
                
                switch(match$1[0])
                 {case 0:
                   var x$1=match$1[1];
                   
                   var exit$1;
                   
                   switch(x$1)
                    {case "()":exit$1=117;
                     case "[]":exit$1=117;
                     default:exit=116;}
                   
                   switch(exit$1)
                    {case 117:
                      return pp
                              (f,
                               [/* Format */0,
                                [/* String */2,/* No_padding */0,/* End_of_format */0],
                                "%s"],
                               x$1);
                      
                     }
                   
                  case 1:exit=116;
                  case 2:exit=116;
                  }
                
               case 6:
                if(match[2])
                 {exit=116;}
                else
                 {return pp
                          (f,
                           [/* Format */0,
                            [/* Char_literal */12,
                             96,
                             [/* String */2,/* No_padding */0,/* End_of_format */0]],
                            "`%s"],
                           match[1]);
                  }
                
               case 7:
                var l=match[1];
                
                var
                 longident_x_pattern=
                  function(f,param)
                   {var p=param[2];
                    
                    var li=param[1];
                    
                    var match$2=p[1];
                    
                    var match$3=li[1];
                    
                    var exit$2;
                    
                    switch(match$3[0])
                     {case 0:
                       if(typeof match$2==="number")
                        {switch(match$2){}}
                       else
                        {switch(match$2[0])
                          {case 0:
                            if
                             (CamlPrimitive["caml_string_equal"]
                               (match$3[1],match$2[1][1]))
                             {/* unknown */"(sendself self-1/1356 longident_loc/1073)";
                              return pp
                                      (f,
                                       [/* Format */0,
                                        [/* Formatting_gen */18,
                                         [/* Open_box */1,
                                          [/* Format */0,
                                           [/* String_literal */11,"<2>",/* End_of_format */0],
                                           "<2>"]],
                                         [/* Alpha */15,
                                          [/* Formatting_lit */17,
                                           /* Close_box */0,
                                           /* End_of_format */0]]],
                                        "@[<2>%a@]"],
                                       0,
                                       li);
                              }
                            else
                             {exit$2=114;}
                            
                           default:exit$2=114;}}
                       
                      case 1:exit$2=114;
                      case 2:exit$2=114;
                      }
                    
                    switch(exit$2)
                     {case 114:
                       /* unknown */"(sendself self-1/1356 longident_loc/1073)";
                       /* unknown */"(sendself self-1/1356 pattern1/1089)";
                       return pp
                               (f,
                                [/* Format */0,
                                 [/* Formatting_gen */18,
                                  [/* Open_box */1,
                                   [/* Format */0,
                                    [/* String_literal */11,"<2>",/* End_of_format */0],
                                    "<2>"]],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* Char_literal */12,
                                     61,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@;",1,0],
                                      [/* Alpha */15,
                                       [/* Formatting_lit */17,
                                        /* Close_box */0,
                                        /* End_of_format */0]]]]]]],
                                 "@[<2>%a@;=@;%a@]"],
                                0,
                                li,
                                0,
                                p);
                       
                      }
                    };
                
                if(match[2]!==0)
                 {/* unknown */'(sendself self-1/1356 list/1069\n  [0: [0: [12: \';\' [17: [0: "@;" 1 0] 0a]] ";@;"]] 0a 0a\n  longident_x_pattern/1376)';
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<2>",/* End_of_format */0],
                               "<2>"]],
                             [/* Char_literal */12,
                              123,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Alpha */15,
                                [/* String_literal */11,
                                 ";_}",
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]],
                            "@[<2>{@;%a;_}@]"],
                           0,
                           l);
                  }
                else
                 {/* unknown */'(sendself self-1/1356 list/1069\n  [0: [0: [12: \';\' [17: [0: "@;" 1 0] 0a]] ";@;"]] 0a 0a\n  longident_x_pattern/1376)';
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<2>",/* End_of_format */0],
                               "<2>"]],
                             [/* Char_literal */12,
                              123,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 [/* Char_literal */12,
                                  125,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]]]],
                            "@[<2>{@;%a@;}@]"],
                           0,
                           l);
                  }
                
               case 8:
                /* unknown */"(sendself self-1/1356 list/1069 [0: [0: [12: ';' 0a] \";\"]] 0a 0a\n  (sendself self-1/1356 pattern1/1089))";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "[|",
                            [/* Alpha */15,
                             [/* String_literal */11,
                              "|]",
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<2>[|%a|]@]"],
                         0,
                         match[1]);
                
               case 9:exit=116;
               case 10:
                /* unknown */"(sendself self-1/1356 pattern1/1089)";
                /* unknown */"(sendself self-1/1356 core_type/1086)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Char_literal */12,
                            40,
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Char_literal */12,
                               58,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Alpha */15,
                                 [/* Char_literal */12,
                                  41,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]]]]]],
                          "@[<2>(%a@;:@;%a)@]"],
                         0,
                         match[1],
                         0,
                         match[2]);
                
               case 11:
                /* unknown */"(sendself self-1/1356 longident_loc/1073)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,
                           35,
                           [/* Alpha */15,/* End_of_format */0]],
                          "#%a"],
                         0,
                         match[1]);
                
               case 12:
                /* unknown */"(sendself self-1/1356 pattern1/1089)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "(lazy",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* Alpha */15,
                              [/* Char_literal */12,
                               41,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]],
                          "@[<2>(lazy@;%a)@]"],
                         0,
                         match[1]);
                
               case 13:
                return pp
                        (f,
                         [/* Format */0,
                          [/* String_literal */11,
                           "(module",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String */2,
                             /* No_padding */0,
                             [/* Char_literal */12,
                              41,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               /* End_of_format */0]]]]],
                          "(module@ %s)@ "],
                         match[1][1]);
                
               case 14:
                /* unknown */"(sendself self-1/1356 pattern1/1089)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "exception",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<2>exception@;%a@]"],
                         0,
                         match[1]);
                
               case 15:
                /* unknown */"(sendself self-1/1356 extension/1103 f/1357 (field 0 match/2552))";
                
               }}
           
           switch(exit)
            {case 116:
              /* unknown */"(sendself self-1/1356 paren/1071 0a 0a 1a (sendself self-1/1356 pattern/1088)\n  f/1357 x/1358)";
              
             }
           }
         },
       label_exp,
       function(self$neg1,f,param)
        {var p=param[3];
         
         var opt=param[2];
         
         var l=param[1];
         
         if(CamlPrimitive["caml_string_equal"](l,""))
          {/* unknown */"(sendself self-1/1383 simple_pattern/1090)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@ ",1,0],
                       /* End_of_format */0]],
                     "%a@ "],
                    0,
                    p);
           }
         else
          {if(l[0]===63)
            {var len=l["length"]-1;
             
             var rest=$$String["sub"](l,1,len);
             
             var match=p[1];
             
             var exit;
             
             if(typeof match==="number")
              {switch(match){}}
             else
              {switch(match[0])
                {case 0:
                  if(CamlPrimitive["caml_string_equal"](match[1][1],rest))
                   {if(opt)
                     {/* unknown */"(sendself self-1/1383 expression/1093)";
                      return pp
                              (f,
                               [/* Format */0,
                                [/* String_literal */11,
                                 "?(",
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,
                                   61,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* Alpha */15,
                                     [/* Char_literal */12,
                                      41,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@;",1,0],
                                       /* End_of_format */0]]]]]]],
                                "?(%s=@;%a)@;"],
                               rest,
                               0,
                               opt[1]);
                      }
                    else
                     {return pp
                              (f,
                               [/* Format */0,
                                [/* Char_literal */12,
                                 63,
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   /* End_of_format */0]]],
                                "?%s@ "],
                               rest);
                      }
                    }
                  else
                   {exit=110;}
                  
                 default:exit=110;}}
             
             switch(exit)
              {case 110:
                if(opt)
                 {/* unknown */"(sendself self-1/1383 pattern1/1089)";
                  /* unknown */"(sendself self-1/1383 expression/1093)";
                  return pp
                          (f,
                           [/* Format */0,
                            [/* String */2,
                             /* No_padding */0,
                             [/* String_literal */11,
                              ":(",
                              [/* Alpha */15,
                               [/* Char_literal */12,
                                61,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 [/* Alpha */15,
                                  [/* Char_literal */12,
                                   41,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    /* End_of_format */0]]]]]]]],
                            "%s:(%a=@;%a)@;"],
                           l,
                           0,
                           p,
                           0,
                           opt[1]);
                  }
                else
                 {/* unknown */"(sendself self-1/1383 simple_pattern/1090)";
                  return pp
                          (f,
                           [/* Format */0,
                            [/* String */2,
                             /* No_padding */0,
                             [/* Char_literal */12,
                              58,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                /* End_of_format */0]]]],
                            "%s:%a@;"],
                           l,
                           0,
                           p);
                  }
                
               }
             }
           else
            {var match$1=p[1];
             
             var exit$1;
             
             if(typeof match$1==="number")
              {switch(match$1){}}
             else
              {switch(match$1[0])
                {case 0:
                  if(CamlPrimitive["caml_string_equal"](match$1[1][1],l))
                   {return pp
                            (f,
                             [/* Format */0,
                              [/* Char_literal */12,
                               126,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 /* End_of_format */0]]],
                              "~%s@;"],
                             l);
                    }
                  else
                   {exit$1=109;}
                  
                 default:exit$1=109;}}
             
             switch(exit$1)
              {case 109:
                /* unknown */"(sendself self-1/1383 simple_pattern/1090)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,
                           126,
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             58,
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               /* End_of_format */0]]]]],
                          "~%s:%a@;"],
                         l,
                         0,
                         p);
                
               }
             }
           }
         },
       sugar_expr,
       function(self$neg1,f,e)
        {if(e[3]!==/* [] */0)
          {return /* false */0;}
         else
          {var match=e[1];
           
           var exit;
           
           switch(match[0])
            {case 5:
              var match$1=match[1][1];
              
              switch(match$1[0])
               {case 0:
                 var match$2=match$1[1][1];
                 
                 switch(match$2[0])
                  {case 0:
                    switch(match$2[1])
                     {case "!":
                       var match$3=match[2];
                       
                       if(match$3)
                        {if(match$3[2])
                          {exit=106;}
                         else
                          {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                           pp
                            (f,
                             [/* Format */0,
                              [/* Formatting_gen */18,
                               [/* Open_box */1,
                                [/* Format */0,
                                 [/* String_literal */11,"<hov>",/* End_of_format */0],
                                 "<hov>"]],
                               [/* Char_literal */12,
                                33,
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]],
                              "@[<hov>!%a@]"],
                             0,
                             match$3[1][2]);
                           return /* true */1;
                           }
                         }
                       else
                        {exit=106;}
                       
                      default:exit=106;}
                    
                   case 1:
                    var match$4=match$2[1];
                    
                    switch(match$4[0])
                     {case 0:
                       var s=match$4[1];
                       
                       var exit$1;
                       
                       switch(s)
                        {case "Array":exit$1=107;
                         case "String":exit$1=107;
                         default:exit=106;}
                       
                       switch(exit$1)
                        {case 107:
                          switch(match$2[2])
                           {case "get":
                             var match$5=match[2];
                             
                             if(match$5)
                              {var match$6=match$5[2];
                               
                               if(match$6)
                                {if(match$6[2])
                                  {exit=106;}
                                 else
                                  {if(CamlPrimitive["caml_string_equal"](s,"Array"))
                                    {var
                                      fmt=
                                       [/* Format */0,
                                        [/* Formatting_gen */18,
                                         [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                         [/* Alpha */15,
                                          [/* String_literal */11,
                                           ".(",
                                           [/* Alpha */15,
                                            [/* Char_literal */12,
                                             41,
                                             [/* Formatting_lit */17,
                                              /* Close_box */0,
                                              /* End_of_format */0]]]]]],
                                        "@[%a.(%a)@]"];
                                     }
                                   else
                                    {var
                                      fmt=
                                       [/* Format */0,
                                        [/* Formatting_gen */18,
                                         [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                         [/* Alpha */15,
                                          [/* String_literal */11,
                                           ".[",
                                           [/* Alpha */15,
                                            [/* Char_literal */12,
                                             93,
                                             [/* Formatting_lit */17,
                                              /* Close_box */0,
                                              /* End_of_format */0]]]]]],
                                        "@[%a.[%a]@]"];
                                     }
                                   
                                   /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                   /* unknown */"(sendself self-1/1395 expression/1093)";
                                   pp(f,fmt,0,match$5[1][2],0,match$6[1][2]);
                                   return /* true */1;
                                   }
                                 }
                               else
                                {exit=106;}
                               }
                             else
                              {exit=106;}
                             
                            case "set":
                             var match$7=match[2];
                             
                             if(match$7)
                              {var match$8=match$7[2];
                               
                               if(match$8)
                                {var match$9=match$8[2];
                                 
                                 if(match$9)
                                  {if(match$9[2])
                                    {exit=106;}
                                   else
                                    {if(CamlPrimitive["caml_string_equal"](s,"Array"))
                                      {var
                                        fmt$1=
                                         [/* Format */0,
                                          [/* Formatting_gen */18,
                                           [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                           [/* Alpha */15,
                                            [/* String_literal */11,
                                             ".(",
                                             [/* Alpha */15,
                                              [/* Char_literal */12,
                                               41,
                                               [/* Formatting_lit */17,
                                                [/* Break */0,"@ ",1,0],
                                                [/* String_literal */11,
                                                 "<-",
                                                 [/* Formatting_lit */17,
                                                  [/* Break */0,"@;",1,0],
                                                  [/* Alpha */15,
                                                   [/* Formatting_lit */17,
                                                    /* Close_box */0,
                                                    /* End_of_format */0]]]]]]]]]],
                                          "@[%a.(%a)@ <-@;%a@]"];
                                       }
                                     else
                                      {var
                                        fmt$1=
                                         [/* Format */0,
                                          [/* Formatting_gen */18,
                                           [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                           [/* Alpha */15,
                                            [/* String_literal */11,
                                             ".[",
                                             [/* Alpha */15,
                                              [/* Char_literal */12,
                                               93,
                                               [/* Formatting_lit */17,
                                                [/* Break */0,"@ ",1,0],
                                                [/* String_literal */11,
                                                 "<-",
                                                 [/* Formatting_lit */17,
                                                  [/* Break */0,"@;",1,0],
                                                  [/* Alpha */15,
                                                   [/* Formatting_lit */17,
                                                    /* Close_box */0,
                                                    /* End_of_format */0]]]]]]]]]],
                                          "@[%a.[%a]@ <-@;%a@]"];
                                       }
                                     
                                     /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                     /* unknown */"(sendself self-1/1395 expression/1093)";
                                     /* unknown */"(sendself self-1/1395 expression/1093)";
                                     pp(f,fmt$1,0,match$7[1][2],0,match$8[1][2],0,match$9[1][2]);
                                     return /* true */1;
                                     }
                                   }
                                 else
                                  {exit=106;}
                                 }
                               else
                                {exit=106;}
                               }
                             else
                              {exit=106;}
                             
                            default:exit=106;}
                          
                         }
                       
                      case 1:
                       var match$10=match$4[1];
                       
                       switch(match$10[0])
                        {case 0:
                          switch(match$10[1])
                           {case "Bigarray":
                             var gs=match$2[2];
                             
                             var exit$2;
                             
                             switch(gs)
                              {case "get":exit$2=108;
                               case "set":exit$2=108;
                               default:exit=106;}
                             
                             switch(exit$2)
                              {case 108:
                                var label_exprs=match[2];
                                
                                var exit$3;
                                
                                switch(match$4[2])
                                 {case "Array1":
                                   switch(gs)
                                    {case "get":
                                      if(label_exprs)
                                       {var match$11=label_exprs[2];
                                        
                                        if(match$11)
                                         {if(match$11[2])
                                           {exit$3=105;}
                                          else
                                           {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                            /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                            pp
                                             (f,
                                              [/* Format */0,
                                               [/* Formatting_gen */18,
                                                [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                [/* Alpha */15,
                                                 [/* String_literal */11,
                                                  ".{",
                                                  [/* Alpha */15,
                                                   [/* Char_literal */12,
                                                    125,
                                                    [/* Formatting_lit */17,
                                                     /* Close_box */0,
                                                     /* End_of_format */0]]]]]],
                                               "@[%a.{%a}@]"],
                                              0,
                                              label_exprs[1][2],
                                              0,
                                              match$11[1][2]);
                                            return /* true */1;
                                            }
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     case "set":
                                      if(label_exprs)
                                       {var match$12=label_exprs[2];
                                        
                                        if(match$12)
                                         {var match$13=match$12[2];
                                          
                                          if(match$13)
                                           {if(match$13[2])
                                             {exit$3=105;}
                                            else
                                             {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                              /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                              /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                              pp
                                               (f,
                                                [/* Format */0,
                                                 [/* Formatting_gen */18,
                                                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                  [/* Alpha */15,
                                                   [/* String_literal */11,
                                                    ".{",
                                                    [/* Alpha */15,
                                                     [/* Char_literal */12,
                                                      125,
                                                      [/* Formatting_lit */17,
                                                       [/* Break */0,"@ ",1,0],
                                                       [/* String_literal */11,
                                                        "<-",
                                                        [/* Formatting_lit */17,
                                                         [/* Break */0,"@ ",1,0],
                                                         [/* Alpha */15,
                                                          [/* Formatting_lit */17,
                                                           /* Close_box */0,
                                                           /* End_of_format */0]]]]]]]]]],
                                                 "@[%a.{%a}@ <-@ %a@]"],
                                                0,
                                                label_exprs[1][2],
                                                0,
                                                match$12[1][2],
                                                0,
                                                match$13[1][2]);
                                              return /* true */1;
                                              }
                                            }
                                          else
                                           {exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     default:exit$3=105;}
                                   
                                  case "Array2":
                                   switch(gs)
                                    {case "get":
                                      if(label_exprs)
                                       {var match$14=label_exprs[2];
                                        
                                        if(match$14)
                                         {var match$15=match$14[2];
                                          
                                          if(match$15)
                                           {if(match$15[2])
                                             {exit$3=105;}
                                            else
                                             {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                              /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                              /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                              pp
                                               (f,
                                                [/* Format */0,
                                                 [/* Formatting_gen */18,
                                                  [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                  [/* Alpha */15,
                                                   [/* String_literal */11,
                                                    ".{",
                                                    [/* Alpha */15,
                                                     [/* Char_literal */12,
                                                      44,
                                                      [/* Alpha */15,
                                                       [/* Char_literal */12,
                                                        125,
                                                        [/* Formatting_lit */17,
                                                         /* Close_box */0,
                                                         /* End_of_format */0]]]]]]]],
                                                 "@[%a.{%a,%a}@]"],
                                                0,
                                                label_exprs[1][2],
                                                0,
                                                match$14[1][2],
                                                0,
                                                match$15[1][2]);
                                              return /* true */1;
                                              }
                                            }
                                          else
                                           {exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     case "set":
                                      if(label_exprs)
                                       {var match$16=label_exprs[2];
                                        
                                        if(match$16)
                                         {var match$17=match$16[2];
                                          
                                          if(match$17)
                                           {var match$18=match$17[2];
                                            
                                            if(match$18)
                                             {if(match$18[2])
                                               {exit$3=105;}
                                              else
                                               {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                pp
                                                 (f,
                                                  [/* Format */0,
                                                   [/* Formatting_gen */18,
                                                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                    [/* Alpha */15,
                                                     [/* String_literal */11,
                                                      ".{",
                                                      [/* Alpha */15,
                                                       [/* Char_literal */12,
                                                        44,
                                                        [/* Alpha */15,
                                                         [/* Char_literal */12,
                                                          125,
                                                          [/* Formatting_lit */17,
                                                           [/* Break */0,"@ ",1,0],
                                                           [/* String_literal */11,
                                                            "<-",
                                                            [/* Formatting_lit */17,
                                                             [/* Break */0,"@ ",1,0],
                                                             [/* Alpha */15,
                                                              [/* Formatting_lit */17,
                                                               /* Close_box */0,
                                                               /* End_of_format */0]]]]]]]]]]]],
                                                   "@[%a.{%a,%a}@ <-@ %a@]"],
                                                  0,
                                                  label_exprs[1][2],
                                                  0,
                                                  match$16[1][2],
                                                  0,
                                                  match$17[1][2],
                                                  0,
                                                  match$18[1][2]);
                                                return /* true */1;
                                                }
                                              }
                                            else
                                             {exit$3=105;}
                                            }
                                          else
                                           {exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     default:exit$3=105;}
                                   
                                  case "Array3":
                                   switch(gs)
                                    {case "get":
                                      if(label_exprs)
                                       {var match$19=label_exprs[2];
                                        
                                        if(match$19)
                                         {var match$20=match$19[2];
                                          
                                          if(match$20)
                                           {var match$21=match$20[2];
                                            
                                            if(match$21)
                                             {if(match$21[2])
                                               {exit$3=105;}
                                              else
                                               {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                pp
                                                 (f,
                                                  [/* Format */0,
                                                   [/* Formatting_gen */18,
                                                    [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                    [/* Alpha */15,
                                                     [/* String_literal */11,
                                                      ".{",
                                                      [/* Alpha */15,
                                                       [/* Char_literal */12,
                                                        44,
                                                        [/* Alpha */15,
                                                         [/* Char_literal */12,
                                                          44,
                                                          [/* Alpha */15,
                                                           [/* Char_literal */12,
                                                            125,
                                                            [/* Formatting_lit */17,
                                                             /* Close_box */0,
                                                             /* End_of_format */0]]]]]]]]]],
                                                   "@[%a.{%a,%a,%a}@]"],
                                                  0,
                                                  label_exprs[1][2],
                                                  0,
                                                  match$19[1][2],
                                                  0,
                                                  match$20[1][2],
                                                  0,
                                                  match$21[1][2]);
                                                return /* true */1;
                                                }
                                              }
                                            else
                                             {exit$3=105;}
                                            }
                                          else
                                           {exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     case "set":
                                      if(label_exprs)
                                       {var match$22=label_exprs[2];
                                        
                                        if(match$22)
                                         {var match$23=match$22[2];
                                          
                                          if(match$23)
                                           {var match$24=match$23[2];
                                            
                                            if(match$24)
                                             {var match$25=match$24[2];
                                              
                                              if(match$25)
                                               {if(match$25[2])
                                                 {exit$3=105;}
                                                else
                                                 {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                  /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                  /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                  /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                  /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                  pp
                                                   (f,
                                                    [/* Format */0,
                                                     [/* Formatting_gen */18,
                                                      [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                      [/* Alpha */15,
                                                       [/* String_literal */11,
                                                        ".{",
                                                        [/* Alpha */15,
                                                         [/* Char_literal */12,
                                                          44,
                                                          [/* Alpha */15,
                                                           [/* Char_literal */12,
                                                            44,
                                                            [/* Alpha */15,
                                                             [/* Char_literal */12,
                                                              125,
                                                              [/* Formatting_lit */17,
                                                               [/* Break */0,"@ ",1,0],
                                                               [/* String_literal */11,
                                                                "<-",
                                                                [/* Formatting_lit */17,
                                                                 [/* Break */0,"@ ",1,0],
                                                                 [/* Alpha */15,
                                                                  [/* Formatting_lit */17,
                                                                   /* Close_box */0,
                                                                   /* End_of_format */0]]]]]]]]]]]]]],
                                                     "@[%a.{%a,%a,%a}@ <-@ %a@]"],
                                                    0,
                                                    label_exprs[1][2],
                                                    0,
                                                    match$22[1][2],
                                                    0,
                                                    match$23[1][2],
                                                    0,
                                                    match$24[1][2],
                                                    0,
                                                    match$25[1][2]);
                                                  return /* true */1;
                                                  }
                                                }
                                              else
                                               {exit$3=105;}
                                              }
                                            else
                                             {exit$3=105;}
                                            }
                                          else
                                           {exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     default:exit$3=105;}
                                   
                                  case "Genarray":
                                   switch(gs)
                                    {case "get":
                                      if(label_exprs)
                                       {var match$26=label_exprs[2];
                                        
                                        if(match$26)
                                         {var match$27=match$26[1][2][1];
                                          
                                          switch(match$27[0])
                                           {case 14:
                                             if(match$26[2])
                                              {exit$3=105;}
                                             else
                                              {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                               /* unknown */"(sendself self-1/1395 list/1069 [0: [0: [12: ',' 0a] \",\"]] 0a 0a\n  (sendself self-1/1395 simple_expr/1096))";
                                               pp
                                                (f,
                                                 [/* Format */0,
                                                  [/* Formatting_gen */18,
                                                   [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                   [/* Alpha */15,
                                                    [/* String_literal */11,
                                                     ".{",
                                                     [/* Alpha */15,
                                                      [/* Char_literal */12,
                                                       125,
                                                       [/* Formatting_lit */17,
                                                        /* Close_box */0,
                                                        /* End_of_format */0]]]]]],
                                                  "@[%a.{%a}@]"],
                                                 0,
                                                 label_exprs[1][2],
                                                 0,
                                                 match$27[1]);
                                               return /* true */1;
                                               }
                                             
                                            default:exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     case "set":
                                      if(label_exprs)
                                       {var match$28=label_exprs[2];
                                        
                                        if(match$28)
                                         {var match$29=match$28[1][2][1];
                                          
                                          switch(match$29[0])
                                           {case 14:
                                             var match$30=match$28[2];
                                             
                                             if(match$30)
                                              {if(match$30[2])
                                                {exit$3=105;}
                                               else
                                                {/* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                 /* unknown */"(sendself self-1/1395 list/1069 [0: [0: [12: ',' 0a] \",\"]] 0a 0a\n  (sendself self-1/1395 simple_expr/1096))";
                                                 /* unknown */"(sendself self-1/1395 simple_expr/1096)";
                                                 pp
                                                  (f,
                                                   [/* Format */0,
                                                    [/* Formatting_gen */18,
                                                     [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                                                     [/* Alpha */15,
                                                      [/* String_literal */11,
                                                       ".{",
                                                       [/* Alpha */15,
                                                        [/* Char_literal */12,
                                                         125,
                                                         [/* Formatting_lit */17,
                                                          [/* Break */0,"@ ",1,0],
                                                          [/* String_literal */11,
                                                           "<-",
                                                           [/* Formatting_lit */17,
                                                            [/* Break */0,"@ ",1,0],
                                                            [/* Alpha */15,
                                                             [/* Formatting_lit */17,
                                                              /* Close_box */0,
                                                              /* End_of_format */0]]]]]]]]]],
                                                    "@[%a.{%a}@ <-@ %a@]"],
                                                   0,
                                                   label_exprs[1][2],
                                                   0,
                                                   match$29[1],
                                                   0,
                                                   match$30[1][2]);
                                                 return /* true */1;
                                                 }
                                               }
                                             else
                                              {exit$3=105;}
                                             
                                            default:exit$3=105;}
                                          }
                                        else
                                         {exit$3=105;}
                                        }
                                      else
                                       {exit$3=105;}
                                      
                                     default:exit$3=105;}
                                   
                                  default:exit$3=105;}
                                
                                switch(exit$3){case 105:return /* false */0;}
                                
                               }
                             
                            default:exit=106;}
                          
                         case 1:exit=106;
                         case 2:exit=106;
                         }
                       
                      case 2:exit=106;
                      }
                    
                   case 2:exit=106;
                   }
                 
                default:exit=106;}
              
             default:exit=106;}
           
           switch(exit){case 106:return /* false */0;}
           }
         },
       expression,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1438 expression/1093)";
           /* unknown */"(sendself self-1/1438 attributes/1097)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "((",
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]],
                     "((%a)%a)"],
                    0,
                    /* record */[0,x[1],x[2],/* [] */0],
                    0,
                    x[3]);
           }
         else
          {var match=x[1];
           
           var exit;
           
           switch(match[0])
            {case 2:exit=102;
             case 3:exit=101;
             case 4:exit=101;
             case 5:
              var l=match[2];
              
              var e=match[1];
              
              /* unknown */"(sendself self-1/1438 sugar_expr/1092 f/1439 x/1440)";
              if(!0)
               {var match$1=view_fixity_of_exp(e);
                
                var exit$1;
                
                if(typeof match$1==="number")
                 {exit$1=91;}
                else
                 {var variant=match$1[1];
                  
                  if(variant!==-784100624)
                   {if(variant!==-481604174)
                     {exit$1=91;}
                    else
                     {var s=match$1[2];
                      
                      if
                       (List["mem"]
                         (s,
                          [/* :: */0,
                           "~+",
                           [/* :: */0,
                            "~-",
                            [/* :: */0,"~+.",[/* :: */0,"~-.",/* [] */0]]]]))
                       {var s$1=$$String["sub"](s,1,s["length"]-1);}
                      else
                       {var s$1=s;}
                      
                      var exit$2;
                      
                      if(l)
                       {if(l[2])
                         {exit$2=89;}
                        else
                         {/* unknown */"(sendself self-1/1438 label_x_expression_param/1128)";
                          return pp
                                  (f,
                                   [/* Format */0,
                                    [/* Formatting_gen */18,
                                     [/* Open_box */1,
                                      [/* Format */0,
                                       [/* String_literal */11,"<2>",/* End_of_format */0],
                                       "<2>"]],
                                     [/* String */2,
                                      /* No_padding */0,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@;",1,0],
                                       [/* Alpha */15,
                                        [/* Formatting_lit */17,
                                         /* Close_box */0,
                                         /* End_of_format */0]]]]],
                                    "@[<2>%s@;%a@]"],
                                   s$1,
                                   0,
                                   l[1]);
                          }
                        }
                      else
                       {exit$2=89;}
                      
                      switch(exit$2)
                       {case 89:
                         /* unknown */"(sendself self-1/1438 list/1069 0a 0a 0a\n  (sendself self-1/1438 label_x_expression_param/1128))";
                         return pp
                                 (f,
                                  [/* Format */0,
                                   [/* Formatting_gen */18,
                                    [/* Open_box */1,
                                     [/* Format */0,
                                      [/* String_literal */11,"<2>",/* End_of_format */0],
                                      "<2>"]],
                                    [/* String */2,
                                     /* No_padding */0,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@;",1,0],
                                      [/* Alpha */15,
                                       [/* Formatting_lit */17,
                                        /* Close_box */0,
                                        /* End_of_format */0]]]]],
                                   "@[<2>%s@;%a@]"],
                                  s$1,
                                  0,
                                  l);
                         
                        }
                      }
                    }
                  else
                   {var exit$3;
                    
                    if(l)
                     {var match$2=l[2];
                      
                      if(match$2)
                       {if(match$2[2])
                         {exit$3=88;}
                        else
                         {/* unknown */"(send (sendself self-1/1438 reset/1068) 199524600)";
                          /* unknown */"(sendself self-1/1438 label_x_expression_param/1128)";
                          return pp
                                  (f,
                                   [/* Format */0,
                                    [/* Formatting_gen */18,
                                     [/* Open_box */1,
                                      [/* Format */0,
                                       [/* String_literal */11,"<2>",/* End_of_format */0],
                                       "<2>"]],
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@;",1,0],
                                       [/* String */2,
                                        /* No_padding */0,
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@;",1,0],
                                         [/* Alpha */15,
                                          [/* Formatting_lit */17,
                                           /* Close_box */0,
                                           /* End_of_format */0]]]]]]],
                                    "@[<2>%a@;%s@;%a@]"],
                                   0,
                                   l[1],
                                   match$1[2],
                                   0,
                                   match$2[1]);
                          }
                        }
                      else
                       {exit$3=88;}
                      }
                    else
                     {exit$3=88;}
                    
                    switch(exit$3)
                     {case 88:
                       /* unknown */"(sendself self-1/1438 simple_expr/1096)";
                       /* unknown */"(sendself self-1/1438 list/1069 0a 0a 0a\n  (sendself self-1/1438 label_x_expression_param/1128))";
                       return pp
                               (f,
                                [/* Format */0,
                                 [/* Formatting_gen */18,
                                  [/* Open_box */1,
                                   [/* Format */0,
                                    [/* String_literal */11,"<2>",/* End_of_format */0],
                                    "<2>"]],
                                  [/* Alpha */15,
                                   [/* Char_literal */12,
                                    32,
                                    [/* Alpha */15,
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      /* End_of_format */0]]]]],
                                 "@[<2>%a %a@]"],
                                0,
                                e,
                                0,
                                l);
                       
                      }
                    }
                  }
                
                switch(exit$1)
                 {case 91:
                   return pp
                           (f,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<hov2>",/* End_of_format */0],
                                "<hov2>"]],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]],
                             "@[<hov2>%a@]"],
                            function(f,param)
                             {/* unknown */"(sendself self-1/1438 expression2/1095)";
                              /* unknown */"(sendself self-1/1438 list/1069 0a 0a 0a\n  (send (sendself self-1/1438 reset/1068) 199524600))";
                              return pp
                                      (f,
                                       [/* Format */0,
                                        [/* Alpha */15,
                                         [/* Formatting_lit */17,
                                          [/* Break */0,"@ ",1,0],
                                          [/* Alpha */15,/* End_of_format */0]]],
                                        "%a@ %a"],
                                       0,
                                       param[1],
                                       0,
                                       param[2]);
                              },
                            /* tuple */[0,e,l]);
                   
                  }
                }
              else
               {return 0;}
              
             case 6:exit=101;
             case 7:exit=101;
             case 9:
              var match$3=match[2];
              
              if(match$3)
               {if(!is_simple_construct(view_expr(x)))
                 {var match$4=view_expr(x);
                  
                  var exit$4;
                  
                  if(typeof match$4==="number")
                   {if(match$4!==812216871)
                     {exit$4=92;}
                    else
                     {/* unknown */"(sendself self-1/1438 longident_loc/1073)";
                      /* unknown */"(sendself self-1/1438 simple_expr/1096)";
                      return pp
                              (f,
                               [/* Format */0,
                                [/* Formatting_gen */18,
                                 [/* Open_box */1,
                                  [/* Format */0,
                                   [/* String_literal */11,"<2>",/* End_of_format */0],
                                   "<2>"]],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@;",1,0],
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     /* Close_box */0,
                                     /* End_of_format */0]]]]],
                                "@[<2>%a@;%a@]"],
                               0,
                               match[1],
                               0,
                               match$3[1]);
                      }
                    }
                  else
                   {if(match$4[1]!==-1044071951)
                     {exit$4=92;}
                    else
                     {/* unknown */'(sendself self-1/1438 list/1069\n  [0: [0: [17: [0: "@;" 1 0] [11: "::" [17: [0: "@;" 1 0] 0a]]] "@;::@;"]] 0a\n  0a (sendself self-1/1438 simple_expr/1096) f/1439 (field 1 match/2336))';
                      }
                    }
                  
                  switch(exit$4)
                   {case 92:
                     throw [0,
                            CamlPrimitive["caml_global_data"]["Assert_failure"],
                            [0,"parsing/pprintast.ml",584,15]];
                     
                    }
                  }
                else
                 {exit=97;}
                }
              else
               {exit=97;}
              
             case 10:
              var match$5=match[2];
              
              if(match$5)
               {/* unknown */"(sendself self-1/1438 simple_expr/1096)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* Char_literal */12,
                            96,
                            [/* String */2,
                             /* No_padding */0,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]],
                          "@[<2>`%s@;%a@]"],
                         match[1],
                         0,
                         match$5[1]);
                }
              else
               {exit=97;}
              
             case 13:
              /* unknown */"(sendself self-1/1438 simple_expr/1096)";
              /* unknown */"(sendself self-1/1438 longident_loc/1073)";
              /* unknown */"(sendself self-1/1438 expression/1093)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<2>",/* End_of_format */0],
                           "<2>"]],
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           46,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String_literal */11,
                              "<-",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]],
                        "@[<2>%a.%a@ <-@ %a@]"],
                       0,
                       match[1],
                       0,
                       match[2],
                       0,
                       match[3]);
              
             case 15:exit=100;
             case 16:exit=101;
             case 22:
              /* unknown */"(sendself self-1/1438 longident_loc/1073)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String_literal */11,
                          "new",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>new@ %a@]"],
                       0,
                       match[1]);
              
             case 23:
              /* unknown */"(sendself self-1/1438 expression/1093)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String */2,
                          /* No_padding */0,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "<-",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]],
                        "@[<hov2>%s@ <-@ %a@]"],
                       match[1][1],
                       0,
                       match[2]);
              
             case 24:
              var
               string_x_expression=
                function(f,param)
                 {/* unknown */"(sendself self-1/1438 expression/1093)";
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<hov2>",/* End_of_format */0],
                               "<hov2>"]],
                             [/* String */2,
                              /* No_padding */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Char_literal */12,
                                61,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]]]],
                            "@[<hov2>%s@ =@ %a@]"],
                           param[1][1],
                           0,
                           param[2]);
                  };
              
              /* unknown */"(sendself self-1/1438 list/1069 [0: [0: [12: ';' 0a] \";\"]] 0a 0a\n  string_x_expression/1501)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String_literal */11,
                          "{<",
                          [/* Alpha */15,
                           [/* String_literal */11,
                            ">}",
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>{<%a>}@]"],
                       0,
                       match[1]);
              
             case 25:exit=102;
             case 26:
              /* unknown */"(sendself self-1/1438 simple_expr/1096)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String_literal */11,
                          "assert",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>assert@ %a@]"],
                       0,
                       match[1]);
              
             case 27:
              /* unknown */"(sendself self-1/1438 simple_expr/1096)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String_literal */11,
                          "lazy",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>lazy@ %a@]"],
                       0,
                       match[1]);
              
             case 28:
              var match$6=match[2];
              
              var e$1=match[1];
              
              if(match$6)
               {/* unknown */"(sendself self-1/1438 simple_expr/1096)";
                /* unknown */"(sendself self-1/1438 core_type/1086)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* String_literal */11,
                            "(!poly!",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* String_literal */11,
                                ": ",
                                [/* Alpha */15,
                                 [/* Char_literal */12,
                                  41,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]]]]]],
                          "@[<hov2>(!poly!@ %a@ : %a)@]"],
                         0,
                         e$1,
                         0,
                         match$6[1]);
                }
              else
               {/* unknown */"(sendself self-1/1438 simple_expr/1096)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* String_literal */11,
                            "!poly!",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<hov2>!poly!@ %a@]"],
                         0,
                         e$1);
                }
              
             case 32:
              /* unknown */"(sendself self-1/1438 longident_loc/1073)";
              /* unknown */"(sendself self-1/1438 expression/1093)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<2>",/* End_of_format */0],
                           "<2>"]],
                         [/* String_literal */11,
                          "let open",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,
                            32,
                            [/* Alpha */15,
                             [/* String_literal */11,
                              " in",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]],
                        "@[<2>let open%s %a in@;%a@]"],
                       override(match[1]),
                       0,
                       match[2],
                       0,
                       match[3]);
              
             case 33:
              /* unknown */"(sendself self-1/1438 extension/1103 f/1439 (field 0 match/2345))";
              
             default:exit=97;}
           
           switch(exit)
            {case 101:
              if(self$neg1[pipe+1]||self$neg1[semi+1])
               {/* unknown */"(sendself self-1/1438 paren/1071 0a 0a 1a\n  (send (sendself self-1/1438 reset/1068) 782176664) f/1439 x/1440)";
                }
              else
               {exit=100;}
              
             case 102:
              if(self$neg1[semi+1])
               {/* unknown */"(sendself self-1/1438 paren/1071 0a 0a 1a\n  (send (sendself self-1/1438 reset/1068) 782176664) f/1439 x/1440)";
                }
              else
               {exit=100;}
              
             case 100:
              var exit$5;
              
              switch(match[0])
               {case 2:
                 /* unknown */"(send (sendself self-1/1438 reset/1068) -928231026)";
                 /* unknown */"(sendself self-1/1438 expression/1093)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<2>",/* End_of_format */0],
                              "<2>"]],
                            [/* Alpha */15,
                             [/* String_literal */11,
                              " in",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;<1 -2>",1,-2],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]],
                           "@[<2>%a in@;<1 -2>%a@]"],
                          0,
                          /* tuple */[0,match[1],match[2]],
                          0,
                          match[3]);
                 
                case 3:
                 /* unknown */"(sendself self-1/1438 case_list/1127)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<hv>",/* End_of_format */0],
                              "<hv>"]],
                            [/* String_literal */11,
                             "function",
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]],
                           "@[<hv>function%a@]"],
                          0,
                          match[1]);
                 
                case 4:
                 /* unknown */"(sendself self-1/1438 label_exp/1091)";
                 /* unknown */"(sendself self-1/1438 expression/1093)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<2>",/* End_of_format */0],
                              "<2>"]],
                            [/* String_literal */11,
                             "fun",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* String_literal */11,
                                 "->",
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@;",1,0],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    /* End_of_format */0]]]]]]]]],
                           "@[<2>fun@;%a@;->@;%a@]"],
                          0,
                          /* tuple */[0,match[1],match[2],match[3]],
                          0,
                          match[4]);
                 
                case 6:
                 /* unknown */"(send (sendself self-1/1438 reset/1068) 782176664)";
                 /* unknown */"(sendself self-1/1438 case_list/1127)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<hv0>",/* End_of_format */0],
                              "<hv0>"]],
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<hv0>",/* End_of_format */0],
                               "<hv0>"]],
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<2>",/* End_of_format */0],
                                "<2>"]],
                              [/* String_literal */11,
                               "match ",
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* String_literal */11,
                                   "with",
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    [/* Alpha */15,
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      /* End_of_format */0]]]]]]]]]]],
                           "@[<hv0>@[<hv0>@[<2>match %a@]@ with@]%a@]"],
                          0,
                          match[1],
                          0,
                          match[2]);
                 
                case 7:
                 /* unknown */"(send (sendself self-1/1438 reset/1068) 782176664)";
                 /* unknown */"(sendself self-1/1438 case_list/1127)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<0>",/* End_of_format */0],
                              "<0>"]],
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<hv2>",/* End_of_format */0],
                               "<hv2>"]],
                             [/* String_literal */11,
                              "try",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Formatting_gen */18,
                                   [/* Open_box */1,
                                    [/* Format */0,
                                     [/* String_literal */11,"<0>",/* End_of_format */0],
                                     "<0>"]],
                                   [/* String_literal */11,
                                    "with",
                                    [/* Alpha */15,
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      [/* Formatting_lit */17,
                                       /* Close_box */0,
                                       /* End_of_format */0]]]]]]]]]]]],
                           "@[<0>@[<hv2>try@ %a@]@ @[<0>with%a@]@]"],
                          0,
                          match[1],
                          0,
                          match[2]);
                 
                case 15:exit$5=99;
                case 16:exit$5=99;
                case 25:
                 /* unknown */"(send (sendself self-1/1438 reset/1068) 748778728)";
                 /* unknown */"(sendself self-1/1438 expression/1093)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<hov2>",/* End_of_format */0],
                              "<hov2>"]],
                            [/* String_literal */11,
                             "let",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String_literal */11,
                               "module",
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Char_literal */12,
                                   61,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@ ",1,0],
                                    [/* Alpha */15,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@ ",1,0],
                                      [/* String_literal */11,
                                       "in",
                                       [/* Formatting_lit */17,
                                        [/* Break */0,"@ ",1,0],
                                        [/* Alpha */15,
                                         [/* Formatting_lit */17,
                                          /* Close_box */0,
                                          /* End_of_format */0]]]]]]]]]]]]]]],
                           "@[<hov2>let@ module@ %s@ =@ %a@ in@ %a@]"],
                          match[1][1],
                          0,
                          match[2],
                          0,
                          match[3]);
                 
                }
              
              switch(exit$5)
               {case 99:
                 if(self$neg1[ifthenelse+1])
                  {/* unknown */"(sendself self-1/1438 paren/1071 0a 0a 1a\n  (send (sendself self-1/1438 reset/1068) 782176664) f/1439 x/1440)";
                   }
                 else
                  {switch(match[0])
                    {case 15:
                      var
                       fmt=
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<hv0>",/* End_of_format */0],
                            "<hv0>"]],
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "if",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Formatting_gen */18,
                                 [/* Open_box */1,
                                  [/* Format */0,
                                   [/* String_literal */11,"<2>",/* End_of_format */0],
                                   "<2>"]],
                                 [/* String_literal */11,
                                  "then",
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     /* Close_box */0,
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       /* Close_box */0,
                                       /* End_of_format */0]]]]]]]]]]]]]],
                         "@[<hv0>@[<2>if@ %a@]@;@[<2>then@ %a@]%a@]"];
                      
                      /* unknown */"(send (sendself self-1/1438 under_ifthenelse/1064) 782176664)";
                      /* unknown */"(send (sendself self-1/1438 under_ifthenelse/1064) 782176664)";
                      return pp
                              (f,
                               fmt,
                               0,
                               match[1],
                               0,
                               match[2],
                               function(f,eo)
                                {if(eo)
                                  {/* unknown */"(send (sendself self-1/1438 under_semi/1063) 782176664)";
                                   return pp
                                           (f,
                                            [/* Format */0,
                                             [/* Formatting_lit */17,
                                              [/* Break */0,"@;",1,0],
                                              [/* Formatting_gen */18,
                                               [/* Open_box */1,
                                                [/* Format */0,
                                                 [/* String_literal */11,"<2>",/* End_of_format */0],
                                                 "<2>"]],
                                               [/* String_literal */11,
                                                "else",
                                                [/* Formatting_lit */17,
                                                 [/* Break */0,"@;",1,0],
                                                 [/* Alpha */15,
                                                  [/* Formatting_lit */17,
                                                   /* Close_box */0,
                                                   /* End_of_format */0]]]]]],
                                             "@;@[<2>else@;%a@]"],
                                            0,
                                            eo[1]);
                                   }
                                 else
                                  {return /* () */0;}
                                 },
                               match[3]);
                      
                     case 16:
                      var
                       sequence_helper=
                        function(acc,v)
                         {var match$7=v[1];
                          
                          switch(match$7[0])
                           {case 16:
                             return sequence_helper
                                     (/* :: */[0,match$7[1],acc],match$7[2]);
                             
                            default:return List["rev"](/* :: */[0,v,acc]);}
                          };
                      
                      var lst=sequence_helper(/* [] */0,x);
                      
                      /* unknown */'(sendself self-1/1438 list/1069\n  [0: [0: [12: \';\' [17: [0: "@;" 1 0] 0a]] ";@;"]] 0a 0a\n  (send (sendself self-1/1438 under_semi/1063) 782176664))';
                      return pp
                              (f,
                               [/* Format */0,
                                [/* Formatting_gen */18,
                                 [/* Open_box */1,
                                  [/* Format */0,
                                   [/* String_literal */11,"<hv>",/* End_of_format */0],
                                   "<hv>"]],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]],
                                "@[<hv>%a@]"],
                               0,
                               lst);
                      
                     }
                   }
                 
                }
              
             case 97:
              /* unknown */"(sendself self-1/1438 expression1/1094 f/1439 x/1440)";
              
             }
           }
         },
       expression1,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1506 expression/1093 f/1507 x/1508)";
           }
         else
          {var match=x[1];
           
           switch(match[0])
            {case 29:
              /* unknown */"(sendself self-1/1506 class_structure/1110)";
              return pp
                      (f,
                       [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                       0,
                       match[1]);
              
             default:
              /* unknown */"(sendself self-1/1506 expression2/1095 f/1507 x/1508)";
              }
           }
         },
       expression2,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1511 expression/1093 f/1512 x/1513)";
           }
         else
          {var match=x[1];
           
           switch(match[0])
            {case 12:
              /* unknown */"(sendself self-1/1511 simple_expr/1096)";
              /* unknown */"(sendself self-1/1511 longident_loc/1073)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           46,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>%a.%a@]"],
                       0,
                       match[1],
                       0,
                       match[2]);
              
             case 21:
              /* unknown */"(sendself self-1/1511 simple_expr/1096)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           35,
                           [/* String */2,
                            /* No_padding */0,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>%a#%s@]"],
                       0,
                       match[1],
                       match[2]);
              
             default:
              /* unknown */"(sendself self-1/1511 simple_expr/1096 f/1512 x/1513)";
              }
           }
         },
       simple_expr,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1519 expression/1093 f/1520 x/1521)";
           }
         else
          {var match=x[1];
           
           var exit;
           
           switch(match[0])
            {case 0:
              /* unknown */"(sendself self-1/1519 longident_loc/1073 f/1520 (field 0 match/2314))";
              
             case 1:
              /* unknown */"(sendself self-1/1519 constant/1074 f/1520 (field 0 match/2314))";
              
             case 8:
              /* unknown */'(sendself self-1/1519 list/1069\n  [0: [0: [12: \',\' [17: [0: "@;" 1 0] 0a]] ",@;"]] 0a 0a\n  (sendself self-1/1519 simple_expr/1096))';
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* Char_literal */12,
                          40,
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            41,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]],
                        "@[<hov2>(%a)@]"],
                       0,
                       match[1]);
              
             case 9:
              if(is_simple_construct(view_expr(x)))
               {var match$1=view_expr(x);
                
                var exit$1;
                
                if(typeof match$1==="number")
                 {if(match$1!==5493713)
                   {if(match$1!==405183496)
                     {exit$1=80;}
                    else
                     {return pp
                              (f,
                               [/* Format */0,
                                [/* String_literal */11,"()",/* End_of_format */0],
                                "()"]);
                      }
                    }
                  else
                   {return pp
                            (f,
                             [/* Format */0,
                              [/* String_literal */11,"[]",/* End_of_format */0],
                              "[]"]);
                    }
                  }
                else
                 {var variant=match$1[1];
                  
                  if(variant!==-944563106)
                   {if(variant!==947848242)
                     {exit$1=80;}
                    else
                     {/* unknown */"(sendself self-1/1519 longident/1072 f/1520 (field 1 match/2307))";
                      }
                    }
                  else
                   {/* unknown */'(sendself self-1/1519 list/1069\n  [0: [0: [12: \';\' [17: [0: "@;" 1 0] 0a]] ";@;"]] 0a 0a\n  (send (sendself self-1/1519 under_semi/1063) 782176664))';
                    return pp
                            (f,
                             [/* Format */0,
                              [/* Formatting_gen */18,
                               [/* Open_box */1,
                                [/* Format */0,
                                 [/* String_literal */11,"<hv0>",/* End_of_format */0],
                                 "<hv0>"]],
                               [/* Char_literal */12,
                                91,
                                [/* Alpha */15,
                                 [/* Char_literal */12,
                                  93,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]],
                              "@[<hv0>[%a]@]"],
                             0,
                             match$1[2]);
                    }
                  }
                
                switch(exit$1)
                 {case 80:
                   throw [0,
                          CamlPrimitive["caml_global_data"]["Assert_failure"],
                          [0,"parsing/pprintast.ml",652,15]];
                   
                  }
                }
              else
               {exit=85;}
              
             case 10:
              if(match[2])
               {exit=85;}
              else
               {return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,
                           96,
                           [/* String */2,/* No_padding */0,/* End_of_format */0]],
                          "`%s"],
                         match[1]);
                }
              
             case 11:
              var
               longident_x_expression=
                function(f,param)
                 {var e=param[2];
                  
                  var li=param[1];
                  
                  var match$2=e[1];
                  
                  var exit$2;
                  
                  switch(match$2[0])
                   {case 0:
                     if(CamlPrimitive["caml_equal"](li[1],match$2[1][1]))
                      {/* unknown */"(sendself self-1/1519 longident_loc/1073)";
                       return pp
                               (f,
                                [/* Format */0,
                                 [/* Formatting_gen */18,
                                  [/* Open_box */1,
                                   [/* Format */0,
                                    [/* String_literal */11,"<hov2>",/* End_of_format */0],
                                    "<hov2>"]],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    /* End_of_format */0]]],
                                 "@[<hov2>%a@]"],
                                0,
                                li);
                       }
                     else
                      {exit$2=81;}
                     
                    default:exit$2=81;}
                  
                  switch(exit$2)
                   {case 81:
                     /* unknown */"(sendself self-1/1519 longident_loc/1073)";
                     /* unknown */"(sendself self-1/1519 simple_expr/1096)";
                     return pp
                             (f,
                              [/* Format */0,
                               [/* Formatting_gen */18,
                                [/* Open_box */1,
                                 [/* Format */0,
                                  [/* String_literal */11,"<hov2>",/* End_of_format */0],
                                  "<hov2>"]],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@;",1,0],
                                  [/* Char_literal */12,
                                   61,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* Alpha */15,
                                     [/* Formatting_lit */17,
                                      /* Close_box */0,
                                      /* End_of_format */0]]]]]]],
                               "@[<hov2>%a@;=@;%a@]"],
                              0,
                              li,
                              0,
                              e);
                     
                    }
                  };
              
              /* unknown */'(sendself self-1/1519 option/1070 0a\n  [0: [0: [11: " with" [17: [0: "@;" 1 0] 0a]] " with@;"]]\n  (sendself self-1/1519 simple_expr/1096))';
              /* unknown */'(sendself self-1/1519 list/1069\n  [0: [0: [12: \';\' [17: [0: "@;" 1 0] 0a]] ";@;"]] 0a 0a\n  longident_x_expression/1546)';
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hv0>",/* End_of_format */0],
                           "<hv0>"]],
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<hv2>",/* End_of_format */0],
                            "<hv2>"]],
                          [/* Char_literal */12,
                           123,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@;",1,0],
                            [/* Alpha */15,
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Char_literal */12,
                                 125,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  /* End_of_format */0]]]]]]]]]],
                        "@[<hv0>@[<hv2>{@;%a%a@]@;}@]"],
                       0,
                       match[2],
                       0,
                       match[1]);
              
             case 14:
              /* unknown */"(sendself self-1/1519 list/1069 [0: [0: [12: ';' 0a] \";\"]] 0a 0a\n  (send (sendself self-1/1519 under_semi/1063) -57040990))";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<0>",/* End_of_format */0],
                           "<0>"]],
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "[|",
                           [/* Alpha */15,
                            [/* String_literal */11,
                             "|]",
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]],
                        "@[<0>@[<2>[|%a|]@]@]"],
                       0,
                       match[1]);
              
             case 17:
              var
               fmt=
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<2>",/* End_of_format */0],
                    "<2>"]],
                  [/* String_literal */11,
                   "while",
                   [/* Formatting_lit */17,
                    [/* Break */0,"@;",1,0],
                    [/* Alpha */15,
                     [/* Formatting_lit */17,
                      [/* Break */0,"@;",1,0],
                      [/* String_literal */11,
                       "do",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@;",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* String_literal */11,
                           "done",
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]]]],
                 "@[<2>while@;%a@;do@;%a@;done@]"];
              
              /* unknown */"(sendself self-1/1519 expression/1093)";
              /* unknown */"(sendself self-1/1519 expression/1093)";
              return pp(f,fmt,0,match[1],0,match[2]);
              
             case 18:
              var
               fmt$1=
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<hv0>",/* End_of_format */0],
                    "<hv0>"]],
                  [/* Formatting_gen */18,
                   [/* Open_box */1,
                    [/* Format */0,
                     [/* String_literal */11,"<hv2>",/* End_of_format */0],
                     "<hv2>"]],
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "for ",
                     [/* Alpha */15,
                      [/* String_literal */11,
                       " =",
                       [/* Formatting_lit */17,
                        [/* Break */0,"@;",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* Alpha */15,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String_literal */11,
                              "do",
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@;",1,0],
                                   [/* String_literal */11,
                                    "done",
                                    [/* Formatting_lit */17,
                                     /* Close_box */0,
                                     /* End_of_format */0]]]]]]]]]]]]]]]]]]]],
                 "@[<hv0>@[<hv2>@[<2>for %a =@;%a@;%a%a@;do@]@;%a@]@;done@]"];
              
              /* unknown */"(sendself self-1/1519 pattern/1088)";
              /* unknown */"(sendself self-1/1519 expression/1093)";
              /* unknown */"(sendself self-1/1519 direction_flag/1079)";
              /* unknown */"(sendself self-1/1519 expression/1093)";
              /* unknown */"(sendself self-1/1519 expression/1093)";
              return pp
                      (f,
                       fmt$1,
                       0,
                       match[1],
                       0,
                       match[2],
                       0,
                       match[4],
                       0,
                       match[3],
                       0,
                       match[5]);
              
             case 19:
              /* unknown */"(sendself self-1/1519 expression/1093)";
              /* unknown */"(sendself self-1/1519 core_type/1086)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Char_literal */12,
                         40,
                         [/* Alpha */15,
                          [/* String_literal */11,
                           " : ",
                           [/* Alpha */15,
                            [/* Char_literal */12,41,/* End_of_format */0]]]]],
                        "(%a : %a)"],
                       0,
                       match[1],
                       0,
                       match[2]);
              
             case 20:
              /* unknown */"(sendself self-1/1519 expression/1093)";
              /* unknown */'(sendself self-1/1519 option/1070 [0: [0: [11: " : " 0a] " : "]]\n  [0: [0: [12: \' \' 0a] " "]] (sendself self-1/1519 core_type/1086))';
              /* unknown */"(sendself self-1/1519 core_type/1086)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Char_literal */12,
                         40,
                         [/* Alpha */15,
                          [/* Alpha */15,
                           [/* String_literal */11,
                            " :> ",
                            [/* Alpha */15,
                             [/* Char_literal */12,41,/* End_of_format */0]]]]]],
                        "(%a%a :> %a)"],
                       0,
                       match[1],
                       0,
                       match[2],
                       0,
                       match[3]);
              
             case 30:
              /* unknown */"(sendself self-1/1519 expression/1093)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String_literal */11,
                         "fun",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* String_literal */11,
                           "(type",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@;",1,0],
                            [/* String */2,
                             /* No_padding */0,
                             [/* Char_literal */12,
                              41,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* String_literal */11,
                                "->",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                        "fun@;(type@;%s)@;->@;%a"],
                       match[1],
                       0,
                       match[2]);
              
             case 31:
              /* unknown */"(sendself self-1/1519 module_expr/1115)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String_literal */11,
                         "(module",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,41,/* End_of_format */0]]]],
                        "(module@;%a)"],
                       0,
                       match[1]);
              
             default:exit=85;}
           
           switch(exit)
            {case 85:
              /* unknown */"(sendself self-1/1519 paren/1071 0a 0a 1a\n  (sendself self-1/1519 expression/1093) f/1520 x/1521)";
              
             }
           }
         },
       attributes,
       function(self$neg1,f,l)
        {/* unknown */"(sendself self-1/1554 attribute/1099 f/1555)";
         return List["iter"](0,l);
         },
       item_attributes,
       function(self$neg1,f,l)
        {/* unknown */"(sendself self-1/1558 item_attribute/1100 f/1559)";
         return List["iter"](0,l);
         },
       attribute,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1562 payload/1117)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* Char_literal */12,
                     91,
                     [/* Formatting_lit */17,
                      /* Escaped_at */5,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Char_literal */12,
                          93,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[<2>[@@%s@ %a]@]"],
                  param[1][1],
                  0,
                  param[2]);
         },
       item_attribute,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1567 payload/1117)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* Char_literal */12,
                     91,
                     [/* Formatting_lit */17,
                      /* Escaped_at */5,
                      [/* Formatting_lit */17,
                       /* Escaped_at */5,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           93,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]],
                   "@[<2>[@@@@%s@ %a]@]"],
                  param[1][1],
                  0,
                  param[2]);
         },
       floating_attribute,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1572 payload/1117)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* Char_literal */12,
                     91,
                     [/* Formatting_lit */17,
                      /* Escaped_at */5,
                      [/* Formatting_lit */17,
                       /* Escaped_at */5,
                       [/* Formatting_lit */17,
                        /* Escaped_at */5,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,
                            93,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]],
                   "@[<2>[@@@@@@%s@ %a]@]"],
                  param[1][1],
                  0,
                  param[2]);
         },
       value_description,
       function(self$neg1,f,x)
        {/* unknown */"(sendself self-1/1577 core_type/1086)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hov2>",/* End_of_format */0],
                      "<hov2>"]],
                    [/* Alpha */15,
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]],
                   "@[<hov2>%a%a@]"],
                  0,
                  x[2],
                  function(f,x)
                   {if(x[3]!==/* [] */0)
                     {/* unknown */"(sendself self-1/1577 list/1069 0a 0a 0a\n  (sendself self-1/1577 constant_string/1081))";
                      return pp
                              (f,
                               [/* Format */0,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Char_literal */12,
                                  61,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,/* End_of_format */0]]]],
                                "@ =@ %a"],
                               0,
                               x[3]);
                      }
                    else
                     {return 0;}
                    },
                  x);
         },
       extension,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1583 payload/1117)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* Char_literal */12,
                     91,
                     [/* Char_literal */12,
                      37,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Alpha */15,
                         [/* Char_literal */12,
                          93,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           /* End_of_format */0]]]]]]]],
                   "@[<2>[%%%s@ %a]@]"],
                  param[1][1],
                  0,
                  param[2]);
         },
       item_extension,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1588 payload/1117)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* Char_literal */12,
                     91,
                     [/* Char_literal */12,
                      37,
                      [/* Char_literal */12,
                       37,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           93,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]]]]],
                   "@[<2>[%%%%%s@ %a]@]"],
                  param[1][1],
                  0,
                  param[2]);
         },
       exception_declaration,
       function(self$neg1,f,ext)
        {/* unknown */"(sendself self-1/1593 extension_constructor/1126)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hov2>",/* End_of_format */0],
                      "<hov2>"]],
                    [/* String_literal */11,
                     "exception",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[<hov2>exception@ %a@]"],
                  0,
                  ext);
         },
       class_signature,
       function(self$neg1,f,param)
        {var
          class_type_field=
           function(f,x)
            {var match=x[1];
             
             switch(match[0])
              {case 0:
                /* unknown */"(sendself self-1/1597 class_type/1107)";
                /* unknown */"(sendself self-1/1597 item_attributes/1098)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "inherit",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Alpha */15,/* End_of_format */0]]]]]],
                          "@[<2>inherit@ %a@]%a"],
                         0,
                         match[1],
                         0,
                         x[3]);
                
               case 1:
                var match$1=match[1];
                
                /* unknown */"(sendself self-1/1597 mutable_flag/1075)";
                /* unknown */"(sendself self-1/1597 virtual_flag/1076)";
                /* unknown */"(sendself self-1/1597 core_type/1086)";
                /* unknown */"(sendself self-1/1597 item_attributes/1098)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "val ",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Alpha */15,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Char_literal */12,
                                  58,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     /* Close_box */0,
                                     [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]],
                          "@[<2>val @ %a%a%s@ :@ %a@]%a"],
                         0,
                         match$1[2],
                         0,
                         match$1[3],
                         match$1[1],
                         0,
                         match$1[4],
                         0,
                         x[3]);
                
               case 2:
                var match$2=match[1];
                
                /* unknown */"(sendself self-1/1597 private_flag/1080)";
                /* unknown */"(sendself self-1/1597 virtual_flag/1076)";
                /* unknown */"(sendself self-1/1597 core_type/1086)";
                /* unknown */"(sendself self-1/1597 item_attributes/1098)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "method ",
                            [/* Alpha */15,
                             [/* Char_literal */12,
                              32,
                              [/* Alpha */15,
                               [/* String */2,
                                /* No_padding */0,
                                [/* String_literal */11,
                                 " :",
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@;",1,0],
                                  [/* Alpha */15,
                                   [/* Formatting_lit */17,
                                    /* Close_box */0,
                                    [/* Alpha */15,/* End_of_format */0]]]]]]]]]]],
                          "@[<2>method %a %a%s :@;%a@]%a"],
                         0,
                         match$2[2],
                         0,
                         match$2[3],
                         match$2[1],
                         0,
                         match$2[4],
                         0,
                         x[3]);
                
               case 3:
                var match$3=match[1];
                
                /* unknown */"(sendself self-1/1597 core_type/1086)";
                /* unknown */"(sendself self-1/1597 core_type/1086)";
                /* unknown */"(sendself self-1/1597 item_attributes/1098)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String_literal */11,
                            "constraint",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Char_literal */12,
                                61,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                          "@[<2>constraint@ %a@ =@ %a@]%a"],
                         0,
                         match$3[1],
                         0,
                         match$3[2],
                         0,
                         x[3]);
                
               case 4:
                /* unknown */"(sendself self-1/1597 floating_attribute/1101 f/1602 (field 0 match/2286))";
                
               case 5:
                /* unknown */"(sendself self-1/1597 item_extension/1104 f/1602 (field 0 match/2286))";
                
                /* unknown */"(sendself self-1/1597 item_attributes/1098 f/1602 (field 2 x/1603))";
                
               }
             };
         
         /* unknown */'(sendself self-1/1597 list/1069 [0: [0: [17: [0: "@;" 1 0] 0a] "@;"]] 0a 0a\n  class_type_field/1601)';
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hv0>",/* End_of_format */0],
                      "<hv0>"]],
                    [/* Formatting_gen */18,
                     [/* Open_box */1,
                      [/* Format */0,
                       [/* String_literal */11,"<hv2>",/* End_of_format */0],
                       "<hv2>"]],
                     [/* String_literal */11,
                      "object",
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<1>",/* End_of_format */0],
                         "<1>"]],
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String_literal */11,
                              "end",
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]]]]]]]]],
                   "@[<hv0>@[<hv2>object@[<1>%a@]@ %a@]@ end@]"],
                  function(f,ct)
                   {var match=ct[1];
                    
                    if(typeof match==="number")
                     {return /* () */0;}
                    else
                     {/* unknown */"(sendself self-1/1597 core_type/1086)";
                      return pp
                              (f,
                               [/* Format */0,
                                [/* String_literal */11,
                                 " (",
                                 [/* Alpha */15,
                                  [/* Char_literal */12,41,/* End_of_format */0]]],
                                " (%a)"],
                               0,
                               ct);
                      }
                    },
                  param[1],
                  0,
                  param[2]);
         },
       class_type,
       function(self$neg1,f,x)
        {var match=x[1];
         
         switch(match[0])
          {case 0:
            /* unknown */"(sendself self-1/1620 longident_loc/1073)";
            /* unknown */"(sendself self-1/1620 attributes/1097)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Alpha */15,
                       [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]]],
                      "%a%a%a"],
                     function(f,l)
                      {if(l)
                        {/* unknown */"(sendself self-1/1620 list/1069 [0: [0: [12: ',' 0a] \",\"]] 0a 0a\n  (sendself self-1/1620 core_type/1086))";
                         return pp
                                 (f,
                                  [/* Format */0,
                                   [/* Char_literal */12,
                                    91,
                                    [/* Alpha */15,
                                     [/* Char_literal */12,
                                      93,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@ ",1,0],
                                       /* End_of_format */0]]]],
                                   "[%a]@ "],
                                  0,
                                  l);
                         }
                       else
                        {return /* () */0;}
                       },
                     match[2],
                     0,
                     match[1],
                     0,
                     x[3]);
            
           case 1:
            /* unknown */"(sendself self-1/1620 class_signature/1106 f/1621 (field 0 match/2280))";
            
            /* unknown */"(sendself self-1/1620 attributes/1097 f/1621 (field 2 x/1622))";
            
           case 2:
            /* unknown */"(sendself self-1/1620 type_with_label/1085)";
            /* unknown */"(sendself self-1/1620 class_type/1107)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@;",1,0],
                         [/* String_literal */11,
                          "->",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]],
                      "@[<2>%a@;->@;%a@]"],
                     0,
                     /* tuple */[0,match[1],match[2]],
                     0,
                     match[3]);
            
           case 3:
            /* unknown */"(sendself self-1/1620 extension/1103 f/1621 (field 0 match/2280))";
            
            /* unknown */"(sendself self-1/1620 attributes/1097 f/1621 (field 2 x/1622))";
            
           }
         },
       class_type_declaration_list,
       function(self$neg1,f,l)
        {var
          class_type_declaration=
           function(kwd,f,x)
            {/* unknown */"(sendself self-1/1633 virtual_flag/1076)";
             /* unknown */"(sendself self-1/1633 class_params_def/1084)";
             /* unknown */"(sendself self-1/1633 class_type/1107)";
             /* unknown */"(sendself self-1/1633 item_attributes/1098)";
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          32,
                          [/* Alpha */15,
                           [/* Alpha */15,
                            [/* String */2,
                             /* No_padding */0,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Char_literal */12,
                               61,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]],
                       "@[<2>%s %a%a%s@ =@ %a@]%a"],
                      kwd,
                      0,
                      x[1],
                      0,
                      x[2],
                      x[3][1],
                      0,
                      x[4],
                      0,
                      x[6]);
             };
         
         if(l)
          {var xs=l[2];
           
           var x=l[1];
           
           if(xs)
            {/* unknown */'(sendself self-1/1633 list/1069 [0: [0: [17: [0: "@," 0 0] 0a] "@,"]] 0a 0a\n  (apply class_type_declaration/1636 "and"))';
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<v>",/* End_of_format */0],
                          "<v>"]],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@,",0,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]],
                       "@[<v>%a@,%a@]"],
                      class_type_declaration("class type"),
                      x,
                      0,
                      xs);
             }
           else
            {return class_type_declaration("class type",f,x);}
           }
         else
          {return /* () */0;}
         },
       class_field,
       function(self$neg1,f,x)
        {var match=x[1];
         
         switch(match[0])
          {case 0:
            /* unknown */"(sendself self-1/1646 class_expr/1111)";
            /* unknown */"(sendself self-1/1646 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* String_literal */11,
                        "inherit",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String */2,
                          /* No_padding */0,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Alpha */15,/* End_of_format */0]]]]]]]]],
                      "@[<2>inherit@ %s@ %a%a@]%a"],
                     override(match[1]),
                     0,
                     match[2],
                     function(f,so)
                      {if(so)
                        {return pp
                                 (f,
                                  [/* Format */0,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@ ",1,0],
                                    [/* String_literal */11,
                                     "as ",
                                     [/* String */2,/* No_padding */0,/* End_of_format */0]]],
                                   "@ as %s"],
                                  so[1]);
                         }
                       else
                        {return /* () */0;}
                       },
                     match[3],
                     0,
                     x[3]);
            
           case 1:
            var match$1=match[1];
            
            var match$2=match$1[3];
            
            var mf=match$1[2];
            
            var s=match$1[1];
            
            switch(match$2[0])
             {case 0:
               /* unknown */"(sendself self-1/1646 mutable_flag/1075)";
               /* unknown */"(sendself self-1/1646 core_type/1086)";
               /* unknown */"(sendself self-1/1646 item_attributes/1098)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "val virtual ",
                           [/* Alpha */15,
                            [/* String */2,
                             /* No_padding */0,
                             [/* String_literal */11,
                              " :",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 [/* Alpha */15,/* End_of_format */0]]]]]]]]],
                         "@[<2>val virtual %a%s :@ %a@]%a"],
                        0,
                        mf,
                        s[1],
                        0,
                        match$2[1],
                        0,
                        x[3]);
               
              case 1:
               /* unknown */"(sendself self-1/1646 mutable_flag/1075)";
               /* unknown */"(sendself self-1/1646 expression/1093)";
               /* unknown */"(sendself self-1/1646 item_attributes/1098)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "val",
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             32,
                             [/* Alpha */15,
                              [/* String */2,
                               /* No_padding */0,
                               [/* String_literal */11,
                                " =",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 [/* Alpha */15,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   [/* Alpha */15,/* End_of_format */0]]]]]]]]]]],
                         "@[<2>val%s %a%s =@;%a@]%a"],
                        override(match$2[1]),
                        0,
                        mf,
                        s[1],
                        0,
                        match$2[2],
                        0,
                        x[3]);
               
              }
            
           case 2:
            var match$3=match[1];
            
            var match$4=match$3[3];
            
            var pf=match$3[2];
            
            var s$1=match$3[1];
            
            switch(match$4[0])
             {case 0:
               /* unknown */"(sendself self-1/1646 private_flag/1080)";
               /* unknown */"(sendself self-1/1646 core_type/1086)";
               /* unknown */"(sendself self-1/1646 item_attributes/1098)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "method virtual ",
                           [/* Alpha */15,
                            [/* Char_literal */12,
                             32,
                             [/* String */2,
                              /* No_padding */0,
                              [/* String_literal */11,
                               " :",
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                         "@[<2>method virtual %a %s :@;%a@]%a"],
                        0,
                        pf,
                        s$1[1],
                        0,
                        match$4[1],
                        0,
                        x[3]);
               
              case 1:
               var
                bind=
                 function(e)
                  {/* unknown */"(sendself self-1/1646 binding/1118 f/1647\n  (makeblock 0\n    (makeblock 0 (makeblock 0 s/1656) (field 0 (global Location!)) 0a) e/1675\n    0a (field 0 (global Location!))))";
                   };
               
               /* unknown */"(sendself self-1/1646 private_flag/1080)";
               /* unknown */"(sendself self-1/1646 item_attributes/1098)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* String_literal */11,
                           "method",
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             32,
                             [/* Alpha */15,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                [/* Alpha */15,/* End_of_format */0]]]]]]]],
                         "@[<2>method%s %a%a@]%a"],
                        override(match$4[1]),
                        0,
                        pf,
                        function(f,e)
                         {var match$5=e[1];
                          
                          switch(match$5[0])
                           {case 28:
                             var match$6=match$5[2];
                             
                             var e$1=match$5[1];
                             
                             if(match$6)
                              {/* unknown */"(sendself self-1/1646 core_type/1086)";
                               /* unknown */"(sendself self-1/1646 expression/1093)";
                               return pp
                                       (f,
                                        [/* Format */0,
                                         [/* String */2,
                                          /* No_padding */0,
                                          [/* String_literal */11,
                                           " :",
                                           [/* Formatting_lit */17,
                                            [/* Break */0,"@;",1,0],
                                            [/* Alpha */15,
                                             [/* Char_literal */12,
                                              61,
                                              [/* Formatting_lit */17,
                                               [/* Break */0,"@;",1,0],
                                               [/* Alpha */15,/* End_of_format */0]]]]]]],
                                         "%s :@;%a=@;%a"],
                                        s$1[1],
                                        0,
                                        match$6[1],
                                        0,
                                        e$1);
                               }
                             else
                              {return bind(e$1);}
                             
                            default:return bind(e);}
                          },
                        match$4[2],
                        0,
                        x[3]);
               
              }
            
           case 3:
            var match$5=match[1];
            
            /* unknown */"(sendself self-1/1646 core_type/1086)";
            /* unknown */"(sendself self-1/1646 core_type/1086)";
            /* unknown */"(sendself self-1/1646 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* String_literal */11,
                        "constraint ",
                        [/* Alpha */15,
                         [/* String_literal */11,
                          " =",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             [/* Alpha */15,/* End_of_format */0]]]]]]]],
                      "@[<2>constraint %a =@;%a@]%a"],
                     0,
                     match$5[1],
                     0,
                     match$5[2],
                     0,
                     x[3]);
            
           case 4:
            /* unknown */"(sendself self-1/1646 expression/1093)";
            /* unknown */"(sendself self-1/1646 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* String_literal */11,
                        "initializer",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Alpha */15,/* End_of_format */0]]]]]],
                      "@[<2>initializer@ %a@]%a"],
                     0,
                     match[1],
                     0,
                     x[3]);
            
           case 5:
            /* unknown */"(sendself self-1/1646 floating_attribute/1101 f/1647 (field 0 match/2263))";
            
           case 6:
            /* unknown */"(sendself self-1/1646 item_extension/1104 f/1647 (field 0 match/2263))";
            
            /* unknown */"(sendself self-1/1646 item_attributes/1098 f/1647 (field 2 x/1648))";
            
           }
         },
       class_structure,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1682 list/1069 0a 0a 0a\n  (sendself self-1/1682 class_field/1109))";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<hv0>",/* End_of_format */0],
                      "<hv0>"]],
                    [/* Formatting_gen */18,
                     [/* Open_box */1,
                      [/* Format */0,
                       [/* String_literal */11,"<hv2>",/* End_of_format */0],
                       "<hv2>"]],
                     [/* String_literal */11,
                      "object",
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@;",1,0],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* String_literal */11,
                            "end",
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]]]]]]]]],
                   "@[<hv0>@[<hv2>object%a@;%a@]@;end@]"],
                  function(f,p)
                   {var match=p[1];
                    
                    if(typeof match==="number")
                     {switch(match){case 0:return /* () */0;}}
                    else
                     {switch(match[0])
                       {case 10:
                         /* unknown */"(sendself self-1/1682 pattern/1088)";
                         return pp
                                 (f,
                                  [/* Format */0,
                                   [/* Char_literal */12,
                                    32,
                                    [/* Alpha */15,/* End_of_format */0]],
                                   " %a"],
                                  0,
                                  p);
                         
                        default:
                         /* unknown */"(sendself self-1/1682 pattern/1088)";
                         return pp
                                 (f,
                                  [/* Format */0,
                                   [/* String_literal */11,
                                    " (",
                                    [/* Alpha */15,
                                     [/* Char_literal */12,41,/* End_of_format */0]]],
                                   " (%a)"],
                                  0,
                                  p);
                         }}
                    },
                  param[1],
                  0,
                  param[2]);
         },
       class_expr,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1689 class_expr/1111)";
           /* unknown */"(sendself self-1/1689 attributes/1097)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "((",
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]],
                     "((%a)%a)"],
                    0,
                    /* record */[0,x[1],x[2],/* [] */0],
                    0,
                    x[3]);
           }
         else
          {var match=x[1];
           
           switch(match[0])
            {case 0:
              /* unknown */"(sendself self-1/1689 longident_loc/1073)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]],
                        "%a%a"],
                       function(f,l)
                        {if(l!==/* [] */0)
                          {/* unknown */"(sendself self-1/1689 list/1069 [0: [0: [12: ',' 0a] \",\"]] 0a 0a\n  (sendself self-1/1689 core_type/1086))";
                           return pp
                                   (f,
                                    [/* Format */0,
                                     [/* Char_literal */12,
                                      91,
                                      [/* Alpha */15,
                                       [/* Char_literal */12,
                                        93,
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@ ",1,0],
                                         /* End_of_format */0]]]],
                                     "[%a]@ "],
                                    0,
                                    l);
                           }
                         else
                          {return 0;}
                         },
                       match[2],
                       0,
                       match[1]);
              
             case 1:
              /* unknown */"(sendself self-1/1689 class_structure/1110 f/1690 (field 0 match/2247))";
              
             case 2:
              /* unknown */"(sendself self-1/1689 label_exp/1091)";
              /* unknown */"(sendself self-1/1689 class_expr/1111)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String_literal */11,
                         "fun",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String_literal */11,
                             "->",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Alpha */15,/* End_of_format */0]]]]]]],
                        "fun@ %a@ ->@ %a"],
                       0,
                       /* tuple */[0,match[1],match[2],match[3]],
                       0,
                       match[4]);
              
             case 3:
              /* unknown */"(sendself self-1/1689 class_expr/1111)";
              /* unknown */"(sendself self-1/1689 list/1069 0a 0a 0a\n  (sendself self-1/1689 label_x_expression_param/1128))";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Char_literal */12,
                         40,
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Char_literal */12,41,/* End_of_format */0]]]]],
                        "(%a@ %a)"],
                       0,
                       match[1],
                       0,
                       match[2]);
              
             case 4:
              /* unknown */"(sendself self-1/1689 bindings/1119)";
              /* unknown */"(sendself self-1/1689 class_expr/1111)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "in",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Alpha */15,/* End_of_format */0]]]]],
                        "%a@ in@ %a"],
                       0,
                       /* tuple */[0,match[1],match[2]],
                       0,
                       match[3]);
              
             case 5:
              /* unknown */"(sendself self-1/1689 class_expr/1111)";
              /* unknown */"(sendself self-1/1689 class_type/1107)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Char_literal */12,
                         40,
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Char_literal */12,
                            58,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Char_literal */12,41,/* End_of_format */0]]]]]]],
                        "(%a@ :@ %a)"],
                       0,
                       match[1],
                       0,
                       match[2]);
              
             case 6:
              /* unknown */"(sendself self-1/1689 extension/1103 f/1690 (field 0 match/2247))";
              
             }
           }
         },
       module_type,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1710 module_type/1112)";
           /* unknown */"(sendself self-1/1710 attributes/1097)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "((",
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]],
                     "((%a)%a)"],
                    0,
                    /* record */[0,x[1],x[2],/* [] */0],
                    0,
                    x[3]);
           }
         else
          {var match=x[1];
           
           switch(match[0])
            {case 0:
              /* unknown */"(sendself self-1/1710 longident_loc/1073)";
              return pp
                      (f,
                       [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                       0,
                       match[1]);
              
             case 1:
              /* unknown */"(sendself self-1/1710 list/1069 0a 0a 0a\n  (sendself self-1/1710 signature_item/1114))";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hv0>",/* End_of_format */0],
                           "<hv0>"]],
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<hv2>",/* End_of_format */0],
                            "<hv2>"]],
                          [/* String_literal */11,
                           "sig",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* String_literal */11,
                                "end",
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]],
                        "@[<hv0>@[<hv2>sig@ %a@]@ end@]"],
                       0,
                       match[1]);
              
             case 2:
              var match$1=match[2];
              
              if(match$1)
               {/* unknown */"(sendself self-1/1710 module_type/1112)";
                /* unknown */"(sendself self-1/1710 module_type/1112)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* String_literal */11,
                            "functor",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Char_literal */12,
                              40,
                              [/* String */2,
                               /* No_padding */0,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Char_literal */12,
                                 58,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@ ",1,0],
                                  [/* Alpha */15,
                                   [/* Char_literal */12,
                                    41,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* String_literal */11,
                                      "->",
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@ ",1,0],
                                       [/* Alpha */15,
                                        [/* Formatting_lit */17,
                                         /* Close_box */0,
                                         /* End_of_format */0]]]]]]]]]]]]]]],
                          "@[<hov2>functor@ (%s@ :@ %a)@ ->@ %a@]"],
                         match[1][1],
                         0,
                         match$1[1],
                         0,
                         match[3]);
                }
              else
               {/* unknown */"(sendself self-1/1710 module_type/1112)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* String_literal */11,
                            "functor () ->",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<hov2>functor () ->@ %a@]"],
                         0,
                         match[3]);
                }
              
             case 3:
              var l=match[2];
              
              var mt=match[1];
              
              var
               with_constraint=
                function(f,param)
                 {switch(param[0])
                   {case 0:
                     var td=param[2];
                     
                     var ls=List["map"](function(prim){return prim[1];},td[2]);
                     
                     /* unknown */"(sendself self-1/1710 list/1069 [0: [0: [12: ',' 0a] \",\"]]\n  [0: [0: [12: '(' 0a] \"(\"]] [0: [0: [12: ')' 0a] \")\"]]\n  (sendself self-1/1710 core_type/1086))";
                     /* unknown */"(sendself self-1/1710 longident_loc/1073)";
                     /* unknown */"(sendself self-1/1710 type_declaration/1124)";
                     return pp
                             (f,
                              [/* Format */0,
                               [/* String_literal */11,
                                "type",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Char_literal */12,
                                   32,
                                   [/* Alpha */15,
                                    [/* String_literal */11,
                                     " =",
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@ ",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]]]]]]],
                               "type@ %a %a =@ %a"],
                              0,
                              ls,
                              0,
                              param[1],
                              0,
                              td);
                     
                    case 1:
                     /* unknown */"(sendself self-1/1710 longident_loc/1073)";
                     /* unknown */"(sendself self-1/1710 longident_loc/1073)";
                     return pp
                             (f,
                              [/* Format */0,
                               [/* String_literal */11,
                                "module ",
                                [/* Alpha */15,
                                 [/* String_literal */11,
                                  " =",
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,/* End_of_format */0]]]]],
                               "module %a =@ %a"],
                              0,
                              param[1],
                              0,
                              param[2]);
                     
                    case 2:
                     var td$1=param[1];
                     
                     var
                      ls$1=
                       List["map"](function(prim){return prim[1];},td$1[2]);
                     
                     /* unknown */"(sendself self-1/1710 list/1069 [0: [0: [12: ',' 0a] \",\"]]\n  [0: [0: [12: '(' 0a] \"(\"]] [0: [0: [12: ')' 0a] \")\"]]\n  (sendself self-1/1710 core_type/1086))";
                     /* unknown */"(sendself self-1/1710 type_declaration/1124)";
                     return pp
                             (f,
                              [/* Format */0,
                               [/* String_literal */11,
                                "type",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Char_literal */12,
                                   32,
                                   [/* String */2,
                                    /* No_padding */0,
                                    [/* String_literal */11,
                                     " :=",
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@ ",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]]]]]]],
                               "type@ %a %s :=@ %a"],
                              0,
                              ls$1,
                              td$1[1][1],
                              0,
                              td$1);
                     
                    case 3:
                     /* unknown */"(sendself self-1/1710 longident_loc/1073)";
                     return pp
                             (f,
                              [/* Format */0,
                               [/* String_literal */11,
                                "module ",
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* String_literal */11,
                                  " :=",
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Alpha */15,/* End_of_format */0]]]]],
                               "module %s :=@ %a"],
                              param[1][1],
                              0,
                              param[2]);
                     
                    }
                  };
              
              if(l)
               {/* unknown */"(sendself self-1/1710 module_type/1112)";
                /* unknown */'(sendself self-1/1710 list/1069\n  [0: [0: [17: [0: "@ " 1 0] [11: "and" [17: [0: "@ " 1 0] 0a]]] "@ and@ "]]\n  0a 0a with_constraint/1724)';
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* Char_literal */12,
                            40,
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String_literal */11,
                               "with",
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,
                                 [/* Char_literal */12,
                                  41,
                                  [/* Formatting_lit */17,
                                   /* Close_box */0,
                                   /* End_of_format */0]]]]]]]]],
                          "@[<hov2>(%a@ with@ %a)@]"],
                         0,
                         mt,
                         0,
                         l);
                }
              else
               {/* unknown */"(sendself self-1/1710 module_type/1112)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<hov2>",/* End_of_format */0],
                             "<hov2>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             /* End_of_format */0]]],
                          "@[<hov2>%a@]"],
                         0,
                         mt);
                }
              
             case 4:
              /* unknown */"(sendself self-1/1710 module_expr/1115)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String_literal */11,
                          "module",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String_literal */11,
                            "type",
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* String_literal */11,
                              "of",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]],
                        "@[<hov2>module@ type@ of@ %a@]"],
                       0,
                       match[1]);
              
             case 5:
              /* unknown */"(sendself self-1/1710 extension/1103 f/1711 (field 0 match/2242))";
              
             case 6:
              /* unknown */"(sendself self-1/1710 longident_loc/1073)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String_literal */11,
                         "(module ",
                         [/* Alpha */15,
                          [/* Char_literal */12,41,/* End_of_format */0]]],
                        "(module %a)"],
                       0,
                       match[1]);
              
             }
           }
         },
       signature,
       function(self$neg1,f,x)
        {/* unknown */'(sendself self-1/1738 list/1069 [0: [0: [17: 3a 0a] "@\n"]] 0a 0a\n  (sendself self-1/1738 signature_item/1114) f/1739 x/1740)';
         },
       signature_item,
       function(self$neg1,f,x)
        {var match=x[1];
         
         switch(match[0])
          {case 0:
            var vd=match[1];
            
            if(vd[3]===/* [] */0){var intro="val";}else{var intro="external";}
            
            /* unknown */"(sendself self-1/1742 value_description/1102)";
            /* unknown */"(sendself self-1/1742 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* String */2,
                        /* No_padding */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Char_literal */12,
                            58,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                      "@[<2>%s@ %a@ :@ %a@]%a"],
                     intro,
                     protect_ident,
                     vd[1][1],
                     0,
                     vd,
                     0,
                     vd[4]);
            
           case 1:
            /* unknown */"(sendself self-1/1742 type_def_list/1123 f/1743 (field 0 match/2207))";
            
           case 2:
            /* unknown */"(sendself self-1/1742 type_extension/1125 f/1743 (field 0 match/2207))";
            
           case 3:
            /* unknown */"(sendself self-1/1742 exception_declaration/1105 f/1743 (field 0 match/2207))";
            
           case 4:
            var pmd=match[1];
            
            var match$1=pmd[2][1];
            
            switch(match$1[0])
             {case 6:
               /* unknown */"(sendself self-1/1742 longident_loc/1073)";
               /* unknown */"(sendself self-1/1742 item_attributes/1098)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<hov>",/* End_of_format */0],
                            "<hov>"]],
                          [/* String_literal */11,
                           "module",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String */2,
                             /* No_padding */0,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Char_literal */12,
                               61,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                         "@[<hov>module@ %s@ =@ %a@]%a"],
                        pmd[1][1],
                        0,
                        match$1[1],
                        0,
                        pmd[3]);
               
              default:
               /* unknown */"(sendself self-1/1742 module_type/1112)";
               /* unknown */"(sendself self-1/1742 item_attributes/1098)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<hov>",/* End_of_format */0],
                            "<hov>"]],
                          [/* String_literal */11,
                           "module",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String */2,
                             /* No_padding */0,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Char_literal */12,
                               58,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  /* Close_box */0,
                                  [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                         "@[<hov>module@ %s@ :@ %a@]%a"],
                        pmd[1][1],
                        0,
                        pmd[2],
                        0,
                        pmd[3]);
               }
            
           case 5:
            var
             string_x_module_type_list=
              function(f,$staropt$star,l)
               {if($staropt$star)
                 {var first=$staropt$star[1];}
                else
                 {var first=/* true */1;}
                
                if(l)
                 {var pmd$1=l[1];
                  
                  if(!first)
                   {/* unknown */"(sendself self-1/1742 module_type/1112)";
                    /* unknown */"(sendself self-1/1742 item_attributes/1098)";
                    pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@ ",1,0],
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* String_literal */11,
                          "and",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             58,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                       "@ @[<hov2>and@ %s:@ %a@]%a"],
                      pmd$1[1][1],
                      0,
                      pmd$1[2],
                      0,
                      pmd$1[3])}
                  else
                   {/* unknown */"(sendself self-1/1742 module_type/1112)";
                    /* unknown */"(sendself self-1/1742 item_attributes/1098)";
                    pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<hov2>",/* End_of_format */0],
                          "<hov2>"]],
                        [/* String_literal */11,
                         "module",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* String_literal */11,
                           "rec",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* String */2,
                             /* No_padding */0,
                             [/* Char_literal */12,
                              58,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 [/* Alpha */15,/* End_of_format */0]]]]]]]]]]],
                       "@[<hov2>module@ rec@ %s:@ %a@]%a"],
                      pmd$1[1][1],
                      0,
                      pmd$1[2],
                      0,
                      pmd$1[3])}
                  
                  return string_x_module_type_list
                          (f,[/* Some */0,/* false */0],l[2]);
                  }
                else
                 {return /* () */0;}
                };
            
            return string_x_module_type_list(f,/* None */0,match[1]);
            
           case 6:
            var match$2=match[1];
            
            /* unknown */"(sendself self-1/1742 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "module",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "type",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Alpha */15,/* End_of_format */0]]]]]]]]],
                      "@[<hov2>module@ type@ %s%a@]%a"],
                     match$2[1][1],
                     function(f,md)
                      {if(md)
                        {Format["pp_print_space"](f,/* () */0);
                         /* unknown */"(sendself self-1/1742 module_type/1112)";
                         return pp
                                 (f,
                                  [/* Format */0,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@ ",1,0],
                                    [/* Char_literal */12,
                                     61,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@ ",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]]],
                                   "@ =@ %a"],
                                  0,
                                  md[1]);
                         }
                       else
                        {return /* () */0;}
                       },
                     match$2[2],
                     0,
                     match$2[3]);
            
           case 7:
            var od=match[1];
            
            /* unknown */"(sendself self-1/1742 longident_loc/1073)";
            /* unknown */"(sendself self-1/1742 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "open",
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Alpha */15,/* End_of_format */0]]]]]]],
                      "@[<hov2>open%s@ %a@]%a"],
                     override(od[2]),
                     0,
                     od[1],
                     0,
                     od[4]);
            
           case 8:
            var incl=match[1];
            
            /* unknown */"(sendself self-1/1742 module_type/1112)";
            /* unknown */"(sendself self-1/1742 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "include",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Alpha */15,/* End_of_format */0]]]]]],
                      "@[<hov2>include@ %a@]%a"],
                     0,
                     incl[1],
                     0,
                     incl[3]);
            
           case 9:
            var l=match[1];
            
            var
             class_description=
              function(kwd,f,x)
               {/* unknown */"(sendself self-1/1742 virtual_flag/1076)";
                /* unknown */"(sendself self-1/1742 class_params_def/1084)";
                /* unknown */"(sendself self-1/1742 class_type/1107)";
                /* unknown */"(sendself self-1/1742 item_attributes/1098)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             32,
                             [/* Alpha */15,
                              [/* Alpha */15,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 [/* Char_literal */12,
                                  58,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@;",1,0],
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     /* Close_box */0,
                                     [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]],
                          "@[<2>%s %a%a%s@;:@;%a@]%a"],
                         kwd,
                         0,
                         x[1],
                         0,
                         x[2],
                         x[3][1],
                         0,
                         x[4],
                         0,
                         x[6]);
                };
            
            if(l)
             {var xs=l[2];
              
              var x$1=l[1];
              
              if(xs)
               {/* unknown */'(sendself self-1/1742 list/1069 [0: [0: [17: [0: "@," 0 0] 0a] "@,"]] 0a 0a\n  (apply class_description/1764 "and"))';
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<v>",/* End_of_format */0],
                             "<v>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@,",0,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<v>%a@,%a@]"],
                         class_description("class"),
                         x$1,
                         0,
                         xs);
                }
              else
               {return class_description("class",f,x$1);}
              }
            else
             {return /* () */0;}
            
           case 10:
            /* unknown */"(sendself self-1/1742 class_type_declaration_list/1108 f/1743\n  (field 0 match/2207))";
            
           case 11:
            /* unknown */"(sendself self-1/1742 floating_attribute/1101 f/1743 (field 0 match/2207))";
            
           case 12:
            /* unknown */"(sendself self-1/1742 item_extension/1104 f/1743 (field 0 match/2207))";
            
            /* unknown */"(sendself self-1/1742 item_attributes/1098 f/1743 (field 1 match/2207))";
            
           }
         },
       module_expr,
       function(self$neg1,f,x)
        {if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1785 module_expr/1115)";
           /* unknown */"(sendself self-1/1785 attributes/1097)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* String_literal */11,
                      "((",
                      [/* Alpha */15,
                       [/* Char_literal */12,
                        41,
                        [/* Alpha */15,
                         [/* Char_literal */12,41,/* End_of_format */0]]]]],
                     "((%a)%a)"],
                    0,
                    /* record */[0,x[1],x[2],/* [] */0],
                    0,
                    x[3]);
           }
         else
          {var match=x[1];
           
           switch(match[0])
            {case 0:
              /* unknown */"(sendself self-1/1785 longident_loc/1073)";
              return pp
                      (f,
                       [/* Format */0,[/* Alpha */15,/* End_of_format */0],"%a"],
                       0,
                       match[1]);
              
             case 1:
              /* unknown */'(sendself self-1/1785 list/1069 [0: [0: [17: 3a 0a] "@\n"]] 0a 0a\n  (sendself self-1/1785 structure_item/1120))';
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hv2>",/* End_of_format */0],
                           "<hv2>"]],
                         [/* String_literal */11,
                          "struct",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<0>",/* End_of_format */0],
                              "<0>"]],
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;<1 -2>",1,-2],
                               [/* String_literal */11,
                                "end",
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]],
                        "@[<hv2>struct@;@[<0>%a@]@;<1 -2>end@]"],
                       0,
                       match[1]);
              
             case 2:
              var match$1=match[2];
              
              if(match$1)
               {/* unknown */"(sendself self-1/1785 module_type/1112)";
                /* unknown */"(sendself self-1/1785 module_expr/1115)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* String_literal */11,
                           "functor",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Char_literal */12,
                             40,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Char_literal */12,
                                58,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,
                                  [/* Char_literal */12,
                                   41,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* String_literal */11,
                                     "->",
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@;",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]]],
                          "functor@ (%s@ :@ %a)@;->@;%a"],
                         match[1][1],
                         0,
                         match$1[1],
                         0,
                         match[3]);
                }
              else
               {/* unknown */"(sendself self-1/1785 module_expr/1115)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* String_literal */11,
                           "functor ()",
                           [/* Formatting_lit */17,
                            [/* Break */0,"@;",1,0],
                            [/* String_literal */11,
                             "->",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Alpha */15,/* End_of_format */0]]]]],
                          "functor ()@;->@;%a"],
                         0,
                         match[3]);
                }
              
             case 3:
              /* unknown */"(sendself self-1/1785 module_expr/1115)";
              /* unknown */"(sendself self-1/1785 module_expr/1115)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Alpha */15,
                         [/* Char_literal */12,
                          40,
                          [/* Alpha */15,
                           [/* Char_literal */12,41,/* End_of_format */0]]]],
                        "%a(%a)"],
                       0,
                       match[1],
                       0,
                       match[2]);
              
             case 4:
              /* unknown */"(sendself self-1/1785 module_expr/1115)";
              /* unknown */"(sendself self-1/1785 module_type/1112)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_gen */18,
                         [/* Open_box */1,
                          [/* Format */0,
                           [/* String_literal */11,"<hov2>",/* End_of_format */0],
                           "<hov2>"]],
                         [/* Char_literal */12,
                          40,
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Char_literal */12,
                             58,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* Alpha */15,
                               [/* Char_literal */12,
                                41,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]],
                        "@[<hov2>(%a@ :@ %a)@]"],
                       0,
                       match[1],
                       0,
                       match[2]);
              
             case 5:
              /* unknown */"(sendself self-1/1785 expression/1093)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String_literal */11,
                         "(val",
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Char_literal */12,41,/* End_of_format */0]]]],
                        "(val@ %a)"],
                       0,
                       match[1]);
              
             case 6:
              /* unknown */"(sendself self-1/1785 extension/1103 f/1786 (field 0 match/2192))";
              
             }
           }
         },
       structure,
       function(self$neg1,f,x)
        {/* unknown */'(sendself self-1/1801 list/1069 [0: [0: [17: 3a 0a] "@\n"]] 0a 0a\n  (sendself self-1/1801 structure_item/1120) f/1802 x/1803)';
         },
       payload,
       function(self$neg1,f,param)
        {switch(param[0])
          {case 0:
            var x=param[1];
            
            var exit;
            
            if(x)
             {var match=x[1][1];
              
              switch(match[0])
               {case 0:
                 if(x[2])
                  {exit=62;}
                 else
                  {/* unknown */"(sendself self-1/1805 expression/1093)";
                   /* unknown */"(sendself self-1/1805 item_attributes/1098)";
                   return pp
                           (f,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<2>",/* End_of_format */0],
                                "<2>"]],
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                [/* Alpha */15,/* End_of_format */0]]]],
                             "@[<2>%a@]%a"],
                            0,
                            match[1],
                            0,
                            match[2]);
                   }
                 
                default:exit=62;}
              }
            else
             {exit=62;}
            
            switch(exit)
             {case 62:
               /* unknown */"(sendself self-1/1805 structure/1116 f/1806 x/1809)";
               
              }
            
           case 1:
            pp
             (f,
              [/* Format */0,
               [/* Char_literal */12,58,/* End_of_format */0],
               ":"]);
            /* unknown */"(sendself self-1/1805 core_type/1086 f/1806 (field 0 param/2183))";
            
           case 2:
            var match$1=param[2];
            
            var x$1=param[1];
            
            if(match$1)
             {pp
               (f,
                [/* Format */0,
                 [/* Char_literal */12,63,/* End_of_format */0],
                 "?"]);
              /* unknown */"(sendself self-1/1805 pattern/1088 f/1806 x/1811)";
              
              pp
               (f,
                [/* Format */0,
                 [/* String_literal */11," when ",/* End_of_format */0],
                 " when "]);
              /* unknown */"(sendself self-1/1805 expression/1093 f/1806 (field 0 match/2188))";
              }
            else
             {pp
               (f,
                [/* Format */0,
                 [/* Char_literal */12,63,/* End_of_format */0],
                 "?"]);
              /* unknown */"(sendself self-1/1805 pattern/1088 f/1806 x/1811)";
              }
            
           }
         },
       binding,
       function(self$neg1,f,param)
        {var x=param[2];
         
         var p=param[1];
         
         var
          pp_print_pexp_function=
           function(f,x)
            {if(x[3]!==/* [] */0)
              {/* unknown */"(sendself self-1/1815 expression/1093)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Char_literal */12,
                          61,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* Alpha */15,/* End_of_format */0]]],
                         "=@;%a"],
                        0,
                        x);
               }
             else
              {var match=x[1];
               
               switch(match[0])
                {case 4:
                  var e=match[4];
                  
                  var p$1=match[3];
                  
                  var label=match[1];
                  
                  if(CamlPrimitive["caml_string_equal"](label,""))
                   {/* unknown */"(sendself self-1/1815 simple_pattern/1090)";
                    return pp
                            (f,
                             [/* Format */0,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,/* End_of_format */0]]],
                              "%a@ %a"],
                             0,
                             p$1,
                             pp_print_pexp_function,
                             e);
                    }
                  else
                   {/* unknown */"(sendself self-1/1815 label_exp/1091)";
                    return pp
                            (f,
                             [/* Format */0,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,/* End_of_format */0]]],
                              "%a@ %a"],
                             0,
                             /* tuple */[0,label,match[2],p$1],
                             pp_print_pexp_function,
                             e);
                    }
                  
                 case 30:
                  return pp
                          (f,
                           [/* Format */0,
                            [/* String_literal */11,
                             "(type",
                             [/* Formatting_lit */17,
                              [/* Break */0,"@ ",1,0],
                              [/* String */2,
                               /* No_padding */0,
                               [/* Char_literal */12,
                                41,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* Alpha */15,/* End_of_format */0]]]]]],
                            "(type@ %s)@ %a"],
                           match[1],
                           pp_print_pexp_function,
                           match[2]);
                  
                 default:
                  /* unknown */"(sendself self-1/1815 expression/1093)";
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Char_literal */12,
                             61,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Alpha */15,/* End_of_format */0]]],
                            "=@;%a"],
                           0,
                           x);
                  }
               }
             };
         
         if(x[3]!==/* [] */0)
          {/* unknown */"(sendself self-1/1815 pattern/1088)";
           /* unknown */"(sendself self-1/1815 expression/1093)";
           return pp
                   (f,
                    [/* Format */0,
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       [/* Break */0,"@;",1,0],
                       [/* Char_literal */12,
                        61,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@;",1,0],
                         [/* Alpha */15,/* End_of_format */0]]]]],
                     "%a@;=@;%a"],
                    0,
                    p,
                    0,
                    x);
           }
         else
          {var match=x[1];
           
           var match$1=p[1];
           
           var exit;
           
           if(typeof match$1==="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 0:
                switch(match[0])
                 {case 19:
                   /* unknown */"(sendself self-1/1815 core_type/1086)";
                   /* unknown */"(sendself self-1/1815 expression/1093)";
                   return pp
                           (f,
                            [/* Format */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               58,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@ ",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@;",1,0],
                                  [/* Char_literal */12,
                                   61,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* Alpha */15,/* End_of_format */0]]]]]]]],
                             "%s:@ %a@;=@;%a"],
                            match$1[1][1],
                            0,
                            match[2],
                            0,
                            match[1]);
                   
                  default:
                   /* unknown */"(sendself self-1/1815 simple_pattern/1090)";
                   return pp
                           (f,
                            [/* Format */0,
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* Alpha */15,/* End_of_format */0]]],
                             "%a@ %a"],
                            0,
                            p,
                            pp_print_pexp_function,
                            x);
                   }
                
               case 10:
                var ty=match$1[2];
                
                var p$1=match$1[1];
                
                var match$2=ty[1];
                
                var exit$1;
                
                if(typeof match$2==="number")
                 {switch(match$2){}}
                else
                 {switch(match$2[0])
                   {case 8:
                     /* unknown */"(sendself self-1/1815 simple_pattern/1090)";
                     /* unknown */"(sendself self-1/1815 core_type/1086)";
                     /* unknown */"(sendself self-1/1815 expression/1093)";
                     return pp
                             (f,
                              [/* Format */0,
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@;",1,0],
                                 [/* Char_literal */12,
                                  58,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@;",1,0],
                                   [/* Alpha */15,
                                    [/* Char_literal */12,
                                     61,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@;",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]]]]]]],
                               "%a@;:@;%a=@;%a"],
                              0,
                              p$1,
                              0,
                              ty,
                              0,
                              x);
                     
                    default:exit$1=57;}}
                
                switch(exit$1)
                 {case 57:
                   /* unknown */"(sendself self-1/1815 simple_pattern/1090)";
                   /* unknown */"(sendself self-1/1815 core_type/1086)";
                   /* unknown */"(sendself self-1/1815 expression/1093)";
                   return pp
                           (f,
                            [/* Format */0,
                             [/* Char_literal */12,
                              40,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Char_literal */12,
                                 58,
                                 [/* Alpha */15,
                                  [/* String_literal */11,
                                   ")=",
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* Alpha */15,/* End_of_format */0]]]]]]]],
                             "(%a@;:%a)=@;%a"],
                            0,
                            p$1,
                            0,
                            ty,
                            0,
                            x);
                   
                  }
                
               default:exit=58;}}
           
           switch(exit)
            {case 58:
              /* unknown */"(sendself self-1/1815 pattern/1088)";
              /* unknown */"(sendself self-1/1815 expression/1093)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* Char_literal */12,
                           61,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@;",1,0],
                            [/* Alpha */15,/* End_of_format */0]]]]],
                        "%a@;=@;%a"],
                       0,
                       p,
                       0,
                       x);
              
             }
           }
         },
       bindings,
       function(self$neg1,f,param)
        {var l=param[2];
         
         var rf=param[1];
         
         var
          binding$1=
           function(kwd,rf,f,x)
            {/* unknown */"(sendself self-1/1834 rec_flag/1077)";
             /* unknown */"(sendself self-1/1834 binding/1118)";
             /* unknown */"(sendself self-1/1834 item_attributes/1098)";
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          32,
                          [/* Alpha */15,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             [/* Alpha */15,/* End_of_format */0]]]]]]],
                       "@[<2>%s %a%a@]%a"],
                      kwd,
                      0,
                      rf,
                      0,
                      x,
                      0,
                      x[3]);
             };
         
         if(l)
          {var xs=l[2];
           
           var x=l[1];
           
           if(xs)
            {/* unknown */'(sendself self-1/1834 list/1069 [0: [0: [17: [0: "@," 0 0] 0a] "@,"]] 0a 0a\n  (apply binding/1838 "and" 0a))';
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<v>",/* End_of_format */0],
                          "<v>"]],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@,",0,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]],
                       "@[<v>%a@,%a@]"],
                      binding$1("let",rf),
                      x,
                      0,
                      xs);
             }
           else
            {return binding$1("let",rf,f,x);}
           }
         else
          {return /* () */0;}
         },
       structure_item,
       function(self$neg1,f,x)
        {var match=x[1];
         
         switch(match[0])
          {case 0:
            /* unknown */"(sendself self-1/1847 expression/1093)";
            /* unknown */"(sendself self-1/1847 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "let",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "_ =",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             /* Close_box */0,
                             [/* Alpha */15,/* End_of_format */0]]]]]]]],
                      "@[<hov2>let@ _ =@ %a@]%a"],
                     0,
                     match[1],
                     0,
                     match[2]);
            
           case 1:
            /* unknown */"(sendself self-1/1847 bindings/1119)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]],
                      "@[<2>%a@]"],
                     0,
                     /* tuple */[0,match[1],match[2]]);
            
           case 2:
            var vd=match[1];
            
            /* unknown */"(sendself self-1/1847 value_description/1102)";
            /* unknown */"(sendself self-1/1847 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "external",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* Char_literal */12,
                            58,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@ ",1,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                      "@[<hov2>external@ %a@ :@ %a@]%a"],
                     protect_ident,
                     vd[1][1],
                     0,
                     vd,
                     0,
                     vd[4]);
            
           case 3:
            var l=match[1];
            
            if(l)
             {/* unknown */"(sendself self-1/1847 type_def_list/1123 f/1848 l/1852)";
              }
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"parsing/pprintast.ml",1109,22]];
              }
            
           case 4:
            /* unknown */"(sendself self-1/1847 type_extension/1125 f/1848 (field 0 match/2158))";
            
           case 5:
            /* unknown */"(sendself self-1/1847 exception_declaration/1105 f/1848 (field 0 match/2158))";
            
           case 6:
            var x$1=match[1];
            
            var
             module_helper=
              function(me)
               {var match$1=me[1];
                
                var exit;
                
                switch(match$1[0])
                 {case 2:
                   if(me[3]===/* [] */0)
                    {var mt=match$1[2];
                     
                     if(mt===/* None */0)
                      {pp
                        (f,
                         [/* Format */0,
                          [/* String_literal */11,"()",/* End_of_format */0],
                          "()"])}
                     else
                      {/* unknown */"(sendself self-1/1847 module_type/1112)";
                       Misc["may"]
                        (pp
                          (f,
                           [/* Format */0,
                            [/* Char_literal */12,
                             40,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               58,
                               [/* Alpha */15,
                                [/* Char_literal */12,41,/* End_of_format */0]]]]],
                            "(%s:%a)"],
                           match$1[1][1],
                           0),
                         mt)}
                     
                     return module_helper(match$1[3]);
                     }
                   else
                    {exit=41;}
                   
                  default:exit=41;}
                
                switch(exit){case 41:return me;}
                };
            
            /* unknown */"(sendself self-1/1847 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "module ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Alpha */15,/* End_of_format */0]]]]]],
                      "@[<hov2>module %s%a@]%a"],
                     x$1[1][1],
                     function(f,me)
                      {var me$1=module_helper(me);
                       
                       var match$1=me$1[1];
                       
                       var exit;
                       
                       switch(match$1[0])
                        {case 4:
                          var mt=match$1[2];
                          
                          var exit$1;
                          
                          switch(mt[1][0])
                           {case 0:exit$1=39;case 1:exit$1=39;default:exit=38;}
                          
                          switch(exit$1)
                           {case 39:
                             if(me$1[3]===/* [] */0)
                              {/* unknown */"(sendself self-1/1847 module_type/1112)";
                               /* unknown */"(sendself self-1/1847 module_expr/1115)";
                               return pp
                                       (f,
                                        [/* Format */0,
                                         [/* String_literal */11,
                                          " :",
                                          [/* Formatting_lit */17,
                                           [/* Break */0,"@;",1,0],
                                           [/* Alpha */15,
                                            [/* Formatting_lit */17,
                                             [/* Break */0,"@;",1,0],
                                             [/* Char_literal */12,
                                              61,
                                              [/* Formatting_lit */17,
                                               [/* Break */0,"@;",1,0],
                                               [/* Alpha */15,
                                                [/* Formatting_lit */17,
                                                 [/* Break */0,"@;",1,0],
                                                 /* End_of_format */0]]]]]]]],
                                         " :@;%a@;=@;%a@;"],
                                        0,
                                        mt,
                                        0,
                                        match$1[1]);
                               }
                             else
                              {exit=38;}
                             
                            }
                          
                         default:exit=38;}
                       
                       switch(exit)
                        {case 38:
                          /* unknown */"(sendself self-1/1847 module_expr/1115)";
                          return pp
                                  (f,
                                   [/* Format */0,
                                    [/* String_literal */11,
                                     " =",
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@ ",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]],
                                    " =@ %a"],
                                   0,
                                   me$1);
                          
                         }
                       },
                     x$1[2],
                     0,
                     x$1[3]);
            
           case 7:
            var decls=match[1];
            
            var
             aux=
              function(f,pmb)
               {var match$1=pmb[2][1];
                
                switch(match$1[0])
                 {case 4:
                   /* unknown */"(sendself self-1/1847 module_type/1112)";
                   /* unknown */"(sendself self-1/1847 module_expr/1115)";
                   /* unknown */"(sendself self-1/1847 item_attributes/1098)";
                   return pp
                           (f,
                            [/* Format */0,
                             [/* Formatting_gen */18,
                              [/* Open_box */1,
                               [/* Format */0,
                                [/* String_literal */11,"<hov2>",/* End_of_format */0],
                                "<hov2>"]],
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* String_literal */11,
                                "and",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,
                                   58,
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Char_literal */12,
                                      61,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@ ",1,0],
                                       [/* Alpha */15,
                                        [/* Formatting_lit */17,
                                         /* Close_box */0,
                                         [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]]],
                             "@[<hov2>@ and@ %s:%a@ =@ %a@]%a"],
                            pmb[1][1],
                            0,
                            match$1[2],
                            0,
                            match$1[1],
                            0,
                            pmb[3]);
                   
                  default:
                   throw [0,
                          CamlPrimitive["caml_global_data"]["Assert_failure"],
                          [0,"parsing/pprintast.ml",1209,17]];
                   }
                };
            
            var exit;
            
            if(decls)
             {var pmb=decls[1];
              
              var match$1=pmb[2][1];
              
              switch(match$1[0])
               {case 4:
                 /* unknown */"(sendself self-1/1847 module_type/1112)";
                 /* unknown */"(sendself self-1/1847 module_expr/1115)";
                 /* unknown */"(sendself self-1/1847 item_attributes/1098)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Formatting_gen */18,
                            [/* Open_box */1,
                             [/* Format */0,
                              [/* String_literal */11,"<hv>",/* End_of_format */0],
                              "<hv>"]],
                            [/* Formatting_gen */18,
                             [/* Open_box */1,
                              [/* Format */0,
                               [/* String_literal */11,"<hov2>",/* End_of_format */0],
                               "<hov2>"]],
                             [/* String_literal */11,
                              "module",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@ ",1,0],
                               [/* String_literal */11,
                                "rec",
                                [/* Formatting_lit */17,
                                 [/* Break */0,"@ ",1,0],
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,
                                   58,
                                   [/* Alpha */15,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@ ",1,0],
                                     [/* Char_literal */12,
                                      61,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@ ",1,0],
                                       [/* Alpha */15,
                                        [/* Formatting_lit */17,
                                         /* Close_box */0,
                                         [/* Alpha */15,
                                          [/* Formatting_lit */17,
                                           [/* Break */0,"@ ",1,0],
                                           [/* Alpha */15,
                                            [/* Formatting_lit */17,
                                             /* Close_box */0,
                                             /* End_of_format */0]]]]]]]]]]]]]]]]]],
                           "@[<hv>@[<hov2>module@ rec@ %s:%a@ =@ %a@]%a@ %a@]"],
                          pmb[1][1],
                          0,
                          match$1[2],
                          0,
                          match$1[1],
                          0,
                          pmb[3],
                          function(f,l2){return List["iter"](aux(f),l2);},
                          decls[2]);
                 
                default:exit=51;}
              }
            else
             {exit=51;}
            
            switch(exit)
             {case 51:
               throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"parsing/pprintast.ml",1219,15]];
               
              }
            
           case 8:
            var match$2=match[1];
            
            /* unknown */"(sendself self-1/1847 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "module",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String_literal */11,
                          "type",
                          [/* Formatting_lit */17,
                           [/* Break */0,"@ ",1,0],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Alpha */15,/* End_of_format */0]]]]]]]]],
                      "@[<hov2>module@ type@ %s%a@]%a"],
                     match$2[1][1],
                     function(f,md)
                      {if(md)
                        {Format["pp_print_space"](f,/* () */0);
                         /* unknown */"(sendself self-1/1847 module_type/1112)";
                         return pp
                                 (f,
                                  [/* Format */0,
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@ ",1,0],
                                    [/* Char_literal */12,
                                     61,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@ ",1,0],
                                      [/* Alpha */15,/* End_of_format */0]]]],
                                   "@ =@ %a"],
                                  0,
                                  md[1]);
                         }
                       else
                        {return /* () */0;}
                       },
                     match$2[2],
                     0,
                     match$2[3]);
            
           case 9:
            var od=match[1];
            
            /* unknown */"(sendself self-1/1847 longident_loc/1073)";
            /* unknown */"(sendself self-1/1847 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<2>",/* End_of_format */0],
                         "<2>"]],
                       [/* String_literal */11,
                        "open",
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            [/* Alpha */15,/* End_of_format */0]]]]]]],
                      "@[<2>open%s@;%a@]%a"],
                     override(od[2]),
                     0,
                     od[1],
                     0,
                     od[4]);
            
           case 10:
            var l$1=match[1];
            
            var
             extract_class_args=
              function(cl)
               {var
                 loop=
                  function(acc,cl)
                   {var match$3=cl[1];
                    
                    var exit$1;
                    
                    switch(match$3[0])
                     {case 2:
                       if(cl[3]===/* [] */0)
                        {return loop
                                 (/* :: */[0,
                                   /* tuple */[0,match$3[1],match$3[2],match$3[3]],
                                   acc],
                                  match$3[4]);
                         }
                       else
                        {exit$1=49;}
                       
                      default:exit$1=49;}
                    
                    switch(exit$1)
                     {case 49:return /* tuple */[0,List["rev"](acc),cl];}
                    };
                
                var match$3=loop(/* [] */0,cl);
                
                var cl$1=match$3[2];
                
                var match$4=cl$1[1];
                
                var exit$1;
                
                switch(match$4[0])
                 {case 5:
                   if(cl$1[3]===/* [] */0)
                    {var
                      match$5=
                       /* tuple */[0,/* Some */[0,match$4[2]],match$4[1]];
                     }
                   else
                    {exit$1=46;}
                   
                  default:exit$1=46;}
                
                switch(exit$1)
                 {case 46:var match$5=/* tuple */[0,/* None */0,cl$1];}
                
                return /* tuple */[0,match$3[1],match$5[1],match$5[2]];
                };
            
            var
             class_constraint=
              function(f,ct)
               {/* unknown */"(sendself self-1/1847 class_type/1107)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* String_literal */11,
                           ": ",
                           [/* Formatting_gen */18,
                            [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
                            [/* Alpha */15,
                             [/* Formatting_lit */17,
                              /* Close_box */0,
                              [/* Char_literal */12,32,/* End_of_format */0]]]]],
                          ": @[%a@] "],
                         0,
                         ct);
                };
            
            var
             class_declaration=
              function(kwd,f,x)
               {var match$3=extract_class_args(x[4]);
                
                /* unknown */"(sendself self-1/1847 virtual_flag/1076)";
                /* unknown */"(sendself self-1/1847 class_params_def/1084)";
                /* unknown */"(sendself self-1/1847 list/1069 0a 0a 0a\n  (sendself self-1/1847 label_exp/1091))";
                /* unknown */"(sendself self-1/1847 option/1070 0a 0a class_constraint/1898)";
                /* unknown */"(sendself self-1/1847 class_expr/1111)";
                /* unknown */"(sendself self-1/1847 item_attributes/1098)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<2>",/* End_of_format */0],
                             "<2>"]],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             32,
                             [/* Alpha */15,
                              [/* Alpha */15,
                               [/* String */2,
                                /* No_padding */0,
                                [/* Char_literal */12,
                                 32,
                                 [/* Alpha */15,
                                  [/* Alpha */15,
                                   [/* Char_literal */12,
                                    61,
                                    [/* Formatting_lit */17,
                                     [/* Break */0,"@;",1,0],
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       /* Close_box */0,
                                       [/* Alpha */15,/* End_of_format */0]]]]]]]]]]]]]],
                          "@[<2>%s %a%a%s %a%a=@;%a@]%a"],
                         kwd,
                         0,
                         x[1],
                         0,
                         x[2],
                         x[3][1],
                         0,
                         match$3[1],
                         0,
                         match$3[2],
                         0,
                         match$3[3],
                         0,
                         x[6]);
                };
            
            if(l$1)
             {var xs=l$1[2];
              
              var x$2=l$1[1];
              
              if(xs)
               {/* unknown */'(sendself self-1/1847 list/1069 [0: [0: [17: [0: "@," 0 0] 0a] "@,"]] 0a 0a\n  (apply class_declaration/1901 "and"))';
                return pp
                        (f,
                         [/* Format */0,
                          [/* Formatting_gen */18,
                           [/* Open_box */1,
                            [/* Format */0,
                             [/* String_literal */11,"<v>",/* End_of_format */0],
                             "<v>"]],
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@,",0,0],
                             [/* Alpha */15,
                              [/* Formatting_lit */17,
                               /* Close_box */0,
                               /* End_of_format */0]]]]],
                          "@[<v>%a@,%a@]"],
                         class_declaration("class"),
                         x$2,
                         0,
                         xs);
                }
              else
               {return class_declaration("class",f,x$2);}
              }
            else
             {return /* () */0;}
            
           case 11:
            /* unknown */"(sendself self-1/1847 class_type_declaration_list/1108 f/1848\n  (field 0 match/2158))";
            
           case 12:
            var incl=match[1];
            
            /* unknown */"(sendself self-1/1847 module_expr/1115)";
            /* unknown */"(sendself self-1/1847 item_attributes/1098)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* String_literal */11,
                        "include",
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,
                          [/* Formatting_lit */17,
                           /* Close_box */0,
                           [/* Alpha */15,/* End_of_format */0]]]]]],
                      "@[<hov2>include@ %a@]%a"],
                     0,
                     incl[1],
                     0,
                     incl[3]);
            
           case 13:
            /* unknown */"(sendself self-1/1847 floating_attribute/1101 f/1848 (field 0 match/2158))";
            
           case 14:
            /* unknown */"(sendself self-1/1847 item_extension/1104 f/1848 (field 0 match/2158))";
            
            /* unknown */"(sendself self-1/1847 item_attributes/1098 f/1848 (field 1 match/2158))";
            
           }
         },
       type_param,
       function(self$neg1,f,param)
        {/* unknown */"(sendself self-1/1925 core_type/1086)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* String */2,
                    /* No_padding */0,
                    [/* Alpha */15,/* End_of_format */0]],
                   "%s%a"],
                  type_variance(param[2]),
                  0,
                  param[1]);
         },
       type_params,
       function(self$neg1,f,l)
        {if(l)
          {/* unknown */"(sendself self-1/1930 list/1069 [0: [0: [12: ',' 0a] \",\"]]\n  [0: [0: [12: '(' 0a] \"(\"]] [0: [0: [12: ')' 0a] \")\"]]\n  (sendself self-1/1930 type_param/1121))";
           return pp
                   (f,
                    [/* Format */0,
                     [/* Alpha */15,
                      [/* Char_literal */12,32,/* End_of_format */0]],
                     "%a "],
                    0,
                    l);
           }
         else
          {return /* () */0;}
         },
       type_def_list,
       function(self$neg1,f,l)
        {var
          is_nonrec=
           List["exists"]
            (function(td)
              {return List["exists"]
                       (function(param)
                         {return CamlPrimitive["caml_string_equal"]
                                  (param[1][1],"nonrec");
                          },
                        td[7]);
               },
             l);
         
         if(is_nonrec)
          {var rf=/* Nonrecursive */0;}
         else
          {var rf=/* Recursive */1;}
         
         var
          type_decl=
           function(kwd,rf,f,x)
            {if(x[4]===/* Ptype_abstract */0&&x[6]===/* None */0)
              {var eq="";}
             else
              {var eq=" =";}
             
             /* unknown */"(sendself self-1/1934 nonrec_flag/1078)";
             /* unknown */"(sendself self-1/1934 type_params/1122)";
             /* unknown */"(sendself self-1/1934 type_declaration/1124)";
             /* unknown */"(sendself self-1/1934 item_attributes/1098)";
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* String */2,
                         /* No_padding */0,
                         [/* Char_literal */12,
                          32,
                          [/* Alpha */15,
                           [/* Alpha */15,
                            [/* String */2,
                             /* No_padding */0,
                             [/* String */2,
                              /* No_padding */0,
                              [/* Alpha */15,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                [/* Alpha */15,/* End_of_format */0]]]]]]]]]],
                       "@[<2>%s %a%a%s%s%a@]%a"],
                      kwd,
                      0,
                      rf,
                      0,
                      x[2],
                      x[1][1],
                      eq,
                      0,
                      x,
                      0,
                      x[7]);
             };
         
         if(l)
          {var xs=l[2];
           
           var x=l[1];
           
           if(xs)
            {/* unknown */'(sendself self-1/1934 list/1069 [0: [0: [17: [0: "@," 0 0] 0a] "@,"]] 0a 0a\n  (apply type_decl/1941 "and" 1a))';
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<v>",/* End_of_format */0],
                          "<v>"]],
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@,",0,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]],
                       "@[<v>%a@,%a@]"],
                      type_decl("type",rf),
                      x,
                      0,
                      xs);
             }
           else
            {return type_decl("type",rf,f,x);}
           }
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"parsing/pprintast.ml",1256,12]];
           }
         },
       type_declaration,
       function(self$neg1,f,x)
        {var
          priv=
           function(f)
            {var match=x[5];
             
             if(match!==0)
              {return /* () */0;}
             else
              {return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* String_literal */11,"private",/* End_of_format */0]],
                         "@;private"]);
               }
             };
         
         var
          manifest=
           function(f)
            {var match=x[6];
             
             if(match)
              {/* unknown */"(sendself self-1/1951 core_type/1086)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* Alpha */15,/* End_of_format */0]],
                         "@;%a"],
                        0,
                        match[1]);
               }
             else
              {return /* () */0;}
             };
         
         var
          constructor_declaration=
           function(f,pcd)
            {var match=pcd[2];
             
             var match$1=pcd[3];
             
             if(match$1)
              {if(match)
                {/* unknown */'(sendself self-1/1951 list/1069\n  [0: [0: [12: \'*\' [17: [0: "@;" 1 0] 0a]] "*@;"]] 0a 0a\n  (sendself self-1/1951 core_type1/1087))';
                 /* unknown */"(sendself self-1/1951 core_type1/1087)";
                 /* unknown */"(sendself self-1/1951 attributes/1097)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Char_literal */12,
                            124,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               58,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@;",1,0],
                                  [/* String_literal */11,
                                   "->",
                                   [/* Formatting_lit */17,
                                    [/* Break */0,"@;",1,0],
                                    [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]]]]]]]]]]],
                           "|@;%s:@;%a@;->@;%a%a"],
                          pcd[1][1],
                          0,
                          match,
                          0,
                          match$1[1],
                          0,
                          pcd[5]);
                 }
               else
                {/* unknown */"(sendself self-1/1951 core_type1/1087)";
                 /* unknown */"(sendself self-1/1951 attributes/1097)";
                 return pp
                         (f,
                          [/* Format */0,
                           [/* Char_literal */12,
                            124,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String */2,
                              /* No_padding */0,
                              [/* Char_literal */12,
                               58,
                               [/* Formatting_lit */17,
                                [/* Break */0,"@;",1,0],
                                [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]]]]]]],
                           "|@;%s:@;%a%a"],
                          pcd[1][1],
                          0,
                          match$1[1],
                          0,
                          pcd[5]);
                 }
               }
             else
              {/* unknown */"(sendself self-1/1951 attributes/1097)";
               return pp
                       (f,
                        [/* Format */0,
                         [/* Char_literal */12,
                          124,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* String */2,
                            /* No_padding */0,
                            [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]]]]],
                         "|@;%s%a%a"],
                        pcd[1][1],
                        function(f,l)
                         {if(l)
                           {/* unknown */'(sendself self-1/1951 list/1069\n  [0: [0: [12: \'*\' [17: [0: "@;" 1 0] 0a]] "*@;"]] 0a 0a\n  (sendself self-1/1951 core_type1/1087))';
                            return pp
                                    (f,
                                     [/* Format */0,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@;",1,0],
                                       [/* String_literal */11,
                                        "of",
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@;",1,0],
                                         [/* Alpha */15,/* End_of_format */0]]]],
                                      "@;of@;%a"],
                                     0,
                                     l);
                            }
                          else
                           {return /* () */0;}
                          },
                        pcd[2],
                        0,
                        pcd[5]);
               }
             };
         
         var
          label_declaration=
           function(f,pld)
            {/* unknown */"(sendself self-1/1951 mutable_flag/1075)";
             /* unknown */"(sendself self-1/1951 core_type/1086)";
             /* unknown */"(sendself self-1/1951 attributes/1097)";
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_gen */18,
                        [/* Open_box */1,
                         [/* Format */0,
                          [/* String_literal */11,"<2>",/* End_of_format */0],
                          "<2>"]],
                        [/* Alpha */15,
                         [/* String */2,
                          /* No_padding */0,
                          [/* Char_literal */12,
                           58,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@;",1,0],
                            [/* Alpha */15,
                             [/* Alpha */15,
                              [/* Char_literal */12,
                               59,
                               [/* Formatting_lit */17,
                                /* Close_box */0,
                                /* End_of_format */0]]]]]]]]],
                       "@[<2>%a%s:@;%a%a;@]"],
                      0,
                      pld[2],
                      pld[1][1],
                      0,
                      pld[3],
                      0,
                      pld[5]);
             };
         
         var
          repr=
           function(f)
            {var
              intro=
               function(f)
                {if(x[6]===/* None */0)
                  {return /* () */0;}
                 else
                  {return pp
                           (f,
                            [/* Format */0,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Char_literal */12,61,/* End_of_format */0]],
                             "@;="]);
                   }
                 };
             
             var match=x[4];
             
             if(typeof match==="number")
              {switch(match)
                {case 0:return /* () */0;
                 case 1:
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Theta */16,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* String_literal */11,"..",/* End_of_format */0]]],
                            "%t@;.."],
                           intro);
                  
                 }}
             else
              {switch(match[0])
                {case 0:
                  /* unknown */'(sendself self-1/1951 list/1069 [0: [0: [17: 3a 0a] "@\n"]] 0a 0a\n  constructor_declaration/1959)';
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Theta */16,
                             [/* Formatting_lit */17,
                              /* Force_newline */3,
                              [/* Alpha */15,/* End_of_format */0]]],
                            "%t@\n%a"],
                           intro,
                           0,
                           match[1]);
                  
                 case 1:
                  /* unknown */'(sendself self-1/1951 list/1069 [0: [0: [17: 3a 0a] "@\n"]] 0a 0a\n  label_declaration/1967)';
                  return pp
                          (f,
                           [/* Format */0,
                            [/* Theta */16,
                             [/* Formatting_lit */17,
                              [/* Break */0,"@;",1,0],
                              [/* Char_literal */12,
                               123,
                               [/* Formatting_lit */17,
                                /* Force_newline */3,
                                [/* Alpha */15,
                                 [/* Char_literal */12,125,/* End_of_format */0]]]]]],
                            "%t@;{@\n%a}"],
                           intro,
                           0,
                           match[1]);
                  
                 }}
             };
         
         var
          constraints=
           function(f)
            {/* unknown */'(sendself self-1/1951 list/1069 0a [0: [0: [17: [0: "@ " 1 0] 0a] "@ "]] 0a\n  (function f/1978 param/2089\n    (apply pp/1051 f/1978\n      [0:\n       [18:\n        [1: [0: [11: "<hov2>" 0a] "<hov2>"]]\n        [11:\n         " constraint"\n         [17:\n          [0: "@ " 1 0]\n          [15:\n           [17:\n            [0: "@ " 1 0] [12: \'=\' [17: [0: "@ " 1 0] [15: [17: 0a 0a]]]]]]]]]\n       "@[<hov2> constraint@ %a@ =@ %a@]"]\n      (sendself self-1/1951 core_type/1086) (field 0 param/2089)\n      (sendself self-1/1951 core_type/1086) (field 1 param/2089)))\n  f/1977 (field 2 x/1953))';
             };
         
         return pp
                 (f,
                  [/* Format */0,
                   [/* Theta */16,
                    [/* Theta */16,
                     [/* Theta */16,[/* Theta */16,/* End_of_format */0]]]],
                   "%t%t%t%t"],
                  priv,
                  manifest,
                  repr,
                  constraints);
         },
       type_extension,
       function(self$neg1,f,x)
        {var
          extension_constructor$1=
           function(f,x)
            {/* unknown */"(sendself self-1/1982 extension_constructor/1126)";
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_lit */17,
                        /* Force_newline */3,
                        [/* Char_literal */12,
                         124,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@;",1,0],
                          [/* Alpha */15,/* End_of_format */0]]]],
                       "@\n|@;%a"],
                      0,
                      x);
             };
         
         /* unknown */"(sendself self-1/1982 longident_loc/1073)";
         /* unknown */'(sendself self-1/1982 list/1069 [0: [0: 0a ""]] 0a 0a\n  extension_constructor/1985)';
         /* unknown */"(sendself self-1/1982 item_attributes/1098)";
         return pp
                 (f,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<2>",/* End_of_format */0],
                      "<2>"]],
                    [/* String_literal */11,
                     "type ",
                     [/* Alpha */15,
                      [/* Alpha */15,
                       [/* String_literal */11,
                        " +=",
                        [/* Alpha */15,
                         [/* Formatting_lit */17,
                          /* Close_box */0,
                          [/* Alpha */15,/* End_of_format */0]]]]]]]],
                   "@[<2>type %a%a +=%a@]%a"],
                  function(f,l)
                   {if(l)
                     {/* unknown */"(sendself self-1/1982 list/1069 [0: [0: [12: ',' 0a] \",\"]]\n  [0: [0: [12: '(' 0a] \"(\"]] [0: [0: [12: ')' 0a] \")\"]]\n  (sendself self-1/1982 type_param/1121))";
                      return pp
                              (f,
                               [/* Format */0,
                                [/* Alpha */15,
                                 [/* Formatting_lit */17,
                                  [/* Break */0,"@;",1,0],
                                  /* End_of_format */0]],
                                "%a@;"],
                               0,
                               l);
                      }
                    else
                     {return /* () */0;}
                    },
                  x[2],
                  0,
                  x[1],
                  0,
                  x[3],
                  0,
                  x[5]);
         },
       extension_constructor,
       function(self$neg1,f,x)
        {var match=x[2];
         
         switch(match[0])
          {case 0:
            var match$1=match[2];
            
            var l=match[1];
            
            if(match$1)
             {var r=match$1[1];
              
              /* unknown */"(sendself self-1/1991 attributes/1097)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Alpha */15,
                          [/* Char_literal */12,
                           58,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@;",1,0],
                            [/* Alpha */15,/* End_of_format */0]]]]],
                        "%s%a:@;%a"],
                       x[1][1],
                       0,
                       x[4],
                       function(f,l)
                        {if(l)
                          {/* unknown */'(sendself self-1/1991 list/1069\n  [0: [0: [12: \'*\' [17: [0: "@;" 1 0] 0a]] "*@;"]] 0a 0a\n  (sendself self-1/1991 core_type1/1087))';
                           /* unknown */"(sendself self-1/1991 core_type1/1087)";
                           return pp
                                   (f,
                                    [/* Format */0,
                                     [/* Alpha */15,
                                      [/* Formatting_lit */17,
                                       [/* Break */0,"@;",1,0],
                                       [/* String_literal */11,
                                        "->",
                                        [/* Formatting_lit */17,
                                         [/* Break */0,"@;",1,0],
                                         [/* Alpha */15,/* End_of_format */0]]]]],
                                     "%a@;->@;%a"],
                                    0,
                                    l,
                                    0,
                                    r);
                           }
                         else
                          {/* unknown */"(sendself self-1/1991 core_type1/1087 f/2000 r/1996)";
                           }
                         },
                       l);
              }
            else
             {/* unknown */"(sendself self-1/1991 attributes/1097)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Alpha */15,[/* Alpha */15,/* End_of_format */0]]],
                        "%s%a%a"],
                       x[1][1],
                       0,
                       x[4],
                       function(f,l)
                        {if(l)
                          {/* unknown */'(sendself self-1/1991 list/1069\n  [0: [0: [12: \'*\' [17: [0: "@;" 1 0] 0a]] "*@;"]] 0a 0a\n  (sendself self-1/1991 core_type1/1087))';
                           return pp
                                   (f,
                                    [/* Format */0,
                                     [/* Formatting_lit */17,
                                      [/* Break */0,"@;",1,0],
                                      [/* String_literal */11,
                                       "of",
                                       [/* Formatting_lit */17,
                                        [/* Break */0,"@;",1,0],
                                        [/* Alpha */15,/* End_of_format */0]]]],
                                     "@;of@;%a"],
                                    0,
                                    l);
                           }
                         else
                          {return /* () */0;}
                         },
                       l);
              }
            
           case 1:
            /* unknown */"(sendself self-1/1991 attributes/1097)";
            /* unknown */"(sendself self-1/1991 longident_loc/1073)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* String */2,
                       /* No_padding */0,
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@;",1,0],
                         [/* Char_literal */12,
                          61,
                          [/* Formatting_lit */17,
                           [/* Break */0,"@;",1,0],
                           [/* Alpha */15,/* End_of_format */0]]]]]],
                      "%s%a@;=@;%a"],
                     x[1][1],
                     0,
                     x[4],
                     0,
                     match[1]);
            
           }
         },
       case_list,
       function(self$neg1,f,l)
        {var
          aux=
           function(f,param)
            {/* unknown */"(sendself self-1/2003 pattern/1088)";
             /* unknown */'(sendself self-1/2003 option/1070\n  [0:\n   [0: [17: [0: "@;" 1 0] [11: "when" [17: [0: "@;" 1 0] 0a]]] "@;when@;"]]\n  0a (sendself self-1/2003 expression/1093))';
             /* unknown */"(send (sendself self-1/2003 under_pipe/1062) 782176664)";
             return pp
                     (f,
                      [/* Format */0,
                       [/* Formatting_lit */17,
                        [/* Break */0,"@;",1,0],
                        [/* String_literal */11,
                         "| ",
                         [/* Formatting_gen */18,
                          [/* Open_box */1,
                           [/* Format */0,
                            [/* String_literal */11,"<2>",/* End_of_format */0],
                            "<2>"]],
                          [/* Alpha */15,
                           [/* Alpha */15,
                            [/* Formatting_lit */17,
                             [/* Break */0,"@;",1,0],
                             [/* String_literal */11,
                              "->",
                              [/* Formatting_lit */17,
                               [/* Break */0,"@;",1,0],
                               [/* Alpha */15,
                                [/* Formatting_lit */17,
                                 /* Close_box */0,
                                 /* End_of_format */0]]]]]]]]]],
                       "@;| @[<2>%a%a@;->@;%a@]"],
                      0,
                      param[1],
                      0,
                      param[2],
                      0,
                      param[3]);
             };
         
         /* unknown */'(sendself self-1/2003 list/1069 [0: [0: 0a ""]] 0a 0a aux/2006 f/2004 l/2005)';
         },
       label_x_expression_param,
       function(self$neg1,f,param)
        {var e=param[2];
         
         var l=param[1];
         
         switch(l)
          {case "":
            /* unknown */"(sendself self-1/2012 expression2/1095 f/2013 e/2015)";
            
           default:
            var match=e[1];
            
            var exit;
            
            switch(match[0])
             {case 0:
               var match$1=match[1][1];
               
               switch(match$1[0])
                {case 0:var simple_name=/* Some */[0,match$1[1]];
                 case 1:exit=14;
                 case 2:exit=14;
                 }
               
              default:exit=14;}
            
            switch(exit){case 14:var simple_name=/* None */0;}
            
            if(l[0]===63)
             {var str=$$String["sub"](l,1,l["length"]-1);
              
              if(CamlPrimitive["caml_equal"](/* Some */[0,str],simple_name))
               {return pp
                        (f,
                         [/* Format */0,
                          [/* String */2,/* No_padding */0,/* End_of_format */0],
                          "%s"],
                         l);
                }
              else
               {/* unknown */"(sendself self-1/2012 simple_expr/1096)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,
                            58,
                            [/* Alpha */15,/* End_of_format */0]]],
                          "%s:%a"],
                         l,
                         0,
                         e);
                }
              }
            else
             {if(CamlPrimitive["caml_equal"](/* Some */[0,l],simple_name))
               {return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,
                           126,
                           [/* String */2,/* No_padding */0,/* End_of_format */0]],
                          "~%s"],
                         l);
                }
              else
               {/* unknown */"(sendself self-1/2012 simple_expr/1096)";
                return pp
                        (f,
                         [/* Format */0,
                          [/* Char_literal */12,
                           126,
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,
                             58,
                             [/* Alpha */15,/* End_of_format */0]]]],
                          "~%s:%a"],
                         l,
                         0,
                         e);
                }
              }
            }
         },
       directive_argument,
       function(self$neg1,f,x)
        {if(typeof x==="number")
          {switch(x){case 0:return /* () */0;}}
         else
          {switch(x[0])
            {case 0:
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Caml_string */3,/* No_padding */0,/* End_of_format */0]],
                        "@ %S"],
                       x[1]);
              
             case 1:
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Int */4,
                          /* Int_d */0,
                          /* No_padding */0,
                          /* No_precision */0,
                          /* End_of_format */0]],
                        "@ %d"],
                       x[1]);
              
             case 2:
              /* unknown */"(sendself self-1/2021 longident/1072)";
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* Alpha */15,/* End_of_format */0]],
                        "@ %a"],
                       0,
                       x[1]);
              
             case 3:
              return pp
                      (f,
                       [/* Format */0,
                        [/* Formatting_lit */17,
                         [/* Break */0,"@ ",1,0],
                         [/* String */2,/* No_padding */0,/* End_of_format */0]],
                        "@ %s"],
                       Pervasives["string_of_bool"](x[1]));
              
             }}
         },
       toplevel_phrase,
       function(self$neg1,f,x)
        {switch(x[0])
          {case 0:
            Format["pp_open_hvbox"](f,0);
            /* unknown */"(sendself self-1/2029 list/1069 0a 0a 0a\n  (sendself self-1/2029 structure_item/1120) f/2030 (field 0 x/2031))";
            
            return Format["pp_close_box"](f,/* () */0);
            
           case 1:
            /* unknown */"(sendself self-1/2029 directive_argument/1129)";
            return pp
                    (f,
                     [/* Format */0,
                      [/* Formatting_gen */18,
                       [/* Open_box */1,
                        [/* Format */0,
                         [/* String_literal */11,"<hov2>",/* End_of_format */0],
                         "<hov2>"]],
                       [/* Char_literal */12,
                        35,
                        [/* String */2,
                         /* No_padding */0,
                         [/* Formatting_lit */17,
                          [/* Break */0,"@ ",1,0],
                          [/* Alpha */15,
                           [/* Formatting_lit */17,
                            /* Close_box */0,
                            /* End_of_format */0]]]]]],
                      "@[<hov2>#%s@ %a@]"],
                     x[1],
                     0,
                     x[2]);
            
           }
         }]);
    return function(env,$$self,param)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[pipe+1]=
      /* false */0,
      $$self$1[semi+1]=
      /* false */0,
      $$self$1[ifthenelse+1]=
      /* false */0;
      return $$self$1;
      };
    };

var
 printer=
  CamlinternalOO["make_class"]
   ([0,
     "reset_ifthenelse",
     "core_type",
     "structure",
     "list",
     "bindings",
     "case_list",
     "core_type1",
     "directive_argument",
     "nonrec_flag",
     "reset_pipe",
     "reset_semi",
     "constant_string",
     "under_pipe",
     "signature_item",
     "under_semi",
     "extension_constructor",
     "toplevel_phrase",
     "extension",
     "label_exp",
     "reset",
     "virtual_flag",
     "rec_flag",
     "under_ifthenelse",
     "payload",
     "type_with_label",
     "class_type_declaration_list",
     "value_description",
     "string_quot",
     "longident_loc",
     "attribute",
     "simple_expr",
     "type_param",
     "type_params",
     "binding",
     "item_extension",
     "class_signature",
     "type_extension",
     "label_x_expression_param",
     "longident",
     "pattern",
     "simple_pattern",
     "signature",
     "attributes",
     "sugar_expr",
     "item_attribute",
     "tyvar",
     "expression1",
     "expression2",
     "private_flag",
     "exception_declaration",
     "constant",
     "class_expr",
     "floating_attribute",
     "direction_flag",
     "type_declaration",
     "class_params_def",
     "option",
     "module_expr",
     "expression",
     "class_type",
     "structure_item",
     "module_type",
     "pattern1",
     "type_def_list",
     "class_structure",
     "mutable_flag",
     "paren",
     "item_attributes",
     "class_field"],
    printer_init);

var $$default=printer[1](0,/* () */0);

var
 toplevel_phrase=
  function(f,x)
   {switch(x[0])
     {case 0:
       /* unknown */"(send default/2035 -944563106 0a 0a 0a (send default/2035 832861151))";
       return pp
               (f,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<hov0>",/* End_of_format */0],
                    "<hov0>"]],
                  [/* Alpha */15,
                   [/* Formatting_lit */17,
                    /* Close_box */0,
                    /* End_of_format */0]]],
                 "@[<hov0>%a@]"],
                0,
                x[1]);
       
      case 1:
       /* unknown */"(send default/2035 -861078611)";
       return pp
               (f,
                [/* Format */0,
                 [/* Formatting_gen */18,
                  [/* Open_box */1,
                   [/* Format */0,
                    [/* String_literal */11,"<hov2>",/* End_of_format */0],
                    "<hov2>"]],
                  [/* Char_literal */12,
                   35,
                   [/* String */2,
                    /* No_padding */0,
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,
                      [/* Formatting_lit */17,
                       /* Close_box */0,
                       /* End_of_format */0]]]]]],
                 "@[<hov2>#%s@ %a@]"],
                x[1],
                0,
                x[2]);
       
      }
    };

var
 expression=
  function(f,x)
   {/* unknown */"(send default/2035 782176664)";
    return pp
            (f,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,[/* Format */0,/* End_of_format */0,""]],
               [/* Alpha */15,
                [/* Formatting_lit */17,/* Close_box */0,/* End_of_format */0]]],
              "@[%a@]"],
             0,
             x);
    };

var
 string_of_expression=
  function(x)
   {Format["flush_str_formatter"](/* () */0);
    var f=Format["str_formatter"];
    
    /* unknown */"(send default/2035 782176664 f/2047 x/2046)";
    
    return Format["flush_str_formatter"](/* () */0);
    };

var
 string_of_structure=
  function(x)
   {Format["flush_str_formatter"](/* () */0);
    var f=Format["str_formatter"];
    
    /* unknown */"(send default/2035 -951102413 f/2050 x/2049)";
    
    return Format["flush_str_formatter"](/* () */0);
    };

var
 top_phrase=
  function(f,x)
   {Format["pp_print_newline"](f,/* () */0);
    toplevel_phrase(f,x);
    pp
     (f,
      [/* Format */0,[/* String_literal */11,";;",/* End_of_format */0],";;"]);
    return Format["pp_print_newline"](f,/* () */0);
    };

/* unknown */"(send default/2035 -957384486)";

/* unknown */"(send default/2035 293013072)";

/* unknown */"(send default/2035 359375608)";

/* unknown */"(send default/2035 -951102413)";

module["exports"]=
{"printer":printer,
 "default":$$default,
 "toplevel_phrase":toplevel_phrase,
 "expression":expression,
 "string_of_expression":string_of_expression,
 "top_phrase":top_phrase,
 "core_type":core_type,
 "pattern":pattern,
 "signature":signature,
 "structure":structure,
 "string_of_structure":string_of_structure};

