// Generated CODE, PLEASE EDIT WITH CARE 

var Stack=require("./stack.js");
var Instruct=require("./instruct.js");
var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Matching=require("./matching.js");
var Printf=require("./printf.js");
var Switch=require("./switch.js");
var Misc=require("./misc.js");
var Lambda=require("./lambda.js");
var Subst=require("./subst.js");
var Ident=require("./ident.js");
var Config=require("./config.js");
var CamlPrimitive=require("./camlPrimitive.js");


var label_counter=[0,0];

var new_label=function(param){label_counter[0]++;return label_counter[1];};

var empty_env=/* record */[0,Ident["empty"],Ident["empty"],Ident["empty"]];

var
 add_var=
  function(id,pos,env)
   {return /* record */[0,Ident["add"](id,pos,env[1]),env[2],env[3]];};

var
 add_vars=
  function(idlist,pos,env)
   {if(idlist)
     {return add_vars(idlist[2],pos+1,add_var(idlist[1],pos,env));}
    else
     {return env;}
    };

var
 label_code=
  function(cont)
   {var exit;
    
    if(cont)
     {var match=cont[1];
      
      var exit$1;
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 0:exit$1=181;case 22:exit$1=181;default:exit=180;}}
      
      switch(exit$1){case 181:return /* tuple */[0,match[1],cont];}
      }
    else
     {exit=180;}
    
    switch(exit)
     {case 180:
       var lbl=new_label(/* () */0);
       
       return /* tuple */[0,lbl,/* :: */[0,/* Klabel */[0,lbl],cont]];
       
      }
    };

var
 make_branch_2=
  function(lbl,n,cont,param)
   {var exit;
    
    if(param)
     {var match=param[1];
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 0:return make_branch_2(lbl,n,cont,param[2]);
          case 3:return make_branch_2(lbl,n+match[1],cont,param[2]);
          case 8:return /* tuple */[0,/* Kreturn */[8,n+match[1]],cont];
          default:exit=178;}}
      }
    else
     {exit=178;}
    
    switch(exit)
     {case 178:
       if(lbl)
        {return /* tuple */[0,/* Kbranch */[22,lbl[1]],cont];}
       else
        {var lbl$1=new_label(/* () */0);
         
         return /* tuple */[0,
                 /* Kbranch */[22,lbl$1],
                 /* :: */[0,/* Klabel */[0,lbl$1],cont]];
         }
       
      }
    };

var
 make_branch=
  function(cont)
   {var exit;
    
    if(cont)
     {var branch=cont[1];
      
      var exit$1;
      
      if(typeof branch==="number")
       {switch(branch){}}
      else
       {switch(branch[0])
         {case 0:return make_branch_2(/* Some */[0,branch[1]],0,cont,cont);
          case 8:exit$1=175;
          case 22:exit$1=175;
          case 29:return /* tuple */[0,/* Kraise */[29,branch[1]],cont];
          default:exit=174;}}
      
      switch(exit$1){case 175:return /* tuple */[0,branch,cont];}
      }
    else
     {exit=174;}
    
    switch(exit){case 174:return make_branch_2(/* None */0,0,cont,cont);}
    };

var
 branch_to=
  function(label,cont)
   {var exit;
    
    if(cont)
     {var match=cont[1];
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 0:if(label===match[1]){return cont;}else{exit=172;}
          default:exit=172;}}
      }
    else
     {exit=172;}
    
    switch(exit){case 172:return /* :: */[0,/* Kbranch */[22,label],cont];}
    };

var
 discard_dead_code=
  function(cont)
   {if(cont)
     {var exit;
      
      var $js=cont[1];
      if(typeof $js==="number")
       {switch($js){case 1:exit=170;}}
      else
       {switch($js[0]){case 0:exit=170;case 14:exit=170;default:exit=171;}}
      
      switch(exit)
       {case 171:return discard_dead_code(cont[2]);case 170:return cont;}
      }
    else
     {return /* [] */0;}
    };

var
 is_tailcall=
  function(param)
   {var exit;
    
    if(param)
     {var exit$1;
      
      var $js=param[1];
      if(typeof $js==="number")
       {switch($js){}}
      else
       {switch($js[0])
         {case 0:exit$1=169;
          case 3:exit$1=169;
          case 8:return /* true */1;
          default:exit=168;}}
      
      switch(exit$1){case 169:return is_tailcall(param[2]);}
      }
    else
     {exit=168;}
    
    switch(exit){case 168:return /* false */0;}
    };

var
 add_pop=
  function(n,cont)
   {if(n===0)
     {return cont;}
    else
     {var exit;
      
      if(cont)
       {var match=cont[1];
        
        if(typeof match==="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 3:return add_pop(n+match[1],cont[2]);
            case 8:return /* :: */[0,/* Kreturn */[8,n+match[1]],cont[2]];
            case 29:return cont;
            default:exit=167;}}
        }
      else
       {exit=167;}
      
      switch(exit){case 167:return /* :: */[0,/* Kpop */[3,n],cont];}
      }
    };

var
 add_const_unit=
  function(cont)
   {var exit;
    
    if(cont)
     {var exit$1;
      
      var $js=cont[1];
      if(typeof $js==="number")
       {switch($js){}}
      else
       {switch($js[0])
         {case 1:exit$1=165;
          case 5:exit$1=165;
          case 13:exit$1=165;
          case 15:exit$1=165;
          default:exit=164;}}
      
      switch(exit$1){case 165:return cont;}
      }
    else
     {exit=164;}
    
    switch(exit)
     {case 164:return /* :: */[0,/* Kconst */[15,Lambda["const_unit"]],cont];}
    };

var
 push_dummies=
  function(n,k)
   {if(n!==0)
     {return /* :: */[0,
              /* Kconst */[15,Lambda["const_unit"]],
              /* :: */[0,/* Kpush */0,push_dummies(n-1,k)]];
      }
    else
     {return k;}
    };

var
 check_recordwith_updates=
  function(id,e)
   {var exit;
    
    switch(e[0])
     {case 0:return CamlPrimitive["caml_equal"](e[1],id);
      case 13:
       var match=e[1];
       
       switch(match[0])
        {case 6:
          var exit$1;
          
          var $js=match[1];
          if(typeof $js==="number")
           {switch($js){}}
          else
           {switch($js[0])
             {case 7:exit$1=162;case 9:exit$1=162;default:exit=161;}}
          
          switch(exit$1)
           {case 162:
             var match$1=match[2];
             
             if(match$1)
              {var match$2=match$1[1];
               
               switch(match$2[0])
                {case 0:
                  var match$3=match$1[2];
                  
                  if(match$3)
                   {if(match$3[2])
                     {exit=161;}
                    else
                     {return CamlPrimitive["caml_equal"](match$2[1],id)&&
                             check_recordwith_updates(id,e[2]);
                      }
                    }
                  else
                   {exit=161;}
                  
                 default:exit=161;}
               }
             else
              {exit=161;}
             
            }
          
         default:exit=161;}
       
      default:exit=161;}
    
    switch(exit){case 161:return /* false */0;}
    };

var
 size_of_lambda=
  function(funct)
   {var exit;
    
    switch(funct[0])
     {case 3:
       return /* RHS_block */[0,
               1+Lambda["IdentSet"][19](Lambda["free_variables"](funct))];
       
      case 4:
       var exit$1;
       
       if(funct[1]!==0)
        {exit$1=158;}
       else
        {var match=funct[3];
         
         switch(match[0])
          {case 6:
            var match$1=match[1];
            
            if(typeof match$1==="number")
             {switch(match$1){}}
            else
             {switch(match$1[0])
               {case 10:
                 var size=match$1[2];
                 
                 if(check_recordwith_updates(funct[2],funct[4]))
                  {if(match$1[1]!==0)
                    {return /* RHS_floatblock */[1,size];}
                   else
                    {return /* RHS_block */[0,size];}
                   }
                 else
                  {exit$1=158;}
                 
                default:exit$1=158;}}
            
           default:exit$1=158;}
         }
       
       switch(exit$1){case 158:return size_of_lambda(funct[4]);}
       
      case 5:exit=160;
      case 6:
       var match$2=funct[1];
       
       if(typeof match$2==="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 5:return /* RHS_block */[0,List["length"](funct[2])];
           case 10:
            if(match$2[1]!==0)
             {return /* RHS_floatblock */[1,match$2[2]];}
            else
             {return /* RHS_block */[0,match$2[2]];}
            
           case 17:
            var match$3=match$2[1];
            
            if(match$3!==0)
             {if(match$3>=3)
               {return /* RHS_floatblock */[1,List["length"](funct[2])];}
              else
               {return /* RHS_block */[0,List["length"](funct[2])];}
              }
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"bytecomp/bytegen.ml",156,42]];
              }
            
           default:exit=157;}}
       
      case 13:exit=160;
      case 18:return size_of_lambda(funct[1]);
      default:exit=157;}
    
    switch(exit)
     {case 160:return size_of_lambda(funct[2]);
      case 157:return /* RHS_nonrec */0;
      }
    };

var
 copy_event=
  function(ev,kind,info,repr)
   {return /* record */[0,
            0,
            ev[2],
            ev[3],
            kind,
            info,
            ev[6],
            ev[7],
            ev[8],
            ev[9],
            repr];
    };

var
 merge_infos=
  function(ev,ev$prime)
   {var match=ev[5];
    
    var match$1=ev$prime[5];
    
    var exit;
    
    if(typeof match==="number")
     {if(match!==0){return match$1;}else{exit=154;}}
    else
     {exit=154;}
    
    switch(exit)
     {case 154:
       if(typeof match$1==="number")
        {if(match$1!==0){return match;}else{exit=153;}}
       else
        {exit=153;}
       
      case 153:return Misc["fatal_error"]("Bytegen.merge_infos");
      }
    };

var
 merge_repr=
  function(ev,ev$prime)
   {var match=ev[10];
    
    var match$1=ev$prime[10];
    
    var exit;
    
    if(typeof match==="number")
     {switch(match){case 0:return match$1;}}
    else
     {switch(match[0])
       {case 0:
         var r=match[1];
         
         if(typeof match$1==="number")
          {switch(match$1){case 0:exit=151;}}
         else
          {switch(match$1[0])
            {case 0:exit=150;
             case 1:
              if(r===match$1[1]&&r[1]===1)
               {return /* Event_none */0;}
              else
               {exit=150;}
              
             }}
         
        case 1:
         var r$1=match[1];
         
         if(typeof match$1==="number")
          {switch(match$1){case 0:exit=151;}}
         else
          {switch(match$1[0])
            {case 0:
              if(r$1===match$1[1])
               {return /* Event_parent */[0,r$1];}
              else
               {exit=150;}
              
             case 1:exit=150;
             }}
         
        }}
    
    switch(exit)
     {case 151:return match;
      case 150:return Misc["fatal_error"]("Bytegen.merge_repr");
      }
    };

var
 merge_events=
  function(ev,ev$prime)
   {var match=ev[4];
    
    var match$1=ev$prime[4];
    
    var exit;
    
    if(typeof match==="number")
     {if(match!==0)
       {var match$2=/* tuple */[0,ev$prime,ev];}
      else
       {var exit$1;
        
        if(typeof match$1==="number")
         {if(match$1!==0){exit=145;}else{exit$1=146;}}
        else
         {exit$1=146;}
        
        switch(exit$1){case 146:var match$2=/* tuple */[0,ev$prime,ev];}
        }
      }
    else
     {var exit$2;
      
      if(typeof match$1==="number")
       {if(match$1!==0){exit=145;}else{exit$2=147;}}
      else
       {exit$2=147;}
      
      switch(exit$2){case 147:var match$2=/* tuple */[0,ev,ev$prime];}
      }
    
    switch(exit){case 145:var match$2=/* tuple */[0,ev,ev$prime];}
    
    var min=match$2[2];
    
    var maj=match$2[1];
    
    return copy_event(maj,maj[4],merge_infos(maj,min),merge_repr(maj,min));
    };

var
 weaken_event=
  function(ev,cont)
   {var match=ev[4];
    
    if(typeof match==="number")
     {return /* :: */[0,/* Kevent */[35,ev],cont];}
    else
     {var exit;
      
      if(cont)
       {var match$1=cont[1];
        
        if(typeof match$1==="number")
         {if(match$1!==0)
           {exit=142;}
          else
           {var match$2=cont[2];
            
            if(match$2)
             {var match$3=match$2[1];
              
              if(typeof match$3==="number")
               {switch(match$3){}}
              else
               {switch(match$3[0])
                 {case 35:
                   var ev$prime=match$3[1];
                   
                   if(typeof ev$prime[10]==="number")
                    {var match$4=ev[5];
                     
                     if(typeof match$4==="number")
                      {return cont;}
                     else
                      {var repr=[0,1];
                       
                       var
                        ev$1=
                         copy_event
                          (ev,/* Event_pseudo */1,ev[5],/* Event_parent */[0,repr]);
                       
                       var
                        ev$prime$1=
                         copy_event
                          (ev$prime,ev$prime[4],ev$prime[5],/* Event_child */[1,repr]);
                       
                       return /* :: */[0,
                               /* Kevent */[35,ev$1],
                               /* :: */[0,
                                /* Kpush */0,
                                /* :: */[0,/* Kevent */[35,ev$prime$1],match$2[2]]]];
                       }
                     }
                   else
                    {exit=142;}
                   
                  default:exit=142;}}
              }
            else
             {exit=142;}
            }
          }
        else
         {exit=142;}
        }
      else
       {exit=142;}
      
      switch(exit){case 142:return /* :: */[0,/* Kevent */[35,ev],cont];}
      }
    };

var
 add_event=
  function(ev,cont)
   {var exit;
    
    if(cont)
     {var match=cont[1];
      
      if(typeof match==="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 35:return weaken_event(merge_events(ev,match[1]),cont[2]);
          default:exit=136;}}
      }
    else
     {exit=136;}
    
    switch(exit){case 136:return weaken_event(ev,cont);}
    };

var try_blocks=[0,/* [] */0];

var sz_static_raises=[0,/* [] */0];

var
 push_static_raise=
  function(i,lbl_handler,sz)
   {return sz_static_raises[1]=
           /* :: */[0,
            /* tuple */[0,i,/* tuple */[0,lbl_handler,sz,try_blocks[1]]],
            sz_static_raises[1]],
           0;
    };

var
 find_raise_label=
  function(i)
   {try
     {return List["assoc"](i,sz_static_raises[1]);}
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return Misc["fatal_error"]
                (Pervasives["^"]
                  ("exit(",
                   Pervasives["^"]
                    (Pervasives["string_of_int"](i),
                     ") outside appropriated catch")));
        }
      else
       {throw exn;}
      }
    };

var
 code_as_jump=
  function(l,sz)
   {var exit;
    
    switch(l[0])
     {case 9:
       if(l[2])
        {exit=129;}
       else
        {var match=find_raise_label(l[1]);
         
         if(sz===match[2]&&match[3]===try_blocks[1])
          {return /* Some */[0,match[1]];}
         else
          {return /* None */0;}
         }
       
      default:exit=129;}
    
    switch(exit){case 129:return /* None */0;}
    };

var functions_to_compile=Stack["create"](/* () */0);

var compunit_name=[0,""];

var max_stack_used=[0,0];

var
 comp_bint_primitive=
  function(bi,suff,args)
   {switch(bi)
     {case 0:var pref="caml_nativeint_";
      case 1:var pref="caml_int32_";
      case 2:var pref="caml_int64_";
      }
    
    return /* Kccall */[30,Pervasives["^"](pref,suff),List["length"](args)];
    };

var
 comp_primitive=
  function(p,args)
   {var exit;
    
    if(typeof p==="number")
     {switch(p)
       {case 8:return /* Knegint */10;
        case 9:return /* Kaddint */11;
        case 10:return /* Ksubint */12;
        case 11:return /* Kmulint */13;
        case 12:return /* Kdivint */14;
        case 13:return /* Kmodint */15;
        case 14:return /* Kandint */16;
        case 15:return /* Korint */17;
        case 16:return /* Kxorint */18;
        case 17:return /* Klslint */19;
        case 18:return /* Klsrint */20;
        case 19:return /* Kasrint */21;
        case 20:return [/* Kccall */30,"caml_int_of_float",1];
        case 21:return [/* Kccall */30,"caml_float_of_int",1];
        case 22:return [/* Kccall */30,"caml_neg_float",1];
        case 23:return [/* Kccall */30,"caml_abs_float",1];
        case 24:return [/* Kccall */30,"caml_add_float",2];
        case 25:return [/* Kccall */30,"caml_sub_float",2];
        case 26:return [/* Kccall */30,"caml_mul_float",2];
        case 27:return [/* Kccall */30,"caml_div_float",2];
        case 28:return [/* Kccall */30,"caml_ml_string_length",1];
        case 29:return /* Kgetstringchar */5;
        case 30:return /* Ksetstringchar */6;
        case 31:return [/* Kccall */30,"caml_string_get",2];
        case 32:return [/* Kccall */30,"caml_string_set",3];
        case 33:return /* Kisint */22;
        case 34:return /* Kisout */23;
        case 35:return [/* Kccall */30,"caml_bitvect_test",2];
        case 36:return [/* Kccall */30,"caml_bswap16",1];
        case 37:return [/* Kccall */30,"caml_int_as_pointer",1];
        }}
    else
     {switch(p[0])
       {case 3:return /* Kgetglobal */[13,p[1]];
        case 4:return /* Ksetglobal */[14,p[1]];
        case 5:return /* Kmakeblock */[16,List["length"](args),p[1]];
        case 6:return /* Kgetfield */[18,p[1]];
        case 7:return /* Ksetfield */[19,p[1]];
        case 8:return /* Kgetfloatfield */[20,p[1]];
        case 9:return /* Ksetfloatfield */[21,p[1]];
        case 10:return [/* Kccall */30,"caml_obj_dup",1];
        case 11:var p$1=p[1];return /* Kccall */[30,p$1[1],p$1[2]];
        case 13:return /* Kintcomp */[31,p[1]];
        case 14:return /* Koffsetint */[32,p[1]];
        case 15:return /* Koffsetref */[33,p[1]];
        case 16:
         switch(p[1])
          {case 0:return [/* Kccall */30,"caml_eq_float",2];
           case 1:return [/* Kccall */30,"caml_neq_float",2];
           case 2:return [/* Kccall */30,"caml_lt_float",2];
           case 3:return [/* Kccall */30,"caml_gt_float",2];
           case 4:return [/* Kccall */30,"caml_le_float",2];
           case 5:return [/* Kccall */30,"caml_ge_float",2];
           }
         
        case 18:return /* Kvectlength */2;
        case 19:
         var match=p[1];
         
         if(match!==0)
          {if(match>=3)
            {return [/* Kccall */30,"caml_array_unsafe_get_float",2];}
           else
            {return /* Kgetvectitem */3;}
           }
         else
          {return [/* Kccall */30,"caml_array_unsafe_get",2];}
         
        case 20:
         var match$1=p[1];
         
         if(match$1!==0)
          {if(match$1>=3)
            {return [/* Kccall */30,"caml_array_unsafe_set_float",3];}
           else
            {return /* Ksetvectitem */4;}
           }
         else
          {return [/* Kccall */30,"caml_array_unsafe_set",3];}
         
        case 21:
         var match$2=p[1];
         
         if(match$2!==0)
          {if(match$2>=3)
            {return [/* Kccall */30,"caml_array_get_float",2];}
           else
            {return [/* Kccall */30,"caml_array_get_addr",2];}
           }
         else
          {return [/* Kccall */30,"caml_array_get",2];}
         
        case 22:
         var match$3=p[1];
         
         if(match$3!==0)
          {if(match$3>=3)
            {return [/* Kccall */30,"caml_array_set_float",3];}
           else
            {return [/* Kccall */30,"caml_array_set_addr",3];}
           }
         else
          {return [/* Kccall */30,"caml_array_set",3];}
         
        case 23:return comp_bint_primitive(p[1],"of_int",args);
        case 24:return comp_bint_primitive(p[1],"to_int",args);
        case 25:
         switch(p[1])
          {case 0:
            switch(p[2])
             {case 0:exit=117;
              case 1:return [/* Kccall */30,"caml_nativeint_to_int32",1];
              case 2:return [/* Kccall */30,"caml_int64_of_nativeint",1];
              }
            
           case 1:
            switch(p[2])
             {case 0:return [/* Kccall */30,"caml_nativeint_of_int32",1];
              case 1:exit=117;
              case 2:return [/* Kccall */30,"caml_int64_of_int32",1];
              }
            
           case 2:
            switch(p[2])
             {case 0:return [/* Kccall */30,"caml_int64_to_nativeint",1];
              case 1:return [/* Kccall */30,"caml_int64_to_int32",1];
              case 2:exit=117;
              }
            
           }
         
        case 26:return comp_bint_primitive(p[1],"neg",args);
        case 27:return comp_bint_primitive(p[1],"add",args);
        case 28:return comp_bint_primitive(p[1],"sub",args);
        case 29:return comp_bint_primitive(p[1],"mul",args);
        case 30:return comp_bint_primitive(p[1],"div",args);
        case 31:return comp_bint_primitive(p[1],"mod",args);
        case 32:return comp_bint_primitive(p[1],"and",args);
        case 33:return comp_bint_primitive(p[1],"or",args);
        case 34:return comp_bint_primitive(p[1],"xor",args);
        case 35:return comp_bint_primitive(p[1],"shift_left",args);
        case 36:return comp_bint_primitive(p[1],"shift_right_unsigned",args);
        case 37:return comp_bint_primitive(p[1],"shift_right",args);
        case 38:
         switch(p[2])
          {case 0:return [/* Kccall */30,"caml_equal",2];
           case 1:return [/* Kccall */30,"caml_notequal",2];
           case 2:return [/* Kccall */30,"caml_lessthan",2];
           case 3:return [/* Kccall */30,"caml_greaterthan",2];
           case 4:return [/* Kccall */30,"caml_lessequal",2];
           case 5:return [/* Kccall */30,"caml_greaterequal",2];
           }
         
        case 39:
         var n=p[2];
         
         return /* Kccall */[30,
                 Pervasives["^"]
                  ("caml_ba_get_",Pervasives["string_of_int"](n)),
                 n+1];
         
        case 40:
         var n$1=p[2];
         
         return /* Kccall */[30,
                 Pervasives["^"]
                  ("caml_ba_set_",Pervasives["string_of_int"](n$1)),
                 n$1+2];
         
        case 41:
         return /* Kccall */[30,
                 Pervasives["^"]
                  ("caml_ba_dim_",Pervasives["string_of_int"](p[1])),
                 1];
         
        case 42:return [/* Kccall */30,"caml_string_get16",2];
        case 43:return [/* Kccall */30,"caml_string_get32",2];
        case 44:return [/* Kccall */30,"caml_string_get64",2];
        case 45:return [/* Kccall */30,"caml_string_set16",3];
        case 46:return [/* Kccall */30,"caml_string_set32",3];
        case 47:return [/* Kccall */30,"caml_string_set64",3];
        case 48:return [/* Kccall */30,"caml_ba_uint8_get16",2];
        case 49:return [/* Kccall */30,"caml_ba_uint8_get32",2];
        case 50:return [/* Kccall */30,"caml_ba_uint8_get64",2];
        case 51:return [/* Kccall */30,"caml_ba_uint8_set16",3];
        case 52:return [/* Kccall */30,"caml_ba_uint8_set32",3];
        case 53:return [/* Kccall */30,"caml_ba_uint8_set64",3];
        case 54:
         switch(p[1])
          {case 0:var const_name="big_endian";
           case 1:var const_name="word_size";
           case 2:var const_name="ostype_unix";
           case 3:var const_name="ostype_win32";
           case 4:var const_name="ostype_cygwin";
           }
         
         return /* Kccall */[30,
                 Printf["sprintf"]
                  ([/* Format */0,
                    [/* String_literal */11,
                     "caml_sys_const_",
                     [/* String */2,/* No_padding */0,/* End_of_format */0]],
                    "caml_sys_const_%s"],
                   const_name),
                 1];
         
        case 55:return comp_bint_primitive(p[1],"bswap",args);
        default:exit=117;}}
    
    switch(exit)
     {case 117:return Misc["fatal_error"]("Bytegen.comp_primitive");}
    };

var
 is_immed=
  function(n){return Instruct["immed_min"]<=n&&n<=Instruct["immed_max"];};

var make_key=Lambda["make_key"];

var Storer=Switch["Store"]([0,make_key]);

var
 comp_expr=
  function(env,exp,sz,cont)
   {if(sz>max_stack_used[1]){max_stack_used[1]=sz}else{}
    
    var exit;
    
    switch(exp[0])
     {case 0:
       var id=exp[1];
       
       try
        {var pos=Ident["find_same"](id,env[1]);
         
         return /* :: */[0,/* Kacc */[1,sz-pos],cont];
         }
       catch(exn)
        {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
          {try
            {var pos$1=Ident["find_same"](id,env[2]);
             
             return /* :: */[0,/* Kenvacc */[2,pos$1],cont];
             }
           catch(exn$1)
            {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
              {try
                {var ofs=Ident["find_same"](id,env[3]);
                 
                 return /* :: */[0,/* Koffsetclosure */[12,ofs],cont];
                 }
               catch(exn$2)
                {if(exn$2===CamlPrimitive["caml_global_data"]["Not_found"])
                  {return Misc["fatal_error"]
                           (Pervasives["^"]
                             ("Bytegen.comp_expr: var ",Ident["unique_name"](id)));
                   }
                 else
                  {throw exn$2;}
                 }
               }
             else
              {throw exn$1;}
             }
           }
         else
          {throw exn;}
         }
       
      case 1:return /* :: */[0,/* Kconst */[15,exp[1]],cont];
      case 2:
       var args=exp[2];
       
       var func=exp[1];
       
       var nargs=List["length"](args);
       
       if(is_tailcall(cont))
        {return comp_args
                 (env,
                  args,
                  sz,
                  /* :: */[0,
                   /* Kpush */0,
                   comp_expr
                    (env,
                     func,
                     sz+nargs,
                     /* :: */[0,
                      /* Kappterm */[7,nargs,sz+nargs],
                      discard_dead_code(cont)])]);
         }
       else
        {if(nargs<4)
          {return comp_args
                   (env,
                    args,
                    sz,
                    /* :: */[0,
                     /* Kpush */0,
                     comp_expr
                      (env,func,sz+nargs,/* :: */[0,/* Kapply */[6,nargs],cont])]);
           }
         else
          {var match=label_code(cont);
           
           return /* :: */[0,
                   /* Kpush_retaddr */[5,match[1]],
                   comp_args
                    (env,
                     args,
                     sz+3,
                     /* :: */[0,
                      /* Kpush */0,
                      comp_expr
                       (env,
                        func,
                        sz+3+nargs,
                        /* :: */[0,/* Kapply */[6,nargs],match[2]])])];
           }
         }
       
      case 3:
       var lbl=new_label(/* () */0);
       
       var fv=Lambda["IdentSet"][20](Lambda["free_variables"](exp));
       
       var to_compile=/* record */[0,exp[2],exp[3],lbl,fv,1,/* [] */0,0];
       
       Stack["push"](to_compile,functions_to_compile);
       return comp_args
               (env,
                List["map"](function(n){return /* Lvar */[0,n];},fv),
                sz,
                /* :: */[0,/* Kclosure */[10,lbl,List["length"](fv)],cont]);
       
      case 4:
       return comp_expr
               (env,
                exp[3],
                sz,
                /* :: */[0,
                 /* Kpush */0,
                 comp_expr
                  (add_var(exp[2],sz+1,env),exp[4],sz+1,add_pop(1,cont))]);
       
      case 5:
       var body=exp[2];
       
       var decl=exp[1];
       
       var ndecl=List["length"](decl);
       
       if
        (List["for_all"]
          (function(param)
            {switch(param[2][0])
              {case 3:return /* true */1;default:return /* false */0;}
             },
           decl))
        {var
          fv$1=
           Lambda["IdentSet"][20]
            (Lambda["free_variables"]
              (/* Lletrec */[5,decl,Lambda["lambda_unit"]]));
         
         var rec_idents=List["map"](function(param){return param[1];},decl);
         
         var
          comp_fun=
           function(pos,param)
            {if(param)
              {var match$1=param[1][2];
               
               switch(match$1[0])
                {case 3:
                  var lbl$1=new_label(/* () */0);
                  
                  var
                   to_compile$1=
                    /* record */[0,
                     match$1[2],
                     match$1[3],
                     lbl$1,
                     fv$1,
                     ndecl,
                     rec_idents,
                     pos];
                  
                  Stack["push"](to_compile$1,functions_to_compile);
                  return /* :: */[0,lbl$1,comp_fun(pos+1,param[2])];
                  
                 default:
                  throw [0,
                         CamlPrimitive["caml_global_data"]["Assert_failure"],
                         [0,"bytecomp/bytegen.ml",518,17]];
                  }
               }
             else
              {return /* [] */0;}
             };
         
         var lbls=comp_fun(0,decl);
         
         return comp_args
                 (env,
                  List["map"](function(n){return /* Lvar */[0,n];},fv$1),
                  sz,
                  /* :: */[0,
                   /* Kclosurerec */[11,lbls,List["length"](fv$1)],
                   comp_expr
                    (add_vars(rec_idents,sz+1,env),
                     body,
                     sz+ndecl,
                     add_pop(ndecl,cont))]);
         }
       else
        {var
          decl_size=
           List["map"]
            (function(param)
              {var exp$1=param[2];
               
               return /* tuple */[0,param[1],exp$1,size_of_lambda(exp$1)];
               },
             decl);
         
         var
          comp_init=
           function(new_env,sz,param)
            {if(param)
              {var match$1=param[1];
               
               var match$2=match$1[3];
               
               var id$1=match$1[1];
               
               if(typeof match$2==="number")
                {switch(match$2)
                  {case 0:
                    return /* :: */[0,
                            [/* Kconst */15,[/* Const_base */0,[/* Const_int */0,0]]],
                            /* :: */[0,
                             /* Kpush */0,
                             comp_init(add_var(id$1,sz+1,new_env),sz+1,param[2])]];
                    
                   }}
               else
                {switch(match$2[0])
                  {case 0:
                    return /* :: */[0,
                            /* Kconst */[15,
                             /* Const_base */[0,/* Const_int */[0,match$2[1]]]],
                            /* :: */[0,
                             [/* Kccall */30,"caml_alloc_dummy",1],
                             /* :: */[0,
                              /* Kpush */0,
                              comp_init(add_var(id$1,sz+1,new_env),sz+1,param[2])]]];
                    
                   case 1:
                    return /* :: */[0,
                            /* Kconst */[15,
                             /* Const_base */[0,/* Const_int */[0,match$2[1]]]],
                            /* :: */[0,
                             [/* Kccall */30,"caml_alloc_dummy_float",1],
                             /* :: */[0,
                              /* Kpush */0,
                              comp_init(add_var(id$1,sz+1,new_env),sz+1,param[2])]]];
                    
                   }}
               }
             else
              {return comp_nonrec(new_env,sz,ndecl,decl_size);}
             };
         
         var
          comp_nonrec=
           function(new_env,sz,i,param)
            {if(param)
              {var match$1=param[1];
               
               if(typeof match$1[3]==="number")
                {return comp_expr
                         (new_env,
                          match$1[2],
                          sz,
                          /* :: */[0,
                           /* Kassign */[4,i-1],
                           comp_nonrec(new_env,sz,i-1,param[2])]);
                 }
               else
                {return comp_nonrec(new_env,sz,i-1,param[2]);}
               }
             else
              {return comp_rec(new_env,sz,ndecl,decl_size);}
             };
         
         var
          comp_rec=
           function(new_env,sz,i,param)
            {if(param)
              {var match$1=param[1];
               
               if(typeof match$1[3]==="number")
                {return comp_rec(new_env,sz,i-1,param[2]);}
               else
                {return comp_expr
                         (new_env,
                          match$1[2],
                          sz,
                          /* :: */[0,
                           /* Kpush */0,
                           /* :: */[0,
                            /* Kacc */[1,i],
                            /* :: */[0,
                             [/* Kccall */30,"caml_update_dummy",2],
                             comp_rec(new_env,sz,i-1,param[2])]]]);
                 }
               }
             else
              {return comp_expr(new_env,body,sz,add_pop(ndecl,cont));}
             };
         
         return comp_init(env,sz,decl_size);
         }
       
      case 6:
       var p=exp[1];
       
       var exit$1;
       
       if(typeof p==="number")
        {switch(p)
          {case 0:exit$1=104;
           case 1:exit$1=104;
           case 2:exit$1=104;
           case 3:
            var match$1=exp[2];
            
            if(match$1)
             {if(match$1[2])
               {exit$1=103;}
              else
               {return comp_expr(env,match$1[1],sz,add_const_unit(cont));}
              }
            else
             {exit$1=103;}
            
           case 5:
            var match$2=exp[2];
            
            if(match$2)
             {var match$3=match$2[2];
              
              if(match$3)
               {if(match$3[2])
                 {exit$1=103;}
                else
                 {var exp2=match$3[1];
                  
                  var exp1=match$2[1];
                  
                  var exit$2;
                  
                  if(cont)
                   {var match$4=cont[1];
                    
                    if(typeof match$4==="number")
                     {switch(match$4){}}
                    else
                     {switch(match$4[0])
                       {case 23:
                         var match$5=label_code(cont[2]);
                         
                         return comp_expr
                                 (env,
                                  exp1,
                                  sz,
                                  /* :: */[0,
                                   /* Kbranchifnot */[24,match$5[1]],
                                   comp_expr
                                    (env,
                                     exp2,
                                     sz,
                                     /* :: */[0,/* Kbranchif */[23,match$4[1]],match$5[2]])]);
                         
                        case 24:
                         return comp_expr
                                 (env,
                                  exp1,
                                  sz,
                                  /* :: */[0,
                                   /* Kbranchifnot */[24,match$4[1]],
                                   comp_expr(env,exp2,sz,cont)]);
                         
                        default:exit$2=49;}}
                    }
                  else
                   {exit$2=49;}
                  
                  switch(exit$2)
                   {case 49:
                     var match$6=label_code(cont);
                     
                     return comp_expr
                             (env,
                              exp1,
                              sz,
                              /* :: */[0,
                               /* Kstrictbranchifnot */[26,match$6[1]],
                               comp_expr(env,exp2,sz,match$6[2])]);
                     
                    }
                  }
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           case 6:
            var match$7=exp[2];
            
            if(match$7)
             {var match$8=match$7[2];
              
              if(match$8)
               {if(match$8[2])
                 {exit$1=103;}
                else
                 {var exp2$1=match$8[1];
                  
                  var exp1$1=match$7[1];
                  
                  var exit$3;
                  
                  if(cont)
                   {var match$9=cont[1];
                    
                    if(typeof match$9==="number")
                     {switch(match$9){}}
                    else
                     {switch(match$9[0])
                       {case 23:
                         return comp_expr
                                 (env,
                                  exp1$1,
                                  sz,
                                  /* :: */[0,
                                   /* Kbranchif */[23,match$9[1]],
                                   comp_expr(env,exp2$1,sz,cont)]);
                         
                        case 24:
                         var match$10=label_code(cont[2]);
                         
                         return comp_expr
                                 (env,
                                  exp1$1,
                                  sz,
                                  /* :: */[0,
                                   /* Kbranchif */[23,match$10[1]],
                                   comp_expr
                                    (env,
                                     exp2$1,
                                     sz,
                                     /* :: */[0,/* Kbranchifnot */[24,match$9[1]],match$10[2]])]);
                         
                        default:exit$3=52;}}
                    }
                  else
                   {exit$3=52;}
                  
                  switch(exit$3)
                   {case 52:
                     var match$11=label_code(cont);
                     
                     return comp_expr
                             (env,
                              exp1$1,
                              sz,
                              /* :: */[0,
                               /* Kstrictbranchif */[25,match$11[1]],
                               comp_expr(env,exp2$1,sz,match$11[2])]);
                     
                    }
                  }
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           case 7:
            var match$12=exp[2];
            
            if(match$12)
             {if(match$12[2])
               {exit$1=103;}
              else
               {var exit$4;
                
                if(cont)
                 {var match$13=cont[1];
                  
                  if(typeof match$13==="number")
                   {switch(match$13){}}
                  else
                   {switch(match$13[0])
                     {case 23:
                       var
                        newcont=
                         /* :: */[0,/* Kbranchifnot */[24,match$13[1]],cont[2]];
                       
                      case 24:
                       var
                        newcont=
                         /* :: */[0,/* Kbranchif */[23,match$13[1]],cont[2]];
                       
                      default:exit$4=45;}}
                  }
                else
                 {exit$4=45;}
                
                switch(exit$4)
                 {case 45:var newcont=/* :: */[0,/* Kboolnot */7,cont];}
                
                return comp_expr(env,match$12[1],sz,newcont);
                }
              }
            else
             {exit$1=103;}
            
           case 9:
            var match$14=exp[2];
            
            if(match$14)
             {var match$15=match$14[2];
              
              if(match$15)
               {var match$16=match$15[1];
                
                switch(match$16[0])
                 {case 1:
                   var match$17=match$16[1];
                   
                   switch(match$17[0])
                    {case 0:
                      var match$18=match$17[1];
                      
                      switch(match$18[0])
                       {case 0:
                         if(match$15[2])
                          {exit$1=103;}
                         else
                          {var n=match$18[1];
                           
                           if(is_immed(n))
                            {return comp_expr
                                     (env,match$14[1],sz,/* :: */[0,/* Koffsetint */[32,n],cont]);
                             }
                           else
                            {exit$1=103;}
                           }
                         
                        default:exit$1=103;}
                      
                     default:exit$1=103;}
                   
                  default:exit$1=103;}
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           case 10:
            var match$19=exp[2];
            
            if(match$19)
             {var match$20=match$19[2];
              
              if(match$20)
               {var match$21=match$20[1];
                
                switch(match$21[0])
                 {case 1:
                   var match$22=match$21[1];
                   
                   switch(match$22[0])
                    {case 0:
                      var match$23=match$22[1];
                      
                      switch(match$23[0])
                       {case 0:
                         if(match$20[2])
                          {exit$1=103;}
                         else
                          {var n$1=match$23[1];
                           
                           if(is_immed(-n$1))
                            {return comp_expr
                                     (env,
                                      match$19[1],
                                      sz,
                                      /* :: */[0,/* Koffsetint */[32,-n$1],cont]);
                             }
                           else
                            {exit$1=103;}
                           }
                         
                        default:exit$1=103;}
                      
                     default:exit$1=103;}
                   
                  default:exit$1=103;}
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           }}
       else
        {switch(p[0])
          {case 0:
            var match$24=exp[2];
            
            if(match$24)
             {var match$25=match$24[2];
              
              if(match$25)
               {if(match$25[2])
                 {exit$1=103;}
                else
                 {var loc=p[1];
                  
                  var func$1=match$25[1];
                  
                  var arg=match$24[1];
                  
                  exit=102;
                  }
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           case 1:
            var match$26=exp[2];
            
            if(match$26)
             {var match$27=match$26[2];
              
              if(match$27)
               {if(match$27[2])
                 {exit$1=103;}
                else
                 {var loc=p[1];
                  
                  var func$1=match$26[1];
                  
                  var arg=match$27[1];
                  
                  exit=102;
                  }
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           case 12:
            var match$28=exp[2];
            
            if(match$28)
             {if(match$28[2])
               {exit$1=103;}
              else
               {return comp_expr
                        (env,
                         match$28[1],
                         sz,
                         /* :: */[0,/* Kraise */[29,p[1]],discard_dead_code(cont)]);
                }
              }
            else
             {exit$1=103;}
            
           case 13:
            var match$29=exp[2];
            
            if(match$29)
             {var match$30=match$29[2];
              
              if(match$30)
               {var k=match$30[1];
                
                switch(k[0])
                 {case 1:
                   if(match$30[2])
                    {exit$1=103;}
                   else
                    {var
                      p$1=
                       /* Pintcomp */[13,Lambda["commute_comparison"](p[1])];
                     
                     var args$1=/* :: */[0,k,/* :: */[0,match$29[1],/* [] */0]];
                     
                     return comp_args
                             (env,args$1,sz,/* :: */[0,comp_primitive(p$1,args$1),cont]);
                     }
                   
                  default:exit$1=103;}
                }
              else
               {exit$1=103;}
              }
            else
             {exit$1=103;}
            
           case 14:
            var match$31=exp[2];
            
            if(match$31)
             {if(match$31[2])
               {exit$1=103;}
              else
               {var n$2=p[1];
                
                if(!is_immed(n$2))
                 {return comp_expr
                          (env,
                           match$31[1],
                           sz,
                           /* :: */[0,
                            /* Kpush */0,
                            /* :: */[0,
                             /* Kconst */[15,/* Const_base */[0,/* Const_int */[0,n$2]]],
                             /* :: */[0,/* Kaddint */11,cont]]]);
                  }
                else
                 {exit$1=103;}
                }
              }
            else
             {exit$1=103;}
            
           case 17:
            var args$2=exp[2];
            
            var kind=p[1];
            
            if(kind!==0)
             {if(kind>=3)
               {return comp_args
                        (env,
                         args$2,
                         sz,
                         /* :: */[0,
                          /* Kmakefloatblock */[17,List["length"](args$2)],
                          cont]);
                }
              else
               {return comp_args
                        (env,
                         args$2,
                         sz,
                         /* :: */[0,
                          /* Kmakeblock */[16,List["length"](args$2),0],
                          cont]);
                }
              }
            else
             {if(args$2===/* [] */0)
               {return /* :: */[0,[/* Kmakeblock */16,0,0],cont];}
              else
               {return comp_args
                        (env,
                         args$2,
                         sz,
                         /* :: */[0,
                          /* Kmakeblock */[16,List["length"](args$2),0],
                          /* :: */[0,[/* Kccall */30,"caml_make_array",1],cont]]);
                }
              }
            
           default:exit$1=103;}}
       
       switch(exit$1)
        {case 104:
          var match$32=exp[2];
          
          if(match$32)
           {if(match$32[2])
             {exit$1=103;}
            else
             {return comp_expr(env,match$32[1],sz,cont);}
            }
          else
           {exit$1=103;}
          
         case 103:
          var args$3=exp[2];
          
          return comp_args
                  (env,args$3,sz,/* :: */[0,comp_primitive(p,args$3),cont]);
          
         }
       
      case 7:
       var sw=exp[2];
       
       var match$33=make_branch(cont);
       
       var branch=match$33[1];
       
       var c=discard_dead_code(match$33[2]);
       
       var store=Storer[1](/* () */0);
       
       var act_consts=CamlPrimitive["caml_make_vect"](sw[1],0);
       
       var act_blocks=CamlPrimitive["caml_make_vect"](sw[3],0);
       
       var match$34=sw[5];
       
       if(match$34){store[3](match$34[1])}else{}
       
       List["iter"]
        (function(param){return act_consts[param[1]+1]=store[3](param[2]),0;},
         sw[2]);
       List["iter"]
        (function(param){return act_blocks[param[1]+1]=store[3](param[2]),0;},
         sw[4]);
       var acts=store[1](/* () */0);
       
       var
        lbls$1=
         CamlPrimitive["caml_make_vect"](/* -1 for tag */acts["length"]-1,0);
       
       for(var i=/* -1 for tag */acts["length"]-1-1;i>=0;i--)
        {var
          match$35=
           label_code(comp_expr(env,acts[i+1],sz,/* :: */[0,branch,c]));
         
         lbls$1[i+1]=match$35[1];
         c=discard_dead_code(match$35[2]);
         }
       
       var lbl_blocks=CamlPrimitive["caml_make_vect"](sw[3],0);
       
       for(var i$1=sw[3]-1;i$1>=0;i$1--)
        {lbl_blocks[i$1+1]=lbls$1[act_blocks[i$1+1]+1]}
       
       var lbl_consts=CamlPrimitive["caml_make_vect"](sw[1],0);
       
       for(var i$2=sw[1]-1;i$2>=0;i$2--)
        {lbl_consts[i$2+1]=lbls$1[act_consts[i$2+1]+1]}
       
       return comp_expr
               (env,
                exp[1],
                sz,
                /* :: */[0,/* Kswitch */[27,lbl_consts,lbl_blocks],c]);
       
      case 8:
       return comp_expr
               (env,
                Matching["expand_stringswitch"](exp[1],exp[2],exp[3]),
                sz,
                cont);
       
      case 9:
       var args$4=exp[2];
       
       var cont$1=discard_dead_code(cont);
       
       var match$36=find_raise_label(exp[1]);
       
       var tb=match$36[3];
       
       var size=match$36[2];
       
       var cont$2=branch_to(match$36[1],cont$1);
       
       var
        loop=
         function(sz,tbb)
          {if(tb===tbb)
            {return add_pop(sz-size,cont$2);}
           else
            {if(tbb)
              {var try_sz=tbb[1];
               
               return add_pop
                       (sz-try_sz-4,
                        /* :: */[0,/* Kpoptrap */8,loop(try_sz,tbb[2])]);
               }
             else
              {throw [0,
                      CamlPrimitive["caml_global_data"]["Assert_failure"],
                      [0,"bytecomp/bytegen.ml",668,16]];
               }
             }
           };
       
       var cont$3=loop(sz,try_blocks[1]);
       
       var exit$5;
       
       if(args$4)
        {if(args$4[2])
          {exit$5=63;}
         else
          {return comp_expr(env,args$4[1],sz,cont$3);}
         }
       else
        {exit$5=63;}
       
       switch(exit$5)
        {case 63:return comp_exit_args(env,args$4,sz,size,cont$3);}
       
      case 10:
       var handler=exp[3];
       
       var match$37=exp[2];
       
       var vars=match$37[2];
       
       var i$3=match$37[1];
       
       var body$1=exp[1];
       
       var nvars=List["length"](vars);
       
       var match$38=make_branch(cont);
       
       var cont1=match$38[2];
       
       var branch1=match$38[1];
       
       if(nvars!==1)
        {var
          match$39=
           label_code
            (comp_expr
              (add_vars(vars,sz+1,env),handler,sz+nvars,add_pop(nvars,cont1)));
         
         push_static_raise(i$3,match$39[1],sz+nvars);
         var
          r=
           push_dummies
            (nvars,
             comp_expr
              (env,
               body$1,
               sz+nvars,
               add_pop(nvars,/* :: */[0,branch1,match$39[2]])));
         }
       else
        {var exit$6;
         
         if(vars)
          {if(vars[2]){exit$6=57;}else{var $$var=vars[1];}}
         else
          {exit$6=57;}
         
         switch(exit$6)
          {case 57:
            throw [0,
                   CamlPrimitive["caml_global_data"]["Assert_failure"],
                   [0,"bytecomp/bytegen.ml",650,56]];
            
           }
         
         var
          match$40=
           label_code
            (/* :: */[0,
              /* Kpush */0,
              comp_expr(add_var($$var,sz+1,env),handler,sz+1,add_pop(1,cont1))]);
         
         push_static_raise(i$3,match$40[1],sz);
         var r=comp_expr(env,body$1,sz,/* :: */[0,branch1,match$40[2]]);
         }
       
       sz_static_raises[1]=List["tl"](sz_static_raises[1]);
       return r;
       
      case 11:
       var match$41=make_branch(cont);
       
       var lbl_handler=new_label(/* () */0);
       
       var
        body_cont=
         /* :: */[0,
          /* Kpoptrap */8,
          /* :: */[0,
           match$41[1],
           /* :: */[0,
            /* Klabel */[0,lbl_handler],
            /* :: */[0,
             /* Kpush */0,
             comp_expr
              (add_var(exp[2],sz+1,env),exp[3],sz+1,add_pop(1,match$41[2]))]]]];
       
       try_blocks[1]=/* :: */[0,sz,try_blocks[1]];
       var l=comp_expr(env,exp[1],sz+4,body_cont);
       
       try_blocks[1]=List["tl"](try_blocks[1]);
       return /* :: */[0,/* Kpushtrap */[28,lbl_handler],l];
       
      case 12:return comp_binary_test(env,exp[1],exp[2],exp[3],sz,cont);
      case 13:return comp_expr(env,exp[1],sz,comp_expr(env,exp[2],sz,cont));
      case 14:
       var lbl_loop=new_label(/* () */0);
       
       var lbl_test=new_label(/* () */0);
       
       return /* :: */[0,
               /* Kbranch */[22,lbl_test],
               /* :: */[0,
                /* Klabel */[0,lbl_loop],
                /* :: */[0,
                 /* Kcheck_signals */9,
                 comp_expr
                  (env,
                   exp[2],
                   sz,
                   /* :: */[0,
                    /* Klabel */[0,lbl_test],
                    comp_expr
                     (env,
                      exp[1],
                      sz,
                      /* :: */[0,
                       /* Kbranchif */[23,lbl_loop],
                       add_const_unit(cont)])])]]];
       
      case 15:
       var dir=exp[4];
       
       var lbl_loop$1=new_label(/* () */0);
       
       var lbl_exit=new_label(/* () */0);
       
       if(dir!==0){var offset=-1;}else{var offset=1;}
       
       if(dir!==0){var comp=/* Clt */2;}else{var comp=/* Cgt */3;}
       
       return comp_expr
               (env,
                exp[2],
                sz,
                /* :: */[0,
                 /* Kpush */0,
                 comp_expr
                  (env,
                   exp[3],
                   sz+1,
                   /* :: */[0,
                    /* Kpush */0,
                    /* :: */[0,
                     /* Kpush */0,
                     /* :: */[0,
                      [/* Kacc */1,2],
                      /* :: */[0,
                       /* Kintcomp */[31,comp],
                       /* :: */[0,
                        /* Kbranchif */[23,lbl_exit],
                        /* :: */[0,
                         /* Klabel */[0,lbl_loop$1],
                         /* :: */[0,
                          /* Kcheck_signals */9,
                          comp_expr
                           (add_var(exp[1],sz+1,env),
                            exp[5],
                            sz+2,
                            /* :: */[0,
                             [/* Kacc */1,1],
                             /* :: */[0,
                              /* Kpush */0,
                              /* :: */[0,
                               /* Koffsetint */[32,offset],
                               /* :: */[0,
                                [/* Kassign */4,2],
                                /* :: */[0,
                                 [/* Kacc */1,1],
                                 /* :: */[0,
                                  [/* Kintcomp */31,/* Cneq */1],
                                  /* :: */[0,
                                   /* Kbranchif */[23,lbl_loop$1],
                                   /* :: */[0,
                                    /* Klabel */[0,lbl_exit],
                                    add_const_unit(add_pop(2,cont))]]]]]]]])]]]]]]])]);
       
      case 16:
       try
        {var pos$2=Ident["find_same"](exp[1],env[1]);
         
         return comp_expr
                 (env,exp[2],sz,/* :: */[0,/* Kassign */[4,sz-pos$2],cont]);
         }
       catch(exn$3)
        {if(exn$3===CamlPrimitive["caml_global_data"]["Not_found"])
          {return Misc["fatal_error"]("Bytegen.comp_expr: assign");}
         else
          {throw exn$3;}
         }
       
      case 17:
       var args$5=exp[4];
       
       var obj=exp[3];
       
       var met=exp[2];
       
       var kind$1=exp[1];
       
       if(kind$1===/* Cached */2)
        {var args$6=List["tl"](args$5);}
       else
        {var args$6=args$5;}
       
       var nargs$1=List["length"](args$6)+1;
       
       if(kind$1===/* Self */0)
        {var
          match$42=
           /* tuple */[0,
            /* Kgetmethod */24,
            /* :: */[0,met,/* :: */[0,obj,args$6]]];
         }
       else
        {var exit$7;
         
         switch(met[0])
          {case 1:
            var match$43=met[1];
            
            switch(match$43[0])
             {case 0:
               var match$44=match$43[1];
               
               switch(match$44[0])
                {case 0:
                  var
                   match$42=
                    /* tuple */[0,
                     /* Kgetpubmet */[34,match$44[1]],
                     /* :: */[0,obj,args$6]];
                  
                 default:exit$7=26;}
               
              default:exit$7=26;}
            
           default:exit$7=26;}
         
         switch(exit$7)
          {case 26:
            var
             match$42=
              /* tuple */[0,
               /* Kgetdynmet */25,
               /* :: */[0,met,/* :: */[0,obj,args$6]]];
            
           }
         }
       
       var args$prime=match$42[2];
       
       var getmethod=match$42[1];
       
       if(is_tailcall(cont))
        {return comp_args
                 (env,
                  args$prime,
                  sz,
                  /* :: */[0,
                   getmethod,
                   /* :: */[0,
                    /* Kappterm */[7,nargs$1,sz+nargs$1],
                    discard_dead_code(cont)]]);
         }
       else
        {if(nargs$1<4)
          {return comp_args
                   (env,
                    args$prime,
                    sz,
                    /* :: */[0,
                     getmethod,
                     /* :: */[0,/* Kapply */[6,nargs$1],cont]]);
           }
         else
          {var match$45=label_code(cont);
           
           return /* :: */[0,
                   /* Kpush_retaddr */[5,match$45[1]],
                   comp_args
                    (env,
                     args$prime,
                     sz+3,
                     /* :: */[0,
                      getmethod,
                      /* :: */[0,/* Kapply */[6,nargs$1],match$45[2]]])];
           }
         }
       
      case 18:
       var lev=exp[2];
       
       var lam=exp[1];
       
       var
        $$event=
         function(kind,info)
          {var match$46=lev[3];
           
           if(match$46)
            {var repr=match$46[1];
             
             var match$47=repr[1];
             
             if(match$47!==1)
              {if(lev[2]===/* Lev_function */1)
                {var $js=/* Event_parent */[0,repr];}
               else
                {var $js=/* Event_child */[1,repr];}
               }
             else
              {if(lev[2]===/* Lev_function */1)
                {var $js=/* Event_child */[1,repr];}
               else
                {var $js=/* Event_parent */[0,repr];}
               }
             }
           else
            {var $js=/* Event_none */0;}
           return /* record */[0,
                   0,
                   compunit_name[1],
                   lev[1],
                   kind,
                   info,
                   lev[4],
                   Subst["identity"],
                   env,
                   sz,
                   $js];
           };
       
       var match$46=lev[2];
       
       if(typeof match$46==="number")
        {if(match$46!==0)
          {var c$1=comp_expr(env,lam,sz,cont);
           
           var ev=$$event(/* Event_pseudo */1,/* Event_function */0);
           
           return add_event(ev,c$1);
           }
         else
          {var c$2=comp_expr(env,lam,sz,cont);
           
           var ev$1=$$event(/* Event_before */0,/* Event_other */1);
           
           return add_event(ev$1,c$2);
           }
         }
       else
        {if(is_tailcall(cont))
          {return comp_expr(env,lam,sz,cont);}
         else
          {switch(lam[0])
            {case 2:var info=/* Event_return */[0,List["length"](lam[2])];
             case 17:var info=/* Event_return */[0,List["length"](lam[4])+1];
             default:var info=/* Event_other */1;}
           
           var ev$2=$$event(/* Event_after */[0,match$46[1]],info);
           
           var cont1$1=add_event(ev$2,cont);
           
           return comp_expr(env,lam,sz,cont1$1);
           }
         }
       
      case 19:return comp_expr(env,exp[2],sz,cont);
      }
    
    switch(exit)
     {case 102:
       var exp$1=/* Lapply */[2,func$1,/* :: */[0,arg,/* [] */0],loc];
       
       return comp_expr(env,exp$1,sz,cont);
       
      }
    };

var
 comp_args=
  function(env,argl,sz,cont)
   {return comp_expr_list(env,List["rev"](argl),sz,cont);};

var
 comp_expr_list=
  function(env,exprl,sz,cont)
   {if(exprl)
     {var rem=exprl[2];
      
      var exp=exprl[1];
      
      if(rem)
       {return comp_expr
                (env,
                 exp,
                 sz,
                 /* :: */[0,/* Kpush */0,comp_expr_list(env,rem,sz+1,cont)]);
        }
      else
       {return comp_expr(env,exp,sz,cont);}
      }
    else
     {return cont;}
    };

var
 comp_exit_args=
  function(env,argl,sz,pos,cont)
   {return comp_expr_list_assign(env,List["rev"](argl),sz,pos,cont);};

var
 comp_expr_list_assign=
  function(env,exprl,sz,pos,cont)
   {if(exprl)
     {return comp_expr
              (env,
               exprl[1],
               sz,
               /* :: */[0,
                /* Kassign */[4,sz-pos],
                comp_expr_list_assign(env,exprl[2],sz,pos-1,cont)]);
      }
    else
     {return cont;}
    };

var
 comp_binary_test=
  function(env,cond,ifso,ifnot,sz,cont)
   {if
     (CamlPrimitive["caml_equal"](ifnot,/* Lconst */[1,Lambda["const_unit"]]))
     {var match=label_code(cont);
      
      var
       cont_cond=
        /* :: */[0,
         /* Kstrictbranchifnot */[26,match[1]],
         comp_expr(env,ifso,sz,match[2])];
      }
    else
     {var match$1=code_as_jump(ifso,sz);
      
      if(match$1)
       {var cont$1=comp_expr(env,ifnot,sz,cont);
        
        var cont_cond=/* :: */[0,/* Kbranchif */[23,match$1[1]],cont$1];
        }
      else
       {var match$2=code_as_jump(ifnot,sz);
        
        if(match$2)
         {var cont$2=comp_expr(env,ifso,sz,cont);
          
          var cont_cond=/* :: */[0,/* Kbranchifnot */[24,match$2[1]],cont$2];
          }
        else
         {var match$3=make_branch(cont);
          
          var match$4=label_code(comp_expr(env,ifnot,sz,match$3[2]));
          
          var
           cont_cond=
            /* :: */[0,
             /* Kbranchifnot */[24,match$4[1]],
             comp_expr(env,ifso,sz,/* :: */[0,match$3[1],match$4[2]])];
          }
        }
      }
    
    return comp_expr(env,cond,sz,cont_cond);
    };

var
 comp_string_switch=
  function(env,arg,cases,$$default,sz,cont){return /* () */0;};

var
 comp_block=
  function(env,exp,sz,cont)
   {max_stack_used[1]=0;
    var code=comp_expr(env,exp,sz,cont);
    
    if(max_stack_used[1]+1>Config["stack_threshold"])
     {return /* :: */[0,
              /* Kconst */[15,
               /* Const_base */[0,/* Const_int */[0,max_stack_used[1]+1]]],
              /* :: */[0,[/* Kccall */30,"caml_ensure_stack_capacity",1],code]];
      }
    else
     {return code;}
    };

var
 comp_function=
  function(tc,cont)
   {var arity=List["length"](tc[1]);
    
    var
     positions=
      function(pos,delta,param)
       {if(param)
         {return Ident["add"]
                  (param[1],pos,positions(pos+delta,delta,param[2]));
          }
        else
         {return Ident["empty"];}
        };
    
    var
     env=
      /* record */[0,
       positions(arity,-1,tc[1]),
       positions(2*(tc[5]-tc[7])-1,1,tc[4]),
       positions(-2*tc[7],2,tc[6])];
    
    var
     cont$1=
      comp_block(env,tc[2],arity,/* :: */[0,/* Kreturn */[8,arity],cont]);
    
    if(arity>1)
     {return /* :: */[0,
              /* Krestart */1,
              /* :: */[0,
               /* Klabel */[0,tc[3]],
               /* :: */[0,/* Kgrab */[9,arity-1],cont$1]]];
      }
    else
     {return /* :: */[0,/* Klabel */[0,tc[3]],cont$1];}
    };

var
 comp_remainder=
  function(cont)
   {var c=cont;
    
    try
     {while(/* true */1)
       {c=comp_function(Stack["pop"](functions_to_compile),c);}
      }
    catch(exn){if(exn===Stack["Empty"]){}else{throw exn;}}
    
    return c;
    };

var
 compile_implementation=
  function(modulename,expr)
   {Stack["clear"](functions_to_compile);
    label_counter[1]=0;
    sz_static_raises[1]=/* [] */0;
    compunit_name[1]=modulename;
    var init_code=comp_block(empty_env,expr,0,/* [] */0);
    
    if(Stack["length"](functions_to_compile)>0)
     {var lbl_init=new_label(/* () */0);
      
      return /* :: */[0,
              /* Kbranch */[22,lbl_init],
              comp_remainder(/* :: */[0,/* Klabel */[0,lbl_init],init_code])];
      }
    else
     {return init_code;}
    };

var
 compile_phrase=
  function(expr)
   {Stack["clear"](functions_to_compile);
    label_counter[1]=0;
    sz_static_raises[1]=/* [] */0;
    var
     init_code=
      comp_block(empty_env,expr,1,[/* :: */0,[/* Kreturn */8,1],/* [] */0]);
    
    var fun_code=comp_remainder(/* [] */0);
    
    return /* tuple */[0,init_code,fun_code];
    };

var
 reset=
  function(param)
   {label_counter[1]=0;
    sz_static_raises[1]=/* [] */0;
    compunit_name[1]="";
    Stack["clear"](functions_to_compile);
    return max_stack_used[1]=0,0;
    };

module["exports"]=
{"compile_implementation":compile_implementation,
 "compile_phrase":compile_phrase,
 "reset":reset};

