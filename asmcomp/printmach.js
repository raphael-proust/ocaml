// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var List=require("List");
var Printf=require("Printf");
var Debuginfo=require("Debuginfo");
var Format=require("Format");
var Lambda=require("Lambda");
var Proc=require("Proc");
var Printcmm=require("Printcmm");
var Arch=require("Arch");
var $$Array=require("Array");


var
 reg=
  function(ppf,r)
   {if(!Reg["anonymous"](r))
     {Format["fprintf"](ppf,[0,[2,0,0],"%s"],Reg["name"](r))}
    else
     {var match=r[3];
      
      var $js;
      switch(match[0]){case 0:$js="A";case 1:$js="I";case 2:$js="F";}
      Format["fprintf"](ppf,[0,[2,0,0],"%s"],$js)}
    
    Format["fprintf"](ppf,[0,[12,47,[4,3,0,0,0]],"/%i"],r[2]);
    var match$1=r[4];
    
    if(typeof match$1=="number")
     {switch(match$1){case 0:return 0;}}
    else
     {switch(match$1[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,[12,91,[2,0,[12,93,0]]],"[%s]"],
                  Proc["register_name"](match$1[1]));
         
        case 1:
         var match$2=match$1[1];
         
         switch(match$2)
          {case 0:
            return Format["fprintf"]
                    (ppf,[0,[11,"[s",[4,3,0,0,[12,93,0]]],"[s%i]"],match$2[1]);
            
           case 1:
            return Format["fprintf"]
                    (ppf,[0,[11,"[si",[4,3,0,0,[12,93,0]]],"[si%i]"],match$2[1]);
            
           case 2:
            return Format["fprintf"]
                    (ppf,[0,[11,"[so",[4,3,0,0,[12,93,0]]],"[so%i]"],match$2[1]);
            
           }
         
        }}
    };

var
 regs=
  function(ppf,v)
   {var n=v["length"];
    
    if(n!=0)
     {if(n!=1)
       {reg(ppf,v[0]);
        for(var i=1;i<=n-1;i++)
         {Format["fprintf"](ppf,[0,[12,32,[15,0]]," %a"],reg,v[i])}
        }
      else
       {return reg(ppf,v[0]);}
      }
    else
     {return 0;}
    };

var
 regset=
  function(ppf,s)
   {var first=[0,1];
    
    return Reg["Set"][13]
            (function(r)
              {if(first[1])
                {first[1]=0,0;
                 return Format["fprintf"](ppf,[0,[15,0],"%a"],reg,r);
                 }
               else
                {return Format["fprintf"]
                         (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],reg,r);
                 }
               },
             s);
    };

var
 regsetaddr=
  function(ppf,s)
   {var first=[0,1];
    
    return Reg["Set"][13]
            (function(r)
              {if(first[1])
                {first[1]=0,0,Format["fprintf"](ppf,[0,[15,0],"%a"],reg,r)}
               else
                {Format["fprintf"]
                  (ppf,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],reg,r)}
               
               var match=r[3];
               
               if(match!=0)
                {return 0;}
               else
                {return Format["fprintf"](ppf,[0,[12,42,0],"*"]);}
               },
             s);
    };

var
 intcomp=
  function(param)
   {switch(param)
     {case 0:
       return Printf["sprintf"]
               ([0,[12,32,[2,0,[11,"s ",0]]]," %ss "],
                Printcmm["comparison"](param[1]));
       
      case 1:
       return Printf["sprintf"]
               ([0,[12,32,[2,0,[11,"u ",0]]]," %su "],
                Printcmm["comparison"](param[1]));
       
      }
    };

var
 floatcomp=
  function(c)
   {return Printf["sprintf"]
            ([0,[12,32,[2,0,[11,"f ",0]]]," %sf "],Printcmm["comparison"](c));
    };

var
 intop=
  function(param)
   {if("unknown primitive:isint")
     {switch(param[0])
       {case 0:return " + ";
        case 1:return " - ";
        case 2:return " * ";
        case 3:return " *h ";
        case 4:return " div ";
        case 5:return " mod ";
        case 6:return " & ";
        case 7:return " | ";
        case 8:return " ^ ";
        case 9:return " << ";
        case 10:return " >>u ";
        case 11:return " >>s ";
        case 12:return " check > ";
        }
      }
    else
     {return intcomp(param[1]);}
    };

var
 test=
  function(tst,ppf,arg)
   {if(typeof tst=="number")
     {switch(tst)
       {case 0:return reg(ppf,arg[0]);
        case 1:
         return Format["fprintf"]
                 (ppf,[0,[11,"not ",[15,0]],"not %a"],reg,arg[0]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,[0,[15,[11," & 1 == 1",0]],"%a & 1 == 1"],reg,arg[0]);
         
        case 3:
         return Format["fprintf"]
                 (ppf,[0,[15,[11," & 1 == 0",0]],"%a & 1 == 0"],reg,arg[0]);
         
        }}
    else
     {switch(tst[0])
       {case 0:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[2,0,[15,0]]],"%a%s%a"],
                  reg,
                  arg[0],
                  intcomp(tst[1]),
                  reg,
                  arg[1]);
         
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[2,0,[4,3,0,0,0]]],"%a%s%i"],
                  reg,
                  arg[0],
                  intcomp(tst[1]),
                  tst[2]);
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,[2,0,[15,[2,0,[15,0]]]],"%s%a%s%a"],
                  tst[2]?"not ":"",
                  reg,
                  arg[0],
                  floatcomp(tst[1]),
                  reg,
                  arg[1]);
         
        }}
    };

var print_live=[0,0];

var
 operation=
  function(op,arg,ppf,res)
   {if(res["length"]>0)
     {Format["fprintf"](ppf,[0,[15,[11," := ",0]],"%a := "],regs,res)}
    else
     {}
    
    var exit;
    
    if(typeof op=="number")
     {switch(op)
       {case 0:return regs(ppf,arg);
        case 1:
         return Format["fprintf"]
                 (ppf,[0,[15,[11," (spill)",0]],"%a (spill)"],regs,arg);
         
        case 2:
         return Format["fprintf"]
                 (ppf,[0,[15,[11," (reload)",0]],"%a (reload)"],regs,arg);
         
        case 3:
         return Format["fprintf"]
                 (ppf,[0,[11,"call ",[15,0]],"call %a"],regs,arg);
         
        case 4:
         return Format["fprintf"]
                 (ppf,[0,[11,"tailcall ",[15,0]],"tailcall %a"],regs,arg);
         
        case 5:
         return Format["fprintf"]
                 (ppf,[0,[11,"-f ",[15,0]],"-f %a"],reg,arg[0]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,[0,[11,"absf ",[15,0]],"absf %a"],reg,arg[0]);
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[11," +f ",[15,0]]],"%a +f %a"],
                  reg,
                  arg[0],
                  reg,
                  arg[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[11," -f ",[15,0]]],"%a -f %a"],
                  reg,
                  arg[0],
                  reg,
                  arg[1]);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[11," *f ",[15,0]]],"%a *f %a"],
                  reg,
                  arg[0],
                  reg,
                  arg[1]);
         
        case 10:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[11," /f ",[15,0]]],"%a /f %a"],
                  reg,
                  arg[0],
                  reg,
                  arg[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"floatofint ",[15,0]],"floatofint %a"],
                  reg,
                  arg[0]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"intoffloat ",[15,0]],"intoffloat %a"],
                  reg,
                  arg[0]);
         
        }}
    else
     {switch(op[0])
       {case 0:exit=13;
        case 1:return Format["fprintf"](ppf,[0,[8,15,0,0,0],"%F"],op[1]);
        case 2:
         return Format["fprintf"]
                 (ppf,[0,[12,34,[2,0,[12,34,0]]],'"%s"'],op[1]);
         
        case 3:exit=13;
        case 4:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,'call "',[2,0,[11,'" ',[15,0]]]],'call "%s" %a'],
                  op[1],
                  regs,
                  arg);
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,'tailcall "',[2,0,[11,'" ',[15,0]]]],
                   'tailcall "%s" %a'],
                  op[1],
                  regs,
                  arg);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [11,'extcall "',[2,0,[11,'" ',[15,[2,0,0]]]]],
                   'extcall "%s" %a%s'],
                  op[1],
                  regs,
                  arg,
                  op[2]?"":" (noalloc)");
         
        case 7:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"offset stack ",[4,3,0,0,0]],"offset stack %i"],
                  op[1]);
         
        case 8:
         return Format["fprintf"]
                 (ppf,
                  [0,[2,0,[12,91,[15,[12,93,0]]]],"%s[%a]"],
                  Printcmm["chunk"](op[1]),
                  Arch["print_addressing"](reg,op[2]),
                  arg);
         
        case 9:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [2,0,[12,91,[15,[11,"] := ",[15,[12,32,[2,0,0]]]]]]],
                   "%s[%a] := %a %s"],
                  Printcmm["chunk"](op[1]),
                  Arch["print_addressing"](reg,op[2]),
                  $$Array["sub"](arg,1,arg["length"]-1),
                  reg,
                  arg[0],
                  op[3]?"(assign)":"(init)");
         
        case 10:
         return Format["fprintf"]
                 (ppf,[0,[11,"alloc ",[4,3,0,0,0]],"alloc %i"],op[1]);
         
        case 11:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[2,0,[15,0]]],"%a%s%a"],
                  reg,
                  arg[0],
                  intop(op[1]),
                  reg,
                  arg[1]);
         
        case 12:
         return Format["fprintf"]
                 (ppf,
                  [0,[15,[2,0,[4,3,0,0,0]]],"%a%s%i"],
                  reg,
                  arg[0],
                  intop(op[1]),
                  op[2]);
         
        case 13:return Arch["print_specific_operation"](reg,op[1],ppf,arg);
        }}
    
    switch(exit)
     {case 13:
       return Format["fprintf"]
               (ppf,[0,[2,0,0],"%s"],Nativeint["to_string"](op[1]));
       
      }
    };

var
 instr=
  function(ppf,i)
   {if(print_live[1])
     {Format["fprintf"]
       (ppf,
        [0,[18,[1,[0,[11,"<1>",0],"<1>"]],[12,123,[15,0]]],"@[<1>{%a"],
        regsetaddr,
        i[6]);
      if(i[3]["length"]>0)
       {Format["fprintf"]
         (ppf,
          [0,[17,[0,"@ ",1,0],[12,43,[17,[0,"@ ",1,0],[15,0]]]],"@ +@ %a"],
          regs,
          i[3])}
      else
       {}
      
      Format["fprintf"](ppf,[0,[12,125,[17,0,[17,[0,"@,",0,0],0]]],"}@]@,"])}
    else
     {}
    
    var match=i[1];
    
    if(typeof match=="number")
     {switch(match)
       {case 0:
        case 1:
         Format["fprintf"]
          (ppf,[0,[11,"return ",[15,0]],"return %a"],regs,i[3])
        }}
    else
     {switch(match[0])
       {case 0:operation(match[1],i[3],ppf,i[4]);
        case 1:
         var ifnot=match[3];
         
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<v 2>",0],"<v 2>"]],
             [11,"if ",[15,[11," then",[17,[0,"@,",0,0],[15,0]]]]]],
            "@[<v 2>if %a then@,%a"],
           test(match[1]),
           i[3],
           instr,
           match[2]);
         var match$1=ifnot[1];
         
         var exit;
         
         if("unknown primitive:isint")
          {if(match$1!=0){exit=11;}else{}}
         else
          {exit=11;}
         
         switch(exit)
          {case 11:
            Format["fprintf"]
             (ppf,
              [0,
               [17,[0,"@;<0 -2>",0,-2],[11,"else",[17,[0,"@,",0,0],[15,0]]]],
               "@;<0 -2>else@,%a"],
              instr,
              ifnot)
           }
         
         Format["fprintf"]
          (ppf,
           [0,
            [17,[0,"@;<0 -2>",0,-2],[11,"endif",[17,0,0]]],
            "@;<0 -2>endif@]"]);
        case 2:
         var cases=match[2];
         
         var index=match[1];
         
         Format["fprintf"]
          (ppf,[0,[11,"switch ",[15,0]],"switch %a"],reg,i[3][0]);
         for(var i$1=0;i$1<=cases["length"]-1;i$1++)
          {Format["fprintf"]
            (ppf,
             [0,
              [17,
               [0,"@,",0,0],
               [18,[1,[0,[11,"<v 2>",0],"<v 2>"]],[18,[1,[0,0,""]],0]]],
              "@,@[<v 2>@["]);
           for(var j=0;j<=index["length"]-1;j++)
            {if(index[j]=i$1)
              {Format["fprintf"]
                (ppf,
                 [0,
                  [11,"case ",[4,3,0,0,[12,58,[17,[0,"@,",0,0],0]]]],
                  "case %i:@,"],
                 j)}
             else
              {}
             }
           
           Format["fprintf"]
            (ppf,
             [0,[17,0,[17,[0,"@,",0,0],[15,[17,0,0]]]],"@]@,%a@]"],
             instr,
             cases[i$1])}
         
         Format["fprintf"]
          (ppf,[0,[17,[0,"@,",0,0],[11,"endswitch",0]],"@,endswitch"]);
        case 3:
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<v 2>",0],"<v 2>"]],
             [11,
              "loop",
              [17,
               [0,"@,",0,0],
               [15,[17,[0,"@;<0 -2>",0,-2],[11,"endloop",[17,0,0]]]]]]],
            "@[<v 2>loop@,%a@;<0 -2>endloop@]"],
           instr,
           match[1]);
        case 4:
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<v 2>",0],"<v 2>"]],
             [11,
              "catch",
              [17,
               [0,"@,",0,0],
               [15,
                [17,
                 [0,"@;<0 -2>",0,-2],
                 [11,
                  "with(",
                  [4,
                   0,
                   0,
                   0,
                   [12,
                    41,
                    [17,
                     [0,"@,",0,0],
                     [15,[17,[0,"@;<0 -2>",0,-2],[11,"endcatch",[17,0,0]]]]]]]]]]]]],
            "@[<v 2>catch@,%a@;<0 -2>with(%d)@,%a@;<0 -2>endcatch@]"],
           instr,
           match[2],
           match[1],
           instr,
           match[3]);
        case 5:
         Format["fprintf"]
          (ppf,[0,[11,"exit(",[4,0,0,0,[12,41,0]]],"exit(%d)"],match[1]);
        case 6:
         Format["fprintf"]
          (ppf,
           [0,
            [18,
             [1,[0,[11,"<v 2>",0],"<v 2>"]],
             [11,
              "try",
              [17,
               [0,"@,",0,0],
               [15,
                [17,
                 [0,"@;<0 -2>",0,-2],
                 [11,
                  "with",
                  [17,
                   [0,"@,",0,0],
                   [15,[17,[0,"@;<0 -2>",0,-2],[11,"endtry",[17,0,0]]]]]]]]]]],
            "@[<v 2>try@,%a@;<0 -2>with@,%a@;<0 -2>endtry@]"],
           instr,
           match[1],
           instr,
           match[2]);
        case 7:
         Format["fprintf"]
          (ppf,
           [0,[2,0,[12,32,[15,0]]],"%s %a"],
           Lambda["raise_kind"](match[1]),
           reg,
           i[3][0])
        }}
    
    if(!Debuginfo["is_none"](i[5]))
     {Format["fprintf"](ppf,[0,[2,0,0],"%s"],Debuginfo["to_string"](i[5]))}
    else
     {}
    
    var match$2=i[2][1];
    
    var exit$1;
    
    if("unknown primitive:isint")
     {if(match$2!=0){exit$1=10;}else{return 0;}}
    else
     {exit$1=10;}
    
    switch(exit$1)
     {case 10:
       return Format["fprintf"]
               (ppf,[0,[17,[0,"@,",0,0],[15,0]],"@,%a"],instr,i[2]);
       
      }
    };

var
 fundecl=
  function(ppf,f)
   {if(Debuginfo["is_none"](f[5]))
     {var dbg="";}
    else
     {var dbg=Pervasives["^"](" ",Debuginfo["to_string"](f[5]));}
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<v 2>",0],"<v 2>"]],
               [2,
                0,
                [12,40,[15,[12,41,[2,0,[17,[0,"@,",0,0],[15,[17,0,0]]]]]]]]],
              "@[<v 2>%s(%a)%s@,%a@]"],
             f[1],
             regs,
             f[2],
             dbg,
             instr,
             f[3]);
    };

var
 phase=
  function(msg,ppf,f)
   {return Format["fprintf"]
            (ppf,
             [0,[11,"*** ",[2,0,[17,4,[15,[17,4,0]]]]],"*** %s@.%a@."],
             msg,
             fundecl,
             f);
    };

var
 interference=
  function(ppf,r)
   {var
     interf=
      function(ppf$1)
       {return List["iter"]
                (function(r$1)
                  {return Format["fprintf"]
                           (ppf$1,[0,[17,[0,"@ ",1,0],[15,0]],"@ %a"],reg,r$1);
                   },
                 r[7]);
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [15,[12,58,[16,[17,0,[17,4,0]]]]]],
              "@[<2>%a:%t@]@."],
             reg,
             r,
             interf);
    };

var
 interferences=
  function(ppf,param)
   {Format["fprintf"]
     (ppf,[0,[11,"*** Interferences",[17,4,0]],"*** Interferences@."]);
    return List["iter"](interference(ppf),Reg["all_registers"](0));
    };

var
 preference=
  function(ppf,r)
   {var
     prefs=
      function(ppf$1)
       {return List["iter"]
                (function(param)
                  {return Format["fprintf"]
                           (ppf$1,
                            [0,
                             [17,[0,"@ ",1,0],[15,[11," weight ",[4,3,0,0,0]]]],
                             "@ %a weight %i"],
                            reg,
                            param[1],
                            param[2]);
                   },
                 r[8]);
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [18,
               [1,[0,[11,"<2>",0],"<2>"]],
               [15,[11,": ",[16,[17,0,[17,4,0]]]]]],
              "@[<2>%a: %t@]@."],
             reg,
             r,
             prefs);
    };

var
 preferences=
  function(ppf,param)
   {Format["fprintf"]
     (ppf,[0,[11,"*** Preferences",[17,4,0]],"*** Preferences@."]);
    return List["iter"](preference(ppf),Reg["all_registers"](0));
    };

module["exports"]=
{"reg":reg,
 "regs":regs,
 "regset":regset,
 "regsetaddr":regsetaddr,
 "operation":operation,
 "test":test,
 "instr":instr,
 "fundecl":fundecl,
 "phase":phase,
 "interferences":interferences,
 "preferences":preferences,
 "print_live":print_live};

