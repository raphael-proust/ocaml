// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("./pervasives.js");
var Ratio=require("./ratio.js");
var Int_misc=require("./int_misc.js");
var Big_int=require("./big_int.js");
var Nat=require("./nat.js");
var Arith_flags=require("./arith_flags.js");
var CamlPrimitive=require("./camlPrimitive.js");


var biggest_INT=Big_int["big_int_of_int"](Int_misc["biggest_int"]);

var least_INT=Big_int["big_int_of_int"](Int_misc["least_int"]);

var
 num_of_big_int=
  function(bi)
   {return Big_int["le_big_int"](bi,biggest_INT)&&
            Big_int["ge_big_int"](bi,least_INT)
            ?/* Int */[0,Big_int["int_of_big_int"](bi)]
            :/* Big_int */[1,bi];
    };

var
 numerator_num=
  function(n)
   {var exit;
    
    switch(n[0])
     {case 0:exit=76;
      case 1:exit=76;
      case 2:
       var r=n[1];
       
       Ratio["normalize_ratio"](r);
       return num_of_big_int(Ratio["numerator_ratio"](r));
       
      }
    
    switch(exit){case 76:return n;}
    };

var
 denominator_num=
  function(n)
   {var exit;
    
    switch(n[0])
     {case 0:exit=74;
      case 1:exit=74;
      case 2:
       var r=n[1];
       
       Ratio["normalize_ratio"](r);
       return num_of_big_int(Ratio["denominator_ratio"](r));
       
      }
    
    switch(exit){case 74:return [/* Int */0,1];}
    };

var
 normalize_num=
  function(param)
   {switch(param[0])
     {case 0:return /* Int */[0,param[1]];
      case 1:return num_of_big_int(param[1]);
      case 2:
       var r=param[1];
       
       return Ratio["is_integer_ratio"](r)
               ?num_of_big_int(Ratio["numerator_ratio"](r))
               :/* Ratio */[2,r];
       
      }
    };

var
 cautious_normalize_num_when_printing=
  function(n)
   {return Arith_flags["normalize_ratio_when_printing_flag"][1]
            ?normalize_num(n)
            :n;
    };

var
 num_of_ratio=
  function(r)
   {Ratio["normalize_ratio"](r);
    return !Ratio["is_integer_ratio"](r)
            ?/* Ratio */[2,r]
            :Big_int["is_int_big_int"](Ratio["numerator_ratio"](r))
              ?/* Int */[0,
                Big_int["int_of_big_int"](Ratio["numerator_ratio"](r))]
              :/* Big_int */[1,Ratio["numerator_ratio"](r)];
    };

var
 add_num=
  function(a,b)
   {switch(a[0])
     {case 0:
       var int1=a[1];
       
       switch(b[0])
        {case 0:
          var int2=b[1];
          
          var r=int1+int2;
          
          return (int1^int2|int1^r^-1)<0
                  ?/* Int */[0,r]
                  :/* Big_int */[1,
                    Big_int["add_big_int"]
                     (Big_int["big_int_of_int"](int1),
                      Big_int["big_int_of_int"](int2))];
          
         case 1:return num_of_big_int(Big_int["add_int_big_int"](int1,b[1]));
         case 2:return /* Ratio */[2,Ratio["add_int_ratio"](int1,b[1])];
         }
       
      case 1:
       var bi=a[1];
       
       switch(b[0])
        {case 0:return num_of_big_int(Big_int["add_int_big_int"](b[1],bi));
         case 1:return num_of_big_int(Big_int["add_big_int"](bi,b[1]));
         case 2:return /* Ratio */[2,Ratio["add_big_int_ratio"](bi,b[1])];
         }
       
      case 2:
       var r$1=a[1];
       
       switch(b[0])
        {case 0:return /* Ratio */[2,Ratio["add_int_ratio"](b[1],r$1)];
         case 1:return /* Ratio */[2,Ratio["add_big_int_ratio"](b[1],r$1)];
         case 2:return num_of_ratio(Ratio["add_ratio"](r$1,b[1]));
         }
       
      }
    };

var $plus$slash=add_num;

var
 minus_num=
  function(param)
   {switch(param[0])
     {case 0:
       var i=param[1];
       
       return i===Int_misc["monster_int"]
               ?/* Big_int */[1,
                 Big_int["minus_big_int"](Big_int["big_int_of_int"](i))]
               :/* Int */[0,-i];
       
      case 1:return /* Big_int */[1,Big_int["minus_big_int"](param[1])];
      case 2:return /* Ratio */[2,Ratio["minus_ratio"](param[1])];
      }
    };

var sub_num=function(n1,n2){return add_num(n1,minus_num(n2));};

var $neg$slash=sub_num;

var
 mult_num=
  function(a,b)
   {switch(a[0])
     {case 0:
       var int1=a[1];
       
       switch(b[0])
        {case 0:
          var int2=b[1];
          
          return Int_misc["num_bits_int"](int1)+
                  Int_misc["num_bits_int"](int2)<
                  Int_misc["length_of_int"]
                  ?/* Int */[0,int1*int2]
                  :num_of_big_int
                    (Big_int["mult_big_int"]
                      (Big_int["big_int_of_int"](int1),
                       Big_int["big_int_of_int"](int2)));
          
         case 1:return num_of_big_int(Big_int["mult_int_big_int"](int1,b[1]));
         case 2:return num_of_ratio(Ratio["mult_int_ratio"](int1,b[1]));
         }
       
      case 1:
       var bi=a[1];
       
       switch(b[0])
        {case 0:return num_of_big_int(Big_int["mult_int_big_int"](b[1],bi));
         case 1:return num_of_big_int(Big_int["mult_big_int"](bi,b[1]));
         case 2:return num_of_ratio(Ratio["mult_big_int_ratio"](bi,b[1]));
         }
       
      case 2:
       var r=a[1];
       
       switch(b[0])
        {case 0:return num_of_ratio(Ratio["mult_int_ratio"](b[1],r));
         case 1:return num_of_ratio(Ratio["mult_big_int_ratio"](b[1],r));
         case 2:return num_of_ratio(Ratio["mult_ratio"](r,b[1]));
         }
       
      }
    };

var $star$slash=mult_num;

var
 square_num=
  function(param)
   {switch(param[0])
     {case 0:
       var i=param[1];
       
       return 2*Int_misc["num_bits_int"](i)<Int_misc["length_of_int"]
               ?/* Int */[0,i*i]
               :num_of_big_int
                 (Big_int["square_big_int"](Big_int["big_int_of_int"](i)));
       
      case 1:return /* Big_int */[1,Big_int["square_big_int"](param[1])];
      case 2:return /* Ratio */[2,Ratio["square_ratio"](param[1])];
      }
    };

var
 div_num=
  function(n1,n2)
   {switch(n1[0])
     {case 0:
       var i1=n1[1];
       
       switch(n2[0])
        {case 0:
          return num_of_ratio
                  (Ratio["create_ratio"]
                    (Big_int["big_int_of_int"](i1),
                     Big_int["big_int_of_int"](n2[1])));
          
         case 1:
          return num_of_ratio
                  (Ratio["create_ratio"](Big_int["big_int_of_int"](i1),n2[1]));
          
         case 2:return num_of_ratio(Ratio["div_int_ratio"](i1,n2[1]));
         }
       
      case 1:
       var bi1=n1[1];
       
       switch(n2[0])
        {case 0:
          return num_of_ratio
                  (Ratio["create_ratio"](bi1,Big_int["big_int_of_int"](n2[1])));
          
         case 1:return num_of_ratio(Ratio["create_ratio"](bi1,n2[1]));
         case 2:return num_of_ratio(Ratio["div_big_int_ratio"](bi1,n2[1]));
         }
       
      case 2:
       var r1=n1[1];
       
       switch(n2[0])
        {case 0:return num_of_ratio(Ratio["div_ratio_int"](r1,n2[1]));
         case 1:return num_of_ratio(Ratio["div_ratio_big_int"](r1,n2[1]));
         case 2:return num_of_ratio(Ratio["div_ratio"](r1,n2[1]));
         }
       
      }
    };

var $slash$slash=div_num;

var
 floor_num=
  function(n)
   {switch(n[0])
     {case 0:return n;
      case 1:return n;
      case 2:return num_of_big_int(Ratio["floor_ratio"](n[1]));
      }
    };

var
 ratio_of_num=
  function(param)
   {switch(param[0])
     {case 0:return Ratio["ratio_of_int"](param[1]);
      case 1:return Ratio["ratio_of_big_int"](param[1]);
      case 2:return param[1];
      }
    };

var
 quo_num=
  function(n1,n2)
   {switch(n1[0])
     {case 0:
       var i1=n1[1];
       
       switch(n2[0])
        {case 0:
          var i2=n2[1];
          
          var q=i1/i2;
          
          var r=i1%i2;
          
          return /* Int */[0,r>=0?q:i2>0?q-1:q+1];
          
         case 1:
          return num_of_big_int
                  (Big_int["div_big_int"](Big_int["big_int_of_int"](i1),n2[1]));
          
         case 2:
          var r2=n2[1];
          
          return num_of_big_int
                  (Ratio["report_sign_ratio"]
                    (r2,
                     Ratio["floor_ratio"]
                      (Ratio["div_int_ratio"](i1,Ratio["abs_ratio"](r2)))));
          
         }
       
      case 1:
       var bi1=n1[1];
       
       switch(n2[0])
        {case 0:
          return num_of_big_int
                  (Big_int["div_big_int"]
                    (bi1,Big_int["big_int_of_int"](n2[1])));
          
         case 1:return num_of_big_int(Big_int["div_big_int"](bi1,n2[1]));
         case 2:
          var r2$1=n2[1];
          
          return num_of_big_int
                  (Ratio["report_sign_ratio"]
                    (r2$1,
                     Ratio["floor_ratio"]
                      (Ratio["div_big_int_ratio"](bi1,Ratio["abs_ratio"](r2$1)))));
          
         }
       
      case 2:
       var r2$2=ratio_of_num(n2);
       
       return num_of_big_int
               (Ratio["report_sign_ratio"]
                 (r2$2,
                  Ratio["floor_ratio"]
                   (Ratio["div_ratio"](n1[1],Ratio["abs_ratio"](r2$2)))));
       
      }
    };

var
 mod_num=
  function(n1,n2)
   {var exit;
    
    switch(n1[0])
     {case 0:
       var i1=n1[1];
       
       switch(n2[0])
        {case 0:
          var i2=n2[1];var r=i1%i2;return /* Int */[0,r>=0?r:i2>0?r+i2:r-i2];
         case 1:
          return num_of_big_int
                  (Big_int["mod_big_int"](Big_int["big_int_of_int"](i1),n2[1]));
          
         case 2:exit=52;
         }
       
      case 1:
       var bi1=n1[1];
       
       switch(n2[0])
        {case 0:
          return num_of_big_int
                  (Big_int["mod_big_int"]
                    (bi1,Big_int["big_int_of_int"](n2[1])));
          
         case 1:return num_of_big_int(Big_int["mod_big_int"](bi1,n2[1]));
         case 2:exit=52;
         }
       
      case 2:exit=52;
      }
    
    switch(exit){case 52:return sub_num(n1,mult_num(n2,quo_num(n1,n2)));}
    };

var
 power_num_int=
  function(a,b)
   {switch(a[0])
     {case 0:
       var i=a[1];
       
       var match=Int_misc["sign_int"](b);
       
       return match!==0
               ?match!==1
                 ?/* Ratio */[2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_int_positive_int"](i,-b))]
                 :num_of_big_int(Big_int["power_int_positive_int"](i,b))
               :[/* Int */0,1];
       
      case 1:
       var bi=a[1];
       
       var match$1=Int_misc["sign_int"](b);
       
       return match$1!==0
               ?match$1!==1
                 ?/* Ratio */[2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_big_int_positive_int"](bi,-b))]
                 :num_of_big_int(Big_int["power_big_int_positive_int"](bi,b))
               :[/* Int */0,1];
       
      case 2:
       var r=a[1];
       
       var match$2=Int_misc["sign_int"](b);
       
       return match$2!==0
               ?match$2!==1
                 ?/* Ratio */[2,
                   Ratio["power_ratio_positive_int"]
                    (Ratio["inverse_ratio"](r),-b)]
                 :/* Ratio */[2,Ratio["power_ratio_positive_int"](r,b)]
               :[/* Int */0,1];
       
      }
    };

var
 power_num_big_int=
  function(a,b)
   {switch(a[0])
     {case 0:
       var i=a[1];
       
       var match=Big_int["sign_big_int"](b);
       
       return match!==0
               ?match!==1
                 ?/* Ratio */[2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_int_positive_big_int"]
                      (i,Big_int["minus_big_int"](b)))]
                 :num_of_big_int(Big_int["power_int_positive_big_int"](i,b))
               :[/* Int */0,1];
       
      case 1:
       var bi=a[1];
       
       var match$1=Big_int["sign_big_int"](b);
       
       return match$1!==0
               ?match$1!==1
                 ?/* Ratio */[2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_big_int_positive_big_int"]
                      (bi,Big_int["minus_big_int"](b)))]
                 :num_of_big_int
                   (Big_int["power_big_int_positive_big_int"](bi,b))
               :[/* Int */0,1];
       
      case 2:
       var r=a[1];
       
       var match$2=Big_int["sign_big_int"](b);
       
       return match$2!==0
               ?match$2!==1
                 ?/* Ratio */[2,
                   Ratio["power_ratio_positive_big_int"]
                    (Ratio["inverse_ratio"](r),Big_int["minus_big_int"](b))]
                 :/* Ratio */[2,Ratio["power_ratio_positive_big_int"](r,b)]
               :[/* Int */0,1];
       
      }
    };

var
 power_num=
  function(a,b)
   {switch(b[0])
     {case 0:return power_num_int(a,b[1]);
      case 1:return power_num_big_int(a,b[1]);
      case 2:return Pervasives["invalid_arg"]("power_num");
      }
    };

var $star$star$slash=power_num;

var
 is_integer_num=
  function(param)
   {switch(param[0])
     {case 0:return /* true */1;
      case 1:return /* true */1;
      case 2:return Ratio["is_integer_ratio"](param[1]);
      }
    };

var
 integer_num=
  function(n)
   {switch(n[0])
     {case 0:return n;
      case 1:return n;
      case 2:return num_of_big_int(Ratio["integer_ratio"](n[1]));
      }
    };

var
 round_num=
  function(n)
   {switch(n[0])
     {case 0:return n;
      case 1:return n;
      case 2:return num_of_big_int(Ratio["round_ratio"](n[1]));
      }
    };

var
 ceiling_num=
  function(n)
   {switch(n[0])
     {case 0:return n;
      case 1:return n;
      case 2:return num_of_big_int(Ratio["ceiling_ratio"](n[1]));
      }
    };

var
 sign_num=
  function(param)
   {switch(param[0])
     {case 0:return Int_misc["sign_int"](param[1]);
      case 1:return Big_int["sign_big_int"](param[1]);
      case 2:return Ratio["sign_ratio"](param[1]);
      }
    };

var
 eq_num=
  function(a,b)
   {switch(a[0])
     {case 0:
       var int1=a[1];
       
       switch(b[0])
        {case 0:return int1===b[1];
         case 1:
          return Big_int["eq_big_int"](Big_int["big_int_of_int"](int1),b[1]);
         case 2:
          return Ratio["eq_big_int_ratio"]
                  (Big_int["big_int_of_int"](int1),b[1]);
          
         }
       
      case 1:
       var bi=a[1];
       
       switch(b[0])
        {case 0:
          return Big_int["eq_big_int"](Big_int["big_int_of_int"](b[1]),bi);
         case 1:return Big_int["eq_big_int"](bi,b[1]);
         case 2:return Ratio["eq_big_int_ratio"](bi,b[1]);
         }
       
      case 2:
       var r=a[1];
       
       switch(b[0])
        {case 0:
          return Ratio["eq_big_int_ratio"](Big_int["big_int_of_int"](b[1]),r);
         case 1:return Ratio["eq_big_int_ratio"](b[1],r);
         case 2:return Ratio["eq_ratio"](r,b[1]);
         }
       
      }
    };

var $eq$slash=eq_num;

var $less$great$slash=function(a,b){return !eq_num(a,b);};

var
 compare_num=
  function(a,b)
   {switch(a[0])
     {case 0:
       var int1=a[1];
       
       switch(b[0])
        {case 0:return Int_misc["compare_int"](int1,b[1]);
         case 1:
          return Big_int["compare_big_int"]
                  (Big_int["big_int_of_int"](int1),b[1]);
          
         case 2:
          return Ratio["compare_big_int_ratio"]
                  (Big_int["big_int_of_int"](int1),b[1]);
          
         }
       
      case 1:
       var bi=a[1];
       
       switch(b[0])
        {case 0:
          return Big_int["compare_big_int"]
                  (bi,Big_int["big_int_of_int"](b[1]));
          
         case 1:return Big_int["compare_big_int"](bi,b[1]);
         case 2:return Ratio["compare_big_int_ratio"](bi,b[1]);
         }
       
      case 2:
       var r=a[1];
       
       switch(b[0])
        {case 0:
          return -Ratio["compare_big_int_ratio"]
                  (Big_int["big_int_of_int"](b[1]),r);
          
         case 1:return -Ratio["compare_big_int_ratio"](b[1],r);
         case 2:return Ratio["compare_ratio"](r,b[1]);
         }
       
      }
    };

var lt_num=function(num1,num2){return compare_num(num1,num2)<0;};

var le_num=function(num1,num2){return compare_num(num1,num2)<=0;};

var gt_num=function(num1,num2){return compare_num(num1,num2)>0;};

var ge_num=function(num1,num2){return compare_num(num1,num2)>=0;};

var $less$slash=lt_num;

var $less$eq$slash=le_num;

var $great$slash=gt_num;

var $great$eq$slash=ge_num;

var max_num=function(num1,num2){return lt_num(num1,num2)?num2:num1;};

var min_num=function(num1,num2){return gt_num(num1,num2)?num2:num1;};

var
 int_of_num=
  function(param)
   {switch(param[0])
     {case 0:return param[1];
      case 1:return Big_int["int_of_big_int"](param[1]);
      case 2:return Ratio["int_of_ratio"](param[1]);
      }
    };

var
 num_of_int=
  function(i)
   {return i===Int_misc["monster_int"]
            ?/* Big_int */[1,Big_int["big_int_of_int"](i)]
            :/* Int */[0,i];
    };

var
 nat_of_num=
  function(param)
   {switch(param[0])
     {case 0:return Nat["nat_of_int"](param[1]);
      case 1:return Big_int["nat_of_big_int"](param[1]);
      case 2:return Ratio["nat_of_ratio"](param[1]);
      }
    };

var
 num_of_nat=
  function(nat)
   {return Nat["is_nat_int"](nat,0,Nat["length_nat"](nat))
            ?/* Int */[0,CamlPrimitive["nth_digit_nat"](nat,0)]
            :/* Big_int */[1,Big_int["big_int_of_nat"](nat)];
    };

var
 big_int_of_num=
  function(param)
   {switch(param[0])
     {case 0:return Big_int["big_int_of_int"](param[1]);
      case 1:return param[1];
      case 2:return Ratio["big_int_of_ratio"](param[1]);
      }
    };

var
 string_of_big_int_for_num=
  function(bi)
   {return Arith_flags["approx_printing_flag"][1]
            ?Big_int["approx_big_int"]
              (Arith_flags["floating_precision"][1],bi)
            :Big_int["string_of_big_int"](bi);
    };

var
 string_of_normalized_num=
  function(param)
   {switch(param[0])
     {case 0:return Pervasives["string_of_int"](param[1]);
      case 1:return string_of_big_int_for_num(param[1]);
      case 2:return Ratio["string_of_ratio"](param[1]);
      }
    };

var
 string_of_num=
  function(n)
   {return string_of_normalized_num(cautious_normalize_num_when_printing(n));};

var
 num_of_string=
  function(s)
   {try
     {var flag=Arith_flags["normalize_ratio_flag"][1];
      
      Arith_flags["normalize_ratio_flag"][1]=/* true */1;
      var r=Ratio["ratio_of_string"](s);
      
      Arith_flags["normalize_ratio_flag"][1]=flag;
      return Big_int["eq_big_int"]
               (Ratio["denominator_ratio"](r),Big_int["unit_big_int"])
              ?num_of_big_int(Ratio["numerator_ratio"](r))
              :/* Ratio */[2,r];
      }
    catch(exn)
     {if(exn[1]===CamlPrimitive["caml_global_data"]["Failure"])
       {return Pervasives["failwith"]("num_of_string");}
      else
       {throw exn;}
      }
    };

var
 float_of_num=
  function(param)
   {switch(param[0])
     {case 0:return param[1];
      case 1:return Big_int["float_of_big_int"](param[1]);
      case 2:return Ratio["float_of_ratio"](param[1]);
      }
    };

var
 succ_num=
  function(param)
   {switch(param[0])
     {case 0:
       var i=param[1];
       
       return i===Int_misc["biggest_int"]
               ?/* Big_int */[1,
                 Big_int["succ_big_int"](Big_int["big_int_of_int"](i))]
               :/* Int */[0,1+i];
       
      case 1:return num_of_big_int(Big_int["succ_big_int"](param[1]));
      case 2:return /* Ratio */[2,Ratio["add_int_ratio"](1,param[1])];
      }
    };

var
 pred_num=
  function(param)
   {switch(param[0])
     {case 0:
       var i=param[1];
       
       return i===Int_misc["monster_int"]
               ?/* Big_int */[1,
                 Big_int["pred_big_int"](Big_int["big_int_of_int"](i))]
               :/* Int */[0,-1+i];
       
      case 1:return num_of_big_int(Big_int["pred_big_int"](param[1]));
      case 2:return /* Ratio */[2,Ratio["add_int_ratio"](-1,param[1])];
      }
    };

var
 abs_num=
  function(param)
   {switch(param[0])
     {case 0:
       var i=param[1];
       
       return i===Int_misc["monster_int"]
               ?/* Big_int */[1,
                 Big_int["minus_big_int"](Big_int["big_int_of_int"](i))]
               :/* Int */[0,Pervasives["abs"](i)];
       
      case 1:return /* Big_int */[1,Big_int["abs_big_int"](param[1])];
      case 2:return /* Ratio */[2,Ratio["abs_ratio"](param[1])];
      }
    };

var
 approx_num_fix=
  function(n,num){return Ratio["approx_ratio_fix"](n,ratio_of_num(num));};

var
 approx_num_exp=
  function(n,num){return Ratio["approx_ratio_exp"](n,ratio_of_num(num));};

var incr_num=function(r){return r[1]=succ_num(r[1]),0;};

var decr_num=function(r){return r[1]=pred_num(r[1]),0;};

module["exports"]=
{"+/":$plus$slash,
 "add_num":add_num,
 "minus_num":minus_num,
 "-/":$neg$slash,
 "sub_num":sub_num,
 "*/":$star$slash,
 "mult_num":mult_num,
 "square_num":square_num,
 "//":$slash$slash,
 "div_num":div_num,
 "quo_num":quo_num,
 "mod_num":mod_num,
 "**/":$star$star$slash,
 "power_num":power_num,
 "abs_num":abs_num,
 "succ_num":succ_num,
 "pred_num":pred_num,
 "incr_num":incr_num,
 "decr_num":decr_num,
 "is_integer_num":is_integer_num,
 "integer_num":integer_num,
 "floor_num":floor_num,
 "round_num":round_num,
 "ceiling_num":ceiling_num,
 "sign_num":sign_num,
 "=/":$eq$slash,
 "</":$less$slash,
 ">/":$great$slash,
 "<=/":$less$eq$slash,
 ">=/":$great$eq$slash,
 "<>/":$less$great$slash,
 "eq_num":eq_num,
 "lt_num":lt_num,
 "le_num":le_num,
 "gt_num":gt_num,
 "ge_num":ge_num,
 "compare_num":compare_num,
 "max_num":max_num,
 "min_num":min_num,
 "string_of_num":string_of_num,
 "approx_num_fix":approx_num_fix,
 "approx_num_exp":approx_num_exp,
 "num_of_string":num_of_string,
 "int_of_num":int_of_num,
 "num_of_int":num_of_int,
 "nat_of_num":nat_of_num,
 "num_of_nat":num_of_nat,
 "num_of_big_int":num_of_big_int,
 "big_int_of_num":big_int_of_num,
 "ratio_of_num":ratio_of_num,
 "num_of_ratio":num_of_ratio,
 "float_of_num":float_of_num};

