// Generated CODE, PLEASE EDIT WITH CARE 

var $$String=require("String");
var Char=require("Char");
var Pervasives=require("Pervasives");
var Int_misc=require("Int_misc");
var Bytes=require("Bytes");
var Sys=require("Sys");


CamlPrimtivie["initialize_nat"](/* () */0);
var length_nat=function(n){return n["length"]-1;};

var length_of_digit=Sys["word_size"];

var
 make_nat=
  function(len)
   {if(len<0)
     {return Pervasives["invalid_arg"]("make_nat");}
    else
     {var res=CamlPrimtivie["create_nat"](len);
      
      CamlPrimtivie["set_to_zero_nat"](res,0,len);
      return res;
      }
    };

var a_2=make_nat(2);

var a_1=make_nat(1);

var b_2=make_nat(2);

var
 copy_nat=
  function(nat,off_set,length)
   {var res=CamlPrimtivie["create_nat"](length);
    
    CamlPrimtivie["blit_nat"](res,0,nat,off_set,length);
    return res;
    };

var
 is_zero_nat=
  function(n,off,len)
   {return CamlPrimtivie["compare_nat"]
            (make_nat(1),0,1,n,off,CamlPrimtivie["num_digits_nat"](n,off,len))=
           0;
    };

var
 is_nat_int=
  function(nat,off,len)
   {return (CamlPrimtivie["num_digits_nat"](nat,off,len)=1)&&
           CamlPrimtivie["is_digit_int"](nat,off);
    };

var
 sys_int_of_nat=
  function(nat,off,len)
   {if(is_nat_int(nat,off,len))
     {return CamlPrimtivie["nth_digit_nat"](nat,off);}
    else
     {return Pervasives["failwith"]("int_of_nat");}
    };

var int_of_nat=function(nat){return sys_int_of_nat(nat,0,length_nat(nat));};

var
 nat_of_int=
  function(i)
   {if(i<0)
     {return Pervasives["invalid_arg"]("nat_of_int");}
    else
     {var res=make_nat(1);
      
      if(i=0)
       {return res;}
      else
       {CamlPrimtivie["set_digit_nat"](res,0,i);return res;}
      }
    };

var
 eq_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {return CamlPrimtivie["compare_nat"]
            (nat1,
             off1,
             CamlPrimtivie["num_digits_nat"](nat1,off1,len1),
             nat2,
             off2,
             CamlPrimtivie["num_digits_nat"](nat2,off2,len2))=
           0;
    };

var
 le_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {return CamlPrimtivie["compare_nat"]
            (nat1,
             off1,
             CamlPrimtivie["num_digits_nat"](nat1,off1,len1),
             nat2,
             off2,
             CamlPrimtivie["num_digits_nat"](nat2,off2,len2))<=
           0;
    };

var
 lt_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {return CamlPrimtivie["compare_nat"]
            (nat1,
             off1,
             CamlPrimtivie["num_digits_nat"](nat1,off1,len1),
             nat2,
             off2,
             CamlPrimtivie["num_digits_nat"](nat2,off2,len2))<
           0;
    };

var
 ge_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {return CamlPrimtivie["compare_nat"]
            (nat1,
             off1,
             CamlPrimtivie["num_digits_nat"](nat1,off1,len1),
             nat2,
             off2,
             CamlPrimtivie["num_digits_nat"](nat2,off2,len2))>=
           0;
    };

var
 gt_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {return CamlPrimtivie["compare_nat"]
            (nat1,
             off1,
             CamlPrimtivie["num_digits_nat"](nat1,off1,len1),
             nat2,
             off2,
             CamlPrimtivie["num_digits_nat"](nat2,off2,len2))>
           0;
    };

var
 gcd_int_nat=
  function(i,nat,off,len)
   {if(i=0)
     {return 1;}
    else
     {if(is_nat_int(nat,off,len))
       {CamlPrimtivie["set_digit_nat"]
         (nat,
          off,
          Int_misc["gcd_int"](CamlPrimtivie["nth_digit_nat"](nat,off),i));
        return 0;
        }
      else
       {var len_copy=1+len;
        
        var copy=CamlPrimtivie["create_nat"](len_copy);
        
        var quotient=CamlPrimtivie["create_nat"](1);
        
        var remainder=CamlPrimtivie["create_nat"](1);
        
        CamlPrimtivie["blit_nat"](copy,0,nat,off,len);
        CamlPrimtivie["set_digit_nat"](copy,len,0);
        CamlPrimtivie["div_digit_nat"]
         (quotient,0,remainder,0,copy,0,len_copy,nat_of_int(i),0);
        CamlPrimtivie["set_digit_nat"]
         (nat,
          off,
          Int_misc["gcd_int"](CamlPrimtivie["nth_digit_nat"](remainder,0),i));
        return 0;
        }
      }
    };

var
 exchange=
  function(r1,r2){var old1=r1[1];r1[1]=r2[1],0;return r2[1]=old1,0;};

var
 gcd_nat=
  function(nat1,off1,len1,nat2,off2,len2)
   {if(is_zero_nat(nat1,off1,len1))
     {CamlPrimtivie["blit_nat"](nat1,off1,nat2,off2,len2);return len2;}
    else
     {var copy1=[0,CamlPrimtivie["create_nat"](1+len1)];
      
      var copy2=[0,CamlPrimtivie["create_nat"](1+len2)];
      
      CamlPrimtivie["blit_nat"](copy1[1],0,nat1,off1,len1);
      CamlPrimtivie["blit_nat"](copy2[1],0,nat2,off2,len2);
      CamlPrimtivie["set_digit_nat"](copy1[1],len1,0);
      CamlPrimtivie["set_digit_nat"](copy2[1],len2,0);
      if(lt_nat(copy1[1],0,len1,copy2[1],0,len2)){exchange(copy1,copy2)}else{}
      
      var
       real_len1=
        [0,CamlPrimtivie["num_digits_nat"](copy1[1],0,length_nat(copy1[1]))];
      
      var
       real_len2=
        [0,CamlPrimtivie["num_digits_nat"](copy2[1],0,length_nat(copy2[1]))];
      
      while(!is_zero_nat(copy2[1],0,real_len2[1]))
       {CamlPrimtivie["set_digit_nat"](copy1[1],real_len1[1],0),
        CamlPrimtivie["div_nat"]
         (copy1[1],0,1+real_len1[1],copy2[1],0,real_len2[1]),
        exchange(copy1,copy2),
        real_len1[1]=
        real_len2[1],
        0,
        real_len2[1]=
        CamlPrimtivie["num_digits_nat"](copy2[1],0,real_len2[1]),
        0}
      
      CamlPrimtivie["blit_nat"](nat1,off1,copy1[1],0,real_len1[1]);
      return real_len1[1];
      }
    };

var
 sqrt_nat=
  function(rad,off,len)
   {var len$1=CamlPrimtivie["num_digits_nat"](rad,off,len);
    
    var len_parity=len$1%2;
    
    var rad_len=len$1+1+len_parity;
    
    var res=CamlPrimtivie["create_nat"](rad_len);
    
    CamlPrimtivie["blit_nat"](res,0,rad,off,len$1);
    CamlPrimtivie["set_digit_nat"](res,len$1,0);
    CamlPrimtivie["set_digit_nat"](res,rad_len-1,0);
    var rad$1=res;
    
    var cand_len=(len$1+1)/2;
    
    var cand_rest=rad_len-cand_len;
    
    var cand=make_nat(cand_len);
    
    var
     shift_cand=
      (CamlPrimtivie["num_leading_zero_bits_in_digit"](rad$1,len$1-1)+
       Sys["word_size"]*
       len_parity)/
      2;
    
    if(shift_cand=Sys["word_size"])
     {return cand;}
    else
     {CamlPrimtivie["complement_nat"](cand,0,cand_len);
      CamlPrimtivie["shift_right_nat"](cand,0,1,a_1,0,shift_cand);
      var next_cand=CamlPrimtivie["create_nat"](rad_len);
      
      var
       loop=
        function(param)
         {CamlPrimtivie["blit_nat"](next_cand,0,rad$1,0,rad_len);
          CamlPrimtivie["div_nat"](next_cand,0,rad_len,cand,0,cand_len);
          CamlPrimtivie["add_nat"]
           (next_cand,cand_len,cand_rest,cand,0,cand_len,0);
          CamlPrimtivie["shift_right_nat"]
           (next_cand,cand_len,cand_rest,a_1,0,1);
          if(lt_nat(next_cand,cand_len,cand_rest,cand,0,cand_len))
           {CamlPrimtivie["blit_nat"](cand,0,next_cand,cand_len,cand_len);
            return loop(/* () */0);
            }
          else
           {return cand;}
          };
      
      return loop(/* () */0);
      }
    };

var power_base_max=make_nat(2);

if(length_of_digit!=32)
 {if(length_of_digit!=64)
   {throw [0,Assert_failure,[0,"nat.ml",252,9]];}
  else
   {CamlPrimtivie["set_digit_nat"](power_base_max,0,1e18),
    CamlPrimtivie["mult_digit_nat"]
     (power_base_max,0,2,power_base_max,0,1,nat_of_int(9),0)}
  }
else
 {CamlPrimtivie["set_digit_nat"](power_base_max,0,1e9)}

if(length_of_digit!=32)
 {if(length_of_digit!=64)
   {throw [0,Assert_failure,[0,"nat.ml",259,9]];}
  else
   {var pmax=19;}
  }
else
 {var pmax=9;}

if(length_of_digit!=32)
 {if(length_of_digit!=64)
   {throw [0,Assert_failure,[0,"nat.ml",266,9]];}
  else
   {var max_superscript_10_power_in_int=18;}
  }
else
 {var max_superscript_10_power_in_int=9;}

if(length_of_digit!=32)
 {if(length_of_digit!=64)
   {throw [0,Assert_failure,[0,"nat.ml",272,9]];}
  else
   {var max_power_10_power_in_int=nat_of_int(1e18);}
  }
else
 {var max_power_10_power_in_int=nat_of_int(1e9);}

var
 raw_string_of_digit=
  function(nat,off)
   {if(is_nat_int(nat,off,1))
     {return Pervasives["string_of_int"]
              (CamlPrimtivie["nth_digit_nat"](nat,off));
      }
    else
     {CamlPrimtivie["blit_nat"](b_2,0,nat,off,1);
      CamlPrimtivie["div_digit_nat"]
       (a_2,0,a_1,0,b_2,0,2,max_power_10_power_in_int,0);
      var leading_digits=CamlPrimtivie["nth_digit_nat"](a_2,0);
      
      var
       s1=
        Pervasives["string_of_int"](CamlPrimtivie["nth_digit_nat"](a_1,0));
      
      var len=s1["length"];
      
      if(leading_digits<10)
       {var result=Bytes["make"](max_superscript_10_power_in_int+1,48);
        
        result[0]=Char["chr"](48+leading_digits),0;
        $$String["blit"](s1,0,result,result["length"]-len,len);
        return Bytes["to_string"](result);
        }
      else
       {var result$1=Bytes["make"](max_superscript_10_power_in_int+2,48);
        
        $$String["blit"]
         (Pervasives["string_of_int"](leading_digits),0,result$1,0,2);
        $$String["blit"](s1,0,result$1,result$1["length"]-len,len);
        return Bytes["to_string"](result$1);
        }
      }
    };

var digits="0123456789ABCDEF";

var
 make_power_base=
  function(base,power_base)
   {var i=[0,0];
    
    var j=[0,0];
    
    CamlPrimtivie["set_digit_nat"](power_base,0,base);
    while(i[0]++,CamlPrimtivie["is_digit_zero"](power_base,i[1]))
     {CamlPrimtivie["mult_digit_nat"]
       (power_base,i[1],2,power_base,-1+i[1],1,power_base,0)}
    
    while(j[1]<i[1]-1&&CamlPrimtivie["is_digit_int"](power_base,j[1])){j[0]++}
    
    return /* tuple */[0,i[1]-2,j[1]];
    };

var
 int_to_string=
  function($$int,s,pos_ref,base,times)
   {var i=[0,$$int];
    
    var j=[0,times];
    
    while((i[1]!=0||j[1]!=0)&&pos_ref[1]!=-1)
     {s[pos_ref[1]]=digits[i[1]%base],0,pos_ref[0]--,j[0]--,i[1]=i[1]/base,0}
    return 0;
    };

var
 power_base_int=
  function(base,i)
   {if((i=0)||(base=1))
     {return nat_of_int(1);}
    else
     {if(base=0)
       {return nat_of_int(0);}
      else
       {if(i<0)
         {return Pervasives["invalid_arg"]("power_base_int");}
        else
         {var power_base=make_nat(1+length_of_digit);
          
          var match=make_power_base(base,power_base);
          
          var pmax$1=match[1];
          
          var n=i/(1+pmax$1);
          
          var rem=i%(1+pmax$1);
          
          if(n>0)
           {if(i=Int_misc["biggest_int"]){var newn=n;}else{var newn=1+n;}
            
            var res=make_nat(newn);
            
            var res2=make_nat(newn);
            
            var l=Int_misc["num_bits_int"](n)-2;
            
            CamlPrimtivie["blit_nat"](res,0,power_base,pmax$1,1);
            for(var i$1=l;i$1>=0;i$1--)
             {var len=CamlPrimtivie["num_digits_nat"](res,0,newn);
              
              var len2=Pervasives["min"](n,2*len);
              
              var succ_len2=1+len2;
              
              CamlPrimtivie["square_nat"](res2,0,len2,res,0,len);
              if((n&1<<i$1)>0)
               {CamlPrimtivie["set_to_zero_nat"](res,0,len),
                CamlPrimtivie["mult_digit_nat"]
                 (res,0,succ_len2,res2,0,len2,power_base,pmax$1)}
              else
               {CamlPrimtivie["blit_nat"](res,0,res2,0,len2)}
              
              CamlPrimtivie["set_to_zero_nat"](res2,0,len2)}
            
            if(rem>0)
             {CamlPrimtivie["mult_digit_nat"]
               (res2,0,newn,res,0,n,power_base,-1+rem);
              return res2;
              }
            else
             {return res;}
            }
          else
           {return copy_nat(power_base,-1+rem,1);}
          }
        }
      }
    };

var
 unadjusted_string_of_nat=
  function(nat,off,len_nat)
   {var len=CamlPrimtivie["num_digits_nat"](nat,off,len_nat);
    
    if(len=1)
     {return raw_string_of_digit(nat,off);}
    else
     {var len_copy=[0,1+len];
      
      var copy1=CamlPrimtivie["create_nat"](len_copy[1]);
      
      var copy2=make_nat(len_copy[1]);
      
      var rest_digit=make_nat(2);
      
      if(len>Int_misc["biggest_int"]/(1+pmax))
       {return Pervasives["failwith"]("number too long");}
      else
       {var len_s=(1+pmax)*len;
        
        var s=Bytes["make"](len_s,48);
        
        var pos_ref=[0,len_s];
        
        len_copy[1]=-1+len_copy[1],0;
        CamlPrimtivie["blit_nat"](copy1,0,nat,off,len);
        CamlPrimtivie["set_digit_nat"](copy1,len,0);
        while(!is_zero_nat(copy1,0,len_copy[1]))
         {CamlPrimtivie["div_digit_nat"]
           (copy2,0,rest_digit,0,copy1,0,1+len_copy[1],power_base_max,0);
          var str=raw_string_of_digit(rest_digit,0);
          
          $$String["blit"](str,0,s,pos_ref[1]-str["length"],str["length"]),
          pos_ref[1]=
          pos_ref[1]-
          pmax,
          0,
          len_copy[1]=
          CamlPrimtivie["num_digits_nat"](copy2,0,len_copy[1]),
          0,
          CamlPrimtivie["blit_nat"](copy1,0,copy2,0,len_copy[1]),
          CamlPrimtivie["set_digit_nat"](copy1,len_copy[1],0)}
        
        return Bytes["unsafe_to_string"](s);
        }
      }
    };

var
 string_of_nat=
  function(nat)
   {var s=unadjusted_string_of_nat(nat,0,length_nat(nat));
    
    var index=[0,0];
    
    try
     {for(var i=0;i<=s["length"]-2;i++)
       {if(s[i]!=48){index[1]=i,0;throw Pervasives["Exit"];}else{}}
      }
    catch(exn){if(exn=Pervasives["Exit"]){}else{throw exn;}}
    
    return $$String["sub"](s,index[1],s["length"]-index[1]);
    };

var
 base_digit_of_char=
  function(c,base)
   {var n=c;
    
    if(n>=48&&n<=47+Pervasives["min"](base,10))
     {return n-48;}
    else
     {if(n>=65&&n<=65+base-11)
       {return n-55;}
      else
       {if(n>=97&&n<=97+base-11)
         {return n-87;}
        else
         {return Pervasives["failwith"]("invalid digit");}
        }
      }
    };

var
 sys_nat_of_string=
  function(base,s,off,len)
   {var power_base=make_nat(1+length_of_digit);
    
    var match=make_power_base(base,power_base);
    
    var pint=match[2];
    
    var pmax$1=match[1];
    
    var new_len=[0,1+len/(pmax$1+1)];
    
    var current_len=[0,1];
    
    var possible_len=[0,Pervasives["min"](2,new_len[1])];
    
    var nat1=make_nat(new_len[1]);
    
    var nat2=make_nat(new_len[1]);
    
    var digits_read=[0,0];
    
    var bound=off+len-1;
    
    var $$int=[0,0];
    
    for(var i=off;i<=bound;i++)
     {var c=s[i];
      
      var exit;
      
      if(c>=32)
       {if(c<93)
         {var switcher=-33+c;if(58<switcher>>>0){exit=5;}else{exit=6;}}
        else
         {if(c!=95){exit=6;}else{if(i>off){}else{exit=6;}}}
        }
      else
       {if(c>=11)
         {if(c!=13){exit=6;}else{exit=5;}}
        else
         {if(c>=9){exit=5;}else{exit=6;}}
        }
      
      switch(exit)
       {case 6:
         $$int[1]=$$int[1]*base+base_digit_of_char(c,base),0,digits_read[0]++;
        case 5:
        }
      
      if(((digits_read[1]=pint)||(i=bound))&&!(digits_read[1]=0))
       {CamlPrimtivie["set_digit_nat"](nat1,0,$$int[1]);
        if(new_len[1]=current_len[1])
         {var erase_len=current_len[1]-1;}
        else
         {var erase_len=current_len[1];}
        
        for(var j=1;j<=erase_len;j++)
         {CamlPrimtivie["set_digit_nat"](nat1,j,0)}
        
        CamlPrimtivie["mult_digit_nat"]
         (nat1,
          0,
          possible_len[1],
          nat2,
          0,
          current_len[1],
          power_base,
          -1+digits_read[1]),
        CamlPrimtivie["blit_nat"](nat2,0,nat1,0,possible_len[1]),
        current_len[1]=
        CamlPrimtivie["num_digits_nat"](nat1,0,possible_len[1]),
        0,
        possible_len[1]=
        Pervasives["min"](new_len[1],1+current_len[1]),
        0,
        $$int[1]=
        0,
        0,
        digits_read[1]=
        0,
        0}
      else
       {}
      }
    
    var nat=CamlPrimtivie["create_nat"](current_len[1]);
    
    CamlPrimtivie["blit_nat"](nat,0,nat1,0,current_len[1]);
    return nat;
    };

var nat_of_string=function(s){return sys_nat_of_string(10,s,0,s["length"]);};

var
 float_of_nat=
  function(nat)
   {return CamlPrimtivie["caml_float_of_string"](string_of_nat(nat));};

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

