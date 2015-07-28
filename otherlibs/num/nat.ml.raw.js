var String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var Int_misc=require("Int_misc");
var Bytes=require("Bytes");
var Sys=require("Sys");
"unknown primitive:initialize_nat";
var length_nat=function(n){return n["length"]-1};
var length_of_digit=Sys["word_size"];
var
 make_nat=
  function(len)
   {var $js=len<0;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("make_nat")}
    else
     {var res="unknown primitive:create_nat";
      "unknown primitive:set_to_zero_nat";
      return res}};
var a_2=make_nat(2);
var a_1=make_nat(1);
var b_2=make_nat(2);
var
 copy_nat=
  function(nat,off_set,length)
   {var res="unknown primitive:create_nat";
    "unknown primitive:blit_nat";
    return res};
var
 is_zero_nat=
  function(n,off,len)
   {var $js=make_nat(1);
    var $js$1="unknown primitive:num_digits_nat";
    var $js$2="unknown primitive:compare_nat";
    return $js$2=0};
var
 is_nat_int=
  function(nat,off,len)
   {var $js="unknown primitive:num_digits_nat";
    var $js$1=$js=1;
    var $js$2="unknown primitive:is_digit_int";
    return $js$1&&$js$2};
var
 sys_int_of_nat=
  function(nat,off,len)
   {var $js=is_nat_int(nat,off,len);
    if($js)
     {return "unknown primitive:nth_digit_nat"}
    else
     {var $js$1=Pervasives["failwith"];return $js$1("int_of_nat")}};
var
 int_of_nat=
  function(nat){var $js=length_nat(nat);return sys_int_of_nat(nat,0,$js)};
var
 nat_of_int=
  function(i)
   {var $js=i<0;
    if($js)
     {var $js$1=Pervasives["invalid_arg"];return $js$1("nat_of_int")}
    else
     {var res=make_nat(1);
      var $js$2=i=0;
      if($js$2){return res}else{"unknown primitive:set_digit_nat";return res}}};
var
 eq_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {var $js="unknown primitive:num_digits_nat";
    var $js$1="unknown primitive:num_digits_nat";
    var $js$2="unknown primitive:compare_nat";
    return $js$2=0};
var
 le_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {var $js="unknown primitive:num_digits_nat";
    var $js$1="unknown primitive:num_digits_nat";
    var $js$2="unknown primitive:compare_nat";
    return $js$2<=0};
var
 lt_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {var $js="unknown primitive:num_digits_nat";
    var $js$1="unknown primitive:num_digits_nat";
    var $js$2="unknown primitive:compare_nat";
    return $js$2<0};
var
 ge_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {var $js="unknown primitive:num_digits_nat";
    var $js$1="unknown primitive:num_digits_nat";
    var $js$2="unknown primitive:compare_nat";
    return $js$2>=0};
var
 gt_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {var $js="unknown primitive:num_digits_nat";
    var $js$1="unknown primitive:num_digits_nat";
    var $js$2="unknown primitive:compare_nat";
    return $js$2>0};
var
 gcd_int_nat=
  function(i,nat,off,len)
   {var $js=i=0;
    if($js)
     {return 1}
    else
     {var $js$1=is_nat_int(nat,off,len);
      if($js$1)
       {var $js$2=Int_misc["gcd_int"];
        var $js$3="unknown primitive:nth_digit_nat";
        var $js$4=$js$2($js$3,i);
        "unknown primitive:set_digit_nat";
        return 0}
      else
       {var len_copy=1+len;
        var copy="unknown primitive:create_nat";
        var quotient="unknown primitive:create_nat";
        var remainder="unknown primitive:create_nat";
        "unknown primitive:blit_nat";
        "unknown primitive:set_digit_nat";
        var $js$5=nat_of_int(i);
        "unknown primitive:div_digit_nat";
        var $js$6=Int_misc["gcd_int"];
        var $js$7="unknown primitive:nth_digit_nat";
        var $js$8=$js$6($js$7,i);
        "unknown primitive:set_digit_nat";
        return 0}}};
var
 exchange=
  function(r1,r2){var old1=r1[1];r1[1]=r2[1],0;return r2[1]=old1,0};
var
 gcd_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {var $js=is_zero_nat(nat1,off1,len1);
    if($js)
     {"unknown primitive:blit_nat";return len2}
    else
     {var $js$1="unknown primitive:create_nat";
      var copy1=[0,$js$1];
      var $js$2="unknown primitive:create_nat";
      var copy2=[0,$js$2];
      "unknown primitive:blit_nat";
      "unknown primitive:blit_nat";
      "unknown primitive:set_digit_nat";
      "unknown primitive:set_digit_nat";
      var $js$3=lt_nat(copy1[1],0,len1,copy2[1],0,len2);
      if($js$3){exchange(copy1,copy2)}else{}
      var $js$4=length_nat(copy1[1]);
      var $js$5="unknown primitive:num_digits_nat";
      var real_len1=[0,$js$5];
      var $js$6=length_nat(copy2[1]);
      var $js$7="unknown primitive:num_digits_nat";
      var real_len2=[0,$js$7];
      for(;;)
       {var $js$8=is_zero_nat(copy2[1],0,real_len2[1]);
        var $js$9=!$js$8;
        if($js$9)
         {"unknown primitive:set_digit_nat";
          "unknown primitive:div_nat";
          exchange(copy1,copy2);
          real_len1[1]=real_len2[1],0;
          var $js$10="unknown primitive:num_digits_nat";
          real_len2[1]=$js$10,0}
        else
         break}
      "unknown primitive:blit_nat";
      return real_len1[1]}};
var
 sqrt_nat=
  function(rad,off,len)
   {var len$1="unknown primitive:num_digits_nat";
    var len_parity=len$1%2;
    var rad_len=len$1+1+len_parity;
    var res="unknown primitive:create_nat";
    "unknown primitive:blit_nat";
    "unknown primitive:set_digit_nat";
    "unknown primitive:set_digit_nat";
    var rad$1=res;
    var cand_len=(len$1+1)/2;
    var cand_rest=rad_len-cand_len;
    var cand=make_nat(cand_len);
    var $js="unknown primitive:num_leading_zero_bits_in_digit";
    var $js$1=$js+Sys["word_size"]*len_parity;
    var shift_cand=$js$1/2;
    var $js$2=shift_cand=Sys["word_size"];
    if($js$2)
     {return cand}
    else
     {"unknown primitive:complement_nat";
      "unknown primitive:shift_right_nat";
      var next_cand="unknown primitive:create_nat";
      var
       loop=
        function(param)
         {"unknown primitive:blit_nat";
          "unknown primitive:div_nat";
          var $js$3="unknown primitive:add_nat";
          0;
          "unknown primitive:shift_right_nat";
          var $js$4=lt_nat(next_cand,cand_len,cand_rest,cand,0,cand_len);
          if($js$4)
           {"unknown primitive:blit_nat";return loop(0)}
          else
           {return cand}};
      return loop(0)}};
var power_base_max=make_nat(2);
var $js=length_of_digit!=32;
if($js)
 {var $js$1=length_of_digit!=64;
  if($js$1)
   {var $js$2=[0,Assert_failure,[0,"nat.ml",252,9]];throw $js$2}
  else
   {"unknown primitive:set_digit_nat";
    var $js$3=nat_of_int(9);
    var $js$4="unknown primitive:mult_digit_nat";
    0}}
else
 {"unknown primitive:set_digit_nat"}
var $js$5=length_of_digit!=32;
if($js$5)
 {var $js$6=length_of_digit!=64;
  if($js$6)
   {var $js$7=[0,Assert_failure,[0,"nat.ml",259,9]];throw $js$7}
  else
   {var pmax=19}}
else
 {var pmax=9}
var $js$8=length_of_digit!=32;
if($js$8)
 {var $js$9=length_of_digit!=64;
  if($js$9)
   {var $js$10=[0,Assert_failure,[0,"nat.ml",266,9]];throw $js$10}
  else
   {var max_superscript_10_power_in_int=18}}
else
 {var max_superscript_10_power_in_int=9}
var $js$11=length_of_digit!=32;
if($js$11)
 {var $js$12=length_of_digit!=64;
  if($js$12)
   {var $js$13=[0,Assert_failure,[0,"nat.ml",272,9]];throw $js$13}
  else
   {var max_power_10_power_in_int=nat_of_int(1e18)}}
else
 {var max_power_10_power_in_int=nat_of_int(1e9)}
var
 raw_string_of_digit=
  function(nat,off)
   {var $js$14=is_nat_int(nat,off,1);
    if($js$14)
     {var $js$15=Pervasives["string_of_int"];
      var $js$16="unknown primitive:nth_digit_nat";
      return $js$15($js$16)}
    else
     {"unknown primitive:blit_nat";
      "unknown primitive:div_digit_nat";
      var leading_digits="unknown primitive:nth_digit_nat";
      var $js$17=Pervasives["string_of_int"];
      var $js$18="unknown primitive:nth_digit_nat";
      var s1=$js$17($js$18);
      var len=s1["length"];
      var $js$19=leading_digits<10;
      if($js$19)
       {var $js$20=Bytes["make"];
        var result=$js$20(max_superscript_10_power_in_int+1,48);
        var $js$21=Char["chr"];
        var $js$22=$js$21(48+leading_digits);
        result[0]=$js$22,0;
        var $js$23=String["blit"];
        $js$23(s1,0,result,result["length"]-len,len);
        var $js$24=Bytes["to_string"];
        return $js$24(result)}
      else
       {var $js$25=Bytes["make"];
        var result$1=$js$25(max_superscript_10_power_in_int+2,48);
        var $js$26=String["blit"];
        var $js$27=Pervasives["string_of_int"];
        var $js$28=$js$27(leading_digits);
        $js$26($js$28,0,result$1,0,2);
        var $js$29=String["blit"];
        $js$29(s1,0,result$1,result$1["length"]-len,len);
        var $js$30=Bytes["to_string"];
        return $js$30(result$1)}}};
var digits="0123456789ABCDEF";
var
 make_power_base=
  function(base,power_base)
   {var i=[0,0];
    var j=[0,0];
    "unknown primitive:set_digit_nat";
    for(;;)
     {i[0]++;
      var $js$14="unknown primitive:is_digit_zero";
      if($js$14){var $js$15="unknown primitive:mult_digit_nat";0}else break}
    for(;;)
     {var $js$16="unknown primitive:is_digit_int";
      var $js$17=j[1]<i[1]-1&&$js$16;
      if($js$17){j[0]++}else break}
    return [0,i[1]-2,j[1]]};
var
 int_to_string=
  function(int,s,pos_ref,base,times)
   {var i=[0,int];
    var j=[0,times];
    for(;;)
     {var $js$14=(i[1]!=0||j[1]!=0)&&pos_ref[1]!=-1;
      if($js$14)
       {var $js$15=digits[i[1]%base];
        s[pos_ref[1]]=$js$15,0;
        pos_ref[0]--;
        j[0]--;
        i[1]=i[1]/base,0}
      else
       break}
    return 0};
var
 power_base_int=
  function(base,i)
   {var $js$14=(i=0)||(base=1);
    if($js$14)
     {return nat_of_int(1)}
    else
     {var $js$15=base=0;
      if($js$15)
       {return nat_of_int(0)}
      else
       {var $js$16=i<0;
        if($js$16)
         {var $js$17=Pervasives["invalid_arg"];
          return $js$17("power_base_int")}
        else
         {var power_base=make_nat(1+length_of_digit);
          var match=make_power_base(base,power_base);
          var pmax$1=match[1];
          var n=i/(1+pmax$1);
          var rem=i%(1+pmax$1);
          var $js$18=n>0;
          if($js$18)
           {var $js$19=i=Int_misc["biggest_int"];
            if($js$19){var newn=n}else{var newn=1+n}
            var res=make_nat(newn);
            var res2=make_nat(newn);
            var $js$20=Int_misc["num_bits_int"];
            var $js$21=$js$20(n);
            var l=$js$21-2;
            "unknown primitive:blit_nat";
            var $js$22=l;
            var $js$23=0;
            for(var i$1=$js$22;i$1>=$js$23;i$1--)
             {var len="unknown primitive:num_digits_nat";
              var $js$24=Pervasives["min"];
              var len2=$js$24(n,2*len);
              var succ_len2=1+len2;
              var $js$25="unknown primitive:square_nat";
              0;
              var $js$26=(n&1<<i$1)>0;
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
             {return res}}
          else
           {return copy_nat(power_base,-1+rem,1)}}}}};
var
 unadjusted_string_of_nat=
  function(nat,off,len_nat)
   {var len="unknown primitive:num_digits_nat";
    var $js$14=len=1;
    if($js$14)
     {return raw_string_of_digit(nat,off)}
    else
     {var len_copy=[0,1+len];
      var copy1="unknown primitive:create_nat";
      var copy2=make_nat(len_copy[1]);
      var rest_digit=make_nat(2);
      var $js$15=len>Int_misc["biggest_int"]/(1+pmax);
      if($js$15)
       {var $js$16=Pervasives["failwith"];return $js$16("number too long")}
      else
       {var len_s=(1+pmax)*len;
        var $js$17=Bytes["make"];
        var s=$js$17(len_s,48);
        var pos_ref=[0,len_s];
        len_copy[1]=-1+len_copy[1],0;
        "unknown primitive:blit_nat";
        "unknown primitive:set_digit_nat";
        for(;;)
         {var $js$18=is_zero_nat(copy1,0,len_copy[1]);
          var $js$19=!$js$18;
          if($js$19)
           {"unknown primitive:div_digit_nat";
            var str=raw_string_of_digit(rest_digit,0);
            var $js$20=String["blit"];
            $js$20(str,0,s,pos_ref[1]-str["length"],str["length"]);
            pos_ref[1]=pos_ref[1]-pmax,0;
            var $js$21="unknown primitive:num_digits_nat";
            len_copy[1]=$js$21,0;
            "unknown primitive:blit_nat";
            "unknown primitive:set_digit_nat"}
          else
           break}
        var $js$22=Bytes["unsafe_to_string"];
        return $js$22(s)}}};
var
 string_of_nat=
  function(nat)
   {var $js$14=length_nat(nat);
    var s=unadjusted_string_of_nat(nat,0,$js$14);
    var index=[0,0];
    try
     {var $js$15=0;
      var $js$16=s["length"]-2;
      for(var i=$js$15;i<=$js$16;i++)
       {var $js$17=s[i];
        var $js$18=$js$17!=48;
        if($js$18)
         {index[1]=i,0;var $js$19=Pervasives["Exit"];throw $js$19}
        else
         {}}}
    catch(exn)
     {var $js$20=exn=Pervasives["Exit"];
      if($js$20){}else{"unknown primitive:reraise"}}
    var $js$21=String["sub"];
    return $js$21(s,index[1],s["length"]-index[1])};
var
 base_digit_of_char=
  function(c,base)
   {var n=c;
    var $js$14=Pervasives["min"];
    var $js$15=$js$14(base,10);
    var $js$16=47+$js$15;
    var $js$17=n<=$js$16;
    var $js$18=n>=48&&$js$17;
    if($js$18)
     {return n-48}
    else
     {var $js$19=n>=65&&n<=65+base-11;
      if($js$19)
       {return n-55}
      else
       {var $js$20=n>=97&&n<=97+base-11;
        if($js$20)
         {return n-87}
        else
         {var $js$21=Pervasives["failwith"];return $js$21("invalid digit")}}}};
var
 sys_nat_of_string=
  function(base,s,off,len)
   {var power_base=make_nat(1+length_of_digit);
    var match=make_power_base(base,power_base);
    var pint=match[2];
    var pmax$1=match[1];
    var new_len=[0,1+len/(pmax$1+1)];
    var current_len=[0,1];
    var $js$14=Pervasives["min"];
    var $js$15=$js$14(2,new_len[1]);
    var possible_len=[0,$js$15];
    var nat1=make_nat(new_len[1]);
    var nat2=make_nat(new_len[1]);
    var digits_read=[0,0];
    var bound=off+len-1;
    var int=[0,0];
    var $js$16=off;
    var $js$17=bound;
    for(var i=$js$16;i<=$js$17;i++)
     {var c=s[i];
      var $js$18=c>=32;
      if($js$18)
       {var $js$19=c<93;
        if($js$19)
         {var switcher=-33+c;
          var $js$20=58<switcher>>>0;
          if($js$20){var exit=5}else{var exit=6}}
        else
         {var $js$21=c!=95;
          if($js$21)
           {var exit=6}
          else
           {var $js$22=i>off;if($js$22){}else{var exit=6}}}}
      else
       {var $js$23=c>=11;
        if($js$23)
         {var $js$24=c!=13;if($js$24){var exit=6}else{var exit=5}}
        else
         {var $js$25=c>=9;if($js$25){var exit=5}else{var exit=6}}}
      switch(exit)
       {case 6:
         var $js$26=base_digit_of_char(c,base);
         var $js$27=int[1]*base+$js$26;
         int[1]=$js$27,0;
         digits_read[0]++;
        case 5:
        }
      var $js$28=((digits_read[1]=pint)||(i=bound))&&!(digits_read[1]=0);
      if($js$28)
       {"unknown primitive:set_digit_nat";
        var $js$29=new_len[1]=current_len[1];
        if($js$29)
         {var erase_len=current_len[1]-1}
        else
         {var erase_len=current_len[1]}
        var $js$30=1;
        var $js$31=erase_len;
        for(var j=$js$30;j<=$js$31;j++){"unknown primitive:set_digit_nat"}
        var $js$32="unknown primitive:mult_digit_nat";
        0;
        "unknown primitive:blit_nat";
        var $js$33="unknown primitive:num_digits_nat";
        current_len[1]=$js$33,0;
        var $js$34=Pervasives["min"];
        var $js$35=$js$34(new_len[1],1+current_len[1]);
        possible_len[1]=$js$35,0;
        int[1]=0,0;
        digits_read[1]=0,0}
      else
       {}}
    var nat="unknown primitive:create_nat";
    "unknown primitive:blit_nat";
    return nat};
var nat_of_string=function(s){return sys_nat_of_string(10,s,0,s["length"])};
var
 float_of_nat=
  function(nat)
   {var $js$14=string_of_nat(nat);
    return "unknown primitive:caml_float_of_string"};
module["exports"]=
{"make_nat":make_nat,
 "copy_nat":copy_nat,
 "length_nat":length_nat,
 "is_zero_nat":is_zero_nat,
 "is_nat_int":is_nat_int,
 "int_of_nat":int_of_nat,
 "nat_of_int":nat_of_int,
 "eq_nat":eq_nat,
 "le_nat":le_nat,
 "lt_nat":lt_nat,
 "ge_nat":ge_nat,
 "gt_nat":gt_nat,
 "gcd_nat":gcd_nat,
 "sqrt_nat":sqrt_nat,
 "string_of_nat":string_of_nat,
 "nat_of_string":nat_of_string,
 "sys_nat_of_string":sys_nat_of_string,
 "float_of_nat":float_of_nat,
 "make_power_base":make_power_base,
 "power_base_int":power_base_int,
 "length_of_digit":length_of_digit};
