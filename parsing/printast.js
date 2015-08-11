// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var List=require("List");
var Pervasives=require("Pervasives");
var Format=require("Format");
var Misc=require("Misc");


var
 fmt_position=
  function(with_name,f,l)
   {if(with_name){var fname=l[1];}else{var fname="";}
    
    if(l[2]=-1)
     {return Format["fprintf"]
              (f,[0,[2,0,[12,91,[4,0,0,0,[12,93,0]]]],"%s[%d]"],fname,l[4]);
      }
    else
     {return Format["fprintf"]
              (f,
               [0,
                [2,
                 0,
                 [12,
                  91,
                  [4,0,0,0,[12,44,[4,0,0,0,[12,43,[4,0,0,0,[12,93,0]]]]]]]],
                "%s[%d,%d+%d]"],
               fname,
               l[2],
               l[3],
               l[4]-l[3]);
      }
    };

var
 fmt_location=
  function(f,loc)
   {var p_2nd_name="unknown primitive:caml_string_notequal";
    
    Format["fprintf"]
     (f,
      [0,[12,40,[15,[11,"..",[15,[12,41,0]]]]],"(%a..%a)"],
      fmt_position(1),
      loc[1],
      fmt_position(p_2nd_name),
      loc[2]);
    if(loc[3])
     {return Format["fprintf"](f,[0,[11," ghost",0]," ghost"]);}
    else
     {return 0;}
    };

var
 fmt_longident_aux=
  function(f,x)
   {switch(x)
     {case 0:return Format["fprintf"](f,[0,[2,0,0],"%s"],x[1]);
      case 1:
       return Format["fprintf"]
               (f,
                [0,[15,[12,46,[2,0,0]]],"%a.%s"],
                fmt_longident_aux,
                x[1],
                x[2]);
       
      case 2:
       return Format["fprintf"]
               (f,
                [0,[15,[12,40,[15,[12,41,0]]]],"%a(%a)"],
                fmt_longident_aux,
                x[1],
                fmt_longident_aux,
                x[2]);
       
      }
    };

var
 fmt_longident=
  function(f,x)
   {return Format["fprintf"]
            (f,[0,[12,34,[15,[12,34,0]]],'"%a"'],fmt_longident_aux,x);
    };

var
 fmt_longident_loc=
  function(f,x)
   {return Format["fprintf"]
            (f,
             [0,[12,34,[15,[11,'" ',[15,0]]]],'"%a" %a'],
             fmt_longident_aux,
             x[1],
             fmt_location,
             x[2]);
    };

var
 fmt_string_loc=
  function(f,x)
   {return Format["fprintf"]
            (f,
             [0,[12,34,[2,0,[11,'" ',[15,0]]]],'"%s" %a'],
             x[1],
             fmt_location,
             x[2]);
    };

var
 fmt_constant=
  function(f,x)
   {switch(x)
     {case 0:
       return Format["fprintf"]
               (f,[0,[11,"Const_int ",[4,0,0,0,0]],"Const_int %d"],x[1]);
       
      case 1:
       return Format["fprintf"]
               (f,
                [0,[11,"Const_char ",[4,6,[0,2,2],0,0]],"Const_char %02x"],
                x[1]);
       
      case 2:
       var match=x[2];
       
       var s=x[1];
       
       if(match)
        {return Format["fprintf"]
                 (f,
                  [0,
                   [11,"Const_string (",[3,0,[11,",Some ",[3,0,[12,41,0]]]]],
                   "Const_string (%S,Some %S)"],
                  s,
                  match[1]);
         }
       else
        {return Format["fprintf"]
                 (f,
                  [0,
                   [11,"Const_string(",[3,0,[11,",None)",0]]],
                   "Const_string(%S,None)"],
                  s);
         }
       
      case 3:
       return Format["fprintf"]
               (f,[0,[11,"Const_float ",[2,0,0]],"Const_float %s"],x[1]);
       
      case 4:
       return Format["fprintf"]
               (f,[0,[11,"Const_int32 ",[5,0,0,0,0]],"Const_int32 %ld"],x[1]);
       
      case 5:
       return Format["fprintf"]
               (f,[0,[11,"Const_int64 ",[7,0,0,0,0]],"Const_int64 %Ld"],x[1]);
       
      case 6:
       return Format["fprintf"]
               (f,
                [0,[11,"Const_nativeint ",[6,0,0,0,0]],"Const_nativeint %nd"],
                x[1]);
       
      }
    };

var
 fmt_mutable_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Mutable",0],"Mutable"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Immutable",0],"Immutable"]);}
    };

var
 fmt_virtual_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Concrete",0],"Concrete"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Virtual",0],"Virtual"]);}
    };

var
 fmt_override_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Fresh",0],"Fresh"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Override",0],"Override"]);}
    };

var
 fmt_closed_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Open",0],"Open"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Closed",0],"Closed"]);}
    };

var
 fmt_rec_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Rec",0],"Rec"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Nonrec",0],"Nonrec"]);}
    };

var
 fmt_direction_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Down",0],"Down"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Up",0],"Up"]);}
    };

var
 fmt_private_flag=
  function(f,x)
   {if(x!=0)
     {return Format["fprintf"](f,[0,[11,"Public",0],"Public"]);}
    else
     {return Format["fprintf"](f,[0,[11,"Private",0],"Private"]);}
    };

var
 line=
  function(i,f,s)
   {Format["fprintf"](f,[0,[2,0,0],"%s"],$$String["make"](2*i%72,32));
    return Format["fprintf"](f,s);
    };

var
 list=
  function(i,f,ppf,l)
   {if(l)
     {line(i,ppf,[0,[11,"[\n",0],"[\n"]);
      List["iter"](f(i+1,ppf),l);
      return line(i,ppf,[0,[11,"]\n",0],"]\n"]);
      }
    else
     {return line(i,ppf,[0,[11,"[]\n",0],"[]\n"]);}
    };

var
 option=
  function(i,f,ppf,x)
   {if(x)
     {line(i,ppf,[0,[11,"Some\n",0],"Some\n"]);return f(i+1,ppf,x[1]);}
    else
     {return line(i,ppf,[0,[11,"None\n",0],"None\n"]);}
    };

var
 longident_loc=
  function(i,ppf,li)
   {return line(i,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_longident_loc,li);};

var
 string=
  function(i,ppf,s)
   {return line(i,ppf,[0,[12,34,[2,0,[11,'"\n',0]]],'"%s"\n'],s);};

var
 string_loc=
  function(i,ppf,s)
   {return line(i,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_string_loc,s);};

var
 bool=
  function(i,ppf,x)
   {return line
            (i,ppf,[0,[2,0,[12,10,0]],"%s\n"],Pervasives["string_of_bool"](x));
    };

var
 label=
  function(i,ppf,x)
   {return line(i,ppf,[0,[11,'label="',[2,0,[11,'"\n',0]]],'label="%s"\n'],x);
    };

var
 core_type=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"core_type ",[15,[12,10,0]]],"core_type %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:return line(i$1,ppf,[0,[11,"Ptyp_any\n",0],"Ptyp_any\n"]);}}
    else
     {switch(match[0])
       {case 0:
         return line
                 (i$1,
                  ppf,
                  [0,[11,"Ptyp_var ",[2,0,[12,10,0]]],"Ptyp_var %s\n"],
                  match[1]);
         
        case 1:
         line(i$1,ppf,[0,[11,"Ptyp_arrow\n",0],"Ptyp_arrow\n"]);
         string(i$1,ppf,match[1]);
         core_type(i$1,ppf,match[2]);
         return core_type(i$1,ppf,match[3]);
         
        case 2:
         line(i$1,ppf,[0,[11,"Ptyp_tuple\n",0],"Ptyp_tuple\n"]);
         return list(i$1,core_type,ppf,match[1]);
         
        case 3:
         line
          (i$1,
           ppf,
           [0,[11,"Ptyp_constr ",[15,[12,10,0]]],"Ptyp_constr %a\n"],
           fmt_longident_loc,
           match[1]);
         return list(i$1,core_type,ppf,match[2]);
         
        case 4:
         line
          (i$1,
           ppf,
           [0,[11,"Ptyp_object ",[15,[12,10,0]]],"Ptyp_object %a\n"],
           fmt_closed_flag,
           match[2]);
         var i$2=i$1+1;
         
         return List["iter"]
                 (function(param)
                   {line
                     (i$2,
                      ppf,
                      [0,[11,"method ",[2,0,[12,10,0]]],"method %s\n"],
                      param[1]);
                    attributes(i$2,ppf,param[2]);
                    return core_type(i$2+1,ppf,param[3]);
                    },
                  match[1]);
         
        case 5:
         line
          (i$1,
           ppf,
           [0,[11,"Ptyp_class ",[15,[12,10,0]]],"Ptyp_class %a\n"],
           fmt_longident_loc,
           match[1]);
         return list(i$1,core_type,ppf,match[2]);
         
        case 6:
         line
          (i$1,
           ppf,
           [0,[11,'Ptyp_alias "',[2,0,[11,'"\n',0]]],'Ptyp_alias "%s"\n'],
           match[2]);
         return core_type(i$1,ppf,match[1]);
         
        case 7:
         line
          (i$1,
           ppf,
           [0,
            [11,"Ptyp_variant closed=",[15,[12,10,0]]],
            "Ptyp_variant closed=%a\n"],
           fmt_closed_flag,
           match[2]);
         list(i$1,label_x_bool_x_core_type_list,ppf,match[1]);
         return option
                 (i$1,function(i$3){return list(i$3,string);},ppf,match[3]);
         
        case 8:
         line
          (i$1,
           ppf,
           [0,[11,"Ptyp_poly",[15,[12,10,0]]],"Ptyp_poly%a\n"],
           function(ppf$1)
            {return List["iter"]
                     (function(x$1)
                       {return Format["fprintf"]
                                (ppf$1,[0,[11," '",[2,0,0]]," '%s"],x$1);
                        });
             },
           match[1]);
         return core_type(i$1,ppf,match[2]);
         
        case 9:
         var match$1=match[1];
         
         line
          (i$1,
           ppf,
           [0,[11,"Ptyp_package ",[15,[12,10,0]]],"Ptyp_package %a\n"],
           fmt_longident_loc,
           match$1[1]);
         return list(i$1,package_with,ppf,match$1[2]);
         
        case 10:
         var match$2=match[1];
         
         line
          (i$1,
           ppf,
           [0,
            [11,'Ptyp_extension "',[2,0,[11,'"\n',0]]],
            'Ptyp_extension "%s"\n'],
           match$2[1][1]);
         return payload(i$1,ppf,match$2[2]);
         
        }}
    };

var
 package_with=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [0,[11,"with type ",[15,[12,10,0]]],"with type %a\n"],
      fmt_longident_loc,
      param[1]);
    return core_type(i,ppf,param[2]);
    };

var
 pattern=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"pattern ",[15,[12,10,0]]],"pattern %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:return line(i$1,ppf,[0,[11,"Ppat_any\n",0],"Ppat_any\n"]);}}
    else
     {switch(match[0])
       {case 0:
         return line
                 (i$1,
                  ppf,
                  [0,[11,"Ppat_var ",[15,[12,10,0]]],"Ppat_var %a\n"],
                  fmt_string_loc,
                  match[1]);
         
        case 1:
         line
          (i$1,
           ppf,
           [0,[11,"Ppat_alias ",[15,[12,10,0]]],"Ppat_alias %a\n"],
           fmt_string_loc,
           match[2]);
         return pattern(i$1,ppf,match[1]);
         
        case 2:
         return line
                 (i$1,
                  ppf,
                  [0,
                   [11,"Ppat_constant ",[15,[12,10,0]]],
                   "Ppat_constant %a\n"],
                  fmt_constant,
                  match[1]);
         
        case 3:
         return line
                 (i$1,
                  ppf,
                  [0,
                   [11,"Ppat_interval ",[15,[11,"..",[15,[12,10,0]]]]],
                   "Ppat_interval %a..%a\n"],
                  fmt_constant,
                  match[1],
                  fmt_constant,
                  match[2]);
         
        case 4:
         line(i$1,ppf,[0,[11,"Ppat_tuple\n",0],"Ppat_tuple\n"]);
         return list(i$1,pattern,ppf,match[1]);
         
        case 5:
         line
          (i$1,
           ppf,
           [0,[11,"Ppat_construct ",[15,[12,10,0]]],"Ppat_construct %a\n"],
           fmt_longident_loc,
           match[1]);
         return option(i$1,pattern,ppf,match[2]);
         
        case 6:
         line
          (i$1,
           ppf,
           [0,[11,'Ppat_variant "',[2,0,[11,'"\n',0]]],'Ppat_variant "%s"\n'],
           match[1]);
         return option(i$1,pattern,ppf,match[2]);
         
        case 7:
         line
          (i$1,
           ppf,
           [0,[11,"Ppat_record ",[15,[12,10,0]]],"Ppat_record %a\n"],
           fmt_closed_flag,
           match[2]);
         return list(i$1,longident_x_pattern,ppf,match[1]);
         
        case 8:
         line(i$1,ppf,[0,[11,"Ppat_array\n",0],"Ppat_array\n"]);
         return list(i$1,pattern,ppf,match[1]);
         
        case 9:
         line(i$1,ppf,[0,[11,"Ppat_or\n",0],"Ppat_or\n"]);
         pattern(i$1,ppf,match[1]);
         return pattern(i$1,ppf,match[2]);
         
        case 10:
         line(i$1,ppf,[0,[11,"Ppat_constraint\n",0],"Ppat_constraint\n"]);
         pattern(i$1,ppf,match[1]);
         return core_type(i$1,ppf,match[2]);
         
        case 11:
         line(i$1,ppf,[0,[11,"Ppat_type\n",0],"Ppat_type\n"]);
         return longident_loc(i$1,ppf,match[1]);
         
        case 12:
         line(i$1,ppf,[0,[11,"Ppat_lazy\n",0],"Ppat_lazy\n"]);
         return pattern(i$1,ppf,match[1]);
         
        case 13:
         return line
                 (i$1,
                  ppf,
                  [0,[11,"Ppat_unpack ",[15,[12,10,0]]],"Ppat_unpack %a\n"],
                  fmt_string_loc,
                  match[1]);
         
        case 14:
         line(i$1,ppf,[0,[11,"Ppat_exception\n",0],"Ppat_exception\n"]);
         return pattern(i$1,ppf,match[1]);
         
        case 15:
         var match$1=match[1];
         
         line
          (i$1,
           ppf,
           [0,
            [11,'Ppat_extension "',[2,0,[11,'"\n',0]]],
            'Ppat_extension "%s"\n'],
           match$1[1][1]);
         return payload(i$1,ppf,match$1[2]);
         
        }}
    };

var
 expression=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"expression ",[15,[12,10,0]]],"expression %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       return line
               (i$1,
                ppf,
                [0,[11,"Pexp_ident ",[15,[12,10,0]]],"Pexp_ident %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 1:
       return line
               (i$1,
                ppf,
                [0,[11,"Pexp_constant ",[15,[12,10,0]]],"Pexp_constant %a\n"],
                fmt_constant,
                match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [0,[11,"Pexp_let ",[15,[12,10,0]]],"Pexp_let %a\n"],
         fmt_rec_flag,
         match[1]);
       list(i$1,value_binding,ppf,match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 3:
       line(i$1,ppf,[0,[11,"Pexp_function\n",0],"Pexp_function\n"]);
       return list(i$1,$$case,ppf,match[1]);
       
      case 4:
       line
        (i$1,
         ppf,
         [0,[11,'Pexp_fun "',[2,0,[11,'"\n',0]]],'Pexp_fun "%s"\n'],
         match[1]);
       option(i$1,expression,ppf,match[2]);
       pattern(i$1,ppf,match[3]);
       return expression(i$1,ppf,match[4]);
       
      case 5:
       line(i$1,ppf,[0,[11,"Pexp_apply\n",0],"Pexp_apply\n"]);
       expression(i$1,ppf,match[1]);
       return list(i$1,label_x_expression,ppf,match[2]);
       
      case 6:
       line(i$1,ppf,[0,[11,"Pexp_match\n",0],"Pexp_match\n"]);
       expression(i$1,ppf,match[1]);
       return list(i$1,$$case,ppf,match[2]);
       
      case 7:
       line(i$1,ppf,[0,[11,"Pexp_try\n",0],"Pexp_try\n"]);
       expression(i$1,ppf,match[1]);
       return list(i$1,$$case,ppf,match[2]);
       
      case 8:
       line(i$1,ppf,[0,[11,"Pexp_tuple\n",0],"Pexp_tuple\n"]);
       return list(i$1,expression,ppf,match[1]);
       
      case 9:
       line
        (i$1,
         ppf,
         [0,[11,"Pexp_construct ",[15,[12,10,0]]],"Pexp_construct %a\n"],
         fmt_longident_loc,
         match[1]);
       return option(i$1,expression,ppf,match[2]);
       
      case 10:
       line
        (i$1,
         ppf,
         [0,[11,'Pexp_variant "',[2,0,[11,'"\n',0]]],'Pexp_variant "%s"\n'],
         match[1]);
       return option(i$1,expression,ppf,match[2]);
       
      case 11:
       line(i$1,ppf,[0,[11,"Pexp_record\n",0],"Pexp_record\n"]);
       list(i$1,longident_x_expression,ppf,match[1]);
       return option(i$1,expression,ppf,match[2]);
       
      case 12:
       line(i$1,ppf,[0,[11,"Pexp_field\n",0],"Pexp_field\n"]);
       expression(i$1,ppf,match[1]);
       return longident_loc(i$1,ppf,match[2]);
       
      case 13:
       line(i$1,ppf,[0,[11,"Pexp_setfield\n",0],"Pexp_setfield\n"]);
       expression(i$1,ppf,match[1]);
       longident_loc(i$1,ppf,match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 14:
       line(i$1,ppf,[0,[11,"Pexp_array\n",0],"Pexp_array\n"]);
       return list(i$1,expression,ppf,match[1]);
       
      case 15:
       line(i$1,ppf,[0,[11,"Pexp_ifthenelse\n",0],"Pexp_ifthenelse\n"]);
       expression(i$1,ppf,match[1]);
       expression(i$1,ppf,match[2]);
       return option(i$1,expression,ppf,match[3]);
       
      case 16:
       line(i$1,ppf,[0,[11,"Pexp_sequence\n",0],"Pexp_sequence\n"]);
       expression(i$1,ppf,match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 17:
       line(i$1,ppf,[0,[11,"Pexp_while\n",0],"Pexp_while\n"]);
       expression(i$1,ppf,match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 18:
       line
        (i$1,
         ppf,
         [0,[11,"Pexp_for ",[15,[12,10,0]]],"Pexp_for %a\n"],
         fmt_direction_flag,
         match[4]);
       pattern(i$1,ppf,match[1]);
       expression(i$1,ppf,match[2]);
       expression(i$1,ppf,match[3]);
       return expression(i$1,ppf,match[5]);
       
      case 19:
       line(i$1,ppf,[0,[11,"Pexp_constraint\n",0],"Pexp_constraint\n"]);
       expression(i$1,ppf,match[1]);
       return core_type(i$1,ppf,match[2]);
       
      case 20:
       line(i$1,ppf,[0,[11,"Pexp_coerce\n",0],"Pexp_coerce\n"]);
       expression(i$1,ppf,match[1]);
       option(i$1,core_type,ppf,match[2]);
       return core_type(i$1,ppf,match[3]);
       
      case 21:
       line
        (i$1,
         ppf,
         [0,[11,'Pexp_send "',[2,0,[11,'"\n',0]]],'Pexp_send "%s"\n'],
         match[2]);
       return expression(i$1,ppf,match[1]);
       
      case 22:
       return line
               (i$1,
                ppf,
                [0,[11,"Pexp_new ",[15,[12,10,0]]],"Pexp_new %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 23:
       line
        (i$1,
         ppf,
         [0,[11,"Pexp_setinstvar ",[15,[12,10,0]]],"Pexp_setinstvar %a\n"],
         fmt_string_loc,
         match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 24:
       line(i$1,ppf,[0,[11,"Pexp_override\n",0],"Pexp_override\n"]);
       return list(i$1,string_x_expression,ppf,match[1]);
       
      case 25:
       line
        (i$1,
         ppf,
         [0,[11,"Pexp_letmodule ",[15,[12,10,0]]],"Pexp_letmodule %a\n"],
         fmt_string_loc,
         match[1]);
       module_expr(i$1,ppf,match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 26:
       line(i$1,ppf,[0,[11,"Pexp_assert\n",0],"Pexp_assert\n"]);
       return expression(i$1,ppf,match[1]);
       
      case 27:
       line(i$1,ppf,[0,[11,"Pexp_lazy\n",0],"Pexp_lazy\n"]);
       return expression(i$1,ppf,match[1]);
       
      case 28:
       line(i$1,ppf,[0,[11,"Pexp_poly\n",0],"Pexp_poly\n"]);
       expression(i$1,ppf,match[1]);
       return option(i$1,core_type,ppf,match[2]);
       
      case 29:
       line(i$1,ppf,[0,[11,"Pexp_object\n",0],"Pexp_object\n"]);
       return class_structure(i$1,ppf,match[1]);
       
      case 30:
       line
        (i$1,
         ppf,
         [0,[11,'Pexp_newtype "',[2,0,[11,'"\n',0]]],'Pexp_newtype "%s"\n'],
         match[1]);
       return expression(i$1,ppf,match[2]);
       
      case 31:
       line(i$1,ppf,[0,[11,"Pexp_pack\n",0],"Pexp_pack\n"]);
       return module_expr(i$1,ppf,match[1]);
       
      case 32:
       line
        (i$1,
         ppf,
         [0,
          [11,"Pexp_open ",[15,[11,' "',[15,[11,'"\n',0]]]]],
          'Pexp_open %a "%a"\n'],
         fmt_override_flag,
         match[1],
         fmt_longident_loc,
         match[2]);
       return expression(i$1,ppf,match[3]);
       
      case 33:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pexp_extension "',[2,0,[11,'"\n',0]]],
          'Pexp_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var
 value_description=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,
       [11,"value_description ",[15,[12,32,[15,[12,10,0]]]]],
       "value_description %a %a\n"],
      fmt_string_loc,
      x[1],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[4]);
    core_type(i+1,ppf,x[2]);
    return list(i+1,string,ppf,x[3]);
    };

var type_parameter=function(i,ppf,param){return core_type(i,ppf,param[1]);};

var
 type_declaration=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,
       [11,"type_declaration ",[15,[12,32,[15,[12,10,0]]]]],
       "type_declaration %a %a\n"],
      fmt_string_loc,
      x[1],
      fmt_location,
      x[8]);
    attributes(i,ppf,x[7]);
    var i$1=i+1;
    
    line(i$1,ppf,[0,[11,"ptype_params =\n",0],"ptype_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line(i$1,ppf,[0,[11,"ptype_cstrs =\n",0],"ptype_cstrs =\n"]);
    list(i$1+1,core_type_x_core_type_x_location,ppf,x[3]);
    line(i$1,ppf,[0,[11,"ptype_kind =\n",0],"ptype_kind =\n"]);
    type_kind(i$1+1,ppf,x[4]);
    line
     (i$1,
      ppf,
      [0,[11,"ptype_private = ",[15,[12,10,0]]],"ptype_private = %a\n"],
      fmt_private_flag,
      x[5]);
    line(i$1,ppf,[0,[11,"ptype_manifest =\n",0],"ptype_manifest =\n"]);
    return option(i$1+1,core_type,ppf,x[6]);
    };

var
 attributes=
  function(i,ppf,l)
   {var i$1=i+1;
    
    return List["iter"]
            (function(param)
              {line
                (i$1,
                 ppf,
                 [0,[11,'attribute "',[2,0,[11,'"\n',0]]],'attribute "%s"\n'],
                 param[1][1]);
               return payload(i$1+1,ppf,param[2]);
               },
             l);
    };

var
 payload=
  function(i,ppf,param)
   {switch(param)
     {case 0:return structure(i,ppf,param[1]);
      case 1:return core_type(i,ppf,param[1]);
      case 2:
       var match=param[2];
       
       var x=param[1];
       
       if(match)
        {pattern(i,ppf,x);
         line(i,ppf,[0,[11,"<when>\n",0],"<when>\n"]);
         return expression(i+1,ppf,match[1]);
         }
       else
        {return pattern(i,ppf,x);}
       
      }
    };

var
 type_kind=
  function(i,ppf,x)
   {if(typeof x=="number")
     {switch(x)
       {case 0:
         return line(i,ppf,[0,[11,"Ptype_abstract\n",0],"Ptype_abstract\n"]);
        case 1:return line(i,ppf,[0,[11,"Ptype_open\n",0],"Ptype_open\n"]);
        }}
    else
     {switch(x[0])
       {case 0:
         line(i,ppf,[0,[11,"Ptype_variant\n",0],"Ptype_variant\n"]);
         return list(i+1,constructor_decl,ppf,x[1]);
         
        case 1:
         line(i,ppf,[0,[11,"Ptype_record\n",0],"Ptype_record\n"]);
         return list(i+1,label_decl,ppf,x[1]);
         
        }}
    };

var
 type_extension=
  function(i,ppf,x)
   {line(i,ppf,[0,[11,"type_extension\n",0],"type_extension\n"]);
    attributes(i,ppf,x[5]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [0,[11,"ptyext_path = ",[15,[12,10,0]]],"ptyext_path = %a\n"],
      fmt_longident_loc,
      x[1]);
    line(i$1,ppf,[0,[11,"ptyext_params =\n",0],"ptyext_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,ppf,[0,[11,"ptyext_constructors =\n",0],"ptyext_constructors =\n"]);
    list(i$1+1,extension_constructor,ppf,x[3]);
    return line
            (i$1,
             ppf,
             [0,
              [11,"ptyext_private = ",[15,[12,10,0]]],
              "ptyext_private = %a\n"],
             fmt_private_flag,
             x[4]);
    };

var
 extension_constructor=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,
       [11,"extension_constructor ",[15,[12,10,0]]],
       "extension_constructor %a\n"],
      fmt_location,
      x[3]);
    attributes(i,ppf,x[4]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [0,[11,'pext_name = "',[2,0,[11,'"\n',0]]],'pext_name = "%s"\n'],
      x[1][1]);
    line(i$1,ppf,[0,[11,"pext_kind =\n",0],"pext_kind =\n"]);
    return extension_constructor_kind(i$1+1,ppf,x[2]);
    };

var
 extension_constructor_kind=
  function(i,ppf,x)
   {switch(x)
     {case 0:
       line(i,ppf,[0,[11,"Pext_decl\n",0],"Pext_decl\n"]);
       list(i+1,core_type,ppf,x[1]);
       return option(i+1,core_type,ppf,x[2]);
       
      case 1:
       line(i,ppf,[0,[11,"Pext_rebind\n",0],"Pext_rebind\n"]);
       return line(i+1,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_longident_loc,x[1]);
       
      }
    };

var
 class_type=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"class_type ",[15,[12,10,0]]],"class_type %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       line
        (i$1,
         ppf,
         [0,[11,"Pcty_constr ",[15,[12,10,0]]],"Pcty_constr %a\n"],
         fmt_longident_loc,
         match[1]);
       return list(i$1,core_type,ppf,match[2]);
       
      case 1:
       line(i$1,ppf,[0,[11,"Pcty_signature\n",0],"Pcty_signature\n"]);
       return class_signature(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [0,[11,'Pcty_arrow "',[2,0,[11,'"\n',0]]],'Pcty_arrow "%s"\n'],
         match[1]);
       core_type(i$1,ppf,match[2]);
       return class_type(i$1,ppf,match[3]);
       
      case 3:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pcty_extension "',[2,0,[11,'"\n',0]]],
          'Pcty_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var
 class_signature=
  function(i,ppf,cs)
   {line(i,ppf,[0,[11,"class_signature\n",0],"class_signature\n"]);
    core_type(i+1,ppf,cs[1]);
    return list(i+1,class_type_field,ppf,cs[2]);
    };

var
 class_type_field=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"class_type_field ",[15,[12,10,0]]],"class_type_field %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    attributes(i$1,ppf,x[3]);
    var match=x[1];
    
    switch(match)
     {case 0:
       line(i$1,ppf,[0,[11,"Pctf_inherit\n",0],"Pctf_inherit\n"]);
       return class_type(i$1,ppf,match[1]);
       
      case 1:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pctf_val "',[2,0,[11,'" ',[15,[12,32,[15,[12,10,0]]]]]]],
          'Pctf_val "%s" %a %a\n'],
         match$1[1],
         fmt_mutable_flag,
         match$1[2],
         fmt_virtual_flag,
         match$1[3]);
       return core_type(i$1+1,ppf,match$1[4]);
       
      case 2:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pctf_method "',[2,0,[11,'" ',[15,[12,32,[15,[12,10,0]]]]]]],
          'Pctf_method "%s" %a %a\n'],
         match$2[1],
         fmt_private_flag,
         match$2[2],
         fmt_virtual_flag,
         match$2[3]);
       return core_type(i$1+1,ppf,match$2[4]);
       
      case 3:
       var match$3=match[1];
       
       line(i$1,ppf,[0,[11,"Pctf_constraint\n",0],"Pctf_constraint\n"]);
       core_type(i$1+1,ppf,match$3[1]);
       return core_type(i$1+1,ppf,match$3[2]);
       
      case 4:
       var match$4=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pctf_attribute "',[2,0,[11,'"\n',0]]],
          'Pctf_attribute "%s"\n'],
         match$4[1][1]);
       return payload(i$1,ppf,match$4[2]);
       
      case 5:
       var match$5=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pctf_extension "',[2,0,[11,'"\n',0]]],
          'Pctf_extension "%s"\n'],
         match$5[1][1]);
       return payload(i$1,ppf,match$5[2]);
       
      }
    };

var
 class_description=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"class_description ",[15,[12,10,0]]],"class_description %a\n"],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[6]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [0,[11,"pci_virt = ",[15,[12,10,0]]],"pci_virt = %a\n"],
      fmt_virtual_flag,
      x[1]);
    line(i$1,ppf,[0,[11,"pci_params =\n",0],"pci_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [0,[11,"pci_name = ",[15,[12,10,0]]],"pci_name = %a\n"],
      fmt_string_loc,
      x[3]);
    line(i$1,ppf,[0,[11,"pci_expr =\n",0],"pci_expr =\n"]);
    return class_type(i$1+1,ppf,x[4]);
    };

var
 class_type_declaration=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,
       [11,"class_type_declaration ",[15,[12,10,0]]],
       "class_type_declaration %a\n"],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[6]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [0,[11,"pci_virt = ",[15,[12,10,0]]],"pci_virt = %a\n"],
      fmt_virtual_flag,
      x[1]);
    line(i$1,ppf,[0,[11,"pci_params =\n",0],"pci_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [0,[11,"pci_name = ",[15,[12,10,0]]],"pci_name = %a\n"],
      fmt_string_loc,
      x[3]);
    line(i$1,ppf,[0,[11,"pci_expr =\n",0],"pci_expr =\n"]);
    return class_type(i$1+1,ppf,x[4]);
    };

var
 class_expr=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"class_expr ",[15,[12,10,0]]],"class_expr %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       line
        (i$1,
         ppf,
         [0,[11,"Pcl_constr ",[15,[12,10,0]]],"Pcl_constr %a\n"],
         fmt_longident_loc,
         match[1]);
       return list(i$1,core_type,ppf,match[2]);
       
      case 1:
       line(i$1,ppf,[0,[11,"Pcl_structure\n",0],"Pcl_structure\n"]);
       return class_structure(i$1,ppf,match[1]);
       
      case 2:
       line(i$1,ppf,[0,[11,"Pcl_fun\n",0],"Pcl_fun\n"]);
       label(i$1,ppf,match[1]);
       option(i$1,expression,ppf,match[2]);
       pattern(i$1,ppf,match[3]);
       return class_expr(i$1,ppf,match[4]);
       
      case 3:
       line(i$1,ppf,[0,[11,"Pcl_apply\n",0],"Pcl_apply\n"]);
       class_expr(i$1,ppf,match[1]);
       return list(i$1,label_x_expression,ppf,match[2]);
       
      case 4:
       line
        (i$1,
         ppf,
         [0,[11,"Pcl_let ",[15,[12,10,0]]],"Pcl_let %a\n"],
         fmt_rec_flag,
         match[1]);
       list(i$1,value_binding,ppf,match[2]);
       return class_expr(i$1,ppf,match[3]);
       
      case 5:
       line(i$1,ppf,[0,[11,"Pcl_constraint\n",0],"Pcl_constraint\n"]);
       class_expr(i$1,ppf,match[1]);
       return class_type(i$1,ppf,match[2]);
       
      case 6:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,'Pcl_extension "',[2,0,[11,'"\n',0]]],'Pcl_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var
 class_structure=
  function(i,ppf,param)
   {line(i,ppf,[0,[11,"class_structure\n",0],"class_structure\n"]);
    pattern(i+1,ppf,param[1]);
    return list(i+1,class_field,ppf,param[2]);
    };

var
 class_field=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"class_field ",[15,[12,10,0]]],"class_field %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    attributes(i$1,ppf,x[3]);
    var match=x[1];
    
    switch(match)
     {case 0:
       line
        (i$1,
         ppf,
         [0,[11,"Pcf_inherit ",[15,[12,10,0]]],"Pcf_inherit %a\n"],
         fmt_override_flag,
         match[1]);
       class_expr(i$1+1,ppf,match[2]);
       return option(i$1+1,string,ppf,match[3]);
       
      case 1:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Pcf_val ",[15,[12,10,0]]],"Pcf_val %a\n"],
         fmt_mutable_flag,
         match$1[2]);
       line(i$1+1,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_string_loc,match$1[1]);
       return class_field_kind(i$1+1,ppf,match$1[3]);
       
      case 2:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Pcf_method ",[15,[12,10,0]]],"Pcf_method %a\n"],
         fmt_private_flag,
         match$2[2]);
       line(i$1+1,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_string_loc,match$2[1]);
       return class_field_kind(i$1+1,ppf,match$2[3]);
       
      case 3:
       var match$3=match[1];
       
       line(i$1,ppf,[0,[11,"Pcf_constraint\n",0],"Pcf_constraint\n"]);
       core_type(i$1+1,ppf,match$3[1]);
       return core_type(i$1+1,ppf,match$3[2]);
       
      case 4:
       line(i$1,ppf,[0,[11,"Pcf_initializer\n",0],"Pcf_initializer\n"]);
       return expression(i$1+1,ppf,match[1]);
       
      case 5:
       var match$4=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,'Pcf_attribute "',[2,0,[11,'"\n',0]]],'Pcf_attribute "%s"\n'],
         match$4[1][1]);
       return payload(i$1,ppf,match$4[2]);
       
      case 6:
       var match$5=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,'Pcf_extension "',[2,0,[11,'"\n',0]]],'Pcf_extension "%s"\n'],
         match$5[1][1]);
       return payload(i$1,ppf,match$5[2]);
       
      }
    };

var
 class_field_kind=
  function(i,ppf,param)
   {switch(param)
     {case 0:
       line(i,ppf,[0,[11,"Virtual\n",0],"Virtual\n"]);
       return core_type(i,ppf,param[1]);
       
      case 1:
       line
        (i,
         ppf,
         [0,[11,"Concrete ",[15,[12,10,0]]],"Concrete %a\n"],
         fmt_override_flag,
         param[1]);
       return expression(i,ppf,param[2]);
       
      }
    };

var
 class_declaration=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"class_declaration ",[15,[12,10,0]]],"class_declaration %a\n"],
      fmt_location,
      x[5]);
    attributes(i,ppf,x[6]);
    var i$1=i+1;
    
    line
     (i$1,
      ppf,
      [0,[11,"pci_virt = ",[15,[12,10,0]]],"pci_virt = %a\n"],
      fmt_virtual_flag,
      x[1]);
    line(i$1,ppf,[0,[11,"pci_params =\n",0],"pci_params =\n"]);
    list(i$1+1,type_parameter,ppf,x[2]);
    line
     (i$1,
      ppf,
      [0,[11,"pci_name = ",[15,[12,10,0]]],"pci_name = %a\n"],
      fmt_string_loc,
      x[3]);
    line(i$1,ppf,[0,[11,"pci_expr =\n",0],"pci_expr =\n"]);
    return class_expr(i$1+1,ppf,x[4]);
    };

var
 module_type=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"module_type ",[15,[12,10,0]]],"module_type %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       return line
               (i$1,
                ppf,
                [0,[11,"Pmty_ident ",[15,[12,10,0]]],"Pmty_ident %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 1:
       line(i$1,ppf,[0,[11,"Pmty_signature\n",0],"Pmty_signature\n"]);
       return signature(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [0,[11,"Pmty_functor ",[15,[12,10,0]]],"Pmty_functor %a\n"],
         fmt_string_loc,
         match[1]);
       Misc["may"](module_type(i$1,ppf),match[2]);
       return module_type(i$1,ppf,match[3]);
       
      case 3:
       line(i$1,ppf,[0,[11,"Pmty_with\n",0],"Pmty_with\n"]);
       module_type(i$1,ppf,match[1]);
       return list(i$1,with_constraint,ppf,match[2]);
       
      case 4:
       line(i$1,ppf,[0,[11,"Pmty_typeof\n",0],"Pmty_typeof\n"]);
       return module_expr(i$1,ppf,match[1]);
       
      case 5:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pmod_extension "',[2,0,[11,'"\n',0]]],
          'Pmod_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      case 6:
       return line
               (i$1,
                ppf,
                [0,[11,"Pmty_alias ",[15,[12,10,0]]],"Pmty_alias %a\n"],
                fmt_longident_loc,
                match[1]);
       
      }
    };

var signature=function(i,ppf,x){return list(i,signature_item,ppf,x);};

var
 signature_item=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"signature_item ",[15,[12,10,0]]],"signature_item %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       line(i$1,ppf,[0,[11,"Psig_value\n",0],"Psig_value\n"]);
       return value_description(i$1,ppf,match[1]);
       
      case 1:
       line(i$1,ppf,[0,[11,"Psig_type\n",0],"Psig_type\n"]);
       return list(i$1,type_declaration,ppf,match[1]);
       
      case 2:
       line(i$1,ppf,[0,[11,"Psig_typext\n",0],"Psig_typext\n"]);
       return type_extension(i$1,ppf,match[1]);
       
      case 3:
       line(i$1,ppf,[0,[11,"Psig_exception\n",0],"Psig_exception\n"]);
       return extension_constructor(i$1,ppf,match[1]);
       
      case 4:
       var pmd=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Psig_module ",[15,[12,10,0]]],"Psig_module %a\n"],
         fmt_string_loc,
         pmd[1]);
       attributes(i$1,ppf,pmd[3]);
       return module_type(i$1,ppf,pmd[2]);
       
      case 5:
       line(i$1,ppf,[0,[11,"Psig_recmodule\n",0],"Psig_recmodule\n"]);
       return list(i$1,module_declaration,ppf,match[1]);
       
      case 6:
       var x$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Psig_modtype ",[15,[12,10,0]]],"Psig_modtype %a\n"],
         fmt_string_loc,
         x$1[1]);
       attributes(i$1,ppf,x$1[3]);
       return modtype_declaration(i$1,ppf,x$1[2]);
       
      case 7:
       var od=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Psig_open ",[15,[12,32,[15,[12,10,0]]]]],"Psig_open %a %a\n"],
         fmt_override_flag,
         od[2],
         fmt_longident_loc,
         od[1]);
       return attributes(i$1,ppf,od[4]);
       
      case 8:
       var incl=match[1];
       
       line(i$1,ppf,[0,[11,"Psig_include\n",0],"Psig_include\n"]);
       module_type(i$1,ppf,incl[1]);
       return attributes(i$1,ppf,incl[3]);
       
      case 9:
       line(i$1,ppf,[0,[11,"Psig_class\n",0],"Psig_class\n"]);
       return list(i$1,class_description,ppf,match[1]);
       
      case 10:
       line(i$1,ppf,[0,[11,"Psig_class_type\n",0],"Psig_class_type\n"]);
       return list(i$1,class_type_declaration,ppf,match[1]);
       
      case 11:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Psig_attribute "',[2,0,[11,'"\n',0]]],
          'Psig_attribute "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      case 12:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Psig_extension "',[2,0,[11,'"\n',0]]],
          'Psig_extension "%s"\n'],
         match$2[1][1]);
       attributes(i$1,ppf,match[2]);
       return payload(i$1,ppf,match$2[2]);
       
      }
    };

var
 modtype_declaration=
  function(i,ppf,param)
   {if(param)
     {return module_type(i+1,ppf,param[1]);}
    else
     {return line(i,ppf,[0,[11,"#abstract",0],"#abstract"]);}
    };

var
 with_constraint=
  function(i,ppf,x)
   {switch(x)
     {case 0:
       line
        (i,
         ppf,
         [0,[11,"Pwith_type ",[15,[12,10,0]]],"Pwith_type %a\n"],
         fmt_longident_loc,
         x[1]);
       return type_declaration(i+1,ppf,x[2]);
       
      case 1:
       return line
               (i,
                ppf,
                [0,
                 [11,"Pwith_module ",[15,[11," = ",[15,[12,10,0]]]]],
                 "Pwith_module %a = %a\n"],
                fmt_longident_loc,
                x[1],
                fmt_longident_loc,
                x[2]);
       
      case 2:
       line(i,ppf,[0,[11,"Pwith_typesubst\n",0],"Pwith_typesubst\n"]);
       return type_declaration(i+1,ppf,x[1]);
       
      case 3:
       return line
               (i,
                ppf,
                [0,
                 [11,"Pwith_modsubst ",[15,[11," = ",[15,[12,10,0]]]]],
                 "Pwith_modsubst %a = %a\n"],
                fmt_string_loc,
                x[1],
                fmt_longident_loc,
                x[2]);
       
      }
    };

var
 module_expr=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"module_expr ",[15,[12,10,0]]],"module_expr %a\n"],
      fmt_location,
      x[2]);
    attributes(i,ppf,x[3]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       return line
               (i$1,
                ppf,
                [0,[11,"Pmod_ident ",[15,[12,10,0]]],"Pmod_ident %a\n"],
                fmt_longident_loc,
                match[1]);
       
      case 1:
       line(i$1,ppf,[0,[11,"Pmod_structure\n",0],"Pmod_structure\n"]);
       return structure(i$1,ppf,match[1]);
       
      case 2:
       line
        (i$1,
         ppf,
         [0,[11,"Pmod_functor ",[15,[12,10,0]]],"Pmod_functor %a\n"],
         fmt_string_loc,
         match[1]);
       Misc["may"](module_type(i$1,ppf),match[2]);
       return module_expr(i$1,ppf,match[3]);
       
      case 3:
       line(i$1,ppf,[0,[11,"Pmod_apply\n",0],"Pmod_apply\n"]);
       module_expr(i$1,ppf,match[1]);
       return module_expr(i$1,ppf,match[2]);
       
      case 4:
       line(i$1,ppf,[0,[11,"Pmod_constraint\n",0],"Pmod_constraint\n"]);
       module_expr(i$1,ppf,match[1]);
       return module_type(i$1,ppf,match[2]);
       
      case 5:
       line(i$1,ppf,[0,[11,"Pmod_unpack\n",0],"Pmod_unpack\n"]);
       return expression(i$1,ppf,match[1]);
       
      case 6:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pmod_extension "',[2,0,[11,'"\n',0]]],
          'Pmod_extension "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      }
    };

var structure=function(i,ppf,x){return list(i,structure_item,ppf,x);};

var
 structure_item=
  function(i,ppf,x)
   {line
     (i,
      ppf,
      [0,[11,"structure_item ",[15,[12,10,0]]],"structure_item %a\n"],
      fmt_location,
      x[2]);
    var i$1=i+1;
    
    var match=x[1];
    
    switch(match)
     {case 0:
       line(i$1,ppf,[0,[11,"Pstr_eval\n",0],"Pstr_eval\n"]);
       attributes(i$1,ppf,match[2]);
       return expression(i$1,ppf,match[1]);
       
      case 1:
       line
        (i$1,
         ppf,
         [0,[11,"Pstr_value ",[15,[12,10,0]]],"Pstr_value %a\n"],
         fmt_rec_flag,
         match[1]);
       return list(i$1,value_binding,ppf,match[2]);
       
      case 2:
       line(i$1,ppf,[0,[11,"Pstr_primitive\n",0],"Pstr_primitive\n"]);
       return value_description(i$1,ppf,match[1]);
       
      case 3:
       line(i$1,ppf,[0,[11,"Pstr_type\n",0],"Pstr_type\n"]);
       return list(i$1,type_declaration,ppf,match[1]);
       
      case 4:
       line(i$1,ppf,[0,[11,"Pstr_typext\n",0],"Pstr_typext\n"]);
       return type_extension(i$1,ppf,match[1]);
       
      case 5:
       line(i$1,ppf,[0,[11,"Pstr_exception\n",0],"Pstr_exception\n"]);
       return extension_constructor(i$1,ppf,match[1]);
       
      case 6:
       line(i$1,ppf,[0,[11,"Pstr_module\n",0],"Pstr_module\n"]);
       return module_binding(i$1,ppf,match[1]);
       
      case 7:
       line(i$1,ppf,[0,[11,"Pstr_recmodule\n",0],"Pstr_recmodule\n"]);
       return list(i$1,module_binding,ppf,match[1]);
       
      case 8:
       var x$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Pstr_modtype ",[15,[12,10,0]]],"Pstr_modtype %a\n"],
         fmt_string_loc,
         x$1[1]);
       attributes(i$1,ppf,x$1[3]);
       return modtype_declaration(i$1,ppf,x$1[2]);
       
      case 9:
       var od=match[1];
       
       line
        (i$1,
         ppf,
         [0,[11,"Pstr_open ",[15,[12,32,[15,[12,10,0]]]]],"Pstr_open %a %a\n"],
         fmt_override_flag,
         od[2],
         fmt_longident_loc,
         od[1]);
       return attributes(i$1,ppf,od[4]);
       
      case 10:
       line(i$1,ppf,[0,[11,"Pstr_class\n",0],"Pstr_class\n"]);
       return list(i$1,class_declaration,ppf,match[1]);
       
      case 11:
       line(i$1,ppf,[0,[11,"Pstr_class_type\n",0],"Pstr_class_type\n"]);
       return list(i$1,class_type_declaration,ppf,match[1]);
       
      case 12:
       var incl=match[1];
       
       line(i$1,ppf,[0,[11,"Pstr_include",0],"Pstr_include"]);
       attributes(i$1,ppf,incl[3]);
       return module_expr(i$1,ppf,incl[1]);
       
      case 13:
       var match$1=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pstr_attribute "',[2,0,[11,'"\n',0]]],
          'Pstr_attribute "%s"\n'],
         match$1[1][1]);
       return payload(i$1,ppf,match$1[2]);
       
      case 14:
       var match$2=match[1];
       
       line
        (i$1,
         ppf,
         [0,
          [11,'Pstr_extension "',[2,0,[11,'"\n',0]]],
          'Pstr_extension "%s"\n'],
         match$2[1][1]);
       attributes(i$1,ppf,match[2]);
       return payload(i$1,ppf,match$2[2]);
       
      }
    };

var
 module_declaration=
  function(i,ppf,pmd)
   {string_loc(i,ppf,pmd[1]);
    attributes(i,ppf,pmd[3]);
    return module_type(i+1,ppf,pmd[2]);
    };

var
 module_binding=
  function(i,ppf,x)
   {string_loc(i,ppf,x[1]);
    attributes(i,ppf,x[3]);
    return module_expr(i+1,ppf,x[2]);
    };

var
 core_type_x_core_type_x_location=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [0,[11,"<constraint> ",[15,[12,10,0]]],"<constraint> %a\n"],
      fmt_location,
      param[3]);
    core_type(i+1,ppf,param[1]);
    return core_type(i+1,ppf,param[2]);
    };

var
 constructor_decl=
  function(i,ppf,param)
   {line(i,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_location,param[4]);
    line(i+1,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_string_loc,param[1]);
    attributes(i,ppf,param[5]);
    list(i+1,core_type,ppf,param[2]);
    return option(i+1,core_type,ppf,param[3]);
    };

var
 label_decl=
  function(i,ppf,param)
   {line(i,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_location,param[4]);
    attributes(i,ppf,param[5]);
    line(i+1,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_mutable_flag,param[2]);
    line(i+1,ppf,[0,[15,0],"%a"],fmt_string_loc,param[1]);
    return core_type(i+1,ppf,param[3]);
    };

var
 longident_x_pattern=
  function(i,ppf,param)
   {line(i,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_longident_loc,param[1]);
    return pattern(i+1,ppf,param[2]);
    };

var
 $$case=
  function(i,ppf,param)
   {var pc_guard=param[2];
    
    line(i,ppf,[0,[11,"<case>\n",0],"<case>\n"]);
    pattern(i+1,ppf,param[1]);
    if(pc_guard)
     {line(i+1,ppf,[0,[11,"<when>\n",0],"<when>\n"]),
      expression(i+2,ppf,pc_guard[1])}
    else
     {}
    
    return expression(i+1,ppf,param[3]);
    };

var
 value_binding=
  function(i,ppf,x)
   {line(i,ppf,[0,[11,"<def>\n",0],"<def>\n"]);
    attributes(i+1,ppf,x[3]);
    pattern(i+1,ppf,x[1]);
    return expression(i+1,ppf,x[2]);
    };

var
 string_x_expression=
  function(i,ppf,param)
   {line
     (i,
      ppf,
      [0,[11,"<override> ",[15,[12,10,0]]],"<override> %a\n"],
      fmt_string_loc,
      param[1]);
    return expression(i+1,ppf,param[2]);
    };

var
 longident_x_expression=
  function(i,ppf,param)
   {line(i,ppf,[0,[15,[12,10,0]],"%a\n"],fmt_longident_loc,param[1]);
    return expression(i+1,ppf,param[2]);
    };

var
 label_x_expression=
  function(i,ppf,param)
   {line
     (i,ppf,[0,[11,'<label> "',[2,0,[11,'"\n',0]]],'<label> "%s"\n'],param[1]);
    return expression(i+1,ppf,param[2]);
    };

var
 label_x_bool_x_core_type_list=
  function(i,ppf,x)
   {switch(x)
     {case 0:
       line
        (i,
         ppf,
         [0,[11,'Rtag "',[2,0,[11,'" ',[2,0,[12,10,0]]]]],'Rtag "%s" %s\n'],
         x[1],
         Pervasives["string_of_bool"](x[3]));
       attributes(i+1,ppf,x[2]);
       return list(i+1,core_type,ppf,x[4]);
       
      case 1:
       line(i,ppf,[0,[11,"Rinherit\n",0],"Rinherit\n"]);
       return core_type(i+1,ppf,x[1]);
       
      }
    };

var
 toplevel_phrase=
  function(i,ppf,x)
   {switch(x)
     {case 0:
       line(i,ppf,[0,[11,"Ptop_def\n",0],"Ptop_def\n"]);
       return structure(i+1,ppf,x[1]);
       
      case 1:
       line
        (i,
         ppf,
         [0,[11,'Ptop_dir "',[2,0,[11,'"\n',0]]],'Ptop_dir "%s"\n'],
         x[1]);
       return directive_argument(i,ppf,x[2]);
       
      }
    };

var
 directive_argument=
  function(i,ppf,x)
   {if(typeof x=="number")
     {switch(x)
       {case 0:return line(i,ppf,[0,[11,"Pdir_none\n",0],"Pdir_none\n"]);}}
    else
     {switch(x[0])
       {case 0:
         return line
                 (i,
                  ppf,
                  [0,
                   [11,'Pdir_string "',[2,0,[11,'"\n',0]]],
                   'Pdir_string "%s"\n'],
                  x[1]);
         
        case 1:
         return line
                 (i,
                  ppf,
                  [0,[11,"Pdir_int ",[4,0,0,0,[12,10,0]]],"Pdir_int %d\n"],
                  x[1]);
         
        case 2:
         return line
                 (i,
                  ppf,
                  [0,[11,"Pdir_ident ",[15,[12,10,0]]],"Pdir_ident %a\n"],
                  fmt_longident,
                  x[1]);
         
        case 3:
         return line
                 (i,
                  ppf,
                  [0,[11,"Pdir_bool ",[2,0,[12,10,0]]],"Pdir_bool %s\n"],
                  Pervasives["string_of_bool"](x[1]));
         
        }}
    };

var $$interface=function(ppf,x){return list(0,signature_item,ppf,x);};

var implementation=function(ppf,x){return list(0,structure_item,ppf,x);};

var top_phrase=function(ppf,x){return toplevel_phrase(0,ppf,x);};

module["exports"]=
{"interface":$$interface,
 "implementation":implementation,
 "top_phrase":top_phrase,
 "expression":expression,
 "structure":structure,
 "payload":payload};

