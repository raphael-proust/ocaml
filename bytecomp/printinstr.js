// Generated CODE, PLEASE EDIT WITH CARE 

var Printlambda=require("Printlambda");
var List=require("List");
var Format=require("Format");
var Lambda=require("Lambda");
var Ident=require("Ident");
var $$Array=require("Array");


var
 instruction=
  function(ppf,param)
   {if(typeof param=="number")
     {switch(param)
       {case 0:return Format["fprintf"](ppf,[0,[11,"\tpush",0],"\tpush"]);
        case 1:
         return Format["fprintf"](ppf,[0,[11,"\trestart",0],"\trestart"]);
        case 2:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tvectlength",0],"\tvectlength"]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tgetvectitem",0],"\tgetvectitem"]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tsetvectitem",0],"\tsetvectitem"]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tgetstringchar",0],"\tgetstringchar"]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tsetstringchar",0],"\tsetstringchar"]);
         
        case 7:
         return Format["fprintf"](ppf,[0,[11,"\tboolnot",0],"\tboolnot"]);
        case 8:
         return Format["fprintf"](ppf,[0,[11,"\tpoptrap",0],"\tpoptrap"]);
        case 9:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tcheck_signals",0],"\tcheck_signals"]);
         
        case 10:
         return Format["fprintf"](ppf,[0,[11,"\tnegint",0],"\tnegint"]);
        case 11:
         return Format["fprintf"](ppf,[0,[11,"\taddint",0],"\taddint"]);
        case 12:
         return Format["fprintf"](ppf,[0,[11,"\tsubint",0],"\tsubint"]);
        case 13:
         return Format["fprintf"](ppf,[0,[11,"\tmulint",0],"\tmulint"]);
        case 14:
         return Format["fprintf"](ppf,[0,[11,"\tdivint",0],"\tdivint"]);
        case 15:
         return Format["fprintf"](ppf,[0,[11,"\tmodint",0],"\tmodint"]);
        case 16:
         return Format["fprintf"](ppf,[0,[11,"\tandint",0],"\tandint"]);
        case 17:return Format["fprintf"](ppf,[0,[11,"\torint",0],"\torint"]);
        case 18:
         return Format["fprintf"](ppf,[0,[11,"\txorint",0],"\txorint"]);
        case 19:
         return Format["fprintf"](ppf,[0,[11,"\tlslint",0],"\tlslint"]);
        case 20:
         return Format["fprintf"](ppf,[0,[11,"\tlsrint",0],"\tlsrint"]);
        case 21:
         return Format["fprintf"](ppf,[0,[11,"\tasrint",0],"\tasrint"]);
        case 22:return Format["fprintf"](ppf,[0,[11,"\tisint",0],"\tisint"]);
        case 23:return Format["fprintf"](ppf,[0,[11,"\tisout",0],"\tisout"]);
        case 24:
         return Format["fprintf"](ppf,[0,[11,"\tgetmethod",0],"\tgetmethod"]);
        case 25:
         return Format["fprintf"](ppf,[0,[11,"\tgetdynmet",0],"\tgetdynmet"]);
        case 26:return Format["fprintf"](ppf,[0,[11,"\tstop",0],"\tstop"]);
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,[0,[12,76,[4,3,0,0,[12,58,0]]],"L%i:"],param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tacc ",[4,3,0,0,0]],"\tacc %i"],param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tenvacc ",[4,3,0,0,0]],"\tenvacc %i"],param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tpop ",[4,3,0,0,0]],"\tpop %i"],param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tassign ",[4,3,0,0,0]],"\tassign %i"],param[1]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tpush_retaddr L",[4,3,0,0,0]],"\tpush_retaddr L%i"],
                  param[1]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tapply ",[4,3,0,0,0]],"\tapply %i"],param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tappterm ",[4,3,0,0,[11,", ",[4,3,0,0,0]]]],
                   "\tappterm %i, %i"],
                  param[1],
                  param[2]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,[0,[11,"\treturn ",[4,3,0,0,0]],"\treturn %i"],param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,[0,[11,"\tgrab ",[4,3,0,0,0]],"\tgrab %i"],param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tclosure L",[4,3,0,0,[11,", ",[4,3,0,0,0]]]],
                   "\tclosure L%i, %i"],
                  param[1],
                  param[2]);
         
        case 11:
         Format["fprintf"](ppf,[0,[11,"\tclosurerec",0],"\tclosurerec"]);
         List["iter"]
          (function(lbl)
            {return Format["fprintf"](ppf,[0,[12,32,[4,3,0,0,0]]," %i"],lbl);},
           param[1]);
         return Format["fprintf"]
                 (ppf,[0,[11,", ",[4,3,0,0,0]],", %i"],param[2]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\toffsetclosure ",[4,3,0,0,0]],"\toffsetclosure %i"],
                  param[1]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tgetglobal ",[15,0]],"\tgetglobal %a"],
                  Ident["print"],
                  param[1]);
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tsetglobal ",[15,0]],"\tsetglobal %a"],
                  Ident["print"],
                  param[1]);
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<10>",0],"<10>"]],
                    [11,"\tconst",[17,[0,"@ ",1,0],[15,[17,0,0]]]]],
                   "@[<10>\tconst@ %a@]"],
                  Printlambda["structured_constant"],
                  param[1]);
         
        case 16:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tmakeblock ",[4,3,0,0,[11,", ",[4,3,0,0,0]]]],
                   "\tmakeblock %i, %i"],
                  param[1],
                  param[2]);
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tmakefloatblock ",[4,3,0,0,0]],
                   "\tmakefloatblock %i"],
                  param[1]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tgetfield ",[4,3,0,0,0]],"\tgetfield %i"],
                  param[1]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tsetfield ",[4,3,0,0,0]],"\tsetfield %i"],
                  param[1]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tgetfloatfield ",[4,3,0,0,0]],"\tgetfloatfield %i"],
                  param[1]);
         
        case 21:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tsetfloatfield ",[4,3,0,0,0]],"\tsetfloatfield %i"],
                  param[1]);
         
        case 22:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tbranch L",[4,3,0,0,0]],"\tbranch L%i"],
                  param[1]);
         
        case 23:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tbranchif L",[4,3,0,0,0]],"\tbranchif L%i"],
                  param[1]);
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tbranchifnot L",[4,3,0,0,0]],"\tbranchifnot L%i"],
                  param[1]);
         
        case 25:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tstrictbranchif L",[4,3,0,0,0]],
                   "\tstrictbranchif L%i"],
                  param[1]);
         
        case 26:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tstrictbranchifnot L",[4,3,0,0,0]],
                   "\tstrictbranchifnot L%i"],
                  param[1]);
         
        case 27:
         var
          labels=
           function(ppf$1,labs)
            {return $$Array["iter"]
                     (function(lbl)
                       {return Format["fprintf"]
                                (ppf$1,[0,[17,[0,"@ ",1,0],[4,3,0,0,0]],"@ %i"],lbl);
                        },
                      labs);
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [18,
                    [1,[0,[11,"<10>",0],"<10>"]],
                    [11,"\tswitch",[15,[12,47,[15,[17,0,0]]]]]],
                   "@[<10>\tswitch%a/%a@]"],
                  labels,
                  param[1],
                  labels,
                  param[2]);
         
        case 28:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tpushtrap L",[4,3,0,0,0]],"\tpushtrap L%i"],
                  param[1]);
         
        case 29:
         return Format["fprintf"]
                 (ppf,
                  [0,[12,9,[2,0,0]],"\t%s"],
                  Lambda["raise_kind"](param[1]));
         
        case 30:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,"\tccall ",[2,0,[11,", ",[4,3,0,0,0]]]],
                   "\tccall %s, %i"],
                  param[1],
                  param[2]);
         
        case 31:
         switch(param[1][0])
          {case 0:
            return Format["fprintf"](ppf,[0,[11,"\teqint",0],"\teqint"]);
           case 1:
            return Format["fprintf"](ppf,[0,[11,"\tneqint",0],"\tneqint"]);
           case 2:
            return Format["fprintf"](ppf,[0,[11,"\tltint",0],"\tltint"]);
           case 3:
            return Format["fprintf"](ppf,[0,[11,"\tgtint",0],"\tgtint"]);
           case 4:
            return Format["fprintf"](ppf,[0,[11,"\tleint",0],"\tleint"]);
           case 5:
            return Format["fprintf"](ppf,[0,[11,"\tgeint",0],"\tgeint"]);
           }
         
        case 32:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\toffsetint ",[4,3,0,0,0]],"\toffsetint %i"],
                  param[1]);
         
        case 33:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\toffsetref ",[4,3,0,0,0]],"\toffsetref %i"],
                  param[1]);
         
        case 34:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"\tgetpubmet ",[4,3,0,0,0]],"\tgetpubmet %i"],
                  param[1]);
         
        case 35:
         var ev=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,
                    '\tevent "',
                    [2,0,[11,'" ',[4,3,0,0,[12,45,[4,3,0,0,0]]]]]],
                   '\tevent "%s" %i-%i'],
                  ev[3][1][1],
                  ev[3][1][4],
                  ev[3][2][4]);
         
        }}
    };

var
 instruction_list=
  function(ppf,param)
   {if(param)
     {var instr=param[1];
      
      var exit;
      
      if(typeof instr=="number")
       {switch(instr){}}
      else
       {switch(instr[0])
         {case 0:
           return Format["fprintf"]
                   (ppf,
                    [0,[12,76,[4,3,0,0,[12,58,[15,0]]]],"L%i:%a"],
                    instr[1],
                    instruction_list,
                    param[2]);
           
          default:exit=2;}}
      
      switch(exit)
       {case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[17,[0,"@ ",1,0],[15,0]]],"%a@ %a"],
                  instruction,
                  instr,
                  instruction_list,
                  param[2]);
         
        }
      }
    else
     {return 0;}
    };

var
 instrlist=
  function(ppf,il)
   {return Format["fprintf"]
            (ppf,
             [0,
              [18,[1,[0,[11,"<v 0>",0],"<v 0>"]],[15,[17,0,0]]],
              "@[<v 0>%a@]"],
             instruction_list,
             il);
    };

module["exports"]={"instruction":instruction,"instrlist":instrlist};

