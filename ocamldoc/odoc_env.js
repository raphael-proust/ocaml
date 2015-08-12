// Generated CODE, PLEASE EDIT WITH CARE 

var Odoc_name=require("Odoc_name");
var Printtyp=require("Printtyp");
var List=require("List");
var Btype=require("Btype");
var Predef=require("Predef");
var Printf=require("Printf");
var Misc=require("Misc");
var Path=require("Path");



var
 empty=
  [/* record */0,
   /* [] */0,
   /* [] */0,
   /* [] */0,
   /* [] */0,
   /* [] */0,
   /* [] */0,
   /* [] */0];

var
 add_signature=
  function(env,root,rel,signat)
   {var
     qualify=
      function(id)
       {return Odoc_name["concat"](root,Odoc_name["from_ident"](id));};
    
    var
     rel_name=
      function(id)
       {var n=Odoc_name["from_ident"](id);
        
        if(rel){return Odoc_name["concat"](rel[1],n);}else{return n;}
        };
    
    var
     f=
      function(env,item)
       {switch(item[0])
         {case 0:
           var ident=item[1];
           
           var newrecord=/* unknown */"duprecord regular 7";
           
           newrecord[1]=
           /* :: */[0,/* tuple */[0,rel_name(ident),qualify(ident)],env[1]],
           0;
           return newrecord;
           
          case 1:
           var ident$1=item[1];
           
           var newrecord$1=/* unknown */"duprecord regular 7";
           
           newrecord$1[2]=
           /* :: */[0,
            /* tuple */[0,rel_name(ident$1),qualify(ident$1)],
            env[2]],
           0;
           return newrecord$1;
           
          case 2:
           var ident$2=item[1];
           
           var newrecord$2=/* unknown */"duprecord regular 7";
           
           newrecord$2[7]=
           /* :: */[0,
            /* tuple */[0,rel_name(ident$2),qualify(ident$2)],
            env[7]],
           0;
           return newrecord$2;
           
          case 3:
           var ident$3=item[1];
           
           var match=item[2][1];
           
           switch(match[0])
            {case 1:
              var
               env2=
                add_signature
                 (env,
                  qualify(ident$3),
                  /* Some */[0,rel_name(ident$3)],
                  match[1]);
              
             default:var env2=env;}
           
           var newrecord$3=/* unknown */"duprecord regular 7";
           
           newrecord$3[5]=
           /* :: */[0,
            /* tuple */[0,rel_name(ident$3),qualify(ident$3)],
            env2[5]],
           0;
           return newrecord$3;
           
          case 4:
           var ident$4=item[1];
           
           var match$1=item[2][1];
           
           if(match$1)
            {var modtype=match$1[1];
             
             switch(modtype[0])
              {case 1:
                var
                 env2$1=
                  add_signature
                   (env,
                    qualify(ident$4),
                    /* Some */[0,rel_name(ident$4)],
                    modtype[1]);
                
               default:var env2$1=env;}
             }
           else
            {var env2$1=env;}
           
           var newrecord$4=/* unknown */"duprecord regular 7";
           
           newrecord$4[6]=
           /* :: */[0,
            /* tuple */[0,rel_name(ident$4),qualify(ident$4)],
            env2$1[6]],
           0;
           return newrecord$4;
           
          case 5:
           var ident$5=item[1];
           
           var newrecord$5=/* unknown */"duprecord regular 7";
           
           newrecord$5[4]=
           /* :: */[0,
            /* tuple */[0,rel_name(ident$5),qualify(ident$5)],
            env[4]],
           0;
           return newrecord$5;
           
          case 6:
           var ident$6=item[1];
           
           var newrecord$6=/* unknown */"duprecord regular 7";
           
           newrecord$6[3]=
           /* :: */[0,
            /* tuple */[0,rel_name(ident$6),qualify(ident$6)],
            env[3]],
           0;
           return newrecord$6;
           
          }
        };
    
    return List["fold_left"](f,env,signat);
    };

var
 add_extension=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    var newrecord=/* unknown */"duprecord regular 7";
    
    newrecord[7]=/* :: */[0,/* tuple */[0,simple_name,full_name],env[7]],0;
    return newrecord;
    };

var
 add_type=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    var newrecord=/* unknown */"duprecord regular 7";
    
    newrecord[2]=/* :: */[0,/* tuple */[0,simple_name,full_name],env[2]],0;
    return newrecord;
    };

var
 add_value=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    var newrecord=/* unknown */"duprecord regular 7";
    
    newrecord[1]=/* :: */[0,/* tuple */[0,simple_name,full_name],env[1]],0;
    return newrecord;
    };

var
 add_module=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    var newrecord=/* unknown */"duprecord regular 7";
    
    newrecord[5]=/* :: */[0,/* tuple */[0,simple_name,full_name],env[5]],0;
    return newrecord;
    };

var
 add_module_type=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    var newrecord=/* unknown */"duprecord regular 7";
    
    newrecord[6]=/* :: */[0,/* tuple */[0,simple_name,full_name],env[6]],0;
    return newrecord;
    };

var
 add_class=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    return /* record */[0,
            env[1],
            /* :: */[0,/* tuple */[0,simple_name,full_name],env[2]],
            env[3],
            /* :: */[0,/* tuple */[0,simple_name,full_name],env[4]],
            env[5],
            env[6],
            env[7]];
    };

var
 add_class_type=
  function(env,full_name)
   {var simple_name=Odoc_name["simple"](full_name);
    
    return /* record */[0,
            env[1],
            /* :: */[0,/* tuple */[0,simple_name,full_name],env[2]],
            /* :: */[0,/* tuple */[0,simple_name,full_name],env[3]],
            env[4],
            env[5],
            env[6],
            env[7]];
    };

var
 full_module_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[5]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_module_type_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[6]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_module_or_module_type_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[5]);}
    catch(exn)
     {if(exn=Not_found){return full_module_type_name(env,n);}else{throw exn;}}
    };

var
 full_type_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[2]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_value_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[1]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_extension_constructor_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[7]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_class_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[4]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_class_type_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[3]);}
    catch(exn){if(exn=Not_found){return n;}else{throw exn;}}
    };

var
 full_class_or_class_type_name=
  function(env,n)
   {try
     {return List["assoc"](n,env[4]);}
    catch(exn)
     {if(exn=Not_found){return full_class_type_name(env,n);}else{throw exn;}}
    };

var
 print_env_types=
  function(env)
   {return List["iter"]
            (function(param)
              {return Printf["printf"]
                       ([/* Format */0,
                         [/* String */2,
                          /* No_padding */0,
                          [/* String_literal */11,
                           " = ",
                           [/* String */2,
                            /* No_padding */0,
                            [/* Char_literal */12,10,/* End_of_format */0]]]],
                         "%s = %s\n"],
                        param[1],
                        param[2]);
               },
             env[2]);
    };

var
 subst_type=
  function(env,t)
   {Printtyp["mark_loops"](t);
    var deja_vu=[0,/* [] */0];
    
    var
     iter=
      function(t)
       {if(List["memq"](t,deja_vu[1]))
         {return /* () */0;}
        else
         {deja_vu[1]=/* :: */[0,t,deja_vu[1]],0;
          Btype["iter_type_expr"](iter,t);
          var match=t[1];
          
          var exit;
          
          if(typeof match=="number")
           {switch(match){}}
          else
           {switch(match[0])
             {case 3:
               var l=match[2];
               
               var p=match[1];
               
               var exit$1;
               
               if(l)
                {if(l[2])
                  {exit$1=15;}
                 else
                  {if(Path["same"](p,Predef["path_option"]))
                    {return /* () */0;}
                   else
                    {exit$1=15;}
                   }
                 }
               else
                {exit$1=15;}
               
               switch(exit$1)
                {case 15:
                  var
                   new_p=
                    Odoc_name["to_path"]
                     (full_type_name(env,Odoc_name["from_path"](p)));
                  
                  return t[1]=/* Tconstr */[3,new_p,l,match[3]],0;
                  
                 }
               
              case 4:
               var r=match[2];
               
               var match$1=r[1];
               
               if(match$1)
                {var match$2=match$1[1];
                 
                 var
                  new_p$1=
                   Odoc_name["to_path"]
                    (full_type_name(env,Odoc_name["from_path"](match$2[1])));
                 
                 return r[1]=
                        /* Some */[0,/* tuple */[0,new_p$1,match$2[2]]],
                        0;
                 }
               else
                {exit=14;}
               
              case 8:
               var row=match[1];
               
               var match$3=row[6];
               
               if(match$3)
                {var match$4=match$3[1];
                 
                 var
                  new_p$2=
                   Odoc_name["to_path"]
                    (full_type_name(env,Odoc_name["from_path"](match$4[1])));
                 
                 var newrecord=/* unknown */"duprecord regular 6";
                 
                 return t[1]=
                        /* Tvariant */[8,
                         (newrecord[6]=
                          /* Some */[0,/* tuple */[0,new_p$2,match$4[2]]],
                          0,
                          newrecord)],
                        0;
                 }
               else
                {exit=14;}
               
              case 11:
               var
                new_p$3=
                 Odoc_name["to_path"]
                  (full_module_type_name(env,Odoc_name["from_path"](match[1])));
               
               return t[1]=/* Tpackage */[11,new_p$3,match[2],match[3]],0;
               
              default:exit=14;}}
          
          switch(exit){case 14:return /* () */0;}
          }
        };
    
    iter(t);
    return t;
    };

var
 subst_module_type=
  function(env,t)
   {var
     iter=
      function(t)
       {var exit;
        
        switch(t[0])
         {case 0:
           var
            new_p=
             Odoc_name["to_path"]
              (full_module_type_name(env,Odoc_name["from_path"](t[1])));
           
           return /* Mty_ident */[0,new_p];
           
          case 1:exit=8;
          case 2:
           return /* Mty_functor */[2,
                   t[1],
                   Misc["may_map"](iter,t[2]),
                   iter(t[3])];
           
          case 3:exit=8;
          }
        
        switch(exit){case 8:return t;}
        };
    
    return iter(t);
    };

var
 subst_class_type=
  function(env,t)
   {var
     iter=
      function(t)
       {switch(t[0])
         {case 0:
           var
            new_p=
             Odoc_name["to_path"]
              (full_type_name(env,Odoc_name["from_path"](t[1])));
           
           var new_texp_list=List["map"](subst_type(env),t[2]);
           
           var new_ct=iter(t[3]);
           
           return /* Cty_constr */[0,new_p,new_texp_list,new_ct];
           
          case 1:return t;
          case 2:
           var new_texp=subst_type(env,t[2]);
           
           var new_ct$1=iter(t[3]);
           
           return /* Cty_arrow */[2,t[1],new_texp,new_ct$1];
           
          }
        };
    
    return iter(t);
    };

module["exports"]=
{"empty":empty,
 "add_signature":add_signature,
 "add_extension":add_extension,
 "add_type":add_type,
 "add_value":add_value,
 "add_module":add_module,
 "add_module_type":add_module_type,
 "add_class":add_class,
 "add_class_type":add_class_type,
 "full_module_name":full_module_name,
 "full_module_type_name":full_module_type_name,
 "full_module_or_module_type_name":full_module_or_module_type_name,
 "full_type_name":full_type_name,
 "full_value_name":full_value_name,
 "full_extension_constructor_name":full_extension_constructor_name,
 "full_class_name":full_class_name,
 "full_class_type_name":full_class_type_name,
 "full_class_or_class_type_name":full_class_or_class_type_name,
 "subst_type":subst_type,
 "subst_module_type":subst_module_type,
 "subst_class_type":subst_class_type};

