// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_name=require("Odoc_name");
var $$String=require("String");
var Printtyp=require("Printtyp");
var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Buffer=require("Buffer");
var Odoc_print=require("Odoc_print");
var Odoc_misc=require("Odoc_misc");
var Odoc_messages=require("Odoc_messages");



var
 string_of_variance=
  function(t,param)
   {if
     (((t[4]=/* Type_abstract */0)||(t[4]=/* Type_open */1))&&
      (t[6]=/* None */0))
     {var cn=param[2];
      
      var exit;
      
      if(param[1]!=0)
       {if(cn!=0){exit=52;}else{return "+";}}
      else
       {if(cn!=0){return "-";}else{exit=52;}}
      
      switch(exit){case 52:return "";}
      }
    else
     {return "";}
    };

var
 is_arrow_type=
  function(t)
   {var match=t[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 1:return /* true */1;
        case 6:exit=51;
        case 7:exit=51;
        default:exit=50;}}
    
    switch(exit)
     {case 51:return is_arrow_type(match[1]);case 50:return /* false */0;}
    };

var
 raw_string_of_type_list=
  function(sep,type_list)
   {var buf=Buffer["create"](256);
    
    var fmt=Format["formatter_of_buffer"](buf);
    
    var
     need_parent=
      function(t)
       {var match=t[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:exit=42;
            case 2:exit=42;
            case 3:return /* false */0;
            case 6:exit=45;
            case 7:exit=45;
            default:exit=44;}}
        
        switch(exit)
         {case 45:return need_parent(match[1]);
          case 42:return /* true */1;
          case 44:return /* false */0;
          }
        };
    
    var
     print_one_type=
      function(variance,t)
       {Printtyp["mark_loops"](t);
        if(need_parent(t))
         {Format["fprintf"]
           (fmt,
            [/* Format */0,
             [/* Char_literal */12,
              40,
              [/* String */2,/* No_padding */0,/* End_of_format */0]],
             "(%s"],
            variance);
          Printtyp["type_scheme_max"]([/* Some */0,/* false */0],fmt,t);
          return Format["fprintf"]
                  (fmt,
                   [/* Format */0,
                    [/* Char_literal */12,41,/* End_of_format */0],
                    ")"]);
          }
        else
         {Format["fprintf"]
           (fmt,
            [/* Format */0,
             [/* String */2,/* No_padding */0,/* End_of_format */0],
             "%s"],
            variance);
          return Printtyp["type_scheme_max"]([/* Some */0,/* false */0],fmt,t);
          }
        };
    
    if(type_list)
     {var tyl=type_list[2];
      
      var match=type_list[1];
      
      var ty=match[2];
      
      var variance=match[1];
      
      if(tyl)
       {Format["fprintf"]
         (fmt,
          [/* Format */0,
           [/* Formatting_gen */18,
            [/* Open_box */1,
             [/* Format */0,
              [/* String_literal */11,"<hov 2>",/* End_of_format */0],
              "<hov 2>"]],
            /* End_of_format */0],
           "@[<hov 2>"]),
        print_one_type(variance,ty),
        List["iter"]
         (function(param)
           {Format["fprintf"]
             (fmt,
              [/* Format */0,
               [/* Formatting_lit */17,
                [/* Break */0,"@,",0,0],
                [/* String */2,/* No_padding */0,/* End_of_format */0]],
               "@,%s"],
              sep);
            return print_one_type(param[1],param[2]);
            },
          tyl),
        Format["fprintf"]
         (fmt,
          [/* Format */0,
           [/* Formatting_lit */17,/* Close_box */0,/* End_of_format */0],
           "@]"])}
      else
       {print_one_type(variance,ty)}
      }
    else
     {}
    
    Format["pp_print_flush"](fmt,/* () */0);
    return Buffer["contents"](buf);
    };

var
 string_of_type_list=
  function(par,sep,type_list)
   {if(par)
     {var par$1=par[1];}
    else
     {var exit;
      
      if(type_list)
       {if(type_list[2]){var par$1=/* true */1;}else{exit=36;}}
      else
       {exit=36;}
      
      switch(exit){case 36:var par$1=/* false */0;}
      }
    
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String */2,
                /* No_padding */0,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s%s%s"],
             par$1?"(":"",
             raw_string_of_type_list
              (sep,
               List["map"](function(t){return /* tuple */[0,"",t];},type_list)),
             par$1?")":"");
    };

var
 string_of_type_param_list=
  function(t)
   {var match=t[3];
    
    var exit;
    
    if(match){if(match[2]){var par=/* true */1;}else{exit=32;}}else{exit=32;}
    
    switch(exit){case 32:var par=/* false */0;}
    
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String */2,
                /* No_padding */0,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s%s%s"],
             par?"(":"",
             raw_string_of_type_list
              (", ",
               List["map"]
                (function(param)
                  {return /* tuple */[0,
                           string_of_variance(t,/* tuple */[0,param[2],param[3]]),
                           param[1]];
                   },
                 t[3])),
             par?")":"");
    };

var
 string_of_type_extension_param_list=
  function(te)
   {var match=te[3];
    
    var exit;
    
    if(match){if(match[2]){var par=/* true */1;}else{exit=28;}}else{exit=28;}
    
    switch(exit){case 28:var par=/* false */0;}
    
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String */2,
                /* No_padding */0,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s%s%s"],
             par?"(":"",
             raw_string_of_type_list
              (", ",
               List["map"](function(typ){return /* tuple */[0,"",typ];},te[3])),
             par?")":"");
    };

var
 string_of_class_type_param_list=
  function(l)
   {var exit;
    
    if(l){if(l[2]){var par=/* true */1;}else{exit=24;}}else{exit=24;}
    
    switch(exit){case 24:var par=/* false */0;}
    
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String */2,
                /* No_padding */0,
                [/* String */2,/* No_padding */0,/* End_of_format */0]]],
              "%s%s%s"],
             par?"[":"",
             raw_string_of_type_list
              (", ",
               List["map"](function(typ){return /* tuple */[0,"",typ];},l)),
             par?"]":"");
    };

var
 string_of_class_params=
  function(c)
   {var b=Buffer["create"](256);
    
    var
     iter=
      function(param)
       {var exit;
        
        switch(param[0])
         {case 0:exit=21;
          case 1:exit=21;
          case 2:
           var t=param[2];
           
           var label=param[1];
           
           var parent=is_arrow_type(t);
           
           switch(label)
            {case "":var $js="";default:var $js=Pervasives["^"](label,":");}
           Printf["bprintf"]
            (b,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* String */2,
                /* No_padding */0,
                [/* String */2,
                 /* No_padding */0,
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11," -> ",/* End_of_format */0]]]]],
              "%s%s%s%s -> "],
             $js,
             parent?"(":"",
             Odoc_print["string_of_type_expr"]
              (Odoc_misc["is_optional"](label)?Odoc_misc["remove_option"](t):t),
             parent?")":"");
           return iter(param[3]);
           
          }
        
        switch(exit){case 21:return /* () */0;}
        };
    
    iter(c[3]);
    return Buffer["contents"](b);
    };

var
 bool_of_private=
  function(param){if(param!=0){return /* false */0;}else{return /* true */1;}};

var
 string_of_type=
  function(t)
   {var M=Odoc_type;
    
    var P=Printf;
    
    var
     field_doc_str=
      function(param)
       {if(param)
         {return P[4]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "(* ",
                     [/* String */2,
                      /* No_padding */0,
                      [/* String_literal */11," *)",/* End_of_format */0]]],
                    "(* %s *)"],
                   Odoc_misc["string_of_info"](param[1]));
          }
        else
         {return "";}
        };
    
    var priv=bool_of_private(t[5]);
    
    var
     parameters_str=
      $$String["concat"]
       (" ",
        List["map"]
         (function(param)
           {return Pervasives["^"]
                    (string_of_variance(t,/* tuple */[0,param[2],param[3]]),
                     Odoc_print["string_of_type_expr"](param[1]));
            },
          t[3]));
    
    var match=t[6];
    
    if(match)
     {var match$1=match[1];
      
      switch(match$1[0])
       {case 0:
         var
          manifest_str=
           Pervasives["^"]
            ("= ",
             Pervasives["^"]
              (priv?"private ":"",
               Pervasives["^"]
                (Odoc_print["string_of_type_expr"](match$1[1])," ")));
         
        case 1:
         var
          manifest_str=
           P[4]
            ([/* Format */0,
              [/* String_literal */11,
               "= ",
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 "<\n",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"\n>\n",/* End_of_format */0]]]]],
              "= %s<\n%s\n>\n"],
             priv?"private ":"",
             $$String["concat"]
              ("\n",
               List["map"]
                (function(field)
                  {return P[4]
                           ([/* Format */0,
                             [/* String_literal */11,
                              "   ",
                              [/* String */2,
                               /* No_padding */0,
                               [/* String_literal */11,
                                " : ",
                                [/* String */2,
                                 /* No_padding */0,
                                 [/* Char_literal */12,
                                  59,
                                  [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                             "   %s : %s;%s"],
                            field[1],
                            Odoc_print["string_of_type_expr"](field[2]),
                            field_doc_str(field[3]));
                   },
                 match$1[1])));
         
        }
      }
    else
     {var manifest_str="";}
    
    var match$2=t[4];
    
    if(typeof match$2=="number")
     {switch(match$2)
       {case 0:var type_kind_str="";case 1:var type_kind_str="= ..";}}
    else
     {switch(match$2[0])
       {case 0:
         var
          type_kind_str=
           P[4]
            ([/* Format */0,
              [/* Char_literal */12,
               61,
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 10,
                 [/* String */2,
                  /* No_padding */0,
                  [/* Char_literal */12,10,/* End_of_format */0]]]]],
              "=%s\n%s\n"],
             priv?" private":"",
             $$String["concat"]
              ("\n",
               List["map"]
                (function(cons)
                  {var match$3=cons[4];
                   
                   if(match$3)
                    {var
                      comment=
                       P[4]
                        ([/* Format */0,
                          [/* String_literal */11,
                           "(* ",
                           [/* String */2,
                            /* No_padding */0,
                            [/* String_literal */11," *)",/* End_of_format */0]]],
                          "(* %s *)"],
                         Odoc_misc["string_of_info"](match$3[1]));
                     }
                   else
                    {var comment="";}
                   
                   var
                    string_of_parameters=
                     function(lst)
                      {return $$String["concat"]
                               (" * ",
                                List["map"]
                                 (function(t)
                                   {return Pervasives["^"]
                                            ("(",
                                             Pervasives["^"](Odoc_print["string_of_type_expr"](t),")"));
                                    },
                                  lst));
                       };
                   
                   var match$4=cons[2];
                   
                   var match$5=cons[3];
                   
                   return P[4]
                           ([/* Format */0,
                             [/* String_literal */11,
                              "  | ",
                              [/* String */2,
                               /* No_padding */0,
                               [/* String */2,
                                /* No_padding */0,
                                [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                             "  | %s%s%s"],
                            cons[1],
                            match$4
                             ?match$5
                               ?P[4]
                                 ([/* Format */0,
                                   [/* String_literal */11,
                                    " : ",
                                    [/* String */2,
                                     /* No_padding */0,
                                     [/* String_literal */11,
                                      " -> ",
                                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                                   " : %s -> %s"],
                                  string_of_parameters(match$4),
                                  Odoc_print["string_of_type_expr"](match$5[1]))
                               :Pervasives["^"](" of ",string_of_parameters(match$4))
                             :match$5
                               ?Pervasives["^"]
                                 (" : ",Odoc_print["string_of_type_expr"](match$5[1]))
                               :"",
                            comment);
                   },
                 match$2[1])));
         
        case 1:
         var
          type_kind_str=
           P[4]
            ([/* Format */0,
              [/* String_literal */11,
               "= ",
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 "{\n",
                 [/* String */2,
                  /* No_padding */0,
                  [/* String_literal */11,"\n}\n",/* End_of_format */0]]]]],
              "= %s{\n%s\n}\n"],
             priv?"private ":"",
             $$String["concat"]
              ("\n",
               List["map"]
                (function(field)
                  {return P[4]
                           ([/* Format */0,
                             [/* String_literal */11,
                              "   ",
                              [/* String */2,
                               /* No_padding */0,
                               [/* String */2,
                                /* No_padding */0,
                                [/* String_literal */11,
                                 " : ",
                                 [/* String */2,
                                  /* No_padding */0,
                                  [/* Char_literal */12,
                                   59,
                                   [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]],
                             "   %s%s : %s;%s"],
                            field[2]?"mutable ":"",
                            field[1],
                            Odoc_print["string_of_type_expr"](field[3]),
                            field_doc_str(field[4]));
                   },
                 match$2[1])));
         
        }}
    
    var match$3=t[2];
    
    return P[4]
            ([/* Format */0,
              [/* String_literal */11,
               "type ",
               [/* String */2,
                /* No_padding */0,
                [/* Char_literal */12,
                 32,
                 [/* String */2,
                  /* No_padding */0,
                  [/* Char_literal */12,
                   32,
                   [/* String */2,
                    /* No_padding */0,
                    [/* String */2,
                     /* No_padding */0,
                     [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]]],
              "type %s %s %s%s%s"],
             parameters_str,
             Odoc_name["simple"](t[1]),
             manifest_str,
             type_kind_str,
             match$3?Odoc_misc["string_of_info"](match$3[1]):"");
    };

var
 string_of_type_extension=
  function(te)
   {var M=Odoc_extension;
    
    var match=te[1];
    
    return Pervasives["^"]
            ("type ",
             Pervasives["^"]
              ($$String["concat"]
                ("",
                 List["map"]
                  (function(p)
                    {return Pervasives["^"]
                             (Odoc_print["string_of_type_expr"](p)," ");
                     },
                   te[3])),
               Pervasives["^"]
                (te[2],
                 Pervasives["^"]
                  (" += ",
                   Pervasives["^"]
                    (bool_of_private(te[4])?"private ":"",
                     Pervasives["^"]
                      ("\n",
                       Pervasives["^"]
                        ($$String["concat"]
                          ("",
                           List["map"]
                            (function(x)
                              {var match$1=x[2];
                               
                               var match$2=x[3];
                               
                               var match$3=x[5];
                               
                               if(match$3)
                                {var xa=match$3[1];
                                 
                                 var match$4=xa[2];
                                 
                                 var $js=Pervasives["^"](" = ",match$4?match$4[1][1]:xa[1]);
                                 }
                               else
                                {var $js="";}
                               var match$5=x[7];
                               
                               return Pervasives["^"]
                                       ("  | ",
                                        Pervasives["^"]
                                         (Odoc_name["simple"](x[1]),
                                          Pervasives["^"]
                                           (match$1
                                             ?match$2
                                               ?Pervasives["^"]
                                                 (" : ",
                                                  Pervasives["^"]
                                                   ($$String["concat"]
                                                     (" * ",
                                                      List["map"]
                                                       (function(t)
                                                         {return Pervasives["^"]
                                                                  ("(",
                                                                   Pervasives["^"](Odoc_print["string_of_type_expr"](t),")"));
                                                          },
                                                        match$1)),
                                                    Pervasives["^"]
                                                     (" -> ",Odoc_print["string_of_type_expr"](match$2[1]))))
                                               :Pervasives["^"]
                                                 (" of ",
                                                  $$String["concat"]
                                                   (" * ",
                                                    List["map"]
                                                     (function(t)
                                                       {return Pervasives["^"]
                                                                ("(",
                                                                 Pervasives["^"](Odoc_print["string_of_type_expr"](t),")"));
                                                        },
                                                      match$1)))
                                             :match$2
                                               ?Pervasives["^"]
                                                 (" : ",Odoc_print["string_of_type_expr"](match$2[1]))
                                               :"",
                                            Pervasives["^"]
                                             ($js,
                                              Pervasives["^"]
                                               (match$5
                                                 ?Pervasives["^"]
                                                   ("(* ",
                                                    Pervasives["^"]
                                                     (Odoc_misc["string_of_info"](match$5[1])," *)"))
                                                 :"",
                                                "\n")))));
                               },
                             te[5])),
                         match?Odoc_misc["string_of_info"](match[1]):"")))))));
    };

var
 string_of_exception=
  function(e)
   {var M=Odoc_exception;
    
    var match=e[3];
    
    var match$1=e[4];
    
    var match$2=e[5];
    
    if(match$2)
     {var ea=match$2[1];
      
      var match$3=ea[2];
      
      var $js=Pervasives["^"](" = ",match$3?match$3[1][1]:ea[1]);
      }
    else
     {var $js="";}
    var match$4=e[2];
    
    return Pervasives["^"]
            ("exception ",
             Pervasives["^"]
              (Odoc_name["simple"](e[1]),
               Pervasives["^"]
                (match
                  ?match$1
                    ?Pervasives["^"]
                      (" : ",
                       Pervasives["^"]
                        ($$String["concat"]
                          (" * ",
                           List["map"]
                            (function(t)
                              {return Pervasives["^"]
                                       ("(",
                                        Pervasives["^"](Odoc_print["string_of_type_expr"](t),")"));
                               },
                             match)),
                         Pervasives["^"]
                          (" -> ",Odoc_print["string_of_type_expr"](match$1[1]))))
                    :Pervasives["^"]
                      (" of ",
                       $$String["concat"]
                        (" * ",
                         List["map"]
                          (function(t)
                            {return Pervasives["^"]
                                     ("(",
                                      Pervasives["^"](Odoc_print["string_of_type_expr"](t),")"));
                             },
                           match)))
                  :match$1
                    ?Pervasives["^"]
                      (" : ",Odoc_print["string_of_type_expr"](match$1[1]))
                    :"",
                 Pervasives["^"]
                  ($js,
                   Pervasives["^"]
                    ("\n",match$4?Odoc_misc["string_of_info"](match$4[1]):"")))));
    };

var
 string_of_value=
  function(v)
   {var M=Odoc_value;
    
    var match=v[2];
    
    return Pervasives["^"]
            ("val ",
             Pervasives["^"]
              (Odoc_name["simple"](v[1]),
               Pervasives["^"]
                (" : ",
                 Pervasives["^"]
                  (Odoc_print["string_of_type_expr"](v[3]),
                   Pervasives["^"]
                    ("\n",match?Odoc_misc["string_of_info"](match[1]):"")))));
    };

var
 string_of_attribute=
  function(a)
   {var M=Odoc_value;
    
    var match=a[1][2];
    
    return Pervasives["^"]
            ("val ",
             Pervasives["^"]
              (a[3]?"virtual ":"",
               Pervasives["^"]
                (a[2]?Pervasives["^"](Odoc_messages["mutab"]," "):"",
                 Pervasives["^"]
                  (Odoc_name["simple"](a[1][1]),
                   Pervasives["^"]
                    (" : ",
                     Pervasives["^"]
                      (Odoc_print["string_of_type_expr"](a[1][3]),
                       Pervasives["^"]
                        ("\n",match?Odoc_misc["string_of_info"](match[1]):"")))))));
    };

var
 string_of_method=
  function(m)
   {var M=Odoc_value;
    
    var match=m[1][2];
    
    return Pervasives["^"]
            ("method ",
             Pervasives["^"]
              (m[2]?Pervasives["^"](Odoc_messages["privat"]," "):"",
               Pervasives["^"]
                (Odoc_name["simple"](m[1][1]),
                 Pervasives["^"]
                  (" : ",
                   Pervasives["^"]
                    (Odoc_print["string_of_type_expr"](m[1][3]),
                     Pervasives["^"]
                      ("\n",match?Odoc_misc["string_of_info"](match[1]):""))))));
    };

module["exports"]=
{"string_of_variance":string_of_variance,
 "string_of_type_list":string_of_type_list,
 "string_of_type_param_list":string_of_type_param_list,
 "string_of_type_extension_param_list":string_of_type_extension_param_list,
 "string_of_class_type_param_list":string_of_class_type_param_list,
 "string_of_type":string_of_type,
 "string_of_class_params":string_of_class_params,
 "string_of_type_extension":string_of_type_extension,
 "string_of_exception":string_of_exception,
 "string_of_value":string_of_value,
 "string_of_attribute":string_of_attribute,
 "string_of_method":string_of_method};

