// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Printf=require("Printf");
var Format=require("Format");
var Sys=require("Sys");


var Ellipsis="unknown primitive:caml_set_oo_id";

var
 cautious=
  function(f,ppf,arg)
   {try
     {return f(ppf,arg);}
    catch(exn)
     {if(exn=Ellipsis)
       {return Format["fprintf"](ppf,[0,[11,"...",0],"..."]);}
      else
       {throw exn;}
      }
    };

var
 print_ident=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,[15,[12,40,[15,[12,41,0]]]],"%a(%a)"],
                print_ident,
                param[1],
                print_ident,
                param[2]);
       
      case 1:
       print_ident(ppf,param[1]);
       Format["pp_print_char"](ppf,46);
       return Format["pp_print_string"](ppf,param[2]);
       
      case 2:return Format["pp_print_string"](ppf,param[1]);
      }
    };

var
 parenthesized_ident=
  function(name)
   {var match=name[0];
    
    var exit;
    
    if(match>=97)
     {if(match>=223)
       {if(match!=247){exit=90;}else{exit=91;}}
      else
       {if(match>=123){exit=91;}else{exit=90;}}
      }
    else
     {if(match>=91)
       {if(match!=95){exit=91;}else{exit=90;}}
      else
       {if(match>=65){exit=90;}else{exit=91;}}
      }
    
    var $js;
    switch(exit){case 91:$js=1;case 90:$js=0;}
    return List["mem"]
            (name,
             [0,
              "or",
              [0,
               "mod",
               [0,"land",[0,"lor",[0,"lxor",[0,"lsl",[0,"lsr",[0,"asr",0]]]]]]]])||
           $js;
    };

var
 value_ident=
  function(ppf,name)
   {if(parenthesized_ident(name))
     {return Format["fprintf"]
              (ppf,[0,[11,"( ",[2,0,[11," )",0]]],"( %s )"],name);
      }
    else
     {return Format["pp_print_string"](ppf,name);}
    };

var
 valid_float_lexeme=
  function(s)
   {var l=s["length"];
    
    var
     loop=
      function(i)
       {if(i>=l)
         {return Pervasives["^"](s,".");}
        else
         {var match=s[i];
          
          var exit;
          
          if(match>=48)
           {if(match>=58){exit=86;}else{exit=85;}}
          else
           {if(match!=45){exit=86;}else{exit=85;}}
          
          switch(exit){case 86:return s;case 85:return loop(i+1);}
          }
        };
    
    return loop(0);
    };

var
 float_repres=
  function(f)
   {var match="unknown primitive:caml_classify_float";
    
    if(match!=3)
     {if(match>=4)
       {return "nan";}
      else
       {var s1=Printf["sprintf"]([0,[8,9,0,[0,12],0],"%.12g"],f);
        
        if(f="unknown primitive:caml_float_of_string")
         {var float_val=s1;}
        else
         {var s2=Printf["sprintf"]([0,[8,9,0,[0,15],0],"%.15g"],f);
          
          if(f="unknown primitive:caml_float_of_string")
           {var float_val=s2;}
          else
           {var float_val=Printf["sprintf"]([0,[8,9,0,[0,18],0],"%.18g"],f);}
          }
        
        return valid_float_lexeme(float_val);
        }
      }
    else
     {if(f<0){return "neg_infinity";}else{return "infinity";}}
    };

var
 parenthesize_if_neg=
  function(ppf,fmt,v,isneg)
   {if(isneg){Format["pp_print_char"](ppf,40)}else{}
    
    Format["fprintf"](ppf,fmt,v);
    if(isneg){return Format["pp_print_char"](ppf,41);}else{return 0;}
    };

var
 print_out_value=
  function(ppf,tree)
   {var
     print_tree_1=
      function(ppf$1,tree$1)
       {var exit;
        
        if(typeof tree$1=="number")
         {switch(tree$1){}}
        else
         {switch(tree$1[0])
           {case 2:
             var params=tree$1[2];
             
             if(params)
              {var name=tree$1[1];
               
               if(params[2])
                {return Format["fprintf"]
                         (ppf$1,
                          [0,
                           [18,
                            [1,[0,[11,"<1>",0],"<1>"]],
                            [15,[17,[0,"@ ",1,0],[12,40,[15,[12,41,[17,0,0]]]]]]],
                           "@[<1>%a@ (%a)@]"],
                          print_ident,
                          name,
                          print_tree_list(print_tree_1,","),
                          params);
                 }
               else
                {return Format["fprintf"]
                         (ppf$1,
                          [0,
                           [18,
                            [1,[0,[11,"<1>",0],"<1>"]],
                            [15,[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                           "@[<1>%a@ %a@]"],
                          print_ident,
                          name,
                          print_constr_param,
                          params[1]);
                 }
               }
             else
              {exit=73;}
             
            case 14:
             var match=tree$1[2];
             
             if(match)
              {return Format["fprintf"]
                       (ppf$1,
                        [0,
                         [18,
                          [1,[0,[11,"<2>",0],"<2>"]],
                          [12,96,[2,0,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                         "@[<2>`%s@ %a@]"],
                        tree$1[1],
                        print_constr_param,
                        match[1]);
               }
             else
              {exit=73;}
             
            default:exit=73;}}
        
        switch(exit){case 73:return print_simple_tree(ppf$1,tree$1);}
        };
    
    var
     print_constr_param=
      function(ppf$1,tree$1)
       {var exit;
        
        if(typeof tree$1=="number")
         {switch(tree$1){}}
        else
         {switch(tree$1[0])
           {case 3:
             var f=tree$1[1];
             
             return parenthesize_if_neg
                     (ppf$1,[0,[2,0,0],"%s"],float_repres(f),f<0);
             
            case 4:
             var i=tree$1[1];
             
             return parenthesize_if_neg(ppf$1,[0,[4,3,0,0,0],"%i"],i,i<0);
             
            case 5:
             var i$1=tree$1[1];
             
             return parenthesize_if_neg
                     (ppf$1,[0,[5,3,0,0,[12,108,0]],"%lil"],i$1,i$1<0);
             
            case 6:
             var i$2=tree$1[1];
             
             return parenthesize_if_neg
                     (ppf$1,[0,[7,3,0,0,[12,76,0]],"%LiL"],i$2,i$2<0);
             
            case 7:
             var i$3=tree$1[1];
             
             return parenthesize_if_neg
                     (ppf$1,[0,[6,3,0,0,[12,110,0]],"%nin"],i$3,i$3<0);
             
            default:exit=75;}}
        
        switch(exit){case 75:return print_simple_tree(ppf$1,tree$1);}
        };
    
    var
     print_simple_tree=
      function(ppf$1,tree$1)
       {var exit;
        
        if(typeof tree$1=="number")
         {switch(tree$1){case 0:throw Ellipsis;}}
        else
         {switch(tree$1[0])
           {case 0:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [18,
                        [1,[0,[11,"<2>",0],"<2>"]],
                        [11,"[|",[15,[11,"|]",[17,0,0]]]]],
                       "@[<2>[|%a|]@]"],
                      print_tree_list(print_tree_1,";"),
                      tree$1[1]);
             
            case 1:return Format["fprintf"](ppf$1,[0,[1,0],"%C"],tree$1[1]);
            case 2:
             if(tree$1[2]){exit=77;}else{return print_ident(ppf$1,tree$1[1]);}
            case 3:
             return Format["pp_print_string"](ppf$1,float_repres(tree$1[1]));
            case 4:
             return Format["fprintf"](ppf$1,[0,[4,3,0,0,0],"%i"],tree$1[1]);
            case 5:
             return Format["fprintf"]
                     (ppf$1,[0,[5,3,0,0,[12,108,0]],"%lil"],tree$1[1]);
             
            case 6:
             return Format["fprintf"]
                     (ppf$1,[0,[7,3,0,0,[12,76,0]],"%LiL"],tree$1[1]);
             
            case 7:
             return Format["fprintf"]
                     (ppf$1,[0,[6,3,0,0,[12,110,0]],"%nin"],tree$1[1]);
             
            case 8:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [18,
                        [1,[0,[11,"<1>",0],"<1>"]],
                        [12,91,[15,[12,93,[17,0,0]]]]],
                       "@[<1>[%a]@]"],
                      print_tree_list(print_tree_1,";"),
                      tree$1[1]);
             
            case 9:return tree$1[1](ppf$1);
            case 10:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [18,
                        [1,[0,[11,"<1>",0],"<1>"]],
                        [12,123,[15,[12,125,[17,0,0]]]]],
                       "@[<1>{%a}@]"],
                      cautious(print_fields(1)),
                      tree$1[1]);
             
            case 11:
             try
              {return Format["fprintf"](ppf$1,[0,[3,0,0],"%S"],tree$1[1]);}
             catch(exn)
              {var exit$1;
               
               if(exn[1]=Invalid_argument)
                {switch(exn[2])
                  {case "String.create":
                    return Format["fprintf"]
                            (ppf$1,[0,[11,"<huge string>",0],"<huge string>"]);
                    
                   default:exit$1=76;}
                 }
               else
                {exit$1=76;}
               
               switch(exit$1){case 76:throw exn;}
               }
             
            case 12:return Format["pp_print_string"](ppf$1,tree$1[1]);
            case 13:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [18,
                        [1,[0,[11,"<1>",0],"<1>"]],
                        [12,40,[15,[12,41,[17,0,0]]]]],
                       "@[<1>(%a)@]"],
                      print_tree_list(print_tree_1,","),
                      tree$1[1]);
             
            case 14:
             if(tree$1[2])
              {exit=77;}
             else
              {return Format["fprintf"]
                       (ppf$1,[0,[12,96,[2,0,0]],"`%s"],tree$1[1]);
               }
             
            }}
        
        switch(exit)
         {case 77:
           return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<1>",0],"<1>"]],
                      [12,40,[15,[12,41,[17,0,0]]]]],
                     "@[<1>(%a)@]"],
                    cautious(print_tree_1),
                    tree$1);
           
          }
        };
    
    var
     print_fields=
      function(first,ppf$1,param)
       {if(param)
         {var match=param[1];
          
          if(!first)
           {Format["fprintf"](ppf$1,[0,[12,59,[17,[0,"@ ",1,0],0]],";@ "])}
          else
           {}
          
          Format["fprintf"]
           (ppf$1,
            [0,
             [18,
              [1,[0,[11,"<1>",0],"<1>"]],
              [15,[17,[0,"@ ",1,0],[12,61,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
             "@[<1>%a@ =@ %a@]"],
            print_ident,
            match[1],
            cautious(print_tree_1),
            match[2]);
          return print_fields(0,ppf$1,param[2]);
          }
        else
         {return 0;}
        };
    
    var
     print_tree_list=
      function(print_item,sep,ppf$1,tree_list)
       {var
         print_list=
          function(first,ppf$2,param)
           {if(param)
             {if(!first)
               {Format["fprintf"]
                 (ppf$2,[0,[2,0,[17,[0,"@ ",1,0],0]],"%s@ "],sep)}
              else
               {}
              
              print_item(ppf$2,param[1]);
              return print_list(0,ppf$2,param[2]);
              }
            else
             {return 0;}
            };
        
        return cautious(print_list(1),ppf$1,tree_list);
        };
    
    return cautious(print_tree_1,ppf,tree);
    };

var out_value=[0,print_out_value];

var
 print_list_init=
  function(pr,sep,ppf,param)
   {if(param)
     {sep(ppf);pr(ppf,param[1]);return print_list_init(pr,sep,ppf,param[2]);}
    else
     {return 0;}
    };

var
 print_list=
  function(pr,sep,ppf,param)
   {if(param)
     {var l=param[2];
      
      var a=param[1];
      
      if(l)
       {pr(ppf,a);sep(ppf);return print_list(pr,sep,ppf,l);}
      else
       {return pr(ppf,a);}
      }
    else
     {return 0;}
    };

var
 pr_present=
  print_list
   (function(ppf,s)
     {return Format["fprintf"](ppf,[0,[12,96,[2,0,0]],"`%s"],s);},
    function(ppf){return Format["fprintf"](ppf,[0,[17,[0,"@ ",1,0],0],"@ "]);});

var
 pr_vars=
  print_list
   (function(ppf,s)
     {return Format["fprintf"](ppf,[0,[12,39,[2,0,0]],"'%s"],s);},
    function(ppf){return Format["fprintf"](ppf,[0,[17,[0,"@ ",1,0],0],"@ "]);});

var
 print_out_type=
  function(ppf,ty)
   {var exit;
    
    if(typeof ty=="number")
     {switch(ty){}}
    else
     {switch(ty[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [15,[17,[0,"@ ",1,0],[11,"as '",[2,0,[17,0,0]]]]]],
                   "@[%a@ as '%s@]"],
                  print_out_type,
                  ty[1],
                  ty[2]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov 2>",0],"<hov 2>"]],
                    [15,[12,46,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                   "@[<hov 2>%a.@ %a@]"],
                  pr_vars,
                  ty[1],
                  print_out_type,
                  ty[2]);
         
        default:exit=54;}}
    
    switch(exit){case 54:return print_out_type_1(ppf,ty);}
    };

var
 print_out_type_1=
  function(ppf,ty)
   {var exit;
    
    if(typeof ty=="number")
     {switch(ty){}}
    else
     {switch(ty[0])
       {case 1:
         var lab=ty[1];
         
         Format["pp_open_box"](ppf,0);
         if("unknown primitive:caml_string_notequal")
          {Format["pp_print_string"](ppf,lab),Format["pp_print_char"](ppf,58)}
         else
          {}
         
         print_out_type_2(ppf,ty[2]);
         Format["pp_print_string"](ppf," ->");
         Format["pp_print_space"](ppf,0);
         print_out_type_1(ppf,ty[3]);
         return Format["pp_close_box"](ppf,0);
         
        default:exit=55;}}
    
    switch(exit){case 55:return print_out_type_2(ppf,ty);}
    };

var
 print_out_type_2=
  function(ppf,ty)
   {var exit;
    
    if(typeof ty=="number")
     {switch(ty){}}
    else
     {switch(ty[0])
       {case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,[1,[0,[11,"<0>",0],"<0>"]],[15,[17,0,0]]],
                   "@[<0>%a@]"],
                  print_typlist(print_simple_out_type," *"),
                  ty[1]);
         
        default:exit=56;}}
    
    switch(exit){case 56:return print_simple_out_type(ppf,ty);}
    };

var
 print_simple_out_type=
  function(ppf,ty)
   {var exit;
    
    if(typeof ty=="number")
     {switch(ty){}}
    else
     {switch(ty[0])
       {case 0:exit=63;
        case 1:exit=63;
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,[1,[0,0,""]],[15,[2,0,[12,35,[15,[17,0,0]]]]]],
                   "@[%a%s#%a@]"],
                  print_typargs,
                  ty[3],
                  ty[1]?"_":"",
                  print_ident,
                  ty[2]);
         
        case 3:
         Format["pp_open_box"](ppf,0);
         print_typargs(ppf,ty[2]);
         print_ident(ppf,ty[1]);
         return Format["pp_close_box"](ppf,0);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,"< ",[15,[11," >",[17,0,0]]]]],
                   "@[<2>< %a >@]"],
                  print_fields(ty[2]),
                  ty[1]);
         
        case 7:return Format["pp_print_string"](ppf,ty[1]);
        case 9:exit=63;
        case 10:
         return Format["fprintf"]
                 (ppf,[0,[12,39,[2,0,[2,0,0]]],"'%s%s"],ty[1]?"_":"",ty[2]);
         
        case 11:
         var tags=ty[4];
         
         var
          print_present=
           function(ppf$1,param)
            {var exit$1;
             
             if(param)
              {var l=param[1];
               
               if(l)
                {return Format["fprintf"]
                         (ppf$1,
                          [0,
                           [17,
                            [0,"@;<1 -2>",1,-2],
                            [11,"> ",[18,[1,[0,[11,"<hov>",0],"<hov>"]],[15,[17,0,0]]]]],
                           "@;<1 -2>> @[<hov>%a@]"],
                          pr_present,
                          l);
                 }
               else
                {exit$1=58;}
               }
             else
              {exit$1=58;}
             
             switch(exit$1){case 58:return 0;}
             };
         
         var
          print_fields$1=
           function(ppf$1,param)
            {switch(param)
              {case 0:
                return print_list
                        (print_row_field,
                         function(ppf$2)
                          {return Format["fprintf"]
                                   (ppf$2,
                                    [0,[17,[0,"@;<1 -2>",1,-2],[11,"| ",0]],"@;<1 -2>| "]);
                           },
                         ppf$1,
                         param[1]);
                
               case 1:
                return Format["fprintf"]
                        (ppf$1,
                         [0,[18,[1,[0,0,""]],[15,[15,[17,0,0]]]],"@[%a%a@]"],
                         print_typargs,
                         param[2],
                         print_ident,
                         param[1]);
                
               }
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [2,
                    0,
                    [12,
                     91,
                     [2,
                      0,
                      [18,
                       [1,[0,[11,"<hv>",0],"<hv>"]],
                       [18,
                        [1,[0,[11,"<hv>",0],"<hv>"]],
                        [15,[17,0,[15,[11," ]",[17,0,0]]]]]]]]]],
                   "%s[%s@[<hv>@[<hv>%a@]%a ]@]"],
                  ty[1]?"_":"",
                  ty[3]?(tags=0)?" ":"< ":(tags=0)?"> ":"? ",
                  print_fields$1,
                  ty[2],
                  print_present,
                  tags);
         
        case 12:exit=63;
        case 13:
         Format["fprintf"]
          (ppf,
           [0,
            [18,[1,[0,[11,"<1>",0],"<1>"]],[11,"(module ",[2,0,0]]],
            "@[<1>(module %s"],
           ty[1]);
         var first=[0,1];
         
         List["iter2"]
          (function(s,t)
            {if(first[1]){first[1]=0,0;var sep="with";}else{var sep="and";}
             
             return Format["fprintf"]
                     (ppf,
                      [0,
                       [12,32,[2,0,[11," type ",[2,0,[11," = ",[15,0]]]]]],
                       " %s type %s = %a"],
                      sep,
                      s,
                      print_out_type,
                      t);
             },
           ty[2],
           ty[3]);
         return Format["fprintf"](ppf,[0,[12,41,[17,0,0]],")@]"]);
         
        default:exit=64;}}
    
    switch(exit)
     {case 63:
       Format["pp_open_box"](ppf,1);
       Format["pp_print_char"](ppf,40);
       print_out_type(ppf,ty);
       Format["pp_print_char"](ppf,41);
       return Format["pp_close_box"](ppf,0);
       
      case 64:return 0;
      }
    };

var
 print_fields=
  function(rest,ppf,param)
   {if(param)
     {var l=param[2];
      
      var match=param[1];
      
      var t=match[2];
      
      var s=match[1];
      
      if(l)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [2,0,[11," : ",[15,[12,59,[17,[0,"@ ",1,0],[15,0]]]]]],
                  "%s : %a;@ %a"],
                 s,
                 print_out_type,
                 t,
                 print_fields(rest),
                 l);
        }
      else
       {Format["fprintf"]
         (ppf,[0,[2,0,[11," : ",[15,0]]],"%s : %a"],s,print_out_type,t);
        if(rest)
         {Format["fprintf"](ppf,[0,[12,59,[17,[0,"@ ",1,0],0]],";@ "])}
        else
         {}
        
        return print_fields(rest,ppf,0);
        }
      }
    else
     {if(rest)
       {return Format["fprintf"]
                (ppf,[0,[2,0,[11,"..",0]],"%s.."],rest[1]?"_":"");
        }
      else
       {return 0;}
      }
    };

var
 print_row_field=
  function(ppf,param)
   {var tyl=param[3];
    
    var opt_amp=param[2];
    
    var
     pr_of=
      function(ppf$1)
       {if(opt_amp)
         {return Format["fprintf"]
                  (ppf$1,
                   [0,
                    [11," of",[17,[0,"@ ",1,0],[12,38,[17,[0,"@ ",1,0],0]]]],
                    " of@ &@ "]);
          }
        else
         {if(tyl!=0)
           {return Format["fprintf"]
                    (ppf$1,[0,[11," of",[17,[0,"@ ",1,0],0]]," of@ "]);
            }
          else
           {return Format["fprintf"](ppf$1,[0,0,""]);}
          }
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
               [12,96,[2,0,[16,[15,[17,0,0]]]]]],
              "@[<hv 2>`%s%t%a@]"],
             param[1],
             pr_of,
             print_typlist(print_out_type," &"),
             tyl);
    };

var
 print_typlist=
  function(print_elem,sep,ppf,param)
   {if(param)
     {var tyl=param[2];
      
      var ty=param[1];
      
      if(tyl)
       {print_elem(ppf,ty);
        Format["pp_print_string"](ppf,sep);
        Format["pp_print_space"](ppf,0);
        return print_typlist(print_elem,sep,ppf,tyl);
        }
      else
       {return print_elem(ppf,ty);}
      }
    else
     {return 0;}
    };

var
 print_typargs=
  function(ppf,tyl)
   {if(tyl)
     {if(tyl[2])
       {Format["pp_open_box"](ppf,1);
        Format["pp_print_char"](ppf,40);
        print_typlist(print_out_type,",",ppf,tyl);
        Format["pp_print_char"](ppf,41);
        Format["pp_close_box"](ppf,0);
        return Format["pp_print_space"](ppf,0);
        }
      else
       {print_simple_out_type(ppf,tyl[1]);
        return Format["pp_print_space"](ppf,0);
        }
      }
    else
     {return 0;}
    };

var out_type=[0,print_out_type];

var
 type_parameter=
  function(ppf,param)
   {var match=param[2];
    
    var ty=param[1];
    
    return Format["fprintf"]
            (ppf,
             [0,[2,0,[2,0,0]],"%s%s"],
             !match[2]?"+":!match[1]?"-":"",
             "unknown primitive:caml_string_equal"?ty:Pervasives["^"]("'",ty));
    };

var
 print_out_class_params=
  function(ppf,tyl)
   {if(tyl)
     {return Format["fprintf"]
              (ppf,
               [0,
                [18,
                 [1,[0,[11,"<1>",0],"<1>"]],
                 [12,91,[15,[12,93,[17,0,[17,[0,"@ ",1,0],0]]]]]],
                "@[<1>[%a]@]@ "],
               print_list
                (type_parameter,
                 function(ppf$1)
                  {return Format["fprintf"](ppf$1,[0,[11,", ",0],", "]);}),
               tyl);
      }
    else
     {return 0;}
    };

var
 print_out_class_type=
  function(ppf,param)
   {switch(param)
     {case 0:
       var
        pr_tyl=
         function(ppf$1,tyl)
          {if(tyl)
            {return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [18,
                        [1,[0,[11,"<1>",0],"<1>"]],
                        [12,91,[15,[12,93,[17,0,[17,[0,"@ ",1,0],0]]]]]],
                       "@[<1>[%a]@]@ "],
                      print_typlist(out_type[1],","),
                      tyl);
             }
           else
            {return 0;}
           };
       
       return Format["fprintf"]
               (ppf,
                [0,[18,[1,[0,0,""]],[15,[15,[17,0,0]]]],"@[%a%a@]"],
                pr_tyl,
                param[2],
                print_ident,
                param[1]);
       
      case 1:
       var lab=param[1];
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,0,""]],
                  [2,0,[15,[11," ->",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                 "@[%s%a ->@ %a@]"],
                "unknown primitive:caml_string_notequal"
                 ?Pervasives["^"](lab,":")
                 :"",
                print_out_type_2,
                param[2],
                print_out_class_type,
                param[3]);
       
      case 2:
       var
        pr_param=
         function(ppf$1,param$1)
          {if(param$1)
            {return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [17,
                        [0,"@ ",1,0],
                        [18,[1,[0,0,""]],[12,40,[15,[12,41,[17,0,0]]]]]],
                       "@ @[(%a)@]"],
                      out_type[1],
                      param$1[1]);
             }
           else
            {return 0;}
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [11,
                    "object",
                    [15,
                     [17,
                      0,
                      [17,
                       [0,"@ ",1,0],
                       [15,[17,[0,"@;<1 -2>",1,-2],[11,"end",[17,0,0]]]]]]]]]],
                 "@[<hv 2>@[<2>object%a@]@ %a@;<1 -2>end@]"],
                pr_param,
                param[1],
                print_list
                 (print_out_class_sig_item,
                  function(ppf$1)
                   {return Format["fprintf"]
                            (ppf$1,[0,[17,[0,"@ ",1,0],0],"@ "]);
                    }),
                param[2]);
       
      }
    };

var
 print_out_class_sig_item=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "constraint ",
                   [15,[11," =",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                 "@[<2>constraint %a =@ %a@]"],
                out_type[1],
                param[1],
                out_type[1],
                param[2]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "method ",
                   [2,0,[2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
                 "@[<2>method %s%s%s :@ %a@]"],
                param[2]?"private ":"",
                param[3]?"virtual ":"",
                param[1],
                out_type[1],
                param[4]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "val ",
                   [2,0,[2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]],
                 "@[<2>val %s%s%s :@ %a@]"],
                param[2]?"mutable ":"",
                param[3]?"virtual ":"",
                param[1],
                out_type[1],
                param[4]);
       
      }
    };

var out_class_type=[0,print_out_class_type];

var
 out_module_type=
  [0,
   function(param){return Pervasives["failwith"]("Oprint.out_module_type");}];

var
 out_sig_item=
  [0,function(param){return Pervasives["failwith"]("Oprint.out_sig_item");}];

var
 out_signature=
  [0,function(param){return Pervasives["failwith"]("Oprint.out_signature");}];

var
 out_type_extension=
  [0,
   function(param)
    {return Pervasives["failwith"]("Oprint.out_type_extension");}];

var
 print_out_functor=
  function(ppf,m)
   {var exit;
    
    if(typeof m=="number")
     {switch(m){}}
    else
     {switch(m[0])
       {case 0:
         var match=m[2];
         
         if(match)
          {return Format["fprintf"]
                   (ppf,
                    [0,
                     [12,40,[2,0,[11," : ",[15,[11,") ",[15,0]]]]]],
                     "(%s : %a) %a"],
                    m[1],
                    print_out_module_type,
                    match[1],
                    print_out_functor,
                    m[3]);
           }
         else
          {return Format["fprintf"]
                   (ppf,[0,[11,"() ",[15,0]],"() %a"],print_out_functor,m[3]);
           }
         
        default:exit=12;}}
    
    switch(exit)
     {case 12:
       return Format["fprintf"]
               (ppf,
                [0,[11,"->",[17,[0,"@ ",1,0],[15,0]]],"->@ %a"],
                print_out_module_type,
                m);
       
      }
    };

var
 print_out_module_type=
  function(ppf,t)
   {if(typeof t=="number")
     {switch(t){case 0:return 0;}}
    else
     {switch(t[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,"functor",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                   "@[<2>functor@ %a@]"],
                  print_out_functor,
                  t);
         
        case 1:return Format["fprintf"](ppf,[0,[15,0],"%a"],print_ident,t[1]);
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                    [11,
                     "sig",
                     [17,
                      [0,"@ ",1,0],
                      [15,[17,[0,"@;<1 -2>",1,-2],[11,"end",[17,0,0]]]]]]],
                   "@[<hv 2>sig@ %a@;<1 -2>end@]"],
                  out_signature[1],
                  t[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"(module ",[15,[12,41,0]]],"(module %a)"],
                  print_ident,
                  t[1]);
         
        }}
    };

var
 print_out_signature=
  function(ppf,param)
   {if(param)
     {var item=param[1];
      
      var exit;
      
      if(param[2])
       {switch(item)
         {case 2:
           if(item[2]!=0)
            {exit=16;}
           else
            {var ext=item[1];
             
             var
              gather_extensions=
               function(acc,items)
                {var exit$1;
                 
                 if(items)
                  {var match=items[1];
                   
                   switch(match)
                    {case 2:
                      if(match[2]!=1)
                       {exit$1=15;}
                      else
                       {var ext$1=match[1];
                        
                        return gather_extensions
                                (/* :: */[0,/* tuple */[0,ext$1[1],ext$1[4],ext$1[5]],acc],
                                 items[2]);
                        }
                      
                     default:exit$1=15;}
                   }
                 else
                  {exit$1=15;}
                 
                 switch(exit$1)
                  {case 15:return /* tuple */[0,List["rev"](acc),items];}
                 };
             
             var
              match=
               gather_extensions
                (/* :: */[0,/* tuple */[0,ext[1],ext[4],ext[5]],0],param[2]);
             
             var te=/* record */[0,ext[2],ext[3],match[1],ext[6]];
             
             return Format["fprintf"]
                     (ppf,
                      [0,[15,[17,[0,"@ ",1,0],[15,0]]],"%a@ %a"],
                      out_type_extension[1],
                      te,
                      print_out_signature,
                      match[2]);
             }
           
          default:exit=16;}
        }
      else
       {return out_sig_item[1](ppf,item);}
      
      switch(exit)
       {case 16:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[17,[0,"@ ",1,0],[15,0]]],"%a@ %a"],
                  out_sig_item[1],
                  item,
                  print_out_signature,
                  param[2]);
         
        }
      }
    else
     {return 0;}
    };

var
 print_out_sig_item=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [2,
                   0,
                   [2,
                    0,
                    [17,
                     [0,"@ ",1,0],
                     [15,
                      [2,
                       0,
                       [17,[0,"@ ",1,0],[12,58,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]]]],
                 "@[<2>%s%s@ %a%s@ :@ %a@]"],
                (param[5]=2)?"and":"class",
                param[1]?" virtual":"",
                print_out_class_params,
                param[3],
                param[2],
                out_class_type[1],
                param[4]);
       
      case 1:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [2,
                   0,
                   [2,
                    0,
                    [17,
                     [0,"@ ",1,0],
                     [15,
                      [2,
                       0,
                       [17,[0,"@ ",1,0],[12,61,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]]]],
                 "@[<2>%s%s@ %a%s@ =@ %a@]"],
                (param[5]=2)?"and":"class type",
                param[1]?" virtual":"",
                print_out_class_params,
                param[3],
                param[2],
                out_class_type[1],
                param[4]);
       
      case 2:
       var ext=param[1];
       
       if(param[2]>=2)
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,"exception ",[15,[17,0,0]]]],
                   "@[<2>exception %a@]"],
                  print_out_constr,
                  /* tuple */[0,ext[1],ext[4],ext[5]]);
         }
       else
        {return print_out_extension_constructor(ppf,ext);}
       
      case 3:
       var mty=param[2];
       
       var name=param[1];
       
       if("unknown primitive:isint")
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,"module type ",[2,0,[17,0,0]]]],
                   "@[<2>module type %s@]"],
                  name);
         }
       else
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [11,
                     "module type ",
                     [2,0,[11," =",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                   "@[<2>module type %s =@ %a@]"],
                  name,
                  out_module_type[1],
                  mty);
         }
       
      case 4:
       var mty$1=param[2];
       
       var name$1=param[1];
       
       var exit;
       
       if(typeof mty$1=="number")
        {switch(mty$1){}}
       else
        {switch(mty$1[0])
          {case 3:
            return Format["fprintf"]
                    (ppf,
                     [0,
                      [18,
                       [1,[0,[11,"<2>",0],"<2>"]],
                       [11,
                        "module ",
                        [2,0,[11," =",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                      "@[<2>module %s =@ %a@]"],
                     name$1,
                     print_ident,
                     mty$1[1]);
            
           default:exit=22;}}
       
       switch(exit)
        {case 22:
          var $js;
          switch(param[3][0])
           {case 0:$js="module";case 1:$js="module rec";case 2:$js="and";}
          return Format["fprintf"]
                  (ppf,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [2,
                      0,
                      [12,32,[2,0,[11," :",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]],
                    "@[<2>%s %s :@ %a@]"],
                   $js,
                   name$1,
                   out_module_type[1],
                   mty$1);
          
         }
       
      case 5:
       var $js$1;
       switch(param[2][0])
        {case 0:$js$1="type nonrec";case 1:$js$1="type";case 2:$js$1="and";}
       return print_out_type_decl($js$1,ppf,param[1]);
       
      case 6:
       var prims=param[3];
       
       if(prims=0){var kwd="val";}else{var kwd="external";}
       
       var
        pr_prims=
         function(ppf$1,param$1)
          {if(param$1)
            {Format["fprintf"]
              (ppf$1,
               [0,[17,[0,"@ ",1,0],[11,'= "',[2,0,[12,34,0]]]],'@ = "%s"'],
               param$1[1]);
             return List["iter"]
                     (function(s)
                       {return Format["fprintf"]
                                (ppf$1,
                                 [0,[17,[0,"@ ",1,0],[12,34,[2,0,[12,34,0]]]],'@ "%s"'],
                                 s);
                        },
                      param$1[2]);
             }
           else
            {return 0;}
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [2,
                   0,
                   [12,32,[15,[11," :",[17,[0,"@ ",1,0],[15,[15,[17,0,0]]]]]]]]],
                 "@[<2>%s %a :@ %a%a@]"],
                kwd,
                value_ident,
                param[1],
                out_type[1],
                param[2],
                pr_prims,
                prims);
       
      }
    };

var
 print_out_type_decl=
  function(kwd,ppf,td)
   {var
     print_constraints=
      function(ppf$1)
       {return List["iter"]
                (function(param)
                  {return Format["fprintf"]
                           (ppf$1,
                            [0,
                             [17,
                              [0,"@ ",1,0],
                              [18,
                               [1,[0,[11,"<2>",0],"<2>"]],
                               [11,
                                "constraint ",
                                [15,[11," =",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]],
                             "@ @[<2>constraint %a =@ %a@]"],
                            out_type[1],
                            param[1],
                            out_type[1],
                            param[2]);
                   },
                 td[5]);
        };
    
    var
     type_defined=
      function(ppf$1)
       {var match=td[2];
        
        if(match)
         {if(match[2])
           {return Format["fprintf"]
                    (ppf$1,
                     [0,
                      [18,
                       [1,[0,0,""]],
                       [12,
                        40,
                        [18,
                         [1,[0,0,""]],
                         [15,[12,41,[17,0,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]]]],
                      "@[(@[%a)@]@ %s@]"],
                     print_list
                      (type_parameter,
                       function(ppf$2)
                        {return Format["fprintf"]
                                 (ppf$2,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "]);
                         }),
                     td[2],
                     td[1]);
            }
          else
           {return Format["fprintf"]
                    (ppf$1,
                     [0,
                      [18,[1,[0,0,""]],[15,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]],
                      "@[%a@ %s@]"],
                     type_parameter,
                     match[1],
                     td[1]);
            }
          }
        else
         {return Format["pp_print_string"](ppf$1,td[1]);}
        };
    
    var
     print_manifest=
      function(ppf$1,param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){}}
        else
         {switch(param[0])
           {case 4:
             return Format["fprintf"]
                     (ppf$1,
                      [0,[11," =",[17,[0,"@ ",1,0],[15,0]]]," =@ %a"],
                      out_type[1],
                      param[1]);
             
            default:exit=29;}}
        
        switch(exit){case 29:return 0;}
        };
    
    var
     print_name_params=
      function(ppf$1)
       {return Format["fprintf"]
                (ppf$1,
                 [0,[2,0,[12,32,[16,[15,0]]]],"%s %t%a"],
                 kwd,
                 type_defined,
                 print_manifest,
                 td[3]);
        };
    
    var match=td[3];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0]){case 4:var ty=match[2];default:exit=26;}}
    
    switch(exit){case 26:var ty=td[3];}
    
    var
     print_private=
      function(ppf$1,param)
       {if(param!=0)
         {return 0;}
        else
         {return Format["fprintf"](ppf$1,[0,[11," private",0]," private"]);}
        };
    
    var
     print_out_tkind=
      function(ppf$1,ty$1)
       {if(typeof ty$1=="number")
         {switch(ty$1)
           {case 0:return 0;
            case 1:return Format["fprintf"](ppf$1,[0,[11," = ..",0]," = .."]);
            }}
        else
         {switch(ty$1[0])
           {case 6:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [11,
                        " =",
                        [15,[11," {",[15,[17,[0,"@;<1 -2>",1,-2],[12,125,0]]]]]],
                       " =%a {%a@;<1 -2>}"],
                      print_private,
                      td[4],
                      print_list_init
                       (print_out_label,
                        function(ppf$2)
                         {return Format["fprintf"]
                                  (ppf$2,[0,[17,[0,"@ ",1,0],0],"@ "]);
                          }),
                      ty$1[1]);
             
            case 8:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [11," =",[15,[17,[0,"@;<1 2>",1,2],[15,0]]]],
                       " =%a@;<1 2>%a"],
                      print_private,
                      td[4],
                      print_list
                       (print_out_constr,
                        function(ppf$2)
                         {return Format["fprintf"]
                                  (ppf$2,[0,[17,[0,"@ ",1,0],[11,"| ",0]],"@ | "]);
                          }),
                      ty$1[1]);
             
            default:
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [11," =",[15,[17,[0,"@;<1 2>",1,2],[15,0]]]],
                       " =%a@;<1 2>%a"],
                      print_private,
                      td[4],
                      out_type[1],
                      ty$1);
             }}
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [18,
                [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
                [16,[15,[17,0,[16,[17,0,0]]]]]]],
              "@[<2>@[<hv 2>%t%a@]%t@]"],
             print_name_params,
             print_out_tkind,
             ty,
             print_constraints);
    };

var
 print_out_constr=
  function(ppf,param)
   {var ret_type_opt=param[3];
    
    var tyl=param[2];
    
    var name=param[1];
    
    if(ret_type_opt)
     {var ret_type=ret_type_opt[1];
      
      if(tyl)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [2,
                    0,
                    [11," :",[17,[0,"@ ",1,0],[15,[11," -> ",[15,[17,0,0]]]]]]]],
                  "@[<2>%s :@ %a -> %a@]"],
                 name,
                 print_typlist(print_simple_out_type," *"),
                 tyl,
                 print_simple_out_type,
                 ret_type);
        }
      else
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [2,0,[11," :",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                  "@[<2>%s :@ %a@]"],
                 name,
                 print_simple_out_type,
                 ret_type);
        }
      }
    else
     {if(tyl)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [2,0,[11," of",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                  "@[<2>%s of@ %a@]"],
                 name,
                 print_typlist(print_simple_out_type," *"),
                 tyl);
        }
      else
       {return Format["pp_print_string"](ppf,name);}
      }
    };

var
 print_out_label=
  function(ppf,param)
   {return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [2,0,[2,0,[11," :",[17,[0,"@ ",1,0],[15,[17,0,[12,59,0]]]]]]]],
              "@[<2>%s%s :@ %a@];"],
             param[2]?"mutable ":"",
             param[1],
             out_type[1],
             param[3]);
    };

var
 print_out_extension_constructor=
  function(ppf,ext)
   {var
     print_extended_type=
      function(ppf$1)
       {var
         print_type_parameter=
          function(ppf$2,ty)
           {return Format["fprintf"]
                    (ppf$2,
                     [0,[2,0,0],"%s"],
                     "unknown primitive:caml_string_equal"
                      ?ty
                      :Pervasives["^"]("'",ty));
            };
        
        var match=ext[3];
        
        if(match)
         {if(match[2])
           {return Format["fprintf"]
                    (ppf$1,
                     [0,
                      [18,
                       [1,[0,0,""]],
                       [12,
                        40,
                        [18,
                         [1,[0,0,""]],
                         [15,[12,41,[17,0,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]]]],
                      "@[(@[%a)@]@ %s@]"],
                     print_list
                      (print_type_parameter,
                       function(ppf$2)
                        {return Format["fprintf"]
                                 (ppf$2,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "]);
                         }),
                     ext[3],
                     ext[2]);
            }
          else
           {return Format["fprintf"]
                    (ppf$1,
                     [0,
                      [18,[1,[0,0,""]],[15,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]],
                      "@[%a@ %s@]"],
                     print_type_parameter,
                     match[1],
                     ext[2]);
            }
          }
        else
         {return Format["fprintf"](ppf$1,[0,[2,0,0],"%s"],ext[2]);}
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
               [11,
                "type ",
                [16,[11," +=",[2,0,[17,[0,"@;<1 2>",1,2],[15,[17,0,0]]]]]]]],
              "@[<hv 2>type %t +=%s@;<1 2>%a@]"],
             print_extended_type,
             (ext[6]=0)?" private":"",
             print_out_constr,
             /* tuple */[0,ext[1],ext[4],ext[5]]);
    };

var
 print_out_type_extension=
  function(ppf,te)
   {var
     print_extended_type=
      function(ppf$1)
       {var
         print_type_parameter=
          function(ppf$2,ty)
           {return Format["fprintf"]
                    (ppf$2,
                     [0,[2,0,0],"%s"],
                     "unknown primitive:caml_string_equal"
                      ?ty
                      :Pervasives["^"]("'",ty));
            };
        
        var match=te[2];
        
        if(match)
         {if(match[2])
           {return Format["fprintf"]
                    (ppf$1,
                     [0,
                      [18,
                       [1,[0,0,""]],
                       [12,
                        40,
                        [18,
                         [1,[0,0,""]],
                         [15,[12,41,[17,0,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]]]]]],
                      "@[(@[%a)@]@ %s@]"],
                     print_list
                      (print_type_parameter,
                       function(ppf$2)
                        {return Format["fprintf"]
                                 (ppf$2,[0,[12,44,[17,[0,"@ ",1,0],0]],",@ "]);
                         }),
                     te[2],
                     te[1]);
            }
          else
           {return Format["fprintf"]
                    (ppf$1,
                     [0,
                      [18,[1,[0,0,""]],[15,[17,[0,"@ ",1,0],[2,0,[17,0,0]]]]],
                      "@[%a@ %s@]"],
                     print_type_parameter,
                     match[1],
                     te[1]);
            }
          }
        else
         {return Format["fprintf"](ppf$1,[0,[2,0,0],"%s"],te[1]);}
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<hv 2>",0],"<hv 2>"]],
               [11,
                "type ",
                [16,[11," +=",[2,0,[17,[0,"@;<1 2>",1,2],[15,[17,0,0]]]]]]]],
              "@[<hv 2>type %t +=%s@;<1 2>%a@]"],
             print_extended_type,
             (te[4]=0)?" private":"",
             print_list
              (print_out_constr,
               function(ppf$1)
                {return Format["fprintf"]
                         (ppf$1,[0,[17,[0,"@ ",1,0],[11,"| ",0]],"@ | "]);
                 }),
             te[3]);
    };

out_module_type[1]=print_out_module_type,0;
out_signature[1]=print_out_signature,0;
out_sig_item[1]=print_out_sig_item,0;
out_type_extension[1]=print_out_type_extension,0;
var
 print_out_exception=
  function(ppf,exn,outv)
   {if(exn=Sys["Break"])
     {return Format["fprintf"]
              (ppf,[0,[11,"Interrupted.",[17,4,0]],"Interrupted.@."]);
      }
    else
     {if(exn=Out_of_memory)
       {return Format["fprintf"]
                (ppf,
                 [0,
                  [11,"Out of memory during evaluation.",[17,4,0]],
                  "Out of memory during evaluation.@."]);
        }
      else
       {if(exn=Stack_overflow)
         {return Format["fprintf"]
                  (ppf,
                   [0,
                    [11,
                     "Stack overflow during evaluation (looping recursion?).",
                     [17,4,0]],
                    "Stack overflow during evaluation (looping recursion?).@."]);
          }
        else
         {return Format["fprintf"]
                  (ppf,
                   [0,
                    [18,
                     [1,[0,0,""]],
                     [11,
                      "Exception:",
                      [17,[0,"@ ",1,0],[15,[12,46,[17,0,[17,4,0]]]]]]],
                    "@[Exception:@ %a.@]@."],
                   out_value[1],
                   outv);
          }
        }
      }
    };

var
 print_items=
  function(ppf,param)
   {if(param)
     {var match=param[1];
      
      var tree=match[1];
      
      var exit;
      
      switch(tree)
       {case 2:
         if(tree[2]!=0)
          {exit=7;}
         else
          {if(match[2])
            {exit=7;}
           else
            {var ext=tree[1];
             
             var
              gather_extensions=
               function(acc,items)
                {var exit$1;
                 
                 if(items)
                  {var match$1=items[1];
                   
                   var match$2=match$1[1];
                   
                   switch(match$2)
                    {case 2:
                      if(match$2[2]!=1)
                       {exit$1=6;}
                      else
                       {if(match$1[2])
                         {exit$1=6;}
                        else
                         {var ext$1=match$2[1];
                          
                          return gather_extensions
                                  (/* :: */[0,/* tuple */[0,ext$1[1],ext$1[4],ext$1[5]],acc],
                                   items[2]);
                          }
                        }
                      
                     default:exit$1=6;}
                   }
                 else
                  {exit$1=6;}
                 
                 switch(exit$1)
                  {case 6:return /* tuple */[0,List["rev"](acc),items];}
                 };
             
             var
              match$1=
               gather_extensions
                (/* :: */[0,/* tuple */[0,ext[1],ext[4],ext[5]],0],param[2]);
             
             var items=match$1[2];
             
             var te=/* record */[0,ext[2],ext[3],match$1[1],ext[6]];
             
             Format["fprintf"]
              (ppf,
               [0,[18,[1,[0,0,""]],[15,[17,0,0]]],"@[%a@]"],
               out_type_extension[1],
               te);
             if(items!=0)
              {return Format["fprintf"]
                       (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],print_items,items);
               }
             else
              {return 0;}
             }
           }
         
        default:exit=7;}
      
      switch(exit)
       {case 7:
         var items$1=param[2];
         
         var valopt=match[2];
         
         if(valopt)
          {Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [15,[11," =",[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
              "@[<2>%a =@ %a@]"],
             out_sig_item[1],
             tree,
             out_value[1],
             valopt[1])}
         else
          {Format["fprintf"]
            (ppf,
             [0,[18,[1,[0,0,""]],[15,[17,0,0]]],"@[%a@]"],
             out_sig_item[1],
             tree)}
         
         if(items$1!=0)
          {return Format["fprintf"]
                   (ppf,
                    [0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],
                    print_items,
                    items$1);
           }
         else
          {return 0;}
         
        }
      }
    else
     {return 0;}
    };

var
 print_out_phrase=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,0,""]],
                  [11,
                   "- : ",
                   [15,
                    [17,
                     [0,"@ ",1,0],
                     [12,61,[17,[0,"@ ",1,0],[15,[17,0,[17,4,0]]]]]]]]],
                 "@[- : %a@ =@ %a@]@."],
                out_type[1],
                param[2],
                out_value[1],
                param[1]);
       
      case 1:
       var items=param[1];
       
       if(items)
        {return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,[1,[0,[11,"<v>",0],"<v>"]],[15,[17,0,[17,4,0]]]],
                   "@[<v>%a@]@."],
                  print_items,
                  items);
         }
       else
        {return 0;}
       
      case 2:
       var match=param[1];return print_out_exception(ppf,match[1],match[2]);
      }
    };

var out_phrase=[0,print_out_phrase];

module["exports"]=
{"out_value":out_value,
 "out_type":out_type,
 "out_class_type":out_class_type,
 "out_module_type":out_module_type,
 "out_sig_item":out_sig_item,
 "out_signature":out_signature,
 "out_type_extension":out_type_extension,
 "out_phrase":out_phrase,
 "parenthesized_ident":parenthesized_ident};

