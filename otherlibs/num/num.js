// Generated CODE, PLEASE EDIT WITH CARE 

var Pervasives=require("Pervasives");
var Ratio=require("Ratio");
var Int_misc=require("Int_misc");
var Big_int=require("Big_int");
var Nat=require("Nat");
var Arith_flags=require("Arith_flags");


var biggest_INT=Big_int["big_int_of_int"](Int_misc["biggest_int"]);

var least_INT=Big_int["big_int_of_int"](Int_misc["least_int"]);

var
 num_of_big_int=
  function(bi)
   {if
     (Big_int["le_big_int"](bi,biggest_INT)&&
      Big_int["ge_big_int"](bi,least_INT))
     {return [0,Big_int["int_of_big_int"](bi)];}
    else
     {return [1,bi];}
    };

var
 numerator_num=
  function(n)
   {var exit;
    
    switch(n)
     {case 0:exit=76;
      case 1:exit=76;
      case 2:var r=n[1];return num_of_big_int(Ratio["numerator_ratio"](r));
      }
    
    switch(exit){case 76:return n;}
    };

var
 denominator_num=
  function(n)
   {var exit;
    
    switch(n)
     {case 0:exit=74;
      case 1:exit=74;
      case 2:var r=n[1];return num_of_big_int(Ratio["denominator_ratio"](r));
      }
    
    switch(exit){case 74:return [0,1];}
    };

var
 normalize_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return [0,i];
      case 1:var bi=param[1];return num_of_big_int(bi);
      case 2:
       var r=param[1];
       
       if(Ratio["is_integer_ratio"](r))
        {return num_of_big_int(Ratio["numerator_ratio"](r));}
       else
        {return [2,r];}
       
      }
    };

var
 cautious_normalize_num_when_printing=
  function(n)
   {if(Arith_flags["normalize_ratio_when_printing_flag"][1])
     {return normalize_num(n);}
    else
     {return n;}
    };

var
 num_of_ratio=
  function(r)
   {
    if(!Ratio["is_integer_ratio"](r))
     {return [2,r];}
    else
     {if(Big_int["is_int_big_int"](Ratio["numerator_ratio"](r)))
       {return [0,Big_int["int_of_big_int"](Ratio["numerator_ratio"](r))];}
      else
       {return [1,Ratio["numerator_ratio"](r)];}
      }
    };

var
 add_num=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match)
     {case 0:
       var int1=match[1];
       
       switch(match$1)
        {case 0:
          var int2=match$1[1];
          
          var r=int1+int2;
          
          if((int1^int2|int1^r^-1)<0)
           {return [0,r];}
          else
           {return [1,
                    Big_int["add_big_int"]
                     (Big_int["big_int_of_int"](int1),
                      Big_int["big_int_of_int"](int2))];
            }
          
         case 1:
          var i=int1;
          
          var bi=match$1[1];
          
          return num_of_big_int(Big_int["add_int_big_int"](i,bi));
          
         case 2:
          var i$1=int1;
          
          var r$1=match$1[1];
          
          return [2,Ratio["add_int_ratio"](i$1,r$1)];
          
         }
       
      case 1:
       var bi$1=match[1];
       
       switch(match$1)
        {case 0:
          var i$2=match$1[1];
          
          return num_of_big_int(Big_int["add_int_big_int"](i$2,bi$1));
          
         case 1:
          var bi1=bi$1;
          
          var bi2=match$1[1];
          
          return num_of_big_int(Big_int["add_big_int"](bi1,bi2));
          
         case 2:
          var bi$2=bi$1;
          
          var r$2=match$1[1];
          
          return [2,Ratio["add_big_int_ratio"](bi$2,r$2)];
          
         }
       
      case 2:
       var r$3=match[1];
       
       switch(match$1)
        {case 0:var i$3=match$1[1];return [2,Ratio["add_int_ratio"](i$3,r$3)];
         case 1:
          var r$4=r$3;
          
          var bi$3=match$1[1];
          
          return [2,Ratio["add_big_int_ratio"](bi$3,r$4)];
          
         case 2:
          var r1=r$3;
          
          var r2=match$1[1];
          
          return num_of_ratio(Ratio["add_ratio"](r1,r2));
          
         }
       
      }
    };

var $plus$unknown=add_num;

var
 minus_num=
  function(param)
   {switch(param)
     {case 0:
       var i=param[1];
       
       if(i=Int_misc["monster_int"])
        {return [1,Big_int["minus_big_int"](Big_int["big_int_of_int"](i))];}
       else
        {return [0,-i];}
       
      case 1:var bi=param[1];return [1,Big_int["minus_big_int"](bi)];
      case 2:var r=param[1];return [2,Ratio["minus_ratio"](r)];
      }
    };

var sub_num=function(n1,n2){return add_num(n1,minus_num(n2));};

var $neg$unknown=sub_num;

var
 mult_num=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match)
     {case 0:
       var int1=match[1];
       
       switch(match$1)
        {case 0:
          var int2=match$1[1];
          
          if
           (Int_misc["num_bits_int"](int1)+
            Int_misc["num_bits_int"](int2)<
            Int_misc["length_of_int"])
           {return [0,int1*int2];}
          else
           {return num_of_big_int
                    (Big_int["mult_big_int"]
                      (Big_int["big_int_of_int"](int1),
                       Big_int["big_int_of_int"](int2)));
            }
          
         case 1:
          var i=int1;
          
          var bi=match$1[1];
          
          return num_of_big_int(Big_int["mult_int_big_int"](i,bi));
          
         case 2:
          var i$1=int1;
          
          var r=match$1[1];
          
          return num_of_ratio(Ratio["mult_int_ratio"](i$1,r));
          
         }
       
      case 1:
       var bi$1=match[1];
       
       switch(match$1)
        {case 0:
          var i$2=match$1[1];
          
          return num_of_big_int(Big_int["mult_int_big_int"](i$2,bi$1));
          
         case 1:
          var bi1=bi$1;
          
          var bi2=match$1[1];
          
          return num_of_big_int(Big_int["mult_big_int"](bi1,bi2));
          
         case 2:
          var bi$2=bi$1;
          
          var r$1=match$1[1];
          
          return num_of_ratio(Ratio["mult_big_int_ratio"](bi$2,r$1));
          
         }
       
      case 2:
       var r$2=match[1];
       
       switch(match$1)
        {case 0:
          var i$3=match$1[1];
          
          return num_of_ratio(Ratio["mult_int_ratio"](i$3,r$2));
          
         case 1:
          var r$3=r$2;
          
          var bi$3=match$1[1];
          
          return num_of_ratio(Ratio["mult_big_int_ratio"](bi$3,r$3));
          
         case 2:
          var r1=r$2;
          
          var r2=match$1[1];
          
          return num_of_ratio(Ratio["mult_ratio"](r1,r2));
          
         }
       
      }
    };

var $star$unknown=mult_num;

var
 square_num=
  function(param)
   {switch(param)
     {case 0:
       var i=param[1];
       
       if(2*Int_misc["num_bits_int"](i)<Int_misc["length_of_int"])
        {return [0,i*i];}
       else
        {return num_of_big_int
                 (Big_int["square_big_int"](Big_int["big_int_of_int"](i)));
         }
       
      case 1:var bi=param[1];return [1,Big_int["square_big_int"](bi)];
      case 2:var r=param[1];return [2,Ratio["square_ratio"](r)];
      }
    };

var
 div_num=
  function(n1,n2)
   {switch(n1)
     {case 0:
       var i1=n1[1];
       
       switch(n2)
        {case 0:
          var i2=n2[1];
          
          return num_of_ratio
                  (Ratio["create_ratio"]
                    (Big_int["big_int_of_int"](i1),
                     Big_int["big_int_of_int"](i2)));
          
         case 1:
          var bi2=n2[1];
          
          return num_of_ratio
                  (Ratio["create_ratio"](Big_int["big_int_of_int"](i1),bi2));
          
         case 2:
          var r2=n2[1];return num_of_ratio(Ratio["div_int_ratio"](i1,r2));
         }
       
      case 1:
       var bi1=n1[1];
       
       switch(n2)
        {case 0:
          var i2$1=n2[1];
          
          return num_of_ratio
                  (Ratio["create_ratio"](bi1,Big_int["big_int_of_int"](i2$1)));
          
         case 1:
          var bi2$1=n2[1];
          
          return num_of_ratio(Ratio["create_ratio"](bi1,bi2$1));
          
         case 2:
          var r2$1=n2[1];
          
          return num_of_ratio(Ratio["div_big_int_ratio"](bi1,r2$1));
          
         }
       
      case 2:
       var r1=n1[1];
       
       switch(n2)
        {case 0:
          var i2$2=n2[1];return num_of_ratio(Ratio["div_ratio_int"](r1,i2$2));
         case 1:
          var bi2$2=n2[1];
          
          return num_of_ratio(Ratio["div_ratio_big_int"](r1,bi2$2));
          
         case 2:
          var r2$2=n2[1];return num_of_ratio(Ratio["div_ratio"](r1,r2$2));
         }
       
      }
    };

var $unknown$unknown=div_num;

var
 floor_num=
  function(n)
   {switch(n)
     {case 0:return n;
      case 1:var n$1=n;return n$1;
      case 2:var r=n[1];return num_of_big_int(Ratio["floor_ratio"](r));
      }
    };

var
 ratio_of_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return Ratio["ratio_of_int"](i);
      case 1:var bi=param[1];return Ratio["ratio_of_big_int"](bi);
      case 2:var r=param[1];return r;
      }
    };

var
 quo_num=
  function(n1,n2)
   {var match=n1;
    
    var match$1=n2;
    
    switch(match)
     {case 0:
       var i1=match[1];
       
       switch(match$1)
        {case 0:
          var i2=match$1[1];
          
          var q=i1/i2;
          
          var r=i1%i2;
          
          return [0,r>=0?q:i2>0?q-1:q+1];
          
         case 1:
          var i1$1=i1;
          
          var bi2=match$1[1];
          
          return num_of_big_int
                  (Big_int["div_big_int"](Big_int["big_int_of_int"](i1$1),bi2));
          
         case 2:
          var i1$2=i1;
          
          var r2=match$1[1];
          
          return num_of_big_int
                  (Ratio["report_sign_ratio"]
                    (r2,
                     Ratio["floor_ratio"]
                      (Ratio["div_int_ratio"](i1$2,Ratio["abs_ratio"](r2)))));
          
         }
       
      case 1:
       var bi1=match[1];
       
       switch(match$1)
        {case 0:
          var i2$1=match$1[1];
          
          return num_of_big_int
                  (Big_int["div_big_int"](bi1,Big_int["big_int_of_int"](i2$1)));
          
         case 1:
          var bi1$1=bi1;
          
          var bi2$1=match$1[1];
          
          return num_of_big_int(Big_int["div_big_int"](bi1$1,bi2$1));
          
         case 2:
          var bi1$2=bi1;
          
          var r2$1=match$1[1];
          
          return num_of_big_int
                  (Ratio["report_sign_ratio"]
                    (r2$1,
                     Ratio["floor_ratio"]
                      (Ratio["div_big_int_ratio"](bi1$2,Ratio["abs_ratio"](r2$1)))));
          
         }
       
      case 2:
       var r1=match[1];
       
       var r2$2=ratio_of_num(n2);
       
       return num_of_big_int
               (Ratio["report_sign_ratio"]
                 (r2$2,
                  Ratio["floor_ratio"]
                   (Ratio["div_ratio"](r1,Ratio["abs_ratio"](r2$2)))));
       
      }
    };

var
 mod_num=
  function(n1,n2)
   {var match=n1;
    
    var match$1=n2;
    
    var exit;
    
    switch(match)
     {case 0:
       var i1=match[1];
       
       switch(match$1)
        {case 0:
          var i2=match$1[1];var r=i1%i2;return [0,r>=0?r:i2>0?r+i2:r-i2];
         case 1:
          var i1$1=i1;
          
          var bi2=match$1[1];
          
          return num_of_big_int
                  (Big_int["mod_big_int"](Big_int["big_int_of_int"](i1$1),bi2));
          
         case 2:exit=52;
         }
       
      case 1:
       var bi1=match[1];
       
       switch(match$1)
        {case 0:
          var i2$1=match$1[1];
          
          return num_of_big_int
                  (Big_int["mod_big_int"](bi1,Big_int["big_int_of_int"](i2$1)));
          
         case 1:
          var bi1$1=bi1;
          
          var bi2$1=match$1[1];
          
          return num_of_big_int(Big_int["mod_big_int"](bi1$1,bi2$1));
          
         case 2:exit=52;
         }
       
      case 2:exit=52;
      }
    
    switch(exit){case 52:return sub_num(n1,mult_num(n2,quo_num(n1,n2)));}
    };

var
 power_num_int=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match)
     {case 0:
       var n=match$1;
       
       var i=match[1];
       
       var match$2=Int_misc["sign_int"](n);
       
       if(match$2!=0)
        {if(match$2!=1)
          {return [2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_int_positive_int"](i,-n))];
           }
         else
          {return num_of_big_int(Big_int["power_int_positive_int"](i,n));}
         }
       else
        {return [0,1];}
       
      case 1:
       var n$1=match$1;
       
       var bi=match[1];
       
       var match$3=Int_misc["sign_int"](n$1);
       
       if(match$3!=0)
        {if(match$3!=1)
          {return [2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_big_int_positive_int"](bi,-n$1))];
           }
         else
          {return num_of_big_int
                   (Big_int["power_big_int_positive_int"](bi,n$1));
           }
         }
       else
        {return [0,1];}
       
      case 2:
       var n$2=match$1;
       
       var r=match[1];
       
       var match$4=Int_misc["sign_int"](n$2);
       
       if(match$4!=0)
        {if(match$4!=1)
          {return [2,
                   Ratio["power_ratio_positive_int"]
                    (Ratio["inverse_ratio"](r),-n$2)];
           }
         else
          {return [2,Ratio["power_ratio_positive_int"](r,n$2)];}
         }
       else
        {return [0,1];}
       
      }
    };

var
 power_num_big_int=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match)
     {case 0:
       var n=match$1;
       
       var i=match[1];
       
       var match$2=Big_int["sign_big_int"](n);
       
       if(match$2!=0)
        {if(match$2!=1)
          {return [2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_int_positive_big_int"]
                      (i,Big_int["minus_big_int"](n)))];
           }
         else
          {return num_of_big_int(Big_int["power_int_positive_big_int"](i,n));}
         }
       else
        {return [0,1];}
       
      case 1:
       var n$1=match$1;
       
       var bi=match[1];
       
       var match$3=Big_int["sign_big_int"](n$1);
       
       if(match$3!=0)
        {if(match$3!=1)
          {return [2,
                   Ratio["create_normalized_ratio"]
                    (Big_int["unit_big_int"],
                     Big_int["power_big_int_positive_big_int"]
                      (bi,Big_int["minus_big_int"](n$1)))];
           }
         else
          {return num_of_big_int
                   (Big_int["power_big_int_positive_big_int"](bi,n$1));
           }
         }
       else
        {return [0,1];}
       
      case 2:
       var n$2=match$1;
       
       var r=match[1];
       
       var match$4=Big_int["sign_big_int"](n$2);
       
       if(match$4!=0)
        {if(match$4!=1)
          {return [2,
                   Ratio["power_ratio_positive_big_int"]
                    (Ratio["inverse_ratio"](r),Big_int["minus_big_int"](n$2))];
           }
         else
          {return [2,Ratio["power_ratio_positive_big_int"](r,n$2)];}
         }
       else
        {return [0,1];}
       
      }
    };

var
 power_num=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match$1)
     {case 0:var n=match;var i=match$1[1];return power_num_int(n,i);
      case 1:var n$1=match;var bi=match$1[1];return power_num_big_int(n$1,bi);
      case 2:return Pervasives["invalid_arg"]("power_num");
      }
    };

var $star$star$unknown=power_num;

var
 is_integer_num=
  function(param)
   {switch(param)
     {case 0:return 1;
      case 1:return 1;
      case 2:var r=param[1];return Ratio["is_integer_ratio"](r);
      }
    };

var
 integer_num=
  function(n)
   {switch(n)
     {case 0:return n;
      case 1:var n$1=n;return n$1;
      case 2:var r=n[1];return num_of_big_int(Ratio["integer_ratio"](r));
      }
    };

var
 round_num=
  function(n)
   {switch(n)
     {case 0:return n;
      case 1:var n$1=n;return n$1;
      case 2:var r=n[1];return num_of_big_int(Ratio["round_ratio"](r));
      }
    };

var
 ceiling_num=
  function(n)
   {switch(n)
     {case 0:return n;
      case 1:var n$1=n;return n$1;
      case 2:var r=n[1];return num_of_big_int(Ratio["ceiling_ratio"](r));
      }
    };

var
 sign_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return Int_misc["sign_int"](i);
      case 1:var bi=param[1];return Big_int["sign_big_int"](bi);
      case 2:var r=param[1];return Ratio["sign_ratio"](r);
      }
    };

var
 eq_num=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match)
     {case 0:
       var int1=match[1];
       
       switch(match$1)
        {case 0:var int2=match$1[1];return int1=int2;
         case 1:
          var i=int1;
          
          var bi=match$1[1];
          
          return Big_int["eq_big_int"](Big_int["big_int_of_int"](i),bi);
          
         case 2:
          var i$1=int1;
          
          var r=match$1[1];
          
          return Ratio["eq_big_int_ratio"](Big_int["big_int_of_int"](i$1),r);
          
         }
       
      case 1:
       var bi$1=match[1];
       
       switch(match$1)
        {case 0:
          var i$2=match$1[1];
          
          return Big_int["eq_big_int"](Big_int["big_int_of_int"](i$2),bi$1);
          
         case 1:
          var bi1=bi$1;
          
          var bi2=match$1[1];
          
          return Big_int["eq_big_int"](bi1,bi2);
          
         case 2:
          var bi$2=bi$1;
          
          var r$1=match$1[1];
          
          return Ratio["eq_big_int_ratio"](bi$2,r$1);
          
         }
       
      case 2:
       var r$2=match[1];
       
       switch(match$1)
        {case 0:
          var i$3=match$1[1];
          
          return Ratio["eq_big_int_ratio"](Big_int["big_int_of_int"](i$3),r$2);
          
         case 1:
          var r$3=r$2;
          
          var bi$3=match$1[1];
          
          return Ratio["eq_big_int_ratio"](bi$3,r$3);
          
         case 2:var r1=r$2;var r2=match$1[1];return Ratio["eq_ratio"](r1,r2);
         }
       
      }
    };

var $eq$unknown=eq_num;

var $less$great$unknown=function(a,b){return !eq_num(a,b);};

var
 compare_num=
  function(a,b)
   {var match=a;
    
    var match$1=b;
    
    switch(match)
     {case 0:
       var int1=match[1];
       
       switch(match$1)
        {case 0:var int2=match$1[1];return Int_misc["compare_int"](int1,int2);
         case 1:
          var i=int1;
          
          var bi=match$1[1];
          
          return Big_int["compare_big_int"](Big_int["big_int_of_int"](i),bi);
          
         case 2:
          var i$1=int1;
          
          var r=match$1[1];
          
          return Ratio["compare_big_int_ratio"]
                  (Big_int["big_int_of_int"](i$1),r);
          
         }
       
      case 1:
       var bi$1=match[1];
       
       switch(match$1)
        {case 0:
          var i$2=match$1[1];
          
          return Big_int["compare_big_int"]
                  (bi$1,Big_int["big_int_of_int"](i$2));
          
         case 1:
          var bi1=bi$1;
          
          var bi2=match$1[1];
          
          return Big_int["compare_big_int"](bi1,bi2);
          
         case 2:
          var bi$2=bi$1;
          
          var r$1=match$1[1];
          
          return Ratio["compare_big_int_ratio"](bi$2,r$1);
          
         }
       
      case 2:
       var r$2=match[1];
       
       switch(match$1)
        {case 0:
          var i$3=match$1[1];
          
          return -Ratio["compare_big_int_ratio"]
                  (Big_int["big_int_of_int"](i$3),r$2);
          
         case 1:
          var r$3=r$2;
          
          var bi$3=match$1[1];
          
          return -Ratio["compare_big_int_ratio"](bi$3,r$3);
          
         case 2:
          var r1=r$2;var r2=match$1[1];return Ratio["compare_ratio"](r1,r2);
         }
       
      }
    };

var lt_num=function(num1,num2){return compare_num(num1,num2)<0;};

var le_num=function(num1,num2){return compare_num(num1,num2)<=0;};

var gt_num=function(num1,num2){return compare_num(num1,num2)>0;};

var ge_num=function(num1,num2){return compare_num(num1,num2)>=0;};

var $less$unknown=lt_num;

var $less$eq$unknown=le_num;

var $great$unknown=gt_num;

var $great$eq$unknown=ge_num;

var
 max_num=
  function(num1,num2){if(lt_num(num1,num2)){return num2;}else{return num1;}};

var
 min_num=
  function(num1,num2){if(gt_num(num1,num2)){return num2;}else{return num1;}};

var
 int_of_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return i;
      case 1:var bi=param[1];return Big_int["int_of_big_int"](bi);
      case 2:var r=param[1];return Ratio["int_of_ratio"](r);
      }
    };

var
 num_of_int=
  function(i)
   {if(i=Int_misc["monster_int"])
     {return [1,Big_int["big_int_of_int"](i)];}
    else
     {return [0,i];}
    };

var
 nat_of_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return Nat["nat_of_int"](i);
      case 1:var bi=param[1];return Big_int["nat_of_big_int"](bi);
      case 2:var r=param[1];return Ratio["nat_of_ratio"](r);
      }
    };

var
 num_of_nat=
  function(nat)
   {if(Nat["is_nat_int"](nat,0,Nat["length_nat"](nat)))
     {return [0,"unknown primitive:nth_digit_nat"];}
    else
     {return [1,Big_int["big_int_of_nat"](nat)];}
    };

var
 big_int_of_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return Big_int["big_int_of_int"](i);
      case 1:var bi=param[1];return bi;
      case 2:var r=param[1];return Ratio["big_int_of_ratio"](r);
      }
    };

var
 string_of_big_int_for_num=
  function(bi)
   {if(Arith_flags["approx_printing_flag"][1])
     {return Big_int["approx_big_int"]
              (Arith_flags["floating_precision"][1],bi);
      }
    else
     {return Big_int["string_of_big_int"](bi);}
    };

var
 string_of_normalized_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return Pervasives["string_of_int"](i);
      case 1:var bi=param[1];return string_of_big_int_for_num(bi);
      case 2:var r=param[1];return Ratio["string_of_ratio"](r);
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
      
      Arith_flags["normalize_ratio_flag"][1]=1,0;
      var r=Ratio["ratio_of_string"](s);
      
      Arith_flags["normalize_ratio_flag"][1]=flag,0;
      if
       (Big_int["eq_big_int"]
         (Ratio["denominator_ratio"](r),Big_int["unit_big_int"]))
       {return num_of_big_int(Ratio["numerator_ratio"](r));}
      else
       {return [2,r];}
      }
    catch(exn)
     {var tag=exn[1];
      
      if(tag=Failure)
       {return Pervasives["failwith"]("num_of_string");}
      else
       {throw exn;}
      }
    };

var
 float_of_num=
  function(param)
   {switch(param)
     {case 0:var i=param[1];return i;
      case 1:var bi=param[1];return Big_int["float_of_big_int"](bi);
      case 2:var r=param[1];return Ratio["float_of_ratio"](r);
      }
    };

var
 succ_num=
  function(param)
   {switch(param)
     {case 0:
       var i=param[1];
       
       if(i=Int_misc["biggest_int"])
        {return [1,Big_int["succ_big_int"](Big_int["big_int_of_int"](i))];}
       else
        {return [0,1+i];}
       
      case 1:
       var bi=param[1];return num_of_big_int(Big_int["succ_big_int"](bi));
      case 2:var r=param[1];return [2,Ratio["add_int_ratio"](1,r)];
      }
    };

var
 pred_num=
  function(param)
   {switch(param)
     {case 0:
       var i=param[1];
       
       if(i=Int_misc["monster_int"])
        {return [1,Big_int["pred_big_int"](Big_int["big_int_of_int"](i))];}
       else
        {return [0,-1+i];}
       
      case 1:
       var bi=param[1];return num_of_big_int(Big_int["pred_big_int"](bi));
      case 2:var r=param[1];return [2,Ratio["add_int_ratio"](-1,r)];
      }
    };

var
 abs_num=
  function(param)
   {switch(param)
     {case 0:
       var i=param[1];
       
       if(i=Int_misc["monster_int"])
        {return [1,Big_int["minus_big_int"](Big_int["big_int_of_int"](i))];}
       else
        {return [0,Pervasives["abs"](i)];}
       
      case 1:var bi=param[1];return [1,Big_int["abs_big_int"](bi)];
      case 2:var r=param[1];return [2,Ratio["abs_ratio"](r)];
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
{"+/":$plus$unknown,
 "add_num":add_num,
 "minus_num":minus_num,
 "-/":$neg$unknown,
 "sub_num":sub_num,
 "*/":$star$unknown,
 "mult_num":mult_num,
 "square_num":square_num,
 "//":$unknown$unknown,
 "div_num":div_num,
 "quo_num":quo_num,
 "mod_num":mod_num,
 "**/":$star$star$unknown,
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
 "=/":$eq$unknown,
 "</":$less$unknown,
 ">/":$great$unknown,
 "<=/":$less$eq$unknown,
 ">=/":$great$eq$unknown,
 "<>/":$less$great$unknown,
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

