// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 complete_name=
  function(p)
   {var
     iter=
      function(pi)
       {switch(pi[0])
         {case 0:return pi[1][1];
          case 1:
           var pi_list=pi[1];
           
           return pi_list
                   ?Pervasives["^"]
                     ("(",
                      Pervasives["^"]
                       ($$String["concat"](",",List["map"](iter,pi_list)),")"))
                   :"??"
          }
        };
    
    return iter(p)};

var
 typ=
  function(pi){switch(pi[0]){case 0:return pi[1][2];case 1:return pi[2]}};

var
 update_parameter_text=
  function(f,p)
   {var
     iter=
      function(pi)
       {switch(pi[0])
         {case 0:var sn=pi[1];return sn[3]=f(sn[1]),0;
          case 1:return List["iter"](iter,pi[1])
          }
        };
    
    return iter(p)};

var
 desc_by_name=
  function(pi,name)
   {var
     iter=
      function(acc,pi)
       {switch(pi[0])
         {case 0:
           var sn=pi[1];return /* :: */[0,/* tuple */[0,sn[1],sn[3]],acc];
          case 1:return List["fold_left"](iter,acc,pi[1])
          }
        };
    
    var l=iter(/* [] */0,pi);
    
    return List["assoc"](name,l)};

var
 names=
  function(pi)
   {var
     iter=
      function(acc,pi)
       {switch(pi[0])
         {case 0:return /* :: */[0,pi[1][1],acc];
          case 1:return List["fold_left"](iter,acc,pi[1])
          }
        };
    
    return iter(/* [] */0,pi)};

var
 type_by_name=
  function(pi,name)
   {var
     iter=
      function(acc,pi)
       {switch(pi[0])
         {case 0:
           var sn=pi[1];return /* :: */[0,/* tuple */[0,sn[1],sn[2]],acc];
          case 1:return List["fold_left"](iter,acc,pi[1])
          }
        };
    
    var l=iter(/* [] */0,pi);
    
    return List["assoc"](name,l)};

var
 desc_from_info_opt=
  function(info_opt,s)
   {if(info_opt)
     {switch(s)
       {case "":return /* None */0;
        default:
         try
          {return /* Some */[0,List["assoc"](s,info_opt[1][8])]}
         catch(exn)
          {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
            {return /* None */0}
           else
            {throw exn}
           }
         }
      }
    else
     {return /* None */0}
    };

module["exports"]=
{"complete_name":complete_name,
 "typ":typ,
 "update_parameter_text":update_parameter_text,
 "desc_by_name":desc_by_name,
 "names":names,
 "type_by_name":type_by_name,
 "desc_from_info_opt":desc_from_info_opt};

