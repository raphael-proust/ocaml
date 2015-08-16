// Generated CODE, PLEASE EDIT WITH CARE 

var Printlambda=require("./printlambda.js");
var List=require("./list.js");
var Format=require("./format.js");
var Lambda=require("./lambda.js");
var Ident=require("./ident.js");
var $$Array=require("./array.js");


var
 instruction=
  function(ppf,param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tpush",/* End_of_format */0],
                   "\tpush"]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\trestart",/* End_of_format */0],
                   "\trestart"]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tvectlength",/* End_of_format */0],
                   "\tvectlength"]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgetvectitem",
                    /* End_of_format */0],
                   "\tgetvectitem"]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tsetvectitem",
                    /* End_of_format */0],
                   "\tsetvectitem"]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgetstringchar",
                    /* End_of_format */0],
                   "\tgetstringchar"]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tsetstringchar",
                    /* End_of_format */0],
                   "\tsetstringchar"]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tboolnot",/* End_of_format */0],
                   "\tboolnot"]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tpoptrap",/* End_of_format */0],
                   "\tpoptrap"]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tcheck_signals",
                    /* End_of_format */0],
                   "\tcheck_signals"]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tnegint",/* End_of_format */0],
                   "\tnegint"]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\taddint",/* End_of_format */0],
                   "\taddint"]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tsubint",/* End_of_format */0],
                   "\tsubint"]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tmulint",/* End_of_format */0],
                   "\tmulint"]);
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tdivint",/* End_of_format */0],
                   "\tdivint"]);
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tmodint",/* End_of_format */0],
                   "\tmodint"]);
         
        case 16:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tandint",/* End_of_format */0],
                   "\tandint"]);
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\torint",/* End_of_format */0],
                   "\torint"]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\txorint",/* End_of_format */0],
                   "\txorint"]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tlslint",/* End_of_format */0],
                   "\tlslint"]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tlsrint",/* End_of_format */0],
                   "\tlsrint"]);
         
        case 21:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tasrint",/* End_of_format */0],
                   "\tasrint"]);
         
        case 22:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tisint",/* End_of_format */0],
                   "\tisint"]);
         
        case 23:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tisout",/* End_of_format */0],
                   "\tisout"]);
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tgetmethod",/* End_of_format */0],
                   "\tgetmethod"]);
         
        case 25:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tgetdynmet",/* End_of_format */0],
                   "\tgetdynmet"]);
         
        case 26:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,"\tstop",/* End_of_format */0],
                   "\tstop"]);
         
        }}
    else
     {switch(param[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,
                    76,
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* Char_literal */12,58,/* End_of_format */0]]],
                   "L%i:"],
                  param[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tacc ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tacc %i"],
                  param[1]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tenvacc ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tenvacc %i"],
                  param[1]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tpop ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tpop %i"],
                  param[1]);
         
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tassign ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tassign %i"],
                  param[1]);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tpush_retaddr L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tpush_retaddr L%i"],
                  param[1]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tapply ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tapply %i"],
                  param[1]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tappterm ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      ", ",
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]]]],
                   "\tappterm %i, %i"],
                  param[1],
                  param[2]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\treturn ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\treturn %i"],
                  param[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgrab ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tgrab %i"],
                  param[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tclosure L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      ", ",
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]]]],
                   "\tclosure L%i, %i"],
                  param[1],
                  param[2]);
         
        case 11:
         Format["fprintf"]
          (ppf,
           [/* Format */0,
            [/* String_literal */11,"\tclosurerec",/* End_of_format */0],
            "\tclosurerec"]);
         List["iter"]
          (function(lbl)
            {return Format["fprintf"]
                     (ppf,
                      [/* Format */0,
                       [/* Char_literal */12,
                        32,
                        [/* Int */4,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         /* End_of_format */0]],
                       " %i"],
                      lbl);
             },
           param[1]);
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    ", ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   ", %i"],
                  param[2]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\toffsetclosure ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\toffsetclosure %i"],
                  param[1]);
         
        case 13:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgetglobal ",
                    [/* Alpha */15,/* End_of_format */0]],
                   "\tgetglobal %a"],
                  Ident["print"],
                  param[1]);
         
        case 14:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tsetglobal ",
                    [/* Alpha */15,/* End_of_format */0]],
                   "\tsetglobal %a"],
                  Ident["print"],
                  param[1]);
         
        case 15:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<10>",/* End_of_format */0],
                      "<10>"]],
                    [/* String_literal */11,
                     "\tconst",
                     [/* Formatting_lit */17,
                      [/* Break */0,"@ ",1,0],
                      [/* Alpha */15,
                       [/* Formatting_lit */17,
                        /* Close_box */0,
                        /* End_of_format */0]]]]],
                   "@[<10>\tconst@ %a@]"],
                  Printlambda["structured_constant"],
                  param[1]);
         
        case 16:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tmakeblock ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      ", ",
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]]]],
                   "\tmakeblock %i, %i"],
                  param[1],
                  param[2]);
         
        case 17:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tmakefloatblock ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tmakefloatblock %i"],
                  param[1]);
         
        case 18:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgetfield ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tgetfield %i"],
                  param[1]);
         
        case 19:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tsetfield ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tsetfield %i"],
                  param[1]);
         
        case 20:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgetfloatfield ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tgetfloatfield %i"],
                  param[1]);
         
        case 21:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tsetfloatfield ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tsetfloatfield %i"],
                  param[1]);
         
        case 22:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tbranch L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tbranch L%i"],
                  param[1]);
         
        case 23:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tbranchif L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tbranchif L%i"],
                  param[1]);
         
        case 24:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tbranchifnot L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tbranchifnot L%i"],
                  param[1]);
         
        case 25:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tstrictbranchif L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tstrictbranchif L%i"],
                  param[1]);
         
        case 26:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tstrictbranchifnot L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tstrictbranchifnot L%i"],
                  param[1]);
         
        case 27:
         var
          labels=
           function(ppf,labs)
            {return $$Array["iter"]
                     (function(lbl)
                       {return Format["fprintf"]
                                (ppf,
                                 [/* Format */0,
                                  [/* Formatting_lit */17,
                                   [/* Break */0,"@ ",1,0],
                                   [/* Int */4,
                                    /* Int_i */3,
                                    /* No_padding */0,
                                    /* No_precision */0,
                                    /* End_of_format */0]],
                                  "@ %i"],
                                 lbl);
                        },
                      labs);
             };
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Formatting_gen */18,
                    [/* Open_box */1,
                     [/* Format */0,
                      [/* String_literal */11,"<10>",/* End_of_format */0],
                      "<10>"]],
                    [/* String_literal */11,
                     "\tswitch",
                     [/* Alpha */15,
                      [/* Char_literal */12,
                       47,
                       [/* Alpha */15,
                        [/* Formatting_lit */17,
                         /* Close_box */0,
                         /* End_of_format */0]]]]]],
                   "@[<10>\tswitch%a/%a@]"],
                  labels,
                  param[1],
                  labels,
                  param[2]);
         
        case 28:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tpushtrap L",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tpushtrap L%i"],
                  param[1]);
         
        case 29:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Char_literal */12,
                    9,
                    [/* String */2,/* No_padding */0,/* End_of_format */0]],
                   "\t%s"],
                  Lambda["raise_kind"](param[1]));
         
        case 30:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tccall ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      ", ",
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       /* End_of_format */0]]]],
                   "\tccall %s, %i"],
                  param[1],
                  param[2]);
         
        case 31:
         switch(param[1])
          {case 0:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"\teqint",/* End_of_format */0],
                      "\teqint"]);
            
           case 1:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"\tneqint",/* End_of_format */0],
                      "\tneqint"]);
            
           case 2:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"\tltint",/* End_of_format */0],
                      "\tltint"]);
            
           case 3:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"\tgtint",/* End_of_format */0],
                      "\tgtint"]);
            
           case 4:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"\tleint",/* End_of_format */0],
                      "\tleint"]);
            
           case 5:
            return Format["fprintf"]
                    (ppf,
                     [/* Format */0,
                      [/* String_literal */11,"\tgeint",/* End_of_format */0],
                      "\tgeint"]);
            
           }
         
        case 32:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\toffsetint ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\toffsetint %i"],
                  param[1]);
         
        case 33:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\toffsetref ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\toffsetref %i"],
                  param[1]);
         
        case 34:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    "\tgetpubmet ",
                    [/* Int */4,
                     /* Int_i */3,
                     /* No_padding */0,
                     /* No_precision */0,
                     /* End_of_format */0]],
                   "\tgetpubmet %i"],
                  param[1]);
         
        case 35:
         var ev=param[1];
         
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* String_literal */11,
                    '\tevent "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '" ',
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* Char_literal */12,
                        45,
                        [/* Int */4,
                         /* Int_i */3,
                         /* No_padding */0,
                         /* No_precision */0,
                         /* End_of_format */0]]]]]],
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
      
      if(typeof instr==="number")
       {switch(instr){}}
      else
       {switch(instr[0])
         {case 0:
           return Format["fprintf"]
                   (ppf,
                    [/* Format */0,
                     [/* Char_literal */12,
                      76,
                      [/* Int */4,
                       /* Int_i */3,
                       /* No_padding */0,
                       /* No_precision */0,
                       [/* Char_literal */12,
                        58,
                        [/* Alpha */15,/* End_of_format */0]]]],
                     "L%i:%a"],
                    instr[1],
                    instruction_list,
                    param[2]);
           
          default:exit=2;}}
      
      switch(exit)
       {case 2:
         return Format["fprintf"]
                 (ppf,
                  [/* Format */0,
                   [/* Alpha */15,
                    [/* Formatting_lit */17,
                     [/* Break */0,"@ ",1,0],
                     [/* Alpha */15,/* End_of_format */0]]],
                   "%a@ %a"],
                  instruction,
                  instr,
                  instruction_list,
                  param[2]);
         
        }
      }
    else
     {return /* () */0;}
    };

var
 instrlist=
  function(ppf,il)
   {return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* Formatting_gen */18,
               [/* Open_box */1,
                [/* Format */0,
                 [/* String_literal */11,"<v 0>",/* End_of_format */0],
                 "<v 0>"]],
               [/* Alpha */15,
                [/* Formatting_lit */17,/* Close_box */0,/* End_of_format */0]]],
              "@[<v 0>%a@]"],
             instruction_list,
             il);
    };

module["exports"]={"instruction":instruction,"instrlist":instrlist};

