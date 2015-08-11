// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Proc=require("Proc");
var $$Array=require("Array");


var
 deadcode=
  function(i)
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
          {switch(op){case 4:exit=17;}}
         else
          {switch(op[0]){case 5:exit=17;default:exit$1=18;}}
         
         switch(exit$1)
          {case 18:
            var match$1=deadcode(i[2]);
            
            var before=match$1[2];
            
            var s=match$1[1];
            
            if
             (Proc["op_is_pure"](op)&&
              Reg["disjoint_set_array"](before,i[4])&&
              !Proc["regs_are_volatile"](i[3])&&
              !Proc["regs_are_volatile"](i[4]))
             {if(i[4]["length"]>0)
               {}
              else
               {throw [0,Assert_failure,[0,"asmcomp/deadcode.ml",32,8]];}
              
              return /* tuple */[0,s,before];
              }
            else
             {var newrecord="unknown primitive:duprecord regular 6";
              
              return /* tuple */[0,
                      (newrecord[2]=s,0,newrecord),
                      Reg["add_set_array"](i[6],i[3])];
              }
            
           }
         
        case 1:
         var match$2=deadcode(match[2]);
         
         var match$3=deadcode(match[3]);
         
         var match$4=deadcode(i[2]);
         
         return /* tuple */[0,
                 /* record */[0,
                  /* Iifthenelse */[1,match[1],match$2[1],match$3[1]],
                  match$4[1],
                  i[3],
                  i[4],
                  i[5],
                  i[6]],
                 Reg["add_set_array"](i[6],i[3])];
         
        case 2:
         var
          cases$prime=
           $$Array["map"](function(c){return deadcode(c)[1];},match[2]);
         
         var match$5=deadcode(i[2]);
         
         return /* tuple */[0,
                 /* record */[0,
                  /* Iswitch */[2,match[1],cases$prime],
                  match$5[1],
                  i[3],
                  i[4],
                  i[5],
                  i[6]],
                 Reg["add_set_array"](i[6],i[3])];
         
        case 3:
         var match$6=deadcode(match[1]);
         
         var match$7=deadcode(i[2]);
         
         return /* tuple */[0,
                 /* record */[0,
                  /* Iloop */[3,match$6[1]],
                  match$7[1],
                  i[3],
                  i[4],
                  i[5],
                  i[6]],
                 i[6]];
         
        case 4:
         var match$8=deadcode(match[2]);
         
         var match$9=deadcode(match[3]);
         
         var match$10=deadcode(i[2]);
         
         return /* tuple */[0,
                 /* record */[0,
                  /* Icatch */[4,match[1],match$8[1],match$9[1]],
                  match$10[1],
                  i[3],
                  i[4],
                  i[5],
                  i[6]],
                 i[6]];
         
        case 5:return /* tuple */[0,i,i[6]];
        case 6:
         var match$11=deadcode(match[1]);
         
         var match$12=deadcode(match[2]);
         
         var match$13=deadcode(i[2]);
         
         return /* tuple */[0,
                 /* record */[0,
                  /* Itrywith */[6,match$11[1],match$12[1]],
                  match$13[1],
                  i[3],
                  i[4],
                  i[5],
                  i[6]],
                 i[6]];
         
        default:exit=17;}}
    
    switch(exit)
     {case 17:return /* tuple */[0,i,Reg["add_set_array"](i[6],i[3])];}
    };

var
 fundecl=
  function(f)
   {var match=deadcode(f[3]);
    
    return /* record */[0,f[1],f[2],match[1],f[4],f[5]];
    };

module["exports"]={"fundecl":fundecl};

