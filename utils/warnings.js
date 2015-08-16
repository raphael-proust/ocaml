// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Char=require("./char.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Arg=require("./arg.js");
var Printf=require("./printf.js");
var Format=require("./format.js");
var $$Array=require("./array.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 number=
  function(param)
   {if(typeof param==="number")
     {switch(param)
       {case 0:return 1;
        case 1:return 2;
        case 2:return 5;
        case 3:return 6;
        case 4:return 10;
        case 5:return 11;
        case 6:return 12;
        case 7:return 14;
        case 8:return 16;
        case 9:return 20;
        case 10:return 21;
        case 11:return 23;
        case 12:return 25;
        case 13:return 28;
        case 14:return 29;
        case 15:return 39;
        }}
    else
     {switch(param[0])
       {case 0:return 3;
        case 1:return 4;
        case 2:return 7;
        case 3:return 8;
        case 4:return 9;
        case 5:return 13;
        case 6:return 15;
        case 7:return 17;
        case 8:return 18;
        case 9:return 19;
        case 10:return 22;
        case 11:return 24;
        case 12:return 26;
        case 13:return 27;
        case 14:return 30;
        case 15:return 31;
        case 16:return 32;
        case 17:return 33;
        case 18:return 34;
        case 19:return 35;
        case 20:return 36;
        case 21:return 37;
        case 22:return 38;
        case 23:return 40;
        case 24:return 41;
        case 25:return 42;
        case 26:return 43;
        case 27:return 44;
        case 28:return 45;
        case 29:return 46;
        case 30:return 47;
        case 31:return 48;
        case 32:return 49;
        case 33:return 50;
        }}
    };

var last_warning_number=50;

var
 letter=
  function(param)
   {var exit;
    
    var switcher=-97+param;
    
    if(25<switcher>>>0)
     {throw [0,
             CamlPrimitive["caml_global_data"]["Assert_failure"],
             [0,"utils/warnings.ml",164,9]];
      }
    else
     {switch(switcher)
       {case 0:
         var
          loop=
           function(i)
            {if(i===0){return /* [] */0;}else{return /* :: */[0,i,loop(i-1)];}
             };
         
         return loop(last_warning_number);
         
        case 1:exit=51;
        case 2:return [/* :: */0,1,[/* :: */0,2,/* [] */0]];
        case 3:return [/* :: */0,3,/* [] */0];
        case 4:return [/* :: */0,4,/* [] */0];
        case 5:return [/* :: */0,5,/* [] */0];
        case 6:exit=51;
        case 7:exit=51;
        case 8:exit=51;
        case 9:exit=51;
        case 10:
         return [/* :: */0,
                 32,
                 [/* :: */0,
                  33,
                  [/* :: */0,
                   34,
                   [/* :: */0,
                    35,
                    [/* :: */0,
                     36,
                     [/* :: */0,37,[/* :: */0,38,[/* :: */0,39,/* [] */0]]]]]]]];
         
        case 11:return [/* :: */0,6,/* [] */0];
        case 12:return [/* :: */0,7,/* [] */0];
        case 13:exit=51;
        case 14:exit=51;
        case 15:return [/* :: */0,8,/* [] */0];
        case 16:exit=51;
        case 17:return [/* :: */0,9,/* [] */0];
        case 18:return [/* :: */0,10,/* [] */0];
        case 19:exit=51;
        case 20:return [/* :: */0,11,[/* :: */0,12,/* [] */0]];
        case 21:return [/* :: */0,13,/* [] */0];
        case 22:exit=51;
        case 23:
         return [/* :: */0,
                 14,
                 [/* :: */0,
                  15,
                  [/* :: */0,
                   16,
                   [/* :: */0,
                    17,
                    [/* :: */0,
                     18,
                     [/* :: */0,
                      19,
                      [/* :: */0,
                       20,
                       [/* :: */0,
                        21,
                        [/* :: */0,
                         22,
                         [/* :: */0,
                          23,
                          [/* :: */0,24,[/* :: */0,25,[/* :: */0,30,/* [] */0]]]]]]]]]]]]];
         
        case 24:return [/* :: */0,26,/* [] */0];
        case 25:return [/* :: */0,27,/* [] */0];
        }
      }
    
    switch(exit){case 51:return /* [] */0;}
    };

var
 current=
  [0,
   /* record */[0,
    CamlPrimitive["caml_make_vect"](last_warning_number+1,/* true */1),
    CamlPrimitive["caml_make_vect"](last_warning_number+1,/* false */0)]];

var backup=function(param){return current[1];};

var restore=function(x){return current[1]=x,0;};

var is_active=function(x){return current[1][1][number(x)+1];};

var is_error=function(x){return current[1][2][number(x)+1];};

var
 parse_opt=
  function(error,active,flags,s)
   {var set=function(i){return flags[i+1]=/* true */1,0;};
    
    var clear=function(i){return flags[i+1]=/* false */0,0;};
    
    var
     set_all=
      function(i){active[i+1]=/* true */1;return error[i+1]=/* true */1,0;};
    
    var
     error$1=
      function(param){throw [0,Arg["Bad"],"Ill-formed list of warnings"];};
    
    var
     get_num=
      function(n,i)
       {if(i>=s["length"])
         {return /* tuple */[0,i,n];}
        else
         {var match=s[i];
          
          if(9<-48+match>>>0)
           {return /* tuple */[0,i,n];}
          else
           {return get_num(10*n+s[i]-48,i+1);}
          }
        };
    
    var
     get_range=
      function(i)
       {var match=get_num(0,i);
        
        var n1=match[2];
        
        var i$1=match[1];
        
        if(i$1+2<s["length"]&&s[i$1]===46&&s[i$1+1]===46)
         {var match$1=get_num(0,i$1+2);
          
          var n2=match$1[2];
          
          if(n2<n1){error$1(/* () */0)}else{}
          
          return /* tuple */[0,match$1[1],n1,n2];
          }
        else
         {return /* tuple */[0,i$1,n1,n1];}
        };
    
    var
     loop=
      function(i)
       {if(i>=s["length"])
         {return /* () */0;}
        else
         {var c=s[i];
          
          var exit;
          
          if(c>=65)
           {if(c>=97)
             {if(c>=123)
               {exit=29;}
              else
               {List["iter"](clear,letter(s[i]));return loop(i+1);}
              }
            else
             {if(c>=91)
               {exit=29;}
              else
               {List["iter"](set,letter(Char["lowercase"](s[i])));
                return loop(i+1);
                }
              }
            }
          else
           {if(c>=46)
             {if(c>=64){return loop_letter_num(set_all,i+1);}else{exit=29;}}
            else
             {if(c>=43)
               {switch(-43+c)
                 {case 0:return loop_letter_num(set,i+1);
                  case 1:exit=29;
                  case 2:return loop_letter_num(clear,i+1);
                  }
                }
              else
               {exit=29;}
              }
            }
          
          switch(exit){case 29:return error$1(/* () */0);}
          }
        };
    
    var
     loop_letter_num=
      function(myset,i)
       {if(i>=s["length"])
         {return error$1(/* () */0);}
        else
         {var match=s[i];
          
          var exit;
          
          if(match>=65)
           {if(match>=97)
             {if(match>=123)
               {exit=34;}
              else
               {List["iter"](myset,letter(s[i]));return loop(i+1);}
              }
            else
             {if(match>=91)
               {exit=34;}
              else
               {List["iter"](myset,letter(Char["lowercase"](s[i])));
                return loop(i+1);
                }
              }
            }
          else
           {if(9<-48+match>>>0)
             {exit=34;}
            else
             {var match$1=get_range(i);
              
              for
               (var n=match$1[2];
                n<=
                Pervasives["min"](match$1[3],last_warning_number);
                n++)
               {myset(n)}
              
              return loop(match$1[1]);
              }
            }
          
          switch(exit){case 34:return error$1(/* () */0);}
          }
        };
    
    return loop(0);
    };

var
 parse_options=
  function(errflag,s)
   {var error=$$Array["copy"](current[1][2]);
    
    var active=$$Array["copy"](current[1][1]);
    
    parse_opt(error,active,errflag?error:active,s);
    return current[1]=/* record */[0,active,error],0;
    };

var defaults_w="+a-4-6-7-9-27-29-32..39-41..42-44-45-48-50";

var defaults_warn_error="-a";

var match=parse_options(/* false */0,defaults_w);

var match$1=parse_options(/* true */1,defaults_warn_error);

var
 message=
  function(param)
   {var exit;
    
    if(typeof param==="number")
     {switch(param)
       {case 0:return "this is the start of a comment.";
        case 1:return "this is not the end of a comment.";
        case 2:
         return "this function application is partial,\nmaybe some arguments are missing.";
         
        case 3:
         return "labels were omitted in the application of this function.";
        case 4:return "this expression should have type unit.";
        case 5:return "this match case is unused.";
        case 6:return "this sub-pattern is unused.";
        case 7:return "illegal backslash escape in string.";
        case 8:return "this optional argument cannot be erased.";
        case 9:return "this argument will not be used by the function.";
        case 10:
         return "this statement never returns (or has an unsound type.)";
        case 11:
         return "all the fields are explicitly listed in this record:\nthe 'with' clause is useless.";
         
        case 12:
         return "bad style, all clauses in this pattern-matching are guarded.";
         
        case 13:
         return "wildcard pattern given as argument to a constant constructor";
         
        case 14:
         return "unescaped end-of-line in a string constant (non-portable code)";
         
        case 15:return "unused rec flag.";
        }}
    else
     {switch(param[0])
       {case 0:return Pervasives["^"]("deprecated: ",param[1]);
        case 1:
         var s=param[1];
         
         switch(s)
          {case "":return "this pattern-matching is fragile.";
           default:
            return Pervasives["^"]
                    ("this pattern-matching is fragile.\nIt will remain exhaustive when constructors are added to type ",
                     Pervasives["^"](s,"."));
            }
         
        case 2:
         var match$2=param[1];
         
         if(match$2)
          {var slist=match$2[2];
           
           var lab=match$2[1];
           
           if(slist)
            {return $$String["concat"]
                     (" ",
                      /* :: */[0,
                       "the following methods are overridden by the class",
                       /* :: */[0,lab,/* :: */[0,":\n ",slist]]]);
             }
           else
            {return Pervasives["^"]
                     ("the method ",Pervasives["^"](lab," is overridden."));
             }
           }
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"utils/warnings.ml",271,26]];
           }
         
        case 3:
         var s$1=param[1];
         
         switch(s$1)
          {case "":return "this pattern-matching is not exhaustive.";
           default:
            return Pervasives["^"]
                    ("this pattern-matching is not exhaustive.\nHere is an example of a value that is not matched:\n",
                     s$1);
            }
         
        case 4:
         return Pervasives["^"]
                 ("the following labels are not bound in this record pattern:\n",
                  Pervasives["^"]
                   (param[1],
                    "\nEither bind these labels explicitly or add '; _' to the pattern."));
         
        case 5:
         var match$3=param[1];
         
         if(match$3)
          {var slist$1=match$3[2];
           
           var lab$1=match$3[1];
           
           if(slist$1)
            {return Pervasives["^"]
                     ($$String["concat"]
                       (" ",
                        /* :: */[0,
                         "the following instance variables are overridden by the class",
                         /* :: */[0,lab$1,/* :: */[0,":\n ",slist$1]]]),
                      "\nThe behaviour changed in ocaml 3.10 (previous behaviour was hiding.)");
             }
           else
            {return Pervasives["^"]
                     ("the instance variable ",
                      Pervasives["^"]
                       (lab$1,
                        Pervasives["^"]
                         (" is overridden.\n",
                          "The behaviour changed in ocaml 3.10 (previous behaviour was hiding.)")));
             }
           }
         else
          {throw [0,
                  CamlPrimitive["caml_global_data"]["Assert_failure"],
                  [0,"utils/warnings.ml",291,37]];
           }
         
        case 6:
         return Pervasives["^"]
                 ("the following private methods were made public implicitly:\n ",
                  Pervasives["^"]($$String["concat"](" ",param[1]),"."));
         
        case 7:
         return Pervasives["^"]
                 ("the virtual method ",
                  Pervasives["^"](param[1]," is not declared."));
         
        case 8:return Pervasives["^"](param[1]," is not principal.");
        case 9:return Pervasives["^"](param[1]," without principality.");
        case 10:return param[1];
        case 11:
         return Pervasives["^"]
                 ('bad source file name: "',
                  Pervasives["^"](param[1],'" is not a valid module name.'));
         
        case 12:exit=18;
        case 13:exit=18;
        case 14:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "the ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " is defined in both types ",
                        [/* String */2,
                         /* No_padding */0,
                         [/* String_literal */11,
                          " and ",
                          [/* String */2,
                           /* No_padding */0,
                           [/* Char_literal */12,46,/* End_of_format */0]]]]]]]]],
                   "the %s %s is defined in both types %s and %s."],
                  param[1],
                  param[2],
                  param[3],
                  param[4]);
         
        case 15:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "files ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " and ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " both define a module named ",
                        [/* String */2,/* No_padding */0,/* End_of_format */0]]]]]],
                   "files %s and %s both define a module named %s"],
                  param[2],
                  param[3],
                  param[1]);
         
        case 16:
         return Pervasives["^"]("unused value ",Pervasives["^"](param[1],"."));
         
        case 17:
         return Pervasives["^"]("unused open ",Pervasives["^"](param[1],"."));
        case 18:
         return Pervasives["^"]("unused type ",Pervasives["^"](param[1],"."));
        case 19:
         return Pervasives["^"]
                 ("unused for-loop index ",Pervasives["^"](param[1],"."));
         
        case 20:
         return Pervasives["^"]
                 ("unused ancestor variable ",Pervasives["^"](param[1],"."));
         
        case 21:
         var s$2=param[1];
         
         if(param[2]!==0)
          {return Pervasives["^"]
                   ("constructor ",
                    Pervasives["^"]
                     (s$2,
                      " is never used to build values.\n(However, this constructor appears in patterns.)"));
           }
         else
          {if(param[3]!==0)
            {return Pervasives["^"]
                     ("constructor ",
                      Pervasives["^"]
                       (s$2,
                        " is never used to build values.\nIts type is exported as a private type."));
             }
           else
            {return Pervasives["^"]
                     ("unused constructor ",Pervasives["^"](s$2,"."));
             }
           }
         
        case 22:
         var s$3=param[1];
         
         if(param[2]!==0)
          {return Pervasives["^"]
                   ("extension constructor ",
                    Pervasives["^"]
                     (s$3,
                      " is never used to build values.\n(However, this constructor appears in patterns.)"));
           }
         else
          {if(param[3]!==0)
            {return Pervasives["^"]
                     ("extension constructor ",
                      Pervasives["^"]
                       (s$3,
                        " is never used to build values.\nIt is exported or rebound as a private extension."));
             }
           else
            {return Pervasives["^"]
                     ("unused extension constructor ",Pervasives["^"](s$3,"."));
             }
           }
         
        case 23:
         var slist$2=param[2];
         
         var ty=param[1];
         
         var exit$1;
         
         if(slist$2)
          {if(slist$2[2])
            {exit$1=16;}
           else
            {if(param[3]!==0)
              {exit$1=16;}
             else
              {return Pervasives["^"]
                       (slist$2[1],
                        Pervasives["^"]
                         (" was selected from type ",
                          Pervasives["^"]
                           (ty,
                            ".\nIt is not visible in the current scope, and will not \nbe selected if the type becomes unknown.")));
               }
             }
           }
         else
          {exit$1=16;}
         
         switch(exit$1)
          {case 16:
            if(param[3]!==0)
             {return Pervasives["^"]
                      ("this record of type ",
                       Pervasives["^"]
                        (ty,
                         Pervasives["^"]
                          (" contains fields that are \nnot visible in the current scope: ",
                           Pervasives["^"]
                            ($$String["concat"](" ",slist$2),
                             ".\nThey will not be selected if the type becomes unknown."))));
              }
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"utils/warnings.ml",353,39]];
              }
            
           }
         
        case 24:
         var slist$3=param[1];
         
         var exit$2;
         
         if(slist$3)
          {if(slist$3[2])
            {exit$2=17;}
           else
            {if(param[3]!==0)
              {exit$2=17;}
             else
              {return Pervasives["^"]
                       (slist$3[1],
                        Pervasives["^"]
                         (" belongs to several types: ",
                          Pervasives["^"]
                           ($$String["concat"](" ",param[2]),
                            "\nThe first one was selected. Please disambiguate if this is wrong.")));
               }
             }
           }
         else
          {exit$2=17;}
         
         switch(exit$2)
          {case 17:
            if(param[3]!==0)
             {return Pervasives["^"]
                      ("these field labels belong to several types: ",
                       Pervasives["^"]
                        ($$String["concat"](" ",param[2]),
                         "\nThe first one was selected. Please disambiguate if this is wrong."));
              }
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"utils/warnings.ml",362,36]];
              }
            
           }
         
        case 25:
         return Pervasives["^"]
                 ("this use of ",
                  Pervasives["^"](param[1]," required disambiguation."));
         
        case 26:
         return Pervasives["^"]
                 ("the label ",Pervasives["^"](param[1]," is not optional."));
         
        case 27:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "this open statement shadows the ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " identifier ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " (which is later used)",
                        /* End_of_format */0]]]]],
                   "this open statement shadows the %s identifier %s (which is later used)"],
                  param[1],
                  param[2]);
         
        case 28:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "this open statement shadows the ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        " (which is later used)",
                        /* End_of_format */0]]]]],
                   "this open statement shadows the %s %s (which is later used)"],
                  param[1],
                  param[2]);
         
        case 29:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "illegal environment variable ",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      " : ",
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                   "illegal environment variable %s : %s"],
                  param[1],
                  param[2]);
         
        case 30:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "illegal payload for attribute '",
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      "'.\n",
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                   "illegal payload for attribute '%s'.\n%s"],
                  param[1],
                  param[2]);
         
        case 31:
         var sl=param[1];
         
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    "implicit elimination of optional argument",
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,
                      32,
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                   "implicit elimination of optional argument%s %s"],
                  List["length"](sl)===1?"":"s",
                  $$String["concat"](", ",sl));
         
        case 32:
         return Pervasives["^"]
                 ("no cmi file was found in path for module ",param[1]);
         
        case 33:
         if(param[1])
          {return "unattached documentation comment (ignored)";}
         else
          {return "ambiguous documentation comment";}
         
        }}
    
    switch(exit)
     {case 18:
       return Pervasives["^"]
               ("unused variable ",Pervasives["^"](param[1],"."));
       
      }
    };

var nerrors=[0,0];

var
 print=
  function(ppf,w)
   {var msg=message(w);
    
    var num=number(w);
    
    Format["fprintf"]
     (ppf,
      [/* Format */0,
       [/* Int */4,
        /* Int_d */0,
        /* No_padding */0,
        /* No_precision */0,
        [/* String_literal */11,
         ": ",
         [/* String */2,/* No_padding */0,/* End_of_format */0]]],
       "%d: %s"],
      num,
      msg);
    Format["pp_print_flush"](ppf,/* () */0);
    if(current[1][2][num+1]){return nerrors[0]++;}else{return 0;}
    };

var Errors=CamlPrimitive["caml_set_oo_id"]([248,"Warnings.Errors",0]);

var
 check_fatal=
  function(param)
   {if(nerrors[1]>0)
     {var e=[0,Errors,nerrors[1]];nerrors[1]=0;throw e;}
    else
     {return 0;}
    };

var
 descriptions=
  [/* :: */0,
   [/* tuple */0,1,"Suspicious-looking start-of-comment mark."],
   [/* :: */0,
    [/* tuple */0,2,"Suspicious-looking end-of-comment mark."],
    [/* :: */0,
     [/* tuple */0,3,"Deprecated feature."],
     [/* :: */0,
      [/* tuple */0,
       4,
       "Fragile pattern matching: matching that will remain complete even\n    if additional constructors are added to one of the variant types\n    matched."],
      [/* :: */0,
       [/* tuple */0,
        5,
        "Partially applied function: expression whose result has function\n    type and is ignored."],
       [/* :: */0,
        [/* tuple */0,6,"Label omitted in function application."],
        [/* :: */0,
         [/* tuple */0,7,"Method overridden."],
         [/* :: */0,
          [/* tuple */0,8,"Partial match: missing cases in pattern-matching."],
          [/* :: */0,
           [/* tuple */0,9,"Missing fields in a record pattern."],
           [/* :: */0,
            [/* tuple */0,
             10,
             'Expression on the left-hand side of a sequence that doesn\'t have type\n    "unit" (and that is not a function, see warning number 5).'],
            [/* :: */0,
             [/* tuple */0,
              11,
              "Redundant case in a pattern matching (unused match case)."],
             [/* :: */0,
              [/* tuple */0,12,"Redundant sub-pattern in a pattern-matching."],
              [/* :: */0,
               [/* tuple */0,13,"Instance variable overridden."],
               [/* :: */0,
                [/* tuple */0,
                 14,
                 "Illegal backslash escape in a string constant."],
                [/* :: */0,
                 [/* tuple */0,15,"Private method made public implicitly."],
                 [/* :: */0,
                  [/* tuple */0,16,"Unerasable optional argument."],
                  [/* :: */0,
                   [/* tuple */0,17,"Undeclared virtual method."],
                   [/* :: */0,
                    [/* tuple */0,18,"Non-principal type."],
                    [/* :: */0,
                     [/* tuple */0,19,"Type without principality."],
                     [/* :: */0,
                      [/* tuple */0,20,"Unused function argument."],
                      [/* :: */0,
                       [/* tuple */0,21,"Non-returning statement."],
                       [/* :: */0,
                        [/* tuple */0,22,"Proprocessor warning."],
                        [/* :: */0,
                         [/* tuple */0,23,'Useless record "with" clause.'],
                         [/* :: */0,
                          [/* tuple */0,
                           24,
                           "Bad module name: the source file name is not a valid OCaml module name."],
                          [/* :: */0,
                           [/* tuple */0,
                            25,
                            "Pattern-matching with all clauses guarded.  Exhaustiveness cannot be\n    checked."],
                           [/* :: */0,
                            [/* tuple */0,
                             26,
                             'Suspicious unused variable: unused variable that is bound\n    with "let" or "as", and doesn\'t start with an underscore ("_")\n    character.'],
                            [/* :: */0,
                             [/* tuple */0,
                              27,
                              'Innocuous unused variable: unused variable that is not bound with\n    "let" nor "as", and doesn\'t start with an underscore ("_")\n    character.'],
                             [/* :: */0,
                              [/* tuple */0,
                               28,
                               "Wildcard pattern given as argument to a constant constructor."],
                              [/* :: */0,
                               [/* tuple */0,
                                29,
                                "Unescaped end-of-line in a string constant (non-portable code)."],
                               [/* :: */0,
                                [/* tuple */0,
                                 30,
                                 "Two labels or constructors of the same name are defined in two\n    mutually recursive types."],
                                [/* :: */0,
                                 [/* tuple */0,
                                  31,
                                  "A module is linked twice in the same executable."],
                                 [/* :: */0,
                                  [/* tuple */0,32,"Unused value declaration."],
                                  [/* :: */0,
                                   [/* tuple */0,33,"Unused open statement."],
                                   [/* :: */0,
                                    [/* tuple */0,34,"Unused type declaration."],
                                    [/* :: */0,
                                     [/* tuple */0,35,"Unused for-loop index."],
                                     [/* :: */0,
                                      [/* tuple */0,36,"Unused ancestor variable."],
                                      [/* :: */0,
                                       [/* tuple */0,37,"Unused constructor."],
                                       [/* :: */0,
                                        [/* tuple */0,38,"Unused extension constructor."],
                                        [/* :: */0,
                                         [/* tuple */0,39,"Unused rec flag."],
                                         [/* :: */0,
                                          [/* tuple */0,
                                           40,
                                           "Constructor or label name used out of scope."],
                                          [/* :: */0,
                                           [/* tuple */0,41,"Ambiguous constructor or label name."],
                                           [/* :: */0,
                                            [/* tuple */0,42,"Disambiguated constructor or label name."],
                                            [/* :: */0,
                                             [/* tuple */0,43,"Nonoptional label applied as optional."],
                                             [/* :: */0,
                                              [/* tuple */0,
                                               44,
                                               "Open statement shadows an already defined identifier."],
                                              [/* :: */0,
                                               [/* tuple */0,
                                                45,
                                                "Open statement shadows an already defined label or constructor."],
                                               [/* :: */0,
                                                [/* tuple */0,46,"Error in environment variable."],
                                                [/* :: */0,
                                                 [/* tuple */0,47,"Illegal attribute payload."],
                                                 [/* :: */0,
                                                  [/* tuple */0,
                                                   48,
                                                   "Implicit elimination of optional arguments."],
                                                  [/* :: */0,
                                                   [/* tuple */0,
                                                    49,
                                                    "Missing cmi file when looking up module alias."],
                                                   [/* :: */0,
                                                    [/* tuple */0,50,"Unexpected documentation comment."],
                                                    /* [] */0]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]];

var
 help_warnings=
  function(param)
   {List["iter"]
     (function(param$1)
       {return Printf["printf"]
                ([/* Format */0,
                  [/* Int */4,
                   /* Int_i */3,
                   [/* Lit_padding */0,/* Right */1,3],
                   /* No_precision */0,
                   [/* Char_literal */12,
                    32,
                    [/* String */2,
                     /* No_padding */0,
                     [/* Char_literal */12,10,/* End_of_format */0]]]],
                  "%3i %s\n"],
                 param$1[1],
                 param$1[2]);
        },
      descriptions);
    Pervasives["print_endline"]("  A all warnings");
    for(var i=98;i<=122;i++)
     {var c=Char["chr"](i);
      
      var l=letter(c);
      
      if(l)
       {if(l[2])
         {Printf["printf"]
           ([/* Format */0,
             [/* String_literal */11,
              "  ",
              [/* Char */0,
               [/* String_literal */11,
                " warnings ",
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,".\n",/* End_of_format */0]]]]],
             "  %c warnings %s.\n"],
            Char["uppercase"](c),
            $$String["concat"]
             (", ",List["map"](Pervasives["string_of_int"],l)))}
        else
         {Printf["printf"]
           ([/* Format */0,
             [/* String_literal */11,
              "  ",
              [/* Char */0,
               [/* String_literal */11,
                " warning ",
                [/* Int */4,
                 /* Int_i */3,
                 /* No_padding */0,
                 /* No_precision */0,
                 [/* Char_literal */12,10,/* End_of_format */0]]]]],
             "  %c warning %i\n"],
            Char["uppercase"](c),
            l[1])}
        }
      else
       {}
      }
    
    return Pervasives["exit"](0);
    };

module["exports"]=
{"parse_options":parse_options,
 "is_active":is_active,
 "is_error":is_error,
 "defaults_w":defaults_w,
 "defaults_warn_error":defaults_warn_error,
 "print":print,
 "Errors":Errors,
 "check_fatal":check_fatal,
 "help_warnings":help_warnings,
 "backup":backup,
 "restore":restore};

