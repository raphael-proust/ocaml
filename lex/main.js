// Generated CODE, PLEASE EDIT WITH CARE 

var Common=require("./common.js");
var Parser=require("./parser.js");
var Output=require("./output.js");
var Outputbis=require("./outputbis.js");
var Lexgen=require("./lexgen.js");
var Pervasives=require("./pervasives.js");
var Arg=require("./arg.js");
var Cset=require("./cset.js");
var Printf=require("./printf.js");
var Lexer=require("./lexer.js");
var Lexing=require("./lexing.js");
var Filename=require("./filename.js");
var Parsing=require("./parsing.js");
var Compact=require("./compact.js");
var Sys=require("./sys.js");
var CamlPrimitive=require("./camlPrimitive.js");


var ml_automata=[0,/* false */0];

var source_name=[0,/* None */0];

var output_name=[0,/* None */0];

var usage="usage: ocamllex [options] sourcefile";

var
 print_version_string=
  function(param)
   {Pervasives["print_string"]("The OCaml lexer generator, version ");
    Pervasives["print_string"](Sys["ocaml_version"]);
    Pervasives["print_newline"](/* () */0);
    return Pervasives["exit"](0);
    };

var
 print_version_num=
  function(param)
   {Pervasives["print_endline"](Sys["ocaml_version"]);
    return Pervasives["exit"](0);
    };

var
 specs=
  /* :: */[0,
   /* tuple */[0,
    "-ml",
    /* Set */[2,ml_automata],
    " Output code that does not use the Lexing module built-in automata interpreter"],
   /* :: */[0,
    /* tuple */[0,
     "-o",
     /* String */[4,function(x){return output_name[1]=/* Some */[0,x],0;}],
     " <file>  Set output file name to <file>"],
    /* :: */[0,
     /* tuple */[0,
      "-q",
      /* Set */[2,Common["quiet_mode"]],
      " Do not display informational messages"],
     /* :: */[0,
      /* tuple */[0,
       "-v",
       /* Unit */[0,print_version_string],
       " Print version and exit"],
      /* :: */[0,
       /* tuple */[0,
        "-version",
        /* Unit */[0,print_version_string],
        " Print version and exit"],
       /* :: */[0,
        /* tuple */[0,
         "-vnum",
         /* Unit */[0,print_version_num],
         " Print version number and exit"],
        /* [] */0]]]]]];

Arg["parse"]
 (specs,function(name){return source_name[1]=/* Some */[0,name],0;},usage);
var
 main=
  function(param)
   {var match=source_name[1];
    
    if(match)
     {var source_name$1=match[1];}
    else
     {Arg["usage"](specs,usage);var source_name$1=Pervasives["exit"](2);}
    
    var match$1=output_name[1];
    
    if(match$1)
     {var dest_name=match$1[1];}
    else
     {if(Filename["check_suffix"](source_name$1,".mll"))
       {var
         dest_name=
          Pervasives["^"](Filename["chop_suffix"](source_name$1,".mll"),".ml");
        }
      else
       {var dest_name=Pervasives["^"](source_name$1,".ml");}
      }
    
    var ic=Pervasives["open_in_bin"](source_name$1);
    
    var oc=Pervasives["open_out"](dest_name);
    
    var tr=Common["open_tracker"](dest_name,oc);
    
    var lexbuf=Lexing["from_channel"](ic);
    
    lexbuf[12]=/* record */[0,source_name$1,1,0,0];
    try
     {var def=Parser["lexer_definition"](Lexer["main"],lexbuf);
      
      var match$2=Lexgen["make_dfa"](def[2]);
      
      var transitions=match$2[2];
      
      var entries=match$2[1];
      
      if(ml_automata[1])
       {Outputbis["output_lexdef"]
         (source_name$1,ic,oc,tr,def[1],def[4],entries,transitions,def[3])}
      else
       {var tables=Compact["compact_tables"](transitions);
        
        Output["output_lexdef"]
         (source_name$1,ic,oc,tr,def[1],def[4],tables,entries,def[3])}
      
      Pervasives["close_in"](ic);
      Pervasives["close_out"](oc);
      return Common["close_tracker"](tr);
      }
    catch(exn)
     {Pervasives["close_in"](ic);
      Pervasives["close_out"](oc);
      Common["close_tracker"](tr);
      CamlPrimitive["caml_sys_remove"](dest_name);
      if(exn===Cset["Bad"])
       {var p=Lexing["lexeme_start_p"](lexbuf);
        
        Printf["fprintf"]
         (Pervasives["stderr"],
          [/* Format */0,
           [/* String_literal */11,
            'File "',
            [/* String */2,
             /* No_padding */0,
             [/* String_literal */11,
              '", line ',
              [/* Int */4,
               /* Int_d */0,
               /* No_padding */0,
               /* No_precision */0,
               [/* String_literal */11,
                ", character ",
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 [/* String_literal */11,
                  ": character set expected.\n",
                  /* End_of_format */0]]]]]]],
           'File "%s", line %d, character %d: character set expected.\n'],
          p[1],
          p[2],
          p[4]-p[3])}
      else
       {if(exn===Parsing["Parse_error"])
         {var p$1=Lexing["lexeme_start_p"](lexbuf);
          
          Printf["fprintf"]
           (Pervasives["stderr"],
            [/* Format */0,
             [/* String_literal */11,
              'File "',
              [/* String */2,
               /* No_padding */0,
               [/* String_literal */11,
                '", line ',
                [/* Int */4,
                 /* Int_d */0,
                 /* No_padding */0,
                 /* No_precision */0,
                 [/* String_literal */11,
                  ", character ",
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* String_literal */11,
                    ": syntax error.\n",
                    /* End_of_format */0]]]]]]],
             'File "%s", line %d, character %d: syntax error.\n'],
            p$1[1],
            p$1[2],
            p$1[4]-p$1[3])}
        else
         {if(exn[1]===Lexer["Lexical_error"])
           {Printf["fprintf"]
             (Pervasives["stderr"],
              [/* Format */0,
               [/* String_literal */11,
                'File "',
                [/* String */2,
                 /* No_padding */0,
                 [/* String_literal */11,
                  '", line ',
                  [/* Int */4,
                   /* Int_d */0,
                   /* No_padding */0,
                   /* No_precision */0,
                   [/* String_literal */11,
                    ", character ",
                    [/* Int */4,
                     /* Int_d */0,
                     /* No_padding */0,
                     /* No_precision */0,
                     [/* String_literal */11,
                      ": ",
                      [/* String */2,
                       /* No_padding */0,
                       [/* String_literal */11,".\n",/* End_of_format */0]]]]]]]]],
               'File "%s", line %d, character %d: %s.\n'],
              exn[3],
              exn[4],
              exn[5],
              exn[2])}
          else
           {if(exn===Lexgen["Memory_overflow"])
             {Printf["fprintf"]
               (Pervasives["stderr"],
                [/* Format */0,
                 [/* String_literal */11,
                  'File "',
                  [/* String */2,
                   /* No_padding */0,
                   [/* String_literal */11,
                    '":\n Position memory overflow, too many bindings\n',
                    /* End_of_format */0]]],
                 'File "%s":\n Position memory overflow, too many bindings\n'],
                source_name$1)}
            else
             {if(exn===Output["Table_overflow"])
               {Printf["fprintf"]
                 (Pervasives["stderr"],
                  [/* Format */0,
                   [/* String_literal */11,
                    'File "',
                    [/* String */2,
                     /* No_padding */0,
                     [/* String_literal */11,
                      '":\ntransition table overflow, automaton is too big\n',
                      /* End_of_format */0]]],
                   'File "%s":\ntransition table overflow, automaton is too big\n'],
                  source_name$1)}
              else
               {throw exn;}
              }
            }
          }
        }
      
      return Pervasives["exit"](3);
      }
    };

main(/* () */0);
Pervasives["exit"](0);
module["exports"]=
{"ml_automata":ml_automata,
 "source_name":source_name,
 "output_name":output_name,
 "usage":usage,
 "print_version_string":print_version_string,
 "print_version_num":print_version_num,
 "specs":specs,
 "main":main};

