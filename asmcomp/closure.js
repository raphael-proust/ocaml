// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("List");
var Pervasives=require("Pervasives");
var Clflags=require("Clflags");
var Debuginfo=require("Debuginfo");
var Compilenv=require("Compilenv");
var Switch=require("Switch");
var Misc=require("Misc");
var Lambda=require("Lambda");
var Arch=require("Arch");
var Tbl=require("Tbl");
var Location=require("Location");
var Ident=require("Ident");
var $$Array=require("Array");
var Sys=require("Sys");


var make_key=Lambda["make_key"];

var Storer=Switch["Store"]([0,make_key]);

var
 split_list=
  function(n,l)
   {if(n<=0)
     {return /* tuple */[0,0,l];}
    else
     {if(l)
       {var match=split_list(n-1,l[2]);
        
        return /* tuple */[0,/* :: */[0,l[1],match[1]],match[2]];
        }
      else
       {return Misc["fatal_error"]("Closure.split_list");}
      }
    };

var
 build_closure_env=
  function(env_param,pos,param)
   {if(param)
     {return Tbl["add"]
              (param[1],
               /* Uprim */[8,
                /* Pfield */[6,pos],
                /* :: */[0,/* Uvar */[0,env_param],0],
                Debuginfo["none"]],
               build_closure_env(env_param,pos+1,param[2]));
      }
    else
     {return Tbl["empty"];}
    };

var
 getglobal=
  function(id)
   {return /* Uprim */[8,
            /* Pgetglobal */[3,
             Ident["create_persistent"](Compilenv["symbol_for_global"](id))],
            0,
            Debuginfo["none"]];
    };

var
 occurs_var=
  function($$var,u)
   {var
     occurs=
      function(param)
       {var exit;
        
        switch(param)
         {case 0:return "unknown primitive:caml_equal";
          case 1:return 0;
          case 3:return occurs(param[1])||List["exists"](occurs,param[2]);
          case 5:return occurs(param[1]);
          case 6:return occurs(param[2])||occurs(param[3]);
          case 7:
           return List["exists"]
                   (function(param$1){return occurs(param$1[2]);},param[1])||
                  occurs(param[2]);
           
          case 9:
           var s=param[2];
           
           return occurs(param[1])||occurs_array(s[2])||occurs_array(s[4]);
           
          case 10:
           var d=param[3];
           
           return occurs(param[1])||
                  List["exists"]
                   (function(param$1){return occurs(param$1[2]);},param[2])||
                  (d?occurs(d[1]):0);
           
          case 12:return occurs(param[3])||occurs(param[4]);
          case 13:return occurs(param[1])||occurs(param[3]);
          case 14:return occurs(param[1])||occurs(param[2])||occurs(param[3]);
          case 15:exit=265;
          case 16:exit=265;
          case 17:return occurs(param[2])||occurs(param[3])||occurs(param[5]);
          case 18:return "unknown primitive:caml_equal"||occurs(param[2]);
          case 19:
           return occurs(param[2])||
                  occurs(param[3])||
                  List["exists"](occurs,param[4]);
           
          default:return List["exists"](occurs,param[2]);}
        
        switch(exit){case 265:return occurs(param[1])||occurs(param[2]);}
        };
    
    var
     occurs_array=
      function(a)
       {try
         {for(var i=0;i<=a["length"]-1;i++)
           {if(occurs(a[i])){throw Pervasives["Exit"];}else{}}
          
          return 0;
          }
        catch(exn){if(exn=Pervasives["Exit"]){return 1;}else{throw exn;}}
        };
    
    return occurs(u);
    };

var
 split_default_wrapper=
  function(fun_id,kind,params,body)
   {var
     aux=
      function(map,body$1)
       {var exit;
        
        switch(body$1)
         {case 4:
           if(body$1[1]!=0)
            {exit=262;}
           else
            {var def=body$1[3];
             
             switch(def)
              {case 12:
                var match=def[1];
                
                switch(match)
                 {case 0:
                   var optparam=match[1];
                   
                   var id=body$1[2];
                   
                   if
                    ("unknown primitive:caml_string_equal"&&
                     List["mem"](optparam,params)&&
                     !List["mem_assoc"](optparam,map))
                    {var
                      match$1=
                       aux(/* :: */[0,/* tuple */[0,optparam,id],map],body$1[4]);
                     
                     return /* tuple */[0,
                             /* Llet */[4,0,id,def,match$1[1]],
                             match$1[2]];
                     }
                   else
                    {exit=262;}
                   
                  default:exit=262;}
                
               default:exit=262;}
             }
           
          default:exit=262;}
        
        switch(exit)
         {case 262:
           if(map=0)
            {throw Pervasives["Exit"];}
           else
            {var fv=Lambda["free_variables"](body$1);
             
             List["iter"]
              (function(param)
                {if(Lambda["IdentSet"][3](param[1],fv))
                  {throw Pervasives["Exit"];}
                 else
                  {return 0;}
                 },
               map);
             var
              inner_id=
               Ident["create"]
                (Pervasives["^"](Ident["name"](fun_id),"_inner"));
             
             var
              map_param=
               function(p)
                {try
                  {return List["assoc"](p,map);}
                 catch(exn){if(exn=Not_found){return p;}else{throw exn;}}
                 };
             
             var
              args=
               List["map"]
                (function(p){return /* Lvar */[0,map_param(p)];},params);
             
             var
              wrapper_body=
               /* Lapply */[2,/* Lvar */[0,inner_id],args,Location["none"]];
             
             var inner_params=List["map"](map_param,params);
             
             var new_ids=List["map"](Ident["rename"],inner_params);
             
             var
              subst=
               List["fold_left2"]
                (function(s,id$1,new_id)
                  {return Ident["add"](id$1,/* Lvar */[0,new_id],s);},
                 Ident["empty"],
                 inner_params,
                 new_ids);
             
             var body$2=Lambda["subst_lambda"](subst,body$1);
             
             var inner_fun=/* Lfunction */[3,0,new_ids,body$2];
             
             return /* tuple */[0,
                     wrapper_body,
                     /* tuple */[0,inner_id,inner_fun]];
             }
           
          }
        };
    
    try
     {var match=aux(0,body);
      
      return /* :: */[0,
              /* tuple */[0,fun_id,/* Lfunction */[3,kind,params,match[1]]],
              /* :: */[0,match[2],0]];
      }
    catch(exn)
     {if(exn=Pervasives["Exit"])
       {return /* :: */[0,
                /* tuple */[0,fun_id,/* Lfunction */[3,kind,params,body]],
                0];
        }
      else
       {throw exn;}
      }
    };

var
 prim_size=
  function(prim,args)
   {var exit;
    
    if(typeof prim=="number")
     {switch(prim)
       {case 0:return 0;
        case 26:return 5;
        case 29:exit=241;
        case 30:exit=241;
        case 33:return 3;
        }}
    else
     {switch(prim[0])
       {case 3:exit=243;
        case 4:exit=243;
        case 5:exit=244;
        case 6:exit=243;
        case 7:if(prim[2]){return 4;}else{return 1;}
        case 8:exit=243;
        case 9:exit=243;
        case 10:return 10+List["length"](args);
        case 11:return (prim[1][3]?10:4)+List["length"](args);
        case 12:return 4;
        case 17:exit=244;
        case 18:if(prim[1]=0){return 6;}else{return 2;}
        case 19:if(prim[1]=0){return 12;}else{return 2;}
        case 20:if(prim[1]=0){return 16;}else{return 4;}
        case 21:if(prim[1]=0){return 18;}else{return 8;}
        case 22:if(prim[1]=0){return 22;}else{return 10;}
        case 39:exit=245;
        case 40:exit=245;
        default:exit=242;}}
    
    switch(exit)
     {case 243:return 1;
      case 244:return 5+List["length"](args);
      case 245:return 4+prim[2]*6;
      case 242:return 2;
      case 241:return 6;
      }
    };

var
 lambda_smaller=
  function(lam,threshold)
   {var size=[0,0];
    
    var
     lambda_size=
      function(lam$1)
       {if(size[1]>threshold){throw Pervasives["Exit"];}else{}
        
        var exit;
        
        switch(lam$1)
         {case 0:return 0;
          case 1:return size[0]++;
          case 2:size[1]=size[1]+4,0;return lambda_list_size(lam$1[2]);
          case 3:
           size[1]=size[1]+6,0;
           lambda_size(lam$1[1]);
           return lambda_list_size(lam$1[2]);
           
          case 4:exit=238;
          case 5:size[0]++;return lambda_size(lam$1[1]);
          case 6:lambda_size(lam$1[2]);return lambda_size(lam$1[3]);
          case 7:exit=238;
          case 8:
           var args=lam$1[2];
           
           size[1]=size[1]+prim_size(lam$1[1],args),0;
           return lambda_list_size(args);
           
          case 9:
           var cases=lam$1[2];
           
           if(cases[2]["length"]>1){size[1]=size[1]+5,0}else{}
           
           if(cases[4]["length"]>1){size[1]=size[1]+5,0}else{}
           
           lambda_size(lam$1[1]);
           lambda_array_size(cases[2]);
           return lambda_array_size(cases[4]);
           
          case 10:
           lambda_size(lam$1[1]);
           List["iter"]
            (function(param)
              {size[1]=size[1]+2,0;return lambda_size(param[2]);},
             lam$1[2]);
           return Misc["may"](lambda_size,lam$1[3]);
           
          case 11:return lambda_list_size(lam$1[2]);
          case 12:
           size[0]++;lambda_size(lam$1[3]);return lambda_size(lam$1[4]);
          case 13:
           size[1]=size[1]+8,0;
           lambda_size(lam$1[1]);
           return lambda_size(lam$1[3]);
           
          case 14:
           size[1]=size[1]+2,0;
           lambda_size(lam$1[1]);
           lambda_size(lam$1[2]);
           return lambda_size(lam$1[3]);
           
          case 15:lambda_size(lam$1[1]);return lambda_size(lam$1[2]);
          case 16:
           size[1]=size[1]+2,0;
           lambda_size(lam$1[1]);
           return lambda_size(lam$1[2]);
           
          case 17:
           size[1]=size[1]+4,0;
           lambda_size(lam$1[2]);
           lambda_size(lam$1[3]);
           return lambda_size(lam$1[5]);
           
          case 18:size[0]++;return lambda_size(lam$1[2]);
          case 19:
           size[1]=size[1]+8,0;
           lambda_size(lam$1[2]);
           lambda_size(lam$1[3]);
           return lambda_list_size(lam$1[4]);
           
          }
        
        switch(exit){case 238:throw Pervasives["Exit"];}
        };
    
    var lambda_list_size=function(l){return List["iter"](lambda_size,l);};
    
    var lambda_array_size=function(a){return $$Array["iter"](lambda_size,a);};
    
    try
     {lambda_size(lam);return size[1]<=threshold;}
    catch(exn){if(exn=Pervasives["Exit"]){return 0;}else{throw exn;}}
    };

var
 is_pure_clambda=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:exit=236;
      case 1:exit=236;
      case 8:
       var exit$1;
       
       var $js=param[1];
       if(typeof $js=="number")
        {switch($js){case 28:exit$1=234;case 30:exit$1=234;}}
       else
        {switch($js[0])
          {case 4:exit$1=234;
           case 7:exit$1=234;
           case 9:exit$1=234;
           case 10:exit$1=234;
           case 11:exit$1=234;
           case 12:exit$1=234;
           case 15:exit$1=234;
           case 20:exit$1=234;
           case 22:exit$1=234;
           case 40:exit$1=234;
           default:exit$1=235;}}
       
       switch(exit$1)
        {case 235:return List["for_all"](is_pure_clambda,param[2]);
         case 234:return 0;
         }
       
      default:return 0;}
    
    switch(exit){case 236:return 1;}
    };

var
 make_const=
  function(c){return /* tuple */[0,/* Uconst */[1,c],/* Value_const */[2,c]];};

var
 make_const_ref=
  function(c)
   {return make_const
            (/* Uconst_ref */[0,Compilenv["new_structured_constant"](c,1),c]);
    };

var make_const_int=function(n){return make_const(/* Uconst_int */[1,n]);};

var make_const_ptr=function(n){return make_const(/* Uconst_ptr */[2,n]);};

var make_const_bool=function(b){return make_const_ptr(b?1:0);};

var
 make_comparison=
  function(cmp,x,y)
   {var $js;
    switch(cmp[0])
     {case 0:$js="unknown primitive:caml_equal";
      case 1:$js="unknown primitive:caml_notequal";
      case 2:$js="unknown primitive:caml_lessthan";
      case 3:$js="unknown primitive:caml_greaterthan";
      case 4:$js="unknown primitive:caml_lessequal";
      case 5:$js="unknown primitive:caml_greaterequal";
      }
    return make_const_bool($js);
    };

var
 make_const_float=
  function(n){return make_const_ref(/* Uconst_float */[0,n]);};

var
 make_const_natint=
  function(n){return make_const_ref(/* Uconst_nativeint */[3,n]);};

var
 make_const_int32=
  function(n){return make_const_ref(/* Uconst_int32 */[1,n]);};

var
 make_const_int64=
  function(n){return make_const_ref(/* Uconst_int64 */[2,n]);};

var
 simplif_arith_prim_pure=
  function(fpc,p,param,dbg)
   {var approxs=param[2];
    
    var $$default=/* tuple */[0,/* Uprim */[8,p,param[1],dbg],0];
    
    var exit;
    
    if(approxs)
     {var match=approxs[1];
      
      if(typeof match=="number")
       {switch(match){}}
      else
       {switch(match[0])
         {case 2:
           var match$1=match[1];
           
           var exit$1;
           
           switch(match$1)
            {case 0:
              var match$2=match$1[2];
              
              switch(match$2)
               {case 0:
                 var match$3=approxs[2];
                 
                 var n1=match$2[1];
                 
                 if(match$3)
                  {var match$4=match$3[1];
                   
                   if(typeof match$4=="number")
                    {switch(match$4){}}
                   else
                    {switch(match$4[0])
                      {case 2:
                        var match$5=match$4[1];
                        
                        switch(match$5)
                         {case 0:
                           var match$6=match$5[2];
                           
                           switch(match$6)
                            {case 0:
                              if(match$3[2])
                               {exit=214;}
                              else
                               {if(fpc)
                                 {var n2=match$6[1];
                                  
                                  var exit$2;
                                  
                                  if(typeof p=="number")
                                   {switch(p)
                                     {case 22:return make_const_float(n1+n2);
                                      case 23:return make_const_float(n1-n2);
                                      case 24:return make_const_float(n1*n2);
                                      case 25:return make_const_float(n1/n2);
                                      }}
                                  else
                                   {switch(p[0])
                                     {case 16:return make_comparison(p[1],n1,n2);
                                      default:exit$2=204;}}
                                  
                                  switch(exit$2){case 204:return $$default;}
                                  }
                                else
                                 {exit=214;}
                                }
                              
                             default:exit=214;}
                           
                          case 1:exit=214;
                          case 2:exit=214;
                          }
                        
                       default:exit=214;}}
                   }
                 else
                  {if(fpc)
                    {var exit$3;
                     
                     if("unknown primitive:isint")
                      {var switcher=-18+p;
                       
                       if(3<switcher>>>0)
                        {exit$3=203;}
                       else
                        {switch(switcher[0])
                          {case 0:return make_const_int(n1);
                           case 1:exit$3=203;
                           case 2:return make_const_float(-n1);
                           case 3:return make_const_float(Math["abs"](n1));
                           }
                         }
                       }
                     else
                      {exit$3=203;}
                     
                     switch(exit$3){case 203:return $$default;}
                     }
                   else
                    {exit=214;}
                   }
                 
                case 1:
                 var match$7=approxs[2];
                 
                 var n=match$2[1];
                 
                 if(match$7)
                  {var match$8=match$7[1];
                   
                   if(typeof match$8=="number")
                    {switch(match$8){}}
                   else
                    {switch(match$8[0])
                      {case 2:
                        var match$9=match$8[1];
                        
                        switch(match$9)
                         {case 0:
                           var match$10=match$9[2];
                           
                           switch(match$10)
                            {case 1:
                              if(match$7[2])
                               {exit=214;}
                              else
                               {var n2$1=match$10[1];
                                
                                var exit$4;
                                
                                if(typeof p=="number")
                                 {switch(p){}}
                                else
                                 {switch(p[0])
                                   {case 27:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_const_int32(n+n2$1);}
                                     
                                    case 28:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_const_int32(n-n2$1);}
                                     
                                    case 29:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_const_int32(n*n2$1);}
                                     
                                    case 30:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {if(n2$1!=0)
                                        {return make_const_int32(n/n2$1);}
                                       else
                                        {exit$4=209;}
                                       }
                                     
                                    case 31:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {if(n2$1!=0)
                                        {return make_const_int32(n%n2$1);}
                                       else
                                        {exit$4=209;}
                                       }
                                     
                                    case 32:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_const_int32(n&n2$1);}
                                     
                                    case 33:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_const_int32(n|n2$1);}
                                     
                                    case 34:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_const_int32(n^n2$1);}
                                     
                                    case 38:
                                     if(p[1]!=1)
                                      {exit$4=209;}
                                     else
                                      {return make_comparison(p[2],n,n2$1);}
                                     
                                    default:exit$4=209;}}
                                
                                switch(exit$4){case 209:return $$default;}
                                }
                              
                             default:exit=214;}
                           
                          case 1:
                           if(match$7[2])
                            {exit=214;}
                           else
                            {var n2$2=match$9[1];
                             
                             var exit$5;
                             
                             if(typeof p=="number")
                              {switch(p){}}
                             else
                              {switch(p[0])
                                {case 35:
                                  if(p[1]!=1)
                                   {exit$5=210;}
                                  else
                                   {if(0<=n2$2&&n2$2<32)
                                     {return make_const_int32(n<<n2$2);}
                                    else
                                     {exit$5=210;}
                                    }
                                  
                                 case 36:
                                  if(p[1]!=1)
                                   {exit$5=210;}
                                  else
                                   {if(0<=n2$2&&n2$2<32)
                                     {return make_const_int32(n>>>n2$2);}
                                    else
                                     {exit$5=210;}
                                    }
                                  
                                 case 37:
                                  if(p[1]!=1)
                                   {exit$5=210;}
                                  else
                                   {if(0<=n2$2&&n2$2<32)
                                     {return make_const_int32(n>>n2$2);}
                                    else
                                     {exit$5=210;}
                                    }
                                  
                                 default:exit$5=210;}}
                             
                             switch(exit$5){case 210:return $$default;}
                             }
                           
                          case 2:exit=214;
                          }
                        
                       default:exit=214;}}
                   }
                 else
                  {var exit$6;
                   
                   if(typeof p=="number")
                    {switch(p){}}
                   else
                    {switch(p[0])
                      {case 24:
                        if(p[1]!=1){exit$6=208;}else{return make_const_int(n);}
                       case 25:
                        if(p[1]!=1)
                         {exit$6=208;}
                        else
                         {switch(p[2][0])
                           {case 0:
                             return make_const_natint
                                     ("unknown primitive:nativeint_of_int32");
                             
                            case 1:exit$6=208;
                            case 2:
                             return make_const_int64("unknown primitive:int64_of_int32");
                            }
                          }
                        
                       case 26:
                        if(p[1]!=1){exit$6=208;}else{return make_const_int32(-n);}
                       default:exit$6=208;}}
                   
                   switch(exit$6){case 208:return $$default;}
                   }
                 
                case 2:
                 var match$11=approxs[2];
                 
                 var n$1=match$2[1];
                 
                 if(match$11)
                  {var match$12=match$11[1];
                   
                   if(typeof match$12=="number")
                    {switch(match$12){}}
                   else
                    {switch(match$12[0])
                      {case 2:
                        var match$13=match$12[1];
                        
                        switch(match$13)
                         {case 0:
                           var match$14=match$13[2];
                           
                           switch(match$14)
                            {case 2:
                              if(match$11[2])
                               {exit=214;}
                              else
                               {var n2$3=match$14[1];
                                
                                var exit$7;
                                
                                if(typeof p=="number")
                                 {switch(p){}}
                                else
                                 {switch(p[0])
                                   {case 27:
                                     if(p[1]>=2)
                                      {return make_const_int64(n$1+n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    case 28:
                                     if(p[1]>=2)
                                      {return make_const_int64(n$1-n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    case 29:
                                     if(p[1]>=2)
                                      {return make_const_int64(n$1*n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    case 30:
                                     if(p[1]>=2)
                                      {if(n2$3!=0)
                                        {return make_const_int64(n$1/n2$3);}
                                       else
                                        {exit$7=212;}
                                       }
                                     else
                                      {exit$7=212;}
                                     
                                    case 31:
                                     if(p[1]>=2)
                                      {if(n2$3!=0)
                                        {return make_const_int64(n$1%n2$3);}
                                       else
                                        {exit$7=212;}
                                       }
                                     else
                                      {exit$7=212;}
                                     
                                    case 32:
                                     if(p[1]>=2)
                                      {return make_const_int64(n$1&n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    case 33:
                                     if(p[1]>=2)
                                      {return make_const_int64(n$1|n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    case 34:
                                     if(p[1]>=2)
                                      {return make_const_int64(n$1^n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    case 38:
                                     if(p[1]>=2)
                                      {return make_comparison(p[2],n$1,n2$3);}
                                     else
                                      {exit$7=212;}
                                     
                                    default:exit$7=212;}}
                                
                                switch(exit$7){case 212:return $$default;}
                                }
                              
                             default:exit=214;}
                           
                          case 1:
                           if(match$11[2])
                            {exit=214;}
                           else
                            {var n2$4=match$13[1];
                             
                             var exit$8;
                             
                             if(typeof p=="number")
                              {switch(p){}}
                             else
                              {switch(p[0])
                                {case 35:
                                  if(p[1]>=2)
                                   {if(0<=n2$4&&n2$4<64)
                                     {return make_const_int64(n$1<<n2$4);}
                                    else
                                     {exit$8=213;}
                                    }
                                  else
                                   {exit$8=213;}
                                  
                                 case 36:
                                  if(p[1]>=2)
                                   {if(0<=n2$4&&n2$4<64)
                                     {return make_const_int64(n$1>>>n2$4);}
                                    else
                                     {exit$8=213;}
                                    }
                                  else
                                   {exit$8=213;}
                                  
                                 case 37:
                                  if(p[1]>=2)
                                   {if(0<=n2$4&&n2$4<64)
                                     {return make_const_int64(n$1>>n2$4);}
                                    else
                                     {exit$8=213;}
                                    }
                                  else
                                   {exit$8=213;}
                                  
                                 default:exit$8=213;}}
                             
                             switch(exit$8){case 213:return $$default;}
                             }
                           
                          case 2:exit=214;
                          }
                        
                       default:exit=214;}}
                   }
                 else
                  {var exit$9;
                   
                   if(typeof p=="number")
                    {switch(p){}}
                   else
                    {switch(p[0])
                      {case 24:
                        if(p[1]>=2){return make_const_int(n$1);}else{exit$9=211;}
                       case 25:
                        if(p[1]>=2)
                         {switch(p[2][0])
                           {case 0:
                             return make_const_natint
                                     ("unknown primitive:nativeint_of_int64");
                             
                            case 1:
                             return make_const_int32("unknown primitive:int32_of_int64");
                            case 2:exit$9=211;
                            }
                          }
                        else
                         {exit$9=211;}
                        
                       case 26:
                        if(p[1]>=2){return make_const_int64(-n$1);}else{exit$9=211;}
                       default:exit$9=211;}}
                   
                   switch(exit$9){case 211:return $$default;}
                   }
                 
                case 3:
                 var match$15=approxs[2];
                 
                 var n$2=match$2[1];
                 
                 if(match$15)
                  {var match$16=match$15[1];
                   
                   if(typeof match$16=="number")
                    {switch(match$16){}}
                   else
                    {switch(match$16[0])
                      {case 2:
                        var match$17=match$16[1];
                        
                        switch(match$17)
                         {case 0:
                           var match$18=match$17[2];
                           
                           switch(match$18)
                            {case 3:
                              if(match$15[2])
                               {exit=214;}
                              else
                               {var n2$5=match$18[1];
                                
                                var exit$10;
                                
                                if(typeof p=="number")
                                 {switch(p){}}
                                else
                                 {switch(p[0])
                                   {case 27:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_const_natint(n$2+n2$5);}
                                     
                                    case 28:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_const_natint(n$2-n2$5);}
                                     
                                    case 29:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_const_natint(n$2*n2$5);}
                                     
                                    case 30:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {if(n2$5!=0)
                                        {return make_const_natint(n$2/n2$5);}
                                       else
                                        {exit$10=206;}
                                       }
                                     
                                    case 31:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {if(n2$5!=0)
                                        {return make_const_natint(n$2%n2$5);}
                                       else
                                        {exit$10=206;}
                                       }
                                     
                                    case 32:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_const_natint(n$2&n2$5);}
                                     
                                    case 33:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_const_natint(n$2|n2$5);}
                                     
                                    case 34:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_const_natint(n$2^n2$5);}
                                     
                                    case 38:
                                     if(p[1]!=0)
                                      {exit$10=206;}
                                     else
                                      {return make_comparison(p[2],n$2,n2$5);}
                                     
                                    default:exit$10=206;}}
                                
                                switch(exit$10){case 206:return $$default;}
                                }
                              
                             default:exit=214;}
                           
                          case 1:
                           if(match$15[2])
                            {exit=214;}
                           else
                            {var n2$6=match$17[1];
                             
                             var exit$11;
                             
                             if(typeof p=="number")
                              {switch(p){}}
                             else
                              {switch(p[0])
                                {case 35:
                                  if(p[1]!=0)
                                   {exit$11=207;}
                                  else
                                   {if(0<=n2$6&&n2$6<8*Arch["size_int"])
                                     {return make_const_natint(n$2<<n2$6);}
                                    else
                                     {exit$11=207;}
                                    }
                                  
                                 case 36:
                                  if(p[1]!=0)
                                   {exit$11=207;}
                                  else
                                   {if(0<=n2$6&&n2$6<8*Arch["size_int"])
                                     {return make_const_natint(n$2>>>n2$6);}
                                    else
                                     {exit$11=207;}
                                    }
                                  
                                 case 37:
                                  if(p[1]!=0)
                                   {exit$11=207;}
                                  else
                                   {if(0<=n2$6&&n2$6<8*Arch["size_int"])
                                     {return make_const_natint(n$2>>n2$6);}
                                    else
                                     {exit$11=207;}
                                    }
                                  
                                 default:exit$11=207;}}
                             
                             switch(exit$11){case 207:return $$default;}
                             }
                           
                          case 2:exit=214;
                          }
                        
                       default:exit=214;}}
                   }
                 else
                  {var exit$12;
                   
                   if(typeof p=="number")
                    {switch(p){}}
                   else
                    {switch(p[0])
                      {case 24:
                        if(p[1]!=0){exit$12=205;}else{return make_const_int(n$2);}
                       case 25:
                        if(p[1]!=0)
                         {exit$12=205;}
                        else
                         {switch(p[2][0])
                           {case 0:exit$12=205;
                            case 1:
                             return make_const_int32
                                     ("unknown primitive:int32_of_nativeint");
                             
                            case 2:
                             return make_const_int64
                                     ("unknown primitive:int64_of_nativeint");
                             
                            }
                          }
                        
                       case 26:
                        if(p[1]!=0)
                         {exit$12=205;}
                        else
                         {return make_const_natint(-n$2);}
                        
                       default:exit$12=205;}}
                   
                   switch(exit$12){case 205:return $$default;}
                   }
                 
                default:exit=214;}
              
             case 1:exit$1=218;
             case 2:exit$1=218;
             }
           
           switch(exit$1)
            {case 218:
              var n1$1=match$1[1];
              
              if(approxs[2])
               {var n1$2=match$1[1];
                
                var match$19=approxs[2];
                
                var match$20=match$19[1];
                
                if(typeof match$20=="number")
                 {switch(match$20){}}
                else
                 {switch(match$20[0])
                   {case 2:
                     var match$21=match$20[1];
                     
                     var exit$13;
                     
                     switch(match$21)
                      {case 0:exit=214;case 1:exit$13=220;case 2:exit$13=220;}
                     
                     switch(exit$13)
                      {case 220:
                        var n2$7=match$21[1];
                        
                        if(match$19[2])
                         {exit=214;}
                        else
                         {var exit$14;
                          
                          if(typeof p=="number")
                           {switch(p)
                             {case 3:return make_const_bool(n1$2!=0&&n2$7!=0);
                              case 4:return make_const_bool(n1$2!=0||n2$7!=0);
                              case 7:return make_const_int(n1$2+n2$7);
                              case 8:return make_const_int(n1$2-n2$7);
                              case 9:return make_const_int(n1$2*n2$7);
                              case 10:
                               if(n2$7!=0)
                                {return make_const_int(n1$2/n2$7);}
                               else
                                {exit$14=202;}
                               
                              case 11:
                               if(n2$7!=0)
                                {return make_const_int(n1$2%n2$7);}
                               else
                                {exit$14=202;}
                               
                              case 12:return make_const_int(n1$2&n2$7);
                              case 13:return make_const_int(n1$2|n2$7);
                              case 14:return make_const_int(n1$2^n2$7);
                              case 15:
                               if(0<=n2$7&&n2$7<8*Arch["size_int"])
                                {return make_const_int(n1$2<<n2$7);}
                               else
                                {exit$14=202;}
                               
                              case 16:
                               if(0<=n2$7&&n2$7<8*Arch["size_int"])
                                {return make_const_int(n1$2>>>n2$7);}
                               else
                                {exit$14=202;}
                               
                              case 17:
                               if(0<=n2$7&&n2$7<8*Arch["size_int"])
                                {return make_const_int(n1$2>>n2$7);}
                               else
                                {exit$14=202;}
                               
                              }}
                          else
                           {switch(p[0])
                             {case 13:return make_comparison(p[1],n1$2,n2$7);
                              default:exit$14=202;}}
                          
                          switch(exit$14){case 202:return $$default;}
                          }
                        
                       }
                     
                    default:exit=214;}}
                }
              else
               {var exit$15;
                
                if(typeof p=="number")
                 {switch(p)
                   {case 5:return make_const_bool(n1$1=0);
                    case 6:return make_const_int(-n1$1);
                    case 19:
                     if(fpc){return make_const_float(n1$1);}else{exit$15=201;}
                    case 34:
                     return make_const_int((n1$1&255)<<8|(n1$1&65280)>>>8);
                    }}
                else
                 {switch(p[0])
                   {case 14:return make_const_int(p[1]+n1$1);
                    case 23:
                     switch(p[1][0])
                      {case 0:return make_const_natint(n1$1);
                       case 1:return make_const_int32(n1$1);
                       case 2:return make_const_int64(n1$1);
                       }
                     
                    default:exit$15=201;}}
                
                switch(exit$15){case 201:return $$default;}
                }
              
             }
           
          default:exit=214;}}
      }
    else
     {exit=214;}
    
    switch(exit){case 214:return $$default;}
    };

var
 field_approx=
  function(n,param)
   {var exit;
    
    if(typeof param=="number")
     {switch(param){}}
    else
     {switch(param[0])
       {case 1:var a=param[1];if(n<a["length"]){return a[n];}else{exit=199;}
        case 2:
         var match=param[1];
         
         switch(match)
          {case 0:
            var match$1=match[2];
            
            switch(match$1)
             {case 4:
               var l=match$1[2];
               
               if(n<List["length"](l))
                {return /* Value_const */[2,List["nth"](l,n)];}
               else
                {exit=199;}
               
              default:exit=199;}
            
           case 1:exit=199;
           case 2:exit=199;
           }
         
        default:exit=199;}}
    
    switch(exit){case 199:return 0;}
    };

var
 simplif_prim_pure=
  function(fpc,p,param,dbg)
   {var approxs=param[2];
    
    var args=param[1];
    
    var exit;
    
    if(typeof p=="number")
     {switch(p)
       {case 0:
         if(args)
          {if(args[2])
            {exit=196;}
           else
            {if(approxs)
              {if(approxs[2])
                {exit=196;}
               else
                {return /* tuple */[0,args[1],approxs[1]];}
               }
             else
              {exit=196;}
             }
           }
         else
          {exit=196;}
         
        case 26:
         if(approxs)
          {var match=approxs[1];
           
           if(typeof match=="number")
            {switch(match){}}
           else
            {switch(match[0])
              {case 2:
                var match$1=match[1];
                
                switch(match$1)
                 {case 0:
                   var match$2=match$1[2];
                   
                   switch(match$2)
                    {case 6:
                      if(approxs[2])
                       {exit=196;}
                      else
                       {return make_const_int(match$2[1]["length"]);}
                      
                     default:exit=196;}
                   
                  case 1:exit=196;
                  case 2:exit=196;
                  }
                
               default:exit=196;}}
           }
         else
          {exit=196;}
         
        case 31:
         if(approxs)
          {if(approxs[2])
            {exit=196;}
           else
            {var a1=approxs[1];
             
             var exit$1;
             
             if(typeof a1=="number")
              {switch(a1){case 0:exit$1=194;}}
             else
              {switch(a1[0])
                {case 0:exit$1=193;
                 case 1:exit$1=193;
                 case 2:
                  var exit$2;
                  
                  switch(a1[1])
                   {case 0:return make_const_bool(0);
                    case 1:exit$2=195;
                    case 2:exit$2=195;
                    }
                  
                  switch(exit$2){case 195:return make_const_bool(1);}
                  
                 case 3:exit$1=194;
                 }}
             
             switch(exit$1)
              {case 194:return /* tuple */[0,/* Uprim */[8,p,args,dbg],0];
               case 193:return make_const_bool(0);
               }
             }
           }
         else
          {exit=196;}
         
        }}
    else
     {switch(p[0])
       {case 5:
         if(p[3]!=0)
          {exit=196;}
         else
          {var
            field=
             function(param$1)
              {var exit$3;
               
               if(typeof param$1=="number")
                {switch(param$1){}}
               else
                {switch(param$1[0])
                  {case 2:return param$1[1];default:exit$3=191;}}
               
               switch(exit$3){case 191:throw Pervasives["Exit"];}
               };
           
           try
            {var cst=/* Uconst_block */[4,p[1],List["map"](field,approxs)];
             
             var name=Compilenv["new_structured_constant"](cst,1);
             
             return make_const(/* Uconst_ref */[0,name,cst]);
             }
           catch(exn)
            {if(exn=Pervasives["Exit"])
              {return /* tuple */[0,
                       /* Uprim */[8,p,args,dbg],
                       /* Value_tuple */[1,$$Array["of_list"](approxs)]];
               }
             else
              {throw exn;}
             }
           }
         
        case 6:
         var n=p[1];
         
         var exit$3;
         
         if(approxs)
          {var match$3=approxs[1];
           
           if(typeof match$3=="number")
            {switch(match$3){}}
           else
            {switch(match$3[0])
              {case 2:
                var match$4=match$3[1];
                
                switch(match$4)
                 {case 0:
                   var match$5=match$4[2];
                   
                   switch(match$5)
                    {case 4:
                      if(approxs[2])
                       {exit=196;}
                      else
                       {var l=match$5[2];
                        
                        if(n<List["length"](l))
                         {return make_const(List["nth"](l,n));}
                        else
                         {exit$3=197;}
                        }
                      
                     default:exit$3=197;}
                   
                  case 1:exit$3=197;
                  case 2:exit$3=197;
                  }
                
               default:exit$3=197;}}
           }
         else
          {exit=196;}
         
         switch(exit$3)
          {case 197:
            if(args)
             {var match$6=args[1];
              
              switch(match$6)
               {case 8:
                 var $js=match$6[1];
                 if(typeof $js=="number")
                  {switch($js){}}
                 else
                  {switch($js[0])
                    {case 5:
                      if(args[2])
                       {exit=196;}
                      else
                       {if(approxs[2])
                         {exit=196;}
                        else
                         {var ul=match$6[2];
                          
                          if(n<List["length"](ul))
                           {return /* tuple */[0,
                                    List["nth"](ul,n),
                                    field_approx(n,approxs[1])];
                            }
                          else
                           {exit=196;}
                          }
                        }
                      
                     default:exit=196;}}
                 
                default:exit=196;}
              }
            else
             {exit=196;}
            
           }
         
        case 54:
         switch(p[1][0])
          {case 0:return make_const_bool(Arch["big_endian"]);
           case 1:return make_const_int(8*Arch["size_int"]);
           case 2:
            return make_const_bool("unknown primitive:caml_string_equal");
           case 3:
            return make_const_bool("unknown primitive:caml_string_equal");
           case 4:
            return make_const_bool("unknown primitive:caml_string_equal");
           }
         
        default:exit=196;}}
    
    switch(exit)
     {case 196:
       return simplif_arith_prim_pure(fpc,p,/* tuple */[0,args,approxs],dbg);
      }
    };

var
 simplif_prim=
  function(fpc,p,args_approxs,dbg)
   {var args=args_approxs[1];
    
    if(List["for_all"](is_pure_clambda,args))
     {return simplif_prim_pure(fpc,p,args_approxs,dbg);}
    else
     {var exit;
      
      if(typeof p=="number")
       {switch(p){}}
      else
       {switch(p[0])
         {case 5:
           if(p[3]!=0)
            {exit=185;}
           else
            {var
              approx=
               /* Value_tuple */[1,$$Array["of_list"](args_approxs[2])];
             }
           
          default:exit=185;}}
      
      switch(exit){case 185:var approx=0;}
      
      return /* tuple */[0,/* Uprim */[8,p,args,dbg],approx];
      }
    };

var
 approx_ulam=
  function(param)
   {switch(param)
     {case 1:return /* Value_const */[2,param[1]];default:return 0;}
    };

var
 substitute=
  function(fpc,sb,ulam)
   {switch(ulam)
     {case 0:
       try
        {return Tbl["find"](ulam[1],sb);}
       catch(exn){if(exn=Not_found){return ulam;}else{throw exn;}}
       
      case 1:return ulam;
      case 2:
       return /* Udirect_apply */[2,
               ulam[1],
               List["map"](substitute(fpc,sb),ulam[2]),
               ulam[3]];
       
      case 3:
       return /* Ugeneric_apply */[3,
               substitute(fpc,sb,ulam[1]),
               List["map"](substitute(fpc,sb),ulam[2]),
               ulam[3]];
       
      case 4:
       return /* Uclosure */[4,
               ulam[1],
               List["map"](substitute(fpc,sb),ulam[2])];
       
      case 5:return /* Uoffset */[5,substitute(fpc,sb,ulam[1]),ulam[2]];
      case 6:
       var id=ulam[1];
       
       var id$prime=Ident["rename"](id);
       
       return /* Ulet */[6,
               id$prime,
               substitute(fpc,sb,ulam[2]),
               substitute
                (fpc,Tbl["add"](id,/* Uvar */[0,id$prime],sb),ulam[3])];
       
      case 7:
       var
        bindings1=
         List["map"]
          (function(param)
            {var id$1=param[1];
             
             return /* tuple */[0,id$1,Ident["rename"](id$1),param[2]];
             },
           ulam[1]);
       
       var
        sb$prime=
         List["fold_right"]
          (function(param,s)
            {return Tbl["add"](param[1],/* Uvar */[0,param[2]],s);},
           bindings1,
           sb);
       
       return /* Uletrec */[7,
               List["map"]
                (function(param)
                  {return /* tuple */[0,
                           param[2],
                           substitute(fpc,sb$prime,param[3])];
                   },
                 bindings1),
               substitute(fpc,sb$prime,ulam[2])];
       
      case 8:
       var sargs=List["map"](substitute(fpc,sb),ulam[2]);
       
       var
        match=
         simplif_prim
          (fpc,
           ulam[1],
           /* tuple */[0,sargs,List["map"](approx_ulam,sargs)],
           ulam[3]);
       
       return match[1];
       
      case 9:
       var sw=ulam[2];
       
       return /* Uswitch */[9,
               substitute(fpc,sb,ulam[1]),
               /* record */[0,
                sw[1],
                $$Array["map"](substitute(fpc,sb),sw[2]),
                sw[3],
                $$Array["map"](substitute(fpc,sb),sw[4])]];
       
      case 10:
       return /* Ustringswitch */[10,
               substitute(fpc,sb,ulam[1]),
               List["map"]
                (function(param)
                  {return /* tuple */[0,param[1],substitute(fpc,sb,param[2])];
                   },
                 ulam[2]),
               Misc["may_map"](substitute(fpc,sb),ulam[3])];
       
      case 11:
       return /* Ustaticfail */[11,
               ulam[1],
               List["map"](substitute(fpc,sb),ulam[2])];
       
      case 12:
       return /* Ucatch */[12,
               ulam[1],
               ulam[2],
               substitute(fpc,sb,ulam[3]),
               substitute(fpc,sb,ulam[4])];
       
      case 13:
       var id$1=ulam[2];
       
       var id$prime$1=Ident["rename"](id$1);
       
       return /* Utrywith */[13,
               substitute(fpc,sb,ulam[1]),
               id$prime$1,
               substitute
                (fpc,Tbl["add"](id$1,/* Uvar */[0,id$prime$1],sb),ulam[3])];
       
      case 14:
       var u3=ulam[3];
       
       var u2=ulam[2];
       
       var su1=substitute(fpc,sb,ulam[1]);
       
       var exit;
       
       switch(su1)
        {case 1:
          var match$1=su1[1];
          
          switch(match$1)
           {case 0:exit=178;
            case 1:exit=178;
            case 2:
             if(match$1[1]!=0)
              {return substitute(fpc,sb,u2);}
             else
              {return substitute(fpc,sb,u3);}
             
            }
          
         case 8:
          var $js=su1[1];
          if(typeof $js=="number")
           {switch($js){}}
          else
           {switch($js[0])
             {case 5:return substitute(fpc,sb,u2);default:exit=178;}}
          
         default:exit=178;}
       
       switch(exit)
        {case 178:
          return /* Uifthenelse */[14,
                  su1,
                  substitute(fpc,sb,u2),
                  substitute(fpc,sb,u3)];
          
         }
       
      case 15:
       return /* Usequence */[15,
               substitute(fpc,sb,ulam[1]),
               substitute(fpc,sb,ulam[2])];
       
      case 16:
       return /* Uwhile */[16,
               substitute(fpc,sb,ulam[1]),
               substitute(fpc,sb,ulam[2])];
       
      case 17:
       var id$2=ulam[1];
       
       var id$prime$2=Ident["rename"](id$2);
       
       return /* Ufor */[17,
               id$prime$2,
               substitute(fpc,sb,ulam[2]),
               substitute(fpc,sb,ulam[3]),
               ulam[4],
               substitute
                (fpc,Tbl["add"](id$2,/* Uvar */[0,id$prime$2],sb),ulam[5])];
       
      case 18:
       var id$3=ulam[1];
       
       try
        {var match$2=Tbl["find"](id$3,sb);
         
         switch(match$2)
          {case 0:var id$prime$3=match$2[1];
           default:throw [0,Assert_failure,[0,"asmcomp/closure.ml",615,55]];}
         }
       catch(exn$1)
        {if(exn$1=Not_found){var id$prime$3=id$3;}else{throw exn$1;}}
       
       return /* Uassign */[18,id$prime$3,substitute(fpc,sb,ulam[2])];
       
      case 19:
       return /* Usend */[19,
               ulam[1],
               substitute(fpc,sb,ulam[2]),
               substitute(fpc,sb,ulam[3]),
               List["map"](substitute(fpc,sb),ulam[4]),
               ulam[5]];
       
      }
    };

var
 is_simple_argument=
  function(param)
   {var exit;
    
    switch(param){case 0:exit=168;case 1:exit=168;default:return 0;}
    
    switch(exit){case 168:return 1;}
    };

var
 no_effects=
  function(u)
   {switch(u){case 4:return 1;default:return is_simple_argument(u);}};

var
 bind_params_rec=
  function(fpc,subst,params,args,body)
   {var exit;
    
    if(params)
     {if(args)
       {var al=args[2];
        
        var a1=args[1];
        
        var pl=params[2];
        
        var p1=params[1];
        
        if(is_simple_argument(a1))
         {return bind_params_rec(fpc,Tbl["add"](p1,a1,subst),pl,al,body);}
        else
         {var p1$prime=Ident["rename"](p1);
          
          var match=Ident["name"](p1);
          
          var exit$1;
          
          switch(match)
           {case "*opt*":
             switch(a1)
              {case 8:
                var match$1=a1[1];
                
                if(typeof match$1=="number")
                 {switch(match$1){}}
                else
                 {switch(match$1[0])
                   {case 5:
                     if(match$1[1]!=0)
                      {exit$1=162;}
                     else
                      {if(match$1[3]!=0)
                        {exit$1=162;}
                       else
                        {var match$2=a1[2];
                         
                         if(match$2)
                          {if(match$2[2])
                            {exit$1=162;}
                           else
                            {var
                              match$3=
                               /* tuple */[0,
                                match$2[1],
                                /* Uprim */[8,
                                 /* Pmakeblock */[5,0,match$1[2],0],
                                 /* :: */[0,/* Uvar */[0,p1$prime],0],
                                 a1[3]]];
                             }
                           }
                         else
                          {exit$1=162;}
                         }
                       }
                     
                    default:exit$1=162;}}
                
               default:exit$1=162;}
             
            default:exit$1=162;}
          
          switch(exit$1)
           {case 162:var match$3=/* tuple */[0,a1,/* Uvar */[0,p1$prime]];}
          
          var
           body$prime=
            bind_params_rec(fpc,Tbl["add"](p1,match$3[2],subst),pl,al,body);
          
          if(occurs_var(p1,body))
           {return /* Ulet */[6,p1$prime,match$3[1],body$prime];}
          else
           {if(no_effects(a1))
             {return body$prime;}
            else
             {return /* Usequence */[15,a1,body$prime];}
            }
          }
        }
      else
       {exit=165;}
      }
    else
     {if(args){exit=165;}else{return substitute(fpc,subst,body);}}
    
    switch(exit)
     {case 165:throw [0,Assert_failure,[0,"asmcomp/closure.ml",654,14]];}
    };

var
 bind_params=
  function(fpc,params,args,body)
   {return bind_params_rec
            (fpc,Tbl["empty"],List["rev"](params),List["rev"](args),body);
    };

var
 is_pure=
  function(param)
   {var exit;
    
    switch(param)
     {case 0:exit=159;
      case 1:exit=159;
      case 6:
       var exit$1;
       
       var $js=param[1];
       if(typeof $js=="number")
        {switch($js){case 28:exit$1=157;case 30:exit$1=157;}}
       else
        {switch($js[0])
          {case 4:exit$1=157;
           case 7:exit$1=157;
           case 9:exit$1=157;
           case 10:exit$1=157;
           case 11:exit$1=157;
           case 12:exit$1=157;
           case 15:exit$1=157;
           case 20:exit$1=157;
           case 22:exit$1=157;
           case 40:exit$1=157;
           default:exit$1=158;}}
       
       switch(exit$1)
        {case 158:return List["for_all"](is_pure,param[2]);case 157:return 0;}
       
      case 18:return is_pure(param[1]);
      default:return 0;}
    
    switch(exit){case 159:return 1;}
    };

var
 direct_apply=
  function(fundesc,funct,ufunct,uargs)
   {if(fundesc[3])
     {var app_args=uargs;}
    else
     {var app_args=Pervasives["@"](uargs,/* :: */[0,ufunct,0]);}
    
    var match=fundesc[4];
    
    if(match)
     {var match$1=match[1];
      
      var app=bind_params(fundesc[5],match$1[1],app_args,match$1[2]);
      }
    else
     {var app=/* Udirect_apply */[2,fundesc[1],app_args,Debuginfo["none"]];}
    
    if(!fundesc[3]||is_pure(funct))
     {return app;}
    else
     {return /* Usequence */[15,ufunct,app];}
    };

var
 strengthen_approx=
  function(appl,approx)
   {var intapprox=approx_ulam(appl);
    
    var exit;
    
    if(typeof intapprox=="number")
     {switch(intapprox){}}
    else
     {switch(intapprox[0]){case 2:return intapprox;default:exit=151;}}
    
    switch(exit){case 151:return approx;}
    };

var
 check_constant_result=
  function(lam,ulam,approx)
   {var exit;
    
    if(typeof approx=="number")
     {switch(approx){}}
    else
     {switch(approx[0])
       {case 2:if(is_pure(lam)){return make_const(approx[1]);}else{exit=149;}
        case 3:
         if(is_pure(lam))
          {var exit$1;
           
           switch(ulam)
            {case 8:
              var $js=ulam[1];
              if(typeof $js=="number")
               {switch($js){}}
              else
               {switch($js[0])
                 {case 6:
                   var match=ulam[2];
                   
                   if(match)
                    {var match$1=match[1];
                     
                     switch(match$1)
                      {case 8:
                        var $js$1=match$1[1];
                        if(typeof $js$1=="number")
                         {switch($js$1){}}
                        else
                         {switch($js$1[0])
                           {case 3:
                             if(match[2])
                              {exit$1=148;}
                             else
                              {return /* tuple */[0,ulam,approx];}
                             
                            default:exit$1=148;}}
                        
                       default:exit$1=148;}
                     }
                   else
                    {exit$1=148;}
                   
                  default:exit$1=148;}}
              
             default:exit$1=148;}
           
           switch(exit$1)
            {case 148:
              var
               glb=
                /* Uprim */[8,
                 /* Pgetglobal */[3,Ident["create_persistent"](approx[1])],
                 0,
                 Debuginfo["none"]];
              
              return /* tuple */[0,
                      /* Uprim */[8,
                       /* Pfield */[6,approx[2]],
                       /* :: */[0,glb,0],
                       Debuginfo["none"]],
                      approx];
              
             }
           }
         else
          {exit=149;}
         
        default:exit=149;}}
    
    switch(exit){case 149:return /* tuple */[0,ulam,approx];}
    };

var
 sequence_constant_expr=
  function(lam,ulam1,res2)
   {if(is_pure(lam))
     {return res2;}
    else
     {return /* tuple */[0,/* Usequence */[15,ulam1,res2[1]],res2[2]];}
    };

var global_approx=[0,[]];

var function_nesting_depth=[0,0];

var excessive_function_nesting_depth=5;

var
 add_debug_info=
  function(ev,u)
   {var match=ev[2];
    
    if("unknown primitive:isint")
     {return u;}
    else
     {switch(u)
       {case 2:
         return /* Udirect_apply */[2,u[1],u[2],Debuginfo["from_call"](ev)];
        case 3:
         var fn=u[1];
         
         switch(fn)
          {case 2:
            return /* Ugeneric_apply */[3,
                    /* Udirect_apply */[2,
                     fn[1],
                     fn[2],
                     Debuginfo["from_call"](ev)],
                    u[2],
                    Debuginfo["from_call"](ev)];
            
           default:
            return /* Ugeneric_apply */[3,fn,u[2],Debuginfo["from_call"](ev)];}
         
        case 8:
         var p=u[1];
         
         var exit;
         
         if(typeof p=="number")
          {switch(p){}}
         else
          {switch(p[0])
            {case 12:
              return /* Uprim */[8,
                      /* Praise */[12,p[1]],
                      u[2],
                      Debuginfo["from_call"](ev)];
              
             default:exit=141;}}
         
         switch(exit)
          {case 141:return /* Uprim */[8,p,u[2],Debuginfo["from_call"](ev)];}
         
        case 15:return /* Usequence */[15,u[1],add_debug_info(ev,u[2])];
        case 19:
         return /* Usend */[19,u[1],u[2],u[3],u[4],Debuginfo["from_call"](ev)];
         
        default:return u;}
      }
    };

var NotClosed="unknown primitive:caml_set_oo_id";

var
 close_approx_var=
  function(fenv,cenv,id)
   {try
     {var approx=Tbl["find"](id,fenv);}
    catch(exn){if(exn=Not_found){var approx=0;}else{throw exn;}}
    
    var exit;
    
    if(typeof approx=="number")
     {switch(approx){}}
    else
     {switch(approx[0]){case 2:return make_const(approx[1]);default:exit=135;}}
    
    switch(exit)
     {case 135:
       try
        {var subst=Tbl["find"](id,cenv);}
       catch(exn$1)
        {if(exn$1=Not_found){var subst=/* Uvar */[0,id];}else{throw exn$1;}}
       
       return /* tuple */[0,subst,approx];
       
      }
    };

var
 close_var=
  function(fenv,cenv,id)
   {var match=close_approx_var(fenv,cenv,id);return match[1];};

var
 close=
  function(fenv,cenv,funct)
   {var exit;
    
    switch(funct)
     {case 0:return close_approx_var(fenv,cenv,funct[1]);
      case 1:
       var
        str=
         function($staropt$star,cst)
          {if($staropt$star){var shared=$staropt$star[1];}else{var shared=1;}
           
           var name=Compilenv["new_structured_constant"](cst,shared);
           
           return /* Uconst_ref */[0,name,cst];
           };
       
       var
        transl=
         function(param)
          {switch(param)
            {case 0:
              var match=param[1];
              
              switch(match)
               {case 0:return /* Uconst_int */[1,match[1]];
                case 1:return /* Uconst_int */[1,match[1]];
                case 2:return str([0,0],/* Uconst_string */[6,match[1]]);
                case 3:
                 return str
                         (0,
                          /* Uconst_float */[0,
                           "unknown primitive:caml_float_of_string"]);
                 
                case 4:return str(0,/* Uconst_int32 */[1,match[1]]);
                case 5:return str(0,/* Uconst_int64 */[2,match[1]]);
                case 6:return str(0,/* Uconst_nativeint */[3,match[1]]);
                }
              
             case 1:return /* Uconst_ptr */[2,param[1]];
             case 2:
              return str
                      (0,
                       /* Uconst_block */[4,param[1],List["map"](transl,param[3])]);
              
             case 3:
              return str
                      (0,
                       /* Uconst_float_array */[5,
                        List["map"]
                         (function(prim)
                           {return "unknown primitive:caml_float_of_string";},
                          param[1])]);
              
             case 4:return str(0,/* Uconst_string */[6,param[1]]);
             }
           };
       
       return make_const(transl(funct[1]));
       
      case 2:
       var args=funct[2];
       
       var funct$1=funct[1];
       
       var nargs=List["length"](args);
       
       var match=close(fenv,cenv,funct$1);
       
       var match$1=close_list(fenv,cenv,args);
       
       var match$2=match[2];
       
       var ufunct=match[1];
       
       var exit$1;
       
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 0:
            var approx_res=match$2[2];
            
            var fundesc=match$2[1];
            
            var exit$2;
            
            if(match$1)
             {var match$3=match$1[1];
              
              switch(match$3)
               {case 8:
                 var $js=match$3[1];
                 if(typeof $js=="number")
                  {switch($js){}}
                 else
                  {switch($js[0])
                    {case 5:
                      if(match$1[2])
                       {exit$2=26;}
                      else
                       {var uargs=match$3[2];
                        
                        if(List["length"](uargs)=-fundesc[2])
                         {var app=direct_apply(fundesc,funct$1,ufunct,uargs);
                          
                          return /* tuple */[0,app,strengthen_approx(app,approx_res)];
                          }
                        else
                         {exit$2=26;}
                        }
                      
                     default:exit$2=26;}}
                 
                default:exit$2=26;}
              }
            else
             {exit$2=26;}
            
            switch(exit$2)
             {case 26:
               if(nargs=fundesc[2])
                {var app$1=direct_apply(fundesc,funct$1,ufunct,match$1);
                 
                 return /* tuple */[0,
                         app$1,
                         strengthen_approx(app$1,approx_res)];
                 }
               else
                {if(nargs<fundesc[2])
                  {var
                    first_args=
                     List["map"]
                      (function(arg)
                        {return /* tuple */[0,Ident["create"]("arg"),arg];},
                       match$1);
                   
                   var
                    final_args=
                     $$Array["to_list"]
                      ($$Array["init"]
                        (fundesc[2]-nargs,
                         function(param){return Ident["create"]("arg");}));
                   
                   var
                    iter=
                     function(args$1,body)
                      {if(args$1)
                        {var match$4=args$1[1];
                         
                         return iter
                                 (args$1[2],/* Ulet */[6,match$4[1],match$4[2],body]);
                         }
                       else
                        {return body;}
                       };
                   
                   var
                    internal_args=
                     Pervasives["@"]
                      (List["map"]
                        (function(param){return /* Lvar */[0,param[1]];},first_args),
                       List["map"]
                        (function(arg){return /* Lvar */[0,arg];},final_args));
                   
                   var
                    match$4=
                     close
                      (fenv,
                       cenv,
                       /* Lfunction */[3,
                        0,
                        final_args,
                        /* Lapply */[2,funct$1,internal_args,funct[3]]]);
                   
                   var new_fun=iter(first_args,match$4[1]);
                   
                   return /* tuple */[0,new_fun,match$4[2]];
                   }
                 else
                  {if(fundesc[2]>0&&nargs>fundesc[2])
                    {var match$5=split_list(fundesc[2],match$1);
                     
                     return /* tuple */[0,
                             /* Ugeneric_apply */[3,
                              direct_apply(fundesc,funct$1,ufunct,match$5[1]),
                              match$5[2],
                              Debuginfo["none"]],
                             0];
                     }
                   else
                    {exit$1=24;}
                   }
                 }
               
              }
            
           default:exit$1=24;}}
       
       switch(exit$1)
        {case 24:
          return /* tuple */[0,
                  /* Ugeneric_apply */[3,ufunct,match$1,Debuginfo["none"]],
                  0];
          
         }
       
      case 3:
       return close_one_function(fenv,cenv,Ident["create"]("fun"),funct);
      case 4:
       var body=funct[4];
       
       var lam=funct[3];
       
       var id=funct[2];
       
       var str$1=funct[1];
       
       var match$6=close_named(fenv,cenv,id,lam);
       
       var alam=match$6[2];
       
       var ulam=match$6[1];
       
       var exit$3;
       
       if(str$1>=3)
        {var match$7=close(fenv,cenv,body);
         
         return /* tuple */[0,/* Ulet */[6,id,ulam,match$7[1]],match$7[2]];
         }
       else
        {if(typeof alam=="number")
          {switch(alam){}}
         else
          {switch(alam[0])
            {case 2:
              if((str$1=1)||is_pure(lam))
               {return close(Tbl["add"](id,alam,fenv),cenv,body);}
              else
               {exit$3=32;}
              
             default:exit$3=32;}}
         }
       
       switch(exit$3)
        {case 32:
          var match$8=close(Tbl["add"](id,alam,fenv),cenv,body);
          
          return /* tuple */[0,/* Ulet */[6,id,ulam,match$8[1]],match$8[2]];
          
         }
       
      case 5:
       var body$1=funct[2];
       
       var defs=funct[1];
       
       if
        (List["for_all"]
          (function(param)
            {switch(param[2]){case 3:return 1;default:return 0;}},
           defs))
        {var match$9=close_functions(fenv,cenv,defs);
         
         var infos=match$9[2];
         
         var clos_ident=Ident["create"]("clos");
         
         var
          fenv_body=
           List["fold_right"]
            (function(param,fenv$1)
              {return Tbl["add"](param[1],param[3],fenv$1);},
             infos,
             fenv);
         
         var match$10=close(fenv_body,cenv,body$1);
         
         var
          sb=
           List["fold_right"]
            (function(param,sb$1)
              {return Tbl["add"]
                       (param[1],
                        /* Uoffset */[5,/* Uvar */[0,clos_ident],param[2]],
                        sb$1);
               },
             infos,
             Tbl["empty"]);
         
         return /* tuple */[0,
                 /* Ulet */[6,
                  clos_ident,
                  match$9[1],
                  substitute(Clflags["float_const_prop"][1],sb,match$10[1])],
                 match$10[2]];
         }
       else
        {var
          clos_defs=
           function(param)
            {if(param)
              {var match$11=param[1];
               
               var id$1=match$11[1];
               
               var match$12=clos_defs(param[2]);
               
               var match$13=close_named(fenv,cenv,id$1,match$11[2]);
               
               return /* tuple */[0,
                       /* :: */[0,/* tuple */[0,id$1,match$13[1]],match$12[1]],
                       Tbl["add"](id$1,match$13[2],match$12[2])];
               }
             else
              {return /* tuple */[0,0,fenv];}
             };
         
         var match$11=clos_defs(defs);
         
         var match$12=close(match$11[2],cenv,body$1);
         
         return /* tuple */[0,
                 /* Uletrec */[7,match$11[1],match$12[1]],
                 match$12[2]];
         }
       
      case 6:
       var p=funct[1];
       
       var exit$4;
       
       if(typeof p=="number")
        {switch(p){}}
       else
        {switch(p[0])
          {case 0:
            var match$13=funct[2];
            
            if(match$13)
             {var match$14=match$13[2];
              
              if(match$14)
               {if(match$14[2])
                 {exit$4=81;}
                else
                 {var loc=p[1];
                  
                  var funct$2=match$14[1];
                  
                  var arg=match$13[1];
                  
                  exit=80;
                  }
                }
              else
               {exit$4=81;}
              }
            else
             {exit$4=81;}
            
           case 1:
            var match$15=funct[2];
            
            if(match$15)
             {var match$16=match$15[2];
              
              if(match$16)
               {if(match$16[2])
                 {exit$4=81;}
                else
                 {var loc=p[1];
                  
                  var funct$2=match$15[1];
                  
                  var arg=match$16[1];
                  
                  exit=80;
                  }
                }
              else
               {exit$4=81;}
              }
            else
             {exit$4=81;}
            
           case 3:
            if(funct[2])
             {exit$4=81;}
            else
             {var id$1=p[1];
              
              return check_constant_result
                      (funct,getglobal(id$1),Compilenv["global_approx"](id$1));
              }
            
           case 6:
            var match$17=funct[2];
            
            if(match$17)
             {if(match$17[2])
               {exit$4=81;}
              else
               {var lam$1=match$17[1];
                
                var n=p[1];
                
                var match$18=close(fenv,cenv,lam$1);
                
                return check_constant_result
                        (lam$1,
                         /* Uprim */[8,
                          /* Pfield */[6,n],
                          /* :: */[0,match$18[1],0],
                          Debuginfo["none"]],
                         field_approx(n,match$18[2]));
                }
              }
            else
             {exit$4=81;}
            
           case 7:
            var match$19=funct[2];
            
            if(match$19)
             {var match$20=match$19[1];
              
              switch(match$20)
               {case 6:
                 var match$21=match$20[1];
                 
                 if(typeof match$21=="number")
                  {switch(match$21){}}
                 else
                  {switch(match$21[0])
                    {case 3:
                      if(match$20[2])
                       {exit$4=81;}
                      else
                       {var match$22=match$19[2];
                        
                        if(match$22)
                         {if(match$22[2])
                           {exit$4=81;}
                          else
                           {var n$1=p[1];
                            
                            var match$23=close(fenv,cenv,match$22[1]);
                            
                            var approx=match$23[2];
                            
                            if(approx!=0){global_approx[1][n$1]=approx,0}else{}
                            
                            return /* tuple */[0,
                                    /* Uprim */[8,
                                     /* Psetfield */[7,n$1,0],
                                     /* :: */[0,getglobal(match$21[1]),/* :: */[0,match$23[1],0]],
                                     Debuginfo["none"]],
                                    0];
                            }
                          }
                        else
                         {exit$4=81;}
                        }
                      
                     default:exit$4=81;}}
                 
                default:exit$4=81;}
              }
            else
             {exit$4=81;}
            
           case 12:
            var match$24=funct[2];
            
            if(match$24)
             {var match$25=match$24[1];
              
              switch(match$25)
               {case 18:
                 if(match$24[2])
                  {exit$4=81;}
                 else
                  {var match$26=close(fenv,cenv,match$25[1]);
                   
                   return /* tuple */[0,
                           /* Uprim */[8,
                            /* Praise */[12,p[1]],
                            /* :: */[0,match$26[1],0],
                            Debuginfo["from_raise"](match$25[2])],
                           0];
                   }
                 
                default:exit$4=81;}
              }
            else
             {exit$4=81;}
            
           default:exit$4=81;}}
       
       switch(exit$4)
        {case 81:
          return simplif_prim
                  (Clflags["float_const_prop"][1],
                   p,
                   close_list_approx(fenv,cenv,funct[2]),
                   Debuginfo["none"]);
          
         }
       
      case 7:
       var sw=funct[2];
       
       var arg$1=funct[1];
       
       var
        fn=
         function(fail)
          {var match$27=close(fenv,cenv,arg$1);
           
           var match$28=close_switch(arg$1,fenv,cenv,sw[2],sw[1],fail);
           
           var match$29=close_switch(arg$1,fenv,cenv,sw[4],sw[3],fail);
           
           var
            ulam$1=
             /* Uswitch */[9,
              match$27[1],
              /* record */[0,match$28[1],match$28[2],match$29[1],match$29[2]]];
           
           return /* tuple */[0,match$28[3](match$29[3](ulam$1)),0];
           };
       
       var fail=sw[5];
       
       var exit$5;
       
       if(fail)
        {var lamfail=fail[1];
         
         switch(lamfail)
          {case 9:exit$5=51;
           default:
            if(sw[1]-List["length"](sw[2])+(sw[3]-List["length"](sw[4]))>1)
             {var i=Lambda["next_raise_count"](0);
              
              var match$27=fn(/* Some */[0,/* Lstaticraise */[9,i,0]]);
              
              var match$28=close(fenv,cenv,lamfail);
              
              return /* tuple */[0,
                      /* Ucatch */[12,i,0,match$27[1],match$28[1]],
                      0];
              }
            else
             {return fn(fail);}
            }
         }
       else
        {exit$5=51;}
       
       switch(exit$5){case 51:return fn(fail);}
       
      case 8:
       var match$29=close(fenv,cenv,funct[1]);
       
       var
        usw=
         List["map"]
          (function(param)
            {var match$30=close(fenv,cenv,param[2]);
             
             return /* tuple */[0,param[1],match$30[1]];
             },
           funct[2]);
       
       var
        ud=
         Misc["may_map"]
          (function(d){var match$30=close(fenv,cenv,d);return match$30[1];},
           funct[3]);
       
       return /* tuple */[0,/* Ustringswitch */[10,match$29[1],usw,ud],0];
       
      case 9:
       return /* tuple */[0,
               /* Ustaticfail */[11,funct[1],close_list(fenv,cenv,funct[2])],
               0];
       
      case 10:
       var match$30=funct[2];
       
       var match$31=close(fenv,cenv,funct[1]);
       
       var match$32=close(fenv,cenv,funct[3]);
       
       return /* tuple */[0,
               /* Ucatch */[12,
                match$30[1],
                match$30[2],
                match$31[1],
                match$32[1]],
               0];
       
      case 11:
       var match$33=close(fenv,cenv,funct[1]);
       
       var match$34=close(fenv,cenv,funct[3]);
       
       return /* tuple */[0,
               /* Utrywith */[13,match$33[1],funct[2],match$34[1]],
               0];
       
      case 12:
       var ifnot=funct[3];
       
       var ifso=funct[2];
       
       var arg$2=funct[1];
       
       var match$35=close(fenv,cenv,arg$2);
       
       var match$36=match$35[2];
       
       var uarg=match$35[1];
       
       var exit$6;
       
       if(typeof match$36=="number")
        {switch(match$36){}}
       else
        {switch(match$36[0])
          {case 2:
            var match$37=match$36[1];
            
            switch(match$37)
             {case 0:exit$6=70;
              case 1:exit$6=70;
              case 2:
               return sequence_constant_expr
                       (arg$2,uarg,close(fenv,cenv,(match$37[1]=0)?ifnot:ifso));
               
              }
            
           default:exit$6=70;}}
       
       switch(exit$6)
        {case 70:
          var match$38=close(fenv,cenv,ifso);
          
          var match$39=close(fenv,cenv,ifnot);
          
          return /* tuple */[0,
                  /* Uifthenelse */[14,uarg,match$38[1],match$39[1]],
                  0];
          
         }
       
      case 13:
       var match$40=close(fenv,cenv,funct[1]);
       
       var match$41=close(fenv,cenv,funct[2]);
       
       return /* tuple */[0,
               /* Usequence */[15,match$40[1],match$41[1]],
               match$41[2]];
       
      case 14:
       var match$42=close(fenv,cenv,funct[1]);
       
       var match$43=close(fenv,cenv,funct[2]);
       
       return /* tuple */[0,/* Uwhile */[16,match$42[1],match$43[1]],0];
       
      case 15:
       var match$44=close(fenv,cenv,funct[2]);
       
       var match$45=close(fenv,cenv,funct[3]);
       
       var match$46=close(fenv,cenv,funct[5]);
       
       return /* tuple */[0,
               /* Ufor */[17,
                funct[1],
                match$44[1],
                match$45[1],
                funct[4],
                match$46[1]],
               0];
       
      case 16:
       var match$47=close(fenv,cenv,funct[2]);
       
       return /* tuple */[0,/* Uassign */[18,funct[1],match$47[1]],0];
       
      case 17:
       var match$48=close(fenv,cenv,funct[2]);
       
       var match$49=close(fenv,cenv,funct[3]);
       
       return /* tuple */[0,
               /* Usend */[19,
                funct[1],
                match$48[1],
                match$49[1],
                close_list(fenv,cenv,funct[4]),
                Debuginfo["none"]],
               0];
       
      case 18:
       var match$50=close(fenv,cenv,funct[1]);
       
       return /* tuple */[0,add_debug_info(funct[2],match$50[1]),match$50[2]];
       
      case 19:throw [0,Assert_failure,[0,"asmcomp/closure.ml",1022,6]];
      }
    
    switch(exit)
     {case 80:
       return close(fenv,cenv,/* Lapply */[2,funct$2,/* :: */[0,arg,0],loc]);
      }
    };

var
 close_list=
  function(fenv,cenv,param)
   {if(param)
     {var match=close(fenv,cenv,param[1]);
      
      return /* :: */[0,match[1],close_list(fenv,cenv,param[2])];
      }
    else
     {return 0;}
    };

var
 close_list_approx=
  function(fenv,cenv,param)
   {if(param)
     {var match=close(fenv,cenv,param[1]);
      
      var match$1=close_list_approx(fenv,cenv,param[2]);
      
      return /* tuple */[0,
              /* :: */[0,match[1],match$1[1]],
              /* :: */[0,match[2],match$1[2]]];
      }
    else
     {return [0,0,0];}
    };

var
 close_named=
  function(fenv,cenv,id,funct)
   {switch(funct)
     {case 3:return close_one_function(fenv,cenv,id,funct);
      default:return close(fenv,cenv,funct);}
    };

var
 close_functions=
  function(fenv,cenv,fun_defs)
   {var
     fun_defs$1=
      List["flatten"]
       (List["map"]
         (function(param)
           {var match=param[2];
            
            switch(match)
             {case 3:
               return split_default_wrapper
                       (param[1],match[1],match[2],match[3]);
               
              default:
               throw [0,Assert_failure,[0,"asmcomp/closure.ml",1052,18]];}
            },
          fun_defs));
    
    function_nesting_depth[0]++;
    var
     initially_closed=
      function_nesting_depth[1]<excessive_function_nesting_depth;
    
    var
     fv=
      Lambda["IdentSet"][20]
       (Lambda["free_variables"]
         (/* Lletrec */[5,fun_defs$1,Lambda["lambda_unit"]]));
    
    var
     uncurried_defs=
      List["map"]
       (function(param)
         {var match=param[2];
          
          var id=param[1];
          
          switch(match)
           {case 3:
             var params=match[2];
             
             var
              label=
               Compilenv["make_symbol"]
                (0,/* Some */[0,Ident["unique_name"](id)]);
             
             var arity=List["length"](params);
             
             var
              fundesc=
               /* record */[0,
                label,
                (match[1]=1)?-arity:arity,
                initially_closed,
                0,
                Clflags["float_const_prop"][1]];
             
             return /* tuple */[0,id,params,match[3],fundesc];
             
            default:return Misc["fatal_error"]("Closure.close_functions");}
          },
        fun_defs$1);
    
    var
     fenv_rec=
      List["fold_right"]
       (function(param,fenv$1)
         {return Tbl["add"](param[1],/* Value_closure */[0,param[4],0],fenv$1);
          },
        uncurried_defs,
        fenv);
    
    var env_pos=[0,-1];
    
    var
     clos_offsets=
      List["map"]
       (function(param)
         {var pos=env_pos[1]+1;
          
          env_pos[1]=env_pos[1]+1+(param[4][2]!=1?3:2),0;
          return pos;
          },
        uncurried_defs);
    
    var fv_pos=env_pos[1];
    
    var useless_env=[0,initially_closed];
    
    var
     clos_fundef=
      function(param,env_pos$1)
       {var fundesc=param[4];
        
        var body=param[3];
        
        var params=param[2];
        
        var exit;
        
        switch(body)
         {case 18:
           var ev=body[2];
           
           var match=ev[2];
           
           if("unknown primitive:isint")
            {if(match!=0){var dbg=Debuginfo["from_call"](ev);}else{exit=98;}}
           else
            {exit=98;}
           
          default:exit=98;}
        
        switch(exit){case 98:var dbg=Debuginfo["none"];}
        
        var env_param=Ident["create"]("env");
        
        var cenv_fv=build_closure_env(env_param,fv_pos-env_pos$1,fv);
        
        var
         cenv_body=
          List["fold_right2"]
           (function(param$1,pos,env)
             {return Tbl["add"]
                      (param$1[1],
                       /* Uoffset */[5,/* Uvar */[0,env_param],pos-env_pos$1],
                       env);
              },
            uncurried_defs,
            clos_offsets,
            cenv_fv);
        
        var match$1=close(fenv_rec,cenv_body,body);
        
        var ubody=match$1[1];
        
        if(useless_env[1]&&occurs_var(env_param,ubody))
         {throw NotClosed;}
        else
         {}
        
        if(useless_env[1])
         {var fun_params=params;}
        else
         {var fun_params=Pervasives["@"](params,/* :: */[0,env_param,0]);}
        
        var f=/* record */[0,fundesc[1],fundesc[2],fun_params,ubody,dbg];
        
        var
         n=
          List["fold_left"]
           (function(n$1,id)
             {return n$1+("unknown primitive:caml_string_equal"?8:1);},
            0,
            fun_params);
        
        if(lambda_smaller(ubody,Clflags["inline_threshold"][1]+n))
         {fundesc[4]=/* Some */[0,/* tuple */[0,fun_params,ubody]],0}
        else
         {}
        
        return /* tuple */[0,
                f,
                /* tuple */[0,
                 param[1],
                 env_pos$1,
                 /* Value_closure */[0,fundesc,match$1[2]]]];
        };
    
    if(initially_closed)
     {var snap=Compilenv["snapshot"](0);
      
      try
       {var
         clos_info_list=
          List["map2"](clos_fundef,uncurried_defs,clos_offsets);
        }
      catch(exn)
       {if(exn=NotClosed)
         {Compilenv["backtrack"](snap);
          List["iter"]
           (function(param)
             {var fundesc=param[4];fundesc[3]=0,0;return fundesc[4]=0,0;},
            uncurried_defs);
          useless_env[1]=0,0;
          var
           clos_info_list=
            List["map2"](clos_fundef,uncurried_defs,clos_offsets);
          }
        else
         {throw exn;}
        }
      }
    else
     {var
       clos_info_list=
        List["map2"](clos_fundef,uncurried_defs,clos_offsets);
      }
    
    function_nesting_depth[0]--;
    var match=List["split"](clos_info_list);
    
    if(useless_env[1]){var fv$1=0;}else{var fv$1=fv;}
    
    return /* tuple */[0,
            /* Uclosure */[4,match[1],List["map"](close_var(fenv,cenv),fv$1)],
            match[2]];
    };

var
 close_one_function=
  function(fenv,cenv,id,funct)
   {var
     match=
      close_functions(fenv,cenv,/* :: */[0,/* tuple */[0,id,funct],0]);
    
    var match$1=match[2];
    
    var exit;
    
    if(match$1)
     {var match$2=match$1[1];
      
      if("unknown primitive:caml_equal")
       {return /* tuple */[0,match[1],match$2[3]];}
      else
       {exit=116;}
      }
    else
     {exit=116;}
    
    switch(exit)
     {case 116:return Misc["fatal_error"]("Closure.close_one_function");}
    };

var
 close_switch=
  function(arg,fenv,cenv,cases,num_keys,$$default)
   {var ncases=List["length"](cases);
    
    var index="unknown primitive:caml_make_vect";
    
    var store=Storer[1](0);
    
    var exit;
    
    if($$default)
     {if(ncases<num_keys)
       {if(store[3]($$default[1])=0)
         {}
        else
         {throw [0,Assert_failure,[0,"asmcomp/closure.ml",1186,6]];}
        }
      else
       {exit=127;}
      }
    else
     {exit=127;}
    
    switch(exit){case 127:}
    
    List["iter"]
     (function(param){return index[param[1]]=store[3](param[2]),0;},cases);
    var acts=store[2](0);
    
    var hs=[0,function(e){return e;}];
    
    var
     actions=
      $$Array["map"]
       (function(param)
         {var exit$1;
          
          switch(param)
           {case 0:
             var lam=param[1];
             
             var exit$2;
             
             switch(lam)
              {case 9:if(lam[2]){exit$2=123;}else{var lam$1=lam;exit$1=122;}
               default:exit$2=123;}
             
             switch(exit$2)
              {case 123:
                var match=close(fenv,cenv,lam);
                
                var ulam=match[1];
                
                var i=Lambda["next_raise_count"](0);
                
                var ohs=hs[1];
                
                hs[1]=function(e){return /* Ucatch */[12,i,0,ohs(e),ulam];},0;
                return /* Ustaticfail */[11,i,0];
                
               }
             
            case 1:var lam$1=param[1];exit$1=122;
            }
          
          switch(exit$1)
           {case 122:var match$1=close(fenv,cenv,lam$1);return match$1[1];}
          },
        acts);
    
    if(actions["length"]!=0)
     {return /* tuple */[0,index,actions,hs[1]];}
    else
     {return /* tuple */[0,[],[],hs[1]];}
    };

var
 collect_exported_structured_constants=
  function(a)
   {var
     approx=
      function(param)
       {var exit;
        
        if(typeof param=="number")
         {switch(param){case 0:exit=5;}}
        else
         {switch(param[0])
           {case 0:
             approx(param[2]);
             var match=param[1][4];
             
             if(match){return ulam(match[1][2]);}else{return 0;}
             
            case 1:return $$Array["iter"](approx,param[1]);
            case 2:return $$const(param[1]);
            case 3:exit=5;
            }}
        
        switch(exit){case 5:return 0;}
        };
    
    var
     $$const=
      function(param)
       {var exit;
        
        switch(param)
         {case 0:
           Compilenv["add_exported_constant"](param[1]);
           return structured_constant(param[2]);
           
          case 1:exit=6;
          case 2:exit=6;
          }
        
        switch(exit){case 6:return 0;}
        };
    
    var
     structured_constant=
      function(param)
       {switch(param)
         {case 4:return List["iter"]($$const,param[2]);default:return 0;}
        };
    
    var
     ulam=
      function(param)
       {var exit;
        
        switch(param)
         {case 0:return 0;
          case 1:return $$const(param[1]);
          case 3:ulam(param[1]);return List["iter"](ulam,param[2]);
          case 4:
           List["iter"](function(f){return ulam(f[4]);},param[1]);
           return List["iter"](ulam,param[2]);
           
          case 5:return ulam(param[1]);
          case 6:ulam(param[2]);return ulam(param[3]);
          case 7:
           List["iter"](function(param$1){return ulam(param$1[2]);},param[1]);
           return ulam(param[2]);
           
          case 9:
           var sl=param[2];
           
           ulam(param[1]);
           $$Array["iter"](ulam,sl[2]);
           return $$Array["iter"](ulam,sl[4]);
           
          case 10:
           ulam(param[1]);
           List["iter"](function(param$1){return ulam(param$1[2]);},param[2]);
           return Misc["may"](ulam,param[3]);
           
          case 12:var u1=param[3];var u2=param[4];exit=8;
          case 13:var u1=param[1];var u2=param[3];exit=8;
          case 14:var u1$1=param[1];var u2$1=param[2];var u3=param[3];exit=9;
          case 15:exit=11;
          case 16:exit=11;
          case 17:var u1$1=param[2];var u2$1=param[3];var u3=param[5];exit=9;
          case 18:return ulam(param[2]);
          case 19:
           ulam(param[2]);ulam(param[3]);return List["iter"](ulam,param[4]);
          default:return List["iter"](ulam,param[2]);}
        
        switch(exit)
         {case 11:
           "unknown block:(exit 8 (field 0 param/2000) (field 1 param/2000))";
          case 8:ulam(u1);return ulam(u2);
          case 9:ulam(u1$1);ulam(u2$1);return ulam(u3);
          }
        };
    
    return approx(a);
    };

var
 reset=
  function(param){global_approx[1]=[],0;return function_nesting_depth[1]=0,0;};

var
 intro=
  function(size,lam)
   {reset(0);
    var id=Compilenv["make_symbol"](0,0);
    
    global_approx[1]=
    $$Array["init"]
     (size,function(i){return /* Value_global_field */[3,id,i];}),
    0;
    Compilenv["set_global_approx"](/* Value_tuple */[1,global_approx[1]]);
    var match=close(Tbl["empty"],Tbl["empty"],lam);
    
    if(Clflags["opaque"][1])
     {Compilenv["set_global_approx"](0)}
    else
     {collect_exported_structured_constants
       (/* Value_tuple */[1,global_approx[1]])}
    
    global_approx[1]=[],0;
    return match[1];
    };

module["exports"]={"intro":intro,"reset":reset};

