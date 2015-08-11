// Generated CODE, PLEASE EDIT WITH CARE 

var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var List=require("List");
var Clflags=require("Clflags");
var Printf=require("Printf");
var Cmm=require("Cmm");
var Debuginfo=require("Debuginfo");
var Compilenv=require("Compilenv");
var Switch=require("Switch");
var Obj=require("Obj");
var Queue=require("Queue");
var Set=require("Set");
var Misc=require("Misc");
var Lambda=require("Lambda");
var Proc=require("Proc");
var Strmatch=require("Strmatch");
var Arch=require("Arch");
var Primitive=require("Primitive");
var Ident=require("Ident");
var $$Array=require("Array");
var Config=require("Config");
var Sys=require("Sys");


var
 bind=
  function(name,arg,fn)
   {var exit;
    
    switch(arg)
     {case 0:exit=504;
      case 1:exit=504;
      case 3:exit=504;
      case 4:exit=504;
      case 5:exit=504;
      case 6:exit=504;
      case 7:exit=504;
      default:
       var id=Ident["create"](name);
       
       return /* Clet */[8,id,arg,fn(/* Cvar */[7,id])];
       }
    
    switch(exit){case 504:return fn(arg);}
    };

var
 bind_nonvar=
  function(name,arg,fn)
   {var exit;
    
    switch(arg)
     {case 0:exit=500;
      case 1:exit=500;
      case 3:exit=500;
      case 4:exit=500;
      case 5:exit=500;
      case 6:exit=500;
      default:
       var id=Ident["create"](name);
       
       return /* Clet */[8,id,arg,fn(/* Cvar */[7,id])];
       }
    
    switch(exit){case 500:return fn(arg);}
    };

var caml_black=3<<8;

var floatarray_tag=/* Cconst_int */[0,Obj["double_array_tag"]];

var block_header=function(tag,sz){return (sz<<10)+tag;};

var
 black_block_header=
  function(tag,sz){return block_header(tag,sz)|caml_black;};

var
 white_closure_header=
  function(sz){return block_header(Obj["closure_tag"],sz);};

var
 black_closure_header=
  function(sz){return black_block_header(Obj["closure_tag"],sz);};

var infix_header=function(ofs){return block_header(Obj["infix_tag"],ofs);};

var
 float_header=
  block_header(Obj["double_tag"],Arch["size_float"]/Arch["size_addr"]);

var
 floatarray_header=
  function(len)
   {return block_header
            (Obj["double_array_tag"],len*Arch["size_float"]/Arch["size_addr"]);
    };

var
 string_header=
  function(len)
   {return block_header
            (Obj["string_tag"],(len+Arch["size_addr"])/Arch["size_addr"]);
    };

var boxedint32_header=block_header(Obj["custom_tag"],2);

var boxedint64_header=block_header(Obj["custom_tag"],1+8/Arch["size_addr"]);

var boxedintnat_header=block_header(Obj["custom_tag"],2);

var
 alloc_block_header=
  function(tag,sz){return /* Cconst_blockheader */[6,block_header(tag,sz)];};

var alloc_float_header=/* Cconst_blockheader */[6,float_header];

var
 alloc_floatarray_header=
  function(len){return /* Cconst_blockheader */[6,floatarray_header(len)];};

var
 alloc_closure_header=
  function(sz){return /* Cconst_blockheader */[6,white_closure_header(sz)];};

var
 alloc_infix_header=
  function(ofs){return /* Cconst_blockheader */[6,infix_header(ofs)];};

var alloc_boxedint32_header=/* Cconst_blockheader */[6,boxedint32_header];

var alloc_boxedint64_header=/* Cconst_blockheader */[6,boxedint64_header];

var alloc_boxedintnat_header=/* Cconst_blockheader */[6,boxedintnat_header];

var max_repr_int=Pervasives["max_int"]>>1;

var min_repr_int=Pervasives["min_int"]>>1;

var
 int_const=
  function(n)
   {if(n<=max_repr_int&&n>=min_repr_int)
     {return /* Cconst_int */[0,(n<<1)+1];}
    else
     {return /* Cconst_natint */[1,(n<<1)+1];}
    };

var
 add_const=
  function(c,n)
   {if(n=0)
     {return c;}
    else
     {var exit;
      
      switch(c)
       {case 0:
         var x=c[1];
         
         if(Misc["no_overflow_add"](x,n))
          {return /* Cconst_int */[0,x+n];}
         else
          {exit=473;}
         
        case 11:
         var match=c[1];
         
         if("unknown primitive:isint")
          {if(match!=2)
            {exit=473;}
           else
            {var match$1=c[2];
             
             if(match$1)
              {var c$1=match$1[1];
               
               var exit$1;
               
               switch(c$1)
                {case 0:
                  var match$2=match$1[2];
                  
                  if(match$2)
                   {if(match$2[2])
                     {exit=473;}
                    else
                     {var x$1=c$1[1];
                      
                      if(Misc["no_overflow_add"](n,x$1))
                       {return /* Cop */[11,
                                2,
                                /* :: */[0,
                                 /* Cconst_int */[0,n+x$1],
                                 /* :: */[0,match$2[1],0]]];
                        }
                      else
                       {exit$1=474;}
                      }
                    }
                  else
                   {exit=473;}
                  
                 default:exit$1=474;}
               
               switch(exit$1)
                {case 474:
                  var match$3=match$1[2];
                  
                  if(match$3)
                   {var match$4=match$3[1];
                    
                    switch(match$4)
                     {case 0:
                       if(match$3[2])
                        {exit=473;}
                       else
                        {var x$2=match$4[1];
                         
                         if(Misc["no_overflow_sub"](n,x$2))
                          {return add_const(c$1,n-x$2);}
                         else
                          {exit=473;}
                         }
                       
                      default:exit=473;}
                    }
                  else
                   {exit=473;}
                  
                 }
               }
             else
              {exit=473;}
             }
           }
         else
          {exit=473;}
         
        default:exit=473;}
      
      switch(exit)
       {case 473:
         return /* Cop */[11,
                 1,
                 /* :: */[0,c,/* :: */[0,/* Cconst_int */[0,n],0]]];
         
        }
      }
    };

var
 incr_int=
  function(c)
   {var exit;
    
    switch(c)
     {case 0:
       var n=c[1];
       
       if(n<Pervasives["max_int"])
        {return /* Cconst_int */[0,n+1];}
       else
        {exit=471;}
       
      case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {exit=471;}
         else
          {var match$1=c[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=471;}
                  else
                   {var n$1=match$3[1];
                    
                    if(n$1<Pervasives["max_int"])
                     {return add_const(match$1[1],n$1+1);}
                    else
                     {exit=471;}
                    }
                  
                 default:exit=471;}
               }
             else
              {exit=471;}
             }
           else
            {exit=471;}
           }
         }
       else
        {exit=471;}
       
      default:exit=471;}
    
    switch(exit){case 471:return add_const(c,1);}
    };

var
 decr_int=
  function(c)
   {var exit;
    
    switch(c)
     {case 0:
       var n=c[1];
       
       if(n>Pervasives["min_int"])
        {return /* Cconst_int */[0,n-1];}
       else
        {exit=469;}
       
      case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {exit=469;}
         else
          {var match$1=c[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=469;}
                  else
                   {var n$1=match$3[1];
                    
                    if(n$1>Pervasives["min_int"])
                     {return add_const(match$1[1],n$1-1);}
                    else
                     {exit=469;}
                    }
                  
                 default:exit=469;}
               }
             else
              {exit=469;}
             }
           else
            {exit=469;}
           }
         }
       else
        {exit=469;}
       
      default:exit=469;}
    
    switch(exit){case 469:return add_const(c,-1);}
    };

var
 add_int=
  function(c1,c2)
   {var exit;
    
    switch(c1)
     {case 11:
       var match=c1[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {exit=466;}
         else
          {var match$1=c1[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=466;}
                  else
                   {var n1=match$3[1];
                    
                    var c1$1=match$1[1];
                    
                    var exit$1;
                    
                    switch(c2)
                     {case 11:
                       var match$4=c2[1];
                       
                       if("unknown primitive:isint")
                        {if(match$4!=1)
                          {exit$1=467;}
                         else
                          {var match$5=c2[2];
                           
                           if(match$5)
                            {var match$6=match$5[2];
                             
                             if(match$6)
                              {var match$7=match$6[1];
                               
                               switch(match$7)
                                {case 0:
                                  if(match$6[2])
                                   {exit$1=467;}
                                  else
                                   {var n2=match$7[1];
                                    
                                    if(Misc["no_overflow_add"](n1,n2))
                                     {return add_const
                                              (/* Cop */[11,1,/* :: */[0,c1$1,/* :: */[0,match$5[1],0]]],
                                               n1+n2);
                                      }
                                    else
                                     {exit$1=467;}
                                    }
                                  
                                 default:exit$1=467;}
                               }
                             else
                              {exit$1=467;}
                             }
                           else
                            {exit$1=467;}
                           }
                         }
                       else
                        {exit$1=467;}
                       
                      default:exit$1=467;}
                    
                    switch(exit$1)
                     {case 467:
                       return add_const
                               (/* Cop */[11,1,/* :: */[0,c1$1,/* :: */[0,c2,0]]],n1);
                       
                      }
                    }
                  
                 default:exit=466;}
               }
             else
              {exit=466;}
             }
           else
            {exit=466;}
           }
         }
       else
        {exit=466;}
       
      default:exit=466;}
    
    switch(exit)
     {case 466:
       switch(c2)
        {case 11:
          var match$8=c2[1];
          
          if("unknown primitive:isint")
           {if(match$8!=1)
             {"unknown block:(exit 465)";}
            else
             {var match$9=c2[2];
              
              if(match$9)
               {var match$10=match$9[2];
                
                if(match$10)
                 {var match$11=match$10[1];
                  
                  switch(match$11)
                   {case 0:
                     if(match$10[2])
                      {"unknown block:(exit 465)";}
                     else
                      {return add_const
                               (/* Cop */[11,1,/* :: */[0,c1,/* :: */[0,match$9[1],0]]],
                                match$11[1]);
                       }
                     
                    default:"unknown block:(exit 465)";}
                  }
                else
                 {"unknown block:(exit 465)";}
                }
              else
               {"unknown block:(exit 465)";}
              }
            }
          else
           {"unknown block:(exit 465)";}
          
         default:"unknown block:(exit 465)";}
       
      case 465:
       switch(c1)
        {case 0:return /* Cop */[11,1,/* :: */[0,c2,/* :: */[0,c1,0]]];
         default:return /* Cop */[11,1,/* :: */[0,c1,/* :: */[0,c2,0]]];}
       
      }
    };

var
 sub_int=
  function(c1,c2)
   {var exit;
    
    switch(c1)
     {case 11:
       var match=c1[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {exit=461;}
         else
          {var match$1=c1[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=461;}
                  else
                   {var n1=match$3[1];
                    
                    var c1$1=match$1[1];
                    
                    var exit$1;
                    
                    switch(c2)
                     {case 11:
                       var match$4=c2[1];
                       
                       if("unknown primitive:isint")
                        {if(match$4!=1)
                          {exit$1=462;}
                         else
                          {var match$5=c2[2];
                           
                           if(match$5)
                            {var match$6=match$5[2];
                             
                             if(match$6)
                              {var match$7=match$6[1];
                               
                               switch(match$7)
                                {case 0:
                                  if(match$6[2])
                                   {exit$1=462;}
                                  else
                                   {var n2=match$7[1];
                                    
                                    if(Misc["no_overflow_sub"](n1,n2))
                                     {return add_const
                                              (/* Cop */[11,2,/* :: */[0,c1$1,/* :: */[0,match$5[1],0]]],
                                               n1-n2);
                                      }
                                    else
                                     {exit$1=462;}
                                    }
                                  
                                 default:exit$1=462;}
                               }
                             else
                              {exit$1=462;}
                             }
                           else
                            {exit$1=462;}
                           }
                         }
                       else
                        {exit$1=462;}
                       
                      default:exit$1=462;}
                    
                    switch(exit$1)
                     {case 462:
                       return add_const
                               (/* Cop */[11,2,/* :: */[0,c1$1,/* :: */[0,c2,0]]],n1);
                       
                      }
                    }
                  
                 default:exit=461;}
               }
             else
              {exit=461;}
             }
           else
            {exit=461;}
           }
         }
       else
        {exit=461;}
       
      default:exit=461;}
    
    switch(exit)
     {case 461:
       switch(c2)
        {case 0:
          var n=c2[1];
          
          if(n!=Pervasives["min_int"])
           {return add_const(c1,-n);}
          else
           {"unknown block:(exit 460)";}
          
         case 11:
          var match$8=c2[1];
          
          if("unknown primitive:isint")
           {if(match$8!=1)
             {"unknown block:(exit 460)";}
            else
             {var match$9=c2[2];
              
              if(match$9)
               {var match$10=match$9[2];
                
                if(match$10)
                 {var match$11=match$10[1];
                  
                  switch(match$11)
                   {case 0:
                     if(match$10[2])
                      {"unknown block:(exit 460)";}
                     else
                      {var n2$1=match$11[1];
                       
                       if(n2$1!=Pervasives["min_int"])
                        {return add_const
                                 (/* Cop */[11,2,/* :: */[0,c1,/* :: */[0,match$9[1],0]]],
                                  -n2$1);
                         }
                       else
                        {"unknown block:(exit 460)";}
                       }
                     
                    default:"unknown block:(exit 460)";}
                  }
                else
                 {"unknown block:(exit 460)";}
                }
              else
               {"unknown block:(exit 460)";}
              }
            }
          else
           {"unknown block:(exit 460)";}
          
         default:"unknown block:(exit 460)";}
       
      case 460:return /* Cop */[11,2,/* :: */[0,c1,/* :: */[0,c2,0]]];
      }
    };

var
 mul_int=
  function(c1,c2)
   {var exit;
    
    switch(c2){case 0:if(c2[1]!=0){exit=458;}else{exit=448;}default:exit=458;}
    
    switch(exit)
     {case 458:
       switch(c1)
        {case 0:
          if(c1[1]!=0)
           {"unknown block:(exit 457)";}
          else
           {"unknown block:(exit 448)";}
          
         default:"unknown block:(exit 457)";}
       
      case 457:
       switch(c2)
        {case 0:
          if(c2[1]!=1)
           {"unknown block:(exit 456)";}
          else
           {"unknown block:(exit 449 c1/1242)";}
          
         default:"unknown block:(exit 456)";}
       
      case 456:
       switch(c1)
        {case 0:
          if(c1[1]!=1)
           {"unknown block:(exit 455)";}
          else
           {"unknown block:(exit 449 c2/1243)";}
          
         default:"unknown block:(exit 455)";}
       
      case 455:
       switch(c2)
        {case 0:
          if(c2[1]!=-1)
           {"unknown block:(exit 454)";}
          else
           {"unknown block:(exit 450 c1/1242)";}
          
         default:"unknown block:(exit 454)";}
       
      case 454:
       switch(c1)
        {case 0:
          if(c1[1]!=-1)
           {"unknown block:(exit 453)";}
          else
           {"unknown block:(exit 450 c2/1243)";}
          
         default:"unknown block:(exit 453)";}
       
      case 453:
       switch(c2)
        {case 0:"unknown block:(exit 451 c1/1242 (field 0 c2/1243))";
         default:
          switch(c1)
           {case 0:"unknown block:(exit 451 c2/1243 (field 0 c1/1242))";
            default:"unknown block:(exit 447)";}
          }
       
      case 448:return [0,0];
      case 449:return c;
      case 450:return sub_int([0,0],c$1);
      case 451:
       if(n=1<<Misc["log2"](n))
        {return /* Cop */[11,
                 10,
                 /* :: */[0,
                  c$2,
                  /* :: */[0,/* Cconst_int */[0,Misc["log2"](n)],0]]];
         }
       else
        {"unknown block:(exit 447)";}
       
      case 447:return /* Cop */[11,3,/* :: */[0,c1,/* :: */[0,c2,0]]];
      }
    };

var
 lsl_int=
  function(c1,c2)
   {var exit;
    
    switch(c1)
     {case 11:
       var match=c1[1];
       
       if("unknown primitive:isint")
        {if(match!=10)
          {exit=445;}
         else
          {var match$1=c1[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=445;}
                  else
                   {switch(c2)
                     {case 0:
                       var n2=c2[1];
                       
                       var n1=match$3[1];
                       
                       if(n1>0&&n2>0&&n1+n2<Arch["size_int"]*8)
                        {return /* Cop */[11,
                                 10,
                                 /* :: */[0,
                                  match$1[1],
                                  /* :: */[0,/* Cconst_int */[0,n1+n2],0]]];
                         }
                       else
                        {exit=445;}
                       
                      default:exit=445;}
                    }
                  
                 default:exit=445;}
               }
             else
              {exit=445;}
             }
           else
            {exit=445;}
           }
         }
       else
        {exit=445;}
       
      default:exit=445;}
    
    switch(exit)
     {case 445:return /* Cop */[11,10,/* :: */[0,c1,/* :: */[0,c2,0]]];}
    };

var
 ignore_low_bit_int=
  function(c)
   {var exit;
    
    switch(c)
     {case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {if(match!=8)
            {exit=443;}
           else
            {var match$1=c[2];
             
             if(match$1)
              {var match$2=match$1[2];
               
               if(match$2)
                {var match$3=match$2[1];
                 
                 switch(match$3)
                  {case 0:
                    if(match$3[1]!=1)
                     {exit=443;}
                    else
                     {if(match$2[2]){exit=443;}else{return match$1[1];}}
                    
                   default:exit=443;}
                 }
               else
                {exit=443;}
               }
             else
              {exit=443;}
             }
           }
         else
          {var match$4=c[2];
           
           if(match$4)
            {var c$1=match$4[1];
             
             switch(c$1)
              {case 11:
                var match$5=c$1[1];
                
                if("unknown primitive:isint")
                 {if(match$5!=10)
                   {exit=443;}
                  else
                   {var match$6=c$1[2];
                    
                    if(match$6)
                     {var match$7=match$6[2];
                      
                      if(match$7)
                       {var match$8=match$7[1];
                        
                        switch(match$8)
                         {case 0:
                           if(match$7[2])
                            {exit=443;}
                           else
                            {var match$9=match$4[2];
                             
                             if(match$9)
                              {var match$10=match$9[1];
                               
                               switch(match$10)
                                {case 0:
                                  if(match$10[1]!=1)
                                   {exit=443;}
                                  else
                                   {if(match$9[2])
                                     {exit=443;}
                                    else
                                     {if(match$8[1]>0){return c$1;}else{exit=443;}}
                                    }
                                  
                                 default:exit=443;}
                               }
                             else
                              {exit=443;}
                             }
                           
                          default:exit=443;}
                        }
                      else
                       {exit=443;}
                      }
                    else
                     {exit=443;}
                    }
                  }
                else
                 {exit=443;}
                
               default:exit=443;}
             }
           else
            {exit=443;}
           }
         }
       else
        {exit=443;}
       
      default:exit=443;}
    
    switch(exit){case 443:return c;}
    };

var
 lsr_int=
  function(c1,c2)
   {var exit;
    
    switch(c2)
     {case 0:
       var n=c2[1];
       
       if(n!=0)
        {if(n>0)
          {return /* Cop */[11,
                   11,
                   /* :: */[0,ignore_low_bit_int(c1),/* :: */[0,c2,0]]];
           }
         else
          {exit=440;}
         }
       else
        {return c1;}
       
      default:exit=440;}
    
    switch(exit)
     {case 440:return /* Cop */[11,11,/* :: */[0,c1,/* :: */[0,c2,0]]];}
    };

var
 asr_int=
  function(c1,c2)
   {var exit;
    
    switch(c2)
     {case 0:
       var n=c2[1];
       
       if(n!=0)
        {if(n>0)
          {return /* Cop */[11,
                   12,
                   /* :: */[0,ignore_low_bit_int(c1),/* :: */[0,c2,0]]];
           }
         else
          {exit=437;}
         }
       else
        {return c1;}
       
      default:exit=437;}
    
    switch(exit)
     {case 437:return /* Cop */[11,12,/* :: */[0,c1,/* :: */[0,c2,0]]];}
    };

var
 tag_int=
  function(c)
   {var exit;
    
    switch(c)
     {case 0:return int_const(c[1]);
      case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=12)
          {exit=435;}
         else
          {var match$1=c[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=435;}
                  else
                   {var n=match$3[1];
                    
                    if(n>0)
                     {return /* Cop */[11,
                              8,
                              /* :: */[0,
                               asr_int(match$1[1],/* Cconst_int */[0,n-1]),
                               [0,[0,1],0]]];
                      }
                    else
                     {exit=435;}
                    }
                  
                 default:exit=435;}
               }
             else
              {exit=435;}
             }
           else
            {exit=435;}
           }
         }
       else
        {exit=435;}
       
      default:exit=435;}
    
    switch(exit){case 435:return incr_int(lsl_int(c,[0,1]));}
    };

var
 force_tag_int=
  function(c)
   {var exit;
    
    switch(c)
     {case 0:return int_const(c[1]);
      case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=12)
          {exit=433;}
         else
          {var match$1=c[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[1];
               
               switch(match$3)
                {case 0:
                  if(match$2[2])
                   {exit=433;}
                  else
                   {var n=match$3[1];
                    
                    if(n>0)
                     {return /* Cop */[11,
                              8,
                              /* :: */[0,
                               asr_int(match$1[1],/* Cconst_int */[0,n-1]),
                               [0,[0,1],0]]];
                      }
                    else
                     {exit=433;}
                    }
                  
                 default:exit=433;}
               }
             else
              {exit=433;}
             }
           else
            {exit=433;}
           }
         }
       else
        {exit=433;}
       
      default:exit=433;}
    
    switch(exit)
     {case 433:
       return /* Cop */[11,8,/* :: */[0,lsl_int(c,[0,1]),[0,[0,1],0]]];
      }
    };

var
 untag_int=
  function(c)
   {var exit;
    
    switch(c)
     {case 0:return /* Cconst_int */[0,c[1]>>1];
      case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {if(match!=8)
            {exit=430;}
           else
            {var match$1=c[2];
             
             if(match$1)
              {var c$1=match$1[1];
               
               var exit$1;
               
               switch(c$1)
                {case 11:
                  var match$2=c$1[1];
                  
                  if("unknown primitive:isint")
                   {if(match$2!=11)
                     {if(match$2!=12)
                       {exit$1=431;}
                      else
                       {var match$3=c$1[2];
                        
                        if(match$3)
                         {var match$4=match$3[2];
                          
                          if(match$4)
                           {var match$5=match$4[1];
                            
                            switch(match$5)
                             {case 0:
                               if(match$4[2])
                                {exit$1=431;}
                               else
                                {var match$6=match$1[2];
                                 
                                 if(match$6)
                                  {var match$7=match$6[1];
                                   
                                   switch(match$7)
                                    {case 0:
                                      if(match$7[1]!=1)
                                       {exit$1=431;}
                                      else
                                       {if(match$6[2])
                                         {exit=430;}
                                        else
                                         {var n=match$5[1];
                                          
                                          if(n>0&&n<Arch["size_int"]*8)
                                           {return /* Cop */[11,
                                                    12,
                                                    /* :: */[0,match$3[1],/* :: */[0,/* Cconst_int */[0,n+1],0]]];
                                            }
                                          else
                                           {exit$1=431;}
                                          }
                                        }
                                      
                                     default:exit=430;}
                                   }
                                 else
                                  {exit=430;}
                                 }
                               
                              default:exit$1=431;}
                            }
                          else
                           {exit$1=431;}
                          }
                        else
                         {exit$1=431;}
                        }
                      }
                    else
                     {var match$8=c$1[2];
                      
                      if(match$8)
                       {var match$9=match$8[2];
                        
                        if(match$9)
                         {var match$10=match$9[1];
                          
                          switch(match$10)
                           {case 0:
                             if(match$9[2])
                              {exit$1=431;}
                             else
                              {var match$11=match$1[2];
                               
                               if(match$11)
                                {var match$12=match$11[1];
                                 
                                 switch(match$12)
                                  {case 0:
                                    if(match$12[1]!=1)
                                     {exit$1=431;}
                                    else
                                     {if(match$11[2])
                                       {exit=430;}
                                      else
                                       {var n$1=match$10[1];
                                        
                                        if(n$1>0&&n$1<Arch["size_int"]*8)
                                         {return /* Cop */[11,
                                                  11,
                                                  /* :: */[0,
                                                   match$8[1],
                                                   /* :: */[0,/* Cconst_int */[0,n$1+1],0]]];
                                          }
                                        else
                                         {exit$1=431;}
                                        }
                                      }
                                    
                                   default:exit=430;}
                                 }
                               else
                                {exit=430;}
                               }
                             
                            default:exit$1=431;}
                          }
                        else
                         {exit$1=431;}
                        }
                      else
                       {exit$1=431;}
                      }
                    }
                  else
                   {exit$1=431;}
                  
                 default:exit$1=431;}
               
               switch(exit$1)
                {case 431:
                  var match$13=match$1[2];
                  
                  if(match$13)
                   {var match$14=match$13[1];
                    
                    switch(match$14)
                     {case 0:
                       if(match$14[1]!=1)
                        {exit=430;}
                       else
                        {if(match$13[2])
                          {exit=430;}
                         else
                          {return /* Cop */[11,12,/* :: */[0,c$1,[0,[0,1],0]]];}
                         }
                       
                      default:exit=430;}
                    }
                  else
                   {exit=430;}
                  
                 }
               }
             else
              {exit=430;}
             }
           }
         else
          {var match$15=c[2];
           
           if(match$15)
            {var match$16=match$15[1];
             
             switch(match$16)
              {case 11:
                var match$17=match$16[1];
                
                if("unknown primitive:isint")
                 {if(match$17!=10)
                   {exit=430;}
                  else
                   {var match$18=match$16[2];
                    
                    if(match$18)
                     {var match$19=match$18[2];
                      
                      if(match$19)
                       {var match$20=match$19[1];
                        
                        switch(match$20)
                         {case 0:
                           if(match$20[1]!=1)
                            {exit=430;}
                           else
                            {if(match$19[2])
                              {exit=430;}
                             else
                              {var match$21=match$15[2];
                               
                               if(match$21)
                                {var match$22=match$21[1];
                                 
                                 switch(match$22)
                                  {case 0:
                                    if(match$22[1]!=1)
                                     {exit=430;}
                                    else
                                     {if(match$21[2]){exit=430;}else{return match$18[1];}}
                                    
                                   default:exit=430;}
                                 }
                               else
                                {exit=430;}
                               }
                             }
                           
                          default:exit=430;}
                        }
                      else
                       {exit=430;}
                      }
                    else
                     {exit=430;}
                    }
                  }
                else
                 {exit=430;}
                
               default:exit=430;}
             }
           else
            {exit=430;}
           }
         }
       else
        {exit=430;}
       
      default:exit=430;}
    
    switch(exit){case 430:return /* Cop */[11,12,/* :: */[0,c,[0,[0,1],0]]];}
    };

var
 ucompare=
  function(x,y)
   {return Nativeint["compare"](x+Nativeint["min_int"],y+Nativeint["min_int"]);
    };

var
 udivmod=
  function(n,d)
   {if(d<0)
     {if(ucompare(n,d)<0)
       {return /* tuple */[0,0,n];}
      else
       {return /* tuple */[0,1,n-d];}
      }
    else
     {var q=(n>>>1)/d<<1;
      
      var r=n-q*d;
      
      if(ucompare(r,d)>=0)
       {return /* tuple */[0,Nativeint["succ"](q),r-d];}
      else
       {return /* tuple */[0,q,r];}
      }
    };

var
 divimm_parameters=
  function(d)
   {if(d>0){}else{throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",232,2]];}
    
    var twopsm1=Nativeint["min_int"];
    
    var nc=Nativeint["pred"](twopsm1)-udivmod(twopsm1,d)[2];
    
    var
     loop=
      function(p,param,param$1)
       {var p$1=p+1;
        
        var q1=param[1]<<1;
        
        var r1=param[2]<<1;
        
        if(ucompare(r1,nc)>=0)
         {var match=/* tuple */[0,Nativeint["succ"](q1),r1-nc];}
        else
         {var match=/* tuple */[0,q1,r1];}
        
        var r1$1=match[2];
        
        var q1$1=match[1];
        
        var q2=param$1[1]<<1;
        
        var r2=param$1[2]<<1;
        
        if(ucompare(r2,d)>=0)
         {var match$1=/* tuple */[0,Nativeint["succ"](q2),r2-d];}
        else
         {var match$1=/* tuple */[0,q2,r2];}
        
        var r2$1=match$1[2];
        
        var q2$1=match$1[1];
        
        var delta=d-r2$1;
        
        if(ucompare(q1$1,delta)<0||(q1$1=delta)&&(r1$1=0))
         {return loop(p$1,/* tuple */[0,q1$1,r1$1],/* tuple */[0,q2$1,r2$1]);}
        else
         {return /* tuple */[0,Nativeint["succ"](q2$1),p$1-Nativeint["size"]];
          }
        };
    
    return loop(Nativeint["size"]-1,udivmod(twopsm1,nc),udivmod(twopsm1,d));
    };

var
 div_int=
  function(c1,c2,dbg)
   {var exit;
    
    switch(c2)
     {case 0:
       var match=c2[1];
       
       if(match!=0)
        {if(match!=1){exit=413;}else{return c1;}}
       else
        {return /* Csequence */[12,
                 c1,
                 /* Cop */[11,
                  /* Craise */[7,0,dbg],
                  [0,[3,"caml_exn_Division_by_zero"],0]]];
         }
       
      default:exit=413;}
    
    switch(exit)
     {case 413:
       switch(c1)
        {case 0:
          var n1=c1[1];
          
          if(n1!=0)
           {switch(c2)
             {case 0:return /* Cconst_int */[0,n1/c2[1]];
              default:"unknown block:(exit 411)";}
            }
          else
           {return /* Csequence */[12,c2,c1];}
          
         default:
          switch(c2)
           {case 0:
             var n=c2[1];
             
             if(n!=Pervasives["min_int"])
              {var l=Misc["log2"](n);
               
               if(n=1<<l)
                {return /* Cop */[11,
                         12,
                         /* :: */[0,
                          bind
                           ("dividend",
                            c1,
                            function(c1$1)
                             {var t=asr_int(c1$1,/* Cconst_int */[0,l-1]);
                              
                              var t$1=lsr_int(t,/* Cconst_int */[0,Nativeint["size"]-l]);
                              
                              return add_int(c1$1,t$1);
                              }),
                          /* :: */[0,/* Cconst_int */[0,l],0]]];
                 }
               else
                {if(n<0)
                  {return sub_int
                           ([0,0],div_int(c1,/* Cconst_int */[0,-n],dbg));
                   }
                 else
                  {var match$1=divimm_parameters(n);
                   
                   var p=match$1[2];
                   
                   var m=match$1[1];
                   
                   return bind
                           ("dividend",
                            c1,
                            function(c1$1)
                             {var
                               t=
                                /* Cop */[11,
                                 4,
                                 /* :: */[0,c1$1,/* :: */[0,/* Cconst_natint */[1,m],0]]];
                              
                              if(m<0)
                               {var t$1=/* Cop */[11,1,/* :: */[0,t,/* :: */[0,c1$1,0]]];}
                              else
                               {var t$1=t;}
                              
                              if(p>0)
                               {var
                                 t$2=
                                  /* Cop */[11,
                                   12,
                                   /* :: */[0,t$1,/* :: */[0,/* Cconst_int */[0,p],0]]];
                                }
                              else
                               {var t$2=t$1;}
                              
                              return add_int
                                      (t$2,lsr_int(c1$1,/* Cconst_int */[0,Nativeint["size"]-1]));
                              });
                   }
                 }
               }
             else
              {"unknown block:(exit 411)";}
             
            default:"unknown block:(exit 411)";}
          }
       
      case 411:
       if(Clflags["fast"][1])
        {return /* Cop */[11,5,/* :: */[0,c1,/* :: */[0,c2,0]]];}
       else
        {return bind
                 ("divisor",
                  c2,
                  function(c2$1)
                   {return /* Cifthenelse */[13,
                            c2$1,
                            /* Cop */[11,5,/* :: */[0,c1,/* :: */[0,c2$1,0]]],
                            /* Cop */[11,
                             /* Craise */[7,0,dbg],
                             [0,[3,"caml_exn_Division_by_zero"],0]]];
                    });
         }
       
      }
    };

var
 mod_int=
  function(c1,c2,dbg)
   {var exit;
    
    switch(c2)
     {case 0:
       var switcher=1+c2[1];
       
       if(!(2<switcher>>>0))
        {if(switcher!=1)
          {return /* Csequence */[12,c1,[0,0]];}
         else
          {return /* Csequence */[12,
                   c1,
                   /* Cop */[11,
                    /* Craise */[7,0,dbg],
                    [0,[3,"caml_exn_Division_by_zero"],0]]];
           }
         }
       else
        {exit=399;}
       
      default:exit=399;}
    
    switch(exit)
     {case 399:
       switch(c1)
        {case 0:
          var n1=c1[1];
          
          if(n1!=0)
           {switch(c2)
             {case 0:return /* Cconst_int */[0,n1%c2[1]];
              default:"unknown block:(exit 397)";}
            }
          else
           {return /* Csequence */[12,c2,[0,0]];}
          
         default:
          switch(c2)
           {case 0:
             var n=c2[1];
             
             if(n!=Pervasives["min_int"])
              {var l=Misc["log2"](n);
               
               if(n=1<<l)
                {return bind
                         ("dividend",
                          c1,
                          function(c1$1)
                           {var t=asr_int(c1$1,/* Cconst_int */[0,l-1]);
                            
                            var t$1=lsr_int(t,/* Cconst_int */[0,Nativeint["size"]-l]);
                            
                            var t$2=add_int(c1$1,t$1);
                            
                            var
                             t$3=
                              /* Cop */[11,
                               7,
                               /* :: */[0,t$2,/* :: */[0,/* Cconst_int */[0,-n],0]]];
                            
                            return sub_int(c1$1,t$3);
                            });
                 }
               else
                {return bind
                         ("dividend",
                          c1,
                          function(c1$1)
                           {return sub_int(c1$1,mul_int(div_int(c1$1,c2,dbg),c2));});
                 }
               }
             else
              {"unknown block:(exit 397)";}
             
            default:"unknown block:(exit 397)";}
          }
       
      case 397:
       if(Clflags["fast"][1])
        {return /* Cop */[11,6,/* :: */[0,c1,/* :: */[0,c2,0]]];}
       else
        {return bind
                 ("divisor",
                  c2,
                  function(c2$1)
                   {return /* Cifthenelse */[13,
                            c2$1,
                            /* Cop */[11,6,/* :: */[0,c1,/* :: */[0,c2$1,0]]],
                            /* Cop */[11,
                             /* Craise */[7,0,dbg],
                             [0,[3,"caml_exn_Division_by_zero"],0]]];
                    });
         }
       
      }
    };

var
 is_different_from=
  function(x,param)
   {switch(param)
     {case 0:return param[1]!=x;case 1:return param[1]!=x;default:return 0;}
    };

var
 safe_divmod_bi=
  function(mkop,mkm1,c1,c2,bi,dbg)
   {return bind
            ("dividend",
             c1,
             function(c1$1)
              {return bind
                       ("divisor",
                        c2,
                        function(c2$1)
                         {var c=mkop(c1$1,c2$1,dbg);
                          
                          if
                           (Arch["division_crashes_on_overflow"]&&
                            ((Arch["size_int"]=4)||bi!=1)&&
                            !is_different_from(-1,c2$1))
                           {return /* Cifthenelse */[13,
                                    /* Cop */[11,[4,1],/* :: */[0,c2$1,[0,[0,-1],0]]],
                                    c,
                                    mkm1(c1$1)];
                            }
                          else
                           {return c;}
                          });
               });
    };

var
 safe_div_bi=
  safe_divmod_bi
   (div_int,
    function(c1){return /* Cop */[11,2,/* :: */[0,[0,0],/* :: */[0,c1,0]]];});

var safe_mod_bi=safe_divmod_bi(mod_int,function(c1){return [0,0];});

var
 test_bool=
  function(c)
   {var exit;
    
    switch(c)
     {case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {if(match!=10)
            {exit=383;}
           else
            {var match$1=c[2];
             
             if(match$1)
              {var match$2=match$1[2];
               
               if(match$2)
                {var match$3=match$2[1];
                 
                 switch(match$3)
                  {case 0:
                    if(match$3[1]!=1)
                     {exit=383;}
                    else
                     {if(match$2[2]){exit=383;}else{return match$1[1];}}
                    
                   default:exit=383;}
                 }
               else
                {exit=383;}
               }
             else
              {exit=383;}
             }
           }
         else
          {var match$4=c[2];
           
           if(match$4)
            {var match$5=match$4[1];
             
             switch(match$5)
              {case 11:
                var match$6=match$5[1];
                
                if("unknown primitive:isint")
                 {if(match$6!=10)
                   {exit=383;}
                  else
                   {var match$7=match$5[2];
                    
                    if(match$7)
                     {var match$8=match$7[2];
                      
                      if(match$8)
                       {var match$9=match$8[1];
                        
                        switch(match$9)
                         {case 0:
                           if(match$9[1]!=1)
                            {exit=383;}
                           else
                            {if(match$8[2])
                              {exit=383;}
                             else
                              {var match$10=match$4[2];
                               
                               if(match$10)
                                {var match$11=match$10[1];
                                 
                                 switch(match$11)
                                  {case 0:
                                    if(match$11[1]!=1)
                                     {exit=383;}
                                    else
                                     {if(match$10[2]){exit=383;}else{return match$7[1];}}
                                    
                                   default:exit=383;}
                                 }
                               else
                                {exit=383;}
                               }
                             }
                           
                          default:exit=383;}
                        }
                      else
                       {exit=383;}
                      }
                    else
                     {exit=383;}
                    }
                  }
                else
                 {exit=383;}
                
               default:exit=383;}
             }
           else
            {exit=383;}
           }
         }
       else
        {exit=383;}
       
      default:exit=383;}
    
    switch(exit)
     {case 383:return /* Cop */[11,[4,1],/* :: */[0,c,[0,[0,1],0]]];}
    };

var
 box_float=
  function(c)
   {return /* Cop */[11,0,/* :: */[0,alloc_float_header,/* :: */[0,c,0]]];};

var
 unbox_float=
  function(c)
   {var exit;
    
    switch(c)
     {case 8:return /* Clet */[8,c[1],c[2],unbox_float(c[3])];
      case 11:
       var match=c[1];
       
       if("unknown primitive:isint")
        {if(match!=0)
          {exit=381;}
         else
          {var match$1=c[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {if(match$2[2]){exit=381;}else{return match$2[1];}}
             else
              {exit=381;}
             }
           else
            {exit=381;}
           }
         }
       else
        {exit=381;}
       
      case 12:return /* Csequence */[12,c[1],unbox_float(c[2])];
      case 13:
       return /* Cifthenelse */[13,c[1],unbox_float(c[2]),unbox_float(c[3])];
      case 14:
       return /* Cswitch */[14,c[1],c[2],$$Array["map"](unbox_float,c[3])];
      case 16:
       return /* Ccatch */[16,c[1],c[2],unbox_float(c[3]),unbox_float(c[4])];
      case 18:
       return /* Ctrywith */[18,unbox_float(c[1]),c[2],unbox_float(c[3])];
      default:exit=381;}
    
    switch(exit){case 381:return /* Cop */[11,[2,9],/* :: */[0,c,0]];}
    };

var
 box_complex=
  function(c_re,c_im)
   {return /* Cop */[11,
            0,
            /* :: */[0,
             alloc_floatarray_header(2),
             /* :: */[0,c_re,/* :: */[0,c_im,0]]]];
    };

var complex_re=function(c){return /* Cop */[11,[2,9],/* :: */[0,c,0]];};

var
 complex_im=
  function(c)
   {return /* Cop */[11,
            [2,9],
            /* :: */[0,
             /* Cop */[11,
              13,
              /* :: */[0,
               c,
               /* :: */[0,/* Cconst_int */[0,Arch["size_float"]],0]]],
             0]];
    };

var return_unit=function(c){return /* Csequence */[12,c,[4,1]];};

var
 remove_unit=
  function(c)
   {var exit;
    
    switch(c)
     {case 4:if(c[1]!=1){exit=375;}else{return [10,0];}
      case 8:return /* Clet */[8,c[1],c[2],remove_unit(c[3])];
      case 10:if(c[1]){exit=375;}else{return c;}
      case 11:
       var match=c[1];
       
       if(typeof match=="number")
        {switch(match){}}
       else
        {switch(match[0])
          {case 0:
            return /* Cop */[11,/* Capply */[0,Cmm["typ_void"],match[2]],c[2]];
            
           case 1:
            return /* Cop */[11,
                    /* Cextcall */[1,match[1],Cmm["typ_void"],match[3],match[4]],
                    c[2]];
            
           default:exit=375;}}
       
      case 12:
       var c2=c[2];
       
       var c$1=c[1];
       
       var exit$1;
       
       switch(c2)
        {case 4:if(c2[1]!=1){exit$1=376;}else{return c$1;}default:exit$1=376;}
       
       switch(exit$1)
        {case 376:return /* Csequence */[12,c$1,remove_unit(c2)];}
       
      case 13:
       return /* Cifthenelse */[13,c[1],remove_unit(c[2]),remove_unit(c[3])];
      case 14:
       return /* Cswitch */[14,c[1],c[2],$$Array["map"](remove_unit,c[3])];
      case 16:
       return /* Ccatch */[16,c[1],c[2],remove_unit(c[3]),remove_unit(c[4])];
      case 17:return c;
      case 18:
       return /* Ctrywith */[18,remove_unit(c[1]),c[2],remove_unit(c[3])];
      default:exit=375;}
    
    switch(exit){case 375:return /* Csequence */[12,c,[10,0]];}
    };

var
 field_address=
  function(ptr,n)
   {if(n=0)
     {return ptr;}
    else
     {return /* Cop */[11,
              13,
              /* :: */[0,
               ptr,
               /* :: */[0,/* Cconst_int */[0,n*Arch["size_addr"]],0]]];
      }
    };

var
 get_field=
  function(ptr,n)
   {return /* Cop */[11,[2,6],/* :: */[0,field_address(ptr,n),0]];};

var
 set_field=
  function(ptr,n,newval)
   {return /* Cop */[11,
            [3,6],
            /* :: */[0,field_address(ptr,n),/* :: */[0,newval,0]]];
    };

var
 header=
  function(ptr)
   {return /* Cop */[11,
            [2,6],
            /* :: */[0,
             /* Cop */[11,
              13,
              /* :: */[0,
               ptr,
               /* :: */[0,/* Cconst_int */[0,-Arch["size_int"]],0]]],
             0]];
    };

if(Arch["big_endian"])
 {var tag_offset=-1;}
else
 {var tag_offset=-Arch["size_int"];}

var
 get_tag=
  function(ptr)
   {if(Proc["word_addressed"])
     {return /* Cop */[11,7,/* :: */[0,header(ptr),[0,[0,255],0]]];}
    else
     {return /* Cop */[11,
              [2,0],
              /* :: */[0,
               /* Cop */[11,
                13,
                /* :: */[0,ptr,/* :: */[0,/* Cconst_int */[0,tag_offset],0]]],
               0]];
      }
    };

var
 get_size=
  function(ptr){return /* Cop */[11,11,/* :: */[0,header(ptr),[0,[0,10],0]]];};

var log2_size_addr=Misc["log2"](Arch["size_addr"]);

var log2_size_float=Misc["log2"](Arch["size_float"]);

var wordsize_shift=9;

var numfloat_shift=9+log2_size_float-log2_size_addr;

var
 is_addr_array_hdr=
  function(hdr)
   {return /* Cop */[11,
            [4,1],
            /* :: */[0,
             /* Cop */[11,7,/* :: */[0,hdr,[0,[0,255],0]]],
             /* :: */[0,floatarray_tag,0]]];
    };

var
 is_addr_array_ptr=
  function(ptr)
   {return /* Cop */[11,
            [4,1],
            /* :: */[0,get_tag(ptr),/* :: */[0,floatarray_tag,0]]];
    };

var
 addr_array_length=
  function(hdr)
   {return /* Cop */[11,
            11,
            /* :: */[0,hdr,/* :: */[0,/* Cconst_int */[0,wordsize_shift],0]]];
    };

var
 float_array_length=
  function(hdr)
   {return /* Cop */[11,
            11,
            /* :: */[0,hdr,/* :: */[0,/* Cconst_int */[0,numfloat_shift],0]]];
    };

var
 lsl_const=
  function(c,n)
   {return /* Cop */[11,10,/* :: */[0,c,/* :: */[0,/* Cconst_int */[0,n],0]]];
    };

var
 array_indexing=
  function(log2size,ptr,ofs)
   {var exit;
    
    switch(ofs)
     {case 0:
       var i=ofs[1]>>1;
       
       if(i=0)
        {return ptr;}
       else
        {return /* Cop */[11,
                 13,
                 /* :: */[0,ptr,/* :: */[0,/* Cconst_int */[0,i<<log2size],0]]];
         }
       
      case 11:
       var match=ofs[1];
       
       if("unknown primitive:isint")
        {if(match!=1)
          {exit=356;}
         else
          {var match$1=ofs[2];
           
           if(match$1)
            {var c=match$1[1];
             
             var exit$1;
             
             switch(c)
              {case 11:
                var match$2=c[1];
                
                if("unknown primitive:isint")
                 {if(match$2!=10)
                   {exit$1=357;}
                  else
                   {var match$3=c[2];
                    
                    if(match$3)
                     {var match$4=match$3[2];
                      
                      if(match$4)
                       {var match$5=match$4[1];
                        
                        switch(match$5)
                         {case 0:
                           if(match$5[1]!=1)
                            {exit$1=357;}
                           else
                            {if(match$4[2])
                              {exit$1=357;}
                             else
                              {var match$6=match$1[2];
                               
                               if(match$6)
                                {var match$7=match$6[1];
                                 
                                 switch(match$7)
                                  {case 0:
                                    if(match$7[1]!=1)
                                     {exit$1=357;}
                                    else
                                     {if(match$6[2])
                                       {exit=356;}
                                      else
                                       {return /* Cop */[11,
                                                13,
                                                /* :: */[0,ptr,/* :: */[0,lsl_const(match$3[1],log2size),0]]];
                                        }
                                      }
                                    
                                   default:exit=356;}
                                 }
                               else
                                {exit=356;}
                               }
                             }
                           
                          default:exit$1=357;}
                        }
                      else
                       {exit$1=357;}
                      }
                    else
                     {exit$1=357;}
                    }
                  }
                else
                 {exit$1=357;}
                
               default:exit$1=357;}
             
             switch(exit$1)
              {case 357:
                var match$8=match$1[2];
                
                if(match$8)
                 {var match$9=match$8[1];
                  
                  switch(match$9)
                   {case 0:
                     if(match$8[2])
                      {exit=356;}
                     else
                      {return /* Cop */[11,
                               13,
                               /* :: */[0,
                                /* Cop */[11,
                                 13,
                                 /* :: */[0,ptr,/* :: */[0,lsl_const(c,log2size-1),0]]],
                                /* :: */[0,/* Cconst_int */[0,match$9[1]-1<<log2size-1],0]]];
                       }
                     
                    default:exit=356;}
                  }
                else
                 {exit=356;}
                
               }
             }
           else
            {exit=356;}
           }
         }
       else
        {exit=356;}
       
      default:exit=356;}
    
    switch(exit)
     {case 356:
       return /* Cop */[11,
               13,
               /* :: */[0,
                /* Cop */[11,
                 13,
                 /* :: */[0,ptr,/* :: */[0,lsl_const(ofs,log2size-1),0]]],
                /* :: */[0,/* Cconst_int */[0,-1<<log2size-1],0]]];
       
      }
    };

var
 addr_array_ref=
  function(arr,ofs)
   {return /* Cop */[11,
            [2,6],
            /* :: */[0,array_indexing(log2_size_addr,arr,ofs),0]];
    };

var
 unboxed_float_array_ref=
  function(arr,ofs)
   {return /* Cop */[11,
            [2,9],
            /* :: */[0,array_indexing(log2_size_float,arr,ofs),0]];
    };

var
 float_array_ref=
  function(arr,ofs){return box_float(unboxed_float_array_ref(arr,ofs));};

var
 addr_array_set=
  function(arr,ofs,newval)
   {return /* Cop */[11,
            /* Cextcall */[1,
             "caml_modify",
             Cmm["typ_void"],
             0,
             Debuginfo["none"]],
            /* :: */[0,
             array_indexing(log2_size_addr,arr,ofs),
             /* :: */[0,newval,0]]];
    };

var
 int_array_set=
  function(arr,ofs,newval)
   {return /* Cop */[11,
            [3,6],
            /* :: */[0,
             array_indexing(log2_size_addr,arr,ofs),
             /* :: */[0,newval,0]]];
    };

var
 float_array_set=
  function(arr,ofs,newval)
   {return /* Cop */[11,
            [3,9],
            /* :: */[0,
             array_indexing(log2_size_float,arr,ofs),
             /* :: */[0,newval,0]]];
    };

var
 string_length=
  function(exp)
   {return bind
            ("str",
             exp,
             function(str)
              {var tmp_var=Ident["create"]("tmp");
               
               return /* Clet */[8,
                       tmp_var,
                       /* Cop */[11,
                        2,
                        /* :: */[0,
                         /* Cop */[11,
                          10,
                          /* :: */[0,
                           get_size(str),
                           /* :: */[0,/* Cconst_int */[0,log2_size_addr],0]]],
                         [0,[0,1],0]]],
                       /* Cop */[11,
                        2,
                        /* :: */[0,
                         /* Cvar */[7,tmp_var],
                         /* :: */[0,
                          /* Cop */[11,
                           [2,0],
                           /* :: */[0,
                            /* Cop */[11,
                             13,
                             /* :: */[0,str,/* :: */[0,/* Cvar */[7,tmp_var],0]]],
                            0]],
                          0]]]];
               });
    };

var
 lookup_tag=
  function(obj,tag)
   {return bind
            ("tag",
             tag,
             function(tag$1)
              {return /* Cop */[11,
                       /* Cextcall */[1,
                        "caml_get_public_method",
                        Cmm["typ_addr"],
                        0,
                        Debuginfo["none"]],
                       /* :: */[0,obj,/* :: */[0,tag$1,0]]];
               });
    };

var
 lookup_label=
  function(obj,lab)
   {return bind
            ("lab",
             lab,
             function(lab$1)
              {var table=/* Cop */[11,[2,6],/* :: */[0,obj,0]];
               
               return addr_array_ref(table,lab$1);
               });
    };

var
 call_cached_method=
  function(obj,tag,cache,pos,args,dbg)
   {var arity=List["length"](args);
    
    var cache$1=array_indexing(log2_size_addr,cache,pos);
    
    Compilenv["need_send_fun"](arity);
    return /* Cop */[11,
            /* Capply */[0,Cmm["typ_addr"],dbg],
            /* :: */[0,
             /* Cconst_symbol */[3,
              Pervasives["^"]("caml_send",Pervasives["string_of_int"](arity))],
             /* :: */[0,obj,/* :: */[0,tag,/* :: */[0,cache$1,args]]]]];
    };

var
 make_alloc_generic=
  function(set_fn,tag,wordsize,args)
   {if(wordsize<=Config["max_young_wosize"])
     {return /* Cop */[11,
              0,
              /* :: */[0,
               /* Cconst_blockheader */[6,block_header(tag,wordsize)],
               args]];
      }
    else
     {var id=Ident["create"]("alloc");
      
      var
       fill_fields=
        function(idx,param)
         {if(param)
           {return /* Csequence */[12,
                    set_fn(/* Cvar */[7,id],/* Cconst_int */[0,idx],param[1]),
                    fill_fields(idx+2,param[2])];
            }
          else
           {return /* Cvar */[7,id];}
          };
      
      return /* Clet */[8,
              id,
              /* Cop */[11,
               /* Cextcall */[1,
                "caml_alloc",
                Cmm["typ_addr"],
                1,
                Debuginfo["none"]],
               /* :: */[0,
                /* Cconst_int */[0,wordsize],
                /* :: */[0,/* Cconst_int */[0,tag],0]]],
              fill_fields(1,args)];
      }
    };

var
 make_alloc=
  function(tag,args)
   {return make_alloc_generic(addr_array_set,tag,List["length"](args),args);};

var
 make_float_alloc=
  function(tag,args)
   {return make_alloc_generic
            (float_array_set,
             tag,
             List["length"](args)*Arch["size_float"]/Arch["size_addr"],
             args);
    };

var
 make_checkbound=
  function(dbg,args)
   {var exit;
    
    if(args)
     {var match=args[1];
      
      switch(match)
       {case 11:
         var match$1=match[1];
         
         if("unknown primitive:isint")
          {if(match$1!=11)
            {exit=335;}
           else
            {var match$2=match[2];
             
             if(match$2)
              {var match$3=match$2[2];
               
               if(match$3)
                {var match$4=match$3[1];
                 
                 switch(match$4)
                  {case 0:
                    if(match$3[2])
                     {exit=335;}
                    else
                     {var match$5=args[2];
                      
                      if(match$5)
                       {var match$6=match$5[1];
                        
                        switch(match$6)
                         {case 0:
                           if(match$5[2])
                            {exit=335;}
                           else
                            {var m=match$6[1];
                             
                             var n=match$4[1];
                             
                             if(m<<n>n)
                              {return /* Cop */[11,
                                       /* Ccheckbound */[8,dbg],
                                       /* :: */[0,
                                        match$2[1],
                                        /* :: */[0,/* Cconst_int */[0,(m<<n)+(1<<n)-1],0]]];
                               }
                             else
                              {exit=335;}
                             }
                           
                          default:exit=335;}
                        }
                      else
                       {exit=335;}
                      }
                    
                   default:exit=335;}
                 }
               else
                {exit=335;}
               }
             else
              {exit=335;}
             }
           }
         else
          {exit=335;}
         
        default:exit=335;}
      }
    else
     {exit=335;}
    
    switch(exit){case 335:return /* Cop */[11,/* Ccheckbound */[8,dbg],args];}
    };

var
 fundecls_size=
  function(fundecls)
   {var sz=[0,-1];
    
    List["iter"](function(f){return sz[1]=sz[1]+1+((f[2]=1)?2:3),0;},fundecls);
    return sz[1];
    };

var
 expr_size=
  function(env,param)
   {var exit;
    
    switch(param)
     {case 0:
       try
        {return Ident["find_same"](param[1],env);}
       catch(exn){if(exn=Not_found){return 0;}else{throw exn;}}
       
      case 4:
       return /* RHS_block */[0,
               fundecls_size(param[1])+List["length"](param[2])];
       
      case 6:
       return expr_size
               (Ident["add"](param[1],expr_size(env,param[2]),env),param[3]);
       
      case 7:exit=332;
      case 8:
       var match=param[1];
       
       if(typeof match=="number")
        {switch(match){}}
       else
        {switch(match[0])
          {case 5:return /* RHS_block */[0,List["length"](param[2])];
           case 10:
            if(match[1]!=0)
             {return /* RHS_floatblock */[1,match[2]];}
            else
             {return /* RHS_block */[0,match[2]];}
            
           case 17:
            var match$1=match[1];
            
            if(match$1!=0)
             {if(match$1>=3)
               {return /* RHS_floatblock */[1,List["length"](param[2])];}
              else
               {return /* RHS_block */[0,List["length"](param[2])];}
              }
            else
             {exit=330;}
            
           default:exit=330;}}
       
      case 15:exit=332;
      default:exit=330;}
    
    switch(exit){case 332:return expr_size(env,param[2]);case 330:return 0;}
    };

var
 apply_function=
  function(n)
   {Compilenv["need_apply_fun"](n);
    return Pervasives["^"]("caml_apply",Pervasives["string_of_int"](n));
    };

var
 curry_function=
  function(n)
   {Compilenv["need_curry_fun"](n);
    if(n>=0)
     {return Pervasives["^"]("caml_curry",Pervasives["string_of_int"](n));}
    else
     {return Pervasives["^"]("caml_tuplify",Pervasives["string_of_int"](-n));}
    };

var
 transl_comparison=
  function(param)
   {switch(param[0])
     {case 0:return 0;
      case 1:return 1;
      case 2:return 2;
      case 3:return 4;
      case 4:return 3;
      case 5:return 5;
      }
    };

var
 transl_constant=
  function(param)
   {switch(param)
     {case 0:return /* Cconst_symbol */[3,param[1]];
      case 1:return int_const(param[1]);
      case 2:
       var n=param[1];
       
       if(n<=max_repr_int&&n>=min_repr_int)
        {return /* Cconst_pointer */[4,(n<<1)+1];}
       else
        {return /* Cconst_natpointer */[5,(n<<1)+1];}
       
      }
    };

var
 transl_structured_constant=
  function(cst)
   {var label=Compilenv["new_structured_constant"](cst,1);
    
    return /* Cconst_symbol */[3,label];
    };

var constant_closures=[0,0];

var
 box_int_constant=
  function(bi,n)
   {switch(bi[0])
     {case 0:return /* Uconst_nativeint */[3,n];
      case 1:
       return /* Uconst_int32 */[1,"unknown primitive:int32_of_nativeint"];
      case 2:
       return /* Uconst_int64 */[2,"unknown primitive:int64_of_nativeint"];
      }
    };

var
 operations_boxed_int=
  function(bi)
   {switch(bi[0])
     {case 0:return "caml_nativeint_ops";
      case 1:return "caml_int32_ops";
      case 2:return "caml_int64_ops";
      }
    };

var
 alloc_header_boxed_int=
  function(bi)
   {switch(bi[0])
     {case 0:return alloc_boxedintnat_header;
      case 1:return alloc_boxedint32_header;
      case 2:return alloc_boxedint64_header;
      }
    };

var
 box_int=
  function(bi,arg)
   {switch(arg)
     {case 0:return transl_structured_constant(box_int_constant(bi,arg[1]));
      case 1:return transl_structured_constant(box_int_constant(bi,arg[1]));
      default:
       if((bi=1)&&(Arch["size_int"]=8)&&Arch["big_endian"])
        {var arg$prime=/* Cop */[11,10,/* :: */[0,arg,[0,[0,32],0]]];}
       else
        {var arg$prime=arg;}
       
       return /* Cop */[11,
               0,
               /* :: */[0,
                alloc_header_boxed_int(bi),
                /* :: */[0,
                 /* Cconst_symbol */[3,operations_boxed_int(bi)],
                 /* :: */[0,arg$prime,0]]]];
       }
    };

var
 unbox_int=
  function(bi,arg)
   {var exit;
    
    switch(arg)
     {case 8:return /* Clet */[8,arg[1],arg[2],unbox_int(bi,arg[3])];
      case 11:
       var match=arg[1];
       
       if("unknown primitive:isint")
        {if(match!=0)
          {exit=314;}
         else
          {var match$1=arg[2];
           
           if(match$1)
            {var match$2=match$1[2];
             
             if(match$2)
              {var match$3=match$2[2];
               
               if(match$3)
                {var contents=match$3[1];
                 
                 var exit$1;
                 
                 switch(contents)
                  {case 11:
                    var match$4=contents[1];
                    
                    if("unknown primitive:isint")
                     {if(match$4!=10)
                       {exit$1=315;}
                      else
                       {var match$5=contents[2];
                        
                        if(match$5)
                         {var match$6=match$5[2];
                          
                          if(match$6)
                           {var match$7=match$6[1];
                            
                            switch(match$7)
                             {case 0:
                               if(match$7[1]!=32)
                                {exit$1=315;}
                               else
                                {if(match$6[2])
                                  {exit$1=315;}
                                 else
                                  {if(match$3[2])
                                    {exit=314;}
                                   else
                                    {if((bi=1)&&(Arch["size_int"]=8)&&Arch["big_endian"])
                                      {return /* Cop */[11,
                                               12,
                                               /* :: */[0,
                                                /* Cop */[11,10,/* :: */[0,match$5[1],[0,[0,32],0]]],
                                                [0,[0,32],0]]];
                                       }
                                     else
                                      {exit$1=315;}
                                     }
                                   }
                                 }
                               
                              default:exit$1=315;}
                            }
                          else
                           {exit$1=315;}
                          }
                        else
                         {exit$1=315;}
                        }
                      }
                    else
                     {exit$1=315;}
                    
                   default:exit$1=315;}
                 
                 switch(exit$1)
                  {case 315:
                    if(match$3[2])
                     {exit=314;}
                    else
                     {if((bi=1)&&(Arch["size_int"]=8)&&!Arch["big_endian"])
                       {return /* Cop */[11,
                                12,
                                /* :: */[0,
                                 /* Cop */[11,10,/* :: */[0,contents,[0,[0,32],0]]],
                                 [0,[0,32],0]]];
                        }
                      else
                       {return contents;}
                      }
                    
                   }
                 }
               else
                {exit=314;}
               }
             else
              {exit=314;}
             }
           else
            {exit=314;}
           }
         }
       else
        {exit=314;}
       
      case 12:return /* Csequence */[12,arg[1],unbox_int(bi,arg[2])];
      case 13:
       return /* Cifthenelse */[13,
               arg[1],
               unbox_int(bi,arg[2]),
               unbox_int(bi,arg[3])];
       
      case 14:
       return /* Cswitch */[14,
               arg[1],
               arg[2],
               $$Array["map"](unbox_int(bi),arg[3])];
       
      case 16:
       return /* Ccatch */[16,
               arg[1],
               arg[2],
               unbox_int(bi,arg[3]),
               unbox_int(bi,arg[4])];
       
      case 18:
       return /* Ctrywith */[18,
               unbox_int(bi,arg[1]),
               arg[2],
               unbox_int(bi,arg[3])];
       
      default:exit=314;}
    
    switch(exit)
     {case 314:
       return /* Cop */[11,
               /* Cload */[2,(bi=1)?5:6],
               /* :: */[0,
                /* Cop */[11,
                 13,
                 /* :: */[0,
                  arg,
                  /* :: */[0,/* Cconst_int */[0,Arch["size_addr"]],0]]],
                0]];
       
      }
    };

var
 make_unsigned_int=
  function(bi,arg)
   {if((bi=1)&&(Arch["size_int"]=8))
     {return /* Cop */[11,7,/* :: */[0,arg,[0,[1,4294967295],0]]];}
    else
     {return arg;}
    };

var
 bigarray_elt_size=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",760,25]];
      case 1:exit=307;
      case 2:exit=308;
      case 3:exit=309;
      case 4:exit=309;
      case 5:exit=310;
      case 6:exit=310;
      case 7:exit=307;
      case 8:exit=308;
      case 9:exit=311;
      case 10:exit=311;
      case 11:exit=308;
      case 12:return 16;
      }
    
    switch(exit)
     {case 307:return 4;
      case 308:return 8;
      case 309:return 1;
      case 310:return 2;
      case 311:return Arch["size_int"];
      }
    };

var
 bigarray_indexing=
  function(unsafe,elt_kind,layout,b,args,dbg)
   {var
     check_bound=
      function(a1,a2,k)
       {if(unsafe)
         {return k;}
        else
         {return /* Csequence */[12,
                  make_checkbound(dbg,/* :: */[0,a1,/* :: */[0,a2,0]]),
                  k];
          }
        };
    
    var
     ba_indexing=
      function(dim_ofs,delta_ofs,param)
       {if(param)
         {var argl=param[2];
          
          var arg=param[1];
          
          if(argl)
           {var rem=ba_indexing(dim_ofs+delta_ofs,delta_ofs,argl);
            
            return bind
                    ("idx",
                     untag_int(arg),
                     function(idx)
                      {return bind
                               ("bound",
                                /* Cop */[11,[2,6],/* :: */[0,field_address(b,dim_ofs),0]],
                                function(bound)
                                 {return check_bound
                                          (bound,idx,add_int(mul_int(rem,bound),idx));
                                  });
                       });
            }
          else
           {return bind
                    ("idx",
                     untag_int(arg),
                     function(idx)
                      {return check_bound
                               (/* Cop */[11,[2,6],/* :: */[0,field_address(b,dim_ofs),0]],
                                idx,
                                idx);
                       });
            }
          }
        else
         {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",778,10]];}
        };
    
    switch(layout[0])
     {case 0:throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",793,8]];
      case 1:
       var offset=ba_indexing(4+List["length"](args),-1,List["rev"](args));
      case 2:
       var
        offset=
         ba_indexing
          (5,1,List["map"](function(idx){return sub_int(idx,[0,2]);},args));
       
      }
    
    var elt_size=bigarray_elt_size(elt_kind);
    
    if(elt_size=1)
     {var byte_offset=offset;}
    else
     {var
       byte_offset=
        /* Cop */[11,
         10,
         /* :: */[0,
          offset,
          /* :: */[0,/* Cconst_int */[0,Misc["log2"](elt_size)],0]]];
      }
    
    return /* Cop */[11,
            13,
            /* :: */[0,
             /* Cop */[11,[2,6],/* :: */[0,field_address(b,1),0]],
             /* :: */[0,byte_offset,0]]];
    };

var
 bigarray_word_kind=
  function(param)
   {var exit;
    
    switch(param[0])
     {case 0:throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",807,25]];
      case 1:exit=296;
      case 2:exit=297;
      case 3:return 1;
      case 4:return 0;
      case 5:return 3;
      case 6:return 2;
      case 7:return 5;
      case 8:exit=298;
      case 9:exit=298;
      case 10:exit=298;
      case 11:exit=296;
      case 12:exit=297;
      }
    
    switch(exit){case 296:return 7;case 297:return 8;case 298:return 6;}
    };

var
 bigarray_get=
  function(unsafe,elt_kind,layout,b,args,dbg)
   {return bind
            ("ba",
             b,
             function(b$1)
              {if(elt_kind>=11)
                {var kind=bigarray_word_kind(elt_kind);
                 
                 var sz=bigarray_elt_size(elt_kind)/2;
                 
                 return bind
                         ("addr",
                          bigarray_indexing(unsafe,elt_kind,layout,b$1,args,dbg),
                          function(addr)
                           {return box_complex
                                    (/* Cop */[11,/* Cload */[2,kind],/* :: */[0,addr,0]],
                                     /* Cop */[11,
                                      /* Cload */[2,kind],
                                      /* :: */[0,
                                       /* Cop */[11,
                                        13,
                                        /* :: */[0,addr,/* :: */[0,/* Cconst_int */[0,sz],0]]],
                                       0]]);
                            });
                 }
               else
                {return /* Cop */[11,
                         /* Cload */[2,bigarray_word_kind(elt_kind)],
                         /* :: */[0,
                          bigarray_indexing(unsafe,elt_kind,layout,b$1,args,dbg),
                          0]];
                 }
               });
    };

var
 bigarray_set=
  function(unsafe,elt_kind,layout,b,args,newval,dbg)
   {return bind
            ("ba",
             b,
             function(b$1)
              {if(elt_kind>=11)
                {var kind=bigarray_word_kind(elt_kind);
                 
                 var sz=bigarray_elt_size(elt_kind)/2;
                 
                 return bind
                         ("newval",
                          newval,
                          function(newv)
                           {return bind
                                    ("addr",
                                     bigarray_indexing(unsafe,elt_kind,layout,b$1,args,dbg),
                                     function(addr)
                                      {return /* Csequence */[12,
                                               /* Cop */[11,
                                                /* Cstore */[3,kind],
                                                /* :: */[0,addr,/* :: */[0,complex_re(newv),0]]],
                                               /* Cop */[11,
                                                /* Cstore */[3,kind],
                                                /* :: */[0,
                                                 /* Cop */[11,
                                                  13,
                                                  /* :: */[0,addr,/* :: */[0,/* Cconst_int */[0,sz],0]]],
                                                 /* :: */[0,complex_im(newv),0]]]];
                                       });
                            });
                 }
               else
                {return /* Cop */[11,
                         /* Cstore */[3,bigarray_word_kind(elt_kind)],
                         /* :: */[0,
                          bigarray_indexing(unsafe,elt_kind,layout,b$1,args,dbg),
                          /* :: */[0,newval,0]]];
                 }
               });
    };

var
 unaligned_load_16=
  function(ptr,idx)
   {if(Arch["allow_unaligned_access"])
     {return /* Cop */[11,[2,2],/* :: */[0,add_int(ptr,idx),0]];}
    else
     {var v1=/* Cop */[11,[2,0],/* :: */[0,add_int(ptr,idx),0]];
      
      var
       v2=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,1]),0]];
      
      if(Arch["big_endian"])
       {var match=/* tuple */[0,v1,v2];}
      else
       {var match=/* tuple */[0,v2,v1];}
      
      return /* Cop */[11,
              8,
              /* :: */[0,lsl_int(match[1],[0,8]),/* :: */[0,match[2],0]]];
      }
    };

var
 unaligned_set_16=
  function(ptr,idx,newval)
   {if(Arch["allow_unaligned_access"])
     {return /* Cop */[11,
              [3,2],
              /* :: */[0,add_int(ptr,idx),/* :: */[0,newval,0]]];
      }
    else
     {var
       v1=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,11,/* :: */[0,newval,[0,[0,8],0]]],
          [0,[0,255],0]]];
      
      var v2=/* Cop */[11,7,/* :: */[0,newval,[0,[0,255],0]]];
      
      if(Arch["big_endian"])
       {var match=/* tuple */[0,v1,v2];}
      else
       {var match=/* tuple */[0,v2,v1];}
      
      return /* Csequence */[12,
              /* Cop */[11,
               [3,0],
               /* :: */[0,add_int(ptr,idx),/* :: */[0,match[1],0]]],
              /* Cop */[11,
               [3,0],
               /* :: */[0,
                add_int(add_int(ptr,idx),[0,1]),
                /* :: */[0,match[2],0]]]];
      }
    };

var
 unaligned_load_32=
  function(ptr,idx)
   {if(Arch["allow_unaligned_access"])
     {return /* Cop */[11,[2,4],/* :: */[0,add_int(ptr,idx),0]];}
    else
     {var v1=/* Cop */[11,[2,0],/* :: */[0,add_int(ptr,idx),0]];
      
      var
       v2=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,1]),0]];
      
      var
       v3=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,2]),0]];
      
      var
       v4=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,3]),0]];
      
      if(Arch["big_endian"])
       {var match=/* tuple */[0,v1,v2,v3,v4];}
      else
       {var match=/* tuple */[0,v4,v3,v2,v1];}
      
      return /* Cop */[11,
              8,
              /* :: */[0,
               /* Cop */[11,
                8,
                /* :: */[0,
                 lsl_int(match[1],[0,24]),
                 /* :: */[0,lsl_int(match[2],[0,16]),0]]],
               /* :: */[0,
                /* Cop */[11,
                 8,
                 /* :: */[0,lsl_int(match[3],[0,8]),/* :: */[0,match[4],0]]],
                0]]];
      }
    };

var
 unaligned_set_32=
  function(ptr,idx,newval)
   {if(Arch["allow_unaligned_access"])
     {return /* Cop */[11,
              [3,4],
              /* :: */[0,add_int(ptr,idx),/* :: */[0,newval,0]]];
      }
    else
     {var
       v1=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,11,/* :: */[0,newval,[0,[0,24],0]]],
          [0,[0,255],0]]];
      
      var
       v2=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,11,/* :: */[0,newval,[0,[0,16],0]]],
          [0,[0,255],0]]];
      
      var
       v3=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,11,/* :: */[0,newval,[0,[0,8],0]]],
          [0,[0,255],0]]];
      
      var v4=/* Cop */[11,7,/* :: */[0,newval,[0,[0,255],0]]];
      
      if(Arch["big_endian"])
       {var match=/* tuple */[0,v1,v2,v3,v4];}
      else
       {var match=/* tuple */[0,v4,v3,v2,v1];}
      
      return /* Csequence */[12,
              /* Csequence */[12,
               /* Cop */[11,
                [3,0],
                /* :: */[0,add_int(ptr,idx),/* :: */[0,match[1],0]]],
               /* Cop */[11,
                [3,0],
                /* :: */[0,
                 add_int(add_int(ptr,idx),[0,1]),
                 /* :: */[0,match[2],0]]]],
              /* Csequence */[12,
               /* Cop */[11,
                [3,0],
                /* :: */[0,
                 add_int(add_int(ptr,idx),[0,2]),
                 /* :: */[0,match[3],0]]],
               /* Cop */[11,
                [3,0],
                /* :: */[0,
                 add_int(add_int(ptr,idx),[0,3]),
                 /* :: */[0,match[4],0]]]]];
      }
    };

var
 unaligned_load_64=
  function(ptr,idx)
   {if(Arch["size_int"]=8)
     {}
    else
     {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",921,2]];}
    
    if(Arch["allow_unaligned_access"])
     {return /* Cop */[11,[2,6],/* :: */[0,add_int(ptr,idx),0]];}
    else
     {var v1=/* Cop */[11,[2,0],/* :: */[0,add_int(ptr,idx),0]];
      
      var
       v2=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,1]),0]];
      
      var
       v3=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,2]),0]];
      
      var
       v4=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,3]),0]];
      
      var
       v5=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,4]),0]];
      
      var
       v6=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,5]),0]];
      
      var
       v7=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,6]),0]];
      
      var
       v8=
        /* Cop */[11,[2,0],/* :: */[0,add_int(add_int(ptr,idx),[0,7]),0]];
      
      if(Arch["big_endian"])
       {var match=/* tuple */[0,v1,v2,v3,v4,v5,v6,v7,v8];}
      else
       {var match=/* tuple */[0,v8,v7,v6,v5,v4,v3,v2,v1];}
      
      return /* Cop */[11,
              8,
              /* :: */[0,
               /* Cop */[11,
                8,
                /* :: */[0,
                 /* Cop */[11,
                  8,
                  /* :: */[0,
                   lsl_int(match[1],/* Cconst_int */[0,8*7]),
                   /* :: */[0,lsl_int(match[2],/* Cconst_int */[0,8*6]),0]]],
                 /* :: */[0,
                  /* Cop */[11,
                   8,
                   /* :: */[0,
                    lsl_int(match[3],/* Cconst_int */[0,8*5]),
                    /* :: */[0,lsl_int(match[4],/* Cconst_int */[0,8*4]),0]]],
                  0]]],
               /* :: */[0,
                /* Cop */[11,
                 8,
                 /* :: */[0,
                  /* Cop */[11,
                   8,
                   /* :: */[0,
                    lsl_int(match[5],/* Cconst_int */[0,8*3]),
                    /* :: */[0,lsl_int(match[6],/* Cconst_int */[0,8*2]),0]]],
                  /* :: */[0,
                   /* Cop */[11,
                    8,
                    /* :: */[0,lsl_int(match[7],[0,8]),/* :: */[0,match[8],0]]],
                   0]]],
                0]]];
      }
    };

var
 unaligned_set_64=
  function(ptr,idx,newval)
   {if(Arch["size_int"]=8)
     {}
    else
     {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",957,2]];}
    
    if(Arch["allow_unaligned_access"])
     {return /* Cop */[11,
              [3,6],
              /* :: */[0,add_int(ptr,idx),/* :: */[0,newval,0]]];
      }
    else
     {var
       v1=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,
           11,
           /* :: */[0,newval,/* :: */[0,/* Cconst_int */[0,8*7],0]]],
          [0,[0,255],0]]];
      
      var
       v2=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,
           11,
           /* :: */[0,newval,/* :: */[0,/* Cconst_int */[0,8*6],0]]],
          [0,[0,255],0]]];
      
      var
       v3=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,
           11,
           /* :: */[0,newval,/* :: */[0,/* Cconst_int */[0,8*5],0]]],
          [0,[0,255],0]]];
      
      var
       v4=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,
           11,
           /* :: */[0,newval,/* :: */[0,/* Cconst_int */[0,8*4],0]]],
          [0,[0,255],0]]];
      
      var
       v5=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,
           11,
           /* :: */[0,newval,/* :: */[0,/* Cconst_int */[0,8*3],0]]],
          [0,[0,255],0]]];
      
      var
       v6=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,
           11,
           /* :: */[0,newval,/* :: */[0,/* Cconst_int */[0,8*2],0]]],
          [0,[0,255],0]]];
      
      var
       v7=
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,11,/* :: */[0,newval,[0,[0,8],0]]],
          [0,[0,255],0]]];
      
      var v8=/* Cop */[11,7,/* :: */[0,newval,[0,[0,255],0]]];
      
      if(Arch["big_endian"])
       {var match=/* tuple */[0,v1,v2,v3,v4,v5,v6,v7,v8];}
      else
       {var match=/* tuple */[0,v8,v7,v6,v5,v4,v3,v2,v1];}
      
      return /* Csequence */[12,
              /* Csequence */[12,
               /* Csequence */[12,
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,add_int(ptr,idx),/* :: */[0,match[1],0]]],
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,1]),
                  /* :: */[0,match[2],0]]]],
               /* Csequence */[12,
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,2]),
                  /* :: */[0,match[3],0]]],
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,3]),
                  /* :: */[0,match[4],0]]]]],
              /* Csequence */[12,
               /* Csequence */[12,
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,4]),
                  /* :: */[0,match[5],0]]],
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,5]),
                  /* :: */[0,match[6],0]]]],
               /* Csequence */[12,
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,6]),
                  /* :: */[0,match[7],0]]],
                /* Cop */[11,
                 [3,0],
                 /* :: */[0,
                  add_int(add_int(ptr,idx),[0,7]),
                  /* :: */[0,match[8],0]]]]]];
      }
    };

var
 max_or_zero=
  function(a)
   {return bind
            ("size",
             a,
             function(a$1)
              {var
                sign=
                 /* Cop */[11,
                  12,
                  /* :: */[0,
                   a$1,
                   /* :: */[0,/* Cconst_int */[0,Arch["size_int"]*8-1],0]]];
               
               var
                sign_negation=
                 /* Cop */[11,9,/* :: */[0,sign,[0,[0,-1],0]]];
               
               return /* Cop */[11,
                       7,
                       /* :: */[0,sign_negation,/* :: */[0,a$1,0]]];
               });
    };

var
 check_bound=
  function(unsafe,dbg,a1,a2,k)
   {if(unsafe)
     {return k;}
    else
     {return /* Csequence */[12,
              make_checkbound
               (dbg,/* :: */[0,max_or_zero(a1),/* :: */[0,a2,0]]),
              k];
      }
    };

var default_prim=function(name){return /* record */[0,name,0,1,"",0];};

var
 simplif_primitive_32bits=
  function(p)
   {var exit;
    
    if(typeof p=="number")
     {switch(p){}}
    else
     {switch(p[0])
       {case 23:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_of_int")];}
         else
          {exit=239;}
         
        case 24:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_to_int")];}
         else
          {exit=239;}
         
        case 25:
         switch(p[1][0])
          {case 0:
            if(p[2]>=2)
             {return /* Pccall */[11,default_prim("caml_int64_of_nativeint")];
              }
            else
             {exit=239;}
            
           case 1:
            if(p[2]>=2)
             {return /* Pccall */[11,default_prim("caml_int64_of_int32")];}
            else
             {exit=239;}
            
           case 2:
            switch(p[2][0])
             {case 0:
               return /* Pccall */[11,default_prim("caml_int64_to_nativeint")];
               
              case 1:
               return /* Pccall */[11,default_prim("caml_int64_to_int32")];
              case 2:exit=239;
              }
            
           }
         
        case 26:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_neg")];}
         else
          {exit=239;}
         
        case 27:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_add")];}
         else
          {exit=239;}
         
        case 28:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_sub")];}
         else
          {exit=239;}
         
        case 29:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_mul")];}
         else
          {exit=239;}
         
        case 30:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_div")];}
         else
          {exit=239;}
         
        case 31:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_mod")];}
         else
          {exit=239;}
         
        case 32:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_and")];}
         else
          {exit=239;}
         
        case 33:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_or")];}
         else
          {exit=239;}
         
        case 34:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_xor")];}
         else
          {exit=239;}
         
        case 35:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_shift_left")];}
         else
          {exit=239;}
         
        case 36:
         if(p[1]>=2)
          {return /* Pccall */[11,
                   default_prim("caml_int64_shift_right_unsigned")];
           }
         else
          {exit=239;}
         
        case 37:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_shift_right")];}
         else
          {exit=239;}
         
        case 38:
         if(p[1]>=2)
          {switch(p[2][0])
            {case 0:return /* Pccall */[11,default_prim("caml_equal")];
             case 1:return /* Pccall */[11,default_prim("caml_notequal")];
             case 2:return /* Pccall */[11,default_prim("caml_lessthan")];
             case 3:return /* Pccall */[11,default_prim("caml_greaterthan")];
             case 4:return /* Pccall */[11,default_prim("caml_lessequal")];
             case 5:return /* Pccall */[11,default_prim("caml_greaterequal")];
             }
           }
         else
          {exit=239;}
         
        case 39:
         if(p[3]!=8)
          {exit=239;}
         else
          {return /* Pccall */[11,
                   default_prim
                    (Pervasives["^"]
                      ("caml_ba_get_",Pervasives["string_of_int"](p[2])))];
           }
         
        case 40:
         if(p[3]!=8)
          {exit=239;}
         else
          {return /* Pccall */[11,
                   default_prim
                    (Pervasives["^"]
                      ("caml_ba_set_",Pervasives["string_of_int"](p[2])))];
           }
         
        case 44:return /* Pccall */[11,default_prim("caml_string_get64")];
        case 47:return /* Pccall */[11,default_prim("caml_string_set64")];
        case 50:return /* Pccall */[11,default_prim("caml_ba_uint8_get64")];
        case 53:return /* Pccall */[11,default_prim("caml_ba_uint8_set64")];
        case 55:
         if(p[1]>=2)
          {return /* Pccall */[11,default_prim("caml_int64_bswap")];}
         else
          {exit=239;}
         
        default:exit=239;}}
    
    switch(exit){case 239:return p;}
    };

var
 simplif_primitive=
  function(p)
   {var exit;
    
    if(typeof p=="number")
     {switch(p){}}
    else
     {switch(p[0])
       {case 10:return /* Pccall */[11,default_prim("caml_obj_dup")];
        case 39:
         var n=p[2];
         
         if(p[3]!=0)
          {if(p[4]!=0)
            {exit=235;}
           else
            {return /* Pccall */[11,
                     default_prim
                      (Pervasives["^"]
                        ("caml_ba_get_",Pervasives["string_of_int"](n)))];
             }
           }
         else
          {return /* Pccall */[11,
                   default_prim
                    (Pervasives["^"]
                      ("caml_ba_get_",Pervasives["string_of_int"](n)))];
           }
         
        case 40:
         var n$1=p[2];
         
         if(p[3]!=0)
          {if(p[4]!=0)
            {exit=235;}
           else
            {return /* Pccall */[11,
                     default_prim
                      (Pervasives["^"]
                        ("caml_ba_set_",Pervasives["string_of_int"](n$1)))];
             }
           }
         else
          {return /* Pccall */[11,
                   default_prim
                    (Pervasives["^"]
                      ("caml_ba_set_",Pervasives["string_of_int"](n$1)))];
           }
         
        default:exit=235;}}
    
    switch(exit)
     {case 235:
       if(Arch["size_int"]=8)
        {return p;}
       else
        {return simplif_primitive_32bits(p);}
       
      }
    };

var
 transl_isout=
  function(h,arg)
   {return tag_int(/* Cop */[11,[5,2],/* :: */[0,h,/* :: */[0,arg,0]]]);};

var eqint=[4,0];

var neint=[4,1];

var leint=[4,3];

var ltint=[4,2];

var geint=[4,5];

var gtint=[4,4];

var $$default=[17,0,0];

var make_const=function(i){return /* Cconst_int */[0,i];};

var make_prim=function(p,args){return /* Cop */[11,p,args];};

var make_offset=function(arg,n){return add_const(arg,n);};

var
 make_isout=
  function(h,arg){return /* Cop */[11,[5,2],/* :: */[0,h,/* :: */[0,arg,0]]];};

var
 make_isin=
  function(h,arg){return /* Cop */[11,[5,5],/* :: */[0,h,/* :: */[0,arg,0]]];};

var
 make_if=
  function(cond,ifso,ifnot){return /* Cifthenelse */[13,cond,ifso,ifnot];};

var
 make_switch=
  function(arg,cases,actions){return /* Cswitch */[14,arg,cases,actions];};

var bind$1=function(arg,body){return bind("switcher",arg,body);};

var
 make_catch=
  function(handler)
   {var exit;
    
    switch(handler)
     {case 17:
       if(handler[2])
        {exit=217;}
       else
        {return /* tuple */[0,handler[1],function(e){return e;}];}
       
      default:exit=217;}
    
    switch(exit)
     {case 217:
       var i=Lambda["next_raise_count"](0);
       
       return /* tuple */[0,
               i,
               function(body)
                {switch(body)
                  {case 17:if(i=body[1]){return handler;}else{return body;}
                   default:return /* Ccatch */[16,i,0,body,handler];}
                 }];
       
      }
    };

var make_exit=function(i){return /* Cexit */[17,i,0];};

var
 SArgBlocks=
  [0,
   eqint,
   neint,
   leint,
   ltint,
   geint,
   gtint,
   $$default,
   make_const,
   make_prim,
   make_offset,
   make_isout,
   make_isin,
   make_if,
   make_switch,
   bind$1,
   make_catch,
   make_exit];

var
 make_key=
  function(param)
   {var exit;
    
    switch(param)
     {case 17:if(param[2]){exit=212;}else{return /* Some */[0,param[1]];}
      default:exit=212;}
    
    switch(exit){case 212:return 0;}
    };

var StoreExp=Switch["Store"]([0,make_key]);

var
 SwitcherBlocks=
  Switch["Make"]
   ([0,
     SArgBlocks[1],
     SArgBlocks[2],
     SArgBlocks[3],
     SArgBlocks[4],
     SArgBlocks[5],
     SArgBlocks[6],
     SArgBlocks[15],
     SArgBlocks[8],
     SArgBlocks[10],
     SArgBlocks[9],
     SArgBlocks[11],
     SArgBlocks[12],
     SArgBlocks[13],
     SArgBlocks[14],
     SArgBlocks[16],
     SArgBlocks[17]]);

var
 transl_int_switch=
  function(arg,low,high,cases,$$default$1)
   {if(cases)
     {var store=StoreExp[1](0);
      
      if(store[3]($$default$1)=0)
       {}
      else
       {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",1148,4]];}
      
      var
       cases$1=
        List["map"]
         (function(param){return /* tuple */[0,param[1],store[3](param[2])];},
          cases);
      
      var
       inters=
        function(plow,phigh,pact,param)
         {if(param)
           {var rem=param[2];
            
            var match=param[1];
            
            var act=match[2];
            
            var i=match[1];
            
            if(i=phigh+1)
             {if(pact=act)
               {return inters(plow,i,pact,rem);}
              else
               {return /* :: */[0,
                        /* tuple */[0,plow,phigh,pact],
                        inters(i,i,act,rem)];
                }
              }
            else
             {if(pact=0)
               {if(act=0)
                 {return inters(plow,i,0,rem);}
                else
                 {return /* :: */[0,
                          /* tuple */[0,plow,i-1,pact],
                          inters(i,i,act,rem)];
                  }
                }
              else
               {return /* :: */[0,
                        /* tuple */[0,plow,phigh,pact],
                        (act=0)
                         ?inters(phigh+1,i,0,rem)
                         :/* :: */[0,
                           /* tuple */[0,phigh+1,i-1,0],
                           inters(i,i,act,rem)]];
                }
              }
            }
          else
           {if(phigh=high)
             {return /* :: */[0,/* tuple */[0,plow,phigh,pact],0];}
            else
             {return /* :: */[0,
                      /* tuple */[0,plow,phigh,pact],
                      /* :: */[0,/* tuple */[0,phigh+1,high,0],0]];
              }
            }
          };
      
      if(cases$1)
       {var match=cases$1[1];
        
        var k0=match[1];
        
        if(k0=low)
         {var inters$1=inters(k0,k0,match[2],cases$1[2]);}
        else
         {var inters$1=inters(low,k0-1,0,cases$1);}
        }
      else
       {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",1177,12]];}
      
      return bind
              ("switcher",
               arg,
               function(a)
                {return SwitcherBlocks[1]
                         (/* tuple */[0,low,high],
                          a,
                          $$Array["of_list"](inters$1),
                          store);
                 });
      }
    else
     {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",1145,8]];}
    };

var
 is_unboxed_number=
  function(param)
   {var exit;
    
    switch(param)
     {case 1:
       var match=param[1];
       
       switch(match)
        {case 0:switch(match[2]){case 0:return 1;default:exit=207;}
         case 1:exit=207;
         case 2:exit=207;
         }
       
      case 6:var e=param[3];exit=206;
      case 8:
       var match$1=simplif_primitive(param[1]);
       
       var exit$1;
       
       if(typeof match$1=="number")
        {switch(match$1)
          {case 19:exit$1=201;
           case 20:exit$1=201;
           case 21:exit$1=201;
           case 22:exit$1=201;
           case 23:exit$1=201;
           case 24:exit$1=201;
           case 25:exit$1=201;
           }}
       else
        {switch(match$1[0])
          {case 8:exit$1=201;
           case 11:if(match$1[1][5]){return 1;}else{return 0;}
           case 19:exit$1=202;
           case 21:exit$1=202;
           case 23:exit$1=203;
           case 25:return /* Boxed_integer */[0,match$1[2]];
           case 26:exit$1=203;
           case 27:exit$1=203;
           case 28:exit$1=203;
           case 29:exit$1=203;
           case 30:exit$1=203;
           case 31:exit$1=203;
           case 32:exit$1=203;
           case 33:exit$1=203;
           case 34:exit$1=203;
           case 35:exit$1=203;
           case 36:exit$1=203;
           case 37:exit$1=203;
           case 39:
            var exit$2;
            
            switch(match$1[3][0])
             {case 0:exit$1=199;
              case 1:exit$2=200;
              case 2:exit$2=200;
              case 3:exit$1=199;
              case 4:exit$1=199;
              case 5:exit$1=199;
              case 6:exit$1=199;
              case 7:return [0,1];
              case 8:return [0,2];
              case 9:exit$1=199;
              case 10:return [0,0];
              case 11:exit$1=199;
              case 12:exit$1=199;
              }
            
            switch(exit$2){case 200:return 1;}
            
           case 43:exit$1=204;
           case 44:exit$1=205;
           case 49:exit$1=204;
           case 50:exit$1=205;
           case 55:exit$1=203;
           default:exit$1=199;}}
       
       switch(exit$1)
        {case 201:return 1;
         case 202:
          if(match$1[1]>=3){return 1;}else{"unknown block:(exit 199)";}
         case 203:return /* Boxed_integer */[0,match$1[1]];
         case 204:return [0,1];
         case 205:return [0,2];
         case 199:return 0;
         }
       
      case 15:var e=param[2];exit=206;
      default:exit=207;}
    
    switch(exit){case 207:return 0;case 206:return is_unboxed_number(e);}
    };

var
 subst_boxed_number=
  function(unbox_fn,boxed_id,unboxed_id,box_chunk,box_offset,exp)
   {var need_boxed=[0,0];
    
    var assigned=[0,0];
    
    var
     subst=
      function(e)
       {switch(e)
         {case 7:
           if(Ident["same"](e[1],boxed_id)){need_boxed[1]=1,0}else{}return e;
          case 8:return /* Clet */[8,e[1],subst(e[2]),subst(e[3])];
          case 9:
           var arg=e[2];
           
           var id=e[1];
           
           if(Ident["same"](id,boxed_id))
            {assigned[1]=1,0;
             return /* Cassign */[9,unboxed_id,subst(unbox_fn(arg))];
             }
           else
            {return /* Cassign */[9,id,subst(arg)];}
           
          case 10:return /* Ctuple */[10,List["map"](subst,e[1])];
          case 11:
           var op=e[1];
           
           var exit;
           
           if(typeof op=="number")
            {switch(op){}}
           else
            {switch(op[0])
              {case 2:
                var match=e[2];
                
                if(match)
                 {var match$1=match[1];
                  
                  var chunk=op[1];
                  
                  switch(match$1)
                   {case 7:
                     if(match[2])
                      {exit=195;}
                     else
                      {if(!Ident["same"](match$1[1],boxed_id))
                        {return e;}
                       else
                        {if("unknown primitive:caml_equal"&&(box_offset=0))
                          {return /* Cvar */[7,unboxed_id];}
                         else
                          {need_boxed[1]=1,0;return e;}
                         }
                       }
                     
                    case 11:
                     var match$2=match$1[1];
                     
                     if("unknown primitive:isint")
                      {if(match$2!=13)
                        {exit=195;}
                       else
                        {var match$3=match$1[2];
                         
                         if(match$3)
                          {var match$4=match$3[1];
                           
                           switch(match$4)
                            {case 7:
                              var match$5=match$3[2];
                              
                              if(match$5)
                               {var match$6=match$5[1];
                                
                                switch(match$6)
                                 {case 0:
                                   if(match$5[2])
                                    {exit=195;}
                                   else
                                    {if(match[2])
                                      {exit=195;}
                                     else
                                      {if(!Ident["same"](match$4[1],boxed_id))
                                        {return e;}
                                       else
                                        {if("unknown primitive:caml_equal"&&(match$6[1]=box_offset))
                                          {return /* Cvar */[7,unboxed_id];}
                                         else
                                          {need_boxed[1]=1,0;return e;}
                                         }
                                       }
                                     }
                                   
                                  default:exit=195;}
                                }
                              else
                               {exit=195;}
                              
                             default:exit=195;}
                           }
                         else
                          {exit=195;}
                         }
                       }
                     else
                      {exit=195;}
                     
                    default:exit=195;}
                  }
                else
                 {exit=195;}
                
               default:exit=195;}}
           
           switch(exit)
            {case 195:return /* Cop */[11,op,List["map"](subst,e[2])];}
           
          case 12:return /* Csequence */[12,subst(e[1]),subst(e[2])];
          case 13:
           return /* Cifthenelse */[13,subst(e[1]),subst(e[2]),subst(e[3])];
          case 14:
           return /* Cswitch */[14,
                   subst(e[1]),
                   e[2],
                   $$Array["map"](subst,e[3])];
           
          case 15:return /* Cloop */[15,subst(e[1])];
          case 16:return /* Ccatch */[16,e[1],e[2],subst(e[3]),subst(e[4])];
          case 17:return /* Cexit */[17,e[1],List["map"](subst,e[2])];
          case 18:return /* Ctrywith */[18,subst(e[1]),e[2],subst(e[3])];
          default:return e;}
        };
    
    var res=subst(exp);
    
    return /* tuple */[0,res,need_boxed[1],assigned[1]];
    };

var functions=Queue["create"](0);

var S=Strmatch["Make"]([0,get_size,transl_int_switch]);

var strmatch_compile=S[1];

var
 transl=
  function(param)
   {switch(param)
     {case 0:return /* Cvar */[7,param[1]];
      case 1:return transl_constant(param[1]);
      case 2:
       return /* Cop */[11,
               /* Capply */[0,Cmm["typ_addr"],param[3]],
               /* :: */[0,
                /* Cconst_symbol */[3,param[1]],
                List["map"](transl,param[2])]];
       
      case 3:
       var args=param[2];
       
       var clos=param[1];
       
       var exit;
       
       if(args)
        {if(args[2])
          {exit=141;}
         else
          {var dbg=param[3];
           
           var arg=args[1];
           
           return bind
                   ("fun",
                    transl(clos),
                    function(clos$1)
                     {return /* Cop */[11,
                              /* Capply */[0,Cmm["typ_addr"],dbg],
                              /* :: */[0,
                               get_field(clos$1,0),
                               /* :: */[0,transl(arg),/* :: */[0,clos$1,0]]]];
                      });
           }
         }
       else
        {exit=141;}
       
       switch(exit)
        {case 141:
          var arity=List["length"](args);
          
          var
           cargs=
            /* :: */[0,
             /* Cconst_symbol */[3,apply_function(arity)],
             List["map"](transl,Pervasives["@"](args,/* :: */[0,clos,0]))];
          
          return /* Cop */[11,/* Capply */[0,Cmm["typ_addr"],param[3]],cargs];
          
         }
       
      case 4:
       var clos_vars=param[2];
       
       var fundecls=param[1];
       
       if(clos_vars)
        {var block_size=fundecls_size(fundecls)+List["length"](clos_vars);
         
         var
          transl_fundecls=
           function(pos,param$1)
            {if(param$1)
              {var rem=param$1[2];
               
               var f=param$1[1];
               
               Queue["add"](f,functions);
               if(pos=0)
                {var header$1=alloc_closure_header(block_size);}
               else
                {var header$1=alloc_infix_header(pos);}
               
               if(f[2]=1)
                {return /* :: */[0,
                         header$1,
                         /* :: */[0,
                          /* Cconst_symbol */[3,f[1]],
                          /* :: */[0,int_const(1),transl_fundecls(pos+3,rem)]]];
                 }
               else
                {return /* :: */[0,
                         header$1,
                         /* :: */[0,
                          /* Cconst_symbol */[3,curry_function(f[2])],
                          /* :: */[0,
                           int_const(f[2]),
                           /* :: */[0,
                            /* Cconst_symbol */[3,f[1]],
                            transl_fundecls(pos+4,rem)]]]];
                 }
               }
             else
              {return List["map"](transl,clos_vars);}
             };
         
         return /* Cop */[11,0,transl_fundecls(0,fundecls)];
         }
       else
        {var lbl=Compilenv["new_const_symbol"](0);
         
         constant_closures[1]=
         /* :: */[0,/* tuple */[0,lbl,fundecls],constant_closures[1]],
         0;
         List["iter"](function(f){return Queue["add"](f,functions);},fundecls);
         return /* Cconst_symbol */[3,lbl];
         }
       
      case 5:return field_address(transl(param[1]),param[2]);
      case 6:
       var body=param[3];
       
       var exp=param[2];
       
       var id=param[1];
       
       var match=is_unboxed_number(exp);
       
       if("unknown primitive:isint")
        {if(match!=0)
          {return transl_unbox_let
                   (box_float,unbox_float,transl_unbox_float,9,0,id,exp,body);
           }
         else
          {return /* Clet */[8,id,transl(exp),transl(body)];}
         }
       else
        {var bi=match[1];
         
         return transl_unbox_let
                 (box_int(bi),
                  unbox_int(bi),
                  transl_unbox_int(bi),
                  (bi=1)?5:6,
                  Arch["size_addr"],
                  id,
                  exp,
                  body);
         }
       
      case 7:return transl_letrec(param[1],transl(param[2]));
      case 8:
       var dbg$1=param[3];
       
       var args$1=param[2];
       
       var match$1=simplif_primitive(param[1]);
       
       var exit$1;
       
       if(typeof match$1=="number")
        {switch(match$1){}}
       else
        {switch(match$1[0])
          {case 3:
            if(args$1)
             {exit$1=129;}
            else
             {return /* Cconst_symbol */[3,Ident["name"](match$1[1])];}
            
           case 5:
            if(args$1)
             {return make_alloc(match$1[1],List["map"](transl,args$1));}
            else
             {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",1389,10]];}
            
           case 11:
            var prim=match$1[1];
            
            if(prim[5])
             {return box_float
                      (/* Cop */[11,
                        /* Cextcall */[1,prim[4],Cmm["typ_float"],0,dbg$1],
                        List["map"](transl_unbox_float,args$1)]);
              }
            else
             {return /* Cop */[11,
                      /* Cextcall */[1,
                       Primitive["native_name"](prim),
                       Cmm["typ_addr"],
                       prim[3],
                       dbg$1],
                      List["map"](transl,args$1)];
              }
            
           case 17:
            var kind=match$1[1];
            
            if(args$1)
             {if(kind!=0)
               {if(kind>=3)
                 {return make_float_alloc
                          (Obj["double_array_tag"],
                           List["map"](transl_unbox_float,args$1));
                  }
                else
                 {return make_alloc(0,List["map"](transl,args$1));}
                }
              else
               {return /* Cop */[11,
                        /* Cextcall */[1,
                         "caml_make_array",
                         Cmm["typ_addr"],
                         1,
                         Debuginfo["none"]],
                        /* :: */[0,make_alloc(0,List["map"](transl,args$1)),0]];
                }
              }
            else
             {return transl_structured_constant([4,0,0]);}
            
           case 39:
            if(args$1)
             {var elt_kind=match$1[3];
              
              var
               elt=
                bigarray_get
                 (match$1[1],
                  elt_kind,
                  match$1[4],
                  transl(args$1[1]),
                  List["map"](transl,args$1[2]),
                  dbg$1);
              
              var exit$2;
              
              switch(elt_kind[0])
               {case 0:exit$2=121;
                case 1:exit$2=119;
                case 2:exit$2=119;
                case 3:exit$2=121;
                case 4:exit$2=121;
                case 5:exit$2=121;
                case 6:exit$2=121;
                case 7:return box_int(1,elt);
                case 8:return box_int(2,elt);
                case 9:return force_tag_int(elt);
                case 10:return box_int(0,elt);
                case 11:exit$2=120;
                case 12:exit$2=120;
                }
              
              switch(exit$2)
               {case 121:return tag_int(elt);
                case 119:return box_float(elt);
                case 120:return elt;
                }
              }
            else
             {exit$1=128;}
            
           case 40:
            if(args$1)
             {var elt_kind$1=match$1[3];
              
              var match$2=Misc["split_last"](args$1[2]);
              
              var argnewval=match$2[2];
              
              var exit$3;
              
              var $js;
              switch(elt_kind$1[0])
               {case 0:exit$3=125;
                case 1:exit$3=123;
                case 2:exit$3=123;
                case 3:exit$3=125;
                case 4:exit$3=125;
                case 5:exit$3=125;
                case 6:exit$3=125;
                case 7:$js=transl_unbox_int(1,argnewval);
                case 8:$js=transl_unbox_int(2,argnewval);
                case 9:exit$3=125;
                case 10:$js=transl_unbox_int(0,argnewval);
                case 11:exit$3=124;
                case 12:exit$3=124;
                }
              
              var $js$1;
              switch(exit$3)
               {case 125:$js$1=untag_int(transl(argnewval));
                case 123:$js$1=transl_unbox_float(argnewval);
                case 124:$js$1=transl(argnewval);
                }
              return return_unit
                      (bigarray_set
                        (match$1[1],
                         elt_kind$1,
                         match$1[4],
                         transl(args$1[1]),
                         List["map"](transl,match$2[1]),
                         $js$1,
                         dbg$1));
              }
            else
             {exit$1=128;}
            
           case 41:
            if(args$1)
             {if(args$1[2])
               {exit$1=129;}
              else
               {var dim_ofs=4+match$1[1];
                
                return tag_int
                        (/* Cop */[11,
                          [2,6],
                          /* :: */[0,field_address(transl(args$1[1]),dim_ofs),0]]);
                }
              }
            else
             {exit$1=128;}
            
           default:exit$1=129;}}
       
       switch(exit$1)
        {case 129:
          if(args$1)
           {var match$3=args$1[2];
            
            var arg$1=args$1[1];
            
            if(match$3)
             {var match$4=match$3[2];
              
              var arg2=match$3[1];
              
              if(match$4)
               {if(match$4[2])
                 {"unknown block:(exit 128)";}
                else
                 {return transl_prim_3(match$1,arg$1,arg2,match$4[1],dbg$1);}
                }
              else
               {return transl_prim_2(match$1,arg$1,arg2,dbg$1);}
              }
            else
             {return transl_prim_1(match$1,arg$1,dbg$1);}
            }
          else
           {"unknown block:(exit 128)";}
          
         case 128:return Misc["fatal_error"]("Cmmgen.transl:prim");
         }
       
      case 9:
       var s=param[2];
       
       var arg$2=param[1];
       
       if(s[3]["length"]=0)
        {return /* Cswitch */[14,
                 untag_int(transl(arg$2)),
                 s[1],
                 $$Array["map"](transl,s[2])];
         }
       else
        {if(s[1]["length"]=0)
          {return transl_switch(get_tag(transl(arg$2)),s[3],s[4]);}
         else
          {return bind
                   ("switch",
                    transl(arg$2),
                    function(arg$3)
                     {return /* Cifthenelse */[13,
                              /* Cop */[11,7,/* :: */[0,arg$3,[0,[0,1],0]]],
                              transl_switch(untag_int(arg$3),s[1],s[2]),
                              transl_switch(get_tag(arg$3),s[3],s[4])];
                      });
           }
         }
       
      case 10:
       var d=param[3];
       
       var sw=param[2];
       
       return bind
               ("switch",
                transl(param[1]),
                function(arg$3)
                 {return strmatch_compile
                          (arg$3,
                           Misc["may_map"](transl,d),
                           List["map"]
                            (function(param$1)
                              {return /* tuple */[0,param$1[1],transl(param$1[2])];},
                             sw));
                  });
       
      case 11:return /* Cexit */[17,param[1],List["map"](transl,param[2])];
      case 12:
       var ids=param[2];
       
       var nfail=param[1];
       
       if(ids)
        {return /* Ccatch */[16,nfail,ids,transl(param[3]),transl(param[4])];}
       else
        {return make_catch$1(nfail,transl(param[3]),transl(param[4]));}
       
      case 13:
       return /* Ctrywith */[18,transl(param[1]),param[2],transl(param[3])];
      case 14:
       var cond=param[1];
       
       var exit$4;
       
       switch(cond)
        {case 8:
          var match$5=cond[1];
          
          if("unknown primitive:isint")
           {if(match$5!=5)
             {exit$4=145;}
            else
             {var match$6=cond[2];
              
              if(match$6)
               {if(match$6[2])
                 {exit$4=145;}
                else
                 {return transl
                          (/* Uifthenelse */[14,match$6[1],param[3],param[2]]);
                  }
                }
              else
               {exit$4=145;}
              }
            }
          else
           {exit$4=145;}
          
         default:exit$4=145;}
       
       switch(exit$4)
        {case 145:
          var ifso=param[2];
          
          var exit$5;
          
          var match$7=param[3];
          
          switch(match$7)
           {case 11:
             if(match$7[2])
              {exit$5=146;}
             else
              {return exit_if_false(cond,transl(ifso),match$7[1]);}
             
            default:exit$5=146;}
          
          switch(exit$5)
           {case 146:
             switch(ifso)
              {case 11:
                if(ifso[2])
                 {"unknown block:(exit 144)";}
                else
                 {return exit_if_true(cond,ifso[1],transl(param[3]));}
                
               default:"unknown block:(exit 144)";}
             
            }
          
         case 144:
          switch(cond)
           {case 8:
             var match$8=cond[1];
             
             if("unknown primitive:isint")
              {if(match$8!=3)
                {if(match$8!=4)
                  {"unknown block:(exit 143)";}
                 else
                  {var raise_num=Lambda["next_raise_count"](0);
                   
                   return make_catch$1
                           (raise_num,
                            exit_if_true(cond,raise_num,transl(param[3])),
                            transl(param[2]));
                   }
                 }
               else
                {var raise_num$1=Lambda["next_raise_count"](0);
                 
                 return make_catch$1
                         (raise_num$1,
                          exit_if_false(cond,transl(param[2]),raise_num$1),
                          transl(param[3]));
                 }
               }
             else
              {"unknown block:(exit 143)";}
             
            case 14:
             var condnot=cond[3];
             
             var condso=cond[2];
             
             var cond$1=cond[1];
             
             var num_true=Lambda["next_raise_count"](0);
             
             return make_catch$1
                     (num_true,
                      make_catch2
                       (function(shared_false)
                         {return /* Cifthenelse */[13,
                                  test_bool(transl(cond$1)),
                                  exit_if_true(condso,num_true,shared_false),
                                  exit_if_true(condnot,num_true,shared_false)];
                          },
                        transl(param[3])),
                      transl(param[2]));
             
            default:"unknown block:(exit 143)";}
          
         case 143:
          return /* Cifthenelse */[13,
                  test_bool(transl(cond)),
                  transl(param[2]),
                  transl(param[3])];
          
         }
       
      case 15:
       return /* Csequence */[12,
               remove_unit(transl(param[1])),
               transl(param[2])];
       
      case 16:
       var raise_num$2=Lambda["next_raise_count"](0);
       
       return return_unit
               (/* Ccatch */[16,
                 raise_num$2,
                 0,
                 /* Cloop */[15,
                  exit_if_false
                   (param[1],remove_unit(transl(param[2])),raise_num$2)],
                 [10,0]]);
       
      case 17:
       var body$1=param[5];
       
       var dir=param[4];
       
       var id$1=param[1];
       
       if(dir!=0){var tst=2;}else{var tst=4;}
       
       if(dir!=0){var inc=2;}else{var inc=1;}
       
       var raise_num$3=Lambda["next_raise_count"](0);
       
       var id_prev=Ident["rename"](id$1);
       
       return return_unit
               (/* Clet */[8,
                 id$1,
                 transl(param[2]),
                 bind_nonvar
                  ("bound",
                   transl(param[3]),
                   function(high)
                    {return /* Ccatch */[16,
                             raise_num$3,
                             0,
                             /* Cifthenelse */[13,
                              /* Cop */[11,
                               /* Ccmpi */[4,tst],
                               /* :: */[0,/* Cvar */[7,id$1],/* :: */[0,high,0]]],
                              /* Cexit */[17,raise_num$3,0],
                              /* Cloop */[15,
                               /* Csequence */[12,
                                remove_unit(transl(body$1)),
                                /* Clet */[8,
                                 id_prev,
                                 /* Cvar */[7,id$1],
                                 /* Csequence */[12,
                                  /* Cassign */[9,
                                   id$1,
                                   /* Cop */[11,inc,/* :: */[0,/* Cvar */[7,id$1],[0,[0,2],0]]]],
                                  /* Cifthenelse */[13,
                                   /* Cop */[11,
                                    [4,0],
                                    /* :: */[0,/* Cvar */[7,id_prev],/* :: */[0,high,0]]],
                                   /* Cexit */[17,raise_num$3,0],
                                   [10,0]]]]]]],
                             [10,0]];
                     })]);
       
      case 18:return return_unit(/* Cassign */[9,param[1],transl(param[2])]);
      case 19:
       var dbg$2=param[5];
       
       var args$2=param[4];
       
       var met=param[2];
       
       var kind$1=param[1];
       
       var
        call_met=
         function(obj,args$3,clos$1)
          {if(args$3=0)
            {return /* Cop */[11,
                     /* Capply */[0,Cmm["typ_addr"],dbg$2],
                     /* :: */[0,
                      get_field(clos$1,0),
                      /* :: */[0,obj,/* :: */[0,clos$1,0]]]];
             }
           else
            {var arity$1=List["length"](args$3)+1;
             
             var
              cargs$1=
               Pervasives["@"]
                (/* :: */[0,
                  /* Cconst_symbol */[3,apply_function(arity$1)],
                  /* :: */[0,obj,List["map"](transl,args$3)]],
                 /* :: */[0,clos$1,0]);
             
             return /* Cop */[11,
                     /* Capply */[0,Cmm["typ_addr"],dbg$2],
                     cargs$1];
             }
           };
       
       return bind
               ("obj",
                transl(param[3]),
                function(obj)
                 {var exit$6;
                  
                  switch(kind$1[0])
                   {case 0:
                     return bind
                             ("met",lookup_label(obj,transl(met)),call_met(obj,args$2));
                     
                    case 1:exit$6=114;
                    case 2:
                     if(args$2)
                      {var match$9=args$2[2];
                       
                       if(match$9)
                        {return call_cached_method
                                 (obj,
                                  transl(met),
                                  transl(args$2[1]),
                                  transl(match$9[1]),
                                  List["map"](transl,match$9[2]),
                                  dbg$2);
                         }
                       else
                        {exit$6=114;}
                       }
                     else
                      {exit$6=114;}
                     
                    }
                  
                  switch(exit$6)
                   {case 114:
                     return bind
                             ("met",lookup_tag(obj,transl(met)),call_met(obj,args$2));
                     
                    }
                  });
       
      }
    };

var
 transl_prim_1=
  function(p,arg,dbg)
   {var exit;
    
    if(typeof p=="number")
     {switch(p)
       {case 0:return transl(arg);
        case 1:return return_unit(remove_unit(transl(arg)));
        case 5:
         return /* Cop */[11,2,/* :: */[0,[0,4],/* :: */[0,transl(arg),0]]];
        case 6:
         return /* Cop */[11,2,/* :: */[0,[0,2],/* :: */[0,transl(arg),0]]];
        case 18:
         return tag_int
                 (/* Cop */[11,22,/* :: */[0,transl_unbox_float(arg),0]]);
         
        case 19:
         return box_float
                 (/* Cop */[11,21,/* :: */[0,untag_int(transl(arg)),0]]);
         
        case 20:
         return box_float
                 (/* Cop */[11,15,/* :: */[0,transl_unbox_float(arg),0]]);
         
        case 21:
         return box_float
                 (/* Cop */[11,16,/* :: */[0,transl_unbox_float(arg),0]]);
         
        case 26:return tag_int(string_length(transl(arg)));
        case 31:
         return tag_int(/* Cop */[11,7,/* :: */[0,transl(arg),[0,[0,1],0]]]);
        case 34:
         return tag_int
                 (/* Cop */[11,
                   /* Cextcall */[1,
                    "caml_bswap16_direct",
                    Cmm["typ_int"],
                    0,
                    Debuginfo["none"]],
                   /* :: */[0,untag_int(transl(arg)),0]]);
         
        case 35:return /* Cop */[11,13,/* :: */[0,transl(arg),[0,[0,-1],0]]];
        }}
    else
     {switch(p[0])
       {case 6:return get_field(transl(arg),p[1]);
        case 8:
         var n=p[1];
         
         var ptr=transl(arg);
         
         return box_float
                 (/* Cop */[11,
                   [2,9],
                   /* :: */[0,
                    (n=0)
                     ?ptr
                     :/* Cop */[11,
                       13,
                       /* :: */[0,
                        ptr,
                        /* :: */[0,/* Cconst_int */[0,n*Arch["size_float"]],0]]],
                    0]]);
         
        case 12:
         return /* Cop */[11,
                 /* Craise */[7,p[1],dbg],
                 /* :: */[0,transl(arg),0]];
         
        case 14:
         var n$1=p[1];
         
         if(Misc["no_overflow_lsl"](n$1))
          {return add_const(transl(arg),n$1<<1);}
         else
          {return transl_prim_2
                   (7,
                    arg,
                    /* Uconst */[1,/* Uconst_int */[1,n$1]],
                    Debuginfo["none"]);
           }
         
        case 15:
         var n$2=p[1];
         
         return return_unit
                 (bind
                   ("ref",
                    transl(arg),
                    function(arg$1)
                     {return /* Cop */[11,
                              [3,6],
                              /* :: */[0,
                               arg$1,
                               /* :: */[0,
                                add_const(/* Cop */[11,[2,6],/* :: */[0,arg$1,0]],n$2<<1),
                                0]]];
                      }));
         
        case 18:
         var kind=p[1];
         
         if(kind!=0)
          {if(kind>=3)
            {return /* Cop */[11,
                     8,
                     /* :: */[0,
                      float_array_length(header(transl(arg))),
                      [0,[0,1],0]]];
             }
           else
            {return /* Cop */[11,
                     8,
                     /* :: */[0,
                      addr_array_length(header(transl(arg))),
                      [0,[0,1],0]]];
             }
           }
         else
          {if(wordsize_shift=numfloat_shift)
            {var
              len=
               /* Cop */[11,
                11,
                /* :: */[0,
                 header(transl(arg)),
                 /* :: */[0,/* Cconst_int */[0,wordsize_shift],0]]];
             }
           else
            {var
              len=
               bind
                ("header",
                 header(transl(arg)),
                 function(hdr)
                  {return /* Cifthenelse */[13,
                           is_addr_array_hdr(hdr),
                           /* Cop */[11,
                            11,
                            /* :: */[0,
                             hdr,
                             /* :: */[0,/* Cconst_int */[0,wordsize_shift],0]]],
                           /* Cop */[11,
                            11,
                            /* :: */[0,
                             hdr,
                             /* :: */[0,/* Cconst_int */[0,numfloat_shift],0]]]];
                   });
             }
           
           return /* Cop */[11,8,/* :: */[0,len,[0,[0,1],0]]];
           }
         
        case 23:return box_int(p[1],untag_int(transl(arg)));
        case 24:return force_tag_int(transl_unbox_int(p[1],arg));
        case 25:return box_int(p[2],transl_unbox_int(p[1],arg));
        case 26:
         var bi=p[1];
         
         return box_int
                 (bi,
                  /* Cop */[11,
                   2,
                   /* :: */[0,[0,0],/* :: */[0,transl_unbox_int(bi,arg),0]]]);
         
        case 54:
         var
          const_of_bool=
           function(b){return tag_int(/* Cconst_int */[0,b?1:0]);};
         
         switch(p[1][0])
          {case 0:return const_of_bool(Arch["big_endian"]);
           case 1:return tag_int(/* Cconst_int */[0,8*Arch["size_int"]]);
           case 2:return const_of_bool("unknown primitive:caml_string_equal");
           case 3:return const_of_bool("unknown primitive:caml_string_equal");
           case 4:return const_of_bool("unknown primitive:caml_string_equal");
           }
         
        case 55:
         var bi$1=p[1];
         
         switch(bi$1[0])
          {case 0:var prim="nativeint";
           case 1:var prim="int32";
           case 2:var prim="int64";
           }
         
         return box_int
                 (bi$1,
                  /* Cop */[11,
                   /* Cextcall */[1,
                    Printf["sprintf"]
                     ([0,
                       [11,"caml_",[2,0,[11,"_direct_bswap",0]]],
                       "caml_%s_direct_bswap"],
                      prim),
                    Cmm["typ_int"],
                    0,
                    Debuginfo["none"]],
                   /* :: */[0,transl_unbox_int(bi$1,arg),0]]);
         
        default:exit=152;}}
    
    switch(exit){case 152:return Misc["fatal_error"]("Cmmgen.transl_prim_1");}
    };

var
 transl_prim_2=
  function(p,arg1,arg2,dbg)
   {var exit;
    
    if(typeof p=="number")
     {switch(p)
       {case 3:
         return /* Cifthenelse */[13,
                 test_bool(transl(arg1)),
                 transl(arg2),
                 [0,1]];
         
        case 4:
         return /* Cifthenelse */[13,
                 test_bool(transl(arg1)),
                 [0,3],
                 transl(arg2)];
         
        case 7:return decr_int(add_int(transl(arg1),transl(arg2)));
        case 8:return incr_int(sub_int(transl(arg1),transl(arg2)));
        case 9:
         return incr_int
                 (mul_int(decr_int(transl(arg1)),untag_int(transl(arg2))));
         
        case 10:
         return tag_int
                 (div_int(untag_int(transl(arg1)),untag_int(transl(arg2)),dbg));
         
        case 11:
         return tag_int
                 (mod_int(untag_int(transl(arg1)),untag_int(transl(arg2)),dbg));
         
        case 12:
         return /* Cop */[11,
                 7,
                 /* :: */[0,transl(arg1),/* :: */[0,transl(arg2),0]]];
         
        case 13:
         return /* Cop */[11,
                 8,
                 /* :: */[0,transl(arg1),/* :: */[0,transl(arg2),0]]];
         
        case 14:
         return /* Cop */[11,
                 8,
                 /* :: */[0,
                  /* Cop */[11,
                   9,
                   /* :: */[0,
                    ignore_low_bit_int(transl(arg1)),
                    /* :: */[0,ignore_low_bit_int(transl(arg2)),0]]],
                  [0,[0,1],0]]];
         
        case 15:
         return incr_int
                 (lsl_int(decr_int(transl(arg1)),untag_int(transl(arg2))));
         
        case 16:
         return /* Cop */[11,
                 8,
                 /* :: */[0,
                  lsr_int(transl(arg1),untag_int(transl(arg2))),
                  [0,[0,1],0]]];
         
        case 17:
         return /* Cop */[11,
                 8,
                 /* :: */[0,
                  asr_int(transl(arg1),untag_int(transl(arg2))),
                  [0,[0,1],0]]];
         
        case 22:
         return box_float
                 (/* Cop */[11,
                   17,
                   /* :: */[0,
                    transl_unbox_float(arg1),
                    /* :: */[0,transl_unbox_float(arg2),0]]]);
         
        case 23:
         return box_float
                 (/* Cop */[11,
                   18,
                   /* :: */[0,
                    transl_unbox_float(arg1),
                    /* :: */[0,transl_unbox_float(arg2),0]]]);
         
        case 24:
         return box_float
                 (/* Cop */[11,
                   19,
                   /* :: */[0,
                    transl_unbox_float(arg1),
                    /* :: */[0,transl_unbox_float(arg2),0]]]);
         
        case 25:
         return box_float
                 (/* Cop */[11,
                   20,
                   /* :: */[0,
                    transl_unbox_float(arg1),
                    /* :: */[0,transl_unbox_float(arg2),0]]]);
         
        case 27:
         return tag_int
                 (/* Cop */[11,
                   [2,0],
                   /* :: */[0,add_int(transl(arg1),untag_int(transl(arg2))),0]]);
         
        case 29:
         return tag_int
                 (bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return /* Csequence */[12,
                                         make_checkbound
                                          (dbg,/* :: */[0,string_length(str),/* :: */[0,idx,0]]),
                                         /* Cop */[11,[2,0],/* :: */[0,add_int(str,idx),0]]];
                                 });
                      }));
         
        case 32:return transl_isout(transl(arg1),transl(arg2));
        case 33:
         return bind
                 ("index",
                  untag_int(transl(arg2)),
                  function(idx)
                   {return tag_int
                            (/* Cop */[11,
                              7,
                              /* :: */[0,
                               /* Cop */[11,
                                11,
                                /* :: */[0,
                                 /* Cop */[11,
                                  [2,0],
                                  /* :: */[0,
                                   add_int
                                    (transl(arg1),/* Cop */[11,11,/* :: */[0,idx,[0,[0,3],0]]]),
                                   0]],
                                 /* :: */[0,/* Cop */[11,7,/* :: */[0,idx,[0,[0,7],0]]],0]]],
                               [0,[0,1],0]]]);
                    });
         
        }}
    else
     {switch(p[0])
       {case 7:
         var n=p[1];
         
         if(p[2])
          {return return_unit
                   (/* Cop */[11,
                     /* Cextcall */[1,
                      "caml_modify",
                      Cmm["typ_void"],
                      0,
                      Debuginfo["none"]],
                     /* :: */[0,
                      field_address(transl(arg1),n),
                      /* :: */[0,transl(arg2),0]]]);
           }
         else
          {return return_unit(set_field(transl(arg1),n,transl(arg2)));}
         
        case 9:
         var n$1=p[1];
         
         var ptr=transl(arg1);
         
         return return_unit
                 (/* Cop */[11,
                   [3,9],
                   /* :: */[0,
                    (n$1=0)
                     ?ptr
                     :/* Cop */[11,
                       13,
                       /* :: */[0,
                        ptr,
                        /* :: */[0,/* Cconst_int */[0,n$1*Arch["size_float"]],0]]],
                    /* :: */[0,transl_unbox_float(arg2),0]]]);
         
        case 13:
         return tag_int
                 (/* Cop */[11,
                   /* Ccmpi */[4,transl_comparison(p[1])],
                   /* :: */[0,transl(arg1),/* :: */[0,transl(arg2),0]]]);
         
        case 16:
         return tag_int
                 (/* Cop */[11,
                   /* Ccmpf */[6,transl_comparison(p[1])],
                   /* :: */[0,
                    transl_unbox_float(arg1),
                    /* :: */[0,transl_unbox_float(arg2),0]]]);
         
        case 19:
         var kind=p[1];
         
         if(kind!=0)
          {if(kind>=3)
            {return float_array_ref(transl(arg1),transl(arg2));}
           else
            {return addr_array_ref(transl(arg1),transl(arg2));}
           }
         else
          {return bind
                   ("arr",
                    transl(arg1),
                    function(arr)
                     {return bind
                              ("index",
                               transl(arg2),
                               function(idx)
                                {return /* Cifthenelse */[13,
                                         is_addr_array_ptr(arr),
                                         addr_array_ref(arr,idx),
                                         float_array_ref(arr,idx)];
                                 });
                      });
           }
         
        case 21:
         var kind$1=p[1];
         
         if(kind$1!=0)
          {if(kind$1>=3)
            {return box_float
                     (bind
                       ("index",
                        transl(arg2),
                        function(idx)
                         {return bind
                                  ("arr",
                                   transl(arg1),
                                   function(arr)
                                    {return /* Csequence */[12,
                                             make_checkbound
                                              (dbg,
                                               /* :: */[0,
                                                float_array_length(header(arr)),
                                                /* :: */[0,idx,0]]),
                                             unboxed_float_array_ref(arr,idx)];
                                     });
                          }));
             }
           else
            {return bind
                     ("index",
                      transl(arg2),
                      function(idx)
                       {return bind
                                ("arr",
                                 transl(arg1),
                                 function(arr)
                                  {return /* Csequence */[12,
                                           make_checkbound
                                            (dbg,
                                             /* :: */[0,addr_array_length(header(arr)),/* :: */[0,idx,0]]),
                                           addr_array_ref(arr,idx)];
                                   });
                        });
             }
           }
         else
          {return bind
                   ("index",
                    transl(arg2),
                    function(idx)
                     {return bind
                              ("arr",
                               transl(arg1),
                               function(arr)
                                {return bind
                                         ("header",
                                          header(arr),
                                          function(hdr)
                                           {if(wordsize_shift=numfloat_shift)
                                             {return /* Csequence */[12,
                                                      make_checkbound
                                                       (dbg,/* :: */[0,addr_array_length(hdr),/* :: */[0,idx,0]]),
                                                      /* Cifthenelse */[13,
                                                       is_addr_array_hdr(hdr),
                                                       addr_array_ref(arr,idx),
                                                       float_array_ref(arr,idx)]];
                                              }
                                            else
                                             {return /* Cifthenelse */[13,
                                                      is_addr_array_hdr(hdr),
                                                      /* Csequence */[12,
                                                       make_checkbound
                                                        (dbg,/* :: */[0,addr_array_length(hdr),/* :: */[0,idx,0]]),
                                                       addr_array_ref(arr,idx)],
                                                      /* Csequence */[12,
                                                       make_checkbound
                                                        (dbg,/* :: */[0,float_array_length(hdr),/* :: */[0,idx,0]]),
                                                       float_array_ref(arr,idx)]];
                                              }
                                            });
                                 });
                      });
           }
         
        case 27:
         var bi=p[1];
         
         return box_int
                 (bi,
                  /* Cop */[11,
                   1,
                   /* :: */[0,
                    transl_unbox_int(bi,arg1),
                    /* :: */[0,transl_unbox_int(bi,arg2),0]]]);
         
        case 28:
         var bi$1=p[1];
         
         return box_int
                 (bi$1,
                  /* Cop */[11,
                   2,
                   /* :: */[0,
                    transl_unbox_int(bi$1,arg1),
                    /* :: */[0,transl_unbox_int(bi$1,arg2),0]]]);
         
        case 29:
         var bi$2=p[1];
         
         return box_int
                 (bi$2,
                  /* Cop */[11,
                   3,
                   /* :: */[0,
                    transl_unbox_int(bi$2,arg1),
                    /* :: */[0,transl_unbox_int(bi$2,arg2),0]]]);
         
        case 30:
         var bi$3=p[1];
         
         return box_int
                 (bi$3,
                  safe_div_bi
                   (transl_unbox_int(bi$3,arg1),
                    transl_unbox_int(bi$3,arg2),
                    bi$3,
                    dbg));
         
        case 31:
         var bi$4=p[1];
         
         return box_int
                 (bi$4,
                  safe_mod_bi
                   (transl_unbox_int(bi$4,arg1),
                    transl_unbox_int(bi$4,arg2),
                    bi$4,
                    dbg));
         
        case 32:
         var bi$5=p[1];
         
         return box_int
                 (bi$5,
                  /* Cop */[11,
                   7,
                   /* :: */[0,
                    transl_unbox_int(bi$5,arg1),
                    /* :: */[0,transl_unbox_int(bi$5,arg2),0]]]);
         
        case 33:
         var bi$6=p[1];
         
         return box_int
                 (bi$6,
                  /* Cop */[11,
                   8,
                   /* :: */[0,
                    transl_unbox_int(bi$6,arg1),
                    /* :: */[0,transl_unbox_int(bi$6,arg2),0]]]);
         
        case 34:
         var bi$7=p[1];
         
         return box_int
                 (bi$7,
                  /* Cop */[11,
                   9,
                   /* :: */[0,
                    transl_unbox_int(bi$7,arg1),
                    /* :: */[0,transl_unbox_int(bi$7,arg2),0]]]);
         
        case 35:
         var bi$8=p[1];
         
         return box_int
                 (bi$8,
                  /* Cop */[11,
                   10,
                   /* :: */[0,
                    transl_unbox_int(bi$8,arg1),
                    /* :: */[0,untag_int(transl(arg2)),0]]]);
         
        case 36:
         var bi$9=p[1];
         
         return box_int
                 (bi$9,
                  /* Cop */[11,
                   11,
                   /* :: */[0,
                    make_unsigned_int(bi$9,transl_unbox_int(bi$9,arg1)),
                    /* :: */[0,untag_int(transl(arg2)),0]]]);
         
        case 37:
         var bi$10=p[1];
         
         return box_int
                 (bi$10,
                  /* Cop */[11,
                   12,
                   /* :: */[0,
                    transl_unbox_int(bi$10,arg1),
                    /* :: */[0,untag_int(transl(arg2)),0]]]);
         
        case 38:
         var bi$11=p[1];
         
         return tag_int
                 (/* Cop */[11,
                   /* Ccmpi */[4,transl_comparison(p[2])],
                   /* :: */[0,
                    transl_unbox_int(bi$11,arg1),
                    /* :: */[0,transl_unbox_int(bi$11,arg2),0]]]);
         
        case 42:
         var unsafe=p[1];
         
         return tag_int
                 (bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return check_bound
                                         (unsafe,
                                          dbg,
                                          sub_int(string_length(str),[0,1]),
                                          idx,
                                          unaligned_load_16(str,idx));
                                 });
                      }));
         
        case 43:
         var unsafe$1=p[1];
         
         return box_int
                 (1,
                  bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return check_bound
                                         (unsafe$1,
                                          dbg,
                                          sub_int(string_length(str),[0,3]),
                                          idx,
                                          unaligned_load_32(str,idx));
                                 });
                      }));
         
        case 44:
         var unsafe$2=p[1];
         
         return box_int
                 (2,
                  bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return check_bound
                                         (unsafe$2,
                                          dbg,
                                          sub_int(string_length(str),[0,7]),
                                          idx,
                                          unaligned_load_64(str,idx));
                                 });
                      }));
         
        case 48:
         var unsafe$3=p[1];
         
         return tag_int
                 (bind
                   ("ba",
                    transl(arg1),
                    function(ba)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("ba_data",
                                          /* Cop */[11,[2,6],/* :: */[0,field_address(ba,1),0]],
                                          function(ba_data)
                                           {return check_bound
                                                    (unsafe$3,
                                                     dbg,
                                                     sub_int
                                                      (/* Cop */[11,[2,6],/* :: */[0,field_address(ba,5),0]],
                                                       [0,1]),
                                                     idx,
                                                     unaligned_load_16(ba_data,idx));
                                            });
                                 });
                      }));
         
        case 49:
         var unsafe$4=p[1];
         
         return box_int
                 (1,
                  bind
                   ("ba",
                    transl(arg1),
                    function(ba)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("ba_data",
                                          /* Cop */[11,[2,6],/* :: */[0,field_address(ba,1),0]],
                                          function(ba_data)
                                           {return check_bound
                                                    (unsafe$4,
                                                     dbg,
                                                     sub_int
                                                      (/* Cop */[11,[2,6],/* :: */[0,field_address(ba,5),0]],
                                                       [0,3]),
                                                     idx,
                                                     unaligned_load_32(ba_data,idx));
                                            });
                                 });
                      }));
         
        case 50:
         var unsafe$5=p[1];
         
         return box_int
                 (2,
                  bind
                   ("ba",
                    transl(arg1),
                    function(ba)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("ba_data",
                                          /* Cop */[11,[2,6],/* :: */[0,field_address(ba,1),0]],
                                          function(ba_data)
                                           {return check_bound
                                                    (unsafe$5,
                                                     dbg,
                                                     sub_int
                                                      (/* Cop */[11,[2,6],/* :: */[0,field_address(ba,5),0]],
                                                       [0,7]),
                                                     idx,
                                                     unaligned_load_64(ba_data,idx));
                                            });
                                 });
                      }));
         
        default:exit=156;}}
    
    switch(exit){case 156:return Misc["fatal_error"]("Cmmgen.transl_prim_2");}
    };

var
 transl_prim_3=
  function(p,arg1,arg2,arg3,dbg)
   {var exit;
    
    if(typeof p=="number")
     {switch(p)
       {case 28:
         return return_unit
                 (/* Cop */[11,
                   [3,0],
                   /* :: */[0,
                    add_int(transl(arg1),untag_int(transl(arg2))),
                    /* :: */[0,untag_int(transl(arg3)),0]]]);
         
        case 30:
         return return_unit
                 (bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return /* Csequence */[12,
                                         make_checkbound
                                          (dbg,/* :: */[0,string_length(str),/* :: */[0,idx,0]]),
                                         /* Cop */[11,
                                          [3,0],
                                          /* :: */[0,
                                           add_int(str,idx),
                                           /* :: */[0,untag_int(transl(arg3)),0]]]];
                                 });
                      }));
         
        }}
    else
     {switch(p[0])
       {case 20:
         var $js;
         switch(p[1][0])
          {case 0:
            $js=
            bind
             ("newval",
              transl(arg3),
              function(newval)
               {return bind
                        ("index",
                         transl(arg2),
                         function(index)
                          {return bind
                                   ("arr",
                                    transl(arg1),
                                    function(arr)
                                     {return /* Cifthenelse */[13,
                                              is_addr_array_ptr(arr),
                                              addr_array_set(arr,index,newval),
                                              float_array_set(arr,index,unbox_float(newval))];
                                      });
                           });
                });
            
           case 1:$js=addr_array_set(transl(arg1),transl(arg2),transl(arg3));
           case 2:$js=int_array_set(transl(arg1),transl(arg2),transl(arg3));
           case 3:
            $js=
            float_array_set
             (transl(arg1),transl(arg2),transl_unbox_float(arg3));
            
           }
         return return_unit($js);
         
        case 22:
         var $js$1;
         switch(p[1][0])
          {case 0:
            $js$1=
            bind
             ("newval",
              transl(arg3),
              function(newval)
               {return bind
                        ("index",
                         transl(arg2),
                         function(idx)
                          {return bind
                                   ("arr",
                                    transl(arg1),
                                    function(arr)
                                     {return bind
                                              ("header",
                                               header(arr),
                                               function(hdr)
                                                {if(wordsize_shift=numfloat_shift)
                                                  {return /* Csequence */[12,
                                                           make_checkbound
                                                            (dbg,/* :: */[0,addr_array_length(hdr),/* :: */[0,idx,0]]),
                                                           /* Cifthenelse */[13,
                                                            is_addr_array_hdr(hdr),
                                                            addr_array_set(arr,idx,newval),
                                                            float_array_set(arr,idx,unbox_float(newval))]];
                                                   }
                                                 else
                                                  {return /* Cifthenelse */[13,
                                                           is_addr_array_hdr(hdr),
                                                           /* Csequence */[12,
                                                            make_checkbound
                                                             (dbg,/* :: */[0,addr_array_length(hdr),/* :: */[0,idx,0]]),
                                                            addr_array_set(arr,idx,newval)],
                                                           /* Csequence */[12,
                                                            make_checkbound
                                                             (dbg,/* :: */[0,float_array_length(hdr),/* :: */[0,idx,0]]),
                                                            float_array_set(arr,idx,unbox_float(newval))]];
                                                   }
                                                 });
                                      });
                           });
                });
            
           case 1:
            $js$1=
            bind
             ("newval",
              transl(arg3),
              function(newval)
               {return bind
                        ("index",
                         transl(arg2),
                         function(idx)
                          {return bind
                                   ("arr",
                                    transl(arg1),
                                    function(arr)
                                     {return /* Csequence */[12,
                                              make_checkbound
                                               (dbg,
                                                /* :: */[0,addr_array_length(header(arr)),/* :: */[0,idx,0]]),
                                              addr_array_set(arr,idx,newval)];
                                      });
                           });
                });
            
           case 2:
            $js$1=
            bind
             ("newval",
              transl(arg3),
              function(newval)
               {return bind
                        ("index",
                         transl(arg2),
                         function(idx)
                          {return bind
                                   ("arr",
                                    transl(arg1),
                                    function(arr)
                                     {return /* Csequence */[12,
                                              make_checkbound
                                               (dbg,
                                                /* :: */[0,addr_array_length(header(arr)),/* :: */[0,idx,0]]),
                                              int_array_set(arr,idx,newval)];
                                      });
                           });
                });
            
           case 3:
            $js$1=
            bind
             ("newval",
              transl_unbox_float(arg3),
              function(newval)
               {return bind
                        ("index",
                         transl(arg2),
                         function(idx)
                          {return bind
                                   ("arr",
                                    transl(arg1),
                                    function(arr)
                                     {return /* Csequence */[12,
                                              make_checkbound
                                               (dbg,
                                                /* :: */[0,
                                                 float_array_length(header(arr)),
                                                 /* :: */[0,idx,0]]),
                                              float_array_set(arr,idx,newval)];
                                      });
                           });
                });
            
           }
         return return_unit($js$1);
         
        case 45:
         var unsafe=p[1];
         
         return return_unit
                 (bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("newval",
                                          untag_int(transl(arg3)),
                                          function(newval)
                                           {return check_bound
                                                    (unsafe,
                                                     dbg,
                                                     sub_int(string_length(str),[0,1]),
                                                     idx,
                                                     unaligned_set_16(str,idx,newval));
                                            });
                                 });
                      }));
         
        case 46:
         var unsafe$1=p[1];
         
         return return_unit
                 (bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("newval",
                                          transl_unbox_int(1,arg3),
                                          function(newval)
                                           {return check_bound
                                                    (unsafe$1,
                                                     dbg,
                                                     sub_int(string_length(str),[0,3]),
                                                     idx,
                                                     unaligned_set_32(str,idx,newval));
                                            });
                                 });
                      }));
         
        case 47:
         var unsafe$2=p[1];
         
         return return_unit
                 (bind
                   ("str",
                    transl(arg1),
                    function(str)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("newval",
                                          transl_unbox_int(2,arg3),
                                          function(newval)
                                           {return check_bound
                                                    (unsafe$2,
                                                     dbg,
                                                     sub_int(string_length(str),[0,7]),
                                                     idx,
                                                     unaligned_set_64(str,idx,newval));
                                            });
                                 });
                      }));
         
        case 51:
         var unsafe$3=p[1];
         
         return return_unit
                 (bind
                   ("ba",
                    transl(arg1),
                    function(ba)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("newval",
                                          untag_int(transl(arg3)),
                                          function(newval)
                                           {return bind
                                                    ("ba_data",
                                                     /* Cop */[11,[2,6],/* :: */[0,field_address(ba,1),0]],
                                                     function(ba_data)
                                                      {return check_bound
                                                               (unsafe$3,
                                                                dbg,
                                                                sub_int
                                                                 (/* Cop */[11,[2,6],/* :: */[0,field_address(ba,5),0]],
                                                                  [0,1]),
                                                                idx,
                                                                unaligned_set_16(ba_data,idx,newval));
                                                       });
                                            });
                                 });
                      }));
         
        case 52:
         var unsafe$4=p[1];
         
         return return_unit
                 (bind
                   ("ba",
                    transl(arg1),
                    function(ba)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("newval",
                                          transl_unbox_int(1,arg3),
                                          function(newval)
                                           {return bind
                                                    ("ba_data",
                                                     /* Cop */[11,[2,6],/* :: */[0,field_address(ba,1),0]],
                                                     function(ba_data)
                                                      {return check_bound
                                                               (unsafe$4,
                                                                dbg,
                                                                sub_int
                                                                 (/* Cop */[11,[2,6],/* :: */[0,field_address(ba,5),0]],
                                                                  [0,3]),
                                                                idx,
                                                                unaligned_set_32(ba_data,idx,newval));
                                                       });
                                            });
                                 });
                      }));
         
        case 53:
         var unsafe$5=p[1];
         
         return return_unit
                 (bind
                   ("ba",
                    transl(arg1),
                    function(ba)
                     {return bind
                              ("index",
                               untag_int(transl(arg2)),
                               function(idx)
                                {return bind
                                         ("newval",
                                          transl_unbox_int(2,arg3),
                                          function(newval)
                                           {return bind
                                                    ("ba_data",
                                                     /* Cop */[11,[2,6],/* :: */[0,field_address(ba,1),0]],
                                                     function(ba_data)
                                                      {return check_bound
                                                               (unsafe$5,
                                                                dbg,
                                                                sub_int
                                                                 (/* Cop */[11,[2,6],/* :: */[0,field_address(ba,5),0]],
                                                                  [0,7]),
                                                                idx,
                                                                unaligned_set_64(ba_data,idx,newval));
                                                       });
                                            });
                                 });
                      }));
         
        default:exit=157;}}
    
    switch(exit){case 157:return Misc["fatal_error"]("Cmmgen.transl_prim_3");}
    };

var
 transl_unbox_float=
  function(exp)
   {var exit;
    
    switch(exp)
     {case 1:
       var match=exp[1];
       
       switch(match)
        {case 0:
          var match$1=match[2];
          
          switch(match$1)
           {case 0:return /* Cconst_float */[2,match$1[1]];default:exit=158;}
          
         case 1:exit=158;
         case 2:exit=158;
         }
       
      default:exit=158;}
    
    switch(exit){case 158:return unbox_float(transl(exp));}
    };

var
 transl_unbox_int=
  function(bi,exp)
   {var exit;
    
    switch(exp)
     {case 1:
       var match=exp[1];
       
       switch(match)
        {case 0:
          var match$1=match[2];
          
          switch(match$1)
           {case 1:
             return /* Cconst_natint */[1,
                     "unknown primitive:nativeint_of_int32"];
             
            case 2:
             if(Arch["size_int"]=8)
              {}
             else
              {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",2032,6]];}
             
             return /* Cconst_natint */[1,
                     "unknown primitive:nativeint_of_int64"];
             
            case 3:return /* Cconst_natint */[1,match$1[1]];
            default:exit=159;}
          
         case 1:exit=159;
         case 2:exit=159;
         }
       
      case 8:
       var match$2=exp[1];
       
       if(typeof match$2=="number")
        {switch(match$2){}}
       else
        {switch(match$2[0])
          {case 23:
            var match$3=exp[2];
            
            if(match$3)
             {var match$4=match$3[1];
              
              switch(match$4)
               {case 1:
                 var match$5=match$4[1];
                 
                 switch(match$5)
                  {case 0:exit=159;
                   case 1:
                    if(match$3[2])
                     {exit=159;}
                    else
                     {if("unknown primitive:caml_equal")
                       {return /* Cconst_int */[0,match$5[1]];}
                      else
                       {exit=159;}
                      }
                    
                   case 2:exit=159;
                   }
                 
                default:exit=159;}
              }
            else
             {exit=159;}
            
           default:exit=159;}}
       
      default:exit=159;}
    
    switch(exit){case 159:return unbox_int(bi,transl(exp));}
    };

var
 transl_unbox_let=
  function(box_fn,unbox_fn,transl_unbox_fn,box_chunk,box_offset,id,exp,body)
   {var unboxed_id=Ident["create"](Ident["name"](id));
    
    var trbody1=transl(body);
    
    var
     match=
      subst_boxed_number(unbox_fn,id,unboxed_id,box_chunk,box_offset,trbody1);
    
    var need_boxed=match[2];
    
    var trbody2=match[1];
    
    if(need_boxed&&match[3])
     {return /* Clet */[8,id,transl(exp),trbody1];}
    else
     {return /* Clet */[8,
              unboxed_id,
              transl_unbox_fn(exp),
              need_boxed
               ?/* Clet */[8,id,box_fn(/* Cvar */[7,unboxed_id]),trbody2]
               :trbody2];
      }
    };

var
 make_catch$1=
  function(ncatch,body,handler)
   {var exit;
    
    switch(body)
     {case 17:
       if(body[2])
        {exit=163;}
       else
        {if(body[1]=ncatch){return handler;}else{exit=163;}}
       
      default:exit=163;}
    
    switch(exit){case 163:return /* Ccatch */[16,ncatch,0,body,handler];}
    };

var
 make_catch2=
  function(mk_body,handler)
   {var exit;
    
    switch(handler)
     {case 0:exit=165;
      case 4:exit=165;
      case 10:if(handler[1]){exit=166;}else{exit=165;}
      case 17:if(handler[2]){exit=166;}else{exit=165;}
      default:exit=166;}
    
    switch(exit)
     {case 166:
       var nfail=Lambda["next_raise_count"](0);
       
       return make_catch$1(nfail,mk_body(/* Cexit */[17,nfail,0]),handler);
       
      case 165:return mk_body(handler);
      }
    };

var
 exit_if_true=
  function(cond,nfail,otherwise)
   {var exit;
    
    switch(cond)
     {case 1:
       var match=cond[1];
       
       switch(match)
        {case 0:exit=169;
         case 1:exit=169;
         case 2:
          var match$1=match[1];
          
          if(match$1!=0)
           {if(match$1!=1){exit=169;}else{return /* Cexit */[17,nfail,0];}}
          else
           {return otherwise;}
          
         }
       
      case 8:
       var match$2=cond[1];
       
       if("unknown primitive:isint")
        {if(match$2>=6)
          {exit=169;}
         else
          {switch(match$2[0])
            {case 0:exit=169;
             case 1:exit=169;
             case 2:exit=169;
             case 3:
              var exit$1;
              
              switch(otherwise)
               {case 17:
                 if(otherwise[2])
                  {exit$1=168;}
                 else
                  {return exit_if_false
                           (cond,/* Cexit */[17,nfail,0],otherwise[1]);
                   }
                 
                default:exit$1=168;}
              
              switch(exit$1)
               {case 168:
                 var raise_num=Lambda["next_raise_count"](0);
                 
                 return make_catch$1
                         (raise_num,
                          exit_if_false(cond,/* Cexit */[17,nfail,0],raise_num),
                          otherwise);
                 
                }
              
             case 4:
              var match$3=cond[2];
              
              if(match$3)
               {var match$4=match$3[2];
                
                if(match$4)
                 {if(match$4[2])
                   {exit=169;}
                  else
                   {return exit_if_true
                            (match$3[1],nfail,exit_if_true(match$4[1],nfail,otherwise));
                    }
                  }
                else
                 {exit=169;}
                }
              else
               {exit=169;}
              
             case 5:
              var match$5=cond[2];
              
              if(match$5)
               {if(match$5[2])
                 {exit=169;}
                else
                 {return exit_if_false(match$5[1],otherwise,nfail);}
                }
              else
               {exit=169;}
              
             }
           }
         }
       else
        {exit=169;}
       
      case 14:
       var ifnot=cond[3];
       
       var ifso=cond[2];
       
       var cond$1=cond[1];
       
       return make_catch2
               (function(shared)
                 {return /* Cifthenelse */[13,
                          test_bool(transl(cond$1)),
                          exit_if_true(ifso,nfail,shared),
                          exit_if_true(ifnot,nfail,shared)];
                  },
                otherwise);
       
      default:exit=169;}
    
    switch(exit)
     {case 169:
       return /* Cifthenelse */[13,
               test_bool(transl(cond)),
               /* Cexit */[17,nfail,0],
               otherwise];
       
      }
    };

var
 exit_if_false=
  function(cond,otherwise,nfail)
   {var exit;
    
    switch(cond)
     {case 1:
       var match=cond[1];
       
       switch(match)
        {case 0:exit=172;
         case 1:exit=172;
         case 2:
          var match$1=match[1];
          
          if(match$1!=0)
           {if(match$1!=1){exit=172;}else{return otherwise;}}
          else
           {return /* Cexit */[17,nfail,0];}
          
         }
       
      case 8:
       var match$2=cond[1];
       
       if("unknown primitive:isint")
        {if(match$2>=6)
          {exit=172;}
         else
          {switch(match$2[0])
            {case 0:exit=172;
             case 1:exit=172;
             case 2:exit=172;
             case 3:
              var match$3=cond[2];
              
              if(match$3)
               {var match$4=match$3[2];
                
                if(match$4)
                 {if(match$4[2])
                   {exit=172;}
                  else
                   {return exit_if_false
                            (match$3[1],exit_if_false(match$4[1],otherwise,nfail),nfail);
                    }
                  }
                else
                 {exit=172;}
                }
              else
               {exit=172;}
              
             case 4:
              var exit$1;
              
              switch(otherwise)
               {case 17:
                 if(otherwise[2])
                  {exit$1=171;}
                 else
                  {return exit_if_true
                           (cond,otherwise[1],/* Cexit */[17,nfail,0]);
                   }
                 
                default:exit$1=171;}
              
              switch(exit$1)
               {case 171:
                 var raise_num=Lambda["next_raise_count"](0);
                 
                 return make_catch$1
                         (raise_num,
                          exit_if_true(cond,raise_num,/* Cexit */[17,nfail,0]),
                          otherwise);
                 
                }
              
             case 5:
              var match$5=cond[2];
              
              if(match$5)
               {if(match$5[2])
                 {exit=172;}
                else
                 {return exit_if_true(match$5[1],nfail,otherwise);}
                }
              else
               {exit=172;}
              
             }
           }
         }
       else
        {exit=172;}
       
      case 14:
       var ifnot=cond[3];
       
       var ifso=cond[2];
       
       var cond$1=cond[1];
       
       return make_catch2
               (function(shared)
                 {return /* Cifthenelse */[13,
                          test_bool(transl(cond$1)),
                          exit_if_false(ifso,shared,nfail),
                          exit_if_false(ifnot,shared,nfail)];
                  },
                otherwise);
       
      default:exit=172;}
    
    switch(exit)
     {case 172:
       return /* Cifthenelse */[13,
               test_bool(transl(cond)),
               otherwise,
               /* Cexit */[17,nfail,0]];
       
      }
    };

var
 transl_switch=
  function(arg,index,cases)
   {var match=cases["length"];
    
    if(match!=0)
     {if(match!=1)
       {var cases$1=$$Array["map"](transl,cases);
        
        var store=StoreExp[1](0);
        
        var
         index$1=
          $$Array["map"](function(j){return store[3](cases$1[j]);},index);
        
        var n_index=index$1["length"];
        
        var inters=0;
        
        var this_high=n_index-1;
        
        var this_low=n_index-1;
        
        var this_act=index$1[n_index-1];
        
        for(var i=n_index-2;i>=0;i--)
         {var act=index$1[i];
          
          if(act=this_act)
           {this_low=-1+this_low;}
          else
           {inters=
            /* :: */[0,/* tuple */[0,this_low,this_high,this_act],inters];
            
            this_high=i;
            
            this_low=i;
            
            this_act=act;
            }
          }
        
        inters=/* :: */[0,/* tuple */[0,0,this_high,this_act],inters];
        
        var inters$1=inters;
        
        var exit;
        
        if(inters$1)
         {if(inters$1[2]){exit=173;}else{return cases$1[0];}}
        else
         {exit=173;}
        
        switch(exit)
         {case 173:
           return bind
                   ("switcher",
                    arg,
                    function(a)
                     {return SwitcherBlocks[1]
                              (/* tuple */[0,0,n_index-1],
                               a,
                               $$Array["of_list"](inters$1),
                               store);
                      });
           
          }
        }
      else
       {return transl(cases[0]);}
      }
    else
     {return Misc["fatal_error"]("Cmmgen.transl_switch");}
    };

var
 transl_letrec=
  function(bindings,cont)
   {var
     bsz=
      List["map"]
       (function(param)
         {var exp=param[2];
          
          return /* tuple */[0,param[1],exp,expr_size(Ident["empty"],exp)];
          },
        bindings);
    
    var
     op_alloc=
      function(prim,sz)
       {return /* Cop */[11,
                /* Cextcall */[1,prim,Cmm["typ_addr"],1,Debuginfo["none"]],
                /* :: */[0,int_const(sz),0]];
        };
    
    var
     init_blocks=
      function(param)
       {if(param)
         {var match=param[1];
          
          var match$1=match[3];
          
          var id=match[1];
          
          if(typeof match$1=="number")
           {switch(match$1)
             {case 0:return /* Clet */[8,id,[0,0],init_blocks(param[2])];}}
          else
           {switch(match$1[0])
             {case 0:
               return /* Clet */[8,
                       id,
                       op_alloc("caml_alloc_dummy",match$1[1]),
                       init_blocks(param[2])];
               
              case 1:
               return /* Clet */[8,
                       id,
                       op_alloc("caml_alloc_dummy_float",match$1[1]),
                       init_blocks(param[2])];
               
              }}
          }
        else
         {return fill_nonrec(bsz);}
        };
    
    var
     fill_nonrec=
      function(param)
       {if(param)
         {var match=param[1];
          
          if("unknown primitive:isint")
           {return /* Clet */[8,
                    match[1],
                    transl(match[2]),
                    fill_nonrec(param[2])];
            }
          else
           {return fill_nonrec(param[2]);}
          }
        else
         {return fill_blocks(bsz);}
        };
    
    var
     fill_blocks=
      function(param)
       {if(param)
         {var match=param[1];
          
          if("unknown primitive:isint")
           {return fill_blocks(param[2]);}
          else
           {var
             op=
              /* Cop */[11,
               /* Cextcall */[1,
                "caml_update_dummy",
                Cmm["typ_void"],
                0,
                Debuginfo["none"]],
               /* :: */[0,
                /* Cvar */[7,match[1]],
                /* :: */[0,transl(match[2]),0]]];
            
            return /* Csequence */[12,op,fill_blocks(param[2])];
            }
          }
        else
         {return cont;}
        };
    
    return init_blocks(bsz);
    };

var
 transl_function=
  function(f)
   {return /* Cfunction */[0,
            /* record */[0,
             f[1],
             List["map"]
              (function(id){return /* tuple */[0,id,Cmm["typ_addr"]];},f[3]),
             transl(f[4]),
             Clflags["optimize_for_speed"][1],
             f[5]]];
    };

var compare=function(x,y){return "unknown primitive:caml_string_compare";};

var StringSet=Set["Make"]([0,compare]);

var
 transl_all_functions=
  function(already_translated,cont)
   {try
     {var f=Queue["take"](functions);
      
      if(StringSet[3](f[1],already_translated))
       {return transl_all_functions(already_translated,cont);}
      else
       {return transl_all_functions
                (StringSet[4](f[1],already_translated),
                 /* :: */[0,transl_function(f),cont]);
        }
      }
    catch(exn){if(exn=Queue["Empty"]){return cont;}else{throw exn;}}
    };

var
 emit_structured_constant=
  function(symb,cst,cont)
   {var
     emit_block=
      function(white_header,symb$1,cont$1)
       {var black_header=white_header|caml_black;
        
        return /* :: */[0,
                /* Cint */[6,black_header],
                /* :: */[0,/* Cdefine_symbol */[0,symb$1],cont$1]];
        };
    
    switch(cst)
     {case 0:
       return emit_block
               (float_header,symb,/* :: */[0,/* Cdouble */[8,cst[1]],cont]);
       
      case 1:
       return emit_block
               (boxedint32_header,symb,emit_boxed_int32_constant(cst[1],cont));
       
      case 2:
       return emit_block
               (boxedint64_header,symb,emit_boxed_int64_constant(cst[1],cont));
       
      case 3:
       return emit_block
               (boxedintnat_header,
                symb,
                emit_boxed_nativeint_constant(cst[1],cont));
       
      case 4:
       var csts=cst[2];
       
       var cont$1=List["fold_right"](emit_constant,csts,cont);
       
       return emit_block
               (block_header(cst[1],List["length"](csts)),symb,cont$1);
       
      case 5:
       var fields=cst[1];
       
       return emit_block
               (floatarray_header(List["length"](fields)),
                symb,
                Misc["map_end"]
                 (function(f){return /* Cdouble */[8,f];},fields,cont));
       
      case 6:
       var s=cst[1];
       
       return emit_block
               (string_header(s["length"]),symb,emit_string_constant(s,cont));
       
      }
    };

var
 emit_constant=
  function(cst,cont)
   {var exit;
    
    switch(cst)
     {case 0:return /* :: */[0,/* Csymbol_address */[9,cst[1]],cont];
      case 1:exit=100;
      case 2:exit=100;
      }
    
    switch(exit)
     {case 100:return /* :: */[0,/* Cint */[6,(cst[1]<<1)+1],cont];}
    };

var
 emit_string_constant=
  function(s,cont)
   {var n=Arch["size_int"]-1-s["length"]%Arch["size_int"];
    
    return /* :: */[0,
            /* Cstring */[11,s],
            /* :: */[0,/* Cskip */[12,n],/* :: */[0,/* Cint8 */[3,n],cont]]];
    };

var
 emit_boxed_int32_constant=
  function(n,cont)
   {var n$1="unknown primitive:nativeint_of_int32";
    
    if(Arch["size_int"]=8)
     {return /* :: */[0,
              [9,"caml_int32_ops"],
              /* :: */[0,/* Cint32 */[5,n$1],/* :: */[0,[5,0],cont]]];
      }
    else
     {return /* :: */[0,
              [9,"caml_int32_ops"],
              /* :: */[0,/* Cint */[6,n$1],cont]];
      }
    };

var
 emit_boxed_nativeint_constant=
  function(n,cont)
   {return /* :: */[0,
            [9,"caml_nativeint_ops"],
            /* :: */[0,/* Cint */[6,n],cont]];
    };

var
 emit_boxed_int64_constant=
  function(n,cont)
   {var lo="unknown primitive:nativeint_of_int64";
    
    if(Arch["size_int"]=8)
     {return /* :: */[0,
              [9,"caml_int64_ops"],
              /* :: */[0,/* Cint */[6,lo],cont]];
      }
    else
     {var hi="unknown primitive:nativeint_of_int64";
      
      if(Arch["big_endian"])
       {return /* :: */[0,
                [9,"caml_int64_ops"],
                /* :: */[0,/* Cint */[6,hi],/* :: */[0,/* Cint */[6,lo],cont]]];
        }
      else
       {return /* :: */[0,
                [9,"caml_int64_ops"],
                /* :: */[0,/* Cint */[6,lo],/* :: */[0,/* Cint */[6,hi],cont]]];
        }
      }
    };

var
 emit_constant_closure=
  function(symb,fundecls,cont)
   {if(fundecls)
     {var remainder=fundecls[2];
      
      var f1=fundecls[1];
      
      var
       emit_others=
        function(pos,param)
         {if(param)
           {var rem=param[2];
            
            var f2=param[1];
            
            if(f2[2]=1)
             {return /* :: */[0,
                      /* Cint */[6,infix_header(pos)],
                      /* :: */[0,
                       /* Csymbol_address */[9,f2[1]],
                       /* :: */[0,[6,3],emit_others(pos+3,rem)]]];
              }
            else
             {return /* :: */[0,
                      /* Cint */[6,infix_header(pos)],
                      /* :: */[0,
                       /* Csymbol_address */[9,curry_function(f2[2])],
                       /* :: */[0,
                        /* Cint */[6,(f2[2]<<1)+1],
                        /* :: */[0,
                         /* Csymbol_address */[9,f2[1]],
                         emit_others(pos+4,rem)]]]];
              }
            }
          else
           {return cont;}
          };
      
      return /* :: */[0,
              /* Cint */[6,black_closure_header(fundecls_size(fundecls))],
              /* :: */[0,
               /* Cdefine_symbol */[0,symb],
               (f1[2]=1)
                ?/* :: */[0,
                  /* Csymbol_address */[9,f1[1]],
                  /* :: */[0,[6,3],emit_others(3,remainder)]]
                :/* :: */[0,
                  /* Csymbol_address */[9,curry_function(f1[2])],
                  /* :: */[0,
                   /* Cint */[6,(f1[2]<<1)+1],
                   /* :: */[0,
                    /* Csymbol_address */[9,f1[1]],
                    emit_others(4,remainder)]]]]];
      }
    else
     {throw [0,Assert_failure,[0,"asmcomp/cmmgen.ml",2291,10]];}
    };

var
 emit_all_constants=
  function(cont)
   {var c=[0,cont];
    
    List["iter"]
     (function(param)
       {var lbl=param[1];
        
        var cst=emit_structured_constant(lbl,param[3],0);
        
        if(param[2])
         {var cst$1=/* :: */[0,/* Cglobal_symbol */[2,lbl],cst];}
        else
         {var cst$1=cst;}
        
        return c[1]=/* :: */[0,/* Cdata */[1,cst$1],c[1]],0;
        },
      Compilenv["structured_constants"](0));
    List["iter"]
     (function(param)
       {return c[1]=
               /* :: */[0,
                /* Cdata */[1,emit_constant_closure(param[1],param[2],0)],
                c[1]],
               0;
        },
      constant_closures[1]);
    constant_closures[1]=0,0;
    return c[1];
    };

var
 compunit=
  function(size,ulam)
   {var glob=Compilenv["make_symbol"](0,0);
    
    var init_code=transl(ulam);
    
    var
     c1=
      /* :: */[0,
       /* Cfunction */[0,
        /* record */[0,
         Compilenv["make_symbol"](0,[0,"entry"]),
         0,
         init_code,
         0,
         Debuginfo["none"]]],
       0];
    
    var c2=transl_all_functions(StringSet[1],c1);
    
    var c3=emit_all_constants(c2);
    
    var
     space=
      $$Array["to_list"]
       ($$Array["init"](size,function(_index){return /* Cint */[6,1];}));
    
    return /* :: */[0,
            /* Cdata */[1,
             Pervasives["@"]
              (/* :: */[0,
                /* Cint */[6,black_block_header(0,size)],
                /* :: */[0,
                 /* Cglobal_symbol */[2,glob],
                 /* :: */[0,/* Cdefine_symbol */[0,glob],0]]],
               space)],
            c3];
    };

var
 cache_public_method=
  function(meths,tag,cache)
   {var raise_num=Lambda["next_raise_count"](0);
    
    var li=Ident["create"]("li");
    
    var hi=Ident["create"]("hi");
    
    var mi=Ident["create"]("mi");
    
    var tagged=Ident["create"]("tagged");
    
    return /* Clet */[8,
            li,
            [0,3],
            /* Clet */[8,
             hi,
             /* Cop */[11,[2,6],/* :: */[0,meths,0]],
             /* Csequence */[12,
              /* Ccatch */[16,
               raise_num,
               0,
               /* Cloop */[15,
                /* Clet */[8,
                 mi,
                 /* Cop */[11,
                  8,
                  /* :: */[0,
                   /* Cop */[11,
                    11,
                    /* :: */[0,
                     /* Cop */[11,
                      1,
                      /* :: */[0,/* Cvar */[7,li],/* :: */[0,/* Cvar */[7,hi],0]]],
                     [0,[0,1],0]]],
                   [0,[0,1],0]]],
                 /* Csequence */[12,
                  /* Cifthenelse */[13,
                   /* Cop */[11,
                    [4,2],
                    /* :: */[0,
                     tag,
                     /* :: */[0,
                      /* Cop */[11,
                       [2,6],
                       /* :: */[0,
                        /* Cop */[11,
                         13,
                         /* :: */[0,
                          meths,
                          /* :: */[0,lsl_const(/* Cvar */[7,mi],log2_size_addr),0]]],
                        0]],
                      0]]],
                   /* Cassign */[9,
                    hi,
                    /* Cop */[11,2,/* :: */[0,/* Cvar */[7,mi],[0,[0,2],0]]]],
                   /* Cassign */[9,li,/* Cvar */[7,mi]]],
                  /* Cifthenelse */[13,
                   /* Cop */[11,
                    [4,5],
                    /* :: */[0,/* Cvar */[7,li],/* :: */[0,/* Cvar */[7,hi],0]]],
                   /* Cexit */[17,raise_num,0],
                   [10,0]]]]],
               [10,0]],
              /* Clet */[8,
               tagged,
               /* Cop */[11,
                13,
                /* :: */[0,
                 lsl_const(/* Cvar */[7,li],log2_size_addr),
                 /* :: */[0,/* Cconst_int */[0,1-3*Arch["size_addr"]],0]]],
               /* Csequence */[12,
                /* Cop */[11,
                 [3,6],
                 /* :: */[0,cache,/* :: */[0,/* Cvar */[7,tagged],0]]],
                /* Cvar */[7,tagged]]]]]];
    };

var
 apply_function_body=
  function(arity)
   {var arg="unknown primitive:caml_make_vect";
    
    for(var i=1;i<=arity-1;i++){arg[i]=Ident["create"]("arg"),0}
    
    var clos=Ident["create"]("clos");
    
    var
     app_fun=
      function(clos$1,n)
       {if(n=arity-1)
         {return /* Cop */[11,
                  /* Capply */[0,Cmm["typ_addr"],Debuginfo["none"]],
                  /* :: */[0,
                   get_field(/* Cvar */[7,clos$1],0),
                   /* :: */[0,
                    /* Cvar */[7,arg[n]],
                    /* :: */[0,/* Cvar */[7,clos$1],0]]]];
          }
        else
         {var newclos=Ident["create"]("clos");
          
          return /* Clet */[8,
                  newclos,
                  /* Cop */[11,
                   /* Capply */[0,Cmm["typ_addr"],Debuginfo["none"]],
                   /* :: */[0,
                    get_field(/* Cvar */[7,clos$1],0),
                    /* :: */[0,
                     /* Cvar */[7,arg[n]],
                     /* :: */[0,/* Cvar */[7,clos$1],0]]]],
                  app_fun(newclos,n+1)];
          }
        };
    
    var args=$$Array["to_list"](arg);
    
    var all_args=Pervasives["@"](args,/* :: */[0,clos,0]);
    
    return /* tuple */[0,
            args,
            clos,
            (arity=1)
             ?app_fun(clos,0)
             :/* Cifthenelse */[13,
               /* Cop */[11,
                [4,0],
                /* :: */[0,
                 get_field(/* Cvar */[7,clos],1),
                 /* :: */[0,int_const(arity),0]]],
               /* Cop */[11,
                /* Capply */[0,Cmm["typ_addr"],Debuginfo["none"]],
                /* :: */[0,
                 get_field(/* Cvar */[7,clos],2),
                 List["map"](function(s){return /* Cvar */[7,s];},all_args)]],
               app_fun(clos,0)]];
    };

var
 send_function=
  function(arity)
   {var match=apply_function_body(1+arity);
    
    var args=match[1];
    
    var cache=Ident["create"]("cache");
    
    var obj=List["hd"](args);
    
    var tag=Ident["create"]("tag");
    
    var cache$1=/* Cvar */[7,cache];
    
    var obj$1=/* Cvar */[7,obj];
    
    var tag$1=/* Cvar */[7,tag];
    
    var meths=Ident["create"]("meths");
    
    var cached=Ident["create"]("cached");
    
    var real=Ident["create"]("real");
    
    var mask=get_field(/* Cvar */[7,meths],1);
    
    var cached_pos=/* Cvar */[7,cached];
    
    var
     tag_pos=
      /* Cop */[11,
       13,
       /* :: */[0,
        /* Cop */[11,
         13,
         /* :: */[0,cached_pos,/* :: */[0,/* Cvar */[7,meths],0]]],
        /* :: */[0,/* Cconst_int */[0,3*Arch["size_addr"]-1],0]]];
    
    var tag$prime=/* Cop */[11,[2,6],/* :: */[0,tag_pos,0]];
    
    var
     clos=
      /* Clet */[8,
       meths,
       /* Cop */[11,[2,6],/* :: */[0,obj$1,0]],
       /* Clet */[8,
        cached,
        /* Cop */[11,
         7,
         /* :: */[0,
          /* Cop */[11,[2,6],/* :: */[0,cache$1,0]],
          /* :: */[0,mask,0]]],
        /* Clet */[8,
         real,
         /* Cifthenelse */[13,
          /* Cop */[11,[5,1],/* :: */[0,tag$prime,/* :: */[0,tag$1,0]]],
          cache_public_method(/* Cvar */[7,meths],tag$1,cache$1),
          cached_pos],
         /* Cop */[11,
          [2,6],
          /* :: */[0,
           /* Cop */[11,
            13,
            /* :: */[0,
             /* Cop */[11,
              13,
              /* :: */[0,/* Cvar */[7,real],/* :: */[0,/* Cvar */[7,meths],0]]],
             /* :: */[0,/* Cconst_int */[0,2*Arch["size_addr"]-1],0]]],
           0]]]]];
    
    var body=/* Clet */[8,match[2],clos,match[3]];
    
    var
     fun_args=
      Pervasives["@"]
       (/* :: */[0,
         /* tuple */[0,obj,Cmm["typ_addr"]],
         /* :: */[0,
          /* tuple */[0,tag,Cmm["typ_int"]],
          /* :: */[0,/* tuple */[0,cache,Cmm["typ_addr"]],0]]],
        List["map"]
         (function(id){return /* tuple */[0,id,Cmm["typ_addr"]];},
          List["tl"](args)));
    
    return /* Cfunction */[0,
            /* record */[0,
             Pervasives["^"]("caml_send",Pervasives["string_of_int"](arity)),
             fun_args,
             body,
             1,
             Debuginfo["none"]]];
    };

var
 apply_function$1=
  function(arity)
   {var match=apply_function_body(arity);
    
    var all_args=Pervasives["@"](match[1],/* :: */[0,match[2],0]);
    
    return /* Cfunction */[0,
            /* record */[0,
             Pervasives["^"]("caml_apply",Pervasives["string_of_int"](arity)),
             List["map"]
              (function(id){return /* tuple */[0,id,Cmm["typ_addr"]];},
               all_args),
             match[3],
             1,
             Debuginfo["none"]]];
    };

var
 tuplify_function=
  function(arity)
   {var arg=Ident["create"]("arg");
    
    var clos=Ident["create"]("clos");
    
    var
     access_components=
      function(i)
       {if(i>=arity)
         {return 0;}
        else
         {return /* :: */[0,
                  get_field(/* Cvar */[7,arg],i),
                  access_components(i+1)];
          }
        };
    
    return /* Cfunction */[0,
            /* record */[0,
             Pervasives["^"]
              ("caml_tuplify",Pervasives["string_of_int"](arity)),
             /* :: */[0,
              /* tuple */[0,arg,Cmm["typ_addr"]],
              /* :: */[0,/* tuple */[0,clos,Cmm["typ_addr"]],0]],
             /* Cop */[11,
              /* Capply */[0,Cmm["typ_addr"],Debuginfo["none"]],
              Pervasives["@"]
               (/* :: */[0,
                 get_field(/* Cvar */[7,clos],2),
                 access_components(0)],
                /* :: */[0,/* Cvar */[7,clos],0])],
             1,
             Debuginfo["none"]]];
    };

var max_arity_optimized=15;

var
 final_curry_function=
  function(arity)
   {var last_arg=Ident["create"]("arg");
    
    var last_clos=Ident["create"]("clos");
    
    var
     curry_fun=
      function(args,clos,n)
       {if(n=0)
         {return /* Cop */[11,
                  /* Capply */[0,Cmm["typ_addr"],Debuginfo["none"]],
                  Pervasives["@"]
                   (/* :: */[0,get_field(/* Cvar */[7,clos],2),args],
                    /* :: */[0,
                     /* Cvar */[7,last_arg],
                     /* :: */[0,/* Cvar */[7,clos],0]])];
          }
        else
         {if((n=arity-1)||arity>max_arity_optimized)
           {var newclos=Ident["create"]("clos");
            
            return /* Clet */[8,
                    newclos,
                    get_field(/* Cvar */[7,clos],3),
                    curry_fun
                     (/* :: */[0,get_field(/* Cvar */[7,clos],2),args],
                      newclos,
                      n-1)];
            }
          else
           {var newclos$1=Ident["create"]("clos");
            
            return /* Clet */[8,
                    newclos$1,
                    get_field(/* Cvar */[7,clos],4),
                    curry_fun
                     (/* :: */[0,get_field(/* Cvar */[7,clos],3),args],
                      newclos$1,
                      n-1)];
            }
          }
        };
    
    return /* Cfunction */[0,
            /* record */[0,
             Pervasives["^"]
              ("caml_curry",
               Pervasives["^"]
                (Pervasives["string_of_int"](arity),
                 Pervasives["^"]("_",Pervasives["string_of_int"](arity-1)))),
             /* :: */[0,
              /* tuple */[0,last_arg,Cmm["typ_addr"]],
              /* :: */[0,/* tuple */[0,last_clos,Cmm["typ_addr"]],0]],
             curry_fun(0,last_clos,arity-1),
             1,
             Debuginfo["none"]]];
    };

var
 intermediate_curry_functions=
  function(arity,num)
   {if(num=arity-1)
     {return /* :: */[0,final_curry_function(arity),0];}
    else
     {var
       name1=
        Pervasives["^"]("caml_curry",Pervasives["string_of_int"](arity));
      
      if(num=0)
       {var name2=name1;}
      else
       {var
         name2=
          Pervasives["^"]
           (name1,Pervasives["^"]("_",Pervasives["string_of_int"](num)));
        }
      
      var arg=Ident["create"]("arg");
      
      var clos=Ident["create"]("clos");
      
      if(arity<=max_arity_optimized&&arity-num>2)
       {var
         iter=
          function(i)
           {if(i<=arity)
             {var
               arg$1=
                Ident["create"]
                 (Printf["sprintf"]([0,[11,"arg",[4,0,0,0,0]],"arg%d"],i));
              
              return /* :: */[0,
                      /* tuple */[0,arg$1,Cmm["typ_addr"]],
                      iter(i+1)];
              }
            else
             {return 0;}
            };
        
        var direct_args=iter(num+2);
        
        var
         iter$1=
          function(i,args,clos$1)
           {if(i=0)
             {return /* Cop */[11,
                      /* Capply */[0,Cmm["typ_addr"],Debuginfo["none"]],
                      Pervasives["@"]
                       (/* :: */[0,get_field(/* Cvar */[7,clos$1],2),args],
                        /* :: */[0,/* Cvar */[7,clos$1],0])];
              }
            else
             {var newclos=Ident["create"]("clos");
              
              return /* Clet */[8,
                      newclos,
                      get_field(/* Cvar */[7,clos$1],4),
                      iter$1
                       (i-1,
                        /* :: */[0,get_field(/* Cvar */[7,clos$1],3),args],
                        newclos)];
              }
            };
        
        var
         cf=
          /* Cfunction */[0,
           /* record */[0,
            Pervasives["^"]
             (name1,
              Pervasives["^"]
               ("_",
                Pervasives["^"](Pervasives["string_of_int"](num+1),"_app"))),
            Pervasives["@"]
             (direct_args,/* :: */[0,/* tuple */[0,clos,Cmm["typ_addr"]],0]),
            iter$1
             (num+1,
              List["map"]
               (function(param){return /* Cvar */[7,param[1]];},direct_args),
              clos),
            1,
            Debuginfo["none"]]];
        
        var $js=/* :: */[0,cf,intermediate_curry_functions(arity,num+1)];
        }
      else
       {var $js=intermediate_curry_functions(arity,num+1);}
      return /* :: */[0,
              /* Cfunction */[0,
               /* record */[0,
                name2,
                /* :: */[0,
                 /* tuple */[0,arg,Cmm["typ_addr"]],
                 /* :: */[0,/* tuple */[0,clos,Cmm["typ_addr"]],0]],
                arity-num>2&&arity<=max_arity_optimized
                 ?/* Cop */[11,
                   0,
                   /* :: */[0,
                    alloc_closure_header(5),
                    /* :: */[0,
                     /* Cconst_symbol */[3,
                      Pervasives["^"]
                       (name1,
                        Pervasives["^"]("_",Pervasives["string_of_int"](num+1)))],
                     /* :: */[0,
                      int_const(arity-num-1),
                      /* :: */[0,
                       /* Cconst_symbol */[3,
                        Pervasives["^"]
                         (name1,
                          Pervasives["^"]
                           ("_",
                            Pervasives["^"](Pervasives["string_of_int"](num+1),"_app")))],
                       /* :: */[0,
                        /* Cvar */[7,arg],
                        /* :: */[0,/* Cvar */[7,clos],0]]]]]]]
                 :/* Cop */[11,
                   0,
                   /* :: */[0,
                    alloc_closure_header(4),
                    /* :: */[0,
                     /* Cconst_symbol */[3,
                      Pervasives["^"]
                       (name1,
                        Pervasives["^"]("_",Pervasives["string_of_int"](num+1)))],
                     /* :: */[0,
                      int_const(1),
                      /* :: */[0,
                       /* Cvar */[7,arg],
                       /* :: */[0,/* Cvar */[7,clos],0]]]]]],
                1,
                Debuginfo["none"]]],
              $js];
      }
    };

var
 curry_function$1=
  function(arity)
   {if(arity>=0)
     {return intermediate_curry_functions(arity,0);}
    else
     {return /* :: */[0,tuplify_function(-arity),0];}
    };

var compare$1=function(x,y){return "unknown primitive:caml_int_compare";};

var IntSet=Set["Make"]([0,compare$1]);

var default_apply=IntSet[4](2,IntSet[4](3,IntSet[1]));

var
 generic_functions=
  function(shared,units)
   {var
     match=
      List["fold_left"]
       (function(param,ui)
         {return /* tuple */[0,
                  List["fold_right"](IntSet[4],ui[8],param[1]),
                  List["fold_right"](IntSet[4],ui[9],param[2]),
                  List["fold_right"](IntSet[4],ui[7],param[3])];
          },
        /* tuple */[0,IntSet[1],IntSet[1],IntSet[1]],
        units);
    
    var apply=match[1];
    
    if(shared)
     {var apply$1=apply;}
    else
     {var apply$1=IntSet[7](apply,default_apply);}
    
    var
     accu=
      IntSet[14]
       (function(n,accu$1){return /* :: */[0,apply_function$1(n),accu$1];},
        apply$1,
        0);
    
    var
     accu$1=
      IntSet[14]
       (function(n,accu$2){return /* :: */[0,send_function(n),accu$2];},
        match[2],
        accu);
    
    return IntSet[14]
            (function(n,accu$2)
              {return Pervasives["@"](curry_function$1(n),accu$2);},
             match[3],
             accu$1);
    };

var
 entry_point=
  function(namelist)
   {var
     incr_global_inited=
      [11,
       [3,6],
       [0,
        [3,"caml_globals_inited"],
        [0,
         [11,1,[0,[11,[2,6],[0,[3,"caml_globals_inited"],0]],[0,[0,1],0]]],
         0]]];
    
    var
     body=
      List["fold_right"]
       (function(name,next)
         {var
           entry_sym=
            Compilenv["make_symbol"](/* Some */[0,name],[0,"entry"]);
          
          return /* Csequence */[12,
                  /* Cop */[11,
                   /* Capply */[0,Cmm["typ_void"],Debuginfo["none"]],
                   /* :: */[0,/* Cconst_symbol */[3,entry_sym],0]],
                  /* Csequence */[12,incr_global_inited,next]];
          },
        namelist,
        [0,1]);
    
    return /* Cfunction */[0,
            /* record */[0,"caml_program",0,body,0,Debuginfo["none"]]];
    };

var cint_zero=[6,0];

var
 global_table=
  function(namelist)
   {var
     mksym=
      function(name)
       {return /* Csymbol_address */[9,
                Compilenv["make_symbol"](/* Some */[0,name],0)];
        };
    
    return /* Cdata */[1,
            Pervasives["@"]
             (/* :: */[0,
               [2,"caml_globals"],
               /* :: */[0,[0,"caml_globals"],List["map"](mksym,namelist)]],
              /* :: */[0,cint_zero,0])];
    };

var
 reference_symbols=
  function(namelist)
   {var mksym=function(name){return /* Csymbol_address */[9,name];};
    
    return /* Cdata */[1,List["map"](mksym,namelist)];
    };

var
 global_data=
  function(name,v)
   {return /* Cdata */[1,
            /* :: */[0,
             /* Cglobal_symbol */[2,name],
             emit_structured_constant
              (name,
               /* Uconst_string */[6,
                "unknown primitive:caml_output_value_to_string"],
               0)]];
    };

var globals_map=function(v){return global_data("caml_globals_map",v);};

var
 frame_table=
  function(namelist)
   {var
     mksym=
      function(name)
       {return /* Csymbol_address */[9,
                Compilenv["make_symbol"](/* Some */[0,name],[0,"frametable"])];
        };
    
    return /* Cdata */[1,
            Pervasives["@"]
             (/* :: */[0,
               [2,"caml_frametable"],
               /* :: */[0,[0,"caml_frametable"],List["map"](mksym,namelist)]],
              /* :: */[0,cint_zero,0])];
    };

var
 segment_table=
  function(namelist,symbol,begname,endname)
   {var
     addsyms=
      function(name,lst)
       {return /* :: */[0,
                /* Csymbol_address */[9,
                 Compilenv["make_symbol"]
                  (/* Some */[0,name],/* Some */[0,begname])],
                /* :: */[0,
                 /* Csymbol_address */[9,
                  Compilenv["make_symbol"]
                   (/* Some */[0,name],/* Some */[0,endname])],
                 lst]];
        };
    
    return /* Cdata */[1,
            /* :: */[0,
             /* Cglobal_symbol */[2,symbol],
             /* :: */[0,
              /* Cdefine_symbol */[0,symbol],
              List["fold_right"](addsyms,namelist,/* :: */[0,cint_zero,0])]]];
    };

var
 data_segment_table=
  function(namelist)
   {return segment_table
            (namelist,"caml_data_segments","data_begin","data_end");
    };

var
 code_segment_table=
  function(namelist)
   {return segment_table
            (namelist,"caml_code_segments","code_begin","code_end");
    };

var
 predef_exception=
  function(i,name)
   {var symname=Pervasives["^"]("caml_exn_",name);
    
    var cst=/* Uconst_string */[6,name];
    
    var label=Compilenv["new_const_symbol"](0);
    
    var cont=emit_structured_constant(label,cst,0);
    
    return /* Cdata */[1,
            /* :: */[0,
             /* Cglobal_symbol */[2,symname],
             emit_structured_constant
              (symname,
               /* Uconst_block */[4,
                Obj["object_tag"],
                /* :: */[0,
                 /* Uconst_ref */[0,label,cst],
                 /* :: */[0,/* Uconst_int */[1,-i-1],0]]],
               cont)]];
    };

var mapflat=function(f,l){return List["flatten"](List["map"](f,l));};

var
 plugin_header=
  function(units)
   {var
     mk=
      function(param)
       {var ui=param[1];
        
        return /* record */[0,ui[1],param[2],ui[4],ui[5],ui[3]];
        };
    
    return global_data
            ("caml_plugin_header",
             /* record */[0,Config["cmxs_magic_number"],List["map"](mk,units)]);
    };

module["exports"]=
{"compunit":compunit,
 "apply_function":apply_function$1,
 "send_function":send_function,
 "curry_function":curry_function$1,
 "generic_functions":generic_functions,
 "entry_point":entry_point,
 "global_table":global_table,
 "reference_symbols":reference_symbols,
 "globals_map":globals_map,
 "frame_table":frame_table,
 "data_segment_table":data_segment_table,
 "code_segment_table":code_segment_table,
 "predef_exception":predef_exception,
 "plugin_header":plugin_header};

