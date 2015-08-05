// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Format=require("Format");


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
      function(one_or_two,ppf$1,param$1)
       {var start_num=param$1[1];
        
        if(one_or_two)
         {return Format["fprintf"]
                  (ppf$1,[0,[12,32,[4,0,0,0,0]]," %d"],start_num);
          }
        else
         {return Format["fprintf"]
                  (ppf$1,
                   [0,[11,"s ",[4,0,0,0,[12,45,[4,0,0,0,0]]]],"s %d-%d"],
                   start_num,
                   param$1[2]);
          }
        };
    
    return Format["fprintf"]
            (ppf,
             [0,
              [2,
               0,
               [12,
                32,
                [3,
                 0,
                 [11,", line",[15,[11,", character",[15,[12,58,[17,4,0]]]]]]]]],
              "%s %S, line%a, character%a:@."],
             $$String["capitalize"](param[1]),
             file(start),
             print(line(start)=line(end_)),
             [0,line(start),line(end_)],
             print((line(start)=line(end_))&&($$char(start)=$$char(end_))),
             [0,$$char(start),$$char(end_)]);
    };

var
 of_lexbuf=
  function(source,lexbuf){return [0,source,lexbuf[11],lexbuf[12]];};

var
 print_loc_option=
  function(ppf,param)
   {if(param){return print_loc(ppf,param[1]);}else{return 0;}};

module["exports"]=
{"print_loc":print_loc,
 "print_loc_option":print_loc_option,
 "of_lexbuf":of_lexbuf};

