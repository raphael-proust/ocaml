// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Nativeint=require("Nativeint");
var Pervasives=require("Pervasives");
var Int_misc=require("Int_misc");
var Nat=require("Nat");
var Bytes=require("Bytes");
var Int64=require("Int64");
var Sys=require("Sys");


var
 create_big_int=
  function(sign,nat)
   {if
     ((sign=1)||
      (sign=-1)||
      (sign=0)&&
      Nat["is_zero_nat"]
       (nat,0,CamlPrimtivie["num_digits_nat"](nat,0,Nat["length_nat"](nat))))
     {return /* record */[0,sign,nat];}
    else
     {return Pervasives["invalid_arg"]("create_big_int");}
    };

var sign_big_int=function(bi){return bi[1];};

var zero_big_int=/* record */[0,0,Nat["make_nat"](1)];

var unit_big_int=/* record */[0,1,Nat["nat_of_int"](1)];

var
 num_digits_big_int=
  function(bi)
   {return CamlPrimtivie["num_digits_nat"](bi[2],0,Nat["length_nat"](bi[2]));};

var
 minus_big_int=
  function(bi)
   {return /* record */[0,
            -bi[1],
            Nat["copy_nat"](bi[2],0,num_digits_big_int(bi))];
    };

var
 abs_big_int=
  function(bi)
   {return /* record */[0,
            (bi[1]=0)?0:1,
            Nat["copy_nat"](bi[2],0,num_digits_big_int(bi))];
    };

var
 compare_big_int=
  function(bi1,bi2)
   {if((bi1[1]=0)&&(bi2[1]=0))
     {return 0;}
    else
     {if(bi1[1]<bi2[1])
       {return -1;}
      else
       {if(bi1[1]>bi2[1])
         {return 1;}
        else
         {if(bi1[1]=1)
           {return CamlPrimtivie["compare_nat"]
                    (bi1[2],
                     0,
                     num_digits_big_int(bi1),
                     bi2[2],
                     0,
                     num_digits_big_int(bi2));
            }
          else
           {return CamlPrimtivie["compare_nat"]
                    (bi2[2],
                     0,
                     num_digits_big_int(bi2),
                     bi1[2],
                     0,
                     num_digits_big_int(bi1));
            }
          }
        }
      }
    };

var eq_big_int=function(bi1,bi2){return compare_big_int(bi1,bi2)=0;};

var le_big_int=function(bi1,bi2){return compare_big_int(bi1,bi2)<=0;};

var ge_big_int=function(bi1,bi2){return compare_big_int(bi1,bi2)>=0;};

var lt_big_int=function(bi1,bi2){return compare_big_int(bi1,bi2)<0;};

var gt_big_int=function(bi1,bi2){return compare_big_int(bi1,bi2)>0;};

var
 max_big_int=
  function(bi1,bi2){if(lt_big_int(bi1,bi2)){return bi2;}else{return bi1;}};

var
 min_big_int=
  function(bi1,bi2){if(gt_big_int(bi1,bi2)){return bi2;}else{return bi1;}};

var
 pred_big_int=
  function(bi)
   {var match=bi[1];
    
    if(match!=0)
     {if(match!=1)
       {var size_bi=num_digits_big_int(bi);
        
        var size_res=1+size_bi;
        
        var copy_bi=CamlPrimtivie["create_nat"](size_res);
        
        CamlPrimtivie["blit_nat"](copy_bi,0,bi[2],0,size_bi);
        CamlPrimtivie["set_digit_nat"](copy_bi,size_bi,0);
        CamlPrimtivie["incr_nat"](copy_bi,0,size_res,1);
        return /* record */[0,-1,copy_bi];
        }
      else
       {var size_bi$1=num_digits_big_int(bi);
        
        var copy_bi$1=Nat["copy_nat"](bi[2],0,size_bi$1);
        
        CamlPrimtivie["decr_nat"](copy_bi$1,0,size_bi$1,0);
        return /* record */[0,
                Nat["is_zero_nat"](copy_bi$1,0,size_bi$1)?0:1,
                copy_bi$1];
        }
      }
    else
     {return /* record */[0,-1,Nat["nat_of_int"](1)];}
    };

var
 succ_big_int=
  function(bi)
   {var match=bi[1];
    
    if(match!=-1)
     {if(match!=0)
       {var size_bi=num_digits_big_int(bi);
        
        var size_res=1+size_bi;
        
        var copy_bi=CamlPrimtivie["create_nat"](size_res);
        
        CamlPrimtivie["blit_nat"](copy_bi,0,bi[2],0,size_bi);
        CamlPrimtivie["set_digit_nat"](copy_bi,size_bi,0);
        CamlPrimtivie["incr_nat"](copy_bi,0,size_res,1);
        return /* record */[0,1,copy_bi];
        }
      else
       {return /* record */[0,1,Nat["nat_of_int"](1)];}
      }
    else
     {var size_bi$1=num_digits_big_int(bi);
      
      var copy_bi$1=Nat["copy_nat"](bi[2],0,size_bi$1);
      
      CamlPrimtivie["decr_nat"](copy_bi$1,0,size_bi$1,0);
      return /* record */[0,
              Nat["is_zero_nat"](copy_bi$1,0,size_bi$1)?0:-1,
              copy_bi$1];
      }
    };

var
 add_big_int=
  function(bi1,bi2)
   {var size_bi1=num_digits_big_int(bi1);
    
    var size_bi2=num_digits_big_int(bi2);
    
    if(bi1[1]=bi2[1])
     {var
       match=
        CamlPrimtivie["compare_nat"](bi1[2],0,size_bi1,bi2[2],0,size_bi2);
      
      if(match!=-1)
       {var res=CamlPrimtivie["create_nat"](1+size_bi1);
        
        CamlPrimtivie["blit_nat"](res,0,bi1[2],0,size_bi1);
        CamlPrimtivie["set_digit_nat"](res,size_bi1,0);
        CamlPrimtivie["add_nat"](res,0,1+size_bi1,bi2[2],0,size_bi2,0);
        var $js=res;
        }
      else
       {var res$1=CamlPrimtivie["create_nat"](1+size_bi2);
        
        CamlPrimtivie["blit_nat"](res$1,0,bi2[2],0,size_bi2);
        CamlPrimtivie["set_digit_nat"](res$1,size_bi2,0);
        CamlPrimtivie["add_nat"](res$1,0,1+size_bi2,bi1[2],0,size_bi1,0);
        var $js=res$1;
        }
      return /* record */[0,bi1[1],$js];
      }
    else
     {var
       match$1=
        CamlPrimtivie["compare_nat"](bi1[2],0,size_bi1,bi2[2],0,size_bi2);
      
      if(match$1!=0)
       {if(match$1!=1)
         {var res$2=Nat["copy_nat"](bi2[2],0,size_bi2);
          
          return /* record */[0,
                  bi2[1],
                  (CamlPrimtivie["sub_nat"]
                    (res$2,0,size_bi2,bi1[2],0,size_bi1,1),
                   res$2)];
          }
        else
         {var res$3=Nat["copy_nat"](bi1[2],0,size_bi1);
          
          return /* record */[0,
                  bi1[1],
                  (CamlPrimtivie["sub_nat"]
                    (res$3,0,size_bi1,bi2[2],0,size_bi2,1),
                   res$3)];
          }
        }
      else
       {return zero_big_int;}
      }
    };

var
 big_int_of_int=
  function(i)
   {var res=CamlPrimtivie["create_nat"](1);
    
    if(i=Int_misc["monster_int"])
     {CamlPrimtivie["set_digit_nat"](res,0,Int_misc["biggest_int"]),
      CamlPrimtivie["incr_nat"](res,0,1,1)}
    else
     {CamlPrimtivie["set_digit_nat"](res,0,Pervasives["abs"](i))}
    
    return /* record */[0,Int_misc["sign_int"](i),res];
    };

var add_int_big_int=function(i,bi){return add_big_int(big_int_of_int(i),bi);};

var
 sub_big_int=
  function(bi1,bi2){return add_big_int(bi1,minus_big_int(bi2));};

var
 mult_int_big_int=
  function(i,bi)
   {var size_bi=num_digits_big_int(bi);
    
    var size_res=1+size_bi;
    
    if(i=Int_misc["monster_int"])
     {var res=CamlPrimtivie["create_nat"](size_res);
      
      CamlPrimtivie["blit_nat"](res,0,bi[2],0,size_bi);
      CamlPrimtivie["set_digit_nat"](res,size_bi,0);
      CamlPrimtivie["mult_digit_nat"]
       (res,
        0,
        size_res,
        bi[2],
        0,
        size_bi,
        Nat["nat_of_int"](Int_misc["biggest_int"]),
        0);
      return /* record */[0,-sign_big_int(bi),res];
      }
    else
     {var res$1=Nat["make_nat"](size_res);
      
      CamlPrimtivie["mult_digit_nat"]
       (res$1,
        0,
        size_res,
        bi[2],
        0,
        size_bi,
        Nat["nat_of_int"](Pervasives["abs"](i)),
        0);
      return /* record */[0,Int_misc["sign_int"](i)*sign_big_int(bi),res$1];
      }
    };

var
 mult_big_int=
  function(bi1,bi2)
   {var size_bi1=num_digits_big_int(bi1);
    
    var size_bi2=num_digits_big_int(bi2);
    
    var size_res=size_bi1+size_bi2;
    
    var res=Nat["make_nat"](size_res);
    
    return /* record */[0,
            bi1[1]*bi2[1],
            size_bi2>size_bi1
             ?(CamlPrimtivie["mult_nat"]
                (res,0,size_res,bi2[2],0,size_bi2,bi1[2],0,size_bi1),
               res)
             :(CamlPrimtivie["mult_nat"]
                (res,0,size_res,bi1[2],0,size_bi1,bi2[2],0,size_bi2),
               res)];
    };

var
 quomod_big_int=
  function(bi1,bi2)
   {if(bi2[1]=0)
     {throw Division_by_zero;}
    else
     {var size_bi1=num_digits_big_int(bi1);
      
      var size_bi2=num_digits_big_int(bi2);
      
      var
       match=
        CamlPrimtivie["compare_nat"](bi1[2],0,size_bi1,bi2[2],0,size_bi2);
      
      if(match!=-1)
       {if(match!=0)
         {var bi1_negatif=bi1[1]=-1;
          
          if(bi1_negatif)
           {var size_q=1+Pervasives["max"](1+(size_bi1-size_bi2),1);}
          else
           {var size_q=Pervasives["max"](1+(size_bi1-size_bi2),1);}
          
          var size_r=1+Pervasives["max"](size_bi1,size_bi2);
          
          var q=CamlPrimtivie["create_nat"](size_q);
          
          var r=CamlPrimtivie["create_nat"](size_r);
          
          CamlPrimtivie["blit_nat"](r,0,bi1[2],0,size_bi1);
          CamlPrimtivie["set_to_zero_nat"](r,size_bi1,size_r-size_bi1);
          CamlPrimtivie["div_nat"](r,0,size_r,bi2[2],0,size_bi2);
          CamlPrimtivie["blit_nat"](q,0,r,size_bi2,size_r-size_bi2);
          var not_null_mod=!Nat["is_zero_nat"](r,0,size_bi2);
          
          if(bi1_negatif&&not_null_mod)
           {var new_r=Nat["copy_nat"](bi2[2],0,size_bi2);
            
            return /* tuple */[0,
                    /* record */[0,
                     -bi2[1],
                     (CamlPrimtivie["set_digit_nat"](q,-1+size_q,0),
                      CamlPrimtivie["incr_nat"](q,0,size_q,1),
                      q)],
                    /* record */[0,
                     1,
                     (CamlPrimtivie["sub_nat"](new_r,0,size_bi2,r,0,size_bi2,1),
                      new_r)]];
            }
          else
           {if(bi1_negatif)
             {CamlPrimtivie["set_digit_nat"](q,-1+size_q,0)}
            else
             {}
            
            return /* tuple */[0,
                    /* record */[0,
                     Nat["is_zero_nat"](q,0,size_q)?0:bi1[1]*bi2[1],
                     q],
                    /* record */[0,
                     not_null_mod?1:0,
                     Nat["copy_nat"](r,0,size_bi2)]];
            }
          }
        else
         {return /* tuple */[0,big_int_of_int(bi1[1]*bi2[1]),zero_big_int];}
        }
      else
       {if(bi1[1]>=0)
         {return /* tuple */[0,big_int_of_int(0),bi1];}
        else
         {if(bi2[1]>=0)
           {return /* tuple */[0,big_int_of_int(-1),add_big_int(bi2,bi1)];}
          else
           {return /* tuple */[0,big_int_of_int(1),sub_big_int(bi1,bi2)];}
          }
        }
      }
    };

var div_big_int=function(bi1,bi2){return quomod_big_int(bi1,bi2)[1];};

var mod_big_int=function(bi1,bi2){return quomod_big_int(bi1,bi2)[2];};

var
 gcd_big_int=
  function(bi1,bi2)
   {var size_bi1=num_digits_big_int(bi1);
    
    var size_bi2=num_digits_big_int(bi2);
    
    if(Nat["is_zero_nat"](bi1[2],0,size_bi1))
     {return abs_big_int(bi2);}
    else
     {if(Nat["is_zero_nat"](bi2[2],0,size_bi2))
       {return /* record */[0,1,bi1[2]];}
      else
       {var
         match=
          CamlPrimtivie["compare_nat"](bi1[2],0,size_bi1,bi2[2],0,size_bi2);
        
        if(match!=0)
         {if(match!=1)
           {var res=Nat["copy_nat"](bi2[2],0,size_bi2);
            
            var len=Nat["gcd_nat"](res,0,size_bi2,bi1[2],0,size_bi1);
            
            var $js=Nat["copy_nat"](res,0,len);
            }
          else
           {var res$1=Nat["copy_nat"](bi1[2],0,size_bi1);
            
            var len$1=Nat["gcd_nat"](res$1,0,size_bi1,bi2[2],0,size_bi2);
            
            var $js=Nat["copy_nat"](res$1,0,len$1);
            }
          }
        else
         {var $js=bi1[2];}
        return /* record */[0,1,$js];
        }
      }
    };

var monster_big_int=big_int_of_int(Int_misc["monster_int"]);

var monster_nat=monster_big_int[2];

var
 is_int_big_int=
  function(bi)
   {var match=CamlPrimtivie["compare_nat"](bi[2],0,1,monster_nat,0,1);
    
    return (num_digits_big_int(bi)=1)&&
           (match!=-1?match!=0?/* false */0:bi[1]=-1:/* true */1);
    };

var
 int_of_big_int=
  function(bi)
   {try
     {var n=Nat["int_of_nat"](bi[2]);if(bi[1]=-1){return -n;}else{return n;}}
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Failure)
       {if(eq_big_int(bi,monster_big_int))
         {return Int_misc["monster_int"];}
        else
         {return Pervasives["failwith"]("int_of_big_int");}
        }
      else
       {throw exn;}
      }
    };

var
 big_int_of_nativeint=
  function(i)
   {if(i=0)
     {return zero_big_int;}
    else
     {if(i>0)
       {var res=CamlPrimtivie["create_nat"](1);
        
        CamlPrimtivie["set_digit_nat_native"](res,0,i);
        return /* record */[0,1,res];
        }
      else
       {var res$1=CamlPrimtivie["create_nat"](1);
        
        CamlPrimtivie["set_digit_nat_native"](res$1,0,-i);
        return /* record */[0,-1,res$1];
        }
      }
    };

var
 nativeint_of_big_int=
  function(bi)
   {if(num_digits_big_int(bi)>1)
     {Pervasives["failwith"]("nativeint_of_big_int")}
    else
     {}
    
    var i=CamlPrimtivie["nth_digit_nat_native"](bi[2],0);
    
    if(bi[1]>=0)
     {if(i>=0)
       {return i;}
      else
       {return Pervasives["failwith"]("nativeint_of_big_int");}
      }
    else
     {if(i>=0||(i=Nativeint["min_int"]))
       {return -i;}
      else
       {return Pervasives["failwith"]("nativeint_of_big_int");}
      }
    };

var
 big_int_of_int32=
  function(i)
   {return big_int_of_nativeint("unknown primitive:nativeint_of_int32");};

var
 int32_of_big_int=
  function(bi)
   {var i=nativeint_of_big_int(bi);
    
    if(i<=2147483647&&i>=-2147483648)
     {return "unknown primitive:int32_of_nativeint";}
    else
     {return Pervasives["failwith"]("int32_of_big_int");}
    };

var
 big_int_of_int64=
  function(i)
   {if(Sys["word_size"]=64)
     {return big_int_of_nativeint("unknown primitive:nativeint_of_int64");}
    else
     {if(i=0)
       {var match=[/* tuple */0,0,0];}
      else
       {if(i>0)
         {var match=/* tuple */[0,1,i];}
        else
         {var match=/* tuple */[0,-1,-i];}
        }
      
      var absi=match[2];
      
      var sg=match[1];
      
      var res=CamlPrimtivie["create_nat"](2);
      
      CamlPrimtivie["set_digit_nat_native"]
       (res,0,"unknown primitive:nativeint_of_int64");
      CamlPrimtivie["set_digit_nat_native"]
       (res,1,"unknown primitive:nativeint_of_int64");
      return /* record */[0,sg,res];
      }
    };

var
 int64_of_big_int=
  function(bi)
   {if(Sys["word_size"]=64)
     {return "unknown primitive:int64_of_nativeint";}
    else
     {var match=num_digits_big_int(bi);
      
      if(match!=1)
       {if(match!=2)
         {var i=Pervasives["failwith"]("int64_of_big_int");}
        else
         {var
           i=
            "unknown primitive:int64_of_nativeint"&
            4294967295|
            "unknown primitive:int64_of_nativeint"<<
            32;
          }
        }
      else
       {var i="unknown primitive:int64_of_nativeint"&4294967295;}
      
      if(bi[1]>=0)
       {if(i>=0)
         {return i;}
        else
         {return Pervasives["failwith"]("int64_of_big_int");}
        }
      else
       {if(i>=0||(i=Int64["min_int"]))
         {return -i;}
        else
         {return Pervasives["failwith"]("int64_of_big_int");}
        }
      }
    };

var
 nat_of_big_int=
  function(bi)
   {if(bi[1]=-1)
     {return Pervasives["failwith"]("nat_of_big_int");}
    else
     {return Nat["copy_nat"](bi[2],0,num_digits_big_int(bi));}
    };

var
 sys_big_int_of_nat=
  function(nat,off,len)
   {var length=CamlPrimtivie["num_digits_nat"](nat,off,len);
    
    return /* record */[0,
            Nat["is_zero_nat"](nat,off,length)?0:1,
            Nat["copy_nat"](nat,off,length)];
    };

var
 big_int_of_nat=
  function(nat){return sys_big_int_of_nat(nat,0,Nat["length_nat"](nat));};

var
 string_of_big_int=
  function(bi)
   {if(bi[1]=-1)
     {return Pervasives["^"]("-",Nat["string_of_nat"](bi[2]));}
    else
     {return Nat["string_of_nat"](bi[2]);}
    };

var
 sys_big_int_of_string_aux=
  function(s,ofs,len,sgn,base)
   {if(len<1){Pervasives["failwith"]("sys_big_int_of_string")}else{}
    
    var n=Nat["sys_nat_of_string"](base,s,ofs,len);
    
    if(Nat["is_zero_nat"](n,0,Nat["length_nat"](n)))
     {return zero_big_int;}
    else
     {return /* record */[0,sgn,n];}
    };

var
 sys_big_int_of_string_base=
  function(s,ofs,len,sgn)
   {if(len<1){Pervasives["failwith"]("sys_big_int_of_string")}else{}
    
    if(len<2)
     {return sys_big_int_of_string_aux(s,ofs,len,sgn,10);}
    else
     {var match=s[ofs];
      
      var match$1=s[ofs+1];
      
      var match$2=match;
      
      var match$3=match$1;
      
      var exit;
      
      if(match$2!=48)
       {exit=107;}
      else
       {if(match$3>=89)
         {if(match$3!=98)
           {if(match$3!=111)
             {if(match$3!=120){exit=107;}else{exit=104;}}
            else
             {exit=105;}
            }
          else
           {exit=106;}
          }
        else
         {if(match$3!=66)
           {if(match$3!=79)
             {if(match$3>=88){exit=104;}else{exit=107;}}
            else
             {exit=105;}
            }
          else
           {exit=106;}
          }
        }
      
      switch(exit)
       {case 107:return sys_big_int_of_string_aux(s,ofs,len,sgn,10);
        case 104:return sys_big_int_of_string_aux(s,ofs+2,len-2,sgn,16);
        case 105:return sys_big_int_of_string_aux(s,ofs+2,len-2,sgn,8);
        case 106:return sys_big_int_of_string_aux(s,ofs+2,len-2,sgn,2);
        }
      }
    };

var
 sys_big_int_of_string=
  function(s,ofs,len)
   {if(len<1){Pervasives["failwith"]("sys_big_int_of_string")}else{}
    
    var match=s[ofs];
    
    var exit;
    
    var switcher=-43+match;
    
    if(2<switcher>>>0)
     {exit=102;}
    else
     {switch(switcher)
       {case 0:return sys_big_int_of_string_base(s,ofs+1,len-1,1);
        case 1:exit=102;
        case 2:return sys_big_int_of_string_base(s,ofs+1,len-1,-1);
        }
      }
    
    switch(exit){case 102:return sys_big_int_of_string_base(s,ofs,len,1);}
    };

var
 big_int_of_string=
  function(s){return sys_big_int_of_string(s,0,s["length"]);};

var
 power_base_nat=
  function(base,nat,off,len)
   {if(base=0)
     {return Nat["nat_of_int"](0);}
    else
     {if(Nat["is_zero_nat"](nat,off,len)||(base=1))
       {return Nat["nat_of_int"](1);}
      else
       {var power_base=Nat["make_nat"](1+Nat["length_of_digit"]);
        
        var match=Nat["make_power_base"](base,power_base);
        
        var pmax=match[1];
        
        var
         match$1=
          quomod_big_int
           (sys_big_int_of_nat(nat,off,len),big_int_of_int(1+pmax));
        
        var y=match$1[2];
        
        var x=match$1[1];
        
        var match$2=/* tuple */[0,int_of_big_int(x),int_of_big_int(y)];
        
        var rem=match$2[2];
        
        var n=match$2[1];
        
        if(n=0)
         {return Nat["copy_nat"](power_base,-1+rem,1);}
        else
         {var res=Nat["make_nat"](n);
          
          var res2=Nat["make_nat"](1+n);
          
          var l=Int_misc["num_bits_int"](n)-2;
          
          CamlPrimtivie["blit_nat"](res,0,power_base,pmax,1);
          for(var i=l;i>=0;i--)
           {var len$1=CamlPrimtivie["num_digits_nat"](res,0,n);
            
            var len2=Pervasives["min"](n,2*len$1);
            
            var succ_len2=1+len2;
            
            CamlPrimtivie["square_nat"](res2,0,len2,res,0,len$1);
            if((n&1<<i)>0)
             {CamlPrimtivie["set_to_zero_nat"](res,0,len$1),
              CamlPrimtivie["mult_digit_nat"]
               (res,0,succ_len2,res2,0,len2,power_base,pmax)}
            else
             {CamlPrimtivie["blit_nat"](res,0,res2,0,len2)}
            
            CamlPrimtivie["set_to_zero_nat"](res2,0,len2)}
          
          if(rem>0)
           {CamlPrimtivie["mult_digit_nat"]
             (res2,0,1+n,res,0,n,power_base,-1+rem);
            return res2;
            }
          else
           {return res;}
          }
        }
      }
    };

var
 power_int_positive_int=
  function(i,n)
   {var match=Int_misc["sign_int"](n);
    
    if(match!=-1)
     {if(match!=0)
       {var nat=Nat["power_base_int"](Pervasives["abs"](i),n);
        
        return /* record */[0,i>=0?Int_misc["sign_int"](i):((n&1)=0)?1:-1,nat];
        }
      else
       {return unit_big_int;}
      }
    else
     {return Pervasives["invalid_arg"]("power_int_positive_int");}
    };

var
 power_big_int_positive_int=
  function(bi,n)
   {var match=Int_misc["sign_int"](n);
    
    if(match!=-1)
     {if(match!=0)
       {var bi_len=num_digits_big_int(bi);
        
        var res_len=bi_len*n;
        
        var res=Nat["make_nat"](res_len);
        
        var res2=Nat["make_nat"](res_len);
        
        var l=Int_misc["num_bits_int"](n)-2;
        
        CamlPrimtivie["blit_nat"](res,0,bi[2],0,bi_len);
        for(var i=l;i>=0;i--)
         {var len=CamlPrimtivie["num_digits_nat"](res,0,res_len);
          
          var len2=Pervasives["min"](res_len,2*len);
          
          CamlPrimtivie["set_to_zero_nat"](res2,0,len2);
          CamlPrimtivie["square_nat"](res2,0,len2,res,0,len);
          if((n&1<<i)>0)
           {var lenp=Pervasives["min"](res_len,len2+bi_len);
            
            CamlPrimtivie["set_to_zero_nat"](res,0,lenp),
            CamlPrimtivie["mult_nat"](res,0,lenp,res2,0,len2,bi[2],0,bi_len)}
          else
           {CamlPrimtivie["blit_nat"](res,0,res2,0,len2)}
          }
        
        return /* record */[0,bi[1]>=0?bi[1]:((n&1)=0)?1:-1,res];
        }
      else
       {return unit_big_int;}
      }
    else
     {return Pervasives["invalid_arg"]("power_big_int_positive_int");}
    };

var
 power_int_positive_big_int=
  function(i,bi)
   {var match=sign_big_int(bi);
    
    if(match!=-1)
     {if(match!=0)
       {var
         nat=
          power_base_nat(Pervasives["abs"](i),bi[2],0,num_digits_big_int(bi));
        
        return /* record */[0,
                i>=0
                 ?Int_misc["sign_int"](i)
                 :CamlPrimtivie["is_digit_odd"](bi[2],0)?-1:1,
                nat];
        }
      else
       {return unit_big_int;}
      }
    else
     {return Pervasives["invalid_arg"]("power_int_positive_big_int");}
    };

var
 power_big_int_positive_big_int=
  function(bi1,bi2)
   {var match=sign_big_int(bi2);
    
    if(match!=-1)
     {if(match!=0)
       {try
         {return power_big_int_positive_int(bi1,int_of_big_int(bi2));}
        catch(exn)
         {var tag=exn[1];
          
          if(tag=Failure)
           {try
             {return power_int_positive_big_int(int_of_big_int(bi1),bi2);}
            catch(exn$1)
             {var tag$1=exn$1[1];
              
              if(tag$1=Failure){throw Out_of_memory;}else{throw exn$1;}
              }
            }
          else
           {throw exn;}
          }
        }
      else
       {return unit_big_int;}
      }
    else
     {return Pervasives["invalid_arg"]("power_big_int_positive_big_int");}
    };

var
 base_power_big_int=
  function(base,n,bi)
   {var match=Int_misc["sign_int"](n);
    
    if(match!=-1)
     {if(match!=0)
       {var nat=Nat["power_base_int"](base,n);
        
        var
         len_nat=
          CamlPrimtivie["num_digits_nat"](nat,0,Nat["length_nat"](nat));
        
        var len_bi=num_digits_big_int(bi);
        
        var new_len=len_bi+len_nat;
        
        var res=Nat["make_nat"](new_len);
        
        len_bi>len_nat
         ?CamlPrimtivie["mult_nat"]
           (res,0,new_len,bi[2],0,len_bi,nat,0,len_nat)
         :CamlPrimtivie["mult_nat"]
           (res,0,new_len,nat,0,len_nat,bi[2],0,len_bi);
        if(Nat["is_zero_nat"](res,0,new_len))
         {return zero_big_int;}
        else
         {return create_big_int(bi[1],res);}
        }
      else
       {return bi;}
      }
    else
     {var nat$1=Nat["power_base_int"](base,-n);
      
      var
       len_nat$1=
        CamlPrimtivie["num_digits_nat"](nat$1,0,Nat["length_nat"](nat$1));
      
      var len_bi$1=num_digits_big_int(bi);
      
      if(len_bi$1<len_nat$1)
       {return Pervasives["invalid_arg"]("base_power_big_int");}
      else
       {if
         ((len_bi$1=len_nat$1)&&
          (CamlPrimtivie["compare_digits_nat"](bi[2],len_bi$1,nat$1,len_nat$1)=
           -1))
         {return Pervasives["invalid_arg"]("base_power_big_int");}
        else
         {var copy=CamlPrimtivie["create_nat"](1+len_bi$1);
          
          CamlPrimtivie["blit_nat"](copy,0,bi[2],0,len_bi$1);
          CamlPrimtivie["set_digit_nat"](copy,len_bi$1,0);
          CamlPrimtivie["div_nat"](copy,0,1+len_bi$1,nat$1,0,len_nat$1);
          if(!Nat["is_zero_nat"](copy,0,len_nat$1))
           {return Pervasives["invalid_arg"]("base_power_big_int");}
          else
           {return /* record */[0,bi[1],Nat["copy_nat"](copy,len_nat$1,1)];}
          }
        }
      }
    };

var
 float_of_big_int=
  function(bi)
   {return CamlPrimtivie["caml_float_of_string"](string_of_big_int(bi));};

var
 sqrt_big_int=
  function(bi)
   {var match=bi[1];
    
    if(match!=-1)
     {if(match!=0)
       {return /* record */[0,
                1,
                Nat["sqrt_nat"](bi[2],0,num_digits_big_int(bi))];
        }
      else
       {return zero_big_int;}
      }
    else
     {return Pervasives["invalid_arg"]("sqrt_big_int");}
    };

var
 square_big_int=
  function(bi)
   {if(bi[1]=0)
     {return zero_big_int;}
    else
     {var len_bi=num_digits_big_int(bi);
      
      var len_res=2*len_bi;
      
      var res=Nat["make_nat"](len_res);
      
      CamlPrimtivie["square_nat"](res,0,len_res,bi[2],0,len_bi);
      return /* record */[0,1,res];
      }
    };

var
 round_futur_last_digit=
  function(s,off_set,length)
   {var l=-1+(length+off_set);
    
    if(s[l]>=53)
     {var
       round_rec=
        function(l)
         {if(l<off_set)
           {return /* true */1;}
          else
           {var current_char=s[l];
            
            if(current_char=57)
             {s[l]=48,0;return round_rec(-1+l);}
            else
             {s[l]=Char["chr"](1+current_char),0;return /* false */0;}
            }
          };
      
      return round_rec(-1+l);
      }
    else
     {return /* false */0;}
    };

var
 approx_big_int=
  function(prec,bi)
   {var len_bi=num_digits_big_int(bi);
    
    var
     n=
      Pervasives["max"]
       (0,
        int_of_big_int
         (add_int_big_int
           (-prec,
            div_big_int
             (mult_big_int
               (big_int_of_int(-1+len_bi),big_int_of_string("963295986")),
              big_int_of_string("100000000")))));
    
    var
     s=
      Bytes["unsafe_of_string"]
       (string_of_big_int(div_big_int(bi,power_int_positive_int(10,n))));
    
    if(s[0]=45)
     {var match=/* tuple */[0,"-",1,1+prec];}
    else
     {var match=/* tuple */[0,"",0,prec];}
    
    var off=match[2];
    
    var sign=match[1];
    
    if(round_futur_last_digit(s,off,1+prec))
     {return Pervasives["^"]
              (sign,
               Pervasives["^"]
                ("1.",
                 Pervasives["^"]
                  ($$String["make"](prec,48),
                   Pervasives["^"]
                    ("e",Pervasives["string_of_int"](n+1-off+s["length"])))));
      }
    else
     {return Pervasives["^"]
              (sign,
               Pervasives["^"]
                (Bytes["sub_string"](s,off,1),
                 Pervasives["^"]
                  (".",
                   Pervasives["^"]
                    (Bytes["sub_string"](s,1+off,-1+prec),
                     Pervasives["^"]
                      ("e",Pervasives["string_of_int"](n-(1+off)+s["length"]))))));
      }
    };

var
 shift_left_big_int=
  function(bi,n)
   {if(n<0)
     {return Pervasives["invalid_arg"]("shift_left_big_int");}
    else
     {if(n=0)
       {return bi;}
      else
       {if(bi[1]=0)
         {return bi;}
        else
         {var size_bi=num_digits_big_int(bi);
          
          var
           size_res=
            size_bi+(n+Nat["length_of_digit"]-1)/Nat["length_of_digit"];
          
          var res=CamlPrimtivie["create_nat"](size_res);
          
          var ndigits=n/Nat["length_of_digit"];
          
          CamlPrimtivie["set_to_zero_nat"](res,0,ndigits);
          CamlPrimtivie["blit_nat"](res,ndigits,bi[2],0,size_bi);
          var nbits=n%Nat["length_of_digit"];
          
          if(nbits>0)
           {CamlPrimtivie["shift_left_nat"]
             (res,ndigits,size_bi,res,ndigits+size_bi,nbits)}
          else
           {}
          
          return /* record */[0,bi[1],res];
          }
        }
      }
    };

var
 shift_right_towards_zero_big_int=
  function(bi,n)
   {if(n<0)
     {return Pervasives["invalid_arg"]("shift_right_towards_zero_big_int");}
    else
     {if(n=0)
       {return bi;}
      else
       {if(bi[1]=0)
         {return bi;}
        else
         {var size_bi=num_digits_big_int(bi);
          
          var ndigits=n/Nat["length_of_digit"];
          
          var nbits=n%Nat["length_of_digit"];
          
          if(ndigits>=size_bi)
           {return zero_big_int;}
          else
           {var size_res=size_bi-ndigits;
            
            var res=CamlPrimtivie["create_nat"](size_res);
            
            CamlPrimtivie["blit_nat"](res,0,bi[2],ndigits,size_res);
            if(nbits>0)
             {var tmp=CamlPrimtivie["create_nat"](1);
              
              CamlPrimtivie["shift_right_nat"](res,0,size_res,tmp,0,nbits)}
            else
             {}
            
            if(Nat["is_zero_nat"](res,0,size_res))
             {return zero_big_int;}
            else
             {return /* record */[0,bi[1],res];}
            }
          }
        }
      }
    };

var
 two_power_m1_big_int=
  function(n)
   {if(n<0)
     {return Pervasives["invalid_arg"]("two_power_m1_big_int");}
    else
     {if(n=0)
       {return zero_big_int;}
      else
       {var size_res=(n+Nat["length_of_digit"]-1)/Nat["length_of_digit"];
        
        var res=Nat["make_nat"](size_res);
        
        CamlPrimtivie["set_digit_nat_native"]
         (res,n/Nat["length_of_digit"],1<<n%Nat["length_of_digit"]);
        CamlPrimtivie["decr_nat"](res,0,size_res,0);
        return /* record */[0,1,res];
        }
      }
    };

var
 shift_right_big_int=
  function(bi,n)
   {if(n<0)
     {return Pervasives["invalid_arg"]("shift_right_big_int");}
    else
     {if(bi[1]>=0)
       {return shift_right_towards_zero_big_int(bi,n);}
      else
       {return shift_right_towards_zero_big_int
                (sub_big_int(bi,two_power_m1_big_int(n)),n);
        }
      }
    };

var
 extract_big_int=
  function(bi,ofs,n)
   {if(ofs<0||n<0)
     {return Pervasives["invalid_arg"]("extract_big_int");}
    else
     {if(bi[1]=0)
       {return bi;}
      else
       {var size_bi=num_digits_big_int(bi);
        
        var size_res=(n+Nat["length_of_digit"]-1)/Nat["length_of_digit"];
        
        var ndigits=ofs/Nat["length_of_digit"];
        
        var nbits=ofs%Nat["length_of_digit"];
        
        var res=Nat["make_nat"](size_res);
        
        if(ndigits<size_bi)
         {CamlPrimtivie["blit_nat"]
           (res,0,bi[2],ndigits,Pervasives["min"](size_res,size_bi-ndigits))}
        else
         {}
        
        if(bi[1]<0)
         {CamlPrimtivie["complement_nat"](res,0,size_res);
          var
           carry_incr=
            function(i)
             {return i>=
                     ndigits||
                     i>=
                     size_bi||
                     CamlPrimtivie["is_digit_zero"](bi[2],i)&&
                     carry_incr(i+1);
              };
          
          if(carry_incr(0)){CamlPrimtivie["incr_nat"](res,0,size_res,1)}else{}
          }
        else
         {}
        
        if(nbits>0)
         {var tmp=CamlPrimtivie["create_nat"](1);
          
          CamlPrimtivie["shift_right_nat"](res,0,size_res,tmp,0,nbits)}
        else
         {}
        
        var n$prime=n%Nat["length_of_digit"];
        
        if(n$prime>0)
         {var tmp$1=CamlPrimtivie["create_nat"](1);
          
          CamlPrimtivie["set_digit_nat_native"]
           (tmp$1,0,-1>>>Nat["length_of_digit"]-n$prime),
          CamlPrimtivie["land_digit_nat"](res,size_res-1,tmp$1,0)}
        else
         {}
        
        if(Nat["is_zero_nat"](res,0,size_res))
         {return zero_big_int;}
        else
         {return /* record */[0,1,res];}
        }
      }
    };

var
 and_big_int=
  function(a,b)
   {if(a[1]<0||b[1]<0)
     {return Pervasives["invalid_arg"]("and_big_int");}
    else
     {if((a[1]=0)||(b[1]=0))
       {return zero_big_int;}
      else
       {var size_a=num_digits_big_int(a);
        
        var size_b=num_digits_big_int(b);
        
        var size_res=Pervasives["min"](size_a,size_b);
        
        var res=CamlPrimtivie["create_nat"](size_res);
        
        CamlPrimtivie["blit_nat"](res,0,a[2],0,size_res);
        for(var i=0;i<=size_res-1;i++)
         {CamlPrimtivie["land_digit_nat"](res,i,b[2],i)}
        
        if(Nat["is_zero_nat"](res,0,size_res))
         {return zero_big_int;}
        else
         {return /* record */[0,1,res];}
        }
      }
    };

var
 or_big_int=
  function(a,b)
   {if(a[1]<0||b[1]<0)
     {return Pervasives["invalid_arg"]("or_big_int");}
    else
     {if(a[1]=0)
       {return b;}
      else
       {if(b[1]=0)
         {return a;}
        else
         {var size_a=num_digits_big_int(a);
          
          var size_b=num_digits_big_int(b);
          
          var size_res=Pervasives["max"](size_a,size_b);
          
          var res=CamlPrimtivie["create_nat"](size_res);
          
          var
           or_aux=
            function(a$prime,b$prime,size_b$prime)
             {CamlPrimtivie["blit_nat"](res,0,a$prime[2],0,size_res);
              for(var i=0;i<=size_b$prime-1;i++)
               {CamlPrimtivie["lor_digit_nat"](res,i,b$prime[2],i)}
              };
          
          if(size_a>=size_b){or_aux(a,b,size_b)}else{or_aux(b,a,size_a)}
          
          if(Nat["is_zero_nat"](res,0,size_res))
           {return zero_big_int;}
          else
           {return /* record */[0,1,res];}
          }
        }
      }
    };

var
 xor_big_int=
  function(a,b)
   {if(a[1]<0||b[1]<0)
     {return Pervasives["invalid_arg"]("xor_big_int");}
    else
     {if(a[1]=0)
       {return b;}
      else
       {if(b[1]=0)
         {return a;}
        else
         {var size_a=num_digits_big_int(a);
          
          var size_b=num_digits_big_int(b);
          
          var size_res=Pervasives["max"](size_a,size_b);
          
          var res=CamlPrimtivie["create_nat"](size_res);
          
          var
           xor_aux=
            function(a$prime,b$prime,size_b$prime)
             {CamlPrimtivie["blit_nat"](res,0,a$prime[2],0,size_res);
              for(var i=0;i<=size_b$prime-1;i++)
               {CamlPrimtivie["lxor_digit_nat"](res,i,b$prime[2],i)}
              };
          
          if(size_a>=size_b){xor_aux(a,b,size_b)}else{xor_aux(b,a,size_a)}
          
          if(Nat["is_zero_nat"](res,0,size_res))
           {return zero_big_int;}
          else
           {return /* record */[0,1,res];}
          }
        }
      }
    };

module["exports"]=
{"zero_big_int":zero_big_int,
 "unit_big_int":unit_big_int,
 "minus_big_int":minus_big_int,
 "abs_big_int":abs_big_int,
 "add_big_int":add_big_int,
 "succ_big_int":succ_big_int,
 "add_int_big_int":add_int_big_int,
 "sub_big_int":sub_big_int,
 "pred_big_int":pred_big_int,
 "mult_big_int":mult_big_int,
 "mult_int_big_int":mult_int_big_int,
 "square_big_int":square_big_int,
 "sqrt_big_int":sqrt_big_int,
 "quomod_big_int":quomod_big_int,
 "div_big_int":div_big_int,
 "mod_big_int":mod_big_int,
 "gcd_big_int":gcd_big_int,
 "power_int_positive_int":power_int_positive_int,
 "power_big_int_positive_int":power_big_int_positive_int,
 "power_int_positive_big_int":power_int_positive_big_int,
 "power_big_int_positive_big_int":power_big_int_positive_big_int,
 "sign_big_int":sign_big_int,
 "compare_big_int":compare_big_int,
 "eq_big_int":eq_big_int,
 "le_big_int":le_big_int,
 "ge_big_int":ge_big_int,
 "lt_big_int":lt_big_int,
 "gt_big_int":gt_big_int,
 "max_big_int":max_big_int,
 "min_big_int":min_big_int,
 "num_digits_big_int":num_digits_big_int,
 "string_of_big_int":string_of_big_int,
 "big_int_of_string":big_int_of_string,
 "big_int_of_int":big_int_of_int,
 "is_int_big_int":is_int_big_int,
 "int_of_big_int":int_of_big_int,
 "big_int_of_int32":big_int_of_int32,
 "big_int_of_nativeint":big_int_of_nativeint,
 "big_int_of_int64":big_int_of_int64,
 "int32_of_big_int":int32_of_big_int,
 "nativeint_of_big_int":nativeint_of_big_int,
 "int64_of_big_int":int64_of_big_int,
 "float_of_big_int":float_of_big_int,
 "and_big_int":and_big_int,
 "or_big_int":or_big_int,
 "xor_big_int":xor_big_int,
 "shift_left_big_int":shift_left_big_int,
 "shift_right_big_int":shift_right_big_int,
 "shift_right_towards_zero_big_int":shift_right_towards_zero_big_int,
 "extract_big_int":extract_big_int,
 "nat_of_big_int":nat_of_big_int,
 "big_int_of_nat":big_int_of_nat,
 "base_power_big_int":base_power_big_int,
 "sys_big_int_of_string":sys_big_int_of_string,
 "round_futur_last_digit":round_futur_last_digit,
 "approx_big_int":approx_big_int};

