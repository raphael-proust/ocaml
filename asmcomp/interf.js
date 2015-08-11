// Generated CODE, PLEASE EDIT WITH CARE 

var Reg=require("Reg");
var Set=require("Set");
var Proc=require("Proc");


var
 compare=
  function(param,param$1)
   {var c="unknown primitive:caml_int_compare";
    
    if(c!=0){return c;}else{return "unknown primitive:caml_int_compare";}
    };

var IntPairSet=Set["Make"]([0,compare]);

var
 build_graph=
  function(fundecl)
   {var mat=[0,IntPairSet[1]];
    
    var
     add_interf=
      function(ri,rj)
       {if(Proc["register_class"](ri)=Proc["register_class"](rj))
         {var i=ri[2];
          
          var j=rj[2];
          
          if(i!=j)
           {if(i<j){var p=/* tuple */[0,i,j];}else{var p=/* tuple */[0,j,i];}
            
            if(!IntPairSet[3](p,mat[1]))
             {mat[1]=IntPairSet[4](p,mat[1]),0;
              if(ri[4]=0)
               {ri[7]=/* :: */[0,rj,ri[7]],0;
                if(!rj[5]){ri[9]=ri[9]+1,0}else{}
                }
              else
               {}
              
              if(rj[4]=0)
               {rj[7]=/* :: */[0,ri,rj[7]],0;
                if(!ri[5]){return rj[9]=rj[9]+1,0;}else{return 0;}
                }
              else
               {return 0;}
              }
            else
             {return 0;}
            }
          else
           {return 0;}
          }
        else
         {return 0;}
        };
    
    var
     add_interf_set=
      function(v,s)
       {for(var i=0;i<=v["length"]-1;i++)
         {var r1=v[i];Reg["Set"][13](add_interf(r1),s)}
        };
    
    var
     add_interf_self=
      function(v)
       {for(var i=0;i<=v["length"]-2;i++)
         {var ri=v[i];
          
          for(var j=i+1;j<=v["length"]-1;j++){add_interf(ri,v[j])}
          }
        };
    
    var
     add_interf_move=
      function(src,dst,s)
       {return Reg["Set"][13]
                (function(r)
                  {if(r[2]!=src[2]){return add_interf(dst,r);}else{return 0;}},
                 s);
        };
    
    var
     interf=
      function(i)
       {var destroyed=Proc["destroyed_at_oper"](i[1]);
        
        if(destroyed["length"]>0){add_interf_set(destroyed,i[6])}else{}
        
        var match=i[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 0:
             var exit$1;
             
             var $js=match[1];
             if(typeof $js=="number")
              {switch($js)
                {case 0:exit$1=11;
                 case 1:exit$1=11;
                 case 2:exit$1=11;
                 case 4:exit$1=13;
                 }}
             else
              {switch($js[0]){case 5:exit$1=13;default:exit$1=12;}}
             
             switch(exit$1)
              {case 13:return 0;
               case 12:
                add_interf_set(i[4],i[6]);
                add_interf_self(i[4]);
                return interf(i[2]);
                
               case 11:
                add_interf_move(i[3][0],i[4][0],i[6]);return interf(i[2]);
               }
             
            case 1:exit=15;
            case 2:
             var cases=match[2];
             
             for(var i$1=0;i$1<=cases["length"]-1;i$1++){interf(cases[i$1])}
             
             return interf(i[2]);
             
            case 3:interf(match[1]);return interf(i[2]);
            case 4:exit=15;
            case 6:
             var handler=match[2];
             
             add_interf_set(Proc["destroyed_at_raise"],handler[6]);
             interf(match[1]);
             interf(handler);
             return interf(i[2]);
             
            default:exit=14;}}
        
        switch(exit)
         {case 14:return 0;
          case 15:interf(match[2]);interf(match[3]);return interf(i[2]);
          }
        };
    
    var
     add_pref=
      function(weight,r1,r2)
       {if(weight>0)
         {var i=r1[2];
          
          var j=r2[2];
          
          if(i<j){var p=/* tuple */[0,i,j];}else{var p=/* tuple */[0,j,i];}
          
          if
           (i!=
            j&&
            (r1[4]=0)&&
            (Proc["register_class"](r1)=Proc["register_class"](r2))&&
            !IntPairSet[3](p,mat[1]))
           {return r1[8]=/* :: */[0,/* tuple */[0,r2,weight],r1[8]],0;}
          else
           {return 0;}
          }
        else
         {return 0;}
        };
    
    var
     add_mutual_pref=
      function(weight,r1,r2)
       {add_pref(weight,r1,r2);return add_pref(weight,r2,r1);};
    
    var
     add_spill_cost=
      function(cost,arg)
       {for(var i=0;i<=arg["length"]-1;i++){var r=arg[i];r[10]=r[10]+cost,0}};
    
    var
     prefer=
      function(weight,i)
       {add_spill_cost(weight,i[3]);
        add_spill_cost(weight,i[4]);
        var match=i[1];
        
        var exit;
        
        if(typeof match=="number")
         {switch(match){}}
        else
         {switch(match[0])
           {case 0:
             var exit$1;
             
             var $js=match[1];
             if(typeof $js=="number")
              {switch($js)
                {case 0:
                  add_mutual_pref(weight,i[3][0],i[4][0]);
                  return prefer(weight,i[2]);
                  
                 case 1:
                  add_pref(weight/4,i[3][0],i[4][0]);
                  return prefer(weight,i[2]);
                  
                 case 2:
                  add_pref(weight/4,i[4][0],i[3][0]);
                  return prefer(weight,i[2]);
                  
                 case 4:exit$1=2;
                 }}
             else
              {switch($js[0]){case 5:exit$1=2;default:exit$1=1;}}
             
             switch(exit$1)
              {case 2:return 0;case 1:return prefer(weight,i[2]);}
             
            case 1:
             prefer(weight/2,match[2]);
             prefer(weight/2,match[3]);
             return prefer(weight,i[2]);
             
            case 2:
             var cases=match[2];
             
             for(var i$1=0;i$1<=cases["length"]-1;i$1++)
              {prefer(weight/2,cases[i$1])}
             
             return prefer(weight,i[2]);
             
            case 3:
             prefer(weight<1e3?8*weight:weight,match[1]);
             return prefer(weight,i[2]);
             
            case 4:
             prefer(weight,match[2]);
             prefer(weight,match[3]);
             return prefer(weight,i[2]);
             
            case 6:
             prefer(weight,match[1]);
             prefer(weight,match[2]);
             return prefer(weight,i[2]);
             
            default:exit=3;}}
        
        switch(exit){case 3:return 0;}
        };
    
    interf(fundecl[3]);
    return prefer(8,fundecl[3]);
    };

module["exports"]={"build_graph":build_graph};

