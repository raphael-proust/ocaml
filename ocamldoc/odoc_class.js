// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Odoc_parameter=require("Odoc_parameter");



var Name=0;

var
 class_parameter_text_by_name=
  function(cl,label)
   {var match=cl[2];
    
    if(match)
     {try
       {var t=List["assoc"](label,match[1][8]);return [0,t];}
      catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
      }
    else
     {return 0;}
    };

var
 class_elements=
  function($staropt$star,cl)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    var
     iter_kind=
      function(k)
       {switch(k)
         {case 0:return k[2];
          case 1:
           var match=k[1][2];
           
           var exit;
           
           if(match)
            {if(trans)
              {return class_elements([0,trans],match[1]);}
             else
              {exit=24;}
             }
           else
            {exit=24;}
           
           switch(exit){case 24:return 0;}
           
          case 2:
           var match$1=k[1][2];
           
           var exit$1;
           
           if(match$1)
            {var match$2=match$1[1];
             
             switch(match$2)
              {case 0:
                if(trans)
                 {return class_elements([0,trans],match$2[1]);}
                else
                 {exit$1=25;}
                
               case 1:
                if(trans)
                 {return class_type_elements([0,trans],match$2[1]);}
                else
                 {exit$1=25;}
                
               }
             }
           else
            {exit$1=25;}
           
           switch(exit$1){case 25:return 0;}
           
          case 3:return iter_kind(k[1]);
          }
        };
    
    return iter_kind(cl[6]);
    };

var
 class_type_elements=
  function($staropt$star,clt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    var match=clt[6];
    
    switch(match)
     {case 0:return match[2];
      case 1:
       var match$1=match[1][2];
       
       var exit;
       
       if(match$1)
        {var match$2=match$1[1];
         
         switch(match$2)
          {case 0:
            if(trans)
             {return class_elements([0,trans],match$2[1]);}
            else
             {exit=28;}
            
           case 1:
            if(trans)
             {return class_type_elements([0,trans],match$2[1]);}
            else
             {exit=28;}
            
           }
         }
       else
        {exit=28;}
       
       switch(exit){case 28:return 0;}
       
      }
    };

var
 class_attributes=
  function($staropt$star,cl)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele)
                {case 0:return Pervasives["@"](acc,[0,ele[1],0]);
                 case 1:exit=21;
                 case 2:exit=21;
                 }
               
               switch(exit){case 21:return acc;}
               },
             0,
             class_elements([0,trans],cl));
    };

var
 class_methods=
  function($staropt$star,cl)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele)
                {case 0:exit=18;
                 case 1:return Pervasives["@"](acc,[0,ele[1],0]);
                 case 2:exit=18;
                 }
               
               switch(exit){case 18:return acc;}
               },
             0,
             class_elements([0,trans],cl));
    };

var
 class_comments=
  function($staropt$star,cl)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele)
                {case 0:exit=15;
                 case 1:exit=15;
                 case 2:return Pervasives["@"](acc,[0,ele[1],0]);
                 }
               
               switch(exit){case 15:return acc;}
               },
             0,
             class_elements([0,trans],cl));
    };

var
 class_update_parameters_text=
  function(cl)
   {var
     f=
      function(p)
       {return Odoc_parameter["update_parameter_text"]
                (class_parameter_text_by_name(cl),p);
        };
    
    return List["iter"](f,cl[7]);
    };

var
 class_type_attributes=
  function($staropt$star,clt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele)
                {case 0:return Pervasives["@"](acc,[0,ele[1],0]);
                 case 1:exit=10;
                 case 2:exit=10;
                 }
               
               switch(exit){case 10:return acc;}
               },
             0,
             class_type_elements([0,trans],clt));
    };

var
 class_type_methods=
  function($staropt$star,clt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele)
                {case 0:exit=7;
                 case 1:return Pervasives["@"](acc,[0,ele[1],0]);
                 case 2:exit=7;
                 }
               
               switch(exit){case 7:return acc;}
               },
             0,
             class_type_elements([0,trans],clt));
    };

var
 class_type_comments=
  function($staropt$star,clt)
   {if($staropt$star){var trans=$staropt$star[1];}else{var trans=1;}
    
    return List["fold_left"]
            (function(acc,ele)
              {var exit;
               
               switch(ele)
                {case 0:exit=4;
                 case 1:exit=4;
                 case 2:return Pervasives["@"](acc,[0,ele[1],0]);
                 }
               
               switch(exit){case 4:return acc;}
               },
             0,
             class_type_elements([0,trans],clt));
    };

var
 class_type_parameter_text_by_name=
  function(clt,label)
   {var match=clt[2];
    
    if(match)
     {try
       {var t=List["assoc"](label,match[1][8]);return [0,t];}
      catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
      }
    else
     {return 0;}
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

