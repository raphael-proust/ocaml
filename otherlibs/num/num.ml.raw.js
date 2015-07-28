var Pervasives=require("Pervasives");
var Ratio=require("Ratio");
var Int_misc=require("Int_misc");
var Big_int=require("Big_int");
var Nat=require("Nat");
var Arith_flags=require("Arith_flags");
var $js=Big_int["big_int_of_int"];
var biggest_INT=$js(Int_misc["biggest_int"]);
var $js$1=Big_int["big_int_of_int"];
var least_INT=$js$1(Int_misc["least_int"]);
var
 num_of_big_int=
  function(bi)
   {var $js$2=Big_int["le_big_int"];
    var $js$3=$js$2(bi,biggest_INT);
    var $js$4=Big_int["ge_big_int"];
    var $js$5=$js$4(bi,least_INT);
    var $js$6=$js$3&&$js$5;
    if($js$6)
     {var $js$7=Big_int["int_of_big_int"];
      var $js$8=$js$7(bi);
      return [0,$js$8]}
    else
     {return [1,bi]}};
var
 numerator_num=
  function(n)
   {var $js$2=n;
    if($js$2==0)
     {var exit=76}
    else
     if($js$2==1)
      {var exit=76}
     else
      if($js$2==2)
       {var r=n[1];
        var $js$3=Ratio["normalize_ratio"];
        var $js$4=$js$3(r);
        0;
        var $js$5=Ratio["numerator_ratio"];
        var $js$6=$js$5(r);
        return num_of_big_int($js$6)}
    switch(exit){case 76:return n}};
var
 denominator_num=
  function(n)
   {var $js$2=n;
    if($js$2==0)
     {var exit=74}
    else
     if($js$2==1)
      {var exit=74}
     else
      if($js$2==2)
       {var r=n[1];
        var $js$3=Ratio["normalize_ratio"];
        var $js$4=$js$3(r);
        0;
        var $js$5=Ratio["denominator_ratio"];
        var $js$6=$js$5(r);
        return num_of_big_int($js$6)}
    switch(exit){case 74:return [0,1]}};
var
 normalize_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];return [0,i]}
    else
     if($js$2==1)
      {var bi=param[1];return num_of_big_int(bi)}
     else
      if($js$2==2)
       {var r=param[1];
        var $js$3=Ratio["is_integer_ratio"];
        var $js$4=$js$3(r);
        if($js$4)
         {var $js$5=Ratio["numerator_ratio"];
          var $js$6=$js$5(r);
          return num_of_big_int($js$6)}
        else
         {return [2,r]}}};
var
 cautious_normalize_num_when_printing=
  function(n)
   {var $js$2=Arith_flags["normalize_ratio_when_printing_flag"][1];
    if($js$2){return normalize_num(n)}else{return n}};
var
 num_of_ratio=
  function(r)
   {var $js$2=Ratio["normalize_ratio"];
    var $js$3=$js$2(r);
    0;
    var $js$4=Ratio["is_integer_ratio"];
    var $js$5=$js$4(r);
    var $js$6=!$js$5;
    if($js$6)
     {return [2,r]}
    else
     {var $js$7=Big_int["is_int_big_int"];
      var $js$8=Ratio["numerator_ratio"];
      var $js$9=$js$8(r);
      var $js$10=$js$7($js$9);
      if($js$10)
       {var $js$11=Big_int["int_of_big_int"];
        var $js$12=Ratio["numerator_ratio"];
        var $js$13=$js$12(r);
        var $js$14=$js$11($js$13);
        return [0,$js$14]}
      else
       {var $js$15=Ratio["numerator_ratio"];
        var $js$16=$js$15(r);
        return [1,$js$16]}}};
var
 add_num=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match;
    if($js$2==0)
     {var int1=match[1];
      var $js$3=match$1;
      if($js$3==0)
       {var int2=match$1[1];
        var r=int1+int2;
        var $js$4=(int1^int2|int1^r^-1)<0;
        if($js$4)
         {return [0,r]}
        else
         {var $js$5=Big_int["add_big_int"];
          var $js$6=Big_int["big_int_of_int"];
          var $js$7=$js$6(int1);
          var $js$8=Big_int["big_int_of_int"];
          var $js$9=$js$8(int2);
          var $js$10=$js$5($js$7,$js$9);
          return [1,$js$10]}}
      else
       if($js$3==1)
        {var i=int1;
         var bi=match$1[1];
         var $js$11=Big_int["add_int_big_int"];
         var $js$12=$js$11(i,bi);
         return num_of_big_int($js$12)}
       else
        if($js$3==2)
         {var i$1=int1;
          var r$1=match$1[1];
          var $js$13=Ratio["add_int_ratio"];
          var $js$14=$js$13(i$1,r$1);
          return [2,$js$14]}}
    else
     if($js$2==1)
      {var bi$1=match[1];
       var $js$15=match$1;
       if($js$15==0)
        {var i$2=match$1[1];
         var $js$16=Big_int["add_int_big_int"];
         var $js$17=$js$16(i$2,bi$1);
         return num_of_big_int($js$17)}
       else
        if($js$15==1)
         {var bi1=bi$1;
          var bi2=match$1[1];
          var $js$18=Big_int["add_big_int"];
          var $js$19=$js$18(bi1,bi2);
          return num_of_big_int($js$19)}
        else
         if($js$15==2)
          {var bi$2=bi$1;
           var r$2=match$1[1];
           var $js$20=Ratio["add_big_int_ratio"];
           var $js$21=$js$20(bi$2,r$2);
           return [2,$js$21]}}
     else
      if($js$2==2)
       {var r$3=match[1];
        var $js$22=match$1;
        if($js$22==0)
         {var i$3=match$1[1];
          var $js$23=Ratio["add_int_ratio"];
          var $js$24=$js$23(i$3,r$3);
          return [2,$js$24]}
        else
         if($js$22==1)
          {var r$4=r$3;
           var bi$3=match$1[1];
           var $js$25=Ratio["add_big_int_ratio"];
           var $js$26=$js$25(bi$3,r$4);
           return [2,$js$26]}
         else
          if($js$22==2)
           {var r1=r$3;
            var r2=match$1[1];
            var $js$27=Ratio["add_ratio"];
            var $js$28=$js$27(r1,r2);
            return num_of_ratio($js$28)}}};
var +/=add_num;
var
 minus_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];
      var $js$3=i=Int_misc["monster_int"];
      if($js$3)
       {var $js$4=Big_int["minus_big_int"];
        var $js$5=Big_int["big_int_of_int"];
        var $js$6=$js$5(i);
        var $js$7=$js$4($js$6);
        return [1,$js$7]}
      else
       {return [0,-i]}}
    else
     if($js$2==1)
      {var bi=param[1];
       var $js$8=Big_int["minus_big_int"];
       var $js$9=$js$8(bi);
       return [1,$js$9]}
     else
      if($js$2==2)
       {var r=param[1];
        var $js$10=Ratio["minus_ratio"];
        var $js$11=$js$10(r);
        return [2,$js$11]}};
var sub_num=function(n1,n2){var $js$2=minus_num(n2);return add_num(n1,$js$2)};
var -/=sub_num;
var
 mult_num=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match;
    if($js$2==0)
     {var int1=match[1];
      var $js$3=match$1;
      if($js$3==0)
       {var int2=match$1[1];
        var $js$4=Int_misc["num_bits_int"];
        var $js$5=$js$4(int1);
        var $js$6=Int_misc["num_bits_int"];
        var $js$7=$js$6(int2);
        var $js$8=$js$5+$js$7;
        var $js$9=$js$8<Int_misc["length_of_int"];
        if($js$9)
         {return [0,int1*int2]}
        else
         {var $js$10=Big_int["mult_big_int"];
          var $js$11=Big_int["big_int_of_int"];
          var $js$12=$js$11(int1);
          var $js$13=Big_int["big_int_of_int"];
          var $js$14=$js$13(int2);
          var $js$15=$js$10($js$12,$js$14);
          return num_of_big_int($js$15)}}
      else
       if($js$3==1)
        {var i=int1;
         var bi=match$1[1];
         var $js$16=Big_int["mult_int_big_int"];
         var $js$17=$js$16(i,bi);
         return num_of_big_int($js$17)}
       else
        if($js$3==2)
         {var i$1=int1;
          var r=match$1[1];
          var $js$18=Ratio["mult_int_ratio"];
          var $js$19=$js$18(i$1,r);
          return num_of_ratio($js$19)}}
    else
     if($js$2==1)
      {var bi$1=match[1];
       var $js$20=match$1;
       if($js$20==0)
        {var i$2=match$1[1];
         var $js$21=Big_int["mult_int_big_int"];
         var $js$22=$js$21(i$2,bi$1);
         return num_of_big_int($js$22)}
       else
        if($js$20==1)
         {var bi1=bi$1;
          var bi2=match$1[1];
          var $js$23=Big_int["mult_big_int"];
          var $js$24=$js$23(bi1,bi2);
          return num_of_big_int($js$24)}
        else
         if($js$20==2)
          {var bi$2=bi$1;
           var r$1=match$1[1];
           var $js$25=Ratio["mult_big_int_ratio"];
           var $js$26=$js$25(bi$2,r$1);
           return num_of_ratio($js$26)}}
     else
      if($js$2==2)
       {var r$2=match[1];
        var $js$27=match$1;
        if($js$27==0)
         {var i$3=match$1[1];
          var $js$28=Ratio["mult_int_ratio"];
          var $js$29=$js$28(i$3,r$2);
          return num_of_ratio($js$29)}
        else
         if($js$27==1)
          {var r$3=r$2;
           var bi$3=match$1[1];
           var $js$30=Ratio["mult_big_int_ratio"];
           var $js$31=$js$30(bi$3,r$3);
           return num_of_ratio($js$31)}
         else
          if($js$27==2)
           {var r1=r$2;
            var r2=match$1[1];
            var $js$32=Ratio["mult_ratio"];
            var $js$33=$js$32(r1,r2);
            return num_of_ratio($js$33)}}};
var */=mult_num;
var
 square_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];
      var $js$3=Int_misc["num_bits_int"];
      var $js$4=$js$3(i);
      var $js$5=2*$js$4;
      var $js$6=$js$5<Int_misc["length_of_int"];
      if($js$6)
       {return [0,i*i]}
      else
       {var $js$7=Big_int["square_big_int"];
        var $js$8=Big_int["big_int_of_int"];
        var $js$9=$js$8(i);
        var $js$10=$js$7($js$9);
        return num_of_big_int($js$10)}}
    else
     if($js$2==1)
      {var bi=param[1];
       var $js$11=Big_int["square_big_int"];
       var $js$12=$js$11(bi);
       return [1,$js$12]}
     else
      if($js$2==2)
       {var r=param[1];
        var $js$13=Ratio["square_ratio"];
        var $js$14=$js$13(r);
        return [2,$js$14]}};
var
 div_num=
  function(n1,n2)
   {var $js$2=n1;
    if($js$2==0)
     {var i1=n1[1];
      var $js$3=n2;
      if($js$3==0)
       {var i2=n2[1];
        var $js$4=Ratio["create_ratio"];
        var $js$5=Big_int["big_int_of_int"];
        var $js$6=$js$5(i1);
        var $js$7=Big_int["big_int_of_int"];
        var $js$8=$js$7(i2);
        var $js$9=$js$4($js$6,$js$8);
        return num_of_ratio($js$9)}
      else
       if($js$3==1)
        {var bi2=n2[1];
         var $js$10=Ratio["create_ratio"];
         var $js$11=Big_int["big_int_of_int"];
         var $js$12=$js$11(i1);
         var $js$13=$js$10($js$12,bi2);
         return num_of_ratio($js$13)}
       else
        if($js$3==2)
         {var r2=n2[1];
          var $js$14=Ratio["div_int_ratio"];
          var $js$15=$js$14(i1,r2);
          return num_of_ratio($js$15)}}
    else
     if($js$2==1)
      {var bi1=n1[1];
       var $js$16=n2;
       if($js$16==0)
        {var i2$1=n2[1];
         var $js$17=Ratio["create_ratio"];
         var $js$18=Big_int["big_int_of_int"];
         var $js$19=$js$18(i2$1);
         var $js$20=$js$17(bi1,$js$19);
         return num_of_ratio($js$20)}
       else
        if($js$16==1)
         {var bi2$1=n2[1];
          var $js$21=Ratio["create_ratio"];
          var $js$22=$js$21(bi1,bi2$1);
          return num_of_ratio($js$22)}
        else
         if($js$16==2)
          {var r2$1=n2[1];
           var $js$23=Ratio["div_big_int_ratio"];
           var $js$24=$js$23(bi1,r2$1);
           return num_of_ratio($js$24)}}
     else
      if($js$2==2)
       {var r1=n1[1];
        var $js$25=n2;
        if($js$25==0)
         {var i2$2=n2[1];
          var $js$26=Ratio["div_ratio_int"];
          var $js$27=$js$26(r1,i2$2);
          return num_of_ratio($js$27)}
        else
         if($js$25==1)
          {var bi2$2=n2[1];
           var $js$28=Ratio["div_ratio_big_int"];
           var $js$29=$js$28(r1,bi2$2);
           return num_of_ratio($js$29)}
         else
          if($js$25==2)
           {var r2$2=n2[1];
            var $js$30=Ratio["div_ratio"];
            var $js$31=$js$30(r1,r2$2);
            return num_of_ratio($js$31)}}};
var //=div_num;
var
 floor_num=
  function(n)
   {var $js$2=n;
    if($js$2==0)
     {return n}
    else
     if($js$2==1)
      {var n$1=n;return n$1}
     else
      if($js$2==2)
       {var r=n[1];
        var $js$3=Ratio["floor_ratio"];
        var $js$4=$js$3(r);
        return num_of_big_int($js$4)}};
var
 ratio_of_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];var $js$3=Ratio["ratio_of_int"];return $js$3(i)}
    else
     if($js$2==1)
      {var bi=param[1];var $js$4=Ratio["ratio_of_big_int"];return $js$4(bi)}
     else
      if($js$2==2){var r=param[1];return r}};
var
 quo_num=
  function(n1,n2)
   {var match=n1;
    var match$1=n2;
    var $js$2=match;
    if($js$2==0)
     {var i1=match[1];
      var $js$3=match$1;
      if($js$3==0)
       {var i2=match$1[1];
        var q=i1/i2;
        var r=i1%i2;
        var $js$4=r>=0;
        if($js$4)
         {var $js$5=q}
        else
         {var $js$6=i2>0;if($js$6){var $js$5=q-1}else{var $js$5=q+1}}
        return [0,$js$5]}
      else
       if($js$3==1)
        {var i1$1=i1;
         var bi2=match$1[1];
         var $js$7=Big_int["div_big_int"];
         var $js$8=Big_int["big_int_of_int"];
         var $js$9=$js$8(i1$1);
         var $js$10=$js$7($js$9,bi2);
         return num_of_big_int($js$10)}
       else
        if($js$3==2)
         {var i1$2=i1;
          var r2=match$1[1];
          var $js$11=Ratio["report_sign_ratio"];
          var $js$12=Ratio["floor_ratio"];
          var $js$13=Ratio["div_int_ratio"];
          var $js$14=Ratio["abs_ratio"];
          var $js$15=$js$14(r2);
          var $js$16=$js$13(i1$2,$js$15);
          var $js$17=$js$12($js$16);
          var $js$18=$js$11(r2,$js$17);
          return num_of_big_int($js$18)}}
    else
     if($js$2==1)
      {var bi1=match[1];
       var $js$19=match$1;
       if($js$19==0)
        {var i2$1=match$1[1];
         var $js$20=Big_int["div_big_int"];
         var $js$21=Big_int["big_int_of_int"];
         var $js$22=$js$21(i2$1);
         var $js$23=$js$20(bi1,$js$22);
         return num_of_big_int($js$23)}
       else
        if($js$19==1)
         {var bi1$1=bi1;
          var bi2$1=match$1[1];
          var $js$24=Big_int["div_big_int"];
          var $js$25=$js$24(bi1$1,bi2$1);
          return num_of_big_int($js$25)}
        else
         if($js$19==2)
          {var bi1$2=bi1;
           var r2$1=match$1[1];
           var $js$26=Ratio["report_sign_ratio"];
           var $js$27=Ratio["floor_ratio"];
           var $js$28=Ratio["div_big_int_ratio"];
           var $js$29=Ratio["abs_ratio"];
           var $js$30=$js$29(r2$1);
           var $js$31=$js$28(bi1$2,$js$30);
           var $js$32=$js$27($js$31);
           var $js$33=$js$26(r2$1,$js$32);
           return num_of_big_int($js$33)}}
     else
      if($js$2==2)
       {var r1=match[1];
        var r2$2=ratio_of_num(n2);
        var $js$34=Ratio["report_sign_ratio"];
        var $js$35=Ratio["floor_ratio"];
        var $js$36=Ratio["div_ratio"];
        var $js$37=Ratio["abs_ratio"];
        var $js$38=$js$37(r2$2);
        var $js$39=$js$36(r1,$js$38);
        var $js$40=$js$35($js$39);
        var $js$41=$js$34(r2$2,$js$40);
        return num_of_big_int($js$41)}};
var
 mod_num=
  function(n1,n2)
   {var match=n1;
    var match$1=n2;
    var $js$2=match;
    if($js$2==0)
     {var i1=match[1];
      var $js$3=match$1;
      if($js$3==0)
       {var i2=match$1[1];
        var r=i1%i2;
        var $js$4=r>=0;
        if($js$4)
         {var $js$5=r}
        else
         {var $js$6=i2>0;if($js$6){var $js$5=r+i2}else{var $js$5=r-i2}}
        return [0,$js$5]}
      else
       if($js$3==1)
        {var i1$1=i1;
         var bi2=match$1[1];
         var $js$7=Big_int["mod_big_int"];
         var $js$8=Big_int["big_int_of_int"];
         var $js$9=$js$8(i1$1);
         var $js$10=$js$7($js$9,bi2);
         return num_of_big_int($js$10)}
       else
        if($js$3==2){var exit=52}}
    else
     if($js$2==1)
      {var bi1=match[1];
       var $js$11=match$1;
       if($js$11==0)
        {var i2$1=match$1[1];
         var $js$12=Big_int["mod_big_int"];
         var $js$13=Big_int["big_int_of_int"];
         var $js$14=$js$13(i2$1);
         var $js$15=$js$12(bi1,$js$14);
         return num_of_big_int($js$15)}
       else
        if($js$11==1)
         {var bi1$1=bi1;
          var bi2$1=match$1[1];
          var $js$16=Big_int["mod_big_int"];
          var $js$17=$js$16(bi1$1,bi2$1);
          return num_of_big_int($js$17)}
        else
         if($js$11==2){var exit=52}}
     else
      if($js$2==2){var exit=52}
    switch(exit)
     {case 52:
       var $js$18=quo_num(n1,n2);
       var $js$19=mult_num(n2,$js$18);
       return sub_num(n1,$js$19)
      }};
var
 power_num_int=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match;
    if($js$2==0)
     {var n=match$1;
      var i=match[1];
      var $js$3=Int_misc["sign_int"];
      var match$2=$js$3(n);
      var $js$4=match$2!=0;
      if($js$4)
       {var $js$5=match$2!=1;
        if($js$5)
         {var $js$6=Ratio["create_normalized_ratio"];
          var $js$7=Big_int["power_int_positive_int"];
          var $js$8=$js$7(i,-n);
          var $js$9=$js$6(Big_int["unit_big_int"],$js$8);
          return [2,$js$9]}
        else
         {var $js$10=Big_int["power_int_positive_int"];
          var $js$11=$js$10(i,n);
          return num_of_big_int($js$11)}}
      else
       {return [0,1]}}
    else
     if($js$2==1)
      {var n$1=match$1;
       var bi=match[1];
       var $js$12=Int_misc["sign_int"];
       var match$3=$js$12(n$1);
       var $js$13=match$3!=0;
       if($js$13)
        {var $js$14=match$3!=1;
         if($js$14)
          {var $js$15=Ratio["create_normalized_ratio"];
           var $js$16=Big_int["power_big_int_positive_int"];
           var $js$17=$js$16(bi,-n$1);
           var $js$18=$js$15(Big_int["unit_big_int"],$js$17);
           return [2,$js$18]}
         else
          {var $js$19=Big_int["power_big_int_positive_int"];
           var $js$20=$js$19(bi,n$1);
           return num_of_big_int($js$20)}}
       else
        {return [0,1]}}
     else
      if($js$2==2)
       {var n$2=match$1;
        var r=match[1];
        var $js$21=Int_misc["sign_int"];
        var match$4=$js$21(n$2);
        var $js$22=match$4!=0;
        if($js$22)
         {var $js$23=match$4!=1;
          if($js$23)
           {var $js$24=Ratio["power_ratio_positive_int"];
            var $js$25=Ratio["inverse_ratio"];
            var $js$26=$js$25(r);
            var $js$27=$js$24($js$26,-n$2);
            return [2,$js$27]}
          else
           {var $js$28=Ratio["power_ratio_positive_int"];
            var $js$29=$js$28(r,n$2);
            return [2,$js$29]}}
        else
         {return [0,1]}}};
var
 power_num_big_int=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match;
    if($js$2==0)
     {var n=match$1;
      var i=match[1];
      var $js$3=Big_int["sign_big_int"];
      var match$2=$js$3(n);
      var $js$4=match$2!=0;
      if($js$4)
       {var $js$5=match$2!=1;
        if($js$5)
         {var $js$6=Ratio["create_normalized_ratio"];
          var $js$7=Big_int["power_int_positive_big_int"];
          var $js$8=Big_int["minus_big_int"];
          var $js$9=$js$8(n);
          var $js$10=$js$7(i,$js$9);
          var $js$11=$js$6(Big_int["unit_big_int"],$js$10);
          return [2,$js$11]}
        else
         {var $js$12=Big_int["power_int_positive_big_int"];
          var $js$13=$js$12(i,n);
          return num_of_big_int($js$13)}}
      else
       {return [0,1]}}
    else
     if($js$2==1)
      {var n$1=match$1;
       var bi=match[1];
       var $js$14=Big_int["sign_big_int"];
       var match$3=$js$14(n$1);
       var $js$15=match$3!=0;
       if($js$15)
        {var $js$16=match$3!=1;
         if($js$16)
          {var $js$17=Ratio["create_normalized_ratio"];
           var $js$18=Big_int["power_big_int_positive_big_int"];
           var $js$19=Big_int["minus_big_int"];
           var $js$20=$js$19(n$1);
           var $js$21=$js$18(bi,$js$20);
           var $js$22=$js$17(Big_int["unit_big_int"],$js$21);
           return [2,$js$22]}
         else
          {var $js$23=Big_int["power_big_int_positive_big_int"];
           var $js$24=$js$23(bi,n$1);
           return num_of_big_int($js$24)}}
       else
        {return [0,1]}}
     else
      if($js$2==2)
       {var n$2=match$1;
        var r=match[1];
        var $js$25=Big_int["sign_big_int"];
        var match$4=$js$25(n$2);
        var $js$26=match$4!=0;
        if($js$26)
         {var $js$27=match$4!=1;
          if($js$27)
           {var $js$28=Ratio["power_ratio_positive_big_int"];
            var $js$29=Ratio["inverse_ratio"];
            var $js$30=$js$29(r);
            var $js$31=Big_int["minus_big_int"];
            var $js$32=$js$31(n$2);
            var $js$33=$js$28($js$30,$js$32);
            return [2,$js$33]}
          else
           {var $js$34=Ratio["power_ratio_positive_big_int"];
            var $js$35=$js$34(r,n$2);
            return [2,$js$35]}}
        else
         {return [0,1]}}};
var
 power_num=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match$1;
    if($js$2==0)
     {var n=match;var i=match$1[1];return power_num_int(n,i)}
    else
     if($js$2==1)
      {var n$1=match;var bi=match$1[1];return power_num_big_int(n$1,bi)}
     else
      if($js$2==2)
       {var $js$3=Pervasives["invalid_arg"];return $js$3("power_num")}};
var **/=power_num;
var
 is_integer_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {return 1}
    else
     if($js$2==1)
      {return 1}
     else
      if($js$2==2)
       {var r=param[1];var $js$3=Ratio["is_integer_ratio"];return $js$3(r)}};
var
 integer_num=
  function(n)
   {var $js$2=n;
    if($js$2==0)
     {return n}
    else
     if($js$2==1)
      {var n$1=n;return n$1}
     else
      if($js$2==2)
       {var r=n[1];
        var $js$3=Ratio["integer_ratio"];
        var $js$4=$js$3(r);
        return num_of_big_int($js$4)}};
var
 round_num=
  function(n)
   {var $js$2=n;
    if($js$2==0)
     {return n}
    else
     if($js$2==1)
      {var n$1=n;return n$1}
     else
      if($js$2==2)
       {var r=n[1];
        var $js$3=Ratio["round_ratio"];
        var $js$4=$js$3(r);
        return num_of_big_int($js$4)}};
var
 ceiling_num=
  function(n)
   {var $js$2=n;
    if($js$2==0)
     {return n}
    else
     if($js$2==1)
      {var n$1=n;return n$1}
     else
      if($js$2==2)
       {var r=n[1];
        var $js$3=Ratio["ceiling_ratio"];
        var $js$4=$js$3(r);
        return num_of_big_int($js$4)}};
var
 sign_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];var $js$3=Int_misc["sign_int"];return $js$3(i)}
    else
     if($js$2==1)
      {var bi=param[1];var $js$4=Big_int["sign_big_int"];return $js$4(bi)}
     else
      if($js$2==2)
       {var r=param[1];var $js$5=Ratio["sign_ratio"];return $js$5(r)}};
var
 eq_num=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match;
    if($js$2==0)
     {var int1=match[1];
      var $js$3=match$1;
      if($js$3==0)
       {var int2=match$1[1];return int1=int2}
      else
       if($js$3==1)
        {var i=int1;
         var bi=match$1[1];
         var $js$4=Big_int["eq_big_int"];
         var $js$5=Big_int["big_int_of_int"];
         var $js$6=$js$5(i);
         return $js$4($js$6,bi)}
       else
        if($js$3==2)
         {var i$1=int1;
          var r=match$1[1];
          var $js$7=Ratio["eq_big_int_ratio"];
          var $js$8=Big_int["big_int_of_int"];
          var $js$9=$js$8(i$1);
          return $js$7($js$9,r)}}
    else
     if($js$2==1)
      {var bi$1=match[1];
       var $js$10=match$1;
       if($js$10==0)
        {var i$2=match$1[1];
         var $js$11=Big_int["eq_big_int"];
         var $js$12=Big_int["big_int_of_int"];
         var $js$13=$js$12(i$2);
         return $js$11($js$13,bi$1)}
       else
        if($js$10==1)
         {var bi1=bi$1;
          var bi2=match$1[1];
          var $js$14=Big_int["eq_big_int"];
          return $js$14(bi1,bi2)}
        else
         if($js$10==2)
          {var bi$2=bi$1;
           var r$1=match$1[1];
           var $js$15=Ratio["eq_big_int_ratio"];
           return $js$15(bi$2,r$1)}}
     else
      if($js$2==2)
       {var r$2=match[1];
        var $js$16=match$1;
        if($js$16==0)
         {var i$3=match$1[1];
          var $js$17=Ratio["eq_big_int_ratio"];
          var $js$18=Big_int["big_int_of_int"];
          var $js$19=$js$18(i$3);
          return $js$17($js$19,r$2)}
        else
         if($js$16==1)
          {var r$3=r$2;
           var bi$3=match$1[1];
           var $js$20=Ratio["eq_big_int_ratio"];
           return $js$20(bi$3,r$3)}
         else
          if($js$16==2)
           {var r1=r$2;
            var r2=match$1[1];
            var $js$21=Ratio["eq_ratio"];
            return $js$21(r1,r2)}}};
var =/=eq_num;
var <>/=function(a,b){var $js$2=eq_num(a,b);return !$js$2};
var
 compare_num=
  function(a,b)
   {var match=a;
    var match$1=b;
    var $js$2=match;
    if($js$2==0)
     {var int1=match[1];
      var $js$3=match$1;
      if($js$3==0)
       {var int2=match$1[1];
        var $js$4=Int_misc["compare_int"];
        return $js$4(int1,int2)}
      else
       if($js$3==1)
        {var i=int1;
         var bi=match$1[1];
         var $js$5=Big_int["compare_big_int"];
         var $js$6=Big_int["big_int_of_int"];
         var $js$7=$js$6(i);
         return $js$5($js$7,bi)}
       else
        if($js$3==2)
         {var i$1=int1;
          var r=match$1[1];
          var $js$8=Ratio["compare_big_int_ratio"];
          var $js$9=Big_int["big_int_of_int"];
          var $js$10=$js$9(i$1);
          return $js$8($js$10,r)}}
    else
     if($js$2==1)
      {var bi$1=match[1];
       var $js$11=match$1;
       if($js$11==0)
        {var i$2=match$1[1];
         var $js$12=Big_int["compare_big_int"];
         var $js$13=Big_int["big_int_of_int"];
         var $js$14=$js$13(i$2);
         return $js$12(bi$1,$js$14)}
       else
        if($js$11==1)
         {var bi1=bi$1;
          var bi2=match$1[1];
          var $js$15=Big_int["compare_big_int"];
          return $js$15(bi1,bi2)}
        else
         if($js$11==2)
          {var bi$2=bi$1;
           var r$1=match$1[1];
           var $js$16=Ratio["compare_big_int_ratio"];
           return $js$16(bi$2,r$1)}}
     else
      if($js$2==2)
       {var r$2=match[1];
        var $js$17=match$1;
        if($js$17==0)
         {var i$3=match$1[1];
          var $js$18=Ratio["compare_big_int_ratio"];
          var $js$19=Big_int["big_int_of_int"];
          var $js$20=$js$19(i$3);
          var $js$21=$js$18($js$20,r$2);
          return -$js$21}
        else
         if($js$17==1)
          {var r$3=r$2;
           var bi$3=match$1[1];
           var $js$22=Ratio["compare_big_int_ratio"];
           var $js$23=$js$22(bi$3,r$3);
           return -$js$23}
         else
          if($js$17==2)
           {var r1=r$2;
            var r2=match$1[1];
            var $js$24=Ratio["compare_ratio"];
            return $js$24(r1,r2)}}};
var
 lt_num=
  function(num1,num2){var $js$2=compare_num(num1,num2);return $js$2<0};
var
 le_num=
  function(num1,num2){var $js$2=compare_num(num1,num2);return $js$2<=0};
var
 gt_num=
  function(num1,num2){var $js$2=compare_num(num1,num2);return $js$2>0};
var
 ge_num=
  function(num1,num2){var $js$2=compare_num(num1,num2);return $js$2>=0};
var </=lt_num;
var <=/=le_num;
var >/=gt_num;
var >=/=ge_num;
var
 max_num=
  function(num1,num2)
   {var $js$2=lt_num(num1,num2);if($js$2){return num2}else{return num1}};
var
 min_num=
  function(num1,num2)
   {var $js$2=gt_num(num1,num2);if($js$2){return num2}else{return num1}};
var
 int_of_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];return i}
    else
     if($js$2==1)
      {var bi=param[1];var $js$3=Big_int["int_of_big_int"];return $js$3(bi)}
     else
      if($js$2==2)
       {var r=param[1];var $js$4=Ratio["int_of_ratio"];return $js$4(r)}};
var
 num_of_int=
  function(i)
   {var $js$2=i=Int_misc["monster_int"];
    if($js$2)
     {var $js$3=Big_int["big_int_of_int"];var $js$4=$js$3(i);return [1,$js$4]}
    else
     {return [0,i]}};
var
 nat_of_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];var $js$3=Nat["nat_of_int"];return $js$3(i)}
    else
     if($js$2==1)
      {var bi=param[1];var $js$4=Big_int["nat_of_big_int"];return $js$4(bi)}
     else
      if($js$2==2)
       {var r=param[1];var $js$5=Ratio["nat_of_ratio"];return $js$5(r)}};
var
 num_of_nat=
  function(nat)
   {var $js$2=Nat["is_nat_int"];
    var $js$3=Nat["length_nat"];
    var $js$4=$js$3(nat);
    var $js$5=$js$2(nat,0,$js$4);
    if($js$5)
     {var $js$6="unknown primitive:nth_digit_nat";return [0,$js$6]}
    else
     {var $js$7=Big_int["big_int_of_nat"];
      var $js$8=$js$7(nat);
      return [1,$js$8]}};
var
 big_int_of_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];var $js$3=Big_int["big_int_of_int"];return $js$3(i)}
    else
     if($js$2==1)
      {var bi=param[1];return bi}
     else
      if($js$2==2)
       {var r=param[1];var $js$4=Ratio["big_int_of_ratio"];return $js$4(r)}};
var
 string_of_big_int_for_num=
  function(bi)
   {var $js$2=Arith_flags["approx_printing_flag"][1];
    if($js$2)
     {var $js$3=Big_int["approx_big_int"];
      return $js$3(Arith_flags["floating_precision"][1],bi)}
    else
     {var $js$4=Big_int["string_of_big_int"];return $js$4(bi)}};
var
 string_of_normalized_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];var $js$3=Pervasives["string_of_int"];return $js$3(i)}
    else
     if($js$2==1)
      {var bi=param[1];return string_of_big_int_for_num(bi)}
     else
      if($js$2==2)
       {var r=param[1];var $js$4=Ratio["string_of_ratio"];return $js$4(r)}};
var
 string_of_num=
  function(n)
   {var $js$2=cautious_normalize_num_when_printing(n);
    return string_of_normalized_num($js$2)};
var
 num_of_string=
  function(s)
   {try
     {var flag=Arith_flags["normalize_ratio_flag"][1];
      Arith_flags["normalize_ratio_flag"][1]=1,0;
      var $js$2=Ratio["ratio_of_string"];
      var r=$js$2(s);
      Arith_flags["normalize_ratio_flag"][1]=flag,0;
      var $js$3=Big_int["eq_big_int"];
      var $js$4=Ratio["denominator_ratio"];
      var $js$5=$js$4(r);
      var $js$6=$js$3($js$5,Big_int["unit_big_int"]);
      if($js$6)
       {var $js$7=Ratio["numerator_ratio"];
        var $js$8=$js$7(r);
        return num_of_big_int($js$8)}
      else
       {return [2,r]}}
    catch(exn)
     {var tag=exn[1];
      var $js$9=tag=Failure;
      if($js$9)
       {var $js$10=Pervasives["failwith"];return $js$10("num_of_string")}
      else
       {return "unknown primitive:reraise"}}};
var
 float_of_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];return i}
    else
     if($js$2==1)
      {var bi=param[1];var $js$3=Big_int["float_of_big_int"];return $js$3(bi)}
     else
      if($js$2==2)
       {var r=param[1];var $js$4=Ratio["float_of_ratio"];return $js$4(r)}};
var
 succ_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];
      var $js$3=i=Int_misc["biggest_int"];
      if($js$3)
       {var $js$4=Big_int["succ_big_int"];
        var $js$5=Big_int["big_int_of_int"];
        var $js$6=$js$5(i);
        var $js$7=$js$4($js$6);
        return [1,$js$7]}
      else
       {return [0,1+i]}}
    else
     if($js$2==1)
      {var bi=param[1];
       var $js$8=Big_int["succ_big_int"];
       var $js$9=$js$8(bi);
       return num_of_big_int($js$9)}
     else
      if($js$2==2)
       {var r=param[1];
        var $js$10=Ratio["add_int_ratio"];
        var $js$11=$js$10(1,r);
        return [2,$js$11]}};
var
 pred_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];
      var $js$3=i=Int_misc["monster_int"];
      if($js$3)
       {var $js$4=Big_int["pred_big_int"];
        var $js$5=Big_int["big_int_of_int"];
        var $js$6=$js$5(i);
        var $js$7=$js$4($js$6);
        return [1,$js$7]}
      else
       {return [0,-1+i]}}
    else
     if($js$2==1)
      {var bi=param[1];
       var $js$8=Big_int["pred_big_int"];
       var $js$9=$js$8(bi);
       return num_of_big_int($js$9)}
     else
      if($js$2==2)
       {var r=param[1];
        var $js$10=Ratio["add_int_ratio"];
        var $js$11=$js$10(-1,r);
        return [2,$js$11]}};
var
 abs_num=
  function(param)
   {var $js$2=param;
    if($js$2==0)
     {var i=param[1];
      var $js$3=i=Int_misc["monster_int"];
      if($js$3)
       {var $js$4=Big_int["minus_big_int"];
        var $js$5=Big_int["big_int_of_int"];
        var $js$6=$js$5(i);
        var $js$7=$js$4($js$6);
        return [1,$js$7]}
      else
       {var $js$8=Pervasives["abs"];var $js$9=$js$8(i);return [0,$js$9]}}
    else
     if($js$2==1)
      {var bi=param[1];
       var $js$10=Big_int["abs_big_int"];
       var $js$11=$js$10(bi);
       return [1,$js$11]}
     else
      if($js$2==2)
       {var r=param[1];
        var $js$12=Ratio["abs_ratio"];
        var $js$13=$js$12(r);
        return [2,$js$13]}};
var
 approx_num_fix=
  function(n,num)
   {var $js$2=Ratio["approx_ratio_fix"];
    var $js$3=ratio_of_num(num);
    return $js$2(n,$js$3)};
var
 approx_num_exp=
  function(n,num)
   {var $js$2=Ratio["approx_ratio_exp"];
    var $js$3=ratio_of_num(num);
    return $js$2(n,$js$3)};
var incr_num=function(r){var $js$2=succ_num(r[1]);return r[1]=$js$2,0};
var decr_num=function(r){var $js$2=pred_num(r[1]);return r[1]=$js$2,0};
module["exports"]=
{"+/":+/,
 "add_num":add_num,
 "minus_num":minus_num,
 "-/":-/,
 "sub_num":sub_num,
 "*/":*/,
 "mult_num":mult_num,
 "square_num":square_num,
 "//"://,
 "div_num":div_num,
 "quo_num":quo_num,
 "mod_num":mod_num,
 "**/":**/,
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
 "=/":=/,
 "</":</,
 ">/":>/,
 "<=/":<=/,
 ">=/":>=/,
 "<>/":<>/,
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
