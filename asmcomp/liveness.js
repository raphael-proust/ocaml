// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Printmach=require("Printmach");
var List=require("List");
var Pervasives=require("Pervasives");
var Format=require("Format");
var Misc=require("Misc");
var Proc=require("Proc");


var live_at_exit=[0,0];

var
 find_live_at_exit=
  function(k)
   {try
     {return List["assoc"](k,live_at_exit[1]);}
    catch(exn)
     {if(exn=Not_found)
       {return Misc["fatal_error"]("Liveness.find_live_at_exit");}
      else
       {throw exn;}
      }
    };

var live_at_raise=[0,Reg["Set"][1]];

var
 live=
  function(i,$$finally)
   {var match=i[1];
    
    var exit;
    
    if(typeof match=="number")
     {switch(match){case 0:i[6]=$$finally,0;return $$finally;case 1:exit=27;}}
    else
     {switch(match[0])
       {case 0:
         var op=match[1];
         
         var exit$1;
         
         if(typeof op=="number")
          {switch(op){case 4:exit=27;}}
         else
          {switch(op[0]){case 5:exit=27;default:exit$1=28;}}
         
         switch(exit$1)
          {case 28:
            var after=live(i[2],$$finally);
            
            if
             (Proc["op_is_pure"](op)&&
              Reg["disjoint_set_array"](after,i[4])&&
              !Proc["regs_are_volatile"](i[3])&&
              !Proc["regs_are_volatile"](i[4]))
             {i[6]=after,0;return after;}
            else
             {var across_after=Reg["diff_set_array"](after,i[4]);
              
              var exit$2;
              
              if(typeof op=="number")
               {switch(op){case 3:exit$2=5;}}
              else
               {switch(op[0])
                 {case 4:exit$2=5;
                  case 6:exit$2=5;
                  case 11:exit$2=7;
                  case 12:exit$2=7;
                  default:exit$2=6;}}
              
              switch(exit$2)
               {case 7:
                 var match$1=op[1];
                 
                 if("unknown primitive:isint")
                  {if(match$1>=12)
                    {"unknown block:(exit 5)";}
                   else
                    {"unknown block:(exit 6)";}
                   }
                 else
                  {"unknown block:(exit 6)";}
                 
                case 6:var across=across_after;
                case 5:
                 var across=Reg["Set"][7](across_after,live_at_raise[1]);
                }
              
              i[6]=across,0;
              return Reg["add_set_array"](across,i[3]);
              }
            
           }
         
        case 1:
         var at_join=live(i[2],$$finally);
         
         var
          at_fork=
           Reg["Set"][7](live(match[2],at_join),live(match[3],at_join));
         
         i[6]=at_fork,0;
         return Reg["add_set_array"](at_fork,i[3]);
         
        case 2:
         var cases=match[2];
         
         var at_join$1=live(i[2],$$finally);
         
         var at_fork$1=Reg["Set"][1];
         
         for(var i$1=0;i$1<=cases["length"]-1;i$1++)
          {at_fork$1=Reg["Set"][7](at_fork$1,live(cases[i$1],at_join$1));}
         
         i[6]=at_fork$1,0;
         return Reg["add_set_array"](at_fork$1,i[3]);
         
        case 3:
         var body=match[1];
         
         var at_top=Reg["Set"][1];
         
         try
          {while(1)
            {var new_at_top=Reg["Set"][7](at_top,live(body,at_top));
             
             if(Reg["Set"][11](at_top,new_at_top))
              {throw Pervasives["Exit"];}
             else
              {}
             
             at_top=new_at_top;
             }
           }
         catch(exn){if(exn=Pervasives["Exit"]){}else{throw exn;}}
         
         i[6]=at_top,0;
         return at_top;
         
        case 4:
         var at_join$2=live(i[2],$$finally);
         
         var before_handler=live(match[3],at_join$2);
         
         live_at_exit[1]=
         /* :: */[0,/* tuple */[0,match[1],before_handler],live_at_exit[1]],
         0;
         var before_body=live(match[2],at_join$2);
         
         live_at_exit[1]=List["tl"](live_at_exit[1]),0;
         var before_body$1=before_body;
         
         i[6]=before_body$1,0;
         return before_body$1;
         
        case 5:
         var this_live=find_live_at_exit(match[1]);
         
         i[6]=this_live,0;
         return this_live;
         
        case 6:
         var at_join$3=live(i[2],$$finally);
         
         var before_handler$1=live(match[2],at_join$3);
         
         var saved_live_at_raise=live_at_raise[1];
         
         live_at_raise[1]=
         Reg["Set"][6](Proc["loc_exn_bucket"],before_handler$1),
         0;
         var before_body$2=live(match[1],at_join$3);
         
         live_at_raise[1]=saved_live_at_raise,0;
         i[6]=before_body$2,0;
         return before_body$2;
         
        case 7:
         i[6]=live_at_raise[1],0;
         return Reg["add_set_array"](live_at_raise[1],i[3]);
         
        }}
    
    switch(exit)
     {case 27:i[6]=Reg["Set"][1],0;return Reg["set_of_array"](i[3]);}
    };

var
 reset=
  function(param)
   {live_at_raise[1]=Reg["Set"][1],0;return live_at_exit[1]=0,0;};

var
 fundecl=
  function(ppf,f)
   {var initially_live=live(f[3],Reg["Set"][1]);
    
    var wrong_live=Reg["Set"][9](initially_live,Reg["set_of_array"](f[2]));
    
    if(!Reg["Set"][2](wrong_live))
     {Format["fprintf"]
       (ppf,[0,[15,[17,4,0]],"%a@."],Printmach["regset"],wrong_live);
      return Misc["fatal_error"]("Liveness.fundecl");
      }
    else
     {return 0;}
    };

module["exports"]={"reset":reset,"fundecl":fundecl};

