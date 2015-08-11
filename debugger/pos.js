// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("Printf");


var
 get_desc=
  function(ev)
   {var loc=ev[3];
    
    return Printf["sprintf"]
            ([/* Format */0,
              [/* String_literal */11,
               "file ",
               [/* String */2,
                /* No_padding */0,
                [/* String_literal */11,
                 ", line ",
                 [/* Int */4,
                  /* Int_d */0,
                  /* No_padding */0,
                  /* No_precision */0,
                  [/* String_literal */11,
                   ", characters ",
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
                      /* End_of_format */0]]]]]]]],
              "file %s, line %d, characters %d-%d"],
             loc[1][1],
             loc[1][2],
             loc[1][4]-loc[1][3]+1,
             loc[2][4]-loc[1][3]+1);
    };

module["exports"]={"get_desc":get_desc};

