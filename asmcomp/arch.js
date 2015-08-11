// Generated CODE, PLEASE EDIT WITH CARE 

var Printf=require("Printf");
var Format=require("Format");
var $$Array=require("Array");


var pic_code=[0,1];

var
 command_line_options=
  /* :: */[0,
   /* tuple */[0,
    "-fPIC",
    /* Set */[2,pic_code],
    " Generate position-independent machine code (default)"],
   /* :: */[0,
    /* tuple */[0,
     "-fno-PIC",
     /* Clear */[3,pic_code],
     " Generate position-dependent machine code"],
    0]];

var big_endian=0;

var size_addr=8;

var size_int=8;

var size_float=8;

var allow_unaligned_access=1;

var division_crashes_on_overflow=1;

var identity_addressing=[1,0];

var
 offset_addressing=
  function(addr,delta)
   {switch(addr)
     {case 0:return /* Ibased */[0,addr[1],addr[2]+delta];
      case 1:return /* Iindexed */[1,addr[1]+delta];
      case 2:return /* Iindexed2 */[2,addr[1]+delta];
      case 3:return /* Iscaled */[3,addr[1],addr[2]+delta];
      case 4:return /* Iindexed2scaled */[4,addr[1],addr[2]+delta];
      }
    };

var
 num_args_addressing=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:return 0;
      case 1:exit=9;
      case 2:exit=10;
      case 3:exit=9;
      case 4:exit=10;
      }
    
    switch(exit){case 9:return 1;case 10:return 2;}
    };

var
 print_addressing=
  function(printreg,addr,ppf,arg)
   {switch(addr)
     {case 0:
       var n=addr[2];
       
       var s=addr[1];
       
       if(n!=0)
        {return Format["fprintf"]
                 (ppf,
                  [0,[12,34,[2,0,[11,'" + ',[4,3,0,0,0]]]],'"%s" + %i'],
                  s,
                  n);
         }
       else
        {return Format["fprintf"](ppf,[0,[12,34,[2,0,[12,34,0]]],'"%s"'],s);}
       
      case 1:
       var n$1=addr[1];
       
       if(n$1!=0)
        {var idx=Printf["sprintf"]([0,[11," + ",[4,3,0,0,0]]," + %i"],n$1);}
       else
        {var idx="";}
       
       return Format["fprintf"]
               (ppf,[0,[15,[2,0,0]],"%a%s"],printreg,arg[0],idx);
       
      case 2:
       var n$2=addr[1];
       
       if(n$2!=0)
        {var idx$1=Printf["sprintf"]([0,[11," + ",[4,3,0,0,0]]," + %i"],n$2);}
       else
        {var idx$1="";}
       
       return Format["fprintf"]
               (ppf,
                [0,[15,[11," + ",[15,[2,0,0]]]],"%a + %a%s"],
                printreg,
                arg[0],
                printreg,
                arg[1],
                idx$1);
       
      case 3:
       var n$3=addr[2];
       
       if(n$3!=0)
        {var idx$2=Printf["sprintf"]([0,[11," + ",[4,3,0,0,0]]," + %i"],n$3);}
       else
        {var idx$2="";}
       
       return Format["fprintf"]
               (ppf,
                [0,[15,[11,"  * ",[4,3,0,0,[2,0,0]]]],"%a  * %i%s"],
                printreg,
                arg[0],
                addr[1],
                idx$2);
       
      case 4:
       var n$4=addr[2];
       
       if(n$4!=0)
        {var idx$3=Printf["sprintf"]([0,[11," + ",[4,3,0,0,0]]," + %i"],n$4);}
       else
        {var idx$3="";}
       
       return Format["fprintf"]
               (ppf,
                [0,
                 [15,[11," + ",[15,[11," * ",[4,3,0,0,[2,0,0]]]]]],
                 "%a + %a * %i%s"],
                printreg,
                arg[0],
                printreg,
                arg[1],
                addr[1],
                idx$3);
       
      }
    };

var
 print_specific_operation=
  function(printreg,op,ppf,arg)
   {if(typeof op=="number")
     {switch(op)
       {case 0:
         return Format["fprintf"]
                 (ppf,[0,[11,"sqrtf ",[15,0]],"sqrtf %a"],printreg,arg[0]);
         
        }}
    else
     {switch(op[0])
       {case 0:return print_addressing(printreg,op[1],ppf,arg);
        case 1:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [12,91,[15,[11,"] := ",[6,0,0,0,[12,32,[2,0,0]]]]]],
                   "[%a] := %nd %s"],
                  print_addressing(printreg,op[2]),
                  arg,
                  op[1],
                  op[3]?"(assign)":"(init)");
         
        case 2:
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [12,91,[15,[11,'] := "',[2,0,[11,'" ',[2,0,0]]]]]],
                   '[%a] := "%s" %s'],
                  print_addressing(printreg,op[2]),
                  arg,
                  op[1],
                  op[3]?"(assign)":"(init)");
         
        case 3:
         return Format["fprintf"]
                 (ppf,
                  [0,[12,91,[15,[11,"] +:= ",[4,3,0,0,0]]]],"[%a] +:= %i"],
                  print_addressing(printreg,op[2]),
                  arg,
                  op[1]);
         
        case 4:
         var
          op_name=
           function(param)
            {switch(param[0])
              {case 0:return "+f";
               case 1:return "-f";
               case 2:return "*f";
               case 3:return "/f";
               }
             };
         
         return Format["fprintf"]
                 (ppf,
                  [0,
                   [15,[12,32,[2,0,[11," float64[",[15,[12,93,0]]]]]],
                   "%a %s float64[%a]"],
                  printreg,
                  arg[0],
                  op_name(op[1]),
                  print_addressing(printreg,op[2]),
                  $$Array["sub"](arg,1,arg["length"]-1));
         
        case 5:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"bswap_",[4,3,0,0,[12,32,[15,0]]]],"bswap_%i %a"],
                  op[1],
                  printreg,
                  arg[0]);
         
        case 6:
         return Format["fprintf"]
                 (ppf,
                  [0,[11,"sqrtf float64[",[15,[12,93,0]]],"sqrtf float64[%a]"],
                  print_addressing(printreg,op[1]),
                  [arg[0]]);
         
        }}
    };

module["exports"]=
{"pic_code":pic_code,
 "command_line_options":command_line_options,
 "big_endian":big_endian,
 "size_addr":size_addr,
 "size_int":size_int,
 "size_float":size_float,
 "allow_unaligned_access":allow_unaligned_access,
 "division_crashes_on_overflow":division_crashes_on_overflow,
 "identity_addressing":identity_addressing,
 "offset_addressing":offset_addressing,
 "num_args_addressing":num_args_addressing,
 "print_addressing":print_addressing,
 "print_specific_operation":print_specific_operation};

