// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var List=require("List");
var Pervasives=require("Pervasives");
var Clflags=require("Clflags");
var Misc=require("Misc");
var Ccomp=require("Ccomp");
var Filename=require("Filename");
var Arch=require("Arch");
var Config=require("Config");
var $$Array=require("Array");


var fp=Config["with_frame_pointers"];

var match=Config["system"];

var exit;

switch(match)
 {case "cygwin":exit=81;
  case "mingw64":exit=81;
  case "win64":exit=81;
  default:exit=82;}

switch(exit){case 82:var win64=0;case 81:var win64=1;}

var match$1=Config["ccomp_type"];

switch(match$1){case "msvc":var masm=1;default:var masm=0;}

var match$2=Config["ccomp_type"];

switch(match$2)
 {case "msvc":var int_reg_name="unknown primitive:caml_obj_dup";
  default:var int_reg_name="unknown primitive:caml_obj_dup";}

var match$3=Config["ccomp_type"];

switch(match$3)
 {case "msvc":var float_reg_name="unknown primitive:caml_obj_dup";
  default:var float_reg_name="unknown primitive:caml_obj_dup";}

var num_register_classes=2;

var
 register_class=
  function(r){var match$4=r[3];if(match$4>=2){return 1;}else{return 0;}};

var num_available_registers=[13,16];

var first_available_register=[0,100];

var
 register_name=
  function(r)
   {if(r<100){return int_reg_name[r];}else{return float_reg_name[r-100];}};

var rotate_registers=0;

var v="unknown primitive:caml_make_vect";

for(var i=0;i<=12;i++){v[i]=Reg["at_location"](1,/* Reg */[0,i]),0}

var hard_int_reg=v;

var v$1="unknown primitive:caml_make_vect";

for(var i$1=0;i$1<=15;i$1++)
 {v$1[i$1]=Reg["at_location"](2,/* Reg */[0,100+i$1]),0}

var hard_float_reg=v$1;

var all_phys_regs=$$Array["append"](hard_int_reg,hard_float_reg);

var
 phys_reg=
  function(n)
   {if(n<100){return hard_int_reg[n];}else{return hard_float_reg[n-100];}};

var rax=phys_reg(0);

var rcx=phys_reg(5);

var rdx=phys_reg(4);

var rbp=phys_reg(12);

var rxmm15=phys_reg(115);

var
 stack_slot=
  function(slot,ty){return Reg["at_location"](ty,/* Stack */[1,slot]);};

var word_addressed=0;

var
 calling_conventions=
  function(first_int,last_int,first_float,last_float,make_stack,arg)
   {var loc="unknown primitive:caml_make_vect";
    
    var $$int=first_int;
    
    var $$float=first_float;
    
    var ofs=0;
    
    for(var i$2=0;i$2<=arg["length"]-1;i$2++)
     {var ty=arg[i$2][3];
      
      if(ty>=2)
       {if($$float<=last_float)
         {loc[i$2]=phys_reg($$float),0;$$float=1+$$float;}
        else
         {loc[i$2]=stack_slot(make_stack(ofs),2),0;
          ofs=ofs+Arch["size_float"];
          }
        }
      else
       {if($$int<=last_int)
         {loc[i$2]=phys_reg($$int),0;$$int=1+$$int;}
        else
         {loc[i$2]=stack_slot(make_stack(ofs),ty),0;ofs=ofs+Arch["size_int"];}
        }
      }
    
    return /* tuple */[0,loc,Misc["align"](ofs,16)];
    };

var incoming=function(ofs){return /* Incoming */[1,ofs];};

var outgoing=function(ofs){return /* Outgoing */[2,ofs];};

var
 not_supported=
  function(ofs){return Misc["fatal_error"]("Proc.loc_results: cannot call");};

var
 loc_arguments=
  function(arg){return calling_conventions(0,9,100,109,outgoing,arg);};

var
 loc_parameters=
  function(arg)
   {var match$4=calling_conventions(0,9,100,109,incoming,arg);
    
    return match$4[1];
    };

var
 loc_results=
  function(res)
   {var match$4=calling_conventions(0,0,100,100,not_supported,res);
    
    return match$4[1];
    };

var
 loc_external_results=
  function(res)
   {var match$4=calling_conventions(0,0,100,100,not_supported,res);
    
    return match$4[1];
    };

var
 unix_loc_external_arguments=
  function(arg){return calling_conventions(2,7,100,107,outgoing,arg);};

var win64_int_external_arguments=[5,4,6,7];

var win64_float_external_arguments=[100,101,102,103];

var
 win64_loc_external_arguments=
  function(arg)
   {var loc="unknown primitive:caml_make_vect";
    
    var reg=0;
    
    var ofs=32;
    
    for(var i$2=0;i$2<=arg["length"]-1;i$2++)
     {var ty=arg[i$2][3];
      
      if(ty>=2)
       {if(reg<4)
         {loc[i$2]=phys_reg(win64_float_external_arguments[reg]),0;reg=1+reg;}
        else
         {loc[i$2]=stack_slot(/* Outgoing */[2,ofs],2),0;
          ofs=ofs+Arch["size_float"];
          }
        }
      else
       {if(reg<4)
         {loc[i$2]=phys_reg(win64_int_external_arguments[reg]),0;reg=1+reg;}
        else
         {loc[i$2]=stack_slot(/* Outgoing */[2,ofs],ty),0;
          ofs=ofs+Arch["size_int"];
          }
        }
      }
    
    return /* tuple */[0,loc,Misc["align"](ofs,16)];
    };

if(win64)
 {var loc_external_arguments=win64_loc_external_arguments;}
else
 {var loc_external_arguments=unix_loc_external_arguments;}

var loc_exn_bucket=rax;

var regs_are_volatile=function(rs){return 0;};

if(win64)
 {var
   destroyed_at_c_call=
    $$Array["of_list"]
     (List["map"]
       (phys_reg,
        [0,
         0,
         [0,
          4,
          [0,
           5,
           [0,
            6,
            [0,
             7,
             [0,10,[0,11,[0,100,[0,101,[0,102,[0,103,[0,104,[0,105,0]]]]]]]]]]]]]));
  }
else
 {var
   destroyed_at_c_call=
    $$Array["of_list"]
     (List["map"]
       (phys_reg,
        [0,
         0,
         [0,
          2,
          [0,
           3,
           [0,
            4,
            [0,
             5,
             [0,
              6,
              [0,
               7,
               [0,
                10,
                [0,
                 11,
                 [0,
                  100,
                  [0,
                   101,
                   [0,
                    102,
                    [0,
                     103,
                     [0,
                      104,
                      [0,
                       105,
                       [0,
                        106,
                        [0,
                         107,
                         [0,
                          108,
                          [0,109,[0,110,[0,111,[0,112,[0,113,[0,114,[0,115,0]]]]]]]]]]]]]]]]]]]]]]]]]));
  }

var
 destroyed_at_oper=
  function(param)
   {var exit$1;
    
    if(typeof param=="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 0:
         var match$4=param[1];
         
         var exit$2;
         
         if(typeof match$4=="number")
          {switch(match$4){case 3:exit$2=21;}}
         else
          {switch(match$4[0])
            {case 4:exit$2=21;
             case 6:
              if(match$4[2]!=0){exit$2=21;}else{return destroyed_at_c_call;}
             case 9:if(match$4[1]!=7){exit$1=20;}else{return [rxmm15];}
             case 10:exit$2=22;
             case 11:
              var match$5=match$4[1];
              
              if("unknown primitive:isint")
               {if(match$5>=4)
                 {if(match$5>=6){exit$1=20;}else{exit$1=19;}}
                else
                 {if(match$5>=3){exit$2=22;}else{exit$1=20;}}
                }
              else
               {exit$2=22;}
              
             case 12:
              var match$6=match$4[1];
              
              if("unknown primitive:isint")
               {if(1<-4+match$6>>>0){exit$1=20;}else{exit$1=19;}}
              else
               {exit$2=22;}
              
             default:exit$1=20;}}
         
         switch(exit$2){case 21:return all_phys_regs;case 22:return [rax];}
         
        case 2:return [rax,rdx];
        default:exit$1=20;}}
    
    switch(exit$1)
     {case 20:if(fp){return [rbp];}else{return [];}case 19:return [rax,rdx];}
    };

var destroyed_at_raise=all_phys_regs;

var
 safe_register_pressure=
  function(param)
   {var exit$1;
    
    if(typeof param=="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 6:if(win64){if(fp){return 7;}else{return 8;}}else{return 0;}
        default:exit$1=16;}}
    
    switch(exit$1){case 16:if(fp){return 10;}else{return 11;}}
    };

var
 max_register_pressure=
  function(param)
   {var exit$1;
    
    if(typeof param=="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 6:
         if(win64)
          {if(fp){return [7,10];}else{return [8,10];}}
         else
          {if(fp){return [3,0];}else{return [4,0];}}
         
        case 9:
         if(param[1]!=7)
          {exit$1=12;}
         else
          {if(fp){return [12,15];}else{return [13,15];}}
         
        case 10:exit$1=11;
        case 11:
         var match$4=param[1];
         
         if("unknown primitive:isint")
          {if(1<-4+match$4>>>0){exit$1=12;}else{exit$1=10;}}
         else
          {exit$1=11;}
         
        case 12:
         var match$5=param[1];
         
         if("unknown primitive:isint")
          {if(1<-4+match$5>>>0){exit$1=12;}else{exit$1=10;}}
         else
          {exit$1=11;}
         
        default:exit$1=12;}}
    
    switch(exit$1)
     {case 12:if(fp){return [12,16];}else{return [13,16];}
      case 10:if(fp){return [10,16];}else{return [11,16];}
      case 11:if(fp){return [11,16];}else{return [12,16];}
      }
    };

var
 op_is_pure=
  function(param)
   {var exit$1;
    
    if(typeof param=="number")
     {switch(param){case 3:exit$1=5;case 4:exit$1=5;}}
    else
     {switch(param[0])
       {case 4:exit$1=5;
        case 5:exit$1=5;
        case 6:exit$1=5;
        case 7:exit$1=5;
        case 9:exit$1=5;
        case 10:exit$1=5;
        case 11:exit$1=8;
        case 12:exit$1=8;
        case 13:
         var exit$2;
         
         var $js=param[1];
         if(typeof $js=="number")
          {switch($js){}}
         else
          {switch($js[0]){case 0:return 1;default:exit$2=7;}}
         
         switch(exit$2){case 7:return 0;}
         
        default:exit$1=6;}}
    
    switch(exit$1)
     {case 8:
       var match$4=param[1];
       
       if("unknown primitive:isint")
        {if(match$4>=12)
          {"unknown block:(exit 5)";}
         else
          {"unknown block:(exit 6)";}
         }
       else
        {"unknown block:(exit 6)";}
       
      case 6:return 1;
      case 5:return 0;
      }
    };

var num_stack_slots=[0,0];

var contains_calls=[0,0];

var
 assemble_file=
  function(infile,outfile)
   {if(masm)
     {return Ccomp["command"]
              (Pervasives["^"]
                (Config["asm"],
                 Pervasives["^"]
                  (Filename["quote"](outfile),
                   Pervasives["^"]
                    (" ",
                     Pervasives["^"]
                      (Filename["quote"](infile),Clflags["verbose"][1]?"":">NUL")))));
      }
    else
     {return Ccomp["command"]
              (Pervasives["^"]
                (Config["asm"],
                 Pervasives["^"]
                  (" -o ",
                   Pervasives["^"]
                    (Filename["quote"](outfile),
                     Pervasives["^"](" ",Filename["quote"](infile))))));
      }
    };

var
 init=
  function(param)
   {if(fp)
     {return num_available_registers[0]=12,0;}
    else
     {return num_available_registers[0]=13,0;}
    };

module["exports"]=
{"word_addressed":word_addressed,
 "num_register_classes":num_register_classes,
 "register_class":register_class,
 "num_available_registers":num_available_registers,
 "first_available_register":first_available_register,
 "register_name":register_name,
 "phys_reg":phys_reg,
 "rotate_registers":rotate_registers,
 "loc_arguments":loc_arguments,
 "loc_results":loc_results,
 "loc_parameters":loc_parameters,
 "loc_external_arguments":loc_external_arguments,
 "loc_external_results":loc_external_results,
 "loc_exn_bucket":loc_exn_bucket,
 "safe_register_pressure":safe_register_pressure,
 "max_register_pressure":max_register_pressure,
 "destroyed_at_oper":destroyed_at_oper,
 "destroyed_at_raise":destroyed_at_raise,
 "regs_are_volatile":regs_are_volatile,
 "op_is_pure":op_is_pure,
 "num_stack_slots":num_stack_slots,
 "contains_calls":contains_calls,
 "assemble_file":assemble_file,
 "init":init};

