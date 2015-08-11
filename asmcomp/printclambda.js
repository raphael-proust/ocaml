// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Printlambda=require("Printlambda");
var List=require("List");
var Format=require("Format");
var Ident=require("Ident");


var
 structured_constant=
  function(ppf,param)
   {switch(param)
     {case 0:return Format["fprintf"](ppf,[0,[8,15,0,0,0],"%F"],param[1]);
      case 1:
       return Format["fprintf"](ppf,[0,[5,0,0,0,[12,108,0]],"%ldl"],param[1]);
      case 2:
       return Format["fprintf"](ppf,[0,[7,0,0,0,[12,76,0]],"%LdL"],param[1]);
      case 3:
       return Format["fprintf"](ppf,[0,[6,0,0,0,[12,110,0]],"%ndn"],param[1]);
      case 4:
       Format["fprintf"]
        (ppf,[0,[11,"block(",[4,3,0,0,0]],"block(%i"],param[1]);
       List["iter"]
        (function(u)
          {return Format["fprintf"](ppf,[0,[12,44,[15,0]],",%a"],uconstant,u);
           },
         param[2]);
       return Format["fprintf"](ppf,[0,[12,41,0],")"]);
       
      case 5:
       var match=param[1];
       
       if(match)
        {Format["fprintf"]
          (ppf,[0,[11,"floatarray(",[8,15,0,0,0]],"floatarray(%F"],match[1]);
         List["iter"]
          (function(f)
            {return Format["fprintf"](ppf,[0,[12,44,[8,15,0,0,0]],",%F"],f);},
           match[2]);
         return Format["fprintf"](ppf,[0,[12,41,0],")"]);
         }
       else
        {return Format["fprintf"]
                 (ppf,[0,[11,"floatarray()",0],"floatarray()"]);
         }
       
      case 6:return Format["fprintf"](ppf,[0,[3,0,0],"%S"],param[1]);
      }
    };

var
 uconstant=
  function(ppf,param)
   {switch(param)
     {case 0:
       return Format["fprintf"]
               (ppf,
                [0,[3,0,[12,61,[15,0]]],"%S=%a"],
                param[1],
                structured_constant,
                param[2]);
       
      case 1:return Format["fprintf"](ppf,[0,[4,3,0,0,0],"%i"],param[1]);
      case 2:
       return Format["fprintf"](ppf,[0,[4,3,0,0,[12,97,0]],"%ia"],param[1]);
      }
    };

var
 lam=
  function(ppf,param)
   {switch(param)
     {case 0:return Ident["print"](ppf,param[1]);
      case 1:return uconstant(ppf,param[1]);
      case 2:
       var
        lams=
         function(ppf$1,largs)
          {return List["iter"]
                   (function(l)
                     {return Format["fprintf"]
                              (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                      },
                    largs);
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(apply*",
                   [17,[0,"@ ",1,0],[2,0,[12,32,[15,[12,41,[17,0,0]]]]]]]],
                 "@[<2>(apply*@ %s %a)@]"],
                param[1],
                lams,
                param[2]);
       
      case 3:
       var
        lams$1=
         function(ppf$1,largs)
          {return List["iter"]
                   (function(l)
                     {return Format["fprintf"]
                              (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                      },
                    largs);
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,"(apply",[17,[0,"@ ",1,0],[15,[15,[12,41,[17,0,0]]]]]]],
                 "@[<2>(apply@ %a%a)@]"],
                lam,
                param[1],
                lams$1,
                param[2]);
       
      case 4:
       var
        idents=
         function(ppf$1)
          {return List["iter"]
                   (Format["fprintf"]
                     (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],Ident["print"]));
           };
       
       var
        one_fun=
         function(ppf$1,f)
          {return Format["fprintf"]
                   (ppf$1,
                    [0,
                     [18,
                      [1,[0,[11,"<2>",0],"<2>"]],
                      [11,
                       "(fun",
                       [17,
                        [0,"@ ",1,0],
                        [2,
                         0,
                         [17,
                          [0,"@ ",1,0],
                          [4,
                           0,
                           0,
                           0,
                           [12,
                            32,
                            [18,
                             [1,[0,[11,"<2>",0],"<2>"]],
                             [15,
                              [17,
                               0,
                               [17,
                                [0,"@ ",1,0],
                                [18,[1,[0,[11,"<2>",0],"<2>"]],[15,[17,0,[17,0,[12,41,0]]]]]]]]]]]]]]]],
                     "@[<2>(fun@ %s@ %d @[<2>%a@]@ @[<2>%a@]@])"],
                    f[1],
                    f[2],
                    idents,
                    f[3],
                    lam,
                    f[4]);
           };
       
       var
        funs=
         function(ppf$1)
          {return List["iter"]
                   (Format["fprintf"]
                     (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],one_fun));
           };
       
       var
        lams$2=
         function(ppf$1)
          {return List["iter"]
                   (Format["fprintf"]
                     (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam));
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(closure",
                   [17,[0,"@ ",1,0],[15,[12,32,[15,[12,41,[17,0,0]]]]]]]],
                 "@[<2>(closure@ %a %a)@]"],
                funs,
                param[1],
                lams$2,
                param[2]);
       
      case 5:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,"(offset ",[15,[12,32,[4,0,0,0,[12,41,[17,0,0]]]]]]],
                 "@[<2>(offset %a %d)@]"],
                lam,
                param[1],
                param[2]);
       
      case 6:
       var
        letbody=
         function(ul)
          {switch(ul)
            {case 6:
              Format["fprintf"]
               (ppf,
                [0,
                 [17,
                  [0,"@ ",1,0],
                  [18,
                   [1,[0,[11,"<2>",0],"<2>"]],
                   [15,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]],
                 "@ @[<2>%a@ %a@]"],
                Ident["print"],
                ul[1],
                lam,
                ul[2]);
              return letbody(ul[3]);
              
             default:return ul;}
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
             [18,
              [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
              [12,
               40,
               [18,
                [1,[0,[11,"<2>",0],"<2>"]],
                [15,[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]]]]],
          "@[<2>(let@ @[<hv 1>(@[<2>%a@ %a@]"],
         Ident["print"],
         param[1],
         lam,
         param[2]);
       var expr=letbody(param[3]);
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [12,41,[17,0,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]],
                 ")@]@ %a)@]"],
                lam,
                expr);
       
      case 7:
       var
        bindings=
         function(ppf$1,id_arg_list)
          {var spc=[0,0];
           
           return List["iter"]
                   (function(param$1)
                     {if(spc[1])
                       {Format["fprintf"](ppf$1,[0,[17,[0,"@ ",1,0],0],"@ "])}
                      else
                       {spc[1]=1,0}
                      
                      return Format["fprintf"]
                              (ppf$1,
                               [0,
                                [18,
                                 [1,[0,[11,"<2>",0],"<2>"]],
                                 [15,[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                                "@[<2>%a@ %a@]"],
                               Ident["print"],
                               param$1[1],
                               lam,
                               param$1[2]);
                      },
                    id_arg_list);
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(letrec",
                   [17,
                    [0,"@ ",1,0],
                    [12,
                     40,
                     [18,
                      [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                      [15,[17,0,[12,41,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]],
                 "@[<2>(letrec@ (@[<hv 1>%a@])@ %a)@]"],
                bindings,
                param[1],
                lam,
                param[2]);
       
      case 8:
       var
        lams$3=
         function(ppf$1,largs)
          {return List["iter"]
                   (function(l)
                     {return Format["fprintf"]
                              (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                      },
                    largs);
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [12,40,[15,[15,[12,41,[17,0,0]]]]]],
                 "@[<2>(%a%a)@]"],
                Printlambda["primitive"],
                param[1],
                lams$3,
                param[2]);
       
      case 9:
       var
        print_case=
         function(tag,index,i,ppf$1)
          {for(var j=0;j<=index["length"]-1;j++)
            {if("unknown primitive:caml_equal")
              {Format["fprintf"]
                (ppf$1,
                 [0,
                  [11,"case ",[2,0,[12,32,[4,3,0,0,[12,58,0]]]]],
                  "case %s %i:"],
                 tag,
                 j)}
             else
              {}
             }
           };
       
       var
        print_cases=
         function(tag,index,cases,ppf$1)
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
               print_case(tag,index,i),
               sequence,
               cases[i])}
           };
       
       var
        $$switch=
         function(ppf$1,sw)
          {print_cases("int",sw[1],sw[2],ppf$1);
           return print_cases("tag",sw[3],sw[4],ppf$1);
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
                     [15,[17,[0,"@ ",1,0],[17,0,[15,[12,41,[17,0,0]]]]]]]]]],
                 "@[<v 0>@[<2>(switch@ %a@ @]%a)@]"],
                lam,
                param[1],
                $$switch,
                param[2]);
       
      case 10:
       var d=param[3];
       
       var
        $$switch$1=
         function(ppf$1,sw)
          {var spc=[0,0];
           
           List["iter"]
            (function(param$1)
              {if(spc[1])
                {Format["fprintf"](ppf$1,[0,[17,[0,"@ ",1,0],0],"@ "])}
               else
                {spc[1]=1,0}
               
               return Format["fprintf"]
                       (ppf$1,
                        [0,
                         [18,
                          [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                          [11,
                           'case "',
                           [2,0,[11,'":',[17,[0,"@ ",1,0],[15,[17,0,0]]]]]]],
                         '@[<hv 1>case "%s":@ %a@]'],
                        $$String["escaped"](param$1[1]),
                        lam,
                        param$1[2]);
               },
             sw);
           if(d)
            {if(spc[1])
              {Format["fprintf"](ppf$1,[0,[17,[0,"@ ",1,0],0],"@ "])}
             else
              {spc[1]=1,0}
             
             return Format["fprintf"]
                     (ppf$1,
                      [0,
                       [18,
                        [1,[0,[11,"<hv 1>",0],"<hv 1>"]],
                        [11,"default:",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                       "@[<hv 1>default:@ %a@]"],
                      lam,
                      d[1]);
             }
           else
            {return 0;}
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<1>",0],"<1>"]],
                  [11,
                   "(switch ",
                   [15,
                    [17,
                     [0,"@ ",1,0],
                     [18,
                      [1,[0,[11,"<v 0>",0],"<v 0>"]],
                      [15,[17,0,[12,41,[17,0,0]]]]]]]]],
                 "@[<1>(switch %a@ @[<v 0>%a@])@]"],
                lam,
                param[1],
                $$switch$1,
                param[2]);
       
      case 11:
       var
        lams$4=
         function(ppf$1,largs)
          {return List["iter"]
                   (function(l)
                     {return Format["fprintf"]
                              (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                      },
                    largs);
           };
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(exit",
                   [17,[0,"@ ",1,0],[4,0,0,0,[15,[12,41,[17,0,0]]]]]]],
                 "@[<2>(exit@ %d%a)@]"],
                param[1],
                lams$4,
                param[2]);
       
      case 12:
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
                      [0,"@;<1 -1>",1,-1],
                      [11,
                       "with (",
                       [4,
                        0,
                        0,
                        0,
                        [15,[12,41,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                 "@[<2>(catch@ %a@;<1 -1>with (%d%a)@ %a)@]"],
                lam,
                param[3],
                param[1],
                function(ppf$1,vars)
                 {if(vars)
                   {return List["iter"]
                            (function(x)
                              {return Format["fprintf"]
                                       (ppf$1,[0,[12,32,[15,0]]," %a"],Ident["print"],x);
                               },
                             vars);
                    }
                  else
                   {return 0;}
                  },
                param[2],
                lam,
                param[4]);
       
      case 13:
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
                      [0,"@;<1 -1>",1,-1],
                      [11,"with ",[15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]],
                 "@[<2>(try@ %a@;<1 -1>with %a@ %a)@]"],
                lam,
                param[1],
                Ident["print"],
                param[2],
                lam,
                param[3]);
       
      case 14:
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
                lam,
                param[1],
                lam,
                param[2],
                lam,
                param[3]);
       
      case 15:
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
                lam,
                param[1],
                sequence,
                param[2]);
       
      case 16:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(while",
                   [17,
                    [0,"@ ",1,0],
                    [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                 "@[<2>(while@ %a@ %a)@]"],
                lam,
                param[1],
                lam,
                param[2]);
       
      case 17:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(for ",
                   [15,
                    [17,
                     [0,"@ ",1,0],
                     [15,
                      [17,
                       [0,"@ ",1,0],
                       [2,
                        0,
                        [17,
                         [0,"@ ",1,0],
                         [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]]]]]]],
                 "@[<2>(for %a@ %a@ %s@ %a@ %a)@]"],
                Ident["print"],
                param[1],
                lam,
                param[2],
                param[4]!=0?"downto":"to",
                lam,
                param[3],
                lam,
                param[5]);
       
      case 18:
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(assign",
                   [17,
                    [0,"@ ",1,0],
                    [15,[17,[0,"@ ",1,0],[15,[12,41,[17,0,0]]]]]]]],
                 "@[<2>(assign@ %a@ %a)@]"],
                Ident["print"],
                param[1],
                lam,
                param[2]);
       
      case 19:
       var k=param[1];
       
       var
        args=
         function(ppf$1,largs)
          {return List["iter"]
                   (function(l)
                     {return Format["fprintf"]
                              (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],lam,l);
                      },
                    largs);
           };
       
       if(k=0)
        {var kind="self";}
       else
        {if(k=2){var kind="cache";}else{var kind="";}}
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [18,
                  [1,[0,[11,"<2>",0],"<2>"]],
                  [11,
                   "(send",
                   [2,
                    0,
                    [17,
                     [0,"@ ",1,0],
                     [15,[17,[0,"@ ",1,0],[15,[15,[12,41,[17,0,0]]]]]]]]]],
                 "@[<2>(send%s@ %a@ %a%a)@]"],
                kind,
                lam,
                param[3],
                lam,
                param[2],
                args,
                param[4]);
       
      }
    };

var
 sequence=
  function(ppf,ulam)
   {switch(ulam)
     {case 15:
       return Format["fprintf"]
               (ppf,
                [0,[15,[17,[0,"@ ",1,0],[15,0]]],"%a@ %a"],
                sequence,
                ulam[1],
                sequence,
                ulam[2]);
       
      default:return lam(ppf,ulam);}
    };

var
 clambda=
  function(ppf,ulam)
   {return Format["fprintf"](ppf,[0,[15,[17,4,0]],"%a@."],lam,ulam);};

var
 approx=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param){case 0:return Format["fprintf"](ppf,[0,[12,95,0],"_"]);}}
    else
     {switch(param[0])
       {case 0:
         var fundesc=param[1];
         
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<2>",0],"<2>"]],
             [11,
              "function ",
              [2,0,[17,[0,"@ ",1,0],[11,"arity ",[4,3,0,0,0]]]]]],
            "@[<2>function %s@ arity %i"],
           fundesc[1],
           fundesc[2]);
         if(fundesc[3])
          {Format["fprintf"]
            (ppf,[0,[17,[0,"@ ",1,0],[11,"(closed)",0]],"@ (closed)"])}
         else
          {}
         
         if(fundesc[4]!=0)
          {Format["fprintf"]
            (ppf,[0,[17,[0,"@ ",1,0],[11,"(inline)",0]],"@ (inline)"])}
         else
          {}
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [17,[0,"@ ",1,0],[11,"-> ",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                   "@ -> @ %a@]"],
                  approx,
                  param[2]);
         
        case 1:
         var
          tuple=
           function(ppf$1,a)
            {for(var i=0;i<=a["length"]-1;i++)
              {if(i>0)
                {Format["fprintf"]
                  (ppf$1,[0,[12,59,[17,[0,"@ ",1,0],0]],";@ "])}
               else
                {}
               
               Format["fprintf"]
                (ppf$1,[0,[4,3,0,0,[11,": ",[15,0]]],"%i: %a"],i,approx,a[i])}
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<hov 1>",0],"<hov 1>"]],
                    [12,40,[15,[12,41,[17,0,0]]]]],
                   "@[<hov 1>(%a)@]"],
                  tuple,
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,[1,[0,0,""]],[11,"const(",[15,[12,41,[17,0,0]]]]],
                   "@[const(%a)@]"],
                  uconstant,
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,0,""]],
                    [11,"global(",[2,0,[12,44,[4,3,0,0,[12,41,[17,0,0]]]]]]],
                   "@[global(%s,%i)@]"],
                  param[1],
                  param[2]);
         
        }}
    };

module["exports"]=
{"clambda":clambda,"approx":approx,"structured_constant":structured_constant};

