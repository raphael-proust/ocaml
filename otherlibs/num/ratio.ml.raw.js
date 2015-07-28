var String=require("String");
var Pervasives=require("Pervasives");
var Int_misc=require("Int_misc");
var Big_int=require("Big_int");
var Nat=require("Nat");
var Arith_flags=require("Arith_flags");
var Bytes=require("Bytes");
var
 failwith_zero=
  function(name)
   {var s="infinite or undefined rational number";
    var $js=Pervasives["failwith"];
    var $js$1=name["length"]=0;
    if($js$1)
     {var $js$2=s}
    else
     {var $js$3=Pervasives["^"];
      var $js$4=Pervasives["^"];
      var $js$5=$js$4(" ",s);
      var $js$2=$js$3(name,$js$5)}
    return $js($js$2)};
var numerator_ratio=function(r){return r[1]};
var denominator_ratio=function(r){return r[2]};
var
 null_denominator=
  function(r)
   {var $js=Big_int["sign_big_int"];var $js$1=$js(r[2]);return $js$1=0};
var
 verify_null_denominator=
  function(r)
   {var $js=Big_int["sign_big_int"];
    var $js$1=$js(r[2]);
    var $js$2=$js$1=0;
    if($js$2)
     {var $js$3=Arith_flags["error_when_null_denominator_flag"][1];
      if($js$3){return failwith_zero("")}else{return 1}}
    else
     {return 0}};
var sign_ratio=function(r){var $js=Big_int["sign_big_int"];return $js(r[1])};
var
 normalize_ratio=
  function(r)
   {var $js=r[3];
    if($js)
     {return r}
    else
     {var $js$1=verify_null_denominator(r);
      if($js$1)
       {var $js$2=Big_int["big_int_of_int"];
        var $js$3=Big_int["sign_big_int"];
        var $js$4=$js$3(r[1]);
        var $js$5=$js$2($js$4);
        r[1]=$js$5,0;
        r[3]=1,0;
        return r}
      else
       {var $js$6=Big_int["gcd_big_int"];
        var p=$js$6(r[1],r[2]);
        var $js$7=Big_int["eq_big_int"];
        var $js$8=$js$7(p,Big_int["unit_big_int"]);
        if($js$8)
         {r[3]=1,0;return r}
        else
         {var $js$9=Big_int["div_big_int"];
          var $js$10=$js$9(r[1],p);
          r[1]=$js$10,0;
          var $js$11=Big_int["div_big_int"];
          var $js$12=$js$11(r[2],p);
          r[2]=$js$12,0;
          r[3]=1,0;
          return r}}}};
var
 cautious_normalize_ratio=
  function(r)
   {var $js=Arith_flags["normalize_ratio_flag"][1];
    if($js){return normalize_ratio(r)}else{return r}};
var
 cautious_normalize_ratio_when_printing=
  function(r)
   {var $js=Arith_flags["normalize_ratio_when_printing_flag"][1];
    if($js){return normalize_ratio(r)}else{return r}};
var
 create_ratio=
  function(bi1,bi2)
   {var $js=Big_int["sign_big_int"];
    var match=$js(bi2);
    var $js$1=match!=-1;
    if($js$1)
     {var $js$2=match!=0;
      if($js$2)
       {return cautious_normalize_ratio([0,bi1,bi2,0])}
      else
       {var $js$3=Arith_flags["error_when_null_denominator_flag"][1];
        if($js$3)
         {return failwith_zero("create_ratio")}
        else
         {return cautious_normalize_ratio([0,bi1,bi2,0])}}}
    else
     {var $js$4=Big_int["minus_big_int"];
      var $js$5=$js$4(bi1);
      var $js$6=Big_int["minus_big_int"];
      var $js$7=$js$6(bi2);
      var $js$8=[0,$js$5,$js$7,0];
      return cautious_normalize_ratio($js$8)}};
var
 create_normalized_ratio=
  function(bi1,bi2)
   {var $js=Big_int["sign_big_int"];
    var match=$js(bi2);
    var $js$1=match!=-1;
    if($js$1)
     {var $js$2=match!=0;
      if($js$2)
       {return [0,bi1,bi2,1]}
      else
       {var $js$3=Arith_flags["error_when_null_denominator_flag"][1];
        if($js$3)
         {return failwith_zero("create_normalized_ratio")}
        else
         {return [0,bi1,bi2,1]}}}
    else
     {var $js$4=Big_int["minus_big_int"];
      var $js$5=$js$4(bi1);
      var $js$6=Big_int["minus_big_int"];
      var $js$7=$js$6(bi2);
      return [0,$js$5,$js$7,1]}};
var is_normalized_ratio=function(r){return r[3]};
var
 report_sign_ratio=
  function(r,bi)
   {var $js=sign_ratio(r);
    var $js$1=$js=-1;
    if($js$1)
     {var $js$2=Big_int["minus_big_int"];return $js$2(bi)}
    else
     {return bi}};
var
 abs_ratio=
  function(r)
   {var $js=Big_int["abs_big_int"];
    var $js$1=$js(r[1]);
    return [0,$js$1,r[2],r[3]]};
var
 is_integer_ratio=
  function(r)
   {var $js=Big_int["eq_big_int"];
    var $js$1=normalize_ratio(r);
    var $js$2=$js$1[2];
    return $js($js$2,Big_int["unit_big_int"])};
var
 add_ratio=
  function(r1,r2)
   {var $js=Arith_flags["normalize_ratio_flag"][1];
    if($js)
     {var $js$1=Big_int["gcd_big_int"];
      var $js$2=normalize_ratio(r1);
      var $js$3=$js$2[2];
      var $js$4=normalize_ratio(r2);
      var $js$5=$js$4[2];
      var p=$js$1($js$3,$js$5);
      var $js$6=Big_int["eq_big_int"];
      var $js$7=$js$6(p,Big_int["unit_big_int"]);
      if($js$7)
       {var $js$8=Big_int["add_big_int"];
        var $js$9=Big_int["mult_big_int"];
        var $js$10=$js$9(r1[1],r2[2]);
        var $js$11=Big_int["mult_big_int"];
        var $js$12=$js$11(r2[1],r1[2]);
        var $js$13=$js$8($js$10,$js$12);
        var $js$14=Big_int["mult_big_int"];
        var $js$15=$js$14(r1[2],r2[2]);
        return [0,$js$13,$js$15,1]}
      else
       {var $js$16=Big_int["div_big_int"];
        var d1=$js$16(r1[2],p);
        var $js$17=Big_int["div_big_int"];
        var d2=$js$17(r2[2],p);
        var $js$18=Big_int["add_big_int"];
        var $js$19=Big_int["mult_big_int"];
        var $js$20=$js$19(r1[1],d2);
        var $js$21=Big_int["mult_big_int"];
        var $js$22=$js$21(d1,r2[1]);
        var n=$js$18($js$20,$js$22);
        var $js$23=Big_int["gcd_big_int"];
        var p'=$js$23(n,p);
        var $js$24=Big_int["div_big_int"];
        var $js$25=$js$24(n,p');
        var $js$26=Big_int["mult_big_int"];
        var $js$27=Big_int["div_big_int"];
        var $js$28=$js$27(r2[2],p');
        var $js$29=$js$26(d1,$js$28);
        return [0,$js$25,$js$29,1]}}
    else
     {var $js$30=Big_int["add_big_int"];
      var $js$31=Big_int["mult_big_int"];
      var $js$32=$js$31(r1[1],r2[2]);
      var $js$33=Big_int["mult_big_int"];
      var $js$34=$js$33(r1[2],r2[1]);
      var $js$35=$js$30($js$32,$js$34);
      var $js$36=Big_int["mult_big_int"];
      var $js$37=$js$36(r1[2],r2[2]);
      return [0,$js$35,$js$37,0]}};
var
 minus_ratio=
  function(r)
   {var $js=Big_int["minus_big_int"];
    var $js$1=$js(r[1]);
    return [0,$js$1,r[2],r[3]]};
var
 add_int_ratio=
  function(i,r)
   {var $js=cautious_normalize_ratio(r);
    0;
    var $js$1=Big_int["add_big_int"];
    var $js$2=Big_int["mult_int_big_int"];
    var $js$3=$js$2(i,r[2]);
    var $js$4=$js$1($js$3,r[1]);
    return [0,$js$4,r[2],r[3]]};
var
 add_big_int_ratio=
  function(bi,r)
   {var $js=cautious_normalize_ratio(r);
    0;
    var $js$1=Big_int["add_big_int"];
    var $js$2=Big_int["mult_big_int"];
    var $js$3=$js$2(bi,r[2]);
    var $js$4=$js$1($js$3,r[1]);
    return [0,$js$4,r[2],r[3]]};
var
 sub_ratio=
  function(r1,r2){var $js=minus_ratio(r2);return add_ratio(r1,$js)};
var
 mult_ratio=
  function(r1,r2)
   {var $js=Arith_flags["normalize_ratio_flag"][1];
    if($js)
     {var $js$1=Big_int["gcd_big_int"];
      var $js$2=normalize_ratio(r1);
      var $js$3=$js$2[1];
      var $js$4=normalize_ratio(r2);
      var $js$5=$js$4[2];
      var p1=$js$1($js$3,$js$5);
      var $js$6=Big_int["gcd_big_int"];
      var p2=$js$6(r2[1],r1[2]);
      var $js$7=Big_int["eq_big_int"];
      var $js$8=$js$7(p1,Big_int["unit_big_int"]);
      if($js$8)
       {var match=[0,r1[1],r2[2]]}
      else
       {var $js$9=Big_int["div_big_int"];
        var $js$10=$js$9(r1[1],p1);
        var $js$11=Big_int["div_big_int"];
        var $js$12=$js$11(r2[2],p1);
        var match=[0,$js$10,$js$12]}
      var d2=match[2];
      var n1=match[1];
      var $js$13=Big_int["eq_big_int"];
      var $js$14=$js$13(p2,Big_int["unit_big_int"]);
      if($js$14)
       {var match$1=[0,r2[1],r1[2]]}
      else
       {var $js$15=Big_int["div_big_int"];
        var $js$16=$js$15(r2[1],p2);
        var $js$17=Big_int["div_big_int"];
        var $js$18=$js$17(r1[2],p2);
        var match$1=[0,$js$16,$js$18]}
      var d1=match$1[2];
      var n2=match$1[1];
      var $js$19=Big_int["mult_big_int"];
      var $js$20=$js$19(n1,n2);
      var $js$21=Big_int["mult_big_int"];
      var $js$22=$js$21(d1,d2);
      return [0,$js$20,$js$22,1]}
    else
     {var $js$23=Big_int["mult_big_int"];
      var $js$24=$js$23(r1[1],r2[1]);
      var $js$25=Big_int["mult_big_int"];
      var $js$26=$js$25(r1[2],r2[2]);
      return [0,$js$24,$js$26,0]}};
var
 mult_int_ratio=
  function(i,r)
   {var $js=Arith_flags["normalize_ratio_flag"][1];
    if($js)
     {var $js$1=Big_int["gcd_big_int"];
      var $js$2=normalize_ratio(r);
      var $js$3=$js$2[2];
      var $js$4=Big_int["big_int_of_int"];
      var $js$5=$js$4(i);
      var p=$js$1($js$3,$js$5);
      var $js$6=Big_int["eq_big_int"];
      var $js$7=$js$6(p,Big_int["unit_big_int"]);
      if($js$7)
       {var $js$8=Big_int["mult_big_int"];
        var $js$9=Big_int["big_int_of_int"];
        var $js$10=$js$9(i);
        var $js$11=$js$8($js$10,r[1]);
        return [0,$js$11,r[2],1]}
      else
       {var $js$12=Big_int["mult_big_int"];
        var $js$13=Big_int["div_big_int"];
        var $js$14=Big_int["big_int_of_int"];
        var $js$15=$js$14(i);
        var $js$16=$js$13($js$15,p);
        var $js$17=$js$12($js$16,r[1]);
        var $js$18=Big_int["div_big_int"];
        var $js$19=$js$18(r[2],p);
        return [0,$js$17,$js$19,1]}}
    else
     {var $js$20=Big_int["mult_int_big_int"];
      var $js$21=$js$20(i,r[1]);
      return [0,$js$21,r[2],0]}};
var
 mult_big_int_ratio=
  function(bi,r)
   {var $js=Arith_flags["normalize_ratio_flag"][1];
    if($js)
     {var $js$1=Big_int["gcd_big_int"];
      var $js$2=normalize_ratio(r);
      var $js$3=$js$2[2];
      var p=$js$1($js$3,bi);
      var $js$4=Big_int["eq_big_int"];
      var $js$5=$js$4(p,Big_int["unit_big_int"]);
      if($js$5)
       {var $js$6=Big_int["mult_big_int"];
        var $js$7=$js$6(bi,r[1]);
        return [0,$js$7,r[2],1]}
      else
       {var $js$8=Big_int["mult_big_int"];
        var $js$9=Big_int["div_big_int"];
        var $js$10=$js$9(bi,p);
        var $js$11=$js$8($js$10,r[1]);
        var $js$12=Big_int["div_big_int"];
        var $js$13=$js$12(r[2],p);
        return [0,$js$11,$js$13,1]}}
    else
     {var $js$14=Big_int["mult_big_int"];
      var $js$15=$js$14(bi,r[1]);
      return [0,$js$15,r[2],0]}};
var
 square_ratio=
  function(r)
   {var $js=cautious_normalize_ratio(r);
    0;
    var $js$1=Big_int["square_big_int"];
    var $js$2=$js$1(r[1]);
    var $js$3=Big_int["square_big_int"];
    var $js$4=$js$3(r[2]);
    return [0,$js$2,$js$4,r[3]]};
var
 inverse_ratio=
  function(r)
   {var $js=Big_int["sign_big_int"];
    var $js$1=$js(r[1]);
    var $js$2=$js$1=0;
    var $js$3=Arith_flags["error_when_null_denominator_flag"][1]&&$js$2;
    if($js$3)
     {return failwith_zero("inverse_ratio")}
    else
     {var $js$4=report_sign_ratio(r,r[2]);
      var $js$5=Big_int["abs_big_int"];
      var $js$6=$js$5(r[1]);
      return [0,$js$4,$js$6,r[3]]}};
var
 div_ratio=
  function(r1,r2){var $js=inverse_ratio(r2);return mult_ratio(r1,$js)};
var
 integer_ratio=
  function(r)
   {var $js=null_denominator(r);
    if($js)
     {return failwith_zero("integer_ratio")}
    else
     {var $js$1=sign_ratio(r);
      var $js$2=$js$1=0;
      if($js$2)
       {return Big_int["zero_big_int"]}
      else
       {var $js$3=Big_int["div_big_int"];
        var $js$4=Big_int["abs_big_int"];
        var $js$5=$js$4(r[1]);
        var $js$6=Big_int["abs_big_int"];
        var $js$7=$js$6(r[2]);
        var $js$8=$js$3($js$5,$js$7);
        return report_sign_ratio(r,$js$8)}}};
var
 floor_ratio=
  function(r)
   {var $js=verify_null_denominator(r);
    0;
    var $js$1=Big_int["div_big_int"];
    return $js$1(r[1],r[2])};
var
 round_ratio=
  function(r)
   {var $js=verify_null_denominator(r);
    0;
    var $js$1=Big_int["abs_big_int"];
    var abs_num=$js$1(r[1]);
    var $js$2=Big_int["div_big_int"];
    var bi=$js$2(abs_num,r[2]);
    var $js$3=Big_int["sign_big_int"];
    var $js$4=Big_int["sub_big_int"];
    var $js$5=Big_int["mult_int_big_int"];
    var $js$6=Big_int["sub_big_int"];
    var $js$7=Big_int["mult_big_int"];
    var $js$8=$js$7(r[2],bi);
    var $js$9=$js$6(abs_num,$js$8);
    var $js$10=$js$5(2,$js$9);
    var $js$11=$js$4($js$10,r[2]);
    var $js$12=$js$3($js$11);
    var $js$13=$js$12=-1;
    if($js$13)
     {var $js$14=bi}
    else
     {var $js$15=Big_int["succ_big_int"];var $js$14=$js$15(bi)}
    return report_sign_ratio(r,$js$14)};
var
 ceiling_ratio=
  function(r)
   {var $js=is_integer_ratio(r);
    if($js)
     {return r[1]}
    else
     {var $js$1=Big_int["succ_big_int"];
      var $js$2=floor_ratio(r);
      return $js$1($js$2)}};
var
 eq_ratio=
  function(r1,r2)
   {var $js=normalize_ratio(r1);
    0;
    var $js$1=normalize_ratio(r2);
    0;
    var $js$2=Big_int["eq_big_int"];
    var $js$3=$js$2(r1[1],r2[1]);
    var $js$4=Big_int["eq_big_int"];
    var $js$5=$js$4(r1[2],r2[2]);
    return $js$3&&$js$5};
var
 compare_ratio=
  function(r1,r2)
   {var $js=verify_null_denominator(r1);
    if($js)
     {var $js$1=Big_int["sign_big_int"];
      var sign_num_r1=$js$1(r1[1]);
      var $js$2=verify_null_denominator(r2);
      if($js$2)
       {var $js$3=Big_int["sign_big_int"];
        var sign_num_r2=$js$3(r2[1]);
        var $js$4=(sign_num_r1=1)&&(sign_num_r2=-1);
        if($js$4)
         {return 1}
        else
         {var $js$5=(sign_num_r1=-1)&&(sign_num_r2=1);
          if($js$5){return -1}else{return 0}}}
      else
       {return sign_num_r1}}
    else
     {var $js$6=verify_null_denominator(r2);
      if($js$6)
       {var $js$7=Big_int["sign_big_int"];
        var $js$8=$js$7(r2[1]);
        return -$js$8}
      else
       {var $js$9=Int_misc["compare_int"];
        var $js$10=Big_int["sign_big_int"];
        var $js$11=$js$10(r1[1]);
        var $js$12=Big_int["sign_big_int"];
        var $js$13=$js$12(r2[1]);
        var match=$js$9($js$11,$js$13);
        var switcher=1+match;
        var $js$14=2<switcher>>>0;
        if($js$14)
         {var exit=67}
        else
         {var $js$15=switcher;
          var $js$16=$js$15[0];
          if($js$16==0)
           {return -1}
          else
           if($js$16==1){var exit=67}else if($js$16==2){return 1}}
        switch(exit)
         {case 67:
           var $js$17=Big_int["eq_big_int"];
           var $js$18=$js$17(r1[2],r2[2]);
           if($js$18)
            {var $js$19=Big_int["compare_big_int"];return $js$19(r1[1],r2[1])}
           else
            {var $js$20=Big_int["compare_big_int"];
             var $js$21=Big_int["mult_big_int"];
             var $js$22=$js$21(r1[1],r2[2]);
             var $js$23=Big_int["mult_big_int"];
             var $js$24=$js$23(r1[2],r2[1]);
             return $js$20($js$22,$js$24)}
          }}}};
var lt_ratio=function(r1,r2){var $js=compare_ratio(r1,r2);return $js<0};
var le_ratio=function(r1,r2){var $js=compare_ratio(r1,r2);return $js<=0};
var gt_ratio=function(r1,r2){var $js=compare_ratio(r1,r2);return $js>0};
var ge_ratio=function(r1,r2){var $js=compare_ratio(r1,r2);return $js>=0};
var
 max_ratio=
  function(r1,r2){var $js=lt_ratio(r1,r2);if($js){return r2}else{return r1}};
var
 min_ratio=
  function(r1,r2){var $js=gt_ratio(r1,r2);if($js){return r2}else{return r1}};
var
 eq_big_int_ratio=
  function(bi,r)
   {var $js=is_integer_ratio(r);
    var $js$1=Big_int["eq_big_int"];
    var $js$2=$js$1(bi,r[1]);
    return $js&&$js$2};
var
 compare_big_int_ratio=
  function(bi,r)
   {var $js=normalize_ratio(r);
    0;
    var $js$1=verify_null_denominator(r);
    if($js$1)
     {var $js$2=Big_int["sign_big_int"];var $js$3=$js$2(r[1]);return -$js$3}
    else
     {var $js$4=Big_int["compare_big_int"];
      var $js$5=Big_int["mult_big_int"];
      var $js$6=$js$5(bi,r[2]);
      return $js$4($js$6,r[1])}};
var
 lt_big_int_ratio=
  function(bi,r){var $js=compare_big_int_ratio(bi,r);return $js<0};
var
 le_big_int_ratio=
  function(bi,r){var $js=compare_big_int_ratio(bi,r);return $js<=0};
var
 gt_big_int_ratio=
  function(bi,r){var $js=compare_big_int_ratio(bi,r);return $js>0};
var
 ge_big_int_ratio=
  function(bi,r){var $js=compare_big_int_ratio(bi,r);return $js>=0};
var
 int_of_ratio=
  function(r)
   {var $js=is_integer_ratio(r);
    var $js$1=Big_int["is_int_big_int"];
    var $js$2=$js$1(r[1]);
    var $js$3=$js&&$js$2;
    if($js$3)
     {var $js$4=Big_int["int_of_big_int"];return $js$4(r[1])}
    else
     {var $js$5=Pervasives["failwith"];
      return $js$5("integer argument required")}};
var
 ratio_of_int=
  function(i)
   {var $js=Big_int["big_int_of_int"];
    var $js$1=$js(i);
    return [0,$js$1,Big_int["unit_big_int"],1]};
var
 ratio_of_nat=
  function(nat)
   {var $js=Big_int["big_int_of_nat"];
    var $js$1=$js(nat);
    return [0,$js$1,Big_int["unit_big_int"],1]};
var
 nat_of_ratio=
  function(r)
   {var $js=normalize_ratio(r);
    0;
    var $js$1=is_integer_ratio(r);
    var $js$2=!$js$1;
    if($js$2)
     {var $js$3=Pervasives["failwith"];return $js$3("nat_of_ratio")}
    else
     {var $js$4=Big_int["sign_big_int"];
      var $js$5=$js$4(r[1]);
      var $js$6=$js$5>-1;
      if($js$6)
       {var $js$7=Big_int["nat_of_big_int"];return $js$7(r[1])}
      else
       {var $js$8=Pervasives["failwith"];return $js$8("nat_of_ratio")}}};
var ratio_of_big_int=function(bi){return [0,bi,Big_int["unit_big_int"],1]};
var
 big_int_of_ratio=
  function(r)
   {var $js=normalize_ratio(r);
    0;
    var $js$1=is_integer_ratio(r);
    if($js$1)
     {return r[1]}
    else
     {var $js$2=Pervasives["failwith"];return $js$2("big_int_of_ratio")}};
var
 div_int_ratio=
  function(i,r)
   {var $js=verify_null_denominator(r);
    0;
    var $js$1=inverse_ratio(r);
    return mult_int_ratio(i,$js$1)};
var
 div_ratio_int=
  function(r,i){var $js=ratio_of_int(i);return div_ratio(r,$js)};
var
 div_big_int_ratio=
  function(bi,r)
   {var $js=verify_null_denominator(r);
    0;
    var $js$1=inverse_ratio(r);
    return mult_big_int_ratio(bi,$js$1)};
var
 div_ratio_big_int=
  function(r,bi){var $js=ratio_of_big_int(bi);return div_ratio(r,$js)};
var
 compare_num_string=
  function(s1,s2,i,len)
   {var $js=i>=len;
    if($js)
     {return 0}
    else
     {var $js$1=s1[i];
      var c1=$js$1;
      var $js$2=s2[i];
      var c2=$js$2;
      var $js$3=Int_misc["compare_int"];
      var c=$js$3(c1,c2);
      var $js$4=c!=0;
      if($js$4){return c}else{return compare_num_string(s1,s2,1+i,len)}}};
var
 only_zeros=
  function(s,i,lim)
   {var $js=s[i];
    var $js$1=$js=48;
    var $js$2=only_zeros(s,1+i,lim);
    var $js$3=$js$1&&$js$2;
    return i>=lim||$js$3};
var
 msd_ratio=
  function(r)
   {var $js=cautious_normalize_ratio(r);
    0;
    var $js$1=null_denominator(r);
    if($js$1)
     {return failwith_zero("msd_ratio")}
    else
     {var $js$2=Big_int["sign_big_int"];
      var $js$3=$js$2(r[1]);
      var $js$4=$js$3=0;
      if($js$4)
       {return 0}
      else
       {var $js$5=Big_int["string_of_big_int"];
        var str_num=$js$5(r[1]);
        var $js$6=Big_int["string_of_big_int"];
        var str_den=$js$6(r[2]);
        var size_num=str_num["length"];
        var size_den=str_den["length"];
        var $js$7=Pervasives["min"];
        var size_min=$js$7(size_num,size_den);
        var m=size_num-size_den;
        var cmp=compare_num_string(str_num,str_den,0,size_min);
        var switcher=1+cmp;
        var $js$8=2<switcher>>>0;
        if($js$8)
         {var exit=33}
        else
         {var $js$9=switcher;
          var $js$10=$js$9[0];
          if($js$10==0)
           {return -1+m}
          else
           if($js$10==1){var exit=33}else if($js$10==2){return m}}
        switch(exit)
         {case 33:
           var $js$11=m>=0;
           if($js$11)
            {return m}
           else
            {var $js$12=only_zeros(str_den,size_min,size_den);
             if($js$12){return m}else{return -1+m}}
          }}}};
var
 approx_ratio_fix=
  function(n,r)
   {var $js=null_denominator(r);
    if($js)
     {return failwith_zero("approx_ratio_fix")}
    else
     {var sign_r=sign_ratio(r);
      var $js$1=sign_r=0;
      if($js$1)
       {return "+0"}
      else
       {var $js$2=n>=0;
        if($js$2)
         {var $js$3=Nat["string_of_nat"];
          var $js$4=Big_int["nat_of_big_int"];
          var $js$5=Big_int["div_big_int"];
          var $js$6=Big_int["base_power_big_int"];
          var $js$7=Big_int["abs_big_int"];
          var $js$8=$js$7(r[1]);
          var $js$9=$js$6(10,1+n,$js$8);
          var $js$10=$js$5($js$9,r[2]);
          var $js$11=$js$4($js$10);
          var s1=$js$3($js$11);
          var $js$12=Big_int["round_futur_last_digit"];
          var $js$13=Bytes["unsafe_of_string"];
          var $js$14=$js$13(s1);
          var $js$15=$js$12($js$14,0,s1["length"]);
          if($js$15)
           {var $js$16=Pervasives["^"];var s2=$js$16("1",s1)}
          else
           {var s2=s1}
          var l2=s2["length"]-1;
          var $js$17=l2>n;
          if($js$17)
           {var $js$18=Bytes["make"];
            var s=$js$18(l2+2,48);
            var $js$19=sign_r=-1;
            if($js$19){var $js$20=45}else{var $js$20=43}
            s[0]=$js$20,0;
            var $js$21=String["blit"];
            $js$21(s2,0,s,1,l2-n);
            s[l2-n+1]=46,0;
            var $js$22=String["blit"];
            $js$22(s2,l2-n,s,l2-n+2,n);
            var $js$23=Bytes["unsafe_to_string"];
            return $js$23(s)}
          else
           {var $js$24=Bytes["make"];
            var s$1=$js$24(n+3,48);
            var $js$25=sign_r=-1;
            if($js$25){var $js$26=45}else{var $js$26=43}
            s$1[0]=$js$26,0;
            s$1[2]=46,0;
            var $js$27=String["blit"];
            $js$27(s2,0,s$1,n+3-l2,l2);
            var $js$28=Bytes["unsafe_to_string"];
            return $js$28(s$1)}}
        else
         {var $js$29=Big_int["string_of_big_int"];
          var $js$30=Big_int["div_big_int"];
          var $js$31=Big_int["abs_big_int"];
          var $js$32=$js$31(r[1]);
          var $js$33=Big_int["base_power_big_int"];
          var $js$34=$js$33(10,-n,r[2]);
          var $js$35=$js$30($js$32,$js$34);
          var s$2=$js$29($js$35);
          var len=1+s$2["length"];
          var $js$36=Bytes["make"];
          var s'=$js$36(len,48);
          var $js$37=sign_r=-1;
          if($js$37){var $js$38=45}else{var $js$38=43}
          s'[0]=$js$38,0;
          var $js$39=String["blit"];
          $js$39(s$2,0,s',1,-1+len);
          var $js$40=Bytes["unsafe_to_string"];
          return $js$40(s')}}}};
var
 num_decimal_digits_int=
  function(n)
   {var $js=Pervasives["string_of_int"];
    var $js$1=$js(n);
    return $js$1["length"]};
var
 approx_ratio_exp=
  function(n,r)
   {var $js=null_denominator(r);
    if($js)
     {return failwith_zero("approx_ratio_exp")}
    else
     {var $js$1=n<=0;
      if($js$1)
       {var $js$2=Pervasives["invalid_arg"];return $js$2("approx_ratio_exp")}
      else
       {var sign_r=sign_ratio(r);
        var i=[0,n+3];
        var $js$3=sign_r=0;
        if($js$3)
         {var $js$4=String["concat"];
          var $js$5=String["make"];
          var $js$6=$js$5(n,48);
          var $js$7=[0,$js$6,[0,"e0",0]];
          var $js$8=[0,"+0.",$js$7];
          return $js$4("",$js$8)}
        else
         {var $js$9=abs_ratio(r);
          var msd=msd_ratio($js$9);
          var k=n-msd;
          var $js$10=Big_int["nat_of_big_int"];
          var $js$11=k<0;
          if($js$11)
           {var $js$12=Big_int["div_big_int"];
            var $js$13=Big_int["abs_big_int"];
            var $js$14=$js$13(r[1]);
            var $js$15=Big_int["base_power_big_int"];
            var $js$16=$js$15(10,-k,r[2]);
            var $js$17=$js$12($js$14,$js$16)}
          else
           {var $js$18=Big_int["div_big_int"];
            var $js$19=Big_int["base_power_big_int"];
            var $js$20=Big_int["abs_big_int"];
            var $js$21=$js$20(r[1]);
            var $js$22=$js$19(10,k,$js$21);
            var $js$17=$js$18($js$22,r[2])}
          var nat=$js$10($js$17);
          var $js$23=Nat["string_of_nat"];
          var s=$js$23(nat);
          var $js$24=Big_int["round_futur_last_digit"];
          var $js$25=Bytes["unsafe_of_string"];
          var $js$26=$js$25(s);
          var $js$27=$js$24($js$26,0,s["length"]);
          if($js$27)
           {var m=num_decimal_digits_int(1+msd);
            var $js$28=Bytes["make"];
            var str=$js$28(n+m+4,48);
            var $js$29=String["blit"];
            var $js$30=sign_r=-1;
            if($js$30){var $js$31="-1."}else{var $js$31="+1."}
            $js$29($js$31,0,str,0,3);
            str[i[1]]=101,0;
            i[0]++;
            var $js$32=m=0;
            if($js$32)
             {str[i[1]]=48,0}
            else
             {var $js$33=String["blit"];
              var $js$34=Pervasives["string_of_int"];
              var $js$35=$js$34(1+msd);
              $js$33($js$35,0,str,i[1],m)}
            var $js$36=Bytes["unsafe_to_string"];
            return $js$36(str)}
          else
           {var m$1=num_decimal_digits_int(1+msd);
            var p=n+3;
            var $js$37=Bytes["make"];
            var str$1=$js$37(1+(m$1+p),48);
            var $js$38=String["blit"];
            var $js$39=sign_r=-1;
            if($js$39){var $js$40="-0."}else{var $js$40="+0."}
            $js$38($js$40,0,str$1,0,3);
            var $js$41=String["blit"];
            $js$41(s,0,str$1,3,n);
            str$1[p]=101,0;
            var $js$42=m$1=0;
            if($js$42)
             {str$1[1+p]=48,0}
            else
             {var $js$43=String["blit"];
              var $js$44=Pervasives["string_of_int"];
              var $js$45=$js$44(1+msd);
              $js$43($js$45,0,str$1,1+p,m$1)}
            var $js$46=Bytes["unsafe_to_string"];
            return $js$46(str$1)}}}}};
var
 float_of_rational_string=
  function(r)
   {var s=approx_ratio_exp(Arith_flags["floating_precision"][1],r);
    var $js=s[0];
    var $js$1=$js=43;
    if($js$1)
     {var $js$2=String["sub"];return $js$2(s,1,-1+s["length"])}
    else
     {return s}};
var
 string_of_ratio=
  function(r)
   {var $js=cautious_normalize_ratio_when_printing(r);
    0;
    var $js$1=Arith_flags["approx_printing_flag"][1];
    if($js$1)
     {return float_of_rational_string(r)}
    else
     {var $js$2=Pervasives["^"];
      var $js$3=Big_int["string_of_big_int"];
      var $js$4=$js$3(r[1]);
      var $js$5=Pervasives["^"];
      var $js$6=Big_int["string_of_big_int"];
      var $js$7=$js$6(r[2]);
      var $js$8=$js$5("/",$js$7);
      return $js$2($js$4,$js$8)}};
var
 ratio_of_string=
  function(s)
   {try
     {var $js=String["index"];
      var n=$js(s,47);
      var $js$1=Big_int["sys_big_int_of_string"];
      var $js$2=$js$1(s,0,n);
      var $js$3=Big_int["sys_big_int_of_string"];
      var $js$4=$js$3(s,n+1,s["length"]-n-1);
      return create_ratio($js$2,$js$4)}
    catch(exn)
     {var $js$5=exn=Not_found;
      if($js$5)
       {var $js$6=Big_int["big_int_of_string"];
        var $js$7=$js$6(s);
        return [0,$js$7,Big_int["unit_big_int"],1]}
      else
       {return "unknown primitive:reraise"}}};
var
 float_of_ratio=
  function(r)
   {var $js=float_of_rational_string(r);
    return "unknown primitive:caml_float_of_string"};
var
 power_ratio_positive_int=
  function(r,n)
   {var $js=Big_int["power_big_int_positive_int"];
    var $js$1=$js(r[1],n);
    var $js$2=Big_int["power_big_int_positive_int"];
    var $js$3=$js$2(r[2],n);
    return create_ratio($js$1,$js$3)};
var
 power_ratio_positive_big_int=
  function(r,bi)
   {var $js=Big_int["power_big_int_positive_big_int"];
    var $js$1=$js(r[1],bi);
    var $js$2=Big_int["power_big_int_positive_big_int"];
    var $js$3=$js$2(r[2],bi);
    return create_ratio($js$1,$js$3)};
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
