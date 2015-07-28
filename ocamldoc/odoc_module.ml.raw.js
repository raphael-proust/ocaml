var Odoc_value=require("Odoc_value");
var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_types=require("Odoc_types");
var Name=0;
var
 values=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==5)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 types=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==8)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 type_extensions=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==6)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 exceptions=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==7)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 classes=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==3)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 class_types=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==4)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 modules=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==0)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 mod_types=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==1)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 comments=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==9)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 included_modules=
  function(l)
   {var $js=List["fold_left"];
    return $js
            (function(acc,ele)
              {var $js$1=ele;
               if($js$1==2)
                {var $js$2=Pervasives["@"];return $js$2(acc,[0,ele[1],0])}
               else
                {return acc}},
             0,
             l)};
var
 module_elements=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var
     iter_kind=
      function(param)
       {var $js$1=param;
        if($js$1==0)
         {return param[1]}
        else
         if($js$1==1)
          {var $js$2=trans;
           if($js$2)
            {var match=param[1][2];
             var $js$3=match;
             if($js$3)
              {var match$1=match[1];
               var $js$4=match$1;
               if($js$4==0)
                {return module_elements(0,match$1[1])}
               else
                if($js$4==1){return module_type_elements(0,match$1[1])}}
             else
              {return 0}}
           else
            {return 0}}
         else
          if($js$1==2)
           {var k=param[2];var exit=66}
          else
           if($js$1==3)
            {var k=param[1];var exit=66}
           else
            if($js$1==4)
             {return module_type_elements
                      ([0,trans],
                       [0,"",0,0,0,"",[0,param[1]],Odoc_types["dummy_loc"]])}
            else
             if($js$1==5)
              {return module_elements
                       ([0,trans],
                        [0,"",[1,0],0,0,"",param[1],Odoc_types["dummy_loc"],0,0,0,0])}
             else
              if($js$1==6){var exit=67}else if($js$1==7){var exit=67}
        switch(exit){case 67:return 0;case 66:return iter_kind(k)}};
    return iter_kind(m[6])};
var
 module_type_elements=
  function(*opt*,mt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var
     iter_kind=
      function(param)
       {var $js$1=param;
        if($js$1)
         {var match=param[1];
          var $js$2=match;
          if($js$2==0)
           {return match[1]}
          else
           if($js$2==1)
            {return iter_kind([0,match[2]])}
           else
            if($js$2==2)
             {var $js$3=trans;
              if($js$3)
               {var match$1=match[1][2];
                var $js$4=match$1;
                if($js$4)
                 {return module_type_elements(0,match$1[1])}
                else
                 {return 0}}
              else
               {return 0}}
            else
             if($js$2==3)
              {var $js$5=trans;
               if($js$5){return iter_kind([0,match[1]])}else{return 0}}
             else
              if($js$2==4){return 0}}
        else
         {return 0}};
    return iter_kind(mt[6])};
var
 module_values=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return values($js$1)};
var
 module_functions=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["filter"];
    var $js$2=module_elements([0,trans],m);
    var $js$3=values($js$2);
    return $js$1
            (function(v){var $js$4=Odoc_value["is_function"];return $js$4(v)},
             $js$3)};
var
 module_simple_values=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["filter"];
    var $js$2=module_elements([0,trans],m);
    var $js$3=values($js$2);
    return $js$1
            (function(v)
              {var $js$4=Odoc_value["is_function"];
               var $js$5=$js$4(v);
               return !$js$5},
             $js$3)};
var
 module_types=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return types($js$1)};
var
 module_type_extensions=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return type_extensions($js$1)};
var
 module_exceptions=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return exceptions($js$1)};
var
 module_classes=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return classes($js$1)};
var
 module_class_types=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return class_types($js$1)};
var
 module_modules=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return modules($js$1)};
var
 module_module_types=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return mod_types($js$1)};
var
 module_included_modules=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return included_modules($js$1)};
var
 module_comments=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_elements([0,trans],m);
    return comments($js$1)};
var
 module_type_parameters=
  function(*opt*,mt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var
     iter=
      function(k)
       {var $js$1=k;
        if($js$1)
         {var match=k[1];
          var $js$2=match;
          if($js$2==0)
           {var exit=35}
          else
           if($js$2==1)
            {var p=match[1];
             var match$1=mt[2];
             var $js$3=match$1;
             if($js$3)
              {try
                {var $js$4=List["assoc"];
                 var d=$js$4(p[1],match$1[1][8]);
                 var param=[0,p,[0,d]]}
               catch(exn)
                {var $js$5=exn=Not_found;
                 if($js$5)
                  {var param=[0,p,0]}
                 else
                  {var param="unknown primitive:reraise"}}}
             else
              {var param=[0,p,0]}
             var $js$6=iter([0,match[2]]);
             return [0,param,$js$6]}
           else
            if($js$2==2)
             {var $js$7=trans;
              if($js$7)
               {var match$2=match[1][2];
                var $js$8=match$2;
                if($js$8)
                 {return module_type_parameters([0,trans],match$2[1])}
                else
                 {return 0}}
              else
               {return 0}}
            else
             if($js$2==3)
              {var $js$9=trans;
               if($js$9){return iter([0,match[1]])}else{return 0}}
             else
              if($js$2==4){var exit=35}
          switch(exit){case 35:return 0}}
        else
         {return 0}};
    return iter(mt[6])};
var
 module_parameters=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var
     iter=
      function(param)
       {var $js$1=param;
        if($js$1==1)
         {var $js$2=trans;
          if($js$2)
           {var match=param[1][2];
            var $js$3=match;
            if($js$3)
             {var match$1=match[1];
              var $js$4=match$1;
              if($js$4==0)
               {return module_parameters([0,trans],match$1[1])}
              else
               if($js$4==1)
                {return module_type_parameters([0,trans],match$1[1])}}
            else
             {return 0}}
          else
           {return 0}}
        else
         if($js$1==2)
          {var p=param[1];
           var match$2=m[3];
           var $js$5=match$2;
           if($js$5)
            {try
              {var $js$6=List["assoc"];
               var d=$js$6(p[1],match$2[1][8]);
               var param$1=[0,p,[0,d]]}
             catch(exn)
              {var $js$7=exn=Not_found;
               if($js$7)
                {var param$1=[0,p,0]}
               else
                {var param$1="unknown primitive:reraise"}}}
           else
            {var param$1=[0,p,0]}
           var $js$8=iter(param[2]);
           return [0,param$1,$js$8]}
         else
          if($js$1==5)
           {return module_type_parameters
                    ([0,trans],
                     [0,"",0,0,0,"",[0,param[2]],Odoc_types["dummy_loc"]])}
          else
           {return 0}};
    return iter(m[6])};
var
 module_all_submodules=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var l=module_modules([0,trans],m);
    var $js$1=List["fold_left"];
    return $js$1
            (function(acc,m$1)
              {var $js$2=Pervasives["@"];
               var $js$3=module_all_submodules([0,trans],m$1);
               return $js$2(acc,$js$3)},
             l,
             l)};
var
 module_type_is_functor=
  function(mt)
   {var
     iter=
      function(k)
       {var $js=k;
        if($js)
         {var match=k[1];
          var $js$1=match;
          if($js$1==0)
           {var exit=29}
          else
           if($js$1==1)
            {return 1}
           else
            if($js$1==2)
             {var match$1=match[1][2];
              var $js$2=match$1;
              if($js$2)
               {return module_type_is_functor(match$1[1])}
              else
               {return 0}}
            else
             if($js$1==3)
              {return iter([0,match[1]])}
             else
              if($js$1==4){var exit=29}}
        else
         {var exit=29}
        switch(exit){case 29:return 0}};
    return iter(mt[6])};
var
 module_is_functor=
  function(m)
   {var
     iter=
      function(param)
       {var $js=param;
        if($js==1)
         {var match=param[1][2];
          var $js$1=match;
          if($js$1)
           {var match$1=match[1];
            var $js$2=match$1;
            if($js$2==0)
             {return iter(match$1[1][6])}
            else
             if($js$2==1){return module_type_is_functor(match$1[1])}}
          else
           {return 0}}
        else
         if($js==2)
          {return 1}
         else
          if($js==5){return iter(param[1])}else{return 0}};
    return iter(m[6])};
var
 module_type_values=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return values($js$1)};
var
 module_type_types=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return types($js$1)};
var
 module_type_type_extensions=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return type_extensions($js$1)};
var
 module_type_exceptions=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return exceptions($js$1)};
var
 module_type_classes=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return classes($js$1)};
var
 module_type_class_types=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return class_types($js$1)};
var
 module_type_modules=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return modules($js$1)};
var
 module_type_module_types=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return mod_types($js$1)};
var
 module_type_included_modules=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return included_modules($js$1)};
var
 module_type_comments=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=module_type_elements([0,trans],m);
    return comments($js$1)};
var
 module_type_functions=
  function(*opt*,mt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["filter"];
    var $js$2=module_type_elements([0,trans],mt);
    var $js$3=values($js$2);
    return $js$1
            (function(v){var $js$4=Odoc_value["is_function"];return $js$4(v)},
             $js$3)};
var
 module_type_simple_values=
  function(*opt*,mt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["filter"];
    var $js$2=module_type_elements([0,trans],mt);
    var $js$3=values($js$2);
    return $js$1
            (function(v)
              {var $js$4=Odoc_value["is_function"];
               var $js$5=$js$4(v);
               return !$js$5},
             $js$3)};
var
 module_all_classes=
  function(*opt*,m)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=List["fold_left"];
    var $js$3=module_classes([0,trans],m);
    var $js$4=module_module_types([0,trans],m);
    var
     $js$5=
      $js$2
       (function(acc,mtyp)
         {var $js$6=Pervasives["@"];
          var $js$7=module_type_all_classes([0,trans],mtyp);
          return $js$6(acc,$js$7)},
        $js$3,
        $js$4);
    var $js$6=module_modules([0,trans],m);
    return $js$1
            (function(acc,m$1)
              {var $js$7=Pervasives["@"];
               var $js$8=module_all_classes([0,trans],m$1);
               return $js$7(acc,$js$8)},
             $js$5,
             $js$6)};
var
 module_type_all_classes=
  function(*opt*,mt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=List["fold_left"];
    var $js$3=module_type_classes([0,trans],mt);
    var $js$4=module_type_module_types([0,trans],mt);
    var
     $js$5=
      $js$2
       (function(acc,mtyp)
         {var $js$6=Pervasives["@"];
          var $js$7=module_type_all_classes([0,trans],mtyp);
          return $js$6(acc,$js$7)},
        $js$3,
        $js$4);
    var $js$6=module_type_modules([0,trans],mt);
    return $js$1
            (function(acc,m)
              {var $js$7=Pervasives["@"];
               var $js$8=module_all_classes([0,trans],m);
               return $js$7(acc,$js$8)},
             $js$5,
             $js$6)};
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
