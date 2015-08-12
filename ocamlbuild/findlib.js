// Generated CODE, PLEASE EDIT WITH CARE 

var Const=require("Const");
var Pervasives=require("Pervasives");
var Lexers=require("Lexers");
var Printf=require("Printf");
var Lexing=require("Lexing");
var My_std=require("My_std");
var My_unix=require("My_unix");
var Hashtbl=require("Hashtbl");


var
 Findlib_error=
  Primtivie["caml_set_oo_id"]([248,"Findlib.Findlib_error",0]);

var error=function(x){throw [0,Findlib_error,x];};

var
 string_of_error=
  function(param)
   {if(typeof param=="number")
     {switch(param){case 0:return "Cannot run Ocamlfind.";}}
    else
     {switch(param[0])
       {case 0:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    'Ocamlfind returned "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '" as a dependency for package "',
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,
                        '" but does not know this dependency.',
                        /* End_of_format */0]]]]],
                   'Ocamlfind returned "%s" as a dependency for package "%s" but does not know this dependency.'],
                  param[2],
                  param[1]);
         
        case 1:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    'Findlib package not found: "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,'".',/* End_of_format */0]]],
                   'Findlib package not found: "%s".'],
                  param[1]);
         
        case 2:
         return Printf["sprintf"]
                 ([/* Format */0,
                   [/* String_literal */11,
                    'Cannot parse Ocamlfind query for package "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '": ',
                      [/* String */2,/* No_padding */0,/* End_of_format */0]]]],
                   'Cannot parse Ocamlfind query for package "%s": %s'],
                  param[1],
                  param[2]);
         
        }}
    };

var
 report_error=
  function(e)
   {Pervasives["prerr_endline"](string_of_error(e));
    return Pervasives["exit"](2);
    };

var ocamlfind="ocamlfind";

var packages=Hashtbl["create"](/* None */0,42);

var
 run_and_parse=
  function(lexer,command)
   {return Printf["ksprintf"]
            (function(command)
              {return My_std["&"]
                       (lexer,
                        My_std["&"]
                         (Lexing["from_string"],My_unix["run_and_read"](command)));
               },
             command);
    };

var
 run_and_read=
  function(command)
   {return Printf["ksprintf"](My_unix["run_and_read"],command);};

var
 query=
  function(name)
   {try
     {return Hashtbl["find"](packages,name);}
    catch(exn)
     {if(exn=Not_found)
       {try
         {var
           match=
            run_and_parse
             (Lexers["ocamlfind_query"](Const["Source"][4]),
              [/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 " query -l -predicates byte ",
                 [/* String */2,/* No_padding */0,/* End_of_format */0]]],
               "%s query -l -predicates byte %s"],
              ocamlfind,
              name);
          
          var n=match[1];
          
          var
           a_native=
            run_and_parse
             (Lexers["trim_blanks"](Const["Source"][4]),
              [/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 " query -a-format -predicates native ",
                 [/* String */2,/* No_padding */0,/* End_of_format */0]]],
               "%s query -a-format -predicates native %s"],
              ocamlfind,
              name);
          
          var
           deps=
            run_and_parse
             (Lexers["blank_sep_strings"](Const["Source"][4]),
              [/* Format */0,
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 " query -r -p-format ",
                 [/* String */2,/* No_padding */0,/* End_of_format */0]]],
               "%s query -r -p-format %s"],
              ocamlfind,
              name);
          
          var
           deps$1=
            My_std["List"][33]
             (function(prim,prim)
                {return Primtivie["caml_notequal"](prim$1,prim);}
               (n),
              deps);
          
          try
           {var deps$2=My_std["List"][16](query,deps$1);}
          catch(exn$1)
           {var exit;
            
            if(exn$1[1]=Findlib_error)
             {var match$1=exn$1[2];
              
              if(typeof match$1=="number")
               {switch(match$1){}}
              else
               {switch(match$1[0])
                 {case 1:
                   var
                    deps$2=
                     error(/* Dependency_not_found */[0,name,match$1[1]]);
                   
                  default:exit=32;}}
              }
            else
             {exit=32;}
            
            switch(exit){case 32:throw exn$1;}
            }
          
          var
           $$package=
            /* record */[0,
             n,
             match[2],
             match[3],
             match[4],
             a_native,
             match[5],
             match[6],
             deps$2];
          
          Hashtbl["add"](packages,n,$$package);
          return $$package;
          }
        catch(exn$2)
         {if(exn$2[1]=Failure)
           {return error(/* Cannot_run_ocamlfind */0);}
          else
           {if(exn$2[1]=Lexers["Error"])
             {return error(/* Cannot_parse_query */[2,name,exn$2[2][1]]);}
            else
             {throw exn$2;}
            }
          }
        }
      else
       {throw exn;}
      }
    };

var
 split_nl=
  function(s)
   {var x=[0,/* [] */0];
    
    var
     go=
      function(s)
       {var pos=My_std["String"][29](s,10);
        
        x[1]=/* :: */[0,My_std["String"][3](s,pos),x[1]],0;
        return go(My_std["String"][4](s,pos+1));
        };
    
    try
     {return go(s);}
    catch(exn){if(exn=Not_found){return x[1];}else{throw exn;}}
    };

var
 before_space=
  function(s)
   {try
     {return My_std["String"][3](s,My_std["String"][29](s,32));}
    catch(exn){if(exn=Not_found){return s;}else{throw exn;}}
    };

var
 list=
  function(param)
   {return My_std["List"][16]
            (before_space,
             My_std["&"]
              (split_nl,
               run_and_read
                ([/* Format */0,
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11," list",/* End_of_format */0]],
                  "%s list"],
                 ocamlfind)));
    };

var
 topological_closure=
  function(l)
   {var
     add=
      function(l,x)
       {if(My_std["List"][30](x,l)){return l;}else{return /* :: */[0,x,l];}};
    
    var
     l$1=
      My_std["List"][19]
       (function(acc,p){return add(My_std["List"][19](add,acc,p[8]),p);},
        /* [] */0,
        l);
    
    return My_std["List"][9](l$1);
    };

var $$let=My_std["String"];

var SSet=My_std["Set"][1]([0,$$let[40],$$let[1]]);

var
 add_atom=
  function(a,l)
   {var exit;
    
    if(typeof a=="number")
     {switch(a){}}
    else
     {switch(a[0])
       {case 1:switch(a[1]){case "":return l;default:exit=17;}
        default:exit=17;}}
    
    switch(exit){case 17:return /* :: */[0,a,l];}
    };

var
 compile_flags=
  function(l)
   {var pkgs=topological_closure(l);
    
    var
     locations=
      My_std["List"][19]
       (function(acc,p){return SSet[4](p[7],acc);},SSet[1],pkgs);
    
    var flags=/* [] */0;
    
    var
     flags$1=
      My_std["List"][19]
       (function(acc,l)
         {return add_atom(/* P */[2,l],add_atom([/* A */1,"-I"],acc));},
        flags,
        SSet[20](locations));
    
    return /* S */[0,My_std["List"][9](flags$1)];
    };

var compile_flags_byte=compile_flags;

var compile_flags_native=compile_flags;

var
 link_flags=
  function(f,l)
   {var pkgs=topological_closure(l);
    
    var
     locations=
      My_std["List"][19]
       (function(acc,p){return SSet[4](p[7],acc);},SSet[1],pkgs);
    
    var flags=/* [] */0;
    
    var
     flags$1=
      My_std["List"][19]
       (function(acc,l)
         {return add_atom(/* P */[2,l],add_atom([/* A */1,"-I"],acc));},
        flags,
        SSet[20](locations));
    
    var
     flags$2=
      My_std["List"][19]
       (function(acc,x){return add_atom(/* A */[1,x[6]],acc);},flags$1,pkgs);
    
    var
     flags$3=
      My_std["List"][19]
       (function(acc,x){return add_atom(/* A */[1,f(x)],acc);},flags$2,pkgs);
    
    return /* S */[0,My_std["List"][9](flags$3)];
    };

var link_flags_byte=link_flags(function(x){return x[4];});

var link_flags_native=link_flags(function(x){return x[5];});

module["exports"]=
{"Findlib_error":Findlib_error,
 "string_of_error":string_of_error,
 "report_error":report_error,
 "query":query,
 "list":list,
 "topological_closure":topological_closure,
 "compile_flags_byte":compile_flags_byte,
 "compile_flags_native":compile_flags_native,
 "link_flags_byte":link_flags_byte,
 "link_flags_native":link_flags_native};

