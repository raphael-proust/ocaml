// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var List=require("List");
var Set=require("Set");
var Ident=require("Ident");
var Map=require("Map");


var create_from_ident=function(ident){return /* Ident */[0,ident];};

var
 to_string=
  function(t)
   {if("unknown primitive:isint")
     {if(t!=0){return [0,"R"];}else{return 0;}}
    else
     {var name=Ident["name"](t[1]);
      
      if(name["length"]<=0){return 0;}else{return /* Some */[0,name];}
      }
    };

var Raw_name=[0,create_from_ident,to_string];

var dummy=/* record */[0,0,0,1,0,0,0,0,0,0,0,0];

var currstamp=[0,0];

var reg_list=[0,0];

var
 create=
  function(ty)
   {var r=/* record */[0,0,currstamp[1],ty,0,0,0,0,0,0,0,0];
    
    reg_list[1]=/* :: */[0,r,reg_list[1]],0;
    currstamp[0]++;
    return r;
    };

var
 createv=
  function(tyv)
   {var n=tyv["length"];
    
    var rv="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=n-1;i++){rv[i]=create(tyv[i]),0}
    
    return rv;
    };

var
 createv_like=
  function(rv)
   {var n=rv["length"];
    
    var rv$prime="unknown primitive:caml_make_vect";
    
    for(var i=0;i<=n-1;i++){rv$prime[i]=create(rv[i][3]),0}
    
    return rv$prime;
    };

var clone=function(r){var nr=create(r[3]);nr[1]=r[1],0;return nr;};

var
 at_location=
  function(ty,loc)
   {var r=/* record */[0,1,currstamp[1],ty,loc,0,0,0,0,0,0,0];
    
    currstamp[0]++;
    return r;
    };

var
 anonymous=
  function(t){var match=Raw_name[2](t[1]);if(match){return 0;}else{return 1;}};

var
 name=
  function(t)
   {var match=Raw_name[2](t[1]);
    
    if(match)
     {var raw_name=match[1];
      
      if(t[5])
       {var with_spilled=Pervasives["^"]("spilled-",raw_name);}
      else
       {var with_spilled=raw_name;}
      
      var match$1=t[6];
      
      if(match$1)
       {return Pervasives["^"]
                (with_spilled,
                 Pervasives["^"]("#",Pervasives["string_of_int"](match$1[1])));
        }
      else
       {return with_spilled;}
      }
    else
     {return "";}
    };

var first_virtual_reg_stamp=[0,-1];

var
 reset=
  function(param)
   {if(first_virtual_reg_stamp[1]=-1)
     {first_virtual_reg_stamp[1]=currstamp[1],0}
    else
     {}
    
    currstamp[1]=first_virtual_reg_stamp[1],0;
    return reg_list[1]=0,0;
    };

var all_registers=function(param){return reg_list[1];};

var num_registers=function(param){return currstamp[1];};

var
 reinit_reg=
  function(r)
   {r[4]=0,0;
    r[7]=0,0;
    r[8]=0,0;
    r[9]=0,0;
    if(r[10]>=1e5){return r[10]=1e5,0;}else{return r[10]=0,0;}
    };

var reinit=function(param){return List["iter"](reinit_reg,reg_list[1]);};

var compare=function(r1,r2){return r1[2]-r2[2];};

var RegOrder=[0,compare];

var Set=Set["Make"](RegOrder);

var Map=Map["Make"](RegOrder);

var
 add_set_array=
  function(s,v)
   {var n=v["length"];
    
    if(n!=0)
     {if(n!=1)
       {var
         add_all=
          function(i)
           {if(i>=n){return s;}else{return Set[4](v[i],add_all(i+1));}};
        
        return add_all(0);
        }
      else
       {return Set[4](v[0],s);}
      }
    else
     {return s;}
    };

var
 diff_set_array=
  function(s,v)
   {var n=v["length"];
    
    if(n!=0)
     {if(n!=1)
       {var
         remove_all=
          function(i)
           {if(i>=n){return s;}else{return Set[6](v[i],remove_all(i+1));}};
        
        return remove_all(0);
        }
      else
       {return Set[6](v[0],s);}
      }
    else
     {return s;}
    };

var
 inter_set_array=
  function(s,v)
   {var n=v["length"];
    
    if(n!=0)
     {if(n!=1)
       {var
         inter_all=
          function(i)
           {if(i>=n)
             {return Set[1];}
            else
             {if(Set[3](v[i],s))
               {return Set[4](v[i],inter_all(i+1));}
              else
               {return inter_all(i+1);}
              }
            };
        
        return inter_all(0);
        }
      else
       {if(Set[3](v[0],s)){return Set[4](v[0],Set[1]);}else{return Set[1];}}
      }
    else
     {return Set[1];}
    };

var
 disjoint_set_array=
  function(s,v)
   {var n=v["length"];
    
    if(n!=0)
     {if(n!=1)
       {var
         disjoint_all=
          function(i)
           {if(i>=n)
             {return 1;}
            else
             {if(Set[3](v[i],s)){return 0;}else{return disjoint_all(i+1);}}
            };
        
        return disjoint_all(0);
        }
      else
       {return !Set[3](v[0],s);}
      }
    else
     {return 1;}
    };

var
 set_of_array=
  function(v)
   {var n=v["length"];
    
    if(n!=0)
     {if(n!=1)
       {var
         add_all=
          function(i)
           {if(i>=n){return Set[1];}else{return Set[4](v[i],add_all(i+1));}};
        
        return add_all(0);
        }
      else
       {return Set[4](v[0],Set[1]);}
      }
    else
     {return Set[1];}
    };

module["exports"]=
{"Raw_name":[0,Raw_name[1]],
 "dummy":dummy,
 "create":create,
 "createv":createv,
 "createv_like":createv_like,
 "clone":clone,
 "at_location":at_location,
 "anonymous":anonymous,
 "name":name,
 "Set":Set,
 "Map":Map,
 "add_set_array":add_set_array,
 "diff_set_array":diff_set_array,
 "inter_set_array":inter_set_array,
 "disjoint_set_array":disjoint_set_array,
 "set_of_array":set_of_array,
 "reset":reset,
 "all_registers":all_registers,
 "num_registers":num_registers,
 "reinit":reinit};

