// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var CamlinternalOO=require("CamlinternalOO");
var Mach=require("Mach");
var Pervasives=require("Pervasives");
var Misc=require("Misc");
var $$Array=require("Array");


var shared=[0,"redo_regalloc"];

var
 shared$1=
  [0,
   "reload_test",
   "reload_operation",
   "reload",
   "makeregs",
   "makereg1",
   "makereg",
   "fundecl"];

var
 access_stack=
  function(r)
   {try
     {for(var i=0;i<=r["length"]-1;i++)
       {var match=r[i][4];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){case 0:exit=21;}}
        else
         {switch(match[0]){case 0:exit=21;case 1:throw Pervasives["Exit"];}}
        
        switch(exit){case 21:}
        }
      
      return 0;
      }
    catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
    };

var
 insert_move=
  function(src,dst,next)
   {if("unknown primitive:caml_equal")
     {return next;}
    else
     {return Mach["instr_cons"]([0,0],[src],[dst],next);}
    };

var
 insert_moves=
  function(src,dst,next)
   {var
     insmoves=
      function(i)
       {if(i>=src["length"])
         {return next;}
        else
         {return insert_move(src[i],dst[i],insmoves(i+1));}
        };
    
    return insmoves(0);
    };

var
 reload_generic_init=
  function($$class)
   {var ids=CamlinternalOO["new_methods_variables"]($$class,shared$1,shared);
    
    var reload_test=ids[1];
    
    var reload_operation=ids[2];
    
    var reload=ids[3];
    
    var makeregs=ids[4];
    
    var makereg1=ids[5];
    
    var makereg=ids[6];
    
    var fundecl=ids[7];
    
    var redo_regalloc=ids[8];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       makereg,
       function(self$neg1,r)
        {var match=r[4];
         
         if(typeof match=="number")
          {switch(match){case 0:return Misc["fatal_error"]("Reload.makereg");}}
         else
          {switch(match[0])
            {case 0:return r;
             case 1:
              self$neg1[redo_regalloc]=1,0;
              var newr=Reg["clone"](r);
              
              newr[10]=1e5,0;
              return newr;
              
             }}
         },
       makeregs,
       function(self$neg1,rv)
        {var n=rv["length"];
         
         var newv="unknown primitive:caml_make_vect";
         
         for(var i=0;i<=n-1;i++)
          {"unknown block:(sendself self-1/1106 makereg/1094 (array.get rv/1107 i/1110))";
           newv[i]=0,0}
         
         return newv;
         },
       makereg1,
       function(self$neg1,rv)
        {var newv=$$Array["copy"](rv);
         
         "unknown block:(sendself self-1/1112 makereg/1094 (array.get rv/1113 0))";
         newv[0]=0,0;
         return newv;
         },
       reload_operation,
       function(self$neg1,op,arg,res)
        {var exit;
         
         if("unknown primitive:isint")
          {if(op>=3)
            {exit=13;}
           else
            {var match=arg[0];
             
             var match$1=res[0];
             
             var match$2=match[4];
             
             var exit$1;
             
             if(typeof match$2=="number")
              {switch(match$2){case 0:exit$1=11;}}
             else
              {switch(match$2[0])
                {case 0:exit$1=11;
                 case 1:
                  var match$3=match$1[4];
                  
                  if(typeof match$3=="number")
                   {switch(match$3){case 0:exit$1=11;}}
                  else
                   {switch(match$3[0])
                     {case 0:exit$1=11;
                      case 1:
                       if("unknown primitive:caml_notequal")
                        {"unknown block:(sendself self-1/1116 makereg/1094 (array.get arg/1118 0))";
                         return /* tuple */[0,[0],res];
                         }
                       else
                        {exit$1=11;}
                       
                      }}
                  
                 }}
             
             switch(exit$1){case 11:return /* tuple */[0,arg,res];}
             }
           }
         else
          {exit=13;}
         
         switch(exit)
          {case 13:
            "unknown block:(sendself self-1/1116 makeregs/1095 arg/1118)";
            "unknown block:(sendself self-1/1116 makeregs/1095 res/1119)";
            return /* tuple */[0,0,0];
            
           }
         },
       reload_test,
       function(self$neg1,tst,args)
        {"unknown block:(sendself self-1/1123 makeregs/1095 args/1125)";},
       reload,
       function(self$neg1,i)
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
               {switch(op)
                 {case 3:
                   "unknown block:(sendself self-1/1127 makereg1/1096 (field 2 i/1128))";
                   
                   "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
                   return insert_moves
                           (i[3],newarg,/* record */[0,i[1],0,newarg,i[4],i[5],i[6]]);
                   
                  case 4:
                   "unknown block:(sendself self-1/1127 makereg1/1096 (field 2 i/1128))";
                   
                   var newrecord="unknown primitive:duprecord regular 6";
                   
                   return insert_moves
                           (i[3],newarg$1,(newrecord[3]=newarg$1,0,newrecord));
                   
                  }}
              else
               {switch(op[0])
                 {case 4:exit$1=8;
                  case 5:exit=7;
                  case 6:exit$1=8;
                  default:exit$1=9;}}
              
              switch(exit$1)
               {case 9:
                 "unknown block:(sendself self-1/1127 reload_operation/1097 op/1129 (field 2 i/1128)\n  (field 3 i/1128))";
                 
                 var newres=match$1[2];
                 
                 var newarg$2=match$1[1];
                 
                 "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
                 return insert_moves
                         (i[3],
                          newarg$2,
                          /* record */[0,
                           i[1],
                           insert_moves(newres,i[4],0),
                           newarg$2,
                           newres,
                           i[5],
                           i[6]]);
                 
                case 8:
                 var newrecord$1="unknown primitive:duprecord regular 6";
                 
                 "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
                 newrecord$1[2]=0,0;
                 return newrecord$1;
                 
                }
              
             case 1:
              var tst=match[1];
              
              "unknown block:(sendself self-1/1127 reload_test/1098 tst/1130 (field 2 i/1128))";
              
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 2 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
              return insert_moves
                      (i[3],
                       newarg$3,
                       Mach["instr_cons"]
                        (/* Iifthenelse */[1,tst,0,0],newarg$3,[],0));
              
             case 2:
              "unknown block:(sendself self-1/1127 makeregs/1095 (field 2 i/1128))";
              
              "unknown block:(sendself self-1/1127 reload/1099)";
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
              return insert_moves
                      (i[3],
                       newarg$4,
                       Mach["instr_cons"]
                        (/* Iswitch */[2,match[1],$$Array["map"](0,match[2])],
                         newarg$4,
                         [],
                         0));
              
             case 3:
              "unknown block:(sendself self-1/1127 reload/1099 (field 0 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
              return Mach["instr_cons"](/* Iloop */[3,0],[],[],0);
              
             case 4:
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 2 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
              return Mach["instr_cons"](/* Icatch */[4,match[1],0,0],[],[],0);
              
             case 5:
              return Mach["instr_cons"]
                      (/* Iexit */[5,match[1]],[],[],Mach["dummy_instr"]);
              
             case 6:
              "unknown block:(sendself self-1/1127 reload/1099 (field 0 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 match/1170))";
              "unknown block:(sendself self-1/1127 reload/1099 (field 1 i/1128))";
              return Mach["instr_cons"](/* Itrywith */[6,0,0],[],[],0);
              
             default:exit=7;}}
         
         switch(exit){case 7:return i;}
         },
       fundecl,
       function(self$neg1,f)
        {self$neg1[redo_regalloc]=0,0;
         "unknown block:(sendself self-1/1149 reload/1099 (field 2 f/1150))";
         
         return /* tuple */[0,
                 /* record */[0,f[1],f[2],new_body,f[4],f[5]],
                 self$neg1[redo_regalloc]];
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      $$self$1[redo_regalloc]=0,0;
      return $$self$1;
      };
    };

var
 reload_generic=
  CamlinternalOO["make_class"]
   ([0,"reload_test","makereg","fundecl","reload_operation"],
    reload_generic_init);

module["exports"]={"reload_generic":reload_generic};

