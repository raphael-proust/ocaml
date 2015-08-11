// Generated CODE, PLEASE EDIT WITH CARE 

var Printmach=require("Printmach");
var Pervasives=require("Pervasives");
var Debuginfo=require("Debuginfo");
var Format=require("Format");
var Lambda=require("Lambda");


var
 label=
  function(ppf,l)
   {return Format["fprintf"](ppf,[0,[12,76,[4,3,0,0,0]],"L%i"],l);};

var
 instr=
  function(ppf,i)
   {var match=i[1];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
        case 1:
         Format["fprintf"](ppf,[0,[11,"reload retaddr",0],"reload retaddr"]);
        case 2:
         Format["fprintf"]
          (ppf,[0,[11,"return ",[15,0]],"return %a"],Printmach["regs"],i[3]);
        case 3:Format["fprintf"](ppf,[0,[11,"push trap",0],"push trap"]);
        case 4:Format["fprintf"](ppf,[0,[11,"pop trap",0],"pop trap"])
        }}
    else
     {switch(match[0])
       {case 0:
         var op=match[1];
         
         var exit;
         
         if(typeof op=="number")
          {switch(op){case 3:exit=4;}}
         else
          {switch(op[0])
            {case 4:exit=4;case 6:exit=4;case 10:exit=4;default:exit=5;}}
         
         switch(exit)
          {case 5:
           case 4:
            Format["fprintf"]
             (ppf,
              [0,
               [18,
                [1,[0,[11,"<1>",0],"<1>"]],
                [12,123,[15,[12,125,[17,0,[17,[0,"@,",0,0],0]]]]]],
               "@[<1>{%a}@]@,"],
              Printmach["regsetaddr"],
              i[6])
           }
         
         Printmach["operation"](op,i[3],ppf,i[4]);
        case 1:Format["fprintf"](ppf,[0,[15,[12,58,0]],"%a:"],label,match[1]);
        case 2:
         Format["fprintf"]
          (ppf,[0,[11,"goto ",[15,0]],"goto %a"],label,match[1]);
        case 3:
         Format["fprintf"]
          (ppf,
           [0,[11,"if ",[15,[11," goto ",[15,0]]]],"if %a goto %a"],
           Printmach["test"](match[1]),
           i[3],
           label,
           match[2]);
        case 4:
         Format["fprintf"]
          (ppf,
           [0,[11,"switch3 ",[15,0]],"switch3 %a"],
           Printmach["reg"],
           i[3][0]);
         var
          $$case=
           function(n,param)
            {if(param)
              {return Format["fprintf"]
                       (ppf,
                        [0,
                         [17,
                          [0,"@,",0,0],
                          [11,"case ",[4,3,0,0,[11,": goto ",[15,0]]]]],
                         "@,case %i: goto %a"],
                        n,
                        label,
                        param[1]);
               }
             else
              {return 0;}
             };
         
         $$case(0,match[1]),
         $$case(1,match[2]),
         $$case(2,match[3]),
         Format["fprintf"]
          (ppf,[0,[17,[0,"@,",0,0],[11,"endswitch",0]],"@,endswitch"]);
        case 5:
         var lblv=match[1];
         
         Format["fprintf"]
          (ppf,[0,[11,"switch ",[15,0]],"switch %a"],Printmach["reg"],i[3][0]);
         for(var i$1=0;i$1<=lblv["length"]-1;i$1++)
          {Format["fprintf"]
            (ppf,
             [0,
              [11,"case ",[4,3,0,0,[11,": goto ",[15,0]]]],
              "case %i: goto %a"],
             i$1,
             label,
             lblv[i$1])}
         
         Format["fprintf"]
          (ppf,[0,[17,[0,"@,",0,0],[11,"endswitch",0]],"@,endswitch"]);
        case 6:
         Format["fprintf"]
          (ppf,[0,[11,"setup trap ",[15,0]],"setup trap %a"],label,match[1]);
        case 7:
         Format["fprintf"]
          (ppf,
           [0,[2,0,[12,32,[15,0]]],"%s %a"],
           Lambda["raise_kind"](match[1]),
           Printmach["reg"],
           i[3][0])
        }}
    
    if(!Debuginfo["is_none"](i[5]))
     {return Format["fprintf"]
              (ppf,[0,[12,32,[2,0,0]]," %s"],Debuginfo["to_string"](i[5]));
      }
    else
     {return 0;}
    };

var
 all_instr=
  function(ppf,i)
   {var match=i[1];
    
    var exit;
    
    if("unknown primitive:isint")
     {if(match!=0){exit=3;}else{return 0;}}
    else
     {exit=3;}
    
    switch(exit)
     {case 3:
       return Format["fprintf"]
               (ppf,
                [0,[15,[17,[0,"@,",0,0],[15,0]]],"%a@,%a"],
                instr,
                i,
                all_instr,
                i[2]);
       
      }
    };

var
 fundecl=
  function(ppf,f)
   {if(Debuginfo["is_none"](f[4]))
     {var dbg="";}
    else
     {var dbg=Pervasives["^"](" ",Debuginfo["to_string"](f[4]));}
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<v 2>",0],"<v 2>"]],
               [2,0,[12,58,[2,0,[17,[0,"@,",0,0],[15,[17,0,0]]]]]]],
              "@[<v 2>%s:%s@,%a@]"],
             f[1],
             dbg,
             all_instr,
             f[2]);
    };

module["exports"]={"instr":instr,"fundecl":fundecl};

