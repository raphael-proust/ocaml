// Generated CODE, PLEASE EDIT WITH CARE 

var Ctype=require("Ctype");
var Frames=require("Frames");
var Printtyp=require("Printtyp");
var Btype=require("Btype");
var Pervasives=require("Pervasives");
var List=require("List");
var Env=require("Env");
var Predef=require("Predef");
var Format=require("Format");
var Printval=require("Printval");
var Misc=require("Misc");
var Path=require("Path");
var Subst=require("Subst");
var Ident=require("Ident");
var Symtable=require("Symtable");
var Debugcom=require("Debugcom");


var $$Error="unknown primitive:caml_set_oo_id";

var
 abstract_type=
  Btype["newgenty"]
   ([/* Tconstr */3,[/* Pident */0,Ident["create"]("<abstr>")],0,[0,0]]);

var
 path=
  function($$event,param)
   {switch(param)
     {case 0:
       var id=param[1];
       
       if(Ident["global"](id))
        {try
          {return Debugcom["Remote_value"][10]
                   (Symtable["get_global_position"](id));
           }
         catch(exn)
          {if(exn[1]=Symtable["Error"])
            {throw [0,$$Error,[/* Unbound_identifier */0,id]];}
           else
            {throw exn;}
           }
         }
       else
        {if($$event)
          {var ev=$$event[1];
           
           try
            {var pos=Ident["find_same"](id,ev[8][1]);
             
             return Debugcom["Remote_value"][8](ev[9]-pos);
             }
           catch(exn$1)
            {if(exn$1=Not_found)
              {try
                {var pos$1=Ident["find_same"](id,ev[8][2]);
                 
                 return Debugcom["Remote_value"][9](pos$1);
                 }
               catch(exn$2)
                {if(exn$2=Not_found)
                  {throw [0,$$Error,[/* Unbound_identifier */0,id]];}
                 else
                  {throw exn$2;}
                 }
               }
             else
              {throw exn$1;}
             }
           }
         else
          {throw [0,$$Error,[/* Unbound_identifier */0,id]];}
         }
       
      case 1:
       var root=param[1];
       
       var v=path($$event,root);
       
       if(!Debugcom["Remote_value"][2](v))
        {throw [0,$$Error,[/* Not_initialized_yet */1,root]];}
       else
        {}
       
       return Debugcom["Remote_value"][5](v,param[3]);
       
      case 2:return Misc["fatal_error"]("Eval.path: Papply");
      }
    };

var
 expression=
  function($$event,env,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         var exit;
         
         if($$event)
          {var match=$$event[1];
           
           var match$1=match[4];
           
           if("unknown primitive:isint")
            {exit=8;}
           else
            {if(Frames["current_frame"][1]=0)
              {return [/* tuple */0,
                       Debugcom["Remote_value"][11](0),
                       Subst["type_expr"](match[7],match$1[1])];
               }
             else
              {exit=8;}
             }
           }
         else
          {exit=8;}
         
         switch(exit){case 8:throw [0,$$Error,0];}
         
        }}
    else
     {switch(param[0])
       {case 0:
         var lid=param[1];
         
         try
          {var match$2=Env["lookup_value"](lid,env);
           
           var valdesc=match$2[2];
           
           var p=match$2[1];
           
           var match$3=valdesc[2];
           
           var exit$1;
           
           var $js;
           if(typeof match$3=="number")
            {switch(match$3){}}
           else
            {switch(match$3[0])
              {case 1:
                var
                 match$4=
                  Env["lookup_value"]
                   ([/* Lident */0,Pervasives["^"]("self-",match$3[2])],env);
                
                var v=path($$event,match$4[1]);
                
                var i=path($$event,p);
                
                $js=
                Debugcom["Remote_value"][5](v,Debugcom["Remote_value"][1](i));
                
               default:exit$1=6;}}
           
           var $js$1;
           switch(exit$1){case 6:$js$1=path($$event,p);}
           return [/* tuple */0,$js$1,Ctype["correct_levels"](valdesc[1])];
           }
         catch(exn)
          {if(exn=Not_found)
            {throw [0,$$Error,[/* Unbound_long_identifier */2,lid]];}
           else
            {throw exn;}
           }
         
        case 1:
         var n=param[1];
         
         try
          {return Printval["find_named_value"](n);}
         catch(exn$1)
          {if(exn$1=Not_found)
            {throw [0,$$Error,[/* Unknown_name */3,n]];}
           else
            {throw exn$1;}
           }
         
        case 2:
         var n$1=param[2];
         
         var match$5=expression($$event,env,param[1]);
         
         var ty=match$5[2];
         
         var v$1=match$5[1];
         
         var match$6=Ctype["repr"](Ctype["expand_head_opt"](env,ty))[1];
         
         var exit$2;
         
         if(typeof match$6=="number")
          {switch(match$6){}}
         else
          {switch(match$6[0])
            {case 2:
              var ty_list=match$6[1];
              
              if(n$1<1||n$1>List["length"](ty_list))
               {throw [0,
                       $$Error,
                       [/* Tuple_index */4,ty,List["length"](ty_list),n$1]];
                }
              else
               {return [/* tuple */0,
                        Debugcom["Remote_value"][5](v$1,n$1-1),
                        List["nth"](ty_list,n$1-1)];
                }
              
             case 3:
              var match$7=match$6[2];
              
              var path$1=match$6[1];
              
              if(match$7)
               {if(match$7[2])
                 {exit$2=12;}
                else
                 {var ty_arg=match$7[1];
                  
                  if(Path["same"](path$1,Predef["path_array"]))
                   {var size=Debugcom["Remote_value"][4](v$1);
                    
                    if(n$1>=size)
                     {throw [0,$$Error,[/* Array_index */5,size,n$1]];}
                    else
                     {return [/* tuple */0,
                              Debugcom["Remote_value"][5](v$1,n$1),
                              ty_arg];
                      }
                    }
                  else
                   {if(Path["same"](path$1,Predef["path_list"]))
                     {var
                       nth=
                        function(pos,v$2)
                         {if(!Debugcom["Remote_value"][2](v$2))
                           {throw [0,$$Error,[/* List_index */6,pos,n$1]];}
                          else
                           {if(pos=n$1)
                             {return [/* tuple */0,
                                      Debugcom["Remote_value"][5](v$2,0),
                                      ty_arg];
                              }
                            else
                             {return nth(pos+1,Debugcom["Remote_value"][5](v$2,1));}
                            }
                          };
                      
                      return nth(0,v$1);
                      }
                    else
                     {exit$2=12;}
                    }
                  }
                }
              else
               {if(Path["same"](path$1,Predef["path_string"]))
                 {var s=Debugcom["Remote_value"][1](v$1);
                  
                  if(n$1>=s["length"])
                   {throw [0,$$Error,[/* String_index */7,s,s["length"],n$1]];}
                  else
                   {return [/* tuple */0,
                            Debugcom["Remote_value"][7](s[n$1]),
                            Predef["type_char"]];
                    }
                  }
                else
                 {exit$2=12;}
                }
              
             default:exit$2=12;}}
         
         switch(exit$2)
          {case 12:throw [0,$$Error,[/* Wrong_item_type */8,ty,n$1]];}
         
        case 3:
         var match$8=expression($$event,env,param[1]);
         
         var ty$1=match$8[2];
         
         var match$9=Ctype["repr"](Ctype["expand_head_opt"](env,ty$1))[1];
         
         var exit$3;
         
         if(typeof match$9=="number")
          {switch(match$9){}}
         else
          {switch(match$9[0])
            {case 3:
              var path$2=match$9[1];
              
              var tydesc=Env["find_type"](path$2,env);
              
              var match$10=tydesc[3];
              
              var exit$4;
              
              if(typeof match$10=="number")
               {switch(match$10){}}
              else
               {switch(match$10[0])
                 {case 0:
                   var
                    match$11=
                     find_label(param[2],env,ty$1,path$2,tydesc,0,match$10[1]);
                   
                   return [/* tuple */0,
                           Debugcom["Remote_value"][5](match$8[1],match$11[1]),
                           match$11[2]];
                   
                  default:exit$4=15;}}
              
              switch(exit$4)
               {case 15:throw [0,$$Error,[/* Not_a_record */10,ty$1]];}
              
             default:exit$3=17;}}
         
         switch(exit$3)
          {case 17:throw [0,$$Error,[/* Not_a_record */10,ty$1]];}
         
        }}
    };

var
 find_label=
  function(lbl,env,ty,path$1,tydesc,pos,param)
   {if(param)
     {var match=param[1];
      
      if("unknown primitive:caml_string_equal")
       {var ty_res=Btype["newgenty"]([/* Tconstr */3,path$1,tydesc[1],[0,0]]);
        
        try
         {var
           $js=
            Ctype["apply"](env,[/* :: */0,ty_res,0],match[3],[/* :: */0,ty,0]);
          }
        catch(exn)
         {if(exn=Ctype["Cannot_apply"])
           {var $js=abstract_type;}
          else
           {throw exn;}
          }
        return [/* tuple */0,pos,$js];
        }
      else
       {return find_label(lbl,env,ty,path$1,tydesc,pos+1,param[2]);}
      }
    else
     {throw [0,$$Error,[/* Wrong_label */9,ty,lbl]];}
    };

var
 report_error=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "No result available at current program event",
                     [17,0,[17,4,0]]]],
                   "@[No result available at current program event@]@."]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,"Unbound identifier ",[2,0,[17,0,[17,4,0]]]]],
                   "@[Unbound identifier %s@]@."],
                  Ident["name"](param[1]));
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The module path ",
                     [15,
                      [11,
                       " is not yet initialized.",
                       [17,
                        [0,"@ ",1,0],
                        [11,
                         "Please run program forward",
                         [17,
                          [0,"@ ",1,0],
                          [11,
                           "until its initialization code is executed.",
                           [17,0,[17,4,0]]]]]]]]]],
                   "@[The module path %a is not yet initialized.@ Please run program forward@ until its initialization code is executed.@]@."],
                  Printtyp["path"],
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,"Unbound identifier ",[15,[17,0,[17,4,0]]]]],
                   "@[Unbound identifier %a@]@."],
                  Printtyp["longident"],
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,"Unknown value name $",[4,3,0,0,[17,0,[17,4,0]]]]],
                   "@[Unknown value name $%i@]@."],
                  param[1]);
         
        case 4:
         var ty=param[1];
         
         Printtyp["reset_and_mark_loops"](ty);
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Cannot extract field number ",
                     [4,
                      3,
                      0,
                      0,
                      [11,
                       " from a ",
                       [4,
                        3,
                        0,
                        0,
                        [11,"-tuple of type",[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]]]],
                   "@[Cannot extract field number %i from a %i-tuple of type@ %a@]@."],
                  param[3],
                  param[2],
                  Printtyp["type_expr"],
                  ty);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Cannot extract element number ",
                     [4,
                      3,
                      0,
                      0,
                      [11," from an array of length ",[4,3,0,0,[17,0,[17,4,0]]]]]]],
                   "@[Cannot extract element number %i from an array of length %i@]@."],
                  param[2],
                  param[1]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Cannot extract element number ",
                     [4,
                      3,
                      0,
                      0,
                      [11," from a list of length ",[4,3,0,0,[17,0,[17,4,0]]]]]]],
                   "@[Cannot extract element number %i from a list of length %i@]@."],
                  param[2],
                  param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Cannot extract character number ",
                     [4,
                      3,
                      0,
                      0,
                      [17,
                       [0,"@ ",1,0],
                       [11,
                        "from the following string of length ",
                        [4,3,0,0,[12,58,[17,[0,"@ ",1,0],[3,0,[17,0,[17,4,0]]]]]]]]]]],
                   "@[Cannot extract character number %i@ from the following string of length %i:@ %S@]@."],
                  param[3],
                  param[2],
                  param[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "Cannot extract item number ",
                     [4,
                      3,
                      0,
                      0,
                      [11,
                       " from a value of type",
                       [17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]],
                   "@[Cannot extract item number %i from a value of type@ %a@]@."],
                  param[2],
                  Printtyp["type_expr"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The record type",
                     [17,
                      [0,"@ ",1,0],
                      [15,
                       [17,
                        [0,"@ ",1,0],
                        [11,"has no label named ",[2,0,[17,0,[17,4,0]]]]]]]]],
                   "@[The record type@ %a@ has no label named %s@]@."],
                  Printtyp["type_expr"],
                  param[1],
                  param[2]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,
                     "The type",
                     [17,
                      [0,"@ ",1,0],
                      [15,
                       [17,
                        [0,"@ ",1,0],
                        [11,"is not a record type",[17,0,[17,4,0]]]]]]]],
                   "@[The type@ %a@ is not a record type@]@."],
                  Printtyp["type_expr"],
                  param[1]);
         
        }}
    };

module["exports"]=
{"expression":expression,"Error":$$Error,"report_error":report_error};

