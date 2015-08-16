// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Misc=require("./misc.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 parse_declaration=
  function(arity,decl)
   {if(decl)
     {var match=decl[2];
      
      var name=decl[1];
      
      if(match)
       {var name2=match[1];
        
        var exit;
        
        switch(name2)
         {case "noalloc":
           var match$1=match[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             var name2$1=match$1[1];
             
             var exit$1;
             
             if(match$2)
              {switch(match$2[1])
                {case "float":
                  return /* record */[0,
                          name,
                          arity,
                          /* false */0,
                          name2$1,
                          /* true */1];
                  
                 default:exit$1=12;}
               }
             else
              {exit$1=12;}
             
             switch(exit$1)
              {case 12:
                return /* record */[0,
                        name,
                        arity,
                        /* false */0,
                        name2$1,
                        /* false */0];
                
               }
             }
           else
            {exit=10;}
           
          default:
           var match$3=match[2];
           
           if(match$3)
            {switch(match$3[1])
              {case "float":
                return /* record */[0,
                        name,
                        arity,
                        /* true */1,
                        name2,
                        /* true */1];
                
               default:exit=10;}
             }
           else
            {exit=10;}
           }
        
        switch(exit)
         {case 10:
           switch(name2)
            {case "noalloc":
              return /* record */[0,name,arity,/* false */0,"",/* false */0];
             default:
              return /* record */[0,name,arity,/* true */1,name2,/* false */0];
              }
           
          }
        }
      else
       {return /* record */[0,name,arity,/* true */1,"",/* false */0];}
      }
    else
     {return Misc["fatal_error"]("Primitive.parse_declaration");}
    };

var
 description_list=
  function(p)
   {var list=/* :: */[0,p[1],/* [] */0];
    
    if(!p[3]){var list$1=/* :: */[0,"noalloc",list];}else{var list$1=list;}
    
    if(CamlPrimitive["caml_string_notequal"](p[4],""))
     {var list$2=/* :: */[0,p[4],list$1];}
    else
     {var list$2=list$1;}
    
    if(p[5]){var list$3=/* :: */[0,"float",list$2];}else{var list$3=list$2;}
    
    return List["rev"](list$3);
    };

var
 native_name=
  function(p)
   {if(CamlPrimitive["caml_string_notequal"](p[4],""))
     {return p[4];}
    else
     {return p[1];}
    };

var byte_name=function(p){return p[1];};

module["exports"]=
{"parse_declaration":parse_declaration,
 "description_list":description_list,
 "native_name":native_name,
 "byte_name":byte_name};

