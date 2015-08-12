// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Printtyp=require("Printtyp");
var List=require("List");
var Odoc_parameter=require("Odoc_parameter");



var Name=0;

var
 value_parameter_text_by_name=
  function(v,name)
   {var match=v[2];
    
    if(match)
     {try
       {var t=List["assoc"](name,match[1][8]);return /* Some */[0,t];}
      catch(exn){if(exn=Not_found){return /* None */0;}else{throw exn;}}
      }
    else
     {return /* None */0;}
    };

var
 update_value_parameters_text=
  function(v)
   {var
     f=
      function(p)
       {return Odoc_parameter["update_parameter_text"]
                (value_parameter_text_by_name(v),p);
        };
    
    return List["iter"](f,v[5]);
    };

var
 parameter_list_from_arrows=
  function(typ)
   {var
     iter=
      function(t)
       {var match=t[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:
             return /* :: */[0,
                     /* tuple */[0,match[1],match[2]],
                     iter(match[3])];
             
            case 6:exit=13;
            case 7:exit=13;
            case 10:return iter(match[1]);
            default:exit=12;}}
        
        switch(exit){case 13:return iter(match[1]);case 12:return /* [] */0;}
        };
    
    return iter(typ);
    };

var
 dummy_parameter_list=
  function(typ)
   {var
     normal_name=
      function(s)
       {switch(s)
         {case "":return s;
          default:
           var match=s[0];
           
           if(match!=63)
            {return s;}
           else
            {return $$String["sub"](s,1,s["length"]-1);}
           }
        };
    
    Printtyp["mark_loops"](typ);
    var liste_param=parameter_list_from_arrows(typ);
    
    var
     iter=
      function(param)
       {var t=param[2];
        
        var label=param[1];
        
        var match=t[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 2:
             if(Primtivie["caml_string_equal"](label,""))
              {return /* Tuple */[1,
                       List["map"]
                        (function(t2){return iter(/* tuple */[0,"",t2]);},match[1]),
                       t];
               }
             else
              {return /* Simple_name */[0,
                       /* record */[0,normal_name(label),t,/* None */0]];
               }
             
            case 6:exit=5;
            case 7:exit=5;
            default:exit=4;}}
        
        switch(exit)
         {case 5:return iter(/* tuple */[0,label,match[1]]);
          case 4:
           return /* Simple_name */[0,
                   /* record */[0,normal_name(label),t,/* None */0]];
           
          }
        };
    
    return List["map"](iter,liste_param);
    };

var
 is_function=
  function(v)
   {var
     f=
      function(t)
       {var match=t[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 1:return /* true */1;
            case 6:return f(match[1]);
            default:exit=1;}}
        
        switch(exit){case 1:return /* false */0;}
        };
    
    return f(v[3]);
    };

module["exports"]=
{"Name":Name,
 "value_parameter_text_by_name":value_parameter_text_by_name,
 "update_value_parameters_text":update_value_parameters_text,
 "parameter_list_from_arrows":parameter_list_from_arrows,
 "dummy_parameter_list":dummy_parameter_list,
 "is_function":is_function};

