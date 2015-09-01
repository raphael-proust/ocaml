// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_name=require("./odoc_name.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Odoc_parameter=require("./odoc_parameter.js");
var CamlPrimitive=require("./camlPrimitive.js");



var Name=0;

var
 class_parameter_text_by_name=
  function(cl,label)
   {var match=cl[2];
    
    if(match)
     {try
       {var t=List["assoc"](label,match[1][8]);return /* Some */[0,t]}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* None */0}
        else
         {throw exn}
        }
      }
    else
     {return /* None */0}
    };

var
 class_elements=
  function($staropt$star,cl)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    var
     iter_kind=
      function(k)
       {switch(k[0])
         {case 0:return k[2];
          case 1:
           var match=k[1][2];
           
           var exit;
           
           if(match)
            {if(trans)
              {return class_elements(/* Some */[0,trans],match[1])}
             else
              {exit=24;}
             }
           else
            {exit=24;}
           
           switch(exit){case 24:return /* [] */0}
           break;
          case 2:
           var match$1=k[1][2];
           
           var exit$1;
           
           if(match$1)
            {var match$2=match$1[1];
             
             switch(match$2[0])
              {case 0:
                if(trans)
                 {return class_elements(/* Some */[0,trans],match$2[1])}
                else
                 {exit$1=25;}
                break;
               case 1:
                if(trans)
                 {return class_type_elements(/* Some */[0,trans],match$2[1])}
                else
                 {exit$1=25;}
                break
               }
             }
           else
            {exit$1=25;}
           
           switch(exit$1){case 25:return /* [] */0}
           break;
          case 3:return iter_kind(k[1])
          }
        };
    
    return iter_kind(cl[6])};

var
 class_type_elements=
  function($staropt$star,clt)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    var match=clt[6];
    
    switch(match[0])
     {case 0:return match[2];
      case 1:
       var match$1=match[1][2];
       
       var exit;
       
       if(match$1)
        {var match$2=match$1[1];
         
         switch(match$2[0])
          {case 0:
            if(trans)
             {return class_elements(/* Some */[0,trans],match$2[1])}
            else
             {exit=28;}
            break;
           case 1:
            if(trans)
             {return class_type_elements(/* Some */[0,trans],match$2[1])}
            else
             {exit=28;}
            break
           }
         }
       else
        {exit=28;}
       
       switch(exit){case 28:return /* [] */0}
       break
      }
    };

var
 class_attributes=
  function($staropt$star,cl)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele[0])
                {case 0:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 case 1:exit=21;break;
                 case 2:exit=21;break
                 }
               
               switch(exit){case 21:return acc}
               },
             /* [] */0,
             class_elements(/* Some */[0,trans],cl))};

var
 class_methods=
  function($staropt$star,cl)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele[0])
                {case 0:exit=18;break;
                 case 1:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 case 2:exit=18;break
                 }
               
               switch(exit){case 18:return acc}
               },
             /* [] */0,
             class_elements(/* Some */[0,trans],cl))};

var
 class_comments=
  function($staropt$star,cl)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele[0])
                {case 0:exit=15;break;
                 case 1:exit=15;break;
                 case 2:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0])
                 }
               
               switch(exit){case 15:return acc}
               },
             /* [] */0,
             class_elements(/* Some */[0,trans],cl))};

var
 class_update_parameters_text=
  function(cl)
   {var
     f=
      function(p)
       {return Odoc_parameter["update_parameter_text"]
                (function(param)
                  {return class_parameter_text_by_name(cl,param)},
                 p)};
    
    return List["iter"](f,cl[7])};

var
 class_type_attributes=
  function($staropt$star,clt)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele[0])
                {case 0:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 case 1:exit=10;break;
                 case 2:exit=10;break
                 }
               
               switch(exit){case 10:return acc}
               },
             /* [] */0,
             class_type_elements(/* Some */[0,trans],clt))};

var
 class_type_methods=
  function($staropt$star,clt)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele[0])
                {case 0:exit=7;break;
                 case 1:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0]);
                 case 2:exit=7;break
                 }
               
               switch(exit){case 7:return acc}
               },
             /* [] */0,
             class_type_elements(/* Some */[0,trans],clt))};

var
 class_type_comments=
  function($staropt$star,clt)
   {var trans=$staropt$star?$staropt$star[1]:/* true */1;
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele[0])
                {case 0:exit=4;break;
                 case 1:exit=4;break;
                 case 2:
                  return Pervasives["@"](acc,/* :: */[0,ele[1],/* [] */0])
                 }
               
               switch(exit){case 4:return acc}
               },
             /* [] */0,
             class_type_elements(/* Some */[0,trans],clt))};

var
 class_type_parameter_text_by_name=
  function(clt,label)
   {var match=clt[2];
    
    if(match)
     {try
       {var t=List["assoc"](label,match[1][8]);return /* Some */[0,t]}
      catch(exn)
       {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
         {return /* None */0}
        else
         {throw exn}
        }
      }
    else
     {return /* None */0}
    };

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

