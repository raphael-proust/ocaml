// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_name=require("Odoc_name");
var Odoc_class=require("Odoc_class");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Odoc_extension=require("Odoc_extension");
var Str=require("Str");
var Odoc_module=require("Odoc_module");


Odoc_module,Odoc_name;
var
 Search=
  function(P)
   {var
     search_section=
      function(t,s,v)
       {if(P[13](s,v))
         {return /* :: */[0,/* Res_section */[10,s,t],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_text=
      function(root,t,v)
       {return List["flatten"]
                (List["map"](function(e){return search_text_ele(root,e,v);},t));
        };
    
    var
     search_text_ele=
      function(root,e,v)
       {var T=Odoc_types;
        
        var exit;
        
        if(typeof e=="number")
         {switch(e){case 0:exit=274;case 1:exit=274;}}
        else
         {switch(e[0])
           {case 0:exit=271;
            case 1:exit=271;
            case 2:exit=271;
            case 3:exit=271;
            case 10:exit=276;
            case 11:exit=276;
            case 13:
             var t=e[3];
             
             var l_opt=e[2];
             
             return Pervasives["@"]
                     (l_opt
                       ?search_section(t,Odoc_name["concat"](root,l_opt[1]),v)
                       :/* [] */0,
                      search_text(root,t,v));
             
            case 14:exit=271;
            case 15:exit=277;
            case 16:exit=271;
            case 19:exit=274;
            case 20:exit=277;
            case 21:return /* [] */0;
            default:var t$1=e[1];exit=272;}}
        
        switch(exit)
         {case 276:
           return List["flatten"]
                   (List["map"]
                     (function(t){return search_text(root,t,v);},e[1]));
           
          case 277:"unknown block:(exit 272 (field 1 e/1051))";
          case 271:return /* [] */0;
          case 272:return search_text(root,t$1,v);
          case 274:return /* [] */0;
          }
        };
    
    var
     search_value=
      function(va,v)
       {if(P[5](va,v))
         {return /* :: */[0,/* Res_value */[4,va],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_recfield=
      function(t,f,v)
       {if(P[6](t,f,v))
         {return /* :: */[0,/* Res_recfield */[11,t,f],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_const=
      function(t,f,v)
       {if(P[7](t,f,v))
         {return /* :: */[0,/* Res_const */[12,t,f],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_type=
      function(t,v)
       {var match=P[8](t,v);
        
        if(match[1]!=0)
         {var match$1=t[4];
          
          var exit;
          
          if(typeof match$1=="number")
           {switch(match$1){case 0:exit=264;case 1:exit=264;}}
          else
           {switch(match$1[0])
             {case 0:
               var
                l=
                 List["flatten"]
                  (List["map"]
                    (function(rf){return search_const(t,rf,v);},match$1[1]));
               
              case 1:
               var
                l=
                 List["flatten"]
                  (List["map"]
                    (function(rf){return search_recfield(t,rf,v);},match$1[1]));
               
              }}
          
          switch(exit){case 264:var l=/* [] */0;}
          }
        else
         {var l=/* [] */0;}
        
        if(match[2]){return /* :: */[0,/* Res_type */[5,t],l];}else{return l;}
        };
    
    var
     search_extension_constructor=
      function(xt,v)
       {if(P[9](xt,v))
         {return /* :: */[0,/* Res_extension */[6,xt],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_type_extension=
      function(te,v)
       {return List["fold_left"]
                (function(acc,xt)
                  {return Pervasives["@"]
                           (acc,search_extension_constructor(xt,v));
                   },
                 /* [] */0,
                 Odoc_extension["extension_constructors"](te));
        };
    
    var
     search_exception=
      function(e,v)
       {if(P[10](e,v))
         {return /* :: */[0,/* Res_exception */[7,e],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_attribute=
      function(a,v)
       {if(P[11](a,v))
         {return /* :: */[0,/* Res_attribute */[8,a],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_method=
      function(m,v)
       {if(P[12](m,v))
         {return /* :: */[0,/* Res_method */[9,m],/* [] */0];}
        else
         {return /* [] */0;}
        };
    
    var
     search_class=
      function(c,v)
       {var match=P[3](c,v);
        
        if(match[1])
         {var
           res_att=
            List["fold_left"]
             (function(acc,att)
               {return Pervasives["@"](acc,search_attribute(att,v));},
              /* [] */0,
              Odoc_class["class_attributes"](/* None */0,c));
          
          var
           res_met=
            List["fold_left"]
             (function(acc,m){return Pervasives["@"](acc,search_method(m,v));},
              /* [] */0,
              Odoc_class["class_methods"](/* None */0,c));
          
          var
           res_sec=
            List["fold_left"]
             (function(acc,t)
               {return Pervasives["@"](acc,search_text(c[1],t,v));},
              /* [] */0,
              Odoc_class["class_comments"](/* None */0,c));
          
          var l=Pervasives["@"](res_att,Pervasives["@"](res_met,res_sec));
          }
        else
         {var l=/* [] */0;}
        
        if(match[2])
         {return /* :: */[0,/* Res_class */[2,c],l];}
        else
         {return l;}
        };
    
    var
     search_class_type=
      function(ct,v)
       {var match=P[4](ct,v);
        
        if(match[1])
         {var
           res_att=
            List["fold_left"]
             (function(acc,att)
               {return Pervasives["@"](acc,search_attribute(att,v));},
              /* [] */0,
              Odoc_class["class_type_attributes"](/* None */0,ct));
          
          var
           res_met=
            List["fold_left"]
             (function(acc,m){return Pervasives["@"](acc,search_method(m,v));},
              /* [] */0,
              Odoc_class["class_type_methods"](/* None */0,ct));
          
          var
           res_sec=
            List["fold_left"]
             (function(acc,t)
               {return Pervasives["@"](acc,search_text(ct[1],t,v));},
              /* [] */0,
              Odoc_class["class_type_comments"](/* None */0,ct));
          
          var l=Pervasives["@"](res_att,Pervasives["@"](res_met,res_sec));
          }
        else
         {var l=/* [] */0;}
        
        if(match[2])
         {return /* :: */[0,/* Res_class_type */[3,ct],l];}
        else
         {return l;}
        };
    
    var
     search_module_type=
      function(mt,v)
       {var match=P[2](mt,v);
        
        if(match[1])
         {var
           res_val=
            List["fold_left"]
             (function(acc,va)
               {return Pervasives["@"](acc,search_value(va,v));},
              /* [] */0,
              Odoc_module["module_type_values"](/* None */0,mt));
          
          var
           res_typ=
            List["fold_left"]
             (function(acc,t){return Pervasives["@"](acc,search_type(t,v));},
              /* [] */0,
              Odoc_module["module_type_types"](/* None */0,mt));
          
          var
           res_ext=
            List["fold_left"]
             (function(acc,te)
               {return Pervasives["@"](acc,search_type_extension(te,v));},
              /* [] */0,
              Odoc_module["module_type_type_extensions"](/* None */0,mt));
          
          var
           res_exc=
            List["fold_left"]
             (function(acc,e)
               {return Pervasives["@"](acc,search_exception(e,v));},
              /* [] */0,
              Odoc_module["module_type_exceptions"](/* None */0,mt));
          
          var
           res_mod=
            search(Odoc_module["module_type_modules"](/* None */0,mt),v);
          
          var
           res_modtyp=
            List["fold_left"]
             (function(acc,mt)
               {return Pervasives["@"](acc,search_module_type(mt,v));},
              /* [] */0,
              Odoc_module["module_type_module_types"](/* None */0,mt));
          
          var
           res_cl=
            List["fold_left"]
             (function(acc,cl)
               {return Pervasives["@"](acc,search_class(cl,v));},
              /* [] */0,
              Odoc_module["module_type_classes"](/* None */0,mt));
          
          var
           res_cltyp=
            List["fold_left"]
             (function(acc,clt)
               {return Pervasives["@"](acc,search_class_type(clt,v));},
              /* [] */0,
              Odoc_module["module_type_class_types"](/* None */0,mt));
          
          var
           res_sec=
            List["fold_left"]
             (function(acc,t)
               {return Pervasives["@"](acc,search_text(mt[1],t,v));},
              /* [] */0,
              Odoc_module["module_type_comments"](/* None */0,mt));
          
          var
           l=
            Pervasives["@"]
             (res_val,
              Pervasives["@"]
               (res_typ,
                Pervasives["@"]
                 (res_ext,
                  Pervasives["@"]
                   (res_exc,
                    Pervasives["@"]
                     (res_mod,
                      Pervasives["@"]
                       (res_modtyp,
                        Pervasives["@"](res_cl,Pervasives["@"](res_cltyp,res_sec))))))));
          }
        else
         {var l=/* [] */0;}
        
        if(match[2])
         {return /* :: */[0,/* Res_module_type */[1,mt],l];}
        else
         {return l;}
        };
    
    var
     search_module=
      function(m,v)
       {var match=P[1](m,v);
        
        if(match[1])
         {var
           res_val=
            List["fold_left"]
             (function(acc,va)
               {return Pervasives["@"](acc,search_value(va,v));},
              /* [] */0,
              Odoc_module["module_values"](/* None */0,m));
          
          var
           res_typ=
            List["fold_left"]
             (function(acc,t){return Pervasives["@"](acc,search_type(t,v));},
              /* [] */0,
              Odoc_module["module_types"](/* None */0,m));
          
          var
           res_ext=
            List["fold_left"]
             (function(acc,te)
               {return Pervasives["@"](acc,search_type_extension(te,v));},
              /* [] */0,
              Odoc_module["module_type_extensions"](/* None */0,m));
          
          var
           res_exc=
            List["fold_left"]
             (function(acc,e)
               {return Pervasives["@"](acc,search_exception(e,v));},
              /* [] */0,
              Odoc_module["module_exceptions"](/* None */0,m));
          
          var res_mod=search(Odoc_module["module_modules"](/* None */0,m),v);
          
          var
           res_modtyp=
            List["fold_left"]
             (function(acc,mt)
               {return Pervasives["@"](acc,search_module_type(mt,v));},
              /* [] */0,
              Odoc_module["module_module_types"](/* None */0,m));
          
          var
           res_cl=
            List["fold_left"]
             (function(acc,cl)
               {return Pervasives["@"](acc,search_class(cl,v));},
              /* [] */0,
              Odoc_module["module_classes"](/* None */0,m));
          
          var
           res_cltyp=
            List["fold_left"]
             (function(acc,clt)
               {return Pervasives["@"](acc,search_class_type(clt,v));},
              /* [] */0,
              Odoc_module["module_class_types"](/* None */0,m));
          
          var
           res_sec=
            List["fold_left"]
             (function(acc,t)
               {return Pervasives["@"](acc,search_text(m[1],t,v));},
              /* [] */0,
              Odoc_module["module_comments"](/* None */0,m));
          
          var
           l=
            Pervasives["@"]
             (res_val,
              Pervasives["@"]
               (res_typ,
                Pervasives["@"]
                 (res_ext,
                  Pervasives["@"]
                   (res_exc,
                    Pervasives["@"]
                     (res_mod,
                      Pervasives["@"]
                       (res_modtyp,
                        Pervasives["@"](res_cl,Pervasives["@"](res_cltyp,res_sec))))))));
          }
        else
         {var l=/* [] */0;}
        
        if(match[2])
         {return /* :: */[0,/* Res_module */[0,m],l];}
        else
         {return l;}
        };
    
    var
     search=
      function(module_list,v)
       {return List["fold_left"]
                (function(acc,m)
                  {return List["fold_left"]
                           (function(acc2,ele)
                             {if(List["mem"](ele,acc2))
                               {return acc2;}
                              else
                               {return Pervasives["@"](acc2,/* :: */[0,ele,/* [] */0]);}
                              },
                            acc,
                            search_module(m,v));
                   },
                 /* [] */0,
                 module_list);
        };
    
    return [0,
            search_section,
            search_text,
            search_text_ele,
            search_value,
            search_recfield,
            search_const,
            search_type,
            search_extension_constructor,
            search_type_extension,
            search_exception,
            search_attribute,
            search_method,
            search_class,
            search_class_type,
            search_module_type,
            search_module,
            search];
    };

var
 $eq$unknown=
  function(name,regexp){return Str["string_match"](regexp,name,0);};

var
 p_module=
  function(m,r){return /* tuple */[0,/* true */1,$eq$unknown(m[1],r)];};

var
 p_module_type=
  function(mt,r){return /* tuple */[0,/* true */1,$eq$unknown(mt[1],r)];};

var
 p_class=
  function(c,r){return /* tuple */[0,/* true */1,$eq$unknown(c[1],r)];};

var
 p_class_type=
  function(ct,r){return /* tuple */[0,/* true */1,$eq$unknown(ct[1],r)];};

var p_value=function(v,r){return $eq$unknown(v[1],r);};

var
 p_recfield=
  function(t,f,r)
   {var
     name=
      Printf["sprintf"]
       ([/* Format */0,
         [/* String */2,
          /* No_padding */0,
          [/* Char_literal */12,
           46,
           [/* String */2,/* No_padding */0,/* End_of_format */0]]],
         "%s.%s"],
        t[1],
        f[1]);
    
    return $eq$unknown(name,r);
    };

var
 p_const=
  function(t,f,r)
   {var
     name=
      Printf["sprintf"]
       ([/* Format */0,
         [/* String */2,
          /* No_padding */0,
          [/* Char_literal */12,
           46,
           [/* String */2,/* No_padding */0,/* End_of_format */0]]],
         "%s.%s"],
        t[1],
        f[1]);
    
    return $eq$unknown(name,r);
    };

var
 p_type=
  function(t,r){return /* tuple */[0,/* true */1,$eq$unknown(t[1],r)];};

var p_extension=function(x,r){return $eq$unknown(x[1],r);};

var p_exception=function(e,r){return $eq$unknown(e[1],r);};

var p_attribute=function(a,r){return $eq$unknown(a[1][1],r);};

var p_method=function(m,r){return $eq$unknown(m[1][1],r);};

var p_section=function(s,r){return $eq$unknown(s,r);};

var
 P_name=
  [0,
   $eq$unknown,
   p_module,
   p_module_type,
   p_class,
   p_class_type,
   p_value,
   p_recfield,
   p_const,
   p_type,
   p_extension,
   p_exception,
   p_attribute,
   p_method,
   p_section];

var
 Search_by_name=
  Search
   ([0,
     P_name[2],
     P_name[3],
     P_name[4],
     P_name[5],
     P_name[6],
     P_name[7],
     P_name[8],
     P_name[9],
     P_name[10],
     P_name[11],
     P_name[12],
     P_name[13],
     P_name[14]]);

var
 p_module$1=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$1=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$1=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$1=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$1=function(param,param$1){return /* true */1;};

var p_recfield$1=function(param,param$1,param$2){return /* false */0;};

var p_const$1=function(param,param$1,param$2){return /* false */0;};

var
 p_type$1=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$1=function(param,param$1){return /* false */0;};

var p_exception$1=function(param,param$1){return /* false */0;};

var p_attribute$1=function(param,param$1){return /* false */0;};

var p_method$1=function(param,param$1){return /* false */0;};

var p_section$1=function(param,param$1){return /* false */0;};

var
 P_values=
  [0,
   p_module$1,
   p_module_type$1,
   p_class$1,
   p_class_type$1,
   p_value$1,
   p_recfield$1,
   p_const$1,
   p_type$1,
   p_extension$1,
   p_exception$1,
   p_attribute$1,
   p_method$1,
   p_section$1];

var Search_values=Search(P_values);

var
 values=
  function(l)
   {var l_ele=Search_values[17](l,/* () */0);
    
    var
     p=
      function(v1,v2){return Primtivie["caml_string_equal"](v1[1],v2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 4:
             var q=param[2];
             
             var v=match[1];
             
             if(List["exists"](p(v),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,v,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$2=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$2=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$2=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$2=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$2=function(param,param$1){return /* false */0;};

var p_recfield$2=function(param,param$1,param$2){return /* false */0;};

var p_const$2=function(param,param$1,param$2){return /* false */0;};

var
 p_type$2=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$2=function(param,param$1){return /* true */1;};

var p_exception$2=function(param,param$1){return /* false */0;};

var p_attribute$2=function(param,param$1){return /* false */0;};

var p_method$2=function(param,param$1){return /* false */0;};

var p_section$2=function(param,param$1){return /* false */0;};

var
 P_extensions=
  [0,
   p_module$2,
   p_module_type$2,
   p_class$2,
   p_class_type$2,
   p_value$2,
   p_recfield$2,
   p_const$2,
   p_type$2,
   p_extension$2,
   p_exception$2,
   p_attribute$2,
   p_method$2,
   p_section$2];

var Search_extensions=Search(P_extensions);

var
 extensions=
  function(l)
   {var l_ele=Search_extensions[17](l,/* () */0);
    
    var
     p=
      function(x1,x2){return Primtivie["caml_string_equal"](x1[1],x2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 6:
             var q=param[2];
             
             var x=match[1];
             
             if(List["exists"](p(x),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,x,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$3=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$3=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$3=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$3=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$3=function(param,param$1){return /* false */0;};

var p_recfield$3=function(param,param$1,param$2){return /* false */0;};

var p_const$3=function(param,param$1,param$2){return /* false */0;};

var
 p_type$3=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$3=function(param,param$1){return /* false */0;};

var p_exception$3=function(param,param$1){return /* true */1;};

var p_attribute$3=function(param,param$1){return /* false */0;};

var p_method$3=function(param,param$1){return /* false */0;};

var p_section$3=function(param,param$1){return /* false */0;};

var
 P_exceptions=
  [0,
   p_module$3,
   p_module_type$3,
   p_class$3,
   p_class_type$3,
   p_value$3,
   p_recfield$3,
   p_const$3,
   p_type$3,
   p_extension$3,
   p_exception$3,
   p_attribute$3,
   p_method$3,
   p_section$3];

var Search_exceptions=Search(P_exceptions);

var
 exceptions=
  function(l)
   {var l_ele=Search_exceptions[17](l,/* () */0);
    
    var
     p=
      function(e1,e2){return Primtivie["caml_string_equal"](e1[1],e2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 7:
             var q=param[2];
             
             var t=match[1];
             
             if(List["exists"](p(t),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,t,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$4=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$4=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$4=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$4=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$4=function(param,param$1){return /* false */0;};

var p_recfield$4=function(param,param$1,param$2){return /* false */0;};

var p_const$4=function(param,param$1,param$2){return /* false */0;};

var
 p_type$4=
  function(param,param$1){return [/* tuple */0,/* false */0,/* true */1];};

var p_extension$4=function(param,param$1){return /* false */0;};

var p_exception$4=function(param,param$1){return /* false */0;};

var p_attribute$4=function(param,param$1){return /* false */0;};

var p_method$4=function(param,param$1){return /* false */0;};

var p_section$4=function(param,param$1){return /* false */0;};

var
 P_types=
  [0,
   p_module$4,
   p_module_type$4,
   p_class$4,
   p_class_type$4,
   p_value$4,
   p_recfield$4,
   p_const$4,
   p_type$4,
   p_extension$4,
   p_exception$4,
   p_attribute$4,
   p_method$4,
   p_section$4];

var Search_types=Search(P_types);

var
 types=
  function(l)
   {var l_ele=Search_types[17](l,/* () */0);
    
    var
     p=
      function(t1,t2){return Primtivie["caml_string_equal"](t1[1],t2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 5:
             var q=param[2];
             
             var t=match[1];
             
             if(List["exists"](p(t),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,t,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$5=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$5=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$5=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class_type$5=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var p_value$5=function(param,param$1){return /* false */0;};

var p_recfield$5=function(param,param$1,param$2){return /* false */0;};

var p_const$5=function(param,param$1,param$2){return /* false */0;};

var
 p_type$5=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$5=function(param,param$1){return /* false */0;};

var p_exception$5=function(param,param$1){return /* false */0;};

var p_attribute$5=function(param,param$1){return /* true */1;};

var p_method$5=function(param,param$1){return /* false */0;};

var p_section$5=function(param,param$1){return /* false */0;};

var
 P_attributes=
  [0,
   p_module$5,
   p_module_type$5,
   p_class$5,
   p_class_type$5,
   p_value$5,
   p_recfield$5,
   p_const$5,
   p_type$5,
   p_extension$5,
   p_exception$5,
   p_attribute$5,
   p_method$5,
   p_section$5];

var Search_attributes=Search(P_attributes);

var
 attributes=
  function(l)
   {var l_ele=Search_attributes[17](l,/* () */0);
    
    var
     p=
      function(a1,a2)
       {return Primtivie["caml_string_equal"](a1[1][1],a2[1][1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 8:
             var q=param[2];
             
             var t=match[1];
             
             if(List["exists"](p(t),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,t,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$6=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$6=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$6=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class_type$6=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var p_value$6=function(param,param$1){return /* false */0;};

var p_recfield$6=function(param,param$1,param$2){return /* false */0;};

var p_const$6=function(param,param$1,param$2){return /* false */0;};

var
 p_type$6=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$6=function(param,param$1){return /* false */0;};

var p_exception$6=function(param,param$1){return /* false */0;};

var p_attribute$6=function(param,param$1){return /* false */0;};

var p_method$6=function(param,param$1){return /* true */1;};

var p_section$6=function(param,param$1){return /* true */1;};

var
 P_methods=
  [0,
   p_module$6,
   p_module_type$6,
   p_class$6,
   p_class_type$6,
   p_value$6,
   p_recfield$6,
   p_const$6,
   p_type$6,
   p_extension$6,
   p_exception$6,
   p_attribute$6,
   p_method$6,
   p_section$6];

var Search_methods=Search(P_methods);

var
 methods=
  function(l)
   {var l_ele=Search_methods[17](l,/* () */0);
    
    var
     p=
      function(m1,m2)
       {return Primtivie["caml_string_equal"](m1[1][1],m2[1][1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 9:
             var q=param[2];
             
             var t=match[1];
             
             if(List["exists"](p(t),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,t,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$7=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$7=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$7=
  function(param,param$1){return [/* tuple */0,/* false */0,/* true */1];};

var
 p_class_type$7=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$7=function(param,param$1){return /* false */0;};

var p_recfield$7=function(param,param$1,param$2){return /* false */0;};

var p_const$7=function(param,param$1,param$2){return /* false */0;};

var
 p_type$7=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$7=function(param,param$1){return /* false */0;};

var p_exception$7=function(param,param$1){return /* false */0;};

var p_attribute$7=function(param,param$1){return /* false */0;};

var p_method$7=function(param,param$1){return /* false */0;};

var p_section$7=function(param,param$1){return /* false */0;};

var
 P_classes=
  [0,
   p_module$7,
   p_module_type$7,
   p_class$7,
   p_class_type$7,
   p_value$7,
   p_recfield$7,
   p_const$7,
   p_type$7,
   p_extension$7,
   p_exception$7,
   p_attribute$7,
   p_method$7,
   p_section$7];

var Search_classes=Search(P_classes);

var
 classes=
  function(l)
   {var l_ele=Search_classes[17](l,/* () */0);
    
    var
     p=
      function(c1,c2){return Primtivie["caml_string_equal"](c1[1],c2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 2:
             var q=param[2];
             
             var c=match[1];
             
             if(List["exists"](p(c),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,c,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$8=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$8=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$8=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$8=
  function(param,param$1){return [/* tuple */0,/* false */0,/* true */1];};

var p_value$8=function(param,param$1){return /* false */0;};

var p_recfield$8=function(param,param$1,param$2){return /* false */0;};

var p_const$8=function(param,param$1,param$2){return /* false */0;};

var
 p_type$8=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$8=function(param,param$1){return /* false */0;};

var p_exception$8=function(param,param$1){return /* false */0;};

var p_attribute$8=function(param,param$1){return /* false */0;};

var p_method$8=function(param,param$1){return /* false */0;};

var p_section$8=function(param,param$1){return /* false */0;};

var
 P_class_types=
  [0,
   p_module$8,
   p_module_type$8,
   p_class$8,
   p_class_type$8,
   p_value$8,
   p_recfield$8,
   p_const$8,
   p_type$8,
   p_extension$8,
   p_exception$8,
   p_attribute$8,
   p_method$8,
   p_section$8];

var Search_class_types=Search(P_class_types);

var
 class_types=
  function(l)
   {var l_ele=Search_class_types[17](l,/* () */0);
    
    var
     p=
      function(c1,c2){return Primtivie["caml_string_equal"](c1[1],c2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 3:
             var q=param[2];
             
             var c=match[1];
             
             if(List["exists"](p(c),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,c,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$9=
  function(param,param$1){return [/* tuple */0,/* true */1,/* true */1];};

var
 p_module_type$9=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_class$9=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$9=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$9=function(param,param$1){return /* false */0;};

var p_recfield$9=function(param,param$1,param$2){return /* false */0;};

var p_const$9=function(param,param$1,param$2){return /* false */0;};

var
 p_type$9=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$9=function(param,param$1){return /* false */0;};

var p_exception$9=function(param,param$1){return /* false */0;};

var p_attribute$9=function(param,param$1){return /* false */0;};

var p_method$9=function(param,param$1){return /* false */0;};

var p_section$9=function(param,param$1){return /* false */0;};

var
 P_modules=
  [0,
   p_module$9,
   p_module_type$9,
   p_class$9,
   p_class_type$9,
   p_value$9,
   p_recfield$9,
   p_const$9,
   p_type$9,
   p_extension$9,
   p_exception$9,
   p_attribute$9,
   p_method$9,
   p_section$9];

var Search_modules=Search(P_modules);

var
 modules=
  function(l)
   {var l_ele=Search_modules[17](l,/* () */0);
    
    var
     p=
      function(m1,m2){return Primtivie["caml_string_equal"](m1[1],m2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 0:
             var q=param[2];
             
             var m=match[1];
             
             if(List["exists"](p(m),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,m,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 p_module$10=
  function(param,param$1){return [/* tuple */0,/* true */1,/* false */0];};

var
 p_module_type$10=
  function(param,param$1){return [/* tuple */0,/* true */1,/* true */1];};

var
 p_class$10=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var
 p_class_type$10=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_value$10=function(param,param$1){return /* false */0;};

var p_recfield$10=function(param,param$1,param$2){return /* false */0;};

var p_const$10=function(param,param$1,param$2){return /* false */0;};

var
 p_type$10=
  function(param,param$1){return [/* tuple */0,/* false */0,/* false */0];};

var p_extension$10=function(param,param$1){return /* false */0;};

var p_exception$10=function(param,param$1){return /* false */0;};

var p_attribute$10=function(param,param$1){return /* false */0;};

var p_method$10=function(param,param$1){return /* false */0;};

var p_section$10=function(param,param$1){return /* false */0;};

var
 P_module_types=
  [0,
   p_module$10,
   p_module_type$10,
   p_class$10,
   p_class_type$10,
   p_value$10,
   p_recfield$10,
   p_const$10,
   p_type$10,
   p_extension$10,
   p_exception$10,
   p_attribute$10,
   p_method$10,
   p_section$10];

var Search_module_types=Search(P_module_types);

var
 module_types=
  function(l)
   {var l_ele=Search_module_types[17](l,/* () */0);
    
    var
     p=
      function(m1,m2){return Primtivie["caml_string_equal"](m1[1],m2[1]);};
    
    var
     iter=
      function(acc,param)
       {if(param)
         {var match=param[1];
          
          switch(match)
           {case 1:
             var q=param[2];
             
             var m=match[1];
             
             if(List["exists"](p(m),acc))
              {return iter(acc,q);}
             else
              {return iter(/* :: */[0,m,acc],q);}
             
            default:return iter(acc,param[2]);}
          }
        else
         {return acc;}
        };
    
    return iter(/* [] */0,l_ele);
    };

var
 type_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 5:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 value_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 4:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 class_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 2:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 class_type_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 3:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 module_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 0:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 module_type_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 1:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 extension_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 6:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 exception_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 7:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 attribute_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 8:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 method_exists=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    return List["exists"]
            (function(param)
              {switch(param)
                {case 9:return /* true */1;default:return /* false */0;}
               },
             l);
    };

var
 find_section=
  function(mods,regexp)
   {var l=Search_by_name[17](mods,regexp);
    
    var
     match=
      List["find"]
       (function(param)
         {switch(param)
           {case 10:return /* true */1;default:return /* false */0;}
          },
        l);
    
    switch(match)
     {case 10:return match[2];
      default:throw [0,Assert_failure,[0,"odoc_search.ml",752,9]];}
    };

module["exports"]=
{"Search":
 function(funarg)
  {var $$let=Search(funarg);
   
   return [0,
           $$let[1],
           $$let[4],
           $$let[5],
           $$let[6],
           $$let[7],
           $$let[8],
           $$let[9],
           $$let[10],
           $$let[11],
           $$let[12],
           $$let[13],
           $$let[14],
           $$let[15],
           $$let[16],
           $$let[17]];
   },
 "P_name":
 [0,
  P_name[1],
  P_name[2],
  P_name[3],
  P_name[4],
  P_name[5],
  P_name[6],
  P_name[7],
  P_name[8],
  P_name[9],
  P_name[10],
  P_name[11],
  P_name[12],
  P_name[13]],
 "Search_by_name":
 [0,
  Search_by_name[1],
  Search_by_name[4],
  Search_by_name[5],
  Search_by_name[6],
  Search_by_name[7],
  Search_by_name[8],
  Search_by_name[9],
  Search_by_name[10],
  Search_by_name[11],
  Search_by_name[12],
  Search_by_name[13],
  Search_by_name[14],
  Search_by_name[15],
  Search_by_name[16],
  Search_by_name[17]],
 "values":values,
 "extensions":extensions,
 "exceptions":exceptions,
 "types":types,
 "attributes":attributes,
 "methods":methods,
 "classes":classes,
 "class_types":class_types,
 "modules":modules,
 "module_types":module_types,
 "type_exists":type_exists,
 "value_exists":value_exists,
 "module_exists":module_exists,
 "module_type_exists":module_type_exists,
 "class_exists":class_exists,
 "class_type_exists":class_type_exists,
 "extension_exists":extension_exists,
 "exception_exists":exception_exists,
 "attribute_exists":attribute_exists,
 "method_exists":method_exists,
 "find_section":find_section};

