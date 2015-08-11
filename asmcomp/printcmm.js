// Generated CODE, PLEASE EDIT WITH CARE 

var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Debuginfo=require("Debuginfo");
var Format=require("Format");
var Lambda=require("Lambda");
var Ident=require("Ident");


var
 machtype_component=
  function(ppf,param)
   {switch(param[0])
     {case 0:return Format["fprintf"](ppf,[0,[11,"addr",0],"addr"]);
      case 1:return Format["fprintf"](ppf,[0,[11,"int",0],"int"]);
      case 2:return Format["fprintf"](ppf,[0,[11,"float",0],"float"]);
      }
    };

var
 machtype=
  function(ppf,mty)
   {var n=mty["length"];
    
    if(n!=0)
     {machtype_component(ppf,mty[0]);
      for(var i=1;i<=n-1;i++)
       {Format["fprintf"]
         (ppf,[0,[12,42,[15,0]],"*%a"],machtype_component,mty[i])}
      }
    else
     {return Format["fprintf"](ppf,[0,[11,"unit",0],"unit"]);}
    };

var
 comparison=
  function(param)
   {switch(param[0])
     {case 0:return "==";
      case 1:return "!=";
      case 2:return "<";
      case 3:return "<=";
      case 4:return ">";
      case 5:return ">=";
      }
    };

var
 chunk=
  function(param)
   {switch(param[0])
     {case 0:return "unsigned int8";
      case 1:return "signed int8";
      case 2:return "unsigned int16";
      case 3:return "signed int16";
      case 4:return "unsigned int32";
      case 5:return "signed int32";
      case 6:return "";
      case 7:return "float32";
      case 8:return "float64";
      case 9:return "float64u";
      }
    };

var
 operation=
  function(param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return "alloc";
        case 1:return "+";
        case 2:return "-";
        case 3:return "*";
        case 4:return "*h";
        case 5:return "/";
        case 6:return "mod";
        case 7:return "and";
        case 8:return "or";
        case 9:return "xor";
        case 10:return "<<";
        case 11:return ">>u";
        case 12:return ">>s";
        case 13:return "+a";
        case 14:return "-a";
        case 15:return "~f";
        case 16:return "absf";
        case 17:return "+f";
        case 18:return "-f";
        case 19:return "*f";
        case 20:return "/f";
        case 21:return "floatofint";
        case 22:return "intoffloat";
        }}
    else
     {switch(param[0])
       {case 0:return Pervasives["^"]("app",Debuginfo["to_string"](param[2]));
        case 1:
         return Printf["sprintf"]
                 ([0,[11,'extcall "',[2,0,[12,34,[2,0,0]]]],'extcall "%s"%s'],
                  param[1],
                  Debuginfo["to_string"](param[4]));
         
        case 2:
         var c=param[1];
         
         if(c!=6)
          {return Printf["sprintf"]
                   ([0,[11,"load ",[2,0,0]],"load %s"],chunk(c));
           }
         else
          {return "load";}
         
        case 3:
         var c$1=param[1];
         
         if(c$1!=6)
          {return Printf["sprintf"]
                   ([0,[11,"store ",[2,0,0]],"store %s"],chunk(c$1));
           }
         else
          {return "store";}
         
        case 4:return comparison(param[1]);
        case 5:
         return Printf["sprintf"]
                 ([0,[2,0,[12,97,0]],"%sa"],comparison(param[1]));
         
        case 6:
         return Printf["sprintf"]
                 ([0,[2,0,[12,102,0]],"%sf"],comparison(param[1]));
         
        case 7:
         return Pervasives["^"]
                 (Lambda["raise_kind"](param[1]),
                  Debuginfo["to_string"](param[2]));
         
        case 8:
         return Pervasives["^"]("checkbound",Debuginfo["to_string"](param[1]));
         
        }}
    };

var
 expr=
  function(ppf,param)
   {var exit;
    
    switch(param)
     {case 0:return Format["fprintf"](ppf,[0,[4,3,0,0,0],"%i"],param[1]);
      case 1:exit=18;
      case 2:return Format["fprintf"](ppf,[0,[8,15,0,0,0],"%F"],param[1]);
      case 3:
       return Format["fprintf"]
               (ppf,[0,[12,34,[2,0,[12,34,0]]],'"%s"'],param[1]);
       
      case 4:
       return Format["fprintf"](ppf,[0,[4,3,0,0,[12,97,0]],"%ia"],param[1]);
      case 5:
       return Format["fprintf"]
               (ppf,
                [0,[2,0,[12,97,0]],"%sa"],
                Nativeint["to_string"](param[1]));
       
      case 6:exit=18;
      case 7:return Ident["print"](ppf,param[1]);
      case 8:
       var body=param[3];
       
       var def=param[2];
       
       var id=param[1];
       
       switch(body)
        {case 8:
          var
           print_binding=
            function(id$1,ppf$1,def$1)
             {return Format["fprintf"]
                      (ppf$1,
                       [0,
                        [18,
                         [1,[0,[11,"<2>",0],"<2>"]],
                         [15,[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                        "@[<2>%a@ %a@]"],
                       Ident["print"],
                       id$1,
                       expr,
                       def$1);
              };
          
          var
           in_part=
            function(ppf$1,exp)
             {switch(exp)
               {case 8:
                 Format["fprintf"]
                  (ppf$1,
                   [0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],
                   print_binding(exp[1]),
                   exp[2]);
                 return in_part(ppf$1,exp[3]);
                 
                default:return exp;}
              };
          
          Format["fprintf"]
           (ppf,
            [0,
             [18,
              [1,[0,[11,"<2>",0],"<2>"]],
              [11,
               "(let",
               [17,
                [0,"@ ",1,0],
                [18,[1,[0,[11,"<1>",0],"<1>"]],[12,40,[15,0]]]]]],
             "@[<2>(let@ @[<1>(%a"],
            print_binding(id),
            def);
          var exp=in_part(ppf,body);
          
          return Format["fprintf"]
                  (ppf,
                   [0,
                    [12,41,[17,0,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]],
                    ")@]@ %a)@]"],
                   sequence,
                   exp);
          
         default:
          return Format["fprintf"]
                  (ppf,
                   [0,
                    [18,
                     [1,[0,[11,"<2>",0],"<2>"]],
                     [11,
                      "(let",
                      [17,
                       [0,"@ ",1,0],
                       [18,
                        [1,[0,[11,"<2>",0],"<2>"]],
                        [15,
                         [17,
                          [0,"@ ",1,0],
                          [15,[17,0,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]],
                    "@[<2>(let@ @[<2>%a@ %a@]@ %a)@]"],
                   Ident["print"],
                   id,
                   expr,
                   def,
                   sequence,
                   body);
          }
       
      case 9:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(assign ",
                   [18,
                    [1,[0,[11,"<2>",0],"<2>"]],
                    [15,[17,[0,"@ ",1,0],[15,[17,0,[12,41,[17,0,0]]]]]]]]],
                 "@[<2>(assign @[<2>%a@ %a@])@]"],
                Ident["print"],
                param[1],
                expr,
                param[2]);
       
      case 10:
       var
        tuple=
         function(ppf$1,el)
          {var first=[0,1];
           
           return List["iter"]
                   (function(e)
                     {if(first[1])
                       {first[1]=0,0}
                      else
                       {Format["fprintf"](ppf$1,[0,[17,[0,"@ ",1,0],0],"@ "])}
                      
                      return expr(ppf$1,e);
                      },
                    el);
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,[1,[0,[11,"<1>",0],"<1>"]],[12,91,[15,[12,93,[17,0,0]]]]],
                 "@[<1>[%a]@]"],
                tuple,
                param[1]);
       
      case 11:
       var op=param[1];
       
       Format["fprintf"]
        (ppf,
         [0,[18,[1,[0,[11,"<2>",0],"<2>"]],[12,40,[2,0,0]]],"@[<2>(%s"],
         operation(op));
       List["iter"]
        (function(e)
          {return Format["fprintf"]
                   (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],expr,e);
           },
         param[2]);
       var exit$1;
       
       if(typeof op=="number")
        {switch(op){}}
       else
        {switch(op[0])
          {case 0:
            Format["fprintf"]
             (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],machtype,op[1]);
           case 1:
            Format["fprintf"]
             (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],machtype,op[2]);
           default:exit$1=13;}}
       
       switch(exit$1){case 13:}
       
       return Format["fprintf"](ppf,[0,[12,41,[17,0,0]],")@]"]);
       
      case 12:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(seq",
                   [17,
                    [0,"@ ",1,0],
                    [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                 "@[<2>(seq@ %a@ %a)@]"],
                sequence,
                param[1],
                sequence,
                param[2]);
       
      case 13:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(if",
                   [17,
                    [0,"@ ",1,0],
                    [15,
                     [17,
                      [0,"@ ",1,0],
                      [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]],
                 "@[<2>(if@ %a@ %a@ %a)@]"],
                expr,
                param[1],
                expr,
                param[2],
                expr,
                param[3]);
       
      case 14:
       var cases=param[3];
       
       var index=param[2];
       
       var
        print_case=
         function(i,ppf$1)
          {for(var j=0;j<=index["length"]-1;j++)
            {if(index[j]=i)
              {Format["fprintf"]
                (ppf$1,[0,[11,"case ",[4,3,0,0,[12,58,0]]],"case %i:"],j)}
             else
              {}
             }
           };
       
       var
        print_cases=
         function(ppf$1)
          {for(var i=0;i<=cases["length"]-1;i++)
            {Format["fprintf"]
              (ppf$1,
               [0,
                [17,
                 [0,"@ ",1,0],
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [16,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                "@ @[<2>%t@ %a@]"],
               print_case(i),
               sequence,
               cases[i])}
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<v 0>",0],"<v 0>"]],
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [11,
                    "(switch",
                    [17,
                     [0,"@ ",1,0],
                     [15,[17,[0,"@ ",1,0],[17,0,[16,[12,41,[17,0,0]]]]]]]]]],
                 "@[<v 0>@[<2>(switch@ %a@ @]%t)@]"],
                expr,
                param[1],
                print_cases);
       
      case 15:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,"(loop",[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]],
                 "@[<2>(loop@ %a)@]"],
                sequence,
                param[1]);
       
      case 16:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(catch",
                   [17,
                    [0,"@ ",1,0],
                    [15,
                     [17,
                      [0,"@;<1 -2>",1,-2],
                      [11,
                       "with(",
                       [4,
                        0,
                        0,
                        0,
                        [15,[12,41,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                 "@[<2>(catch@ %a@;<1 -2>with(%d%a)@ %a)@]"],
                sequence,
                param[3],
                param[1],
                function(ppf$1,ids)
                 {return List["iter"]
                          (function(id$1)
                            {return Format["fprintf"]
                                     (ppf$1,[0,[12,32,[15,0]]," %a"],Ident["print"],id$1);
                             },
                           ids);
                  },
                param[2],
                sequence,
                param[4]);
       
      case 17:
       Format["fprintf"]
        (ppf,
         [0,
          [18,[1,[0,[11,"<2>",0],"<2>"]],[11,"(exit ",[4,0,0,0,0]]],
          "@[<2>(exit %d"],
         param[1]);
       List["iter"]
        (function(e)
          {return Format["fprintf"]
                   (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],expr,e);
           },
         param[2]);
       return Format["fprintf"](ppf,[0,[12,41,[17,0,0]],")@]"]);
       
      case 18:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(try",
                   [17,
                    [0,"@ ",1,0],
                    [15,
                     [17,
                      [0,"@;<1 -2>",1,-2],
                      [11,
                       "with",
                       [17,
                        [0,"@ ",1,0],
                        [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]],
                 "@[<2>(try@ %a@;<1 -2>with@ %a@ %a)@]"],
                sequence,
                param[1],
                Ident["print"],
                param[2],
                sequence,
                param[3]);
       
      }
    
    switch(exit)
     {case 18:
       return Format["fprintf"]
               (ppf,[0,[2,0,0],"%s"],Nativeint["to_string"](param[1]));
       
      }
    };

var
 sequence=
  function(ppf,e)
   {switch(e)
     {case 12:
       return Format["fprintf"]
               (ppf,
                [0,[15,[17,[0,"@ ",1,0],[15,0]]],"%a@ %a"],
                sequence,
                e[1],
                sequence,
                e[2]);
       
      default:return expression(ppf,e);}
    };

var
 expression=
  function(ppf,e){return Format["fprintf"](ppf,[0,[15,0],"%a"],expr,e);};

var
 fundecl=
  function(ppf,f)
   {var
     print_cases=
      function(ppf$1,cases)
       {var first=[0,1];
        
        return List["iter"]
                (function(param)
                  {if(first[1])
                    {first[1]=0,0}
                   else
                    {Format["fprintf"](ppf$1,[0,[17,[0,"@ ",1,0],0],"@ "])}
                   
                   return Format["fprintf"]
                           (ppf$1,
                            [0,[15,[11,": ",[15,0]]],"%a: %a"],
                            Ident["print"],
                            param[1],
                            machtype,
                            param[2]);
                   },
                 cases);
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<1>",0],"<1>"]],
               [11,
                "(function",
                [2,
                 0,
                 [12,
                  32,
                  [2,
                   0,
                   [17,
                    [0,"@;<1 4>",1,4],
                    [18,
                     [1,[0,[11,"<1>",0],"<1>"]],
                     [12,
                      40,
                      [15,
                       [12,
                        41,
                        [17,
                         0,
                         [17,
                          [0,"@ ",1,0],
                          [18,[1,[0,0,""]],[15,[17,0,[12,41,[17,0,[17,4,0]]]]]]]]]]]]]]]]]],
              "@[<1>(function%s %s@;<1 4>@[<1>(%a)@]@ @[%a@])@]@."],
             Debuginfo["to_string"](f[5]),
             f[1],
             print_cases,
             f[2],
             sequence,
             f[3]);
    };

var
 data_item=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,[0,[12,34,[2,0,[11,'":',0]]],'"%s":'],param[1]);
       
      case 1:
       return Format["fprintf"]
               (ppf,[0,[12,76,[4,3,0,0,[12,58,0]]],"L%i:"],param[1]);
       
      case 2:
       return Format["fprintf"]
               (ppf,
                [0,[11,'global "',[2,0,[12,34,0]]],'global "%s"'],
                param[1]);
       
      case 3:
       return Format["fprintf"]
               (ppf,[0,[11,"byte ",[4,3,0,0,0]],"byte %i"],param[1]);
       
      case 4:
       return Format["fprintf"]
               (ppf,[0,[11,"int16 ",[4,3,0,0,0]],"int16 %i"],param[1]);
       
      case 5:
       return Format["fprintf"]
               (ppf,
                [0,[11,"int32 ",[2,0,0]],"int32 %s"],
                Nativeint["to_string"](param[1]));
       
      case 6:
       return Format["fprintf"]
               (ppf,
                [0,[11,"int ",[2,0,0]],"int %s"],
                Nativeint["to_string"](param[1]));
       
      case 7:
       return Format["fprintf"]
               (ppf,[0,[11,"single ",[8,15,0,0,0]],"single %F"],param[1]);
       
      case 8:
       return Format["fprintf"]
               (ppf,[0,[11,"double ",[8,15,0,0,0]],"double %F"],param[1]);
       
      case 9:
       return Format["fprintf"]
               (ppf,[0,[11,'addr "',[2,0,[12,34,0]]],'addr "%s"'],param[1]);
       
      case 10:
       return Format["fprintf"]
               (ppf,[0,[11,"addr L",[4,3,0,0,0]],"addr L%i"],param[1]);
       
      case 11:
       return Format["fprintf"]
               (ppf,
                [0,[11,'string "',[2,0,[12,34,0]]],'string "%s"'],
                param[1]);
       
      case 12:
       return Format["fprintf"]
               (ppf,[0,[11,"skip ",[4,3,0,0,0]],"skip %i"],param[1]);
       
      case 13:
       return Format["fprintf"]
               (ppf,[0,[11,"align ",[4,3,0,0,0]],"align %i"],param[1]);
       
      }
    };

var
 data=
  function(ppf,dl)
   {var
     items=
      function(ppf$1)
       {return List["iter"]
                (function(d)
                  {return Format["fprintf"]
                           (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],data_item,d);
                   },
                 dl);
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
               [11,"(data",[16,[12,41,[17,0,0]]]]],
              "@[<hv 1>(data%t)@]"],
             items);
    };

var
 phrase=
  function(ppf,param)
   {switch(param)
     {case 0:return fundecl(ppf,param[1]);case 1:return data(ppf,param[1]);}
    };

module["exports"]=
{"machtype_component":machtype_component,
 "machtype":machtype,
 "comparison":comparison,
 "chunk":chunk,
 "operation":operation,
 "expression":expression,
 "fundecl":fundecl,
 "data":data,
 "phrase":phrase};

