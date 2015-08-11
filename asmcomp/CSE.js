// Generated CODE, PLEASE EDIT WITH CARE 

var CamlinternalOO=require("CamlinternalOO");
var CSEgen=require("CSEgen");


var shared=[0,"class_of_operation","fundecl","is_cheap_operation"];

var
 cse_init=
  function($$class)
   {var
     class_of_operation=
      CamlinternalOO["get_method_label"]($$class,"class_of_operation");
    
    var
     inh=
      CamlinternalOO["inherits"]($$class,0,0,shared,CSEgen["cse_generic"],1);
    
    var obj_init=inh[1];
    
    var class_of_operation$1=inh[2];
    
    CamlinternalOO["set_method"]
     ($$class,
      class_of_operation,
      function(self$neg1,op)
       {var exit;
        
        if(typeof op=="number")
         {switch(op){}}
        else
         {switch(op[0])
           {case 13:
             var spec=op[1];
             
             var exit$1;
             
             if(typeof spec=="number")
              {switch(spec){case 0:exit$1=4;}}
             else
              {switch(spec[0])
                {case 0:return 0;
                 case 1:exit$1=5;
                 case 2:exit$1=5;
                 case 3:return [0,1];
                 case 4:exit$1=3;
                 case 5:exit$1=4;
                 case 6:exit$1=3;
                 }}
             
             switch(exit$1)
              {case 5:return /* Op_store */[0,spec[3]];
               case 3:return 2;
               case 4:return class_of_operation$1(self$neg1,op);
               }
             
            default:exit=6;}}
        
        switch(exit){case 6:return class_of_operation$1(self$neg1,op);}
        });
    return function(env,$$self)
     {var $$self$1=CamlinternalOO["create_object_opt"]($$self,$$class);
      
      obj_init($$self$1);
      return CamlinternalOO["run_initializers_opt"]($$self,$$self$1,$$class);
      };
    };

var
 cse=
  CamlinternalOO["make_class"]
   ([0,"is_cheap_operation","class_of_operation","fundecl"],cse_init);

var
 fundecl=
  function(f)
   {"unknown block:(send (apply (field 0 cse/1011) 0a) -238507991 f/1027)";};

module["exports"]={"cse":cse,"fundecl":fundecl};

