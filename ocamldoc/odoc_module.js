// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_value=require("Odoc_value");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_types=require("Odoc_types");



var Name=0;

var
 values=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 5:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 types=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 8:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 type_extensions=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 6:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 exceptions=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 7:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 classes=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 3:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 class_types=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 4:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 modules=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 0:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 mod_types=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 1:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 comments=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 9:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 included_modules=
  function(l)
   {return List["fold_left"]
            (function(acc,ele)
              {switch(ele[0])
                {case 2:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 default:return acc;}
               },
             /* [] */0,
             l);
    };

var
 module_elements=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    var
     iter_kind=
      function(param)
       {var exit;
        
        switch(param[0])
         {case 0:return param[1];
          case 1:
           if(trans)
            {var match=param[1][2];
             
             if(match)
              {var match$1=match[1];
               
               switch(match$1[0])
                {case 0:return module_elements(/* None */0,match$1[1]);
                 case 1:return module_type_elements(/* None */0,match$1[1]);
                 }
               }
             else
              {return /* [] */0;}
             }
           else
            {return /* [] */0;}
           
          case 2:var k=param[2];exit=66;
          case 3:var k=param[1];exit=66;
          case 4:
           return module_type_elements
                   (/* Some */[0,trans],
                    /* record */[0,
                     "",
                     /* None */0,
                     /* None */0,
                     /* false */0,
                     "",
                     /* Some */[0,param[1]],
                     Odoc_types["dummy_loc"]]);
           
          case 5:
           return module_elements
                   (/* Some */[0,trans],
                    /* record */[0,
                     "",
                     [/* Mty_signature */1,/* [] */0],
                     /* None */0,
                     /* false */0,
                     "",
                     param[1],
                     Odoc_types["dummy_loc"],
                     /* [] */0,
                     /* None */0,
                     /* None */0,
                     /* false */0]);
           
          case 6:exit=67;
          case 7:exit=67;
          }
        
        switch(exit){case 67:return /* [] */0;case 66:return iter_kind(k);}
        };
    
    return iter_kind(m[6]);
    };

var
 module_type_elements=
  function($staropt$star,mt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    var
     iter_kind=
      function(param)
       {if(param)
         {var match=param[1];
          
          switch(match[0])
           {case 0:return match[1];
            case 1:return iter_kind(/* Some */[0,match[2]]);
            case 2:
             if(trans)
              {var match$1=match[1][2];
               
               if(match$1)
                {return module_type_elements(/* None */0,match$1[1]);}
               else
                {return /* [] */0;}
               }
             else
              {return /* [] */0;}
             
            case 3:
             if(trans)
              {return iter_kind(/* Some */[0,match[1]]);}
             else
              {return /* [] */0;}
             
            case 4:return /* [] */0;
            }
          }
        else
         {return /* [] */0;}
        };
    
    return iter_kind(mt[6]);
    };

var
 module_values=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return values(module_elements(/* Some */[0,trans],m));
    };

var
 module_functions=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return List["filter"]
            (function(v){return Odoc_value["is_function"](v);},
             values(module_elements(/* Some */[0,trans],m)));
    };

var
 module_simple_values=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return List["filter"]
            (function(v){return !Odoc_value["is_function"](v);},
             values(module_elements(/* Some */[0,trans],m)));
    };

var
 module_types=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return types(module_elements(/* Some */[0,trans],m));
    };

var
 module_type_extensions=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return type_extensions(module_elements(/* Some */[0,trans],m));
    };

var
 module_exceptions=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return exceptions(module_elements(/* Some */[0,trans],m));
    };

var
 module_classes=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return classes(module_elements(/* Some */[0,trans],m));
    };

var
 module_class_types=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return class_types(module_elements(/* Some */[0,trans],m));
    };

var
 module_modules=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return modules(module_elements(/* Some */[0,trans],m));
    };

var
 module_module_types=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return mod_types(module_elements(/* Some */[0,trans],m));
    };

var
 module_included_modules=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return included_modules(module_elements(/* Some */[0,trans],m));
    };

var
 module_comments=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return comments(module_elements(/* Some */[0,trans],m));
    };

var
 module_type_parameters=
  function($staropt$star,mt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    var
     iter=
      function(k)
       {if(k)
         {var match=k[1];
          
          var exit;
          
          switch(match[0])
           {case 0:exit=35;
            case 1:
             var p=match[1];
             
             var match$1=mt[2];
             
             if(match$1)
              {try
                {var d=List["assoc"](p[1],match$1[1][8]);
                 
                 var param=/* tuple */[0,p,/* Some */[0,d]];
                 }
               catch(exn)
                {if(exn=Not_found)
                  {var param=/* tuple */[0,p,/* None */0];}
                 else
                  {throw exn;}
                 }
               }
             else
              {var param=/* tuple */[0,p,/* None */0];}
             
             return /* :: */[0,param,iter(/* Some */[0,match[2]])];
             
            case 2:
             if(trans)
              {var match$2=match[1][2];
               
               if(match$2)
                {return module_type_parameters(/* Some */[0,trans],match$2[1]);
                 }
               else
                {return /* [] */0;}
               }
             else
              {return /* [] */0;}
             
            case 3:
             if(trans)
              {return iter(/* Some */[0,match[1]]);}
             else
              {return /* [] */0;}
             
            case 4:exit=35;
            }
          
          switch(exit){case 35:return /* [] */0;}
          }
        else
         {return /* [] */0;}
        };
    
    return iter(mt[6]);
    };

var
 module_parameters=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    var
     iter=
      function(param)
       {switch(param[0])
         {case 1:
           if(trans)
            {var match=param[1][2];
             
             if(match)
              {var match$1=match[1];
               
               switch(match$1[0])
                {case 0:
                  return module_parameters(/* Some */[0,trans],match$1[1]);
                 case 1:
                  return module_type_parameters
                          (/* Some */[0,trans],match$1[1]);
                  
                 }
               }
             else
              {return /* [] */0;}
             }
           else
            {return /* [] */0;}
           
          case 2:
           var p=param[1];
           
           var match$2=m[3];
           
           if(match$2)
            {try
              {var d=List["assoc"](p[1],match$2[1][8]);
               
               var param$1=/* tuple */[0,p,/* Some */[0,d]];
               }
             catch(exn)
              {if(exn=Not_found)
                {var param$1=/* tuple */[0,p,/* None */0];}
               else
                {throw exn;}
               }
             }
           else
            {var param$1=/* tuple */[0,p,/* None */0];}
           
           return /* :: */[0,param$1,iter(param[2])];
           
          case 5:
           return module_type_parameters
                   (/* Some */[0,trans],
                    /* record */[0,
                     "",
                     /* None */0,
                     /* None */0,
                     /* false */0,
                     "",
                     /* Some */[0,param[2]],
                     Odoc_types["dummy_loc"]]);
           
          default:return /* [] */0;}
        };
    
    return iter(m[6]);
    };

var
 module_all_submodules=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    var l=module_modules(/* Some */[0,trans],m);
    
    return List["fold_left"]
            (function(acc,m)
              {return Pervasives["@"]
                       (acc,module_all_submodules(/* Some */[0,trans],m));
               },
             l,
             l);
    };

var
 module_type_is_functor=
  function(mt)
   {var
     iter=
      function(k)
       {var exit;
        
        if(k)
         {var match=k[1];
          
          switch(match[0])
           {case 0:exit=29;
            case 1:return /* true */1;
            case 2:
             var match$1=match[1][2];
             
             if(match$1)
              {return module_type_is_functor(match$1[1]);}
             else
              {return /* false */0;}
             
            case 3:return iter(/* Some */[0,match[1]]);
            case 4:exit=29;
            }
          }
        else
         {exit=29;}
        
        switch(exit){case 29:return /* false */0;}
        };
    
    return iter(mt[6]);
    };

var
 module_is_functor=
  function(m)
   {var
     iter=
      function(param)
       {switch(param[0])
         {case 1:
           var match=param[1][2];
           
           if(match)
            {var match$1=match[1];
             
             switch(match$1[0])
              {case 0:return iter(match$1[1][6]);
               case 1:return module_type_is_functor(match$1[1]);
               }
             }
           else
            {return /* false */0;}
           
          case 2:return /* true */1;
          case 5:return iter(param[1]);
          default:return /* false */0;}
        };
    
    return iter(m[6]);
    };

var
 module_type_values=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return values(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_types=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return types(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_type_extensions=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return type_extensions(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_exceptions=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return exceptions(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_classes=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return classes(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_class_types=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return class_types(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_modules=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return modules(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_module_types=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return mod_types(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_included_modules=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return included_modules(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_comments=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return comments(module_type_elements(/* Some */[0,trans],m));
    };

var
 module_type_functions=
  function($staropt$star,mt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return List["filter"]
            (function(v){return Odoc_value["is_function"](v);},
             values(module_type_elements(/* Some */[0,trans],mt)));
    };

var
 module_type_simple_values=
  function($staropt$star,mt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return List["filter"]
            (function(v){return !Odoc_value["is_function"](v);},
             values(module_type_elements(/* Some */[0,trans],mt)));
    };

var
 module_all_classes=
  function($staropt$star,m)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return List["fold_left"]
            (function(acc,m)
              {return Pervasives["@"]
                       (acc,module_all_classes(/* Some */[0,trans],m));
               },
             List["fold_left"]
              (function(acc,mtyp)
                {return Pervasives["@"]
                         (acc,module_type_all_classes(/* Some */[0,trans],mtyp));
                 },
               module_classes(/* Some */[0,trans],m),
               module_module_types(/* Some */[0,trans],m)),
             module_modules(/* Some */[0,trans],m));
    };

var
 module_type_all_classes=
  function($staropt$star,mt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=/* true */1;}
    
    return List["fold_left"]
            (function(acc,m)
              {return Pervasives["@"]
                       (acc,module_all_classes(/* Some */[0,trans],m));
               },
             List["fold_left"]
              (function(acc,mtyp)
                {return Pervasives["@"]
                         (acc,module_type_all_classes(/* Some */[0,trans],mtyp));
                 },
               module_type_classes(/* Some */[0,trans],mt),
               module_type_module_types(/* Some */[0,trans],mt)),
             module_type_modules(/* Some */[0,trans],mt));
    };

module["exports"]=
{"Name":Name,
 "values":values,
 "types":types,
 "type_extensions":type_extensions,
 "exceptions":exceptions,
 "classes":classes,
 "class_types":class_types,
 "modules":modules,
 "mod_types":mod_types,
 "comments":comments,
 "included_modules":included_modules,
 "module_elements":module_elements,
 "module_type_elements":module_type_elements,
 "module_values":module_values,
 "module_functions":module_functions,
 "module_simple_values":module_simple_values,
 "module_types":module_types,
 "module_type_extensions":module_type_extensions,
 "module_exceptions":module_exceptions,
 "module_classes":module_classes,
 "module_class_types":module_class_types,
 "module_modules":module_modules,
 "module_module_types":module_module_types,
 "module_included_modules":module_included_modules,
 "module_comments":module_comments,
 "module_type_parameters":module_type_parameters,
 "module_parameters":module_parameters,
 "module_all_submodules":module_all_submodules,
 "module_type_is_functor":module_type_is_functor,
 "module_is_functor":module_is_functor,
 "module_type_values":module_type_values,
 "module_type_types":module_type_types,
 "module_type_type_extensions":module_type_type_extensions,
 "module_type_exceptions":module_type_exceptions,
 "module_type_classes":module_type_classes,
 "module_type_class_types":module_type_class_types,
 "module_type_modules":module_type_modules,
 "module_type_module_types":module_type_module_types,
 "module_type_included_modules":module_type_included_modules,
 "module_type_comments":module_type_comments,
 "module_type_functions":module_type_functions,
 "module_type_simple_values":module_type_simple_values,
 "module_all_classes":module_all_classes,
 "module_type_all_classes":module_type_all_classes};

