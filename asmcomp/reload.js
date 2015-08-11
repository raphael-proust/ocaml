// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("CamlinternalOO");
var Reloadgen=require("Reloadgen");
var Clflags=require("Clflags");
var Arch=require("Arch");


var shared=[0,"fundecl","makereg","reload_operation","reload_test"];

var shared$1=[0,"reload_test","reload_operation","makereg"];

var
 stackp=
  function(r)
   {var match=r[4];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:exit=15;}}
    else
     {switch(match[0]){case 0:exit=15;case 1:return 1;}}
    
    switch(exit){case 15:return 0;}
    };

var
 reload_init=
  function($$class)
   {var ids=CamlinternalOO["get_method_labels"]($$class,shared$1);
    
    var reload_test=ids[1];
    
    var reload_operation=ids[2];
    
    var makereg=ids[3];
    
    var
     inh=
      CamlinternalOO["inherits"]
       ($$class,0,0,shared,Reloadgen["reload_generic"],1);
    
    var obj_init=inh[1];
    
    var reload_operation$1=inh[4];
    
    CamlinternalOO["set_methods"]
     ($$class,
      [0,
       reload_operation,
       function(self$neg1,op,arg,res)
        {var exit;
         
         if(typeof op=="number")
          {switch(op)
            {case 7:exit=7;
             case 8:exit=7;
             case 9:exit=7;
             case 10:exit=7;
             case 11:exit=8;
             case 12:exit=8;
             }}
         else
          {switch(op[0])
            {case 0:exit=14;
             case 2:
              if(Arch["pic_code"][1]||Clflags["dlcode"][1])
               {return reload_operation$1(self$neg1,op,arg,res);}
              else
               {return /* tuple */[0,arg,res];}
              
             case 3:exit=14;
             case 11:
              var match=op[1];
              
              var exit$1;
              
              if("unknown primitive:isint")
               {if(match>=2)
                 {switch((-2+match)[0])
                   {case 0:exit=7;
                    case 1:exit=6;
                    case 2:exit=6;
                    case 3:exit=6;
                    case 4:exit$1=12;
                    case 5:exit$1=12;
                    case 6:exit$1=12;
                    case 7:exit=6;
                    case 8:exit=6;
                    case 9:exit=6;
                    case 10:exit$1=12;
                    }
                  }
                else
                 {exit$1=12;}
                }
              else
               {exit$1=12;}
              
              switch(exit$1)
               {case 12:
                 if(stackp(arg[0])&&stackp(arg[1]))
                  {"unknown block:(sendself self-1/1081 makereg/1087 (array.get arg/1083 1))";
                   return /* tuple */[0,[arg[0],0],res];
                   }
                 else
                  {return /* tuple */[0,arg,res];}
                 
                }
              
             case 12:
              var match$1=op[1];
              
              var exit$2;
              
              if("unknown primitive:isint")
               {if(match$1!=0)
                 {exit$2=11;}
                else
                 {if("unknown primitive:caml_notequal")
                   {return reload_operation$1(self$neg1,op,arg,res);}
                  else
                   {exit$2=11;}
                  }
                }
              else
               {exit$2=11;}
              
              switch(exit$2){case 11:exit=6;}
              
             default:exit=10;}}
         
         switch(exit)
          {case 14:
            var n=op[1];
            
            if(n<=2147483647&&n>=-2147483648)
             {return /* tuple */[0,arg,res];}
            else
             {return reload_operation$1(self$neg1,op,arg,res);}
            
           case 10:return reload_operation$1(self$neg1,op,arg,res);
           case 6:return /* tuple */[0,arg,res];
           case 7:
            if(stackp(arg[0]))
             {"unknown block:(sendself self-1/1081 makereg/1087 (array.get arg/1083 0))";
              
              return /* tuple */[0,[r,arg[1]],[r]];
              }
            else
             {return /* tuple */[0,arg,res];}
            
           case 8:
            if(stackp(res[0]))
             {"unknown block:(sendself self-1/1081 makereg/1087 (array.get res/1084 0))";
              var $js=[0];
              }
            else
             {var $js=res;}
            return /* tuple */[0,arg,$js];
            
           }
         },
       reload_test,
       function(self$neg1,tst,arg)
        {var exit;
         
         if(typeof tst=="number")
          {switch(tst){}}
         else
          {switch(tst[0])
            {case 0:
              if(stackp(arg[0])&&stackp(arg[1]))
               {"unknown block:(sendself self-1/1090 makereg/1087 (array.get arg/1092 0))";
                return [0,arg[1]];
                }
              else
               {return arg;}
              
             case 2:
              if(1<-2+tst[1]>>>0)
               {if(stackp(arg[0]))
                 {"unknown block:(sendself self-1/1090 makereg/1087 (array.get arg/1092 0))";
                  return [0,arg[1]];
                  }
                else
                 {return arg;}
                }
              else
               {if(stackp(arg[1]))
                 {"unknown block:(sendself self-1/1090 makereg/1087 (array.get arg/1092 1))";
                  return [arg[0],0];
                  }
                else
                 {return arg;}
                }
              
             default:exit=2;}}
         
         switch(exit){case 2:return arg;}
         }]);
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 reload=
  CamlinternalOO["make_class"]
   ([0,"reload_test","makereg","fundecl","reload_operation"],reload_init);

var
 fundecl=
  function(f)
   {"unknown block:(send (apply (field 0 reload/1069) 0a) -238507991 f/1095)";
    };

module["exports"]={"fundecl":fundecl};

