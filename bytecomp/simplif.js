// Generated CODE, PLEASE EDIT WITH CARE 

var List=require("./list.js");
var Pervasives=require("./pervasives.js");
var Clflags=require("./clflags.js");
var Misc=require("./misc.js");
var Lambda=require("./lambda.js");
var Tbl=require("./tbl.js");
var Hashtbl=require("./hashtbl.js");
var Ident=require("./ident.js");
var Stypes=require("./stypes.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 Real_reference=
  CamlPrimitive["caml_set_oo_id"]([248,"Simplif.Real_reference",0]);

var
 eliminate_ref=
  function(id,lam)
   {switch(lam[0])
     {case 0:
       if(Ident["same"](lam[1],id)){throw Real_reference;}else{return lam;}
      case 1:return lam;
      case 2:
       return /* Lapply */[2,
               eliminate_ref(id,lam[1]),
               List["map"](eliminate_ref(id),lam[2]),
               lam[3]];
       
      case 3:
       if(Lambda["IdentSet"][3](id,Lambda["free_variables"](lam)))
        {throw Real_reference;}
       else
        {return lam;}
       
      case 4:
       return /* Llet */[4,
               lam[1],
               lam[2],
               eliminate_ref(id,lam[3]),
               eliminate_ref(id,lam[4])];
       
      case 5:
       return /* Lletrec */[5,
               List["map"]
                (function(param)
                  {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                 lam[1]),
               eliminate_ref(id,lam[2])];
       
      case 6:
       var p=lam[1];
       
       var exit;
       
       if(typeof p==="number")
        {switch(p){}}
       else
        {switch(p[0])
          {case 6:
            if(p[1]!==0)
             {exit=87;}
            else
             {var match=lam[2];
              
              if(match)
               {var match$1=match[1];
                
                switch(match$1[0])
                 {case 0:
                   if(match[2])
                    {exit=87;}
                   else
                    {if(Ident["same"](match$1[1],id))
                      {return /* Lvar */[0,id];}
                     else
                      {exit=87;}
                     }
                   
                  default:exit=87;}
                }
              else
               {exit=87;}
              }
            
           case 7:
            if(p[1]!==0)
             {exit=87;}
            else
             {var match$2=lam[2];
              
              if(match$2)
               {var match$3=match$2[1];
                
                switch(match$3[0])
                 {case 0:
                   var match$4=match$2[2];
                   
                   if(match$4)
                    {if(match$4[2])
                      {exit=87;}
                     else
                      {if(Ident["same"](match$3[1],id))
                        {return /* Lassign */[16,id,eliminate_ref(id,match$4[1])];}
                       else
                        {exit=87;}
                       }
                     }
                   else
                    {exit=87;}
                   
                  default:exit=87;}
                }
              else
               {exit=87;}
              }
            
           case 15:
            var match$5=lam[2];
            
            if(match$5)
             {var match$6=match$5[1];
              
              switch(match$6[0])
               {case 0:
                 if(match$5[2])
                  {exit=87;}
                 else
                  {if(Ident["same"](match$6[1],id))
                    {return /* Lassign */[16,
                             id,
                             /* Lprim */[6,
                              /* Poffsetint */[14,p[1]],
                              /* :: */[0,/* Lvar */[0,id],/* [] */0]]];
                     }
                   else
                    {exit=87;}
                   }
                 
                default:exit=87;}
              }
            else
             {exit=87;}
            
           default:exit=87;}}
       
       switch(exit)
        {case 87:
          return /* Lprim */[6,p,List["map"](eliminate_ref(id),lam[2])];
         }
       
      case 7:
       var sw=lam[2];
       
       return /* Lswitch */[7,
               eliminate_ref(id,lam[1]),
               /* record */[0,
                sw[1],
                List["map"]
                 (function(param)
                   {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                  sw[2]),
                sw[3],
                List["map"]
                 (function(param)
                   {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                  sw[4]),
                Misc["may_map"](eliminate_ref(id),sw[5])]];
       
      case 8:
       return /* Lstringswitch */[8,
               eliminate_ref(id,lam[1]),
               List["map"]
                (function(param)
                  {return /* tuple */[0,param[1],eliminate_ref(id,param[2])];},
                 lam[2]),
               Misc["may_map"](eliminate_ref(id),lam[3])];
       
      case 9:
       return /* Lstaticraise */[9,
               lam[1],
               List["map"](eliminate_ref(id),lam[2])];
       
      case 10:
       return /* Lstaticcatch */[10,
               eliminate_ref(id,lam[1]),
               lam[2],
               eliminate_ref(id,lam[3])];
       
      case 11:
       return /* Ltrywith */[11,
               eliminate_ref(id,lam[1]),
               lam[2],
               eliminate_ref(id,lam[3])];
       
      case 12:
       return /* Lifthenelse */[12,
               eliminate_ref(id,lam[1]),
               eliminate_ref(id,lam[2]),
               eliminate_ref(id,lam[3])];
       
      case 13:
       return /* Lsequence */[13,
               eliminate_ref(id,lam[1]),
               eliminate_ref(id,lam[2])];
       
      case 14:
       return /* Lwhile */[14,
               eliminate_ref(id,lam[1]),
               eliminate_ref(id,lam[2])];
       
      case 15:
       return /* Lfor */[15,
               lam[1],
               eliminate_ref(id,lam[2]),
               eliminate_ref(id,lam[3]),
               lam[4],
               eliminate_ref(id,lam[5])];
       
      case 16:return /* Lassign */[16,lam[1],eliminate_ref(id,lam[2])];
      case 17:
       return /* Lsend */[17,
               lam[1],
               eliminate_ref(id,lam[2]),
               eliminate_ref(id,lam[3]),
               List["map"](eliminate_ref(id),lam[4]),
               lam[5]];
       
      case 18:return /* Levent */[18,eliminate_ref(id,lam[1]),lam[2]];
      case 19:return /* Lifused */[19,lam[1],eliminate_ref(id,lam[2])];
      }
    };

var
 simplify_exits=
  function(lam)
   {var exits=Hashtbl["create"](/* None */0,17);
    
    var
     count_exit=
      function(i)
       {try
         {return Hashtbl["find"](exits,i)[1];}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return 0;}
          else
           {throw exn;}
          }
        };
    
    var
     incr_exit=
      function(i)
       {try
         {return Hashtbl["find"](exits,i)[0]++;}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return Hashtbl["add"](exits,i,[0,1]);}
          else
           {throw exn;}
          }
        };
    
    var
     count=
      function(param)
       {var exit;
        
        switch(param[0])
         {case 0:exit=75;
          case 1:exit=75;
          case 2:count(param[1]);return List["iter"](count,param[2]);
          case 3:return count(param[3]);
          case 4:count(param[4]);return count(param[3]);
          case 5:
           List["iter"](function(param$1){return count(param$1[2]);},param[1]);
           return count(param[2]);
           
          case 6:return List["iter"](count,param[2]);
          case 7:
           var sw=param[2];
           
           count_default(sw);
           count(param[1]);
           List["iter"](function(param$1){return count(param$1[2]);},sw[2]);
           return List["iter"]
                   (function(param$1){return count(param$1[2]);},sw[4]);
           
          case 8:
           var d=param[3];
           
           var sw$1=param[2];
           
           count(param[1]);
           List["iter"](function(param$1){return count(param$1[2]);},sw$1);
           if(d)
            {var d$1=d[1];
             
             var exit$1;
             
             if(sw$1)
              {if(sw$1[2]){count(d$1);return count(d$1);}else{exit$1=70;}}
             else
              {exit$1=70;}
             
             switch(exit$1){case 70:return count(d$1);}
             }
           else
            {return /* () */0;}
           
          case 9:incr_exit(param[1]);return List["iter"](count,param[2]);
          case 10:
           var match=param[2];
           
           var i=match[1];
           
           var l1=param[1];
           
           var exit$2;
           
           if(match[2])
            {exit$2=76;}
           else
            {var match$1=param[3];
             
             switch(match$1[0])
              {case 9:
                if(match$1[2])
                 {exit$2=76;}
                else
                 {var j=match$1[1];
                  
                  count(l1);
                  var ic=count_exit(i);
                  
                  try
                   {var r=Hashtbl["find"](exits,j);return r[1]=r[1]+ic,0;}
                  catch(exn)
                   {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                     {return Hashtbl["add"](exits,j,[0,ic]);}
                    else
                     {throw exn;}
                    }
                  }
                
               default:exit$2=76;}
             }
           
           switch(exit$2)
            {case 76:
              count(l1);
              if(count_exit(i)>0){return count(param[3]);}else{return 0;}
              
             }
           
          case 11:count(param[1]);return count(param[3]);
          case 12:count(param[1]);count(param[2]);return count(param[3]);
          case 13:exit=77;
          case 14:exit=77;
          case 15:count(param[2]);count(param[3]);return count(param[5]);
          case 16:exit=78;
          case 17:
           return List["iter"]
                   (count,/* :: */[0,param[2],/* :: */[0,param[3],param[4]]]);
           
          case 18:return count(param[1]);
          case 19:exit=78;
          }
        
        switch(exit)
         {case 77:count(param[1]);return count(param[2]);
          case 78:return count(param[2]);
          case 75:return /* () */0;
          }
        };
    
    var
     count_default=
      function(sw)
       {var match=sw[5];
        
        if(match)
         {var al=match[1];
          
          var nconsts=List["length"](sw[2]);
          
          var nblocks=List["length"](sw[4]);
          
          if(nconsts<sw[1]&&nblocks<sw[3])
           {count(al);return count(al);}
          else
           {if(nconsts<sw[1]||nblocks<sw[3])
             {}
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"bytecomp/simplif.ml",169,8]];
              }
            
            return count(al);
            }
          }
        else
         {return /* () */0;}
        };
    
    count(lam);
    var subst=Hashtbl["create"](/* None */0,17);
    
    var
     simplif=
      function(l)
       {var exit;
        
        switch(l[0])
         {case 0:exit=66;
          case 1:exit=66;
          case 2:
           return /* Lapply */[2,simplif(l[1]),List["map"](simplif,l[2]),l[3]];
           
          case 3:return /* Lfunction */[3,l[1],l[2],simplif(l[3])];
          case 4:return /* Llet */[4,l[1],l[2],simplif(l[3]),simplif(l[4])];
          case 5:
           return /* Lletrec */[5,
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],simplif(param[2])];},
                     l[1]),
                   simplif(l[2])];
           
          case 6:
           var p=l[1];
           
           var ll=List["map"](simplif,l[2]);
           
           var exit$1;
           
           if(typeof p==="number")
            {switch(p){}}
           else
            {switch(p[0])
              {case 0:
                if(ll)
                 {var match=ll[2];
                  
                  if(match)
                   {var f=match[1];
                    
                    var x=ll[1];
                    
                    var loc=p[1];
                    
                    var exit$2;
                    
                    switch(f[0])
                     {case 2:
                       if(match[2])
                        {exit$1=50;}
                       else
                        {var loc$1=loc;
                         
                         var x$1=x;
                         
                         var f$1=f[1];
                         
                         var args=f[2];
                         
                         exit$1=48;
                         }
                       
                      case 18:
                       var match$1=f[1];
                       
                       switch(match$1[0])
                        {case 2:
                          if(match[2])
                           {exit$1=50;}
                          else
                           {var loc$1=loc;
                            
                            var x$1=x;
                            
                            var f$1=match$1[1];
                            
                            var args=match$1[2];
                            
                            exit$1=48;
                            }
                          
                         default:exit$2=51;}
                       
                      default:exit$2=51;}
                    
                    switch(exit$2)
                     {case 51:
                       if(match[2])
                        {exit$1=50;}
                       else
                        {return /* Lapply */[2,f,/* :: */[0,x,/* [] */0],loc];}
                       
                      }
                    }
                  else
                   {exit$1=50;}
                  }
                else
                 {exit$1=50;}
                
               case 1:
                if(ll)
                 {var f$2=ll[1];
                  
                  var loc$2=p[1];
                  
                  var exit$3;
                  
                  switch(f$2[0])
                   {case 2:
                     var match$2=ll[2];
                     
                     if(match$2)
                      {if(match$2[2])
                        {exit$1=50;}
                       else
                        {var loc$3=loc$2;
                         
                         var f$3=f$2[1];
                         
                         var args$1=f$2[2];
                         
                         var x$2=match$2[1];
                         
                         exit$1=49;
                         }
                       }
                     else
                      {exit$1=50;}
                     
                    case 18:
                     var match$3=f$2[1];
                     
                     switch(match$3[0])
                      {case 2:
                        var match$4=ll[2];
                        
                        if(match$4)
                         {if(match$4[2])
                           {exit$1=50;}
                          else
                           {var loc$3=loc$2;
                            
                            var f$3=match$3[1];
                            
                            var args$1=match$3[2];
                            
                            var x$2=match$4[1];
                            
                            exit$1=49;
                            }
                          }
                        else
                         {exit$1=50;}
                        
                       default:exit$3=52;}
                     
                    default:exit$3=52;}
                  
                  switch(exit$3)
                   {case 52:
                     var match$5=ll[2];
                     
                     if(match$5)
                      {if(match$5[2])
                        {exit$1=50;}
                       else
                        {return /* Lapply */[2,
                                 f$2,
                                 /* :: */[0,match$5[1],/* [] */0],
                                 loc$2];
                         }
                       }
                     else
                      {exit$1=50;}
                     
                    }
                  }
                else
                 {exit$1=50;}
                
               default:exit$1=50;}}
           
           switch(exit$1)
            {case 50:return /* Lprim */[6,p,ll];
             case 48:
              return /* Lapply */[2,
                      f$1,
                      Pervasives["@"](args,/* :: */[0,x$1,/* [] */0]),
                      loc$1];
              
             case 49:
              return /* Lapply */[2,
                      f$3,
                      Pervasives["@"](args$1,/* :: */[0,x$2,/* [] */0]),
                      loc$3];
              
             }
           
          case 7:
           var sw=l[2];
           
           var new_l=simplif(l[1]);
           
           var
            new_consts=
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],simplif(param[2])];},
               sw[2]);
           
           var
            new_blocks=
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],simplif(param[2])];},
               sw[4]);
           
           var new_fail=Misc["may_map"](simplif,sw[5]);
           
           return /* Lswitch */[7,
                   new_l,
                   /* record */[0,sw[1],new_consts,sw[3],new_blocks,new_fail]];
           
          case 8:
           return /* Lstringswitch */[8,
                   simplif(l[1]),
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],simplif(param[2])];},
                     l[2]),
                   Misc["may_map"](simplif,l[3])];
           
          case 9:
           var ls=l[2];
           
           var i=l[1];
           
           if(ls)
            {var ls$1=List["map"](simplif,ls);
             
             try
              {var match$6=Hashtbl["find"](subst,i);
               
               var xs=match$6[1];
               
               var ys=List["map"](Ident["rename"],xs);
               
               var
                env=
                 List["fold_right2"]
                  (function(x,y,t){return Ident["add"](x,/* Lvar */[0,y],t);},
                   xs,
                   ys,
                   Ident["empty"]);
               
               return List["fold_right2"]
                       (function(y,l,r){return /* Llet */[4,/* Alias */1,y,l,r];},
                        ys,
                        ls$1,
                        Lambda["subst_lambda"](env,match$6[2]));
               }
             catch(exn)
              {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
                {return /* Lstaticraise */[9,i,ls$1];}
               else
                {throw exn;}
               }
             }
           else
            {try
              {var match$7=Hashtbl["find"](subst,i);return match$7[2];}
             catch(exn$1)
              {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
                {return l;}
               else
                {throw exn$1;}
               }
             }
           
          case 10:
           var match$8=l[2];
           
           var xs$1=match$8[2];
           
           var i$1=match$8[1];
           
           var l1=l[1];
           
           var exit$4;
           
           if(xs$1)
            {exit$4=68;}
           else
            {var l2=l[3];
             
             switch(l2[0])
              {case 9:
                if(l2[2])
                 {exit$4=68;}
                else
                 {Hashtbl["add"]
                   (subst,i$1,/* tuple */[0,/* [] */0,simplif(l2)]);
                  return simplif(l1);
                  }
                
               default:exit$4=68;}
             }
           
           switch(exit$4)
            {case 68:
              var l2$1=l[3];
              
              var match$9=count_exit(i$1);
              
              var exit$5;
              
              if(match$9!==0)
               {if(match$9!==1)
                 {exit$5=65;}
                else
                 {if(i$1>=0)
                   {Hashtbl["add"](subst,i$1,/* tuple */[0,xs$1,simplif(l2$1)]);
                    return simplif(l1);
                    }
                  else
                   {exit$5=65;}
                  }
                }
              else
               {return simplif(l1);}
              
              switch(exit$5)
               {case 65:
                 return /* Lstaticcatch */[10,
                         simplif(l1),
                         /* tuple */[0,i$1,xs$1],
                         simplif(l2$1)];
                 
                }
              
             }
           
          case 11:return /* Ltrywith */[11,simplif(l[1]),l[2],simplif(l[3])];
          case 12:
           return /* Lifthenelse */[12,
                   simplif(l[1]),
                   simplif(l[2]),
                   simplif(l[3])];
           
          case 13:return /* Lsequence */[13,simplif(l[1]),simplif(l[2])];
          case 14:return /* Lwhile */[14,simplif(l[1]),simplif(l[2])];
          case 15:
           return /* Lfor */[15,
                   l[1],
                   simplif(l[2]),
                   simplif(l[3]),
                   l[4],
                   simplif(l[5])];
           
          case 16:return /* Lassign */[16,l[1],simplif(l[2])];
          case 17:
           return /* Lsend */[17,
                   l[1],
                   simplif(l[2]),
                   simplif(l[3]),
                   List["map"](simplif,l[4]),
                   l[5]];
           
          case 18:return /* Levent */[18,simplif(l[1]),l[2]];
          case 19:return /* Lifused */[19,l[1],simplif(l[2])];
          }
        
        switch(exit){case 66:return l;}
        };
    
    return simplif(lam);
    };

var
 beta_reduce=
  function(params,body,args)
   {return List["fold_left2"]
            (function(l,param,arg)
              {return /* Llet */[4,/* Strict */0,param,arg,l];},
             body,
             params,
             args);
    };

var
 simplify_lets=
  function(lam)
   {var optimize=Clflags["native_code"][1]||!Clflags["debug"][1];
    
    var occ=Hashtbl["create"](/* None */0,83);
    
    var
     count_var=
      function(v)
       {try
         {return Hashtbl["find"](occ,v)[1];}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {return 0;}
          else
           {throw exn;}
          }
        };
    
    var
     bind_var=
      function(bv,v)
       {var r=[0,0];Hashtbl["add"](occ,v,r);return Tbl["add"](v,r,bv);};
    
    var
     use_var=
      function(bv,v,n)
       {try
         {var r=Tbl["find"](v,bv);return r[1]=r[1]+n,0;}
        catch(exn)
         {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
           {try
             {var r$1=Hashtbl["find"](occ,v);return r$1[1]=r$1[1]+2,0;}
            catch(exn$1)
             {if(exn$1===CamlPrimitive["caml_global_data"]["Not_found"])
               {return /* () */0;}
              else
               {throw exn$1;}
              }
            }
          else
           {throw exn;}
          }
        };
    
    var
     count=
      function(bv,param)
       {var exit;
        
        switch(param[0])
         {case 0:return use_var(bv,param[1],1);
          case 1:return /* () */0;
          case 2:
           var l1=param[1];
           
           var exit$1;
           
           switch(l1[0])
            {case 3:
              if(l1[1]!==0)
               {var match=param[2];
                
                if(match)
                 {var match$1=match[1];
                  
                  switch(match$1[0])
                   {case 6:
                     var $js=match$1[1];
                     if(typeof $js==="number")
                      {switch($js){}}
                     else
                      {switch($js[0])
                        {case 5:
                          if(match[2])
                           {exit$1=29;}
                          else
                           {var args=match$1[2];
                            
                            var params=l1[2];
                            
                            if(optimize&&List["length"](params)===List["length"](args))
                             {return count(bv,beta_reduce(params,l1[3],args));}
                            else
                             {exit$1=29;}
                            }
                          
                         default:exit$1=29;}}
                     
                    default:exit$1=29;}
                  }
                else
                 {exit$1=29;}
                }
              else
               {var args$1=param[2];
                
                var params$1=l1[2];
                
                if
                 (optimize&&List["length"](params$1)===List["length"](args$1))
                 {return count(bv,beta_reduce(params$1,l1[3],args$1));}
                else
                 {exit$1=29;}
                }
              
             default:exit$1=29;}
           
           switch(exit$1)
            {case 29:count(bv,l1);return List["iter"](count(bv),param[2]);}
           
          case 3:return count(Tbl["empty"],param[3]);
          case 4:
           var l1$1=param[3];
           
           var v=param[2];
           
           var exit$2;
           
           switch(l1$1[0])
            {case 0:
              if(optimize)
               {count(bind_var(bv,v),param[4]);
                return use_var(bv,l1$1[1],count_var(v));
                }
              else
               {exit$2=30;}
              
             default:exit$2=30;}
           
           switch(exit$2)
            {case 30:
              count(bind_var(bv,v),param[4]);
              if(param[1]===/* Strict */0||count_var(v)>0)
               {return count(bv,l1$1);}
              else
               {return 0;}
              
             }
           
          case 5:
           List["iter"]
            (function(param$1){return count(bv,param$1[2]);},param[1]);
           return count(bv,param[2]);
           
          case 6:exit=31;
          case 7:
           var sw=param[2];
           
           count_default(bv,sw);
           count(bv,param[1]);
           List["iter"](function(param$1){return count(bv,param$1[2]);},sw[2]);
           return List["iter"]
                   (function(param$1){return count(bv,param$1[2]);},sw[4]);
           
          case 8:
           var d=param[3];
           
           var sw$1=param[2];
           
           count(bv,param[1]);
           List["iter"](function(param$1){return count(bv,param$1[2]);},sw$1);
           if(d)
            {var d$1=d[1];
             
             var exit$3;
             
             if(sw$1)
              {if(sw$1[2])
                {count(bv,d$1);return count(bv,d$1);}
               else
                {exit$3=27;}
               }
             else
              {exit$3=27;}
             
             switch(exit$3){case 27:return count(bv,d$1);}
             }
           else
            {return /* () */0;}
           
          case 9:exit=31;
          case 10:exit=32;
          case 11:exit=32;
          case 12:
           count(bv,param[1]);count(bv,param[2]);return count(bv,param[3]);
          case 13:count(bv,param[1]);return count(bv,param[2]);
          case 14:
           count(Tbl["empty"],param[1]);return count(Tbl["empty"],param[2]);
          case 15:
           count(bv,param[2]);
           count(bv,param[3]);
           return count(Tbl["empty"],param[5]);
           
          case 16:return count(bv,param[2]);
          case 17:
           return List["iter"]
                   (count(bv),
                    /* :: */[0,param[2],/* :: */[0,param[3],param[4]]]);
           
          case 18:return count(bv,param[1]);
          case 19:
           if(count_var(param[1])>0)
            {return count(bv,param[2]);}
           else
            {return 0;}
           
          }
        
        switch(exit)
         {case 31:return List["iter"](count(bv),param[2]);
          case 32:count(bv,param[1]);return count(bv,param[3]);
          }
        };
    
    var
     count_default=
      function(bv,sw)
       {var match=sw[5];
        
        if(match)
         {var al=match[1];
          
          var nconsts=List["length"](sw[2]);
          
          var nblocks=List["length"](sw[4]);
          
          if(nconsts<sw[1]&&nblocks<sw[3])
           {count(bv,al);return count(bv,al);}
          else
           {if(nconsts<sw[1]||nblocks<sw[3])
             {}
            else
             {throw [0,
                     CamlPrimitive["caml_global_data"]["Assert_failure"],
                     [0,"bytecomp/simplif.ml",406,8]];
              }
            
            return count(bv,al);
            }
          }
        else
         {return /* () */0;}
        };
    
    count(Tbl["empty"],lam);
    var subst=Hashtbl["create"](/* None */0,83);
    
    var
     mklet=
      function(param)
       {var e2=param[4];
        
        var e1=param[3];
        
        var v=param[2];
        
        var exit;
        
        switch(e2[0])
         {case 0:
           if(optimize&&Ident["same"](v,e2[1])){return e1;}else{exit=24;}
          default:exit=24;}
        
        switch(exit){case 24:return /* Llet */[4,param[1],v,e1,e2];}
        };
    
    var
     simplif=
      function(l)
       {switch(l[0])
         {case 0:
           try
            {return Hashtbl["find"](subst,l[1]);}
           catch(exn)
            {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
              {return l;}
             else
              {throw exn;}
             }
           
          case 1:return l;
          case 2:
           var l1=l[1];
           
           var exit;
           
           switch(l1[0])
            {case 3:
              if(l1[1]!==0)
               {var match=l[2];
                
                if(match)
                 {var match$1=match[1];
                  
                  switch(match$1[0])
                   {case 6:
                     var $js=match$1[1];
                     if(typeof $js==="number")
                      {switch($js){}}
                     else
                      {switch($js[0])
                        {case 5:
                          if(match[2])
                           {exit=20;}
                          else
                           {var args=match$1[2];
                            
                            var params=l1[2];
                            
                            if(optimize&&List["length"](params)===List["length"](args))
                             {return simplif(beta_reduce(params,l1[3],args));}
                            else
                             {exit=20;}
                            }
                          
                         default:exit=20;}}
                     
                    default:exit=20;}
                  }
                else
                 {exit=20;}
                }
              else
               {var args$1=l[2];
                
                var params$1=l1[2];
                
                if
                 (optimize&&List["length"](params$1)===List["length"](args$1))
                 {return simplif(beta_reduce(params$1,l1[3],args$1));}
                else
                 {exit=20;}
                }
              
             default:exit=20;}
           
           switch(exit)
            {case 20:
              return /* Lapply */[2,
                      simplif(l1),
                      List["map"](simplif,l[2]),
                      l[3]];
              
             }
           
          case 3:return /* Lfunction */[3,l[1],l[2],simplif(l[3])];
          case 4:
           var str=l[1];
           
           var exit$1;
           
           var match$2=l[3];
           
           switch(match$2[0])
            {case 0:
              if(optimize)
               {Hashtbl["add"](subst,l[2],simplif(/* Lvar */[0,match$2[1]]));
                return simplif(l[4]);
                }
              else
               {exit$1=22;}
              
             default:exit$1=22;}
           
           switch(exit$1)
            {case 22:
              switch(str)
               {case 0:
                 var match$3=l[3];
                 
                 switch(match$3[0])
                  {case 6:
                    var match$4=match$3[1];
                    
                    if(typeof match$4==="number")
                     {switch(match$4){}}
                    else
                     {switch(match$4[0])
                       {case 5:
                         if(match$4[1]!==0)
                          {exit$1=21;}
                         else
                          {if(match$4[3]!==0)
                            {var match$5=match$3[2];
                             
                             if(match$5)
                              {if(match$5[2])
                                {exit$1=21;}
                               else
                                {if(optimize)
                                  {var v=l[2];
                                   
                                   var slinit=simplif(match$5[1]);
                                   
                                   var slbody=simplif(l[4]);
                                   
                                   try
                                    {return mklet
                                             (/* tuple */[0,
                                               /* Variable */3,
                                               v,
                                               slinit,
                                               eliminate_ref(v,slbody)]);
                                     }
                                   catch(exn$1)
                                    {if(exn$1===Real_reference)
                                      {return mklet
                                               (/* tuple */[0,
                                                 /* Strict */0,
                                                 v,
                                                 /* Lprim */[6,
                                                  /* Pmakeblock */[5,0,match$4[2],/* Mutable */1],
                                                  /* :: */[0,slinit,/* [] */0]],
                                                 slbody]);
                                       }
                                     else
                                      {throw exn$1;}
                                     }
                                   }
                                 else
                                  {exit$1=21;}
                                 }
                               }
                             else
                              {exit$1=21;}
                             }
                           else
                            {exit$1=21;}
                           }
                         
                        default:exit$1=21;}}
                    
                   default:exit$1=21;}
                 
                case 1:
                 var l2=l[4];
                 
                 var l1$1=l[3];
                 
                 var v$1=l[2];
                 
                 var n=count_var(v$1);
                 
                 var exit$2;
                 
                 if(n!==0)
                  {if(n!==1)
                    {exit$2=14;}
                   else
                    {if(optimize)
                      {Hashtbl["add"](subst,v$1,simplif(l1$1));
                       return simplif(l2);
                       }
                     else
                      {exit$2=14;}
                     }
                   }
                 else
                  {return simplif(l2);}
                 
                 switch(exit$2)
                  {case 14:
                    return /* Llet */[4,
                            /* Alias */1,
                            v$1,
                            simplif(l1$1),
                            simplif(l2)];
                    
                   }
                 
                case 2:
                 var l2$1=l[4];
                 
                 var v$2=l[2];
                 
                 var n$1=count_var(v$2);
                 
                 if(n$1!==0)
                  {return mklet
                           (/* tuple */[0,/* Alias */1,v$2,simplif(l[3]),simplif(l2$1)]);
                   }
                 else
                  {return simplif(l2$1);}
                 
                case 3:exit$1=21;
                }
              
             case 21:
              return mklet
                      (/* tuple */[0,str,l[2],simplif(l[3]),simplif(l[4])]);
              
             }
           
          case 5:
           return /* Lletrec */[5,
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],simplif(param[2])];},
                     l[1]),
                   simplif(l[2])];
           
          case 6:return /* Lprim */[6,l[1],List["map"](simplif,l[2])];
          case 7:
           var sw=l[2];
           
           var new_l=simplif(l[1]);
           
           var
            new_consts=
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],simplif(param[2])];},
               sw[2]);
           
           var
            new_blocks=
             List["map"]
              (function(param)
                {return /* tuple */[0,param[1],simplif(param[2])];},
               sw[4]);
           
           var new_fail=Misc["may_map"](simplif,sw[5]);
           
           return /* Lswitch */[7,
                   new_l,
                   /* record */[0,sw[1],new_consts,sw[3],new_blocks,new_fail]];
           
          case 8:
           return /* Lstringswitch */[8,
                   simplif(l[1]),
                   List["map"]
                    (function(param)
                      {return /* tuple */[0,param[1],simplif(param[2])];},
                     l[2]),
                   Misc["may_map"](simplif,l[3])];
           
          case 9:return /* Lstaticraise */[9,l[1],List["map"](simplif,l[2])];
          case 10:
           var match$6=l[2];
           
           return /* Lstaticcatch */[10,
                   simplif(l[1]),
                   /* tuple */[0,match$6[1],match$6[2]],
                   simplif(l[3])];
           
          case 11:return /* Ltrywith */[11,simplif(l[1]),l[2],simplif(l[3])];
          case 12:
           return /* Lifthenelse */[12,
                   simplif(l[1]),
                   simplif(l[2]),
                   simplif(l[3])];
           
          case 13:
           var l1$2=l[1];
           
           switch(l1$2[0])
            {case 19:
              var l2$2=l[2];
              
              if(count_var(l1$2[1])>0)
               {return /* Lsequence */[13,simplif(l1$2[2]),simplif(l2$2)];}
              else
               {return simplif(l2$2);}
              
             default:return /* Lsequence */[13,simplif(l1$2),simplif(l[2])];}
           
          case 14:return /* Lwhile */[14,simplif(l[1]),simplif(l[2])];
          case 15:
           return /* Lfor */[15,
                   l[1],
                   simplif(l[2]),
                   simplif(l[3]),
                   l[4],
                   simplif(l[5])];
           
          case 16:return /* Lassign */[16,l[1],simplif(l[2])];
          case 17:
           return /* Lsend */[17,
                   l[1],
                   simplif(l[2]),
                   simplif(l[3]),
                   List["map"](simplif,l[4]),
                   l[5]];
           
          case 18:return /* Levent */[18,simplif(l[1]),l[2]];
          case 19:
           if(count_var(l[1])>0)
            {return simplif(l[2]);}
           else
            {return Lambda["lambda_unit"];}
           
          }
        };
    
    return simplif(lam);
    };

var is_tail_native_heuristic=[0,function(n){return /* true */1;}];

var
 emit_tail_infos=
  function(is_tail,lambda)
   {var
     call_kind=
      function(args)
       {if
         (is_tail&&
          (!Clflags["native_code"][1]||
           is_tail_native_heuristic[1](List["length"](args))))
         {return /* Tail */0;}
        else
         {return /* Stack */1;}
        };
    
    var exit;
    
    switch(lambda[0])
     {case 0:exit=7;
      case 1:exit=7;
      case 2:
       var l=lambda[2];
       
       list_emit_tail_infos(/* false */0,l);
       return Stypes["record"](/* An_call */[4,lambda[3],call_kind(l)]);
       
      case 3:return emit_tail_infos(/* true */1,lambda[3]);
      case 4:
       emit_tail_infos(/* false */0,lambda[3]);
       return emit_tail_infos(is_tail,lambda[4]);
       
      case 5:
       List["iter"]
        (function(param){return emit_tail_infos(/* false */0,param[2]);},
         lambda[1]);
       return emit_tail_infos(is_tail,lambda[2]);
       
      case 6:
       var match=lambda[1];
       
       var exit$1;
       
       if(typeof match==="number")
        {if(match>=5)
          {if(match>=7)
            {exit$1=4;}
           else
            {var match$1=lambda[2];
             
             if(match$1)
              {var match$2=match$1[2];
               
               if(match$2)
                {if(match$2[2])
                  {exit$1=4;}
                 else
                  {emit_tail_infos(/* false */0,match$1[1]);
                   return emit_tail_infos(is_tail,match$2[1]);
                   }
                 }
               else
                {exit$1=4;}
               }
             else
              {exit$1=4;}
             }
           }
         else
          {if(match>=3)
            {exit$1=4;}
           else
            {var match$3=lambda[2];
             
             if(match$3)
              {if(match$3[2])
                {exit$1=4;}
               else
                {return emit_tail_infos(is_tail,match$3[1]);}
               }
             else
              {exit$1=4;}
             }
           }
         }
       else
        {exit$1=4;}
       
       switch(exit$1)
        {case 4:return list_emit_tail_infos(/* false */0,lambda[2]);}
       
      case 7:
       var sw=lambda[2];
       
       emit_tail_infos(/* false */0,lambda[1]);
       list_emit_tail_infos_fun(function(prim){return prim[2];},is_tail,sw[2]);
       list_emit_tail_infos_fun(function(prim){return prim[2];},is_tail,sw[4]);
       return Misc["may"](emit_tail_infos(is_tail),sw[5]);
       
      case 8:
       emit_tail_infos(/* false */0,lambda[1]);
       List["iter"]
        (function(param){return emit_tail_infos(is_tail,param[2]);},lambda[2]);
       return Misc["may"](emit_tail_infos(is_tail),lambda[3]);
       
      case 9:return list_emit_tail_infos(/* false */0,lambda[2]);
      case 10:
       emit_tail_infos(is_tail,lambda[1]);
       return emit_tail_infos(is_tail,lambda[3]);
       
      case 11:
       emit_tail_infos(/* false */0,lambda[1]);
       return emit_tail_infos(is_tail,lambda[3]);
       
      case 12:
       emit_tail_infos(/* false */0,lambda[1]);
       emit_tail_infos(is_tail,lambda[2]);
       return emit_tail_infos(is_tail,lambda[3]);
       
      case 13:
       emit_tail_infos(/* false */0,lambda[1]);
       return emit_tail_infos(is_tail,lambda[2]);
       
      case 14:
       emit_tail_infos(/* false */0,lambda[1]);
       return emit_tail_infos(/* false */0,lambda[2]);
       
      case 15:
       emit_tail_infos(/* false */0,lambda[2]);
       emit_tail_infos(/* false */0,lambda[3]);
       return emit_tail_infos(/* false */0,lambda[5]);
       
      case 16:return emit_tail_infos(/* false */0,lambda[2]);
      case 17:
       var args=lambda[4];
       
       var obj=lambda[3];
       
       emit_tail_infos(/* false */0,lambda[2]);
       emit_tail_infos(/* false */0,obj);
       list_emit_tail_infos(/* false */0,args);
       return Stypes["record"]
               (/* An_call */[4,lambda[5],call_kind(/* :: */[0,obj,args])]);
       
      case 18:return emit_tail_infos(is_tail,lambda[1]);
      case 19:return emit_tail_infos(is_tail,lambda[2]);
      }
    
    switch(exit){case 7:return /* () */0;}
    };

var
 list_emit_tail_infos_fun=
  function(f,is_tail)
   {return List["iter"](function(x){return emit_tail_infos(is_tail,f(x));});};

var
 list_emit_tail_infos=
  function(is_tail){return List["iter"](emit_tail_infos(is_tail));};

var
 simplify_lambda=
  function(lam)
   {var res=simplify_lets(simplify_exits(lam));
    
    if(Clflags["annotations"][1]){emit_tail_infos(/* true */1,res)}else{}
    
    return res;
    };

module["exports"]=
{"simplify_exits":simplify_exits,
 "eliminate_ref":eliminate_ref,
 "simplify_lets":simplify_lets,
 "simplify_lambda":simplify_lambda,
 "is_tail_native_heuristic":is_tail_native_heuristic};

