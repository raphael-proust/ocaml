// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("Printf");


var
 get_desc=
  function(ev)
   {var loc=ev[3];
    
    return Printf["sprintf"]
            ([0,
              [11,
               "file ",
               [2,
                0,
                [11,
                 ", line ",
                 [4,0,0,0,[11,", characters ",[4,0,0,0,[12,45,[4,0,0,0,0]]]]]]]],
              "file %s, line %d, characters %d-%d"],
             loc[1][1],
             loc[1][2],
             loc[1][4]-loc[1][3]+1,
             loc[2][4]-loc[1][3]+1);
    };

module["exports"]={"get_desc":get_desc};

