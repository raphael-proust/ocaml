var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_parameter=require("Odoc_parameter");
var Name=0;
var
 class_parameter_text_by_name=
  function(cl,label)
   {var match=cl[2];
    var $js=match;
    if($js)
     {try
       {var $js$1=List["assoc"];var t=$js$1(label,match[1][8]);return [0,t]}
      catch(exn)
       {var $js$2=exn=Not_found;
        if($js$2){return 0}else{return "unknown primitive:reraise"}}}
    else
     {return 0}};
var
 class_elements=
  function(*opt*,cl)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var
     iter_kind=
      function(k)
       {var $js$1=k;
        if($js$1==0)
         {return k[2]}
        else
         if($js$1==1)
          {var match=k[1][2];
           var $js$2=match;
           if($js$2)
            {var $js$3=trans;
             if($js$3)
              {return class_elements([0,trans],match[1])}
             else
              {var exit=24}}
           else
            {var exit=24}
           switch(exit){case 24:return 0}}
         else
          if($js$1==2)
           {var match$1=k[1][2];
            var $js$4=match$1;
            if($js$4)
             {var match$2=match$1[1];
              var $js$5=match$2;
              if($js$5==0)
               {var $js$6=trans;
                if($js$6)
                 {return class_elements([0,trans],match$2[1])}
                else
                 {var exit$1=25}}
              else
               if($js$5==1)
                {var $js$7=trans;
                 if($js$7)
                  {return class_type_elements([0,trans],match$2[1])}
                 else
                  {var exit$1=25}}}
            else
             {var exit$1=25}
            switch(exit$1){case 25:return 0}}
          else
           if($js$1==3){return iter_kind(k[1])}};
    return iter_kind(cl[6])};
var
 class_type_elements=
  function(*opt*,clt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var match=clt[6];
    var $js$1=match;
    if($js$1==0)
     {return match[2]}
    else
     if($js$1==1)
      {var match$1=match[1][2];
       var $js$2=match$1;
       if($js$2)
        {var match$2=match$1[1];
         var $js$3=match$2;
         if($js$3==0)
          {var $js$4=trans;
           if($js$4)
            {return class_elements([0,trans],match$2[1])}
           else
            {var exit=28}}
         else
          if($js$3==1)
           {var $js$5=trans;
            if($js$5)
             {return class_type_elements([0,trans],match$2[1])}
            else
             {var exit=28}}}
       else
        {var exit=28}
       switch(exit){case 28:return 0}}};
var
 class_attributes=
  function(*opt*,cl)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=class_elements([0,trans],cl);
    return $js$1
            (function(acc,ele)
              {var $js$3=ele;
               if($js$3==0)
                {var $js$4=Pervasives["@"];return $js$4(acc,[0,ele[1],0])}
               else
                if($js$3==1){var exit=21}else if($js$3==2){var exit=21}
               switch(exit){case 21:return acc}},
             0,
             $js$2)};
var
 class_methods=
  function(*opt*,cl)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=class_elements([0,trans],cl);
    return $js$1
            (function(acc,ele)
              {var $js$3=ele;
               if($js$3==0)
                {var exit=18}
               else
                if($js$3==1)
                 {var $js$4=Pervasives["@"];return $js$4(acc,[0,ele[1],0])}
                else
                 if($js$3==2){var exit=18}
               switch(exit){case 18:return acc}},
             0,
             $js$2)};
var
 class_comments=
  function(*opt*,cl)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=class_elements([0,trans],cl);
    return $js$1
            (function(acc,ele)
              {var $js$3=ele;
               if($js$3==0)
                {var exit=15}
               else
                if($js$3==1)
                 {var exit=15}
                else
                 if($js$3==2)
                  {var $js$4=Pervasives["@"];return $js$4(acc,[0,ele[1],0])}
               switch(exit){case 15:return acc}},
             0,
             $js$2)};
var
 class_update_parameters_text=
  function(cl)
   {var
     f=
      function(p)
       {var $js=Odoc_parameter["update_parameter_text"];
        var $js$1=class_parameter_text_by_name(cl);
        return $js($js$1,p)};
    var $js=List["iter"];
    return $js(f,cl[7])};
var
 class_type_attributes=
  function(*opt*,clt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=class_type_elements([0,trans],clt);
    return $js$1
            (function(acc,ele)
              {var $js$3=ele;
               if($js$3==0)
                {var $js$4=Pervasives["@"];return $js$4(acc,[0,ele[1],0])}
               else
                if($js$3==1){var exit=10}else if($js$3==2){var exit=10}
               switch(exit){case 10:return acc}},
             0,
             $js$2)};
var
 class_type_methods=
  function(*opt*,clt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=class_type_elements([0,trans],clt);
    return $js$1
            (function(acc,ele)
              {var $js$3=ele;
               if($js$3==0)
                {var exit=7}
               else
                if($js$3==1)
                 {var $js$4=Pervasives["@"];return $js$4(acc,[0,ele[1],0])}
                else
                 if($js$3==2){var exit=7}
               switch(exit){case 7:return acc}},
             0,
             $js$2)};
var
 class_type_comments=
  function(*opt*,clt)
   {var $js=*opt*;
    if($js){var trans=*opt*[1]}else{var trans=1}
    var $js$1=List["fold_left"];
    var $js$2=class_type_elements([0,trans],clt);
    return $js$1
            (function(acc,ele)
              {var $js$3=ele;
               if($js$3==0)
                {var exit=4}
               else
                if($js$3==1)
                 {var exit=4}
                else
                 if($js$3==2)
                  {var $js$4=Pervasives["@"];return $js$4(acc,[0,ele[1],0])}
               switch(exit){case 4:return acc}},
             0,
             $js$2)};
var
 class_type_parameter_text_by_name=
  function(clt,label)
   {var match=clt[2];
    var $js=match;
    if($js)
     {try
       {var $js$1=List["assoc"];var t=$js$1(label,match[1][8]);return [0,t]}
      catch(exn)
       {var $js$2=exn=Not_found;
        if($js$2){return 0}else{return "unknown primitive:reraise"}}}
    else
     {return 0}};
module["exports"]=
{"Name":Name,
 "class_parameter_text_by_name":class_parameter_text_by_name,
 "class_elements":class_elements,
 "class_type_elements":class_type_elements,
 "class_attributes":class_attributes,
 "class_methods":class_methods,
 "class_comments":class_comments,
 "class_update_parameters_text":class_update_parameters_text,
 "class_type_attributes":class_type_attributes,
 "class_type_methods":class_type_methods,
 "class_type_comments":class_type_comments,
 "class_type_parameter_text_by_name":class_type_parameter_text_by_name};
