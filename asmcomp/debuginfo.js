// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("Printf");
var Location=require("Location");


var none=[0,0,"",0,0,0];

var is_none=function(t){return "unknown primitive:caml_equal";};

var
 to_string=
  function(d)
   {if("unknown primitive:caml_equal")
     {return "";}
    else
     {return Printf["sprintf"]
              ([0,
                [12,
                 123,
                 [2,
                  0,
                  [12,
                   58,
                   [4,0,0,0,[12,44,[4,0,0,0,[12,45,[4,0,0,0,[12,125,0]]]]]]]]],
                "{%s:%d,%d-%d}"],
               d[2],
               d[3],
               d[4],
               d[5]);
      }
    };

var
 from_location=
  function(kind,loc)
   {if(loc=Location["none"])
     {return none;}
    else
     {return /* record */[0,
              kind,
              loc[1][1],
              loc[1][2],
              loc[1][4]-loc[1][3],
              "unknown primitive:caml_string_equal"
               ?loc[2][4]-loc[1][3]
               :loc[1][4]-loc[1][3]];
      }
    };

var from_call=function(ev){return from_location(0,ev[1]);};

var from_raise=function(ev){return from_location(1,ev[1]);};

module["exports"]=
{"none":none,
 "is_none":is_none,
 "to_string":to_string,
 "from_location":from_location,
 "from_call":from_call,
 "from_raise":from_raise};

