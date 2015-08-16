// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("./ctype.js");
var Pervasives=require("./pervasives.js");
var List=require("./list.js");
var Btype=require("./btype.js");
var Env=require("./env.js");
var Predef=require("./predef.js");
var Types=require("./types.js");
var Format=require("./format.js");
var Misc=require("./misc.js");
var Ident=require("./ident.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Dont_match=
  CamlPrimitive["caml_set_oo_id"]([248,"Includecore.Dont_match",0]);

var
 value_descriptions=
  function(env,id,vd1,vd2)
   {if(Ctype["moregeneral"](env,/* true */1,vd1[1],vd2[1]))
     {var match=vd1[2];
      
      var match$1=vd2[2];
      
      var exit;
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 0:
           var p1=match[1];
           
           var exit$1;
           
           if(typeof match$1==="number")
            {switch(match$1){}}
           else
            {switch(match$1[0])
              {case 0:
                if(CamlPrimitive["caml_equal"](p1,match$1[1]))
                 {return /* Tcoerce_none */0;}
                else
                 {throw Dont_match;}
                
               default:exit$1=71;}}
           
           switch(exit$1){case 71:return /* Tcoerce_primitive */[2,id,p1];}
           
          default:exit=70;}}
      
      switch(exit)
       {case 70:
         if(typeof match$1==="number")
          {switch(match$1){}}
         else
          {switch(match$1[0]){case 0:throw Dont_match;default:exit=69;}}
         
        case 69:return /* Tcoerce_none */0;
        }
      }
    else
     {throw Dont_match;}
    };

var
 private_flags=
  function(decl1,decl2)
   {var match=decl1[4];
    
    var match$1=decl2[4];
    
    var exit;
    
    if(match!==0)
     {exit=67;}
    else
     {if(match$1!==0)
       {return decl2[3]===
               /* Type_abstract */0&&
               (decl2[5]===/* None */0||decl1[3]!==/* Type_abstract */0);
        }
      else
       {exit=67;}
      }
    
    switch(exit){case 67:return /* true */1;}
    };

var
 is_absrow=
  function(env,ty)
   {var match=ty[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 3:
         switch(match[1][0])
          {case 0:
            var match$1=Ctype["expand_head"](env,ty);
            
            var match$2=match$1[1];
            
            var exit$1;
            
            if(typeof match$2==="number")
             {switch(match$2){}}
            else
             {switch(match$2[0])
               {case 4:exit$1=64;case 8:exit$1=64;default:exit$1=63;}}
            
            switch(exit$1)
             {case 64:return /* true */1;case 63:return /* false */0;}
            
           case 1:exit=65;
           case 2:exit=65;
           }
         
        default:exit=65;}}
    
    switch(exit){case 65:return /* false */0;}
    };

var
 type_manifest=
  function(env,ty1,params1,ty2,params2,priv2)
   {var ty1$prime=Ctype["expand_head"](env,ty1);
    
    var ty2$prime=Ctype["expand_head"](env,ty2);
    
    var match=ty1$prime[1];
    
    var match$1=ty2$prime[1];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 4:
         if(typeof match$1==="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 4:
              var fi2=match$1[1];
              
              if(is_absrow(env,Ctype["flatten_fields"](fi2)[2]))
               {var match$2=Ctype["flatten_fields"](fi2);
                
                var match$3=Ctype["flatten_fields"](match[1]);
                
                var match$4=match$3[2][1];
                
                var exit$1;
                
                var $js;
                if(typeof match$4==="number")
                 {switch(match$4){case 0:exit$1=52;}}
                else
                 {switch(match$4[0])
                   {case 0:exit$1=52;
                    case 3:exit$1=52;
                    default:$js=/* false */0;}}
                
                var $js$1;
                switch(exit$1){case 52:$js$1=/* true */1;}
                var match$5=Ctype["associate_fields"](match$3[1],match$2[1]);
                
                var
                 match$6=
                  List["split"]
                   (List["map"]
                     (function(param){return /* tuple */[0,param[3],param[5]];},
                      match$5[1]));
                
                return Ctype["equal"]
                        (env,
                         /* true */1,
                         /* :: */[0,ty1,params1],
                         /* :: */[0,match$2[2],params2])&&
                       $js$1&&
                       match$5[3]===
                       /* [] */0&&
                       Ctype["equal"]
                        (env,
                         /* true */1,
                         Pervasives["@"](params1,match$6[1]),
                         Pervasives["@"](params2,match$6[2]));
                }
              else
               {exit=58;}
              
             default:exit=58;}}
         
        case 8:
         if(typeof match$1==="number")
          {switch(match$1){}}
         else
          {switch(match$1[0])
            {case 8:
              var row2=match$1[1];
              
              if(is_absrow(env,Btype["row_more"](row2)))
               {var row1=Btype["row_repr"](match[1]);
                
                var row2$1=Btype["row_repr"](row2);
                
                var match$7=row1[2];
                
                var match$8=match$7[1];
                
                var exit$2;
                
                var $js$2;
                if(typeof match$8==="number")
                 {switch(match$8){case 0:exit$2=39;}}
                else
                 {switch(match$8[0])
                   {case 0:exit$2=39;
                    case 3:exit$2=39;
                    default:$js$2=/* false */0;}}
                
                var $js$3;
                switch(exit$2){case 39:$js$3=/* true */1;}
                var match$9=Ctype["merge_row_fields"](row1[1],row2$1[1]);
                
                var to_equal=[0,List["combine"](params1,params2)];
                
                var match$10=List["split"](to_equal[1]);
                
                return Ctype["equal"]
                        (env,
                         /* true */1,
                         /* :: */[0,ty1,params1],
                         /* :: */[0,row2$1[2],params2])&&
                       $js$3&&
                       (!row2$1[4]||
                        row1[4]&&
                        Ctype["filter_row_fields"](/* false */0,match$9[1])===
                        /* [] */0)&&
                       List["for_all"]
                        (function(param)
                          {var match$11=Btype["row_field_repr"](param[2]);
                           
                           var exit$3;
                           
                           if(typeof match$11==="number")
                            {switch(match$11){case 0:exit$3=40;}}
                           else
                            {switch(match$11[0])
                              {case 0:return /* false */0;case 1:exit$3=40;}}
                           
                           switch(exit$3){case 40:return /* true */1;}
                           },
                         match$9[2])&&
                       List["for_all"]
                        (function(param)
                          {var match$11=Btype["row_field_repr"](param[2]);
                           
                           var match$12=Btype["row_field_repr"](param[3]);
                           
                           var exit$3;
                           
                           if(typeof match$11==="number")
                            {switch(match$11)
                              {case 0:
                                var exit$4;
                                
                                if(typeof match$12==="number")
                                 {switch(match$12){case 0:exit$4=44;}}
                                else
                                 {switch(match$12[0]){case 0:exit$3=41;case 1:exit$4=44;}}
                                
                                switch(exit$4){case 44:return /* true */1;}
                                
                               }}
                           else
                            {switch(match$11[0])
                              {case 0:
                                var match$13=match$11[1];
                                
                                if(match$13)
                                 {var exit$5;
                                  
                                  if(typeof match$12==="number")
                                   {switch(match$12){case 0:exit$3=41;}}
                                  else
                                   {switch(match$12[0])
                                     {case 0:
                                       var match$14=match$12[1];
                                       
                                       if(match$14){var t2=match$14[1];exit$5=42;}else{exit$3=41;}
                                       
                                      case 1:
                                       if(match$12[1]!==0)
                                        {exit$3=41;}
                                       else
                                        {var match$15=match$12[2];
                                         
                                         if(match$15)
                                          {if(match$15[2])
                                            {exit$3=41;}
                                           else
                                            {var t2=match$15[1];exit$5=42;}
                                           }
                                         else
                                          {exit$3=41;}
                                         }
                                       
                                      }}
                                  
                                  switch(exit$5)
                                   {case 42:
                                     to_equal[1]=
                                     /* :: */[0,/* tuple */[0,match$13[1],t2],to_equal[1]];
                                     return /* true */1;
                                     
                                    }
                                  }
                                else
                                 {var exit$6;
                                  
                                  if(typeof match$12==="number")
                                   {switch(match$12){case 0:exit$3=41;}}
                                  else
                                   {switch(match$12[0])
                                     {case 0:if(match$12[1]){exit$3=41;}else{exit$6=43;}
                                      case 1:
                                       if(match$12[1]!==0)
                                        {if(match$12[2]){exit$3=41;}else{exit$6=43;}}
                                       else
                                        {exit$3=41;}
                                       
                                      }}
                                  
                                  switch(exit$6){case 43:return /* true */1;}
                                  }
                                
                               case 1:
                                var tl1=match$11[2];
                                
                                if(typeof match$12==="number")
                                 {switch(match$12){case 0:exit$3=41;}}
                                else
                                 {switch(match$12[0])
                                   {case 0:exit$3=41;
                                    case 1:
                                     var tl2=match$12[2];
                                     
                                     if
                                      (List["length"](tl1)===
                                       List["length"](tl2)&&
                                       CamlPrimitive["caml_equal"](match$11[1],match$12[1]))
                                      {to_equal[1]=
                                       Pervasives["@"](List["combine"](tl1,tl2),to_equal[1]);
                                       return /* true */1;
                                       }
                                     else
                                      {exit$3=41;}
                                     
                                    }}
                                
                               }}
                           
                           switch(exit$3){case 41:return /* false */0;}
                           },
                         match$9[3])&&
                       Ctype["equal"](env,/* true */1,match$10[1],match$10[2]);
                }
              else
               {exit=58;}
              
             default:exit=58;}}
         
        default:exit=58;}}
    
    switch(exit)
     {case 58:
       var
        check_super=
         function(ty1)
          {var $js$4;
           try
            {$js$4=
             check_super
              (Ctype["try_expand_once_opt"](env,Ctype["expand_head"](env,ty1)));
             }
           catch(exn)
            {if(exn===Ctype["Cannot_expand"])
              {$js$4=/* false */0;}
             else
              {throw exn;}
             }
           return Ctype["equal"]
                   (env,
                    /* true */1,
                    /* :: */[0,ty1,params1],
                    /* :: */[0,ty2,params2])||
                  priv2===
                  /* Private */0&&
                  $js$4;
           };
       
       return check_super(ty1);
       
      }
    };

var
 report_type_mismatch0=
  function(first,second,decl,ppf,err)
   {var pr=function(fmt){return Format["fprintf"](ppf,fmt);};
    
    if(typeof err==="number")
     {switch(err)
       {case 0:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "They have different arities",
                    /* End_of_format */0],
                   "They have different arities"]);
         
        case 1:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "A private type would be revealed",
                    /* End_of_format */0],
                   "A private type would be revealed"]);
         
        case 2:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Their kinds differ",
                    /* End_of_format */0],
                   "Their kinds differ"]);
         
        case 3:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Their constraints differ",
                    /* End_of_format */0],
                   "Their constraints differ"]);
         
        case 4:return /* () */0;
        case 5:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Their variances do not agree",
                    /* End_of_format */0],
                   "Their variances do not agree"]);
         
        }}
    else
     {switch(err[0])
       {case 0:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "The types for field ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " are not equal",
                      /* End_of_format */0]]],
                   "The types for field %s are not equal"],
                  Ident["name"](err[1]));
         
        case 1:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "The mutability of field ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " is different",
                      /* End_of_format */0]]],
                   "The mutability of field %s is different"],
                  Ident["name"](err[1]));
         
        case 2:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "The arities for field ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11," differ",/* End_of_format */0]]],
                   "The arities for field %s differ"],
                  Ident["name"](err[1]));
         
        case 3:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Fields number ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      " have different names, ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " and ",
                        [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                   "Fields number %i have different names, %s and %s"],
                  err[1],
                  Ident["name"](err[2]),
                  Ident["name"](err[3]));
         
        case 4:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "The field ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " is only present in ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* Char_literal */12,
                        32,
                        [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                   "The field %s is only present in %s %s"],
                  Ident["name"](err[2]),
                  err[1]?second:first,
                  decl);
         
        case 5:
         return pr
                 ([/* Format */0,
                   [/* String_literal */11,
                    "Their internal representations differ:",
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* String */2,
                      /* No_padding */0,
                      [/* Char_literal */12,
                       32,
                       [/* String */2,
                        /* No_padding */0,
                        [/* Char_literal */12,
                         32,
                         [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]]],
                   "Their internal representations differ:@ %s %s %s"],
                  err[1]?second:first,
                  decl,
                  "uses unboxed float representation");
         
        }}
    };

var
 report_type_mismatch=
  function(first,second,decl,ppf)
   {return List["iter"]
            (function(err)
              {if(err===/* Manifest */4)
                {return /* () */0;}
               else
                {return Format["fprintf"]
                         (ppf,
                          [/* Format */0,
                           [/* Formatting_lit */17,
                            [/* Break */0,"@ ",1,0],
                            [/* Alpha */15,
                             [/* Char_literal */12,46,/* End_of_format */0]]],
                           "@ %a."],
                          report_type_mismatch0(first,second,decl),
                          err);
                 }
               });
    };

var
 compare_variants=
  function(env,decl1,decl2,n,cstrs1,cstrs2)
   {if(cstrs1)
     {var c=cstrs1[1];
      
      if(cstrs2)
       {var match=cstrs2[1];
        
        var ret2=match[3];
        
        var arg2=match[2];
        
        var cstr2=match[1];
        
        var ret1=c[3];
        
        var arg1=c[2];
        
        var cstr1=c[1];
        
        if
         (CamlPrimitive["caml_string_notequal"]
           (Ident["name"](cstr1),Ident["name"](cstr2)))
         {return /* :: */[0,/* Field_names */[3,n,cstr1,cstr2],/* [] */0];}
        else
         {if(List["length"](arg1)!==List["length"](arg2))
           {return /* :: */[0,/* Field_arity */[2,cstr1],/* [] */0];}
          else
           {var exit;
            
            if(ret1)
             {if(ret2)
               {if
                 (!Ctype["equal"]
                   (env,
                    /* true */1,
                    /* :: */[0,ret1[1],/* [] */0],
                    /* :: */[0,ret2[1],/* [] */0]))
                 {return /* :: */[0,/* Field_type */[0,cstr1],/* [] */0];}
                else
                 {exit=33;}
                }
              else
               {exit=32;}
              }
            else
             {if(ret2){exit=32;}else{exit=33;}}
            
            switch(exit)
             {case 33:
               if
                (Misc["for_all2"]
                  (function(ty1,ty2)
                    {return Ctype["equal"]
                             (env,
                              /* true */1,
                              /* :: */[0,ty1,decl1[1]],
                              /* :: */[0,ty2,decl2[1]]);
                     },
                   arg1,
                   arg2))
                {return compare_variants
                         (env,decl1,decl2,n+1,cstrs1[2],cstrs2[2]);
                 }
               else
                {return /* :: */[0,/* Field_type */[0,cstr1],/* [] */0];}
               
              case 32:return /* :: */[0,/* Field_type */[0,cstr1],/* [] */0];
              }
            }
          }
        }
      else
       {return /* :: */[0,/* Field_missing */[4,/* false */0,c[1]],/* [] */0];
        }
      }
    else
     {if(cstrs2)
       {return /* :: */[0,
                /* Field_missing */[4,/* true */1,cstrs2[1][1]],
                /* [] */0];
        }
      else
       {return /* [] */0;}
      }
    };

var
 compare_records=
  function(env,decl1,decl2,n,labels1,labels2)
   {if(labels1)
     {var l=labels1[1];
      
      if(labels2)
       {var match=labels2[1];
        
        var lab2=match[1];
        
        var lab1=l[1];
        
        if
         (CamlPrimitive["caml_string_notequal"]
           (Ident["name"](lab1),Ident["name"](lab2)))
         {return /* :: */[0,/* Field_names */[3,n,lab1,lab2],/* [] */0];}
        else
         {if(CamlPrimitive["caml_notequal"](l[2],match[2]))
           {return /* :: */[0,/* Field_mutable */[1,lab1],/* [] */0];}
          else
           {if
             (Ctype["equal"]
               (env,
                /* true */1,
                /* :: */[0,l[3],decl1[1]],
                /* :: */[0,match[3],decl2[1]]))
             {return compare_records
                      (env,decl1,decl2,n+1,labels1[2],labels2[2]);
              }
            else
             {return /* :: */[0,/* Field_type */[0,lab1],/* [] */0];}
            }
          }
        }
      else
       {return /* :: */[0,/* Field_missing */[4,/* false */0,l[1]],/* [] */0];
        }
      }
    else
     {if(labels2)
       {return /* :: */[0,
                /* Field_missing */[4,/* true */1,labels2[1][1]],
                /* [] */0];
        }
      else
       {return /* [] */0;}
      }
    };

var
 type_declarations=
  function($staropt$star,env,name,decl1,id,decl2)
   {if($staropt$star)
     {var equality=$staropt$star[1];}
    else
     {var equality=/* false */0;}
    
    if(decl1[2]!==decl2[2])
     {return [/* :: */0,/* Arity */0,/* [] */0];}
    else
     {if(!private_flags(decl1,decl2))
       {return [/* :: */0,/* Privacy */1,/* [] */0];}
      else
       {var match=decl1[3];
        
        var match$1=decl2[3];
        
        var exit;
        
        if(typeof match$1==="number")
         {if(match$1!==0){exit=28;}else{var err=/* [] */0;}}
        else
         {exit=28;}
        
        switch(exit)
         {case 28:
           if(typeof match==="number")
            {switch(match)
              {case 0:exit=27;
               case 1:
                if(typeof match$1==="number")
                 {var err=/* [] */0;}
                else
                 {exit=27;}
                
               }}
           else
            {switch(match[0])
              {case 0:
                if(typeof match$1==="number")
                 {switch(match$1){case 1:exit=27;}}
                else
                 {switch(match$1[0])
                   {case 0:
                     var rep2=match$1[2];
                     
                     var
                      err$1=
                       compare_records(env,decl1,decl2,1,match[1],match$1[1]);
                     
                     if
                      (err$1!==
                       /* [] */0||
                       CamlPrimitive["caml_equal"](match[2],rep2))
                      {var err=err$1;}
                     else
                      {var
                        err=
                         /* :: */[0,
                          /* Record_representation */[5,rep2===/* Record_float */1],
                          /* [] */0];
                       }
                     
                    case 1:exit=27;
                    }}
                
               case 1:
                var cstrs1=match[1];
                
                if(typeof match$1==="number")
                 {switch(match$1){case 1:exit=27;}}
                else
                 {switch(match$1[0])
                   {case 0:exit=27;
                    case 1:
                     var cstrs2=match$1[1];
                     
                     var
                      mark=
                       function(cstrs,usage,name,decl)
                        {return List["iter"]
                                 (function(c)
                                   {return Env["mark_constructor_used"]
                                            (usage,env,name,decl,Ident["name"](c[1]));
                                    },
                                  cstrs);
                         };
                     
                     if(decl1[4]===/* Private */0||decl2[4]===/* Public */1)
                      {var usage=/* Positive */0;}
                     else
                      {var usage=/* Privatize */2;}
                     
                     mark(cstrs1,usage,name,decl1);
                     if(equality)
                      {mark(cstrs2,/* Positive */0,Ident["name"](id),decl2)}
                     else
                      {}
                     
                     var err=compare_variants(env,decl1,decl2,1,cstrs1,cstrs2);
                     
                    }}
                
               }}
           
          case 27:var err=[/* :: */0,/* Kind */2,/* [] */0];
          }
        
        if(err!==/* [] */0)
         {return err;}
        else
         {var match$2=decl1[5];
          
          var match$3=decl2[5];
          
          if(match$3)
           {if(match$2)
             {if
               (type_manifest
                 (env,match$2[1],decl1[1],match$3[1],decl2[1],decl2[4]))
               {var err$2=/* [] */0;}
              else
               {var err$2=[/* :: */0,/* Manifest */4,/* [] */0];}
              }
            else
             {var
               ty1=
                Btype["newgenty"]
                 (/* Tconstr */[3,/* Pident */[0,id],decl2[1],[0,/* Mnil */0]]);
              
              if(Ctype["equal"](env,/* true */1,decl1[1],decl2[1]))
               {if
                 (Ctype["equal"]
                   (env,
                    /* false */0,
                    /* :: */[0,ty1,/* [] */0],
                    /* :: */[0,match$3[1],/* [] */0]))
                 {var err$2=/* [] */0;}
                else
                 {var err$2=[/* :: */0,/* Manifest */4,/* [] */0];}
                }
              else
               {var err$2=[/* :: */0,/* Constraint */3,/* [] */0];}
              }
            }
          else
           {if(Ctype["equal"](env,/* true */1,decl1[1],decl2[1]))
             {var err$2=/* [] */0;}
            else
             {var err$2=[/* :: */0,/* Constraint */3,/* [] */0];}
            }
          
          if(err$2!==/* [] */0)
           {return err$2;}
          else
           {var
             abstr=
              decl2[4]===
              /* Private */0||
              decl2[3]===
              /* Type_abstract */0&&
              decl2[5]===
              /* None */0;
            
            var opn=decl2[3]===/* Type_open */1&&decl2[5]===/* None */0;
            
            var
             constrained=
              function(ty){return !Btype["is_Tvar"](Btype["repr"](ty));};
            
            if
             (List["for_all2"]
               (function(ty,param)
                 {var v2=param[2];
                  
                  var v1=param[1];
                  
                  var imp=function(a,b){return !a||b;};
                  
                  var match$4=Types["Variance"][11](v1);
                  
                  var cn1=match$4[2];
                  
                  var co1=match$4[1];
                  
                  var match$5=Types["Variance"][11](v2);
                  
                  var cn2=match$5[2];
                  
                  var co2=match$5[1];
                  
                  var match$6=Types["Variance"][12](v1);
                  
                  var match$7=Types["Variance"][12](v2);
                  
                  return (abstr
                           ?imp(co1,co2)&&imp(cn1,cn2)
                           :opn||constrained(ty)
                             ?CamlPrimitive["caml_equal"](co1,co2)&&
                              CamlPrimitive["caml_equal"](cn1,cn2)
                             :/* true */1)&&
                         imp
                          (abstr,
                           imp(match$7[1],match$6[1])&&
                           imp(match$7[2],match$6[2])&&
                           imp(match$7[3],match$6[3])&&
                           imp(match$7[4],match$6[4]));
                  },
                decl2[1],
                List["combine"](decl1[6],decl2[6])))
             {return /* [] */0;}
            else
             {return [/* :: */0,/* Variance */5,/* [] */0];}
            }
          }
        }
      }
    };

var
 extension_constructors=
  function(env,id,ext1,ext2)
   {if(ext1[5]===/* Private */0||ext2[5]===/* Public */1)
     {var usage=/* Positive */0;}
    else
     {var usage=/* Privatize */2;}
    
    Env["mark_extension_used"](usage,env,ext1,Ident["name"](id));
    var
     ty1=
      Btype["newgenty"](/* Tconstr */[3,ext1[1],ext1[2],[0,/* Mnil */0]]);
    
    var
     ty2=
      Btype["newgenty"](/* Tconstr */[3,ext2[1],ext2[2],[0,/* Mnil */0]]);
    
    if
     (Ctype["equal"]
       (env,/* true */1,/* :: */[0,ty1,ext1[2]],/* :: */[0,ty2,ext2[2]]))
     {if(List["length"](ext1[3])===List["length"](ext2[3]))
       {var match=ext1[4];
        
        var match$1=ext2[4];
        
        var exit;
        
        if(match)
         {if(match$1)
           {if
             (!Ctype["equal"]
               (env,
                /* true */1,
                /* :: */[0,match[1],/* [] */0],
                /* :: */[0,match$1[1],/* [] */0]))
             {var $js=/* false */0;}
            else
             {exit=8;}
            }
          else
           {exit=7;}
          }
        else
         {if(match$1){exit=7;}else{exit=8;}}
        
        var $js$1;
        switch(exit)
         {case 8:
           $js$1=
           Misc["for_all2"]
            (function(ty1,ty2)
              {return Ctype["equal"]
                       (env,
                        /* true */1,
                        /* :: */[0,ty1,ext1[2]],
                        /* :: */[0,ty2,ext2[2]]);
               },
             ext1[3],
             ext2[3]);
           
          case 7:$js$1=/* false */0;
          }
        if($js$1)
         {var match$2=ext1[5];
          
          var match$3=ext2[5];
          
          var exit$1;
          
          if(match$2!==0)
           {exit$1=6;}
          else
           {if(match$3!==0){return /* false */0;}else{exit$1=6;}}
          
          switch(exit$1){case 6:return /* true */1;}
          }
        else
         {return /* false */0;}
        }
      else
       {return /* false */0;}
      }
    else
     {return /* false */0;}
    };

var
 encode_val=
  function(param,rem)
   {return /* :: */[0,
            param[1]!==0
             ?Predef["type_unit"]
             :Btype["newgenvar"](/* None */0,/* () */0),
            /* :: */[0,param[2],rem]];
    };

var
 meths=
  function(meths1,meths2)
   {return Types["Meths"][11]
            (function(nam,t2,param)
              {var ml1=param[1];
               
               var $js;
               try
                {$js=/* :: */[0,Types["Meths"][22](nam,meths1),ml1];}
               catch(exn)
                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                  {$js=ml1;}
                 else
                  {throw exn;}
                 }
               return /* tuple */[0,$js,/* :: */[0,t2,param[2]]];
               },
             meths2,
             [/* tuple */0,/* [] */0,/* [] */0]);
    };

var
 vars=
  function(vars1,vars2)
   {return Types["Vars"][11]
            (function(lab,v2,param)
              {var vl1=param[1];
               
               var $js;
               try
                {$js=encode_val(Types["Vars"][22](lab,vars1),vl1);}
               catch(exn)
                {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                  {$js=vl1;}
                 else
                  {throw exn;}
                 }
               return /* tuple */[0,$js,encode_val(v2,param[2])];
               },
             vars2,
             [/* tuple */0,/* [] */0,/* [] */0]);
    };

module["exports"]=
{"Dont_match":Dont_match,
 "value_descriptions":value_descriptions,
 "type_declarations":type_declarations,
 "extension_constructors":extension_constructors,
 "report_type_mismatch":report_type_mismatch};

