// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Debuginfo=require("Debuginfo");


var
 dummy_instr=
  /* record */[0,0,dummy_instr,[],[],Debuginfo["none"],Reg["Set"][1]];

var
 end_instr=
  function(param)
   {return /* record */[0,0,dummy_instr,[],[],Debuginfo["none"],Reg["Set"][1]];
    };

var
 instr_cons=
  function(d,a,r,n)
   {return /* record */[0,d,n,a,r,Debuginfo["none"],Reg["Set"][1]];};

var
 instr_cons_debug=
  function(d,a,r,dbg,n){return /* record */[0,d,n,a,r,dbg,Reg["Set"][1]];};

var
 instr_iter=
  function(f,i)
   {var match=i[1];
    
    var exit;
    
    if("unknown primitive:isint")
     {if(match!=0){exit=5;}else{return 0;}}
    else
     {exit=5;}
    
    switch(exit)
     {case 5:
       f(i);
       var match$1=i[1];
       
       var exit$1;
       
       if(typeof match$1=="number")
        {switch(match$1){case 1:exit$1=1;}}
       else
        {switch(match$1[0])
          {case 0:
            var $js=match$1[1];
            if(typeof $js=="number")
             {switch($js){case 4:exit$1=1;}}
            else
             {switch($js[0]){case 5:exit$1=1;default:exit$1=2;}}
            
           case 1:exit$1=4;
           case 2:
            var cases=match$1[2];
            
            for(var i$1=0;i$1<=cases["length"]-1;i$1++)
             {instr_iter(f,cases[i$1])}
            
            return instr_iter(f,i[2]);
            
           case 3:instr_iter(f,match$1[1]);return instr_iter(f,i[2]);
           case 4:exit$1=4;
           case 6:
            instr_iter(f,match$1[1]);
            instr_iter(f,match$1[2]);
            return instr_iter(f,i[2]);
            
           default:exit$1=3;}}
       
       switch(exit$1)
        {case 3:return 0;
         case 4:
          instr_iter(f,match$1[2]);
          instr_iter(f,match$1[3]);
          return instr_iter(f,i[2]);
          
         case 2:return instr_iter(f,i[2]);
         case 1:return 0;
         }
       
      }
    };

module["exports"]=
{"dummy_instr":dummy_instr,
 "end_instr":end_instr,
 "instr_cons":instr_cons,
 "instr_cons_debug":instr_cons_debug,
 "instr_iter":instr_iter};

