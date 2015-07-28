var String=require("String");
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
   {var $js=Nat["is_zero_nat"];
    var $js$1=Nat["length_nat"];
    var $js$2=$js$1(nat);
    var $js$3="unknown primitive:num_digits_nat";
    var $js$4=$js(nat,0,$js$3);
    var $js$5=(sign=0)&&$js$4;
    var $js$6=(sign=-1)||$js$5;
    var $js$7=(sign=1)||$js$6;
    if($js$7)
     {return [0,sign,nat]}
    else
     {var $js$8=Pervasives["invalid_arg"];return $js$8("create_big_int")}};
var sign_big_int=function(bi){return bi[1]};
var $js=Nat["make_nat"];
var $js$1=$js(1);
var zero_big_int=[0,0,$js$1];
var $js$2=Nat["nat_of_int"];
var $js$3=$js$2(1);
var unit_big_int=[0,1,$js$3];
var
 num_digits_big_int=
  function(bi)
   {var $js$4=Nat["length_nat"];
    var $js$5=$js$4(bi[2]);
    return "unknown primitive:num_digits_nat"};
var
 minus_big_int=
  function(bi)
   {var $js$4=Nat["copy_nat"];
    var $js$5=num_digits_big_int(bi);
    var $js$6=$js$4(bi[2],0,$js$5);
    return [0,-bi[1],$js$6]};
var
 abs_big_int=
  function(bi)
   {var $js$4=bi[1]=0;
    if($js$4){var $js$5=0}else{var $js$5=1}
    var $js$6=Nat["copy_nat"];
    var $js$7=num_digits_big_int(bi);
    var $js$8=$js$6(bi[2],0,$js$7);
    return [0,$js$5,$js$8]};
var
 compare_big_int=
  function(bi1,bi2)
   {var $js$4=(bi1[1]=0)&&(bi2[1]=0);
    if($js$4)
     {return 0}
    else
     {var $js$5=bi1[1]<bi2[1];
      if($js$5)
       {return -1}
      else
       {var $js$6=bi1[1]>bi2[1];
        if($js$6)
         {return 1}
        else
         {var $js$7=bi1[1]=1;
          if($js$7)
           {var $js$8=num_digits_big_int(bi1);
            var $js$9=num_digits_big_int(bi2);
            return "unknown primitive:compare_nat"}
          else
           {var $js$10=num_digits_big_int(bi2);
            var $js$11=num_digits_big_int(bi1);
            return "unknown primitive:compare_nat"}}}}};
var
 eq_big_int=
  function(bi1,bi2){var $js$4=compare_big_int(bi1,bi2);return $js$4=0};
var
 le_big_int=
  function(bi1,bi2){var $js$4=compare_big_int(bi1,bi2);return $js$4<=0};
var
 ge_big_int=
  function(bi1,bi2){var $js$4=compare_big_int(bi1,bi2);return $js$4>=0};
var
 lt_big_int=
  function(bi1,bi2){var $js$4=compare_big_int(bi1,bi2);return $js$4<0};
var
 gt_big_int=
  function(bi1,bi2){var $js$4=compare_big_int(bi1,bi2);return $js$4>0};
var
 max_big_int=
  function(bi1,bi2)
   {var $js$4=lt_big_int(bi1,bi2);if($js$4){return bi2}else{return bi1}};
var
 min_big_int=
  function(bi1,bi2)
   {var $js$4=gt_big_int(bi1,bi2);if($js$4){return bi2}else{return bi1}};
var
 pred_big_int=
  function(bi)
   {var match=bi[1];
    var $js$4=match!=0;
    if($js$4)
     {var $js$5=match!=1;
      if($js$5)
       {var size_bi=num_digits_big_int(bi);
        var size_res=1+size_bi;
        var copy_bi="unknown primitive:create_nat";
        "unknown primitive:blit_nat";
        "unknown primitive:set_digit_nat";
        var $js$6="unknown primitive:incr_nat";
        0;
        return [0,-1,copy_bi]}
      else
       {var size_bi$1=num_digits_big_int(bi);
        var $js$7=Nat["copy_nat"];
        var copy_bi$1=$js$7(bi[2],0,size_bi$1);
        var $js$8="unknown primitive:decr_nat";
        0;
        var $js$9=Nat["is_zero_nat"];
        var $js$10=$js$9(copy_bi$1,0,size_bi$1);
        if($js$10){var $js$11=0}else{var $js$11=1}
        return [0,$js$11,copy_bi$1]}}
    else
     {var $js$12=Nat["nat_of_int"];var $js$13=$js$12(1);return [0,-1,$js$13]}};
var
 succ_big_int=
  function(bi)
   {var match=bi[1];
    var $js$4=match!=-1;
    if($js$4)
     {var $js$5=match!=0;
      if($js$5)
       {var size_bi=num_digits_big_int(bi);
        var size_res=1+size_bi;
        var copy_bi="unknown primitive:create_nat";
        "unknown primitive:blit_nat";
        "unknown primitive:set_digit_nat";
        var $js$6="unknown primitive:incr_nat";
        0;
        return [0,1,copy_bi]}
      else
       {var $js$7=Nat["nat_of_int"];var $js$8=$js$7(1);return [0,1,$js$8]}}
    else
     {var size_bi$1=num_digits_big_int(bi);
      var $js$9=Nat["copy_nat"];
      var copy_bi$1=$js$9(bi[2],0,size_bi$1);
      var $js$10="unknown primitive:decr_nat";
      0;
      var $js$11=Nat["is_zero_nat"];
      var $js$12=$js$11(copy_bi$1,0,size_bi$1);
      if($js$12){var $js$13=0}else{var $js$13=-1}
      return [0,$js$13,copy_bi$1]}};
var
 add_big_int=
  function(bi1,bi2)
   {var size_bi1=num_digits_big_int(bi1);
    var size_bi2=num_digits_big_int(bi2);
    var $js$4=bi1[1]=bi2[1];
    if($js$4)
     {var match="unknown primitive:compare_nat";
      var $js$5=match!=-1;
      if($js$5)
       {var res="unknown primitive:create_nat";
        "unknown primitive:blit_nat";
        "unknown primitive:set_digit_nat";
        var $js$6="unknown primitive:add_nat";
        0;
        var $js$7=res}
      else
       {var res$1="unknown primitive:create_nat";
        "unknown primitive:blit_nat";
        "unknown primitive:set_digit_nat";
        var $js$8="unknown primitive:add_nat";
        0;
        var $js$7=res$1}
      return [0,bi1[1],$js$7]}
    else
     {var match$1="unknown primitive:compare_nat";
      var $js$9=match$1!=0;
      if($js$9)
       {var $js$10=match$1!=1;
        if($js$10)
         {var $js$11=Nat["copy_nat"];
          var res$2=$js$11(bi2[2],0,size_bi2);
          var $js$12="unknown primitive:sub_nat";
          0;
          var $js$13=res$2;
          return [0,bi2[1],$js$13]}
        else
         {var $js$14=Nat["copy_nat"];
          var res$3=$js$14(bi1[2],0,size_bi1);
          var $js$15="unknown primitive:sub_nat";
          0;
          var $js$16=res$3;
          return [0,bi1[1],$js$16]}}
      else
       {return zero_big_int}}};
var
 big_int_of_int=
  function(i)
   {var $js$4=Int_misc["sign_int"];
    var $js$5=$js$4(i);
    var res="unknown primitive:create_nat";
    var $js$6=i=Int_misc["monster_int"];
    if($js$6)
     {"unknown primitive:set_digit_nat";
      var $js$7="unknown primitive:incr_nat";
      0}
    else
     {var $js$8=Pervasives["abs"];
      var $js$9=$js$8(i);
      "unknown primitive:set_digit_nat"}
    var $js$10=res;
    return [0,$js$5,$js$10]};
var
 add_int_big_int=
  function(i,bi){var $js$4=big_int_of_int(i);return add_big_int($js$4,bi)};
var
 sub_big_int=
  function(bi1,bi2)
   {var $js$4=minus_big_int(bi2);return add_big_int(bi1,$js$4)};
var
 mult_int_big_int=
  function(i,bi)
   {var size_bi=num_digits_big_int(bi);
    var size_res=1+size_bi;
    var $js$4=i=Int_misc["monster_int"];
    if($js$4)
     {var res="unknown primitive:create_nat";
      "unknown primitive:blit_nat";
      "unknown primitive:set_digit_nat";
      var $js$5=Nat["nat_of_int"];
      var $js$6=$js$5(Int_misc["biggest_int"]);
      var $js$7="unknown primitive:mult_digit_nat";
      0;
      var $js$8=sign_big_int(bi);
      var $js$9=-$js$8;
      return [0,$js$9,res]}
    else
     {var $js$10=Nat["make_nat"];
      var res$1=$js$10(size_res);
      var $js$11=Nat["nat_of_int"];
      var $js$12=Pervasives["abs"];
      var $js$13=$js$12(i);
      var $js$14=$js$11($js$13);
      var $js$15="unknown primitive:mult_digit_nat";
      0;
      var $js$16=Int_misc["sign_int"];
      var $js$17=$js$16(i);
      var $js$18=sign_big_int(bi);
      var $js$19=$js$17*$js$18;
      return [0,$js$19,res$1]}};
var
 mult_big_int=
  function(bi1,bi2)
   {var size_bi1=num_digits_big_int(bi1);
    var size_bi2=num_digits_big_int(bi2);
    var size_res=size_bi1+size_bi2;
    var $js$4=Nat["make_nat"];
    var res=$js$4(size_res);
    var $js$5=size_bi2>size_bi1;
    if($js$5)
     {var $js$6="unknown primitive:mult_nat";0;var $js$7=res}
    else
     {var $js$8="unknown primitive:mult_nat";0;var $js$7=res}
    return [0,bi1[1]*bi2[1],$js$7]};
var
 quomod_big_int=
  function(bi1,bi2)
   {var $js$4=bi2[1]=0;
    if($js$4)
     {var $js$5=Division_by_zero;throw $js$5}
    else
     {var size_bi1=num_digits_big_int(bi1);
      var size_bi2=num_digits_big_int(bi2);
      var match="unknown primitive:compare_nat";
      var $js$6=match!=-1;
      if($js$6)
       {var $js$7=match!=0;
        if($js$7)
         {var bi1_negatif=bi1[1]=-1;
          var $js$8=bi1_negatif;
          if($js$8)
           {var $js$9=Pervasives["max"];
            var $js$10=$js$9(1+(size_bi1-size_bi2),1);
            var size_q=1+$js$10}
          else
           {var $js$11=Pervasives["max"];
            var size_q=$js$11(1+(size_bi1-size_bi2),1)}
          var $js$12=Pervasives["max"];
          var $js$13=$js$12(size_bi1,size_bi2);
          var size_r=1+$js$13;
          var q="unknown primitive:create_nat";
          var r="unknown primitive:create_nat";
          "unknown primitive:blit_nat";
          "unknown primitive:set_to_zero_nat";
          "unknown primitive:div_nat";
          "unknown primitive:blit_nat";
          var $js$14=Nat["is_zero_nat"];
          var $js$15=$js$14(r,0,size_bi2);
          var not_null_mod=!$js$15;
          var $js$16=bi1_negatif&&not_null_mod;
          if($js$16)
           {var $js$17=Nat["copy_nat"];
            var new_r=$js$17(bi2[2],0,size_bi2);
            "unknown primitive:set_digit_nat";
            var $js$18="unknown primitive:incr_nat";
            0;
            var $js$19=q;
            var $js$20=[0,-bi2[1],$js$19];
            var $js$21="unknown primitive:sub_nat";
            0;
            var $js$22=new_r;
            var $js$23=[0,1,$js$22];
            return [0,$js$20,$js$23]}
          else
           {var $js$24=bi1_negatif;
            if($js$24){"unknown primitive:set_digit_nat"}else{}
            var $js$25=Nat["is_zero_nat"];
            var $js$26=$js$25(q,0,size_q);
            if($js$26){var $js$27=0}else{var $js$27=bi1[1]*bi2[1]}
            var $js$28=[0,$js$27,q];
            var $js$29=not_null_mod;
            if($js$29){var $js$30=1}else{var $js$30=0}
            var $js$31=Nat["copy_nat"];
            var $js$32=$js$31(r,0,size_bi2);
            var $js$33=[0,$js$30,$js$32];
            return [0,$js$28,$js$33]}}
        else
         {var $js$34=big_int_of_int(bi1[1]*bi2[1]);
          return [0,$js$34,zero_big_int]}}
      else
       {var $js$35=bi1[1]>=0;
        if($js$35)
         {var $js$36=big_int_of_int(0);return [0,$js$36,bi1]}
        else
         {var $js$37=bi2[1]>=0;
          if($js$37)
           {var $js$38=big_int_of_int(-1);
            var $js$39=add_big_int(bi2,bi1);
            return [0,$js$38,$js$39]}
          else
           {var $js$40=big_int_of_int(1);
            var $js$41=sub_big_int(bi1,bi2);
            return [0,$js$40,$js$41]}}}}};
var
 div_big_int=
  function(bi1,bi2){var $js$4=quomod_big_int(bi1,bi2);return $js$4[1]};
var
 mod_big_int=
  function(bi1,bi2){var $js$4=quomod_big_int(bi1,bi2);return $js$4[2]};
var
 gcd_big_int=
  function(bi1,bi2)
   {var size_bi1=num_digits_big_int(bi1);
    var size_bi2=num_digits_big_int(bi2);
    var $js$4=Nat["is_zero_nat"];
    var $js$5=$js$4(bi1[2],0,size_bi1);
    if($js$5)
     {return abs_big_int(bi2)}
    else
     {var $js$6=Nat["is_zero_nat"];
      var $js$7=$js$6(bi2[2],0,size_bi2);
      if($js$7)
       {return [0,1,bi1[2]]}
      else
       {var match="unknown primitive:compare_nat";
        var $js$8=match!=0;
        if($js$8)
         {var $js$9=match!=1;
          if($js$9)
           {var $js$10=Nat["copy_nat"];
            var res=$js$10(bi2[2],0,size_bi2);
            var $js$11=Nat["gcd_nat"];
            var len=$js$11(res,0,size_bi2,bi1[2],0,size_bi1);
            var $js$12=Nat["copy_nat"];
            var $js$13=$js$12(res,0,len)}
          else
           {var $js$14=Nat["copy_nat"];
            var res$1=$js$14(bi1[2],0,size_bi1);
            var $js$15=Nat["gcd_nat"];
            var len$1=$js$15(res$1,0,size_bi1,bi2[2],0,size_bi2);
            var $js$16=Nat["copy_nat"];
            var $js$13=$js$16(res$1,0,len$1)}}
        else
         {var $js$13=bi1[2]}
        return [0,1,$js$13]}}};
var monster_big_int=big_int_of_int(Int_misc["monster_int"]);
var monster_nat=monster_big_int[2];
var
 is_int_big_int=
  function(bi)
   {var $js$4=num_digits_big_int(bi);
    var $js$5=$js$4=1;
    var match="unknown primitive:compare_nat";
    var $js$6=match!=-1;
    if($js$6)
     {var $js$7=match!=0;if($js$7){var $js$8=0}else{var $js$8=bi[1]=-1}}
    else
     {var $js$8=1}
    return $js$5&&$js$8};
var
 int_of_big_int=
  function(bi)
   {try
     {var $js$4=Nat["int_of_nat"];
      var n=$js$4(bi[2]);
      var $js$5=bi[1]=-1;
      if($js$5){return -n}else{return n}}
    catch(exn)
     {var tag=exn[1];
      var $js$6=tag=Failure;
      if($js$6)
       {var $js$7=eq_big_int(bi,monster_big_int);
        if($js$7)
         {return Int_misc["monster_int"]}
        else
         {var $js$8=Pervasives["failwith"];return $js$8("int_of_big_int")}}
      else
       {return "unknown primitive:reraise"}}};
var
 big_int_of_nativeint=
  function(i)
   {var $js$4=i=0;
    if($js$4)
     {return zero_big_int}
    else
     {var $js$5=i>0;
      if($js$5)
       {var res="unknown primitive:create_nat";
        "unknown primitive:set_digit_nat_native";
        return [0,1,res]}
      else
       {var res$1="unknown primitive:create_nat";
        "unknown primitive:set_digit_nat_native";
        return [0,-1,res$1]}}};
var
 nativeint_of_big_int=
  function(bi)
   {var $js$4=num_digits_big_int(bi);
    var $js$5=$js$4>1;
    if($js$5)
     {var $js$6=Pervasives["failwith"];$js$6("nativeint_of_big_int")}
    else
     {}
    var i="unknown primitive:nth_digit_nat_native";
    var $js$7=bi[1]>=0;
    if($js$7)
     {var $js$8=i>=0;
      if($js$8)
       {return i}
      else
       {var $js$9=Pervasives["failwith"];return $js$9("nativeint_of_big_int")}}
    else
     {var $js$10=i>=0||(i=Nativeint["min_int"]);
      if($js$10)
       {return -i}
      else
       {var $js$11=Pervasives["failwith"];
        return $js$11("nativeint_of_big_int")}}};
var
 big_int_of_int32=
  function(i)
   {return big_int_of_nativeint("unknown primitive:nativeint_of_int32")};
var
 int32_of_big_int=
  function(bi)
   {var i=nativeint_of_big_int(bi);
    var $js$4=i<=2147483647&&i>=-2147483648;
    if($js$4)
     {return "unknown primitive:int32_of_nativeint"}
    else
     {var $js$5=Pervasives["failwith"];return $js$5("int32_of_big_int")}};
var
 big_int_of_int64=
  function(i)
   {var $js$4=Sys["word_size"]=64;
    if($js$4)
     {return big_int_of_nativeint("unknown primitive:nativeint_of_int64")}
    else
     {var $js$5=i=0;
      if($js$5)
       {var match=[0,0,0]}
      else
       {var $js$6=i>0;if($js$6){var match=[0,1,i]}else{var match=[0,-1,-i]}}
      var absi=match[2];
      var sg=match[1];
      var res="unknown primitive:create_nat";
      "unknown primitive:set_digit_nat_native";
      "unknown primitive:set_digit_nat_native";
      return [0,sg,res]}};
var
 int64_of_big_int=
  function(bi)
   {var $js$4=Sys["word_size"]=64;
    if($js$4)
     {var $js$5=nativeint_of_big_int(bi);
      return "unknown primitive:int64_of_nativeint"}
    else
     {var match=num_digits_big_int(bi);
      var $js$6=match!=1;
      if($js$6)
       {var $js$7=match!=2;
        if($js$7)
         {var $js$8=Pervasives["failwith"];var i=$js$8("int64_of_big_int")}
        else
         {var $js$9="unknown primitive:nth_digit_nat_native";
          var $js$10="unknown primitive:int64_of_nativeint";
          var $js$11=$js$10&4294967295;
          var $js$12="unknown primitive:nth_digit_nat_native";
          var $js$13="unknown primitive:int64_of_nativeint";
          var $js$14=$js$13<<32;
          var i=$js$11|$js$14}}
      else
       {var $js$15="unknown primitive:nth_digit_nat_native";
        var $js$16="unknown primitive:int64_of_nativeint";
        var i=$js$16&4294967295}
      var $js$17=bi[1]>=0;
      if($js$17)
       {var $js$18=i>=0;
        if($js$18)
         {return i}
        else
         {var $js$19=Pervasives["failwith"];return $js$19("int64_of_big_int")}}
      else
       {var $js$20=i>=0||(i=Int64["min_int"]);
        if($js$20)
         {return -i}
        else
         {var $js$21=Pervasives["failwith"];return $js$21("int64_of_big_int")}}}};
var
 nat_of_big_int=
  function(bi)
   {var $js$4=bi[1]=-1;
    if($js$4)
     {var $js$5=Pervasives["failwith"];return $js$5("nat_of_big_int")}
    else
     {var $js$6=Nat["copy_nat"];
      var $js$7=num_digits_big_int(bi);
      return $js$6(bi[2],0,$js$7)}};
var
 sys_big_int_of_nat=
  function(nat,off,len)
   {var length="unknown primitive:num_digits_nat";
    var $js$4=Nat["is_zero_nat"];
    var $js$5=$js$4(nat,off,length);
    if($js$5){var $js$6=0}else{var $js$6=1}
    var $js$7=Nat["copy_nat"];
    var $js$8=$js$7(nat,off,length);
    return [0,$js$6,$js$8]};
var
 big_int_of_nat=
  function(nat)
   {var $js$4=Nat["length_nat"];
    var $js$5=$js$4(nat);
    return sys_big_int_of_nat(nat,0,$js$5)};
var
 string_of_big_int=
  function(bi)
   {var $js$4=bi[1]=-1;
    if($js$4)
     {var $js$5=Pervasives["^"];
      var $js$6=Nat["string_of_nat"];
      var $js$7=$js$6(bi[2]);
      return $js$5("-",$js$7)}
    else
     {var $js$8=Nat["string_of_nat"];return $js$8(bi[2])}};
var
 sys_big_int_of_string_aux=
  function(s,ofs,len,sgn,base)
   {var $js$4=len<1;
    if($js$4)
     {var $js$5=Pervasives["failwith"];$js$5("sys_big_int_of_string")}
    else
     {}
    var $js$6=Nat["sys_nat_of_string"];
    var n=$js$6(base,s,ofs,len);
    var $js$7=Nat["is_zero_nat"];
    var $js$8=Nat["length_nat"];
    var $js$9=$js$8(n);
    var $js$10=$js$7(n,0,$js$9);
    if($js$10){return zero_big_int}else{return [0,sgn,n]}};
var
 sys_big_int_of_string_base=
  function(s,ofs,len,sgn)
   {var $js$4=len<1;
    if($js$4)
     {var $js$5=Pervasives["failwith"];$js$5("sys_big_int_of_string")}
    else
     {}
    var $js$6=len<2;
    if($js$6)
     {return sys_big_int_of_string_aux(s,ofs,len,sgn,10)}
    else
     {var match=s[ofs];
      var match$1=s[ofs+1];
      var match$2=match;
      var match$3=match$1;
      var $js$7=match$2!=48;
      if($js$7)
       {var exit=107}
      else
       {var $js$8=match$3>=89;
        if($js$8)
         {var $js$9=match$3!=98;
          if($js$9)
           {var $js$10=match$3!=111;
            if($js$10)
             {var $js$11=match$3!=120;
              if($js$11){var exit=107}else{var exit=104}}
            else
             {var exit=105}}
          else
           {var exit=106}}
        else
         {var $js$12=match$3!=66;
          if($js$12)
           {var $js$13=match$3!=79;
            if($js$13)
             {var $js$14=match$3>=88;
              if($js$14){var exit=104}else{var exit=107}}
            else
             {var exit=105}}
          else
           {var exit=106}}}
      switch(exit)
       {case 107:return sys_big_int_of_string_aux(s,ofs,len,sgn,10);
        case 104:return sys_big_int_of_string_aux(s,ofs+2,len-2,sgn,16);
        case 105:return sys_big_int_of_string_aux(s,ofs+2,len-2,sgn,8);
        case 106:return sys_big_int_of_string_aux(s,ofs+2,len-2,sgn,2)
        }}};
var
 sys_big_int_of_string=
  function(s,ofs,len)
   {var $js$4=len<1;
    if($js$4)
     {var $js$5=Pervasives["failwith"];$js$5("sys_big_int_of_string")}
    else
     {}
    var match=s[ofs];
    var switcher=-43+match;
    var $js$6=2<switcher>>>0;
    if($js$6)
     {var exit=102}
    else
     {var $js$7=switcher;
      var $js$8=$js$7[0];
      if($js$8==0)
       {return sys_big_int_of_string_base(s,ofs+1,len-1,1)}
      else
       if($js$8==1)
        {var exit=102}
       else
        if($js$8==2){return sys_big_int_of_string_base(s,ofs+1,len-1,-1)}}
    switch(exit){case 102:return sys_big_int_of_string_base(s,ofs,len,1)}};
var
 big_int_of_string=
  function(s){return sys_big_int_of_string(s,0,s["length"])};
var
 power_base_nat=
  function(base,nat,off,len)
   {var $js$4=base=0;
    if($js$4)
     {var $js$5=Nat["nat_of_int"];return $js$5(0)}
    else
     {var $js$6=Nat["is_zero_nat"];
      var $js$7=$js$6(nat,off,len);
      var $js$8=$js$7||(base=1);
      if($js$8)
       {var $js$9=Nat["nat_of_int"];return $js$9(1)}
      else
       {var $js$10=Nat["make_nat"];
        var power_base=$js$10(1+Nat["length_of_digit"]);
        var $js$11=Nat["make_power_base"];
        var match=$js$11(base,power_base);
        var pmax=match[1];
        var $js$12=sys_big_int_of_nat(nat,off,len);
        var $js$13=big_int_of_int(1+pmax);
        var match$1=quomod_big_int($js$12,$js$13);
        var y=match$1[2];
        var x=match$1[1];
        var $js$14=int_of_big_int(x);
        var $js$15=int_of_big_int(y);
        var match$2=[0,$js$14,$js$15];
        var rem=match$2[2];
        var n=match$2[1];
        var $js$16=n=0;
        if($js$16)
         {var $js$17=Nat["copy_nat"];return $js$17(power_base,-1+rem,1)}
        else
         {var $js$18=Nat["make_nat"];
          var res=$js$18(n);
          var $js$19=Nat["make_nat"];
          var res2=$js$19(1+n);
          var $js$20=Int_misc["num_bits_int"];
          var $js$21=$js$20(n);
          var l=$js$21-2;
          "unknown primitive:blit_nat";
          var $js$22=l;
          var $js$23=0;
          for(var i=$js$22;i>=$js$23;i--)
           {var len$1="unknown primitive:num_digits_nat";
            var $js$24=Pervasives["min"];
            var len2=$js$24(n,2*len$1);
            var succ_len2=1+len2;
            var $js$25="unknown primitive:square_nat";
            0;
            var $js$26=(n&1<<i)>0;
            if($js$26)
             {"unknown primitive:set_to_zero_nat";
              var $js$27="unknown primitive:mult_digit_nat";
              0}
            else
             {"unknown primitive:blit_nat"}
            "unknown primitive:set_to_zero_nat"}
          var $js$28=rem>0;
          if($js$28)
           {var $js$29="unknown primitive:mult_digit_nat";0;return res2}
          else
           {return res}}}}};
var
 power_int_positive_int=
  function(i,n)
   {var $js$4=Int_misc["sign_int"];
    var match=$js$4(n);
    var $js$5=match!=-1;
    if($js$5)
     {var $js$6=match!=0;
      if($js$6)
       {var $js$7=Nat["power_base_int"];
        var $js$8=Pervasives["abs"];
        var $js$9=$js$8(i);
        var nat=$js$7($js$9,n);
        var $js$10=i>=0;
        if($js$10)
         {var $js$11=Int_misc["sign_int"];var $js$12=$js$11(i)}
        else
         {var $js$13=(n&1)=0;if($js$13){var $js$12=1}else{var $js$12=-1}}
        return [0,$js$12,nat]}
      else
       {return unit_big_int}}
    else
     {var $js$14=Pervasives["invalid_arg"];
      return $js$14("power_int_positive_int")}};
var
 power_big_int_positive_int=
  function(bi,n)
   {var $js$4=Int_misc["sign_int"];
    var match=$js$4(n);
    var $js$5=match!=-1;
    if($js$5)
     {var $js$6=match!=0;
      if($js$6)
       {var bi_len=num_digits_big_int(bi);
        var res_len=bi_len*n;
        var $js$7=Nat["make_nat"];
        var res=$js$7(res_len);
        var $js$8=Nat["make_nat"];
        var res2=$js$8(res_len);
        var $js$9=Int_misc["num_bits_int"];
        var $js$10=$js$9(n);
        var l=$js$10-2;
        "unknown primitive:blit_nat";
        var $js$11=l;
        var $js$12=0;
        for(var i=$js$11;i>=$js$12;i--)
         {var len="unknown primitive:num_digits_nat";
          var $js$13=Pervasives["min"];
          var len2=$js$13(res_len,2*len);
          "unknown primitive:set_to_zero_nat";
          var $js$14="unknown primitive:square_nat";
          0;
          var $js$15=(n&1<<i)>0;
          if($js$15)
           {var $js$16=Pervasives["min"];
            var lenp=$js$16(res_len,len2+bi_len);
            "unknown primitive:set_to_zero_nat";
            var $js$17="unknown primitive:mult_nat";
            0}
          else
           {"unknown primitive:blit_nat"}}
        var $js$18=bi[1]>=0;
        if($js$18)
         {var $js$19=bi[1]}
        else
         {var $js$20=(n&1)=0;if($js$20){var $js$19=1}else{var $js$19=-1}}
        return [0,$js$19,res]}
      else
       {return unit_big_int}}
    else
     {var $js$21=Pervasives["invalid_arg"];
      return $js$21("power_big_int_positive_int")}};
var
 power_int_positive_big_int=
  function(i,bi)
   {var match=sign_big_int(bi);
    var $js$4=match!=-1;
    if($js$4)
     {var $js$5=match!=0;
      if($js$5)
       {var $js$6=Pervasives["abs"];
        var $js$7=$js$6(i);
        var $js$8=num_digits_big_int(bi);
        var nat=power_base_nat($js$7,bi[2],0,$js$8);
        var $js$9=i>=0;
        if($js$9)
         {var $js$10=Int_misc["sign_int"];var $js$11=$js$10(i)}
        else
         {var $js$12="unknown primitive:is_digit_odd";
          if($js$12){var $js$11=-1}else{var $js$11=1}}
        return [0,$js$11,nat]}
      else
       {return unit_big_int}}
    else
     {var $js$13=Pervasives["invalid_arg"];
      return $js$13("power_int_positive_big_int")}};
var
 power_big_int_positive_big_int=
  function(bi1,bi2)
   {var match=sign_big_int(bi2);
    var $js$4=match!=-1;
    if($js$4)
     {var $js$5=match!=0;
      if($js$5)
       {try
         {var $js$6=int_of_big_int(bi2);
          return power_big_int_positive_int(bi1,$js$6)}
        catch(exn)
         {var tag=exn[1];
          var $js$7=tag=Failure;
          if($js$7)
           {try
             {var $js$8=int_of_big_int(bi1);
              return power_int_positive_big_int($js$8,bi2)}
            catch(exn$1)
             {var tag$1=exn$1[1];
              var $js$9=tag$1=Failure;
              if($js$9)
               {var $js$10=Out_of_memory;throw $js$10}
              else
               {return "unknown primitive:reraise"}}}
          else
           {return "unknown primitive:reraise"}}}
      else
       {return unit_big_int}}
    else
     {var $js$11=Pervasives["invalid_arg"];
      return $js$11("power_big_int_positive_big_int")}};
var
 base_power_big_int=
  function(base,n,bi)
   {var $js$4=Int_misc["sign_int"];
    var match=$js$4(n);
    var $js$5=match!=-1;
    if($js$5)
     {var $js$6=match!=0;
      if($js$6)
       {var $js$7=Nat["power_base_int"];
        var nat=$js$7(base,n);
        var $js$8=Nat["length_nat"];
        var $js$9=$js$8(nat);
        var len_nat="unknown primitive:num_digits_nat";
        var len_bi=num_digits_big_int(bi);
        var new_len=len_bi+len_nat;
        var $js$10=Nat["make_nat"];
        var res=$js$10(new_len);
        var $js$11=len_bi>len_nat;
        if($js$11)
         {var $js$12="unknown primitive:mult_nat"}
        else
         {var $js$12="unknown primitive:mult_nat"}
        0;
        var $js$13=Nat["is_zero_nat"];
        var $js$14=$js$13(res,0,new_len);
        if($js$14){return zero_big_int}else{return create_big_int(bi[1],res)}}
      else
       {return bi}}
    else
     {var $js$15=Nat["power_base_int"];
      var nat$1=$js$15(base,-n);
      var $js$16=Nat["length_nat"];
      var $js$17=$js$16(nat$1);
      var len_nat$1="unknown primitive:num_digits_nat";
      var len_bi$1=num_digits_big_int(bi);
      var $js$18=len_bi$1<len_nat$1;
      if($js$18)
       {var $js$19=Pervasives["invalid_arg"];
        return $js$19("base_power_big_int")}
      else
       {var $js$20="unknown primitive:compare_digits_nat";
        var $js$21=$js$20=-1;
        var $js$22=(len_bi$1=len_nat$1)&&$js$21;
        if($js$22)
         {var $js$23=Pervasives["invalid_arg"];
          return $js$23("base_power_big_int")}
        else
         {var copy="unknown primitive:create_nat";
          "unknown primitive:blit_nat";
          "unknown primitive:set_digit_nat";
          "unknown primitive:div_nat";
          var $js$24=Nat["is_zero_nat"];
          var $js$25=$js$24(copy,0,len_nat$1);
          var $js$26=!$js$25;
          if($js$26)
           {var $js$27=Pervasives["invalid_arg"];
            return $js$27("base_power_big_int")}
          else
           {var $js$28=Nat["copy_nat"];
            var $js$29=$js$28(copy,len_nat$1,1);
            return [0,bi[1],$js$29]}}}}};
var
 float_of_big_int=
  function(bi)
   {var $js$4=string_of_big_int(bi);
    return "unknown primitive:caml_float_of_string"};
var
 sqrt_big_int=
  function(bi)
   {var match=bi[1];
    var $js$4=match!=-1;
    if($js$4)
     {var $js$5=match!=0;
      if($js$5)
       {var $js$6=Nat["sqrt_nat"];
        var $js$7=num_digits_big_int(bi);
        var $js$8=$js$6(bi[2],0,$js$7);
        return [0,1,$js$8]}
      else
       {return zero_big_int}}
    else
     {var $js$9=Pervasives["invalid_arg"];return $js$9("sqrt_big_int")}};
var
 square_big_int=
  function(bi)
   {var $js$4=bi[1]=0;
    if($js$4)
     {return zero_big_int}
    else
     {var len_bi=num_digits_big_int(bi);
      var len_res=2*len_bi;
      var $js$5=Nat["make_nat"];
      var res=$js$5(len_res);
      var $js$6="unknown primitive:square_nat";
      0;
      return [0,1,res]}};
var
 round_futur_last_digit=
  function(s,off_set,length)
   {var l=-1+(length+off_set);
    var $js$4=s[l];
    var $js$5=$js$4;
    var $js$6=$js$5>=53;
    if($js$6)
     {var
       round_rec=
        function(l$1)
         {var $js$7=l$1<off_set;
          if($js$7)
           {return 1}
          else
           {var current_char=s[l$1];
            var $js$8=current_char=57;
            if($js$8)
             {s[l$1]=48,0;return round_rec(-1+l$1)}
            else
             {var $js$9=Char["chr"];
              var $js$10=$js$9(1+current_char);
              s[l$1]=$js$10,0;
              return 0}}};
      return round_rec(-1+l)}
    else
     {return 0}};
var
 approx_big_int=
  function(prec,bi)
   {var len_bi=num_digits_big_int(bi);
    var $js$4=Pervasives["max"];
    var $js$5=big_int_of_int(-1+len_bi);
    var $js$6=big_int_of_string("963295986");
    var $js$7=mult_big_int($js$5,$js$6);
    var $js$8=big_int_of_string("100000000");
    var $js$9=div_big_int($js$7,$js$8);
    var $js$10=add_int_big_int(-prec,$js$9);
    var $js$11=int_of_big_int($js$10);
    var n=$js$4(0,$js$11);
    var $js$12=Bytes["unsafe_of_string"];
    var $js$13=power_int_positive_int(10,n);
    var $js$14=div_big_int(bi,$js$13);
    var $js$15=string_of_big_int($js$14);
    var s=$js$12($js$15);
    var $js$16=s[0];
    var $js$17=$js$16=45;
    if($js$17){var match=[0,"-",1,1+prec]}else{var match=[0,"",0,prec]}
    var off=match[2];
    var sign=match[1];
    var $js$18=round_futur_last_digit(s,off,1+prec);
    if($js$18)
     {var $js$19=Pervasives["^"];
      var $js$20=Pervasives["^"];
      var $js$21=Pervasives["^"];
      var $js$22=String["make"];
      var $js$23=$js$22(prec,48);
      var $js$24=Pervasives["^"];
      var $js$25=Pervasives["string_of_int"];
      var $js$26=$js$25(n+1-off+s["length"]);
      var $js$27=$js$24("e",$js$26);
      var $js$28=$js$21($js$23,$js$27);
      var $js$29=$js$20("1.",$js$28);
      return $js$19(sign,$js$29)}
    else
     {var $js$30=Pervasives["^"];
      var $js$31=Pervasives["^"];
      var $js$32=Bytes["sub_string"];
      var $js$33=$js$32(s,off,1);
      var $js$34=Pervasives["^"];
      var $js$35=Pervasives["^"];
      var $js$36=Bytes["sub_string"];
      var $js$37=$js$36(s,1+off,-1+prec);
      var $js$38=Pervasives["^"];
      var $js$39=Pervasives["string_of_int"];
      var $js$40=$js$39(n-(1+off)+s["length"]);
      var $js$41=$js$38("e",$js$40);
      var $js$42=$js$35($js$37,$js$41);
      var $js$43=$js$34(".",$js$42);
      var $js$44=$js$31($js$33,$js$43);
      return $js$30(sign,$js$44)}};
var
 shift_left_big_int=
  function(bi,n)
   {var $js$4=n<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("shift_left_big_int")}
    else
     {var $js$6=n=0;
      if($js$6)
       {return bi}
      else
       {var $js$7=bi[1]=0;
        if($js$7)
         {return bi}
        else
         {var size_bi=num_digits_big_int(bi);
          var
           size_res=
            size_bi+(n+Nat["length_of_digit"]-1)/Nat["length_of_digit"];
          var res="unknown primitive:create_nat";
          var ndigits=n/Nat["length_of_digit"];
          "unknown primitive:set_to_zero_nat";
          "unknown primitive:blit_nat";
          var nbits=n%Nat["length_of_digit"];
          var $js$8=nbits>0;
          if($js$8){"unknown primitive:shift_left_nat"}else{}
          return [0,bi[1],res]}}}};
var
 shift_right_towards_zero_big_int=
  function(bi,n)
   {var $js$4=n<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];
      return $js$5("shift_right_towards_zero_big_int")}
    else
     {var $js$6=n=0;
      if($js$6)
       {return bi}
      else
       {var $js$7=bi[1]=0;
        if($js$7)
         {return bi}
        else
         {var size_bi=num_digits_big_int(bi);
          var ndigits=n/Nat["length_of_digit"];
          var nbits=n%Nat["length_of_digit"];
          var $js$8=ndigits>=size_bi;
          if($js$8)
           {return zero_big_int}
          else
           {var size_res=size_bi-ndigits;
            var res="unknown primitive:create_nat";
            "unknown primitive:blit_nat";
            var $js$9=nbits>0;
            if($js$9)
             {var tmp="unknown primitive:create_nat";
              "unknown primitive:shift_right_nat"}
            else
             {}
            var $js$10=Nat["is_zero_nat"];
            var $js$11=$js$10(res,0,size_res);
            if($js$11){return zero_big_int}else{return [0,bi[1],res]}}}}}};
var
 two_power_m1_big_int=
  function(n)
   {var $js$4=n<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];
      return $js$5("two_power_m1_big_int")}
    else
     {var $js$6=n=0;
      if($js$6)
       {return zero_big_int}
      else
       {var size_res=(n+Nat["length_of_digit"]-1)/Nat["length_of_digit"];
        var $js$7=Nat["make_nat"];
        var res=$js$7(size_res);
        "unknown primitive:set_digit_nat_native";
        var $js$8="unknown primitive:decr_nat";
        0;
        return [0,1,res]}}};
var
 shift_right_big_int=
  function(bi,n)
   {var $js$4=n<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("shift_right_big_int")}
    else
     {var $js$6=bi[1]>=0;
      if($js$6)
       {return shift_right_towards_zero_big_int(bi,n)}
      else
       {var $js$7=two_power_m1_big_int(n);
        var $js$8=sub_big_int(bi,$js$7);
        return shift_right_towards_zero_big_int($js$8,n)}}};
var
 extract_big_int=
  function(bi,ofs,n)
   {var $js$4=ofs<0||n<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("extract_big_int")}
    else
     {var $js$6=bi[1]=0;
      if($js$6)
       {return bi}
      else
       {var size_bi=num_digits_big_int(bi);
        var size_res=(n+Nat["length_of_digit"]-1)/Nat["length_of_digit"];
        var ndigits=ofs/Nat["length_of_digit"];
        var nbits=ofs%Nat["length_of_digit"];
        var $js$7=Nat["make_nat"];
        var res=$js$7(size_res);
        var $js$8=ndigits<size_bi;
        if($js$8)
         {var $js$9=Pervasives["min"];
          var $js$10=$js$9(size_res,size_bi-ndigits);
          "unknown primitive:blit_nat"}
        else
         {}
        var $js$11=bi[1]<0;
        if($js$11)
         {"unknown primitive:complement_nat";
          var
           carry_incr=
            function(i)
             {var $js$12="unknown primitive:is_digit_zero";
              var $js$13=carry_incr(i+1);
              var $js$14=$js$12&&$js$13;
              var $js$15=i>=size_bi||$js$14;
              return i>=ndigits||$js$15};
          var $js$12=carry_incr(0);
          if($js$12){var $js$13="unknown primitive:incr_nat";0}else{}}
        else
         {}
        var $js$14=nbits>0;
        if($js$14)
         {var tmp="unknown primitive:create_nat";
          "unknown primitive:shift_right_nat"}
        else
         {}
        var n'=n%Nat["length_of_digit"];
        var $js$15=n'>0;
        if($js$15)
         {var tmp$1="unknown primitive:create_nat";
          "unknown primitive:set_digit_nat_native";
          "unknown primitive:land_digit_nat"}
        else
         {}
        var $js$16=Nat["is_zero_nat"];
        var $js$17=$js$16(res,0,size_res);
        if($js$17){return zero_big_int}else{return [0,1,res]}}}};
var
 and_big_int=
  function(a,b)
   {var $js$4=a[1]<0||b[1]<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("and_big_int")}
    else
     {var $js$6=(a[1]=0)||(b[1]=0);
      if($js$6)
       {return zero_big_int}
      else
       {var size_a=num_digits_big_int(a);
        var size_b=num_digits_big_int(b);
        var $js$7=Pervasives["min"];
        var size_res=$js$7(size_a,size_b);
        var res="unknown primitive:create_nat";
        "unknown primitive:blit_nat";
        var $js$8=0;
        var $js$9=size_res-1;
        for(var i=$js$8;i<=$js$9;i++){"unknown primitive:land_digit_nat"}
        var $js$10=Nat["is_zero_nat"];
        var $js$11=$js$10(res,0,size_res);
        if($js$11){return zero_big_int}else{return [0,1,res]}}}};
var
 or_big_int=
  function(a,b)
   {var $js$4=a[1]<0||b[1]<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("or_big_int")}
    else
     {var $js$6=a[1]=0;
      if($js$6)
       {return b}
      else
       {var $js$7=b[1]=0;
        if($js$7)
         {return a}
        else
         {var size_a=num_digits_big_int(a);
          var size_b=num_digits_big_int(b);
          var $js$8=Pervasives["max"];
          var size_res=$js$8(size_a,size_b);
          var res="unknown primitive:create_nat";
          var
           or_aux=
            function(a',b',size_b')
             {"unknown primitive:blit_nat";
              var $js$9=0;
              var $js$10=size_b'-1;
              for(var i=$js$9;i<=$js$10;i++)
               {"unknown primitive:lor_digit_nat"}};
          var $js$9=size_a>=size_b;
          if($js$9){or_aux(a,b,size_b)}else{or_aux(b,a,size_a)}
          var $js$10=Nat["is_zero_nat"];
          var $js$11=$js$10(res,0,size_res);
          if($js$11){return zero_big_int}else{return [0,1,res]}}}}};
var
 xor_big_int=
  function(a,b)
   {var $js$4=a[1]<0||b[1]<0;
    if($js$4)
     {var $js$5=Pervasives["invalid_arg"];return $js$5("xor_big_int")}
    else
     {var $js$6=a[1]=0;
      if($js$6)
       {return b}
      else
       {var $js$7=b[1]=0;
        if($js$7)
         {return a}
        else
         {var size_a=num_digits_big_int(a);
          var size_b=num_digits_big_int(b);
          var $js$8=Pervasives["max"];
          var size_res=$js$8(size_a,size_b);
          var res="unknown primitive:create_nat";
          var
           xor_aux=
            function(a',b',size_b')
             {"unknown primitive:blit_nat";
              var $js$9=0;
              var $js$10=size_b'-1;
              for(var i=$js$9;i<=$js$10;i++)
               {"unknown primitive:lxor_digit_nat"}};
          var $js$9=size_a>=size_b;
          if($js$9){xor_aux(a,b,size_b)}else{xor_aux(b,a,size_a)}
          var $js$10=Nat["is_zero_nat"];
          var $js$11=$js$10(res,0,size_res);
          if($js$11){return zero_big_int}else{return [0,1,res]}}}}};
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
