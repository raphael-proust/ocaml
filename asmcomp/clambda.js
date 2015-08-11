// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Nativeint=require("Nativeint");
var Int32=require("Int32");
var Int64=require("Int64");


var
 compare_floats=
  function(x1,x2)
   {return Int64["compare"]
            ("unknown primitive:caml_int64_bits_of_float",
             "unknown primitive:caml_int64_bits_of_float");
    };

var
 compare_float_lists=
  function(l1,l2)
   {if(l1)
     {if(l2)
       {var c=compare_floats(l1[1],l2[1]);
        
        if(c!=0){return c;}else{return compare_float_lists(l1[2],l2[2]);}
        }
      else
       {return 1;}
      }
    else
     {if(l2){return -1;}else{return 0;}}
    };

var
 compare_constants=
  function(c1,c2)
   {switch(c1)
     {case 0:
       var exit;
       
       switch(c2)
        {case 0:return $$String["compare"](c1[1],c2[1]);
         case 1:exit=6;
         case 2:exit=6;
         }
       
       switch(exit){case 6:return -1;}
       
      case 1:
       switch(c2)
        {case 0:return 1;
         case 1:return "unknown primitive:caml_int_compare";
         case 2:return -1;
         }
       
      case 2:
       var exit$1;
       
       switch(c2)
        {case 0:exit$1=7;
         case 1:exit$1=7;
         case 2:return "unknown primitive:caml_int_compare";
         }
       
       switch(exit$1){case 7:return 1;}
       
      }
    };

var
 compare_constant_lists=
  function(l1,l2)
   {if(l1)
     {if(l2)
       {var c=compare_constants(l1[1],l2[1]);
        
        if(c!=0){return c;}else{return compare_constant_lists(l1[2],l2[2]);}
        }
      else
       {return 1;}
      }
    else
     {if(l2){return -1;}else{return 0;}}
    };

var
 rank_structured_constant=
  function(param)
   {switch(param)
     {case 0:return 0;
      case 1:return 1;
      case 2:return 2;
      case 3:return 3;
      case 4:return 4;
      case 5:return 5;
      case 6:return 6;
      }
    };

var
 compare_structured_constants=
  function(c1,c2)
   {var exit;
    
    switch(c1)
     {case 0:
       switch(c2){case 0:return compare_floats(c1[1],c2[1]);default:exit=2;}
      case 1:
       switch(c2){case 1:return Int32["compare"](c1[1],c2[1]);default:exit=2;}
      case 2:
       switch(c2){case 2:return Int64["compare"](c1[1],c2[1]);default:exit=2;}
      case 3:
       switch(c2)
        {case 3:return Nativeint["compare"](c1[1],c2[1]);default:exit=2;}
       
      case 4:
       switch(c2)
        {case 4:
          var c=c1[1]-c2[1];
          
          if(c!=0){return c;}else{return compare_constant_lists(c1[2],c2[2]);}
          
         default:exit=2;}
       
      case 5:
       switch(c2)
        {case 5:return compare_float_lists(c1[1],c2[1]);default:exit=2;}
       
      case 6:
       switch(c2)
        {case 6:return $$String["compare"](c1[1],c2[1]);default:exit=2;}
       
      }
    
    switch(exit)
     {case 2:return rank_structured_constant(c1)-rank_structured_constant(c2);
      }
    };

module["exports"]=
{"compare_structured_constants":compare_structured_constants,
 "compare_constants":compare_constants};

