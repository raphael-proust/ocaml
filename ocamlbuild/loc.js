// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Format=require("./format.js");


var file=function(loc){return loc[1];};

var line=function(loc){return loc[2];};

var $$char=function(loc){return loc[4]-loc[3];};

var
 print_loc=
  function(ppf,param)
   {var end_=param[3];
    
    var start=param[2];
    
    var
     print=
      function(one_or_two,ppf,param$1)
       {var start_num=param$1[1];
        
        if(one_or_two)
         {return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* Char_literal */12,
                     32,
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      /* End_of_format */0]],
                    " %d"],
                   start_num);
          }
        else
         {return Format["fprintf"]
                  (ppf,
                   [/* Format */0,
                    [/* String_literal */11,
                     "s ",
                     [/* Int */4,
                      /* Int_d */0,
                      /* No_padding */0,
                      /* No_precision */0,
                      [/* Char_literal */12,
                       45,
                       [/* Int */4,
                        /* Int_d */0,
                        /* No_padding */0,
                        /* No_precision */0,
                        /* End_of_format */0]]]],
                    "s %d-%d"],
                   start_num,
                   param$1[2]);
          }
        };
    
    return Format["fprintf"]
            (ppf,
             [/* Format */0,
              [/* String */2,
               /* No_padding */0,
               [/* Char_literal */12,
                32,
                [/* Caml_string */3,
                 /* No_padding */0,
                 [/* String_literal */11,
                  ", line",
                  [/* Alpha */15,
                   [/* String_literal */11,
                    ", character",
                    [/* Alpha */15,
                     [/* Char_literal */12,
                      58,
                      [/* Formatting_lit */17,
                       /* Flush_newline */4,
                       /* End_of_format */0]]]]]]]]],
              "%s %S, line%a, character%a:@."],
             $$String["capitalize"](param[1]),
             file(start),
             print(line(start)===line(end_)),
             /* tuple */[0,line(start),line(end_)],
             print(line(start)===line(end_)&&$$char(start)===$$char(end_)),
             /* tuple */[0,$$char(start),$$char(end_)]);
    };

var
 of_lexbuf=
  function(source,lexbuf){return /* tuple */[0,source,lexbuf[11],lexbuf[12]];};

var
 print_loc_option=
  function(ppf,param)
   {if(param){return print_loc(ppf,param[1]);}else{return /* () */0;}};

module["exports"]=
{"print_loc":print_loc,
 "print_loc_option":print_loc_option,
 "of_lexbuf":of_lexbuf};

