// Generated CODE, PLEASE EDIT WITH CARE 

var Mach=require("Mach");
var Arch=require("Arch");
var Config=require("Config");
var $$Array=require("Array");


var
 allocated_size=
  function(param){if(param){return param[2];}else{return 0;}};

var
 combine=
  function(i,allocstate)
   {var match=i[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){}}
    else
     {switch(match[0])
       {case 0:
         var op=match[1];
         
         var exit$1;
         
         if(typeof op=="number")
          {switch(op){case 3:exit$1=20;case 4:exit$1=20;}}
         else
          {switch(op[0])
            {case 4:exit$1=20;
             case 5:exit$1=20;
             case 6:exit$1=20;
             case 10:
              var sz=op[1];
              
              if(allocstate)
               {var ofs=allocstate[2];
                
                var reg=allocstate[1];
                
                if(ofs+sz<Config["max_young_wosize"]*Arch["size_addr"])
                 {var match$1=combine(i[2],/* Pending_alloc */[0,reg,ofs+sz]);
                  
                  return /* tuple */[0,
                          Mach["instr_cons"]
                           (/* Iop */[0,/* Iintop_imm */[12,0,ofs]],
                            [reg],
                            i[4],
                            match$1[1]),
                          match$1[2]];
                  }
                else
                 {var match$2=combine(i[2],/* Pending_alloc */[0,i[4][0],sz]);
                  
                  return /* tuple */[0,
                          Mach["instr_cons"]
                           (/* Iop */[0,/* Ialloc */[10,match$2[2]]],
                            i[3],
                            i[4],
                            match$2[1]),
                          ofs];
                  }
                }
              else
               {var match$3=combine(i[2],/* Pending_alloc */[0,i[4][0],sz]);
                
                return /* tuple */[0,
                        Mach["instr_cons"]
                         (/* Iop */[0,/* Ialloc */[10,match$3[2]]],
                          i[3],
                          i[4],
                          match$3[1]),
                        0];
                }
              
             default:exit$1=21;}}
         
         switch(exit$1)
          {case 21:
            var match$4=combine(i[2],allocstate);
            
            return /* tuple */[0,
                    Mach["instr_cons_debug"](i[1],i[3],i[4],i[5],match$4[1]),
                    match$4[2]];
            
           case 20:
            var newnext=combine_restart(i[2]);
            
            return /* tuple */[0,
                    Mach["instr_cons_debug"](i[1],i[3],i[4],i[5],newnext),
                    allocated_size(allocstate)];
            
           }
         
        case 1:
         var newifso=combine_restart(match[2]);
         
         var newifnot=combine_restart(match[3]);
         
         var newnext$1=combine_restart(i[2]);
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iifthenelse */[1,match[1],newifso,newifnot],
                   i[3],
                   i[4],
                   newnext$1),
                 allocated_size(allocstate)];
         
        case 2:
         var newcases=$$Array["map"](combine_restart,match[2]);
         
         var newnext$2=combine_restart(i[2]);
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Iswitch */[2,match[1],newcases],i[3],i[4],newnext$2),
                 allocated_size(allocstate)];
         
        case 3:
         var newbody=combine_restart(match[1]);
         
         return /* tuple */[0,
                 Mach["instr_cons"](/* Iloop */[3,newbody],i[3],i[4],i[2]),
                 allocated_size(allocstate)];
         
        case 4:
         var match$5=combine(match[2],allocstate);
         
         var newhandler=combine_restart(match[3]);
         
         var newnext$3=combine_restart(i[2]);
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Icatch */[4,match[1],match$5[1],newhandler],
                   i[3],
                   i[4],
                   newnext$3),
                 match$5[2]];
         
        case 6:
         var match$6=combine(match[1],allocstate);
         
         var newhandler$1=combine_restart(match[2]);
         
         var newnext$4=combine_restart(i[2]);
         
         return /* tuple */[0,
                 Mach["instr_cons"]
                  (/* Itrywith */[6,match$6[1],newhandler$1],
                   i[3],
                   i[4],
                   newnext$4),
                 match$6[2]];
         
        default:exit=19;}}
    
    switch(exit){case 19:return /* tuple */[0,i,allocated_size(allocstate)];}
    };

var combine_restart=function(i){var match=combine(i,0);return match[1];};

var
 fundecl=
  function(f)
   {return /* record */[0,f[1],f[2],combine_restart(f[3]),f[4],f[5]];};

module["exports"]={"fundecl":fundecl};

