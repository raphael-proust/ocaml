// Generated CODE, PLEASE EDIT WITH CARE 

var Arch=require("Arch");


var typ_void=[];

var typ_addr=[0];

var typ_int=[1];

var typ_float=[2];

var
 size_component=
  function(param)
   {switch(param[0])
     {case 0:return Arch["size_addr"];
      case 1:return Arch["size_int"];
      case 2:return Arch["size_float"];
      }
    };

var
 size_machtype=
  function(mty)
   {var size=0;
    
    for(var i=0;i<=mty["length"]-1;i++){size=size+size_component(mty[i]);}
    
    return size;
    };

var
 negate_comparison=
  function(param)
   {switch(param[0])
     {case 0:return 1;
      case 1:return 0;
      case 2:return 5;
      case 3:return 4;
      case 4:return 3;
      case 5:return 2;
      }
    };

var
 swap_comparison=
  function(param)
   {switch(param[0])
     {case 0:return 0;
      case 1:return 1;
      case 2:return 4;
      case 3:return 5;
      case 4:return 2;
      case 5:return 3;
      }
    };

module["exports"]=
{"typ_void":typ_void,
 "typ_addr":typ_addr,
 "typ_int":typ_int,
 "typ_float":typ_float,
 "size_component":size_component,
 "size_machtype":size_machtype,
 "negate_comparison":negate_comparison,
 "swap_comparison":swap_comparison};

