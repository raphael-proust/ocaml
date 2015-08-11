// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var $$String=require("String");
var Datarepr=require("Datarepr");
var Printtyp=require("Printtyp");
var List=require("List");
var Btype=require("Btype");
var Env=require("Env");
var Predef=require("Predef");
var Format=require("Format");
var Obj=require("Obj");
var Misc=require("Misc");
var Path=require("Path");
var Oprint=require("Oprint");
var Longident=require("Longident");
var Hashtbl=require("Hashtbl");
var Ident=require("Ident");


var
 Make=
  function(O)
   {return function(EVP)
     {var equal=function(prim,prim$1){return prim=prim$1;};
      
      var
       hash=
        function(x){try {return Hashtbl["hash"](x);}catch(exn){return 0;}};
      
      var ObjTbl=Hashtbl["Make"]([0,equal,hash]);
      
      var
       outval_of_untyped_exception_args=
        function(obj,start_offset)
         {if(O[4](obj)>start_offset)
           {var list=0;
            
            for(var i=start_offset;i<=O[4](obj)-1;i++)
             {var arg=O[5](obj,i);
              
              if(!O[2](arg))
               {list=/* :: */[0,/* Oval_int */[4,O[1](arg)],list];}
              else
               {if(O[3](arg)=Obj["string_tag"])
                 {list=
                  /* :: */[0,
                   /* Oval_string */[11,$$String["escaped"](O[1](arg))],
                   list];
                  }
                else
                 {if(O[3](arg)=Obj["double_tag"])
                   {list=/* :: */[0,/* Oval_float */[3,O[1](arg)],list];}
                  else
                   {list=/* :: */[0,[2,[2,"_"],0],list];}
                  }
                }
              }
            
            return List["rev"](list);
            }
          else
           {return 0;}
          };
      
      var
       outval_of_untyped_exception=
        function(bucket)
         {if(O[3](bucket)!=0)
           {return /* Oval_constr */[2,
                    /* Oide_ident */[2,O[1](O[5](bucket,0))],
                    0];
            }
          else
           {var name=O[1](O[5](O[5](bucket,0),0));
            
            if
             (("unknown primitive:caml_string_equal"||
               "unknown primitive:caml_string_equal"||
               "unknown primitive:caml_string_equal")&&
              (O[4](bucket)=2)&&
              (O[3](O[5](bucket,1))=0))
             {var args=outval_of_untyped_exception_args(O[5](bucket,1),0);}
            else
             {var args=outval_of_untyped_exception_args(bucket,1);}
            
            return /* Oval_constr */[2,/* Oide_ident */[2,name],args];
            }
          };
      
      var
       printers=
        [0,
         /* :: */[0,
          /* tuple */[0,
           /* Pident */[0,Ident["create"]("print_int")],
           /* Simple */[0,
            Predef["type_int"],
            function(x){return /* Oval_int */[4,O[1](x)];}]],
          /* :: */[0,
           /* tuple */[0,
            /* Pident */[0,Ident["create"]("print_float")],
            /* Simple */[0,
             Predef["type_float"],
             function(x){return /* Oval_float */[3,O[1](x)];}]],
           /* :: */[0,
            /* tuple */[0,
             /* Pident */[0,Ident["create"]("print_char")],
             /* Simple */[0,
              Predef["type_char"],
              function(x){return /* Oval_char */[1,O[1](x)];}]],
            /* :: */[0,
             /* tuple */[0,
              /* Pident */[0,Ident["create"]("print_string")],
              /* Simple */[0,
               Predef["type_string"],
               function(x){return /* Oval_string */[11,O[1](x)];}]],
             /* :: */[0,
              /* tuple */[0,
               /* Pident */[0,Ident["create"]("print_int32")],
               /* Simple */[0,
                Predef["type_int32"],
                function(x){return /* Oval_int32 */[5,O[1](x)];}]],
              /* :: */[0,
               /* tuple */[0,
                /* Pident */[0,Ident["create"]("print_nativeint")],
                /* Simple */[0,
                 Predef["type_nativeint"],
                 function(x){return /* Oval_nativeint */[7,O[1](x)];}]],
               /* :: */[0,
                /* tuple */[0,
                 /* Pident */[0,Ident["create"]("print_int64")],
                 /* Simple */[0,
                  Predef["type_int64"],
                  function(x){return /* Oval_int64 */[6,O[1](x)];}]],
                0]]]]]]]];
      
      var
       exn_printer=
        function(ppf,path)
         {return Format["fprintf"]
                  (ppf,
                   [0,
                    [11,"<printer ",[15,[11," raised an exception>",0]]],
                    "<printer %a raised an exception>"],
                   Printtyp["path"],
                   path);
          };
      
      var
       out_exn=
        function(path)
         {return /* Oval_printer */[9,
                  function(ppf){return exn_printer(ppf,path);}];
          };
      
      var
       install_printer=
        function(path,ty,fn)
         {var
           print_val=
            function(ppf,obj)
             {try
               {return fn(ppf,obj);}
              catch(exn){return exn_printer(ppf,path);}
              };
          
          var
           printer=
            function(obj)
             {return /* Oval_printer */[9,
                      function(ppf){return print_val(ppf,obj);}];
              };
          
          return printers[1]=
                 /* :: */[0,
                  /* tuple */[0,path,/* Simple */[0,ty,printer]],
                  printers[1]],
                 0;
          };
      
      var
       install_generic_printer=
        function(function_path,constr_path,fn)
         {return printers[1]=
                 /* :: */[0,
                  /* tuple */[0,function_path,/* Generic */[1,constr_path,fn]],
                  printers[1]],
                 0;
          };
      
      var
       install_generic_printer$prime=
        function(function_path,ty_path,fn)
         {var
           build=
            function(gp,depth)
             {switch(gp)
               {case 0:
                 var fn$1=gp[1];
                 
                 var
                  out_printer=
                   function(obj)
                    {var
                      printer=
                       function(ppf)
                        {try
                          {return fn$1(ppf,obj);}
                         catch(exn){return exn_printer(ppf,function_path);}
                         };
                     
                     return /* Oval_printer */[9,printer];
                     };
                 
                 return /* Zero */[0,out_printer];
                 
                case 1:
                 var fn$2=gp[1];
                 
                 var
                  print_val=
                   function(fn_arg)
                    {var
                      print_arg=
                       function(ppf,o)
                        {return Oprint["out_value"][1](ppf,fn_arg(depth+1,o));};
                     
                     return build(fn$2(print_arg),depth);
                     };
                 
                 return /* Succ */[1,print_val];
                 
                }
              };
          
          return printers[1]=
                 /* :: */[0,
                  /* tuple */[0,
                   function_path,
                   /* Generic */[1,ty_path,build(fn)]],
                  printers[1]],
                 0;
          };
      
      var
       remove_printer=
        function(path)
         {var
           remove=
            function(param)
             {if(param)
               {var rem=param[2];
                
                var printer=param[1];
                
                if(Path["same"](printer[1],path))
                 {return rem;}
                else
                 {return /* :: */[0,printer,remove(rem)];}
                }
              else
               {throw Not_found;}
              };
          
          return printers[1]=remove(printers[1]),0;
          };
      
      var
       tree_of_qualified=
        function(lookup_fun,env,ty_path,name)
         {switch(ty_path)
           {case 0:return /* Oide_ident */[2,name];
            case 1:
             try
              {var match=lookup_fun(/* Lident */[0,name],env)[1];
               
               var exit;
               
               if(typeof match=="number")
                {switch(match){}}
               else
                {switch(match[0])
                  {case 3:var $js=Path["same"](ty_path,match[1]);
                   default:exit=63;}}
               
               switch(exit){case 63:var $js=0;}
               }
             catch(exn){if(exn=Not_found){var $js=0;}else{throw exn;}}
             if($js)
              {return /* Oide_ident */[2,name];}
             else
              {return /* Oide_dot */[1,
                       Printtyp["tree_of_path"](ty_path[1]),
                       name];
               }
             
            case 2:return Printtyp["tree_of_path"](ty_path);
            }
          };
      
      var
       tree_of_constr=
        tree_of_qualified
         (function(lid,env){return Env["lookup_constructor"](lid,env)[2];});
      
      var
       tree_of_label=
        tree_of_qualified
         (function(lid,env){return Env["lookup_label"](lid,env)[2];});
      
      var
       abstract_type=
        Ctype["newty"]
         (/* Tconstr */[3,/* Pident */[0,Ident["create"]("abstract")],0,[0,0]]);
      
      var
       outval_of_value=
        function(max_steps,max_depth,check_depth,env,obj,ty)
         {var printer_steps=[0,max_steps];
          
          var nested_values=ObjTbl[1](8);
          
          var
           nest_gen=
            function(err,f,depth,obj$1,ty$1)
             {if(!O[2](obj$1))
               {return f(depth,obj$1,ty$1);}
              else
               {if(ObjTbl[10](nested_values,obj$1))
                 {return err;}
                else
                 {ObjTbl[5](nested_values,obj$1,0);
                  var ret=f(depth,obj$1,ty$1);
                  
                  ObjTbl[6](nested_values,obj$1);
                  return ret;
                  }
                }
              };
          
          var nest=function(f){return nest_gen([12,"<cycle>"],f);};
          
          var
           tree_of_val=
            function(depth,obj$1,ty$1)
             {printer_steps[0]--;
              if(printer_steps[1]<0||depth<0)
               {return 0;}
              else
               {try
                 {return find_printer(depth,env,ty$1,obj$1);}
                catch(exn)
                 {if(exn=Not_found)
                   {var match=Ctype["repr"](ty$1)[1];
                    
                    var exit;
                    
                    if(typeof match=="number")
                     {switch(match){}}
                    else
                     {switch(match[0])
                       {case 0:exit=29;
                        case 1:return [12,"<fun>"];
                        case 2:
                         return /* Oval_tuple */[13,
                                 tree_of_val_list(0,depth,obj$1,match[1])];
                         
                        case 3:
                         var ty_list=match[2];
                         
                         var path=match[1];
                         
                         var exit$1;
                         
                         if(ty_list)
                          {if(ty_list[2])
                            {exit$1=31;}
                           else
                            {var ty_arg=ty_list[1];
                             
                             if(Path["same"](path,Predef["path_list"]))
                              {if(O[2](obj$1))
                                {var match$1=check_depth(depth,obj$1,ty$1);
                                 
                                 if(match$1)
                                  {return match$1[1];}
                                 else
                                  {var
                                    tree_of_conses=
                                     function(tree_list,depth$1,obj$2,ty_arg$1)
                                      {if(printer_steps[1]<0||depth$1<0)
                                        {return /* :: */[0,0,tree_list];}
                                       else
                                        {if(O[2](obj$2))
                                          {var
                                            tree=
                                             nest(tree_of_val,depth$1-1,O[5](obj$2,0),ty_arg$1);
                                           
                                           var next_obj=O[5](obj$2,1);
                                           
                                           return nest_gen
                                                   (/* :: */[0,[12,"<cycle>"],/* :: */[0,tree,tree_list]],
                                                    tree_of_conses(/* :: */[0,tree,tree_list]),
                                                    depth$1,
                                                    next_obj,
                                                    ty_arg$1);
                                           }
                                         else
                                          {return tree_list;}
                                         }
                                       };
                                   
                                   return /* Oval_list */[8,
                                           List["rev"](tree_of_conses(0,depth,obj$1,ty_arg))];
                                   }
                                 }
                               else
                                {return [8,0];}
                               }
                             else
                              {if(Path["same"](path,Predef["path_array"]))
                                {var length=O[4](obj$1);
                                 
                                 if(length>0)
                                  {var match$2=check_depth(depth,obj$1,ty$1);
                                   
                                   if(match$2)
                                    {return match$2[1];}
                                   else
                                    {var
                                      tree_of_items=
                                       function(tree_list,i)
                                        {if(printer_steps[1]<0||depth<0)
                                          {return /* :: */[0,0,tree_list];}
                                         else
                                          {if(i<length)
                                            {var tree=nest(tree_of_val,depth-1,O[5](obj$1,i),ty_arg);
                                             
                                             return tree_of_items(/* :: */[0,tree,tree_list],i+1);
                                             }
                                           else
                                            {return tree_list;}
                                           }
                                         };
                                     
                                     return /* Oval_array */[0,List["rev"](tree_of_items(0,0))];
                                     }
                                   }
                                 else
                                  {return [0,0];}
                                 }
                               else
                                {if(Path["same"](path,Predef["path_lazy_t"]))
                                  {var obj_tag=O[3](obj$1);
                                   
                                   if(obj_tag=Obj["lazy_tag"])
                                    {return [12,"<lazy>"];}
                                   else
                                    {if(obj_tag=Obj["forward_tag"])
                                      {var forced_obj=O[5](obj$1,0);}
                                     else
                                      {var forced_obj=obj$1;}
                                     
                                     if(obj_tag=Obj["forward_tag"])
                                      {var v=nest(tree_of_val,depth,forced_obj,ty_arg);}
                                     else
                                      {var v=tree_of_val(depth,forced_obj,ty_arg);}
                                     
                                     return /* Oval_constr */[2,[2,"lazy"],/* :: */[0,v,0]];
                                     }
                                   }
                                 else
                                  {exit$1=31;}
                                 }
                               }
                             }
                           }
                         else
                          {exit$1=31;}
                         
                         switch(exit$1)
                          {case 31:
                            try
                             {var decl=Env["find_type"](path,env);
                              
                              var match$3=decl[3];
                              
                              if(typeof match$3=="number")
                               {switch(match$3)
                                 {case 0:
                                   var match$4=decl[5];
                                   
                                   if(match$4)
                                    {try
                                      {var $js=Ctype["apply"](env,decl[1],match$4[1],ty_list);}
                                     catch(exn$1)
                                      {if(exn$1=Ctype["Cannot_apply"])
                                        {var $js=abstract_type;}
                                       else
                                        {throw exn$1;}
                                       }
                                     return tree_of_val(depth,obj$1,$js);
                                     }
                                   else
                                    {return [12,"<abstr>"];}
                                   
                                  case 1:return tree_of_extension(path,depth,obj$1);
                                  }}
                              else
                               {switch(match$3[0])
                                 {case 0:
                                   var match$5=check_depth(depth,obj$1,ty$1);
                                   
                                   if(match$5)
                                    {return match$5[1];}
                                   else
                                    {var
                                      tree_of_fields=
                                       function(pos,param)
                                        {if(param)
                                          {var match$6=param[1];
                                           
                                           try
                                            {var
                                              ty_arg$1=
                                               Ctype["apply"](env,decl[1],match$6[3],ty_list);
                                             }
                                           catch(exn$2)
                                            {if(exn$2=Ctype["Cannot_apply"])
                                              {var ty_arg$1=abstract_type;}
                                             else
                                              {throw exn$2;}
                                             }
                                           
                                           var name=Ident["name"](match$6[1]);
                                           
                                           if(pos=0)
                                            {var lid=tree_of_label(env,path,name);}
                                           else
                                            {var lid=/* Oide_ident */[2,name];}
                                           
                                           var v$1=nest(tree_of_val,depth-1,O[5](obj$1,pos),ty_arg$1);
                                           
                                           return /* :: */[0,
                                                   /* tuple */[0,lid,v$1],
                                                   tree_of_fields(pos+1,param[2])];
                                           }
                                         else
                                          {return 0;}
                                         };
                                     
                                     return /* Oval_record */[10,tree_of_fields(0,match$3[1])];
                                     }
                                   
                                  case 1:
                                   if(O[2](obj$1))
                                    {var tag=/* Cstr_block */[1,O[3](obj$1)];}
                                   else
                                    {var tag=/* Cstr_constant */[0,O[1](obj$1)];}
                                   
                                   var match$6=Datarepr["find_constr_by_tag"](tag,match$3[1]);
                                   
                                   var cd_res=match$6[3];
                                   
                                   if(cd_res)
                                    {var match$7=Ctype["repr"](cd_res[1])[1];
                                     
                                     var exit$2;
                                     
                                     if(typeof match$7=="number")
                                      {switch(match$7){}}
                                     else
                                      {switch(match$7[0])
                                        {case 3:var type_params=match$7[2];default:exit$2=13;}}
                                     
                                     switch(exit$2)
                                      {case 13:
                                        throw [0,
                                               Assert_failure,
                                               [0,"toplevel/genprintval.ml",378,33]];
                                        
                                       }
                                     }
                                   else
                                    {var type_params=decl[1];}
                                   
                                   var
                                    ty_args=
                                     List["map"]
                                      (function(ty$2)
                                        {try
                                          {return Ctype["apply"](env,type_params,ty$2,ty_list);}
                                         catch(exn$2)
                                          {if(exn$2=Ctype["Cannot_apply"])
                                            {return abstract_type;}
                                           else
                                            {throw exn$2;}
                                           }
                                         },
                                       match$6[2]);
                                   
                                   return tree_of_constr_with_args
                                           (tree_of_constr(env,path),
                                            Ident["name"](match$6[1]),
                                            0,
                                            depth,
                                            obj$1,
                                            ty_args);
                                   
                                  }}
                              }
                            catch(exn$2)
                             {if(exn$2=Not_found)
                               {return [12,"<abstr>"];}
                              else
                               {if(exn$2=Datarepr["Constr_not_found"])
                                 {return [12,"<unknown constructor>"];}
                                else
                                 {throw exn$2;}
                                }
                              }
                            
                           }
                         
                        case 4:return [12,"<obj>"];
                        case 7:exit=32;
                        case 8:
                         var row=Btype["row_repr"](match[1]);
                         
                         if(O[2](obj$1))
                          {var tag$1=O[1](O[5](obj$1,0));
                           
                           var
                            find=
                             function(param)
                              {if(param)
                                {var fields=param[2];
                                 
                                 var match$8=param[1];
                                 
                                 var l=match$8[1];
                                 
                                 if(Btype["hash_variant"](l)=tag$1)
                                  {var match$9=Btype["row_field_repr"](match$8[2]);
                                   
                                   var exit$3;
                                   
                                   if(typeof match$9=="number")
                                    {switch(match$9){case 0:exit$3=26;}}
                                   else
                                    {switch(match$9[0])
                                      {case 0:
                                        var match$10=match$9[1];
                                        
                                        if(match$10)
                                         {var ty$2=match$10[1];exit$3=25;}
                                        else
                                         {exit$3=26;}
                                        
                                       case 1:
                                        var match$11=match$9[2];
                                        
                                        if(match$11)
                                         {if(match$11[2])
                                           {exit$3=26;}
                                          else
                                           {var ty$2=match$11[1];exit$3=25;}
                                          }
                                        else
                                         {exit$3=26;}
                                        
                                       }}
                                   
                                   switch(exit$3)
                                    {case 26:return find(fields);
                                     case 25:
                                      var args=nest(tree_of_val,depth-1,O[5](obj$1,1),ty$2);
                                      
                                      return /* Oval_variant */[14,l,/* Some */[0,args]];
                                      
                                     }
                                   }
                                 else
                                  {return find(fields);}
                                 }
                               else
                                {return [12,"<variant>"];}
                               };
                           
                           return find(row[1]);
                           }
                         else
                          {var tag$2=O[1](obj$1);
                           
                           var
                            find$1=
                             function(param)
                              {if(param)
                                {var l=param[1][1];
                                 
                                 if(Btype["hash_variant"](l)=tag$2)
                                  {return /* Oval_variant */[14,l,0];}
                                 else
                                  {return find$1(param[2]);}
                                 }
                               else
                                {return [12,"<variant>"];}
                               };
                           
                           return find$1(row[1]);
                           }
                         
                        case 9:exit=29;
                        case 10:exit=32;
                        case 11:return [12,"<module>"];
                        default:exit=30;}}
                    
                    switch(exit)
                     {case 32:return tree_of_val(depth-1,obj$1,match[1]);
                      case 29:return [12,"<poly>"];
                      case 30:
                       return Misc["fatal_error"]("Printval.outval_of_value");
                      }
                    }
                  else
                   {throw exn;}
                  }
                }
              };
          
          var
           tree_of_val_list=
            function(start,depth,obj$1,ty_list)
             {var
               tree_list=
                function(i,param)
                 {if(param)
                   {var tree=nest(tree_of_val,depth-1,O[5](obj$1,i),param[1]);
                    
                    return /* :: */[0,tree,tree_list(i+1,param[2])];
                    }
                  else
                   {return 0;}
                  };
              
              return tree_list(start,ty_list);
              };
          
          var
           tree_of_constr_with_args=
            function(tree_of_cstr,cstr_name,start,depth,obj$1,ty_args)
             {var lid=tree_of_cstr(cstr_name);
              
              var args=tree_of_val_list(start,depth,obj$1,ty_args);
              
              return /* Oval_constr */[2,lid,args];
              };
          
          var
           tree_of_extension=
            function(type_path,depth,bucket)
             {if(O[3](bucket)!=0)
               {var slot=bucket;}
              else
               {var slot=O[5](bucket,0);}
              
              var name=O[1](O[5](slot,0));
              
              var lid=Longident["parse"](name);
              
              try
               {var cstr=Env["lookup_constructor"](lid,env);
                
                var match=cstr[6];
                
                var exit;
                
                switch(match)
                 {case 0:exit=40;case 1:exit=40;case 2:var path=match[1];}
                
                switch(exit){case 40:throw Not_found;}
                
                if(!EVP[3](slot,EVP[1](env,path))){throw Not_found;}else{}
                
                return tree_of_constr_with_args
                        (function(x){return /* Oide_ident */[2,x];},
                         name,
                         1,
                         depth,
                         bucket,
                         cstr[4]);
                }
              catch(exn)
               {var exit$1;
                
                if(exn=Not_found)
                 {exit$1=38;}
                else
                 {if(exn=EVP[2]){exit$1=38;}else{throw exn;}}
                
                switch(exit$1)
                 {case 38:
                   var match$1=check_depth(depth,bucket,ty);
                   
                   if(match$1)
                    {return match$1[1];}
                   else
                    {if(Path["same"](type_path,Predef["path_exn"]))
                      {return outval_of_untyped_exception(bucket);}
                     else
                      {return [12,"<extension>"];}
                     }
                   
                  }
                }
              };
          
          var
           find_printer=
            function(depth,env$1,ty$1)
             {var
               find=
                function(param)
                 {if(param)
                   {var match=param[1][2];
                    
                    switch(match)
                     {case 0:
                       if(Ctype["moregeneral"](env$1,0,match[1],ty$1))
                        {return match[2];}
                       else
                        {return find(param[2]);}
                       
                      case 1:
                       var path=match[1];
                       
                       var match$1=Ctype["expand_head"](env$1,ty$1)[1];
                       
                       var exit;
                       
                       if(typeof match$1=="number")
                        {switch(match$1){}}
                       else
                        {switch(match$1[0])
                          {case 3:
                            if(Path["same"](match$1[1],path))
                             {try
                               {return apply_generic_printer
                                        (path,match[2](depth),match$1[2]);
                                }
                              catch(exn){return function(obj$1){return out_exn(path);};}
                              }
                            else
                             {exit=47;}
                            
                           default:exit=47;}}
                       
                       switch(exit){case 47:return find(param[2]);}
                       
                      }
                    }
                  else
                   {throw Not_found;}
                  };
              
              return find(printers[1]);
              };
          
          var
           apply_generic_printer=
            function(path,printer,args)
             {var exit;
              
              switch(printer)
               {case 0:
                 if(args)
                  {exit=51;}
                 else
                  {var fn=printer[1];
                   
                   return function(obj$1)
                    {try {return fn(obj$1);}catch(exn){return out_exn(path);}};
                   }
                 
                case 1:
                 if(args)
                  {var arg=args[1];
                   
                   var
                    printer$1=
                     printer[1]
                      (function(depth,obj$1){return tree_of_val(depth,obj$1,arg);});
                   
                   return apply_generic_printer(path,printer$1,args[2]);
                   }
                 else
                  {exit=51;}
                 
                }
              
              switch(exit)
               {case 51:
                 return function(obj$1)
                  {var
                    printer$2=
                     function(ppf)
                      {return Format["fprintf"]
                               (ppf,
                                [0,
                                 [11,
                                  "<internal error: incorrect arity for '",
                                  [15,[11,"'>",0]]],
                                 "<internal error: incorrect arity for '%a'>"],
                                Printtyp["path"],
                                path);
                       };
                   
                   return /* Oval_printer */[9,printer$2];
                   };
                 
                }
              };
          
          return nest(tree_of_val,max_depth,obj,ty);
          };
      
      return [0,
              ObjTbl,
              outval_of_untyped_exception_args,
              outval_of_untyped_exception,
              printers,
              exn_printer,
              out_exn,
              install_printer,
              install_generic_printer,
              install_generic_printer$prime,
              remove_printer,
              tree_of_qualified,
              tree_of_constr,
              tree_of_label,
              abstract_type,
              outval_of_value];
      };
    };

module["exports"]=
{"Make":
 function(funarg)
  {var $$let=Make(funarg);
   
   return function(funarg$1)
    {var $$let$1=$$let(funarg$1);
     
     return [0,
             $$let$1[7],
             $$let$1[8],
             $$let$1[9],
             $$let$1[10],
             $$let$1[3],
             $$let$1[15]];
     };
   }};

