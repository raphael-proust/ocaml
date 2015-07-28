var String=require("String");
var Format=require("Format");
var file=function(loc){return loc[1]};
var line=function(loc){return loc[2]};
var char=function(loc){return loc[4]-loc[3]};
var
 print_loc=
  function(ppf,param)
   {var end_=param[3];
    var start=param[2];
    var
     print=
      function(one_or_two,ppf$1,param$1)
       {var start_num=param$1[1];
        var $js=one_or_two;
        if($js)
         {var $js$1=Format["fprintf"];
          return $js$1(ppf$1,[0,[12,32,[4,0,0,0,0]]," %d"],start_num)}
        else
         {var $js$2=Format["fprintf"];
          return $js$2
                  (ppf$1,
                   [0,[11,"s ",[4,0,0,0,[12,45,[4,0,0,0,0]]]],"s %d-%d"],
                   start_num,
                   param$1[2])}};
    var $js=Format["fprintf"];
    var $js$1=String["capitalize"];
    var $js$2=$js$1(param[1]);
    var $js$3=file(start);
    var $js$4=line(start);
    var $js$5=line(end_);
    var $js$6=$js$4=$js$5;
    var $js$7=print($js$6);
    var $js$8=line(start);
    var $js$9=line(end_);
    var $js$10=[0,$js$8,$js$9];
    var $js$11=line(start);
    var $js$12=line(end_);
    var $js$13=$js$11=$js$12;
    var $js$14=char(start);
    var $js$15=char(end_);
    var $js$16=$js$14=$js$15;
    var $js$17=$js$13&&$js$16;
    var $js$18=print($js$17);
    var $js$19=char(start);
    var $js$20=char(end_);
    var $js$21=[0,$js$19,$js$20];
    return $js
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
             $js$2,
             $js$3,
             $js$7,
             $js$10,
             $js$18,
             $js$21)};
var
 of_lexbuf=
  function(source,lexbuf){return [0,source,lexbuf[11],lexbuf[12]]};
var
 print_loc_option=
  function(ppf,param)
   {var $js=param;if($js){return print_loc(ppf,param[1])}else{return 0}};
module["exports"]=
{"print_loc":print_loc,
 "print_loc_option":print_loc_option,
 "of_lexbuf":of_lexbuf};
