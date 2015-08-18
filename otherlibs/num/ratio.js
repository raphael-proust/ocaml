// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("./string.js");
var Pervasives=require("./pervasives.js");
var Int_misc=require("./int_misc.js");
var Big_int=require("./big_int.js");
var Nat=require("./nat.js");
var Arith_flags=require("./arith_flags.js");
var Bytes=require("./bytes.js");
var CamlPrimitive=require("./camlPrimitive.js");


var
 failwith_zero=
  function(name)
   {var s="infinite or undefined rational number";
    
    return Pervasives["failwith"]
            (name["length"]===0?s:Pervasives["^"](name,Pervasives["^"](" ",s)));
    };

var numerator_ratio=function(r){return r[1];};

var denominator_ratio=function(r){return r[2];};

var null_denominator=function(r){return Big_int["sign_big_int"](r[2])===0;};

var
 verify_null_denominator=
  function(r)
   {return Big_int["sign_big_int"](r[2])===0
            ?Arith_flags["error_when_null_denominator_flag"][1]
              ?failwith_zero("")
              :/* true */1
            :/* false */0;
    };

var sign_ratio=function(r){return Big_int["sign_big_int"](r[1]);};

var
 normalize_ratio=
  function(r)
   {if(r[3])
     {return r;}
    else
     {if(verify_null_denominator(r))
       {r[1]=Big_int["big_int_of_int"](Big_int["sign_big_int"](r[1]));
        r[3]=/* true */1;
        return r;
        }
      else
       {var p=Big_int["gcd_big_int"](r[1],r[2]);
        
        return Big_int["eq_big_int"](p,Big_int["unit_big_int"])
                ?(r[3]=/* true */1,r)
                :(r[1]=
                  Big_int["div_big_int"](r[1],p),
                  r[2]=
                  Big_int["div_big_int"](r[2],p),
                  r[3]=
                  /* true */1,
                  r);
        }
      }
    };

var
 cautious_normalize_ratio=
  function(r)
   {return Arith_flags["normalize_ratio_flag"][1]?normalize_ratio(r):r;};

var
 cautious_normalize_ratio_when_printing=
  function(r)
   {return Arith_flags["normalize_ratio_when_printing_flag"][1]
            ?normalize_ratio(r)
            :r;
    };

var
 create_ratio=
  function(bi1,bi2)
   {var match=Big_int["sign_big_int"](bi2);
    
    return match!==-1
            ?match!==0
              ?cautious_normalize_ratio(/* record */[0,bi1,bi2,/* false */0])
              :Arith_flags["error_when_null_denominator_flag"][1]
                ?failwith_zero("create_ratio")
                :cautious_normalize_ratio
                  (/* record */[0,bi1,bi2,/* false */0])
            :cautious_normalize_ratio
              (/* record */[0,
                Big_int["minus_big_int"](bi1),
                Big_int["minus_big_int"](bi2),
                /* false */0]);
    };

var
 create_normalized_ratio=
  function(bi1,bi2)
   {var match=Big_int["sign_big_int"](bi2);
    
    return match!==-1
            ?match!==0
              ?/* record */[0,bi1,bi2,/* true */1]
              :Arith_flags["error_when_null_denominator_flag"][1]
                ?failwith_zero("create_normalized_ratio")
                :/* record */[0,bi1,bi2,/* true */1]
            :/* record */[0,
              Big_int["minus_big_int"](bi1),
              Big_int["minus_big_int"](bi2),
              /* true */1];
    };

var is_normalized_ratio=function(r){return r[3];};

var
 report_sign_ratio=
  function(r,bi){return sign_ratio(r)===-1?Big_int["minus_big_int"](bi):bi;};

var
 abs_ratio=
  function(r){return /* record */[0,Big_int["abs_big_int"](r[1]),r[2],r[3]];};

var
 is_integer_ratio=
  function(r)
   {return Big_int["eq_big_int"]
            (normalize_ratio(r)[2],Big_int["unit_big_int"]);
    };

var
 add_ratio=
  function(r1,r2)
   {if(Arith_flags["normalize_ratio_flag"][1])
     {var
       p=
        Big_int["gcd_big_int"](normalize_ratio(r1)[2],normalize_ratio(r2)[2]);
      
      if(Big_int["eq_big_int"](p,Big_int["unit_big_int"]))
       {return /* record */[0,
                Big_int["add_big_int"]
                 (Big_int["mult_big_int"](r1[1],r2[2]),
                  Big_int["mult_big_int"](r2[1],r1[2])),
                Big_int["mult_big_int"](r1[2],r2[2]),
                /* true */1];
        }
      else
       {var d1=Big_int["div_big_int"](r1[2],p);
        
        var d2=Big_int["div_big_int"](r2[2],p);
        
        var
         n=
          Big_int["add_big_int"]
           (Big_int["mult_big_int"](r1[1],d2),
            Big_int["mult_big_int"](d1,r2[1]));
        
        var p$prime=Big_int["gcd_big_int"](n,p);
        
        return /* record */[0,
                Big_int["div_big_int"](n,p$prime),
                Big_int["mult_big_int"]
                 (d1,Big_int["div_big_int"](r2[2],p$prime)),
                /* true */1];
        }
      }
    else
     {return /* record */[0,
              Big_int["add_big_int"]
               (Big_int["mult_big_int"](r1[1],r2[2]),
                Big_int["mult_big_int"](r1[2],r2[1])),
              Big_int["mult_big_int"](r1[2],r2[2]),
              /* false */0];
      }
    };

var
 minus_ratio=
  function(r)
   {return /* record */[0,Big_int["minus_big_int"](r[1]),r[2],r[3]];};

var
 add_int_ratio=
  function(i,r)
   {cautious_normalize_ratio(r);
    return /* record */[0,
            Big_int["add_big_int"](Big_int["mult_int_big_int"](i,r[2]),r[1]),
            r[2],
            r[3]];
    };

var
 add_big_int_ratio=
  function(bi,r)
   {cautious_normalize_ratio(r);
    return /* record */[0,
            Big_int["add_big_int"](Big_int["mult_big_int"](bi,r[2]),r[1]),
            r[2],
            r[3]];
    };

var sub_ratio=function(r1,r2){return add_ratio(r1,minus_ratio(r2));};

var
 mult_ratio=
  function(r1,r2)
   {if(Arith_flags["normalize_ratio_flag"][1])
     {var
       p1=
        Big_int["gcd_big_int"](normalize_ratio(r1)[1],normalize_ratio(r2)[2]);
      
      var p2=Big_int["gcd_big_int"](r2[1],r1[2]);
      
      var
       match=
        Big_int["eq_big_int"](p1,Big_int["unit_big_int"])
         ?/* tuple */[0,r1[1],r2[2]]
         :/* tuple */[0,
           Big_int["div_big_int"](r1[1],p1),
           Big_int["div_big_int"](r2[2],p1)];
      
      var
       match$1=
        Big_int["eq_big_int"](p2,Big_int["unit_big_int"])
         ?/* tuple */[0,r2[1],r1[2]]
         :/* tuple */[0,
           Big_int["div_big_int"](r2[1],p2),
           Big_int["div_big_int"](r1[2],p2)];
      
      return /* record */[0,
              Big_int["mult_big_int"](match[1],match$1[1]),
              Big_int["mult_big_int"](match$1[2],match[2]),
              /* true */1];
      }
    else
     {return /* record */[0,
              Big_int["mult_big_int"](r1[1],r2[1]),
              Big_int["mult_big_int"](r1[2],r2[2]),
              /* false */0];
      }
    };

var
 mult_int_ratio=
  function(i,r)
   {if(Arith_flags["normalize_ratio_flag"][1])
     {var
       p=
        Big_int["gcd_big_int"]
         (normalize_ratio(r)[2],Big_int["big_int_of_int"](i));
      
      return Big_int["eq_big_int"](p,Big_int["unit_big_int"])
              ?/* record */[0,
                Big_int["mult_big_int"](Big_int["big_int_of_int"](i),r[1]),
                r[2],
                /* true */1]
              :/* record */[0,
                Big_int["mult_big_int"]
                 (Big_int["div_big_int"](Big_int["big_int_of_int"](i),p),r[1]),
                Big_int["div_big_int"](r[2],p),
                /* true */1];
      }
    else
     {return /* record */[0,
              Big_int["mult_int_big_int"](i,r[1]),
              r[2],
              /* false */0];
      }
    };

var
 mult_big_int_ratio=
  function(bi,r)
   {if(Arith_flags["normalize_ratio_flag"][1])
     {var p=Big_int["gcd_big_int"](normalize_ratio(r)[2],bi);
      
      return Big_int["eq_big_int"](p,Big_int["unit_big_int"])
              ?/* record */[0,
                Big_int["mult_big_int"](bi,r[1]),
                r[2],
                /* true */1]
              :/* record */[0,
                Big_int["mult_big_int"](Big_int["div_big_int"](bi,p),r[1]),
                Big_int["div_big_int"](r[2],p),
                /* true */1];
      }
    else
     {return /* record */[0,
              Big_int["mult_big_int"](bi,r[1]),
              r[2],
              /* false */0];
      }
    };

var
 square_ratio=
  function(r)
   {cautious_normalize_ratio(r);
    return /* record */[0,
            Big_int["square_big_int"](r[1]),
            Big_int["square_big_int"](r[2]),
            r[3]];
    };

var
 inverse_ratio=
  function(r)
   {return Arith_flags["error_when_null_denominator_flag"][1]&&
            Big_int["sign_big_int"](r[1])===
            0
            ?failwith_zero("inverse_ratio")
            :/* record */[0,
              report_sign_ratio(r,r[2]),
              Big_int["abs_big_int"](r[1]),
              r[3]];
    };

var div_ratio=function(r1,r2){return mult_ratio(r1,inverse_ratio(r2));};

var
 integer_ratio=
  function(r)
   {return null_denominator(r)
            ?failwith_zero("integer_ratio")
            :sign_ratio(r)===0
              ?Big_int["zero_big_int"]
              :report_sign_ratio
                (r,
                 Big_int["div_big_int"]
                  (Big_int["abs_big_int"](r[1]),Big_int["abs_big_int"](r[2])));
    };

var
 floor_ratio=
  function(r)
   {verify_null_denominator(r);return Big_int["div_big_int"](r[1],r[2]);};

var
 round_ratio=
  function(r)
   {verify_null_denominator(r);
    var abs_num=Big_int["abs_big_int"](r[1]);
    
    var bi=Big_int["div_big_int"](abs_num,r[2]);
    
    return report_sign_ratio
            (r,
             Big_int["sign_big_int"]
               (Big_int["sub_big_int"]
                 (Big_int["mult_int_big_int"]
                   (2,
                    Big_int["sub_big_int"]
                     (abs_num,Big_int["mult_big_int"](r[2],bi))),
                  r[2]))===
              -1
              ?bi
              :Big_int["succ_big_int"](bi));
    };

var
 ceiling_ratio=
  function(r)
   {return is_integer_ratio(r)?r[1]:Big_int["succ_big_int"](floor_ratio(r));};

var
 eq_ratio=
  function(r1,r2)
   {normalize_ratio(r1);
    normalize_ratio(r2);
    return Big_int["eq_big_int"](r1[1],r2[1])&&
           Big_int["eq_big_int"](r1[2],r2[2]);
    };

var
 compare_ratio=
  function(r1,r2)
   {if(verify_null_denominator(r1))
     {var sign_num_r1=Big_int["sign_big_int"](r1[1]);
      
      if(verify_null_denominator(r2))
       {var sign_num_r2=Big_int["sign_big_int"](r2[1]);
        
        return sign_num_r1===1&&sign_num_r2===-1
                ?1
                :sign_num_r1===-1&&sign_num_r2===1?-1:0;
        }
      else
       {return sign_num_r1;}
      }
    else
     {if(verify_null_denominator(r2))
       {return -Big_int["sign_big_int"](r2[1]);}
      else
       {var
         match=
          Int_misc["compare_int"]
           (Big_int["sign_big_int"](r1[1]),Big_int["sign_big_int"](r2[1]));
        
        var exit;
        
        var switcher=1+match;
        
        if(2<switcher>>>0)
         {exit=67;}
        else
         {switch(switcher){case 0:return -1;case 1:exit=67;case 2:return 1;}}
        
        switch(exit)
         {case 67:
           return Big_int["eq_big_int"](r1[2],r2[2])
                   ?Big_int["compare_big_int"](r1[1],r2[1])
                   :Big_int["compare_big_int"]
                     (Big_int["mult_big_int"](r1[1],r2[2]),
                      Big_int["mult_big_int"](r1[2],r2[1]));
           
          }
        }
      }
    };

var lt_ratio=function(r1,r2){return compare_ratio(r1,r2)<0;};

var le_ratio=function(r1,r2){return compare_ratio(r1,r2)<=0;};

var gt_ratio=function(r1,r2){return compare_ratio(r1,r2)>0;};

var ge_ratio=function(r1,r2){return compare_ratio(r1,r2)>=0;};

var max_ratio=function(r1,r2){return lt_ratio(r1,r2)?r2:r1;};

var min_ratio=function(r1,r2){return gt_ratio(r1,r2)?r2:r1;};

var
 eq_big_int_ratio=
  function(bi,r){return is_integer_ratio(r)&&Big_int["eq_big_int"](bi,r[1]);};

var
 compare_big_int_ratio=
  function(bi,r)
   {normalize_ratio(r);
    return verify_null_denominator(r)
            ?-Big_int["sign_big_int"](r[1])
            :Big_int["compare_big_int"](Big_int["mult_big_int"](bi,r[2]),r[1]);
    };

var lt_big_int_ratio=function(bi,r){return compare_big_int_ratio(bi,r)<0;};

var le_big_int_ratio=function(bi,r){return compare_big_int_ratio(bi,r)<=0;};

var gt_big_int_ratio=function(bi,r){return compare_big_int_ratio(bi,r)>0;};

var ge_big_int_ratio=function(bi,r){return compare_big_int_ratio(bi,r)>=0;};

var
 int_of_ratio=
  function(r)
   {return is_integer_ratio(r)&&Big_int["is_int_big_int"](r[1])
            ?Big_int["int_of_big_int"](r[1])
            :Pervasives["failwith"]("integer argument required");
    };

var
 ratio_of_int=
  function(i)
   {return /* record */[0,
            Big_int["big_int_of_int"](i),
            Big_int["unit_big_int"],
            /* true */1];
    };

var
 ratio_of_nat=
  function(nat)
   {return /* record */[0,
            Big_int["big_int_of_nat"](nat),
            Big_int["unit_big_int"],
            /* true */1];
    };

var
 nat_of_ratio=
  function(r)
   {normalize_ratio(r);
    return !is_integer_ratio(r)
            ?Pervasives["failwith"]("nat_of_ratio")
            :Big_int["sign_big_int"](r[1])>-1
              ?Big_int["nat_of_big_int"](r[1])
              :Pervasives["failwith"]("nat_of_ratio");
    };

var
 ratio_of_big_int=
  function(bi){return /* record */[0,bi,Big_int["unit_big_int"],/* true */1];};

var
 big_int_of_ratio=
  function(r)
   {normalize_ratio(r);
    return is_integer_ratio(r)?r[1]:Pervasives["failwith"]("big_int_of_ratio");
    };

var
 div_int_ratio=
  function(i,r)
   {verify_null_denominator(r);return mult_int_ratio(i,inverse_ratio(r));};

var div_ratio_int=function(r,i){return div_ratio(r,ratio_of_int(i));};

var
 div_big_int_ratio=
  function(bi,r)
   {verify_null_denominator(r);
    return mult_big_int_ratio(bi,inverse_ratio(r));
    };

var
 div_ratio_big_int=
  function(r,bi){return div_ratio(r,ratio_of_big_int(bi));};

var
 compare_num_string=
  function(s1,s2,i,len)
   {if(i>=len)
     {return 0;}
    else
     {var c1=s1["charCodeAt"](i);
      
      var c2=s2["charCodeAt"](i);
      
      var c=Int_misc["compare_int"](c1,c2);
      
      return c!==0?c:compare_num_string(s1,s2,1+i,len);
      }
    };

var
 only_zeros=
  function(s,i,lim)
   {return i>=lim||s["charCodeAt"](i)===48&&only_zeros(s,1+i,lim);};

var
 msd_ratio=
  function(r)
   {cautious_normalize_ratio(r);
    if(null_denominator(r))
     {return failwith_zero("msd_ratio");}
    else
     {if(Big_int["sign_big_int"](r[1])===0)
       {return 0;}
      else
       {var str_num=Big_int["string_of_big_int"](r[1]);
        
        var str_den=Big_int["string_of_big_int"](r[2]);
        
        var size_num=str_num["length"];
        
        var size_den=str_den["length"];
        
        var size_min=Pervasives["min"](size_num,size_den);
        
        var m=size_num-size_den;
        
        var cmp=compare_num_string(str_num,str_den,0,size_min);
        
        var exit;
        
        var switcher=1+cmp;
        
        if(2<switcher>>>0)
         {exit=33;}
        else
         {switch(switcher){case 0:return -1+m;case 1:exit=33;case 2:return m;}
          }
        
        switch(exit)
         {case 33:return m>=0?m:only_zeros(str_den,size_min,size_den)?m:-1+m;}
        }
      }
    };

var
 approx_ratio_fix=
  function(n,r)
   {if(null_denominator(r))
     {return failwith_zero("approx_ratio_fix");}
    else
     {var sign_r=sign_ratio(r);
      
      if(sign_r===0)
       {return "+0";}
      else
       {if(n>=0)
         {var
           s1=
            Nat["string_of_nat"]
             (Big_int["nat_of_big_int"]
               (Big_int["div_big_int"]
                 (Big_int["base_power_big_int"]
                   (10,1+n,Big_int["abs_big_int"](r[1])),
                  r[2])));
          
          var
           s2=
            Big_int["round_futur_last_digit"]
              (Bytes["unsafe_of_string"](s1),0,s1["length"])
             ?Pervasives["^"]("1",s1)
             :s1;
          
          var l2=s2["length"]-1;
          
          if(l2>n)
           {var s=Bytes["make"](l2+2,48);
            
            s[0]=sign_r===-1?45:43;
            $$String["blit"](s2,0,s,1,l2-n);
            s[l2-n+1]=46;
            $$String["blit"](s2,l2-n,s,l2-n+2,n);
            return Bytes["unsafe_to_string"](s);
            }
          else
           {var s$1=Bytes["make"](n+3,48);
            
            s$1[0]=sign_r===-1?45:43;
            s$1[2]=46;
            $$String["blit"](s2,0,s$1,n+3-l2,l2);
            return Bytes["unsafe_to_string"](s$1);
            }
          }
        else
         {var
           s$2=
            Big_int["string_of_big_int"]
             (Big_int["div_big_int"]
               (Big_int["abs_big_int"](r[1]),
                Big_int["base_power_big_int"](10,-n,r[2])));
          
          var len=1+s$2["length"];
          
          var s$prime=Bytes["make"](len,48);
          
          s$prime[0]=sign_r===-1?45:43;
          $$String["blit"](s$2,0,s$prime,1,-1+len);
          return Bytes["unsafe_to_string"](s$prime);
          }
        }
      }
    };

var
 num_decimal_digits_int=
  function(n){return Pervasives["string_of_int"](n)["length"];};

var
 approx_ratio_exp=
  function(n,r)
   {if(null_denominator(r))
     {return failwith_zero("approx_ratio_exp");}
    else
     {if(n<=0)
       {return Pervasives["invalid_arg"]("approx_ratio_exp");}
      else
       {var sign_r=sign_ratio(r);
        
        var i=n+3;
        
        if(sign_r===0)
         {return $$String["concat"]
                  ("",
                   /* :: */[0,
                    "+0.",
                    /* :: */[0,
                     $$String["make"](n,48),
                     [/* :: */0,"e0",/* [] */0]]]);
          }
        else
         {var msd=msd_ratio(abs_ratio(r));
          
          var k=n-msd;
          
          var
           nat=
            Big_int["nat_of_big_int"]
             (k<0
               ?Big_int["div_big_int"]
                 (Big_int["abs_big_int"](r[1]),
                  Big_int["base_power_big_int"](10,-k,r[2]))
               :Big_int["div_big_int"]
                 (Big_int["base_power_big_int"]
                   (10,k,Big_int["abs_big_int"](r[1])),
                  r[2]));
          
          var s=Nat["string_of_nat"](nat);
          
          if
           (Big_int["round_futur_last_digit"]
             (Bytes["unsafe_of_string"](s),0,s["length"]))
           {var m=num_decimal_digits_int(1+msd);
            
            var str=Bytes["make"](n+m+4,48);
            
            $$String["blit"](sign_r===-1?"-1.":"+1.",0,str,0,3);
            str[i]=101;
            i=1+i;
            
            m===0
             ?(str[i]=48,0)
             :$$String["blit"](Pervasives["string_of_int"](1+msd),0,str,i,m);
            
            return Bytes["unsafe_to_string"](str);
            }
          else
           {var m$1=num_decimal_digits_int(1+msd);
            
            var p=n+3;
            
            var str$1=Bytes["make"](1+(m$1+p),48);
            
            $$String["blit"](sign_r===-1?"-0.":"+0.",0,str$1,0,3);
            $$String["blit"](s,0,str$1,3,n);
            str$1[p]=101;
            m$1===0
             ?(str$1[1+p]=48,0)
             :$$String["blit"]
               (Pervasives["string_of_int"](1+msd),0,str$1,1+p,m$1);
            
            return Bytes["unsafe_to_string"](str$1);
            }
          }
        }
      }
    };

var
 float_of_rational_string=
  function(r)
   {var s=approx_ratio_exp(Arith_flags["floating_precision"][1],r);
    
    return s["charCodeAt"](0)===43?$$String["sub"](s,1,-1+s["length"]):s;
    };

var
 string_of_ratio=
  function(r)
   {cautious_normalize_ratio_when_printing(r);
    return Arith_flags["approx_printing_flag"][1]
            ?float_of_rational_string(r)
            :Pervasives["^"]
              (Big_int["string_of_big_int"](r[1]),
               Pervasives["^"]("/",Big_int["string_of_big_int"](r[2])));
    };

var
 ratio_of_string=
  function(s)
   {try
     {var n=$$String["index"](s,47);
      
      return create_ratio
              (Big_int["sys_big_int_of_string"](s,0,n),
               Big_int["sys_big_int_of_string"](s,n+1,s["length"]-n-1));
      }
    catch(exn)
     {if(exn===CamlPrimitive["caml_global_data"]["Not_found"])
       {return /* record */[0,
                Big_int["big_int_of_string"](s),
                Big_int["unit_big_int"],
                /* true */1];
        }
      else
       {throw exn;}
      }
    };

var
 float_of_ratio=
  function(r)
   {return CamlPrimitive["caml_float_of_string"](float_of_rational_string(r));
    };

var
 power_ratio_positive_int=
  function(r,n)
   {return create_ratio
            (Big_int["power_big_int_positive_int"](r[1],n),
             Big_int["power_big_int_positive_int"](r[2],n));
    };

var
 power_ratio_positive_big_int=
  function(r,bi)
   {return create_ratio
            (Big_int["power_big_int_positive_big_int"](r[1],bi),
             Big_int["power_big_int_positive_big_int"](r[2],bi));
    };

module["exports"]=
{"null_denominator":null_denominator,
 "numerator_ratio":numerator_ratio,
 "denominator_ratio":denominator_ratio,
 "sign_ratio":sign_ratio,
 "normalize_ratio":normalize_ratio,
 "cautious_normalize_ratio":cautious_normalize_ratio,
 "cautious_normalize_ratio_when_printing":
 cautious_normalize_ratio_when_printing,
 "create_ratio":create_ratio,
 "create_normalized_ratio":create_normalized_ratio,
 "is_normalized_ratio":is_normalized_ratio,
 "report_sign_ratio":report_sign_ratio,
 "abs_ratio":abs_ratio,
 "is_integer_ratio":is_integer_ratio,
 "add_ratio":add_ratio,
 "minus_ratio":minus_ratio,
 "add_int_ratio":add_int_ratio,
 "add_big_int_ratio":add_big_int_ratio,
 "sub_ratio":sub_ratio,
 "mult_ratio":mult_ratio,
 "mult_int_ratio":mult_int_ratio,
 "mult_big_int_ratio":mult_big_int_ratio,
 "square_ratio":square_ratio,
 "inverse_ratio":inverse_ratio,
 "div_ratio":div_ratio,
 "integer_ratio":integer_ratio,
 "floor_ratio":floor_ratio,
 "round_ratio":round_ratio,
 "ceiling_ratio":ceiling_ratio,
 "eq_ratio":eq_ratio,
 "compare_ratio":compare_ratio,
 "lt_ratio":lt_ratio,
 "le_ratio":le_ratio,
 "gt_ratio":gt_ratio,
 "ge_ratio":ge_ratio,
 "max_ratio":max_ratio,
 "min_ratio":min_ratio,
 "eq_big_int_ratio":eq_big_int_ratio,
 "compare_big_int_ratio":compare_big_int_ratio,
 "lt_big_int_ratio":lt_big_int_ratio,
 "le_big_int_ratio":le_big_int_ratio,
 "gt_big_int_ratio":gt_big_int_ratio,
 "ge_big_int_ratio":ge_big_int_ratio,
 "int_of_ratio":int_of_ratio,
 "ratio_of_int":ratio_of_int,
 "ratio_of_nat":ratio_of_nat,
 "nat_of_ratio":nat_of_ratio,
 "ratio_of_big_int":ratio_of_big_int,
 "big_int_of_ratio":big_int_of_ratio,
 "div_int_ratio":div_int_ratio,
 "div_ratio_int":div_ratio_int,
 "div_big_int_ratio":div_big_int_ratio,
 "div_ratio_big_int":div_ratio_big_int,
 "approx_ratio_fix":approx_ratio_fix,
 "approx_ratio_exp":approx_ratio_exp,
 "float_of_rational_string":float_of_rational_string,
 "string_of_ratio":string_of_ratio,
 "ratio_of_string":ratio_of_string,
 "float_of_ratio":float_of_ratio,
 "power_ratio_positive_int":power_ratio_positive_int,
 "power_ratio_positive_big_int":power_ratio_positive_big_int};

