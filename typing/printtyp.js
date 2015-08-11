// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Ctype=require("Ctype");
var Char=require("Char");
var List=require("List");
var Btype=require("Btype");
var Pervasives=require("Pervasives");
var Env=require("Env");
var Predef=require("Predef");
var Clflags=require("Clflags");
var Types=require("Types");
var Format=require("Format");
var Misc=require("Misc");
var Path=require("Path");
var Oprint=require("Oprint");
var Longident=require("Longident");
var Location=require("Location");
var Primitive=require("Primitive");
var Ident=require("Ident");
var Map=require("Map");



var
 longident=
  function(ppf,param)
   {switch(param)
     {case 0:return Format["pp_print_string"](ppf,param[1]);
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,[15,[12,46,[2,0,0]]],"%a.%s"],
                longident,
                param[1],
                param[2]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,[15,[12,40,[15,[12,41,0]]]],"%a(%a)"],
                longident,
                param[1],
                longident,
                param[2]);
       
      }
    };

var unique_names=[0,Ident["empty"]];

var
 ident_name=
  function(id)
   {try
     {return Ident["find_same"](id,unique_names[1]);}
    catch(exn){if(exn=Not_found){return Ident["name"](id);}else{throw exn;}}
    };

var
 add_unique=
  function(id)
   {try
     {return 0;}
    catch(exn)
     {if(exn=Not_found)
       {return unique_names[1]=
               Ident["add"]
                (id,Ident["unique_toplevel_name"](id),unique_names[1]),
               0;
        }
      else
       {throw exn;}
      }
    };

var
 ident=
  function(ppf,id){return Format["pp_print_string"](ppf,ident_name(id));};

var ident_pervasive=Ident["create_persistent"]("Pervasives");

var
 tree_of_path=
  function(param)
   {switch(param)
     {case 0:return /* Oide_ident */[2,ident_name(param[1])];
      case 1:
       var p=param[1];
       
       var exit;
       
       switch(p)
        {case 0:
          if(Ident["same"](p[1],ident_pervasive))
           {return /* Oide_ident */[2,param[2]];}
          else
           {exit=371;}
          
         case 1:exit=371;
         case 2:exit=371;
         }
       
       switch(exit)
        {case 371:return /* Oide_dot */[1,tree_of_path(p),param[2]];}
       
      case 2:
       return /* Oide_apply */[0,
               tree_of_path(param[1]),
               tree_of_path(param[2])];
       
      }
    };

var
 path=
  function(ppf,param)
   {switch(param)
     {case 0:return ident(ppf,param[1]);
      case 1:
       var p=param[1];
       
       var exit;
       
       switch(p)
        {case 0:
          if(Ident["same"](p[1],ident_pervasive))
           {return Format["pp_print_string"](ppf,param[2]);}
          else
           {exit=370;}
          
         case 1:exit=370;
         case 2:exit=370;
         }
       
       switch(exit)
        {case 370:
          path(ppf,p);
          Format["pp_print_char"](ppf,46);
          return Format["pp_print_string"](ppf,param[2]);
          
         }
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,[15,[12,40,[15,[12,41,0]]]],"%a(%a)"],
                path,
                param[1],
                path,
                param[2]);
       
      }
    };

var
 string_of_out_ident=
  function(param)
   {switch(param)
     {case 0:
       return $$String["concat"]
               ("",
                /* :: */[0,
                 string_of_out_ident(param[1]),
                 /* :: */[0,
                  "(",
                  /* :: */[0,string_of_out_ident(param[2]),[0,")",0]]]]);
       
      case 1:
       return $$String["concat"]
               (".",
                /* :: */[0,
                 string_of_out_ident(param[1]),
                 /* :: */[0,param[2],0]]);
       
      case 2:return param[1];
      }
    };

var string_of_path=function(p){return string_of_out_ident(tree_of_path(p));};

var
 tree_of_rec=
  function(param)
   {switch(param[0]){case 0:return 0;case 1:return 1;case 2:return 2;}};

var
 raw_list=
  function(pr,ppf,param)
   {if(param)
     {var l=param[2];
      
      return Format["fprintf"]
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<1>",0],"<1>"]],
                 [12,91,[15,[16,[12,93,[17,0,0]]]]]],
                "@[<1>[%a%t]@]"],
               pr,
               param[1],
               function(ppf$1)
                {return List["iter"]
                         (function(x)
                           {return Format["fprintf"]
                                    (ppf$1,[0,[12,59,[17,[0,"@,",0,0],[15,0]]],";@,%a"],pr,x);
                            },
                          l);
                 });
      }
    else
     {return Format["fprintf"](ppf,[0,[11,"[]",0],"[]"]);}
    };

var
 safe_kind_repr=
  function(v,param)
   {if("unknown primitive:isint")
     {if(param!=0){return "Fabsent";}else{return "Fpresent";}}
    else
     {var match=param[1][1];
      
      if(match)
       {var k=match[1];
        
        if(List["memq"](k,v))
         {return "Fvar loop";}
        else
         {return safe_kind_repr(/* :: */[0,k,v],k);}
        }
      else
       {return "Fvar None";}
      }
    };

var
 safe_commu_repr=
  function(v,param)
   {if("unknown primitive:isint")
     {if(param!=0){return "Cunknown";}else{return "Cok";}}
    else
     {var r=param[1];
      
      if(List["memq"](r,v))
       {return "Clink loop";}
      else
       {return safe_commu_repr(/* :: */[0,r,v],r[1]);}
      }
    };

var
 safe_repr=
  function(v,t)
   {var match=t[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 6:
         var t$1=match[1];
         
         if(!List["memq"](t$1,v))
          {return safe_repr(/* :: */[0,t$1,v],t$1);}
         else
          {exit=365;}
         
        default:exit=365;}}
    
    switch(exit){case 365:return t;}
    };

var
 list_of_memo=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:return 0;}}
    else
     {switch(param[0])
       {case 0:return /* :: */[0,param[2],list_of_memo(param[5])];
        case 1:return list_of_memo(param[1][1]);
        }}
    };

var
 print_name=
  function(ppf,param)
   {if(param)
     {return Format["fprintf"]
              (ppf,[0,[12,34,[2,0,[12,34,0]]],'"%s"'],param[1]);
      }
    else
     {return Format["fprintf"](ppf,[0,[11,"None",0],"None"]);}
    };

var visited=[0,0];

var
 raw_type=
  function(ppf,ty)
   {var ty$1=safe_repr(0,ty);
    
    if(List["memq"](ty$1,visited[1]))
     {return Format["fprintf"]
              (ppf,[0,[11,"{id=",[4,0,0,0,[12,125,0]]],"{id=%d}"],ty$1[3]);
      }
    else
     {visited[1]=/* :: */[0,ty$1,visited[1]],0;
      return Format["fprintf"]
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<1>",0],"<1>"]],
                 [11,
                  "{id=",
                  [4,
                   0,
                   0,
                   0,
                   [11,
                    ";level=",
                    [4,
                     0,
                     0,
                     0,
                     [11,";desc=",[17,[0,"@,",0,0],[15,[12,125,[17,0,0]]]]]]]]]],
                "@[<1>{id=%d;level=%d;desc=@,%a}@]"],
               ty$1[3],
               ty$1[2],
               raw_type_desc,
               ty$1[1]);
      }
    };

var raw_type_list=function(tl){return raw_list(raw_type,tl);};

var
 raw_type_desc=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return Format["fprintf"](ppf,[0,[11,"Tnil",0],"Tnil"]);}}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,[0,[11,"Tvar ",[15,0]],"Tvar %a"],print_name,param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Tarrow(",
                     [2,
                      0,
                      [12,
                       44,
                       [17,
                        [0,"@,",0,0],
                        [15,
                         [12,
                          44,
                          [17,
                           [0,"@,",0,0],
                           [15,[12,44,[17,[0,"@,",0,0],[2,0,[12,41,[17,0,0]]]]]]]]]]]]]],
                   "@[<hov1>Tarrow(%s,@,%a,@,%a,@,%s)@]"],
                  param[1],
                  raw_type,
                  param[2],
                  raw_type,
                  param[3],
                  safe_commu_repr(0,param[4]));
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<1>",0],"<1>"]],
                    [11,"Ttuple",[17,[0,"@,",0,0],[15,[17,0,0]]]]],
                   "@[<1>Ttuple@,%a@]"],
                  raw_type_list,
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Tconstr(",
                     [17,
                      [0,"@,",0,0],
                      [15,
                       [12,
                        44,
                        [17,
                         [0,"@,",0,0],
                         [15,[12,44,[17,[0,"@,",0,0],[15,[12,41,[17,0,0]]]]]]]]]]]],
                   "@[<hov1>Tconstr(@,%a,@,%a,@,%a)@]"],
                  path,
                  param[1],
                  raw_type_list,
                  param[2],
                  raw_list(path),
                  list_of_memo(param[3][1]));
         
        case 4:
         var nm=param[2];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Tobject(",
                     [17,
                      [0,"@,",0,0],
                      [15,
                       [12,
                        44,
                        [17,
                         [0,"@,",0,0],
                         [18,
                          [1,[0,[11,"<1>",0],"<1>"]],
                          [11,"ref",[16,[17,0,[12,41,[17,0,0]]]]]]]]]]]],
                   "@[<hov1>Tobject(@,%a,@,@[<1>ref%t@])@]"],
                  raw_type,
                  param[1],
                  function(ppf$1)
                   {var match=nm[1];
                    
                    if(match)
                     {var match$1=match[1];
                      
                      return Format["fprintf"]
                              (ppf$1,
                               [0,
                                [11,
                                 "(Some(",
                                 [17,
                                  [0,"@,",0,0],
                                  [15,[12,44,[17,[0,"@,",0,0],[15,[11,"))",0]]]]]]],
                                "(Some(@,%a,@,%a))"],
                               path,
                               match$1[1],
                               raw_type_list,
                               match$1[2]);
                      }
                    else
                     {return Format["fprintf"](ppf$1,[0,[11," None",0]," None"]);
                      }
                    });
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Tfield(",
                     [17,
                      [0,"@,",0,0],
                      [2,
                       0,
                       [12,
                        44,
                        [17,
                         [0,"@,",0,0],
                         [2,
                          0,
                          [12,
                           44,
                           [17,
                            [0,"@,",0,0],
                            [15,[12,44,[17,[0,"@;<0 -1>",0,-1],[15,[12,41,[17,0,0]]]]]]]]]]]]]]],
                   "@[<hov1>Tfield(@,%s,@,%s,@,%a,@;<0 -1>%a)@]"],
                  param[1],
                  safe_kind_repr(0,param[2]),
                  raw_type,
                  param[3],
                  raw_type,
                  param[4]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<1>",0],"<1>"]],
                    [11,"Tlink",[17,[0,"@,",0,0],[15,[17,0,0]]]]],
                   "@[<1>Tlink@,%a@]"],
                  raw_type,
                  param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<1>",0],"<1>"]],
                    [11,"Tsubst",[17,[0,"@,",0,0],[15,[17,0,0]]]]],
                   "@[<1>Tsubst@,%a@]"],
                  raw_type,
                  param[1]);
         
        case 8:
         var row=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [12,
                     123,
                     [18,
                      [1,[0,0,""]],
                      [2,
                       0,
                       [17,
                        [0,"@,",0,0],
                        [15,
                         [12,
                          59,
                          [17,
                           0,
                           [17,
                            [0,"@ ",1,0],
                            [18,
                             [1,[0,0,""]],
                             [2,
                              0,
                              [17,
                               [0,"@,",0,0],
                               [15,
                                [12,
                                 59,
                                 [17,
                                  0,
                                  [17,
                                   [0,"@ ",1,0],
                                   [2,
                                    0,
                                    [9,
                                     [12,
                                      59,
                                      [17,
                                       [0,"@ ",1,0],
                                       [2,
                                        0,
                                        [9,
                                         [12,
                                          59,
                                          [17,
                                           [0,"@ ",1,0],
                                           [18,
                                            [1,[0,[11,"<1>",0],"<1>"]],
                                            [2,0,[16,[17,0,[12,125,[17,0,0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]],
                   "@[<hov1>{@[%s@,%a;@]@ @[%s@,%a;@]@ %s%b;@ %s%b;@ @[<1>%s%t@]}@]"],
                  "row_fields=",
                  raw_list
                   (function(ppf$1,param$1)
                     {return Format["fprintf"]
                              (ppf$1,
                               [0,
                                [18,
                                 [1,[0,0,""]],
                                 [2,0,[12,44,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                                "@[%s,@ %a@]"],
                               param$1[1],
                               raw_field,
                               param$1[2]);
                      }),
                  row[1],
                  "row_more=",
                  raw_type,
                  row[2],
                  "row_closed=",
                  row[4],
                  "row_fixed=",
                  row[5],
                  "row_name=",
                  function(ppf$1)
                   {var match=row[6];
                    
                    if(match)
                     {var match$1=match[1];
                      
                      return Format["fprintf"]
                              (ppf$1,
                               [0,
                                [11,
                                 "Some(",
                                 [17,
                                  [0,"@,",0,0],
                                  [15,[12,44,[17,[0,"@,",0,0],[15,[12,41,0]]]]]]],
                                "Some(@,%a,@,%a)"],
                               path,
                               match$1[1],
                               raw_type_list,
                               match$1[2]);
                      }
                    else
                     {return Format["fprintf"](ppf$1,[0,[11,"None",0],"None"]);}
                    });
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"Tunivar ",[15,0]],"Tunivar %a"],
                  print_name,
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Tpoly(",
                     [17,
                      [0,"@,",0,0],
                      [15,[12,44,[17,[0,"@,",0,0],[15,[12,41,[17,0,0]]]]]]]]],
                   "@[<hov1>Tpoly(@,%a,@,%a)@]"],
                  raw_type,
                  param[1],
                  raw_type_list,
                  param[2]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Tpackage(",
                     [17,
                      [0,"@,",0,0],
                      [15,[17,[0,"@,",0,0],[15,[12,41,[17,0,0]]]]]]]],
                   "@[<hov1>Tpackage(@,%a@,%a)@]"],
                  path,
                  param[1],
                  raw_type_list,
                  param[3]);
         
        }}
    };

var
 raw_field=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return Format["fprintf"](ppf,[0,[11,"Rabsent",0],"Rabsent"]);}}
    else
     {switch(param[0])
       {case 0:
         var match=param[1];
         
         if(match)
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [18,
                      [1,[0,[11,"<1>",0],"<1>"]],
                      [11,"Rpresent(Some",[17,[0,"@,",0,0],[15,[12,41,[17,0,0]]]]]],
                     "@[<1>Rpresent(Some@,%a)@]"],
                    raw_type,
                    match[1]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"Rpresent None",0],"Rpresent None"]);
           }
         
        case 1:
         var e=param[4];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov1>",0],"<hov1>"]],
                    [11,
                     "Reither(",
                     [9,
                      [12,
                       44,
                       [17,
                        [0,"@,",0,0],
                        [15,
                         [12,
                          44,
                          [17,
                           [0,"@,",0,0],
                           [9,
                            [12,
                             44,
                             [17,
                              [0,"@,",0,0],
                              [18,
                               [1,[0,[11,"<1>",0],"<1>"]],
                               [11,"ref",[16,[17,0,[12,41,[17,0,0]]]]]]]]]]]]]]]]],
                   "@[<hov1>Reither(%b,@,%a,@,%b,@,@[<1>ref%t@])@]"],
                  param[1],
                  raw_type_list,
                  param[2],
                  param[3],
                  function(ppf$1)
                   {var match$1=e[1];
                    
                    if(match$1)
                     {return Format["fprintf"]
                              (ppf$1,
                               [0,
                                [17,
                                 [0,"@,",0,0],
                                 [18,
                                  [1,[0,[11,"<1>",0],"<1>"]],
                                  [12,40,[15,[12,41,[17,0,0]]]]]],
                                "@,@[<1>(%a)@]"],
                               raw_field,
                               match$1[1]);
                      }
                    else
                     {return Format["fprintf"](ppf$1,[0,[11," None",0]," None"]);
                      }
                    });
         
        }}
    };

var
 raw_type_expr=
  function(ppf,t){visited[1]=0,0;raw_type(ppf,t);return visited[1]=0,0;};

var match=(Btype["print_raw"][1]=raw_type_expr,0);

var
 is_nth=
  function(param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){case 0:exit=357;}}
    else
     {switch(param[0]){case 0:return 1;case 1:exit=357;}}
    
    switch(exit){case 357:return 0;}
    };

var
 compose=
  function(l1,param)
   {if(typeof param=="number")
     {switch(param){case 0:return /* Map */[1,l1];}}
    else
     {switch(param[0])
       {case 0:return /* Nth */[0,List["nth"](l1,param[1])];
        case 1:return /* Map */[1,List["map"](List["nth"](l1),param[1])];
        }}
    };

var
 apply_subst=
  function(s1,tyl)
   {if(typeof s1=="number")
     {switch(s1){case 0:return tyl;}}
    else
     {switch(s1[0])
       {case 0:return /* :: */[0,List["nth"](tyl,s1[1]),0];
        case 1:return List["map"](List["nth"](tyl),s1[1]);
        }}
    };

var printing_env=[0,Env["empty"]];

var printing_depth=[0,0];

var printing_cont=[0,0];

var printing_old=[0,Env["empty"]];

var printing_pers=[0,Types["Concr"][1]];

var include=Path;

var
 compare=
  function(p1,p2)
   {var exit;
    
    switch(p1)
     {case 0:exit=349;
      case 1:
       switch(p2)
        {case 0:exit=349;
         case 1:
          var c=compare(p1[1],p2[1]);
          
          if(c!=0){return c;}else{return $$String["compare"](p1[2],p2[2]);}
          
         case 2:exit=349;
         }
       
      case 2:
       switch(p2)
        {case 0:exit=349;
         case 1:exit=349;
         case 2:
          var c$1=compare(p1[1],p2[1]);
          
          if(c$1!=0){return c$1;}else{return compare(p1[2],p2[2]);}
          
         }
       
      }
    
    switch(exit){case 349:return "unknown primitive:caml_compare";}
    };

var
 Path2=
  [0,
   include[1],
   include[2],
   include[3],
   include[4],
   include[5],
   include[6],
   include[7],
   compare];

var PathMap=Map["Make"]([0,Path2[8]]);

var printing_map=[0,PathMap[1]];

var
 same_type=
  function(t,t$prime){return Btype["repr"](t)=Btype["repr"](t$prime);};

var
 index=
  function(l,x)
   {if(l)
     {if(x=l[1]){return 0;}else{return 1+index(l[2],x);}}
    else
     {throw Not_found;}
    };

var
 uniq=
  function(param)
   {if(param)
     {var l=param[2];return !List["memq"](param[1],l)&&uniq(l);}
    else
     {return 1;}
    };

var
 normalize_type_path=
  function($staropt$star,env,p)
   {if($staropt$star){var cache=$staropt$star[1];}else{var cache=0;}
    
    try
     {var match$1=Env["find_type_expansion"](p,env);
      
      var params=List["map"](Btype["repr"],match$1[1]);
      
      var ty=Btype["repr"](match$1[2]);
      
      var match$2=ty[1];
      
      var exit;
      
      if(typeof match$2=="number")
       {switch(match$2){}}
      else
       {switch(match$2[0])
         {case 3:
           var p1=match$2[1];
           
           var tyl=List["map"](Btype["repr"],match$2[2]);
           
           if
            ((List["length"](params)=List["length"](tyl))&&
             List["for_all2"]
              (function(prim,prim$1){return prim=prim$1;},params,tyl))
            {return normalize_type_path(/* Some */[0,cache],env,p1);}
           else
            {if
              (cache||List["length"](params)<=List["length"](tyl)||!uniq(tyl))
              {return /* tuple */[0,p,0];}
             else
              {var l1=List["map"](index(params),tyl);
               
               var match$3=normalize_type_path(/* Some */[0,cache],env,p1);
               
               return /* tuple */[0,match$3[1],compose(l1,match$3[2])];
               }
             }
           
          default:exit=341;}}
      
      switch(exit)
       {case 341:return /* tuple */[0,p,/* Nth */[0,index(params,ty)]];}
      }
    catch(exn){if(exn=Not_found){return /* tuple */[0,p,0];}else{throw exn;}}
    };

var
 path_size=
  function(param)
   {switch(param)
     {case 0:
       var id=param[1];
       
       var s=Ident["name"](id);
       
       return /* tuple */[0,
               "unknown primitive:caml_string_notequal"&&(s[0]=95)?10:1,
               -Ident["binding_time"](id)];
       
      case 1:
       var match$1=path_size(param[1]);
       
       return /* tuple */[0,1+match$1[1],match$1[2]];
       
      case 2:
       var match$2=path_size(param[1]);
       
       return /* tuple */[0,match$2[1]+path_size(param[2])[1],match$2[2]];
       
      }
    };

var
 same_printing_env=
  function(env)
   {var used_pers=Env["used_persistent"](0);
    
    return Env["same_types"](printing_old[1],env)&&
           Types["Concr"][11](printing_pers[1],used_pers);
    };

var
 set_printing_env=
  function(env)
   {printing_env[1]=Clflags["real_paths"][1]?Env["empty"]:env,0;
    if((printing_env[1]=Env["empty"])||same_printing_env(env))
     {return 0;}
    else
     {printing_old[1]=env,0;
      printing_pers[1]=Env["used_persistent"](0),0;
      printing_map[1]=PathMap[1],0;
      printing_depth[1]=0,0;
      var
       cont=
        Env["iter_types"]
         (function(p,param)
           {var match$1=normalize_type_path([0,1],env,param[1]);
            
            if(match$1[2]=0)
             {var p1=match$1[1];
              
              try
               {var r=PathMap[22](p1,printing_map[1]);
                
                var match$2=r[1];
                
                switch(match$2)
                 {case 0:
                   return r[1]=/* Paths */[0,/* :: */[0,p,match$2[1]]],0;
                  case 1:
                   return r[1]=
                          /* Paths */[0,/* :: */[0,p,/* :: */[0,match$2[1],0]]],
                          0;
                   
                  }
                }
              catch(exn)
               {if(exn=Not_found)
                 {return printing_map[1]=
                         PathMap[4]
                          (p1,[0,/* Paths */[0,/* :: */[0,p,0]]],printing_map[1]),
                         0;
                  }
                else
                 {throw exn;}
                }
              }
            else
             {return 0;}
            },
          env);
      
      return printing_cont[1]=/* :: */[0,cont,0],0;
      }
    };

var
 wrap_printing_env=
  function(env,f)
   {set_printing_env(env);
    return Misc["try_finally"]
            (f,function(param){return set_printing_env(Env["empty"]);});
    };

var
 is_unambiguous=
  function(path$1,env)
   {var l=Env["find_shadowed_types"](path$1,env);
    
    if(l)
     {var rem=l[2];
      
      var p=l[1];
      
      var
       normalize=
        function(p$1){return normalize_type_path([0,1],env,p$1)[1];};
      
      var p$prime=normalize(p);
      
      var id=Ctype["lid_of_path"](0,p);
      
      var
       $js=
        List["for_all"]
         (function(p$1){return Path["same"](normalize(p$1),p$prime);},rem)||
        List["for_all"]
         (function(p$1){return "unknown primitive:caml_equal";},rem)&&
        Path["same"](p,Env["lookup_type"](id,env)[1]);
      }
    else
     {var $js=1;}
    return List["exists"](Path["same"](path$1),l)||$js;
    };

var
 get_best_path=
  function(r)
   {var match$1=r[1];
    
    switch(match$1)
     {case 0:
       var l=match$1[1];
       
       if(l)
        {r[1]=[0,0],0;
         List["iter"]
          (function(p)
            {var match$2=r[1];
             
             var exit;
             
             switch(match$2)
              {case 0:exit=319;
               case 1:
                if("unknown primitive:caml_greaterequal")
                 {return 0;}
                else
                 {exit=319;}
                
               }
             
             switch(exit)
              {case 319:
                if(is_unambiguous(p,printing_env[1]))
                 {return r[1]=/* Best */[1,p],0;}
                else
                 {return 0;}
                
               }
             },
           l);
         return get_best_path(r);
         }
       else
        {throw Not_found;}
       
      case 1:return match$1[1];
      }
    };

var
 best_type_path=
  function(p)
   {if(Clflags["real_paths"][1]||(printing_env[1]=Env["empty"]))
     {return /* tuple */[0,p,0];}
    else
     {var match$1=normalize_type_path(0,printing_env[1],p);
      
      var p$prime=match$1[1];
      
      var
       get_path=
        function(param)
         {return get_best_path(PathMap[22](p$prime,printing_map[1]));};
      
      try
       {var $js=0;}
      catch(exn){if(exn=Not_found){var $js=1;}else{throw exn;}}
      while(printing_cont[1]!=0&&$js)
       {printing_cont[1]=
        List["map"]
         (function(prim){return prim[2];},
          Env["run_iter_cont"](printing_cont[1])),
        0,
        printing_depth[0]++}
      
      try
       {var p$prime$prime=get_path(0);}
      catch(exn$1)
       {if(exn$1=Not_found){var p$prime$prime=p$prime;}else{throw exn$1;}}
      
      return /* tuple */[0,p$prime$prime,match$1[2]];
      }
    };

var names=[0,0];

var name_counter=[0,0];

var named_vars=[0,0];

var
 reset_names=
  function(param){names[1]=0,0;name_counter[1]=0,0;return named_vars[1]=0,0;};

var
 add_named_var=
  function(ty)
   {var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 0:exit=307;case 9:exit=307;default:exit=306;}}
    
    switch(exit)
     {case 307:
       var match$2=match$1[1];
       
       if(match$2)
        {var name=match$2[1];
         
         if(List["mem"](name,named_vars[1]))
          {return 0;}
         else
          {return named_vars[1]=/* :: */[0,name,named_vars[1]],0;}
         }
       else
        {"unknown block:(exit 306)";}
       
      case 306:return 0;
      }
    };

var
 new_name=
  function(param)
   {if(name_counter[1]<26)
     {var name=$$String["make"](1,Char["chr"](97+name_counter[1]));}
    else
     {var
       name=
        Pervasives["^"]
         ($$String["make"](1,Char["chr"](97+name_counter[1]%26)),
          Pervasives["string_of_int"](name_counter[1]/26));
      }
    
    name_counter[0]++;
    if
     (List["mem"](name,named_vars[1])||
      List["exists"]
       (function(param$1){return "unknown primitive:caml_string_equal";},
        names[1]))
     {return new_name(0);}
    else
     {return name;}
    };

var
 name_of_type=
  function(t)
   {try
     {return List["assq"](t,names[1]);}
    catch(exn)
     {if(exn=Not_found)
       {var match$1=t[1];
        
        var exit;
        
        if(typeof match$1=="number")
         {switch(match$1){}}
        else
         {switch(match$1[0])
           {case 0:exit=300;case 9:exit=300;default:exit=299;}}
        
        switch(exit)
         {case 300:
           var match$2=match$1[1];
           
           if(match$2)
            {var name=match$2[1];
             
             var current_name=[0,name];
             
             var i=0;
             
             while
              (List["exists"]
                (function(param)
                  {return "unknown primitive:caml_string_equal";},
                 names[1]))
              {current_name[1]=
               Pervasives["^"](name,Pervasives["string_of_int"](i)),
               0;
               i=i+1;
               }
             
             var name$1=current_name[1];
             }
           else
            {"unknown block:(exit 299)";}
           
          case 299:var name$1=new_name(0);
          }
        
        if("unknown primitive:caml_string_notequal")
         {names[1]=/* :: */[0,/* tuple */[0,t,name$1],names[1]],0}
        else
         {}
        
        return name$1;
        }
      else
       {throw exn;}
      }
    };

var check_name_of_type=function(t){return 0;};

var
 remove_names=
  function(tyl)
   {var tyl$1=List["map"](Btype["repr"],tyl);
    
    return names[1]=
           List["filter"]
            (function(param){return !List["memq"](param[1],tyl$1);},names[1]),
           0;
    };

var
 non_gen_mark=
  function(sch,ty)
   {if(sch&&Btype["is_Tvar"](ty)&&ty[2]!=Btype["generic_level"])
     {return "_";}
    else
     {return "";}
    };

var
 print_name_of_type=
  function(sch,ppf,t)
   {return Format["fprintf"]
            (ppf,
             [0,[12,39,[2,0,[2,0,0]]],"'%s%s"],
             non_gen_mark(sch,t),
             name_of_type(t));
    };

var visited_objects=[0,0];

var aliased=[0,0];

var delayed=[0,0];

var
 add_delayed=
  function(t)
   {if(!List["memq"](t,delayed[1]))
     {return delayed[1]=/* :: */[0,t,delayed[1]],0;}
    else
     {return 0;}
    };

var
 is_aliased=
  function(ty){return List["memq"](Btype["proxy"](ty),aliased[1]);};

var
 add_alias=
  function(ty)
   {var px=Btype["proxy"](ty);
    
    if(!is_aliased(px))
     {aliased[1]=/* :: */[0,px,aliased[1]],0;return add_named_var(px);}
    else
     {return 0;}
    };

var
 aliasable=
  function(ty)
   {var match$1=ty[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:exit=281;
        case 3:return !is_nth(best_type_path(match$1[1])[2]);
        case 9:exit=281;
        case 10:exit=281;
        default:exit=282;}}
    
    switch(exit){case 282:return 1;case 281:return 0;}
    };

var
 namable_row=
  function(row)
   {return row[6]!=
           0&&
           List["for_all"]
            (function(param)
              {var match$1=Btype["row_field_repr"](param[2]);
               
               var exit;
               
               if(typeof match$1=="number")
                {switch(match$1){case 0:exit=279;}}
               else
                {switch(match$1[0])
                  {case 0:exit=279;
                   case 1:
                    var l=match$1[2];
                    
                    return row[4]&&(match$1[1]?l=0:List["length"](l)=1);
                    
                   }}
               
               switch(exit){case 279:return 1;}
               },
             row[1]);
    };

var
 mark_loops_rec=
  function(visited$1,ty)
   {var ty$1=Btype["repr"](ty);
    
    var px=Btype["proxy"](ty$1);
    
    if(List["memq"](px,visited$1)&&aliasable(ty$1))
     {return add_alias(px);}
    else
     {var visited$2=/* :: */[0,px,visited$1];
      
      var match$1=ty$1[1];
      
      var exit;
      
      if(typeof match$1=="number")
       {switch(match$1){case 0:return 0;}}
      else
       {switch(match$1[0])
         {case 0:exit=275;
          case 1:
           mark_loops_rec(visited$2,match$1[2]);
           return mark_loops_rec(visited$2,match$1[3]);
           
          case 2:return List["iter"](mark_loops_rec(visited$2),match$1[1]);
          case 3:
           var match$2=best_type_path(match$1[1]);
           
           return List["iter"]
                   (mark_loops_rec(visited$2),
                    apply_subst(match$2[2],match$1[2]));
           
          case 4:
           if(List["memq"](px,visited_objects[1]))
            {return add_alias(px);}
           else
            {if(Ctype["opened_object"](ty$1))
              {visited_objects[1]=/* :: */[0,px,visited_objects[1]],0}
             else
              {}
             
             var match$3=match$1[2][1];
             
             if(match$3)
              {return List["iter"]
                       (mark_loops_rec(visited$2),List["tl"](match$3[1][2]));
               }
             else
              {var match$4=Ctype["flatten_fields"](match$1[1]);
               
               return List["iter"]
                       (function(param)
                         {if(Btype["field_kind_repr"](param[2])=0)
                           {return mark_loops_rec(visited$2,param[3]);}
                          else
                           {return 0;}
                          },
                        match$4[1]);
               }
             }
           
          case 5:
           var ty2=match$1[4];
           
           if(Btype["field_kind_repr"](match$1[2])=0)
            {mark_loops_rec(visited$2,match$1[3]);
             return mark_loops_rec(visited$2,ty2);
             }
           else
            {return mark_loops_rec(visited$2,ty2);}
           
          case 6:return Misc["fatal_error"]("Printtyp.mark_loops_rec (2)");
          case 7:return mark_loops_rec(visited$2,match$1[1]);
          case 8:
           if(List["memq"](px,visited_objects[1]))
            {return add_alias(px);}
           else
            {var row=Btype["row_repr"](match$1[1]);
             
             if(!Btype["static_row"](row))
              {visited_objects[1]=/* :: */[0,px,visited_objects[1]],0}
             else
              {}
             
             var match$5=row[6];
             
             var exit$1;
             
             if(match$5)
              {if(namable_row(row))
                {return List["iter"](mark_loops_rec(visited$2),match$5[1][2]);
                 }
               else
                {exit$1=272;}
               }
             else
              {exit$1=272;}
             
             switch(exit$1)
              {case 272:
                return Btype["iter_row"](mark_loops_rec(visited$2),row);
               }
             }
           
          case 9:exit=275;
          case 10:
           List["iter"](function(t){return add_alias(t);},match$1[2]);
           return mark_loops_rec(visited$2,match$1[1]);
           
          case 11:return List["iter"](mark_loops_rec(visited$2),match$1[3]);
          }}
      
      switch(exit){case 275:return add_named_var(ty$1);}
      }
    };

var
 mark_loops=
  function(ty)
   {Ctype["normalize_type"](Env["empty"],ty);return mark_loops_rec(0,ty);};

var
 reset_loop_marks=
  function(param)
   {visited_objects[1]=0,0;aliased[1]=0,0;return delayed[1]=0,0;};

var
 reset=
  function(param)
   {unique_names[1]=Ident["empty"],0;
    reset_names(0);
    return reset_loop_marks(0);
    };

var reset_and_mark_loops=function(ty){reset(0);return mark_loops(ty);};

var
 reset_and_mark_loops_list=
  function(tyl){reset(0);return List["iter"](mark_loops,tyl);};

var print_labels=[0,1];

var
 print_label=
  function(ppf,l)
   {if
     (print_labels[1]&&
      "unknown primitive:caml_string_notequal"||
      Btype["is_optional"](l))
     {return Format["fprintf"](ppf,[0,[2,0,[12,58,0]],"%s:"],l);}
    else
     {return 0;}
    };

var
 tree_of_typexp=
  function(sch,ty)
   {var ty$1=Btype["repr"](ty);
    
    var px=Btype["proxy"](ty$1);
    
    if(List["mem_assq"](px,names[1])&&!List["memq"](px,delayed[1]))
     {var mark=is_non_gen(sch,ty$1);
      
      return /* Otyp_var */[10,mark,name_of_type(px)];
      }
    else
     {var
       pr_typ=
        function(param)
         {var match$1=ty$1[1];
          
          var exit;
          
          if(typeof match$1=="number")
           {switch(match$1){case 0:exit=241;}}
          else
           {switch(match$1[0])
             {case 0:
               return /* Otyp_var */[10,
                       is_non_gen(sch,ty$1),
                       name_of_type(ty$1)];
               
              case 1:
               var
                pr_arrow=
                 function(l,ty1,ty2)
                  {if
                    (print_labels[1]&&
                     "unknown primitive:caml_string_notequal"||
                     Btype["is_optional"](l))
                    {var lab=l;}
                   else
                    {var lab="";}
                   
                   if(Btype["is_optional"](l))
                    {var match$2=Btype["repr"](ty1)[1];
                     
                     var exit$1;
                     
                     if(typeof match$2=="number")
                      {switch(match$2){}}
                     else
                      {switch(match$2[0])
                        {case 3:
                          var match$3=match$2[2];
                          
                          if(match$3)
                           {if(match$3[2])
                             {exit$1=214;}
                            else
                             {if(Path["same"](match$2[1],Predef["path_option"]))
                               {var t1=tree_of_typexp(sch,match$3[1]);}
                              else
                               {exit$1=214;}
                              }
                            }
                          else
                           {exit$1=214;}
                          
                         default:exit$1=214;}}
                     
                     switch(exit$1){case 214:var t1=[7,"<hidden>"];}
                     }
                   else
                    {var t1=tree_of_typexp(sch,ty1);}
                   
                   return /* Otyp_arrow */[1,lab,t1,tree_of_typexp(sch,ty2)];
                   };
               
               return pr_arrow(match$1[1],match$1[2],match$1[3]);
               
              case 2:
               return /* Otyp_tuple */[9,tree_of_typlist(sch,match$1[1])];
              case 3:
               var match$2=best_type_path(match$1[1]);
               
               var s=match$2[2];
               
               var tyl$prime=apply_subst(s,match$1[2]);
               
               if(is_nth(s))
                {return tree_of_typexp(sch,List["hd"](tyl$prime));}
               else
                {return /* Otyp_constr */[3,
                         tree_of_path(match$2[1]),
                         tree_of_typlist(sch,tyl$prime)];
                 }
               
              case 4:return tree_of_typobject(sch,match$1[1],match$1[2][1]);
              case 5:exit=241;
              case 6:return Misc["fatal_error"]("Printtyp.tree_of_typexp");
              case 7:return tree_of_typexp(sch,match$1[1]);
              case 8:
               var row=Btype["row_repr"](match$1[1]);
               
               if(row[4])
                {var
                  fields=
                   List["filter"]
                    (function(param$1)
                      {return Btype["row_field_repr"](param$1[2])!=0;},
                     row[1]);
                 }
               else
                {var fields=row[1];}
               
               var
                present=
                 List["filter"]
                  (function(param$1)
                    {var match$3=Btype["row_field_repr"](param$1[2]);
                     
                     var exit$1;
                     
                     if(typeof match$3=="number")
                      {switch(match$3){case 0:exit$1=232;}}
                     else
                      {switch(match$3[0]){case 0:return 1;case 1:exit$1=232;}}
                     
                     switch(exit$1){case 232:return 0;}
                     },
                   fields);
               
               var all_present=List["length"](present)=List["length"](fields);
               
               var match$3=row[6];
               
               var exit$1;
               
               if(match$3)
                {var match$4=match$3[1];
                 
                 var tyl=match$4[2];
                 
                 var p=match$4[1];
                 
                 if(namable_row(row))
                  {var match$5=best_type_path(p);
                   
                   var s$1=match$5[2];
                   
                   var id=tree_of_path(match$5[1]);
                   
                   var args=tree_of_typlist(sch,apply_subst(s$1,tyl));
                   
                   if(row[4]&&all_present)
                    {if(is_nth(s$1))
                      {return List["hd"](args);}
                     else
                      {return /* Otyp_constr */[3,id,args];}
                     }
                   else
                    {var non_gen=is_non_gen(sch,px);
                     
                     if(all_present)
                      {var tags=0;}
                     else
                      {var
                        tags=
                         /* Some */[0,
                          List["map"](function(prim){return prim[1];},present)];
                       }
                     
                     var exit$2;
                     
                     if(args)
                      {var match$6=args[1];
                       
                       if(typeof match$6=="number")
                        {switch(match$6){}}
                       else
                        {switch(match$6[0])
                          {case 3:
                            if(args[2])
                             {exit$2=220;}
                            else
                             {if(is_nth(s$1))
                               {var inh=/* Ovar_name */[1,match$6[1],match$6[2]];}
                              else
                               {exit$2=220;}
                              }
                            
                           default:exit$2=220;}}
                       }
                     else
                      {exit$2=220;}
                     
                     switch(exit$2)
                      {case 220:
                        var
                         inh=
                          /* Ovar_name */[1,tree_of_path(p),tree_of_typlist(sch,tyl)];
                        
                       }
                     
                     return /* Otyp_variant */[11,non_gen,inh,row[4],tags];
                     }
                   }
                 else
                  {exit$1=230;}
                 }
               else
                {exit$1=230;}
               
               switch(exit$1)
                {case 230:
                  var non_gen$1=!(row[4]&&all_present)&&is_non_gen(sch,px);
                  
                  var fields$1=List["map"](tree_of_row_field(sch),fields);
                  
                  if(all_present)
                   {var tags$1=0;}
                  else
                   {var
                     tags$1=
                      /* Some */[0,
                       List["map"](function(prim){return prim[1];},present)];
                    }
                  
                  return /* Otyp_variant */[11,
                          non_gen$1,
                          /* Ovar_fields */[0,fields$1],
                          row[4],
                          tags$1];
                  
                 }
               
              case 9:return /* Otyp_var */[10,0,name_of_type(ty$1)];
              case 10:
               var tyl$1=match$1[2];
               
               var ty$2=match$1[1];
               
               if(tyl$1)
                {var tyl$2=List["map"](Btype["repr"],tyl$1);
                 
                 if(tyl$2=0)
                  {return tree_of_typexp(sch,ty$2);}
                 else
                  {var old_delayed=delayed[1];
                   
                   List["iter"](add_delayed,tyl$2);
                   var tl=List["map"](name_of_type,tyl$2);
                   
                   var tr=/* Otyp_poly */[12,tl,tree_of_typexp(sch,ty$2)];
                   
                   remove_names(tyl$2);
                   delayed[1]=old_delayed,0;
                   return tr;
                   }
                 }
               else
                {return tree_of_typexp(sch,ty$2);}
               
              case 11:
               var
                n=
                 List["map"]
                  (function(li)
                    {return $$String["concat"](".",Longident["flatten"](li));},
                   match$1[2]);
               
               return /* Otyp_module */[13,
                       Path["name"](0,match$1[1]),
                       n,
                       tree_of_typlist(sch,match$1[3])];
               
              }}
          
          switch(exit){case 241:return tree_of_typobject(sch,ty$1,0);}
          };
      
      if(List["memq"](px,delayed[1]))
       {delayed[1]=
        List["filter"]
         (function(prim,prim$1){return prim!=prim$1;}(px),delayed[1]),
        0}
      else
       {}
      
      if(is_aliased(px)&&aliasable(ty$1))
       {check_name_of_type(px);
        return /* Otyp_alias */[0,pr_typ(0),name_of_type(px)];
        }
      else
       {return pr_typ(0);}
      }
    };

var
 tree_of_row_field=
  function(sch,param)
   {var l=param[1];
    
    var match$1=Btype["row_field_repr"](param[2]);
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){case 0:return /* tuple */[0,l,0,0];}}
    else
     {switch(match$1[0])
       {case 0:
         var match$2=match$1[1];
         
         if(match$2)
          {return /* tuple */[0,
                   l,
                   0,
                   /* :: */[0,tree_of_typexp(sch,match$2[1]),0]];
           }
         else
          {exit=247;}
         
        case 1:
         var c=match$1[1];
         
         var exit$1;
         
         if(c!=0){if(match$1[2]){exit$1=248;}else{exit=247;}}else{exit$1=248;}
         
         switch(exit$1)
          {case 248:
            var tyl=match$1[2];
            
            if(c)
             {return /* tuple */[0,l,1,tree_of_typlist(sch,tyl)];}
            else
             {return /* tuple */[0,l,0,tree_of_typlist(sch,tyl)];}
            
           }
         
        }}
    
    switch(exit){case 247:return /* tuple */[0,l,0,0];}
    };

var
 tree_of_typlist=
  function(sch,tyl){return List["map"](tree_of_typexp(sch),tyl);};

var
 tree_of_typobject=
  function(sch,fi,nm)
   {if(nm)
     {var match$1=nm[1];
      
      var match$2=match$1[2];
      
      if(match$2)
       {var non_gen=is_non_gen(sch,Btype["repr"](match$2[1]));
        
        var args=tree_of_typlist(sch,match$2[2]);
        
        var match$3=best_type_path(match$1[1]);
        
        if(match$3[2]=0)
         {}
        else
         {throw [0,Assert_failure,[0,"typing/printtyp.ml",688,6]];}
        
        return /* Otyp_class */[2,non_gen,tree_of_path(match$3[1]),args];
        }
      else
       {return Misc["fatal_error"]("Printtyp.tree_of_typobject");}
      }
    else
     {var
       pr_fields=
        function(fi$1)
         {var match$4=Ctype["flatten_fields"](fi$1);
          
          var
           present_fields=
            List["fold_right"]
             (function(param,l)
               {var match$5=Btype["field_kind_repr"](param[2]);
                
                var exit;
                
                if("unknown primitive:isint")
                 {if(match$5!=0)
                   {exit=251;}
                  else
                   {return /* :: */[0,/* tuple */[0,param[1],param[3]],l];}
                  }
                else
                 {exit=251;}
                
                switch(exit){case 251:return l;}
                },
              match$4[1],
              0);
          
          var
           sorted_fields=
            List["sort"]
             (function(param,param$1)
               {return "unknown primitive:caml_string_compare";},
              present_fields);
          
          return tree_of_typfields(sch,match$4[2],sorted_fields);
          };
      
      var match$4=pr_fields(fi);
      
      return /* Otyp_object */[5,match$4[1],match$4[2]];
      }
    };

var
 is_non_gen=
  function(sch,ty)
   {return sch&&Btype["is_Tvar"](ty)&&ty[2]!=Btype["generic_level"];};

var
 tree_of_typfields=
  function(sch,rest,param)
   {if(param)
     {var match$1=param[1];
      
      var field=/* tuple */[0,match$1[1],tree_of_typexp(sch,match$1[2])];
      
      var match$2=tree_of_typfields(sch,rest,param[2]);
      
      return /* tuple */[0,/* :: */[0,field,match$2[1]],match$2[2]];
      }
    else
     {var match$3=rest[1];
      
      var exit;
      
      if(typeof match$3=="number")
       {switch(match$3){case 0:var rest$1=0;}}
      else
       {switch(match$3[0])
         {case 0:exit=259;
          case 3:var rest$1=[0,0];
          case 9:exit=259;
          default:var rest$1=Misc["fatal_error"]("typfields (1)");}}
      
      switch(exit){case 259:var rest$1=/* Some */[0,is_non_gen(sch,rest)];}
      
      return /* tuple */[0,0,rest$1];
      }
    };

var
 typexp=
  function(sch,prio,ppf,ty)
   {return Oprint["out_type"][1](ppf,tree_of_typexp(sch,ty));};

var type_expr=function(ppf,ty){return typexp(0,0,ppf,ty);};

var type_sch=function(ppf,ty){return typexp(1,0,ppf,ty);};

var
 type_scheme=
  function(ppf,ty){reset_and_mark_loops(ty);return typexp(1,0,ppf,ty);};

var
 type_scheme_max=
  function($staropt$star,ppf,ty)
   {if($staropt$star)
     {var b_reset_names=$staropt$star[1];}
    else
     {var b_reset_names=1;}
    
    if(b_reset_names){reset_names(0)}else{}
    
    return typexp(1,0,ppf,ty);
    };

var
 tree_of_type_scheme=
  function(ty){reset_and_mark_loops(ty);return tree_of_typexp(1,ty);};

var
 tree_of_constraints=
  function(params)
   {return List["fold_right"]
            (function(ty,list)
              {var ty$prime=Ctype["unalias"](ty);
               
               if(Btype["proxy"](ty)!=Btype["proxy"](ty$prime))
                {var tr=tree_of_typexp(1,ty);
                 
                 return /* :: */[0,
                         /* tuple */[0,tr,tree_of_typexp(1,ty$prime)],
                         list];
                 }
               else
                {return list;}
               },
             params,
             0);
    };

var
 filter_params=
  function(tyl)
   {var
     params=
      List["fold_left"]
       (function(tyl$1,ty)
         {var ty$1=Btype["repr"](ty);
          
          if(List["memq"](ty$1,tyl$1))
           {return /* :: */[0,Btype["newgenty"](/* Tsubst */[7,ty$1]),tyl$1];}
          else
           {return /* :: */[0,ty$1,tyl$1];}
          },
        0,
        tyl);
    
    return List["rev"](params);
    };

var
 string_of_mutable=
  function(param){if(param!=0){return "mutable ";}else{return "";}};

var
 tree_of_type_decl=
  function(id,decl)
   {reset(0);
    var params=filter_params(decl[1]);
    
    var match$1=decl[5];
    
    if(match$1)
     {var vars=Ctype["free_variables"](0,match$1[1]);
      
      List["iter"]
       (function(ty)
         {var match$2=ty[1];
          
          var exit;
          
          if(typeof match$2=="number")
           {switch(match$2){}}
          else
           {switch(match$2[0])
             {case 0:
               var match$3=match$2[1];
               
               if(match$3)
                {switch(match$3[1])
                  {case "_":
                    if(List["memq"](ty,vars))
                     {return ty[1]=[0,0],0;}
                    else
                     {return 0;}
                    
                   default:exit=193;}
                 }
               else
                {exit=193;}
               
              default:exit=193;}}
          
          switch(exit){case 193:return 0;}
          },
        params)}
    else
     {}
    
    List["iter"](add_alias,params);
    List["iter"](mark_loops,params);
    List["iter"](check_name_of_type,List["map"](Btype["proxy"],params));
    var match$2=decl[5];
    
    if(match$2)
     {var ty=match$2[1];
      
      var match$3=Btype["repr"](ty);
      
      var match$4=match$3[1];
      
      var exit;
      
      if(typeof match$4=="number")
       {switch(match$4){}}
      else
       {switch(match$4[0])
         {case 8:
           var row=Btype["row_repr"](match$4[1]);
           
           var match$5=row[6];
           
           var exit$1;
           
           if(match$5)
            {var match$6=match$5[1][1];
             
             switch(match$6)
              {case 0:
                if(Ident["same"](id,match$6[1]))
                 {var newrecord="unknown primitive:duprecord regular 6";
                  
                  var
                   ty$1=
                    Btype["newgenty"]
                     (/* Tvariant */[8,(newrecord[6]=0,0,newrecord)]);
                  }
                else
                 {exit$1=188;}
                
               case 1:exit$1=188;
               case 2:exit$1=188;
               }
             }
           else
            {exit$1=188;}
           
           switch(exit$1){case 188:var ty$1=ty;}
           
          default:exit=190;}}
      
      switch(exit){case 190:var ty$1=ty;}
      
      mark_loops(ty$1);
      var ty_manifest=/* Some */[0,ty$1];
      }
    else
     {var ty_manifest=0;}
    
    var match$7=decl[3];
    
    var exit$2;
    
    if(typeof match$7=="number")
     {switch(match$7){case 0:exit$2=187;case 1:exit$2=187;}}
    else
     {switch(match$7[0])
       {case 0:List["iter"](function(l){return mark_loops(l[3]);},match$7[1]);
        case 1:
         List["iter"]
          (function(c)
            {List["iter"](mark_loops,c[2]);
             return Misc["may"](mark_loops,c[3]);
             },
           match$7[1])
        }}
    
    switch(exit$2){case 187:}
    
    var
     type_param=
      function(param)
       {var exit$3;
        
        if(typeof param=="number")
         {switch(param){}}
        else
         {switch(param[0]){case 10:return param[2];default:exit$3=185;}}
        
        switch(exit$3){case 185:return "?";}
        };
    
    var
     type_defined=
      function(decl$1)
       {var match$8=decl$1[3];
        
        if(typeof match$8=="number")
         {switch(match$8)
           {case 0:var abstr=(decl$1[5]=0)||(decl$1[4]=0);
            case 1:var abstr=decl$1[5]=0;
            }}
        else
         {switch(match$8[0])
           {case 0:var abstr=decl$1[4]=0;
            case 1:
             var
              abstr=
               (decl$1[4]=0)||
               List["exists"](function(cd){return cd[3]!=0;},match$8[1]);
             
            }}
        
        var
         vari=
          List["map2"]
           (function(ty$2,v)
             {if(abstr||!Btype["is_Tvar"](Btype["repr"](ty$2)))
               {return Types["Variance"][11](v);}
              else
               {return [0,1,1];}
              },
            decl$1[1],
            decl$1[6]);
        
        return /* tuple */[0,
                Ident["name"](id),
                List["map2"]
                 (function(ty$2,cocn)
                   {return /* tuple */[0,
                            type_param(tree_of_typexp(0,ty$2)),
                            cocn];
                    },
                  params,
                  vari)];
        };
    
    var
     tree_of_manifest=
      function(ty1)
       {if(ty_manifest)
         {return /* Otyp_manifest */[4,tree_of_typexp(0,ty_manifest[1]),ty1];}
        else
         {return ty1;}
        };
    
    var match$8=type_defined(decl);
    
    var constraints=tree_of_constraints(params);
    
    var match$9=decl[3];
    
    if(typeof match$9=="number")
     {switch(match$9)
       {case 0:
         if(ty_manifest)
          {var
            match$10=
             /* tuple */[0,tree_of_typexp(0,ty_manifest[1]),decl[4]];
           }
         else
          {var match$10=[0,0,1];}
         
        case 1:var match$10=/* tuple */[0,tree_of_manifest(1),1];
        }}
    else
     {switch(match$9[0])
       {case 0:
         var
          match$10=
           /* tuple */[0,
            tree_of_manifest
             (/* Otyp_record */[6,List["map"](tree_of_label,match$9[1])]),
            decl[4]];
         
        case 1:
         var
          match$10=
           /* tuple */[0,
            tree_of_manifest
             (/* Otyp_sum */[8,List["map"](tree_of_constructor,match$9[1])]),
            decl[4]];
         
        }}
    
    return /* record */[0,
            match$8[1],
            match$8[2],
            match$10[1],
            match$10[2],
            constraints];
    };

var
 tree_of_constructor=
  function(cd)
   {var name=Ident["name"](cd[1]);
    
    var match$1=cd[3];
    
    if(match$1)
     {var nm=names[1];
      
      names[1]=0,0;
      var ret=tree_of_typexp(0,match$1[1]);
      
      var args=tree_of_typlist(0,cd[2]);
      
      names[1]=nm,0;
      return /* tuple */[0,name,args,/* Some */[0,ret]];
      }
    else
     {return /* tuple */[0,name,tree_of_typlist(0,cd[2]),0];}
    };

var
 tree_of_label=
  function(l)
   {return /* tuple */[0,Ident["name"](l[1]),l[2]=1,tree_of_typexp(0,l[3])];};

var
 tree_of_type_declaration=
  function(id,decl,rs)
   {return /* Osig_type */[5,tree_of_type_decl(id,decl),tree_of_rec(rs)];};

var
 type_declaration=
  function(id,ppf,decl)
   {return Oprint["out_sig_item"][1](ppf,tree_of_type_declaration(id,decl,1));
    };

var
 tree_of_extension_constructor=
  function(id,ext,es)
   {reset(0);
    var ty_name=Path["name"](0,ext[1]);
    
    var ty_params=filter_params(ext[2]);
    
    List["iter"](add_alias,ty_params);
    List["iter"](mark_loops,ty_params);
    List["iter"](check_name_of_type,List["map"](Btype["proxy"],ty_params));
    List["iter"](mark_loops,ext[3]);
    Misc["may"](mark_loops,ext[4]);
    var
     type_param=
      function(param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){}}
        else
         {switch(param[0]){case 10:return param[2];default:exit=171;}}
        
        switch(exit){case 171:return "?";}
        };
    
    var
     ty_params$1=
      List["map"]
       (function(ty){return type_param(tree_of_typexp(0,ty));},ty_params);
    
    var name=Ident["name"](id);
    
    var match$1=ext[4];
    
    if(match$1)
     {var nm=names[1];
      
      names[1]=0,0;
      var ret=tree_of_typexp(0,match$1[1]);
      
      var args=tree_of_typlist(0,ext[3]);
      
      names[1]=nm,0;
      var match$2=/* tuple */[0,args,/* Some */[0,ret]];
      }
    else
     {var match$2=/* tuple */[0,tree_of_typlist(0,ext[3]),0];}
    
    var
     ext$1=
      /* record */[0,name,ty_name,ty_params$1,match$2[1],match$2[2],ext[5]];
    
    switch(es[0]){case 0:var es$1=0;case 1:var es$1=1;case 2:var es$1=2;}
    
    return /* Osig_typext */[2,ext$1,es$1];
    };

var
 extension_constructor=
  function(id,ppf,ext)
   {return Oprint["out_sig_item"][1]
            (ppf,tree_of_extension_constructor(id,ext,0));
    };

var
 tree_of_value_description=
  function(id,decl)
   {var id$1=Ident["name"](id);
    
    var ty=tree_of_type_scheme(decl[1]);
    
    var match$1=decl[2];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 0:var prims=Primitive["description_list"](match$1[1]);
        default:exit=157;}}
    
    switch(exit){case 157:var prims=0;}
    
    return /* Osig_value */[6,id$1,ty,prims];
    };

var
 value_description=
  function(id,ppf,decl)
   {return Oprint["out_sig_item"][1](ppf,tree_of_value_description(id,decl));};

var
 class_var=
  function(sch,ppf,l,param)
   {return Format["fprintf"]
            (ppf,
             [0,
              [17,
               [0,"@ ",1,0],
               [18,
                [1,[0,[11,"<2>",0],"<2>"]],
                [11,
                 "val ",
                 [2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
              "@ @[<2>val %s%s :@ %a@]"],
             string_of_mutable(param[1]),
             l,
             typexp(sch,0),
             param[2]);
    };

var
 method_type=
  function(param)
   {var match$1=Btype["field_kind_repr"](param[2]);
    
    var match$2=Btype["repr"](param[3]);
    
    var exit;
    
    if("unknown primitive:isint")
     {if(match$1!=0)
       {exit=153;}
      else
       {var match$3=match$2[1];
        
        if(typeof match$3=="number")
         {switch(match$3){}}
        else
         {switch(match$3[0])
           {case 10:return /* tuple */[0,match$3[1],match$3[2]];
            default:exit=153;}}
        }
      }
    else
     {exit=153;}
    
    switch(exit){case 153:return /* tuple */[0,match$2,0];}
    };

var
 tree_of_metho=
  function(sch,concrete,csil,param)
   {var lab=param[1];
    
    if("unknown primitive:caml_string_notequal")
     {var kind=Btype["field_kind_repr"](param[2]);
      
      var priv=kind!=0;
      
      var virt=!Types["Concr"][3](lab,concrete);
      
      var match$1=method_type(/* tuple */[0,lab,kind,param[3]]);
      
      var tty=tree_of_typexp(sch,match$1[1]);
      
      remove_names(match$1[2]);
      return /* :: */[0,/* Ocsg_method */[1,lab,priv,virt,tty],csil];
      }
    else
     {return csil;}
    };

var
 prepare_class_type=
  function(params,param)
   {switch(param)
     {case 0:
       var cty=param[3];
       
       var tyl=param[2];
       
       var sty=Ctype["self_type"](cty);
       
       if
        (List["memq"](Btype["proxy"](sty),visited_objects[1])||
         !List["for_all"](Btype["is_Tvar"],params)||
         List["exists"](Ctype["deep_occur"](sty),tyl))
        {return prepare_class_type(params,cty);}
       else
        {return List["iter"](mark_loops,tyl);}
       
      case 1:
       var sign=param[1];
       
       var sty$1=Btype["repr"](sign[1]);
       
       var px=Btype["proxy"](sty$1);
       
       if(List["memq"](px,visited_objects[1]))
        {add_alias(sty$1)}
       else
        {visited_objects[1]=/* :: */[0,px,visited_objects[1]],0}
       
       var match$1=Ctype["flatten_fields"](Ctype["object_fields"](sign[1]));
       
       List["iter"]
        (function(met){return mark_loops(method_type(met)[1]);},match$1[1]);
       return Types["Vars"][10]
               (function(param$1,param$2){return mark_loops(param$2[3]);},
                sign[2]);
       
      case 2:mark_loops(param[2]);return prepare_class_type(params,param[3]);
      }
    };

var
 tree_of_class_type=
  function(sch,params,param)
   {switch(param)
     {case 0:
       var cty=param[3];
       
       var sty=Ctype["self_type"](cty);
       
       if
        (List["memq"](Btype["proxy"](sty),visited_objects[1])||
         !List["for_all"](Btype["is_Tvar"],params))
        {return tree_of_class_type(sch,params,cty);}
       else
        {return /* Octy_constr */[0,
                 tree_of_path(param[1]),
                 tree_of_typlist(1,param[2])];
         }
       
      case 1:
       var sign=param[1];
       
       var sty$1=Btype["repr"](sign[1]);
       
       if(is_aliased(sty$1))
        {var
          self_ty=
           /* Some */[0,
            /* Otyp_var */[10,0,name_of_type(Btype["proxy"](sty$1))]];
         }
       else
        {var self_ty=0;}
       
       var match$1=Ctype["flatten_fields"](Ctype["object_fields"](sign[1]));
       
       var csil=0;
       
       var
        csil$1=
         List["fold_left"]
          (function(csil$2,param$1)
            {return /* :: */[0,
                     /* Ocsg_constraint */[0,param$1[1],param$1[2]],
                     csil$2];
             },
           csil,
           tree_of_constraints(params));
       
       var
        all_vars=
         Types["Vars"][11]
          (function(l,param$1,all)
            {return /* :: */[0,
                     /* tuple */[0,l,param$1[1],param$1[2],param$1[3]],
                     all];
             },
           sign[2],
           0);
       
       var all_vars$1=List["rev"](all_vars);
       
       var
        csil$2=
         List["fold_left"]
          (function(csil$3,param$1)
            {return /* :: */[0,
                     /* Ocsg_value */[2,
                      param$1[1],
                      param$1[2]=1,
                      param$1[3]=0,
                      tree_of_typexp(sch,param$1[4])],
                     csil$3];
             },
           csil$1,
           all_vars$1);
       
       var
        csil$3=
         List["fold_left"](tree_of_metho(sch,sign[3]),csil$2,match$1[1]);
       
       return /* Octy_signature */[2,self_ty,List["rev"](csil$3)];
       
      case 2:
       var ty=param[2];
       
       var l=param[1];
       
       if
        (print_labels[1]&&
         "unknown primitive:caml_string_notequal"||
         Btype["is_optional"](l))
        {var lab=l;}
       else
        {var lab="";}
       
       if(Btype["is_optional"](l))
        {var match$2=Btype["repr"](ty)[1];
         
         var exit;
         
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 3:
              var match$3=match$2[2];
              
              if(match$3)
               {if(match$3[2])
                 {exit=140;}
                else
                 {if(Path["same"](match$2[1],Predef["path_option"]))
                   {var ty$1=match$3[1];}
                  else
                   {exit=140;}
                  }
                }
              else
               {exit=140;}
              
             default:exit=140;}}
         
         switch(exit)
          {case 140:
            var
             ty$1=
              Ctype["newconstr"]
               (/* Pident */[0,Ident["create"]("<hidden>")],0);
            
           }
         }
       else
        {var ty$1=ty;}
       
       var tr=tree_of_typexp(sch,ty$1);
       
       return /* Octy_arrow */[1,
               lab,
               tr,
               tree_of_class_type(sch,params,param[3])];
       
      }
    };

var
 class_type=
  function(ppf,cty)
   {reset(0);
    prepare_class_type(0,cty);
    return Oprint["out_class_type"][1](ppf,tree_of_class_type(0,0,cty));
    };

var
 tree_of_class_param=
  function(param,variance)
   {var match$1=tree_of_typexp(1,param);
    
    var exit;
    
    var $js;
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 10:$js=match$1[2];default:exit=126;}}
    
    var $js$1;
    switch(exit){case 126:$js$1="?";}
    return /* tuple */[0,
            $js$1,
            Btype["is_Tvar"](Btype["repr"](param))?[0,1,1]:variance];
    };

var
 tree_of_class_params=
  function(params)
   {var tyl=tree_of_typlist(1,params);
    
    return List["map"]
            (function(param)
              {var exit;
               
               if(typeof param=="number")
                {switch(param){}}
               else
                {switch(param[0]){case 10:return param[2];default:exit=123;}}
               
               switch(exit){case 123:return "?";}
               },
             tyl);
    };

var
 class_variance=
  List["map"]
   (function(v)
     {return /* tuple */[0,
              Types["Variance"][9](0,v),
              Types["Variance"][9](1,v)];
      });

var
 tree_of_class_declaration=
  function(id,cl,rs)
   {var params=filter_params(cl[1]);
    
    reset(0);
    List["iter"](add_alias,params);
    prepare_class_type(params,cl[2]);
    var sty=Ctype["self_type"](cl[2]);
    
    List["iter"](mark_loops,params);
    List["iter"](check_name_of_type,List["map"](Btype["proxy"],params));
    if(is_aliased(sty)){check_name_of_type(Btype["proxy"](sty))}else{}
    
    var vir_flag=cl[4]=0;
    
    return /* Osig_class */[0,
            vir_flag,
            Ident["name"](id),
            List["map2"](tree_of_class_param,params,class_variance(cl[5])),
            tree_of_class_type(1,params,cl[2]),
            tree_of_rec(rs)];
    };

var
 class_declaration=
  function(id,ppf,cl)
   {return Oprint["out_sig_item"][1](ppf,tree_of_class_declaration(id,cl,1));};

var
 tree_of_cltype_declaration=
  function(id,cl,rs)
   {var params=List["map"](Btype["repr"],cl[1]);
    
    reset(0);
    List["iter"](add_alias,params);
    prepare_class_type(params,cl[2]);
    var sty=Ctype["self_type"](cl[2]);
    
    List["iter"](mark_loops,params);
    List["iter"](check_name_of_type,List["map"](Btype["proxy"],params));
    if(is_aliased(sty)){check_name_of_type(Btype["proxy"](sty))}else{}
    
    var sign=Ctype["signature_of_class_type"](cl[2]);
    
    var match$1=Ctype["flatten_fields"](Ctype["object_fields"](sign[1]));
    
    var
     virt=
      List["exists"]
       (function(param)
         {var lab=param[1];
          
          return !("unknown primitive:caml_string_equal"||
                  Types["Concr"][3](lab,sign[3]));
          },
        match$1[1])||
      Types["Vars"][11]
       (function(param,param$1,b){return (param$1[2]=0)||b;},sign[2],0);
    
    return /* Osig_class_type */[1,
            virt,
            Ident["name"](id),
            List["map2"](tree_of_class_param,params,class_variance(cl[4])),
            tree_of_class_type(1,params,cl[2]),
            tree_of_rec(rs)];
    };

var
 cltype_declaration=
  function(id,ppf,cl)
   {return Oprint["out_sig_item"][1](ppf,tree_of_cltype_declaration(id,cl,1));
    };

var
 wrap_env=
  function(fenv,ftree,arg)
   {var env=printing_env[1];
    
    set_printing_env(fenv(env));
    var tree=ftree(arg);
    
    set_printing_env(env);
    return tree;
    };

var
 filter_rem_sig=
  function(item,rem)
   {var exit;
    
    switch(item)
     {case 5:
       if(rem)
        {var match$1=rem[2];
         
         if(match$1)
          {var match$2=match$1[2];
           
           if(match$2)
            {return /* tuple */[0,
                     /* :: */[0,
                      rem[1],
                      /* :: */[0,match$1[1],/* :: */[0,match$2[1],0]]],
                     match$2[2]];
             }
           else
            {exit=105;}
           }
         else
          {exit=105;}
         }
       else
        {exit=105;}
       
      case 6:
       if(rem)
        {var match$3=rem[2];
         
         if(match$3)
          {return /* tuple */[0,
                   /* :: */[0,rem[1],/* :: */[0,match$3[1],0]],
                   match$3[2]];
           }
         else
          {exit=105;}
         }
       else
        {exit=105;}
       
      default:exit=105;}
    
    switch(exit){case 105:return /* tuple */[0,0,rem];}
    };

var dummy=/* record */[0,0,0,0,1,0,0,0,Location["none"],0];

var
 hide_rec_items=
  function(param)
   {var exit;
    
    if(param)
     {var match$1=param[1];
      
      switch(match$1)
       {case 1:
         if((match$1[3]=1)&&!Clflags["real_paths"][1])
          {var
            get_ids=
             function(param$1)
              {var exit$1;
               
               if(param$1)
                {var match$2=param$1[1];
                 
                 switch(match$2)
                  {case 1:
                    if(match$2[3]>=2)
                     {return /* :: */[0,match$2[1],get_ids(param$1[2])];}
                    else
                     {exit$1=101;}
                    
                   default:exit$1=101;}
                 }
               else
                {exit$1=101;}
               
               switch(exit$1){case 101:return 0;}
               };
           
           var ids=/* :: */[0,match$1[1],get_ids(param[2])];
           
           return set_printing_env
                   (List["fold_right"]
                     (function(id)
                       {return Env["add_type"](0,Ident["rename"](id),dummy);},
                      ids,
                      printing_env[1]));
           }
         else
          {exit=102;}
         
        default:exit=102;}
      }
    else
     {exit=102;}
    
    switch(exit){case 102:return 0;}
    };

var
 tree_of_modtype=
  function(param)
   {switch(param)
     {case 0:return /* Omty_ident */[1,tree_of_path(param[1])];
      case 1:return /* Omty_signature */[2,tree_of_signature(param[1])];
      case 2:
       var ty_res=param[3];
       
       var ty_arg=param[2];
       
       var param$1=param[1];
       
       if(ty_arg)
        {var
          res=
           wrap_env
            (Env["add_module"]([0,1],param$1,ty_arg[1]),
             tree_of_modtype,
             ty_res);
         }
       else
        {var res=tree_of_modtype(ty_res);}
       
       return /* Omty_functor */[0,
               Ident["name"](param$1),
               Misc["may_map"](tree_of_modtype,ty_arg),
               res];
       
      case 3:return /* Omty_alias */[3,tree_of_path(param[1])];
      }
    };

var
 tree_of_signature=
  function(sg)
   {return wrap_env
            (function(env){return env;},
             tree_of_signature_rec(printing_env[1],0),
             sg);
    };

var
 tree_of_signature_rec=
  function(env$prime,in_type_group,param)
   {if(param)
     {var item=param[1];
      
      var exit;
      
      if(in_type_group!=0)
       {switch(item)
         {case 1:if(item[3]>=2){var in_type_group$1=1;}else{exit=96;}
          default:exit=95;}
        }
      else
       {exit=96;}
      
      switch(exit)
       {case 96:
         switch(item)
          {case 1:
            if(item[3]>=2)
             {"unknown block:(exit 95)";}
            else
             {set_printing_env(env$prime);var in_type_group$1=1;}
            
           default:"unknown block:(exit 95)";}
         
        case 95:set_printing_env(env$prime);var in_type_group$1=0;
        }
      
      var match$1=filter_rem_sig(item,param[2]);
      
      var rem=match$1[2];
      
      switch(item)
       {case 0:
         var trees=/* :: */[0,tree_of_value_description(item[1],item[2]),0];
        case 1:
         var id=item[1];
         
         if(Btype["is_row_name"](Ident["name"](id)))
          {var trees=0;}
         else
          {hide_rec_items(/* :: */[0,item,rem]);
           var
            trees=
             /* :: */[0,
              /* Osig_type */[5,
               tree_of_type_decl(id,item[2]),
               tree_of_rec(item[3])],
              0];
           }
         
        case 2:
         var
          trees=
           /* :: */[0,
            tree_of_extension_constructor(item[1],item[2],item[3]),
            0];
         
        case 3:
         var
          trees=
           /* :: */[0,
            /* Osig_module */[4,
             Ident["name"](item[1]),
             tree_of_modtype(item[2][1]),
             tree_of_rec(item[3])],
            0];
         
        case 4:
         var trees=/* :: */[0,tree_of_modtype_declaration(item[1],item[2]),0];
        case 5:
         var
          trees=
           /* :: */[0,tree_of_class_declaration(item[1],item[2],item[3]),0];
         
        case 6:
         var
          trees=
           /* :: */[0,tree_of_cltype_declaration(item[1],item[2],item[3]),0];
         
        }
      
      var
       env$prime$1=
        Env["add_signature"](/* :: */[0,item,match$1[1]],env$prime);
      
      return Pervasives["@"]
              (trees,tree_of_signature_rec(env$prime$1,in_type_group$1,rem));
      }
    else
     {return 0;}
    };

var
 tree_of_modtype_declaration=
  function(id,decl)
   {var match$1=decl[1];
    
    if(match$1){var mty=tree_of_modtype(match$1[1]);}else{var mty=0;}
    
    return /* Osig_modtype */[3,Ident["name"](id),mty];
    };

var
 tree_of_module=
  function(id,mty,rs)
   {return /* Osig_module */[4,
            Ident["name"](id),
            tree_of_modtype(mty),
            tree_of_rec(rs)];
    };

var
 modtype=
  function(ppf,mty)
   {return Oprint["out_module_type"][1](ppf,tree_of_modtype(mty));};

var
 modtype_declaration=
  function(id,ppf,decl)
   {return Oprint["out_sig_item"][1](ppf,tree_of_modtype_declaration(id,decl));
    };

var
 print_signature=
  function(ppf,tree)
   {return Format["fprintf"]
            (ppf,
             [0,[18,[1,[0,[11,"<v>",0],"<v>"]],[15,[17,0,0]]],"@[<v>%a@]"],
             Oprint["out_signature"][1],
             tree);
    };

var
 signature=
  function(ppf,sg)
   {return Format["fprintf"]
            (ppf,[0,[15,0],"%a"],print_signature,tree_of_signature(sg));
    };

var
 same_path=
  function(t,t$prime)
   {var t$1=Btype["repr"](t);
    
    var t$prime$1=Btype["repr"](t$prime);
    
    var match$1=t$1[1];
    
    var match$2=t$prime$1[1];
    
    var exit;
    
    var $js;
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 3:
              var match$3=best_type_path(match$1[1]);
              
              var s1=match$3[2];
              
              var match$4=best_type_path(match$2[1]);
              
              var s2=match$4[2];
              
              var exit$1;
              
              if(typeof s1=="number")
               {switch(s1){case 0:exit$1=78;}}
              else
               {switch(s1[0])
                 {case 0:
                   if(typeof s2=="number")
                    {switch(s2){case 0:exit$1=77;}}
                   else
                    {switch(s2[0])
                      {case 0:if(s1[1]=s2[1]){$js=1;}else{exit$1=77;}
                       case 1:exit$1=77;
                       }}
                   
                  case 1:exit$1=78;
                  }}
              
              switch(exit$1)
               {case 78:
                 var exit$2;
                 
                 if(typeof s2=="number")
                  {switch(s2){case 0:exit$2=79;}}
                 else
                  {switch(s2[0])
                    {case 0:"unknown block:(exit 77)";case 1:exit$2=79;}}
                 
                 switch(exit$2)
                  {case 79:
                    if(Path["same"](match$3[1],match$4[1]))
                     {var tl=apply_subst(s1,match$1[2]);
                      
                      var tl$prime=apply_subst(s2,match$2[2]);
                      
                      $js=
                      (List["length"](tl)=List["length"](tl$prime))&&
                      List["for_all2"](same_type,tl,tl$prime);
                      }
                    else
                     {"unknown block:(exit 77)";}
                    
                   }
                 
                case 77:$js=0;
                }
              
             default:exit=82;}}
         
        default:exit=82;}}
    
    var $js$1;
    switch(exit){case 82:$js$1=0;}
    return (t$1=t$prime$1)||$js$1;
    };

var
 type_expansion=
  function(t,ppf,t$prime)
   {if(same_path(t,t$prime))
     {return type_expr(ppf,t);}
    else
     {if(Btype["proxy"](t)=Btype["proxy"](t$prime))
       {var t$prime$1=Ctype["unalias"](t$prime);}
      else
       {var t$prime$1=t$prime;}
      
      return Format["fprintf"]
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<2>",0],"<2>"]],
                 [15,
                  [17,[0,"@ ",1,0],[12,61,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                "@[<2>%a@ =@ %a@]"],
               type_expr,
               t,
               type_expr,
               t$prime$1);
      }
    };

var
 type_path_expansion=
  function(tp,ppf,tp$prime)
   {if(Path["same"](tp,tp$prime))
     {return path(ppf,tp);}
    else
     {return Format["fprintf"]
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<2>",0],"<2>"]],
                 [15,
                  [17,[0,"@ ",1,0],[12,61,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                "@[<2>%a@ =@ %a@]"],
               path,
               tp,
               path,
               tp$prime);
      }
    };

var
 trace=
  function(fst,txt,ppf,param)
   {var exit;
    
    if(param)
     {var match$1=param[2];
      
      if(match$1)
       {var match$2=match$1[1];
        
        var match$3=param[1];
        
        if(!fst){Format["fprintf"](ppf,[0,[17,[0,"@,",0,0],0],"@,"])}else{}
        
        return Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,0,""]],
                   [11,
                    "Type",
                    [17,
                     [0,"@;<1 2>",1,2],
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [2,0,[17,[0,"@;<1 2>",1,2],[15,[17,0,[12,32,[15,0]]]]]]]]]]],
                  "@[Type@;<1 2>%a@ %s@;<1 2>%a@] %a"],
                 type_expansion(match$3[1]),
                 match$3[2],
                 txt,
                 type_expansion(match$2[1]),
                 match$2[2],
                 trace(0,txt),
                 match$1[2]);
        }
      else
       {exit=71;}
      }
    else
     {exit=71;}
    
    switch(exit){case 71:return 0;}
    };

var
 filter_trace=
  function(keep_last,param)
   {var exit;
    
    if(param)
     {var match$1=param[2];
      
      if(match$1)
       {var rem=match$1[2];
        
        var match$2=match$1[1];
        
        var t2$prime=match$2[2];
        
        var t2=match$2[1];
        
        var match$3=param[1];
        
        var t1$prime=match$3[2];
        
        var t1=match$3[1];
        
        var exit$1;
        
        if(rem)
         {exit$1=70;}
        else
         {if(Btype["is_Tvar"](t1$prime)||Btype["is_Tvar"](t2$prime))
           {return 0;}
          else
           {exit$1=70;}
          }
        
        switch(exit$1)
         {case 70:
           var rem$prime=filter_trace(keep_last,rem);
           
           if
            (Btype["is_constr_row"](t1$prime)||
             Btype["is_constr_row"](t2$prime)||
             same_path(t1,t1$prime)&&
             same_path(t2,t2$prime)&&
             !(keep_last&&(rem$prime=0)))
            {return rem$prime;}
           else
            {return /* :: */[0,
                     /* tuple */[0,t1,t1$prime],
                     /* :: */[0,/* tuple */[0,t2,t2$prime],rem$prime]];
             }
           
          }
        }
      else
       {exit=69;}
      }
    else
     {exit=69;}
    
    switch(exit){case 69:return 0;}
    };

var
 type_path_list=
  function(ppf,param)
   {if(param)
     {var rem=param[2];
      
      var match$1=param[1];
      
      var tp$prime=match$1[2];
      
      var tp=match$1[1];
      
      if(rem)
       {return Format["fprintf"]
                (ppf,
                 [0,[15,[17,[0,"@;<2 0>",2,0],[15,0]]],"%a@;<2 0>%a"],
                 type_path_expansion(tp),
                 tp$prime,
                 type_path_list,
                 rem);
        }
      else
       {return type_path_expansion(tp,ppf,tp$prime);}
      }
    else
     {return 0;}
    };

var
 hide_variant_name=
  function(t)
   {var t$1=Btype["repr"](t);
    
    var match$1=t$1[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 8:
         var row=match$1[1];
         
         if(Btype["row_repr"](row)[6]!=0)
          {var init=Btype["row_repr"](row);
           
           return Btype["newty2"]
                   (t$1[2],
                    /* Tvariant */[8,
                     /* record */[0,
                      init[1],
                      Ctype["newvar2"](0,Btype["row_more"](row)[2]),
                      init[3],
                      init[4],
                      init[5],
                      0]]);
           }
         else
          {exit=65;}
         
        default:exit=65;}}
    
    switch(exit){case 65:return t;}
    };

var
 prepare_expansion=
  function(param)
   {var t=param[1];
    
    var t$prime=hide_variant_name(param[2]);
    
    mark_loops(t);
    if(!same_path(t,t$prime)){mark_loops(t$prime)}else{}
    
    return /* tuple */[0,t,t$prime];
    };

var
 may_prepare_expansion=
  function(compact,param)
   {var t$prime=param[2];
    
    var t=param[1];
    
    var match$1=Btype["repr"](t$prime)[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0]){case 4:exit=60;case 8:exit=60;default:exit=59;}}
    
    switch(exit)
     {case 60:
       if(compact)
        {mark_loops(t);return /* tuple */[0,t,t];}
       else
        {"unknown block:(exit 59)";}
       
      case 59:return prepare_expansion(/* tuple */[0,t,t$prime]);
      }
    };

var
 print_tags=
  function(ppf,fields)
   {if(fields)
     {Format["fprintf"](ppf,[0,[12,96,[2,0,0]],"`%s"],fields[1][1]);
      return List["iter"]
              (function(param)
                {return Format["fprintf"]
                         (ppf,
                          [0,[12,44,[17,[0,"@ ",1,0],[12,96,[2,0,0]]]],",@ `%s"],
                          param[1]);
                 },
               fields[2]);
      }
    else
     {return 0;}
    };

var
 has_explanation=
  function(unif,t3,t4)
   {var match$1=t3[1];
    
    var match$2=t4[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1)
       {case 0:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0]){case 0:exit=54;case 3:exit=50;default:exit=53;}}
         
        }}
    else
     {switch(match$1[0])
       {case 0:exit=50;
        case 3:
         if(typeof match$2=="number")
          {switch(match$2){case 0:exit=50;}}
         else
          {switch(match$2[0]){case 0:exit=54;default:exit=53;}}
         
        case 5:
         var match$3=match$1[4][1];
         
         var exit$1;
         
         if("unknown primitive:isint")
          {if(typeof match$2=="number")
            {switch(match$2){case 0:exit$1=55;}}
           else
            {switch(match$2[0])
              {case 0:exit=54;
               case 3:exit$1=55;
               case 5:
                var match$4=match$2[4][1];
                
                if("unknown primitive:isint")
                 {return "unknown primitive:caml_string_equal";}
                else
                 {exit=51;}
                
               default:exit=51;}}
           }
         else
          {exit$1=55;}
         
         switch(exit$1)
          {case 55:
            if(typeof match$2=="number")
             {switch(match$2){case 0:exit=50;}}
            else
             {switch(match$2[0])
               {case 0:exit=54;case 3:exit=50;default:exit=51;}}
            
           }
         
        case 8:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0]){case 0:exit=54;case 8:exit=50;default:exit=51;}}
         
        default:exit=54;}}
    
    switch(exit)
     {case 54:
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 0:"unknown block:(exit 50)";
           default:"unknown block:(exit 53)";}}
       
      case 53:
       if(typeof match$1=="number")
        {switch(match$1){case 0:"unknown block:(exit 52)";}}
       else
        {switch(match$1[0])
          {case 3:"unknown block:(exit 52)";
           default:"unknown block:(exit 51)";}}
       
      case 52:
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 5:"unknown block:(exit 50)";
           default:"unknown block:(exit 51)";}}
       
      case 51:return 0;
      case 50:return 1;
      }
    };

var
 mismatch=
  function(unif,param)
   {if(param)
     {var match$1=param[2];
      
      if(match$1)
       {var t$prime=match$1[1][2];
        
        var t=param[1][2];
        
        var m=mismatch(unif,match$1[2]);
        
        if(m)
         {return m;}
        else
         {if(has_explanation(unif,t,t$prime))
           {return /* Some */[0,/* tuple */[0,t,t$prime]];}
          else
           {return 0;}
          }
        }
      else
       {throw [0,Assert_failure,[0,"typing/printtyp.ml",1339,9]];}
      }
    else
     {return 0;}
    };

var
 explanation=
  function(unif,t3,t4,ppf)
   {var match$1=t3[1];
    
    var match$2=t4[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1)
       {case 0:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 0:exit=42;case 3:exit=39;case 5:exit=40;default:exit=34;}}
         
        }}
    else
     {switch(match$1[0])
       {case 0:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 2:if(match$2[1]){exit=37;}else{exit=35;}
             case 3:
              var p=match$2[1];
              
              if(unif&&t3[2]<Path["binding_time"](p))
               {return Format["fprintf"]
                        (ppf,
                         [0,
                          [17,
                           [0,"@,",0,0],
                           [18,
                            [1,[0,0,""]],
                            [11,
                             "The type constructor",
                             [17,
                              [0,"@;<1 2>",1,2],
                              [15,
                               [17,[0,"@ ",1,0],[11,"would escape its scope",[17,0,0]]]]]]]],
                          "@,@[The type constructor@;<1 2>%a@ would escape its scope@]"],
                         path,
                         p);
                }
              else
               {exit=37;}
              
             case 9:exit=36;
             default:exit=37;}}
         
        case 2:
         if(match$1[1])
          {exit=42;}
         else
          {if(typeof match$2=="number")
            {switch(match$2){}}
           else
            {switch(match$2[0])
              {case 0:exit=35;case 5:exit=40;default:exit=34;}}
           }
         
        case 3:
         var p$1=match$1[1];
         
         if(typeof match$2=="number")
          {switch(match$2){case 0:exit=39;}}
         else
          {switch(match$2[0])
            {case 0:
              if(unif&&t4[2]<Path["binding_time"](p$1))
               {return Format["fprintf"]
                        (ppf,
                         [0,
                          [17,
                           [0,"@,",0,0],
                           [18,
                            [1,[0,0,""]],
                            [11,
                             "The type constructor",
                             [17,
                              [0,"@;<1 2>",1,2],
                              [15,
                               [17,[0,"@ ",1,0],[11,"would escape its scope",[17,0,0]]]]]]]],
                          "@,@[The type constructor@;<1 2>%a@ would escape its scope@]"],
                         path,
                         p$1);
                }
              else
               {exit=42;}
              
             case 5:exit=40;
             default:exit=34;}}
         
        case 8:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 0:exit=42;
             case 5:exit=40;
             case 8:
              var row1=Btype["row_repr"](match$1[1]);
              
              var row2=Btype["row_repr"](match$2[1]);
              
              var match$3=row1[1];
              
              var match$4=row1[4];
              
              var match$5=row2[1];
              
              var match$6=row2[4];
              
              var exit$1;
              
              if(match$3)
               {if(match$3[2])
                 {exit$1=29;}
                else
                 {if(match$4!=0)
                   {if(match$5)
                     {if(match$5[2])
                       {exit$1=28;}
                      else
                       {if(match$6!=0)
                         {var l1=match$3[1][1];
                          
                          if("unknown primitive:caml_string_equal")
                           {return Format["fprintf"]
                                    (ppf,
                                     [0,
                                      [17,
                                       [0,"@,",0,0],
                                       [11,"Types for tag `",[2,0,[11," are incompatible",0]]]],
                                      "@,Types for tag `%s are incompatible"],
                                     l1);
                            }
                          else
                           {exit$1=28;}
                          }
                        else
                         {exit$1=28;}
                        }
                      }
                    else
                     {exit$1=29;}
                    }
                  else
                   {exit$1=29;}
                  }
                }
              else
               {if(match$4!=0)
                 {var exit$2;
                  
                  if(match$5)
                   {exit$2=30;}
                  else
                   {if(match$6!=0)
                     {return Format["fprintf"]
                              (ppf,
                               [0,
                                [17,
                                 [0,"@,",0,0],
                                 [11,"These two variant types have no intersection",0]],
                                "@,These two variant types have no intersection"]);
                      }
                    else
                     {exit$2=30;}
                    }
                  
                  switch(exit$2)
                   {case 30:
                     return Format["fprintf"]
                             (ppf,
                              [0,
                               [17,
                                [0,"@,",0,0],
                                [18,
                                 [1,[0,0,""]],
                                 [11,
                                  "The first variant type does not allow tag(s)",
                                  [17,
                                   [0,"@ ",1,0],
                                   [18,[1,[0,[11,"<hov>",0],"<hov>"]],[15,[17,0,[17,0,0]]]]]]]],
                               "@,@[The first variant type does not allow tag(s)@ @[<hov>%a@]@]"],
                              print_tags,
                              match$5);
                     
                    }
                  }
                else
                 {exit$1=29;}
                }
              
              switch(exit$1)
               {case 29:
                 if(match$5)
                  {"unknown block:(exit 28)";}
                 else
                  {if(match$6!=0)
                    {return Format["fprintf"]
                             (ppf,
                              [0,
                               [17,
                                [0,"@,",0,0],
                                [18,
                                 [1,[0,0,""]],
                                 [11,
                                  "The second variant type does not allow tag(s)",
                                  [17,
                                   [0,"@ ",1,0],
                                   [18,[1,[0,[11,"<hov>",0],"<hov>"]],[15,[17,0,[17,0,0]]]]]]]],
                               "@,@[The second variant type does not allow tag(s)@ @[<hov>%a@]@]"],
                              print_tags,
                              match$3);
                     }
                   else
                    {"unknown block:(exit 28)";}
                   }
                 
                case 28:return 0;
                }
              
             default:exit=34;}}
         
        case 9:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0]){case 0:exit=36;case 5:exit=40;default:exit=34;}}
         
        default:exit=42;}}
    
    switch(exit)
     {case 42:
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 0:"unknown block:(exit 37)";
           default:"unknown block:(exit 41)";}}
       
      case 41:
       if(typeof match$1=="number")
        {switch(match$1){}}
       else
        {switch(match$1[0])
          {case 5:"unknown block:(exit 38 (field 0 match/2406))";
           default:"unknown block:(exit 40)";}}
       
      case 40:
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 5:"unknown block:(exit 38 (field 0 match/2407))";
           default:"unknown block:(exit 34)";}}
       
      case 35:
       return Format["fprintf"]
               (ppf,
                [0,
                 [17,[0,"@,",0,0],[11,"Self type cannot escape its class",0]],
                 "@,Self type cannot escape its class"]);
       
      case 36:
       return Format["fprintf"]
               (ppf,
                [0,
                 [17,
                  [0,"@,",0,0],
                  [11,
                   "The universal variable ",
                   [15,[11," would escape its scope",0]]]],
                 "@,The universal variable %a would escape its scope"],
                type_expr,
                Btype["is_Tunivar"](t3)?t3:t4);
       
      case 37:
       if(Btype["is_Tvar"](t3))
        {var match$7=/* tuple */[0,t3,t4];}
       else
        {var match$7=/* tuple */[0,t4,t3];}
       
       var t$prime=match$7[2];
       
       var t=match$7[1];
       
       if(Ctype["occur_in"](Env["empty"],t,t$prime))
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [17,
                    [0,"@,",0,0],
                    [18,
                     [1,[0,[11,"<hov>",0],"<hov>"]],
                     [11,
                      "The type variable ",
                      [15,[11," occurs inside",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]],
                   "@,@[<hov>The type variable %a occurs inside@ %a@]"],
                  type_expr,
                  t,
                  type_expr,
                  t$prime);
         }
       else
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [17,
                    [0,"@,",0,0],
                    [18,
                     [1,[0,[11,"<hov>",0],"<hov>"]],
                     [11,
                      "This instance of ",
                      [15,[11," is ambiguous:",[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]]],
                   "@,@[<hov>This instance of %a is ambiguous:@ %s@]"],
                  type_expr,
                  t$prime,
                  "it would escape the scope of its equation");
         }
       
      case 38:
       if("unknown primitive:caml_string_equal")
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [17,
                    [0,"@,",0,0],
                    [11,
                     "Self type cannot be unified with a closed object type",
                     0]],
                   "@,Self type cannot be unified with a closed object type"]);
         }
       else
        {"unknown block:(exit 34)";}
       
      case 39:
       return Format["fprintf"]
               (ppf,
                [0,
                 [17,
                  [0,"@,",0,0],
                  [18,
                   [1,[0,0,""]],
                   [11,
                    "The ",
                    [2,
                     0,
                     [11,
                      " object type has an abstract row, it cannot be closed",
                      [17,0,0]]]]]],
                 "@,@[The %s object type has an abstract row, it cannot be closed@]"],
                (t4[1]=0)?"first":"second");
       
      case 34:
       var exit$3;
       
       if(typeof match$1=="number")
        {switch(match$1){case 0:exit$3=45;}}
       else
        {switch(match$1[0])
          {case 3:exit$3=45;
           case 5:
            var l=match$1[1];
            
            var match$8=match$1[4][1];
            
            var exit$4;
            
            if("unknown primitive:isint")
             {if(typeof match$2=="number")
               {switch(match$2){case 0:exit$4=46;}}
              else
               {switch(match$2[0])
                 {case 3:exit$4=46;
                  case 5:
                   var match$9=match$2[4][1];
                   
                   if("unknown primitive:isint")
                    {if("unknown primitive:caml_string_equal")
                      {return Format["fprintf"]
                               (ppf,
                                [0,
                                 [17,
                                  [0,"@,",0,0],
                                  [11,"Types for method ",[2,0,[11," are incompatible",0]]]],
                                 "@,Types for method %s are incompatible"],
                                l);
                       }
                     else
                      {exit$3=44;}
                     }
                   else
                    {exit$3=44;}
                   
                  default:exit$3=44;}}
              }
            else
             {exit$4=46;}
            
            switch(exit$4)
             {case 46:
               var exit$5;
               
               if(typeof match$2=="number")
                {switch(match$2){case 0:exit$5=47;}}
               else
                {switch(match$2[0]){case 3:exit$5=47;default:exit$3=44;}}
               
               switch(exit$5)
                {case 47:
                  return Format["fprintf"]
                          (ppf,
                           [0,
                            [17,
                             [0,"@,",0,0],
                             [18,
                              [1,[0,0,""]],
                              [11,"The second object type has no method ",[2,0,[17,0,0]]]]],
                            "@,@[The second object type has no method %s@]"],
                           l);
                  
                 }
               
              }
            
           default:exit$3=44;}}
       
       switch(exit$3)
        {case 45:
          if(typeof match$2=="number")
           {switch(match$2){}}
          else
           {switch(match$2[0])
             {case 5:
               return Format["fprintf"]
                       (ppf,
                        [0,
                         [17,
                          [0,"@,",0,0],
                          [18,
                           [1,[0,0,""]],
                           [11,"The first object type has no method ",[2,0,[17,0,0]]]]],
                         "@,@[The first object type has no method %s@]"],
                        match$2[1]);
               
              default:"unknown block:(exit 44)";}}
          
         case 44:return 0;
         }
       
      }
    };

var
 explanation$1=
  function(unif,mis,ppf)
   {if(mis)
     {var match$1=mis[1];return explanation(unif,match$1[1],match$1[2],ppf);}
    else
     {return 0;}
    };

var
 ident_same_name=
  function(id1,id2)
   {if(Ident["equal"](id1,id2)&&!Ident["same"](id1,id2))
     {add_unique(id1);return add_unique(id2);}
    else
     {return 0;}
    };

var
 path_same_name=
  function(p1,p2)
   {var exit;
    
    switch(p1)
     {case 0:
       switch(p2)
        {case 0:return ident_same_name(p1[1],p2[1]);
         case 1:exit=24;
         case 2:exit=24;
         }
       
      case 1:
       switch(p2)
        {case 0:exit=24;
         case 1:
          if("unknown primitive:caml_string_equal")
           {return path_same_name(p1[1],p2[1]);}
          else
           {exit=24;}
          
         case 2:exit=24;
         }
       
      case 2:
       switch(p2)
        {case 0:exit=24;
         case 1:exit=24;
         case 2:
          path_same_name(p1[1],p2[1]);return path_same_name(p1[2],p2[2]);
         }
       
      }
    
    switch(exit){case 24:return 0;}
    };

var
 type_same_name=
  function(t1,t2)
   {var match$1=Btype["repr"](t1)[1];
    
    var match$2=Btype["repr"](t2)[1];
    
    var exit;
    
    if(typeof match$1=="number")
     {switch(match$1){}}
    else
     {switch(match$1[0])
       {case 3:
         if(typeof match$2=="number")
          {switch(match$2){}}
         else
          {switch(match$2[0])
            {case 3:
              return path_same_name
                      (best_type_path(match$1[1])[1],
                       best_type_path(match$2[1])[1]);
              
             default:exit=22;}}
         
        default:exit=22;}}
    
    switch(exit){case 22:return 0;}
    };

var
 trace_same_names=
  function(param)
   {var exit;
    
    if(param)
     {var match$1=param[2];
      
      if(match$1)
       {var match$2=match$1[1];
        
        var match$3=param[1];
        
        type_same_name(match$3[1],match$2[1]);
        type_same_name(match$3[2],match$2[2]);
        return trace_same_names(match$1[2]);
        }
      else
       {exit=21;}
      }
    else
     {exit=21;}
    
    switch(exit){case 21:return 0;}
    };

var
 unification_error=
  function(unif,tr,txt1,ppf,txt2)
   {reset(0);
    trace_same_names(tr);
    var
     tr$1=
      List["map"]
       (function(param)
         {return /* tuple */[0,param[1],hide_variant_name(param[2])];},
        tr);
    
    var mis=mismatch(unif,tr$1);
    
    var exit;
    
    if(tr$1)
     {var match$1=tr$1[2];
      
      if(match$1)
       {try
         {var tr$2=filter_trace(mis=0,match$1[2]);
          
          var match$2=may_prepare_expansion(tr$2=0,tr$1[1]);
          
          var match$3=may_prepare_expansion(tr$2=0,match$1[1]);
          
          print_labels[1]=!Clflags["classic"][1],0;
          var tr$3=List["map"](prepare_expansion,tr$2);
          
          Format["fprintf"]
           (ppf,
            [0,
             [18,
              [1,[0,[11,"<v>",0],"<v>"]],
              [18,
               [1,[0,0,""]],
               [16,
                [17,
                 [0,"@;<1 2>",1,2],
                 [15,
                  [17,
                   [0,"@ ",1,0],
                   [16,[17,[0,"@;<1 2>",1,2],[15,[17,0,[15,[16,[17,0,0]]]]]]]]]]]]],
             "@[<v>@[%t@;<1 2>%a@ %t@;<1 2>%a@]%a%t@]"],
            txt1,
            type_expansion(match$2[1]),
            match$2[2],
            txt2,
            type_expansion(match$3[1]),
            match$3[2],
            trace(0,"is not compatible with type"),
            tr$3,
            explanation$1(unif,mis));
          return print_labels[1]=1,0;
          }
        catch(exn){print_labels[1]=1,0;throw exn;}
        }
      else
       {exit=17;}
      }
    else
     {exit=17;}
    
    switch(exit)
     {case 17:throw [0,Assert_failure,[0,"typing/printtyp.ml",1438,20]];}
    };

var
 report_unification_error=
  function(ppf,env,$staropt$star,tr,txt1,txt2)
   {if($staropt$star){var unif=$staropt$star[1];}else{var unif=1;}
    
    return wrap_printing_env
            (env,
             function(param){return unification_error(unif,tr,txt1,ppf,txt2);});
    };

var
 trace$1=
  function(fst,keep_last,txt,ppf,tr)
   {print_labels[1]=!Clflags["classic"][1],0;
    trace_same_names(tr);
    try
     {var exit;
      
      if(tr)
       {var match$1=tr[2];
        
        if(match$1)
         {if(fst)
           {trace
             (fst,
              txt,
              ppf,
              /* :: */[0,
               tr[1],
               /* :: */[0,match$1[1],filter_trace(keep_last,match$1[2])]])}
          else
           {trace(fst,txt,ppf,filter_trace(keep_last,tr))}
          
          return print_labels[1]=1,0;
          }
        else
         {exit=8;}
        }
      else
       {exit=8;}
      
      switch(exit){case 8:return 0;}
      }
    catch(exn){print_labels[1]=1,0;throw exn;}
    };

var
 report_subtyping_error=
  function(ppf,env,tr1,txt1,tr2)
   {return wrap_printing_env
            (env,
             function(param)
              {reset(0);
               var tr1$1=List["map"](prepare_expansion,tr1);
               
               var tr2$1=List["map"](prepare_expansion,tr2);
               
               Format["fprintf"]
                (ppf,
                 [0,[18,[1,[0,[11,"<v>",0],"<v>"]],[15,0]],"@[<v>%a"],
                 trace$1(1,tr2$1=0,txt1),
                 tr1$1);
               if(tr2$1=0)
                {return Format["fprintf"](ppf,[0,[17,0,0],"@]"]);}
               else
                {var mis=mismatch(1,tr2$1);
                 
                 return Format["fprintf"]
                         (ppf,
                          [0,[15,[16,[17,0,0]]],"%a%t@]"],
                          trace$1(0,mis=0,"is not compatible with type"),
                          tr2$1,
                          explanation$1(1,mis));
                 }
               });
    };

var
 report_ambiguous_type_error=
  function(ppf,env,param,tpl,txt1,txt2,txt3)
   {var tp0$prime=param[2];
    
    var tp0=param[1];
    
    return wrap_printing_env
            (env,
             function(param$1)
              {reset(0);
               List["iter"]
                (function(param$2)
                  {path_same_name(tp0,param$2[1]);
                   return path_same_name(tp0$prime,param$2[2]);
                   },
                 tpl);
               if(tpl)
                {if(tpl[2])
                  {return Format["fprintf"]
                           (ppf,
                            [0,
                             [18,
                              [1,[0,0,""]],
                              [16,
                               [17,
                                [0,"@;<1 2>",1,2],
                                [18,
                                 [1,[0,[11,"<hv>",0],"<hv>"]],
                                 [15,
                                  [17,
                                   0,
                                   [17,[0,"@ ",1,0],[16,[17,[0,"@;<1 2>",1,2],[15,[17,0,0]]]]]]]]]]],
                             "@[%t@;<1 2>@[<hv>%a@]@ %t@;<1 2>%a@]"],
                            txt2,
                            type_path_list,
                            tpl,
                            txt3,
                            type_path_expansion(tp0),
                            tp0$prime);
                   }
                 else
                  {var match$1=tpl[1];
                   
                   return Format["fprintf"]
                           (ppf,
                            [0,
                             [18,
                              [1,[0,0,""]],
                              [16,
                               [17,
                                [0,"@;<1 2>",1,2],
                                [15,
                                 [17,[0,"@ ",1,0],[16,[17,[0,"@;<1 2>",1,2],[15,[17,0,0]]]]]]]]],
                             "@[%t@;<1 2>%a@ %t@;<1 2>%a@]"],
                            txt1,
                            type_path_expansion(match$1[1]),
                            match$1[2],
                            txt3,
                            type_path_expansion(tp0),
                            tp0$prime);
                   }
                 }
               else
                {throw [0,Assert_failure,[0,"typing/printtyp.ml",1498,12]];}
               });
    };

module["exports"]=
{"longident":longident,
 "ident":ident,
 "tree_of_path":tree_of_path,
 "path":path,
 "string_of_path":string_of_path,
 "raw_type_expr":raw_type_expr,
 "wrap_printing_env":wrap_printing_env,
 "reset":reset,
 "mark_loops":mark_loops,
 "reset_and_mark_loops":reset_and_mark_loops,
 "reset_and_mark_loops_list":reset_and_mark_loops_list,
 "type_expr":type_expr,
 "tree_of_type_scheme":tree_of_type_scheme,
 "type_sch":type_sch,
 "type_scheme":type_scheme,
 "reset_names":reset_names,
 "type_scheme_max":type_scheme_max,
 "tree_of_value_description":tree_of_value_description,
 "value_description":value_description,
 "tree_of_type_declaration":tree_of_type_declaration,
 "type_declaration":type_declaration,
 "tree_of_extension_constructor":tree_of_extension_constructor,
 "extension_constructor":extension_constructor,
 "tree_of_module":tree_of_module,
 "modtype":modtype,
 "signature":signature,
 "tree_of_modtype_declaration":tree_of_modtype_declaration,
 "tree_of_signature":tree_of_signature,
 "tree_of_typexp":tree_of_typexp,
 "modtype_declaration":modtype_declaration,
 "class_type":class_type,
 "tree_of_class_declaration":tree_of_class_declaration,
 "class_declaration":class_declaration,
 "tree_of_cltype_declaration":tree_of_cltype_declaration,
 "cltype_declaration":cltype_declaration,
 "type_expansion":type_expansion,
 "prepare_expansion":prepare_expansion,
 "trace":trace$1,
 "report_unification_error":report_unification_error,
 "report_subtyping_error":report_subtyping_error,
 "report_ambiguous_type_error":report_ambiguous_type_error,
 "hide_rec_items":hide_rec_items};

